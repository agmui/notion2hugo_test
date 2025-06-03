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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KSXHLQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBHhyQ8Nve4gdOsboqzDEBhuopGzzAjWmCAImlPswjoKAiEA8pq4ddHT10lIl%2FxDd2X1xZBlEM6CcWG908FkRycjOsMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLXRQT6MDa7fnt0U1CrcA%2Fdv9oFq%2F55FbTw5bIbopBGcv2M1H4bQUwMHiKiF3EvWsPyfdW%2FiPWGBxfwQ%2BmUZAMgqZYpo39ZJNkompRBVGDcYAg347LwRqBmYrkZ3tnBRoSBKBjctOGioIcCSPDMGDiQ0ATVQy3wl4rLW8ZGvxDZBQG00QpgCgLuclEtSjrtQbzi%2BKWZxOhgWGpxJocmwKcWChdzkgJ9PXl1tKQir%2BKqn65uNGK6d2l1avbZoZLBU1REa20qNPSpd%2BBiD9pnlw0GNIptSGbwF340WLjIQAooTp5LE%2BfjVVW1HDo%2BXFXnzD4oS%2F6h0UobXMf1UIrh5LmBPhpy8vkw0C%2BAzCJlQd7g5GOjkUJqv3vwy6WQpAtxdQioXxJCUVSGT47MlYYERZZLGpQiKGZAevFoc31nx%2BEj1IfrCSKa6v1U5ZbPNrijyguT5NUIHDWP%2Bw0j3LiabzDARe2lHiviGQaP6fyNpFYSdCcpdxxRYNBY%2FRVJpaTbXQ4pwFCsJxjKWK0qdJliNavvkuivwKQo306oU5soIXPK%2BuGNVPG9z23%2FjtJGug15FsJ3koKC8Cz4MayILx6tAQhTFWy656AjrGhWExzb0V13S1sxuiUoIZOqLFF81V5iQ%2BvqCtAYFFgyjJStKMO6s%2B8EGOqUBMwr8TFHuJBC8IsdjvqzPu534MRhkXsUOQO4ZHVxfQtytnRSMjrZQmeAoZAgKpDOyWX1j%2FtFfgDSZp9QsebT8fdFOn0DGajW2fUjH2gykKY3NPTXmvywxFAmNfdNHr8E3q9K6ScTxeZEaFP9CVTM40zloHYmd8SuLg9z%2FJNdxlutqJRM4cV7h5Pyep8hY4dW1o1sKq3%2B%2BTdFai2aAADurDE8UHG6Q&X-Amz-Signature=d52d6cb9329be030ccbc27a8460f772dc786313f1fb758273664e2648bbcf1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KSXHLQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBHhyQ8Nve4gdOsboqzDEBhuopGzzAjWmCAImlPswjoKAiEA8pq4ddHT10lIl%2FxDd2X1xZBlEM6CcWG908FkRycjOsMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLXRQT6MDa7fnt0U1CrcA%2Fdv9oFq%2F55FbTw5bIbopBGcv2M1H4bQUwMHiKiF3EvWsPyfdW%2FiPWGBxfwQ%2BmUZAMgqZYpo39ZJNkompRBVGDcYAg347LwRqBmYrkZ3tnBRoSBKBjctOGioIcCSPDMGDiQ0ATVQy3wl4rLW8ZGvxDZBQG00QpgCgLuclEtSjrtQbzi%2BKWZxOhgWGpxJocmwKcWChdzkgJ9PXl1tKQir%2BKqn65uNGK6d2l1avbZoZLBU1REa20qNPSpd%2BBiD9pnlw0GNIptSGbwF340WLjIQAooTp5LE%2BfjVVW1HDo%2BXFXnzD4oS%2F6h0UobXMf1UIrh5LmBPhpy8vkw0C%2BAzCJlQd7g5GOjkUJqv3vwy6WQpAtxdQioXxJCUVSGT47MlYYERZZLGpQiKGZAevFoc31nx%2BEj1IfrCSKa6v1U5ZbPNrijyguT5NUIHDWP%2Bw0j3LiabzDARe2lHiviGQaP6fyNpFYSdCcpdxxRYNBY%2FRVJpaTbXQ4pwFCsJxjKWK0qdJliNavvkuivwKQo306oU5soIXPK%2BuGNVPG9z23%2FjtJGug15FsJ3koKC8Cz4MayILx6tAQhTFWy656AjrGhWExzb0V13S1sxuiUoIZOqLFF81V5iQ%2BvqCtAYFFgyjJStKMO6s%2B8EGOqUBMwr8TFHuJBC8IsdjvqzPu534MRhkXsUOQO4ZHVxfQtytnRSMjrZQmeAoZAgKpDOyWX1j%2FtFfgDSZp9QsebT8fdFOn0DGajW2fUjH2gykKY3NPTXmvywxFAmNfdNHr8E3q9K6ScTxeZEaFP9CVTM40zloHYmd8SuLg9z%2FJNdxlutqJRM4cV7h5Pyep8hY4dW1o1sKq3%2B%2BTdFai2aAADurDE8UHG6Q&X-Amz-Signature=dbfdb8891a556692511b1e0dbaf3e30ec9d67fe847fc9cf5880a8884d4f5fb9b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KSXHLQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBHhyQ8Nve4gdOsboqzDEBhuopGzzAjWmCAImlPswjoKAiEA8pq4ddHT10lIl%2FxDd2X1xZBlEM6CcWG908FkRycjOsMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLXRQT6MDa7fnt0U1CrcA%2Fdv9oFq%2F55FbTw5bIbopBGcv2M1H4bQUwMHiKiF3EvWsPyfdW%2FiPWGBxfwQ%2BmUZAMgqZYpo39ZJNkompRBVGDcYAg347LwRqBmYrkZ3tnBRoSBKBjctOGioIcCSPDMGDiQ0ATVQy3wl4rLW8ZGvxDZBQG00QpgCgLuclEtSjrtQbzi%2BKWZxOhgWGpxJocmwKcWChdzkgJ9PXl1tKQir%2BKqn65uNGK6d2l1avbZoZLBU1REa20qNPSpd%2BBiD9pnlw0GNIptSGbwF340WLjIQAooTp5LE%2BfjVVW1HDo%2BXFXnzD4oS%2F6h0UobXMf1UIrh5LmBPhpy8vkw0C%2BAzCJlQd7g5GOjkUJqv3vwy6WQpAtxdQioXxJCUVSGT47MlYYERZZLGpQiKGZAevFoc31nx%2BEj1IfrCSKa6v1U5ZbPNrijyguT5NUIHDWP%2Bw0j3LiabzDARe2lHiviGQaP6fyNpFYSdCcpdxxRYNBY%2FRVJpaTbXQ4pwFCsJxjKWK0qdJliNavvkuivwKQo306oU5soIXPK%2BuGNVPG9z23%2FjtJGug15FsJ3koKC8Cz4MayILx6tAQhTFWy656AjrGhWExzb0V13S1sxuiUoIZOqLFF81V5iQ%2BvqCtAYFFgyjJStKMO6s%2B8EGOqUBMwr8TFHuJBC8IsdjvqzPu534MRhkXsUOQO4ZHVxfQtytnRSMjrZQmeAoZAgKpDOyWX1j%2FtFfgDSZp9QsebT8fdFOn0DGajW2fUjH2gykKY3NPTXmvywxFAmNfdNHr8E3q9K6ScTxeZEaFP9CVTM40zloHYmd8SuLg9z%2FJNdxlutqJRM4cV7h5Pyep8hY4dW1o1sKq3%2B%2BTdFai2aAADurDE8UHG6Q&X-Amz-Signature=ae710a730183c4996017b30f355b1caf7f799e4e41cab6383b303b63b41ea239&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KSXHLQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBHhyQ8Nve4gdOsboqzDEBhuopGzzAjWmCAImlPswjoKAiEA8pq4ddHT10lIl%2FxDd2X1xZBlEM6CcWG908FkRycjOsMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLXRQT6MDa7fnt0U1CrcA%2Fdv9oFq%2F55FbTw5bIbopBGcv2M1H4bQUwMHiKiF3EvWsPyfdW%2FiPWGBxfwQ%2BmUZAMgqZYpo39ZJNkompRBVGDcYAg347LwRqBmYrkZ3tnBRoSBKBjctOGioIcCSPDMGDiQ0ATVQy3wl4rLW8ZGvxDZBQG00QpgCgLuclEtSjrtQbzi%2BKWZxOhgWGpxJocmwKcWChdzkgJ9PXl1tKQir%2BKqn65uNGK6d2l1avbZoZLBU1REa20qNPSpd%2BBiD9pnlw0GNIptSGbwF340WLjIQAooTp5LE%2BfjVVW1HDo%2BXFXnzD4oS%2F6h0UobXMf1UIrh5LmBPhpy8vkw0C%2BAzCJlQd7g5GOjkUJqv3vwy6WQpAtxdQioXxJCUVSGT47MlYYERZZLGpQiKGZAevFoc31nx%2BEj1IfrCSKa6v1U5ZbPNrijyguT5NUIHDWP%2Bw0j3LiabzDARe2lHiviGQaP6fyNpFYSdCcpdxxRYNBY%2FRVJpaTbXQ4pwFCsJxjKWK0qdJliNavvkuivwKQo306oU5soIXPK%2BuGNVPG9z23%2FjtJGug15FsJ3koKC8Cz4MayILx6tAQhTFWy656AjrGhWExzb0V13S1sxuiUoIZOqLFF81V5iQ%2BvqCtAYFFgyjJStKMO6s%2B8EGOqUBMwr8TFHuJBC8IsdjvqzPu534MRhkXsUOQO4ZHVxfQtytnRSMjrZQmeAoZAgKpDOyWX1j%2FtFfgDSZp9QsebT8fdFOn0DGajW2fUjH2gykKY3NPTXmvywxFAmNfdNHr8E3q9K6ScTxeZEaFP9CVTM40zloHYmd8SuLg9z%2FJNdxlutqJRM4cV7h5Pyep8hY4dW1o1sKq3%2B%2BTdFai2aAADurDE8UHG6Q&X-Amz-Signature=482a1c60abc21b31c30e20f82facc0508ef05344a15e0a38de1e9dc633026ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KSXHLQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBHhyQ8Nve4gdOsboqzDEBhuopGzzAjWmCAImlPswjoKAiEA8pq4ddHT10lIl%2FxDd2X1xZBlEM6CcWG908FkRycjOsMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLXRQT6MDa7fnt0U1CrcA%2Fdv9oFq%2F55FbTw5bIbopBGcv2M1H4bQUwMHiKiF3EvWsPyfdW%2FiPWGBxfwQ%2BmUZAMgqZYpo39ZJNkompRBVGDcYAg347LwRqBmYrkZ3tnBRoSBKBjctOGioIcCSPDMGDiQ0ATVQy3wl4rLW8ZGvxDZBQG00QpgCgLuclEtSjrtQbzi%2BKWZxOhgWGpxJocmwKcWChdzkgJ9PXl1tKQir%2BKqn65uNGK6d2l1avbZoZLBU1REa20qNPSpd%2BBiD9pnlw0GNIptSGbwF340WLjIQAooTp5LE%2BfjVVW1HDo%2BXFXnzD4oS%2F6h0UobXMf1UIrh5LmBPhpy8vkw0C%2BAzCJlQd7g5GOjkUJqv3vwy6WQpAtxdQioXxJCUVSGT47MlYYERZZLGpQiKGZAevFoc31nx%2BEj1IfrCSKa6v1U5ZbPNrijyguT5NUIHDWP%2Bw0j3LiabzDARe2lHiviGQaP6fyNpFYSdCcpdxxRYNBY%2FRVJpaTbXQ4pwFCsJxjKWK0qdJliNavvkuivwKQo306oU5soIXPK%2BuGNVPG9z23%2FjtJGug15FsJ3koKC8Cz4MayILx6tAQhTFWy656AjrGhWExzb0V13S1sxuiUoIZOqLFF81V5iQ%2BvqCtAYFFgyjJStKMO6s%2B8EGOqUBMwr8TFHuJBC8IsdjvqzPu534MRhkXsUOQO4ZHVxfQtytnRSMjrZQmeAoZAgKpDOyWX1j%2FtFfgDSZp9QsebT8fdFOn0DGajW2fUjH2gykKY3NPTXmvywxFAmNfdNHr8E3q9K6ScTxeZEaFP9CVTM40zloHYmd8SuLg9z%2FJNdxlutqJRM4cV7h5Pyep8hY4dW1o1sKq3%2B%2BTdFai2aAADurDE8UHG6Q&X-Amz-Signature=8161749c69ff9b08296dc4bcd7f4560dcba1b471104379c2808e9859aff23bad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KSXHLQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBHhyQ8Nve4gdOsboqzDEBhuopGzzAjWmCAImlPswjoKAiEA8pq4ddHT10lIl%2FxDd2X1xZBlEM6CcWG908FkRycjOsMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLXRQT6MDa7fnt0U1CrcA%2Fdv9oFq%2F55FbTw5bIbopBGcv2M1H4bQUwMHiKiF3EvWsPyfdW%2FiPWGBxfwQ%2BmUZAMgqZYpo39ZJNkompRBVGDcYAg347LwRqBmYrkZ3tnBRoSBKBjctOGioIcCSPDMGDiQ0ATVQy3wl4rLW8ZGvxDZBQG00QpgCgLuclEtSjrtQbzi%2BKWZxOhgWGpxJocmwKcWChdzkgJ9PXl1tKQir%2BKqn65uNGK6d2l1avbZoZLBU1REa20qNPSpd%2BBiD9pnlw0GNIptSGbwF340WLjIQAooTp5LE%2BfjVVW1HDo%2BXFXnzD4oS%2F6h0UobXMf1UIrh5LmBPhpy8vkw0C%2BAzCJlQd7g5GOjkUJqv3vwy6WQpAtxdQioXxJCUVSGT47MlYYERZZLGpQiKGZAevFoc31nx%2BEj1IfrCSKa6v1U5ZbPNrijyguT5NUIHDWP%2Bw0j3LiabzDARe2lHiviGQaP6fyNpFYSdCcpdxxRYNBY%2FRVJpaTbXQ4pwFCsJxjKWK0qdJliNavvkuivwKQo306oU5soIXPK%2BuGNVPG9z23%2FjtJGug15FsJ3koKC8Cz4MayILx6tAQhTFWy656AjrGhWExzb0V13S1sxuiUoIZOqLFF81V5iQ%2BvqCtAYFFgyjJStKMO6s%2B8EGOqUBMwr8TFHuJBC8IsdjvqzPu534MRhkXsUOQO4ZHVxfQtytnRSMjrZQmeAoZAgKpDOyWX1j%2FtFfgDSZp9QsebT8fdFOn0DGajW2fUjH2gykKY3NPTXmvywxFAmNfdNHr8E3q9K6ScTxeZEaFP9CVTM40zloHYmd8SuLg9z%2FJNdxlutqJRM4cV7h5Pyep8hY4dW1o1sKq3%2B%2BTdFai2aAADurDE8UHG6Q&X-Amz-Signature=503e3ab249f6d2ccc38bfe05c1768a9d15a44aba789138864074284580ca4cf1&X-Amz-SignedHeaders=host&x-id=GetObject)
