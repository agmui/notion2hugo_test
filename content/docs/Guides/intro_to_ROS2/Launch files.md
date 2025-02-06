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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZMAP6DT%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAZp7TSC%2BZfwNLsPNYkEfQu4BPrlKwrx87NbBXnj9VJHAiApe8CeSJcsav4qf50MsezgtuWof2A5xtUFo3t19WKNAyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMqmyUN%2Fj7XjZBkDikKtwDDqfiAKLncAqZs4wqOYlfu1UVnas4fGGE5KCM9%2BrqavmlDWim7BKMeijvClH%2BvWdshC0ksB%2B%2FF2JfdAWBgaVeC92J%2F2%2BYKkMo0Epyy6w9B5PyfR%2FoqCqgSOV7OpouvlGYDbIsBOogUOW3boqmyAP0Y4Zk5Ko2n%2BlX988P%2BXNBGtrlBIZvVn9X2tjSumWlaVQgBpspcrX%2Fmkpaai1hIt2WgJVpZYQAfku6y6K3jCWOXu6yfDYQROlIugpVVJMp%2FR3yNUvNNK%2FCAqx73UGu7fhlRoWQbllB5uygfeKYaKgSxUT7g24mCE2xC6uhZl%2FnZ0MrAEkkvCa3agxhu1GAS5SxzpjDY0YyCnv4bRKPUyxJtNghVJB7vukrJ%2FyTAQuWI4EX6zeq8eX4StNyXgzWD%2BYrDgCb4l5mKlUQugxkyRSMC4gvYpH9s%2B%2FG2UqpZs0uty%2FmDWYXzkIvWMnr5RChEMFnWYPO5f4quK%2B18%2BFp7vAv5hxCmmcGDnX0pbFzOfSHGH7ppMmEjSHQU3UsyEf8GmukCGcgfhFpg%2Fe6I1PA0JphXnMapIX9UwUfprmocAHx2C99APRmVpcUErDTyvvF9NCiDFg9qUekHsLo2VG7yajrUQLhtYLhbaxGcAwChmkw3%2F6UvQY6pgEY4SbEIYxMWsZh%2BfWBasON%2FYQAbTnxFcJvLyO0%2B6SJrUxMhqXQm4wnfHTtpfNxSYWS7mxOmSrSQhBIQGw2xi5xUyEGUNz9Mil2M2AUMKzzGmY4JISC3ljbo3pbRDMdePq4KWmi6mXX86umt0iAfgmt8ZfFZp%2FwONEsUgA3hQeSy5Qk1I%2BNIkf2FwGXDczS9jvrGdgPzCwxlk7UtES%2B43z3eSqBkNZN&X-Amz-Signature=ddab4394eb3ba838845dce43478e93f1bc663eb5e92d42fd788434e2db38c24b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZMAP6DT%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAZp7TSC%2BZfwNLsPNYkEfQu4BPrlKwrx87NbBXnj9VJHAiApe8CeSJcsav4qf50MsezgtuWof2A5xtUFo3t19WKNAyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMqmyUN%2Fj7XjZBkDikKtwDDqfiAKLncAqZs4wqOYlfu1UVnas4fGGE5KCM9%2BrqavmlDWim7BKMeijvClH%2BvWdshC0ksB%2B%2FF2JfdAWBgaVeC92J%2F2%2BYKkMo0Epyy6w9B5PyfR%2FoqCqgSOV7OpouvlGYDbIsBOogUOW3boqmyAP0Y4Zk5Ko2n%2BlX988P%2BXNBGtrlBIZvVn9X2tjSumWlaVQgBpspcrX%2Fmkpaai1hIt2WgJVpZYQAfku6y6K3jCWOXu6yfDYQROlIugpVVJMp%2FR3yNUvNNK%2FCAqx73UGu7fhlRoWQbllB5uygfeKYaKgSxUT7g24mCE2xC6uhZl%2FnZ0MrAEkkvCa3agxhu1GAS5SxzpjDY0YyCnv4bRKPUyxJtNghVJB7vukrJ%2FyTAQuWI4EX6zeq8eX4StNyXgzWD%2BYrDgCb4l5mKlUQugxkyRSMC4gvYpH9s%2B%2FG2UqpZs0uty%2FmDWYXzkIvWMnr5RChEMFnWYPO5f4quK%2B18%2BFp7vAv5hxCmmcGDnX0pbFzOfSHGH7ppMmEjSHQU3UsyEf8GmukCGcgfhFpg%2Fe6I1PA0JphXnMapIX9UwUfprmocAHx2C99APRmVpcUErDTyvvF9NCiDFg9qUekHsLo2VG7yajrUQLhtYLhbaxGcAwChmkw3%2F6UvQY6pgEY4SbEIYxMWsZh%2BfWBasON%2FYQAbTnxFcJvLyO0%2B6SJrUxMhqXQm4wnfHTtpfNxSYWS7mxOmSrSQhBIQGw2xi5xUyEGUNz9Mil2M2AUMKzzGmY4JISC3ljbo3pbRDMdePq4KWmi6mXX86umt0iAfgmt8ZfFZp%2FwONEsUgA3hQeSy5Qk1I%2BNIkf2FwGXDczS9jvrGdgPzCwxlk7UtES%2B43z3eSqBkNZN&X-Amz-Signature=ce6e46882b72996db780fd51793c44e3d853ddf6d1f71a7f6b49cfa10395f7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZMAP6DT%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAZp7TSC%2BZfwNLsPNYkEfQu4BPrlKwrx87NbBXnj9VJHAiApe8CeSJcsav4qf50MsezgtuWof2A5xtUFo3t19WKNAyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMqmyUN%2Fj7XjZBkDikKtwDDqfiAKLncAqZs4wqOYlfu1UVnas4fGGE5KCM9%2BrqavmlDWim7BKMeijvClH%2BvWdshC0ksB%2B%2FF2JfdAWBgaVeC92J%2F2%2BYKkMo0Epyy6w9B5PyfR%2FoqCqgSOV7OpouvlGYDbIsBOogUOW3boqmyAP0Y4Zk5Ko2n%2BlX988P%2BXNBGtrlBIZvVn9X2tjSumWlaVQgBpspcrX%2Fmkpaai1hIt2WgJVpZYQAfku6y6K3jCWOXu6yfDYQROlIugpVVJMp%2FR3yNUvNNK%2FCAqx73UGu7fhlRoWQbllB5uygfeKYaKgSxUT7g24mCE2xC6uhZl%2FnZ0MrAEkkvCa3agxhu1GAS5SxzpjDY0YyCnv4bRKPUyxJtNghVJB7vukrJ%2FyTAQuWI4EX6zeq8eX4StNyXgzWD%2BYrDgCb4l5mKlUQugxkyRSMC4gvYpH9s%2B%2FG2UqpZs0uty%2FmDWYXzkIvWMnr5RChEMFnWYPO5f4quK%2B18%2BFp7vAv5hxCmmcGDnX0pbFzOfSHGH7ppMmEjSHQU3UsyEf8GmukCGcgfhFpg%2Fe6I1PA0JphXnMapIX9UwUfprmocAHx2C99APRmVpcUErDTyvvF9NCiDFg9qUekHsLo2VG7yajrUQLhtYLhbaxGcAwChmkw3%2F6UvQY6pgEY4SbEIYxMWsZh%2BfWBasON%2FYQAbTnxFcJvLyO0%2B6SJrUxMhqXQm4wnfHTtpfNxSYWS7mxOmSrSQhBIQGw2xi5xUyEGUNz9Mil2M2AUMKzzGmY4JISC3ljbo3pbRDMdePq4KWmi6mXX86umt0iAfgmt8ZfFZp%2FwONEsUgA3hQeSy5Qk1I%2BNIkf2FwGXDczS9jvrGdgPzCwxlk7UtES%2B43z3eSqBkNZN&X-Amz-Signature=415e907e665806b80fdcb215196c8061b86c424143bbfda1426ac834103732e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
