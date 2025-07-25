---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR6LONN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDUsVvRDRnXnBdYUPjLWrBFTH074aw9jOjJmASmCa4cswIgMCCEf9mX43ncg5UPjrzpSLqvJHm6yuB1jGUDIATHoJoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMt6unM1Ks2QSSJf6SrcA3QsoCUGM9xqQ0BC8LBGlW35tz99Tp%2FyKldVHO%2BVj6jyUOl4GRmJrwnaSkdW1Ls6ypZPdSxxBlqvY%2FywYGSsT59vzed2M%2Bx9dJg0seAjRcHJKeSuF2k9dsIigyS%2BIKJ6kWs5f20iTK6QAgyMzEa7wDCSRrcAzSujNNWFDlAbd%2FiC9jbvBaSBzo2Hh66q%2BkVf3Zgtd8T8FhnqTO5VPGR8iGU%2FD5lqEVQva8qE0wpjHxdLZYOSTVppK3%2B5CpN4djhYe0u0MYOvam08gdwKZ%2Fca3Rfk%2Fw93IeYXmaJUx7EWpQhiqVVfo3ckija4%2Bl6s2QRc8jtmtHQHRMfA1LAmAJKJ7IlxEjAWfpFHtbbxaH6UoL%2F96y2Qf6o8MSqO%2BHbGyiWbra2TLwbtqSnkqLfKG6TGwHu%2Bd8si9hKEjKN1GzP%2FwZdeGVCObEHb0bVE%2BkgNpU7r60SrWAYf7pnFx1OumypFuMixpuvBAZSAjP4VxBNMD4VcDV%2FEJFv5ciSGX%2BCw1QwGwutmkaWdr96V%2Budu8tn4ZyBiY3FObjEsYAhcVjR%2F9tpEW01WEKN0KDL6VAznA9To2CjZ0kT0DSD4KX2GTzW7hQs6J8SveGTqJFECjhYZj%2FgGmc1HOx1mITHkpVDlMMC8jsQGOqUBWAg4Cekalyw6Ib2EUgfFIuhTeRSNjBG4yeY8ACXXbNZxjbQDbuS2a4S7bLHzEpjkpHrxNnD8AJTZmq93QhMXwtLA1I14z8M3WQYkzNOGu8F0ynH%2Bv6x%2FeHLP6dPiuVh%2FCiewuvJ6GaAeA9LOJ7FMHW7ukOVjas2lmh0L73IwV2aOxASf6D75F%2F1SYhf4%2FZNyb5nCXYkgHaX4gJCQaLSBIkpMcBB0&X-Amz-Signature=d6d44a6898b326b99846c000bdf956acfeb8158cb2ad390d970267239947a365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR6LONN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDUsVvRDRnXnBdYUPjLWrBFTH074aw9jOjJmASmCa4cswIgMCCEf9mX43ncg5UPjrzpSLqvJHm6yuB1jGUDIATHoJoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMt6unM1Ks2QSSJf6SrcA3QsoCUGM9xqQ0BC8LBGlW35tz99Tp%2FyKldVHO%2BVj6jyUOl4GRmJrwnaSkdW1Ls6ypZPdSxxBlqvY%2FywYGSsT59vzed2M%2Bx9dJg0seAjRcHJKeSuF2k9dsIigyS%2BIKJ6kWs5f20iTK6QAgyMzEa7wDCSRrcAzSujNNWFDlAbd%2FiC9jbvBaSBzo2Hh66q%2BkVf3Zgtd8T8FhnqTO5VPGR8iGU%2FD5lqEVQva8qE0wpjHxdLZYOSTVppK3%2B5CpN4djhYe0u0MYOvam08gdwKZ%2Fca3Rfk%2Fw93IeYXmaJUx7EWpQhiqVVfo3ckija4%2Bl6s2QRc8jtmtHQHRMfA1LAmAJKJ7IlxEjAWfpFHtbbxaH6UoL%2F96y2Qf6o8MSqO%2BHbGyiWbra2TLwbtqSnkqLfKG6TGwHu%2Bd8si9hKEjKN1GzP%2FwZdeGVCObEHb0bVE%2BkgNpU7r60SrWAYf7pnFx1OumypFuMixpuvBAZSAjP4VxBNMD4VcDV%2FEJFv5ciSGX%2BCw1QwGwutmkaWdr96V%2Budu8tn4ZyBiY3FObjEsYAhcVjR%2F9tpEW01WEKN0KDL6VAznA9To2CjZ0kT0DSD4KX2GTzW7hQs6J8SveGTqJFECjhYZj%2FgGmc1HOx1mITHkpVDlMMC8jsQGOqUBWAg4Cekalyw6Ib2EUgfFIuhTeRSNjBG4yeY8ACXXbNZxjbQDbuS2a4S7bLHzEpjkpHrxNnD8AJTZmq93QhMXwtLA1I14z8M3WQYkzNOGu8F0ynH%2Bv6x%2FeHLP6dPiuVh%2FCiewuvJ6GaAeA9LOJ7FMHW7ukOVjas2lmh0L73IwV2aOxASf6D75F%2F1SYhf4%2FZNyb5nCXYkgHaX4gJCQaLSBIkpMcBB0&X-Amz-Signature=8e7f930cf03e4969bc6ed210f2eea7361445be511e9fa97679198ce003a00e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR6LONN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDUsVvRDRnXnBdYUPjLWrBFTH074aw9jOjJmASmCa4cswIgMCCEf9mX43ncg5UPjrzpSLqvJHm6yuB1jGUDIATHoJoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMt6unM1Ks2QSSJf6SrcA3QsoCUGM9xqQ0BC8LBGlW35tz99Tp%2FyKldVHO%2BVj6jyUOl4GRmJrwnaSkdW1Ls6ypZPdSxxBlqvY%2FywYGSsT59vzed2M%2Bx9dJg0seAjRcHJKeSuF2k9dsIigyS%2BIKJ6kWs5f20iTK6QAgyMzEa7wDCSRrcAzSujNNWFDlAbd%2FiC9jbvBaSBzo2Hh66q%2BkVf3Zgtd8T8FhnqTO5VPGR8iGU%2FD5lqEVQva8qE0wpjHxdLZYOSTVppK3%2B5CpN4djhYe0u0MYOvam08gdwKZ%2Fca3Rfk%2Fw93IeYXmaJUx7EWpQhiqVVfo3ckija4%2Bl6s2QRc8jtmtHQHRMfA1LAmAJKJ7IlxEjAWfpFHtbbxaH6UoL%2F96y2Qf6o8MSqO%2BHbGyiWbra2TLwbtqSnkqLfKG6TGwHu%2Bd8si9hKEjKN1GzP%2FwZdeGVCObEHb0bVE%2BkgNpU7r60SrWAYf7pnFx1OumypFuMixpuvBAZSAjP4VxBNMD4VcDV%2FEJFv5ciSGX%2BCw1QwGwutmkaWdr96V%2Budu8tn4ZyBiY3FObjEsYAhcVjR%2F9tpEW01WEKN0KDL6VAznA9To2CjZ0kT0DSD4KX2GTzW7hQs6J8SveGTqJFECjhYZj%2FgGmc1HOx1mITHkpVDlMMC8jsQGOqUBWAg4Cekalyw6Ib2EUgfFIuhTeRSNjBG4yeY8ACXXbNZxjbQDbuS2a4S7bLHzEpjkpHrxNnD8AJTZmq93QhMXwtLA1I14z8M3WQYkzNOGu8F0ynH%2Bv6x%2FeHLP6dPiuVh%2FCiewuvJ6GaAeA9LOJ7FMHW7ukOVjas2lmh0L73IwV2aOxASf6D75F%2F1SYhf4%2FZNyb5nCXYkgHaX4gJCQaLSBIkpMcBB0&X-Amz-Signature=b1899136dfd5ca7d092e98329db9be38977161a1916cbe0f2c8b3749a891288b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
