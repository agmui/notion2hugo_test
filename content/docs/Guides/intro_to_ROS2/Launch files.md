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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CPJRMY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGqlGNPlTX%2BdJD4SxtXIRRD9%2FnPup9w%2FIGjcpPqZQ9xZAiEAxGnyVVfyXuaatImZeZvVXHeC4tUrbxoWBHxKyL8ZC8kqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaO4mhYGJpuLDFN9ircA2tbEw9EQCkGvYV%2BzbZu20nNIWwI94%2FDtnA0QllpagDZ4sIW16e%2Babj%2Fglm%2BdclVAMacRiPWrp6AJjIW32Wt7mfzPJ%2Bu3HH3mu04jUTJ2xjDQjWl1jAHJBGT8GhX%2B9BPVehUL5eX9Cg8sAx60K4R4OMh8rmKrm6of29U6SUb3S%2FJlUtTpN3sATU%2FJq8Tqw1M%2F2AUlXxI%2Ftzl1fvE9usso%2BQx2eNE8ubRtU2iuV%2BJRBA%2FrlmfVB9QlBTIS2V0K2Fi9kF2HeiNR5SB%2BReEqSG1PS6cBs6zABmAeMHi%2FFj96W1%2BCxq5IAZafSXoYwtHqXmY07KrfcnUwLcxZh9sr3SbyimU3dfMOm4%2BOJRVN%2Fe9fcMPv05sgw6ejKtGiJSVa8Dpm5cabfQ%2Bos7zLq47ntwwRZurPhpcwmJfktSAh1qoWmdeHAO6lqBXu%2BXWbaOHmuYN9RMbeL7HNoV1HFZ9OeBkunm9ubpP%2FDRX%2B%2BF7HqjMrrjIMAhpCYQHgioEbZPfGiQKZdrI00odbujhOvOArpRCWKdxulpbhLiugKe5a%2BE3bx9fu5OpCJHj0E5JaX90Mj7xSLlS8CCVVA3o0yi%2BBnHT%2FGzWTUZfttK36umpkvPoamSjybn9oYt1dYQQZfjfMKPy0sAGOqUBD%2BWbmM7KJe7Mm1kyfc6Svqi9rK4OWjKntIhll9Rr2mO1V0w0OS79znV56QrZ9lN0dpY7DB2PO0k%2Bh2zF0XbBDwbfZon%2FGiMpfUe%2FTITSFp6eqW7%2BITLEDXwQBNiLDgpNwBZ13K3j737kZCw%2FbiSFUC3nkfylG6xqnqjZ7wfslNQwVprDAKnBoYS49g1D2bq09ucwvnyxO8EOVsk%2B0%2FupH78X4hv6&X-Amz-Signature=cdf6e2ce4344f1ad55a8a14fdd39bfc6f6d94a2c6f637769f7a0d4920a792506&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CPJRMY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGqlGNPlTX%2BdJD4SxtXIRRD9%2FnPup9w%2FIGjcpPqZQ9xZAiEAxGnyVVfyXuaatImZeZvVXHeC4tUrbxoWBHxKyL8ZC8kqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaO4mhYGJpuLDFN9ircA2tbEw9EQCkGvYV%2BzbZu20nNIWwI94%2FDtnA0QllpagDZ4sIW16e%2Babj%2Fglm%2BdclVAMacRiPWrp6AJjIW32Wt7mfzPJ%2Bu3HH3mu04jUTJ2xjDQjWl1jAHJBGT8GhX%2B9BPVehUL5eX9Cg8sAx60K4R4OMh8rmKrm6of29U6SUb3S%2FJlUtTpN3sATU%2FJq8Tqw1M%2F2AUlXxI%2Ftzl1fvE9usso%2BQx2eNE8ubRtU2iuV%2BJRBA%2FrlmfVB9QlBTIS2V0K2Fi9kF2HeiNR5SB%2BReEqSG1PS6cBs6zABmAeMHi%2FFj96W1%2BCxq5IAZafSXoYwtHqXmY07KrfcnUwLcxZh9sr3SbyimU3dfMOm4%2BOJRVN%2Fe9fcMPv05sgw6ejKtGiJSVa8Dpm5cabfQ%2Bos7zLq47ntwwRZurPhpcwmJfktSAh1qoWmdeHAO6lqBXu%2BXWbaOHmuYN9RMbeL7HNoV1HFZ9OeBkunm9ubpP%2FDRX%2B%2BF7HqjMrrjIMAhpCYQHgioEbZPfGiQKZdrI00odbujhOvOArpRCWKdxulpbhLiugKe5a%2BE3bx9fu5OpCJHj0E5JaX90Mj7xSLlS8CCVVA3o0yi%2BBnHT%2FGzWTUZfttK36umpkvPoamSjybn9oYt1dYQQZfjfMKPy0sAGOqUBD%2BWbmM7KJe7Mm1kyfc6Svqi9rK4OWjKntIhll9Rr2mO1V0w0OS79znV56QrZ9lN0dpY7DB2PO0k%2Bh2zF0XbBDwbfZon%2FGiMpfUe%2FTITSFp6eqW7%2BITLEDXwQBNiLDgpNwBZ13K3j737kZCw%2FbiSFUC3nkfylG6xqnqjZ7wfslNQwVprDAKnBoYS49g1D2bq09ucwvnyxO8EOVsk%2B0%2FupH78X4hv6&X-Amz-Signature=de3671e16e9073e6ed7a3b78b0c7f84fc0ec0658ec174cf769d0bb6ff021c1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CPJRMY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGqlGNPlTX%2BdJD4SxtXIRRD9%2FnPup9w%2FIGjcpPqZQ9xZAiEAxGnyVVfyXuaatImZeZvVXHeC4tUrbxoWBHxKyL8ZC8kqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaO4mhYGJpuLDFN9ircA2tbEw9EQCkGvYV%2BzbZu20nNIWwI94%2FDtnA0QllpagDZ4sIW16e%2Babj%2Fglm%2BdclVAMacRiPWrp6AJjIW32Wt7mfzPJ%2Bu3HH3mu04jUTJ2xjDQjWl1jAHJBGT8GhX%2B9BPVehUL5eX9Cg8sAx60K4R4OMh8rmKrm6of29U6SUb3S%2FJlUtTpN3sATU%2FJq8Tqw1M%2F2AUlXxI%2Ftzl1fvE9usso%2BQx2eNE8ubRtU2iuV%2BJRBA%2FrlmfVB9QlBTIS2V0K2Fi9kF2HeiNR5SB%2BReEqSG1PS6cBs6zABmAeMHi%2FFj96W1%2BCxq5IAZafSXoYwtHqXmY07KrfcnUwLcxZh9sr3SbyimU3dfMOm4%2BOJRVN%2Fe9fcMPv05sgw6ejKtGiJSVa8Dpm5cabfQ%2Bos7zLq47ntwwRZurPhpcwmJfktSAh1qoWmdeHAO6lqBXu%2BXWbaOHmuYN9RMbeL7HNoV1HFZ9OeBkunm9ubpP%2FDRX%2B%2BF7HqjMrrjIMAhpCYQHgioEbZPfGiQKZdrI00odbujhOvOArpRCWKdxulpbhLiugKe5a%2BE3bx9fu5OpCJHj0E5JaX90Mj7xSLlS8CCVVA3o0yi%2BBnHT%2FGzWTUZfttK36umpkvPoamSjybn9oYt1dYQQZfjfMKPy0sAGOqUBD%2BWbmM7KJe7Mm1kyfc6Svqi9rK4OWjKntIhll9Rr2mO1V0w0OS79znV56QrZ9lN0dpY7DB2PO0k%2Bh2zF0XbBDwbfZon%2FGiMpfUe%2FTITSFp6eqW7%2BITLEDXwQBNiLDgpNwBZ13K3j737kZCw%2FbiSFUC3nkfylG6xqnqjZ7wfslNQwVprDAKnBoYS49g1D2bq09ucwvnyxO8EOVsk%2B0%2FupH78X4hv6&X-Amz-Signature=c06eac90227ffe18283df3a22c359309bd740ccc8c90d48181ec0d0bccca87c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
