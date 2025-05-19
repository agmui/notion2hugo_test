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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6BRABT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqxKDCJXIDdGwOyyv2BDecxI7%2Fa3XB8QrAGuWmMKpPSAiAfkb9Op9xHnrWoqZX6zsVT%2F4FfGWntuZQEyXL7xRfLOiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lvyvfc1ZqDOg3iTKtwDdH%2B7ggZ5oZuDe0lGTHdM52uvQBRCiLyljcZs9ywwhcMC95180XZN1sP0dlSHHNgJ8re%2F334538Zt2%2F8zMYgaDNHH77z7wOa5Hkcw2411rsBtdfUcww9zr9GPVJhrLQOk7fgSr3WCpOd7ZSwVW9jYFIgbgEnfSe3vvn0lCUibTTQCxDcFLStTattLZ%2BiCEX9pgq8pZV4q2yysWCrXzqkbXXbCXwybf6JYKNAHUNVioUED%2FCQl2t%2F61yMCzY5KfwhNuPj7%2F6kx4wBN7ig%2BGMgYP0XHB0lwlIQoW69yxispE0v2IgUvSSXYJmI3hlf4PjiTRf1bqmJ9h0yIfpNDQ2p2jV3dIrQunJZwSwCjQSh5gRvI18TbTjR0IyGhLu0OTd2DrvFW0koBCAvhzJxQs23PazgrjacRe1%2F7zHJ6yik%2BU2%2FJewfP4jWIXqlKFP43FY54faFUrOZ6eQeKwagnfVVHvOXKlAos4PczpUAhyqO75B1rsKQLunZkD7xkVQawzsrf1zicgfAbLfT114oZJinQELZjE9kMfJVLZ80hVg%2Bc5lnIiVVPRZ5MpgsGqIotvCCMlUgy4m1N0cg%2B3%2FPWGbKfvSx8cMATUwZp%2BOqhrPs8RXzSSDVowvM8q6nWD5Iwl92qwQY6pgG3jINLXuRDqSo8pW7gWCGErrLSN4Y%2FCeA%2FSEFN%2BYx%2F5YXlPuhGaght%2BOlo%2BeV1Msgqu9efmCwJw%2Bqvgf9zWypC1ksg6cXvG0bffaej1eqFew3Q472CMQrCKkYiMp%2BhJDQ9M3x3sN50TkxYm%2BYgMlEtYkFy3%2FDQUgqC6X1lAHz43DnndO9%2FknAS9Lp9bnN3MNr7%2B0ADw6Nm2IU2If9XtXlSAUMV4SfQ&X-Amz-Signature=93b6d446178d6b6fec83a25eae65b3d4013968a53a6bb1daf0f4a00169b1be92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6BRABT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqxKDCJXIDdGwOyyv2BDecxI7%2Fa3XB8QrAGuWmMKpPSAiAfkb9Op9xHnrWoqZX6zsVT%2F4FfGWntuZQEyXL7xRfLOiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lvyvfc1ZqDOg3iTKtwDdH%2B7ggZ5oZuDe0lGTHdM52uvQBRCiLyljcZs9ywwhcMC95180XZN1sP0dlSHHNgJ8re%2F334538Zt2%2F8zMYgaDNHH77z7wOa5Hkcw2411rsBtdfUcww9zr9GPVJhrLQOk7fgSr3WCpOd7ZSwVW9jYFIgbgEnfSe3vvn0lCUibTTQCxDcFLStTattLZ%2BiCEX9pgq8pZV4q2yysWCrXzqkbXXbCXwybf6JYKNAHUNVioUED%2FCQl2t%2F61yMCzY5KfwhNuPj7%2F6kx4wBN7ig%2BGMgYP0XHB0lwlIQoW69yxispE0v2IgUvSSXYJmI3hlf4PjiTRf1bqmJ9h0yIfpNDQ2p2jV3dIrQunJZwSwCjQSh5gRvI18TbTjR0IyGhLu0OTd2DrvFW0koBCAvhzJxQs23PazgrjacRe1%2F7zHJ6yik%2BU2%2FJewfP4jWIXqlKFP43FY54faFUrOZ6eQeKwagnfVVHvOXKlAos4PczpUAhyqO75B1rsKQLunZkD7xkVQawzsrf1zicgfAbLfT114oZJinQELZjE9kMfJVLZ80hVg%2Bc5lnIiVVPRZ5MpgsGqIotvCCMlUgy4m1N0cg%2B3%2FPWGbKfvSx8cMATUwZp%2BOqhrPs8RXzSSDVowvM8q6nWD5Iwl92qwQY6pgG3jINLXuRDqSo8pW7gWCGErrLSN4Y%2FCeA%2FSEFN%2BYx%2F5YXlPuhGaght%2BOlo%2BeV1Msgqu9efmCwJw%2Bqvgf9zWypC1ksg6cXvG0bffaej1eqFew3Q472CMQrCKkYiMp%2BhJDQ9M3x3sN50TkxYm%2BYgMlEtYkFy3%2FDQUgqC6X1lAHz43DnndO9%2FknAS9Lp9bnN3MNr7%2B0ADw6Nm2IU2If9XtXlSAUMV4SfQ&X-Amz-Signature=b865cbb7f7424723ec0d36ad060c45b777396301823395b3995ba34c64c16dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6BRABT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqxKDCJXIDdGwOyyv2BDecxI7%2Fa3XB8QrAGuWmMKpPSAiAfkb9Op9xHnrWoqZX6zsVT%2F4FfGWntuZQEyXL7xRfLOiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lvyvfc1ZqDOg3iTKtwDdH%2B7ggZ5oZuDe0lGTHdM52uvQBRCiLyljcZs9ywwhcMC95180XZN1sP0dlSHHNgJ8re%2F334538Zt2%2F8zMYgaDNHH77z7wOa5Hkcw2411rsBtdfUcww9zr9GPVJhrLQOk7fgSr3WCpOd7ZSwVW9jYFIgbgEnfSe3vvn0lCUibTTQCxDcFLStTattLZ%2BiCEX9pgq8pZV4q2yysWCrXzqkbXXbCXwybf6JYKNAHUNVioUED%2FCQl2t%2F61yMCzY5KfwhNuPj7%2F6kx4wBN7ig%2BGMgYP0XHB0lwlIQoW69yxispE0v2IgUvSSXYJmI3hlf4PjiTRf1bqmJ9h0yIfpNDQ2p2jV3dIrQunJZwSwCjQSh5gRvI18TbTjR0IyGhLu0OTd2DrvFW0koBCAvhzJxQs23PazgrjacRe1%2F7zHJ6yik%2BU2%2FJewfP4jWIXqlKFP43FY54faFUrOZ6eQeKwagnfVVHvOXKlAos4PczpUAhyqO75B1rsKQLunZkD7xkVQawzsrf1zicgfAbLfT114oZJinQELZjE9kMfJVLZ80hVg%2Bc5lnIiVVPRZ5MpgsGqIotvCCMlUgy4m1N0cg%2B3%2FPWGbKfvSx8cMATUwZp%2BOqhrPs8RXzSSDVowvM8q6nWD5Iwl92qwQY6pgG3jINLXuRDqSo8pW7gWCGErrLSN4Y%2FCeA%2FSEFN%2BYx%2F5YXlPuhGaght%2BOlo%2BeV1Msgqu9efmCwJw%2Bqvgf9zWypC1ksg6cXvG0bffaej1eqFew3Q472CMQrCKkYiMp%2BhJDQ9M3x3sN50TkxYm%2BYgMlEtYkFy3%2FDQUgqC6X1lAHz43DnndO9%2FknAS9Lp9bnN3MNr7%2B0ADw6Nm2IU2If9XtXlSAUMV4SfQ&X-Amz-Signature=64a9ea6e1059ff9f6071054778ea6b9232a02308f19b14bcfb3591ac5bab5700&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6BRABT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqxKDCJXIDdGwOyyv2BDecxI7%2Fa3XB8QrAGuWmMKpPSAiAfkb9Op9xHnrWoqZX6zsVT%2F4FfGWntuZQEyXL7xRfLOiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lvyvfc1ZqDOg3iTKtwDdH%2B7ggZ5oZuDe0lGTHdM52uvQBRCiLyljcZs9ywwhcMC95180XZN1sP0dlSHHNgJ8re%2F334538Zt2%2F8zMYgaDNHH77z7wOa5Hkcw2411rsBtdfUcww9zr9GPVJhrLQOk7fgSr3WCpOd7ZSwVW9jYFIgbgEnfSe3vvn0lCUibTTQCxDcFLStTattLZ%2BiCEX9pgq8pZV4q2yysWCrXzqkbXXbCXwybf6JYKNAHUNVioUED%2FCQl2t%2F61yMCzY5KfwhNuPj7%2F6kx4wBN7ig%2BGMgYP0XHB0lwlIQoW69yxispE0v2IgUvSSXYJmI3hlf4PjiTRf1bqmJ9h0yIfpNDQ2p2jV3dIrQunJZwSwCjQSh5gRvI18TbTjR0IyGhLu0OTd2DrvFW0koBCAvhzJxQs23PazgrjacRe1%2F7zHJ6yik%2BU2%2FJewfP4jWIXqlKFP43FY54faFUrOZ6eQeKwagnfVVHvOXKlAos4PczpUAhyqO75B1rsKQLunZkD7xkVQawzsrf1zicgfAbLfT114oZJinQELZjE9kMfJVLZ80hVg%2Bc5lnIiVVPRZ5MpgsGqIotvCCMlUgy4m1N0cg%2B3%2FPWGbKfvSx8cMATUwZp%2BOqhrPs8RXzSSDVowvM8q6nWD5Iwl92qwQY6pgG3jINLXuRDqSo8pW7gWCGErrLSN4Y%2FCeA%2FSEFN%2BYx%2F5YXlPuhGaght%2BOlo%2BeV1Msgqu9efmCwJw%2Bqvgf9zWypC1ksg6cXvG0bffaej1eqFew3Q472CMQrCKkYiMp%2BhJDQ9M3x3sN50TkxYm%2BYgMlEtYkFy3%2FDQUgqC6X1lAHz43DnndO9%2FknAS9Lp9bnN3MNr7%2B0ADw6Nm2IU2If9XtXlSAUMV4SfQ&X-Amz-Signature=12d376951ff80d36dcb0b92adff523ddfaa3dcddd07bbd54571476680c74386f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6BRABT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqxKDCJXIDdGwOyyv2BDecxI7%2Fa3XB8QrAGuWmMKpPSAiAfkb9Op9xHnrWoqZX6zsVT%2F4FfGWntuZQEyXL7xRfLOiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lvyvfc1ZqDOg3iTKtwDdH%2B7ggZ5oZuDe0lGTHdM52uvQBRCiLyljcZs9ywwhcMC95180XZN1sP0dlSHHNgJ8re%2F334538Zt2%2F8zMYgaDNHH77z7wOa5Hkcw2411rsBtdfUcww9zr9GPVJhrLQOk7fgSr3WCpOd7ZSwVW9jYFIgbgEnfSe3vvn0lCUibTTQCxDcFLStTattLZ%2BiCEX9pgq8pZV4q2yysWCrXzqkbXXbCXwybf6JYKNAHUNVioUED%2FCQl2t%2F61yMCzY5KfwhNuPj7%2F6kx4wBN7ig%2BGMgYP0XHB0lwlIQoW69yxispE0v2IgUvSSXYJmI3hlf4PjiTRf1bqmJ9h0yIfpNDQ2p2jV3dIrQunJZwSwCjQSh5gRvI18TbTjR0IyGhLu0OTd2DrvFW0koBCAvhzJxQs23PazgrjacRe1%2F7zHJ6yik%2BU2%2FJewfP4jWIXqlKFP43FY54faFUrOZ6eQeKwagnfVVHvOXKlAos4PczpUAhyqO75B1rsKQLunZkD7xkVQawzsrf1zicgfAbLfT114oZJinQELZjE9kMfJVLZ80hVg%2Bc5lnIiVVPRZ5MpgsGqIotvCCMlUgy4m1N0cg%2B3%2FPWGbKfvSx8cMATUwZp%2BOqhrPs8RXzSSDVowvM8q6nWD5Iwl92qwQY6pgG3jINLXuRDqSo8pW7gWCGErrLSN4Y%2FCeA%2FSEFN%2BYx%2F5YXlPuhGaght%2BOlo%2BeV1Msgqu9efmCwJw%2Bqvgf9zWypC1ksg6cXvG0bffaej1eqFew3Q472CMQrCKkYiMp%2BhJDQ9M3x3sN50TkxYm%2BYgMlEtYkFy3%2FDQUgqC6X1lAHz43DnndO9%2FknAS9Lp9bnN3MNr7%2B0ADw6Nm2IU2If9XtXlSAUMV4SfQ&X-Amz-Signature=08fda9f1084e31fee145dd6447f83a7b6dba662198cfadf154efee8036d8b686&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6BRABT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqxKDCJXIDdGwOyyv2BDecxI7%2Fa3XB8QrAGuWmMKpPSAiAfkb9Op9xHnrWoqZX6zsVT%2F4FfGWntuZQEyXL7xRfLOiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lvyvfc1ZqDOg3iTKtwDdH%2B7ggZ5oZuDe0lGTHdM52uvQBRCiLyljcZs9ywwhcMC95180XZN1sP0dlSHHNgJ8re%2F334538Zt2%2F8zMYgaDNHH77z7wOa5Hkcw2411rsBtdfUcww9zr9GPVJhrLQOk7fgSr3WCpOd7ZSwVW9jYFIgbgEnfSe3vvn0lCUibTTQCxDcFLStTattLZ%2BiCEX9pgq8pZV4q2yysWCrXzqkbXXbCXwybf6JYKNAHUNVioUED%2FCQl2t%2F61yMCzY5KfwhNuPj7%2F6kx4wBN7ig%2BGMgYP0XHB0lwlIQoW69yxispE0v2IgUvSSXYJmI3hlf4PjiTRf1bqmJ9h0yIfpNDQ2p2jV3dIrQunJZwSwCjQSh5gRvI18TbTjR0IyGhLu0OTd2DrvFW0koBCAvhzJxQs23PazgrjacRe1%2F7zHJ6yik%2BU2%2FJewfP4jWIXqlKFP43FY54faFUrOZ6eQeKwagnfVVHvOXKlAos4PczpUAhyqO75B1rsKQLunZkD7xkVQawzsrf1zicgfAbLfT114oZJinQELZjE9kMfJVLZ80hVg%2Bc5lnIiVVPRZ5MpgsGqIotvCCMlUgy4m1N0cg%2B3%2FPWGbKfvSx8cMATUwZp%2BOqhrPs8RXzSSDVowvM8q6nWD5Iwl92qwQY6pgG3jINLXuRDqSo8pW7gWCGErrLSN4Y%2FCeA%2FSEFN%2BYx%2F5YXlPuhGaght%2BOlo%2BeV1Msgqu9efmCwJw%2Bqvgf9zWypC1ksg6cXvG0bffaej1eqFew3Q472CMQrCKkYiMp%2BhJDQ9M3x3sN50TkxYm%2BYgMlEtYkFy3%2FDQUgqC6X1lAHz43DnndO9%2FknAS9Lp9bnN3MNr7%2B0ADw6Nm2IU2If9XtXlSAUMV4SfQ&X-Amz-Signature=fa148881bfaa13f032fa7faedd9c05d32f6325709ddeb869e52acd676fe8f048&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6BRABT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqxKDCJXIDdGwOyyv2BDecxI7%2Fa3XB8QrAGuWmMKpPSAiAfkb9Op9xHnrWoqZX6zsVT%2F4FfGWntuZQEyXL7xRfLOiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lvyvfc1ZqDOg3iTKtwDdH%2B7ggZ5oZuDe0lGTHdM52uvQBRCiLyljcZs9ywwhcMC95180XZN1sP0dlSHHNgJ8re%2F334538Zt2%2F8zMYgaDNHH77z7wOa5Hkcw2411rsBtdfUcww9zr9GPVJhrLQOk7fgSr3WCpOd7ZSwVW9jYFIgbgEnfSe3vvn0lCUibTTQCxDcFLStTattLZ%2BiCEX9pgq8pZV4q2yysWCrXzqkbXXbCXwybf6JYKNAHUNVioUED%2FCQl2t%2F61yMCzY5KfwhNuPj7%2F6kx4wBN7ig%2BGMgYP0XHB0lwlIQoW69yxispE0v2IgUvSSXYJmI3hlf4PjiTRf1bqmJ9h0yIfpNDQ2p2jV3dIrQunJZwSwCjQSh5gRvI18TbTjR0IyGhLu0OTd2DrvFW0koBCAvhzJxQs23PazgrjacRe1%2F7zHJ6yik%2BU2%2FJewfP4jWIXqlKFP43FY54faFUrOZ6eQeKwagnfVVHvOXKlAos4PczpUAhyqO75B1rsKQLunZkD7xkVQawzsrf1zicgfAbLfT114oZJinQELZjE9kMfJVLZ80hVg%2Bc5lnIiVVPRZ5MpgsGqIotvCCMlUgy4m1N0cg%2B3%2FPWGbKfvSx8cMATUwZp%2BOqhrPs8RXzSSDVowvM8q6nWD5Iwl92qwQY6pgG3jINLXuRDqSo8pW7gWCGErrLSN4Y%2FCeA%2FSEFN%2BYx%2F5YXlPuhGaght%2BOlo%2BeV1Msgqu9efmCwJw%2Bqvgf9zWypC1ksg6cXvG0bffaej1eqFew3Q472CMQrCKkYiMp%2BhJDQ9M3x3sN50TkxYm%2BYgMlEtYkFy3%2FDQUgqC6X1lAHz43DnndO9%2FknAS9Lp9bnN3MNr7%2B0ADw6Nm2IU2If9XtXlSAUMV4SfQ&X-Amz-Signature=4ae9d08b41cf2cd31f62bb8638559b06da23f7d42c677aa79de6dc56be37b6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
