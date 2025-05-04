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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSPR4AO%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE5K%2Fp82a80wKh%2BDeEJClg0UfXRRF3%2FBPkwgXyVG2S1qAiEA8I2k7P1jO7RaiU34fzzpP1UECqHNRYHJvAZTaXzalu0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKAolVZaGGPAQM4OGSrcA0NLcaOmX%2Bh278ztuVLJeJ4c5zFq2f9l5REbpTHjVlUFWFgBR3Dpyr0SVe3gw1N4hk8L%2FVTSAyuI4NxJRjnzYPaQPCluoxYQ38EzHpvMblXl656hFPRUPSnmEngbzio2s0vGlCuHmcn3v%2BD1IVurQgWD3WgBEYQpzuMhKo1aOl5ytSIav5ULuL7H7d7Yee4RSFeVdkWzqs6Ux%2BQuDGTUpNNIUd09fdyZbk2YKpBtcG6d9DtqksTBIRAP2akFDQNl%2F%2FhLkugfi9IVQp%2FbW%2Faqud9GJG9pYCDBhmH%2FjudyVaR38pA16dedJjQWQ3olKD9DUeBLsdgAlyveWCWgezOSeZ%2FNAL3b4iMTmP1BV%2BxtixinEG7uUdh18U%2F5mrKV5PJ0DznzRZin1MvACq7GoNMMycKmUODagjQmJcnqtHoH8rOKmTp2r5q8JxCuqeFaa6FTj0b3DJCeucDWsxIL8fx2zk1Ne6FrtL98cwrpKkybPweqZvTDbwXxDwroxj4RrLcKpI44%2FXU%2BVnnVWELYNM4AkinleP1ncvZ7i0qszI%2Bg2%2BAuPkOc4NamB8ikgZHwxK3MR3ceYRJpgfSoU2Nh%2FDniXq9I9mpn%2FZbPxR89evy%2BFuuR433n0caL2xYELmMHMJWM3cAGOqUBYWpDDKDIi2K2x%2B0Xt5vETy12LooNUVAWoDPL5ykKaL5VOzzjHZG5BUvJurAdKYD3oUzCtKdbMcq0ymgA7C1wD65qzA2tuzg9YcGzd0a1hUKsgSzV9HiGV3pFKuiox0rVzED1TwaNqrUXM2KuryrkvUeASFeTwumVc7jIHN%2BgztMAZSCLzjRJbtbsQHXPwVZ%2FG8%2BAWyUEwX2kwarZsI%2BXx6x5fUvZ&X-Amz-Signature=2bdcb4b26fe5a9753119285a4c1d706a275230113310777891e5ae74310bc724&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSPR4AO%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE5K%2Fp82a80wKh%2BDeEJClg0UfXRRF3%2FBPkwgXyVG2S1qAiEA8I2k7P1jO7RaiU34fzzpP1UECqHNRYHJvAZTaXzalu0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKAolVZaGGPAQM4OGSrcA0NLcaOmX%2Bh278ztuVLJeJ4c5zFq2f9l5REbpTHjVlUFWFgBR3Dpyr0SVe3gw1N4hk8L%2FVTSAyuI4NxJRjnzYPaQPCluoxYQ38EzHpvMblXl656hFPRUPSnmEngbzio2s0vGlCuHmcn3v%2BD1IVurQgWD3WgBEYQpzuMhKo1aOl5ytSIav5ULuL7H7d7Yee4RSFeVdkWzqs6Ux%2BQuDGTUpNNIUd09fdyZbk2YKpBtcG6d9DtqksTBIRAP2akFDQNl%2F%2FhLkugfi9IVQp%2FbW%2Faqud9GJG9pYCDBhmH%2FjudyVaR38pA16dedJjQWQ3olKD9DUeBLsdgAlyveWCWgezOSeZ%2FNAL3b4iMTmP1BV%2BxtixinEG7uUdh18U%2F5mrKV5PJ0DznzRZin1MvACq7GoNMMycKmUODagjQmJcnqtHoH8rOKmTp2r5q8JxCuqeFaa6FTj0b3DJCeucDWsxIL8fx2zk1Ne6FrtL98cwrpKkybPweqZvTDbwXxDwroxj4RrLcKpI44%2FXU%2BVnnVWELYNM4AkinleP1ncvZ7i0qszI%2Bg2%2BAuPkOc4NamB8ikgZHwxK3MR3ceYRJpgfSoU2Nh%2FDniXq9I9mpn%2FZbPxR89evy%2BFuuR433n0caL2xYELmMHMJWM3cAGOqUBYWpDDKDIi2K2x%2B0Xt5vETy12LooNUVAWoDPL5ykKaL5VOzzjHZG5BUvJurAdKYD3oUzCtKdbMcq0ymgA7C1wD65qzA2tuzg9YcGzd0a1hUKsgSzV9HiGV3pFKuiox0rVzED1TwaNqrUXM2KuryrkvUeASFeTwumVc7jIHN%2BgztMAZSCLzjRJbtbsQHXPwVZ%2FG8%2BAWyUEwX2kwarZsI%2BXx6x5fUvZ&X-Amz-Signature=e6effcb2925141e050f4be21de4b0590d042ff93819eda9eeef0468a9ae7ba94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSPR4AO%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE5K%2Fp82a80wKh%2BDeEJClg0UfXRRF3%2FBPkwgXyVG2S1qAiEA8I2k7P1jO7RaiU34fzzpP1UECqHNRYHJvAZTaXzalu0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKAolVZaGGPAQM4OGSrcA0NLcaOmX%2Bh278ztuVLJeJ4c5zFq2f9l5REbpTHjVlUFWFgBR3Dpyr0SVe3gw1N4hk8L%2FVTSAyuI4NxJRjnzYPaQPCluoxYQ38EzHpvMblXl656hFPRUPSnmEngbzio2s0vGlCuHmcn3v%2BD1IVurQgWD3WgBEYQpzuMhKo1aOl5ytSIav5ULuL7H7d7Yee4RSFeVdkWzqs6Ux%2BQuDGTUpNNIUd09fdyZbk2YKpBtcG6d9DtqksTBIRAP2akFDQNl%2F%2FhLkugfi9IVQp%2FbW%2Faqud9GJG9pYCDBhmH%2FjudyVaR38pA16dedJjQWQ3olKD9DUeBLsdgAlyveWCWgezOSeZ%2FNAL3b4iMTmP1BV%2BxtixinEG7uUdh18U%2F5mrKV5PJ0DznzRZin1MvACq7GoNMMycKmUODagjQmJcnqtHoH8rOKmTp2r5q8JxCuqeFaa6FTj0b3DJCeucDWsxIL8fx2zk1Ne6FrtL98cwrpKkybPweqZvTDbwXxDwroxj4RrLcKpI44%2FXU%2BVnnVWELYNM4AkinleP1ncvZ7i0qszI%2Bg2%2BAuPkOc4NamB8ikgZHwxK3MR3ceYRJpgfSoU2Nh%2FDniXq9I9mpn%2FZbPxR89evy%2BFuuR433n0caL2xYELmMHMJWM3cAGOqUBYWpDDKDIi2K2x%2B0Xt5vETy12LooNUVAWoDPL5ykKaL5VOzzjHZG5BUvJurAdKYD3oUzCtKdbMcq0ymgA7C1wD65qzA2tuzg9YcGzd0a1hUKsgSzV9HiGV3pFKuiox0rVzED1TwaNqrUXM2KuryrkvUeASFeTwumVc7jIHN%2BgztMAZSCLzjRJbtbsQHXPwVZ%2FG8%2BAWyUEwX2kwarZsI%2BXx6x5fUvZ&X-Amz-Signature=a0dc583858efecc8c3716eb0f4e4bc6f7d731bb513a09a66dad2dac4e2f1c54c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
