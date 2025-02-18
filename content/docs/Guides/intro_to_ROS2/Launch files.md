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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOFJ7J4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCorZmD%2FS5cZ%2FvFTmrp%2FSlUFlh0uMLx%2BfzWKdCUouZq9gIhAPEj%2B%2FswmFdx2MPDdL1SPdIwkxQYa6boqeI%2BBXS%2B3Lm%2FKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNhv%2FblW8Ok2b2VnUq3AMBOwkV5eh8zFeHShklOHyTSNn1w5H60hwQRNWRQMbBICyeGY4CD21qsc0m3VGi8gpnLw%2BBsgkj%2FzAzRd9ON%2BoCVB7aM5%2FIBA43%2FpWDWU6bYlN9hzFy9gXKKpcw12%2BopipmFz7nY%2FfvbjCTMedasdJpcjl176thhprnJ0%2BZIQXjofkBzXRXH90%2FBEgUT%2Ftu3G6uMc99hcIa0Le9XEk%2FQd%2FSGA3%2FdpINAYJ%2B1LkoTltG8Y%2BurcDOJcrpdlSg%2FBLrCHqQ4yE7pqvuitvfil6uqoz7g00ur2XEhQ%2BkS5vrmYeNE4kH%2FVObOr2ntw0ZXNJyD6XfKonu8cuxlZ0fAHWDo9w1ZXkvz3FrNP0AwTaVzfv0NPpe4zVN1VjmPNYYoLqhd5euqzYekDId6ERja4uSLP8QNIQ99GnhmNFPor%2B8QkYO6oyyYzA2MCnAtLABn1uP90kwjz%2BgakPuVNbrF751nRS%2FKlFp1hAOxfcK1Anl6yab2UKZfDdvmwndx5%2F2WCv58xSOzymsKoJlZRATg2%2FtO3gE%2FFZn%2FGEky%2FevaRcrKQz11%2FhO%2FcK9ksZgzOjXtwD4XKejlBg5R0yvP3ir37jmJqJjoTb%2FFIK%2F7QLcy1OqdVknSa%2B%2FvB9DlUDzdCEouTCCktS9BjqkAf7zFqxtDApf0s63cJdTTVXy47BM2O5ZKbKYVY5AHmMNn3l5JkGhYldP3QcQP%2B%2F1p7gH6ZQ5%2BmFEzazf6J69H5bC2YqFnNNuExfsOCcHEnJwgAdjJK9CKVTgSs4BHaBvA%2FOv8j0JZXbPWfnkVEeTRHdCbY3ClaMsDaXfMCTUoGBfsSGlGFXZxXiq7PeR9qYQljGSwBj2sWz8qVpDYU7fhsppL3T5&X-Amz-Signature=60601687bc993407bc0393e54a874c56d5d50dbda4481800fb6ae80ea056f9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOFJ7J4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCorZmD%2FS5cZ%2FvFTmrp%2FSlUFlh0uMLx%2BfzWKdCUouZq9gIhAPEj%2B%2FswmFdx2MPDdL1SPdIwkxQYa6boqeI%2BBXS%2B3Lm%2FKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNhv%2FblW8Ok2b2VnUq3AMBOwkV5eh8zFeHShklOHyTSNn1w5H60hwQRNWRQMbBICyeGY4CD21qsc0m3VGi8gpnLw%2BBsgkj%2FzAzRd9ON%2BoCVB7aM5%2FIBA43%2FpWDWU6bYlN9hzFy9gXKKpcw12%2BopipmFz7nY%2FfvbjCTMedasdJpcjl176thhprnJ0%2BZIQXjofkBzXRXH90%2FBEgUT%2Ftu3G6uMc99hcIa0Le9XEk%2FQd%2FSGA3%2FdpINAYJ%2B1LkoTltG8Y%2BurcDOJcrpdlSg%2FBLrCHqQ4yE7pqvuitvfil6uqoz7g00ur2XEhQ%2BkS5vrmYeNE4kH%2FVObOr2ntw0ZXNJyD6XfKonu8cuxlZ0fAHWDo9w1ZXkvz3FrNP0AwTaVzfv0NPpe4zVN1VjmPNYYoLqhd5euqzYekDId6ERja4uSLP8QNIQ99GnhmNFPor%2B8QkYO6oyyYzA2MCnAtLABn1uP90kwjz%2BgakPuVNbrF751nRS%2FKlFp1hAOxfcK1Anl6yab2UKZfDdvmwndx5%2F2WCv58xSOzymsKoJlZRATg2%2FtO3gE%2FFZn%2FGEky%2FevaRcrKQz11%2FhO%2FcK9ksZgzOjXtwD4XKejlBg5R0yvP3ir37jmJqJjoTb%2FFIK%2F7QLcy1OqdVknSa%2B%2FvB9DlUDzdCEouTCCktS9BjqkAf7zFqxtDApf0s63cJdTTVXy47BM2O5ZKbKYVY5AHmMNn3l5JkGhYldP3QcQP%2B%2F1p7gH6ZQ5%2BmFEzazf6J69H5bC2YqFnNNuExfsOCcHEnJwgAdjJK9CKVTgSs4BHaBvA%2FOv8j0JZXbPWfnkVEeTRHdCbY3ClaMsDaXfMCTUoGBfsSGlGFXZxXiq7PeR9qYQljGSwBj2sWz8qVpDYU7fhsppL3T5&X-Amz-Signature=c84e0b7e280dbcda3605a25a1773cc0254f20fdce9ca5c521687041dcf83982d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOFJ7J4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCorZmD%2FS5cZ%2FvFTmrp%2FSlUFlh0uMLx%2BfzWKdCUouZq9gIhAPEj%2B%2FswmFdx2MPDdL1SPdIwkxQYa6boqeI%2BBXS%2B3Lm%2FKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNhv%2FblW8Ok2b2VnUq3AMBOwkV5eh8zFeHShklOHyTSNn1w5H60hwQRNWRQMbBICyeGY4CD21qsc0m3VGi8gpnLw%2BBsgkj%2FzAzRd9ON%2BoCVB7aM5%2FIBA43%2FpWDWU6bYlN9hzFy9gXKKpcw12%2BopipmFz7nY%2FfvbjCTMedasdJpcjl176thhprnJ0%2BZIQXjofkBzXRXH90%2FBEgUT%2Ftu3G6uMc99hcIa0Le9XEk%2FQd%2FSGA3%2FdpINAYJ%2B1LkoTltG8Y%2BurcDOJcrpdlSg%2FBLrCHqQ4yE7pqvuitvfil6uqoz7g00ur2XEhQ%2BkS5vrmYeNE4kH%2FVObOr2ntw0ZXNJyD6XfKonu8cuxlZ0fAHWDo9w1ZXkvz3FrNP0AwTaVzfv0NPpe4zVN1VjmPNYYoLqhd5euqzYekDId6ERja4uSLP8QNIQ99GnhmNFPor%2B8QkYO6oyyYzA2MCnAtLABn1uP90kwjz%2BgakPuVNbrF751nRS%2FKlFp1hAOxfcK1Anl6yab2UKZfDdvmwndx5%2F2WCv58xSOzymsKoJlZRATg2%2FtO3gE%2FFZn%2FGEky%2FevaRcrKQz11%2FhO%2FcK9ksZgzOjXtwD4XKejlBg5R0yvP3ir37jmJqJjoTb%2FFIK%2F7QLcy1OqdVknSa%2B%2FvB9DlUDzdCEouTCCktS9BjqkAf7zFqxtDApf0s63cJdTTVXy47BM2O5ZKbKYVY5AHmMNn3l5JkGhYldP3QcQP%2B%2F1p7gH6ZQ5%2BmFEzazf6J69H5bC2YqFnNNuExfsOCcHEnJwgAdjJK9CKVTgSs4BHaBvA%2FOv8j0JZXbPWfnkVEeTRHdCbY3ClaMsDaXfMCTUoGBfsSGlGFXZxXiq7PeR9qYQljGSwBj2sWz8qVpDYU7fhsppL3T5&X-Amz-Signature=42b9a4649926f014440648999a3c3d04f9d0c2ff190da748225c31778409be13&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
