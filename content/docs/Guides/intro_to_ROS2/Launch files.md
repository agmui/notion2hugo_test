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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IE4NQT7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD4r4IMVIycekfryKuCg91y0F94klivMJUEC6Eh8FAG3AIgPJgR%2BTI1imhuGV7LGGIXVFHBsxApHfIDWbD2w7%2FXMkUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOKPydh7QMszlyIKircA1wHxXfizSiz992RFCZCLTwDN2sEvnqT0WQ5bIPuQKAKC2KP%2F6fvPsS%2FBp6WYYk3FO7kbC35uex57V93Jv5VRX9tbXxcECv%2BznNtn%2F%2FoSvdhsgL3cpoFzHADuf3lKmCKowtK9%2BnUUo63ESb5B5wVR0KSFNDJ8AqL4o40yW3ZdWD8rWRh7LHiWyCCS8EVe7FEcDmv1NJREn%2B6Kqq2MGlW0z%2BbhpDH8i%2BwgA31JS9JqNyMRSQC6syKtFkyl5LP4x36pDe1WcU9NGVnuh%2FnZCQEN8rl3yAgiVKtKCIEsqPeZr137iU%2Fqus5GikVFRMb2VCpU6eEMjRdQFli9U3Q9cA%2BR4vwCt1Mth0RDl%2FQX2KIy3WFdG3qrIeyva6XULYecbaPfGlupZcVCEYlS4XM%2Bwm9ueljPDCI0v5K4yrY0UZ4LpfE03t3IV6zjZF4KLNemNWNuh5c%2BIVb0GzrlXHw3n8HIMyz9Z2j4H5it4hMfDCJzeSaF63JEUTFfczpFh7bs2C7AsbTElnNWaTwwJAFnyDazY1zwbNK8zgTaBPhGk%2BJCPK3crojG5wHcanpKCymn5A6OKjGlmAe7k%2B0bm7Z0E4tDxI2rbj2tS1UJ0GxwvEOdCpKDEQKKdx7rObFfmmNMJPF28QGOqUB3kdxDov46GulA%2FRccOg3Zqf0ozgPbK7h5QQJKIkpoUIYRIv%2FhTu0YTM12IUPH2TibJPvx2%2BzGFacQB7Jj7vQzUeK62ofPAY5DpoEHN9%2FlBl1nj1JBJu8Xwo%2FSs%2F0tcjtQu3ioSxaPH%2FE9VEwfSsiKP8bMFoFs7Kn%2F8ZeqFYHm2PmPvcHPt8R3ezHJHGgrewVjWd7WBFVIGmLd6TYbqLwpd7cy7U8&X-Amz-Signature=90c862f3625e9c987359ecb17e369e9e660be166053384d10b68a78a2a25c74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IE4NQT7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD4r4IMVIycekfryKuCg91y0F94klivMJUEC6Eh8FAG3AIgPJgR%2BTI1imhuGV7LGGIXVFHBsxApHfIDWbD2w7%2FXMkUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOKPydh7QMszlyIKircA1wHxXfizSiz992RFCZCLTwDN2sEvnqT0WQ5bIPuQKAKC2KP%2F6fvPsS%2FBp6WYYk3FO7kbC35uex57V93Jv5VRX9tbXxcECv%2BznNtn%2F%2FoSvdhsgL3cpoFzHADuf3lKmCKowtK9%2BnUUo63ESb5B5wVR0KSFNDJ8AqL4o40yW3ZdWD8rWRh7LHiWyCCS8EVe7FEcDmv1NJREn%2B6Kqq2MGlW0z%2BbhpDH8i%2BwgA31JS9JqNyMRSQC6syKtFkyl5LP4x36pDe1WcU9NGVnuh%2FnZCQEN8rl3yAgiVKtKCIEsqPeZr137iU%2Fqus5GikVFRMb2VCpU6eEMjRdQFli9U3Q9cA%2BR4vwCt1Mth0RDl%2FQX2KIy3WFdG3qrIeyva6XULYecbaPfGlupZcVCEYlS4XM%2Bwm9ueljPDCI0v5K4yrY0UZ4LpfE03t3IV6zjZF4KLNemNWNuh5c%2BIVb0GzrlXHw3n8HIMyz9Z2j4H5it4hMfDCJzeSaF63JEUTFfczpFh7bs2C7AsbTElnNWaTwwJAFnyDazY1zwbNK8zgTaBPhGk%2BJCPK3crojG5wHcanpKCymn5A6OKjGlmAe7k%2B0bm7Z0E4tDxI2rbj2tS1UJ0GxwvEOdCpKDEQKKdx7rObFfmmNMJPF28QGOqUB3kdxDov46GulA%2FRccOg3Zqf0ozgPbK7h5QQJKIkpoUIYRIv%2FhTu0YTM12IUPH2TibJPvx2%2BzGFacQB7Jj7vQzUeK62ofPAY5DpoEHN9%2FlBl1nj1JBJu8Xwo%2FSs%2F0tcjtQu3ioSxaPH%2FE9VEwfSsiKP8bMFoFs7Kn%2F8ZeqFYHm2PmPvcHPt8R3ezHJHGgrewVjWd7WBFVIGmLd6TYbqLwpd7cy7U8&X-Amz-Signature=c83c358b0388b808fb92dba26544a112c8abcb5d8beceb5216568327dd9d3cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IE4NQT7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD4r4IMVIycekfryKuCg91y0F94klivMJUEC6Eh8FAG3AIgPJgR%2BTI1imhuGV7LGGIXVFHBsxApHfIDWbD2w7%2FXMkUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOKPydh7QMszlyIKircA1wHxXfizSiz992RFCZCLTwDN2sEvnqT0WQ5bIPuQKAKC2KP%2F6fvPsS%2FBp6WYYk3FO7kbC35uex57V93Jv5VRX9tbXxcECv%2BznNtn%2F%2FoSvdhsgL3cpoFzHADuf3lKmCKowtK9%2BnUUo63ESb5B5wVR0KSFNDJ8AqL4o40yW3ZdWD8rWRh7LHiWyCCS8EVe7FEcDmv1NJREn%2B6Kqq2MGlW0z%2BbhpDH8i%2BwgA31JS9JqNyMRSQC6syKtFkyl5LP4x36pDe1WcU9NGVnuh%2FnZCQEN8rl3yAgiVKtKCIEsqPeZr137iU%2Fqus5GikVFRMb2VCpU6eEMjRdQFli9U3Q9cA%2BR4vwCt1Mth0RDl%2FQX2KIy3WFdG3qrIeyva6XULYecbaPfGlupZcVCEYlS4XM%2Bwm9ueljPDCI0v5K4yrY0UZ4LpfE03t3IV6zjZF4KLNemNWNuh5c%2BIVb0GzrlXHw3n8HIMyz9Z2j4H5it4hMfDCJzeSaF63JEUTFfczpFh7bs2C7AsbTElnNWaTwwJAFnyDazY1zwbNK8zgTaBPhGk%2BJCPK3crojG5wHcanpKCymn5A6OKjGlmAe7k%2B0bm7Z0E4tDxI2rbj2tS1UJ0GxwvEOdCpKDEQKKdx7rObFfmmNMJPF28QGOqUB3kdxDov46GulA%2FRccOg3Zqf0ozgPbK7h5QQJKIkpoUIYRIv%2FhTu0YTM12IUPH2TibJPvx2%2BzGFacQB7Jj7vQzUeK62ofPAY5DpoEHN9%2FlBl1nj1JBJu8Xwo%2FSs%2F0tcjtQu3ioSxaPH%2FE9VEwfSsiKP8bMFoFs7Kn%2F8ZeqFYHm2PmPvcHPt8R3ezHJHGgrewVjWd7WBFVIGmLd6TYbqLwpd7cy7U8&X-Amz-Signature=f950c605d9e883eaf5c4989469a5355fcb0b7a9df97b6c9aaef7849a48a6457f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
