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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNESTG4Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFcoxl6%2B9dCPQ6amYoGRZCa4TfSS5HPZjxBlHHfB8EwIhAI9OrCIrvAR3gJ1y54WKuMf5pn%2BMMK73ps5%2FIMDpBYd1KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2OBIdCof0u2ArZXsq3ANz3ymayA%2BrmmeiBjRbXD3HbOfssPWt0BeAM%2BiNOrwLkRCpcxxplI4ro%2BMaRZgO3irV4DT18wUFkxaWmUT0My0KHrPzdTu45VXgEEJXHhX6BQJ%2BzsMTek%2BlERI8aFXsv3Z95PYKpuUxj8z56V5mPC6f3iUq2zmfvRPHXJCac0YWlzEe%2FV1XaQGDQXfxF10vcLLLw7YVnpck7n3bIw5HCifUPELvZD9cH4AM2wqE2cCunDn0i0cg%2BEW4okfqfF3Ci50LbDIuYCDkWvNGiDoPDbZfGM%2BMPXUh34sV9D6VA%2BfqpXvVSdkErBPPJmuQcMpmhEaYnaEPZH9NftoXlvgiAP85%2BFM%2Bv0q1VKoxULp9kfXDrJCn1UBQ8Z9yiTiW0sIAUX4NUgT%2BBaHOOe52O9koLjT30vL99FPpwW3rG8RuWmcNrccZkxWHwgqDHx8aqV74yxfPzQhW1HthiDubaZVDEZp%2FDWr9dRshB%2BU3JBGm%2BPOAT5MKu5LiopC6OyCg8YlBFB10X8MJCB%2BmZg5rUFeKRbotzOexHhFXaDSqTReS7Jdn5wOTkO%2BCZYgjfeXV4NWNht1G1PqejjC%2B5%2FJKhn1sbGrMmEXIYKLi%2B1cDbjSzKXClmcdyiRhtxNpSBq8WJzCux%2BW9BjqkAeZSsu5SKHrbkbKQDGv8COxpNzabZP2FosFTnOT4wXcMivakxeEFDguTPTc3H%2BocUTp%2FVa9F1EajM8U%2B23G1mgCbRHp0l%2FEvP2JH%2FmB9YvZcAGzXvDFO%2B5ZL9%2FmWRH414e0UFPJWrD6OcFnFJ%2F%2FbOlLFRYipdU3cfnSNdesq29Jnrk0areV52WQBlpAkQmgo6SMzbZToiMq7SZQO%2FQZx8xEzlXGF&X-Amz-Signature=bf57bd1a6ceb1de849124b7f0fc7cc644413215efaf3cc3a850c39c28c1b0bab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNESTG4Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFcoxl6%2B9dCPQ6amYoGRZCa4TfSS5HPZjxBlHHfB8EwIhAI9OrCIrvAR3gJ1y54WKuMf5pn%2BMMK73ps5%2FIMDpBYd1KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2OBIdCof0u2ArZXsq3ANz3ymayA%2BrmmeiBjRbXD3HbOfssPWt0BeAM%2BiNOrwLkRCpcxxplI4ro%2BMaRZgO3irV4DT18wUFkxaWmUT0My0KHrPzdTu45VXgEEJXHhX6BQJ%2BzsMTek%2BlERI8aFXsv3Z95PYKpuUxj8z56V5mPC6f3iUq2zmfvRPHXJCac0YWlzEe%2FV1XaQGDQXfxF10vcLLLw7YVnpck7n3bIw5HCifUPELvZD9cH4AM2wqE2cCunDn0i0cg%2BEW4okfqfF3Ci50LbDIuYCDkWvNGiDoPDbZfGM%2BMPXUh34sV9D6VA%2BfqpXvVSdkErBPPJmuQcMpmhEaYnaEPZH9NftoXlvgiAP85%2BFM%2Bv0q1VKoxULp9kfXDrJCn1UBQ8Z9yiTiW0sIAUX4NUgT%2BBaHOOe52O9koLjT30vL99FPpwW3rG8RuWmcNrccZkxWHwgqDHx8aqV74yxfPzQhW1HthiDubaZVDEZp%2FDWr9dRshB%2BU3JBGm%2BPOAT5MKu5LiopC6OyCg8YlBFB10X8MJCB%2BmZg5rUFeKRbotzOexHhFXaDSqTReS7Jdn5wOTkO%2BCZYgjfeXV4NWNht1G1PqejjC%2B5%2FJKhn1sbGrMmEXIYKLi%2B1cDbjSzKXClmcdyiRhtxNpSBq8WJzCux%2BW9BjqkAeZSsu5SKHrbkbKQDGv8COxpNzabZP2FosFTnOT4wXcMivakxeEFDguTPTc3H%2BocUTp%2FVa9F1EajM8U%2B23G1mgCbRHp0l%2FEvP2JH%2FmB9YvZcAGzXvDFO%2B5ZL9%2FmWRH414e0UFPJWrD6OcFnFJ%2F%2FbOlLFRYipdU3cfnSNdesq29Jnrk0areV52WQBlpAkQmgo6SMzbZToiMq7SZQO%2FQZx8xEzlXGF&X-Amz-Signature=7fea3d5e113f016f23e881c4356fb9428ebe27ed0936b817a961835e5517ad8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNESTG4Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFcoxl6%2B9dCPQ6amYoGRZCa4TfSS5HPZjxBlHHfB8EwIhAI9OrCIrvAR3gJ1y54WKuMf5pn%2BMMK73ps5%2FIMDpBYd1KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2OBIdCof0u2ArZXsq3ANz3ymayA%2BrmmeiBjRbXD3HbOfssPWt0BeAM%2BiNOrwLkRCpcxxplI4ro%2BMaRZgO3irV4DT18wUFkxaWmUT0My0KHrPzdTu45VXgEEJXHhX6BQJ%2BzsMTek%2BlERI8aFXsv3Z95PYKpuUxj8z56V5mPC6f3iUq2zmfvRPHXJCac0YWlzEe%2FV1XaQGDQXfxF10vcLLLw7YVnpck7n3bIw5HCifUPELvZD9cH4AM2wqE2cCunDn0i0cg%2BEW4okfqfF3Ci50LbDIuYCDkWvNGiDoPDbZfGM%2BMPXUh34sV9D6VA%2BfqpXvVSdkErBPPJmuQcMpmhEaYnaEPZH9NftoXlvgiAP85%2BFM%2Bv0q1VKoxULp9kfXDrJCn1UBQ8Z9yiTiW0sIAUX4NUgT%2BBaHOOe52O9koLjT30vL99FPpwW3rG8RuWmcNrccZkxWHwgqDHx8aqV74yxfPzQhW1HthiDubaZVDEZp%2FDWr9dRshB%2BU3JBGm%2BPOAT5MKu5LiopC6OyCg8YlBFB10X8MJCB%2BmZg5rUFeKRbotzOexHhFXaDSqTReS7Jdn5wOTkO%2BCZYgjfeXV4NWNht1G1PqejjC%2B5%2FJKhn1sbGrMmEXIYKLi%2B1cDbjSzKXClmcdyiRhtxNpSBq8WJzCux%2BW9BjqkAeZSsu5SKHrbkbKQDGv8COxpNzabZP2FosFTnOT4wXcMivakxeEFDguTPTc3H%2BocUTp%2FVa9F1EajM8U%2B23G1mgCbRHp0l%2FEvP2JH%2FmB9YvZcAGzXvDFO%2B5ZL9%2FmWRH414e0UFPJWrD6OcFnFJ%2F%2FbOlLFRYipdU3cfnSNdesq29Jnrk0areV52WQBlpAkQmgo6SMzbZToiMq7SZQO%2FQZx8xEzlXGF&X-Amz-Signature=f81e1c0b44079d2f41bfc48e4d99aa966fb55a7c401462ad36ac14f4afe6b65a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
