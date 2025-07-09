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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5TOSSGA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjifUFv51i5ynadS01AS6YF9mbL9b8Aia6TdzxqUC03wIhAM1Jxs31OA59PFkNnyWeaH%2B%2BB%2BV2%2BPcdWY09LVkmzkA0KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfDlZm6If5m2Cn9gEq3APdhnWGJvoQzVN7jddcHTagG3Cy%2FKUZ7lCvecv%2FbV2Br6o0g60RaHZXat9EXq17kWKLhj0p8cP8fbiqV%2BmOQQ3k%2BpBPQGYKxcdinyj%2FpnevQkLl%2BG%2FzBvbfqskuvjFQ5HYW4jV1VJC22URgPOy4ctz5tazHuXPtVehV0%2BfV7a3d0xFEMNYa4UeZbnofe%2FR5U6y0vWdn9p2oo9kiKwihqKRDWD2A8GJQUrSNq4tlHmsbcNdwiIVnBFnfqvBFaetM0SRiyB4JL%2BlKPnyo2UGU9pnym2K6wSF12ikqGpb4OaudeF3lv1AmMSdXi8o9%2Blf3yqsTAN2Phqq%2F8T2PjPES82oigfsaj8YWR9QVf1Z1dT6mby%2FoPDxszzcWZPlACyrgoZP7ZCV39wOCutGQ0evaYKyWU7QiYeWtIwAfYbgw43eftauP5Ylr%2Bz5U%2BGAN0DLtTGlIfO700TayI6wL4nV0o1pUj2wE%2FBPmwIoHzhDbrW0pgASnvfOX0QQi6BcYcydtD1d2%2FF1gnjjE1eWN1gSr0Jux5a7AjvP0JxNc6X9k%2FsrXX8rWyPpg%2FpBGCEMNPZGqAyI7RglaU7VDiiv%2FQEYoDR%2F0oja4Sp5TngD8myJJkkCVKAvXKzm1Cy00DxtiRTCYtLbDBjqkAds9hfh26Lqbvy3FO1TfepnOzjRSsv5IixAAp48938YcIa4GuBrARO6N8Fyo9u%2Fjxd0cd1qxfe54n0CmA8hCtDFazeoXkSp9nHAT%2BUT3%2BZl6GhUN%2Bj8mi1UMjrstLItcJkmcOsI4M%2B28nLT%2FbdTqLBMIehKRRhpEOwfYtPD9h1ny3XjBTPA0rk7epYoViTYS%2Bngmho3OLQDXm%2FUffhm2oFSlJ8zf&X-Amz-Signature=3b6094c4502895794279762d079d420ed8bc5b94fd9ef4aec2470db0b02664c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5TOSSGA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjifUFv51i5ynadS01AS6YF9mbL9b8Aia6TdzxqUC03wIhAM1Jxs31OA59PFkNnyWeaH%2B%2BB%2BV2%2BPcdWY09LVkmzkA0KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfDlZm6If5m2Cn9gEq3APdhnWGJvoQzVN7jddcHTagG3Cy%2FKUZ7lCvecv%2FbV2Br6o0g60RaHZXat9EXq17kWKLhj0p8cP8fbiqV%2BmOQQ3k%2BpBPQGYKxcdinyj%2FpnevQkLl%2BG%2FzBvbfqskuvjFQ5HYW4jV1VJC22URgPOy4ctz5tazHuXPtVehV0%2BfV7a3d0xFEMNYa4UeZbnofe%2FR5U6y0vWdn9p2oo9kiKwihqKRDWD2A8GJQUrSNq4tlHmsbcNdwiIVnBFnfqvBFaetM0SRiyB4JL%2BlKPnyo2UGU9pnym2K6wSF12ikqGpb4OaudeF3lv1AmMSdXi8o9%2Blf3yqsTAN2Phqq%2F8T2PjPES82oigfsaj8YWR9QVf1Z1dT6mby%2FoPDxszzcWZPlACyrgoZP7ZCV39wOCutGQ0evaYKyWU7QiYeWtIwAfYbgw43eftauP5Ylr%2Bz5U%2BGAN0DLtTGlIfO700TayI6wL4nV0o1pUj2wE%2FBPmwIoHzhDbrW0pgASnvfOX0QQi6BcYcydtD1d2%2FF1gnjjE1eWN1gSr0Jux5a7AjvP0JxNc6X9k%2FsrXX8rWyPpg%2FpBGCEMNPZGqAyI7RglaU7VDiiv%2FQEYoDR%2F0oja4Sp5TngD8myJJkkCVKAvXKzm1Cy00DxtiRTCYtLbDBjqkAds9hfh26Lqbvy3FO1TfepnOzjRSsv5IixAAp48938YcIa4GuBrARO6N8Fyo9u%2Fjxd0cd1qxfe54n0CmA8hCtDFazeoXkSp9nHAT%2BUT3%2BZl6GhUN%2Bj8mi1UMjrstLItcJkmcOsI4M%2B28nLT%2FbdTqLBMIehKRRhpEOwfYtPD9h1ny3XjBTPA0rk7epYoViTYS%2Bngmho3OLQDXm%2FUffhm2oFSlJ8zf&X-Amz-Signature=98ad76ea96cd5df0c03b8d962563246bbacdfae0115b5841f5511b3300d4a580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5TOSSGA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjifUFv51i5ynadS01AS6YF9mbL9b8Aia6TdzxqUC03wIhAM1Jxs31OA59PFkNnyWeaH%2B%2BB%2BV2%2BPcdWY09LVkmzkA0KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfDlZm6If5m2Cn9gEq3APdhnWGJvoQzVN7jddcHTagG3Cy%2FKUZ7lCvecv%2FbV2Br6o0g60RaHZXat9EXq17kWKLhj0p8cP8fbiqV%2BmOQQ3k%2BpBPQGYKxcdinyj%2FpnevQkLl%2BG%2FzBvbfqskuvjFQ5HYW4jV1VJC22URgPOy4ctz5tazHuXPtVehV0%2BfV7a3d0xFEMNYa4UeZbnofe%2FR5U6y0vWdn9p2oo9kiKwihqKRDWD2A8GJQUrSNq4tlHmsbcNdwiIVnBFnfqvBFaetM0SRiyB4JL%2BlKPnyo2UGU9pnym2K6wSF12ikqGpb4OaudeF3lv1AmMSdXi8o9%2Blf3yqsTAN2Phqq%2F8T2PjPES82oigfsaj8YWR9QVf1Z1dT6mby%2FoPDxszzcWZPlACyrgoZP7ZCV39wOCutGQ0evaYKyWU7QiYeWtIwAfYbgw43eftauP5Ylr%2Bz5U%2BGAN0DLtTGlIfO700TayI6wL4nV0o1pUj2wE%2FBPmwIoHzhDbrW0pgASnvfOX0QQi6BcYcydtD1d2%2FF1gnjjE1eWN1gSr0Jux5a7AjvP0JxNc6X9k%2FsrXX8rWyPpg%2FpBGCEMNPZGqAyI7RglaU7VDiiv%2FQEYoDR%2F0oja4Sp5TngD8myJJkkCVKAvXKzm1Cy00DxtiRTCYtLbDBjqkAds9hfh26Lqbvy3FO1TfepnOzjRSsv5IixAAp48938YcIa4GuBrARO6N8Fyo9u%2Fjxd0cd1qxfe54n0CmA8hCtDFazeoXkSp9nHAT%2BUT3%2BZl6GhUN%2Bj8mi1UMjrstLItcJkmcOsI4M%2B28nLT%2FbdTqLBMIehKRRhpEOwfYtPD9h1ny3XjBTPA0rk7epYoViTYS%2Bngmho3OLQDXm%2FUffhm2oFSlJ8zf&X-Amz-Signature=69dd7c15d1fb224c8944a5fd860b134f359052c0f9e4e155117c057b38a6f8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
