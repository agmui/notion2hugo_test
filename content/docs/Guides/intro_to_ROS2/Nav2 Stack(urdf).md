---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBI7TBZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOFYjiIQ4w58K2GoH8HAkWz%2BEl3zQc6SXelzV2e5l7QIgL2zFJCpsj4ygSCcxPejgWPZI1T56qUMOkMtNRMLVEB8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASigQk2DfRQg0E76SrcAxF%2B4oUh6hKFGG9RQBl66GFaqoq8%2BJi2AtfoKxQxNGT5xK0xWAG94qrDUSA8VP%2FRZJKgWUa7slmeoy%2BmFzjVgVQs18lGzScnRsmquo7hoEjGwLdN3aDHg87zHvPRfEEV4Ta7kjiOhrzRvVrml6YJNslaO6DwqFGicjIupaWzEhuWpQTuTobNRZpcWc5Y%2BavCaV%2B2tiD%2FvaJxuV6ThOimGIWYDD%2FoXgS6%2BmNfYfVzt%2FYrxe1Y5ptwb1lvlFBv7072xtKwAL2TurqyRAKF9bzxj%2Fdc73FCY%2B%2FBvUi%2Fzdq9rxLX7%2BNpMYYjG9ttTYZhWiOryFNhQgKg0ahKAzEuZpsCNcHxEn2pvaUVsoQCDtHPIAdmh7Oq69yN3RLhm%2BLAsx%2FjXmZyEz36gxFjBTcMUnGWZ29spruHvA3nrahxa2SnunZ4n%2FNAYm8%2Blce41CNF6B6xX7kTf%2FJXGhYCvaFIb%2FS%2BP2%2FAONPd9seL2moqXbepU7nVBA7YobWVcwQN%2BNaDYXOp%2FZdxRnCgE7%2BrJX1kNMDZOwgvtMefsbwhIfI4ubeq9QNVbgWM3Z7dRxlTQ5VeWRP7Hf7olQzgkej1gC39PocAKupXl4ROerMwkZNXS33Tygu%2Fz1JfT7ku3%2BHENMJ0MMSk7LwGOqUBXezdj8JSo%2BKKnc%2Bfa98%2FBatT8w8c7nqJi%2FRXZ%2FLs%2FEUbjfiBZyix0jZXF0G4kpuZ00hZ%2FhykZvCrO9eNrraXCXvpL9rYw1z7FypKdAJvkfMx5JXWn1Wl6JDMN0d0c6MYsQOxppRI7sLGoh83AH9ElAHCum6slgMd%2BOO%2BzRcuE69QqpV5OZsPwuxln%2B4jRrwaW9U99%2F6gw2kbsaq98k04v0pwT4Q0&X-Amz-Signature=1f7fe273c67c90095b81b2cdfe3e920dbf2d07114625e3ff2bfdd5cdb370eb1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBI7TBZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOFYjiIQ4w58K2GoH8HAkWz%2BEl3zQc6SXelzV2e5l7QIgL2zFJCpsj4ygSCcxPejgWPZI1T56qUMOkMtNRMLVEB8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASigQk2DfRQg0E76SrcAxF%2B4oUh6hKFGG9RQBl66GFaqoq8%2BJi2AtfoKxQxNGT5xK0xWAG94qrDUSA8VP%2FRZJKgWUa7slmeoy%2BmFzjVgVQs18lGzScnRsmquo7hoEjGwLdN3aDHg87zHvPRfEEV4Ta7kjiOhrzRvVrml6YJNslaO6DwqFGicjIupaWzEhuWpQTuTobNRZpcWc5Y%2BavCaV%2B2tiD%2FvaJxuV6ThOimGIWYDD%2FoXgS6%2BmNfYfVzt%2FYrxe1Y5ptwb1lvlFBv7072xtKwAL2TurqyRAKF9bzxj%2Fdc73FCY%2B%2FBvUi%2Fzdq9rxLX7%2BNpMYYjG9ttTYZhWiOryFNhQgKg0ahKAzEuZpsCNcHxEn2pvaUVsoQCDtHPIAdmh7Oq69yN3RLhm%2BLAsx%2FjXmZyEz36gxFjBTcMUnGWZ29spruHvA3nrahxa2SnunZ4n%2FNAYm8%2Blce41CNF6B6xX7kTf%2FJXGhYCvaFIb%2FS%2BP2%2FAONPd9seL2moqXbepU7nVBA7YobWVcwQN%2BNaDYXOp%2FZdxRnCgE7%2BrJX1kNMDZOwgvtMefsbwhIfI4ubeq9QNVbgWM3Z7dRxlTQ5VeWRP7Hf7olQzgkej1gC39PocAKupXl4ROerMwkZNXS33Tygu%2Fz1JfT7ku3%2BHENMJ0MMSk7LwGOqUBXezdj8JSo%2BKKnc%2Bfa98%2FBatT8w8c7nqJi%2FRXZ%2FLs%2FEUbjfiBZyix0jZXF0G4kpuZ00hZ%2FhykZvCrO9eNrraXCXvpL9rYw1z7FypKdAJvkfMx5JXWn1Wl6JDMN0d0c6MYsQOxppRI7sLGoh83AH9ElAHCum6slgMd%2BOO%2BzRcuE69QqpV5OZsPwuxln%2B4jRrwaW9U99%2F6gw2kbsaq98k04v0pwT4Q0&X-Amz-Signature=652d8b7b56ed003413a050921515b4f27a8ae69acd13c12c91b2e34e628454c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBI7TBZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOFYjiIQ4w58K2GoH8HAkWz%2BEl3zQc6SXelzV2e5l7QIgL2zFJCpsj4ygSCcxPejgWPZI1T56qUMOkMtNRMLVEB8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASigQk2DfRQg0E76SrcAxF%2B4oUh6hKFGG9RQBl66GFaqoq8%2BJi2AtfoKxQxNGT5xK0xWAG94qrDUSA8VP%2FRZJKgWUa7slmeoy%2BmFzjVgVQs18lGzScnRsmquo7hoEjGwLdN3aDHg87zHvPRfEEV4Ta7kjiOhrzRvVrml6YJNslaO6DwqFGicjIupaWzEhuWpQTuTobNRZpcWc5Y%2BavCaV%2B2tiD%2FvaJxuV6ThOimGIWYDD%2FoXgS6%2BmNfYfVzt%2FYrxe1Y5ptwb1lvlFBv7072xtKwAL2TurqyRAKF9bzxj%2Fdc73FCY%2B%2FBvUi%2Fzdq9rxLX7%2BNpMYYjG9ttTYZhWiOryFNhQgKg0ahKAzEuZpsCNcHxEn2pvaUVsoQCDtHPIAdmh7Oq69yN3RLhm%2BLAsx%2FjXmZyEz36gxFjBTcMUnGWZ29spruHvA3nrahxa2SnunZ4n%2FNAYm8%2Blce41CNF6B6xX7kTf%2FJXGhYCvaFIb%2FS%2BP2%2FAONPd9seL2moqXbepU7nVBA7YobWVcwQN%2BNaDYXOp%2FZdxRnCgE7%2BrJX1kNMDZOwgvtMefsbwhIfI4ubeq9QNVbgWM3Z7dRxlTQ5VeWRP7Hf7olQzgkej1gC39PocAKupXl4ROerMwkZNXS33Tygu%2Fz1JfT7ku3%2BHENMJ0MMSk7LwGOqUBXezdj8JSo%2BKKnc%2Bfa98%2FBatT8w8c7nqJi%2FRXZ%2FLs%2FEUbjfiBZyix0jZXF0G4kpuZ00hZ%2FhykZvCrO9eNrraXCXvpL9rYw1z7FypKdAJvkfMx5JXWn1Wl6JDMN0d0c6MYsQOxppRI7sLGoh83AH9ElAHCum6slgMd%2BOO%2BzRcuE69QqpV5OZsPwuxln%2B4jRrwaW9U99%2F6gw2kbsaq98k04v0pwT4Q0&X-Amz-Signature=8561247f508c4fca5dca95be4c013b757275763e5064e3bb87de7401b2942ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBI7TBZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOFYjiIQ4w58K2GoH8HAkWz%2BEl3zQc6SXelzV2e5l7QIgL2zFJCpsj4ygSCcxPejgWPZI1T56qUMOkMtNRMLVEB8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASigQk2DfRQg0E76SrcAxF%2B4oUh6hKFGG9RQBl66GFaqoq8%2BJi2AtfoKxQxNGT5xK0xWAG94qrDUSA8VP%2FRZJKgWUa7slmeoy%2BmFzjVgVQs18lGzScnRsmquo7hoEjGwLdN3aDHg87zHvPRfEEV4Ta7kjiOhrzRvVrml6YJNslaO6DwqFGicjIupaWzEhuWpQTuTobNRZpcWc5Y%2BavCaV%2B2tiD%2FvaJxuV6ThOimGIWYDD%2FoXgS6%2BmNfYfVzt%2FYrxe1Y5ptwb1lvlFBv7072xtKwAL2TurqyRAKF9bzxj%2Fdc73FCY%2B%2FBvUi%2Fzdq9rxLX7%2BNpMYYjG9ttTYZhWiOryFNhQgKg0ahKAzEuZpsCNcHxEn2pvaUVsoQCDtHPIAdmh7Oq69yN3RLhm%2BLAsx%2FjXmZyEz36gxFjBTcMUnGWZ29spruHvA3nrahxa2SnunZ4n%2FNAYm8%2Blce41CNF6B6xX7kTf%2FJXGhYCvaFIb%2FS%2BP2%2FAONPd9seL2moqXbepU7nVBA7YobWVcwQN%2BNaDYXOp%2FZdxRnCgE7%2BrJX1kNMDZOwgvtMefsbwhIfI4ubeq9QNVbgWM3Z7dRxlTQ5VeWRP7Hf7olQzgkej1gC39PocAKupXl4ROerMwkZNXS33Tygu%2Fz1JfT7ku3%2BHENMJ0MMSk7LwGOqUBXezdj8JSo%2BKKnc%2Bfa98%2FBatT8w8c7nqJi%2FRXZ%2FLs%2FEUbjfiBZyix0jZXF0G4kpuZ00hZ%2FhykZvCrO9eNrraXCXvpL9rYw1z7FypKdAJvkfMx5JXWn1Wl6JDMN0d0c6MYsQOxppRI7sLGoh83AH9ElAHCum6slgMd%2BOO%2BzRcuE69QqpV5OZsPwuxln%2B4jRrwaW9U99%2F6gw2kbsaq98k04v0pwT4Q0&X-Amz-Signature=d237947497e7c20d9ea590d103f44871efe4cf3ae2af89a6257c286558ac1288&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBI7TBZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOFYjiIQ4w58K2GoH8HAkWz%2BEl3zQc6SXelzV2e5l7QIgL2zFJCpsj4ygSCcxPejgWPZI1T56qUMOkMtNRMLVEB8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASigQk2DfRQg0E76SrcAxF%2B4oUh6hKFGG9RQBl66GFaqoq8%2BJi2AtfoKxQxNGT5xK0xWAG94qrDUSA8VP%2FRZJKgWUa7slmeoy%2BmFzjVgVQs18lGzScnRsmquo7hoEjGwLdN3aDHg87zHvPRfEEV4Ta7kjiOhrzRvVrml6YJNslaO6DwqFGicjIupaWzEhuWpQTuTobNRZpcWc5Y%2BavCaV%2B2tiD%2FvaJxuV6ThOimGIWYDD%2FoXgS6%2BmNfYfVzt%2FYrxe1Y5ptwb1lvlFBv7072xtKwAL2TurqyRAKF9bzxj%2Fdc73FCY%2B%2FBvUi%2Fzdq9rxLX7%2BNpMYYjG9ttTYZhWiOryFNhQgKg0ahKAzEuZpsCNcHxEn2pvaUVsoQCDtHPIAdmh7Oq69yN3RLhm%2BLAsx%2FjXmZyEz36gxFjBTcMUnGWZ29spruHvA3nrahxa2SnunZ4n%2FNAYm8%2Blce41CNF6B6xX7kTf%2FJXGhYCvaFIb%2FS%2BP2%2FAONPd9seL2moqXbepU7nVBA7YobWVcwQN%2BNaDYXOp%2FZdxRnCgE7%2BrJX1kNMDZOwgvtMefsbwhIfI4ubeq9QNVbgWM3Z7dRxlTQ5VeWRP7Hf7olQzgkej1gC39PocAKupXl4ROerMwkZNXS33Tygu%2Fz1JfT7ku3%2BHENMJ0MMSk7LwGOqUBXezdj8JSo%2BKKnc%2Bfa98%2FBatT8w8c7nqJi%2FRXZ%2FLs%2FEUbjfiBZyix0jZXF0G4kpuZ00hZ%2FhykZvCrO9eNrraXCXvpL9rYw1z7FypKdAJvkfMx5JXWn1Wl6JDMN0d0c6MYsQOxppRI7sLGoh83AH9ElAHCum6slgMd%2BOO%2BzRcuE69QqpV5OZsPwuxln%2B4jRrwaW9U99%2F6gw2kbsaq98k04v0pwT4Q0&X-Amz-Signature=fa8558efb1135f0d85004365cb3c56d09c8064141e2b231afc4e1853cc71b916&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBI7TBZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOFYjiIQ4w58K2GoH8HAkWz%2BEl3zQc6SXelzV2e5l7QIgL2zFJCpsj4ygSCcxPejgWPZI1T56qUMOkMtNRMLVEB8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASigQk2DfRQg0E76SrcAxF%2B4oUh6hKFGG9RQBl66GFaqoq8%2BJi2AtfoKxQxNGT5xK0xWAG94qrDUSA8VP%2FRZJKgWUa7slmeoy%2BmFzjVgVQs18lGzScnRsmquo7hoEjGwLdN3aDHg87zHvPRfEEV4Ta7kjiOhrzRvVrml6YJNslaO6DwqFGicjIupaWzEhuWpQTuTobNRZpcWc5Y%2BavCaV%2B2tiD%2FvaJxuV6ThOimGIWYDD%2FoXgS6%2BmNfYfVzt%2FYrxe1Y5ptwb1lvlFBv7072xtKwAL2TurqyRAKF9bzxj%2Fdc73FCY%2B%2FBvUi%2Fzdq9rxLX7%2BNpMYYjG9ttTYZhWiOryFNhQgKg0ahKAzEuZpsCNcHxEn2pvaUVsoQCDtHPIAdmh7Oq69yN3RLhm%2BLAsx%2FjXmZyEz36gxFjBTcMUnGWZ29spruHvA3nrahxa2SnunZ4n%2FNAYm8%2Blce41CNF6B6xX7kTf%2FJXGhYCvaFIb%2FS%2BP2%2FAONPd9seL2moqXbepU7nVBA7YobWVcwQN%2BNaDYXOp%2FZdxRnCgE7%2BrJX1kNMDZOwgvtMefsbwhIfI4ubeq9QNVbgWM3Z7dRxlTQ5VeWRP7Hf7olQzgkej1gC39PocAKupXl4ROerMwkZNXS33Tygu%2Fz1JfT7ku3%2BHENMJ0MMSk7LwGOqUBXezdj8JSo%2BKKnc%2Bfa98%2FBatT8w8c7nqJi%2FRXZ%2FLs%2FEUbjfiBZyix0jZXF0G4kpuZ00hZ%2FhykZvCrO9eNrraXCXvpL9rYw1z7FypKdAJvkfMx5JXWn1Wl6JDMN0d0c6MYsQOxppRI7sLGoh83AH9ElAHCum6slgMd%2BOO%2BzRcuE69QqpV5OZsPwuxln%2B4jRrwaW9U99%2F6gw2kbsaq98k04v0pwT4Q0&X-Amz-Signature=d67e6f14ddd57521759a5ed057d15e815d03a8c4e23f0883ed418cb7bd5b2bc8&X-Amz-SignedHeaders=host&x-id=GetObject)
