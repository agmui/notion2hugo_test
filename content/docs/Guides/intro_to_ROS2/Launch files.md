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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG73Y636%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD4YuFYHoypg8YcL3TqKNchAJE%2BsInNbdTJSS3mplqRdAIgbo9ew%2BlmhcePdeHMnWlNM1K5Aj%2BnTBsiN%2FdqfasWnukqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmm66GcYb9pxKTksSrcA0azIvjLaoIOuyxDl5hr1l%2B6XE%2FCfuiI8zE3gDO1vBkV9n5wRliDqgdBkgkvA35bUB4o8r4MMPlKnwL%2FS0mpCZVpyZoXptQ4iTRRMPG6QpsIYa1Ndv5CVe6pltaB2Qb1pW35vgdK8bUAwzqr1Y4oaWeb%2FIJgwwsnCga%2Bcqcg7EjiwG3w5HiXQCSSnn02Ho2eTN2lFGw%2FCPrqygEHkakYegnxgMwq7WxagyQID%2FMe5w4om3jPyVEtuboaUa1Q3oyp2BOGLS2oRE9eFhJFhs3iHYA1Tcp45Gwr0iFDUdHJr99%2BkqnMrJtYl7epsv5AfwUFS8tcMbB2uoKdb0fWTLYR9BmUFdH%2Fy7eLcmJfYtl3KcvGFCYHKNSWhLdBUSxn%2FYkJNlmfYbPIPSrf%2Fwp9pTKYbvKLIRO4Gaev8hV6RzXXrfLIbZbc20k1NZzBcxkp1dY5hiiE%2B3GFidZrWWQqtbxDVjeUYbYu%2BInCoddVLnu1nCcfqfhLzYHOhSD2sX86QKhFP%2Bv%2BJ1r3CPCfFnCeatsiOr4l%2BNc%2BF%2BVy71LsvlvUMnKPwlocmpvC%2BEpHx%2FgTw4I3TVtyV9VGedfk4NRmgZbRkRSdD2VmtyH%2BErr6kacDh97yCt4%2BQ5tqy5Q9UvqmMLrr28AGOqUBhkpbPA0i3MLbmroRRBhHly9x051tJJzbsH%2BUY2mnBsyyCNGjo0LNMtGN78y7fmnE5k8hBEjRC9Q%2FIw8uHDNobYaZ6ruIdzrHOvDcvX3KgqivlrL%2FLztx8V0HvVB%2BPOiU6BCA2jR0TzAmNqBe74C8nFgZIw70TFgHcXSzDEEcPmEKGE3x%2FOzgUzWozAMs5UF5Pw5VxyMn%2FHHEvbCvB%2BBHhziKriOt&X-Amz-Signature=ca6a68ed5c165c319ac3f694583ae68ecbd345dc093643cda711b1b798bd1de7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG73Y636%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD4YuFYHoypg8YcL3TqKNchAJE%2BsInNbdTJSS3mplqRdAIgbo9ew%2BlmhcePdeHMnWlNM1K5Aj%2BnTBsiN%2FdqfasWnukqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmm66GcYb9pxKTksSrcA0azIvjLaoIOuyxDl5hr1l%2B6XE%2FCfuiI8zE3gDO1vBkV9n5wRliDqgdBkgkvA35bUB4o8r4MMPlKnwL%2FS0mpCZVpyZoXptQ4iTRRMPG6QpsIYa1Ndv5CVe6pltaB2Qb1pW35vgdK8bUAwzqr1Y4oaWeb%2FIJgwwsnCga%2Bcqcg7EjiwG3w5HiXQCSSnn02Ho2eTN2lFGw%2FCPrqygEHkakYegnxgMwq7WxagyQID%2FMe5w4om3jPyVEtuboaUa1Q3oyp2BOGLS2oRE9eFhJFhs3iHYA1Tcp45Gwr0iFDUdHJr99%2BkqnMrJtYl7epsv5AfwUFS8tcMbB2uoKdb0fWTLYR9BmUFdH%2Fy7eLcmJfYtl3KcvGFCYHKNSWhLdBUSxn%2FYkJNlmfYbPIPSrf%2Fwp9pTKYbvKLIRO4Gaev8hV6RzXXrfLIbZbc20k1NZzBcxkp1dY5hiiE%2B3GFidZrWWQqtbxDVjeUYbYu%2BInCoddVLnu1nCcfqfhLzYHOhSD2sX86QKhFP%2Bv%2BJ1r3CPCfFnCeatsiOr4l%2BNc%2BF%2BVy71LsvlvUMnKPwlocmpvC%2BEpHx%2FgTw4I3TVtyV9VGedfk4NRmgZbRkRSdD2VmtyH%2BErr6kacDh97yCt4%2BQ5tqy5Q9UvqmMLrr28AGOqUBhkpbPA0i3MLbmroRRBhHly9x051tJJzbsH%2BUY2mnBsyyCNGjo0LNMtGN78y7fmnE5k8hBEjRC9Q%2FIw8uHDNobYaZ6ruIdzrHOvDcvX3KgqivlrL%2FLztx8V0HvVB%2BPOiU6BCA2jR0TzAmNqBe74C8nFgZIw70TFgHcXSzDEEcPmEKGE3x%2FOzgUzWozAMs5UF5Pw5VxyMn%2FHHEvbCvB%2BBHhziKriOt&X-Amz-Signature=4016337f40bf2ba63d4043fdbddbaf785b16d3dec81bceeb297a6ce2c7757f29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG73Y636%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD4YuFYHoypg8YcL3TqKNchAJE%2BsInNbdTJSS3mplqRdAIgbo9ew%2BlmhcePdeHMnWlNM1K5Aj%2BnTBsiN%2FdqfasWnukqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmm66GcYb9pxKTksSrcA0azIvjLaoIOuyxDl5hr1l%2B6XE%2FCfuiI8zE3gDO1vBkV9n5wRliDqgdBkgkvA35bUB4o8r4MMPlKnwL%2FS0mpCZVpyZoXptQ4iTRRMPG6QpsIYa1Ndv5CVe6pltaB2Qb1pW35vgdK8bUAwzqr1Y4oaWeb%2FIJgwwsnCga%2Bcqcg7EjiwG3w5HiXQCSSnn02Ho2eTN2lFGw%2FCPrqygEHkakYegnxgMwq7WxagyQID%2FMe5w4om3jPyVEtuboaUa1Q3oyp2BOGLS2oRE9eFhJFhs3iHYA1Tcp45Gwr0iFDUdHJr99%2BkqnMrJtYl7epsv5AfwUFS8tcMbB2uoKdb0fWTLYR9BmUFdH%2Fy7eLcmJfYtl3KcvGFCYHKNSWhLdBUSxn%2FYkJNlmfYbPIPSrf%2Fwp9pTKYbvKLIRO4Gaev8hV6RzXXrfLIbZbc20k1NZzBcxkp1dY5hiiE%2B3GFidZrWWQqtbxDVjeUYbYu%2BInCoddVLnu1nCcfqfhLzYHOhSD2sX86QKhFP%2Bv%2BJ1r3CPCfFnCeatsiOr4l%2BNc%2BF%2BVy71LsvlvUMnKPwlocmpvC%2BEpHx%2FgTw4I3TVtyV9VGedfk4NRmgZbRkRSdD2VmtyH%2BErr6kacDh97yCt4%2BQ5tqy5Q9UvqmMLrr28AGOqUBhkpbPA0i3MLbmroRRBhHly9x051tJJzbsH%2BUY2mnBsyyCNGjo0LNMtGN78y7fmnE5k8hBEjRC9Q%2FIw8uHDNobYaZ6ruIdzrHOvDcvX3KgqivlrL%2FLztx8V0HvVB%2BPOiU6BCA2jR0TzAmNqBe74C8nFgZIw70TFgHcXSzDEEcPmEKGE3x%2FOzgUzWozAMs5UF5Pw5VxyMn%2FHHEvbCvB%2BBHhziKriOt&X-Amz-Signature=8da3f26b588778f8a7a6a2e497a44b5ba9cebde37cd18bbc8ebb528ae9cd26c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
