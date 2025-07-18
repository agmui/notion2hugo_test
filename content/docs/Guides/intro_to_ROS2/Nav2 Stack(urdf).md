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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRYPGGI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIC%2BaAWwcEnAxqPNpkZheXYVJ87pZeVGVpF8l7bSoClsmAiEAsIr0%2FGTTbwOihzRag%2Fumg6d5i5EXPayUbEZ516xeFlsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaqjiLwL5XDHJUAtircA25gHJL2DqzznH96R%2BwaJagQnbVgcIVZNTXleDLM%2Bdzc9eOPtdaxBMIZGIqxlMUh4Lu2I5qyX8rZJRGwqv%2FPi8eqDfZS70miOws6pKoDoMxFSQdPNAA940wzXyNEwV6pCuYml1oD%2BevdXkkQXpCJJenTK0sIDHkQi2jWBhVYGFIWNucLei5fuo%2Bi63w1aZAezllNOlcsd7A8t7XF%2FfRA0O%2BEsAsrKKTrZWcM8imUM6MVWsXMED45nN9hpEZWtergI2MsIEFVe1eU7BA1cnRRwBFa60RpqYHCGId%2BgQXX74PJG6lo%2BJzyvLiQJ57eTHo2nknC807xQnxdiCdxbuXxs4YUWXG94NzXX%2BFFHFHO8Io3wkcIqV4gyv4Q3Mc0JVQKEM4obpcm4FCpEAsgiBN4rN99A3OdNOa8dh7bb8ttATBeWM6jTMU6lr4zKEqHUJoN40k5s%2F1VT8DO5alvwtjrZE9ZzyCdlwx%2Fm2Wlh5iwyQaWipYOaURC4MzTj2OKqB6pz9JIECLwx585fljuUZ7xaso88sxPiM7K4cOdDUHsgXDJkP%2FX7XOHctffykx1iDFPpJqynrxMwjkb76qM8j%2B4A6SV04hMoiCLKFn%2FLAuZTzDl1ghbtAoXeErodNBOMJLg5sMGOqUBtCiYGtDwAidUoOFt61osgormfxhtDPGEVVTB6ir%2BRVM2JAZIAStPxgrbRwDEtaleVGjemkDEpmC84g%2F%2FkzwI3lYe5lbrdNTQ3G3JAwQhB%2BeZmIe%2By42VGCnsmEs%2FgZbEQjjq2YO8daYJc31JPJPJFNb8KBhNj9I%2BdVIhewX7176YWwspQRazd8ruE45gHXF5%2BVWBiGIUH3KU%2BLzkHNh5LYHbAckv&X-Amz-Signature=f1b0935fdac81df7b4a031272f29b923bd1ff678edcf480f16e34cd57001356d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRYPGGI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIC%2BaAWwcEnAxqPNpkZheXYVJ87pZeVGVpF8l7bSoClsmAiEAsIr0%2FGTTbwOihzRag%2Fumg6d5i5EXPayUbEZ516xeFlsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaqjiLwL5XDHJUAtircA25gHJL2DqzznH96R%2BwaJagQnbVgcIVZNTXleDLM%2Bdzc9eOPtdaxBMIZGIqxlMUh4Lu2I5qyX8rZJRGwqv%2FPi8eqDfZS70miOws6pKoDoMxFSQdPNAA940wzXyNEwV6pCuYml1oD%2BevdXkkQXpCJJenTK0sIDHkQi2jWBhVYGFIWNucLei5fuo%2Bi63w1aZAezllNOlcsd7A8t7XF%2FfRA0O%2BEsAsrKKTrZWcM8imUM6MVWsXMED45nN9hpEZWtergI2MsIEFVe1eU7BA1cnRRwBFa60RpqYHCGId%2BgQXX74PJG6lo%2BJzyvLiQJ57eTHo2nknC807xQnxdiCdxbuXxs4YUWXG94NzXX%2BFFHFHO8Io3wkcIqV4gyv4Q3Mc0JVQKEM4obpcm4FCpEAsgiBN4rN99A3OdNOa8dh7bb8ttATBeWM6jTMU6lr4zKEqHUJoN40k5s%2F1VT8DO5alvwtjrZE9ZzyCdlwx%2Fm2Wlh5iwyQaWipYOaURC4MzTj2OKqB6pz9JIECLwx585fljuUZ7xaso88sxPiM7K4cOdDUHsgXDJkP%2FX7XOHctffykx1iDFPpJqynrxMwjkb76qM8j%2B4A6SV04hMoiCLKFn%2FLAuZTzDl1ghbtAoXeErodNBOMJLg5sMGOqUBtCiYGtDwAidUoOFt61osgormfxhtDPGEVVTB6ir%2BRVM2JAZIAStPxgrbRwDEtaleVGjemkDEpmC84g%2F%2FkzwI3lYe5lbrdNTQ3G3JAwQhB%2BeZmIe%2By42VGCnsmEs%2FgZbEQjjq2YO8daYJc31JPJPJFNb8KBhNj9I%2BdVIhewX7176YWwspQRazd8ruE45gHXF5%2BVWBiGIUH3KU%2BLzkHNh5LYHbAckv&X-Amz-Signature=f032ca54a97b0edc4e882e2dcc4e10d6b0afeb812ebb3a36471cc39885dda4bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRYPGGI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIC%2BaAWwcEnAxqPNpkZheXYVJ87pZeVGVpF8l7bSoClsmAiEAsIr0%2FGTTbwOihzRag%2Fumg6d5i5EXPayUbEZ516xeFlsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaqjiLwL5XDHJUAtircA25gHJL2DqzznH96R%2BwaJagQnbVgcIVZNTXleDLM%2Bdzc9eOPtdaxBMIZGIqxlMUh4Lu2I5qyX8rZJRGwqv%2FPi8eqDfZS70miOws6pKoDoMxFSQdPNAA940wzXyNEwV6pCuYml1oD%2BevdXkkQXpCJJenTK0sIDHkQi2jWBhVYGFIWNucLei5fuo%2Bi63w1aZAezllNOlcsd7A8t7XF%2FfRA0O%2BEsAsrKKTrZWcM8imUM6MVWsXMED45nN9hpEZWtergI2MsIEFVe1eU7BA1cnRRwBFa60RpqYHCGId%2BgQXX74PJG6lo%2BJzyvLiQJ57eTHo2nknC807xQnxdiCdxbuXxs4YUWXG94NzXX%2BFFHFHO8Io3wkcIqV4gyv4Q3Mc0JVQKEM4obpcm4FCpEAsgiBN4rN99A3OdNOa8dh7bb8ttATBeWM6jTMU6lr4zKEqHUJoN40k5s%2F1VT8DO5alvwtjrZE9ZzyCdlwx%2Fm2Wlh5iwyQaWipYOaURC4MzTj2OKqB6pz9JIECLwx585fljuUZ7xaso88sxPiM7K4cOdDUHsgXDJkP%2FX7XOHctffykx1iDFPpJqynrxMwjkb76qM8j%2B4A6SV04hMoiCLKFn%2FLAuZTzDl1ghbtAoXeErodNBOMJLg5sMGOqUBtCiYGtDwAidUoOFt61osgormfxhtDPGEVVTB6ir%2BRVM2JAZIAStPxgrbRwDEtaleVGjemkDEpmC84g%2F%2FkzwI3lYe5lbrdNTQ3G3JAwQhB%2BeZmIe%2By42VGCnsmEs%2FgZbEQjjq2YO8daYJc31JPJPJFNb8KBhNj9I%2BdVIhewX7176YWwspQRazd8ruE45gHXF5%2BVWBiGIUH3KU%2BLzkHNh5LYHbAckv&X-Amz-Signature=922457f0e50ec191ccec891a7febeab2f1f3033b799bbb4db953e081cd4d64f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRYPGGI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIC%2BaAWwcEnAxqPNpkZheXYVJ87pZeVGVpF8l7bSoClsmAiEAsIr0%2FGTTbwOihzRag%2Fumg6d5i5EXPayUbEZ516xeFlsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaqjiLwL5XDHJUAtircA25gHJL2DqzznH96R%2BwaJagQnbVgcIVZNTXleDLM%2Bdzc9eOPtdaxBMIZGIqxlMUh4Lu2I5qyX8rZJRGwqv%2FPi8eqDfZS70miOws6pKoDoMxFSQdPNAA940wzXyNEwV6pCuYml1oD%2BevdXkkQXpCJJenTK0sIDHkQi2jWBhVYGFIWNucLei5fuo%2Bi63w1aZAezllNOlcsd7A8t7XF%2FfRA0O%2BEsAsrKKTrZWcM8imUM6MVWsXMED45nN9hpEZWtergI2MsIEFVe1eU7BA1cnRRwBFa60RpqYHCGId%2BgQXX74PJG6lo%2BJzyvLiQJ57eTHo2nknC807xQnxdiCdxbuXxs4YUWXG94NzXX%2BFFHFHO8Io3wkcIqV4gyv4Q3Mc0JVQKEM4obpcm4FCpEAsgiBN4rN99A3OdNOa8dh7bb8ttATBeWM6jTMU6lr4zKEqHUJoN40k5s%2F1VT8DO5alvwtjrZE9ZzyCdlwx%2Fm2Wlh5iwyQaWipYOaURC4MzTj2OKqB6pz9JIECLwx585fljuUZ7xaso88sxPiM7K4cOdDUHsgXDJkP%2FX7XOHctffykx1iDFPpJqynrxMwjkb76qM8j%2B4A6SV04hMoiCLKFn%2FLAuZTzDl1ghbtAoXeErodNBOMJLg5sMGOqUBtCiYGtDwAidUoOFt61osgormfxhtDPGEVVTB6ir%2BRVM2JAZIAStPxgrbRwDEtaleVGjemkDEpmC84g%2F%2FkzwI3lYe5lbrdNTQ3G3JAwQhB%2BeZmIe%2By42VGCnsmEs%2FgZbEQjjq2YO8daYJc31JPJPJFNb8KBhNj9I%2BdVIhewX7176YWwspQRazd8ruE45gHXF5%2BVWBiGIUH3KU%2BLzkHNh5LYHbAckv&X-Amz-Signature=db63684d0923871d1fedc55bbfd6ce4c6edd848c4f28c036fa17c69496c224b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRYPGGI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIC%2BaAWwcEnAxqPNpkZheXYVJ87pZeVGVpF8l7bSoClsmAiEAsIr0%2FGTTbwOihzRag%2Fumg6d5i5EXPayUbEZ516xeFlsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaqjiLwL5XDHJUAtircA25gHJL2DqzznH96R%2BwaJagQnbVgcIVZNTXleDLM%2Bdzc9eOPtdaxBMIZGIqxlMUh4Lu2I5qyX8rZJRGwqv%2FPi8eqDfZS70miOws6pKoDoMxFSQdPNAA940wzXyNEwV6pCuYml1oD%2BevdXkkQXpCJJenTK0sIDHkQi2jWBhVYGFIWNucLei5fuo%2Bi63w1aZAezllNOlcsd7A8t7XF%2FfRA0O%2BEsAsrKKTrZWcM8imUM6MVWsXMED45nN9hpEZWtergI2MsIEFVe1eU7BA1cnRRwBFa60RpqYHCGId%2BgQXX74PJG6lo%2BJzyvLiQJ57eTHo2nknC807xQnxdiCdxbuXxs4YUWXG94NzXX%2BFFHFHO8Io3wkcIqV4gyv4Q3Mc0JVQKEM4obpcm4FCpEAsgiBN4rN99A3OdNOa8dh7bb8ttATBeWM6jTMU6lr4zKEqHUJoN40k5s%2F1VT8DO5alvwtjrZE9ZzyCdlwx%2Fm2Wlh5iwyQaWipYOaURC4MzTj2OKqB6pz9JIECLwx585fljuUZ7xaso88sxPiM7K4cOdDUHsgXDJkP%2FX7XOHctffykx1iDFPpJqynrxMwjkb76qM8j%2B4A6SV04hMoiCLKFn%2FLAuZTzDl1ghbtAoXeErodNBOMJLg5sMGOqUBtCiYGtDwAidUoOFt61osgormfxhtDPGEVVTB6ir%2BRVM2JAZIAStPxgrbRwDEtaleVGjemkDEpmC84g%2F%2FkzwI3lYe5lbrdNTQ3G3JAwQhB%2BeZmIe%2By42VGCnsmEs%2FgZbEQjjq2YO8daYJc31JPJPJFNb8KBhNj9I%2BdVIhewX7176YWwspQRazd8ruE45gHXF5%2BVWBiGIUH3KU%2BLzkHNh5LYHbAckv&X-Amz-Signature=764b429d8bf1c1295af4a29057cea3afba4f58d7a21dbb568d1bce79fef43b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRYPGGI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIC%2BaAWwcEnAxqPNpkZheXYVJ87pZeVGVpF8l7bSoClsmAiEAsIr0%2FGTTbwOihzRag%2Fumg6d5i5EXPayUbEZ516xeFlsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaqjiLwL5XDHJUAtircA25gHJL2DqzznH96R%2BwaJagQnbVgcIVZNTXleDLM%2Bdzc9eOPtdaxBMIZGIqxlMUh4Lu2I5qyX8rZJRGwqv%2FPi8eqDfZS70miOws6pKoDoMxFSQdPNAA940wzXyNEwV6pCuYml1oD%2BevdXkkQXpCJJenTK0sIDHkQi2jWBhVYGFIWNucLei5fuo%2Bi63w1aZAezllNOlcsd7A8t7XF%2FfRA0O%2BEsAsrKKTrZWcM8imUM6MVWsXMED45nN9hpEZWtergI2MsIEFVe1eU7BA1cnRRwBFa60RpqYHCGId%2BgQXX74PJG6lo%2BJzyvLiQJ57eTHo2nknC807xQnxdiCdxbuXxs4YUWXG94NzXX%2BFFHFHO8Io3wkcIqV4gyv4Q3Mc0JVQKEM4obpcm4FCpEAsgiBN4rN99A3OdNOa8dh7bb8ttATBeWM6jTMU6lr4zKEqHUJoN40k5s%2F1VT8DO5alvwtjrZE9ZzyCdlwx%2Fm2Wlh5iwyQaWipYOaURC4MzTj2OKqB6pz9JIECLwx585fljuUZ7xaso88sxPiM7K4cOdDUHsgXDJkP%2FX7XOHctffykx1iDFPpJqynrxMwjkb76qM8j%2B4A6SV04hMoiCLKFn%2FLAuZTzDl1ghbtAoXeErodNBOMJLg5sMGOqUBtCiYGtDwAidUoOFt61osgormfxhtDPGEVVTB6ir%2BRVM2JAZIAStPxgrbRwDEtaleVGjemkDEpmC84g%2F%2FkzwI3lYe5lbrdNTQ3G3JAwQhB%2BeZmIe%2By42VGCnsmEs%2FgZbEQjjq2YO8daYJc31JPJPJFNb8KBhNj9I%2BdVIhewX7176YWwspQRazd8ruE45gHXF5%2BVWBiGIUH3KU%2BLzkHNh5LYHbAckv&X-Amz-Signature=cb5be759a423c33e9ee033c03d62df89282ba1742cb40a908cab7d881feb6253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
