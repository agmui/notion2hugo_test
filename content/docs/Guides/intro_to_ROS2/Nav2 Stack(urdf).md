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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNENTKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkHLfMZnQ4B640pN3WcX3S9xBmjQyHU0NSAdLAG3EFwIhAIyWOB3x5qAizde2J4CSokDAqk9SsB9SsbJ0onPjmbhxKv8DCEsQABoMNjM3NDIzMTgzODA1IgzY1bg6ILczaCQKl1cq3AOX6bhzr%2F4nqnyC1L3YbPS0WH3Cb%2BY61un4QJTkt0%2B9Vb2R82GWhxR0K0F%2BU%2BbLs%2FPycnHLjzsPmQk6PDHXxsgu1naFMsfLlPLz9ZPc%2FkdXUPDyZTKoVoIS%2FmK70DaOnroY%2BNEYNl%2BgzWfxemle11LUghj6tZ0k8ra659V2I%2Bk3nK7jRB%2BZpvn7E9ztpd5pKawka573jq%2BYzhO71Btr2QWAEAVVwOuK0qutL5yZ0q4SB3ZGZXmjJ2DOZnqck6nf7ItdwoWZPW9RcaxorH89QTuFaJ%2BhZNkyaackI8rLrxKZgeYRsXGghoSe1Ip953QbbZ47%2FfEPX7Tj5pUmwVjV41bkUx4vYtMCGcFiScBLTXehMBP37qqlZYNx2PTM7bTYq3S9zZZTnmb8xBnpZONNDAa2zcbiKVMQ2Ktuqv3wRRSvU96W%2BgG8QMVw%2BPXkvhLSdPZ0R8QGihgXyorFSrJGGh68Ug%2Ftm%2F7Cg%2B2JzdsvkEon%2F2tedAjliccWQpLXrFs%2FBSKFGD9OHIScMYwM5M1%2ForKkloPQuCElYPA9fH4VbKX1d%2F4E8Ehik3jcyza6248CK73MdEkZvHvjnMxqWl2zogpKZGUJ5UTC6fCXDJbiTFai3Ark5KPhjaJSBKCBsTCg3NLBBjqkAVz1BKHX%2BFqRHDF8Ds2WSDApBf1FrHgKrmjfCsp%2FQIoPcibK89k6sPbrZhAHD9vJJ7oUH44h3B4kWsDIs1bxwt1GlMxEoyYCzDRkEqVb7zXROnLxz2w06jG6WlGTWprFok9qoKpEYQRHKtMSYh3j89LEMEdgGraqJU6aVnDb82mOCxiC9MmZFbtmggRu8FLcUV311dbqHZfUwKf3ON9KwtBNMO1D&X-Amz-Signature=78fb0df76eac4c508694e6e56854044130b4cab11f024a61b11082c2fcba3afb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNENTKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkHLfMZnQ4B640pN3WcX3S9xBmjQyHU0NSAdLAG3EFwIhAIyWOB3x5qAizde2J4CSokDAqk9SsB9SsbJ0onPjmbhxKv8DCEsQABoMNjM3NDIzMTgzODA1IgzY1bg6ILczaCQKl1cq3AOX6bhzr%2F4nqnyC1L3YbPS0WH3Cb%2BY61un4QJTkt0%2B9Vb2R82GWhxR0K0F%2BU%2BbLs%2FPycnHLjzsPmQk6PDHXxsgu1naFMsfLlPLz9ZPc%2FkdXUPDyZTKoVoIS%2FmK70DaOnroY%2BNEYNl%2BgzWfxemle11LUghj6tZ0k8ra659V2I%2Bk3nK7jRB%2BZpvn7E9ztpd5pKawka573jq%2BYzhO71Btr2QWAEAVVwOuK0qutL5yZ0q4SB3ZGZXmjJ2DOZnqck6nf7ItdwoWZPW9RcaxorH89QTuFaJ%2BhZNkyaackI8rLrxKZgeYRsXGghoSe1Ip953QbbZ47%2FfEPX7Tj5pUmwVjV41bkUx4vYtMCGcFiScBLTXehMBP37qqlZYNx2PTM7bTYq3S9zZZTnmb8xBnpZONNDAa2zcbiKVMQ2Ktuqv3wRRSvU96W%2BgG8QMVw%2BPXkvhLSdPZ0R8QGihgXyorFSrJGGh68Ug%2Ftm%2F7Cg%2B2JzdsvkEon%2F2tedAjliccWQpLXrFs%2FBSKFGD9OHIScMYwM5M1%2ForKkloPQuCElYPA9fH4VbKX1d%2F4E8Ehik3jcyza6248CK73MdEkZvHvjnMxqWl2zogpKZGUJ5UTC6fCXDJbiTFai3Ark5KPhjaJSBKCBsTCg3NLBBjqkAVz1BKHX%2BFqRHDF8Ds2WSDApBf1FrHgKrmjfCsp%2FQIoPcibK89k6sPbrZhAHD9vJJ7oUH44h3B4kWsDIs1bxwt1GlMxEoyYCzDRkEqVb7zXROnLxz2w06jG6WlGTWprFok9qoKpEYQRHKtMSYh3j89LEMEdgGraqJU6aVnDb82mOCxiC9MmZFbtmggRu8FLcUV311dbqHZfUwKf3ON9KwtBNMO1D&X-Amz-Signature=25cdc07167cc723b45e6008e9f34875391701da27cedf21514f7a5eaa67855db&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNENTKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkHLfMZnQ4B640pN3WcX3S9xBmjQyHU0NSAdLAG3EFwIhAIyWOB3x5qAizde2J4CSokDAqk9SsB9SsbJ0onPjmbhxKv8DCEsQABoMNjM3NDIzMTgzODA1IgzY1bg6ILczaCQKl1cq3AOX6bhzr%2F4nqnyC1L3YbPS0WH3Cb%2BY61un4QJTkt0%2B9Vb2R82GWhxR0K0F%2BU%2BbLs%2FPycnHLjzsPmQk6PDHXxsgu1naFMsfLlPLz9ZPc%2FkdXUPDyZTKoVoIS%2FmK70DaOnroY%2BNEYNl%2BgzWfxemle11LUghj6tZ0k8ra659V2I%2Bk3nK7jRB%2BZpvn7E9ztpd5pKawka573jq%2BYzhO71Btr2QWAEAVVwOuK0qutL5yZ0q4SB3ZGZXmjJ2DOZnqck6nf7ItdwoWZPW9RcaxorH89QTuFaJ%2BhZNkyaackI8rLrxKZgeYRsXGghoSe1Ip953QbbZ47%2FfEPX7Tj5pUmwVjV41bkUx4vYtMCGcFiScBLTXehMBP37qqlZYNx2PTM7bTYq3S9zZZTnmb8xBnpZONNDAa2zcbiKVMQ2Ktuqv3wRRSvU96W%2BgG8QMVw%2BPXkvhLSdPZ0R8QGihgXyorFSrJGGh68Ug%2Ftm%2F7Cg%2B2JzdsvkEon%2F2tedAjliccWQpLXrFs%2FBSKFGD9OHIScMYwM5M1%2ForKkloPQuCElYPA9fH4VbKX1d%2F4E8Ehik3jcyza6248CK73MdEkZvHvjnMxqWl2zogpKZGUJ5UTC6fCXDJbiTFai3Ark5KPhjaJSBKCBsTCg3NLBBjqkAVz1BKHX%2BFqRHDF8Ds2WSDApBf1FrHgKrmjfCsp%2FQIoPcibK89k6sPbrZhAHD9vJJ7oUH44h3B4kWsDIs1bxwt1GlMxEoyYCzDRkEqVb7zXROnLxz2w06jG6WlGTWprFok9qoKpEYQRHKtMSYh3j89LEMEdgGraqJU6aVnDb82mOCxiC9MmZFbtmggRu8FLcUV311dbqHZfUwKf3ON9KwtBNMO1D&X-Amz-Signature=308093431b38c1a41ab945576f3d1db934c4442f6fa89b9f04d39e47d0eac18f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNENTKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkHLfMZnQ4B640pN3WcX3S9xBmjQyHU0NSAdLAG3EFwIhAIyWOB3x5qAizde2J4CSokDAqk9SsB9SsbJ0onPjmbhxKv8DCEsQABoMNjM3NDIzMTgzODA1IgzY1bg6ILczaCQKl1cq3AOX6bhzr%2F4nqnyC1L3YbPS0WH3Cb%2BY61un4QJTkt0%2B9Vb2R82GWhxR0K0F%2BU%2BbLs%2FPycnHLjzsPmQk6PDHXxsgu1naFMsfLlPLz9ZPc%2FkdXUPDyZTKoVoIS%2FmK70DaOnroY%2BNEYNl%2BgzWfxemle11LUghj6tZ0k8ra659V2I%2Bk3nK7jRB%2BZpvn7E9ztpd5pKawka573jq%2BYzhO71Btr2QWAEAVVwOuK0qutL5yZ0q4SB3ZGZXmjJ2DOZnqck6nf7ItdwoWZPW9RcaxorH89QTuFaJ%2BhZNkyaackI8rLrxKZgeYRsXGghoSe1Ip953QbbZ47%2FfEPX7Tj5pUmwVjV41bkUx4vYtMCGcFiScBLTXehMBP37qqlZYNx2PTM7bTYq3S9zZZTnmb8xBnpZONNDAa2zcbiKVMQ2Ktuqv3wRRSvU96W%2BgG8QMVw%2BPXkvhLSdPZ0R8QGihgXyorFSrJGGh68Ug%2Ftm%2F7Cg%2B2JzdsvkEon%2F2tedAjliccWQpLXrFs%2FBSKFGD9OHIScMYwM5M1%2ForKkloPQuCElYPA9fH4VbKX1d%2F4E8Ehik3jcyza6248CK73MdEkZvHvjnMxqWl2zogpKZGUJ5UTC6fCXDJbiTFai3Ark5KPhjaJSBKCBsTCg3NLBBjqkAVz1BKHX%2BFqRHDF8Ds2WSDApBf1FrHgKrmjfCsp%2FQIoPcibK89k6sPbrZhAHD9vJJ7oUH44h3B4kWsDIs1bxwt1GlMxEoyYCzDRkEqVb7zXROnLxz2w06jG6WlGTWprFok9qoKpEYQRHKtMSYh3j89LEMEdgGraqJU6aVnDb82mOCxiC9MmZFbtmggRu8FLcUV311dbqHZfUwKf3ON9KwtBNMO1D&X-Amz-Signature=b4615d722fc86b85605dd6b4809382cdbd1c960c6aa5dd4e7c0ce3e0754ded1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNENTKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkHLfMZnQ4B640pN3WcX3S9xBmjQyHU0NSAdLAG3EFwIhAIyWOB3x5qAizde2J4CSokDAqk9SsB9SsbJ0onPjmbhxKv8DCEsQABoMNjM3NDIzMTgzODA1IgzY1bg6ILczaCQKl1cq3AOX6bhzr%2F4nqnyC1L3YbPS0WH3Cb%2BY61un4QJTkt0%2B9Vb2R82GWhxR0K0F%2BU%2BbLs%2FPycnHLjzsPmQk6PDHXxsgu1naFMsfLlPLz9ZPc%2FkdXUPDyZTKoVoIS%2FmK70DaOnroY%2BNEYNl%2BgzWfxemle11LUghj6tZ0k8ra659V2I%2Bk3nK7jRB%2BZpvn7E9ztpd5pKawka573jq%2BYzhO71Btr2QWAEAVVwOuK0qutL5yZ0q4SB3ZGZXmjJ2DOZnqck6nf7ItdwoWZPW9RcaxorH89QTuFaJ%2BhZNkyaackI8rLrxKZgeYRsXGghoSe1Ip953QbbZ47%2FfEPX7Tj5pUmwVjV41bkUx4vYtMCGcFiScBLTXehMBP37qqlZYNx2PTM7bTYq3S9zZZTnmb8xBnpZONNDAa2zcbiKVMQ2Ktuqv3wRRSvU96W%2BgG8QMVw%2BPXkvhLSdPZ0R8QGihgXyorFSrJGGh68Ug%2Ftm%2F7Cg%2B2JzdsvkEon%2F2tedAjliccWQpLXrFs%2FBSKFGD9OHIScMYwM5M1%2ForKkloPQuCElYPA9fH4VbKX1d%2F4E8Ehik3jcyza6248CK73MdEkZvHvjnMxqWl2zogpKZGUJ5UTC6fCXDJbiTFai3Ark5KPhjaJSBKCBsTCg3NLBBjqkAVz1BKHX%2BFqRHDF8Ds2WSDApBf1FrHgKrmjfCsp%2FQIoPcibK89k6sPbrZhAHD9vJJ7oUH44h3B4kWsDIs1bxwt1GlMxEoyYCzDRkEqVb7zXROnLxz2w06jG6WlGTWprFok9qoKpEYQRHKtMSYh3j89LEMEdgGraqJU6aVnDb82mOCxiC9MmZFbtmggRu8FLcUV311dbqHZfUwKf3ON9KwtBNMO1D&X-Amz-Signature=0cb18fcb180fc180d10033d12e8eb489a623961836519c2a7be055bbd1646686&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNENTKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkHLfMZnQ4B640pN3WcX3S9xBmjQyHU0NSAdLAG3EFwIhAIyWOB3x5qAizde2J4CSokDAqk9SsB9SsbJ0onPjmbhxKv8DCEsQABoMNjM3NDIzMTgzODA1IgzY1bg6ILczaCQKl1cq3AOX6bhzr%2F4nqnyC1L3YbPS0WH3Cb%2BY61un4QJTkt0%2B9Vb2R82GWhxR0K0F%2BU%2BbLs%2FPycnHLjzsPmQk6PDHXxsgu1naFMsfLlPLz9ZPc%2FkdXUPDyZTKoVoIS%2FmK70DaOnroY%2BNEYNl%2BgzWfxemle11LUghj6tZ0k8ra659V2I%2Bk3nK7jRB%2BZpvn7E9ztpd5pKawka573jq%2BYzhO71Btr2QWAEAVVwOuK0qutL5yZ0q4SB3ZGZXmjJ2DOZnqck6nf7ItdwoWZPW9RcaxorH89QTuFaJ%2BhZNkyaackI8rLrxKZgeYRsXGghoSe1Ip953QbbZ47%2FfEPX7Tj5pUmwVjV41bkUx4vYtMCGcFiScBLTXehMBP37qqlZYNx2PTM7bTYq3S9zZZTnmb8xBnpZONNDAa2zcbiKVMQ2Ktuqv3wRRSvU96W%2BgG8QMVw%2BPXkvhLSdPZ0R8QGihgXyorFSrJGGh68Ug%2Ftm%2F7Cg%2B2JzdsvkEon%2F2tedAjliccWQpLXrFs%2FBSKFGD9OHIScMYwM5M1%2ForKkloPQuCElYPA9fH4VbKX1d%2F4E8Ehik3jcyza6248CK73MdEkZvHvjnMxqWl2zogpKZGUJ5UTC6fCXDJbiTFai3Ark5KPhjaJSBKCBsTCg3NLBBjqkAVz1BKHX%2BFqRHDF8Ds2WSDApBf1FrHgKrmjfCsp%2FQIoPcibK89k6sPbrZhAHD9vJJ7oUH44h3B4kWsDIs1bxwt1GlMxEoyYCzDRkEqVb7zXROnLxz2w06jG6WlGTWprFok9qoKpEYQRHKtMSYh3j89LEMEdgGraqJU6aVnDb82mOCxiC9MmZFbtmggRu8FLcUV311dbqHZfUwKf3ON9KwtBNMO1D&X-Amz-Signature=79b5f8d19f8aad79d745831badd3a43fddb90a41c17ff34d8364648349394322&X-Amz-SignedHeaders=host&x-id=GetObject)
