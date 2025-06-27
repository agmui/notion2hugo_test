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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWMPLC7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQEDPyykukAZMbnbtCXvWVMjo90XrUhfkogquwo8CdAAiBH%2FZDPbFQ5w5yubZE78YMJZ4L4FpO9qyjTnKR7voQYmCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMH3bnORV0ZquAV%2FDGKtwD9cER5PPeF5Rn2lxDbcun2DeFozR0LLKaqRYuO2CU2ekMnwRHkaPnacVPM43X8HVDPLx6PS8Hosfo3c6HXGHjaDSQ6ubM4%2FUGq4xRP6l6vnLumxPbk%2FFKPDUZhhDfba76To55iF%2FT61in6KH2VyvSuA33tO6asymaA84sLu4Nb44ow34FAxGs7qduRwiEhjbrk%2FGt1IGbQ3EBre4Et5UNV4aOWqQtC8O5zaYAvsVaAIJPpuQNY3TIOqu2SSxR0bq3io6TUTasBV6%2FU%2Fn0CSvUWsprPUuzvaQCxoaJdm7PLiTqOO2Uy6jT137kV9NfB8FPO%2FZVWBKWpN0wT4HAHwjxYOMbpPQGSmPGE70091C75Se7CpY0X5NMlJKw7tM4RDhBxyJt3U0uMw0oJOkA%2FNu2bcoLgiRC2x6EwztW4Uux%2BAXFcorbFU9jOxiZZJWmAXtjjHZ%2FXbze9opuJX5N4DMexzLxb8xvY7eERg2ssfUm5W0zrWknrxnsAL5rz%2B1PGEGp8Q4jIdOuk%2FNi9ivPLLTgZj2m6tjBL%2BXqt2QgpJTkmPImFZ7%2FEefzdtdgpkaeyBt7S4%2FV8o1NyIvpW2H4iDrhDDCR6yL6yGo7Pg2dptvoacq1A0sIJ9yfOrY5SB0wwcr7wgY6pgEnW9s8TemDs%2FAPnHnrcp5QjwpbTXdOBVLWRs4B%2B3D9SBIMgzSosMTcWuvSCnZ4nLTC6Z1IcXxgfhQ2Pz%2BdyyCJVI1SkH07DwjZycJLlG%2BA%2BwhxJXIIa0qNwaapCnXIEVvCrXGXd7NPURUhM1CGSfZUzn7FpxeAHvf%2B%2FCWaOD2ObBfT70m3bBBlXI6hIx%2BDjOCTQ8ttX6ArZ8HUpIVLElt5Fn9Zxdgo&X-Amz-Signature=22061472c2d1db466df2eb9e20008cdd57db0c4501eafc4853fa27983241e410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWMPLC7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQEDPyykukAZMbnbtCXvWVMjo90XrUhfkogquwo8CdAAiBH%2FZDPbFQ5w5yubZE78YMJZ4L4FpO9qyjTnKR7voQYmCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMH3bnORV0ZquAV%2FDGKtwD9cER5PPeF5Rn2lxDbcun2DeFozR0LLKaqRYuO2CU2ekMnwRHkaPnacVPM43X8HVDPLx6PS8Hosfo3c6HXGHjaDSQ6ubM4%2FUGq4xRP6l6vnLumxPbk%2FFKPDUZhhDfba76To55iF%2FT61in6KH2VyvSuA33tO6asymaA84sLu4Nb44ow34FAxGs7qduRwiEhjbrk%2FGt1IGbQ3EBre4Et5UNV4aOWqQtC8O5zaYAvsVaAIJPpuQNY3TIOqu2SSxR0bq3io6TUTasBV6%2FU%2Fn0CSvUWsprPUuzvaQCxoaJdm7PLiTqOO2Uy6jT137kV9NfB8FPO%2FZVWBKWpN0wT4HAHwjxYOMbpPQGSmPGE70091C75Se7CpY0X5NMlJKw7tM4RDhBxyJt3U0uMw0oJOkA%2FNu2bcoLgiRC2x6EwztW4Uux%2BAXFcorbFU9jOxiZZJWmAXtjjHZ%2FXbze9opuJX5N4DMexzLxb8xvY7eERg2ssfUm5W0zrWknrxnsAL5rz%2B1PGEGp8Q4jIdOuk%2FNi9ivPLLTgZj2m6tjBL%2BXqt2QgpJTkmPImFZ7%2FEefzdtdgpkaeyBt7S4%2FV8o1NyIvpW2H4iDrhDDCR6yL6yGo7Pg2dptvoacq1A0sIJ9yfOrY5SB0wwcr7wgY6pgEnW9s8TemDs%2FAPnHnrcp5QjwpbTXdOBVLWRs4B%2B3D9SBIMgzSosMTcWuvSCnZ4nLTC6Z1IcXxgfhQ2Pz%2BdyyCJVI1SkH07DwjZycJLlG%2BA%2BwhxJXIIa0qNwaapCnXIEVvCrXGXd7NPURUhM1CGSfZUzn7FpxeAHvf%2B%2FCWaOD2ObBfT70m3bBBlXI6hIx%2BDjOCTQ8ttX6ArZ8HUpIVLElt5Fn9Zxdgo&X-Amz-Signature=d45b1632739c924283ed4bb897cc7d60b99edf1944bb5dfa20c8fd7d0685f115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWMPLC7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQEDPyykukAZMbnbtCXvWVMjo90XrUhfkogquwo8CdAAiBH%2FZDPbFQ5w5yubZE78YMJZ4L4FpO9qyjTnKR7voQYmCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMH3bnORV0ZquAV%2FDGKtwD9cER5PPeF5Rn2lxDbcun2DeFozR0LLKaqRYuO2CU2ekMnwRHkaPnacVPM43X8HVDPLx6PS8Hosfo3c6HXGHjaDSQ6ubM4%2FUGq4xRP6l6vnLumxPbk%2FFKPDUZhhDfba76To55iF%2FT61in6KH2VyvSuA33tO6asymaA84sLu4Nb44ow34FAxGs7qduRwiEhjbrk%2FGt1IGbQ3EBre4Et5UNV4aOWqQtC8O5zaYAvsVaAIJPpuQNY3TIOqu2SSxR0bq3io6TUTasBV6%2FU%2Fn0CSvUWsprPUuzvaQCxoaJdm7PLiTqOO2Uy6jT137kV9NfB8FPO%2FZVWBKWpN0wT4HAHwjxYOMbpPQGSmPGE70091C75Se7CpY0X5NMlJKw7tM4RDhBxyJt3U0uMw0oJOkA%2FNu2bcoLgiRC2x6EwztW4Uux%2BAXFcorbFU9jOxiZZJWmAXtjjHZ%2FXbze9opuJX5N4DMexzLxb8xvY7eERg2ssfUm5W0zrWknrxnsAL5rz%2B1PGEGp8Q4jIdOuk%2FNi9ivPLLTgZj2m6tjBL%2BXqt2QgpJTkmPImFZ7%2FEefzdtdgpkaeyBt7S4%2FV8o1NyIvpW2H4iDrhDDCR6yL6yGo7Pg2dptvoacq1A0sIJ9yfOrY5SB0wwcr7wgY6pgEnW9s8TemDs%2FAPnHnrcp5QjwpbTXdOBVLWRs4B%2B3D9SBIMgzSosMTcWuvSCnZ4nLTC6Z1IcXxgfhQ2Pz%2BdyyCJVI1SkH07DwjZycJLlG%2BA%2BwhxJXIIa0qNwaapCnXIEVvCrXGXd7NPURUhM1CGSfZUzn7FpxeAHvf%2B%2FCWaOD2ObBfT70m3bBBlXI6hIx%2BDjOCTQ8ttX6ArZ8HUpIVLElt5Fn9Zxdgo&X-Amz-Signature=9da2e6661abaa3ed83512eed8c6184dc762de0c60937fee418b409d5e6f0c2fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
