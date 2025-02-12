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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7VY54Z%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmzqTT%2FDp9W7%2BQkfWynJJZLJwMjt2hBqPPV8xglNRKdQIgTmF4W9tCodrb0RPOhoo%2Fa5UwaMSfVSJCD7cX9pEiuhkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV%2F9q8K9vjEXwjIxyrcA6c9HtZeXJNl8qHXxX8NiifR1GMeV45jQ9zUuviuQo37TDDqAKkUYo%2FucFzacp6JDAi4SMFEUOokOb76ur%2B8pNdygfnbNR7FEHnY3uy0jqt3JnldySlBb4jiMFwSOnMpRyK4CahitlMoHbmrCifyTM%2B0pEDt4cdJipkaf70fTnZsTXjqPZHWx3WjweoMoSBuWXz%2BbMTXH4QYjOP2CpIQtF11xa%2FRRxvBTa1GAMsGP%2BadJYK8kafKhMCPsfz2STCu590EfUrWYx%2F1pSjQpASuHtONweC%2FDx%2BXDp75ogS96wiZdmQDv%2B%2Fnpf3E1nuCmeiHpOLwi9PyKwQjqRdb11BmgRaZGD6cdCyshSgDHIa28VCSFXXgKYzIvu3dby3CdBMxlKNU9J8TRqwowZ37EhdLJ6uPZVSCr5MX1%2BNNOLXgn3zpqFOHrFUdZDBYCGGrEawN1EbdKipPlLzXaa8SGIJ1Da%2FXG2ekCFlqnSvXo6o0qs8Ie9sqX2Hh%2BaXS%2FxBBxcgMZYeqzJDAL2f78EM0GAoj1QPEA99SfgmyyKE92aW6Ir3f0Oz8xHAvQQo7Mvr8gvXQ582TjSVz%2BHEK32t1Ehppd%2BnLCSPNxgc08x%2F9lyKC89MxfEkVGBhZopc7l9WcMJHFtL0GOqUBS6gSNYQRBVDdXqDiH3toW4O8ncHuICYvpwA0I%2BhveYFFvn9P0JHP4icmg694y%2BSV7Xy4OQKQBt%2BrQvxL2aH6OgpbM87KphJYNlchaXNTfvf%2BWrjJa94o9CsSaMcmCyo9Rodsmz%2FxLQ2ma52rzLwDvUcUOZOFZrMK5E53ApK1%2BNEt1xkyD%2FB61QhAGcOCEHWqWCoc8q3j3UvWG0RnvhTk9EdaeFGU&X-Amz-Signature=2ace7501231eb0bc7c48a2c6a388f11eac673d09ee8cf5663c0ac2b130d3af69&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7VY54Z%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmzqTT%2FDp9W7%2BQkfWynJJZLJwMjt2hBqPPV8xglNRKdQIgTmF4W9tCodrb0RPOhoo%2Fa5UwaMSfVSJCD7cX9pEiuhkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV%2F9q8K9vjEXwjIxyrcA6c9HtZeXJNl8qHXxX8NiifR1GMeV45jQ9zUuviuQo37TDDqAKkUYo%2FucFzacp6JDAi4SMFEUOokOb76ur%2B8pNdygfnbNR7FEHnY3uy0jqt3JnldySlBb4jiMFwSOnMpRyK4CahitlMoHbmrCifyTM%2B0pEDt4cdJipkaf70fTnZsTXjqPZHWx3WjweoMoSBuWXz%2BbMTXH4QYjOP2CpIQtF11xa%2FRRxvBTa1GAMsGP%2BadJYK8kafKhMCPsfz2STCu590EfUrWYx%2F1pSjQpASuHtONweC%2FDx%2BXDp75ogS96wiZdmQDv%2B%2Fnpf3E1nuCmeiHpOLwi9PyKwQjqRdb11BmgRaZGD6cdCyshSgDHIa28VCSFXXgKYzIvu3dby3CdBMxlKNU9J8TRqwowZ37EhdLJ6uPZVSCr5MX1%2BNNOLXgn3zpqFOHrFUdZDBYCGGrEawN1EbdKipPlLzXaa8SGIJ1Da%2FXG2ekCFlqnSvXo6o0qs8Ie9sqX2Hh%2BaXS%2FxBBxcgMZYeqzJDAL2f78EM0GAoj1QPEA99SfgmyyKE92aW6Ir3f0Oz8xHAvQQo7Mvr8gvXQ582TjSVz%2BHEK32t1Ehppd%2BnLCSPNxgc08x%2F9lyKC89MxfEkVGBhZopc7l9WcMJHFtL0GOqUBS6gSNYQRBVDdXqDiH3toW4O8ncHuICYvpwA0I%2BhveYFFvn9P0JHP4icmg694y%2BSV7Xy4OQKQBt%2BrQvxL2aH6OgpbM87KphJYNlchaXNTfvf%2BWrjJa94o9CsSaMcmCyo9Rodsmz%2FxLQ2ma52rzLwDvUcUOZOFZrMK5E53ApK1%2BNEt1xkyD%2FB61QhAGcOCEHWqWCoc8q3j3UvWG0RnvhTk9EdaeFGU&X-Amz-Signature=510077d7aa8f473fdc25196e4bd727848b02887abfd821d772c23d99ccf7ea93&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7VY54Z%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmzqTT%2FDp9W7%2BQkfWynJJZLJwMjt2hBqPPV8xglNRKdQIgTmF4W9tCodrb0RPOhoo%2Fa5UwaMSfVSJCD7cX9pEiuhkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV%2F9q8K9vjEXwjIxyrcA6c9HtZeXJNl8qHXxX8NiifR1GMeV45jQ9zUuviuQo37TDDqAKkUYo%2FucFzacp6JDAi4SMFEUOokOb76ur%2B8pNdygfnbNR7FEHnY3uy0jqt3JnldySlBb4jiMFwSOnMpRyK4CahitlMoHbmrCifyTM%2B0pEDt4cdJipkaf70fTnZsTXjqPZHWx3WjweoMoSBuWXz%2BbMTXH4QYjOP2CpIQtF11xa%2FRRxvBTa1GAMsGP%2BadJYK8kafKhMCPsfz2STCu590EfUrWYx%2F1pSjQpASuHtONweC%2FDx%2BXDp75ogS96wiZdmQDv%2B%2Fnpf3E1nuCmeiHpOLwi9PyKwQjqRdb11BmgRaZGD6cdCyshSgDHIa28VCSFXXgKYzIvu3dby3CdBMxlKNU9J8TRqwowZ37EhdLJ6uPZVSCr5MX1%2BNNOLXgn3zpqFOHrFUdZDBYCGGrEawN1EbdKipPlLzXaa8SGIJ1Da%2FXG2ekCFlqnSvXo6o0qs8Ie9sqX2Hh%2BaXS%2FxBBxcgMZYeqzJDAL2f78EM0GAoj1QPEA99SfgmyyKE92aW6Ir3f0Oz8xHAvQQo7Mvr8gvXQ582TjSVz%2BHEK32t1Ehppd%2BnLCSPNxgc08x%2F9lyKC89MxfEkVGBhZopc7l9WcMJHFtL0GOqUBS6gSNYQRBVDdXqDiH3toW4O8ncHuICYvpwA0I%2BhveYFFvn9P0JHP4icmg694y%2BSV7Xy4OQKQBt%2BrQvxL2aH6OgpbM87KphJYNlchaXNTfvf%2BWrjJa94o9CsSaMcmCyo9Rodsmz%2FxLQ2ma52rzLwDvUcUOZOFZrMK5E53ApK1%2BNEt1xkyD%2FB61QhAGcOCEHWqWCoc8q3j3UvWG0RnvhTk9EdaeFGU&X-Amz-Signature=29964ac318ed78935ef11fb9af11d36ede8160d38b1b7be1c85f83eda1f9a966&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7VY54Z%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmzqTT%2FDp9W7%2BQkfWynJJZLJwMjt2hBqPPV8xglNRKdQIgTmF4W9tCodrb0RPOhoo%2Fa5UwaMSfVSJCD7cX9pEiuhkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV%2F9q8K9vjEXwjIxyrcA6c9HtZeXJNl8qHXxX8NiifR1GMeV45jQ9zUuviuQo37TDDqAKkUYo%2FucFzacp6JDAi4SMFEUOokOb76ur%2B8pNdygfnbNR7FEHnY3uy0jqt3JnldySlBb4jiMFwSOnMpRyK4CahitlMoHbmrCifyTM%2B0pEDt4cdJipkaf70fTnZsTXjqPZHWx3WjweoMoSBuWXz%2BbMTXH4QYjOP2CpIQtF11xa%2FRRxvBTa1GAMsGP%2BadJYK8kafKhMCPsfz2STCu590EfUrWYx%2F1pSjQpASuHtONweC%2FDx%2BXDp75ogS96wiZdmQDv%2B%2Fnpf3E1nuCmeiHpOLwi9PyKwQjqRdb11BmgRaZGD6cdCyshSgDHIa28VCSFXXgKYzIvu3dby3CdBMxlKNU9J8TRqwowZ37EhdLJ6uPZVSCr5MX1%2BNNOLXgn3zpqFOHrFUdZDBYCGGrEawN1EbdKipPlLzXaa8SGIJ1Da%2FXG2ekCFlqnSvXo6o0qs8Ie9sqX2Hh%2BaXS%2FxBBxcgMZYeqzJDAL2f78EM0GAoj1QPEA99SfgmyyKE92aW6Ir3f0Oz8xHAvQQo7Mvr8gvXQ582TjSVz%2BHEK32t1Ehppd%2BnLCSPNxgc08x%2F9lyKC89MxfEkVGBhZopc7l9WcMJHFtL0GOqUBS6gSNYQRBVDdXqDiH3toW4O8ncHuICYvpwA0I%2BhveYFFvn9P0JHP4icmg694y%2BSV7Xy4OQKQBt%2BrQvxL2aH6OgpbM87KphJYNlchaXNTfvf%2BWrjJa94o9CsSaMcmCyo9Rodsmz%2FxLQ2ma52rzLwDvUcUOZOFZrMK5E53ApK1%2BNEt1xkyD%2FB61QhAGcOCEHWqWCoc8q3j3UvWG0RnvhTk9EdaeFGU&X-Amz-Signature=cd8b50df35c8a5c8f2045b8bbde4a2a554dcfec3f19b2d04c1c50b2c115cfe02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7VY54Z%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmzqTT%2FDp9W7%2BQkfWynJJZLJwMjt2hBqPPV8xglNRKdQIgTmF4W9tCodrb0RPOhoo%2Fa5UwaMSfVSJCD7cX9pEiuhkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV%2F9q8K9vjEXwjIxyrcA6c9HtZeXJNl8qHXxX8NiifR1GMeV45jQ9zUuviuQo37TDDqAKkUYo%2FucFzacp6JDAi4SMFEUOokOb76ur%2B8pNdygfnbNR7FEHnY3uy0jqt3JnldySlBb4jiMFwSOnMpRyK4CahitlMoHbmrCifyTM%2B0pEDt4cdJipkaf70fTnZsTXjqPZHWx3WjweoMoSBuWXz%2BbMTXH4QYjOP2CpIQtF11xa%2FRRxvBTa1GAMsGP%2BadJYK8kafKhMCPsfz2STCu590EfUrWYx%2F1pSjQpASuHtONweC%2FDx%2BXDp75ogS96wiZdmQDv%2B%2Fnpf3E1nuCmeiHpOLwi9PyKwQjqRdb11BmgRaZGD6cdCyshSgDHIa28VCSFXXgKYzIvu3dby3CdBMxlKNU9J8TRqwowZ37EhdLJ6uPZVSCr5MX1%2BNNOLXgn3zpqFOHrFUdZDBYCGGrEawN1EbdKipPlLzXaa8SGIJ1Da%2FXG2ekCFlqnSvXo6o0qs8Ie9sqX2Hh%2BaXS%2FxBBxcgMZYeqzJDAL2f78EM0GAoj1QPEA99SfgmyyKE92aW6Ir3f0Oz8xHAvQQo7Mvr8gvXQ582TjSVz%2BHEK32t1Ehppd%2BnLCSPNxgc08x%2F9lyKC89MxfEkVGBhZopc7l9WcMJHFtL0GOqUBS6gSNYQRBVDdXqDiH3toW4O8ncHuICYvpwA0I%2BhveYFFvn9P0JHP4icmg694y%2BSV7Xy4OQKQBt%2BrQvxL2aH6OgpbM87KphJYNlchaXNTfvf%2BWrjJa94o9CsSaMcmCyo9Rodsmz%2FxLQ2ma52rzLwDvUcUOZOFZrMK5E53ApK1%2BNEt1xkyD%2FB61QhAGcOCEHWqWCoc8q3j3UvWG0RnvhTk9EdaeFGU&X-Amz-Signature=c35969ec4c43acd59d55878e80e9a8b068e84c49965e4582f93e9f0eee40e294&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7VY54Z%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmzqTT%2FDp9W7%2BQkfWynJJZLJwMjt2hBqPPV8xglNRKdQIgTmF4W9tCodrb0RPOhoo%2Fa5UwaMSfVSJCD7cX9pEiuhkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV%2F9q8K9vjEXwjIxyrcA6c9HtZeXJNl8qHXxX8NiifR1GMeV45jQ9zUuviuQo37TDDqAKkUYo%2FucFzacp6JDAi4SMFEUOokOb76ur%2B8pNdygfnbNR7FEHnY3uy0jqt3JnldySlBb4jiMFwSOnMpRyK4CahitlMoHbmrCifyTM%2B0pEDt4cdJipkaf70fTnZsTXjqPZHWx3WjweoMoSBuWXz%2BbMTXH4QYjOP2CpIQtF11xa%2FRRxvBTa1GAMsGP%2BadJYK8kafKhMCPsfz2STCu590EfUrWYx%2F1pSjQpASuHtONweC%2FDx%2BXDp75ogS96wiZdmQDv%2B%2Fnpf3E1nuCmeiHpOLwi9PyKwQjqRdb11BmgRaZGD6cdCyshSgDHIa28VCSFXXgKYzIvu3dby3CdBMxlKNU9J8TRqwowZ37EhdLJ6uPZVSCr5MX1%2BNNOLXgn3zpqFOHrFUdZDBYCGGrEawN1EbdKipPlLzXaa8SGIJ1Da%2FXG2ekCFlqnSvXo6o0qs8Ie9sqX2Hh%2BaXS%2FxBBxcgMZYeqzJDAL2f78EM0GAoj1QPEA99SfgmyyKE92aW6Ir3f0Oz8xHAvQQo7Mvr8gvXQ582TjSVz%2BHEK32t1Ehppd%2BnLCSPNxgc08x%2F9lyKC89MxfEkVGBhZopc7l9WcMJHFtL0GOqUBS6gSNYQRBVDdXqDiH3toW4O8ncHuICYvpwA0I%2BhveYFFvn9P0JHP4icmg694y%2BSV7Xy4OQKQBt%2BrQvxL2aH6OgpbM87KphJYNlchaXNTfvf%2BWrjJa94o9CsSaMcmCyo9Rodsmz%2FxLQ2ma52rzLwDvUcUOZOFZrMK5E53ApK1%2BNEt1xkyD%2FB61QhAGcOCEHWqWCoc8q3j3UvWG0RnvhTk9EdaeFGU&X-Amz-Signature=8bdd3c3d96ed732dc0f2f13542583cf2082ee771ae427f53e3b54ec0ec1944fc&X-Amz-SignedHeaders=host&x-id=GetObject)
