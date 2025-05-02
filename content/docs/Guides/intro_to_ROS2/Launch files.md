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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHHTGL2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCpVh%2Bs%2FxhqGuP4e9S1dtDaLQLtv14A%2BGaPgj8aiARG%2FAIgX%2FxMXkNACCOc9opo3vGJoWs6gWJ%2BTENrEsAQXZfrrlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTJKbuPs6MGTjsM6SrcA7wKOtrQw0lO9uabCvmSxOAQuopq8IH3Y2lLT8%2Bw6HQJ0%2Bgc8%2FVejGqisGI%2FxkLVTfhoZiRhnIIrH%2BxsK8%2B5Ezyftu7cKrqWQL8DB2%2BijReDvJa5EVIIHdswiKT%2B8v%2BG0JgFUtGc6HIqjhRekPiW0K7zUme5wXQk7K4dC2srLLEMHyZmkT2FjBsQkdGuVTTCLggMzz5ZrffJ0LtgZEGvDEr%2BWXDzQ6PS%2FmA9885RFgGrL9n50rQt57RUxsJPxbE9auPYw5RRPWJ50yfuFI44BS3AIffYWq7hZMGmuirN05XqZ9sfd2FRSnpsLNUEyKD8%2F2ZHPz9YAqyUJWzm28M4QcepbhaXHEYFdtI08q2fUfRUxSFq1RpJv6JnsKFiD4pYF0xsFvA6CeaW4tlW1C6Zq39r95bXdyqj7zrm6JxJVFxZ9D5CbbZOIhAi6HGpYt%2F6dUueArEC4ZRocwqS6bJRnWuepHxdKm%2FIp6nqesm2fRnNfDMTdMbM%2BBMHUb0uZiEp5r7B1rz22RJHyXAKctPqO3xagXl%2BDPyjYkseR3PB8BbsvshzEFxmioZKh5NhlQZeHmz1N%2FOjosaYC4RnF4KAGR6K9KHjMRlGAO0kmCbdRaPzqJeBND1eJCZGApVGMMSp0sAGOqUBtb6LmzH1USez%2FxMuPypNqSGuVafv2mO1bcHdp1Uar8%2BKS86QjWLWL2YWZgqtMDbHtNS6EUHr8iBra6u3lKwj1NYFbA9Y9xbvnjRMAVlg9VEhRx5cg%2BnBKhv%2FMKeXNBXMd8rMYCoP1lzg8uFY88cULwaa%2BneMrJEfqf7iN14xLAg%2BDBQFCEhVzCGztGz8Ug%2FBKpOnhTHCYlXcs1KSYCjdO87e6pOY&X-Amz-Signature=f2e0abdc84777f8a13f9ff3baa546e13d443ed02d812e87fb28c73e1e809f6eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHHTGL2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCpVh%2Bs%2FxhqGuP4e9S1dtDaLQLtv14A%2BGaPgj8aiARG%2FAIgX%2FxMXkNACCOc9opo3vGJoWs6gWJ%2BTENrEsAQXZfrrlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTJKbuPs6MGTjsM6SrcA7wKOtrQw0lO9uabCvmSxOAQuopq8IH3Y2lLT8%2Bw6HQJ0%2Bgc8%2FVejGqisGI%2FxkLVTfhoZiRhnIIrH%2BxsK8%2B5Ezyftu7cKrqWQL8DB2%2BijReDvJa5EVIIHdswiKT%2B8v%2BG0JgFUtGc6HIqjhRekPiW0K7zUme5wXQk7K4dC2srLLEMHyZmkT2FjBsQkdGuVTTCLggMzz5ZrffJ0LtgZEGvDEr%2BWXDzQ6PS%2FmA9885RFgGrL9n50rQt57RUxsJPxbE9auPYw5RRPWJ50yfuFI44BS3AIffYWq7hZMGmuirN05XqZ9sfd2FRSnpsLNUEyKD8%2F2ZHPz9YAqyUJWzm28M4QcepbhaXHEYFdtI08q2fUfRUxSFq1RpJv6JnsKFiD4pYF0xsFvA6CeaW4tlW1C6Zq39r95bXdyqj7zrm6JxJVFxZ9D5CbbZOIhAi6HGpYt%2F6dUueArEC4ZRocwqS6bJRnWuepHxdKm%2FIp6nqesm2fRnNfDMTdMbM%2BBMHUb0uZiEp5r7B1rz22RJHyXAKctPqO3xagXl%2BDPyjYkseR3PB8BbsvshzEFxmioZKh5NhlQZeHmz1N%2FOjosaYC4RnF4KAGR6K9KHjMRlGAO0kmCbdRaPzqJeBND1eJCZGApVGMMSp0sAGOqUBtb6LmzH1USez%2FxMuPypNqSGuVafv2mO1bcHdp1Uar8%2BKS86QjWLWL2YWZgqtMDbHtNS6EUHr8iBra6u3lKwj1NYFbA9Y9xbvnjRMAVlg9VEhRx5cg%2BnBKhv%2FMKeXNBXMd8rMYCoP1lzg8uFY88cULwaa%2BneMrJEfqf7iN14xLAg%2BDBQFCEhVzCGztGz8Ug%2FBKpOnhTHCYlXcs1KSYCjdO87e6pOY&X-Amz-Signature=76ef5818ad6880af3ab829d6762bf68e3e25b8fa39c36281a1692fef1230eea2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHHTGL2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCpVh%2Bs%2FxhqGuP4e9S1dtDaLQLtv14A%2BGaPgj8aiARG%2FAIgX%2FxMXkNACCOc9opo3vGJoWs6gWJ%2BTENrEsAQXZfrrlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTJKbuPs6MGTjsM6SrcA7wKOtrQw0lO9uabCvmSxOAQuopq8IH3Y2lLT8%2Bw6HQJ0%2Bgc8%2FVejGqisGI%2FxkLVTfhoZiRhnIIrH%2BxsK8%2B5Ezyftu7cKrqWQL8DB2%2BijReDvJa5EVIIHdswiKT%2B8v%2BG0JgFUtGc6HIqjhRekPiW0K7zUme5wXQk7K4dC2srLLEMHyZmkT2FjBsQkdGuVTTCLggMzz5ZrffJ0LtgZEGvDEr%2BWXDzQ6PS%2FmA9885RFgGrL9n50rQt57RUxsJPxbE9auPYw5RRPWJ50yfuFI44BS3AIffYWq7hZMGmuirN05XqZ9sfd2FRSnpsLNUEyKD8%2F2ZHPz9YAqyUJWzm28M4QcepbhaXHEYFdtI08q2fUfRUxSFq1RpJv6JnsKFiD4pYF0xsFvA6CeaW4tlW1C6Zq39r95bXdyqj7zrm6JxJVFxZ9D5CbbZOIhAi6HGpYt%2F6dUueArEC4ZRocwqS6bJRnWuepHxdKm%2FIp6nqesm2fRnNfDMTdMbM%2BBMHUb0uZiEp5r7B1rz22RJHyXAKctPqO3xagXl%2BDPyjYkseR3PB8BbsvshzEFxmioZKh5NhlQZeHmz1N%2FOjosaYC4RnF4KAGR6K9KHjMRlGAO0kmCbdRaPzqJeBND1eJCZGApVGMMSp0sAGOqUBtb6LmzH1USez%2FxMuPypNqSGuVafv2mO1bcHdp1Uar8%2BKS86QjWLWL2YWZgqtMDbHtNS6EUHr8iBra6u3lKwj1NYFbA9Y9xbvnjRMAVlg9VEhRx5cg%2BnBKhv%2FMKeXNBXMd8rMYCoP1lzg8uFY88cULwaa%2BneMrJEfqf7iN14xLAg%2BDBQFCEhVzCGztGz8Ug%2FBKpOnhTHCYlXcs1KSYCjdO87e6pOY&X-Amz-Signature=4e9f8914482f5ed51e169be2cbbbb813e4bd9b4cfb462c868d839ba55c1e2702&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
