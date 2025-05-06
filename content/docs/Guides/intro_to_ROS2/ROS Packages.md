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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKPFHHZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Qq4xCtaa0VCJvC9%2FdBu1IK0ncDFF7Icml33zPMRhIgIhAL9JzPP7kxw38fB2ghWhdj1o6pacWDQVJBCpYr%2BPldA0Kv8DCEsQABoMNjM3NDIzMTgzODA1Igz7OtrcijYqZz02ngYq3AMHT%2F8MG67NsTDMNHGgo1c%2BCdGO%2Bu3URu7tMZftxp3MS9hiKQhLMY4E%2FXHR5vnR332ot%2FNPx2Ixv9V5tdnsn2xrGK8ubQb0rtQVENvwcc37yDzUYsR1J7X6D6vUqBg4mcwawAdaMtuWvWU2APrCfO7gjsAlLizq%2FJbll%2BFrqOvuTcOK1IVBqCtTGYkv7fA80sYyO52gd8iS8uPSdaB9pfhrKfyBVYKUqhsYhv6DZvdYpKnpdkPcYDsQCg69buta2tgdGCaDp%2FsJL2%2BA6I5ETCkKiCSVQFQ90DTjIoO3VSorG6A7PziQdNmd2XG3Aj8ZsWrb1O4TqwglrrHSnUzEYI86OhHs%2Fp%2B0SOO11C1tMMaF185IQt6Z6r6IYDHgWiOZlA42u9Ke9%2FubrichwEfwDcE8NjmGZBnkzadzRKE9G16H0ZfS610cqVkq8unscLWyBR3adiYvjVb5u2tYKEibVVGP%2BARhCeEeaiY8mGtNe5gVvuUafZyKhsTY%2BGdfnIFcSBotHKeNYXlCgjkcWnmyQkD5zjLPv%2F57OG%2Bu9HrYLkoRbQ10ALSzu0NTp4dJy1N4aLdNDZiC6scAKlXFLJ58Edq7oGHG6a5Gptl8v%2FV4Za%2FJt%2Bo%2B6SafyjMY3QAw%2BTDBmenABjqkAS9E3QAQyywg6SbOu9xbvoKHwFd38%2FD8FazmmZQkUst09g00KoNNWk6ddb033GA5h0MLafapHwOmR1Nks9%2FfTy%2BOjEzAhM6tyYSkrX6cmEYZ%2BqXyg8YDNgCrO6wCqpTIRmOIGtDIN%2FK%2FNRvnvqUVNrtAvF000F3ThO7R%2BssWpAbC8yPr0VkcsMjftaWPAVKEA6caR2T6Ct%2FxhurmmC09P%2BEWRPdH&X-Amz-Signature=fde126139abd7598f3a4795d862a7c79bd0a31c0a9aba1fdc89bc0b8709fb2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKPFHHZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Qq4xCtaa0VCJvC9%2FdBu1IK0ncDFF7Icml33zPMRhIgIhAL9JzPP7kxw38fB2ghWhdj1o6pacWDQVJBCpYr%2BPldA0Kv8DCEsQABoMNjM3NDIzMTgzODA1Igz7OtrcijYqZz02ngYq3AMHT%2F8MG67NsTDMNHGgo1c%2BCdGO%2Bu3URu7tMZftxp3MS9hiKQhLMY4E%2FXHR5vnR332ot%2FNPx2Ixv9V5tdnsn2xrGK8ubQb0rtQVENvwcc37yDzUYsR1J7X6D6vUqBg4mcwawAdaMtuWvWU2APrCfO7gjsAlLizq%2FJbll%2BFrqOvuTcOK1IVBqCtTGYkv7fA80sYyO52gd8iS8uPSdaB9pfhrKfyBVYKUqhsYhv6DZvdYpKnpdkPcYDsQCg69buta2tgdGCaDp%2FsJL2%2BA6I5ETCkKiCSVQFQ90DTjIoO3VSorG6A7PziQdNmd2XG3Aj8ZsWrb1O4TqwglrrHSnUzEYI86OhHs%2Fp%2B0SOO11C1tMMaF185IQt6Z6r6IYDHgWiOZlA42u9Ke9%2FubrichwEfwDcE8NjmGZBnkzadzRKE9G16H0ZfS610cqVkq8unscLWyBR3adiYvjVb5u2tYKEibVVGP%2BARhCeEeaiY8mGtNe5gVvuUafZyKhsTY%2BGdfnIFcSBotHKeNYXlCgjkcWnmyQkD5zjLPv%2F57OG%2Bu9HrYLkoRbQ10ALSzu0NTp4dJy1N4aLdNDZiC6scAKlXFLJ58Edq7oGHG6a5Gptl8v%2FV4Za%2FJt%2Bo%2B6SafyjMY3QAw%2BTDBmenABjqkAS9E3QAQyywg6SbOu9xbvoKHwFd38%2FD8FazmmZQkUst09g00KoNNWk6ddb033GA5h0MLafapHwOmR1Nks9%2FfTy%2BOjEzAhM6tyYSkrX6cmEYZ%2BqXyg8YDNgCrO6wCqpTIRmOIGtDIN%2FK%2FNRvnvqUVNrtAvF000F3ThO7R%2BssWpAbC8yPr0VkcsMjftaWPAVKEA6caR2T6Ct%2FxhurmmC09P%2BEWRPdH&X-Amz-Signature=98f45d2dff89e0b0672a596d99f24f95990492d75cfa6260c443088bed836c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKPFHHZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Qq4xCtaa0VCJvC9%2FdBu1IK0ncDFF7Icml33zPMRhIgIhAL9JzPP7kxw38fB2ghWhdj1o6pacWDQVJBCpYr%2BPldA0Kv8DCEsQABoMNjM3NDIzMTgzODA1Igz7OtrcijYqZz02ngYq3AMHT%2F8MG67NsTDMNHGgo1c%2BCdGO%2Bu3URu7tMZftxp3MS9hiKQhLMY4E%2FXHR5vnR332ot%2FNPx2Ixv9V5tdnsn2xrGK8ubQb0rtQVENvwcc37yDzUYsR1J7X6D6vUqBg4mcwawAdaMtuWvWU2APrCfO7gjsAlLizq%2FJbll%2BFrqOvuTcOK1IVBqCtTGYkv7fA80sYyO52gd8iS8uPSdaB9pfhrKfyBVYKUqhsYhv6DZvdYpKnpdkPcYDsQCg69buta2tgdGCaDp%2FsJL2%2BA6I5ETCkKiCSVQFQ90DTjIoO3VSorG6A7PziQdNmd2XG3Aj8ZsWrb1O4TqwglrrHSnUzEYI86OhHs%2Fp%2B0SOO11C1tMMaF185IQt6Z6r6IYDHgWiOZlA42u9Ke9%2FubrichwEfwDcE8NjmGZBnkzadzRKE9G16H0ZfS610cqVkq8unscLWyBR3adiYvjVb5u2tYKEibVVGP%2BARhCeEeaiY8mGtNe5gVvuUafZyKhsTY%2BGdfnIFcSBotHKeNYXlCgjkcWnmyQkD5zjLPv%2F57OG%2Bu9HrYLkoRbQ10ALSzu0NTp4dJy1N4aLdNDZiC6scAKlXFLJ58Edq7oGHG6a5Gptl8v%2FV4Za%2FJt%2Bo%2B6SafyjMY3QAw%2BTDBmenABjqkAS9E3QAQyywg6SbOu9xbvoKHwFd38%2FD8FazmmZQkUst09g00KoNNWk6ddb033GA5h0MLafapHwOmR1Nks9%2FfTy%2BOjEzAhM6tyYSkrX6cmEYZ%2BqXyg8YDNgCrO6wCqpTIRmOIGtDIN%2FK%2FNRvnvqUVNrtAvF000F3ThO7R%2BssWpAbC8yPr0VkcsMjftaWPAVKEA6caR2T6Ct%2FxhurmmC09P%2BEWRPdH&X-Amz-Signature=68996b1fdb3bf3f290f7fb20c41893cadd5498b6c86182145227c494d5c890f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKPFHHZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Qq4xCtaa0VCJvC9%2FdBu1IK0ncDFF7Icml33zPMRhIgIhAL9JzPP7kxw38fB2ghWhdj1o6pacWDQVJBCpYr%2BPldA0Kv8DCEsQABoMNjM3NDIzMTgzODA1Igz7OtrcijYqZz02ngYq3AMHT%2F8MG67NsTDMNHGgo1c%2BCdGO%2Bu3URu7tMZftxp3MS9hiKQhLMY4E%2FXHR5vnR332ot%2FNPx2Ixv9V5tdnsn2xrGK8ubQb0rtQVENvwcc37yDzUYsR1J7X6D6vUqBg4mcwawAdaMtuWvWU2APrCfO7gjsAlLizq%2FJbll%2BFrqOvuTcOK1IVBqCtTGYkv7fA80sYyO52gd8iS8uPSdaB9pfhrKfyBVYKUqhsYhv6DZvdYpKnpdkPcYDsQCg69buta2tgdGCaDp%2FsJL2%2BA6I5ETCkKiCSVQFQ90DTjIoO3VSorG6A7PziQdNmd2XG3Aj8ZsWrb1O4TqwglrrHSnUzEYI86OhHs%2Fp%2B0SOO11C1tMMaF185IQt6Z6r6IYDHgWiOZlA42u9Ke9%2FubrichwEfwDcE8NjmGZBnkzadzRKE9G16H0ZfS610cqVkq8unscLWyBR3adiYvjVb5u2tYKEibVVGP%2BARhCeEeaiY8mGtNe5gVvuUafZyKhsTY%2BGdfnIFcSBotHKeNYXlCgjkcWnmyQkD5zjLPv%2F57OG%2Bu9HrYLkoRbQ10ALSzu0NTp4dJy1N4aLdNDZiC6scAKlXFLJ58Edq7oGHG6a5Gptl8v%2FV4Za%2FJt%2Bo%2B6SafyjMY3QAw%2BTDBmenABjqkAS9E3QAQyywg6SbOu9xbvoKHwFd38%2FD8FazmmZQkUst09g00KoNNWk6ddb033GA5h0MLafapHwOmR1Nks9%2FfTy%2BOjEzAhM6tyYSkrX6cmEYZ%2BqXyg8YDNgCrO6wCqpTIRmOIGtDIN%2FK%2FNRvnvqUVNrtAvF000F3ThO7R%2BssWpAbC8yPr0VkcsMjftaWPAVKEA6caR2T6Ct%2FxhurmmC09P%2BEWRPdH&X-Amz-Signature=e32287160f2ba9efcb82eb5767e97c83ff6c1757c201f9e43c60b9b0c0960afa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKPFHHZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Qq4xCtaa0VCJvC9%2FdBu1IK0ncDFF7Icml33zPMRhIgIhAL9JzPP7kxw38fB2ghWhdj1o6pacWDQVJBCpYr%2BPldA0Kv8DCEsQABoMNjM3NDIzMTgzODA1Igz7OtrcijYqZz02ngYq3AMHT%2F8MG67NsTDMNHGgo1c%2BCdGO%2Bu3URu7tMZftxp3MS9hiKQhLMY4E%2FXHR5vnR332ot%2FNPx2Ixv9V5tdnsn2xrGK8ubQb0rtQVENvwcc37yDzUYsR1J7X6D6vUqBg4mcwawAdaMtuWvWU2APrCfO7gjsAlLizq%2FJbll%2BFrqOvuTcOK1IVBqCtTGYkv7fA80sYyO52gd8iS8uPSdaB9pfhrKfyBVYKUqhsYhv6DZvdYpKnpdkPcYDsQCg69buta2tgdGCaDp%2FsJL2%2BA6I5ETCkKiCSVQFQ90DTjIoO3VSorG6A7PziQdNmd2XG3Aj8ZsWrb1O4TqwglrrHSnUzEYI86OhHs%2Fp%2B0SOO11C1tMMaF185IQt6Z6r6IYDHgWiOZlA42u9Ke9%2FubrichwEfwDcE8NjmGZBnkzadzRKE9G16H0ZfS610cqVkq8unscLWyBR3adiYvjVb5u2tYKEibVVGP%2BARhCeEeaiY8mGtNe5gVvuUafZyKhsTY%2BGdfnIFcSBotHKeNYXlCgjkcWnmyQkD5zjLPv%2F57OG%2Bu9HrYLkoRbQ10ALSzu0NTp4dJy1N4aLdNDZiC6scAKlXFLJ58Edq7oGHG6a5Gptl8v%2FV4Za%2FJt%2Bo%2B6SafyjMY3QAw%2BTDBmenABjqkAS9E3QAQyywg6SbOu9xbvoKHwFd38%2FD8FazmmZQkUst09g00KoNNWk6ddb033GA5h0MLafapHwOmR1Nks9%2FfTy%2BOjEzAhM6tyYSkrX6cmEYZ%2BqXyg8YDNgCrO6wCqpTIRmOIGtDIN%2FK%2FNRvnvqUVNrtAvF000F3ThO7R%2BssWpAbC8yPr0VkcsMjftaWPAVKEA6caR2T6Ct%2FxhurmmC09P%2BEWRPdH&X-Amz-Signature=2b20eddc1cde93bf5c3868073ee3d8148c4b4fe88d52b03e0fedc849d2468bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKPFHHZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Qq4xCtaa0VCJvC9%2FdBu1IK0ncDFF7Icml33zPMRhIgIhAL9JzPP7kxw38fB2ghWhdj1o6pacWDQVJBCpYr%2BPldA0Kv8DCEsQABoMNjM3NDIzMTgzODA1Igz7OtrcijYqZz02ngYq3AMHT%2F8MG67NsTDMNHGgo1c%2BCdGO%2Bu3URu7tMZftxp3MS9hiKQhLMY4E%2FXHR5vnR332ot%2FNPx2Ixv9V5tdnsn2xrGK8ubQb0rtQVENvwcc37yDzUYsR1J7X6D6vUqBg4mcwawAdaMtuWvWU2APrCfO7gjsAlLizq%2FJbll%2BFrqOvuTcOK1IVBqCtTGYkv7fA80sYyO52gd8iS8uPSdaB9pfhrKfyBVYKUqhsYhv6DZvdYpKnpdkPcYDsQCg69buta2tgdGCaDp%2FsJL2%2BA6I5ETCkKiCSVQFQ90DTjIoO3VSorG6A7PziQdNmd2XG3Aj8ZsWrb1O4TqwglrrHSnUzEYI86OhHs%2Fp%2B0SOO11C1tMMaF185IQt6Z6r6IYDHgWiOZlA42u9Ke9%2FubrichwEfwDcE8NjmGZBnkzadzRKE9G16H0ZfS610cqVkq8unscLWyBR3adiYvjVb5u2tYKEibVVGP%2BARhCeEeaiY8mGtNe5gVvuUafZyKhsTY%2BGdfnIFcSBotHKeNYXlCgjkcWnmyQkD5zjLPv%2F57OG%2Bu9HrYLkoRbQ10ALSzu0NTp4dJy1N4aLdNDZiC6scAKlXFLJ58Edq7oGHG6a5Gptl8v%2FV4Za%2FJt%2Bo%2B6SafyjMY3QAw%2BTDBmenABjqkAS9E3QAQyywg6SbOu9xbvoKHwFd38%2FD8FazmmZQkUst09g00KoNNWk6ddb033GA5h0MLafapHwOmR1Nks9%2FfTy%2BOjEzAhM6tyYSkrX6cmEYZ%2BqXyg8YDNgCrO6wCqpTIRmOIGtDIN%2FK%2FNRvnvqUVNrtAvF000F3ThO7R%2BssWpAbC8yPr0VkcsMjftaWPAVKEA6caR2T6Ct%2FxhurmmC09P%2BEWRPdH&X-Amz-Signature=5f2c425b04b5158f370187ba0eb7949cd4e36bd4d1cf2bdfd47b14c109f8e1e2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKPFHHZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Qq4xCtaa0VCJvC9%2FdBu1IK0ncDFF7Icml33zPMRhIgIhAL9JzPP7kxw38fB2ghWhdj1o6pacWDQVJBCpYr%2BPldA0Kv8DCEsQABoMNjM3NDIzMTgzODA1Igz7OtrcijYqZz02ngYq3AMHT%2F8MG67NsTDMNHGgo1c%2BCdGO%2Bu3URu7tMZftxp3MS9hiKQhLMY4E%2FXHR5vnR332ot%2FNPx2Ixv9V5tdnsn2xrGK8ubQb0rtQVENvwcc37yDzUYsR1J7X6D6vUqBg4mcwawAdaMtuWvWU2APrCfO7gjsAlLizq%2FJbll%2BFrqOvuTcOK1IVBqCtTGYkv7fA80sYyO52gd8iS8uPSdaB9pfhrKfyBVYKUqhsYhv6DZvdYpKnpdkPcYDsQCg69buta2tgdGCaDp%2FsJL2%2BA6I5ETCkKiCSVQFQ90DTjIoO3VSorG6A7PziQdNmd2XG3Aj8ZsWrb1O4TqwglrrHSnUzEYI86OhHs%2Fp%2B0SOO11C1tMMaF185IQt6Z6r6IYDHgWiOZlA42u9Ke9%2FubrichwEfwDcE8NjmGZBnkzadzRKE9G16H0ZfS610cqVkq8unscLWyBR3adiYvjVb5u2tYKEibVVGP%2BARhCeEeaiY8mGtNe5gVvuUafZyKhsTY%2BGdfnIFcSBotHKeNYXlCgjkcWnmyQkD5zjLPv%2F57OG%2Bu9HrYLkoRbQ10ALSzu0NTp4dJy1N4aLdNDZiC6scAKlXFLJ58Edq7oGHG6a5Gptl8v%2FV4Za%2FJt%2Bo%2B6SafyjMY3QAw%2BTDBmenABjqkAS9E3QAQyywg6SbOu9xbvoKHwFd38%2FD8FazmmZQkUst09g00KoNNWk6ddb033GA5h0MLafapHwOmR1Nks9%2FfTy%2BOjEzAhM6tyYSkrX6cmEYZ%2BqXyg8YDNgCrO6wCqpTIRmOIGtDIN%2FK%2FNRvnvqUVNrtAvF000F3ThO7R%2BssWpAbC8yPr0VkcsMjftaWPAVKEA6caR2T6Ct%2FxhurmmC09P%2BEWRPdH&X-Amz-Signature=5fb1bc2111353bc9c3f5c6a0a1905569d7d537edff76241a14531be2906057aa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
