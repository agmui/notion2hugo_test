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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCDJSNM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC3uu7HN%2B1RnpywKuLFdNU4NiswlvuUeDhdzzTpVK5EAiEAgJXBI5s6NTZqcEjSva4OQzSkFRkIQMOQWfHhISIYkbwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwvIVQQ52kAIhsU8CrcA%2BGAJKGpcPsssc9xqb%2Bl4yJEZrlBqSScI4vCQUyGWCB6s6dNYYsVWfmCIy0K0KSRBiSYuVGXjvKuyq7CQjGudyCtiAlcXwNgsWhgrzcmFDIJ5NKEnEZczBVIE%2BBGqlICIKbTM2yrWBvBm9V5%2F1%2BH4B6iCrgm5scFBemzRmX6h1PwmQR6bStN84NYM0sK730jT3M0LJs5DQW49eYi8S17LGMQ74rWYBsX4ZpU2f%2BiAN9yA0JLRstItBp7Z0WLVKlLSsUwc6b3oGLncS0%2BTkqhlItknZSiuJt9MH59578S7T5Tx9nVOH%2BtWuf4l3%2FlgIef%2B%2Bt5JmJ2fANdrGbtIR3oXjWTTmLA50odG5Zk3N7LlPf3cnZ%2Bg1kah9tO0hn9rxrWAvrs8XNr1Qxh9GFR3kcxA2bkhHSOR8DlV4BVYRFDtj5GIozkdoRzl992qqescryhrIjaWPAt5tSdy4kMaTpSbAnnF2cQiAnM%2BvGCCs6osgKWLNW8zUeyxWGO013IAiVW1HQ59jLTUakxGn1zxFNVQYjEPvvGCm6k5oPs5aGHb39Wypf%2BrpdEheKw0RfHycSkpF3Mt%2BLtk5j9ANdfsyqwqAU%2FYX7uoHcdj8qJTlOQuzvaPZpSSIztJvpCRn61MK7178MGOqUBszcqH2XMYSgZPxTxCHvre3hn9emOd2wdZPw%2B8K1UbCHGQMFzMAspM2lwQIDmh4iDsCMcImy8EhV1rWL5plNVeTnDEo%2FaVbJa6kzD472wyXjiZYRFMRGfEjS0DSJE9pZAMPGE76OE5qSl1ev%2FwLLuDUFwB3rvvUnn2A6vyEPQsAjXwi2Y3oG6dv9E9sURJ1SyQv5%2B1N0IinJbnGGxay1VB6Wh9InK&X-Amz-Signature=b22aea6cd33260c1488d78e255c3f304100f8a3f58611e49ec04a47d1c53c316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCDJSNM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC3uu7HN%2B1RnpywKuLFdNU4NiswlvuUeDhdzzTpVK5EAiEAgJXBI5s6NTZqcEjSva4OQzSkFRkIQMOQWfHhISIYkbwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwvIVQQ52kAIhsU8CrcA%2BGAJKGpcPsssc9xqb%2Bl4yJEZrlBqSScI4vCQUyGWCB6s6dNYYsVWfmCIy0K0KSRBiSYuVGXjvKuyq7CQjGudyCtiAlcXwNgsWhgrzcmFDIJ5NKEnEZczBVIE%2BBGqlICIKbTM2yrWBvBm9V5%2F1%2BH4B6iCrgm5scFBemzRmX6h1PwmQR6bStN84NYM0sK730jT3M0LJs5DQW49eYi8S17LGMQ74rWYBsX4ZpU2f%2BiAN9yA0JLRstItBp7Z0WLVKlLSsUwc6b3oGLncS0%2BTkqhlItknZSiuJt9MH59578S7T5Tx9nVOH%2BtWuf4l3%2FlgIef%2B%2Bt5JmJ2fANdrGbtIR3oXjWTTmLA50odG5Zk3N7LlPf3cnZ%2Bg1kah9tO0hn9rxrWAvrs8XNr1Qxh9GFR3kcxA2bkhHSOR8DlV4BVYRFDtj5GIozkdoRzl992qqescryhrIjaWPAt5tSdy4kMaTpSbAnnF2cQiAnM%2BvGCCs6osgKWLNW8zUeyxWGO013IAiVW1HQ59jLTUakxGn1zxFNVQYjEPvvGCm6k5oPs5aGHb39Wypf%2BrpdEheKw0RfHycSkpF3Mt%2BLtk5j9ANdfsyqwqAU%2FYX7uoHcdj8qJTlOQuzvaPZpSSIztJvpCRn61MK7178MGOqUBszcqH2XMYSgZPxTxCHvre3hn9emOd2wdZPw%2B8K1UbCHGQMFzMAspM2lwQIDmh4iDsCMcImy8EhV1rWL5plNVeTnDEo%2FaVbJa6kzD472wyXjiZYRFMRGfEjS0DSJE9pZAMPGE76OE5qSl1ev%2FwLLuDUFwB3rvvUnn2A6vyEPQsAjXwi2Y3oG6dv9E9sURJ1SyQv5%2B1N0IinJbnGGxay1VB6Wh9InK&X-Amz-Signature=547ff4dfc648241c549d57dd04394b649e729553c441108808b6fc7c7a0bb77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCDJSNM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC3uu7HN%2B1RnpywKuLFdNU4NiswlvuUeDhdzzTpVK5EAiEAgJXBI5s6NTZqcEjSva4OQzSkFRkIQMOQWfHhISIYkbwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwvIVQQ52kAIhsU8CrcA%2BGAJKGpcPsssc9xqb%2Bl4yJEZrlBqSScI4vCQUyGWCB6s6dNYYsVWfmCIy0K0KSRBiSYuVGXjvKuyq7CQjGudyCtiAlcXwNgsWhgrzcmFDIJ5NKEnEZczBVIE%2BBGqlICIKbTM2yrWBvBm9V5%2F1%2BH4B6iCrgm5scFBemzRmX6h1PwmQR6bStN84NYM0sK730jT3M0LJs5DQW49eYi8S17LGMQ74rWYBsX4ZpU2f%2BiAN9yA0JLRstItBp7Z0WLVKlLSsUwc6b3oGLncS0%2BTkqhlItknZSiuJt9MH59578S7T5Tx9nVOH%2BtWuf4l3%2FlgIef%2B%2Bt5JmJ2fANdrGbtIR3oXjWTTmLA50odG5Zk3N7LlPf3cnZ%2Bg1kah9tO0hn9rxrWAvrs8XNr1Qxh9GFR3kcxA2bkhHSOR8DlV4BVYRFDtj5GIozkdoRzl992qqescryhrIjaWPAt5tSdy4kMaTpSbAnnF2cQiAnM%2BvGCCs6osgKWLNW8zUeyxWGO013IAiVW1HQ59jLTUakxGn1zxFNVQYjEPvvGCm6k5oPs5aGHb39Wypf%2BrpdEheKw0RfHycSkpF3Mt%2BLtk5j9ANdfsyqwqAU%2FYX7uoHcdj8qJTlOQuzvaPZpSSIztJvpCRn61MK7178MGOqUBszcqH2XMYSgZPxTxCHvre3hn9emOd2wdZPw%2B8K1UbCHGQMFzMAspM2lwQIDmh4iDsCMcImy8EhV1rWL5plNVeTnDEo%2FaVbJa6kzD472wyXjiZYRFMRGfEjS0DSJE9pZAMPGE76OE5qSl1ev%2FwLLuDUFwB3rvvUnn2A6vyEPQsAjXwi2Y3oG6dv9E9sURJ1SyQv5%2B1N0IinJbnGGxay1VB6Wh9InK&X-Amz-Signature=ec4969595f969247b302bfe1d50b8907bdf5fde101fa1a37e1fabea62dd8e80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCDJSNM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC3uu7HN%2B1RnpywKuLFdNU4NiswlvuUeDhdzzTpVK5EAiEAgJXBI5s6NTZqcEjSva4OQzSkFRkIQMOQWfHhISIYkbwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwvIVQQ52kAIhsU8CrcA%2BGAJKGpcPsssc9xqb%2Bl4yJEZrlBqSScI4vCQUyGWCB6s6dNYYsVWfmCIy0K0KSRBiSYuVGXjvKuyq7CQjGudyCtiAlcXwNgsWhgrzcmFDIJ5NKEnEZczBVIE%2BBGqlICIKbTM2yrWBvBm9V5%2F1%2BH4B6iCrgm5scFBemzRmX6h1PwmQR6bStN84NYM0sK730jT3M0LJs5DQW49eYi8S17LGMQ74rWYBsX4ZpU2f%2BiAN9yA0JLRstItBp7Z0WLVKlLSsUwc6b3oGLncS0%2BTkqhlItknZSiuJt9MH59578S7T5Tx9nVOH%2BtWuf4l3%2FlgIef%2B%2Bt5JmJ2fANdrGbtIR3oXjWTTmLA50odG5Zk3N7LlPf3cnZ%2Bg1kah9tO0hn9rxrWAvrs8XNr1Qxh9GFR3kcxA2bkhHSOR8DlV4BVYRFDtj5GIozkdoRzl992qqescryhrIjaWPAt5tSdy4kMaTpSbAnnF2cQiAnM%2BvGCCs6osgKWLNW8zUeyxWGO013IAiVW1HQ59jLTUakxGn1zxFNVQYjEPvvGCm6k5oPs5aGHb39Wypf%2BrpdEheKw0RfHycSkpF3Mt%2BLtk5j9ANdfsyqwqAU%2FYX7uoHcdj8qJTlOQuzvaPZpSSIztJvpCRn61MK7178MGOqUBszcqH2XMYSgZPxTxCHvre3hn9emOd2wdZPw%2B8K1UbCHGQMFzMAspM2lwQIDmh4iDsCMcImy8EhV1rWL5plNVeTnDEo%2FaVbJa6kzD472wyXjiZYRFMRGfEjS0DSJE9pZAMPGE76OE5qSl1ev%2FwLLuDUFwB3rvvUnn2A6vyEPQsAjXwi2Y3oG6dv9E9sURJ1SyQv5%2B1N0IinJbnGGxay1VB6Wh9InK&X-Amz-Signature=08a486dae911f9ecf2b26238acac922c747e437697b192265049907994197cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCDJSNM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC3uu7HN%2B1RnpywKuLFdNU4NiswlvuUeDhdzzTpVK5EAiEAgJXBI5s6NTZqcEjSva4OQzSkFRkIQMOQWfHhISIYkbwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwvIVQQ52kAIhsU8CrcA%2BGAJKGpcPsssc9xqb%2Bl4yJEZrlBqSScI4vCQUyGWCB6s6dNYYsVWfmCIy0K0KSRBiSYuVGXjvKuyq7CQjGudyCtiAlcXwNgsWhgrzcmFDIJ5NKEnEZczBVIE%2BBGqlICIKbTM2yrWBvBm9V5%2F1%2BH4B6iCrgm5scFBemzRmX6h1PwmQR6bStN84NYM0sK730jT3M0LJs5DQW49eYi8S17LGMQ74rWYBsX4ZpU2f%2BiAN9yA0JLRstItBp7Z0WLVKlLSsUwc6b3oGLncS0%2BTkqhlItknZSiuJt9MH59578S7T5Tx9nVOH%2BtWuf4l3%2FlgIef%2B%2Bt5JmJ2fANdrGbtIR3oXjWTTmLA50odG5Zk3N7LlPf3cnZ%2Bg1kah9tO0hn9rxrWAvrs8XNr1Qxh9GFR3kcxA2bkhHSOR8DlV4BVYRFDtj5GIozkdoRzl992qqescryhrIjaWPAt5tSdy4kMaTpSbAnnF2cQiAnM%2BvGCCs6osgKWLNW8zUeyxWGO013IAiVW1HQ59jLTUakxGn1zxFNVQYjEPvvGCm6k5oPs5aGHb39Wypf%2BrpdEheKw0RfHycSkpF3Mt%2BLtk5j9ANdfsyqwqAU%2FYX7uoHcdj8qJTlOQuzvaPZpSSIztJvpCRn61MK7178MGOqUBszcqH2XMYSgZPxTxCHvre3hn9emOd2wdZPw%2B8K1UbCHGQMFzMAspM2lwQIDmh4iDsCMcImy8EhV1rWL5plNVeTnDEo%2FaVbJa6kzD472wyXjiZYRFMRGfEjS0DSJE9pZAMPGE76OE5qSl1ev%2FwLLuDUFwB3rvvUnn2A6vyEPQsAjXwi2Y3oG6dv9E9sURJ1SyQv5%2B1N0IinJbnGGxay1VB6Wh9InK&X-Amz-Signature=cfb25942fec2eccd1c033a7edda88627a2b04ad39b375334163e8b45570f136e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XCDJSNM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC3uu7HN%2B1RnpywKuLFdNU4NiswlvuUeDhdzzTpVK5EAiEAgJXBI5s6NTZqcEjSva4OQzSkFRkIQMOQWfHhISIYkbwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwvIVQQ52kAIhsU8CrcA%2BGAJKGpcPsssc9xqb%2Bl4yJEZrlBqSScI4vCQUyGWCB6s6dNYYsVWfmCIy0K0KSRBiSYuVGXjvKuyq7CQjGudyCtiAlcXwNgsWhgrzcmFDIJ5NKEnEZczBVIE%2BBGqlICIKbTM2yrWBvBm9V5%2F1%2BH4B6iCrgm5scFBemzRmX6h1PwmQR6bStN84NYM0sK730jT3M0LJs5DQW49eYi8S17LGMQ74rWYBsX4ZpU2f%2BiAN9yA0JLRstItBp7Z0WLVKlLSsUwc6b3oGLncS0%2BTkqhlItknZSiuJt9MH59578S7T5Tx9nVOH%2BtWuf4l3%2FlgIef%2B%2Bt5JmJ2fANdrGbtIR3oXjWTTmLA50odG5Zk3N7LlPf3cnZ%2Bg1kah9tO0hn9rxrWAvrs8XNr1Qxh9GFR3kcxA2bkhHSOR8DlV4BVYRFDtj5GIozkdoRzl992qqescryhrIjaWPAt5tSdy4kMaTpSbAnnF2cQiAnM%2BvGCCs6osgKWLNW8zUeyxWGO013IAiVW1HQ59jLTUakxGn1zxFNVQYjEPvvGCm6k5oPs5aGHb39Wypf%2BrpdEheKw0RfHycSkpF3Mt%2BLtk5j9ANdfsyqwqAU%2FYX7uoHcdj8qJTlOQuzvaPZpSSIztJvpCRn61MK7178MGOqUBszcqH2XMYSgZPxTxCHvre3hn9emOd2wdZPw%2B8K1UbCHGQMFzMAspM2lwQIDmh4iDsCMcImy8EhV1rWL5plNVeTnDEo%2FaVbJa6kzD472wyXjiZYRFMRGfEjS0DSJE9pZAMPGE76OE5qSl1ev%2FwLLuDUFwB3rvvUnn2A6vyEPQsAjXwi2Y3oG6dv9E9sURJ1SyQv5%2B1N0IinJbnGGxay1VB6Wh9InK&X-Amz-Signature=ca6dcca703d0257c84888d57015748a4e4324241b75b6a182db5702aea16508f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
