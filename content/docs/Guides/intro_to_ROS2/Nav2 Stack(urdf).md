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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFBPN3B%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLKalEkJ%2FjDy40pO3eR2vspdrQCHpUHM6WAgnA8HA93AIhAMz6ypWxi2qhAwY9W6EZ2bL%2Bbtip9nzIEc3SQp%2F2IIPwKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZT6Ob63ypHPThd5sq3AMjwZqQmQx9d6Z5dh5AWJRqL5XW7io%2FtoO%2FkX1kV2uxb1ycm8tUixvKt0Nf8xTLyPJllimfr5t7EKOE%2BNpc%2B38danAp93RTfK2EQKb0tTGKXHwnOhrW1wDNMFYh%2FktHfPZu23JnZooumw86SbCUxY2nE6ciwA1bWbB4WuVpkwTT6EUpEdDNERjQwNAd00pDtNiKKrO0wPHrxj%2FnhTF3b%2By0Z3PfpMaXXfdFVMWsdBmITVl1fB0GEcoETDe8kXylZnoP0ppEbESqofRf8MpQbyswVziJTP2RuS8bcKctNcjxVOenFGNIv6o80zrFvAic0BCYvAAf0f5l8A%2FwClh3iyOim5wm2pUdbGbrdIzEGpzoQQfplUpjmToQ4PrQOO0kP2SIZUzyzYdvk7bRb9%2B%2BZSDtDEIS69vaPhDzC02BhWIn92KYq%2B%2B1Fbad%2BNRcwes1hcZQOIOP51pdL5LOfToM1avv00CnghY5Gubjq0k9iXKJltnzDHWd%2FarSeMhfbHPHJQUVS3X3YhPmaKsK%2FiOHIvMU29d67g%2B3y5m7NdYRJP2K7l8XDTy8JLs4n3NA6GL2dWS8sXsoUVn8z2a7bQLq2oIVoF4ugVRcoGbvDxVL6xY%2Bk4Dsm5I98yHal4PvJzCu0s%2FCBjqkASat5JB37D13JI6WnTaqq5FlCQjTEXbDNr3eele74REoopc3gvCZt9K2Jt9LXz7qNmy%2F9%2BgL18a%2FDmGDGAjc%2FyhmDjof4UR5dOIucT3uOBJOnoee8qoor3UDoINPfkEfUneYi%2Bl%2BvnjX6w9AtgRBh1f36wrHtVyM8I0q6ICvrePVLC5UDq4CSHa80Sgaa9kuPV8bfV5hmtN2YOo48%2FfJVOxNa2iN&X-Amz-Signature=f116963793cf393482d367dbea44fc54e7064e2b3a035c69e43d38ee8e7fe9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFBPN3B%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLKalEkJ%2FjDy40pO3eR2vspdrQCHpUHM6WAgnA8HA93AIhAMz6ypWxi2qhAwY9W6EZ2bL%2Bbtip9nzIEc3SQp%2F2IIPwKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZT6Ob63ypHPThd5sq3AMjwZqQmQx9d6Z5dh5AWJRqL5XW7io%2FtoO%2FkX1kV2uxb1ycm8tUixvKt0Nf8xTLyPJllimfr5t7EKOE%2BNpc%2B38danAp93RTfK2EQKb0tTGKXHwnOhrW1wDNMFYh%2FktHfPZu23JnZooumw86SbCUxY2nE6ciwA1bWbB4WuVpkwTT6EUpEdDNERjQwNAd00pDtNiKKrO0wPHrxj%2FnhTF3b%2By0Z3PfpMaXXfdFVMWsdBmITVl1fB0GEcoETDe8kXylZnoP0ppEbESqofRf8MpQbyswVziJTP2RuS8bcKctNcjxVOenFGNIv6o80zrFvAic0BCYvAAf0f5l8A%2FwClh3iyOim5wm2pUdbGbrdIzEGpzoQQfplUpjmToQ4PrQOO0kP2SIZUzyzYdvk7bRb9%2B%2BZSDtDEIS69vaPhDzC02BhWIn92KYq%2B%2B1Fbad%2BNRcwes1hcZQOIOP51pdL5LOfToM1avv00CnghY5Gubjq0k9iXKJltnzDHWd%2FarSeMhfbHPHJQUVS3X3YhPmaKsK%2FiOHIvMU29d67g%2B3y5m7NdYRJP2K7l8XDTy8JLs4n3NA6GL2dWS8sXsoUVn8z2a7bQLq2oIVoF4ugVRcoGbvDxVL6xY%2Bk4Dsm5I98yHal4PvJzCu0s%2FCBjqkASat5JB37D13JI6WnTaqq5FlCQjTEXbDNr3eele74REoopc3gvCZt9K2Jt9LXz7qNmy%2F9%2BgL18a%2FDmGDGAjc%2FyhmDjof4UR5dOIucT3uOBJOnoee8qoor3UDoINPfkEfUneYi%2Bl%2BvnjX6w9AtgRBh1f36wrHtVyM8I0q6ICvrePVLC5UDq4CSHa80Sgaa9kuPV8bfV5hmtN2YOo48%2FfJVOxNa2iN&X-Amz-Signature=32418ebefcda2f5ae5400336cfe0fea089cc004c3901b281cb16580bd94a84c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFBPN3B%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLKalEkJ%2FjDy40pO3eR2vspdrQCHpUHM6WAgnA8HA93AIhAMz6ypWxi2qhAwY9W6EZ2bL%2Bbtip9nzIEc3SQp%2F2IIPwKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZT6Ob63ypHPThd5sq3AMjwZqQmQx9d6Z5dh5AWJRqL5XW7io%2FtoO%2FkX1kV2uxb1ycm8tUixvKt0Nf8xTLyPJllimfr5t7EKOE%2BNpc%2B38danAp93RTfK2EQKb0tTGKXHwnOhrW1wDNMFYh%2FktHfPZu23JnZooumw86SbCUxY2nE6ciwA1bWbB4WuVpkwTT6EUpEdDNERjQwNAd00pDtNiKKrO0wPHrxj%2FnhTF3b%2By0Z3PfpMaXXfdFVMWsdBmITVl1fB0GEcoETDe8kXylZnoP0ppEbESqofRf8MpQbyswVziJTP2RuS8bcKctNcjxVOenFGNIv6o80zrFvAic0BCYvAAf0f5l8A%2FwClh3iyOim5wm2pUdbGbrdIzEGpzoQQfplUpjmToQ4PrQOO0kP2SIZUzyzYdvk7bRb9%2B%2BZSDtDEIS69vaPhDzC02BhWIn92KYq%2B%2B1Fbad%2BNRcwes1hcZQOIOP51pdL5LOfToM1avv00CnghY5Gubjq0k9iXKJltnzDHWd%2FarSeMhfbHPHJQUVS3X3YhPmaKsK%2FiOHIvMU29d67g%2B3y5m7NdYRJP2K7l8XDTy8JLs4n3NA6GL2dWS8sXsoUVn8z2a7bQLq2oIVoF4ugVRcoGbvDxVL6xY%2Bk4Dsm5I98yHal4PvJzCu0s%2FCBjqkASat5JB37D13JI6WnTaqq5FlCQjTEXbDNr3eele74REoopc3gvCZt9K2Jt9LXz7qNmy%2F9%2BgL18a%2FDmGDGAjc%2FyhmDjof4UR5dOIucT3uOBJOnoee8qoor3UDoINPfkEfUneYi%2Bl%2BvnjX6w9AtgRBh1f36wrHtVyM8I0q6ICvrePVLC5UDq4CSHa80Sgaa9kuPV8bfV5hmtN2YOo48%2FfJVOxNa2iN&X-Amz-Signature=23e2fd50d4c8e75e6fc840a0934ac8ed37927fe1557705fb6d4e043ab3932471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFBPN3B%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLKalEkJ%2FjDy40pO3eR2vspdrQCHpUHM6WAgnA8HA93AIhAMz6ypWxi2qhAwY9W6EZ2bL%2Bbtip9nzIEc3SQp%2F2IIPwKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZT6Ob63ypHPThd5sq3AMjwZqQmQx9d6Z5dh5AWJRqL5XW7io%2FtoO%2FkX1kV2uxb1ycm8tUixvKt0Nf8xTLyPJllimfr5t7EKOE%2BNpc%2B38danAp93RTfK2EQKb0tTGKXHwnOhrW1wDNMFYh%2FktHfPZu23JnZooumw86SbCUxY2nE6ciwA1bWbB4WuVpkwTT6EUpEdDNERjQwNAd00pDtNiKKrO0wPHrxj%2FnhTF3b%2By0Z3PfpMaXXfdFVMWsdBmITVl1fB0GEcoETDe8kXylZnoP0ppEbESqofRf8MpQbyswVziJTP2RuS8bcKctNcjxVOenFGNIv6o80zrFvAic0BCYvAAf0f5l8A%2FwClh3iyOim5wm2pUdbGbrdIzEGpzoQQfplUpjmToQ4PrQOO0kP2SIZUzyzYdvk7bRb9%2B%2BZSDtDEIS69vaPhDzC02BhWIn92KYq%2B%2B1Fbad%2BNRcwes1hcZQOIOP51pdL5LOfToM1avv00CnghY5Gubjq0k9iXKJltnzDHWd%2FarSeMhfbHPHJQUVS3X3YhPmaKsK%2FiOHIvMU29d67g%2B3y5m7NdYRJP2K7l8XDTy8JLs4n3NA6GL2dWS8sXsoUVn8z2a7bQLq2oIVoF4ugVRcoGbvDxVL6xY%2Bk4Dsm5I98yHal4PvJzCu0s%2FCBjqkASat5JB37D13JI6WnTaqq5FlCQjTEXbDNr3eele74REoopc3gvCZt9K2Jt9LXz7qNmy%2F9%2BgL18a%2FDmGDGAjc%2FyhmDjof4UR5dOIucT3uOBJOnoee8qoor3UDoINPfkEfUneYi%2Bl%2BvnjX6w9AtgRBh1f36wrHtVyM8I0q6ICvrePVLC5UDq4CSHa80Sgaa9kuPV8bfV5hmtN2YOo48%2FfJVOxNa2iN&X-Amz-Signature=7093891d3bc3ee3faf1f26379e0b22c6cd428e3e2d5baa9b7108f62790695aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFBPN3B%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLKalEkJ%2FjDy40pO3eR2vspdrQCHpUHM6WAgnA8HA93AIhAMz6ypWxi2qhAwY9W6EZ2bL%2Bbtip9nzIEc3SQp%2F2IIPwKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZT6Ob63ypHPThd5sq3AMjwZqQmQx9d6Z5dh5AWJRqL5XW7io%2FtoO%2FkX1kV2uxb1ycm8tUixvKt0Nf8xTLyPJllimfr5t7EKOE%2BNpc%2B38danAp93RTfK2EQKb0tTGKXHwnOhrW1wDNMFYh%2FktHfPZu23JnZooumw86SbCUxY2nE6ciwA1bWbB4WuVpkwTT6EUpEdDNERjQwNAd00pDtNiKKrO0wPHrxj%2FnhTF3b%2By0Z3PfpMaXXfdFVMWsdBmITVl1fB0GEcoETDe8kXylZnoP0ppEbESqofRf8MpQbyswVziJTP2RuS8bcKctNcjxVOenFGNIv6o80zrFvAic0BCYvAAf0f5l8A%2FwClh3iyOim5wm2pUdbGbrdIzEGpzoQQfplUpjmToQ4PrQOO0kP2SIZUzyzYdvk7bRb9%2B%2BZSDtDEIS69vaPhDzC02BhWIn92KYq%2B%2B1Fbad%2BNRcwes1hcZQOIOP51pdL5LOfToM1avv00CnghY5Gubjq0k9iXKJltnzDHWd%2FarSeMhfbHPHJQUVS3X3YhPmaKsK%2FiOHIvMU29d67g%2B3y5m7NdYRJP2K7l8XDTy8JLs4n3NA6GL2dWS8sXsoUVn8z2a7bQLq2oIVoF4ugVRcoGbvDxVL6xY%2Bk4Dsm5I98yHal4PvJzCu0s%2FCBjqkASat5JB37D13JI6WnTaqq5FlCQjTEXbDNr3eele74REoopc3gvCZt9K2Jt9LXz7qNmy%2F9%2BgL18a%2FDmGDGAjc%2FyhmDjof4UR5dOIucT3uOBJOnoee8qoor3UDoINPfkEfUneYi%2Bl%2BvnjX6w9AtgRBh1f36wrHtVyM8I0q6ICvrePVLC5UDq4CSHa80Sgaa9kuPV8bfV5hmtN2YOo48%2FfJVOxNa2iN&X-Amz-Signature=14983925898ff1bb8391d354fc20c1ba571e5127288c856725b51185ce8f6dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFBPN3B%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLKalEkJ%2FjDy40pO3eR2vspdrQCHpUHM6WAgnA8HA93AIhAMz6ypWxi2qhAwY9W6EZ2bL%2Bbtip9nzIEc3SQp%2F2IIPwKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZT6Ob63ypHPThd5sq3AMjwZqQmQx9d6Z5dh5AWJRqL5XW7io%2FtoO%2FkX1kV2uxb1ycm8tUixvKt0Nf8xTLyPJllimfr5t7EKOE%2BNpc%2B38danAp93RTfK2EQKb0tTGKXHwnOhrW1wDNMFYh%2FktHfPZu23JnZooumw86SbCUxY2nE6ciwA1bWbB4WuVpkwTT6EUpEdDNERjQwNAd00pDtNiKKrO0wPHrxj%2FnhTF3b%2By0Z3PfpMaXXfdFVMWsdBmITVl1fB0GEcoETDe8kXylZnoP0ppEbESqofRf8MpQbyswVziJTP2RuS8bcKctNcjxVOenFGNIv6o80zrFvAic0BCYvAAf0f5l8A%2FwClh3iyOim5wm2pUdbGbrdIzEGpzoQQfplUpjmToQ4PrQOO0kP2SIZUzyzYdvk7bRb9%2B%2BZSDtDEIS69vaPhDzC02BhWIn92KYq%2B%2B1Fbad%2BNRcwes1hcZQOIOP51pdL5LOfToM1avv00CnghY5Gubjq0k9iXKJltnzDHWd%2FarSeMhfbHPHJQUVS3X3YhPmaKsK%2FiOHIvMU29d67g%2B3y5m7NdYRJP2K7l8XDTy8JLs4n3NA6GL2dWS8sXsoUVn8z2a7bQLq2oIVoF4ugVRcoGbvDxVL6xY%2Bk4Dsm5I98yHal4PvJzCu0s%2FCBjqkASat5JB37D13JI6WnTaqq5FlCQjTEXbDNr3eele74REoopc3gvCZt9K2Jt9LXz7qNmy%2F9%2BgL18a%2FDmGDGAjc%2FyhmDjof4UR5dOIucT3uOBJOnoee8qoor3UDoINPfkEfUneYi%2Bl%2BvnjX6w9AtgRBh1f36wrHtVyM8I0q6ICvrePVLC5UDq4CSHa80Sgaa9kuPV8bfV5hmtN2YOo48%2FfJVOxNa2iN&X-Amz-Signature=a5c087600a7cf0f0f159c1cf470b30faf6639cc9fa25c7a8f00a0a959d86a0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
