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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZZ4THUF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEklWpu95urzGlBtoHeK3J%2BfETJAAzFNTGvSABdeRxD1AiEAki4H5zZOkqQmdlI1Eq4bGG4E2ezFaRkZ%2Fk37w65hRJUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNH%2BPsu3vpp6RD%2BehircAzaYJNhadPrfv%2BwA4T5y3es4A555ioHmafIcHWfGKHFjy7RHeQFALDf9EFAG%2B0Flt7olYq0sON1Z3ZcQSiNpkFCQi9WT8M7D3M0uxbIyjv3NHEMMmpgIRf9%2BcQOTKDssskpbbef4qH6NcBSEHuEN3mbHoLaRDbiQLaQP0E%2BeRomH32w4eA56HldFr7OV1Nc9MbXNOWMn%2FDGWJCD9Tc9oB1sGidKPH%2F7C0ZQFBXiGSYV7cPZw43VtTmCxy1aMuyAyxl3mzSMbZs6kDcgmt7MLFBK%2BIFUw53z9gftnrFRCKlvO%2FiPL53%2B0uk0kPKWYWAdRR0gXMv72tBkaN%2FIm54or1VtxWdeBQJh1xab3P%2BNgkZAjJSo4RS6aizcXpmx2AbFq02ykFFohdYJamXRROU4XH2BpdrwvuSakyn7MvjiRHlQxOBB9n2Bsg%2B4xuByaVlwbw6foCpGRw3%2BGrBRJQTa6ZzblTONzdiiRnIwD9TohgUVo0H3wtIvQvKYfEFyig2JXjQDSsELjMJTXKV%2FXJycalJ8FDWZPf6pcNyNr%2BAfSjQNIjACUozr3Bl%2FBBFVCCp%2BRtewIAumxLkzNtfzuakEZEwgnCMTdWee%2FeCLayalFFA%2FMekX3KQZELU09CYZnMM%2BWzb0GOqUBzMOZMqD7iuYVkOPETEPsVwj7tzRqH8DouAKzvc2Yk5ITm%2FxvUSybBmmRHuwcDVqwKfoYmB3KTKjivSYCLJm2QN1qoiCkEpf9mm9knsce0hNRjWQKmhLyaweKsF53ORLvVn8lmYHa9EqMnXIjdAXNVqB9Mdk6Ir8g8y45PJVP6tFbbKbsVTWhiomdnVG7665ClKmzpS9y9KNf01eZ2isVTV9ad2ye&X-Amz-Signature=58d14a0ef4c278208fba0b65278ac6c500f0a6328dbd2fcd23a26623b5a2eb4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZZ4THUF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEklWpu95urzGlBtoHeK3J%2BfETJAAzFNTGvSABdeRxD1AiEAki4H5zZOkqQmdlI1Eq4bGG4E2ezFaRkZ%2Fk37w65hRJUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNH%2BPsu3vpp6RD%2BehircAzaYJNhadPrfv%2BwA4T5y3es4A555ioHmafIcHWfGKHFjy7RHeQFALDf9EFAG%2B0Flt7olYq0sON1Z3ZcQSiNpkFCQi9WT8M7D3M0uxbIyjv3NHEMMmpgIRf9%2BcQOTKDssskpbbef4qH6NcBSEHuEN3mbHoLaRDbiQLaQP0E%2BeRomH32w4eA56HldFr7OV1Nc9MbXNOWMn%2FDGWJCD9Tc9oB1sGidKPH%2F7C0ZQFBXiGSYV7cPZw43VtTmCxy1aMuyAyxl3mzSMbZs6kDcgmt7MLFBK%2BIFUw53z9gftnrFRCKlvO%2FiPL53%2B0uk0kPKWYWAdRR0gXMv72tBkaN%2FIm54or1VtxWdeBQJh1xab3P%2BNgkZAjJSo4RS6aizcXpmx2AbFq02ykFFohdYJamXRROU4XH2BpdrwvuSakyn7MvjiRHlQxOBB9n2Bsg%2B4xuByaVlwbw6foCpGRw3%2BGrBRJQTa6ZzblTONzdiiRnIwD9TohgUVo0H3wtIvQvKYfEFyig2JXjQDSsELjMJTXKV%2FXJycalJ8FDWZPf6pcNyNr%2BAfSjQNIjACUozr3Bl%2FBBFVCCp%2BRtewIAumxLkzNtfzuakEZEwgnCMTdWee%2FeCLayalFFA%2FMekX3KQZELU09CYZnMM%2BWzb0GOqUBzMOZMqD7iuYVkOPETEPsVwj7tzRqH8DouAKzvc2Yk5ITm%2FxvUSybBmmRHuwcDVqwKfoYmB3KTKjivSYCLJm2QN1qoiCkEpf9mm9knsce0hNRjWQKmhLyaweKsF53ORLvVn8lmYHa9EqMnXIjdAXNVqB9Mdk6Ir8g8y45PJVP6tFbbKbsVTWhiomdnVG7665ClKmzpS9y9KNf01eZ2isVTV9ad2ye&X-Amz-Signature=de836ef7d597dbef1dbe11e4e1bf8e23d8dcdba377ae6903ff4732a88adf4aba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZZ4THUF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEklWpu95urzGlBtoHeK3J%2BfETJAAzFNTGvSABdeRxD1AiEAki4H5zZOkqQmdlI1Eq4bGG4E2ezFaRkZ%2Fk37w65hRJUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNH%2BPsu3vpp6RD%2BehircAzaYJNhadPrfv%2BwA4T5y3es4A555ioHmafIcHWfGKHFjy7RHeQFALDf9EFAG%2B0Flt7olYq0sON1Z3ZcQSiNpkFCQi9WT8M7D3M0uxbIyjv3NHEMMmpgIRf9%2BcQOTKDssskpbbef4qH6NcBSEHuEN3mbHoLaRDbiQLaQP0E%2BeRomH32w4eA56HldFr7OV1Nc9MbXNOWMn%2FDGWJCD9Tc9oB1sGidKPH%2F7C0ZQFBXiGSYV7cPZw43VtTmCxy1aMuyAyxl3mzSMbZs6kDcgmt7MLFBK%2BIFUw53z9gftnrFRCKlvO%2FiPL53%2B0uk0kPKWYWAdRR0gXMv72tBkaN%2FIm54or1VtxWdeBQJh1xab3P%2BNgkZAjJSo4RS6aizcXpmx2AbFq02ykFFohdYJamXRROU4XH2BpdrwvuSakyn7MvjiRHlQxOBB9n2Bsg%2B4xuByaVlwbw6foCpGRw3%2BGrBRJQTa6ZzblTONzdiiRnIwD9TohgUVo0H3wtIvQvKYfEFyig2JXjQDSsELjMJTXKV%2FXJycalJ8FDWZPf6pcNyNr%2BAfSjQNIjACUozr3Bl%2FBBFVCCp%2BRtewIAumxLkzNtfzuakEZEwgnCMTdWee%2FeCLayalFFA%2FMekX3KQZELU09CYZnMM%2BWzb0GOqUBzMOZMqD7iuYVkOPETEPsVwj7tzRqH8DouAKzvc2Yk5ITm%2FxvUSybBmmRHuwcDVqwKfoYmB3KTKjivSYCLJm2QN1qoiCkEpf9mm9knsce0hNRjWQKmhLyaweKsF53ORLvVn8lmYHa9EqMnXIjdAXNVqB9Mdk6Ir8g8y45PJVP6tFbbKbsVTWhiomdnVG7665ClKmzpS9y9KNf01eZ2isVTV9ad2ye&X-Amz-Signature=bc182fe0872ac3330ab2546c84f5c37db73d847af41d8edc090da98c1e96e7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
