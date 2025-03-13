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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJ3Z4TR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9wavd1j33jVFiD41RA5KhEYtPbNh6dQxCPVfeZcF1AAiEAvIQHzcMsE%2Fua1gVjlPHlUU1U1fEHezHivuuNWa3lrNMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJejtYQcqlEWTwqWUircA%2FNcRlq6SbjWGU5284BYga685wXuUIsuCQFemlTrhw6uSi0ahfk%2B2qdfh6O9LnssrCOd8SWURC9K%2FWNJ1A8wu8M%2BeUp5cSs979l22JdZtd%2FhlxD1d2nPwiaSU%2B2N2ELNlB4v4gSkyLBgKR6xsM10%2B1uyW1dRkur1L5IvSnmNFCZd%2Bo6xcWPWb2a2snB%2FAFejbjLGJQErHDKSZI%2FC4dZU8l8oUBMrAM9adP3aAo0F2L8EmQ8XEV76kC0DT1Z0eBuu9%2BdwE76bech9DhLRBcfiuAH1J7XDfb0H%2FTIxQHVW1w%2FxUoBAUCD5lTyRiluWUG8xyO8g3pJ0SeubbllTJBTbUC7o%2FO8m8TK8CzoMD1VR59i2lmJ020A1n6ZLKL1WWKgCUUtwZsagLZNXSWH7Fx4SUTniG8pv6f7aFWYw10Ftn4mVWFhQy8PSjVomsWd4WfNL39k4olSaTUfrSFj%2FPnI2lOxAsyLUEy%2FvhhU%2FKFrTZhdHyZrDI1CmiLRFhDj1dP9JtuiWXAOx0pUDvOmyV260itiSS1JDALAqBbgtNjaOFW%2FDXW901EEmaBalR49gYlPZHAsACABLpTv0zCsWyrBEBQg%2Fl5U85Rb0O%2B5aDYk%2FgWORBsE3%2BHO4EDXcpSR4MLOHyb4GOqUB1O%2FAp53eBNEFAM3J6CBQrYEEYH1ZGXqe%2F8UlCqNwvO3M04cn9WN%2BchsuxD8dK7HpqszQRS5GAh1WNAEsd6G6RfLLVmWXi1WwSlLS8RlfQkbFu266mdTPddzH8xu4UAjgXhmryR57uDEuHxT1FBGLam7AYCnatdZYBP9BIIMrl1SCTShIHIECpVU93E8iCJjv9RIRH40bI3gbGeUgklvEojmZDthM&X-Amz-Signature=619bad65590de0b9fbbeb0b32d16f315d3b930f11938ee303af56968824e39b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJ3Z4TR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9wavd1j33jVFiD41RA5KhEYtPbNh6dQxCPVfeZcF1AAiEAvIQHzcMsE%2Fua1gVjlPHlUU1U1fEHezHivuuNWa3lrNMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJejtYQcqlEWTwqWUircA%2FNcRlq6SbjWGU5284BYga685wXuUIsuCQFemlTrhw6uSi0ahfk%2B2qdfh6O9LnssrCOd8SWURC9K%2FWNJ1A8wu8M%2BeUp5cSs979l22JdZtd%2FhlxD1d2nPwiaSU%2B2N2ELNlB4v4gSkyLBgKR6xsM10%2B1uyW1dRkur1L5IvSnmNFCZd%2Bo6xcWPWb2a2snB%2FAFejbjLGJQErHDKSZI%2FC4dZU8l8oUBMrAM9adP3aAo0F2L8EmQ8XEV76kC0DT1Z0eBuu9%2BdwE76bech9DhLRBcfiuAH1J7XDfb0H%2FTIxQHVW1w%2FxUoBAUCD5lTyRiluWUG8xyO8g3pJ0SeubbllTJBTbUC7o%2FO8m8TK8CzoMD1VR59i2lmJ020A1n6ZLKL1WWKgCUUtwZsagLZNXSWH7Fx4SUTniG8pv6f7aFWYw10Ftn4mVWFhQy8PSjVomsWd4WfNL39k4olSaTUfrSFj%2FPnI2lOxAsyLUEy%2FvhhU%2FKFrTZhdHyZrDI1CmiLRFhDj1dP9JtuiWXAOx0pUDvOmyV260itiSS1JDALAqBbgtNjaOFW%2FDXW901EEmaBalR49gYlPZHAsACABLpTv0zCsWyrBEBQg%2Fl5U85Rb0O%2B5aDYk%2FgWORBsE3%2BHO4EDXcpSR4MLOHyb4GOqUB1O%2FAp53eBNEFAM3J6CBQrYEEYH1ZGXqe%2F8UlCqNwvO3M04cn9WN%2BchsuxD8dK7HpqszQRS5GAh1WNAEsd6G6RfLLVmWXi1WwSlLS8RlfQkbFu266mdTPddzH8xu4UAjgXhmryR57uDEuHxT1FBGLam7AYCnatdZYBP9BIIMrl1SCTShIHIECpVU93E8iCJjv9RIRH40bI3gbGeUgklvEojmZDthM&X-Amz-Signature=7d9e3d6cd71f5316247ebdf905e3d3e20f1106cd4ebe600a77dda8bcd5ac1221&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJ3Z4TR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9wavd1j33jVFiD41RA5KhEYtPbNh6dQxCPVfeZcF1AAiEAvIQHzcMsE%2Fua1gVjlPHlUU1U1fEHezHivuuNWa3lrNMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJejtYQcqlEWTwqWUircA%2FNcRlq6SbjWGU5284BYga685wXuUIsuCQFemlTrhw6uSi0ahfk%2B2qdfh6O9LnssrCOd8SWURC9K%2FWNJ1A8wu8M%2BeUp5cSs979l22JdZtd%2FhlxD1d2nPwiaSU%2B2N2ELNlB4v4gSkyLBgKR6xsM10%2B1uyW1dRkur1L5IvSnmNFCZd%2Bo6xcWPWb2a2snB%2FAFejbjLGJQErHDKSZI%2FC4dZU8l8oUBMrAM9adP3aAo0F2L8EmQ8XEV76kC0DT1Z0eBuu9%2BdwE76bech9DhLRBcfiuAH1J7XDfb0H%2FTIxQHVW1w%2FxUoBAUCD5lTyRiluWUG8xyO8g3pJ0SeubbllTJBTbUC7o%2FO8m8TK8CzoMD1VR59i2lmJ020A1n6ZLKL1WWKgCUUtwZsagLZNXSWH7Fx4SUTniG8pv6f7aFWYw10Ftn4mVWFhQy8PSjVomsWd4WfNL39k4olSaTUfrSFj%2FPnI2lOxAsyLUEy%2FvhhU%2FKFrTZhdHyZrDI1CmiLRFhDj1dP9JtuiWXAOx0pUDvOmyV260itiSS1JDALAqBbgtNjaOFW%2FDXW901EEmaBalR49gYlPZHAsACABLpTv0zCsWyrBEBQg%2Fl5U85Rb0O%2B5aDYk%2FgWORBsE3%2BHO4EDXcpSR4MLOHyb4GOqUB1O%2FAp53eBNEFAM3J6CBQrYEEYH1ZGXqe%2F8UlCqNwvO3M04cn9WN%2BchsuxD8dK7HpqszQRS5GAh1WNAEsd6G6RfLLVmWXi1WwSlLS8RlfQkbFu266mdTPddzH8xu4UAjgXhmryR57uDEuHxT1FBGLam7AYCnatdZYBP9BIIMrl1SCTShIHIECpVU93E8iCJjv9RIRH40bI3gbGeUgklvEojmZDthM&X-Amz-Signature=86a8bc4f2d65fab9b2537c2d3b5fffed33c1589dce12d88f32db4ae75b75af26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJ3Z4TR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9wavd1j33jVFiD41RA5KhEYtPbNh6dQxCPVfeZcF1AAiEAvIQHzcMsE%2Fua1gVjlPHlUU1U1fEHezHivuuNWa3lrNMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJejtYQcqlEWTwqWUircA%2FNcRlq6SbjWGU5284BYga685wXuUIsuCQFemlTrhw6uSi0ahfk%2B2qdfh6O9LnssrCOd8SWURC9K%2FWNJ1A8wu8M%2BeUp5cSs979l22JdZtd%2FhlxD1d2nPwiaSU%2B2N2ELNlB4v4gSkyLBgKR6xsM10%2B1uyW1dRkur1L5IvSnmNFCZd%2Bo6xcWPWb2a2snB%2FAFejbjLGJQErHDKSZI%2FC4dZU8l8oUBMrAM9adP3aAo0F2L8EmQ8XEV76kC0DT1Z0eBuu9%2BdwE76bech9DhLRBcfiuAH1J7XDfb0H%2FTIxQHVW1w%2FxUoBAUCD5lTyRiluWUG8xyO8g3pJ0SeubbllTJBTbUC7o%2FO8m8TK8CzoMD1VR59i2lmJ020A1n6ZLKL1WWKgCUUtwZsagLZNXSWH7Fx4SUTniG8pv6f7aFWYw10Ftn4mVWFhQy8PSjVomsWd4WfNL39k4olSaTUfrSFj%2FPnI2lOxAsyLUEy%2FvhhU%2FKFrTZhdHyZrDI1CmiLRFhDj1dP9JtuiWXAOx0pUDvOmyV260itiSS1JDALAqBbgtNjaOFW%2FDXW901EEmaBalR49gYlPZHAsACABLpTv0zCsWyrBEBQg%2Fl5U85Rb0O%2B5aDYk%2FgWORBsE3%2BHO4EDXcpSR4MLOHyb4GOqUB1O%2FAp53eBNEFAM3J6CBQrYEEYH1ZGXqe%2F8UlCqNwvO3M04cn9WN%2BchsuxD8dK7HpqszQRS5GAh1WNAEsd6G6RfLLVmWXi1WwSlLS8RlfQkbFu266mdTPddzH8xu4UAjgXhmryR57uDEuHxT1FBGLam7AYCnatdZYBP9BIIMrl1SCTShIHIECpVU93E8iCJjv9RIRH40bI3gbGeUgklvEojmZDthM&X-Amz-Signature=f38394971d439ad14fa562a13eba5b21d7639e2e0dace7b674f45d94181bb467&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJ3Z4TR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9wavd1j33jVFiD41RA5KhEYtPbNh6dQxCPVfeZcF1AAiEAvIQHzcMsE%2Fua1gVjlPHlUU1U1fEHezHivuuNWa3lrNMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJejtYQcqlEWTwqWUircA%2FNcRlq6SbjWGU5284BYga685wXuUIsuCQFemlTrhw6uSi0ahfk%2B2qdfh6O9LnssrCOd8SWURC9K%2FWNJ1A8wu8M%2BeUp5cSs979l22JdZtd%2FhlxD1d2nPwiaSU%2B2N2ELNlB4v4gSkyLBgKR6xsM10%2B1uyW1dRkur1L5IvSnmNFCZd%2Bo6xcWPWb2a2snB%2FAFejbjLGJQErHDKSZI%2FC4dZU8l8oUBMrAM9adP3aAo0F2L8EmQ8XEV76kC0DT1Z0eBuu9%2BdwE76bech9DhLRBcfiuAH1J7XDfb0H%2FTIxQHVW1w%2FxUoBAUCD5lTyRiluWUG8xyO8g3pJ0SeubbllTJBTbUC7o%2FO8m8TK8CzoMD1VR59i2lmJ020A1n6ZLKL1WWKgCUUtwZsagLZNXSWH7Fx4SUTniG8pv6f7aFWYw10Ftn4mVWFhQy8PSjVomsWd4WfNL39k4olSaTUfrSFj%2FPnI2lOxAsyLUEy%2FvhhU%2FKFrTZhdHyZrDI1CmiLRFhDj1dP9JtuiWXAOx0pUDvOmyV260itiSS1JDALAqBbgtNjaOFW%2FDXW901EEmaBalR49gYlPZHAsACABLpTv0zCsWyrBEBQg%2Fl5U85Rb0O%2B5aDYk%2FgWORBsE3%2BHO4EDXcpSR4MLOHyb4GOqUB1O%2FAp53eBNEFAM3J6CBQrYEEYH1ZGXqe%2F8UlCqNwvO3M04cn9WN%2BchsuxD8dK7HpqszQRS5GAh1WNAEsd6G6RfLLVmWXi1WwSlLS8RlfQkbFu266mdTPddzH8xu4UAjgXhmryR57uDEuHxT1FBGLam7AYCnatdZYBP9BIIMrl1SCTShIHIECpVU93E8iCJjv9RIRH40bI3gbGeUgklvEojmZDthM&X-Amz-Signature=913897adfc54aac025bf6de3ad54f896bf38b021982474d01ee7dde145ba2019&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJ3Z4TR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9wavd1j33jVFiD41RA5KhEYtPbNh6dQxCPVfeZcF1AAiEAvIQHzcMsE%2Fua1gVjlPHlUU1U1fEHezHivuuNWa3lrNMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJejtYQcqlEWTwqWUircA%2FNcRlq6SbjWGU5284BYga685wXuUIsuCQFemlTrhw6uSi0ahfk%2B2qdfh6O9LnssrCOd8SWURC9K%2FWNJ1A8wu8M%2BeUp5cSs979l22JdZtd%2FhlxD1d2nPwiaSU%2B2N2ELNlB4v4gSkyLBgKR6xsM10%2B1uyW1dRkur1L5IvSnmNFCZd%2Bo6xcWPWb2a2snB%2FAFejbjLGJQErHDKSZI%2FC4dZU8l8oUBMrAM9adP3aAo0F2L8EmQ8XEV76kC0DT1Z0eBuu9%2BdwE76bech9DhLRBcfiuAH1J7XDfb0H%2FTIxQHVW1w%2FxUoBAUCD5lTyRiluWUG8xyO8g3pJ0SeubbllTJBTbUC7o%2FO8m8TK8CzoMD1VR59i2lmJ020A1n6ZLKL1WWKgCUUtwZsagLZNXSWH7Fx4SUTniG8pv6f7aFWYw10Ftn4mVWFhQy8PSjVomsWd4WfNL39k4olSaTUfrSFj%2FPnI2lOxAsyLUEy%2FvhhU%2FKFrTZhdHyZrDI1CmiLRFhDj1dP9JtuiWXAOx0pUDvOmyV260itiSS1JDALAqBbgtNjaOFW%2FDXW901EEmaBalR49gYlPZHAsACABLpTv0zCsWyrBEBQg%2Fl5U85Rb0O%2B5aDYk%2FgWORBsE3%2BHO4EDXcpSR4MLOHyb4GOqUB1O%2FAp53eBNEFAM3J6CBQrYEEYH1ZGXqe%2F8UlCqNwvO3M04cn9WN%2BchsuxD8dK7HpqszQRS5GAh1WNAEsd6G6RfLLVmWXi1WwSlLS8RlfQkbFu266mdTPddzH8xu4UAjgXhmryR57uDEuHxT1FBGLam7AYCnatdZYBP9BIIMrl1SCTShIHIECpVU93E8iCJjv9RIRH40bI3gbGeUgklvEojmZDthM&X-Amz-Signature=2a7f7083f96c655d360adb7190cf2828743e9c6897554404a5286ecfc52693bb&X-Amz-SignedHeaders=host&x-id=GetObject)
