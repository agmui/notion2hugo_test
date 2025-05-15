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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMVUDUC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDeCJRKDrXAu651wLPmbybXA9tBX3feZYY5s1%2Fmbi24PwIgTAaLSvEGMJ5Tsvik5fXjanwPvyuOvQC63sPcIw63Cd4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBiqpQgyoJk%2BH7Sl1ircA215uhXyWwVizbpeq9UqoZFfNvVHGHNcXZsXuUOGErhDT8CTLwYQpj1QRHdMGOXtjV2jRdRGc4h4NZXzfaAEcNvMFB30HOL9x9WNIOGcxvqA2cPZi6Zx%2FsjasZAirnh5bXaUhEcGXHr4gWw9V1GVqWN57H5EZj%2FoOKXAP925NzRzulIMRX6GI68qXLtIehU%2FWh0sL5WA9QVwxEjy6f6pVmLx9JHJx0yEKPdit9PZsQgnb6%2B7KGTIyDH%2Ba9%2FGl%2Fy%2Bq0jNHXaISLn2NOJvxyPhirTtNAgCRQ9O2DbwcPeLM4g%2BBbF%2BjcLPAxTuZpnHcVRlcbQKkQDOoZbDDDKSgXN5hF9exmAgvSaTKUaM%2F2zPpf0Sx6pacJPCEY9vLQYmXGPIMTa3kKgILbLmp2YKhkRsnOsS0f0xC7f03CmtX%2FESj%2Bjbf6Vyto%2FwDovXLmFxnF5z8BWD6ta1Jaty3QgcWCV%2Bhl1fd6JkJZrtqTzSUtW1rBFp56UOV06QOg%2BjQsGvYanTkKZSRrnNYiLjHyvA7mcKI7HRfOcAeVL8s8%2BkCYL4bsjOj0CfYqBNiG%2BJsQ3asd%2F2ltUssP9OZU61GN6FdnCrw3IZxo4Qj3pUiE9K6R6NkfKo5h5wQKLEBO6j0JHPMJysmMEGOqUBasE6TfTP7tC%2FU127ZNZlXh9vKiURfLYZtI%2Bu5oYm3NTHcriCXfnLqNJ0MiKgcbl4cFGhWeSeQgFydnVQMOcNYJQqR7JqbUSN4tW%2BNpj4%2FjZOgNeF%2Bn9GanY%2BZBs0GAOC7WoTvPmb96xGGj%2F%2B%2FQlZTMDLyRuo8IUME%2Bnk0uCK7dTNREltAFrz6AJffySUaHb5QiJUGYC%2BHvFAT2xjWNKAKz8Y1HXu&X-Amz-Signature=eae29e5602f36bdd7629c41a99a4fe878f162702ea1ce2ee3bb96b308fe9d24a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMVUDUC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDeCJRKDrXAu651wLPmbybXA9tBX3feZYY5s1%2Fmbi24PwIgTAaLSvEGMJ5Tsvik5fXjanwPvyuOvQC63sPcIw63Cd4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBiqpQgyoJk%2BH7Sl1ircA215uhXyWwVizbpeq9UqoZFfNvVHGHNcXZsXuUOGErhDT8CTLwYQpj1QRHdMGOXtjV2jRdRGc4h4NZXzfaAEcNvMFB30HOL9x9WNIOGcxvqA2cPZi6Zx%2FsjasZAirnh5bXaUhEcGXHr4gWw9V1GVqWN57H5EZj%2FoOKXAP925NzRzulIMRX6GI68qXLtIehU%2FWh0sL5WA9QVwxEjy6f6pVmLx9JHJx0yEKPdit9PZsQgnb6%2B7KGTIyDH%2Ba9%2FGl%2Fy%2Bq0jNHXaISLn2NOJvxyPhirTtNAgCRQ9O2DbwcPeLM4g%2BBbF%2BjcLPAxTuZpnHcVRlcbQKkQDOoZbDDDKSgXN5hF9exmAgvSaTKUaM%2F2zPpf0Sx6pacJPCEY9vLQYmXGPIMTa3kKgILbLmp2YKhkRsnOsS0f0xC7f03CmtX%2FESj%2Bjbf6Vyto%2FwDovXLmFxnF5z8BWD6ta1Jaty3QgcWCV%2Bhl1fd6JkJZrtqTzSUtW1rBFp56UOV06QOg%2BjQsGvYanTkKZSRrnNYiLjHyvA7mcKI7HRfOcAeVL8s8%2BkCYL4bsjOj0CfYqBNiG%2BJsQ3asd%2F2ltUssP9OZU61GN6FdnCrw3IZxo4Qj3pUiE9K6R6NkfKo5h5wQKLEBO6j0JHPMJysmMEGOqUBasE6TfTP7tC%2FU127ZNZlXh9vKiURfLYZtI%2Bu5oYm3NTHcriCXfnLqNJ0MiKgcbl4cFGhWeSeQgFydnVQMOcNYJQqR7JqbUSN4tW%2BNpj4%2FjZOgNeF%2Bn9GanY%2BZBs0GAOC7WoTvPmb96xGGj%2F%2B%2FQlZTMDLyRuo8IUME%2Bnk0uCK7dTNREltAFrz6AJffySUaHb5QiJUGYC%2BHvFAT2xjWNKAKz8Y1HXu&X-Amz-Signature=dbe3e7e951e77eb67e45eb0bf794c7d78ac77d32bbfab7cd70834b65999cdc75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMVUDUC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDeCJRKDrXAu651wLPmbybXA9tBX3feZYY5s1%2Fmbi24PwIgTAaLSvEGMJ5Tsvik5fXjanwPvyuOvQC63sPcIw63Cd4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBiqpQgyoJk%2BH7Sl1ircA215uhXyWwVizbpeq9UqoZFfNvVHGHNcXZsXuUOGErhDT8CTLwYQpj1QRHdMGOXtjV2jRdRGc4h4NZXzfaAEcNvMFB30HOL9x9WNIOGcxvqA2cPZi6Zx%2FsjasZAirnh5bXaUhEcGXHr4gWw9V1GVqWN57H5EZj%2FoOKXAP925NzRzulIMRX6GI68qXLtIehU%2FWh0sL5WA9QVwxEjy6f6pVmLx9JHJx0yEKPdit9PZsQgnb6%2B7KGTIyDH%2Ba9%2FGl%2Fy%2Bq0jNHXaISLn2NOJvxyPhirTtNAgCRQ9O2DbwcPeLM4g%2BBbF%2BjcLPAxTuZpnHcVRlcbQKkQDOoZbDDDKSgXN5hF9exmAgvSaTKUaM%2F2zPpf0Sx6pacJPCEY9vLQYmXGPIMTa3kKgILbLmp2YKhkRsnOsS0f0xC7f03CmtX%2FESj%2Bjbf6Vyto%2FwDovXLmFxnF5z8BWD6ta1Jaty3QgcWCV%2Bhl1fd6JkJZrtqTzSUtW1rBFp56UOV06QOg%2BjQsGvYanTkKZSRrnNYiLjHyvA7mcKI7HRfOcAeVL8s8%2BkCYL4bsjOj0CfYqBNiG%2BJsQ3asd%2F2ltUssP9OZU61GN6FdnCrw3IZxo4Qj3pUiE9K6R6NkfKo5h5wQKLEBO6j0JHPMJysmMEGOqUBasE6TfTP7tC%2FU127ZNZlXh9vKiURfLYZtI%2Bu5oYm3NTHcriCXfnLqNJ0MiKgcbl4cFGhWeSeQgFydnVQMOcNYJQqR7JqbUSN4tW%2BNpj4%2FjZOgNeF%2Bn9GanY%2BZBs0GAOC7WoTvPmb96xGGj%2F%2B%2FQlZTMDLyRuo8IUME%2Bnk0uCK7dTNREltAFrz6AJffySUaHb5QiJUGYC%2BHvFAT2xjWNKAKz8Y1HXu&X-Amz-Signature=ae4b39c6c31056b3f6a912247be50816e69e3e192ee3bbfe8c97d88821e65292&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
