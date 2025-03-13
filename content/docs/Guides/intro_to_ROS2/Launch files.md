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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSTJ7GF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFotejqkOyF6K9jYY5wY1yhyHs2PWi9%2FU3OHyDj5mS2HAiEAyK55D4FjIDzBQdkDkQcALoBNCXGe09yRqatCj9hblb8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL5Dc038wTU9%2FhacircAy33FKHZihj31Q0JF0%2B3SgAXce6N98ANNzCCzLqS7FskbjvGC5QR5KBeKjaImipqXdU7oMknnuGl6GcEMU2Yyp6670Ki9M4L1JexQ4ppmc0Qb39DytpW%2FsCEroIdU4UmwW%2B5CgvOYALgMiuVrCHmTseSWYoLj%2BPRHeLHpnHhAQ3bMnhJtM%2Bw78%2BX2whDX8GIDMUM0hj44SxIxcfswQGJGsvulAp3UowYDiD7a4RwbfHjDGlmEZaAR9ysTe1RN8pzXjvVKG3kteO%2BZYQTlY88fJG6xTUPNOdxJDuHwUptH8cLmAONeWMSg%2B5uhrGz6pGImLCIH5s4UcBSSiQ88GlAl9r6ZMc0KKpO%2Bo6HsFU7zlraMAv4AfvwmvMmSaaymNV%2BxXyyjPuGXZts3lWHemWj7Ke7I7%2FEe5sOoCPPb%2FN3vctcIPGt89LdAwA4eb%2F3UuGqVUmCn6uPmLPJa%2Bl8K4VxSYCxeFP8vIhLEP3nAcevanO6boWFgVdjXa9jlrqigoAfOvkzBKJorOyjoHUPEGYwWA7XTZgMkavlmx2RfEesvNOCaSg0q%2F0tjUJAOFTxN3wCaDRz2W2e%2FQKDOdvD%2F3aGnjfbDYGtNsv5zwAHosXTQdThsFTp70DHUS0DCKSyMNLByr4GOqUBQQ1x5TUquMJOC%2BEOHJcHd%2Foc3IZN9AixECpPsqk4nqkU78VCh%2BL%2B9r3r%2F2mbo2XawkDwonsYHtewxsCsAorsJLuRETs8lNKsvgzEcFgmNq6kHXe9sjvkLHnw18VnsffDAdL49MG8IRx%2BoUvdZ2%2FlCGchvBJiVqR1fIgiKCcBnhIgLgpy2vUnXMT7U5qSZq%2FID9BT8ZbOLsWbnO%2BN8VsJxCaeXHG2&X-Amz-Signature=f3f1a9fde2e3dfff778b315ddbdb41e475b541ca33581396e0161ddcd7db4f38&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSTJ7GF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFotejqkOyF6K9jYY5wY1yhyHs2PWi9%2FU3OHyDj5mS2HAiEAyK55D4FjIDzBQdkDkQcALoBNCXGe09yRqatCj9hblb8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL5Dc038wTU9%2FhacircAy33FKHZihj31Q0JF0%2B3SgAXce6N98ANNzCCzLqS7FskbjvGC5QR5KBeKjaImipqXdU7oMknnuGl6GcEMU2Yyp6670Ki9M4L1JexQ4ppmc0Qb39DytpW%2FsCEroIdU4UmwW%2B5CgvOYALgMiuVrCHmTseSWYoLj%2BPRHeLHpnHhAQ3bMnhJtM%2Bw78%2BX2whDX8GIDMUM0hj44SxIxcfswQGJGsvulAp3UowYDiD7a4RwbfHjDGlmEZaAR9ysTe1RN8pzXjvVKG3kteO%2BZYQTlY88fJG6xTUPNOdxJDuHwUptH8cLmAONeWMSg%2B5uhrGz6pGImLCIH5s4UcBSSiQ88GlAl9r6ZMc0KKpO%2Bo6HsFU7zlraMAv4AfvwmvMmSaaymNV%2BxXyyjPuGXZts3lWHemWj7Ke7I7%2FEe5sOoCPPb%2FN3vctcIPGt89LdAwA4eb%2F3UuGqVUmCn6uPmLPJa%2Bl8K4VxSYCxeFP8vIhLEP3nAcevanO6boWFgVdjXa9jlrqigoAfOvkzBKJorOyjoHUPEGYwWA7XTZgMkavlmx2RfEesvNOCaSg0q%2F0tjUJAOFTxN3wCaDRz2W2e%2FQKDOdvD%2F3aGnjfbDYGtNsv5zwAHosXTQdThsFTp70DHUS0DCKSyMNLByr4GOqUBQQ1x5TUquMJOC%2BEOHJcHd%2Foc3IZN9AixECpPsqk4nqkU78VCh%2BL%2B9r3r%2F2mbo2XawkDwonsYHtewxsCsAorsJLuRETs8lNKsvgzEcFgmNq6kHXe9sjvkLHnw18VnsffDAdL49MG8IRx%2BoUvdZ2%2FlCGchvBJiVqR1fIgiKCcBnhIgLgpy2vUnXMT7U5qSZq%2FID9BT8ZbOLsWbnO%2BN8VsJxCaeXHG2&X-Amz-Signature=b3faa2c6bd069c7bb81a8ba774b74f5a309631a1d2d29cb96b5c38badbd992e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSTJ7GF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFotejqkOyF6K9jYY5wY1yhyHs2PWi9%2FU3OHyDj5mS2HAiEAyK55D4FjIDzBQdkDkQcALoBNCXGe09yRqatCj9hblb8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL5Dc038wTU9%2FhacircAy33FKHZihj31Q0JF0%2B3SgAXce6N98ANNzCCzLqS7FskbjvGC5QR5KBeKjaImipqXdU7oMknnuGl6GcEMU2Yyp6670Ki9M4L1JexQ4ppmc0Qb39DytpW%2FsCEroIdU4UmwW%2B5CgvOYALgMiuVrCHmTseSWYoLj%2BPRHeLHpnHhAQ3bMnhJtM%2Bw78%2BX2whDX8GIDMUM0hj44SxIxcfswQGJGsvulAp3UowYDiD7a4RwbfHjDGlmEZaAR9ysTe1RN8pzXjvVKG3kteO%2BZYQTlY88fJG6xTUPNOdxJDuHwUptH8cLmAONeWMSg%2B5uhrGz6pGImLCIH5s4UcBSSiQ88GlAl9r6ZMc0KKpO%2Bo6HsFU7zlraMAv4AfvwmvMmSaaymNV%2BxXyyjPuGXZts3lWHemWj7Ke7I7%2FEe5sOoCPPb%2FN3vctcIPGt89LdAwA4eb%2F3UuGqVUmCn6uPmLPJa%2Bl8K4VxSYCxeFP8vIhLEP3nAcevanO6boWFgVdjXa9jlrqigoAfOvkzBKJorOyjoHUPEGYwWA7XTZgMkavlmx2RfEesvNOCaSg0q%2F0tjUJAOFTxN3wCaDRz2W2e%2FQKDOdvD%2F3aGnjfbDYGtNsv5zwAHosXTQdThsFTp70DHUS0DCKSyMNLByr4GOqUBQQ1x5TUquMJOC%2BEOHJcHd%2Foc3IZN9AixECpPsqk4nqkU78VCh%2BL%2B9r3r%2F2mbo2XawkDwonsYHtewxsCsAorsJLuRETs8lNKsvgzEcFgmNq6kHXe9sjvkLHnw18VnsffDAdL49MG8IRx%2BoUvdZ2%2FlCGchvBJiVqR1fIgiKCcBnhIgLgpy2vUnXMT7U5qSZq%2FID9BT8ZbOLsWbnO%2BN8VsJxCaeXHG2&X-Amz-Signature=c6481864f884a11187c536bc89ffd5753a83e8fcee6b45c3f4d75049e9323f00&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
