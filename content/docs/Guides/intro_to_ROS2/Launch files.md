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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOPCCTG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgV%2FNBdNtlkis1IiZ0fprZ9Yqwl5EmcirwWY%2Bu7oHq4AIhAN8LwyWt3Ut7%2BgjqwcfpEOxERiYZWnGqeITH2AwKYShuKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fk5y9hXDcr%2FKTgjkq3AO6puzEC4btJQF4iwGhx6rAIvfNFuLlp%2BdEp3TVyNcBkR8khTaOfk%2B1tiW%2F%2FJfvjKYGpycWUddhrpEsRT7gqIJjJfa66cGBPSVCJs%2FAH%2FDWE1Hxk%2F8KBrenrrdFfQ7QX3GHwwngDW6zUeNntylJ9ghiS6QgPF5MrF5iBHufuA9cxyAf%2Bwn8t4Xg7VcwvJJcOCCaQNsTtOgJ3oT2LwnwNhDyzglOJAzv4%2FMuT66vH4GY4LDM2aGgiuEAzgPf7j5YI3y9I%2Fk7aOlqnR2%2FCzJwJCYRbKt250H53IKwyJ8D42oMBbW9a2O16TyNLA%2Bz0BLTeflxXRa54gbcrShS2o2SvKo6FlEkuGVgoohNP66dRMTnFOXHtFOCA0YzX76FU%2FU5c1WkjlUY5SuS3m9%2FAj4k7ncXFP%2B1LcYxMXKEVjwutJ7J66tngWK7B4gUuDilJ4h1BNqoSzs5R3ipe4OS%2F5fI56SqfILIhkObHMd6%2F1uiu3xFbKFsN7heGmgyyEvOyto3hFHElNvaLtUEholizeB91g10byTWLht%2Fs2nv1PEIRdnKh0P3HgpkJh4AN0GOKy1FLENSkrQVS6uqUqlJYeZRSFQasAH5ifO7Ljaj1nMDfSGjceQtaSJtxkzG3SmqHTCf%2Fd%2FBBjqkAXBT3QBtD1BAvx7oYUUIU99srx7P8KjCNSmStAwIsP%2FnlpoxOPhzVWl1cFP28YasTFxNDFfZVmDv6K2DIff%2BhFw%2B3wjOCU4gA1fCcGVkkr1ylVC0C2DAD5YNFN7R3MFjzvyPfRGp%2BAiqXkPF%2Bb57xXLJuGTV1yte%2BSDGIIxNM3V2m7nvox6a%2Bere%2FzHSqVoEYIqk%2F61L%2FbrYBqY3Wm53%2BnZmrj4Y&X-Amz-Signature=403db2c9638501c7ef2a5f61930ff9812f0a44800d2538f4ab51d9a108f4e892&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOPCCTG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgV%2FNBdNtlkis1IiZ0fprZ9Yqwl5EmcirwWY%2Bu7oHq4AIhAN8LwyWt3Ut7%2BgjqwcfpEOxERiYZWnGqeITH2AwKYShuKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fk5y9hXDcr%2FKTgjkq3AO6puzEC4btJQF4iwGhx6rAIvfNFuLlp%2BdEp3TVyNcBkR8khTaOfk%2B1tiW%2F%2FJfvjKYGpycWUddhrpEsRT7gqIJjJfa66cGBPSVCJs%2FAH%2FDWE1Hxk%2F8KBrenrrdFfQ7QX3GHwwngDW6zUeNntylJ9ghiS6QgPF5MrF5iBHufuA9cxyAf%2Bwn8t4Xg7VcwvJJcOCCaQNsTtOgJ3oT2LwnwNhDyzglOJAzv4%2FMuT66vH4GY4LDM2aGgiuEAzgPf7j5YI3y9I%2Fk7aOlqnR2%2FCzJwJCYRbKt250H53IKwyJ8D42oMBbW9a2O16TyNLA%2Bz0BLTeflxXRa54gbcrShS2o2SvKo6FlEkuGVgoohNP66dRMTnFOXHtFOCA0YzX76FU%2FU5c1WkjlUY5SuS3m9%2FAj4k7ncXFP%2B1LcYxMXKEVjwutJ7J66tngWK7B4gUuDilJ4h1BNqoSzs5R3ipe4OS%2F5fI56SqfILIhkObHMd6%2F1uiu3xFbKFsN7heGmgyyEvOyto3hFHElNvaLtUEholizeB91g10byTWLht%2Fs2nv1PEIRdnKh0P3HgpkJh4AN0GOKy1FLENSkrQVS6uqUqlJYeZRSFQasAH5ifO7Ljaj1nMDfSGjceQtaSJtxkzG3SmqHTCf%2Fd%2FBBjqkAXBT3QBtD1BAvx7oYUUIU99srx7P8KjCNSmStAwIsP%2FnlpoxOPhzVWl1cFP28YasTFxNDFfZVmDv6K2DIff%2BhFw%2B3wjOCU4gA1fCcGVkkr1ylVC0C2DAD5YNFN7R3MFjzvyPfRGp%2BAiqXkPF%2Bb57xXLJuGTV1yte%2BSDGIIxNM3V2m7nvox6a%2Bere%2FzHSqVoEYIqk%2F61L%2FbrYBqY3Wm53%2BnZmrj4Y&X-Amz-Signature=81a63aa87ba83fcefe3df2b1826f6b98135b86bc9af495473b8b200e36c5287b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOPCCTG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgV%2FNBdNtlkis1IiZ0fprZ9Yqwl5EmcirwWY%2Bu7oHq4AIhAN8LwyWt3Ut7%2BgjqwcfpEOxERiYZWnGqeITH2AwKYShuKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fk5y9hXDcr%2FKTgjkq3AO6puzEC4btJQF4iwGhx6rAIvfNFuLlp%2BdEp3TVyNcBkR8khTaOfk%2B1tiW%2F%2FJfvjKYGpycWUddhrpEsRT7gqIJjJfa66cGBPSVCJs%2FAH%2FDWE1Hxk%2F8KBrenrrdFfQ7QX3GHwwngDW6zUeNntylJ9ghiS6QgPF5MrF5iBHufuA9cxyAf%2Bwn8t4Xg7VcwvJJcOCCaQNsTtOgJ3oT2LwnwNhDyzglOJAzv4%2FMuT66vH4GY4LDM2aGgiuEAzgPf7j5YI3y9I%2Fk7aOlqnR2%2FCzJwJCYRbKt250H53IKwyJ8D42oMBbW9a2O16TyNLA%2Bz0BLTeflxXRa54gbcrShS2o2SvKo6FlEkuGVgoohNP66dRMTnFOXHtFOCA0YzX76FU%2FU5c1WkjlUY5SuS3m9%2FAj4k7ncXFP%2B1LcYxMXKEVjwutJ7J66tngWK7B4gUuDilJ4h1BNqoSzs5R3ipe4OS%2F5fI56SqfILIhkObHMd6%2F1uiu3xFbKFsN7heGmgyyEvOyto3hFHElNvaLtUEholizeB91g10byTWLht%2Fs2nv1PEIRdnKh0P3HgpkJh4AN0GOKy1FLENSkrQVS6uqUqlJYeZRSFQasAH5ifO7Ljaj1nMDfSGjceQtaSJtxkzG3SmqHTCf%2Fd%2FBBjqkAXBT3QBtD1BAvx7oYUUIU99srx7P8KjCNSmStAwIsP%2FnlpoxOPhzVWl1cFP28YasTFxNDFfZVmDv6K2DIff%2BhFw%2B3wjOCU4gA1fCcGVkkr1ylVC0C2DAD5YNFN7R3MFjzvyPfRGp%2BAiqXkPF%2Bb57xXLJuGTV1yte%2BSDGIIxNM3V2m7nvox6a%2Bere%2FzHSqVoEYIqk%2F61L%2FbrYBqY3Wm53%2BnZmrj4Y&X-Amz-Signature=aa0c141bb5cff4285e7025b9d255e393d3141f59e77a6e38f398364aa52a81d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
