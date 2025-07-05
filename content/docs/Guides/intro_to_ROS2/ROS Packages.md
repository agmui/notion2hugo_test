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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFKK5UK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCfBDi1Ugaf1PYYL9kaNw7iMz0E3vKjAboJhs%2FjqDNSdAIgZ1MwIvW1u8sCCY0JjN4b6sektUWy91Ckle8ccE%2FdHEsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIF%2FnJWediog0r0NEyrcA0DhQ%2Ff3Zc0W4N7jOMrQHK3R6j2oJhrnyHfdamADmL1%2BAd3s2fUAwwn50iVwgJmFSv23EucXkNf59kN%2FH1gbkJf3wH54yQTYUAh5qHf95qSDwH2yWwUsg8ASzqsJ8Y7ZogqvqN9JSpAwnAL6decLtWBTCogvNzZ403zT8CfRXXKEtPWFNCAvZqnlJiDEloYniEYGB9TPSVYMWybfj5aPx4jbX40zg4JZWFkmnYgQL8U%2FCZsy3TFYUBvrRQuj7m0Ampdc4poIK5e5X3QW4V5bXoNyDGiNxTEwI7%2BlL543Fly2J3%2F9OuBoEUT2R%2FOOjS3uaTVn%2FiJFv7r1T49bsVWVbnnC5FV4o%2FIKkG7rJ9%2B2B8OscpWCOXJnBF21H%2FHS%2BwHzUlLzLB6KuX7e1LKupeviagmq3AvruBhMn7GmkXgq95DYvcZ0JTVl5WVS1h4DUdP1HHZsW7aGMNowPvrnXtDNCAj5BLlJZrVFw6Vs5OrKZ%2FbtlT6ZclOqphDnHBJpf3Nijd5BbGiquIgMP1wF4FIo3lj1ZEN8n3TA4hKkWYvgWkn93E2UCY42GtuNnu3xcKbj0igb7oHdY%2BQtV2VRhO04a7XrC9dOqqBP2Hk81SJuyQUV7ZJEuSGBluYUGLUvMI6no8MGOqUBAx3eSOv06tRrJ45mdTYqA%2FCrtbp6%2BF7iuaVxLkSMgsoliQD6tGN8427KuCl6ae5qbcWDL1OhDJEvzdxYmiAaXAqs2dJMjSJsQn7GMF4z4%2BfnACguOPE852PyICt8BaHLztGhTwg8ULmm93sWcOwYUjC2WKMRpfGG%2BLLLnnA4xPGITu%2Fk7xCamloqZRi2a%2FG4m5xWdi07Rj1SF3UR%2FFNQL%2BNT4vAI&X-Amz-Signature=f6d530eb3fc02b0f91d11b67fbea732d916f3898faf24cd55ab9ef384afc4e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFKK5UK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCfBDi1Ugaf1PYYL9kaNw7iMz0E3vKjAboJhs%2FjqDNSdAIgZ1MwIvW1u8sCCY0JjN4b6sektUWy91Ckle8ccE%2FdHEsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIF%2FnJWediog0r0NEyrcA0DhQ%2Ff3Zc0W4N7jOMrQHK3R6j2oJhrnyHfdamADmL1%2BAd3s2fUAwwn50iVwgJmFSv23EucXkNf59kN%2FH1gbkJf3wH54yQTYUAh5qHf95qSDwH2yWwUsg8ASzqsJ8Y7ZogqvqN9JSpAwnAL6decLtWBTCogvNzZ403zT8CfRXXKEtPWFNCAvZqnlJiDEloYniEYGB9TPSVYMWybfj5aPx4jbX40zg4JZWFkmnYgQL8U%2FCZsy3TFYUBvrRQuj7m0Ampdc4poIK5e5X3QW4V5bXoNyDGiNxTEwI7%2BlL543Fly2J3%2F9OuBoEUT2R%2FOOjS3uaTVn%2FiJFv7r1T49bsVWVbnnC5FV4o%2FIKkG7rJ9%2B2B8OscpWCOXJnBF21H%2FHS%2BwHzUlLzLB6KuX7e1LKupeviagmq3AvruBhMn7GmkXgq95DYvcZ0JTVl5WVS1h4DUdP1HHZsW7aGMNowPvrnXtDNCAj5BLlJZrVFw6Vs5OrKZ%2FbtlT6ZclOqphDnHBJpf3Nijd5BbGiquIgMP1wF4FIo3lj1ZEN8n3TA4hKkWYvgWkn93E2UCY42GtuNnu3xcKbj0igb7oHdY%2BQtV2VRhO04a7XrC9dOqqBP2Hk81SJuyQUV7ZJEuSGBluYUGLUvMI6no8MGOqUBAx3eSOv06tRrJ45mdTYqA%2FCrtbp6%2BF7iuaVxLkSMgsoliQD6tGN8427KuCl6ae5qbcWDL1OhDJEvzdxYmiAaXAqs2dJMjSJsQn7GMF4z4%2BfnACguOPE852PyICt8BaHLztGhTwg8ULmm93sWcOwYUjC2WKMRpfGG%2BLLLnnA4xPGITu%2Fk7xCamloqZRi2a%2FG4m5xWdi07Rj1SF3UR%2FFNQL%2BNT4vAI&X-Amz-Signature=4761d731ac919e0168d14447057cb787f00aad5980e8ccc9164508252dfc0a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFKK5UK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCfBDi1Ugaf1PYYL9kaNw7iMz0E3vKjAboJhs%2FjqDNSdAIgZ1MwIvW1u8sCCY0JjN4b6sektUWy91Ckle8ccE%2FdHEsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIF%2FnJWediog0r0NEyrcA0DhQ%2Ff3Zc0W4N7jOMrQHK3R6j2oJhrnyHfdamADmL1%2BAd3s2fUAwwn50iVwgJmFSv23EucXkNf59kN%2FH1gbkJf3wH54yQTYUAh5qHf95qSDwH2yWwUsg8ASzqsJ8Y7ZogqvqN9JSpAwnAL6decLtWBTCogvNzZ403zT8CfRXXKEtPWFNCAvZqnlJiDEloYniEYGB9TPSVYMWybfj5aPx4jbX40zg4JZWFkmnYgQL8U%2FCZsy3TFYUBvrRQuj7m0Ampdc4poIK5e5X3QW4V5bXoNyDGiNxTEwI7%2BlL543Fly2J3%2F9OuBoEUT2R%2FOOjS3uaTVn%2FiJFv7r1T49bsVWVbnnC5FV4o%2FIKkG7rJ9%2B2B8OscpWCOXJnBF21H%2FHS%2BwHzUlLzLB6KuX7e1LKupeviagmq3AvruBhMn7GmkXgq95DYvcZ0JTVl5WVS1h4DUdP1HHZsW7aGMNowPvrnXtDNCAj5BLlJZrVFw6Vs5OrKZ%2FbtlT6ZclOqphDnHBJpf3Nijd5BbGiquIgMP1wF4FIo3lj1ZEN8n3TA4hKkWYvgWkn93E2UCY42GtuNnu3xcKbj0igb7oHdY%2BQtV2VRhO04a7XrC9dOqqBP2Hk81SJuyQUV7ZJEuSGBluYUGLUvMI6no8MGOqUBAx3eSOv06tRrJ45mdTYqA%2FCrtbp6%2BF7iuaVxLkSMgsoliQD6tGN8427KuCl6ae5qbcWDL1OhDJEvzdxYmiAaXAqs2dJMjSJsQn7GMF4z4%2BfnACguOPE852PyICt8BaHLztGhTwg8ULmm93sWcOwYUjC2WKMRpfGG%2BLLLnnA4xPGITu%2Fk7xCamloqZRi2a%2FG4m5xWdi07Rj1SF3UR%2FFNQL%2BNT4vAI&X-Amz-Signature=5858ab5e577222460feafa33f815c1d9245e82fbc3f7be7d09c9178bc49139f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFKK5UK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCfBDi1Ugaf1PYYL9kaNw7iMz0E3vKjAboJhs%2FjqDNSdAIgZ1MwIvW1u8sCCY0JjN4b6sektUWy91Ckle8ccE%2FdHEsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIF%2FnJWediog0r0NEyrcA0DhQ%2Ff3Zc0W4N7jOMrQHK3R6j2oJhrnyHfdamADmL1%2BAd3s2fUAwwn50iVwgJmFSv23EucXkNf59kN%2FH1gbkJf3wH54yQTYUAh5qHf95qSDwH2yWwUsg8ASzqsJ8Y7ZogqvqN9JSpAwnAL6decLtWBTCogvNzZ403zT8CfRXXKEtPWFNCAvZqnlJiDEloYniEYGB9TPSVYMWybfj5aPx4jbX40zg4JZWFkmnYgQL8U%2FCZsy3TFYUBvrRQuj7m0Ampdc4poIK5e5X3QW4V5bXoNyDGiNxTEwI7%2BlL543Fly2J3%2F9OuBoEUT2R%2FOOjS3uaTVn%2FiJFv7r1T49bsVWVbnnC5FV4o%2FIKkG7rJ9%2B2B8OscpWCOXJnBF21H%2FHS%2BwHzUlLzLB6KuX7e1LKupeviagmq3AvruBhMn7GmkXgq95DYvcZ0JTVl5WVS1h4DUdP1HHZsW7aGMNowPvrnXtDNCAj5BLlJZrVFw6Vs5OrKZ%2FbtlT6ZclOqphDnHBJpf3Nijd5BbGiquIgMP1wF4FIo3lj1ZEN8n3TA4hKkWYvgWkn93E2UCY42GtuNnu3xcKbj0igb7oHdY%2BQtV2VRhO04a7XrC9dOqqBP2Hk81SJuyQUV7ZJEuSGBluYUGLUvMI6no8MGOqUBAx3eSOv06tRrJ45mdTYqA%2FCrtbp6%2BF7iuaVxLkSMgsoliQD6tGN8427KuCl6ae5qbcWDL1OhDJEvzdxYmiAaXAqs2dJMjSJsQn7GMF4z4%2BfnACguOPE852PyICt8BaHLztGhTwg8ULmm93sWcOwYUjC2WKMRpfGG%2BLLLnnA4xPGITu%2Fk7xCamloqZRi2a%2FG4m5xWdi07Rj1SF3UR%2FFNQL%2BNT4vAI&X-Amz-Signature=9edc5d5a86065e71bd2c671ec46180a4379191b71d248d05f6dc303fa84ac539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFKK5UK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCfBDi1Ugaf1PYYL9kaNw7iMz0E3vKjAboJhs%2FjqDNSdAIgZ1MwIvW1u8sCCY0JjN4b6sektUWy91Ckle8ccE%2FdHEsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIF%2FnJWediog0r0NEyrcA0DhQ%2Ff3Zc0W4N7jOMrQHK3R6j2oJhrnyHfdamADmL1%2BAd3s2fUAwwn50iVwgJmFSv23EucXkNf59kN%2FH1gbkJf3wH54yQTYUAh5qHf95qSDwH2yWwUsg8ASzqsJ8Y7ZogqvqN9JSpAwnAL6decLtWBTCogvNzZ403zT8CfRXXKEtPWFNCAvZqnlJiDEloYniEYGB9TPSVYMWybfj5aPx4jbX40zg4JZWFkmnYgQL8U%2FCZsy3TFYUBvrRQuj7m0Ampdc4poIK5e5X3QW4V5bXoNyDGiNxTEwI7%2BlL543Fly2J3%2F9OuBoEUT2R%2FOOjS3uaTVn%2FiJFv7r1T49bsVWVbnnC5FV4o%2FIKkG7rJ9%2B2B8OscpWCOXJnBF21H%2FHS%2BwHzUlLzLB6KuX7e1LKupeviagmq3AvruBhMn7GmkXgq95DYvcZ0JTVl5WVS1h4DUdP1HHZsW7aGMNowPvrnXtDNCAj5BLlJZrVFw6Vs5OrKZ%2FbtlT6ZclOqphDnHBJpf3Nijd5BbGiquIgMP1wF4FIo3lj1ZEN8n3TA4hKkWYvgWkn93E2UCY42GtuNnu3xcKbj0igb7oHdY%2BQtV2VRhO04a7XrC9dOqqBP2Hk81SJuyQUV7ZJEuSGBluYUGLUvMI6no8MGOqUBAx3eSOv06tRrJ45mdTYqA%2FCrtbp6%2BF7iuaVxLkSMgsoliQD6tGN8427KuCl6ae5qbcWDL1OhDJEvzdxYmiAaXAqs2dJMjSJsQn7GMF4z4%2BfnACguOPE852PyICt8BaHLztGhTwg8ULmm93sWcOwYUjC2WKMRpfGG%2BLLLnnA4xPGITu%2Fk7xCamloqZRi2a%2FG4m5xWdi07Rj1SF3UR%2FFNQL%2BNT4vAI&X-Amz-Signature=b0c6307c06ce486ee2e7ec9d112995c3e4f0294e88aa9ca0e04682ff34131717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFKK5UK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCfBDi1Ugaf1PYYL9kaNw7iMz0E3vKjAboJhs%2FjqDNSdAIgZ1MwIvW1u8sCCY0JjN4b6sektUWy91Ckle8ccE%2FdHEsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIF%2FnJWediog0r0NEyrcA0DhQ%2Ff3Zc0W4N7jOMrQHK3R6j2oJhrnyHfdamADmL1%2BAd3s2fUAwwn50iVwgJmFSv23EucXkNf59kN%2FH1gbkJf3wH54yQTYUAh5qHf95qSDwH2yWwUsg8ASzqsJ8Y7ZogqvqN9JSpAwnAL6decLtWBTCogvNzZ403zT8CfRXXKEtPWFNCAvZqnlJiDEloYniEYGB9TPSVYMWybfj5aPx4jbX40zg4JZWFkmnYgQL8U%2FCZsy3TFYUBvrRQuj7m0Ampdc4poIK5e5X3QW4V5bXoNyDGiNxTEwI7%2BlL543Fly2J3%2F9OuBoEUT2R%2FOOjS3uaTVn%2FiJFv7r1T49bsVWVbnnC5FV4o%2FIKkG7rJ9%2B2B8OscpWCOXJnBF21H%2FHS%2BwHzUlLzLB6KuX7e1LKupeviagmq3AvruBhMn7GmkXgq95DYvcZ0JTVl5WVS1h4DUdP1HHZsW7aGMNowPvrnXtDNCAj5BLlJZrVFw6Vs5OrKZ%2FbtlT6ZclOqphDnHBJpf3Nijd5BbGiquIgMP1wF4FIo3lj1ZEN8n3TA4hKkWYvgWkn93E2UCY42GtuNnu3xcKbj0igb7oHdY%2BQtV2VRhO04a7XrC9dOqqBP2Hk81SJuyQUV7ZJEuSGBluYUGLUvMI6no8MGOqUBAx3eSOv06tRrJ45mdTYqA%2FCrtbp6%2BF7iuaVxLkSMgsoliQD6tGN8427KuCl6ae5qbcWDL1OhDJEvzdxYmiAaXAqs2dJMjSJsQn7GMF4z4%2BfnACguOPE852PyICt8BaHLztGhTwg8ULmm93sWcOwYUjC2WKMRpfGG%2BLLLnnA4xPGITu%2Fk7xCamloqZRi2a%2FG4m5xWdi07Rj1SF3UR%2FFNQL%2BNT4vAI&X-Amz-Signature=1323913086e00ce8cd0976a19c21ff439d05f13172b7a5542adb5d20699ca3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFKK5UK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCfBDi1Ugaf1PYYL9kaNw7iMz0E3vKjAboJhs%2FjqDNSdAIgZ1MwIvW1u8sCCY0JjN4b6sektUWy91Ckle8ccE%2FdHEsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIF%2FnJWediog0r0NEyrcA0DhQ%2Ff3Zc0W4N7jOMrQHK3R6j2oJhrnyHfdamADmL1%2BAd3s2fUAwwn50iVwgJmFSv23EucXkNf59kN%2FH1gbkJf3wH54yQTYUAh5qHf95qSDwH2yWwUsg8ASzqsJ8Y7ZogqvqN9JSpAwnAL6decLtWBTCogvNzZ403zT8CfRXXKEtPWFNCAvZqnlJiDEloYniEYGB9TPSVYMWybfj5aPx4jbX40zg4JZWFkmnYgQL8U%2FCZsy3TFYUBvrRQuj7m0Ampdc4poIK5e5X3QW4V5bXoNyDGiNxTEwI7%2BlL543Fly2J3%2F9OuBoEUT2R%2FOOjS3uaTVn%2FiJFv7r1T49bsVWVbnnC5FV4o%2FIKkG7rJ9%2B2B8OscpWCOXJnBF21H%2FHS%2BwHzUlLzLB6KuX7e1LKupeviagmq3AvruBhMn7GmkXgq95DYvcZ0JTVl5WVS1h4DUdP1HHZsW7aGMNowPvrnXtDNCAj5BLlJZrVFw6Vs5OrKZ%2FbtlT6ZclOqphDnHBJpf3Nijd5BbGiquIgMP1wF4FIo3lj1ZEN8n3TA4hKkWYvgWkn93E2UCY42GtuNnu3xcKbj0igb7oHdY%2BQtV2VRhO04a7XrC9dOqqBP2Hk81SJuyQUV7ZJEuSGBluYUGLUvMI6no8MGOqUBAx3eSOv06tRrJ45mdTYqA%2FCrtbp6%2BF7iuaVxLkSMgsoliQD6tGN8427KuCl6ae5qbcWDL1OhDJEvzdxYmiAaXAqs2dJMjSJsQn7GMF4z4%2BfnACguOPE852PyICt8BaHLztGhTwg8ULmm93sWcOwYUjC2WKMRpfGG%2BLLLnnA4xPGITu%2Fk7xCamloqZRi2a%2FG4m5xWdi07Rj1SF3UR%2FFNQL%2BNT4vAI&X-Amz-Signature=c6a22fc68db3a5401662105373a46cf05ac4a6c00d586e4fbc937f0dd06161f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
