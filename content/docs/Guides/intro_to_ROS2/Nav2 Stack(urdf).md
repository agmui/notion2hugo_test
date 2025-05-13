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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXR73YI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC7NfTy1TXWB%2BkcdUtZ1HQKo3smsX%2FDtxteQh5SxfkdPgIhAJrGcytrR2J8uJOcIyMBMgkuqgLE8KSYJ%2B0w7RbsoYMkKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUnAHd8Q7sQ60sJYIq3ANSmLjwpJ4q2tb1zxFpE%2Fd6%2FBheXxpshJO%2B%2FYb3xDwAz78fzWP7sBiBZ6D3Vjqt7sGy4gk25x0kX3fi0BHq51YQkbQOSl%2B0HQf%2FF8i5ZSNYo6%2BsjBFm73n8%2Bqod4MMjQmvXPSShqIpROwQ6T4odzgRmn%2BhuCw%2BQC2CKMEtsjbciTpaGit3QKlKOfDWlpZYGIKnwFKEIr2O1ei%2Bg8YcPymE9mIje43XkEW5jTCiDbCBNgE56sFQSvPeyDflv3V%2BQB%2FH1yUuLVZ9l36cfqZQYTIHhlBfn7UEYHFrgtkX4G4Ksr2QMAdVvCzsC4Bq1wTL%2FNNH2P9cbPcetBWngAiqsbe0xvqGF7icRI4Xfdi0nKRA8jBK4lZQYwRIA%2FsRmjg%2FKUaVEjPkBHrkgykc0usESr3ijRM9Mn7L0SBYf4Il5FUw6IKfyF4L7ySpWUxxRMpWNj6Z%2ByjRwq0hZSu%2F4VNXEidDDLKLwpB07Ip8k7E5GjFYSbjnZBVQ%2FMPMWQG9IFWwjbpfXss1nRD6ZvB4h9%2B4afS8gRFyF67AYoIELcMK%2BH1JX%2BdWEmUxTrQxb1Lx6R1PZQ4CAbkTMMSpshnmQ%2BoaPaqnapSeiuHkDYY9yOrbnGl7nQAbCWCUAkCiH0ekPzTCi8ovBBjqkAWGyypdoSirR5gLGHodKoE2HW%2F%2FVEQ7g%2B6iKr7NOe9A6vsrIwvbdv4rhpwrVg%2Fg2ywObn0QSw0nMOtoKhg8ZaazK44qcfeusjqyAx2l2PLcl1gPAnj1x8s%2BAU8Pg2Uu8AM4AscMLdz%2FtByhZUxlT4xI54UrchfOmcJkc8PgkjxoUaKeTDO0Ifzv7KLEW0yfksiC5iYTUfU6qLLvY8QbkMBhNNh0j&X-Amz-Signature=eb927b26c8cb1512dadb8a48fd3a49d2769e2deb75aefc9364cfbc4915adc5ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXR73YI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC7NfTy1TXWB%2BkcdUtZ1HQKo3smsX%2FDtxteQh5SxfkdPgIhAJrGcytrR2J8uJOcIyMBMgkuqgLE8KSYJ%2B0w7RbsoYMkKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUnAHd8Q7sQ60sJYIq3ANSmLjwpJ4q2tb1zxFpE%2Fd6%2FBheXxpshJO%2B%2FYb3xDwAz78fzWP7sBiBZ6D3Vjqt7sGy4gk25x0kX3fi0BHq51YQkbQOSl%2B0HQf%2FF8i5ZSNYo6%2BsjBFm73n8%2Bqod4MMjQmvXPSShqIpROwQ6T4odzgRmn%2BhuCw%2BQC2CKMEtsjbciTpaGit3QKlKOfDWlpZYGIKnwFKEIr2O1ei%2Bg8YcPymE9mIje43XkEW5jTCiDbCBNgE56sFQSvPeyDflv3V%2BQB%2FH1yUuLVZ9l36cfqZQYTIHhlBfn7UEYHFrgtkX4G4Ksr2QMAdVvCzsC4Bq1wTL%2FNNH2P9cbPcetBWngAiqsbe0xvqGF7icRI4Xfdi0nKRA8jBK4lZQYwRIA%2FsRmjg%2FKUaVEjPkBHrkgykc0usESr3ijRM9Mn7L0SBYf4Il5FUw6IKfyF4L7ySpWUxxRMpWNj6Z%2ByjRwq0hZSu%2F4VNXEidDDLKLwpB07Ip8k7E5GjFYSbjnZBVQ%2FMPMWQG9IFWwjbpfXss1nRD6ZvB4h9%2B4afS8gRFyF67AYoIELcMK%2BH1JX%2BdWEmUxTrQxb1Lx6R1PZQ4CAbkTMMSpshnmQ%2BoaPaqnapSeiuHkDYY9yOrbnGl7nQAbCWCUAkCiH0ekPzTCi8ovBBjqkAWGyypdoSirR5gLGHodKoE2HW%2F%2FVEQ7g%2B6iKr7NOe9A6vsrIwvbdv4rhpwrVg%2Fg2ywObn0QSw0nMOtoKhg8ZaazK44qcfeusjqyAx2l2PLcl1gPAnj1x8s%2BAU8Pg2Uu8AM4AscMLdz%2FtByhZUxlT4xI54UrchfOmcJkc8PgkjxoUaKeTDO0Ifzv7KLEW0yfksiC5iYTUfU6qLLvY8QbkMBhNNh0j&X-Amz-Signature=b8414b149919dea74201c8b0cff26d99d7d1ada2ad84320305b2f79ec0bb7f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXR73YI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC7NfTy1TXWB%2BkcdUtZ1HQKo3smsX%2FDtxteQh5SxfkdPgIhAJrGcytrR2J8uJOcIyMBMgkuqgLE8KSYJ%2B0w7RbsoYMkKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUnAHd8Q7sQ60sJYIq3ANSmLjwpJ4q2tb1zxFpE%2Fd6%2FBheXxpshJO%2B%2FYb3xDwAz78fzWP7sBiBZ6D3Vjqt7sGy4gk25x0kX3fi0BHq51YQkbQOSl%2B0HQf%2FF8i5ZSNYo6%2BsjBFm73n8%2Bqod4MMjQmvXPSShqIpROwQ6T4odzgRmn%2BhuCw%2BQC2CKMEtsjbciTpaGit3QKlKOfDWlpZYGIKnwFKEIr2O1ei%2Bg8YcPymE9mIje43XkEW5jTCiDbCBNgE56sFQSvPeyDflv3V%2BQB%2FH1yUuLVZ9l36cfqZQYTIHhlBfn7UEYHFrgtkX4G4Ksr2QMAdVvCzsC4Bq1wTL%2FNNH2P9cbPcetBWngAiqsbe0xvqGF7icRI4Xfdi0nKRA8jBK4lZQYwRIA%2FsRmjg%2FKUaVEjPkBHrkgykc0usESr3ijRM9Mn7L0SBYf4Il5FUw6IKfyF4L7ySpWUxxRMpWNj6Z%2ByjRwq0hZSu%2F4VNXEidDDLKLwpB07Ip8k7E5GjFYSbjnZBVQ%2FMPMWQG9IFWwjbpfXss1nRD6ZvB4h9%2B4afS8gRFyF67AYoIELcMK%2BH1JX%2BdWEmUxTrQxb1Lx6R1PZQ4CAbkTMMSpshnmQ%2BoaPaqnapSeiuHkDYY9yOrbnGl7nQAbCWCUAkCiH0ekPzTCi8ovBBjqkAWGyypdoSirR5gLGHodKoE2HW%2F%2FVEQ7g%2B6iKr7NOe9A6vsrIwvbdv4rhpwrVg%2Fg2ywObn0QSw0nMOtoKhg8ZaazK44qcfeusjqyAx2l2PLcl1gPAnj1x8s%2BAU8Pg2Uu8AM4AscMLdz%2FtByhZUxlT4xI54UrchfOmcJkc8PgkjxoUaKeTDO0Ifzv7KLEW0yfksiC5iYTUfU6qLLvY8QbkMBhNNh0j&X-Amz-Signature=65544b8d13bd4260badf18a24b9b5f500d3ac50a6357cff0311d0f867995f6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXR73YI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC7NfTy1TXWB%2BkcdUtZ1HQKo3smsX%2FDtxteQh5SxfkdPgIhAJrGcytrR2J8uJOcIyMBMgkuqgLE8KSYJ%2B0w7RbsoYMkKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUnAHd8Q7sQ60sJYIq3ANSmLjwpJ4q2tb1zxFpE%2Fd6%2FBheXxpshJO%2B%2FYb3xDwAz78fzWP7sBiBZ6D3Vjqt7sGy4gk25x0kX3fi0BHq51YQkbQOSl%2B0HQf%2FF8i5ZSNYo6%2BsjBFm73n8%2Bqod4MMjQmvXPSShqIpROwQ6T4odzgRmn%2BhuCw%2BQC2CKMEtsjbciTpaGit3QKlKOfDWlpZYGIKnwFKEIr2O1ei%2Bg8YcPymE9mIje43XkEW5jTCiDbCBNgE56sFQSvPeyDflv3V%2BQB%2FH1yUuLVZ9l36cfqZQYTIHhlBfn7UEYHFrgtkX4G4Ksr2QMAdVvCzsC4Bq1wTL%2FNNH2P9cbPcetBWngAiqsbe0xvqGF7icRI4Xfdi0nKRA8jBK4lZQYwRIA%2FsRmjg%2FKUaVEjPkBHrkgykc0usESr3ijRM9Mn7L0SBYf4Il5FUw6IKfyF4L7ySpWUxxRMpWNj6Z%2ByjRwq0hZSu%2F4VNXEidDDLKLwpB07Ip8k7E5GjFYSbjnZBVQ%2FMPMWQG9IFWwjbpfXss1nRD6ZvB4h9%2B4afS8gRFyF67AYoIELcMK%2BH1JX%2BdWEmUxTrQxb1Lx6R1PZQ4CAbkTMMSpshnmQ%2BoaPaqnapSeiuHkDYY9yOrbnGl7nQAbCWCUAkCiH0ekPzTCi8ovBBjqkAWGyypdoSirR5gLGHodKoE2HW%2F%2FVEQ7g%2B6iKr7NOe9A6vsrIwvbdv4rhpwrVg%2Fg2ywObn0QSw0nMOtoKhg8ZaazK44qcfeusjqyAx2l2PLcl1gPAnj1x8s%2BAU8Pg2Uu8AM4AscMLdz%2FtByhZUxlT4xI54UrchfOmcJkc8PgkjxoUaKeTDO0Ifzv7KLEW0yfksiC5iYTUfU6qLLvY8QbkMBhNNh0j&X-Amz-Signature=fc82be3f88d12a0b122e84ef8a4f9add2a70efe05d156924808c82c4a5b50334&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXR73YI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC7NfTy1TXWB%2BkcdUtZ1HQKo3smsX%2FDtxteQh5SxfkdPgIhAJrGcytrR2J8uJOcIyMBMgkuqgLE8KSYJ%2B0w7RbsoYMkKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUnAHd8Q7sQ60sJYIq3ANSmLjwpJ4q2tb1zxFpE%2Fd6%2FBheXxpshJO%2B%2FYb3xDwAz78fzWP7sBiBZ6D3Vjqt7sGy4gk25x0kX3fi0BHq51YQkbQOSl%2B0HQf%2FF8i5ZSNYo6%2BsjBFm73n8%2Bqod4MMjQmvXPSShqIpROwQ6T4odzgRmn%2BhuCw%2BQC2CKMEtsjbciTpaGit3QKlKOfDWlpZYGIKnwFKEIr2O1ei%2Bg8YcPymE9mIje43XkEW5jTCiDbCBNgE56sFQSvPeyDflv3V%2BQB%2FH1yUuLVZ9l36cfqZQYTIHhlBfn7UEYHFrgtkX4G4Ksr2QMAdVvCzsC4Bq1wTL%2FNNH2P9cbPcetBWngAiqsbe0xvqGF7icRI4Xfdi0nKRA8jBK4lZQYwRIA%2FsRmjg%2FKUaVEjPkBHrkgykc0usESr3ijRM9Mn7L0SBYf4Il5FUw6IKfyF4L7ySpWUxxRMpWNj6Z%2ByjRwq0hZSu%2F4VNXEidDDLKLwpB07Ip8k7E5GjFYSbjnZBVQ%2FMPMWQG9IFWwjbpfXss1nRD6ZvB4h9%2B4afS8gRFyF67AYoIELcMK%2BH1JX%2BdWEmUxTrQxb1Lx6R1PZQ4CAbkTMMSpshnmQ%2BoaPaqnapSeiuHkDYY9yOrbnGl7nQAbCWCUAkCiH0ekPzTCi8ovBBjqkAWGyypdoSirR5gLGHodKoE2HW%2F%2FVEQ7g%2B6iKr7NOe9A6vsrIwvbdv4rhpwrVg%2Fg2ywObn0QSw0nMOtoKhg8ZaazK44qcfeusjqyAx2l2PLcl1gPAnj1x8s%2BAU8Pg2Uu8AM4AscMLdz%2FtByhZUxlT4xI54UrchfOmcJkc8PgkjxoUaKeTDO0Ifzv7KLEW0yfksiC5iYTUfU6qLLvY8QbkMBhNNh0j&X-Amz-Signature=f8bba40e2626f28b17d7c6480efc69670713a2a72db6db5f9a85eef7bad6774f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXR73YI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC7NfTy1TXWB%2BkcdUtZ1HQKo3smsX%2FDtxteQh5SxfkdPgIhAJrGcytrR2J8uJOcIyMBMgkuqgLE8KSYJ%2B0w7RbsoYMkKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUnAHd8Q7sQ60sJYIq3ANSmLjwpJ4q2tb1zxFpE%2Fd6%2FBheXxpshJO%2B%2FYb3xDwAz78fzWP7sBiBZ6D3Vjqt7sGy4gk25x0kX3fi0BHq51YQkbQOSl%2B0HQf%2FF8i5ZSNYo6%2BsjBFm73n8%2Bqod4MMjQmvXPSShqIpROwQ6T4odzgRmn%2BhuCw%2BQC2CKMEtsjbciTpaGit3QKlKOfDWlpZYGIKnwFKEIr2O1ei%2Bg8YcPymE9mIje43XkEW5jTCiDbCBNgE56sFQSvPeyDflv3V%2BQB%2FH1yUuLVZ9l36cfqZQYTIHhlBfn7UEYHFrgtkX4G4Ksr2QMAdVvCzsC4Bq1wTL%2FNNH2P9cbPcetBWngAiqsbe0xvqGF7icRI4Xfdi0nKRA8jBK4lZQYwRIA%2FsRmjg%2FKUaVEjPkBHrkgykc0usESr3ijRM9Mn7L0SBYf4Il5FUw6IKfyF4L7ySpWUxxRMpWNj6Z%2ByjRwq0hZSu%2F4VNXEidDDLKLwpB07Ip8k7E5GjFYSbjnZBVQ%2FMPMWQG9IFWwjbpfXss1nRD6ZvB4h9%2B4afS8gRFyF67AYoIELcMK%2BH1JX%2BdWEmUxTrQxb1Lx6R1PZQ4CAbkTMMSpshnmQ%2BoaPaqnapSeiuHkDYY9yOrbnGl7nQAbCWCUAkCiH0ekPzTCi8ovBBjqkAWGyypdoSirR5gLGHodKoE2HW%2F%2FVEQ7g%2B6iKr7NOe9A6vsrIwvbdv4rhpwrVg%2Fg2ywObn0QSw0nMOtoKhg8ZaazK44qcfeusjqyAx2l2PLcl1gPAnj1x8s%2BAU8Pg2Uu8AM4AscMLdz%2FtByhZUxlT4xI54UrchfOmcJkc8PgkjxoUaKeTDO0Ifzv7KLEW0yfksiC5iYTUfU6qLLvY8QbkMBhNNh0j&X-Amz-Signature=2a0302d2e0c3308841baf8e243b6d3c41474b97f4440f4e62dfcc9d43eca9232&X-Amz-SignedHeaders=host&x-id=GetObject)
