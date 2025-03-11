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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIFR35RH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDx%2BkneOEHj271LfH%2FYRCs%2F4AOShG2FNDty6Mwn%2BFq0hwIhANFUSoOyfThccpaxP47PIuZGQ9qsmhxAWOVWSHkVRI0qKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf2skb0zNQm1PqPPMq3ANTuhutptekl9hknNfnJtx%2BCY3VeBnEqWUi4OdTX43ZyiMSwNkuNB0izET3c3CRTGPw9ckwZG0PTKK4sJRTINQGYFIWB4lmjdyqYL4Cpg1f4SaixkXRQh1uN9uR37jPZDW4jXo5g3MqMqYgV8mTVXMQmmf9pIk4IM0QLYAXcis8juA79JNq2bJWNvB9HujD2gItPvuCkJ%2FoWixh7pVmgHnZfM48p7fXbgK7zvdwGiF9MkofLjzZE93f%2FjBULfSDpSf5JnuKkoDo0j7etI4NTlA9twkdMHwRdoBn7L5nfirptdYqC2Us%2F9B6mut8rEUNLN2kQO4Lfvd3BA8EuqDCKojhw5c8Ac8LDUPmMl%2FfkzvVGbzkSkSx8aQPDpO%2BFrAL3H83s%2BsNBQ0%2FeEyrQswk7A2quNuUlgRrqlzZxQfIlM%2Ftj2XvY5fy0dJ6%2FSKLhsiKkY7VzpBXjK5iEffUATKhKLujJ%2FCtNGoUBjXH3g96lKOgcMYrc%2FALY2sGH6uxP4l5r9jFqZtfITKxZDJFzoUtIwCanBzcNSGCI4woTf9e3dlTnJrRVMuGJ%2FDUqxkQF%2F%2Bv6MgcgSAwkhIranI7iEEU2%2BcUGyf6P3U9vsV3wBrMO1p59DHARZRKPwcLl1JwnTCImMC%2BBjqkAZRHNx9tj8zMJ5TnwtuY7OjDSCE%2BJ1qmUKYf6BzVpp2pAyY7XYVGWN3BDMjGux1brEMfqJ9yk7yuZy%2BybWnMjfwCP%2FoblCc%2BWp7aFxyKwI%2FhuHaLIIMuhHQLy0oNuoEBprUn4pmsIcH%2F%2BeFPlF72PSeeLz%2BKmXI%2FAP81yHUVS56cVv1MITxt5tI5cXYjXQcDYiURvprdbhbWrKzVy9N2JXhz%2BGx4&X-Amz-Signature=9dcce2aedfab30744e4034adfa0908b2f6fa5f11d3032db24e3d24ee5534a9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIFR35RH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDx%2BkneOEHj271LfH%2FYRCs%2F4AOShG2FNDty6Mwn%2BFq0hwIhANFUSoOyfThccpaxP47PIuZGQ9qsmhxAWOVWSHkVRI0qKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf2skb0zNQm1PqPPMq3ANTuhutptekl9hknNfnJtx%2BCY3VeBnEqWUi4OdTX43ZyiMSwNkuNB0izET3c3CRTGPw9ckwZG0PTKK4sJRTINQGYFIWB4lmjdyqYL4Cpg1f4SaixkXRQh1uN9uR37jPZDW4jXo5g3MqMqYgV8mTVXMQmmf9pIk4IM0QLYAXcis8juA79JNq2bJWNvB9HujD2gItPvuCkJ%2FoWixh7pVmgHnZfM48p7fXbgK7zvdwGiF9MkofLjzZE93f%2FjBULfSDpSf5JnuKkoDo0j7etI4NTlA9twkdMHwRdoBn7L5nfirptdYqC2Us%2F9B6mut8rEUNLN2kQO4Lfvd3BA8EuqDCKojhw5c8Ac8LDUPmMl%2FfkzvVGbzkSkSx8aQPDpO%2BFrAL3H83s%2BsNBQ0%2FeEyrQswk7A2quNuUlgRrqlzZxQfIlM%2Ftj2XvY5fy0dJ6%2FSKLhsiKkY7VzpBXjK5iEffUATKhKLujJ%2FCtNGoUBjXH3g96lKOgcMYrc%2FALY2sGH6uxP4l5r9jFqZtfITKxZDJFzoUtIwCanBzcNSGCI4woTf9e3dlTnJrRVMuGJ%2FDUqxkQF%2F%2Bv6MgcgSAwkhIranI7iEEU2%2BcUGyf6P3U9vsV3wBrMO1p59DHARZRKPwcLl1JwnTCImMC%2BBjqkAZRHNx9tj8zMJ5TnwtuY7OjDSCE%2BJ1qmUKYf6BzVpp2pAyY7XYVGWN3BDMjGux1brEMfqJ9yk7yuZy%2BybWnMjfwCP%2FoblCc%2BWp7aFxyKwI%2FhuHaLIIMuhHQLy0oNuoEBprUn4pmsIcH%2F%2BeFPlF72PSeeLz%2BKmXI%2FAP81yHUVS56cVv1MITxt5tI5cXYjXQcDYiURvprdbhbWrKzVy9N2JXhz%2BGx4&X-Amz-Signature=e73878d2db3fb604fef9f75a12e8f6d2f8ee8eda1fa4cfc7e6e6fe7621df942f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIFR35RH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDx%2BkneOEHj271LfH%2FYRCs%2F4AOShG2FNDty6Mwn%2BFq0hwIhANFUSoOyfThccpaxP47PIuZGQ9qsmhxAWOVWSHkVRI0qKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf2skb0zNQm1PqPPMq3ANTuhutptekl9hknNfnJtx%2BCY3VeBnEqWUi4OdTX43ZyiMSwNkuNB0izET3c3CRTGPw9ckwZG0PTKK4sJRTINQGYFIWB4lmjdyqYL4Cpg1f4SaixkXRQh1uN9uR37jPZDW4jXo5g3MqMqYgV8mTVXMQmmf9pIk4IM0QLYAXcis8juA79JNq2bJWNvB9HujD2gItPvuCkJ%2FoWixh7pVmgHnZfM48p7fXbgK7zvdwGiF9MkofLjzZE93f%2FjBULfSDpSf5JnuKkoDo0j7etI4NTlA9twkdMHwRdoBn7L5nfirptdYqC2Us%2F9B6mut8rEUNLN2kQO4Lfvd3BA8EuqDCKojhw5c8Ac8LDUPmMl%2FfkzvVGbzkSkSx8aQPDpO%2BFrAL3H83s%2BsNBQ0%2FeEyrQswk7A2quNuUlgRrqlzZxQfIlM%2Ftj2XvY5fy0dJ6%2FSKLhsiKkY7VzpBXjK5iEffUATKhKLujJ%2FCtNGoUBjXH3g96lKOgcMYrc%2FALY2sGH6uxP4l5r9jFqZtfITKxZDJFzoUtIwCanBzcNSGCI4woTf9e3dlTnJrRVMuGJ%2FDUqxkQF%2F%2Bv6MgcgSAwkhIranI7iEEU2%2BcUGyf6P3U9vsV3wBrMO1p59DHARZRKPwcLl1JwnTCImMC%2BBjqkAZRHNx9tj8zMJ5TnwtuY7OjDSCE%2BJ1qmUKYf6BzVpp2pAyY7XYVGWN3BDMjGux1brEMfqJ9yk7yuZy%2BybWnMjfwCP%2FoblCc%2BWp7aFxyKwI%2FhuHaLIIMuhHQLy0oNuoEBprUn4pmsIcH%2F%2BeFPlF72PSeeLz%2BKmXI%2FAP81yHUVS56cVv1MITxt5tI5cXYjXQcDYiURvprdbhbWrKzVy9N2JXhz%2BGx4&X-Amz-Signature=0ce98174e6652fdc8cdf6fb2e5e6bec5ef65a5f674e137c1a4b21b42126586ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
