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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKG2JFP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5W7XSqklQDRobEipXeMxFIQXO9dWWBxlOnNqaBYV6bwIhAPF48lBOzU5USTQ7l9PdgYuBqknDejrjva3YReDOoDomKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfISmJwiqJkPuQ3s4q3ANxfdHxgWVVxCgSX7Zaxj88z4fBcm6%2Bqb1YXLMrkKedDXXL%2BI16HlVnZX%2B5SIkg1JpdbTh26Ivl7TDjV4Rhu5%2BR%2FdcMDyVyeLlg6PXtfRcst4zkRBDoDWMK4MMxqUKg8I%2FE2GP7eSZlvYOlFqhftZw6MZScgWKZrYvTu3rJVsMbZ7JCfFzXaJX1MP%2FKf%2BhNaK7MTRGhpRGXIKHAcBmmLvTQQpWV9YbJJ%2Fh7%2Fs8yFJFOxAv3sLw3vdWmeSn4Ey0QYGta6%2Bf8%2BUqkU5qOTuZPlo06AjTW2FQNb9LINeZa8Tk8xnT%2BJ2%2Fvdhv7MGviKPHqYmUlGRtWrOfnj9%2B21nqHB1PG5AtzykXl%2BNDSfU%2FEHxCKFGXZsM0zH4m7z%2FaDi2xp1yYxFIibp%2BFBVGrUyOMwproxymowseot6SGZNTCHd4ZO0gptOv52HD1%2BQZloHxxelu6bv4s00FJznBeqAy0A04yAW9ZozcmNOja9z%2F4RoyTtXF2zgkIZqdTERdLPVKhzR0EQYB4%2Bjcf8jalLUWeM98DEuK7AqYYLUx%2BfyQUbCTRkUbwC35JkYRlZDvJCv%2FLeis0yV%2FPfXg5%2FWPRuGKIKpJGXXDwwjbQDC8bUpP65w1IHyD48rcLsap9urjQpRjCKya69BjqkAeJYAingnvabrhqjvCCVupBtpixGi8JN%2B17IBHJ%2F6TXIrJBLTIgrRmXaWNLgvNjsuujXmTghDiqpy9%2Bps7W4kNrjaqNVT8zoA80pZ53PTVAVicHMODGAF%2FrWyTbdqIiReeVZgHjrRCOEU04Ta3LLsukNU55Xn0p7au1x6ZcE0g%2FZQ%2F5qmKA0FBQZGJiCnSPxu8oxaU7bZqsPaqrykFX9t6ZS7D8O&X-Amz-Signature=cb0291d5344b0c6146bfeee387f31ad363763a0c109b95e976fe0cf09d475b98&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKG2JFP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5W7XSqklQDRobEipXeMxFIQXO9dWWBxlOnNqaBYV6bwIhAPF48lBOzU5USTQ7l9PdgYuBqknDejrjva3YReDOoDomKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfISmJwiqJkPuQ3s4q3ANxfdHxgWVVxCgSX7Zaxj88z4fBcm6%2Bqb1YXLMrkKedDXXL%2BI16HlVnZX%2B5SIkg1JpdbTh26Ivl7TDjV4Rhu5%2BR%2FdcMDyVyeLlg6PXtfRcst4zkRBDoDWMK4MMxqUKg8I%2FE2GP7eSZlvYOlFqhftZw6MZScgWKZrYvTu3rJVsMbZ7JCfFzXaJX1MP%2FKf%2BhNaK7MTRGhpRGXIKHAcBmmLvTQQpWV9YbJJ%2Fh7%2Fs8yFJFOxAv3sLw3vdWmeSn4Ey0QYGta6%2Bf8%2BUqkU5qOTuZPlo06AjTW2FQNb9LINeZa8Tk8xnT%2BJ2%2Fvdhv7MGviKPHqYmUlGRtWrOfnj9%2B21nqHB1PG5AtzykXl%2BNDSfU%2FEHxCKFGXZsM0zH4m7z%2FaDi2xp1yYxFIibp%2BFBVGrUyOMwproxymowseot6SGZNTCHd4ZO0gptOv52HD1%2BQZloHxxelu6bv4s00FJznBeqAy0A04yAW9ZozcmNOja9z%2F4RoyTtXF2zgkIZqdTERdLPVKhzR0EQYB4%2Bjcf8jalLUWeM98DEuK7AqYYLUx%2BfyQUbCTRkUbwC35JkYRlZDvJCv%2FLeis0yV%2FPfXg5%2FWPRuGKIKpJGXXDwwjbQDC8bUpP65w1IHyD48rcLsap9urjQpRjCKya69BjqkAeJYAingnvabrhqjvCCVupBtpixGi8JN%2B17IBHJ%2F6TXIrJBLTIgrRmXaWNLgvNjsuujXmTghDiqpy9%2Bps7W4kNrjaqNVT8zoA80pZ53PTVAVicHMODGAF%2FrWyTbdqIiReeVZgHjrRCOEU04Ta3LLsukNU55Xn0p7au1x6ZcE0g%2FZQ%2F5qmKA0FBQZGJiCnSPxu8oxaU7bZqsPaqrykFX9t6ZS7D8O&X-Amz-Signature=87eb31b2cb8b30933f0f2a752b9aabd8454ae14c01f3a252ec65ff6f1bdcf4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKG2JFP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5W7XSqklQDRobEipXeMxFIQXO9dWWBxlOnNqaBYV6bwIhAPF48lBOzU5USTQ7l9PdgYuBqknDejrjva3YReDOoDomKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfISmJwiqJkPuQ3s4q3ANxfdHxgWVVxCgSX7Zaxj88z4fBcm6%2Bqb1YXLMrkKedDXXL%2BI16HlVnZX%2B5SIkg1JpdbTh26Ivl7TDjV4Rhu5%2BR%2FdcMDyVyeLlg6PXtfRcst4zkRBDoDWMK4MMxqUKg8I%2FE2GP7eSZlvYOlFqhftZw6MZScgWKZrYvTu3rJVsMbZ7JCfFzXaJX1MP%2FKf%2BhNaK7MTRGhpRGXIKHAcBmmLvTQQpWV9YbJJ%2Fh7%2Fs8yFJFOxAv3sLw3vdWmeSn4Ey0QYGta6%2Bf8%2BUqkU5qOTuZPlo06AjTW2FQNb9LINeZa8Tk8xnT%2BJ2%2Fvdhv7MGviKPHqYmUlGRtWrOfnj9%2B21nqHB1PG5AtzykXl%2BNDSfU%2FEHxCKFGXZsM0zH4m7z%2FaDi2xp1yYxFIibp%2BFBVGrUyOMwproxymowseot6SGZNTCHd4ZO0gptOv52HD1%2BQZloHxxelu6bv4s00FJznBeqAy0A04yAW9ZozcmNOja9z%2F4RoyTtXF2zgkIZqdTERdLPVKhzR0EQYB4%2Bjcf8jalLUWeM98DEuK7AqYYLUx%2BfyQUbCTRkUbwC35JkYRlZDvJCv%2FLeis0yV%2FPfXg5%2FWPRuGKIKpJGXXDwwjbQDC8bUpP65w1IHyD48rcLsap9urjQpRjCKya69BjqkAeJYAingnvabrhqjvCCVupBtpixGi8JN%2B17IBHJ%2F6TXIrJBLTIgrRmXaWNLgvNjsuujXmTghDiqpy9%2Bps7W4kNrjaqNVT8zoA80pZ53PTVAVicHMODGAF%2FrWyTbdqIiReeVZgHjrRCOEU04Ta3LLsukNU55Xn0p7au1x6ZcE0g%2FZQ%2F5qmKA0FBQZGJiCnSPxu8oxaU7bZqsPaqrykFX9t6ZS7D8O&X-Amz-Signature=f40cedf55363f5f82c5c5b98531b16508ea80f049515bb03a81d30f1aea056bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
