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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7EFUHO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOR88am7KFsM05HLbNUP4Xi78jbxIQ%2BAGsUn6mMi4RwIhAMHctywWhAplvFu87dSHFXU%2B3ykvMfeuHQKwjdoMw8UdKv8DCH4QABoMNjM3NDIzMTgzODA1IgxglmM242l5cm%2BWTbcq3AO%2FA5Fy3uyWn9YnlB9hvDJ20bz6v1fTYOHzHd9IPmq2Rrc803VLZUKBhP1DMYsFfzXAxslGlH55A%2BqBtNjOkUE0rdoKZBdv7fzmlemdjraymay6ZAamxUaBhbAY0J1lqtXs4EyiD241KME7IeFCehFPYcz3Ik0PZPV4BJRIWDRm6wpzrymtDIQvezeFVZ6ej9%2BgGVQW6Dq9eSJSehHLr1xOY2ZLshHh8ukuh2sxAu9bczWYMof8EPUWWg9ox7%2Fedw%2F24gpeqFjYWsKzM13d4x4lj1EWjZCUN1xYbtnNru2uLYaZeAUAFBhIkq8uUSv%2Bv55sCcgqLDiVxgC8DNqvKjngP8y0ra3fvih7xA3mpHYCvjr%2FPuRey6%2BKP1zAeuGdmp84GaVvJnDhYoNJplIUfPuSEkTMzlQs%2F5U9npItKGe%2FCcAZpxLyPEIarNY%2BkbBEm0s6ZOLOKP9fGjtiR7Ge%2Fy4pnWdqox0xb6bC1UUqkDB%2BQACPqz3xU%2FLuFAvKf%2BRRa7zjoRw8MUE%2F9p9lTz8IJoQYzvVA630kdMtR4Iokm4w%2BhaaSUsX8msmyEV5XsY%2BZ9bhd2d1ifoK47gLWZ3HkQJo39eSPz9C1wRJ2oIT%2BLjQVnKda%2BQ6Zw%2B00Ss3bHDDY1JLCBjqkAfZ5samHiAe2QNKYyfazf3YcfjNsSz0lhmusG3Q6C8IMC09jbTB70jSIiqdgIKA8l6VknDjLGOlQC38ELd1cQYFLg19y7s1nOG7SiL8%2BbdUrF%2B58Roe%2BjXBDFHOTpsvXqSWsGFBFvFsvJbWeer25FehK2Td8Dlqx9I8%2FlOiJv%2FE14ZUTQFB4SSbPovNtnsyJEd7DunC44FK8tJ2Rx1NkjOGPy%2Bz9&X-Amz-Signature=610a8e68344c572b05ae9a43c5ad3cd6d6142f05d3e593e3703021cb2d873a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7EFUHO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOR88am7KFsM05HLbNUP4Xi78jbxIQ%2BAGsUn6mMi4RwIhAMHctywWhAplvFu87dSHFXU%2B3ykvMfeuHQKwjdoMw8UdKv8DCH4QABoMNjM3NDIzMTgzODA1IgxglmM242l5cm%2BWTbcq3AO%2FA5Fy3uyWn9YnlB9hvDJ20bz6v1fTYOHzHd9IPmq2Rrc803VLZUKBhP1DMYsFfzXAxslGlH55A%2BqBtNjOkUE0rdoKZBdv7fzmlemdjraymay6ZAamxUaBhbAY0J1lqtXs4EyiD241KME7IeFCehFPYcz3Ik0PZPV4BJRIWDRm6wpzrymtDIQvezeFVZ6ej9%2BgGVQW6Dq9eSJSehHLr1xOY2ZLshHh8ukuh2sxAu9bczWYMof8EPUWWg9ox7%2Fedw%2F24gpeqFjYWsKzM13d4x4lj1EWjZCUN1xYbtnNru2uLYaZeAUAFBhIkq8uUSv%2Bv55sCcgqLDiVxgC8DNqvKjngP8y0ra3fvih7xA3mpHYCvjr%2FPuRey6%2BKP1zAeuGdmp84GaVvJnDhYoNJplIUfPuSEkTMzlQs%2F5U9npItKGe%2FCcAZpxLyPEIarNY%2BkbBEm0s6ZOLOKP9fGjtiR7Ge%2Fy4pnWdqox0xb6bC1UUqkDB%2BQACPqz3xU%2FLuFAvKf%2BRRa7zjoRw8MUE%2F9p9lTz8IJoQYzvVA630kdMtR4Iokm4w%2BhaaSUsX8msmyEV5XsY%2BZ9bhd2d1ifoK47gLWZ3HkQJo39eSPz9C1wRJ2oIT%2BLjQVnKda%2BQ6Zw%2B00Ss3bHDDY1JLCBjqkAfZ5samHiAe2QNKYyfazf3YcfjNsSz0lhmusG3Q6C8IMC09jbTB70jSIiqdgIKA8l6VknDjLGOlQC38ELd1cQYFLg19y7s1nOG7SiL8%2BbdUrF%2B58Roe%2BjXBDFHOTpsvXqSWsGFBFvFsvJbWeer25FehK2Td8Dlqx9I8%2FlOiJv%2FE14ZUTQFB4SSbPovNtnsyJEd7DunC44FK8tJ2Rx1NkjOGPy%2Bz9&X-Amz-Signature=b1f7263d7db795b95e4af62cbf3234a681fa32bd9ba32b050763824ed5e053cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7EFUHO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOR88am7KFsM05HLbNUP4Xi78jbxIQ%2BAGsUn6mMi4RwIhAMHctywWhAplvFu87dSHFXU%2B3ykvMfeuHQKwjdoMw8UdKv8DCH4QABoMNjM3NDIzMTgzODA1IgxglmM242l5cm%2BWTbcq3AO%2FA5Fy3uyWn9YnlB9hvDJ20bz6v1fTYOHzHd9IPmq2Rrc803VLZUKBhP1DMYsFfzXAxslGlH55A%2BqBtNjOkUE0rdoKZBdv7fzmlemdjraymay6ZAamxUaBhbAY0J1lqtXs4EyiD241KME7IeFCehFPYcz3Ik0PZPV4BJRIWDRm6wpzrymtDIQvezeFVZ6ej9%2BgGVQW6Dq9eSJSehHLr1xOY2ZLshHh8ukuh2sxAu9bczWYMof8EPUWWg9ox7%2Fedw%2F24gpeqFjYWsKzM13d4x4lj1EWjZCUN1xYbtnNru2uLYaZeAUAFBhIkq8uUSv%2Bv55sCcgqLDiVxgC8DNqvKjngP8y0ra3fvih7xA3mpHYCvjr%2FPuRey6%2BKP1zAeuGdmp84GaVvJnDhYoNJplIUfPuSEkTMzlQs%2F5U9npItKGe%2FCcAZpxLyPEIarNY%2BkbBEm0s6ZOLOKP9fGjtiR7Ge%2Fy4pnWdqox0xb6bC1UUqkDB%2BQACPqz3xU%2FLuFAvKf%2BRRa7zjoRw8MUE%2F9p9lTz8IJoQYzvVA630kdMtR4Iokm4w%2BhaaSUsX8msmyEV5XsY%2BZ9bhd2d1ifoK47gLWZ3HkQJo39eSPz9C1wRJ2oIT%2BLjQVnKda%2BQ6Zw%2B00Ss3bHDDY1JLCBjqkAfZ5samHiAe2QNKYyfazf3YcfjNsSz0lhmusG3Q6C8IMC09jbTB70jSIiqdgIKA8l6VknDjLGOlQC38ELd1cQYFLg19y7s1nOG7SiL8%2BbdUrF%2B58Roe%2BjXBDFHOTpsvXqSWsGFBFvFsvJbWeer25FehK2Td8Dlqx9I8%2FlOiJv%2FE14ZUTQFB4SSbPovNtnsyJEd7DunC44FK8tJ2Rx1NkjOGPy%2Bz9&X-Amz-Signature=5ef403ccbdac76918742f055fd751b2f842d48fb879af17865e442586674c9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7EFUHO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOR88am7KFsM05HLbNUP4Xi78jbxIQ%2BAGsUn6mMi4RwIhAMHctywWhAplvFu87dSHFXU%2B3ykvMfeuHQKwjdoMw8UdKv8DCH4QABoMNjM3NDIzMTgzODA1IgxglmM242l5cm%2BWTbcq3AO%2FA5Fy3uyWn9YnlB9hvDJ20bz6v1fTYOHzHd9IPmq2Rrc803VLZUKBhP1DMYsFfzXAxslGlH55A%2BqBtNjOkUE0rdoKZBdv7fzmlemdjraymay6ZAamxUaBhbAY0J1lqtXs4EyiD241KME7IeFCehFPYcz3Ik0PZPV4BJRIWDRm6wpzrymtDIQvezeFVZ6ej9%2BgGVQW6Dq9eSJSehHLr1xOY2ZLshHh8ukuh2sxAu9bczWYMof8EPUWWg9ox7%2Fedw%2F24gpeqFjYWsKzM13d4x4lj1EWjZCUN1xYbtnNru2uLYaZeAUAFBhIkq8uUSv%2Bv55sCcgqLDiVxgC8DNqvKjngP8y0ra3fvih7xA3mpHYCvjr%2FPuRey6%2BKP1zAeuGdmp84GaVvJnDhYoNJplIUfPuSEkTMzlQs%2F5U9npItKGe%2FCcAZpxLyPEIarNY%2BkbBEm0s6ZOLOKP9fGjtiR7Ge%2Fy4pnWdqox0xb6bC1UUqkDB%2BQACPqz3xU%2FLuFAvKf%2BRRa7zjoRw8MUE%2F9p9lTz8IJoQYzvVA630kdMtR4Iokm4w%2BhaaSUsX8msmyEV5XsY%2BZ9bhd2d1ifoK47gLWZ3HkQJo39eSPz9C1wRJ2oIT%2BLjQVnKda%2BQ6Zw%2B00Ss3bHDDY1JLCBjqkAfZ5samHiAe2QNKYyfazf3YcfjNsSz0lhmusG3Q6C8IMC09jbTB70jSIiqdgIKA8l6VknDjLGOlQC38ELd1cQYFLg19y7s1nOG7SiL8%2BbdUrF%2B58Roe%2BjXBDFHOTpsvXqSWsGFBFvFsvJbWeer25FehK2Td8Dlqx9I8%2FlOiJv%2FE14ZUTQFB4SSbPovNtnsyJEd7DunC44FK8tJ2Rx1NkjOGPy%2Bz9&X-Amz-Signature=001ea6306d535a68f52cfe3a7841e6f8ccac6fc56970904146c6885582696feb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7EFUHO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOR88am7KFsM05HLbNUP4Xi78jbxIQ%2BAGsUn6mMi4RwIhAMHctywWhAplvFu87dSHFXU%2B3ykvMfeuHQKwjdoMw8UdKv8DCH4QABoMNjM3NDIzMTgzODA1IgxglmM242l5cm%2BWTbcq3AO%2FA5Fy3uyWn9YnlB9hvDJ20bz6v1fTYOHzHd9IPmq2Rrc803VLZUKBhP1DMYsFfzXAxslGlH55A%2BqBtNjOkUE0rdoKZBdv7fzmlemdjraymay6ZAamxUaBhbAY0J1lqtXs4EyiD241KME7IeFCehFPYcz3Ik0PZPV4BJRIWDRm6wpzrymtDIQvezeFVZ6ej9%2BgGVQW6Dq9eSJSehHLr1xOY2ZLshHh8ukuh2sxAu9bczWYMof8EPUWWg9ox7%2Fedw%2F24gpeqFjYWsKzM13d4x4lj1EWjZCUN1xYbtnNru2uLYaZeAUAFBhIkq8uUSv%2Bv55sCcgqLDiVxgC8DNqvKjngP8y0ra3fvih7xA3mpHYCvjr%2FPuRey6%2BKP1zAeuGdmp84GaVvJnDhYoNJplIUfPuSEkTMzlQs%2F5U9npItKGe%2FCcAZpxLyPEIarNY%2BkbBEm0s6ZOLOKP9fGjtiR7Ge%2Fy4pnWdqox0xb6bC1UUqkDB%2BQACPqz3xU%2FLuFAvKf%2BRRa7zjoRw8MUE%2F9p9lTz8IJoQYzvVA630kdMtR4Iokm4w%2BhaaSUsX8msmyEV5XsY%2BZ9bhd2d1ifoK47gLWZ3HkQJo39eSPz9C1wRJ2oIT%2BLjQVnKda%2BQ6Zw%2B00Ss3bHDDY1JLCBjqkAfZ5samHiAe2QNKYyfazf3YcfjNsSz0lhmusG3Q6C8IMC09jbTB70jSIiqdgIKA8l6VknDjLGOlQC38ELd1cQYFLg19y7s1nOG7SiL8%2BbdUrF%2B58Roe%2BjXBDFHOTpsvXqSWsGFBFvFsvJbWeer25FehK2Td8Dlqx9I8%2FlOiJv%2FE14ZUTQFB4SSbPovNtnsyJEd7DunC44FK8tJ2Rx1NkjOGPy%2Bz9&X-Amz-Signature=fcab5aaf2184c2839b5334deb8c26f8fbe12382fea66d11ff9b6f49531edc3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7EFUHO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOR88am7KFsM05HLbNUP4Xi78jbxIQ%2BAGsUn6mMi4RwIhAMHctywWhAplvFu87dSHFXU%2B3ykvMfeuHQKwjdoMw8UdKv8DCH4QABoMNjM3NDIzMTgzODA1IgxglmM242l5cm%2BWTbcq3AO%2FA5Fy3uyWn9YnlB9hvDJ20bz6v1fTYOHzHd9IPmq2Rrc803VLZUKBhP1DMYsFfzXAxslGlH55A%2BqBtNjOkUE0rdoKZBdv7fzmlemdjraymay6ZAamxUaBhbAY0J1lqtXs4EyiD241KME7IeFCehFPYcz3Ik0PZPV4BJRIWDRm6wpzrymtDIQvezeFVZ6ej9%2BgGVQW6Dq9eSJSehHLr1xOY2ZLshHh8ukuh2sxAu9bczWYMof8EPUWWg9ox7%2Fedw%2F24gpeqFjYWsKzM13d4x4lj1EWjZCUN1xYbtnNru2uLYaZeAUAFBhIkq8uUSv%2Bv55sCcgqLDiVxgC8DNqvKjngP8y0ra3fvih7xA3mpHYCvjr%2FPuRey6%2BKP1zAeuGdmp84GaVvJnDhYoNJplIUfPuSEkTMzlQs%2F5U9npItKGe%2FCcAZpxLyPEIarNY%2BkbBEm0s6ZOLOKP9fGjtiR7Ge%2Fy4pnWdqox0xb6bC1UUqkDB%2BQACPqz3xU%2FLuFAvKf%2BRRa7zjoRw8MUE%2F9p9lTz8IJoQYzvVA630kdMtR4Iokm4w%2BhaaSUsX8msmyEV5XsY%2BZ9bhd2d1ifoK47gLWZ3HkQJo39eSPz9C1wRJ2oIT%2BLjQVnKda%2BQ6Zw%2B00Ss3bHDDY1JLCBjqkAfZ5samHiAe2QNKYyfazf3YcfjNsSz0lhmusG3Q6C8IMC09jbTB70jSIiqdgIKA8l6VknDjLGOlQC38ELd1cQYFLg19y7s1nOG7SiL8%2BbdUrF%2B58Roe%2BjXBDFHOTpsvXqSWsGFBFvFsvJbWeer25FehK2Td8Dlqx9I8%2FlOiJv%2FE14ZUTQFB4SSbPovNtnsyJEd7DunC44FK8tJ2Rx1NkjOGPy%2Bz9&X-Amz-Signature=bed4b0d3c30641183d79984cf6e984e84324e090b4dee3bcbebeb58ddbbdb824&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7EFUHO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOR88am7KFsM05HLbNUP4Xi78jbxIQ%2BAGsUn6mMi4RwIhAMHctywWhAplvFu87dSHFXU%2B3ykvMfeuHQKwjdoMw8UdKv8DCH4QABoMNjM3NDIzMTgzODA1IgxglmM242l5cm%2BWTbcq3AO%2FA5Fy3uyWn9YnlB9hvDJ20bz6v1fTYOHzHd9IPmq2Rrc803VLZUKBhP1DMYsFfzXAxslGlH55A%2BqBtNjOkUE0rdoKZBdv7fzmlemdjraymay6ZAamxUaBhbAY0J1lqtXs4EyiD241KME7IeFCehFPYcz3Ik0PZPV4BJRIWDRm6wpzrymtDIQvezeFVZ6ej9%2BgGVQW6Dq9eSJSehHLr1xOY2ZLshHh8ukuh2sxAu9bczWYMof8EPUWWg9ox7%2Fedw%2F24gpeqFjYWsKzM13d4x4lj1EWjZCUN1xYbtnNru2uLYaZeAUAFBhIkq8uUSv%2Bv55sCcgqLDiVxgC8DNqvKjngP8y0ra3fvih7xA3mpHYCvjr%2FPuRey6%2BKP1zAeuGdmp84GaVvJnDhYoNJplIUfPuSEkTMzlQs%2F5U9npItKGe%2FCcAZpxLyPEIarNY%2BkbBEm0s6ZOLOKP9fGjtiR7Ge%2Fy4pnWdqox0xb6bC1UUqkDB%2BQACPqz3xU%2FLuFAvKf%2BRRa7zjoRw8MUE%2F9p9lTz8IJoQYzvVA630kdMtR4Iokm4w%2BhaaSUsX8msmyEV5XsY%2BZ9bhd2d1ifoK47gLWZ3HkQJo39eSPz9C1wRJ2oIT%2BLjQVnKda%2BQ6Zw%2B00Ss3bHDDY1JLCBjqkAfZ5samHiAe2QNKYyfazf3YcfjNsSz0lhmusG3Q6C8IMC09jbTB70jSIiqdgIKA8l6VknDjLGOlQC38ELd1cQYFLg19y7s1nOG7SiL8%2BbdUrF%2B58Roe%2BjXBDFHOTpsvXqSWsGFBFvFsvJbWeer25FehK2Td8Dlqx9I8%2FlOiJv%2FE14ZUTQFB4SSbPovNtnsyJEd7DunC44FK8tJ2Rx1NkjOGPy%2Bz9&X-Amz-Signature=79dc3f3c37c1ef28aed9abfe7bc863706f23b6cede53e0b7daea5e6a275bd2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
