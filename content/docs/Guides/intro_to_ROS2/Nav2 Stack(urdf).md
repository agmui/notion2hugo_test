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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJ6ZSFL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRFk0CxbED%2Ftgd7BSsJgeYCRCbWjG7JOZomdphnSYSXAIgAaIJQZXUEvIxDxiWMyOChkqOnSjydkdB1%2Bvk5rlNiigq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIDhHdhyfe81WHVp7yrcA%2BCscqLCSr43P0Vb0wkWcZAY2556Yj4FzVnGBHJZvzyedL3Wgi6yMi934O%2FwK2sTeJaMA4q7jEUsfdAIfU6hoMal8nkhxhC8PqIme0ZCOUPvOL2AmtYOL7Yl1VT2S22YkAAkrmUNZcEtKcGDfw7Bq0ysZxo0ZKoXwNaxyWer3ji1uvSXQWsJfA5PoQ0tma%2BUErC2I%2FXGQA4qcfx5%2FTqI%2FLLxoRBmRxHjI11hbUE0vNd0tNSTa1FGf2DlufFt86%2BtSOAExqgCMkzzswOSGlCcevo6GysK9T3X9s%2FCybpbqBWaCTJLQkac%2BNiIPaE3BmBvwOfn6OyknLKdOODUYrYWrgugyZrn0vpJ7P%2F2hSAvariY4NoSdRhW4JIDd8k%2Bm7tTojZQ2u8hiOpvGjYFQlQM%2Bc4DtxjN%2FRA3gLkWYtkXwinkgdlk25LSbke5Y1E4iLSHCrYJ6z0RPJjSilg69CJ%2F3906XIU80fbewq1jLIIF4yNWvSKgw%2BQtf2lIX%2BnotLvOjACnDatM2hdz0pu8COdWogcNRtA3FYfEvwcEMTussp5orvoJCs2Fd7uPt1D%2BYIvmSNt6%2F%2FPVXviJIxVxDQCPy5cV9Tx%2FA8YuhTfBXiNmijwVFWwvcqLzVEXsirXFMNyVyMEGOqUBEs1BXRmcaHF%2FdR7O7oFR92pvK7%2F1jLoWAKIfeO%2BQdb%2FnzlD1BJ5IgdplLnriw8noI571OiG1JEcQMdfH3dIsXmCA5gRbJD2gHKhrw%2Fpkxn7dNZa%2FN99POaZB8TP6nblPYOdtTC33irAgnAUTDPCO3%2Fig1b5C5MStGZinmtyvd7O2cgOlvJ2itM5pO2hwxOqx6x2iZHrIRFyedL%2BhBKH2vN9tj94U&X-Amz-Signature=b11324410aaaafcaee17406fcca15a09f115fdd990fc8ace344d574daa98d642&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJ6ZSFL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRFk0CxbED%2Ftgd7BSsJgeYCRCbWjG7JOZomdphnSYSXAIgAaIJQZXUEvIxDxiWMyOChkqOnSjydkdB1%2Bvk5rlNiigq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIDhHdhyfe81WHVp7yrcA%2BCscqLCSr43P0Vb0wkWcZAY2556Yj4FzVnGBHJZvzyedL3Wgi6yMi934O%2FwK2sTeJaMA4q7jEUsfdAIfU6hoMal8nkhxhC8PqIme0ZCOUPvOL2AmtYOL7Yl1VT2S22YkAAkrmUNZcEtKcGDfw7Bq0ysZxo0ZKoXwNaxyWer3ji1uvSXQWsJfA5PoQ0tma%2BUErC2I%2FXGQA4qcfx5%2FTqI%2FLLxoRBmRxHjI11hbUE0vNd0tNSTa1FGf2DlufFt86%2BtSOAExqgCMkzzswOSGlCcevo6GysK9T3X9s%2FCybpbqBWaCTJLQkac%2BNiIPaE3BmBvwOfn6OyknLKdOODUYrYWrgugyZrn0vpJ7P%2F2hSAvariY4NoSdRhW4JIDd8k%2Bm7tTojZQ2u8hiOpvGjYFQlQM%2Bc4DtxjN%2FRA3gLkWYtkXwinkgdlk25LSbke5Y1E4iLSHCrYJ6z0RPJjSilg69CJ%2F3906XIU80fbewq1jLIIF4yNWvSKgw%2BQtf2lIX%2BnotLvOjACnDatM2hdz0pu8COdWogcNRtA3FYfEvwcEMTussp5orvoJCs2Fd7uPt1D%2BYIvmSNt6%2F%2FPVXviJIxVxDQCPy5cV9Tx%2FA8YuhTfBXiNmijwVFWwvcqLzVEXsirXFMNyVyMEGOqUBEs1BXRmcaHF%2FdR7O7oFR92pvK7%2F1jLoWAKIfeO%2BQdb%2FnzlD1BJ5IgdplLnriw8noI571OiG1JEcQMdfH3dIsXmCA5gRbJD2gHKhrw%2Fpkxn7dNZa%2FN99POaZB8TP6nblPYOdtTC33irAgnAUTDPCO3%2Fig1b5C5MStGZinmtyvd7O2cgOlvJ2itM5pO2hwxOqx6x2iZHrIRFyedL%2BhBKH2vN9tj94U&X-Amz-Signature=aa419bb034964e6050dda23256978780cd438b7e125c722bc2da8e2e89ce4a58&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJ6ZSFL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRFk0CxbED%2Ftgd7BSsJgeYCRCbWjG7JOZomdphnSYSXAIgAaIJQZXUEvIxDxiWMyOChkqOnSjydkdB1%2Bvk5rlNiigq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIDhHdhyfe81WHVp7yrcA%2BCscqLCSr43P0Vb0wkWcZAY2556Yj4FzVnGBHJZvzyedL3Wgi6yMi934O%2FwK2sTeJaMA4q7jEUsfdAIfU6hoMal8nkhxhC8PqIme0ZCOUPvOL2AmtYOL7Yl1VT2S22YkAAkrmUNZcEtKcGDfw7Bq0ysZxo0ZKoXwNaxyWer3ji1uvSXQWsJfA5PoQ0tma%2BUErC2I%2FXGQA4qcfx5%2FTqI%2FLLxoRBmRxHjI11hbUE0vNd0tNSTa1FGf2DlufFt86%2BtSOAExqgCMkzzswOSGlCcevo6GysK9T3X9s%2FCybpbqBWaCTJLQkac%2BNiIPaE3BmBvwOfn6OyknLKdOODUYrYWrgugyZrn0vpJ7P%2F2hSAvariY4NoSdRhW4JIDd8k%2Bm7tTojZQ2u8hiOpvGjYFQlQM%2Bc4DtxjN%2FRA3gLkWYtkXwinkgdlk25LSbke5Y1E4iLSHCrYJ6z0RPJjSilg69CJ%2F3906XIU80fbewq1jLIIF4yNWvSKgw%2BQtf2lIX%2BnotLvOjACnDatM2hdz0pu8COdWogcNRtA3FYfEvwcEMTussp5orvoJCs2Fd7uPt1D%2BYIvmSNt6%2F%2FPVXviJIxVxDQCPy5cV9Tx%2FA8YuhTfBXiNmijwVFWwvcqLzVEXsirXFMNyVyMEGOqUBEs1BXRmcaHF%2FdR7O7oFR92pvK7%2F1jLoWAKIfeO%2BQdb%2FnzlD1BJ5IgdplLnriw8noI571OiG1JEcQMdfH3dIsXmCA5gRbJD2gHKhrw%2Fpkxn7dNZa%2FN99POaZB8TP6nblPYOdtTC33irAgnAUTDPCO3%2Fig1b5C5MStGZinmtyvd7O2cgOlvJ2itM5pO2hwxOqx6x2iZHrIRFyedL%2BhBKH2vN9tj94U&X-Amz-Signature=446e67976ce91d845fedf7494ec14869e68b5644d68d34cb5ba88f9703a4929d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJ6ZSFL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRFk0CxbED%2Ftgd7BSsJgeYCRCbWjG7JOZomdphnSYSXAIgAaIJQZXUEvIxDxiWMyOChkqOnSjydkdB1%2Bvk5rlNiigq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIDhHdhyfe81WHVp7yrcA%2BCscqLCSr43P0Vb0wkWcZAY2556Yj4FzVnGBHJZvzyedL3Wgi6yMi934O%2FwK2sTeJaMA4q7jEUsfdAIfU6hoMal8nkhxhC8PqIme0ZCOUPvOL2AmtYOL7Yl1VT2S22YkAAkrmUNZcEtKcGDfw7Bq0ysZxo0ZKoXwNaxyWer3ji1uvSXQWsJfA5PoQ0tma%2BUErC2I%2FXGQA4qcfx5%2FTqI%2FLLxoRBmRxHjI11hbUE0vNd0tNSTa1FGf2DlufFt86%2BtSOAExqgCMkzzswOSGlCcevo6GysK9T3X9s%2FCybpbqBWaCTJLQkac%2BNiIPaE3BmBvwOfn6OyknLKdOODUYrYWrgugyZrn0vpJ7P%2F2hSAvariY4NoSdRhW4JIDd8k%2Bm7tTojZQ2u8hiOpvGjYFQlQM%2Bc4DtxjN%2FRA3gLkWYtkXwinkgdlk25LSbke5Y1E4iLSHCrYJ6z0RPJjSilg69CJ%2F3906XIU80fbewq1jLIIF4yNWvSKgw%2BQtf2lIX%2BnotLvOjACnDatM2hdz0pu8COdWogcNRtA3FYfEvwcEMTussp5orvoJCs2Fd7uPt1D%2BYIvmSNt6%2F%2FPVXviJIxVxDQCPy5cV9Tx%2FA8YuhTfBXiNmijwVFWwvcqLzVEXsirXFMNyVyMEGOqUBEs1BXRmcaHF%2FdR7O7oFR92pvK7%2F1jLoWAKIfeO%2BQdb%2FnzlD1BJ5IgdplLnriw8noI571OiG1JEcQMdfH3dIsXmCA5gRbJD2gHKhrw%2Fpkxn7dNZa%2FN99POaZB8TP6nblPYOdtTC33irAgnAUTDPCO3%2Fig1b5C5MStGZinmtyvd7O2cgOlvJ2itM5pO2hwxOqx6x2iZHrIRFyedL%2BhBKH2vN9tj94U&X-Amz-Signature=5db0d92d42607570191ee55974a2e8c1a0f228ebf89b7aacb777b7aab1a753ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJ6ZSFL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRFk0CxbED%2Ftgd7BSsJgeYCRCbWjG7JOZomdphnSYSXAIgAaIJQZXUEvIxDxiWMyOChkqOnSjydkdB1%2Bvk5rlNiigq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIDhHdhyfe81WHVp7yrcA%2BCscqLCSr43P0Vb0wkWcZAY2556Yj4FzVnGBHJZvzyedL3Wgi6yMi934O%2FwK2sTeJaMA4q7jEUsfdAIfU6hoMal8nkhxhC8PqIme0ZCOUPvOL2AmtYOL7Yl1VT2S22YkAAkrmUNZcEtKcGDfw7Bq0ysZxo0ZKoXwNaxyWer3ji1uvSXQWsJfA5PoQ0tma%2BUErC2I%2FXGQA4qcfx5%2FTqI%2FLLxoRBmRxHjI11hbUE0vNd0tNSTa1FGf2DlufFt86%2BtSOAExqgCMkzzswOSGlCcevo6GysK9T3X9s%2FCybpbqBWaCTJLQkac%2BNiIPaE3BmBvwOfn6OyknLKdOODUYrYWrgugyZrn0vpJ7P%2F2hSAvariY4NoSdRhW4JIDd8k%2Bm7tTojZQ2u8hiOpvGjYFQlQM%2Bc4DtxjN%2FRA3gLkWYtkXwinkgdlk25LSbke5Y1E4iLSHCrYJ6z0RPJjSilg69CJ%2F3906XIU80fbewq1jLIIF4yNWvSKgw%2BQtf2lIX%2BnotLvOjACnDatM2hdz0pu8COdWogcNRtA3FYfEvwcEMTussp5orvoJCs2Fd7uPt1D%2BYIvmSNt6%2F%2FPVXviJIxVxDQCPy5cV9Tx%2FA8YuhTfBXiNmijwVFWwvcqLzVEXsirXFMNyVyMEGOqUBEs1BXRmcaHF%2FdR7O7oFR92pvK7%2F1jLoWAKIfeO%2BQdb%2FnzlD1BJ5IgdplLnriw8noI571OiG1JEcQMdfH3dIsXmCA5gRbJD2gHKhrw%2Fpkxn7dNZa%2FN99POaZB8TP6nblPYOdtTC33irAgnAUTDPCO3%2Fig1b5C5MStGZinmtyvd7O2cgOlvJ2itM5pO2hwxOqx6x2iZHrIRFyedL%2BhBKH2vN9tj94U&X-Amz-Signature=9c46d312cc66155033c6847964b45441f6d9aa5811317b22eb1ed493242abcbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJ6ZSFL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRFk0CxbED%2Ftgd7BSsJgeYCRCbWjG7JOZomdphnSYSXAIgAaIJQZXUEvIxDxiWMyOChkqOnSjydkdB1%2Bvk5rlNiigq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIDhHdhyfe81WHVp7yrcA%2BCscqLCSr43P0Vb0wkWcZAY2556Yj4FzVnGBHJZvzyedL3Wgi6yMi934O%2FwK2sTeJaMA4q7jEUsfdAIfU6hoMal8nkhxhC8PqIme0ZCOUPvOL2AmtYOL7Yl1VT2S22YkAAkrmUNZcEtKcGDfw7Bq0ysZxo0ZKoXwNaxyWer3ji1uvSXQWsJfA5PoQ0tma%2BUErC2I%2FXGQA4qcfx5%2FTqI%2FLLxoRBmRxHjI11hbUE0vNd0tNSTa1FGf2DlufFt86%2BtSOAExqgCMkzzswOSGlCcevo6GysK9T3X9s%2FCybpbqBWaCTJLQkac%2BNiIPaE3BmBvwOfn6OyknLKdOODUYrYWrgugyZrn0vpJ7P%2F2hSAvariY4NoSdRhW4JIDd8k%2Bm7tTojZQ2u8hiOpvGjYFQlQM%2Bc4DtxjN%2FRA3gLkWYtkXwinkgdlk25LSbke5Y1E4iLSHCrYJ6z0RPJjSilg69CJ%2F3906XIU80fbewq1jLIIF4yNWvSKgw%2BQtf2lIX%2BnotLvOjACnDatM2hdz0pu8COdWogcNRtA3FYfEvwcEMTussp5orvoJCs2Fd7uPt1D%2BYIvmSNt6%2F%2FPVXviJIxVxDQCPy5cV9Tx%2FA8YuhTfBXiNmijwVFWwvcqLzVEXsirXFMNyVyMEGOqUBEs1BXRmcaHF%2FdR7O7oFR92pvK7%2F1jLoWAKIfeO%2BQdb%2FnzlD1BJ5IgdplLnriw8noI571OiG1JEcQMdfH3dIsXmCA5gRbJD2gHKhrw%2Fpkxn7dNZa%2FN99POaZB8TP6nblPYOdtTC33irAgnAUTDPCO3%2Fig1b5C5MStGZinmtyvd7O2cgOlvJ2itM5pO2hwxOqx6x2iZHrIRFyedL%2BhBKH2vN9tj94U&X-Amz-Signature=012624dbda62f1bae7cb68e7ad3fc07ef2d9cc2017e9dd4a50be827d5033f485&X-Amz-SignedHeaders=host&x-id=GetObject)
