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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6DJUIX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDKEwiGnguqxCLcCSl5qWvkVmJ3ClIxh%2BGY0tmerYZ3MAiBul%2F0xNamY%2FD9icbN9V2DdVY1omxrRky00QVZEfnfJqiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkufljQykyYFbXW%2BCKtwDzRgEGabfmZBck0iqxf7Xt1xfAeGn9hhaX9hbQ5kh0nJ39rgai09xVd3koGE3McR5aL465SXt5PieupIp6au8S4eaZZLzHFuzxl8D%2Fa%2Bj0AzEZfE%2Bcf2p%2BWok%2Bl4baUwQKrap95xDp%2FeNiEyED4h%2Bk6QzOuYNqNXp%2BN0lnkaGvb2RP1dhur1HmFQqCIA%2FVFUpjrrnvY6MBPr4m%2FHqfbQwokLHPJqUVZVUqXkRd7H%2BE%2B2dVoJsTWDfHokJC1pbEk30gQc5pPONM5xFLerqAzlFFX6%2BZpau7Om0xg%2FGSfOrptO1q%2BKImJZm%2F6luI6vag3AH0f11q9Z7z2xl3eUZpKoGgDMwUSGOca3TxR65xl9KAQZuPROMzx7HWbGZjdQE0pdHxzCKBITy4scht82IJ9GDJMzVWkv1q9AIFv9e%2FeO9gTYGcK2yihGAqVhC2d%2FozNIS66qR0VcXKLgrANvHd%2FvsdZ5WoiYScxdDYaZuHW3Y2buVn6CJUC5pbrSlWOk3ff83fUEbx1hYBi36imG5eN0%2FNW15itgAlfwBpSUc6o591G5jRqXkzgWyWf%2Fa0r%2BCpQBZ9X%2FLTtCmQvRGcOKQTKVspUp7MUw1xnlo%2BT5wuN3THHU2q5f612ZfdDOvyFMwhYHzwQY6pgEhGSnbYtN7Cm3a0lHaO7%2F53J6suEIoXlHlZSpCD282z%2FbSO1U3w%2F%2BIYchAymXqT30j4sJAKF8VTdcuCcqcikG6Rtpy%2FPIFewe3Um9k4Qu28DwDPMKhEQe0%2BDSwZwm3NRQ7noJejra%2B0UxYlpKO6SUsBqce9xUBsTW1pYxdDwVFCFPzloirN13lrAi3f3seGIjgUk3QDsXwsHsq3oQmB7%2FFallzy6t1&X-Amz-Signature=71440ceae00b433d32a381e073fb443f589a1283b178f77fd8194699fbe3973c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6DJUIX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDKEwiGnguqxCLcCSl5qWvkVmJ3ClIxh%2BGY0tmerYZ3MAiBul%2F0xNamY%2FD9icbN9V2DdVY1omxrRky00QVZEfnfJqiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkufljQykyYFbXW%2BCKtwDzRgEGabfmZBck0iqxf7Xt1xfAeGn9hhaX9hbQ5kh0nJ39rgai09xVd3koGE3McR5aL465SXt5PieupIp6au8S4eaZZLzHFuzxl8D%2Fa%2Bj0AzEZfE%2Bcf2p%2BWok%2Bl4baUwQKrap95xDp%2FeNiEyED4h%2Bk6QzOuYNqNXp%2BN0lnkaGvb2RP1dhur1HmFQqCIA%2FVFUpjrrnvY6MBPr4m%2FHqfbQwokLHPJqUVZVUqXkRd7H%2BE%2B2dVoJsTWDfHokJC1pbEk30gQc5pPONM5xFLerqAzlFFX6%2BZpau7Om0xg%2FGSfOrptO1q%2BKImJZm%2F6luI6vag3AH0f11q9Z7z2xl3eUZpKoGgDMwUSGOca3TxR65xl9KAQZuPROMzx7HWbGZjdQE0pdHxzCKBITy4scht82IJ9GDJMzVWkv1q9AIFv9e%2FeO9gTYGcK2yihGAqVhC2d%2FozNIS66qR0VcXKLgrANvHd%2FvsdZ5WoiYScxdDYaZuHW3Y2buVn6CJUC5pbrSlWOk3ff83fUEbx1hYBi36imG5eN0%2FNW15itgAlfwBpSUc6o591G5jRqXkzgWyWf%2Fa0r%2BCpQBZ9X%2FLTtCmQvRGcOKQTKVspUp7MUw1xnlo%2BT5wuN3THHU2q5f612ZfdDOvyFMwhYHzwQY6pgEhGSnbYtN7Cm3a0lHaO7%2F53J6suEIoXlHlZSpCD282z%2FbSO1U3w%2F%2BIYchAymXqT30j4sJAKF8VTdcuCcqcikG6Rtpy%2FPIFewe3Um9k4Qu28DwDPMKhEQe0%2BDSwZwm3NRQ7noJejra%2B0UxYlpKO6SUsBqce9xUBsTW1pYxdDwVFCFPzloirN13lrAi3f3seGIjgUk3QDsXwsHsq3oQmB7%2FFallzy6t1&X-Amz-Signature=c448ad3c2532f1bbe4fd9dc873604217b15348bbd30b47d84dfa79e9b9d9def9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6DJUIX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDKEwiGnguqxCLcCSl5qWvkVmJ3ClIxh%2BGY0tmerYZ3MAiBul%2F0xNamY%2FD9icbN9V2DdVY1omxrRky00QVZEfnfJqiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkufljQykyYFbXW%2BCKtwDzRgEGabfmZBck0iqxf7Xt1xfAeGn9hhaX9hbQ5kh0nJ39rgai09xVd3koGE3McR5aL465SXt5PieupIp6au8S4eaZZLzHFuzxl8D%2Fa%2Bj0AzEZfE%2Bcf2p%2BWok%2Bl4baUwQKrap95xDp%2FeNiEyED4h%2Bk6QzOuYNqNXp%2BN0lnkaGvb2RP1dhur1HmFQqCIA%2FVFUpjrrnvY6MBPr4m%2FHqfbQwokLHPJqUVZVUqXkRd7H%2BE%2B2dVoJsTWDfHokJC1pbEk30gQc5pPONM5xFLerqAzlFFX6%2BZpau7Om0xg%2FGSfOrptO1q%2BKImJZm%2F6luI6vag3AH0f11q9Z7z2xl3eUZpKoGgDMwUSGOca3TxR65xl9KAQZuPROMzx7HWbGZjdQE0pdHxzCKBITy4scht82IJ9GDJMzVWkv1q9AIFv9e%2FeO9gTYGcK2yihGAqVhC2d%2FozNIS66qR0VcXKLgrANvHd%2FvsdZ5WoiYScxdDYaZuHW3Y2buVn6CJUC5pbrSlWOk3ff83fUEbx1hYBi36imG5eN0%2FNW15itgAlfwBpSUc6o591G5jRqXkzgWyWf%2Fa0r%2BCpQBZ9X%2FLTtCmQvRGcOKQTKVspUp7MUw1xnlo%2BT5wuN3THHU2q5f612ZfdDOvyFMwhYHzwQY6pgEhGSnbYtN7Cm3a0lHaO7%2F53J6suEIoXlHlZSpCD282z%2FbSO1U3w%2F%2BIYchAymXqT30j4sJAKF8VTdcuCcqcikG6Rtpy%2FPIFewe3Um9k4Qu28DwDPMKhEQe0%2BDSwZwm3NRQ7noJejra%2B0UxYlpKO6SUsBqce9xUBsTW1pYxdDwVFCFPzloirN13lrAi3f3seGIjgUk3QDsXwsHsq3oQmB7%2FFallzy6t1&X-Amz-Signature=d58d98d8979e616362475f64566ea9a31a2161d8e6a76a818d2f40f953bba3f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6DJUIX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDKEwiGnguqxCLcCSl5qWvkVmJ3ClIxh%2BGY0tmerYZ3MAiBul%2F0xNamY%2FD9icbN9V2DdVY1omxrRky00QVZEfnfJqiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkufljQykyYFbXW%2BCKtwDzRgEGabfmZBck0iqxf7Xt1xfAeGn9hhaX9hbQ5kh0nJ39rgai09xVd3koGE3McR5aL465SXt5PieupIp6au8S4eaZZLzHFuzxl8D%2Fa%2Bj0AzEZfE%2Bcf2p%2BWok%2Bl4baUwQKrap95xDp%2FeNiEyED4h%2Bk6QzOuYNqNXp%2BN0lnkaGvb2RP1dhur1HmFQqCIA%2FVFUpjrrnvY6MBPr4m%2FHqfbQwokLHPJqUVZVUqXkRd7H%2BE%2B2dVoJsTWDfHokJC1pbEk30gQc5pPONM5xFLerqAzlFFX6%2BZpau7Om0xg%2FGSfOrptO1q%2BKImJZm%2F6luI6vag3AH0f11q9Z7z2xl3eUZpKoGgDMwUSGOca3TxR65xl9KAQZuPROMzx7HWbGZjdQE0pdHxzCKBITy4scht82IJ9GDJMzVWkv1q9AIFv9e%2FeO9gTYGcK2yihGAqVhC2d%2FozNIS66qR0VcXKLgrANvHd%2FvsdZ5WoiYScxdDYaZuHW3Y2buVn6CJUC5pbrSlWOk3ff83fUEbx1hYBi36imG5eN0%2FNW15itgAlfwBpSUc6o591G5jRqXkzgWyWf%2Fa0r%2BCpQBZ9X%2FLTtCmQvRGcOKQTKVspUp7MUw1xnlo%2BT5wuN3THHU2q5f612ZfdDOvyFMwhYHzwQY6pgEhGSnbYtN7Cm3a0lHaO7%2F53J6suEIoXlHlZSpCD282z%2FbSO1U3w%2F%2BIYchAymXqT30j4sJAKF8VTdcuCcqcikG6Rtpy%2FPIFewe3Um9k4Qu28DwDPMKhEQe0%2BDSwZwm3NRQ7noJejra%2B0UxYlpKO6SUsBqce9xUBsTW1pYxdDwVFCFPzloirN13lrAi3f3seGIjgUk3QDsXwsHsq3oQmB7%2FFallzy6t1&X-Amz-Signature=bb219f7145c9066e6816640f0eb902434b4f7689193ba61e25f7454deaaedadc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6DJUIX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDKEwiGnguqxCLcCSl5qWvkVmJ3ClIxh%2BGY0tmerYZ3MAiBul%2F0xNamY%2FD9icbN9V2DdVY1omxrRky00QVZEfnfJqiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkufljQykyYFbXW%2BCKtwDzRgEGabfmZBck0iqxf7Xt1xfAeGn9hhaX9hbQ5kh0nJ39rgai09xVd3koGE3McR5aL465SXt5PieupIp6au8S4eaZZLzHFuzxl8D%2Fa%2Bj0AzEZfE%2Bcf2p%2BWok%2Bl4baUwQKrap95xDp%2FeNiEyED4h%2Bk6QzOuYNqNXp%2BN0lnkaGvb2RP1dhur1HmFQqCIA%2FVFUpjrrnvY6MBPr4m%2FHqfbQwokLHPJqUVZVUqXkRd7H%2BE%2B2dVoJsTWDfHokJC1pbEk30gQc5pPONM5xFLerqAzlFFX6%2BZpau7Om0xg%2FGSfOrptO1q%2BKImJZm%2F6luI6vag3AH0f11q9Z7z2xl3eUZpKoGgDMwUSGOca3TxR65xl9KAQZuPROMzx7HWbGZjdQE0pdHxzCKBITy4scht82IJ9GDJMzVWkv1q9AIFv9e%2FeO9gTYGcK2yihGAqVhC2d%2FozNIS66qR0VcXKLgrANvHd%2FvsdZ5WoiYScxdDYaZuHW3Y2buVn6CJUC5pbrSlWOk3ff83fUEbx1hYBi36imG5eN0%2FNW15itgAlfwBpSUc6o591G5jRqXkzgWyWf%2Fa0r%2BCpQBZ9X%2FLTtCmQvRGcOKQTKVspUp7MUw1xnlo%2BT5wuN3THHU2q5f612ZfdDOvyFMwhYHzwQY6pgEhGSnbYtN7Cm3a0lHaO7%2F53J6suEIoXlHlZSpCD282z%2FbSO1U3w%2F%2BIYchAymXqT30j4sJAKF8VTdcuCcqcikG6Rtpy%2FPIFewe3Um9k4Qu28DwDPMKhEQe0%2BDSwZwm3NRQ7noJejra%2B0UxYlpKO6SUsBqce9xUBsTW1pYxdDwVFCFPzloirN13lrAi3f3seGIjgUk3QDsXwsHsq3oQmB7%2FFallzy6t1&X-Amz-Signature=42c1f07ee047734526dc066b1f5ecc7217d173aff4c8551a07552362bd48673c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6DJUIX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDKEwiGnguqxCLcCSl5qWvkVmJ3ClIxh%2BGY0tmerYZ3MAiBul%2F0xNamY%2FD9icbN9V2DdVY1omxrRky00QVZEfnfJqiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkufljQykyYFbXW%2BCKtwDzRgEGabfmZBck0iqxf7Xt1xfAeGn9hhaX9hbQ5kh0nJ39rgai09xVd3koGE3McR5aL465SXt5PieupIp6au8S4eaZZLzHFuzxl8D%2Fa%2Bj0AzEZfE%2Bcf2p%2BWok%2Bl4baUwQKrap95xDp%2FeNiEyED4h%2Bk6QzOuYNqNXp%2BN0lnkaGvb2RP1dhur1HmFQqCIA%2FVFUpjrrnvY6MBPr4m%2FHqfbQwokLHPJqUVZVUqXkRd7H%2BE%2B2dVoJsTWDfHokJC1pbEk30gQc5pPONM5xFLerqAzlFFX6%2BZpau7Om0xg%2FGSfOrptO1q%2BKImJZm%2F6luI6vag3AH0f11q9Z7z2xl3eUZpKoGgDMwUSGOca3TxR65xl9KAQZuPROMzx7HWbGZjdQE0pdHxzCKBITy4scht82IJ9GDJMzVWkv1q9AIFv9e%2FeO9gTYGcK2yihGAqVhC2d%2FozNIS66qR0VcXKLgrANvHd%2FvsdZ5WoiYScxdDYaZuHW3Y2buVn6CJUC5pbrSlWOk3ff83fUEbx1hYBi36imG5eN0%2FNW15itgAlfwBpSUc6o591G5jRqXkzgWyWf%2Fa0r%2BCpQBZ9X%2FLTtCmQvRGcOKQTKVspUp7MUw1xnlo%2BT5wuN3THHU2q5f612ZfdDOvyFMwhYHzwQY6pgEhGSnbYtN7Cm3a0lHaO7%2F53J6suEIoXlHlZSpCD282z%2FbSO1U3w%2F%2BIYchAymXqT30j4sJAKF8VTdcuCcqcikG6Rtpy%2FPIFewe3Um9k4Qu28DwDPMKhEQe0%2BDSwZwm3NRQ7noJejra%2B0UxYlpKO6SUsBqce9xUBsTW1pYxdDwVFCFPzloirN13lrAi3f3seGIjgUk3QDsXwsHsq3oQmB7%2FFallzy6t1&X-Amz-Signature=fc7429e97837ec8371ae0f027385530b2331e9f40bcbd88682570e962347be29&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6DJUIX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDKEwiGnguqxCLcCSl5qWvkVmJ3ClIxh%2BGY0tmerYZ3MAiBul%2F0xNamY%2FD9icbN9V2DdVY1omxrRky00QVZEfnfJqiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkufljQykyYFbXW%2BCKtwDzRgEGabfmZBck0iqxf7Xt1xfAeGn9hhaX9hbQ5kh0nJ39rgai09xVd3koGE3McR5aL465SXt5PieupIp6au8S4eaZZLzHFuzxl8D%2Fa%2Bj0AzEZfE%2Bcf2p%2BWok%2Bl4baUwQKrap95xDp%2FeNiEyED4h%2Bk6QzOuYNqNXp%2BN0lnkaGvb2RP1dhur1HmFQqCIA%2FVFUpjrrnvY6MBPr4m%2FHqfbQwokLHPJqUVZVUqXkRd7H%2BE%2B2dVoJsTWDfHokJC1pbEk30gQc5pPONM5xFLerqAzlFFX6%2BZpau7Om0xg%2FGSfOrptO1q%2BKImJZm%2F6luI6vag3AH0f11q9Z7z2xl3eUZpKoGgDMwUSGOca3TxR65xl9KAQZuPROMzx7HWbGZjdQE0pdHxzCKBITy4scht82IJ9GDJMzVWkv1q9AIFv9e%2FeO9gTYGcK2yihGAqVhC2d%2FozNIS66qR0VcXKLgrANvHd%2FvsdZ5WoiYScxdDYaZuHW3Y2buVn6CJUC5pbrSlWOk3ff83fUEbx1hYBi36imG5eN0%2FNW15itgAlfwBpSUc6o591G5jRqXkzgWyWf%2Fa0r%2BCpQBZ9X%2FLTtCmQvRGcOKQTKVspUp7MUw1xnlo%2BT5wuN3THHU2q5f612ZfdDOvyFMwhYHzwQY6pgEhGSnbYtN7Cm3a0lHaO7%2F53J6suEIoXlHlZSpCD282z%2FbSO1U3w%2F%2BIYchAymXqT30j4sJAKF8VTdcuCcqcikG6Rtpy%2FPIFewe3Um9k4Qu28DwDPMKhEQe0%2BDSwZwm3NRQ7noJejra%2B0UxYlpKO6SUsBqce9xUBsTW1pYxdDwVFCFPzloirN13lrAi3f3seGIjgUk3QDsXwsHsq3oQmB7%2FFallzy6t1&X-Amz-Signature=1838253bfb5627bb785e91ba329cfbe2b91b5ba3a234e3ce2250dd5025af5244&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
