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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP44RUXJ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCfAreQtZirZ7GmeRdnOcW39hEr8DiTxkHbYHrkUVTMKAIgarP0IL%2BPDYkDTpACzjuDFqB%2BuJphK%2BE7zfrnTEaw1Voq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOtvOdZOks7oiVocESrcAzf5MRF1uefha4eYW4rgrDYyrPN3TNHXauRu6%2F5HDrB4S4UaFPuGR4KIqUVmjFXdDdhr2tHaTGfd49QZsawg0u7I%2FlE1f0LOmziAIGk3vn6tzjlev8pQ1wMpXADidBXLX3PUxT7L7ng6tJblN0pKWnDMlrwygOvlityPNIvIgLMDE%2FzUQFoS4zo88DLaeYR6VTCfrXcl%2FltVd4alZFs7Cd%2F4H5eJKVyJluLVqGevA4d0ytHA4ZjjEA08a%2Fvaq6QD5b5PSSs13gx0trwFVYhhX%2Bb0K0gqLRsotwtUPxtM24zcMOecZwpvGA84vGj%2BRe1U15vN3mKKkqsooAsuwaacKo7EXRnv%2FdWp75v35c%2FLd%2By0jjMZC07PfLe7YpkAPOHgR9H%2FeMvY2%2FTRJp3Zu2cEht6zigcw4SSKTXP87yseplJ%2B2C%2B3NRx0EKX7fviGChqYtbnID41P18xz467NB5T4MW5u4DqgMSUy9NkzIrkc18l35xOWlVmNIkot30A8jHPvG8yDwpIKDjQxdCNLBZpuQ85HmQf0bwnitgavhI0ns88DXS1lWvFD6xQZqqcMZcArQCyQqgNAjZ1NQg6J6qo9T2f6wicPIgnkVtSyQ%2BRKsQRIwqgh9Lgohe4RXM4UMKvLh70GOqUB4BhX3qkN%2FyY%2FJvJLhdFzZy8vC8dDkdnrOm8mKev9oegeYZdXxE6ckKpN0rrsan1g3ANugjjnO9%2FEXsYz5cI7PodK0ja7QEOLW04ejhFUr6ZA1SvCp%2BWnUGWDFIHV9FL8yTRJ9t9h2%2BQV0PExxeuLd0zqS5YVw9xinVJh36itgzGwk3Nt6X%2BTZ%2FS8Ys8sv4p4p7ZijFXWX%2BgudA3pVJ6dt0QtxxaA&X-Amz-Signature=d68653af52320790f9edc53875dd8765c18d92f6520079039f837bf22d2e232a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP44RUXJ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCfAreQtZirZ7GmeRdnOcW39hEr8DiTxkHbYHrkUVTMKAIgarP0IL%2BPDYkDTpACzjuDFqB%2BuJphK%2BE7zfrnTEaw1Voq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOtvOdZOks7oiVocESrcAzf5MRF1uefha4eYW4rgrDYyrPN3TNHXauRu6%2F5HDrB4S4UaFPuGR4KIqUVmjFXdDdhr2tHaTGfd49QZsawg0u7I%2FlE1f0LOmziAIGk3vn6tzjlev8pQ1wMpXADidBXLX3PUxT7L7ng6tJblN0pKWnDMlrwygOvlityPNIvIgLMDE%2FzUQFoS4zo88DLaeYR6VTCfrXcl%2FltVd4alZFs7Cd%2F4H5eJKVyJluLVqGevA4d0ytHA4ZjjEA08a%2Fvaq6QD5b5PSSs13gx0trwFVYhhX%2Bb0K0gqLRsotwtUPxtM24zcMOecZwpvGA84vGj%2BRe1U15vN3mKKkqsooAsuwaacKo7EXRnv%2FdWp75v35c%2FLd%2By0jjMZC07PfLe7YpkAPOHgR9H%2FeMvY2%2FTRJp3Zu2cEht6zigcw4SSKTXP87yseplJ%2B2C%2B3NRx0EKX7fviGChqYtbnID41P18xz467NB5T4MW5u4DqgMSUy9NkzIrkc18l35xOWlVmNIkot30A8jHPvG8yDwpIKDjQxdCNLBZpuQ85HmQf0bwnitgavhI0ns88DXS1lWvFD6xQZqqcMZcArQCyQqgNAjZ1NQg6J6qo9T2f6wicPIgnkVtSyQ%2BRKsQRIwqgh9Lgohe4RXM4UMKvLh70GOqUB4BhX3qkN%2FyY%2FJvJLhdFzZy8vC8dDkdnrOm8mKev9oegeYZdXxE6ckKpN0rrsan1g3ANugjjnO9%2FEXsYz5cI7PodK0ja7QEOLW04ejhFUr6ZA1SvCp%2BWnUGWDFIHV9FL8yTRJ9t9h2%2BQV0PExxeuLd0zqS5YVw9xinVJh36itgzGwk3Nt6X%2BTZ%2FS8Ys8sv4p4p7ZijFXWX%2BgudA3pVJ6dt0QtxxaA&X-Amz-Signature=cca14b6bab3e4a82c3b013fb752640290b3c96d5870d8cc71d2403f240df136e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP44RUXJ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCfAreQtZirZ7GmeRdnOcW39hEr8DiTxkHbYHrkUVTMKAIgarP0IL%2BPDYkDTpACzjuDFqB%2BuJphK%2BE7zfrnTEaw1Voq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOtvOdZOks7oiVocESrcAzf5MRF1uefha4eYW4rgrDYyrPN3TNHXauRu6%2F5HDrB4S4UaFPuGR4KIqUVmjFXdDdhr2tHaTGfd49QZsawg0u7I%2FlE1f0LOmziAIGk3vn6tzjlev8pQ1wMpXADidBXLX3PUxT7L7ng6tJblN0pKWnDMlrwygOvlityPNIvIgLMDE%2FzUQFoS4zo88DLaeYR6VTCfrXcl%2FltVd4alZFs7Cd%2F4H5eJKVyJluLVqGevA4d0ytHA4ZjjEA08a%2Fvaq6QD5b5PSSs13gx0trwFVYhhX%2Bb0K0gqLRsotwtUPxtM24zcMOecZwpvGA84vGj%2BRe1U15vN3mKKkqsooAsuwaacKo7EXRnv%2FdWp75v35c%2FLd%2By0jjMZC07PfLe7YpkAPOHgR9H%2FeMvY2%2FTRJp3Zu2cEht6zigcw4SSKTXP87yseplJ%2B2C%2B3NRx0EKX7fviGChqYtbnID41P18xz467NB5T4MW5u4DqgMSUy9NkzIrkc18l35xOWlVmNIkot30A8jHPvG8yDwpIKDjQxdCNLBZpuQ85HmQf0bwnitgavhI0ns88DXS1lWvFD6xQZqqcMZcArQCyQqgNAjZ1NQg6J6qo9T2f6wicPIgnkVtSyQ%2BRKsQRIwqgh9Lgohe4RXM4UMKvLh70GOqUB4BhX3qkN%2FyY%2FJvJLhdFzZy8vC8dDkdnrOm8mKev9oegeYZdXxE6ckKpN0rrsan1g3ANugjjnO9%2FEXsYz5cI7PodK0ja7QEOLW04ejhFUr6ZA1SvCp%2BWnUGWDFIHV9FL8yTRJ9t9h2%2BQV0PExxeuLd0zqS5YVw9xinVJh36itgzGwk3Nt6X%2BTZ%2FS8Ys8sv4p4p7ZijFXWX%2BgudA3pVJ6dt0QtxxaA&X-Amz-Signature=06ee23f4080972b52eb5b45f3c0e88f1e30184b85705d0a81a8c9616f1d2a6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
