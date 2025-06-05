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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBZEIU4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCtsWJiY%2BuHTEnkY%2BQCiHg9aZppuVcjoGHbhr01hGXC%2BAIhAMrm0EDdMCy1HXCvXr8NM%2Fob49phyWkY4LOAu4GL4pgoKv8DCEIQABoMNjM3NDIzMTgzODA1IgzAIZBk6dyiLOC1WBgq3AMHiGqxjvjtDTkHg0gCR%2F8VkSQzK6VTM1%2BwKZ%2FThVoBHXPKcn0YgE7Yf0cu0urrvEe8drU1bptMyjdfdygXdsGfosvoF9U3Wwt%2FW0LUqhhM4g37h3RSdBvPxnS2l0OOrrqELOKlfrVxtSvNZU0XwX1K%2BYc3kNYDFXC5%2Bu1INe3xJtt0jfFOOdde6uShA4rO8qGWtLN4bD0R80gf8P6fgESfqzGHMzXJHiz1vtYYSH%2FuGg3ahJCAnJg%2B6d7kfqWeiqtAUqpn2opHBaupzxnbgOWdt3C1kTNdSCwO7%2FLZ3S3u1Pj9ux1gv%2FNUfAOzLjElo7YWUxi%2BC9KXI7B5btuu8L1G6uL5cbOqpaoRItqVhEqvd1wOB1hickI9rw7X8WaBzIJAa2IEOWQ1sRD9777pkzQZcAuW1nG4Biqhq%2BKobzmDe3ANylFTYHhGYz3f31GexOuy%2FZIaLZoyIIXLNCsSNXYU%2FGTHngycaGPFUKxFJXAHDNUZkdxp8XphJVdl%2BOhXm1gLFTFeEGMXznPDs%2FTcC1tPgRCyli%2Bz510bF9c27FbMkXGSPTCvRk78aMSw2IUlOHsZ1swrC0cYjXtmlwDIf%2FOrSZDN033LONCqhW5aqnJTacvcnZ3yI7IRAC65sDD3roXCBjqkAUjDwhztHJYFIY2x3s7rizDLBuAnoVIbbkEZXSTNdRcrOjktVus9kghVH15GkhppwpaR0JGWIn7HU0VTs0VzCmGfNBOsXyoHG8W2lbK%2Fvtq4YR6h1UmXd196v9a6HQRipeAK7DosIoO1n4HSoXopzsTNj9yqobUMWlx1ZKFHYURYXhbBqp4yd%2Bwkd%2BRcAPC5nnPTc234h5puWeKCEej%2BTxkNkJ0X&X-Amz-Signature=2591a4a3e3bc48e44bd50e1b8f4372efa0374ca438f529689fb1ff59cb9e8885&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBZEIU4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCtsWJiY%2BuHTEnkY%2BQCiHg9aZppuVcjoGHbhr01hGXC%2BAIhAMrm0EDdMCy1HXCvXr8NM%2Fob49phyWkY4LOAu4GL4pgoKv8DCEIQABoMNjM3NDIzMTgzODA1IgzAIZBk6dyiLOC1WBgq3AMHiGqxjvjtDTkHg0gCR%2F8VkSQzK6VTM1%2BwKZ%2FThVoBHXPKcn0YgE7Yf0cu0urrvEe8drU1bptMyjdfdygXdsGfosvoF9U3Wwt%2FW0LUqhhM4g37h3RSdBvPxnS2l0OOrrqELOKlfrVxtSvNZU0XwX1K%2BYc3kNYDFXC5%2Bu1INe3xJtt0jfFOOdde6uShA4rO8qGWtLN4bD0R80gf8P6fgESfqzGHMzXJHiz1vtYYSH%2FuGg3ahJCAnJg%2B6d7kfqWeiqtAUqpn2opHBaupzxnbgOWdt3C1kTNdSCwO7%2FLZ3S3u1Pj9ux1gv%2FNUfAOzLjElo7YWUxi%2BC9KXI7B5btuu8L1G6uL5cbOqpaoRItqVhEqvd1wOB1hickI9rw7X8WaBzIJAa2IEOWQ1sRD9777pkzQZcAuW1nG4Biqhq%2BKobzmDe3ANylFTYHhGYz3f31GexOuy%2FZIaLZoyIIXLNCsSNXYU%2FGTHngycaGPFUKxFJXAHDNUZkdxp8XphJVdl%2BOhXm1gLFTFeEGMXznPDs%2FTcC1tPgRCyli%2Bz510bF9c27FbMkXGSPTCvRk78aMSw2IUlOHsZ1swrC0cYjXtmlwDIf%2FOrSZDN033LONCqhW5aqnJTacvcnZ3yI7IRAC65sDD3roXCBjqkAUjDwhztHJYFIY2x3s7rizDLBuAnoVIbbkEZXSTNdRcrOjktVus9kghVH15GkhppwpaR0JGWIn7HU0VTs0VzCmGfNBOsXyoHG8W2lbK%2Fvtq4YR6h1UmXd196v9a6HQRipeAK7DosIoO1n4HSoXopzsTNj9yqobUMWlx1ZKFHYURYXhbBqp4yd%2Bwkd%2BRcAPC5nnPTc234h5puWeKCEej%2BTxkNkJ0X&X-Amz-Signature=b091a5c092fe5bd8f033e9c30e047efea367647e01431f6eb5507bbad955b0cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBZEIU4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCtsWJiY%2BuHTEnkY%2BQCiHg9aZppuVcjoGHbhr01hGXC%2BAIhAMrm0EDdMCy1HXCvXr8NM%2Fob49phyWkY4LOAu4GL4pgoKv8DCEIQABoMNjM3NDIzMTgzODA1IgzAIZBk6dyiLOC1WBgq3AMHiGqxjvjtDTkHg0gCR%2F8VkSQzK6VTM1%2BwKZ%2FThVoBHXPKcn0YgE7Yf0cu0urrvEe8drU1bptMyjdfdygXdsGfosvoF9U3Wwt%2FW0LUqhhM4g37h3RSdBvPxnS2l0OOrrqELOKlfrVxtSvNZU0XwX1K%2BYc3kNYDFXC5%2Bu1INe3xJtt0jfFOOdde6uShA4rO8qGWtLN4bD0R80gf8P6fgESfqzGHMzXJHiz1vtYYSH%2FuGg3ahJCAnJg%2B6d7kfqWeiqtAUqpn2opHBaupzxnbgOWdt3C1kTNdSCwO7%2FLZ3S3u1Pj9ux1gv%2FNUfAOzLjElo7YWUxi%2BC9KXI7B5btuu8L1G6uL5cbOqpaoRItqVhEqvd1wOB1hickI9rw7X8WaBzIJAa2IEOWQ1sRD9777pkzQZcAuW1nG4Biqhq%2BKobzmDe3ANylFTYHhGYz3f31GexOuy%2FZIaLZoyIIXLNCsSNXYU%2FGTHngycaGPFUKxFJXAHDNUZkdxp8XphJVdl%2BOhXm1gLFTFeEGMXznPDs%2FTcC1tPgRCyli%2Bz510bF9c27FbMkXGSPTCvRk78aMSw2IUlOHsZ1swrC0cYjXtmlwDIf%2FOrSZDN033LONCqhW5aqnJTacvcnZ3yI7IRAC65sDD3roXCBjqkAUjDwhztHJYFIY2x3s7rizDLBuAnoVIbbkEZXSTNdRcrOjktVus9kghVH15GkhppwpaR0JGWIn7HU0VTs0VzCmGfNBOsXyoHG8W2lbK%2Fvtq4YR6h1UmXd196v9a6HQRipeAK7DosIoO1n4HSoXopzsTNj9yqobUMWlx1ZKFHYURYXhbBqp4yd%2Bwkd%2BRcAPC5nnPTc234h5puWeKCEej%2BTxkNkJ0X&X-Amz-Signature=4217023cf5eae241a186cf8f0f241cab84a8dcebc677bf4303d4cfe4d3a8c51b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
