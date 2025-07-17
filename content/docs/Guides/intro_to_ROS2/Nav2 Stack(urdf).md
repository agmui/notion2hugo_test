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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMAB2VL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFU0KeQxWEeiCpWWYlX9lbH88yoaDaEKpdzMozVFdLsjAiBz4XQZhqLlP8ZA1XOAdNryJWch3vjKJkVWreNwO8QNiir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIML7gAWOjLvQXL2ZONKtwDGDJt68oCVCGg3TuW8UlGOfmjn8V%2BTKHFEIiAtSwnd8atM6TOQ8m%2FBIJN4gO5sJSvZuViFyd312rR4UDvi%2FQ7sKpnqvTuqMO70OsX4I4E4EON28k3G99CdVYXJEzHwi7rTpfFq8oAH0En3T5hN%2FWPW2o7Nz0zR%2BczVQBDT9bAu638sxQxiqWNl9lWVIWw95Bj8ugL55GZOPZfhos0rxVRV2AjzHfXJInJqwxUdX1S0qPHptfmn0N1MkXxySLQGaVhs8V9ryXyoKaBknNpjZaPQe%2FL5jAeEmYOKwO3M0QNZU4%2Fesh5wJMFIeKu%2B4rwSt3ZWL3AUFPW5iHuuVqCO%2Fm9RS6MVfsLeKC%2BFYA04GjLO2m04EPCzgL%2F5iXnabFcr6mvTWPRTJu0RDglfCcsSiw%2BwUmyJnaBbskVs%2FDL8kBsiKY%2FjoE542%2BW6XeGyzj13lDLQAhKN%2B4CZ%2Ftfygkma8JBDDVJA%2BxRLP3yLv1BpxxhHbbiveLUQDO%2FoBXbJgoWsXLjmTJ1sMQyaZaWb9wHAbiG7Mf8vAgbJ2xQtxefSe2lSA8NT1Nh%2FAQsFpe4nnOeDBK6IO%2B%2BzKhCVcO7hWjveq1JVv5SzOtbve7aITzbY6NiQRo3eCdw1QGyOLsLJA4w7OviwwY6pgG5yncRDL%2B097EF98R3N%2BdMOSCmMFrUvtCRpTUj3mUVWx6lZvpQZBphQuSQWnbYPGRoXCF%2F8Kx2tiEsIst2ObaKaDYvgnHxN%2BCujG%2F7%2Fe73JYQ2vXAQhnNywIjZXPGlDgiEvsoDse5GBrGL6oXuLbtmTTgXl0WmPRn0WRORF8moIbnXmXxpwJySMgrZhGcNjMGjuHCdCDhQLXkHgeTaC3nWODBrJJiV&X-Amz-Signature=50a16b46faa3b1da2750a574e10cd00f47a09e986e0dcfff7f96a8e64fd58835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMAB2VL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFU0KeQxWEeiCpWWYlX9lbH88yoaDaEKpdzMozVFdLsjAiBz4XQZhqLlP8ZA1XOAdNryJWch3vjKJkVWreNwO8QNiir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIML7gAWOjLvQXL2ZONKtwDGDJt68oCVCGg3TuW8UlGOfmjn8V%2BTKHFEIiAtSwnd8atM6TOQ8m%2FBIJN4gO5sJSvZuViFyd312rR4UDvi%2FQ7sKpnqvTuqMO70OsX4I4E4EON28k3G99CdVYXJEzHwi7rTpfFq8oAH0En3T5hN%2FWPW2o7Nz0zR%2BczVQBDT9bAu638sxQxiqWNl9lWVIWw95Bj8ugL55GZOPZfhos0rxVRV2AjzHfXJInJqwxUdX1S0qPHptfmn0N1MkXxySLQGaVhs8V9ryXyoKaBknNpjZaPQe%2FL5jAeEmYOKwO3M0QNZU4%2Fesh5wJMFIeKu%2B4rwSt3ZWL3AUFPW5iHuuVqCO%2Fm9RS6MVfsLeKC%2BFYA04GjLO2m04EPCzgL%2F5iXnabFcr6mvTWPRTJu0RDglfCcsSiw%2BwUmyJnaBbskVs%2FDL8kBsiKY%2FjoE542%2BW6XeGyzj13lDLQAhKN%2B4CZ%2Ftfygkma8JBDDVJA%2BxRLP3yLv1BpxxhHbbiveLUQDO%2FoBXbJgoWsXLjmTJ1sMQyaZaWb9wHAbiG7Mf8vAgbJ2xQtxefSe2lSA8NT1Nh%2FAQsFpe4nnOeDBK6IO%2B%2BzKhCVcO7hWjveq1JVv5SzOtbve7aITzbY6NiQRo3eCdw1QGyOLsLJA4w7OviwwY6pgG5yncRDL%2B097EF98R3N%2BdMOSCmMFrUvtCRpTUj3mUVWx6lZvpQZBphQuSQWnbYPGRoXCF%2F8Kx2tiEsIst2ObaKaDYvgnHxN%2BCujG%2F7%2Fe73JYQ2vXAQhnNywIjZXPGlDgiEvsoDse5GBrGL6oXuLbtmTTgXl0WmPRn0WRORF8moIbnXmXxpwJySMgrZhGcNjMGjuHCdCDhQLXkHgeTaC3nWODBrJJiV&X-Amz-Signature=50d59f596a33b7f97d4c5c1fb67f28c1a102fccd376e4c0624dd945b80784cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMAB2VL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFU0KeQxWEeiCpWWYlX9lbH88yoaDaEKpdzMozVFdLsjAiBz4XQZhqLlP8ZA1XOAdNryJWch3vjKJkVWreNwO8QNiir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIML7gAWOjLvQXL2ZONKtwDGDJt68oCVCGg3TuW8UlGOfmjn8V%2BTKHFEIiAtSwnd8atM6TOQ8m%2FBIJN4gO5sJSvZuViFyd312rR4UDvi%2FQ7sKpnqvTuqMO70OsX4I4E4EON28k3G99CdVYXJEzHwi7rTpfFq8oAH0En3T5hN%2FWPW2o7Nz0zR%2BczVQBDT9bAu638sxQxiqWNl9lWVIWw95Bj8ugL55GZOPZfhos0rxVRV2AjzHfXJInJqwxUdX1S0qPHptfmn0N1MkXxySLQGaVhs8V9ryXyoKaBknNpjZaPQe%2FL5jAeEmYOKwO3M0QNZU4%2Fesh5wJMFIeKu%2B4rwSt3ZWL3AUFPW5iHuuVqCO%2Fm9RS6MVfsLeKC%2BFYA04GjLO2m04EPCzgL%2F5iXnabFcr6mvTWPRTJu0RDglfCcsSiw%2BwUmyJnaBbskVs%2FDL8kBsiKY%2FjoE542%2BW6XeGyzj13lDLQAhKN%2B4CZ%2Ftfygkma8JBDDVJA%2BxRLP3yLv1BpxxhHbbiveLUQDO%2FoBXbJgoWsXLjmTJ1sMQyaZaWb9wHAbiG7Mf8vAgbJ2xQtxefSe2lSA8NT1Nh%2FAQsFpe4nnOeDBK6IO%2B%2BzKhCVcO7hWjveq1JVv5SzOtbve7aITzbY6NiQRo3eCdw1QGyOLsLJA4w7OviwwY6pgG5yncRDL%2B097EF98R3N%2BdMOSCmMFrUvtCRpTUj3mUVWx6lZvpQZBphQuSQWnbYPGRoXCF%2F8Kx2tiEsIst2ObaKaDYvgnHxN%2BCujG%2F7%2Fe73JYQ2vXAQhnNywIjZXPGlDgiEvsoDse5GBrGL6oXuLbtmTTgXl0WmPRn0WRORF8moIbnXmXxpwJySMgrZhGcNjMGjuHCdCDhQLXkHgeTaC3nWODBrJJiV&X-Amz-Signature=6f6d7b433ae61c13f0411ef0dcfcd9194910724b4bd1378670482668299a8161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMAB2VL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFU0KeQxWEeiCpWWYlX9lbH88yoaDaEKpdzMozVFdLsjAiBz4XQZhqLlP8ZA1XOAdNryJWch3vjKJkVWreNwO8QNiir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIML7gAWOjLvQXL2ZONKtwDGDJt68oCVCGg3TuW8UlGOfmjn8V%2BTKHFEIiAtSwnd8atM6TOQ8m%2FBIJN4gO5sJSvZuViFyd312rR4UDvi%2FQ7sKpnqvTuqMO70OsX4I4E4EON28k3G99CdVYXJEzHwi7rTpfFq8oAH0En3T5hN%2FWPW2o7Nz0zR%2BczVQBDT9bAu638sxQxiqWNl9lWVIWw95Bj8ugL55GZOPZfhos0rxVRV2AjzHfXJInJqwxUdX1S0qPHptfmn0N1MkXxySLQGaVhs8V9ryXyoKaBknNpjZaPQe%2FL5jAeEmYOKwO3M0QNZU4%2Fesh5wJMFIeKu%2B4rwSt3ZWL3AUFPW5iHuuVqCO%2Fm9RS6MVfsLeKC%2BFYA04GjLO2m04EPCzgL%2F5iXnabFcr6mvTWPRTJu0RDglfCcsSiw%2BwUmyJnaBbskVs%2FDL8kBsiKY%2FjoE542%2BW6XeGyzj13lDLQAhKN%2B4CZ%2Ftfygkma8JBDDVJA%2BxRLP3yLv1BpxxhHbbiveLUQDO%2FoBXbJgoWsXLjmTJ1sMQyaZaWb9wHAbiG7Mf8vAgbJ2xQtxefSe2lSA8NT1Nh%2FAQsFpe4nnOeDBK6IO%2B%2BzKhCVcO7hWjveq1JVv5SzOtbve7aITzbY6NiQRo3eCdw1QGyOLsLJA4w7OviwwY6pgG5yncRDL%2B097EF98R3N%2BdMOSCmMFrUvtCRpTUj3mUVWx6lZvpQZBphQuSQWnbYPGRoXCF%2F8Kx2tiEsIst2ObaKaDYvgnHxN%2BCujG%2F7%2Fe73JYQ2vXAQhnNywIjZXPGlDgiEvsoDse5GBrGL6oXuLbtmTTgXl0WmPRn0WRORF8moIbnXmXxpwJySMgrZhGcNjMGjuHCdCDhQLXkHgeTaC3nWODBrJJiV&X-Amz-Signature=076697deee01de9a8bc7c00a2d349043177ce3f7c589d4edb8b5c6807fc539f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMAB2VL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFU0KeQxWEeiCpWWYlX9lbH88yoaDaEKpdzMozVFdLsjAiBz4XQZhqLlP8ZA1XOAdNryJWch3vjKJkVWreNwO8QNiir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIML7gAWOjLvQXL2ZONKtwDGDJt68oCVCGg3TuW8UlGOfmjn8V%2BTKHFEIiAtSwnd8atM6TOQ8m%2FBIJN4gO5sJSvZuViFyd312rR4UDvi%2FQ7sKpnqvTuqMO70OsX4I4E4EON28k3G99CdVYXJEzHwi7rTpfFq8oAH0En3T5hN%2FWPW2o7Nz0zR%2BczVQBDT9bAu638sxQxiqWNl9lWVIWw95Bj8ugL55GZOPZfhos0rxVRV2AjzHfXJInJqwxUdX1S0qPHptfmn0N1MkXxySLQGaVhs8V9ryXyoKaBknNpjZaPQe%2FL5jAeEmYOKwO3M0QNZU4%2Fesh5wJMFIeKu%2B4rwSt3ZWL3AUFPW5iHuuVqCO%2Fm9RS6MVfsLeKC%2BFYA04GjLO2m04EPCzgL%2F5iXnabFcr6mvTWPRTJu0RDglfCcsSiw%2BwUmyJnaBbskVs%2FDL8kBsiKY%2FjoE542%2BW6XeGyzj13lDLQAhKN%2B4CZ%2Ftfygkma8JBDDVJA%2BxRLP3yLv1BpxxhHbbiveLUQDO%2FoBXbJgoWsXLjmTJ1sMQyaZaWb9wHAbiG7Mf8vAgbJ2xQtxefSe2lSA8NT1Nh%2FAQsFpe4nnOeDBK6IO%2B%2BzKhCVcO7hWjveq1JVv5SzOtbve7aITzbY6NiQRo3eCdw1QGyOLsLJA4w7OviwwY6pgG5yncRDL%2B097EF98R3N%2BdMOSCmMFrUvtCRpTUj3mUVWx6lZvpQZBphQuSQWnbYPGRoXCF%2F8Kx2tiEsIst2ObaKaDYvgnHxN%2BCujG%2F7%2Fe73JYQ2vXAQhnNywIjZXPGlDgiEvsoDse5GBrGL6oXuLbtmTTgXl0WmPRn0WRORF8moIbnXmXxpwJySMgrZhGcNjMGjuHCdCDhQLXkHgeTaC3nWODBrJJiV&X-Amz-Signature=c226df970e9d774d61ad9adf52a12386579e151d5647ae7bb707e77d79aa5abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMAB2VL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFU0KeQxWEeiCpWWYlX9lbH88yoaDaEKpdzMozVFdLsjAiBz4XQZhqLlP8ZA1XOAdNryJWch3vjKJkVWreNwO8QNiir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIML7gAWOjLvQXL2ZONKtwDGDJt68oCVCGg3TuW8UlGOfmjn8V%2BTKHFEIiAtSwnd8atM6TOQ8m%2FBIJN4gO5sJSvZuViFyd312rR4UDvi%2FQ7sKpnqvTuqMO70OsX4I4E4EON28k3G99CdVYXJEzHwi7rTpfFq8oAH0En3T5hN%2FWPW2o7Nz0zR%2BczVQBDT9bAu638sxQxiqWNl9lWVIWw95Bj8ugL55GZOPZfhos0rxVRV2AjzHfXJInJqwxUdX1S0qPHptfmn0N1MkXxySLQGaVhs8V9ryXyoKaBknNpjZaPQe%2FL5jAeEmYOKwO3M0QNZU4%2Fesh5wJMFIeKu%2B4rwSt3ZWL3AUFPW5iHuuVqCO%2Fm9RS6MVfsLeKC%2BFYA04GjLO2m04EPCzgL%2F5iXnabFcr6mvTWPRTJu0RDglfCcsSiw%2BwUmyJnaBbskVs%2FDL8kBsiKY%2FjoE542%2BW6XeGyzj13lDLQAhKN%2B4CZ%2Ftfygkma8JBDDVJA%2BxRLP3yLv1BpxxhHbbiveLUQDO%2FoBXbJgoWsXLjmTJ1sMQyaZaWb9wHAbiG7Mf8vAgbJ2xQtxefSe2lSA8NT1Nh%2FAQsFpe4nnOeDBK6IO%2B%2BzKhCVcO7hWjveq1JVv5SzOtbve7aITzbY6NiQRo3eCdw1QGyOLsLJA4w7OviwwY6pgG5yncRDL%2B097EF98R3N%2BdMOSCmMFrUvtCRpTUj3mUVWx6lZvpQZBphQuSQWnbYPGRoXCF%2F8Kx2tiEsIst2ObaKaDYvgnHxN%2BCujG%2F7%2Fe73JYQ2vXAQhnNywIjZXPGlDgiEvsoDse5GBrGL6oXuLbtmTTgXl0WmPRn0WRORF8moIbnXmXxpwJySMgrZhGcNjMGjuHCdCDhQLXkHgeTaC3nWODBrJJiV&X-Amz-Signature=7044737100f0ba9b17fb2c609016e78a73f8287e3f241916c3ab64a648a68dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
