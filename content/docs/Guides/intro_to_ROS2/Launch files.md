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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5UH3XS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEbEZXENLmfw9R02cO6A7XnoMY7QDHLtwbmYe%2F4tNEwGAiA9y875bdigzEYjdO7uE14QJgqPVESUtlXokY8bcQnI5ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2BhcAweFcc2gb96vLKtwDhgHDCiM1Akp0NT%2FgbhbGUx8rcvtRVQXmONRmVaed5QrdpemGDt8nlYLXBsH19o9jekzh3EV%2B69%2F7RVEOrugxwhwLtk%2FwfDa00ToNCjjI6b6pvcC74sYDspgQxN%2FbH4rUNjUQse2MsKLA78sOmXnEijAHZQwO7iZoHgeIpLN2cUKG16tGuNVT9wjuh%2BjwbLwEbKNFCtsZelxcJHDzo8vgKVx7Mm8PFU3ft2NFpTWKqiJA5Ny9gu3PRJ9rP%2Bsd7uoLi3XogcAphsYlpWhUMg0KgfPsZquF%2F259UI4V3d0jo5BIJ8x%2B3jJfVfgfSWuabhA2mMSqLHke3BN8jBYyXXKr4%2BRxbcUGCNVhDxlqPAmJS74%2FbpUlIGzFVkJOZt6gTyONjti0zQXc7pnhrPV7W6hwVsKcbOcxo7axUoA%2BQEINgdvMawO63tz8PnElzxRkbDmdy9P%2BaKdWXMxRSwiuM0Muq80t7nclLKQHtzbaSzbP7ywVCmu5yxkMmjm9Oza2lHpXewGcFyTtTdnXiv24QDiEAoGhpCSdOYmNO1FVJ1r4tVnUBnrJaymqr1ZKbkh6eGSPmgyRCaiKJVeabmJdLUjlGEbkmbppOD1c0b6viDSKL4OLT00IPum52ewqzPswj9KAvgY6pgG%2BS0REOjcNyKVwTqOQXmAvX5PUgzZiPk2LSN8znsONpf8rEwtgLqjZsQdRL8zjIG6ejuUnHvB5kg53kN1zNirb2qZLxG481Y%2FDAUCsmfWb0U3ocUzNhKfwqd%2BerRNfDNqB6fOh%2Bp92dyQxieOrfsr7R4vOvgtER%2Bz9XxzlWZBX1%2FZQ70uxIleCxTSvKpMQGyoTeGqr9tYnoxjNojWMChH8ITVesLV2&X-Amz-Signature=fd0665416523bbc066e9b8c78e02e439cffc7f4b921248afc782735297e412e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5UH3XS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEbEZXENLmfw9R02cO6A7XnoMY7QDHLtwbmYe%2F4tNEwGAiA9y875bdigzEYjdO7uE14QJgqPVESUtlXokY8bcQnI5ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2BhcAweFcc2gb96vLKtwDhgHDCiM1Akp0NT%2FgbhbGUx8rcvtRVQXmONRmVaed5QrdpemGDt8nlYLXBsH19o9jekzh3EV%2B69%2F7RVEOrugxwhwLtk%2FwfDa00ToNCjjI6b6pvcC74sYDspgQxN%2FbH4rUNjUQse2MsKLA78sOmXnEijAHZQwO7iZoHgeIpLN2cUKG16tGuNVT9wjuh%2BjwbLwEbKNFCtsZelxcJHDzo8vgKVx7Mm8PFU3ft2NFpTWKqiJA5Ny9gu3PRJ9rP%2Bsd7uoLi3XogcAphsYlpWhUMg0KgfPsZquF%2F259UI4V3d0jo5BIJ8x%2B3jJfVfgfSWuabhA2mMSqLHke3BN8jBYyXXKr4%2BRxbcUGCNVhDxlqPAmJS74%2FbpUlIGzFVkJOZt6gTyONjti0zQXc7pnhrPV7W6hwVsKcbOcxo7axUoA%2BQEINgdvMawO63tz8PnElzxRkbDmdy9P%2BaKdWXMxRSwiuM0Muq80t7nclLKQHtzbaSzbP7ywVCmu5yxkMmjm9Oza2lHpXewGcFyTtTdnXiv24QDiEAoGhpCSdOYmNO1FVJ1r4tVnUBnrJaymqr1ZKbkh6eGSPmgyRCaiKJVeabmJdLUjlGEbkmbppOD1c0b6viDSKL4OLT00IPum52ewqzPswj9KAvgY6pgG%2BS0REOjcNyKVwTqOQXmAvX5PUgzZiPk2LSN8znsONpf8rEwtgLqjZsQdRL8zjIG6ejuUnHvB5kg53kN1zNirb2qZLxG481Y%2FDAUCsmfWb0U3ocUzNhKfwqd%2BerRNfDNqB6fOh%2Bp92dyQxieOrfsr7R4vOvgtER%2Bz9XxzlWZBX1%2FZQ70uxIleCxTSvKpMQGyoTeGqr9tYnoxjNojWMChH8ITVesLV2&X-Amz-Signature=930cd6e78c9a7f0f8d1dddee5057a72660266425d51f0aa79ffa975ec47ab6c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5UH3XS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEbEZXENLmfw9R02cO6A7XnoMY7QDHLtwbmYe%2F4tNEwGAiA9y875bdigzEYjdO7uE14QJgqPVESUtlXokY8bcQnI5ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2BhcAweFcc2gb96vLKtwDhgHDCiM1Akp0NT%2FgbhbGUx8rcvtRVQXmONRmVaed5QrdpemGDt8nlYLXBsH19o9jekzh3EV%2B69%2F7RVEOrugxwhwLtk%2FwfDa00ToNCjjI6b6pvcC74sYDspgQxN%2FbH4rUNjUQse2MsKLA78sOmXnEijAHZQwO7iZoHgeIpLN2cUKG16tGuNVT9wjuh%2BjwbLwEbKNFCtsZelxcJHDzo8vgKVx7Mm8PFU3ft2NFpTWKqiJA5Ny9gu3PRJ9rP%2Bsd7uoLi3XogcAphsYlpWhUMg0KgfPsZquF%2F259UI4V3d0jo5BIJ8x%2B3jJfVfgfSWuabhA2mMSqLHke3BN8jBYyXXKr4%2BRxbcUGCNVhDxlqPAmJS74%2FbpUlIGzFVkJOZt6gTyONjti0zQXc7pnhrPV7W6hwVsKcbOcxo7axUoA%2BQEINgdvMawO63tz8PnElzxRkbDmdy9P%2BaKdWXMxRSwiuM0Muq80t7nclLKQHtzbaSzbP7ywVCmu5yxkMmjm9Oza2lHpXewGcFyTtTdnXiv24QDiEAoGhpCSdOYmNO1FVJ1r4tVnUBnrJaymqr1ZKbkh6eGSPmgyRCaiKJVeabmJdLUjlGEbkmbppOD1c0b6viDSKL4OLT00IPum52ewqzPswj9KAvgY6pgG%2BS0REOjcNyKVwTqOQXmAvX5PUgzZiPk2LSN8znsONpf8rEwtgLqjZsQdRL8zjIG6ejuUnHvB5kg53kN1zNirb2qZLxG481Y%2FDAUCsmfWb0U3ocUzNhKfwqd%2BerRNfDNqB6fOh%2Bp92dyQxieOrfsr7R4vOvgtER%2Bz9XxzlWZBX1%2FZQ70uxIleCxTSvKpMQGyoTeGqr9tYnoxjNojWMChH8ITVesLV2&X-Amz-Signature=31d5ea623e62ef254d3e2106f7a655bd9d762bbb0a9ee3ee9ed1d5f3d0043811&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
