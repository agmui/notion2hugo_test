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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D24IH47%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIsb9%2B38NCaXhRlxJM6gAG%2BfJqSh8AW9x7aJcKmQYgQAiEAop3wlac59kqVdY%2BBFtqMi2aL41WfffSX91%2F2rpenT9wq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNjonWWcXu2WitqhRircA2OgLaH42qdSJdekkghhj%2FvyGCKuXEzbMUyzVKQosh5xE%2BIJKvsZtY7N7MtbDhiB%2BrLZ%2BSZ6snp0DOwu3COkdNAp%2F%2F7T4Ih9j1KK99wAdQ7KGwLMiFDj6X%2BtgxL7kc1XZyavwaP%2BklFwI%2Bu6woXPdnGwBvW6so3fMS1db26TW4RMyuXp%2Fu%2B038OuWXFupi7IRTdu8OmU%2B7AKwwt2lY7r%2BSb8i8NmZeklfEWQzNi1I7nA3%2BceYXYkUMD6mXQ2h42VZxY53zpd4H7sgQ0O7EmMjqxLFb2rlvzZzw%2FbYDe%2Bi1DSHvFG%2FVYhDU%2BgXiiDHnyMNoKmUlNoXaay0W27Ml%2B5LwKF67mngeUIIlpjNAICrqHfOkXRzrGf%2FIAVW7dIq50WvTHdqpfKEtvfhlRTB5mdCFAhz7GsmCSXQDerSY5oaQPlASznWahpnBJ0T24bhaGyZ7wBsXG%2BdWeVYSkhUGbpFrSS8fmhEOs82%2BSx84SwLWJDIAowf%2Bk2svahVZv1u3fOQKp9cpvX%2BFfqc26KVT5mq3TId%2Bewcv9O64QZdHsuL%2BlULL21sOa7PeJIpmWtB9mTZwCuqlR4smOYRkTKL68NM31Yd2p3lhgnQBdAqojJ68kh2dLiZIuMbPQxtS7rMK%2FT08EGOqUBaZ2xLf4BD4dkeT%2BB88qg9IGyT9ylSVaG%2FTPlLrpZXU%2FS0uzWtM1m787MQWNhcqEpKL4qrdq81yaElBhrMPUkNCSWCgDHxFcLrLkJSZEbqqm%2BM7du3piT9SiclDv7dZ7ghO16seeim0yjz4%2BZ2qa0ntzFUxciTqJ8XuYMzXEuowOdt%2BbB%2FJMtT4%2FA07X1wC7%2BACxI5RFwWD2QgpFULleiQBEye7dF&X-Amz-Signature=66b9bf100fcad820e4d324dea751505c201401fbf73fe919e8af7063a49c2249&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D24IH47%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIsb9%2B38NCaXhRlxJM6gAG%2BfJqSh8AW9x7aJcKmQYgQAiEAop3wlac59kqVdY%2BBFtqMi2aL41WfffSX91%2F2rpenT9wq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNjonWWcXu2WitqhRircA2OgLaH42qdSJdekkghhj%2FvyGCKuXEzbMUyzVKQosh5xE%2BIJKvsZtY7N7MtbDhiB%2BrLZ%2BSZ6snp0DOwu3COkdNAp%2F%2F7T4Ih9j1KK99wAdQ7KGwLMiFDj6X%2BtgxL7kc1XZyavwaP%2BklFwI%2Bu6woXPdnGwBvW6so3fMS1db26TW4RMyuXp%2Fu%2B038OuWXFupi7IRTdu8OmU%2B7AKwwt2lY7r%2BSb8i8NmZeklfEWQzNi1I7nA3%2BceYXYkUMD6mXQ2h42VZxY53zpd4H7sgQ0O7EmMjqxLFb2rlvzZzw%2FbYDe%2Bi1DSHvFG%2FVYhDU%2BgXiiDHnyMNoKmUlNoXaay0W27Ml%2B5LwKF67mngeUIIlpjNAICrqHfOkXRzrGf%2FIAVW7dIq50WvTHdqpfKEtvfhlRTB5mdCFAhz7GsmCSXQDerSY5oaQPlASznWahpnBJ0T24bhaGyZ7wBsXG%2BdWeVYSkhUGbpFrSS8fmhEOs82%2BSx84SwLWJDIAowf%2Bk2svahVZv1u3fOQKp9cpvX%2BFfqc26KVT5mq3TId%2Bewcv9O64QZdHsuL%2BlULL21sOa7PeJIpmWtB9mTZwCuqlR4smOYRkTKL68NM31Yd2p3lhgnQBdAqojJ68kh2dLiZIuMbPQxtS7rMK%2FT08EGOqUBaZ2xLf4BD4dkeT%2BB88qg9IGyT9ylSVaG%2FTPlLrpZXU%2FS0uzWtM1m787MQWNhcqEpKL4qrdq81yaElBhrMPUkNCSWCgDHxFcLrLkJSZEbqqm%2BM7du3piT9SiclDv7dZ7ghO16seeim0yjz4%2BZ2qa0ntzFUxciTqJ8XuYMzXEuowOdt%2BbB%2FJMtT4%2FA07X1wC7%2BACxI5RFwWD2QgpFULleiQBEye7dF&X-Amz-Signature=eda0c1fc861dff82b1d74201700eb6583114e6da45547f122826b4244526d3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D24IH47%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIsb9%2B38NCaXhRlxJM6gAG%2BfJqSh8AW9x7aJcKmQYgQAiEAop3wlac59kqVdY%2BBFtqMi2aL41WfffSX91%2F2rpenT9wq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNjonWWcXu2WitqhRircA2OgLaH42qdSJdekkghhj%2FvyGCKuXEzbMUyzVKQosh5xE%2BIJKvsZtY7N7MtbDhiB%2BrLZ%2BSZ6snp0DOwu3COkdNAp%2F%2F7T4Ih9j1KK99wAdQ7KGwLMiFDj6X%2BtgxL7kc1XZyavwaP%2BklFwI%2Bu6woXPdnGwBvW6so3fMS1db26TW4RMyuXp%2Fu%2B038OuWXFupi7IRTdu8OmU%2B7AKwwt2lY7r%2BSb8i8NmZeklfEWQzNi1I7nA3%2BceYXYkUMD6mXQ2h42VZxY53zpd4H7sgQ0O7EmMjqxLFb2rlvzZzw%2FbYDe%2Bi1DSHvFG%2FVYhDU%2BgXiiDHnyMNoKmUlNoXaay0W27Ml%2B5LwKF67mngeUIIlpjNAICrqHfOkXRzrGf%2FIAVW7dIq50WvTHdqpfKEtvfhlRTB5mdCFAhz7GsmCSXQDerSY5oaQPlASznWahpnBJ0T24bhaGyZ7wBsXG%2BdWeVYSkhUGbpFrSS8fmhEOs82%2BSx84SwLWJDIAowf%2Bk2svahVZv1u3fOQKp9cpvX%2BFfqc26KVT5mq3TId%2Bewcv9O64QZdHsuL%2BlULL21sOa7PeJIpmWtB9mTZwCuqlR4smOYRkTKL68NM31Yd2p3lhgnQBdAqojJ68kh2dLiZIuMbPQxtS7rMK%2FT08EGOqUBaZ2xLf4BD4dkeT%2BB88qg9IGyT9ylSVaG%2FTPlLrpZXU%2FS0uzWtM1m787MQWNhcqEpKL4qrdq81yaElBhrMPUkNCSWCgDHxFcLrLkJSZEbqqm%2BM7du3piT9SiclDv7dZ7ghO16seeim0yjz4%2BZ2qa0ntzFUxciTqJ8XuYMzXEuowOdt%2BbB%2FJMtT4%2FA07X1wC7%2BACxI5RFwWD2QgpFULleiQBEye7dF&X-Amz-Signature=c9bb12011e7c04fcafe805d4feac603a3892b1d934707fd01c068a76b970d433&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D24IH47%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIsb9%2B38NCaXhRlxJM6gAG%2BfJqSh8AW9x7aJcKmQYgQAiEAop3wlac59kqVdY%2BBFtqMi2aL41WfffSX91%2F2rpenT9wq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNjonWWcXu2WitqhRircA2OgLaH42qdSJdekkghhj%2FvyGCKuXEzbMUyzVKQosh5xE%2BIJKvsZtY7N7MtbDhiB%2BrLZ%2BSZ6snp0DOwu3COkdNAp%2F%2F7T4Ih9j1KK99wAdQ7KGwLMiFDj6X%2BtgxL7kc1XZyavwaP%2BklFwI%2Bu6woXPdnGwBvW6so3fMS1db26TW4RMyuXp%2Fu%2B038OuWXFupi7IRTdu8OmU%2B7AKwwt2lY7r%2BSb8i8NmZeklfEWQzNi1I7nA3%2BceYXYkUMD6mXQ2h42VZxY53zpd4H7sgQ0O7EmMjqxLFb2rlvzZzw%2FbYDe%2Bi1DSHvFG%2FVYhDU%2BgXiiDHnyMNoKmUlNoXaay0W27Ml%2B5LwKF67mngeUIIlpjNAICrqHfOkXRzrGf%2FIAVW7dIq50WvTHdqpfKEtvfhlRTB5mdCFAhz7GsmCSXQDerSY5oaQPlASznWahpnBJ0T24bhaGyZ7wBsXG%2BdWeVYSkhUGbpFrSS8fmhEOs82%2BSx84SwLWJDIAowf%2Bk2svahVZv1u3fOQKp9cpvX%2BFfqc26KVT5mq3TId%2Bewcv9O64QZdHsuL%2BlULL21sOa7PeJIpmWtB9mTZwCuqlR4smOYRkTKL68NM31Yd2p3lhgnQBdAqojJ68kh2dLiZIuMbPQxtS7rMK%2FT08EGOqUBaZ2xLf4BD4dkeT%2BB88qg9IGyT9ylSVaG%2FTPlLrpZXU%2FS0uzWtM1m787MQWNhcqEpKL4qrdq81yaElBhrMPUkNCSWCgDHxFcLrLkJSZEbqqm%2BM7du3piT9SiclDv7dZ7ghO16seeim0yjz4%2BZ2qa0ntzFUxciTqJ8XuYMzXEuowOdt%2BbB%2FJMtT4%2FA07X1wC7%2BACxI5RFwWD2QgpFULleiQBEye7dF&X-Amz-Signature=f23cd7ef12d931288a3630b6248ae9c4eb52f4c908b207b692f75d1e3b6f2bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D24IH47%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIsb9%2B38NCaXhRlxJM6gAG%2BfJqSh8AW9x7aJcKmQYgQAiEAop3wlac59kqVdY%2BBFtqMi2aL41WfffSX91%2F2rpenT9wq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNjonWWcXu2WitqhRircA2OgLaH42qdSJdekkghhj%2FvyGCKuXEzbMUyzVKQosh5xE%2BIJKvsZtY7N7MtbDhiB%2BrLZ%2BSZ6snp0DOwu3COkdNAp%2F%2F7T4Ih9j1KK99wAdQ7KGwLMiFDj6X%2BtgxL7kc1XZyavwaP%2BklFwI%2Bu6woXPdnGwBvW6so3fMS1db26TW4RMyuXp%2Fu%2B038OuWXFupi7IRTdu8OmU%2B7AKwwt2lY7r%2BSb8i8NmZeklfEWQzNi1I7nA3%2BceYXYkUMD6mXQ2h42VZxY53zpd4H7sgQ0O7EmMjqxLFb2rlvzZzw%2FbYDe%2Bi1DSHvFG%2FVYhDU%2BgXiiDHnyMNoKmUlNoXaay0W27Ml%2B5LwKF67mngeUIIlpjNAICrqHfOkXRzrGf%2FIAVW7dIq50WvTHdqpfKEtvfhlRTB5mdCFAhz7GsmCSXQDerSY5oaQPlASznWahpnBJ0T24bhaGyZ7wBsXG%2BdWeVYSkhUGbpFrSS8fmhEOs82%2BSx84SwLWJDIAowf%2Bk2svahVZv1u3fOQKp9cpvX%2BFfqc26KVT5mq3TId%2Bewcv9O64QZdHsuL%2BlULL21sOa7PeJIpmWtB9mTZwCuqlR4smOYRkTKL68NM31Yd2p3lhgnQBdAqojJ68kh2dLiZIuMbPQxtS7rMK%2FT08EGOqUBaZ2xLf4BD4dkeT%2BB88qg9IGyT9ylSVaG%2FTPlLrpZXU%2FS0uzWtM1m787MQWNhcqEpKL4qrdq81yaElBhrMPUkNCSWCgDHxFcLrLkJSZEbqqm%2BM7du3piT9SiclDv7dZ7ghO16seeim0yjz4%2BZ2qa0ntzFUxciTqJ8XuYMzXEuowOdt%2BbB%2FJMtT4%2FA07X1wC7%2BACxI5RFwWD2QgpFULleiQBEye7dF&X-Amz-Signature=c72b3285d994b6f9ae2d39f13386c9bed324d012dced787abd39c1ca1e097283&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D24IH47%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIsb9%2B38NCaXhRlxJM6gAG%2BfJqSh8AW9x7aJcKmQYgQAiEAop3wlac59kqVdY%2BBFtqMi2aL41WfffSX91%2F2rpenT9wq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNjonWWcXu2WitqhRircA2OgLaH42qdSJdekkghhj%2FvyGCKuXEzbMUyzVKQosh5xE%2BIJKvsZtY7N7MtbDhiB%2BrLZ%2BSZ6snp0DOwu3COkdNAp%2F%2F7T4Ih9j1KK99wAdQ7KGwLMiFDj6X%2BtgxL7kc1XZyavwaP%2BklFwI%2Bu6woXPdnGwBvW6so3fMS1db26TW4RMyuXp%2Fu%2B038OuWXFupi7IRTdu8OmU%2B7AKwwt2lY7r%2BSb8i8NmZeklfEWQzNi1I7nA3%2BceYXYkUMD6mXQ2h42VZxY53zpd4H7sgQ0O7EmMjqxLFb2rlvzZzw%2FbYDe%2Bi1DSHvFG%2FVYhDU%2BgXiiDHnyMNoKmUlNoXaay0W27Ml%2B5LwKF67mngeUIIlpjNAICrqHfOkXRzrGf%2FIAVW7dIq50WvTHdqpfKEtvfhlRTB5mdCFAhz7GsmCSXQDerSY5oaQPlASznWahpnBJ0T24bhaGyZ7wBsXG%2BdWeVYSkhUGbpFrSS8fmhEOs82%2BSx84SwLWJDIAowf%2Bk2svahVZv1u3fOQKp9cpvX%2BFfqc26KVT5mq3TId%2Bewcv9O64QZdHsuL%2BlULL21sOa7PeJIpmWtB9mTZwCuqlR4smOYRkTKL68NM31Yd2p3lhgnQBdAqojJ68kh2dLiZIuMbPQxtS7rMK%2FT08EGOqUBaZ2xLf4BD4dkeT%2BB88qg9IGyT9ylSVaG%2FTPlLrpZXU%2FS0uzWtM1m787MQWNhcqEpKL4qrdq81yaElBhrMPUkNCSWCgDHxFcLrLkJSZEbqqm%2BM7du3piT9SiclDv7dZ7ghO16seeim0yjz4%2BZ2qa0ntzFUxciTqJ8XuYMzXEuowOdt%2BbB%2FJMtT4%2FA07X1wC7%2BACxI5RFwWD2QgpFULleiQBEye7dF&X-Amz-Signature=08fe1ba06859aab2495b6dcb2e1a91eddfb56c1d63de6380d779f3b5a809e714&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D24IH47%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIsb9%2B38NCaXhRlxJM6gAG%2BfJqSh8AW9x7aJcKmQYgQAiEAop3wlac59kqVdY%2BBFtqMi2aL41WfffSX91%2F2rpenT9wq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNjonWWcXu2WitqhRircA2OgLaH42qdSJdekkghhj%2FvyGCKuXEzbMUyzVKQosh5xE%2BIJKvsZtY7N7MtbDhiB%2BrLZ%2BSZ6snp0DOwu3COkdNAp%2F%2F7T4Ih9j1KK99wAdQ7KGwLMiFDj6X%2BtgxL7kc1XZyavwaP%2BklFwI%2Bu6woXPdnGwBvW6so3fMS1db26TW4RMyuXp%2Fu%2B038OuWXFupi7IRTdu8OmU%2B7AKwwt2lY7r%2BSb8i8NmZeklfEWQzNi1I7nA3%2BceYXYkUMD6mXQ2h42VZxY53zpd4H7sgQ0O7EmMjqxLFb2rlvzZzw%2FbYDe%2Bi1DSHvFG%2FVYhDU%2BgXiiDHnyMNoKmUlNoXaay0W27Ml%2B5LwKF67mngeUIIlpjNAICrqHfOkXRzrGf%2FIAVW7dIq50WvTHdqpfKEtvfhlRTB5mdCFAhz7GsmCSXQDerSY5oaQPlASznWahpnBJ0T24bhaGyZ7wBsXG%2BdWeVYSkhUGbpFrSS8fmhEOs82%2BSx84SwLWJDIAowf%2Bk2svahVZv1u3fOQKp9cpvX%2BFfqc26KVT5mq3TId%2Bewcv9O64QZdHsuL%2BlULL21sOa7PeJIpmWtB9mTZwCuqlR4smOYRkTKL68NM31Yd2p3lhgnQBdAqojJ68kh2dLiZIuMbPQxtS7rMK%2FT08EGOqUBaZ2xLf4BD4dkeT%2BB88qg9IGyT9ylSVaG%2FTPlLrpZXU%2FS0uzWtM1m787MQWNhcqEpKL4qrdq81yaElBhrMPUkNCSWCgDHxFcLrLkJSZEbqqm%2BM7du3piT9SiclDv7dZ7ghO16seeim0yjz4%2BZ2qa0ntzFUxciTqJ8XuYMzXEuowOdt%2BbB%2FJMtT4%2FA07X1wC7%2BACxI5RFwWD2QgpFULleiQBEye7dF&X-Amz-Signature=2dba2ac7e2a789a4ee82fa9ff5a50d348e23dd0848df1b10d6e502b2c5f12816&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
