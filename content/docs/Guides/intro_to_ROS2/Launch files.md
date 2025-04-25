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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLC4RKD3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuGV53bC6OwRScnewIMdVtTbPpGS0lOmau7ovRGUCXcAIhAKfFVR6yOw%2FOEqRUpsNxMeUwvVw6B5B8hKjK%2BhFzZojmKv8DCCgQABoMNjM3NDIzMTgzODA1IgxJfYNKMYCnVW9Yvhoq3AMYtGtImUZ%2Blh7KUTClpXv9djx37EngW%2FTdRJADDtJJwhTNilUvy3zd4JfkttlPN%2BBUfmz9Wl1SPY2KIF%2FTWN1zUq43uqrgGZzbr3xAYyewpLfLk3qQ%2BTBP1xbufSvyN6g0VWnaexZMVpGmBADmq8TQpBKQLc1YFHzrucWU4s6KUTM%2B5fB1xcoEW7ukAQJzcaYUNPstaEvQtJwnKWChqWiE2un5wwbGOkGvqJBBRdqD4FVaqWy10%2BbPQ1o75RcWe0j53J32vW1Bwq4oK%2Bm%2B2XWosg4x9K379LebNrQ%2BW1dysNMb1vU2lj5O3gXr6Mtcj990yWY68tg9hV3FMTqpzL2dXHg3K9ZTNlF1EfCvqW%2FEOFEo6XHRlpV5Q2anwj1%2FTWgTNtVezSOMEx8cq9BZftibmC6Gm392J%2BmlMfeT%2FJsrqzYHqsVHqGwGj8SdkV8xlFvzpTFhoIk4c9YKM%2BY6%2BCUJjS4yXfiCq47unn31Ln9wX0NSIFGlGxeN8%2FRix2qgVlmuYKKfsD3D0oj5saXPrJps1bUDx6Sor7BwaelQJKZvBtxc6PIXxSxnxpH%2FlavLQmBS3SVsdu5x4FVT0e8tFgAbg2VEhk4FWji9ThqYIstcR8HPO1CyTYjm3%2BTqrzCz5qzABjqkATF%2Fhqiyn79BwfgfcffE12JkrsKWFoXoR9eV2HDRrQLSw1qnZ%2BDxrEqT5u9zf4%2Fj3atVbgmMRxrTHiUNxd5CCNZWT%2FPr5y1L3s0jSLhS%2FYRSjbZymf2bpKSyZ6pKTxpjXaFJt3%2FkxHwjjcSwZKs1bm9pRWuLpS6tO6PINScL1wVkQZOAtfts%2B6eyD%2FymgcvCjdOiaMrncicn%2BaZYTNbmPf%2FqtcjW&X-Amz-Signature=b8ba1027fc147f3790fcd4cec006931611bd5858e762a7f5fc12eced87c829d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLC4RKD3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuGV53bC6OwRScnewIMdVtTbPpGS0lOmau7ovRGUCXcAIhAKfFVR6yOw%2FOEqRUpsNxMeUwvVw6B5B8hKjK%2BhFzZojmKv8DCCgQABoMNjM3NDIzMTgzODA1IgxJfYNKMYCnVW9Yvhoq3AMYtGtImUZ%2Blh7KUTClpXv9djx37EngW%2FTdRJADDtJJwhTNilUvy3zd4JfkttlPN%2BBUfmz9Wl1SPY2KIF%2FTWN1zUq43uqrgGZzbr3xAYyewpLfLk3qQ%2BTBP1xbufSvyN6g0VWnaexZMVpGmBADmq8TQpBKQLc1YFHzrucWU4s6KUTM%2B5fB1xcoEW7ukAQJzcaYUNPstaEvQtJwnKWChqWiE2un5wwbGOkGvqJBBRdqD4FVaqWy10%2BbPQ1o75RcWe0j53J32vW1Bwq4oK%2Bm%2B2XWosg4x9K379LebNrQ%2BW1dysNMb1vU2lj5O3gXr6Mtcj990yWY68tg9hV3FMTqpzL2dXHg3K9ZTNlF1EfCvqW%2FEOFEo6XHRlpV5Q2anwj1%2FTWgTNtVezSOMEx8cq9BZftibmC6Gm392J%2BmlMfeT%2FJsrqzYHqsVHqGwGj8SdkV8xlFvzpTFhoIk4c9YKM%2BY6%2BCUJjS4yXfiCq47unn31Ln9wX0NSIFGlGxeN8%2FRix2qgVlmuYKKfsD3D0oj5saXPrJps1bUDx6Sor7BwaelQJKZvBtxc6PIXxSxnxpH%2FlavLQmBS3SVsdu5x4FVT0e8tFgAbg2VEhk4FWji9ThqYIstcR8HPO1CyTYjm3%2BTqrzCz5qzABjqkATF%2Fhqiyn79BwfgfcffE12JkrsKWFoXoR9eV2HDRrQLSw1qnZ%2BDxrEqT5u9zf4%2Fj3atVbgmMRxrTHiUNxd5CCNZWT%2FPr5y1L3s0jSLhS%2FYRSjbZymf2bpKSyZ6pKTxpjXaFJt3%2FkxHwjjcSwZKs1bm9pRWuLpS6tO6PINScL1wVkQZOAtfts%2B6eyD%2FymgcvCjdOiaMrncicn%2BaZYTNbmPf%2FqtcjW&X-Amz-Signature=e82de4f01b08d9c5490615f6c37b14ca5d505035180f55fe5d070fa144609364&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLC4RKD3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuGV53bC6OwRScnewIMdVtTbPpGS0lOmau7ovRGUCXcAIhAKfFVR6yOw%2FOEqRUpsNxMeUwvVw6B5B8hKjK%2BhFzZojmKv8DCCgQABoMNjM3NDIzMTgzODA1IgxJfYNKMYCnVW9Yvhoq3AMYtGtImUZ%2Blh7KUTClpXv9djx37EngW%2FTdRJADDtJJwhTNilUvy3zd4JfkttlPN%2BBUfmz9Wl1SPY2KIF%2FTWN1zUq43uqrgGZzbr3xAYyewpLfLk3qQ%2BTBP1xbufSvyN6g0VWnaexZMVpGmBADmq8TQpBKQLc1YFHzrucWU4s6KUTM%2B5fB1xcoEW7ukAQJzcaYUNPstaEvQtJwnKWChqWiE2un5wwbGOkGvqJBBRdqD4FVaqWy10%2BbPQ1o75RcWe0j53J32vW1Bwq4oK%2Bm%2B2XWosg4x9K379LebNrQ%2BW1dysNMb1vU2lj5O3gXr6Mtcj990yWY68tg9hV3FMTqpzL2dXHg3K9ZTNlF1EfCvqW%2FEOFEo6XHRlpV5Q2anwj1%2FTWgTNtVezSOMEx8cq9BZftibmC6Gm392J%2BmlMfeT%2FJsrqzYHqsVHqGwGj8SdkV8xlFvzpTFhoIk4c9YKM%2BY6%2BCUJjS4yXfiCq47unn31Ln9wX0NSIFGlGxeN8%2FRix2qgVlmuYKKfsD3D0oj5saXPrJps1bUDx6Sor7BwaelQJKZvBtxc6PIXxSxnxpH%2FlavLQmBS3SVsdu5x4FVT0e8tFgAbg2VEhk4FWji9ThqYIstcR8HPO1CyTYjm3%2BTqrzCz5qzABjqkATF%2Fhqiyn79BwfgfcffE12JkrsKWFoXoR9eV2HDRrQLSw1qnZ%2BDxrEqT5u9zf4%2Fj3atVbgmMRxrTHiUNxd5CCNZWT%2FPr5y1L3s0jSLhS%2FYRSjbZymf2bpKSyZ6pKTxpjXaFJt3%2FkxHwjjcSwZKs1bm9pRWuLpS6tO6PINScL1wVkQZOAtfts%2B6eyD%2FymgcvCjdOiaMrncicn%2BaZYTNbmPf%2FqtcjW&X-Amz-Signature=9a1e98043def564ee0f877e6fa9d4892f753e9bd513aecf35ea54451d854d8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
