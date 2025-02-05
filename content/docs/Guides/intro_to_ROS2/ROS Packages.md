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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDSXCKU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDi0kkA1uyStM47GRDtmscvwU2onXBALpvkqbs5soCYHwIhALmmccrYXdMUS5%2FrFh%2BWKdmzr0H0usAyUFynWjnPVvniKv8DCEoQABoMNjM3NDIzMTgzODA1Igwn4SKnVp8YGgivqrwq3APg8ZU08rQ9hdXHlr%2BkhCXxFuFcOYQZk7ofCmKMmk10gQta1n%2FUxz34BJUUC4%2FrfADaUnrxjo9gdc3p%2FGaLiXX15z0JsE%2BQ3bjzJi6L7Y1KN0XkH9r%2F0ORwOcDEaieUPqzFrx0MT%2FsFuBXYhsq%2BbNSF0js7tXW7nDkFbCLYHozFQUTK2SkEUShFEFYBEQphkTvH3v6cCQqzoF9MQtIZkwNk7RZobtAjFMV67%2FEssLOXlhaGz8xinBdIRU%2Bj2ltlRmTtxncHBL0%2BIY3jxiA%2B%2BKlVf2SUh212hyNh3TDP33L8QlWkYOmhpY0j53TNMeUPwDHOmylkGS7xTK0Kal7Z9G5LHJk0LKeJur5soverpYwo9Hdivz6pM4etVD0rSeyj1QgA%2Bi0sQauQ0VrUvJMHPqI%2B45bytY0bCAjrNw9%2F48wwuNTm2ltFtXoxtbK9umXMOM1Ghxmjzb06RqPT%2BUaPZbfQ2NaU0Y3IiAz6KKtxXZfluQ2O1CsQRR8lErEfBj4KOdPJLEcBWIXptD5BBwCc0HjokBGeSoZW5oeXb4pr9JzjZy%2FkiT1C7L0UGQL%2Bx6eZRtC5XuMXsTQz0dHe9Ov4W183GAWMV0ONnY6qw%2BNZMPbi6qlnhAYU67vPYQlkhjC8vI69BjqkARPXXnvKnyTeZUdxQ1dTpleQY6UWOxRaItKZbe0TJsmVWqEX52RJUKM7LK7psATHeP6G7sKnZE%2BOT8k0zvK86UckcE4vSuKA3RXSlG2EwrQeYMNNiEPcR0CxzHV7bKWZcLYtQCuX3V7zebnWjIGY7T93flsTrJKebhWOkwUgX1%2BV74TUVddF%2BJNywq4wVdF1mL1Xm7WI0ttpkRVZsvSSoktBzxTh&X-Amz-Signature=df24d2fa71ffeed4d477553c0e584824faa2e66b535d1735f8101640c45f9fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDSXCKU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDi0kkA1uyStM47GRDtmscvwU2onXBALpvkqbs5soCYHwIhALmmccrYXdMUS5%2FrFh%2BWKdmzr0H0usAyUFynWjnPVvniKv8DCEoQABoMNjM3NDIzMTgzODA1Igwn4SKnVp8YGgivqrwq3APg8ZU08rQ9hdXHlr%2BkhCXxFuFcOYQZk7ofCmKMmk10gQta1n%2FUxz34BJUUC4%2FrfADaUnrxjo9gdc3p%2FGaLiXX15z0JsE%2BQ3bjzJi6L7Y1KN0XkH9r%2F0ORwOcDEaieUPqzFrx0MT%2FsFuBXYhsq%2BbNSF0js7tXW7nDkFbCLYHozFQUTK2SkEUShFEFYBEQphkTvH3v6cCQqzoF9MQtIZkwNk7RZobtAjFMV67%2FEssLOXlhaGz8xinBdIRU%2Bj2ltlRmTtxncHBL0%2BIY3jxiA%2B%2BKlVf2SUh212hyNh3TDP33L8QlWkYOmhpY0j53TNMeUPwDHOmylkGS7xTK0Kal7Z9G5LHJk0LKeJur5soverpYwo9Hdivz6pM4etVD0rSeyj1QgA%2Bi0sQauQ0VrUvJMHPqI%2B45bytY0bCAjrNw9%2F48wwuNTm2ltFtXoxtbK9umXMOM1Ghxmjzb06RqPT%2BUaPZbfQ2NaU0Y3IiAz6KKtxXZfluQ2O1CsQRR8lErEfBj4KOdPJLEcBWIXptD5BBwCc0HjokBGeSoZW5oeXb4pr9JzjZy%2FkiT1C7L0UGQL%2Bx6eZRtC5XuMXsTQz0dHe9Ov4W183GAWMV0ONnY6qw%2BNZMPbi6qlnhAYU67vPYQlkhjC8vI69BjqkARPXXnvKnyTeZUdxQ1dTpleQY6UWOxRaItKZbe0TJsmVWqEX52RJUKM7LK7psATHeP6G7sKnZE%2BOT8k0zvK86UckcE4vSuKA3RXSlG2EwrQeYMNNiEPcR0CxzHV7bKWZcLYtQCuX3V7zebnWjIGY7T93flsTrJKebhWOkwUgX1%2BV74TUVddF%2BJNywq4wVdF1mL1Xm7WI0ttpkRVZsvSSoktBzxTh&X-Amz-Signature=a3553f5d09acc52ccb96ad852f930d03af89a96f5d9cdbd4b72d687e060eb192&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDSXCKU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDi0kkA1uyStM47GRDtmscvwU2onXBALpvkqbs5soCYHwIhALmmccrYXdMUS5%2FrFh%2BWKdmzr0H0usAyUFynWjnPVvniKv8DCEoQABoMNjM3NDIzMTgzODA1Igwn4SKnVp8YGgivqrwq3APg8ZU08rQ9hdXHlr%2BkhCXxFuFcOYQZk7ofCmKMmk10gQta1n%2FUxz34BJUUC4%2FrfADaUnrxjo9gdc3p%2FGaLiXX15z0JsE%2BQ3bjzJi6L7Y1KN0XkH9r%2F0ORwOcDEaieUPqzFrx0MT%2FsFuBXYhsq%2BbNSF0js7tXW7nDkFbCLYHozFQUTK2SkEUShFEFYBEQphkTvH3v6cCQqzoF9MQtIZkwNk7RZobtAjFMV67%2FEssLOXlhaGz8xinBdIRU%2Bj2ltlRmTtxncHBL0%2BIY3jxiA%2B%2BKlVf2SUh212hyNh3TDP33L8QlWkYOmhpY0j53TNMeUPwDHOmylkGS7xTK0Kal7Z9G5LHJk0LKeJur5soverpYwo9Hdivz6pM4etVD0rSeyj1QgA%2Bi0sQauQ0VrUvJMHPqI%2B45bytY0bCAjrNw9%2F48wwuNTm2ltFtXoxtbK9umXMOM1Ghxmjzb06RqPT%2BUaPZbfQ2NaU0Y3IiAz6KKtxXZfluQ2O1CsQRR8lErEfBj4KOdPJLEcBWIXptD5BBwCc0HjokBGeSoZW5oeXb4pr9JzjZy%2FkiT1C7L0UGQL%2Bx6eZRtC5XuMXsTQz0dHe9Ov4W183GAWMV0ONnY6qw%2BNZMPbi6qlnhAYU67vPYQlkhjC8vI69BjqkARPXXnvKnyTeZUdxQ1dTpleQY6UWOxRaItKZbe0TJsmVWqEX52RJUKM7LK7psATHeP6G7sKnZE%2BOT8k0zvK86UckcE4vSuKA3RXSlG2EwrQeYMNNiEPcR0CxzHV7bKWZcLYtQCuX3V7zebnWjIGY7T93flsTrJKebhWOkwUgX1%2BV74TUVddF%2BJNywq4wVdF1mL1Xm7WI0ttpkRVZsvSSoktBzxTh&X-Amz-Signature=92ce43bf62b468f8d995ca42c3112ab86590d17957c6da14b547fa5d386ed97b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDSXCKU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDi0kkA1uyStM47GRDtmscvwU2onXBALpvkqbs5soCYHwIhALmmccrYXdMUS5%2FrFh%2BWKdmzr0H0usAyUFynWjnPVvniKv8DCEoQABoMNjM3NDIzMTgzODA1Igwn4SKnVp8YGgivqrwq3APg8ZU08rQ9hdXHlr%2BkhCXxFuFcOYQZk7ofCmKMmk10gQta1n%2FUxz34BJUUC4%2FrfADaUnrxjo9gdc3p%2FGaLiXX15z0JsE%2BQ3bjzJi6L7Y1KN0XkH9r%2F0ORwOcDEaieUPqzFrx0MT%2FsFuBXYhsq%2BbNSF0js7tXW7nDkFbCLYHozFQUTK2SkEUShFEFYBEQphkTvH3v6cCQqzoF9MQtIZkwNk7RZobtAjFMV67%2FEssLOXlhaGz8xinBdIRU%2Bj2ltlRmTtxncHBL0%2BIY3jxiA%2B%2BKlVf2SUh212hyNh3TDP33L8QlWkYOmhpY0j53TNMeUPwDHOmylkGS7xTK0Kal7Z9G5LHJk0LKeJur5soverpYwo9Hdivz6pM4etVD0rSeyj1QgA%2Bi0sQauQ0VrUvJMHPqI%2B45bytY0bCAjrNw9%2F48wwuNTm2ltFtXoxtbK9umXMOM1Ghxmjzb06RqPT%2BUaPZbfQ2NaU0Y3IiAz6KKtxXZfluQ2O1CsQRR8lErEfBj4KOdPJLEcBWIXptD5BBwCc0HjokBGeSoZW5oeXb4pr9JzjZy%2FkiT1C7L0UGQL%2Bx6eZRtC5XuMXsTQz0dHe9Ov4W183GAWMV0ONnY6qw%2BNZMPbi6qlnhAYU67vPYQlkhjC8vI69BjqkARPXXnvKnyTeZUdxQ1dTpleQY6UWOxRaItKZbe0TJsmVWqEX52RJUKM7LK7psATHeP6G7sKnZE%2BOT8k0zvK86UckcE4vSuKA3RXSlG2EwrQeYMNNiEPcR0CxzHV7bKWZcLYtQCuX3V7zebnWjIGY7T93flsTrJKebhWOkwUgX1%2BV74TUVddF%2BJNywq4wVdF1mL1Xm7WI0ttpkRVZsvSSoktBzxTh&X-Amz-Signature=e933206af82b2c9ecd4a6b8fa30ab35ad453b5fc69f4ea05db0f0e9adf992942&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDSXCKU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDi0kkA1uyStM47GRDtmscvwU2onXBALpvkqbs5soCYHwIhALmmccrYXdMUS5%2FrFh%2BWKdmzr0H0usAyUFynWjnPVvniKv8DCEoQABoMNjM3NDIzMTgzODA1Igwn4SKnVp8YGgivqrwq3APg8ZU08rQ9hdXHlr%2BkhCXxFuFcOYQZk7ofCmKMmk10gQta1n%2FUxz34BJUUC4%2FrfADaUnrxjo9gdc3p%2FGaLiXX15z0JsE%2BQ3bjzJi6L7Y1KN0XkH9r%2F0ORwOcDEaieUPqzFrx0MT%2FsFuBXYhsq%2BbNSF0js7tXW7nDkFbCLYHozFQUTK2SkEUShFEFYBEQphkTvH3v6cCQqzoF9MQtIZkwNk7RZobtAjFMV67%2FEssLOXlhaGz8xinBdIRU%2Bj2ltlRmTtxncHBL0%2BIY3jxiA%2B%2BKlVf2SUh212hyNh3TDP33L8QlWkYOmhpY0j53TNMeUPwDHOmylkGS7xTK0Kal7Z9G5LHJk0LKeJur5soverpYwo9Hdivz6pM4etVD0rSeyj1QgA%2Bi0sQauQ0VrUvJMHPqI%2B45bytY0bCAjrNw9%2F48wwuNTm2ltFtXoxtbK9umXMOM1Ghxmjzb06RqPT%2BUaPZbfQ2NaU0Y3IiAz6KKtxXZfluQ2O1CsQRR8lErEfBj4KOdPJLEcBWIXptD5BBwCc0HjokBGeSoZW5oeXb4pr9JzjZy%2FkiT1C7L0UGQL%2Bx6eZRtC5XuMXsTQz0dHe9Ov4W183GAWMV0ONnY6qw%2BNZMPbi6qlnhAYU67vPYQlkhjC8vI69BjqkARPXXnvKnyTeZUdxQ1dTpleQY6UWOxRaItKZbe0TJsmVWqEX52RJUKM7LK7psATHeP6G7sKnZE%2BOT8k0zvK86UckcE4vSuKA3RXSlG2EwrQeYMNNiEPcR0CxzHV7bKWZcLYtQCuX3V7zebnWjIGY7T93flsTrJKebhWOkwUgX1%2BV74TUVddF%2BJNywq4wVdF1mL1Xm7WI0ttpkRVZsvSSoktBzxTh&X-Amz-Signature=26c99af7d64c51d69fabd99ba0227688adf419141fcb96904c478d0f88f4364b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDSXCKU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDi0kkA1uyStM47GRDtmscvwU2onXBALpvkqbs5soCYHwIhALmmccrYXdMUS5%2FrFh%2BWKdmzr0H0usAyUFynWjnPVvniKv8DCEoQABoMNjM3NDIzMTgzODA1Igwn4SKnVp8YGgivqrwq3APg8ZU08rQ9hdXHlr%2BkhCXxFuFcOYQZk7ofCmKMmk10gQta1n%2FUxz34BJUUC4%2FrfADaUnrxjo9gdc3p%2FGaLiXX15z0JsE%2BQ3bjzJi6L7Y1KN0XkH9r%2F0ORwOcDEaieUPqzFrx0MT%2FsFuBXYhsq%2BbNSF0js7tXW7nDkFbCLYHozFQUTK2SkEUShFEFYBEQphkTvH3v6cCQqzoF9MQtIZkwNk7RZobtAjFMV67%2FEssLOXlhaGz8xinBdIRU%2Bj2ltlRmTtxncHBL0%2BIY3jxiA%2B%2BKlVf2SUh212hyNh3TDP33L8QlWkYOmhpY0j53TNMeUPwDHOmylkGS7xTK0Kal7Z9G5LHJk0LKeJur5soverpYwo9Hdivz6pM4etVD0rSeyj1QgA%2Bi0sQauQ0VrUvJMHPqI%2B45bytY0bCAjrNw9%2F48wwuNTm2ltFtXoxtbK9umXMOM1Ghxmjzb06RqPT%2BUaPZbfQ2NaU0Y3IiAz6KKtxXZfluQ2O1CsQRR8lErEfBj4KOdPJLEcBWIXptD5BBwCc0HjokBGeSoZW5oeXb4pr9JzjZy%2FkiT1C7L0UGQL%2Bx6eZRtC5XuMXsTQz0dHe9Ov4W183GAWMV0ONnY6qw%2BNZMPbi6qlnhAYU67vPYQlkhjC8vI69BjqkARPXXnvKnyTeZUdxQ1dTpleQY6UWOxRaItKZbe0TJsmVWqEX52RJUKM7LK7psATHeP6G7sKnZE%2BOT8k0zvK86UckcE4vSuKA3RXSlG2EwrQeYMNNiEPcR0CxzHV7bKWZcLYtQCuX3V7zebnWjIGY7T93flsTrJKebhWOkwUgX1%2BV74TUVddF%2BJNywq4wVdF1mL1Xm7WI0ttpkRVZsvSSoktBzxTh&X-Amz-Signature=5943c2d0d8416067560f2698cfdadf9b582d3eabd02b2ed2bf9baa9efb6080f7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDSXCKU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDi0kkA1uyStM47GRDtmscvwU2onXBALpvkqbs5soCYHwIhALmmccrYXdMUS5%2FrFh%2BWKdmzr0H0usAyUFynWjnPVvniKv8DCEoQABoMNjM3NDIzMTgzODA1Igwn4SKnVp8YGgivqrwq3APg8ZU08rQ9hdXHlr%2BkhCXxFuFcOYQZk7ofCmKMmk10gQta1n%2FUxz34BJUUC4%2FrfADaUnrxjo9gdc3p%2FGaLiXX15z0JsE%2BQ3bjzJi6L7Y1KN0XkH9r%2F0ORwOcDEaieUPqzFrx0MT%2FsFuBXYhsq%2BbNSF0js7tXW7nDkFbCLYHozFQUTK2SkEUShFEFYBEQphkTvH3v6cCQqzoF9MQtIZkwNk7RZobtAjFMV67%2FEssLOXlhaGz8xinBdIRU%2Bj2ltlRmTtxncHBL0%2BIY3jxiA%2B%2BKlVf2SUh212hyNh3TDP33L8QlWkYOmhpY0j53TNMeUPwDHOmylkGS7xTK0Kal7Z9G5LHJk0LKeJur5soverpYwo9Hdivz6pM4etVD0rSeyj1QgA%2Bi0sQauQ0VrUvJMHPqI%2B45bytY0bCAjrNw9%2F48wwuNTm2ltFtXoxtbK9umXMOM1Ghxmjzb06RqPT%2BUaPZbfQ2NaU0Y3IiAz6KKtxXZfluQ2O1CsQRR8lErEfBj4KOdPJLEcBWIXptD5BBwCc0HjokBGeSoZW5oeXb4pr9JzjZy%2FkiT1C7L0UGQL%2Bx6eZRtC5XuMXsTQz0dHe9Ov4W183GAWMV0ONnY6qw%2BNZMPbi6qlnhAYU67vPYQlkhjC8vI69BjqkARPXXnvKnyTeZUdxQ1dTpleQY6UWOxRaItKZbe0TJsmVWqEX52RJUKM7LK7psATHeP6G7sKnZE%2BOT8k0zvK86UckcE4vSuKA3RXSlG2EwrQeYMNNiEPcR0CxzHV7bKWZcLYtQCuX3V7zebnWjIGY7T93flsTrJKebhWOkwUgX1%2BV74TUVddF%2BJNywq4wVdF1mL1Xm7WI0ttpkRVZsvSSoktBzxTh&X-Amz-Signature=a43b16d0851c82e1aa1322d5c8e39554c2bf26bc9b30371bcbb6fa46eaeae830&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
