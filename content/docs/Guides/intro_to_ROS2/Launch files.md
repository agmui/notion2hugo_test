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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DD3JIF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICwbL7Phz2Icp1OS%2FNjoyeNP3v5c9U3no3AeUcWloyq0AiEAtICUD2Uwewj79lbpwAioHgs8CYK0Yq%2BHsjqIsbVSPMYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPkJ83n8oBD8iChO%2BircA0pDUun7J2wGVTSTWnnC5J93D4EypRDh5JkLQp%2Btjqy8BMHBTyvsNwWkq8rTydhGS%2BJ8cflr3xdUHnv9Y0kMqy62x7UtSOSglQSKxk2iIFaeogMVUT%2Fh23meHtbUtEcsiF0eCp2NWmJz62Jxr8%2F0ghCwbi3zOS7v%2BwMVrAE5%2FxbcLtXVHmaw%2FNXqAZXUnxVulwPomlyvdbCONaCgj5mNFKo4tzYL4EqfxD3S8FWycvX9%2F%2FS%2BjRXM95nGLXnn9WQcAtim%2FfKxWFbLVeQ2OuXIZKePCG4Sm4mX08UEbWBJsuITV%2BHKnv55jKNetvwBcZZy6vvGuM3%2FusouEMxIfORV4CVHVPykSYbm4q%2BFWwQZg6RPriAq0wXcQQxrrKb8vx55REPnpXyqoU%2BRG6Z6cTHN4XarVToRQNZFF7NFtVVZyRBWkzLlH9qfv14AaM2Nsr2egFQ0X%2BPDL3pA4EFWzK4YW9mpcfolBYUh0E46fX%2FQnycYFfXL907xfSbslCjCjhkKjfFDuSp9Ip%2BAHMhYN4j9Bvu72DwDsE2xxyQgUIFEryPqywX9OQRgCfvqEgY3E%2B%2BRnJukKUiD2xdduXF2fil%2FSD9hcPW4pAcMiSlnXoDx5wdtc8GQ0o3gdYskRs8%2BMITl6sIGOqUBXe77ZZPVAOlNmN40W%2BYEYDhdzF%2BVJ%2FW1bFHLWX%2BOOJWDxfPS3z3q9d%2FqpZqQV6wil7hKx4nYHDgD9sbLS8TuC7%2B37zhLnWM4VgiyPWKi5hGhOgR%2BBhPF6g1QKFnizIqWQ4evB8D3ECHewAMqw3Ebbjv4bW%2Bg%2BhJq9VNoT9LytjY95YiVpxXNvkQ7YG%2FzNuUBi9WCoXKh01kh1ibwuwCmHZPWK7FC&X-Amz-Signature=e583e4b97abc30e9761716acfc70af399e904a3243c58e11e3a8cc1fa0502b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DD3JIF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICwbL7Phz2Icp1OS%2FNjoyeNP3v5c9U3no3AeUcWloyq0AiEAtICUD2Uwewj79lbpwAioHgs8CYK0Yq%2BHsjqIsbVSPMYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPkJ83n8oBD8iChO%2BircA0pDUun7J2wGVTSTWnnC5J93D4EypRDh5JkLQp%2Btjqy8BMHBTyvsNwWkq8rTydhGS%2BJ8cflr3xdUHnv9Y0kMqy62x7UtSOSglQSKxk2iIFaeogMVUT%2Fh23meHtbUtEcsiF0eCp2NWmJz62Jxr8%2F0ghCwbi3zOS7v%2BwMVrAE5%2FxbcLtXVHmaw%2FNXqAZXUnxVulwPomlyvdbCONaCgj5mNFKo4tzYL4EqfxD3S8FWycvX9%2F%2FS%2BjRXM95nGLXnn9WQcAtim%2FfKxWFbLVeQ2OuXIZKePCG4Sm4mX08UEbWBJsuITV%2BHKnv55jKNetvwBcZZy6vvGuM3%2FusouEMxIfORV4CVHVPykSYbm4q%2BFWwQZg6RPriAq0wXcQQxrrKb8vx55REPnpXyqoU%2BRG6Z6cTHN4XarVToRQNZFF7NFtVVZyRBWkzLlH9qfv14AaM2Nsr2egFQ0X%2BPDL3pA4EFWzK4YW9mpcfolBYUh0E46fX%2FQnycYFfXL907xfSbslCjCjhkKjfFDuSp9Ip%2BAHMhYN4j9Bvu72DwDsE2xxyQgUIFEryPqywX9OQRgCfvqEgY3E%2B%2BRnJukKUiD2xdduXF2fil%2FSD9hcPW4pAcMiSlnXoDx5wdtc8GQ0o3gdYskRs8%2BMITl6sIGOqUBXe77ZZPVAOlNmN40W%2BYEYDhdzF%2BVJ%2FW1bFHLWX%2BOOJWDxfPS3z3q9d%2FqpZqQV6wil7hKx4nYHDgD9sbLS8TuC7%2B37zhLnWM4VgiyPWKi5hGhOgR%2BBhPF6g1QKFnizIqWQ4evB8D3ECHewAMqw3Ebbjv4bW%2Bg%2BhJq9VNoT9LytjY95YiVpxXNvkQ7YG%2FzNuUBi9WCoXKh01kh1ibwuwCmHZPWK7FC&X-Amz-Signature=6f4a4c9225f73f192b2b8cd799909fffddc3ec44d9045dbef4c4bbf6d3905b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DD3JIF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICwbL7Phz2Icp1OS%2FNjoyeNP3v5c9U3no3AeUcWloyq0AiEAtICUD2Uwewj79lbpwAioHgs8CYK0Yq%2BHsjqIsbVSPMYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPkJ83n8oBD8iChO%2BircA0pDUun7J2wGVTSTWnnC5J93D4EypRDh5JkLQp%2Btjqy8BMHBTyvsNwWkq8rTydhGS%2BJ8cflr3xdUHnv9Y0kMqy62x7UtSOSglQSKxk2iIFaeogMVUT%2Fh23meHtbUtEcsiF0eCp2NWmJz62Jxr8%2F0ghCwbi3zOS7v%2BwMVrAE5%2FxbcLtXVHmaw%2FNXqAZXUnxVulwPomlyvdbCONaCgj5mNFKo4tzYL4EqfxD3S8FWycvX9%2F%2FS%2BjRXM95nGLXnn9WQcAtim%2FfKxWFbLVeQ2OuXIZKePCG4Sm4mX08UEbWBJsuITV%2BHKnv55jKNetvwBcZZy6vvGuM3%2FusouEMxIfORV4CVHVPykSYbm4q%2BFWwQZg6RPriAq0wXcQQxrrKb8vx55REPnpXyqoU%2BRG6Z6cTHN4XarVToRQNZFF7NFtVVZyRBWkzLlH9qfv14AaM2Nsr2egFQ0X%2BPDL3pA4EFWzK4YW9mpcfolBYUh0E46fX%2FQnycYFfXL907xfSbslCjCjhkKjfFDuSp9Ip%2BAHMhYN4j9Bvu72DwDsE2xxyQgUIFEryPqywX9OQRgCfvqEgY3E%2B%2BRnJukKUiD2xdduXF2fil%2FSD9hcPW4pAcMiSlnXoDx5wdtc8GQ0o3gdYskRs8%2BMITl6sIGOqUBXe77ZZPVAOlNmN40W%2BYEYDhdzF%2BVJ%2FW1bFHLWX%2BOOJWDxfPS3z3q9d%2FqpZqQV6wil7hKx4nYHDgD9sbLS8TuC7%2B37zhLnWM4VgiyPWKi5hGhOgR%2BBhPF6g1QKFnizIqWQ4evB8D3ECHewAMqw3Ebbjv4bW%2Bg%2BhJq9VNoT9LytjY95YiVpxXNvkQ7YG%2FzNuUBi9WCoXKh01kh1ibwuwCmHZPWK7FC&X-Amz-Signature=d407a2a9f8813582c6fd28ed1fc1d8c14f57d8323d9ec7824e28625bf180a4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
