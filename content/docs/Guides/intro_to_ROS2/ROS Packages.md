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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCNLBBE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezNLJS3g7tJVVo7NxYJVlv%2BFHSpEk1074dZHZJFT3KQIhAOmVXhjRexPyoL246QEIUaSpKD5KFppSWQ3NtrxARtXQKv8DCEsQABoMNjM3NDIzMTgzODA1Igzk4BcvqTZ7kI71ihUq3AP6kNw5K9dT4xW5KP8J%2F3vgFda21Dik5CE8h9i9cTCcJEhPFaniw3CDaje9Q%2BT359HeCA7bz3%2FaeD3jEV0YCFic%2BODzU2q08t%2BFRZ6E%2F5XhkS9xba83vYqIg%2BPrMv8r%2FjHKjNLe%2BWEPdgLJJpFZkdGgPzjWN5ClZmgb0nPsrEHWCWCmb6cLesVYIsp0CHrIktcej0qHP0P6QtmzYLHO6Hccz7HKzmNS21WM5dP8DL5dTWf9XPVyMHV6%2B4Ve1aaShUyMSbK6p3xGLvCycV8IaZJ3ou4PQ%2FDUVA8zZWN0SZpgNiq%2FkWcUVIIYrwIfYQE7mfUwAvxHHBQWS9xt5PeD4XDSOtiiCaj8AJHVlLklE4Nw%2B2LjAYCjhkQ82PRNBFLTi9IufYaO%2B4MSHpcIxT62%2FVw3DBo94aRAdLXv7iiVf32DX2PM42Gwmvio9viIS2ACTNMErXl9PsbiLPQ5LmYMTX7cn%2BdoWgy%2F9Qe5KgdZlM89Ml2hVUVRx37pNo2546buxFIiWcPp05COY6Ai0jQaiwmUd0BwieWZI3NQWZHuZY0pZlxBCfusMTLZNth9BAp%2Bn6xfKINJZcQPt%2F0foWTAgJ8%2FXyfQnVQ%2Bdd9wnTuEBHmPUFX6BLpSLSkWF5VWIDC%2FxeG%2BBjqkAQgwAtgSV0sFGvEeZ%2FZpgPDmWpguqYXtq0LuQi9yFOUohRJiD%2BD3WMB0dzlDkVYrztkju8qmCaNiSlPY422nmW4dycQMeJ559QJImcsI9BFf4RgEd1H05g%2F8fw1pZBqVxQzOfMV6sibkrIB4w1zO2H2oL41sQVvZhh8hzjTftoScgr9XBPUtPSR820ALfJwxiPhkPsHf5z6%2Fpu6QHM7A7xU7ddL7&X-Amz-Signature=c1e7e99e2d56ac123d760c90a938b29052bdd3655fcf57407f75a5a202940d33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCNLBBE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezNLJS3g7tJVVo7NxYJVlv%2BFHSpEk1074dZHZJFT3KQIhAOmVXhjRexPyoL246QEIUaSpKD5KFppSWQ3NtrxARtXQKv8DCEsQABoMNjM3NDIzMTgzODA1Igzk4BcvqTZ7kI71ihUq3AP6kNw5K9dT4xW5KP8J%2F3vgFda21Dik5CE8h9i9cTCcJEhPFaniw3CDaje9Q%2BT359HeCA7bz3%2FaeD3jEV0YCFic%2BODzU2q08t%2BFRZ6E%2F5XhkS9xba83vYqIg%2BPrMv8r%2FjHKjNLe%2BWEPdgLJJpFZkdGgPzjWN5ClZmgb0nPsrEHWCWCmb6cLesVYIsp0CHrIktcej0qHP0P6QtmzYLHO6Hccz7HKzmNS21WM5dP8DL5dTWf9XPVyMHV6%2B4Ve1aaShUyMSbK6p3xGLvCycV8IaZJ3ou4PQ%2FDUVA8zZWN0SZpgNiq%2FkWcUVIIYrwIfYQE7mfUwAvxHHBQWS9xt5PeD4XDSOtiiCaj8AJHVlLklE4Nw%2B2LjAYCjhkQ82PRNBFLTi9IufYaO%2B4MSHpcIxT62%2FVw3DBo94aRAdLXv7iiVf32DX2PM42Gwmvio9viIS2ACTNMErXl9PsbiLPQ5LmYMTX7cn%2BdoWgy%2F9Qe5KgdZlM89Ml2hVUVRx37pNo2546buxFIiWcPp05COY6Ai0jQaiwmUd0BwieWZI3NQWZHuZY0pZlxBCfusMTLZNth9BAp%2Bn6xfKINJZcQPt%2F0foWTAgJ8%2FXyfQnVQ%2Bdd9wnTuEBHmPUFX6BLpSLSkWF5VWIDC%2FxeG%2BBjqkAQgwAtgSV0sFGvEeZ%2FZpgPDmWpguqYXtq0LuQi9yFOUohRJiD%2BD3WMB0dzlDkVYrztkju8qmCaNiSlPY422nmW4dycQMeJ559QJImcsI9BFf4RgEd1H05g%2F8fw1pZBqVxQzOfMV6sibkrIB4w1zO2H2oL41sQVvZhh8hzjTftoScgr9XBPUtPSR820ALfJwxiPhkPsHf5z6%2Fpu6QHM7A7xU7ddL7&X-Amz-Signature=537c699e464a272252c3bdd50bc0f3d42f372ceeeb17b91d9d1734331f312799&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCNLBBE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezNLJS3g7tJVVo7NxYJVlv%2BFHSpEk1074dZHZJFT3KQIhAOmVXhjRexPyoL246QEIUaSpKD5KFppSWQ3NtrxARtXQKv8DCEsQABoMNjM3NDIzMTgzODA1Igzk4BcvqTZ7kI71ihUq3AP6kNw5K9dT4xW5KP8J%2F3vgFda21Dik5CE8h9i9cTCcJEhPFaniw3CDaje9Q%2BT359HeCA7bz3%2FaeD3jEV0YCFic%2BODzU2q08t%2BFRZ6E%2F5XhkS9xba83vYqIg%2BPrMv8r%2FjHKjNLe%2BWEPdgLJJpFZkdGgPzjWN5ClZmgb0nPsrEHWCWCmb6cLesVYIsp0CHrIktcej0qHP0P6QtmzYLHO6Hccz7HKzmNS21WM5dP8DL5dTWf9XPVyMHV6%2B4Ve1aaShUyMSbK6p3xGLvCycV8IaZJ3ou4PQ%2FDUVA8zZWN0SZpgNiq%2FkWcUVIIYrwIfYQE7mfUwAvxHHBQWS9xt5PeD4XDSOtiiCaj8AJHVlLklE4Nw%2B2LjAYCjhkQ82PRNBFLTi9IufYaO%2B4MSHpcIxT62%2FVw3DBo94aRAdLXv7iiVf32DX2PM42Gwmvio9viIS2ACTNMErXl9PsbiLPQ5LmYMTX7cn%2BdoWgy%2F9Qe5KgdZlM89Ml2hVUVRx37pNo2546buxFIiWcPp05COY6Ai0jQaiwmUd0BwieWZI3NQWZHuZY0pZlxBCfusMTLZNth9BAp%2Bn6xfKINJZcQPt%2F0foWTAgJ8%2FXyfQnVQ%2Bdd9wnTuEBHmPUFX6BLpSLSkWF5VWIDC%2FxeG%2BBjqkAQgwAtgSV0sFGvEeZ%2FZpgPDmWpguqYXtq0LuQi9yFOUohRJiD%2BD3WMB0dzlDkVYrztkju8qmCaNiSlPY422nmW4dycQMeJ559QJImcsI9BFf4RgEd1H05g%2F8fw1pZBqVxQzOfMV6sibkrIB4w1zO2H2oL41sQVvZhh8hzjTftoScgr9XBPUtPSR820ALfJwxiPhkPsHf5z6%2Fpu6QHM7A7xU7ddL7&X-Amz-Signature=68694a42f1cf85dab0fae105574f28e742d5fbd858f50fae9e057d3eff557395&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCNLBBE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezNLJS3g7tJVVo7NxYJVlv%2BFHSpEk1074dZHZJFT3KQIhAOmVXhjRexPyoL246QEIUaSpKD5KFppSWQ3NtrxARtXQKv8DCEsQABoMNjM3NDIzMTgzODA1Igzk4BcvqTZ7kI71ihUq3AP6kNw5K9dT4xW5KP8J%2F3vgFda21Dik5CE8h9i9cTCcJEhPFaniw3CDaje9Q%2BT359HeCA7bz3%2FaeD3jEV0YCFic%2BODzU2q08t%2BFRZ6E%2F5XhkS9xba83vYqIg%2BPrMv8r%2FjHKjNLe%2BWEPdgLJJpFZkdGgPzjWN5ClZmgb0nPsrEHWCWCmb6cLesVYIsp0CHrIktcej0qHP0P6QtmzYLHO6Hccz7HKzmNS21WM5dP8DL5dTWf9XPVyMHV6%2B4Ve1aaShUyMSbK6p3xGLvCycV8IaZJ3ou4PQ%2FDUVA8zZWN0SZpgNiq%2FkWcUVIIYrwIfYQE7mfUwAvxHHBQWS9xt5PeD4XDSOtiiCaj8AJHVlLklE4Nw%2B2LjAYCjhkQ82PRNBFLTi9IufYaO%2B4MSHpcIxT62%2FVw3DBo94aRAdLXv7iiVf32DX2PM42Gwmvio9viIS2ACTNMErXl9PsbiLPQ5LmYMTX7cn%2BdoWgy%2F9Qe5KgdZlM89Ml2hVUVRx37pNo2546buxFIiWcPp05COY6Ai0jQaiwmUd0BwieWZI3NQWZHuZY0pZlxBCfusMTLZNth9BAp%2Bn6xfKINJZcQPt%2F0foWTAgJ8%2FXyfQnVQ%2Bdd9wnTuEBHmPUFX6BLpSLSkWF5VWIDC%2FxeG%2BBjqkAQgwAtgSV0sFGvEeZ%2FZpgPDmWpguqYXtq0LuQi9yFOUohRJiD%2BD3WMB0dzlDkVYrztkju8qmCaNiSlPY422nmW4dycQMeJ559QJImcsI9BFf4RgEd1H05g%2F8fw1pZBqVxQzOfMV6sibkrIB4w1zO2H2oL41sQVvZhh8hzjTftoScgr9XBPUtPSR820ALfJwxiPhkPsHf5z6%2Fpu6QHM7A7xU7ddL7&X-Amz-Signature=ff9dc4ac8b5360171fad3bee3bb7532e8e923846aa02495b3b0e08dcb60eb1ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCNLBBE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezNLJS3g7tJVVo7NxYJVlv%2BFHSpEk1074dZHZJFT3KQIhAOmVXhjRexPyoL246QEIUaSpKD5KFppSWQ3NtrxARtXQKv8DCEsQABoMNjM3NDIzMTgzODA1Igzk4BcvqTZ7kI71ihUq3AP6kNw5K9dT4xW5KP8J%2F3vgFda21Dik5CE8h9i9cTCcJEhPFaniw3CDaje9Q%2BT359HeCA7bz3%2FaeD3jEV0YCFic%2BODzU2q08t%2BFRZ6E%2F5XhkS9xba83vYqIg%2BPrMv8r%2FjHKjNLe%2BWEPdgLJJpFZkdGgPzjWN5ClZmgb0nPsrEHWCWCmb6cLesVYIsp0CHrIktcej0qHP0P6QtmzYLHO6Hccz7HKzmNS21WM5dP8DL5dTWf9XPVyMHV6%2B4Ve1aaShUyMSbK6p3xGLvCycV8IaZJ3ou4PQ%2FDUVA8zZWN0SZpgNiq%2FkWcUVIIYrwIfYQE7mfUwAvxHHBQWS9xt5PeD4XDSOtiiCaj8AJHVlLklE4Nw%2B2LjAYCjhkQ82PRNBFLTi9IufYaO%2B4MSHpcIxT62%2FVw3DBo94aRAdLXv7iiVf32DX2PM42Gwmvio9viIS2ACTNMErXl9PsbiLPQ5LmYMTX7cn%2BdoWgy%2F9Qe5KgdZlM89Ml2hVUVRx37pNo2546buxFIiWcPp05COY6Ai0jQaiwmUd0BwieWZI3NQWZHuZY0pZlxBCfusMTLZNth9BAp%2Bn6xfKINJZcQPt%2F0foWTAgJ8%2FXyfQnVQ%2Bdd9wnTuEBHmPUFX6BLpSLSkWF5VWIDC%2FxeG%2BBjqkAQgwAtgSV0sFGvEeZ%2FZpgPDmWpguqYXtq0LuQi9yFOUohRJiD%2BD3WMB0dzlDkVYrztkju8qmCaNiSlPY422nmW4dycQMeJ559QJImcsI9BFf4RgEd1H05g%2F8fw1pZBqVxQzOfMV6sibkrIB4w1zO2H2oL41sQVvZhh8hzjTftoScgr9XBPUtPSR820ALfJwxiPhkPsHf5z6%2Fpu6QHM7A7xU7ddL7&X-Amz-Signature=6dd8f2afede2a6e8e68311a90cda1f582b83cfccacc441da89a91a5435b1e66b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCNLBBE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezNLJS3g7tJVVo7NxYJVlv%2BFHSpEk1074dZHZJFT3KQIhAOmVXhjRexPyoL246QEIUaSpKD5KFppSWQ3NtrxARtXQKv8DCEsQABoMNjM3NDIzMTgzODA1Igzk4BcvqTZ7kI71ihUq3AP6kNw5K9dT4xW5KP8J%2F3vgFda21Dik5CE8h9i9cTCcJEhPFaniw3CDaje9Q%2BT359HeCA7bz3%2FaeD3jEV0YCFic%2BODzU2q08t%2BFRZ6E%2F5XhkS9xba83vYqIg%2BPrMv8r%2FjHKjNLe%2BWEPdgLJJpFZkdGgPzjWN5ClZmgb0nPsrEHWCWCmb6cLesVYIsp0CHrIktcej0qHP0P6QtmzYLHO6Hccz7HKzmNS21WM5dP8DL5dTWf9XPVyMHV6%2B4Ve1aaShUyMSbK6p3xGLvCycV8IaZJ3ou4PQ%2FDUVA8zZWN0SZpgNiq%2FkWcUVIIYrwIfYQE7mfUwAvxHHBQWS9xt5PeD4XDSOtiiCaj8AJHVlLklE4Nw%2B2LjAYCjhkQ82PRNBFLTi9IufYaO%2B4MSHpcIxT62%2FVw3DBo94aRAdLXv7iiVf32DX2PM42Gwmvio9viIS2ACTNMErXl9PsbiLPQ5LmYMTX7cn%2BdoWgy%2F9Qe5KgdZlM89Ml2hVUVRx37pNo2546buxFIiWcPp05COY6Ai0jQaiwmUd0BwieWZI3NQWZHuZY0pZlxBCfusMTLZNth9BAp%2Bn6xfKINJZcQPt%2F0foWTAgJ8%2FXyfQnVQ%2Bdd9wnTuEBHmPUFX6BLpSLSkWF5VWIDC%2FxeG%2BBjqkAQgwAtgSV0sFGvEeZ%2FZpgPDmWpguqYXtq0LuQi9yFOUohRJiD%2BD3WMB0dzlDkVYrztkju8qmCaNiSlPY422nmW4dycQMeJ559QJImcsI9BFf4RgEd1H05g%2F8fw1pZBqVxQzOfMV6sibkrIB4w1zO2H2oL41sQVvZhh8hzjTftoScgr9XBPUtPSR820ALfJwxiPhkPsHf5z6%2Fpu6QHM7A7xU7ddL7&X-Amz-Signature=b2f7c9b685d464c1001471b70633896cb5f33e0809eed4e144c10f9bb722ddea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCNLBBE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezNLJS3g7tJVVo7NxYJVlv%2BFHSpEk1074dZHZJFT3KQIhAOmVXhjRexPyoL246QEIUaSpKD5KFppSWQ3NtrxARtXQKv8DCEsQABoMNjM3NDIzMTgzODA1Igzk4BcvqTZ7kI71ihUq3AP6kNw5K9dT4xW5KP8J%2F3vgFda21Dik5CE8h9i9cTCcJEhPFaniw3CDaje9Q%2BT359HeCA7bz3%2FaeD3jEV0YCFic%2BODzU2q08t%2BFRZ6E%2F5XhkS9xba83vYqIg%2BPrMv8r%2FjHKjNLe%2BWEPdgLJJpFZkdGgPzjWN5ClZmgb0nPsrEHWCWCmb6cLesVYIsp0CHrIktcej0qHP0P6QtmzYLHO6Hccz7HKzmNS21WM5dP8DL5dTWf9XPVyMHV6%2B4Ve1aaShUyMSbK6p3xGLvCycV8IaZJ3ou4PQ%2FDUVA8zZWN0SZpgNiq%2FkWcUVIIYrwIfYQE7mfUwAvxHHBQWS9xt5PeD4XDSOtiiCaj8AJHVlLklE4Nw%2B2LjAYCjhkQ82PRNBFLTi9IufYaO%2B4MSHpcIxT62%2FVw3DBo94aRAdLXv7iiVf32DX2PM42Gwmvio9viIS2ACTNMErXl9PsbiLPQ5LmYMTX7cn%2BdoWgy%2F9Qe5KgdZlM89Ml2hVUVRx37pNo2546buxFIiWcPp05COY6Ai0jQaiwmUd0BwieWZI3NQWZHuZY0pZlxBCfusMTLZNth9BAp%2Bn6xfKINJZcQPt%2F0foWTAgJ8%2FXyfQnVQ%2Bdd9wnTuEBHmPUFX6BLpSLSkWF5VWIDC%2FxeG%2BBjqkAQgwAtgSV0sFGvEeZ%2FZpgPDmWpguqYXtq0LuQi9yFOUohRJiD%2BD3WMB0dzlDkVYrztkju8qmCaNiSlPY422nmW4dycQMeJ559QJImcsI9BFf4RgEd1H05g%2F8fw1pZBqVxQzOfMV6sibkrIB4w1zO2H2oL41sQVvZhh8hzjTftoScgr9XBPUtPSR820ALfJwxiPhkPsHf5z6%2Fpu6QHM7A7xU7ddL7&X-Amz-Signature=94691f4c474ec3c4051c54f90a781a78dd5b7f198a8533eaea9c01822908f804&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
