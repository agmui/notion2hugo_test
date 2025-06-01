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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UZNESB%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCID7JHppj5WBbsA%2B3jxik5HsH%2Fb78nhPrGVI4gyjdxQIuAiEA0X31L5rus866urzhv26d0AxGx9L%2BvcE9jLDr%2FaS24xUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmcQ9%2F%2F2T2Ss8xyZyrcA4kPH%2FVpW6jE3DKRQoa929pcNWInDQlUp0afqOvCrtPiVQqkr8Hp4OV71ioboKlO6fXgTR6%2BVJ%2Burg6eoFpyk7FW8KQuw%2FOLtzovMJn7AiAf%2FFJpRG7IXooRZF%2FDltaCMhFMMxuk3z8FDIB7h5tyBJcV4hZ6dgy0EOjAEEr6fq3CPBTSao5LCKLF58gAPwI%2FmLi%2B0Iwkd7umdXkMf%2B6V8j%2FY3jjHXAHxpY%2BmWpO%2FZUfbt9%2FVVHZtxc%2F5ltS1Oi9XdKNseqUlYoyjbn85xeEvFobFz3gE3BPpxAuYL%2BIQQQA1thKHJ6KkVek%2Bod%2FeHn9oibDAv%2F%2FR10nzI5DF%2B1xbmTy7%2FAo%2FI3u%2F53QLh20H0aHXmTlFi4fwFZkjMGzF6Gz2g0%2Bn1a8Qpi%2FxEmJlQ%2B1hsZK3pQFokbrJkK2LYqv1%2FuDiu6YNkXqbKG41dI4LDwNaWyCaFFQwgYzaRskzdtSVCF0TTvCvZ5CnHe2QWkvDNpWhnUmm%2FDa3fDUJYZsj24LtK9UEKJgFE4u5WLpswwZjo0m0AAWz%2BCq2j6MiC2BCVL6Ya1CLBL3%2BDk1gsx6CbAgBhO555BHVUsda%2BiIx0Y%2BO91HQTXerPRoZflZ18ar9GOOmwKbnt%2B%2FsfzT3SFIeMMzL78EGOqUB%2FsQbwAPkSWJm9JCTZ17XMx%2FVRUcGlHaq2qRfKS0fu%2BK8vZIQlOvNQKk%2BV5JjGO5VU75%2FWMeJOyU5sbnFl6wPnNk8c96%2F3gXpieNNGV%2FAxmTqL8cpRfso2q1xQRjlGhgYpECYcHY4pXjjFVtDGEK2XOH0rQpQvtNuTZq9jXyqQIp%2Fv8H6JaSsX%2B%2FGtpsv0DtJeWSDM3E7uHtGiaOX%2BIi%2FYVzZ4sRX&X-Amz-Signature=4ad66c0fadd9a5a053e8f5f96b2b2290dcb6ea5a1eedfa0b16d50721f8a27983&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UZNESB%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCID7JHppj5WBbsA%2B3jxik5HsH%2Fb78nhPrGVI4gyjdxQIuAiEA0X31L5rus866urzhv26d0AxGx9L%2BvcE9jLDr%2FaS24xUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmcQ9%2F%2F2T2Ss8xyZyrcA4kPH%2FVpW6jE3DKRQoa929pcNWInDQlUp0afqOvCrtPiVQqkr8Hp4OV71ioboKlO6fXgTR6%2BVJ%2Burg6eoFpyk7FW8KQuw%2FOLtzovMJn7AiAf%2FFJpRG7IXooRZF%2FDltaCMhFMMxuk3z8FDIB7h5tyBJcV4hZ6dgy0EOjAEEr6fq3CPBTSao5LCKLF58gAPwI%2FmLi%2B0Iwkd7umdXkMf%2B6V8j%2FY3jjHXAHxpY%2BmWpO%2FZUfbt9%2FVVHZtxc%2F5ltS1Oi9XdKNseqUlYoyjbn85xeEvFobFz3gE3BPpxAuYL%2BIQQQA1thKHJ6KkVek%2Bod%2FeHn9oibDAv%2F%2FR10nzI5DF%2B1xbmTy7%2FAo%2FI3u%2F53QLh20H0aHXmTlFi4fwFZkjMGzF6Gz2g0%2Bn1a8Qpi%2FxEmJlQ%2B1hsZK3pQFokbrJkK2LYqv1%2FuDiu6YNkXqbKG41dI4LDwNaWyCaFFQwgYzaRskzdtSVCF0TTvCvZ5CnHe2QWkvDNpWhnUmm%2FDa3fDUJYZsj24LtK9UEKJgFE4u5WLpswwZjo0m0AAWz%2BCq2j6MiC2BCVL6Ya1CLBL3%2BDk1gsx6CbAgBhO555BHVUsda%2BiIx0Y%2BO91HQTXerPRoZflZ18ar9GOOmwKbnt%2B%2FsfzT3SFIeMMzL78EGOqUB%2FsQbwAPkSWJm9JCTZ17XMx%2FVRUcGlHaq2qRfKS0fu%2BK8vZIQlOvNQKk%2BV5JjGO5VU75%2FWMeJOyU5sbnFl6wPnNk8c96%2F3gXpieNNGV%2FAxmTqL8cpRfso2q1xQRjlGhgYpECYcHY4pXjjFVtDGEK2XOH0rQpQvtNuTZq9jXyqQIp%2Fv8H6JaSsX%2B%2FGtpsv0DtJeWSDM3E7uHtGiaOX%2BIi%2FYVzZ4sRX&X-Amz-Signature=426342700608b2cc1a66ad98ba638877b876669e1024af1384273845f61bd682&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UZNESB%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCID7JHppj5WBbsA%2B3jxik5HsH%2Fb78nhPrGVI4gyjdxQIuAiEA0X31L5rus866urzhv26d0AxGx9L%2BvcE9jLDr%2FaS24xUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmcQ9%2F%2F2T2Ss8xyZyrcA4kPH%2FVpW6jE3DKRQoa929pcNWInDQlUp0afqOvCrtPiVQqkr8Hp4OV71ioboKlO6fXgTR6%2BVJ%2Burg6eoFpyk7FW8KQuw%2FOLtzovMJn7AiAf%2FFJpRG7IXooRZF%2FDltaCMhFMMxuk3z8FDIB7h5tyBJcV4hZ6dgy0EOjAEEr6fq3CPBTSao5LCKLF58gAPwI%2FmLi%2B0Iwkd7umdXkMf%2B6V8j%2FY3jjHXAHxpY%2BmWpO%2FZUfbt9%2FVVHZtxc%2F5ltS1Oi9XdKNseqUlYoyjbn85xeEvFobFz3gE3BPpxAuYL%2BIQQQA1thKHJ6KkVek%2Bod%2FeHn9oibDAv%2F%2FR10nzI5DF%2B1xbmTy7%2FAo%2FI3u%2F53QLh20H0aHXmTlFi4fwFZkjMGzF6Gz2g0%2Bn1a8Qpi%2FxEmJlQ%2B1hsZK3pQFokbrJkK2LYqv1%2FuDiu6YNkXqbKG41dI4LDwNaWyCaFFQwgYzaRskzdtSVCF0TTvCvZ5CnHe2QWkvDNpWhnUmm%2FDa3fDUJYZsj24LtK9UEKJgFE4u5WLpswwZjo0m0AAWz%2BCq2j6MiC2BCVL6Ya1CLBL3%2BDk1gsx6CbAgBhO555BHVUsda%2BiIx0Y%2BO91HQTXerPRoZflZ18ar9GOOmwKbnt%2B%2FsfzT3SFIeMMzL78EGOqUB%2FsQbwAPkSWJm9JCTZ17XMx%2FVRUcGlHaq2qRfKS0fu%2BK8vZIQlOvNQKk%2BV5JjGO5VU75%2FWMeJOyU5sbnFl6wPnNk8c96%2F3gXpieNNGV%2FAxmTqL8cpRfso2q1xQRjlGhgYpECYcHY4pXjjFVtDGEK2XOH0rQpQvtNuTZq9jXyqQIp%2Fv8H6JaSsX%2B%2FGtpsv0DtJeWSDM3E7uHtGiaOX%2BIi%2FYVzZ4sRX&X-Amz-Signature=99d8dc5ea6d026afd441e80472ca885a83c97d3b3a199f3111bae90b232d1d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
