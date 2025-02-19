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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPGQB2N%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD4lsKatqKsFu56ENwG8BHPjeJyFdgE%2F9b4mF6%2BlGqh1AIhAOvvD6IW7Y0hgk0YCjG0sTnBb%2FDdz2RW64GojA0iQwA3KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5VkcVwGYU6Bib12oq3APGFe6lIzwk6gFgKFRD%2FgSV03VvdUyOr27Q90zuxMakCj4A%2BwL3%2BrZ6Dv3R5R%2FAG7ZLMFxaaH1bA3EPSOX6Oi8gNNaAsG01kwIhxyBmDMV9MeyqWu55RznzTQENLiQ7Dz2Y6PXohqkBBEVGDlmGq62Huy9TzT9uzx0dQksRkx8oWeIfgH20cOL6OylO85G1dFxQZwgk%2FmkHRK2vqcSiwe4x9sxc4W%2F6rQTytmEBVBVXZon4hNXtFf9K5J3arBN4wd3cUqFhJ8oLVRbauI%2B7QAx1SHR5CQw%2BpT3RTpmjy2HUhd5C8a2ORlWpTW94eCixC9tAc%2Fdc0yy4ukeZ%2FS19piTkru6ei3EzfdARHXZm2eWAD6VLSuIbHyWr1zqvF%2FsH0MxFK9Ap8Di%2BQD3ajiZp60Coj99xN%2FZVO0F0MJm9FXFIpq%2BoiwRZ3S%2FTRPgyGvEtaVQgFBsrzO9O6TGrGD9k0h1EqkSZ35WeRQUXgHXgaYvP9vO9Qk4KjRxJ%2FrnPIeJNwO4Iopnqnlld%2BoPVi9w%2B4YJbC1uMEsLB0VwHSEAuZaNgrIKKxlFfKNR85Afrr2hxEQQkc1ZhANaFPpIHFOGPp6byizAJhhhKYm7JIH8tMhkWYrTK%2FEHuYGZLeZ0PgjDexNW9BjqkAX9hZgQD0PxaK%2B2Ncaob%2FZZeGIA7coRAwlEmG9U0nJTf7snDvaP3hLG%2BY3%2B%2FAw2YnPjRxe366AW%2FniNKs05HsGZ7DkAG%2FVN5kIjG%2F1mjzek6Tq%2FEXNlMSU72eXjTkk6Fy4D9gZoZEc70Eg9Tcnq%2BWGwgwPU8x%2BSor%2B7%2FW0LWiEH7cm5pg7mfO3AVfO%2FiyMcDSmHpmVsvVLT4B%2B1QQOJ63IRTZ%2F5K&X-Amz-Signature=f4e97dc8b768e1f96b2e3ee9022dbc3827b59b619c4c3b36b59c406a31cca5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPGQB2N%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD4lsKatqKsFu56ENwG8BHPjeJyFdgE%2F9b4mF6%2BlGqh1AIhAOvvD6IW7Y0hgk0YCjG0sTnBb%2FDdz2RW64GojA0iQwA3KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5VkcVwGYU6Bib12oq3APGFe6lIzwk6gFgKFRD%2FgSV03VvdUyOr27Q90zuxMakCj4A%2BwL3%2BrZ6Dv3R5R%2FAG7ZLMFxaaH1bA3EPSOX6Oi8gNNaAsG01kwIhxyBmDMV9MeyqWu55RznzTQENLiQ7Dz2Y6PXohqkBBEVGDlmGq62Huy9TzT9uzx0dQksRkx8oWeIfgH20cOL6OylO85G1dFxQZwgk%2FmkHRK2vqcSiwe4x9sxc4W%2F6rQTytmEBVBVXZon4hNXtFf9K5J3arBN4wd3cUqFhJ8oLVRbauI%2B7QAx1SHR5CQw%2BpT3RTpmjy2HUhd5C8a2ORlWpTW94eCixC9tAc%2Fdc0yy4ukeZ%2FS19piTkru6ei3EzfdARHXZm2eWAD6VLSuIbHyWr1zqvF%2FsH0MxFK9Ap8Di%2BQD3ajiZp60Coj99xN%2FZVO0F0MJm9FXFIpq%2BoiwRZ3S%2FTRPgyGvEtaVQgFBsrzO9O6TGrGD9k0h1EqkSZ35WeRQUXgHXgaYvP9vO9Qk4KjRxJ%2FrnPIeJNwO4Iopnqnlld%2BoPVi9w%2B4YJbC1uMEsLB0VwHSEAuZaNgrIKKxlFfKNR85Afrr2hxEQQkc1ZhANaFPpIHFOGPp6byizAJhhhKYm7JIH8tMhkWYrTK%2FEHuYGZLeZ0PgjDexNW9BjqkAX9hZgQD0PxaK%2B2Ncaob%2FZZeGIA7coRAwlEmG9U0nJTf7snDvaP3hLG%2BY3%2B%2FAw2YnPjRxe366AW%2FniNKs05HsGZ7DkAG%2FVN5kIjG%2F1mjzek6Tq%2FEXNlMSU72eXjTkk6Fy4D9gZoZEc70Eg9Tcnq%2BWGwgwPU8x%2BSor%2B7%2FW0LWiEH7cm5pg7mfO3AVfO%2FiyMcDSmHpmVsvVLT4B%2B1QQOJ63IRTZ%2F5K&X-Amz-Signature=13313e56d2513090eebcf607bf27d015c758a9e60cafe897d90564b7fa7d02a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPGQB2N%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD4lsKatqKsFu56ENwG8BHPjeJyFdgE%2F9b4mF6%2BlGqh1AIhAOvvD6IW7Y0hgk0YCjG0sTnBb%2FDdz2RW64GojA0iQwA3KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5VkcVwGYU6Bib12oq3APGFe6lIzwk6gFgKFRD%2FgSV03VvdUyOr27Q90zuxMakCj4A%2BwL3%2BrZ6Dv3R5R%2FAG7ZLMFxaaH1bA3EPSOX6Oi8gNNaAsG01kwIhxyBmDMV9MeyqWu55RznzTQENLiQ7Dz2Y6PXohqkBBEVGDlmGq62Huy9TzT9uzx0dQksRkx8oWeIfgH20cOL6OylO85G1dFxQZwgk%2FmkHRK2vqcSiwe4x9sxc4W%2F6rQTytmEBVBVXZon4hNXtFf9K5J3arBN4wd3cUqFhJ8oLVRbauI%2B7QAx1SHR5CQw%2BpT3RTpmjy2HUhd5C8a2ORlWpTW94eCixC9tAc%2Fdc0yy4ukeZ%2FS19piTkru6ei3EzfdARHXZm2eWAD6VLSuIbHyWr1zqvF%2FsH0MxFK9Ap8Di%2BQD3ajiZp60Coj99xN%2FZVO0F0MJm9FXFIpq%2BoiwRZ3S%2FTRPgyGvEtaVQgFBsrzO9O6TGrGD9k0h1EqkSZ35WeRQUXgHXgaYvP9vO9Qk4KjRxJ%2FrnPIeJNwO4Iopnqnlld%2BoPVi9w%2B4YJbC1uMEsLB0VwHSEAuZaNgrIKKxlFfKNR85Afrr2hxEQQkc1ZhANaFPpIHFOGPp6byizAJhhhKYm7JIH8tMhkWYrTK%2FEHuYGZLeZ0PgjDexNW9BjqkAX9hZgQD0PxaK%2B2Ncaob%2FZZeGIA7coRAwlEmG9U0nJTf7snDvaP3hLG%2BY3%2B%2FAw2YnPjRxe366AW%2FniNKs05HsGZ7DkAG%2FVN5kIjG%2F1mjzek6Tq%2FEXNlMSU72eXjTkk6Fy4D9gZoZEc70Eg9Tcnq%2BWGwgwPU8x%2BSor%2B7%2FW0LWiEH7cm5pg7mfO3AVfO%2FiyMcDSmHpmVsvVLT4B%2B1QQOJ63IRTZ%2F5K&X-Amz-Signature=459660211bb934c140f1eb6056d92e5903fc83a509d8f4e62fede0e702af2527&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
