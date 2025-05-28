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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6ALTGN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEI%2B5dEnuNZyiGjMEQpeA%2Bsaud2Y2k1WOFVLvrPAYXC4AiA%2F4NH5%2FpjG8yzE5olTmNFo5SAhMdi6Y4l7s0%2F4rKV6Xir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMzquanZtnOCTMTwdXKtwDz3cAmWKCCJ3bFIVNaeyZLzxMW6%2FqsjGeGFktg1dvyXVAJe2%2Fe%2BUOkhEBbB%2FTIXZBYAYVvHoOGpvQz905xphTClY4z5TVAbH4ZHrC6j36jhyLZVMsfOi8a8TEFLWmwGahjV5EkJDUWkwPZ9NzikCWRKE3osFvjkB2AgR4oeMCmmtZfH%2FFqsZoW7ymcQ%2Fvb6eO9oVB4hFEPwz0pbhZa6dAtGQ58TBfQOl66J%2BJ35D8EEPaRb2YuFVrTbx4E%2FIhpLSafIaLWhtqg5Va81C0ExAOAO6DNTp1ipUgnerv0f%2BoTE3sxSw6%2F6jMIxVZHMU0SHy0NPMNH3Bzh3c7aHoIpSdq3TGq7I%2FgZ5bMpuPI9sfv85Srx7tGbUOAjCXrwrqYF1d6YSrOqMNscBgn9ZOGmKCt7GLKro1e9mZRh1oTWzXa7BCxCTCnYzh2fb0k0zZufEAbviy7mcSdRRm2Huik4uazPVVc3dqqWOPP59Ehzq394siGL4lkl6u2QvLMuS0PbYBB5Nd6FXqxLBdOXkiMwDZHyL9owKa8CrISU91ewaEyTbg%2FsjpD2hwv3kuAcOIIKAW3ud5LMGkBZ4CQenx4YGT2D7ohr9CUt1Tf1i5NzXi3E7keJtbTYQixUanob90w8sLbwQY6pgGl%2BDvmng8Bx2oYCYbmi9Lmd%2BS3FYcZ0aPStXM%2Fg%2BpeV05DyJRNozOmlHBhitDy2vX5mxc%2Fg3aVqlfQXpw8BNgLBIusUIvVYPVqhSmTlVoOqKfVTi8ejkpHfxBcg6LmBjI7EI%2BK6z0uKO9yrdEAQd02sMcEOeWAUDUzDQ2qdqZbd1eVDV6fmTAyGFCf%2Bi5duPoeiQkSs5wDk9PjIYdB4hCEsFtYgioP&X-Amz-Signature=938b7b5d7e94122c9161a308372139c26d5f88d3a2c374e51003f272724f2528&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6ALTGN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEI%2B5dEnuNZyiGjMEQpeA%2Bsaud2Y2k1WOFVLvrPAYXC4AiA%2F4NH5%2FpjG8yzE5olTmNFo5SAhMdi6Y4l7s0%2F4rKV6Xir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMzquanZtnOCTMTwdXKtwDz3cAmWKCCJ3bFIVNaeyZLzxMW6%2FqsjGeGFktg1dvyXVAJe2%2Fe%2BUOkhEBbB%2FTIXZBYAYVvHoOGpvQz905xphTClY4z5TVAbH4ZHrC6j36jhyLZVMsfOi8a8TEFLWmwGahjV5EkJDUWkwPZ9NzikCWRKE3osFvjkB2AgR4oeMCmmtZfH%2FFqsZoW7ymcQ%2Fvb6eO9oVB4hFEPwz0pbhZa6dAtGQ58TBfQOl66J%2BJ35D8EEPaRb2YuFVrTbx4E%2FIhpLSafIaLWhtqg5Va81C0ExAOAO6DNTp1ipUgnerv0f%2BoTE3sxSw6%2F6jMIxVZHMU0SHy0NPMNH3Bzh3c7aHoIpSdq3TGq7I%2FgZ5bMpuPI9sfv85Srx7tGbUOAjCXrwrqYF1d6YSrOqMNscBgn9ZOGmKCt7GLKro1e9mZRh1oTWzXa7BCxCTCnYzh2fb0k0zZufEAbviy7mcSdRRm2Huik4uazPVVc3dqqWOPP59Ehzq394siGL4lkl6u2QvLMuS0PbYBB5Nd6FXqxLBdOXkiMwDZHyL9owKa8CrISU91ewaEyTbg%2FsjpD2hwv3kuAcOIIKAW3ud5LMGkBZ4CQenx4YGT2D7ohr9CUt1Tf1i5NzXi3E7keJtbTYQixUanob90w8sLbwQY6pgGl%2BDvmng8Bx2oYCYbmi9Lmd%2BS3FYcZ0aPStXM%2Fg%2BpeV05DyJRNozOmlHBhitDy2vX5mxc%2Fg3aVqlfQXpw8BNgLBIusUIvVYPVqhSmTlVoOqKfVTi8ejkpHfxBcg6LmBjI7EI%2BK6z0uKO9yrdEAQd02sMcEOeWAUDUzDQ2qdqZbd1eVDV6fmTAyGFCf%2Bi5duPoeiQkSs5wDk9PjIYdB4hCEsFtYgioP&X-Amz-Signature=b4ce97e65978fb3849a60ae569257ff3b778ea469f3d37abdb8190a0c1995131&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6ALTGN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEI%2B5dEnuNZyiGjMEQpeA%2Bsaud2Y2k1WOFVLvrPAYXC4AiA%2F4NH5%2FpjG8yzE5olTmNFo5SAhMdi6Y4l7s0%2F4rKV6Xir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMzquanZtnOCTMTwdXKtwDz3cAmWKCCJ3bFIVNaeyZLzxMW6%2FqsjGeGFktg1dvyXVAJe2%2Fe%2BUOkhEBbB%2FTIXZBYAYVvHoOGpvQz905xphTClY4z5TVAbH4ZHrC6j36jhyLZVMsfOi8a8TEFLWmwGahjV5EkJDUWkwPZ9NzikCWRKE3osFvjkB2AgR4oeMCmmtZfH%2FFqsZoW7ymcQ%2Fvb6eO9oVB4hFEPwz0pbhZa6dAtGQ58TBfQOl66J%2BJ35D8EEPaRb2YuFVrTbx4E%2FIhpLSafIaLWhtqg5Va81C0ExAOAO6DNTp1ipUgnerv0f%2BoTE3sxSw6%2F6jMIxVZHMU0SHy0NPMNH3Bzh3c7aHoIpSdq3TGq7I%2FgZ5bMpuPI9sfv85Srx7tGbUOAjCXrwrqYF1d6YSrOqMNscBgn9ZOGmKCt7GLKro1e9mZRh1oTWzXa7BCxCTCnYzh2fb0k0zZufEAbviy7mcSdRRm2Huik4uazPVVc3dqqWOPP59Ehzq394siGL4lkl6u2QvLMuS0PbYBB5Nd6FXqxLBdOXkiMwDZHyL9owKa8CrISU91ewaEyTbg%2FsjpD2hwv3kuAcOIIKAW3ud5LMGkBZ4CQenx4YGT2D7ohr9CUt1Tf1i5NzXi3E7keJtbTYQixUanob90w8sLbwQY6pgGl%2BDvmng8Bx2oYCYbmi9Lmd%2BS3FYcZ0aPStXM%2Fg%2BpeV05DyJRNozOmlHBhitDy2vX5mxc%2Fg3aVqlfQXpw8BNgLBIusUIvVYPVqhSmTlVoOqKfVTi8ejkpHfxBcg6LmBjI7EI%2BK6z0uKO9yrdEAQd02sMcEOeWAUDUzDQ2qdqZbd1eVDV6fmTAyGFCf%2Bi5duPoeiQkSs5wDk9PjIYdB4hCEsFtYgioP&X-Amz-Signature=4c2b4c86bfa77ec6f992c5a63aba0f45752b58192747a17c0b7fd19e97a4896c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
