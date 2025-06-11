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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2JGI6U%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByowhkrUrxovIMvTBat7Y%2Fj4%2Fjc6KVMVYBSeSiE62QnAiBzzlLlyotYeSYc3PMnX5M1gqw4MnNj2LJe8fuykZ5qeiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ksqXDAnVThjK5iUKtwDyATFIdyp6tq5yRpQOqRqigtAf45N%2F%2FBBVFNxNsDbqOGMho9vOSC8VsXTcojYQ7gYkMIzHSjd7mhpPuLkS4zbVrVK0LPtCx8AeRjBVPncmI0r2aL5YBzEU4D4ptluUpDNrkbxUnAzoh73bYsBqB9DDVFPazI8Mjppe2my%2Bn6LvYU0nrQRU0GXsODT7ZyGJZW5PE3fxC%2FHzGXu3znf49RwSoDB%2F%2FFR9RJHUYeNtKmgt3KaTeFoJPEFacSWUvBWlH6FVMjcyavMKXwn4A2Gs2TFr18IRkMwgqYJl2ZDXIe6YgylZsprKqG23V2EQ5S4%2BioRwa7kc6uLp7jLt88oLaiZ1DkaecK18bABQ%2BMxKzAx2oFZTUIoGRia0dmCn%2Bl191hkHJMo7lbkAzMx6rymTBB6x6adVdXLy6cnOOggl%2BYOe0njR7h4lT%2BC4%2B%2FXdu1qmwhPNlZKBocMHuEFtDCmXKord0jhFAG7f%2FgjGPoPOsMze5fOEgBDWX3LthO4a7MHc%2FIrJDya%2FI1Rp2U9WsZBb4%2F%2BcGaxRpiQLvzgfwCEersG%2FU%2FDsUOxSzT9ugD0nvkPPZiiRR0foDOIyK4RGXBPoWM9tqer5L4T3l2Xo%2BV7Ny2R%2FT%2Bv9nYT2Ncc%2FcsKKsownKSkwgY6pgEDlnQQ3P0JM7cFac44WuhixrtJtjbNwxjIysq%2FajYBY%2F%2BGOTB%2FKPrswOOgIVswDgl6Rfl56xCOfLcEfW%2F8kiLGf%2FOQtUoIBv74yDgE90CdMv3Nhwfzn7dPq45agAqNcH0S7J6vGBqUU8j3a8iytdiaTC1X5WQPRKWne7XJb%2Fb5se5DrQ4oJzZD05juN4WLWn12KxuMkx4UdyAwC9VaVJTd6mDidZgE&X-Amz-Signature=03ceb61e40048d4b0484f7518f100c3bc2ceadb426370756ce9909d6278043e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2JGI6U%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByowhkrUrxovIMvTBat7Y%2Fj4%2Fjc6KVMVYBSeSiE62QnAiBzzlLlyotYeSYc3PMnX5M1gqw4MnNj2LJe8fuykZ5qeiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ksqXDAnVThjK5iUKtwDyATFIdyp6tq5yRpQOqRqigtAf45N%2F%2FBBVFNxNsDbqOGMho9vOSC8VsXTcojYQ7gYkMIzHSjd7mhpPuLkS4zbVrVK0LPtCx8AeRjBVPncmI0r2aL5YBzEU4D4ptluUpDNrkbxUnAzoh73bYsBqB9DDVFPazI8Mjppe2my%2Bn6LvYU0nrQRU0GXsODT7ZyGJZW5PE3fxC%2FHzGXu3znf49RwSoDB%2F%2FFR9RJHUYeNtKmgt3KaTeFoJPEFacSWUvBWlH6FVMjcyavMKXwn4A2Gs2TFr18IRkMwgqYJl2ZDXIe6YgylZsprKqG23V2EQ5S4%2BioRwa7kc6uLp7jLt88oLaiZ1DkaecK18bABQ%2BMxKzAx2oFZTUIoGRia0dmCn%2Bl191hkHJMo7lbkAzMx6rymTBB6x6adVdXLy6cnOOggl%2BYOe0njR7h4lT%2BC4%2B%2FXdu1qmwhPNlZKBocMHuEFtDCmXKord0jhFAG7f%2FgjGPoPOsMze5fOEgBDWX3LthO4a7MHc%2FIrJDya%2FI1Rp2U9WsZBb4%2F%2BcGaxRpiQLvzgfwCEersG%2FU%2FDsUOxSzT9ugD0nvkPPZiiRR0foDOIyK4RGXBPoWM9tqer5L4T3l2Xo%2BV7Ny2R%2FT%2Bv9nYT2Ncc%2FcsKKsownKSkwgY6pgEDlnQQ3P0JM7cFac44WuhixrtJtjbNwxjIysq%2FajYBY%2F%2BGOTB%2FKPrswOOgIVswDgl6Rfl56xCOfLcEfW%2F8kiLGf%2FOQtUoIBv74yDgE90CdMv3Nhwfzn7dPq45agAqNcH0S7J6vGBqUU8j3a8iytdiaTC1X5WQPRKWne7XJb%2Fb5se5DrQ4oJzZD05juN4WLWn12KxuMkx4UdyAwC9VaVJTd6mDidZgE&X-Amz-Signature=cb30d97242ef8561eddd0a18b6b275ec431450ada30db1c15d8fdbb4e91262ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2JGI6U%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByowhkrUrxovIMvTBat7Y%2Fj4%2Fjc6KVMVYBSeSiE62QnAiBzzlLlyotYeSYc3PMnX5M1gqw4MnNj2LJe8fuykZ5qeiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ksqXDAnVThjK5iUKtwDyATFIdyp6tq5yRpQOqRqigtAf45N%2F%2FBBVFNxNsDbqOGMho9vOSC8VsXTcojYQ7gYkMIzHSjd7mhpPuLkS4zbVrVK0LPtCx8AeRjBVPncmI0r2aL5YBzEU4D4ptluUpDNrkbxUnAzoh73bYsBqB9DDVFPazI8Mjppe2my%2Bn6LvYU0nrQRU0GXsODT7ZyGJZW5PE3fxC%2FHzGXu3znf49RwSoDB%2F%2FFR9RJHUYeNtKmgt3KaTeFoJPEFacSWUvBWlH6FVMjcyavMKXwn4A2Gs2TFr18IRkMwgqYJl2ZDXIe6YgylZsprKqG23V2EQ5S4%2BioRwa7kc6uLp7jLt88oLaiZ1DkaecK18bABQ%2BMxKzAx2oFZTUIoGRia0dmCn%2Bl191hkHJMo7lbkAzMx6rymTBB6x6adVdXLy6cnOOggl%2BYOe0njR7h4lT%2BC4%2B%2FXdu1qmwhPNlZKBocMHuEFtDCmXKord0jhFAG7f%2FgjGPoPOsMze5fOEgBDWX3LthO4a7MHc%2FIrJDya%2FI1Rp2U9WsZBb4%2F%2BcGaxRpiQLvzgfwCEersG%2FU%2FDsUOxSzT9ugD0nvkPPZiiRR0foDOIyK4RGXBPoWM9tqer5L4T3l2Xo%2BV7Ny2R%2FT%2Bv9nYT2Ncc%2FcsKKsownKSkwgY6pgEDlnQQ3P0JM7cFac44WuhixrtJtjbNwxjIysq%2FajYBY%2F%2BGOTB%2FKPrswOOgIVswDgl6Rfl56xCOfLcEfW%2F8kiLGf%2FOQtUoIBv74yDgE90CdMv3Nhwfzn7dPq45agAqNcH0S7J6vGBqUU8j3a8iytdiaTC1X5WQPRKWne7XJb%2Fb5se5DrQ4oJzZD05juN4WLWn12KxuMkx4UdyAwC9VaVJTd6mDidZgE&X-Amz-Signature=bef623e0ffc05a9ce3062fa67b5c85cd078c1cd16e0056575c6787b75fe203c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2JGI6U%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByowhkrUrxovIMvTBat7Y%2Fj4%2Fjc6KVMVYBSeSiE62QnAiBzzlLlyotYeSYc3PMnX5M1gqw4MnNj2LJe8fuykZ5qeiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ksqXDAnVThjK5iUKtwDyATFIdyp6tq5yRpQOqRqigtAf45N%2F%2FBBVFNxNsDbqOGMho9vOSC8VsXTcojYQ7gYkMIzHSjd7mhpPuLkS4zbVrVK0LPtCx8AeRjBVPncmI0r2aL5YBzEU4D4ptluUpDNrkbxUnAzoh73bYsBqB9DDVFPazI8Mjppe2my%2Bn6LvYU0nrQRU0GXsODT7ZyGJZW5PE3fxC%2FHzGXu3znf49RwSoDB%2F%2FFR9RJHUYeNtKmgt3KaTeFoJPEFacSWUvBWlH6FVMjcyavMKXwn4A2Gs2TFr18IRkMwgqYJl2ZDXIe6YgylZsprKqG23V2EQ5S4%2BioRwa7kc6uLp7jLt88oLaiZ1DkaecK18bABQ%2BMxKzAx2oFZTUIoGRia0dmCn%2Bl191hkHJMo7lbkAzMx6rymTBB6x6adVdXLy6cnOOggl%2BYOe0njR7h4lT%2BC4%2B%2FXdu1qmwhPNlZKBocMHuEFtDCmXKord0jhFAG7f%2FgjGPoPOsMze5fOEgBDWX3LthO4a7MHc%2FIrJDya%2FI1Rp2U9WsZBb4%2F%2BcGaxRpiQLvzgfwCEersG%2FU%2FDsUOxSzT9ugD0nvkPPZiiRR0foDOIyK4RGXBPoWM9tqer5L4T3l2Xo%2BV7Ny2R%2FT%2Bv9nYT2Ncc%2FcsKKsownKSkwgY6pgEDlnQQ3P0JM7cFac44WuhixrtJtjbNwxjIysq%2FajYBY%2F%2BGOTB%2FKPrswOOgIVswDgl6Rfl56xCOfLcEfW%2F8kiLGf%2FOQtUoIBv74yDgE90CdMv3Nhwfzn7dPq45agAqNcH0S7J6vGBqUU8j3a8iytdiaTC1X5WQPRKWne7XJb%2Fb5se5DrQ4oJzZD05juN4WLWn12KxuMkx4UdyAwC9VaVJTd6mDidZgE&X-Amz-Signature=928ffcba3edf08fc9e88c210a44c0556a273b1831db00f57067b62fd6f5e3f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2JGI6U%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByowhkrUrxovIMvTBat7Y%2Fj4%2Fjc6KVMVYBSeSiE62QnAiBzzlLlyotYeSYc3PMnX5M1gqw4MnNj2LJe8fuykZ5qeiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ksqXDAnVThjK5iUKtwDyATFIdyp6tq5yRpQOqRqigtAf45N%2F%2FBBVFNxNsDbqOGMho9vOSC8VsXTcojYQ7gYkMIzHSjd7mhpPuLkS4zbVrVK0LPtCx8AeRjBVPncmI0r2aL5YBzEU4D4ptluUpDNrkbxUnAzoh73bYsBqB9DDVFPazI8Mjppe2my%2Bn6LvYU0nrQRU0GXsODT7ZyGJZW5PE3fxC%2FHzGXu3znf49RwSoDB%2F%2FFR9RJHUYeNtKmgt3KaTeFoJPEFacSWUvBWlH6FVMjcyavMKXwn4A2Gs2TFr18IRkMwgqYJl2ZDXIe6YgylZsprKqG23V2EQ5S4%2BioRwa7kc6uLp7jLt88oLaiZ1DkaecK18bABQ%2BMxKzAx2oFZTUIoGRia0dmCn%2Bl191hkHJMo7lbkAzMx6rymTBB6x6adVdXLy6cnOOggl%2BYOe0njR7h4lT%2BC4%2B%2FXdu1qmwhPNlZKBocMHuEFtDCmXKord0jhFAG7f%2FgjGPoPOsMze5fOEgBDWX3LthO4a7MHc%2FIrJDya%2FI1Rp2U9WsZBb4%2F%2BcGaxRpiQLvzgfwCEersG%2FU%2FDsUOxSzT9ugD0nvkPPZiiRR0foDOIyK4RGXBPoWM9tqer5L4T3l2Xo%2BV7Ny2R%2FT%2Bv9nYT2Ncc%2FcsKKsownKSkwgY6pgEDlnQQ3P0JM7cFac44WuhixrtJtjbNwxjIysq%2FajYBY%2F%2BGOTB%2FKPrswOOgIVswDgl6Rfl56xCOfLcEfW%2F8kiLGf%2FOQtUoIBv74yDgE90CdMv3Nhwfzn7dPq45agAqNcH0S7J6vGBqUU8j3a8iytdiaTC1X5WQPRKWne7XJb%2Fb5se5DrQ4oJzZD05juN4WLWn12KxuMkx4UdyAwC9VaVJTd6mDidZgE&X-Amz-Signature=a9f2d19870de7bbafeb60e4cc718468f0d04cde042b9248f5d7401df9def523d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2JGI6U%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByowhkrUrxovIMvTBat7Y%2Fj4%2Fjc6KVMVYBSeSiE62QnAiBzzlLlyotYeSYc3PMnX5M1gqw4MnNj2LJe8fuykZ5qeiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ksqXDAnVThjK5iUKtwDyATFIdyp6tq5yRpQOqRqigtAf45N%2F%2FBBVFNxNsDbqOGMho9vOSC8VsXTcojYQ7gYkMIzHSjd7mhpPuLkS4zbVrVK0LPtCx8AeRjBVPncmI0r2aL5YBzEU4D4ptluUpDNrkbxUnAzoh73bYsBqB9DDVFPazI8Mjppe2my%2Bn6LvYU0nrQRU0GXsODT7ZyGJZW5PE3fxC%2FHzGXu3znf49RwSoDB%2F%2FFR9RJHUYeNtKmgt3KaTeFoJPEFacSWUvBWlH6FVMjcyavMKXwn4A2Gs2TFr18IRkMwgqYJl2ZDXIe6YgylZsprKqG23V2EQ5S4%2BioRwa7kc6uLp7jLt88oLaiZ1DkaecK18bABQ%2BMxKzAx2oFZTUIoGRia0dmCn%2Bl191hkHJMo7lbkAzMx6rymTBB6x6adVdXLy6cnOOggl%2BYOe0njR7h4lT%2BC4%2B%2FXdu1qmwhPNlZKBocMHuEFtDCmXKord0jhFAG7f%2FgjGPoPOsMze5fOEgBDWX3LthO4a7MHc%2FIrJDya%2FI1Rp2U9WsZBb4%2F%2BcGaxRpiQLvzgfwCEersG%2FU%2FDsUOxSzT9ugD0nvkPPZiiRR0foDOIyK4RGXBPoWM9tqer5L4T3l2Xo%2BV7Ny2R%2FT%2Bv9nYT2Ncc%2FcsKKsownKSkwgY6pgEDlnQQ3P0JM7cFac44WuhixrtJtjbNwxjIysq%2FajYBY%2F%2BGOTB%2FKPrswOOgIVswDgl6Rfl56xCOfLcEfW%2F8kiLGf%2FOQtUoIBv74yDgE90CdMv3Nhwfzn7dPq45agAqNcH0S7J6vGBqUU8j3a8iytdiaTC1X5WQPRKWne7XJb%2Fb5se5DrQ4oJzZD05juN4WLWn12KxuMkx4UdyAwC9VaVJTd6mDidZgE&X-Amz-Signature=140acfdff27d70268eb2f65f81e5f252ec9b96117115bb6b26e710cf891317bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2JGI6U%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByowhkrUrxovIMvTBat7Y%2Fj4%2Fjc6KVMVYBSeSiE62QnAiBzzlLlyotYeSYc3PMnX5M1gqw4MnNj2LJe8fuykZ5qeiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ksqXDAnVThjK5iUKtwDyATFIdyp6tq5yRpQOqRqigtAf45N%2F%2FBBVFNxNsDbqOGMho9vOSC8VsXTcojYQ7gYkMIzHSjd7mhpPuLkS4zbVrVK0LPtCx8AeRjBVPncmI0r2aL5YBzEU4D4ptluUpDNrkbxUnAzoh73bYsBqB9DDVFPazI8Mjppe2my%2Bn6LvYU0nrQRU0GXsODT7ZyGJZW5PE3fxC%2FHzGXu3znf49RwSoDB%2F%2FFR9RJHUYeNtKmgt3KaTeFoJPEFacSWUvBWlH6FVMjcyavMKXwn4A2Gs2TFr18IRkMwgqYJl2ZDXIe6YgylZsprKqG23V2EQ5S4%2BioRwa7kc6uLp7jLt88oLaiZ1DkaecK18bABQ%2BMxKzAx2oFZTUIoGRia0dmCn%2Bl191hkHJMo7lbkAzMx6rymTBB6x6adVdXLy6cnOOggl%2BYOe0njR7h4lT%2BC4%2B%2FXdu1qmwhPNlZKBocMHuEFtDCmXKord0jhFAG7f%2FgjGPoPOsMze5fOEgBDWX3LthO4a7MHc%2FIrJDya%2FI1Rp2U9WsZBb4%2F%2BcGaxRpiQLvzgfwCEersG%2FU%2FDsUOxSzT9ugD0nvkPPZiiRR0foDOIyK4RGXBPoWM9tqer5L4T3l2Xo%2BV7Ny2R%2FT%2Bv9nYT2Ncc%2FcsKKsownKSkwgY6pgEDlnQQ3P0JM7cFac44WuhixrtJtjbNwxjIysq%2FajYBY%2F%2BGOTB%2FKPrswOOgIVswDgl6Rfl56xCOfLcEfW%2F8kiLGf%2FOQtUoIBv74yDgE90CdMv3Nhwfzn7dPq45agAqNcH0S7J6vGBqUU8j3a8iytdiaTC1X5WQPRKWne7XJb%2Fb5se5DrQ4oJzZD05juN4WLWn12KxuMkx4UdyAwC9VaVJTd6mDidZgE&X-Amz-Signature=6992d5e7e4b608c29b51852fe900891f54758a880e0e38719268531440848804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
