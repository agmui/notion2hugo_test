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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGW5FEK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5gXyD08XfdMHkQbk9RGjgy%2FubreG1dnkpv70hAuHBoAIgXLDxtnA0BQoQbkChODwP9VBFANHBUWB3D9uqWmZP84gq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDNzr%2FV2iWFO%2FHEAN3CrcA2IPFvmQG%2FjcYWbhmXo3Bctk6YwClUrFi18usDEC6cpuqZKluRvdexKyTLeJ5jSxzv0ewZOIdsPEpzJp%2F0mBBmNYBaaSKbmhTCKk2scakyv2YYOlUkzZyhteElNeoB3rE2rYkCimiu80MBTa7jHycGQlaoOKbhjATxitllYQh7b3zroaZ3G1k0snLGydZF7SUq%2BKFnpfStrRBkLYjs30wmvlN8sSb9EI7mMigWzdhUIC9DROE65a%2F7flCwQz%2Fhjhq9i1r4V3PWj%2BY%2FdGjm8zdT%2FyOkHcLZiFourMAYr6VKOiT3YroRnaqZT5ydka6zfViyuznu37zGORlsOqWWc%2FGnWM%2Bq%2BLuy0a%2FhKC0%2BxgQAgpxYy43EpMLTMG5s4A9e%2FFDqtN8E8h9wGSA91F1wIUQ5My5eudp6oTfEuYQXnMNw53McR9BgAXt6wBmwesW%2F0VyaX54k6Qi5TVkxn2kCfrSd3Qn02Rp10kxd3k9iqEvpT0UT2HKN2W5CnHTBBU2x58OqsaxdI09jSPqPgPBVoBF97QYDkVk7jeXmvsEdkF7A3JQcLiP12sEJRVwd7cY5P8KcvOk5XgrcWbMo%2B6Ig6XkyOHmWGdgUTyn9BqIo4U1xlUzRLg1neWaNAAjxiSMNWiwr8GOqUBQU4XbZPGL8vf0vC6gb5kTSMhj1chepj%2FlG8NSZJyuay82pLwIaIalJmrrgv3LC2arWBkti5oqCwtsVsONyXvtEPXvzifykAEAZOBlY0TcUF9%2F4Mr6s8lz3pVKCgzeABB78yz46pacwnEYq7%2F4WRGA3hKL4G6NSFUThVVYmI0P7mqGUXYFYNhrxx531NHqsY2x01oNoNw2SatPY8ZMsTPThmKKa8k&X-Amz-Signature=b46892ea9f0c5125126e428b136f6f6d37641c26da2d6060fe5e64fc001ff65f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGW5FEK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5gXyD08XfdMHkQbk9RGjgy%2FubreG1dnkpv70hAuHBoAIgXLDxtnA0BQoQbkChODwP9VBFANHBUWB3D9uqWmZP84gq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDNzr%2FV2iWFO%2FHEAN3CrcA2IPFvmQG%2FjcYWbhmXo3Bctk6YwClUrFi18usDEC6cpuqZKluRvdexKyTLeJ5jSxzv0ewZOIdsPEpzJp%2F0mBBmNYBaaSKbmhTCKk2scakyv2YYOlUkzZyhteElNeoB3rE2rYkCimiu80MBTa7jHycGQlaoOKbhjATxitllYQh7b3zroaZ3G1k0snLGydZF7SUq%2BKFnpfStrRBkLYjs30wmvlN8sSb9EI7mMigWzdhUIC9DROE65a%2F7flCwQz%2Fhjhq9i1r4V3PWj%2BY%2FdGjm8zdT%2FyOkHcLZiFourMAYr6VKOiT3YroRnaqZT5ydka6zfViyuznu37zGORlsOqWWc%2FGnWM%2Bq%2BLuy0a%2FhKC0%2BxgQAgpxYy43EpMLTMG5s4A9e%2FFDqtN8E8h9wGSA91F1wIUQ5My5eudp6oTfEuYQXnMNw53McR9BgAXt6wBmwesW%2F0VyaX54k6Qi5TVkxn2kCfrSd3Qn02Rp10kxd3k9iqEvpT0UT2HKN2W5CnHTBBU2x58OqsaxdI09jSPqPgPBVoBF97QYDkVk7jeXmvsEdkF7A3JQcLiP12sEJRVwd7cY5P8KcvOk5XgrcWbMo%2B6Ig6XkyOHmWGdgUTyn9BqIo4U1xlUzRLg1neWaNAAjxiSMNWiwr8GOqUBQU4XbZPGL8vf0vC6gb5kTSMhj1chepj%2FlG8NSZJyuay82pLwIaIalJmrrgv3LC2arWBkti5oqCwtsVsONyXvtEPXvzifykAEAZOBlY0TcUF9%2F4Mr6s8lz3pVKCgzeABB78yz46pacwnEYq7%2F4WRGA3hKL4G6NSFUThVVYmI0P7mqGUXYFYNhrxx531NHqsY2x01oNoNw2SatPY8ZMsTPThmKKa8k&X-Amz-Signature=0b3c9bb73ec20008c446b8d11cf9b5493f1b47313d544a20f80b9e4d1b4a421c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGW5FEK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5gXyD08XfdMHkQbk9RGjgy%2FubreG1dnkpv70hAuHBoAIgXLDxtnA0BQoQbkChODwP9VBFANHBUWB3D9uqWmZP84gq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDNzr%2FV2iWFO%2FHEAN3CrcA2IPFvmQG%2FjcYWbhmXo3Bctk6YwClUrFi18usDEC6cpuqZKluRvdexKyTLeJ5jSxzv0ewZOIdsPEpzJp%2F0mBBmNYBaaSKbmhTCKk2scakyv2YYOlUkzZyhteElNeoB3rE2rYkCimiu80MBTa7jHycGQlaoOKbhjATxitllYQh7b3zroaZ3G1k0snLGydZF7SUq%2BKFnpfStrRBkLYjs30wmvlN8sSb9EI7mMigWzdhUIC9DROE65a%2F7flCwQz%2Fhjhq9i1r4V3PWj%2BY%2FdGjm8zdT%2FyOkHcLZiFourMAYr6VKOiT3YroRnaqZT5ydka6zfViyuznu37zGORlsOqWWc%2FGnWM%2Bq%2BLuy0a%2FhKC0%2BxgQAgpxYy43EpMLTMG5s4A9e%2FFDqtN8E8h9wGSA91F1wIUQ5My5eudp6oTfEuYQXnMNw53McR9BgAXt6wBmwesW%2F0VyaX54k6Qi5TVkxn2kCfrSd3Qn02Rp10kxd3k9iqEvpT0UT2HKN2W5CnHTBBU2x58OqsaxdI09jSPqPgPBVoBF97QYDkVk7jeXmvsEdkF7A3JQcLiP12sEJRVwd7cY5P8KcvOk5XgrcWbMo%2B6Ig6XkyOHmWGdgUTyn9BqIo4U1xlUzRLg1neWaNAAjxiSMNWiwr8GOqUBQU4XbZPGL8vf0vC6gb5kTSMhj1chepj%2FlG8NSZJyuay82pLwIaIalJmrrgv3LC2arWBkti5oqCwtsVsONyXvtEPXvzifykAEAZOBlY0TcUF9%2F4Mr6s8lz3pVKCgzeABB78yz46pacwnEYq7%2F4WRGA3hKL4G6NSFUThVVYmI0P7mqGUXYFYNhrxx531NHqsY2x01oNoNw2SatPY8ZMsTPThmKKa8k&X-Amz-Signature=d56ff06b2d3c6d49b1da2555517665c63a38583737df3e407bb36523f33fa53b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
