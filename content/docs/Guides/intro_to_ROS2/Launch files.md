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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7YT77B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDh%2BukZCKKOuNaYS3fVhij4WeCBhEucWcJTZHvEZmoS5AiEAs%2FCfrkEJBjHN0Nj4LtabRA7HCR4vyUWk9waf%2FKtwYeEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAyh27bVZ%2FODANnt0yrcA9EzdXGO%2BLRDXf3%2FN%2BhT6oAN5qRPVJcbHRxKZVxcY0n4gcYFYyaOGSjaP8pNXY%2FcMhtCsKIHLm6%2Ftr90xuvGbt%2Br9crNyXmZn8w6meAcQnYo3qQBobdYLSQzos0dfd%2BNBHWKK1jh6p%2BRybZydV8Kzx2Kmh4x8L4T%2BAgzFckjEMZ17yL2odAz5z%2F5ACL8aqAWaUb%2Bap6Xt6yB%2BLSIbAjvvEAcuSp9kVBkJgdq0QsUiCZm6eoYmfY%2BbUEuNbYswtbb64YokKZAnTQBWYzyGQzuQaYycgZnMryS%2Be3Z6mwAMlJ51G7Hlk8jgdDNwWWu8JZBRRql7ev79DV4OUF9BsoPWEwm3oYZff80lU1KvWvEnM4JuGFlvnVKa1jVb6D5esHMcULACOt9o8vjTBprl1NoyZUl8W7c%2F6asR4ZURfJyLYUd5HUE80onWKi2T1BntyIkfzMdG1BDURC0yozPqbgyS6S013HWdu7mWkXqppEHN7f8YXOGibKkw98jpwz61roGAOpvQ8I9KejGS6e0V%2Bqm4PQfDaMslaXDS6S014Y4cZiAz72qMDNRblinoU5St5fZa4TyOq0tIDz7gw7EEDFQ9unnkMyPbnRNiy9LJGwuHLZRxEGWtG7xEKz4iMyEMMvp4MAGOqUB6q0ckQFyevphsySgY%2B6ClabAMqhqVVOhiRR5q%2BKEmv8XJc2t95Y3P%2Fgr3ct35r8Ccd99zZdX8DOr8k4svxS%2Bzn2yMa9hFQs6GLue%2BJ32ceMdWgrWRrf7hrU%2F18qEa1sGUoQ%2BP3ZPmvsTze2AVi%2BiR2LN%2F4ZZGtBTCAX6TTg7Oo6OuEZ%2B8glgsWfPr8BwP5PANQo%2BmAvLgfHcPRANS7qWss4nizMx&X-Amz-Signature=939c93769164d392e797a6ee987ad3490af622b2cf59ca9ab760d4ef8b0cdeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7YT77B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDh%2BukZCKKOuNaYS3fVhij4WeCBhEucWcJTZHvEZmoS5AiEAs%2FCfrkEJBjHN0Nj4LtabRA7HCR4vyUWk9waf%2FKtwYeEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAyh27bVZ%2FODANnt0yrcA9EzdXGO%2BLRDXf3%2FN%2BhT6oAN5qRPVJcbHRxKZVxcY0n4gcYFYyaOGSjaP8pNXY%2FcMhtCsKIHLm6%2Ftr90xuvGbt%2Br9crNyXmZn8w6meAcQnYo3qQBobdYLSQzos0dfd%2BNBHWKK1jh6p%2BRybZydV8Kzx2Kmh4x8L4T%2BAgzFckjEMZ17yL2odAz5z%2F5ACL8aqAWaUb%2Bap6Xt6yB%2BLSIbAjvvEAcuSp9kVBkJgdq0QsUiCZm6eoYmfY%2BbUEuNbYswtbb64YokKZAnTQBWYzyGQzuQaYycgZnMryS%2Be3Z6mwAMlJ51G7Hlk8jgdDNwWWu8JZBRRql7ev79DV4OUF9BsoPWEwm3oYZff80lU1KvWvEnM4JuGFlvnVKa1jVb6D5esHMcULACOt9o8vjTBprl1NoyZUl8W7c%2F6asR4ZURfJyLYUd5HUE80onWKi2T1BntyIkfzMdG1BDURC0yozPqbgyS6S013HWdu7mWkXqppEHN7f8YXOGibKkw98jpwz61roGAOpvQ8I9KejGS6e0V%2Bqm4PQfDaMslaXDS6S014Y4cZiAz72qMDNRblinoU5St5fZa4TyOq0tIDz7gw7EEDFQ9unnkMyPbnRNiy9LJGwuHLZRxEGWtG7xEKz4iMyEMMvp4MAGOqUB6q0ckQFyevphsySgY%2B6ClabAMqhqVVOhiRR5q%2BKEmv8XJc2t95Y3P%2Fgr3ct35r8Ccd99zZdX8DOr8k4svxS%2Bzn2yMa9hFQs6GLue%2BJ32ceMdWgrWRrf7hrU%2F18qEa1sGUoQ%2BP3ZPmvsTze2AVi%2BiR2LN%2F4ZZGtBTCAX6TTg7Oo6OuEZ%2B8glgsWfPr8BwP5PANQo%2BmAvLgfHcPRANS7qWss4nizMx&X-Amz-Signature=cbbd1e0efa75163910566045d53724e8fcbad8cdd7358e6784d1dacd50775f27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7YT77B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDh%2BukZCKKOuNaYS3fVhij4WeCBhEucWcJTZHvEZmoS5AiEAs%2FCfrkEJBjHN0Nj4LtabRA7HCR4vyUWk9waf%2FKtwYeEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAyh27bVZ%2FODANnt0yrcA9EzdXGO%2BLRDXf3%2FN%2BhT6oAN5qRPVJcbHRxKZVxcY0n4gcYFYyaOGSjaP8pNXY%2FcMhtCsKIHLm6%2Ftr90xuvGbt%2Br9crNyXmZn8w6meAcQnYo3qQBobdYLSQzos0dfd%2BNBHWKK1jh6p%2BRybZydV8Kzx2Kmh4x8L4T%2BAgzFckjEMZ17yL2odAz5z%2F5ACL8aqAWaUb%2Bap6Xt6yB%2BLSIbAjvvEAcuSp9kVBkJgdq0QsUiCZm6eoYmfY%2BbUEuNbYswtbb64YokKZAnTQBWYzyGQzuQaYycgZnMryS%2Be3Z6mwAMlJ51G7Hlk8jgdDNwWWu8JZBRRql7ev79DV4OUF9BsoPWEwm3oYZff80lU1KvWvEnM4JuGFlvnVKa1jVb6D5esHMcULACOt9o8vjTBprl1NoyZUl8W7c%2F6asR4ZURfJyLYUd5HUE80onWKi2T1BntyIkfzMdG1BDURC0yozPqbgyS6S013HWdu7mWkXqppEHN7f8YXOGibKkw98jpwz61roGAOpvQ8I9KejGS6e0V%2Bqm4PQfDaMslaXDS6S014Y4cZiAz72qMDNRblinoU5St5fZa4TyOq0tIDz7gw7EEDFQ9unnkMyPbnRNiy9LJGwuHLZRxEGWtG7xEKz4iMyEMMvp4MAGOqUB6q0ckQFyevphsySgY%2B6ClabAMqhqVVOhiRR5q%2BKEmv8XJc2t95Y3P%2Fgr3ct35r8Ccd99zZdX8DOr8k4svxS%2Bzn2yMa9hFQs6GLue%2BJ32ceMdWgrWRrf7hrU%2F18qEa1sGUoQ%2BP3ZPmvsTze2AVi%2BiR2LN%2F4ZZGtBTCAX6TTg7Oo6OuEZ%2B8glgsWfPr8BwP5PANQo%2BmAvLgfHcPRANS7qWss4nizMx&X-Amz-Signature=90ac77a9bf9b48f0b75473b3517b6049233dc7569e5b3f0413becaff501dad55&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
