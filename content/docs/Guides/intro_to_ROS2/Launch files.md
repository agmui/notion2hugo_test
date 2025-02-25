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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQ5ZCXN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDzyHjhPrrPUVjcy0MNGVZ7Owkw2d7UCwzgyLsDteg2HgIgCrTuDTzxY%2BeXYvONDQ9dgm58nPcRTVouOZt4YS95zNMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOVdiRfq8%2Bx6J9%2BZ4CrcA3PtphY8aZBtbhaUU0ZGhfJbFn2vUsZtmhG%2Fjzb1KXSX2NufZyeevUtoS8RUJP1QD1T2khGrJlA%2BTMMUptG6ggwYfy7d35SuD6BOrUNL2mF0KDIH8WIqymvSDiJazfP2s3q%2BXzuC5aKjjfrfmzOPVQSGD1yudKXGglbYzCkH2m9ErJkgdhVHg%2Bce1l73Fbkjn8Sc5RcxlWnBHCzNCsjdWMjPLFdhJj%2FuO84t0QMh4DInH8DpV6fnLs3Gt6cE51TNbMNAY%2FOsJ3iVbv69X4KGwvpNO0C5K2hRcW3f8DUt8A8iqMlZKvWMao4BN%2BmnaV5eUJvU0NyhiHL8o6edjFjfKHyK7EY5eNDr3bmMHdOpbSewHkheONgjNI1kOMiSpqLISLqYrabjv3eS%2BLFD03iQXg98opD4WiS02aNg%2FrxrCnM9C3jMkiX1HXbeWC3vawb5DJ6%2FyzASM6Vh6rfyf4vtB2Eo9PTV2%2BTcJyYG0zM4Us4x55PfAkJKDVMVOnXgGtISb4LGcvkhhEKF3Yypz%2FJY4rkye4pj1U8TsEQGZ5AGZhdM5VJaevPjfgV6SU1CIvMTLUxqaizoexsoMoe3XXNJ7bo%2BVGJlMIc6QgG6KomgP%2B0hgteA80e3sLH2g1xUMNaC9L0GOqUB4WpGowX9DWrduCHkMseN2ArvteJmXfBBN6uajblXBZ%2FRkMVk7DsV8dI3A5wG69gjXm9R2rHb6PgODj5zqzu87i1ed%2BLSq3xLg6exPsP%2F1gPIbqahppS1Z0r6FOx10S7%2F3SWqLjgjCe%2FxPQ%2FaCRWJ056P1Ndg0E85sxJpJiD%2Bt%2F%2BFQgDWv9qP7WW8fBvtO5wT1VuX4Ph94MtLKek4N6g8GzXxflvy&X-Amz-Signature=45803a62b24e66b59671340038c1b6fcd3719de6c622311b38b53d15a2fe679b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQ5ZCXN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDzyHjhPrrPUVjcy0MNGVZ7Owkw2d7UCwzgyLsDteg2HgIgCrTuDTzxY%2BeXYvONDQ9dgm58nPcRTVouOZt4YS95zNMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOVdiRfq8%2Bx6J9%2BZ4CrcA3PtphY8aZBtbhaUU0ZGhfJbFn2vUsZtmhG%2Fjzb1KXSX2NufZyeevUtoS8RUJP1QD1T2khGrJlA%2BTMMUptG6ggwYfy7d35SuD6BOrUNL2mF0KDIH8WIqymvSDiJazfP2s3q%2BXzuC5aKjjfrfmzOPVQSGD1yudKXGglbYzCkH2m9ErJkgdhVHg%2Bce1l73Fbkjn8Sc5RcxlWnBHCzNCsjdWMjPLFdhJj%2FuO84t0QMh4DInH8DpV6fnLs3Gt6cE51TNbMNAY%2FOsJ3iVbv69X4KGwvpNO0C5K2hRcW3f8DUt8A8iqMlZKvWMao4BN%2BmnaV5eUJvU0NyhiHL8o6edjFjfKHyK7EY5eNDr3bmMHdOpbSewHkheONgjNI1kOMiSpqLISLqYrabjv3eS%2BLFD03iQXg98opD4WiS02aNg%2FrxrCnM9C3jMkiX1HXbeWC3vawb5DJ6%2FyzASM6Vh6rfyf4vtB2Eo9PTV2%2BTcJyYG0zM4Us4x55PfAkJKDVMVOnXgGtISb4LGcvkhhEKF3Yypz%2FJY4rkye4pj1U8TsEQGZ5AGZhdM5VJaevPjfgV6SU1CIvMTLUxqaizoexsoMoe3XXNJ7bo%2BVGJlMIc6QgG6KomgP%2B0hgteA80e3sLH2g1xUMNaC9L0GOqUB4WpGowX9DWrduCHkMseN2ArvteJmXfBBN6uajblXBZ%2FRkMVk7DsV8dI3A5wG69gjXm9R2rHb6PgODj5zqzu87i1ed%2BLSq3xLg6exPsP%2F1gPIbqahppS1Z0r6FOx10S7%2F3SWqLjgjCe%2FxPQ%2FaCRWJ056P1Ndg0E85sxJpJiD%2Bt%2F%2BFQgDWv9qP7WW8fBvtO5wT1VuX4Ph94MtLKek4N6g8GzXxflvy&X-Amz-Signature=7d8dcbf1233d0ecf9a4542f3ab877450de52de69963aa42f73b6194ecb6f5d32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQ5ZCXN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDzyHjhPrrPUVjcy0MNGVZ7Owkw2d7UCwzgyLsDteg2HgIgCrTuDTzxY%2BeXYvONDQ9dgm58nPcRTVouOZt4YS95zNMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOVdiRfq8%2Bx6J9%2BZ4CrcA3PtphY8aZBtbhaUU0ZGhfJbFn2vUsZtmhG%2Fjzb1KXSX2NufZyeevUtoS8RUJP1QD1T2khGrJlA%2BTMMUptG6ggwYfy7d35SuD6BOrUNL2mF0KDIH8WIqymvSDiJazfP2s3q%2BXzuC5aKjjfrfmzOPVQSGD1yudKXGglbYzCkH2m9ErJkgdhVHg%2Bce1l73Fbkjn8Sc5RcxlWnBHCzNCsjdWMjPLFdhJj%2FuO84t0QMh4DInH8DpV6fnLs3Gt6cE51TNbMNAY%2FOsJ3iVbv69X4KGwvpNO0C5K2hRcW3f8DUt8A8iqMlZKvWMao4BN%2BmnaV5eUJvU0NyhiHL8o6edjFjfKHyK7EY5eNDr3bmMHdOpbSewHkheONgjNI1kOMiSpqLISLqYrabjv3eS%2BLFD03iQXg98opD4WiS02aNg%2FrxrCnM9C3jMkiX1HXbeWC3vawb5DJ6%2FyzASM6Vh6rfyf4vtB2Eo9PTV2%2BTcJyYG0zM4Us4x55PfAkJKDVMVOnXgGtISb4LGcvkhhEKF3Yypz%2FJY4rkye4pj1U8TsEQGZ5AGZhdM5VJaevPjfgV6SU1CIvMTLUxqaizoexsoMoe3XXNJ7bo%2BVGJlMIc6QgG6KomgP%2B0hgteA80e3sLH2g1xUMNaC9L0GOqUB4WpGowX9DWrduCHkMseN2ArvteJmXfBBN6uajblXBZ%2FRkMVk7DsV8dI3A5wG69gjXm9R2rHb6PgODj5zqzu87i1ed%2BLSq3xLg6exPsP%2F1gPIbqahppS1Z0r6FOx10S7%2F3SWqLjgjCe%2FxPQ%2FaCRWJ056P1Ndg0E85sxJpJiD%2Bt%2F%2BFQgDWv9qP7WW8fBvtO5wT1VuX4Ph94MtLKek4N6g8GzXxflvy&X-Amz-Signature=fd0f67017f862474956cafe08bf7f80efee98781363c12add09ec43fc9d24ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
