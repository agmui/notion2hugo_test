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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXLAZT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC7uZ3hrZKS51gbcrl8YQEDgQcvrCmPourZhAaNCxpFEQIhALg7MBtIAWHQouNlWJvmHEu%2FUf6Sjcw9jqm08LhLqKF8Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxRiyoHZ8Q1%2Bf5hIcgq3ANjqqSDa2fGFXbU9yRK7gPgyfUTxd8jKrwHUTZbI%2F8UuF%2FZyTQCXAvUzaomc6eR7ch%2BoOcA2mm02kxqQCn5CAe19O00VnKoKhq9KFRv3uRUZgyQOQ4bGsyag7Gk66%2BT%2F36a2fZkK75yEkvFhiPAiJ7VvkKAbZDUdua5yy663CTqH38D%2Bd1OMRAq%2BwWM69u96XEztYk%2BhGkQp76fk8un4oZ7US%2BbWCG8W3XlEy%2B6nrbU0KEkoep18m0CKE2bhXzTvUGAyxBa1M8%2FA4ufD45x9cMkgBZgOE2lCyyetujigGXJwrJjMjS2gbzeSsq1bx%2F5CYrumPPO6VHTahCsOTsWbW7ZFXzYM8z5L4EJTkXLrvlq36snE1c78kdt9Ot0y8i39xSrZAkBvjbksV5MtS2PHT1RLl04CKMLlCyS6w6kvM6smp9GR%2BCcadCTk%2FUFU2kPz3OMp2GhkCCc9SVYv1DoaLo6SOFr7p3z3N3Ju69MJFxQVvBGtPeLEYnoz%2B2263aPb3fNvahk1mSSZYVCk6DJ4LABI%2BrNuvAb491QdxLYD8xYBhVfal15I2stjhfmfD15T30JQb7gcbbslJsl%2B6uJoJOqsa%2F9hSNNtxR0t%2BgiIihfMtbAedXovYFUkjds0zDqut7ABjqkAXEDEKBXFcKUmzjtE7TBAKXgnxYNrg8qakaz9V43taq%2BASfHOs1FVpI8mpj7yyjUlUGJcxQjSJG3p6lHYc18Wo5%2FPIADAgs34NYsMD%2FBtpxGZhQMZSUXHEydljZRHDqV6nm%2Fk6qIAsMgVi9YnGE82NXl%2FxWlYJxzsQA0XceTvXxtnv4VYfjF43%2BYzJhUi9bMczitbIviFcjBM9981jGFHTyuowRr&X-Amz-Signature=026c2eed773cb9688b16e4948a98edd7e1b73e34751012c7ea3e48f3bf0f6e16&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXLAZT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC7uZ3hrZKS51gbcrl8YQEDgQcvrCmPourZhAaNCxpFEQIhALg7MBtIAWHQouNlWJvmHEu%2FUf6Sjcw9jqm08LhLqKF8Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxRiyoHZ8Q1%2Bf5hIcgq3ANjqqSDa2fGFXbU9yRK7gPgyfUTxd8jKrwHUTZbI%2F8UuF%2FZyTQCXAvUzaomc6eR7ch%2BoOcA2mm02kxqQCn5CAe19O00VnKoKhq9KFRv3uRUZgyQOQ4bGsyag7Gk66%2BT%2F36a2fZkK75yEkvFhiPAiJ7VvkKAbZDUdua5yy663CTqH38D%2Bd1OMRAq%2BwWM69u96XEztYk%2BhGkQp76fk8un4oZ7US%2BbWCG8W3XlEy%2B6nrbU0KEkoep18m0CKE2bhXzTvUGAyxBa1M8%2FA4ufD45x9cMkgBZgOE2lCyyetujigGXJwrJjMjS2gbzeSsq1bx%2F5CYrumPPO6VHTahCsOTsWbW7ZFXzYM8z5L4EJTkXLrvlq36snE1c78kdt9Ot0y8i39xSrZAkBvjbksV5MtS2PHT1RLl04CKMLlCyS6w6kvM6smp9GR%2BCcadCTk%2FUFU2kPz3OMp2GhkCCc9SVYv1DoaLo6SOFr7p3z3N3Ju69MJFxQVvBGtPeLEYnoz%2B2263aPb3fNvahk1mSSZYVCk6DJ4LABI%2BrNuvAb491QdxLYD8xYBhVfal15I2stjhfmfD15T30JQb7gcbbslJsl%2B6uJoJOqsa%2F9hSNNtxR0t%2BgiIihfMtbAedXovYFUkjds0zDqut7ABjqkAXEDEKBXFcKUmzjtE7TBAKXgnxYNrg8qakaz9V43taq%2BASfHOs1FVpI8mpj7yyjUlUGJcxQjSJG3p6lHYc18Wo5%2FPIADAgs34NYsMD%2FBtpxGZhQMZSUXHEydljZRHDqV6nm%2Fk6qIAsMgVi9YnGE82NXl%2FxWlYJxzsQA0XceTvXxtnv4VYfjF43%2BYzJhUi9bMczitbIviFcjBM9981jGFHTyuowRr&X-Amz-Signature=4c60f346f39869efbb7b1e426436629c499cc5a4fe6f2634ef8c13f069fbb8f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXLAZT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC7uZ3hrZKS51gbcrl8YQEDgQcvrCmPourZhAaNCxpFEQIhALg7MBtIAWHQouNlWJvmHEu%2FUf6Sjcw9jqm08LhLqKF8Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxRiyoHZ8Q1%2Bf5hIcgq3ANjqqSDa2fGFXbU9yRK7gPgyfUTxd8jKrwHUTZbI%2F8UuF%2FZyTQCXAvUzaomc6eR7ch%2BoOcA2mm02kxqQCn5CAe19O00VnKoKhq9KFRv3uRUZgyQOQ4bGsyag7Gk66%2BT%2F36a2fZkK75yEkvFhiPAiJ7VvkKAbZDUdua5yy663CTqH38D%2Bd1OMRAq%2BwWM69u96XEztYk%2BhGkQp76fk8un4oZ7US%2BbWCG8W3XlEy%2B6nrbU0KEkoep18m0CKE2bhXzTvUGAyxBa1M8%2FA4ufD45x9cMkgBZgOE2lCyyetujigGXJwrJjMjS2gbzeSsq1bx%2F5CYrumPPO6VHTahCsOTsWbW7ZFXzYM8z5L4EJTkXLrvlq36snE1c78kdt9Ot0y8i39xSrZAkBvjbksV5MtS2PHT1RLl04CKMLlCyS6w6kvM6smp9GR%2BCcadCTk%2FUFU2kPz3OMp2GhkCCc9SVYv1DoaLo6SOFr7p3z3N3Ju69MJFxQVvBGtPeLEYnoz%2B2263aPb3fNvahk1mSSZYVCk6DJ4LABI%2BrNuvAb491QdxLYD8xYBhVfal15I2stjhfmfD15T30JQb7gcbbslJsl%2B6uJoJOqsa%2F9hSNNtxR0t%2BgiIihfMtbAedXovYFUkjds0zDqut7ABjqkAXEDEKBXFcKUmzjtE7TBAKXgnxYNrg8qakaz9V43taq%2BASfHOs1FVpI8mpj7yyjUlUGJcxQjSJG3p6lHYc18Wo5%2FPIADAgs34NYsMD%2FBtpxGZhQMZSUXHEydljZRHDqV6nm%2Fk6qIAsMgVi9YnGE82NXl%2FxWlYJxzsQA0XceTvXxtnv4VYfjF43%2BYzJhUi9bMczitbIviFcjBM9981jGFHTyuowRr&X-Amz-Signature=2c45cc218a371894c1b04285e0a46399dc5069539eac7aea664d0f2829c20a33&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
