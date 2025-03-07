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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7GKKU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClTSZ6GnAkUJL5lDrtxlNJo%2Fh1lLWcVN%2BItMArFNgt7QIhAMdS84%2BbInwhSJJ7JaFE7P84WnczWgE5nqkACC08qAlgKv8DCEYQABoMNjM3NDIzMTgzODA1Igzcgz%2FailtxWfZ1EAoq3APiM4kGpIY%2F9e%2BmdZU4%2FkH7EB6ZuZXXpFfAjAIU20%2B%2FhEQDDN1zVAcFGShCfTFQ1A9JuP1n28dLVMyQLCfSPktjDJq51MNDWCt8mu7zAzzXugSe2Y5unVjhZy9hrI1H7m1pSsD565F63Mnu8esxBplAXzdLOFTvSxXVDIAap2Fbdsn43vCE7Jibf7qCxWVXBl4l%2Fi3B5i0tY8owkgrmhauO4rJqPFaeI%2FaWDjkn3%2BYVK0i%2BeUAsLrFqLcty0S4q43ut3rAidfEReLH2AswFNy7H06siWG5Tv8k16sRGBLaJGBbqryhykTwJl7YEEEsxdWaBfiUZOKSYL1XWpFHuWbNoLeKRR%2B1TeHq2%2FPmBLX1qKyvBXkLUH4%2BY7V9aEHoyp8WbDooSFPo5gwKCDfZ0ufOFmbEAPdhFjKfkxKgDtayW%2FlxD6785FZ6vvPuks9JcTe5quPAG6jRqZSYXBoFMeI4p%2B68rY3ADC8oxlObmdqZqEVyMlKtziZSj7A7ZXlZv6GcFJlJmOxc%2BC9sSz2KSMa5IS89EmoAdeHSoPNMacAFwMSdguvTAwlXw4WH02CK4fGCcOh6R%2BiLx15zufwoYsfighTmZxRlwqVY7VXi%2Ft5cEh1qdSMyVBFbH5CbrQzDI36u%2BBjqkAYlufCUjolJit65hgnN9KKybDo2eoZR8xF7oyuDjerfyKmiOUPGSstKD9cJf9xTM5P13RKDlIMfLYPEEZtt6CzBDp%2FOewkPsPlat%2F3rf4a1QebPfunoXWlsJ%2B28LSg%2FSMF%2F3A7LqeoqMVgfS3VqFEUz2YKbecgOy0DDBmdT%2FdyDzklyRjpEUTkCv76ymKurXw9P%2FAXyvFwzMbdv3g3lrlbXbmS%2B%2B&X-Amz-Signature=2bd41ec8c7057cd2a4467e4c81bdb5e7f3b03df16b478ca89934a5aea5119e40&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7GKKU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClTSZ6GnAkUJL5lDrtxlNJo%2Fh1lLWcVN%2BItMArFNgt7QIhAMdS84%2BbInwhSJJ7JaFE7P84WnczWgE5nqkACC08qAlgKv8DCEYQABoMNjM3NDIzMTgzODA1Igzcgz%2FailtxWfZ1EAoq3APiM4kGpIY%2F9e%2BmdZU4%2FkH7EB6ZuZXXpFfAjAIU20%2B%2FhEQDDN1zVAcFGShCfTFQ1A9JuP1n28dLVMyQLCfSPktjDJq51MNDWCt8mu7zAzzXugSe2Y5unVjhZy9hrI1H7m1pSsD565F63Mnu8esxBplAXzdLOFTvSxXVDIAap2Fbdsn43vCE7Jibf7qCxWVXBl4l%2Fi3B5i0tY8owkgrmhauO4rJqPFaeI%2FaWDjkn3%2BYVK0i%2BeUAsLrFqLcty0S4q43ut3rAidfEReLH2AswFNy7H06siWG5Tv8k16sRGBLaJGBbqryhykTwJl7YEEEsxdWaBfiUZOKSYL1XWpFHuWbNoLeKRR%2B1TeHq2%2FPmBLX1qKyvBXkLUH4%2BY7V9aEHoyp8WbDooSFPo5gwKCDfZ0ufOFmbEAPdhFjKfkxKgDtayW%2FlxD6785FZ6vvPuks9JcTe5quPAG6jRqZSYXBoFMeI4p%2B68rY3ADC8oxlObmdqZqEVyMlKtziZSj7A7ZXlZv6GcFJlJmOxc%2BC9sSz2KSMa5IS89EmoAdeHSoPNMacAFwMSdguvTAwlXw4WH02CK4fGCcOh6R%2BiLx15zufwoYsfighTmZxRlwqVY7VXi%2Ft5cEh1qdSMyVBFbH5CbrQzDI36u%2BBjqkAYlufCUjolJit65hgnN9KKybDo2eoZR8xF7oyuDjerfyKmiOUPGSstKD9cJf9xTM5P13RKDlIMfLYPEEZtt6CzBDp%2FOewkPsPlat%2F3rf4a1QebPfunoXWlsJ%2B28LSg%2FSMF%2F3A7LqeoqMVgfS3VqFEUz2YKbecgOy0DDBmdT%2FdyDzklyRjpEUTkCv76ymKurXw9P%2FAXyvFwzMbdv3g3lrlbXbmS%2B%2B&X-Amz-Signature=971b4055a317815a9bc30ae5b9ab34c8c1fc6d6a89cb00912017badd4062613c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7GKKU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClTSZ6GnAkUJL5lDrtxlNJo%2Fh1lLWcVN%2BItMArFNgt7QIhAMdS84%2BbInwhSJJ7JaFE7P84WnczWgE5nqkACC08qAlgKv8DCEYQABoMNjM3NDIzMTgzODA1Igzcgz%2FailtxWfZ1EAoq3APiM4kGpIY%2F9e%2BmdZU4%2FkH7EB6ZuZXXpFfAjAIU20%2B%2FhEQDDN1zVAcFGShCfTFQ1A9JuP1n28dLVMyQLCfSPktjDJq51MNDWCt8mu7zAzzXugSe2Y5unVjhZy9hrI1H7m1pSsD565F63Mnu8esxBplAXzdLOFTvSxXVDIAap2Fbdsn43vCE7Jibf7qCxWVXBl4l%2Fi3B5i0tY8owkgrmhauO4rJqPFaeI%2FaWDjkn3%2BYVK0i%2BeUAsLrFqLcty0S4q43ut3rAidfEReLH2AswFNy7H06siWG5Tv8k16sRGBLaJGBbqryhykTwJl7YEEEsxdWaBfiUZOKSYL1XWpFHuWbNoLeKRR%2B1TeHq2%2FPmBLX1qKyvBXkLUH4%2BY7V9aEHoyp8WbDooSFPo5gwKCDfZ0ufOFmbEAPdhFjKfkxKgDtayW%2FlxD6785FZ6vvPuks9JcTe5quPAG6jRqZSYXBoFMeI4p%2B68rY3ADC8oxlObmdqZqEVyMlKtziZSj7A7ZXlZv6GcFJlJmOxc%2BC9sSz2KSMa5IS89EmoAdeHSoPNMacAFwMSdguvTAwlXw4WH02CK4fGCcOh6R%2BiLx15zufwoYsfighTmZxRlwqVY7VXi%2Ft5cEh1qdSMyVBFbH5CbrQzDI36u%2BBjqkAYlufCUjolJit65hgnN9KKybDo2eoZR8xF7oyuDjerfyKmiOUPGSstKD9cJf9xTM5P13RKDlIMfLYPEEZtt6CzBDp%2FOewkPsPlat%2F3rf4a1QebPfunoXWlsJ%2B28LSg%2FSMF%2F3A7LqeoqMVgfS3VqFEUz2YKbecgOy0DDBmdT%2FdyDzklyRjpEUTkCv76ymKurXw9P%2FAXyvFwzMbdv3g3lrlbXbmS%2B%2B&X-Amz-Signature=d61f9ccd7070762168c13973229b6509f41c4a77827d0a39ff63c07d9836256d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7GKKU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClTSZ6GnAkUJL5lDrtxlNJo%2Fh1lLWcVN%2BItMArFNgt7QIhAMdS84%2BbInwhSJJ7JaFE7P84WnczWgE5nqkACC08qAlgKv8DCEYQABoMNjM3NDIzMTgzODA1Igzcgz%2FailtxWfZ1EAoq3APiM4kGpIY%2F9e%2BmdZU4%2FkH7EB6ZuZXXpFfAjAIU20%2B%2FhEQDDN1zVAcFGShCfTFQ1A9JuP1n28dLVMyQLCfSPktjDJq51MNDWCt8mu7zAzzXugSe2Y5unVjhZy9hrI1H7m1pSsD565F63Mnu8esxBplAXzdLOFTvSxXVDIAap2Fbdsn43vCE7Jibf7qCxWVXBl4l%2Fi3B5i0tY8owkgrmhauO4rJqPFaeI%2FaWDjkn3%2BYVK0i%2BeUAsLrFqLcty0S4q43ut3rAidfEReLH2AswFNy7H06siWG5Tv8k16sRGBLaJGBbqryhykTwJl7YEEEsxdWaBfiUZOKSYL1XWpFHuWbNoLeKRR%2B1TeHq2%2FPmBLX1qKyvBXkLUH4%2BY7V9aEHoyp8WbDooSFPo5gwKCDfZ0ufOFmbEAPdhFjKfkxKgDtayW%2FlxD6785FZ6vvPuks9JcTe5quPAG6jRqZSYXBoFMeI4p%2B68rY3ADC8oxlObmdqZqEVyMlKtziZSj7A7ZXlZv6GcFJlJmOxc%2BC9sSz2KSMa5IS89EmoAdeHSoPNMacAFwMSdguvTAwlXw4WH02CK4fGCcOh6R%2BiLx15zufwoYsfighTmZxRlwqVY7VXi%2Ft5cEh1qdSMyVBFbH5CbrQzDI36u%2BBjqkAYlufCUjolJit65hgnN9KKybDo2eoZR8xF7oyuDjerfyKmiOUPGSstKD9cJf9xTM5P13RKDlIMfLYPEEZtt6CzBDp%2FOewkPsPlat%2F3rf4a1QebPfunoXWlsJ%2B28LSg%2FSMF%2F3A7LqeoqMVgfS3VqFEUz2YKbecgOy0DDBmdT%2FdyDzklyRjpEUTkCv76ymKurXw9P%2FAXyvFwzMbdv3g3lrlbXbmS%2B%2B&X-Amz-Signature=3979becf460820539926990add2b7bb0b922b4d37542a9f42372eb681df3c667&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7GKKU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClTSZ6GnAkUJL5lDrtxlNJo%2Fh1lLWcVN%2BItMArFNgt7QIhAMdS84%2BbInwhSJJ7JaFE7P84WnczWgE5nqkACC08qAlgKv8DCEYQABoMNjM3NDIzMTgzODA1Igzcgz%2FailtxWfZ1EAoq3APiM4kGpIY%2F9e%2BmdZU4%2FkH7EB6ZuZXXpFfAjAIU20%2B%2FhEQDDN1zVAcFGShCfTFQ1A9JuP1n28dLVMyQLCfSPktjDJq51MNDWCt8mu7zAzzXugSe2Y5unVjhZy9hrI1H7m1pSsD565F63Mnu8esxBplAXzdLOFTvSxXVDIAap2Fbdsn43vCE7Jibf7qCxWVXBl4l%2Fi3B5i0tY8owkgrmhauO4rJqPFaeI%2FaWDjkn3%2BYVK0i%2BeUAsLrFqLcty0S4q43ut3rAidfEReLH2AswFNy7H06siWG5Tv8k16sRGBLaJGBbqryhykTwJl7YEEEsxdWaBfiUZOKSYL1XWpFHuWbNoLeKRR%2B1TeHq2%2FPmBLX1qKyvBXkLUH4%2BY7V9aEHoyp8WbDooSFPo5gwKCDfZ0ufOFmbEAPdhFjKfkxKgDtayW%2FlxD6785FZ6vvPuks9JcTe5quPAG6jRqZSYXBoFMeI4p%2B68rY3ADC8oxlObmdqZqEVyMlKtziZSj7A7ZXlZv6GcFJlJmOxc%2BC9sSz2KSMa5IS89EmoAdeHSoPNMacAFwMSdguvTAwlXw4WH02CK4fGCcOh6R%2BiLx15zufwoYsfighTmZxRlwqVY7VXi%2Ft5cEh1qdSMyVBFbH5CbrQzDI36u%2BBjqkAYlufCUjolJit65hgnN9KKybDo2eoZR8xF7oyuDjerfyKmiOUPGSstKD9cJf9xTM5P13RKDlIMfLYPEEZtt6CzBDp%2FOewkPsPlat%2F3rf4a1QebPfunoXWlsJ%2B28LSg%2FSMF%2F3A7LqeoqMVgfS3VqFEUz2YKbecgOy0DDBmdT%2FdyDzklyRjpEUTkCv76ymKurXw9P%2FAXyvFwzMbdv3g3lrlbXbmS%2B%2B&X-Amz-Signature=17cc25342ee86d6bb1c19b7e829efc9cf96c25e38130ae04e359e721588f9d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7GKKU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClTSZ6GnAkUJL5lDrtxlNJo%2Fh1lLWcVN%2BItMArFNgt7QIhAMdS84%2BbInwhSJJ7JaFE7P84WnczWgE5nqkACC08qAlgKv8DCEYQABoMNjM3NDIzMTgzODA1Igzcgz%2FailtxWfZ1EAoq3APiM4kGpIY%2F9e%2BmdZU4%2FkH7EB6ZuZXXpFfAjAIU20%2B%2FhEQDDN1zVAcFGShCfTFQ1A9JuP1n28dLVMyQLCfSPktjDJq51MNDWCt8mu7zAzzXugSe2Y5unVjhZy9hrI1H7m1pSsD565F63Mnu8esxBplAXzdLOFTvSxXVDIAap2Fbdsn43vCE7Jibf7qCxWVXBl4l%2Fi3B5i0tY8owkgrmhauO4rJqPFaeI%2FaWDjkn3%2BYVK0i%2BeUAsLrFqLcty0S4q43ut3rAidfEReLH2AswFNy7H06siWG5Tv8k16sRGBLaJGBbqryhykTwJl7YEEEsxdWaBfiUZOKSYL1XWpFHuWbNoLeKRR%2B1TeHq2%2FPmBLX1qKyvBXkLUH4%2BY7V9aEHoyp8WbDooSFPo5gwKCDfZ0ufOFmbEAPdhFjKfkxKgDtayW%2FlxD6785FZ6vvPuks9JcTe5quPAG6jRqZSYXBoFMeI4p%2B68rY3ADC8oxlObmdqZqEVyMlKtziZSj7A7ZXlZv6GcFJlJmOxc%2BC9sSz2KSMa5IS89EmoAdeHSoPNMacAFwMSdguvTAwlXw4WH02CK4fGCcOh6R%2BiLx15zufwoYsfighTmZxRlwqVY7VXi%2Ft5cEh1qdSMyVBFbH5CbrQzDI36u%2BBjqkAYlufCUjolJit65hgnN9KKybDo2eoZR8xF7oyuDjerfyKmiOUPGSstKD9cJf9xTM5P13RKDlIMfLYPEEZtt6CzBDp%2FOewkPsPlat%2F3rf4a1QebPfunoXWlsJ%2B28LSg%2FSMF%2F3A7LqeoqMVgfS3VqFEUz2YKbecgOy0DDBmdT%2FdyDzklyRjpEUTkCv76ymKurXw9P%2FAXyvFwzMbdv3g3lrlbXbmS%2B%2B&X-Amz-Signature=88e3ff55c2e6383d4ab1db59515c775448bbd4775df1b969b7b1d1bf6089dd34&X-Amz-SignedHeaders=host&x-id=GetObject)
