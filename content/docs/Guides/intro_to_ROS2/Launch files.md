---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIEA4KR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD60JpOHgC%2Bkhu1GLqhb6eZ%2F%2BKGGFs1KRGazhbS1Da58AIgREGyHAuTXCwoVDQD0%2FlG%2BMbwLJ4SV6lXIghUNqhirpQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEdFQj5iN2GwErOPCrcA4HT4n2ZjfWYJ5FUtrFUo8nqhXwOic%2BnTIiCUpdDmwFXbEed2khxOjNePorQ4Qo5SvTFf9FhmhIHqxGP2m%2Fvcarms40A3pBebk89PeAAz48pXx8MqzCQlxNhhptlMoRSt6Y%2BTLdYPcQLl7sZ%2BSP06qXi3Cx4nNL5y2zZ5AesZzOZy8vJW1n0HStJaj5oGwF0SpZPeZpDeQmzMRWAeRgRkHqJ%2Bzx2EcFUfn%2Bg83EvNXR82LHJxg8FxkU6jIaAQSKqVIXoM%2BHwToKOvWuy7a9Pd9Sg3AdPqdC7fvyzWwNftcxxzoIeoxgVh%2FIj1qUseUMvkoEtEkZ15cCKG4hOEOrdQ12gikhMgiEzsV30ZYf127rHUsP25lZInPR749YyOKaYny%2BPvmDyGPVoFkssfdlNhxep8ZVW8iBLXJy4UO3vcDGbirbyPrF0gBbiV7Bg7VcN1UwIGIhiK%2B0BSAMX7EhEEyp3trTVXGDX9bnz9tRzPkXmMIYGZU%2Bb1hQIajRxeRfaujVqK5yU23P7WHxQ0IpuRiyYJj2mIK%2FGaBLouKdUxnlMRPknwEZaefJ4NlM%2BKHVH124gqBWk%2BxKNJY1mOZzaLzXO4RLf6RHljF40uzRmvD06J5InEMbaOt6Z%2FOlTMLmlqsQGOqUBVvIPFo3WoX7BIzJfqsh%2BpXb6SdciKSXctKs0utizbVk6M0A0pXjCi3ZRmIp%2Bsjjtiqfd6szUwzpl3iWhUHGnNgr2d0fT2pU9KrNm6DaeE9oo4U349T5yV7Pe9NYU9hK0Fgt%2BcoqWVhqZes8BPPeg7PpAkuBmNe8A59jxnea95%2Fy3McVabUTHAUHgZYz3PgVhMfMQ%2Fkd%2F1ipDyCBffYd4VccOzqT7&X-Amz-Signature=10267cc142bf1c781b79921e162cb882eff98fd723dd33d77bbfb2b0e1c01fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIEA4KR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD60JpOHgC%2Bkhu1GLqhb6eZ%2F%2BKGGFs1KRGazhbS1Da58AIgREGyHAuTXCwoVDQD0%2FlG%2BMbwLJ4SV6lXIghUNqhirpQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEdFQj5iN2GwErOPCrcA4HT4n2ZjfWYJ5FUtrFUo8nqhXwOic%2BnTIiCUpdDmwFXbEed2khxOjNePorQ4Qo5SvTFf9FhmhIHqxGP2m%2Fvcarms40A3pBebk89PeAAz48pXx8MqzCQlxNhhptlMoRSt6Y%2BTLdYPcQLl7sZ%2BSP06qXi3Cx4nNL5y2zZ5AesZzOZy8vJW1n0HStJaj5oGwF0SpZPeZpDeQmzMRWAeRgRkHqJ%2Bzx2EcFUfn%2Bg83EvNXR82LHJxg8FxkU6jIaAQSKqVIXoM%2BHwToKOvWuy7a9Pd9Sg3AdPqdC7fvyzWwNftcxxzoIeoxgVh%2FIj1qUseUMvkoEtEkZ15cCKG4hOEOrdQ12gikhMgiEzsV30ZYf127rHUsP25lZInPR749YyOKaYny%2BPvmDyGPVoFkssfdlNhxep8ZVW8iBLXJy4UO3vcDGbirbyPrF0gBbiV7Bg7VcN1UwIGIhiK%2B0BSAMX7EhEEyp3trTVXGDX9bnz9tRzPkXmMIYGZU%2Bb1hQIajRxeRfaujVqK5yU23P7WHxQ0IpuRiyYJj2mIK%2FGaBLouKdUxnlMRPknwEZaefJ4NlM%2BKHVH124gqBWk%2BxKNJY1mOZzaLzXO4RLf6RHljF40uzRmvD06J5InEMbaOt6Z%2FOlTMLmlqsQGOqUBVvIPFo3WoX7BIzJfqsh%2BpXb6SdciKSXctKs0utizbVk6M0A0pXjCi3ZRmIp%2Bsjjtiqfd6szUwzpl3iWhUHGnNgr2d0fT2pU9KrNm6DaeE9oo4U349T5yV7Pe9NYU9hK0Fgt%2BcoqWVhqZes8BPPeg7PpAkuBmNe8A59jxnea95%2Fy3McVabUTHAUHgZYz3PgVhMfMQ%2Fkd%2F1ipDyCBffYd4VccOzqT7&X-Amz-Signature=0ad279d78ccb86d6cbebb0d2e0fe6d8ca83a8d09e931bffcaa58101a263d3367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIEA4KR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD60JpOHgC%2Bkhu1GLqhb6eZ%2F%2BKGGFs1KRGazhbS1Da58AIgREGyHAuTXCwoVDQD0%2FlG%2BMbwLJ4SV6lXIghUNqhirpQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEdFQj5iN2GwErOPCrcA4HT4n2ZjfWYJ5FUtrFUo8nqhXwOic%2BnTIiCUpdDmwFXbEed2khxOjNePorQ4Qo5SvTFf9FhmhIHqxGP2m%2Fvcarms40A3pBebk89PeAAz48pXx8MqzCQlxNhhptlMoRSt6Y%2BTLdYPcQLl7sZ%2BSP06qXi3Cx4nNL5y2zZ5AesZzOZy8vJW1n0HStJaj5oGwF0SpZPeZpDeQmzMRWAeRgRkHqJ%2Bzx2EcFUfn%2Bg83EvNXR82LHJxg8FxkU6jIaAQSKqVIXoM%2BHwToKOvWuy7a9Pd9Sg3AdPqdC7fvyzWwNftcxxzoIeoxgVh%2FIj1qUseUMvkoEtEkZ15cCKG4hOEOrdQ12gikhMgiEzsV30ZYf127rHUsP25lZInPR749YyOKaYny%2BPvmDyGPVoFkssfdlNhxep8ZVW8iBLXJy4UO3vcDGbirbyPrF0gBbiV7Bg7VcN1UwIGIhiK%2B0BSAMX7EhEEyp3trTVXGDX9bnz9tRzPkXmMIYGZU%2Bb1hQIajRxeRfaujVqK5yU23P7WHxQ0IpuRiyYJj2mIK%2FGaBLouKdUxnlMRPknwEZaefJ4NlM%2BKHVH124gqBWk%2BxKNJY1mOZzaLzXO4RLf6RHljF40uzRmvD06J5InEMbaOt6Z%2FOlTMLmlqsQGOqUBVvIPFo3WoX7BIzJfqsh%2BpXb6SdciKSXctKs0utizbVk6M0A0pXjCi3ZRmIp%2Bsjjtiqfd6szUwzpl3iWhUHGnNgr2d0fT2pU9KrNm6DaeE9oo4U349T5yV7Pe9NYU9hK0Fgt%2BcoqWVhqZes8BPPeg7PpAkuBmNe8A59jxnea95%2Fy3McVabUTHAUHgZYz3PgVhMfMQ%2Fkd%2F1ipDyCBffYd4VccOzqT7&X-Amz-Signature=c6e4496769591cf7158f98798df7fd63f4975968837c02064551318d5364be95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
