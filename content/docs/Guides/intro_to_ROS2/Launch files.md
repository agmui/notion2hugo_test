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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AY7WCQJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFfCCD3n4onCphFz3O555YaHKyRtbENV7KqFgt4s0LjFAiEAwXgRTHzf5Cy5p%2Bwnv%2BkcBoAf6dnuqH1uYli4Mk%2F21CcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAP1oF%2B5DgKMtVHQJSrcA2fU1zkVAeFACZ3hHA3Lg89xIICQ1r3VfS7UNqeNedUDvUtMCX0pm2uj%2Fa8nyS8uGJkAjCPNZVIkB6a9RvLiIR6q89jHUYi0bx6o5DSAMsZTVUdsSJe%2Bf7j%2Fq0WA8BD4Zw6tRXVg4MwHzaQWGPaV3NKeoi671pcaKvDCAwOPuKWkijNtGERx9BaPpfksXlGXoBEW55REvzRS6%2FTKhBROzP0o3%2FOGq6Q3Hc%2F%2F2bzPMf2m%2BA8F92bEQI5YganzeP8w8QHrlR78ce9rJ0gY2lHhUMYMcYSrwUZCdTnyFUqEbA8FYGuGtvFhiHoGa%2FVdKV8PTvhBTmWWL6VY%2F8MdxKG3wMAPaFuozkRqqdYnA2FiXt6hox5igAgabxSg%2BxrPduo66dIQ0cab7aYHrRodpMflmSW0TO%2B97wv9H%2FJ5kAZMNnyJeVb8zxL%2FHvDmoHVpKQ2OLEQL9ut9Xnp5NNzTpUJGl2gEdWeAK98CZIlNJ0wzIA0022LjBmGxUHcOe2ajCMG%2BYuTzqjHy1%2Fv2z%2F0Q7D75I3S3XVYnTEilKhVtbfXRnL%2BCwOzK7w1rnN9rjRs5onSWpA1v0NbOn5yTnJHLPV8WpbQpOPbhmS6HVqGShVCrx4be4c0un7V4pjQWyo8OMJDYwsEGOqUB88RRRG%2FYZZDzHUem2c%2FwGPNuKEeIQjxicaCGepZWhuj8KDq1kXjB49kHP9%2BGmTPjBgFYA6auw%2BD33kTvJu0d3Z8AU1iJUIQ0q%2BzVDL57YXlivbv6T3on4SfzA5geIYjIARrlpcZCVXsDXMLzpawUCR%2Foa69RhC%2Bax1Gwt7ZTVaLUcyQFXHjcvjEfaSqSFv0z%2BV8hXNemBzQLQ6iHA3n%2BHLoeC59g&X-Amz-Signature=ba915507de58960c6b374548aabe89f205accacab88aab6d9f51491634e7bb47&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AY7WCQJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFfCCD3n4onCphFz3O555YaHKyRtbENV7KqFgt4s0LjFAiEAwXgRTHzf5Cy5p%2Bwnv%2BkcBoAf6dnuqH1uYli4Mk%2F21CcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAP1oF%2B5DgKMtVHQJSrcA2fU1zkVAeFACZ3hHA3Lg89xIICQ1r3VfS7UNqeNedUDvUtMCX0pm2uj%2Fa8nyS8uGJkAjCPNZVIkB6a9RvLiIR6q89jHUYi0bx6o5DSAMsZTVUdsSJe%2Bf7j%2Fq0WA8BD4Zw6tRXVg4MwHzaQWGPaV3NKeoi671pcaKvDCAwOPuKWkijNtGERx9BaPpfksXlGXoBEW55REvzRS6%2FTKhBROzP0o3%2FOGq6Q3Hc%2F%2F2bzPMf2m%2BA8F92bEQI5YganzeP8w8QHrlR78ce9rJ0gY2lHhUMYMcYSrwUZCdTnyFUqEbA8FYGuGtvFhiHoGa%2FVdKV8PTvhBTmWWL6VY%2F8MdxKG3wMAPaFuozkRqqdYnA2FiXt6hox5igAgabxSg%2BxrPduo66dIQ0cab7aYHrRodpMflmSW0TO%2B97wv9H%2FJ5kAZMNnyJeVb8zxL%2FHvDmoHVpKQ2OLEQL9ut9Xnp5NNzTpUJGl2gEdWeAK98CZIlNJ0wzIA0022LjBmGxUHcOe2ajCMG%2BYuTzqjHy1%2Fv2z%2F0Q7D75I3S3XVYnTEilKhVtbfXRnL%2BCwOzK7w1rnN9rjRs5onSWpA1v0NbOn5yTnJHLPV8WpbQpOPbhmS6HVqGShVCrx4be4c0un7V4pjQWyo8OMJDYwsEGOqUB88RRRG%2FYZZDzHUem2c%2FwGPNuKEeIQjxicaCGepZWhuj8KDq1kXjB49kHP9%2BGmTPjBgFYA6auw%2BD33kTvJu0d3Z8AU1iJUIQ0q%2BzVDL57YXlivbv6T3on4SfzA5geIYjIARrlpcZCVXsDXMLzpawUCR%2Foa69RhC%2Bax1Gwt7ZTVaLUcyQFXHjcvjEfaSqSFv0z%2BV8hXNemBzQLQ6iHA3n%2BHLoeC59g&X-Amz-Signature=106aa37ba0f1ea797f3528e219df244767b7a7884acbf373a895deb838e10ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AY7WCQJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFfCCD3n4onCphFz3O555YaHKyRtbENV7KqFgt4s0LjFAiEAwXgRTHzf5Cy5p%2Bwnv%2BkcBoAf6dnuqH1uYli4Mk%2F21CcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAP1oF%2B5DgKMtVHQJSrcA2fU1zkVAeFACZ3hHA3Lg89xIICQ1r3VfS7UNqeNedUDvUtMCX0pm2uj%2Fa8nyS8uGJkAjCPNZVIkB6a9RvLiIR6q89jHUYi0bx6o5DSAMsZTVUdsSJe%2Bf7j%2Fq0WA8BD4Zw6tRXVg4MwHzaQWGPaV3NKeoi671pcaKvDCAwOPuKWkijNtGERx9BaPpfksXlGXoBEW55REvzRS6%2FTKhBROzP0o3%2FOGq6Q3Hc%2F%2F2bzPMf2m%2BA8F92bEQI5YganzeP8w8QHrlR78ce9rJ0gY2lHhUMYMcYSrwUZCdTnyFUqEbA8FYGuGtvFhiHoGa%2FVdKV8PTvhBTmWWL6VY%2F8MdxKG3wMAPaFuozkRqqdYnA2FiXt6hox5igAgabxSg%2BxrPduo66dIQ0cab7aYHrRodpMflmSW0TO%2B97wv9H%2FJ5kAZMNnyJeVb8zxL%2FHvDmoHVpKQ2OLEQL9ut9Xnp5NNzTpUJGl2gEdWeAK98CZIlNJ0wzIA0022LjBmGxUHcOe2ajCMG%2BYuTzqjHy1%2Fv2z%2F0Q7D75I3S3XVYnTEilKhVtbfXRnL%2BCwOzK7w1rnN9rjRs5onSWpA1v0NbOn5yTnJHLPV8WpbQpOPbhmS6HVqGShVCrx4be4c0un7V4pjQWyo8OMJDYwsEGOqUB88RRRG%2FYZZDzHUem2c%2FwGPNuKEeIQjxicaCGepZWhuj8KDq1kXjB49kHP9%2BGmTPjBgFYA6auw%2BD33kTvJu0d3Z8AU1iJUIQ0q%2BzVDL57YXlivbv6T3on4SfzA5geIYjIARrlpcZCVXsDXMLzpawUCR%2Foa69RhC%2Bax1Gwt7ZTVaLUcyQFXHjcvjEfaSqSFv0z%2BV8hXNemBzQLQ6iHA3n%2BHLoeC59g&X-Amz-Signature=60a5dada493e52e5e1875109f9314d68d6f93ef3ae9d28154051281676d5a998&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
