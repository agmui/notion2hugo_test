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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7Y6CPHX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDgnPCoogil3HZwl5l54RpbXonj%2BJQ3V8eAf0fNFo%2FYWQIhAKTq4RMRx8yq6OIAt9ucEwEChvU9M41iz1Yqz4wq3vXdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3ELy%2B%2BzQ2VBPy02Iq3AOo1Wf9odAjHtF6vnbpYwKgRIsn9BIfnjjKcC93WwBGCeMb2wuZKlEcpPD7fMKfGOrlVj9CtgywXLNuJG6qyCqs7Ex7zAr8m8VnbaPxfqyuPD3UMIrCLMLGbc6gc9Td36gJ1M2oQaGMuTUtlvyyrfRmj4%2BJfDgnSikoC4Wo%2FqokaVFdnKsKPQ5YorZV9CrpDPRhes8tdSAPbJ1JG6SOp9be2Wk4uD5sPks2Pw70bh5qlj8AU%2FGUnbR30yobaAQVC2ESXCiEBRCEYbkB%2BMgjqi0TxrXsYQO3O%2Fgh8auNiYjCt%2FoE8z7jajMT9iZ3fdRudQJduqVA6voZVgilU5id2DMfxhIf87YoUhzlDm%2FTYH8ssPlaLUhkIrFp5xQmLHmEfeI3x%2FwOfHsoAtMBjPcnTMsihfjZgbseJfygnCPMpxlKH9bN0rDzS9kAEikzo19nCwj5P9oP%2FIC5ScgJemOXz5lHmh4wJaVKyAQxLCmGD68y57b9WdLI6KmKhiPn0761ecZF8Wx1DZXA%2FqROr4DYqw6ginf0lbEG3ISFy9EdFW3mzOpqVjkwOmloK5cG6YYd7sCFUW%2FBMkYxutyaOX7cwGmmmYT%2FPrUhVFBp%2FOgiXwnDPuD%2FUanQo9An6P1bmDDZm8W%2BBjqkAS71i1uwE7Es%2BVHM2tJUMTt0NpN%2FcWGgsChLe%2B1XiReszkFoVWOjCjinXolx4%2FEQB6fQ%2BVH6Gr0Z7JW3MvqWvk%2BD%2FuVuQ9udypEICq7ZBgEIGyaqdbHAdDq7KhWJJ%2B9MEKCWwmGjPIfP7YQvTGdAPXMVw2JCyjGBgObni3%2BB4zoJJsRvSw%2BCUvRzR99dlYWUZWlOLA6VCTDhCHcBOHBcd81WEtAL&X-Amz-Signature=6cb4384e0de5612324608045bf362f2273c512cd44671c05729d959219baedac&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7Y6CPHX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDgnPCoogil3HZwl5l54RpbXonj%2BJQ3V8eAf0fNFo%2FYWQIhAKTq4RMRx8yq6OIAt9ucEwEChvU9M41iz1Yqz4wq3vXdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3ELy%2B%2BzQ2VBPy02Iq3AOo1Wf9odAjHtF6vnbpYwKgRIsn9BIfnjjKcC93WwBGCeMb2wuZKlEcpPD7fMKfGOrlVj9CtgywXLNuJG6qyCqs7Ex7zAr8m8VnbaPxfqyuPD3UMIrCLMLGbc6gc9Td36gJ1M2oQaGMuTUtlvyyrfRmj4%2BJfDgnSikoC4Wo%2FqokaVFdnKsKPQ5YorZV9CrpDPRhes8tdSAPbJ1JG6SOp9be2Wk4uD5sPks2Pw70bh5qlj8AU%2FGUnbR30yobaAQVC2ESXCiEBRCEYbkB%2BMgjqi0TxrXsYQO3O%2Fgh8auNiYjCt%2FoE8z7jajMT9iZ3fdRudQJduqVA6voZVgilU5id2DMfxhIf87YoUhzlDm%2FTYH8ssPlaLUhkIrFp5xQmLHmEfeI3x%2FwOfHsoAtMBjPcnTMsihfjZgbseJfygnCPMpxlKH9bN0rDzS9kAEikzo19nCwj5P9oP%2FIC5ScgJemOXz5lHmh4wJaVKyAQxLCmGD68y57b9WdLI6KmKhiPn0761ecZF8Wx1DZXA%2FqROr4DYqw6ginf0lbEG3ISFy9EdFW3mzOpqVjkwOmloK5cG6YYd7sCFUW%2FBMkYxutyaOX7cwGmmmYT%2FPrUhVFBp%2FOgiXwnDPuD%2FUanQo9An6P1bmDDZm8W%2BBjqkAS71i1uwE7Es%2BVHM2tJUMTt0NpN%2FcWGgsChLe%2B1XiReszkFoVWOjCjinXolx4%2FEQB6fQ%2BVH6Gr0Z7JW3MvqWvk%2BD%2FuVuQ9udypEICq7ZBgEIGyaqdbHAdDq7KhWJJ%2B9MEKCWwmGjPIfP7YQvTGdAPXMVw2JCyjGBgObni3%2BB4zoJJsRvSw%2BCUvRzR99dlYWUZWlOLA6VCTDhCHcBOHBcd81WEtAL&X-Amz-Signature=6aa3afc6c62d0c08be7fb5f50bb201a7b23b3560d636fdd40302f19cf5111dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7Y6CPHX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDgnPCoogil3HZwl5l54RpbXonj%2BJQ3V8eAf0fNFo%2FYWQIhAKTq4RMRx8yq6OIAt9ucEwEChvU9M41iz1Yqz4wq3vXdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3ELy%2B%2BzQ2VBPy02Iq3AOo1Wf9odAjHtF6vnbpYwKgRIsn9BIfnjjKcC93WwBGCeMb2wuZKlEcpPD7fMKfGOrlVj9CtgywXLNuJG6qyCqs7Ex7zAr8m8VnbaPxfqyuPD3UMIrCLMLGbc6gc9Td36gJ1M2oQaGMuTUtlvyyrfRmj4%2BJfDgnSikoC4Wo%2FqokaVFdnKsKPQ5YorZV9CrpDPRhes8tdSAPbJ1JG6SOp9be2Wk4uD5sPks2Pw70bh5qlj8AU%2FGUnbR30yobaAQVC2ESXCiEBRCEYbkB%2BMgjqi0TxrXsYQO3O%2Fgh8auNiYjCt%2FoE8z7jajMT9iZ3fdRudQJduqVA6voZVgilU5id2DMfxhIf87YoUhzlDm%2FTYH8ssPlaLUhkIrFp5xQmLHmEfeI3x%2FwOfHsoAtMBjPcnTMsihfjZgbseJfygnCPMpxlKH9bN0rDzS9kAEikzo19nCwj5P9oP%2FIC5ScgJemOXz5lHmh4wJaVKyAQxLCmGD68y57b9WdLI6KmKhiPn0761ecZF8Wx1DZXA%2FqROr4DYqw6ginf0lbEG3ISFy9EdFW3mzOpqVjkwOmloK5cG6YYd7sCFUW%2FBMkYxutyaOX7cwGmmmYT%2FPrUhVFBp%2FOgiXwnDPuD%2FUanQo9An6P1bmDDZm8W%2BBjqkAS71i1uwE7Es%2BVHM2tJUMTt0NpN%2FcWGgsChLe%2B1XiReszkFoVWOjCjinXolx4%2FEQB6fQ%2BVH6Gr0Z7JW3MvqWvk%2BD%2FuVuQ9udypEICq7ZBgEIGyaqdbHAdDq7KhWJJ%2B9MEKCWwmGjPIfP7YQvTGdAPXMVw2JCyjGBgObni3%2BB4zoJJsRvSw%2BCUvRzR99dlYWUZWlOLA6VCTDhCHcBOHBcd81WEtAL&X-Amz-Signature=b8440e91cd77d2c1123864cc25db54b8eaf89749ea8a842dec3aad9061f9863c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
