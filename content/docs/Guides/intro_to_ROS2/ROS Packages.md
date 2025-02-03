---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAO5JFAJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6Mk1vooCxdqbg8HiOJi3XXGsJpVafyxzx0haahyM6AiAiGTIDw7yZUNK%2FtFqalFFIkQr1LAnILKclVT97C5FvRSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMALp0TldtqQbWZcLzKtwD%2B%2F3MigavULKrwd4gRNvR2jnjY1qJLTdW0pSCxBxAGLo7RvI44RhhBVwj7FRCEAAf%2FYiJp4eXBQT1gabv3vEvATcvtxd39ZNwpiz4XGSlxDmLWaMkHpBIcHw5fwkV6FTbSGmRXgsMvnDDDzhVYe%2BvuNAJQnNQ%2Bxp7G7xu54MlJMNQJ%2F1TH3fJsAsNyvFXjMbAVjCEehKm1JLjUp3nxCjSBQj6kwhDpTN22uxGRvBkXrtRF36Y4IpwOUMb%2Bkay9Q%2BdkhKMA6Tr3%2BG679Mlh1NCMPV8bp75UWOycryGzYw9Czx6SS8Bee8O7HGILuQwdadcz2g4BKQ6RKpj4VPOqCk7Jh0vCSjZPvqz3Yo4fPSbkKOyU8nXuZAohM%2F5Is236qYSjtxlFWmtblOQb9vEsvYY8ImkxqMLZ5g1WiLxLvPmN%2FiwKXmtcbIEO%2BCblvi%2FhlDHOAMWYZj4zSJLt7Wsl%2BX0nGW%2BdyIh4Yame2MNACGW2DTwfoz1T8m4B8MbXB1atv43sDd%2FBVEGBQnNOolFqWEYEEU1jfWR0CLqAptozdfR4jtmDutO5o9SjpvU7kj1I1sHIVOH4WP32pU88Y1uOzHCVcU1nsA50XYI6TFwn0u8AlemFNZ5gge%2BZiQ%2ByOwwhI%2BDvQY6pgHvwapIAZgd2A65si9MnD0qUe6N24eWP5JBdpOEScvB23ZbtrW0Px9bkiw91voyGHPRVXntpfiV6p0TwZOq5FkgbPtxXpdJUFjdiMEyhvtdXBkiLiLMRhkQgEUt%2FiS%2BLb9ZrD5Ro%2By1yw8Y78FXH%2F1zVwhad%2FQKwpmosBm1Jb%2FTYstekBg8G2gC2AxBI6dAu0HguaE37nFjcxv4nzIJureIkgrGrgP9&X-Amz-Signature=a3ea02049144f2cd4a4c5602c2ed7239b5bfdee96fac5b9022182879c8777a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAO5JFAJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6Mk1vooCxdqbg8HiOJi3XXGsJpVafyxzx0haahyM6AiAiGTIDw7yZUNK%2FtFqalFFIkQr1LAnILKclVT97C5FvRSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMALp0TldtqQbWZcLzKtwD%2B%2F3MigavULKrwd4gRNvR2jnjY1qJLTdW0pSCxBxAGLo7RvI44RhhBVwj7FRCEAAf%2FYiJp4eXBQT1gabv3vEvATcvtxd39ZNwpiz4XGSlxDmLWaMkHpBIcHw5fwkV6FTbSGmRXgsMvnDDDzhVYe%2BvuNAJQnNQ%2Bxp7G7xu54MlJMNQJ%2F1TH3fJsAsNyvFXjMbAVjCEehKm1JLjUp3nxCjSBQj6kwhDpTN22uxGRvBkXrtRF36Y4IpwOUMb%2Bkay9Q%2BdkhKMA6Tr3%2BG679Mlh1NCMPV8bp75UWOycryGzYw9Czx6SS8Bee8O7HGILuQwdadcz2g4BKQ6RKpj4VPOqCk7Jh0vCSjZPvqz3Yo4fPSbkKOyU8nXuZAohM%2F5Is236qYSjtxlFWmtblOQb9vEsvYY8ImkxqMLZ5g1WiLxLvPmN%2FiwKXmtcbIEO%2BCblvi%2FhlDHOAMWYZj4zSJLt7Wsl%2BX0nGW%2BdyIh4Yame2MNACGW2DTwfoz1T8m4B8MbXB1atv43sDd%2FBVEGBQnNOolFqWEYEEU1jfWR0CLqAptozdfR4jtmDutO5o9SjpvU7kj1I1sHIVOH4WP32pU88Y1uOzHCVcU1nsA50XYI6TFwn0u8AlemFNZ5gge%2BZiQ%2ByOwwhI%2BDvQY6pgHvwapIAZgd2A65si9MnD0qUe6N24eWP5JBdpOEScvB23ZbtrW0Px9bkiw91voyGHPRVXntpfiV6p0TwZOq5FkgbPtxXpdJUFjdiMEyhvtdXBkiLiLMRhkQgEUt%2FiS%2BLb9ZrD5Ro%2By1yw8Y78FXH%2F1zVwhad%2FQKwpmosBm1Jb%2FTYstekBg8G2gC2AxBI6dAu0HguaE37nFjcxv4nzIJureIkgrGrgP9&X-Amz-Signature=46cce4374787524a1c9c1fd8bd523af28788a1c7b203be660636a132963748c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAO5JFAJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6Mk1vooCxdqbg8HiOJi3XXGsJpVafyxzx0haahyM6AiAiGTIDw7yZUNK%2FtFqalFFIkQr1LAnILKclVT97C5FvRSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMALp0TldtqQbWZcLzKtwD%2B%2F3MigavULKrwd4gRNvR2jnjY1qJLTdW0pSCxBxAGLo7RvI44RhhBVwj7FRCEAAf%2FYiJp4eXBQT1gabv3vEvATcvtxd39ZNwpiz4XGSlxDmLWaMkHpBIcHw5fwkV6FTbSGmRXgsMvnDDDzhVYe%2BvuNAJQnNQ%2Bxp7G7xu54MlJMNQJ%2F1TH3fJsAsNyvFXjMbAVjCEehKm1JLjUp3nxCjSBQj6kwhDpTN22uxGRvBkXrtRF36Y4IpwOUMb%2Bkay9Q%2BdkhKMA6Tr3%2BG679Mlh1NCMPV8bp75UWOycryGzYw9Czx6SS8Bee8O7HGILuQwdadcz2g4BKQ6RKpj4VPOqCk7Jh0vCSjZPvqz3Yo4fPSbkKOyU8nXuZAohM%2F5Is236qYSjtxlFWmtblOQb9vEsvYY8ImkxqMLZ5g1WiLxLvPmN%2FiwKXmtcbIEO%2BCblvi%2FhlDHOAMWYZj4zSJLt7Wsl%2BX0nGW%2BdyIh4Yame2MNACGW2DTwfoz1T8m4B8MbXB1atv43sDd%2FBVEGBQnNOolFqWEYEEU1jfWR0CLqAptozdfR4jtmDutO5o9SjpvU7kj1I1sHIVOH4WP32pU88Y1uOzHCVcU1nsA50XYI6TFwn0u8AlemFNZ5gge%2BZiQ%2ByOwwhI%2BDvQY6pgHvwapIAZgd2A65si9MnD0qUe6N24eWP5JBdpOEScvB23ZbtrW0Px9bkiw91voyGHPRVXntpfiV6p0TwZOq5FkgbPtxXpdJUFjdiMEyhvtdXBkiLiLMRhkQgEUt%2FiS%2BLb9ZrD5Ro%2By1yw8Y78FXH%2F1zVwhad%2FQKwpmosBm1Jb%2FTYstekBg8G2gC2AxBI6dAu0HguaE37nFjcxv4nzIJureIkgrGrgP9&X-Amz-Signature=313b3155b3f50d74f0ef454909ee8b9718588aec4e225308bf9f59a8e376240d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAO5JFAJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6Mk1vooCxdqbg8HiOJi3XXGsJpVafyxzx0haahyM6AiAiGTIDw7yZUNK%2FtFqalFFIkQr1LAnILKclVT97C5FvRSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMALp0TldtqQbWZcLzKtwD%2B%2F3MigavULKrwd4gRNvR2jnjY1qJLTdW0pSCxBxAGLo7RvI44RhhBVwj7FRCEAAf%2FYiJp4eXBQT1gabv3vEvATcvtxd39ZNwpiz4XGSlxDmLWaMkHpBIcHw5fwkV6FTbSGmRXgsMvnDDDzhVYe%2BvuNAJQnNQ%2Bxp7G7xu54MlJMNQJ%2F1TH3fJsAsNyvFXjMbAVjCEehKm1JLjUp3nxCjSBQj6kwhDpTN22uxGRvBkXrtRF36Y4IpwOUMb%2Bkay9Q%2BdkhKMA6Tr3%2BG679Mlh1NCMPV8bp75UWOycryGzYw9Czx6SS8Bee8O7HGILuQwdadcz2g4BKQ6RKpj4VPOqCk7Jh0vCSjZPvqz3Yo4fPSbkKOyU8nXuZAohM%2F5Is236qYSjtxlFWmtblOQb9vEsvYY8ImkxqMLZ5g1WiLxLvPmN%2FiwKXmtcbIEO%2BCblvi%2FhlDHOAMWYZj4zSJLt7Wsl%2BX0nGW%2BdyIh4Yame2MNACGW2DTwfoz1T8m4B8MbXB1atv43sDd%2FBVEGBQnNOolFqWEYEEU1jfWR0CLqAptozdfR4jtmDutO5o9SjpvU7kj1I1sHIVOH4WP32pU88Y1uOzHCVcU1nsA50XYI6TFwn0u8AlemFNZ5gge%2BZiQ%2ByOwwhI%2BDvQY6pgHvwapIAZgd2A65si9MnD0qUe6N24eWP5JBdpOEScvB23ZbtrW0Px9bkiw91voyGHPRVXntpfiV6p0TwZOq5FkgbPtxXpdJUFjdiMEyhvtdXBkiLiLMRhkQgEUt%2FiS%2BLb9ZrD5Ro%2By1yw8Y78FXH%2F1zVwhad%2FQKwpmosBm1Jb%2FTYstekBg8G2gC2AxBI6dAu0HguaE37nFjcxv4nzIJureIkgrGrgP9&X-Amz-Signature=f7d70b9e7d602b076d277007f04d336615892cd13560d498d540482d73e7f5fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAO5JFAJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6Mk1vooCxdqbg8HiOJi3XXGsJpVafyxzx0haahyM6AiAiGTIDw7yZUNK%2FtFqalFFIkQr1LAnILKclVT97C5FvRSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMALp0TldtqQbWZcLzKtwD%2B%2F3MigavULKrwd4gRNvR2jnjY1qJLTdW0pSCxBxAGLo7RvI44RhhBVwj7FRCEAAf%2FYiJp4eXBQT1gabv3vEvATcvtxd39ZNwpiz4XGSlxDmLWaMkHpBIcHw5fwkV6FTbSGmRXgsMvnDDDzhVYe%2BvuNAJQnNQ%2Bxp7G7xu54MlJMNQJ%2F1TH3fJsAsNyvFXjMbAVjCEehKm1JLjUp3nxCjSBQj6kwhDpTN22uxGRvBkXrtRF36Y4IpwOUMb%2Bkay9Q%2BdkhKMA6Tr3%2BG679Mlh1NCMPV8bp75UWOycryGzYw9Czx6SS8Bee8O7HGILuQwdadcz2g4BKQ6RKpj4VPOqCk7Jh0vCSjZPvqz3Yo4fPSbkKOyU8nXuZAohM%2F5Is236qYSjtxlFWmtblOQb9vEsvYY8ImkxqMLZ5g1WiLxLvPmN%2FiwKXmtcbIEO%2BCblvi%2FhlDHOAMWYZj4zSJLt7Wsl%2BX0nGW%2BdyIh4Yame2MNACGW2DTwfoz1T8m4B8MbXB1atv43sDd%2FBVEGBQnNOolFqWEYEEU1jfWR0CLqAptozdfR4jtmDutO5o9SjpvU7kj1I1sHIVOH4WP32pU88Y1uOzHCVcU1nsA50XYI6TFwn0u8AlemFNZ5gge%2BZiQ%2ByOwwhI%2BDvQY6pgHvwapIAZgd2A65si9MnD0qUe6N24eWP5JBdpOEScvB23ZbtrW0Px9bkiw91voyGHPRVXntpfiV6p0TwZOq5FkgbPtxXpdJUFjdiMEyhvtdXBkiLiLMRhkQgEUt%2FiS%2BLb9ZrD5Ro%2By1yw8Y78FXH%2F1zVwhad%2FQKwpmosBm1Jb%2FTYstekBg8G2gC2AxBI6dAu0HguaE37nFjcxv4nzIJureIkgrGrgP9&X-Amz-Signature=436edfa0f621c073a993def8582ccf86a04b9e0d92d08e7e89f6f5d9dc894507&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAO5JFAJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6Mk1vooCxdqbg8HiOJi3XXGsJpVafyxzx0haahyM6AiAiGTIDw7yZUNK%2FtFqalFFIkQr1LAnILKclVT97C5FvRSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMALp0TldtqQbWZcLzKtwD%2B%2F3MigavULKrwd4gRNvR2jnjY1qJLTdW0pSCxBxAGLo7RvI44RhhBVwj7FRCEAAf%2FYiJp4eXBQT1gabv3vEvATcvtxd39ZNwpiz4XGSlxDmLWaMkHpBIcHw5fwkV6FTbSGmRXgsMvnDDDzhVYe%2BvuNAJQnNQ%2Bxp7G7xu54MlJMNQJ%2F1TH3fJsAsNyvFXjMbAVjCEehKm1JLjUp3nxCjSBQj6kwhDpTN22uxGRvBkXrtRF36Y4IpwOUMb%2Bkay9Q%2BdkhKMA6Tr3%2BG679Mlh1NCMPV8bp75UWOycryGzYw9Czx6SS8Bee8O7HGILuQwdadcz2g4BKQ6RKpj4VPOqCk7Jh0vCSjZPvqz3Yo4fPSbkKOyU8nXuZAohM%2F5Is236qYSjtxlFWmtblOQb9vEsvYY8ImkxqMLZ5g1WiLxLvPmN%2FiwKXmtcbIEO%2BCblvi%2FhlDHOAMWYZj4zSJLt7Wsl%2BX0nGW%2BdyIh4Yame2MNACGW2DTwfoz1T8m4B8MbXB1atv43sDd%2FBVEGBQnNOolFqWEYEEU1jfWR0CLqAptozdfR4jtmDutO5o9SjpvU7kj1I1sHIVOH4WP32pU88Y1uOzHCVcU1nsA50XYI6TFwn0u8AlemFNZ5gge%2BZiQ%2ByOwwhI%2BDvQY6pgHvwapIAZgd2A65si9MnD0qUe6N24eWP5JBdpOEScvB23ZbtrW0Px9bkiw91voyGHPRVXntpfiV6p0TwZOq5FkgbPtxXpdJUFjdiMEyhvtdXBkiLiLMRhkQgEUt%2FiS%2BLb9ZrD5Ro%2By1yw8Y78FXH%2F1zVwhad%2FQKwpmosBm1Jb%2FTYstekBg8G2gC2AxBI6dAu0HguaE37nFjcxv4nzIJureIkgrGrgP9&X-Amz-Signature=cade40d42ef3d9c088703e914713112d631a905b997d7f58966fdfe01df0e6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAO5JFAJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6Mk1vooCxdqbg8HiOJi3XXGsJpVafyxzx0haahyM6AiAiGTIDw7yZUNK%2FtFqalFFIkQr1LAnILKclVT97C5FvRSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMALp0TldtqQbWZcLzKtwD%2B%2F3MigavULKrwd4gRNvR2jnjY1qJLTdW0pSCxBxAGLo7RvI44RhhBVwj7FRCEAAf%2FYiJp4eXBQT1gabv3vEvATcvtxd39ZNwpiz4XGSlxDmLWaMkHpBIcHw5fwkV6FTbSGmRXgsMvnDDDzhVYe%2BvuNAJQnNQ%2Bxp7G7xu54MlJMNQJ%2F1TH3fJsAsNyvFXjMbAVjCEehKm1JLjUp3nxCjSBQj6kwhDpTN22uxGRvBkXrtRF36Y4IpwOUMb%2Bkay9Q%2BdkhKMA6Tr3%2BG679Mlh1NCMPV8bp75UWOycryGzYw9Czx6SS8Bee8O7HGILuQwdadcz2g4BKQ6RKpj4VPOqCk7Jh0vCSjZPvqz3Yo4fPSbkKOyU8nXuZAohM%2F5Is236qYSjtxlFWmtblOQb9vEsvYY8ImkxqMLZ5g1WiLxLvPmN%2FiwKXmtcbIEO%2BCblvi%2FhlDHOAMWYZj4zSJLt7Wsl%2BX0nGW%2BdyIh4Yame2MNACGW2DTwfoz1T8m4B8MbXB1atv43sDd%2FBVEGBQnNOolFqWEYEEU1jfWR0CLqAptozdfR4jtmDutO5o9SjpvU7kj1I1sHIVOH4WP32pU88Y1uOzHCVcU1nsA50XYI6TFwn0u8AlemFNZ5gge%2BZiQ%2ByOwwhI%2BDvQY6pgHvwapIAZgd2A65si9MnD0qUe6N24eWP5JBdpOEScvB23ZbtrW0Px9bkiw91voyGHPRVXntpfiV6p0TwZOq5FkgbPtxXpdJUFjdiMEyhvtdXBkiLiLMRhkQgEUt%2FiS%2BLb9ZrD5Ro%2By1yw8Y78FXH%2F1zVwhad%2FQKwpmosBm1Jb%2FTYstekBg8G2gC2AxBI6dAu0HguaE37nFjcxv4nzIJureIkgrGrgP9&X-Amz-Signature=2783d5b7205cf23d9f912896100c1c30e91f2a20df7f8224d2276ef9f428f7d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
