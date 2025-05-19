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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOWESMJH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDf4gJNSWJzHw6UEuFpFHuVQUhxVjy%2BjN%2FBUMoS32vaEAiBaG6Me0Knzk1dvJX8lJ1tcFpt5MB18BPLaVXrG45D5CiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FMj1h05ArfF7dPcgKtwDbXSGRHK5IV%2FOLShWGq4sE8xa1zpAYj0o4FetnFPe%2B6cZG6sivm4kQKOJ%2FpQ7zVheCr4C1KjYJZUt40as5SmKxLYfzfoKISsffhMXd18vOG%2B%2BpWLhi%2BuPjDvgxZ246b1IpzD3JBHwHy4q%2B7njOTQhHCo%2FeB4sZIW2fM%2BHgbpcGfOpaCt3MvOZpNTyMtB6k7dhPX%2FDDafSINzDy5F45BxsmaRF9Qknx7i7ut7fg%2Bfj3%2F2jBszEgALbqWV34gOuQD2YzA%2FtLdEHgUTjU4kwLP0IJYGm2XZProlwxukoZ3JN78w2CNhUb8Nzl1iqOpRLje9fBF3gil6XcL3kdUq0c4XXY075Klo%2BndYRXelpSBg%2FHH41M%2Fe8Y4YT2AVGng%2BbdduVO80tMZc1d1gswACczHjonSlu8FOfoNybt8uzsjYSID84aWwbBSUf1Q7LcG%2Ftu1%2BMgWQ0lHmb6C0subSOcj1qM4Bm2%2FwJx3pTWuvuZMyVgnb6PglEFBETStnpSz2g6WMVgdqBSVfa1UMzO%2F4%2BAO4atPzRzdXF0ew3MxOMHfqNfGuA3Hl%2FYwMCjMxW9qevmtmjV4RAnOtBnGPu6Ufw8RrRYrf3HoVcaCKdwFIqtkmIanAl9Yg7USJbzv%2BF6Z0woMGswQY6pgF1mqZnfv%2ByVdTUsdERn2VPAoQ5oCqdvvrS1V0n%2FnxeUt4qwt2gp7qPwZHHNvjWAuj%2B60ZOPBXo7D0rVgGik%2F%2B2VWkZQiZebkj%2BGyMopODiH0k7YEsEs0u%2FfJoz8R%2FDDL0sDN7d0OKZvOCVuB0qXgddYY6bepKKENEY1GZg8ZVxIaO2VnHKXQAhBd4jWIPdLOBX6fgNgI%2FVXT0V0EoGQbXyOpxeqaIZ&X-Amz-Signature=ac422cc76473c4280873481c18951028746c806d4a1e5a2228672e9f92d8b61a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOWESMJH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDf4gJNSWJzHw6UEuFpFHuVQUhxVjy%2BjN%2FBUMoS32vaEAiBaG6Me0Knzk1dvJX8lJ1tcFpt5MB18BPLaVXrG45D5CiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FMj1h05ArfF7dPcgKtwDbXSGRHK5IV%2FOLShWGq4sE8xa1zpAYj0o4FetnFPe%2B6cZG6sivm4kQKOJ%2FpQ7zVheCr4C1KjYJZUt40as5SmKxLYfzfoKISsffhMXd18vOG%2B%2BpWLhi%2BuPjDvgxZ246b1IpzD3JBHwHy4q%2B7njOTQhHCo%2FeB4sZIW2fM%2BHgbpcGfOpaCt3MvOZpNTyMtB6k7dhPX%2FDDafSINzDy5F45BxsmaRF9Qknx7i7ut7fg%2Bfj3%2F2jBszEgALbqWV34gOuQD2YzA%2FtLdEHgUTjU4kwLP0IJYGm2XZProlwxukoZ3JN78w2CNhUb8Nzl1iqOpRLje9fBF3gil6XcL3kdUq0c4XXY075Klo%2BndYRXelpSBg%2FHH41M%2Fe8Y4YT2AVGng%2BbdduVO80tMZc1d1gswACczHjonSlu8FOfoNybt8uzsjYSID84aWwbBSUf1Q7LcG%2Ftu1%2BMgWQ0lHmb6C0subSOcj1qM4Bm2%2FwJx3pTWuvuZMyVgnb6PglEFBETStnpSz2g6WMVgdqBSVfa1UMzO%2F4%2BAO4atPzRzdXF0ew3MxOMHfqNfGuA3Hl%2FYwMCjMxW9qevmtmjV4RAnOtBnGPu6Ufw8RrRYrf3HoVcaCKdwFIqtkmIanAl9Yg7USJbzv%2BF6Z0woMGswQY6pgF1mqZnfv%2ByVdTUsdERn2VPAoQ5oCqdvvrS1V0n%2FnxeUt4qwt2gp7qPwZHHNvjWAuj%2B60ZOPBXo7D0rVgGik%2F%2B2VWkZQiZebkj%2BGyMopODiH0k7YEsEs0u%2FfJoz8R%2FDDL0sDN7d0OKZvOCVuB0qXgddYY6bepKKENEY1GZg8ZVxIaO2VnHKXQAhBd4jWIPdLOBX6fgNgI%2FVXT0V0EoGQbXyOpxeqaIZ&X-Amz-Signature=d0c279282fd76b8b5fa7885aa81ad15e6b6a4c2dc28c1d492cd552e763c5e764&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOWESMJH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDf4gJNSWJzHw6UEuFpFHuVQUhxVjy%2BjN%2FBUMoS32vaEAiBaG6Me0Knzk1dvJX8lJ1tcFpt5MB18BPLaVXrG45D5CiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FMj1h05ArfF7dPcgKtwDbXSGRHK5IV%2FOLShWGq4sE8xa1zpAYj0o4FetnFPe%2B6cZG6sivm4kQKOJ%2FpQ7zVheCr4C1KjYJZUt40as5SmKxLYfzfoKISsffhMXd18vOG%2B%2BpWLhi%2BuPjDvgxZ246b1IpzD3JBHwHy4q%2B7njOTQhHCo%2FeB4sZIW2fM%2BHgbpcGfOpaCt3MvOZpNTyMtB6k7dhPX%2FDDafSINzDy5F45BxsmaRF9Qknx7i7ut7fg%2Bfj3%2F2jBszEgALbqWV34gOuQD2YzA%2FtLdEHgUTjU4kwLP0IJYGm2XZProlwxukoZ3JN78w2CNhUb8Nzl1iqOpRLje9fBF3gil6XcL3kdUq0c4XXY075Klo%2BndYRXelpSBg%2FHH41M%2Fe8Y4YT2AVGng%2BbdduVO80tMZc1d1gswACczHjonSlu8FOfoNybt8uzsjYSID84aWwbBSUf1Q7LcG%2Ftu1%2BMgWQ0lHmb6C0subSOcj1qM4Bm2%2FwJx3pTWuvuZMyVgnb6PglEFBETStnpSz2g6WMVgdqBSVfa1UMzO%2F4%2BAO4atPzRzdXF0ew3MxOMHfqNfGuA3Hl%2FYwMCjMxW9qevmtmjV4RAnOtBnGPu6Ufw8RrRYrf3HoVcaCKdwFIqtkmIanAl9Yg7USJbzv%2BF6Z0woMGswQY6pgF1mqZnfv%2ByVdTUsdERn2VPAoQ5oCqdvvrS1V0n%2FnxeUt4qwt2gp7qPwZHHNvjWAuj%2B60ZOPBXo7D0rVgGik%2F%2B2VWkZQiZebkj%2BGyMopODiH0k7YEsEs0u%2FfJoz8R%2FDDL0sDN7d0OKZvOCVuB0qXgddYY6bepKKENEY1GZg8ZVxIaO2VnHKXQAhBd4jWIPdLOBX6fgNgI%2FVXT0V0EoGQbXyOpxeqaIZ&X-Amz-Signature=f02b1d59170c9b14c1551d14654518af58afcc5268ca84b7fe48ea8e44a20b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
