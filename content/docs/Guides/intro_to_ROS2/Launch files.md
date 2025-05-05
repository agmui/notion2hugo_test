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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3P2VK25%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3M7CCKSQCzwd0hro6jhsbHQHjesxc%2Bb6m11c8xGG%2B7gIgMj5NAlIPTcOJ%2Fo1likvTqKtAW92XnfFeHDFY0C3bI%2FQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMEVKLgh9drpjrEHkSrcA1obmgKG%2BzPK9jJkmnTICM0CaQsAlBwpMekBeDmFHpizmYmuG%2BnWd9v7ZH4Lr6lz1nA5i%2BaGLYC9PKgHEyndMjT6TTEv7IsGFQN27MriAWfuyu%2BgGnR7Nge5Y7eD1lQ%2BQMIq%2ByQoBsqkBwEJws305s5f3nAzvMCeAr2X9X0NV22rFCi%2Fch7vgyDj%2FX4AKPa%2BLpxDWXcRzpcZ7YjhSTdb0%2FZyPTB2F%2FA8lLA%2BOQ1tat%2BzlszUcoqRtDE5t6HcsUjjrelLlchVcx0Uup3oZ3rhwDu3znl145aiKxGNGgUUQEirHkG%2F%2FjwhNaYr%2FZJR%2FatG3NANSBvNLWmmnPPWx6aE5QJT3ibmpt2mWDMkG9L%2FW7iKY3DBJRtkJfEio8JDxljbFMXDsKhFMLOUZ5FYfD%2FT9Py8PNA4i33Z8wl46yKjRslRLqX4zNjyGZ7Eoyyzj2B7orNgPYFdaGYNPK%2BZN%2FYRoFPlsFLZ5wvJCKNly8tFCXINqV%2FbhDJH0G5r6fPUJQ0qTeIYbJII9ng%2FZL137chSUgAl0GxO7PSxBFXnxV4lcETXz30%2BokRPduF6aLhsCNsmF43vyKtnc%2B%2FDGVuD7Ahfp65RWjur72TS4TmRIoCWonSOyegqbWp7YnccBDLUMJuy5MAGOqUBkC8Q8tte7Kp1hxoXbRyD8NDnCGFaSvQwT2ExOGWz4VAr1BAj2ncftO%2BGc5rtWGAmmst%2FQcyt%2BRQTZ70pZk%2FZ8MtnpJkfPTAlBzEZYAQL%2F0CAi0P%2BEeaW8WmLnykhwv1I%2BjKKOkeF08rwnbpA1AksAGVMjz3AQJllYk98jBptt8PczT2mTcxUSalERiL5LnJ9re6IDRC78igwO8dKB31CoqUkw89K&X-Amz-Signature=a6986614bddb068c53e24baccb82c626805c7a5fe9510b2bef27a5bbe2050f87&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3P2VK25%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3M7CCKSQCzwd0hro6jhsbHQHjesxc%2Bb6m11c8xGG%2B7gIgMj5NAlIPTcOJ%2Fo1likvTqKtAW92XnfFeHDFY0C3bI%2FQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMEVKLgh9drpjrEHkSrcA1obmgKG%2BzPK9jJkmnTICM0CaQsAlBwpMekBeDmFHpizmYmuG%2BnWd9v7ZH4Lr6lz1nA5i%2BaGLYC9PKgHEyndMjT6TTEv7IsGFQN27MriAWfuyu%2BgGnR7Nge5Y7eD1lQ%2BQMIq%2ByQoBsqkBwEJws305s5f3nAzvMCeAr2X9X0NV22rFCi%2Fch7vgyDj%2FX4AKPa%2BLpxDWXcRzpcZ7YjhSTdb0%2FZyPTB2F%2FA8lLA%2BOQ1tat%2BzlszUcoqRtDE5t6HcsUjjrelLlchVcx0Uup3oZ3rhwDu3znl145aiKxGNGgUUQEirHkG%2F%2FjwhNaYr%2FZJR%2FatG3NANSBvNLWmmnPPWx6aE5QJT3ibmpt2mWDMkG9L%2FW7iKY3DBJRtkJfEio8JDxljbFMXDsKhFMLOUZ5FYfD%2FT9Py8PNA4i33Z8wl46yKjRslRLqX4zNjyGZ7Eoyyzj2B7orNgPYFdaGYNPK%2BZN%2FYRoFPlsFLZ5wvJCKNly8tFCXINqV%2FbhDJH0G5r6fPUJQ0qTeIYbJII9ng%2FZL137chSUgAl0GxO7PSxBFXnxV4lcETXz30%2BokRPduF6aLhsCNsmF43vyKtnc%2B%2FDGVuD7Ahfp65RWjur72TS4TmRIoCWonSOyegqbWp7YnccBDLUMJuy5MAGOqUBkC8Q8tte7Kp1hxoXbRyD8NDnCGFaSvQwT2ExOGWz4VAr1BAj2ncftO%2BGc5rtWGAmmst%2FQcyt%2BRQTZ70pZk%2FZ8MtnpJkfPTAlBzEZYAQL%2F0CAi0P%2BEeaW8WmLnykhwv1I%2BjKKOkeF08rwnbpA1AksAGVMjz3AQJllYk98jBptt8PczT2mTcxUSalERiL5LnJ9re6IDRC78igwO8dKB31CoqUkw89K&X-Amz-Signature=42fe31b2db853bcf6f0ac42b3a696c9fe88666e30566d834e8fdf8bb3be73ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3P2VK25%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3M7CCKSQCzwd0hro6jhsbHQHjesxc%2Bb6m11c8xGG%2B7gIgMj5NAlIPTcOJ%2Fo1likvTqKtAW92XnfFeHDFY0C3bI%2FQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMEVKLgh9drpjrEHkSrcA1obmgKG%2BzPK9jJkmnTICM0CaQsAlBwpMekBeDmFHpizmYmuG%2BnWd9v7ZH4Lr6lz1nA5i%2BaGLYC9PKgHEyndMjT6TTEv7IsGFQN27MriAWfuyu%2BgGnR7Nge5Y7eD1lQ%2BQMIq%2ByQoBsqkBwEJws305s5f3nAzvMCeAr2X9X0NV22rFCi%2Fch7vgyDj%2FX4AKPa%2BLpxDWXcRzpcZ7YjhSTdb0%2FZyPTB2F%2FA8lLA%2BOQ1tat%2BzlszUcoqRtDE5t6HcsUjjrelLlchVcx0Uup3oZ3rhwDu3znl145aiKxGNGgUUQEirHkG%2F%2FjwhNaYr%2FZJR%2FatG3NANSBvNLWmmnPPWx6aE5QJT3ibmpt2mWDMkG9L%2FW7iKY3DBJRtkJfEio8JDxljbFMXDsKhFMLOUZ5FYfD%2FT9Py8PNA4i33Z8wl46yKjRslRLqX4zNjyGZ7Eoyyzj2B7orNgPYFdaGYNPK%2BZN%2FYRoFPlsFLZ5wvJCKNly8tFCXINqV%2FbhDJH0G5r6fPUJQ0qTeIYbJII9ng%2FZL137chSUgAl0GxO7PSxBFXnxV4lcETXz30%2BokRPduF6aLhsCNsmF43vyKtnc%2B%2FDGVuD7Ahfp65RWjur72TS4TmRIoCWonSOyegqbWp7YnccBDLUMJuy5MAGOqUBkC8Q8tte7Kp1hxoXbRyD8NDnCGFaSvQwT2ExOGWz4VAr1BAj2ncftO%2BGc5rtWGAmmst%2FQcyt%2BRQTZ70pZk%2FZ8MtnpJkfPTAlBzEZYAQL%2F0CAi0P%2BEeaW8WmLnykhwv1I%2BjKKOkeF08rwnbpA1AksAGVMjz3AQJllYk98jBptt8PczT2mTcxUSalERiL5LnJ9re6IDRC78igwO8dKB31CoqUkw89K&X-Amz-Signature=9314073f180bd1cd7ac10695e44c9766ad88638aaa55f422e5aad067f8980811&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
