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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKKH5RV%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDH9ILVcercy01ted2HyweuGEIT24xFvHvN7KEMIB99YAIga6PGZK8hqMFG7UyPIknukJUxYhQv1UIKK%2FxYJOwiEEoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIP5tEjWm6XsYXHwgCrcA%2B98zdRMvKnOMU%2BuJLovk71k%2FLN233i7uXjrJ3RbQRvhpTz4BmzACuuQmOs7Gz2lyQVAVKf%2BfiqEiilqEpKZJ8kZ3nDrZUDoT9mWMBGEQvPzYq7wl5U9JCqPL7kjyx10dXFrGoa3imgEvnhedSNm8dfn39b4g0L52ufOPZcY0ArQLR7oL9EtVgnrrev4BX5zJXJHPGHmAhrMRGqB2cUH6g%2FdJaw%2BNXS9hYhLB6gxC8t7019VZ0nkUiTrScEsv3outMAhA4jyNFu0Ip6nlhsUaqIfp1XR6iWkPIfynlCjqeCk9gnGSxy1ESA9u%2F1H%2BoYbu%2BVF01kO6UwqNxJvOkRSd5IiI3537u04%2Fl5Xacx9QGK9mWF4ewLTdIud7%2FdyjyruAS9JdelKAubnjfyPNyoNIFIBzwtFoi0CYeCmbuMNrp1DgQ1YyCvkNJ50g6wsRKCpHA4kjS3sC%2BdVhxF7WjrOf6727fl5ZCbrN%2FgMBgSwghNXlSMmTSy3PBM3jqz8Kwx6CMnFT3s8zUZ6xlfXS1qxlNomOVx3AWHjuRV0b%2BB5F18unQLSYY6Lmj2Jjjb7mxIgLXUg8vu8veAegcJ5cgDZ0x5bV8HmN%2Bn4ftggyFoodcpWJj3YX7TBPxLE0vuvMJjZ7L4GOqUBNmdkTJc5Du%2FZId8pB7yMBTQaVYDexry6FksWeEv%2BPRK%2FdDJng0hXJ74SzYE0B3%2FsXXFAC3IXRlJi5N%2BRGcREHfMW%2Bjapwgg8utbMUypeI9%2Bemf9fDtgR%2BuxGdf%2Bz9lw5OPAOXfq9pQZ5rzpmsEXHmtDI1AvZeFrXoqfQ5PkmR5SaIOks158jOouisSGPBwxtcHimzWSuRRzoypX9L9Vj1L4rq1FP&X-Amz-Signature=7738eef37a3eefa8eff738e03695939faa39b19389976bd8695a8d2d15382581&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKKH5RV%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDH9ILVcercy01ted2HyweuGEIT24xFvHvN7KEMIB99YAIga6PGZK8hqMFG7UyPIknukJUxYhQv1UIKK%2FxYJOwiEEoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIP5tEjWm6XsYXHwgCrcA%2B98zdRMvKnOMU%2BuJLovk71k%2FLN233i7uXjrJ3RbQRvhpTz4BmzACuuQmOs7Gz2lyQVAVKf%2BfiqEiilqEpKZJ8kZ3nDrZUDoT9mWMBGEQvPzYq7wl5U9JCqPL7kjyx10dXFrGoa3imgEvnhedSNm8dfn39b4g0L52ufOPZcY0ArQLR7oL9EtVgnrrev4BX5zJXJHPGHmAhrMRGqB2cUH6g%2FdJaw%2BNXS9hYhLB6gxC8t7019VZ0nkUiTrScEsv3outMAhA4jyNFu0Ip6nlhsUaqIfp1XR6iWkPIfynlCjqeCk9gnGSxy1ESA9u%2F1H%2BoYbu%2BVF01kO6UwqNxJvOkRSd5IiI3537u04%2Fl5Xacx9QGK9mWF4ewLTdIud7%2FdyjyruAS9JdelKAubnjfyPNyoNIFIBzwtFoi0CYeCmbuMNrp1DgQ1YyCvkNJ50g6wsRKCpHA4kjS3sC%2BdVhxF7WjrOf6727fl5ZCbrN%2FgMBgSwghNXlSMmTSy3PBM3jqz8Kwx6CMnFT3s8zUZ6xlfXS1qxlNomOVx3AWHjuRV0b%2BB5F18unQLSYY6Lmj2Jjjb7mxIgLXUg8vu8veAegcJ5cgDZ0x5bV8HmN%2Bn4ftggyFoodcpWJj3YX7TBPxLE0vuvMJjZ7L4GOqUBNmdkTJc5Du%2FZId8pB7yMBTQaVYDexry6FksWeEv%2BPRK%2FdDJng0hXJ74SzYE0B3%2FsXXFAC3IXRlJi5N%2BRGcREHfMW%2Bjapwgg8utbMUypeI9%2Bemf9fDtgR%2BuxGdf%2Bz9lw5OPAOXfq9pQZ5rzpmsEXHmtDI1AvZeFrXoqfQ5PkmR5SaIOks158jOouisSGPBwxtcHimzWSuRRzoypX9L9Vj1L4rq1FP&X-Amz-Signature=3e4d0b60ebb9ed0998772b69eefdea9678802a2f1827b9a205d926464a49a646&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKKH5RV%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDH9ILVcercy01ted2HyweuGEIT24xFvHvN7KEMIB99YAIga6PGZK8hqMFG7UyPIknukJUxYhQv1UIKK%2FxYJOwiEEoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIP5tEjWm6XsYXHwgCrcA%2B98zdRMvKnOMU%2BuJLovk71k%2FLN233i7uXjrJ3RbQRvhpTz4BmzACuuQmOs7Gz2lyQVAVKf%2BfiqEiilqEpKZJ8kZ3nDrZUDoT9mWMBGEQvPzYq7wl5U9JCqPL7kjyx10dXFrGoa3imgEvnhedSNm8dfn39b4g0L52ufOPZcY0ArQLR7oL9EtVgnrrev4BX5zJXJHPGHmAhrMRGqB2cUH6g%2FdJaw%2BNXS9hYhLB6gxC8t7019VZ0nkUiTrScEsv3outMAhA4jyNFu0Ip6nlhsUaqIfp1XR6iWkPIfynlCjqeCk9gnGSxy1ESA9u%2F1H%2BoYbu%2BVF01kO6UwqNxJvOkRSd5IiI3537u04%2Fl5Xacx9QGK9mWF4ewLTdIud7%2FdyjyruAS9JdelKAubnjfyPNyoNIFIBzwtFoi0CYeCmbuMNrp1DgQ1YyCvkNJ50g6wsRKCpHA4kjS3sC%2BdVhxF7WjrOf6727fl5ZCbrN%2FgMBgSwghNXlSMmTSy3PBM3jqz8Kwx6CMnFT3s8zUZ6xlfXS1qxlNomOVx3AWHjuRV0b%2BB5F18unQLSYY6Lmj2Jjjb7mxIgLXUg8vu8veAegcJ5cgDZ0x5bV8HmN%2Bn4ftggyFoodcpWJj3YX7TBPxLE0vuvMJjZ7L4GOqUBNmdkTJc5Du%2FZId8pB7yMBTQaVYDexry6FksWeEv%2BPRK%2FdDJng0hXJ74SzYE0B3%2FsXXFAC3IXRlJi5N%2BRGcREHfMW%2Bjapwgg8utbMUypeI9%2Bemf9fDtgR%2BuxGdf%2Bz9lw5OPAOXfq9pQZ5rzpmsEXHmtDI1AvZeFrXoqfQ5PkmR5SaIOks158jOouisSGPBwxtcHimzWSuRRzoypX9L9Vj1L4rq1FP&X-Amz-Signature=2073e48debaf5bc385bd5d40ec9d006a60b4e681bba92b782e34bde3be60d4c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
