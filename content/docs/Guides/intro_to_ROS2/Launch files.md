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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUX3WQGH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDh5aBSO2hsG%2F5C7AigJUjNNDKtpLWMkgo%2FT8gTXJYj2AiB4t7r1jpSIh%2BxBWJ1NuJzivpa2BHCqIiMZFGUuh8nmuCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzCLMyGoQqG0Cz2WmKtwDLZMer7UqZ7sjKBe%2BQTz%2BVVw7ag%2FylCC0Kep9crtXP%2BjkWKxg1uWyXBiAk%2B84TM1pELX93%2BuRrQwlu5Wf4VIoIo1VzOctwuXKrsYr7IpCiKQsK2Ove3TGjwgBSdOEtxP6EFOitpF663sC1GA1XyY7OQBk81i03KA5022KFduT6rCLkSmK6ZPEIg3Upo9u4Tx32VO2O%2Fy%2BxNaZREQNWfc%2B9ydRKfYsUKmsWVzpWrDd4ohT1ytyZMAnAdtyTOOra2VTVW6eaxv5LlgL04uEQB7trzaobo%2Bz78F4Fcm4BlAQk7%2FmwNPUnu7hTsaHU3l%2FDwIbePUX3%2FNUDTtVDB2c%2B2va6yS9lPa17unt5XbRt9lu86x8D28ewiaCAX%2FHtAmaDU3Qsv3YX78vOC8XhGnZPQtuVnTLwHWVOb%2BOwLJsVkm7FrvcggpxQ5l3nd3epWd73oSO4zKmQR5T9s2zsLaLGW9mJAR9CBM%2FrOJCIC2qG9Q2NP1XCGo3yQMEjivf3sJK26nNV8ZRInQrJEsEK%2B2qHrrlgtQ3x9Ci0ouGJN9t%2FgArdefURvApBtjB001rhnmmaoQQ49JMU6KSEl7cun%2FxQm7H0HGElykopapphm8zRKzGtLET%2B%2BeHF2yT%2B5u3SfIwi5%2BOwAY6pgHvUCsOeoyWK5859sM8ly2jHz8veuuTFWRZvK3JAD38v5xBNH99lrCjLmJzF4qG3mKLPF4McvDpaWL7wZBEtYYfnZ8W9GsKINXwgKDpkugq7naQ7CLVf1I690iN9pAek0D%2FI1gWl9Q62W6lFLrrQez7REqoiQYoQgScpm%2BsZ3kI08Q9cU13Hb5IGfT0GbtL1KTyNkN6fH%2B7W1RNCzEdpF6bkzlWLHwI&X-Amz-Signature=46f116f53e153d27b8aed95eac035c62799219584d587e8101a9cc6aefee95e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUX3WQGH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDh5aBSO2hsG%2F5C7AigJUjNNDKtpLWMkgo%2FT8gTXJYj2AiB4t7r1jpSIh%2BxBWJ1NuJzivpa2BHCqIiMZFGUuh8nmuCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzCLMyGoQqG0Cz2WmKtwDLZMer7UqZ7sjKBe%2BQTz%2BVVw7ag%2FylCC0Kep9crtXP%2BjkWKxg1uWyXBiAk%2B84TM1pELX93%2BuRrQwlu5Wf4VIoIo1VzOctwuXKrsYr7IpCiKQsK2Ove3TGjwgBSdOEtxP6EFOitpF663sC1GA1XyY7OQBk81i03KA5022KFduT6rCLkSmK6ZPEIg3Upo9u4Tx32VO2O%2Fy%2BxNaZREQNWfc%2B9ydRKfYsUKmsWVzpWrDd4ohT1ytyZMAnAdtyTOOra2VTVW6eaxv5LlgL04uEQB7trzaobo%2Bz78F4Fcm4BlAQk7%2FmwNPUnu7hTsaHU3l%2FDwIbePUX3%2FNUDTtVDB2c%2B2va6yS9lPa17unt5XbRt9lu86x8D28ewiaCAX%2FHtAmaDU3Qsv3YX78vOC8XhGnZPQtuVnTLwHWVOb%2BOwLJsVkm7FrvcggpxQ5l3nd3epWd73oSO4zKmQR5T9s2zsLaLGW9mJAR9CBM%2FrOJCIC2qG9Q2NP1XCGo3yQMEjivf3sJK26nNV8ZRInQrJEsEK%2B2qHrrlgtQ3x9Ci0ouGJN9t%2FgArdefURvApBtjB001rhnmmaoQQ49JMU6KSEl7cun%2FxQm7H0HGElykopapphm8zRKzGtLET%2B%2BeHF2yT%2B5u3SfIwi5%2BOwAY6pgHvUCsOeoyWK5859sM8ly2jHz8veuuTFWRZvK3JAD38v5xBNH99lrCjLmJzF4qG3mKLPF4McvDpaWL7wZBEtYYfnZ8W9GsKINXwgKDpkugq7naQ7CLVf1I690iN9pAek0D%2FI1gWl9Q62W6lFLrrQez7REqoiQYoQgScpm%2BsZ3kI08Q9cU13Hb5IGfT0GbtL1KTyNkN6fH%2B7W1RNCzEdpF6bkzlWLHwI&X-Amz-Signature=810ce4a09891cb2c99b1f66c004bc8562018b28c267b5c8b911570e6965e10f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUX3WQGH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDh5aBSO2hsG%2F5C7AigJUjNNDKtpLWMkgo%2FT8gTXJYj2AiB4t7r1jpSIh%2BxBWJ1NuJzivpa2BHCqIiMZFGUuh8nmuCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzCLMyGoQqG0Cz2WmKtwDLZMer7UqZ7sjKBe%2BQTz%2BVVw7ag%2FylCC0Kep9crtXP%2BjkWKxg1uWyXBiAk%2B84TM1pELX93%2BuRrQwlu5Wf4VIoIo1VzOctwuXKrsYr7IpCiKQsK2Ove3TGjwgBSdOEtxP6EFOitpF663sC1GA1XyY7OQBk81i03KA5022KFduT6rCLkSmK6ZPEIg3Upo9u4Tx32VO2O%2Fy%2BxNaZREQNWfc%2B9ydRKfYsUKmsWVzpWrDd4ohT1ytyZMAnAdtyTOOra2VTVW6eaxv5LlgL04uEQB7trzaobo%2Bz78F4Fcm4BlAQk7%2FmwNPUnu7hTsaHU3l%2FDwIbePUX3%2FNUDTtVDB2c%2B2va6yS9lPa17unt5XbRt9lu86x8D28ewiaCAX%2FHtAmaDU3Qsv3YX78vOC8XhGnZPQtuVnTLwHWVOb%2BOwLJsVkm7FrvcggpxQ5l3nd3epWd73oSO4zKmQR5T9s2zsLaLGW9mJAR9CBM%2FrOJCIC2qG9Q2NP1XCGo3yQMEjivf3sJK26nNV8ZRInQrJEsEK%2B2qHrrlgtQ3x9Ci0ouGJN9t%2FgArdefURvApBtjB001rhnmmaoQQ49JMU6KSEl7cun%2FxQm7H0HGElykopapphm8zRKzGtLET%2B%2BeHF2yT%2B5u3SfIwi5%2BOwAY6pgHvUCsOeoyWK5859sM8ly2jHz8veuuTFWRZvK3JAD38v5xBNH99lrCjLmJzF4qG3mKLPF4McvDpaWL7wZBEtYYfnZ8W9GsKINXwgKDpkugq7naQ7CLVf1I690iN9pAek0D%2FI1gWl9Q62W6lFLrrQez7REqoiQYoQgScpm%2BsZ3kI08Q9cU13Hb5IGfT0GbtL1KTyNkN6fH%2B7W1RNCzEdpF6bkzlWLHwI&X-Amz-Signature=79bba5fdf0c1f54cec29f8bb1d30d305dec4d4840f1e3fbaad1f6b247966ce1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
