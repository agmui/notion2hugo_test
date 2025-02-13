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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDQR4RO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRN2kGzPKTULPLgJYbgsHF58cUOprdpixwlyEhLW6UcAiEApJtxVvLaVMD3HFqcT1hVdccEUwV81282GOUuQaM9tAgq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFzj0OPZDzUl3iSFNyrcA4a1pmTix8GwPElz8QQCYLW%2BLv6rsn4fzrGfJ5kHPEUbnESUzzb%2B%2Bs1bv2uE2dh5A538nC7X9ao253aHF6oDaeDhXzugxhznJdy%2FNM69cDc87LkCpwrVneoWHkyzSVY5h39pybsHHgFL6OP4lkHEmz7PfX9BFFbxThAzTlZumvq72ENWk2D%2FObCiKGG8CJA3OHXcGGWqD9Dfj2rGRLDeGHl67i4qraKYDqWgIFoPW7JqwpnLF2gYqZAQZ6%2FSyVom4P42U4praRGd0V0X%2FUGEIQUT44YlXTAfT24o6Iz8CCh4n%2Foctc0IUJRp2M3PyPYUoxPrcEdHCcsmBgsPeJDEC6c%2FUNnO8HQIRIUmgz6as%2BFeTK4FfmEPdJj4la5%2F5t4B%2FYitRkdCZWCM3SQSglo9nrh3gEvjGZUm7STxRWvTnyzPksHxFpX0De0ghvdN9m2TCc%2FDcBGkA8gjQE%2BnB1FW0M%2F3J3wkixLNF6S9E5iq80lqJE5dRK8CU6iXyFg7X5Z9xmqafs8FscnKTyYelr8yAnA%2BrtO7fHmzS59stw8bo%2BfWo3du7NQ571JQ6%2B28iH4R17w69q6ucQNlcXsVNzIZiKbB2ayfUFKnbMf3obsR057THR24rtDvAOD%2BBnQ%2BMLXJtr0GOqUBMAWHH5OvykX96J0%2BsKZLixqfj%2Fn3zi7DdXpm0YrD8JDxGrtRn6wkwiENxaH2R5GcFdcT0i7XPHbqu%2BsxIZaqkoWsdXJMX%2FAzmYUxISHIJIe2oiwf2lPskx%2B9g%2BZ5VwygxqnmNcaplkzqF6s9NJsd5C0EQQMcPNcxO7CfE000XxFC8ZzGYzSxs73JXyhnRnT4FTex7%2BRcklb37yejduw%2Fpfos7fRv&X-Amz-Signature=880da4226933869317eaf814b0f2144e6b13d46b6469948c5596c857b8e21c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDQR4RO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRN2kGzPKTULPLgJYbgsHF58cUOprdpixwlyEhLW6UcAiEApJtxVvLaVMD3HFqcT1hVdccEUwV81282GOUuQaM9tAgq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFzj0OPZDzUl3iSFNyrcA4a1pmTix8GwPElz8QQCYLW%2BLv6rsn4fzrGfJ5kHPEUbnESUzzb%2B%2Bs1bv2uE2dh5A538nC7X9ao253aHF6oDaeDhXzugxhznJdy%2FNM69cDc87LkCpwrVneoWHkyzSVY5h39pybsHHgFL6OP4lkHEmz7PfX9BFFbxThAzTlZumvq72ENWk2D%2FObCiKGG8CJA3OHXcGGWqD9Dfj2rGRLDeGHl67i4qraKYDqWgIFoPW7JqwpnLF2gYqZAQZ6%2FSyVom4P42U4praRGd0V0X%2FUGEIQUT44YlXTAfT24o6Iz8CCh4n%2Foctc0IUJRp2M3PyPYUoxPrcEdHCcsmBgsPeJDEC6c%2FUNnO8HQIRIUmgz6as%2BFeTK4FfmEPdJj4la5%2F5t4B%2FYitRkdCZWCM3SQSglo9nrh3gEvjGZUm7STxRWvTnyzPksHxFpX0De0ghvdN9m2TCc%2FDcBGkA8gjQE%2BnB1FW0M%2F3J3wkixLNF6S9E5iq80lqJE5dRK8CU6iXyFg7X5Z9xmqafs8FscnKTyYelr8yAnA%2BrtO7fHmzS59stw8bo%2BfWo3du7NQ571JQ6%2B28iH4R17w69q6ucQNlcXsVNzIZiKbB2ayfUFKnbMf3obsR057THR24rtDvAOD%2BBnQ%2BMLXJtr0GOqUBMAWHH5OvykX96J0%2BsKZLixqfj%2Fn3zi7DdXpm0YrD8JDxGrtRn6wkwiENxaH2R5GcFdcT0i7XPHbqu%2BsxIZaqkoWsdXJMX%2FAzmYUxISHIJIe2oiwf2lPskx%2B9g%2BZ5VwygxqnmNcaplkzqF6s9NJsd5C0EQQMcPNcxO7CfE000XxFC8ZzGYzSxs73JXyhnRnT4FTex7%2BRcklb37yejduw%2Fpfos7fRv&X-Amz-Signature=45a3243188e2b2f65a1abf4d37a8eea77a14b5f20daba99c4a8f9388a093f301&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDQR4RO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRN2kGzPKTULPLgJYbgsHF58cUOprdpixwlyEhLW6UcAiEApJtxVvLaVMD3HFqcT1hVdccEUwV81282GOUuQaM9tAgq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFzj0OPZDzUl3iSFNyrcA4a1pmTix8GwPElz8QQCYLW%2BLv6rsn4fzrGfJ5kHPEUbnESUzzb%2B%2Bs1bv2uE2dh5A538nC7X9ao253aHF6oDaeDhXzugxhznJdy%2FNM69cDc87LkCpwrVneoWHkyzSVY5h39pybsHHgFL6OP4lkHEmz7PfX9BFFbxThAzTlZumvq72ENWk2D%2FObCiKGG8CJA3OHXcGGWqD9Dfj2rGRLDeGHl67i4qraKYDqWgIFoPW7JqwpnLF2gYqZAQZ6%2FSyVom4P42U4praRGd0V0X%2FUGEIQUT44YlXTAfT24o6Iz8CCh4n%2Foctc0IUJRp2M3PyPYUoxPrcEdHCcsmBgsPeJDEC6c%2FUNnO8HQIRIUmgz6as%2BFeTK4FfmEPdJj4la5%2F5t4B%2FYitRkdCZWCM3SQSglo9nrh3gEvjGZUm7STxRWvTnyzPksHxFpX0De0ghvdN9m2TCc%2FDcBGkA8gjQE%2BnB1FW0M%2F3J3wkixLNF6S9E5iq80lqJE5dRK8CU6iXyFg7X5Z9xmqafs8FscnKTyYelr8yAnA%2BrtO7fHmzS59stw8bo%2BfWo3du7NQ571JQ6%2B28iH4R17w69q6ucQNlcXsVNzIZiKbB2ayfUFKnbMf3obsR057THR24rtDvAOD%2BBnQ%2BMLXJtr0GOqUBMAWHH5OvykX96J0%2BsKZLixqfj%2Fn3zi7DdXpm0YrD8JDxGrtRn6wkwiENxaH2R5GcFdcT0i7XPHbqu%2BsxIZaqkoWsdXJMX%2FAzmYUxISHIJIe2oiwf2lPskx%2B9g%2BZ5VwygxqnmNcaplkzqF6s9NJsd5C0EQQMcPNcxO7CfE000XxFC8ZzGYzSxs73JXyhnRnT4FTex7%2BRcklb37yejduw%2Fpfos7fRv&X-Amz-Signature=c93454a43026327ac17a522b3e485e2133ef70a409c906b6d474d21a0ae9fd79&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
