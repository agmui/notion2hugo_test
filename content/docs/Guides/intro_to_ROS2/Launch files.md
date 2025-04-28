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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHE6XKZJ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGKmg5ro5PPT6Ja0%2Bdyf5Z%2F0JHlMUq7qWUxiLRLbBe%2FAiB0CXeon85abLb9%2FOgT0%2F2Nh%2BaJQYenPavrgdvqxTsMkir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM66jLmKnL1O6LDLrdKtwDxqoNjOvevmKesYv2Ktgk5BG7YIy9PhMRn5Mwd3%2FNdAcvSMxJwIjvRQW4t7yEpHoxoQnajXuO3jW1DfwVrzdA3RmvuN7Csyxk%2BCHUeKrpKGK%2BEY6U%2B5CWHb%2FBJ4UKz9OSXCYiaTSaB93LFvepioXMs15yPRESMmKBRxioVZV2qzZFTeKs9eAK%2FY1CGqH0isNDrOihzbjbrlMt5OGPvs6mhAPJHmMZn5wdg0arxNag2C7RixTxukabeRXektT%2FmiIOBnMiozWJF5gv4pTG8K5TXO3CKmMQAKS1daacSZehciIEtQgaH6XaczOQ3O%2BTatVkoSLVIeBB8OeZpjvvJQvMs1sqIc5EevcXkfq62ancqKaSjEXvdsRmI1BAGMN1Go3GuR%2BNnUpTJ4RD3FrCQcXla1pnQyx8RNJJtFI%2Ba0qVST6GPb3Z2jNZvWiIWK6fCTUsMEwt%2Fpwmx%2BKg0yx3ctittAoTBTYFjQAbxVYjULXBifNV65RyXGOqQYnWSaDgOuCUXLuE5BLm05%2F2mlYIilBIEPxcgH%2FWCypkuxBJoutl2KbQTskg%2BUapEfeKevsUJuwctq4GvmKOgQgRmhgfSo3Ahcl330zVJwmcNwnsguE%2FYUdeB9vL%2FgNNT%2BiFHj4w74K%2BwAY6pgH0a7XOiSAeBpKF1dRkHMOTMdDmNJG1EsG1A08i4SKMyf1Lr1vfil4rrI5D5oRb9Qrx0677vGBb1iNNkb8DK2PGRnqiVFunmXqKFP7U1TumS%2BnJ2LDw64z%2F%2Bpj9LLJIjJIBE4uafmg7YmUd86C8o3O9F0C4DxcJFpdXJX5fE5IU6hcWke1hkKUHy08Xp89UtFFHoY8NZs7ir2a7bo35X%2BfdKrJVvBH%2F&X-Amz-Signature=cf96e49f33c27c534ebbb0ef293e4a6fb9afb47ae8845602af2b221f3e31fda2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHE6XKZJ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGKmg5ro5PPT6Ja0%2Bdyf5Z%2F0JHlMUq7qWUxiLRLbBe%2FAiB0CXeon85abLb9%2FOgT0%2F2Nh%2BaJQYenPavrgdvqxTsMkir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM66jLmKnL1O6LDLrdKtwDxqoNjOvevmKesYv2Ktgk5BG7YIy9PhMRn5Mwd3%2FNdAcvSMxJwIjvRQW4t7yEpHoxoQnajXuO3jW1DfwVrzdA3RmvuN7Csyxk%2BCHUeKrpKGK%2BEY6U%2B5CWHb%2FBJ4UKz9OSXCYiaTSaB93LFvepioXMs15yPRESMmKBRxioVZV2qzZFTeKs9eAK%2FY1CGqH0isNDrOihzbjbrlMt5OGPvs6mhAPJHmMZn5wdg0arxNag2C7RixTxukabeRXektT%2FmiIOBnMiozWJF5gv4pTG8K5TXO3CKmMQAKS1daacSZehciIEtQgaH6XaczOQ3O%2BTatVkoSLVIeBB8OeZpjvvJQvMs1sqIc5EevcXkfq62ancqKaSjEXvdsRmI1BAGMN1Go3GuR%2BNnUpTJ4RD3FrCQcXla1pnQyx8RNJJtFI%2Ba0qVST6GPb3Z2jNZvWiIWK6fCTUsMEwt%2Fpwmx%2BKg0yx3ctittAoTBTYFjQAbxVYjULXBifNV65RyXGOqQYnWSaDgOuCUXLuE5BLm05%2F2mlYIilBIEPxcgH%2FWCypkuxBJoutl2KbQTskg%2BUapEfeKevsUJuwctq4GvmKOgQgRmhgfSo3Ahcl330zVJwmcNwnsguE%2FYUdeB9vL%2FgNNT%2BiFHj4w74K%2BwAY6pgH0a7XOiSAeBpKF1dRkHMOTMdDmNJG1EsG1A08i4SKMyf1Lr1vfil4rrI5D5oRb9Qrx0677vGBb1iNNkb8DK2PGRnqiVFunmXqKFP7U1TumS%2BnJ2LDw64z%2F%2Bpj9LLJIjJIBE4uafmg7YmUd86C8o3O9F0C4DxcJFpdXJX5fE5IU6hcWke1hkKUHy08Xp89UtFFHoY8NZs7ir2a7bo35X%2BfdKrJVvBH%2F&X-Amz-Signature=3cb66a1a91c58281aa944c65d87214d9855f6797554f8d5fda01baa576204da3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHE6XKZJ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGKmg5ro5PPT6Ja0%2Bdyf5Z%2F0JHlMUq7qWUxiLRLbBe%2FAiB0CXeon85abLb9%2FOgT0%2F2Nh%2BaJQYenPavrgdvqxTsMkir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM66jLmKnL1O6LDLrdKtwDxqoNjOvevmKesYv2Ktgk5BG7YIy9PhMRn5Mwd3%2FNdAcvSMxJwIjvRQW4t7yEpHoxoQnajXuO3jW1DfwVrzdA3RmvuN7Csyxk%2BCHUeKrpKGK%2BEY6U%2B5CWHb%2FBJ4UKz9OSXCYiaTSaB93LFvepioXMs15yPRESMmKBRxioVZV2qzZFTeKs9eAK%2FY1CGqH0isNDrOihzbjbrlMt5OGPvs6mhAPJHmMZn5wdg0arxNag2C7RixTxukabeRXektT%2FmiIOBnMiozWJF5gv4pTG8K5TXO3CKmMQAKS1daacSZehciIEtQgaH6XaczOQ3O%2BTatVkoSLVIeBB8OeZpjvvJQvMs1sqIc5EevcXkfq62ancqKaSjEXvdsRmI1BAGMN1Go3GuR%2BNnUpTJ4RD3FrCQcXla1pnQyx8RNJJtFI%2Ba0qVST6GPb3Z2jNZvWiIWK6fCTUsMEwt%2Fpwmx%2BKg0yx3ctittAoTBTYFjQAbxVYjULXBifNV65RyXGOqQYnWSaDgOuCUXLuE5BLm05%2F2mlYIilBIEPxcgH%2FWCypkuxBJoutl2KbQTskg%2BUapEfeKevsUJuwctq4GvmKOgQgRmhgfSo3Ahcl330zVJwmcNwnsguE%2FYUdeB9vL%2FgNNT%2BiFHj4w74K%2BwAY6pgH0a7XOiSAeBpKF1dRkHMOTMdDmNJG1EsG1A08i4SKMyf1Lr1vfil4rrI5D5oRb9Qrx0677vGBb1iNNkb8DK2PGRnqiVFunmXqKFP7U1TumS%2BnJ2LDw64z%2F%2Bpj9LLJIjJIBE4uafmg7YmUd86C8o3O9F0C4DxcJFpdXJX5fE5IU6hcWke1hkKUHy08Xp89UtFFHoY8NZs7ir2a7bo35X%2BfdKrJVvBH%2F&X-Amz-Signature=052cb7a610398cd7710d6f3b8924b0fb90c97b68432d45d5e44ad0f4bf5639ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
