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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDZD7IXC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFOuXiqRJunhCLYliq4ZLBQx2VbYKj%2BYCEg90HrYfSiCAiEArhaQ%2Fc1ZYtXYyK57cvhaaf6Mhpe798%2BHxuS5GdaJMA8qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFba3JxoBLqqeZJaircA0qn5UpCMVKOZt5xgz8ZIhnePgCuvWIYGiSKKGuvgKal4KYC2Xr8S3IQ4Cr4wWfI7I5pjAi74q2S89aGwRyYzepfdkjLj8BxA1fDagLS1gXgco0yjWKjxkahpNnYFTEn3i52IovBUwtvFTQJTuquX0qPnznTeLgcJv2J2NUKjkhIh6Qfky6KWmQ%2Bh%2F0RF27ePViXGI5AyxFdT0kjYgse3TEE%2BQXGn1j6HQ6dtGde6wHcb00pqEkkU7fTXsQUGOn4PdJBwsiJ1CCWuGZErVzp0nuAFctndH0rshixtutAygh%2BH%2FRY5CUjRUtTw218KZpMP9OooUL2%2FyhV8qePyQ07ExxDWSR9SjrhnX8k7rG2CUcWl%2BC2n2IM0UK7oKNB0Ae7LCCggetQLVwk7dYDgbj3x4WF6KAY4AhxykKKqACsP4DaXAhBZouBsEkL3vy2fciscjehkXHxq1uoRH8FboE1fg65%2FRczLhXIuprlkn%2Fr1tkehIilNXrdCyJGjCmMZ1Fo2zWW53Kqg96bYSmvKqQW7BzfKQ1pzhaCLkpQCpgoBVHOAx07DYKsf3fMHYZ3j5LCORaueUbLzSQC5VjzARV%2FUH3DBse%2FZqR%2Fj7DpwnSKc4XkG9hPZQRmf6xvRc7pMNKvmMMGOqUB8qtj6mF%2FyERoNH7HYtbKk%2BEdZWzEu5zxRSIMM6GSCcgH4D1yuDjudLdRMV2JPVYU0BM7%2BsTGUC%2BT1hQ31YFGHOLOyrFuAZ3SwyKrhjbZU%2BzxPv7rKMY6gsu5%2F3r0iaRyR5YtpvyNYDNRARhea%2FINyVhT%2FY%2FF1g4EIoYM9XHyJeztRLByICWAX3%2Frj23w0vDSAT3ma%2FrWNF6SRBhXP%2Ftun1yI%2Fvq7&X-Amz-Signature=f3f003f1f81e92135791e4507075af9afde9b2620be05b7240debca758542a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDZD7IXC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFOuXiqRJunhCLYliq4ZLBQx2VbYKj%2BYCEg90HrYfSiCAiEArhaQ%2Fc1ZYtXYyK57cvhaaf6Mhpe798%2BHxuS5GdaJMA8qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFba3JxoBLqqeZJaircA0qn5UpCMVKOZt5xgz8ZIhnePgCuvWIYGiSKKGuvgKal4KYC2Xr8S3IQ4Cr4wWfI7I5pjAi74q2S89aGwRyYzepfdkjLj8BxA1fDagLS1gXgco0yjWKjxkahpNnYFTEn3i52IovBUwtvFTQJTuquX0qPnznTeLgcJv2J2NUKjkhIh6Qfky6KWmQ%2Bh%2F0RF27ePViXGI5AyxFdT0kjYgse3TEE%2BQXGn1j6HQ6dtGde6wHcb00pqEkkU7fTXsQUGOn4PdJBwsiJ1CCWuGZErVzp0nuAFctndH0rshixtutAygh%2BH%2FRY5CUjRUtTw218KZpMP9OooUL2%2FyhV8qePyQ07ExxDWSR9SjrhnX8k7rG2CUcWl%2BC2n2IM0UK7oKNB0Ae7LCCggetQLVwk7dYDgbj3x4WF6KAY4AhxykKKqACsP4DaXAhBZouBsEkL3vy2fciscjehkXHxq1uoRH8FboE1fg65%2FRczLhXIuprlkn%2Fr1tkehIilNXrdCyJGjCmMZ1Fo2zWW53Kqg96bYSmvKqQW7BzfKQ1pzhaCLkpQCpgoBVHOAx07DYKsf3fMHYZ3j5LCORaueUbLzSQC5VjzARV%2FUH3DBse%2FZqR%2Fj7DpwnSKc4XkG9hPZQRmf6xvRc7pMNKvmMMGOqUB8qtj6mF%2FyERoNH7HYtbKk%2BEdZWzEu5zxRSIMM6GSCcgH4D1yuDjudLdRMV2JPVYU0BM7%2BsTGUC%2BT1hQ31YFGHOLOyrFuAZ3SwyKrhjbZU%2BzxPv7rKMY6gsu5%2F3r0iaRyR5YtpvyNYDNRARhea%2FINyVhT%2FY%2FF1g4EIoYM9XHyJeztRLByICWAX3%2Frj23w0vDSAT3ma%2FrWNF6SRBhXP%2Ftun1yI%2Fvq7&X-Amz-Signature=c39d73ff4f61d5b3b9a3f67c91382b26c955effe0823817ed4f6a510a3ff971a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDZD7IXC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFOuXiqRJunhCLYliq4ZLBQx2VbYKj%2BYCEg90HrYfSiCAiEArhaQ%2Fc1ZYtXYyK57cvhaaf6Mhpe798%2BHxuS5GdaJMA8qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFba3JxoBLqqeZJaircA0qn5UpCMVKOZt5xgz8ZIhnePgCuvWIYGiSKKGuvgKal4KYC2Xr8S3IQ4Cr4wWfI7I5pjAi74q2S89aGwRyYzepfdkjLj8BxA1fDagLS1gXgco0yjWKjxkahpNnYFTEn3i52IovBUwtvFTQJTuquX0qPnznTeLgcJv2J2NUKjkhIh6Qfky6KWmQ%2Bh%2F0RF27ePViXGI5AyxFdT0kjYgse3TEE%2BQXGn1j6HQ6dtGde6wHcb00pqEkkU7fTXsQUGOn4PdJBwsiJ1CCWuGZErVzp0nuAFctndH0rshixtutAygh%2BH%2FRY5CUjRUtTw218KZpMP9OooUL2%2FyhV8qePyQ07ExxDWSR9SjrhnX8k7rG2CUcWl%2BC2n2IM0UK7oKNB0Ae7LCCggetQLVwk7dYDgbj3x4WF6KAY4AhxykKKqACsP4DaXAhBZouBsEkL3vy2fciscjehkXHxq1uoRH8FboE1fg65%2FRczLhXIuprlkn%2Fr1tkehIilNXrdCyJGjCmMZ1Fo2zWW53Kqg96bYSmvKqQW7BzfKQ1pzhaCLkpQCpgoBVHOAx07DYKsf3fMHYZ3j5LCORaueUbLzSQC5VjzARV%2FUH3DBse%2FZqR%2Fj7DpwnSKc4XkG9hPZQRmf6xvRc7pMNKvmMMGOqUB8qtj6mF%2FyERoNH7HYtbKk%2BEdZWzEu5zxRSIMM6GSCcgH4D1yuDjudLdRMV2JPVYU0BM7%2BsTGUC%2BT1hQ31YFGHOLOyrFuAZ3SwyKrhjbZU%2BzxPv7rKMY6gsu5%2F3r0iaRyR5YtpvyNYDNRARhea%2FINyVhT%2FY%2FF1g4EIoYM9XHyJeztRLByICWAX3%2Frj23w0vDSAT3ma%2FrWNF6SRBhXP%2Ftun1yI%2Fvq7&X-Amz-Signature=86274b90a603156a1740a363f1da9d7d934284ad2f6d47f97f9b91caec3eaca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
