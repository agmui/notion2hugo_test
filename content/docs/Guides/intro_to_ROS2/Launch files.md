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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVQGNB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC%2FXbr41jQYD3N3RnUo2lMOiyUVBVQooWsYnS6VAt0GyQIgaV4wLVNykEOCWoIo1zr7hHG5ggutzEyUcfbcvVq%2FWxYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDD%2FEkydVBe8Ta95ERircA8yPsGrETmy35yJyFoLfygUmLfQ2HGJjVSLMYGRdQmVOh%2FHrtpsDHqsmFSR2ayywnimuqOJIaPYw4YMpr9gXg4h2l1aVkC1ISUCLuptIsEhJxPasKk2zDNq3lPCtnutjKd6gFcMNJX2pOwUhtkJCW4QqG1wZ7MSHN7z2ETq%2F7UEPH8vUql875fgGyQinqg8ahNmd2QD3F6EO6pGqvjZfz1sXktQbVts59i3SdUJtEYj3I5kh4HdpyH2usbOaPUl8Gyt2o1YUlemvwylsldLyUp86YXH86Id3maX8qwDHnunUXvnqYHzOcC5ab888nWtjupenPrDNwwl7JLnw9vganhxCykCkQwXKdHClDEvHy57YiIUjDDSos32ap%2FYC6U5OA8om4TuNDZYTdpRngtOswCCrqAswhnfLclSDFn3K9Lkkp7%2FWiL4n%2BaLktYMmY2%2BnXUxQ%2BYpFJS8Rw6mcIpPBT8Ltte6vDy8KGoOBRbS7pL%2B0BEeBcVOe5YTXkwKuzhTCRKIgXhuiUyfxq0PuvqtHzMJMhIVYJPkOQxdkzHTn6VSeggQtyXfub394KrSxXyrmmg4%2FJvyI%2B1n0cGygUgL75h9HWllF7TItnqZUwpL1zqzcieev7%2F1GgG3P%2BqZBMJbSvr0GOqUBhvoAaSTt6f7JKIyVrffsG8PkM0Dlamdafb8caANTFD66EP2rODMr9Tbiu99VYiAHgkzGEzAwxeFn0JIdYS39GAa6K13pQRQZ9CvSoqRKFn0fbXMxvB%2B102m4YXOoAyUGdNW7pJ%2FIKszKrrrNTj8a%2FfzHys%2F6vCsQuaB7hAd2Zt7A3a78jHdJsDPAx%2FnmSvurpVGfXdroClUUrYMOGo3PxTD82xd3&X-Amz-Signature=b9d6ffff9045c06cf575d51aa0998bc60e82a189c0728c2f5beb4eb9dc68d9a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVQGNB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC%2FXbr41jQYD3N3RnUo2lMOiyUVBVQooWsYnS6VAt0GyQIgaV4wLVNykEOCWoIo1zr7hHG5ggutzEyUcfbcvVq%2FWxYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDD%2FEkydVBe8Ta95ERircA8yPsGrETmy35yJyFoLfygUmLfQ2HGJjVSLMYGRdQmVOh%2FHrtpsDHqsmFSR2ayywnimuqOJIaPYw4YMpr9gXg4h2l1aVkC1ISUCLuptIsEhJxPasKk2zDNq3lPCtnutjKd6gFcMNJX2pOwUhtkJCW4QqG1wZ7MSHN7z2ETq%2F7UEPH8vUql875fgGyQinqg8ahNmd2QD3F6EO6pGqvjZfz1sXktQbVts59i3SdUJtEYj3I5kh4HdpyH2usbOaPUl8Gyt2o1YUlemvwylsldLyUp86YXH86Id3maX8qwDHnunUXvnqYHzOcC5ab888nWtjupenPrDNwwl7JLnw9vganhxCykCkQwXKdHClDEvHy57YiIUjDDSos32ap%2FYC6U5OA8om4TuNDZYTdpRngtOswCCrqAswhnfLclSDFn3K9Lkkp7%2FWiL4n%2BaLktYMmY2%2BnXUxQ%2BYpFJS8Rw6mcIpPBT8Ltte6vDy8KGoOBRbS7pL%2B0BEeBcVOe5YTXkwKuzhTCRKIgXhuiUyfxq0PuvqtHzMJMhIVYJPkOQxdkzHTn6VSeggQtyXfub394KrSxXyrmmg4%2FJvyI%2B1n0cGygUgL75h9HWllF7TItnqZUwpL1zqzcieev7%2F1GgG3P%2BqZBMJbSvr0GOqUBhvoAaSTt6f7JKIyVrffsG8PkM0Dlamdafb8caANTFD66EP2rODMr9Tbiu99VYiAHgkzGEzAwxeFn0JIdYS39GAa6K13pQRQZ9CvSoqRKFn0fbXMxvB%2B102m4YXOoAyUGdNW7pJ%2FIKszKrrrNTj8a%2FfzHys%2F6vCsQuaB7hAd2Zt7A3a78jHdJsDPAx%2FnmSvurpVGfXdroClUUrYMOGo3PxTD82xd3&X-Amz-Signature=bb93d07f5b465cb7c373c76bc9b60c300ac309dd8f51c1e55c71a476ea405f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVQGNB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC%2FXbr41jQYD3N3RnUo2lMOiyUVBVQooWsYnS6VAt0GyQIgaV4wLVNykEOCWoIo1zr7hHG5ggutzEyUcfbcvVq%2FWxYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDD%2FEkydVBe8Ta95ERircA8yPsGrETmy35yJyFoLfygUmLfQ2HGJjVSLMYGRdQmVOh%2FHrtpsDHqsmFSR2ayywnimuqOJIaPYw4YMpr9gXg4h2l1aVkC1ISUCLuptIsEhJxPasKk2zDNq3lPCtnutjKd6gFcMNJX2pOwUhtkJCW4QqG1wZ7MSHN7z2ETq%2F7UEPH8vUql875fgGyQinqg8ahNmd2QD3F6EO6pGqvjZfz1sXktQbVts59i3SdUJtEYj3I5kh4HdpyH2usbOaPUl8Gyt2o1YUlemvwylsldLyUp86YXH86Id3maX8qwDHnunUXvnqYHzOcC5ab888nWtjupenPrDNwwl7JLnw9vganhxCykCkQwXKdHClDEvHy57YiIUjDDSos32ap%2FYC6U5OA8om4TuNDZYTdpRngtOswCCrqAswhnfLclSDFn3K9Lkkp7%2FWiL4n%2BaLktYMmY2%2BnXUxQ%2BYpFJS8Rw6mcIpPBT8Ltte6vDy8KGoOBRbS7pL%2B0BEeBcVOe5YTXkwKuzhTCRKIgXhuiUyfxq0PuvqtHzMJMhIVYJPkOQxdkzHTn6VSeggQtyXfub394KrSxXyrmmg4%2FJvyI%2B1n0cGygUgL75h9HWllF7TItnqZUwpL1zqzcieev7%2F1GgG3P%2BqZBMJbSvr0GOqUBhvoAaSTt6f7JKIyVrffsG8PkM0Dlamdafb8caANTFD66EP2rODMr9Tbiu99VYiAHgkzGEzAwxeFn0JIdYS39GAa6K13pQRQZ9CvSoqRKFn0fbXMxvB%2B102m4YXOoAyUGdNW7pJ%2FIKszKrrrNTj8a%2FfzHys%2F6vCsQuaB7hAd2Zt7A3a78jHdJsDPAx%2FnmSvurpVGfXdroClUUrYMOGo3PxTD82xd3&X-Amz-Signature=4743fe7ded9b7ba2ffa9e753c4cf5ec6488db8ba4ae79625af278590a11091ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
