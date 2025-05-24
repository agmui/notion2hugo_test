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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655MLGXRJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCDotK8hBjAxKdLpfnYoiqRXgjMT06Y%2BoTz7req8S3CuQIgHNXunxZFwo5Zmc6iTgMaEBurEymDLWq6SVoMtVXG7eYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB1L7TPeB3rFrum5HCrcA1IxOuLMZNUKml67Q48H0gYd%2BgP241zODEJxh%2FoGo9rjlx%2Fp8sGBWe06a%2BTKV4ytftkyImdrZGege2nbKHO9Z4MQgc1pzo%2FHGXsXNCs8kIG79zGBvcDsOTXVE1XeZx8s5u3DJESYaC1bpzU8YNappiIhO96v%2BLF6GtFFpoRSi9e9PqTTrn5r79Z9qC%2F7Vf5vV588NS2dyET%2F1NkwGbkAxOV2nY01CBZVDbaJ%2BhfLG6nr08238jhstZ7PGhY8Oj0PzhciZqPw07tS04uy2Fmv%2FtwDrf0aHYAjGHhkwHMaYf24Uye87H7WzS9Kc8hVXN8hg3Ry7zGCktwgBlWnCde2okRvVF%2BkCk9IfCjtA6CohUHn%2BtfJM%2FrcEZUI31olvY5QqP8AVTBkvzNz%2BV2a8TFT4abzNYckSgyLoSav36w%2Fc9FUNdyMQoN5%2FxgVTjjGHkEBF%2BYsEdMhUHxlMBq2mFAMNSbGkNMh9DAQYJW3LE0edV1qPyMDlSO%2FoAf7sjC0aJYFUN6Iyzzw4cpl%2Ftn5IPg9oe%2BWFplaSHuMMjLoJX6VGEs9SbzAF9pNP9%2Fw26zosoysNXsO5iTp0%2BrC8%2F9eSzMSJ28b4rmfgNwaOu8ypvKdnFmErxOnGO0TzQAtYdB6MMndyMEGOqUBwC%2Bhq7WXYDlvCB45wO81hOziwx7FwYpNl2B3gIP3NSrgb4pndkCcqIDZ609SEwO88iyA%2BedUKXmE51po5dTSpeEbttDyBu8SJMDwfn6qvtO%2FWylTpxfK5eWt2Aeh1lV0W%2Fp4lQh5QSImTfRNh8Y%2F9jV5sySMuIvGET9lewc9dU1HP2vKyB0BzFjbNH6n989q%2FpcpFgdwv8ejnPA14i3ybfcrjwA0&X-Amz-Signature=19d4a416cecae7e40e61077d9fcd6b3e4bc4922ac1a4e163a05940cb1c204ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655MLGXRJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCDotK8hBjAxKdLpfnYoiqRXgjMT06Y%2BoTz7req8S3CuQIgHNXunxZFwo5Zmc6iTgMaEBurEymDLWq6SVoMtVXG7eYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB1L7TPeB3rFrum5HCrcA1IxOuLMZNUKml67Q48H0gYd%2BgP241zODEJxh%2FoGo9rjlx%2Fp8sGBWe06a%2BTKV4ytftkyImdrZGege2nbKHO9Z4MQgc1pzo%2FHGXsXNCs8kIG79zGBvcDsOTXVE1XeZx8s5u3DJESYaC1bpzU8YNappiIhO96v%2BLF6GtFFpoRSi9e9PqTTrn5r79Z9qC%2F7Vf5vV588NS2dyET%2F1NkwGbkAxOV2nY01CBZVDbaJ%2BhfLG6nr08238jhstZ7PGhY8Oj0PzhciZqPw07tS04uy2Fmv%2FtwDrf0aHYAjGHhkwHMaYf24Uye87H7WzS9Kc8hVXN8hg3Ry7zGCktwgBlWnCde2okRvVF%2BkCk9IfCjtA6CohUHn%2BtfJM%2FrcEZUI31olvY5QqP8AVTBkvzNz%2BV2a8TFT4abzNYckSgyLoSav36w%2Fc9FUNdyMQoN5%2FxgVTjjGHkEBF%2BYsEdMhUHxlMBq2mFAMNSbGkNMh9DAQYJW3LE0edV1qPyMDlSO%2FoAf7sjC0aJYFUN6Iyzzw4cpl%2Ftn5IPg9oe%2BWFplaSHuMMjLoJX6VGEs9SbzAF9pNP9%2Fw26zosoysNXsO5iTp0%2BrC8%2F9eSzMSJ28b4rmfgNwaOu8ypvKdnFmErxOnGO0TzQAtYdB6MMndyMEGOqUBwC%2Bhq7WXYDlvCB45wO81hOziwx7FwYpNl2B3gIP3NSrgb4pndkCcqIDZ609SEwO88iyA%2BedUKXmE51po5dTSpeEbttDyBu8SJMDwfn6qvtO%2FWylTpxfK5eWt2Aeh1lV0W%2Fp4lQh5QSImTfRNh8Y%2F9jV5sySMuIvGET9lewc9dU1HP2vKyB0BzFjbNH6n989q%2FpcpFgdwv8ejnPA14i3ybfcrjwA0&X-Amz-Signature=a1ac38a64b70ba2c9e65c93e32edbcffa104019aa23b66a6f161b84dbc031a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655MLGXRJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCDotK8hBjAxKdLpfnYoiqRXgjMT06Y%2BoTz7req8S3CuQIgHNXunxZFwo5Zmc6iTgMaEBurEymDLWq6SVoMtVXG7eYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB1L7TPeB3rFrum5HCrcA1IxOuLMZNUKml67Q48H0gYd%2BgP241zODEJxh%2FoGo9rjlx%2Fp8sGBWe06a%2BTKV4ytftkyImdrZGege2nbKHO9Z4MQgc1pzo%2FHGXsXNCs8kIG79zGBvcDsOTXVE1XeZx8s5u3DJESYaC1bpzU8YNappiIhO96v%2BLF6GtFFpoRSi9e9PqTTrn5r79Z9qC%2F7Vf5vV588NS2dyET%2F1NkwGbkAxOV2nY01CBZVDbaJ%2BhfLG6nr08238jhstZ7PGhY8Oj0PzhciZqPw07tS04uy2Fmv%2FtwDrf0aHYAjGHhkwHMaYf24Uye87H7WzS9Kc8hVXN8hg3Ry7zGCktwgBlWnCde2okRvVF%2BkCk9IfCjtA6CohUHn%2BtfJM%2FrcEZUI31olvY5QqP8AVTBkvzNz%2BV2a8TFT4abzNYckSgyLoSav36w%2Fc9FUNdyMQoN5%2FxgVTjjGHkEBF%2BYsEdMhUHxlMBq2mFAMNSbGkNMh9DAQYJW3LE0edV1qPyMDlSO%2FoAf7sjC0aJYFUN6Iyzzw4cpl%2Ftn5IPg9oe%2BWFplaSHuMMjLoJX6VGEs9SbzAF9pNP9%2Fw26zosoysNXsO5iTp0%2BrC8%2F9eSzMSJ28b4rmfgNwaOu8ypvKdnFmErxOnGO0TzQAtYdB6MMndyMEGOqUBwC%2Bhq7WXYDlvCB45wO81hOziwx7FwYpNl2B3gIP3NSrgb4pndkCcqIDZ609SEwO88iyA%2BedUKXmE51po5dTSpeEbttDyBu8SJMDwfn6qvtO%2FWylTpxfK5eWt2Aeh1lV0W%2Fp4lQh5QSImTfRNh8Y%2F9jV5sySMuIvGET9lewc9dU1HP2vKyB0BzFjbNH6n989q%2FpcpFgdwv8ejnPA14i3ybfcrjwA0&X-Amz-Signature=2050654a76af9b7bee91e29fc52a3c27d037734793b499f222929b4176dd95cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655MLGXRJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCDotK8hBjAxKdLpfnYoiqRXgjMT06Y%2BoTz7req8S3CuQIgHNXunxZFwo5Zmc6iTgMaEBurEymDLWq6SVoMtVXG7eYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB1L7TPeB3rFrum5HCrcA1IxOuLMZNUKml67Q48H0gYd%2BgP241zODEJxh%2FoGo9rjlx%2Fp8sGBWe06a%2BTKV4ytftkyImdrZGege2nbKHO9Z4MQgc1pzo%2FHGXsXNCs8kIG79zGBvcDsOTXVE1XeZx8s5u3DJESYaC1bpzU8YNappiIhO96v%2BLF6GtFFpoRSi9e9PqTTrn5r79Z9qC%2F7Vf5vV588NS2dyET%2F1NkwGbkAxOV2nY01CBZVDbaJ%2BhfLG6nr08238jhstZ7PGhY8Oj0PzhciZqPw07tS04uy2Fmv%2FtwDrf0aHYAjGHhkwHMaYf24Uye87H7WzS9Kc8hVXN8hg3Ry7zGCktwgBlWnCde2okRvVF%2BkCk9IfCjtA6CohUHn%2BtfJM%2FrcEZUI31olvY5QqP8AVTBkvzNz%2BV2a8TFT4abzNYckSgyLoSav36w%2Fc9FUNdyMQoN5%2FxgVTjjGHkEBF%2BYsEdMhUHxlMBq2mFAMNSbGkNMh9DAQYJW3LE0edV1qPyMDlSO%2FoAf7sjC0aJYFUN6Iyzzw4cpl%2Ftn5IPg9oe%2BWFplaSHuMMjLoJX6VGEs9SbzAF9pNP9%2Fw26zosoysNXsO5iTp0%2BrC8%2F9eSzMSJ28b4rmfgNwaOu8ypvKdnFmErxOnGO0TzQAtYdB6MMndyMEGOqUBwC%2Bhq7WXYDlvCB45wO81hOziwx7FwYpNl2B3gIP3NSrgb4pndkCcqIDZ609SEwO88iyA%2BedUKXmE51po5dTSpeEbttDyBu8SJMDwfn6qvtO%2FWylTpxfK5eWt2Aeh1lV0W%2Fp4lQh5QSImTfRNh8Y%2F9jV5sySMuIvGET9lewc9dU1HP2vKyB0BzFjbNH6n989q%2FpcpFgdwv8ejnPA14i3ybfcrjwA0&X-Amz-Signature=077f38d935ea43a1b64ccd417fa5e3be6b3cc5d4f6988020ba0eefdde76d6c70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655MLGXRJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCDotK8hBjAxKdLpfnYoiqRXgjMT06Y%2BoTz7req8S3CuQIgHNXunxZFwo5Zmc6iTgMaEBurEymDLWq6SVoMtVXG7eYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB1L7TPeB3rFrum5HCrcA1IxOuLMZNUKml67Q48H0gYd%2BgP241zODEJxh%2FoGo9rjlx%2Fp8sGBWe06a%2BTKV4ytftkyImdrZGege2nbKHO9Z4MQgc1pzo%2FHGXsXNCs8kIG79zGBvcDsOTXVE1XeZx8s5u3DJESYaC1bpzU8YNappiIhO96v%2BLF6GtFFpoRSi9e9PqTTrn5r79Z9qC%2F7Vf5vV588NS2dyET%2F1NkwGbkAxOV2nY01CBZVDbaJ%2BhfLG6nr08238jhstZ7PGhY8Oj0PzhciZqPw07tS04uy2Fmv%2FtwDrf0aHYAjGHhkwHMaYf24Uye87H7WzS9Kc8hVXN8hg3Ry7zGCktwgBlWnCde2okRvVF%2BkCk9IfCjtA6CohUHn%2BtfJM%2FrcEZUI31olvY5QqP8AVTBkvzNz%2BV2a8TFT4abzNYckSgyLoSav36w%2Fc9FUNdyMQoN5%2FxgVTjjGHkEBF%2BYsEdMhUHxlMBq2mFAMNSbGkNMh9DAQYJW3LE0edV1qPyMDlSO%2FoAf7sjC0aJYFUN6Iyzzw4cpl%2Ftn5IPg9oe%2BWFplaSHuMMjLoJX6VGEs9SbzAF9pNP9%2Fw26zosoysNXsO5iTp0%2BrC8%2F9eSzMSJ28b4rmfgNwaOu8ypvKdnFmErxOnGO0TzQAtYdB6MMndyMEGOqUBwC%2Bhq7WXYDlvCB45wO81hOziwx7FwYpNl2B3gIP3NSrgb4pndkCcqIDZ609SEwO88iyA%2BedUKXmE51po5dTSpeEbttDyBu8SJMDwfn6qvtO%2FWylTpxfK5eWt2Aeh1lV0W%2Fp4lQh5QSImTfRNh8Y%2F9jV5sySMuIvGET9lewc9dU1HP2vKyB0BzFjbNH6n989q%2FpcpFgdwv8ejnPA14i3ybfcrjwA0&X-Amz-Signature=8d6f63b77b74ee16271604737f8cb2e3d36ff70af2dcf9cdf2e102443b3c903f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655MLGXRJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCDotK8hBjAxKdLpfnYoiqRXgjMT06Y%2BoTz7req8S3CuQIgHNXunxZFwo5Zmc6iTgMaEBurEymDLWq6SVoMtVXG7eYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB1L7TPeB3rFrum5HCrcA1IxOuLMZNUKml67Q48H0gYd%2BgP241zODEJxh%2FoGo9rjlx%2Fp8sGBWe06a%2BTKV4ytftkyImdrZGege2nbKHO9Z4MQgc1pzo%2FHGXsXNCs8kIG79zGBvcDsOTXVE1XeZx8s5u3DJESYaC1bpzU8YNappiIhO96v%2BLF6GtFFpoRSi9e9PqTTrn5r79Z9qC%2F7Vf5vV588NS2dyET%2F1NkwGbkAxOV2nY01CBZVDbaJ%2BhfLG6nr08238jhstZ7PGhY8Oj0PzhciZqPw07tS04uy2Fmv%2FtwDrf0aHYAjGHhkwHMaYf24Uye87H7WzS9Kc8hVXN8hg3Ry7zGCktwgBlWnCde2okRvVF%2BkCk9IfCjtA6CohUHn%2BtfJM%2FrcEZUI31olvY5QqP8AVTBkvzNz%2BV2a8TFT4abzNYckSgyLoSav36w%2Fc9FUNdyMQoN5%2FxgVTjjGHkEBF%2BYsEdMhUHxlMBq2mFAMNSbGkNMh9DAQYJW3LE0edV1qPyMDlSO%2FoAf7sjC0aJYFUN6Iyzzw4cpl%2Ftn5IPg9oe%2BWFplaSHuMMjLoJX6VGEs9SbzAF9pNP9%2Fw26zosoysNXsO5iTp0%2BrC8%2F9eSzMSJ28b4rmfgNwaOu8ypvKdnFmErxOnGO0TzQAtYdB6MMndyMEGOqUBwC%2Bhq7WXYDlvCB45wO81hOziwx7FwYpNl2B3gIP3NSrgb4pndkCcqIDZ609SEwO88iyA%2BedUKXmE51po5dTSpeEbttDyBu8SJMDwfn6qvtO%2FWylTpxfK5eWt2Aeh1lV0W%2Fp4lQh5QSImTfRNh8Y%2F9jV5sySMuIvGET9lewc9dU1HP2vKyB0BzFjbNH6n989q%2FpcpFgdwv8ejnPA14i3ybfcrjwA0&X-Amz-Signature=3fd9e41aa233b9658717d592d7e4f17e497cef5945db3bc472b7d991f6e2a9b6&X-Amz-SignedHeaders=host&x-id=GetObject)
