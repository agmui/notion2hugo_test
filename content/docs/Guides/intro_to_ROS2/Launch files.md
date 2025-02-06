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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYHGZJX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDBZkxxHv9aUuNz0INT3vKaYUXuIFndCK%2FKZjJrFGNeVQIgK%2BcP1N88G%2B5AEPg4GgfXAKWSVv8Ie6bcea8klE3LgkQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDI%2FtBSnIvx3P95lffyrcA80cpExQv0bBEQI%2Fzz0o3NMY3W7Gc4%2ByN2%2Fbnm7b29hcfv0rDmojhM3AUNfmH1Niv0n47Lzr3%2FzKLzLraE1UoCAb7QMmJICmNZQQrEtKPLJwFEeZuOGuFkpIS98vFpIRu%2BgiTJfddYJe3fC7Iulro0EWxq%2FSHpK5h66nAgtOx1lw%2B5YBgZCVrpWdWXua%2FlqMjQEfgezMIafP1QXCjOddfQ1Axjbakzpx4o4iSPEeSdmdeJzu4ULWO6XKRPo4q9OOTtjBCv7nqFA1PxVVBu6ilLVj%2FHQuEB9%2BRNVoDOqo%2FdhVzbovxpWXd2hULLTG%2Fj0t1yFoxHCrbZMQ5f%2BD8HD6yyvmtFBpoMk37ebrotOam1G%2FUkl%2FUwcEPKthu5Wt%2FkajT1HFSwNpLYcyMuXwNVfd5PWV9n20CZeotbaVKIRgMjQPsWgXBpldZo6434xMgHAu0cDB5rEVtcSKEPxt6uGpbq75pZ14Qs8APYHbI0O9KSDjxUjzkU8ZtJGnBwhAfrv9GCNcW2NwcTTwNtojeCZsmLjABUIPJt6WDYdb4GQVcdDec3jZeGy%2BebRYt45FxSemT1YHXX8f66IGa%2FUwFuaRLq%2Ff%2Fc0ktYfSRZ%2FjgsizSY9dDq6Z3Xv2Ux8iIGgbMM22kb0GOqUBBwVMdBUVLcLk08SSJz5tj5fzHOikCCpR7%2FyWKR4mVOa01bgeIwAdY6T5aojlYGnlYncZCm6niNtpQySZatirWa4doVLyz5tj%2BVa35AuaYhDj3ohET1dF3RtVzy8usVwpdp5r7pZMZi2xJVJU1UjqyyjdA9OCu%2Fdg6L5WSsV7JLLOvWqWh%2F%2Fb0lW8FD5Ew1kKQ8M%2FTl86%2B1lUhr3f8Sv8ByUUJ%2F1u&X-Amz-Signature=07dd218af10b8ac9d0070b474555a271e265d0b6d66d81ed8de13d7ec43dec03&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYHGZJX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDBZkxxHv9aUuNz0INT3vKaYUXuIFndCK%2FKZjJrFGNeVQIgK%2BcP1N88G%2B5AEPg4GgfXAKWSVv8Ie6bcea8klE3LgkQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDI%2FtBSnIvx3P95lffyrcA80cpExQv0bBEQI%2Fzz0o3NMY3W7Gc4%2ByN2%2Fbnm7b29hcfv0rDmojhM3AUNfmH1Niv0n47Lzr3%2FzKLzLraE1UoCAb7QMmJICmNZQQrEtKPLJwFEeZuOGuFkpIS98vFpIRu%2BgiTJfddYJe3fC7Iulro0EWxq%2FSHpK5h66nAgtOx1lw%2B5YBgZCVrpWdWXua%2FlqMjQEfgezMIafP1QXCjOddfQ1Axjbakzpx4o4iSPEeSdmdeJzu4ULWO6XKRPo4q9OOTtjBCv7nqFA1PxVVBu6ilLVj%2FHQuEB9%2BRNVoDOqo%2FdhVzbovxpWXd2hULLTG%2Fj0t1yFoxHCrbZMQ5f%2BD8HD6yyvmtFBpoMk37ebrotOam1G%2FUkl%2FUwcEPKthu5Wt%2FkajT1HFSwNpLYcyMuXwNVfd5PWV9n20CZeotbaVKIRgMjQPsWgXBpldZo6434xMgHAu0cDB5rEVtcSKEPxt6uGpbq75pZ14Qs8APYHbI0O9KSDjxUjzkU8ZtJGnBwhAfrv9GCNcW2NwcTTwNtojeCZsmLjABUIPJt6WDYdb4GQVcdDec3jZeGy%2BebRYt45FxSemT1YHXX8f66IGa%2FUwFuaRLq%2Ff%2Fc0ktYfSRZ%2FjgsizSY9dDq6Z3Xv2Ux8iIGgbMM22kb0GOqUBBwVMdBUVLcLk08SSJz5tj5fzHOikCCpR7%2FyWKR4mVOa01bgeIwAdY6T5aojlYGnlYncZCm6niNtpQySZatirWa4doVLyz5tj%2BVa35AuaYhDj3ohET1dF3RtVzy8usVwpdp5r7pZMZi2xJVJU1UjqyyjdA9OCu%2Fdg6L5WSsV7JLLOvWqWh%2F%2Fb0lW8FD5Ew1kKQ8M%2FTl86%2B1lUhr3f8Sv8ByUUJ%2F1u&X-Amz-Signature=45e46ebceb26de729e4def667398e1e3c4d94def1bbcf8ad0740e06a66531cab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYHGZJX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDBZkxxHv9aUuNz0INT3vKaYUXuIFndCK%2FKZjJrFGNeVQIgK%2BcP1N88G%2B5AEPg4GgfXAKWSVv8Ie6bcea8klE3LgkQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDI%2FtBSnIvx3P95lffyrcA80cpExQv0bBEQI%2Fzz0o3NMY3W7Gc4%2ByN2%2Fbnm7b29hcfv0rDmojhM3AUNfmH1Niv0n47Lzr3%2FzKLzLraE1UoCAb7QMmJICmNZQQrEtKPLJwFEeZuOGuFkpIS98vFpIRu%2BgiTJfddYJe3fC7Iulro0EWxq%2FSHpK5h66nAgtOx1lw%2B5YBgZCVrpWdWXua%2FlqMjQEfgezMIafP1QXCjOddfQ1Axjbakzpx4o4iSPEeSdmdeJzu4ULWO6XKRPo4q9OOTtjBCv7nqFA1PxVVBu6ilLVj%2FHQuEB9%2BRNVoDOqo%2FdhVzbovxpWXd2hULLTG%2Fj0t1yFoxHCrbZMQ5f%2BD8HD6yyvmtFBpoMk37ebrotOam1G%2FUkl%2FUwcEPKthu5Wt%2FkajT1HFSwNpLYcyMuXwNVfd5PWV9n20CZeotbaVKIRgMjQPsWgXBpldZo6434xMgHAu0cDB5rEVtcSKEPxt6uGpbq75pZ14Qs8APYHbI0O9KSDjxUjzkU8ZtJGnBwhAfrv9GCNcW2NwcTTwNtojeCZsmLjABUIPJt6WDYdb4GQVcdDec3jZeGy%2BebRYt45FxSemT1YHXX8f66IGa%2FUwFuaRLq%2Ff%2Fc0ktYfSRZ%2FjgsizSY9dDq6Z3Xv2Ux8iIGgbMM22kb0GOqUBBwVMdBUVLcLk08SSJz5tj5fzHOikCCpR7%2FyWKR4mVOa01bgeIwAdY6T5aojlYGnlYncZCm6niNtpQySZatirWa4doVLyz5tj%2BVa35AuaYhDj3ohET1dF3RtVzy8usVwpdp5r7pZMZi2xJVJU1UjqyyjdA9OCu%2Fdg6L5WSsV7JLLOvWqWh%2F%2Fb0lW8FD5Ew1kKQ8M%2FTl86%2B1lUhr3f8Sv8ByUUJ%2F1u&X-Amz-Signature=a6cd4cddaf9217325f276952f1eff0ed88a649d898c7554c380cf9e097fe7cad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
