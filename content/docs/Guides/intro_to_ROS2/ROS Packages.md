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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLW22UT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAowGsvwvqogEnMQv2sSIgDcYkGZPqlv15lbAzhc%2FFroAiAiJaKjGXPe6%2Bzpe%2BgBvYbJmi7aLXSZFfNYPHnKOFHU5ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMGShuJ4amvS731zDnKtwDd4Dik3ekEiWIp99TKdRq2iY4BeAqtiVH%2BAS82JYrg1yRBJVYXLkOXGeErWgg9xlMHHtXyA%2Fttpwy7KzNf9B1BA%2FjBJIJely5SOxwMz%2FkzcVSziSCBfBqrOPa36EcQT9ZwhODr%2BCAaaOqL%2BU9C89V3VZR1Sks%2Fz26w7lr5069%2FfQowjPGlBOxLsyss8Ih71hj0nFOZb9AmTIVOWiP7HLE%2FomZF23GvU9fOas8z%2BumFrRgBK57lJzZfs5GZoYI%2Fl0WWb%2F3T1UXApQwCNkljz4gmEnth5IDp9xhUF9Ub90IKB10EZJTVJ7VdR%2Bm7FR3qonEs54%2FJVg4tfIi4C34LakQKPx4WkeQ01T59tNfWKP1ClF0sNIqHYtJVoS92SmnncHpI8zmPKk2i%2FZT07SGDl2JrrfUtXX0pM8m%2FCv1IdX4oh4KrPx2EauLWGkR2Op9g1P8nYYO1Xef39AjXSO9uoEIoWawSkOQ6KTm2gaytFRr8y9O9CzHIh939zMsdbBmuVKwOka2FFqhL2WWoENeM7eEIsVW1U4X85GQXwRgotX0Uh1hDuTT1gB5EGRXRls6hf44dyIHvBeoxfEsrAqSRSj1bYsHUkL4lzWwf1ucIZtPa69FfQoF%2FPvN1A%2F5Q7kw%2FtG6vQY6pgECUfOnVPEOttMnGAh4Xi5UzRI0V31kylaP4tXWeYtKvYMmBDAgg03TMxQWpGgLPf4Se0qkY5YGyKdtBUT3NNbXNlY6GOen%2BJ56aaW29AQYEUx5vLA%2FHCbUdZ6GP4HTRFcKccVrf6ERuguy1P3TDdiKEh5CVBHU%2F9WCjq5AHbQSCt5GM9s3hvqmJGJJE5rTn8dbWzj8y3FfeLDqO37UW62oTn5uFnld&X-Amz-Signature=cb823e81948c5af2d05cd4e4aae11725c125a5df116ae675ffb1e0ea5a389501&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLW22UT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAowGsvwvqogEnMQv2sSIgDcYkGZPqlv15lbAzhc%2FFroAiAiJaKjGXPe6%2Bzpe%2BgBvYbJmi7aLXSZFfNYPHnKOFHU5ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMGShuJ4amvS731zDnKtwDd4Dik3ekEiWIp99TKdRq2iY4BeAqtiVH%2BAS82JYrg1yRBJVYXLkOXGeErWgg9xlMHHtXyA%2Fttpwy7KzNf9B1BA%2FjBJIJely5SOxwMz%2FkzcVSziSCBfBqrOPa36EcQT9ZwhODr%2BCAaaOqL%2BU9C89V3VZR1Sks%2Fz26w7lr5069%2FfQowjPGlBOxLsyss8Ih71hj0nFOZb9AmTIVOWiP7HLE%2FomZF23GvU9fOas8z%2BumFrRgBK57lJzZfs5GZoYI%2Fl0WWb%2F3T1UXApQwCNkljz4gmEnth5IDp9xhUF9Ub90IKB10EZJTVJ7VdR%2Bm7FR3qonEs54%2FJVg4tfIi4C34LakQKPx4WkeQ01T59tNfWKP1ClF0sNIqHYtJVoS92SmnncHpI8zmPKk2i%2FZT07SGDl2JrrfUtXX0pM8m%2FCv1IdX4oh4KrPx2EauLWGkR2Op9g1P8nYYO1Xef39AjXSO9uoEIoWawSkOQ6KTm2gaytFRr8y9O9CzHIh939zMsdbBmuVKwOka2FFqhL2WWoENeM7eEIsVW1U4X85GQXwRgotX0Uh1hDuTT1gB5EGRXRls6hf44dyIHvBeoxfEsrAqSRSj1bYsHUkL4lzWwf1ucIZtPa69FfQoF%2FPvN1A%2F5Q7kw%2FtG6vQY6pgECUfOnVPEOttMnGAh4Xi5UzRI0V31kylaP4tXWeYtKvYMmBDAgg03TMxQWpGgLPf4Se0qkY5YGyKdtBUT3NNbXNlY6GOen%2BJ56aaW29AQYEUx5vLA%2FHCbUdZ6GP4HTRFcKccVrf6ERuguy1P3TDdiKEh5CVBHU%2F9WCjq5AHbQSCt5GM9s3hvqmJGJJE5rTn8dbWzj8y3FfeLDqO37UW62oTn5uFnld&X-Amz-Signature=1e1d46ecabe91809d3bffef39517624b75a5aa860521ccd9283ad1195a3061b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLW22UT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAowGsvwvqogEnMQv2sSIgDcYkGZPqlv15lbAzhc%2FFroAiAiJaKjGXPe6%2Bzpe%2BgBvYbJmi7aLXSZFfNYPHnKOFHU5ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMGShuJ4amvS731zDnKtwDd4Dik3ekEiWIp99TKdRq2iY4BeAqtiVH%2BAS82JYrg1yRBJVYXLkOXGeErWgg9xlMHHtXyA%2Fttpwy7KzNf9B1BA%2FjBJIJely5SOxwMz%2FkzcVSziSCBfBqrOPa36EcQT9ZwhODr%2BCAaaOqL%2BU9C89V3VZR1Sks%2Fz26w7lr5069%2FfQowjPGlBOxLsyss8Ih71hj0nFOZb9AmTIVOWiP7HLE%2FomZF23GvU9fOas8z%2BumFrRgBK57lJzZfs5GZoYI%2Fl0WWb%2F3T1UXApQwCNkljz4gmEnth5IDp9xhUF9Ub90IKB10EZJTVJ7VdR%2Bm7FR3qonEs54%2FJVg4tfIi4C34LakQKPx4WkeQ01T59tNfWKP1ClF0sNIqHYtJVoS92SmnncHpI8zmPKk2i%2FZT07SGDl2JrrfUtXX0pM8m%2FCv1IdX4oh4KrPx2EauLWGkR2Op9g1P8nYYO1Xef39AjXSO9uoEIoWawSkOQ6KTm2gaytFRr8y9O9CzHIh939zMsdbBmuVKwOka2FFqhL2WWoENeM7eEIsVW1U4X85GQXwRgotX0Uh1hDuTT1gB5EGRXRls6hf44dyIHvBeoxfEsrAqSRSj1bYsHUkL4lzWwf1ucIZtPa69FfQoF%2FPvN1A%2F5Q7kw%2FtG6vQY6pgECUfOnVPEOttMnGAh4Xi5UzRI0V31kylaP4tXWeYtKvYMmBDAgg03TMxQWpGgLPf4Se0qkY5YGyKdtBUT3NNbXNlY6GOen%2BJ56aaW29AQYEUx5vLA%2FHCbUdZ6GP4HTRFcKccVrf6ERuguy1P3TDdiKEh5CVBHU%2F9WCjq5AHbQSCt5GM9s3hvqmJGJJE5rTn8dbWzj8y3FfeLDqO37UW62oTn5uFnld&X-Amz-Signature=016ebb1e0ce1ac695617309674feb44e3f7022e7fdeea0f437f64172f6af7fff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLW22UT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAowGsvwvqogEnMQv2sSIgDcYkGZPqlv15lbAzhc%2FFroAiAiJaKjGXPe6%2Bzpe%2BgBvYbJmi7aLXSZFfNYPHnKOFHU5ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMGShuJ4amvS731zDnKtwDd4Dik3ekEiWIp99TKdRq2iY4BeAqtiVH%2BAS82JYrg1yRBJVYXLkOXGeErWgg9xlMHHtXyA%2Fttpwy7KzNf9B1BA%2FjBJIJely5SOxwMz%2FkzcVSziSCBfBqrOPa36EcQT9ZwhODr%2BCAaaOqL%2BU9C89V3VZR1Sks%2Fz26w7lr5069%2FfQowjPGlBOxLsyss8Ih71hj0nFOZb9AmTIVOWiP7HLE%2FomZF23GvU9fOas8z%2BumFrRgBK57lJzZfs5GZoYI%2Fl0WWb%2F3T1UXApQwCNkljz4gmEnth5IDp9xhUF9Ub90IKB10EZJTVJ7VdR%2Bm7FR3qonEs54%2FJVg4tfIi4C34LakQKPx4WkeQ01T59tNfWKP1ClF0sNIqHYtJVoS92SmnncHpI8zmPKk2i%2FZT07SGDl2JrrfUtXX0pM8m%2FCv1IdX4oh4KrPx2EauLWGkR2Op9g1P8nYYO1Xef39AjXSO9uoEIoWawSkOQ6KTm2gaytFRr8y9O9CzHIh939zMsdbBmuVKwOka2FFqhL2WWoENeM7eEIsVW1U4X85GQXwRgotX0Uh1hDuTT1gB5EGRXRls6hf44dyIHvBeoxfEsrAqSRSj1bYsHUkL4lzWwf1ucIZtPa69FfQoF%2FPvN1A%2F5Q7kw%2FtG6vQY6pgECUfOnVPEOttMnGAh4Xi5UzRI0V31kylaP4tXWeYtKvYMmBDAgg03TMxQWpGgLPf4Se0qkY5YGyKdtBUT3NNbXNlY6GOen%2BJ56aaW29AQYEUx5vLA%2FHCbUdZ6GP4HTRFcKccVrf6ERuguy1P3TDdiKEh5CVBHU%2F9WCjq5AHbQSCt5GM9s3hvqmJGJJE5rTn8dbWzj8y3FfeLDqO37UW62oTn5uFnld&X-Amz-Signature=e68ad67675d1c45300ecc8605654f2b437627e7abfdcae9eeb91a17643d700ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLW22UT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAowGsvwvqogEnMQv2sSIgDcYkGZPqlv15lbAzhc%2FFroAiAiJaKjGXPe6%2Bzpe%2BgBvYbJmi7aLXSZFfNYPHnKOFHU5ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMGShuJ4amvS731zDnKtwDd4Dik3ekEiWIp99TKdRq2iY4BeAqtiVH%2BAS82JYrg1yRBJVYXLkOXGeErWgg9xlMHHtXyA%2Fttpwy7KzNf9B1BA%2FjBJIJely5SOxwMz%2FkzcVSziSCBfBqrOPa36EcQT9ZwhODr%2BCAaaOqL%2BU9C89V3VZR1Sks%2Fz26w7lr5069%2FfQowjPGlBOxLsyss8Ih71hj0nFOZb9AmTIVOWiP7HLE%2FomZF23GvU9fOas8z%2BumFrRgBK57lJzZfs5GZoYI%2Fl0WWb%2F3T1UXApQwCNkljz4gmEnth5IDp9xhUF9Ub90IKB10EZJTVJ7VdR%2Bm7FR3qonEs54%2FJVg4tfIi4C34LakQKPx4WkeQ01T59tNfWKP1ClF0sNIqHYtJVoS92SmnncHpI8zmPKk2i%2FZT07SGDl2JrrfUtXX0pM8m%2FCv1IdX4oh4KrPx2EauLWGkR2Op9g1P8nYYO1Xef39AjXSO9uoEIoWawSkOQ6KTm2gaytFRr8y9O9CzHIh939zMsdbBmuVKwOka2FFqhL2WWoENeM7eEIsVW1U4X85GQXwRgotX0Uh1hDuTT1gB5EGRXRls6hf44dyIHvBeoxfEsrAqSRSj1bYsHUkL4lzWwf1ucIZtPa69FfQoF%2FPvN1A%2F5Q7kw%2FtG6vQY6pgECUfOnVPEOttMnGAh4Xi5UzRI0V31kylaP4tXWeYtKvYMmBDAgg03TMxQWpGgLPf4Se0qkY5YGyKdtBUT3NNbXNlY6GOen%2BJ56aaW29AQYEUx5vLA%2FHCbUdZ6GP4HTRFcKccVrf6ERuguy1P3TDdiKEh5CVBHU%2F9WCjq5AHbQSCt5GM9s3hvqmJGJJE5rTn8dbWzj8y3FfeLDqO37UW62oTn5uFnld&X-Amz-Signature=5ddcce3115c4dc0d54dee93968ac75f9cf3ed5aa994feec2b4696f4ecb82af03&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLW22UT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAowGsvwvqogEnMQv2sSIgDcYkGZPqlv15lbAzhc%2FFroAiAiJaKjGXPe6%2Bzpe%2BgBvYbJmi7aLXSZFfNYPHnKOFHU5ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMGShuJ4amvS731zDnKtwDd4Dik3ekEiWIp99TKdRq2iY4BeAqtiVH%2BAS82JYrg1yRBJVYXLkOXGeErWgg9xlMHHtXyA%2Fttpwy7KzNf9B1BA%2FjBJIJely5SOxwMz%2FkzcVSziSCBfBqrOPa36EcQT9ZwhODr%2BCAaaOqL%2BU9C89V3VZR1Sks%2Fz26w7lr5069%2FfQowjPGlBOxLsyss8Ih71hj0nFOZb9AmTIVOWiP7HLE%2FomZF23GvU9fOas8z%2BumFrRgBK57lJzZfs5GZoYI%2Fl0WWb%2F3T1UXApQwCNkljz4gmEnth5IDp9xhUF9Ub90IKB10EZJTVJ7VdR%2Bm7FR3qonEs54%2FJVg4tfIi4C34LakQKPx4WkeQ01T59tNfWKP1ClF0sNIqHYtJVoS92SmnncHpI8zmPKk2i%2FZT07SGDl2JrrfUtXX0pM8m%2FCv1IdX4oh4KrPx2EauLWGkR2Op9g1P8nYYO1Xef39AjXSO9uoEIoWawSkOQ6KTm2gaytFRr8y9O9CzHIh939zMsdbBmuVKwOka2FFqhL2WWoENeM7eEIsVW1U4X85GQXwRgotX0Uh1hDuTT1gB5EGRXRls6hf44dyIHvBeoxfEsrAqSRSj1bYsHUkL4lzWwf1ucIZtPa69FfQoF%2FPvN1A%2F5Q7kw%2FtG6vQY6pgECUfOnVPEOttMnGAh4Xi5UzRI0V31kylaP4tXWeYtKvYMmBDAgg03TMxQWpGgLPf4Se0qkY5YGyKdtBUT3NNbXNlY6GOen%2BJ56aaW29AQYEUx5vLA%2FHCbUdZ6GP4HTRFcKccVrf6ERuguy1P3TDdiKEh5CVBHU%2F9WCjq5AHbQSCt5GM9s3hvqmJGJJE5rTn8dbWzj8y3FfeLDqO37UW62oTn5uFnld&X-Amz-Signature=48aec46fa56d952e4f2602678b0caf9ad521780cf7b1cc6860b13bf7da8f6255&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLW22UT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAowGsvwvqogEnMQv2sSIgDcYkGZPqlv15lbAzhc%2FFroAiAiJaKjGXPe6%2Bzpe%2BgBvYbJmi7aLXSZFfNYPHnKOFHU5ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMGShuJ4amvS731zDnKtwDd4Dik3ekEiWIp99TKdRq2iY4BeAqtiVH%2BAS82JYrg1yRBJVYXLkOXGeErWgg9xlMHHtXyA%2Fttpwy7KzNf9B1BA%2FjBJIJely5SOxwMz%2FkzcVSziSCBfBqrOPa36EcQT9ZwhODr%2BCAaaOqL%2BU9C89V3VZR1Sks%2Fz26w7lr5069%2FfQowjPGlBOxLsyss8Ih71hj0nFOZb9AmTIVOWiP7HLE%2FomZF23GvU9fOas8z%2BumFrRgBK57lJzZfs5GZoYI%2Fl0WWb%2F3T1UXApQwCNkljz4gmEnth5IDp9xhUF9Ub90IKB10EZJTVJ7VdR%2Bm7FR3qonEs54%2FJVg4tfIi4C34LakQKPx4WkeQ01T59tNfWKP1ClF0sNIqHYtJVoS92SmnncHpI8zmPKk2i%2FZT07SGDl2JrrfUtXX0pM8m%2FCv1IdX4oh4KrPx2EauLWGkR2Op9g1P8nYYO1Xef39AjXSO9uoEIoWawSkOQ6KTm2gaytFRr8y9O9CzHIh939zMsdbBmuVKwOka2FFqhL2WWoENeM7eEIsVW1U4X85GQXwRgotX0Uh1hDuTT1gB5EGRXRls6hf44dyIHvBeoxfEsrAqSRSj1bYsHUkL4lzWwf1ucIZtPa69FfQoF%2FPvN1A%2F5Q7kw%2FtG6vQY6pgECUfOnVPEOttMnGAh4Xi5UzRI0V31kylaP4tXWeYtKvYMmBDAgg03TMxQWpGgLPf4Se0qkY5YGyKdtBUT3NNbXNlY6GOen%2BJ56aaW29AQYEUx5vLA%2FHCbUdZ6GP4HTRFcKccVrf6ERuguy1P3TDdiKEh5CVBHU%2F9WCjq5AHbQSCt5GM9s3hvqmJGJJE5rTn8dbWzj8y3FfeLDqO37UW62oTn5uFnld&X-Amz-Signature=574ddd02c4272a4014c168e7152c2bb3ebf83630c86fac13cb4eba4c8b752f04&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
