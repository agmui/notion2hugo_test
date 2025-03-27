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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEVO5AP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgTlvCeWjY8yLqyR%2Bb7WU7%2FKVmKDPkpWCQ%2FXSO%2FmxnlAiEAv6Re8TjtKj5PbdDs7dyYSai5nLC7%2BWvkD%2Bl%2Bhrt21p4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPZ1rimU8CbDzNJPBSrcAyBJgkYgiF9MsaFoco18GdilIkGL%2Bv8zKqkygdrxwCLf0BnOUvHqgSMHRGHp93GaJAbRuGyfwuvxGlZm94gwlniSZUAFgDZyy2%2FMJT2aPHWoHyRfE5jkmkjwLmgalziBWdXH87MRljIuTw%2FXLvCSwP7ASSdctEcZ72EHsL6TjoZRZN5j4ZBnebiK5MaFKZygotyfiwHmUuQBRAPf1kZd%2FFyH%2FEW5d8npn4zZh173DM%2F7T0UcOZtJQgj%2Bd2ojRgta2FGqh1DPe5cixcc1VyStKknvJBpUdGiwoUJz%2BhH0gB22XQ%2B3RdggLWbh6c4NjOQniEGuQ%2F0nB6f0YfU9il55gA1HpSQ%2Fk%2FsUzempR%2FsKlPXrIXAfqmENdzU%2FhxKP9Zhe0Kpklfdx9wblJnjjESMtENDwIKYxaqgGHb5sq9HHXZtNE8%2FjiwZ5u1xSRBTL2L7Eb4AXyIDN2KtbOe2OhEyc2gcTYof556unG5KXDW7%2FY1Pik8RFyGLC2fGy57gdA2OWJDZZAq7ACPgG2VAwaxfi%2FXlwTs9c0lHC7kL3Jf9Ncb%2Bpa5A3GmEBQPtlIXz5xCXowRHoq%2Brw0Is%2F9DCEvZjbQUlTQTStdx2hBQFcJ5k1g6ST5mmC3gPWG2buOkanMMLclr8GOqUBz8hQN8pHPU6V6rsYJEF5YHWdS4ObHKsDy3uyBfo3awbwJTSv5YLtJuPgN6RQ2Y2T1OiB1Y8KI2u8Wy1lLcofLRbOfTQaBnotYsW2D5DKbJMXdQPHPHrxJclCsfGTLV7JDnnbegDR%2BjBljEMuFrdJVuBaeJZpkTnlV5pPvrWn1mm2Ft3lTSgg8Tk8Gb56n7rfgTbkY5evk%2FqpvNV0hYRlSpHHUy0u&X-Amz-Signature=4e5e40e4c9a377a312f667b6c7720fa2623774df28b283dc2a9af835eb421ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEVO5AP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgTlvCeWjY8yLqyR%2Bb7WU7%2FKVmKDPkpWCQ%2FXSO%2FmxnlAiEAv6Re8TjtKj5PbdDs7dyYSai5nLC7%2BWvkD%2Bl%2Bhrt21p4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPZ1rimU8CbDzNJPBSrcAyBJgkYgiF9MsaFoco18GdilIkGL%2Bv8zKqkygdrxwCLf0BnOUvHqgSMHRGHp93GaJAbRuGyfwuvxGlZm94gwlniSZUAFgDZyy2%2FMJT2aPHWoHyRfE5jkmkjwLmgalziBWdXH87MRljIuTw%2FXLvCSwP7ASSdctEcZ72EHsL6TjoZRZN5j4ZBnebiK5MaFKZygotyfiwHmUuQBRAPf1kZd%2FFyH%2FEW5d8npn4zZh173DM%2F7T0UcOZtJQgj%2Bd2ojRgta2FGqh1DPe5cixcc1VyStKknvJBpUdGiwoUJz%2BhH0gB22XQ%2B3RdggLWbh6c4NjOQniEGuQ%2F0nB6f0YfU9il55gA1HpSQ%2Fk%2FsUzempR%2FsKlPXrIXAfqmENdzU%2FhxKP9Zhe0Kpklfdx9wblJnjjESMtENDwIKYxaqgGHb5sq9HHXZtNE8%2FjiwZ5u1xSRBTL2L7Eb4AXyIDN2KtbOe2OhEyc2gcTYof556unG5KXDW7%2FY1Pik8RFyGLC2fGy57gdA2OWJDZZAq7ACPgG2VAwaxfi%2FXlwTs9c0lHC7kL3Jf9Ncb%2Bpa5A3GmEBQPtlIXz5xCXowRHoq%2Brw0Is%2F9DCEvZjbQUlTQTStdx2hBQFcJ5k1g6ST5mmC3gPWG2buOkanMMLclr8GOqUBz8hQN8pHPU6V6rsYJEF5YHWdS4ObHKsDy3uyBfo3awbwJTSv5YLtJuPgN6RQ2Y2T1OiB1Y8KI2u8Wy1lLcofLRbOfTQaBnotYsW2D5DKbJMXdQPHPHrxJclCsfGTLV7JDnnbegDR%2BjBljEMuFrdJVuBaeJZpkTnlV5pPvrWn1mm2Ft3lTSgg8Tk8Gb56n7rfgTbkY5evk%2FqpvNV0hYRlSpHHUy0u&X-Amz-Signature=b194901a9ec68476791d80942fe3f0545cfb7c96c0bb0f0e913b48e183827147&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEVO5AP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgTlvCeWjY8yLqyR%2Bb7WU7%2FKVmKDPkpWCQ%2FXSO%2FmxnlAiEAv6Re8TjtKj5PbdDs7dyYSai5nLC7%2BWvkD%2Bl%2Bhrt21p4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPZ1rimU8CbDzNJPBSrcAyBJgkYgiF9MsaFoco18GdilIkGL%2Bv8zKqkygdrxwCLf0BnOUvHqgSMHRGHp93GaJAbRuGyfwuvxGlZm94gwlniSZUAFgDZyy2%2FMJT2aPHWoHyRfE5jkmkjwLmgalziBWdXH87MRljIuTw%2FXLvCSwP7ASSdctEcZ72EHsL6TjoZRZN5j4ZBnebiK5MaFKZygotyfiwHmUuQBRAPf1kZd%2FFyH%2FEW5d8npn4zZh173DM%2F7T0UcOZtJQgj%2Bd2ojRgta2FGqh1DPe5cixcc1VyStKknvJBpUdGiwoUJz%2BhH0gB22XQ%2B3RdggLWbh6c4NjOQniEGuQ%2F0nB6f0YfU9il55gA1HpSQ%2Fk%2FsUzempR%2FsKlPXrIXAfqmENdzU%2FhxKP9Zhe0Kpklfdx9wblJnjjESMtENDwIKYxaqgGHb5sq9HHXZtNE8%2FjiwZ5u1xSRBTL2L7Eb4AXyIDN2KtbOe2OhEyc2gcTYof556unG5KXDW7%2FY1Pik8RFyGLC2fGy57gdA2OWJDZZAq7ACPgG2VAwaxfi%2FXlwTs9c0lHC7kL3Jf9Ncb%2Bpa5A3GmEBQPtlIXz5xCXowRHoq%2Brw0Is%2F9DCEvZjbQUlTQTStdx2hBQFcJ5k1g6ST5mmC3gPWG2buOkanMMLclr8GOqUBz8hQN8pHPU6V6rsYJEF5YHWdS4ObHKsDy3uyBfo3awbwJTSv5YLtJuPgN6RQ2Y2T1OiB1Y8KI2u8Wy1lLcofLRbOfTQaBnotYsW2D5DKbJMXdQPHPHrxJclCsfGTLV7JDnnbegDR%2BjBljEMuFrdJVuBaeJZpkTnlV5pPvrWn1mm2Ft3lTSgg8Tk8Gb56n7rfgTbkY5evk%2FqpvNV0hYRlSpHHUy0u&X-Amz-Signature=0d8bc3add79f0e6633c7445574f5fe18bcab9d2d1f4a84a6779dceac9498b16b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEVO5AP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgTlvCeWjY8yLqyR%2Bb7WU7%2FKVmKDPkpWCQ%2FXSO%2FmxnlAiEAv6Re8TjtKj5PbdDs7dyYSai5nLC7%2BWvkD%2Bl%2Bhrt21p4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPZ1rimU8CbDzNJPBSrcAyBJgkYgiF9MsaFoco18GdilIkGL%2Bv8zKqkygdrxwCLf0BnOUvHqgSMHRGHp93GaJAbRuGyfwuvxGlZm94gwlniSZUAFgDZyy2%2FMJT2aPHWoHyRfE5jkmkjwLmgalziBWdXH87MRljIuTw%2FXLvCSwP7ASSdctEcZ72EHsL6TjoZRZN5j4ZBnebiK5MaFKZygotyfiwHmUuQBRAPf1kZd%2FFyH%2FEW5d8npn4zZh173DM%2F7T0UcOZtJQgj%2Bd2ojRgta2FGqh1DPe5cixcc1VyStKknvJBpUdGiwoUJz%2BhH0gB22XQ%2B3RdggLWbh6c4NjOQniEGuQ%2F0nB6f0YfU9il55gA1HpSQ%2Fk%2FsUzempR%2FsKlPXrIXAfqmENdzU%2FhxKP9Zhe0Kpklfdx9wblJnjjESMtENDwIKYxaqgGHb5sq9HHXZtNE8%2FjiwZ5u1xSRBTL2L7Eb4AXyIDN2KtbOe2OhEyc2gcTYof556unG5KXDW7%2FY1Pik8RFyGLC2fGy57gdA2OWJDZZAq7ACPgG2VAwaxfi%2FXlwTs9c0lHC7kL3Jf9Ncb%2Bpa5A3GmEBQPtlIXz5xCXowRHoq%2Brw0Is%2F9DCEvZjbQUlTQTStdx2hBQFcJ5k1g6ST5mmC3gPWG2buOkanMMLclr8GOqUBz8hQN8pHPU6V6rsYJEF5YHWdS4ObHKsDy3uyBfo3awbwJTSv5YLtJuPgN6RQ2Y2T1OiB1Y8KI2u8Wy1lLcofLRbOfTQaBnotYsW2D5DKbJMXdQPHPHrxJclCsfGTLV7JDnnbegDR%2BjBljEMuFrdJVuBaeJZpkTnlV5pPvrWn1mm2Ft3lTSgg8Tk8Gb56n7rfgTbkY5evk%2FqpvNV0hYRlSpHHUy0u&X-Amz-Signature=d67ca34273cbd6ec39004e855408ab49626b871a12b4604db4059c0c06fafdc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEVO5AP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgTlvCeWjY8yLqyR%2Bb7WU7%2FKVmKDPkpWCQ%2FXSO%2FmxnlAiEAv6Re8TjtKj5PbdDs7dyYSai5nLC7%2BWvkD%2Bl%2Bhrt21p4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPZ1rimU8CbDzNJPBSrcAyBJgkYgiF9MsaFoco18GdilIkGL%2Bv8zKqkygdrxwCLf0BnOUvHqgSMHRGHp93GaJAbRuGyfwuvxGlZm94gwlniSZUAFgDZyy2%2FMJT2aPHWoHyRfE5jkmkjwLmgalziBWdXH87MRljIuTw%2FXLvCSwP7ASSdctEcZ72EHsL6TjoZRZN5j4ZBnebiK5MaFKZygotyfiwHmUuQBRAPf1kZd%2FFyH%2FEW5d8npn4zZh173DM%2F7T0UcOZtJQgj%2Bd2ojRgta2FGqh1DPe5cixcc1VyStKknvJBpUdGiwoUJz%2BhH0gB22XQ%2B3RdggLWbh6c4NjOQniEGuQ%2F0nB6f0YfU9il55gA1HpSQ%2Fk%2FsUzempR%2FsKlPXrIXAfqmENdzU%2FhxKP9Zhe0Kpklfdx9wblJnjjESMtENDwIKYxaqgGHb5sq9HHXZtNE8%2FjiwZ5u1xSRBTL2L7Eb4AXyIDN2KtbOe2OhEyc2gcTYof556unG5KXDW7%2FY1Pik8RFyGLC2fGy57gdA2OWJDZZAq7ACPgG2VAwaxfi%2FXlwTs9c0lHC7kL3Jf9Ncb%2Bpa5A3GmEBQPtlIXz5xCXowRHoq%2Brw0Is%2F9DCEvZjbQUlTQTStdx2hBQFcJ5k1g6ST5mmC3gPWG2buOkanMMLclr8GOqUBz8hQN8pHPU6V6rsYJEF5YHWdS4ObHKsDy3uyBfo3awbwJTSv5YLtJuPgN6RQ2Y2T1OiB1Y8KI2u8Wy1lLcofLRbOfTQaBnotYsW2D5DKbJMXdQPHPHrxJclCsfGTLV7JDnnbegDR%2BjBljEMuFrdJVuBaeJZpkTnlV5pPvrWn1mm2Ft3lTSgg8Tk8Gb56n7rfgTbkY5evk%2FqpvNV0hYRlSpHHUy0u&X-Amz-Signature=9fb1d913c233aa5654dc378c44ce5ce5da36a00064996fba162c335e6e8237e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEVO5AP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgTlvCeWjY8yLqyR%2Bb7WU7%2FKVmKDPkpWCQ%2FXSO%2FmxnlAiEAv6Re8TjtKj5PbdDs7dyYSai5nLC7%2BWvkD%2Bl%2Bhrt21p4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPZ1rimU8CbDzNJPBSrcAyBJgkYgiF9MsaFoco18GdilIkGL%2Bv8zKqkygdrxwCLf0BnOUvHqgSMHRGHp93GaJAbRuGyfwuvxGlZm94gwlniSZUAFgDZyy2%2FMJT2aPHWoHyRfE5jkmkjwLmgalziBWdXH87MRljIuTw%2FXLvCSwP7ASSdctEcZ72EHsL6TjoZRZN5j4ZBnebiK5MaFKZygotyfiwHmUuQBRAPf1kZd%2FFyH%2FEW5d8npn4zZh173DM%2F7T0UcOZtJQgj%2Bd2ojRgta2FGqh1DPe5cixcc1VyStKknvJBpUdGiwoUJz%2BhH0gB22XQ%2B3RdggLWbh6c4NjOQniEGuQ%2F0nB6f0YfU9il55gA1HpSQ%2Fk%2FsUzempR%2FsKlPXrIXAfqmENdzU%2FhxKP9Zhe0Kpklfdx9wblJnjjESMtENDwIKYxaqgGHb5sq9HHXZtNE8%2FjiwZ5u1xSRBTL2L7Eb4AXyIDN2KtbOe2OhEyc2gcTYof556unG5KXDW7%2FY1Pik8RFyGLC2fGy57gdA2OWJDZZAq7ACPgG2VAwaxfi%2FXlwTs9c0lHC7kL3Jf9Ncb%2Bpa5A3GmEBQPtlIXz5xCXowRHoq%2Brw0Is%2F9DCEvZjbQUlTQTStdx2hBQFcJ5k1g6ST5mmC3gPWG2buOkanMMLclr8GOqUBz8hQN8pHPU6V6rsYJEF5YHWdS4ObHKsDy3uyBfo3awbwJTSv5YLtJuPgN6RQ2Y2T1OiB1Y8KI2u8Wy1lLcofLRbOfTQaBnotYsW2D5DKbJMXdQPHPHrxJclCsfGTLV7JDnnbegDR%2BjBljEMuFrdJVuBaeJZpkTnlV5pPvrWn1mm2Ft3lTSgg8Tk8Gb56n7rfgTbkY5evk%2FqpvNV0hYRlSpHHUy0u&X-Amz-Signature=2c3930a414e1f3debd9bcfd15913d243565f34a38a74f82e06f5246dde7227ce&X-Amz-SignedHeaders=host&x-id=GetObject)
