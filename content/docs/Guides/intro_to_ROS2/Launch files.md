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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3OJECF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLcdRtwy%2Bn%2Bc%2FCLcz9b2xne9gQWQx%2BweGveNp0oDqdqAIgBjpAnPehywbeSNmEBEKbA4UaIm%2FxOldurzOSBV7bzaUqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNqBEnlKyQ%2BNQf%2FSrcAzfSWF03l%2FFX1KjUdLEaAAadhyE7JKQfTMiXVLc8MQck%2FbgO2ll%2BulDAzjSTnpomryEwrB0dnMcUg%2BwmwJ6sMe%2B520nuEv0Bvey2b9GDaD5QwDwdGgWQ1ZyNbngbxJ%2FvQeuBq9AbrGyD58zHMQ69jDFPKSaOLp1xXx0WD9ocvo%2FxLooiQ9diVFrKKcFj18p01GbGHlW%2F0jdXWgV5Yaes%2FTh1STboD6zWEIzj%2BFcT84VXjjg%2FIzmUWARhJFotsm7PUWQBizEw2h%2B0%2Fc6Hf5PSWbmoirNoBsWnQXYJBKmcaGax1i%2B7%2FHoTl7yNInthyBtsXOAsY3IYG1hejZuTVzrQATn0dUqqveNwNk4PtZ1MRVorqwCdnzSR8F41y5bugtoXsjiXa5aIbVb21xqeR75SQq9Q4qYIp5TdBECFyDUoUC116784J8r%2B2tDtmeIfs3ccEczg%2ByGxLm7fAOYMor%2FbBK32aJrkYagNhj7bDi7rjfaA6C%2B4YQqbpCii6%2FiNq6vAdCWIIntZD2R2qPESHHYEfbTKnQExJyfJPB0RAtYD0mMTi6H63wzgvmjSAhEsdKtv9q63ARU4NXeQJID46RdNfeWsRWGJiXtoFcl9i2YLk8M1PgzcDhpMbqZ%2BFb9TMIWhpcIGOqUBanj%2Fve6INQgiAAE536oW2xtVvu%2BlI0v%2BvHB7o8SuufkfXTxUvYu7pJ5Nrm937JG7x%2BNyzvfY46rq922hKTw%2BQhHR7dchK8UU3ukdWT%2BA4I5bOSFd%2FossE%2BGVRAETv1xuwSSA5EaGouMlkacZCFoFAO7MMQ8GFZBaJKUd%2BK%2FLFHWvbQNwubQpuZEOur4OvqP%2Bh0bta9%2BOXSxwDqZx1KVAjzJ5%2F5La&X-Amz-Signature=8620ff196d7f0a0eeb94b0f6436e145e1ca652338d62002ae778f9762e999243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3OJECF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLcdRtwy%2Bn%2Bc%2FCLcz9b2xne9gQWQx%2BweGveNp0oDqdqAIgBjpAnPehywbeSNmEBEKbA4UaIm%2FxOldurzOSBV7bzaUqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNqBEnlKyQ%2BNQf%2FSrcAzfSWF03l%2FFX1KjUdLEaAAadhyE7JKQfTMiXVLc8MQck%2FbgO2ll%2BulDAzjSTnpomryEwrB0dnMcUg%2BwmwJ6sMe%2B520nuEv0Bvey2b9GDaD5QwDwdGgWQ1ZyNbngbxJ%2FvQeuBq9AbrGyD58zHMQ69jDFPKSaOLp1xXx0WD9ocvo%2FxLooiQ9diVFrKKcFj18p01GbGHlW%2F0jdXWgV5Yaes%2FTh1STboD6zWEIzj%2BFcT84VXjjg%2FIzmUWARhJFotsm7PUWQBizEw2h%2B0%2Fc6Hf5PSWbmoirNoBsWnQXYJBKmcaGax1i%2B7%2FHoTl7yNInthyBtsXOAsY3IYG1hejZuTVzrQATn0dUqqveNwNk4PtZ1MRVorqwCdnzSR8F41y5bugtoXsjiXa5aIbVb21xqeR75SQq9Q4qYIp5TdBECFyDUoUC116784J8r%2B2tDtmeIfs3ccEczg%2ByGxLm7fAOYMor%2FbBK32aJrkYagNhj7bDi7rjfaA6C%2B4YQqbpCii6%2FiNq6vAdCWIIntZD2R2qPESHHYEfbTKnQExJyfJPB0RAtYD0mMTi6H63wzgvmjSAhEsdKtv9q63ARU4NXeQJID46RdNfeWsRWGJiXtoFcl9i2YLk8M1PgzcDhpMbqZ%2BFb9TMIWhpcIGOqUBanj%2Fve6INQgiAAE536oW2xtVvu%2BlI0v%2BvHB7o8SuufkfXTxUvYu7pJ5Nrm937JG7x%2BNyzvfY46rq922hKTw%2BQhHR7dchK8UU3ukdWT%2BA4I5bOSFd%2FossE%2BGVRAETv1xuwSSA5EaGouMlkacZCFoFAO7MMQ8GFZBaJKUd%2BK%2FLFHWvbQNwubQpuZEOur4OvqP%2Bh0bta9%2BOXSxwDqZx1KVAjzJ5%2F5La&X-Amz-Signature=a3006651ff4b872a883a7d312a62b098bb479e1794e583e663513af4336ef0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3OJECF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLcdRtwy%2Bn%2Bc%2FCLcz9b2xne9gQWQx%2BweGveNp0oDqdqAIgBjpAnPehywbeSNmEBEKbA4UaIm%2FxOldurzOSBV7bzaUqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNqBEnlKyQ%2BNQf%2FSrcAzfSWF03l%2FFX1KjUdLEaAAadhyE7JKQfTMiXVLc8MQck%2FbgO2ll%2BulDAzjSTnpomryEwrB0dnMcUg%2BwmwJ6sMe%2B520nuEv0Bvey2b9GDaD5QwDwdGgWQ1ZyNbngbxJ%2FvQeuBq9AbrGyD58zHMQ69jDFPKSaOLp1xXx0WD9ocvo%2FxLooiQ9diVFrKKcFj18p01GbGHlW%2F0jdXWgV5Yaes%2FTh1STboD6zWEIzj%2BFcT84VXjjg%2FIzmUWARhJFotsm7PUWQBizEw2h%2B0%2Fc6Hf5PSWbmoirNoBsWnQXYJBKmcaGax1i%2B7%2FHoTl7yNInthyBtsXOAsY3IYG1hejZuTVzrQATn0dUqqveNwNk4PtZ1MRVorqwCdnzSR8F41y5bugtoXsjiXa5aIbVb21xqeR75SQq9Q4qYIp5TdBECFyDUoUC116784J8r%2B2tDtmeIfs3ccEczg%2ByGxLm7fAOYMor%2FbBK32aJrkYagNhj7bDi7rjfaA6C%2B4YQqbpCii6%2FiNq6vAdCWIIntZD2R2qPESHHYEfbTKnQExJyfJPB0RAtYD0mMTi6H63wzgvmjSAhEsdKtv9q63ARU4NXeQJID46RdNfeWsRWGJiXtoFcl9i2YLk8M1PgzcDhpMbqZ%2BFb9TMIWhpcIGOqUBanj%2Fve6INQgiAAE536oW2xtVvu%2BlI0v%2BvHB7o8SuufkfXTxUvYu7pJ5Nrm937JG7x%2BNyzvfY46rq922hKTw%2BQhHR7dchK8UU3ukdWT%2BA4I5bOSFd%2FossE%2BGVRAETv1xuwSSA5EaGouMlkacZCFoFAO7MMQ8GFZBaJKUd%2BK%2FLFHWvbQNwubQpuZEOur4OvqP%2Bh0bta9%2BOXSxwDqZx1KVAjzJ5%2F5La&X-Amz-Signature=3a00995b477937074ccbf138b31e458c0a6686cd7e440373448e86194fd13934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
