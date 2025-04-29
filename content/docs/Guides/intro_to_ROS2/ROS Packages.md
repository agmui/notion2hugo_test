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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4OPB7B%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtGPcUp9TKlaZVqSFAAwFfvMqO%2FULpvnwl6X1zoTgaUAiBAUhSqvFO1sBNPemuLnnVLbnPrVZD3dJbVBSI87FO2xyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Eeh52k0CWP%2FZsQEKtwDCbvbzaw1IluL7gaHwJx4ylL5%2F1g6ENnUvYC9sBfvWlLGQCX%2FrYlFLk2IfHhWra2ERlGhPw0HrJdwE0vxv4BJ3Kd0PakAUEBXykFmG%2BJ0n8YJd9jKDHgWRpkpLy5niCLC%2FXw8Ln%2BDedSjDG4XS4gA7ijlkbHa63Co%2FdsubKus%2FTgAhQHW83%2BNP0A4Mv7qcBwKvFyWIyzI1YBFg8Xu%2BOVBctBwpdEoQigqJ4JNrSmZaKUOHrkPmzF2i%2FsdK4GK0Ropby2lK9UP4fzeRoRLjVl8XXYFtNFPPoFy59BojzStdls2NeN8R94inKKJiKxcGqy7A17%2FPJgFuK5BYS5hqD2yWtozDj67u50LCm8se6nWCwMdYT%2BljiE19ZK0i5DuK50lZ%2BftK0mLIZBhM628lmXOnDcs12Di3Oq82BzIHt3yqwvaRj8S5yrb9CQuE4degqZwrDKXJRfk8ccTn0gFPDN1%2FRl3eotbn8aSXAo%2FrcgkZJqXSDYoHEZRHHM%2F9bfr7qB7eVomqie%2B4F2Ew59kUkHW7iZhsFQPZ9%2FMsZ9I5cZ6BWBMERxBYjcEFQrw5S3F1lkoQeKRow53w6bWSyLbKlHItB6JNxKN31GR%2FtPUX8xQZk%2FfevqqwnuGosqdTyAwma7EwAY6pgFDzvyms8HOaLLTckf%2BGhgNqrLiV3hjpkAje1aadEgAP3RjgckfH25Yk%2BitSZ5FjCSOG4MxGkj3M4E0NqzVVbWia31fvVM%2BNNVWhleci33p0AZwhrO0AdMZPVei%2FjYKYt7i%2BGIqJvKcmaeWB9aOhhxLDZQ1ptnfAGxT87ijD4RIQa6npi55XCjI5i%2FOqvSVUno5gWEjd%2BlEczP1Ac0ywK%2BNx4HAK2eb&X-Amz-Signature=87f53f39cc59a8fa27003eb70ed0f03fe55edab82aef6be35200b867a1cbdcef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4OPB7B%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtGPcUp9TKlaZVqSFAAwFfvMqO%2FULpvnwl6X1zoTgaUAiBAUhSqvFO1sBNPemuLnnVLbnPrVZD3dJbVBSI87FO2xyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Eeh52k0CWP%2FZsQEKtwDCbvbzaw1IluL7gaHwJx4ylL5%2F1g6ENnUvYC9sBfvWlLGQCX%2FrYlFLk2IfHhWra2ERlGhPw0HrJdwE0vxv4BJ3Kd0PakAUEBXykFmG%2BJ0n8YJd9jKDHgWRpkpLy5niCLC%2FXw8Ln%2BDedSjDG4XS4gA7ijlkbHa63Co%2FdsubKus%2FTgAhQHW83%2BNP0A4Mv7qcBwKvFyWIyzI1YBFg8Xu%2BOVBctBwpdEoQigqJ4JNrSmZaKUOHrkPmzF2i%2FsdK4GK0Ropby2lK9UP4fzeRoRLjVl8XXYFtNFPPoFy59BojzStdls2NeN8R94inKKJiKxcGqy7A17%2FPJgFuK5BYS5hqD2yWtozDj67u50LCm8se6nWCwMdYT%2BljiE19ZK0i5DuK50lZ%2BftK0mLIZBhM628lmXOnDcs12Di3Oq82BzIHt3yqwvaRj8S5yrb9CQuE4degqZwrDKXJRfk8ccTn0gFPDN1%2FRl3eotbn8aSXAo%2FrcgkZJqXSDYoHEZRHHM%2F9bfr7qB7eVomqie%2B4F2Ew59kUkHW7iZhsFQPZ9%2FMsZ9I5cZ6BWBMERxBYjcEFQrw5S3F1lkoQeKRow53w6bWSyLbKlHItB6JNxKN31GR%2FtPUX8xQZk%2FfevqqwnuGosqdTyAwma7EwAY6pgFDzvyms8HOaLLTckf%2BGhgNqrLiV3hjpkAje1aadEgAP3RjgckfH25Yk%2BitSZ5FjCSOG4MxGkj3M4E0NqzVVbWia31fvVM%2BNNVWhleci33p0AZwhrO0AdMZPVei%2FjYKYt7i%2BGIqJvKcmaeWB9aOhhxLDZQ1ptnfAGxT87ijD4RIQa6npi55XCjI5i%2FOqvSVUno5gWEjd%2BlEczP1Ac0ywK%2BNx4HAK2eb&X-Amz-Signature=263435b85413076c1c2d6916942cfcdd55969caf0289e8ab6e4aa9b996009a34&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4OPB7B%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtGPcUp9TKlaZVqSFAAwFfvMqO%2FULpvnwl6X1zoTgaUAiBAUhSqvFO1sBNPemuLnnVLbnPrVZD3dJbVBSI87FO2xyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Eeh52k0CWP%2FZsQEKtwDCbvbzaw1IluL7gaHwJx4ylL5%2F1g6ENnUvYC9sBfvWlLGQCX%2FrYlFLk2IfHhWra2ERlGhPw0HrJdwE0vxv4BJ3Kd0PakAUEBXykFmG%2BJ0n8YJd9jKDHgWRpkpLy5niCLC%2FXw8Ln%2BDedSjDG4XS4gA7ijlkbHa63Co%2FdsubKus%2FTgAhQHW83%2BNP0A4Mv7qcBwKvFyWIyzI1YBFg8Xu%2BOVBctBwpdEoQigqJ4JNrSmZaKUOHrkPmzF2i%2FsdK4GK0Ropby2lK9UP4fzeRoRLjVl8XXYFtNFPPoFy59BojzStdls2NeN8R94inKKJiKxcGqy7A17%2FPJgFuK5BYS5hqD2yWtozDj67u50LCm8se6nWCwMdYT%2BljiE19ZK0i5DuK50lZ%2BftK0mLIZBhM628lmXOnDcs12Di3Oq82BzIHt3yqwvaRj8S5yrb9CQuE4degqZwrDKXJRfk8ccTn0gFPDN1%2FRl3eotbn8aSXAo%2FrcgkZJqXSDYoHEZRHHM%2F9bfr7qB7eVomqie%2B4F2Ew59kUkHW7iZhsFQPZ9%2FMsZ9I5cZ6BWBMERxBYjcEFQrw5S3F1lkoQeKRow53w6bWSyLbKlHItB6JNxKN31GR%2FtPUX8xQZk%2FfevqqwnuGosqdTyAwma7EwAY6pgFDzvyms8HOaLLTckf%2BGhgNqrLiV3hjpkAje1aadEgAP3RjgckfH25Yk%2BitSZ5FjCSOG4MxGkj3M4E0NqzVVbWia31fvVM%2BNNVWhleci33p0AZwhrO0AdMZPVei%2FjYKYt7i%2BGIqJvKcmaeWB9aOhhxLDZQ1ptnfAGxT87ijD4RIQa6npi55XCjI5i%2FOqvSVUno5gWEjd%2BlEczP1Ac0ywK%2BNx4HAK2eb&X-Amz-Signature=5d686acb06d6c5b9e74917807c267899aed5b4be3aa9ee336a4fdc366c162461&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4OPB7B%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtGPcUp9TKlaZVqSFAAwFfvMqO%2FULpvnwl6X1zoTgaUAiBAUhSqvFO1sBNPemuLnnVLbnPrVZD3dJbVBSI87FO2xyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Eeh52k0CWP%2FZsQEKtwDCbvbzaw1IluL7gaHwJx4ylL5%2F1g6ENnUvYC9sBfvWlLGQCX%2FrYlFLk2IfHhWra2ERlGhPw0HrJdwE0vxv4BJ3Kd0PakAUEBXykFmG%2BJ0n8YJd9jKDHgWRpkpLy5niCLC%2FXw8Ln%2BDedSjDG4XS4gA7ijlkbHa63Co%2FdsubKus%2FTgAhQHW83%2BNP0A4Mv7qcBwKvFyWIyzI1YBFg8Xu%2BOVBctBwpdEoQigqJ4JNrSmZaKUOHrkPmzF2i%2FsdK4GK0Ropby2lK9UP4fzeRoRLjVl8XXYFtNFPPoFy59BojzStdls2NeN8R94inKKJiKxcGqy7A17%2FPJgFuK5BYS5hqD2yWtozDj67u50LCm8se6nWCwMdYT%2BljiE19ZK0i5DuK50lZ%2BftK0mLIZBhM628lmXOnDcs12Di3Oq82BzIHt3yqwvaRj8S5yrb9CQuE4degqZwrDKXJRfk8ccTn0gFPDN1%2FRl3eotbn8aSXAo%2FrcgkZJqXSDYoHEZRHHM%2F9bfr7qB7eVomqie%2B4F2Ew59kUkHW7iZhsFQPZ9%2FMsZ9I5cZ6BWBMERxBYjcEFQrw5S3F1lkoQeKRow53w6bWSyLbKlHItB6JNxKN31GR%2FtPUX8xQZk%2FfevqqwnuGosqdTyAwma7EwAY6pgFDzvyms8HOaLLTckf%2BGhgNqrLiV3hjpkAje1aadEgAP3RjgckfH25Yk%2BitSZ5FjCSOG4MxGkj3M4E0NqzVVbWia31fvVM%2BNNVWhleci33p0AZwhrO0AdMZPVei%2FjYKYt7i%2BGIqJvKcmaeWB9aOhhxLDZQ1ptnfAGxT87ijD4RIQa6npi55XCjI5i%2FOqvSVUno5gWEjd%2BlEczP1Ac0ywK%2BNx4HAK2eb&X-Amz-Signature=b8661c0a4852286c5fa3811cd522299044628d2e69298a53b09f72d8b7908342&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4OPB7B%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtGPcUp9TKlaZVqSFAAwFfvMqO%2FULpvnwl6X1zoTgaUAiBAUhSqvFO1sBNPemuLnnVLbnPrVZD3dJbVBSI87FO2xyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Eeh52k0CWP%2FZsQEKtwDCbvbzaw1IluL7gaHwJx4ylL5%2F1g6ENnUvYC9sBfvWlLGQCX%2FrYlFLk2IfHhWra2ERlGhPw0HrJdwE0vxv4BJ3Kd0PakAUEBXykFmG%2BJ0n8YJd9jKDHgWRpkpLy5niCLC%2FXw8Ln%2BDedSjDG4XS4gA7ijlkbHa63Co%2FdsubKus%2FTgAhQHW83%2BNP0A4Mv7qcBwKvFyWIyzI1YBFg8Xu%2BOVBctBwpdEoQigqJ4JNrSmZaKUOHrkPmzF2i%2FsdK4GK0Ropby2lK9UP4fzeRoRLjVl8XXYFtNFPPoFy59BojzStdls2NeN8R94inKKJiKxcGqy7A17%2FPJgFuK5BYS5hqD2yWtozDj67u50LCm8se6nWCwMdYT%2BljiE19ZK0i5DuK50lZ%2BftK0mLIZBhM628lmXOnDcs12Di3Oq82BzIHt3yqwvaRj8S5yrb9CQuE4degqZwrDKXJRfk8ccTn0gFPDN1%2FRl3eotbn8aSXAo%2FrcgkZJqXSDYoHEZRHHM%2F9bfr7qB7eVomqie%2B4F2Ew59kUkHW7iZhsFQPZ9%2FMsZ9I5cZ6BWBMERxBYjcEFQrw5S3F1lkoQeKRow53w6bWSyLbKlHItB6JNxKN31GR%2FtPUX8xQZk%2FfevqqwnuGosqdTyAwma7EwAY6pgFDzvyms8HOaLLTckf%2BGhgNqrLiV3hjpkAje1aadEgAP3RjgckfH25Yk%2BitSZ5FjCSOG4MxGkj3M4E0NqzVVbWia31fvVM%2BNNVWhleci33p0AZwhrO0AdMZPVei%2FjYKYt7i%2BGIqJvKcmaeWB9aOhhxLDZQ1ptnfAGxT87ijD4RIQa6npi55XCjI5i%2FOqvSVUno5gWEjd%2BlEczP1Ac0ywK%2BNx4HAK2eb&X-Amz-Signature=5954b94193b58b600dee9fdb6133d28bdeeeeedc94d2a92c090ea3525f808f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4OPB7B%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtGPcUp9TKlaZVqSFAAwFfvMqO%2FULpvnwl6X1zoTgaUAiBAUhSqvFO1sBNPemuLnnVLbnPrVZD3dJbVBSI87FO2xyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Eeh52k0CWP%2FZsQEKtwDCbvbzaw1IluL7gaHwJx4ylL5%2F1g6ENnUvYC9sBfvWlLGQCX%2FrYlFLk2IfHhWra2ERlGhPw0HrJdwE0vxv4BJ3Kd0PakAUEBXykFmG%2BJ0n8YJd9jKDHgWRpkpLy5niCLC%2FXw8Ln%2BDedSjDG4XS4gA7ijlkbHa63Co%2FdsubKus%2FTgAhQHW83%2BNP0A4Mv7qcBwKvFyWIyzI1YBFg8Xu%2BOVBctBwpdEoQigqJ4JNrSmZaKUOHrkPmzF2i%2FsdK4GK0Ropby2lK9UP4fzeRoRLjVl8XXYFtNFPPoFy59BojzStdls2NeN8R94inKKJiKxcGqy7A17%2FPJgFuK5BYS5hqD2yWtozDj67u50LCm8se6nWCwMdYT%2BljiE19ZK0i5DuK50lZ%2BftK0mLIZBhM628lmXOnDcs12Di3Oq82BzIHt3yqwvaRj8S5yrb9CQuE4degqZwrDKXJRfk8ccTn0gFPDN1%2FRl3eotbn8aSXAo%2FrcgkZJqXSDYoHEZRHHM%2F9bfr7qB7eVomqie%2B4F2Ew59kUkHW7iZhsFQPZ9%2FMsZ9I5cZ6BWBMERxBYjcEFQrw5S3F1lkoQeKRow53w6bWSyLbKlHItB6JNxKN31GR%2FtPUX8xQZk%2FfevqqwnuGosqdTyAwma7EwAY6pgFDzvyms8HOaLLTckf%2BGhgNqrLiV3hjpkAje1aadEgAP3RjgckfH25Yk%2BitSZ5FjCSOG4MxGkj3M4E0NqzVVbWia31fvVM%2BNNVWhleci33p0AZwhrO0AdMZPVei%2FjYKYt7i%2BGIqJvKcmaeWB9aOhhxLDZQ1ptnfAGxT87ijD4RIQa6npi55XCjI5i%2FOqvSVUno5gWEjd%2BlEczP1Ac0ywK%2BNx4HAK2eb&X-Amz-Signature=82bb4a0a1d51494760436f5962672bd7335e97b17feca98cbf3daa0997320b51&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4OPB7B%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtGPcUp9TKlaZVqSFAAwFfvMqO%2FULpvnwl6X1zoTgaUAiBAUhSqvFO1sBNPemuLnnVLbnPrVZD3dJbVBSI87FO2xyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Eeh52k0CWP%2FZsQEKtwDCbvbzaw1IluL7gaHwJx4ylL5%2F1g6ENnUvYC9sBfvWlLGQCX%2FrYlFLk2IfHhWra2ERlGhPw0HrJdwE0vxv4BJ3Kd0PakAUEBXykFmG%2BJ0n8YJd9jKDHgWRpkpLy5niCLC%2FXw8Ln%2BDedSjDG4XS4gA7ijlkbHa63Co%2FdsubKus%2FTgAhQHW83%2BNP0A4Mv7qcBwKvFyWIyzI1YBFg8Xu%2BOVBctBwpdEoQigqJ4JNrSmZaKUOHrkPmzF2i%2FsdK4GK0Ropby2lK9UP4fzeRoRLjVl8XXYFtNFPPoFy59BojzStdls2NeN8R94inKKJiKxcGqy7A17%2FPJgFuK5BYS5hqD2yWtozDj67u50LCm8se6nWCwMdYT%2BljiE19ZK0i5DuK50lZ%2BftK0mLIZBhM628lmXOnDcs12Di3Oq82BzIHt3yqwvaRj8S5yrb9CQuE4degqZwrDKXJRfk8ccTn0gFPDN1%2FRl3eotbn8aSXAo%2FrcgkZJqXSDYoHEZRHHM%2F9bfr7qB7eVomqie%2B4F2Ew59kUkHW7iZhsFQPZ9%2FMsZ9I5cZ6BWBMERxBYjcEFQrw5S3F1lkoQeKRow53w6bWSyLbKlHItB6JNxKN31GR%2FtPUX8xQZk%2FfevqqwnuGosqdTyAwma7EwAY6pgFDzvyms8HOaLLTckf%2BGhgNqrLiV3hjpkAje1aadEgAP3RjgckfH25Yk%2BitSZ5FjCSOG4MxGkj3M4E0NqzVVbWia31fvVM%2BNNVWhleci33p0AZwhrO0AdMZPVei%2FjYKYt7i%2BGIqJvKcmaeWB9aOhhxLDZQ1ptnfAGxT87ijD4RIQa6npi55XCjI5i%2FOqvSVUno5gWEjd%2BlEczP1Ac0ywK%2BNx4HAK2eb&X-Amz-Signature=788c30162824d9c17f8b1e8d3f86aef47afaf176fdcb4b7403125481b0afb269&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
