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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757UBT2L%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjzhks6XdSXCabiaH92m%2Fk%2Fk9oQyHPYBGWSueZg1oZaAiAzOq2XOXXtpRt1Rk0zY4lO6H%2BMIJ8VJPqFNdI6DRnanSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMrBGQoAfOGTG9TtneKtwDOtp6fHkI4XBkNDok8DgTovEy11bzoYHZHWWFyh5iAb%2BcjtnJ11ia6x5Cxj2OejsVeBroyBLNMBy6bQ3SP1mDS9W9AKOPswv3UXzLOsBGMOTk74D%2FuWdMAYse0i9X7S3XMYtTCkWLUDt53m4E53CvapfZtlHpZHjC64TGXNcQr6Zm%2B1SMHYj%2Bm%2F8y5wb9TakGIeZOVdnpLtmOfiP9KSTaVGz882Oa8tfII0E2KCOrZejQJr%2FpMH0fycc6bRqQmRDyfQVWq4peftDUSsL4Yv4nGPoV9vN%2FPW5qb0%2B9SSH%2Ba762abgPisubBf%2FEWjc7G2aDhWpMODmtFGKEOahL7%2BrSqLgpvizOeq9u7gdQFYUmz1kjrIO1QpEI5fi8N7EAWpB8msFZRT%2Ftp5x8sF6jWMAIihWFhSnlnDPPBG5jLaC5T%2Bmox1BEKEyGDLP7CYkK6MmCZ%2FBst5dAD47pKDx%2Fd3gKTNsXoCTdiIHlSixrLwFP8l2rhCIvwWTxP9OC7M8CjRP5vk7h3Wtt3T5BgFWiADS8iUIndOzpmMD5yQu6xUlf%2Fk7khjq%2Ffdb9SRr9i1QjEmNezTj0M61t4DsILbMuQZWHMe%2Fvb3wQHWPZDl%2BIjM7zvat6PUh0yQrm%2F8lmye0w6v3FvQY6pgHlS7PJJryVkYjwBEiBRKrQP8sBK0XLSeygOS%2Bpb4Reirp2OEdeDrioVxMBI4A%2BNabFTx%2FCn4XPgrm6Ixkrp1bhHRJdvqhEx1UEpPMONXbku9bxF6F5jxqJSQg0sedjtcVQCSDkXkMBxPtOeKCYZn15NyJUjKHwHaVax8HZC13tU5ldb%2BB%2BJXiE7q0LYmdIR%2FxGv12uPS4rKADqoGDd3HnPHRNylGy5&X-Amz-Signature=a57c04ff8cd89d3f9411c69e92137c003fe8c117029a22023c08db6fc69e3a77&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757UBT2L%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjzhks6XdSXCabiaH92m%2Fk%2Fk9oQyHPYBGWSueZg1oZaAiAzOq2XOXXtpRt1Rk0zY4lO6H%2BMIJ8VJPqFNdI6DRnanSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMrBGQoAfOGTG9TtneKtwDOtp6fHkI4XBkNDok8DgTovEy11bzoYHZHWWFyh5iAb%2BcjtnJ11ia6x5Cxj2OejsVeBroyBLNMBy6bQ3SP1mDS9W9AKOPswv3UXzLOsBGMOTk74D%2FuWdMAYse0i9X7S3XMYtTCkWLUDt53m4E53CvapfZtlHpZHjC64TGXNcQr6Zm%2B1SMHYj%2Bm%2F8y5wb9TakGIeZOVdnpLtmOfiP9KSTaVGz882Oa8tfII0E2KCOrZejQJr%2FpMH0fycc6bRqQmRDyfQVWq4peftDUSsL4Yv4nGPoV9vN%2FPW5qb0%2B9SSH%2Ba762abgPisubBf%2FEWjc7G2aDhWpMODmtFGKEOahL7%2BrSqLgpvizOeq9u7gdQFYUmz1kjrIO1QpEI5fi8N7EAWpB8msFZRT%2Ftp5x8sF6jWMAIihWFhSnlnDPPBG5jLaC5T%2Bmox1BEKEyGDLP7CYkK6MmCZ%2FBst5dAD47pKDx%2Fd3gKTNsXoCTdiIHlSixrLwFP8l2rhCIvwWTxP9OC7M8CjRP5vk7h3Wtt3T5BgFWiADS8iUIndOzpmMD5yQu6xUlf%2Fk7khjq%2Ffdb9SRr9i1QjEmNezTj0M61t4DsILbMuQZWHMe%2Fvb3wQHWPZDl%2BIjM7zvat6PUh0yQrm%2F8lmye0w6v3FvQY6pgHlS7PJJryVkYjwBEiBRKrQP8sBK0XLSeygOS%2Bpb4Reirp2OEdeDrioVxMBI4A%2BNabFTx%2FCn4XPgrm6Ixkrp1bhHRJdvqhEx1UEpPMONXbku9bxF6F5jxqJSQg0sedjtcVQCSDkXkMBxPtOeKCYZn15NyJUjKHwHaVax8HZC13tU5ldb%2BB%2BJXiE7q0LYmdIR%2FxGv12uPS4rKADqoGDd3HnPHRNylGy5&X-Amz-Signature=4cc9909bed52233f315394c2bc642b95b311a995b3abd535077ca5145bd5aa46&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757UBT2L%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjzhks6XdSXCabiaH92m%2Fk%2Fk9oQyHPYBGWSueZg1oZaAiAzOq2XOXXtpRt1Rk0zY4lO6H%2BMIJ8VJPqFNdI6DRnanSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMrBGQoAfOGTG9TtneKtwDOtp6fHkI4XBkNDok8DgTovEy11bzoYHZHWWFyh5iAb%2BcjtnJ11ia6x5Cxj2OejsVeBroyBLNMBy6bQ3SP1mDS9W9AKOPswv3UXzLOsBGMOTk74D%2FuWdMAYse0i9X7S3XMYtTCkWLUDt53m4E53CvapfZtlHpZHjC64TGXNcQr6Zm%2B1SMHYj%2Bm%2F8y5wb9TakGIeZOVdnpLtmOfiP9KSTaVGz882Oa8tfII0E2KCOrZejQJr%2FpMH0fycc6bRqQmRDyfQVWq4peftDUSsL4Yv4nGPoV9vN%2FPW5qb0%2B9SSH%2Ba762abgPisubBf%2FEWjc7G2aDhWpMODmtFGKEOahL7%2BrSqLgpvizOeq9u7gdQFYUmz1kjrIO1QpEI5fi8N7EAWpB8msFZRT%2Ftp5x8sF6jWMAIihWFhSnlnDPPBG5jLaC5T%2Bmox1BEKEyGDLP7CYkK6MmCZ%2FBst5dAD47pKDx%2Fd3gKTNsXoCTdiIHlSixrLwFP8l2rhCIvwWTxP9OC7M8CjRP5vk7h3Wtt3T5BgFWiADS8iUIndOzpmMD5yQu6xUlf%2Fk7khjq%2Ffdb9SRr9i1QjEmNezTj0M61t4DsILbMuQZWHMe%2Fvb3wQHWPZDl%2BIjM7zvat6PUh0yQrm%2F8lmye0w6v3FvQY6pgHlS7PJJryVkYjwBEiBRKrQP8sBK0XLSeygOS%2Bpb4Reirp2OEdeDrioVxMBI4A%2BNabFTx%2FCn4XPgrm6Ixkrp1bhHRJdvqhEx1UEpPMONXbku9bxF6F5jxqJSQg0sedjtcVQCSDkXkMBxPtOeKCYZn15NyJUjKHwHaVax8HZC13tU5ldb%2BB%2BJXiE7q0LYmdIR%2FxGv12uPS4rKADqoGDd3HnPHRNylGy5&X-Amz-Signature=8aafc40d74460ddbb5cf2ca58c6f0fc4a48e258680209f21481ae6f16cc94fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757UBT2L%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjzhks6XdSXCabiaH92m%2Fk%2Fk9oQyHPYBGWSueZg1oZaAiAzOq2XOXXtpRt1Rk0zY4lO6H%2BMIJ8VJPqFNdI6DRnanSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMrBGQoAfOGTG9TtneKtwDOtp6fHkI4XBkNDok8DgTovEy11bzoYHZHWWFyh5iAb%2BcjtnJ11ia6x5Cxj2OejsVeBroyBLNMBy6bQ3SP1mDS9W9AKOPswv3UXzLOsBGMOTk74D%2FuWdMAYse0i9X7S3XMYtTCkWLUDt53m4E53CvapfZtlHpZHjC64TGXNcQr6Zm%2B1SMHYj%2Bm%2F8y5wb9TakGIeZOVdnpLtmOfiP9KSTaVGz882Oa8tfII0E2KCOrZejQJr%2FpMH0fycc6bRqQmRDyfQVWq4peftDUSsL4Yv4nGPoV9vN%2FPW5qb0%2B9SSH%2Ba762abgPisubBf%2FEWjc7G2aDhWpMODmtFGKEOahL7%2BrSqLgpvizOeq9u7gdQFYUmz1kjrIO1QpEI5fi8N7EAWpB8msFZRT%2Ftp5x8sF6jWMAIihWFhSnlnDPPBG5jLaC5T%2Bmox1BEKEyGDLP7CYkK6MmCZ%2FBst5dAD47pKDx%2Fd3gKTNsXoCTdiIHlSixrLwFP8l2rhCIvwWTxP9OC7M8CjRP5vk7h3Wtt3T5BgFWiADS8iUIndOzpmMD5yQu6xUlf%2Fk7khjq%2Ffdb9SRr9i1QjEmNezTj0M61t4DsILbMuQZWHMe%2Fvb3wQHWPZDl%2BIjM7zvat6PUh0yQrm%2F8lmye0w6v3FvQY6pgHlS7PJJryVkYjwBEiBRKrQP8sBK0XLSeygOS%2Bpb4Reirp2OEdeDrioVxMBI4A%2BNabFTx%2FCn4XPgrm6Ixkrp1bhHRJdvqhEx1UEpPMONXbku9bxF6F5jxqJSQg0sedjtcVQCSDkXkMBxPtOeKCYZn15NyJUjKHwHaVax8HZC13tU5ldb%2BB%2BJXiE7q0LYmdIR%2FxGv12uPS4rKADqoGDd3HnPHRNylGy5&X-Amz-Signature=7aebaebfcac0ff299fda76e76c82cf5369b55fa082a4ccfa259480bb9ddb5116&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757UBT2L%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjzhks6XdSXCabiaH92m%2Fk%2Fk9oQyHPYBGWSueZg1oZaAiAzOq2XOXXtpRt1Rk0zY4lO6H%2BMIJ8VJPqFNdI6DRnanSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMrBGQoAfOGTG9TtneKtwDOtp6fHkI4XBkNDok8DgTovEy11bzoYHZHWWFyh5iAb%2BcjtnJ11ia6x5Cxj2OejsVeBroyBLNMBy6bQ3SP1mDS9W9AKOPswv3UXzLOsBGMOTk74D%2FuWdMAYse0i9X7S3XMYtTCkWLUDt53m4E53CvapfZtlHpZHjC64TGXNcQr6Zm%2B1SMHYj%2Bm%2F8y5wb9TakGIeZOVdnpLtmOfiP9KSTaVGz882Oa8tfII0E2KCOrZejQJr%2FpMH0fycc6bRqQmRDyfQVWq4peftDUSsL4Yv4nGPoV9vN%2FPW5qb0%2B9SSH%2Ba762abgPisubBf%2FEWjc7G2aDhWpMODmtFGKEOahL7%2BrSqLgpvizOeq9u7gdQFYUmz1kjrIO1QpEI5fi8N7EAWpB8msFZRT%2Ftp5x8sF6jWMAIihWFhSnlnDPPBG5jLaC5T%2Bmox1BEKEyGDLP7CYkK6MmCZ%2FBst5dAD47pKDx%2Fd3gKTNsXoCTdiIHlSixrLwFP8l2rhCIvwWTxP9OC7M8CjRP5vk7h3Wtt3T5BgFWiADS8iUIndOzpmMD5yQu6xUlf%2Fk7khjq%2Ffdb9SRr9i1QjEmNezTj0M61t4DsILbMuQZWHMe%2Fvb3wQHWPZDl%2BIjM7zvat6PUh0yQrm%2F8lmye0w6v3FvQY6pgHlS7PJJryVkYjwBEiBRKrQP8sBK0XLSeygOS%2Bpb4Reirp2OEdeDrioVxMBI4A%2BNabFTx%2FCn4XPgrm6Ixkrp1bhHRJdvqhEx1UEpPMONXbku9bxF6F5jxqJSQg0sedjtcVQCSDkXkMBxPtOeKCYZn15NyJUjKHwHaVax8HZC13tU5ldb%2BB%2BJXiE7q0LYmdIR%2FxGv12uPS4rKADqoGDd3HnPHRNylGy5&X-Amz-Signature=6755791afb0f49261cea00c6710dd3261744f2ad5d05de740fd66af4e6f19ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757UBT2L%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjzhks6XdSXCabiaH92m%2Fk%2Fk9oQyHPYBGWSueZg1oZaAiAzOq2XOXXtpRt1Rk0zY4lO6H%2BMIJ8VJPqFNdI6DRnanSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMrBGQoAfOGTG9TtneKtwDOtp6fHkI4XBkNDok8DgTovEy11bzoYHZHWWFyh5iAb%2BcjtnJ11ia6x5Cxj2OejsVeBroyBLNMBy6bQ3SP1mDS9W9AKOPswv3UXzLOsBGMOTk74D%2FuWdMAYse0i9X7S3XMYtTCkWLUDt53m4E53CvapfZtlHpZHjC64TGXNcQr6Zm%2B1SMHYj%2Bm%2F8y5wb9TakGIeZOVdnpLtmOfiP9KSTaVGz882Oa8tfII0E2KCOrZejQJr%2FpMH0fycc6bRqQmRDyfQVWq4peftDUSsL4Yv4nGPoV9vN%2FPW5qb0%2B9SSH%2Ba762abgPisubBf%2FEWjc7G2aDhWpMODmtFGKEOahL7%2BrSqLgpvizOeq9u7gdQFYUmz1kjrIO1QpEI5fi8N7EAWpB8msFZRT%2Ftp5x8sF6jWMAIihWFhSnlnDPPBG5jLaC5T%2Bmox1BEKEyGDLP7CYkK6MmCZ%2FBst5dAD47pKDx%2Fd3gKTNsXoCTdiIHlSixrLwFP8l2rhCIvwWTxP9OC7M8CjRP5vk7h3Wtt3T5BgFWiADS8iUIndOzpmMD5yQu6xUlf%2Fk7khjq%2Ffdb9SRr9i1QjEmNezTj0M61t4DsILbMuQZWHMe%2Fvb3wQHWPZDl%2BIjM7zvat6PUh0yQrm%2F8lmye0w6v3FvQY6pgHlS7PJJryVkYjwBEiBRKrQP8sBK0XLSeygOS%2Bpb4Reirp2OEdeDrioVxMBI4A%2BNabFTx%2FCn4XPgrm6Ixkrp1bhHRJdvqhEx1UEpPMONXbku9bxF6F5jxqJSQg0sedjtcVQCSDkXkMBxPtOeKCYZn15NyJUjKHwHaVax8HZC13tU5ldb%2BB%2BJXiE7q0LYmdIR%2FxGv12uPS4rKADqoGDd3HnPHRNylGy5&X-Amz-Signature=dd32380eef56edd83561cec6f03eeb0155fe683db3389d99cd9870c0564b8d60&X-Amz-SignedHeaders=host&x-id=GetObject)
