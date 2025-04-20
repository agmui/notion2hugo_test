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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWUMX3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGSaSn01mj4gYg2wfcpCqxAsLuOQMgp9bzGII3KrhB%2F%2FAiEAmqK7EpVE2pEZnI6pHbX4Ba6r%2F8X%2BXMXY%2FXB0plYqHuwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7qybZ3r5LQrzFjayrcA7gufJ5ODJUADXFKCbSqmfyhVictR0nthXrdkobcm3Dm2OpjTIYbDQ2uSHigigCa1gbSEsxii1pFZxTAOJGnwsV45EhRn%2BqOkq0ovJNE3pR73rH8wdV4700hHQXI9BI5WLWvbnQ3AoK070QFTzkcMnXR1f%2FUT9S0MUh1hKYtBo%2F6tHNVpSRAfDMRypbpbOy%2FUUCBzHWAMJDiNWfBajnF11ZFnSn8%2BKIdbwA7flU0minFhsGmKwHMJBOz0vYkomuOfVleUNORNTmlmfn826777vlyCnfUesWaU0BO7XwwKF9WH0%2Bui1BxlyysaP%2F5S4WMguItQJ2EeHrNR2W%2BVO6Lc7w7IVAATmsQoUMNDO0XhbIcRSZQSCwDhXivdP9k7%2BkqgGUDwxwhUSWho1Lsjys5ltqtQycwIvnKGd2Mk9C6oBqMaloT90RpK8LbmXUOpYl8U0%2FmWUBXKoNwW7ePrgh8sCg1A1lghO1weuWbGKN%2FBqOz9aMfUo3uN%2BIEocqx0i6%2FU8jrPX%2FkuHZCjfOYBqZmy6%2BpwDOp5CbpRZafi0NE0ESZhxgdpYl%2BsNkF06GPcPYj3YeiXAmhVQQOTuJOURIlC65E0igpqLj%2B7NKf5OkFJ3idESgNGDGm4LVsrPmFMPuBkcAGOqUB9J3MKhdQZQeoilivnQWew7qa2Nu98TT7KomP2Vi2GlaDgdrwmVIUgyfB4wXk3TTZEstV3SLOELP6oa8a6syP90TiqiHI%2BsBzmZ8JPNWDGwj1D35IiuKrMRAKzkbNfEkxYWEmET%2F8idMb3kCPJOKGoiVcvwK0Adra1tKtVTNgl0Gg6xbzO8nsuzMiTNyid5QRDz594nvCOykjRPm4ykxy3f1M1iQ5&X-Amz-Signature=2d69c53e1d3047520137b9b950786c154366c1a0bddcd2eedae03efd01717419&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWUMX3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGSaSn01mj4gYg2wfcpCqxAsLuOQMgp9bzGII3KrhB%2F%2FAiEAmqK7EpVE2pEZnI6pHbX4Ba6r%2F8X%2BXMXY%2FXB0plYqHuwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7qybZ3r5LQrzFjayrcA7gufJ5ODJUADXFKCbSqmfyhVictR0nthXrdkobcm3Dm2OpjTIYbDQ2uSHigigCa1gbSEsxii1pFZxTAOJGnwsV45EhRn%2BqOkq0ovJNE3pR73rH8wdV4700hHQXI9BI5WLWvbnQ3AoK070QFTzkcMnXR1f%2FUT9S0MUh1hKYtBo%2F6tHNVpSRAfDMRypbpbOy%2FUUCBzHWAMJDiNWfBajnF11ZFnSn8%2BKIdbwA7flU0minFhsGmKwHMJBOz0vYkomuOfVleUNORNTmlmfn826777vlyCnfUesWaU0BO7XwwKF9WH0%2Bui1BxlyysaP%2F5S4WMguItQJ2EeHrNR2W%2BVO6Lc7w7IVAATmsQoUMNDO0XhbIcRSZQSCwDhXivdP9k7%2BkqgGUDwxwhUSWho1Lsjys5ltqtQycwIvnKGd2Mk9C6oBqMaloT90RpK8LbmXUOpYl8U0%2FmWUBXKoNwW7ePrgh8sCg1A1lghO1weuWbGKN%2FBqOz9aMfUo3uN%2BIEocqx0i6%2FU8jrPX%2FkuHZCjfOYBqZmy6%2BpwDOp5CbpRZafi0NE0ESZhxgdpYl%2BsNkF06GPcPYj3YeiXAmhVQQOTuJOURIlC65E0igpqLj%2B7NKf5OkFJ3idESgNGDGm4LVsrPmFMPuBkcAGOqUB9J3MKhdQZQeoilivnQWew7qa2Nu98TT7KomP2Vi2GlaDgdrwmVIUgyfB4wXk3TTZEstV3SLOELP6oa8a6syP90TiqiHI%2BsBzmZ8JPNWDGwj1D35IiuKrMRAKzkbNfEkxYWEmET%2F8idMb3kCPJOKGoiVcvwK0Adra1tKtVTNgl0Gg6xbzO8nsuzMiTNyid5QRDz594nvCOykjRPm4ykxy3f1M1iQ5&X-Amz-Signature=9f84aeb530e8d8d25411ef48c5c7b6a45c2311ce15d4aa12adbf8775a5919c31&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWUMX3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGSaSn01mj4gYg2wfcpCqxAsLuOQMgp9bzGII3KrhB%2F%2FAiEAmqK7EpVE2pEZnI6pHbX4Ba6r%2F8X%2BXMXY%2FXB0plYqHuwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7qybZ3r5LQrzFjayrcA7gufJ5ODJUADXFKCbSqmfyhVictR0nthXrdkobcm3Dm2OpjTIYbDQ2uSHigigCa1gbSEsxii1pFZxTAOJGnwsV45EhRn%2BqOkq0ovJNE3pR73rH8wdV4700hHQXI9BI5WLWvbnQ3AoK070QFTzkcMnXR1f%2FUT9S0MUh1hKYtBo%2F6tHNVpSRAfDMRypbpbOy%2FUUCBzHWAMJDiNWfBajnF11ZFnSn8%2BKIdbwA7flU0minFhsGmKwHMJBOz0vYkomuOfVleUNORNTmlmfn826777vlyCnfUesWaU0BO7XwwKF9WH0%2Bui1BxlyysaP%2F5S4WMguItQJ2EeHrNR2W%2BVO6Lc7w7IVAATmsQoUMNDO0XhbIcRSZQSCwDhXivdP9k7%2BkqgGUDwxwhUSWho1Lsjys5ltqtQycwIvnKGd2Mk9C6oBqMaloT90RpK8LbmXUOpYl8U0%2FmWUBXKoNwW7ePrgh8sCg1A1lghO1weuWbGKN%2FBqOz9aMfUo3uN%2BIEocqx0i6%2FU8jrPX%2FkuHZCjfOYBqZmy6%2BpwDOp5CbpRZafi0NE0ESZhxgdpYl%2BsNkF06GPcPYj3YeiXAmhVQQOTuJOURIlC65E0igpqLj%2B7NKf5OkFJ3idESgNGDGm4LVsrPmFMPuBkcAGOqUB9J3MKhdQZQeoilivnQWew7qa2Nu98TT7KomP2Vi2GlaDgdrwmVIUgyfB4wXk3TTZEstV3SLOELP6oa8a6syP90TiqiHI%2BsBzmZ8JPNWDGwj1D35IiuKrMRAKzkbNfEkxYWEmET%2F8idMb3kCPJOKGoiVcvwK0Adra1tKtVTNgl0Gg6xbzO8nsuzMiTNyid5QRDz594nvCOykjRPm4ykxy3f1M1iQ5&X-Amz-Signature=4e3b0e0f6952b969ec7cfcbf3aec91ca028792b1f136b5cc973654bf1e7c6524&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWUMX3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGSaSn01mj4gYg2wfcpCqxAsLuOQMgp9bzGII3KrhB%2F%2FAiEAmqK7EpVE2pEZnI6pHbX4Ba6r%2F8X%2BXMXY%2FXB0plYqHuwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7qybZ3r5LQrzFjayrcA7gufJ5ODJUADXFKCbSqmfyhVictR0nthXrdkobcm3Dm2OpjTIYbDQ2uSHigigCa1gbSEsxii1pFZxTAOJGnwsV45EhRn%2BqOkq0ovJNE3pR73rH8wdV4700hHQXI9BI5WLWvbnQ3AoK070QFTzkcMnXR1f%2FUT9S0MUh1hKYtBo%2F6tHNVpSRAfDMRypbpbOy%2FUUCBzHWAMJDiNWfBajnF11ZFnSn8%2BKIdbwA7flU0minFhsGmKwHMJBOz0vYkomuOfVleUNORNTmlmfn826777vlyCnfUesWaU0BO7XwwKF9WH0%2Bui1BxlyysaP%2F5S4WMguItQJ2EeHrNR2W%2BVO6Lc7w7IVAATmsQoUMNDO0XhbIcRSZQSCwDhXivdP9k7%2BkqgGUDwxwhUSWho1Lsjys5ltqtQycwIvnKGd2Mk9C6oBqMaloT90RpK8LbmXUOpYl8U0%2FmWUBXKoNwW7ePrgh8sCg1A1lghO1weuWbGKN%2FBqOz9aMfUo3uN%2BIEocqx0i6%2FU8jrPX%2FkuHZCjfOYBqZmy6%2BpwDOp5CbpRZafi0NE0ESZhxgdpYl%2BsNkF06GPcPYj3YeiXAmhVQQOTuJOURIlC65E0igpqLj%2B7NKf5OkFJ3idESgNGDGm4LVsrPmFMPuBkcAGOqUB9J3MKhdQZQeoilivnQWew7qa2Nu98TT7KomP2Vi2GlaDgdrwmVIUgyfB4wXk3TTZEstV3SLOELP6oa8a6syP90TiqiHI%2BsBzmZ8JPNWDGwj1D35IiuKrMRAKzkbNfEkxYWEmET%2F8idMb3kCPJOKGoiVcvwK0Adra1tKtVTNgl0Gg6xbzO8nsuzMiTNyid5QRDz594nvCOykjRPm4ykxy3f1M1iQ5&X-Amz-Signature=b21ebb4aa39ee662d9d71eb4ca907b3f46ae0eae71d7aa221f557f737fe5d9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWUMX3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGSaSn01mj4gYg2wfcpCqxAsLuOQMgp9bzGII3KrhB%2F%2FAiEAmqK7EpVE2pEZnI6pHbX4Ba6r%2F8X%2BXMXY%2FXB0plYqHuwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7qybZ3r5LQrzFjayrcA7gufJ5ODJUADXFKCbSqmfyhVictR0nthXrdkobcm3Dm2OpjTIYbDQ2uSHigigCa1gbSEsxii1pFZxTAOJGnwsV45EhRn%2BqOkq0ovJNE3pR73rH8wdV4700hHQXI9BI5WLWvbnQ3AoK070QFTzkcMnXR1f%2FUT9S0MUh1hKYtBo%2F6tHNVpSRAfDMRypbpbOy%2FUUCBzHWAMJDiNWfBajnF11ZFnSn8%2BKIdbwA7flU0minFhsGmKwHMJBOz0vYkomuOfVleUNORNTmlmfn826777vlyCnfUesWaU0BO7XwwKF9WH0%2Bui1BxlyysaP%2F5S4WMguItQJ2EeHrNR2W%2BVO6Lc7w7IVAATmsQoUMNDO0XhbIcRSZQSCwDhXivdP9k7%2BkqgGUDwxwhUSWho1Lsjys5ltqtQycwIvnKGd2Mk9C6oBqMaloT90RpK8LbmXUOpYl8U0%2FmWUBXKoNwW7ePrgh8sCg1A1lghO1weuWbGKN%2FBqOz9aMfUo3uN%2BIEocqx0i6%2FU8jrPX%2FkuHZCjfOYBqZmy6%2BpwDOp5CbpRZafi0NE0ESZhxgdpYl%2BsNkF06GPcPYj3YeiXAmhVQQOTuJOURIlC65E0igpqLj%2B7NKf5OkFJ3idESgNGDGm4LVsrPmFMPuBkcAGOqUB9J3MKhdQZQeoilivnQWew7qa2Nu98TT7KomP2Vi2GlaDgdrwmVIUgyfB4wXk3TTZEstV3SLOELP6oa8a6syP90TiqiHI%2BsBzmZ8JPNWDGwj1D35IiuKrMRAKzkbNfEkxYWEmET%2F8idMb3kCPJOKGoiVcvwK0Adra1tKtVTNgl0Gg6xbzO8nsuzMiTNyid5QRDz594nvCOykjRPm4ykxy3f1M1iQ5&X-Amz-Signature=8ebfe55bb8503961ad5570c690347dc2f453e5bb99176ba61fe1e5fbebb71758&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWUMX3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGSaSn01mj4gYg2wfcpCqxAsLuOQMgp9bzGII3KrhB%2F%2FAiEAmqK7EpVE2pEZnI6pHbX4Ba6r%2F8X%2BXMXY%2FXB0plYqHuwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7qybZ3r5LQrzFjayrcA7gufJ5ODJUADXFKCbSqmfyhVictR0nthXrdkobcm3Dm2OpjTIYbDQ2uSHigigCa1gbSEsxii1pFZxTAOJGnwsV45EhRn%2BqOkq0ovJNE3pR73rH8wdV4700hHQXI9BI5WLWvbnQ3AoK070QFTzkcMnXR1f%2FUT9S0MUh1hKYtBo%2F6tHNVpSRAfDMRypbpbOy%2FUUCBzHWAMJDiNWfBajnF11ZFnSn8%2BKIdbwA7flU0minFhsGmKwHMJBOz0vYkomuOfVleUNORNTmlmfn826777vlyCnfUesWaU0BO7XwwKF9WH0%2Bui1BxlyysaP%2F5S4WMguItQJ2EeHrNR2W%2BVO6Lc7w7IVAATmsQoUMNDO0XhbIcRSZQSCwDhXivdP9k7%2BkqgGUDwxwhUSWho1Lsjys5ltqtQycwIvnKGd2Mk9C6oBqMaloT90RpK8LbmXUOpYl8U0%2FmWUBXKoNwW7ePrgh8sCg1A1lghO1weuWbGKN%2FBqOz9aMfUo3uN%2BIEocqx0i6%2FU8jrPX%2FkuHZCjfOYBqZmy6%2BpwDOp5CbpRZafi0NE0ESZhxgdpYl%2BsNkF06GPcPYj3YeiXAmhVQQOTuJOURIlC65E0igpqLj%2B7NKf5OkFJ3idESgNGDGm4LVsrPmFMPuBkcAGOqUB9J3MKhdQZQeoilivnQWew7qa2Nu98TT7KomP2Vi2GlaDgdrwmVIUgyfB4wXk3TTZEstV3SLOELP6oa8a6syP90TiqiHI%2BsBzmZ8JPNWDGwj1D35IiuKrMRAKzkbNfEkxYWEmET%2F8idMb3kCPJOKGoiVcvwK0Adra1tKtVTNgl0Gg6xbzO8nsuzMiTNyid5QRDz594nvCOykjRPm4ykxy3f1M1iQ5&X-Amz-Signature=7a3385a630b37b844eebe6f06672876b885a3bf58fc8a0cc8b1c016dca23a966&X-Amz-SignedHeaders=host&x-id=GetObject)
