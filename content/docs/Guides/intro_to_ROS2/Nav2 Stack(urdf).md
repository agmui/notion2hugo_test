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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQY4S3F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA99niIrM0seKKOsKG7Cq%2B%2BqOQrXydt%2FhgCboyzHf29hAiBrt%2FIBcQRhWGgTDMp6OWzjlxzOIuzPJU4IhlnZthyqCyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXUkfng%2Bszr2VRYVKtwDh%2BdYyr%2BieN4%2F0b5xlI22afQ2BDFwqy0rDYdkM26cXNsz%2FY%2F7drXBbYZNWCG4ODfLodM0AAs0P307SUR21ZgkoCI3h0Gu0DYQWVQQstGi2bR%2F7sW9N4hHES%2BFJVIzxrZGOyZZByfx%2Bkd1rJG1R8rDuw1vHyNECCbk%2FWhNdfCtTgr5KKFfdl%2BVjAKPnKF5GeNP2V5%2FhOMocxW%2BiOXyjkTnKeE7NDrrVGuJQTiYj6oLacpYhzm8tj%2FtqYl1KQ6hgxg9a5G1v%2BGiKKhwVhrPO0sXpfFR294%2FntJmpLOvw%2B5FIjeb5%2FWDHlSM1HgXB9jMvgHcmD8CKVb%2FpXoBW1%2BvHYam2WwdnFRrkKe1jW7B2zwi3BWZzrwaASMKjFMamwqjPJ7ybtNTYqnSH3TGuxhsVsJHSJ80n9E%2BAzkeVAHK8SU%2FaUCclAjpIgtz6czJu0vzFflRGRd7BzHwwjgBbKtSPkCj7g7PGkh4By2N%2F7qTHpwYdZNNIO2MPkTty3pysrHwGctanpK9cpN6e0F5TZNZSJA53LqaX1IMdoukjj%2FN65u3r5R6xGUgbST262vUka2JGxYhU%2BjmsI0FjfmH8QzkVaIjtSG7K4HFwV4Uq1pPLiF1LAcTtaa2pCIkzxuIAhowwb%2FRvgY6pgELOyql4UMf%2FJ3ekxt%2FXFIfxqZ1QNjQqaulZeg%2BzsPTV9uBO00JIuro0Nkk5l1KiYtRlhbcBWSatvyaTeiWzLu5h0QBurA0zKc9J1iyyOIgoNc5gDKz56QV3W9uLyzn%2BeNAORnaUEktPkiBUH1GRMxtyBaI3%2B5wEMg0HosVpjX9U46HDT%2BsZXOeSu5FI8Vr5qApZANGlb0UzU8uYiw66KV%2FfOtQOW4E&X-Amz-Signature=4c63bfb3f5514ba8795cb8c97ff0dd0b30aaf4446012f20880f4243ebe1b903b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQY4S3F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA99niIrM0seKKOsKG7Cq%2B%2BqOQrXydt%2FhgCboyzHf29hAiBrt%2FIBcQRhWGgTDMp6OWzjlxzOIuzPJU4IhlnZthyqCyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXUkfng%2Bszr2VRYVKtwDh%2BdYyr%2BieN4%2F0b5xlI22afQ2BDFwqy0rDYdkM26cXNsz%2FY%2F7drXBbYZNWCG4ODfLodM0AAs0P307SUR21ZgkoCI3h0Gu0DYQWVQQstGi2bR%2F7sW9N4hHES%2BFJVIzxrZGOyZZByfx%2Bkd1rJG1R8rDuw1vHyNECCbk%2FWhNdfCtTgr5KKFfdl%2BVjAKPnKF5GeNP2V5%2FhOMocxW%2BiOXyjkTnKeE7NDrrVGuJQTiYj6oLacpYhzm8tj%2FtqYl1KQ6hgxg9a5G1v%2BGiKKhwVhrPO0sXpfFR294%2FntJmpLOvw%2B5FIjeb5%2FWDHlSM1HgXB9jMvgHcmD8CKVb%2FpXoBW1%2BvHYam2WwdnFRrkKe1jW7B2zwi3BWZzrwaASMKjFMamwqjPJ7ybtNTYqnSH3TGuxhsVsJHSJ80n9E%2BAzkeVAHK8SU%2FaUCclAjpIgtz6czJu0vzFflRGRd7BzHwwjgBbKtSPkCj7g7PGkh4By2N%2F7qTHpwYdZNNIO2MPkTty3pysrHwGctanpK9cpN6e0F5TZNZSJA53LqaX1IMdoukjj%2FN65u3r5R6xGUgbST262vUka2JGxYhU%2BjmsI0FjfmH8QzkVaIjtSG7K4HFwV4Uq1pPLiF1LAcTtaa2pCIkzxuIAhowwb%2FRvgY6pgELOyql4UMf%2FJ3ekxt%2FXFIfxqZ1QNjQqaulZeg%2BzsPTV9uBO00JIuro0Nkk5l1KiYtRlhbcBWSatvyaTeiWzLu5h0QBurA0zKc9J1iyyOIgoNc5gDKz56QV3W9uLyzn%2BeNAORnaUEktPkiBUH1GRMxtyBaI3%2B5wEMg0HosVpjX9U46HDT%2BsZXOeSu5FI8Vr5qApZANGlb0UzU8uYiw66KV%2FfOtQOW4E&X-Amz-Signature=2f7304ca321df96f5857546cfe45c0bccc5a196b2247acb24a83e3b2641920a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQY4S3F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA99niIrM0seKKOsKG7Cq%2B%2BqOQrXydt%2FhgCboyzHf29hAiBrt%2FIBcQRhWGgTDMp6OWzjlxzOIuzPJU4IhlnZthyqCyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXUkfng%2Bszr2VRYVKtwDh%2BdYyr%2BieN4%2F0b5xlI22afQ2BDFwqy0rDYdkM26cXNsz%2FY%2F7drXBbYZNWCG4ODfLodM0AAs0P307SUR21ZgkoCI3h0Gu0DYQWVQQstGi2bR%2F7sW9N4hHES%2BFJVIzxrZGOyZZByfx%2Bkd1rJG1R8rDuw1vHyNECCbk%2FWhNdfCtTgr5KKFfdl%2BVjAKPnKF5GeNP2V5%2FhOMocxW%2BiOXyjkTnKeE7NDrrVGuJQTiYj6oLacpYhzm8tj%2FtqYl1KQ6hgxg9a5G1v%2BGiKKhwVhrPO0sXpfFR294%2FntJmpLOvw%2B5FIjeb5%2FWDHlSM1HgXB9jMvgHcmD8CKVb%2FpXoBW1%2BvHYam2WwdnFRrkKe1jW7B2zwi3BWZzrwaASMKjFMamwqjPJ7ybtNTYqnSH3TGuxhsVsJHSJ80n9E%2BAzkeVAHK8SU%2FaUCclAjpIgtz6czJu0vzFflRGRd7BzHwwjgBbKtSPkCj7g7PGkh4By2N%2F7qTHpwYdZNNIO2MPkTty3pysrHwGctanpK9cpN6e0F5TZNZSJA53LqaX1IMdoukjj%2FN65u3r5R6xGUgbST262vUka2JGxYhU%2BjmsI0FjfmH8QzkVaIjtSG7K4HFwV4Uq1pPLiF1LAcTtaa2pCIkzxuIAhowwb%2FRvgY6pgELOyql4UMf%2FJ3ekxt%2FXFIfxqZ1QNjQqaulZeg%2BzsPTV9uBO00JIuro0Nkk5l1KiYtRlhbcBWSatvyaTeiWzLu5h0QBurA0zKc9J1iyyOIgoNc5gDKz56QV3W9uLyzn%2BeNAORnaUEktPkiBUH1GRMxtyBaI3%2B5wEMg0HosVpjX9U46HDT%2BsZXOeSu5FI8Vr5qApZANGlb0UzU8uYiw66KV%2FfOtQOW4E&X-Amz-Signature=8e3a261084ae0fbfec1222a9b5af34ec0f7cf46d7cdbcfb9cdcef02be91b1be4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQY4S3F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA99niIrM0seKKOsKG7Cq%2B%2BqOQrXydt%2FhgCboyzHf29hAiBrt%2FIBcQRhWGgTDMp6OWzjlxzOIuzPJU4IhlnZthyqCyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXUkfng%2Bszr2VRYVKtwDh%2BdYyr%2BieN4%2F0b5xlI22afQ2BDFwqy0rDYdkM26cXNsz%2FY%2F7drXBbYZNWCG4ODfLodM0AAs0P307SUR21ZgkoCI3h0Gu0DYQWVQQstGi2bR%2F7sW9N4hHES%2BFJVIzxrZGOyZZByfx%2Bkd1rJG1R8rDuw1vHyNECCbk%2FWhNdfCtTgr5KKFfdl%2BVjAKPnKF5GeNP2V5%2FhOMocxW%2BiOXyjkTnKeE7NDrrVGuJQTiYj6oLacpYhzm8tj%2FtqYl1KQ6hgxg9a5G1v%2BGiKKhwVhrPO0sXpfFR294%2FntJmpLOvw%2B5FIjeb5%2FWDHlSM1HgXB9jMvgHcmD8CKVb%2FpXoBW1%2BvHYam2WwdnFRrkKe1jW7B2zwi3BWZzrwaASMKjFMamwqjPJ7ybtNTYqnSH3TGuxhsVsJHSJ80n9E%2BAzkeVAHK8SU%2FaUCclAjpIgtz6czJu0vzFflRGRd7BzHwwjgBbKtSPkCj7g7PGkh4By2N%2F7qTHpwYdZNNIO2MPkTty3pysrHwGctanpK9cpN6e0F5TZNZSJA53LqaX1IMdoukjj%2FN65u3r5R6xGUgbST262vUka2JGxYhU%2BjmsI0FjfmH8QzkVaIjtSG7K4HFwV4Uq1pPLiF1LAcTtaa2pCIkzxuIAhowwb%2FRvgY6pgELOyql4UMf%2FJ3ekxt%2FXFIfxqZ1QNjQqaulZeg%2BzsPTV9uBO00JIuro0Nkk5l1KiYtRlhbcBWSatvyaTeiWzLu5h0QBurA0zKc9J1iyyOIgoNc5gDKz56QV3W9uLyzn%2BeNAORnaUEktPkiBUH1GRMxtyBaI3%2B5wEMg0HosVpjX9U46HDT%2BsZXOeSu5FI8Vr5qApZANGlb0UzU8uYiw66KV%2FfOtQOW4E&X-Amz-Signature=ab63916625b2fadcd5aef14e8b1896508d7a733fd353dac1a75b45535735f549&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQY4S3F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA99niIrM0seKKOsKG7Cq%2B%2BqOQrXydt%2FhgCboyzHf29hAiBrt%2FIBcQRhWGgTDMp6OWzjlxzOIuzPJU4IhlnZthyqCyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXUkfng%2Bszr2VRYVKtwDh%2BdYyr%2BieN4%2F0b5xlI22afQ2BDFwqy0rDYdkM26cXNsz%2FY%2F7drXBbYZNWCG4ODfLodM0AAs0P307SUR21ZgkoCI3h0Gu0DYQWVQQstGi2bR%2F7sW9N4hHES%2BFJVIzxrZGOyZZByfx%2Bkd1rJG1R8rDuw1vHyNECCbk%2FWhNdfCtTgr5KKFfdl%2BVjAKPnKF5GeNP2V5%2FhOMocxW%2BiOXyjkTnKeE7NDrrVGuJQTiYj6oLacpYhzm8tj%2FtqYl1KQ6hgxg9a5G1v%2BGiKKhwVhrPO0sXpfFR294%2FntJmpLOvw%2B5FIjeb5%2FWDHlSM1HgXB9jMvgHcmD8CKVb%2FpXoBW1%2BvHYam2WwdnFRrkKe1jW7B2zwi3BWZzrwaASMKjFMamwqjPJ7ybtNTYqnSH3TGuxhsVsJHSJ80n9E%2BAzkeVAHK8SU%2FaUCclAjpIgtz6czJu0vzFflRGRd7BzHwwjgBbKtSPkCj7g7PGkh4By2N%2F7qTHpwYdZNNIO2MPkTty3pysrHwGctanpK9cpN6e0F5TZNZSJA53LqaX1IMdoukjj%2FN65u3r5R6xGUgbST262vUka2JGxYhU%2BjmsI0FjfmH8QzkVaIjtSG7K4HFwV4Uq1pPLiF1LAcTtaa2pCIkzxuIAhowwb%2FRvgY6pgELOyql4UMf%2FJ3ekxt%2FXFIfxqZ1QNjQqaulZeg%2BzsPTV9uBO00JIuro0Nkk5l1KiYtRlhbcBWSatvyaTeiWzLu5h0QBurA0zKc9J1iyyOIgoNc5gDKz56QV3W9uLyzn%2BeNAORnaUEktPkiBUH1GRMxtyBaI3%2B5wEMg0HosVpjX9U46HDT%2BsZXOeSu5FI8Vr5qApZANGlb0UzU8uYiw66KV%2FfOtQOW4E&X-Amz-Signature=e50773007dc1155be542ebdae8328c7c2c034370bf88101d524b05ea99bb070a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQY4S3F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA99niIrM0seKKOsKG7Cq%2B%2BqOQrXydt%2FhgCboyzHf29hAiBrt%2FIBcQRhWGgTDMp6OWzjlxzOIuzPJU4IhlnZthyqCyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeXUkfng%2Bszr2VRYVKtwDh%2BdYyr%2BieN4%2F0b5xlI22afQ2BDFwqy0rDYdkM26cXNsz%2FY%2F7drXBbYZNWCG4ODfLodM0AAs0P307SUR21ZgkoCI3h0Gu0DYQWVQQstGi2bR%2F7sW9N4hHES%2BFJVIzxrZGOyZZByfx%2Bkd1rJG1R8rDuw1vHyNECCbk%2FWhNdfCtTgr5KKFfdl%2BVjAKPnKF5GeNP2V5%2FhOMocxW%2BiOXyjkTnKeE7NDrrVGuJQTiYj6oLacpYhzm8tj%2FtqYl1KQ6hgxg9a5G1v%2BGiKKhwVhrPO0sXpfFR294%2FntJmpLOvw%2B5FIjeb5%2FWDHlSM1HgXB9jMvgHcmD8CKVb%2FpXoBW1%2BvHYam2WwdnFRrkKe1jW7B2zwi3BWZzrwaASMKjFMamwqjPJ7ybtNTYqnSH3TGuxhsVsJHSJ80n9E%2BAzkeVAHK8SU%2FaUCclAjpIgtz6czJu0vzFflRGRd7BzHwwjgBbKtSPkCj7g7PGkh4By2N%2F7qTHpwYdZNNIO2MPkTty3pysrHwGctanpK9cpN6e0F5TZNZSJA53LqaX1IMdoukjj%2FN65u3r5R6xGUgbST262vUka2JGxYhU%2BjmsI0FjfmH8QzkVaIjtSG7K4HFwV4Uq1pPLiF1LAcTtaa2pCIkzxuIAhowwb%2FRvgY6pgELOyql4UMf%2FJ3ekxt%2FXFIfxqZ1QNjQqaulZeg%2BzsPTV9uBO00JIuro0Nkk5l1KiYtRlhbcBWSatvyaTeiWzLu5h0QBurA0zKc9J1iyyOIgoNc5gDKz56QV3W9uLyzn%2BeNAORnaUEktPkiBUH1GRMxtyBaI3%2B5wEMg0HosVpjX9U46HDT%2BsZXOeSu5FI8Vr5qApZANGlb0UzU8uYiw66KV%2FfOtQOW4E&X-Amz-Signature=9a5cad5e86b80a82743de96e0b830fc6f5a1ce92c9ec6f1ffdbaf2af95e8614c&X-Amz-SignedHeaders=host&x-id=GetObject)
