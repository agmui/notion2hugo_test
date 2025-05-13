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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5UR5KO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHhZUF3vRk6ybUrgDHeiquxMJdqgfpgu%2ByHi%2F%2FV6OCbiAiEAqN8h5Er4%2FYlWy%2B1WroXJPBBcAa2R2tqQOheD9lgQVLIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP8eU2ukxWDJMulzCrcAw5rtSFiNF6V6zPTOumcln1fYEjyAh8JGkP2iDHhJNj00k%2B1V%2F5B5UngVY4aO9k7iT19RnBcCXwa1583OXD%2Bd06B1hDBVIgJqj%2BA6I25ypnVMbi%2FId%2FT1nz0zT9n1XNbbC5b9gX48IpIqd6wJRd9D3elXSx2ALhVyK9CsSKoESJUZqLsdda89W%2FbBZSON%2BdD4BM7hhhXNTqGqsS1b%2FRWbDXejYj2wP2BNuZxUcwQVLzsOWLJEJlzr7GdJIdg%2F9AObkn82Mf8ZLhuDNwZtu7l5pWfzzNgdO97Zq88LnkOdIqn4VENCs2Uk0v1CP2I02BjeIrCwgcXgVs4Em4sS4dUDVWmBATJVj5t8%2FjDAQLJFfIQidBFGKQ%2FGtbL1Ck8ypNo6US0jsnfXBbSXVPaGaN4FwrT%2BMLVDB1rV0Uzj7qowMkW6gKlRjTtAC5%2F6lhtYKBw%2FSoa1IbRaTTdrng6fYfdIhalYyhXjHJbUPsRPey1dYS%2FId%2FxiKAuPfHH6hAeBNKjkuwLDId0xA9SVRZ3%2BGlHI9tL2fBUUyF0psT7cJnxjI%2BV9L8YVWzJptejdyXQ7DWpC6JnXJUDRs9Zf6kBhhBBg1%2BZ61apWK3xrspwuOjSVcmC2ki%2FoEp2OgemIn0uMOb3isEGOqUBRr1%2BHqDL7jrnP37j93QsicRPI9JwY2%2F%2BzBdnDLbb1hW6l1PriI4CngwB%2F93xtEkuutfCdxhK7yfRdEeW0wWzelH55d5zqegolHEDugbLOO%2BLXayWLGvXgZj471Cf4FkNclOJiI5zK3oXMfQra7FthdDfqNTmjs7Tm8E5obFDgaGTThDLkMZs5%2BGa%2F9kqaWOLBOjY94zNzu5q20tSNVNW%2F6bc0NJ4&X-Amz-Signature=5591a290b3f15f1d4cb73a540c10ca37e839a23c9c9b4a9f9f8cd07762607a13&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5UR5KO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHhZUF3vRk6ybUrgDHeiquxMJdqgfpgu%2ByHi%2F%2FV6OCbiAiEAqN8h5Er4%2FYlWy%2B1WroXJPBBcAa2R2tqQOheD9lgQVLIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP8eU2ukxWDJMulzCrcAw5rtSFiNF6V6zPTOumcln1fYEjyAh8JGkP2iDHhJNj00k%2B1V%2F5B5UngVY4aO9k7iT19RnBcCXwa1583OXD%2Bd06B1hDBVIgJqj%2BA6I25ypnVMbi%2FId%2FT1nz0zT9n1XNbbC5b9gX48IpIqd6wJRd9D3elXSx2ALhVyK9CsSKoESJUZqLsdda89W%2FbBZSON%2BdD4BM7hhhXNTqGqsS1b%2FRWbDXejYj2wP2BNuZxUcwQVLzsOWLJEJlzr7GdJIdg%2F9AObkn82Mf8ZLhuDNwZtu7l5pWfzzNgdO97Zq88LnkOdIqn4VENCs2Uk0v1CP2I02BjeIrCwgcXgVs4Em4sS4dUDVWmBATJVj5t8%2FjDAQLJFfIQidBFGKQ%2FGtbL1Ck8ypNo6US0jsnfXBbSXVPaGaN4FwrT%2BMLVDB1rV0Uzj7qowMkW6gKlRjTtAC5%2F6lhtYKBw%2FSoa1IbRaTTdrng6fYfdIhalYyhXjHJbUPsRPey1dYS%2FId%2FxiKAuPfHH6hAeBNKjkuwLDId0xA9SVRZ3%2BGlHI9tL2fBUUyF0psT7cJnxjI%2BV9L8YVWzJptejdyXQ7DWpC6JnXJUDRs9Zf6kBhhBBg1%2BZ61apWK3xrspwuOjSVcmC2ki%2FoEp2OgemIn0uMOb3isEGOqUBRr1%2BHqDL7jrnP37j93QsicRPI9JwY2%2F%2BzBdnDLbb1hW6l1PriI4CngwB%2F93xtEkuutfCdxhK7yfRdEeW0wWzelH55d5zqegolHEDugbLOO%2BLXayWLGvXgZj471Cf4FkNclOJiI5zK3oXMfQra7FthdDfqNTmjs7Tm8E5obFDgaGTThDLkMZs5%2BGa%2F9kqaWOLBOjY94zNzu5q20tSNVNW%2F6bc0NJ4&X-Amz-Signature=c9c73afa2830a1b7524b64cfe09598e92759a047fce1596c7cad7cf24a56557f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5UR5KO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHhZUF3vRk6ybUrgDHeiquxMJdqgfpgu%2ByHi%2F%2FV6OCbiAiEAqN8h5Er4%2FYlWy%2B1WroXJPBBcAa2R2tqQOheD9lgQVLIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP8eU2ukxWDJMulzCrcAw5rtSFiNF6V6zPTOumcln1fYEjyAh8JGkP2iDHhJNj00k%2B1V%2F5B5UngVY4aO9k7iT19RnBcCXwa1583OXD%2Bd06B1hDBVIgJqj%2BA6I25ypnVMbi%2FId%2FT1nz0zT9n1XNbbC5b9gX48IpIqd6wJRd9D3elXSx2ALhVyK9CsSKoESJUZqLsdda89W%2FbBZSON%2BdD4BM7hhhXNTqGqsS1b%2FRWbDXejYj2wP2BNuZxUcwQVLzsOWLJEJlzr7GdJIdg%2F9AObkn82Mf8ZLhuDNwZtu7l5pWfzzNgdO97Zq88LnkOdIqn4VENCs2Uk0v1CP2I02BjeIrCwgcXgVs4Em4sS4dUDVWmBATJVj5t8%2FjDAQLJFfIQidBFGKQ%2FGtbL1Ck8ypNo6US0jsnfXBbSXVPaGaN4FwrT%2BMLVDB1rV0Uzj7qowMkW6gKlRjTtAC5%2F6lhtYKBw%2FSoa1IbRaTTdrng6fYfdIhalYyhXjHJbUPsRPey1dYS%2FId%2FxiKAuPfHH6hAeBNKjkuwLDId0xA9SVRZ3%2BGlHI9tL2fBUUyF0psT7cJnxjI%2BV9L8YVWzJptejdyXQ7DWpC6JnXJUDRs9Zf6kBhhBBg1%2BZ61apWK3xrspwuOjSVcmC2ki%2FoEp2OgemIn0uMOb3isEGOqUBRr1%2BHqDL7jrnP37j93QsicRPI9JwY2%2F%2BzBdnDLbb1hW6l1PriI4CngwB%2F93xtEkuutfCdxhK7yfRdEeW0wWzelH55d5zqegolHEDugbLOO%2BLXayWLGvXgZj471Cf4FkNclOJiI5zK3oXMfQra7FthdDfqNTmjs7Tm8E5obFDgaGTThDLkMZs5%2BGa%2F9kqaWOLBOjY94zNzu5q20tSNVNW%2F6bc0NJ4&X-Amz-Signature=af4972dc6164a1f0ce2da75dc828995a94948e9524b9b3f91b79488a82933998&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
