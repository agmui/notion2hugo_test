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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOB23YSU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIG8%2BjxZYD24oSTrar7%2BPmQ%2Fnz1ViRkoVKFcviI9UYfR4AiEA2Lb2JMnVMQAN1nzW3XgpfcMQpDRNoopCftlPF8B7tHwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMdzcK2EgM8xKiXINircA0vQJM5hdtj7IaSbbjNAfmtXXb1BphinRH%2FMs1%2BO9qKE1Ic3mYFP3ydjtqOsTq9kexKQ9faeIqaKoHsL93dIq2XW60Mk6u4UDU1rW8mx6kGL4nn3v2ngBo2tASHUc61fqfoHsxGVsv8dO0KQov8pLlp8%2B9BOEFWA2ipw08krX7b49v0uf5YwkZYMfMrfttXPI2OFlehViMH8QUmq%2Fz3dlXEt1eb2UOVBU1QrxTMXofKyrDNj9SwgrkIIpZTsbtpV7i03VfHneWKCfn5mnP03sdjWYUTL4tkkczKYYw7LsEWpgJulQ%2FH7iMvh2y9bnGeskGPyhRfDTJ2WKWQdh8gAOM07Ig3KIVr1EFEOAsot5MeMu8XKv6wEmn3ji%2BnKfGKisTYT68HlUYqog7fJuAjmRajNDraQ%2FYFtVAp2m5r4JUaO%2FlD4a3vjlxSpWhGrn7MLP9kEO7Fxa3okfrAbggIcyM6pUPFn%2F%2FyYzNT7AH%2FX9%2BxI4t3Ue3rZGcW%2BoAm%2Bs29HhOezvOwe9zCIEMC4EVDq2C9CJZH%2BnZUoqtGkbmqz1%2FDuo5qjos5rf%2By6zNsPnzutZLhoS31ZRksZrSi2TCKteCPu71TAHQm1cnVXbH3t6hcxnLc1rcazR%2BH%2FUskWMKik28MGOqUBdMZ7B2AEaCmCGhZDh%2BhDOgAAlTbOgXZ8J2oL%2BlD4yJX2bKr245s5Xa%2FK4WR6ismQM9CArmlB9k%2FgFqqiGvur160JdPWCLQzcEwFvb6rkFBJZ5tp1HkfwZSA%2FGTWaMs2Vl%2BLU9eZ9ShAmkVRTmFdzsPtRfr%2FGLPp0LEnpSGJQkVXQjgYtZYk7g%2FhohvlRfgZkPkq5a0eoJBYKvCh3iVZ9JsW1pRBp&X-Amz-Signature=8f70144e829e7c1268d441cd2b8239f8498054a40c39171db505ac44dfc3cdf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOB23YSU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIG8%2BjxZYD24oSTrar7%2BPmQ%2Fnz1ViRkoVKFcviI9UYfR4AiEA2Lb2JMnVMQAN1nzW3XgpfcMQpDRNoopCftlPF8B7tHwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMdzcK2EgM8xKiXINircA0vQJM5hdtj7IaSbbjNAfmtXXb1BphinRH%2FMs1%2BO9qKE1Ic3mYFP3ydjtqOsTq9kexKQ9faeIqaKoHsL93dIq2XW60Mk6u4UDU1rW8mx6kGL4nn3v2ngBo2tASHUc61fqfoHsxGVsv8dO0KQov8pLlp8%2B9BOEFWA2ipw08krX7b49v0uf5YwkZYMfMrfttXPI2OFlehViMH8QUmq%2Fz3dlXEt1eb2UOVBU1QrxTMXofKyrDNj9SwgrkIIpZTsbtpV7i03VfHneWKCfn5mnP03sdjWYUTL4tkkczKYYw7LsEWpgJulQ%2FH7iMvh2y9bnGeskGPyhRfDTJ2WKWQdh8gAOM07Ig3KIVr1EFEOAsot5MeMu8XKv6wEmn3ji%2BnKfGKisTYT68HlUYqog7fJuAjmRajNDraQ%2FYFtVAp2m5r4JUaO%2FlD4a3vjlxSpWhGrn7MLP9kEO7Fxa3okfrAbggIcyM6pUPFn%2F%2FyYzNT7AH%2FX9%2BxI4t3Ue3rZGcW%2BoAm%2Bs29HhOezvOwe9zCIEMC4EVDq2C9CJZH%2BnZUoqtGkbmqz1%2FDuo5qjos5rf%2By6zNsPnzutZLhoS31ZRksZrSi2TCKteCPu71TAHQm1cnVXbH3t6hcxnLc1rcazR%2BH%2FUskWMKik28MGOqUBdMZ7B2AEaCmCGhZDh%2BhDOgAAlTbOgXZ8J2oL%2BlD4yJX2bKr245s5Xa%2FK4WR6ismQM9CArmlB9k%2FgFqqiGvur160JdPWCLQzcEwFvb6rkFBJZ5tp1HkfwZSA%2FGTWaMs2Vl%2BLU9eZ9ShAmkVRTmFdzsPtRfr%2FGLPp0LEnpSGJQkVXQjgYtZYk7g%2FhohvlRfgZkPkq5a0eoJBYKvCh3iVZ9JsW1pRBp&X-Amz-Signature=f96922d5297931bfb465c2d414b237d9122bd4400a3f7d77b4b64eb1011efcc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOB23YSU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIG8%2BjxZYD24oSTrar7%2BPmQ%2Fnz1ViRkoVKFcviI9UYfR4AiEA2Lb2JMnVMQAN1nzW3XgpfcMQpDRNoopCftlPF8B7tHwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMdzcK2EgM8xKiXINircA0vQJM5hdtj7IaSbbjNAfmtXXb1BphinRH%2FMs1%2BO9qKE1Ic3mYFP3ydjtqOsTq9kexKQ9faeIqaKoHsL93dIq2XW60Mk6u4UDU1rW8mx6kGL4nn3v2ngBo2tASHUc61fqfoHsxGVsv8dO0KQov8pLlp8%2B9BOEFWA2ipw08krX7b49v0uf5YwkZYMfMrfttXPI2OFlehViMH8QUmq%2Fz3dlXEt1eb2UOVBU1QrxTMXofKyrDNj9SwgrkIIpZTsbtpV7i03VfHneWKCfn5mnP03sdjWYUTL4tkkczKYYw7LsEWpgJulQ%2FH7iMvh2y9bnGeskGPyhRfDTJ2WKWQdh8gAOM07Ig3KIVr1EFEOAsot5MeMu8XKv6wEmn3ji%2BnKfGKisTYT68HlUYqog7fJuAjmRajNDraQ%2FYFtVAp2m5r4JUaO%2FlD4a3vjlxSpWhGrn7MLP9kEO7Fxa3okfrAbggIcyM6pUPFn%2F%2FyYzNT7AH%2FX9%2BxI4t3Ue3rZGcW%2BoAm%2Bs29HhOezvOwe9zCIEMC4EVDq2C9CJZH%2BnZUoqtGkbmqz1%2FDuo5qjos5rf%2By6zNsPnzutZLhoS31ZRksZrSi2TCKteCPu71TAHQm1cnVXbH3t6hcxnLc1rcazR%2BH%2FUskWMKik28MGOqUBdMZ7B2AEaCmCGhZDh%2BhDOgAAlTbOgXZ8J2oL%2BlD4yJX2bKr245s5Xa%2FK4WR6ismQM9CArmlB9k%2FgFqqiGvur160JdPWCLQzcEwFvb6rkFBJZ5tp1HkfwZSA%2FGTWaMs2Vl%2BLU9eZ9ShAmkVRTmFdzsPtRfr%2FGLPp0LEnpSGJQkVXQjgYtZYk7g%2FhohvlRfgZkPkq5a0eoJBYKvCh3iVZ9JsW1pRBp&X-Amz-Signature=043949e059c272a7229b8fff2d80a74422652aa56371d5afdfd2633426a32864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOB23YSU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIG8%2BjxZYD24oSTrar7%2BPmQ%2Fnz1ViRkoVKFcviI9UYfR4AiEA2Lb2JMnVMQAN1nzW3XgpfcMQpDRNoopCftlPF8B7tHwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMdzcK2EgM8xKiXINircA0vQJM5hdtj7IaSbbjNAfmtXXb1BphinRH%2FMs1%2BO9qKE1Ic3mYFP3ydjtqOsTq9kexKQ9faeIqaKoHsL93dIq2XW60Mk6u4UDU1rW8mx6kGL4nn3v2ngBo2tASHUc61fqfoHsxGVsv8dO0KQov8pLlp8%2B9BOEFWA2ipw08krX7b49v0uf5YwkZYMfMrfttXPI2OFlehViMH8QUmq%2Fz3dlXEt1eb2UOVBU1QrxTMXofKyrDNj9SwgrkIIpZTsbtpV7i03VfHneWKCfn5mnP03sdjWYUTL4tkkczKYYw7LsEWpgJulQ%2FH7iMvh2y9bnGeskGPyhRfDTJ2WKWQdh8gAOM07Ig3KIVr1EFEOAsot5MeMu8XKv6wEmn3ji%2BnKfGKisTYT68HlUYqog7fJuAjmRajNDraQ%2FYFtVAp2m5r4JUaO%2FlD4a3vjlxSpWhGrn7MLP9kEO7Fxa3okfrAbggIcyM6pUPFn%2F%2FyYzNT7AH%2FX9%2BxI4t3Ue3rZGcW%2BoAm%2Bs29HhOezvOwe9zCIEMC4EVDq2C9CJZH%2BnZUoqtGkbmqz1%2FDuo5qjos5rf%2By6zNsPnzutZLhoS31ZRksZrSi2TCKteCPu71TAHQm1cnVXbH3t6hcxnLc1rcazR%2BH%2FUskWMKik28MGOqUBdMZ7B2AEaCmCGhZDh%2BhDOgAAlTbOgXZ8J2oL%2BlD4yJX2bKr245s5Xa%2FK4WR6ismQM9CArmlB9k%2FgFqqiGvur160JdPWCLQzcEwFvb6rkFBJZ5tp1HkfwZSA%2FGTWaMs2Vl%2BLU9eZ9ShAmkVRTmFdzsPtRfr%2FGLPp0LEnpSGJQkVXQjgYtZYk7g%2FhohvlRfgZkPkq5a0eoJBYKvCh3iVZ9JsW1pRBp&X-Amz-Signature=e58b4306466e09ab21ceb931a44a52a9575339b87bb63ad34a4e4574364c6bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOB23YSU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIG8%2BjxZYD24oSTrar7%2BPmQ%2Fnz1ViRkoVKFcviI9UYfR4AiEA2Lb2JMnVMQAN1nzW3XgpfcMQpDRNoopCftlPF8B7tHwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMdzcK2EgM8xKiXINircA0vQJM5hdtj7IaSbbjNAfmtXXb1BphinRH%2FMs1%2BO9qKE1Ic3mYFP3ydjtqOsTq9kexKQ9faeIqaKoHsL93dIq2XW60Mk6u4UDU1rW8mx6kGL4nn3v2ngBo2tASHUc61fqfoHsxGVsv8dO0KQov8pLlp8%2B9BOEFWA2ipw08krX7b49v0uf5YwkZYMfMrfttXPI2OFlehViMH8QUmq%2Fz3dlXEt1eb2UOVBU1QrxTMXofKyrDNj9SwgrkIIpZTsbtpV7i03VfHneWKCfn5mnP03sdjWYUTL4tkkczKYYw7LsEWpgJulQ%2FH7iMvh2y9bnGeskGPyhRfDTJ2WKWQdh8gAOM07Ig3KIVr1EFEOAsot5MeMu8XKv6wEmn3ji%2BnKfGKisTYT68HlUYqog7fJuAjmRajNDraQ%2FYFtVAp2m5r4JUaO%2FlD4a3vjlxSpWhGrn7MLP9kEO7Fxa3okfrAbggIcyM6pUPFn%2F%2FyYzNT7AH%2FX9%2BxI4t3Ue3rZGcW%2BoAm%2Bs29HhOezvOwe9zCIEMC4EVDq2C9CJZH%2BnZUoqtGkbmqz1%2FDuo5qjos5rf%2By6zNsPnzutZLhoS31ZRksZrSi2TCKteCPu71TAHQm1cnVXbH3t6hcxnLc1rcazR%2BH%2FUskWMKik28MGOqUBdMZ7B2AEaCmCGhZDh%2BhDOgAAlTbOgXZ8J2oL%2BlD4yJX2bKr245s5Xa%2FK4WR6ismQM9CArmlB9k%2FgFqqiGvur160JdPWCLQzcEwFvb6rkFBJZ5tp1HkfwZSA%2FGTWaMs2Vl%2BLU9eZ9ShAmkVRTmFdzsPtRfr%2FGLPp0LEnpSGJQkVXQjgYtZYk7g%2FhohvlRfgZkPkq5a0eoJBYKvCh3iVZ9JsW1pRBp&X-Amz-Signature=02d33c08d5c51dffba6ca257a2d817755c0527c314b88f301dcbab76b4a4fa23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOB23YSU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIG8%2BjxZYD24oSTrar7%2BPmQ%2Fnz1ViRkoVKFcviI9UYfR4AiEA2Lb2JMnVMQAN1nzW3XgpfcMQpDRNoopCftlPF8B7tHwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMdzcK2EgM8xKiXINircA0vQJM5hdtj7IaSbbjNAfmtXXb1BphinRH%2FMs1%2BO9qKE1Ic3mYFP3ydjtqOsTq9kexKQ9faeIqaKoHsL93dIq2XW60Mk6u4UDU1rW8mx6kGL4nn3v2ngBo2tASHUc61fqfoHsxGVsv8dO0KQov8pLlp8%2B9BOEFWA2ipw08krX7b49v0uf5YwkZYMfMrfttXPI2OFlehViMH8QUmq%2Fz3dlXEt1eb2UOVBU1QrxTMXofKyrDNj9SwgrkIIpZTsbtpV7i03VfHneWKCfn5mnP03sdjWYUTL4tkkczKYYw7LsEWpgJulQ%2FH7iMvh2y9bnGeskGPyhRfDTJ2WKWQdh8gAOM07Ig3KIVr1EFEOAsot5MeMu8XKv6wEmn3ji%2BnKfGKisTYT68HlUYqog7fJuAjmRajNDraQ%2FYFtVAp2m5r4JUaO%2FlD4a3vjlxSpWhGrn7MLP9kEO7Fxa3okfrAbggIcyM6pUPFn%2F%2FyYzNT7AH%2FX9%2BxI4t3Ue3rZGcW%2BoAm%2Bs29HhOezvOwe9zCIEMC4EVDq2C9CJZH%2BnZUoqtGkbmqz1%2FDuo5qjos5rf%2By6zNsPnzutZLhoS31ZRksZrSi2TCKteCPu71TAHQm1cnVXbH3t6hcxnLc1rcazR%2BH%2FUskWMKik28MGOqUBdMZ7B2AEaCmCGhZDh%2BhDOgAAlTbOgXZ8J2oL%2BlD4yJX2bKr245s5Xa%2FK4WR6ismQM9CArmlB9k%2FgFqqiGvur160JdPWCLQzcEwFvb6rkFBJZ5tp1HkfwZSA%2FGTWaMs2Vl%2BLU9eZ9ShAmkVRTmFdzsPtRfr%2FGLPp0LEnpSGJQkVXQjgYtZYk7g%2FhohvlRfgZkPkq5a0eoJBYKvCh3iVZ9JsW1pRBp&X-Amz-Signature=429d6263e2603b0f2cd358c715ae28371e411bf48341ab2cdfd3aba4b33acf0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
