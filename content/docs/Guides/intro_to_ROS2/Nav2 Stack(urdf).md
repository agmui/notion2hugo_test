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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PLNDAF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM8sEz8H1947dtnULe8tT9p2k8BBugR9drKMdjl1JkUAIgdQdzHZ%2Fa9dw%2BV8I9GJRr36ahmieOXmGCHMgolk3M1mIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcGlAAk1Hlets5xvircA2OflkiD8vmA4eG%2BaBTUhOTy9Q8VpJ8XlfV1QBYoCZ8qER9oUAZ%2FIuIIItcj4NrWO2kBEKLBqOH%2Bi1h58VDAVtUa1kn20JtE5%2BrmkDi%2BdQlokYSa6Aud%2B03KRJued2WjKirY780zcNQSEHBmXM8gPGJseaayTIYREq76EtjcyhmK9%2Be4lkk0Y0STwrxJ8K9TTo6UUEBJHQTG5xfzN4WStkt%2BHNo38FLRHBN0VgYLQzccBQqCbagoe%2BWzXrbcxpludX9hHHKM6wYrEjKTJie0TQRWql802fZip%2Bm3Ka%2F4EAH6sAo2oXs6s8oNTEV2UQ1B7p3ywxC4x54JROIOI1jmSpDy03%2FZ7vzs2FnjhooXtqClGrIlBw4Vhxpe8gxnGdyivQqFfJVuk%2FkEmwhrPH6Y80MDpxKiEGfPcfOZ0LsbKoCGNCsjP2xzPTANypGMuBAUl7nwqmYcxV9tMngPc04YrnqRLT%2BOXqTsPSCDVF7OpCAfbZaMmDhaoaxTN2mrFjkU1Upma4gdyI85I7zVrEOX9PFDGJIJLZ0MhSR%2FzaX3AHsPBKyjeEOT%2FF31lt3uEBv%2Fj0NBVEvJajJabTU1hHPgP4KQIK9R%2BHCrtnxMTTYoq7jtnpRD3irT95ySXPeoMKLZj8MGOqUBKVZCmt7v0VIvswg6uaanGRa3Gi%2FGdmsVJtLe1kpbeC2jvSonumgB27jrfRdeZfdLdcSIL4%2BP3oe2Y5qLbiYer9GCUR7GCL31lOxlwgp%2FVjOj%2BMszEcyvVT%2BAmDtWHyiyb6935x1POynNZnqYk%2BV1sdQYYgmzwyjHpcpduMPeHHnB4W%2Fp8NoBu7BP%2FIfdJdo25lvNmvlgIUf%2BnA0DOkCqedCiaaIn&X-Amz-Signature=e9ddd4b09b9112c53d9243f9da65888e1051d56a8fe00b9b4c4e27902b68aa92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PLNDAF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM8sEz8H1947dtnULe8tT9p2k8BBugR9drKMdjl1JkUAIgdQdzHZ%2Fa9dw%2BV8I9GJRr36ahmieOXmGCHMgolk3M1mIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcGlAAk1Hlets5xvircA2OflkiD8vmA4eG%2BaBTUhOTy9Q8VpJ8XlfV1QBYoCZ8qER9oUAZ%2FIuIIItcj4NrWO2kBEKLBqOH%2Bi1h58VDAVtUa1kn20JtE5%2BrmkDi%2BdQlokYSa6Aud%2B03KRJued2WjKirY780zcNQSEHBmXM8gPGJseaayTIYREq76EtjcyhmK9%2Be4lkk0Y0STwrxJ8K9TTo6UUEBJHQTG5xfzN4WStkt%2BHNo38FLRHBN0VgYLQzccBQqCbagoe%2BWzXrbcxpludX9hHHKM6wYrEjKTJie0TQRWql802fZip%2Bm3Ka%2F4EAH6sAo2oXs6s8oNTEV2UQ1B7p3ywxC4x54JROIOI1jmSpDy03%2FZ7vzs2FnjhooXtqClGrIlBw4Vhxpe8gxnGdyivQqFfJVuk%2FkEmwhrPH6Y80MDpxKiEGfPcfOZ0LsbKoCGNCsjP2xzPTANypGMuBAUl7nwqmYcxV9tMngPc04YrnqRLT%2BOXqTsPSCDVF7OpCAfbZaMmDhaoaxTN2mrFjkU1Upma4gdyI85I7zVrEOX9PFDGJIJLZ0MhSR%2FzaX3AHsPBKyjeEOT%2FF31lt3uEBv%2Fj0NBVEvJajJabTU1hHPgP4KQIK9R%2BHCrtnxMTTYoq7jtnpRD3irT95ySXPeoMKLZj8MGOqUBKVZCmt7v0VIvswg6uaanGRa3Gi%2FGdmsVJtLe1kpbeC2jvSonumgB27jrfRdeZfdLdcSIL4%2BP3oe2Y5qLbiYer9GCUR7GCL31lOxlwgp%2FVjOj%2BMszEcyvVT%2BAmDtWHyiyb6935x1POynNZnqYk%2BV1sdQYYgmzwyjHpcpduMPeHHnB4W%2Fp8NoBu7BP%2FIfdJdo25lvNmvlgIUf%2BnA0DOkCqedCiaaIn&X-Amz-Signature=e082d63a3f005a4bd469714db311384f9f8bdd48103b1e43285d568767eff06b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PLNDAF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM8sEz8H1947dtnULe8tT9p2k8BBugR9drKMdjl1JkUAIgdQdzHZ%2Fa9dw%2BV8I9GJRr36ahmieOXmGCHMgolk3M1mIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcGlAAk1Hlets5xvircA2OflkiD8vmA4eG%2BaBTUhOTy9Q8VpJ8XlfV1QBYoCZ8qER9oUAZ%2FIuIIItcj4NrWO2kBEKLBqOH%2Bi1h58VDAVtUa1kn20JtE5%2BrmkDi%2BdQlokYSa6Aud%2B03KRJued2WjKirY780zcNQSEHBmXM8gPGJseaayTIYREq76EtjcyhmK9%2Be4lkk0Y0STwrxJ8K9TTo6UUEBJHQTG5xfzN4WStkt%2BHNo38FLRHBN0VgYLQzccBQqCbagoe%2BWzXrbcxpludX9hHHKM6wYrEjKTJie0TQRWql802fZip%2Bm3Ka%2F4EAH6sAo2oXs6s8oNTEV2UQ1B7p3ywxC4x54JROIOI1jmSpDy03%2FZ7vzs2FnjhooXtqClGrIlBw4Vhxpe8gxnGdyivQqFfJVuk%2FkEmwhrPH6Y80MDpxKiEGfPcfOZ0LsbKoCGNCsjP2xzPTANypGMuBAUl7nwqmYcxV9tMngPc04YrnqRLT%2BOXqTsPSCDVF7OpCAfbZaMmDhaoaxTN2mrFjkU1Upma4gdyI85I7zVrEOX9PFDGJIJLZ0MhSR%2FzaX3AHsPBKyjeEOT%2FF31lt3uEBv%2Fj0NBVEvJajJabTU1hHPgP4KQIK9R%2BHCrtnxMTTYoq7jtnpRD3irT95ySXPeoMKLZj8MGOqUBKVZCmt7v0VIvswg6uaanGRa3Gi%2FGdmsVJtLe1kpbeC2jvSonumgB27jrfRdeZfdLdcSIL4%2BP3oe2Y5qLbiYer9GCUR7GCL31lOxlwgp%2FVjOj%2BMszEcyvVT%2BAmDtWHyiyb6935x1POynNZnqYk%2BV1sdQYYgmzwyjHpcpduMPeHHnB4W%2Fp8NoBu7BP%2FIfdJdo25lvNmvlgIUf%2BnA0DOkCqedCiaaIn&X-Amz-Signature=82ed7b233e39c5ea36071f0b0bca6692ce5959d3582fc04436f7cfe918333dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PLNDAF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM8sEz8H1947dtnULe8tT9p2k8BBugR9drKMdjl1JkUAIgdQdzHZ%2Fa9dw%2BV8I9GJRr36ahmieOXmGCHMgolk3M1mIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcGlAAk1Hlets5xvircA2OflkiD8vmA4eG%2BaBTUhOTy9Q8VpJ8XlfV1QBYoCZ8qER9oUAZ%2FIuIIItcj4NrWO2kBEKLBqOH%2Bi1h58VDAVtUa1kn20JtE5%2BrmkDi%2BdQlokYSa6Aud%2B03KRJued2WjKirY780zcNQSEHBmXM8gPGJseaayTIYREq76EtjcyhmK9%2Be4lkk0Y0STwrxJ8K9TTo6UUEBJHQTG5xfzN4WStkt%2BHNo38FLRHBN0VgYLQzccBQqCbagoe%2BWzXrbcxpludX9hHHKM6wYrEjKTJie0TQRWql802fZip%2Bm3Ka%2F4EAH6sAo2oXs6s8oNTEV2UQ1B7p3ywxC4x54JROIOI1jmSpDy03%2FZ7vzs2FnjhooXtqClGrIlBw4Vhxpe8gxnGdyivQqFfJVuk%2FkEmwhrPH6Y80MDpxKiEGfPcfOZ0LsbKoCGNCsjP2xzPTANypGMuBAUl7nwqmYcxV9tMngPc04YrnqRLT%2BOXqTsPSCDVF7OpCAfbZaMmDhaoaxTN2mrFjkU1Upma4gdyI85I7zVrEOX9PFDGJIJLZ0MhSR%2FzaX3AHsPBKyjeEOT%2FF31lt3uEBv%2Fj0NBVEvJajJabTU1hHPgP4KQIK9R%2BHCrtnxMTTYoq7jtnpRD3irT95ySXPeoMKLZj8MGOqUBKVZCmt7v0VIvswg6uaanGRa3Gi%2FGdmsVJtLe1kpbeC2jvSonumgB27jrfRdeZfdLdcSIL4%2BP3oe2Y5qLbiYer9GCUR7GCL31lOxlwgp%2FVjOj%2BMszEcyvVT%2BAmDtWHyiyb6935x1POynNZnqYk%2BV1sdQYYgmzwyjHpcpduMPeHHnB4W%2Fp8NoBu7BP%2FIfdJdo25lvNmvlgIUf%2BnA0DOkCqedCiaaIn&X-Amz-Signature=43b8b931e7d88f4afd5839d98f47c7f1e7f61256a90cb20ba5baeaa9d9d1062d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PLNDAF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM8sEz8H1947dtnULe8tT9p2k8BBugR9drKMdjl1JkUAIgdQdzHZ%2Fa9dw%2BV8I9GJRr36ahmieOXmGCHMgolk3M1mIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcGlAAk1Hlets5xvircA2OflkiD8vmA4eG%2BaBTUhOTy9Q8VpJ8XlfV1QBYoCZ8qER9oUAZ%2FIuIIItcj4NrWO2kBEKLBqOH%2Bi1h58VDAVtUa1kn20JtE5%2BrmkDi%2BdQlokYSa6Aud%2B03KRJued2WjKirY780zcNQSEHBmXM8gPGJseaayTIYREq76EtjcyhmK9%2Be4lkk0Y0STwrxJ8K9TTo6UUEBJHQTG5xfzN4WStkt%2BHNo38FLRHBN0VgYLQzccBQqCbagoe%2BWzXrbcxpludX9hHHKM6wYrEjKTJie0TQRWql802fZip%2Bm3Ka%2F4EAH6sAo2oXs6s8oNTEV2UQ1B7p3ywxC4x54JROIOI1jmSpDy03%2FZ7vzs2FnjhooXtqClGrIlBw4Vhxpe8gxnGdyivQqFfJVuk%2FkEmwhrPH6Y80MDpxKiEGfPcfOZ0LsbKoCGNCsjP2xzPTANypGMuBAUl7nwqmYcxV9tMngPc04YrnqRLT%2BOXqTsPSCDVF7OpCAfbZaMmDhaoaxTN2mrFjkU1Upma4gdyI85I7zVrEOX9PFDGJIJLZ0MhSR%2FzaX3AHsPBKyjeEOT%2FF31lt3uEBv%2Fj0NBVEvJajJabTU1hHPgP4KQIK9R%2BHCrtnxMTTYoq7jtnpRD3irT95ySXPeoMKLZj8MGOqUBKVZCmt7v0VIvswg6uaanGRa3Gi%2FGdmsVJtLe1kpbeC2jvSonumgB27jrfRdeZfdLdcSIL4%2BP3oe2Y5qLbiYer9GCUR7GCL31lOxlwgp%2FVjOj%2BMszEcyvVT%2BAmDtWHyiyb6935x1POynNZnqYk%2BV1sdQYYgmzwyjHpcpduMPeHHnB4W%2Fp8NoBu7BP%2FIfdJdo25lvNmvlgIUf%2BnA0DOkCqedCiaaIn&X-Amz-Signature=5ea7949656cf700f8ad59c4648310e3595bda6eff93135e428791088c66ad30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PLNDAF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM8sEz8H1947dtnULe8tT9p2k8BBugR9drKMdjl1JkUAIgdQdzHZ%2Fa9dw%2BV8I9GJRr36ahmieOXmGCHMgolk3M1mIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcGlAAk1Hlets5xvircA2OflkiD8vmA4eG%2BaBTUhOTy9Q8VpJ8XlfV1QBYoCZ8qER9oUAZ%2FIuIIItcj4NrWO2kBEKLBqOH%2Bi1h58VDAVtUa1kn20JtE5%2BrmkDi%2BdQlokYSa6Aud%2B03KRJued2WjKirY780zcNQSEHBmXM8gPGJseaayTIYREq76EtjcyhmK9%2Be4lkk0Y0STwrxJ8K9TTo6UUEBJHQTG5xfzN4WStkt%2BHNo38FLRHBN0VgYLQzccBQqCbagoe%2BWzXrbcxpludX9hHHKM6wYrEjKTJie0TQRWql802fZip%2Bm3Ka%2F4EAH6sAo2oXs6s8oNTEV2UQ1B7p3ywxC4x54JROIOI1jmSpDy03%2FZ7vzs2FnjhooXtqClGrIlBw4Vhxpe8gxnGdyivQqFfJVuk%2FkEmwhrPH6Y80MDpxKiEGfPcfOZ0LsbKoCGNCsjP2xzPTANypGMuBAUl7nwqmYcxV9tMngPc04YrnqRLT%2BOXqTsPSCDVF7OpCAfbZaMmDhaoaxTN2mrFjkU1Upma4gdyI85I7zVrEOX9PFDGJIJLZ0MhSR%2FzaX3AHsPBKyjeEOT%2FF31lt3uEBv%2Fj0NBVEvJajJabTU1hHPgP4KQIK9R%2BHCrtnxMTTYoq7jtnpRD3irT95ySXPeoMKLZj8MGOqUBKVZCmt7v0VIvswg6uaanGRa3Gi%2FGdmsVJtLe1kpbeC2jvSonumgB27jrfRdeZfdLdcSIL4%2BP3oe2Y5qLbiYer9GCUR7GCL31lOxlwgp%2FVjOj%2BMszEcyvVT%2BAmDtWHyiyb6935x1POynNZnqYk%2BV1sdQYYgmzwyjHpcpduMPeHHnB4W%2Fp8NoBu7BP%2FIfdJdo25lvNmvlgIUf%2BnA0DOkCqedCiaaIn&X-Amz-Signature=a21aad91a6d50792499bdc9ab7c03f0e2590d69ca53c1097529ba3e0498bdc2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
