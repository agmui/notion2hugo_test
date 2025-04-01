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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6Q5XO3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDX9AAaJy9ojORpAzNPTfvfYwsVe4xrWp9sSmvrfQZr%2BgIhAKv77UD2%2F8mXY7ohSxnjlbyrSp%2FX9aGDY6FG8bf6WFAJKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlJ%2FgK8gVlnLZW2Hoq3AP%2BKPkI4%2FHVitXJD9V3eyCMcZ8HgitQ3rf72j3aYNEJePrOKE5t1W6QDtvG59fr%2BcD0Rd0zzryHLyQGNV3D5adKX3RBsHr8meVawe9MaELl9J0DVm%2FAdR8TfjLXSvpYb0Ln2M1uUlAhj8Ts0J0C7qFFljKwMbiR7K6gnTceuH9SkyW%2BJmI8%2BtFrhGup96G2k%2FlRFSS6DkgqOmOS6EdEi4C1mSZ%2Fwr5XffxvQRuGx3FF7qdkXC7f9XGcA6DtRH3Min%2F5uiQxHkWBJ41ONgVGyBavRb3Viz9EAAgfFKh7wO9WiAjnsMrzWezDWIj5y3PQ71dI1l95iCVxqCLJ2cGDkzqXLHpNtnMDUjGKFpPfYQsF2yLlNbqFfICQrKrCb27kZ2DvalFThDZNmmCopW6xOoMzC3LfE8GVuAV5yZHTZJYRzri8Ep3sjGrKjWoZPSjoZY80cMM0ktHARXA%2FCUijo3NPpDHjvVgjjTENYZJdrv6I5%2F7EStKXchenDJd4je5BrqAer4Vzf%2FH%2BnXJSrbj1b1%2Bif7abkIAwPgAFslHdYUwTpg3lHXrY0Wf%2FaxyLPxCyu9EsZD9WgNbJBoTIFQ7xsI%2B%2BDL4RuxYvR5mYAs032k3MGJ85VNmR86h2zWeZIDCLjbG%2FBjqkAVkWI1kv0DLTMYqDyleboegRptVY8kTaPNOXqyG%2Fbe%2BvZIvizzbz68G3mXwUVT%2FGhpWqaE%2FBQJNkW1cKJA8FkIHvqjySqYmnZiiBp%2F7BrN9%2B6RTZHjvHG16L7tDOunos1iSFU4eHFDmQOK6drMx%2F33Cwta0L6RkG2cHK6l%2FToi1e35e%2FMeFGmB3K6%2BFbQ8z9Vldv24B9V30x7m1KKocfPfD1BqXM&X-Amz-Signature=c729fb0e1404abe228fb3d7dfac2f572d775951e4888354d1dd1b670c31adfef&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6Q5XO3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDX9AAaJy9ojORpAzNPTfvfYwsVe4xrWp9sSmvrfQZr%2BgIhAKv77UD2%2F8mXY7ohSxnjlbyrSp%2FX9aGDY6FG8bf6WFAJKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlJ%2FgK8gVlnLZW2Hoq3AP%2BKPkI4%2FHVitXJD9V3eyCMcZ8HgitQ3rf72j3aYNEJePrOKE5t1W6QDtvG59fr%2BcD0Rd0zzryHLyQGNV3D5adKX3RBsHr8meVawe9MaELl9J0DVm%2FAdR8TfjLXSvpYb0Ln2M1uUlAhj8Ts0J0C7qFFljKwMbiR7K6gnTceuH9SkyW%2BJmI8%2BtFrhGup96G2k%2FlRFSS6DkgqOmOS6EdEi4C1mSZ%2Fwr5XffxvQRuGx3FF7qdkXC7f9XGcA6DtRH3Min%2F5uiQxHkWBJ41ONgVGyBavRb3Viz9EAAgfFKh7wO9WiAjnsMrzWezDWIj5y3PQ71dI1l95iCVxqCLJ2cGDkzqXLHpNtnMDUjGKFpPfYQsF2yLlNbqFfICQrKrCb27kZ2DvalFThDZNmmCopW6xOoMzC3LfE8GVuAV5yZHTZJYRzri8Ep3sjGrKjWoZPSjoZY80cMM0ktHARXA%2FCUijo3NPpDHjvVgjjTENYZJdrv6I5%2F7EStKXchenDJd4je5BrqAer4Vzf%2FH%2BnXJSrbj1b1%2Bif7abkIAwPgAFslHdYUwTpg3lHXrY0Wf%2FaxyLPxCyu9EsZD9WgNbJBoTIFQ7xsI%2B%2BDL4RuxYvR5mYAs032k3MGJ85VNmR86h2zWeZIDCLjbG%2FBjqkAVkWI1kv0DLTMYqDyleboegRptVY8kTaPNOXqyG%2Fbe%2BvZIvizzbz68G3mXwUVT%2FGhpWqaE%2FBQJNkW1cKJA8FkIHvqjySqYmnZiiBp%2F7BrN9%2B6RTZHjvHG16L7tDOunos1iSFU4eHFDmQOK6drMx%2F33Cwta0L6RkG2cHK6l%2FToi1e35e%2FMeFGmB3K6%2BFbQ8z9Vldv24B9V30x7m1KKocfPfD1BqXM&X-Amz-Signature=3b97ae4b28a3f392a236538921399aa1ab7acba9a9f7c3e2d8e7426792933744&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6Q5XO3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDX9AAaJy9ojORpAzNPTfvfYwsVe4xrWp9sSmvrfQZr%2BgIhAKv77UD2%2F8mXY7ohSxnjlbyrSp%2FX9aGDY6FG8bf6WFAJKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlJ%2FgK8gVlnLZW2Hoq3AP%2BKPkI4%2FHVitXJD9V3eyCMcZ8HgitQ3rf72j3aYNEJePrOKE5t1W6QDtvG59fr%2BcD0Rd0zzryHLyQGNV3D5adKX3RBsHr8meVawe9MaELl9J0DVm%2FAdR8TfjLXSvpYb0Ln2M1uUlAhj8Ts0J0C7qFFljKwMbiR7K6gnTceuH9SkyW%2BJmI8%2BtFrhGup96G2k%2FlRFSS6DkgqOmOS6EdEi4C1mSZ%2Fwr5XffxvQRuGx3FF7qdkXC7f9XGcA6DtRH3Min%2F5uiQxHkWBJ41ONgVGyBavRb3Viz9EAAgfFKh7wO9WiAjnsMrzWezDWIj5y3PQ71dI1l95iCVxqCLJ2cGDkzqXLHpNtnMDUjGKFpPfYQsF2yLlNbqFfICQrKrCb27kZ2DvalFThDZNmmCopW6xOoMzC3LfE8GVuAV5yZHTZJYRzri8Ep3sjGrKjWoZPSjoZY80cMM0ktHARXA%2FCUijo3NPpDHjvVgjjTENYZJdrv6I5%2F7EStKXchenDJd4je5BrqAer4Vzf%2FH%2BnXJSrbj1b1%2Bif7abkIAwPgAFslHdYUwTpg3lHXrY0Wf%2FaxyLPxCyu9EsZD9WgNbJBoTIFQ7xsI%2B%2BDL4RuxYvR5mYAs032k3MGJ85VNmR86h2zWeZIDCLjbG%2FBjqkAVkWI1kv0DLTMYqDyleboegRptVY8kTaPNOXqyG%2Fbe%2BvZIvizzbz68G3mXwUVT%2FGhpWqaE%2FBQJNkW1cKJA8FkIHvqjySqYmnZiiBp%2F7BrN9%2B6RTZHjvHG16L7tDOunos1iSFU4eHFDmQOK6drMx%2F33Cwta0L6RkG2cHK6l%2FToi1e35e%2FMeFGmB3K6%2BFbQ8z9Vldv24B9V30x7m1KKocfPfD1BqXM&X-Amz-Signature=a4247d23e653f75a4d347419da7c217612f81d0f9e63ad9fe6dc59fed2157694&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
