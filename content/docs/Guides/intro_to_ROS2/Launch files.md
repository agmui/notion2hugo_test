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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG7MCD3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl2RiPGKPpHVB6xDp6D3hmbka5Yid6fGeGvKE%2Buw%2BteQIgGB3f7eR06w93anMhL0l2GKxlvWKn%2FNiLoUFEnE2focUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfQ6ByrNWhpg%2B83BSrcA44sQf0oNChd8RH%2F%2BCCihhhmFBLk9OUothAmMaLa1EiQFP%2FZrtR80D1Ur0ZAP4ocJntSmLXI6V%2BwD8wrutTQzkmBdRRLq9DKDikxcU8xsAq2o%2Bp%2BYbCCAR9CK5Qm2dj9MilmZlWTVdVLRF9EhoxFAbNVrYf2mxyE7Y9wTPxE6D8xQVPCJoVH5z8f7nEbeK6%2Bzg3C8F4Oi%2Fc6HLD4i6PDefgCrwhvexNxrYYhZNxXEfkCSQ%2FWD3XfiyoKso2an8ooskh27VlaVBN7O0w75T1Hv3vO0Fj2dYN%2BHc%2BhX0SlPbV7xSXbMhFuziJ5j1TNqJCf7pKGynVBa8fgvDEHzBOd%2FzeFkwVCQveoBDHRIFtdSnMWDtGqhSTobXvpbtUJpmNsYGSu221EVMnclRigC2i9ZVzhdNBRuTjWJM%2BNrxvOqvG8SjiFzleL5e3YuTnmyoc4K0jjHFk1c5cKiZsGamHQko4q0J2EQXqYgnz%2FH5jd2gzDvMlQFfQ7yKjCYaTvbGPzxlVu0i0LtTatq2IyvGJH1GJh7wZxA36J1qTdXVHuYH1G6%2BFOEO5NgZoPpEQ247oEPQQcCIEmkn7a3EFCRRtOIKC2r1M4KDBp2vYq78cYlJhsFfhP0ENAgtF4LDXUMM%2B0zsIGOqUBIs7PxYpwHO%2BNGNJ12go2jv%2B5PM1Wjn8MKmK33m%2FkqH7fCDo40JYAi5Kh0HV0Yp7%2FGnhvFvwEwnpr7Xom4BjN4NrauuQglJeQCgp6eT%2B12AY94UjZJJTICroYh8qKAx08R6TMRAolaieqKRXckNCYTjPam4%2FHT4aGTtMf0VrAWzDznTrU9EzrHug6XU72aQPDiGsJBS2YX4w0THg0hfzMJACXfPQb&X-Amz-Signature=f6d5ba0fad5e35d99c422a29a61e3196f5cb0958f8553585891a900a42f87aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG7MCD3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl2RiPGKPpHVB6xDp6D3hmbka5Yid6fGeGvKE%2Buw%2BteQIgGB3f7eR06w93anMhL0l2GKxlvWKn%2FNiLoUFEnE2focUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfQ6ByrNWhpg%2B83BSrcA44sQf0oNChd8RH%2F%2BCCihhhmFBLk9OUothAmMaLa1EiQFP%2FZrtR80D1Ur0ZAP4ocJntSmLXI6V%2BwD8wrutTQzkmBdRRLq9DKDikxcU8xsAq2o%2Bp%2BYbCCAR9CK5Qm2dj9MilmZlWTVdVLRF9EhoxFAbNVrYf2mxyE7Y9wTPxE6D8xQVPCJoVH5z8f7nEbeK6%2Bzg3C8F4Oi%2Fc6HLD4i6PDefgCrwhvexNxrYYhZNxXEfkCSQ%2FWD3XfiyoKso2an8ooskh27VlaVBN7O0w75T1Hv3vO0Fj2dYN%2BHc%2BhX0SlPbV7xSXbMhFuziJ5j1TNqJCf7pKGynVBa8fgvDEHzBOd%2FzeFkwVCQveoBDHRIFtdSnMWDtGqhSTobXvpbtUJpmNsYGSu221EVMnclRigC2i9ZVzhdNBRuTjWJM%2BNrxvOqvG8SjiFzleL5e3YuTnmyoc4K0jjHFk1c5cKiZsGamHQko4q0J2EQXqYgnz%2FH5jd2gzDvMlQFfQ7yKjCYaTvbGPzxlVu0i0LtTatq2IyvGJH1GJh7wZxA36J1qTdXVHuYH1G6%2BFOEO5NgZoPpEQ247oEPQQcCIEmkn7a3EFCRRtOIKC2r1M4KDBp2vYq78cYlJhsFfhP0ENAgtF4LDXUMM%2B0zsIGOqUBIs7PxYpwHO%2BNGNJ12go2jv%2B5PM1Wjn8MKmK33m%2FkqH7fCDo40JYAi5Kh0HV0Yp7%2FGnhvFvwEwnpr7Xom4BjN4NrauuQglJeQCgp6eT%2B12AY94UjZJJTICroYh8qKAx08R6TMRAolaieqKRXckNCYTjPam4%2FHT4aGTtMf0VrAWzDznTrU9EzrHug6XU72aQPDiGsJBS2YX4w0THg0hfzMJACXfPQb&X-Amz-Signature=0bab9b78d642b7fbba33296faedf9dc72e194f2faaef3b200613978514307eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QG7MCD3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl2RiPGKPpHVB6xDp6D3hmbka5Yid6fGeGvKE%2Buw%2BteQIgGB3f7eR06w93anMhL0l2GKxlvWKn%2FNiLoUFEnE2focUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfQ6ByrNWhpg%2B83BSrcA44sQf0oNChd8RH%2F%2BCCihhhmFBLk9OUothAmMaLa1EiQFP%2FZrtR80D1Ur0ZAP4ocJntSmLXI6V%2BwD8wrutTQzkmBdRRLq9DKDikxcU8xsAq2o%2Bp%2BYbCCAR9CK5Qm2dj9MilmZlWTVdVLRF9EhoxFAbNVrYf2mxyE7Y9wTPxE6D8xQVPCJoVH5z8f7nEbeK6%2Bzg3C8F4Oi%2Fc6HLD4i6PDefgCrwhvexNxrYYhZNxXEfkCSQ%2FWD3XfiyoKso2an8ooskh27VlaVBN7O0w75T1Hv3vO0Fj2dYN%2BHc%2BhX0SlPbV7xSXbMhFuziJ5j1TNqJCf7pKGynVBa8fgvDEHzBOd%2FzeFkwVCQveoBDHRIFtdSnMWDtGqhSTobXvpbtUJpmNsYGSu221EVMnclRigC2i9ZVzhdNBRuTjWJM%2BNrxvOqvG8SjiFzleL5e3YuTnmyoc4K0jjHFk1c5cKiZsGamHQko4q0J2EQXqYgnz%2FH5jd2gzDvMlQFfQ7yKjCYaTvbGPzxlVu0i0LtTatq2IyvGJH1GJh7wZxA36J1qTdXVHuYH1G6%2BFOEO5NgZoPpEQ247oEPQQcCIEmkn7a3EFCRRtOIKC2r1M4KDBp2vYq78cYlJhsFfhP0ENAgtF4LDXUMM%2B0zsIGOqUBIs7PxYpwHO%2BNGNJ12go2jv%2B5PM1Wjn8MKmK33m%2FkqH7fCDo40JYAi5Kh0HV0Yp7%2FGnhvFvwEwnpr7Xom4BjN4NrauuQglJeQCgp6eT%2B12AY94UjZJJTICroYh8qKAx08R6TMRAolaieqKRXckNCYTjPam4%2FHT4aGTtMf0VrAWzDznTrU9EzrHug6XU72aQPDiGsJBS2YX4w0THg0hfzMJACXfPQb&X-Amz-Signature=2332de0e091d81eec806b998678c5ebbfaabbdf8d0fd08b30c07e4ba38b705b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
