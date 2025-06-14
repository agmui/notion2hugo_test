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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKOXNYF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGs6ikNyFFBjWQsJUvOcehpfm4isdsPzlUDCX8wT34pvAiEAoaGn7py%2BzfpfGBS4A9U1YGwJQdWXM%2B8aJZdkj9J99Q8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDhUBv1x8Gr6YeVrgSrcA%2BvEiazLVWR4zQ01tcsOEWQk44y91Xfevl2xn9XIpkW5asPLBuJ2ptlOShOa87II1wGc7w1a%2BKG%2FRIzrL%2Fb3MB5m0gMUrnzSD6e7Cpevi6PFn1%2Fh9%2BRssWzPc7YYuud8QHo%2Fh9DJriDlMS8zsRxk4Pi7SyzzZ%2BqMlcZUUF9eyazOMp9banMXE1QjoliyyFz9PTW763tk%2FHI6X%2Bwwl27DBIJrtzOmnfEDBrMcqPBgIlal4sdEO%2BO%2FoslpNIz4mBoawiK%2B49zo3NuqDNEFZjJ%2BBKPDzG7DBcN3lblb%2FJMy8BcZaRjzGY7WTMn6vVQziZWLAM1dkOhSJBSFHyVmz72mZh53HVwA%2FcRZXbq4O4y2D3fp2Ft%2FUCd3I2xRXbvBDJ4akMwBNc%2BLBWowU2q1sfKpUSON9rxc7R9fLwFctrWa6Djvktvti7oPRgGf7ryJqRMxQQvLuiTovfJu646Y60vyCKBH5fQRChU1ExF09dT29HvMUKkLyEghEVs09M%2BwoYxq%2FYq7%2BbLT%2Fs0u6maeE7hN6fIBpp5J91icD51fYzMjnXy4m%2FG4Eni1LIGm3DCQ%2Bc6tboip3Bzw34FYv0S8ILUdTiQR2yBq1xvtUu43Yv%2FIuvboD%2FGq6zyNNdCZXuG%2BMLO7tsIGOqUBF4Q9ZS079%2F5cxoerbYG6RMDjS5jrzjhIedVmGsHHtbAcaGCEj1KAeZaBQCcWOuXFoNpciYadLePzo%2FZFDkqxIoFIC65hSLHKIsBN00MwGsVHvSHK%2FquyewFY0ibGKy1uQ3eZVa0nhkfGb1qHhJclXi5rPJnAQted2WdSYa37bx%2F4SEpJADbc67KgFWdB4x33%2FB2K9bQU1pCO9nIl5V6Cl2QegjOx&X-Amz-Signature=01f483b8eb1a9d069b28ae9bd2ba966f7f07960365c4cf0a030cbf2d7ded9442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKOXNYF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGs6ikNyFFBjWQsJUvOcehpfm4isdsPzlUDCX8wT34pvAiEAoaGn7py%2BzfpfGBS4A9U1YGwJQdWXM%2B8aJZdkj9J99Q8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDhUBv1x8Gr6YeVrgSrcA%2BvEiazLVWR4zQ01tcsOEWQk44y91Xfevl2xn9XIpkW5asPLBuJ2ptlOShOa87II1wGc7w1a%2BKG%2FRIzrL%2Fb3MB5m0gMUrnzSD6e7Cpevi6PFn1%2Fh9%2BRssWzPc7YYuud8QHo%2Fh9DJriDlMS8zsRxk4Pi7SyzzZ%2BqMlcZUUF9eyazOMp9banMXE1QjoliyyFz9PTW763tk%2FHI6X%2Bwwl27DBIJrtzOmnfEDBrMcqPBgIlal4sdEO%2BO%2FoslpNIz4mBoawiK%2B49zo3NuqDNEFZjJ%2BBKPDzG7DBcN3lblb%2FJMy8BcZaRjzGY7WTMn6vVQziZWLAM1dkOhSJBSFHyVmz72mZh53HVwA%2FcRZXbq4O4y2D3fp2Ft%2FUCd3I2xRXbvBDJ4akMwBNc%2BLBWowU2q1sfKpUSON9rxc7R9fLwFctrWa6Djvktvti7oPRgGf7ryJqRMxQQvLuiTovfJu646Y60vyCKBH5fQRChU1ExF09dT29HvMUKkLyEghEVs09M%2BwoYxq%2FYq7%2BbLT%2Fs0u6maeE7hN6fIBpp5J91icD51fYzMjnXy4m%2FG4Eni1LIGm3DCQ%2Bc6tboip3Bzw34FYv0S8ILUdTiQR2yBq1xvtUu43Yv%2FIuvboD%2FGq6zyNNdCZXuG%2BMLO7tsIGOqUBF4Q9ZS079%2F5cxoerbYG6RMDjS5jrzjhIedVmGsHHtbAcaGCEj1KAeZaBQCcWOuXFoNpciYadLePzo%2FZFDkqxIoFIC65hSLHKIsBN00MwGsVHvSHK%2FquyewFY0ibGKy1uQ3eZVa0nhkfGb1qHhJclXi5rPJnAQted2WdSYa37bx%2F4SEpJADbc67KgFWdB4x33%2FB2K9bQU1pCO9nIl5V6Cl2QegjOx&X-Amz-Signature=9b0323a60acc44ff0650d6859eca4325e8df744dca72e5bc5c07893ba66fdbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKOXNYF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGs6ikNyFFBjWQsJUvOcehpfm4isdsPzlUDCX8wT34pvAiEAoaGn7py%2BzfpfGBS4A9U1YGwJQdWXM%2B8aJZdkj9J99Q8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDhUBv1x8Gr6YeVrgSrcA%2BvEiazLVWR4zQ01tcsOEWQk44y91Xfevl2xn9XIpkW5asPLBuJ2ptlOShOa87II1wGc7w1a%2BKG%2FRIzrL%2Fb3MB5m0gMUrnzSD6e7Cpevi6PFn1%2Fh9%2BRssWzPc7YYuud8QHo%2Fh9DJriDlMS8zsRxk4Pi7SyzzZ%2BqMlcZUUF9eyazOMp9banMXE1QjoliyyFz9PTW763tk%2FHI6X%2Bwwl27DBIJrtzOmnfEDBrMcqPBgIlal4sdEO%2BO%2FoslpNIz4mBoawiK%2B49zo3NuqDNEFZjJ%2BBKPDzG7DBcN3lblb%2FJMy8BcZaRjzGY7WTMn6vVQziZWLAM1dkOhSJBSFHyVmz72mZh53HVwA%2FcRZXbq4O4y2D3fp2Ft%2FUCd3I2xRXbvBDJ4akMwBNc%2BLBWowU2q1sfKpUSON9rxc7R9fLwFctrWa6Djvktvti7oPRgGf7ryJqRMxQQvLuiTovfJu646Y60vyCKBH5fQRChU1ExF09dT29HvMUKkLyEghEVs09M%2BwoYxq%2FYq7%2BbLT%2Fs0u6maeE7hN6fIBpp5J91icD51fYzMjnXy4m%2FG4Eni1LIGm3DCQ%2Bc6tboip3Bzw34FYv0S8ILUdTiQR2yBq1xvtUu43Yv%2FIuvboD%2FGq6zyNNdCZXuG%2BMLO7tsIGOqUBF4Q9ZS079%2F5cxoerbYG6RMDjS5jrzjhIedVmGsHHtbAcaGCEj1KAeZaBQCcWOuXFoNpciYadLePzo%2FZFDkqxIoFIC65hSLHKIsBN00MwGsVHvSHK%2FquyewFY0ibGKy1uQ3eZVa0nhkfGb1qHhJclXi5rPJnAQted2WdSYa37bx%2F4SEpJADbc67KgFWdB4x33%2FB2K9bQU1pCO9nIl5V6Cl2QegjOx&X-Amz-Signature=1cb4c8b3a77c31854a678b298495bdfae419af03075f4b45647191c200be95d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
