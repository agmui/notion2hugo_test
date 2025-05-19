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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQS7MF7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx0VgVPWsppzN57%2Fj9NQL%2B1YorVMAFlOptYnXAY1k0zAiEAj1ep7HAlK9eWprXMUg4BU5L%2Bzl4Yr%2BWToL8hh%2FjRA0cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1kfyg8E4mgzjZCoCrcA1TDnfGXcZqCmzt5MWfEbukQF1qq%2F5r9HJCL9UB2g8L3tYam01Z8CRb0p3VK%2FHbmnicHy6TUzCCKkC8sdNpNO8ooRHjfgm18qsgG%2B%2BXHPDRkZ9Vh3PUkozK7O0FgVz6qon%2BThCKFiyo2%2F9EQmYbPlgKQ6Dk8hWb9%2FZrWa%2B0tG4oCXxZc61wu1zwLEg%2F61tT3qacCAfxb%2BJD6u4HxuzL86Vkefn%2FKJXjC6cgweGnCV0zQDg%2BSdxRrWd0cLMn6GWgKGyDp2xKJ0bK74iU4H36oKHJCAxUMODtLj3jJ8utX9%2BUu61LG%2BW8NjRcNX6aAGScChLtbnmNofgsERofGkZX1L72leVx3mHPkGW4rgVNod96rmMJnWKs6wE8kRJa6Afd8aS5kFxeFoh74hbavFO%2FDiIbNJjfy4w1hrYh3aEv%2FvWNH8g6JHfEVgYxJbBRrtnNxyBlJXXctAPWlJ5abL4LBKugSJmWM5et6LVKHrfiFyjWsIfRDAVT%2F%2B3MMPQfqz5zFKyWf2nAhWcOSa2pZsNp%2BlADAQJfGr7TqX6kUU0%2F7qrPnHCTMABjgEuVWDIbu3rKXancdZoQBhyaKlUjo0xhBSpxFrVZHDD%2Ffd5D1Ve0R%2Fyz6qpdTwuJgCNiCYLaVMPqxrMEGOqUB3Fm318ZLA28KIchMrDmnHQihJ7k8u5143fsc6FmJ3%2F9fJtYp%2BN8rt2inNi%2BajKFzoZ%2FS6PpvHkdes6dS%2FiJWm56u5feY9rOHLks43N7ccwzPxCwKs8TYH1D8FJM%2B9XM2STZyXIUP2ckVJ38h5%2BHcQXtP4bdJdAe5yHzBPcekPSzaWvl0RyBrygCtOMzSnFvdEYaxqGEBTYSSjPmFGI4jM%2FzXaaOZ&X-Amz-Signature=476078409a3368c5b1547f1abf4e77c83612f44be6d7b7aa55bb9345e06c0d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQS7MF7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx0VgVPWsppzN57%2Fj9NQL%2B1YorVMAFlOptYnXAY1k0zAiEAj1ep7HAlK9eWprXMUg4BU5L%2Bzl4Yr%2BWToL8hh%2FjRA0cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1kfyg8E4mgzjZCoCrcA1TDnfGXcZqCmzt5MWfEbukQF1qq%2F5r9HJCL9UB2g8L3tYam01Z8CRb0p3VK%2FHbmnicHy6TUzCCKkC8sdNpNO8ooRHjfgm18qsgG%2B%2BXHPDRkZ9Vh3PUkozK7O0FgVz6qon%2BThCKFiyo2%2F9EQmYbPlgKQ6Dk8hWb9%2FZrWa%2B0tG4oCXxZc61wu1zwLEg%2F61tT3qacCAfxb%2BJD6u4HxuzL86Vkefn%2FKJXjC6cgweGnCV0zQDg%2BSdxRrWd0cLMn6GWgKGyDp2xKJ0bK74iU4H36oKHJCAxUMODtLj3jJ8utX9%2BUu61LG%2BW8NjRcNX6aAGScChLtbnmNofgsERofGkZX1L72leVx3mHPkGW4rgVNod96rmMJnWKs6wE8kRJa6Afd8aS5kFxeFoh74hbavFO%2FDiIbNJjfy4w1hrYh3aEv%2FvWNH8g6JHfEVgYxJbBRrtnNxyBlJXXctAPWlJ5abL4LBKugSJmWM5et6LVKHrfiFyjWsIfRDAVT%2F%2B3MMPQfqz5zFKyWf2nAhWcOSa2pZsNp%2BlADAQJfGr7TqX6kUU0%2F7qrPnHCTMABjgEuVWDIbu3rKXancdZoQBhyaKlUjo0xhBSpxFrVZHDD%2Ffd5D1Ve0R%2Fyz6qpdTwuJgCNiCYLaVMPqxrMEGOqUB3Fm318ZLA28KIchMrDmnHQihJ7k8u5143fsc6FmJ3%2F9fJtYp%2BN8rt2inNi%2BajKFzoZ%2FS6PpvHkdes6dS%2FiJWm56u5feY9rOHLks43N7ccwzPxCwKs8TYH1D8FJM%2B9XM2STZyXIUP2ckVJ38h5%2BHcQXtP4bdJdAe5yHzBPcekPSzaWvl0RyBrygCtOMzSnFvdEYaxqGEBTYSSjPmFGI4jM%2FzXaaOZ&X-Amz-Signature=c18933bbc2756cee5bb72225214168aae861e57c008a70afe520b257d8c8c24f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQS7MF7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx0VgVPWsppzN57%2Fj9NQL%2B1YorVMAFlOptYnXAY1k0zAiEAj1ep7HAlK9eWprXMUg4BU5L%2Bzl4Yr%2BWToL8hh%2FjRA0cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1kfyg8E4mgzjZCoCrcA1TDnfGXcZqCmzt5MWfEbukQF1qq%2F5r9HJCL9UB2g8L3tYam01Z8CRb0p3VK%2FHbmnicHy6TUzCCKkC8sdNpNO8ooRHjfgm18qsgG%2B%2BXHPDRkZ9Vh3PUkozK7O0FgVz6qon%2BThCKFiyo2%2F9EQmYbPlgKQ6Dk8hWb9%2FZrWa%2B0tG4oCXxZc61wu1zwLEg%2F61tT3qacCAfxb%2BJD6u4HxuzL86Vkefn%2FKJXjC6cgweGnCV0zQDg%2BSdxRrWd0cLMn6GWgKGyDp2xKJ0bK74iU4H36oKHJCAxUMODtLj3jJ8utX9%2BUu61LG%2BW8NjRcNX6aAGScChLtbnmNofgsERofGkZX1L72leVx3mHPkGW4rgVNod96rmMJnWKs6wE8kRJa6Afd8aS5kFxeFoh74hbavFO%2FDiIbNJjfy4w1hrYh3aEv%2FvWNH8g6JHfEVgYxJbBRrtnNxyBlJXXctAPWlJ5abL4LBKugSJmWM5et6LVKHrfiFyjWsIfRDAVT%2F%2B3MMPQfqz5zFKyWf2nAhWcOSa2pZsNp%2BlADAQJfGr7TqX6kUU0%2F7qrPnHCTMABjgEuVWDIbu3rKXancdZoQBhyaKlUjo0xhBSpxFrVZHDD%2Ffd5D1Ve0R%2Fyz6qpdTwuJgCNiCYLaVMPqxrMEGOqUB3Fm318ZLA28KIchMrDmnHQihJ7k8u5143fsc6FmJ3%2F9fJtYp%2BN8rt2inNi%2BajKFzoZ%2FS6PpvHkdes6dS%2FiJWm56u5feY9rOHLks43N7ccwzPxCwKs8TYH1D8FJM%2B9XM2STZyXIUP2ckVJ38h5%2BHcQXtP4bdJdAe5yHzBPcekPSzaWvl0RyBrygCtOMzSnFvdEYaxqGEBTYSSjPmFGI4jM%2FzXaaOZ&X-Amz-Signature=9e66e6598f04e0e7babf7b5dc23ae20f71145250358c362d35b1d7ebcf2c29bc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQS7MF7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx0VgVPWsppzN57%2Fj9NQL%2B1YorVMAFlOptYnXAY1k0zAiEAj1ep7HAlK9eWprXMUg4BU5L%2Bzl4Yr%2BWToL8hh%2FjRA0cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1kfyg8E4mgzjZCoCrcA1TDnfGXcZqCmzt5MWfEbukQF1qq%2F5r9HJCL9UB2g8L3tYam01Z8CRb0p3VK%2FHbmnicHy6TUzCCKkC8sdNpNO8ooRHjfgm18qsgG%2B%2BXHPDRkZ9Vh3PUkozK7O0FgVz6qon%2BThCKFiyo2%2F9EQmYbPlgKQ6Dk8hWb9%2FZrWa%2B0tG4oCXxZc61wu1zwLEg%2F61tT3qacCAfxb%2BJD6u4HxuzL86Vkefn%2FKJXjC6cgweGnCV0zQDg%2BSdxRrWd0cLMn6GWgKGyDp2xKJ0bK74iU4H36oKHJCAxUMODtLj3jJ8utX9%2BUu61LG%2BW8NjRcNX6aAGScChLtbnmNofgsERofGkZX1L72leVx3mHPkGW4rgVNod96rmMJnWKs6wE8kRJa6Afd8aS5kFxeFoh74hbavFO%2FDiIbNJjfy4w1hrYh3aEv%2FvWNH8g6JHfEVgYxJbBRrtnNxyBlJXXctAPWlJ5abL4LBKugSJmWM5et6LVKHrfiFyjWsIfRDAVT%2F%2B3MMPQfqz5zFKyWf2nAhWcOSa2pZsNp%2BlADAQJfGr7TqX6kUU0%2F7qrPnHCTMABjgEuVWDIbu3rKXancdZoQBhyaKlUjo0xhBSpxFrVZHDD%2Ffd5D1Ve0R%2Fyz6qpdTwuJgCNiCYLaVMPqxrMEGOqUB3Fm318ZLA28KIchMrDmnHQihJ7k8u5143fsc6FmJ3%2F9fJtYp%2BN8rt2inNi%2BajKFzoZ%2FS6PpvHkdes6dS%2FiJWm56u5feY9rOHLks43N7ccwzPxCwKs8TYH1D8FJM%2B9XM2STZyXIUP2ckVJ38h5%2BHcQXtP4bdJdAe5yHzBPcekPSzaWvl0RyBrygCtOMzSnFvdEYaxqGEBTYSSjPmFGI4jM%2FzXaaOZ&X-Amz-Signature=9df5f530d27ff756fffc627d4f7accf84ea7efd33d7a38e0108814afaffa81df&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQS7MF7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx0VgVPWsppzN57%2Fj9NQL%2B1YorVMAFlOptYnXAY1k0zAiEAj1ep7HAlK9eWprXMUg4BU5L%2Bzl4Yr%2BWToL8hh%2FjRA0cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1kfyg8E4mgzjZCoCrcA1TDnfGXcZqCmzt5MWfEbukQF1qq%2F5r9HJCL9UB2g8L3tYam01Z8CRb0p3VK%2FHbmnicHy6TUzCCKkC8sdNpNO8ooRHjfgm18qsgG%2B%2BXHPDRkZ9Vh3PUkozK7O0FgVz6qon%2BThCKFiyo2%2F9EQmYbPlgKQ6Dk8hWb9%2FZrWa%2B0tG4oCXxZc61wu1zwLEg%2F61tT3qacCAfxb%2BJD6u4HxuzL86Vkefn%2FKJXjC6cgweGnCV0zQDg%2BSdxRrWd0cLMn6GWgKGyDp2xKJ0bK74iU4H36oKHJCAxUMODtLj3jJ8utX9%2BUu61LG%2BW8NjRcNX6aAGScChLtbnmNofgsERofGkZX1L72leVx3mHPkGW4rgVNod96rmMJnWKs6wE8kRJa6Afd8aS5kFxeFoh74hbavFO%2FDiIbNJjfy4w1hrYh3aEv%2FvWNH8g6JHfEVgYxJbBRrtnNxyBlJXXctAPWlJ5abL4LBKugSJmWM5et6LVKHrfiFyjWsIfRDAVT%2F%2B3MMPQfqz5zFKyWf2nAhWcOSa2pZsNp%2BlADAQJfGr7TqX6kUU0%2F7qrPnHCTMABjgEuVWDIbu3rKXancdZoQBhyaKlUjo0xhBSpxFrVZHDD%2Ffd5D1Ve0R%2Fyz6qpdTwuJgCNiCYLaVMPqxrMEGOqUB3Fm318ZLA28KIchMrDmnHQihJ7k8u5143fsc6FmJ3%2F9fJtYp%2BN8rt2inNi%2BajKFzoZ%2FS6PpvHkdes6dS%2FiJWm56u5feY9rOHLks43N7ccwzPxCwKs8TYH1D8FJM%2B9XM2STZyXIUP2ckVJ38h5%2BHcQXtP4bdJdAe5yHzBPcekPSzaWvl0RyBrygCtOMzSnFvdEYaxqGEBTYSSjPmFGI4jM%2FzXaaOZ&X-Amz-Signature=e66e86b6a696366a834050b5b83759fbb0b8a145875333469dbd8f0736705740&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQS7MF7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx0VgVPWsppzN57%2Fj9NQL%2B1YorVMAFlOptYnXAY1k0zAiEAj1ep7HAlK9eWprXMUg4BU5L%2Bzl4Yr%2BWToL8hh%2FjRA0cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1kfyg8E4mgzjZCoCrcA1TDnfGXcZqCmzt5MWfEbukQF1qq%2F5r9HJCL9UB2g8L3tYam01Z8CRb0p3VK%2FHbmnicHy6TUzCCKkC8sdNpNO8ooRHjfgm18qsgG%2B%2BXHPDRkZ9Vh3PUkozK7O0FgVz6qon%2BThCKFiyo2%2F9EQmYbPlgKQ6Dk8hWb9%2FZrWa%2B0tG4oCXxZc61wu1zwLEg%2F61tT3qacCAfxb%2BJD6u4HxuzL86Vkefn%2FKJXjC6cgweGnCV0zQDg%2BSdxRrWd0cLMn6GWgKGyDp2xKJ0bK74iU4H36oKHJCAxUMODtLj3jJ8utX9%2BUu61LG%2BW8NjRcNX6aAGScChLtbnmNofgsERofGkZX1L72leVx3mHPkGW4rgVNod96rmMJnWKs6wE8kRJa6Afd8aS5kFxeFoh74hbavFO%2FDiIbNJjfy4w1hrYh3aEv%2FvWNH8g6JHfEVgYxJbBRrtnNxyBlJXXctAPWlJ5abL4LBKugSJmWM5et6LVKHrfiFyjWsIfRDAVT%2F%2B3MMPQfqz5zFKyWf2nAhWcOSa2pZsNp%2BlADAQJfGr7TqX6kUU0%2F7qrPnHCTMABjgEuVWDIbu3rKXancdZoQBhyaKlUjo0xhBSpxFrVZHDD%2Ffd5D1Ve0R%2Fyz6qpdTwuJgCNiCYLaVMPqxrMEGOqUB3Fm318ZLA28KIchMrDmnHQihJ7k8u5143fsc6FmJ3%2F9fJtYp%2BN8rt2inNi%2BajKFzoZ%2FS6PpvHkdes6dS%2FiJWm56u5feY9rOHLks43N7ccwzPxCwKs8TYH1D8FJM%2B9XM2STZyXIUP2ckVJ38h5%2BHcQXtP4bdJdAe5yHzBPcekPSzaWvl0RyBrygCtOMzSnFvdEYaxqGEBTYSSjPmFGI4jM%2FzXaaOZ&X-Amz-Signature=f6425af9cba64e7c0bc32f89a92935a2c55587bbf7e4c02654cae16e85fd66e4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQS7MF7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx0VgVPWsppzN57%2Fj9NQL%2B1YorVMAFlOptYnXAY1k0zAiEAj1ep7HAlK9eWprXMUg4BU5L%2Bzl4Yr%2BWToL8hh%2FjRA0cqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1kfyg8E4mgzjZCoCrcA1TDnfGXcZqCmzt5MWfEbukQF1qq%2F5r9HJCL9UB2g8L3tYam01Z8CRb0p3VK%2FHbmnicHy6TUzCCKkC8sdNpNO8ooRHjfgm18qsgG%2B%2BXHPDRkZ9Vh3PUkozK7O0FgVz6qon%2BThCKFiyo2%2F9EQmYbPlgKQ6Dk8hWb9%2FZrWa%2B0tG4oCXxZc61wu1zwLEg%2F61tT3qacCAfxb%2BJD6u4HxuzL86Vkefn%2FKJXjC6cgweGnCV0zQDg%2BSdxRrWd0cLMn6GWgKGyDp2xKJ0bK74iU4H36oKHJCAxUMODtLj3jJ8utX9%2BUu61LG%2BW8NjRcNX6aAGScChLtbnmNofgsERofGkZX1L72leVx3mHPkGW4rgVNod96rmMJnWKs6wE8kRJa6Afd8aS5kFxeFoh74hbavFO%2FDiIbNJjfy4w1hrYh3aEv%2FvWNH8g6JHfEVgYxJbBRrtnNxyBlJXXctAPWlJ5abL4LBKugSJmWM5et6LVKHrfiFyjWsIfRDAVT%2F%2B3MMPQfqz5zFKyWf2nAhWcOSa2pZsNp%2BlADAQJfGr7TqX6kUU0%2F7qrPnHCTMABjgEuVWDIbu3rKXancdZoQBhyaKlUjo0xhBSpxFrVZHDD%2Ffd5D1Ve0R%2Fyz6qpdTwuJgCNiCYLaVMPqxrMEGOqUB3Fm318ZLA28KIchMrDmnHQihJ7k8u5143fsc6FmJ3%2F9fJtYp%2BN8rt2inNi%2BajKFzoZ%2FS6PpvHkdes6dS%2FiJWm56u5feY9rOHLks43N7ccwzPxCwKs8TYH1D8FJM%2B9XM2STZyXIUP2ckVJ38h5%2BHcQXtP4bdJdAe5yHzBPcekPSzaWvl0RyBrygCtOMzSnFvdEYaxqGEBTYSSjPmFGI4jM%2FzXaaOZ&X-Amz-Signature=5868de127a9c57af89bc1dd9f14775bdbbd3cc5fe922370fb5b992a4d98a823a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
