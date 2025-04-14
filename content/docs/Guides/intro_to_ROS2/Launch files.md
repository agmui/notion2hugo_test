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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6L54ZU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLPlBji%2BWDJ6Ln6R9myYIxVVrI7RC%2BA3ZDqDvaP%2F7%2BVAiAKAwycdvLLd9WQXqUKIBtORbrKqKKMW8I40EWR3locqir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMT4t9EhKFJjRo1pxXKtwDDopCyBUMfbVM3mw2xJrwlA9mu%2Bsvr49frhW1xabCmPdbqsTHOMQLOCeX1huZ9lLSW8V0BG8wk1PEmWFVR6CPfmwjyFgRgrFrozPcLAE8RfDak9iU86mPiEARC%2B6Ys0odNUlQi52FtZMXCNm5HpI%2F5SUBR2ALnpTx89O2zOc2iS%2FgCu0EXLrW21H5RRAwJUTtaQFyprOUZ%2F2YxvhKQo92hCA4L72sQ7JXazs59iWffhRA6TntR%2F4Ih5tlgGNNmhhUW7xNSMfh32cBnxPFYfTcf4zClgcbolwhZ%2FObtE39ZNczznb0WyTFUGla07MgxRLqSxi2YbPVCEgyOhiDrFifZUvZegN8%2BTDxvnL2astffrwKFSut9aAmzZ9JhmwBLhyL6hqD9mze0mQpyE1Tmt0sWb6qHNabxS7FZW6vQWrFipGt8YTYNk8nIwAPalpxT3NquLGx8uw5DSdNfISL9E7Tahn9gShFBTq3MJ%2FJhqIWrQ6fcwptps0brt1FH%2BEvzxSPA4roXzhNnFA8%2FvlCGM1r2d4HDO5VPoA8q5o7E4yhGs7DMz%2BeBON4GuUtAUHZ0zYvRavgFEYpnds9sXt19zXebQK7dVbzggkHNGPP4iqbeFABo2PusTp2bQjXn2EwjuTyvwY6pgFY7SKpqxMKVIfECKGwiySIuOYu547BcH6qZI5kGnHKNqdJ7yT0eMFgQGMIAsKJ8RKynaN09yxm2RzFjfnWqCvQcduwwtbj7ah3ZtM57%2BiP3Y6QBi2cGGrUPDQng%2BCf9%2B%2Bfm4H1Jc2Dtt%2BjWvnKp1q15eK3taeuV99c1RhtpEfteNkVQ4NQQmjaRY%2BKaWyoXUc9SfLcQDeMWCSUibflSQuD3DmlPzss&X-Amz-Signature=464f0fe65bc00a8f1bd9206d35f9fef1123e325e93cef9efdb44f0282af32740&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6L54ZU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLPlBji%2BWDJ6Ln6R9myYIxVVrI7RC%2BA3ZDqDvaP%2F7%2BVAiAKAwycdvLLd9WQXqUKIBtORbrKqKKMW8I40EWR3locqir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMT4t9EhKFJjRo1pxXKtwDDopCyBUMfbVM3mw2xJrwlA9mu%2Bsvr49frhW1xabCmPdbqsTHOMQLOCeX1huZ9lLSW8V0BG8wk1PEmWFVR6CPfmwjyFgRgrFrozPcLAE8RfDak9iU86mPiEARC%2B6Ys0odNUlQi52FtZMXCNm5HpI%2F5SUBR2ALnpTx89O2zOc2iS%2FgCu0EXLrW21H5RRAwJUTtaQFyprOUZ%2F2YxvhKQo92hCA4L72sQ7JXazs59iWffhRA6TntR%2F4Ih5tlgGNNmhhUW7xNSMfh32cBnxPFYfTcf4zClgcbolwhZ%2FObtE39ZNczznb0WyTFUGla07MgxRLqSxi2YbPVCEgyOhiDrFifZUvZegN8%2BTDxvnL2astffrwKFSut9aAmzZ9JhmwBLhyL6hqD9mze0mQpyE1Tmt0sWb6qHNabxS7FZW6vQWrFipGt8YTYNk8nIwAPalpxT3NquLGx8uw5DSdNfISL9E7Tahn9gShFBTq3MJ%2FJhqIWrQ6fcwptps0brt1FH%2BEvzxSPA4roXzhNnFA8%2FvlCGM1r2d4HDO5VPoA8q5o7E4yhGs7DMz%2BeBON4GuUtAUHZ0zYvRavgFEYpnds9sXt19zXebQK7dVbzggkHNGPP4iqbeFABo2PusTp2bQjXn2EwjuTyvwY6pgFY7SKpqxMKVIfECKGwiySIuOYu547BcH6qZI5kGnHKNqdJ7yT0eMFgQGMIAsKJ8RKynaN09yxm2RzFjfnWqCvQcduwwtbj7ah3ZtM57%2BiP3Y6QBi2cGGrUPDQng%2BCf9%2B%2Bfm4H1Jc2Dtt%2BjWvnKp1q15eK3taeuV99c1RhtpEfteNkVQ4NQQmjaRY%2BKaWyoXUc9SfLcQDeMWCSUibflSQuD3DmlPzss&X-Amz-Signature=1da234549ece428872a19c008d120ee2c1b3a8e8ba25d23ab29cf46e18103a19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6L54ZU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLPlBji%2BWDJ6Ln6R9myYIxVVrI7RC%2BA3ZDqDvaP%2F7%2BVAiAKAwycdvLLd9WQXqUKIBtORbrKqKKMW8I40EWR3locqir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMT4t9EhKFJjRo1pxXKtwDDopCyBUMfbVM3mw2xJrwlA9mu%2Bsvr49frhW1xabCmPdbqsTHOMQLOCeX1huZ9lLSW8V0BG8wk1PEmWFVR6CPfmwjyFgRgrFrozPcLAE8RfDak9iU86mPiEARC%2B6Ys0odNUlQi52FtZMXCNm5HpI%2F5SUBR2ALnpTx89O2zOc2iS%2FgCu0EXLrW21H5RRAwJUTtaQFyprOUZ%2F2YxvhKQo92hCA4L72sQ7JXazs59iWffhRA6TntR%2F4Ih5tlgGNNmhhUW7xNSMfh32cBnxPFYfTcf4zClgcbolwhZ%2FObtE39ZNczznb0WyTFUGla07MgxRLqSxi2YbPVCEgyOhiDrFifZUvZegN8%2BTDxvnL2astffrwKFSut9aAmzZ9JhmwBLhyL6hqD9mze0mQpyE1Tmt0sWb6qHNabxS7FZW6vQWrFipGt8YTYNk8nIwAPalpxT3NquLGx8uw5DSdNfISL9E7Tahn9gShFBTq3MJ%2FJhqIWrQ6fcwptps0brt1FH%2BEvzxSPA4roXzhNnFA8%2FvlCGM1r2d4HDO5VPoA8q5o7E4yhGs7DMz%2BeBON4GuUtAUHZ0zYvRavgFEYpnds9sXt19zXebQK7dVbzggkHNGPP4iqbeFABo2PusTp2bQjXn2EwjuTyvwY6pgFY7SKpqxMKVIfECKGwiySIuOYu547BcH6qZI5kGnHKNqdJ7yT0eMFgQGMIAsKJ8RKynaN09yxm2RzFjfnWqCvQcduwwtbj7ah3ZtM57%2BiP3Y6QBi2cGGrUPDQng%2BCf9%2B%2Bfm4H1Jc2Dtt%2BjWvnKp1q15eK3taeuV99c1RhtpEfteNkVQ4NQQmjaRY%2BKaWyoXUc9SfLcQDeMWCSUibflSQuD3DmlPzss&X-Amz-Signature=787b0375bc4ad8a005bc03ff7701849088e6dbc87a09008d760f9245e9552da2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
