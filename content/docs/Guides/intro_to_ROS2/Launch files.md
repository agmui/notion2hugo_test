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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULT3HIDG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDhI1ksVPsyjvyk%2B97ujjHuu7t3VlBdwCYKUkgEDMdfEAiEAheqwJBn4G%2F%2BZngmi14XcU8%2F70%2B64z5l1Z1Mz3%2FJcgi8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4%2FkCDYJ7QMN2s9zSrcA90p9F9PPv5y4rpLrcJJ692Ktx5IFD8OqvbbuzT1uITLyJMVY35C6C3kvQqgVMw27SoPmhu85k3K3PP8u6E4SDT4n5UCRNA%2FC5iwtfVLuxo36inbDLZ2QE4B3qTbvy4u4MPdheul7Pdxpjgdx3OqCZdlxc3UwqmHUOZIoPAlVJOnFIkcTUjBhLmK7Eg4AzfjXOf9yDliuaWQFGcprU7zHgB58SE9I2wBiyzFjLLELZ%2BazQ3eN9wGY373tyI4sQ74I1rzxQqWkg08dQLMCUVXw0d1MhOE7yc0NI8vvs4QmoCzyFBzKRC4jbVfN6Z91PLwqP5rQa1C4C5xJo9kICIgCd7BFQpOc88CoWKGyZDL3sY0mEiOFR2Nw1sY4vXLBa2MtRZ4cR0Cnwgdh64hIqKx9mv4Nv%2FOibrrwS2bKKNLv6RgqvQ3S1RIcCf5O%2ByDtYop2znH55Wd%2BHtooGhkzjJZ9L7v1Xj%2BkL%2FhvXnQ5%2FoVRApZ%2B9HhICY9DXo1fKNM1Gi%2B%2B%2FaQRritvgtyQhpIoXp5WkXvXkoQa9kczwwZ7KGztFFx4aLLCvw94Qfctc6ciNZ2MBy6qV4NK%2F9LScSfHpj55FM41cGBDApyCjd4X4RxkKFgzepFm%2BQY8l7%2FN4TKMJSw58MGOqUBBObQhth6df7h1exUGRHqc5tCkPrd2lP9i%2FYZVrWO9dVV8C9HuhkculgVqpUpllzE%2BrIS5onU3K2LBMXdYH5cV%2BQ0PegJm9BAGEfqn2b7sAdaER7D7toOJKJV0IV1JHJ6yPcbEixKqjQagNY%2FbpNKYhLFJRvDMTrccSki8%2FlBMFR1G4JdWj%2FxJrmiPzCzlnFSb%2BRRIEGzRcbkbhVDAxmWMyP2Tp6d&X-Amz-Signature=fc21a5c44cf1769692ff1d56705eaa136a9492e014d251aaa05d9143539e68ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULT3HIDG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDhI1ksVPsyjvyk%2B97ujjHuu7t3VlBdwCYKUkgEDMdfEAiEAheqwJBn4G%2F%2BZngmi14XcU8%2F70%2B64z5l1Z1Mz3%2FJcgi8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4%2FkCDYJ7QMN2s9zSrcA90p9F9PPv5y4rpLrcJJ692Ktx5IFD8OqvbbuzT1uITLyJMVY35C6C3kvQqgVMw27SoPmhu85k3K3PP8u6E4SDT4n5UCRNA%2FC5iwtfVLuxo36inbDLZ2QE4B3qTbvy4u4MPdheul7Pdxpjgdx3OqCZdlxc3UwqmHUOZIoPAlVJOnFIkcTUjBhLmK7Eg4AzfjXOf9yDliuaWQFGcprU7zHgB58SE9I2wBiyzFjLLELZ%2BazQ3eN9wGY373tyI4sQ74I1rzxQqWkg08dQLMCUVXw0d1MhOE7yc0NI8vvs4QmoCzyFBzKRC4jbVfN6Z91PLwqP5rQa1C4C5xJo9kICIgCd7BFQpOc88CoWKGyZDL3sY0mEiOFR2Nw1sY4vXLBa2MtRZ4cR0Cnwgdh64hIqKx9mv4Nv%2FOibrrwS2bKKNLv6RgqvQ3S1RIcCf5O%2ByDtYop2znH55Wd%2BHtooGhkzjJZ9L7v1Xj%2BkL%2FhvXnQ5%2FoVRApZ%2B9HhICY9DXo1fKNM1Gi%2B%2B%2FaQRritvgtyQhpIoXp5WkXvXkoQa9kczwwZ7KGztFFx4aLLCvw94Qfctc6ciNZ2MBy6qV4NK%2F9LScSfHpj55FM41cGBDApyCjd4X4RxkKFgzepFm%2BQY8l7%2FN4TKMJSw58MGOqUBBObQhth6df7h1exUGRHqc5tCkPrd2lP9i%2FYZVrWO9dVV8C9HuhkculgVqpUpllzE%2BrIS5onU3K2LBMXdYH5cV%2BQ0PegJm9BAGEfqn2b7sAdaER7D7toOJKJV0IV1JHJ6yPcbEixKqjQagNY%2FbpNKYhLFJRvDMTrccSki8%2FlBMFR1G4JdWj%2FxJrmiPzCzlnFSb%2BRRIEGzRcbkbhVDAxmWMyP2Tp6d&X-Amz-Signature=162fe42b3f319299853cf7f3ec759e6a3c04ffdc2226d45431f0c672710fd1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULT3HIDG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDhI1ksVPsyjvyk%2B97ujjHuu7t3VlBdwCYKUkgEDMdfEAiEAheqwJBn4G%2F%2BZngmi14XcU8%2F70%2B64z5l1Z1Mz3%2FJcgi8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4%2FkCDYJ7QMN2s9zSrcA90p9F9PPv5y4rpLrcJJ692Ktx5IFD8OqvbbuzT1uITLyJMVY35C6C3kvQqgVMw27SoPmhu85k3K3PP8u6E4SDT4n5UCRNA%2FC5iwtfVLuxo36inbDLZ2QE4B3qTbvy4u4MPdheul7Pdxpjgdx3OqCZdlxc3UwqmHUOZIoPAlVJOnFIkcTUjBhLmK7Eg4AzfjXOf9yDliuaWQFGcprU7zHgB58SE9I2wBiyzFjLLELZ%2BazQ3eN9wGY373tyI4sQ74I1rzxQqWkg08dQLMCUVXw0d1MhOE7yc0NI8vvs4QmoCzyFBzKRC4jbVfN6Z91PLwqP5rQa1C4C5xJo9kICIgCd7BFQpOc88CoWKGyZDL3sY0mEiOFR2Nw1sY4vXLBa2MtRZ4cR0Cnwgdh64hIqKx9mv4Nv%2FOibrrwS2bKKNLv6RgqvQ3S1RIcCf5O%2ByDtYop2znH55Wd%2BHtooGhkzjJZ9L7v1Xj%2BkL%2FhvXnQ5%2FoVRApZ%2B9HhICY9DXo1fKNM1Gi%2B%2B%2FaQRritvgtyQhpIoXp5WkXvXkoQa9kczwwZ7KGztFFx4aLLCvw94Qfctc6ciNZ2MBy6qV4NK%2F9LScSfHpj55FM41cGBDApyCjd4X4RxkKFgzepFm%2BQY8l7%2FN4TKMJSw58MGOqUBBObQhth6df7h1exUGRHqc5tCkPrd2lP9i%2FYZVrWO9dVV8C9HuhkculgVqpUpllzE%2BrIS5onU3K2LBMXdYH5cV%2BQ0PegJm9BAGEfqn2b7sAdaER7D7toOJKJV0IV1JHJ6yPcbEixKqjQagNY%2FbpNKYhLFJRvDMTrccSki8%2FlBMFR1G4JdWj%2FxJrmiPzCzlnFSb%2BRRIEGzRcbkbhVDAxmWMyP2Tp6d&X-Amz-Signature=e77b65c1f98aa0d801e71844e4edc75f39d1e2c3f4d60808ca2ba032c912847c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
