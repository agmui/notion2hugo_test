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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOL5M6WH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFVCEP4owPcwNzj%2F3y0oYAoRj91YqVnsVt%2BoFobKK0UvAiB%2Bldtm1QGJkjt0wmt0oVzO0nCx9x2ninM87x2I3aX4cyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFzbE9eTTUVDlNrClKtwDXncU5%2F4qgS3AvNEiNrNOxerRk4oKo7dET%2BxAfaJLeKQSfvrFQFuL%2B1jzt4LU9bwaberFQDS0BR4p7wKoH1vg4yCbQTsq%2FqM25o6BVYJBPHpYUE6quIvkTfhtjLTBHZ5KgjEH1n1kF8oMpu1ud4CfCCWpk%2BEPPIR7SPGdFAANtFfBC363NDCKmny0RI3thP0LYjv3S%2Fztfoms5MSv0QgrOVSxeSk%2FjPaNB9HwFV8X%2FAl0H5J87LW6hbc69fiPIOGIQBnp9jwppBZ7t9DRwEXAj8zftkKI1CgisQsmxkHALxZY8i%2Bk%2FTXJ%2BSZUuOYiV6wKU6A7l9YHaASKBLeGSzXgVOjqPudD3OjoW%2B4ZUoFO9g0pQ3QiWZARFItFe5%2BBZIv2fHnRa4ocDcX0lU5gpdPfQgG1Y1dRXlOBrwydsNu1i3a5yvVJbdG%2B4ylqW3C4OaId%2BVzOwd1ePpBcH8ZLuGQ0EQwU1wkNKbkBVsd5iTqx0icjOW4mxTVmkr5R%2FAag8ZewU2veLWonIPtfyfbYyFMo80rqSGjMlftndlYFUg7KctAbcUO0HV0u2gRZHFmTDexL3Geh8Q%2Fr2Vr6aIF4RXj6g45nrb7WH1cz2U6ylhR7R3lmIVbvJZbVLkD6LBkwr5fMxAY6pgGfY68seCpUzlXPt%2FAIvFWwe1Pa8IBSz5wwL0bWyotBXsrtp6boZ%2FR8bZYNcpK34YAXrMMMeDNh7JXbWav%2F%2Fff4xCoRMKO2uahX3DBKa91r2vxrTEztEk9ZCK7xqyroTgMCd8HCrK6P8CQmfEaMTcxSyN29CvZ1I2Jje6WGXEjl6Swhs5ZCd5hZsCXURsrcR2AhjBsA1xOsMZUbuNK8824lzoAib5jI&X-Amz-Signature=1a7126d9663be642603d6f8552e372420ae9ca5fdd9cfa5787a56514bc556289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOL5M6WH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFVCEP4owPcwNzj%2F3y0oYAoRj91YqVnsVt%2BoFobKK0UvAiB%2Bldtm1QGJkjt0wmt0oVzO0nCx9x2ninM87x2I3aX4cyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFzbE9eTTUVDlNrClKtwDXncU5%2F4qgS3AvNEiNrNOxerRk4oKo7dET%2BxAfaJLeKQSfvrFQFuL%2B1jzt4LU9bwaberFQDS0BR4p7wKoH1vg4yCbQTsq%2FqM25o6BVYJBPHpYUE6quIvkTfhtjLTBHZ5KgjEH1n1kF8oMpu1ud4CfCCWpk%2BEPPIR7SPGdFAANtFfBC363NDCKmny0RI3thP0LYjv3S%2Fztfoms5MSv0QgrOVSxeSk%2FjPaNB9HwFV8X%2FAl0H5J87LW6hbc69fiPIOGIQBnp9jwppBZ7t9DRwEXAj8zftkKI1CgisQsmxkHALxZY8i%2Bk%2FTXJ%2BSZUuOYiV6wKU6A7l9YHaASKBLeGSzXgVOjqPudD3OjoW%2B4ZUoFO9g0pQ3QiWZARFItFe5%2BBZIv2fHnRa4ocDcX0lU5gpdPfQgG1Y1dRXlOBrwydsNu1i3a5yvVJbdG%2B4ylqW3C4OaId%2BVzOwd1ePpBcH8ZLuGQ0EQwU1wkNKbkBVsd5iTqx0icjOW4mxTVmkr5R%2FAag8ZewU2veLWonIPtfyfbYyFMo80rqSGjMlftndlYFUg7KctAbcUO0HV0u2gRZHFmTDexL3Geh8Q%2Fr2Vr6aIF4RXj6g45nrb7WH1cz2U6ylhR7R3lmIVbvJZbVLkD6LBkwr5fMxAY6pgGfY68seCpUzlXPt%2FAIvFWwe1Pa8IBSz5wwL0bWyotBXsrtp6boZ%2FR8bZYNcpK34YAXrMMMeDNh7JXbWav%2F%2Fff4xCoRMKO2uahX3DBKa91r2vxrTEztEk9ZCK7xqyroTgMCd8HCrK6P8CQmfEaMTcxSyN29CvZ1I2Jje6WGXEjl6Swhs5ZCd5hZsCXURsrcR2AhjBsA1xOsMZUbuNK8824lzoAib5jI&X-Amz-Signature=bb22c1c4cf246fde0d1d0175e6f9d73acfdb018073f8e20758df92fc408add8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOL5M6WH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFVCEP4owPcwNzj%2F3y0oYAoRj91YqVnsVt%2BoFobKK0UvAiB%2Bldtm1QGJkjt0wmt0oVzO0nCx9x2ninM87x2I3aX4cyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFzbE9eTTUVDlNrClKtwDXncU5%2F4qgS3AvNEiNrNOxerRk4oKo7dET%2BxAfaJLeKQSfvrFQFuL%2B1jzt4LU9bwaberFQDS0BR4p7wKoH1vg4yCbQTsq%2FqM25o6BVYJBPHpYUE6quIvkTfhtjLTBHZ5KgjEH1n1kF8oMpu1ud4CfCCWpk%2BEPPIR7SPGdFAANtFfBC363NDCKmny0RI3thP0LYjv3S%2Fztfoms5MSv0QgrOVSxeSk%2FjPaNB9HwFV8X%2FAl0H5J87LW6hbc69fiPIOGIQBnp9jwppBZ7t9DRwEXAj8zftkKI1CgisQsmxkHALxZY8i%2Bk%2FTXJ%2BSZUuOYiV6wKU6A7l9YHaASKBLeGSzXgVOjqPudD3OjoW%2B4ZUoFO9g0pQ3QiWZARFItFe5%2BBZIv2fHnRa4ocDcX0lU5gpdPfQgG1Y1dRXlOBrwydsNu1i3a5yvVJbdG%2B4ylqW3C4OaId%2BVzOwd1ePpBcH8ZLuGQ0EQwU1wkNKbkBVsd5iTqx0icjOW4mxTVmkr5R%2FAag8ZewU2veLWonIPtfyfbYyFMo80rqSGjMlftndlYFUg7KctAbcUO0HV0u2gRZHFmTDexL3Geh8Q%2Fr2Vr6aIF4RXj6g45nrb7WH1cz2U6ylhR7R3lmIVbvJZbVLkD6LBkwr5fMxAY6pgGfY68seCpUzlXPt%2FAIvFWwe1Pa8IBSz5wwL0bWyotBXsrtp6boZ%2FR8bZYNcpK34YAXrMMMeDNh7JXbWav%2F%2Fff4xCoRMKO2uahX3DBKa91r2vxrTEztEk9ZCK7xqyroTgMCd8HCrK6P8CQmfEaMTcxSyN29CvZ1I2Jje6WGXEjl6Swhs5ZCd5hZsCXURsrcR2AhjBsA1xOsMZUbuNK8824lzoAib5jI&X-Amz-Signature=05cf7d2fd679974e96c7b46225a96e5e7b014d131613fd0d9e3ff78c6cba7530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
