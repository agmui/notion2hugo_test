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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KE5SDAI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC03BAPMvzp6PqAlQjC0drT9AygHAYlieXf%2Bbgptsk1NgIhAO27UIcF9tYecBVYaLeWvs3aZZTtq7ZAL6WoMdyK61wWKv8DCGEQABoMNjM3NDIzMTgzODA1Igw4P%2FbGFVJtDDkrhcgq3AOcPqwIg0JuPYeqFk%2F79EaF1OLUJ%2Fus5%2FxF8mRFReaRjQc4Jhl21Q%2FSLKhlRcgYBJ5t%2BAtr9%2F%2F97nTJANyDdvzc2vYLgSnMbu3znEtQsI7diiBWMFNFobIzYPmhY0Jbr8pPwfNh6M4P4o900YMqsk7Z7SYmm%2BubQZxAVi9e2hkjMMcVDauan4G05AtaE854vAJmftI%2BeKT7covKRWDTRrm6MkTkCIm1HuotBUi2Q97NC%2BxUO5CERmIluov590qr2b0v%2FXUsvLSmJ%2B4zDUT%2Bo%2FFGWUvzaW3PkS9%2BFqrzWZpTf3IXbiwwgfmHKWLut17PM2i%2B%2BvkXT9Zw9x0lFfMSvKcjSrTLcsTv4K8eqdvld8SZts9AH3NHQGezeAB0mX%2FpThuz0m7wzglihhniHplNpbuOL7BiFDiVYywCnceGa4Cjhi9LiDcnRqzrgmbl%2FdGk0SrvMTqDnMwpvPHnd8RIM9LicoHQ8YN8805Vg%2F%2BBJvNnzD2f2fJdLL10jXPkTRWR0pqA1uHE3ffHCbcvaLIKu71hv1om2agH1Gy17sZ2xS6%2BEy%2F4IqUAElYrzvzCsLJfbS84FPc7VBQEabkN37KZvmE4PSHtmdeTLW1lWTiZnEn2fcyhWlxVBOUBGFR4ODCosKrDBjqkAcVKUpcBMpUeGnMq%2F6EIkbq3k9UAZgwBLMs3JaPywnfyak3DVyicFyxoEP9%2FL8oKKi2ykQSI5Cffwwehic%2BBoM59Iqu1JsIZZ%2BTxa2SENUQ1lJmstrNZ9latFDcPPBkRB0hQhMqrstmDAk2YZraolPXC25yPD0usSUqQQa2iNOhydaPVzqQNpogqFRTTv6Ll7IoF01dZT6oSmuXhqCEXi3t%2BBxvA&X-Amz-Signature=aa6f3b2b3637fcab54fc653f3539d4956aef9d0df8b5475fad367155141b34a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KE5SDAI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC03BAPMvzp6PqAlQjC0drT9AygHAYlieXf%2Bbgptsk1NgIhAO27UIcF9tYecBVYaLeWvs3aZZTtq7ZAL6WoMdyK61wWKv8DCGEQABoMNjM3NDIzMTgzODA1Igw4P%2FbGFVJtDDkrhcgq3AOcPqwIg0JuPYeqFk%2F79EaF1OLUJ%2Fus5%2FxF8mRFReaRjQc4Jhl21Q%2FSLKhlRcgYBJ5t%2BAtr9%2F%2F97nTJANyDdvzc2vYLgSnMbu3znEtQsI7diiBWMFNFobIzYPmhY0Jbr8pPwfNh6M4P4o900YMqsk7Z7SYmm%2BubQZxAVi9e2hkjMMcVDauan4G05AtaE854vAJmftI%2BeKT7covKRWDTRrm6MkTkCIm1HuotBUi2Q97NC%2BxUO5CERmIluov590qr2b0v%2FXUsvLSmJ%2B4zDUT%2Bo%2FFGWUvzaW3PkS9%2BFqrzWZpTf3IXbiwwgfmHKWLut17PM2i%2B%2BvkXT9Zw9x0lFfMSvKcjSrTLcsTv4K8eqdvld8SZts9AH3NHQGezeAB0mX%2FpThuz0m7wzglihhniHplNpbuOL7BiFDiVYywCnceGa4Cjhi9LiDcnRqzrgmbl%2FdGk0SrvMTqDnMwpvPHnd8RIM9LicoHQ8YN8805Vg%2F%2BBJvNnzD2f2fJdLL10jXPkTRWR0pqA1uHE3ffHCbcvaLIKu71hv1om2agH1Gy17sZ2xS6%2BEy%2F4IqUAElYrzvzCsLJfbS84FPc7VBQEabkN37KZvmE4PSHtmdeTLW1lWTiZnEn2fcyhWlxVBOUBGFR4ODCosKrDBjqkAcVKUpcBMpUeGnMq%2F6EIkbq3k9UAZgwBLMs3JaPywnfyak3DVyicFyxoEP9%2FL8oKKi2ykQSI5Cffwwehic%2BBoM59Iqu1JsIZZ%2BTxa2SENUQ1lJmstrNZ9latFDcPPBkRB0hQhMqrstmDAk2YZraolPXC25yPD0usSUqQQa2iNOhydaPVzqQNpogqFRTTv6Ll7IoF01dZT6oSmuXhqCEXi3t%2BBxvA&X-Amz-Signature=a76c51df8ebdd88a6bce0ba7806c01d9759b4fb547a873ee2108b58b0770ac00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KE5SDAI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC03BAPMvzp6PqAlQjC0drT9AygHAYlieXf%2Bbgptsk1NgIhAO27UIcF9tYecBVYaLeWvs3aZZTtq7ZAL6WoMdyK61wWKv8DCGEQABoMNjM3NDIzMTgzODA1Igw4P%2FbGFVJtDDkrhcgq3AOcPqwIg0JuPYeqFk%2F79EaF1OLUJ%2Fus5%2FxF8mRFReaRjQc4Jhl21Q%2FSLKhlRcgYBJ5t%2BAtr9%2F%2F97nTJANyDdvzc2vYLgSnMbu3znEtQsI7diiBWMFNFobIzYPmhY0Jbr8pPwfNh6M4P4o900YMqsk7Z7SYmm%2BubQZxAVi9e2hkjMMcVDauan4G05AtaE854vAJmftI%2BeKT7covKRWDTRrm6MkTkCIm1HuotBUi2Q97NC%2BxUO5CERmIluov590qr2b0v%2FXUsvLSmJ%2B4zDUT%2Bo%2FFGWUvzaW3PkS9%2BFqrzWZpTf3IXbiwwgfmHKWLut17PM2i%2B%2BvkXT9Zw9x0lFfMSvKcjSrTLcsTv4K8eqdvld8SZts9AH3NHQGezeAB0mX%2FpThuz0m7wzglihhniHplNpbuOL7BiFDiVYywCnceGa4Cjhi9LiDcnRqzrgmbl%2FdGk0SrvMTqDnMwpvPHnd8RIM9LicoHQ8YN8805Vg%2F%2BBJvNnzD2f2fJdLL10jXPkTRWR0pqA1uHE3ffHCbcvaLIKu71hv1om2agH1Gy17sZ2xS6%2BEy%2F4IqUAElYrzvzCsLJfbS84FPc7VBQEabkN37KZvmE4PSHtmdeTLW1lWTiZnEn2fcyhWlxVBOUBGFR4ODCosKrDBjqkAcVKUpcBMpUeGnMq%2F6EIkbq3k9UAZgwBLMs3JaPywnfyak3DVyicFyxoEP9%2FL8oKKi2ykQSI5Cffwwehic%2BBoM59Iqu1JsIZZ%2BTxa2SENUQ1lJmstrNZ9latFDcPPBkRB0hQhMqrstmDAk2YZraolPXC25yPD0usSUqQQa2iNOhydaPVzqQNpogqFRTTv6Ll7IoF01dZT6oSmuXhqCEXi3t%2BBxvA&X-Amz-Signature=ae05a67d0ae408ff8ca46797781e32dc81dc133cd7ca37c799d2bb2f73084ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
