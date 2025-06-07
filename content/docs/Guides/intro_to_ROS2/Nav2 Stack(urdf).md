---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJIIS7SQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDyHGtNG1t4K4cC6VyIAx2KLVJ3cGqiw%2B8a4dzuv5hcQIgbIrg%2BfGx50ywcxFJdGO4xCbeX2esmE2oRLEr2cwK1AQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNgpHrz6Z%2BfY1LAuKCrcA8q%2Fg0QbJPC6urTWVYq%2FY7fLKf8eHcPXBpvvPdmSyrpI5USeQw08dJ0BCx8y%2Fz3bibIaC5Ei15cUH8ot2pd%2FvtNMI%2BLk6AFYPHKJam4ECo82RDLfo7vnEITaCqWeCxbqzw3d7taT%2BR5X4QXoetH5VopNOUvrcV7kRK214EdI6X4WNi%2Bf14EkWQcOPmBrErr9UVPj%2Fq4a6XyDtJRw4xZ7WE2Pc36%2BN9cOFIIPQrH%2Fqye4%2FJb%2B7XWc2PkAmY6hI%2BTzyNQZvY%2Fc7IypK84UwMTIdUjzM5yMUTEh3yHZxqRl3uJl2LrvDqqbYrD0Pctoxat%2B8dWfodod9Jkjr2XD9iXFS2w12vVPgf9V9q1SFwdBetPb8DdMFGULxdgperqr3W%2Fwj%2BnKPE9y0BNyWUVXiW79qwCuqhl5UpRimJh%2FRySNHS1TkK6S9TuQYR2lX27MZcnjfj274uRg08Vj%2BskmravlDzCc%2BuI0JVI%2BFIPVSVPdcuWk4qT1%2BVrTFrTp8wa2Eab8HC4%2F5tcraMWa39sa966xDYAp4qVjClclbNTDhu%2F1vMVZ0Dh87ixLj1xSKEedxPDnzzxSbwNprBjwRusS%2BqzXiURcY1FQWSrsswgp254YuONwTKipkE080jg%2FycMbMIHTksIGOqUBuUspMXfKgoeeBwUcOnuBpQxxeNiMdGevUzM3E0Wck7iX09Hhqg%2B2HWFzWXt0Pp33F3pMWzVtZqcSkzwu%2B%2BMESADv85S5o6i6SonvNyRK3PIQv8py%2BMB4gEaEzrcxq1XKRRR07Xe%2BXKOHkT0Ueb2TaPFDI%2F6kbv0N9m5%2FyN3aH57fT3c6%2Fz8kiQerOHXMS4SC92ex4YrnkKCNaG9bM7UqNb9sg9mJ&X-Amz-Signature=a2842eca57e7ba4a6893f84fab6eb42ae07b262d633fb63c068b75d2170ff100&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJIIS7SQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDyHGtNG1t4K4cC6VyIAx2KLVJ3cGqiw%2B8a4dzuv5hcQIgbIrg%2BfGx50ywcxFJdGO4xCbeX2esmE2oRLEr2cwK1AQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNgpHrz6Z%2BfY1LAuKCrcA8q%2Fg0QbJPC6urTWVYq%2FY7fLKf8eHcPXBpvvPdmSyrpI5USeQw08dJ0BCx8y%2Fz3bibIaC5Ei15cUH8ot2pd%2FvtNMI%2BLk6AFYPHKJam4ECo82RDLfo7vnEITaCqWeCxbqzw3d7taT%2BR5X4QXoetH5VopNOUvrcV7kRK214EdI6X4WNi%2Bf14EkWQcOPmBrErr9UVPj%2Fq4a6XyDtJRw4xZ7WE2Pc36%2BN9cOFIIPQrH%2Fqye4%2FJb%2B7XWc2PkAmY6hI%2BTzyNQZvY%2Fc7IypK84UwMTIdUjzM5yMUTEh3yHZxqRl3uJl2LrvDqqbYrD0Pctoxat%2B8dWfodod9Jkjr2XD9iXFS2w12vVPgf9V9q1SFwdBetPb8DdMFGULxdgperqr3W%2Fwj%2BnKPE9y0BNyWUVXiW79qwCuqhl5UpRimJh%2FRySNHS1TkK6S9TuQYR2lX27MZcnjfj274uRg08Vj%2BskmravlDzCc%2BuI0JVI%2BFIPVSVPdcuWk4qT1%2BVrTFrTp8wa2Eab8HC4%2F5tcraMWa39sa966xDYAp4qVjClclbNTDhu%2F1vMVZ0Dh87ixLj1xSKEedxPDnzzxSbwNprBjwRusS%2BqzXiURcY1FQWSrsswgp254YuONwTKipkE080jg%2FycMbMIHTksIGOqUBuUspMXfKgoeeBwUcOnuBpQxxeNiMdGevUzM3E0Wck7iX09Hhqg%2B2HWFzWXt0Pp33F3pMWzVtZqcSkzwu%2B%2BMESADv85S5o6i6SonvNyRK3PIQv8py%2BMB4gEaEzrcxq1XKRRR07Xe%2BXKOHkT0Ueb2TaPFDI%2F6kbv0N9m5%2FyN3aH57fT3c6%2Fz8kiQerOHXMS4SC92ex4YrnkKCNaG9bM7UqNb9sg9mJ&X-Amz-Signature=2721f7cd55bfeb6962e1e260563a59b8146111b10babb6381bf88fe449c16871&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJIIS7SQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDyHGtNG1t4K4cC6VyIAx2KLVJ3cGqiw%2B8a4dzuv5hcQIgbIrg%2BfGx50ywcxFJdGO4xCbeX2esmE2oRLEr2cwK1AQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNgpHrz6Z%2BfY1LAuKCrcA8q%2Fg0QbJPC6urTWVYq%2FY7fLKf8eHcPXBpvvPdmSyrpI5USeQw08dJ0BCx8y%2Fz3bibIaC5Ei15cUH8ot2pd%2FvtNMI%2BLk6AFYPHKJam4ECo82RDLfo7vnEITaCqWeCxbqzw3d7taT%2BR5X4QXoetH5VopNOUvrcV7kRK214EdI6X4WNi%2Bf14EkWQcOPmBrErr9UVPj%2Fq4a6XyDtJRw4xZ7WE2Pc36%2BN9cOFIIPQrH%2Fqye4%2FJb%2B7XWc2PkAmY6hI%2BTzyNQZvY%2Fc7IypK84UwMTIdUjzM5yMUTEh3yHZxqRl3uJl2LrvDqqbYrD0Pctoxat%2B8dWfodod9Jkjr2XD9iXFS2w12vVPgf9V9q1SFwdBetPb8DdMFGULxdgperqr3W%2Fwj%2BnKPE9y0BNyWUVXiW79qwCuqhl5UpRimJh%2FRySNHS1TkK6S9TuQYR2lX27MZcnjfj274uRg08Vj%2BskmravlDzCc%2BuI0JVI%2BFIPVSVPdcuWk4qT1%2BVrTFrTp8wa2Eab8HC4%2F5tcraMWa39sa966xDYAp4qVjClclbNTDhu%2F1vMVZ0Dh87ixLj1xSKEedxPDnzzxSbwNprBjwRusS%2BqzXiURcY1FQWSrsswgp254YuONwTKipkE080jg%2FycMbMIHTksIGOqUBuUspMXfKgoeeBwUcOnuBpQxxeNiMdGevUzM3E0Wck7iX09Hhqg%2B2HWFzWXt0Pp33F3pMWzVtZqcSkzwu%2B%2BMESADv85S5o6i6SonvNyRK3PIQv8py%2BMB4gEaEzrcxq1XKRRR07Xe%2BXKOHkT0Ueb2TaPFDI%2F6kbv0N9m5%2FyN3aH57fT3c6%2Fz8kiQerOHXMS4SC92ex4YrnkKCNaG9bM7UqNb9sg9mJ&X-Amz-Signature=557cef1295a8cc3032ba4d9ea027e24b08e7c24663582c0300f53014fd092b80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJIIS7SQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDyHGtNG1t4K4cC6VyIAx2KLVJ3cGqiw%2B8a4dzuv5hcQIgbIrg%2BfGx50ywcxFJdGO4xCbeX2esmE2oRLEr2cwK1AQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNgpHrz6Z%2BfY1LAuKCrcA8q%2Fg0QbJPC6urTWVYq%2FY7fLKf8eHcPXBpvvPdmSyrpI5USeQw08dJ0BCx8y%2Fz3bibIaC5Ei15cUH8ot2pd%2FvtNMI%2BLk6AFYPHKJam4ECo82RDLfo7vnEITaCqWeCxbqzw3d7taT%2BR5X4QXoetH5VopNOUvrcV7kRK214EdI6X4WNi%2Bf14EkWQcOPmBrErr9UVPj%2Fq4a6XyDtJRw4xZ7WE2Pc36%2BN9cOFIIPQrH%2Fqye4%2FJb%2B7XWc2PkAmY6hI%2BTzyNQZvY%2Fc7IypK84UwMTIdUjzM5yMUTEh3yHZxqRl3uJl2LrvDqqbYrD0Pctoxat%2B8dWfodod9Jkjr2XD9iXFS2w12vVPgf9V9q1SFwdBetPb8DdMFGULxdgperqr3W%2Fwj%2BnKPE9y0BNyWUVXiW79qwCuqhl5UpRimJh%2FRySNHS1TkK6S9TuQYR2lX27MZcnjfj274uRg08Vj%2BskmravlDzCc%2BuI0JVI%2BFIPVSVPdcuWk4qT1%2BVrTFrTp8wa2Eab8HC4%2F5tcraMWa39sa966xDYAp4qVjClclbNTDhu%2F1vMVZ0Dh87ixLj1xSKEedxPDnzzxSbwNprBjwRusS%2BqzXiURcY1FQWSrsswgp254YuONwTKipkE080jg%2FycMbMIHTksIGOqUBuUspMXfKgoeeBwUcOnuBpQxxeNiMdGevUzM3E0Wck7iX09Hhqg%2B2HWFzWXt0Pp33F3pMWzVtZqcSkzwu%2B%2BMESADv85S5o6i6SonvNyRK3PIQv8py%2BMB4gEaEzrcxq1XKRRR07Xe%2BXKOHkT0Ueb2TaPFDI%2F6kbv0N9m5%2FyN3aH57fT3c6%2Fz8kiQerOHXMS4SC92ex4YrnkKCNaG9bM7UqNb9sg9mJ&X-Amz-Signature=ff59a0187410396204dd8ad8cd3c7cedca2b4c4071b6c46c6003b1cb081edaef&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJIIS7SQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDyHGtNG1t4K4cC6VyIAx2KLVJ3cGqiw%2B8a4dzuv5hcQIgbIrg%2BfGx50ywcxFJdGO4xCbeX2esmE2oRLEr2cwK1AQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNgpHrz6Z%2BfY1LAuKCrcA8q%2Fg0QbJPC6urTWVYq%2FY7fLKf8eHcPXBpvvPdmSyrpI5USeQw08dJ0BCx8y%2Fz3bibIaC5Ei15cUH8ot2pd%2FvtNMI%2BLk6AFYPHKJam4ECo82RDLfo7vnEITaCqWeCxbqzw3d7taT%2BR5X4QXoetH5VopNOUvrcV7kRK214EdI6X4WNi%2Bf14EkWQcOPmBrErr9UVPj%2Fq4a6XyDtJRw4xZ7WE2Pc36%2BN9cOFIIPQrH%2Fqye4%2FJb%2B7XWc2PkAmY6hI%2BTzyNQZvY%2Fc7IypK84UwMTIdUjzM5yMUTEh3yHZxqRl3uJl2LrvDqqbYrD0Pctoxat%2B8dWfodod9Jkjr2XD9iXFS2w12vVPgf9V9q1SFwdBetPb8DdMFGULxdgperqr3W%2Fwj%2BnKPE9y0BNyWUVXiW79qwCuqhl5UpRimJh%2FRySNHS1TkK6S9TuQYR2lX27MZcnjfj274uRg08Vj%2BskmravlDzCc%2BuI0JVI%2BFIPVSVPdcuWk4qT1%2BVrTFrTp8wa2Eab8HC4%2F5tcraMWa39sa966xDYAp4qVjClclbNTDhu%2F1vMVZ0Dh87ixLj1xSKEedxPDnzzxSbwNprBjwRusS%2BqzXiURcY1FQWSrsswgp254YuONwTKipkE080jg%2FycMbMIHTksIGOqUBuUspMXfKgoeeBwUcOnuBpQxxeNiMdGevUzM3E0Wck7iX09Hhqg%2B2HWFzWXt0Pp33F3pMWzVtZqcSkzwu%2B%2BMESADv85S5o6i6SonvNyRK3PIQv8py%2BMB4gEaEzrcxq1XKRRR07Xe%2BXKOHkT0Ueb2TaPFDI%2F6kbv0N9m5%2FyN3aH57fT3c6%2Fz8kiQerOHXMS4SC92ex4YrnkKCNaG9bM7UqNb9sg9mJ&X-Amz-Signature=0c8d94278150164587330a356e98c276ee6e7814f6266dc16bdb1eec5aa4e327&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJIIS7SQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDyHGtNG1t4K4cC6VyIAx2KLVJ3cGqiw%2B8a4dzuv5hcQIgbIrg%2BfGx50ywcxFJdGO4xCbeX2esmE2oRLEr2cwK1AQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNgpHrz6Z%2BfY1LAuKCrcA8q%2Fg0QbJPC6urTWVYq%2FY7fLKf8eHcPXBpvvPdmSyrpI5USeQw08dJ0BCx8y%2Fz3bibIaC5Ei15cUH8ot2pd%2FvtNMI%2BLk6AFYPHKJam4ECo82RDLfo7vnEITaCqWeCxbqzw3d7taT%2BR5X4QXoetH5VopNOUvrcV7kRK214EdI6X4WNi%2Bf14EkWQcOPmBrErr9UVPj%2Fq4a6XyDtJRw4xZ7WE2Pc36%2BN9cOFIIPQrH%2Fqye4%2FJb%2B7XWc2PkAmY6hI%2BTzyNQZvY%2Fc7IypK84UwMTIdUjzM5yMUTEh3yHZxqRl3uJl2LrvDqqbYrD0Pctoxat%2B8dWfodod9Jkjr2XD9iXFS2w12vVPgf9V9q1SFwdBetPb8DdMFGULxdgperqr3W%2Fwj%2BnKPE9y0BNyWUVXiW79qwCuqhl5UpRimJh%2FRySNHS1TkK6S9TuQYR2lX27MZcnjfj274uRg08Vj%2BskmravlDzCc%2BuI0JVI%2BFIPVSVPdcuWk4qT1%2BVrTFrTp8wa2Eab8HC4%2F5tcraMWa39sa966xDYAp4qVjClclbNTDhu%2F1vMVZ0Dh87ixLj1xSKEedxPDnzzxSbwNprBjwRusS%2BqzXiURcY1FQWSrsswgp254YuONwTKipkE080jg%2FycMbMIHTksIGOqUBuUspMXfKgoeeBwUcOnuBpQxxeNiMdGevUzM3E0Wck7iX09Hhqg%2B2HWFzWXt0Pp33F3pMWzVtZqcSkzwu%2B%2BMESADv85S5o6i6SonvNyRK3PIQv8py%2BMB4gEaEzrcxq1XKRRR07Xe%2BXKOHkT0Ueb2TaPFDI%2F6kbv0N9m5%2FyN3aH57fT3c6%2Fz8kiQerOHXMS4SC92ex4YrnkKCNaG9bM7UqNb9sg9mJ&X-Amz-Signature=ff854348f86592be0b89c64d6493c7224eda7c831df56b9e38d4d26ed5aa1eb5&X-Amz-SignedHeaders=host&x-id=GetObject)
