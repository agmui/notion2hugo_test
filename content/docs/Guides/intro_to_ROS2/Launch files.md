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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCVZSHIY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHE2JlCvf5na25rhy9gR5M1CihJD9zDCu0uwrmE1883AIhAOs5DqUJJV1PH6tBD%2Bef8yYFbp0ZUflrXmdAuActV3BwKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPMOCH7tkMnzJMcHQq3AN3e1Wtixv7PqrbhPLZBY72AZkKU%2FQW7UWHUQ8mWDPzhCxoakkm8U8nJbas5UGG0JR6JSqjMWc9TDmJJPCbcHuCCLQ8AxP2GZohN4GV6UqiYzoQceMVYEiO%2BnV8k0aOIzLKEreYT9KwZU%2FXkvWoMrTTzrMPQ73HLwuDfnjwz4%2BxvAMmIT6eA2qw%2F6nw01w6E98%2F%2BjjPC%2BxczOIlIL%2FjX2enBspHdehP3y%2FCHhjhjGT0oZVQvksewfNkxjxqOlAzKOixQOkhNbWK8OZ0X6AhTM3sYkGGQvAS6cUAqaWbjRLRxQ5Vpdlz2AM81mXp1aFph4UUr21q7KK8Dsog6SsfQNnfMOejvKof6LYSVYHvy%2B6DC3ERovtXDxxAdYMjgXncDR46jPosRFsIHpNPXvMuwMH3m%2BlkTuyOU%2BHcEstEorCj%2FIt8bxWbQrXF5Z%2F%2BtmxL1DuMmQ4wZZwhMdVQ5orlFddd%2FWwwi3dYdrts3HU4DR1zOgfXrABkWrmBPuvXpQhG%2BxX8Cl6YxeUB5Lrxhm0iVgUawYjbYACMfgcFC2JeYkqYKOHDpE6KRQtdGfDBqVpd1frL0lKzDdagilvIX8Ebqy8Na9vwpye6XpklFuNvbfqmW7EwlGu15cCRH1riQzD4mI7ABjqkAaYwz6KP6GLEMwkwpJ1ChJhvoLSXE6LcF3RlcUSmWMnQUxMtrT3K96FIg3PPBcF6loV5CALj5pq%2BaV0C985NLkdefJqOnqnrjcsBSLZybNf%2B%2B1248dp9Zgk3aLIrbro0F17y3aFnxNdGfPhAurKZ9yFYNvMwniu%2F6Kgexi0iLRXgvklk%2Fp89VPKbQFWgwl9BxxfN7jNCOsV7YX9vTrXMpe%2FfJ7Ny&X-Amz-Signature=028bdc2123ffc9139282cf1d717322d74afebef267877771ad8b52834a8fdbca&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCVZSHIY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHE2JlCvf5na25rhy9gR5M1CihJD9zDCu0uwrmE1883AIhAOs5DqUJJV1PH6tBD%2Bef8yYFbp0ZUflrXmdAuActV3BwKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPMOCH7tkMnzJMcHQq3AN3e1Wtixv7PqrbhPLZBY72AZkKU%2FQW7UWHUQ8mWDPzhCxoakkm8U8nJbas5UGG0JR6JSqjMWc9TDmJJPCbcHuCCLQ8AxP2GZohN4GV6UqiYzoQceMVYEiO%2BnV8k0aOIzLKEreYT9KwZU%2FXkvWoMrTTzrMPQ73HLwuDfnjwz4%2BxvAMmIT6eA2qw%2F6nw01w6E98%2F%2BjjPC%2BxczOIlIL%2FjX2enBspHdehP3y%2FCHhjhjGT0oZVQvksewfNkxjxqOlAzKOixQOkhNbWK8OZ0X6AhTM3sYkGGQvAS6cUAqaWbjRLRxQ5Vpdlz2AM81mXp1aFph4UUr21q7KK8Dsog6SsfQNnfMOejvKof6LYSVYHvy%2B6DC3ERovtXDxxAdYMjgXncDR46jPosRFsIHpNPXvMuwMH3m%2BlkTuyOU%2BHcEstEorCj%2FIt8bxWbQrXF5Z%2F%2BtmxL1DuMmQ4wZZwhMdVQ5orlFddd%2FWwwi3dYdrts3HU4DR1zOgfXrABkWrmBPuvXpQhG%2BxX8Cl6YxeUB5Lrxhm0iVgUawYjbYACMfgcFC2JeYkqYKOHDpE6KRQtdGfDBqVpd1frL0lKzDdagilvIX8Ebqy8Na9vwpye6XpklFuNvbfqmW7EwlGu15cCRH1riQzD4mI7ABjqkAaYwz6KP6GLEMwkwpJ1ChJhvoLSXE6LcF3RlcUSmWMnQUxMtrT3K96FIg3PPBcF6loV5CALj5pq%2BaV0C985NLkdefJqOnqnrjcsBSLZybNf%2B%2B1248dp9Zgk3aLIrbro0F17y3aFnxNdGfPhAurKZ9yFYNvMwniu%2F6Kgexi0iLRXgvklk%2Fp89VPKbQFWgwl9BxxfN7jNCOsV7YX9vTrXMpe%2FfJ7Ny&X-Amz-Signature=c5fa4e0e94633a643b0aa5047feab752b5cc4e99e9cd11d5325a3427079322ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCVZSHIY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCHE2JlCvf5na25rhy9gR5M1CihJD9zDCu0uwrmE1883AIhAOs5DqUJJV1PH6tBD%2Bef8yYFbp0ZUflrXmdAuActV3BwKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPMOCH7tkMnzJMcHQq3AN3e1Wtixv7PqrbhPLZBY72AZkKU%2FQW7UWHUQ8mWDPzhCxoakkm8U8nJbas5UGG0JR6JSqjMWc9TDmJJPCbcHuCCLQ8AxP2GZohN4GV6UqiYzoQceMVYEiO%2BnV8k0aOIzLKEreYT9KwZU%2FXkvWoMrTTzrMPQ73HLwuDfnjwz4%2BxvAMmIT6eA2qw%2F6nw01w6E98%2F%2BjjPC%2BxczOIlIL%2FjX2enBspHdehP3y%2FCHhjhjGT0oZVQvksewfNkxjxqOlAzKOixQOkhNbWK8OZ0X6AhTM3sYkGGQvAS6cUAqaWbjRLRxQ5Vpdlz2AM81mXp1aFph4UUr21q7KK8Dsog6SsfQNnfMOejvKof6LYSVYHvy%2B6DC3ERovtXDxxAdYMjgXncDR46jPosRFsIHpNPXvMuwMH3m%2BlkTuyOU%2BHcEstEorCj%2FIt8bxWbQrXF5Z%2F%2BtmxL1DuMmQ4wZZwhMdVQ5orlFddd%2FWwwi3dYdrts3HU4DR1zOgfXrABkWrmBPuvXpQhG%2BxX8Cl6YxeUB5Lrxhm0iVgUawYjbYACMfgcFC2JeYkqYKOHDpE6KRQtdGfDBqVpd1frL0lKzDdagilvIX8Ebqy8Na9vwpye6XpklFuNvbfqmW7EwlGu15cCRH1riQzD4mI7ABjqkAaYwz6KP6GLEMwkwpJ1ChJhvoLSXE6LcF3RlcUSmWMnQUxMtrT3K96FIg3PPBcF6loV5CALj5pq%2BaV0C985NLkdefJqOnqnrjcsBSLZybNf%2B%2B1248dp9Zgk3aLIrbro0F17y3aFnxNdGfPhAurKZ9yFYNvMwniu%2F6Kgexi0iLRXgvklk%2Fp89VPKbQFWgwl9BxxfN7jNCOsV7YX9vTrXMpe%2FfJ7Ny&X-Amz-Signature=bbf17469f10a52e0f4827bf3bea9ee2d29ad6d54ba8e5fd084a9057587ca1206&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
