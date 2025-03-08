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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBCE63I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEuSouobmDpIKp6FeBxVDIw5rJWX18GHYdsmD%2BCj6gmAiEAkmKdhtoLmYcNIn9pqQz%2BnMPu3CcA0m7Mn%2BzcTK7RykEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNxiRWZYRqdwi0CwjSrcA6lIFs7VI0nvElUtCIjgSXvDdxBPCDX9Mz5peDKHksM4unuxYgYeKlvR3mcfrsT8EZrzfWO2yS0USEjhUdj93G4vU1%2B8VhAWbCqSxarrzg7dRv1fbWsqxynREwxjVoGg8I9%2Bk9kbstSRv4B%2FF6O5Vn1f69f2KN3nrfjjrPXATqNljsIzdfIQEetXQoFYLBflEEwV4ITi9fFlOEj4p5le5oO85SyOHGCpzasXgVlqLkzSApcebwAavmhWCFxfe8%2F3VOO6ct5H35qgPdHWROFulrewGK20qwUUfVdvvslfS46Hc79R0elNGBsHrwodmfPhD9VtxWrf1gwFAULgEABKN3x7LZWJl%2F0KgffHL4m0tgcTOSbqzis0gm%2BsMOUScRCzM47NtKTxGeBx2FRzOnCMJjne3emc8t6D%2FyLTM%2FLpCedbeelzGk4kuUnGK5QNXL1iSGafYSEQLM5KvUmYURNnUNjUlvXlRnJ78DmAAQh7jGYWlwpe%2FJslWRIQy8wbDF3UsqXB8bdZE60X5r0Q19KjFwiELGi1cuFmfmw6CqkMD7e%2Bo8JXUptIbsfFgSLbzcR%2B3YNelSlS4B%2BhVoAYHHg8Zz2mCZ7%2FmwnzH0wolhhBo9c3tWGyG2SxIrUu2xaFMJ%2FVsr4GOqUBKZhbzjg5NebHqZq6MeodaTmwOj2actPnO6I4DdB%2FhB2BESSskO85fsPdgVe3SQ5jU89%2FliiohodigYKDzkdfTsNHiYwAEQ13yqcTkghlUrQmKM%2BiuruuOKUr5ie4MnfDnWesDd31QcM6GwFAZFprnDuRzxxNp8qTfbZ9Mg6khc0JVj4I0JFxFJq5h0SO4IKt3n%2FYttfL7k8LjKXJN1q2Ujs6PmOr&X-Amz-Signature=72b2669fd202aa1b97ca97833880fb9a972c66cb082e7a6bb195842fd8dc7b41&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBCE63I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEuSouobmDpIKp6FeBxVDIw5rJWX18GHYdsmD%2BCj6gmAiEAkmKdhtoLmYcNIn9pqQz%2BnMPu3CcA0m7Mn%2BzcTK7RykEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNxiRWZYRqdwi0CwjSrcA6lIFs7VI0nvElUtCIjgSXvDdxBPCDX9Mz5peDKHksM4unuxYgYeKlvR3mcfrsT8EZrzfWO2yS0USEjhUdj93G4vU1%2B8VhAWbCqSxarrzg7dRv1fbWsqxynREwxjVoGg8I9%2Bk9kbstSRv4B%2FF6O5Vn1f69f2KN3nrfjjrPXATqNljsIzdfIQEetXQoFYLBflEEwV4ITi9fFlOEj4p5le5oO85SyOHGCpzasXgVlqLkzSApcebwAavmhWCFxfe8%2F3VOO6ct5H35qgPdHWROFulrewGK20qwUUfVdvvslfS46Hc79R0elNGBsHrwodmfPhD9VtxWrf1gwFAULgEABKN3x7LZWJl%2F0KgffHL4m0tgcTOSbqzis0gm%2BsMOUScRCzM47NtKTxGeBx2FRzOnCMJjne3emc8t6D%2FyLTM%2FLpCedbeelzGk4kuUnGK5QNXL1iSGafYSEQLM5KvUmYURNnUNjUlvXlRnJ78DmAAQh7jGYWlwpe%2FJslWRIQy8wbDF3UsqXB8bdZE60X5r0Q19KjFwiELGi1cuFmfmw6CqkMD7e%2Bo8JXUptIbsfFgSLbzcR%2B3YNelSlS4B%2BhVoAYHHg8Zz2mCZ7%2FmwnzH0wolhhBo9c3tWGyG2SxIrUu2xaFMJ%2FVsr4GOqUBKZhbzjg5NebHqZq6MeodaTmwOj2actPnO6I4DdB%2FhB2BESSskO85fsPdgVe3SQ5jU89%2FliiohodigYKDzkdfTsNHiYwAEQ13yqcTkghlUrQmKM%2BiuruuOKUr5ie4MnfDnWesDd31QcM6GwFAZFprnDuRzxxNp8qTfbZ9Mg6khc0JVj4I0JFxFJq5h0SO4IKt3n%2FYttfL7k8LjKXJN1q2Ujs6PmOr&X-Amz-Signature=71c0de0642677de6b1a27020b62eb1ab0d7f3e9d3621ca5e26c09d203fe361c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBCE63I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEuSouobmDpIKp6FeBxVDIw5rJWX18GHYdsmD%2BCj6gmAiEAkmKdhtoLmYcNIn9pqQz%2BnMPu3CcA0m7Mn%2BzcTK7RykEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNxiRWZYRqdwi0CwjSrcA6lIFs7VI0nvElUtCIjgSXvDdxBPCDX9Mz5peDKHksM4unuxYgYeKlvR3mcfrsT8EZrzfWO2yS0USEjhUdj93G4vU1%2B8VhAWbCqSxarrzg7dRv1fbWsqxynREwxjVoGg8I9%2Bk9kbstSRv4B%2FF6O5Vn1f69f2KN3nrfjjrPXATqNljsIzdfIQEetXQoFYLBflEEwV4ITi9fFlOEj4p5le5oO85SyOHGCpzasXgVlqLkzSApcebwAavmhWCFxfe8%2F3VOO6ct5H35qgPdHWROFulrewGK20qwUUfVdvvslfS46Hc79R0elNGBsHrwodmfPhD9VtxWrf1gwFAULgEABKN3x7LZWJl%2F0KgffHL4m0tgcTOSbqzis0gm%2BsMOUScRCzM47NtKTxGeBx2FRzOnCMJjne3emc8t6D%2FyLTM%2FLpCedbeelzGk4kuUnGK5QNXL1iSGafYSEQLM5KvUmYURNnUNjUlvXlRnJ78DmAAQh7jGYWlwpe%2FJslWRIQy8wbDF3UsqXB8bdZE60X5r0Q19KjFwiELGi1cuFmfmw6CqkMD7e%2Bo8JXUptIbsfFgSLbzcR%2B3YNelSlS4B%2BhVoAYHHg8Zz2mCZ7%2FmwnzH0wolhhBo9c3tWGyG2SxIrUu2xaFMJ%2FVsr4GOqUBKZhbzjg5NebHqZq6MeodaTmwOj2actPnO6I4DdB%2FhB2BESSskO85fsPdgVe3SQ5jU89%2FliiohodigYKDzkdfTsNHiYwAEQ13yqcTkghlUrQmKM%2BiuruuOKUr5ie4MnfDnWesDd31QcM6GwFAZFprnDuRzxxNp8qTfbZ9Mg6khc0JVj4I0JFxFJq5h0SO4IKt3n%2FYttfL7k8LjKXJN1q2Ujs6PmOr&X-Amz-Signature=1770689ebeadb15ff079dc6a4a9f2850200943c07137e9adeeb8a44c4ba0267c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
