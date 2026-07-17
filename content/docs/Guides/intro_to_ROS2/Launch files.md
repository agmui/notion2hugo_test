---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXZCJU2%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWczc50ElcbF1W6Sk7aMsoI%2Bbzbdx4a2ZqQkWGlf9OQIgGj2GkADBEeWG21V0syH72QlYWz892dBKtM%2FABjeA2iYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDB%2B%2BI7UxJL7sV3h2HyrcA0t3wVj%2Ba7eqCG7M83JiriXYR%2Bcvg9h6FH055ExPlT%2BFNMufB0zJQY4o48Y3fHe%2BrDZMx94AyJCG%2FlNnBAVpDZdZjtQro1Cy%2BOEuKKui0jBert49C7%2BV6ZIDZKXWbjt22uDCVDQQPC0Ycoi4KtXrsg2cjCc%2B2JOSv5UVbfyLZo2yBhNErotM8QzbDIaG6IRF12a448yvayg0y%2Bwjdl1Rgl0rP0yDjVRGDx%2F9a6WikVFHSS%2BLc97izZm85XlUM8%2BBKqB%2B9MW5sGlOHmKb%2BAH0hq7LABmWNKIHCSMoe2RL8%2BpsrkhnBLTnfL4bZw0uEo0A96JmY%2FUM1rdAX8yPWuhZFM0OPJOrIyWf841skBgnxZC%2BKYdFWRCRmOAcdkGFb2AlPSnK9lfF7iO2gnrztzQWLQLZ9TFVhzOMhjuMtmXpYJFmr1aUjA32HfUQ3Ynj1ZN0oQSKXU2h4MhchnFmDrQ2xlD4L7CqflMIta2tbZkhhiWjfGZHWq0cXMTZNuA3lLaWWWo%2FQDzLtes8zKrZ02EhhSj1kUD6NXMUdKWwdbKeM%2BB9MUcA04vL9abM0q8Ua9wuR3VbKTX0xIfp%2FL%2BZgSAXs2L%2BRAvbgPhDXz8jV9EWXdU0UP46r3Pb2WgGNkw%2FMPTy5dIGOqUB7CQNwHyzaBTRIwBNWi1upQ6cJ2ttoWDffIJO9TJkuzLdvPqhxSGHXzEehcEfuVC7bY7uXOt2uqYqf7pOqhlaTIaAXfoPPBPFwwHi5WKylRvjswh0J7ahfafkf61rA2V4YwzjEKHxJsRvkwxXtyoaDBIHVgV1vzfmSeuG8y3WOCTJiAvgWabattUXYsoBmI%2BV%2BUPZl%2Fn0FYNqKvdNC1M8t2s2iMX9&X-Amz-Signature=16f186eb7e4214470fe735b2f9370c29f845a318eada5a68ecb80a1d9650c818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXZCJU2%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWczc50ElcbF1W6Sk7aMsoI%2Bbzbdx4a2ZqQkWGlf9OQIgGj2GkADBEeWG21V0syH72QlYWz892dBKtM%2FABjeA2iYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDB%2B%2BI7UxJL7sV3h2HyrcA0t3wVj%2Ba7eqCG7M83JiriXYR%2Bcvg9h6FH055ExPlT%2BFNMufB0zJQY4o48Y3fHe%2BrDZMx94AyJCG%2FlNnBAVpDZdZjtQro1Cy%2BOEuKKui0jBert49C7%2BV6ZIDZKXWbjt22uDCVDQQPC0Ycoi4KtXrsg2cjCc%2B2JOSv5UVbfyLZo2yBhNErotM8QzbDIaG6IRF12a448yvayg0y%2Bwjdl1Rgl0rP0yDjVRGDx%2F9a6WikVFHSS%2BLc97izZm85XlUM8%2BBKqB%2B9MW5sGlOHmKb%2BAH0hq7LABmWNKIHCSMoe2RL8%2BpsrkhnBLTnfL4bZw0uEo0A96JmY%2FUM1rdAX8yPWuhZFM0OPJOrIyWf841skBgnxZC%2BKYdFWRCRmOAcdkGFb2AlPSnK9lfF7iO2gnrztzQWLQLZ9TFVhzOMhjuMtmXpYJFmr1aUjA32HfUQ3Ynj1ZN0oQSKXU2h4MhchnFmDrQ2xlD4L7CqflMIta2tbZkhhiWjfGZHWq0cXMTZNuA3lLaWWWo%2FQDzLtes8zKrZ02EhhSj1kUD6NXMUdKWwdbKeM%2BB9MUcA04vL9abM0q8Ua9wuR3VbKTX0xIfp%2FL%2BZgSAXs2L%2BRAvbgPhDXz8jV9EWXdU0UP46r3Pb2WgGNkw%2FMPTy5dIGOqUB7CQNwHyzaBTRIwBNWi1upQ6cJ2ttoWDffIJO9TJkuzLdvPqhxSGHXzEehcEfuVC7bY7uXOt2uqYqf7pOqhlaTIaAXfoPPBPFwwHi5WKylRvjswh0J7ahfafkf61rA2V4YwzjEKHxJsRvkwxXtyoaDBIHVgV1vzfmSeuG8y3WOCTJiAvgWabattUXYsoBmI%2BV%2BUPZl%2Fn0FYNqKvdNC1M8t2s2iMX9&X-Amz-Signature=ade68f079f6fbeb38ac31b60d8122e7b0c9f9f9595ec51f0c41984f199b8e1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXZCJU2%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWczc50ElcbF1W6Sk7aMsoI%2Bbzbdx4a2ZqQkWGlf9OQIgGj2GkADBEeWG21V0syH72QlYWz892dBKtM%2FABjeA2iYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDB%2B%2BI7UxJL7sV3h2HyrcA0t3wVj%2Ba7eqCG7M83JiriXYR%2Bcvg9h6FH055ExPlT%2BFNMufB0zJQY4o48Y3fHe%2BrDZMx94AyJCG%2FlNnBAVpDZdZjtQro1Cy%2BOEuKKui0jBert49C7%2BV6ZIDZKXWbjt22uDCVDQQPC0Ycoi4KtXrsg2cjCc%2B2JOSv5UVbfyLZo2yBhNErotM8QzbDIaG6IRF12a448yvayg0y%2Bwjdl1Rgl0rP0yDjVRGDx%2F9a6WikVFHSS%2BLc97izZm85XlUM8%2BBKqB%2B9MW5sGlOHmKb%2BAH0hq7LABmWNKIHCSMoe2RL8%2BpsrkhnBLTnfL4bZw0uEo0A96JmY%2FUM1rdAX8yPWuhZFM0OPJOrIyWf841skBgnxZC%2BKYdFWRCRmOAcdkGFb2AlPSnK9lfF7iO2gnrztzQWLQLZ9TFVhzOMhjuMtmXpYJFmr1aUjA32HfUQ3Ynj1ZN0oQSKXU2h4MhchnFmDrQ2xlD4L7CqflMIta2tbZkhhiWjfGZHWq0cXMTZNuA3lLaWWWo%2FQDzLtes8zKrZ02EhhSj1kUD6NXMUdKWwdbKeM%2BB9MUcA04vL9abM0q8Ua9wuR3VbKTX0xIfp%2FL%2BZgSAXs2L%2BRAvbgPhDXz8jV9EWXdU0UP46r3Pb2WgGNkw%2FMPTy5dIGOqUB7CQNwHyzaBTRIwBNWi1upQ6cJ2ttoWDffIJO9TJkuzLdvPqhxSGHXzEehcEfuVC7bY7uXOt2uqYqf7pOqhlaTIaAXfoPPBPFwwHi5WKylRvjswh0J7ahfafkf61rA2V4YwzjEKHxJsRvkwxXtyoaDBIHVgV1vzfmSeuG8y3WOCTJiAvgWabattUXYsoBmI%2BV%2BUPZl%2Fn0FYNqKvdNC1M8t2s2iMX9&X-Amz-Signature=4ae7e846d1c0746b8b3f31ee975c0f30d1d02547bf68a2717e80e671b6a801a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
