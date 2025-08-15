---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622U2534M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDk%2B27vSOhLRZnPiOTNcQXMvu1%2BggiVjbY6ubXbYkH5PAiEA6vEqitjEmblpsE%2FRClXgZxOtFu%2BZoCdm63qr3RokrGUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKtOkLBkHHN3t5bTEyrcA0KbPh%2BWPXtbX8L23Uolm%2FR4Di2BUSLiQsxEfw3KYYj88KgYWa1Y7eAO61TbEZ21ZFShPCznSETbXVajiheq2luuFa%2F8Nu4%2FqUBnnVmPmSBgRTn1RM5zMDccyXpwin61bxX638bIc7hd3ePxvbi2CbOzU1ggxgcislVDUtYBILdY7GMQZbnMHKArKeGWy2bE0qtZc4pLIwvKwwJUhTjzYM7nclEyXtp8m7Vi45g5ki3ZSM%2BF3Zrvf0dHeW2x7cwvEQ0JRbPmQZIaJKvcEPGrE%2B38kOwH7BF8A8sTISlEcznvkCekp%2Fk%2BUwba8URpkjo3TbZH%2FOihHPtsFaRfRWm9YlEKDKwMBJfmYwt5pUmB2sc5dut0Ib1VZPcSa7ET6TmwK0PqHWU4oTnp73UvddqzNyd3zE7XI%2BFI%2F0axIU4yWGFztpnVqKXmVR3YXCahLHvVsul4uJniAVwDACWo6JRr9Vlhfq4SIq1xScOx1Am2reqSV2UEzXwGik7%2Fx3vmiUdSIHarWQe3aJk5TpI0B8hfZdZkwWpI4apEj9BBqI%2BdaftAWUTIFBr9XoMwg7w8NEUvaM8JQNmHZFcpCpjos%2Fgl19P4LQ3wG6cd0xMa6ij5WyDCEC0usBqZlCRjmHw7MOzX%2FsQGOqUBsPZLElbL6qxGdZXuJAn%2FPJeiNDmt2HaMoOX8xH9a0L9hBMTOXQru4ha%2FrDlsPSsOxYmJXOr77aMQckL2uwFk4aYHntgklSIVdIjwuT7dPikOQB5jlFEQ7XfjfEEM5eHEvL7BKO%2Ff1Xq50SDWjv5VWJp9iEiSJK2SxFOY7oiM2Y525dALophNrIdB36c6c2jpCApDBkX%2BvdC858qMoJ9mtZTE7G9r&X-Amz-Signature=9e487c5083c94bc9ad8aa50ce946ccb2ecd719551a4606d223aae8ebfa1e0ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622U2534M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDk%2B27vSOhLRZnPiOTNcQXMvu1%2BggiVjbY6ubXbYkH5PAiEA6vEqitjEmblpsE%2FRClXgZxOtFu%2BZoCdm63qr3RokrGUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKtOkLBkHHN3t5bTEyrcA0KbPh%2BWPXtbX8L23Uolm%2FR4Di2BUSLiQsxEfw3KYYj88KgYWa1Y7eAO61TbEZ21ZFShPCznSETbXVajiheq2luuFa%2F8Nu4%2FqUBnnVmPmSBgRTn1RM5zMDccyXpwin61bxX638bIc7hd3ePxvbi2CbOzU1ggxgcislVDUtYBILdY7GMQZbnMHKArKeGWy2bE0qtZc4pLIwvKwwJUhTjzYM7nclEyXtp8m7Vi45g5ki3ZSM%2BF3Zrvf0dHeW2x7cwvEQ0JRbPmQZIaJKvcEPGrE%2B38kOwH7BF8A8sTISlEcznvkCekp%2Fk%2BUwba8URpkjo3TbZH%2FOihHPtsFaRfRWm9YlEKDKwMBJfmYwt5pUmB2sc5dut0Ib1VZPcSa7ET6TmwK0PqHWU4oTnp73UvddqzNyd3zE7XI%2BFI%2F0axIU4yWGFztpnVqKXmVR3YXCahLHvVsul4uJniAVwDACWo6JRr9Vlhfq4SIq1xScOx1Am2reqSV2UEzXwGik7%2Fx3vmiUdSIHarWQe3aJk5TpI0B8hfZdZkwWpI4apEj9BBqI%2BdaftAWUTIFBr9XoMwg7w8NEUvaM8JQNmHZFcpCpjos%2Fgl19P4LQ3wG6cd0xMa6ij5WyDCEC0usBqZlCRjmHw7MOzX%2FsQGOqUBsPZLElbL6qxGdZXuJAn%2FPJeiNDmt2HaMoOX8xH9a0L9hBMTOXQru4ha%2FrDlsPSsOxYmJXOr77aMQckL2uwFk4aYHntgklSIVdIjwuT7dPikOQB5jlFEQ7XfjfEEM5eHEvL7BKO%2Ff1Xq50SDWjv5VWJp9iEiSJK2SxFOY7oiM2Y525dALophNrIdB36c6c2jpCApDBkX%2BvdC858qMoJ9mtZTE7G9r&X-Amz-Signature=af3bda288eb709e04bf85d30ade9458b3e0ad89224c862727d31ebc2b16a08e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622U2534M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDk%2B27vSOhLRZnPiOTNcQXMvu1%2BggiVjbY6ubXbYkH5PAiEA6vEqitjEmblpsE%2FRClXgZxOtFu%2BZoCdm63qr3RokrGUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKtOkLBkHHN3t5bTEyrcA0KbPh%2BWPXtbX8L23Uolm%2FR4Di2BUSLiQsxEfw3KYYj88KgYWa1Y7eAO61TbEZ21ZFShPCznSETbXVajiheq2luuFa%2F8Nu4%2FqUBnnVmPmSBgRTn1RM5zMDccyXpwin61bxX638bIc7hd3ePxvbi2CbOzU1ggxgcislVDUtYBILdY7GMQZbnMHKArKeGWy2bE0qtZc4pLIwvKwwJUhTjzYM7nclEyXtp8m7Vi45g5ki3ZSM%2BF3Zrvf0dHeW2x7cwvEQ0JRbPmQZIaJKvcEPGrE%2B38kOwH7BF8A8sTISlEcznvkCekp%2Fk%2BUwba8URpkjo3TbZH%2FOihHPtsFaRfRWm9YlEKDKwMBJfmYwt5pUmB2sc5dut0Ib1VZPcSa7ET6TmwK0PqHWU4oTnp73UvddqzNyd3zE7XI%2BFI%2F0axIU4yWGFztpnVqKXmVR3YXCahLHvVsul4uJniAVwDACWo6JRr9Vlhfq4SIq1xScOx1Am2reqSV2UEzXwGik7%2Fx3vmiUdSIHarWQe3aJk5TpI0B8hfZdZkwWpI4apEj9BBqI%2BdaftAWUTIFBr9XoMwg7w8NEUvaM8JQNmHZFcpCpjos%2Fgl19P4LQ3wG6cd0xMa6ij5WyDCEC0usBqZlCRjmHw7MOzX%2FsQGOqUBsPZLElbL6qxGdZXuJAn%2FPJeiNDmt2HaMoOX8xH9a0L9hBMTOXQru4ha%2FrDlsPSsOxYmJXOr77aMQckL2uwFk4aYHntgklSIVdIjwuT7dPikOQB5jlFEQ7XfjfEEM5eHEvL7BKO%2Ff1Xq50SDWjv5VWJp9iEiSJK2SxFOY7oiM2Y525dALophNrIdB36c6c2jpCApDBkX%2BvdC858qMoJ9mtZTE7G9r&X-Amz-Signature=e9c667e656c17f8a1cf6f68da0618a3ad86281d7213af81362443e83e1444059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
