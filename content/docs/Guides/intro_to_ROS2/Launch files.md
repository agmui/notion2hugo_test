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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226GXRV6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjsEyjHJiAI2gX0qb9hX2Y%2BU6PgSofGa08wsVp4Oo2QAiEAhzl%2FcGN47cfFC5UoNNsHrnPUIzMLzsuGwXuX8omcFIwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCQfaV5apXOHosq3QSrcA3i1d4Q0NXN5CrHt%2Fvga3jeZViX%2FTWIFNlyx7DvfYyfupUCOZkInD4%2F9Prjmn6c6azbl2BbKi5Y5HAUbmKz7TdqdQ5uo4KgTc%2Fn76xrI0iSf8Mmx3cRCRYivvsSwdeOcWvcwvETHVtePS9eLomkrBLC2%2FlhJW%2BGhRhzRAwa78NEcaKqO67CMliy%2B4aEVbg0uCBpYNhcYQHIOqC2u3WmfE%2BVOGh8fPcXfR2R7wVbiCtr9ziMvI4ZYR63nZAViUGrsKObyJRqgZbeCT5gFaG8MUJN9NF%2BNc%2BWd9%2FwezyEClKeVAwHW0pahMLAlDO%2BUjeWZ08x1936hlFgk5bc7aiLEI8M246LjfBKyEq%2Fa0ToEnQWmBbwYGTy1cMrvKkGICGClXKPTz9i8SRHSqCRHgG06UL44ubeYF9WVOGNPui3OHHlK0YegHlgBdw2AED5nc2gsM6SnF4JGJkFtL8%2FfHvHR30GIvOFh0%2BxXVBlQc9X2XnhMrmpMzxbmbCSDZ%2BgPWAHH%2BKPsB%2FN%2BMAzyDIPcb8WHdbQZcTlsPEadOVC74MEhIZg7Nnb4okmd5FamDjbLDmG%2FI6iIhRVWZCGt3r%2BPyJJXVYrLp7cIdr6n3%2FTc5k%2FJP40KcBuNsiMT9JqxBO%2BeMKjrjr8GOqUBYZKwTZvQUnVEDv0qWJFHB1AGjPKbtjPhFhUiDdtJQREscWC0%2B3VRm%2Fa%2FKqoHrrxivW0u%2FouSghfof5t8vYaRl6X6GJ0o7JAdYoJPXepEAJRyqhy2OvkCQlqVoOxm6B%2BaiOSKmQZuWEmZdptZaId7wn%2F5tYCtuadSmpbZDgPiWeSe1%2B10Y1LWviKf%2BBBXmJWtbumu3s4opeiqfd9FaEo9uz5TMBu4&X-Amz-Signature=44214117b0784a1379793621f1b75ebdb15444c88e36245b33f0cd9670822a46&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226GXRV6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjsEyjHJiAI2gX0qb9hX2Y%2BU6PgSofGa08wsVp4Oo2QAiEAhzl%2FcGN47cfFC5UoNNsHrnPUIzMLzsuGwXuX8omcFIwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCQfaV5apXOHosq3QSrcA3i1d4Q0NXN5CrHt%2Fvga3jeZViX%2FTWIFNlyx7DvfYyfupUCOZkInD4%2F9Prjmn6c6azbl2BbKi5Y5HAUbmKz7TdqdQ5uo4KgTc%2Fn76xrI0iSf8Mmx3cRCRYivvsSwdeOcWvcwvETHVtePS9eLomkrBLC2%2FlhJW%2BGhRhzRAwa78NEcaKqO67CMliy%2B4aEVbg0uCBpYNhcYQHIOqC2u3WmfE%2BVOGh8fPcXfR2R7wVbiCtr9ziMvI4ZYR63nZAViUGrsKObyJRqgZbeCT5gFaG8MUJN9NF%2BNc%2BWd9%2FwezyEClKeVAwHW0pahMLAlDO%2BUjeWZ08x1936hlFgk5bc7aiLEI8M246LjfBKyEq%2Fa0ToEnQWmBbwYGTy1cMrvKkGICGClXKPTz9i8SRHSqCRHgG06UL44ubeYF9WVOGNPui3OHHlK0YegHlgBdw2AED5nc2gsM6SnF4JGJkFtL8%2FfHvHR30GIvOFh0%2BxXVBlQc9X2XnhMrmpMzxbmbCSDZ%2BgPWAHH%2BKPsB%2FN%2BMAzyDIPcb8WHdbQZcTlsPEadOVC74MEhIZg7Nnb4okmd5FamDjbLDmG%2FI6iIhRVWZCGt3r%2BPyJJXVYrLp7cIdr6n3%2FTc5k%2FJP40KcBuNsiMT9JqxBO%2BeMKjrjr8GOqUBYZKwTZvQUnVEDv0qWJFHB1AGjPKbtjPhFhUiDdtJQREscWC0%2B3VRm%2Fa%2FKqoHrrxivW0u%2FouSghfof5t8vYaRl6X6GJ0o7JAdYoJPXepEAJRyqhy2OvkCQlqVoOxm6B%2BaiOSKmQZuWEmZdptZaId7wn%2F5tYCtuadSmpbZDgPiWeSe1%2B10Y1LWviKf%2BBBXmJWtbumu3s4opeiqfd9FaEo9uz5TMBu4&X-Amz-Signature=6316991239e8c78bee0fd49aa56a777b4d28ef847f6e626c2f82ad420266d30a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226GXRV6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjsEyjHJiAI2gX0qb9hX2Y%2BU6PgSofGa08wsVp4Oo2QAiEAhzl%2FcGN47cfFC5UoNNsHrnPUIzMLzsuGwXuX8omcFIwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCQfaV5apXOHosq3QSrcA3i1d4Q0NXN5CrHt%2Fvga3jeZViX%2FTWIFNlyx7DvfYyfupUCOZkInD4%2F9Prjmn6c6azbl2BbKi5Y5HAUbmKz7TdqdQ5uo4KgTc%2Fn76xrI0iSf8Mmx3cRCRYivvsSwdeOcWvcwvETHVtePS9eLomkrBLC2%2FlhJW%2BGhRhzRAwa78NEcaKqO67CMliy%2B4aEVbg0uCBpYNhcYQHIOqC2u3WmfE%2BVOGh8fPcXfR2R7wVbiCtr9ziMvI4ZYR63nZAViUGrsKObyJRqgZbeCT5gFaG8MUJN9NF%2BNc%2BWd9%2FwezyEClKeVAwHW0pahMLAlDO%2BUjeWZ08x1936hlFgk5bc7aiLEI8M246LjfBKyEq%2Fa0ToEnQWmBbwYGTy1cMrvKkGICGClXKPTz9i8SRHSqCRHgG06UL44ubeYF9WVOGNPui3OHHlK0YegHlgBdw2AED5nc2gsM6SnF4JGJkFtL8%2FfHvHR30GIvOFh0%2BxXVBlQc9X2XnhMrmpMzxbmbCSDZ%2BgPWAHH%2BKPsB%2FN%2BMAzyDIPcb8WHdbQZcTlsPEadOVC74MEhIZg7Nnb4okmd5FamDjbLDmG%2FI6iIhRVWZCGt3r%2BPyJJXVYrLp7cIdr6n3%2FTc5k%2FJP40KcBuNsiMT9JqxBO%2BeMKjrjr8GOqUBYZKwTZvQUnVEDv0qWJFHB1AGjPKbtjPhFhUiDdtJQREscWC0%2B3VRm%2Fa%2FKqoHrrxivW0u%2FouSghfof5t8vYaRl6X6GJ0o7JAdYoJPXepEAJRyqhy2OvkCQlqVoOxm6B%2BaiOSKmQZuWEmZdptZaId7wn%2F5tYCtuadSmpbZDgPiWeSe1%2B10Y1LWviKf%2BBBXmJWtbumu3s4opeiqfd9FaEo9uz5TMBu4&X-Amz-Signature=b7ea1b2c45ad5b15e2724a60cb6a34cb98781e80ecd99a48a2dd671106a9dcca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
