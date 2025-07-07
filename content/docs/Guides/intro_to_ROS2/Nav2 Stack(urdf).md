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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUELNRDV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHpCm6VDBgo2wTTC4c6ga52ZqTsd7I75ZMmYh4MPBVBNAiEA3Y4LnfoSE5wLO1nu6xRaDiGk%2BgF8ov%2Bv5%2BaAETBfm58q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNwBaKuMshbkX64TmyrcA4bxffDOfnFSRORFOQWtV%2BAac%2Fm1aCMW%2FzgJywJKGUwzY1K2JoBDQlMJkihC06yveT%2FddENZJm2wPA25amzPGop8EOjJewHMGnplHd2n%2BlTyHAod8XU3vIByc7XfsuTEQwWW9TBC%2Fiy2G7ltwbO%2Ff8kJTgwJKgYyws7kkZyGQ%2F%2FVb51hqgq8Xb7XNK0xw6tcy1KXZpwZrhvGf8NQ85nrNzfFQLFublfYie13Kxx6xP%2FyMr6mXtAQ%2FMoPyFPFI5rQxdwyzeKOPKfLJVokHVz70VCLaWOWw2C%2FAy5Wmf3TjRHi9eGxyWqqQKpIYPNsMcH2N11R65xH41dxjKxvrDS9UXCh6YW4jt9vwiGn%2FSvIo513FBrVq5xKrOF4EfpN7HXM3fN%2Brn0l7rRT2eLfJ9QYRdp4JbT1RnCdGqUvu%2BK9ZVLk2mepzKU1oQSNacEkDZF2txHtzDD53epB2Cxkp%2F4BfzLUiF2HHmw%2F08VdF762gAMw39QSp9v%2FC5%2Fx78UtrJC9ahXh1Si2PR9oJwcIfnJEPgDIyIqVt6FKaCsxefRMIo6vZsuHtiJx%2B3AQk%2F5E8yTZePOS%2FaleWe1ehUnvr0J8jhy9CCK92f%2BDzbzNwyD90LonRa%2FIz%2FMzTUX5c1BEMK%2Bcr8MGOqUBdUclgSuH6Sy%2Fodv0EgmHjUmf4MCloBkmXFTiCVGdaz0g7ZDItVEWsaFfGIzLYCs%2BmnoBfsOstqeEjahv6IGB7kX%2FDaEtDtVm8zVD5mfk2572oHlKRcW2REPEk5AmvGvJhEu4%2BWOPJEaFhucwQf3h%2FBOv3FFo21AOLCpcf1eoik6vLsJv5Sp1aH1EUiCTS4nUp0yYbH4hZteljxkm5IK2aclH2HRi&X-Amz-Signature=dd69a35ab503c5b7795ab977e6442d36a6e40c709a9da8497b3f2329972435ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUELNRDV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHpCm6VDBgo2wTTC4c6ga52ZqTsd7I75ZMmYh4MPBVBNAiEA3Y4LnfoSE5wLO1nu6xRaDiGk%2BgF8ov%2Bv5%2BaAETBfm58q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNwBaKuMshbkX64TmyrcA4bxffDOfnFSRORFOQWtV%2BAac%2Fm1aCMW%2FzgJywJKGUwzY1K2JoBDQlMJkihC06yveT%2FddENZJm2wPA25amzPGop8EOjJewHMGnplHd2n%2BlTyHAod8XU3vIByc7XfsuTEQwWW9TBC%2Fiy2G7ltwbO%2Ff8kJTgwJKgYyws7kkZyGQ%2F%2FVb51hqgq8Xb7XNK0xw6tcy1KXZpwZrhvGf8NQ85nrNzfFQLFublfYie13Kxx6xP%2FyMr6mXtAQ%2FMoPyFPFI5rQxdwyzeKOPKfLJVokHVz70VCLaWOWw2C%2FAy5Wmf3TjRHi9eGxyWqqQKpIYPNsMcH2N11R65xH41dxjKxvrDS9UXCh6YW4jt9vwiGn%2FSvIo513FBrVq5xKrOF4EfpN7HXM3fN%2Brn0l7rRT2eLfJ9QYRdp4JbT1RnCdGqUvu%2BK9ZVLk2mepzKU1oQSNacEkDZF2txHtzDD53epB2Cxkp%2F4BfzLUiF2HHmw%2F08VdF762gAMw39QSp9v%2FC5%2Fx78UtrJC9ahXh1Si2PR9oJwcIfnJEPgDIyIqVt6FKaCsxefRMIo6vZsuHtiJx%2B3AQk%2F5E8yTZePOS%2FaleWe1ehUnvr0J8jhy9CCK92f%2BDzbzNwyD90LonRa%2FIz%2FMzTUX5c1BEMK%2Bcr8MGOqUBdUclgSuH6Sy%2Fodv0EgmHjUmf4MCloBkmXFTiCVGdaz0g7ZDItVEWsaFfGIzLYCs%2BmnoBfsOstqeEjahv6IGB7kX%2FDaEtDtVm8zVD5mfk2572oHlKRcW2REPEk5AmvGvJhEu4%2BWOPJEaFhucwQf3h%2FBOv3FFo21AOLCpcf1eoik6vLsJv5Sp1aH1EUiCTS4nUp0yYbH4hZteljxkm5IK2aclH2HRi&X-Amz-Signature=ed83a91a265200281c80eb03a8c922c27753743325180f208fc12e2dbcd1f7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUELNRDV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHpCm6VDBgo2wTTC4c6ga52ZqTsd7I75ZMmYh4MPBVBNAiEA3Y4LnfoSE5wLO1nu6xRaDiGk%2BgF8ov%2Bv5%2BaAETBfm58q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNwBaKuMshbkX64TmyrcA4bxffDOfnFSRORFOQWtV%2BAac%2Fm1aCMW%2FzgJywJKGUwzY1K2JoBDQlMJkihC06yveT%2FddENZJm2wPA25amzPGop8EOjJewHMGnplHd2n%2BlTyHAod8XU3vIByc7XfsuTEQwWW9TBC%2Fiy2G7ltwbO%2Ff8kJTgwJKgYyws7kkZyGQ%2F%2FVb51hqgq8Xb7XNK0xw6tcy1KXZpwZrhvGf8NQ85nrNzfFQLFublfYie13Kxx6xP%2FyMr6mXtAQ%2FMoPyFPFI5rQxdwyzeKOPKfLJVokHVz70VCLaWOWw2C%2FAy5Wmf3TjRHi9eGxyWqqQKpIYPNsMcH2N11R65xH41dxjKxvrDS9UXCh6YW4jt9vwiGn%2FSvIo513FBrVq5xKrOF4EfpN7HXM3fN%2Brn0l7rRT2eLfJ9QYRdp4JbT1RnCdGqUvu%2BK9ZVLk2mepzKU1oQSNacEkDZF2txHtzDD53epB2Cxkp%2F4BfzLUiF2HHmw%2F08VdF762gAMw39QSp9v%2FC5%2Fx78UtrJC9ahXh1Si2PR9oJwcIfnJEPgDIyIqVt6FKaCsxefRMIo6vZsuHtiJx%2B3AQk%2F5E8yTZePOS%2FaleWe1ehUnvr0J8jhy9CCK92f%2BDzbzNwyD90LonRa%2FIz%2FMzTUX5c1BEMK%2Bcr8MGOqUBdUclgSuH6Sy%2Fodv0EgmHjUmf4MCloBkmXFTiCVGdaz0g7ZDItVEWsaFfGIzLYCs%2BmnoBfsOstqeEjahv6IGB7kX%2FDaEtDtVm8zVD5mfk2572oHlKRcW2REPEk5AmvGvJhEu4%2BWOPJEaFhucwQf3h%2FBOv3FFo21AOLCpcf1eoik6vLsJv5Sp1aH1EUiCTS4nUp0yYbH4hZteljxkm5IK2aclH2HRi&X-Amz-Signature=5c03ffe040ef2652d3c7328779e4b79ef611ef9692bfa08998852c737c5e925c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUELNRDV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHpCm6VDBgo2wTTC4c6ga52ZqTsd7I75ZMmYh4MPBVBNAiEA3Y4LnfoSE5wLO1nu6xRaDiGk%2BgF8ov%2Bv5%2BaAETBfm58q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNwBaKuMshbkX64TmyrcA4bxffDOfnFSRORFOQWtV%2BAac%2Fm1aCMW%2FzgJywJKGUwzY1K2JoBDQlMJkihC06yveT%2FddENZJm2wPA25amzPGop8EOjJewHMGnplHd2n%2BlTyHAod8XU3vIByc7XfsuTEQwWW9TBC%2Fiy2G7ltwbO%2Ff8kJTgwJKgYyws7kkZyGQ%2F%2FVb51hqgq8Xb7XNK0xw6tcy1KXZpwZrhvGf8NQ85nrNzfFQLFublfYie13Kxx6xP%2FyMr6mXtAQ%2FMoPyFPFI5rQxdwyzeKOPKfLJVokHVz70VCLaWOWw2C%2FAy5Wmf3TjRHi9eGxyWqqQKpIYPNsMcH2N11R65xH41dxjKxvrDS9UXCh6YW4jt9vwiGn%2FSvIo513FBrVq5xKrOF4EfpN7HXM3fN%2Brn0l7rRT2eLfJ9QYRdp4JbT1RnCdGqUvu%2BK9ZVLk2mepzKU1oQSNacEkDZF2txHtzDD53epB2Cxkp%2F4BfzLUiF2HHmw%2F08VdF762gAMw39QSp9v%2FC5%2Fx78UtrJC9ahXh1Si2PR9oJwcIfnJEPgDIyIqVt6FKaCsxefRMIo6vZsuHtiJx%2B3AQk%2F5E8yTZePOS%2FaleWe1ehUnvr0J8jhy9CCK92f%2BDzbzNwyD90LonRa%2FIz%2FMzTUX5c1BEMK%2Bcr8MGOqUBdUclgSuH6Sy%2Fodv0EgmHjUmf4MCloBkmXFTiCVGdaz0g7ZDItVEWsaFfGIzLYCs%2BmnoBfsOstqeEjahv6IGB7kX%2FDaEtDtVm8zVD5mfk2572oHlKRcW2REPEk5AmvGvJhEu4%2BWOPJEaFhucwQf3h%2FBOv3FFo21AOLCpcf1eoik6vLsJv5Sp1aH1EUiCTS4nUp0yYbH4hZteljxkm5IK2aclH2HRi&X-Amz-Signature=d89b17ad5b85a793ff36e3435f4a701817bec666838d0facb3b4968f478d79e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUELNRDV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHpCm6VDBgo2wTTC4c6ga52ZqTsd7I75ZMmYh4MPBVBNAiEA3Y4LnfoSE5wLO1nu6xRaDiGk%2BgF8ov%2Bv5%2BaAETBfm58q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNwBaKuMshbkX64TmyrcA4bxffDOfnFSRORFOQWtV%2BAac%2Fm1aCMW%2FzgJywJKGUwzY1K2JoBDQlMJkihC06yveT%2FddENZJm2wPA25amzPGop8EOjJewHMGnplHd2n%2BlTyHAod8XU3vIByc7XfsuTEQwWW9TBC%2Fiy2G7ltwbO%2Ff8kJTgwJKgYyws7kkZyGQ%2F%2FVb51hqgq8Xb7XNK0xw6tcy1KXZpwZrhvGf8NQ85nrNzfFQLFublfYie13Kxx6xP%2FyMr6mXtAQ%2FMoPyFPFI5rQxdwyzeKOPKfLJVokHVz70VCLaWOWw2C%2FAy5Wmf3TjRHi9eGxyWqqQKpIYPNsMcH2N11R65xH41dxjKxvrDS9UXCh6YW4jt9vwiGn%2FSvIo513FBrVq5xKrOF4EfpN7HXM3fN%2Brn0l7rRT2eLfJ9QYRdp4JbT1RnCdGqUvu%2BK9ZVLk2mepzKU1oQSNacEkDZF2txHtzDD53epB2Cxkp%2F4BfzLUiF2HHmw%2F08VdF762gAMw39QSp9v%2FC5%2Fx78UtrJC9ahXh1Si2PR9oJwcIfnJEPgDIyIqVt6FKaCsxefRMIo6vZsuHtiJx%2B3AQk%2F5E8yTZePOS%2FaleWe1ehUnvr0J8jhy9CCK92f%2BDzbzNwyD90LonRa%2FIz%2FMzTUX5c1BEMK%2Bcr8MGOqUBdUclgSuH6Sy%2Fodv0EgmHjUmf4MCloBkmXFTiCVGdaz0g7ZDItVEWsaFfGIzLYCs%2BmnoBfsOstqeEjahv6IGB7kX%2FDaEtDtVm8zVD5mfk2572oHlKRcW2REPEk5AmvGvJhEu4%2BWOPJEaFhucwQf3h%2FBOv3FFo21AOLCpcf1eoik6vLsJv5Sp1aH1EUiCTS4nUp0yYbH4hZteljxkm5IK2aclH2HRi&X-Amz-Signature=f64f72b68c84df870cc0cf9d85b77f90b803e27453013538040399e16e2a0665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUELNRDV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHpCm6VDBgo2wTTC4c6ga52ZqTsd7I75ZMmYh4MPBVBNAiEA3Y4LnfoSE5wLO1nu6xRaDiGk%2BgF8ov%2Bv5%2BaAETBfm58q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNwBaKuMshbkX64TmyrcA4bxffDOfnFSRORFOQWtV%2BAac%2Fm1aCMW%2FzgJywJKGUwzY1K2JoBDQlMJkihC06yveT%2FddENZJm2wPA25amzPGop8EOjJewHMGnplHd2n%2BlTyHAod8XU3vIByc7XfsuTEQwWW9TBC%2Fiy2G7ltwbO%2Ff8kJTgwJKgYyws7kkZyGQ%2F%2FVb51hqgq8Xb7XNK0xw6tcy1KXZpwZrhvGf8NQ85nrNzfFQLFublfYie13Kxx6xP%2FyMr6mXtAQ%2FMoPyFPFI5rQxdwyzeKOPKfLJVokHVz70VCLaWOWw2C%2FAy5Wmf3TjRHi9eGxyWqqQKpIYPNsMcH2N11R65xH41dxjKxvrDS9UXCh6YW4jt9vwiGn%2FSvIo513FBrVq5xKrOF4EfpN7HXM3fN%2Brn0l7rRT2eLfJ9QYRdp4JbT1RnCdGqUvu%2BK9ZVLk2mepzKU1oQSNacEkDZF2txHtzDD53epB2Cxkp%2F4BfzLUiF2HHmw%2F08VdF762gAMw39QSp9v%2FC5%2Fx78UtrJC9ahXh1Si2PR9oJwcIfnJEPgDIyIqVt6FKaCsxefRMIo6vZsuHtiJx%2B3AQk%2F5E8yTZePOS%2FaleWe1ehUnvr0J8jhy9CCK92f%2BDzbzNwyD90LonRa%2FIz%2FMzTUX5c1BEMK%2Bcr8MGOqUBdUclgSuH6Sy%2Fodv0EgmHjUmf4MCloBkmXFTiCVGdaz0g7ZDItVEWsaFfGIzLYCs%2BmnoBfsOstqeEjahv6IGB7kX%2FDaEtDtVm8zVD5mfk2572oHlKRcW2REPEk5AmvGvJhEu4%2BWOPJEaFhucwQf3h%2FBOv3FFo21AOLCpcf1eoik6vLsJv5Sp1aH1EUiCTS4nUp0yYbH4hZteljxkm5IK2aclH2HRi&X-Amz-Signature=78bd52d27fad7026183376197267ac8dfdf15f2c0ba3aa36c08d234b866d9c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
