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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGKENGL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHi9%2BZbWHoHLLVO6OThAN4LCIP9TSfPKiojDabzhauBrAiBUzMky4r0GZSvxyR%2B7BKKJbNHBQ%2Bz%2FgiaG9XwVQ0WRKiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMKCLD5ovs43DlkoxKtwD%2Fe3UVYmd2Vdl0xMwfcYcUGM6A8JGuVf4qx4FvSAzhaSJs7Tik7c43wks%2FhL%2Fhvor%2Fykz21HIaqYx85QSJTXnwST79bNKaPu5Jtb%2BfuUJPzW6SPtsNAWkaQLMCZsdS8gCkbLMG%2FW3uz7%2BXaAI%2FiC6giBEfqO5LZi71wNrsi4fZ8fvOG5ORK2Ed%2FZLoWeVvG%2BZ9LInK3T5sCrTrYJUmDSNKvuBe%2FGxKQp%2BfnWAj263HcMLKB1scbYAh71qH40oLBhPyqMHQRq1BRt49z2e9aemP3nXiOtpTf1gwnPxZQXAftwLE9Melan3SIkp6%2Blf3yGrUnRxTHEMPfY2YVS3SHmvHlmHw1KOdgZSbVyI8ukjNvsGBjriwhehSWMnAJAj%2FJNJ2PV7GxI08LxozpubThC1N1xg1U8DJN5Ux03wTggV9m0enxGF3TxfpxE1GF3EMQeiEQAevaajt9OG4N86dOaSvcwjwTvSWfZQFuLHnzTFbJw1CM3e%2F4%2BgaAzSJhOfOvL57iChDj3perAL8yQBrOuNOVqKzaC6u7j5DsGKz%2FEdykLvbVjTBHogthPaYlGLhSQmev1PSnnFJKgVKgGiIi5vfpAG%2FVTWYp9ow%2F8andOCWzgg%2Fhu5qelTkryaYUQwvvyQvgY6pgEZ%2FMNQCdGQB0nDtPyqi9ot02pamCkty5GTQysYbbe6zG6uE9TG2u7lyRZOhVNR2N2oB%2FUMDaDTFYueH2zccZJAvIWHnCHhG2qDDWjryCbzI4Z7JHCVAMMS07WOMeu6QGXChO5fz2Vmc0B5RL96Csj%2Fh9A%2BIVr2ElVRSAnqeH%2FBjaUqAiqNiBveqfZYESUPHOuhFqxuj7Q7iszZLn8RQaXY2DNY%2FBxx&X-Amz-Signature=fc41addb1c9ad71597f78e9a9c5f14440c526aa6519768f59cedef5ca5925ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGKENGL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHi9%2BZbWHoHLLVO6OThAN4LCIP9TSfPKiojDabzhauBrAiBUzMky4r0GZSvxyR%2B7BKKJbNHBQ%2Bz%2FgiaG9XwVQ0WRKiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMKCLD5ovs43DlkoxKtwD%2Fe3UVYmd2Vdl0xMwfcYcUGM6A8JGuVf4qx4FvSAzhaSJs7Tik7c43wks%2FhL%2Fhvor%2Fykz21HIaqYx85QSJTXnwST79bNKaPu5Jtb%2BfuUJPzW6SPtsNAWkaQLMCZsdS8gCkbLMG%2FW3uz7%2BXaAI%2FiC6giBEfqO5LZi71wNrsi4fZ8fvOG5ORK2Ed%2FZLoWeVvG%2BZ9LInK3T5sCrTrYJUmDSNKvuBe%2FGxKQp%2BfnWAj263HcMLKB1scbYAh71qH40oLBhPyqMHQRq1BRt49z2e9aemP3nXiOtpTf1gwnPxZQXAftwLE9Melan3SIkp6%2Blf3yGrUnRxTHEMPfY2YVS3SHmvHlmHw1KOdgZSbVyI8ukjNvsGBjriwhehSWMnAJAj%2FJNJ2PV7GxI08LxozpubThC1N1xg1U8DJN5Ux03wTggV9m0enxGF3TxfpxE1GF3EMQeiEQAevaajt9OG4N86dOaSvcwjwTvSWfZQFuLHnzTFbJw1CM3e%2F4%2BgaAzSJhOfOvL57iChDj3perAL8yQBrOuNOVqKzaC6u7j5DsGKz%2FEdykLvbVjTBHogthPaYlGLhSQmev1PSnnFJKgVKgGiIi5vfpAG%2FVTWYp9ow%2F8andOCWzgg%2Fhu5qelTkryaYUQwvvyQvgY6pgEZ%2FMNQCdGQB0nDtPyqi9ot02pamCkty5GTQysYbbe6zG6uE9TG2u7lyRZOhVNR2N2oB%2FUMDaDTFYueH2zccZJAvIWHnCHhG2qDDWjryCbzI4Z7JHCVAMMS07WOMeu6QGXChO5fz2Vmc0B5RL96Csj%2Fh9A%2BIVr2ElVRSAnqeH%2FBjaUqAiqNiBveqfZYESUPHOuhFqxuj7Q7iszZLn8RQaXY2DNY%2FBxx&X-Amz-Signature=672112082537fb1f96f2ab8da876bf51b47a0b22ac646a55bd6dcf56c7d9911b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGKENGL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHi9%2BZbWHoHLLVO6OThAN4LCIP9TSfPKiojDabzhauBrAiBUzMky4r0GZSvxyR%2B7BKKJbNHBQ%2Bz%2FgiaG9XwVQ0WRKiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMKCLD5ovs43DlkoxKtwD%2Fe3UVYmd2Vdl0xMwfcYcUGM6A8JGuVf4qx4FvSAzhaSJs7Tik7c43wks%2FhL%2Fhvor%2Fykz21HIaqYx85QSJTXnwST79bNKaPu5Jtb%2BfuUJPzW6SPtsNAWkaQLMCZsdS8gCkbLMG%2FW3uz7%2BXaAI%2FiC6giBEfqO5LZi71wNrsi4fZ8fvOG5ORK2Ed%2FZLoWeVvG%2BZ9LInK3T5sCrTrYJUmDSNKvuBe%2FGxKQp%2BfnWAj263HcMLKB1scbYAh71qH40oLBhPyqMHQRq1BRt49z2e9aemP3nXiOtpTf1gwnPxZQXAftwLE9Melan3SIkp6%2Blf3yGrUnRxTHEMPfY2YVS3SHmvHlmHw1KOdgZSbVyI8ukjNvsGBjriwhehSWMnAJAj%2FJNJ2PV7GxI08LxozpubThC1N1xg1U8DJN5Ux03wTggV9m0enxGF3TxfpxE1GF3EMQeiEQAevaajt9OG4N86dOaSvcwjwTvSWfZQFuLHnzTFbJw1CM3e%2F4%2BgaAzSJhOfOvL57iChDj3perAL8yQBrOuNOVqKzaC6u7j5DsGKz%2FEdykLvbVjTBHogthPaYlGLhSQmev1PSnnFJKgVKgGiIi5vfpAG%2FVTWYp9ow%2F8andOCWzgg%2Fhu5qelTkryaYUQwvvyQvgY6pgEZ%2FMNQCdGQB0nDtPyqi9ot02pamCkty5GTQysYbbe6zG6uE9TG2u7lyRZOhVNR2N2oB%2FUMDaDTFYueH2zccZJAvIWHnCHhG2qDDWjryCbzI4Z7JHCVAMMS07WOMeu6QGXChO5fz2Vmc0B5RL96Csj%2Fh9A%2BIVr2ElVRSAnqeH%2FBjaUqAiqNiBveqfZYESUPHOuhFqxuj7Q7iszZLn8RQaXY2DNY%2FBxx&X-Amz-Signature=8f00f5af5d9f40d769c004ae776d188658142b46e5b7d794818861fd427781af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
