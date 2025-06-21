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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY6TWOX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMiWRB7OKjr7f3ANIEicB%2Fc%2Fx8IODqDGRXNlfBb5JvQIgBG4q5GDr%2FwzLnBT90lag4M%2F32RhSXct%2FFndA8VHOBDkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRepAHLKYmA45GXgCrcAwdnuVWjRvQuLfBD%2FzbbJPT1EZDNlC7VmcLrf%2FoRNXA3HavyZJWs89zRh26Anev5qY9pyV%2BhLW3f25MfR6Ld1hfTn6RYJ0JttSn26CZBcQPIak6eQ6KSVjgJCNhInTaHGvGc6ZcpJQwBPtFYiYQyL1gRbTEN94ZfWaPgEufd6m%2BK50ME46okYyLic%2BbCImBX%2BRckFbrNzuSaxgZ5GTKUMRJj2MmJ5SQtwY6ldtSHECPpwEvmjBDlNzwObX%2FIvblXgiZNtMAwlhPSHg2KiQxnIEDl7XsR%2Bz7zie6ifuKkUpxp%2FujkysgmZxxKAIp%2FcH79ZoEZJjJF4JQ%2B5lGZK%2FqmzKYWeG6i%2FuMZdbH6Ag0vSpPVT%2B1nXHyw%2BwNqnVRpL4qcU0MzcvMoanD%2BEsF7Aw7r7bWYtg0F%2BuZ2h4JTc9ipb4umEo52NU41DODNJu8wsNvJlep27TUaJqoiPOWWp6HevA2JBTFh0aD3GSOZxqq%2FXoYm1gD0lhvbozxwgmsCyy6Vc%2Br4WVEhgXIaLW5AYLzYKhX2gWX2hul%2Bx7Ed0WF386kNORFlLCW%2BNkw5mPK3YRxfWT0ZBzP5oxAmTxmzuUSJYdUjjvVGSR5CnLfd6kxMsQHoyY81iSP%2FtL117Gt4MKzN2cIGOqUBtlPGrrNmDUwjMubVOoe02n%2BQ69BnSaGi9VJq2m%2BCXwuu1Z8GOxpo5bTQqI%2BD%2FcjQjMAJ1k0rhiM30D8vXzh5m%2FKYsdYGBpBOpl3LWVsVFdRJm1M5NYBwGrhIQf%2FUgC%2B5bjgk8S4167Q%2Bwtkf7OY4ps28johZKocnya4avOUpeg%2BydUVwcbkY%2FXlSGTwuDJa11G1Ztxj01NY5GBzAaIGQr2CT4yKt&X-Amz-Signature=7b8cd1fb16dc76d6e97e5d3bbb111e0bda8323af00b680cf5391232efe4f8d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY6TWOX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMiWRB7OKjr7f3ANIEicB%2Fc%2Fx8IODqDGRXNlfBb5JvQIgBG4q5GDr%2FwzLnBT90lag4M%2F32RhSXct%2FFndA8VHOBDkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRepAHLKYmA45GXgCrcAwdnuVWjRvQuLfBD%2FzbbJPT1EZDNlC7VmcLrf%2FoRNXA3HavyZJWs89zRh26Anev5qY9pyV%2BhLW3f25MfR6Ld1hfTn6RYJ0JttSn26CZBcQPIak6eQ6KSVjgJCNhInTaHGvGc6ZcpJQwBPtFYiYQyL1gRbTEN94ZfWaPgEufd6m%2BK50ME46okYyLic%2BbCImBX%2BRckFbrNzuSaxgZ5GTKUMRJj2MmJ5SQtwY6ldtSHECPpwEvmjBDlNzwObX%2FIvblXgiZNtMAwlhPSHg2KiQxnIEDl7XsR%2Bz7zie6ifuKkUpxp%2FujkysgmZxxKAIp%2FcH79ZoEZJjJF4JQ%2B5lGZK%2FqmzKYWeG6i%2FuMZdbH6Ag0vSpPVT%2B1nXHyw%2BwNqnVRpL4qcU0MzcvMoanD%2BEsF7Aw7r7bWYtg0F%2BuZ2h4JTc9ipb4umEo52NU41DODNJu8wsNvJlep27TUaJqoiPOWWp6HevA2JBTFh0aD3GSOZxqq%2FXoYm1gD0lhvbozxwgmsCyy6Vc%2Br4WVEhgXIaLW5AYLzYKhX2gWX2hul%2Bx7Ed0WF386kNORFlLCW%2BNkw5mPK3YRxfWT0ZBzP5oxAmTxmzuUSJYdUjjvVGSR5CnLfd6kxMsQHoyY81iSP%2FtL117Gt4MKzN2cIGOqUBtlPGrrNmDUwjMubVOoe02n%2BQ69BnSaGi9VJq2m%2BCXwuu1Z8GOxpo5bTQqI%2BD%2FcjQjMAJ1k0rhiM30D8vXzh5m%2FKYsdYGBpBOpl3LWVsVFdRJm1M5NYBwGrhIQf%2FUgC%2B5bjgk8S4167Q%2Bwtkf7OY4ps28johZKocnya4avOUpeg%2BydUVwcbkY%2FXlSGTwuDJa11G1Ztxj01NY5GBzAaIGQr2CT4yKt&X-Amz-Signature=04becc5f0c11abe9d0fbfb49a928cb4ce4b0e1e25a2a51beb484469ebacae79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY6TWOX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMiWRB7OKjr7f3ANIEicB%2Fc%2Fx8IODqDGRXNlfBb5JvQIgBG4q5GDr%2FwzLnBT90lag4M%2F32RhSXct%2FFndA8VHOBDkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRepAHLKYmA45GXgCrcAwdnuVWjRvQuLfBD%2FzbbJPT1EZDNlC7VmcLrf%2FoRNXA3HavyZJWs89zRh26Anev5qY9pyV%2BhLW3f25MfR6Ld1hfTn6RYJ0JttSn26CZBcQPIak6eQ6KSVjgJCNhInTaHGvGc6ZcpJQwBPtFYiYQyL1gRbTEN94ZfWaPgEufd6m%2BK50ME46okYyLic%2BbCImBX%2BRckFbrNzuSaxgZ5GTKUMRJj2MmJ5SQtwY6ldtSHECPpwEvmjBDlNzwObX%2FIvblXgiZNtMAwlhPSHg2KiQxnIEDl7XsR%2Bz7zie6ifuKkUpxp%2FujkysgmZxxKAIp%2FcH79ZoEZJjJF4JQ%2B5lGZK%2FqmzKYWeG6i%2FuMZdbH6Ag0vSpPVT%2B1nXHyw%2BwNqnVRpL4qcU0MzcvMoanD%2BEsF7Aw7r7bWYtg0F%2BuZ2h4JTc9ipb4umEo52NU41DODNJu8wsNvJlep27TUaJqoiPOWWp6HevA2JBTFh0aD3GSOZxqq%2FXoYm1gD0lhvbozxwgmsCyy6Vc%2Br4WVEhgXIaLW5AYLzYKhX2gWX2hul%2Bx7Ed0WF386kNORFlLCW%2BNkw5mPK3YRxfWT0ZBzP5oxAmTxmzuUSJYdUjjvVGSR5CnLfd6kxMsQHoyY81iSP%2FtL117Gt4MKzN2cIGOqUBtlPGrrNmDUwjMubVOoe02n%2BQ69BnSaGi9VJq2m%2BCXwuu1Z8GOxpo5bTQqI%2BD%2FcjQjMAJ1k0rhiM30D8vXzh5m%2FKYsdYGBpBOpl3LWVsVFdRJm1M5NYBwGrhIQf%2FUgC%2B5bjgk8S4167Q%2Bwtkf7OY4ps28johZKocnya4avOUpeg%2BydUVwcbkY%2FXlSGTwuDJa11G1Ztxj01NY5GBzAaIGQr2CT4yKt&X-Amz-Signature=ecde93094ad521b56ccb9e6b7c8cbc2e4dc7cbbae7f4c3477b11d7bfcc659c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY6TWOX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMiWRB7OKjr7f3ANIEicB%2Fc%2Fx8IODqDGRXNlfBb5JvQIgBG4q5GDr%2FwzLnBT90lag4M%2F32RhSXct%2FFndA8VHOBDkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRepAHLKYmA45GXgCrcAwdnuVWjRvQuLfBD%2FzbbJPT1EZDNlC7VmcLrf%2FoRNXA3HavyZJWs89zRh26Anev5qY9pyV%2BhLW3f25MfR6Ld1hfTn6RYJ0JttSn26CZBcQPIak6eQ6KSVjgJCNhInTaHGvGc6ZcpJQwBPtFYiYQyL1gRbTEN94ZfWaPgEufd6m%2BK50ME46okYyLic%2BbCImBX%2BRckFbrNzuSaxgZ5GTKUMRJj2MmJ5SQtwY6ldtSHECPpwEvmjBDlNzwObX%2FIvblXgiZNtMAwlhPSHg2KiQxnIEDl7XsR%2Bz7zie6ifuKkUpxp%2FujkysgmZxxKAIp%2FcH79ZoEZJjJF4JQ%2B5lGZK%2FqmzKYWeG6i%2FuMZdbH6Ag0vSpPVT%2B1nXHyw%2BwNqnVRpL4qcU0MzcvMoanD%2BEsF7Aw7r7bWYtg0F%2BuZ2h4JTc9ipb4umEo52NU41DODNJu8wsNvJlep27TUaJqoiPOWWp6HevA2JBTFh0aD3GSOZxqq%2FXoYm1gD0lhvbozxwgmsCyy6Vc%2Br4WVEhgXIaLW5AYLzYKhX2gWX2hul%2Bx7Ed0WF386kNORFlLCW%2BNkw5mPK3YRxfWT0ZBzP5oxAmTxmzuUSJYdUjjvVGSR5CnLfd6kxMsQHoyY81iSP%2FtL117Gt4MKzN2cIGOqUBtlPGrrNmDUwjMubVOoe02n%2BQ69BnSaGi9VJq2m%2BCXwuu1Z8GOxpo5bTQqI%2BD%2FcjQjMAJ1k0rhiM30D8vXzh5m%2FKYsdYGBpBOpl3LWVsVFdRJm1M5NYBwGrhIQf%2FUgC%2B5bjgk8S4167Q%2Bwtkf7OY4ps28johZKocnya4avOUpeg%2BydUVwcbkY%2FXlSGTwuDJa11G1Ztxj01NY5GBzAaIGQr2CT4yKt&X-Amz-Signature=b8faaad0555058acadf2a9c5627e65afffa85e2b74c6adc529baeefd51fb0486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY6TWOX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMiWRB7OKjr7f3ANIEicB%2Fc%2Fx8IODqDGRXNlfBb5JvQIgBG4q5GDr%2FwzLnBT90lag4M%2F32RhSXct%2FFndA8VHOBDkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRepAHLKYmA45GXgCrcAwdnuVWjRvQuLfBD%2FzbbJPT1EZDNlC7VmcLrf%2FoRNXA3HavyZJWs89zRh26Anev5qY9pyV%2BhLW3f25MfR6Ld1hfTn6RYJ0JttSn26CZBcQPIak6eQ6KSVjgJCNhInTaHGvGc6ZcpJQwBPtFYiYQyL1gRbTEN94ZfWaPgEufd6m%2BK50ME46okYyLic%2BbCImBX%2BRckFbrNzuSaxgZ5GTKUMRJj2MmJ5SQtwY6ldtSHECPpwEvmjBDlNzwObX%2FIvblXgiZNtMAwlhPSHg2KiQxnIEDl7XsR%2Bz7zie6ifuKkUpxp%2FujkysgmZxxKAIp%2FcH79ZoEZJjJF4JQ%2B5lGZK%2FqmzKYWeG6i%2FuMZdbH6Ag0vSpPVT%2B1nXHyw%2BwNqnVRpL4qcU0MzcvMoanD%2BEsF7Aw7r7bWYtg0F%2BuZ2h4JTc9ipb4umEo52NU41DODNJu8wsNvJlep27TUaJqoiPOWWp6HevA2JBTFh0aD3GSOZxqq%2FXoYm1gD0lhvbozxwgmsCyy6Vc%2Br4WVEhgXIaLW5AYLzYKhX2gWX2hul%2Bx7Ed0WF386kNORFlLCW%2BNkw5mPK3YRxfWT0ZBzP5oxAmTxmzuUSJYdUjjvVGSR5CnLfd6kxMsQHoyY81iSP%2FtL117Gt4MKzN2cIGOqUBtlPGrrNmDUwjMubVOoe02n%2BQ69BnSaGi9VJq2m%2BCXwuu1Z8GOxpo5bTQqI%2BD%2FcjQjMAJ1k0rhiM30D8vXzh5m%2FKYsdYGBpBOpl3LWVsVFdRJm1M5NYBwGrhIQf%2FUgC%2B5bjgk8S4167Q%2Bwtkf7OY4ps28johZKocnya4avOUpeg%2BydUVwcbkY%2FXlSGTwuDJa11G1Ztxj01NY5GBzAaIGQr2CT4yKt&X-Amz-Signature=44a9a1efd71206eb6d461538abf39dc8bd37809fbe8b0dabe3ab5a5e5030a647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY6TWOX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMiWRB7OKjr7f3ANIEicB%2Fc%2Fx8IODqDGRXNlfBb5JvQIgBG4q5GDr%2FwzLnBT90lag4M%2F32RhSXct%2FFndA8VHOBDkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRepAHLKYmA45GXgCrcAwdnuVWjRvQuLfBD%2FzbbJPT1EZDNlC7VmcLrf%2FoRNXA3HavyZJWs89zRh26Anev5qY9pyV%2BhLW3f25MfR6Ld1hfTn6RYJ0JttSn26CZBcQPIak6eQ6KSVjgJCNhInTaHGvGc6ZcpJQwBPtFYiYQyL1gRbTEN94ZfWaPgEufd6m%2BK50ME46okYyLic%2BbCImBX%2BRckFbrNzuSaxgZ5GTKUMRJj2MmJ5SQtwY6ldtSHECPpwEvmjBDlNzwObX%2FIvblXgiZNtMAwlhPSHg2KiQxnIEDl7XsR%2Bz7zie6ifuKkUpxp%2FujkysgmZxxKAIp%2FcH79ZoEZJjJF4JQ%2B5lGZK%2FqmzKYWeG6i%2FuMZdbH6Ag0vSpPVT%2B1nXHyw%2BwNqnVRpL4qcU0MzcvMoanD%2BEsF7Aw7r7bWYtg0F%2BuZ2h4JTc9ipb4umEo52NU41DODNJu8wsNvJlep27TUaJqoiPOWWp6HevA2JBTFh0aD3GSOZxqq%2FXoYm1gD0lhvbozxwgmsCyy6Vc%2Br4WVEhgXIaLW5AYLzYKhX2gWX2hul%2Bx7Ed0WF386kNORFlLCW%2BNkw5mPK3YRxfWT0ZBzP5oxAmTxmzuUSJYdUjjvVGSR5CnLfd6kxMsQHoyY81iSP%2FtL117Gt4MKzN2cIGOqUBtlPGrrNmDUwjMubVOoe02n%2BQ69BnSaGi9VJq2m%2BCXwuu1Z8GOxpo5bTQqI%2BD%2FcjQjMAJ1k0rhiM30D8vXzh5m%2FKYsdYGBpBOpl3LWVsVFdRJm1M5NYBwGrhIQf%2FUgC%2B5bjgk8S4167Q%2Bwtkf7OY4ps28johZKocnya4avOUpeg%2BydUVwcbkY%2FXlSGTwuDJa11G1Ztxj01NY5GBzAaIGQr2CT4yKt&X-Amz-Signature=d8f45819951e5235319904e3a703573bf54c3c09367d62e45b091fe7c8af37a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
