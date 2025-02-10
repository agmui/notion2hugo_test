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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PG7Z3XZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTCDwZqJKNkkWLuwJJBpezijTuiEAzDiMLEKrnpXRKwIgZMxDJAk8hpzK1S3I48TJmR9Z943DDrgoYM74dKiMvMQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJP5sOwBkyKrytKRyrcAznbZtUXW1H84DY59Pq7B4oapJLVvKpHG7NOVAgFUzn5tE6D%2B5LNhH9OI5fDq093k2f7NuiA3Q80132%2FS1HaG36PS%2FR6xV1AHfF7OXd5zPY1S8Vz0NJuGDNOOqA0p7svZRAzxn9iFy3NqzvsR%2BvhAlDzx1JXodE4aTx5fYaZOWWDNuVwGG1KAp0MwYviFM187uQhpeoMY8pSRb1%2F8E9Vtn%2BfsScG9489xs%2BXOl5tvKDg%2BUBl5BnRR0JFziZ15MSS7BT7t2ChHAyjR9AFFYvq4kXrJi5JlknqN5hPfWbQLlSiaya1DguGRzWDITP0w8ebFSq2QmjVV5eim99vCELpY6%2BIB8e9UKUypfqHfA1jXylBTF0qyHFjU0Nx8CSLJhRvn7ySF7XT0ycDUv0sLOrz9HpnI6X1bWAHp4tqb36plJlppFsdqQjl2xYFmcKkYdsOQfY1PwU5PzC%2BsiuUxBXHlsSErn4CSCrMc8n9Y91h2LQtdg6d4E60XiCSSlWUBFqD91%2BKAp7ERRdBdf%2BomnR7jArjVmx4039I92H3QBNze6ngGT9Mvv5se82TUyt0kWIHhrVPGY7AdriTcS%2Ft2lfGGqZckcN4QRn2XnAceuuE6EBLtZ4RPBQ%2Frypw8xz4MOfYpr0GOqUBOGjNJychFaSRIQnzbM0BJK6QVVB0PzSFWIxbuHyrjxQmjjGQEYltEzJtU3wMRS2QpohPomoO0HhiddubA%2BStCczOKq2zNxa4Ttns1aO2HvSqyiT29BLAcqnHVrlUv5sHkG90xrlvVNp6VCdoDjZ8rJwb8OaUnETTFhbqAssklypWu407R8VD%2FRAIMarFSO6PHJDR8nQwalVgjF8JvFjv0pKBImLq&X-Amz-Signature=3928676775041580247994ba0f0ce019f7b9ea7145aa26c64b33fd7da199da9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PG7Z3XZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTCDwZqJKNkkWLuwJJBpezijTuiEAzDiMLEKrnpXRKwIgZMxDJAk8hpzK1S3I48TJmR9Z943DDrgoYM74dKiMvMQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJP5sOwBkyKrytKRyrcAznbZtUXW1H84DY59Pq7B4oapJLVvKpHG7NOVAgFUzn5tE6D%2B5LNhH9OI5fDq093k2f7NuiA3Q80132%2FS1HaG36PS%2FR6xV1AHfF7OXd5zPY1S8Vz0NJuGDNOOqA0p7svZRAzxn9iFy3NqzvsR%2BvhAlDzx1JXodE4aTx5fYaZOWWDNuVwGG1KAp0MwYviFM187uQhpeoMY8pSRb1%2F8E9Vtn%2BfsScG9489xs%2BXOl5tvKDg%2BUBl5BnRR0JFziZ15MSS7BT7t2ChHAyjR9AFFYvq4kXrJi5JlknqN5hPfWbQLlSiaya1DguGRzWDITP0w8ebFSq2QmjVV5eim99vCELpY6%2BIB8e9UKUypfqHfA1jXylBTF0qyHFjU0Nx8CSLJhRvn7ySF7XT0ycDUv0sLOrz9HpnI6X1bWAHp4tqb36plJlppFsdqQjl2xYFmcKkYdsOQfY1PwU5PzC%2BsiuUxBXHlsSErn4CSCrMc8n9Y91h2LQtdg6d4E60XiCSSlWUBFqD91%2BKAp7ERRdBdf%2BomnR7jArjVmx4039I92H3QBNze6ngGT9Mvv5se82TUyt0kWIHhrVPGY7AdriTcS%2Ft2lfGGqZckcN4QRn2XnAceuuE6EBLtZ4RPBQ%2Frypw8xz4MOfYpr0GOqUBOGjNJychFaSRIQnzbM0BJK6QVVB0PzSFWIxbuHyrjxQmjjGQEYltEzJtU3wMRS2QpohPomoO0HhiddubA%2BStCczOKq2zNxa4Ttns1aO2HvSqyiT29BLAcqnHVrlUv5sHkG90xrlvVNp6VCdoDjZ8rJwb8OaUnETTFhbqAssklypWu407R8VD%2FRAIMarFSO6PHJDR8nQwalVgjF8JvFjv0pKBImLq&X-Amz-Signature=4447abf5afb2a27f2d0f969bcf266818158a6253854eb85db7522881c4c32fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PG7Z3XZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTCDwZqJKNkkWLuwJJBpezijTuiEAzDiMLEKrnpXRKwIgZMxDJAk8hpzK1S3I48TJmR9Z943DDrgoYM74dKiMvMQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJP5sOwBkyKrytKRyrcAznbZtUXW1H84DY59Pq7B4oapJLVvKpHG7NOVAgFUzn5tE6D%2B5LNhH9OI5fDq093k2f7NuiA3Q80132%2FS1HaG36PS%2FR6xV1AHfF7OXd5zPY1S8Vz0NJuGDNOOqA0p7svZRAzxn9iFy3NqzvsR%2BvhAlDzx1JXodE4aTx5fYaZOWWDNuVwGG1KAp0MwYviFM187uQhpeoMY8pSRb1%2F8E9Vtn%2BfsScG9489xs%2BXOl5tvKDg%2BUBl5BnRR0JFziZ15MSS7BT7t2ChHAyjR9AFFYvq4kXrJi5JlknqN5hPfWbQLlSiaya1DguGRzWDITP0w8ebFSq2QmjVV5eim99vCELpY6%2BIB8e9UKUypfqHfA1jXylBTF0qyHFjU0Nx8CSLJhRvn7ySF7XT0ycDUv0sLOrz9HpnI6X1bWAHp4tqb36plJlppFsdqQjl2xYFmcKkYdsOQfY1PwU5PzC%2BsiuUxBXHlsSErn4CSCrMc8n9Y91h2LQtdg6d4E60XiCSSlWUBFqD91%2BKAp7ERRdBdf%2BomnR7jArjVmx4039I92H3QBNze6ngGT9Mvv5se82TUyt0kWIHhrVPGY7AdriTcS%2Ft2lfGGqZckcN4QRn2XnAceuuE6EBLtZ4RPBQ%2Frypw8xz4MOfYpr0GOqUBOGjNJychFaSRIQnzbM0BJK6QVVB0PzSFWIxbuHyrjxQmjjGQEYltEzJtU3wMRS2QpohPomoO0HhiddubA%2BStCczOKq2zNxa4Ttns1aO2HvSqyiT29BLAcqnHVrlUv5sHkG90xrlvVNp6VCdoDjZ8rJwb8OaUnETTFhbqAssklypWu407R8VD%2FRAIMarFSO6PHJDR8nQwalVgjF8JvFjv0pKBImLq&X-Amz-Signature=03845d94a0aaae0590de697b9e12c267acc48378e316c4aaf81953fed7189a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
