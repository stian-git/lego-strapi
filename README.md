# Lego Strapi

![image](https://tekniskpotet.no/img/brickastle-screenshot.jpg)

Image above is of the front-end located [here.](https://github.com/stian-git/stian-martinsen-stormyr-semester-project-2)

# Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Contact](#contact)

## Description

This is the backend to my project [Brickastle](https://github.com/stian-git/stian-martinsen-stormyr-semester-project-2), a webshop specialized for Lego castles and offers both new and vintage models.

This Strapi contains two collection types; Products and Home.

### Home : Single Type

| Name                 | Datatype | Example                         |
| -------------------- | -------- | ------------------------------- |
| hero_banner_alt_text | text     | Some text to show on the banner |
| hero_banner          | media    | // image\* //                   |

### Products : Collection Type

| Name                | Datatype         | Example                          |
| ------------------- | ---------------- | -------------------------------- |
| title               | text             | Kingdoms Joust                   |
| description         | text multiline   | A modern castle set.1575 pieces. |
| price               | number (decimal) | 400                              |
| image_url           | text             | https://test.com/test.jpg        |
| featured            | boolean          | true                             |
| image               | media            | // images\* //                   |
| stock               | number (int)     | 3                                |
| productnumber       | text             | 10223                            |
| isProductionStopped | boolean          | false                            |

(\*) : The images above is images uploaded to Cloudinary.

## Built With

This was built using:

- [Strapi](https://strapi.io/)
- [Railway](https://railway.app/)
- [Cloudinary](https://cloudinary.com/)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone stian-git/lego-strapi
```

2. Install the dependencies by running this command inside the projects root folder:

```bash
npm install
```

3. Create a Cloudinary account and retrieve the API settings.

4. Have an empty database ready. Postgresql is used for this project, but any Strapi-supported DB can be used.

5. Add environment settings to access your db, cloudinary, etc.

6. Deploy the Strapi to a hosting service of your choice. Follow the instructions made for your hosting service. (this repo is made for Railway)

### Running

To run the app locally, run the following commands:

```bash
npm run start
```

To make changes to the data content and other changes not stored in the database:

```bash
npm run develop
```

## Contributing

This was made for a school project so I'm not planning for regular maintenance, but rather use it to show some of my work.
However I will welcome feedback, suggestions and ideas. Please reach me through the contact information below.

## Contact

The best way to reach me would be through the following sites:

[My Portfolio](https://tekniskpotet.no)

[My LinkedIn page](https://www.linkedin.com/in/stian-martinsen-stormyr-1662a515/)
