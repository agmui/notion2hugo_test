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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFISJRPI%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg7gA1sQl9Z%2FUXiFZTxL%2F93%2Fi4B0t1XrLYCVVEaNNlEAiEAxxZVlAiM%2BJJqGxrCIaEfv3YOzxWK8O5Qtvkjp50ljbIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO57gIy99eCPzZnlNCrcAylaMzeC6LKjuNVGugTF9J1dWXK3QPeZZp%2Fu60Lo75tlyEYRvq5cM0nJjPXhHbtyXogyS7qN3rkjnnZhrVFtvsWP8m%2BmYKhTZS4gCaKhugJrpCVopVhRMA%2FiSvGlNQFHHScotAsLc86hchZPhZXMT2Dbtpo7G5%2Ff4rm%2BMSeC%2BQsENbsew6u3TThSTog71nvRlFzkuI0f8KTDlMi%2FWbD%2BF9dfEEQTmLs1oKolGct6fnrIAHphgtzQRuPpSLEJf72lopQYwYqPmNh%2FOb7XOUOPSMRU1UmhliXmOtHsH3YQNTiaWlO2qX%2F2lprCim%2BJ0W9ItcwGWrmW1NB5NjBrrMaGzZ6VPs5C3iTPMiHBVl5v8OH0Oj8YDk1CXAwbGIvtNIKjmExhf3piG0Hl9JXVJCmy5nQ8HY1SL2s9rT1bEmw%2FnM7Ff12qyySTacqwsvcKPs3pLXS1g%2FzLtFiuLu41OtaSyIIBzhptXrq8GAVMEeKJOhocyFfzUVcrJ%2FGgR88MKPV9FHtvaSp4Fupi4JZUMA3b1bbkhc0pyVIECuxkc3SOaE8HIGZcDRYw9fWMKD8sV9yvltgtzC1%2F0kk9vyH8Jug2VP%2F4WKIxXwEqN9tjQd%2F%2BV6OPl0Q8By%2Fo6gJ4skYfMOSevcYGOqUBqYSSdtlqUQPGADFq1zQnTU64CsfsCQi9yUufj5977yETbk%2BJFD%2Fl1rv19kXXOuucKml5Jfcz%2B8GttQDnikfKGLjmpXP1juOVKVRUjTR6ERGigjx4fkHAH8ZuL2VoDxVXvl1977%2BjmfPbz2N0zUVBYAbJSyiGGs%2FG0m%2FC3OgmdoRgDtavBcu01EvmFSdIDLx6pBeJ4y1K0Abe%2FwmHn91abJuxEFh2&X-Amz-Signature=17132a36f6e7d1c37be9e5fdb545720e3e171ccea343bde71d7d327276cc0086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFISJRPI%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg7gA1sQl9Z%2FUXiFZTxL%2F93%2Fi4B0t1XrLYCVVEaNNlEAiEAxxZVlAiM%2BJJqGxrCIaEfv3YOzxWK8O5Qtvkjp50ljbIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO57gIy99eCPzZnlNCrcAylaMzeC6LKjuNVGugTF9J1dWXK3QPeZZp%2Fu60Lo75tlyEYRvq5cM0nJjPXhHbtyXogyS7qN3rkjnnZhrVFtvsWP8m%2BmYKhTZS4gCaKhugJrpCVopVhRMA%2FiSvGlNQFHHScotAsLc86hchZPhZXMT2Dbtpo7G5%2Ff4rm%2BMSeC%2BQsENbsew6u3TThSTog71nvRlFzkuI0f8KTDlMi%2FWbD%2BF9dfEEQTmLs1oKolGct6fnrIAHphgtzQRuPpSLEJf72lopQYwYqPmNh%2FOb7XOUOPSMRU1UmhliXmOtHsH3YQNTiaWlO2qX%2F2lprCim%2BJ0W9ItcwGWrmW1NB5NjBrrMaGzZ6VPs5C3iTPMiHBVl5v8OH0Oj8YDk1CXAwbGIvtNIKjmExhf3piG0Hl9JXVJCmy5nQ8HY1SL2s9rT1bEmw%2FnM7Ff12qyySTacqwsvcKPs3pLXS1g%2FzLtFiuLu41OtaSyIIBzhptXrq8GAVMEeKJOhocyFfzUVcrJ%2FGgR88MKPV9FHtvaSp4Fupi4JZUMA3b1bbkhc0pyVIECuxkc3SOaE8HIGZcDRYw9fWMKD8sV9yvltgtzC1%2F0kk9vyH8Jug2VP%2F4WKIxXwEqN9tjQd%2F%2BV6OPl0Q8By%2Fo6gJ4skYfMOSevcYGOqUBqYSSdtlqUQPGADFq1zQnTU64CsfsCQi9yUufj5977yETbk%2BJFD%2Fl1rv19kXXOuucKml5Jfcz%2B8GttQDnikfKGLjmpXP1juOVKVRUjTR6ERGigjx4fkHAH8ZuL2VoDxVXvl1977%2BjmfPbz2N0zUVBYAbJSyiGGs%2FG0m%2FC3OgmdoRgDtavBcu01EvmFSdIDLx6pBeJ4y1K0Abe%2FwmHn91abJuxEFh2&X-Amz-Signature=b3123068d02d155a1e2564261c49f63d5672f5d12342be497ae7fd810ec62a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFISJRPI%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg7gA1sQl9Z%2FUXiFZTxL%2F93%2Fi4B0t1XrLYCVVEaNNlEAiEAxxZVlAiM%2BJJqGxrCIaEfv3YOzxWK8O5Qtvkjp50ljbIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO57gIy99eCPzZnlNCrcAylaMzeC6LKjuNVGugTF9J1dWXK3QPeZZp%2Fu60Lo75tlyEYRvq5cM0nJjPXhHbtyXogyS7qN3rkjnnZhrVFtvsWP8m%2BmYKhTZS4gCaKhugJrpCVopVhRMA%2FiSvGlNQFHHScotAsLc86hchZPhZXMT2Dbtpo7G5%2Ff4rm%2BMSeC%2BQsENbsew6u3TThSTog71nvRlFzkuI0f8KTDlMi%2FWbD%2BF9dfEEQTmLs1oKolGct6fnrIAHphgtzQRuPpSLEJf72lopQYwYqPmNh%2FOb7XOUOPSMRU1UmhliXmOtHsH3YQNTiaWlO2qX%2F2lprCim%2BJ0W9ItcwGWrmW1NB5NjBrrMaGzZ6VPs5C3iTPMiHBVl5v8OH0Oj8YDk1CXAwbGIvtNIKjmExhf3piG0Hl9JXVJCmy5nQ8HY1SL2s9rT1bEmw%2FnM7Ff12qyySTacqwsvcKPs3pLXS1g%2FzLtFiuLu41OtaSyIIBzhptXrq8GAVMEeKJOhocyFfzUVcrJ%2FGgR88MKPV9FHtvaSp4Fupi4JZUMA3b1bbkhc0pyVIECuxkc3SOaE8HIGZcDRYw9fWMKD8sV9yvltgtzC1%2F0kk9vyH8Jug2VP%2F4WKIxXwEqN9tjQd%2F%2BV6OPl0Q8By%2Fo6gJ4skYfMOSevcYGOqUBqYSSdtlqUQPGADFq1zQnTU64CsfsCQi9yUufj5977yETbk%2BJFD%2Fl1rv19kXXOuucKml5Jfcz%2B8GttQDnikfKGLjmpXP1juOVKVRUjTR6ERGigjx4fkHAH8ZuL2VoDxVXvl1977%2BjmfPbz2N0zUVBYAbJSyiGGs%2FG0m%2FC3OgmdoRgDtavBcu01EvmFSdIDLx6pBeJ4y1K0Abe%2FwmHn91abJuxEFh2&X-Amz-Signature=4a98e7f2627b83065b5b5d8599422c42cf5d979069cdfe590d1411402a054e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
