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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUUK5E2I%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lkctpPUMsDv17wa2eIw46zWbzRxpklPA8fo50dWcUQIhAMYI1s0tRpUE5yUCUPJYsZrh8yk36oiu7F7LpIzLpaAyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2F4slyjK%2FEV1rEO4q3ANOC097oPah3%2Fzh3cg7XokPL1syTkHt7%2FtG%2Bayjzn08U3fmUq9s6lD1YHbFfF%2FSKd2bT71e4s%2BC%2Fo7A02w68hWKn4cYctkV6XuLcYW0eFneOCM5G0YM2qH1divoHsP8mcX5V3MlCLZAYBLQS%2F0hbehCpXE%2BmRJbgkM7hqthG0e1Pzk1Uv42Jexn%2FbKHyR20xFfbU3TlkohTbSO%2BTX1JQMLijRVekqBRJSdrzF%2FcsF%2FmE2oow8%2FgYLwAjYelphLGnhxbbbE9oQ0HmF1LIY%2BRqiKtWDMbKjlXXB28Js3YQT7hDcX1lrbLeJyfoPevtfcY4Wv6Dy8T3D6JaUxsVVG96AG2mbjxFNvVvPWn1XJffVAIzNpAMpz0SZTz2gDXoZ5cRA8LLLDkaeJTyDqAtpdKYerUj%2B1PIh3jvKn6x3GGBc09xT2aeGfymgrTo0olunwWkVPv1nRGfYAlAudSckVnvqamoTwUEncSYH140GkvWDZkRLln6UnxWkAvPcpm60Cf81qXpunIIsTINGDv6KJDQOG1s%2F0eGmen6WoOZfYPHgGWNRPO99KCWQM96QqmARPgL8eZiVb4zBi9o73NdPpNVoaW72tBXc31%2BGmY2n7StPcBQyH14R%2FUXuMmRRe6BjC3k%2FfDBjqkAS%2F27O6K%2FHXd9%2Ff2iX%2Fn3Bp7v5qEOtc%2BjdqjX0aigv73cd3KuImAxnQBDhho5LISKF1dzB3O5hpn3TnJ9YZWNYEvT%2BnuvmIkhkw%2FtWH11z8FjG0X%2BBBSQ8kOKEWZUkf%2FEKZtK7CcEN7eQta454jAG6Eb2MwYKL1vHf%2Bg2yohwLW2RmCVE%2FszA4E%2FtFoKqiDL2tw%2BGAh6qBP7wfzQhXdKPNN7eouc&X-Amz-Signature=ea1ab61ce0eea1920762abfcf6f815669da61d3cbeae7938a22cbc6d6a46bd35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUUK5E2I%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lkctpPUMsDv17wa2eIw46zWbzRxpklPA8fo50dWcUQIhAMYI1s0tRpUE5yUCUPJYsZrh8yk36oiu7F7LpIzLpaAyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2F4slyjK%2FEV1rEO4q3ANOC097oPah3%2Fzh3cg7XokPL1syTkHt7%2FtG%2Bayjzn08U3fmUq9s6lD1YHbFfF%2FSKd2bT71e4s%2BC%2Fo7A02w68hWKn4cYctkV6XuLcYW0eFneOCM5G0YM2qH1divoHsP8mcX5V3MlCLZAYBLQS%2F0hbehCpXE%2BmRJbgkM7hqthG0e1Pzk1Uv42Jexn%2FbKHyR20xFfbU3TlkohTbSO%2BTX1JQMLijRVekqBRJSdrzF%2FcsF%2FmE2oow8%2FgYLwAjYelphLGnhxbbbE9oQ0HmF1LIY%2BRqiKtWDMbKjlXXB28Js3YQT7hDcX1lrbLeJyfoPevtfcY4Wv6Dy8T3D6JaUxsVVG96AG2mbjxFNvVvPWn1XJffVAIzNpAMpz0SZTz2gDXoZ5cRA8LLLDkaeJTyDqAtpdKYerUj%2B1PIh3jvKn6x3GGBc09xT2aeGfymgrTo0olunwWkVPv1nRGfYAlAudSckVnvqamoTwUEncSYH140GkvWDZkRLln6UnxWkAvPcpm60Cf81qXpunIIsTINGDv6KJDQOG1s%2F0eGmen6WoOZfYPHgGWNRPO99KCWQM96QqmARPgL8eZiVb4zBi9o73NdPpNVoaW72tBXc31%2BGmY2n7StPcBQyH14R%2FUXuMmRRe6BjC3k%2FfDBjqkAS%2F27O6K%2FHXd9%2Ff2iX%2Fn3Bp7v5qEOtc%2BjdqjX0aigv73cd3KuImAxnQBDhho5LISKF1dzB3O5hpn3TnJ9YZWNYEvT%2BnuvmIkhkw%2FtWH11z8FjG0X%2BBBSQ8kOKEWZUkf%2FEKZtK7CcEN7eQta454jAG6Eb2MwYKL1vHf%2Bg2yohwLW2RmCVE%2FszA4E%2FtFoKqiDL2tw%2BGAh6qBP7wfzQhXdKPNN7eouc&X-Amz-Signature=ad1f4c7bc6eb2bd187d11f66b3a8fecb54e0c06b7b9548fd47723044352db2b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUUK5E2I%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lkctpPUMsDv17wa2eIw46zWbzRxpklPA8fo50dWcUQIhAMYI1s0tRpUE5yUCUPJYsZrh8yk36oiu7F7LpIzLpaAyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2F4slyjK%2FEV1rEO4q3ANOC097oPah3%2Fzh3cg7XokPL1syTkHt7%2FtG%2Bayjzn08U3fmUq9s6lD1YHbFfF%2FSKd2bT71e4s%2BC%2Fo7A02w68hWKn4cYctkV6XuLcYW0eFneOCM5G0YM2qH1divoHsP8mcX5V3MlCLZAYBLQS%2F0hbehCpXE%2BmRJbgkM7hqthG0e1Pzk1Uv42Jexn%2FbKHyR20xFfbU3TlkohTbSO%2BTX1JQMLijRVekqBRJSdrzF%2FcsF%2FmE2oow8%2FgYLwAjYelphLGnhxbbbE9oQ0HmF1LIY%2BRqiKtWDMbKjlXXB28Js3YQT7hDcX1lrbLeJyfoPevtfcY4Wv6Dy8T3D6JaUxsVVG96AG2mbjxFNvVvPWn1XJffVAIzNpAMpz0SZTz2gDXoZ5cRA8LLLDkaeJTyDqAtpdKYerUj%2B1PIh3jvKn6x3GGBc09xT2aeGfymgrTo0olunwWkVPv1nRGfYAlAudSckVnvqamoTwUEncSYH140GkvWDZkRLln6UnxWkAvPcpm60Cf81qXpunIIsTINGDv6KJDQOG1s%2F0eGmen6WoOZfYPHgGWNRPO99KCWQM96QqmARPgL8eZiVb4zBi9o73NdPpNVoaW72tBXc31%2BGmY2n7StPcBQyH14R%2FUXuMmRRe6BjC3k%2FfDBjqkAS%2F27O6K%2FHXd9%2Ff2iX%2Fn3Bp7v5qEOtc%2BjdqjX0aigv73cd3KuImAxnQBDhho5LISKF1dzB3O5hpn3TnJ9YZWNYEvT%2BnuvmIkhkw%2FtWH11z8FjG0X%2BBBSQ8kOKEWZUkf%2FEKZtK7CcEN7eQta454jAG6Eb2MwYKL1vHf%2Bg2yohwLW2RmCVE%2FszA4E%2FtFoKqiDL2tw%2BGAh6qBP7wfzQhXdKPNN7eouc&X-Amz-Signature=dae69d909966fc186e3145f3a559592eedad4aed328c607cfcb44492416b00fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
