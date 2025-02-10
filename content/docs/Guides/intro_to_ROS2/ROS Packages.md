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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAXS7FK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpZa4R9SbV0CelcXlVyp44RIui%2FenZiJH%2FHrKdvsyjrAIgadBNyXG4z3Fn9Pvgtw72fr2WWcctx9zOVPKyGWZiKhMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmx7wY%2Bt896mYIC7ircAwd4%2BX07zyxsGkwWD0kfvv89gan94W%2BRP45RuPq3jfXT6oyHlg8kU%2BO3NoP%2FQJjwhrXDAmymwnFnQibFgj85KuFkumHgNgLbWm5nEfB2DvdFjHlkkHJ76gfsIbkx7DeLWZwDJkvXnk3ypoUgNuQnOwIDRBUKYwK9cqEj12vQECmxeqoCIlAqNaA73TA0w%2Fg4eIWS01Jj6a0qVPY20gJVpFfDpDrjkiK2GwG%2BUdrGealItj%2BrjmfJCXjzDi2TCSWhHeAjtFP%2FvLjeaS6x3RwhizS5Ddu%2F4aaMl61B8tUosSD7ADohDix%2BdKUWAJl6ccZjWKdO0wTWaUn0r9ncjQdpmZPNjxgmqwzr1tjN45nstdbIAXide1gVUedZ21DZfeFnUDJa22mtECuXYcpJH1ci2OGvFoy4WvZ826hfc7eJIiZF0XgI0SC%2BiL8EZAmB8DtKdV6HTEQp7fMoFNdMNs%2B5SMWHgKGLQ1nueJjWlYB%2FudMZ1hq960ThQhrUSRitrqclPvITwaGbASI6Kf07D%2BJKWevG8W2forbCM8HGOEpmCG%2BDobAfP4JMPyKahFyfEAEs2GZnEbhwixXnBprIrexYK53RpFS2ekZh0t%2BTjg7pL3kmDgMpndzywEZXQDTcMIzZpr0GOqUBwGXIXkphlf3jWc%2FNLRYaBexealhWW5bml2qD6mo57UTRVpS09RjuaF5IMYVpklHPTEYKWafC19CJv2pjxrQrUSg8Nzt4iO7uz6lzzPyLPaH3iMO3Gl6rNYfArIHpST3dcJkLJhrFd%2FVu0J1vUZsiOEyZeaR%2BmAkxzWRDUBJnhRgOQ7fc6%2B%2FQfU7feotDAEcE%2B3nzcoi503mjHucxr8rL3XWyUlE4&X-Amz-Signature=59c7d05d40e8f8124d9c256c400cd9393fca53badd78e98b14280b6543fd86ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAXS7FK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpZa4R9SbV0CelcXlVyp44RIui%2FenZiJH%2FHrKdvsyjrAIgadBNyXG4z3Fn9Pvgtw72fr2WWcctx9zOVPKyGWZiKhMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmx7wY%2Bt896mYIC7ircAwd4%2BX07zyxsGkwWD0kfvv89gan94W%2BRP45RuPq3jfXT6oyHlg8kU%2BO3NoP%2FQJjwhrXDAmymwnFnQibFgj85KuFkumHgNgLbWm5nEfB2DvdFjHlkkHJ76gfsIbkx7DeLWZwDJkvXnk3ypoUgNuQnOwIDRBUKYwK9cqEj12vQECmxeqoCIlAqNaA73TA0w%2Fg4eIWS01Jj6a0qVPY20gJVpFfDpDrjkiK2GwG%2BUdrGealItj%2BrjmfJCXjzDi2TCSWhHeAjtFP%2FvLjeaS6x3RwhizS5Ddu%2F4aaMl61B8tUosSD7ADohDix%2BdKUWAJl6ccZjWKdO0wTWaUn0r9ncjQdpmZPNjxgmqwzr1tjN45nstdbIAXide1gVUedZ21DZfeFnUDJa22mtECuXYcpJH1ci2OGvFoy4WvZ826hfc7eJIiZF0XgI0SC%2BiL8EZAmB8DtKdV6HTEQp7fMoFNdMNs%2B5SMWHgKGLQ1nueJjWlYB%2FudMZ1hq960ThQhrUSRitrqclPvITwaGbASI6Kf07D%2BJKWevG8W2forbCM8HGOEpmCG%2BDobAfP4JMPyKahFyfEAEs2GZnEbhwixXnBprIrexYK53RpFS2ekZh0t%2BTjg7pL3kmDgMpndzywEZXQDTcMIzZpr0GOqUBwGXIXkphlf3jWc%2FNLRYaBexealhWW5bml2qD6mo57UTRVpS09RjuaF5IMYVpklHPTEYKWafC19CJv2pjxrQrUSg8Nzt4iO7uz6lzzPyLPaH3iMO3Gl6rNYfArIHpST3dcJkLJhrFd%2FVu0J1vUZsiOEyZeaR%2BmAkxzWRDUBJnhRgOQ7fc6%2B%2FQfU7feotDAEcE%2B3nzcoi503mjHucxr8rL3XWyUlE4&X-Amz-Signature=4bb726c1eba0988f45957fee15b05f6c02b3870ce3df2ec2bee0c974666cf076&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAXS7FK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpZa4R9SbV0CelcXlVyp44RIui%2FenZiJH%2FHrKdvsyjrAIgadBNyXG4z3Fn9Pvgtw72fr2WWcctx9zOVPKyGWZiKhMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmx7wY%2Bt896mYIC7ircAwd4%2BX07zyxsGkwWD0kfvv89gan94W%2BRP45RuPq3jfXT6oyHlg8kU%2BO3NoP%2FQJjwhrXDAmymwnFnQibFgj85KuFkumHgNgLbWm5nEfB2DvdFjHlkkHJ76gfsIbkx7DeLWZwDJkvXnk3ypoUgNuQnOwIDRBUKYwK9cqEj12vQECmxeqoCIlAqNaA73TA0w%2Fg4eIWS01Jj6a0qVPY20gJVpFfDpDrjkiK2GwG%2BUdrGealItj%2BrjmfJCXjzDi2TCSWhHeAjtFP%2FvLjeaS6x3RwhizS5Ddu%2F4aaMl61B8tUosSD7ADohDix%2BdKUWAJl6ccZjWKdO0wTWaUn0r9ncjQdpmZPNjxgmqwzr1tjN45nstdbIAXide1gVUedZ21DZfeFnUDJa22mtECuXYcpJH1ci2OGvFoy4WvZ826hfc7eJIiZF0XgI0SC%2BiL8EZAmB8DtKdV6HTEQp7fMoFNdMNs%2B5SMWHgKGLQ1nueJjWlYB%2FudMZ1hq960ThQhrUSRitrqclPvITwaGbASI6Kf07D%2BJKWevG8W2forbCM8HGOEpmCG%2BDobAfP4JMPyKahFyfEAEs2GZnEbhwixXnBprIrexYK53RpFS2ekZh0t%2BTjg7pL3kmDgMpndzywEZXQDTcMIzZpr0GOqUBwGXIXkphlf3jWc%2FNLRYaBexealhWW5bml2qD6mo57UTRVpS09RjuaF5IMYVpklHPTEYKWafC19CJv2pjxrQrUSg8Nzt4iO7uz6lzzPyLPaH3iMO3Gl6rNYfArIHpST3dcJkLJhrFd%2FVu0J1vUZsiOEyZeaR%2BmAkxzWRDUBJnhRgOQ7fc6%2B%2FQfU7feotDAEcE%2B3nzcoi503mjHucxr8rL3XWyUlE4&X-Amz-Signature=78276198f46ab659216b177d464cd4a922ae1ec011139b327402625921695372&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAXS7FK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpZa4R9SbV0CelcXlVyp44RIui%2FenZiJH%2FHrKdvsyjrAIgadBNyXG4z3Fn9Pvgtw72fr2WWcctx9zOVPKyGWZiKhMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmx7wY%2Bt896mYIC7ircAwd4%2BX07zyxsGkwWD0kfvv89gan94W%2BRP45RuPq3jfXT6oyHlg8kU%2BO3NoP%2FQJjwhrXDAmymwnFnQibFgj85KuFkumHgNgLbWm5nEfB2DvdFjHlkkHJ76gfsIbkx7DeLWZwDJkvXnk3ypoUgNuQnOwIDRBUKYwK9cqEj12vQECmxeqoCIlAqNaA73TA0w%2Fg4eIWS01Jj6a0qVPY20gJVpFfDpDrjkiK2GwG%2BUdrGealItj%2BrjmfJCXjzDi2TCSWhHeAjtFP%2FvLjeaS6x3RwhizS5Ddu%2F4aaMl61B8tUosSD7ADohDix%2BdKUWAJl6ccZjWKdO0wTWaUn0r9ncjQdpmZPNjxgmqwzr1tjN45nstdbIAXide1gVUedZ21DZfeFnUDJa22mtECuXYcpJH1ci2OGvFoy4WvZ826hfc7eJIiZF0XgI0SC%2BiL8EZAmB8DtKdV6HTEQp7fMoFNdMNs%2B5SMWHgKGLQ1nueJjWlYB%2FudMZ1hq960ThQhrUSRitrqclPvITwaGbASI6Kf07D%2BJKWevG8W2forbCM8HGOEpmCG%2BDobAfP4JMPyKahFyfEAEs2GZnEbhwixXnBprIrexYK53RpFS2ekZh0t%2BTjg7pL3kmDgMpndzywEZXQDTcMIzZpr0GOqUBwGXIXkphlf3jWc%2FNLRYaBexealhWW5bml2qD6mo57UTRVpS09RjuaF5IMYVpklHPTEYKWafC19CJv2pjxrQrUSg8Nzt4iO7uz6lzzPyLPaH3iMO3Gl6rNYfArIHpST3dcJkLJhrFd%2FVu0J1vUZsiOEyZeaR%2BmAkxzWRDUBJnhRgOQ7fc6%2B%2FQfU7feotDAEcE%2B3nzcoi503mjHucxr8rL3XWyUlE4&X-Amz-Signature=6383605c0eb83576655f95942844b98001a2efa378fa9908e84e8ae08af1aac3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAXS7FK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpZa4R9SbV0CelcXlVyp44RIui%2FenZiJH%2FHrKdvsyjrAIgadBNyXG4z3Fn9Pvgtw72fr2WWcctx9zOVPKyGWZiKhMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmx7wY%2Bt896mYIC7ircAwd4%2BX07zyxsGkwWD0kfvv89gan94W%2BRP45RuPq3jfXT6oyHlg8kU%2BO3NoP%2FQJjwhrXDAmymwnFnQibFgj85KuFkumHgNgLbWm5nEfB2DvdFjHlkkHJ76gfsIbkx7DeLWZwDJkvXnk3ypoUgNuQnOwIDRBUKYwK9cqEj12vQECmxeqoCIlAqNaA73TA0w%2Fg4eIWS01Jj6a0qVPY20gJVpFfDpDrjkiK2GwG%2BUdrGealItj%2BrjmfJCXjzDi2TCSWhHeAjtFP%2FvLjeaS6x3RwhizS5Ddu%2F4aaMl61B8tUosSD7ADohDix%2BdKUWAJl6ccZjWKdO0wTWaUn0r9ncjQdpmZPNjxgmqwzr1tjN45nstdbIAXide1gVUedZ21DZfeFnUDJa22mtECuXYcpJH1ci2OGvFoy4WvZ826hfc7eJIiZF0XgI0SC%2BiL8EZAmB8DtKdV6HTEQp7fMoFNdMNs%2B5SMWHgKGLQ1nueJjWlYB%2FudMZ1hq960ThQhrUSRitrqclPvITwaGbASI6Kf07D%2BJKWevG8W2forbCM8HGOEpmCG%2BDobAfP4JMPyKahFyfEAEs2GZnEbhwixXnBprIrexYK53RpFS2ekZh0t%2BTjg7pL3kmDgMpndzywEZXQDTcMIzZpr0GOqUBwGXIXkphlf3jWc%2FNLRYaBexealhWW5bml2qD6mo57UTRVpS09RjuaF5IMYVpklHPTEYKWafC19CJv2pjxrQrUSg8Nzt4iO7uz6lzzPyLPaH3iMO3Gl6rNYfArIHpST3dcJkLJhrFd%2FVu0J1vUZsiOEyZeaR%2BmAkxzWRDUBJnhRgOQ7fc6%2B%2FQfU7feotDAEcE%2B3nzcoi503mjHucxr8rL3XWyUlE4&X-Amz-Signature=39dddd1152d3824f2402eb7235f47529bdf8a4897d0f1071d847364b64e43339&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAXS7FK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpZa4R9SbV0CelcXlVyp44RIui%2FenZiJH%2FHrKdvsyjrAIgadBNyXG4z3Fn9Pvgtw72fr2WWcctx9zOVPKyGWZiKhMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmx7wY%2Bt896mYIC7ircAwd4%2BX07zyxsGkwWD0kfvv89gan94W%2BRP45RuPq3jfXT6oyHlg8kU%2BO3NoP%2FQJjwhrXDAmymwnFnQibFgj85KuFkumHgNgLbWm5nEfB2DvdFjHlkkHJ76gfsIbkx7DeLWZwDJkvXnk3ypoUgNuQnOwIDRBUKYwK9cqEj12vQECmxeqoCIlAqNaA73TA0w%2Fg4eIWS01Jj6a0qVPY20gJVpFfDpDrjkiK2GwG%2BUdrGealItj%2BrjmfJCXjzDi2TCSWhHeAjtFP%2FvLjeaS6x3RwhizS5Ddu%2F4aaMl61B8tUosSD7ADohDix%2BdKUWAJl6ccZjWKdO0wTWaUn0r9ncjQdpmZPNjxgmqwzr1tjN45nstdbIAXide1gVUedZ21DZfeFnUDJa22mtECuXYcpJH1ci2OGvFoy4WvZ826hfc7eJIiZF0XgI0SC%2BiL8EZAmB8DtKdV6HTEQp7fMoFNdMNs%2B5SMWHgKGLQ1nueJjWlYB%2FudMZ1hq960ThQhrUSRitrqclPvITwaGbASI6Kf07D%2BJKWevG8W2forbCM8HGOEpmCG%2BDobAfP4JMPyKahFyfEAEs2GZnEbhwixXnBprIrexYK53RpFS2ekZh0t%2BTjg7pL3kmDgMpndzywEZXQDTcMIzZpr0GOqUBwGXIXkphlf3jWc%2FNLRYaBexealhWW5bml2qD6mo57UTRVpS09RjuaF5IMYVpklHPTEYKWafC19CJv2pjxrQrUSg8Nzt4iO7uz6lzzPyLPaH3iMO3Gl6rNYfArIHpST3dcJkLJhrFd%2FVu0J1vUZsiOEyZeaR%2BmAkxzWRDUBJnhRgOQ7fc6%2B%2FQfU7feotDAEcE%2B3nzcoi503mjHucxr8rL3XWyUlE4&X-Amz-Signature=61a4e9a3fde225290c6c828be752069331e02f748c9c46640edffd851560ef3a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAXS7FK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpZa4R9SbV0CelcXlVyp44RIui%2FenZiJH%2FHrKdvsyjrAIgadBNyXG4z3Fn9Pvgtw72fr2WWcctx9zOVPKyGWZiKhMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmx7wY%2Bt896mYIC7ircAwd4%2BX07zyxsGkwWD0kfvv89gan94W%2BRP45RuPq3jfXT6oyHlg8kU%2BO3NoP%2FQJjwhrXDAmymwnFnQibFgj85KuFkumHgNgLbWm5nEfB2DvdFjHlkkHJ76gfsIbkx7DeLWZwDJkvXnk3ypoUgNuQnOwIDRBUKYwK9cqEj12vQECmxeqoCIlAqNaA73TA0w%2Fg4eIWS01Jj6a0qVPY20gJVpFfDpDrjkiK2GwG%2BUdrGealItj%2BrjmfJCXjzDi2TCSWhHeAjtFP%2FvLjeaS6x3RwhizS5Ddu%2F4aaMl61B8tUosSD7ADohDix%2BdKUWAJl6ccZjWKdO0wTWaUn0r9ncjQdpmZPNjxgmqwzr1tjN45nstdbIAXide1gVUedZ21DZfeFnUDJa22mtECuXYcpJH1ci2OGvFoy4WvZ826hfc7eJIiZF0XgI0SC%2BiL8EZAmB8DtKdV6HTEQp7fMoFNdMNs%2B5SMWHgKGLQ1nueJjWlYB%2FudMZ1hq960ThQhrUSRitrqclPvITwaGbASI6Kf07D%2BJKWevG8W2forbCM8HGOEpmCG%2BDobAfP4JMPyKahFyfEAEs2GZnEbhwixXnBprIrexYK53RpFS2ekZh0t%2BTjg7pL3kmDgMpndzywEZXQDTcMIzZpr0GOqUBwGXIXkphlf3jWc%2FNLRYaBexealhWW5bml2qD6mo57UTRVpS09RjuaF5IMYVpklHPTEYKWafC19CJv2pjxrQrUSg8Nzt4iO7uz6lzzPyLPaH3iMO3Gl6rNYfArIHpST3dcJkLJhrFd%2FVu0J1vUZsiOEyZeaR%2BmAkxzWRDUBJnhRgOQ7fc6%2B%2FQfU7feotDAEcE%2B3nzcoi503mjHucxr8rL3XWyUlE4&X-Amz-Signature=976369098962c7ea3605fda1549fa757341795c1a095321f30a7f4b18d8acef5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
