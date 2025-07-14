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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDO64AZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAJolGumLAOCzT0yyY6pupnKkINoupnHI4jiA1QaKFy1AiATynRN6X6oanOv78ixk5PJMKYDlHGnksmf9IvBA%2F5cCCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPF3WHx9fptKtgW%2FGKtwD8jExPYiewAqMk74nwd6rKcww%2FRmW0RSObOVvCavcfYSiaboNO42Ty3dAw8Qbe%2F%2BupnuKB%2FwzetzVcnFr8OIAORtWah7B4tbSqel4%2B%2B%2Fem41kQ1tFpvlhU3BcIxeX%2FOhgsBgYUkTNc3pzimQT5ty8%2BtnNt%2BjNnZ3xI85zegGSvNFwgN9eMAtUKvmVhS%2F4umPqpI3tZ6YZeZUGbGPJ2X7dVZMSSSIhqSyzJ0Iz9IZQIN8BBya059Ws2ISMImg%2BhJ5h6kN%2BVrK5K22BwCEMLCkRchW7jtHhtYkH7Bo%2F94ETywx9otWXdCcS%2FcLtT4OEUhqwxubgGrV2LMwmwQWhbKNr%2FXJ3uCXeYCS5myXJTih00ZvupRZp4SLT8J%2FnMQJL2zeKGKI38XiQVIAkx6D5di2ZWRJSwKEvFZiRp61eDbyuJH9iGQT1t9XikmOGEqmpeC5pO4%2BQfEbh14wu51JuMP0JOVCcWleZqUz7%2Bjq2p9W%2Fv%2FG6g1Mf0rfwDy3d%2FbDlxf4JPDdQ3fuCdQ4GiO6%2Fm9Dxoifw2IXQ73NMvrAF%2B8GVDyjKa9oQkI21clSx53mN8hqCkO%2FhHhO35NBxypUAtgQZqtsEvlRWkRPVNf2ddFiD8Pt2DiVspdP68PndAQ0wnc3RwwY6pgHhYIxCVPBqUPcB9FSwkO7DvpuTt5f1pf0oLCpONaO3OIGsSpTDPh%2FU4XsotRhFtDTmQ9LypJkVPgDj9UpJVajL%2FHi8OGvfK1IwiRnzoiLmpwhIKyPoTue8fyShWie0jFZam4sRpwnSNc37eqF7sH7fF6fXAm1u1xSx5OBKwqOYIR1sFBBbV3nEGYLWqmfkvSfBaGikQAUeLsTSgGFIeEc4g7e0Zrph&X-Amz-Signature=9dd19c16ac26a354c7c2e7b70e3e8dc7bb923311c9ef69c4bb8e9da9be77f4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDO64AZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAJolGumLAOCzT0yyY6pupnKkINoupnHI4jiA1QaKFy1AiATynRN6X6oanOv78ixk5PJMKYDlHGnksmf9IvBA%2F5cCCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPF3WHx9fptKtgW%2FGKtwD8jExPYiewAqMk74nwd6rKcww%2FRmW0RSObOVvCavcfYSiaboNO42Ty3dAw8Qbe%2F%2BupnuKB%2FwzetzVcnFr8OIAORtWah7B4tbSqel4%2B%2B%2Fem41kQ1tFpvlhU3BcIxeX%2FOhgsBgYUkTNc3pzimQT5ty8%2BtnNt%2BjNnZ3xI85zegGSvNFwgN9eMAtUKvmVhS%2F4umPqpI3tZ6YZeZUGbGPJ2X7dVZMSSSIhqSyzJ0Iz9IZQIN8BBya059Ws2ISMImg%2BhJ5h6kN%2BVrK5K22BwCEMLCkRchW7jtHhtYkH7Bo%2F94ETywx9otWXdCcS%2FcLtT4OEUhqwxubgGrV2LMwmwQWhbKNr%2FXJ3uCXeYCS5myXJTih00ZvupRZp4SLT8J%2FnMQJL2zeKGKI38XiQVIAkx6D5di2ZWRJSwKEvFZiRp61eDbyuJH9iGQT1t9XikmOGEqmpeC5pO4%2BQfEbh14wu51JuMP0JOVCcWleZqUz7%2Bjq2p9W%2Fv%2FG6g1Mf0rfwDy3d%2FbDlxf4JPDdQ3fuCdQ4GiO6%2Fm9Dxoifw2IXQ73NMvrAF%2B8GVDyjKa9oQkI21clSx53mN8hqCkO%2FhHhO35NBxypUAtgQZqtsEvlRWkRPVNf2ddFiD8Pt2DiVspdP68PndAQ0wnc3RwwY6pgHhYIxCVPBqUPcB9FSwkO7DvpuTt5f1pf0oLCpONaO3OIGsSpTDPh%2FU4XsotRhFtDTmQ9LypJkVPgDj9UpJVajL%2FHi8OGvfK1IwiRnzoiLmpwhIKyPoTue8fyShWie0jFZam4sRpwnSNc37eqF7sH7fF6fXAm1u1xSx5OBKwqOYIR1sFBBbV3nEGYLWqmfkvSfBaGikQAUeLsTSgGFIeEc4g7e0Zrph&X-Amz-Signature=8df9e46e7f5260077c42d9533ea7ae6bcaf7f3000c9b9f58fae618e07beeed2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDO64AZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAJolGumLAOCzT0yyY6pupnKkINoupnHI4jiA1QaKFy1AiATynRN6X6oanOv78ixk5PJMKYDlHGnksmf9IvBA%2F5cCCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMPF3WHx9fptKtgW%2FGKtwD8jExPYiewAqMk74nwd6rKcww%2FRmW0RSObOVvCavcfYSiaboNO42Ty3dAw8Qbe%2F%2BupnuKB%2FwzetzVcnFr8OIAORtWah7B4tbSqel4%2B%2B%2Fem41kQ1tFpvlhU3BcIxeX%2FOhgsBgYUkTNc3pzimQT5ty8%2BtnNt%2BjNnZ3xI85zegGSvNFwgN9eMAtUKvmVhS%2F4umPqpI3tZ6YZeZUGbGPJ2X7dVZMSSSIhqSyzJ0Iz9IZQIN8BBya059Ws2ISMImg%2BhJ5h6kN%2BVrK5K22BwCEMLCkRchW7jtHhtYkH7Bo%2F94ETywx9otWXdCcS%2FcLtT4OEUhqwxubgGrV2LMwmwQWhbKNr%2FXJ3uCXeYCS5myXJTih00ZvupRZp4SLT8J%2FnMQJL2zeKGKI38XiQVIAkx6D5di2ZWRJSwKEvFZiRp61eDbyuJH9iGQT1t9XikmOGEqmpeC5pO4%2BQfEbh14wu51JuMP0JOVCcWleZqUz7%2Bjq2p9W%2Fv%2FG6g1Mf0rfwDy3d%2FbDlxf4JPDdQ3fuCdQ4GiO6%2Fm9Dxoifw2IXQ73NMvrAF%2B8GVDyjKa9oQkI21clSx53mN8hqCkO%2FhHhO35NBxypUAtgQZqtsEvlRWkRPVNf2ddFiD8Pt2DiVspdP68PndAQ0wnc3RwwY6pgHhYIxCVPBqUPcB9FSwkO7DvpuTt5f1pf0oLCpONaO3OIGsSpTDPh%2FU4XsotRhFtDTmQ9LypJkVPgDj9UpJVajL%2FHi8OGvfK1IwiRnzoiLmpwhIKyPoTue8fyShWie0jFZam4sRpwnSNc37eqF7sH7fF6fXAm1u1xSx5OBKwqOYIR1sFBBbV3nEGYLWqmfkvSfBaGikQAUeLsTSgGFIeEc4g7e0Zrph&X-Amz-Signature=9da723369e7a22dc504edbd6cbb304f4c9842afed29787c748b5d350568cf6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
