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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RMVAXEO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeYbnhhFKYHRMXoWcDX5kcrQBeBW9L5Yk7uwwqesCmLAIhAKbzWKn3pkkvlY7PCKoAEDUFHgfbgf9AUAfXShTPsgB5Kv8DCCwQABoMNjM3NDIzMTgzODA1Igw5kqNpxu7QQObj1Okq3AMbi9VajrSpfIxPLsbRy53SsRGa4EOCxbbUUI4BS%2Fx90nW%2FMBPVQ7UByZ4G8q0f0qyhMBY22cwQcd2H8z%2BHjg20QtJ2qaTNQtNOggWqDIUYF%2FeIQPWzLJtY6p0BJnNyTf47mgyzFEjNXobubQm0JYu8YG62pvakOqWMcvkXU7Bi43X2RNDrkVyQ0hLmx8mDSC8OxQz%2Bl0xenk7fGYoR8YH1m8UDWhV2O8MYuo%2Fbtuo0447TDzbQL3xqxS6Dj9aoJ1srjaK2k%2F10s%2BSVJD9I4pafAPL4s%2FNoRfz7qdsrCytpHdEn9PQsI9kp2ciE9M7bnQd63VCY95AFOvU8MEeNfsPeSP%2Fs5CNEgrwnrrDCI8sVzELrd%2FwpDyUBZY3kH%2FkGP1jH6GfezfhSLZl7V1l4QpYZEGjUxrF3RT6QhJH7UEPQ9o0Mrflg9RB0lEc0d0aRtNEOElSxvnum2fnDs9d72a5ABrx3XuM4kKapd1tMoxJOQLHGZ5EbkcogwXzaeM5ksHuj%2FT59F2HKFZPywE7%2BQvywj1l8lUMsV6s7nyRFWvRH%2Fb%2BID1pNBDW1hMQYpb2S0uhuSOLwSZe%2BGcgmc8ispv3YSUlG9Bejm76Rf4yatP97Ncz4brPy7ZuXDPnGmDC%2F2Nq%2BBjqkAQbgF1BVPVbqdijgltrKVUQaN5Dnk5iM4nwEwEFq1INLOUZEJz2iw%2F0c6CkOZws8ilwwacH%2F%2FwKrk3CHOtvMxRl7OS2mFCIcf2QewfyQUSx8RVGSDY17T1lI7R%2FB3d0HHjuZbziUGmMBY887gHpTYSzeL8sYi1T%2FGoQdG0zI6wsaFofTQOaqqTLNeSa4kgetDVXwKpTRKF5eYzgweWycD7l7oMHt&X-Amz-Signature=4908d1673f13ff8abb2234f83248d7ce79f0af9d5530678782f441588326bdb9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RMVAXEO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeYbnhhFKYHRMXoWcDX5kcrQBeBW9L5Yk7uwwqesCmLAIhAKbzWKn3pkkvlY7PCKoAEDUFHgfbgf9AUAfXShTPsgB5Kv8DCCwQABoMNjM3NDIzMTgzODA1Igw5kqNpxu7QQObj1Okq3AMbi9VajrSpfIxPLsbRy53SsRGa4EOCxbbUUI4BS%2Fx90nW%2FMBPVQ7UByZ4G8q0f0qyhMBY22cwQcd2H8z%2BHjg20QtJ2qaTNQtNOggWqDIUYF%2FeIQPWzLJtY6p0BJnNyTf47mgyzFEjNXobubQm0JYu8YG62pvakOqWMcvkXU7Bi43X2RNDrkVyQ0hLmx8mDSC8OxQz%2Bl0xenk7fGYoR8YH1m8UDWhV2O8MYuo%2Fbtuo0447TDzbQL3xqxS6Dj9aoJ1srjaK2k%2F10s%2BSVJD9I4pafAPL4s%2FNoRfz7qdsrCytpHdEn9PQsI9kp2ciE9M7bnQd63VCY95AFOvU8MEeNfsPeSP%2Fs5CNEgrwnrrDCI8sVzELrd%2FwpDyUBZY3kH%2FkGP1jH6GfezfhSLZl7V1l4QpYZEGjUxrF3RT6QhJH7UEPQ9o0Mrflg9RB0lEc0d0aRtNEOElSxvnum2fnDs9d72a5ABrx3XuM4kKapd1tMoxJOQLHGZ5EbkcogwXzaeM5ksHuj%2FT59F2HKFZPywE7%2BQvywj1l8lUMsV6s7nyRFWvRH%2Fb%2BID1pNBDW1hMQYpb2S0uhuSOLwSZe%2BGcgmc8ispv3YSUlG9Bejm76Rf4yatP97Ncz4brPy7ZuXDPnGmDC%2F2Nq%2BBjqkAQbgF1BVPVbqdijgltrKVUQaN5Dnk5iM4nwEwEFq1INLOUZEJz2iw%2F0c6CkOZws8ilwwacH%2F%2FwKrk3CHOtvMxRl7OS2mFCIcf2QewfyQUSx8RVGSDY17T1lI7R%2FB3d0HHjuZbziUGmMBY887gHpTYSzeL8sYi1T%2FGoQdG0zI6wsaFofTQOaqqTLNeSa4kgetDVXwKpTRKF5eYzgweWycD7l7oMHt&X-Amz-Signature=afd7581e7fa55a3cb55f113e579c90f5ea26644fa6b3af2eb85f2635f701bf5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RMVAXEO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeYbnhhFKYHRMXoWcDX5kcrQBeBW9L5Yk7uwwqesCmLAIhAKbzWKn3pkkvlY7PCKoAEDUFHgfbgf9AUAfXShTPsgB5Kv8DCCwQABoMNjM3NDIzMTgzODA1Igw5kqNpxu7QQObj1Okq3AMbi9VajrSpfIxPLsbRy53SsRGa4EOCxbbUUI4BS%2Fx90nW%2FMBPVQ7UByZ4G8q0f0qyhMBY22cwQcd2H8z%2BHjg20QtJ2qaTNQtNOggWqDIUYF%2FeIQPWzLJtY6p0BJnNyTf47mgyzFEjNXobubQm0JYu8YG62pvakOqWMcvkXU7Bi43X2RNDrkVyQ0hLmx8mDSC8OxQz%2Bl0xenk7fGYoR8YH1m8UDWhV2O8MYuo%2Fbtuo0447TDzbQL3xqxS6Dj9aoJ1srjaK2k%2F10s%2BSVJD9I4pafAPL4s%2FNoRfz7qdsrCytpHdEn9PQsI9kp2ciE9M7bnQd63VCY95AFOvU8MEeNfsPeSP%2Fs5CNEgrwnrrDCI8sVzELrd%2FwpDyUBZY3kH%2FkGP1jH6GfezfhSLZl7V1l4QpYZEGjUxrF3RT6QhJH7UEPQ9o0Mrflg9RB0lEc0d0aRtNEOElSxvnum2fnDs9d72a5ABrx3XuM4kKapd1tMoxJOQLHGZ5EbkcogwXzaeM5ksHuj%2FT59F2HKFZPywE7%2BQvywj1l8lUMsV6s7nyRFWvRH%2Fb%2BID1pNBDW1hMQYpb2S0uhuSOLwSZe%2BGcgmc8ispv3YSUlG9Bejm76Rf4yatP97Ncz4brPy7ZuXDPnGmDC%2F2Nq%2BBjqkAQbgF1BVPVbqdijgltrKVUQaN5Dnk5iM4nwEwEFq1INLOUZEJz2iw%2F0c6CkOZws8ilwwacH%2F%2FwKrk3CHOtvMxRl7OS2mFCIcf2QewfyQUSx8RVGSDY17T1lI7R%2FB3d0HHjuZbziUGmMBY887gHpTYSzeL8sYi1T%2FGoQdG0zI6wsaFofTQOaqqTLNeSa4kgetDVXwKpTRKF5eYzgweWycD7l7oMHt&X-Amz-Signature=61f9833504a7543764803203e357f8646fe6b1285dbe09df147d8c3a10023ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
