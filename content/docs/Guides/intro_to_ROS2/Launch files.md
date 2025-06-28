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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RULEW2B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWPhMxGS6yWre7CmLD2F3IrhO7zToVwer7QP%2BtO%2BP5dAiEA5MzMp4s05NW9uycW%2FpUzdda6WqajU7VQcR26mA%2F1UZwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFebUg8Ac3oEzX6%2B8ircA5K3IglCcyqAwpGiNAiOEYFa%2Fd2DJh3knMqIAroXC8ArBXLKTCitxfgZj8X3crn%2BFbvNgtjqVCuPNG7R9ayCKzC4%2FYqT8mT1KdON5K2B0trntF7PR0pPyoiJ1MuaN6gbLurC8D%2FD6FN02VY9dMlQoOonLpMBGx4yNxj3YSj3wDyHpEdz%2FaArKprCat1hxBT3Bxlji8h0IZ3VOUxqZWJgv6UBt6LRiFDLRdCPNkNFToeINb1Q9mabvv5LipxGdC8H5WRRAO91L9IxGY%2BRAgIw4Ex9kYfquiruF51YyGZh4KPeAsGwcAJ8C9oJpAF%2F5mZsLSj5PIoLKQwKSua%2B0F5z62fogAKgkhXy%2F6ieOLFnRQ1%2FGwdWe%2BB6LjjvxtRKX6VrIZkX9XHbJRkZVFsITPZD%2Fb6Nk0DoZRsRiRNqNEB3AaAUyzc3hYTzBhKxafCz3wVHqH7jQP0SEqif3gyBgCTruAdrPYs7zCT%2F1NxrbSXjVpoqP853%2FCcKGUZEwhzPwPEKIUEcm8KJJ7ZYE9J7RqKbSq2Un3fFmBul8A4OGyTBrVVB4aHHr1DR5BHI5wwz%2FVrOipV9o%2B%2BwklNe3YaoMnkNPU5raOWCjE9OVjrZfKsjOFQAqcbwyiSMEq0uMhmUMIzS%2FcIGOqUB47rMbzwcMXAJXl7hWn16ulfoWp%2BicPfMgkmDw2eyCAEQ1wVHmrMuyKKx1ByBCnqnawLc1u4YdkV0VLZUh5l8ah5aCJaQPz7%2BEI6TDwsBNLGt67r2%2Bm8Bho%2Bx7FuTeUz2sobSy7LisY4Gg1FJqKJvoKwfhczLJMCxH36M5zHboEj5evpCMpSVfenzCEIWPLHrx90FxnGXEJJRA8LkDmjt2pxFueOe&X-Amz-Signature=806dba3295b839e1040b4a3ddc69db2b4e7bcf6d73881e9842c33794bf0656ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RULEW2B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWPhMxGS6yWre7CmLD2F3IrhO7zToVwer7QP%2BtO%2BP5dAiEA5MzMp4s05NW9uycW%2FpUzdda6WqajU7VQcR26mA%2F1UZwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFebUg8Ac3oEzX6%2B8ircA5K3IglCcyqAwpGiNAiOEYFa%2Fd2DJh3knMqIAroXC8ArBXLKTCitxfgZj8X3crn%2BFbvNgtjqVCuPNG7R9ayCKzC4%2FYqT8mT1KdON5K2B0trntF7PR0pPyoiJ1MuaN6gbLurC8D%2FD6FN02VY9dMlQoOonLpMBGx4yNxj3YSj3wDyHpEdz%2FaArKprCat1hxBT3Bxlji8h0IZ3VOUxqZWJgv6UBt6LRiFDLRdCPNkNFToeINb1Q9mabvv5LipxGdC8H5WRRAO91L9IxGY%2BRAgIw4Ex9kYfquiruF51YyGZh4KPeAsGwcAJ8C9oJpAF%2F5mZsLSj5PIoLKQwKSua%2B0F5z62fogAKgkhXy%2F6ieOLFnRQ1%2FGwdWe%2BB6LjjvxtRKX6VrIZkX9XHbJRkZVFsITPZD%2Fb6Nk0DoZRsRiRNqNEB3AaAUyzc3hYTzBhKxafCz3wVHqH7jQP0SEqif3gyBgCTruAdrPYs7zCT%2F1NxrbSXjVpoqP853%2FCcKGUZEwhzPwPEKIUEcm8KJJ7ZYE9J7RqKbSq2Un3fFmBul8A4OGyTBrVVB4aHHr1DR5BHI5wwz%2FVrOipV9o%2B%2BwklNe3YaoMnkNPU5raOWCjE9OVjrZfKsjOFQAqcbwyiSMEq0uMhmUMIzS%2FcIGOqUB47rMbzwcMXAJXl7hWn16ulfoWp%2BicPfMgkmDw2eyCAEQ1wVHmrMuyKKx1ByBCnqnawLc1u4YdkV0VLZUh5l8ah5aCJaQPz7%2BEI6TDwsBNLGt67r2%2Bm8Bho%2Bx7FuTeUz2sobSy7LisY4Gg1FJqKJvoKwfhczLJMCxH36M5zHboEj5evpCMpSVfenzCEIWPLHrx90FxnGXEJJRA8LkDmjt2pxFueOe&X-Amz-Signature=f81e9fe7edac00c926661e1271586f4a705375e6819e1f3431e7413669133902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RULEW2B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWPhMxGS6yWre7CmLD2F3IrhO7zToVwer7QP%2BtO%2BP5dAiEA5MzMp4s05NW9uycW%2FpUzdda6WqajU7VQcR26mA%2F1UZwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFebUg8Ac3oEzX6%2B8ircA5K3IglCcyqAwpGiNAiOEYFa%2Fd2DJh3knMqIAroXC8ArBXLKTCitxfgZj8X3crn%2BFbvNgtjqVCuPNG7R9ayCKzC4%2FYqT8mT1KdON5K2B0trntF7PR0pPyoiJ1MuaN6gbLurC8D%2FD6FN02VY9dMlQoOonLpMBGx4yNxj3YSj3wDyHpEdz%2FaArKprCat1hxBT3Bxlji8h0IZ3VOUxqZWJgv6UBt6LRiFDLRdCPNkNFToeINb1Q9mabvv5LipxGdC8H5WRRAO91L9IxGY%2BRAgIw4Ex9kYfquiruF51YyGZh4KPeAsGwcAJ8C9oJpAF%2F5mZsLSj5PIoLKQwKSua%2B0F5z62fogAKgkhXy%2F6ieOLFnRQ1%2FGwdWe%2BB6LjjvxtRKX6VrIZkX9XHbJRkZVFsITPZD%2Fb6Nk0DoZRsRiRNqNEB3AaAUyzc3hYTzBhKxafCz3wVHqH7jQP0SEqif3gyBgCTruAdrPYs7zCT%2F1NxrbSXjVpoqP853%2FCcKGUZEwhzPwPEKIUEcm8KJJ7ZYE9J7RqKbSq2Un3fFmBul8A4OGyTBrVVB4aHHr1DR5BHI5wwz%2FVrOipV9o%2B%2BwklNe3YaoMnkNPU5raOWCjE9OVjrZfKsjOFQAqcbwyiSMEq0uMhmUMIzS%2FcIGOqUB47rMbzwcMXAJXl7hWn16ulfoWp%2BicPfMgkmDw2eyCAEQ1wVHmrMuyKKx1ByBCnqnawLc1u4YdkV0VLZUh5l8ah5aCJaQPz7%2BEI6TDwsBNLGt67r2%2Bm8Bho%2Bx7FuTeUz2sobSy7LisY4Gg1FJqKJvoKwfhczLJMCxH36M5zHboEj5evpCMpSVfenzCEIWPLHrx90FxnGXEJJRA8LkDmjt2pxFueOe&X-Amz-Signature=7a78337ac505665f8d0e78b0a198c34d2df26531cbd1f38224aec6735bb7976f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
