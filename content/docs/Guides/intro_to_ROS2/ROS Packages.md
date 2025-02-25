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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6LDFP2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEfnvyDiT3tydD4rA9pjfY%2BhTvxPXv8%2F0kMT6LmaY6hgAiB0BB0FB2idFMuPq7IzDHWrfPdv19NFtuuUx2w4Z0wKlyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1SA9gGcGOELcv%2B0VKtwDmX7EF9CrEkCaRVf1NydOUWgKelMVVR4WgayT1Je5K4hMt3GSZ85qN%2BilOIXikV24vPdGL4oYlaxiqqB9jggEM1wQqsM5TELeeK0tloeXKTJavpRQ1nB%2BQPAC5Yk3C2uOcoSDBahgq250fGAMG%2BESKjn8Z5DIeV92NUQF6THJCh19%2FbVsT6U8FBM8I8%2BbZ7hdyOGcxY4LTT0sXcZUDtewe1WhFFv9uoymytIBrhzjk8YyGbFkv4%2FbNNIGl05PXjyKPLlsiecIg8vmt4LPQ0u%2ByorYKLZH7uXfP3VYzB840dnCoi%2Bed9Vx%2FV0m7R8CTVYy5LkI7gDiuMu2UmmXMDXczZexK9kyQKEhoPQ%2BNaVNR0xCGKLzLRJ7Doe0U0iyDf1hEV50UiEKn1uSCIhV%2FnfJURRXvzlFoLar9yuvgi744YQFhS0lDkRcj0GMXXVVdZMzZj39q8cyBugq15P7Hujh1wG5LSE1dlhvVnQTfjy5nfXBZ1WIcwHdga36Mp0lCnn8wJHRfSiRhAuUo7jitdl0DWyjoYbpUReAN13y%2BrcRufEux09%2B0IZO7rzb91jW3NrBYeuWnZ2GHThugLslDTs55J9eOkK8ZclsWF5Ze6ldtiNJXfHpENfLMrsPqwQwmI34vQY6pgGpN8W5bdgIoPzerd%2FU2%2BBrullPItBpLVn4zMJ%2BKwLMiC1PYyWJoNx%2BNk%2FvjLRFsnjYkyBAyWotBAaifwnGtq2NHY7Ec5rKabGkhyk0JRe2kyD7Kumg032YrYl7RrNBsNyI6RrDNDFkFm5xV9LjtCgWZGJJ2fpHGEtZj5MqFk2nzlpOHK16oC815XlEDADOeB6iFkpJqFLCyAr3Eeu19dDdgAri7UL8&X-Amz-Signature=32ceb8e154465b9843f517e4e30b96c3d5af0264bc503232a6f128845c940afb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6LDFP2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEfnvyDiT3tydD4rA9pjfY%2BhTvxPXv8%2F0kMT6LmaY6hgAiB0BB0FB2idFMuPq7IzDHWrfPdv19NFtuuUx2w4Z0wKlyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1SA9gGcGOELcv%2B0VKtwDmX7EF9CrEkCaRVf1NydOUWgKelMVVR4WgayT1Je5K4hMt3GSZ85qN%2BilOIXikV24vPdGL4oYlaxiqqB9jggEM1wQqsM5TELeeK0tloeXKTJavpRQ1nB%2BQPAC5Yk3C2uOcoSDBahgq250fGAMG%2BESKjn8Z5DIeV92NUQF6THJCh19%2FbVsT6U8FBM8I8%2BbZ7hdyOGcxY4LTT0sXcZUDtewe1WhFFv9uoymytIBrhzjk8YyGbFkv4%2FbNNIGl05PXjyKPLlsiecIg8vmt4LPQ0u%2ByorYKLZH7uXfP3VYzB840dnCoi%2Bed9Vx%2FV0m7R8CTVYy5LkI7gDiuMu2UmmXMDXczZexK9kyQKEhoPQ%2BNaVNR0xCGKLzLRJ7Doe0U0iyDf1hEV50UiEKn1uSCIhV%2FnfJURRXvzlFoLar9yuvgi744YQFhS0lDkRcj0GMXXVVdZMzZj39q8cyBugq15P7Hujh1wG5LSE1dlhvVnQTfjy5nfXBZ1WIcwHdga36Mp0lCnn8wJHRfSiRhAuUo7jitdl0DWyjoYbpUReAN13y%2BrcRufEux09%2B0IZO7rzb91jW3NrBYeuWnZ2GHThugLslDTs55J9eOkK8ZclsWF5Ze6ldtiNJXfHpENfLMrsPqwQwmI34vQY6pgGpN8W5bdgIoPzerd%2FU2%2BBrullPItBpLVn4zMJ%2BKwLMiC1PYyWJoNx%2BNk%2FvjLRFsnjYkyBAyWotBAaifwnGtq2NHY7Ec5rKabGkhyk0JRe2kyD7Kumg032YrYl7RrNBsNyI6RrDNDFkFm5xV9LjtCgWZGJJ2fpHGEtZj5MqFk2nzlpOHK16oC815XlEDADOeB6iFkpJqFLCyAr3Eeu19dDdgAri7UL8&X-Amz-Signature=d028c20fa16b3a317eaa5c48908b4d0a5ca22c9e0246f41aff8e9417b02f4e84&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6LDFP2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEfnvyDiT3tydD4rA9pjfY%2BhTvxPXv8%2F0kMT6LmaY6hgAiB0BB0FB2idFMuPq7IzDHWrfPdv19NFtuuUx2w4Z0wKlyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1SA9gGcGOELcv%2B0VKtwDmX7EF9CrEkCaRVf1NydOUWgKelMVVR4WgayT1Je5K4hMt3GSZ85qN%2BilOIXikV24vPdGL4oYlaxiqqB9jggEM1wQqsM5TELeeK0tloeXKTJavpRQ1nB%2BQPAC5Yk3C2uOcoSDBahgq250fGAMG%2BESKjn8Z5DIeV92NUQF6THJCh19%2FbVsT6U8FBM8I8%2BbZ7hdyOGcxY4LTT0sXcZUDtewe1WhFFv9uoymytIBrhzjk8YyGbFkv4%2FbNNIGl05PXjyKPLlsiecIg8vmt4LPQ0u%2ByorYKLZH7uXfP3VYzB840dnCoi%2Bed9Vx%2FV0m7R8CTVYy5LkI7gDiuMu2UmmXMDXczZexK9kyQKEhoPQ%2BNaVNR0xCGKLzLRJ7Doe0U0iyDf1hEV50UiEKn1uSCIhV%2FnfJURRXvzlFoLar9yuvgi744YQFhS0lDkRcj0GMXXVVdZMzZj39q8cyBugq15P7Hujh1wG5LSE1dlhvVnQTfjy5nfXBZ1WIcwHdga36Mp0lCnn8wJHRfSiRhAuUo7jitdl0DWyjoYbpUReAN13y%2BrcRufEux09%2B0IZO7rzb91jW3NrBYeuWnZ2GHThugLslDTs55J9eOkK8ZclsWF5Ze6ldtiNJXfHpENfLMrsPqwQwmI34vQY6pgGpN8W5bdgIoPzerd%2FU2%2BBrullPItBpLVn4zMJ%2BKwLMiC1PYyWJoNx%2BNk%2FvjLRFsnjYkyBAyWotBAaifwnGtq2NHY7Ec5rKabGkhyk0JRe2kyD7Kumg032YrYl7RrNBsNyI6RrDNDFkFm5xV9LjtCgWZGJJ2fpHGEtZj5MqFk2nzlpOHK16oC815XlEDADOeB6iFkpJqFLCyAr3Eeu19dDdgAri7UL8&X-Amz-Signature=8ac502dbc2bbfebbee18ed03b2a2a3c00756f4a46f7ffb4483a6a044a5ab63df&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6LDFP2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEfnvyDiT3tydD4rA9pjfY%2BhTvxPXv8%2F0kMT6LmaY6hgAiB0BB0FB2idFMuPq7IzDHWrfPdv19NFtuuUx2w4Z0wKlyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1SA9gGcGOELcv%2B0VKtwDmX7EF9CrEkCaRVf1NydOUWgKelMVVR4WgayT1Je5K4hMt3GSZ85qN%2BilOIXikV24vPdGL4oYlaxiqqB9jggEM1wQqsM5TELeeK0tloeXKTJavpRQ1nB%2BQPAC5Yk3C2uOcoSDBahgq250fGAMG%2BESKjn8Z5DIeV92NUQF6THJCh19%2FbVsT6U8FBM8I8%2BbZ7hdyOGcxY4LTT0sXcZUDtewe1WhFFv9uoymytIBrhzjk8YyGbFkv4%2FbNNIGl05PXjyKPLlsiecIg8vmt4LPQ0u%2ByorYKLZH7uXfP3VYzB840dnCoi%2Bed9Vx%2FV0m7R8CTVYy5LkI7gDiuMu2UmmXMDXczZexK9kyQKEhoPQ%2BNaVNR0xCGKLzLRJ7Doe0U0iyDf1hEV50UiEKn1uSCIhV%2FnfJURRXvzlFoLar9yuvgi744YQFhS0lDkRcj0GMXXVVdZMzZj39q8cyBugq15P7Hujh1wG5LSE1dlhvVnQTfjy5nfXBZ1WIcwHdga36Mp0lCnn8wJHRfSiRhAuUo7jitdl0DWyjoYbpUReAN13y%2BrcRufEux09%2B0IZO7rzb91jW3NrBYeuWnZ2GHThugLslDTs55J9eOkK8ZclsWF5Ze6ldtiNJXfHpENfLMrsPqwQwmI34vQY6pgGpN8W5bdgIoPzerd%2FU2%2BBrullPItBpLVn4zMJ%2BKwLMiC1PYyWJoNx%2BNk%2FvjLRFsnjYkyBAyWotBAaifwnGtq2NHY7Ec5rKabGkhyk0JRe2kyD7Kumg032YrYl7RrNBsNyI6RrDNDFkFm5xV9LjtCgWZGJJ2fpHGEtZj5MqFk2nzlpOHK16oC815XlEDADOeB6iFkpJqFLCyAr3Eeu19dDdgAri7UL8&X-Amz-Signature=6d01eb3a76abafff099a78c89496d66a5113b7041a5b2ac76a07b5d1946f2f15&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6LDFP2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEfnvyDiT3tydD4rA9pjfY%2BhTvxPXv8%2F0kMT6LmaY6hgAiB0BB0FB2idFMuPq7IzDHWrfPdv19NFtuuUx2w4Z0wKlyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1SA9gGcGOELcv%2B0VKtwDmX7EF9CrEkCaRVf1NydOUWgKelMVVR4WgayT1Je5K4hMt3GSZ85qN%2BilOIXikV24vPdGL4oYlaxiqqB9jggEM1wQqsM5TELeeK0tloeXKTJavpRQ1nB%2BQPAC5Yk3C2uOcoSDBahgq250fGAMG%2BESKjn8Z5DIeV92NUQF6THJCh19%2FbVsT6U8FBM8I8%2BbZ7hdyOGcxY4LTT0sXcZUDtewe1WhFFv9uoymytIBrhzjk8YyGbFkv4%2FbNNIGl05PXjyKPLlsiecIg8vmt4LPQ0u%2ByorYKLZH7uXfP3VYzB840dnCoi%2Bed9Vx%2FV0m7R8CTVYy5LkI7gDiuMu2UmmXMDXczZexK9kyQKEhoPQ%2BNaVNR0xCGKLzLRJ7Doe0U0iyDf1hEV50UiEKn1uSCIhV%2FnfJURRXvzlFoLar9yuvgi744YQFhS0lDkRcj0GMXXVVdZMzZj39q8cyBugq15P7Hujh1wG5LSE1dlhvVnQTfjy5nfXBZ1WIcwHdga36Mp0lCnn8wJHRfSiRhAuUo7jitdl0DWyjoYbpUReAN13y%2BrcRufEux09%2B0IZO7rzb91jW3NrBYeuWnZ2GHThugLslDTs55J9eOkK8ZclsWF5Ze6ldtiNJXfHpENfLMrsPqwQwmI34vQY6pgGpN8W5bdgIoPzerd%2FU2%2BBrullPItBpLVn4zMJ%2BKwLMiC1PYyWJoNx%2BNk%2FvjLRFsnjYkyBAyWotBAaifwnGtq2NHY7Ec5rKabGkhyk0JRe2kyD7Kumg032YrYl7RrNBsNyI6RrDNDFkFm5xV9LjtCgWZGJJ2fpHGEtZj5MqFk2nzlpOHK16oC815XlEDADOeB6iFkpJqFLCyAr3Eeu19dDdgAri7UL8&X-Amz-Signature=1dd251504a16e9268c0c80ebdd26532bf5c4521ccca1475ff7d0c172aa58688c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6LDFP2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEfnvyDiT3tydD4rA9pjfY%2BhTvxPXv8%2F0kMT6LmaY6hgAiB0BB0FB2idFMuPq7IzDHWrfPdv19NFtuuUx2w4Z0wKlyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1SA9gGcGOELcv%2B0VKtwDmX7EF9CrEkCaRVf1NydOUWgKelMVVR4WgayT1Je5K4hMt3GSZ85qN%2BilOIXikV24vPdGL4oYlaxiqqB9jggEM1wQqsM5TELeeK0tloeXKTJavpRQ1nB%2BQPAC5Yk3C2uOcoSDBahgq250fGAMG%2BESKjn8Z5DIeV92NUQF6THJCh19%2FbVsT6U8FBM8I8%2BbZ7hdyOGcxY4LTT0sXcZUDtewe1WhFFv9uoymytIBrhzjk8YyGbFkv4%2FbNNIGl05PXjyKPLlsiecIg8vmt4LPQ0u%2ByorYKLZH7uXfP3VYzB840dnCoi%2Bed9Vx%2FV0m7R8CTVYy5LkI7gDiuMu2UmmXMDXczZexK9kyQKEhoPQ%2BNaVNR0xCGKLzLRJ7Doe0U0iyDf1hEV50UiEKn1uSCIhV%2FnfJURRXvzlFoLar9yuvgi744YQFhS0lDkRcj0GMXXVVdZMzZj39q8cyBugq15P7Hujh1wG5LSE1dlhvVnQTfjy5nfXBZ1WIcwHdga36Mp0lCnn8wJHRfSiRhAuUo7jitdl0DWyjoYbpUReAN13y%2BrcRufEux09%2B0IZO7rzb91jW3NrBYeuWnZ2GHThugLslDTs55J9eOkK8ZclsWF5Ze6ldtiNJXfHpENfLMrsPqwQwmI34vQY6pgGpN8W5bdgIoPzerd%2FU2%2BBrullPItBpLVn4zMJ%2BKwLMiC1PYyWJoNx%2BNk%2FvjLRFsnjYkyBAyWotBAaifwnGtq2NHY7Ec5rKabGkhyk0JRe2kyD7Kumg032YrYl7RrNBsNyI6RrDNDFkFm5xV9LjtCgWZGJJ2fpHGEtZj5MqFk2nzlpOHK16oC815XlEDADOeB6iFkpJqFLCyAr3Eeu19dDdgAri7UL8&X-Amz-Signature=dd29a6a659a5d18df28725ce35751ded1e94c2941fe5023474ee08fa55d5939e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6LDFP2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEfnvyDiT3tydD4rA9pjfY%2BhTvxPXv8%2F0kMT6LmaY6hgAiB0BB0FB2idFMuPq7IzDHWrfPdv19NFtuuUx2w4Z0wKlyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1SA9gGcGOELcv%2B0VKtwDmX7EF9CrEkCaRVf1NydOUWgKelMVVR4WgayT1Je5K4hMt3GSZ85qN%2BilOIXikV24vPdGL4oYlaxiqqB9jggEM1wQqsM5TELeeK0tloeXKTJavpRQ1nB%2BQPAC5Yk3C2uOcoSDBahgq250fGAMG%2BESKjn8Z5DIeV92NUQF6THJCh19%2FbVsT6U8FBM8I8%2BbZ7hdyOGcxY4LTT0sXcZUDtewe1WhFFv9uoymytIBrhzjk8YyGbFkv4%2FbNNIGl05PXjyKPLlsiecIg8vmt4LPQ0u%2ByorYKLZH7uXfP3VYzB840dnCoi%2Bed9Vx%2FV0m7R8CTVYy5LkI7gDiuMu2UmmXMDXczZexK9kyQKEhoPQ%2BNaVNR0xCGKLzLRJ7Doe0U0iyDf1hEV50UiEKn1uSCIhV%2FnfJURRXvzlFoLar9yuvgi744YQFhS0lDkRcj0GMXXVVdZMzZj39q8cyBugq15P7Hujh1wG5LSE1dlhvVnQTfjy5nfXBZ1WIcwHdga36Mp0lCnn8wJHRfSiRhAuUo7jitdl0DWyjoYbpUReAN13y%2BrcRufEux09%2B0IZO7rzb91jW3NrBYeuWnZ2GHThugLslDTs55J9eOkK8ZclsWF5Ze6ldtiNJXfHpENfLMrsPqwQwmI34vQY6pgGpN8W5bdgIoPzerd%2FU2%2BBrullPItBpLVn4zMJ%2BKwLMiC1PYyWJoNx%2BNk%2FvjLRFsnjYkyBAyWotBAaifwnGtq2NHY7Ec5rKabGkhyk0JRe2kyD7Kumg032YrYl7RrNBsNyI6RrDNDFkFm5xV9LjtCgWZGJJ2fpHGEtZj5MqFk2nzlpOHK16oC815XlEDADOeB6iFkpJqFLCyAr3Eeu19dDdgAri7UL8&X-Amz-Signature=e7093cbdef70900311748579f39fd0eab02f66a094058a31b2804d75dbcbeaf0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
