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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBXQWIV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIE0LBuC5TOu7RjqKV09CV2y0f%2BktSY9Bz2Zt03PSVKD%2FAiEAgWoIwp5DVC8VyN%2FpAIwi20RaUz2QrtrLO7VTOu8wIoAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIDfJCSQ611JC0p1yrcA%2FsNT2IJelnhl59ZiyDZmPfS719Wp3hiyiuCvJotH8CtRGbJNac1aPueiB0romBvwB8ISaRZ4e7jfEDMumA9is2Z4JXuQd3h4fUsAisyQK7YzqTE7UPJLqYn%2FgZuWc72suezLib3kUQmblM48GyDSVIx8m0tDXS8dn0jvqM6p%2BMGgozFMflpta%2FoxVALgyHpO3kDY%2BvIe2o8KMOaOygEz4zjwsM45UPnPsZgbE%2FZ3GS4n0rDRHqprxnc6b%2BYlJqk1v8oGy%2FvSdJ9F0qHvVuixWLh%2Bvo8867T0%2BWPA%2FKeyAyEFKc%2BnsYGMn1FA6BncalNInMQRT7O6jpljwyMfzp7enwHytvvtGQtFTMqAPKMQbqflc%2BY2bkTDZo11uSiPO%2FqDN77gikQ36IFJP%2B8a5PBHllIP3FfaxZTOB8B%2BEO%2BosmrHyESN3nT0V15GBRDfACmh57hus5Q%2BRiOHzHP4H10UL2EFSmwjG1eWrOFs8ShfvnpP8KcqwkHKk0SATtq8xEqEUADJMgk7R%2Frv0dMdKSKhwhKnDxqjTkk2bbDg4lC7lClvKk2znnYj%2Bnx68%2F5VZPykqYf98TMU7s4zE6ekszMqonNsLQ8X1ZRdYv9tcBe5KZsDzsxNVWMaYzB1PZ5MNmQ0cQGOqUBNpuBooEol7Ora93GiPDQ2yMWSzEPRYqLKeRl3uFhXzdxHaxUB7K69WCYeXuUZMWjgoP86EW9e30E4Gb%2B4nBZJ%2BRBHwJcG5mIoXLs%2FSrzJiyIsFOwLAal6gb%2FdOi44tt4P6vOl3wNbT4Do4U%2BrL%2BYxyuT8Hbc4orX6W1tqAuWmzqGZLr75AMlAvUrtIv7v7KwxxWhUAGZB3DqDn3bnwhtJeehDSag&X-Amz-Signature=06ea2c56d48ca114f683acfa4c32060e3af2572550e89a61391647116f5b8ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBXQWIV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIE0LBuC5TOu7RjqKV09CV2y0f%2BktSY9Bz2Zt03PSVKD%2FAiEAgWoIwp5DVC8VyN%2FpAIwi20RaUz2QrtrLO7VTOu8wIoAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIDfJCSQ611JC0p1yrcA%2FsNT2IJelnhl59ZiyDZmPfS719Wp3hiyiuCvJotH8CtRGbJNac1aPueiB0romBvwB8ISaRZ4e7jfEDMumA9is2Z4JXuQd3h4fUsAisyQK7YzqTE7UPJLqYn%2FgZuWc72suezLib3kUQmblM48GyDSVIx8m0tDXS8dn0jvqM6p%2BMGgozFMflpta%2FoxVALgyHpO3kDY%2BvIe2o8KMOaOygEz4zjwsM45UPnPsZgbE%2FZ3GS4n0rDRHqprxnc6b%2BYlJqk1v8oGy%2FvSdJ9F0qHvVuixWLh%2Bvo8867T0%2BWPA%2FKeyAyEFKc%2BnsYGMn1FA6BncalNInMQRT7O6jpljwyMfzp7enwHytvvtGQtFTMqAPKMQbqflc%2BY2bkTDZo11uSiPO%2FqDN77gikQ36IFJP%2B8a5PBHllIP3FfaxZTOB8B%2BEO%2BosmrHyESN3nT0V15GBRDfACmh57hus5Q%2BRiOHzHP4H10UL2EFSmwjG1eWrOFs8ShfvnpP8KcqwkHKk0SATtq8xEqEUADJMgk7R%2Frv0dMdKSKhwhKnDxqjTkk2bbDg4lC7lClvKk2znnYj%2Bnx68%2F5VZPykqYf98TMU7s4zE6ekszMqonNsLQ8X1ZRdYv9tcBe5KZsDzsxNVWMaYzB1PZ5MNmQ0cQGOqUBNpuBooEol7Ora93GiPDQ2yMWSzEPRYqLKeRl3uFhXzdxHaxUB7K69WCYeXuUZMWjgoP86EW9e30E4Gb%2B4nBZJ%2BRBHwJcG5mIoXLs%2FSrzJiyIsFOwLAal6gb%2FdOi44tt4P6vOl3wNbT4Do4U%2BrL%2BYxyuT8Hbc4orX6W1tqAuWmzqGZLr75AMlAvUrtIv7v7KwxxWhUAGZB3DqDn3bnwhtJeehDSag&X-Amz-Signature=33b9932e17f543ba3146487733ea7cb6d6dc0cc95c59677640b53e9d81ed6c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBXQWIV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIE0LBuC5TOu7RjqKV09CV2y0f%2BktSY9Bz2Zt03PSVKD%2FAiEAgWoIwp5DVC8VyN%2FpAIwi20RaUz2QrtrLO7VTOu8wIoAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIDfJCSQ611JC0p1yrcA%2FsNT2IJelnhl59ZiyDZmPfS719Wp3hiyiuCvJotH8CtRGbJNac1aPueiB0romBvwB8ISaRZ4e7jfEDMumA9is2Z4JXuQd3h4fUsAisyQK7YzqTE7UPJLqYn%2FgZuWc72suezLib3kUQmblM48GyDSVIx8m0tDXS8dn0jvqM6p%2BMGgozFMflpta%2FoxVALgyHpO3kDY%2BvIe2o8KMOaOygEz4zjwsM45UPnPsZgbE%2FZ3GS4n0rDRHqprxnc6b%2BYlJqk1v8oGy%2FvSdJ9F0qHvVuixWLh%2Bvo8867T0%2BWPA%2FKeyAyEFKc%2BnsYGMn1FA6BncalNInMQRT7O6jpljwyMfzp7enwHytvvtGQtFTMqAPKMQbqflc%2BY2bkTDZo11uSiPO%2FqDN77gikQ36IFJP%2B8a5PBHllIP3FfaxZTOB8B%2BEO%2BosmrHyESN3nT0V15GBRDfACmh57hus5Q%2BRiOHzHP4H10UL2EFSmwjG1eWrOFs8ShfvnpP8KcqwkHKk0SATtq8xEqEUADJMgk7R%2Frv0dMdKSKhwhKnDxqjTkk2bbDg4lC7lClvKk2znnYj%2Bnx68%2F5VZPykqYf98TMU7s4zE6ekszMqonNsLQ8X1ZRdYv9tcBe5KZsDzsxNVWMaYzB1PZ5MNmQ0cQGOqUBNpuBooEol7Ora93GiPDQ2yMWSzEPRYqLKeRl3uFhXzdxHaxUB7K69WCYeXuUZMWjgoP86EW9e30E4Gb%2B4nBZJ%2BRBHwJcG5mIoXLs%2FSrzJiyIsFOwLAal6gb%2FdOi44tt4P6vOl3wNbT4Do4U%2BrL%2BYxyuT8Hbc4orX6W1tqAuWmzqGZLr75AMlAvUrtIv7v7KwxxWhUAGZB3DqDn3bnwhtJeehDSag&X-Amz-Signature=e13b35ff084ebb869f5a79dcae8ea3e7a7ba536f14c4de9609fcc382822b36d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
