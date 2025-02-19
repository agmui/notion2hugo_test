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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAPVAOR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD6eJuKd8T3mQd9pZQhjwq4D1bku7tAlapV8Gw%2BSpXEEQIgL%2FKS1nXAn85evsBAweR5kuDcimNS1c1O5LG%2F0Y%2BvzqQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO9Xj16dG%2F%2F30loRyrcA6Vl4WIaH9BD7y%2BxqJobfksgzL2EJmtR1ntXIYE5UfiWl%2BDh78iSOnQlUn5UnuZNibwa3oKh5fychB8gQCR56YKcZnRxk2i7yC86Gl3wWTUfwRQMRNV3t3jsLFeQmFTwyZubOMz%2BtUqa%2BJAHpDXqprFcw7955BASD8ys9c8OVqXJVvmB%2Bh0KYIDJ45NZhCKzj3NM2pPWRN55FCg7jGi0mwssC3RiHpUvdxftRKZ1DRFJYPpq6TpnHRpfecbLO4tAQ8bNDn3y6fMOft2DSXGGiknlo7Aa%2BcIYgWfSg2hiJ3vGWdSJ09wivyBRfHA4Envu8D8L2EcExSuuy%2F1oVrHDfMZh67rEVWCR9ZtlY%2FgkH6yqdxmy3ApA7k9K61dMTcdl4SQhy1KqpCiLPCVA2r%2BAlXmCEigOAPhod09y0cGgVJIQoRf3EAM28i14bzT2daoBb4n9WrSE7aLXhE5SjXwrtf7pzPHwBPN73uqAZCryR47PpRtyDtrd4WK0ii5s88c2azLP0mJ09mJ9maz3%2BjAgSLGr7b7Q66VAeibGkNuvtq%2BK0HQqmGsRvLCXwxhmdglBzVvMQdxPpC%2B9U0WbsZ8cy9AtWExxEsoXhrz07Juph35VYkclQo1x9AiBD%2BEBMJW81r0GOqUBIpaL6F0vk1yUQJxaKTVMxbJzLTrB0AS8Iiwyv4qC61zSfvQJGJ9hMffGGFuTMGAwl0Vg28WJHfXWbCKD%2FFM78C7H8as0G7TaJI2QEcGAMMksDkRBhU7%2B3yih3%2FDghvfL6gyEFUGnZX9Kb5jJ1NcDu26%2B1fSa8Gni%2BARlIZSqFDjgv2pH7VZ8bcgyIMLJJBdJ06A1Nnryj%2FtUl6qeRgWiKUiT7LDJ&X-Amz-Signature=b0fbebfa867cfe66e18ba9c04b072e6c23c747217985960f77f30c60ea9864d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAPVAOR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD6eJuKd8T3mQd9pZQhjwq4D1bku7tAlapV8Gw%2BSpXEEQIgL%2FKS1nXAn85evsBAweR5kuDcimNS1c1O5LG%2F0Y%2BvzqQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO9Xj16dG%2F%2F30loRyrcA6Vl4WIaH9BD7y%2BxqJobfksgzL2EJmtR1ntXIYE5UfiWl%2BDh78iSOnQlUn5UnuZNibwa3oKh5fychB8gQCR56YKcZnRxk2i7yC86Gl3wWTUfwRQMRNV3t3jsLFeQmFTwyZubOMz%2BtUqa%2BJAHpDXqprFcw7955BASD8ys9c8OVqXJVvmB%2Bh0KYIDJ45NZhCKzj3NM2pPWRN55FCg7jGi0mwssC3RiHpUvdxftRKZ1DRFJYPpq6TpnHRpfecbLO4tAQ8bNDn3y6fMOft2DSXGGiknlo7Aa%2BcIYgWfSg2hiJ3vGWdSJ09wivyBRfHA4Envu8D8L2EcExSuuy%2F1oVrHDfMZh67rEVWCR9ZtlY%2FgkH6yqdxmy3ApA7k9K61dMTcdl4SQhy1KqpCiLPCVA2r%2BAlXmCEigOAPhod09y0cGgVJIQoRf3EAM28i14bzT2daoBb4n9WrSE7aLXhE5SjXwrtf7pzPHwBPN73uqAZCryR47PpRtyDtrd4WK0ii5s88c2azLP0mJ09mJ9maz3%2BjAgSLGr7b7Q66VAeibGkNuvtq%2BK0HQqmGsRvLCXwxhmdglBzVvMQdxPpC%2B9U0WbsZ8cy9AtWExxEsoXhrz07Juph35VYkclQo1x9AiBD%2BEBMJW81r0GOqUBIpaL6F0vk1yUQJxaKTVMxbJzLTrB0AS8Iiwyv4qC61zSfvQJGJ9hMffGGFuTMGAwl0Vg28WJHfXWbCKD%2FFM78C7H8as0G7TaJI2QEcGAMMksDkRBhU7%2B3yih3%2FDghvfL6gyEFUGnZX9Kb5jJ1NcDu26%2B1fSa8Gni%2BARlIZSqFDjgv2pH7VZ8bcgyIMLJJBdJ06A1Nnryj%2FtUl6qeRgWiKUiT7LDJ&X-Amz-Signature=d44476d49e3df7c16f7c4ec1e43fc6641f6d8172e20575890cca3af22f359d44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAPVAOR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD6eJuKd8T3mQd9pZQhjwq4D1bku7tAlapV8Gw%2BSpXEEQIgL%2FKS1nXAn85evsBAweR5kuDcimNS1c1O5LG%2F0Y%2BvzqQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO9Xj16dG%2F%2F30loRyrcA6Vl4WIaH9BD7y%2BxqJobfksgzL2EJmtR1ntXIYE5UfiWl%2BDh78iSOnQlUn5UnuZNibwa3oKh5fychB8gQCR56YKcZnRxk2i7yC86Gl3wWTUfwRQMRNV3t3jsLFeQmFTwyZubOMz%2BtUqa%2BJAHpDXqprFcw7955BASD8ys9c8OVqXJVvmB%2Bh0KYIDJ45NZhCKzj3NM2pPWRN55FCg7jGi0mwssC3RiHpUvdxftRKZ1DRFJYPpq6TpnHRpfecbLO4tAQ8bNDn3y6fMOft2DSXGGiknlo7Aa%2BcIYgWfSg2hiJ3vGWdSJ09wivyBRfHA4Envu8D8L2EcExSuuy%2F1oVrHDfMZh67rEVWCR9ZtlY%2FgkH6yqdxmy3ApA7k9K61dMTcdl4SQhy1KqpCiLPCVA2r%2BAlXmCEigOAPhod09y0cGgVJIQoRf3EAM28i14bzT2daoBb4n9WrSE7aLXhE5SjXwrtf7pzPHwBPN73uqAZCryR47PpRtyDtrd4WK0ii5s88c2azLP0mJ09mJ9maz3%2BjAgSLGr7b7Q66VAeibGkNuvtq%2BK0HQqmGsRvLCXwxhmdglBzVvMQdxPpC%2B9U0WbsZ8cy9AtWExxEsoXhrz07Juph35VYkclQo1x9AiBD%2BEBMJW81r0GOqUBIpaL6F0vk1yUQJxaKTVMxbJzLTrB0AS8Iiwyv4qC61zSfvQJGJ9hMffGGFuTMGAwl0Vg28WJHfXWbCKD%2FFM78C7H8as0G7TaJI2QEcGAMMksDkRBhU7%2B3yih3%2FDghvfL6gyEFUGnZX9Kb5jJ1NcDu26%2B1fSa8Gni%2BARlIZSqFDjgv2pH7VZ8bcgyIMLJJBdJ06A1Nnryj%2FtUl6qeRgWiKUiT7LDJ&X-Amz-Signature=2b6f776e425a1b36c85a1bfac48273a9c73156c6f70967540ea5c6601e6c3546&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
