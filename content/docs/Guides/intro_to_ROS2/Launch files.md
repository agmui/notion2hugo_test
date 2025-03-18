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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZV36CNB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD3mHZzDW2EJPsGIykAwANF%2FK1uNPkLq23kl1pAvg4Z1QIhANt9gOCmDUf%2FUX6dhWxd05l%2FlvOQYJWsByNENpqjx57cKv8DCGYQABoMNjM3NDIzMTgzODA1Igwwtu0S5gNoAu45Q30q3AMvyyndqnLg3GmckyoUxDg8V789E102IF2yQAIlgwbjGV2gndTDNVC87a4HMNdMM%2BZfYKS9YxwrwEnm8TZuSK3M2lhVqgw65%2Bs0CwykmjTGawBgy2LTZbvcvvOhzWPnJNjVcBcC2xTn%2FZBoPQrnLZuK82Eml2Jp263k6I7szXGh5k7lJkkwaKpKCxzHPd34vYzMPpzHaEvga8X29ap9Kxj18sJ%2Fa3R1Gey7NJDkCQT6pZO9j7YhoUDgz7CKc6N4jgs3XeA%2Fukby48H9GBkmGNNYs%2B4OZkJLh%2FLngU3O%2Ba3at9VMtUS%2BqdeWplZAMBp%2F3XXTqAplVedqoIq3Xm3Gsu%2B1fYMjmwb%2F88Lq3Aiats288ffDBNgFcEZXMDQ9pHPG4fxDmxIpHny5R7FHDEHN5X8xS758lU9uQD3ySfTurJLJED5AeAOmdZBlFMPAf5V0UtPdaKanapoECqKEwZx1NnDprmSirMN%2FLCF3QMG3qc%2BMEu00Y9RP91p3kgTOqFNR20%2FlA94GlTfQJjpST0rGFcwu9rlDfhjYhkMqA4He413KgZS0H1haVZgdXwl2uNFsGpDy8a09hGTW2hFFWudVO7UISUFqyAEBE%2FVj3jLKXnQslNDkjb9s%2Bg28fAovSjCFsue%2BBjqkAc7q8Ecst2Hd2GN%2FieZvwMT5otMCMBxlrIyr6%2Bl9j37dRzuMnvR6pHIUlOlH6ydSwBs2thUqi%2BiJQOTyA6Ut8wR0dMXYVV0VnZazF7yq6QYj0d9j4lgeJU86owegvsT71xbV0O%2FJRiRFKdz83fGljcsT9IHIVNGtNgBQI%2F6mcj%2B%2BSA7KsEXdEs9TNl10JJwuOH6rrhg3FjO6ARQWJk4CRCFJZZhI&X-Amz-Signature=ce44c1235b68fd6bce2b85476464c77daf6d37f9240728ca327473cf68c6cbe1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZV36CNB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD3mHZzDW2EJPsGIykAwANF%2FK1uNPkLq23kl1pAvg4Z1QIhANt9gOCmDUf%2FUX6dhWxd05l%2FlvOQYJWsByNENpqjx57cKv8DCGYQABoMNjM3NDIzMTgzODA1Igwwtu0S5gNoAu45Q30q3AMvyyndqnLg3GmckyoUxDg8V789E102IF2yQAIlgwbjGV2gndTDNVC87a4HMNdMM%2BZfYKS9YxwrwEnm8TZuSK3M2lhVqgw65%2Bs0CwykmjTGawBgy2LTZbvcvvOhzWPnJNjVcBcC2xTn%2FZBoPQrnLZuK82Eml2Jp263k6I7szXGh5k7lJkkwaKpKCxzHPd34vYzMPpzHaEvga8X29ap9Kxj18sJ%2Fa3R1Gey7NJDkCQT6pZO9j7YhoUDgz7CKc6N4jgs3XeA%2Fukby48H9GBkmGNNYs%2B4OZkJLh%2FLngU3O%2Ba3at9VMtUS%2BqdeWplZAMBp%2F3XXTqAplVedqoIq3Xm3Gsu%2B1fYMjmwb%2F88Lq3Aiats288ffDBNgFcEZXMDQ9pHPG4fxDmxIpHny5R7FHDEHN5X8xS758lU9uQD3ySfTurJLJED5AeAOmdZBlFMPAf5V0UtPdaKanapoECqKEwZx1NnDprmSirMN%2FLCF3QMG3qc%2BMEu00Y9RP91p3kgTOqFNR20%2FlA94GlTfQJjpST0rGFcwu9rlDfhjYhkMqA4He413KgZS0H1haVZgdXwl2uNFsGpDy8a09hGTW2hFFWudVO7UISUFqyAEBE%2FVj3jLKXnQslNDkjb9s%2Bg28fAovSjCFsue%2BBjqkAc7q8Ecst2Hd2GN%2FieZvwMT5otMCMBxlrIyr6%2Bl9j37dRzuMnvR6pHIUlOlH6ydSwBs2thUqi%2BiJQOTyA6Ut8wR0dMXYVV0VnZazF7yq6QYj0d9j4lgeJU86owegvsT71xbV0O%2FJRiRFKdz83fGljcsT9IHIVNGtNgBQI%2F6mcj%2B%2BSA7KsEXdEs9TNl10JJwuOH6rrhg3FjO6ARQWJk4CRCFJZZhI&X-Amz-Signature=47e8a74bad820157e551535c0faa4f1bc02e28f10367de8e3dc73dd92ed29e10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZV36CNB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD3mHZzDW2EJPsGIykAwANF%2FK1uNPkLq23kl1pAvg4Z1QIhANt9gOCmDUf%2FUX6dhWxd05l%2FlvOQYJWsByNENpqjx57cKv8DCGYQABoMNjM3NDIzMTgzODA1Igwwtu0S5gNoAu45Q30q3AMvyyndqnLg3GmckyoUxDg8V789E102IF2yQAIlgwbjGV2gndTDNVC87a4HMNdMM%2BZfYKS9YxwrwEnm8TZuSK3M2lhVqgw65%2Bs0CwykmjTGawBgy2LTZbvcvvOhzWPnJNjVcBcC2xTn%2FZBoPQrnLZuK82Eml2Jp263k6I7szXGh5k7lJkkwaKpKCxzHPd34vYzMPpzHaEvga8X29ap9Kxj18sJ%2Fa3R1Gey7NJDkCQT6pZO9j7YhoUDgz7CKc6N4jgs3XeA%2Fukby48H9GBkmGNNYs%2B4OZkJLh%2FLngU3O%2Ba3at9VMtUS%2BqdeWplZAMBp%2F3XXTqAplVedqoIq3Xm3Gsu%2B1fYMjmwb%2F88Lq3Aiats288ffDBNgFcEZXMDQ9pHPG4fxDmxIpHny5R7FHDEHN5X8xS758lU9uQD3ySfTurJLJED5AeAOmdZBlFMPAf5V0UtPdaKanapoECqKEwZx1NnDprmSirMN%2FLCF3QMG3qc%2BMEu00Y9RP91p3kgTOqFNR20%2FlA94GlTfQJjpST0rGFcwu9rlDfhjYhkMqA4He413KgZS0H1haVZgdXwl2uNFsGpDy8a09hGTW2hFFWudVO7UISUFqyAEBE%2FVj3jLKXnQslNDkjb9s%2Bg28fAovSjCFsue%2BBjqkAc7q8Ecst2Hd2GN%2FieZvwMT5otMCMBxlrIyr6%2Bl9j37dRzuMnvR6pHIUlOlH6ydSwBs2thUqi%2BiJQOTyA6Ut8wR0dMXYVV0VnZazF7yq6QYj0d9j4lgeJU86owegvsT71xbV0O%2FJRiRFKdz83fGljcsT9IHIVNGtNgBQI%2F6mcj%2B%2BSA7KsEXdEs9TNl10JJwuOH6rrhg3FjO6ARQWJk4CRCFJZZhI&X-Amz-Signature=f7811fdc35aef5bc7482efffcccfa56bf1d517437dbb52c630a0cc38cb26e841&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
