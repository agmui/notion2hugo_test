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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMT2ZVSD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDvF%2BSbMMKxnh2PkDDxa%2Br8qMbLYb0zGYafOQsfZkEXgIgeQE%2FG26%2Fw995f35SS2H2t4Hll4x6m5J7C5Tz0Y2tnT4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc5CsA1WrpbRFeNVyrcAy7YJ4TD9zBNxHgPFq53O5oGAn9ZHkbvLDTTVlaRNKdQ%2FQRhTsxEWafTU2F5GKGN3VOmH8rtsuHb3wY4rQ3nxdJGkOXKN8ZT1MLAAXgCdKaPWwKnSYTXYI88ZgnDOv2EAn%2FSw64ZYMOvCAwgQRMYw6Xyb6F5MOkCNNxWPy4AUUerpNTmiUFcgrqPpKwSlQS1Zyl8lthZDTlQtMVZuvhQzbnXxlGY6ycgC20xRoITd2SRiey69sYUx6YmEWoHNSJ3TEWy61QpFSs9zQxrazAkEq%2BROxM2N9kdQe%2FmNGMgQCIdYe04uEHW2bQtHg5XyVWOOD6Kc3KYwwACuq0qQH7SF1VrPe1yw5AxJdTC67%2FSziUcjMwQVSt%2FUVSu%2BDkqzbLziqlqtVDUYRS0JLkC10YIjRGBifOy5cgHLe6OeO8Ztlywshe%2BXdvd0rLoi1rg0Kb0uJUUg4t8cScNNvOr6iwcJpGAllZJeFAT7S58i4Y3V0UAlZ96vWIQzZNKWBAoi72GgaqYSFzsaUcfwy3XwLEPBfw5v59JY8Hwnqkv%2FPOJeM9TOVcGvdBj5qqI%2BoiqUCXgt0ekc7HZI1vqILaILIjbM2137Z33wrbe%2F%2B3jhkHvQzba6vGy7zge9qaWem%2FEMIfil8IGOqUBlUgpbBUhdoLhDOj56A2t%2BMMIGvjvWWOkiaLpLlGnnfUu4yM%2FSru4wUj6a3kuAyx8H5nHh%2Bdn1LX44lJHZlqSnLSgvN56A9Qi6KE1EelrXrNWeUCggkW4phHuiuy4StkU2nueGgcvKFyvA6c3%2BnQ6DZrzEKEhgQwigH2WyEMLI9REycbioyZGegEmyR8iCiSpfxud399MgeKCVcEYubv6ZK6EIYOI&X-Amz-Signature=cd497755b70189dbcb06e22b6b31a9f04ae3f19e055c98264d07c94b16d0d7e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMT2ZVSD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDvF%2BSbMMKxnh2PkDDxa%2Br8qMbLYb0zGYafOQsfZkEXgIgeQE%2FG26%2Fw995f35SS2H2t4Hll4x6m5J7C5Tz0Y2tnT4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc5CsA1WrpbRFeNVyrcAy7YJ4TD9zBNxHgPFq53O5oGAn9ZHkbvLDTTVlaRNKdQ%2FQRhTsxEWafTU2F5GKGN3VOmH8rtsuHb3wY4rQ3nxdJGkOXKN8ZT1MLAAXgCdKaPWwKnSYTXYI88ZgnDOv2EAn%2FSw64ZYMOvCAwgQRMYw6Xyb6F5MOkCNNxWPy4AUUerpNTmiUFcgrqPpKwSlQS1Zyl8lthZDTlQtMVZuvhQzbnXxlGY6ycgC20xRoITd2SRiey69sYUx6YmEWoHNSJ3TEWy61QpFSs9zQxrazAkEq%2BROxM2N9kdQe%2FmNGMgQCIdYe04uEHW2bQtHg5XyVWOOD6Kc3KYwwACuq0qQH7SF1VrPe1yw5AxJdTC67%2FSziUcjMwQVSt%2FUVSu%2BDkqzbLziqlqtVDUYRS0JLkC10YIjRGBifOy5cgHLe6OeO8Ztlywshe%2BXdvd0rLoi1rg0Kb0uJUUg4t8cScNNvOr6iwcJpGAllZJeFAT7S58i4Y3V0UAlZ96vWIQzZNKWBAoi72GgaqYSFzsaUcfwy3XwLEPBfw5v59JY8Hwnqkv%2FPOJeM9TOVcGvdBj5qqI%2BoiqUCXgt0ekc7HZI1vqILaILIjbM2137Z33wrbe%2F%2B3jhkHvQzba6vGy7zge9qaWem%2FEMIfil8IGOqUBlUgpbBUhdoLhDOj56A2t%2BMMIGvjvWWOkiaLpLlGnnfUu4yM%2FSru4wUj6a3kuAyx8H5nHh%2Bdn1LX44lJHZlqSnLSgvN56A9Qi6KE1EelrXrNWeUCggkW4phHuiuy4StkU2nueGgcvKFyvA6c3%2BnQ6DZrzEKEhgQwigH2WyEMLI9REycbioyZGegEmyR8iCiSpfxud399MgeKCVcEYubv6ZK6EIYOI&X-Amz-Signature=8f2615346d1e696b6e65491b6c3ef95cd4cbc2df1bb97fa1526fbf958f96eb99&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMT2ZVSD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDvF%2BSbMMKxnh2PkDDxa%2Br8qMbLYb0zGYafOQsfZkEXgIgeQE%2FG26%2Fw995f35SS2H2t4Hll4x6m5J7C5Tz0Y2tnT4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc5CsA1WrpbRFeNVyrcAy7YJ4TD9zBNxHgPFq53O5oGAn9ZHkbvLDTTVlaRNKdQ%2FQRhTsxEWafTU2F5GKGN3VOmH8rtsuHb3wY4rQ3nxdJGkOXKN8ZT1MLAAXgCdKaPWwKnSYTXYI88ZgnDOv2EAn%2FSw64ZYMOvCAwgQRMYw6Xyb6F5MOkCNNxWPy4AUUerpNTmiUFcgrqPpKwSlQS1Zyl8lthZDTlQtMVZuvhQzbnXxlGY6ycgC20xRoITd2SRiey69sYUx6YmEWoHNSJ3TEWy61QpFSs9zQxrazAkEq%2BROxM2N9kdQe%2FmNGMgQCIdYe04uEHW2bQtHg5XyVWOOD6Kc3KYwwACuq0qQH7SF1VrPe1yw5AxJdTC67%2FSziUcjMwQVSt%2FUVSu%2BDkqzbLziqlqtVDUYRS0JLkC10YIjRGBifOy5cgHLe6OeO8Ztlywshe%2BXdvd0rLoi1rg0Kb0uJUUg4t8cScNNvOr6iwcJpGAllZJeFAT7S58i4Y3V0UAlZ96vWIQzZNKWBAoi72GgaqYSFzsaUcfwy3XwLEPBfw5v59JY8Hwnqkv%2FPOJeM9TOVcGvdBj5qqI%2BoiqUCXgt0ekc7HZI1vqILaILIjbM2137Z33wrbe%2F%2B3jhkHvQzba6vGy7zge9qaWem%2FEMIfil8IGOqUBlUgpbBUhdoLhDOj56A2t%2BMMIGvjvWWOkiaLpLlGnnfUu4yM%2FSru4wUj6a3kuAyx8H5nHh%2Bdn1LX44lJHZlqSnLSgvN56A9Qi6KE1EelrXrNWeUCggkW4phHuiuy4StkU2nueGgcvKFyvA6c3%2BnQ6DZrzEKEhgQwigH2WyEMLI9REycbioyZGegEmyR8iCiSpfxud399MgeKCVcEYubv6ZK6EIYOI&X-Amz-Signature=40025e48ad8ff71d82e1225850ae9ad74c22cbe3f624dd1191bc6b6114f1acc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMT2ZVSD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDvF%2BSbMMKxnh2PkDDxa%2Br8qMbLYb0zGYafOQsfZkEXgIgeQE%2FG26%2Fw995f35SS2H2t4Hll4x6m5J7C5Tz0Y2tnT4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc5CsA1WrpbRFeNVyrcAy7YJ4TD9zBNxHgPFq53O5oGAn9ZHkbvLDTTVlaRNKdQ%2FQRhTsxEWafTU2F5GKGN3VOmH8rtsuHb3wY4rQ3nxdJGkOXKN8ZT1MLAAXgCdKaPWwKnSYTXYI88ZgnDOv2EAn%2FSw64ZYMOvCAwgQRMYw6Xyb6F5MOkCNNxWPy4AUUerpNTmiUFcgrqPpKwSlQS1Zyl8lthZDTlQtMVZuvhQzbnXxlGY6ycgC20xRoITd2SRiey69sYUx6YmEWoHNSJ3TEWy61QpFSs9zQxrazAkEq%2BROxM2N9kdQe%2FmNGMgQCIdYe04uEHW2bQtHg5XyVWOOD6Kc3KYwwACuq0qQH7SF1VrPe1yw5AxJdTC67%2FSziUcjMwQVSt%2FUVSu%2BDkqzbLziqlqtVDUYRS0JLkC10YIjRGBifOy5cgHLe6OeO8Ztlywshe%2BXdvd0rLoi1rg0Kb0uJUUg4t8cScNNvOr6iwcJpGAllZJeFAT7S58i4Y3V0UAlZ96vWIQzZNKWBAoi72GgaqYSFzsaUcfwy3XwLEPBfw5v59JY8Hwnqkv%2FPOJeM9TOVcGvdBj5qqI%2BoiqUCXgt0ekc7HZI1vqILaILIjbM2137Z33wrbe%2F%2B3jhkHvQzba6vGy7zge9qaWem%2FEMIfil8IGOqUBlUgpbBUhdoLhDOj56A2t%2BMMIGvjvWWOkiaLpLlGnnfUu4yM%2FSru4wUj6a3kuAyx8H5nHh%2Bdn1LX44lJHZlqSnLSgvN56A9Qi6KE1EelrXrNWeUCggkW4phHuiuy4StkU2nueGgcvKFyvA6c3%2BnQ6DZrzEKEhgQwigH2WyEMLI9REycbioyZGegEmyR8iCiSpfxud399MgeKCVcEYubv6ZK6EIYOI&X-Amz-Signature=726f9ce506a33d7becc605f0c5aadd1af6b067b0357c49abb1e27c1638d62662&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMT2ZVSD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDvF%2BSbMMKxnh2PkDDxa%2Br8qMbLYb0zGYafOQsfZkEXgIgeQE%2FG26%2Fw995f35SS2H2t4Hll4x6m5J7C5Tz0Y2tnT4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc5CsA1WrpbRFeNVyrcAy7YJ4TD9zBNxHgPFq53O5oGAn9ZHkbvLDTTVlaRNKdQ%2FQRhTsxEWafTU2F5GKGN3VOmH8rtsuHb3wY4rQ3nxdJGkOXKN8ZT1MLAAXgCdKaPWwKnSYTXYI88ZgnDOv2EAn%2FSw64ZYMOvCAwgQRMYw6Xyb6F5MOkCNNxWPy4AUUerpNTmiUFcgrqPpKwSlQS1Zyl8lthZDTlQtMVZuvhQzbnXxlGY6ycgC20xRoITd2SRiey69sYUx6YmEWoHNSJ3TEWy61QpFSs9zQxrazAkEq%2BROxM2N9kdQe%2FmNGMgQCIdYe04uEHW2bQtHg5XyVWOOD6Kc3KYwwACuq0qQH7SF1VrPe1yw5AxJdTC67%2FSziUcjMwQVSt%2FUVSu%2BDkqzbLziqlqtVDUYRS0JLkC10YIjRGBifOy5cgHLe6OeO8Ztlywshe%2BXdvd0rLoi1rg0Kb0uJUUg4t8cScNNvOr6iwcJpGAllZJeFAT7S58i4Y3V0UAlZ96vWIQzZNKWBAoi72GgaqYSFzsaUcfwy3XwLEPBfw5v59JY8Hwnqkv%2FPOJeM9TOVcGvdBj5qqI%2BoiqUCXgt0ekc7HZI1vqILaILIjbM2137Z33wrbe%2F%2B3jhkHvQzba6vGy7zge9qaWem%2FEMIfil8IGOqUBlUgpbBUhdoLhDOj56A2t%2BMMIGvjvWWOkiaLpLlGnnfUu4yM%2FSru4wUj6a3kuAyx8H5nHh%2Bdn1LX44lJHZlqSnLSgvN56A9Qi6KE1EelrXrNWeUCggkW4phHuiuy4StkU2nueGgcvKFyvA6c3%2BnQ6DZrzEKEhgQwigH2WyEMLI9REycbioyZGegEmyR8iCiSpfxud399MgeKCVcEYubv6ZK6EIYOI&X-Amz-Signature=6e72fd2bc35d99a1be1d834569e98e039bad4149b1a3d519de0a0c9d026b7208&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMT2ZVSD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDvF%2BSbMMKxnh2PkDDxa%2Br8qMbLYb0zGYafOQsfZkEXgIgeQE%2FG26%2Fw995f35SS2H2t4Hll4x6m5J7C5Tz0Y2tnT4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc5CsA1WrpbRFeNVyrcAy7YJ4TD9zBNxHgPFq53O5oGAn9ZHkbvLDTTVlaRNKdQ%2FQRhTsxEWafTU2F5GKGN3VOmH8rtsuHb3wY4rQ3nxdJGkOXKN8ZT1MLAAXgCdKaPWwKnSYTXYI88ZgnDOv2EAn%2FSw64ZYMOvCAwgQRMYw6Xyb6F5MOkCNNxWPy4AUUerpNTmiUFcgrqPpKwSlQS1Zyl8lthZDTlQtMVZuvhQzbnXxlGY6ycgC20xRoITd2SRiey69sYUx6YmEWoHNSJ3TEWy61QpFSs9zQxrazAkEq%2BROxM2N9kdQe%2FmNGMgQCIdYe04uEHW2bQtHg5XyVWOOD6Kc3KYwwACuq0qQH7SF1VrPe1yw5AxJdTC67%2FSziUcjMwQVSt%2FUVSu%2BDkqzbLziqlqtVDUYRS0JLkC10YIjRGBifOy5cgHLe6OeO8Ztlywshe%2BXdvd0rLoi1rg0Kb0uJUUg4t8cScNNvOr6iwcJpGAllZJeFAT7S58i4Y3V0UAlZ96vWIQzZNKWBAoi72GgaqYSFzsaUcfwy3XwLEPBfw5v59JY8Hwnqkv%2FPOJeM9TOVcGvdBj5qqI%2BoiqUCXgt0ekc7HZI1vqILaILIjbM2137Z33wrbe%2F%2B3jhkHvQzba6vGy7zge9qaWem%2FEMIfil8IGOqUBlUgpbBUhdoLhDOj56A2t%2BMMIGvjvWWOkiaLpLlGnnfUu4yM%2FSru4wUj6a3kuAyx8H5nHh%2Bdn1LX44lJHZlqSnLSgvN56A9Qi6KE1EelrXrNWeUCggkW4phHuiuy4StkU2nueGgcvKFyvA6c3%2BnQ6DZrzEKEhgQwigH2WyEMLI9REycbioyZGegEmyR8iCiSpfxud399MgeKCVcEYubv6ZK6EIYOI&X-Amz-Signature=1422d4a66cfeab1cafde6485d1a50c1e55bc473238027f73ded128c570950148&X-Amz-SignedHeaders=host&x-id=GetObject)
