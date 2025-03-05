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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKEEWH5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6OUMirXrJsRvBbx1y92fNNLijjfJdhmBy92B9AtpVCwIhAJTEuxFiltMt6%2FCjeDZGONCNQqsfYImNco21ZP8MPLL1Kv8DCB0QABoMNjM3NDIzMTgzODA1IgwUCHnH%2BAcz1zFGyDsq3AOfzYQlJT6wlscptA3UUa94NXSes2rV0JugPOhJ2YViUXMlk%2Btnp1DP5gQUbWU0ts6lD%2B4r3P%2BcuBXmaRyFXgShBogJwK31RTdUzTGxDdbM%2BFqj5XbKYV1TDHTD6oWru0VRSSFct1gUCpJiNFI3pLUD229bpWebH1aUAlPgnDdyyXtpMj%2FL9h9MdZeX67HkXY%2FZR1NKuSUJfbNmlt5BvUxCOmW8C6CyXwX6WxtW2vvcKkL62F%2BT5kOdJAnACuHYenKq0JwNdk%2F%2BndJNK%2BZqJKiltmX1TgyGBSCrXBZsxf%2B65UmZy%2Fh7U7nnqmhDJw2vvCPVplrrDINCwNaDPUXbUypF%2BoLKWWjXXrX2wzLsVJMrJ%2BV9LTO%2B3LglQXbRQBDYyua%2BRRq5EL2sCu9I79gXOaI3%2BTpGN0k8CqASbBTiB9bMzkODUr3IZOPqaWjT%2BVwn53p72XzSPYbTvk8TagZv4EDJGABsQygD0lHq1RKLu6fMf06NAUQWG7B511mCnSR4%2BoXNfGcMxxvhAUV5JJSfSSUlehK%2Fb%2Bmr8tpg7kuTtrSx3WP%2FUyLB%2BfdKUwBYrwESsBFzcDcIM6ZtIBgGkG%2FZNGrApeCwptkR7Ar89MRBJ7p0tIisFb1rt1i6PHXYMjDl4KK%2BBjqkAe0i2t8BfU5GY4RHvFMc2%2FRqfgBirBLmWDIXjW2WV%2FoGsah1EB3L1LqS6BECdsjxxvXxwRwBjdvpM3%2BLNQInpPONNofTKf02TgJ6V%2Bd8INw%2FjBpXSDe6Jq5KTPbKkb9bt9r2mDMxk2ILGc%2FLL0hPMch3dtQ7%2FyueeWk8jX8RuHPPoxSZwejBcRW7xq3sQ7frd%2BAao1GKIRfdw2vq2bui6J4CJmR4&X-Amz-Signature=2e4f060e382506734b35bc29adda9c933a1047ccfc1425e205be718b233c154d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKEEWH5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6OUMirXrJsRvBbx1y92fNNLijjfJdhmBy92B9AtpVCwIhAJTEuxFiltMt6%2FCjeDZGONCNQqsfYImNco21ZP8MPLL1Kv8DCB0QABoMNjM3NDIzMTgzODA1IgwUCHnH%2BAcz1zFGyDsq3AOfzYQlJT6wlscptA3UUa94NXSes2rV0JugPOhJ2YViUXMlk%2Btnp1DP5gQUbWU0ts6lD%2B4r3P%2BcuBXmaRyFXgShBogJwK31RTdUzTGxDdbM%2BFqj5XbKYV1TDHTD6oWru0VRSSFct1gUCpJiNFI3pLUD229bpWebH1aUAlPgnDdyyXtpMj%2FL9h9MdZeX67HkXY%2FZR1NKuSUJfbNmlt5BvUxCOmW8C6CyXwX6WxtW2vvcKkL62F%2BT5kOdJAnACuHYenKq0JwNdk%2F%2BndJNK%2BZqJKiltmX1TgyGBSCrXBZsxf%2B65UmZy%2Fh7U7nnqmhDJw2vvCPVplrrDINCwNaDPUXbUypF%2BoLKWWjXXrX2wzLsVJMrJ%2BV9LTO%2B3LglQXbRQBDYyua%2BRRq5EL2sCu9I79gXOaI3%2BTpGN0k8CqASbBTiB9bMzkODUr3IZOPqaWjT%2BVwn53p72XzSPYbTvk8TagZv4EDJGABsQygD0lHq1RKLu6fMf06NAUQWG7B511mCnSR4%2BoXNfGcMxxvhAUV5JJSfSSUlehK%2Fb%2Bmr8tpg7kuTtrSx3WP%2FUyLB%2BfdKUwBYrwESsBFzcDcIM6ZtIBgGkG%2FZNGrApeCwptkR7Ar89MRBJ7p0tIisFb1rt1i6PHXYMjDl4KK%2BBjqkAe0i2t8BfU5GY4RHvFMc2%2FRqfgBirBLmWDIXjW2WV%2FoGsah1EB3L1LqS6BECdsjxxvXxwRwBjdvpM3%2BLNQInpPONNofTKf02TgJ6V%2Bd8INw%2FjBpXSDe6Jq5KTPbKkb9bt9r2mDMxk2ILGc%2FLL0hPMch3dtQ7%2FyueeWk8jX8RuHPPoxSZwejBcRW7xq3sQ7frd%2BAao1GKIRfdw2vq2bui6J4CJmR4&X-Amz-Signature=102fce9ecd2fa09122cbd755776e629e305abe64f6675f3f37f2e0d69c27dddb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKEEWH5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6OUMirXrJsRvBbx1y92fNNLijjfJdhmBy92B9AtpVCwIhAJTEuxFiltMt6%2FCjeDZGONCNQqsfYImNco21ZP8MPLL1Kv8DCB0QABoMNjM3NDIzMTgzODA1IgwUCHnH%2BAcz1zFGyDsq3AOfzYQlJT6wlscptA3UUa94NXSes2rV0JugPOhJ2YViUXMlk%2Btnp1DP5gQUbWU0ts6lD%2B4r3P%2BcuBXmaRyFXgShBogJwK31RTdUzTGxDdbM%2BFqj5XbKYV1TDHTD6oWru0VRSSFct1gUCpJiNFI3pLUD229bpWebH1aUAlPgnDdyyXtpMj%2FL9h9MdZeX67HkXY%2FZR1NKuSUJfbNmlt5BvUxCOmW8C6CyXwX6WxtW2vvcKkL62F%2BT5kOdJAnACuHYenKq0JwNdk%2F%2BndJNK%2BZqJKiltmX1TgyGBSCrXBZsxf%2B65UmZy%2Fh7U7nnqmhDJw2vvCPVplrrDINCwNaDPUXbUypF%2BoLKWWjXXrX2wzLsVJMrJ%2BV9LTO%2B3LglQXbRQBDYyua%2BRRq5EL2sCu9I79gXOaI3%2BTpGN0k8CqASbBTiB9bMzkODUr3IZOPqaWjT%2BVwn53p72XzSPYbTvk8TagZv4EDJGABsQygD0lHq1RKLu6fMf06NAUQWG7B511mCnSR4%2BoXNfGcMxxvhAUV5JJSfSSUlehK%2Fb%2Bmr8tpg7kuTtrSx3WP%2FUyLB%2BfdKUwBYrwESsBFzcDcIM6ZtIBgGkG%2FZNGrApeCwptkR7Ar89MRBJ7p0tIisFb1rt1i6PHXYMjDl4KK%2BBjqkAe0i2t8BfU5GY4RHvFMc2%2FRqfgBirBLmWDIXjW2WV%2FoGsah1EB3L1LqS6BECdsjxxvXxwRwBjdvpM3%2BLNQInpPONNofTKf02TgJ6V%2Bd8INw%2FjBpXSDe6Jq5KTPbKkb9bt9r2mDMxk2ILGc%2FLL0hPMch3dtQ7%2FyueeWk8jX8RuHPPoxSZwejBcRW7xq3sQ7frd%2BAao1GKIRfdw2vq2bui6J4CJmR4&X-Amz-Signature=4cb57f7f360ced81cbdd176795dcff2300daec16f417af90d64cf748e380a317&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
