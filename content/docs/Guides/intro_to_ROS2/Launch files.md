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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIXXZFBA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BGRzN%2BOoIlf%2B%2FgNELTj%2BdSw4kJmVvObrCm0vB8yGdcAiBxNo9uMe%2FWeN47PBkiYwJb5h%2BctICIwOJ%2F%2BE1lys0WSSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBY0wPOo%2FAKKewiXEKtwDi95ktucKW8VQ4aGNLKKwxTuqSN75djtg3QHkVtv286H%2BLEvECJ4yXijGf9THdrT%2FYKsxHCFxFAaDttERjE8hw%2BMJT2UjjT1%2F4hBFaCg6jMrFgyeWwVsN9BystEyKBRRKojfFo713E7Oz3cYOjXUKtHif78jQSY3Y84nQQgLDx6AwrlS03PUlFUU4cJWSddTq6wJGsYxMbdQD2oJT586uDDVKEs6meuH2HQPgVjamDKw6gmgjdjWt%2BeFGXuCeD7li8EcH%2BZ7nugi6Qe8nq0ugPWbrTuAGqtWbAMan1PaL2ZsHSXbCZeqB%2BhHln1xAFcMDCj92UwqAEpK1sg56Gmlm2M9sUhXEm8JRoxrGm1ErEVXz%2FsJw3cqT772u3uuH%2Bf6oDjhbJV3y4gEHqoDFV4XwTCvdr%2B6eerEktoY0X18vAsg8sC6VEaVEX8VNobLyLAspcIdH7ijn%2BAhesKJ%2BkSxQnkebk7TnoPvuj4l6SaM79FzkjrFU11C0HrZA7yPNX2YvMltSaSZDhIYqAC9MbzE1jQ74L3LBUQvwJa39CbMfmrYWpQ8tyctOrbjJy2OOhy%2F6XCbvz30b78ep%2B2XKvxMUxDHkTjLQ%2Fxx4mqO3IGZROuriUyF0UnbN%2Bj4RBIswwsmkwgY6pgEyE6VgZ5182%2BHCR4NNOMz9eryp8RLGE6J5sq%2FARN0mtDoUTinKhQldlTNm7yPKSw4KibxtA7uPThXh8DCGMTAtaVDsM2Kjjh5dUEQXLwcgHI8t7lolk5tcVaaOCh2ZaDoOalWXawBBu1T%2B53osTWanWAWKLVAGhtPILDbcZc5gjacVPRDsR1xYlryJEpRWB2cxKinqoepAt%2Fkof15GTry%2Be9Bzg%2BCz&X-Amz-Signature=444ea74c7f776172bd07d8f742403a96fcc7255634c6d765e273777327af3ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIXXZFBA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BGRzN%2BOoIlf%2B%2FgNELTj%2BdSw4kJmVvObrCm0vB8yGdcAiBxNo9uMe%2FWeN47PBkiYwJb5h%2BctICIwOJ%2F%2BE1lys0WSSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBY0wPOo%2FAKKewiXEKtwDi95ktucKW8VQ4aGNLKKwxTuqSN75djtg3QHkVtv286H%2BLEvECJ4yXijGf9THdrT%2FYKsxHCFxFAaDttERjE8hw%2BMJT2UjjT1%2F4hBFaCg6jMrFgyeWwVsN9BystEyKBRRKojfFo713E7Oz3cYOjXUKtHif78jQSY3Y84nQQgLDx6AwrlS03PUlFUU4cJWSddTq6wJGsYxMbdQD2oJT586uDDVKEs6meuH2HQPgVjamDKw6gmgjdjWt%2BeFGXuCeD7li8EcH%2BZ7nugi6Qe8nq0ugPWbrTuAGqtWbAMan1PaL2ZsHSXbCZeqB%2BhHln1xAFcMDCj92UwqAEpK1sg56Gmlm2M9sUhXEm8JRoxrGm1ErEVXz%2FsJw3cqT772u3uuH%2Bf6oDjhbJV3y4gEHqoDFV4XwTCvdr%2B6eerEktoY0X18vAsg8sC6VEaVEX8VNobLyLAspcIdH7ijn%2BAhesKJ%2BkSxQnkebk7TnoPvuj4l6SaM79FzkjrFU11C0HrZA7yPNX2YvMltSaSZDhIYqAC9MbzE1jQ74L3LBUQvwJa39CbMfmrYWpQ8tyctOrbjJy2OOhy%2F6XCbvz30b78ep%2B2XKvxMUxDHkTjLQ%2Fxx4mqO3IGZROuriUyF0UnbN%2Bj4RBIswwsmkwgY6pgEyE6VgZ5182%2BHCR4NNOMz9eryp8RLGE6J5sq%2FARN0mtDoUTinKhQldlTNm7yPKSw4KibxtA7uPThXh8DCGMTAtaVDsM2Kjjh5dUEQXLwcgHI8t7lolk5tcVaaOCh2ZaDoOalWXawBBu1T%2B53osTWanWAWKLVAGhtPILDbcZc5gjacVPRDsR1xYlryJEpRWB2cxKinqoepAt%2Fkof15GTry%2Be9Bzg%2BCz&X-Amz-Signature=d10786fdbea98782545ee06409b64a1d13144018d3daad28d6fa196bb5f546f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIXXZFBA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BGRzN%2BOoIlf%2B%2FgNELTj%2BdSw4kJmVvObrCm0vB8yGdcAiBxNo9uMe%2FWeN47PBkiYwJb5h%2BctICIwOJ%2F%2BE1lys0WSSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBY0wPOo%2FAKKewiXEKtwDi95ktucKW8VQ4aGNLKKwxTuqSN75djtg3QHkVtv286H%2BLEvECJ4yXijGf9THdrT%2FYKsxHCFxFAaDttERjE8hw%2BMJT2UjjT1%2F4hBFaCg6jMrFgyeWwVsN9BystEyKBRRKojfFo713E7Oz3cYOjXUKtHif78jQSY3Y84nQQgLDx6AwrlS03PUlFUU4cJWSddTq6wJGsYxMbdQD2oJT586uDDVKEs6meuH2HQPgVjamDKw6gmgjdjWt%2BeFGXuCeD7li8EcH%2BZ7nugi6Qe8nq0ugPWbrTuAGqtWbAMan1PaL2ZsHSXbCZeqB%2BhHln1xAFcMDCj92UwqAEpK1sg56Gmlm2M9sUhXEm8JRoxrGm1ErEVXz%2FsJw3cqT772u3uuH%2Bf6oDjhbJV3y4gEHqoDFV4XwTCvdr%2B6eerEktoY0X18vAsg8sC6VEaVEX8VNobLyLAspcIdH7ijn%2BAhesKJ%2BkSxQnkebk7TnoPvuj4l6SaM79FzkjrFU11C0HrZA7yPNX2YvMltSaSZDhIYqAC9MbzE1jQ74L3LBUQvwJa39CbMfmrYWpQ8tyctOrbjJy2OOhy%2F6XCbvz30b78ep%2B2XKvxMUxDHkTjLQ%2Fxx4mqO3IGZROuriUyF0UnbN%2Bj4RBIswwsmkwgY6pgEyE6VgZ5182%2BHCR4NNOMz9eryp8RLGE6J5sq%2FARN0mtDoUTinKhQldlTNm7yPKSw4KibxtA7uPThXh8DCGMTAtaVDsM2Kjjh5dUEQXLwcgHI8t7lolk5tcVaaOCh2ZaDoOalWXawBBu1T%2B53osTWanWAWKLVAGhtPILDbcZc5gjacVPRDsR1xYlryJEpRWB2cxKinqoepAt%2Fkof15GTry%2Be9Bzg%2BCz&X-Amz-Signature=b85efb91e4e4a34e2e1d741a82655647a8bcd5300b0af087a8785db1a0a7ff0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
