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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MK4INPP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPpAzQo%2B0mRxsJPARYlSHZR19a4ZZtWCbHAqxZAXgKFAiEAilYIvV31%2Fp675si%2Fzc9P5%2F8GB6VZB5u3GQWwSNOWdOgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLmLYoLpnNl0uU9KqSrcA3wnwY4F7WtvwRv6aRyRYcG65k4XxNpTP0HNv%2BpuMabZb4riHAPcEd%2BatndTq288ATYmBD%2FFJ94ebLtUnbDoJR20s3ax0otlXQuhP9mPKNNXEWRtdTFGFPLM07xzAiWkZra1a75OPpsJF0F7t5kVKKhFoXGVRcXtQsolJn3qlyElQceOCTkwoWiqpAVQwolnVpOd3vj3bku05jX5IjBnp70XALsDkLjq%2FdfAmeC6I8PmHu2Jfnho9BnyR1qdkzNTBlFMOTYucpoO01x10w0FLUXRNlZ%2FC4A548DPg2O%2F3RDavedv67ntH1kPcKY%2FtAYxQ6VI9x6lL9T7I9AiL0OF0kjjXkHxzZECjR%2BRgTdSdsox620oh0XfT6UwuvcFLFjSCgvS6SveawyCwR%2FsRyGWXr1%2B7Lu%2Fez0MH6VcNWE3dABOomfYnzut1ji3zQRf2TdmLgkbc3AyZT1B4Xx556%2FxwQk3l9yQG%2FvWPiGiH3m9UDadxk8eGGeVCH%2FDucZiLAu93T8uSsNMCaPpCIxiUbdEioIv65ugamTUBqqedbBLHpGM8RnTLc4KLjzEEQLVjnx2gRlwEdPphu9qonwiPFc%2BaeiWS7MaSHGova5GIcLajjyMg5rA%2BZ0fWBdqwfmWMJ%2BEssAGOqUBw7D2Eorw0e%2BhBnvP9uGrkK6XRjie83Wad9g6uiE8Mg8pL%2FA6qaBNG6bpYl550fS4ozg5Nzk1Ccm6O9wpfBQTZmjXLomF9fZQTyb4a7b1lCylfzP3fzNHCIXjM6TmweocHkaHDX0X1KNYfqibFiDPejAYLIn15anAzNwSIiVRtsPg6s545dy0pbMIA8POv0d6XCE%2FZjy%2BrSndId9yUYQWdrSxK8BD&X-Amz-Signature=a040b94b78afba8026c9fbcb93f68100468fb0bd348edcc7a56469a669b48862&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MK4INPP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPpAzQo%2B0mRxsJPARYlSHZR19a4ZZtWCbHAqxZAXgKFAiEAilYIvV31%2Fp675si%2Fzc9P5%2F8GB6VZB5u3GQWwSNOWdOgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLmLYoLpnNl0uU9KqSrcA3wnwY4F7WtvwRv6aRyRYcG65k4XxNpTP0HNv%2BpuMabZb4riHAPcEd%2BatndTq288ATYmBD%2FFJ94ebLtUnbDoJR20s3ax0otlXQuhP9mPKNNXEWRtdTFGFPLM07xzAiWkZra1a75OPpsJF0F7t5kVKKhFoXGVRcXtQsolJn3qlyElQceOCTkwoWiqpAVQwolnVpOd3vj3bku05jX5IjBnp70XALsDkLjq%2FdfAmeC6I8PmHu2Jfnho9BnyR1qdkzNTBlFMOTYucpoO01x10w0FLUXRNlZ%2FC4A548DPg2O%2F3RDavedv67ntH1kPcKY%2FtAYxQ6VI9x6lL9T7I9AiL0OF0kjjXkHxzZECjR%2BRgTdSdsox620oh0XfT6UwuvcFLFjSCgvS6SveawyCwR%2FsRyGWXr1%2B7Lu%2Fez0MH6VcNWE3dABOomfYnzut1ji3zQRf2TdmLgkbc3AyZT1B4Xx556%2FxwQk3l9yQG%2FvWPiGiH3m9UDadxk8eGGeVCH%2FDucZiLAu93T8uSsNMCaPpCIxiUbdEioIv65ugamTUBqqedbBLHpGM8RnTLc4KLjzEEQLVjnx2gRlwEdPphu9qonwiPFc%2BaeiWS7MaSHGova5GIcLajjyMg5rA%2BZ0fWBdqwfmWMJ%2BEssAGOqUBw7D2Eorw0e%2BhBnvP9uGrkK6XRjie83Wad9g6uiE8Mg8pL%2FA6qaBNG6bpYl550fS4ozg5Nzk1Ccm6O9wpfBQTZmjXLomF9fZQTyb4a7b1lCylfzP3fzNHCIXjM6TmweocHkaHDX0X1KNYfqibFiDPejAYLIn15anAzNwSIiVRtsPg6s545dy0pbMIA8POv0d6XCE%2FZjy%2BrSndId9yUYQWdrSxK8BD&X-Amz-Signature=dadc6f23f8773b8ea79bb634238d666b7b45f2c711ba11bd9be1e467bddf6ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MK4INPP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPpAzQo%2B0mRxsJPARYlSHZR19a4ZZtWCbHAqxZAXgKFAiEAilYIvV31%2Fp675si%2Fzc9P5%2F8GB6VZB5u3GQWwSNOWdOgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLmLYoLpnNl0uU9KqSrcA3wnwY4F7WtvwRv6aRyRYcG65k4XxNpTP0HNv%2BpuMabZb4riHAPcEd%2BatndTq288ATYmBD%2FFJ94ebLtUnbDoJR20s3ax0otlXQuhP9mPKNNXEWRtdTFGFPLM07xzAiWkZra1a75OPpsJF0F7t5kVKKhFoXGVRcXtQsolJn3qlyElQceOCTkwoWiqpAVQwolnVpOd3vj3bku05jX5IjBnp70XALsDkLjq%2FdfAmeC6I8PmHu2Jfnho9BnyR1qdkzNTBlFMOTYucpoO01x10w0FLUXRNlZ%2FC4A548DPg2O%2F3RDavedv67ntH1kPcKY%2FtAYxQ6VI9x6lL9T7I9AiL0OF0kjjXkHxzZECjR%2BRgTdSdsox620oh0XfT6UwuvcFLFjSCgvS6SveawyCwR%2FsRyGWXr1%2B7Lu%2Fez0MH6VcNWE3dABOomfYnzut1ji3zQRf2TdmLgkbc3AyZT1B4Xx556%2FxwQk3l9yQG%2FvWPiGiH3m9UDadxk8eGGeVCH%2FDucZiLAu93T8uSsNMCaPpCIxiUbdEioIv65ugamTUBqqedbBLHpGM8RnTLc4KLjzEEQLVjnx2gRlwEdPphu9qonwiPFc%2BaeiWS7MaSHGova5GIcLajjyMg5rA%2BZ0fWBdqwfmWMJ%2BEssAGOqUBw7D2Eorw0e%2BhBnvP9uGrkK6XRjie83Wad9g6uiE8Mg8pL%2FA6qaBNG6bpYl550fS4ozg5Nzk1Ccm6O9wpfBQTZmjXLomF9fZQTyb4a7b1lCylfzP3fzNHCIXjM6TmweocHkaHDX0X1KNYfqibFiDPejAYLIn15anAzNwSIiVRtsPg6s545dy0pbMIA8POv0d6XCE%2FZjy%2BrSndId9yUYQWdrSxK8BD&X-Amz-Signature=e2d8a8d88533f953018d36c8526f8b399a1fce3666d5ce4cf2bab916b654c5e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
