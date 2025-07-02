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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4XNFDKT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzO3ixc1PCPZuhIxMDOruGoX27cOPLh%2F8kDpayxZUGFAIgJytFjeWVihv%2Fg4B4UGdn%2FC5ahFqeWKi4LJm10ggC%2F7oqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM8QTJFNILVehxDgircA%2FhHa3ixFenBj%2BSNUKIBBLgAkm%2FwW5aUGh%2FebNJnEH%2Fi%2BuNaaQDPgPgJkcmSbudlW78NYd5M75G%2F7fQhvBbButRMoYpapTiSTOAUi693OedaLrrLgseI%2BKtXMbE2LakDytzpP6Ovqz3gMJYoAmjTD6DSbSMnRx26XWpKYpOnYuEJANgPjLJruFcA1eSWGfZd4yQnH%2Be06E8iQWwKiUhZ27DSgptdwdZndHGcmjAzTA%2Bd8HkI%2BgvPMIE%2FFvcd1gr2AF5aTsTSpDfj5Wat7Vio9HIokKZjRnoo6y1xKnP08W2qeHvjdId0V6%2B2ecvLSfeN0%2Fpf63QBPYw3CeMoRK0SSyoYD%2BC5dQEmZhaKpAUrzNpkZB5hY0g9X37pH2SaboYXSiuBTV2Z0MCu4%2BZthhtdt9LOIVDlkQdzwl9EodJPajswZfxuNU390lp14K%2Bm88Uh96uUvxi08xe6dh0xf8VYLcV%2FuJChRO9yUHcBQAgDfKv1StlbbsZzCkPTw4ALt0At5x%2FUdr%2FMrDDaxc4xDYuh94mtrr7YUxlkn20kry6kwqt3RA3ta0Y1fNj2pEZ1JvZJwRU7V7tZnsH%2B3n9c2OP0t09e7XWV%2Bat2tOVUtzRNtzIhDKKtQTUgYzHM%2BH8iMJTBlcMGOqUBdoYhomCRcnixREDgYrLcYGsOEQkgNZBDWkfyIuuBFLTy3b0wYRle4EspoSTZ7ukhbiDyQoz%2BSCI%2FvzObvb9RsbQaeLJYf0vxCECVl%2FWhqR6ZXePHf0jQOKy11xU0oF7x4qQLDnjphccHz5xlEv1PsMa9Nf1t9ycXjITjHWmiEf3BaDv%2BHKaEPGdXvHr%2BESrHq1BQwzpOeBrWIdQ0HuAEJ3oAbqjN&X-Amz-Signature=09fe01fb05d36339530a31726d037ef7c823155edecbe34dd4a60e4e04587240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4XNFDKT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzO3ixc1PCPZuhIxMDOruGoX27cOPLh%2F8kDpayxZUGFAIgJytFjeWVihv%2Fg4B4UGdn%2FC5ahFqeWKi4LJm10ggC%2F7oqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM8QTJFNILVehxDgircA%2FhHa3ixFenBj%2BSNUKIBBLgAkm%2FwW5aUGh%2FebNJnEH%2Fi%2BuNaaQDPgPgJkcmSbudlW78NYd5M75G%2F7fQhvBbButRMoYpapTiSTOAUi693OedaLrrLgseI%2BKtXMbE2LakDytzpP6Ovqz3gMJYoAmjTD6DSbSMnRx26XWpKYpOnYuEJANgPjLJruFcA1eSWGfZd4yQnH%2Be06E8iQWwKiUhZ27DSgptdwdZndHGcmjAzTA%2Bd8HkI%2BgvPMIE%2FFvcd1gr2AF5aTsTSpDfj5Wat7Vio9HIokKZjRnoo6y1xKnP08W2qeHvjdId0V6%2B2ecvLSfeN0%2Fpf63QBPYw3CeMoRK0SSyoYD%2BC5dQEmZhaKpAUrzNpkZB5hY0g9X37pH2SaboYXSiuBTV2Z0MCu4%2BZthhtdt9LOIVDlkQdzwl9EodJPajswZfxuNU390lp14K%2Bm88Uh96uUvxi08xe6dh0xf8VYLcV%2FuJChRO9yUHcBQAgDfKv1StlbbsZzCkPTw4ALt0At5x%2FUdr%2FMrDDaxc4xDYuh94mtrr7YUxlkn20kry6kwqt3RA3ta0Y1fNj2pEZ1JvZJwRU7V7tZnsH%2B3n9c2OP0t09e7XWV%2Bat2tOVUtzRNtzIhDKKtQTUgYzHM%2BH8iMJTBlcMGOqUBdoYhomCRcnixREDgYrLcYGsOEQkgNZBDWkfyIuuBFLTy3b0wYRle4EspoSTZ7ukhbiDyQoz%2BSCI%2FvzObvb9RsbQaeLJYf0vxCECVl%2FWhqR6ZXePHf0jQOKy11xU0oF7x4qQLDnjphccHz5xlEv1PsMa9Nf1t9ycXjITjHWmiEf3BaDv%2BHKaEPGdXvHr%2BESrHq1BQwzpOeBrWIdQ0HuAEJ3oAbqjN&X-Amz-Signature=fff9a8b04c1cedafadb1a2867e76e2f2a090db9d79e07f1a8ae7ff11fd8de618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4XNFDKT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzO3ixc1PCPZuhIxMDOruGoX27cOPLh%2F8kDpayxZUGFAIgJytFjeWVihv%2Fg4B4UGdn%2FC5ahFqeWKi4LJm10ggC%2F7oqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM8QTJFNILVehxDgircA%2FhHa3ixFenBj%2BSNUKIBBLgAkm%2FwW5aUGh%2FebNJnEH%2Fi%2BuNaaQDPgPgJkcmSbudlW78NYd5M75G%2F7fQhvBbButRMoYpapTiSTOAUi693OedaLrrLgseI%2BKtXMbE2LakDytzpP6Ovqz3gMJYoAmjTD6DSbSMnRx26XWpKYpOnYuEJANgPjLJruFcA1eSWGfZd4yQnH%2Be06E8iQWwKiUhZ27DSgptdwdZndHGcmjAzTA%2Bd8HkI%2BgvPMIE%2FFvcd1gr2AF5aTsTSpDfj5Wat7Vio9HIokKZjRnoo6y1xKnP08W2qeHvjdId0V6%2B2ecvLSfeN0%2Fpf63QBPYw3CeMoRK0SSyoYD%2BC5dQEmZhaKpAUrzNpkZB5hY0g9X37pH2SaboYXSiuBTV2Z0MCu4%2BZthhtdt9LOIVDlkQdzwl9EodJPajswZfxuNU390lp14K%2Bm88Uh96uUvxi08xe6dh0xf8VYLcV%2FuJChRO9yUHcBQAgDfKv1StlbbsZzCkPTw4ALt0At5x%2FUdr%2FMrDDaxc4xDYuh94mtrr7YUxlkn20kry6kwqt3RA3ta0Y1fNj2pEZ1JvZJwRU7V7tZnsH%2B3n9c2OP0t09e7XWV%2Bat2tOVUtzRNtzIhDKKtQTUgYzHM%2BH8iMJTBlcMGOqUBdoYhomCRcnixREDgYrLcYGsOEQkgNZBDWkfyIuuBFLTy3b0wYRle4EspoSTZ7ukhbiDyQoz%2BSCI%2FvzObvb9RsbQaeLJYf0vxCECVl%2FWhqR6ZXePHf0jQOKy11xU0oF7x4qQLDnjphccHz5xlEv1PsMa9Nf1t9ycXjITjHWmiEf3BaDv%2BHKaEPGdXvHr%2BESrHq1BQwzpOeBrWIdQ0HuAEJ3oAbqjN&X-Amz-Signature=9dcbe5e8c77f5d26da304fc304989c64e7eea47bb43644879e6c24b5d6570b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
