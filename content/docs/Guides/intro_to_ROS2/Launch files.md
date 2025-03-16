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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRSGL3V%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Q6Gjc9%2FAG5jFtrokjQA9hcFufjmlxoq62nnCbv4y0QIhANgCgpLoYcw5L3LJudTPwBq1FLpqCeCBCWGJEL1O8UmxKv8DCCUQABoMNjM3NDIzMTgzODA1IgwB6JO4OGck73W8kOsq3AN3YrdOVAUivXbNWfeJmfC3T9bJp79efpi%2F9mtVxyOKJxzV0J4b9HLD0ymL3v0OB2S4mya3X6MVBXtOgo9titj5pUbMNioMSbjw8X%2Fn7vCCQ4Awa0BQhJ%2FaB3yP4Md4c6fijv0fwPPcM3%2B07OLqSMo0XUrYZUslss6qaIdmivpbZorHubdP8wJ2RwvI517UGymSMlOVR5f%2B5Zf%2FccMBFilUkV2QgsB7zsyXTtAIuHQCa3E4iTTKtLfLw5RDgBWhFrK4FtjXlGbM5g227BMMvhApgihjUwusT1c4PyN0UGVQRzrFQw%2BdMOTNtfwt9ZKTT3%2FScf9Qw0XsprBSpBSEKeoKhoYyaGW4MZvlVecuf%2Fpuyqht2YExIxGGYAGnSBVMbYXkP94S8GQxm%2Fg8aRToqB9Jz9Sy9Ey5Tf8esHW1cvY6j9d58JUuhlPnsskXmQIK1ZmK6Xu3KlM9bY0k%2Bo33ZmRuK0Nk7cneOhNcup%2BotJU6GZupBr35xv0PZhbC1CeWbj2Er78AwoYWxzYLBV%2Bz7PDsUkAVIdW6JknRlO%2BU5I8e94zSctWHLB4I7i%2FhKK9NnG4D%2F7BvEtW7rvukWga96M9e60d01n1hGKdeuzAwUQcthjtYUtUSeA0uPBOijzDiitm%2BBjqkAfi0seJiEg0BSPdHwMIECA%2B1gdluZrkC5lQQq1jhUwyWF4Ief1G0DFR2cM7zwcSViKRoKAmVG1pHRFsWX8yVby5jgkKVf3HPFrsO8qabYa00o1mzWw9nzylvaJ%2FtEciA%2FvV49TTGQUpqRrfxcAKTwCnTf4i3U4aEHd6wzZ1lHilurMZT8pM%2F%2FqZMdvRfNe25at1B1ZXxvyiz8p%2FnG8pK7nsaA8RV&X-Amz-Signature=5851277945619d51b3e7cccb669ff227c7fb6f8189aeeb54dcdca2cd0bb50776&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRSGL3V%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Q6Gjc9%2FAG5jFtrokjQA9hcFufjmlxoq62nnCbv4y0QIhANgCgpLoYcw5L3LJudTPwBq1FLpqCeCBCWGJEL1O8UmxKv8DCCUQABoMNjM3NDIzMTgzODA1IgwB6JO4OGck73W8kOsq3AN3YrdOVAUivXbNWfeJmfC3T9bJp79efpi%2F9mtVxyOKJxzV0J4b9HLD0ymL3v0OB2S4mya3X6MVBXtOgo9titj5pUbMNioMSbjw8X%2Fn7vCCQ4Awa0BQhJ%2FaB3yP4Md4c6fijv0fwPPcM3%2B07OLqSMo0XUrYZUslss6qaIdmivpbZorHubdP8wJ2RwvI517UGymSMlOVR5f%2B5Zf%2FccMBFilUkV2QgsB7zsyXTtAIuHQCa3E4iTTKtLfLw5RDgBWhFrK4FtjXlGbM5g227BMMvhApgihjUwusT1c4PyN0UGVQRzrFQw%2BdMOTNtfwt9ZKTT3%2FScf9Qw0XsprBSpBSEKeoKhoYyaGW4MZvlVecuf%2Fpuyqht2YExIxGGYAGnSBVMbYXkP94S8GQxm%2Fg8aRToqB9Jz9Sy9Ey5Tf8esHW1cvY6j9d58JUuhlPnsskXmQIK1ZmK6Xu3KlM9bY0k%2Bo33ZmRuK0Nk7cneOhNcup%2BotJU6GZupBr35xv0PZhbC1CeWbj2Er78AwoYWxzYLBV%2Bz7PDsUkAVIdW6JknRlO%2BU5I8e94zSctWHLB4I7i%2FhKK9NnG4D%2F7BvEtW7rvukWga96M9e60d01n1hGKdeuzAwUQcthjtYUtUSeA0uPBOijzDiitm%2BBjqkAfi0seJiEg0BSPdHwMIECA%2B1gdluZrkC5lQQq1jhUwyWF4Ief1G0DFR2cM7zwcSViKRoKAmVG1pHRFsWX8yVby5jgkKVf3HPFrsO8qabYa00o1mzWw9nzylvaJ%2FtEciA%2FvV49TTGQUpqRrfxcAKTwCnTf4i3U4aEHd6wzZ1lHilurMZT8pM%2F%2FqZMdvRfNe25at1B1ZXxvyiz8p%2FnG8pK7nsaA8RV&X-Amz-Signature=9064ce0070a970e0eec54e85b80b14ef5e30e273608dc3104640aaa257e8b069&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRSGL3V%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Q6Gjc9%2FAG5jFtrokjQA9hcFufjmlxoq62nnCbv4y0QIhANgCgpLoYcw5L3LJudTPwBq1FLpqCeCBCWGJEL1O8UmxKv8DCCUQABoMNjM3NDIzMTgzODA1IgwB6JO4OGck73W8kOsq3AN3YrdOVAUivXbNWfeJmfC3T9bJp79efpi%2F9mtVxyOKJxzV0J4b9HLD0ymL3v0OB2S4mya3X6MVBXtOgo9titj5pUbMNioMSbjw8X%2Fn7vCCQ4Awa0BQhJ%2FaB3yP4Md4c6fijv0fwPPcM3%2B07OLqSMo0XUrYZUslss6qaIdmivpbZorHubdP8wJ2RwvI517UGymSMlOVR5f%2B5Zf%2FccMBFilUkV2QgsB7zsyXTtAIuHQCa3E4iTTKtLfLw5RDgBWhFrK4FtjXlGbM5g227BMMvhApgihjUwusT1c4PyN0UGVQRzrFQw%2BdMOTNtfwt9ZKTT3%2FScf9Qw0XsprBSpBSEKeoKhoYyaGW4MZvlVecuf%2Fpuyqht2YExIxGGYAGnSBVMbYXkP94S8GQxm%2Fg8aRToqB9Jz9Sy9Ey5Tf8esHW1cvY6j9d58JUuhlPnsskXmQIK1ZmK6Xu3KlM9bY0k%2Bo33ZmRuK0Nk7cneOhNcup%2BotJU6GZupBr35xv0PZhbC1CeWbj2Er78AwoYWxzYLBV%2Bz7PDsUkAVIdW6JknRlO%2BU5I8e94zSctWHLB4I7i%2FhKK9NnG4D%2F7BvEtW7rvukWga96M9e60d01n1hGKdeuzAwUQcthjtYUtUSeA0uPBOijzDiitm%2BBjqkAfi0seJiEg0BSPdHwMIECA%2B1gdluZrkC5lQQq1jhUwyWF4Ief1G0DFR2cM7zwcSViKRoKAmVG1pHRFsWX8yVby5jgkKVf3HPFrsO8qabYa00o1mzWw9nzylvaJ%2FtEciA%2FvV49TTGQUpqRrfxcAKTwCnTf4i3U4aEHd6wzZ1lHilurMZT8pM%2F%2FqZMdvRfNe25at1B1ZXxvyiz8p%2FnG8pK7nsaA8RV&X-Amz-Signature=3fdbf25c13430d9f17ef066d18f03faa6048e886ba59fe457b2e76d9e3b1fdac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
