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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7QEATC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC%2FcWkTl%2Frf1OCZU0n6p8DS0dmgDOwYapkWOtszXWS6fwIgJi8tWdBkiwJAXx151y73v%2BLZjA5gCqTpNoEOAH0pPOAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITemDNMtLA8F9MDeyrcAz2FEfvuk6dRharPnWD98DOBuTisRCS0GzyN2gQZky87%2F1346yywiJ7D%2F0oC%2B%2F8Z8FFZ9Y241V%2BCN5I%2FgWNu%2BYtmHgjML3SSxXhAeRvjcEZdiNx%2FcrmvAQNr9aWJ61doYmZYw0OjEw6T3kUuz8LDGau4%2FJ%2BcarGYYmt2dDABel2PlXUe400aRCTVeMhKr4u2dzuYdG7LH%2F%2BjcYm5euHsf0teD84z18s0FzmVLiaKMiem0v9VGvEbl5rhbYAcTB1bu11f3L7gxdW0l6RF6a22HQaMe4ZdxosDmw5wzD%2FC13jmTDL8tPRCImP8o46DhbBssUXKGZh9fwBkHFeNDOa8Fw3fwbAGKkK2lRCfQTa%2BFVCTQIE6qtQRnlMk2CL0p2M0atoSZiS0UYrB%2FgTtPrxkoLMoPZbnubfPj4lSsF%2FiGgLNyyDUwHuoEGp7OpaJCy0LlKp28U62lvlalYrc11j4mnTJ7JtskL5j4QWFL2F%2BZWA5%2BETG3Kx4fji%2FicZerZWz4y8YJz%2FjMC%2FzMShTrv5NMQc5SiuhjBya4q978ImwCfSkoqhMLox9ZzoX7S%2BBy5wfZSi1zdNyOkc2NvkQc1itJPrZ815ixNebPxmO8Sst9bKyy%2FYYTpOGdUk5VfOKMIOMiL4GOqUBQLk8uCON7GGLOuhR2j%2F%2Bm96VZ61Y1lT5uQmY1b4OtHkkgFVRwnGisYPsPTt5nh3Wdt527ofORvfnkRkHBwBV5oaKGmTjxS6SbrRb3PW%2Byfx3LyRn77T68gN3haoSpV6YJXk6J%2BOAZMklXG8XTbWW52ucj6IVr41aRgn4%2FO6NKBXB8rpFIPrYazOgJXFme7Sa0PwYDpVN8Rasadz5eOqgaPbkksDg&X-Amz-Signature=d7adf0f07af8c2bb5d9ca3d5b94a4d168f3c41716111be75d118e4658292dbd8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7QEATC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC%2FcWkTl%2Frf1OCZU0n6p8DS0dmgDOwYapkWOtszXWS6fwIgJi8tWdBkiwJAXx151y73v%2BLZjA5gCqTpNoEOAH0pPOAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITemDNMtLA8F9MDeyrcAz2FEfvuk6dRharPnWD98DOBuTisRCS0GzyN2gQZky87%2F1346yywiJ7D%2F0oC%2B%2F8Z8FFZ9Y241V%2BCN5I%2FgWNu%2BYtmHgjML3SSxXhAeRvjcEZdiNx%2FcrmvAQNr9aWJ61doYmZYw0OjEw6T3kUuz8LDGau4%2FJ%2BcarGYYmt2dDABel2PlXUe400aRCTVeMhKr4u2dzuYdG7LH%2F%2BjcYm5euHsf0teD84z18s0FzmVLiaKMiem0v9VGvEbl5rhbYAcTB1bu11f3L7gxdW0l6RF6a22HQaMe4ZdxosDmw5wzD%2FC13jmTDL8tPRCImP8o46DhbBssUXKGZh9fwBkHFeNDOa8Fw3fwbAGKkK2lRCfQTa%2BFVCTQIE6qtQRnlMk2CL0p2M0atoSZiS0UYrB%2FgTtPrxkoLMoPZbnubfPj4lSsF%2FiGgLNyyDUwHuoEGp7OpaJCy0LlKp28U62lvlalYrc11j4mnTJ7JtskL5j4QWFL2F%2BZWA5%2BETG3Kx4fji%2FicZerZWz4y8YJz%2FjMC%2FzMShTrv5NMQc5SiuhjBya4q978ImwCfSkoqhMLox9ZzoX7S%2BBy5wfZSi1zdNyOkc2NvkQc1itJPrZ815ixNebPxmO8Sst9bKyy%2FYYTpOGdUk5VfOKMIOMiL4GOqUBQLk8uCON7GGLOuhR2j%2F%2Bm96VZ61Y1lT5uQmY1b4OtHkkgFVRwnGisYPsPTt5nh3Wdt527ofORvfnkRkHBwBV5oaKGmTjxS6SbrRb3PW%2Byfx3LyRn77T68gN3haoSpV6YJXk6J%2BOAZMklXG8XTbWW52ucj6IVr41aRgn4%2FO6NKBXB8rpFIPrYazOgJXFme7Sa0PwYDpVN8Rasadz5eOqgaPbkksDg&X-Amz-Signature=4b4e8548f13525a88b62f1fcb3e94bd386b91c56ecf22699970f14185d2f290b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7QEATC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC%2FcWkTl%2Frf1OCZU0n6p8DS0dmgDOwYapkWOtszXWS6fwIgJi8tWdBkiwJAXx151y73v%2BLZjA5gCqTpNoEOAH0pPOAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITemDNMtLA8F9MDeyrcAz2FEfvuk6dRharPnWD98DOBuTisRCS0GzyN2gQZky87%2F1346yywiJ7D%2F0oC%2B%2F8Z8FFZ9Y241V%2BCN5I%2FgWNu%2BYtmHgjML3SSxXhAeRvjcEZdiNx%2FcrmvAQNr9aWJ61doYmZYw0OjEw6T3kUuz8LDGau4%2FJ%2BcarGYYmt2dDABel2PlXUe400aRCTVeMhKr4u2dzuYdG7LH%2F%2BjcYm5euHsf0teD84z18s0FzmVLiaKMiem0v9VGvEbl5rhbYAcTB1bu11f3L7gxdW0l6RF6a22HQaMe4ZdxosDmw5wzD%2FC13jmTDL8tPRCImP8o46DhbBssUXKGZh9fwBkHFeNDOa8Fw3fwbAGKkK2lRCfQTa%2BFVCTQIE6qtQRnlMk2CL0p2M0atoSZiS0UYrB%2FgTtPrxkoLMoPZbnubfPj4lSsF%2FiGgLNyyDUwHuoEGp7OpaJCy0LlKp28U62lvlalYrc11j4mnTJ7JtskL5j4QWFL2F%2BZWA5%2BETG3Kx4fji%2FicZerZWz4y8YJz%2FjMC%2FzMShTrv5NMQc5SiuhjBya4q978ImwCfSkoqhMLox9ZzoX7S%2BBy5wfZSi1zdNyOkc2NvkQc1itJPrZ815ixNebPxmO8Sst9bKyy%2FYYTpOGdUk5VfOKMIOMiL4GOqUBQLk8uCON7GGLOuhR2j%2F%2Bm96VZ61Y1lT5uQmY1b4OtHkkgFVRwnGisYPsPTt5nh3Wdt527ofORvfnkRkHBwBV5oaKGmTjxS6SbrRb3PW%2Byfx3LyRn77T68gN3haoSpV6YJXk6J%2BOAZMklXG8XTbWW52ucj6IVr41aRgn4%2FO6NKBXB8rpFIPrYazOgJXFme7Sa0PwYDpVN8Rasadz5eOqgaPbkksDg&X-Amz-Signature=19e6d7871d64197b728ce9bd264c62b826153097aec7986086bcd1cbaca79695&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7QEATC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC%2FcWkTl%2Frf1OCZU0n6p8DS0dmgDOwYapkWOtszXWS6fwIgJi8tWdBkiwJAXx151y73v%2BLZjA5gCqTpNoEOAH0pPOAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITemDNMtLA8F9MDeyrcAz2FEfvuk6dRharPnWD98DOBuTisRCS0GzyN2gQZky87%2F1346yywiJ7D%2F0oC%2B%2F8Z8FFZ9Y241V%2BCN5I%2FgWNu%2BYtmHgjML3SSxXhAeRvjcEZdiNx%2FcrmvAQNr9aWJ61doYmZYw0OjEw6T3kUuz8LDGau4%2FJ%2BcarGYYmt2dDABel2PlXUe400aRCTVeMhKr4u2dzuYdG7LH%2F%2BjcYm5euHsf0teD84z18s0FzmVLiaKMiem0v9VGvEbl5rhbYAcTB1bu11f3L7gxdW0l6RF6a22HQaMe4ZdxosDmw5wzD%2FC13jmTDL8tPRCImP8o46DhbBssUXKGZh9fwBkHFeNDOa8Fw3fwbAGKkK2lRCfQTa%2BFVCTQIE6qtQRnlMk2CL0p2M0atoSZiS0UYrB%2FgTtPrxkoLMoPZbnubfPj4lSsF%2FiGgLNyyDUwHuoEGp7OpaJCy0LlKp28U62lvlalYrc11j4mnTJ7JtskL5j4QWFL2F%2BZWA5%2BETG3Kx4fji%2FicZerZWz4y8YJz%2FjMC%2FzMShTrv5NMQc5SiuhjBya4q978ImwCfSkoqhMLox9ZzoX7S%2BBy5wfZSi1zdNyOkc2NvkQc1itJPrZ815ixNebPxmO8Sst9bKyy%2FYYTpOGdUk5VfOKMIOMiL4GOqUBQLk8uCON7GGLOuhR2j%2F%2Bm96VZ61Y1lT5uQmY1b4OtHkkgFVRwnGisYPsPTt5nh3Wdt527ofORvfnkRkHBwBV5oaKGmTjxS6SbrRb3PW%2Byfx3LyRn77T68gN3haoSpV6YJXk6J%2BOAZMklXG8XTbWW52ucj6IVr41aRgn4%2FO6NKBXB8rpFIPrYazOgJXFme7Sa0PwYDpVN8Rasadz5eOqgaPbkksDg&X-Amz-Signature=4cdc2d9e184465f95451b2e03ffab8a4bd61d0a34f093b79f9d1c0c078d475bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7QEATC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC%2FcWkTl%2Frf1OCZU0n6p8DS0dmgDOwYapkWOtszXWS6fwIgJi8tWdBkiwJAXx151y73v%2BLZjA5gCqTpNoEOAH0pPOAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITemDNMtLA8F9MDeyrcAz2FEfvuk6dRharPnWD98DOBuTisRCS0GzyN2gQZky87%2F1346yywiJ7D%2F0oC%2B%2F8Z8FFZ9Y241V%2BCN5I%2FgWNu%2BYtmHgjML3SSxXhAeRvjcEZdiNx%2FcrmvAQNr9aWJ61doYmZYw0OjEw6T3kUuz8LDGau4%2FJ%2BcarGYYmt2dDABel2PlXUe400aRCTVeMhKr4u2dzuYdG7LH%2F%2BjcYm5euHsf0teD84z18s0FzmVLiaKMiem0v9VGvEbl5rhbYAcTB1bu11f3L7gxdW0l6RF6a22HQaMe4ZdxosDmw5wzD%2FC13jmTDL8tPRCImP8o46DhbBssUXKGZh9fwBkHFeNDOa8Fw3fwbAGKkK2lRCfQTa%2BFVCTQIE6qtQRnlMk2CL0p2M0atoSZiS0UYrB%2FgTtPrxkoLMoPZbnubfPj4lSsF%2FiGgLNyyDUwHuoEGp7OpaJCy0LlKp28U62lvlalYrc11j4mnTJ7JtskL5j4QWFL2F%2BZWA5%2BETG3Kx4fji%2FicZerZWz4y8YJz%2FjMC%2FzMShTrv5NMQc5SiuhjBya4q978ImwCfSkoqhMLox9ZzoX7S%2BBy5wfZSi1zdNyOkc2NvkQc1itJPrZ815ixNebPxmO8Sst9bKyy%2FYYTpOGdUk5VfOKMIOMiL4GOqUBQLk8uCON7GGLOuhR2j%2F%2Bm96VZ61Y1lT5uQmY1b4OtHkkgFVRwnGisYPsPTt5nh3Wdt527ofORvfnkRkHBwBV5oaKGmTjxS6SbrRb3PW%2Byfx3LyRn77T68gN3haoSpV6YJXk6J%2BOAZMklXG8XTbWW52ucj6IVr41aRgn4%2FO6NKBXB8rpFIPrYazOgJXFme7Sa0PwYDpVN8Rasadz5eOqgaPbkksDg&X-Amz-Signature=f311a96c4b2b636bc1780a8a80a146d89c836e5acc89c13af0e18fde7ef61284&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7QEATC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC%2FcWkTl%2Frf1OCZU0n6p8DS0dmgDOwYapkWOtszXWS6fwIgJi8tWdBkiwJAXx151y73v%2BLZjA5gCqTpNoEOAH0pPOAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITemDNMtLA8F9MDeyrcAz2FEfvuk6dRharPnWD98DOBuTisRCS0GzyN2gQZky87%2F1346yywiJ7D%2F0oC%2B%2F8Z8FFZ9Y241V%2BCN5I%2FgWNu%2BYtmHgjML3SSxXhAeRvjcEZdiNx%2FcrmvAQNr9aWJ61doYmZYw0OjEw6T3kUuz8LDGau4%2FJ%2BcarGYYmt2dDABel2PlXUe400aRCTVeMhKr4u2dzuYdG7LH%2F%2BjcYm5euHsf0teD84z18s0FzmVLiaKMiem0v9VGvEbl5rhbYAcTB1bu11f3L7gxdW0l6RF6a22HQaMe4ZdxosDmw5wzD%2FC13jmTDL8tPRCImP8o46DhbBssUXKGZh9fwBkHFeNDOa8Fw3fwbAGKkK2lRCfQTa%2BFVCTQIE6qtQRnlMk2CL0p2M0atoSZiS0UYrB%2FgTtPrxkoLMoPZbnubfPj4lSsF%2FiGgLNyyDUwHuoEGp7OpaJCy0LlKp28U62lvlalYrc11j4mnTJ7JtskL5j4QWFL2F%2BZWA5%2BETG3Kx4fji%2FicZerZWz4y8YJz%2FjMC%2FzMShTrv5NMQc5SiuhjBya4q978ImwCfSkoqhMLox9ZzoX7S%2BBy5wfZSi1zdNyOkc2NvkQc1itJPrZ815ixNebPxmO8Sst9bKyy%2FYYTpOGdUk5VfOKMIOMiL4GOqUBQLk8uCON7GGLOuhR2j%2F%2Bm96VZ61Y1lT5uQmY1b4OtHkkgFVRwnGisYPsPTt5nh3Wdt527ofORvfnkRkHBwBV5oaKGmTjxS6SbrRb3PW%2Byfx3LyRn77T68gN3haoSpV6YJXk6J%2BOAZMklXG8XTbWW52ucj6IVr41aRgn4%2FO6NKBXB8rpFIPrYazOgJXFme7Sa0PwYDpVN8Rasadz5eOqgaPbkksDg&X-Amz-Signature=28fdc7a77b4ea67268074208946bef1d8a28b1353c9934297b1ba0130a0b9bf5&X-Amz-SignedHeaders=host&x-id=GetObject)
