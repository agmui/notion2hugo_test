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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I355JDJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD6FQsme6NY092ZWPhUu5MXkJ1nAyUhqRxcRKjNH8J8wQIhAI34MQsM41ZUeTvxDQhGWYOF1LTjpV2iCQU7ni0X7qSTKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo3GXSlb%2F5kduQAQQq3AN2N94NiVmOYx9BRaaiLTi9gJHk%2Bb6h8J41z%2B2AXuYaTKlJpW6duvI0%2FCwIq9jO07hm%2F9ROYrPVcZGrsExjm8kRmNtUVFvuKFp%2FYfhb1slUgV2FOPz3IHPF7sYE7HsnZTm1w0wyZxNvjjRAed3vi1BhqXAEYEY9Cbnn%2BHgLDb381NwHGRtRg8V9eXGk0Eiu%2BpRiXjeLXHgX1w4o7ZZznp7wG5sgVnImhbzcjPbZrcUakbbrhxgXnGVajXLVpZXKJJxfUqJR%2FGc6mDwnsP4W%2B7R%2FhSjWj8N1qlT%2BWFfaTJGck3kq2Gzx2a5NmtTn97bj5A%2BFK9RGmc8G7jtkLNq9%2FQfSEQgK5V8s6OSvZO%2Fkyi4KcOuoluEsd1f7kVZKhuo9yNjp2mwXvj8r8zgyWtnKgtEx0R9AsDsk2udBvB9LxBnXtveQ4kw701fv02tBdn19hW7Q1S4GXDbOpNyOyR0nuKdH4d3CYLWICDiCMH3a%2FybV6IbpiV%2Bmc7NaqG1WWe%2BoSGdNqNEgo55OglajUTGionzMdMipANHcfM8PNS8yER5%2BM%2BtuI4Flv6nFWtWzC6cGpa1jUAEd%2BVtSRZ%2FASJ0%2FOCux0o7mozKCjBeefsp5kl0hY1TUMAu%2FmaDiOdZ55zDkseO%2FBjqkAej2sPA%2F%2BThjzQQR0Wf7fjM7hzySDdYx0J67cuorAb%2BcaHcBjGiToncCMbud6mPidUfmGfyABSgJFxxrzqQHSILe5%2BBfwLarmXV0r1iV3Iy1GktyhyB%2BAPnW26%2BLffaxSRMJDjMHVTxG%2FswDQqGhw7ZmaHXdODDpz0gjU0Oh4dMBAmkKa4G4W7C6tQ4nVwurjsCnFL1uwA7KlEbBI8V0j9KRY5Tk&X-Amz-Signature=d02a83e8ad6c054e53de0c642065c0585d0b17947ff98e10d5a49e7e1db2b6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I355JDJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD6FQsme6NY092ZWPhUu5MXkJ1nAyUhqRxcRKjNH8J8wQIhAI34MQsM41ZUeTvxDQhGWYOF1LTjpV2iCQU7ni0X7qSTKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo3GXSlb%2F5kduQAQQq3AN2N94NiVmOYx9BRaaiLTi9gJHk%2Bb6h8J41z%2B2AXuYaTKlJpW6duvI0%2FCwIq9jO07hm%2F9ROYrPVcZGrsExjm8kRmNtUVFvuKFp%2FYfhb1slUgV2FOPz3IHPF7sYE7HsnZTm1w0wyZxNvjjRAed3vi1BhqXAEYEY9Cbnn%2BHgLDb381NwHGRtRg8V9eXGk0Eiu%2BpRiXjeLXHgX1w4o7ZZznp7wG5sgVnImhbzcjPbZrcUakbbrhxgXnGVajXLVpZXKJJxfUqJR%2FGc6mDwnsP4W%2B7R%2FhSjWj8N1qlT%2BWFfaTJGck3kq2Gzx2a5NmtTn97bj5A%2BFK9RGmc8G7jtkLNq9%2FQfSEQgK5V8s6OSvZO%2Fkyi4KcOuoluEsd1f7kVZKhuo9yNjp2mwXvj8r8zgyWtnKgtEx0R9AsDsk2udBvB9LxBnXtveQ4kw701fv02tBdn19hW7Q1S4GXDbOpNyOyR0nuKdH4d3CYLWICDiCMH3a%2FybV6IbpiV%2Bmc7NaqG1WWe%2BoSGdNqNEgo55OglajUTGionzMdMipANHcfM8PNS8yER5%2BM%2BtuI4Flv6nFWtWzC6cGpa1jUAEd%2BVtSRZ%2FASJ0%2FOCux0o7mozKCjBeefsp5kl0hY1TUMAu%2FmaDiOdZ55zDkseO%2FBjqkAej2sPA%2F%2BThjzQQR0Wf7fjM7hzySDdYx0J67cuorAb%2BcaHcBjGiToncCMbud6mPidUfmGfyABSgJFxxrzqQHSILe5%2BBfwLarmXV0r1iV3Iy1GktyhyB%2BAPnW26%2BLffaxSRMJDjMHVTxG%2FswDQqGhw7ZmaHXdODDpz0gjU0Oh4dMBAmkKa4G4W7C6tQ4nVwurjsCnFL1uwA7KlEbBI8V0j9KRY5Tk&X-Amz-Signature=a047fa0fcc92b60489c0d98f6b556485e24a5b6d100549fc0c896e529715a571&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I355JDJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD6FQsme6NY092ZWPhUu5MXkJ1nAyUhqRxcRKjNH8J8wQIhAI34MQsM41ZUeTvxDQhGWYOF1LTjpV2iCQU7ni0X7qSTKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo3GXSlb%2F5kduQAQQq3AN2N94NiVmOYx9BRaaiLTi9gJHk%2Bb6h8J41z%2B2AXuYaTKlJpW6duvI0%2FCwIq9jO07hm%2F9ROYrPVcZGrsExjm8kRmNtUVFvuKFp%2FYfhb1slUgV2FOPz3IHPF7sYE7HsnZTm1w0wyZxNvjjRAed3vi1BhqXAEYEY9Cbnn%2BHgLDb381NwHGRtRg8V9eXGk0Eiu%2BpRiXjeLXHgX1w4o7ZZznp7wG5sgVnImhbzcjPbZrcUakbbrhxgXnGVajXLVpZXKJJxfUqJR%2FGc6mDwnsP4W%2B7R%2FhSjWj8N1qlT%2BWFfaTJGck3kq2Gzx2a5NmtTn97bj5A%2BFK9RGmc8G7jtkLNq9%2FQfSEQgK5V8s6OSvZO%2Fkyi4KcOuoluEsd1f7kVZKhuo9yNjp2mwXvj8r8zgyWtnKgtEx0R9AsDsk2udBvB9LxBnXtveQ4kw701fv02tBdn19hW7Q1S4GXDbOpNyOyR0nuKdH4d3CYLWICDiCMH3a%2FybV6IbpiV%2Bmc7NaqG1WWe%2BoSGdNqNEgo55OglajUTGionzMdMipANHcfM8PNS8yER5%2BM%2BtuI4Flv6nFWtWzC6cGpa1jUAEd%2BVtSRZ%2FASJ0%2FOCux0o7mozKCjBeefsp5kl0hY1TUMAu%2FmaDiOdZ55zDkseO%2FBjqkAej2sPA%2F%2BThjzQQR0Wf7fjM7hzySDdYx0J67cuorAb%2BcaHcBjGiToncCMbud6mPidUfmGfyABSgJFxxrzqQHSILe5%2BBfwLarmXV0r1iV3Iy1GktyhyB%2BAPnW26%2BLffaxSRMJDjMHVTxG%2FswDQqGhw7ZmaHXdODDpz0gjU0Oh4dMBAmkKa4G4W7C6tQ4nVwurjsCnFL1uwA7KlEbBI8V0j9KRY5Tk&X-Amz-Signature=ac7d79c43bcf4026cd5f327545ae5c7695c1e45540060a9b8cec52157519fd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
