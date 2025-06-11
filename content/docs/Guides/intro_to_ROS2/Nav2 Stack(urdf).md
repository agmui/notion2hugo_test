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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6OIRI6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2SLY9vx084upQNkk%2F6oY%2BvzDcFIOjtY3lJ4q7zhklrAiBK6z1BAOse2f2y6uqg2TJbCCokxYB4xkIVk9LyRp9%2F%2FiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXX393c05H3ckNFRBKtwDlkodkUah4JCDpAJNKO%2Faw1k98BiOyIsyVxu0YMkLGE%2B%2FreU0bPbdHL6kee4t6iSsuiw5YtqB3I4Ugn%2B9UnLsePxZALBsI5gZ5IJHuGx72w2OxQwwW9DkWpyO8YQTUwkxAjkIUHZtqnsex%2BhT6%2BmvZWlI%2BcickxCt7okMWLnKY%2F%2FDrkidH3Hp1pGC8ntP9lb5RCabX%2BSraaT%2FXQRFkUv0adV9Mvjaz%2B%2BlMoBbhLaMyrvUpIrGVHWKN5lGEppJLCQFgfeWMEiqq%2FfWxXf8kXXUGIP0uUpr%2FziIha18r%2BnLS6PnxnPQ0KF%2FDJL729MlmjMz5Ong5eTnTVn2XrjdzziWxdjl4asoqk46QKaHwyLF0skk0IRPWv%2Fk21BpWMaxsMAcVkh2ZsNx1k%2FuKSCAVTM6dMLrpFipkrOiB6LckqIkC4y561PcZZ3j2wjoLYyZRVXzZaiciwoa4MCKzi6UNfJaj6bi7oodt%2F4RdDDYN6iBxE%2BkJeqs6DlTV5WiCoFP4xwaz8d61mKk3jrbOh7%2FroBnh6PKwex377iICtdauNfwUpmnLzZNp6U7NTUUR%2FdMUOvnDr38sQtVk7tBQ2b7JNxRgI0ZCsPmZJXZ%2FutebBNDWxzjKOqz14wVZqKTp70wkualwgY6pgHGzrA3LX4wQYkWvxLJwUjLK2SAVPPV1%2BeurjeIBxwXuu6d7xZC1nnD2xpir8dBDWumbnYpMA4Aq1%2Bt2E9OChm6ayTp8OxVgrNLGh3QCHO9H9%2FY%2Fl8ab2Q98VJeDVaVfgc2q6Rp%2BGEINg8DRPT1HphaX7wLoYrUGotEiTw5RLtwhLeC4ZqLxEyuum9qnG6NHMe95dzKvsx6dpIsI4BYzwr9YG0oZxVN&X-Amz-Signature=ce491e5d70caf768c67083d476d775dbe470762ec19e6323e371421a633642ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6OIRI6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2SLY9vx084upQNkk%2F6oY%2BvzDcFIOjtY3lJ4q7zhklrAiBK6z1BAOse2f2y6uqg2TJbCCokxYB4xkIVk9LyRp9%2F%2FiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXX393c05H3ckNFRBKtwDlkodkUah4JCDpAJNKO%2Faw1k98BiOyIsyVxu0YMkLGE%2B%2FreU0bPbdHL6kee4t6iSsuiw5YtqB3I4Ugn%2B9UnLsePxZALBsI5gZ5IJHuGx72w2OxQwwW9DkWpyO8YQTUwkxAjkIUHZtqnsex%2BhT6%2BmvZWlI%2BcickxCt7okMWLnKY%2F%2FDrkidH3Hp1pGC8ntP9lb5RCabX%2BSraaT%2FXQRFkUv0adV9Mvjaz%2B%2BlMoBbhLaMyrvUpIrGVHWKN5lGEppJLCQFgfeWMEiqq%2FfWxXf8kXXUGIP0uUpr%2FziIha18r%2BnLS6PnxnPQ0KF%2FDJL729MlmjMz5Ong5eTnTVn2XrjdzziWxdjl4asoqk46QKaHwyLF0skk0IRPWv%2Fk21BpWMaxsMAcVkh2ZsNx1k%2FuKSCAVTM6dMLrpFipkrOiB6LckqIkC4y561PcZZ3j2wjoLYyZRVXzZaiciwoa4MCKzi6UNfJaj6bi7oodt%2F4RdDDYN6iBxE%2BkJeqs6DlTV5WiCoFP4xwaz8d61mKk3jrbOh7%2FroBnh6PKwex377iICtdauNfwUpmnLzZNp6U7NTUUR%2FdMUOvnDr38sQtVk7tBQ2b7JNxRgI0ZCsPmZJXZ%2FutebBNDWxzjKOqz14wVZqKTp70wkualwgY6pgHGzrA3LX4wQYkWvxLJwUjLK2SAVPPV1%2BeurjeIBxwXuu6d7xZC1nnD2xpir8dBDWumbnYpMA4Aq1%2Bt2E9OChm6ayTp8OxVgrNLGh3QCHO9H9%2FY%2Fl8ab2Q98VJeDVaVfgc2q6Rp%2BGEINg8DRPT1HphaX7wLoYrUGotEiTw5RLtwhLeC4ZqLxEyuum9qnG6NHMe95dzKvsx6dpIsI4BYzwr9YG0oZxVN&X-Amz-Signature=e414ed0471abf412508eb1d2fa832aa78e7471cff9eae641c9402f9ce126d7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6OIRI6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2SLY9vx084upQNkk%2F6oY%2BvzDcFIOjtY3lJ4q7zhklrAiBK6z1BAOse2f2y6uqg2TJbCCokxYB4xkIVk9LyRp9%2F%2FiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXX393c05H3ckNFRBKtwDlkodkUah4JCDpAJNKO%2Faw1k98BiOyIsyVxu0YMkLGE%2B%2FreU0bPbdHL6kee4t6iSsuiw5YtqB3I4Ugn%2B9UnLsePxZALBsI5gZ5IJHuGx72w2OxQwwW9DkWpyO8YQTUwkxAjkIUHZtqnsex%2BhT6%2BmvZWlI%2BcickxCt7okMWLnKY%2F%2FDrkidH3Hp1pGC8ntP9lb5RCabX%2BSraaT%2FXQRFkUv0adV9Mvjaz%2B%2BlMoBbhLaMyrvUpIrGVHWKN5lGEppJLCQFgfeWMEiqq%2FfWxXf8kXXUGIP0uUpr%2FziIha18r%2BnLS6PnxnPQ0KF%2FDJL729MlmjMz5Ong5eTnTVn2XrjdzziWxdjl4asoqk46QKaHwyLF0skk0IRPWv%2Fk21BpWMaxsMAcVkh2ZsNx1k%2FuKSCAVTM6dMLrpFipkrOiB6LckqIkC4y561PcZZ3j2wjoLYyZRVXzZaiciwoa4MCKzi6UNfJaj6bi7oodt%2F4RdDDYN6iBxE%2BkJeqs6DlTV5WiCoFP4xwaz8d61mKk3jrbOh7%2FroBnh6PKwex377iICtdauNfwUpmnLzZNp6U7NTUUR%2FdMUOvnDr38sQtVk7tBQ2b7JNxRgI0ZCsPmZJXZ%2FutebBNDWxzjKOqz14wVZqKTp70wkualwgY6pgHGzrA3LX4wQYkWvxLJwUjLK2SAVPPV1%2BeurjeIBxwXuu6d7xZC1nnD2xpir8dBDWumbnYpMA4Aq1%2Bt2E9OChm6ayTp8OxVgrNLGh3QCHO9H9%2FY%2Fl8ab2Q98VJeDVaVfgc2q6Rp%2BGEINg8DRPT1HphaX7wLoYrUGotEiTw5RLtwhLeC4ZqLxEyuum9qnG6NHMe95dzKvsx6dpIsI4BYzwr9YG0oZxVN&X-Amz-Signature=7d74f534f4f772496bd94de17bc1e237696ba8884715b35cb793e658e428b9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6OIRI6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2SLY9vx084upQNkk%2F6oY%2BvzDcFIOjtY3lJ4q7zhklrAiBK6z1BAOse2f2y6uqg2TJbCCokxYB4xkIVk9LyRp9%2F%2FiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXX393c05H3ckNFRBKtwDlkodkUah4JCDpAJNKO%2Faw1k98BiOyIsyVxu0YMkLGE%2B%2FreU0bPbdHL6kee4t6iSsuiw5YtqB3I4Ugn%2B9UnLsePxZALBsI5gZ5IJHuGx72w2OxQwwW9DkWpyO8YQTUwkxAjkIUHZtqnsex%2BhT6%2BmvZWlI%2BcickxCt7okMWLnKY%2F%2FDrkidH3Hp1pGC8ntP9lb5RCabX%2BSraaT%2FXQRFkUv0adV9Mvjaz%2B%2BlMoBbhLaMyrvUpIrGVHWKN5lGEppJLCQFgfeWMEiqq%2FfWxXf8kXXUGIP0uUpr%2FziIha18r%2BnLS6PnxnPQ0KF%2FDJL729MlmjMz5Ong5eTnTVn2XrjdzziWxdjl4asoqk46QKaHwyLF0skk0IRPWv%2Fk21BpWMaxsMAcVkh2ZsNx1k%2FuKSCAVTM6dMLrpFipkrOiB6LckqIkC4y561PcZZ3j2wjoLYyZRVXzZaiciwoa4MCKzi6UNfJaj6bi7oodt%2F4RdDDYN6iBxE%2BkJeqs6DlTV5WiCoFP4xwaz8d61mKk3jrbOh7%2FroBnh6PKwex377iICtdauNfwUpmnLzZNp6U7NTUUR%2FdMUOvnDr38sQtVk7tBQ2b7JNxRgI0ZCsPmZJXZ%2FutebBNDWxzjKOqz14wVZqKTp70wkualwgY6pgHGzrA3LX4wQYkWvxLJwUjLK2SAVPPV1%2BeurjeIBxwXuu6d7xZC1nnD2xpir8dBDWumbnYpMA4Aq1%2Bt2E9OChm6ayTp8OxVgrNLGh3QCHO9H9%2FY%2Fl8ab2Q98VJeDVaVfgc2q6Rp%2BGEINg8DRPT1HphaX7wLoYrUGotEiTw5RLtwhLeC4ZqLxEyuum9qnG6NHMe95dzKvsx6dpIsI4BYzwr9YG0oZxVN&X-Amz-Signature=cd46c8bfa444c59a62f429b1f1c9aff52aaae8df7e258db25da7354240177b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6OIRI6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2SLY9vx084upQNkk%2F6oY%2BvzDcFIOjtY3lJ4q7zhklrAiBK6z1BAOse2f2y6uqg2TJbCCokxYB4xkIVk9LyRp9%2F%2FiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXX393c05H3ckNFRBKtwDlkodkUah4JCDpAJNKO%2Faw1k98BiOyIsyVxu0YMkLGE%2B%2FreU0bPbdHL6kee4t6iSsuiw5YtqB3I4Ugn%2B9UnLsePxZALBsI5gZ5IJHuGx72w2OxQwwW9DkWpyO8YQTUwkxAjkIUHZtqnsex%2BhT6%2BmvZWlI%2BcickxCt7okMWLnKY%2F%2FDrkidH3Hp1pGC8ntP9lb5RCabX%2BSraaT%2FXQRFkUv0adV9Mvjaz%2B%2BlMoBbhLaMyrvUpIrGVHWKN5lGEppJLCQFgfeWMEiqq%2FfWxXf8kXXUGIP0uUpr%2FziIha18r%2BnLS6PnxnPQ0KF%2FDJL729MlmjMz5Ong5eTnTVn2XrjdzziWxdjl4asoqk46QKaHwyLF0skk0IRPWv%2Fk21BpWMaxsMAcVkh2ZsNx1k%2FuKSCAVTM6dMLrpFipkrOiB6LckqIkC4y561PcZZ3j2wjoLYyZRVXzZaiciwoa4MCKzi6UNfJaj6bi7oodt%2F4RdDDYN6iBxE%2BkJeqs6DlTV5WiCoFP4xwaz8d61mKk3jrbOh7%2FroBnh6PKwex377iICtdauNfwUpmnLzZNp6U7NTUUR%2FdMUOvnDr38sQtVk7tBQ2b7JNxRgI0ZCsPmZJXZ%2FutebBNDWxzjKOqz14wVZqKTp70wkualwgY6pgHGzrA3LX4wQYkWvxLJwUjLK2SAVPPV1%2BeurjeIBxwXuu6d7xZC1nnD2xpir8dBDWumbnYpMA4Aq1%2Bt2E9OChm6ayTp8OxVgrNLGh3QCHO9H9%2FY%2Fl8ab2Q98VJeDVaVfgc2q6Rp%2BGEINg8DRPT1HphaX7wLoYrUGotEiTw5RLtwhLeC4ZqLxEyuum9qnG6NHMe95dzKvsx6dpIsI4BYzwr9YG0oZxVN&X-Amz-Signature=b7a8006189fa151b42b1b787e8d9811a08838f86bd5866e69ec70abff6902b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6OIRI6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2SLY9vx084upQNkk%2F6oY%2BvzDcFIOjtY3lJ4q7zhklrAiBK6z1BAOse2f2y6uqg2TJbCCokxYB4xkIVk9LyRp9%2F%2FiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXX393c05H3ckNFRBKtwDlkodkUah4JCDpAJNKO%2Faw1k98BiOyIsyVxu0YMkLGE%2B%2FreU0bPbdHL6kee4t6iSsuiw5YtqB3I4Ugn%2B9UnLsePxZALBsI5gZ5IJHuGx72w2OxQwwW9DkWpyO8YQTUwkxAjkIUHZtqnsex%2BhT6%2BmvZWlI%2BcickxCt7okMWLnKY%2F%2FDrkidH3Hp1pGC8ntP9lb5RCabX%2BSraaT%2FXQRFkUv0adV9Mvjaz%2B%2BlMoBbhLaMyrvUpIrGVHWKN5lGEppJLCQFgfeWMEiqq%2FfWxXf8kXXUGIP0uUpr%2FziIha18r%2BnLS6PnxnPQ0KF%2FDJL729MlmjMz5Ong5eTnTVn2XrjdzziWxdjl4asoqk46QKaHwyLF0skk0IRPWv%2Fk21BpWMaxsMAcVkh2ZsNx1k%2FuKSCAVTM6dMLrpFipkrOiB6LckqIkC4y561PcZZ3j2wjoLYyZRVXzZaiciwoa4MCKzi6UNfJaj6bi7oodt%2F4RdDDYN6iBxE%2BkJeqs6DlTV5WiCoFP4xwaz8d61mKk3jrbOh7%2FroBnh6PKwex377iICtdauNfwUpmnLzZNp6U7NTUUR%2FdMUOvnDr38sQtVk7tBQ2b7JNxRgI0ZCsPmZJXZ%2FutebBNDWxzjKOqz14wVZqKTp70wkualwgY6pgHGzrA3LX4wQYkWvxLJwUjLK2SAVPPV1%2BeurjeIBxwXuu6d7xZC1nnD2xpir8dBDWumbnYpMA4Aq1%2Bt2E9OChm6ayTp8OxVgrNLGh3QCHO9H9%2FY%2Fl8ab2Q98VJeDVaVfgc2q6Rp%2BGEINg8DRPT1HphaX7wLoYrUGotEiTw5RLtwhLeC4ZqLxEyuum9qnG6NHMe95dzKvsx6dpIsI4BYzwr9YG0oZxVN&X-Amz-Signature=043fe5fd24ea8cb02252cdbfd2a315380679cd1ad9f368b18cc344b7f600f932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
