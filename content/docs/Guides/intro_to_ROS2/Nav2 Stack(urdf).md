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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2S5PRM5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDsiHgR7RN15RIZOsE%2FFVeUi5TRH3VJN2eJ9vBJVUBy4AiEA3VGHt6oVaqxlMRq7BIQgCIkGZhAYoq0Zx8gS32Ybb98q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA1r2qLimLVSOoEPDircA7MVCudSc4a1c9QROtmK8c6rlqYo2N9kUNTGhIDXbkNZaFPoeJpHVOuD5YX5UJoeb4T%2BTccR0mIgOAzb5TFcSKp0bhLhNAn9CYNe6WI%2Fo9Jp5kxd7cFaAdPVjJIP%2FGkv57stme3LQcypJXhiZCbNmAAvi6cIw1mlBFBp%2BBQgZVa0n2sfv4md3HGgPhlH6byJpQ2vKBcn5LdIL87X84uB6kFFajq1KmFiJfoZZzX5dN43uc3kNj3jwW0wTRibOv2J53Zff95zIpH7klSuP9MckdOA7k8rUc56vP7P2N%2BGrNjJMgpqjpNEnB7e3QXmMVQ4mQOOOPWZuEUCsj8rdgk9Um79KU3peHbT5aBYmptco1gva3WmCGf3XsHYg9BKem2IeFrItIANfLdIU3UZWarkoP%2FU6wghLwwGApLFlms7Cvs%2FEnq9A%2Fs4aql9dhhl%2FMK4qAUcoryt8Kvel5Y4RjDMtHrvk0JCJRiVpB9nFwappAwsxgSF8o5%2BSlqZ1zuJuVk2bGVu%2BLZinf0Cxt4ZXVgB1%2Fk6Zpw3WyadXYi0Wnt%2BmLukGR0U83x7%2FOC8m4ianqCs8U7EV9WPaw2k%2FyeoJljPlyQjJe4kSaG2JGr4wlb2ybiKdzi2cLt7OoxmQIzyMOv568IGOqUBGZetxeRXuzsBkWUDbuRBt8ENeyw5bCQoorfTZsbU74d7GkG%2FD1sSxu8xyvyb64x0bALrVu%2Bw4OkQ1M7j%2BmdHdbNTUG%2BHd5X2w4j0F%2BgAnVPuM8NY%2BhmfhX0urqBjL0PiOMmREGMkcsmkSw9kOpsDVqxXGaIb2wskIZ7uzZ7JIp5b0BipCjrODURFZk4LboL%2F2%2BwlJTNaXHWUIb5HW72%2F%2FNWiFA3H&X-Amz-Signature=cb6f68edc97598a66c2b8cb6cff9ba21d38a845865eb6d51fe4570ab44865d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2S5PRM5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDsiHgR7RN15RIZOsE%2FFVeUi5TRH3VJN2eJ9vBJVUBy4AiEA3VGHt6oVaqxlMRq7BIQgCIkGZhAYoq0Zx8gS32Ybb98q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA1r2qLimLVSOoEPDircA7MVCudSc4a1c9QROtmK8c6rlqYo2N9kUNTGhIDXbkNZaFPoeJpHVOuD5YX5UJoeb4T%2BTccR0mIgOAzb5TFcSKp0bhLhNAn9CYNe6WI%2Fo9Jp5kxd7cFaAdPVjJIP%2FGkv57stme3LQcypJXhiZCbNmAAvi6cIw1mlBFBp%2BBQgZVa0n2sfv4md3HGgPhlH6byJpQ2vKBcn5LdIL87X84uB6kFFajq1KmFiJfoZZzX5dN43uc3kNj3jwW0wTRibOv2J53Zff95zIpH7klSuP9MckdOA7k8rUc56vP7P2N%2BGrNjJMgpqjpNEnB7e3QXmMVQ4mQOOOPWZuEUCsj8rdgk9Um79KU3peHbT5aBYmptco1gva3WmCGf3XsHYg9BKem2IeFrItIANfLdIU3UZWarkoP%2FU6wghLwwGApLFlms7Cvs%2FEnq9A%2Fs4aql9dhhl%2FMK4qAUcoryt8Kvel5Y4RjDMtHrvk0JCJRiVpB9nFwappAwsxgSF8o5%2BSlqZ1zuJuVk2bGVu%2BLZinf0Cxt4ZXVgB1%2Fk6Zpw3WyadXYi0Wnt%2BmLukGR0U83x7%2FOC8m4ianqCs8U7EV9WPaw2k%2FyeoJljPlyQjJe4kSaG2JGr4wlb2ybiKdzi2cLt7OoxmQIzyMOv568IGOqUBGZetxeRXuzsBkWUDbuRBt8ENeyw5bCQoorfTZsbU74d7GkG%2FD1sSxu8xyvyb64x0bALrVu%2Bw4OkQ1M7j%2BmdHdbNTUG%2BHd5X2w4j0F%2BgAnVPuM8NY%2BhmfhX0urqBjL0PiOMmREGMkcsmkSw9kOpsDVqxXGaIb2wskIZ7uzZ7JIp5b0BipCjrODURFZk4LboL%2F2%2BwlJTNaXHWUIb5HW72%2F%2FNWiFA3H&X-Amz-Signature=2a62928a40070800c9b4275ffb9d786f9fcd6a073d72168bb25c6cd69483c983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2S5PRM5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDsiHgR7RN15RIZOsE%2FFVeUi5TRH3VJN2eJ9vBJVUBy4AiEA3VGHt6oVaqxlMRq7BIQgCIkGZhAYoq0Zx8gS32Ybb98q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA1r2qLimLVSOoEPDircA7MVCudSc4a1c9QROtmK8c6rlqYo2N9kUNTGhIDXbkNZaFPoeJpHVOuD5YX5UJoeb4T%2BTccR0mIgOAzb5TFcSKp0bhLhNAn9CYNe6WI%2Fo9Jp5kxd7cFaAdPVjJIP%2FGkv57stme3LQcypJXhiZCbNmAAvi6cIw1mlBFBp%2BBQgZVa0n2sfv4md3HGgPhlH6byJpQ2vKBcn5LdIL87X84uB6kFFajq1KmFiJfoZZzX5dN43uc3kNj3jwW0wTRibOv2J53Zff95zIpH7klSuP9MckdOA7k8rUc56vP7P2N%2BGrNjJMgpqjpNEnB7e3QXmMVQ4mQOOOPWZuEUCsj8rdgk9Um79KU3peHbT5aBYmptco1gva3WmCGf3XsHYg9BKem2IeFrItIANfLdIU3UZWarkoP%2FU6wghLwwGApLFlms7Cvs%2FEnq9A%2Fs4aql9dhhl%2FMK4qAUcoryt8Kvel5Y4RjDMtHrvk0JCJRiVpB9nFwappAwsxgSF8o5%2BSlqZ1zuJuVk2bGVu%2BLZinf0Cxt4ZXVgB1%2Fk6Zpw3WyadXYi0Wnt%2BmLukGR0U83x7%2FOC8m4ianqCs8U7EV9WPaw2k%2FyeoJljPlyQjJe4kSaG2JGr4wlb2ybiKdzi2cLt7OoxmQIzyMOv568IGOqUBGZetxeRXuzsBkWUDbuRBt8ENeyw5bCQoorfTZsbU74d7GkG%2FD1sSxu8xyvyb64x0bALrVu%2Bw4OkQ1M7j%2BmdHdbNTUG%2BHd5X2w4j0F%2BgAnVPuM8NY%2BhmfhX0urqBjL0PiOMmREGMkcsmkSw9kOpsDVqxXGaIb2wskIZ7uzZ7JIp5b0BipCjrODURFZk4LboL%2F2%2BwlJTNaXHWUIb5HW72%2F%2FNWiFA3H&X-Amz-Signature=6674492ef443cab36c94687a2c329a19233f4a1f489f750253819aa7fff46a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2S5PRM5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDsiHgR7RN15RIZOsE%2FFVeUi5TRH3VJN2eJ9vBJVUBy4AiEA3VGHt6oVaqxlMRq7BIQgCIkGZhAYoq0Zx8gS32Ybb98q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA1r2qLimLVSOoEPDircA7MVCudSc4a1c9QROtmK8c6rlqYo2N9kUNTGhIDXbkNZaFPoeJpHVOuD5YX5UJoeb4T%2BTccR0mIgOAzb5TFcSKp0bhLhNAn9CYNe6WI%2Fo9Jp5kxd7cFaAdPVjJIP%2FGkv57stme3LQcypJXhiZCbNmAAvi6cIw1mlBFBp%2BBQgZVa0n2sfv4md3HGgPhlH6byJpQ2vKBcn5LdIL87X84uB6kFFajq1KmFiJfoZZzX5dN43uc3kNj3jwW0wTRibOv2J53Zff95zIpH7klSuP9MckdOA7k8rUc56vP7P2N%2BGrNjJMgpqjpNEnB7e3QXmMVQ4mQOOOPWZuEUCsj8rdgk9Um79KU3peHbT5aBYmptco1gva3WmCGf3XsHYg9BKem2IeFrItIANfLdIU3UZWarkoP%2FU6wghLwwGApLFlms7Cvs%2FEnq9A%2Fs4aql9dhhl%2FMK4qAUcoryt8Kvel5Y4RjDMtHrvk0JCJRiVpB9nFwappAwsxgSF8o5%2BSlqZ1zuJuVk2bGVu%2BLZinf0Cxt4ZXVgB1%2Fk6Zpw3WyadXYi0Wnt%2BmLukGR0U83x7%2FOC8m4ianqCs8U7EV9WPaw2k%2FyeoJljPlyQjJe4kSaG2JGr4wlb2ybiKdzi2cLt7OoxmQIzyMOv568IGOqUBGZetxeRXuzsBkWUDbuRBt8ENeyw5bCQoorfTZsbU74d7GkG%2FD1sSxu8xyvyb64x0bALrVu%2Bw4OkQ1M7j%2BmdHdbNTUG%2BHd5X2w4j0F%2BgAnVPuM8NY%2BhmfhX0urqBjL0PiOMmREGMkcsmkSw9kOpsDVqxXGaIb2wskIZ7uzZ7JIp5b0BipCjrODURFZk4LboL%2F2%2BwlJTNaXHWUIb5HW72%2F%2FNWiFA3H&X-Amz-Signature=6bac764c9a431fa4a874186c688bbd5cdac791ea95cf38b207086ea7c6b9f5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2S5PRM5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDsiHgR7RN15RIZOsE%2FFVeUi5TRH3VJN2eJ9vBJVUBy4AiEA3VGHt6oVaqxlMRq7BIQgCIkGZhAYoq0Zx8gS32Ybb98q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA1r2qLimLVSOoEPDircA7MVCudSc4a1c9QROtmK8c6rlqYo2N9kUNTGhIDXbkNZaFPoeJpHVOuD5YX5UJoeb4T%2BTccR0mIgOAzb5TFcSKp0bhLhNAn9CYNe6WI%2Fo9Jp5kxd7cFaAdPVjJIP%2FGkv57stme3LQcypJXhiZCbNmAAvi6cIw1mlBFBp%2BBQgZVa0n2sfv4md3HGgPhlH6byJpQ2vKBcn5LdIL87X84uB6kFFajq1KmFiJfoZZzX5dN43uc3kNj3jwW0wTRibOv2J53Zff95zIpH7klSuP9MckdOA7k8rUc56vP7P2N%2BGrNjJMgpqjpNEnB7e3QXmMVQ4mQOOOPWZuEUCsj8rdgk9Um79KU3peHbT5aBYmptco1gva3WmCGf3XsHYg9BKem2IeFrItIANfLdIU3UZWarkoP%2FU6wghLwwGApLFlms7Cvs%2FEnq9A%2Fs4aql9dhhl%2FMK4qAUcoryt8Kvel5Y4RjDMtHrvk0JCJRiVpB9nFwappAwsxgSF8o5%2BSlqZ1zuJuVk2bGVu%2BLZinf0Cxt4ZXVgB1%2Fk6Zpw3WyadXYi0Wnt%2BmLukGR0U83x7%2FOC8m4ianqCs8U7EV9WPaw2k%2FyeoJljPlyQjJe4kSaG2JGr4wlb2ybiKdzi2cLt7OoxmQIzyMOv568IGOqUBGZetxeRXuzsBkWUDbuRBt8ENeyw5bCQoorfTZsbU74d7GkG%2FD1sSxu8xyvyb64x0bALrVu%2Bw4OkQ1M7j%2BmdHdbNTUG%2BHd5X2w4j0F%2BgAnVPuM8NY%2BhmfhX0urqBjL0PiOMmREGMkcsmkSw9kOpsDVqxXGaIb2wskIZ7uzZ7JIp5b0BipCjrODURFZk4LboL%2F2%2BwlJTNaXHWUIb5HW72%2F%2FNWiFA3H&X-Amz-Signature=87ceec43c01aa0148d2a3d81c208b6cb4fec8a4db2c1bd08b69ca3e7e1d63b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2S5PRM5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDsiHgR7RN15RIZOsE%2FFVeUi5TRH3VJN2eJ9vBJVUBy4AiEA3VGHt6oVaqxlMRq7BIQgCIkGZhAYoq0Zx8gS32Ybb98q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA1r2qLimLVSOoEPDircA7MVCudSc4a1c9QROtmK8c6rlqYo2N9kUNTGhIDXbkNZaFPoeJpHVOuD5YX5UJoeb4T%2BTccR0mIgOAzb5TFcSKp0bhLhNAn9CYNe6WI%2Fo9Jp5kxd7cFaAdPVjJIP%2FGkv57stme3LQcypJXhiZCbNmAAvi6cIw1mlBFBp%2BBQgZVa0n2sfv4md3HGgPhlH6byJpQ2vKBcn5LdIL87X84uB6kFFajq1KmFiJfoZZzX5dN43uc3kNj3jwW0wTRibOv2J53Zff95zIpH7klSuP9MckdOA7k8rUc56vP7P2N%2BGrNjJMgpqjpNEnB7e3QXmMVQ4mQOOOPWZuEUCsj8rdgk9Um79KU3peHbT5aBYmptco1gva3WmCGf3XsHYg9BKem2IeFrItIANfLdIU3UZWarkoP%2FU6wghLwwGApLFlms7Cvs%2FEnq9A%2Fs4aql9dhhl%2FMK4qAUcoryt8Kvel5Y4RjDMtHrvk0JCJRiVpB9nFwappAwsxgSF8o5%2BSlqZ1zuJuVk2bGVu%2BLZinf0Cxt4ZXVgB1%2Fk6Zpw3WyadXYi0Wnt%2BmLukGR0U83x7%2FOC8m4ianqCs8U7EV9WPaw2k%2FyeoJljPlyQjJe4kSaG2JGr4wlb2ybiKdzi2cLt7OoxmQIzyMOv568IGOqUBGZetxeRXuzsBkWUDbuRBt8ENeyw5bCQoorfTZsbU74d7GkG%2FD1sSxu8xyvyb64x0bALrVu%2Bw4OkQ1M7j%2BmdHdbNTUG%2BHd5X2w4j0F%2BgAnVPuM8NY%2BhmfhX0urqBjL0PiOMmREGMkcsmkSw9kOpsDVqxXGaIb2wskIZ7uzZ7JIp5b0BipCjrODURFZk4LboL%2F2%2BwlJTNaXHWUIb5HW72%2F%2FNWiFA3H&X-Amz-Signature=f0e198e18c130531256e38d684958c614702eaeb4d13f25ab137d465308ab633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
