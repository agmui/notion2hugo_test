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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXEFBQ4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCID5Fg8EYcqlNgpAbvsp9IG0TkHTl4yHCgfgjORW6GnoPAiAk1o0KThi%2Br%2Bzk%2FIpX4dy6s%2FNYRgVJ222UqWh6sNsz6iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXG%2BM1391v%2B6n9WTIKtwDlCAFuUbZYltuPdRIizPGnWc8lts%2BDO%2Fv0H%2FVFZc8My6zD0NNEnAL%2FF0lKvy0JLLOhHCvbuXbu9cnFqrIQUCixsYM2r%2B4hbJ%2BF96%2Bq0KCU3OBOWD9NICWX4HrN2HMsmF85%2BIiDZDkny8PaDGXyUoSX4Ir9PsdpMZnaSWtm4lLIsiGVpMwyD2K1HfAWSugFYwiPn9zCIasXrkOGMv5JKhl2AMRR0KckSe9oFuqHe1eCeHYj8vw6dStwKeRFcOhMjcwf7behxOrpAaDFuVMfIRA74sKWb5OBWuUGErqoIWW%2FvWvhpzMsYeU4fvOTgnvegNXusC5veQq8nfIhkykx30HBOfv%2BMvSFD5VSzcT7UX%2FWqZtcT%2Bw4%2BpreAsjkJ%2FZjVjPRiiLZU%2BAEAqXPtKY4tJun2fsSgv7CYooVECev1c6%2FgxzROpCgxEf40PPGWldggm3%2B2tz0EHtka85Y3cIJBEpfkaU0kPBhji8LwDgDvFhdN%2F2BqObWaA4iCXeGvCtLfUWy87zvfTY1HBS66LyvtWECVYdMkow%2FBl93LVprFG70Md%2BVj21XEUhMQmtnuUQyjoOJOAuTiVPumiqmiyKn0CIVyMw7XxjSkLHqDmj1hg9ZRebLb9ZwzDT8bW2JlUwu42OwQY6pgGzulR6sDjZ%2B5YfRThubjrlUziiLuKFVMcs9N72zNHZnupkbbTQaNbMKwV%2BFnANioKVsqB3PwRxZg6F%2FHUFqGdaV9LMiZ23bd2LTAE9KN6AlHPHOtwc24lSXJhq%2FkwnGhDioSqeZxYefzaowyzjvVuIMoZzelRNfr%2BqEZeOr2%2B5vkiHipMhmEf1kSYz8vyz7QX7zJ4in08D%2FvBW9DgCnxoQY3Yva2aX&X-Amz-Signature=ca042bc88a4dbf30860a23f0b086d0a7ae8bdd1f7e43bb5e6537a8d1f796ffb2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXEFBQ4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCID5Fg8EYcqlNgpAbvsp9IG0TkHTl4yHCgfgjORW6GnoPAiAk1o0KThi%2Br%2Bzk%2FIpX4dy6s%2FNYRgVJ222UqWh6sNsz6iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXG%2BM1391v%2B6n9WTIKtwDlCAFuUbZYltuPdRIizPGnWc8lts%2BDO%2Fv0H%2FVFZc8My6zD0NNEnAL%2FF0lKvy0JLLOhHCvbuXbu9cnFqrIQUCixsYM2r%2B4hbJ%2BF96%2Bq0KCU3OBOWD9NICWX4HrN2HMsmF85%2BIiDZDkny8PaDGXyUoSX4Ir9PsdpMZnaSWtm4lLIsiGVpMwyD2K1HfAWSugFYwiPn9zCIasXrkOGMv5JKhl2AMRR0KckSe9oFuqHe1eCeHYj8vw6dStwKeRFcOhMjcwf7behxOrpAaDFuVMfIRA74sKWb5OBWuUGErqoIWW%2FvWvhpzMsYeU4fvOTgnvegNXusC5veQq8nfIhkykx30HBOfv%2BMvSFD5VSzcT7UX%2FWqZtcT%2Bw4%2BpreAsjkJ%2FZjVjPRiiLZU%2BAEAqXPtKY4tJun2fsSgv7CYooVECev1c6%2FgxzROpCgxEf40PPGWldggm3%2B2tz0EHtka85Y3cIJBEpfkaU0kPBhji8LwDgDvFhdN%2F2BqObWaA4iCXeGvCtLfUWy87zvfTY1HBS66LyvtWECVYdMkow%2FBl93LVprFG70Md%2BVj21XEUhMQmtnuUQyjoOJOAuTiVPumiqmiyKn0CIVyMw7XxjSkLHqDmj1hg9ZRebLb9ZwzDT8bW2JlUwu42OwQY6pgGzulR6sDjZ%2B5YfRThubjrlUziiLuKFVMcs9N72zNHZnupkbbTQaNbMKwV%2BFnANioKVsqB3PwRxZg6F%2FHUFqGdaV9LMiZ23bd2LTAE9KN6AlHPHOtwc24lSXJhq%2FkwnGhDioSqeZxYefzaowyzjvVuIMoZzelRNfr%2BqEZeOr2%2B5vkiHipMhmEf1kSYz8vyz7QX7zJ4in08D%2FvBW9DgCnxoQY3Yva2aX&X-Amz-Signature=5492396d1eb675425368dac24c5aabf68585d24dbc3f20f444cd55f51bc6811f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXEFBQ4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCID5Fg8EYcqlNgpAbvsp9IG0TkHTl4yHCgfgjORW6GnoPAiAk1o0KThi%2Br%2Bzk%2FIpX4dy6s%2FNYRgVJ222UqWh6sNsz6iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXG%2BM1391v%2B6n9WTIKtwDlCAFuUbZYltuPdRIizPGnWc8lts%2BDO%2Fv0H%2FVFZc8My6zD0NNEnAL%2FF0lKvy0JLLOhHCvbuXbu9cnFqrIQUCixsYM2r%2B4hbJ%2BF96%2Bq0KCU3OBOWD9NICWX4HrN2HMsmF85%2BIiDZDkny8PaDGXyUoSX4Ir9PsdpMZnaSWtm4lLIsiGVpMwyD2K1HfAWSugFYwiPn9zCIasXrkOGMv5JKhl2AMRR0KckSe9oFuqHe1eCeHYj8vw6dStwKeRFcOhMjcwf7behxOrpAaDFuVMfIRA74sKWb5OBWuUGErqoIWW%2FvWvhpzMsYeU4fvOTgnvegNXusC5veQq8nfIhkykx30HBOfv%2BMvSFD5VSzcT7UX%2FWqZtcT%2Bw4%2BpreAsjkJ%2FZjVjPRiiLZU%2BAEAqXPtKY4tJun2fsSgv7CYooVECev1c6%2FgxzROpCgxEf40PPGWldggm3%2B2tz0EHtka85Y3cIJBEpfkaU0kPBhji8LwDgDvFhdN%2F2BqObWaA4iCXeGvCtLfUWy87zvfTY1HBS66LyvtWECVYdMkow%2FBl93LVprFG70Md%2BVj21XEUhMQmtnuUQyjoOJOAuTiVPumiqmiyKn0CIVyMw7XxjSkLHqDmj1hg9ZRebLb9ZwzDT8bW2JlUwu42OwQY6pgGzulR6sDjZ%2B5YfRThubjrlUziiLuKFVMcs9N72zNHZnupkbbTQaNbMKwV%2BFnANioKVsqB3PwRxZg6F%2FHUFqGdaV9LMiZ23bd2LTAE9KN6AlHPHOtwc24lSXJhq%2FkwnGhDioSqeZxYefzaowyzjvVuIMoZzelRNfr%2BqEZeOr2%2B5vkiHipMhmEf1kSYz8vyz7QX7zJ4in08D%2FvBW9DgCnxoQY3Yva2aX&X-Amz-Signature=02119bd0f84d169d1df7f55991eddece07250aa46962f648cac75520372e6951&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
