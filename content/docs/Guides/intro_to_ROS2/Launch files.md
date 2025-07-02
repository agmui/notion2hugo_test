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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIHO7WJ3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9dReXKMUOwS2SE2HolzUPSf7%2FdgZrZy5YRSaTWURdAQIgX7iih5g113rzlHmI0eFfnjO%2FYH6gCgrQWMY8ESzo8%2F4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzdnrUFiheppc5KZSrcAwrMeKEwo0GOBcEYurLlAeTv6fuFL9oXnBF5zybtNJy2cQFi%2BxSloAYWu9vCoTn066P0CUZUPRavjP%2B1p4L%2F5W%2Ft%2FVicoLcVplJUW%2FR3FAuuJMiPh2BQM%2FhPKeAqSmBkJ4P01jcPCegrAlJVxeF3pQLryXH4HrIToalDGIvp0nOl2CZxZFWpVm%2F0FSKo8Ou%2BVKsZ9S8ahVZiYME7E2v0qRSCTLHb%2BJ7LIxx7kquROtbpnLiwM%2FC%2BKcTJ%2FYFYz%2Bc79X7dTRvvbwTnBWj709ZWq2r1cBBvUnO%2BOcg1rKZovTAp%2BCnKq4CoAny6xUphDca2V8YbTbWGyzGbVH4IqnJtx00l7U7bZVIPuqBdKRAVbVPGRO9aZPQUap3krD8Ahues%2F%2FoV2iBawKNa7BMjh2plENSn9t%2BlkFK8tRU%2FqHX1PGx%2F8gCR5mRFscx1A39QuJLEV%2FokqLhxLsdtn6Zsdqe17nowC81fsKhShKzywIv1dD9Px5DPUXmyHyKm0ueqMDfZT%2BZ1RdIEIgjjQZTiDpegwh8%2B5cixNKN6khkXk1pGDpV1VLwmlT2N27wPufsMi78UqVqbY6eNNos9EuEFy3r%2FZx5SN65VlKS1yYEaJCjzfm3QwHTRFS3l2dQ7B225MInaksMGOqUBnCz8jeNFnSLLXTBdSa911qHC0PKaEHeh9UXvd9%2Byo1wGs3F8%2B5Of16UmNCetL3Ap6wbl8N%2FcN82Tx%2BGzpJB05ZAwUqYrjONtXJbVz66C2mXaM0fa2ayJ5K2yLV9fkSLRgxu4Wibr0Nse09QXLT4PA1kFEwHR6yiY1vDORx2ZYFTiCaGzISVd0crwmgZ2VeKhhInsO9odsNPeFqhZ9iqoMllZBB%2BG&X-Amz-Signature=03c043257b33d287be2bec7455c1c6b677d2c21a580b64d9e7fd88a334bc5c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIHO7WJ3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9dReXKMUOwS2SE2HolzUPSf7%2FdgZrZy5YRSaTWURdAQIgX7iih5g113rzlHmI0eFfnjO%2FYH6gCgrQWMY8ESzo8%2F4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzdnrUFiheppc5KZSrcAwrMeKEwo0GOBcEYurLlAeTv6fuFL9oXnBF5zybtNJy2cQFi%2BxSloAYWu9vCoTn066P0CUZUPRavjP%2B1p4L%2F5W%2Ft%2FVicoLcVplJUW%2FR3FAuuJMiPh2BQM%2FhPKeAqSmBkJ4P01jcPCegrAlJVxeF3pQLryXH4HrIToalDGIvp0nOl2CZxZFWpVm%2F0FSKo8Ou%2BVKsZ9S8ahVZiYME7E2v0qRSCTLHb%2BJ7LIxx7kquROtbpnLiwM%2FC%2BKcTJ%2FYFYz%2Bc79X7dTRvvbwTnBWj709ZWq2r1cBBvUnO%2BOcg1rKZovTAp%2BCnKq4CoAny6xUphDca2V8YbTbWGyzGbVH4IqnJtx00l7U7bZVIPuqBdKRAVbVPGRO9aZPQUap3krD8Ahues%2F%2FoV2iBawKNa7BMjh2plENSn9t%2BlkFK8tRU%2FqHX1PGx%2F8gCR5mRFscx1A39QuJLEV%2FokqLhxLsdtn6Zsdqe17nowC81fsKhShKzywIv1dD9Px5DPUXmyHyKm0ueqMDfZT%2BZ1RdIEIgjjQZTiDpegwh8%2B5cixNKN6khkXk1pGDpV1VLwmlT2N27wPufsMi78UqVqbY6eNNos9EuEFy3r%2FZx5SN65VlKS1yYEaJCjzfm3QwHTRFS3l2dQ7B225MInaksMGOqUBnCz8jeNFnSLLXTBdSa911qHC0PKaEHeh9UXvd9%2Byo1wGs3F8%2B5Of16UmNCetL3Ap6wbl8N%2FcN82Tx%2BGzpJB05ZAwUqYrjONtXJbVz66C2mXaM0fa2ayJ5K2yLV9fkSLRgxu4Wibr0Nse09QXLT4PA1kFEwHR6yiY1vDORx2ZYFTiCaGzISVd0crwmgZ2VeKhhInsO9odsNPeFqhZ9iqoMllZBB%2BG&X-Amz-Signature=90b138ca7a6d91ebf0a5ed0cc56396adad8ab39f12693b5a5dc1a3f1f24ee3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIHO7WJ3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9dReXKMUOwS2SE2HolzUPSf7%2FdgZrZy5YRSaTWURdAQIgX7iih5g113rzlHmI0eFfnjO%2FYH6gCgrQWMY8ESzo8%2F4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzdnrUFiheppc5KZSrcAwrMeKEwo0GOBcEYurLlAeTv6fuFL9oXnBF5zybtNJy2cQFi%2BxSloAYWu9vCoTn066P0CUZUPRavjP%2B1p4L%2F5W%2Ft%2FVicoLcVplJUW%2FR3FAuuJMiPh2BQM%2FhPKeAqSmBkJ4P01jcPCegrAlJVxeF3pQLryXH4HrIToalDGIvp0nOl2CZxZFWpVm%2F0FSKo8Ou%2BVKsZ9S8ahVZiYME7E2v0qRSCTLHb%2BJ7LIxx7kquROtbpnLiwM%2FC%2BKcTJ%2FYFYz%2Bc79X7dTRvvbwTnBWj709ZWq2r1cBBvUnO%2BOcg1rKZovTAp%2BCnKq4CoAny6xUphDca2V8YbTbWGyzGbVH4IqnJtx00l7U7bZVIPuqBdKRAVbVPGRO9aZPQUap3krD8Ahues%2F%2FoV2iBawKNa7BMjh2plENSn9t%2BlkFK8tRU%2FqHX1PGx%2F8gCR5mRFscx1A39QuJLEV%2FokqLhxLsdtn6Zsdqe17nowC81fsKhShKzywIv1dD9Px5DPUXmyHyKm0ueqMDfZT%2BZ1RdIEIgjjQZTiDpegwh8%2B5cixNKN6khkXk1pGDpV1VLwmlT2N27wPufsMi78UqVqbY6eNNos9EuEFy3r%2FZx5SN65VlKS1yYEaJCjzfm3QwHTRFS3l2dQ7B225MInaksMGOqUBnCz8jeNFnSLLXTBdSa911qHC0PKaEHeh9UXvd9%2Byo1wGs3F8%2B5Of16UmNCetL3Ap6wbl8N%2FcN82Tx%2BGzpJB05ZAwUqYrjONtXJbVz66C2mXaM0fa2ayJ5K2yLV9fkSLRgxu4Wibr0Nse09QXLT4PA1kFEwHR6yiY1vDORx2ZYFTiCaGzISVd0crwmgZ2VeKhhInsO9odsNPeFqhZ9iqoMllZBB%2BG&X-Amz-Signature=c0ae827a4d5f29874fddd31c20416a2d305224d540ac7321d1fb56ffef55d244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
