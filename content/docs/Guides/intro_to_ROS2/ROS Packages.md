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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCQKFRH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFlpUBbv7wIAXLBKmkJ8wOHN8qU%2BbrCLUbF2uK9th9eaAiEApIo5YqczR%2BoYM4pEg3u23qVFyCK%2FV7VsA5x%2BoY3AimoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvQPSCMUBO5wRq6xSrcA9%2Fa0w1nvW%2BQ3huQvedpiUC0JHxCqtoc90aosvnz7QrH42BGp9QwlU1MZ8X3quoo4m15g3%2FuQwzjlR7B%2Fg9bul3eWsrgnNX7l7NW%2FUDNKsJ%2FraYUC9mWaZWCBS6jVA4J3Fl0%2BJdPn5ysqiRjT5F7wxQjVi8QZqWaLBenEaOCQTOI26%2F1Q5ZhH2NXP%2B1fHwCXaY9xhkKvyI7spzdOnkaY92sDkhNrMEb0apSkZGCUk6x6WxABrUWoOQ8YPOj9z7OKnEriC5OTx%2BYjZ5QKYlcujK8VwILWJnhhsASZ3ZPreGf2VJlKoLPeyKyaVtO3S8RIPEnDp%2F%2BGzXwyksnvdTyipdUl33Uq5w4TyfV%2FQu8v9jXNxp5epUjqq2zN%2F8eLlBKzqzhlcl0csnsnPbmVgLvGyK5iol3l%2B9Arlv83UEJUmTXIhBL4zlh68EDoEfa967%2B1FI6%2Fzr0pAHKQJUZX%2BQp13x57tajrJJUZjZcSAEp9BjITVOl3NBL5zELxseuy3xSw4jOHEjjBsXZ%2FPUYH0A%2FZb8miQNx0K0WdsjonSCLbHqg%2FcxwsehDT5zo%2BWEaf%2FCHDgtgKFV9rUilKTAY%2BKUJR7CeBIssFsgDXsC1Rztg1duitHiEkOFTVEsM1XPrXMNeq4r8GOqUBYZQe0a3nmbi6xqWDdOnOA2%2FdTshYa2de16KlHhr%2B5UGKKioNqTAVa6eWZEd0fHHc47otMi7YvcF8Vr47jWgf4w7j2ne5wdBLIwagOrKoWMDofaQ%2BwV00s6lKx0kOPZtlFhyc4S1eRtLgMR05emBtTmiNFEjgnguqbMF55PA1e%2Bjk16FtaI444yOs95BT%2FmNlWmk5VYKR5PHajVa2l8fGB36ApKbq&X-Amz-Signature=8deaf357dee7c962cc196f2eb39660a6d0d6a7e9c47444a33e769577104d0cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCQKFRH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFlpUBbv7wIAXLBKmkJ8wOHN8qU%2BbrCLUbF2uK9th9eaAiEApIo5YqczR%2BoYM4pEg3u23qVFyCK%2FV7VsA5x%2BoY3AimoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvQPSCMUBO5wRq6xSrcA9%2Fa0w1nvW%2BQ3huQvedpiUC0JHxCqtoc90aosvnz7QrH42BGp9QwlU1MZ8X3quoo4m15g3%2FuQwzjlR7B%2Fg9bul3eWsrgnNX7l7NW%2FUDNKsJ%2FraYUC9mWaZWCBS6jVA4J3Fl0%2BJdPn5ysqiRjT5F7wxQjVi8QZqWaLBenEaOCQTOI26%2F1Q5ZhH2NXP%2B1fHwCXaY9xhkKvyI7spzdOnkaY92sDkhNrMEb0apSkZGCUk6x6WxABrUWoOQ8YPOj9z7OKnEriC5OTx%2BYjZ5QKYlcujK8VwILWJnhhsASZ3ZPreGf2VJlKoLPeyKyaVtO3S8RIPEnDp%2F%2BGzXwyksnvdTyipdUl33Uq5w4TyfV%2FQu8v9jXNxp5epUjqq2zN%2F8eLlBKzqzhlcl0csnsnPbmVgLvGyK5iol3l%2B9Arlv83UEJUmTXIhBL4zlh68EDoEfa967%2B1FI6%2Fzr0pAHKQJUZX%2BQp13x57tajrJJUZjZcSAEp9BjITVOl3NBL5zELxseuy3xSw4jOHEjjBsXZ%2FPUYH0A%2FZb8miQNx0K0WdsjonSCLbHqg%2FcxwsehDT5zo%2BWEaf%2FCHDgtgKFV9rUilKTAY%2BKUJR7CeBIssFsgDXsC1Rztg1duitHiEkOFTVEsM1XPrXMNeq4r8GOqUBYZQe0a3nmbi6xqWDdOnOA2%2FdTshYa2de16KlHhr%2B5UGKKioNqTAVa6eWZEd0fHHc47otMi7YvcF8Vr47jWgf4w7j2ne5wdBLIwagOrKoWMDofaQ%2BwV00s6lKx0kOPZtlFhyc4S1eRtLgMR05emBtTmiNFEjgnguqbMF55PA1e%2Bjk16FtaI444yOs95BT%2FmNlWmk5VYKR5PHajVa2l8fGB36ApKbq&X-Amz-Signature=a97c3be1df2485b918754c3e687c94459c573970ddaa9733ff91b86847c45748&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCQKFRH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFlpUBbv7wIAXLBKmkJ8wOHN8qU%2BbrCLUbF2uK9th9eaAiEApIo5YqczR%2BoYM4pEg3u23qVFyCK%2FV7VsA5x%2BoY3AimoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvQPSCMUBO5wRq6xSrcA9%2Fa0w1nvW%2BQ3huQvedpiUC0JHxCqtoc90aosvnz7QrH42BGp9QwlU1MZ8X3quoo4m15g3%2FuQwzjlR7B%2Fg9bul3eWsrgnNX7l7NW%2FUDNKsJ%2FraYUC9mWaZWCBS6jVA4J3Fl0%2BJdPn5ysqiRjT5F7wxQjVi8QZqWaLBenEaOCQTOI26%2F1Q5ZhH2NXP%2B1fHwCXaY9xhkKvyI7spzdOnkaY92sDkhNrMEb0apSkZGCUk6x6WxABrUWoOQ8YPOj9z7OKnEriC5OTx%2BYjZ5QKYlcujK8VwILWJnhhsASZ3ZPreGf2VJlKoLPeyKyaVtO3S8RIPEnDp%2F%2BGzXwyksnvdTyipdUl33Uq5w4TyfV%2FQu8v9jXNxp5epUjqq2zN%2F8eLlBKzqzhlcl0csnsnPbmVgLvGyK5iol3l%2B9Arlv83UEJUmTXIhBL4zlh68EDoEfa967%2B1FI6%2Fzr0pAHKQJUZX%2BQp13x57tajrJJUZjZcSAEp9BjITVOl3NBL5zELxseuy3xSw4jOHEjjBsXZ%2FPUYH0A%2FZb8miQNx0K0WdsjonSCLbHqg%2FcxwsehDT5zo%2BWEaf%2FCHDgtgKFV9rUilKTAY%2BKUJR7CeBIssFsgDXsC1Rztg1duitHiEkOFTVEsM1XPrXMNeq4r8GOqUBYZQe0a3nmbi6xqWDdOnOA2%2FdTshYa2de16KlHhr%2B5UGKKioNqTAVa6eWZEd0fHHc47otMi7YvcF8Vr47jWgf4w7j2ne5wdBLIwagOrKoWMDofaQ%2BwV00s6lKx0kOPZtlFhyc4S1eRtLgMR05emBtTmiNFEjgnguqbMF55PA1e%2Bjk16FtaI444yOs95BT%2FmNlWmk5VYKR5PHajVa2l8fGB36ApKbq&X-Amz-Signature=e9a5bc40ffd510cc68beadfe40cb3bd87d4a2c9576ecbe044d63c02470f9a94a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCQKFRH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFlpUBbv7wIAXLBKmkJ8wOHN8qU%2BbrCLUbF2uK9th9eaAiEApIo5YqczR%2BoYM4pEg3u23qVFyCK%2FV7VsA5x%2BoY3AimoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvQPSCMUBO5wRq6xSrcA9%2Fa0w1nvW%2BQ3huQvedpiUC0JHxCqtoc90aosvnz7QrH42BGp9QwlU1MZ8X3quoo4m15g3%2FuQwzjlR7B%2Fg9bul3eWsrgnNX7l7NW%2FUDNKsJ%2FraYUC9mWaZWCBS6jVA4J3Fl0%2BJdPn5ysqiRjT5F7wxQjVi8QZqWaLBenEaOCQTOI26%2F1Q5ZhH2NXP%2B1fHwCXaY9xhkKvyI7spzdOnkaY92sDkhNrMEb0apSkZGCUk6x6WxABrUWoOQ8YPOj9z7OKnEriC5OTx%2BYjZ5QKYlcujK8VwILWJnhhsASZ3ZPreGf2VJlKoLPeyKyaVtO3S8RIPEnDp%2F%2BGzXwyksnvdTyipdUl33Uq5w4TyfV%2FQu8v9jXNxp5epUjqq2zN%2F8eLlBKzqzhlcl0csnsnPbmVgLvGyK5iol3l%2B9Arlv83UEJUmTXIhBL4zlh68EDoEfa967%2B1FI6%2Fzr0pAHKQJUZX%2BQp13x57tajrJJUZjZcSAEp9BjITVOl3NBL5zELxseuy3xSw4jOHEjjBsXZ%2FPUYH0A%2FZb8miQNx0K0WdsjonSCLbHqg%2FcxwsehDT5zo%2BWEaf%2FCHDgtgKFV9rUilKTAY%2BKUJR7CeBIssFsgDXsC1Rztg1duitHiEkOFTVEsM1XPrXMNeq4r8GOqUBYZQe0a3nmbi6xqWDdOnOA2%2FdTshYa2de16KlHhr%2B5UGKKioNqTAVa6eWZEd0fHHc47otMi7YvcF8Vr47jWgf4w7j2ne5wdBLIwagOrKoWMDofaQ%2BwV00s6lKx0kOPZtlFhyc4S1eRtLgMR05emBtTmiNFEjgnguqbMF55PA1e%2Bjk16FtaI444yOs95BT%2FmNlWmk5VYKR5PHajVa2l8fGB36ApKbq&X-Amz-Signature=b1360bbf6aca944b561d22c9ab63ae2277371e703113e4aaa876442b907f2a68&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCQKFRH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFlpUBbv7wIAXLBKmkJ8wOHN8qU%2BbrCLUbF2uK9th9eaAiEApIo5YqczR%2BoYM4pEg3u23qVFyCK%2FV7VsA5x%2BoY3AimoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvQPSCMUBO5wRq6xSrcA9%2Fa0w1nvW%2BQ3huQvedpiUC0JHxCqtoc90aosvnz7QrH42BGp9QwlU1MZ8X3quoo4m15g3%2FuQwzjlR7B%2Fg9bul3eWsrgnNX7l7NW%2FUDNKsJ%2FraYUC9mWaZWCBS6jVA4J3Fl0%2BJdPn5ysqiRjT5F7wxQjVi8QZqWaLBenEaOCQTOI26%2F1Q5ZhH2NXP%2B1fHwCXaY9xhkKvyI7spzdOnkaY92sDkhNrMEb0apSkZGCUk6x6WxABrUWoOQ8YPOj9z7OKnEriC5OTx%2BYjZ5QKYlcujK8VwILWJnhhsASZ3ZPreGf2VJlKoLPeyKyaVtO3S8RIPEnDp%2F%2BGzXwyksnvdTyipdUl33Uq5w4TyfV%2FQu8v9jXNxp5epUjqq2zN%2F8eLlBKzqzhlcl0csnsnPbmVgLvGyK5iol3l%2B9Arlv83UEJUmTXIhBL4zlh68EDoEfa967%2B1FI6%2Fzr0pAHKQJUZX%2BQp13x57tajrJJUZjZcSAEp9BjITVOl3NBL5zELxseuy3xSw4jOHEjjBsXZ%2FPUYH0A%2FZb8miQNx0K0WdsjonSCLbHqg%2FcxwsehDT5zo%2BWEaf%2FCHDgtgKFV9rUilKTAY%2BKUJR7CeBIssFsgDXsC1Rztg1duitHiEkOFTVEsM1XPrXMNeq4r8GOqUBYZQe0a3nmbi6xqWDdOnOA2%2FdTshYa2de16KlHhr%2B5UGKKioNqTAVa6eWZEd0fHHc47otMi7YvcF8Vr47jWgf4w7j2ne5wdBLIwagOrKoWMDofaQ%2BwV00s6lKx0kOPZtlFhyc4S1eRtLgMR05emBtTmiNFEjgnguqbMF55PA1e%2Bjk16FtaI444yOs95BT%2FmNlWmk5VYKR5PHajVa2l8fGB36ApKbq&X-Amz-Signature=a37fe74ee25d3cb4e3ce9662637112aae7e8dc26e5c3bf1eb591010b63f70883&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCQKFRH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFlpUBbv7wIAXLBKmkJ8wOHN8qU%2BbrCLUbF2uK9th9eaAiEApIo5YqczR%2BoYM4pEg3u23qVFyCK%2FV7VsA5x%2BoY3AimoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvQPSCMUBO5wRq6xSrcA9%2Fa0w1nvW%2BQ3huQvedpiUC0JHxCqtoc90aosvnz7QrH42BGp9QwlU1MZ8X3quoo4m15g3%2FuQwzjlR7B%2Fg9bul3eWsrgnNX7l7NW%2FUDNKsJ%2FraYUC9mWaZWCBS6jVA4J3Fl0%2BJdPn5ysqiRjT5F7wxQjVi8QZqWaLBenEaOCQTOI26%2F1Q5ZhH2NXP%2B1fHwCXaY9xhkKvyI7spzdOnkaY92sDkhNrMEb0apSkZGCUk6x6WxABrUWoOQ8YPOj9z7OKnEriC5OTx%2BYjZ5QKYlcujK8VwILWJnhhsASZ3ZPreGf2VJlKoLPeyKyaVtO3S8RIPEnDp%2F%2BGzXwyksnvdTyipdUl33Uq5w4TyfV%2FQu8v9jXNxp5epUjqq2zN%2F8eLlBKzqzhlcl0csnsnPbmVgLvGyK5iol3l%2B9Arlv83UEJUmTXIhBL4zlh68EDoEfa967%2B1FI6%2Fzr0pAHKQJUZX%2BQp13x57tajrJJUZjZcSAEp9BjITVOl3NBL5zELxseuy3xSw4jOHEjjBsXZ%2FPUYH0A%2FZb8miQNx0K0WdsjonSCLbHqg%2FcxwsehDT5zo%2BWEaf%2FCHDgtgKFV9rUilKTAY%2BKUJR7CeBIssFsgDXsC1Rztg1duitHiEkOFTVEsM1XPrXMNeq4r8GOqUBYZQe0a3nmbi6xqWDdOnOA2%2FdTshYa2de16KlHhr%2B5UGKKioNqTAVa6eWZEd0fHHc47otMi7YvcF8Vr47jWgf4w7j2ne5wdBLIwagOrKoWMDofaQ%2BwV00s6lKx0kOPZtlFhyc4S1eRtLgMR05emBtTmiNFEjgnguqbMF55PA1e%2Bjk16FtaI444yOs95BT%2FmNlWmk5VYKR5PHajVa2l8fGB36ApKbq&X-Amz-Signature=527dd4c6276cf09b3c4ed505a99155c8a0932be20c972925a989c9e0dfc2fd96&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCQKFRH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFlpUBbv7wIAXLBKmkJ8wOHN8qU%2BbrCLUbF2uK9th9eaAiEApIo5YqczR%2BoYM4pEg3u23qVFyCK%2FV7VsA5x%2BoY3AimoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvQPSCMUBO5wRq6xSrcA9%2Fa0w1nvW%2BQ3huQvedpiUC0JHxCqtoc90aosvnz7QrH42BGp9QwlU1MZ8X3quoo4m15g3%2FuQwzjlR7B%2Fg9bul3eWsrgnNX7l7NW%2FUDNKsJ%2FraYUC9mWaZWCBS6jVA4J3Fl0%2BJdPn5ysqiRjT5F7wxQjVi8QZqWaLBenEaOCQTOI26%2F1Q5ZhH2NXP%2B1fHwCXaY9xhkKvyI7spzdOnkaY92sDkhNrMEb0apSkZGCUk6x6WxABrUWoOQ8YPOj9z7OKnEriC5OTx%2BYjZ5QKYlcujK8VwILWJnhhsASZ3ZPreGf2VJlKoLPeyKyaVtO3S8RIPEnDp%2F%2BGzXwyksnvdTyipdUl33Uq5w4TyfV%2FQu8v9jXNxp5epUjqq2zN%2F8eLlBKzqzhlcl0csnsnPbmVgLvGyK5iol3l%2B9Arlv83UEJUmTXIhBL4zlh68EDoEfa967%2B1FI6%2Fzr0pAHKQJUZX%2BQp13x57tajrJJUZjZcSAEp9BjITVOl3NBL5zELxseuy3xSw4jOHEjjBsXZ%2FPUYH0A%2FZb8miQNx0K0WdsjonSCLbHqg%2FcxwsehDT5zo%2BWEaf%2FCHDgtgKFV9rUilKTAY%2BKUJR7CeBIssFsgDXsC1Rztg1duitHiEkOFTVEsM1XPrXMNeq4r8GOqUBYZQe0a3nmbi6xqWDdOnOA2%2FdTshYa2de16KlHhr%2B5UGKKioNqTAVa6eWZEd0fHHc47otMi7YvcF8Vr47jWgf4w7j2ne5wdBLIwagOrKoWMDofaQ%2BwV00s6lKx0kOPZtlFhyc4S1eRtLgMR05emBtTmiNFEjgnguqbMF55PA1e%2Bjk16FtaI444yOs95BT%2FmNlWmk5VYKR5PHajVa2l8fGB36ApKbq&X-Amz-Signature=6a1947c40433b720b8536381e8c2467129ef40a8ba10a4007d3da5d61f9eafff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
