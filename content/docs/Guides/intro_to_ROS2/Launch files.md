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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSNCDUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEnNOVY14K60ucf9zwpEdbbfLplYpj4eDwk%2FPuW14pV0AiBCf61rIopbGev20aPzzJLKNCoxVBFwO8t9kcLNRDLp5ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMkVp%2BQ%2FbQ%2FRoigsigKtwDVqUqXaDPvvioVqN7VN%2B9WReOvbASm3ew6OJCVQ1MZF8Ed9NVx1OKUJHArNJEN06WBHMToYaEQVaFLykB0x%2FYaPK0Jr4XS7yRKxBhHeYySHHuu%2FymgfZ5GiBKZ7GChKHGDbAP%2FEaNM7FZfaGihTrndxw32CKgLNUTHSNPh9h2CcOJVDcIeOPao1L5e0UBdiX4BrX87IqAdLeE6G32XwWTRz1oV3C3lJGcSVnYOaseas8MFPuxyC6YF2aIzzVSlTsr6mewmdCcgmmKqH9nUySKcs5sbZlhvPBNtiX5qWO027d1E%2F9R4wVPdWP%2BJ%2BZG2byyDzesmlC68swHeCKYGCf9NRInUiCjsw5%2FLprUb6dUsB%2FvT%2FNI5cnjVHy2tDLbdMCEYYYq4Tl6rrZ67mj4AjFiyY5wBSiPhTSZRhL6yy7fV5k4gte%2FwCL9kksHwLnszWwG08hc0E39coWe2fa7MKmYDaDZEn5mdYLr%2BOgNtNDNCCO%2FwyjPGtuUY12xEAlJZYnMENOETSrWds%2BrJzONiYDhQ6%2FVpJXfvstpUd3LpqL5Q0OsPSwPA0XNdMWgjS%2F28wCOT5HL6sqRS4fzK9ROk40T5RI%2Bh2usLFqUvN3iB2btaesceT7Nna6FiCXq52Iw0P2YvQY6pgGbkJhVHyjN7QBLrGmc7I3HgYQqvn76AHV5y%2FSEzOda0SRB5JtiA8b%2BXZW0eP5QvYLb4AUcoUjK0r6uEWMUskN4QqC%2BIBUJYbS6Ok4AWCHuokQJwd9DPRFzwbXZIibyeeUV8N%2BhaQ6yF%2FxKJGhGSnqseQi4E6%2FYDAbuhzsV83dO2skBEF8BCZU3gGwsmWH3FYIPoQd8KWM9VInkqps2VDT4%2BE3gzshg&X-Amz-Signature=37fd3171690d302c22b0a03c238c2c4c61828bacf0bd74b90f2b439fe9e9cb45&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSNCDUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEnNOVY14K60ucf9zwpEdbbfLplYpj4eDwk%2FPuW14pV0AiBCf61rIopbGev20aPzzJLKNCoxVBFwO8t9kcLNRDLp5ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMkVp%2BQ%2FbQ%2FRoigsigKtwDVqUqXaDPvvioVqN7VN%2B9WReOvbASm3ew6OJCVQ1MZF8Ed9NVx1OKUJHArNJEN06WBHMToYaEQVaFLykB0x%2FYaPK0Jr4XS7yRKxBhHeYySHHuu%2FymgfZ5GiBKZ7GChKHGDbAP%2FEaNM7FZfaGihTrndxw32CKgLNUTHSNPh9h2CcOJVDcIeOPao1L5e0UBdiX4BrX87IqAdLeE6G32XwWTRz1oV3C3lJGcSVnYOaseas8MFPuxyC6YF2aIzzVSlTsr6mewmdCcgmmKqH9nUySKcs5sbZlhvPBNtiX5qWO027d1E%2F9R4wVPdWP%2BJ%2BZG2byyDzesmlC68swHeCKYGCf9NRInUiCjsw5%2FLprUb6dUsB%2FvT%2FNI5cnjVHy2tDLbdMCEYYYq4Tl6rrZ67mj4AjFiyY5wBSiPhTSZRhL6yy7fV5k4gte%2FwCL9kksHwLnszWwG08hc0E39coWe2fa7MKmYDaDZEn5mdYLr%2BOgNtNDNCCO%2FwyjPGtuUY12xEAlJZYnMENOETSrWds%2BrJzONiYDhQ6%2FVpJXfvstpUd3LpqL5Q0OsPSwPA0XNdMWgjS%2F28wCOT5HL6sqRS4fzK9ROk40T5RI%2Bh2usLFqUvN3iB2btaesceT7Nna6FiCXq52Iw0P2YvQY6pgGbkJhVHyjN7QBLrGmc7I3HgYQqvn76AHV5y%2FSEzOda0SRB5JtiA8b%2BXZW0eP5QvYLb4AUcoUjK0r6uEWMUskN4QqC%2BIBUJYbS6Ok4AWCHuokQJwd9DPRFzwbXZIibyeeUV8N%2BhaQ6yF%2FxKJGhGSnqseQi4E6%2FYDAbuhzsV83dO2skBEF8BCZU3gGwsmWH3FYIPoQd8KWM9VInkqps2VDT4%2BE3gzshg&X-Amz-Signature=c752dca6bd090bf9901f237d3a529282b01de12e0f449f9f8713b9a5c6a94c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSNCDUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEnNOVY14K60ucf9zwpEdbbfLplYpj4eDwk%2FPuW14pV0AiBCf61rIopbGev20aPzzJLKNCoxVBFwO8t9kcLNRDLp5ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMkVp%2BQ%2FbQ%2FRoigsigKtwDVqUqXaDPvvioVqN7VN%2B9WReOvbASm3ew6OJCVQ1MZF8Ed9NVx1OKUJHArNJEN06WBHMToYaEQVaFLykB0x%2FYaPK0Jr4XS7yRKxBhHeYySHHuu%2FymgfZ5GiBKZ7GChKHGDbAP%2FEaNM7FZfaGihTrndxw32CKgLNUTHSNPh9h2CcOJVDcIeOPao1L5e0UBdiX4BrX87IqAdLeE6G32XwWTRz1oV3C3lJGcSVnYOaseas8MFPuxyC6YF2aIzzVSlTsr6mewmdCcgmmKqH9nUySKcs5sbZlhvPBNtiX5qWO027d1E%2F9R4wVPdWP%2BJ%2BZG2byyDzesmlC68swHeCKYGCf9NRInUiCjsw5%2FLprUb6dUsB%2FvT%2FNI5cnjVHy2tDLbdMCEYYYq4Tl6rrZ67mj4AjFiyY5wBSiPhTSZRhL6yy7fV5k4gte%2FwCL9kksHwLnszWwG08hc0E39coWe2fa7MKmYDaDZEn5mdYLr%2BOgNtNDNCCO%2FwyjPGtuUY12xEAlJZYnMENOETSrWds%2BrJzONiYDhQ6%2FVpJXfvstpUd3LpqL5Q0OsPSwPA0XNdMWgjS%2F28wCOT5HL6sqRS4fzK9ROk40T5RI%2Bh2usLFqUvN3iB2btaesceT7Nna6FiCXq52Iw0P2YvQY6pgGbkJhVHyjN7QBLrGmc7I3HgYQqvn76AHV5y%2FSEzOda0SRB5JtiA8b%2BXZW0eP5QvYLb4AUcoUjK0r6uEWMUskN4QqC%2BIBUJYbS6Ok4AWCHuokQJwd9DPRFzwbXZIibyeeUV8N%2BhaQ6yF%2FxKJGhGSnqseQi4E6%2FYDAbuhzsV83dO2skBEF8BCZU3gGwsmWH3FYIPoQd8KWM9VInkqps2VDT4%2BE3gzshg&X-Amz-Signature=9382c728f28e01bf9a59c50a174c219c599f858706dfbef847be9091fb4332c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
