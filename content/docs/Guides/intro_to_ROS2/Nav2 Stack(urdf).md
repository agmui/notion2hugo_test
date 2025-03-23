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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5FE2IQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK%2BTN27EZ1ogYh2PPyDk4%2BG3szZKTsqal41koE4LYPGAiEAgCcOfJMJeoXOMURAyHMyA3f8UAUsDTIr8T5VKGGzhf4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc7kVQUzgvi8GNniCrcAysNaGlKt%2FxhbVXLwXAn7eAm%2FCBz65lfb9GdK38vXRwy7z9ODKqtErAZPTckZE3O%2Bp%2Fs7l5%2FE2FynLy6MrUq5O3N5ykv%2BRmkBg%2FzFwzqDpNaNyd2b4EMrQWyNrGb6taxo0hNVUGCnkCfB2bysvHMfld2zqWte8ZSfuh0CsSHE8%2FO0eB%2BTUN1bUIg4DK4uiVe2MlO9c91PUZuZkD57hNMXgcRBYmS9qThHObljIAx415RkA4%2BRJD0LPrAPy%2Fqkj91Dv51Rsr0mB%2BUI1tCCoY0SQpqLFAVIp9itAbUFaiMtK5U5K78u5CIdqd%2FUnZ5rYLq08MwcLavhS5uoKvjp8xL4ZXPlH9D%2BvhAEVIyVKbYufwagdygfIQqYoL0CNECRyhTnthpXmnCLFWpzCkfzpi2ki%2BDRO1%2FW%2FpVj6sieaSiR7OOiMPP6tnKgS5ZJkRXGAanunNn9LwZGFMyPnRpjHG6XFUyXp7G0gnIExqXyWTDaq6iyXWI95nv4AraxI9cnETcxcM%2FydQVclWGQbHYSemz%2Bh7SgJaoNfYcIhOVRBzb79FX2f7HK6VLfjzEarWrYSS4xMW2%2FhNLbchaZjE%2FTlfJJs76Diy7ZdGqlr7hRtKLojvz5ieAc8WdAoubkYDvMJHLgb8GOqUBKt14JCsKTjMg58YJbN0ddgD8xplIfxOFdwKNRiUi6mL%2FyzSdrTntH1RLeh8nltToPN4Fm6BLsZjc0wLJuHguTX7%2FqVu4%2BL1cLLDrDy0GzFDR9FjzErbqt3KsWA0fNQBUS5VrJm7OHaPaL5tRuw5cgXmZ5AN%2B4KXQsBglIHDjxuVmb%2FnOOpGLIzRS%2FnKScA4vkPoFkDu5vmFJBJtASFqWOPdrm45T&X-Amz-Signature=9269b1403a05ff8f610d53c6973d1d52006fb9c79c46c925a6c73c4839925d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5FE2IQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK%2BTN27EZ1ogYh2PPyDk4%2BG3szZKTsqal41koE4LYPGAiEAgCcOfJMJeoXOMURAyHMyA3f8UAUsDTIr8T5VKGGzhf4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc7kVQUzgvi8GNniCrcAysNaGlKt%2FxhbVXLwXAn7eAm%2FCBz65lfb9GdK38vXRwy7z9ODKqtErAZPTckZE3O%2Bp%2Fs7l5%2FE2FynLy6MrUq5O3N5ykv%2BRmkBg%2FzFwzqDpNaNyd2b4EMrQWyNrGb6taxo0hNVUGCnkCfB2bysvHMfld2zqWte8ZSfuh0CsSHE8%2FO0eB%2BTUN1bUIg4DK4uiVe2MlO9c91PUZuZkD57hNMXgcRBYmS9qThHObljIAx415RkA4%2BRJD0LPrAPy%2Fqkj91Dv51Rsr0mB%2BUI1tCCoY0SQpqLFAVIp9itAbUFaiMtK5U5K78u5CIdqd%2FUnZ5rYLq08MwcLavhS5uoKvjp8xL4ZXPlH9D%2BvhAEVIyVKbYufwagdygfIQqYoL0CNECRyhTnthpXmnCLFWpzCkfzpi2ki%2BDRO1%2FW%2FpVj6sieaSiR7OOiMPP6tnKgS5ZJkRXGAanunNn9LwZGFMyPnRpjHG6XFUyXp7G0gnIExqXyWTDaq6iyXWI95nv4AraxI9cnETcxcM%2FydQVclWGQbHYSemz%2Bh7SgJaoNfYcIhOVRBzb79FX2f7HK6VLfjzEarWrYSS4xMW2%2FhNLbchaZjE%2FTlfJJs76Diy7ZdGqlr7hRtKLojvz5ieAc8WdAoubkYDvMJHLgb8GOqUBKt14JCsKTjMg58YJbN0ddgD8xplIfxOFdwKNRiUi6mL%2FyzSdrTntH1RLeh8nltToPN4Fm6BLsZjc0wLJuHguTX7%2FqVu4%2BL1cLLDrDy0GzFDR9FjzErbqt3KsWA0fNQBUS5VrJm7OHaPaL5tRuw5cgXmZ5AN%2B4KXQsBglIHDjxuVmb%2FnOOpGLIzRS%2FnKScA4vkPoFkDu5vmFJBJtASFqWOPdrm45T&X-Amz-Signature=34dc771d89751bfa6f7e44b82bbcd50845f626a8c64eaaef013f58a85f7b8a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5FE2IQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK%2BTN27EZ1ogYh2PPyDk4%2BG3szZKTsqal41koE4LYPGAiEAgCcOfJMJeoXOMURAyHMyA3f8UAUsDTIr8T5VKGGzhf4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc7kVQUzgvi8GNniCrcAysNaGlKt%2FxhbVXLwXAn7eAm%2FCBz65lfb9GdK38vXRwy7z9ODKqtErAZPTckZE3O%2Bp%2Fs7l5%2FE2FynLy6MrUq5O3N5ykv%2BRmkBg%2FzFwzqDpNaNyd2b4EMrQWyNrGb6taxo0hNVUGCnkCfB2bysvHMfld2zqWte8ZSfuh0CsSHE8%2FO0eB%2BTUN1bUIg4DK4uiVe2MlO9c91PUZuZkD57hNMXgcRBYmS9qThHObljIAx415RkA4%2BRJD0LPrAPy%2Fqkj91Dv51Rsr0mB%2BUI1tCCoY0SQpqLFAVIp9itAbUFaiMtK5U5K78u5CIdqd%2FUnZ5rYLq08MwcLavhS5uoKvjp8xL4ZXPlH9D%2BvhAEVIyVKbYufwagdygfIQqYoL0CNECRyhTnthpXmnCLFWpzCkfzpi2ki%2BDRO1%2FW%2FpVj6sieaSiR7OOiMPP6tnKgS5ZJkRXGAanunNn9LwZGFMyPnRpjHG6XFUyXp7G0gnIExqXyWTDaq6iyXWI95nv4AraxI9cnETcxcM%2FydQVclWGQbHYSemz%2Bh7SgJaoNfYcIhOVRBzb79FX2f7HK6VLfjzEarWrYSS4xMW2%2FhNLbchaZjE%2FTlfJJs76Diy7ZdGqlr7hRtKLojvz5ieAc8WdAoubkYDvMJHLgb8GOqUBKt14JCsKTjMg58YJbN0ddgD8xplIfxOFdwKNRiUi6mL%2FyzSdrTntH1RLeh8nltToPN4Fm6BLsZjc0wLJuHguTX7%2FqVu4%2BL1cLLDrDy0GzFDR9FjzErbqt3KsWA0fNQBUS5VrJm7OHaPaL5tRuw5cgXmZ5AN%2B4KXQsBglIHDjxuVmb%2FnOOpGLIzRS%2FnKScA4vkPoFkDu5vmFJBJtASFqWOPdrm45T&X-Amz-Signature=daa0e1d8dfd91cc9434d115815753c7b47c860d8b944ed074e51cf30015c1025&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5FE2IQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK%2BTN27EZ1ogYh2PPyDk4%2BG3szZKTsqal41koE4LYPGAiEAgCcOfJMJeoXOMURAyHMyA3f8UAUsDTIr8T5VKGGzhf4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc7kVQUzgvi8GNniCrcAysNaGlKt%2FxhbVXLwXAn7eAm%2FCBz65lfb9GdK38vXRwy7z9ODKqtErAZPTckZE3O%2Bp%2Fs7l5%2FE2FynLy6MrUq5O3N5ykv%2BRmkBg%2FzFwzqDpNaNyd2b4EMrQWyNrGb6taxo0hNVUGCnkCfB2bysvHMfld2zqWte8ZSfuh0CsSHE8%2FO0eB%2BTUN1bUIg4DK4uiVe2MlO9c91PUZuZkD57hNMXgcRBYmS9qThHObljIAx415RkA4%2BRJD0LPrAPy%2Fqkj91Dv51Rsr0mB%2BUI1tCCoY0SQpqLFAVIp9itAbUFaiMtK5U5K78u5CIdqd%2FUnZ5rYLq08MwcLavhS5uoKvjp8xL4ZXPlH9D%2BvhAEVIyVKbYufwagdygfIQqYoL0CNECRyhTnthpXmnCLFWpzCkfzpi2ki%2BDRO1%2FW%2FpVj6sieaSiR7OOiMPP6tnKgS5ZJkRXGAanunNn9LwZGFMyPnRpjHG6XFUyXp7G0gnIExqXyWTDaq6iyXWI95nv4AraxI9cnETcxcM%2FydQVclWGQbHYSemz%2Bh7SgJaoNfYcIhOVRBzb79FX2f7HK6VLfjzEarWrYSS4xMW2%2FhNLbchaZjE%2FTlfJJs76Diy7ZdGqlr7hRtKLojvz5ieAc8WdAoubkYDvMJHLgb8GOqUBKt14JCsKTjMg58YJbN0ddgD8xplIfxOFdwKNRiUi6mL%2FyzSdrTntH1RLeh8nltToPN4Fm6BLsZjc0wLJuHguTX7%2FqVu4%2BL1cLLDrDy0GzFDR9FjzErbqt3KsWA0fNQBUS5VrJm7OHaPaL5tRuw5cgXmZ5AN%2B4KXQsBglIHDjxuVmb%2FnOOpGLIzRS%2FnKScA4vkPoFkDu5vmFJBJtASFqWOPdrm45T&X-Amz-Signature=c0f0342bd1c840d77e9d78416aa05ea97ffa940d8d1f01762ad3049cf11bfb10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5FE2IQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK%2BTN27EZ1ogYh2PPyDk4%2BG3szZKTsqal41koE4LYPGAiEAgCcOfJMJeoXOMURAyHMyA3f8UAUsDTIr8T5VKGGzhf4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc7kVQUzgvi8GNniCrcAysNaGlKt%2FxhbVXLwXAn7eAm%2FCBz65lfb9GdK38vXRwy7z9ODKqtErAZPTckZE3O%2Bp%2Fs7l5%2FE2FynLy6MrUq5O3N5ykv%2BRmkBg%2FzFwzqDpNaNyd2b4EMrQWyNrGb6taxo0hNVUGCnkCfB2bysvHMfld2zqWte8ZSfuh0CsSHE8%2FO0eB%2BTUN1bUIg4DK4uiVe2MlO9c91PUZuZkD57hNMXgcRBYmS9qThHObljIAx415RkA4%2BRJD0LPrAPy%2Fqkj91Dv51Rsr0mB%2BUI1tCCoY0SQpqLFAVIp9itAbUFaiMtK5U5K78u5CIdqd%2FUnZ5rYLq08MwcLavhS5uoKvjp8xL4ZXPlH9D%2BvhAEVIyVKbYufwagdygfIQqYoL0CNECRyhTnthpXmnCLFWpzCkfzpi2ki%2BDRO1%2FW%2FpVj6sieaSiR7OOiMPP6tnKgS5ZJkRXGAanunNn9LwZGFMyPnRpjHG6XFUyXp7G0gnIExqXyWTDaq6iyXWI95nv4AraxI9cnETcxcM%2FydQVclWGQbHYSemz%2Bh7SgJaoNfYcIhOVRBzb79FX2f7HK6VLfjzEarWrYSS4xMW2%2FhNLbchaZjE%2FTlfJJs76Diy7ZdGqlr7hRtKLojvz5ieAc8WdAoubkYDvMJHLgb8GOqUBKt14JCsKTjMg58YJbN0ddgD8xplIfxOFdwKNRiUi6mL%2FyzSdrTntH1RLeh8nltToPN4Fm6BLsZjc0wLJuHguTX7%2FqVu4%2BL1cLLDrDy0GzFDR9FjzErbqt3KsWA0fNQBUS5VrJm7OHaPaL5tRuw5cgXmZ5AN%2B4KXQsBglIHDjxuVmb%2FnOOpGLIzRS%2FnKScA4vkPoFkDu5vmFJBJtASFqWOPdrm45T&X-Amz-Signature=8e633ac7b82fc919fb3f3985753f5158021a1d7ba6c378a277baee98254bf06b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5FE2IQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK%2BTN27EZ1ogYh2PPyDk4%2BG3szZKTsqal41koE4LYPGAiEAgCcOfJMJeoXOMURAyHMyA3f8UAUsDTIr8T5VKGGzhf4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc7kVQUzgvi8GNniCrcAysNaGlKt%2FxhbVXLwXAn7eAm%2FCBz65lfb9GdK38vXRwy7z9ODKqtErAZPTckZE3O%2Bp%2Fs7l5%2FE2FynLy6MrUq5O3N5ykv%2BRmkBg%2FzFwzqDpNaNyd2b4EMrQWyNrGb6taxo0hNVUGCnkCfB2bysvHMfld2zqWte8ZSfuh0CsSHE8%2FO0eB%2BTUN1bUIg4DK4uiVe2MlO9c91PUZuZkD57hNMXgcRBYmS9qThHObljIAx415RkA4%2BRJD0LPrAPy%2Fqkj91Dv51Rsr0mB%2BUI1tCCoY0SQpqLFAVIp9itAbUFaiMtK5U5K78u5CIdqd%2FUnZ5rYLq08MwcLavhS5uoKvjp8xL4ZXPlH9D%2BvhAEVIyVKbYufwagdygfIQqYoL0CNECRyhTnthpXmnCLFWpzCkfzpi2ki%2BDRO1%2FW%2FpVj6sieaSiR7OOiMPP6tnKgS5ZJkRXGAanunNn9LwZGFMyPnRpjHG6XFUyXp7G0gnIExqXyWTDaq6iyXWI95nv4AraxI9cnETcxcM%2FydQVclWGQbHYSemz%2Bh7SgJaoNfYcIhOVRBzb79FX2f7HK6VLfjzEarWrYSS4xMW2%2FhNLbchaZjE%2FTlfJJs76Diy7ZdGqlr7hRtKLojvz5ieAc8WdAoubkYDvMJHLgb8GOqUBKt14JCsKTjMg58YJbN0ddgD8xplIfxOFdwKNRiUi6mL%2FyzSdrTntH1RLeh8nltToPN4Fm6BLsZjc0wLJuHguTX7%2FqVu4%2BL1cLLDrDy0GzFDR9FjzErbqt3KsWA0fNQBUS5VrJm7OHaPaL5tRuw5cgXmZ5AN%2B4KXQsBglIHDjxuVmb%2FnOOpGLIzRS%2FnKScA4vkPoFkDu5vmFJBJtASFqWOPdrm45T&X-Amz-Signature=6dc3f35cb938abf073b22600c262854635209db6b3c2eec60c6efa1ff8df8c55&X-Amz-SignedHeaders=host&x-id=GetObject)
