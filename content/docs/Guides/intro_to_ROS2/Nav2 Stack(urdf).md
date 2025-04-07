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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEC4QHP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0hcInhPRg%2FetNGJNZtAIn4Nh%2Bj2uDQg1FHlWmzoleBAiEA%2BmGQUx1n9zQg9mODXDHjIhNRjNK09cGGQAKwC90E7XYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPLJZZuCS4BeRQ6AdCrcA8pCoe0MtNtowsX8q3l3knAKquPkjcqK3yzmo1IDSA1Yj%2F6RU6l0LQ9Enr%2Fxc2dfkLUxjjEq6inVe1jE5sihpry%2BU2Hgkdod%2FwdfpETz6YFHc%2Be89JnmJ4LDf1tbs3NMQCuGen7Zhs7yjdu7o9S3JVRJoO91NFIfV46iNKij2cFbkELtSSgnnNgn4vSI4X6S0mMffYln%2FBNL6KC1je7yXqnByWUv7tgaIhX5VklSAOr0vS5VGgMRS6riZIJayyLAE3%2B2lv2yCLgkjtCwH260ibjCe6E0g5O6cM0YQYT1NT4%2BWxodFUOdl1qPpyNE4wVxX8RtQyp6lIa%2Fq2iwvsb%2FmSAir%2Box50qwVStgtVkIoKW6E6Pa3tpSaLePPtWjXVhsjyZBFdajKfppfcwfH%2BPX0CLx2%2BPfr%2BUCPQDZY0DvcUFyGDfRSoXa35yb%2BMTavGsbEkgzkrl8erP%2B2xIW7xGiyBiY7AwE%2FZ%2FrKur6kSayMSYs0P7gQ8jiRYhpIVv1uPKrVqyQJOlpgs1m65VAmixK3WNBJlvTG29P31YIBxw4gJJ1Ttg9yOgubcCOBDfbmvf6ruW2J6CzXdiEx9qY5vmiZeCV1gycgQhZQ9xM1TQSOVVhxTeLd%2FGv0k1w5h7SMPfszr8GOqUBkUlB4WH2ASDxrq%2BYtxEzQ0Ox2JluTWfYzVmOPTRGlLaAyrsmU1oR644j6aB%2B2LyN%2BvMAiHR%2B9hgVIFh35rjvyqzY14TEgkj6Tsqx9qcUKxguQxUb6wVUx6OegJnLREpnqdIDvMgSd4%2BnZdEtnX5Rv9PAs3yMZxWPmoxqkw822b40OYzQPS6whvUpDbrDIZ8t4t0I17DrUuekY%2BU41afLJLNlkx9W&X-Amz-Signature=b47227320ca3f9d8bd7d222afeef9c94821bab560c98e96f0499f7dec8c41918&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEC4QHP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0hcInhPRg%2FetNGJNZtAIn4Nh%2Bj2uDQg1FHlWmzoleBAiEA%2BmGQUx1n9zQg9mODXDHjIhNRjNK09cGGQAKwC90E7XYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPLJZZuCS4BeRQ6AdCrcA8pCoe0MtNtowsX8q3l3knAKquPkjcqK3yzmo1IDSA1Yj%2F6RU6l0LQ9Enr%2Fxc2dfkLUxjjEq6inVe1jE5sihpry%2BU2Hgkdod%2FwdfpETz6YFHc%2Be89JnmJ4LDf1tbs3NMQCuGen7Zhs7yjdu7o9S3JVRJoO91NFIfV46iNKij2cFbkELtSSgnnNgn4vSI4X6S0mMffYln%2FBNL6KC1je7yXqnByWUv7tgaIhX5VklSAOr0vS5VGgMRS6riZIJayyLAE3%2B2lv2yCLgkjtCwH260ibjCe6E0g5O6cM0YQYT1NT4%2BWxodFUOdl1qPpyNE4wVxX8RtQyp6lIa%2Fq2iwvsb%2FmSAir%2Box50qwVStgtVkIoKW6E6Pa3tpSaLePPtWjXVhsjyZBFdajKfppfcwfH%2BPX0CLx2%2BPfr%2BUCPQDZY0DvcUFyGDfRSoXa35yb%2BMTavGsbEkgzkrl8erP%2B2xIW7xGiyBiY7AwE%2FZ%2FrKur6kSayMSYs0P7gQ8jiRYhpIVv1uPKrVqyQJOlpgs1m65VAmixK3WNBJlvTG29P31YIBxw4gJJ1Ttg9yOgubcCOBDfbmvf6ruW2J6CzXdiEx9qY5vmiZeCV1gycgQhZQ9xM1TQSOVVhxTeLd%2FGv0k1w5h7SMPfszr8GOqUBkUlB4WH2ASDxrq%2BYtxEzQ0Ox2JluTWfYzVmOPTRGlLaAyrsmU1oR644j6aB%2B2LyN%2BvMAiHR%2B9hgVIFh35rjvyqzY14TEgkj6Tsqx9qcUKxguQxUb6wVUx6OegJnLREpnqdIDvMgSd4%2BnZdEtnX5Rv9PAs3yMZxWPmoxqkw822b40OYzQPS6whvUpDbrDIZ8t4t0I17DrUuekY%2BU41afLJLNlkx9W&X-Amz-Signature=432360c51b530589582ab2d4b30c1660f84431d53ae65954391c9e19b3af7766&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEC4QHP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0hcInhPRg%2FetNGJNZtAIn4Nh%2Bj2uDQg1FHlWmzoleBAiEA%2BmGQUx1n9zQg9mODXDHjIhNRjNK09cGGQAKwC90E7XYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPLJZZuCS4BeRQ6AdCrcA8pCoe0MtNtowsX8q3l3knAKquPkjcqK3yzmo1IDSA1Yj%2F6RU6l0LQ9Enr%2Fxc2dfkLUxjjEq6inVe1jE5sihpry%2BU2Hgkdod%2FwdfpETz6YFHc%2Be89JnmJ4LDf1tbs3NMQCuGen7Zhs7yjdu7o9S3JVRJoO91NFIfV46iNKij2cFbkELtSSgnnNgn4vSI4X6S0mMffYln%2FBNL6KC1je7yXqnByWUv7tgaIhX5VklSAOr0vS5VGgMRS6riZIJayyLAE3%2B2lv2yCLgkjtCwH260ibjCe6E0g5O6cM0YQYT1NT4%2BWxodFUOdl1qPpyNE4wVxX8RtQyp6lIa%2Fq2iwvsb%2FmSAir%2Box50qwVStgtVkIoKW6E6Pa3tpSaLePPtWjXVhsjyZBFdajKfppfcwfH%2BPX0CLx2%2BPfr%2BUCPQDZY0DvcUFyGDfRSoXa35yb%2BMTavGsbEkgzkrl8erP%2B2xIW7xGiyBiY7AwE%2FZ%2FrKur6kSayMSYs0P7gQ8jiRYhpIVv1uPKrVqyQJOlpgs1m65VAmixK3WNBJlvTG29P31YIBxw4gJJ1Ttg9yOgubcCOBDfbmvf6ruW2J6CzXdiEx9qY5vmiZeCV1gycgQhZQ9xM1TQSOVVhxTeLd%2FGv0k1w5h7SMPfszr8GOqUBkUlB4WH2ASDxrq%2BYtxEzQ0Ox2JluTWfYzVmOPTRGlLaAyrsmU1oR644j6aB%2B2LyN%2BvMAiHR%2B9hgVIFh35rjvyqzY14TEgkj6Tsqx9qcUKxguQxUb6wVUx6OegJnLREpnqdIDvMgSd4%2BnZdEtnX5Rv9PAs3yMZxWPmoxqkw822b40OYzQPS6whvUpDbrDIZ8t4t0I17DrUuekY%2BU41afLJLNlkx9W&X-Amz-Signature=9acd8313a16802541faf09d1689d1fdc468704ff8d15de84199556a58d183ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEC4QHP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0hcInhPRg%2FetNGJNZtAIn4Nh%2Bj2uDQg1FHlWmzoleBAiEA%2BmGQUx1n9zQg9mODXDHjIhNRjNK09cGGQAKwC90E7XYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPLJZZuCS4BeRQ6AdCrcA8pCoe0MtNtowsX8q3l3knAKquPkjcqK3yzmo1IDSA1Yj%2F6RU6l0LQ9Enr%2Fxc2dfkLUxjjEq6inVe1jE5sihpry%2BU2Hgkdod%2FwdfpETz6YFHc%2Be89JnmJ4LDf1tbs3NMQCuGen7Zhs7yjdu7o9S3JVRJoO91NFIfV46iNKij2cFbkELtSSgnnNgn4vSI4X6S0mMffYln%2FBNL6KC1je7yXqnByWUv7tgaIhX5VklSAOr0vS5VGgMRS6riZIJayyLAE3%2B2lv2yCLgkjtCwH260ibjCe6E0g5O6cM0YQYT1NT4%2BWxodFUOdl1qPpyNE4wVxX8RtQyp6lIa%2Fq2iwvsb%2FmSAir%2Box50qwVStgtVkIoKW6E6Pa3tpSaLePPtWjXVhsjyZBFdajKfppfcwfH%2BPX0CLx2%2BPfr%2BUCPQDZY0DvcUFyGDfRSoXa35yb%2BMTavGsbEkgzkrl8erP%2B2xIW7xGiyBiY7AwE%2FZ%2FrKur6kSayMSYs0P7gQ8jiRYhpIVv1uPKrVqyQJOlpgs1m65VAmixK3WNBJlvTG29P31YIBxw4gJJ1Ttg9yOgubcCOBDfbmvf6ruW2J6CzXdiEx9qY5vmiZeCV1gycgQhZQ9xM1TQSOVVhxTeLd%2FGv0k1w5h7SMPfszr8GOqUBkUlB4WH2ASDxrq%2BYtxEzQ0Ox2JluTWfYzVmOPTRGlLaAyrsmU1oR644j6aB%2B2LyN%2BvMAiHR%2B9hgVIFh35rjvyqzY14TEgkj6Tsqx9qcUKxguQxUb6wVUx6OegJnLREpnqdIDvMgSd4%2BnZdEtnX5Rv9PAs3yMZxWPmoxqkw822b40OYzQPS6whvUpDbrDIZ8t4t0I17DrUuekY%2BU41afLJLNlkx9W&X-Amz-Signature=af1571d153dca3d713b5fa19325bcfc6ba39386b9aa005751b59f1b809faf6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEC4QHP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0hcInhPRg%2FetNGJNZtAIn4Nh%2Bj2uDQg1FHlWmzoleBAiEA%2BmGQUx1n9zQg9mODXDHjIhNRjNK09cGGQAKwC90E7XYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPLJZZuCS4BeRQ6AdCrcA8pCoe0MtNtowsX8q3l3knAKquPkjcqK3yzmo1IDSA1Yj%2F6RU6l0LQ9Enr%2Fxc2dfkLUxjjEq6inVe1jE5sihpry%2BU2Hgkdod%2FwdfpETz6YFHc%2Be89JnmJ4LDf1tbs3NMQCuGen7Zhs7yjdu7o9S3JVRJoO91NFIfV46iNKij2cFbkELtSSgnnNgn4vSI4X6S0mMffYln%2FBNL6KC1je7yXqnByWUv7tgaIhX5VklSAOr0vS5VGgMRS6riZIJayyLAE3%2B2lv2yCLgkjtCwH260ibjCe6E0g5O6cM0YQYT1NT4%2BWxodFUOdl1qPpyNE4wVxX8RtQyp6lIa%2Fq2iwvsb%2FmSAir%2Box50qwVStgtVkIoKW6E6Pa3tpSaLePPtWjXVhsjyZBFdajKfppfcwfH%2BPX0CLx2%2BPfr%2BUCPQDZY0DvcUFyGDfRSoXa35yb%2BMTavGsbEkgzkrl8erP%2B2xIW7xGiyBiY7AwE%2FZ%2FrKur6kSayMSYs0P7gQ8jiRYhpIVv1uPKrVqyQJOlpgs1m65VAmixK3WNBJlvTG29P31YIBxw4gJJ1Ttg9yOgubcCOBDfbmvf6ruW2J6CzXdiEx9qY5vmiZeCV1gycgQhZQ9xM1TQSOVVhxTeLd%2FGv0k1w5h7SMPfszr8GOqUBkUlB4WH2ASDxrq%2BYtxEzQ0Ox2JluTWfYzVmOPTRGlLaAyrsmU1oR644j6aB%2B2LyN%2BvMAiHR%2B9hgVIFh35rjvyqzY14TEgkj6Tsqx9qcUKxguQxUb6wVUx6OegJnLREpnqdIDvMgSd4%2BnZdEtnX5Rv9PAs3yMZxWPmoxqkw822b40OYzQPS6whvUpDbrDIZ8t4t0I17DrUuekY%2BU41afLJLNlkx9W&X-Amz-Signature=6d649896c8929b99a8c53dd0ca3396421a5b1c2026fbd4417ad07bd5c843d6c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEC4QHP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0hcInhPRg%2FetNGJNZtAIn4Nh%2Bj2uDQg1FHlWmzoleBAiEA%2BmGQUx1n9zQg9mODXDHjIhNRjNK09cGGQAKwC90E7XYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPLJZZuCS4BeRQ6AdCrcA8pCoe0MtNtowsX8q3l3knAKquPkjcqK3yzmo1IDSA1Yj%2F6RU6l0LQ9Enr%2Fxc2dfkLUxjjEq6inVe1jE5sihpry%2BU2Hgkdod%2FwdfpETz6YFHc%2Be89JnmJ4LDf1tbs3NMQCuGen7Zhs7yjdu7o9S3JVRJoO91NFIfV46iNKij2cFbkELtSSgnnNgn4vSI4X6S0mMffYln%2FBNL6KC1je7yXqnByWUv7tgaIhX5VklSAOr0vS5VGgMRS6riZIJayyLAE3%2B2lv2yCLgkjtCwH260ibjCe6E0g5O6cM0YQYT1NT4%2BWxodFUOdl1qPpyNE4wVxX8RtQyp6lIa%2Fq2iwvsb%2FmSAir%2Box50qwVStgtVkIoKW6E6Pa3tpSaLePPtWjXVhsjyZBFdajKfppfcwfH%2BPX0CLx2%2BPfr%2BUCPQDZY0DvcUFyGDfRSoXa35yb%2BMTavGsbEkgzkrl8erP%2B2xIW7xGiyBiY7AwE%2FZ%2FrKur6kSayMSYs0P7gQ8jiRYhpIVv1uPKrVqyQJOlpgs1m65VAmixK3WNBJlvTG29P31YIBxw4gJJ1Ttg9yOgubcCOBDfbmvf6ruW2J6CzXdiEx9qY5vmiZeCV1gycgQhZQ9xM1TQSOVVhxTeLd%2FGv0k1w5h7SMPfszr8GOqUBkUlB4WH2ASDxrq%2BYtxEzQ0Ox2JluTWfYzVmOPTRGlLaAyrsmU1oR644j6aB%2B2LyN%2BvMAiHR%2B9hgVIFh35rjvyqzY14TEgkj6Tsqx9qcUKxguQxUb6wVUx6OegJnLREpnqdIDvMgSd4%2BnZdEtnX5Rv9PAs3yMZxWPmoxqkw822b40OYzQPS6whvUpDbrDIZ8t4t0I17DrUuekY%2BU41afLJLNlkx9W&X-Amz-Signature=165b4d80498aa13830a05b0ee95ed7b0f475b22855acf87f1c4e2b5221087a48&X-Amz-SignedHeaders=host&x-id=GetObject)
