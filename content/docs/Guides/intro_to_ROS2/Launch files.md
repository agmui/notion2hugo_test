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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPKOU7L%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxekeukfmbeqW%2FY%2BLzksV7c0lWjwP%2FfAg7TzyLExd00QIhALps6zz%2Bq8rcB5kcbM7RfwTxCiP1Fpm7EgHKrD86qE%2FlKv8DCF4QABoMNjM3NDIzMTgzODA1IgybtOCLqLhE1p4QILsq3AOIwprAkWTbup4TMDLb1dMqVyvbCc3lsJdJ3QQB9Q%2FDPCfkCMHGvvMdqnexwi2PPC5LupWjpHMjNH3yEIB267H2y%2BUIKBCdzHfDWqDNAzQfpkUMcGInAPjz4VCdUwI%2B68AZDe5l0k1c%2FT28mEL8IajVB3SXt%2Fues0jdTfDy68P3UG5P4%2BKh17qcqdqddW6zosy9OgzW1bD1LWF9mJeUr6UI0uuDF5Vs4mLACvt4w0X5JR1TkOLVLbURHMYVZYOSfDltr06PUjqLImYekVkGufHFIVSNuT2ylxmLjo7pNJlnsEvEd0BEZKjpxEMR0Zcyxu70OL3UnYFBXOT9LxH0mI62b8hJbn0dHpFgLIboDY7Te%2BDGqtfmavf7PSNcIr6roo6keLoDatr9XdfyXe82wndA9oQdw6N6q5HIR73t4amkZDMHN7pD2AqdkiQsroljxTXz35hhBRl9K6s%2B5Axx%2BxUAhUD5wQwZkNXme%2FbngQyYNN9BHCmtQMf2R2ug13WCDD8V5RAzgxvXdXe28kD%2Bx2ZQ4pP7Wky6Dfz8roOwbH2NCJng2e55n2rm2z0Txqza43vGiACWhSdf5%2BII9z94xHkg%2BFf%2F0SV54%2FzSK%2FfFmRoz0SvU5Z7NJiyLIg%2F39jDO%2B4PABjqkAWMRWFO8egYUcYM3Xv3fU5Wtejj2mmGzBinfC%2BbkF9eD%2F%2B87UtquAuOh8mgBgYdalUJyHN3XH94PQz2aXhsaC3qMSd45Q2pvduwrNP6dDDSnksJ0cxFZrgQPZ%2F1bXm9C6Aa0IK%2BZNqW0sc3ts6IEUecRAH1r0LnnGu%2F34BM00SYHfPtOUC7pfiQbe6azVTtlbmEYBDrNhgVyAL81k6o0nwYPhw8O&X-Amz-Signature=9f7a9546fbf0054d340c68a41f97ad56f499fb7053be30889b24267c4e0e820d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPKOU7L%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxekeukfmbeqW%2FY%2BLzksV7c0lWjwP%2FfAg7TzyLExd00QIhALps6zz%2Bq8rcB5kcbM7RfwTxCiP1Fpm7EgHKrD86qE%2FlKv8DCF4QABoMNjM3NDIzMTgzODA1IgybtOCLqLhE1p4QILsq3AOIwprAkWTbup4TMDLb1dMqVyvbCc3lsJdJ3QQB9Q%2FDPCfkCMHGvvMdqnexwi2PPC5LupWjpHMjNH3yEIB267H2y%2BUIKBCdzHfDWqDNAzQfpkUMcGInAPjz4VCdUwI%2B68AZDe5l0k1c%2FT28mEL8IajVB3SXt%2Fues0jdTfDy68P3UG5P4%2BKh17qcqdqddW6zosy9OgzW1bD1LWF9mJeUr6UI0uuDF5Vs4mLACvt4w0X5JR1TkOLVLbURHMYVZYOSfDltr06PUjqLImYekVkGufHFIVSNuT2ylxmLjo7pNJlnsEvEd0BEZKjpxEMR0Zcyxu70OL3UnYFBXOT9LxH0mI62b8hJbn0dHpFgLIboDY7Te%2BDGqtfmavf7PSNcIr6roo6keLoDatr9XdfyXe82wndA9oQdw6N6q5HIR73t4amkZDMHN7pD2AqdkiQsroljxTXz35hhBRl9K6s%2B5Axx%2BxUAhUD5wQwZkNXme%2FbngQyYNN9BHCmtQMf2R2ug13WCDD8V5RAzgxvXdXe28kD%2Bx2ZQ4pP7Wky6Dfz8roOwbH2NCJng2e55n2rm2z0Txqza43vGiACWhSdf5%2BII9z94xHkg%2BFf%2F0SV54%2FzSK%2FfFmRoz0SvU5Z7NJiyLIg%2F39jDO%2B4PABjqkAWMRWFO8egYUcYM3Xv3fU5Wtejj2mmGzBinfC%2BbkF9eD%2F%2B87UtquAuOh8mgBgYdalUJyHN3XH94PQz2aXhsaC3qMSd45Q2pvduwrNP6dDDSnksJ0cxFZrgQPZ%2F1bXm9C6Aa0IK%2BZNqW0sc3ts6IEUecRAH1r0LnnGu%2F34BM00SYHfPtOUC7pfiQbe6azVTtlbmEYBDrNhgVyAL81k6o0nwYPhw8O&X-Amz-Signature=9d0c7687984f977ca12a3cdb45214434819da1aebb9a289bb88395baa2d104ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPKOU7L%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxekeukfmbeqW%2FY%2BLzksV7c0lWjwP%2FfAg7TzyLExd00QIhALps6zz%2Bq8rcB5kcbM7RfwTxCiP1Fpm7EgHKrD86qE%2FlKv8DCF4QABoMNjM3NDIzMTgzODA1IgybtOCLqLhE1p4QILsq3AOIwprAkWTbup4TMDLb1dMqVyvbCc3lsJdJ3QQB9Q%2FDPCfkCMHGvvMdqnexwi2PPC5LupWjpHMjNH3yEIB267H2y%2BUIKBCdzHfDWqDNAzQfpkUMcGInAPjz4VCdUwI%2B68AZDe5l0k1c%2FT28mEL8IajVB3SXt%2Fues0jdTfDy68P3UG5P4%2BKh17qcqdqddW6zosy9OgzW1bD1LWF9mJeUr6UI0uuDF5Vs4mLACvt4w0X5JR1TkOLVLbURHMYVZYOSfDltr06PUjqLImYekVkGufHFIVSNuT2ylxmLjo7pNJlnsEvEd0BEZKjpxEMR0Zcyxu70OL3UnYFBXOT9LxH0mI62b8hJbn0dHpFgLIboDY7Te%2BDGqtfmavf7PSNcIr6roo6keLoDatr9XdfyXe82wndA9oQdw6N6q5HIR73t4amkZDMHN7pD2AqdkiQsroljxTXz35hhBRl9K6s%2B5Axx%2BxUAhUD5wQwZkNXme%2FbngQyYNN9BHCmtQMf2R2ug13WCDD8V5RAzgxvXdXe28kD%2Bx2ZQ4pP7Wky6Dfz8roOwbH2NCJng2e55n2rm2z0Txqza43vGiACWhSdf5%2BII9z94xHkg%2BFf%2F0SV54%2FzSK%2FfFmRoz0SvU5Z7NJiyLIg%2F39jDO%2B4PABjqkAWMRWFO8egYUcYM3Xv3fU5Wtejj2mmGzBinfC%2BbkF9eD%2F%2B87UtquAuOh8mgBgYdalUJyHN3XH94PQz2aXhsaC3qMSd45Q2pvduwrNP6dDDSnksJ0cxFZrgQPZ%2F1bXm9C6Aa0IK%2BZNqW0sc3ts6IEUecRAH1r0LnnGu%2F34BM00SYHfPtOUC7pfiQbe6azVTtlbmEYBDrNhgVyAL81k6o0nwYPhw8O&X-Amz-Signature=0a06c1c1ff287237119e7cb2d820256ce8abdeb47cda315139b713c78bf96924&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
