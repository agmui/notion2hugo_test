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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4HJUMIQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAK1RppFRzv3qZ4OaZnAXal4ojxgMcogLXBjquYEsy1LAiAQJGXczMgoT90iGu5Zy%2BJx2lrnCYwHrkYJGlpdFrjmkCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaW45X%2BdWhVwKf7qmKtwDANKwjGcrjUJ2%2FEx8t8fD98st9xjF5LByf05LQK9ZAjvvSiV1hB7Sl3tNuNARYL9Q3hb3OWlnBUqZ4CQ3XwnW7%2Bwk6OlznpS7BwM5MS%2BoYZBuLCi89MO0r%2FPvoGWYz6hd4g%2FLGsgI9XlEzI2fkaIJ8PkonlxCWNYZg%2F%2B9vVQUs4iwk3i6BI0Mb0pJqkC0JXO5FGjSZQP5ioN9PcJRszWWB0MyhqDxtDWKoaUKZ%2B2ksEHxCAxZHmb7%2BHM3hRm8ZALAzed1pXEJ2zGm4vLI0aFxg8dHtAN5D0eIXTDDpp3ZmWztqwhxTWde5%2B30yyoroiNeX3xXSi%2BSskexL42MRR9v7ekYPVcMo9eZO5ooalutNOvmQaL2g9AzmATQ2JakqrE595PtoGG93JQnzAJCja8K%2FnFqH7oGUPHQ%2BKByREufUVVG%2Bf2xVNWv5Air72NMAvZbB3btwnELGTNbQZ1moJbl%2Bq0Q6BFjWcqw8Ej2kk%2FwCesRsFAysBeN%2FIbHYsqH99SIKbsC3mYMv%2F6FN7WGaLCy%2B1dmOW5r67g2%2FPT6zsUXAv6qduCYkIrL5n7B8SZLp7iYuDzQf6u9wBfrQhNuRJ5fq580kCN5AYwdnaXXPoKwMGpgOjnJUZaliyJBoKswufSNwQY6pgGRW8RCMCfjlt%2BLn6KrtdYK5cTD2%2Fn76XWH6aXP6cFlr6OUTcRKUMPoD3%2FCctdxwgZYBCvV4DkapjHRITWFIclvm1ZPcP7jeoypqMHJn%2FlcVw5EoKu5mXgBmBZCLZfVxX7FzzF7CiaOJi2oEgyicgEOpQmXgZA%2BI2BAD6TAFoK%2BCRqAuCE%2BZzkjzZVWSFD28tIQIMUP7TI5Yl3nPn925olq2BjW%2FZ%2BE&X-Amz-Signature=d714154e8891711088989e7845b14c5a9944699355d01268a9c727540ea64c90&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4HJUMIQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAK1RppFRzv3qZ4OaZnAXal4ojxgMcogLXBjquYEsy1LAiAQJGXczMgoT90iGu5Zy%2BJx2lrnCYwHrkYJGlpdFrjmkCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaW45X%2BdWhVwKf7qmKtwDANKwjGcrjUJ2%2FEx8t8fD98st9xjF5LByf05LQK9ZAjvvSiV1hB7Sl3tNuNARYL9Q3hb3OWlnBUqZ4CQ3XwnW7%2Bwk6OlznpS7BwM5MS%2BoYZBuLCi89MO0r%2FPvoGWYz6hd4g%2FLGsgI9XlEzI2fkaIJ8PkonlxCWNYZg%2F%2B9vVQUs4iwk3i6BI0Mb0pJqkC0JXO5FGjSZQP5ioN9PcJRszWWB0MyhqDxtDWKoaUKZ%2B2ksEHxCAxZHmb7%2BHM3hRm8ZALAzed1pXEJ2zGm4vLI0aFxg8dHtAN5D0eIXTDDpp3ZmWztqwhxTWde5%2B30yyoroiNeX3xXSi%2BSskexL42MRR9v7ekYPVcMo9eZO5ooalutNOvmQaL2g9AzmATQ2JakqrE595PtoGG93JQnzAJCja8K%2FnFqH7oGUPHQ%2BKByREufUVVG%2Bf2xVNWv5Air72NMAvZbB3btwnELGTNbQZ1moJbl%2Bq0Q6BFjWcqw8Ej2kk%2FwCesRsFAysBeN%2FIbHYsqH99SIKbsC3mYMv%2F6FN7WGaLCy%2B1dmOW5r67g2%2FPT6zsUXAv6qduCYkIrL5n7B8SZLp7iYuDzQf6u9wBfrQhNuRJ5fq580kCN5AYwdnaXXPoKwMGpgOjnJUZaliyJBoKswufSNwQY6pgGRW8RCMCfjlt%2BLn6KrtdYK5cTD2%2Fn76XWH6aXP6cFlr6OUTcRKUMPoD3%2FCctdxwgZYBCvV4DkapjHRITWFIclvm1ZPcP7jeoypqMHJn%2FlcVw5EoKu5mXgBmBZCLZfVxX7FzzF7CiaOJi2oEgyicgEOpQmXgZA%2BI2BAD6TAFoK%2BCRqAuCE%2BZzkjzZVWSFD28tIQIMUP7TI5Yl3nPn925olq2BjW%2FZ%2BE&X-Amz-Signature=22d6522e97ccf115b958d6f73136fdfd3fb1357e3a6339fe47a603de9373e493&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4HJUMIQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAK1RppFRzv3qZ4OaZnAXal4ojxgMcogLXBjquYEsy1LAiAQJGXczMgoT90iGu5Zy%2BJx2lrnCYwHrkYJGlpdFrjmkCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaW45X%2BdWhVwKf7qmKtwDANKwjGcrjUJ2%2FEx8t8fD98st9xjF5LByf05LQK9ZAjvvSiV1hB7Sl3tNuNARYL9Q3hb3OWlnBUqZ4CQ3XwnW7%2Bwk6OlznpS7BwM5MS%2BoYZBuLCi89MO0r%2FPvoGWYz6hd4g%2FLGsgI9XlEzI2fkaIJ8PkonlxCWNYZg%2F%2B9vVQUs4iwk3i6BI0Mb0pJqkC0JXO5FGjSZQP5ioN9PcJRszWWB0MyhqDxtDWKoaUKZ%2B2ksEHxCAxZHmb7%2BHM3hRm8ZALAzed1pXEJ2zGm4vLI0aFxg8dHtAN5D0eIXTDDpp3ZmWztqwhxTWde5%2B30yyoroiNeX3xXSi%2BSskexL42MRR9v7ekYPVcMo9eZO5ooalutNOvmQaL2g9AzmATQ2JakqrE595PtoGG93JQnzAJCja8K%2FnFqH7oGUPHQ%2BKByREufUVVG%2Bf2xVNWv5Air72NMAvZbB3btwnELGTNbQZ1moJbl%2Bq0Q6BFjWcqw8Ej2kk%2FwCesRsFAysBeN%2FIbHYsqH99SIKbsC3mYMv%2F6FN7WGaLCy%2B1dmOW5r67g2%2FPT6zsUXAv6qduCYkIrL5n7B8SZLp7iYuDzQf6u9wBfrQhNuRJ5fq580kCN5AYwdnaXXPoKwMGpgOjnJUZaliyJBoKswufSNwQY6pgGRW8RCMCfjlt%2BLn6KrtdYK5cTD2%2Fn76XWH6aXP6cFlr6OUTcRKUMPoD3%2FCctdxwgZYBCvV4DkapjHRITWFIclvm1ZPcP7jeoypqMHJn%2FlcVw5EoKu5mXgBmBZCLZfVxX7FzzF7CiaOJi2oEgyicgEOpQmXgZA%2BI2BAD6TAFoK%2BCRqAuCE%2BZzkjzZVWSFD28tIQIMUP7TI5Yl3nPn925olq2BjW%2FZ%2BE&X-Amz-Signature=267a0dc05908e7e4ee944a453c79f15e6491add08f15d9cc0d46005d77bcf85a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
