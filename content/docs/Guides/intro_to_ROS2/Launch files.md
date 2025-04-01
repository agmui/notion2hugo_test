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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGATRC6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDEWFyVYZz9Ou78tPNb2QVVo9SQyimC5DgHYgy6oclyrAIhAOIsd%2Fcuv4%2FEANO%2B5SDY8xMoEL1zx%2F9h8Iwi4S6%2Ffaf4KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9rRvSWUKLuut9FKEq3ANN0etPjlAT1Vz14S%2BZzCL3xTmh3QYT8d4oZfj5yVwO0TaiVyVXaiHTRYibLYlo%2BeRAqWPCusjvki4%2B060Y0csLk4KoM%2BQ1719dK%2BQts2sEyul8mJvyzbKc%2FWLjAykEvAlNyyZf5W6BusykCxJogq5BgaGrqZgyx7mQ0PGvnWYA1uEDI7EXLzdOxD6GPbpf4U%2FYNitjLJDERyGPkHeup14L146aSvYXNyMCrAwHhkkQooaa8iO8NFKpNjn9o2vWwI%2FyJm74ioX5FP32KZA80jvSwJ%2Fay0rUKArf2H%2BvSbU34ZA6nwkMmYGRYPEsrdcTcf%2BXLkSjiRNs%2BUw6R0mcHt3kUQxU%2FuGk29MLL7voAqqxTvCFfRQ7EXWPFNBXPgWSTy2oOe7bWfPiBQ752TwTRBlNx8lFznwEv2W9jn%2BZ9Cs30RO0VLSu6%2FUs87U%2BxmibpqXyCoX50AijENPcJFIYt2jfyneApCjUHo8dWwNDDAkRf5ut4JwMgRpuSDuwSuzG2x6xInjVq1wI%2BH9479rv2%2BEs18o%2FzWjytqMbs519bLkvKIWeR7oUIC4EJUm2UPcfHJ15GHKTS7OVsSdwfCRRiyxi82lmqRjWorBQnbYiSaFOFPc3j7lWSWpbWCoprTD4qLG%2FBjqkAQcEWp2Zp0gBTJsYaLcm8569nLYNX54pDjdx0MtsuRJbGmjzW32%2FJbSo8SUQLXbnCGMoz0%2FKKvwglJbTef5%2FHtX5rdp6n5fVA2TYqyA9FK0UtQC1MK%2Fpq9Y%2BFW7OrZKH9DHg3CqSq5I0qttLwY5Q7ShGjxwHf9nRA88G1Bl99BFGRtxA%2BHobA2xuWsRvGfJ6VubWWVXPiR9G5qgbDmdoqh2vx2kS&X-Amz-Signature=b9d5908b0ffc1f6f6cf238a99a641fb5b849f6d3b6a800e86256dbdf095657c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGATRC6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDEWFyVYZz9Ou78tPNb2QVVo9SQyimC5DgHYgy6oclyrAIhAOIsd%2Fcuv4%2FEANO%2B5SDY8xMoEL1zx%2F9h8Iwi4S6%2Ffaf4KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9rRvSWUKLuut9FKEq3ANN0etPjlAT1Vz14S%2BZzCL3xTmh3QYT8d4oZfj5yVwO0TaiVyVXaiHTRYibLYlo%2BeRAqWPCusjvki4%2B060Y0csLk4KoM%2BQ1719dK%2BQts2sEyul8mJvyzbKc%2FWLjAykEvAlNyyZf5W6BusykCxJogq5BgaGrqZgyx7mQ0PGvnWYA1uEDI7EXLzdOxD6GPbpf4U%2FYNitjLJDERyGPkHeup14L146aSvYXNyMCrAwHhkkQooaa8iO8NFKpNjn9o2vWwI%2FyJm74ioX5FP32KZA80jvSwJ%2Fay0rUKArf2H%2BvSbU34ZA6nwkMmYGRYPEsrdcTcf%2BXLkSjiRNs%2BUw6R0mcHt3kUQxU%2FuGk29MLL7voAqqxTvCFfRQ7EXWPFNBXPgWSTy2oOe7bWfPiBQ752TwTRBlNx8lFznwEv2W9jn%2BZ9Cs30RO0VLSu6%2FUs87U%2BxmibpqXyCoX50AijENPcJFIYt2jfyneApCjUHo8dWwNDDAkRf5ut4JwMgRpuSDuwSuzG2x6xInjVq1wI%2BH9479rv2%2BEs18o%2FzWjytqMbs519bLkvKIWeR7oUIC4EJUm2UPcfHJ15GHKTS7OVsSdwfCRRiyxi82lmqRjWorBQnbYiSaFOFPc3j7lWSWpbWCoprTD4qLG%2FBjqkAQcEWp2Zp0gBTJsYaLcm8569nLYNX54pDjdx0MtsuRJbGmjzW32%2FJbSo8SUQLXbnCGMoz0%2FKKvwglJbTef5%2FHtX5rdp6n5fVA2TYqyA9FK0UtQC1MK%2Fpq9Y%2BFW7OrZKH9DHg3CqSq5I0qttLwY5Q7ShGjxwHf9nRA88G1Bl99BFGRtxA%2BHobA2xuWsRvGfJ6VubWWVXPiR9G5qgbDmdoqh2vx2kS&X-Amz-Signature=2508362413ba1af1228bfcd8c594a89e981a189d951e9759dfbd6be18486e628&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGATRC6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDEWFyVYZz9Ou78tPNb2QVVo9SQyimC5DgHYgy6oclyrAIhAOIsd%2Fcuv4%2FEANO%2B5SDY8xMoEL1zx%2F9h8Iwi4S6%2Ffaf4KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9rRvSWUKLuut9FKEq3ANN0etPjlAT1Vz14S%2BZzCL3xTmh3QYT8d4oZfj5yVwO0TaiVyVXaiHTRYibLYlo%2BeRAqWPCusjvki4%2B060Y0csLk4KoM%2BQ1719dK%2BQts2sEyul8mJvyzbKc%2FWLjAykEvAlNyyZf5W6BusykCxJogq5BgaGrqZgyx7mQ0PGvnWYA1uEDI7EXLzdOxD6GPbpf4U%2FYNitjLJDERyGPkHeup14L146aSvYXNyMCrAwHhkkQooaa8iO8NFKpNjn9o2vWwI%2FyJm74ioX5FP32KZA80jvSwJ%2Fay0rUKArf2H%2BvSbU34ZA6nwkMmYGRYPEsrdcTcf%2BXLkSjiRNs%2BUw6R0mcHt3kUQxU%2FuGk29MLL7voAqqxTvCFfRQ7EXWPFNBXPgWSTy2oOe7bWfPiBQ752TwTRBlNx8lFznwEv2W9jn%2BZ9Cs30RO0VLSu6%2FUs87U%2BxmibpqXyCoX50AijENPcJFIYt2jfyneApCjUHo8dWwNDDAkRf5ut4JwMgRpuSDuwSuzG2x6xInjVq1wI%2BH9479rv2%2BEs18o%2FzWjytqMbs519bLkvKIWeR7oUIC4EJUm2UPcfHJ15GHKTS7OVsSdwfCRRiyxi82lmqRjWorBQnbYiSaFOFPc3j7lWSWpbWCoprTD4qLG%2FBjqkAQcEWp2Zp0gBTJsYaLcm8569nLYNX54pDjdx0MtsuRJbGmjzW32%2FJbSo8SUQLXbnCGMoz0%2FKKvwglJbTef5%2FHtX5rdp6n5fVA2TYqyA9FK0UtQC1MK%2Fpq9Y%2BFW7OrZKH9DHg3CqSq5I0qttLwY5Q7ShGjxwHf9nRA88G1Bl99BFGRtxA%2BHobA2xuWsRvGfJ6VubWWVXPiR9G5qgbDmdoqh2vx2kS&X-Amz-Signature=017363e07f2aae4ac1f0006ea0980c9f658944c84f79bd3e179ea1acdd2eb2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
