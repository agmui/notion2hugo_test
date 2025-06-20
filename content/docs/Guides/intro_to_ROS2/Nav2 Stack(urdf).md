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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQODMF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7d0iE2IWUHErRCvgq6p6aTQNUnInYsVwxX63Mjo4XjAiAHkDpdf4VOV5zre9to7kN52Em4%2FauvH8dIYR%2FH%2FeMqwyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ7e%2B8DRIqu6F10Y0KtwDV6sHHP1eK7wvKaHlMXy%2F5xZuEFUMy%2B2Cjhi9jvEyF0uik1d%2Fyw2cdQQympthU8q6nywnNTL3l%2F33VtWxnRlwNcQ20ooz479n523cc2554xCvipXAhEEcHAIIMmdydDr3Dck0CkpvtxFpPX7oLsIdTvIZBUmEAF4B1s4pC5dJAQKGjvb%2BTYMj%2BsdpHiPKrKwFFlF8dJFJMiFResNWO7WMJHgDVhO6OqD4OKjT0UTSFsp79VZQV4JcT7AC6BsZQPd7YsaDlNTd75XmIDNG7EGBUzHHHwZKdcKWInZD28MHoovOOlCcH%2Bh%2BRjlQ5hcaHMpb2uatKZmiKdHTyia3Ucq2Ke%2B3UeRHfj9D5SeqOC5C5CnziHt9wAhDS2CvJAsuS6FHl0awpFVX2OipDgQXmFIeYolaSZd%2BpQWCxTKctv5OOFDY80%2FpoFxbyJdjiNpBtlSeGE49nCU1878STK3zJLFC2gfmQVGTvlS1fo5wbX5AIFHh3qC03QjXJCZpln6fk9GwA6f3orCW0pNlmJGx%2BvrY%2FbgywqSChvd7yBZmWil%2B2h9KiYACNfgDkzzyx%2FysMbzyZKUvevIU43Yjqp1aAoxpxYJqwAPNLZrfQUzGJl%2Bc9Q6TXiT16Z36mtkn1K4wgbLWwgY6pgEVPecU9FiG4RYu5Uzx2eGTgiM9EagnrBHYYzGmszpE2Hi1haIN0tiiWBy0iX9MzgIw7ZDJehAgaxnm30hpNZkx8FJWspWmiDc1FhzjefwfiSh9K0qgW%2BnJPK31EWjgOXUurkfkQXsIqgr99gh60T%2B8i%2F5IkijDEQOC1qPjSEFDBQx3ZaC%2F4HAZvPFTP4uYlzhQL4saktSQH5S%2BMPL6s3rc%2BqxcQPEw&X-Amz-Signature=0ea8f2257c6a21a3039115b76c62c48dd9117279f892e0971c027790ff9ad42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQODMF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7d0iE2IWUHErRCvgq6p6aTQNUnInYsVwxX63Mjo4XjAiAHkDpdf4VOV5zre9to7kN52Em4%2FauvH8dIYR%2FH%2FeMqwyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ7e%2B8DRIqu6F10Y0KtwDV6sHHP1eK7wvKaHlMXy%2F5xZuEFUMy%2B2Cjhi9jvEyF0uik1d%2Fyw2cdQQympthU8q6nywnNTL3l%2F33VtWxnRlwNcQ20ooz479n523cc2554xCvipXAhEEcHAIIMmdydDr3Dck0CkpvtxFpPX7oLsIdTvIZBUmEAF4B1s4pC5dJAQKGjvb%2BTYMj%2BsdpHiPKrKwFFlF8dJFJMiFResNWO7WMJHgDVhO6OqD4OKjT0UTSFsp79VZQV4JcT7AC6BsZQPd7YsaDlNTd75XmIDNG7EGBUzHHHwZKdcKWInZD28MHoovOOlCcH%2Bh%2BRjlQ5hcaHMpb2uatKZmiKdHTyia3Ucq2Ke%2B3UeRHfj9D5SeqOC5C5CnziHt9wAhDS2CvJAsuS6FHl0awpFVX2OipDgQXmFIeYolaSZd%2BpQWCxTKctv5OOFDY80%2FpoFxbyJdjiNpBtlSeGE49nCU1878STK3zJLFC2gfmQVGTvlS1fo5wbX5AIFHh3qC03QjXJCZpln6fk9GwA6f3orCW0pNlmJGx%2BvrY%2FbgywqSChvd7yBZmWil%2B2h9KiYACNfgDkzzyx%2FysMbzyZKUvevIU43Yjqp1aAoxpxYJqwAPNLZrfQUzGJl%2Bc9Q6TXiT16Z36mtkn1K4wgbLWwgY6pgEVPecU9FiG4RYu5Uzx2eGTgiM9EagnrBHYYzGmszpE2Hi1haIN0tiiWBy0iX9MzgIw7ZDJehAgaxnm30hpNZkx8FJWspWmiDc1FhzjefwfiSh9K0qgW%2BnJPK31EWjgOXUurkfkQXsIqgr99gh60T%2B8i%2F5IkijDEQOC1qPjSEFDBQx3ZaC%2F4HAZvPFTP4uYlzhQL4saktSQH5S%2BMPL6s3rc%2BqxcQPEw&X-Amz-Signature=a57be09e558a1de7eb644cf98071a4198af28f9e8576eaa830353f69ba9da222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQODMF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7d0iE2IWUHErRCvgq6p6aTQNUnInYsVwxX63Mjo4XjAiAHkDpdf4VOV5zre9to7kN52Em4%2FauvH8dIYR%2FH%2FeMqwyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ7e%2B8DRIqu6F10Y0KtwDV6sHHP1eK7wvKaHlMXy%2F5xZuEFUMy%2B2Cjhi9jvEyF0uik1d%2Fyw2cdQQympthU8q6nywnNTL3l%2F33VtWxnRlwNcQ20ooz479n523cc2554xCvipXAhEEcHAIIMmdydDr3Dck0CkpvtxFpPX7oLsIdTvIZBUmEAF4B1s4pC5dJAQKGjvb%2BTYMj%2BsdpHiPKrKwFFlF8dJFJMiFResNWO7WMJHgDVhO6OqD4OKjT0UTSFsp79VZQV4JcT7AC6BsZQPd7YsaDlNTd75XmIDNG7EGBUzHHHwZKdcKWInZD28MHoovOOlCcH%2Bh%2BRjlQ5hcaHMpb2uatKZmiKdHTyia3Ucq2Ke%2B3UeRHfj9D5SeqOC5C5CnziHt9wAhDS2CvJAsuS6FHl0awpFVX2OipDgQXmFIeYolaSZd%2BpQWCxTKctv5OOFDY80%2FpoFxbyJdjiNpBtlSeGE49nCU1878STK3zJLFC2gfmQVGTvlS1fo5wbX5AIFHh3qC03QjXJCZpln6fk9GwA6f3orCW0pNlmJGx%2BvrY%2FbgywqSChvd7yBZmWil%2B2h9KiYACNfgDkzzyx%2FysMbzyZKUvevIU43Yjqp1aAoxpxYJqwAPNLZrfQUzGJl%2Bc9Q6TXiT16Z36mtkn1K4wgbLWwgY6pgEVPecU9FiG4RYu5Uzx2eGTgiM9EagnrBHYYzGmszpE2Hi1haIN0tiiWBy0iX9MzgIw7ZDJehAgaxnm30hpNZkx8FJWspWmiDc1FhzjefwfiSh9K0qgW%2BnJPK31EWjgOXUurkfkQXsIqgr99gh60T%2B8i%2F5IkijDEQOC1qPjSEFDBQx3ZaC%2F4HAZvPFTP4uYlzhQL4saktSQH5S%2BMPL6s3rc%2BqxcQPEw&X-Amz-Signature=ac31eddae17c5247a6418ae535c47e3aa00716065917363f849624f59a2725bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQODMF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7d0iE2IWUHErRCvgq6p6aTQNUnInYsVwxX63Mjo4XjAiAHkDpdf4VOV5zre9to7kN52Em4%2FauvH8dIYR%2FH%2FeMqwyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ7e%2B8DRIqu6F10Y0KtwDV6sHHP1eK7wvKaHlMXy%2F5xZuEFUMy%2B2Cjhi9jvEyF0uik1d%2Fyw2cdQQympthU8q6nywnNTL3l%2F33VtWxnRlwNcQ20ooz479n523cc2554xCvipXAhEEcHAIIMmdydDr3Dck0CkpvtxFpPX7oLsIdTvIZBUmEAF4B1s4pC5dJAQKGjvb%2BTYMj%2BsdpHiPKrKwFFlF8dJFJMiFResNWO7WMJHgDVhO6OqD4OKjT0UTSFsp79VZQV4JcT7AC6BsZQPd7YsaDlNTd75XmIDNG7EGBUzHHHwZKdcKWInZD28MHoovOOlCcH%2Bh%2BRjlQ5hcaHMpb2uatKZmiKdHTyia3Ucq2Ke%2B3UeRHfj9D5SeqOC5C5CnziHt9wAhDS2CvJAsuS6FHl0awpFVX2OipDgQXmFIeYolaSZd%2BpQWCxTKctv5OOFDY80%2FpoFxbyJdjiNpBtlSeGE49nCU1878STK3zJLFC2gfmQVGTvlS1fo5wbX5AIFHh3qC03QjXJCZpln6fk9GwA6f3orCW0pNlmJGx%2BvrY%2FbgywqSChvd7yBZmWil%2B2h9KiYACNfgDkzzyx%2FysMbzyZKUvevIU43Yjqp1aAoxpxYJqwAPNLZrfQUzGJl%2Bc9Q6TXiT16Z36mtkn1K4wgbLWwgY6pgEVPecU9FiG4RYu5Uzx2eGTgiM9EagnrBHYYzGmszpE2Hi1haIN0tiiWBy0iX9MzgIw7ZDJehAgaxnm30hpNZkx8FJWspWmiDc1FhzjefwfiSh9K0qgW%2BnJPK31EWjgOXUurkfkQXsIqgr99gh60T%2B8i%2F5IkijDEQOC1qPjSEFDBQx3ZaC%2F4HAZvPFTP4uYlzhQL4saktSQH5S%2BMPL6s3rc%2BqxcQPEw&X-Amz-Signature=390bd9248ba1e917aa0995f308e8a6266e6cf7217b4058a300d5df91963369d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQODMF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7d0iE2IWUHErRCvgq6p6aTQNUnInYsVwxX63Mjo4XjAiAHkDpdf4VOV5zre9to7kN52Em4%2FauvH8dIYR%2FH%2FeMqwyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ7e%2B8DRIqu6F10Y0KtwDV6sHHP1eK7wvKaHlMXy%2F5xZuEFUMy%2B2Cjhi9jvEyF0uik1d%2Fyw2cdQQympthU8q6nywnNTL3l%2F33VtWxnRlwNcQ20ooz479n523cc2554xCvipXAhEEcHAIIMmdydDr3Dck0CkpvtxFpPX7oLsIdTvIZBUmEAF4B1s4pC5dJAQKGjvb%2BTYMj%2BsdpHiPKrKwFFlF8dJFJMiFResNWO7WMJHgDVhO6OqD4OKjT0UTSFsp79VZQV4JcT7AC6BsZQPd7YsaDlNTd75XmIDNG7EGBUzHHHwZKdcKWInZD28MHoovOOlCcH%2Bh%2BRjlQ5hcaHMpb2uatKZmiKdHTyia3Ucq2Ke%2B3UeRHfj9D5SeqOC5C5CnziHt9wAhDS2CvJAsuS6FHl0awpFVX2OipDgQXmFIeYolaSZd%2BpQWCxTKctv5OOFDY80%2FpoFxbyJdjiNpBtlSeGE49nCU1878STK3zJLFC2gfmQVGTvlS1fo5wbX5AIFHh3qC03QjXJCZpln6fk9GwA6f3orCW0pNlmJGx%2BvrY%2FbgywqSChvd7yBZmWil%2B2h9KiYACNfgDkzzyx%2FysMbzyZKUvevIU43Yjqp1aAoxpxYJqwAPNLZrfQUzGJl%2Bc9Q6TXiT16Z36mtkn1K4wgbLWwgY6pgEVPecU9FiG4RYu5Uzx2eGTgiM9EagnrBHYYzGmszpE2Hi1haIN0tiiWBy0iX9MzgIw7ZDJehAgaxnm30hpNZkx8FJWspWmiDc1FhzjefwfiSh9K0qgW%2BnJPK31EWjgOXUurkfkQXsIqgr99gh60T%2B8i%2F5IkijDEQOC1qPjSEFDBQx3ZaC%2F4HAZvPFTP4uYlzhQL4saktSQH5S%2BMPL6s3rc%2BqxcQPEw&X-Amz-Signature=ae578b107e535034f2944ccc6a7ce0fc2906a6405062b05c4ec5227356d01f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHQODMF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7d0iE2IWUHErRCvgq6p6aTQNUnInYsVwxX63Mjo4XjAiAHkDpdf4VOV5zre9to7kN52Em4%2FauvH8dIYR%2FH%2FeMqwyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ7e%2B8DRIqu6F10Y0KtwDV6sHHP1eK7wvKaHlMXy%2F5xZuEFUMy%2B2Cjhi9jvEyF0uik1d%2Fyw2cdQQympthU8q6nywnNTL3l%2F33VtWxnRlwNcQ20ooz479n523cc2554xCvipXAhEEcHAIIMmdydDr3Dck0CkpvtxFpPX7oLsIdTvIZBUmEAF4B1s4pC5dJAQKGjvb%2BTYMj%2BsdpHiPKrKwFFlF8dJFJMiFResNWO7WMJHgDVhO6OqD4OKjT0UTSFsp79VZQV4JcT7AC6BsZQPd7YsaDlNTd75XmIDNG7EGBUzHHHwZKdcKWInZD28MHoovOOlCcH%2Bh%2BRjlQ5hcaHMpb2uatKZmiKdHTyia3Ucq2Ke%2B3UeRHfj9D5SeqOC5C5CnziHt9wAhDS2CvJAsuS6FHl0awpFVX2OipDgQXmFIeYolaSZd%2BpQWCxTKctv5OOFDY80%2FpoFxbyJdjiNpBtlSeGE49nCU1878STK3zJLFC2gfmQVGTvlS1fo5wbX5AIFHh3qC03QjXJCZpln6fk9GwA6f3orCW0pNlmJGx%2BvrY%2FbgywqSChvd7yBZmWil%2B2h9KiYACNfgDkzzyx%2FysMbzyZKUvevIU43Yjqp1aAoxpxYJqwAPNLZrfQUzGJl%2Bc9Q6TXiT16Z36mtkn1K4wgbLWwgY6pgEVPecU9FiG4RYu5Uzx2eGTgiM9EagnrBHYYzGmszpE2Hi1haIN0tiiWBy0iX9MzgIw7ZDJehAgaxnm30hpNZkx8FJWspWmiDc1FhzjefwfiSh9K0qgW%2BnJPK31EWjgOXUurkfkQXsIqgr99gh60T%2B8i%2F5IkijDEQOC1qPjSEFDBQx3ZaC%2F4HAZvPFTP4uYlzhQL4saktSQH5S%2BMPL6s3rc%2BqxcQPEw&X-Amz-Signature=db931acaee71d204c4ca7e38f59379f69545d6262012b830e8367f6da1bfc99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
