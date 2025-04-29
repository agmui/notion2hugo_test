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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JBP3PP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY79iA8zAF2Mz9gvRRp1rAERkwdnoAf1l0PoQrbIWjbwIhAL3Ytbe8iZKj%2FHVYzh3XvfoKGLGTnlfk4ccIWmdwfUBzKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynVa164Tii9YeXotUq3AObVfBA3TA39LCcs6WSLdq64pa47xVmV5otI5l4U5txRDB35OMm6onb%2FrTJ68uk8A83OXQvSLak88HM40SXMDUVOCb0Faldp91D8rSTvh%2BjgwH%2BuAJK1XXlUjAxrTWnFkMRfnLwF%2FcLcaj%2BePMhgW2y3y6yNxDcQ4RInng8qL4ruHfH%2BrXo2TrP%2Bql8e%2F%2BPDBmuGeddP6gCqER7L0Rwvhj36AI27lRf6%2Fp3JlsGbma8ViEOxeQFSDJ6sjlwjNhJg7LEc6wyj7j%2BcNHY9gxXKKe7oY3HLZu%2BWC4Nq0oM1axYLicNtCixrjAHDK0ScN%2BJrUw3vOHyHyQu5n4%2BER0B%2BE5hyj%2FMRcFslLNWJ3%2FiWW9CqpGv0jOSyx%2FvDbV7fHO9phuD14cFOAvnfqf6FrJCUoOMgnPPycZoL4lZwW0yJoLVygt%2Fk%2Bf3Yp36FxkSch3MrMCnem9uXEUzfuYd3SLLZ2YRUVC3mlJzlNFqMl%2FPMGxy6BQZNqfemJX9eiQakFSkGCSPQgAKfVGkUCj5RgE%2BVRRkTm%2BYj87CyTqtOurPAlQinX0Z09tRIScCAkxxAXnlEJnk5TQdvvMnCQ8bA2Acv5UboJMJ6nIdTe0%2FgYCBLHeKJbq5jcJ6aqy1BNILPTD9pMPABjqkATyHiXq8UW26PiMv1sT%2BzSqGLvqjB0r5vYhTqaLl%2FUOWUkzXIOB5Mvd7Cc4AhCEsJs3%2FHk6ewdCfdH3TpYySakUNUvxnpAbq3njSlp%2BKh9jXFJcuvKwRGYuGGz8J6H5x8Qh68EIxm4Xpg2JDucV1%2BvMIi08f5dsRfNAqp31SQB6VMJi1zPdX4%2Be%2Fto6eSZQDxQ4YgYdYGyxNVbRqNbZ2FW1hCsL4&X-Amz-Signature=ce3726a9b43d2a4fe85148611952a109d6a5e198b6303efe9f0f388c3074c576&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JBP3PP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY79iA8zAF2Mz9gvRRp1rAERkwdnoAf1l0PoQrbIWjbwIhAL3Ytbe8iZKj%2FHVYzh3XvfoKGLGTnlfk4ccIWmdwfUBzKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynVa164Tii9YeXotUq3AObVfBA3TA39LCcs6WSLdq64pa47xVmV5otI5l4U5txRDB35OMm6onb%2FrTJ68uk8A83OXQvSLak88HM40SXMDUVOCb0Faldp91D8rSTvh%2BjgwH%2BuAJK1XXlUjAxrTWnFkMRfnLwF%2FcLcaj%2BePMhgW2y3y6yNxDcQ4RInng8qL4ruHfH%2BrXo2TrP%2Bql8e%2F%2BPDBmuGeddP6gCqER7L0Rwvhj36AI27lRf6%2Fp3JlsGbma8ViEOxeQFSDJ6sjlwjNhJg7LEc6wyj7j%2BcNHY9gxXKKe7oY3HLZu%2BWC4Nq0oM1axYLicNtCixrjAHDK0ScN%2BJrUw3vOHyHyQu5n4%2BER0B%2BE5hyj%2FMRcFslLNWJ3%2FiWW9CqpGv0jOSyx%2FvDbV7fHO9phuD14cFOAvnfqf6FrJCUoOMgnPPycZoL4lZwW0yJoLVygt%2Fk%2Bf3Yp36FxkSch3MrMCnem9uXEUzfuYd3SLLZ2YRUVC3mlJzlNFqMl%2FPMGxy6BQZNqfemJX9eiQakFSkGCSPQgAKfVGkUCj5RgE%2BVRRkTm%2BYj87CyTqtOurPAlQinX0Z09tRIScCAkxxAXnlEJnk5TQdvvMnCQ8bA2Acv5UboJMJ6nIdTe0%2FgYCBLHeKJbq5jcJ6aqy1BNILPTD9pMPABjqkATyHiXq8UW26PiMv1sT%2BzSqGLvqjB0r5vYhTqaLl%2FUOWUkzXIOB5Mvd7Cc4AhCEsJs3%2FHk6ewdCfdH3TpYySakUNUvxnpAbq3njSlp%2BKh9jXFJcuvKwRGYuGGz8J6H5x8Qh68EIxm4Xpg2JDucV1%2BvMIi08f5dsRfNAqp31SQB6VMJi1zPdX4%2Be%2Fto6eSZQDxQ4YgYdYGyxNVbRqNbZ2FW1hCsL4&X-Amz-Signature=a4f4b8720ba3b92f02e74449ae98b12bd271b32b9e8e90bdd36cf81aa329e510&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JBP3PP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY79iA8zAF2Mz9gvRRp1rAERkwdnoAf1l0PoQrbIWjbwIhAL3Ytbe8iZKj%2FHVYzh3XvfoKGLGTnlfk4ccIWmdwfUBzKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynVa164Tii9YeXotUq3AObVfBA3TA39LCcs6WSLdq64pa47xVmV5otI5l4U5txRDB35OMm6onb%2FrTJ68uk8A83OXQvSLak88HM40SXMDUVOCb0Faldp91D8rSTvh%2BjgwH%2BuAJK1XXlUjAxrTWnFkMRfnLwF%2FcLcaj%2BePMhgW2y3y6yNxDcQ4RInng8qL4ruHfH%2BrXo2TrP%2Bql8e%2F%2BPDBmuGeddP6gCqER7L0Rwvhj36AI27lRf6%2Fp3JlsGbma8ViEOxeQFSDJ6sjlwjNhJg7LEc6wyj7j%2BcNHY9gxXKKe7oY3HLZu%2BWC4Nq0oM1axYLicNtCixrjAHDK0ScN%2BJrUw3vOHyHyQu5n4%2BER0B%2BE5hyj%2FMRcFslLNWJ3%2FiWW9CqpGv0jOSyx%2FvDbV7fHO9phuD14cFOAvnfqf6FrJCUoOMgnPPycZoL4lZwW0yJoLVygt%2Fk%2Bf3Yp36FxkSch3MrMCnem9uXEUzfuYd3SLLZ2YRUVC3mlJzlNFqMl%2FPMGxy6BQZNqfemJX9eiQakFSkGCSPQgAKfVGkUCj5RgE%2BVRRkTm%2BYj87CyTqtOurPAlQinX0Z09tRIScCAkxxAXnlEJnk5TQdvvMnCQ8bA2Acv5UboJMJ6nIdTe0%2FgYCBLHeKJbq5jcJ6aqy1BNILPTD9pMPABjqkATyHiXq8UW26PiMv1sT%2BzSqGLvqjB0r5vYhTqaLl%2FUOWUkzXIOB5Mvd7Cc4AhCEsJs3%2FHk6ewdCfdH3TpYySakUNUvxnpAbq3njSlp%2BKh9jXFJcuvKwRGYuGGz8J6H5x8Qh68EIxm4Xpg2JDucV1%2BvMIi08f5dsRfNAqp31SQB6VMJi1zPdX4%2Be%2Fto6eSZQDxQ4YgYdYGyxNVbRqNbZ2FW1hCsL4&X-Amz-Signature=4d645337a0a2ecfe7095f177507e2e9118063514a02048bb2fa4bbb34b706b76&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
