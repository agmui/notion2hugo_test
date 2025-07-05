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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UWSNPZD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFrxOLgwKjGvXGdzPspqBtjTd%2F%2FIdN9AwbMhBqQYXkqgIgUhZZ10W%2BoHaIBu5XP4Q0TS0HGaE%2FS35GgyngTxycbHsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEhXUGyEDy1GRNbnryrcAxID99Dv4QRpEwld6Kp7QolPU2uMDJBnXpnRGRL7WOlaJvfaon1UjGvH06RY2cKXYPXGrXoy0xYUkoP9Pgy3WBu4INF2CKiu4It631NIXPuXq1CRjofimOKgzHqf%2BEzRlLCS4hPWukvHfcMiQk5BSFKNlXxKNTqMoc5RH7%2BY%2Fs%2BY58mAYLrp1aIYL3eIK4S3OPQy6hAgb5XMW5SlYyngzKbpVqJ%2F%2BJpSfrZEb8cP3fZ8Mu5t8%2BCLRpXnmZ5UgVdZfm3CuBeJBIYXHWwS6%2BAUhhIPqUSB5A8BRlcmk79%2BnTNuW1riU6jjZCXWcCpomZ9iZObL7fr3%2BWbpHYbr%2B9PwBgcJqOWK3uqy%2BCm2TWwo664nc98hCFvy%2FUW7NxFyeUBEPVpIkdtRbXoRxDuGpy31DRgrAPyqACMEpBVuYJ6%2FIBGS3b2FRbp17O%2BMyb9%2BN3I6U9aKEI6MKkNC5HFOCEvc6CqCVvFCYxiSXMt%2F66b%2BEQdxDVxWwN9ItBmpd7a8EnjP76h6IYiFx5duXwrrCKjnxEQBb2YOtRDRp2Wn7XrwWYaKIlNMfeu6v6Q3oKZyJabc6C910pGPPhIeqc7F9%2Fhfdrr6Zz3bk8bl4BCZfJrEIiI7ra%2Bb3ISWdlXlEEXvMMCNosMGOqUBOe%2BYmT%2BIOGqtvIm13RlUD9XswYiUKCCIddhuVzqsOzNB3PK1IEBM10byOXlSrML8m5QA4gsfOX2JAEVMm2lXfz9p%2Fl8VrSs8ql%2FAk5BXWG2bH5Z2vNisvt2DPrwmgkflJ1xbAEujBcIfKbjOzKfJfPYZyx5wYawKKW6XmC44YJSMURQQ95KtzqvEeSyjnNI9ncJ9jZixR8EUtaCvfcT8aeBVAj9T&X-Amz-Signature=3a4823d406a656dade81c4a8c410b46d2417de3b424b5eab2a683f6c2a3a527d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UWSNPZD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFrxOLgwKjGvXGdzPspqBtjTd%2F%2FIdN9AwbMhBqQYXkqgIgUhZZ10W%2BoHaIBu5XP4Q0TS0HGaE%2FS35GgyngTxycbHsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEhXUGyEDy1GRNbnryrcAxID99Dv4QRpEwld6Kp7QolPU2uMDJBnXpnRGRL7WOlaJvfaon1UjGvH06RY2cKXYPXGrXoy0xYUkoP9Pgy3WBu4INF2CKiu4It631NIXPuXq1CRjofimOKgzHqf%2BEzRlLCS4hPWukvHfcMiQk5BSFKNlXxKNTqMoc5RH7%2BY%2Fs%2BY58mAYLrp1aIYL3eIK4S3OPQy6hAgb5XMW5SlYyngzKbpVqJ%2F%2BJpSfrZEb8cP3fZ8Mu5t8%2BCLRpXnmZ5UgVdZfm3CuBeJBIYXHWwS6%2BAUhhIPqUSB5A8BRlcmk79%2BnTNuW1riU6jjZCXWcCpomZ9iZObL7fr3%2BWbpHYbr%2B9PwBgcJqOWK3uqy%2BCm2TWwo664nc98hCFvy%2FUW7NxFyeUBEPVpIkdtRbXoRxDuGpy31DRgrAPyqACMEpBVuYJ6%2FIBGS3b2FRbp17O%2BMyb9%2BN3I6U9aKEI6MKkNC5HFOCEvc6CqCVvFCYxiSXMt%2F66b%2BEQdxDVxWwN9ItBmpd7a8EnjP76h6IYiFx5duXwrrCKjnxEQBb2YOtRDRp2Wn7XrwWYaKIlNMfeu6v6Q3oKZyJabc6C910pGPPhIeqc7F9%2Fhfdrr6Zz3bk8bl4BCZfJrEIiI7ra%2Bb3ISWdlXlEEXvMMCNosMGOqUBOe%2BYmT%2BIOGqtvIm13RlUD9XswYiUKCCIddhuVzqsOzNB3PK1IEBM10byOXlSrML8m5QA4gsfOX2JAEVMm2lXfz9p%2Fl8VrSs8ql%2FAk5BXWG2bH5Z2vNisvt2DPrwmgkflJ1xbAEujBcIfKbjOzKfJfPYZyx5wYawKKW6XmC44YJSMURQQ95KtzqvEeSyjnNI9ncJ9jZixR8EUtaCvfcT8aeBVAj9T&X-Amz-Signature=c2dbe21d814b6bb973c8f45d55885e75d86363f36b7c878ccda14ce758115da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UWSNPZD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFrxOLgwKjGvXGdzPspqBtjTd%2F%2FIdN9AwbMhBqQYXkqgIgUhZZ10W%2BoHaIBu5XP4Q0TS0HGaE%2FS35GgyngTxycbHsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEhXUGyEDy1GRNbnryrcAxID99Dv4QRpEwld6Kp7QolPU2uMDJBnXpnRGRL7WOlaJvfaon1UjGvH06RY2cKXYPXGrXoy0xYUkoP9Pgy3WBu4INF2CKiu4It631NIXPuXq1CRjofimOKgzHqf%2BEzRlLCS4hPWukvHfcMiQk5BSFKNlXxKNTqMoc5RH7%2BY%2Fs%2BY58mAYLrp1aIYL3eIK4S3OPQy6hAgb5XMW5SlYyngzKbpVqJ%2F%2BJpSfrZEb8cP3fZ8Mu5t8%2BCLRpXnmZ5UgVdZfm3CuBeJBIYXHWwS6%2BAUhhIPqUSB5A8BRlcmk79%2BnTNuW1riU6jjZCXWcCpomZ9iZObL7fr3%2BWbpHYbr%2B9PwBgcJqOWK3uqy%2BCm2TWwo664nc98hCFvy%2FUW7NxFyeUBEPVpIkdtRbXoRxDuGpy31DRgrAPyqACMEpBVuYJ6%2FIBGS3b2FRbp17O%2BMyb9%2BN3I6U9aKEI6MKkNC5HFOCEvc6CqCVvFCYxiSXMt%2F66b%2BEQdxDVxWwN9ItBmpd7a8EnjP76h6IYiFx5duXwrrCKjnxEQBb2YOtRDRp2Wn7XrwWYaKIlNMfeu6v6Q3oKZyJabc6C910pGPPhIeqc7F9%2Fhfdrr6Zz3bk8bl4BCZfJrEIiI7ra%2Bb3ISWdlXlEEXvMMCNosMGOqUBOe%2BYmT%2BIOGqtvIm13RlUD9XswYiUKCCIddhuVzqsOzNB3PK1IEBM10byOXlSrML8m5QA4gsfOX2JAEVMm2lXfz9p%2Fl8VrSs8ql%2FAk5BXWG2bH5Z2vNisvt2DPrwmgkflJ1xbAEujBcIfKbjOzKfJfPYZyx5wYawKKW6XmC44YJSMURQQ95KtzqvEeSyjnNI9ncJ9jZixR8EUtaCvfcT8aeBVAj9T&X-Amz-Signature=09c87c439a47ca84bed5e041c6263306d09b5585fae24dfa9d40294e4afae609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UWSNPZD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFrxOLgwKjGvXGdzPspqBtjTd%2F%2FIdN9AwbMhBqQYXkqgIgUhZZ10W%2BoHaIBu5XP4Q0TS0HGaE%2FS35GgyngTxycbHsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEhXUGyEDy1GRNbnryrcAxID99Dv4QRpEwld6Kp7QolPU2uMDJBnXpnRGRL7WOlaJvfaon1UjGvH06RY2cKXYPXGrXoy0xYUkoP9Pgy3WBu4INF2CKiu4It631NIXPuXq1CRjofimOKgzHqf%2BEzRlLCS4hPWukvHfcMiQk5BSFKNlXxKNTqMoc5RH7%2BY%2Fs%2BY58mAYLrp1aIYL3eIK4S3OPQy6hAgb5XMW5SlYyngzKbpVqJ%2F%2BJpSfrZEb8cP3fZ8Mu5t8%2BCLRpXnmZ5UgVdZfm3CuBeJBIYXHWwS6%2BAUhhIPqUSB5A8BRlcmk79%2BnTNuW1riU6jjZCXWcCpomZ9iZObL7fr3%2BWbpHYbr%2B9PwBgcJqOWK3uqy%2BCm2TWwo664nc98hCFvy%2FUW7NxFyeUBEPVpIkdtRbXoRxDuGpy31DRgrAPyqACMEpBVuYJ6%2FIBGS3b2FRbp17O%2BMyb9%2BN3I6U9aKEI6MKkNC5HFOCEvc6CqCVvFCYxiSXMt%2F66b%2BEQdxDVxWwN9ItBmpd7a8EnjP76h6IYiFx5duXwrrCKjnxEQBb2YOtRDRp2Wn7XrwWYaKIlNMfeu6v6Q3oKZyJabc6C910pGPPhIeqc7F9%2Fhfdrr6Zz3bk8bl4BCZfJrEIiI7ra%2Bb3ISWdlXlEEXvMMCNosMGOqUBOe%2BYmT%2BIOGqtvIm13RlUD9XswYiUKCCIddhuVzqsOzNB3PK1IEBM10byOXlSrML8m5QA4gsfOX2JAEVMm2lXfz9p%2Fl8VrSs8ql%2FAk5BXWG2bH5Z2vNisvt2DPrwmgkflJ1xbAEujBcIfKbjOzKfJfPYZyx5wYawKKW6XmC44YJSMURQQ95KtzqvEeSyjnNI9ncJ9jZixR8EUtaCvfcT8aeBVAj9T&X-Amz-Signature=1e53f1bbe66c79d7e8f85f4508e1257211b454d266db557fa40a8a7d2a06844a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UWSNPZD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFrxOLgwKjGvXGdzPspqBtjTd%2F%2FIdN9AwbMhBqQYXkqgIgUhZZ10W%2BoHaIBu5XP4Q0TS0HGaE%2FS35GgyngTxycbHsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEhXUGyEDy1GRNbnryrcAxID99Dv4QRpEwld6Kp7QolPU2uMDJBnXpnRGRL7WOlaJvfaon1UjGvH06RY2cKXYPXGrXoy0xYUkoP9Pgy3WBu4INF2CKiu4It631NIXPuXq1CRjofimOKgzHqf%2BEzRlLCS4hPWukvHfcMiQk5BSFKNlXxKNTqMoc5RH7%2BY%2Fs%2BY58mAYLrp1aIYL3eIK4S3OPQy6hAgb5XMW5SlYyngzKbpVqJ%2F%2BJpSfrZEb8cP3fZ8Mu5t8%2BCLRpXnmZ5UgVdZfm3CuBeJBIYXHWwS6%2BAUhhIPqUSB5A8BRlcmk79%2BnTNuW1riU6jjZCXWcCpomZ9iZObL7fr3%2BWbpHYbr%2B9PwBgcJqOWK3uqy%2BCm2TWwo664nc98hCFvy%2FUW7NxFyeUBEPVpIkdtRbXoRxDuGpy31DRgrAPyqACMEpBVuYJ6%2FIBGS3b2FRbp17O%2BMyb9%2BN3I6U9aKEI6MKkNC5HFOCEvc6CqCVvFCYxiSXMt%2F66b%2BEQdxDVxWwN9ItBmpd7a8EnjP76h6IYiFx5duXwrrCKjnxEQBb2YOtRDRp2Wn7XrwWYaKIlNMfeu6v6Q3oKZyJabc6C910pGPPhIeqc7F9%2Fhfdrr6Zz3bk8bl4BCZfJrEIiI7ra%2Bb3ISWdlXlEEXvMMCNosMGOqUBOe%2BYmT%2BIOGqtvIm13RlUD9XswYiUKCCIddhuVzqsOzNB3PK1IEBM10byOXlSrML8m5QA4gsfOX2JAEVMm2lXfz9p%2Fl8VrSs8ql%2FAk5BXWG2bH5Z2vNisvt2DPrwmgkflJ1xbAEujBcIfKbjOzKfJfPYZyx5wYawKKW6XmC44YJSMURQQ95KtzqvEeSyjnNI9ncJ9jZixR8EUtaCvfcT8aeBVAj9T&X-Amz-Signature=8f78028d6008f242795051e2acac8013b30ed790c39a267d382b94592711ca4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UWSNPZD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFrxOLgwKjGvXGdzPspqBtjTd%2F%2FIdN9AwbMhBqQYXkqgIgUhZZ10W%2BoHaIBu5XP4Q0TS0HGaE%2FS35GgyngTxycbHsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEhXUGyEDy1GRNbnryrcAxID99Dv4QRpEwld6Kp7QolPU2uMDJBnXpnRGRL7WOlaJvfaon1UjGvH06RY2cKXYPXGrXoy0xYUkoP9Pgy3WBu4INF2CKiu4It631NIXPuXq1CRjofimOKgzHqf%2BEzRlLCS4hPWukvHfcMiQk5BSFKNlXxKNTqMoc5RH7%2BY%2Fs%2BY58mAYLrp1aIYL3eIK4S3OPQy6hAgb5XMW5SlYyngzKbpVqJ%2F%2BJpSfrZEb8cP3fZ8Mu5t8%2BCLRpXnmZ5UgVdZfm3CuBeJBIYXHWwS6%2BAUhhIPqUSB5A8BRlcmk79%2BnTNuW1riU6jjZCXWcCpomZ9iZObL7fr3%2BWbpHYbr%2B9PwBgcJqOWK3uqy%2BCm2TWwo664nc98hCFvy%2FUW7NxFyeUBEPVpIkdtRbXoRxDuGpy31DRgrAPyqACMEpBVuYJ6%2FIBGS3b2FRbp17O%2BMyb9%2BN3I6U9aKEI6MKkNC5HFOCEvc6CqCVvFCYxiSXMt%2F66b%2BEQdxDVxWwN9ItBmpd7a8EnjP76h6IYiFx5duXwrrCKjnxEQBb2YOtRDRp2Wn7XrwWYaKIlNMfeu6v6Q3oKZyJabc6C910pGPPhIeqc7F9%2Fhfdrr6Zz3bk8bl4BCZfJrEIiI7ra%2Bb3ISWdlXlEEXvMMCNosMGOqUBOe%2BYmT%2BIOGqtvIm13RlUD9XswYiUKCCIddhuVzqsOzNB3PK1IEBM10byOXlSrML8m5QA4gsfOX2JAEVMm2lXfz9p%2Fl8VrSs8ql%2FAk5BXWG2bH5Z2vNisvt2DPrwmgkflJ1xbAEujBcIfKbjOzKfJfPYZyx5wYawKKW6XmC44YJSMURQQ95KtzqvEeSyjnNI9ncJ9jZixR8EUtaCvfcT8aeBVAj9T&X-Amz-Signature=f2139309b8879ddf6df91bafc45439247e220faedf4a2efa27963955c3d15540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
