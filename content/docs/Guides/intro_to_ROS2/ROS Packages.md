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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGTJXC2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bOjKPzNp57vw2%2BoOTcw2DRxdJ12r80wpkNwuy67w6wIhAPqaSnbDT%2BMyeT0JmteyrhdVsGh%2FCOJWtuiwAfm3Bo7SKv8DCBMQABoMNjM3NDIzMTgzODA1IgzTsESTzdFflI6hQZEq3AOB%2FS2hWRGoRat5gxc4IYYDGuL66NplD%2B%2FcbV2ADeFkkyUgUZuC1qV%2BhBZXO2ZnSSzZidCwai3iv4gdaq40yvKWOMGKCwWUIAu3Vi%2Fshc%2FvThLNo1y4Bytax3I%2BfxdRlB7A3%2BrcUoi1KjVjbs0Gx5VV9rki5%2Fb6uppiMCDZDAQNv4nl7aDGs8kt0VIl9abB%2BekuxAweOnVhc9FIbuM4Vb10yL8fuahcdQ0s3yaTrlRgWIvkjbwiLG1p2ai%2BOxTncpqOxjhoAIwcK4cmdVpWBZoMvq5Y31BVEB78r5ibd5UJZ2bp3Aec%2Bu4dA%2FyHmGXVye%2ByQxM3JkTiBbeade3yYQhJNzm7wBzRo09qzKNStdItOU2Bd5GGpaLOGLqpklKrN9DH3f%2BzrGzj0YWAN5pHtmptRujvwRD%2Fb%2F%2BmeLFFBCNY6MAkKAp1Z%2BXGuPr5arnafgsMPfAiF5qcJzAGUABMuW1%2BfkZHrRicDAXRHA0EeUcKNsWbp3I1sf%2FDiqi3QvQ9Lg%2Fy9ag976VTR7ikdiyk%2Fvu%2FjeKd9hJIQXAOEg1Q0qrBFE4ZdM68cZ8gWYqqhBzIU%2B4QdHPBdxYdiUOA7lcj18FMo8aFTuShiVBaqaBPzk2INi2RX%2F4XO7OXQZTEhzC2hre9BjqkAR62JtOExJddxTHGH1MZDNEFpqzham1XwBVGHch3V37OGwUjhEKjt0vXcPoXS2DSwZ%2BOZ3hQfZszMjQVshqwF0c9EXkuLVrNj69jiflexusvW2fqTFgDUpE3Odd6U4s%2Bf3nJtVKTgOJ%2FlwWGuRAMzzmgz8WAH%2BEeWRdC2FpRVvInbFt97bnOz3vhRLqyA2dgt0fM7NOfhhyGkYBXzVohHpN%2FaZPR&X-Amz-Signature=7fa0fbda5ae50ef145519d559387e85f558e53b182a02ea4e0215f9758726a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGTJXC2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bOjKPzNp57vw2%2BoOTcw2DRxdJ12r80wpkNwuy67w6wIhAPqaSnbDT%2BMyeT0JmteyrhdVsGh%2FCOJWtuiwAfm3Bo7SKv8DCBMQABoMNjM3NDIzMTgzODA1IgzTsESTzdFflI6hQZEq3AOB%2FS2hWRGoRat5gxc4IYYDGuL66NplD%2B%2FcbV2ADeFkkyUgUZuC1qV%2BhBZXO2ZnSSzZidCwai3iv4gdaq40yvKWOMGKCwWUIAu3Vi%2Fshc%2FvThLNo1y4Bytax3I%2BfxdRlB7A3%2BrcUoi1KjVjbs0Gx5VV9rki5%2Fb6uppiMCDZDAQNv4nl7aDGs8kt0VIl9abB%2BekuxAweOnVhc9FIbuM4Vb10yL8fuahcdQ0s3yaTrlRgWIvkjbwiLG1p2ai%2BOxTncpqOxjhoAIwcK4cmdVpWBZoMvq5Y31BVEB78r5ibd5UJZ2bp3Aec%2Bu4dA%2FyHmGXVye%2ByQxM3JkTiBbeade3yYQhJNzm7wBzRo09qzKNStdItOU2Bd5GGpaLOGLqpklKrN9DH3f%2BzrGzj0YWAN5pHtmptRujvwRD%2Fb%2F%2BmeLFFBCNY6MAkKAp1Z%2BXGuPr5arnafgsMPfAiF5qcJzAGUABMuW1%2BfkZHrRicDAXRHA0EeUcKNsWbp3I1sf%2FDiqi3QvQ9Lg%2Fy9ag976VTR7ikdiyk%2Fvu%2FjeKd9hJIQXAOEg1Q0qrBFE4ZdM68cZ8gWYqqhBzIU%2B4QdHPBdxYdiUOA7lcj18FMo8aFTuShiVBaqaBPzk2INi2RX%2F4XO7OXQZTEhzC2hre9BjqkAR62JtOExJddxTHGH1MZDNEFpqzham1XwBVGHch3V37OGwUjhEKjt0vXcPoXS2DSwZ%2BOZ3hQfZszMjQVshqwF0c9EXkuLVrNj69jiflexusvW2fqTFgDUpE3Odd6U4s%2Bf3nJtVKTgOJ%2FlwWGuRAMzzmgz8WAH%2BEeWRdC2FpRVvInbFt97bnOz3vhRLqyA2dgt0fM7NOfhhyGkYBXzVohHpN%2FaZPR&X-Amz-Signature=d5cbd023e6ae524e4a6784cabff3b73baba87c44873734628ac273fd9d1b1de7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGTJXC2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bOjKPzNp57vw2%2BoOTcw2DRxdJ12r80wpkNwuy67w6wIhAPqaSnbDT%2BMyeT0JmteyrhdVsGh%2FCOJWtuiwAfm3Bo7SKv8DCBMQABoMNjM3NDIzMTgzODA1IgzTsESTzdFflI6hQZEq3AOB%2FS2hWRGoRat5gxc4IYYDGuL66NplD%2B%2FcbV2ADeFkkyUgUZuC1qV%2BhBZXO2ZnSSzZidCwai3iv4gdaq40yvKWOMGKCwWUIAu3Vi%2Fshc%2FvThLNo1y4Bytax3I%2BfxdRlB7A3%2BrcUoi1KjVjbs0Gx5VV9rki5%2Fb6uppiMCDZDAQNv4nl7aDGs8kt0VIl9abB%2BekuxAweOnVhc9FIbuM4Vb10yL8fuahcdQ0s3yaTrlRgWIvkjbwiLG1p2ai%2BOxTncpqOxjhoAIwcK4cmdVpWBZoMvq5Y31BVEB78r5ibd5UJZ2bp3Aec%2Bu4dA%2FyHmGXVye%2ByQxM3JkTiBbeade3yYQhJNzm7wBzRo09qzKNStdItOU2Bd5GGpaLOGLqpklKrN9DH3f%2BzrGzj0YWAN5pHtmptRujvwRD%2Fb%2F%2BmeLFFBCNY6MAkKAp1Z%2BXGuPr5arnafgsMPfAiF5qcJzAGUABMuW1%2BfkZHrRicDAXRHA0EeUcKNsWbp3I1sf%2FDiqi3QvQ9Lg%2Fy9ag976VTR7ikdiyk%2Fvu%2FjeKd9hJIQXAOEg1Q0qrBFE4ZdM68cZ8gWYqqhBzIU%2B4QdHPBdxYdiUOA7lcj18FMo8aFTuShiVBaqaBPzk2INi2RX%2F4XO7OXQZTEhzC2hre9BjqkAR62JtOExJddxTHGH1MZDNEFpqzham1XwBVGHch3V37OGwUjhEKjt0vXcPoXS2DSwZ%2BOZ3hQfZszMjQVshqwF0c9EXkuLVrNj69jiflexusvW2fqTFgDUpE3Odd6U4s%2Bf3nJtVKTgOJ%2FlwWGuRAMzzmgz8WAH%2BEeWRdC2FpRVvInbFt97bnOz3vhRLqyA2dgt0fM7NOfhhyGkYBXzVohHpN%2FaZPR&X-Amz-Signature=01ca00342b32114f74965f4eb3cac09ce198248c24273589b16898bc1d4a5ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGTJXC2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bOjKPzNp57vw2%2BoOTcw2DRxdJ12r80wpkNwuy67w6wIhAPqaSnbDT%2BMyeT0JmteyrhdVsGh%2FCOJWtuiwAfm3Bo7SKv8DCBMQABoMNjM3NDIzMTgzODA1IgzTsESTzdFflI6hQZEq3AOB%2FS2hWRGoRat5gxc4IYYDGuL66NplD%2B%2FcbV2ADeFkkyUgUZuC1qV%2BhBZXO2ZnSSzZidCwai3iv4gdaq40yvKWOMGKCwWUIAu3Vi%2Fshc%2FvThLNo1y4Bytax3I%2BfxdRlB7A3%2BrcUoi1KjVjbs0Gx5VV9rki5%2Fb6uppiMCDZDAQNv4nl7aDGs8kt0VIl9abB%2BekuxAweOnVhc9FIbuM4Vb10yL8fuahcdQ0s3yaTrlRgWIvkjbwiLG1p2ai%2BOxTncpqOxjhoAIwcK4cmdVpWBZoMvq5Y31BVEB78r5ibd5UJZ2bp3Aec%2Bu4dA%2FyHmGXVye%2ByQxM3JkTiBbeade3yYQhJNzm7wBzRo09qzKNStdItOU2Bd5GGpaLOGLqpklKrN9DH3f%2BzrGzj0YWAN5pHtmptRujvwRD%2Fb%2F%2BmeLFFBCNY6MAkKAp1Z%2BXGuPr5arnafgsMPfAiF5qcJzAGUABMuW1%2BfkZHrRicDAXRHA0EeUcKNsWbp3I1sf%2FDiqi3QvQ9Lg%2Fy9ag976VTR7ikdiyk%2Fvu%2FjeKd9hJIQXAOEg1Q0qrBFE4ZdM68cZ8gWYqqhBzIU%2B4QdHPBdxYdiUOA7lcj18FMo8aFTuShiVBaqaBPzk2INi2RX%2F4XO7OXQZTEhzC2hre9BjqkAR62JtOExJddxTHGH1MZDNEFpqzham1XwBVGHch3V37OGwUjhEKjt0vXcPoXS2DSwZ%2BOZ3hQfZszMjQVshqwF0c9EXkuLVrNj69jiflexusvW2fqTFgDUpE3Odd6U4s%2Bf3nJtVKTgOJ%2FlwWGuRAMzzmgz8WAH%2BEeWRdC2FpRVvInbFt97bnOz3vhRLqyA2dgt0fM7NOfhhyGkYBXzVohHpN%2FaZPR&X-Amz-Signature=fc7ea82f035a0157b8128b03b89deb2447bd2db36d6d48114980118a3560a14d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGTJXC2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bOjKPzNp57vw2%2BoOTcw2DRxdJ12r80wpkNwuy67w6wIhAPqaSnbDT%2BMyeT0JmteyrhdVsGh%2FCOJWtuiwAfm3Bo7SKv8DCBMQABoMNjM3NDIzMTgzODA1IgzTsESTzdFflI6hQZEq3AOB%2FS2hWRGoRat5gxc4IYYDGuL66NplD%2B%2FcbV2ADeFkkyUgUZuC1qV%2BhBZXO2ZnSSzZidCwai3iv4gdaq40yvKWOMGKCwWUIAu3Vi%2Fshc%2FvThLNo1y4Bytax3I%2BfxdRlB7A3%2BrcUoi1KjVjbs0Gx5VV9rki5%2Fb6uppiMCDZDAQNv4nl7aDGs8kt0VIl9abB%2BekuxAweOnVhc9FIbuM4Vb10yL8fuahcdQ0s3yaTrlRgWIvkjbwiLG1p2ai%2BOxTncpqOxjhoAIwcK4cmdVpWBZoMvq5Y31BVEB78r5ibd5UJZ2bp3Aec%2Bu4dA%2FyHmGXVye%2ByQxM3JkTiBbeade3yYQhJNzm7wBzRo09qzKNStdItOU2Bd5GGpaLOGLqpklKrN9DH3f%2BzrGzj0YWAN5pHtmptRujvwRD%2Fb%2F%2BmeLFFBCNY6MAkKAp1Z%2BXGuPr5arnafgsMPfAiF5qcJzAGUABMuW1%2BfkZHrRicDAXRHA0EeUcKNsWbp3I1sf%2FDiqi3QvQ9Lg%2Fy9ag976VTR7ikdiyk%2Fvu%2FjeKd9hJIQXAOEg1Q0qrBFE4ZdM68cZ8gWYqqhBzIU%2B4QdHPBdxYdiUOA7lcj18FMo8aFTuShiVBaqaBPzk2INi2RX%2F4XO7OXQZTEhzC2hre9BjqkAR62JtOExJddxTHGH1MZDNEFpqzham1XwBVGHch3V37OGwUjhEKjt0vXcPoXS2DSwZ%2BOZ3hQfZszMjQVshqwF0c9EXkuLVrNj69jiflexusvW2fqTFgDUpE3Odd6U4s%2Bf3nJtVKTgOJ%2FlwWGuRAMzzmgz8WAH%2BEeWRdC2FpRVvInbFt97bnOz3vhRLqyA2dgt0fM7NOfhhyGkYBXzVohHpN%2FaZPR&X-Amz-Signature=39adeadf95a2dcee24551803790ceffc3eb852f4c94f97ec416407c53b862c49&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGTJXC2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bOjKPzNp57vw2%2BoOTcw2DRxdJ12r80wpkNwuy67w6wIhAPqaSnbDT%2BMyeT0JmteyrhdVsGh%2FCOJWtuiwAfm3Bo7SKv8DCBMQABoMNjM3NDIzMTgzODA1IgzTsESTzdFflI6hQZEq3AOB%2FS2hWRGoRat5gxc4IYYDGuL66NplD%2B%2FcbV2ADeFkkyUgUZuC1qV%2BhBZXO2ZnSSzZidCwai3iv4gdaq40yvKWOMGKCwWUIAu3Vi%2Fshc%2FvThLNo1y4Bytax3I%2BfxdRlB7A3%2BrcUoi1KjVjbs0Gx5VV9rki5%2Fb6uppiMCDZDAQNv4nl7aDGs8kt0VIl9abB%2BekuxAweOnVhc9FIbuM4Vb10yL8fuahcdQ0s3yaTrlRgWIvkjbwiLG1p2ai%2BOxTncpqOxjhoAIwcK4cmdVpWBZoMvq5Y31BVEB78r5ibd5UJZ2bp3Aec%2Bu4dA%2FyHmGXVye%2ByQxM3JkTiBbeade3yYQhJNzm7wBzRo09qzKNStdItOU2Bd5GGpaLOGLqpklKrN9DH3f%2BzrGzj0YWAN5pHtmptRujvwRD%2Fb%2F%2BmeLFFBCNY6MAkKAp1Z%2BXGuPr5arnafgsMPfAiF5qcJzAGUABMuW1%2BfkZHrRicDAXRHA0EeUcKNsWbp3I1sf%2FDiqi3QvQ9Lg%2Fy9ag976VTR7ikdiyk%2Fvu%2FjeKd9hJIQXAOEg1Q0qrBFE4ZdM68cZ8gWYqqhBzIU%2B4QdHPBdxYdiUOA7lcj18FMo8aFTuShiVBaqaBPzk2INi2RX%2F4XO7OXQZTEhzC2hre9BjqkAR62JtOExJddxTHGH1MZDNEFpqzham1XwBVGHch3V37OGwUjhEKjt0vXcPoXS2DSwZ%2BOZ3hQfZszMjQVshqwF0c9EXkuLVrNj69jiflexusvW2fqTFgDUpE3Odd6U4s%2Bf3nJtVKTgOJ%2FlwWGuRAMzzmgz8WAH%2BEeWRdC2FpRVvInbFt97bnOz3vhRLqyA2dgt0fM7NOfhhyGkYBXzVohHpN%2FaZPR&X-Amz-Signature=0385559822a7e341c07e3d8181cd57980d108f8862bd59333449efa792b6e778&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGTJXC2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bOjKPzNp57vw2%2BoOTcw2DRxdJ12r80wpkNwuy67w6wIhAPqaSnbDT%2BMyeT0JmteyrhdVsGh%2FCOJWtuiwAfm3Bo7SKv8DCBMQABoMNjM3NDIzMTgzODA1IgzTsESTzdFflI6hQZEq3AOB%2FS2hWRGoRat5gxc4IYYDGuL66NplD%2B%2FcbV2ADeFkkyUgUZuC1qV%2BhBZXO2ZnSSzZidCwai3iv4gdaq40yvKWOMGKCwWUIAu3Vi%2Fshc%2FvThLNo1y4Bytax3I%2BfxdRlB7A3%2BrcUoi1KjVjbs0Gx5VV9rki5%2Fb6uppiMCDZDAQNv4nl7aDGs8kt0VIl9abB%2BekuxAweOnVhc9FIbuM4Vb10yL8fuahcdQ0s3yaTrlRgWIvkjbwiLG1p2ai%2BOxTncpqOxjhoAIwcK4cmdVpWBZoMvq5Y31BVEB78r5ibd5UJZ2bp3Aec%2Bu4dA%2FyHmGXVye%2ByQxM3JkTiBbeade3yYQhJNzm7wBzRo09qzKNStdItOU2Bd5GGpaLOGLqpklKrN9DH3f%2BzrGzj0YWAN5pHtmptRujvwRD%2Fb%2F%2BmeLFFBCNY6MAkKAp1Z%2BXGuPr5arnafgsMPfAiF5qcJzAGUABMuW1%2BfkZHrRicDAXRHA0EeUcKNsWbp3I1sf%2FDiqi3QvQ9Lg%2Fy9ag976VTR7ikdiyk%2Fvu%2FjeKd9hJIQXAOEg1Q0qrBFE4ZdM68cZ8gWYqqhBzIU%2B4QdHPBdxYdiUOA7lcj18FMo8aFTuShiVBaqaBPzk2INi2RX%2F4XO7OXQZTEhzC2hre9BjqkAR62JtOExJddxTHGH1MZDNEFpqzham1XwBVGHch3V37OGwUjhEKjt0vXcPoXS2DSwZ%2BOZ3hQfZszMjQVshqwF0c9EXkuLVrNj69jiflexusvW2fqTFgDUpE3Odd6U4s%2Bf3nJtVKTgOJ%2FlwWGuRAMzzmgz8WAH%2BEeWRdC2FpRVvInbFt97bnOz3vhRLqyA2dgt0fM7NOfhhyGkYBXzVohHpN%2FaZPR&X-Amz-Signature=0e78c88bb736f795c9314dd71afb9f2390e77411bdf385ea4b166c2890e1bbfb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
