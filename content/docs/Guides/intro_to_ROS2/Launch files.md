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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEEIDREE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDKjIaL7L0NHKc3hMJ9ErD00XdDgCZ378BjCy9UHEMTJAiEA68C3KR5OyRlJtIL6oAjJ2lGSwMn%2BoPoIgL1wJXVzK3oqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGiYeBnaarzQRX5UircAzylxbFZaGP4UGccXUy9bAK48p%2FhFCYN%2BqXR7kKVTZOX9wpXLqBjsO%2BrxGeSJs6wlqx5uph4C1dHVtMxQKxo3dHsp1jssC3CU%2BNzKjCZHFLwTExdgXCSQham1gQUeLKBye1O%2FL3QGgV2z2BK4ZIWTL5naPWs7AOoFjmuMlKIo%2F91%2BGIfj1Kda3%2FspLLzbny6psgMMb2OkkYK43t23fNPDVIGcMntF2%2B4odk5Tw%2FC4Qoa2ZrGFWkL4AV98suz2v80XBW9g7jgZH2plPoypFlcGyiZ5eBwFjdxoVXBj%2BqJHbVrGxo%2BKeVdOj819KjM%2BVXTDF1Eahy8FzHpbslIUXAD86hkCPBW9CjoazmwhTQIyir69f%2BpgiHcPAiSl0oFwNh9zA61oEbm2L9f%2F5SAYfyD4as2yaejqRaC4Zwrj8TuwCVWa4kUThkZfH7Qt96naOuzqGzA%2BBxM7ppVCzgmuCg3Y9i0RbpyrGP%2Bw1pZ4slipQOlZUEHY7HvfFK%2F%2F1MSuWCczO%2FUDfszujAkBzh7bIIrpVAyloBY75aEjEQvXqTkMX23VT4SZzlokSVaUIK0Ttmfe1FcfGM%2Fy5rF5AHkfiugjTABU2eS8Pc7Jw00h02c6tKZEntzsSNgo5%2B6L1uhMJSVjL4GOqUBlTIPdv80BKTP3h9qaeMVovNlLqyNIJSgS1WBe9WrXIeIeiZzhOTZHR1XMud5tFsrNQrc1tXrY%2B2Ldw%2Fh5wqLU%2BVlgxKv1duGCjpULJ5CgSOnd%2BeeiATaJhJ7V9bOqU81tK1o3y5FC7qz%2BZ21Rfxsz7%2BG3K1EHeIfGmNNsXA%2FOEy1hTSGLq4rc8ysjZBQRvmJFRsptl65cwbh9n%2B%2By4m8K1jyTI2i&X-Amz-Signature=176a6698f1de964bbaa733609ad75c77041bef8c4b203890ec4954a0c5a28814&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEEIDREE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDKjIaL7L0NHKc3hMJ9ErD00XdDgCZ378BjCy9UHEMTJAiEA68C3KR5OyRlJtIL6oAjJ2lGSwMn%2BoPoIgL1wJXVzK3oqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGiYeBnaarzQRX5UircAzylxbFZaGP4UGccXUy9bAK48p%2FhFCYN%2BqXR7kKVTZOX9wpXLqBjsO%2BrxGeSJs6wlqx5uph4C1dHVtMxQKxo3dHsp1jssC3CU%2BNzKjCZHFLwTExdgXCSQham1gQUeLKBye1O%2FL3QGgV2z2BK4ZIWTL5naPWs7AOoFjmuMlKIo%2F91%2BGIfj1Kda3%2FspLLzbny6psgMMb2OkkYK43t23fNPDVIGcMntF2%2B4odk5Tw%2FC4Qoa2ZrGFWkL4AV98suz2v80XBW9g7jgZH2plPoypFlcGyiZ5eBwFjdxoVXBj%2BqJHbVrGxo%2BKeVdOj819KjM%2BVXTDF1Eahy8FzHpbslIUXAD86hkCPBW9CjoazmwhTQIyir69f%2BpgiHcPAiSl0oFwNh9zA61oEbm2L9f%2F5SAYfyD4as2yaejqRaC4Zwrj8TuwCVWa4kUThkZfH7Qt96naOuzqGzA%2BBxM7ppVCzgmuCg3Y9i0RbpyrGP%2Bw1pZ4slipQOlZUEHY7HvfFK%2F%2F1MSuWCczO%2FUDfszujAkBzh7bIIrpVAyloBY75aEjEQvXqTkMX23VT4SZzlokSVaUIK0Ttmfe1FcfGM%2Fy5rF5AHkfiugjTABU2eS8Pc7Jw00h02c6tKZEntzsSNgo5%2B6L1uhMJSVjL4GOqUBlTIPdv80BKTP3h9qaeMVovNlLqyNIJSgS1WBe9WrXIeIeiZzhOTZHR1XMud5tFsrNQrc1tXrY%2B2Ldw%2Fh5wqLU%2BVlgxKv1duGCjpULJ5CgSOnd%2BeeiATaJhJ7V9bOqU81tK1o3y5FC7qz%2BZ21Rfxsz7%2BG3K1EHeIfGmNNsXA%2FOEy1hTSGLq4rc8ysjZBQRvmJFRsptl65cwbh9n%2B%2By4m8K1jyTI2i&X-Amz-Signature=582b9502a5d024e54bd4ef318341214ce14255fc8224727d757f76711cc00f08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEEIDREE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDKjIaL7L0NHKc3hMJ9ErD00XdDgCZ378BjCy9UHEMTJAiEA68C3KR5OyRlJtIL6oAjJ2lGSwMn%2BoPoIgL1wJXVzK3oqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGiYeBnaarzQRX5UircAzylxbFZaGP4UGccXUy9bAK48p%2FhFCYN%2BqXR7kKVTZOX9wpXLqBjsO%2BrxGeSJs6wlqx5uph4C1dHVtMxQKxo3dHsp1jssC3CU%2BNzKjCZHFLwTExdgXCSQham1gQUeLKBye1O%2FL3QGgV2z2BK4ZIWTL5naPWs7AOoFjmuMlKIo%2F91%2BGIfj1Kda3%2FspLLzbny6psgMMb2OkkYK43t23fNPDVIGcMntF2%2B4odk5Tw%2FC4Qoa2ZrGFWkL4AV98suz2v80XBW9g7jgZH2plPoypFlcGyiZ5eBwFjdxoVXBj%2BqJHbVrGxo%2BKeVdOj819KjM%2BVXTDF1Eahy8FzHpbslIUXAD86hkCPBW9CjoazmwhTQIyir69f%2BpgiHcPAiSl0oFwNh9zA61oEbm2L9f%2F5SAYfyD4as2yaejqRaC4Zwrj8TuwCVWa4kUThkZfH7Qt96naOuzqGzA%2BBxM7ppVCzgmuCg3Y9i0RbpyrGP%2Bw1pZ4slipQOlZUEHY7HvfFK%2F%2F1MSuWCczO%2FUDfszujAkBzh7bIIrpVAyloBY75aEjEQvXqTkMX23VT4SZzlokSVaUIK0Ttmfe1FcfGM%2Fy5rF5AHkfiugjTABU2eS8Pc7Jw00h02c6tKZEntzsSNgo5%2B6L1uhMJSVjL4GOqUBlTIPdv80BKTP3h9qaeMVovNlLqyNIJSgS1WBe9WrXIeIeiZzhOTZHR1XMud5tFsrNQrc1tXrY%2B2Ldw%2Fh5wqLU%2BVlgxKv1duGCjpULJ5CgSOnd%2BeeiATaJhJ7V9bOqU81tK1o3y5FC7qz%2BZ21Rfxsz7%2BG3K1EHeIfGmNNsXA%2FOEy1hTSGLq4rc8ysjZBQRvmJFRsptl65cwbh9n%2B%2By4m8K1jyTI2i&X-Amz-Signature=e7f126ad7a7b5d6e64eb55106c81649bfac73a84040329811895fdba4425462a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
