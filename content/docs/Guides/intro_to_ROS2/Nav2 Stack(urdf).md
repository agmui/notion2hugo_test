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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDUSZDWE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD4YU8MbiLIn5QY15fyzQA3iEiR5FZN%2F8HkXba3bclaAiEAxToKAUamMOtQpzqM7eBzC2vASQp5%2FYW6nNShICfluyMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCJ6sYkVbONhiFPvLSrcAzi0%2BZw6esBbnfF8rHcX6r6IffLJAhoeOJwnnBu4oNIp17aWIwmQ7c4l5OfQh2MRWn88H5KQMuK1rLtbU8EsYSTjlSNK8FbDtHSyhoGdAlZr%2FSrg4Xo%2BRPGTZGtSACu%2BqkvR%2Fa56dbu%2F%2FiR6Y3Oo16tbBm1hwbUnIgpBhRlx%2BQto5p9955cJx510o8Xe8VzsRNnIojbOqtvZ%2Bgdtspf%2BN%2BIBlDnTUay55RbF6vJyXrUpicy%2F1tQyCpWglCFLa2l3q1F5sirpwnGe2c4UFeTppAgOzoJWAiw02xSMd4%2FtUmflS0NqYbQQZUgEgvvDryOH0LApfzf070V%2F9bo3qzVXSx2PrH%2FQY1Ag3Q70Alodf6Ig8uBNMrIOlkCYO1iZdOYBkNOLVwvleEsD2%2BNCUZpYYWS5jFEMoLNm6yjl21FSeoY7cBUWXsl064pfGlZk9KITkgFwAcWq1qUO7aIpqZ6%2FoJUzi24o1TbuKlX7UI7cHQTaLV1sknlKisr7z8fCgM8%2FqTw7%2Bq1%2BKg0eeDdcOveZPBiLI3yuuIAQsl5hHxF9Kn4WG5GyMamKpaE4Kj1XZhORhNi%2B%2FImX6ivMAMQtBIVrXoOq9PSOVGGelpGbsSTDw3HfZryrIjd6i5J7Lzh2MM7qlb8GOqUB34ASnq6GRcIg%2BuIClUg5ASsK6TA%2Fis15veLle2DF%2FWT0t9iK%2BonCk3dHOYUH6wDU6MT%2FXPsQSMIsY62IJ%2FmizlLPZlC4IWX%2FYIK1ygNmZvzqaRt8HVgw1jXwz8zyQM0UFiRc00yWmfYVP7hjzUWQ7vkB%2Fe5VGYF12b8EuZCC%2Bh6rpuVhk%2FTHzX%2FBXm0W93dvx4ZeOiGAkUCdaTTLmbp0JMK7YQq5&X-Amz-Signature=58c2fb8d4fe80bdc999a1e0d195fc9546a5328eff721361dfa3e8c15b3cad72c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDUSZDWE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD4YU8MbiLIn5QY15fyzQA3iEiR5FZN%2F8HkXba3bclaAiEAxToKAUamMOtQpzqM7eBzC2vASQp5%2FYW6nNShICfluyMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCJ6sYkVbONhiFPvLSrcAzi0%2BZw6esBbnfF8rHcX6r6IffLJAhoeOJwnnBu4oNIp17aWIwmQ7c4l5OfQh2MRWn88H5KQMuK1rLtbU8EsYSTjlSNK8FbDtHSyhoGdAlZr%2FSrg4Xo%2BRPGTZGtSACu%2BqkvR%2Fa56dbu%2F%2FiR6Y3Oo16tbBm1hwbUnIgpBhRlx%2BQto5p9955cJx510o8Xe8VzsRNnIojbOqtvZ%2Bgdtspf%2BN%2BIBlDnTUay55RbF6vJyXrUpicy%2F1tQyCpWglCFLa2l3q1F5sirpwnGe2c4UFeTppAgOzoJWAiw02xSMd4%2FtUmflS0NqYbQQZUgEgvvDryOH0LApfzf070V%2F9bo3qzVXSx2PrH%2FQY1Ag3Q70Alodf6Ig8uBNMrIOlkCYO1iZdOYBkNOLVwvleEsD2%2BNCUZpYYWS5jFEMoLNm6yjl21FSeoY7cBUWXsl064pfGlZk9KITkgFwAcWq1qUO7aIpqZ6%2FoJUzi24o1TbuKlX7UI7cHQTaLV1sknlKisr7z8fCgM8%2FqTw7%2Bq1%2BKg0eeDdcOveZPBiLI3yuuIAQsl5hHxF9Kn4WG5GyMamKpaE4Kj1XZhORhNi%2B%2FImX6ivMAMQtBIVrXoOq9PSOVGGelpGbsSTDw3HfZryrIjd6i5J7Lzh2MM7qlb8GOqUB34ASnq6GRcIg%2BuIClUg5ASsK6TA%2Fis15veLle2DF%2FWT0t9iK%2BonCk3dHOYUH6wDU6MT%2FXPsQSMIsY62IJ%2FmizlLPZlC4IWX%2FYIK1ygNmZvzqaRt8HVgw1jXwz8zyQM0UFiRc00yWmfYVP7hjzUWQ7vkB%2Fe5VGYF12b8EuZCC%2Bh6rpuVhk%2FTHzX%2FBXm0W93dvx4ZeOiGAkUCdaTTLmbp0JMK7YQq5&X-Amz-Signature=b0492ee1236ac3268d237b31c15d901f931b4b74fa21cb09cd6c5a00331e0805&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDUSZDWE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD4YU8MbiLIn5QY15fyzQA3iEiR5FZN%2F8HkXba3bclaAiEAxToKAUamMOtQpzqM7eBzC2vASQp5%2FYW6nNShICfluyMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCJ6sYkVbONhiFPvLSrcAzi0%2BZw6esBbnfF8rHcX6r6IffLJAhoeOJwnnBu4oNIp17aWIwmQ7c4l5OfQh2MRWn88H5KQMuK1rLtbU8EsYSTjlSNK8FbDtHSyhoGdAlZr%2FSrg4Xo%2BRPGTZGtSACu%2BqkvR%2Fa56dbu%2F%2FiR6Y3Oo16tbBm1hwbUnIgpBhRlx%2BQto5p9955cJx510o8Xe8VzsRNnIojbOqtvZ%2Bgdtspf%2BN%2BIBlDnTUay55RbF6vJyXrUpicy%2F1tQyCpWglCFLa2l3q1F5sirpwnGe2c4UFeTppAgOzoJWAiw02xSMd4%2FtUmflS0NqYbQQZUgEgvvDryOH0LApfzf070V%2F9bo3qzVXSx2PrH%2FQY1Ag3Q70Alodf6Ig8uBNMrIOlkCYO1iZdOYBkNOLVwvleEsD2%2BNCUZpYYWS5jFEMoLNm6yjl21FSeoY7cBUWXsl064pfGlZk9KITkgFwAcWq1qUO7aIpqZ6%2FoJUzi24o1TbuKlX7UI7cHQTaLV1sknlKisr7z8fCgM8%2FqTw7%2Bq1%2BKg0eeDdcOveZPBiLI3yuuIAQsl5hHxF9Kn4WG5GyMamKpaE4Kj1XZhORhNi%2B%2FImX6ivMAMQtBIVrXoOq9PSOVGGelpGbsSTDw3HfZryrIjd6i5J7Lzh2MM7qlb8GOqUB34ASnq6GRcIg%2BuIClUg5ASsK6TA%2Fis15veLle2DF%2FWT0t9iK%2BonCk3dHOYUH6wDU6MT%2FXPsQSMIsY62IJ%2FmizlLPZlC4IWX%2FYIK1ygNmZvzqaRt8HVgw1jXwz8zyQM0UFiRc00yWmfYVP7hjzUWQ7vkB%2Fe5VGYF12b8EuZCC%2Bh6rpuVhk%2FTHzX%2FBXm0W93dvx4ZeOiGAkUCdaTTLmbp0JMK7YQq5&X-Amz-Signature=90473da8b255638996dad5bcc93c9a374c87f744f9d24577913c81c3d53cbd88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDUSZDWE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD4YU8MbiLIn5QY15fyzQA3iEiR5FZN%2F8HkXba3bclaAiEAxToKAUamMOtQpzqM7eBzC2vASQp5%2FYW6nNShICfluyMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCJ6sYkVbONhiFPvLSrcAzi0%2BZw6esBbnfF8rHcX6r6IffLJAhoeOJwnnBu4oNIp17aWIwmQ7c4l5OfQh2MRWn88H5KQMuK1rLtbU8EsYSTjlSNK8FbDtHSyhoGdAlZr%2FSrg4Xo%2BRPGTZGtSACu%2BqkvR%2Fa56dbu%2F%2FiR6Y3Oo16tbBm1hwbUnIgpBhRlx%2BQto5p9955cJx510o8Xe8VzsRNnIojbOqtvZ%2Bgdtspf%2BN%2BIBlDnTUay55RbF6vJyXrUpicy%2F1tQyCpWglCFLa2l3q1F5sirpwnGe2c4UFeTppAgOzoJWAiw02xSMd4%2FtUmflS0NqYbQQZUgEgvvDryOH0LApfzf070V%2F9bo3qzVXSx2PrH%2FQY1Ag3Q70Alodf6Ig8uBNMrIOlkCYO1iZdOYBkNOLVwvleEsD2%2BNCUZpYYWS5jFEMoLNm6yjl21FSeoY7cBUWXsl064pfGlZk9KITkgFwAcWq1qUO7aIpqZ6%2FoJUzi24o1TbuKlX7UI7cHQTaLV1sknlKisr7z8fCgM8%2FqTw7%2Bq1%2BKg0eeDdcOveZPBiLI3yuuIAQsl5hHxF9Kn4WG5GyMamKpaE4Kj1XZhORhNi%2B%2FImX6ivMAMQtBIVrXoOq9PSOVGGelpGbsSTDw3HfZryrIjd6i5J7Lzh2MM7qlb8GOqUB34ASnq6GRcIg%2BuIClUg5ASsK6TA%2Fis15veLle2DF%2FWT0t9iK%2BonCk3dHOYUH6wDU6MT%2FXPsQSMIsY62IJ%2FmizlLPZlC4IWX%2FYIK1ygNmZvzqaRt8HVgw1jXwz8zyQM0UFiRc00yWmfYVP7hjzUWQ7vkB%2Fe5VGYF12b8EuZCC%2Bh6rpuVhk%2FTHzX%2FBXm0W93dvx4ZeOiGAkUCdaTTLmbp0JMK7YQq5&X-Amz-Signature=5945434680b7e8d5b194d16cdf56fe3c3631a1a6fd4aab43d531134fa6fdb70f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDUSZDWE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD4YU8MbiLIn5QY15fyzQA3iEiR5FZN%2F8HkXba3bclaAiEAxToKAUamMOtQpzqM7eBzC2vASQp5%2FYW6nNShICfluyMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCJ6sYkVbONhiFPvLSrcAzi0%2BZw6esBbnfF8rHcX6r6IffLJAhoeOJwnnBu4oNIp17aWIwmQ7c4l5OfQh2MRWn88H5KQMuK1rLtbU8EsYSTjlSNK8FbDtHSyhoGdAlZr%2FSrg4Xo%2BRPGTZGtSACu%2BqkvR%2Fa56dbu%2F%2FiR6Y3Oo16tbBm1hwbUnIgpBhRlx%2BQto5p9955cJx510o8Xe8VzsRNnIojbOqtvZ%2Bgdtspf%2BN%2BIBlDnTUay55RbF6vJyXrUpicy%2F1tQyCpWglCFLa2l3q1F5sirpwnGe2c4UFeTppAgOzoJWAiw02xSMd4%2FtUmflS0NqYbQQZUgEgvvDryOH0LApfzf070V%2F9bo3qzVXSx2PrH%2FQY1Ag3Q70Alodf6Ig8uBNMrIOlkCYO1iZdOYBkNOLVwvleEsD2%2BNCUZpYYWS5jFEMoLNm6yjl21FSeoY7cBUWXsl064pfGlZk9KITkgFwAcWq1qUO7aIpqZ6%2FoJUzi24o1TbuKlX7UI7cHQTaLV1sknlKisr7z8fCgM8%2FqTw7%2Bq1%2BKg0eeDdcOveZPBiLI3yuuIAQsl5hHxF9Kn4WG5GyMamKpaE4Kj1XZhORhNi%2B%2FImX6ivMAMQtBIVrXoOq9PSOVGGelpGbsSTDw3HfZryrIjd6i5J7Lzh2MM7qlb8GOqUB34ASnq6GRcIg%2BuIClUg5ASsK6TA%2Fis15veLle2DF%2FWT0t9iK%2BonCk3dHOYUH6wDU6MT%2FXPsQSMIsY62IJ%2FmizlLPZlC4IWX%2FYIK1ygNmZvzqaRt8HVgw1jXwz8zyQM0UFiRc00yWmfYVP7hjzUWQ7vkB%2Fe5VGYF12b8EuZCC%2Bh6rpuVhk%2FTHzX%2FBXm0W93dvx4ZeOiGAkUCdaTTLmbp0JMK7YQq5&X-Amz-Signature=af14ab90d1e354277cc6ca08c7d3312c3654eb1a3176eb94e6d874edd3df5eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDUSZDWE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD4YU8MbiLIn5QY15fyzQA3iEiR5FZN%2F8HkXba3bclaAiEAxToKAUamMOtQpzqM7eBzC2vASQp5%2FYW6nNShICfluyMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCJ6sYkVbONhiFPvLSrcAzi0%2BZw6esBbnfF8rHcX6r6IffLJAhoeOJwnnBu4oNIp17aWIwmQ7c4l5OfQh2MRWn88H5KQMuK1rLtbU8EsYSTjlSNK8FbDtHSyhoGdAlZr%2FSrg4Xo%2BRPGTZGtSACu%2BqkvR%2Fa56dbu%2F%2FiR6Y3Oo16tbBm1hwbUnIgpBhRlx%2BQto5p9955cJx510o8Xe8VzsRNnIojbOqtvZ%2Bgdtspf%2BN%2BIBlDnTUay55RbF6vJyXrUpicy%2F1tQyCpWglCFLa2l3q1F5sirpwnGe2c4UFeTppAgOzoJWAiw02xSMd4%2FtUmflS0NqYbQQZUgEgvvDryOH0LApfzf070V%2F9bo3qzVXSx2PrH%2FQY1Ag3Q70Alodf6Ig8uBNMrIOlkCYO1iZdOYBkNOLVwvleEsD2%2BNCUZpYYWS5jFEMoLNm6yjl21FSeoY7cBUWXsl064pfGlZk9KITkgFwAcWq1qUO7aIpqZ6%2FoJUzi24o1TbuKlX7UI7cHQTaLV1sknlKisr7z8fCgM8%2FqTw7%2Bq1%2BKg0eeDdcOveZPBiLI3yuuIAQsl5hHxF9Kn4WG5GyMamKpaE4Kj1XZhORhNi%2B%2FImX6ivMAMQtBIVrXoOq9PSOVGGelpGbsSTDw3HfZryrIjd6i5J7Lzh2MM7qlb8GOqUB34ASnq6GRcIg%2BuIClUg5ASsK6TA%2Fis15veLle2DF%2FWT0t9iK%2BonCk3dHOYUH6wDU6MT%2FXPsQSMIsY62IJ%2FmizlLPZlC4IWX%2FYIK1ygNmZvzqaRt8HVgw1jXwz8zyQM0UFiRc00yWmfYVP7hjzUWQ7vkB%2Fe5VGYF12b8EuZCC%2Bh6rpuVhk%2FTHzX%2FBXm0W93dvx4ZeOiGAkUCdaTTLmbp0JMK7YQq5&X-Amz-Signature=5cbb3f58a83c85bb5b5d1e1aab595a2b70d9126364aef24ef0fbf6637fd4f5c4&X-Amz-SignedHeaders=host&x-id=GetObject)
