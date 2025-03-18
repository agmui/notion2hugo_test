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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HFV34X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIQuxirhM75TaBK7yypysCHrjqD6dDApTi%2Fzs%2F1hJQrAiEAgV5w4hF%2FPkBtIrpzi87rfQq9YtdnJjXkDXGxGlbzC0Uq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD%2B7bSTPabpVKRB8VyrcA4VYpEUFGbjR8foqdg%2BmwpQu26R1cQr6EsHdHn%2BJS%2BuqhC4gfQaphRFwmOeXzziPPdjLtJMthoH36PgP15aBp%2ByzxR%2FtaXUhFGkxgdI94wI%2BnDPFatk09a8xAbU5MLIRXfYDKbRp8IaoMHVvJsgVislPVDnj48adwsB1uABanKIJWKlT5Z0jMtC1GEis%2FkykfYNZYMA4glJGNkMaX3%2Fu%2F2xzmlrzHPDPlKh0RIHdd6A3fEUYMLsbxRR06bWQR6uKLCLF2PdqtBAjTZl0ewXntN%2BzMi%2B4fpIlLvtZnhAqpPz3s8uqIokXnxA4a2GDMDMKSsnTsPoJed7FNqw9HkkIsiLGN5VcamiFCB9Cc1xIH0BzWm3eWqVmTINWeAx0qSvIR2%2BThPNqvyfVkU%2BFYawHCjrUZmFndC7VrS%2Bxn3g6pdLh3pak%2B%2BhuJOIAwSPggFu6J8AI0479MlRIDDOQcV1%2By1rhDgQNJnu0KQ8X9JqmeyVb3EERQBT5LIVwyQ2UKxavsUfyVo3htePDbydOUW527OrhuhnD9ryIZgwEPPEYVZ5bX4wFT3pQxwVzG4QpTS4QzWPPQ5k2yapnOU7NyH5GqpVN39jS8%2BNyI7AD13AnfmMssFplv1DpSD8o0dM1MNC25L4GOqUB8cbktVR8tz8R8ZxNkFGxxhVqtAfGFve6Uaq3mJYCGmrEMk%2FYQctEh5i4dQJWc6M2bhC52wo5wJl9R1teaZytt81UH%2BVKeMgZ%2BebJkSyJkSRTCokTIJxKGFPAIurgPJrNC%2F8NAq7WhhMGZ4UqzIheV7TdBQs1Fe5nJbtPD4x%2FD7mJtCt34VEeZP%2B0pTbQNiBX25%2BtjKneZH89vxThQ5PuxFD2g6Hp&X-Amz-Signature=cf9aa82f8ef9a42333fbac14c0ee6668de78867333e280a0de57c8038e23fb1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HFV34X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIQuxirhM75TaBK7yypysCHrjqD6dDApTi%2Fzs%2F1hJQrAiEAgV5w4hF%2FPkBtIrpzi87rfQq9YtdnJjXkDXGxGlbzC0Uq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD%2B7bSTPabpVKRB8VyrcA4VYpEUFGbjR8foqdg%2BmwpQu26R1cQr6EsHdHn%2BJS%2BuqhC4gfQaphRFwmOeXzziPPdjLtJMthoH36PgP15aBp%2ByzxR%2FtaXUhFGkxgdI94wI%2BnDPFatk09a8xAbU5MLIRXfYDKbRp8IaoMHVvJsgVislPVDnj48adwsB1uABanKIJWKlT5Z0jMtC1GEis%2FkykfYNZYMA4glJGNkMaX3%2Fu%2F2xzmlrzHPDPlKh0RIHdd6A3fEUYMLsbxRR06bWQR6uKLCLF2PdqtBAjTZl0ewXntN%2BzMi%2B4fpIlLvtZnhAqpPz3s8uqIokXnxA4a2GDMDMKSsnTsPoJed7FNqw9HkkIsiLGN5VcamiFCB9Cc1xIH0BzWm3eWqVmTINWeAx0qSvIR2%2BThPNqvyfVkU%2BFYawHCjrUZmFndC7VrS%2Bxn3g6pdLh3pak%2B%2BhuJOIAwSPggFu6J8AI0479MlRIDDOQcV1%2By1rhDgQNJnu0KQ8X9JqmeyVb3EERQBT5LIVwyQ2UKxavsUfyVo3htePDbydOUW527OrhuhnD9ryIZgwEPPEYVZ5bX4wFT3pQxwVzG4QpTS4QzWPPQ5k2yapnOU7NyH5GqpVN39jS8%2BNyI7AD13AnfmMssFplv1DpSD8o0dM1MNC25L4GOqUB8cbktVR8tz8R8ZxNkFGxxhVqtAfGFve6Uaq3mJYCGmrEMk%2FYQctEh5i4dQJWc6M2bhC52wo5wJl9R1teaZytt81UH%2BVKeMgZ%2BebJkSyJkSRTCokTIJxKGFPAIurgPJrNC%2F8NAq7WhhMGZ4UqzIheV7TdBQs1Fe5nJbtPD4x%2FD7mJtCt34VEeZP%2B0pTbQNiBX25%2BtjKneZH89vxThQ5PuxFD2g6Hp&X-Amz-Signature=de33b003169c797349d714725101345d9f556d9ea0ef7599844a20ab95c0f13c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HFV34X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIQuxirhM75TaBK7yypysCHrjqD6dDApTi%2Fzs%2F1hJQrAiEAgV5w4hF%2FPkBtIrpzi87rfQq9YtdnJjXkDXGxGlbzC0Uq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD%2B7bSTPabpVKRB8VyrcA4VYpEUFGbjR8foqdg%2BmwpQu26R1cQr6EsHdHn%2BJS%2BuqhC4gfQaphRFwmOeXzziPPdjLtJMthoH36PgP15aBp%2ByzxR%2FtaXUhFGkxgdI94wI%2BnDPFatk09a8xAbU5MLIRXfYDKbRp8IaoMHVvJsgVislPVDnj48adwsB1uABanKIJWKlT5Z0jMtC1GEis%2FkykfYNZYMA4glJGNkMaX3%2Fu%2F2xzmlrzHPDPlKh0RIHdd6A3fEUYMLsbxRR06bWQR6uKLCLF2PdqtBAjTZl0ewXntN%2BzMi%2B4fpIlLvtZnhAqpPz3s8uqIokXnxA4a2GDMDMKSsnTsPoJed7FNqw9HkkIsiLGN5VcamiFCB9Cc1xIH0BzWm3eWqVmTINWeAx0qSvIR2%2BThPNqvyfVkU%2BFYawHCjrUZmFndC7VrS%2Bxn3g6pdLh3pak%2B%2BhuJOIAwSPggFu6J8AI0479MlRIDDOQcV1%2By1rhDgQNJnu0KQ8X9JqmeyVb3EERQBT5LIVwyQ2UKxavsUfyVo3htePDbydOUW527OrhuhnD9ryIZgwEPPEYVZ5bX4wFT3pQxwVzG4QpTS4QzWPPQ5k2yapnOU7NyH5GqpVN39jS8%2BNyI7AD13AnfmMssFplv1DpSD8o0dM1MNC25L4GOqUB8cbktVR8tz8R8ZxNkFGxxhVqtAfGFve6Uaq3mJYCGmrEMk%2FYQctEh5i4dQJWc6M2bhC52wo5wJl9R1teaZytt81UH%2BVKeMgZ%2BebJkSyJkSRTCokTIJxKGFPAIurgPJrNC%2F8NAq7WhhMGZ4UqzIheV7TdBQs1Fe5nJbtPD4x%2FD7mJtCt34VEeZP%2B0pTbQNiBX25%2BtjKneZH89vxThQ5PuxFD2g6Hp&X-Amz-Signature=aa605c36f6203ae6fd3bf8be8518c8c97a6b90da0c74317d99435e0e410b6517&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
