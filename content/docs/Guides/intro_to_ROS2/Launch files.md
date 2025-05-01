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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2KIQLCQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCvfC5C0rDaBPhHFtW1i6LNkbAlxk4mgZglZ6HTOcs0xwIgVabtdDuv7O6ljzejZ9dCCiBPAf7G9yhLbZp%2F181jyvYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJD9iq8%2BtPrdimpP%2BCrcAxANerON%2Fyxls9QT42uAkaz4X4Gr7JBYLQJvjNfZTpKysFv0BKfXah3WZ8PjfBnMJ65PJs%2Flm5kLjkKPQvDYVh3TAvVoZ8gCR6S11udZ7WV2fXglgBZvLyoxrXdJiAFlrHnkM8FFbhZecvo1Xk8pbCZ6yyu6DH7MfPcjVWZX8EPBQx8jwdKem36GvXX7JdZHwbRyfBg6%2F%2FHeA%2BnSdddEqgK2SxiRIxGBkWhQXqRu6UqF0v%2BHofY8c%2F9l%2FI2GB5Ny7r1XUXn0DrIN7KH2kdHZOs02EatVQaisSpTi%2FBTQi6amiLDnkSgE78tsx3422BOap5FhpSisuagABDWI%2BRsAfEXUt3tJqbvMCF%2FK7PYFTKrUAcOrzTI22BumpopLurTrgzkUzP1gY0F%2Fg4K24cECvKD8tGI0f3NMm55l44AG%2BCTxEq8zBT8Rx2geOXsrI5W9mre%2FiA7EEmPhW%2BfWpA7xHbJVbOfCcXuStkv84Xf4CgPiFr9RmTjvMt%2FEJetGES9cpvu6GFpOZM6DnmDpaUk6ti8fvVlT2h07%2FoIk1eGOmdN2ydLACGfRKbSp%2BYxccFU778yDcXW7DqLMRv6PUSr7TMAgE3nc4v6g1ObUKzIRGXcGBkUnnTdKs7RlBFfgMOqdzcAGOqUBcpXEOJYLyBJDRHGSv6g7IVu99xKAnQ0J%2BJ2%2BQxaftaeMVns0rLbVp0%2BndkjfkaeI4YO4GfY7mEdEBfs%2FDvmko9q4E1%2F8rGZVkafwiikrpLzoHJk9PrmjXjxPelcSkfWXNf1K%2BjxG4Rp5TZO5D3CD4hm8b76COfi3GeqSC%2BayPAfYjiwvcKBEWEqbW8SgmNUT7UlqJR5Eg%2BYEQ3VvFEsSN1qfDDMG&X-Amz-Signature=27a192b74d4306d68763b2cfad03c189c76a59093e184f05284d46175476d7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2KIQLCQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCvfC5C0rDaBPhHFtW1i6LNkbAlxk4mgZglZ6HTOcs0xwIgVabtdDuv7O6ljzejZ9dCCiBPAf7G9yhLbZp%2F181jyvYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJD9iq8%2BtPrdimpP%2BCrcAxANerON%2Fyxls9QT42uAkaz4X4Gr7JBYLQJvjNfZTpKysFv0BKfXah3WZ8PjfBnMJ65PJs%2Flm5kLjkKPQvDYVh3TAvVoZ8gCR6S11udZ7WV2fXglgBZvLyoxrXdJiAFlrHnkM8FFbhZecvo1Xk8pbCZ6yyu6DH7MfPcjVWZX8EPBQx8jwdKem36GvXX7JdZHwbRyfBg6%2F%2FHeA%2BnSdddEqgK2SxiRIxGBkWhQXqRu6UqF0v%2BHofY8c%2F9l%2FI2GB5Ny7r1XUXn0DrIN7KH2kdHZOs02EatVQaisSpTi%2FBTQi6amiLDnkSgE78tsx3422BOap5FhpSisuagABDWI%2BRsAfEXUt3tJqbvMCF%2FK7PYFTKrUAcOrzTI22BumpopLurTrgzkUzP1gY0F%2Fg4K24cECvKD8tGI0f3NMm55l44AG%2BCTxEq8zBT8Rx2geOXsrI5W9mre%2FiA7EEmPhW%2BfWpA7xHbJVbOfCcXuStkv84Xf4CgPiFr9RmTjvMt%2FEJetGES9cpvu6GFpOZM6DnmDpaUk6ti8fvVlT2h07%2FoIk1eGOmdN2ydLACGfRKbSp%2BYxccFU778yDcXW7DqLMRv6PUSr7TMAgE3nc4v6g1ObUKzIRGXcGBkUnnTdKs7RlBFfgMOqdzcAGOqUBcpXEOJYLyBJDRHGSv6g7IVu99xKAnQ0J%2BJ2%2BQxaftaeMVns0rLbVp0%2BndkjfkaeI4YO4GfY7mEdEBfs%2FDvmko9q4E1%2F8rGZVkafwiikrpLzoHJk9PrmjXjxPelcSkfWXNf1K%2BjxG4Rp5TZO5D3CD4hm8b76COfi3GeqSC%2BayPAfYjiwvcKBEWEqbW8SgmNUT7UlqJR5Eg%2BYEQ3VvFEsSN1qfDDMG&X-Amz-Signature=29725aa954b7e127cbcfc2a3f18f95557cead5a0f7cfac20221e618edec82161&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2KIQLCQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCvfC5C0rDaBPhHFtW1i6LNkbAlxk4mgZglZ6HTOcs0xwIgVabtdDuv7O6ljzejZ9dCCiBPAf7G9yhLbZp%2F181jyvYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJD9iq8%2BtPrdimpP%2BCrcAxANerON%2Fyxls9QT42uAkaz4X4Gr7JBYLQJvjNfZTpKysFv0BKfXah3WZ8PjfBnMJ65PJs%2Flm5kLjkKPQvDYVh3TAvVoZ8gCR6S11udZ7WV2fXglgBZvLyoxrXdJiAFlrHnkM8FFbhZecvo1Xk8pbCZ6yyu6DH7MfPcjVWZX8EPBQx8jwdKem36GvXX7JdZHwbRyfBg6%2F%2FHeA%2BnSdddEqgK2SxiRIxGBkWhQXqRu6UqF0v%2BHofY8c%2F9l%2FI2GB5Ny7r1XUXn0DrIN7KH2kdHZOs02EatVQaisSpTi%2FBTQi6amiLDnkSgE78tsx3422BOap5FhpSisuagABDWI%2BRsAfEXUt3tJqbvMCF%2FK7PYFTKrUAcOrzTI22BumpopLurTrgzkUzP1gY0F%2Fg4K24cECvKD8tGI0f3NMm55l44AG%2BCTxEq8zBT8Rx2geOXsrI5W9mre%2FiA7EEmPhW%2BfWpA7xHbJVbOfCcXuStkv84Xf4CgPiFr9RmTjvMt%2FEJetGES9cpvu6GFpOZM6DnmDpaUk6ti8fvVlT2h07%2FoIk1eGOmdN2ydLACGfRKbSp%2BYxccFU778yDcXW7DqLMRv6PUSr7TMAgE3nc4v6g1ObUKzIRGXcGBkUnnTdKs7RlBFfgMOqdzcAGOqUBcpXEOJYLyBJDRHGSv6g7IVu99xKAnQ0J%2BJ2%2BQxaftaeMVns0rLbVp0%2BndkjfkaeI4YO4GfY7mEdEBfs%2FDvmko9q4E1%2F8rGZVkafwiikrpLzoHJk9PrmjXjxPelcSkfWXNf1K%2BjxG4Rp5TZO5D3CD4hm8b76COfi3GeqSC%2BayPAfYjiwvcKBEWEqbW8SgmNUT7UlqJR5Eg%2BYEQ3VvFEsSN1qfDDMG&X-Amz-Signature=59b573db24019747375f2ae50b90677a70b99587dd28eded60dfa686f7675f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
