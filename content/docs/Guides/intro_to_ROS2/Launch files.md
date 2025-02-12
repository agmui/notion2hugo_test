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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG3PBEPG%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhdWKqnhZb7pIxPR8b9sYKrH%2Ferpya%2B5l37azquCnnHAiEAnMP3Se3ewoiJYKrA3pdolrnfKE0VCEC%2B8%2BndMfF93dgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYo%2FOCOBdadPM1TwyrcA%2FqBtqIMLaRBC3uxdJRN7HkSf1qwR8UMeTdYKDYu84SZrNUnsU0Zsodk9qcBqU8%2B6D9hjNmFOBLXOFdM62hrhfxbmdMR84DOpvDTkoPOkiE3advizjO8CM8REWxycuhistXD4PEDUxVmFpbWsbkUUtDF3HSY6TtrBcWlLKSKfbr3FT7Bm%2FxUyQ93idLYLVQ67LvOuqtIDIhcgtEqyDXXjwBbIOokSh7bmBcwH%2Fv4hdYLG3IsGb%2F%2BI7JNnlpM1ytGw%2FmbFTdCl2MWaSIyQtpe7xz5W9G2737qsAxFTETihDe2fStoU3T6NxMCn%2FoJM2TIt2TQRaZwL7%2B6Jh%2FUd3sF2ZSF%2FKOFxoQ%2FrNNBGrLrciA6QC0CLLnXzVr5Rh5r4CL4AILrX87u%2FUF%2Bpkv3jyb2%2F3CN6pyAmJeG7S%2Fqx4S8vGBiqno3Y1Zqzh0aZxGFkySv4k7289taSlflcNCuIayd9Q%2BWhh0q%2ByWVgdY4LXHSVIobn84ZNQIgG5uSt6HCKN6LiXm6RhNlze58NwX7T3jYnzjQx1trBda%2Bg7EIs7piVIi3r3fBLLkNfREComZM8GgTnohLUVh1iq%2BXBi6hNUT4ncd%2Bd52F%2FHjec%2B2j4E3dOqQCcgWVCOFw%2BtY1LX%2BjMNHpr70GOqUBQ5B2MtOvQ3yazE0QIEO7COv6QA%2F36aIW9OhB87xo9v3RJNY%2FrlrKicKgnFz6D3ifw5VeB7zL6KVhGrRJ47y9xOXBR4aYWHmGmcw%2B2bMdl8NUXHFiGXi%2BLQGcc3XHwVaRJhTJ1Mvq7Av%2F74qAtgpRA8e1dt%2FQNKRkBVXOGBAc2bf7SGLgRkLYW1OAZ5OifgBqNJXsPKzqYKCASWN%2BgC5lRdfKHBP4&X-Amz-Signature=01d9373261977993b1b8c2e3a7c2523fc26e2a18c856f13af2838a9a28c71f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG3PBEPG%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhdWKqnhZb7pIxPR8b9sYKrH%2Ferpya%2B5l37azquCnnHAiEAnMP3Se3ewoiJYKrA3pdolrnfKE0VCEC%2B8%2BndMfF93dgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYo%2FOCOBdadPM1TwyrcA%2FqBtqIMLaRBC3uxdJRN7HkSf1qwR8UMeTdYKDYu84SZrNUnsU0Zsodk9qcBqU8%2B6D9hjNmFOBLXOFdM62hrhfxbmdMR84DOpvDTkoPOkiE3advizjO8CM8REWxycuhistXD4PEDUxVmFpbWsbkUUtDF3HSY6TtrBcWlLKSKfbr3FT7Bm%2FxUyQ93idLYLVQ67LvOuqtIDIhcgtEqyDXXjwBbIOokSh7bmBcwH%2Fv4hdYLG3IsGb%2F%2BI7JNnlpM1ytGw%2FmbFTdCl2MWaSIyQtpe7xz5W9G2737qsAxFTETihDe2fStoU3T6NxMCn%2FoJM2TIt2TQRaZwL7%2B6Jh%2FUd3sF2ZSF%2FKOFxoQ%2FrNNBGrLrciA6QC0CLLnXzVr5Rh5r4CL4AILrX87u%2FUF%2Bpkv3jyb2%2F3CN6pyAmJeG7S%2Fqx4S8vGBiqno3Y1Zqzh0aZxGFkySv4k7289taSlflcNCuIayd9Q%2BWhh0q%2ByWVgdY4LXHSVIobn84ZNQIgG5uSt6HCKN6LiXm6RhNlze58NwX7T3jYnzjQx1trBda%2Bg7EIs7piVIi3r3fBLLkNfREComZM8GgTnohLUVh1iq%2BXBi6hNUT4ncd%2Bd52F%2FHjec%2B2j4E3dOqQCcgWVCOFw%2BtY1LX%2BjMNHpr70GOqUBQ5B2MtOvQ3yazE0QIEO7COv6QA%2F36aIW9OhB87xo9v3RJNY%2FrlrKicKgnFz6D3ifw5VeB7zL6KVhGrRJ47y9xOXBR4aYWHmGmcw%2B2bMdl8NUXHFiGXi%2BLQGcc3XHwVaRJhTJ1Mvq7Av%2F74qAtgpRA8e1dt%2FQNKRkBVXOGBAc2bf7SGLgRkLYW1OAZ5OifgBqNJXsPKzqYKCASWN%2BgC5lRdfKHBP4&X-Amz-Signature=7ebf6c5b965405398ee23929fda113e7b2e9fdbf4c4b481aa6bed4ecf8752ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG3PBEPG%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhdWKqnhZb7pIxPR8b9sYKrH%2Ferpya%2B5l37azquCnnHAiEAnMP3Se3ewoiJYKrA3pdolrnfKE0VCEC%2B8%2BndMfF93dgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYo%2FOCOBdadPM1TwyrcA%2FqBtqIMLaRBC3uxdJRN7HkSf1qwR8UMeTdYKDYu84SZrNUnsU0Zsodk9qcBqU8%2B6D9hjNmFOBLXOFdM62hrhfxbmdMR84DOpvDTkoPOkiE3advizjO8CM8REWxycuhistXD4PEDUxVmFpbWsbkUUtDF3HSY6TtrBcWlLKSKfbr3FT7Bm%2FxUyQ93idLYLVQ67LvOuqtIDIhcgtEqyDXXjwBbIOokSh7bmBcwH%2Fv4hdYLG3IsGb%2F%2BI7JNnlpM1ytGw%2FmbFTdCl2MWaSIyQtpe7xz5W9G2737qsAxFTETihDe2fStoU3T6NxMCn%2FoJM2TIt2TQRaZwL7%2B6Jh%2FUd3sF2ZSF%2FKOFxoQ%2FrNNBGrLrciA6QC0CLLnXzVr5Rh5r4CL4AILrX87u%2FUF%2Bpkv3jyb2%2F3CN6pyAmJeG7S%2Fqx4S8vGBiqno3Y1Zqzh0aZxGFkySv4k7289taSlflcNCuIayd9Q%2BWhh0q%2ByWVgdY4LXHSVIobn84ZNQIgG5uSt6HCKN6LiXm6RhNlze58NwX7T3jYnzjQx1trBda%2Bg7EIs7piVIi3r3fBLLkNfREComZM8GgTnohLUVh1iq%2BXBi6hNUT4ncd%2Bd52F%2FHjec%2B2j4E3dOqQCcgWVCOFw%2BtY1LX%2BjMNHpr70GOqUBQ5B2MtOvQ3yazE0QIEO7COv6QA%2F36aIW9OhB87xo9v3RJNY%2FrlrKicKgnFz6D3ifw5VeB7zL6KVhGrRJ47y9xOXBR4aYWHmGmcw%2B2bMdl8NUXHFiGXi%2BLQGcc3XHwVaRJhTJ1Mvq7Av%2F74qAtgpRA8e1dt%2FQNKRkBVXOGBAc2bf7SGLgRkLYW1OAZ5OifgBqNJXsPKzqYKCASWN%2BgC5lRdfKHBP4&X-Amz-Signature=1dee744d8b23b8a2ed32fce1294974de29ef104997084c3be73cf64f01d38bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
