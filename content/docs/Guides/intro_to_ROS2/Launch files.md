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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ULEQ6O4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHfOoUYNGmUrjq8RCUiV0MahyttdQ5MF6vRb6kHWe5WsAiEAmOJQxn9S5mcL1r43yrtIFf%2Fo2%2BlkRdQ0G%2BdqHD7FFgIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH22XkmcQfuF5zxNVSrcA5aNYgdJ7UWAXfOklplpjhyD9vUiFkf9uZgQjtPNVHxt8ugXxSAO4Fu26ZRXohZlmg0EQHRKU4tMxHFjGGR5YOUfXb7dZuPr6W2seL4rtf5C3LaqMblvKEc5icPRrkdJI9N2l6qogXWYqNucL7KGpCDWygdcII0aaXi6g%2B7qQKG4kANmB%2B26rngYRZ5Zq3mosMLgbfZuSYDzbE%2FV%2FflAmsCMMs%2BVrzI%2Fzrlcf4AjL%2FHxRMy6e%2FEH2XIh%2FJH5HRkj9O7dQExj%2FG8jojAXy7GTitEDEnL0DjNAszEcn3GTcbjJbn421ATUWGZQRJlDpnRbi45Acxw9nKwFizqpPtU9nP829yRVUfKrDN31q%2FNGejg7XeAq1chf3Qowed9ehVDLV9tE2o8lQADS3EWC9jDURGuEw1wnY4EydFMEspZK3HqCysKt7Qf2U8E0OLh58yAxi87oOVyceJM%2BznyiSx2pbrk8LPOQfZK64fFHJ67KVrHkiL4Y1TQSIgmuQsf%2BF%2BCBfwH%2Bpodj%2Bs8NN7J63bYhexpgCocBEsHkVDt3D7seVAlarIN0z5%2BkLr6cheNpXO04iUhQy6zcor4IGvEd6xDHifeJWZ%2BPuZhOJaMoD5vy1Gfftbo485P60KVNmsZ3MN7GpcAGOqUB2Mqx8KebUaveq1qvkrQLBoe7VN%2Fru5Ip4PY94Mhj7Q%2F6dPqMc40s88zvagZub0eV1nIMhnwHruYlWZtaJ7IB7nSg8IoPjATHHxOUT41YKtGYnXflxQVRY8Yw%2BRqUoBvS0SzfMP5bxZKtfyxKuaeiNiIfndcAu8i7NAh4hCChvDFP0OzhzOFR6n11M2hmADYiPYx%2Bn5%2BaOaT5ETXIAelejO8cg0tc&X-Amz-Signature=a77490b3762ba1dd93642291cba215eb6f3f70e900cabaec2468ba2b4ed52ade&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ULEQ6O4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHfOoUYNGmUrjq8RCUiV0MahyttdQ5MF6vRb6kHWe5WsAiEAmOJQxn9S5mcL1r43yrtIFf%2Fo2%2BlkRdQ0G%2BdqHD7FFgIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH22XkmcQfuF5zxNVSrcA5aNYgdJ7UWAXfOklplpjhyD9vUiFkf9uZgQjtPNVHxt8ugXxSAO4Fu26ZRXohZlmg0EQHRKU4tMxHFjGGR5YOUfXb7dZuPr6W2seL4rtf5C3LaqMblvKEc5icPRrkdJI9N2l6qogXWYqNucL7KGpCDWygdcII0aaXi6g%2B7qQKG4kANmB%2B26rngYRZ5Zq3mosMLgbfZuSYDzbE%2FV%2FflAmsCMMs%2BVrzI%2Fzrlcf4AjL%2FHxRMy6e%2FEH2XIh%2FJH5HRkj9O7dQExj%2FG8jojAXy7GTitEDEnL0DjNAszEcn3GTcbjJbn421ATUWGZQRJlDpnRbi45Acxw9nKwFizqpPtU9nP829yRVUfKrDN31q%2FNGejg7XeAq1chf3Qowed9ehVDLV9tE2o8lQADS3EWC9jDURGuEw1wnY4EydFMEspZK3HqCysKt7Qf2U8E0OLh58yAxi87oOVyceJM%2BznyiSx2pbrk8LPOQfZK64fFHJ67KVrHkiL4Y1TQSIgmuQsf%2BF%2BCBfwH%2Bpodj%2Bs8NN7J63bYhexpgCocBEsHkVDt3D7seVAlarIN0z5%2BkLr6cheNpXO04iUhQy6zcor4IGvEd6xDHifeJWZ%2BPuZhOJaMoD5vy1Gfftbo485P60KVNmsZ3MN7GpcAGOqUB2Mqx8KebUaveq1qvkrQLBoe7VN%2Fru5Ip4PY94Mhj7Q%2F6dPqMc40s88zvagZub0eV1nIMhnwHruYlWZtaJ7IB7nSg8IoPjATHHxOUT41YKtGYnXflxQVRY8Yw%2BRqUoBvS0SzfMP5bxZKtfyxKuaeiNiIfndcAu8i7NAh4hCChvDFP0OzhzOFR6n11M2hmADYiPYx%2Bn5%2BaOaT5ETXIAelejO8cg0tc&X-Amz-Signature=3e23a49837ad40dd86ba5fce21e5df4c6fdea6ae9dc53c44309391ed1c12e93c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ULEQ6O4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHfOoUYNGmUrjq8RCUiV0MahyttdQ5MF6vRb6kHWe5WsAiEAmOJQxn9S5mcL1r43yrtIFf%2Fo2%2BlkRdQ0G%2BdqHD7FFgIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH22XkmcQfuF5zxNVSrcA5aNYgdJ7UWAXfOklplpjhyD9vUiFkf9uZgQjtPNVHxt8ugXxSAO4Fu26ZRXohZlmg0EQHRKU4tMxHFjGGR5YOUfXb7dZuPr6W2seL4rtf5C3LaqMblvKEc5icPRrkdJI9N2l6qogXWYqNucL7KGpCDWygdcII0aaXi6g%2B7qQKG4kANmB%2B26rngYRZ5Zq3mosMLgbfZuSYDzbE%2FV%2FflAmsCMMs%2BVrzI%2Fzrlcf4AjL%2FHxRMy6e%2FEH2XIh%2FJH5HRkj9O7dQExj%2FG8jojAXy7GTitEDEnL0DjNAszEcn3GTcbjJbn421ATUWGZQRJlDpnRbi45Acxw9nKwFizqpPtU9nP829yRVUfKrDN31q%2FNGejg7XeAq1chf3Qowed9ehVDLV9tE2o8lQADS3EWC9jDURGuEw1wnY4EydFMEspZK3HqCysKt7Qf2U8E0OLh58yAxi87oOVyceJM%2BznyiSx2pbrk8LPOQfZK64fFHJ67KVrHkiL4Y1TQSIgmuQsf%2BF%2BCBfwH%2Bpodj%2Bs8NN7J63bYhexpgCocBEsHkVDt3D7seVAlarIN0z5%2BkLr6cheNpXO04iUhQy6zcor4IGvEd6xDHifeJWZ%2BPuZhOJaMoD5vy1Gfftbo485P60KVNmsZ3MN7GpcAGOqUB2Mqx8KebUaveq1qvkrQLBoe7VN%2Fru5Ip4PY94Mhj7Q%2F6dPqMc40s88zvagZub0eV1nIMhnwHruYlWZtaJ7IB7nSg8IoPjATHHxOUT41YKtGYnXflxQVRY8Yw%2BRqUoBvS0SzfMP5bxZKtfyxKuaeiNiIfndcAu8i7NAh4hCChvDFP0OzhzOFR6n11M2hmADYiPYx%2Bn5%2BaOaT5ETXIAelejO8cg0tc&X-Amz-Signature=bc1d2b149dc3fb49c215b2fab7541057cfe4634106524df59437c9dfc1bffee9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
