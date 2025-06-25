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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUTSRNE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCfBUhe71unRa3WwVhNEuJ%2BmWUwqYV2uwq0XErGwT8h5QIgeNgJaxEEigxemqlgB5KcMtVH7xSeyOGbuormeHZWZJ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEFLQhMZHhXhNeCM8yrcA8dbb4Ey2lMkMF%2B1fF8%2BL%2B%2BvqHiavWlhf6M0Cv6qs9%2F3bmex2Hn6QgH%2BWRaElh4uyvwzKdTAHaDwFlZ3X%2FKmCkR9chGDwHVTXxcw6aPuaKF1q7UHJuWF28%2FMbqWU1RWscPUpIeRvZwlAn6gNed04wLVZ5so7b3x80aNHdEQy8gFTumYebGUI9o3DvgNDznhb%2BbKi9cGpzh4bJmXkdceqOBkMTFg%2BuWySAdIzhuLU4%2FvTVlgrtHQv2C4n9QSdEO0TViboNa%2Bu2eVGuHXehNwT6STSGXoL4hc%2BFZ9ftyrGK4BzO6n5F8n%2BSN2zUogdfda53ftbxrpg5Q7%2FXYQKRaCsClXNypxOFr4YY3HrUkzLhgdeBCKrj59nwPg3Nl6a7cznrwUx5XrLqRygk78gxQs04LPqeEZfKHeYfVYHX%2BAmUGZUnpTLYKa90Lb3ISe%2F%2B%2B4s47T1wb3RnBfGorOzwi2bO9UsGlV3oRk4M2I2tIiBdbtAkmogUdyOyrC5S3fPYpD%2Bs7TvZa3qjgos1OxU8wdiZotYTJ9%2BgzdLgligfXAuYTfjhkZaKpUogmNDRErfef8%2Boq8YeKeIx9EhF%2Bt3QVLPHOXE4qQLKGccU93eQWU8NsMzRu53uVjJzZoJQgTuMK%2Fv78IGOqUB9hFEMuYuQBPpRTXn%2Fzmldgal4WnqMFI60jw9th%2FV21%2B8H%2BO8%2BYWOOlpGWOHxiDn2r5bViaftRa8%2BmabOOCU7aEpiV%2Bdhb8%2BGa0RFBlgZWGJ66gnZqGeUu4X%2Fmo8X1LRcP8O5PBlKsm0vBAkCuAGPTKs5RAUkc1%2FzBPrZtVbB90o9%2B1DEY%2BAyF88Jd3PLtl8nu1iacmpi%2FO0y2TfjgXgvDioEd8Co&X-Amz-Signature=0215334e66504bc7373b390725448a68a60f587750888cc6df8ec422d5cec273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUTSRNE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCfBUhe71unRa3WwVhNEuJ%2BmWUwqYV2uwq0XErGwT8h5QIgeNgJaxEEigxemqlgB5KcMtVH7xSeyOGbuormeHZWZJ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEFLQhMZHhXhNeCM8yrcA8dbb4Ey2lMkMF%2B1fF8%2BL%2B%2BvqHiavWlhf6M0Cv6qs9%2F3bmex2Hn6QgH%2BWRaElh4uyvwzKdTAHaDwFlZ3X%2FKmCkR9chGDwHVTXxcw6aPuaKF1q7UHJuWF28%2FMbqWU1RWscPUpIeRvZwlAn6gNed04wLVZ5so7b3x80aNHdEQy8gFTumYebGUI9o3DvgNDznhb%2BbKi9cGpzh4bJmXkdceqOBkMTFg%2BuWySAdIzhuLU4%2FvTVlgrtHQv2C4n9QSdEO0TViboNa%2Bu2eVGuHXehNwT6STSGXoL4hc%2BFZ9ftyrGK4BzO6n5F8n%2BSN2zUogdfda53ftbxrpg5Q7%2FXYQKRaCsClXNypxOFr4YY3HrUkzLhgdeBCKrj59nwPg3Nl6a7cznrwUx5XrLqRygk78gxQs04LPqeEZfKHeYfVYHX%2BAmUGZUnpTLYKa90Lb3ISe%2F%2B%2B4s47T1wb3RnBfGorOzwi2bO9UsGlV3oRk4M2I2tIiBdbtAkmogUdyOyrC5S3fPYpD%2Bs7TvZa3qjgos1OxU8wdiZotYTJ9%2BgzdLgligfXAuYTfjhkZaKpUogmNDRErfef8%2Boq8YeKeIx9EhF%2Bt3QVLPHOXE4qQLKGccU93eQWU8NsMzRu53uVjJzZoJQgTuMK%2Fv78IGOqUB9hFEMuYuQBPpRTXn%2Fzmldgal4WnqMFI60jw9th%2FV21%2B8H%2BO8%2BYWOOlpGWOHxiDn2r5bViaftRa8%2BmabOOCU7aEpiV%2Bdhb8%2BGa0RFBlgZWGJ66gnZqGeUu4X%2Fmo8X1LRcP8O5PBlKsm0vBAkCuAGPTKs5RAUkc1%2FzBPrZtVbB90o9%2B1DEY%2BAyF88Jd3PLtl8nu1iacmpi%2FO0y2TfjgXgvDioEd8Co&X-Amz-Signature=75eec31f82849ec64872e2e41cd5ea2db067b10d1b4281145a63ad5b4a977781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUTSRNE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCfBUhe71unRa3WwVhNEuJ%2BmWUwqYV2uwq0XErGwT8h5QIgeNgJaxEEigxemqlgB5KcMtVH7xSeyOGbuormeHZWZJ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEFLQhMZHhXhNeCM8yrcA8dbb4Ey2lMkMF%2B1fF8%2BL%2B%2BvqHiavWlhf6M0Cv6qs9%2F3bmex2Hn6QgH%2BWRaElh4uyvwzKdTAHaDwFlZ3X%2FKmCkR9chGDwHVTXxcw6aPuaKF1q7UHJuWF28%2FMbqWU1RWscPUpIeRvZwlAn6gNed04wLVZ5so7b3x80aNHdEQy8gFTumYebGUI9o3DvgNDznhb%2BbKi9cGpzh4bJmXkdceqOBkMTFg%2BuWySAdIzhuLU4%2FvTVlgrtHQv2C4n9QSdEO0TViboNa%2Bu2eVGuHXehNwT6STSGXoL4hc%2BFZ9ftyrGK4BzO6n5F8n%2BSN2zUogdfda53ftbxrpg5Q7%2FXYQKRaCsClXNypxOFr4YY3HrUkzLhgdeBCKrj59nwPg3Nl6a7cznrwUx5XrLqRygk78gxQs04LPqeEZfKHeYfVYHX%2BAmUGZUnpTLYKa90Lb3ISe%2F%2B%2B4s47T1wb3RnBfGorOzwi2bO9UsGlV3oRk4M2I2tIiBdbtAkmogUdyOyrC5S3fPYpD%2Bs7TvZa3qjgos1OxU8wdiZotYTJ9%2BgzdLgligfXAuYTfjhkZaKpUogmNDRErfef8%2Boq8YeKeIx9EhF%2Bt3QVLPHOXE4qQLKGccU93eQWU8NsMzRu53uVjJzZoJQgTuMK%2Fv78IGOqUB9hFEMuYuQBPpRTXn%2Fzmldgal4WnqMFI60jw9th%2FV21%2B8H%2BO8%2BYWOOlpGWOHxiDn2r5bViaftRa8%2BmabOOCU7aEpiV%2Bdhb8%2BGa0RFBlgZWGJ66gnZqGeUu4X%2Fmo8X1LRcP8O5PBlKsm0vBAkCuAGPTKs5RAUkc1%2FzBPrZtVbB90o9%2B1DEY%2BAyF88Jd3PLtl8nu1iacmpi%2FO0y2TfjgXgvDioEd8Co&X-Amz-Signature=5f1d7e19ce12f0cd52df07e8882ce09349a9ae98b901ee505ed6d274270092b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
