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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR47T7BC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDNHuCm81emgv4yYtaSWXYX2eP%2FCk9KJaXAanIyac0kAiEA2ryRyBW0oyw5mH5fT0lHIehVjptLKhKMP2qRLuWZD54qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BSdistaVqoN%2FJAAyrcAwwz2slHhHyyTqo31T%2BagHUcy2bslitui7FWKC7hpwb3VsMEgj89XpZwpS0A%2BtLLe2bFM%2Bh4eQ9%2F6gFRUtrvngX4oFHukB%2BfmLjF9m0ZcBUDgVHOJVRjeqP1tF64hUU2qTUJRkn%2FS1gtZ4CDQtNTFToDDf%2BHNA%2FGN6u0W6F%2FeEMgo%2FyFu2WnUPDwUqp8jdEZfDdSYlt9TIUHBDux32QyKOTHXDrut2yzTiODNI9Vj2KHlkYTGlQMIIVXdb5bHE91I7UdL9UaIsTx9Y%2Ba%2BYOysjwVeDmOzVlWi1qp5HN5d%2FXB8NMSAbS9NHqmUwdIE2bweaQjzfmLzaI9q1U8HrkXNjvMAMYyKczZPuuraB%2Boy2WE6ViuZj8OP6wPocExE%2FeF%2F1S9DdiWFJyaYiOYhIP23gRgQ4XajknrH9RhX%2BfyLtFkTCyGayWnpwtvfFiSCXlNSXH25CI3nIBtY%2FcEWY0jybeYxo07Hc4tXZfmSAQmMcCBd%2B8qyAcBG9cIfFFkzCqdTXPkxKuCbuaLtXQlrAIBp34bCSKJx35alQ2d1llAeXYEsEkYvaqlV4Z0duftWGSATQTh8sCFLgbEG%2BTZ1QgYeQ%2BB4%2BuH6shpACOvJhGOYNT5wZItAqfWBNiNYGrHMM7%2BxMMGOqUBVEeb8sL4x2HBYLLl0QunQcqp4hw5dMQ5pssByOLKT%2FO49YDItfhLqT6NRFQ%2FlXQ4we1kvKHfpVMCC3Nd5gewYqdMMImv26OlAJfkaH%2Bk4dT1ZvjZoyqruQpT0OSJaxGoEyguDCsKj1OEXhv48z9YfaMqk50EyJ0b7LzLf07OvevygoR8UQdeZ0GmTW2JytG3AuLu0zMsDfqTq4YJubsrVVNILvmB&X-Amz-Signature=2992856cbeff638db2c7b55c64f862ebb472272c2d87306430156cb5c6983a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR47T7BC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDNHuCm81emgv4yYtaSWXYX2eP%2FCk9KJaXAanIyac0kAiEA2ryRyBW0oyw5mH5fT0lHIehVjptLKhKMP2qRLuWZD54qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BSdistaVqoN%2FJAAyrcAwwz2slHhHyyTqo31T%2BagHUcy2bslitui7FWKC7hpwb3VsMEgj89XpZwpS0A%2BtLLe2bFM%2Bh4eQ9%2F6gFRUtrvngX4oFHukB%2BfmLjF9m0ZcBUDgVHOJVRjeqP1tF64hUU2qTUJRkn%2FS1gtZ4CDQtNTFToDDf%2BHNA%2FGN6u0W6F%2FeEMgo%2FyFu2WnUPDwUqp8jdEZfDdSYlt9TIUHBDux32QyKOTHXDrut2yzTiODNI9Vj2KHlkYTGlQMIIVXdb5bHE91I7UdL9UaIsTx9Y%2Ba%2BYOysjwVeDmOzVlWi1qp5HN5d%2FXB8NMSAbS9NHqmUwdIE2bweaQjzfmLzaI9q1U8HrkXNjvMAMYyKczZPuuraB%2Boy2WE6ViuZj8OP6wPocExE%2FeF%2F1S9DdiWFJyaYiOYhIP23gRgQ4XajknrH9RhX%2BfyLtFkTCyGayWnpwtvfFiSCXlNSXH25CI3nIBtY%2FcEWY0jybeYxo07Hc4tXZfmSAQmMcCBd%2B8qyAcBG9cIfFFkzCqdTXPkxKuCbuaLtXQlrAIBp34bCSKJx35alQ2d1llAeXYEsEkYvaqlV4Z0duftWGSATQTh8sCFLgbEG%2BTZ1QgYeQ%2BB4%2BuH6shpACOvJhGOYNT5wZItAqfWBNiNYGrHMM7%2BxMMGOqUBVEeb8sL4x2HBYLLl0QunQcqp4hw5dMQ5pssByOLKT%2FO49YDItfhLqT6NRFQ%2FlXQ4we1kvKHfpVMCC3Nd5gewYqdMMImv26OlAJfkaH%2Bk4dT1ZvjZoyqruQpT0OSJaxGoEyguDCsKj1OEXhv48z9YfaMqk50EyJ0b7LzLf07OvevygoR8UQdeZ0GmTW2JytG3AuLu0zMsDfqTq4YJubsrVVNILvmB&X-Amz-Signature=080e60aa81d0dcf7e8ab0bae178a62f5588bb4c4721695a6db5f669811d265a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR47T7BC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDNHuCm81emgv4yYtaSWXYX2eP%2FCk9KJaXAanIyac0kAiEA2ryRyBW0oyw5mH5fT0lHIehVjptLKhKMP2qRLuWZD54qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BSdistaVqoN%2FJAAyrcAwwz2slHhHyyTqo31T%2BagHUcy2bslitui7FWKC7hpwb3VsMEgj89XpZwpS0A%2BtLLe2bFM%2Bh4eQ9%2F6gFRUtrvngX4oFHukB%2BfmLjF9m0ZcBUDgVHOJVRjeqP1tF64hUU2qTUJRkn%2FS1gtZ4CDQtNTFToDDf%2BHNA%2FGN6u0W6F%2FeEMgo%2FyFu2WnUPDwUqp8jdEZfDdSYlt9TIUHBDux32QyKOTHXDrut2yzTiODNI9Vj2KHlkYTGlQMIIVXdb5bHE91I7UdL9UaIsTx9Y%2Ba%2BYOysjwVeDmOzVlWi1qp5HN5d%2FXB8NMSAbS9NHqmUwdIE2bweaQjzfmLzaI9q1U8HrkXNjvMAMYyKczZPuuraB%2Boy2WE6ViuZj8OP6wPocExE%2FeF%2F1S9DdiWFJyaYiOYhIP23gRgQ4XajknrH9RhX%2BfyLtFkTCyGayWnpwtvfFiSCXlNSXH25CI3nIBtY%2FcEWY0jybeYxo07Hc4tXZfmSAQmMcCBd%2B8qyAcBG9cIfFFkzCqdTXPkxKuCbuaLtXQlrAIBp34bCSKJx35alQ2d1llAeXYEsEkYvaqlV4Z0duftWGSATQTh8sCFLgbEG%2BTZ1QgYeQ%2BB4%2BuH6shpACOvJhGOYNT5wZItAqfWBNiNYGrHMM7%2BxMMGOqUBVEeb8sL4x2HBYLLl0QunQcqp4hw5dMQ5pssByOLKT%2FO49YDItfhLqT6NRFQ%2FlXQ4we1kvKHfpVMCC3Nd5gewYqdMMImv26OlAJfkaH%2Bk4dT1ZvjZoyqruQpT0OSJaxGoEyguDCsKj1OEXhv48z9YfaMqk50EyJ0b7LzLf07OvevygoR8UQdeZ0GmTW2JytG3AuLu0zMsDfqTq4YJubsrVVNILvmB&X-Amz-Signature=d2cec25ff5a5695f300ea773ac9f7b60b9357d413e9d02995679b9fbbce78d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR47T7BC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDNHuCm81emgv4yYtaSWXYX2eP%2FCk9KJaXAanIyac0kAiEA2ryRyBW0oyw5mH5fT0lHIehVjptLKhKMP2qRLuWZD54qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BSdistaVqoN%2FJAAyrcAwwz2slHhHyyTqo31T%2BagHUcy2bslitui7FWKC7hpwb3VsMEgj89XpZwpS0A%2BtLLe2bFM%2Bh4eQ9%2F6gFRUtrvngX4oFHukB%2BfmLjF9m0ZcBUDgVHOJVRjeqP1tF64hUU2qTUJRkn%2FS1gtZ4CDQtNTFToDDf%2BHNA%2FGN6u0W6F%2FeEMgo%2FyFu2WnUPDwUqp8jdEZfDdSYlt9TIUHBDux32QyKOTHXDrut2yzTiODNI9Vj2KHlkYTGlQMIIVXdb5bHE91I7UdL9UaIsTx9Y%2Ba%2BYOysjwVeDmOzVlWi1qp5HN5d%2FXB8NMSAbS9NHqmUwdIE2bweaQjzfmLzaI9q1U8HrkXNjvMAMYyKczZPuuraB%2Boy2WE6ViuZj8OP6wPocExE%2FeF%2F1S9DdiWFJyaYiOYhIP23gRgQ4XajknrH9RhX%2BfyLtFkTCyGayWnpwtvfFiSCXlNSXH25CI3nIBtY%2FcEWY0jybeYxo07Hc4tXZfmSAQmMcCBd%2B8qyAcBG9cIfFFkzCqdTXPkxKuCbuaLtXQlrAIBp34bCSKJx35alQ2d1llAeXYEsEkYvaqlV4Z0duftWGSATQTh8sCFLgbEG%2BTZ1QgYeQ%2BB4%2BuH6shpACOvJhGOYNT5wZItAqfWBNiNYGrHMM7%2BxMMGOqUBVEeb8sL4x2HBYLLl0QunQcqp4hw5dMQ5pssByOLKT%2FO49YDItfhLqT6NRFQ%2FlXQ4we1kvKHfpVMCC3Nd5gewYqdMMImv26OlAJfkaH%2Bk4dT1ZvjZoyqruQpT0OSJaxGoEyguDCsKj1OEXhv48z9YfaMqk50EyJ0b7LzLf07OvevygoR8UQdeZ0GmTW2JytG3AuLu0zMsDfqTq4YJubsrVVNILvmB&X-Amz-Signature=f4ca8ac08aae665c70bdd31379d8eaa9b20e1d23b8f1a82eeda4ce5c272129d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR47T7BC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDNHuCm81emgv4yYtaSWXYX2eP%2FCk9KJaXAanIyac0kAiEA2ryRyBW0oyw5mH5fT0lHIehVjptLKhKMP2qRLuWZD54qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BSdistaVqoN%2FJAAyrcAwwz2slHhHyyTqo31T%2BagHUcy2bslitui7FWKC7hpwb3VsMEgj89XpZwpS0A%2BtLLe2bFM%2Bh4eQ9%2F6gFRUtrvngX4oFHukB%2BfmLjF9m0ZcBUDgVHOJVRjeqP1tF64hUU2qTUJRkn%2FS1gtZ4CDQtNTFToDDf%2BHNA%2FGN6u0W6F%2FeEMgo%2FyFu2WnUPDwUqp8jdEZfDdSYlt9TIUHBDux32QyKOTHXDrut2yzTiODNI9Vj2KHlkYTGlQMIIVXdb5bHE91I7UdL9UaIsTx9Y%2Ba%2BYOysjwVeDmOzVlWi1qp5HN5d%2FXB8NMSAbS9NHqmUwdIE2bweaQjzfmLzaI9q1U8HrkXNjvMAMYyKczZPuuraB%2Boy2WE6ViuZj8OP6wPocExE%2FeF%2F1S9DdiWFJyaYiOYhIP23gRgQ4XajknrH9RhX%2BfyLtFkTCyGayWnpwtvfFiSCXlNSXH25CI3nIBtY%2FcEWY0jybeYxo07Hc4tXZfmSAQmMcCBd%2B8qyAcBG9cIfFFkzCqdTXPkxKuCbuaLtXQlrAIBp34bCSKJx35alQ2d1llAeXYEsEkYvaqlV4Z0duftWGSATQTh8sCFLgbEG%2BTZ1QgYeQ%2BB4%2BuH6shpACOvJhGOYNT5wZItAqfWBNiNYGrHMM7%2BxMMGOqUBVEeb8sL4x2HBYLLl0QunQcqp4hw5dMQ5pssByOLKT%2FO49YDItfhLqT6NRFQ%2FlXQ4we1kvKHfpVMCC3Nd5gewYqdMMImv26OlAJfkaH%2Bk4dT1ZvjZoyqruQpT0OSJaxGoEyguDCsKj1OEXhv48z9YfaMqk50EyJ0b7LzLf07OvevygoR8UQdeZ0GmTW2JytG3AuLu0zMsDfqTq4YJubsrVVNILvmB&X-Amz-Signature=4c42b2bc5714dffb5edbabebf09a215f1ad6644fc391b85f5e70ce6056bddf67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR47T7BC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDNHuCm81emgv4yYtaSWXYX2eP%2FCk9KJaXAanIyac0kAiEA2ryRyBW0oyw5mH5fT0lHIehVjptLKhKMP2qRLuWZD54qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BSdistaVqoN%2FJAAyrcAwwz2slHhHyyTqo31T%2BagHUcy2bslitui7FWKC7hpwb3VsMEgj89XpZwpS0A%2BtLLe2bFM%2Bh4eQ9%2F6gFRUtrvngX4oFHukB%2BfmLjF9m0ZcBUDgVHOJVRjeqP1tF64hUU2qTUJRkn%2FS1gtZ4CDQtNTFToDDf%2BHNA%2FGN6u0W6F%2FeEMgo%2FyFu2WnUPDwUqp8jdEZfDdSYlt9TIUHBDux32QyKOTHXDrut2yzTiODNI9Vj2KHlkYTGlQMIIVXdb5bHE91I7UdL9UaIsTx9Y%2Ba%2BYOysjwVeDmOzVlWi1qp5HN5d%2FXB8NMSAbS9NHqmUwdIE2bweaQjzfmLzaI9q1U8HrkXNjvMAMYyKczZPuuraB%2Boy2WE6ViuZj8OP6wPocExE%2FeF%2F1S9DdiWFJyaYiOYhIP23gRgQ4XajknrH9RhX%2BfyLtFkTCyGayWnpwtvfFiSCXlNSXH25CI3nIBtY%2FcEWY0jybeYxo07Hc4tXZfmSAQmMcCBd%2B8qyAcBG9cIfFFkzCqdTXPkxKuCbuaLtXQlrAIBp34bCSKJx35alQ2d1llAeXYEsEkYvaqlV4Z0duftWGSATQTh8sCFLgbEG%2BTZ1QgYeQ%2BB4%2BuH6shpACOvJhGOYNT5wZItAqfWBNiNYGrHMM7%2BxMMGOqUBVEeb8sL4x2HBYLLl0QunQcqp4hw5dMQ5pssByOLKT%2FO49YDItfhLqT6NRFQ%2FlXQ4we1kvKHfpVMCC3Nd5gewYqdMMImv26OlAJfkaH%2Bk4dT1ZvjZoyqruQpT0OSJaxGoEyguDCsKj1OEXhv48z9YfaMqk50EyJ0b7LzLf07OvevygoR8UQdeZ0GmTW2JytG3AuLu0zMsDfqTq4YJubsrVVNILvmB&X-Amz-Signature=a9a4155412ff147fe8f1c72051c12ee50a85a1be825545d6d9f2c0d8e092f7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
