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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655E5CH42%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCPIXgrjuHSQ7PusO7hwJ4qUViMxr0JX33W5%2BsS3ocQMQIhAOMmD%2BW0H0QgCOeawwovHB28OqZumR5I%2FA0UHn2psKulKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp2Zu%2BhOhai%2FHPuAAq3AMmdoez%2BvpnvkO26xzcpm2XpJ3evRiBJNNkOFYbzrZDpcKYxOqzyLqXls%2FksbwqhZwMPbmdGsFTWU0doJlLX%2FSsf%2B9%2FaRRUKgn4MNSjAICq64NneJldJmpduPPBBZjeoZlZRu0s679E0XLnyLw0LA0f3yg1GmZdBvB2Zst2E0qSxFIxPGcPd1jyyfsO%2F%2BrfL8hnZUdkpYh5jBTvQCI67s1GwHpr9C9criuwwQSQPNe0XkIHuUt%2FqNiS4LtThPz%2FOysrDoaes5TTdX0DupKLj4goX9c1kiqnralMueA5LG8z5JgbNxBPaPZYvdPQBlpB7wSzarKDVV%2FspLKHMdEWINkHSKaBPT1wZpt22vJvQIa4H5F4CEmFehbAKxmcBGcM3rVJO9uU5szN2DH%2BgUefxX%2Fq56BAhXyvbWvSIoddIzScXv63qlg92IMLy2QTCmPHKudwGvP3IjpRGuPsXtY513Q%2FkCJdzB6k%2BmytXqctGgncAmbYO4fGSRb6lqbC2iOTVAPO8euWUPyV9sZr%2B5l5Kb8CjVydgX1YTNZUwEHrox8b9ZVd%2FX9g2%2BX%2BKo77l%2FH4dUQDU9FqRVQ1GbgmvZeYSLFWmrlMdwhNZSeCgg3VRbHvtttpS4We%2FGm0187BJTDRvdHABjqkAfXHCnCDrb8BdxHNz3BsnORtPNfzEgu1wZ06plW%2FV0zwxkuzylv9p0DBw9Ld8qxGkJZ%2BdD7p%2BcleyDYbFMEyRA%2BmT%2FDTOQqE39NUMpA2ObpQHgwKBhOb1uekhNXYogXnSCLW2IJ3miqn1ZWLZJbfVhlISWrVOpTUdX%2BcAuysqN8P965QreUzYUXvgh7ZxiX502p0F9F3w8g0qOX3WuN0Ajosl9ys&X-Amz-Signature=41b6658c2649a58ce827a8c465d21b5879cccc8becf66bd8a94f66feba55a390&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655E5CH42%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCPIXgrjuHSQ7PusO7hwJ4qUViMxr0JX33W5%2BsS3ocQMQIhAOMmD%2BW0H0QgCOeawwovHB28OqZumR5I%2FA0UHn2psKulKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp2Zu%2BhOhai%2FHPuAAq3AMmdoez%2BvpnvkO26xzcpm2XpJ3evRiBJNNkOFYbzrZDpcKYxOqzyLqXls%2FksbwqhZwMPbmdGsFTWU0doJlLX%2FSsf%2B9%2FaRRUKgn4MNSjAICq64NneJldJmpduPPBBZjeoZlZRu0s679E0XLnyLw0LA0f3yg1GmZdBvB2Zst2E0qSxFIxPGcPd1jyyfsO%2F%2BrfL8hnZUdkpYh5jBTvQCI67s1GwHpr9C9criuwwQSQPNe0XkIHuUt%2FqNiS4LtThPz%2FOysrDoaes5TTdX0DupKLj4goX9c1kiqnralMueA5LG8z5JgbNxBPaPZYvdPQBlpB7wSzarKDVV%2FspLKHMdEWINkHSKaBPT1wZpt22vJvQIa4H5F4CEmFehbAKxmcBGcM3rVJO9uU5szN2DH%2BgUefxX%2Fq56BAhXyvbWvSIoddIzScXv63qlg92IMLy2QTCmPHKudwGvP3IjpRGuPsXtY513Q%2FkCJdzB6k%2BmytXqctGgncAmbYO4fGSRb6lqbC2iOTVAPO8euWUPyV9sZr%2B5l5Kb8CjVydgX1YTNZUwEHrox8b9ZVd%2FX9g2%2BX%2BKo77l%2FH4dUQDU9FqRVQ1GbgmvZeYSLFWmrlMdwhNZSeCgg3VRbHvtttpS4We%2FGm0187BJTDRvdHABjqkAfXHCnCDrb8BdxHNz3BsnORtPNfzEgu1wZ06plW%2FV0zwxkuzylv9p0DBw9Ld8qxGkJZ%2BdD7p%2BcleyDYbFMEyRA%2BmT%2FDTOQqE39NUMpA2ObpQHgwKBhOb1uekhNXYogXnSCLW2IJ3miqn1ZWLZJbfVhlISWrVOpTUdX%2BcAuysqN8P965QreUzYUXvgh7ZxiX502p0F9F3w8g0qOX3WuN0Ajosl9ys&X-Amz-Signature=a91476678667a15bbc1af367df161cc868d45a35dbefaf8994fdd90fa2609dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655E5CH42%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCPIXgrjuHSQ7PusO7hwJ4qUViMxr0JX33W5%2BsS3ocQMQIhAOMmD%2BW0H0QgCOeawwovHB28OqZumR5I%2FA0UHn2psKulKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp2Zu%2BhOhai%2FHPuAAq3AMmdoez%2BvpnvkO26xzcpm2XpJ3evRiBJNNkOFYbzrZDpcKYxOqzyLqXls%2FksbwqhZwMPbmdGsFTWU0doJlLX%2FSsf%2B9%2FaRRUKgn4MNSjAICq64NneJldJmpduPPBBZjeoZlZRu0s679E0XLnyLw0LA0f3yg1GmZdBvB2Zst2E0qSxFIxPGcPd1jyyfsO%2F%2BrfL8hnZUdkpYh5jBTvQCI67s1GwHpr9C9criuwwQSQPNe0XkIHuUt%2FqNiS4LtThPz%2FOysrDoaes5TTdX0DupKLj4goX9c1kiqnralMueA5LG8z5JgbNxBPaPZYvdPQBlpB7wSzarKDVV%2FspLKHMdEWINkHSKaBPT1wZpt22vJvQIa4H5F4CEmFehbAKxmcBGcM3rVJO9uU5szN2DH%2BgUefxX%2Fq56BAhXyvbWvSIoddIzScXv63qlg92IMLy2QTCmPHKudwGvP3IjpRGuPsXtY513Q%2FkCJdzB6k%2BmytXqctGgncAmbYO4fGSRb6lqbC2iOTVAPO8euWUPyV9sZr%2B5l5Kb8CjVydgX1YTNZUwEHrox8b9ZVd%2FX9g2%2BX%2BKo77l%2FH4dUQDU9FqRVQ1GbgmvZeYSLFWmrlMdwhNZSeCgg3VRbHvtttpS4We%2FGm0187BJTDRvdHABjqkAfXHCnCDrb8BdxHNz3BsnORtPNfzEgu1wZ06plW%2FV0zwxkuzylv9p0DBw9Ld8qxGkJZ%2BdD7p%2BcleyDYbFMEyRA%2BmT%2FDTOQqE39NUMpA2ObpQHgwKBhOb1uekhNXYogXnSCLW2IJ3miqn1ZWLZJbfVhlISWrVOpTUdX%2BcAuysqN8P965QreUzYUXvgh7ZxiX502p0F9F3w8g0qOX3WuN0Ajosl9ys&X-Amz-Signature=664e81b7928229b6eb3e16b1ec2a083775de29fb201b248d7f96508cddc4d384&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
