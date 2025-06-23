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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTQJJPW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDjiTV%2FEOZfqF%2BPSKwa2rbq5CFJuwWfHrzqyK1Yymej0wIhALxiCuonT9TmBTd88gj%2FhNNwjhHX%2F%2B%2FIVLhpd2iJamrjKv8DCBUQABoMNjM3NDIzMTgzODA1IgxNlzroB2vGp3J53CIq3AMPOXWPIWrKv0E7Rym8jrb5HeIVcRRBOje6c%2FfKxS61GUXFQxiqicYXBQZDnNkc%2BXZ%2FWltry2NuyrjGypED%2FXBgoqVIB5OCyLNDtu9qAjdolR7Ai%2FFgaE%2FhH55VGd1SCIxrbS4yAIkeEI%2BALDlGW8gtzFFb78eJx1Wztslsdzc9%2FWs2L0oMcgwRvOILNDv3ieDayqQOfhawIVFdDEJSRtS%2Brfrny6CZYHINA6bXF%2Ff6iAD5ZNspC6E5ud7Hp0xO2%2FUpb5gd3zWb7GhmbNBUSe95x90DK%2BLdh1l%2BjaoSBf4rR1kYTwBTLgvd9qVCEt8X7rv4w%2BuWRKHVO6e7xP3QbsN2%2Fd3NXOJ20UdEa7ZXl6wIZKXrAE3XWzWKf%2B%2FCpT4i6OdMbanUtq1aEeOhIktv1DWM031Gfb%2Fa0l6pCkNRidpOyxdC1wH0zk5aC7xdPbGdU130qa3%2BZi6uNpDmDbX2qfH5UCOr8tjh9gxYjCLrMWXSXKypsADSwP4Py6ttIIXt2AE54KKpWPEEc4rYLS3nMNDtgaF3IyI1moucM6B1yrmHFdjnq3U18cfFBqxWSSlQ2KEI4UJPoIBJZJnURwRm5DkhUe%2F65gsbGXnNBwmRZEd6wvzZ%2Bz0ZPqAZ4IFjjTDi8%2BTCBjqkARgmdSBRbOqc%2FC5USDDqbhucaSSQMlwwlnBQAzKeBKV5sxmt8CF2x8mX5KUgTNnfKQBNNmngpg7bMmdN1RJY5rasYbW7loUWdPOZf%2B%2FdJbNDRQ6OmhLBok99OxX0fbmxFwc6HxQquPNOfZZwb7RtNzURQ3ejA8dCWstcw9vuUi2XdDfGQ9cU%2BuNJpaWiawWk%2FsPKwdrksLaaAaghkYIRI5KLo5GY&X-Amz-Signature=91650a8954332f344950a7f2e3aad1be60a5fee62398404bf6d5365508c366b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTQJJPW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDjiTV%2FEOZfqF%2BPSKwa2rbq5CFJuwWfHrzqyK1Yymej0wIhALxiCuonT9TmBTd88gj%2FhNNwjhHX%2F%2B%2FIVLhpd2iJamrjKv8DCBUQABoMNjM3NDIzMTgzODA1IgxNlzroB2vGp3J53CIq3AMPOXWPIWrKv0E7Rym8jrb5HeIVcRRBOje6c%2FfKxS61GUXFQxiqicYXBQZDnNkc%2BXZ%2FWltry2NuyrjGypED%2FXBgoqVIB5OCyLNDtu9qAjdolR7Ai%2FFgaE%2FhH55VGd1SCIxrbS4yAIkeEI%2BALDlGW8gtzFFb78eJx1Wztslsdzc9%2FWs2L0oMcgwRvOILNDv3ieDayqQOfhawIVFdDEJSRtS%2Brfrny6CZYHINA6bXF%2Ff6iAD5ZNspC6E5ud7Hp0xO2%2FUpb5gd3zWb7GhmbNBUSe95x90DK%2BLdh1l%2BjaoSBf4rR1kYTwBTLgvd9qVCEt8X7rv4w%2BuWRKHVO6e7xP3QbsN2%2Fd3NXOJ20UdEa7ZXl6wIZKXrAE3XWzWKf%2B%2FCpT4i6OdMbanUtq1aEeOhIktv1DWM031Gfb%2Fa0l6pCkNRidpOyxdC1wH0zk5aC7xdPbGdU130qa3%2BZi6uNpDmDbX2qfH5UCOr8tjh9gxYjCLrMWXSXKypsADSwP4Py6ttIIXt2AE54KKpWPEEc4rYLS3nMNDtgaF3IyI1moucM6B1yrmHFdjnq3U18cfFBqxWSSlQ2KEI4UJPoIBJZJnURwRm5DkhUe%2F65gsbGXnNBwmRZEd6wvzZ%2Bz0ZPqAZ4IFjjTDi8%2BTCBjqkARgmdSBRbOqc%2FC5USDDqbhucaSSQMlwwlnBQAzKeBKV5sxmt8CF2x8mX5KUgTNnfKQBNNmngpg7bMmdN1RJY5rasYbW7loUWdPOZf%2B%2FdJbNDRQ6OmhLBok99OxX0fbmxFwc6HxQquPNOfZZwb7RtNzURQ3ejA8dCWstcw9vuUi2XdDfGQ9cU%2BuNJpaWiawWk%2FsPKwdrksLaaAaghkYIRI5KLo5GY&X-Amz-Signature=1f05b2053e2a634f623ae04f660ff9f4d6e73c2785112f25ad9f11e830359483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTQJJPW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDjiTV%2FEOZfqF%2BPSKwa2rbq5CFJuwWfHrzqyK1Yymej0wIhALxiCuonT9TmBTd88gj%2FhNNwjhHX%2F%2B%2FIVLhpd2iJamrjKv8DCBUQABoMNjM3NDIzMTgzODA1IgxNlzroB2vGp3J53CIq3AMPOXWPIWrKv0E7Rym8jrb5HeIVcRRBOje6c%2FfKxS61GUXFQxiqicYXBQZDnNkc%2BXZ%2FWltry2NuyrjGypED%2FXBgoqVIB5OCyLNDtu9qAjdolR7Ai%2FFgaE%2FhH55VGd1SCIxrbS4yAIkeEI%2BALDlGW8gtzFFb78eJx1Wztslsdzc9%2FWs2L0oMcgwRvOILNDv3ieDayqQOfhawIVFdDEJSRtS%2Brfrny6CZYHINA6bXF%2Ff6iAD5ZNspC6E5ud7Hp0xO2%2FUpb5gd3zWb7GhmbNBUSe95x90DK%2BLdh1l%2BjaoSBf4rR1kYTwBTLgvd9qVCEt8X7rv4w%2BuWRKHVO6e7xP3QbsN2%2Fd3NXOJ20UdEa7ZXl6wIZKXrAE3XWzWKf%2B%2FCpT4i6OdMbanUtq1aEeOhIktv1DWM031Gfb%2Fa0l6pCkNRidpOyxdC1wH0zk5aC7xdPbGdU130qa3%2BZi6uNpDmDbX2qfH5UCOr8tjh9gxYjCLrMWXSXKypsADSwP4Py6ttIIXt2AE54KKpWPEEc4rYLS3nMNDtgaF3IyI1moucM6B1yrmHFdjnq3U18cfFBqxWSSlQ2KEI4UJPoIBJZJnURwRm5DkhUe%2F65gsbGXnNBwmRZEd6wvzZ%2Bz0ZPqAZ4IFjjTDi8%2BTCBjqkARgmdSBRbOqc%2FC5USDDqbhucaSSQMlwwlnBQAzKeBKV5sxmt8CF2x8mX5KUgTNnfKQBNNmngpg7bMmdN1RJY5rasYbW7loUWdPOZf%2B%2FdJbNDRQ6OmhLBok99OxX0fbmxFwc6HxQquPNOfZZwb7RtNzURQ3ejA8dCWstcw9vuUi2XdDfGQ9cU%2BuNJpaWiawWk%2FsPKwdrksLaaAaghkYIRI5KLo5GY&X-Amz-Signature=66db0ad4b2fd408264004547e0df9c15e22861ec877835f835eee8814c4fbeff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTQJJPW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDjiTV%2FEOZfqF%2BPSKwa2rbq5CFJuwWfHrzqyK1Yymej0wIhALxiCuonT9TmBTd88gj%2FhNNwjhHX%2F%2B%2FIVLhpd2iJamrjKv8DCBUQABoMNjM3NDIzMTgzODA1IgxNlzroB2vGp3J53CIq3AMPOXWPIWrKv0E7Rym8jrb5HeIVcRRBOje6c%2FfKxS61GUXFQxiqicYXBQZDnNkc%2BXZ%2FWltry2NuyrjGypED%2FXBgoqVIB5OCyLNDtu9qAjdolR7Ai%2FFgaE%2FhH55VGd1SCIxrbS4yAIkeEI%2BALDlGW8gtzFFb78eJx1Wztslsdzc9%2FWs2L0oMcgwRvOILNDv3ieDayqQOfhawIVFdDEJSRtS%2Brfrny6CZYHINA6bXF%2Ff6iAD5ZNspC6E5ud7Hp0xO2%2FUpb5gd3zWb7GhmbNBUSe95x90DK%2BLdh1l%2BjaoSBf4rR1kYTwBTLgvd9qVCEt8X7rv4w%2BuWRKHVO6e7xP3QbsN2%2Fd3NXOJ20UdEa7ZXl6wIZKXrAE3XWzWKf%2B%2FCpT4i6OdMbanUtq1aEeOhIktv1DWM031Gfb%2Fa0l6pCkNRidpOyxdC1wH0zk5aC7xdPbGdU130qa3%2BZi6uNpDmDbX2qfH5UCOr8tjh9gxYjCLrMWXSXKypsADSwP4Py6ttIIXt2AE54KKpWPEEc4rYLS3nMNDtgaF3IyI1moucM6B1yrmHFdjnq3U18cfFBqxWSSlQ2KEI4UJPoIBJZJnURwRm5DkhUe%2F65gsbGXnNBwmRZEd6wvzZ%2Bz0ZPqAZ4IFjjTDi8%2BTCBjqkARgmdSBRbOqc%2FC5USDDqbhucaSSQMlwwlnBQAzKeBKV5sxmt8CF2x8mX5KUgTNnfKQBNNmngpg7bMmdN1RJY5rasYbW7loUWdPOZf%2B%2FdJbNDRQ6OmhLBok99OxX0fbmxFwc6HxQquPNOfZZwb7RtNzURQ3ejA8dCWstcw9vuUi2XdDfGQ9cU%2BuNJpaWiawWk%2FsPKwdrksLaaAaghkYIRI5KLo5GY&X-Amz-Signature=5117a89926032613045505342ee29ad80c7f2a8a862b2951b30a416fcc08ae78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTQJJPW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDjiTV%2FEOZfqF%2BPSKwa2rbq5CFJuwWfHrzqyK1Yymej0wIhALxiCuonT9TmBTd88gj%2FhNNwjhHX%2F%2B%2FIVLhpd2iJamrjKv8DCBUQABoMNjM3NDIzMTgzODA1IgxNlzroB2vGp3J53CIq3AMPOXWPIWrKv0E7Rym8jrb5HeIVcRRBOje6c%2FfKxS61GUXFQxiqicYXBQZDnNkc%2BXZ%2FWltry2NuyrjGypED%2FXBgoqVIB5OCyLNDtu9qAjdolR7Ai%2FFgaE%2FhH55VGd1SCIxrbS4yAIkeEI%2BALDlGW8gtzFFb78eJx1Wztslsdzc9%2FWs2L0oMcgwRvOILNDv3ieDayqQOfhawIVFdDEJSRtS%2Brfrny6CZYHINA6bXF%2Ff6iAD5ZNspC6E5ud7Hp0xO2%2FUpb5gd3zWb7GhmbNBUSe95x90DK%2BLdh1l%2BjaoSBf4rR1kYTwBTLgvd9qVCEt8X7rv4w%2BuWRKHVO6e7xP3QbsN2%2Fd3NXOJ20UdEa7ZXl6wIZKXrAE3XWzWKf%2B%2FCpT4i6OdMbanUtq1aEeOhIktv1DWM031Gfb%2Fa0l6pCkNRidpOyxdC1wH0zk5aC7xdPbGdU130qa3%2BZi6uNpDmDbX2qfH5UCOr8tjh9gxYjCLrMWXSXKypsADSwP4Py6ttIIXt2AE54KKpWPEEc4rYLS3nMNDtgaF3IyI1moucM6B1yrmHFdjnq3U18cfFBqxWSSlQ2KEI4UJPoIBJZJnURwRm5DkhUe%2F65gsbGXnNBwmRZEd6wvzZ%2Bz0ZPqAZ4IFjjTDi8%2BTCBjqkARgmdSBRbOqc%2FC5USDDqbhucaSSQMlwwlnBQAzKeBKV5sxmt8CF2x8mX5KUgTNnfKQBNNmngpg7bMmdN1RJY5rasYbW7loUWdPOZf%2B%2FdJbNDRQ6OmhLBok99OxX0fbmxFwc6HxQquPNOfZZwb7RtNzURQ3ejA8dCWstcw9vuUi2XdDfGQ9cU%2BuNJpaWiawWk%2FsPKwdrksLaaAaghkYIRI5KLo5GY&X-Amz-Signature=00a0c84f436a265ec1850564d7e3bf69631fdb31af81d8a1fc346b045cca9284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTQJJPW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDjiTV%2FEOZfqF%2BPSKwa2rbq5CFJuwWfHrzqyK1Yymej0wIhALxiCuonT9TmBTd88gj%2FhNNwjhHX%2F%2B%2FIVLhpd2iJamrjKv8DCBUQABoMNjM3NDIzMTgzODA1IgxNlzroB2vGp3J53CIq3AMPOXWPIWrKv0E7Rym8jrb5HeIVcRRBOje6c%2FfKxS61GUXFQxiqicYXBQZDnNkc%2BXZ%2FWltry2NuyrjGypED%2FXBgoqVIB5OCyLNDtu9qAjdolR7Ai%2FFgaE%2FhH55VGd1SCIxrbS4yAIkeEI%2BALDlGW8gtzFFb78eJx1Wztslsdzc9%2FWs2L0oMcgwRvOILNDv3ieDayqQOfhawIVFdDEJSRtS%2Brfrny6CZYHINA6bXF%2Ff6iAD5ZNspC6E5ud7Hp0xO2%2FUpb5gd3zWb7GhmbNBUSe95x90DK%2BLdh1l%2BjaoSBf4rR1kYTwBTLgvd9qVCEt8X7rv4w%2BuWRKHVO6e7xP3QbsN2%2Fd3NXOJ20UdEa7ZXl6wIZKXrAE3XWzWKf%2B%2FCpT4i6OdMbanUtq1aEeOhIktv1DWM031Gfb%2Fa0l6pCkNRidpOyxdC1wH0zk5aC7xdPbGdU130qa3%2BZi6uNpDmDbX2qfH5UCOr8tjh9gxYjCLrMWXSXKypsADSwP4Py6ttIIXt2AE54KKpWPEEc4rYLS3nMNDtgaF3IyI1moucM6B1yrmHFdjnq3U18cfFBqxWSSlQ2KEI4UJPoIBJZJnURwRm5DkhUe%2F65gsbGXnNBwmRZEd6wvzZ%2Bz0ZPqAZ4IFjjTDi8%2BTCBjqkARgmdSBRbOqc%2FC5USDDqbhucaSSQMlwwlnBQAzKeBKV5sxmt8CF2x8mX5KUgTNnfKQBNNmngpg7bMmdN1RJY5rasYbW7loUWdPOZf%2B%2FdJbNDRQ6OmhLBok99OxX0fbmxFwc6HxQquPNOfZZwb7RtNzURQ3ejA8dCWstcw9vuUi2XdDfGQ9cU%2BuNJpaWiawWk%2FsPKwdrksLaaAaghkYIRI5KLo5GY&X-Amz-Signature=a581b952789c04422880332972d5e1f905bdc9942e342e1f37b2c23a422fcb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTQJJPW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDjiTV%2FEOZfqF%2BPSKwa2rbq5CFJuwWfHrzqyK1Yymej0wIhALxiCuonT9TmBTd88gj%2FhNNwjhHX%2F%2B%2FIVLhpd2iJamrjKv8DCBUQABoMNjM3NDIzMTgzODA1IgxNlzroB2vGp3J53CIq3AMPOXWPIWrKv0E7Rym8jrb5HeIVcRRBOje6c%2FfKxS61GUXFQxiqicYXBQZDnNkc%2BXZ%2FWltry2NuyrjGypED%2FXBgoqVIB5OCyLNDtu9qAjdolR7Ai%2FFgaE%2FhH55VGd1SCIxrbS4yAIkeEI%2BALDlGW8gtzFFb78eJx1Wztslsdzc9%2FWs2L0oMcgwRvOILNDv3ieDayqQOfhawIVFdDEJSRtS%2Brfrny6CZYHINA6bXF%2Ff6iAD5ZNspC6E5ud7Hp0xO2%2FUpb5gd3zWb7GhmbNBUSe95x90DK%2BLdh1l%2BjaoSBf4rR1kYTwBTLgvd9qVCEt8X7rv4w%2BuWRKHVO6e7xP3QbsN2%2Fd3NXOJ20UdEa7ZXl6wIZKXrAE3XWzWKf%2B%2FCpT4i6OdMbanUtq1aEeOhIktv1DWM031Gfb%2Fa0l6pCkNRidpOyxdC1wH0zk5aC7xdPbGdU130qa3%2BZi6uNpDmDbX2qfH5UCOr8tjh9gxYjCLrMWXSXKypsADSwP4Py6ttIIXt2AE54KKpWPEEc4rYLS3nMNDtgaF3IyI1moucM6B1yrmHFdjnq3U18cfFBqxWSSlQ2KEI4UJPoIBJZJnURwRm5DkhUe%2F65gsbGXnNBwmRZEd6wvzZ%2Bz0ZPqAZ4IFjjTDi8%2BTCBjqkARgmdSBRbOqc%2FC5USDDqbhucaSSQMlwwlnBQAzKeBKV5sxmt8CF2x8mX5KUgTNnfKQBNNmngpg7bMmdN1RJY5rasYbW7loUWdPOZf%2B%2FdJbNDRQ6OmhLBok99OxX0fbmxFwc6HxQquPNOfZZwb7RtNzURQ3ejA8dCWstcw9vuUi2XdDfGQ9cU%2BuNJpaWiawWk%2FsPKwdrksLaaAaghkYIRI5KLo5GY&X-Amz-Signature=60990ee2fabaa7a45303504062ae0dadfe5d3637119f97a8c5e40b34b00a9e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
