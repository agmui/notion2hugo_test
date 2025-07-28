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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAKNVQV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFNid8V1cgE7cyu%2BCVWy28i48vLuPYHJ8XZubxndyfeTAiA3SqdvIn00d9onMfWbn08O3J2b9bQb%2FpJZHTxVLbgMryqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ohiX4yUyKHXSaooKtwDtmYrLHf9hxt9NN8Ki9CyeygwFviFFsML%2BSNjudOM7TD1%2BZUQVKQ6bwiontSddD%2BcBS9srzNyPwI%2BhrHVGp27xguN%2FPLV9fjDK6pBNuSZzwAPHCjhNPIbLB2tyNefPJGhDBpFVX%2Bp05809JjwCyRzcsqatnHugjhwrksK9JL%2BiPtPAo0UQ54Z0HIHB1781wtWG%2Be%2FgPnFA0HN045LTFt7YBTwiY%2Bv7SMNx4AlZmlCPrsK5PkSihGfKEO3xA9ANhBSMCBdbMrqvUz1VR%2F19T5ippAeWiSEI1rpHLf8YBUxF94LO3%2FdW8cNczhkRTLIS5sAwue0IcCZeB%2BUXRHlxnMSZ4q4HqZgOuiUQ2I9fojYwo8TCXukGbzATUMYBDV49CHtnVE6LVPRIiWIRryjdv8Uf%2BWaSEhNhlqg4FrCTeiBDcz65ee6umnkxBiShnNQ6xn%2FpJfilTOzC85ZOiFeabLi8d0C3MeoFffZn1hJUH7tIRckbLESUcXnDBM5JMCtyzRowPkZwzWgbXcnPzKq1q%2B%2BHZA9lC%2FQ1KhNJnrhfN0exQFbC8%2BDSRFu7RCteespOATPhtxNjMTX9lvvayzYg294Sos6CQqXnQMgTIpRcBSyvPRuQHGNTEAkSMy%2BBQUw6Y2dxAY6pgEjh2DoenRJ6MDYp9iedd87LbfuPr6EFuZNiG4Z4Ps0GY88QtKIFID4a85VFpYYMwguz1pUvXO7bwES9hpS5Tl7IXgsCeinZYO2xqfxc%2FvfotpH%2FMRe5KE1mlse8BlPuDF5OMdHqW5rJ95%2FtEMBW43MnxWrFrST7IsfzGniupOyHXDNR8s1MTfqoo7pNgcGyVXxShMahfVml%2BMqOsw6%2BCcGMbam8AzO&X-Amz-Signature=5b6b88c2088943306d0cadcb3c3c595942d94766220a404e9d030897dd6725c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAKNVQV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFNid8V1cgE7cyu%2BCVWy28i48vLuPYHJ8XZubxndyfeTAiA3SqdvIn00d9onMfWbn08O3J2b9bQb%2FpJZHTxVLbgMryqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ohiX4yUyKHXSaooKtwDtmYrLHf9hxt9NN8Ki9CyeygwFviFFsML%2BSNjudOM7TD1%2BZUQVKQ6bwiontSddD%2BcBS9srzNyPwI%2BhrHVGp27xguN%2FPLV9fjDK6pBNuSZzwAPHCjhNPIbLB2tyNefPJGhDBpFVX%2Bp05809JjwCyRzcsqatnHugjhwrksK9JL%2BiPtPAo0UQ54Z0HIHB1781wtWG%2Be%2FgPnFA0HN045LTFt7YBTwiY%2Bv7SMNx4AlZmlCPrsK5PkSihGfKEO3xA9ANhBSMCBdbMrqvUz1VR%2F19T5ippAeWiSEI1rpHLf8YBUxF94LO3%2FdW8cNczhkRTLIS5sAwue0IcCZeB%2BUXRHlxnMSZ4q4HqZgOuiUQ2I9fojYwo8TCXukGbzATUMYBDV49CHtnVE6LVPRIiWIRryjdv8Uf%2BWaSEhNhlqg4FrCTeiBDcz65ee6umnkxBiShnNQ6xn%2FpJfilTOzC85ZOiFeabLi8d0C3MeoFffZn1hJUH7tIRckbLESUcXnDBM5JMCtyzRowPkZwzWgbXcnPzKq1q%2B%2BHZA9lC%2FQ1KhNJnrhfN0exQFbC8%2BDSRFu7RCteespOATPhtxNjMTX9lvvayzYg294Sos6CQqXnQMgTIpRcBSyvPRuQHGNTEAkSMy%2BBQUw6Y2dxAY6pgEjh2DoenRJ6MDYp9iedd87LbfuPr6EFuZNiG4Z4Ps0GY88QtKIFID4a85VFpYYMwguz1pUvXO7bwES9hpS5Tl7IXgsCeinZYO2xqfxc%2FvfotpH%2FMRe5KE1mlse8BlPuDF5OMdHqW5rJ95%2FtEMBW43MnxWrFrST7IsfzGniupOyHXDNR8s1MTfqoo7pNgcGyVXxShMahfVml%2BMqOsw6%2BCcGMbam8AzO&X-Amz-Signature=4df20d0b41c6425a7a1e469da7396e1123c06d4ec557c4f6f7f12e2ccbdad134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAKNVQV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFNid8V1cgE7cyu%2BCVWy28i48vLuPYHJ8XZubxndyfeTAiA3SqdvIn00d9onMfWbn08O3J2b9bQb%2FpJZHTxVLbgMryqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ohiX4yUyKHXSaooKtwDtmYrLHf9hxt9NN8Ki9CyeygwFviFFsML%2BSNjudOM7TD1%2BZUQVKQ6bwiontSddD%2BcBS9srzNyPwI%2BhrHVGp27xguN%2FPLV9fjDK6pBNuSZzwAPHCjhNPIbLB2tyNefPJGhDBpFVX%2Bp05809JjwCyRzcsqatnHugjhwrksK9JL%2BiPtPAo0UQ54Z0HIHB1781wtWG%2Be%2FgPnFA0HN045LTFt7YBTwiY%2Bv7SMNx4AlZmlCPrsK5PkSihGfKEO3xA9ANhBSMCBdbMrqvUz1VR%2F19T5ippAeWiSEI1rpHLf8YBUxF94LO3%2FdW8cNczhkRTLIS5sAwue0IcCZeB%2BUXRHlxnMSZ4q4HqZgOuiUQ2I9fojYwo8TCXukGbzATUMYBDV49CHtnVE6LVPRIiWIRryjdv8Uf%2BWaSEhNhlqg4FrCTeiBDcz65ee6umnkxBiShnNQ6xn%2FpJfilTOzC85ZOiFeabLi8d0C3MeoFffZn1hJUH7tIRckbLESUcXnDBM5JMCtyzRowPkZwzWgbXcnPzKq1q%2B%2BHZA9lC%2FQ1KhNJnrhfN0exQFbC8%2BDSRFu7RCteespOATPhtxNjMTX9lvvayzYg294Sos6CQqXnQMgTIpRcBSyvPRuQHGNTEAkSMy%2BBQUw6Y2dxAY6pgEjh2DoenRJ6MDYp9iedd87LbfuPr6EFuZNiG4Z4Ps0GY88QtKIFID4a85VFpYYMwguz1pUvXO7bwES9hpS5Tl7IXgsCeinZYO2xqfxc%2FvfotpH%2FMRe5KE1mlse8BlPuDF5OMdHqW5rJ95%2FtEMBW43MnxWrFrST7IsfzGniupOyHXDNR8s1MTfqoo7pNgcGyVXxShMahfVml%2BMqOsw6%2BCcGMbam8AzO&X-Amz-Signature=24a1754fbe801610fff06837c284aeed4d61ab2d5b6be0494cc6901f6037415b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
