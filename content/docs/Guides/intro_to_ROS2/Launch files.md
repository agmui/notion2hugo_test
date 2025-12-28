---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBLMPDG%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIkGxNVXC7DRJ7Vw3dBU4yCkvr1B%2BPZBOfpcm6waou7QIgCxuJiEcYjKRaoLW1B%2BXgnzRb%2F4nTlb9TBgZN9TDdzEgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDB5mjkdVWmEfVcVKHircA5FDWrA3kfqkw5kYHkHuEPULmlA6PMARWTyyg3bQ30SEktEBZtqStz1Y4I2a6zKCTySjZCqqQS8MpisTytPZkKSvXNd6JOdXnkeM2EgoA0c61q2eHdW%2FG%2F8ifFomoLYVNdjYBvj1ME9LjuSeiOHXyTgP1xz00FAMznNhqg6Inn0adj5recz2Klz70p55gKO1lZXS%2BUFizKhKONakVhKeaSs7C5jh9cFhkS%2Bq3BIwIcH4rEwckshPCpuFbZKu2fAljk%2BOUZlS%2FkeUZSd6Lr%2FlsfdPTCKFE5ZY5rGV4inTn0otrd6cu%2BhGG3Yb3IKzjP%2Bi4cLZ9O12%2BaYMxzY%2B1RVOrB2G6vHcWPB36OFme8vyAhjLvtfVR%2B%2BpsjigpY6FPbLgN%2Bi9M%2B9hGROUAd1rVIGISWF9q6ZB9gi9kHGtr3VpJv53RT3IBQr7o2D8U9dXGX4sg15%2FUScYH%2BvAYjm9HyPGBUGmH7I7MTwsfdpM2R75AhXRrUSCNlODrEMFYMmb95zkLoLERNO4cc1kZ4DOT28PoOh%2BQGc4c3yWv%2F%2B%2BPbVrhHyYoty%2BKMYcW2yFQT8efTNkpAgP1E3p7xUGH7YwKPsRa3JfnCIVoIESLPxl4NgR3pB%2Bxv%2BIdnZ%2FD7bVZMDKMODpwcoGOqUBTHxKvbOEfrA0OUgOpv2ph%2ByuWFOXW80jKLwOgk2ZM17usThUCB0P5SKj4iV%2BYp6IIRXoY%2B9BXuAzRmKOFIEHwuW6S4CG0CWjGbu%2B2hFbuNC3YutSEQybSvrLxY26%2FPNIL6jAwFibDZpSp13S0RigHBTHQtnyDM4elyvjH33wL5lVVUYYcUAeqPQMtIcPZsYZMSjqZx2MQKmrEWrOM7eijD43fKsK&X-Amz-Signature=beaaf206ac3fa9210a903b76c78c9891a86bcb85f9f7afb2932e0b023faba4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBLMPDG%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIkGxNVXC7DRJ7Vw3dBU4yCkvr1B%2BPZBOfpcm6waou7QIgCxuJiEcYjKRaoLW1B%2BXgnzRb%2F4nTlb9TBgZN9TDdzEgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDB5mjkdVWmEfVcVKHircA5FDWrA3kfqkw5kYHkHuEPULmlA6PMARWTyyg3bQ30SEktEBZtqStz1Y4I2a6zKCTySjZCqqQS8MpisTytPZkKSvXNd6JOdXnkeM2EgoA0c61q2eHdW%2FG%2F8ifFomoLYVNdjYBvj1ME9LjuSeiOHXyTgP1xz00FAMznNhqg6Inn0adj5recz2Klz70p55gKO1lZXS%2BUFizKhKONakVhKeaSs7C5jh9cFhkS%2Bq3BIwIcH4rEwckshPCpuFbZKu2fAljk%2BOUZlS%2FkeUZSd6Lr%2FlsfdPTCKFE5ZY5rGV4inTn0otrd6cu%2BhGG3Yb3IKzjP%2Bi4cLZ9O12%2BaYMxzY%2B1RVOrB2G6vHcWPB36OFme8vyAhjLvtfVR%2B%2BpsjigpY6FPbLgN%2Bi9M%2B9hGROUAd1rVIGISWF9q6ZB9gi9kHGtr3VpJv53RT3IBQr7o2D8U9dXGX4sg15%2FUScYH%2BvAYjm9HyPGBUGmH7I7MTwsfdpM2R75AhXRrUSCNlODrEMFYMmb95zkLoLERNO4cc1kZ4DOT28PoOh%2BQGc4c3yWv%2F%2B%2BPbVrhHyYoty%2BKMYcW2yFQT8efTNkpAgP1E3p7xUGH7YwKPsRa3JfnCIVoIESLPxl4NgR3pB%2Bxv%2BIdnZ%2FD7bVZMDKMODpwcoGOqUBTHxKvbOEfrA0OUgOpv2ph%2ByuWFOXW80jKLwOgk2ZM17usThUCB0P5SKj4iV%2BYp6IIRXoY%2B9BXuAzRmKOFIEHwuW6S4CG0CWjGbu%2B2hFbuNC3YutSEQybSvrLxY26%2FPNIL6jAwFibDZpSp13S0RigHBTHQtnyDM4elyvjH33wL5lVVUYYcUAeqPQMtIcPZsYZMSjqZx2MQKmrEWrOM7eijD43fKsK&X-Amz-Signature=59d70669a11f952b9964a5b59c67c134e0994afe09cd15e46f019f52e1f8885d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBLMPDG%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIkGxNVXC7DRJ7Vw3dBU4yCkvr1B%2BPZBOfpcm6waou7QIgCxuJiEcYjKRaoLW1B%2BXgnzRb%2F4nTlb9TBgZN9TDdzEgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDB5mjkdVWmEfVcVKHircA5FDWrA3kfqkw5kYHkHuEPULmlA6PMARWTyyg3bQ30SEktEBZtqStz1Y4I2a6zKCTySjZCqqQS8MpisTytPZkKSvXNd6JOdXnkeM2EgoA0c61q2eHdW%2FG%2F8ifFomoLYVNdjYBvj1ME9LjuSeiOHXyTgP1xz00FAMznNhqg6Inn0adj5recz2Klz70p55gKO1lZXS%2BUFizKhKONakVhKeaSs7C5jh9cFhkS%2Bq3BIwIcH4rEwckshPCpuFbZKu2fAljk%2BOUZlS%2FkeUZSd6Lr%2FlsfdPTCKFE5ZY5rGV4inTn0otrd6cu%2BhGG3Yb3IKzjP%2Bi4cLZ9O12%2BaYMxzY%2B1RVOrB2G6vHcWPB36OFme8vyAhjLvtfVR%2B%2BpsjigpY6FPbLgN%2Bi9M%2B9hGROUAd1rVIGISWF9q6ZB9gi9kHGtr3VpJv53RT3IBQr7o2D8U9dXGX4sg15%2FUScYH%2BvAYjm9HyPGBUGmH7I7MTwsfdpM2R75AhXRrUSCNlODrEMFYMmb95zkLoLERNO4cc1kZ4DOT28PoOh%2BQGc4c3yWv%2F%2B%2BPbVrhHyYoty%2BKMYcW2yFQT8efTNkpAgP1E3p7xUGH7YwKPsRa3JfnCIVoIESLPxl4NgR3pB%2Bxv%2BIdnZ%2FD7bVZMDKMODpwcoGOqUBTHxKvbOEfrA0OUgOpv2ph%2ByuWFOXW80jKLwOgk2ZM17usThUCB0P5SKj4iV%2BYp6IIRXoY%2B9BXuAzRmKOFIEHwuW6S4CG0CWjGbu%2B2hFbuNC3YutSEQybSvrLxY26%2FPNIL6jAwFibDZpSp13S0RigHBTHQtnyDM4elyvjH33wL5lVVUYYcUAeqPQMtIcPZsYZMSjqZx2MQKmrEWrOM7eijD43fKsK&X-Amz-Signature=b53c9952a95aafac49ad3f90cee0c4a8ed68f881b759147ab04357be4666db7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
