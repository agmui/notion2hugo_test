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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEXHKTV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApwuvBBjgpEit6bZHnpoV3x7k751fWtNdHpxNGgJvebAiEAhdyilwk3dimp8W01E191gFZrYDR6%2Bhn%2FhlNAz6YX814qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLYZUqp2CiOM7RUKCrcA9iSQOKBGcNpc50g5k1mT4ZE%2BcgArscEZa1ioPt6A9FUmS74FGlIuiiMJ4AE9vbrHpvBLhmqaFsW%2BB3dA3vmF69Q3f4uWP2WSRkTTlLInSikHhFNY8BrvMDqzKS2D10WJBr5SOGt5J0vk9e4c15bskFQ4JZdbPYs0P7QSF0fzg1VogW9Dfxpmx9M%2BF9HW6D%2FbruT%2BiQnyXmAzuk9d3FDbV9%2FdgHXwiYIOiYtWL9BALbaE7Dvq1F8tFkQJnRM%2B1rfMksGXFwzQEnAOUESc6nE%2BkwZimeUexenCt7IpG1mHa%2B7UAwjQZYMNZLb5lIyjZc1IPvmCSqvuVC%2FCG31eh%2BJdkR2ktNWNGU5Uelc7bfO8CyEXu%2BhXJWSMX13kTp%2BBWVEf8gtGzqpqEe0lrXLi3VzCpDM89WVAhEXCFmIZ7EkLbwnro2a75a5Y0p1MURGgx46fuJ%2Btv6r6w2LZWQ98jMP9owKABtXYqLPYjXXTtehcooPRQ8ezNO5WP3tMP8uA%2FD8ZIs%2FTUDy1d%2B%2FCbm1UpCLZVj1OuF8xVFA7xyh9KMFIbtc6jD5acotjAENj5JlR80amO9DEqSRhQ1y93JWfSIe8X4YRVBRO%2B6oi30IffhKFKdmQm9SZ8Gp9Zg6t5%2B2MN3WvcMGOqUB0U3NNPEk6c1O%2B4cxWOkclH9GVQ7WTmq9tmtW0y%2F6XBbzvE0bl9P7xmL%2FrcyOtW9lLMXtRc7wtLG%2Fl4N9caZKVGqmm%2Bcmftyl0LiaFTTpXgv8PWrWjIKL%2FaZmBmZmNVA%2B9FEjzC31YfCtY7A84u09LJ%2BYEYQ2LKLQTU%2BRaqFKsOhcFjt7JwzujOuSVfe9apOI9fJllopWhRp9bZ3IHh14GTlKgmjD&X-Amz-Signature=bca4f7897ca96935f7e4984d02b64ce33c670490fc20c9cf88ea1af8496ea18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEXHKTV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApwuvBBjgpEit6bZHnpoV3x7k751fWtNdHpxNGgJvebAiEAhdyilwk3dimp8W01E191gFZrYDR6%2Bhn%2FhlNAz6YX814qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLYZUqp2CiOM7RUKCrcA9iSQOKBGcNpc50g5k1mT4ZE%2BcgArscEZa1ioPt6A9FUmS74FGlIuiiMJ4AE9vbrHpvBLhmqaFsW%2BB3dA3vmF69Q3f4uWP2WSRkTTlLInSikHhFNY8BrvMDqzKS2D10WJBr5SOGt5J0vk9e4c15bskFQ4JZdbPYs0P7QSF0fzg1VogW9Dfxpmx9M%2BF9HW6D%2FbruT%2BiQnyXmAzuk9d3FDbV9%2FdgHXwiYIOiYtWL9BALbaE7Dvq1F8tFkQJnRM%2B1rfMksGXFwzQEnAOUESc6nE%2BkwZimeUexenCt7IpG1mHa%2B7UAwjQZYMNZLb5lIyjZc1IPvmCSqvuVC%2FCG31eh%2BJdkR2ktNWNGU5Uelc7bfO8CyEXu%2BhXJWSMX13kTp%2BBWVEf8gtGzqpqEe0lrXLi3VzCpDM89WVAhEXCFmIZ7EkLbwnro2a75a5Y0p1MURGgx46fuJ%2Btv6r6w2LZWQ98jMP9owKABtXYqLPYjXXTtehcooPRQ8ezNO5WP3tMP8uA%2FD8ZIs%2FTUDy1d%2B%2FCbm1UpCLZVj1OuF8xVFA7xyh9KMFIbtc6jD5acotjAENj5JlR80amO9DEqSRhQ1y93JWfSIe8X4YRVBRO%2B6oi30IffhKFKdmQm9SZ8Gp9Zg6t5%2B2MN3WvcMGOqUB0U3NNPEk6c1O%2B4cxWOkclH9GVQ7WTmq9tmtW0y%2F6XBbzvE0bl9P7xmL%2FrcyOtW9lLMXtRc7wtLG%2Fl4N9caZKVGqmm%2Bcmftyl0LiaFTTpXgv8PWrWjIKL%2FaZmBmZmNVA%2B9FEjzC31YfCtY7A84u09LJ%2BYEYQ2LKLQTU%2BRaqFKsOhcFjt7JwzujOuSVfe9apOI9fJllopWhRp9bZ3IHh14GTlKgmjD&X-Amz-Signature=f5ae8ca396d53aced5a01d2bcca803279b7efeb506b9ea0ed0a41e1bd7b398d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEXHKTV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApwuvBBjgpEit6bZHnpoV3x7k751fWtNdHpxNGgJvebAiEAhdyilwk3dimp8W01E191gFZrYDR6%2Bhn%2FhlNAz6YX814qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLYZUqp2CiOM7RUKCrcA9iSQOKBGcNpc50g5k1mT4ZE%2BcgArscEZa1ioPt6A9FUmS74FGlIuiiMJ4AE9vbrHpvBLhmqaFsW%2BB3dA3vmF69Q3f4uWP2WSRkTTlLInSikHhFNY8BrvMDqzKS2D10WJBr5SOGt5J0vk9e4c15bskFQ4JZdbPYs0P7QSF0fzg1VogW9Dfxpmx9M%2BF9HW6D%2FbruT%2BiQnyXmAzuk9d3FDbV9%2FdgHXwiYIOiYtWL9BALbaE7Dvq1F8tFkQJnRM%2B1rfMksGXFwzQEnAOUESc6nE%2BkwZimeUexenCt7IpG1mHa%2B7UAwjQZYMNZLb5lIyjZc1IPvmCSqvuVC%2FCG31eh%2BJdkR2ktNWNGU5Uelc7bfO8CyEXu%2BhXJWSMX13kTp%2BBWVEf8gtGzqpqEe0lrXLi3VzCpDM89WVAhEXCFmIZ7EkLbwnro2a75a5Y0p1MURGgx46fuJ%2Btv6r6w2LZWQ98jMP9owKABtXYqLPYjXXTtehcooPRQ8ezNO5WP3tMP8uA%2FD8ZIs%2FTUDy1d%2B%2FCbm1UpCLZVj1OuF8xVFA7xyh9KMFIbtc6jD5acotjAENj5JlR80amO9DEqSRhQ1y93JWfSIe8X4YRVBRO%2B6oi30IffhKFKdmQm9SZ8Gp9Zg6t5%2B2MN3WvcMGOqUB0U3NNPEk6c1O%2B4cxWOkclH9GVQ7WTmq9tmtW0y%2F6XBbzvE0bl9P7xmL%2FrcyOtW9lLMXtRc7wtLG%2Fl4N9caZKVGqmm%2Bcmftyl0LiaFTTpXgv8PWrWjIKL%2FaZmBmZmNVA%2B9FEjzC31YfCtY7A84u09LJ%2BYEYQ2LKLQTU%2BRaqFKsOhcFjt7JwzujOuSVfe9apOI9fJllopWhRp9bZ3IHh14GTlKgmjD&X-Amz-Signature=c2498b2ac7aedb2b97cec7d2d4fc85cdb37e3ecb08cf73ad58c2ef5bc6e7e09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
