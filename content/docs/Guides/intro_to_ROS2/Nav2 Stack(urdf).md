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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JHNYEHW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtd5oJQSkbEgwxWB2vU6%2BBykMpkSiHt%2BBtc6%2BeXPKumAiEAtHpAhi1OK9l1ApUoqbFbHEIWdPkZiUPgyFXYGj0Yg%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOnGg%2FvMtx8sZBiNCCrcA9LpLW2PBsUwwlDlBbY%2FxsSCjvtD4c%2BwudGKFT7NTdBzRcaSBtHiC12J7sU80N3SmL9jlM2wpg%2FzaXlLXI2TXtuUOeDFfPCT%2BWcyu3wNP%2FdbnbVpLbv61g%2FHTmauAZLnHj6%2FaClMlNAFmnKfbNKCLrkZjRrKuEEHSM%2F2y2l9wKO2szrvulv8uqFMOZqNZKkkCkf8XeWW2pp1jR8%2FA5YXRoH2MDKaIX%2BwabAiRKYvYY5iRC4osyYyNl77%2BVef5BIY6HiFvwuBkI6Zek2S84FW8z3OTK6HxI1Zk2nArO8xA6ZEf8rDbJ7hT6D53O2WkbdDHB0JclAQRH0AbsXpCq%2BqTGejhNKnMgceslQwvcb09iFIDtkXIZh1LYrhZAPcpbzHrUQ1wfEFUyC9ML3ELt%2B33zd0zweblCnj68xnm9kpsKt6YV2Ch8nYJGBsjmcMcb2TpLDOz5H86FO7JZr2pFmFL3oPSeqoL18GtA7oZ7QoS2s5ixFA3wJ7sMyt%2FgmfF33L2R%2Bcx%2Flrrb1Qs9WbOIwgv1T8sEx7ONTJkUfm7fmoazqkFrDRQ2hxdiXWg3aYnscRh52f0NmY1miVZWSle3VgTuWzYHmlnvhlkt3iV7PNcE9Pw89gR%2BN0w5m%2FlNlEMJH91sEGOqUBRxMZbm95vZm8RozkZz0TrJLiSai6atyJJ77gbCLXmeh43xSnzXcMwZGdPp8j6%2F4aZavT1CG1afFq8Qu%2BYQLAs0%2B4NY%2FbG1RUu4TAIpCmIkNgRhjywakPPuBVTaG8EJPIIBKZW3uNmuqCSYhtofYlfH4BE8uCAkkJZXMTmOBigdo1TYdioSUzbKqTPUsvRyrx4lu81TdbLndhEX383UCNYlfzbl2m&X-Amz-Signature=84a0be34632a6fea9287683a6ce76d9cc1603ff41664980a3ce99987d9a57a72&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JHNYEHW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtd5oJQSkbEgwxWB2vU6%2BBykMpkSiHt%2BBtc6%2BeXPKumAiEAtHpAhi1OK9l1ApUoqbFbHEIWdPkZiUPgyFXYGj0Yg%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOnGg%2FvMtx8sZBiNCCrcA9LpLW2PBsUwwlDlBbY%2FxsSCjvtD4c%2BwudGKFT7NTdBzRcaSBtHiC12J7sU80N3SmL9jlM2wpg%2FzaXlLXI2TXtuUOeDFfPCT%2BWcyu3wNP%2FdbnbVpLbv61g%2FHTmauAZLnHj6%2FaClMlNAFmnKfbNKCLrkZjRrKuEEHSM%2F2y2l9wKO2szrvulv8uqFMOZqNZKkkCkf8XeWW2pp1jR8%2FA5YXRoH2MDKaIX%2BwabAiRKYvYY5iRC4osyYyNl77%2BVef5BIY6HiFvwuBkI6Zek2S84FW8z3OTK6HxI1Zk2nArO8xA6ZEf8rDbJ7hT6D53O2WkbdDHB0JclAQRH0AbsXpCq%2BqTGejhNKnMgceslQwvcb09iFIDtkXIZh1LYrhZAPcpbzHrUQ1wfEFUyC9ML3ELt%2B33zd0zweblCnj68xnm9kpsKt6YV2Ch8nYJGBsjmcMcb2TpLDOz5H86FO7JZr2pFmFL3oPSeqoL18GtA7oZ7QoS2s5ixFA3wJ7sMyt%2FgmfF33L2R%2Bcx%2Flrrb1Qs9WbOIwgv1T8sEx7ONTJkUfm7fmoazqkFrDRQ2hxdiXWg3aYnscRh52f0NmY1miVZWSle3VgTuWzYHmlnvhlkt3iV7PNcE9Pw89gR%2BN0w5m%2FlNlEMJH91sEGOqUBRxMZbm95vZm8RozkZz0TrJLiSai6atyJJ77gbCLXmeh43xSnzXcMwZGdPp8j6%2F4aZavT1CG1afFq8Qu%2BYQLAs0%2B4NY%2FbG1RUu4TAIpCmIkNgRhjywakPPuBVTaG8EJPIIBKZW3uNmuqCSYhtofYlfH4BE8uCAkkJZXMTmOBigdo1TYdioSUzbKqTPUsvRyrx4lu81TdbLndhEX383UCNYlfzbl2m&X-Amz-Signature=7b8dd0f7eea65b6ff269c6091bacfdda4599b09265f0de485d7ca67802cc572c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JHNYEHW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtd5oJQSkbEgwxWB2vU6%2BBykMpkSiHt%2BBtc6%2BeXPKumAiEAtHpAhi1OK9l1ApUoqbFbHEIWdPkZiUPgyFXYGj0Yg%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOnGg%2FvMtx8sZBiNCCrcA9LpLW2PBsUwwlDlBbY%2FxsSCjvtD4c%2BwudGKFT7NTdBzRcaSBtHiC12J7sU80N3SmL9jlM2wpg%2FzaXlLXI2TXtuUOeDFfPCT%2BWcyu3wNP%2FdbnbVpLbv61g%2FHTmauAZLnHj6%2FaClMlNAFmnKfbNKCLrkZjRrKuEEHSM%2F2y2l9wKO2szrvulv8uqFMOZqNZKkkCkf8XeWW2pp1jR8%2FA5YXRoH2MDKaIX%2BwabAiRKYvYY5iRC4osyYyNl77%2BVef5BIY6HiFvwuBkI6Zek2S84FW8z3OTK6HxI1Zk2nArO8xA6ZEf8rDbJ7hT6D53O2WkbdDHB0JclAQRH0AbsXpCq%2BqTGejhNKnMgceslQwvcb09iFIDtkXIZh1LYrhZAPcpbzHrUQ1wfEFUyC9ML3ELt%2B33zd0zweblCnj68xnm9kpsKt6YV2Ch8nYJGBsjmcMcb2TpLDOz5H86FO7JZr2pFmFL3oPSeqoL18GtA7oZ7QoS2s5ixFA3wJ7sMyt%2FgmfF33L2R%2Bcx%2Flrrb1Qs9WbOIwgv1T8sEx7ONTJkUfm7fmoazqkFrDRQ2hxdiXWg3aYnscRh52f0NmY1miVZWSle3VgTuWzYHmlnvhlkt3iV7PNcE9Pw89gR%2BN0w5m%2FlNlEMJH91sEGOqUBRxMZbm95vZm8RozkZz0TrJLiSai6atyJJ77gbCLXmeh43xSnzXcMwZGdPp8j6%2F4aZavT1CG1afFq8Qu%2BYQLAs0%2B4NY%2FbG1RUu4TAIpCmIkNgRhjywakPPuBVTaG8EJPIIBKZW3uNmuqCSYhtofYlfH4BE8uCAkkJZXMTmOBigdo1TYdioSUzbKqTPUsvRyrx4lu81TdbLndhEX383UCNYlfzbl2m&X-Amz-Signature=0bab5d53211788c492fcd07dc117168aa2ac09b282f51482ebfa6ca73d134d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JHNYEHW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtd5oJQSkbEgwxWB2vU6%2BBykMpkSiHt%2BBtc6%2BeXPKumAiEAtHpAhi1OK9l1ApUoqbFbHEIWdPkZiUPgyFXYGj0Yg%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOnGg%2FvMtx8sZBiNCCrcA9LpLW2PBsUwwlDlBbY%2FxsSCjvtD4c%2BwudGKFT7NTdBzRcaSBtHiC12J7sU80N3SmL9jlM2wpg%2FzaXlLXI2TXtuUOeDFfPCT%2BWcyu3wNP%2FdbnbVpLbv61g%2FHTmauAZLnHj6%2FaClMlNAFmnKfbNKCLrkZjRrKuEEHSM%2F2y2l9wKO2szrvulv8uqFMOZqNZKkkCkf8XeWW2pp1jR8%2FA5YXRoH2MDKaIX%2BwabAiRKYvYY5iRC4osyYyNl77%2BVef5BIY6HiFvwuBkI6Zek2S84FW8z3OTK6HxI1Zk2nArO8xA6ZEf8rDbJ7hT6D53O2WkbdDHB0JclAQRH0AbsXpCq%2BqTGejhNKnMgceslQwvcb09iFIDtkXIZh1LYrhZAPcpbzHrUQ1wfEFUyC9ML3ELt%2B33zd0zweblCnj68xnm9kpsKt6YV2Ch8nYJGBsjmcMcb2TpLDOz5H86FO7JZr2pFmFL3oPSeqoL18GtA7oZ7QoS2s5ixFA3wJ7sMyt%2FgmfF33L2R%2Bcx%2Flrrb1Qs9WbOIwgv1T8sEx7ONTJkUfm7fmoazqkFrDRQ2hxdiXWg3aYnscRh52f0NmY1miVZWSle3VgTuWzYHmlnvhlkt3iV7PNcE9Pw89gR%2BN0w5m%2FlNlEMJH91sEGOqUBRxMZbm95vZm8RozkZz0TrJLiSai6atyJJ77gbCLXmeh43xSnzXcMwZGdPp8j6%2F4aZavT1CG1afFq8Qu%2BYQLAs0%2B4NY%2FbG1RUu4TAIpCmIkNgRhjywakPPuBVTaG8EJPIIBKZW3uNmuqCSYhtofYlfH4BE8uCAkkJZXMTmOBigdo1TYdioSUzbKqTPUsvRyrx4lu81TdbLndhEX383UCNYlfzbl2m&X-Amz-Signature=bd00383e9b6d3f3fa110918f17a529b15113530eace8047d3227ac89c58671ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JHNYEHW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtd5oJQSkbEgwxWB2vU6%2BBykMpkSiHt%2BBtc6%2BeXPKumAiEAtHpAhi1OK9l1ApUoqbFbHEIWdPkZiUPgyFXYGj0Yg%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOnGg%2FvMtx8sZBiNCCrcA9LpLW2PBsUwwlDlBbY%2FxsSCjvtD4c%2BwudGKFT7NTdBzRcaSBtHiC12J7sU80N3SmL9jlM2wpg%2FzaXlLXI2TXtuUOeDFfPCT%2BWcyu3wNP%2FdbnbVpLbv61g%2FHTmauAZLnHj6%2FaClMlNAFmnKfbNKCLrkZjRrKuEEHSM%2F2y2l9wKO2szrvulv8uqFMOZqNZKkkCkf8XeWW2pp1jR8%2FA5YXRoH2MDKaIX%2BwabAiRKYvYY5iRC4osyYyNl77%2BVef5BIY6HiFvwuBkI6Zek2S84FW8z3OTK6HxI1Zk2nArO8xA6ZEf8rDbJ7hT6D53O2WkbdDHB0JclAQRH0AbsXpCq%2BqTGejhNKnMgceslQwvcb09iFIDtkXIZh1LYrhZAPcpbzHrUQ1wfEFUyC9ML3ELt%2B33zd0zweblCnj68xnm9kpsKt6YV2Ch8nYJGBsjmcMcb2TpLDOz5H86FO7JZr2pFmFL3oPSeqoL18GtA7oZ7QoS2s5ixFA3wJ7sMyt%2FgmfF33L2R%2Bcx%2Flrrb1Qs9WbOIwgv1T8sEx7ONTJkUfm7fmoazqkFrDRQ2hxdiXWg3aYnscRh52f0NmY1miVZWSle3VgTuWzYHmlnvhlkt3iV7PNcE9Pw89gR%2BN0w5m%2FlNlEMJH91sEGOqUBRxMZbm95vZm8RozkZz0TrJLiSai6atyJJ77gbCLXmeh43xSnzXcMwZGdPp8j6%2F4aZavT1CG1afFq8Qu%2BYQLAs0%2B4NY%2FbG1RUu4TAIpCmIkNgRhjywakPPuBVTaG8EJPIIBKZW3uNmuqCSYhtofYlfH4BE8uCAkkJZXMTmOBigdo1TYdioSUzbKqTPUsvRyrx4lu81TdbLndhEX383UCNYlfzbl2m&X-Amz-Signature=aef6898f7affc4c3ad2a48ade5686a0eb405fbcc34029594bff9361c9ade41d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JHNYEHW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtd5oJQSkbEgwxWB2vU6%2BBykMpkSiHt%2BBtc6%2BeXPKumAiEAtHpAhi1OK9l1ApUoqbFbHEIWdPkZiUPgyFXYGj0Yg%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOnGg%2FvMtx8sZBiNCCrcA9LpLW2PBsUwwlDlBbY%2FxsSCjvtD4c%2BwudGKFT7NTdBzRcaSBtHiC12J7sU80N3SmL9jlM2wpg%2FzaXlLXI2TXtuUOeDFfPCT%2BWcyu3wNP%2FdbnbVpLbv61g%2FHTmauAZLnHj6%2FaClMlNAFmnKfbNKCLrkZjRrKuEEHSM%2F2y2l9wKO2szrvulv8uqFMOZqNZKkkCkf8XeWW2pp1jR8%2FA5YXRoH2MDKaIX%2BwabAiRKYvYY5iRC4osyYyNl77%2BVef5BIY6HiFvwuBkI6Zek2S84FW8z3OTK6HxI1Zk2nArO8xA6ZEf8rDbJ7hT6D53O2WkbdDHB0JclAQRH0AbsXpCq%2BqTGejhNKnMgceslQwvcb09iFIDtkXIZh1LYrhZAPcpbzHrUQ1wfEFUyC9ML3ELt%2B33zd0zweblCnj68xnm9kpsKt6YV2Ch8nYJGBsjmcMcb2TpLDOz5H86FO7JZr2pFmFL3oPSeqoL18GtA7oZ7QoS2s5ixFA3wJ7sMyt%2FgmfF33L2R%2Bcx%2Flrrb1Qs9WbOIwgv1T8sEx7ONTJkUfm7fmoazqkFrDRQ2hxdiXWg3aYnscRh52f0NmY1miVZWSle3VgTuWzYHmlnvhlkt3iV7PNcE9Pw89gR%2BN0w5m%2FlNlEMJH91sEGOqUBRxMZbm95vZm8RozkZz0TrJLiSai6atyJJ77gbCLXmeh43xSnzXcMwZGdPp8j6%2F4aZavT1CG1afFq8Qu%2BYQLAs0%2B4NY%2FbG1RUu4TAIpCmIkNgRhjywakPPuBVTaG8EJPIIBKZW3uNmuqCSYhtofYlfH4BE8uCAkkJZXMTmOBigdo1TYdioSUzbKqTPUsvRyrx4lu81TdbLndhEX383UCNYlfzbl2m&X-Amz-Signature=beefe9a32d6f2dd14551f17da9549f9139db0ada63f065d6173b309611b6e568&X-Amz-SignedHeaders=host&x-id=GetObject)
