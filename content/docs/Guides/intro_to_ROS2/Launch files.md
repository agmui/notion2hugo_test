---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSRRZWT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFSXHwsIN75CT%2BPqNQRgAM8FSOR4x245OglAbYLzYyKnAiB0FnWuZSqUVkmNEX0NJmkYoeDITriJmYdu9kS6w1%2BpcSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd7Xk4s%2BZTVsJGN%2FJKtwDz%2FpdR6rmldWQf%2F8ZPe9CR21nIOkVdgyeBrZv4sSdYU5EZqDqw2Isc%2F07LUpcaslvCznPf2ZDdkceUp0ZRXzHm6nImHqt12tuHOf4vBFvPz01r6s0I1Hv%2FlVuZ1PGJM02oy29SloDd6govKWXuUIDV614eFku3FHti7k%2Fq8xDu585QbbcvGH8hLMxEMSqoPGenDlGP%2BXkOCToN1XBiSa2%2FFdsM9oPUg0Oe%2Bh3B%2FRAwKZtI93rPcfF5PjQjeQG3zaxBmXFhtUuH7cOX5vfi9qz94g2SW%2Fe2lg5bA1VeI1H0TgHsd61ES5yRSqLNxwnF91XUMuP0%2B5wrJ3Kg3Pv6N02R2IwA2hrJP5%2FF3CIoWwgNX%2BUwLI060AIdVPw%2FtWe7v7%2B1u4LEFN5Xdn%2FICW4mT5qPKjGTSdrm5hc1GWLS5tmViEYrzknBKMqJ9NkhPe7qFQHbyjoVBvFCEW7C9%2FJCQe5JXqXe4h0qHakSAgQIFEb5K66vlc36S%2BUt2%2BigxSp2ejWcfG4yiPC1Y04KLeSwBDieWk0z7tshyaRn1GV17XPmhImsqlSmnFBryAW6KtrBza0%2Beci9gHdVsmoa5S8h9BXgtN359T0%2B4E9iFs8Q0cRFLxhVO%2BTOWwVPO4OlPkwsPO3wQY6pgFoximtZtMFtCNBQMhcqvJ0TfSsTgmI8Dr8TbxhOJS%2FHR3oMGw%2BuwpE%2BnIoolfzdVOQA%2FRbaEBuIPkKwd71RVj6Q1Rqn9A%2BB9SvGz19sqyT8%2FZpisiAVuAlL6H%2BrzLKeLhSXLKyznQvnlI1SU%2BR%2Bn232gjniTi0PPepbkk9mEJGDzmzXwX6OqmFQfSahBHi%2F6tL5ljQ7UxyLu0W1OSFy14N396G7MRj&X-Amz-Signature=118f63d5f014676ed6f63f349a4f88339e4b901ed02cb9cffe303f8e5977c406&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSRRZWT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFSXHwsIN75CT%2BPqNQRgAM8FSOR4x245OglAbYLzYyKnAiB0FnWuZSqUVkmNEX0NJmkYoeDITriJmYdu9kS6w1%2BpcSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd7Xk4s%2BZTVsJGN%2FJKtwDz%2FpdR6rmldWQf%2F8ZPe9CR21nIOkVdgyeBrZv4sSdYU5EZqDqw2Isc%2F07LUpcaslvCznPf2ZDdkceUp0ZRXzHm6nImHqt12tuHOf4vBFvPz01r6s0I1Hv%2FlVuZ1PGJM02oy29SloDd6govKWXuUIDV614eFku3FHti7k%2Fq8xDu585QbbcvGH8hLMxEMSqoPGenDlGP%2BXkOCToN1XBiSa2%2FFdsM9oPUg0Oe%2Bh3B%2FRAwKZtI93rPcfF5PjQjeQG3zaxBmXFhtUuH7cOX5vfi9qz94g2SW%2Fe2lg5bA1VeI1H0TgHsd61ES5yRSqLNxwnF91XUMuP0%2B5wrJ3Kg3Pv6N02R2IwA2hrJP5%2FF3CIoWwgNX%2BUwLI060AIdVPw%2FtWe7v7%2B1u4LEFN5Xdn%2FICW4mT5qPKjGTSdrm5hc1GWLS5tmViEYrzknBKMqJ9NkhPe7qFQHbyjoVBvFCEW7C9%2FJCQe5JXqXe4h0qHakSAgQIFEb5K66vlc36S%2BUt2%2BigxSp2ejWcfG4yiPC1Y04KLeSwBDieWk0z7tshyaRn1GV17XPmhImsqlSmnFBryAW6KtrBza0%2Beci9gHdVsmoa5S8h9BXgtN359T0%2B4E9iFs8Q0cRFLxhVO%2BTOWwVPO4OlPkwsPO3wQY6pgFoximtZtMFtCNBQMhcqvJ0TfSsTgmI8Dr8TbxhOJS%2FHR3oMGw%2BuwpE%2BnIoolfzdVOQA%2FRbaEBuIPkKwd71RVj6Q1Rqn9A%2BB9SvGz19sqyT8%2FZpisiAVuAlL6H%2BrzLKeLhSXLKyznQvnlI1SU%2BR%2Bn232gjniTi0PPepbkk9mEJGDzmzXwX6OqmFQfSahBHi%2F6tL5ljQ7UxyLu0W1OSFy14N396G7MRj&X-Amz-Signature=b8cd2de089a547741fa6d1ac19da59b3c15317c328dd79e3c3b11c7075ac277f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSRRZWT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFSXHwsIN75CT%2BPqNQRgAM8FSOR4x245OglAbYLzYyKnAiB0FnWuZSqUVkmNEX0NJmkYoeDITriJmYdu9kS6w1%2BpcSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd7Xk4s%2BZTVsJGN%2FJKtwDz%2FpdR6rmldWQf%2F8ZPe9CR21nIOkVdgyeBrZv4sSdYU5EZqDqw2Isc%2F07LUpcaslvCznPf2ZDdkceUp0ZRXzHm6nImHqt12tuHOf4vBFvPz01r6s0I1Hv%2FlVuZ1PGJM02oy29SloDd6govKWXuUIDV614eFku3FHti7k%2Fq8xDu585QbbcvGH8hLMxEMSqoPGenDlGP%2BXkOCToN1XBiSa2%2FFdsM9oPUg0Oe%2Bh3B%2FRAwKZtI93rPcfF5PjQjeQG3zaxBmXFhtUuH7cOX5vfi9qz94g2SW%2Fe2lg5bA1VeI1H0TgHsd61ES5yRSqLNxwnF91XUMuP0%2B5wrJ3Kg3Pv6N02R2IwA2hrJP5%2FF3CIoWwgNX%2BUwLI060AIdVPw%2FtWe7v7%2B1u4LEFN5Xdn%2FICW4mT5qPKjGTSdrm5hc1GWLS5tmViEYrzknBKMqJ9NkhPe7qFQHbyjoVBvFCEW7C9%2FJCQe5JXqXe4h0qHakSAgQIFEb5K66vlc36S%2BUt2%2BigxSp2ejWcfG4yiPC1Y04KLeSwBDieWk0z7tshyaRn1GV17XPmhImsqlSmnFBryAW6KtrBza0%2Beci9gHdVsmoa5S8h9BXgtN359T0%2B4E9iFs8Q0cRFLxhVO%2BTOWwVPO4OlPkwsPO3wQY6pgFoximtZtMFtCNBQMhcqvJ0TfSsTgmI8Dr8TbxhOJS%2FHR3oMGw%2BuwpE%2BnIoolfzdVOQA%2FRbaEBuIPkKwd71RVj6Q1Rqn9A%2BB9SvGz19sqyT8%2FZpisiAVuAlL6H%2BrzLKeLhSXLKyznQvnlI1SU%2BR%2Bn232gjniTi0PPepbkk9mEJGDzmzXwX6OqmFQfSahBHi%2F6tL5ljQ7UxyLu0W1OSFy14N396G7MRj&X-Amz-Signature=777201260400588358a8b98886ad2604732533ab3bfd2f51a2ffcfc957d1983c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
