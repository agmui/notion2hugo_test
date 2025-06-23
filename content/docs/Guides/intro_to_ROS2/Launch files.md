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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T46UTHI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9dCW30djApHKgw3ZMp%2BDyrInDhnA2vn43TsVGnO9%2B%2BAIgWlbNKufWW0xjnaTEkpRAbaI2cYuslQE9JZlvRxgQcM8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCv6kBujpETbHzaIdCrcA9umgJ84nBmLDAZNAo9yEc3IFI5mCjWdVnlRVAYlGuUxXzr4umM3tRu%2FI30F90fEZIBTPq5ttjFMyEToveAoYUv%2FTUOEoNhNFZ%2FXcxg3oKYUckQ6kJBUA3T1tdO5EFNGfyZJASYiE7cHTb6Tt7aCJ0zp2QigdMkZLcwPKudKPb6MWv8wT89udTJyvoVYimYDU4PAP%2FTrylYA0CpCj8C07J8dRPmL0mHAT7wNxxmlAK9K11iR8%2BYvmvag6ky5XIN5531XA17HnYM1ozIu5eZDsx%2BJWkvp0ZfBJB0Ai2k%2Bm01Dpx8p08cqXJADm3wiusVp9VkWpxuJVELPeeNkD9lVGsdarqRCL5X6Pwej7kZBHy93YATRXZEzsnyLeu36RS90AJ4Dc9Wmfm2QDzHABFkFUX2zmtPy0YJ2vfLD%2BKrgktRaQq1%2FzVPp79VWnuwtgmHsLitJaNaUzJD2CDeDbVQYbrD4TDH8acbe6l75yYF6gESJPgOTzixatodjAm0dYSiIr0Hn%2BuVLGTgRvCZvJiGYjzbJbgWcgVDdK3U2kvGngGjfq2rYwJ%2Bg15T2RGkMbSBokiiDQ56HeWMN7gxWBQUMRYtF0%2B4PA38oJCPOfRUmyDJBJVbo2QqY%2FlNsKw2iMOXt5sIGOqUBiq7L9kvxrnwBPNnhG0V2J%2BCCHaUks63Q7wuCbXbxVDoglQp2hbvUw9RYO3d%2B4OzpsOptrMM4n7v%2Bd7yZ5Svwwt0lexO6Pdlxh5NzkEZ%2FJ%2F8IwqKBqQQfvII3kIVb4swHcgJp4EPNFfCYlLy0KistMcUWt%2BzoSUXpThmgSG09Fvd9JOjryKxE4fJVFj9JE4xC2omQkCIsEtDpF5Pt%2FZoPfe9OPnzE&X-Amz-Signature=b619970dfc97e07039c035c583454c2f6732254ec09d4027be243b08fc4b8cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T46UTHI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9dCW30djApHKgw3ZMp%2BDyrInDhnA2vn43TsVGnO9%2B%2BAIgWlbNKufWW0xjnaTEkpRAbaI2cYuslQE9JZlvRxgQcM8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCv6kBujpETbHzaIdCrcA9umgJ84nBmLDAZNAo9yEc3IFI5mCjWdVnlRVAYlGuUxXzr4umM3tRu%2FI30F90fEZIBTPq5ttjFMyEToveAoYUv%2FTUOEoNhNFZ%2FXcxg3oKYUckQ6kJBUA3T1tdO5EFNGfyZJASYiE7cHTb6Tt7aCJ0zp2QigdMkZLcwPKudKPb6MWv8wT89udTJyvoVYimYDU4PAP%2FTrylYA0CpCj8C07J8dRPmL0mHAT7wNxxmlAK9K11iR8%2BYvmvag6ky5XIN5531XA17HnYM1ozIu5eZDsx%2BJWkvp0ZfBJB0Ai2k%2Bm01Dpx8p08cqXJADm3wiusVp9VkWpxuJVELPeeNkD9lVGsdarqRCL5X6Pwej7kZBHy93YATRXZEzsnyLeu36RS90AJ4Dc9Wmfm2QDzHABFkFUX2zmtPy0YJ2vfLD%2BKrgktRaQq1%2FzVPp79VWnuwtgmHsLitJaNaUzJD2CDeDbVQYbrD4TDH8acbe6l75yYF6gESJPgOTzixatodjAm0dYSiIr0Hn%2BuVLGTgRvCZvJiGYjzbJbgWcgVDdK3U2kvGngGjfq2rYwJ%2Bg15T2RGkMbSBokiiDQ56HeWMN7gxWBQUMRYtF0%2B4PA38oJCPOfRUmyDJBJVbo2QqY%2FlNsKw2iMOXt5sIGOqUBiq7L9kvxrnwBPNnhG0V2J%2BCCHaUks63Q7wuCbXbxVDoglQp2hbvUw9RYO3d%2B4OzpsOptrMM4n7v%2Bd7yZ5Svwwt0lexO6Pdlxh5NzkEZ%2FJ%2F8IwqKBqQQfvII3kIVb4swHcgJp4EPNFfCYlLy0KistMcUWt%2BzoSUXpThmgSG09Fvd9JOjryKxE4fJVFj9JE4xC2omQkCIsEtDpF5Pt%2FZoPfe9OPnzE&X-Amz-Signature=b41446362a75ef82e098fe9dc2980e2303df1862ef7c24b8e2a530aef1464694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T46UTHI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9dCW30djApHKgw3ZMp%2BDyrInDhnA2vn43TsVGnO9%2B%2BAIgWlbNKufWW0xjnaTEkpRAbaI2cYuslQE9JZlvRxgQcM8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCv6kBujpETbHzaIdCrcA9umgJ84nBmLDAZNAo9yEc3IFI5mCjWdVnlRVAYlGuUxXzr4umM3tRu%2FI30F90fEZIBTPq5ttjFMyEToveAoYUv%2FTUOEoNhNFZ%2FXcxg3oKYUckQ6kJBUA3T1tdO5EFNGfyZJASYiE7cHTb6Tt7aCJ0zp2QigdMkZLcwPKudKPb6MWv8wT89udTJyvoVYimYDU4PAP%2FTrylYA0CpCj8C07J8dRPmL0mHAT7wNxxmlAK9K11iR8%2BYvmvag6ky5XIN5531XA17HnYM1ozIu5eZDsx%2BJWkvp0ZfBJB0Ai2k%2Bm01Dpx8p08cqXJADm3wiusVp9VkWpxuJVELPeeNkD9lVGsdarqRCL5X6Pwej7kZBHy93YATRXZEzsnyLeu36RS90AJ4Dc9Wmfm2QDzHABFkFUX2zmtPy0YJ2vfLD%2BKrgktRaQq1%2FzVPp79VWnuwtgmHsLitJaNaUzJD2CDeDbVQYbrD4TDH8acbe6l75yYF6gESJPgOTzixatodjAm0dYSiIr0Hn%2BuVLGTgRvCZvJiGYjzbJbgWcgVDdK3U2kvGngGjfq2rYwJ%2Bg15T2RGkMbSBokiiDQ56HeWMN7gxWBQUMRYtF0%2B4PA38oJCPOfRUmyDJBJVbo2QqY%2FlNsKw2iMOXt5sIGOqUBiq7L9kvxrnwBPNnhG0V2J%2BCCHaUks63Q7wuCbXbxVDoglQp2hbvUw9RYO3d%2B4OzpsOptrMM4n7v%2Bd7yZ5Svwwt0lexO6Pdlxh5NzkEZ%2FJ%2F8IwqKBqQQfvII3kIVb4swHcgJp4EPNFfCYlLy0KistMcUWt%2BzoSUXpThmgSG09Fvd9JOjryKxE4fJVFj9JE4xC2omQkCIsEtDpF5Pt%2FZoPfe9OPnzE&X-Amz-Signature=99d27d54610c995aff9d252833e77f7354eb2456e6570a214891f5f868763311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
