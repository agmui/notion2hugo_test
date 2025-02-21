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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCAFQMEK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5IFQChxDMBHDw9L0c556sq6DoIh2dLOFr0ALBPcDtNwIhAKzXnno8mapaVK73WyireK5pDkhPgd%2B%2F3PY1KOHU7yGCKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhOVwqD8yDN3h%2FasAq3AOCLvOi1YLxC7J1WzvvH%2Fdkg79uACLeTZwSUcXBdQCppl5xzXmLjDQG9KCcrcrX9AyPNXD2E6PrVyfEG8K3K1eWhKerfqNuqrByG1oymEnX%2BOXOXVShy25zZigxZxirvIl7q64nCaVXbMIdWz6JYpaPhe4d847pH4fsQx0O4B3G5UA714v%2F%2Bohal676QNcstOhpieWK18RmP1APtX5O9EE1N9UOq8mAnm1n%2FRExM4SxWGxwqogZhRITUn1iBH1io13a7dFBLaxKfctq5Auyh4SUUucJsm9nFb4Cs1BdxvEss%2BuMCE1rWCTJfvYlX46TAYJNdhn141baxpBs7lnpLH5euWoyXomDa7CE437V3H4kAhyOx42hcrZCtw0%2BNitqDzPFydrY1tdF0rjWHSSR1sIDxEodI5IQfiUd15M06%2B2Uo8sNPrVQjduQVA84F%2F%2FgbNSUvdDXUw3gXJfXdC9LJXkc%2Bd5a9dGMtIIE5V4KES44QgILtRCKwiug8raqMqftp7KVvWeH9tc3xgWXY7YtmBu%2BcnXTLBpRzkshJoe%2FrBG3IgC9OH4vJvOHKQOYkmgfBXmF6JRjHq3DBy2OOhNpbReFg6emDOe2chamHxdo1KtZcmdwsS2oBBoSmGIgczCJveK9BjqkAU893DaMRbLnTAZzNH84UpXG0Y71CjASBaOR5kkUe1ql4oaxETluyHrV0TQRrCuAeulIg2YWDMkyKZ8DFsLuDoYxUFnKVTcddGoLB6hxKresK8a04U1bapqbi5raiFppp2jRmTDdNp3FsB%2BPzb1pj4yygCSoONGBK1tRXxJgkuZBFpYXyu2FB8xTR3fXbenjqkplrk2hh8tlPV5NHaGCPHRwbFyX&X-Amz-Signature=20d5b837b6ee018eac6168d75cd7ad9402fa1bb1d718f2509cdf7ff7b15d1a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCAFQMEK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5IFQChxDMBHDw9L0c556sq6DoIh2dLOFr0ALBPcDtNwIhAKzXnno8mapaVK73WyireK5pDkhPgd%2B%2F3PY1KOHU7yGCKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhOVwqD8yDN3h%2FasAq3AOCLvOi1YLxC7J1WzvvH%2Fdkg79uACLeTZwSUcXBdQCppl5xzXmLjDQG9KCcrcrX9AyPNXD2E6PrVyfEG8K3K1eWhKerfqNuqrByG1oymEnX%2BOXOXVShy25zZigxZxirvIl7q64nCaVXbMIdWz6JYpaPhe4d847pH4fsQx0O4B3G5UA714v%2F%2Bohal676QNcstOhpieWK18RmP1APtX5O9EE1N9UOq8mAnm1n%2FRExM4SxWGxwqogZhRITUn1iBH1io13a7dFBLaxKfctq5Auyh4SUUucJsm9nFb4Cs1BdxvEss%2BuMCE1rWCTJfvYlX46TAYJNdhn141baxpBs7lnpLH5euWoyXomDa7CE437V3H4kAhyOx42hcrZCtw0%2BNitqDzPFydrY1tdF0rjWHSSR1sIDxEodI5IQfiUd15M06%2B2Uo8sNPrVQjduQVA84F%2F%2FgbNSUvdDXUw3gXJfXdC9LJXkc%2Bd5a9dGMtIIE5V4KES44QgILtRCKwiug8raqMqftp7KVvWeH9tc3xgWXY7YtmBu%2BcnXTLBpRzkshJoe%2FrBG3IgC9OH4vJvOHKQOYkmgfBXmF6JRjHq3DBy2OOhNpbReFg6emDOe2chamHxdo1KtZcmdwsS2oBBoSmGIgczCJveK9BjqkAU893DaMRbLnTAZzNH84UpXG0Y71CjASBaOR5kkUe1ql4oaxETluyHrV0TQRrCuAeulIg2YWDMkyKZ8DFsLuDoYxUFnKVTcddGoLB6hxKresK8a04U1bapqbi5raiFppp2jRmTDdNp3FsB%2BPzb1pj4yygCSoONGBK1tRXxJgkuZBFpYXyu2FB8xTR3fXbenjqkplrk2hh8tlPV5NHaGCPHRwbFyX&X-Amz-Signature=89743821c93bc525a1fb61469bbdc08562264e42d9393a241d37f15d656baf7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCAFQMEK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5IFQChxDMBHDw9L0c556sq6DoIh2dLOFr0ALBPcDtNwIhAKzXnno8mapaVK73WyireK5pDkhPgd%2B%2F3PY1KOHU7yGCKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhOVwqD8yDN3h%2FasAq3AOCLvOi1YLxC7J1WzvvH%2Fdkg79uACLeTZwSUcXBdQCppl5xzXmLjDQG9KCcrcrX9AyPNXD2E6PrVyfEG8K3K1eWhKerfqNuqrByG1oymEnX%2BOXOXVShy25zZigxZxirvIl7q64nCaVXbMIdWz6JYpaPhe4d847pH4fsQx0O4B3G5UA714v%2F%2Bohal676QNcstOhpieWK18RmP1APtX5O9EE1N9UOq8mAnm1n%2FRExM4SxWGxwqogZhRITUn1iBH1io13a7dFBLaxKfctq5Auyh4SUUucJsm9nFb4Cs1BdxvEss%2BuMCE1rWCTJfvYlX46TAYJNdhn141baxpBs7lnpLH5euWoyXomDa7CE437V3H4kAhyOx42hcrZCtw0%2BNitqDzPFydrY1tdF0rjWHSSR1sIDxEodI5IQfiUd15M06%2B2Uo8sNPrVQjduQVA84F%2F%2FgbNSUvdDXUw3gXJfXdC9LJXkc%2Bd5a9dGMtIIE5V4KES44QgILtRCKwiug8raqMqftp7KVvWeH9tc3xgWXY7YtmBu%2BcnXTLBpRzkshJoe%2FrBG3IgC9OH4vJvOHKQOYkmgfBXmF6JRjHq3DBy2OOhNpbReFg6emDOe2chamHxdo1KtZcmdwsS2oBBoSmGIgczCJveK9BjqkAU893DaMRbLnTAZzNH84UpXG0Y71CjASBaOR5kkUe1ql4oaxETluyHrV0TQRrCuAeulIg2YWDMkyKZ8DFsLuDoYxUFnKVTcddGoLB6hxKresK8a04U1bapqbi5raiFppp2jRmTDdNp3FsB%2BPzb1pj4yygCSoONGBK1tRXxJgkuZBFpYXyu2FB8xTR3fXbenjqkplrk2hh8tlPV5NHaGCPHRwbFyX&X-Amz-Signature=d0eeeb6bc725dfe954023e974e311ea2a149a5b7e4d1358f2ec2bfd67363adfd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
