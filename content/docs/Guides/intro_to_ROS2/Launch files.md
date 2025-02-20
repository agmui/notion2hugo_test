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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJCE5H4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEG7V48EVn%2BF7YuUtSuKZ9lT2cstsekcZCvmKiClWLhPAiEA2Okc0PiifFo5xlPkcYYblrMz39HT9Z5xe4hyJBCZ0u0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmUy13bniOOUoKDgyrcA54cZIwI3cnBzVQeip%2BDtSOTC3ATrj7eduJ0uwN5OZzIVDMSwxklBYhp8iXQuvLk%2B%2BKIW1%2FAYrEvqcVvppds3nDS%2F7ttuX2SSJM%2BlVIwC8pMXDIPzfe9RZVemI5PKCujZ6cL1on5tzgpqjjvkeELTeDosCxh83WqmSzEAdNY1KB9DYCW1VLLvcgDia9YMR4sg2VCQVTYsqws9Nea7HUoE7WDO50h32d9DHdLoKEPy00GGguf20zI4FqffSKgUFt4oPANZTYo0uB%2F1QlCULCZ1mYv8DL%2BbG96dGihskYg9dn6fuwjQpXBPjr8DWue2C9axkPX2C7omXm5f%2FbKRfUCQTfqs3LqNNS5MJbzGTrb0MxDmPWkhijXibzGmco1bWw2mK%2F00MEgFupF0Pax13G1HlhXBF8QD1Z%2FjMUsnkRWB%2B%2FDsTM5ffm8AfH0fUOTKkGVxv%2B%2FbyItVL93dpCBkKb1sR7a8CN6eiLxhb2UzkGZ4s3Gqgn3iCGWVHfNPuv0U7qnHSkgAiM%2Bwnok%2FnV0JxAs8L2erO%2BLnA0RYDZGUOAcwPLDoVojOkBzIVXfOPUjQpo2Q%2BBYVFj9riJRQd9UuPxzmSWA9KLVX8pkQSZ3RELll1sFmwCtQ%2Flw8YK6KqlEMMTY270GOqUBAZG7j1Jq15npNPDCj9kYMq5JM195OveT5FR%2FLaoQgYlcBI1%2FdLa3R1AyswXpkSE77VxROvqV5biJpwQnxvUqYE7%2Bty40JIlfx0dGaSdvgnWOzD8mltGqXnZUGxPayVjGVa5XHOI1KkDvmGNV0dvi23w1Kg0rhTW4Efg9VU0%2FmC4PLiMV0GjZll4wdXKQCa7kfrkB4mlWbFcdePtRu9f48Im5z0TV&X-Amz-Signature=0032a2236a9c870db2f1e5ac299219cc37a099fb7425391861fbca89a6c9be78&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJCE5H4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEG7V48EVn%2BF7YuUtSuKZ9lT2cstsekcZCvmKiClWLhPAiEA2Okc0PiifFo5xlPkcYYblrMz39HT9Z5xe4hyJBCZ0u0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmUy13bniOOUoKDgyrcA54cZIwI3cnBzVQeip%2BDtSOTC3ATrj7eduJ0uwN5OZzIVDMSwxklBYhp8iXQuvLk%2B%2BKIW1%2FAYrEvqcVvppds3nDS%2F7ttuX2SSJM%2BlVIwC8pMXDIPzfe9RZVemI5PKCujZ6cL1on5tzgpqjjvkeELTeDosCxh83WqmSzEAdNY1KB9DYCW1VLLvcgDia9YMR4sg2VCQVTYsqws9Nea7HUoE7WDO50h32d9DHdLoKEPy00GGguf20zI4FqffSKgUFt4oPANZTYo0uB%2F1QlCULCZ1mYv8DL%2BbG96dGihskYg9dn6fuwjQpXBPjr8DWue2C9axkPX2C7omXm5f%2FbKRfUCQTfqs3LqNNS5MJbzGTrb0MxDmPWkhijXibzGmco1bWw2mK%2F00MEgFupF0Pax13G1HlhXBF8QD1Z%2FjMUsnkRWB%2B%2FDsTM5ffm8AfH0fUOTKkGVxv%2B%2FbyItVL93dpCBkKb1sR7a8CN6eiLxhb2UzkGZ4s3Gqgn3iCGWVHfNPuv0U7qnHSkgAiM%2Bwnok%2FnV0JxAs8L2erO%2BLnA0RYDZGUOAcwPLDoVojOkBzIVXfOPUjQpo2Q%2BBYVFj9riJRQd9UuPxzmSWA9KLVX8pkQSZ3RELll1sFmwCtQ%2Flw8YK6KqlEMMTY270GOqUBAZG7j1Jq15npNPDCj9kYMq5JM195OveT5FR%2FLaoQgYlcBI1%2FdLa3R1AyswXpkSE77VxROvqV5biJpwQnxvUqYE7%2Bty40JIlfx0dGaSdvgnWOzD8mltGqXnZUGxPayVjGVa5XHOI1KkDvmGNV0dvi23w1Kg0rhTW4Efg9VU0%2FmC4PLiMV0GjZll4wdXKQCa7kfrkB4mlWbFcdePtRu9f48Im5z0TV&X-Amz-Signature=73cf521fb1792161f391251a99a77d5733a3f3e1d87f7baa068843cfd9160707&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJCE5H4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEG7V48EVn%2BF7YuUtSuKZ9lT2cstsekcZCvmKiClWLhPAiEA2Okc0PiifFo5xlPkcYYblrMz39HT9Z5xe4hyJBCZ0u0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmUy13bniOOUoKDgyrcA54cZIwI3cnBzVQeip%2BDtSOTC3ATrj7eduJ0uwN5OZzIVDMSwxklBYhp8iXQuvLk%2B%2BKIW1%2FAYrEvqcVvppds3nDS%2F7ttuX2SSJM%2BlVIwC8pMXDIPzfe9RZVemI5PKCujZ6cL1on5tzgpqjjvkeELTeDosCxh83WqmSzEAdNY1KB9DYCW1VLLvcgDia9YMR4sg2VCQVTYsqws9Nea7HUoE7WDO50h32d9DHdLoKEPy00GGguf20zI4FqffSKgUFt4oPANZTYo0uB%2F1QlCULCZ1mYv8DL%2BbG96dGihskYg9dn6fuwjQpXBPjr8DWue2C9axkPX2C7omXm5f%2FbKRfUCQTfqs3LqNNS5MJbzGTrb0MxDmPWkhijXibzGmco1bWw2mK%2F00MEgFupF0Pax13G1HlhXBF8QD1Z%2FjMUsnkRWB%2B%2FDsTM5ffm8AfH0fUOTKkGVxv%2B%2FbyItVL93dpCBkKb1sR7a8CN6eiLxhb2UzkGZ4s3Gqgn3iCGWVHfNPuv0U7qnHSkgAiM%2Bwnok%2FnV0JxAs8L2erO%2BLnA0RYDZGUOAcwPLDoVojOkBzIVXfOPUjQpo2Q%2BBYVFj9riJRQd9UuPxzmSWA9KLVX8pkQSZ3RELll1sFmwCtQ%2Flw8YK6KqlEMMTY270GOqUBAZG7j1Jq15npNPDCj9kYMq5JM195OveT5FR%2FLaoQgYlcBI1%2FdLa3R1AyswXpkSE77VxROvqV5biJpwQnxvUqYE7%2Bty40JIlfx0dGaSdvgnWOzD8mltGqXnZUGxPayVjGVa5XHOI1KkDvmGNV0dvi23w1Kg0rhTW4Efg9VU0%2FmC4PLiMV0GjZll4wdXKQCa7kfrkB4mlWbFcdePtRu9f48Im5z0TV&X-Amz-Signature=02d7f2f27047023ea78fca9a3152cf0277d4b2f31fcef722611c31e9a9f70689&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
