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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE5XVYR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCfdjhP0Wmfpk4TcKNpXJr4BXgl%2BiJzJXTGhrpgR3ykWAIgX0v7wenBPhca8OgZ4k3HgIj%2BP%2B3HTvrHzOvp0KzzRKkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BoYmpNGJHmbw5kSrcA4EZoHXVbEbfHhjlbUyom1zIzkhBdZXg9xxgwDqDbkSP8yev3Bsv%2BEQtvT7vGdk8IydkZ7UxNl6Qp%2FTRcfZKW6Hw1eMcDD%2FBXOdrLhb4ltV2LNzCAZriShy2FRr3YMO4EOQCdUwTqOJLiwuRjiAPpug%2FB2b5R6At2H6TUcnQkpGVd%2BRz51lpSKiuAJtjYhGbigmI3YFCc161ynSueNL9njKi2On9YuvFSgi0MaKUcSY1d3q3BNWleebfUm8U90gR%2F282n%2Fk5pfQ1q%2BJuSjtIErKB%2FOLxWdx8OwfTEa%2FnF9J%2FPLNSqA0B573xV1tuVslMvsKfnxv%2Ba6Zo%2BBwL5QHeK7UtVsSf8pz4xNi7S%2FvFdNpc9Ffyp5Qz2%2FD%2FnHePFu4YaPIas6a3a4ZXcH8vFJFLPkFYqVwoS1OuFfwYLG0viXl0EyP6YiMzScB7%2BTUpHBsgSe5zbPdx6Ut2Joyhvbt8mZLlKdmq%2FQ%2B60a%2BoTT15LSplZHBRoZaJ056eZmwzDrRqCFewSyRj2m06SkF2VXQTqYR0DTfVMhFlCCZVlFZHhQaW2bVX806SY3de0ZUmDC7b2VXn2nG6i5gI4aRcurVZq1%2BaNHScuH14vFrgaSPi93qiiMkhDqx4yf5gKcNqMLKh5rwGOqUBbtKOMT9QY0Hjh6AX97qVKL5131kdX33dL6V1SKFUdYIYpHQjfpNNQnqje%2FbADE6qSMyIWI%2B9GCJl4zlbYgckoKTb5ZmQ0TWlQ%2BnH1BONOsweBhLroYdWh7mpDqugx%2BxpcMaqReSVzUimHAt2rdf5GMKxOvqiDNRk4jjlmtNGDNjfO7tjma4rJ5yuYx1ueJYgBk8iE0ViXRoITENY1pf8TP%2FPpWGk&X-Amz-Signature=aefd3b623bb3a9b8986acba5a35f749b7766b9b66e4496cf2eb834ce2ba42332&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE5XVYR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCfdjhP0Wmfpk4TcKNpXJr4BXgl%2BiJzJXTGhrpgR3ykWAIgX0v7wenBPhca8OgZ4k3HgIj%2BP%2B3HTvrHzOvp0KzzRKkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BoYmpNGJHmbw5kSrcA4EZoHXVbEbfHhjlbUyom1zIzkhBdZXg9xxgwDqDbkSP8yev3Bsv%2BEQtvT7vGdk8IydkZ7UxNl6Qp%2FTRcfZKW6Hw1eMcDD%2FBXOdrLhb4ltV2LNzCAZriShy2FRr3YMO4EOQCdUwTqOJLiwuRjiAPpug%2FB2b5R6At2H6TUcnQkpGVd%2BRz51lpSKiuAJtjYhGbigmI3YFCc161ynSueNL9njKi2On9YuvFSgi0MaKUcSY1d3q3BNWleebfUm8U90gR%2F282n%2Fk5pfQ1q%2BJuSjtIErKB%2FOLxWdx8OwfTEa%2FnF9J%2FPLNSqA0B573xV1tuVslMvsKfnxv%2Ba6Zo%2BBwL5QHeK7UtVsSf8pz4xNi7S%2FvFdNpc9Ffyp5Qz2%2FD%2FnHePFu4YaPIas6a3a4ZXcH8vFJFLPkFYqVwoS1OuFfwYLG0viXl0EyP6YiMzScB7%2BTUpHBsgSe5zbPdx6Ut2Joyhvbt8mZLlKdmq%2FQ%2B60a%2BoTT15LSplZHBRoZaJ056eZmwzDrRqCFewSyRj2m06SkF2VXQTqYR0DTfVMhFlCCZVlFZHhQaW2bVX806SY3de0ZUmDC7b2VXn2nG6i5gI4aRcurVZq1%2BaNHScuH14vFrgaSPi93qiiMkhDqx4yf5gKcNqMLKh5rwGOqUBbtKOMT9QY0Hjh6AX97qVKL5131kdX33dL6V1SKFUdYIYpHQjfpNNQnqje%2FbADE6qSMyIWI%2B9GCJl4zlbYgckoKTb5ZmQ0TWlQ%2BnH1BONOsweBhLroYdWh7mpDqugx%2BxpcMaqReSVzUimHAt2rdf5GMKxOvqiDNRk4jjlmtNGDNjfO7tjma4rJ5yuYx1ueJYgBk8iE0ViXRoITENY1pf8TP%2FPpWGk&X-Amz-Signature=18248abb4ba647d1ab0d5ad24b66b6f0989a4e28591d802e2c134bbe8c7b446a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE5XVYR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCfdjhP0Wmfpk4TcKNpXJr4BXgl%2BiJzJXTGhrpgR3ykWAIgX0v7wenBPhca8OgZ4k3HgIj%2BP%2B3HTvrHzOvp0KzzRKkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BoYmpNGJHmbw5kSrcA4EZoHXVbEbfHhjlbUyom1zIzkhBdZXg9xxgwDqDbkSP8yev3Bsv%2BEQtvT7vGdk8IydkZ7UxNl6Qp%2FTRcfZKW6Hw1eMcDD%2FBXOdrLhb4ltV2LNzCAZriShy2FRr3YMO4EOQCdUwTqOJLiwuRjiAPpug%2FB2b5R6At2H6TUcnQkpGVd%2BRz51lpSKiuAJtjYhGbigmI3YFCc161ynSueNL9njKi2On9YuvFSgi0MaKUcSY1d3q3BNWleebfUm8U90gR%2F282n%2Fk5pfQ1q%2BJuSjtIErKB%2FOLxWdx8OwfTEa%2FnF9J%2FPLNSqA0B573xV1tuVslMvsKfnxv%2Ba6Zo%2BBwL5QHeK7UtVsSf8pz4xNi7S%2FvFdNpc9Ffyp5Qz2%2FD%2FnHePFu4YaPIas6a3a4ZXcH8vFJFLPkFYqVwoS1OuFfwYLG0viXl0EyP6YiMzScB7%2BTUpHBsgSe5zbPdx6Ut2Joyhvbt8mZLlKdmq%2FQ%2B60a%2BoTT15LSplZHBRoZaJ056eZmwzDrRqCFewSyRj2m06SkF2VXQTqYR0DTfVMhFlCCZVlFZHhQaW2bVX806SY3de0ZUmDC7b2VXn2nG6i5gI4aRcurVZq1%2BaNHScuH14vFrgaSPi93qiiMkhDqx4yf5gKcNqMLKh5rwGOqUBbtKOMT9QY0Hjh6AX97qVKL5131kdX33dL6V1SKFUdYIYpHQjfpNNQnqje%2FbADE6qSMyIWI%2B9GCJl4zlbYgckoKTb5ZmQ0TWlQ%2BnH1BONOsweBhLroYdWh7mpDqugx%2BxpcMaqReSVzUimHAt2rdf5GMKxOvqiDNRk4jjlmtNGDNjfO7tjma4rJ5yuYx1ueJYgBk8iE0ViXRoITENY1pf8TP%2FPpWGk&X-Amz-Signature=fa9f5cdee9f774ef142c9820a3208165215b3d5323198ebb0b0b865f09a40a28&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE5XVYR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCfdjhP0Wmfpk4TcKNpXJr4BXgl%2BiJzJXTGhrpgR3ykWAIgX0v7wenBPhca8OgZ4k3HgIj%2BP%2B3HTvrHzOvp0KzzRKkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BoYmpNGJHmbw5kSrcA4EZoHXVbEbfHhjlbUyom1zIzkhBdZXg9xxgwDqDbkSP8yev3Bsv%2BEQtvT7vGdk8IydkZ7UxNl6Qp%2FTRcfZKW6Hw1eMcDD%2FBXOdrLhb4ltV2LNzCAZriShy2FRr3YMO4EOQCdUwTqOJLiwuRjiAPpug%2FB2b5R6At2H6TUcnQkpGVd%2BRz51lpSKiuAJtjYhGbigmI3YFCc161ynSueNL9njKi2On9YuvFSgi0MaKUcSY1d3q3BNWleebfUm8U90gR%2F282n%2Fk5pfQ1q%2BJuSjtIErKB%2FOLxWdx8OwfTEa%2FnF9J%2FPLNSqA0B573xV1tuVslMvsKfnxv%2Ba6Zo%2BBwL5QHeK7UtVsSf8pz4xNi7S%2FvFdNpc9Ffyp5Qz2%2FD%2FnHePFu4YaPIas6a3a4ZXcH8vFJFLPkFYqVwoS1OuFfwYLG0viXl0EyP6YiMzScB7%2BTUpHBsgSe5zbPdx6Ut2Joyhvbt8mZLlKdmq%2FQ%2B60a%2BoTT15LSplZHBRoZaJ056eZmwzDrRqCFewSyRj2m06SkF2VXQTqYR0DTfVMhFlCCZVlFZHhQaW2bVX806SY3de0ZUmDC7b2VXn2nG6i5gI4aRcurVZq1%2BaNHScuH14vFrgaSPi93qiiMkhDqx4yf5gKcNqMLKh5rwGOqUBbtKOMT9QY0Hjh6AX97qVKL5131kdX33dL6V1SKFUdYIYpHQjfpNNQnqje%2FbADE6qSMyIWI%2B9GCJl4zlbYgckoKTb5ZmQ0TWlQ%2BnH1BONOsweBhLroYdWh7mpDqugx%2BxpcMaqReSVzUimHAt2rdf5GMKxOvqiDNRk4jjlmtNGDNjfO7tjma4rJ5yuYx1ueJYgBk8iE0ViXRoITENY1pf8TP%2FPpWGk&X-Amz-Signature=3c5a00e1e867a7bacad09fa5cc06136da62fc686cb98373fe3066a92c60dd672&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE5XVYR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCfdjhP0Wmfpk4TcKNpXJr4BXgl%2BiJzJXTGhrpgR3ykWAIgX0v7wenBPhca8OgZ4k3HgIj%2BP%2B3HTvrHzOvp0KzzRKkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BoYmpNGJHmbw5kSrcA4EZoHXVbEbfHhjlbUyom1zIzkhBdZXg9xxgwDqDbkSP8yev3Bsv%2BEQtvT7vGdk8IydkZ7UxNl6Qp%2FTRcfZKW6Hw1eMcDD%2FBXOdrLhb4ltV2LNzCAZriShy2FRr3YMO4EOQCdUwTqOJLiwuRjiAPpug%2FB2b5R6At2H6TUcnQkpGVd%2BRz51lpSKiuAJtjYhGbigmI3YFCc161ynSueNL9njKi2On9YuvFSgi0MaKUcSY1d3q3BNWleebfUm8U90gR%2F282n%2Fk5pfQ1q%2BJuSjtIErKB%2FOLxWdx8OwfTEa%2FnF9J%2FPLNSqA0B573xV1tuVslMvsKfnxv%2Ba6Zo%2BBwL5QHeK7UtVsSf8pz4xNi7S%2FvFdNpc9Ffyp5Qz2%2FD%2FnHePFu4YaPIas6a3a4ZXcH8vFJFLPkFYqVwoS1OuFfwYLG0viXl0EyP6YiMzScB7%2BTUpHBsgSe5zbPdx6Ut2Joyhvbt8mZLlKdmq%2FQ%2B60a%2BoTT15LSplZHBRoZaJ056eZmwzDrRqCFewSyRj2m06SkF2VXQTqYR0DTfVMhFlCCZVlFZHhQaW2bVX806SY3de0ZUmDC7b2VXn2nG6i5gI4aRcurVZq1%2BaNHScuH14vFrgaSPi93qiiMkhDqx4yf5gKcNqMLKh5rwGOqUBbtKOMT9QY0Hjh6AX97qVKL5131kdX33dL6V1SKFUdYIYpHQjfpNNQnqje%2FbADE6qSMyIWI%2B9GCJl4zlbYgckoKTb5ZmQ0TWlQ%2BnH1BONOsweBhLroYdWh7mpDqugx%2BxpcMaqReSVzUimHAt2rdf5GMKxOvqiDNRk4jjlmtNGDNjfO7tjma4rJ5yuYx1ueJYgBk8iE0ViXRoITENY1pf8TP%2FPpWGk&X-Amz-Signature=9184f226112186fb3942fe5060d9e67c3e7fb955c18a65db5673cc7f74e2b835&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE5XVYR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCfdjhP0Wmfpk4TcKNpXJr4BXgl%2BiJzJXTGhrpgR3ykWAIgX0v7wenBPhca8OgZ4k3HgIj%2BP%2B3HTvrHzOvp0KzzRKkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BoYmpNGJHmbw5kSrcA4EZoHXVbEbfHhjlbUyom1zIzkhBdZXg9xxgwDqDbkSP8yev3Bsv%2BEQtvT7vGdk8IydkZ7UxNl6Qp%2FTRcfZKW6Hw1eMcDD%2FBXOdrLhb4ltV2LNzCAZriShy2FRr3YMO4EOQCdUwTqOJLiwuRjiAPpug%2FB2b5R6At2H6TUcnQkpGVd%2BRz51lpSKiuAJtjYhGbigmI3YFCc161ynSueNL9njKi2On9YuvFSgi0MaKUcSY1d3q3BNWleebfUm8U90gR%2F282n%2Fk5pfQ1q%2BJuSjtIErKB%2FOLxWdx8OwfTEa%2FnF9J%2FPLNSqA0B573xV1tuVslMvsKfnxv%2Ba6Zo%2BBwL5QHeK7UtVsSf8pz4xNi7S%2FvFdNpc9Ffyp5Qz2%2FD%2FnHePFu4YaPIas6a3a4ZXcH8vFJFLPkFYqVwoS1OuFfwYLG0viXl0EyP6YiMzScB7%2BTUpHBsgSe5zbPdx6Ut2Joyhvbt8mZLlKdmq%2FQ%2B60a%2BoTT15LSplZHBRoZaJ056eZmwzDrRqCFewSyRj2m06SkF2VXQTqYR0DTfVMhFlCCZVlFZHhQaW2bVX806SY3de0ZUmDC7b2VXn2nG6i5gI4aRcurVZq1%2BaNHScuH14vFrgaSPi93qiiMkhDqx4yf5gKcNqMLKh5rwGOqUBbtKOMT9QY0Hjh6AX97qVKL5131kdX33dL6V1SKFUdYIYpHQjfpNNQnqje%2FbADE6qSMyIWI%2B9GCJl4zlbYgckoKTb5ZmQ0TWlQ%2BnH1BONOsweBhLroYdWh7mpDqugx%2BxpcMaqReSVzUimHAt2rdf5GMKxOvqiDNRk4jjlmtNGDNjfO7tjma4rJ5yuYx1ueJYgBk8iE0ViXRoITENY1pf8TP%2FPpWGk&X-Amz-Signature=8b68a09483ab5244bb5b8712527667583c15f98a4708b7d3bfd6ca0bfd78b2c0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PE5XVYR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCfdjhP0Wmfpk4TcKNpXJr4BXgl%2BiJzJXTGhrpgR3ykWAIgX0v7wenBPhca8OgZ4k3HgIj%2BP%2B3HTvrHzOvp0KzzRKkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BoYmpNGJHmbw5kSrcA4EZoHXVbEbfHhjlbUyom1zIzkhBdZXg9xxgwDqDbkSP8yev3Bsv%2BEQtvT7vGdk8IydkZ7UxNl6Qp%2FTRcfZKW6Hw1eMcDD%2FBXOdrLhb4ltV2LNzCAZriShy2FRr3YMO4EOQCdUwTqOJLiwuRjiAPpug%2FB2b5R6At2H6TUcnQkpGVd%2BRz51lpSKiuAJtjYhGbigmI3YFCc161ynSueNL9njKi2On9YuvFSgi0MaKUcSY1d3q3BNWleebfUm8U90gR%2F282n%2Fk5pfQ1q%2BJuSjtIErKB%2FOLxWdx8OwfTEa%2FnF9J%2FPLNSqA0B573xV1tuVslMvsKfnxv%2Ba6Zo%2BBwL5QHeK7UtVsSf8pz4xNi7S%2FvFdNpc9Ffyp5Qz2%2FD%2FnHePFu4YaPIas6a3a4ZXcH8vFJFLPkFYqVwoS1OuFfwYLG0viXl0EyP6YiMzScB7%2BTUpHBsgSe5zbPdx6Ut2Joyhvbt8mZLlKdmq%2FQ%2B60a%2BoTT15LSplZHBRoZaJ056eZmwzDrRqCFewSyRj2m06SkF2VXQTqYR0DTfVMhFlCCZVlFZHhQaW2bVX806SY3de0ZUmDC7b2VXn2nG6i5gI4aRcurVZq1%2BaNHScuH14vFrgaSPi93qiiMkhDqx4yf5gKcNqMLKh5rwGOqUBbtKOMT9QY0Hjh6AX97qVKL5131kdX33dL6V1SKFUdYIYpHQjfpNNQnqje%2FbADE6qSMyIWI%2B9GCJl4zlbYgckoKTb5ZmQ0TWlQ%2BnH1BONOsweBhLroYdWh7mpDqugx%2BxpcMaqReSVzUimHAt2rdf5GMKxOvqiDNRk4jjlmtNGDNjfO7tjma4rJ5yuYx1ueJYgBk8iE0ViXRoITENY1pf8TP%2FPpWGk&X-Amz-Signature=8bb8b6366447f80bde38829b67980b6e5e8c636ba8383b222ae8c0f81b1a1367&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
