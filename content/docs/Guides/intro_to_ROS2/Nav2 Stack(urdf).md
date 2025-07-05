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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL3VO4C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDz4AtvOGOJJPh8QlivxDLHwqohZLPyQQFw%2BPpcCY5hrAIhAKJOkCGs%2FAcIR8Qq43N5jA9Wcvcik9bdMT7AluWKLeZBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwPesJT9ZHHwi7Bv8oq3AMpXSt9MSMBgsb8V7j%2FR5B0SrYpciiecXx951AcAyI6j1rtk1VTIf9fVXv1qlRd051vS5jlziDU8V31hxaV%2Fd4Ja%2F0oPy1FmY0FDFAroZigSmLr5opgj2lq9gmRrMuTvIX89bRxakrkIIfUbiR%2FIVloYFJBIn1vwtbGmRqF3kwmCjfdKC2YPe%2BqCZuEQafo4ARb8EYq23o2SP2gVBMxsElH7ahA%2FzHqzodmMmI8FtLEsyDWHG%2B1du%2FE23e2UAfO5xzItzbPdnG%2BeT7EsnKdu809WO6BwFbE5lEfpj%2BR4B9OtollB9RmR8HE9ImQ5YmcFdIEXHkP7p9SA6a91YJZpnyhRcs9f48w1EC8zYXUaJ6X098z5c6ZgKSFj5be3LqJ%2FtiIzmyXoz9kI5SpSoaEfUcGD1a9d2uSvonr8fapdApof4fPqQOJ9yfidMDIqo5b8fWTmAHKpbIBBOuFW0cJKJ8s8Ybfas14GuzVhvf%2FHiEfkoZ0jh%2Bh9bEXplkUD0VzKA1oiOIbxujcLCyAj0%2BLhE3lI1Me7gFI3JYmppyflZmumOV5jQd3q82Vi4Vw8tLS0tnlBJFrgwHEDG7qSmhnhfpmT23nDzjV7ucfefXhsjgcha2hB6zzBElP%2F%2BigUzCP7qXDBjqkAWS9JxUxMg1io61jLWpaQI1ewAAPo8CnmJKz1qECtKxEsgFMgbxpvGDMvPycuEL9FmbgVOE%2Bn6XFPbu82vLyuN2p%2BZwEOWe%2FLCOl1MyNe7HtgJhjGkgxZsGvoQ2Z78Xwy7mf4wdr4eeqqkc8MekR4Xf2ARdKOT9WMWFf7RVQAMZdV8wzZ1qKayBsVG23sXsl%2BFO4xlx8BMN6y12PsZoTfaOGV%2Fyc&X-Amz-Signature=fbfcec95f2d9d8097b3f3870ac2339a63fbe29064a17788dc0dc1790c47d0da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL3VO4C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDz4AtvOGOJJPh8QlivxDLHwqohZLPyQQFw%2BPpcCY5hrAIhAKJOkCGs%2FAcIR8Qq43N5jA9Wcvcik9bdMT7AluWKLeZBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwPesJT9ZHHwi7Bv8oq3AMpXSt9MSMBgsb8V7j%2FR5B0SrYpciiecXx951AcAyI6j1rtk1VTIf9fVXv1qlRd051vS5jlziDU8V31hxaV%2Fd4Ja%2F0oPy1FmY0FDFAroZigSmLr5opgj2lq9gmRrMuTvIX89bRxakrkIIfUbiR%2FIVloYFJBIn1vwtbGmRqF3kwmCjfdKC2YPe%2BqCZuEQafo4ARb8EYq23o2SP2gVBMxsElH7ahA%2FzHqzodmMmI8FtLEsyDWHG%2B1du%2FE23e2UAfO5xzItzbPdnG%2BeT7EsnKdu809WO6BwFbE5lEfpj%2BR4B9OtollB9RmR8HE9ImQ5YmcFdIEXHkP7p9SA6a91YJZpnyhRcs9f48w1EC8zYXUaJ6X098z5c6ZgKSFj5be3LqJ%2FtiIzmyXoz9kI5SpSoaEfUcGD1a9d2uSvonr8fapdApof4fPqQOJ9yfidMDIqo5b8fWTmAHKpbIBBOuFW0cJKJ8s8Ybfas14GuzVhvf%2FHiEfkoZ0jh%2Bh9bEXplkUD0VzKA1oiOIbxujcLCyAj0%2BLhE3lI1Me7gFI3JYmppyflZmumOV5jQd3q82Vi4Vw8tLS0tnlBJFrgwHEDG7qSmhnhfpmT23nDzjV7ucfefXhsjgcha2hB6zzBElP%2F%2BigUzCP7qXDBjqkAWS9JxUxMg1io61jLWpaQI1ewAAPo8CnmJKz1qECtKxEsgFMgbxpvGDMvPycuEL9FmbgVOE%2Bn6XFPbu82vLyuN2p%2BZwEOWe%2FLCOl1MyNe7HtgJhjGkgxZsGvoQ2Z78Xwy7mf4wdr4eeqqkc8MekR4Xf2ARdKOT9WMWFf7RVQAMZdV8wzZ1qKayBsVG23sXsl%2BFO4xlx8BMN6y12PsZoTfaOGV%2Fyc&X-Amz-Signature=b6b7b3fcb2fef48b672bf9ee9ad2bfba68e17d38002fd9f8512f3d8a9504c96f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL3VO4C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDz4AtvOGOJJPh8QlivxDLHwqohZLPyQQFw%2BPpcCY5hrAIhAKJOkCGs%2FAcIR8Qq43N5jA9Wcvcik9bdMT7AluWKLeZBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwPesJT9ZHHwi7Bv8oq3AMpXSt9MSMBgsb8V7j%2FR5B0SrYpciiecXx951AcAyI6j1rtk1VTIf9fVXv1qlRd051vS5jlziDU8V31hxaV%2Fd4Ja%2F0oPy1FmY0FDFAroZigSmLr5opgj2lq9gmRrMuTvIX89bRxakrkIIfUbiR%2FIVloYFJBIn1vwtbGmRqF3kwmCjfdKC2YPe%2BqCZuEQafo4ARb8EYq23o2SP2gVBMxsElH7ahA%2FzHqzodmMmI8FtLEsyDWHG%2B1du%2FE23e2UAfO5xzItzbPdnG%2BeT7EsnKdu809WO6BwFbE5lEfpj%2BR4B9OtollB9RmR8HE9ImQ5YmcFdIEXHkP7p9SA6a91YJZpnyhRcs9f48w1EC8zYXUaJ6X098z5c6ZgKSFj5be3LqJ%2FtiIzmyXoz9kI5SpSoaEfUcGD1a9d2uSvonr8fapdApof4fPqQOJ9yfidMDIqo5b8fWTmAHKpbIBBOuFW0cJKJ8s8Ybfas14GuzVhvf%2FHiEfkoZ0jh%2Bh9bEXplkUD0VzKA1oiOIbxujcLCyAj0%2BLhE3lI1Me7gFI3JYmppyflZmumOV5jQd3q82Vi4Vw8tLS0tnlBJFrgwHEDG7qSmhnhfpmT23nDzjV7ucfefXhsjgcha2hB6zzBElP%2F%2BigUzCP7qXDBjqkAWS9JxUxMg1io61jLWpaQI1ewAAPo8CnmJKz1qECtKxEsgFMgbxpvGDMvPycuEL9FmbgVOE%2Bn6XFPbu82vLyuN2p%2BZwEOWe%2FLCOl1MyNe7HtgJhjGkgxZsGvoQ2Z78Xwy7mf4wdr4eeqqkc8MekR4Xf2ARdKOT9WMWFf7RVQAMZdV8wzZ1qKayBsVG23sXsl%2BFO4xlx8BMN6y12PsZoTfaOGV%2Fyc&X-Amz-Signature=ed2f5918b43962267b0ddfe04c73d9d7668192da6885e1098c760cf4f30a96df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL3VO4C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDz4AtvOGOJJPh8QlivxDLHwqohZLPyQQFw%2BPpcCY5hrAIhAKJOkCGs%2FAcIR8Qq43N5jA9Wcvcik9bdMT7AluWKLeZBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwPesJT9ZHHwi7Bv8oq3AMpXSt9MSMBgsb8V7j%2FR5B0SrYpciiecXx951AcAyI6j1rtk1VTIf9fVXv1qlRd051vS5jlziDU8V31hxaV%2Fd4Ja%2F0oPy1FmY0FDFAroZigSmLr5opgj2lq9gmRrMuTvIX89bRxakrkIIfUbiR%2FIVloYFJBIn1vwtbGmRqF3kwmCjfdKC2YPe%2BqCZuEQafo4ARb8EYq23o2SP2gVBMxsElH7ahA%2FzHqzodmMmI8FtLEsyDWHG%2B1du%2FE23e2UAfO5xzItzbPdnG%2BeT7EsnKdu809WO6BwFbE5lEfpj%2BR4B9OtollB9RmR8HE9ImQ5YmcFdIEXHkP7p9SA6a91YJZpnyhRcs9f48w1EC8zYXUaJ6X098z5c6ZgKSFj5be3LqJ%2FtiIzmyXoz9kI5SpSoaEfUcGD1a9d2uSvonr8fapdApof4fPqQOJ9yfidMDIqo5b8fWTmAHKpbIBBOuFW0cJKJ8s8Ybfas14GuzVhvf%2FHiEfkoZ0jh%2Bh9bEXplkUD0VzKA1oiOIbxujcLCyAj0%2BLhE3lI1Me7gFI3JYmppyflZmumOV5jQd3q82Vi4Vw8tLS0tnlBJFrgwHEDG7qSmhnhfpmT23nDzjV7ucfefXhsjgcha2hB6zzBElP%2F%2BigUzCP7qXDBjqkAWS9JxUxMg1io61jLWpaQI1ewAAPo8CnmJKz1qECtKxEsgFMgbxpvGDMvPycuEL9FmbgVOE%2Bn6XFPbu82vLyuN2p%2BZwEOWe%2FLCOl1MyNe7HtgJhjGkgxZsGvoQ2Z78Xwy7mf4wdr4eeqqkc8MekR4Xf2ARdKOT9WMWFf7RVQAMZdV8wzZ1qKayBsVG23sXsl%2BFO4xlx8BMN6y12PsZoTfaOGV%2Fyc&X-Amz-Signature=5c5b7b502c7063be93f7f5dba68bd66071b5124e1752736d36d3d4223d309d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL3VO4C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDz4AtvOGOJJPh8QlivxDLHwqohZLPyQQFw%2BPpcCY5hrAIhAKJOkCGs%2FAcIR8Qq43N5jA9Wcvcik9bdMT7AluWKLeZBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwPesJT9ZHHwi7Bv8oq3AMpXSt9MSMBgsb8V7j%2FR5B0SrYpciiecXx951AcAyI6j1rtk1VTIf9fVXv1qlRd051vS5jlziDU8V31hxaV%2Fd4Ja%2F0oPy1FmY0FDFAroZigSmLr5opgj2lq9gmRrMuTvIX89bRxakrkIIfUbiR%2FIVloYFJBIn1vwtbGmRqF3kwmCjfdKC2YPe%2BqCZuEQafo4ARb8EYq23o2SP2gVBMxsElH7ahA%2FzHqzodmMmI8FtLEsyDWHG%2B1du%2FE23e2UAfO5xzItzbPdnG%2BeT7EsnKdu809WO6BwFbE5lEfpj%2BR4B9OtollB9RmR8HE9ImQ5YmcFdIEXHkP7p9SA6a91YJZpnyhRcs9f48w1EC8zYXUaJ6X098z5c6ZgKSFj5be3LqJ%2FtiIzmyXoz9kI5SpSoaEfUcGD1a9d2uSvonr8fapdApof4fPqQOJ9yfidMDIqo5b8fWTmAHKpbIBBOuFW0cJKJ8s8Ybfas14GuzVhvf%2FHiEfkoZ0jh%2Bh9bEXplkUD0VzKA1oiOIbxujcLCyAj0%2BLhE3lI1Me7gFI3JYmppyflZmumOV5jQd3q82Vi4Vw8tLS0tnlBJFrgwHEDG7qSmhnhfpmT23nDzjV7ucfefXhsjgcha2hB6zzBElP%2F%2BigUzCP7qXDBjqkAWS9JxUxMg1io61jLWpaQI1ewAAPo8CnmJKz1qECtKxEsgFMgbxpvGDMvPycuEL9FmbgVOE%2Bn6XFPbu82vLyuN2p%2BZwEOWe%2FLCOl1MyNe7HtgJhjGkgxZsGvoQ2Z78Xwy7mf4wdr4eeqqkc8MekR4Xf2ARdKOT9WMWFf7RVQAMZdV8wzZ1qKayBsVG23sXsl%2BFO4xlx8BMN6y12PsZoTfaOGV%2Fyc&X-Amz-Signature=ae2f3376fae5bae18e70faa484dd641cc7175042715712a3b7ce5f9e984d9676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL3VO4C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDz4AtvOGOJJPh8QlivxDLHwqohZLPyQQFw%2BPpcCY5hrAIhAKJOkCGs%2FAcIR8Qq43N5jA9Wcvcik9bdMT7AluWKLeZBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwPesJT9ZHHwi7Bv8oq3AMpXSt9MSMBgsb8V7j%2FR5B0SrYpciiecXx951AcAyI6j1rtk1VTIf9fVXv1qlRd051vS5jlziDU8V31hxaV%2Fd4Ja%2F0oPy1FmY0FDFAroZigSmLr5opgj2lq9gmRrMuTvIX89bRxakrkIIfUbiR%2FIVloYFJBIn1vwtbGmRqF3kwmCjfdKC2YPe%2BqCZuEQafo4ARb8EYq23o2SP2gVBMxsElH7ahA%2FzHqzodmMmI8FtLEsyDWHG%2B1du%2FE23e2UAfO5xzItzbPdnG%2BeT7EsnKdu809WO6BwFbE5lEfpj%2BR4B9OtollB9RmR8HE9ImQ5YmcFdIEXHkP7p9SA6a91YJZpnyhRcs9f48w1EC8zYXUaJ6X098z5c6ZgKSFj5be3LqJ%2FtiIzmyXoz9kI5SpSoaEfUcGD1a9d2uSvonr8fapdApof4fPqQOJ9yfidMDIqo5b8fWTmAHKpbIBBOuFW0cJKJ8s8Ybfas14GuzVhvf%2FHiEfkoZ0jh%2Bh9bEXplkUD0VzKA1oiOIbxujcLCyAj0%2BLhE3lI1Me7gFI3JYmppyflZmumOV5jQd3q82Vi4Vw8tLS0tnlBJFrgwHEDG7qSmhnhfpmT23nDzjV7ucfefXhsjgcha2hB6zzBElP%2F%2BigUzCP7qXDBjqkAWS9JxUxMg1io61jLWpaQI1ewAAPo8CnmJKz1qECtKxEsgFMgbxpvGDMvPycuEL9FmbgVOE%2Bn6XFPbu82vLyuN2p%2BZwEOWe%2FLCOl1MyNe7HtgJhjGkgxZsGvoQ2Z78Xwy7mf4wdr4eeqqkc8MekR4Xf2ARdKOT9WMWFf7RVQAMZdV8wzZ1qKayBsVG23sXsl%2BFO4xlx8BMN6y12PsZoTfaOGV%2Fyc&X-Amz-Signature=543af1fb8db9fc55fd415e406329780a1b46ff734fac50dc9c878ce2546f49cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
