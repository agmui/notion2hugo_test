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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7M2M7R%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGVQCNS24xCbhWjn09uOJ60AvzSJTm3GpxI9FWHrFHmnAiAMDpYHpd7wrdSrpKvVsEYgvfeWPHuARHBlVent6FmjuyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQfNR3gzCjhUPnT62KtwD3vyYmk6nruu%2FshadawWifE%2FrFT9tCpozX9OCFM3mk4J1qB6caxjwMOFT2p0XvE%2BfIi68pz9smfohDhFtSXKDT7f9ru87B280CqpsUN5U%2B1uG1iH8BKrKsCJXUwcjizdsDrdqjBZEVtcranaipXRYVCEyoB1mmh293m5CsGf1pm1SmRMq0cQcR0w6JLD3En0Xp%2FMvVBJrt1BNwWpVEWqA6JOyYsjNnn%2FD%2Fgc8HdN2SCRaD%2BeWH6m6sr4oIItz16rQPnE%2Fr0hGG7%2BydsKvNWjPfJ2FxZJsElyN1weB5Lxt6uVqqeUMVwQEJSIET7m4MWUcY%2FtCUz0dHVyCIAMWCJY7TmsTziBqBHXU6dj1vrKQMr7Q4I0fQAgrKC%2BAfl9Huc%2B%2FBi0izLnuDPovKsbum8xW44pFKPtU5GggXSRAslWTxRr9KLGjfEpv%2F5U3hzlZw5r1ZQOiWzRiorPUP0%2BNXxaCeR8%2BJqL6WCKPAFUCTy8jyiLT0VO8YPBcjw%2FERT4ySZYBWk0p4w9rgr5QRF9uJuC1OsCUy98nDB6Qxj%2Ftn0IEqpGZtKsHvy%2FRSgB4W4t1RlU3bmCKjrv%2FyMUwjDBbRwrwgbFCMexYFJp0gg8rhd7H5dSl%2FitTiRigg1VPzUUwv5yrvwY6pgH%2Fww%2FSW6KPYFBihzwYdQzyR3Y01qTpuRXLlOkZjx2ZZV2yUqAf1pb3e7%2BFZxlkGCMTrBF5KclDl6lFYgvwIsGYvKpjsHQABGkeHJ%2FwVDMDYhiEhvGKFsSfcOHQqbWgx1a2ThPz5nSLoveTC4IMlNydKttLYXHEmX3hby70kSFPSiKRZymAG9EB%2FNsxyaCcAy%2FJEw3UOWc1PsF%2F6Zz6k1u7DHfP4ElE&X-Amz-Signature=b0a90615737e708c5ec12d17858cf717558ea5f42a4beba1e49ac5a14e9527b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7M2M7R%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGVQCNS24xCbhWjn09uOJ60AvzSJTm3GpxI9FWHrFHmnAiAMDpYHpd7wrdSrpKvVsEYgvfeWPHuARHBlVent6FmjuyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQfNR3gzCjhUPnT62KtwD3vyYmk6nruu%2FshadawWifE%2FrFT9tCpozX9OCFM3mk4J1qB6caxjwMOFT2p0XvE%2BfIi68pz9smfohDhFtSXKDT7f9ru87B280CqpsUN5U%2B1uG1iH8BKrKsCJXUwcjizdsDrdqjBZEVtcranaipXRYVCEyoB1mmh293m5CsGf1pm1SmRMq0cQcR0w6JLD3En0Xp%2FMvVBJrt1BNwWpVEWqA6JOyYsjNnn%2FD%2Fgc8HdN2SCRaD%2BeWH6m6sr4oIItz16rQPnE%2Fr0hGG7%2BydsKvNWjPfJ2FxZJsElyN1weB5Lxt6uVqqeUMVwQEJSIET7m4MWUcY%2FtCUz0dHVyCIAMWCJY7TmsTziBqBHXU6dj1vrKQMr7Q4I0fQAgrKC%2BAfl9Huc%2B%2FBi0izLnuDPovKsbum8xW44pFKPtU5GggXSRAslWTxRr9KLGjfEpv%2F5U3hzlZw5r1ZQOiWzRiorPUP0%2BNXxaCeR8%2BJqL6WCKPAFUCTy8jyiLT0VO8YPBcjw%2FERT4ySZYBWk0p4w9rgr5QRF9uJuC1OsCUy98nDB6Qxj%2Ftn0IEqpGZtKsHvy%2FRSgB4W4t1RlU3bmCKjrv%2FyMUwjDBbRwrwgbFCMexYFJp0gg8rhd7H5dSl%2FitTiRigg1VPzUUwv5yrvwY6pgH%2Fww%2FSW6KPYFBihzwYdQzyR3Y01qTpuRXLlOkZjx2ZZV2yUqAf1pb3e7%2BFZxlkGCMTrBF5KclDl6lFYgvwIsGYvKpjsHQABGkeHJ%2FwVDMDYhiEhvGKFsSfcOHQqbWgx1a2ThPz5nSLoveTC4IMlNydKttLYXHEmX3hby70kSFPSiKRZymAG9EB%2FNsxyaCcAy%2FJEw3UOWc1PsF%2F6Zz6k1u7DHfP4ElE&X-Amz-Signature=faea6f16f89eb96aad12f38341e516532c71b6e011c3dfea0e751a2d4bd021f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7M2M7R%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGVQCNS24xCbhWjn09uOJ60AvzSJTm3GpxI9FWHrFHmnAiAMDpYHpd7wrdSrpKvVsEYgvfeWPHuARHBlVent6FmjuyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQfNR3gzCjhUPnT62KtwD3vyYmk6nruu%2FshadawWifE%2FrFT9tCpozX9OCFM3mk4J1qB6caxjwMOFT2p0XvE%2BfIi68pz9smfohDhFtSXKDT7f9ru87B280CqpsUN5U%2B1uG1iH8BKrKsCJXUwcjizdsDrdqjBZEVtcranaipXRYVCEyoB1mmh293m5CsGf1pm1SmRMq0cQcR0w6JLD3En0Xp%2FMvVBJrt1BNwWpVEWqA6JOyYsjNnn%2FD%2Fgc8HdN2SCRaD%2BeWH6m6sr4oIItz16rQPnE%2Fr0hGG7%2BydsKvNWjPfJ2FxZJsElyN1weB5Lxt6uVqqeUMVwQEJSIET7m4MWUcY%2FtCUz0dHVyCIAMWCJY7TmsTziBqBHXU6dj1vrKQMr7Q4I0fQAgrKC%2BAfl9Huc%2B%2FBi0izLnuDPovKsbum8xW44pFKPtU5GggXSRAslWTxRr9KLGjfEpv%2F5U3hzlZw5r1ZQOiWzRiorPUP0%2BNXxaCeR8%2BJqL6WCKPAFUCTy8jyiLT0VO8YPBcjw%2FERT4ySZYBWk0p4w9rgr5QRF9uJuC1OsCUy98nDB6Qxj%2Ftn0IEqpGZtKsHvy%2FRSgB4W4t1RlU3bmCKjrv%2FyMUwjDBbRwrwgbFCMexYFJp0gg8rhd7H5dSl%2FitTiRigg1VPzUUwv5yrvwY6pgH%2Fww%2FSW6KPYFBihzwYdQzyR3Y01qTpuRXLlOkZjx2ZZV2yUqAf1pb3e7%2BFZxlkGCMTrBF5KclDl6lFYgvwIsGYvKpjsHQABGkeHJ%2FwVDMDYhiEhvGKFsSfcOHQqbWgx1a2ThPz5nSLoveTC4IMlNydKttLYXHEmX3hby70kSFPSiKRZymAG9EB%2FNsxyaCcAy%2FJEw3UOWc1PsF%2F6Zz6k1u7DHfP4ElE&X-Amz-Signature=6d151c407c93ea6e14a1b623cb6f41465f0d6d40a2ad0f49654a7b48a9a3a97f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
