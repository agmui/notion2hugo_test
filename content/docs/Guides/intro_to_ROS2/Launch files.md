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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCABM44%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDv%2FKW8JnMhlPhPxSyLl%2FAgpHMmsFN%2F4dToB4%2FjHTxE4AIhALXwDtyOMoF%2FMKExSjDCmXlc%2BnZ6UJhZlCssDkdVdTjfKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcdR%2BD97nBAvTCMo4q3AMaOoCPPCbJ5UU9OyVzsN7kM%2BXnCXe%2BkkoIuF7h1fbYdRYxRF6dQhD6fIxuZjkmC6pEsmvt8VvNwPuCs9qQjHvhEBoF2Co04lbwZp0uIKU5wq1hVj4ETPLoa%2BTxrzEqGe6wRSAQmsBmh%2B1UNQ%2B%2B2EjUiQy%2BDYgcpPFhBAznIIwyMLPu43u0hnSwm5YFhPA99DXMOeJxaOiNASsd3rAgIkIsWhJsQbv2kSK2nK5vxvUn3mj4ffCu7WIZo6lbs2k0hUlAZHHM%2Fr3ii%2FbLuffGiQCRhUEhaFpefq4L8ugHusi6%2Fsh3bAKfYqIY%2FgATJwuevi0Q%2Fej3NJ7wdcmkPKO75XQ8PZtwnJjgejZmGCikKi%2BgNIw80%2BIahzA%2FwntGnHAklkHnT%2BDOGWJD2y1kVaTzbPzHUmMe1aPcr0d455yNJ0Trei%2Fid17hm8OwQ1na8xojMAP0mxUFSQHh%2Bpg57oUDvWA647AeI%2Fjsc0Vd8clFo4lgi1R2nVWQ2qaAAP3x5svH%2BbiqYEt1l9zWUsZ1iLYYzzbHMO6MSjsR2VvqSjU%2FnSWAwxMsChocE3OmUuyC40uZRw%2B9%2BKY2h%2FNhalE5ctPjNAaR8Swhjjj82bYGJDOU4AhxW%2F1C%2BypkzLQz9rZEEDCimfi%2BBjqkAUnb4sfegQzq3GadAe464xNLudNwvh88szIAXjFYsYArMql%2BhnCe9PvWyskl3UJ%2BPdyjHMkWYUwGnhIe1YGi3DFP8TNeoBsttrYUeCfI7kLfeJKD8XvFSGwRA2DiS1riy1yvY79CLsl8ZjenmMS99WrBTqD7ws17kOpmCkxjjCdNqoZLL7pJNK2wxAAXkQpG5YC7s4wkTJp3DcGbsXx0tTMshh0r&X-Amz-Signature=29705dd45191599e9b423cd02ee4d4a835a773926232bfcad187688274d0113b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCABM44%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDv%2FKW8JnMhlPhPxSyLl%2FAgpHMmsFN%2F4dToB4%2FjHTxE4AIhALXwDtyOMoF%2FMKExSjDCmXlc%2BnZ6UJhZlCssDkdVdTjfKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcdR%2BD97nBAvTCMo4q3AMaOoCPPCbJ5UU9OyVzsN7kM%2BXnCXe%2BkkoIuF7h1fbYdRYxRF6dQhD6fIxuZjkmC6pEsmvt8VvNwPuCs9qQjHvhEBoF2Co04lbwZp0uIKU5wq1hVj4ETPLoa%2BTxrzEqGe6wRSAQmsBmh%2B1UNQ%2B%2B2EjUiQy%2BDYgcpPFhBAznIIwyMLPu43u0hnSwm5YFhPA99DXMOeJxaOiNASsd3rAgIkIsWhJsQbv2kSK2nK5vxvUn3mj4ffCu7WIZo6lbs2k0hUlAZHHM%2Fr3ii%2FbLuffGiQCRhUEhaFpefq4L8ugHusi6%2Fsh3bAKfYqIY%2FgATJwuevi0Q%2Fej3NJ7wdcmkPKO75XQ8PZtwnJjgejZmGCikKi%2BgNIw80%2BIahzA%2FwntGnHAklkHnT%2BDOGWJD2y1kVaTzbPzHUmMe1aPcr0d455yNJ0Trei%2Fid17hm8OwQ1na8xojMAP0mxUFSQHh%2Bpg57oUDvWA647AeI%2Fjsc0Vd8clFo4lgi1R2nVWQ2qaAAP3x5svH%2BbiqYEt1l9zWUsZ1iLYYzzbHMO6MSjsR2VvqSjU%2FnSWAwxMsChocE3OmUuyC40uZRw%2B9%2BKY2h%2FNhalE5ctPjNAaR8Swhjjj82bYGJDOU4AhxW%2F1C%2BypkzLQz9rZEEDCimfi%2BBjqkAUnb4sfegQzq3GadAe464xNLudNwvh88szIAXjFYsYArMql%2BhnCe9PvWyskl3UJ%2BPdyjHMkWYUwGnhIe1YGi3DFP8TNeoBsttrYUeCfI7kLfeJKD8XvFSGwRA2DiS1riy1yvY79CLsl8ZjenmMS99WrBTqD7ws17kOpmCkxjjCdNqoZLL7pJNK2wxAAXkQpG5YC7s4wkTJp3DcGbsXx0tTMshh0r&X-Amz-Signature=b5e4cac676f7fd735f00340625fd165d4dce22fb1c2b90ac80ef819359578cff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCABM44%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDv%2FKW8JnMhlPhPxSyLl%2FAgpHMmsFN%2F4dToB4%2FjHTxE4AIhALXwDtyOMoF%2FMKExSjDCmXlc%2BnZ6UJhZlCssDkdVdTjfKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcdR%2BD97nBAvTCMo4q3AMaOoCPPCbJ5UU9OyVzsN7kM%2BXnCXe%2BkkoIuF7h1fbYdRYxRF6dQhD6fIxuZjkmC6pEsmvt8VvNwPuCs9qQjHvhEBoF2Co04lbwZp0uIKU5wq1hVj4ETPLoa%2BTxrzEqGe6wRSAQmsBmh%2B1UNQ%2B%2B2EjUiQy%2BDYgcpPFhBAznIIwyMLPu43u0hnSwm5YFhPA99DXMOeJxaOiNASsd3rAgIkIsWhJsQbv2kSK2nK5vxvUn3mj4ffCu7WIZo6lbs2k0hUlAZHHM%2Fr3ii%2FbLuffGiQCRhUEhaFpefq4L8ugHusi6%2Fsh3bAKfYqIY%2FgATJwuevi0Q%2Fej3NJ7wdcmkPKO75XQ8PZtwnJjgejZmGCikKi%2BgNIw80%2BIahzA%2FwntGnHAklkHnT%2BDOGWJD2y1kVaTzbPzHUmMe1aPcr0d455yNJ0Trei%2Fid17hm8OwQ1na8xojMAP0mxUFSQHh%2Bpg57oUDvWA647AeI%2Fjsc0Vd8clFo4lgi1R2nVWQ2qaAAP3x5svH%2BbiqYEt1l9zWUsZ1iLYYzzbHMO6MSjsR2VvqSjU%2FnSWAwxMsChocE3OmUuyC40uZRw%2B9%2BKY2h%2FNhalE5ctPjNAaR8Swhjjj82bYGJDOU4AhxW%2F1C%2BypkzLQz9rZEEDCimfi%2BBjqkAUnb4sfegQzq3GadAe464xNLudNwvh88szIAXjFYsYArMql%2BhnCe9PvWyskl3UJ%2BPdyjHMkWYUwGnhIe1YGi3DFP8TNeoBsttrYUeCfI7kLfeJKD8XvFSGwRA2DiS1riy1yvY79CLsl8ZjenmMS99WrBTqD7ws17kOpmCkxjjCdNqoZLL7pJNK2wxAAXkQpG5YC7s4wkTJp3DcGbsXx0tTMshh0r&X-Amz-Signature=34184e57bcf2c7572571563ec46c31690148245afee76f21b6648634522648a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
