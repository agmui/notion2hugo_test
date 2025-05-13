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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B53RWRE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGQoH33TBKH279pFn0CuLWcT6WJYNiylB0VpukSYHCkaAiEAiBlGlKqq82R1AqBgDlRbo19mWrQmKtEz%2BpSr7koULBsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW3Ylhycs9fEEalYyrcAx4g53kXMICdC%2FZMpsXTMpyfFX%2FScQZ%2Fo8leoXZNJmIq9YzaPikrcbq4dUk754fJfviyYxJimodBHL25o5dfJ00ySxGdoHfULY%2BtKiYvwditWW0v0yMkLJcq65f8zP03qbge0P6IquR6Xi6pGueHYRtdrOC%2FNbH5hAnP3%2FicoC9tXR2bfQN1AkJdWwtgTkHfYoOrm1IvkSKWfrT51kHjOtUmcnYnjf1Gct4zQP1CwL17gV3%2FwitKTgo%2BimPgoCbABo1iD9jbsYTqFN9rwqg39A9wpRGWRygxvfhkBl8uol7FdhiOFF%2Bg0vNRvM2ZAV%2F5Ryw79M8ls4dkd3yKCsUMQqO2sBcPW3Cod2%2BhuGxh4jXw%2B%2FYQKlGKWBL1W4%2FE8oGR1LWMbExNrmd4LWgrZCA%2BIMObjxtAnyd7z9fmgIQwWG2XtzqB8ZL1%2BgZ0qiDsOjSbWy5uxOPKclD%2Fr9gUqeDQL7ysLiwfs%2B0iV5QAnHsv8LkEgivDPqr%2Fo3iT7rFvbaaIZMZaz7e5BrXSxmIr8CTLKou9IEjhjlMrH7j2j3i7Hw%2FNbBd%2BXJo5gh0pk%2BqfPSA8JuY%2FoqVIxB6MqkNL8OgztHwuSrsD1V6kFPqsczLl%2Bn554BnL2JwkupjZhhVJMLeNj8EGOqUB3XO1iPtBwXdsp3T64mO1D2LK9jex29i0IeHAgebNO0HhVCfEFORWILRebxrdj1HeVl5j2qPsZkvUNSRWv2X%2BqKegnn56hb3lrrv0PpjW%2BRbTQBpJxVnrjMBzbP%2BHPJ8l96TXP9Chh%2FT%2Bu0jVl3g4xiHnt9Su2fY%2BYeTa2rLr%2BjIo4jl7RtbAZ3LE7PMZxEB06azB%2Bezk3bEA4IlEzcF%2BK0F2Vw6P&X-Amz-Signature=e2c4f6ca81e7b43e7abcc722d3a8ae7270671c2e0b3437b28dabc82956e37385&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B53RWRE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGQoH33TBKH279pFn0CuLWcT6WJYNiylB0VpukSYHCkaAiEAiBlGlKqq82R1AqBgDlRbo19mWrQmKtEz%2BpSr7koULBsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW3Ylhycs9fEEalYyrcAx4g53kXMICdC%2FZMpsXTMpyfFX%2FScQZ%2Fo8leoXZNJmIq9YzaPikrcbq4dUk754fJfviyYxJimodBHL25o5dfJ00ySxGdoHfULY%2BtKiYvwditWW0v0yMkLJcq65f8zP03qbge0P6IquR6Xi6pGueHYRtdrOC%2FNbH5hAnP3%2FicoC9tXR2bfQN1AkJdWwtgTkHfYoOrm1IvkSKWfrT51kHjOtUmcnYnjf1Gct4zQP1CwL17gV3%2FwitKTgo%2BimPgoCbABo1iD9jbsYTqFN9rwqg39A9wpRGWRygxvfhkBl8uol7FdhiOFF%2Bg0vNRvM2ZAV%2F5Ryw79M8ls4dkd3yKCsUMQqO2sBcPW3Cod2%2BhuGxh4jXw%2B%2FYQKlGKWBL1W4%2FE8oGR1LWMbExNrmd4LWgrZCA%2BIMObjxtAnyd7z9fmgIQwWG2XtzqB8ZL1%2BgZ0qiDsOjSbWy5uxOPKclD%2Fr9gUqeDQL7ysLiwfs%2B0iV5QAnHsv8LkEgivDPqr%2Fo3iT7rFvbaaIZMZaz7e5BrXSxmIr8CTLKou9IEjhjlMrH7j2j3i7Hw%2FNbBd%2BXJo5gh0pk%2BqfPSA8JuY%2FoqVIxB6MqkNL8OgztHwuSrsD1V6kFPqsczLl%2Bn554BnL2JwkupjZhhVJMLeNj8EGOqUB3XO1iPtBwXdsp3T64mO1D2LK9jex29i0IeHAgebNO0HhVCfEFORWILRebxrdj1HeVl5j2qPsZkvUNSRWv2X%2BqKegnn56hb3lrrv0PpjW%2BRbTQBpJxVnrjMBzbP%2BHPJ8l96TXP9Chh%2FT%2Bu0jVl3g4xiHnt9Su2fY%2BYeTa2rLr%2BjIo4jl7RtbAZ3LE7PMZxEB06azB%2Bezk3bEA4IlEzcF%2BK0F2Vw6P&X-Amz-Signature=c34e226bc7083969a48571a0ae43ef93521bcc4591ec51284dba1c641638e295&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B53RWRE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGQoH33TBKH279pFn0CuLWcT6WJYNiylB0VpukSYHCkaAiEAiBlGlKqq82R1AqBgDlRbo19mWrQmKtEz%2BpSr7koULBsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW3Ylhycs9fEEalYyrcAx4g53kXMICdC%2FZMpsXTMpyfFX%2FScQZ%2Fo8leoXZNJmIq9YzaPikrcbq4dUk754fJfviyYxJimodBHL25o5dfJ00ySxGdoHfULY%2BtKiYvwditWW0v0yMkLJcq65f8zP03qbge0P6IquR6Xi6pGueHYRtdrOC%2FNbH5hAnP3%2FicoC9tXR2bfQN1AkJdWwtgTkHfYoOrm1IvkSKWfrT51kHjOtUmcnYnjf1Gct4zQP1CwL17gV3%2FwitKTgo%2BimPgoCbABo1iD9jbsYTqFN9rwqg39A9wpRGWRygxvfhkBl8uol7FdhiOFF%2Bg0vNRvM2ZAV%2F5Ryw79M8ls4dkd3yKCsUMQqO2sBcPW3Cod2%2BhuGxh4jXw%2B%2FYQKlGKWBL1W4%2FE8oGR1LWMbExNrmd4LWgrZCA%2BIMObjxtAnyd7z9fmgIQwWG2XtzqB8ZL1%2BgZ0qiDsOjSbWy5uxOPKclD%2Fr9gUqeDQL7ysLiwfs%2B0iV5QAnHsv8LkEgivDPqr%2Fo3iT7rFvbaaIZMZaz7e5BrXSxmIr8CTLKou9IEjhjlMrH7j2j3i7Hw%2FNbBd%2BXJo5gh0pk%2BqfPSA8JuY%2FoqVIxB6MqkNL8OgztHwuSrsD1V6kFPqsczLl%2Bn554BnL2JwkupjZhhVJMLeNj8EGOqUB3XO1iPtBwXdsp3T64mO1D2LK9jex29i0IeHAgebNO0HhVCfEFORWILRebxrdj1HeVl5j2qPsZkvUNSRWv2X%2BqKegnn56hb3lrrv0PpjW%2BRbTQBpJxVnrjMBzbP%2BHPJ8l96TXP9Chh%2FT%2Bu0jVl3g4xiHnt9Su2fY%2BYeTa2rLr%2BjIo4jl7RtbAZ3LE7PMZxEB06azB%2Bezk3bEA4IlEzcF%2BK0F2Vw6P&X-Amz-Signature=e1032ff774802b659d564c7229dece6813a51b8a07ff4206e624f2bbf0b6288d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B53RWRE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGQoH33TBKH279pFn0CuLWcT6WJYNiylB0VpukSYHCkaAiEAiBlGlKqq82R1AqBgDlRbo19mWrQmKtEz%2BpSr7koULBsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW3Ylhycs9fEEalYyrcAx4g53kXMICdC%2FZMpsXTMpyfFX%2FScQZ%2Fo8leoXZNJmIq9YzaPikrcbq4dUk754fJfviyYxJimodBHL25o5dfJ00ySxGdoHfULY%2BtKiYvwditWW0v0yMkLJcq65f8zP03qbge0P6IquR6Xi6pGueHYRtdrOC%2FNbH5hAnP3%2FicoC9tXR2bfQN1AkJdWwtgTkHfYoOrm1IvkSKWfrT51kHjOtUmcnYnjf1Gct4zQP1CwL17gV3%2FwitKTgo%2BimPgoCbABo1iD9jbsYTqFN9rwqg39A9wpRGWRygxvfhkBl8uol7FdhiOFF%2Bg0vNRvM2ZAV%2F5Ryw79M8ls4dkd3yKCsUMQqO2sBcPW3Cod2%2BhuGxh4jXw%2B%2FYQKlGKWBL1W4%2FE8oGR1LWMbExNrmd4LWgrZCA%2BIMObjxtAnyd7z9fmgIQwWG2XtzqB8ZL1%2BgZ0qiDsOjSbWy5uxOPKclD%2Fr9gUqeDQL7ysLiwfs%2B0iV5QAnHsv8LkEgivDPqr%2Fo3iT7rFvbaaIZMZaz7e5BrXSxmIr8CTLKou9IEjhjlMrH7j2j3i7Hw%2FNbBd%2BXJo5gh0pk%2BqfPSA8JuY%2FoqVIxB6MqkNL8OgztHwuSrsD1V6kFPqsczLl%2Bn554BnL2JwkupjZhhVJMLeNj8EGOqUB3XO1iPtBwXdsp3T64mO1D2LK9jex29i0IeHAgebNO0HhVCfEFORWILRebxrdj1HeVl5j2qPsZkvUNSRWv2X%2BqKegnn56hb3lrrv0PpjW%2BRbTQBpJxVnrjMBzbP%2BHPJ8l96TXP9Chh%2FT%2Bu0jVl3g4xiHnt9Su2fY%2BYeTa2rLr%2BjIo4jl7RtbAZ3LE7PMZxEB06azB%2Bezk3bEA4IlEzcF%2BK0F2Vw6P&X-Amz-Signature=63c3b31fa138cfdd95e991d5bff452c870d082ded079de4d98dbf9f1c2a2ce13&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B53RWRE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGQoH33TBKH279pFn0CuLWcT6WJYNiylB0VpukSYHCkaAiEAiBlGlKqq82R1AqBgDlRbo19mWrQmKtEz%2BpSr7koULBsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW3Ylhycs9fEEalYyrcAx4g53kXMICdC%2FZMpsXTMpyfFX%2FScQZ%2Fo8leoXZNJmIq9YzaPikrcbq4dUk754fJfviyYxJimodBHL25o5dfJ00ySxGdoHfULY%2BtKiYvwditWW0v0yMkLJcq65f8zP03qbge0P6IquR6Xi6pGueHYRtdrOC%2FNbH5hAnP3%2FicoC9tXR2bfQN1AkJdWwtgTkHfYoOrm1IvkSKWfrT51kHjOtUmcnYnjf1Gct4zQP1CwL17gV3%2FwitKTgo%2BimPgoCbABo1iD9jbsYTqFN9rwqg39A9wpRGWRygxvfhkBl8uol7FdhiOFF%2Bg0vNRvM2ZAV%2F5Ryw79M8ls4dkd3yKCsUMQqO2sBcPW3Cod2%2BhuGxh4jXw%2B%2FYQKlGKWBL1W4%2FE8oGR1LWMbExNrmd4LWgrZCA%2BIMObjxtAnyd7z9fmgIQwWG2XtzqB8ZL1%2BgZ0qiDsOjSbWy5uxOPKclD%2Fr9gUqeDQL7ysLiwfs%2B0iV5QAnHsv8LkEgivDPqr%2Fo3iT7rFvbaaIZMZaz7e5BrXSxmIr8CTLKou9IEjhjlMrH7j2j3i7Hw%2FNbBd%2BXJo5gh0pk%2BqfPSA8JuY%2FoqVIxB6MqkNL8OgztHwuSrsD1V6kFPqsczLl%2Bn554BnL2JwkupjZhhVJMLeNj8EGOqUB3XO1iPtBwXdsp3T64mO1D2LK9jex29i0IeHAgebNO0HhVCfEFORWILRebxrdj1HeVl5j2qPsZkvUNSRWv2X%2BqKegnn56hb3lrrv0PpjW%2BRbTQBpJxVnrjMBzbP%2BHPJ8l96TXP9Chh%2FT%2Bu0jVl3g4xiHnt9Su2fY%2BYeTa2rLr%2BjIo4jl7RtbAZ3LE7PMZxEB06azB%2Bezk3bEA4IlEzcF%2BK0F2Vw6P&X-Amz-Signature=7e7fe282e4d47baebb1a1c9947ae27269dd514089c170eb318cd42e18c07b9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B53RWRE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGQoH33TBKH279pFn0CuLWcT6WJYNiylB0VpukSYHCkaAiEAiBlGlKqq82R1AqBgDlRbo19mWrQmKtEz%2BpSr7koULBsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW3Ylhycs9fEEalYyrcAx4g53kXMICdC%2FZMpsXTMpyfFX%2FScQZ%2Fo8leoXZNJmIq9YzaPikrcbq4dUk754fJfviyYxJimodBHL25o5dfJ00ySxGdoHfULY%2BtKiYvwditWW0v0yMkLJcq65f8zP03qbge0P6IquR6Xi6pGueHYRtdrOC%2FNbH5hAnP3%2FicoC9tXR2bfQN1AkJdWwtgTkHfYoOrm1IvkSKWfrT51kHjOtUmcnYnjf1Gct4zQP1CwL17gV3%2FwitKTgo%2BimPgoCbABo1iD9jbsYTqFN9rwqg39A9wpRGWRygxvfhkBl8uol7FdhiOFF%2Bg0vNRvM2ZAV%2F5Ryw79M8ls4dkd3yKCsUMQqO2sBcPW3Cod2%2BhuGxh4jXw%2B%2FYQKlGKWBL1W4%2FE8oGR1LWMbExNrmd4LWgrZCA%2BIMObjxtAnyd7z9fmgIQwWG2XtzqB8ZL1%2BgZ0qiDsOjSbWy5uxOPKclD%2Fr9gUqeDQL7ysLiwfs%2B0iV5QAnHsv8LkEgivDPqr%2Fo3iT7rFvbaaIZMZaz7e5BrXSxmIr8CTLKou9IEjhjlMrH7j2j3i7Hw%2FNbBd%2BXJo5gh0pk%2BqfPSA8JuY%2FoqVIxB6MqkNL8OgztHwuSrsD1V6kFPqsczLl%2Bn554BnL2JwkupjZhhVJMLeNj8EGOqUB3XO1iPtBwXdsp3T64mO1D2LK9jex29i0IeHAgebNO0HhVCfEFORWILRebxrdj1HeVl5j2qPsZkvUNSRWv2X%2BqKegnn56hb3lrrv0PpjW%2BRbTQBpJxVnrjMBzbP%2BHPJ8l96TXP9Chh%2FT%2Bu0jVl3g4xiHnt9Su2fY%2BYeTa2rLr%2BjIo4jl7RtbAZ3LE7PMZxEB06azB%2Bezk3bEA4IlEzcF%2BK0F2Vw6P&X-Amz-Signature=a697832971791479faf00da064769cb103b9ee4fa9c5462ffca7f3055018d236&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B53RWRE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGQoH33TBKH279pFn0CuLWcT6WJYNiylB0VpukSYHCkaAiEAiBlGlKqq82R1AqBgDlRbo19mWrQmKtEz%2BpSr7koULBsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW3Ylhycs9fEEalYyrcAx4g53kXMICdC%2FZMpsXTMpyfFX%2FScQZ%2Fo8leoXZNJmIq9YzaPikrcbq4dUk754fJfviyYxJimodBHL25o5dfJ00ySxGdoHfULY%2BtKiYvwditWW0v0yMkLJcq65f8zP03qbge0P6IquR6Xi6pGueHYRtdrOC%2FNbH5hAnP3%2FicoC9tXR2bfQN1AkJdWwtgTkHfYoOrm1IvkSKWfrT51kHjOtUmcnYnjf1Gct4zQP1CwL17gV3%2FwitKTgo%2BimPgoCbABo1iD9jbsYTqFN9rwqg39A9wpRGWRygxvfhkBl8uol7FdhiOFF%2Bg0vNRvM2ZAV%2F5Ryw79M8ls4dkd3yKCsUMQqO2sBcPW3Cod2%2BhuGxh4jXw%2B%2FYQKlGKWBL1W4%2FE8oGR1LWMbExNrmd4LWgrZCA%2BIMObjxtAnyd7z9fmgIQwWG2XtzqB8ZL1%2BgZ0qiDsOjSbWy5uxOPKclD%2Fr9gUqeDQL7ysLiwfs%2B0iV5QAnHsv8LkEgivDPqr%2Fo3iT7rFvbaaIZMZaz7e5BrXSxmIr8CTLKou9IEjhjlMrH7j2j3i7Hw%2FNbBd%2BXJo5gh0pk%2BqfPSA8JuY%2FoqVIxB6MqkNL8OgztHwuSrsD1V6kFPqsczLl%2Bn554BnL2JwkupjZhhVJMLeNj8EGOqUB3XO1iPtBwXdsp3T64mO1D2LK9jex29i0IeHAgebNO0HhVCfEFORWILRebxrdj1HeVl5j2qPsZkvUNSRWv2X%2BqKegnn56hb3lrrv0PpjW%2BRbTQBpJxVnrjMBzbP%2BHPJ8l96TXP9Chh%2FT%2Bu0jVl3g4xiHnt9Su2fY%2BYeTa2rLr%2BjIo4jl7RtbAZ3LE7PMZxEB06azB%2Bezk3bEA4IlEzcF%2BK0F2Vw6P&X-Amz-Signature=bced8c115588a8f3a9a0c06910ba71d62b6d992d36d8a964843dc9b7b8f9bf86&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
