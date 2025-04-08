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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5O44EV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmTR3eZTss5Qax40UyiF%2F6lPvjIpHCrvbWzIFCurHIyAiEAmsnLPoaHOP1gZfvDyoWIMp4WYesZCTPHpVp6zeApGuoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDO8dx0o%2F4XkMC%2B24ACrcA3A5znRDp3eoerV2ZS%2FUJIIXV%2BtJN41f6KnNQQ7%2F0qWsNHJnRiN8vJH%2FgCTdVtj%2B8MG2LUk7zD0HRl9AXYnj6sSlt78qHvuh6B9UfVdzoVhBZf6DX63YhxDB0rNf9ta8qoSLTudhGPnag8%2BiDh9wKXmSREJcg3vm%2FEVZL3FEPpRYCngMS390N3LCddD%2BTSWRbhl4M1fy7cYkBHwKuUkOzE%2FD1nv4rXnL4EmTayLD%2BXffj%2FJp4HuNwzycJcwvTwWg8gaICFJyiifZmM%2FXC23upYh9XH%2Fk1an2L8wE8vkUFhjvr8%2F15APCIOIYikkYKCxDUrgkmujjYkDy52fHkDwXpnUng0wiJT0YyR%2FjGf%2FgIeXmaP9ACny43i7bN%2FRS8kRRAxj5xR6Kl5QnkF4XvNqICQmHipHnnxqxFYgMwV9EyGIHd5mOqFch4duxynJ5rfcEcnTjJP3uceNPIL2sSfqC%2BxTJbcN6Uc3zycPBGiCJry4m8NECcW0i6b7AhcRHfKrsU98IoeFzTxb6OTzs0BwVv444ogScsluMQWQvDDy0sapgYWNIHrPdsbpC66FiWfN3pviyc4Y9MATyR8FeVyW5BdjKg3JraB7Wwvo7wv9WI0bTijAe3yYsvF2j6IAlMMK40b8GOqUBLAvDMyM9I%2B2YOkkuFVwx9rSsCSFVA9tcRL2OrYaMmg39Eh90oTfNavO7ppw4EZM59oc0JZvvw0XpRlO9oGpJ8W66xv2KBqH23Z5uSYvZFoPBmJ0A2xC%2BwZFnjKC1tzz%2F1BjLzWJLWSN%2FRuLVeUfZiwTgsAA92KEqZgepjyi8jmZc%2FOLfCsgWIWhM1TJHdYW%2FqF%2Fnlo027ObyZNwerqTkdgh9q1Sq&X-Amz-Signature=3256c95ef73ad81c40a53d72334e28c09f784b16641a58181d6d58c95413b594&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5O44EV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmTR3eZTss5Qax40UyiF%2F6lPvjIpHCrvbWzIFCurHIyAiEAmsnLPoaHOP1gZfvDyoWIMp4WYesZCTPHpVp6zeApGuoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDO8dx0o%2F4XkMC%2B24ACrcA3A5znRDp3eoerV2ZS%2FUJIIXV%2BtJN41f6KnNQQ7%2F0qWsNHJnRiN8vJH%2FgCTdVtj%2B8MG2LUk7zD0HRl9AXYnj6sSlt78qHvuh6B9UfVdzoVhBZf6DX63YhxDB0rNf9ta8qoSLTudhGPnag8%2BiDh9wKXmSREJcg3vm%2FEVZL3FEPpRYCngMS390N3LCddD%2BTSWRbhl4M1fy7cYkBHwKuUkOzE%2FD1nv4rXnL4EmTayLD%2BXffj%2FJp4HuNwzycJcwvTwWg8gaICFJyiifZmM%2FXC23upYh9XH%2Fk1an2L8wE8vkUFhjvr8%2F15APCIOIYikkYKCxDUrgkmujjYkDy52fHkDwXpnUng0wiJT0YyR%2FjGf%2FgIeXmaP9ACny43i7bN%2FRS8kRRAxj5xR6Kl5QnkF4XvNqICQmHipHnnxqxFYgMwV9EyGIHd5mOqFch4duxynJ5rfcEcnTjJP3uceNPIL2sSfqC%2BxTJbcN6Uc3zycPBGiCJry4m8NECcW0i6b7AhcRHfKrsU98IoeFzTxb6OTzs0BwVv444ogScsluMQWQvDDy0sapgYWNIHrPdsbpC66FiWfN3pviyc4Y9MATyR8FeVyW5BdjKg3JraB7Wwvo7wv9WI0bTijAe3yYsvF2j6IAlMMK40b8GOqUBLAvDMyM9I%2B2YOkkuFVwx9rSsCSFVA9tcRL2OrYaMmg39Eh90oTfNavO7ppw4EZM59oc0JZvvw0XpRlO9oGpJ8W66xv2KBqH23Z5uSYvZFoPBmJ0A2xC%2BwZFnjKC1tzz%2F1BjLzWJLWSN%2FRuLVeUfZiwTgsAA92KEqZgepjyi8jmZc%2FOLfCsgWIWhM1TJHdYW%2FqF%2Fnlo027ObyZNwerqTkdgh9q1Sq&X-Amz-Signature=8ec9c85407c2c9635f71f4817540d2199bc939ab173b3008cac628d930d40e70&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5O44EV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmTR3eZTss5Qax40UyiF%2F6lPvjIpHCrvbWzIFCurHIyAiEAmsnLPoaHOP1gZfvDyoWIMp4WYesZCTPHpVp6zeApGuoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDO8dx0o%2F4XkMC%2B24ACrcA3A5znRDp3eoerV2ZS%2FUJIIXV%2BtJN41f6KnNQQ7%2F0qWsNHJnRiN8vJH%2FgCTdVtj%2B8MG2LUk7zD0HRl9AXYnj6sSlt78qHvuh6B9UfVdzoVhBZf6DX63YhxDB0rNf9ta8qoSLTudhGPnag8%2BiDh9wKXmSREJcg3vm%2FEVZL3FEPpRYCngMS390N3LCddD%2BTSWRbhl4M1fy7cYkBHwKuUkOzE%2FD1nv4rXnL4EmTayLD%2BXffj%2FJp4HuNwzycJcwvTwWg8gaICFJyiifZmM%2FXC23upYh9XH%2Fk1an2L8wE8vkUFhjvr8%2F15APCIOIYikkYKCxDUrgkmujjYkDy52fHkDwXpnUng0wiJT0YyR%2FjGf%2FgIeXmaP9ACny43i7bN%2FRS8kRRAxj5xR6Kl5QnkF4XvNqICQmHipHnnxqxFYgMwV9EyGIHd5mOqFch4duxynJ5rfcEcnTjJP3uceNPIL2sSfqC%2BxTJbcN6Uc3zycPBGiCJry4m8NECcW0i6b7AhcRHfKrsU98IoeFzTxb6OTzs0BwVv444ogScsluMQWQvDDy0sapgYWNIHrPdsbpC66FiWfN3pviyc4Y9MATyR8FeVyW5BdjKg3JraB7Wwvo7wv9WI0bTijAe3yYsvF2j6IAlMMK40b8GOqUBLAvDMyM9I%2B2YOkkuFVwx9rSsCSFVA9tcRL2OrYaMmg39Eh90oTfNavO7ppw4EZM59oc0JZvvw0XpRlO9oGpJ8W66xv2KBqH23Z5uSYvZFoPBmJ0A2xC%2BwZFnjKC1tzz%2F1BjLzWJLWSN%2FRuLVeUfZiwTgsAA92KEqZgepjyi8jmZc%2FOLfCsgWIWhM1TJHdYW%2FqF%2Fnlo027ObyZNwerqTkdgh9q1Sq&X-Amz-Signature=c06342dbf10b47e7268e31f80d0331fa886bbe64ee8c45ad0594c3a5be72f588&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5O44EV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmTR3eZTss5Qax40UyiF%2F6lPvjIpHCrvbWzIFCurHIyAiEAmsnLPoaHOP1gZfvDyoWIMp4WYesZCTPHpVp6zeApGuoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDO8dx0o%2F4XkMC%2B24ACrcA3A5znRDp3eoerV2ZS%2FUJIIXV%2BtJN41f6KnNQQ7%2F0qWsNHJnRiN8vJH%2FgCTdVtj%2B8MG2LUk7zD0HRl9AXYnj6sSlt78qHvuh6B9UfVdzoVhBZf6DX63YhxDB0rNf9ta8qoSLTudhGPnag8%2BiDh9wKXmSREJcg3vm%2FEVZL3FEPpRYCngMS390N3LCddD%2BTSWRbhl4M1fy7cYkBHwKuUkOzE%2FD1nv4rXnL4EmTayLD%2BXffj%2FJp4HuNwzycJcwvTwWg8gaICFJyiifZmM%2FXC23upYh9XH%2Fk1an2L8wE8vkUFhjvr8%2F15APCIOIYikkYKCxDUrgkmujjYkDy52fHkDwXpnUng0wiJT0YyR%2FjGf%2FgIeXmaP9ACny43i7bN%2FRS8kRRAxj5xR6Kl5QnkF4XvNqICQmHipHnnxqxFYgMwV9EyGIHd5mOqFch4duxynJ5rfcEcnTjJP3uceNPIL2sSfqC%2BxTJbcN6Uc3zycPBGiCJry4m8NECcW0i6b7AhcRHfKrsU98IoeFzTxb6OTzs0BwVv444ogScsluMQWQvDDy0sapgYWNIHrPdsbpC66FiWfN3pviyc4Y9MATyR8FeVyW5BdjKg3JraB7Wwvo7wv9WI0bTijAe3yYsvF2j6IAlMMK40b8GOqUBLAvDMyM9I%2B2YOkkuFVwx9rSsCSFVA9tcRL2OrYaMmg39Eh90oTfNavO7ppw4EZM59oc0JZvvw0XpRlO9oGpJ8W66xv2KBqH23Z5uSYvZFoPBmJ0A2xC%2BwZFnjKC1tzz%2F1BjLzWJLWSN%2FRuLVeUfZiwTgsAA92KEqZgepjyi8jmZc%2FOLfCsgWIWhM1TJHdYW%2FqF%2Fnlo027ObyZNwerqTkdgh9q1Sq&X-Amz-Signature=8628273b3ac45476c0193a59a23e45471f3627dfa15b5b992da81764a262dd4d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5O44EV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmTR3eZTss5Qax40UyiF%2F6lPvjIpHCrvbWzIFCurHIyAiEAmsnLPoaHOP1gZfvDyoWIMp4WYesZCTPHpVp6zeApGuoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDO8dx0o%2F4XkMC%2B24ACrcA3A5znRDp3eoerV2ZS%2FUJIIXV%2BtJN41f6KnNQQ7%2F0qWsNHJnRiN8vJH%2FgCTdVtj%2B8MG2LUk7zD0HRl9AXYnj6sSlt78qHvuh6B9UfVdzoVhBZf6DX63YhxDB0rNf9ta8qoSLTudhGPnag8%2BiDh9wKXmSREJcg3vm%2FEVZL3FEPpRYCngMS390N3LCddD%2BTSWRbhl4M1fy7cYkBHwKuUkOzE%2FD1nv4rXnL4EmTayLD%2BXffj%2FJp4HuNwzycJcwvTwWg8gaICFJyiifZmM%2FXC23upYh9XH%2Fk1an2L8wE8vkUFhjvr8%2F15APCIOIYikkYKCxDUrgkmujjYkDy52fHkDwXpnUng0wiJT0YyR%2FjGf%2FgIeXmaP9ACny43i7bN%2FRS8kRRAxj5xR6Kl5QnkF4XvNqICQmHipHnnxqxFYgMwV9EyGIHd5mOqFch4duxynJ5rfcEcnTjJP3uceNPIL2sSfqC%2BxTJbcN6Uc3zycPBGiCJry4m8NECcW0i6b7AhcRHfKrsU98IoeFzTxb6OTzs0BwVv444ogScsluMQWQvDDy0sapgYWNIHrPdsbpC66FiWfN3pviyc4Y9MATyR8FeVyW5BdjKg3JraB7Wwvo7wv9WI0bTijAe3yYsvF2j6IAlMMK40b8GOqUBLAvDMyM9I%2B2YOkkuFVwx9rSsCSFVA9tcRL2OrYaMmg39Eh90oTfNavO7ppw4EZM59oc0JZvvw0XpRlO9oGpJ8W66xv2KBqH23Z5uSYvZFoPBmJ0A2xC%2BwZFnjKC1tzz%2F1BjLzWJLWSN%2FRuLVeUfZiwTgsAA92KEqZgepjyi8jmZc%2FOLfCsgWIWhM1TJHdYW%2FqF%2Fnlo027ObyZNwerqTkdgh9q1Sq&X-Amz-Signature=2e6a9c9565c5a4013278e217eadd2b7cdd7e0803765b6b39fc3f9b7019909242&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5O44EV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmTR3eZTss5Qax40UyiF%2F6lPvjIpHCrvbWzIFCurHIyAiEAmsnLPoaHOP1gZfvDyoWIMp4WYesZCTPHpVp6zeApGuoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDO8dx0o%2F4XkMC%2B24ACrcA3A5znRDp3eoerV2ZS%2FUJIIXV%2BtJN41f6KnNQQ7%2F0qWsNHJnRiN8vJH%2FgCTdVtj%2B8MG2LUk7zD0HRl9AXYnj6sSlt78qHvuh6B9UfVdzoVhBZf6DX63YhxDB0rNf9ta8qoSLTudhGPnag8%2BiDh9wKXmSREJcg3vm%2FEVZL3FEPpRYCngMS390N3LCddD%2BTSWRbhl4M1fy7cYkBHwKuUkOzE%2FD1nv4rXnL4EmTayLD%2BXffj%2FJp4HuNwzycJcwvTwWg8gaICFJyiifZmM%2FXC23upYh9XH%2Fk1an2L8wE8vkUFhjvr8%2F15APCIOIYikkYKCxDUrgkmujjYkDy52fHkDwXpnUng0wiJT0YyR%2FjGf%2FgIeXmaP9ACny43i7bN%2FRS8kRRAxj5xR6Kl5QnkF4XvNqICQmHipHnnxqxFYgMwV9EyGIHd5mOqFch4duxynJ5rfcEcnTjJP3uceNPIL2sSfqC%2BxTJbcN6Uc3zycPBGiCJry4m8NECcW0i6b7AhcRHfKrsU98IoeFzTxb6OTzs0BwVv444ogScsluMQWQvDDy0sapgYWNIHrPdsbpC66FiWfN3pviyc4Y9MATyR8FeVyW5BdjKg3JraB7Wwvo7wv9WI0bTijAe3yYsvF2j6IAlMMK40b8GOqUBLAvDMyM9I%2B2YOkkuFVwx9rSsCSFVA9tcRL2OrYaMmg39Eh90oTfNavO7ppw4EZM59oc0JZvvw0XpRlO9oGpJ8W66xv2KBqH23Z5uSYvZFoPBmJ0A2xC%2BwZFnjKC1tzz%2F1BjLzWJLWSN%2FRuLVeUfZiwTgsAA92KEqZgepjyi8jmZc%2FOLfCsgWIWhM1TJHdYW%2FqF%2Fnlo027ObyZNwerqTkdgh9q1Sq&X-Amz-Signature=c8d750bf8f1a40788eafb955b970f79bea63e0d45fdb087216dc08574295b115&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5O44EV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmTR3eZTss5Qax40UyiF%2F6lPvjIpHCrvbWzIFCurHIyAiEAmsnLPoaHOP1gZfvDyoWIMp4WYesZCTPHpVp6zeApGuoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDO8dx0o%2F4XkMC%2B24ACrcA3A5znRDp3eoerV2ZS%2FUJIIXV%2BtJN41f6KnNQQ7%2F0qWsNHJnRiN8vJH%2FgCTdVtj%2B8MG2LUk7zD0HRl9AXYnj6sSlt78qHvuh6B9UfVdzoVhBZf6DX63YhxDB0rNf9ta8qoSLTudhGPnag8%2BiDh9wKXmSREJcg3vm%2FEVZL3FEPpRYCngMS390N3LCddD%2BTSWRbhl4M1fy7cYkBHwKuUkOzE%2FD1nv4rXnL4EmTayLD%2BXffj%2FJp4HuNwzycJcwvTwWg8gaICFJyiifZmM%2FXC23upYh9XH%2Fk1an2L8wE8vkUFhjvr8%2F15APCIOIYikkYKCxDUrgkmujjYkDy52fHkDwXpnUng0wiJT0YyR%2FjGf%2FgIeXmaP9ACny43i7bN%2FRS8kRRAxj5xR6Kl5QnkF4XvNqICQmHipHnnxqxFYgMwV9EyGIHd5mOqFch4duxynJ5rfcEcnTjJP3uceNPIL2sSfqC%2BxTJbcN6Uc3zycPBGiCJry4m8NECcW0i6b7AhcRHfKrsU98IoeFzTxb6OTzs0BwVv444ogScsluMQWQvDDy0sapgYWNIHrPdsbpC66FiWfN3pviyc4Y9MATyR8FeVyW5BdjKg3JraB7Wwvo7wv9WI0bTijAe3yYsvF2j6IAlMMK40b8GOqUBLAvDMyM9I%2B2YOkkuFVwx9rSsCSFVA9tcRL2OrYaMmg39Eh90oTfNavO7ppw4EZM59oc0JZvvw0XpRlO9oGpJ8W66xv2KBqH23Z5uSYvZFoPBmJ0A2xC%2BwZFnjKC1tzz%2F1BjLzWJLWSN%2FRuLVeUfZiwTgsAA92KEqZgepjyi8jmZc%2FOLfCsgWIWhM1TJHdYW%2FqF%2Fnlo027ObyZNwerqTkdgh9q1Sq&X-Amz-Signature=5caaed546e850e44605a5ed97439aaee89a1969ec0f55aa0280d7a69b2a70f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
