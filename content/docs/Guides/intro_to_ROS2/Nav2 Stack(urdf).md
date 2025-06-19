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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VLE2QCQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5b8PlxM9TZaR0D0GolWXIEVD5c9FOKUWq0bLj8g4pYgIgTw%2FDc8a%2FUcUd%2FE7Oiy0fdStEvkythLdTj7ylzdACLWcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnJS3DLj0YJHgB0xCrcA1iqIZi%2BwL7UtjfCC6TX4NKoaNDgv0qoIbN26YXgoLjrB7dKQ%2BrLamoXONzel49q7gSLQEvNNbTh1A1scF15R5r%2BQaaiKOVr20j6ASWZ%2BEHL1WC7uojfN6tYAOFmR%2BEGKy90KIKoLlht%2BNVq3trU4GTPlb%2FqxB%2FKmkxLniI532xyiQwJ0I%2FUSjJ9c88qacAz30%2Fk8eiqUpZVmEx8CEW9jeAuLulu8qCipzNLKrLnCmjySVabCCVTnZQFt1V3fSSsHWBE%2FjqT4GhjEsI%2FaG5X4iOsD4PylFBZLIlZTCwZlOg3LCaiL5lSLjCNErOXriYwTCORjrzhcUsWlmqM00v73bL3IcjcgNsI5qVF5bbADNpxSEUKbyWkuPVFhS5JJ2tMtbYEUu9ExcmipZMT8Mp8avGA0DgBE%2FcE51lLMnxkYogdQL7S%2FUosqgyiaCTNpc59fhiwR5nphh1ZbRUDoox5GdjksjJJUgLMvEx3oXBhxCji7Z%2Fqc3aCjAChr1UbXpdQvQPXKAWd5zg5HOoThvllinfSI7PTky%2F8NUBE36Duw5257djYbLJv8znmd0kJ3E9OZlVV8Zl8DxPhPXay2enEELrC%2FBlC%2Bo%2FWK446ZlOhi0EH%2FkeihmsqUmSEt0hWMKSSz8IGOqUBSBC0DVVZMIut8iT94a%2BNS3aeD986dBGdl8gw8QH5QRXmsL97Weoh%2BrjnpqMkBZ0XKo7mnnV%2BUctdI3rBeg9gH2VqVV%2BYB3MK6hVv6gITqwtXXm1DdfLYFBWre6%2Boq2pwy3YkPKS5UKMrypT8VXGEU1se%2BBIjJw3ioKRAvc6hoovBF9FAZiAUQPo%2Ba1z7yQOUMRqghIrXRnhRxGq635cd90vjnHKs&X-Amz-Signature=624261ddf63585ef0cb3ffa038d7a535ec01f1cfb9fc3bea4e537e6b129c73fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VLE2QCQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5b8PlxM9TZaR0D0GolWXIEVD5c9FOKUWq0bLj8g4pYgIgTw%2FDc8a%2FUcUd%2FE7Oiy0fdStEvkythLdTj7ylzdACLWcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnJS3DLj0YJHgB0xCrcA1iqIZi%2BwL7UtjfCC6TX4NKoaNDgv0qoIbN26YXgoLjrB7dKQ%2BrLamoXONzel49q7gSLQEvNNbTh1A1scF15R5r%2BQaaiKOVr20j6ASWZ%2BEHL1WC7uojfN6tYAOFmR%2BEGKy90KIKoLlht%2BNVq3trU4GTPlb%2FqxB%2FKmkxLniI532xyiQwJ0I%2FUSjJ9c88qacAz30%2Fk8eiqUpZVmEx8CEW9jeAuLulu8qCipzNLKrLnCmjySVabCCVTnZQFt1V3fSSsHWBE%2FjqT4GhjEsI%2FaG5X4iOsD4PylFBZLIlZTCwZlOg3LCaiL5lSLjCNErOXriYwTCORjrzhcUsWlmqM00v73bL3IcjcgNsI5qVF5bbADNpxSEUKbyWkuPVFhS5JJ2tMtbYEUu9ExcmipZMT8Mp8avGA0DgBE%2FcE51lLMnxkYogdQL7S%2FUosqgyiaCTNpc59fhiwR5nphh1ZbRUDoox5GdjksjJJUgLMvEx3oXBhxCji7Z%2Fqc3aCjAChr1UbXpdQvQPXKAWd5zg5HOoThvllinfSI7PTky%2F8NUBE36Duw5257djYbLJv8znmd0kJ3E9OZlVV8Zl8DxPhPXay2enEELrC%2FBlC%2Bo%2FWK446ZlOhi0EH%2FkeihmsqUmSEt0hWMKSSz8IGOqUBSBC0DVVZMIut8iT94a%2BNS3aeD986dBGdl8gw8QH5QRXmsL97Weoh%2BrjnpqMkBZ0XKo7mnnV%2BUctdI3rBeg9gH2VqVV%2BYB3MK6hVv6gITqwtXXm1DdfLYFBWre6%2Boq2pwy3YkPKS5UKMrypT8VXGEU1se%2BBIjJw3ioKRAvc6hoovBF9FAZiAUQPo%2Ba1z7yQOUMRqghIrXRnhRxGq635cd90vjnHKs&X-Amz-Signature=939ad126a774b580deb702e422362abb1fbc8b4e028deab6eb23486b669c4d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VLE2QCQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5b8PlxM9TZaR0D0GolWXIEVD5c9FOKUWq0bLj8g4pYgIgTw%2FDc8a%2FUcUd%2FE7Oiy0fdStEvkythLdTj7ylzdACLWcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnJS3DLj0YJHgB0xCrcA1iqIZi%2BwL7UtjfCC6TX4NKoaNDgv0qoIbN26YXgoLjrB7dKQ%2BrLamoXONzel49q7gSLQEvNNbTh1A1scF15R5r%2BQaaiKOVr20j6ASWZ%2BEHL1WC7uojfN6tYAOFmR%2BEGKy90KIKoLlht%2BNVq3trU4GTPlb%2FqxB%2FKmkxLniI532xyiQwJ0I%2FUSjJ9c88qacAz30%2Fk8eiqUpZVmEx8CEW9jeAuLulu8qCipzNLKrLnCmjySVabCCVTnZQFt1V3fSSsHWBE%2FjqT4GhjEsI%2FaG5X4iOsD4PylFBZLIlZTCwZlOg3LCaiL5lSLjCNErOXriYwTCORjrzhcUsWlmqM00v73bL3IcjcgNsI5qVF5bbADNpxSEUKbyWkuPVFhS5JJ2tMtbYEUu9ExcmipZMT8Mp8avGA0DgBE%2FcE51lLMnxkYogdQL7S%2FUosqgyiaCTNpc59fhiwR5nphh1ZbRUDoox5GdjksjJJUgLMvEx3oXBhxCji7Z%2Fqc3aCjAChr1UbXpdQvQPXKAWd5zg5HOoThvllinfSI7PTky%2F8NUBE36Duw5257djYbLJv8znmd0kJ3E9OZlVV8Zl8DxPhPXay2enEELrC%2FBlC%2Bo%2FWK446ZlOhi0EH%2FkeihmsqUmSEt0hWMKSSz8IGOqUBSBC0DVVZMIut8iT94a%2BNS3aeD986dBGdl8gw8QH5QRXmsL97Weoh%2BrjnpqMkBZ0XKo7mnnV%2BUctdI3rBeg9gH2VqVV%2BYB3MK6hVv6gITqwtXXm1DdfLYFBWre6%2Boq2pwy3YkPKS5UKMrypT8VXGEU1se%2BBIjJw3ioKRAvc6hoovBF9FAZiAUQPo%2Ba1z7yQOUMRqghIrXRnhRxGq635cd90vjnHKs&X-Amz-Signature=fd26c473847724d2b09d6ff5f3ecec697df29abe91b260c36d1b6f906938b214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VLE2QCQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5b8PlxM9TZaR0D0GolWXIEVD5c9FOKUWq0bLj8g4pYgIgTw%2FDc8a%2FUcUd%2FE7Oiy0fdStEvkythLdTj7ylzdACLWcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnJS3DLj0YJHgB0xCrcA1iqIZi%2BwL7UtjfCC6TX4NKoaNDgv0qoIbN26YXgoLjrB7dKQ%2BrLamoXONzel49q7gSLQEvNNbTh1A1scF15R5r%2BQaaiKOVr20j6ASWZ%2BEHL1WC7uojfN6tYAOFmR%2BEGKy90KIKoLlht%2BNVq3trU4GTPlb%2FqxB%2FKmkxLniI532xyiQwJ0I%2FUSjJ9c88qacAz30%2Fk8eiqUpZVmEx8CEW9jeAuLulu8qCipzNLKrLnCmjySVabCCVTnZQFt1V3fSSsHWBE%2FjqT4GhjEsI%2FaG5X4iOsD4PylFBZLIlZTCwZlOg3LCaiL5lSLjCNErOXriYwTCORjrzhcUsWlmqM00v73bL3IcjcgNsI5qVF5bbADNpxSEUKbyWkuPVFhS5JJ2tMtbYEUu9ExcmipZMT8Mp8avGA0DgBE%2FcE51lLMnxkYogdQL7S%2FUosqgyiaCTNpc59fhiwR5nphh1ZbRUDoox5GdjksjJJUgLMvEx3oXBhxCji7Z%2Fqc3aCjAChr1UbXpdQvQPXKAWd5zg5HOoThvllinfSI7PTky%2F8NUBE36Duw5257djYbLJv8znmd0kJ3E9OZlVV8Zl8DxPhPXay2enEELrC%2FBlC%2Bo%2FWK446ZlOhi0EH%2FkeihmsqUmSEt0hWMKSSz8IGOqUBSBC0DVVZMIut8iT94a%2BNS3aeD986dBGdl8gw8QH5QRXmsL97Weoh%2BrjnpqMkBZ0XKo7mnnV%2BUctdI3rBeg9gH2VqVV%2BYB3MK6hVv6gITqwtXXm1DdfLYFBWre6%2Boq2pwy3YkPKS5UKMrypT8VXGEU1se%2BBIjJw3ioKRAvc6hoovBF9FAZiAUQPo%2Ba1z7yQOUMRqghIrXRnhRxGq635cd90vjnHKs&X-Amz-Signature=79c581c8ce3260496778464a0cd7a430ebb26fa4cc295d54ee6af81c100e7f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VLE2QCQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5b8PlxM9TZaR0D0GolWXIEVD5c9FOKUWq0bLj8g4pYgIgTw%2FDc8a%2FUcUd%2FE7Oiy0fdStEvkythLdTj7ylzdACLWcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnJS3DLj0YJHgB0xCrcA1iqIZi%2BwL7UtjfCC6TX4NKoaNDgv0qoIbN26YXgoLjrB7dKQ%2BrLamoXONzel49q7gSLQEvNNbTh1A1scF15R5r%2BQaaiKOVr20j6ASWZ%2BEHL1WC7uojfN6tYAOFmR%2BEGKy90KIKoLlht%2BNVq3trU4GTPlb%2FqxB%2FKmkxLniI532xyiQwJ0I%2FUSjJ9c88qacAz30%2Fk8eiqUpZVmEx8CEW9jeAuLulu8qCipzNLKrLnCmjySVabCCVTnZQFt1V3fSSsHWBE%2FjqT4GhjEsI%2FaG5X4iOsD4PylFBZLIlZTCwZlOg3LCaiL5lSLjCNErOXriYwTCORjrzhcUsWlmqM00v73bL3IcjcgNsI5qVF5bbADNpxSEUKbyWkuPVFhS5JJ2tMtbYEUu9ExcmipZMT8Mp8avGA0DgBE%2FcE51lLMnxkYogdQL7S%2FUosqgyiaCTNpc59fhiwR5nphh1ZbRUDoox5GdjksjJJUgLMvEx3oXBhxCji7Z%2Fqc3aCjAChr1UbXpdQvQPXKAWd5zg5HOoThvllinfSI7PTky%2F8NUBE36Duw5257djYbLJv8znmd0kJ3E9OZlVV8Zl8DxPhPXay2enEELrC%2FBlC%2Bo%2FWK446ZlOhi0EH%2FkeihmsqUmSEt0hWMKSSz8IGOqUBSBC0DVVZMIut8iT94a%2BNS3aeD986dBGdl8gw8QH5QRXmsL97Weoh%2BrjnpqMkBZ0XKo7mnnV%2BUctdI3rBeg9gH2VqVV%2BYB3MK6hVv6gITqwtXXm1DdfLYFBWre6%2Boq2pwy3YkPKS5UKMrypT8VXGEU1se%2BBIjJw3ioKRAvc6hoovBF9FAZiAUQPo%2Ba1z7yQOUMRqghIrXRnhRxGq635cd90vjnHKs&X-Amz-Signature=0f685bbc2ceed948879c0d8571c551c7d839924c4fa6f0eb5dab58430b9ab503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VLE2QCQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5b8PlxM9TZaR0D0GolWXIEVD5c9FOKUWq0bLj8g4pYgIgTw%2FDc8a%2FUcUd%2FE7Oiy0fdStEvkythLdTj7ylzdACLWcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnJS3DLj0YJHgB0xCrcA1iqIZi%2BwL7UtjfCC6TX4NKoaNDgv0qoIbN26YXgoLjrB7dKQ%2BrLamoXONzel49q7gSLQEvNNbTh1A1scF15R5r%2BQaaiKOVr20j6ASWZ%2BEHL1WC7uojfN6tYAOFmR%2BEGKy90KIKoLlht%2BNVq3trU4GTPlb%2FqxB%2FKmkxLniI532xyiQwJ0I%2FUSjJ9c88qacAz30%2Fk8eiqUpZVmEx8CEW9jeAuLulu8qCipzNLKrLnCmjySVabCCVTnZQFt1V3fSSsHWBE%2FjqT4GhjEsI%2FaG5X4iOsD4PylFBZLIlZTCwZlOg3LCaiL5lSLjCNErOXriYwTCORjrzhcUsWlmqM00v73bL3IcjcgNsI5qVF5bbADNpxSEUKbyWkuPVFhS5JJ2tMtbYEUu9ExcmipZMT8Mp8avGA0DgBE%2FcE51lLMnxkYogdQL7S%2FUosqgyiaCTNpc59fhiwR5nphh1ZbRUDoox5GdjksjJJUgLMvEx3oXBhxCji7Z%2Fqc3aCjAChr1UbXpdQvQPXKAWd5zg5HOoThvllinfSI7PTky%2F8NUBE36Duw5257djYbLJv8znmd0kJ3E9OZlVV8Zl8DxPhPXay2enEELrC%2FBlC%2Bo%2FWK446ZlOhi0EH%2FkeihmsqUmSEt0hWMKSSz8IGOqUBSBC0DVVZMIut8iT94a%2BNS3aeD986dBGdl8gw8QH5QRXmsL97Weoh%2BrjnpqMkBZ0XKo7mnnV%2BUctdI3rBeg9gH2VqVV%2BYB3MK6hVv6gITqwtXXm1DdfLYFBWre6%2Boq2pwy3YkPKS5UKMrypT8VXGEU1se%2BBIjJw3ioKRAvc6hoovBF9FAZiAUQPo%2Ba1z7yQOUMRqghIrXRnhRxGq635cd90vjnHKs&X-Amz-Signature=1e153cef62070abbc250bc639e578e398f8b9a973388be84787209e438cb5d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
