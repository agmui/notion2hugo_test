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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGFEVID%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrKAK%2FbtIrg2Dt6yX3fCVdrtRrFREAiOmaToyKikWZpAiByVqDa9s20NCDkYwaEmNxlIo1N0UABbTD%2BHkXZSwvxeCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrLkpcYgTtK7CeIFGKtwD6%2BafW6fnXwU6fSLuenEdbboRQzhJQvtFfhh%2F7duYythWZHFBVGiKq%2Fs%2F%2Fvqdf39ZcLRmmUVPjZUUB7iszb2xNAe9WTctbO9XfdAlUmDrxzW8FJxzeM79%2FeHIjA0qnEumnU%2Bw1Mw6dmaz1uxkhvFXu7UGKFC6C1svE7jNNKccxl47QxWevlebkejfa%2FwxEKK8oE704jKfUS9v3MMHCvWuRa7nBE%2FN212MMb4KFxPWm7FywyzlWXc1NtI%2FvrjDgJ4ccD%2F%2B%2FE1iB6eb1nmrzKccHCBligtL8T3tOLPXld0XFQE%2BVDnj%2Fz%2FzucQWiZ%2F6aII%2B1r5Cd004nVQFOdqae2hLRc6TR%2BO43QTEupPPPLT54hUlwzsQ%2B9E%2BRMC3cs5JhBYEniPA7TATjs%2Bf%2FKAyGrW1q8bV0ihLgTvG6SP%2BKDPHGbrSrA6V28IsbGz8vdcJ2bbHni%2FJe5dHhR7MDUn4%2BrNJWpA2RJ86lIRCx6Egq9g%2B69qgIxRxRwEY0kh5K%2B%2FJKnPIYkZD%2F5Fk15D%2F%2FPih01sKy89YKvKNNZtCqMnPszZlCIqqRdgoMDFaonzAUeGOEHiyVvmDfZ8Bx%2FmGSITV3%2BkHp5vuoXksJHRVoxSJ7MmvYiMB8o8TjVXJpRu%2Bk0gwhYbwvgY6pgG7N4GLdWTTBaWBb%2BIa34r9%2BrXwk3KGnGKPwIjWHo5%2FzJAOFebCvsIvp4hJ7Lke9CqcXRBDF%2BGSRJGvlO2J6QluD4iXj%2B%2BvRAByo492gidjGMvU5Y6DJAEFG%2BWdvE7wi6gkRz9kCslA%2FuQq9u9ayW4uXRfgvCKWOcY525%2FUB4qn45EwkSSyYlmY%2BWHuBhBNqjLXoTKGeX5Eio8j4kecLijA2N6E5fGG&X-Amz-Signature=d41740b5898cfc5173a006595d631710bbbf54b06449a7d323aeae0d7b68fab3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGFEVID%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrKAK%2FbtIrg2Dt6yX3fCVdrtRrFREAiOmaToyKikWZpAiByVqDa9s20NCDkYwaEmNxlIo1N0UABbTD%2BHkXZSwvxeCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrLkpcYgTtK7CeIFGKtwD6%2BafW6fnXwU6fSLuenEdbboRQzhJQvtFfhh%2F7duYythWZHFBVGiKq%2Fs%2F%2Fvqdf39ZcLRmmUVPjZUUB7iszb2xNAe9WTctbO9XfdAlUmDrxzW8FJxzeM79%2FeHIjA0qnEumnU%2Bw1Mw6dmaz1uxkhvFXu7UGKFC6C1svE7jNNKccxl47QxWevlebkejfa%2FwxEKK8oE704jKfUS9v3MMHCvWuRa7nBE%2FN212MMb4KFxPWm7FywyzlWXc1NtI%2FvrjDgJ4ccD%2F%2B%2FE1iB6eb1nmrzKccHCBligtL8T3tOLPXld0XFQE%2BVDnj%2Fz%2FzucQWiZ%2F6aII%2B1r5Cd004nVQFOdqae2hLRc6TR%2BO43QTEupPPPLT54hUlwzsQ%2B9E%2BRMC3cs5JhBYEniPA7TATjs%2Bf%2FKAyGrW1q8bV0ihLgTvG6SP%2BKDPHGbrSrA6V28IsbGz8vdcJ2bbHni%2FJe5dHhR7MDUn4%2BrNJWpA2RJ86lIRCx6Egq9g%2B69qgIxRxRwEY0kh5K%2B%2FJKnPIYkZD%2F5Fk15D%2F%2FPih01sKy89YKvKNNZtCqMnPszZlCIqqRdgoMDFaonzAUeGOEHiyVvmDfZ8Bx%2FmGSITV3%2BkHp5vuoXksJHRVoxSJ7MmvYiMB8o8TjVXJpRu%2Bk0gwhYbwvgY6pgG7N4GLdWTTBaWBb%2BIa34r9%2BrXwk3KGnGKPwIjWHo5%2FzJAOFebCvsIvp4hJ7Lke9CqcXRBDF%2BGSRJGvlO2J6QluD4iXj%2B%2BvRAByo492gidjGMvU5Y6DJAEFG%2BWdvE7wi6gkRz9kCslA%2FuQq9u9ayW4uXRfgvCKWOcY525%2FUB4qn45EwkSSyYlmY%2BWHuBhBNqjLXoTKGeX5Eio8j4kecLijA2N6E5fGG&X-Amz-Signature=2197151e6311df725c994f5977865a5a2dcec9a70356bd3fbae2d06c42082eab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGFEVID%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrKAK%2FbtIrg2Dt6yX3fCVdrtRrFREAiOmaToyKikWZpAiByVqDa9s20NCDkYwaEmNxlIo1N0UABbTD%2BHkXZSwvxeCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrLkpcYgTtK7CeIFGKtwD6%2BafW6fnXwU6fSLuenEdbboRQzhJQvtFfhh%2F7duYythWZHFBVGiKq%2Fs%2F%2Fvqdf39ZcLRmmUVPjZUUB7iszb2xNAe9WTctbO9XfdAlUmDrxzW8FJxzeM79%2FeHIjA0qnEumnU%2Bw1Mw6dmaz1uxkhvFXu7UGKFC6C1svE7jNNKccxl47QxWevlebkejfa%2FwxEKK8oE704jKfUS9v3MMHCvWuRa7nBE%2FN212MMb4KFxPWm7FywyzlWXc1NtI%2FvrjDgJ4ccD%2F%2B%2FE1iB6eb1nmrzKccHCBligtL8T3tOLPXld0XFQE%2BVDnj%2Fz%2FzucQWiZ%2F6aII%2B1r5Cd004nVQFOdqae2hLRc6TR%2BO43QTEupPPPLT54hUlwzsQ%2B9E%2BRMC3cs5JhBYEniPA7TATjs%2Bf%2FKAyGrW1q8bV0ihLgTvG6SP%2BKDPHGbrSrA6V28IsbGz8vdcJ2bbHni%2FJe5dHhR7MDUn4%2BrNJWpA2RJ86lIRCx6Egq9g%2B69qgIxRxRwEY0kh5K%2B%2FJKnPIYkZD%2F5Fk15D%2F%2FPih01sKy89YKvKNNZtCqMnPszZlCIqqRdgoMDFaonzAUeGOEHiyVvmDfZ8Bx%2FmGSITV3%2BkHp5vuoXksJHRVoxSJ7MmvYiMB8o8TjVXJpRu%2Bk0gwhYbwvgY6pgG7N4GLdWTTBaWBb%2BIa34r9%2BrXwk3KGnGKPwIjWHo5%2FzJAOFebCvsIvp4hJ7Lke9CqcXRBDF%2BGSRJGvlO2J6QluD4iXj%2B%2BvRAByo492gidjGMvU5Y6DJAEFG%2BWdvE7wi6gkRz9kCslA%2FuQq9u9ayW4uXRfgvCKWOcY525%2FUB4qn45EwkSSyYlmY%2BWHuBhBNqjLXoTKGeX5Eio8j4kecLijA2N6E5fGG&X-Amz-Signature=7bbada07128592a5d08f69f42af266746d3b7be5365e55aba8e2439ffd8ac625&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
