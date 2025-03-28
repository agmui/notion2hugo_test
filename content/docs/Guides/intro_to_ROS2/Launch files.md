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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SCEFRX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATNnTWOGECNRybS1r09eHq7zc3%2FNBXqDseB%2BD%2B1neT2AiA2jOUMogsPbexxcfTcPHTorERXGGJGyugeQOZVCbX3zir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMRPZp4aRa3BWJw6epKtwDFsCAuOQlyOI0CPSXTObd944DULTbJXCTPZR6%2BTW4v%2F3Y8QJHC4kpuPnR6p%2FE%2BnmTpX%2BeFGQC9dF7VsFkflAApw2TLjxuEsXz6moHZjovHAHofqsrU9A3VlMPzsoGXHtJZIvequmXPRll6EcMB6oLaGj7iLtWc50i4oXWdCDcOiwuAISolNYI%2FUPxyRPmHwZHJGgFU2eF0wEffY2UWeJnC9E1QNiEWoY1A%2BoSQQndImUuEYM5TtIK24LIPqD7PoOCKcq48ugbMzFyRVA6Zaph%2F6AxwuBDllQxCNCfA4A%2BWXkd4zj3F90Dzy%2BA2%2Fm1Zb%2FBS90NQv2AmQuZuGFOPfRIOmRujKHBQOHOHb%2BnlCRD2y%2B%2FW1%2F5C1Drv2zwt4%2FwfVx5b3FN6e6Lo0dy5n93vpsWZxqbCD3HU4FgH1eITDAozlbOewbSBgUIpfy0e1SFY8OZCthM4tj0ftmeCSMVrkwgo89yhalQrzK5QRJA2mDBA5qv1aqkCiJbVnACKRywO1a8zx9Lspy5VoDgb%2FlJe%2BeJY6Sd%2FJcd9gH2loyWcfPtBGa9dIUAJulmZdfs7DiQNwp6xK44Q3lBFnpNvoPHF6X2JDzevSGGxVqrSAePG5VapGYMHvmoQceANon8o0gwv%2FaXvwY6pgHzbVOtdMtdhUkZAPu9QRD5XtHTbCOkTSjYm7s1sHuhNR7rUO30yoIFRVxqtlm2AQ9KuyOq4mXt1bBXpLcT8JSG1kAjZRVhXUu8oJZ0dA54sBzWU2%2BIxuNSNtziU7fPWq4M2xhmffovXcR0jLFu10v9%2Fob8I3Y5ODCejprmFQLDbxS6VQM67jbDEVLckKv37gBDLFoUTwk5BFATlO%2FR8Cq%2FtrvQ4M7o&X-Amz-Signature=d66f71bf3d24c7b6b4e37a154f5f3dacc32c2fe5f3bd06065c95d8bacc8fbd4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SCEFRX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATNnTWOGECNRybS1r09eHq7zc3%2FNBXqDseB%2BD%2B1neT2AiA2jOUMogsPbexxcfTcPHTorERXGGJGyugeQOZVCbX3zir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMRPZp4aRa3BWJw6epKtwDFsCAuOQlyOI0CPSXTObd944DULTbJXCTPZR6%2BTW4v%2F3Y8QJHC4kpuPnR6p%2FE%2BnmTpX%2BeFGQC9dF7VsFkflAApw2TLjxuEsXz6moHZjovHAHofqsrU9A3VlMPzsoGXHtJZIvequmXPRll6EcMB6oLaGj7iLtWc50i4oXWdCDcOiwuAISolNYI%2FUPxyRPmHwZHJGgFU2eF0wEffY2UWeJnC9E1QNiEWoY1A%2BoSQQndImUuEYM5TtIK24LIPqD7PoOCKcq48ugbMzFyRVA6Zaph%2F6AxwuBDllQxCNCfA4A%2BWXkd4zj3F90Dzy%2BA2%2Fm1Zb%2FBS90NQv2AmQuZuGFOPfRIOmRujKHBQOHOHb%2BnlCRD2y%2B%2FW1%2F5C1Drv2zwt4%2FwfVx5b3FN6e6Lo0dy5n93vpsWZxqbCD3HU4FgH1eITDAozlbOewbSBgUIpfy0e1SFY8OZCthM4tj0ftmeCSMVrkwgo89yhalQrzK5QRJA2mDBA5qv1aqkCiJbVnACKRywO1a8zx9Lspy5VoDgb%2FlJe%2BeJY6Sd%2FJcd9gH2loyWcfPtBGa9dIUAJulmZdfs7DiQNwp6xK44Q3lBFnpNvoPHF6X2JDzevSGGxVqrSAePG5VapGYMHvmoQceANon8o0gwv%2FaXvwY6pgHzbVOtdMtdhUkZAPu9QRD5XtHTbCOkTSjYm7s1sHuhNR7rUO30yoIFRVxqtlm2AQ9KuyOq4mXt1bBXpLcT8JSG1kAjZRVhXUu8oJZ0dA54sBzWU2%2BIxuNSNtziU7fPWq4M2xhmffovXcR0jLFu10v9%2Fob8I3Y5ODCejprmFQLDbxS6VQM67jbDEVLckKv37gBDLFoUTwk5BFATlO%2FR8Cq%2FtrvQ4M7o&X-Amz-Signature=2e5d42ba4c3d7f00f75c256e4c192c775e7f09da83ded94b1c93d5d497690bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SCEFRX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATNnTWOGECNRybS1r09eHq7zc3%2FNBXqDseB%2BD%2B1neT2AiA2jOUMogsPbexxcfTcPHTorERXGGJGyugeQOZVCbX3zir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMRPZp4aRa3BWJw6epKtwDFsCAuOQlyOI0CPSXTObd944DULTbJXCTPZR6%2BTW4v%2F3Y8QJHC4kpuPnR6p%2FE%2BnmTpX%2BeFGQC9dF7VsFkflAApw2TLjxuEsXz6moHZjovHAHofqsrU9A3VlMPzsoGXHtJZIvequmXPRll6EcMB6oLaGj7iLtWc50i4oXWdCDcOiwuAISolNYI%2FUPxyRPmHwZHJGgFU2eF0wEffY2UWeJnC9E1QNiEWoY1A%2BoSQQndImUuEYM5TtIK24LIPqD7PoOCKcq48ugbMzFyRVA6Zaph%2F6AxwuBDllQxCNCfA4A%2BWXkd4zj3F90Dzy%2BA2%2Fm1Zb%2FBS90NQv2AmQuZuGFOPfRIOmRujKHBQOHOHb%2BnlCRD2y%2B%2FW1%2F5C1Drv2zwt4%2FwfVx5b3FN6e6Lo0dy5n93vpsWZxqbCD3HU4FgH1eITDAozlbOewbSBgUIpfy0e1SFY8OZCthM4tj0ftmeCSMVrkwgo89yhalQrzK5QRJA2mDBA5qv1aqkCiJbVnACKRywO1a8zx9Lspy5VoDgb%2FlJe%2BeJY6Sd%2FJcd9gH2loyWcfPtBGa9dIUAJulmZdfs7DiQNwp6xK44Q3lBFnpNvoPHF6X2JDzevSGGxVqrSAePG5VapGYMHvmoQceANon8o0gwv%2FaXvwY6pgHzbVOtdMtdhUkZAPu9QRD5XtHTbCOkTSjYm7s1sHuhNR7rUO30yoIFRVxqtlm2AQ9KuyOq4mXt1bBXpLcT8JSG1kAjZRVhXUu8oJZ0dA54sBzWU2%2BIxuNSNtziU7fPWq4M2xhmffovXcR0jLFu10v9%2Fob8I3Y5ODCejprmFQLDbxS6VQM67jbDEVLckKv37gBDLFoUTwk5BFATlO%2FR8Cq%2FtrvQ4M7o&X-Amz-Signature=71e4a90394b933f139bbd92be0a6f0deacabb6d049e05b697683312acf8f536f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
