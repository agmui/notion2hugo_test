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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ6VL5W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAswiWELYiaRtXvSxur0YipZWL7GdWCl9gK7hU0fDDUzAiEAxEx5syUAhSiUiZA5P59NCdsOhJ5l9AZKP0x1ntp4CrcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLOLprleubiDx7s5CrcA8NvCCcddUK9645pShvsYwjdlQvhf%2B6wBU%2F7RzUpwdGhZJBc4jCS9nNXD%2Ft5dx0e%2FDm9i1MK3D4leUcSEI1ZCSlhhwSA0TbTzfsdH4tO9zavEqJHHAYS7i6SJM5TOnbtf033JF6AWfmQk54SrdPhMB7ss59%2BqUka0Aw%2FYMOST1Rh5MMNnoL0wOD29Q4w1QQ6c8Kb5JJoBfi%2BH4cGxh2kjreClOOmQD6jxqYmPCq8oTVhgLK9isSzVIol%2B9QrOeNYSZGVge3T1qd6jl%2BTrbozlfQOBeJZZm4crgili4xAD7wrCE%2F%2F2EMuKZHpinp2vp8AZ%2F8XcEtmSuYRi2jhJ8QZFON%2F0VLKK3c9DjYY9GMdN43ydEYRwSa%2FEWzLMPv9aq0xKbATQgLgfC0B34a21kaq56NB7z1pVOSriO5CZX300mCS%2Byb3uEnhiDuNoVssdsimoKRhcVEyNIEqZ%2Fe9DkfWVHEqYtWf6ClJmGXL6ipGfZYbrtI1UfEuCH%2B4m50o21%2Fkxhme3MbG4hxuHyFgmihli58w8OxtQxdTGJ3DlGU9tI0sA0UEa0jSyC%2BF6i5UirUGqe6tSTHgU0ox%2Fzbwg5nS1iuzo%2FRu2K5wa9gIWcnCWb1yUzFwvLt1OmXB1eijMPuKnL4GOqUB%2FE02CRjy6eQVOxZxPmdJ2Y5rWIjnXVpe9T0OLuZt5Y3F%2Bv4FgczL501FvLWVwylDaR3ug4%2B09yTVem16e%2BgFCRn5iPlPLf5VxuGRNol%2FJgB5MYdVt4NVJw76ZqVKrlXTyRfOyCJquWxNyrtXPVRM9%2FpDdJQuffLilRYRQPvMix2hUie1DSioXZMBcZh7ovZaZPcnZjElGfJAHBzSEMREdfbzl4nS&X-Amz-Signature=371696122248b065b0c33ab00b76f4c8f9695e6028a32cc12dae63230d74b890&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ6VL5W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAswiWELYiaRtXvSxur0YipZWL7GdWCl9gK7hU0fDDUzAiEAxEx5syUAhSiUiZA5P59NCdsOhJ5l9AZKP0x1ntp4CrcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLOLprleubiDx7s5CrcA8NvCCcddUK9645pShvsYwjdlQvhf%2B6wBU%2F7RzUpwdGhZJBc4jCS9nNXD%2Ft5dx0e%2FDm9i1MK3D4leUcSEI1ZCSlhhwSA0TbTzfsdH4tO9zavEqJHHAYS7i6SJM5TOnbtf033JF6AWfmQk54SrdPhMB7ss59%2BqUka0Aw%2FYMOST1Rh5MMNnoL0wOD29Q4w1QQ6c8Kb5JJoBfi%2BH4cGxh2kjreClOOmQD6jxqYmPCq8oTVhgLK9isSzVIol%2B9QrOeNYSZGVge3T1qd6jl%2BTrbozlfQOBeJZZm4crgili4xAD7wrCE%2F%2F2EMuKZHpinp2vp8AZ%2F8XcEtmSuYRi2jhJ8QZFON%2F0VLKK3c9DjYY9GMdN43ydEYRwSa%2FEWzLMPv9aq0xKbATQgLgfC0B34a21kaq56NB7z1pVOSriO5CZX300mCS%2Byb3uEnhiDuNoVssdsimoKRhcVEyNIEqZ%2Fe9DkfWVHEqYtWf6ClJmGXL6ipGfZYbrtI1UfEuCH%2B4m50o21%2Fkxhme3MbG4hxuHyFgmihli58w8OxtQxdTGJ3DlGU9tI0sA0UEa0jSyC%2BF6i5UirUGqe6tSTHgU0ox%2Fzbwg5nS1iuzo%2FRu2K5wa9gIWcnCWb1yUzFwvLt1OmXB1eijMPuKnL4GOqUB%2FE02CRjy6eQVOxZxPmdJ2Y5rWIjnXVpe9T0OLuZt5Y3F%2Bv4FgczL501FvLWVwylDaR3ug4%2B09yTVem16e%2BgFCRn5iPlPLf5VxuGRNol%2FJgB5MYdVt4NVJw76ZqVKrlXTyRfOyCJquWxNyrtXPVRM9%2FpDdJQuffLilRYRQPvMix2hUie1DSioXZMBcZh7ovZaZPcnZjElGfJAHBzSEMREdfbzl4nS&X-Amz-Signature=f51efb20397b95f1c0c38ec83887e757cd20cc3b008f71bd1057cc8e2ba9c980&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ6VL5W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAswiWELYiaRtXvSxur0YipZWL7GdWCl9gK7hU0fDDUzAiEAxEx5syUAhSiUiZA5P59NCdsOhJ5l9AZKP0x1ntp4CrcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLOLprleubiDx7s5CrcA8NvCCcddUK9645pShvsYwjdlQvhf%2B6wBU%2F7RzUpwdGhZJBc4jCS9nNXD%2Ft5dx0e%2FDm9i1MK3D4leUcSEI1ZCSlhhwSA0TbTzfsdH4tO9zavEqJHHAYS7i6SJM5TOnbtf033JF6AWfmQk54SrdPhMB7ss59%2BqUka0Aw%2FYMOST1Rh5MMNnoL0wOD29Q4w1QQ6c8Kb5JJoBfi%2BH4cGxh2kjreClOOmQD6jxqYmPCq8oTVhgLK9isSzVIol%2B9QrOeNYSZGVge3T1qd6jl%2BTrbozlfQOBeJZZm4crgili4xAD7wrCE%2F%2F2EMuKZHpinp2vp8AZ%2F8XcEtmSuYRi2jhJ8QZFON%2F0VLKK3c9DjYY9GMdN43ydEYRwSa%2FEWzLMPv9aq0xKbATQgLgfC0B34a21kaq56NB7z1pVOSriO5CZX300mCS%2Byb3uEnhiDuNoVssdsimoKRhcVEyNIEqZ%2Fe9DkfWVHEqYtWf6ClJmGXL6ipGfZYbrtI1UfEuCH%2B4m50o21%2Fkxhme3MbG4hxuHyFgmihli58w8OxtQxdTGJ3DlGU9tI0sA0UEa0jSyC%2BF6i5UirUGqe6tSTHgU0ox%2Fzbwg5nS1iuzo%2FRu2K5wa9gIWcnCWb1yUzFwvLt1OmXB1eijMPuKnL4GOqUB%2FE02CRjy6eQVOxZxPmdJ2Y5rWIjnXVpe9T0OLuZt5Y3F%2Bv4FgczL501FvLWVwylDaR3ug4%2B09yTVem16e%2BgFCRn5iPlPLf5VxuGRNol%2FJgB5MYdVt4NVJw76ZqVKrlXTyRfOyCJquWxNyrtXPVRM9%2FpDdJQuffLilRYRQPvMix2hUie1DSioXZMBcZh7ovZaZPcnZjElGfJAHBzSEMREdfbzl4nS&X-Amz-Signature=2088cc06cc393d0481936457201cd62587f15d5e6cc0bb2124f45ba892bb655b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ6VL5W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAswiWELYiaRtXvSxur0YipZWL7GdWCl9gK7hU0fDDUzAiEAxEx5syUAhSiUiZA5P59NCdsOhJ5l9AZKP0x1ntp4CrcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLOLprleubiDx7s5CrcA8NvCCcddUK9645pShvsYwjdlQvhf%2B6wBU%2F7RzUpwdGhZJBc4jCS9nNXD%2Ft5dx0e%2FDm9i1MK3D4leUcSEI1ZCSlhhwSA0TbTzfsdH4tO9zavEqJHHAYS7i6SJM5TOnbtf033JF6AWfmQk54SrdPhMB7ss59%2BqUka0Aw%2FYMOST1Rh5MMNnoL0wOD29Q4w1QQ6c8Kb5JJoBfi%2BH4cGxh2kjreClOOmQD6jxqYmPCq8oTVhgLK9isSzVIol%2B9QrOeNYSZGVge3T1qd6jl%2BTrbozlfQOBeJZZm4crgili4xAD7wrCE%2F%2F2EMuKZHpinp2vp8AZ%2F8XcEtmSuYRi2jhJ8QZFON%2F0VLKK3c9DjYY9GMdN43ydEYRwSa%2FEWzLMPv9aq0xKbATQgLgfC0B34a21kaq56NB7z1pVOSriO5CZX300mCS%2Byb3uEnhiDuNoVssdsimoKRhcVEyNIEqZ%2Fe9DkfWVHEqYtWf6ClJmGXL6ipGfZYbrtI1UfEuCH%2B4m50o21%2Fkxhme3MbG4hxuHyFgmihli58w8OxtQxdTGJ3DlGU9tI0sA0UEa0jSyC%2BF6i5UirUGqe6tSTHgU0ox%2Fzbwg5nS1iuzo%2FRu2K5wa9gIWcnCWb1yUzFwvLt1OmXB1eijMPuKnL4GOqUB%2FE02CRjy6eQVOxZxPmdJ2Y5rWIjnXVpe9T0OLuZt5Y3F%2Bv4FgczL501FvLWVwylDaR3ug4%2B09yTVem16e%2BgFCRn5iPlPLf5VxuGRNol%2FJgB5MYdVt4NVJw76ZqVKrlXTyRfOyCJquWxNyrtXPVRM9%2FpDdJQuffLilRYRQPvMix2hUie1DSioXZMBcZh7ovZaZPcnZjElGfJAHBzSEMREdfbzl4nS&X-Amz-Signature=ade246976cdaaf44f45b8187cd57287d5c02645b324a310109cb42a390d7f446&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ6VL5W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAswiWELYiaRtXvSxur0YipZWL7GdWCl9gK7hU0fDDUzAiEAxEx5syUAhSiUiZA5P59NCdsOhJ5l9AZKP0x1ntp4CrcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLOLprleubiDx7s5CrcA8NvCCcddUK9645pShvsYwjdlQvhf%2B6wBU%2F7RzUpwdGhZJBc4jCS9nNXD%2Ft5dx0e%2FDm9i1MK3D4leUcSEI1ZCSlhhwSA0TbTzfsdH4tO9zavEqJHHAYS7i6SJM5TOnbtf033JF6AWfmQk54SrdPhMB7ss59%2BqUka0Aw%2FYMOST1Rh5MMNnoL0wOD29Q4w1QQ6c8Kb5JJoBfi%2BH4cGxh2kjreClOOmQD6jxqYmPCq8oTVhgLK9isSzVIol%2B9QrOeNYSZGVge3T1qd6jl%2BTrbozlfQOBeJZZm4crgili4xAD7wrCE%2F%2F2EMuKZHpinp2vp8AZ%2F8XcEtmSuYRi2jhJ8QZFON%2F0VLKK3c9DjYY9GMdN43ydEYRwSa%2FEWzLMPv9aq0xKbATQgLgfC0B34a21kaq56NB7z1pVOSriO5CZX300mCS%2Byb3uEnhiDuNoVssdsimoKRhcVEyNIEqZ%2Fe9DkfWVHEqYtWf6ClJmGXL6ipGfZYbrtI1UfEuCH%2B4m50o21%2Fkxhme3MbG4hxuHyFgmihli58w8OxtQxdTGJ3DlGU9tI0sA0UEa0jSyC%2BF6i5UirUGqe6tSTHgU0ox%2Fzbwg5nS1iuzo%2FRu2K5wa9gIWcnCWb1yUzFwvLt1OmXB1eijMPuKnL4GOqUB%2FE02CRjy6eQVOxZxPmdJ2Y5rWIjnXVpe9T0OLuZt5Y3F%2Bv4FgczL501FvLWVwylDaR3ug4%2B09yTVem16e%2BgFCRn5iPlPLf5VxuGRNol%2FJgB5MYdVt4NVJw76ZqVKrlXTyRfOyCJquWxNyrtXPVRM9%2FpDdJQuffLilRYRQPvMix2hUie1DSioXZMBcZh7ovZaZPcnZjElGfJAHBzSEMREdfbzl4nS&X-Amz-Signature=9ae34a2d8f45febd305ca0362ca8614b5a246a170c006b025a3f62f135154d39&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ6VL5W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAswiWELYiaRtXvSxur0YipZWL7GdWCl9gK7hU0fDDUzAiEAxEx5syUAhSiUiZA5P59NCdsOhJ5l9AZKP0x1ntp4CrcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLOLprleubiDx7s5CrcA8NvCCcddUK9645pShvsYwjdlQvhf%2B6wBU%2F7RzUpwdGhZJBc4jCS9nNXD%2Ft5dx0e%2FDm9i1MK3D4leUcSEI1ZCSlhhwSA0TbTzfsdH4tO9zavEqJHHAYS7i6SJM5TOnbtf033JF6AWfmQk54SrdPhMB7ss59%2BqUka0Aw%2FYMOST1Rh5MMNnoL0wOD29Q4w1QQ6c8Kb5JJoBfi%2BH4cGxh2kjreClOOmQD6jxqYmPCq8oTVhgLK9isSzVIol%2B9QrOeNYSZGVge3T1qd6jl%2BTrbozlfQOBeJZZm4crgili4xAD7wrCE%2F%2F2EMuKZHpinp2vp8AZ%2F8XcEtmSuYRi2jhJ8QZFON%2F0VLKK3c9DjYY9GMdN43ydEYRwSa%2FEWzLMPv9aq0xKbATQgLgfC0B34a21kaq56NB7z1pVOSriO5CZX300mCS%2Byb3uEnhiDuNoVssdsimoKRhcVEyNIEqZ%2Fe9DkfWVHEqYtWf6ClJmGXL6ipGfZYbrtI1UfEuCH%2B4m50o21%2Fkxhme3MbG4hxuHyFgmihli58w8OxtQxdTGJ3DlGU9tI0sA0UEa0jSyC%2BF6i5UirUGqe6tSTHgU0ox%2Fzbwg5nS1iuzo%2FRu2K5wa9gIWcnCWb1yUzFwvLt1OmXB1eijMPuKnL4GOqUB%2FE02CRjy6eQVOxZxPmdJ2Y5rWIjnXVpe9T0OLuZt5Y3F%2Bv4FgczL501FvLWVwylDaR3ug4%2B09yTVem16e%2BgFCRn5iPlPLf5VxuGRNol%2FJgB5MYdVt4NVJw76ZqVKrlXTyRfOyCJquWxNyrtXPVRM9%2FpDdJQuffLilRYRQPvMix2hUie1DSioXZMBcZh7ovZaZPcnZjElGfJAHBzSEMREdfbzl4nS&X-Amz-Signature=d4bebdc5e6b162a1c3d862d4ea213dc83bde66a7f37efc53b8791dde665da46b&X-Amz-SignedHeaders=host&x-id=GetObject)
