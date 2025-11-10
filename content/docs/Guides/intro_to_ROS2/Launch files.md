---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB57RKLS%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD6POP%2BDIOxS3Y%2FNtLNomHJAfvS7MKyuWyPNfSaBDnKpwIhAMaKO15RkCkHp80fPhzFMhJDnnbsFjGuRa8g9c%2BQoiUcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxReyQ1cmb0SZPm71gq3AO%2BP5%2BEpycfcj7bN%2B3BEbUZECsj3%2FPA365UO0w8SUYziHmUFL93qNplnnGTYxkXAlE9bse6TjQV3kO9MPiy5WBve94GFcx6KDRfusonQLMpl28H5hSUDl9qf%2FPentvfjQUUICsDPbqlrFE%2BVbjwaqGyGlO99k6EK8HLyvi178b6a2WP9dWS6ZbWKXzlwYjCeKNtDz3PX%2Fgt%2BtkxyTCdFMAfuW9iHlXgqsrmrxDpTsA9ruqRWpjubaZHz4sv4pplCrgBFLIOt3rdY24pYf9yPrJNdcAmzaV4mDsiLPUWK7UV9sunaGeNU%2Fku9TGxig7AqHknG2Mvkvn4jWi4IfNZljgAwGvgBngCW9DiMQ8J1T%2FRIJ5AeuEz1lZ9QdiaNkdU4ruCBsRziwyxgg6cjow%2BAfbQIjkD5x2TAJxzms%2F5RMzcKxdWEF%2FULe5b7E4Cr3IMATC4xrkU1FNEsDb8C3RtYirHa%2BQuAzUmxmRFcJyVljYW%2FWEjat4HmMxxb15%2FDXQOgeS5FEyPTZUxSuiPGpt7q4WjoafUJt%2Fava9r2r%2BL3ZGZCaN7goKJsEnDpv0TjouWcBgaF4x3z6C7wG3gWNPUB1KAr8HXhiASUixqBd85PG8HseZMwKmiPc2n%2F4yjwjCks8TIBjqkAeZEHRlfZWyWpCGHdjamIdDGUp%2B%2BGf8G3dvH8Wlcriy8M9slUhQnHoGstXaN6kAKsee9CMjbpBic2KWKXwcaod20VScD3KWhiqhljS0humg%2BcyHT7byZdXOdsgX7Ucgi%2BLXbztZttOVzpp9n73Wg%2FqDniNiI%2Fisy2cwh7kq%2BJKpO3KnOXXhvw1AmQsXDt7%2BdWPO%2B7t0hcORsLJPwVJUbfVBhmRZv&X-Amz-Signature=8033c2d19afa911e71ded4238ccac401677186193adb81d8f052775a9d1099ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB57RKLS%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD6POP%2BDIOxS3Y%2FNtLNomHJAfvS7MKyuWyPNfSaBDnKpwIhAMaKO15RkCkHp80fPhzFMhJDnnbsFjGuRa8g9c%2BQoiUcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxReyQ1cmb0SZPm71gq3AO%2BP5%2BEpycfcj7bN%2B3BEbUZECsj3%2FPA365UO0w8SUYziHmUFL93qNplnnGTYxkXAlE9bse6TjQV3kO9MPiy5WBve94GFcx6KDRfusonQLMpl28H5hSUDl9qf%2FPentvfjQUUICsDPbqlrFE%2BVbjwaqGyGlO99k6EK8HLyvi178b6a2WP9dWS6ZbWKXzlwYjCeKNtDz3PX%2Fgt%2BtkxyTCdFMAfuW9iHlXgqsrmrxDpTsA9ruqRWpjubaZHz4sv4pplCrgBFLIOt3rdY24pYf9yPrJNdcAmzaV4mDsiLPUWK7UV9sunaGeNU%2Fku9TGxig7AqHknG2Mvkvn4jWi4IfNZljgAwGvgBngCW9DiMQ8J1T%2FRIJ5AeuEz1lZ9QdiaNkdU4ruCBsRziwyxgg6cjow%2BAfbQIjkD5x2TAJxzms%2F5RMzcKxdWEF%2FULe5b7E4Cr3IMATC4xrkU1FNEsDb8C3RtYirHa%2BQuAzUmxmRFcJyVljYW%2FWEjat4HmMxxb15%2FDXQOgeS5FEyPTZUxSuiPGpt7q4WjoafUJt%2Fava9r2r%2BL3ZGZCaN7goKJsEnDpv0TjouWcBgaF4x3z6C7wG3gWNPUB1KAr8HXhiASUixqBd85PG8HseZMwKmiPc2n%2F4yjwjCks8TIBjqkAeZEHRlfZWyWpCGHdjamIdDGUp%2B%2BGf8G3dvH8Wlcriy8M9slUhQnHoGstXaN6kAKsee9CMjbpBic2KWKXwcaod20VScD3KWhiqhljS0humg%2BcyHT7byZdXOdsgX7Ucgi%2BLXbztZttOVzpp9n73Wg%2FqDniNiI%2Fisy2cwh7kq%2BJKpO3KnOXXhvw1AmQsXDt7%2BdWPO%2B7t0hcORsLJPwVJUbfVBhmRZv&X-Amz-Signature=7b2277e1b7400fb7ec6103b0eca5a15a0b92fe1a8623f76d8e18acde2ede4259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB57RKLS%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD6POP%2BDIOxS3Y%2FNtLNomHJAfvS7MKyuWyPNfSaBDnKpwIhAMaKO15RkCkHp80fPhzFMhJDnnbsFjGuRa8g9c%2BQoiUcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxReyQ1cmb0SZPm71gq3AO%2BP5%2BEpycfcj7bN%2B3BEbUZECsj3%2FPA365UO0w8SUYziHmUFL93qNplnnGTYxkXAlE9bse6TjQV3kO9MPiy5WBve94GFcx6KDRfusonQLMpl28H5hSUDl9qf%2FPentvfjQUUICsDPbqlrFE%2BVbjwaqGyGlO99k6EK8HLyvi178b6a2WP9dWS6ZbWKXzlwYjCeKNtDz3PX%2Fgt%2BtkxyTCdFMAfuW9iHlXgqsrmrxDpTsA9ruqRWpjubaZHz4sv4pplCrgBFLIOt3rdY24pYf9yPrJNdcAmzaV4mDsiLPUWK7UV9sunaGeNU%2Fku9TGxig7AqHknG2Mvkvn4jWi4IfNZljgAwGvgBngCW9DiMQ8J1T%2FRIJ5AeuEz1lZ9QdiaNkdU4ruCBsRziwyxgg6cjow%2BAfbQIjkD5x2TAJxzms%2F5RMzcKxdWEF%2FULe5b7E4Cr3IMATC4xrkU1FNEsDb8C3RtYirHa%2BQuAzUmxmRFcJyVljYW%2FWEjat4HmMxxb15%2FDXQOgeS5FEyPTZUxSuiPGpt7q4WjoafUJt%2Fava9r2r%2BL3ZGZCaN7goKJsEnDpv0TjouWcBgaF4x3z6C7wG3gWNPUB1KAr8HXhiASUixqBd85PG8HseZMwKmiPc2n%2F4yjwjCks8TIBjqkAeZEHRlfZWyWpCGHdjamIdDGUp%2B%2BGf8G3dvH8Wlcriy8M9slUhQnHoGstXaN6kAKsee9CMjbpBic2KWKXwcaod20VScD3KWhiqhljS0humg%2BcyHT7byZdXOdsgX7Ucgi%2BLXbztZttOVzpp9n73Wg%2FqDniNiI%2Fisy2cwh7kq%2BJKpO3KnOXXhvw1AmQsXDt7%2BdWPO%2B7t0hcORsLJPwVJUbfVBhmRZv&X-Amz-Signature=0f6d96e9de6a2df568bb7e09d4b3bd016895979735d23096d5d85a01b617293c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
