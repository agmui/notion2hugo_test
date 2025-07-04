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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UBTINX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGv4seBrv8LhOwZmvunm2ZhtXFCm12eHcNMLq0pNK0X6AiEA%2FjxyBkOWkF%2FtSV%2BsZIt9N1Bivvh99nWyT67yR0FU57Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBE30XCi528sk5n3VCrcA3JiGhjqBFCEgF7yu2FlpObg8OwBTmFyHb2K0%2Fz80InUGdhuQKY1wFGgrv2XhybVLzKx1P1f%2BSuZaFu9pfGy%2FjleLpJJcAW83S4MqGwAIM7duF%2FtXPN1aqEGhbJGeX%2BczXrh61Pkm5i0YakyQ1XwKhsnu9JlEEuMcOGkCTU9iMznGZgYq6CKfmYCj%2FGySWEuUaGYd1Il2PRP6Dc%2B9xrap%2FTYLvi2AOMVqTIsyDjO%2BVEBhbJizhMlj0uQ6CB9vlZw1f8T5IosFAg6hCnqwjuZWrRjGwolH3sAWSaSOoDqCPhTz1FC9R0dXgFPjgaruglyV5yzwDIjhWl4es4zigUUTRQbFhGIjNuPPXm%2Bg2TKhSBFnOwfh6DZdlPO9Zc%2FZb8LNuvZG360xRlFRDt1bmqiBCO3CmaIMa3XkLwlL3HY67o%2FILC3HYu4INQjsdYlLtFKomUDM%2FgNM3r32GCo09n5HwVCF47T0C1OqkUevwF9k%2FffMJEA0Mw%2FJLckLVWWqIOHacI0kKhdWbUSBezZO7tOn8dqulpu20RBrbS9BVGbTc9aZZ7DVjRX84QiNQH3EkSxB8Lzd65f8zSQta3n0mqE8UedJQ%2B%2BLoHJnYUQRzDZ9x9VTyn2UjPJf7RBXF1pMM68nsMGOqUBtYlBH%2FbfVVxuBotBkqc6qwC%2BnB2H4owSJBsR9imqd%2FBRrfFesqpqIE%2FJxiyjAoPsN3FIJY%2FDNh8KvCCRhcAXqDSOC5bhrrwruiEDxMjbs%2FTyrtg1MaO9ehLuDZ9FE27ad%2FTNTRE%2BoApL1kQ1taRM2aRhxiwUI64YGdPkQkeuNqD%2Fwhz72Xg0k6vApMmGpXcTT79P5%2FNCbiF%2BwfWNHgbfIpRyXQ6f&X-Amz-Signature=8c709d251766cf7991f3bc3022b1b090c5a9b038b3aca715f0fef1c924bd61c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UBTINX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGv4seBrv8LhOwZmvunm2ZhtXFCm12eHcNMLq0pNK0X6AiEA%2FjxyBkOWkF%2FtSV%2BsZIt9N1Bivvh99nWyT67yR0FU57Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBE30XCi528sk5n3VCrcA3JiGhjqBFCEgF7yu2FlpObg8OwBTmFyHb2K0%2Fz80InUGdhuQKY1wFGgrv2XhybVLzKx1P1f%2BSuZaFu9pfGy%2FjleLpJJcAW83S4MqGwAIM7duF%2FtXPN1aqEGhbJGeX%2BczXrh61Pkm5i0YakyQ1XwKhsnu9JlEEuMcOGkCTU9iMznGZgYq6CKfmYCj%2FGySWEuUaGYd1Il2PRP6Dc%2B9xrap%2FTYLvi2AOMVqTIsyDjO%2BVEBhbJizhMlj0uQ6CB9vlZw1f8T5IosFAg6hCnqwjuZWrRjGwolH3sAWSaSOoDqCPhTz1FC9R0dXgFPjgaruglyV5yzwDIjhWl4es4zigUUTRQbFhGIjNuPPXm%2Bg2TKhSBFnOwfh6DZdlPO9Zc%2FZb8LNuvZG360xRlFRDt1bmqiBCO3CmaIMa3XkLwlL3HY67o%2FILC3HYu4INQjsdYlLtFKomUDM%2FgNM3r32GCo09n5HwVCF47T0C1OqkUevwF9k%2FffMJEA0Mw%2FJLckLVWWqIOHacI0kKhdWbUSBezZO7tOn8dqulpu20RBrbS9BVGbTc9aZZ7DVjRX84QiNQH3EkSxB8Lzd65f8zSQta3n0mqE8UedJQ%2B%2BLoHJnYUQRzDZ9x9VTyn2UjPJf7RBXF1pMM68nsMGOqUBtYlBH%2FbfVVxuBotBkqc6qwC%2BnB2H4owSJBsR9imqd%2FBRrfFesqpqIE%2FJxiyjAoPsN3FIJY%2FDNh8KvCCRhcAXqDSOC5bhrrwruiEDxMjbs%2FTyrtg1MaO9ehLuDZ9FE27ad%2FTNTRE%2BoApL1kQ1taRM2aRhxiwUI64YGdPkQkeuNqD%2Fwhz72Xg0k6vApMmGpXcTT79P5%2FNCbiF%2BwfWNHgbfIpRyXQ6f&X-Amz-Signature=9dac6a6e223965a6311ee5a47072b12f3282325cfb3440ff413feae4f5703864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UBTINX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGv4seBrv8LhOwZmvunm2ZhtXFCm12eHcNMLq0pNK0X6AiEA%2FjxyBkOWkF%2FtSV%2BsZIt9N1Bivvh99nWyT67yR0FU57Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBE30XCi528sk5n3VCrcA3JiGhjqBFCEgF7yu2FlpObg8OwBTmFyHb2K0%2Fz80InUGdhuQKY1wFGgrv2XhybVLzKx1P1f%2BSuZaFu9pfGy%2FjleLpJJcAW83S4MqGwAIM7duF%2FtXPN1aqEGhbJGeX%2BczXrh61Pkm5i0YakyQ1XwKhsnu9JlEEuMcOGkCTU9iMznGZgYq6CKfmYCj%2FGySWEuUaGYd1Il2PRP6Dc%2B9xrap%2FTYLvi2AOMVqTIsyDjO%2BVEBhbJizhMlj0uQ6CB9vlZw1f8T5IosFAg6hCnqwjuZWrRjGwolH3sAWSaSOoDqCPhTz1FC9R0dXgFPjgaruglyV5yzwDIjhWl4es4zigUUTRQbFhGIjNuPPXm%2Bg2TKhSBFnOwfh6DZdlPO9Zc%2FZb8LNuvZG360xRlFRDt1bmqiBCO3CmaIMa3XkLwlL3HY67o%2FILC3HYu4INQjsdYlLtFKomUDM%2FgNM3r32GCo09n5HwVCF47T0C1OqkUevwF9k%2FffMJEA0Mw%2FJLckLVWWqIOHacI0kKhdWbUSBezZO7tOn8dqulpu20RBrbS9BVGbTc9aZZ7DVjRX84QiNQH3EkSxB8Lzd65f8zSQta3n0mqE8UedJQ%2B%2BLoHJnYUQRzDZ9x9VTyn2UjPJf7RBXF1pMM68nsMGOqUBtYlBH%2FbfVVxuBotBkqc6qwC%2BnB2H4owSJBsR9imqd%2FBRrfFesqpqIE%2FJxiyjAoPsN3FIJY%2FDNh8KvCCRhcAXqDSOC5bhrrwruiEDxMjbs%2FTyrtg1MaO9ehLuDZ9FE27ad%2FTNTRE%2BoApL1kQ1taRM2aRhxiwUI64YGdPkQkeuNqD%2Fwhz72Xg0k6vApMmGpXcTT79P5%2FNCbiF%2BwfWNHgbfIpRyXQ6f&X-Amz-Signature=c4ad9401ea12ee2532dca9ccb4d3583bd83f2adc4ed37a5b12e6d6777323a839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UBTINX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGv4seBrv8LhOwZmvunm2ZhtXFCm12eHcNMLq0pNK0X6AiEA%2FjxyBkOWkF%2FtSV%2BsZIt9N1Bivvh99nWyT67yR0FU57Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBE30XCi528sk5n3VCrcA3JiGhjqBFCEgF7yu2FlpObg8OwBTmFyHb2K0%2Fz80InUGdhuQKY1wFGgrv2XhybVLzKx1P1f%2BSuZaFu9pfGy%2FjleLpJJcAW83S4MqGwAIM7duF%2FtXPN1aqEGhbJGeX%2BczXrh61Pkm5i0YakyQ1XwKhsnu9JlEEuMcOGkCTU9iMznGZgYq6CKfmYCj%2FGySWEuUaGYd1Il2PRP6Dc%2B9xrap%2FTYLvi2AOMVqTIsyDjO%2BVEBhbJizhMlj0uQ6CB9vlZw1f8T5IosFAg6hCnqwjuZWrRjGwolH3sAWSaSOoDqCPhTz1FC9R0dXgFPjgaruglyV5yzwDIjhWl4es4zigUUTRQbFhGIjNuPPXm%2Bg2TKhSBFnOwfh6DZdlPO9Zc%2FZb8LNuvZG360xRlFRDt1bmqiBCO3CmaIMa3XkLwlL3HY67o%2FILC3HYu4INQjsdYlLtFKomUDM%2FgNM3r32GCo09n5HwVCF47T0C1OqkUevwF9k%2FffMJEA0Mw%2FJLckLVWWqIOHacI0kKhdWbUSBezZO7tOn8dqulpu20RBrbS9BVGbTc9aZZ7DVjRX84QiNQH3EkSxB8Lzd65f8zSQta3n0mqE8UedJQ%2B%2BLoHJnYUQRzDZ9x9VTyn2UjPJf7RBXF1pMM68nsMGOqUBtYlBH%2FbfVVxuBotBkqc6qwC%2BnB2H4owSJBsR9imqd%2FBRrfFesqpqIE%2FJxiyjAoPsN3FIJY%2FDNh8KvCCRhcAXqDSOC5bhrrwruiEDxMjbs%2FTyrtg1MaO9ehLuDZ9FE27ad%2FTNTRE%2BoApL1kQ1taRM2aRhxiwUI64YGdPkQkeuNqD%2Fwhz72Xg0k6vApMmGpXcTT79P5%2FNCbiF%2BwfWNHgbfIpRyXQ6f&X-Amz-Signature=906e87b2d8e4c19fa0a2fbbf2e04152572efc5e088f08e188351e4de550e3abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UBTINX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGv4seBrv8LhOwZmvunm2ZhtXFCm12eHcNMLq0pNK0X6AiEA%2FjxyBkOWkF%2FtSV%2BsZIt9N1Bivvh99nWyT67yR0FU57Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBE30XCi528sk5n3VCrcA3JiGhjqBFCEgF7yu2FlpObg8OwBTmFyHb2K0%2Fz80InUGdhuQKY1wFGgrv2XhybVLzKx1P1f%2BSuZaFu9pfGy%2FjleLpJJcAW83S4MqGwAIM7duF%2FtXPN1aqEGhbJGeX%2BczXrh61Pkm5i0YakyQ1XwKhsnu9JlEEuMcOGkCTU9iMznGZgYq6CKfmYCj%2FGySWEuUaGYd1Il2PRP6Dc%2B9xrap%2FTYLvi2AOMVqTIsyDjO%2BVEBhbJizhMlj0uQ6CB9vlZw1f8T5IosFAg6hCnqwjuZWrRjGwolH3sAWSaSOoDqCPhTz1FC9R0dXgFPjgaruglyV5yzwDIjhWl4es4zigUUTRQbFhGIjNuPPXm%2Bg2TKhSBFnOwfh6DZdlPO9Zc%2FZb8LNuvZG360xRlFRDt1bmqiBCO3CmaIMa3XkLwlL3HY67o%2FILC3HYu4INQjsdYlLtFKomUDM%2FgNM3r32GCo09n5HwVCF47T0C1OqkUevwF9k%2FffMJEA0Mw%2FJLckLVWWqIOHacI0kKhdWbUSBezZO7tOn8dqulpu20RBrbS9BVGbTc9aZZ7DVjRX84QiNQH3EkSxB8Lzd65f8zSQta3n0mqE8UedJQ%2B%2BLoHJnYUQRzDZ9x9VTyn2UjPJf7RBXF1pMM68nsMGOqUBtYlBH%2FbfVVxuBotBkqc6qwC%2BnB2H4owSJBsR9imqd%2FBRrfFesqpqIE%2FJxiyjAoPsN3FIJY%2FDNh8KvCCRhcAXqDSOC5bhrrwruiEDxMjbs%2FTyrtg1MaO9ehLuDZ9FE27ad%2FTNTRE%2BoApL1kQ1taRM2aRhxiwUI64YGdPkQkeuNqD%2Fwhz72Xg0k6vApMmGpXcTT79P5%2FNCbiF%2BwfWNHgbfIpRyXQ6f&X-Amz-Signature=79492f57e431377abf1ae1b32202a0a1107ce8ecb69be850d0d950356ec0168d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UBTINX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGv4seBrv8LhOwZmvunm2ZhtXFCm12eHcNMLq0pNK0X6AiEA%2FjxyBkOWkF%2FtSV%2BsZIt9N1Bivvh99nWyT67yR0FU57Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBE30XCi528sk5n3VCrcA3JiGhjqBFCEgF7yu2FlpObg8OwBTmFyHb2K0%2Fz80InUGdhuQKY1wFGgrv2XhybVLzKx1P1f%2BSuZaFu9pfGy%2FjleLpJJcAW83S4MqGwAIM7duF%2FtXPN1aqEGhbJGeX%2BczXrh61Pkm5i0YakyQ1XwKhsnu9JlEEuMcOGkCTU9iMznGZgYq6CKfmYCj%2FGySWEuUaGYd1Il2PRP6Dc%2B9xrap%2FTYLvi2AOMVqTIsyDjO%2BVEBhbJizhMlj0uQ6CB9vlZw1f8T5IosFAg6hCnqwjuZWrRjGwolH3sAWSaSOoDqCPhTz1FC9R0dXgFPjgaruglyV5yzwDIjhWl4es4zigUUTRQbFhGIjNuPPXm%2Bg2TKhSBFnOwfh6DZdlPO9Zc%2FZb8LNuvZG360xRlFRDt1bmqiBCO3CmaIMa3XkLwlL3HY67o%2FILC3HYu4INQjsdYlLtFKomUDM%2FgNM3r32GCo09n5HwVCF47T0C1OqkUevwF9k%2FffMJEA0Mw%2FJLckLVWWqIOHacI0kKhdWbUSBezZO7tOn8dqulpu20RBrbS9BVGbTc9aZZ7DVjRX84QiNQH3EkSxB8Lzd65f8zSQta3n0mqE8UedJQ%2B%2BLoHJnYUQRzDZ9x9VTyn2UjPJf7RBXF1pMM68nsMGOqUBtYlBH%2FbfVVxuBotBkqc6qwC%2BnB2H4owSJBsR9imqd%2FBRrfFesqpqIE%2FJxiyjAoPsN3FIJY%2FDNh8KvCCRhcAXqDSOC5bhrrwruiEDxMjbs%2FTyrtg1MaO9ehLuDZ9FE27ad%2FTNTRE%2BoApL1kQ1taRM2aRhxiwUI64YGdPkQkeuNqD%2Fwhz72Xg0k6vApMmGpXcTT79P5%2FNCbiF%2BwfWNHgbfIpRyXQ6f&X-Amz-Signature=46657a6ef45813385b0b8ae41a02f3f339b862dd973268fafc09689988abd98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UBTINX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGv4seBrv8LhOwZmvunm2ZhtXFCm12eHcNMLq0pNK0X6AiEA%2FjxyBkOWkF%2FtSV%2BsZIt9N1Bivvh99nWyT67yR0FU57Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBE30XCi528sk5n3VCrcA3JiGhjqBFCEgF7yu2FlpObg8OwBTmFyHb2K0%2Fz80InUGdhuQKY1wFGgrv2XhybVLzKx1P1f%2BSuZaFu9pfGy%2FjleLpJJcAW83S4MqGwAIM7duF%2FtXPN1aqEGhbJGeX%2BczXrh61Pkm5i0YakyQ1XwKhsnu9JlEEuMcOGkCTU9iMznGZgYq6CKfmYCj%2FGySWEuUaGYd1Il2PRP6Dc%2B9xrap%2FTYLvi2AOMVqTIsyDjO%2BVEBhbJizhMlj0uQ6CB9vlZw1f8T5IosFAg6hCnqwjuZWrRjGwolH3sAWSaSOoDqCPhTz1FC9R0dXgFPjgaruglyV5yzwDIjhWl4es4zigUUTRQbFhGIjNuPPXm%2Bg2TKhSBFnOwfh6DZdlPO9Zc%2FZb8LNuvZG360xRlFRDt1bmqiBCO3CmaIMa3XkLwlL3HY67o%2FILC3HYu4INQjsdYlLtFKomUDM%2FgNM3r32GCo09n5HwVCF47T0C1OqkUevwF9k%2FffMJEA0Mw%2FJLckLVWWqIOHacI0kKhdWbUSBezZO7tOn8dqulpu20RBrbS9BVGbTc9aZZ7DVjRX84QiNQH3EkSxB8Lzd65f8zSQta3n0mqE8UedJQ%2B%2BLoHJnYUQRzDZ9x9VTyn2UjPJf7RBXF1pMM68nsMGOqUBtYlBH%2FbfVVxuBotBkqc6qwC%2BnB2H4owSJBsR9imqd%2FBRrfFesqpqIE%2FJxiyjAoPsN3FIJY%2FDNh8KvCCRhcAXqDSOC5bhrrwruiEDxMjbs%2FTyrtg1MaO9ehLuDZ9FE27ad%2FTNTRE%2BoApL1kQ1taRM2aRhxiwUI64YGdPkQkeuNqD%2Fwhz72Xg0k6vApMmGpXcTT79P5%2FNCbiF%2BwfWNHgbfIpRyXQ6f&X-Amz-Signature=5e4e7bfbf4e103593d2c0d8e0ea29981357d8c930cfc3b571f2872e628b50ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
