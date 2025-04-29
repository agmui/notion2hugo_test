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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652X6TXDJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFN%2FIEqxzC%2F%2BYTnoimxJIeZTfBvcDBm7QXWm2Mnd8gePAiEA4zbIxr0FBGMjRzH8chgDqV%2BzRb0WXSzNH2DeUizvPeEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJpYHYV102P95utxSrcA73wViSZrF9s3zlXh%2Fxs2Ike5p2lEvdQR41f3z%2BsDp%2BqjLLlJtfMpmm0rPgNOCrSk36VuRfzZ2x7EHlS7r5hmtyEoFW1dP%2F83J83s62MCE7%2FfnhyAaVuTJcWJg8Zuu4G32rPwQ00mRUMv%2BuzQ4VUxmEEsdEwAFgcd5XJdb1HSjDUQ1KJlY49VrX14Yj3pcGwsh2CcxOAk%2BjhD%2BSnEJAvZgeIWVioPv6BKANd8%2Fwr4ZCL1UVtihAVN%2FG1UMow70uXHGLL8VnpJjqie8kmMQi%2BtTDns%2BKr8ICm5axxsfDEfsnzUnOevXRzNsZnnFpCoy9TobskhmHMVVaIZDwp59c%2Brs2D8UDNRQalHzv19dzJ%2FqshY55FtMUAUncBh8G%2BXVVnibZLl8ROgO5jdPwoyEr2zhhcPspSgcrm7%2FfDJxe58CtVv1Hmqmg6SMAFzv6wnSsxnip09O01NnXI76s8fMgZCSKvxy%2B%2B2Gza5nXzQNf4pg4w4o5XCKUMvAw8cWy4%2B9uiZ6t79gOjSOfsMfPQ6BVM9tJv3yc0iOvCIJcgaz%2B8QvhgjAaWvmmTNnTVmnMZBSpsM2ocwMl2yu5WGUxQhvsbk0nw91rnuulqsok9u2BOjbkHik3%2FpCqEXy2fNlPmMJeLwsAGOqUBP7G9JE%2FaFfKsZGNKWkWNBHlQU9DOEA8rqNTd42cLyJIlHL6pZ%2FhldchEbfHarj%2F3X7MGVoeXkqRmsu%2BS35W%2BW0uFjHNhmDuhw5LkbKptbh41UNuiLHy74b2WwO6lqrDHTQnDJNxLspB3ZZHEsaSgNp%2Bxe1wNO0YTYuS2JD1i85EwKek%2FjfUDdGPfne8%2Bbm%2FKYiV9c9Ux9MfpUN%2F685mM%2FwgH1zMd&X-Amz-Signature=13307c221084e32396ee9976a8eddb4c1864af2fe6e1aa0c55a5803510aa0d46&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652X6TXDJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFN%2FIEqxzC%2F%2BYTnoimxJIeZTfBvcDBm7QXWm2Mnd8gePAiEA4zbIxr0FBGMjRzH8chgDqV%2BzRb0WXSzNH2DeUizvPeEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJpYHYV102P95utxSrcA73wViSZrF9s3zlXh%2Fxs2Ike5p2lEvdQR41f3z%2BsDp%2BqjLLlJtfMpmm0rPgNOCrSk36VuRfzZ2x7EHlS7r5hmtyEoFW1dP%2F83J83s62MCE7%2FfnhyAaVuTJcWJg8Zuu4G32rPwQ00mRUMv%2BuzQ4VUxmEEsdEwAFgcd5XJdb1HSjDUQ1KJlY49VrX14Yj3pcGwsh2CcxOAk%2BjhD%2BSnEJAvZgeIWVioPv6BKANd8%2Fwr4ZCL1UVtihAVN%2FG1UMow70uXHGLL8VnpJjqie8kmMQi%2BtTDns%2BKr8ICm5axxsfDEfsnzUnOevXRzNsZnnFpCoy9TobskhmHMVVaIZDwp59c%2Brs2D8UDNRQalHzv19dzJ%2FqshY55FtMUAUncBh8G%2BXVVnibZLl8ROgO5jdPwoyEr2zhhcPspSgcrm7%2FfDJxe58CtVv1Hmqmg6SMAFzv6wnSsxnip09O01NnXI76s8fMgZCSKvxy%2B%2B2Gza5nXzQNf4pg4w4o5XCKUMvAw8cWy4%2B9uiZ6t79gOjSOfsMfPQ6BVM9tJv3yc0iOvCIJcgaz%2B8QvhgjAaWvmmTNnTVmnMZBSpsM2ocwMl2yu5WGUxQhvsbk0nw91rnuulqsok9u2BOjbkHik3%2FpCqEXy2fNlPmMJeLwsAGOqUBP7G9JE%2FaFfKsZGNKWkWNBHlQU9DOEA8rqNTd42cLyJIlHL6pZ%2FhldchEbfHarj%2F3X7MGVoeXkqRmsu%2BS35W%2BW0uFjHNhmDuhw5LkbKptbh41UNuiLHy74b2WwO6lqrDHTQnDJNxLspB3ZZHEsaSgNp%2Bxe1wNO0YTYuS2JD1i85EwKek%2FjfUDdGPfne8%2Bbm%2FKYiV9c9Ux9MfpUN%2F685mM%2FwgH1zMd&X-Amz-Signature=5fe2dbb3c70f95b9483f680fb8d49e39e1311965059de4f70e37854b0f04d780&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652X6TXDJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFN%2FIEqxzC%2F%2BYTnoimxJIeZTfBvcDBm7QXWm2Mnd8gePAiEA4zbIxr0FBGMjRzH8chgDqV%2BzRb0WXSzNH2DeUizvPeEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJpYHYV102P95utxSrcA73wViSZrF9s3zlXh%2Fxs2Ike5p2lEvdQR41f3z%2BsDp%2BqjLLlJtfMpmm0rPgNOCrSk36VuRfzZ2x7EHlS7r5hmtyEoFW1dP%2F83J83s62MCE7%2FfnhyAaVuTJcWJg8Zuu4G32rPwQ00mRUMv%2BuzQ4VUxmEEsdEwAFgcd5XJdb1HSjDUQ1KJlY49VrX14Yj3pcGwsh2CcxOAk%2BjhD%2BSnEJAvZgeIWVioPv6BKANd8%2Fwr4ZCL1UVtihAVN%2FG1UMow70uXHGLL8VnpJjqie8kmMQi%2BtTDns%2BKr8ICm5axxsfDEfsnzUnOevXRzNsZnnFpCoy9TobskhmHMVVaIZDwp59c%2Brs2D8UDNRQalHzv19dzJ%2FqshY55FtMUAUncBh8G%2BXVVnibZLl8ROgO5jdPwoyEr2zhhcPspSgcrm7%2FfDJxe58CtVv1Hmqmg6SMAFzv6wnSsxnip09O01NnXI76s8fMgZCSKvxy%2B%2B2Gza5nXzQNf4pg4w4o5XCKUMvAw8cWy4%2B9uiZ6t79gOjSOfsMfPQ6BVM9tJv3yc0iOvCIJcgaz%2B8QvhgjAaWvmmTNnTVmnMZBSpsM2ocwMl2yu5WGUxQhvsbk0nw91rnuulqsok9u2BOjbkHik3%2FpCqEXy2fNlPmMJeLwsAGOqUBP7G9JE%2FaFfKsZGNKWkWNBHlQU9DOEA8rqNTd42cLyJIlHL6pZ%2FhldchEbfHarj%2F3X7MGVoeXkqRmsu%2BS35W%2BW0uFjHNhmDuhw5LkbKptbh41UNuiLHy74b2WwO6lqrDHTQnDJNxLspB3ZZHEsaSgNp%2Bxe1wNO0YTYuS2JD1i85EwKek%2FjfUDdGPfne8%2Bbm%2FKYiV9c9Ux9MfpUN%2F685mM%2FwgH1zMd&X-Amz-Signature=2bc0b14a8c072f4bc56c1476b2642eeb27892f1d6850b8ef847bec755726d8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
