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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q22QS46%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCR%2B6s3Nl2O1385yxR8bhO6uClsqN78WeMsz67kw2hrQIgOnVuo6KNd6wNi77cXZ76C3mY9EUMt7cQwJoP%2Bx47uxkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpnk8Ex5Y4zugvt2SrcAwUXHpyVJYdtX1e8M2nR4aaF88Oinqi5WeaSo4wFdrZiyfJiBzb5JIN5fsMry3vAcMpHpEOzDttEdW3ukZsnHHfxnbhIQTy0Cc4HVEAKQeYtro3zx%2BHNCI0LiXIFYgp9ZOAnOQk4ecgx26XSUIBKo8SsPZg8pBM%2BNXNRiYfjLWEKNT7mfVEjptwNBZVEBm%2Buef556SFcKgM%2FMi%2Ffu3Ip5S5fyhY%2FpEaCr8Udk7EfuRgxIUEnQ9Qs1%2FJohgc7l1WUJGXFC5%2FbVSp7aJke5a6wUE3%2FTyqbk3lgj1PGwjZLAEpD6ukASfVbume3bJnlxptusPp%2BrwPIZGrIlHhMtZ337U32cJMNitnhTWDRqhfh4gV3ICKhMqAU%2BFL0Y5vuIf95kSvf5vCVjCbn7emoR8Zj06p4R2UCDRugM31HZYpQ2ZduYPU%2BpzNCP8H2cYDKDz50HVt3S8ciucFeQ0B5Gx1fcMCfXojFqIjUkgWQqWyq9cY6Dal0AX4wB%2BdrmCWVuXHsrBB67Bc6TXDBXKmFZ6rmzyr4KGRMKpXMP6F7atInimjWrKOVpy4GiD%2BVduHY7%2BkkSs2oFffgiEz%2FV0TE%2FibRO4qE%2BsC9Tx1T6yl5dGE2778o4L9Q1fZKhJdDINU8MLP9s8MGOqUBaTulu03v5jcsKoGli%2FFFLFbmg49kfKBmpB80LAZ9UypJ%2FZFlfnAsvqjtlcfblewokNfmEG4dr09xe7Mmspd48cyXoYlR85NW6isCZlnBgac0DFDMNKGz6JSqs3nyuFo%2Bty9jXfFLC2e8uY3YIMPAKWKp%2B5iUZk7%2BCnLnecWtfTDiLmOrTmviYK7y1%2BWSr2R17LEoPPGgWBomigRtuDLnLkMOdlBs&X-Amz-Signature=2d02412fe50f7a51536b4228dfd5774573450f6b17eb23e3cc138d1584db5683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q22QS46%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCR%2B6s3Nl2O1385yxR8bhO6uClsqN78WeMsz67kw2hrQIgOnVuo6KNd6wNi77cXZ76C3mY9EUMt7cQwJoP%2Bx47uxkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpnk8Ex5Y4zugvt2SrcAwUXHpyVJYdtX1e8M2nR4aaF88Oinqi5WeaSo4wFdrZiyfJiBzb5JIN5fsMry3vAcMpHpEOzDttEdW3ukZsnHHfxnbhIQTy0Cc4HVEAKQeYtro3zx%2BHNCI0LiXIFYgp9ZOAnOQk4ecgx26XSUIBKo8SsPZg8pBM%2BNXNRiYfjLWEKNT7mfVEjptwNBZVEBm%2Buef556SFcKgM%2FMi%2Ffu3Ip5S5fyhY%2FpEaCr8Udk7EfuRgxIUEnQ9Qs1%2FJohgc7l1WUJGXFC5%2FbVSp7aJke5a6wUE3%2FTyqbk3lgj1PGwjZLAEpD6ukASfVbume3bJnlxptusPp%2BrwPIZGrIlHhMtZ337U32cJMNitnhTWDRqhfh4gV3ICKhMqAU%2BFL0Y5vuIf95kSvf5vCVjCbn7emoR8Zj06p4R2UCDRugM31HZYpQ2ZduYPU%2BpzNCP8H2cYDKDz50HVt3S8ciucFeQ0B5Gx1fcMCfXojFqIjUkgWQqWyq9cY6Dal0AX4wB%2BdrmCWVuXHsrBB67Bc6TXDBXKmFZ6rmzyr4KGRMKpXMP6F7atInimjWrKOVpy4GiD%2BVduHY7%2BkkSs2oFffgiEz%2FV0TE%2FibRO4qE%2BsC9Tx1T6yl5dGE2778o4L9Q1fZKhJdDINU8MLP9s8MGOqUBaTulu03v5jcsKoGli%2FFFLFbmg49kfKBmpB80LAZ9UypJ%2FZFlfnAsvqjtlcfblewokNfmEG4dr09xe7Mmspd48cyXoYlR85NW6isCZlnBgac0DFDMNKGz6JSqs3nyuFo%2Bty9jXfFLC2e8uY3YIMPAKWKp%2B5iUZk7%2BCnLnecWtfTDiLmOrTmviYK7y1%2BWSr2R17LEoPPGgWBomigRtuDLnLkMOdlBs&X-Amz-Signature=97b5794626f912fdbe6cb5af6eec518c31b34a169a6b83a815ff779c528fa93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q22QS46%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCR%2B6s3Nl2O1385yxR8bhO6uClsqN78WeMsz67kw2hrQIgOnVuo6KNd6wNi77cXZ76C3mY9EUMt7cQwJoP%2Bx47uxkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpnk8Ex5Y4zugvt2SrcAwUXHpyVJYdtX1e8M2nR4aaF88Oinqi5WeaSo4wFdrZiyfJiBzb5JIN5fsMry3vAcMpHpEOzDttEdW3ukZsnHHfxnbhIQTy0Cc4HVEAKQeYtro3zx%2BHNCI0LiXIFYgp9ZOAnOQk4ecgx26XSUIBKo8SsPZg8pBM%2BNXNRiYfjLWEKNT7mfVEjptwNBZVEBm%2Buef556SFcKgM%2FMi%2Ffu3Ip5S5fyhY%2FpEaCr8Udk7EfuRgxIUEnQ9Qs1%2FJohgc7l1WUJGXFC5%2FbVSp7aJke5a6wUE3%2FTyqbk3lgj1PGwjZLAEpD6ukASfVbume3bJnlxptusPp%2BrwPIZGrIlHhMtZ337U32cJMNitnhTWDRqhfh4gV3ICKhMqAU%2BFL0Y5vuIf95kSvf5vCVjCbn7emoR8Zj06p4R2UCDRugM31HZYpQ2ZduYPU%2BpzNCP8H2cYDKDz50HVt3S8ciucFeQ0B5Gx1fcMCfXojFqIjUkgWQqWyq9cY6Dal0AX4wB%2BdrmCWVuXHsrBB67Bc6TXDBXKmFZ6rmzyr4KGRMKpXMP6F7atInimjWrKOVpy4GiD%2BVduHY7%2BkkSs2oFffgiEz%2FV0TE%2FibRO4qE%2BsC9Tx1T6yl5dGE2778o4L9Q1fZKhJdDINU8MLP9s8MGOqUBaTulu03v5jcsKoGli%2FFFLFbmg49kfKBmpB80LAZ9UypJ%2FZFlfnAsvqjtlcfblewokNfmEG4dr09xe7Mmspd48cyXoYlR85NW6isCZlnBgac0DFDMNKGz6JSqs3nyuFo%2Bty9jXfFLC2e8uY3YIMPAKWKp%2B5iUZk7%2BCnLnecWtfTDiLmOrTmviYK7y1%2BWSr2R17LEoPPGgWBomigRtuDLnLkMOdlBs&X-Amz-Signature=805142fc986e53d79f87a4153fdaeb9ac496de3caa54af8fb40f6e32524371b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
