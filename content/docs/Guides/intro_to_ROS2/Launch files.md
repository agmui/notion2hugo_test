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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOUJYBA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCyTn%2FeaJlncjzY7y5hXdCSCE3jUgOLaqC0hcZp3L5LugIgSi%2BNKvluBWYiUzbUJlvZXP1gwZlCbYCkRZlOg3t0oPkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEKSuQ2Gb3gGQtSI0yrcAxqsvKeAG7WJVDhRki20poeP83NO1wBvcUddzv7tit5uBUIbnU5erHtsj3sS22QCp%2FjrSzeMj7CeptbOS89%2F5LqzLn%2FD0kUDhxXgtuqzr7Drat788JkQJCoZ9fq7WVAZf9miSuwdNDidvfaK8KSddF7HgtpBDB5b3IPHu8LwsjKqpcWqniNNvITYQlzZUtAjPJ5PtSWuM5wcD8mSeD0z67qPhAliZlmiYKZCWEg9DZvQEENvxqzRQ0C0PW7%2BY3lVcvZ8xhzafsFm6s9QuVyi%2FYgkF6TsCGJ5Eggk3Aylgp5jnFQA3lLvxr3QgRSozNYSDYCyKljbDrxBGsUgU6WNjya0ssbkwhnKCx4lVaECIyLOkgfBAl9iDdSrIrODuxbz3PNBebo4I4YClUttMedWlzywfkeCSZxgIeoZ4YvqywOCKDpgTafKjXa2g9ErD%2B0xPznojTuxbkFsKBwX7dRR4ASeBS5g8D0deRSFQ2sd4ToWdTNukcJ3YU4t%2FYH5oVCPLJRm%2FAINCu1FBQJSi06K6%2BpDyCxKhMESrgO%2Fqv4Jv%2BoNssmx%2FvwnVyW6joOrXe%2B5nUG6xmHs1m4ktgfAp6HDZtmzFEdrmNg%2BDGmeHwysIYGH3mZkiolnk85D1Uj%2FMNimwsQGOqUBieUy2Np%2Fzaom2CyinzQSX0GJxbL3N3nrJcGgwuzHlcyQvAcT%2FV1l0Er%2FOhpCeuEvZtBTFpv93w3bwkRs5DJQYan3xDlc4ZohBOrDfSBkA2XZ%2FXMKNpu50OGfF25MC5bO7mXhnbta6snv43hpOvS8N64pbbNuwNXv7kKnDSlda9%2Fe0k2h4hvQMsAO%2Bz73E0W6QRuOdO%2FQHfkJOxdnEvu2s%2FlJA2bF&X-Amz-Signature=ef622eaa38d4af8cc8c07e03fe4cf6eb789dbf05577fe2982a780a0a1f0d04dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOUJYBA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCyTn%2FeaJlncjzY7y5hXdCSCE3jUgOLaqC0hcZp3L5LugIgSi%2BNKvluBWYiUzbUJlvZXP1gwZlCbYCkRZlOg3t0oPkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEKSuQ2Gb3gGQtSI0yrcAxqsvKeAG7WJVDhRki20poeP83NO1wBvcUddzv7tit5uBUIbnU5erHtsj3sS22QCp%2FjrSzeMj7CeptbOS89%2F5LqzLn%2FD0kUDhxXgtuqzr7Drat788JkQJCoZ9fq7WVAZf9miSuwdNDidvfaK8KSddF7HgtpBDB5b3IPHu8LwsjKqpcWqniNNvITYQlzZUtAjPJ5PtSWuM5wcD8mSeD0z67qPhAliZlmiYKZCWEg9DZvQEENvxqzRQ0C0PW7%2BY3lVcvZ8xhzafsFm6s9QuVyi%2FYgkF6TsCGJ5Eggk3Aylgp5jnFQA3lLvxr3QgRSozNYSDYCyKljbDrxBGsUgU6WNjya0ssbkwhnKCx4lVaECIyLOkgfBAl9iDdSrIrODuxbz3PNBebo4I4YClUttMedWlzywfkeCSZxgIeoZ4YvqywOCKDpgTafKjXa2g9ErD%2B0xPznojTuxbkFsKBwX7dRR4ASeBS5g8D0deRSFQ2sd4ToWdTNukcJ3YU4t%2FYH5oVCPLJRm%2FAINCu1FBQJSi06K6%2BpDyCxKhMESrgO%2Fqv4Jv%2BoNssmx%2FvwnVyW6joOrXe%2B5nUG6xmHs1m4ktgfAp6HDZtmzFEdrmNg%2BDGmeHwysIYGH3mZkiolnk85D1Uj%2FMNimwsQGOqUBieUy2Np%2Fzaom2CyinzQSX0GJxbL3N3nrJcGgwuzHlcyQvAcT%2FV1l0Er%2FOhpCeuEvZtBTFpv93w3bwkRs5DJQYan3xDlc4ZohBOrDfSBkA2XZ%2FXMKNpu50OGfF25MC5bO7mXhnbta6snv43hpOvS8N64pbbNuwNXv7kKnDSlda9%2Fe0k2h4hvQMsAO%2Bz73E0W6QRuOdO%2FQHfkJOxdnEvu2s%2FlJA2bF&X-Amz-Signature=57b4226a776e061d78947a2103c053fce2a1047b7f13dac8906e2782b0e21a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOUJYBA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCyTn%2FeaJlncjzY7y5hXdCSCE3jUgOLaqC0hcZp3L5LugIgSi%2BNKvluBWYiUzbUJlvZXP1gwZlCbYCkRZlOg3t0oPkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEKSuQ2Gb3gGQtSI0yrcAxqsvKeAG7WJVDhRki20poeP83NO1wBvcUddzv7tit5uBUIbnU5erHtsj3sS22QCp%2FjrSzeMj7CeptbOS89%2F5LqzLn%2FD0kUDhxXgtuqzr7Drat788JkQJCoZ9fq7WVAZf9miSuwdNDidvfaK8KSddF7HgtpBDB5b3IPHu8LwsjKqpcWqniNNvITYQlzZUtAjPJ5PtSWuM5wcD8mSeD0z67qPhAliZlmiYKZCWEg9DZvQEENvxqzRQ0C0PW7%2BY3lVcvZ8xhzafsFm6s9QuVyi%2FYgkF6TsCGJ5Eggk3Aylgp5jnFQA3lLvxr3QgRSozNYSDYCyKljbDrxBGsUgU6WNjya0ssbkwhnKCx4lVaECIyLOkgfBAl9iDdSrIrODuxbz3PNBebo4I4YClUttMedWlzywfkeCSZxgIeoZ4YvqywOCKDpgTafKjXa2g9ErD%2B0xPznojTuxbkFsKBwX7dRR4ASeBS5g8D0deRSFQ2sd4ToWdTNukcJ3YU4t%2FYH5oVCPLJRm%2FAINCu1FBQJSi06K6%2BpDyCxKhMESrgO%2Fqv4Jv%2BoNssmx%2FvwnVyW6joOrXe%2B5nUG6xmHs1m4ktgfAp6HDZtmzFEdrmNg%2BDGmeHwysIYGH3mZkiolnk85D1Uj%2FMNimwsQGOqUBieUy2Np%2Fzaom2CyinzQSX0GJxbL3N3nrJcGgwuzHlcyQvAcT%2FV1l0Er%2FOhpCeuEvZtBTFpv93w3bwkRs5DJQYan3xDlc4ZohBOrDfSBkA2XZ%2FXMKNpu50OGfF25MC5bO7mXhnbta6snv43hpOvS8N64pbbNuwNXv7kKnDSlda9%2Fe0k2h4hvQMsAO%2Bz73E0W6QRuOdO%2FQHfkJOxdnEvu2s%2FlJA2bF&X-Amz-Signature=462208cc67146d04ce5068fb51e8ad4bc21ab6c0388e8a34a4ddbab30bd6e9e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
