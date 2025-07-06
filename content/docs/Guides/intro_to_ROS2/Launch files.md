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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RD4TV2T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCgxMLyrA3DsMXJsiyHtCeDrVpmFGc7ugfS6A5Bm1mqWAIhAOOmC416%2BBhREyHhXv%2Bewgb2N3PkOkDG4yA4GqCCyODVKv8DCGMQABoMNjM3NDIzMTgzODA1Igx%2B3cYmlFIEGHvTlXoq3ANOPIxLhWvdkQSg7hz2tbDrxHAV3hq%2BExcuN7%2F2dpXlmb5HF1UyhZJMyYSPveAkzPRjSfghH2%2FrOWGf4HoNnVcCRhZbAnXtjvjZATOs6e%2BhrmQzNHem3Lk8DaBuySl9l6fCaqNe%2FkADbUUF%2FXZCRHRXHz9YDDEfuvuN74nPAEXdLVwXJu6g3z%2F8aPJDe7T%2BSFOK7P2YopLTSacsss8NmQraHmu7DD4tGuAWxkGWz%2BgzHkvUDvVWWUSEYSTiVVTX4wHuOHd5Bhssru9xaPzVn6AOsIMOHQHsC5Wb9F%2BaXK%2F2mtdurnPVQRur8e1YonruHFRtIBinSmzs%2FIFkLn%2BdZ%2FRYD8Q3ZRg%2Fy%2B1mYHvbGBvkQIDHAv%2F14nTqYi%2F6Wnwcm%2BQdKt0c9nTQnJ5qy9dATu%2BwdH9mOKnCAdR9Kof9mXUaIQM4B3zr0974AUGL1z%2BdM%2FkvahfDf0Cv2M7PR8rzpEGa1rrtVf6Vk2uwFn1n8T7hwgSk6M8TJV7oEYYEmvXLkauUGFYsZrU64FNl3dONoDQsgGZ8MCZMAuvuftJNUrjxB%2FaWTwaBMmsPrUuuU21%2BiwG77MMjuMWDZYBUvISLmCNaOjNayzcGwz8QsvTHkOP4Er1tGT7%2BIYKasjdDLjCT%2FarDBjqkAVxpv75rZibApiusoqdtKcxq0z%2FVqWKu9O%2FYvkF1A6HVgplyf8A7EXrjotUW7C2Quo5L7Y%2BtrjkSDU0kVqG3BHYKNyES2%2BeWckTpjpBVQAJ5NiiWPPNUV66dtF%2Ftp7Gpp1uUROZMiZgjMW8M0EMKfb7drLegII%2Byi37eaInFgq%2B%2BNiJrg9l0XlNfZt4PMPrblZaSJdVm7kQHOYOrqFhjyCWKot8o&X-Amz-Signature=afe81915f9175f37715cd5e878fc9654dc155b91839a1592049446346c433c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RD4TV2T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCgxMLyrA3DsMXJsiyHtCeDrVpmFGc7ugfS6A5Bm1mqWAIhAOOmC416%2BBhREyHhXv%2Bewgb2N3PkOkDG4yA4GqCCyODVKv8DCGMQABoMNjM3NDIzMTgzODA1Igx%2B3cYmlFIEGHvTlXoq3ANOPIxLhWvdkQSg7hz2tbDrxHAV3hq%2BExcuN7%2F2dpXlmb5HF1UyhZJMyYSPveAkzPRjSfghH2%2FrOWGf4HoNnVcCRhZbAnXtjvjZATOs6e%2BhrmQzNHem3Lk8DaBuySl9l6fCaqNe%2FkADbUUF%2FXZCRHRXHz9YDDEfuvuN74nPAEXdLVwXJu6g3z%2F8aPJDe7T%2BSFOK7P2YopLTSacsss8NmQraHmu7DD4tGuAWxkGWz%2BgzHkvUDvVWWUSEYSTiVVTX4wHuOHd5Bhssru9xaPzVn6AOsIMOHQHsC5Wb9F%2BaXK%2F2mtdurnPVQRur8e1YonruHFRtIBinSmzs%2FIFkLn%2BdZ%2FRYD8Q3ZRg%2Fy%2B1mYHvbGBvkQIDHAv%2F14nTqYi%2F6Wnwcm%2BQdKt0c9nTQnJ5qy9dATu%2BwdH9mOKnCAdR9Kof9mXUaIQM4B3zr0974AUGL1z%2BdM%2FkvahfDf0Cv2M7PR8rzpEGa1rrtVf6Vk2uwFn1n8T7hwgSk6M8TJV7oEYYEmvXLkauUGFYsZrU64FNl3dONoDQsgGZ8MCZMAuvuftJNUrjxB%2FaWTwaBMmsPrUuuU21%2BiwG77MMjuMWDZYBUvISLmCNaOjNayzcGwz8QsvTHkOP4Er1tGT7%2BIYKasjdDLjCT%2FarDBjqkAVxpv75rZibApiusoqdtKcxq0z%2FVqWKu9O%2FYvkF1A6HVgplyf8A7EXrjotUW7C2Quo5L7Y%2BtrjkSDU0kVqG3BHYKNyES2%2BeWckTpjpBVQAJ5NiiWPPNUV66dtF%2Ftp7Gpp1uUROZMiZgjMW8M0EMKfb7drLegII%2Byi37eaInFgq%2B%2BNiJrg9l0XlNfZt4PMPrblZaSJdVm7kQHOYOrqFhjyCWKot8o&X-Amz-Signature=7854033a3ffcb09e2f3dddca7692387189731da1c394e989174120bd493e25e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RD4TV2T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCgxMLyrA3DsMXJsiyHtCeDrVpmFGc7ugfS6A5Bm1mqWAIhAOOmC416%2BBhREyHhXv%2Bewgb2N3PkOkDG4yA4GqCCyODVKv8DCGMQABoMNjM3NDIzMTgzODA1Igx%2B3cYmlFIEGHvTlXoq3ANOPIxLhWvdkQSg7hz2tbDrxHAV3hq%2BExcuN7%2F2dpXlmb5HF1UyhZJMyYSPveAkzPRjSfghH2%2FrOWGf4HoNnVcCRhZbAnXtjvjZATOs6e%2BhrmQzNHem3Lk8DaBuySl9l6fCaqNe%2FkADbUUF%2FXZCRHRXHz9YDDEfuvuN74nPAEXdLVwXJu6g3z%2F8aPJDe7T%2BSFOK7P2YopLTSacsss8NmQraHmu7DD4tGuAWxkGWz%2BgzHkvUDvVWWUSEYSTiVVTX4wHuOHd5Bhssru9xaPzVn6AOsIMOHQHsC5Wb9F%2BaXK%2F2mtdurnPVQRur8e1YonruHFRtIBinSmzs%2FIFkLn%2BdZ%2FRYD8Q3ZRg%2Fy%2B1mYHvbGBvkQIDHAv%2F14nTqYi%2F6Wnwcm%2BQdKt0c9nTQnJ5qy9dATu%2BwdH9mOKnCAdR9Kof9mXUaIQM4B3zr0974AUGL1z%2BdM%2FkvahfDf0Cv2M7PR8rzpEGa1rrtVf6Vk2uwFn1n8T7hwgSk6M8TJV7oEYYEmvXLkauUGFYsZrU64FNl3dONoDQsgGZ8MCZMAuvuftJNUrjxB%2FaWTwaBMmsPrUuuU21%2BiwG77MMjuMWDZYBUvISLmCNaOjNayzcGwz8QsvTHkOP4Er1tGT7%2BIYKasjdDLjCT%2FarDBjqkAVxpv75rZibApiusoqdtKcxq0z%2FVqWKu9O%2FYvkF1A6HVgplyf8A7EXrjotUW7C2Quo5L7Y%2BtrjkSDU0kVqG3BHYKNyES2%2BeWckTpjpBVQAJ5NiiWPPNUV66dtF%2Ftp7Gpp1uUROZMiZgjMW8M0EMKfb7drLegII%2Byi37eaInFgq%2B%2BNiJrg9l0XlNfZt4PMPrblZaSJdVm7kQHOYOrqFhjyCWKot8o&X-Amz-Signature=1538747c607402fe9ee40452b01dfcc7b1cfa76b81f23216afc42dee765f26d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
