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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QI5SMFY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCW9yVcuF3oXWLNUo7WWvSD3aeIzK5iX1GtGMIWOpcGuAIgcW6JNni2xOqldm4rnRxWfobsZX%2FtA2wLgHA0mu9CyyIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBMv6IrKlONSKNBK%2ByrcAyReQjpxwpWn8OTeJdvJLT2bhdgIwRexPb%2FZs9jpb58PBGEUwPBxEYK8XmZoxkRVKlcC%2Fuy8BjHWVjeR48ICIUyJoa4m3rX2y41Nv46wfaTF5yafHyEOgGAsXRkol3paa74hWFFyXPyWBGxTD1WOQyTJS9xG0i4JgjEfslC%2BXTrh0bJyQJ8frzMxrwqc8MbGMBagN42h4ylXVRzGKicFQB0UnFQRshVxwygcVKWg7UOP2KLCA%2FXMFUZyMkbIMMjZSKCkw7tCDN7NN66GMgTvqaQz%2BacfM6pfuJPFYj4kaTa0FHiFBaAScpmxNT203%2BhH8MOGKlpxPYl%2FUxICstuSM1ioLyzxUr2VW9AO7LWdb1NtztlRyzhVtoehy80X5rX9i0TW7a0dvC%2BodKWC7G88LQdzGdTouwkh1OJEN7B9J9YX32sQg1asdkzX29ZrM6Taj4rX07MuyJKIeZWsepbyzSQ7FMpiymFJMcGLeDKy2mY4c6ZuiRqV9uDvscqtp74v1RM7ghjvtVqJexbym%2BUVketbYjTAoAa%2BShpb8N8NnfDgfHmBETMBbX2wkeBF95flQerkxej7FN6kli8fUfnVKtaoqY2KWp9auMMrZ1PCcFbS%2Bq9DrZSbANckwu1aMIazsb4GOqUBakkmcerRhr78WcnCF5gbE9hZ7xMXecHBiRWHFGpBJ0i8zphBULA0nhiatpoQ0E4Pt7vyRBgneuG4pMNipQx6kYXUl4CqLx1RGm2CY1QOiTVunjagwxr7Jcuqt8vwDqjH2OYbeEtoHUi0nXnHcqhjTj0vmhefZfKbp3GGBfZfAP370V0ZlXT7AS9n03ntrgn%2BoKcGUjahZVl26E6fWLN9R04DC01G&X-Amz-Signature=86fe762f3bb03253c53dbdb0c854e73301d9aa66a037a64427433a73be4eaf3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QI5SMFY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCW9yVcuF3oXWLNUo7WWvSD3aeIzK5iX1GtGMIWOpcGuAIgcW6JNni2xOqldm4rnRxWfobsZX%2FtA2wLgHA0mu9CyyIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBMv6IrKlONSKNBK%2ByrcAyReQjpxwpWn8OTeJdvJLT2bhdgIwRexPb%2FZs9jpb58PBGEUwPBxEYK8XmZoxkRVKlcC%2Fuy8BjHWVjeR48ICIUyJoa4m3rX2y41Nv46wfaTF5yafHyEOgGAsXRkol3paa74hWFFyXPyWBGxTD1WOQyTJS9xG0i4JgjEfslC%2BXTrh0bJyQJ8frzMxrwqc8MbGMBagN42h4ylXVRzGKicFQB0UnFQRshVxwygcVKWg7UOP2KLCA%2FXMFUZyMkbIMMjZSKCkw7tCDN7NN66GMgTvqaQz%2BacfM6pfuJPFYj4kaTa0FHiFBaAScpmxNT203%2BhH8MOGKlpxPYl%2FUxICstuSM1ioLyzxUr2VW9AO7LWdb1NtztlRyzhVtoehy80X5rX9i0TW7a0dvC%2BodKWC7G88LQdzGdTouwkh1OJEN7B9J9YX32sQg1asdkzX29ZrM6Taj4rX07MuyJKIeZWsepbyzSQ7FMpiymFJMcGLeDKy2mY4c6ZuiRqV9uDvscqtp74v1RM7ghjvtVqJexbym%2BUVketbYjTAoAa%2BShpb8N8NnfDgfHmBETMBbX2wkeBF95flQerkxej7FN6kli8fUfnVKtaoqY2KWp9auMMrZ1PCcFbS%2Bq9DrZSbANckwu1aMIazsb4GOqUBakkmcerRhr78WcnCF5gbE9hZ7xMXecHBiRWHFGpBJ0i8zphBULA0nhiatpoQ0E4Pt7vyRBgneuG4pMNipQx6kYXUl4CqLx1RGm2CY1QOiTVunjagwxr7Jcuqt8vwDqjH2OYbeEtoHUi0nXnHcqhjTj0vmhefZfKbp3GGBfZfAP370V0ZlXT7AS9n03ntrgn%2BoKcGUjahZVl26E6fWLN9R04DC01G&X-Amz-Signature=3a9af21049d35144ae5936b35ff5231d86f99af60b2d8efa680332d22dfdc288&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QI5SMFY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCW9yVcuF3oXWLNUo7WWvSD3aeIzK5iX1GtGMIWOpcGuAIgcW6JNni2xOqldm4rnRxWfobsZX%2FtA2wLgHA0mu9CyyIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBMv6IrKlONSKNBK%2ByrcAyReQjpxwpWn8OTeJdvJLT2bhdgIwRexPb%2FZs9jpb58PBGEUwPBxEYK8XmZoxkRVKlcC%2Fuy8BjHWVjeR48ICIUyJoa4m3rX2y41Nv46wfaTF5yafHyEOgGAsXRkol3paa74hWFFyXPyWBGxTD1WOQyTJS9xG0i4JgjEfslC%2BXTrh0bJyQJ8frzMxrwqc8MbGMBagN42h4ylXVRzGKicFQB0UnFQRshVxwygcVKWg7UOP2KLCA%2FXMFUZyMkbIMMjZSKCkw7tCDN7NN66GMgTvqaQz%2BacfM6pfuJPFYj4kaTa0FHiFBaAScpmxNT203%2BhH8MOGKlpxPYl%2FUxICstuSM1ioLyzxUr2VW9AO7LWdb1NtztlRyzhVtoehy80X5rX9i0TW7a0dvC%2BodKWC7G88LQdzGdTouwkh1OJEN7B9J9YX32sQg1asdkzX29ZrM6Taj4rX07MuyJKIeZWsepbyzSQ7FMpiymFJMcGLeDKy2mY4c6ZuiRqV9uDvscqtp74v1RM7ghjvtVqJexbym%2BUVketbYjTAoAa%2BShpb8N8NnfDgfHmBETMBbX2wkeBF95flQerkxej7FN6kli8fUfnVKtaoqY2KWp9auMMrZ1PCcFbS%2Bq9DrZSbANckwu1aMIazsb4GOqUBakkmcerRhr78WcnCF5gbE9hZ7xMXecHBiRWHFGpBJ0i8zphBULA0nhiatpoQ0E4Pt7vyRBgneuG4pMNipQx6kYXUl4CqLx1RGm2CY1QOiTVunjagwxr7Jcuqt8vwDqjH2OYbeEtoHUi0nXnHcqhjTj0vmhefZfKbp3GGBfZfAP370V0ZlXT7AS9n03ntrgn%2BoKcGUjahZVl26E6fWLN9R04DC01G&X-Amz-Signature=ec62da0cbf01b79159a624b0832d669ddeb3f76a3bc59b02ac6bad301f1e2e07&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
