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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2FBLYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDRz8j8C6Umm%2BZdvJ8IBxY3%2BaTWu5X31USS5d7gsQrsmAiEAvZz4Iii1cAwaONyIZ8XJGiZa0nBjzhEe6%2F9NjDbs4rMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISwIReUAtB7J7JTECrcA5cIS2PAasT7R96ez0okM6apaG2oM5eMXcJIjI2XgAkGL8w%2Fy9h04o4NlaOFh5eFgiPR9ezDfHYtwxHWQi1TcZuoKur9FF8yZKUmHNktFPErMBVkDk3STmziLsimaQgkBqLdgOMeuwLuoc68sdHwCNPESFWMJfU%2F%2Bj%2BfnFHmVnJmyw65iIw%2B5NSOraZGuUlXWx9aI7VdY%2FWwLDytRB7m1ujCGHsf8avQSJeG0ymk73ZSeXHBfwtr7yUSTOJhO%2BVhW8DfWK%2FlhUtupWj1fYrjcu8TxhdrKcZx0MPtpXe3NfpDsmNanBoK7JScvEnLsbyAuxulRspHNb56qzWDaUFbTpvwcGoIDIfEM9e5Y29AypV5z1YRXH0Zhc1RNMJxyV%2BUV2glbbniKelYHGTG6tMuIu1YoH7ZG4bUxy10sjiLmHpR4AxUFMemSR0LauI0TuCTXmcrFIBfAkiHd2ozxaayLw74s7o5Os53IvKFpLbJXrPp98f7YA37V7Fz5A1mQdGfQLipufTyx9BaPab0YHSUMC7BEb1t5p%2BRrktRcOQMRfISprKwdnYzcfpYNE4heU0DDNPfBGcj6Agvq38WdbHSW6KQnilDy%2BVAmeVUk1567ownRvpMY8uqWnC0iKHrMKqTusEGOqUBEkmNHYRcztDupZT%2Bz2QiY%2Be0hfrDuIRE4Mquxva593mxbrD6zcuoBb%2FbsCzN7Ug0frO3kYLUrYwBgR7meEq7KHBmvrRFFxQhfCqhQrBmlNGowXoFyDLyuFkclR7IcjNJkN3hwwi7G%2FRO9cQv7agzog5MB%2Fe1MhRlC1GkX8t0%2B5AU%2Bo7%2BL%2BnptVhUBRGegsgdhAZ6OpcjJloPnOiLrAor%2FcqwV5fX&X-Amz-Signature=32dad93593b7043f3477a646e69d2ea07045dbd1919dcba7ec936a38e4746c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2FBLYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDRz8j8C6Umm%2BZdvJ8IBxY3%2BaTWu5X31USS5d7gsQrsmAiEAvZz4Iii1cAwaONyIZ8XJGiZa0nBjzhEe6%2F9NjDbs4rMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISwIReUAtB7J7JTECrcA5cIS2PAasT7R96ez0okM6apaG2oM5eMXcJIjI2XgAkGL8w%2Fy9h04o4NlaOFh5eFgiPR9ezDfHYtwxHWQi1TcZuoKur9FF8yZKUmHNktFPErMBVkDk3STmziLsimaQgkBqLdgOMeuwLuoc68sdHwCNPESFWMJfU%2F%2Bj%2BfnFHmVnJmyw65iIw%2B5NSOraZGuUlXWx9aI7VdY%2FWwLDytRB7m1ujCGHsf8avQSJeG0ymk73ZSeXHBfwtr7yUSTOJhO%2BVhW8DfWK%2FlhUtupWj1fYrjcu8TxhdrKcZx0MPtpXe3NfpDsmNanBoK7JScvEnLsbyAuxulRspHNb56qzWDaUFbTpvwcGoIDIfEM9e5Y29AypV5z1YRXH0Zhc1RNMJxyV%2BUV2glbbniKelYHGTG6tMuIu1YoH7ZG4bUxy10sjiLmHpR4AxUFMemSR0LauI0TuCTXmcrFIBfAkiHd2ozxaayLw74s7o5Os53IvKFpLbJXrPp98f7YA37V7Fz5A1mQdGfQLipufTyx9BaPab0YHSUMC7BEb1t5p%2BRrktRcOQMRfISprKwdnYzcfpYNE4heU0DDNPfBGcj6Agvq38WdbHSW6KQnilDy%2BVAmeVUk1567ownRvpMY8uqWnC0iKHrMKqTusEGOqUBEkmNHYRcztDupZT%2Bz2QiY%2Be0hfrDuIRE4Mquxva593mxbrD6zcuoBb%2FbsCzN7Ug0frO3kYLUrYwBgR7meEq7KHBmvrRFFxQhfCqhQrBmlNGowXoFyDLyuFkclR7IcjNJkN3hwwi7G%2FRO9cQv7agzog5MB%2Fe1MhRlC1GkX8t0%2B5AU%2Bo7%2BL%2BnptVhUBRGegsgdhAZ6OpcjJloPnOiLrAor%2FcqwV5fX&X-Amz-Signature=aebe8d8b828fe966f77f6ce7e057d336c497e92ae41106107fc2c3eb52ebb009&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2FBLYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDRz8j8C6Umm%2BZdvJ8IBxY3%2BaTWu5X31USS5d7gsQrsmAiEAvZz4Iii1cAwaONyIZ8XJGiZa0nBjzhEe6%2F9NjDbs4rMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISwIReUAtB7J7JTECrcA5cIS2PAasT7R96ez0okM6apaG2oM5eMXcJIjI2XgAkGL8w%2Fy9h04o4NlaOFh5eFgiPR9ezDfHYtwxHWQi1TcZuoKur9FF8yZKUmHNktFPErMBVkDk3STmziLsimaQgkBqLdgOMeuwLuoc68sdHwCNPESFWMJfU%2F%2Bj%2BfnFHmVnJmyw65iIw%2B5NSOraZGuUlXWx9aI7VdY%2FWwLDytRB7m1ujCGHsf8avQSJeG0ymk73ZSeXHBfwtr7yUSTOJhO%2BVhW8DfWK%2FlhUtupWj1fYrjcu8TxhdrKcZx0MPtpXe3NfpDsmNanBoK7JScvEnLsbyAuxulRspHNb56qzWDaUFbTpvwcGoIDIfEM9e5Y29AypV5z1YRXH0Zhc1RNMJxyV%2BUV2glbbniKelYHGTG6tMuIu1YoH7ZG4bUxy10sjiLmHpR4AxUFMemSR0LauI0TuCTXmcrFIBfAkiHd2ozxaayLw74s7o5Os53IvKFpLbJXrPp98f7YA37V7Fz5A1mQdGfQLipufTyx9BaPab0YHSUMC7BEb1t5p%2BRrktRcOQMRfISprKwdnYzcfpYNE4heU0DDNPfBGcj6Agvq38WdbHSW6KQnilDy%2BVAmeVUk1567ownRvpMY8uqWnC0iKHrMKqTusEGOqUBEkmNHYRcztDupZT%2Bz2QiY%2Be0hfrDuIRE4Mquxva593mxbrD6zcuoBb%2FbsCzN7Ug0frO3kYLUrYwBgR7meEq7KHBmvrRFFxQhfCqhQrBmlNGowXoFyDLyuFkclR7IcjNJkN3hwwi7G%2FRO9cQv7agzog5MB%2Fe1MhRlC1GkX8t0%2B5AU%2Bo7%2BL%2BnptVhUBRGegsgdhAZ6OpcjJloPnOiLrAor%2FcqwV5fX&X-Amz-Signature=c32930804d072f0791f3b00cef247cb7b60a819e7c3d20d52ae934eb0b62e9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2FBLYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDRz8j8C6Umm%2BZdvJ8IBxY3%2BaTWu5X31USS5d7gsQrsmAiEAvZz4Iii1cAwaONyIZ8XJGiZa0nBjzhEe6%2F9NjDbs4rMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISwIReUAtB7J7JTECrcA5cIS2PAasT7R96ez0okM6apaG2oM5eMXcJIjI2XgAkGL8w%2Fy9h04o4NlaOFh5eFgiPR9ezDfHYtwxHWQi1TcZuoKur9FF8yZKUmHNktFPErMBVkDk3STmziLsimaQgkBqLdgOMeuwLuoc68sdHwCNPESFWMJfU%2F%2Bj%2BfnFHmVnJmyw65iIw%2B5NSOraZGuUlXWx9aI7VdY%2FWwLDytRB7m1ujCGHsf8avQSJeG0ymk73ZSeXHBfwtr7yUSTOJhO%2BVhW8DfWK%2FlhUtupWj1fYrjcu8TxhdrKcZx0MPtpXe3NfpDsmNanBoK7JScvEnLsbyAuxulRspHNb56qzWDaUFbTpvwcGoIDIfEM9e5Y29AypV5z1YRXH0Zhc1RNMJxyV%2BUV2glbbniKelYHGTG6tMuIu1YoH7ZG4bUxy10sjiLmHpR4AxUFMemSR0LauI0TuCTXmcrFIBfAkiHd2ozxaayLw74s7o5Os53IvKFpLbJXrPp98f7YA37V7Fz5A1mQdGfQLipufTyx9BaPab0YHSUMC7BEb1t5p%2BRrktRcOQMRfISprKwdnYzcfpYNE4heU0DDNPfBGcj6Agvq38WdbHSW6KQnilDy%2BVAmeVUk1567ownRvpMY8uqWnC0iKHrMKqTusEGOqUBEkmNHYRcztDupZT%2Bz2QiY%2Be0hfrDuIRE4Mquxva593mxbrD6zcuoBb%2FbsCzN7Ug0frO3kYLUrYwBgR7meEq7KHBmvrRFFxQhfCqhQrBmlNGowXoFyDLyuFkclR7IcjNJkN3hwwi7G%2FRO9cQv7agzog5MB%2Fe1MhRlC1GkX8t0%2B5AU%2Bo7%2BL%2BnptVhUBRGegsgdhAZ6OpcjJloPnOiLrAor%2FcqwV5fX&X-Amz-Signature=d71d1bbbbd8d405d8c5effa7ccec29f9f5cffe6d08ea85a6edfcbdff1803ee87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2FBLYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDRz8j8C6Umm%2BZdvJ8IBxY3%2BaTWu5X31USS5d7gsQrsmAiEAvZz4Iii1cAwaONyIZ8XJGiZa0nBjzhEe6%2F9NjDbs4rMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISwIReUAtB7J7JTECrcA5cIS2PAasT7R96ez0okM6apaG2oM5eMXcJIjI2XgAkGL8w%2Fy9h04o4NlaOFh5eFgiPR9ezDfHYtwxHWQi1TcZuoKur9FF8yZKUmHNktFPErMBVkDk3STmziLsimaQgkBqLdgOMeuwLuoc68sdHwCNPESFWMJfU%2F%2Bj%2BfnFHmVnJmyw65iIw%2B5NSOraZGuUlXWx9aI7VdY%2FWwLDytRB7m1ujCGHsf8avQSJeG0ymk73ZSeXHBfwtr7yUSTOJhO%2BVhW8DfWK%2FlhUtupWj1fYrjcu8TxhdrKcZx0MPtpXe3NfpDsmNanBoK7JScvEnLsbyAuxulRspHNb56qzWDaUFbTpvwcGoIDIfEM9e5Y29AypV5z1YRXH0Zhc1RNMJxyV%2BUV2glbbniKelYHGTG6tMuIu1YoH7ZG4bUxy10sjiLmHpR4AxUFMemSR0LauI0TuCTXmcrFIBfAkiHd2ozxaayLw74s7o5Os53IvKFpLbJXrPp98f7YA37V7Fz5A1mQdGfQLipufTyx9BaPab0YHSUMC7BEb1t5p%2BRrktRcOQMRfISprKwdnYzcfpYNE4heU0DDNPfBGcj6Agvq38WdbHSW6KQnilDy%2BVAmeVUk1567ownRvpMY8uqWnC0iKHrMKqTusEGOqUBEkmNHYRcztDupZT%2Bz2QiY%2Be0hfrDuIRE4Mquxva593mxbrD6zcuoBb%2FbsCzN7Ug0frO3kYLUrYwBgR7meEq7KHBmvrRFFxQhfCqhQrBmlNGowXoFyDLyuFkclR7IcjNJkN3hwwi7G%2FRO9cQv7agzog5MB%2Fe1MhRlC1GkX8t0%2B5AU%2Bo7%2BL%2BnptVhUBRGegsgdhAZ6OpcjJloPnOiLrAor%2FcqwV5fX&X-Amz-Signature=68651cec771fc43d849ec65398e50daeb15baa3b4b32e09443ab386748d81675&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2FBLYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDRz8j8C6Umm%2BZdvJ8IBxY3%2BaTWu5X31USS5d7gsQrsmAiEAvZz4Iii1cAwaONyIZ8XJGiZa0nBjzhEe6%2F9NjDbs4rMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISwIReUAtB7J7JTECrcA5cIS2PAasT7R96ez0okM6apaG2oM5eMXcJIjI2XgAkGL8w%2Fy9h04o4NlaOFh5eFgiPR9ezDfHYtwxHWQi1TcZuoKur9FF8yZKUmHNktFPErMBVkDk3STmziLsimaQgkBqLdgOMeuwLuoc68sdHwCNPESFWMJfU%2F%2Bj%2BfnFHmVnJmyw65iIw%2B5NSOraZGuUlXWx9aI7VdY%2FWwLDytRB7m1ujCGHsf8avQSJeG0ymk73ZSeXHBfwtr7yUSTOJhO%2BVhW8DfWK%2FlhUtupWj1fYrjcu8TxhdrKcZx0MPtpXe3NfpDsmNanBoK7JScvEnLsbyAuxulRspHNb56qzWDaUFbTpvwcGoIDIfEM9e5Y29AypV5z1YRXH0Zhc1RNMJxyV%2BUV2glbbniKelYHGTG6tMuIu1YoH7ZG4bUxy10sjiLmHpR4AxUFMemSR0LauI0TuCTXmcrFIBfAkiHd2ozxaayLw74s7o5Os53IvKFpLbJXrPp98f7YA37V7Fz5A1mQdGfQLipufTyx9BaPab0YHSUMC7BEb1t5p%2BRrktRcOQMRfISprKwdnYzcfpYNE4heU0DDNPfBGcj6Agvq38WdbHSW6KQnilDy%2BVAmeVUk1567ownRvpMY8uqWnC0iKHrMKqTusEGOqUBEkmNHYRcztDupZT%2Bz2QiY%2Be0hfrDuIRE4Mquxva593mxbrD6zcuoBb%2FbsCzN7Ug0frO3kYLUrYwBgR7meEq7KHBmvrRFFxQhfCqhQrBmlNGowXoFyDLyuFkclR7IcjNJkN3hwwi7G%2FRO9cQv7agzog5MB%2Fe1MhRlC1GkX8t0%2B5AU%2Bo7%2BL%2BnptVhUBRGegsgdhAZ6OpcjJloPnOiLrAor%2FcqwV5fX&X-Amz-Signature=8bfb983584703363d442b0915753a2d9b74dfcce09afaa76948c083939b32b96&X-Amz-SignedHeaders=host&x-id=GetObject)
