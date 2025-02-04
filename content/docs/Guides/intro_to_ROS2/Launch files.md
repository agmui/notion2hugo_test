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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64CQM44%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDP%2BvG8zXyMl3%2FSZrR6ewQyMO79j1TtvO3JJl9RfXTSzQIgEQb2FhRXBp%2FxQeTKrfY%2BbmE8zhZDtDoyGx77XYSjwKUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO3%2BqMftlWViitlYrSrcA%2BNfyI3P6Vp0B4Vd9jykC%2BaJzMsR5RLbYXauNNloqoCwBjXghafyGRFUbBQ2c06Ti94BhCrrvTmtDJRzGv9cFNgN1BXXpeAdluvuyrykEE8LrBBwLDfIn4Kgtc3FJ42JyRLqR2XcLgo%2FQ7RlMTwJA1Zod0xmGI35xZJFAU89qA8G3Ev1lSiaDids5DZqiVHopDB6Hz0LmwIkEoF9LST7nTfJxwYRvo9RAwAre3W2P9ai3c7BOi9CB0wyk35X9mSDYX2vUAttdRNHdmWnimDuQF9cX2Myd%2FfEikau4DVpqtewUvZMjEzncx1UbUgXHW0xJS5owxMuwH148xv1hc95u9D%2Fy%2BKb4HxJyT7MM%2BgO47oRn9BpmC0MA7z%2FWj1BspB9CfpekAdbkn%2Fd5UaAoFYomWVurWrjv5hysSQ8S%2B6WMjn1Hw3c9GH25FlleO%2F6UXqdOG0kiAqAu6wdK04Kj2hW7SlTCBSeV0J82weHJpw7LHx4gztz2v7%2FKab%2BAY8uQxqVj0V1H1ci%2B0pX3wK9EgKbyTM79OBnw0iJi2vIWbWhPBPUnZ3eN4zuC5XJJaoMSb%2FfIOEkL%2FOVp%2F54WOAEBFFjVisDd4bVAgH789Xd172du6tTY5vm9dCg3IMGJxP3MMGTh70GOqUBVmz0hoLn2BmCNWy5F3%2Fg3rq6Dx85WcMtND8RlFZVZETV9e%2FIE77ZLZ5d5pOZ1xeYdqbxFbb3qxXK3bGI1X42GJhkt9wMXU%2FYcbJYPtG9vY9bnzhoL%2F2z5nvnvOGcb%2B6ZodOejanmB4EARgBRRGnGvxAH%2BD3dls%2B9wS48djHibwp%2FasyX%2FWv8PXGc5dQspE3Ns83uYBQvsC%2B4g%2FmHQH1BCip6Bp47&X-Amz-Signature=ecc93bff8b1c3f130f6cf651d2cd809c78c4df3f4450fbee5281e01751469b81&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64CQM44%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDP%2BvG8zXyMl3%2FSZrR6ewQyMO79j1TtvO3JJl9RfXTSzQIgEQb2FhRXBp%2FxQeTKrfY%2BbmE8zhZDtDoyGx77XYSjwKUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO3%2BqMftlWViitlYrSrcA%2BNfyI3P6Vp0B4Vd9jykC%2BaJzMsR5RLbYXauNNloqoCwBjXghafyGRFUbBQ2c06Ti94BhCrrvTmtDJRzGv9cFNgN1BXXpeAdluvuyrykEE8LrBBwLDfIn4Kgtc3FJ42JyRLqR2XcLgo%2FQ7RlMTwJA1Zod0xmGI35xZJFAU89qA8G3Ev1lSiaDids5DZqiVHopDB6Hz0LmwIkEoF9LST7nTfJxwYRvo9RAwAre3W2P9ai3c7BOi9CB0wyk35X9mSDYX2vUAttdRNHdmWnimDuQF9cX2Myd%2FfEikau4DVpqtewUvZMjEzncx1UbUgXHW0xJS5owxMuwH148xv1hc95u9D%2Fy%2BKb4HxJyT7MM%2BgO47oRn9BpmC0MA7z%2FWj1BspB9CfpekAdbkn%2Fd5UaAoFYomWVurWrjv5hysSQ8S%2B6WMjn1Hw3c9GH25FlleO%2F6UXqdOG0kiAqAu6wdK04Kj2hW7SlTCBSeV0J82weHJpw7LHx4gztz2v7%2FKab%2BAY8uQxqVj0V1H1ci%2B0pX3wK9EgKbyTM79OBnw0iJi2vIWbWhPBPUnZ3eN4zuC5XJJaoMSb%2FfIOEkL%2FOVp%2F54WOAEBFFjVisDd4bVAgH789Xd172du6tTY5vm9dCg3IMGJxP3MMGTh70GOqUBVmz0hoLn2BmCNWy5F3%2Fg3rq6Dx85WcMtND8RlFZVZETV9e%2FIE77ZLZ5d5pOZ1xeYdqbxFbb3qxXK3bGI1X42GJhkt9wMXU%2FYcbJYPtG9vY9bnzhoL%2F2z5nvnvOGcb%2B6ZodOejanmB4EARgBRRGnGvxAH%2BD3dls%2B9wS48djHibwp%2FasyX%2FWv8PXGc5dQspE3Ns83uYBQvsC%2B4g%2FmHQH1BCip6Bp47&X-Amz-Signature=4880fe5459e18bce982fb7a8f89c61a1261151db01807dbdb4b6b2d0e2b52685&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64CQM44%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDP%2BvG8zXyMl3%2FSZrR6ewQyMO79j1TtvO3JJl9RfXTSzQIgEQb2FhRXBp%2FxQeTKrfY%2BbmE8zhZDtDoyGx77XYSjwKUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO3%2BqMftlWViitlYrSrcA%2BNfyI3P6Vp0B4Vd9jykC%2BaJzMsR5RLbYXauNNloqoCwBjXghafyGRFUbBQ2c06Ti94BhCrrvTmtDJRzGv9cFNgN1BXXpeAdluvuyrykEE8LrBBwLDfIn4Kgtc3FJ42JyRLqR2XcLgo%2FQ7RlMTwJA1Zod0xmGI35xZJFAU89qA8G3Ev1lSiaDids5DZqiVHopDB6Hz0LmwIkEoF9LST7nTfJxwYRvo9RAwAre3W2P9ai3c7BOi9CB0wyk35X9mSDYX2vUAttdRNHdmWnimDuQF9cX2Myd%2FfEikau4DVpqtewUvZMjEzncx1UbUgXHW0xJS5owxMuwH148xv1hc95u9D%2Fy%2BKb4HxJyT7MM%2BgO47oRn9BpmC0MA7z%2FWj1BspB9CfpekAdbkn%2Fd5UaAoFYomWVurWrjv5hysSQ8S%2B6WMjn1Hw3c9GH25FlleO%2F6UXqdOG0kiAqAu6wdK04Kj2hW7SlTCBSeV0J82weHJpw7LHx4gztz2v7%2FKab%2BAY8uQxqVj0V1H1ci%2B0pX3wK9EgKbyTM79OBnw0iJi2vIWbWhPBPUnZ3eN4zuC5XJJaoMSb%2FfIOEkL%2FOVp%2F54WOAEBFFjVisDd4bVAgH789Xd172du6tTY5vm9dCg3IMGJxP3MMGTh70GOqUBVmz0hoLn2BmCNWy5F3%2Fg3rq6Dx85WcMtND8RlFZVZETV9e%2FIE77ZLZ5d5pOZ1xeYdqbxFbb3qxXK3bGI1X42GJhkt9wMXU%2FYcbJYPtG9vY9bnzhoL%2F2z5nvnvOGcb%2B6ZodOejanmB4EARgBRRGnGvxAH%2BD3dls%2B9wS48djHibwp%2FasyX%2FWv8PXGc5dQspE3Ns83uYBQvsC%2B4g%2FmHQH1BCip6Bp47&X-Amz-Signature=15edbe5fa35ca48014f904331b8569e57ae3d6f527ed7d5ce50dd4c9a39436f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
