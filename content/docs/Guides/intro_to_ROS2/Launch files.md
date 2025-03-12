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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BZ25DUQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAO9jAjvbZbD0UrtEwVFSyYNtNYGOlAnhWV9TY7PlOtNAiEAl6SgEVqZw9UhXaBiUwCr0FiLhp4hyI%2FHXDkCYIqraagqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyVKOhituM57I4pOircA8ctA9m8WXfVorcx0KNA0ajYKyZEvJMkP0BcskKB%2FNxEHcGx%2BiJoBDm2E8OQ6Gv3UuWfsBnF1ResFc4y1tF0vgLfMKZ8JGb6fqt%2B2jUwvkfwTVBdMsutsu1Utsk9RMcCfEosLSIq6CARZ3yw92hBSLDtc6WHBj8f6W06ARusFzqfriFK%2FLsUQE7mYCw%2BgR4HuasRf448sK2nN0dG1PMBMGsDjEvmKl2GPzxoOEj1zqOWIOOOUApDvRNAzLUVugrE2risEZMalMdUA%2F3d3t7eUnLnW6mUzYyq8kcLViECsu0UY%2FBlSjPzjWgQIq3QD6DiAwFnSpNHc%2FG7pm5zhtETDLx2ZL83nrBPeRe%2FaF%2FyiqiXGu7zCh17ohuvjRduv6%2FQEHzar5XQ0yF%2BOckZMZv%2BXizPvsOL1rD1my%2BJOMVqDmh9e%2F%2FJwcZQDZtUNCZ4Lz4cxazm8QkdjRj4v2gm%2BqwcPhbEadsjWb3ssSfowGOuAqwymbvFcXw1nCc0t8f%2Fw6pBPGiUxW3zZpcPaicsTgVQ9%2BL2vOTdqTvyHajHMS7a1nqdK2JYCh2q8IJW2ZKHOXnduVntsHAbgEdJGK9X6jqN6PqDYBFel37IZxyumMYI%2Fg8zkgx525pdqTNhDrERMNP6w74GOqUBKmn4ywDBWtSnUGoz5KxCmopbCDN3RUJODePi%2F2hz0ODG%2BdSPvs4YIXIzKavaHvUj01dYz682lSFWeyJXqRToc%2Fp1NQEjVNsJvGdxNAMoITFEnEhH2CUJEw6zwEMny172ucAewnHl0A7gnjOqf4AajEPhmhwK%2FicheMplxOzv5JLTv4vBE6RQIkyAViLphSnaRk%2FjsNs0dIjptyC3oVAty53HcVNu&X-Amz-Signature=3b40c99b907eff8356d9307bc03d2c194c1446d6b4d9d57953da49e6783388ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BZ25DUQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAO9jAjvbZbD0UrtEwVFSyYNtNYGOlAnhWV9TY7PlOtNAiEAl6SgEVqZw9UhXaBiUwCr0FiLhp4hyI%2FHXDkCYIqraagqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyVKOhituM57I4pOircA8ctA9m8WXfVorcx0KNA0ajYKyZEvJMkP0BcskKB%2FNxEHcGx%2BiJoBDm2E8OQ6Gv3UuWfsBnF1ResFc4y1tF0vgLfMKZ8JGb6fqt%2B2jUwvkfwTVBdMsutsu1Utsk9RMcCfEosLSIq6CARZ3yw92hBSLDtc6WHBj8f6W06ARusFzqfriFK%2FLsUQE7mYCw%2BgR4HuasRf448sK2nN0dG1PMBMGsDjEvmKl2GPzxoOEj1zqOWIOOOUApDvRNAzLUVugrE2risEZMalMdUA%2F3d3t7eUnLnW6mUzYyq8kcLViECsu0UY%2FBlSjPzjWgQIq3QD6DiAwFnSpNHc%2FG7pm5zhtETDLx2ZL83nrBPeRe%2FaF%2FyiqiXGu7zCh17ohuvjRduv6%2FQEHzar5XQ0yF%2BOckZMZv%2BXizPvsOL1rD1my%2BJOMVqDmh9e%2F%2FJwcZQDZtUNCZ4Lz4cxazm8QkdjRj4v2gm%2BqwcPhbEadsjWb3ssSfowGOuAqwymbvFcXw1nCc0t8f%2Fw6pBPGiUxW3zZpcPaicsTgVQ9%2BL2vOTdqTvyHajHMS7a1nqdK2JYCh2q8IJW2ZKHOXnduVntsHAbgEdJGK9X6jqN6PqDYBFel37IZxyumMYI%2Fg8zkgx525pdqTNhDrERMNP6w74GOqUBKmn4ywDBWtSnUGoz5KxCmopbCDN3RUJODePi%2F2hz0ODG%2BdSPvs4YIXIzKavaHvUj01dYz682lSFWeyJXqRToc%2Fp1NQEjVNsJvGdxNAMoITFEnEhH2CUJEw6zwEMny172ucAewnHl0A7gnjOqf4AajEPhmhwK%2FicheMplxOzv5JLTv4vBE6RQIkyAViLphSnaRk%2FjsNs0dIjptyC3oVAty53HcVNu&X-Amz-Signature=5fcf7eceee4ba52975824c71f78d8cabf62d6610263ebf774300a991f67404a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BZ25DUQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAO9jAjvbZbD0UrtEwVFSyYNtNYGOlAnhWV9TY7PlOtNAiEAl6SgEVqZw9UhXaBiUwCr0FiLhp4hyI%2FHXDkCYIqraagqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyVKOhituM57I4pOircA8ctA9m8WXfVorcx0KNA0ajYKyZEvJMkP0BcskKB%2FNxEHcGx%2BiJoBDm2E8OQ6Gv3UuWfsBnF1ResFc4y1tF0vgLfMKZ8JGb6fqt%2B2jUwvkfwTVBdMsutsu1Utsk9RMcCfEosLSIq6CARZ3yw92hBSLDtc6WHBj8f6W06ARusFzqfriFK%2FLsUQE7mYCw%2BgR4HuasRf448sK2nN0dG1PMBMGsDjEvmKl2GPzxoOEj1zqOWIOOOUApDvRNAzLUVugrE2risEZMalMdUA%2F3d3t7eUnLnW6mUzYyq8kcLViECsu0UY%2FBlSjPzjWgQIq3QD6DiAwFnSpNHc%2FG7pm5zhtETDLx2ZL83nrBPeRe%2FaF%2FyiqiXGu7zCh17ohuvjRduv6%2FQEHzar5XQ0yF%2BOckZMZv%2BXizPvsOL1rD1my%2BJOMVqDmh9e%2F%2FJwcZQDZtUNCZ4Lz4cxazm8QkdjRj4v2gm%2BqwcPhbEadsjWb3ssSfowGOuAqwymbvFcXw1nCc0t8f%2Fw6pBPGiUxW3zZpcPaicsTgVQ9%2BL2vOTdqTvyHajHMS7a1nqdK2JYCh2q8IJW2ZKHOXnduVntsHAbgEdJGK9X6jqN6PqDYBFel37IZxyumMYI%2Fg8zkgx525pdqTNhDrERMNP6w74GOqUBKmn4ywDBWtSnUGoz5KxCmopbCDN3RUJODePi%2F2hz0ODG%2BdSPvs4YIXIzKavaHvUj01dYz682lSFWeyJXqRToc%2Fp1NQEjVNsJvGdxNAMoITFEnEhH2CUJEw6zwEMny172ucAewnHl0A7gnjOqf4AajEPhmhwK%2FicheMplxOzv5JLTv4vBE6RQIkyAViLphSnaRk%2FjsNs0dIjptyC3oVAty53HcVNu&X-Amz-Signature=9353c29c0f959402bf0eb3c1eae1f9d0da201bc032d4faede475175287d90ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
