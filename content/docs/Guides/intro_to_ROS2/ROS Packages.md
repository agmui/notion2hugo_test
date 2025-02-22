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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SRF3HS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmR6XSukkM0KBcc2hFsPQC9upOFJzNFjVJG81mmYwSKAIhAOpKRJ9DxnjZL%2FNip88uwOCDLY%2F7AXvDdpCArEFxKzsJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGDPBsUxpDtvQkjK4q3APWbJiBtoRL3g%2F77izYNwJisJERGnHB8%2Fmhf0voKhhdrdY14JIgaoUITa6e6T8C9F5rJNA0u8gLdZwO9XDEtp712lSXb0fRa5VNx3sYRD0E%2B4PrhxRaYlLBy44G%2FMAtQgf0fCZ0uhCMiuBxBy%2BQC4L8%2FGP%2BbysFF71LwDdJ1Uqcdq8bqogo%2BDhUh8Ge5otdJXQ54iZ0bgL7%2B52behhHZwdtyuq%2BI4R5WP3xJX6cQMDXxN8LTAQF62UIpg%2FYOnabpziOZ6PDjYvxZDFNrQaHZVOBWvSVu5tpuu%2Bb2B6iZs2KVG8lyjLVtG0RvQ5CSaYc9yC3yONUAgwuW6ALKRyJy8OSiQJF4EQbsnU7CQf0lqEHQMTJFs5ZFuOco%2BlUWeUMoWDnyJEFOnr7Oc5TNPIJeudQVvWWcHu7Q88eI5hZqCCdq6YpYmq7qxkyf7zoasiEsPYzt%2FQbF3KugNk4%2BFF3QLf6wnN6RmQ8JOZUC%2BFaCIm9mpEiPb6cLz5ne7sJAWHuELKfp46h%2B9sGU1WPqR21NFAmImqwA0%2FwqVjtf8HHeHaJ1BDheuSfEdr8nvZ2609Kz4wDCAOpwdUWW7rm5Xr%2Fqy4dOc%2FUjgUD369dk7OLRb%2Fo%2BTl25ZAKGmuc92csczCq5%2Be9BjqkAckstgc6oFsAF5ib1AWANqrF2JNzEEXjWifXCBeawWHGEj4UQGn69YoChlhUj0Kg194pGUlmd2rUvTUSKvOqGDXkcjKk1TBLr1mU8Ut8N2Iz31jfy1bVtOMobAuauVhzOk25gx6zerA8CvenJjYTRgitfVkuul72DXg4tA851kJgB9hMFe8FU44gyOZ52DF73TQYLhGB9rFQozRBKb0UFEvZBTF4&X-Amz-Signature=5ab00dffd0da431516e6c489299ee64358db785ac56fd3701341be022e28a683&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SRF3HS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmR6XSukkM0KBcc2hFsPQC9upOFJzNFjVJG81mmYwSKAIhAOpKRJ9DxnjZL%2FNip88uwOCDLY%2F7AXvDdpCArEFxKzsJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGDPBsUxpDtvQkjK4q3APWbJiBtoRL3g%2F77izYNwJisJERGnHB8%2Fmhf0voKhhdrdY14JIgaoUITa6e6T8C9F5rJNA0u8gLdZwO9XDEtp712lSXb0fRa5VNx3sYRD0E%2B4PrhxRaYlLBy44G%2FMAtQgf0fCZ0uhCMiuBxBy%2BQC4L8%2FGP%2BbysFF71LwDdJ1Uqcdq8bqogo%2BDhUh8Ge5otdJXQ54iZ0bgL7%2B52behhHZwdtyuq%2BI4R5WP3xJX6cQMDXxN8LTAQF62UIpg%2FYOnabpziOZ6PDjYvxZDFNrQaHZVOBWvSVu5tpuu%2Bb2B6iZs2KVG8lyjLVtG0RvQ5CSaYc9yC3yONUAgwuW6ALKRyJy8OSiQJF4EQbsnU7CQf0lqEHQMTJFs5ZFuOco%2BlUWeUMoWDnyJEFOnr7Oc5TNPIJeudQVvWWcHu7Q88eI5hZqCCdq6YpYmq7qxkyf7zoasiEsPYzt%2FQbF3KugNk4%2BFF3QLf6wnN6RmQ8JOZUC%2BFaCIm9mpEiPb6cLz5ne7sJAWHuELKfp46h%2B9sGU1WPqR21NFAmImqwA0%2FwqVjtf8HHeHaJ1BDheuSfEdr8nvZ2609Kz4wDCAOpwdUWW7rm5Xr%2Fqy4dOc%2FUjgUD369dk7OLRb%2Fo%2BTl25ZAKGmuc92csczCq5%2Be9BjqkAckstgc6oFsAF5ib1AWANqrF2JNzEEXjWifXCBeawWHGEj4UQGn69YoChlhUj0Kg194pGUlmd2rUvTUSKvOqGDXkcjKk1TBLr1mU8Ut8N2Iz31jfy1bVtOMobAuauVhzOk25gx6zerA8CvenJjYTRgitfVkuul72DXg4tA851kJgB9hMFe8FU44gyOZ52DF73TQYLhGB9rFQozRBKb0UFEvZBTF4&X-Amz-Signature=a76d99313a92c89019c8b575c2fcc095cd4847bb202999e47990ca23a880dea1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SRF3HS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmR6XSukkM0KBcc2hFsPQC9upOFJzNFjVJG81mmYwSKAIhAOpKRJ9DxnjZL%2FNip88uwOCDLY%2F7AXvDdpCArEFxKzsJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGDPBsUxpDtvQkjK4q3APWbJiBtoRL3g%2F77izYNwJisJERGnHB8%2Fmhf0voKhhdrdY14JIgaoUITa6e6T8C9F5rJNA0u8gLdZwO9XDEtp712lSXb0fRa5VNx3sYRD0E%2B4PrhxRaYlLBy44G%2FMAtQgf0fCZ0uhCMiuBxBy%2BQC4L8%2FGP%2BbysFF71LwDdJ1Uqcdq8bqogo%2BDhUh8Ge5otdJXQ54iZ0bgL7%2B52behhHZwdtyuq%2BI4R5WP3xJX6cQMDXxN8LTAQF62UIpg%2FYOnabpziOZ6PDjYvxZDFNrQaHZVOBWvSVu5tpuu%2Bb2B6iZs2KVG8lyjLVtG0RvQ5CSaYc9yC3yONUAgwuW6ALKRyJy8OSiQJF4EQbsnU7CQf0lqEHQMTJFs5ZFuOco%2BlUWeUMoWDnyJEFOnr7Oc5TNPIJeudQVvWWcHu7Q88eI5hZqCCdq6YpYmq7qxkyf7zoasiEsPYzt%2FQbF3KugNk4%2BFF3QLf6wnN6RmQ8JOZUC%2BFaCIm9mpEiPb6cLz5ne7sJAWHuELKfp46h%2B9sGU1WPqR21NFAmImqwA0%2FwqVjtf8HHeHaJ1BDheuSfEdr8nvZ2609Kz4wDCAOpwdUWW7rm5Xr%2Fqy4dOc%2FUjgUD369dk7OLRb%2Fo%2BTl25ZAKGmuc92csczCq5%2Be9BjqkAckstgc6oFsAF5ib1AWANqrF2JNzEEXjWifXCBeawWHGEj4UQGn69YoChlhUj0Kg194pGUlmd2rUvTUSKvOqGDXkcjKk1TBLr1mU8Ut8N2Iz31jfy1bVtOMobAuauVhzOk25gx6zerA8CvenJjYTRgitfVkuul72DXg4tA851kJgB9hMFe8FU44gyOZ52DF73TQYLhGB9rFQozRBKb0UFEvZBTF4&X-Amz-Signature=5a70c25b2cd337d47b3e556a932815d6d9a34c0941294c5a1e0a49dc09bfe2ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SRF3HS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmR6XSukkM0KBcc2hFsPQC9upOFJzNFjVJG81mmYwSKAIhAOpKRJ9DxnjZL%2FNip88uwOCDLY%2F7AXvDdpCArEFxKzsJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGDPBsUxpDtvQkjK4q3APWbJiBtoRL3g%2F77izYNwJisJERGnHB8%2Fmhf0voKhhdrdY14JIgaoUITa6e6T8C9F5rJNA0u8gLdZwO9XDEtp712lSXb0fRa5VNx3sYRD0E%2B4PrhxRaYlLBy44G%2FMAtQgf0fCZ0uhCMiuBxBy%2BQC4L8%2FGP%2BbysFF71LwDdJ1Uqcdq8bqogo%2BDhUh8Ge5otdJXQ54iZ0bgL7%2B52behhHZwdtyuq%2BI4R5WP3xJX6cQMDXxN8LTAQF62UIpg%2FYOnabpziOZ6PDjYvxZDFNrQaHZVOBWvSVu5tpuu%2Bb2B6iZs2KVG8lyjLVtG0RvQ5CSaYc9yC3yONUAgwuW6ALKRyJy8OSiQJF4EQbsnU7CQf0lqEHQMTJFs5ZFuOco%2BlUWeUMoWDnyJEFOnr7Oc5TNPIJeudQVvWWcHu7Q88eI5hZqCCdq6YpYmq7qxkyf7zoasiEsPYzt%2FQbF3KugNk4%2BFF3QLf6wnN6RmQ8JOZUC%2BFaCIm9mpEiPb6cLz5ne7sJAWHuELKfp46h%2B9sGU1WPqR21NFAmImqwA0%2FwqVjtf8HHeHaJ1BDheuSfEdr8nvZ2609Kz4wDCAOpwdUWW7rm5Xr%2Fqy4dOc%2FUjgUD369dk7OLRb%2Fo%2BTl25ZAKGmuc92csczCq5%2Be9BjqkAckstgc6oFsAF5ib1AWANqrF2JNzEEXjWifXCBeawWHGEj4UQGn69YoChlhUj0Kg194pGUlmd2rUvTUSKvOqGDXkcjKk1TBLr1mU8Ut8N2Iz31jfy1bVtOMobAuauVhzOk25gx6zerA8CvenJjYTRgitfVkuul72DXg4tA851kJgB9hMFe8FU44gyOZ52DF73TQYLhGB9rFQozRBKb0UFEvZBTF4&X-Amz-Signature=3b43ba737b5d13604062329794bf2177bc7a5a15216360615f84af84663a0f39&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SRF3HS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmR6XSukkM0KBcc2hFsPQC9upOFJzNFjVJG81mmYwSKAIhAOpKRJ9DxnjZL%2FNip88uwOCDLY%2F7AXvDdpCArEFxKzsJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGDPBsUxpDtvQkjK4q3APWbJiBtoRL3g%2F77izYNwJisJERGnHB8%2Fmhf0voKhhdrdY14JIgaoUITa6e6T8C9F5rJNA0u8gLdZwO9XDEtp712lSXb0fRa5VNx3sYRD0E%2B4PrhxRaYlLBy44G%2FMAtQgf0fCZ0uhCMiuBxBy%2BQC4L8%2FGP%2BbysFF71LwDdJ1Uqcdq8bqogo%2BDhUh8Ge5otdJXQ54iZ0bgL7%2B52behhHZwdtyuq%2BI4R5WP3xJX6cQMDXxN8LTAQF62UIpg%2FYOnabpziOZ6PDjYvxZDFNrQaHZVOBWvSVu5tpuu%2Bb2B6iZs2KVG8lyjLVtG0RvQ5CSaYc9yC3yONUAgwuW6ALKRyJy8OSiQJF4EQbsnU7CQf0lqEHQMTJFs5ZFuOco%2BlUWeUMoWDnyJEFOnr7Oc5TNPIJeudQVvWWcHu7Q88eI5hZqCCdq6YpYmq7qxkyf7zoasiEsPYzt%2FQbF3KugNk4%2BFF3QLf6wnN6RmQ8JOZUC%2BFaCIm9mpEiPb6cLz5ne7sJAWHuELKfp46h%2B9sGU1WPqR21NFAmImqwA0%2FwqVjtf8HHeHaJ1BDheuSfEdr8nvZ2609Kz4wDCAOpwdUWW7rm5Xr%2Fqy4dOc%2FUjgUD369dk7OLRb%2Fo%2BTl25ZAKGmuc92csczCq5%2Be9BjqkAckstgc6oFsAF5ib1AWANqrF2JNzEEXjWifXCBeawWHGEj4UQGn69YoChlhUj0Kg194pGUlmd2rUvTUSKvOqGDXkcjKk1TBLr1mU8Ut8N2Iz31jfy1bVtOMobAuauVhzOk25gx6zerA8CvenJjYTRgitfVkuul72DXg4tA851kJgB9hMFe8FU44gyOZ52DF73TQYLhGB9rFQozRBKb0UFEvZBTF4&X-Amz-Signature=c6614dca87992ca5fc0191d5836cdd10760e2be762e5a42e9f21d8dfb830dbff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SRF3HS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmR6XSukkM0KBcc2hFsPQC9upOFJzNFjVJG81mmYwSKAIhAOpKRJ9DxnjZL%2FNip88uwOCDLY%2F7AXvDdpCArEFxKzsJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGDPBsUxpDtvQkjK4q3APWbJiBtoRL3g%2F77izYNwJisJERGnHB8%2Fmhf0voKhhdrdY14JIgaoUITa6e6T8C9F5rJNA0u8gLdZwO9XDEtp712lSXb0fRa5VNx3sYRD0E%2B4PrhxRaYlLBy44G%2FMAtQgf0fCZ0uhCMiuBxBy%2BQC4L8%2FGP%2BbysFF71LwDdJ1Uqcdq8bqogo%2BDhUh8Ge5otdJXQ54iZ0bgL7%2B52behhHZwdtyuq%2BI4R5WP3xJX6cQMDXxN8LTAQF62UIpg%2FYOnabpziOZ6PDjYvxZDFNrQaHZVOBWvSVu5tpuu%2Bb2B6iZs2KVG8lyjLVtG0RvQ5CSaYc9yC3yONUAgwuW6ALKRyJy8OSiQJF4EQbsnU7CQf0lqEHQMTJFs5ZFuOco%2BlUWeUMoWDnyJEFOnr7Oc5TNPIJeudQVvWWcHu7Q88eI5hZqCCdq6YpYmq7qxkyf7zoasiEsPYzt%2FQbF3KugNk4%2BFF3QLf6wnN6RmQ8JOZUC%2BFaCIm9mpEiPb6cLz5ne7sJAWHuELKfp46h%2B9sGU1WPqR21NFAmImqwA0%2FwqVjtf8HHeHaJ1BDheuSfEdr8nvZ2609Kz4wDCAOpwdUWW7rm5Xr%2Fqy4dOc%2FUjgUD369dk7OLRb%2Fo%2BTl25ZAKGmuc92csczCq5%2Be9BjqkAckstgc6oFsAF5ib1AWANqrF2JNzEEXjWifXCBeawWHGEj4UQGn69YoChlhUj0Kg194pGUlmd2rUvTUSKvOqGDXkcjKk1TBLr1mU8Ut8N2Iz31jfy1bVtOMobAuauVhzOk25gx6zerA8CvenJjYTRgitfVkuul72DXg4tA851kJgB9hMFe8FU44gyOZ52DF73TQYLhGB9rFQozRBKb0UFEvZBTF4&X-Amz-Signature=b90979258a99ebe78791befec5ff069925f3c2cb158f0bb296373c3d77da2f61&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SRF3HS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmR6XSukkM0KBcc2hFsPQC9upOFJzNFjVJG81mmYwSKAIhAOpKRJ9DxnjZL%2FNip88uwOCDLY%2F7AXvDdpCArEFxKzsJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGDPBsUxpDtvQkjK4q3APWbJiBtoRL3g%2F77izYNwJisJERGnHB8%2Fmhf0voKhhdrdY14JIgaoUITa6e6T8C9F5rJNA0u8gLdZwO9XDEtp712lSXb0fRa5VNx3sYRD0E%2B4PrhxRaYlLBy44G%2FMAtQgf0fCZ0uhCMiuBxBy%2BQC4L8%2FGP%2BbysFF71LwDdJ1Uqcdq8bqogo%2BDhUh8Ge5otdJXQ54iZ0bgL7%2B52behhHZwdtyuq%2BI4R5WP3xJX6cQMDXxN8LTAQF62UIpg%2FYOnabpziOZ6PDjYvxZDFNrQaHZVOBWvSVu5tpuu%2Bb2B6iZs2KVG8lyjLVtG0RvQ5CSaYc9yC3yONUAgwuW6ALKRyJy8OSiQJF4EQbsnU7CQf0lqEHQMTJFs5ZFuOco%2BlUWeUMoWDnyJEFOnr7Oc5TNPIJeudQVvWWcHu7Q88eI5hZqCCdq6YpYmq7qxkyf7zoasiEsPYzt%2FQbF3KugNk4%2BFF3QLf6wnN6RmQ8JOZUC%2BFaCIm9mpEiPb6cLz5ne7sJAWHuELKfp46h%2B9sGU1WPqR21NFAmImqwA0%2FwqVjtf8HHeHaJ1BDheuSfEdr8nvZ2609Kz4wDCAOpwdUWW7rm5Xr%2Fqy4dOc%2FUjgUD369dk7OLRb%2Fo%2BTl25ZAKGmuc92csczCq5%2Be9BjqkAckstgc6oFsAF5ib1AWANqrF2JNzEEXjWifXCBeawWHGEj4UQGn69YoChlhUj0Kg194pGUlmd2rUvTUSKvOqGDXkcjKk1TBLr1mU8Ut8N2Iz31jfy1bVtOMobAuauVhzOk25gx6zerA8CvenJjYTRgitfVkuul72DXg4tA851kJgB9hMFe8FU44gyOZ52DF73TQYLhGB9rFQozRBKb0UFEvZBTF4&X-Amz-Signature=82444b67e8d8a790d5ced06ae0adfb74867e31954fe9134a4fe0d157779e44cc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
