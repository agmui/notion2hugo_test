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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGHSJ3A%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXqB4sySrdOP7nTuvvlvKCHw8oXX4kIBcDSucdg46ZgAiEA42b32xdQgWZkDDXZOET3Ev9NTek4b5eBdcer49BSh2Iq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB1HQ6kgfzXnYR7iwCrcA7ypZ4pF2g%2BaVSLWnI3mpJ4FhbeO%2BQhnXEw0osUo6QJ3itJxRdejyWnSDqaFTGNhux95vlkQ%2FAl2UxR70idUPdWjT2iL1hnG9DVLef0eLwtAbzzKqGT%2BzqeMKAvvwBQ6t7u047Ayd8MHARq9yrIK3P21vyJNzOm7Q4YUk38l1HfluBbYYUNSmpQ5avFCPfgXt34ZlG8XTQw1Ykmct6jPqmKJHbieg3dfZz0i%2FeTx6I6biB2%2Bz7qGkEjWJTEUAZmRORQ%2FqyKEnjmamqit%2FhEMcv3LwK4gRrCP2Wrm4k1Jf3vyj4wO%2BTYm%2FeXeRCOAznWVIS0QThG6JsW%2BHNqIZT9CgXZHMkD5bvBvZhwNBOtcrGTkHw7gBK6bS5uWlVg761aRWG%2BMhVgoweymyZo4Katuhv0kz%2F%2FN%2Fh%2BpikX6zeAvjIiGFMZJ4p5y4CKqVdHBKOiMw69zySycOaBx93E6VpNC864yY5LsH%2Fsy1WXoFq1dkXz%2F%2ByivA36i23L2oFqmNH3J0I8x6Ihg6pfPQ8Hw6%2BVEDATtqFrfsFGyvYaK%2FfSizi7FkjHSbCVKTWjgQ55K5E7M8%2BawxIqGLLyh7FIIv6u6rL7eeQdzVH9Q%2FpYAwkPsq1eM8m%2BkIDheKKYehCqZMNGN174GOqUBBjsy0UsUlMdxhURAEMe%2FIZka8bvlsYaiyfiTqEowdfhE5S5tGB9CjDCrBx8c%2B2X3cLfMYUNfIraIFH%2BUFI290%2FnKsNyBLUGKw7z2MzgmMkfFlsEblcnZprsIeeryAmsbCkdmBFCKMDlj6lSDslCnHOMow2uWL9yeuB0O9zPE7HaMtJi4JhuM5kKA7l%2FJkCmnfZKMSsSm0PUOktFgFt%2FUi4Eyn1nt&X-Amz-Signature=b4833e8bac7f75b17d98d660181f9ca18340f09056023c9bd323ced525a8c9b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGHSJ3A%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXqB4sySrdOP7nTuvvlvKCHw8oXX4kIBcDSucdg46ZgAiEA42b32xdQgWZkDDXZOET3Ev9NTek4b5eBdcer49BSh2Iq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB1HQ6kgfzXnYR7iwCrcA7ypZ4pF2g%2BaVSLWnI3mpJ4FhbeO%2BQhnXEw0osUo6QJ3itJxRdejyWnSDqaFTGNhux95vlkQ%2FAl2UxR70idUPdWjT2iL1hnG9DVLef0eLwtAbzzKqGT%2BzqeMKAvvwBQ6t7u047Ayd8MHARq9yrIK3P21vyJNzOm7Q4YUk38l1HfluBbYYUNSmpQ5avFCPfgXt34ZlG8XTQw1Ykmct6jPqmKJHbieg3dfZz0i%2FeTx6I6biB2%2Bz7qGkEjWJTEUAZmRORQ%2FqyKEnjmamqit%2FhEMcv3LwK4gRrCP2Wrm4k1Jf3vyj4wO%2BTYm%2FeXeRCOAznWVIS0QThG6JsW%2BHNqIZT9CgXZHMkD5bvBvZhwNBOtcrGTkHw7gBK6bS5uWlVg761aRWG%2BMhVgoweymyZo4Katuhv0kz%2F%2FN%2Fh%2BpikX6zeAvjIiGFMZJ4p5y4CKqVdHBKOiMw69zySycOaBx93E6VpNC864yY5LsH%2Fsy1WXoFq1dkXz%2F%2ByivA36i23L2oFqmNH3J0I8x6Ihg6pfPQ8Hw6%2BVEDATtqFrfsFGyvYaK%2FfSizi7FkjHSbCVKTWjgQ55K5E7M8%2BawxIqGLLyh7FIIv6u6rL7eeQdzVH9Q%2FpYAwkPsq1eM8m%2BkIDheKKYehCqZMNGN174GOqUBBjsy0UsUlMdxhURAEMe%2FIZka8bvlsYaiyfiTqEowdfhE5S5tGB9CjDCrBx8c%2B2X3cLfMYUNfIraIFH%2BUFI290%2FnKsNyBLUGKw7z2MzgmMkfFlsEblcnZprsIeeryAmsbCkdmBFCKMDlj6lSDslCnHOMow2uWL9yeuB0O9zPE7HaMtJi4JhuM5kKA7l%2FJkCmnfZKMSsSm0PUOktFgFt%2FUi4Eyn1nt&X-Amz-Signature=ce3bad7044af0646cd282198237c04673655ed2157594e822fd336272c114e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGHSJ3A%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXqB4sySrdOP7nTuvvlvKCHw8oXX4kIBcDSucdg46ZgAiEA42b32xdQgWZkDDXZOET3Ev9NTek4b5eBdcer49BSh2Iq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB1HQ6kgfzXnYR7iwCrcA7ypZ4pF2g%2BaVSLWnI3mpJ4FhbeO%2BQhnXEw0osUo6QJ3itJxRdejyWnSDqaFTGNhux95vlkQ%2FAl2UxR70idUPdWjT2iL1hnG9DVLef0eLwtAbzzKqGT%2BzqeMKAvvwBQ6t7u047Ayd8MHARq9yrIK3P21vyJNzOm7Q4YUk38l1HfluBbYYUNSmpQ5avFCPfgXt34ZlG8XTQw1Ykmct6jPqmKJHbieg3dfZz0i%2FeTx6I6biB2%2Bz7qGkEjWJTEUAZmRORQ%2FqyKEnjmamqit%2FhEMcv3LwK4gRrCP2Wrm4k1Jf3vyj4wO%2BTYm%2FeXeRCOAznWVIS0QThG6JsW%2BHNqIZT9CgXZHMkD5bvBvZhwNBOtcrGTkHw7gBK6bS5uWlVg761aRWG%2BMhVgoweymyZo4Katuhv0kz%2F%2FN%2Fh%2BpikX6zeAvjIiGFMZJ4p5y4CKqVdHBKOiMw69zySycOaBx93E6VpNC864yY5LsH%2Fsy1WXoFq1dkXz%2F%2ByivA36i23L2oFqmNH3J0I8x6Ihg6pfPQ8Hw6%2BVEDATtqFrfsFGyvYaK%2FfSizi7FkjHSbCVKTWjgQ55K5E7M8%2BawxIqGLLyh7FIIv6u6rL7eeQdzVH9Q%2FpYAwkPsq1eM8m%2BkIDheKKYehCqZMNGN174GOqUBBjsy0UsUlMdxhURAEMe%2FIZka8bvlsYaiyfiTqEowdfhE5S5tGB9CjDCrBx8c%2B2X3cLfMYUNfIraIFH%2BUFI290%2FnKsNyBLUGKw7z2MzgmMkfFlsEblcnZprsIeeryAmsbCkdmBFCKMDlj6lSDslCnHOMow2uWL9yeuB0O9zPE7HaMtJi4JhuM5kKA7l%2FJkCmnfZKMSsSm0PUOktFgFt%2FUi4Eyn1nt&X-Amz-Signature=f0568adf34f8f60464c5b512cd785e7d2631f19edfd32e0f20b6c78887692e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
