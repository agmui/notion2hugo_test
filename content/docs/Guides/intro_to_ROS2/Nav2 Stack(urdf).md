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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WGF7TYN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICsmRBY32wS9N35aNco21SIN%2FyW6ya1%2Byd%2B%2FdfP1l2vLAiEA4GCCLfhPJ%2BYsC6t1aJpo27wnFYNAY9EXm3G4Q4J%2BHd4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPKzcVocPiEpn4Xy6yrcA80AZ6u7gPOgYftIie0q3Ekjq9XlpXyxcDJyrTCmMXJdy%2FBVOB9awyurvkYnymko5sY7N%2FzALFjHIrsWOW%2Bo42wZbcIxVu9GKKU0JLXKnpsZ%2BfxDxFPYM5K61FXfOnIxkxS5nsmePAEsqwt86QbNTLPaZloHaccmbhkPFCkGbt0S1ISI1nxU73elHkEEli2m92D7iLH23qprP5DukHyumcQxcEy9QWkKnzvsK%2BcPrl5lrKPrHlXkFcj886kVknxZHav%2BtIzkCj%2FBC174ET%2FBjqpt%2B%2B1jX3FiXMVrWKJbB49E4xWY5IJ9ADdCLG32PzQ%2BUqkkSTRuvZtYK7BsNvucHHQhoTxNoCevys6BIUWh%2FskKbVNu%2BVhr%2Fza4rb%2BJzHe9eXodQdB51Xj9Zq3dHl8UQaLNHzw7%2FsqxyQMTMB%2FqTOGNUisY%2FLtFEVYSpzAN0Rp3uT%2Fqoby1Zlb0hAWXC3wSLcymuRereRT00S%2FyijH%2FTO6GmlC6bTvT4HkIy0iJIwJKjHzphFgBvmpyegz4JBdmMv4daDkWQPmWfr21AydPt3ExOhNryAJVFLCfYLvQ47O5Jfukw8MEt7D43lgJp4JXmy7xVI2WNI8UCFZ74GicxX2sPL3mNLAg8iPBOCUoMJD15b4GOqUB%2FmhtYFUGnxcn3X7xFnopbLJmEfUU4Rt1VHDtyZo0tqWIOCK7GQWOa9JCye1E3HAiWGgxnbnMloZ42%2Bl3DfrAeq59YIuSAF%2BsfmuVknio7jUOBMGmXPiBtDOHLeuY55fUo85ZgBdezUOcxY2TpeBJavQ6mHngDmEde4HkSldGo5W8brHX2vdGNjaj%2BkHgquFdGWm2VMvXoKu0bz2VZZbaMWUvpiUG&X-Amz-Signature=23ab7a1a710c13fd89f2a97c46a42156cfeeffe774c20145a56d75baa96e20e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WGF7TYN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICsmRBY32wS9N35aNco21SIN%2FyW6ya1%2Byd%2B%2FdfP1l2vLAiEA4GCCLfhPJ%2BYsC6t1aJpo27wnFYNAY9EXm3G4Q4J%2BHd4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPKzcVocPiEpn4Xy6yrcA80AZ6u7gPOgYftIie0q3Ekjq9XlpXyxcDJyrTCmMXJdy%2FBVOB9awyurvkYnymko5sY7N%2FzALFjHIrsWOW%2Bo42wZbcIxVu9GKKU0JLXKnpsZ%2BfxDxFPYM5K61FXfOnIxkxS5nsmePAEsqwt86QbNTLPaZloHaccmbhkPFCkGbt0S1ISI1nxU73elHkEEli2m92D7iLH23qprP5DukHyumcQxcEy9QWkKnzvsK%2BcPrl5lrKPrHlXkFcj886kVknxZHav%2BtIzkCj%2FBC174ET%2FBjqpt%2B%2B1jX3FiXMVrWKJbB49E4xWY5IJ9ADdCLG32PzQ%2BUqkkSTRuvZtYK7BsNvucHHQhoTxNoCevys6BIUWh%2FskKbVNu%2BVhr%2Fza4rb%2BJzHe9eXodQdB51Xj9Zq3dHl8UQaLNHzw7%2FsqxyQMTMB%2FqTOGNUisY%2FLtFEVYSpzAN0Rp3uT%2Fqoby1Zlb0hAWXC3wSLcymuRereRT00S%2FyijH%2FTO6GmlC6bTvT4HkIy0iJIwJKjHzphFgBvmpyegz4JBdmMv4daDkWQPmWfr21AydPt3ExOhNryAJVFLCfYLvQ47O5Jfukw8MEt7D43lgJp4JXmy7xVI2WNI8UCFZ74GicxX2sPL3mNLAg8iPBOCUoMJD15b4GOqUB%2FmhtYFUGnxcn3X7xFnopbLJmEfUU4Rt1VHDtyZo0tqWIOCK7GQWOa9JCye1E3HAiWGgxnbnMloZ42%2Bl3DfrAeq59YIuSAF%2BsfmuVknio7jUOBMGmXPiBtDOHLeuY55fUo85ZgBdezUOcxY2TpeBJavQ6mHngDmEde4HkSldGo5W8brHX2vdGNjaj%2BkHgquFdGWm2VMvXoKu0bz2VZZbaMWUvpiUG&X-Amz-Signature=df8fd8341d0be164e2cf5c1921dd7ca54cf94a34110da944923a946e8c683a28&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WGF7TYN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICsmRBY32wS9N35aNco21SIN%2FyW6ya1%2Byd%2B%2FdfP1l2vLAiEA4GCCLfhPJ%2BYsC6t1aJpo27wnFYNAY9EXm3G4Q4J%2BHd4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPKzcVocPiEpn4Xy6yrcA80AZ6u7gPOgYftIie0q3Ekjq9XlpXyxcDJyrTCmMXJdy%2FBVOB9awyurvkYnymko5sY7N%2FzALFjHIrsWOW%2Bo42wZbcIxVu9GKKU0JLXKnpsZ%2BfxDxFPYM5K61FXfOnIxkxS5nsmePAEsqwt86QbNTLPaZloHaccmbhkPFCkGbt0S1ISI1nxU73elHkEEli2m92D7iLH23qprP5DukHyumcQxcEy9QWkKnzvsK%2BcPrl5lrKPrHlXkFcj886kVknxZHav%2BtIzkCj%2FBC174ET%2FBjqpt%2B%2B1jX3FiXMVrWKJbB49E4xWY5IJ9ADdCLG32PzQ%2BUqkkSTRuvZtYK7BsNvucHHQhoTxNoCevys6BIUWh%2FskKbVNu%2BVhr%2Fza4rb%2BJzHe9eXodQdB51Xj9Zq3dHl8UQaLNHzw7%2FsqxyQMTMB%2FqTOGNUisY%2FLtFEVYSpzAN0Rp3uT%2Fqoby1Zlb0hAWXC3wSLcymuRereRT00S%2FyijH%2FTO6GmlC6bTvT4HkIy0iJIwJKjHzphFgBvmpyegz4JBdmMv4daDkWQPmWfr21AydPt3ExOhNryAJVFLCfYLvQ47O5Jfukw8MEt7D43lgJp4JXmy7xVI2WNI8UCFZ74GicxX2sPL3mNLAg8iPBOCUoMJD15b4GOqUB%2FmhtYFUGnxcn3X7xFnopbLJmEfUU4Rt1VHDtyZo0tqWIOCK7GQWOa9JCye1E3HAiWGgxnbnMloZ42%2Bl3DfrAeq59YIuSAF%2BsfmuVknio7jUOBMGmXPiBtDOHLeuY55fUo85ZgBdezUOcxY2TpeBJavQ6mHngDmEde4HkSldGo5W8brHX2vdGNjaj%2BkHgquFdGWm2VMvXoKu0bz2VZZbaMWUvpiUG&X-Amz-Signature=5e5343e0344951dfbc9fee77971a91f6e436fb2760ea50e8524e2b0dcbfaae21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WGF7TYN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICsmRBY32wS9N35aNco21SIN%2FyW6ya1%2Byd%2B%2FdfP1l2vLAiEA4GCCLfhPJ%2BYsC6t1aJpo27wnFYNAY9EXm3G4Q4J%2BHd4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPKzcVocPiEpn4Xy6yrcA80AZ6u7gPOgYftIie0q3Ekjq9XlpXyxcDJyrTCmMXJdy%2FBVOB9awyurvkYnymko5sY7N%2FzALFjHIrsWOW%2Bo42wZbcIxVu9GKKU0JLXKnpsZ%2BfxDxFPYM5K61FXfOnIxkxS5nsmePAEsqwt86QbNTLPaZloHaccmbhkPFCkGbt0S1ISI1nxU73elHkEEli2m92D7iLH23qprP5DukHyumcQxcEy9QWkKnzvsK%2BcPrl5lrKPrHlXkFcj886kVknxZHav%2BtIzkCj%2FBC174ET%2FBjqpt%2B%2B1jX3FiXMVrWKJbB49E4xWY5IJ9ADdCLG32PzQ%2BUqkkSTRuvZtYK7BsNvucHHQhoTxNoCevys6BIUWh%2FskKbVNu%2BVhr%2Fza4rb%2BJzHe9eXodQdB51Xj9Zq3dHl8UQaLNHzw7%2FsqxyQMTMB%2FqTOGNUisY%2FLtFEVYSpzAN0Rp3uT%2Fqoby1Zlb0hAWXC3wSLcymuRereRT00S%2FyijH%2FTO6GmlC6bTvT4HkIy0iJIwJKjHzphFgBvmpyegz4JBdmMv4daDkWQPmWfr21AydPt3ExOhNryAJVFLCfYLvQ47O5Jfukw8MEt7D43lgJp4JXmy7xVI2WNI8UCFZ74GicxX2sPL3mNLAg8iPBOCUoMJD15b4GOqUB%2FmhtYFUGnxcn3X7xFnopbLJmEfUU4Rt1VHDtyZo0tqWIOCK7GQWOa9JCye1E3HAiWGgxnbnMloZ42%2Bl3DfrAeq59YIuSAF%2BsfmuVknio7jUOBMGmXPiBtDOHLeuY55fUo85ZgBdezUOcxY2TpeBJavQ6mHngDmEde4HkSldGo5W8brHX2vdGNjaj%2BkHgquFdGWm2VMvXoKu0bz2VZZbaMWUvpiUG&X-Amz-Signature=9430c47da8d69c666c2fc7bdb0317e5158164ca4a8132e199e74325ffe468d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WGF7TYN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICsmRBY32wS9N35aNco21SIN%2FyW6ya1%2Byd%2B%2FdfP1l2vLAiEA4GCCLfhPJ%2BYsC6t1aJpo27wnFYNAY9EXm3G4Q4J%2BHd4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPKzcVocPiEpn4Xy6yrcA80AZ6u7gPOgYftIie0q3Ekjq9XlpXyxcDJyrTCmMXJdy%2FBVOB9awyurvkYnymko5sY7N%2FzALFjHIrsWOW%2Bo42wZbcIxVu9GKKU0JLXKnpsZ%2BfxDxFPYM5K61FXfOnIxkxS5nsmePAEsqwt86QbNTLPaZloHaccmbhkPFCkGbt0S1ISI1nxU73elHkEEli2m92D7iLH23qprP5DukHyumcQxcEy9QWkKnzvsK%2BcPrl5lrKPrHlXkFcj886kVknxZHav%2BtIzkCj%2FBC174ET%2FBjqpt%2B%2B1jX3FiXMVrWKJbB49E4xWY5IJ9ADdCLG32PzQ%2BUqkkSTRuvZtYK7BsNvucHHQhoTxNoCevys6BIUWh%2FskKbVNu%2BVhr%2Fza4rb%2BJzHe9eXodQdB51Xj9Zq3dHl8UQaLNHzw7%2FsqxyQMTMB%2FqTOGNUisY%2FLtFEVYSpzAN0Rp3uT%2Fqoby1Zlb0hAWXC3wSLcymuRereRT00S%2FyijH%2FTO6GmlC6bTvT4HkIy0iJIwJKjHzphFgBvmpyegz4JBdmMv4daDkWQPmWfr21AydPt3ExOhNryAJVFLCfYLvQ47O5Jfukw8MEt7D43lgJp4JXmy7xVI2WNI8UCFZ74GicxX2sPL3mNLAg8iPBOCUoMJD15b4GOqUB%2FmhtYFUGnxcn3X7xFnopbLJmEfUU4Rt1VHDtyZo0tqWIOCK7GQWOa9JCye1E3HAiWGgxnbnMloZ42%2Bl3DfrAeq59YIuSAF%2BsfmuVknio7jUOBMGmXPiBtDOHLeuY55fUo85ZgBdezUOcxY2TpeBJavQ6mHngDmEde4HkSldGo5W8brHX2vdGNjaj%2BkHgquFdGWm2VMvXoKu0bz2VZZbaMWUvpiUG&X-Amz-Signature=ba026948addf8305f6fb52c7a838172e0a7f3da2c42ecc58cb8a88b35d725e95&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WGF7TYN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICsmRBY32wS9N35aNco21SIN%2FyW6ya1%2Byd%2B%2FdfP1l2vLAiEA4GCCLfhPJ%2BYsC6t1aJpo27wnFYNAY9EXm3G4Q4J%2BHd4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPKzcVocPiEpn4Xy6yrcA80AZ6u7gPOgYftIie0q3Ekjq9XlpXyxcDJyrTCmMXJdy%2FBVOB9awyurvkYnymko5sY7N%2FzALFjHIrsWOW%2Bo42wZbcIxVu9GKKU0JLXKnpsZ%2BfxDxFPYM5K61FXfOnIxkxS5nsmePAEsqwt86QbNTLPaZloHaccmbhkPFCkGbt0S1ISI1nxU73elHkEEli2m92D7iLH23qprP5DukHyumcQxcEy9QWkKnzvsK%2BcPrl5lrKPrHlXkFcj886kVknxZHav%2BtIzkCj%2FBC174ET%2FBjqpt%2B%2B1jX3FiXMVrWKJbB49E4xWY5IJ9ADdCLG32PzQ%2BUqkkSTRuvZtYK7BsNvucHHQhoTxNoCevys6BIUWh%2FskKbVNu%2BVhr%2Fza4rb%2BJzHe9eXodQdB51Xj9Zq3dHl8UQaLNHzw7%2FsqxyQMTMB%2FqTOGNUisY%2FLtFEVYSpzAN0Rp3uT%2Fqoby1Zlb0hAWXC3wSLcymuRereRT00S%2FyijH%2FTO6GmlC6bTvT4HkIy0iJIwJKjHzphFgBvmpyegz4JBdmMv4daDkWQPmWfr21AydPt3ExOhNryAJVFLCfYLvQ47O5Jfukw8MEt7D43lgJp4JXmy7xVI2WNI8UCFZ74GicxX2sPL3mNLAg8iPBOCUoMJD15b4GOqUB%2FmhtYFUGnxcn3X7xFnopbLJmEfUU4Rt1VHDtyZo0tqWIOCK7GQWOa9JCye1E3HAiWGgxnbnMloZ42%2Bl3DfrAeq59YIuSAF%2BsfmuVknio7jUOBMGmXPiBtDOHLeuY55fUo85ZgBdezUOcxY2TpeBJavQ6mHngDmEde4HkSldGo5W8brHX2vdGNjaj%2BkHgquFdGWm2VMvXoKu0bz2VZZbaMWUvpiUG&X-Amz-Signature=7d4f5598258301c2189e5a93e003f2f154af260632b298ffb9d8228e21bdf096&X-Amz-SignedHeaders=host&x-id=GetObject)
