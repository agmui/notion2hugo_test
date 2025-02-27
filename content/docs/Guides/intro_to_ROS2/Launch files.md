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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RCBOTS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGref8mmtlNbcAQKhviGDXwnn18dHSacTHGt%2FzsbB8rMAiEA6mitZXiu451vGhaEE8LtrRNCt0eE0LnQ5NZyjlqATkUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKNiV1ufG%2BkmC43JxCrcA6%2FzKBGUGem3pUAq4pc1HfmSOh81CoYC%2BByfsJFeZu3xbzjPB4hEjyfYHoNTPWs2KNdTht3xk2qM8pkmkhDxHtvW7SPVs0Kk4BhZSGFQCxzsXgtYU6oPj5M29LPWA0WubAoPOwWxIt0Uz2cuPAlpKchsKDgddIYyk5dp1hKKfnLj8HSzMjXcs%2BbRhX3%2FQ2j4rCAa7kIMm%2BwkMqQPEzjABs9oAFxTEzTTA30cI5mTxjH5iq3BibPlwoh0L2kyu07qBJ9FPnzcjDLB%2BD3Huz05wp3UW5pw%2FH5IlOYGCRQlMD9se0IPKE9ph%2BCngw9Chp1Dw%2F08UK63aeB%2FkzE1hWzfXE63KiXSpU5IEjppaZvU%2By396pgzUIfr9ShTYgG654w9KRKyRLxIcw0UVtN9M8OnYjv3TBNbIS%2BLOGGye0hsV0j78RSuP0azrvhSmCJHMwYrEWkl5%2B0RlfGmc1Qe5Y%2BXvSgVZBv5XHThvnjDIxP5LtuNS7i0Ons7sm84ADmj7Q3iZ5%2F%2Bf%2ForojDMQEyCrnmDJ%2FeRsgqhKPV7CBCr6HC2XdRAmKGhzTvSC6S3v1ZLfGmPn2lL8vlSSHoZxQi9BAnfPYNnZMlx%2B9Mo6cgbPU3BRVCQaU2t908AOfJZDbMJMLrQ%2F70GOqUBThzuNF0uGIQWr03GqWESVPQ%2BF867lq22A2KtILWFOk9z5HxrIfcLLa8sr6JpEJAsgbvED%2BPaSiyOAn2oBfRevxrisQ3qmB8oy2hsqcfsyghZIasr0L2VDg8Rz4D%2Fy8CnvXXUyYlzeEnCpnr5F5JCk7fs5VsFVkO7DDf47MdFnvFRP8VgqZyis%2FYFMz2BEvCsV4zw7y%2FDbgzlDlet5woflPf5V6D%2B&X-Amz-Signature=399a4a9463a429ca87f3803088fa8718271428e729f73f590dc323627fc1d3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RCBOTS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGref8mmtlNbcAQKhviGDXwnn18dHSacTHGt%2FzsbB8rMAiEA6mitZXiu451vGhaEE8LtrRNCt0eE0LnQ5NZyjlqATkUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKNiV1ufG%2BkmC43JxCrcA6%2FzKBGUGem3pUAq4pc1HfmSOh81CoYC%2BByfsJFeZu3xbzjPB4hEjyfYHoNTPWs2KNdTht3xk2qM8pkmkhDxHtvW7SPVs0Kk4BhZSGFQCxzsXgtYU6oPj5M29LPWA0WubAoPOwWxIt0Uz2cuPAlpKchsKDgddIYyk5dp1hKKfnLj8HSzMjXcs%2BbRhX3%2FQ2j4rCAa7kIMm%2BwkMqQPEzjABs9oAFxTEzTTA30cI5mTxjH5iq3BibPlwoh0L2kyu07qBJ9FPnzcjDLB%2BD3Huz05wp3UW5pw%2FH5IlOYGCRQlMD9se0IPKE9ph%2BCngw9Chp1Dw%2F08UK63aeB%2FkzE1hWzfXE63KiXSpU5IEjppaZvU%2By396pgzUIfr9ShTYgG654w9KRKyRLxIcw0UVtN9M8OnYjv3TBNbIS%2BLOGGye0hsV0j78RSuP0azrvhSmCJHMwYrEWkl5%2B0RlfGmc1Qe5Y%2BXvSgVZBv5XHThvnjDIxP5LtuNS7i0Ons7sm84ADmj7Q3iZ5%2F%2Bf%2ForojDMQEyCrnmDJ%2FeRsgqhKPV7CBCr6HC2XdRAmKGhzTvSC6S3v1ZLfGmPn2lL8vlSSHoZxQi9BAnfPYNnZMlx%2B9Mo6cgbPU3BRVCQaU2t908AOfJZDbMJMLrQ%2F70GOqUBThzuNF0uGIQWr03GqWESVPQ%2BF867lq22A2KtILWFOk9z5HxrIfcLLa8sr6JpEJAsgbvED%2BPaSiyOAn2oBfRevxrisQ3qmB8oy2hsqcfsyghZIasr0L2VDg8Rz4D%2Fy8CnvXXUyYlzeEnCpnr5F5JCk7fs5VsFVkO7DDf47MdFnvFRP8VgqZyis%2FYFMz2BEvCsV4zw7y%2FDbgzlDlet5woflPf5V6D%2B&X-Amz-Signature=888b5952e57e13a925ba21de889efc81f96dc839ec96a0a3120ff7fdbeb0ba6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RCBOTS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGref8mmtlNbcAQKhviGDXwnn18dHSacTHGt%2FzsbB8rMAiEA6mitZXiu451vGhaEE8LtrRNCt0eE0LnQ5NZyjlqATkUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKNiV1ufG%2BkmC43JxCrcA6%2FzKBGUGem3pUAq4pc1HfmSOh81CoYC%2BByfsJFeZu3xbzjPB4hEjyfYHoNTPWs2KNdTht3xk2qM8pkmkhDxHtvW7SPVs0Kk4BhZSGFQCxzsXgtYU6oPj5M29LPWA0WubAoPOwWxIt0Uz2cuPAlpKchsKDgddIYyk5dp1hKKfnLj8HSzMjXcs%2BbRhX3%2FQ2j4rCAa7kIMm%2BwkMqQPEzjABs9oAFxTEzTTA30cI5mTxjH5iq3BibPlwoh0L2kyu07qBJ9FPnzcjDLB%2BD3Huz05wp3UW5pw%2FH5IlOYGCRQlMD9se0IPKE9ph%2BCngw9Chp1Dw%2F08UK63aeB%2FkzE1hWzfXE63KiXSpU5IEjppaZvU%2By396pgzUIfr9ShTYgG654w9KRKyRLxIcw0UVtN9M8OnYjv3TBNbIS%2BLOGGye0hsV0j78RSuP0azrvhSmCJHMwYrEWkl5%2B0RlfGmc1Qe5Y%2BXvSgVZBv5XHThvnjDIxP5LtuNS7i0Ons7sm84ADmj7Q3iZ5%2F%2Bf%2ForojDMQEyCrnmDJ%2FeRsgqhKPV7CBCr6HC2XdRAmKGhzTvSC6S3v1ZLfGmPn2lL8vlSSHoZxQi9BAnfPYNnZMlx%2B9Mo6cgbPU3BRVCQaU2t908AOfJZDbMJMLrQ%2F70GOqUBThzuNF0uGIQWr03GqWESVPQ%2BF867lq22A2KtILWFOk9z5HxrIfcLLa8sr6JpEJAsgbvED%2BPaSiyOAn2oBfRevxrisQ3qmB8oy2hsqcfsyghZIasr0L2VDg8Rz4D%2Fy8CnvXXUyYlzeEnCpnr5F5JCk7fs5VsFVkO7DDf47MdFnvFRP8VgqZyis%2FYFMz2BEvCsV4zw7y%2FDbgzlDlet5woflPf5V6D%2B&X-Amz-Signature=22fd9c9259acd3d9cf29c312888e8bde48f578a03fcd766df6b1dae0d7f15bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
