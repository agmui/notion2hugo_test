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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTEB5VJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKq8JFYG6REBXvtjcEKbwfaTOnsFzn3FC9leIJlzYHBQIhAOV3Y3pdSUQdJNrkCTOfTGTh98%2F8QmOWaOUrbBnieaJjKv8DCBcQABoMNjM3NDIzMTgzODA1IgxZ%2BYDBS4RbgrSQTlMq3AMYFj%2FRMav0eWqCKecLaIvAsL4GMjS4SdGaPxG3QXoe3VRzlJ5Nyofe%2Fe7PbAbIcS0LefwK%2FyvylAFhZ7jZrjCS68nj6SKk2KPJ%2FJ7JwWUkbwydclrgf%2FJpseb541EKf3WVd1nG4Whr0mHrlI36yNId7fqoEMPmBdzJb81whU2A5hvB5lf6asSkh90Nag3ue0Wy%2B%2B8kDOwHsOJ3S5zYjGpsGUcD3Gtf2IeQdQ0WVEKGB5cDDACseJGBFE3xCsKDWa%2BuNKjZkPF8OKmcengo6bUGw5FeS3%2F%2FoaBtG9XqQsAAKZreGUM%2BUJWk1aQdDkxzMaOOq8jU9fQ8Rp4dZwPjCj1Jpe%2B7zycL8AlQIG1LMtCsBYO8iQEAX0cEkvfUJ2%2FY3o6dU%2Bcg%2BC1Jc5BSVK9qz64UgDQcHwm6ms46a9d%2B0Wp6Gn%2FUCr5tuAlkw%2F0IR4w2AfbDYe9UBk8Wblw7TiIBsOrfw6H8dOLcnvazR6No2BgLv98nOMQcYq%2FuQbgYsDVKqi4sSwCqJBluHNyyXCW6bfPJ9kPKxIP0Ks8IrRtWoEbj57TAO7ZSfWRLWBGQccG2OkLogaRe69d%2BF37xicoLnNF1mmGifwDRRIVONPqmwWSNmSdGneDXyoqSYNA2XzC8qPS%2FBjqkAU1avwhYZ8pfVDzEV8zHqCa%2F%2FvK4JhMbGwoi6GqydHEv5ZmjmrAUN765PpO7PuBTlIOnRAC%2FIXgLDk9Ne%2FfV1mbvahZj%2Bi7ajX3jm1djayytPWuO%2FSiv3giDICK16uaV%2F8wjp6i%2F1MpHlXAK5awNRw6xIabwV9eynkce9iyApnr70zAJQJUpKic9wBIfsooLUEfhke4jHx79sgq1MkWwpuj09Mfq&X-Amz-Signature=14a2a1d3cba47fc40ce8eb1dc2f709464770b473b61c7075f46daf3872635940&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTEB5VJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKq8JFYG6REBXvtjcEKbwfaTOnsFzn3FC9leIJlzYHBQIhAOV3Y3pdSUQdJNrkCTOfTGTh98%2F8QmOWaOUrbBnieaJjKv8DCBcQABoMNjM3NDIzMTgzODA1IgxZ%2BYDBS4RbgrSQTlMq3AMYFj%2FRMav0eWqCKecLaIvAsL4GMjS4SdGaPxG3QXoe3VRzlJ5Nyofe%2Fe7PbAbIcS0LefwK%2FyvylAFhZ7jZrjCS68nj6SKk2KPJ%2FJ7JwWUkbwydclrgf%2FJpseb541EKf3WVd1nG4Whr0mHrlI36yNId7fqoEMPmBdzJb81whU2A5hvB5lf6asSkh90Nag3ue0Wy%2B%2B8kDOwHsOJ3S5zYjGpsGUcD3Gtf2IeQdQ0WVEKGB5cDDACseJGBFE3xCsKDWa%2BuNKjZkPF8OKmcengo6bUGw5FeS3%2F%2FoaBtG9XqQsAAKZreGUM%2BUJWk1aQdDkxzMaOOq8jU9fQ8Rp4dZwPjCj1Jpe%2B7zycL8AlQIG1LMtCsBYO8iQEAX0cEkvfUJ2%2FY3o6dU%2Bcg%2BC1Jc5BSVK9qz64UgDQcHwm6ms46a9d%2B0Wp6Gn%2FUCr5tuAlkw%2F0IR4w2AfbDYe9UBk8Wblw7TiIBsOrfw6H8dOLcnvazR6No2BgLv98nOMQcYq%2FuQbgYsDVKqi4sSwCqJBluHNyyXCW6bfPJ9kPKxIP0Ks8IrRtWoEbj57TAO7ZSfWRLWBGQccG2OkLogaRe69d%2BF37xicoLnNF1mmGifwDRRIVONPqmwWSNmSdGneDXyoqSYNA2XzC8qPS%2FBjqkAU1avwhYZ8pfVDzEV8zHqCa%2F%2FvK4JhMbGwoi6GqydHEv5ZmjmrAUN765PpO7PuBTlIOnRAC%2FIXgLDk9Ne%2FfV1mbvahZj%2Bi7ajX3jm1djayytPWuO%2FSiv3giDICK16uaV%2F8wjp6i%2F1MpHlXAK5awNRw6xIabwV9eynkce9iyApnr70zAJQJUpKic9wBIfsooLUEfhke4jHx79sgq1MkWwpuj09Mfq&X-Amz-Signature=80a64055bd71e58b338f2e11863d27165c01093247955704c4b57fbc650f34f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTEB5VJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKq8JFYG6REBXvtjcEKbwfaTOnsFzn3FC9leIJlzYHBQIhAOV3Y3pdSUQdJNrkCTOfTGTh98%2F8QmOWaOUrbBnieaJjKv8DCBcQABoMNjM3NDIzMTgzODA1IgxZ%2BYDBS4RbgrSQTlMq3AMYFj%2FRMav0eWqCKecLaIvAsL4GMjS4SdGaPxG3QXoe3VRzlJ5Nyofe%2Fe7PbAbIcS0LefwK%2FyvylAFhZ7jZrjCS68nj6SKk2KPJ%2FJ7JwWUkbwydclrgf%2FJpseb541EKf3WVd1nG4Whr0mHrlI36yNId7fqoEMPmBdzJb81whU2A5hvB5lf6asSkh90Nag3ue0Wy%2B%2B8kDOwHsOJ3S5zYjGpsGUcD3Gtf2IeQdQ0WVEKGB5cDDACseJGBFE3xCsKDWa%2BuNKjZkPF8OKmcengo6bUGw5FeS3%2F%2FoaBtG9XqQsAAKZreGUM%2BUJWk1aQdDkxzMaOOq8jU9fQ8Rp4dZwPjCj1Jpe%2B7zycL8AlQIG1LMtCsBYO8iQEAX0cEkvfUJ2%2FY3o6dU%2Bcg%2BC1Jc5BSVK9qz64UgDQcHwm6ms46a9d%2B0Wp6Gn%2FUCr5tuAlkw%2F0IR4w2AfbDYe9UBk8Wblw7TiIBsOrfw6H8dOLcnvazR6No2BgLv98nOMQcYq%2FuQbgYsDVKqi4sSwCqJBluHNyyXCW6bfPJ9kPKxIP0Ks8IrRtWoEbj57TAO7ZSfWRLWBGQccG2OkLogaRe69d%2BF37xicoLnNF1mmGifwDRRIVONPqmwWSNmSdGneDXyoqSYNA2XzC8qPS%2FBjqkAU1avwhYZ8pfVDzEV8zHqCa%2F%2FvK4JhMbGwoi6GqydHEv5ZmjmrAUN765PpO7PuBTlIOnRAC%2FIXgLDk9Ne%2FfV1mbvahZj%2Bi7ajX3jm1djayytPWuO%2FSiv3giDICK16uaV%2F8wjp6i%2F1MpHlXAK5awNRw6xIabwV9eynkce9iyApnr70zAJQJUpKic9wBIfsooLUEfhke4jHx79sgq1MkWwpuj09Mfq&X-Amz-Signature=feaa7a54e99a7da31b525ac63b8c00aaf42edb5731dd8602b94d24aebcf321ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
