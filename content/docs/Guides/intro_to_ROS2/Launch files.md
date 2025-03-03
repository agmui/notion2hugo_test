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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUYRXP6R%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX4joJnbr%2BGZREnoIhEHJbBDiHbIaK2XlXW1uViHMrgAiAtkmFb9nc8MnUihPa6%2BNgUxJ%2F7OUzLOWzKyjMcOnrWGSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMaqRWfUJG23ive3lKtwDx04fDHmVBS%2B7O3yAVVro%2FbAoIM5A0kDtpGllEnS57YlmHKWIKbDGDS9lAsXbMcbXBvT5umKVyEHDF95uU4UmCZtVOhaGysyIZFQg42z2%2BufxVnZEKH9CeGG6fPx%2F5ZnKgrJ4qPLAOT2rCxRRniqilwBopGpBXRb2ZE10qjWN8ClNA5bUc9yW03dRlANoED8fQ14o4A3UsiLTaEG90iWnSKx3Ao%2Bdq7X%2BGWx40QAi%2FCKvGL541Tl%2F%2FB0HdJOfISbcFmpgIArxxlCHhsYanxOZpNnLOMS3gvg%2BT6dPX1Bkq7LFMtVwIEHt9TfTlnyelBwZG1lZpvISSrnGBLihuH98hvrz%2Bhfm2f8j6PR2Ds9atFuri4Vu0su4qL4CM3SrGnIZZxV19CJxfIGMsdDnI%2Bs3yj4AYfRnl7LEyUZjJt4zxJdbZQS813Vtn2kApBNxKICA%2FsEO%2B4VNjD6ZbF7gmXM6MR%2BGWxtzWnNyVyyESOOjXMS4OnkLWA2ZCp2Pyxf9VC2W9Ic6EGfmm3OjWjQXSz%2B4LWmpKgHBg4G9t1LlT82Ugxdw08jWA4GhOnuuvz2QiuCjwR9ojH1Tdzu028CYTzxY%2BSxcjbBvVr24iixnWyeZ3tlaK508u%2FPOAi2HCY8w7ZaVvgY6pgE9hVwe4D4udPHK0tj0NLfQgJ0urtakZ9EXJdqk0GgyNqPU1ZMM8Yn%2BM01YoO3P%2FP8zlsmjK5xO1fg1BzaCSbFMARCgUXimN8cnwG4uk3Icnl%2B%2BO0ELNbYKs8gtjW6qisY7MBeDop5xe%2FxvqVyWLXobyzRlTuyRT59qpKV1tkrPYFGhfohw%2FwGNr87RKIrNBvdmksazM9nwi6OaNFjbzCsE54PEOWu9&X-Amz-Signature=5a24c6fdcc2095fcdad1d0f7e878ca43174e69d149af719bc623bdc049c23109&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUYRXP6R%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX4joJnbr%2BGZREnoIhEHJbBDiHbIaK2XlXW1uViHMrgAiAtkmFb9nc8MnUihPa6%2BNgUxJ%2F7OUzLOWzKyjMcOnrWGSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMaqRWfUJG23ive3lKtwDx04fDHmVBS%2B7O3yAVVro%2FbAoIM5A0kDtpGllEnS57YlmHKWIKbDGDS9lAsXbMcbXBvT5umKVyEHDF95uU4UmCZtVOhaGysyIZFQg42z2%2BufxVnZEKH9CeGG6fPx%2F5ZnKgrJ4qPLAOT2rCxRRniqilwBopGpBXRb2ZE10qjWN8ClNA5bUc9yW03dRlANoED8fQ14o4A3UsiLTaEG90iWnSKx3Ao%2Bdq7X%2BGWx40QAi%2FCKvGL541Tl%2F%2FB0HdJOfISbcFmpgIArxxlCHhsYanxOZpNnLOMS3gvg%2BT6dPX1Bkq7LFMtVwIEHt9TfTlnyelBwZG1lZpvISSrnGBLihuH98hvrz%2Bhfm2f8j6PR2Ds9atFuri4Vu0su4qL4CM3SrGnIZZxV19CJxfIGMsdDnI%2Bs3yj4AYfRnl7LEyUZjJt4zxJdbZQS813Vtn2kApBNxKICA%2FsEO%2B4VNjD6ZbF7gmXM6MR%2BGWxtzWnNyVyyESOOjXMS4OnkLWA2ZCp2Pyxf9VC2W9Ic6EGfmm3OjWjQXSz%2B4LWmpKgHBg4G9t1LlT82Ugxdw08jWA4GhOnuuvz2QiuCjwR9ojH1Tdzu028CYTzxY%2BSxcjbBvVr24iixnWyeZ3tlaK508u%2FPOAi2HCY8w7ZaVvgY6pgE9hVwe4D4udPHK0tj0NLfQgJ0urtakZ9EXJdqk0GgyNqPU1ZMM8Yn%2BM01YoO3P%2FP8zlsmjK5xO1fg1BzaCSbFMARCgUXimN8cnwG4uk3Icnl%2B%2BO0ELNbYKs8gtjW6qisY7MBeDop5xe%2FxvqVyWLXobyzRlTuyRT59qpKV1tkrPYFGhfohw%2FwGNr87RKIrNBvdmksazM9nwi6OaNFjbzCsE54PEOWu9&X-Amz-Signature=f9c77db14046afb8372db5ef0cdf3232c5193db220d6d088822e9a0d407ec0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUYRXP6R%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX4joJnbr%2BGZREnoIhEHJbBDiHbIaK2XlXW1uViHMrgAiAtkmFb9nc8MnUihPa6%2BNgUxJ%2F7OUzLOWzKyjMcOnrWGSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMaqRWfUJG23ive3lKtwDx04fDHmVBS%2B7O3yAVVro%2FbAoIM5A0kDtpGllEnS57YlmHKWIKbDGDS9lAsXbMcbXBvT5umKVyEHDF95uU4UmCZtVOhaGysyIZFQg42z2%2BufxVnZEKH9CeGG6fPx%2F5ZnKgrJ4qPLAOT2rCxRRniqilwBopGpBXRb2ZE10qjWN8ClNA5bUc9yW03dRlANoED8fQ14o4A3UsiLTaEG90iWnSKx3Ao%2Bdq7X%2BGWx40QAi%2FCKvGL541Tl%2F%2FB0HdJOfISbcFmpgIArxxlCHhsYanxOZpNnLOMS3gvg%2BT6dPX1Bkq7LFMtVwIEHt9TfTlnyelBwZG1lZpvISSrnGBLihuH98hvrz%2Bhfm2f8j6PR2Ds9atFuri4Vu0su4qL4CM3SrGnIZZxV19CJxfIGMsdDnI%2Bs3yj4AYfRnl7LEyUZjJt4zxJdbZQS813Vtn2kApBNxKICA%2FsEO%2B4VNjD6ZbF7gmXM6MR%2BGWxtzWnNyVyyESOOjXMS4OnkLWA2ZCp2Pyxf9VC2W9Ic6EGfmm3OjWjQXSz%2B4LWmpKgHBg4G9t1LlT82Ugxdw08jWA4GhOnuuvz2QiuCjwR9ojH1Tdzu028CYTzxY%2BSxcjbBvVr24iixnWyeZ3tlaK508u%2FPOAi2HCY8w7ZaVvgY6pgE9hVwe4D4udPHK0tj0NLfQgJ0urtakZ9EXJdqk0GgyNqPU1ZMM8Yn%2BM01YoO3P%2FP8zlsmjK5xO1fg1BzaCSbFMARCgUXimN8cnwG4uk3Icnl%2B%2BO0ELNbYKs8gtjW6qisY7MBeDop5xe%2FxvqVyWLXobyzRlTuyRT59qpKV1tkrPYFGhfohw%2FwGNr87RKIrNBvdmksazM9nwi6OaNFjbzCsE54PEOWu9&X-Amz-Signature=e9bcad2b9f145b69498de5a5254edb53ab0f2ea733c5725c70b329de68288229&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
