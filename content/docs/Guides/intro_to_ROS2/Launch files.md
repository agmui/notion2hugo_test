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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD3OGNW4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH49y25fTM0f%2BU3%2BtZrph%2BbyuawYp1s3qG6fSBsEUtsgAiBwvrqz58rqqmQlJ9yS6jmPVsDmBVmwNYTjYpxjW%2BWAaCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfD5mQCNnX3HIguxKtwDXlQcrbC5TorzFX5tym%2FwCKSBaDMNZvjBBA8OlZp3T6FAha39%2FJjuAz3n60r5dtqZMFaKbJqTNzghpun1ngXKUKT456yfsnn20H2xCO0DXq60GalEJVUCPwOf2%2F9tmbrgJtFaDuvDVSdxwJ5fspqBiW%2F8wk3n1o47TBXftGXq6MuBNJVfaynqMYlr2jWNn9ude4Ec6auV8oqNM%2FGycQJoS3mGbCyy%2BpJsVfASw2C6hgGP%2BoDj1Gnobem8Ho89YkQ%2F%2BzNqyduGubp82xTi789mT%2B89puTc7KUZdqDFXnf9sCPSMT31M1YOB5tN1lee4S6gA3%2BSK9gnBcdk4w9gaO60gs9j8Xzl5JBbPsC41SPRINBhrZ5F6AaHk4rekGYedjJLjRVvQ%2FVWPbirVmQsPEjSXPLvxrdhfz8ngXZWX8x5Y4iydIZBOS4x%2FOLFnHjtiA7siLFviaFqXqd82IvSTXOpLYPfiiNNwlHrIgnVIYXM9NTsr3%2BkVeVPORvHTxczu%2BC%2FwWEZ8JjnvpTLczYHgmi4ryQ0orqnF%2Fdxum%2B6Ge5bR91z%2BMxx8HIOtXohGT12GOmY8fDNOZGlMm8yMjuQ4J5W4laZmVWWYhE5gw1X79f6FzW6Wm3HYrDzHhpS3xYwyZTbvwY6pgHGTlUOzv0zENUYc1V58pTjVhESWov3JiY4mD6kCCU39vc85anb%2BB7FvtStruE0k5CJIjS6m1FUPMD2%2BGuQ8nQF%2FWt5yq62LDiGCpc5gTM1p%2FcqCe4kmg9I%2BP%2FjOuQ%2FWbF55Tdl%2BpmkpA%2FAEnxWHMmuXnPz54aVGA1UyuQygJ4F4tRdC7S2Ry%2Fdp5tEYTYgmCQ42EfHlZ5EC0vkt0AVTHWwytE7LCFx&X-Amz-Signature=c94c8a3af31806bb43f9a7b3760f40491ebfb5be5e1c7d683522c5d479dcd156&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD3OGNW4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH49y25fTM0f%2BU3%2BtZrph%2BbyuawYp1s3qG6fSBsEUtsgAiBwvrqz58rqqmQlJ9yS6jmPVsDmBVmwNYTjYpxjW%2BWAaCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfD5mQCNnX3HIguxKtwDXlQcrbC5TorzFX5tym%2FwCKSBaDMNZvjBBA8OlZp3T6FAha39%2FJjuAz3n60r5dtqZMFaKbJqTNzghpun1ngXKUKT456yfsnn20H2xCO0DXq60GalEJVUCPwOf2%2F9tmbrgJtFaDuvDVSdxwJ5fspqBiW%2F8wk3n1o47TBXftGXq6MuBNJVfaynqMYlr2jWNn9ude4Ec6auV8oqNM%2FGycQJoS3mGbCyy%2BpJsVfASw2C6hgGP%2BoDj1Gnobem8Ho89YkQ%2F%2BzNqyduGubp82xTi789mT%2B89puTc7KUZdqDFXnf9sCPSMT31M1YOB5tN1lee4S6gA3%2BSK9gnBcdk4w9gaO60gs9j8Xzl5JBbPsC41SPRINBhrZ5F6AaHk4rekGYedjJLjRVvQ%2FVWPbirVmQsPEjSXPLvxrdhfz8ngXZWX8x5Y4iydIZBOS4x%2FOLFnHjtiA7siLFviaFqXqd82IvSTXOpLYPfiiNNwlHrIgnVIYXM9NTsr3%2BkVeVPORvHTxczu%2BC%2FwWEZ8JjnvpTLczYHgmi4ryQ0orqnF%2Fdxum%2B6Ge5bR91z%2BMxx8HIOtXohGT12GOmY8fDNOZGlMm8yMjuQ4J5W4laZmVWWYhE5gw1X79f6FzW6Wm3HYrDzHhpS3xYwyZTbvwY6pgHGTlUOzv0zENUYc1V58pTjVhESWov3JiY4mD6kCCU39vc85anb%2BB7FvtStruE0k5CJIjS6m1FUPMD2%2BGuQ8nQF%2FWt5yq62LDiGCpc5gTM1p%2FcqCe4kmg9I%2BP%2FjOuQ%2FWbF55Tdl%2BpmkpA%2FAEnxWHMmuXnPz54aVGA1UyuQygJ4F4tRdC7S2Ry%2Fdp5tEYTYgmCQ42EfHlZ5EC0vkt0AVTHWwytE7LCFx&X-Amz-Signature=c7b005c1aaadda769c9d41821bccd250362fb313c5df5136d1460c2f2f29b847&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD3OGNW4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH49y25fTM0f%2BU3%2BtZrph%2BbyuawYp1s3qG6fSBsEUtsgAiBwvrqz58rqqmQlJ9yS6jmPVsDmBVmwNYTjYpxjW%2BWAaCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfD5mQCNnX3HIguxKtwDXlQcrbC5TorzFX5tym%2FwCKSBaDMNZvjBBA8OlZp3T6FAha39%2FJjuAz3n60r5dtqZMFaKbJqTNzghpun1ngXKUKT456yfsnn20H2xCO0DXq60GalEJVUCPwOf2%2F9tmbrgJtFaDuvDVSdxwJ5fspqBiW%2F8wk3n1o47TBXftGXq6MuBNJVfaynqMYlr2jWNn9ude4Ec6auV8oqNM%2FGycQJoS3mGbCyy%2BpJsVfASw2C6hgGP%2BoDj1Gnobem8Ho89YkQ%2F%2BzNqyduGubp82xTi789mT%2B89puTc7KUZdqDFXnf9sCPSMT31M1YOB5tN1lee4S6gA3%2BSK9gnBcdk4w9gaO60gs9j8Xzl5JBbPsC41SPRINBhrZ5F6AaHk4rekGYedjJLjRVvQ%2FVWPbirVmQsPEjSXPLvxrdhfz8ngXZWX8x5Y4iydIZBOS4x%2FOLFnHjtiA7siLFviaFqXqd82IvSTXOpLYPfiiNNwlHrIgnVIYXM9NTsr3%2BkVeVPORvHTxczu%2BC%2FwWEZ8JjnvpTLczYHgmi4ryQ0orqnF%2Fdxum%2B6Ge5bR91z%2BMxx8HIOtXohGT12GOmY8fDNOZGlMm8yMjuQ4J5W4laZmVWWYhE5gw1X79f6FzW6Wm3HYrDzHhpS3xYwyZTbvwY6pgHGTlUOzv0zENUYc1V58pTjVhESWov3JiY4mD6kCCU39vc85anb%2BB7FvtStruE0k5CJIjS6m1FUPMD2%2BGuQ8nQF%2FWt5yq62LDiGCpc5gTM1p%2FcqCe4kmg9I%2BP%2FjOuQ%2FWbF55Tdl%2BpmkpA%2FAEnxWHMmuXnPz54aVGA1UyuQygJ4F4tRdC7S2Ry%2Fdp5tEYTYgmCQ42EfHlZ5EC0vkt0AVTHWwytE7LCFx&X-Amz-Signature=762e4a5d183c9bc493e32025b60a2b35a9471210163304ba73a2d9bb62368736&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
