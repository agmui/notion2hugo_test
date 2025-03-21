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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRTRMM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHt8q%2FduW8xqfPjo6b0A05LLKR4ZF18ncBWG4IwHZj90AiEAulViUGhBhqWCYj8E%2FjSsO57I1Y67G%2FQScyE6zj17zhYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5ZEmPamQIyIOGyxCrcA%2FbBBfObwWwgpWEiXMoTlAfkjo1aBPkbUytN6x%2FvMNiDod9Etz8epwfGE44nixo1mv5tbdauhdffRuRFEaoUEmv54XMpw2%2BRfKggXHXW4w7OKdc%2BVYieP93LQ4Pxjknv3QkYW1QBPnHcSFGQy%2Fouc7GqwjRr06N0lx71Zz0chiwDEQaZcAtXXNpN8hSgWz2TFa3doqwxKGptUiatRk4k2SBayC10qkMDOaUyNoY7KUROdMc15Z6hbHBpR4XFwYMACYjJa39iFRxKCZG2s3cs2Xv%2BiX24zp3cLQkqGtEekK9oSDA4yMnD8BAFE9C1Wpm%2BRQ7B12%2BYz3T1rVBNXg5gSQ2Ye66ASkdHpEixCxXN8uf%2FFDbznpq8sBJevQToQ3Y72FvVv3E8OAejC1bIZmFhLZjv5o%2BWBzQ2xW%2F%2BBzYaaeFIt1FXVMrtlk23MsP59yp8FHqBgVuom%2FfcwY5BcLN%2BK5VYVE6ephBMHzB5ZzjGuqhqi1lE%2BcQtKIUq6dnCK%2Frkuwq2BOQ1UrBJpoC7HNRFztke0I7wuhvhG9%2FisvCALkqIxlYGWnBDJxOD0PPPMU2agqgtCFdSBo6%2BEv3PaN63SQn8y6uYyk6nDeS3qbRSBmmzZqE%2ByCoFxOAyEw50MLTc9r4GOqUB345dvhU0SGbKmVVQhMDK4La2ZeuLuQD7J%2FjgrGDn6K6ReQaurv6HviwKpxxTVe%2FKGx%2BTY3vBir5FIrjV2efXfyUv4E0yDF%2FGc4yDUZbcItPCIaroU8Y16GBFwl2Z%2Fd6L0S%2BRzknuGghOXfmph92XAarNZACXlb4fuf1w15aSYuh7ic1EE6AB%2Bn5crG%2B9uZKhZqkbD4ROHhBgODpzBg9Qx6PfPs4H&X-Amz-Signature=9ea5e0a032985de138eeef299caf324e88d96c4a1a745c2a9ee1b33706ebfe2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRTRMM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHt8q%2FduW8xqfPjo6b0A05LLKR4ZF18ncBWG4IwHZj90AiEAulViUGhBhqWCYj8E%2FjSsO57I1Y67G%2FQScyE6zj17zhYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5ZEmPamQIyIOGyxCrcA%2FbBBfObwWwgpWEiXMoTlAfkjo1aBPkbUytN6x%2FvMNiDod9Etz8epwfGE44nixo1mv5tbdauhdffRuRFEaoUEmv54XMpw2%2BRfKggXHXW4w7OKdc%2BVYieP93LQ4Pxjknv3QkYW1QBPnHcSFGQy%2Fouc7GqwjRr06N0lx71Zz0chiwDEQaZcAtXXNpN8hSgWz2TFa3doqwxKGptUiatRk4k2SBayC10qkMDOaUyNoY7KUROdMc15Z6hbHBpR4XFwYMACYjJa39iFRxKCZG2s3cs2Xv%2BiX24zp3cLQkqGtEekK9oSDA4yMnD8BAFE9C1Wpm%2BRQ7B12%2BYz3T1rVBNXg5gSQ2Ye66ASkdHpEixCxXN8uf%2FFDbznpq8sBJevQToQ3Y72FvVv3E8OAejC1bIZmFhLZjv5o%2BWBzQ2xW%2F%2BBzYaaeFIt1FXVMrtlk23MsP59yp8FHqBgVuom%2FfcwY5BcLN%2BK5VYVE6ephBMHzB5ZzjGuqhqi1lE%2BcQtKIUq6dnCK%2Frkuwq2BOQ1UrBJpoC7HNRFztke0I7wuhvhG9%2FisvCALkqIxlYGWnBDJxOD0PPPMU2agqgtCFdSBo6%2BEv3PaN63SQn8y6uYyk6nDeS3qbRSBmmzZqE%2ByCoFxOAyEw50MLTc9r4GOqUB345dvhU0SGbKmVVQhMDK4La2ZeuLuQD7J%2FjgrGDn6K6ReQaurv6HviwKpxxTVe%2FKGx%2BTY3vBir5FIrjV2efXfyUv4E0yDF%2FGc4yDUZbcItPCIaroU8Y16GBFwl2Z%2Fd6L0S%2BRzknuGghOXfmph92XAarNZACXlb4fuf1w15aSYuh7ic1EE6AB%2Bn5crG%2B9uZKhZqkbD4ROHhBgODpzBg9Qx6PfPs4H&X-Amz-Signature=fd57726ff669c0e97aa0f21183901158fe2939c1fa2213ca72764517a4a30d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRTRMM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHt8q%2FduW8xqfPjo6b0A05LLKR4ZF18ncBWG4IwHZj90AiEAulViUGhBhqWCYj8E%2FjSsO57I1Y67G%2FQScyE6zj17zhYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5ZEmPamQIyIOGyxCrcA%2FbBBfObwWwgpWEiXMoTlAfkjo1aBPkbUytN6x%2FvMNiDod9Etz8epwfGE44nixo1mv5tbdauhdffRuRFEaoUEmv54XMpw2%2BRfKggXHXW4w7OKdc%2BVYieP93LQ4Pxjknv3QkYW1QBPnHcSFGQy%2Fouc7GqwjRr06N0lx71Zz0chiwDEQaZcAtXXNpN8hSgWz2TFa3doqwxKGptUiatRk4k2SBayC10qkMDOaUyNoY7KUROdMc15Z6hbHBpR4XFwYMACYjJa39iFRxKCZG2s3cs2Xv%2BiX24zp3cLQkqGtEekK9oSDA4yMnD8BAFE9C1Wpm%2BRQ7B12%2BYz3T1rVBNXg5gSQ2Ye66ASkdHpEixCxXN8uf%2FFDbznpq8sBJevQToQ3Y72FvVv3E8OAejC1bIZmFhLZjv5o%2BWBzQ2xW%2F%2BBzYaaeFIt1FXVMrtlk23MsP59yp8FHqBgVuom%2FfcwY5BcLN%2BK5VYVE6ephBMHzB5ZzjGuqhqi1lE%2BcQtKIUq6dnCK%2Frkuwq2BOQ1UrBJpoC7HNRFztke0I7wuhvhG9%2FisvCALkqIxlYGWnBDJxOD0PPPMU2agqgtCFdSBo6%2BEv3PaN63SQn8y6uYyk6nDeS3qbRSBmmzZqE%2ByCoFxOAyEw50MLTc9r4GOqUB345dvhU0SGbKmVVQhMDK4La2ZeuLuQD7J%2FjgrGDn6K6ReQaurv6HviwKpxxTVe%2FKGx%2BTY3vBir5FIrjV2efXfyUv4E0yDF%2FGc4yDUZbcItPCIaroU8Y16GBFwl2Z%2Fd6L0S%2BRzknuGghOXfmph92XAarNZACXlb4fuf1w15aSYuh7ic1EE6AB%2Bn5crG%2B9uZKhZqkbD4ROHhBgODpzBg9Qx6PfPs4H&X-Amz-Signature=2ce015e0d46fe2d6a737a21e2c4ac2d77b0128a7d4f999508b7254e6b5235caf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRTRMM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHt8q%2FduW8xqfPjo6b0A05LLKR4ZF18ncBWG4IwHZj90AiEAulViUGhBhqWCYj8E%2FjSsO57I1Y67G%2FQScyE6zj17zhYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5ZEmPamQIyIOGyxCrcA%2FbBBfObwWwgpWEiXMoTlAfkjo1aBPkbUytN6x%2FvMNiDod9Etz8epwfGE44nixo1mv5tbdauhdffRuRFEaoUEmv54XMpw2%2BRfKggXHXW4w7OKdc%2BVYieP93LQ4Pxjknv3QkYW1QBPnHcSFGQy%2Fouc7GqwjRr06N0lx71Zz0chiwDEQaZcAtXXNpN8hSgWz2TFa3doqwxKGptUiatRk4k2SBayC10qkMDOaUyNoY7KUROdMc15Z6hbHBpR4XFwYMACYjJa39iFRxKCZG2s3cs2Xv%2BiX24zp3cLQkqGtEekK9oSDA4yMnD8BAFE9C1Wpm%2BRQ7B12%2BYz3T1rVBNXg5gSQ2Ye66ASkdHpEixCxXN8uf%2FFDbznpq8sBJevQToQ3Y72FvVv3E8OAejC1bIZmFhLZjv5o%2BWBzQ2xW%2F%2BBzYaaeFIt1FXVMrtlk23MsP59yp8FHqBgVuom%2FfcwY5BcLN%2BK5VYVE6ephBMHzB5ZzjGuqhqi1lE%2BcQtKIUq6dnCK%2Frkuwq2BOQ1UrBJpoC7HNRFztke0I7wuhvhG9%2FisvCALkqIxlYGWnBDJxOD0PPPMU2agqgtCFdSBo6%2BEv3PaN63SQn8y6uYyk6nDeS3qbRSBmmzZqE%2ByCoFxOAyEw50MLTc9r4GOqUB345dvhU0SGbKmVVQhMDK4La2ZeuLuQD7J%2FjgrGDn6K6ReQaurv6HviwKpxxTVe%2FKGx%2BTY3vBir5FIrjV2efXfyUv4E0yDF%2FGc4yDUZbcItPCIaroU8Y16GBFwl2Z%2Fd6L0S%2BRzknuGghOXfmph92XAarNZACXlb4fuf1w15aSYuh7ic1EE6AB%2Bn5crG%2B9uZKhZqkbD4ROHhBgODpzBg9Qx6PfPs4H&X-Amz-Signature=607b78d1a15cac52d656e3de3ac346a652a6dd0041f4039ad76ea51d1bed0956&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRTRMM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHt8q%2FduW8xqfPjo6b0A05LLKR4ZF18ncBWG4IwHZj90AiEAulViUGhBhqWCYj8E%2FjSsO57I1Y67G%2FQScyE6zj17zhYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5ZEmPamQIyIOGyxCrcA%2FbBBfObwWwgpWEiXMoTlAfkjo1aBPkbUytN6x%2FvMNiDod9Etz8epwfGE44nixo1mv5tbdauhdffRuRFEaoUEmv54XMpw2%2BRfKggXHXW4w7OKdc%2BVYieP93LQ4Pxjknv3QkYW1QBPnHcSFGQy%2Fouc7GqwjRr06N0lx71Zz0chiwDEQaZcAtXXNpN8hSgWz2TFa3doqwxKGptUiatRk4k2SBayC10qkMDOaUyNoY7KUROdMc15Z6hbHBpR4XFwYMACYjJa39iFRxKCZG2s3cs2Xv%2BiX24zp3cLQkqGtEekK9oSDA4yMnD8BAFE9C1Wpm%2BRQ7B12%2BYz3T1rVBNXg5gSQ2Ye66ASkdHpEixCxXN8uf%2FFDbznpq8sBJevQToQ3Y72FvVv3E8OAejC1bIZmFhLZjv5o%2BWBzQ2xW%2F%2BBzYaaeFIt1FXVMrtlk23MsP59yp8FHqBgVuom%2FfcwY5BcLN%2BK5VYVE6ephBMHzB5ZzjGuqhqi1lE%2BcQtKIUq6dnCK%2Frkuwq2BOQ1UrBJpoC7HNRFztke0I7wuhvhG9%2FisvCALkqIxlYGWnBDJxOD0PPPMU2agqgtCFdSBo6%2BEv3PaN63SQn8y6uYyk6nDeS3qbRSBmmzZqE%2ByCoFxOAyEw50MLTc9r4GOqUB345dvhU0SGbKmVVQhMDK4La2ZeuLuQD7J%2FjgrGDn6K6ReQaurv6HviwKpxxTVe%2FKGx%2BTY3vBir5FIrjV2efXfyUv4E0yDF%2FGc4yDUZbcItPCIaroU8Y16GBFwl2Z%2Fd6L0S%2BRzknuGghOXfmph92XAarNZACXlb4fuf1w15aSYuh7ic1EE6AB%2Bn5crG%2B9uZKhZqkbD4ROHhBgODpzBg9Qx6PfPs4H&X-Amz-Signature=44bc806201d97df15861f0073e0fe30873507e5d76196f6f98c57e2e28a0675c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRTRMM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHt8q%2FduW8xqfPjo6b0A05LLKR4ZF18ncBWG4IwHZj90AiEAulViUGhBhqWCYj8E%2FjSsO57I1Y67G%2FQScyE6zj17zhYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5ZEmPamQIyIOGyxCrcA%2FbBBfObwWwgpWEiXMoTlAfkjo1aBPkbUytN6x%2FvMNiDod9Etz8epwfGE44nixo1mv5tbdauhdffRuRFEaoUEmv54XMpw2%2BRfKggXHXW4w7OKdc%2BVYieP93LQ4Pxjknv3QkYW1QBPnHcSFGQy%2Fouc7GqwjRr06N0lx71Zz0chiwDEQaZcAtXXNpN8hSgWz2TFa3doqwxKGptUiatRk4k2SBayC10qkMDOaUyNoY7KUROdMc15Z6hbHBpR4XFwYMACYjJa39iFRxKCZG2s3cs2Xv%2BiX24zp3cLQkqGtEekK9oSDA4yMnD8BAFE9C1Wpm%2BRQ7B12%2BYz3T1rVBNXg5gSQ2Ye66ASkdHpEixCxXN8uf%2FFDbznpq8sBJevQToQ3Y72FvVv3E8OAejC1bIZmFhLZjv5o%2BWBzQ2xW%2F%2BBzYaaeFIt1FXVMrtlk23MsP59yp8FHqBgVuom%2FfcwY5BcLN%2BK5VYVE6ephBMHzB5ZzjGuqhqi1lE%2BcQtKIUq6dnCK%2Frkuwq2BOQ1UrBJpoC7HNRFztke0I7wuhvhG9%2FisvCALkqIxlYGWnBDJxOD0PPPMU2agqgtCFdSBo6%2BEv3PaN63SQn8y6uYyk6nDeS3qbRSBmmzZqE%2ByCoFxOAyEw50MLTc9r4GOqUB345dvhU0SGbKmVVQhMDK4La2ZeuLuQD7J%2FjgrGDn6K6ReQaurv6HviwKpxxTVe%2FKGx%2BTY3vBir5FIrjV2efXfyUv4E0yDF%2FGc4yDUZbcItPCIaroU8Y16GBFwl2Z%2Fd6L0S%2BRzknuGghOXfmph92XAarNZACXlb4fuf1w15aSYuh7ic1EE6AB%2Bn5crG%2B9uZKhZqkbD4ROHhBgODpzBg9Qx6PfPs4H&X-Amz-Signature=516e2a87befa6c7f2121ac88e76b2314dc2aa04aeb8df7c839f819f940bfe579&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRTRMM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHt8q%2FduW8xqfPjo6b0A05LLKR4ZF18ncBWG4IwHZj90AiEAulViUGhBhqWCYj8E%2FjSsO57I1Y67G%2FQScyE6zj17zhYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5ZEmPamQIyIOGyxCrcA%2FbBBfObwWwgpWEiXMoTlAfkjo1aBPkbUytN6x%2FvMNiDod9Etz8epwfGE44nixo1mv5tbdauhdffRuRFEaoUEmv54XMpw2%2BRfKggXHXW4w7OKdc%2BVYieP93LQ4Pxjknv3QkYW1QBPnHcSFGQy%2Fouc7GqwjRr06N0lx71Zz0chiwDEQaZcAtXXNpN8hSgWz2TFa3doqwxKGptUiatRk4k2SBayC10qkMDOaUyNoY7KUROdMc15Z6hbHBpR4XFwYMACYjJa39iFRxKCZG2s3cs2Xv%2BiX24zp3cLQkqGtEekK9oSDA4yMnD8BAFE9C1Wpm%2BRQ7B12%2BYz3T1rVBNXg5gSQ2Ye66ASkdHpEixCxXN8uf%2FFDbznpq8sBJevQToQ3Y72FvVv3E8OAejC1bIZmFhLZjv5o%2BWBzQ2xW%2F%2BBzYaaeFIt1FXVMrtlk23MsP59yp8FHqBgVuom%2FfcwY5BcLN%2BK5VYVE6ephBMHzB5ZzjGuqhqi1lE%2BcQtKIUq6dnCK%2Frkuwq2BOQ1UrBJpoC7HNRFztke0I7wuhvhG9%2FisvCALkqIxlYGWnBDJxOD0PPPMU2agqgtCFdSBo6%2BEv3PaN63SQn8y6uYyk6nDeS3qbRSBmmzZqE%2ByCoFxOAyEw50MLTc9r4GOqUB345dvhU0SGbKmVVQhMDK4La2ZeuLuQD7J%2FjgrGDn6K6ReQaurv6HviwKpxxTVe%2FKGx%2BTY3vBir5FIrjV2efXfyUv4E0yDF%2FGc4yDUZbcItPCIaroU8Y16GBFwl2Z%2Fd6L0S%2BRzknuGghOXfmph92XAarNZACXlb4fuf1w15aSYuh7ic1EE6AB%2Bn5crG%2B9uZKhZqkbD4ROHhBgODpzBg9Qx6PfPs4H&X-Amz-Signature=65107ca81bb4fddefaeaba8f4a24354b88b44a2725c21a6b6d34cded5c1fcdda&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
