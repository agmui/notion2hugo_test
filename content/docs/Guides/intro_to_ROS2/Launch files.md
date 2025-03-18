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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZTDRAU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEChXqXI5ZR%2Fac9XE8t6fHCPgYw9ulfQkJw1qGqZgE2HAiBNmGKJSlJhlZlYVPE9kNxaPtkYy7pvSaCvikTRK4NHYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMGSY2U3iPUYJfYUQjKtwD2%2F2MmwaFtJi07V4RBwiKtM4I6Zn850Aw6EB%2FNv%2BihVNM0kMgTGzkPQ5QxGlJYrxWhoYH6txdO08ODVw9A%2BMYlxUrOKU77AhaMZ%2FCiprZ1m0JQGndwdtz8iGCEf7vlydqLMHeTWkO5lhj5ExxmD0ntfbb1EKxIuCmzvkMbAQLQYM8IkCckNsAkxgGReJuzHObxhDCP6Do%2Bume6aN%2FC1WWpIsm1azb3GfxAdjOFSIFORma9JLXxAKwlEtdi%2BB33ULrhmHAN1fVC%2FjC6MLnU0MbyEHYpY3Ajyll1K8GaZ3OXHvMIt%2BkzDzx7cCTiP87SNb6TNEntEdkQ%2BIWuVs%2FHVIZqKPfeonWOdFt4Dv5NFzqqlbVhb6vb%2Bwwr3GbQJXzNxXQfQm%2B2Bi69sJeemRo%2B0gExjiB9Ll89A0VqCJVvgR2e9fduxP74b1GkSEi5FsO%2FF%2B%2FoALz08oZ0Ej8szIl1tGpCOk31Xoibd1GzHTiNyPhuNdxv3afoEyGgqlvZzOWUI44gUU9I%2FYegvAzBWS72WpP2IArqECQwwtB4nOJ7rNqWFg0Ry4Mcn3fnOgiz96a33oE%2Fl3bpoV66D4bl%2F%2FTDiwKrOyddw0pnmFHZPNEKSNZofDvl%2BDpThNjvSz5df0wzMnjvgY6pgFnf%2Fu00FMgr1RR4G6fK7dyXHHhWsncqvWL442QkogTwsvZJtrHNMeiIriX1cXpK9srHR%2B%2BPAYOoROQCKJ66bt2LdHdHJ4h%2BshciGr4XvZtILCB68q2JSo%2F2H4lDhfZex2iM%2Fow1GhQ31qxDtTYQ0LprSD7HJ21u8CYioh9T%2B6LqAwhxcY1oOugs391D1auiBHz7aMwWBXFBGdH%2FCgmklAAFy5p644r&X-Amz-Signature=a73ea61e456895995a3ca5fb9fcc417cd74ce247fcd87e1aba1be8bbe514eb8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZTDRAU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEChXqXI5ZR%2Fac9XE8t6fHCPgYw9ulfQkJw1qGqZgE2HAiBNmGKJSlJhlZlYVPE9kNxaPtkYy7pvSaCvikTRK4NHYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMGSY2U3iPUYJfYUQjKtwD2%2F2MmwaFtJi07V4RBwiKtM4I6Zn850Aw6EB%2FNv%2BihVNM0kMgTGzkPQ5QxGlJYrxWhoYH6txdO08ODVw9A%2BMYlxUrOKU77AhaMZ%2FCiprZ1m0JQGndwdtz8iGCEf7vlydqLMHeTWkO5lhj5ExxmD0ntfbb1EKxIuCmzvkMbAQLQYM8IkCckNsAkxgGReJuzHObxhDCP6Do%2Bume6aN%2FC1WWpIsm1azb3GfxAdjOFSIFORma9JLXxAKwlEtdi%2BB33ULrhmHAN1fVC%2FjC6MLnU0MbyEHYpY3Ajyll1K8GaZ3OXHvMIt%2BkzDzx7cCTiP87SNb6TNEntEdkQ%2BIWuVs%2FHVIZqKPfeonWOdFt4Dv5NFzqqlbVhb6vb%2Bwwr3GbQJXzNxXQfQm%2B2Bi69sJeemRo%2B0gExjiB9Ll89A0VqCJVvgR2e9fduxP74b1GkSEi5FsO%2FF%2B%2FoALz08oZ0Ej8szIl1tGpCOk31Xoibd1GzHTiNyPhuNdxv3afoEyGgqlvZzOWUI44gUU9I%2FYegvAzBWS72WpP2IArqECQwwtB4nOJ7rNqWFg0Ry4Mcn3fnOgiz96a33oE%2Fl3bpoV66D4bl%2F%2FTDiwKrOyddw0pnmFHZPNEKSNZofDvl%2BDpThNjvSz5df0wzMnjvgY6pgFnf%2Fu00FMgr1RR4G6fK7dyXHHhWsncqvWL442QkogTwsvZJtrHNMeiIriX1cXpK9srHR%2B%2BPAYOoROQCKJ66bt2LdHdHJ4h%2BshciGr4XvZtILCB68q2JSo%2F2H4lDhfZex2iM%2Fow1GhQ31qxDtTYQ0LprSD7HJ21u8CYioh9T%2B6LqAwhxcY1oOugs391D1auiBHz7aMwWBXFBGdH%2FCgmklAAFy5p644r&X-Amz-Signature=4e2538c2ac862cf3c6d2986fc3e9c2fbf59a5449d4b200a7f7ccc64f682682a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZTDRAU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEChXqXI5ZR%2Fac9XE8t6fHCPgYw9ulfQkJw1qGqZgE2HAiBNmGKJSlJhlZlYVPE9kNxaPtkYy7pvSaCvikTRK4NHYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMGSY2U3iPUYJfYUQjKtwD2%2F2MmwaFtJi07V4RBwiKtM4I6Zn850Aw6EB%2FNv%2BihVNM0kMgTGzkPQ5QxGlJYrxWhoYH6txdO08ODVw9A%2BMYlxUrOKU77AhaMZ%2FCiprZ1m0JQGndwdtz8iGCEf7vlydqLMHeTWkO5lhj5ExxmD0ntfbb1EKxIuCmzvkMbAQLQYM8IkCckNsAkxgGReJuzHObxhDCP6Do%2Bume6aN%2FC1WWpIsm1azb3GfxAdjOFSIFORma9JLXxAKwlEtdi%2BB33ULrhmHAN1fVC%2FjC6MLnU0MbyEHYpY3Ajyll1K8GaZ3OXHvMIt%2BkzDzx7cCTiP87SNb6TNEntEdkQ%2BIWuVs%2FHVIZqKPfeonWOdFt4Dv5NFzqqlbVhb6vb%2Bwwr3GbQJXzNxXQfQm%2B2Bi69sJeemRo%2B0gExjiB9Ll89A0VqCJVvgR2e9fduxP74b1GkSEi5FsO%2FF%2B%2FoALz08oZ0Ej8szIl1tGpCOk31Xoibd1GzHTiNyPhuNdxv3afoEyGgqlvZzOWUI44gUU9I%2FYegvAzBWS72WpP2IArqECQwwtB4nOJ7rNqWFg0Ry4Mcn3fnOgiz96a33oE%2Fl3bpoV66D4bl%2F%2FTDiwKrOyddw0pnmFHZPNEKSNZofDvl%2BDpThNjvSz5df0wzMnjvgY6pgFnf%2Fu00FMgr1RR4G6fK7dyXHHhWsncqvWL442QkogTwsvZJtrHNMeiIriX1cXpK9srHR%2B%2BPAYOoROQCKJ66bt2LdHdHJ4h%2BshciGr4XvZtILCB68q2JSo%2F2H4lDhfZex2iM%2Fow1GhQ31qxDtTYQ0LprSD7HJ21u8CYioh9T%2B6LqAwhxcY1oOugs391D1auiBHz7aMwWBXFBGdH%2FCgmklAAFy5p644r&X-Amz-Signature=cdd7da899e02094411cdea30f9a2e7cffeaeb88eabf1e5aa86a4bd265e3cf063&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
