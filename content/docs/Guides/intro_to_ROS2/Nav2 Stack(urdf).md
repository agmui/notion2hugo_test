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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMCM3R3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFboXOUMlxdSy70pN9VG5biBxzNzoR9Kr0HuG%2B6DMD4xAiEAuxAlumSDKhXpNB9og4veN%2B6uiiMOsxxKLcxE0WnuWhUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3IkV8oNpM%2B7bopcCrcA238iM6sw%2B%2BCl5Xi%2Fkxq8mwMGHbsokA7mHcaSPKVIrGsAAU0gZsfGnVBDmBtmbOeZ5D9z%2BKbKSqohTeKtR4Y68cwv1g4Z2x8GbabG2V4aLqaIGKdyiPGvu9HTAxrKGIJSMWLzykADAl92xzOEwgeKTegafV30M7%2B6mmOwXqbXgvBzfDFn3NFCgfFV00nbhRvdoNDNwajSjYyD0L%2BNRDQKhGLv7f1jtyfWX%2B94IlDM%2FcXOcMbEbs9kIzX%2F2ks1P536ZcFdhsGcEjQthtaxj%2Fre%2BH5wySRResuMvOZ70m%2BEP0uhdFLl4F90uukyf4bkOBa%2ByP1XJ07Bb72bgHI9qGQTlce7pxcKnHR8qK0%2Biusu3LlO5m0y%2FdwYkEXNwQsIQWlVgxWdlCVd1nVDIr4QrEb6pzWCDUdlIJ1l%2BVn4H26CNohRvh768g5klPMzYq3OqFe2tqyQ%2Fp2%2BW5klygH8JMqAdyWW%2B77aJV15vVMnJ%2FJHt4%2BTA3%2FIUVFIIki20TXpf3LsrjEp2Sm2TMCD7ADDJHXceij9gfrA2m8OEOZPzLamUwLxZNvgcO%2BhAfG6JS1%2BQMdK2mlb%2Fu9OhLU8mW9e6%2BgtbZFtQkI52%2FdR4yjs1a6qK%2Fl0RPko2rW%2BFjvRJjjMP%2BOhcIGOqUB274jFaKwYHxuKTEGda1UC0Z5Degiw9a5pMgkMYz3YvoOs6hXSpCT5vz8argdGupQIMqQ8n9uVtLZidN5hPyfOfldkgxv9T3%2FzdqDjdsljdORJ20g89Jr%2BSCCO4FjRHmTDss52OLZju28rQPwvMwU4Td8m7pjYvMPcMw6IKsDitgdOg3tZeGT4DX0RCKrScXYIlxMvM6ClWEVZGEyL2rxxWtN8kuU&X-Amz-Signature=3c529fce7989a2356b8b8e922e56d8444e47014c8017f7fd97a7e964473a5429&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMCM3R3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFboXOUMlxdSy70pN9VG5biBxzNzoR9Kr0HuG%2B6DMD4xAiEAuxAlumSDKhXpNB9og4veN%2B6uiiMOsxxKLcxE0WnuWhUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3IkV8oNpM%2B7bopcCrcA238iM6sw%2B%2BCl5Xi%2Fkxq8mwMGHbsokA7mHcaSPKVIrGsAAU0gZsfGnVBDmBtmbOeZ5D9z%2BKbKSqohTeKtR4Y68cwv1g4Z2x8GbabG2V4aLqaIGKdyiPGvu9HTAxrKGIJSMWLzykADAl92xzOEwgeKTegafV30M7%2B6mmOwXqbXgvBzfDFn3NFCgfFV00nbhRvdoNDNwajSjYyD0L%2BNRDQKhGLv7f1jtyfWX%2B94IlDM%2FcXOcMbEbs9kIzX%2F2ks1P536ZcFdhsGcEjQthtaxj%2Fre%2BH5wySRResuMvOZ70m%2BEP0uhdFLl4F90uukyf4bkOBa%2ByP1XJ07Bb72bgHI9qGQTlce7pxcKnHR8qK0%2Biusu3LlO5m0y%2FdwYkEXNwQsIQWlVgxWdlCVd1nVDIr4QrEb6pzWCDUdlIJ1l%2BVn4H26CNohRvh768g5klPMzYq3OqFe2tqyQ%2Fp2%2BW5klygH8JMqAdyWW%2B77aJV15vVMnJ%2FJHt4%2BTA3%2FIUVFIIki20TXpf3LsrjEp2Sm2TMCD7ADDJHXceij9gfrA2m8OEOZPzLamUwLxZNvgcO%2BhAfG6JS1%2BQMdK2mlb%2Fu9OhLU8mW9e6%2BgtbZFtQkI52%2FdR4yjs1a6qK%2Fl0RPko2rW%2BFjvRJjjMP%2BOhcIGOqUB274jFaKwYHxuKTEGda1UC0Z5Degiw9a5pMgkMYz3YvoOs6hXSpCT5vz8argdGupQIMqQ8n9uVtLZidN5hPyfOfldkgxv9T3%2FzdqDjdsljdORJ20g89Jr%2BSCCO4FjRHmTDss52OLZju28rQPwvMwU4Td8m7pjYvMPcMw6IKsDitgdOg3tZeGT4DX0RCKrScXYIlxMvM6ClWEVZGEyL2rxxWtN8kuU&X-Amz-Signature=22bc4c7c53f04b38b9ed573ed17eab551f1f5e7f47d3ab9046be76a2059d866c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMCM3R3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFboXOUMlxdSy70pN9VG5biBxzNzoR9Kr0HuG%2B6DMD4xAiEAuxAlumSDKhXpNB9og4veN%2B6uiiMOsxxKLcxE0WnuWhUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3IkV8oNpM%2B7bopcCrcA238iM6sw%2B%2BCl5Xi%2Fkxq8mwMGHbsokA7mHcaSPKVIrGsAAU0gZsfGnVBDmBtmbOeZ5D9z%2BKbKSqohTeKtR4Y68cwv1g4Z2x8GbabG2V4aLqaIGKdyiPGvu9HTAxrKGIJSMWLzykADAl92xzOEwgeKTegafV30M7%2B6mmOwXqbXgvBzfDFn3NFCgfFV00nbhRvdoNDNwajSjYyD0L%2BNRDQKhGLv7f1jtyfWX%2B94IlDM%2FcXOcMbEbs9kIzX%2F2ks1P536ZcFdhsGcEjQthtaxj%2Fre%2BH5wySRResuMvOZ70m%2BEP0uhdFLl4F90uukyf4bkOBa%2ByP1XJ07Bb72bgHI9qGQTlce7pxcKnHR8qK0%2Biusu3LlO5m0y%2FdwYkEXNwQsIQWlVgxWdlCVd1nVDIr4QrEb6pzWCDUdlIJ1l%2BVn4H26CNohRvh768g5klPMzYq3OqFe2tqyQ%2Fp2%2BW5klygH8JMqAdyWW%2B77aJV15vVMnJ%2FJHt4%2BTA3%2FIUVFIIki20TXpf3LsrjEp2Sm2TMCD7ADDJHXceij9gfrA2m8OEOZPzLamUwLxZNvgcO%2BhAfG6JS1%2BQMdK2mlb%2Fu9OhLU8mW9e6%2BgtbZFtQkI52%2FdR4yjs1a6qK%2Fl0RPko2rW%2BFjvRJjjMP%2BOhcIGOqUB274jFaKwYHxuKTEGda1UC0Z5Degiw9a5pMgkMYz3YvoOs6hXSpCT5vz8argdGupQIMqQ8n9uVtLZidN5hPyfOfldkgxv9T3%2FzdqDjdsljdORJ20g89Jr%2BSCCO4FjRHmTDss52OLZju28rQPwvMwU4Td8m7pjYvMPcMw6IKsDitgdOg3tZeGT4DX0RCKrScXYIlxMvM6ClWEVZGEyL2rxxWtN8kuU&X-Amz-Signature=d81fc0ee3fc9178c9c88c771082f2609650e296c7ba643e4f544f06eeede3919&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMCM3R3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFboXOUMlxdSy70pN9VG5biBxzNzoR9Kr0HuG%2B6DMD4xAiEAuxAlumSDKhXpNB9og4veN%2B6uiiMOsxxKLcxE0WnuWhUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3IkV8oNpM%2B7bopcCrcA238iM6sw%2B%2BCl5Xi%2Fkxq8mwMGHbsokA7mHcaSPKVIrGsAAU0gZsfGnVBDmBtmbOeZ5D9z%2BKbKSqohTeKtR4Y68cwv1g4Z2x8GbabG2V4aLqaIGKdyiPGvu9HTAxrKGIJSMWLzykADAl92xzOEwgeKTegafV30M7%2B6mmOwXqbXgvBzfDFn3NFCgfFV00nbhRvdoNDNwajSjYyD0L%2BNRDQKhGLv7f1jtyfWX%2B94IlDM%2FcXOcMbEbs9kIzX%2F2ks1P536ZcFdhsGcEjQthtaxj%2Fre%2BH5wySRResuMvOZ70m%2BEP0uhdFLl4F90uukyf4bkOBa%2ByP1XJ07Bb72bgHI9qGQTlce7pxcKnHR8qK0%2Biusu3LlO5m0y%2FdwYkEXNwQsIQWlVgxWdlCVd1nVDIr4QrEb6pzWCDUdlIJ1l%2BVn4H26CNohRvh768g5klPMzYq3OqFe2tqyQ%2Fp2%2BW5klygH8JMqAdyWW%2B77aJV15vVMnJ%2FJHt4%2BTA3%2FIUVFIIki20TXpf3LsrjEp2Sm2TMCD7ADDJHXceij9gfrA2m8OEOZPzLamUwLxZNvgcO%2BhAfG6JS1%2BQMdK2mlb%2Fu9OhLU8mW9e6%2BgtbZFtQkI52%2FdR4yjs1a6qK%2Fl0RPko2rW%2BFjvRJjjMP%2BOhcIGOqUB274jFaKwYHxuKTEGda1UC0Z5Degiw9a5pMgkMYz3YvoOs6hXSpCT5vz8argdGupQIMqQ8n9uVtLZidN5hPyfOfldkgxv9T3%2FzdqDjdsljdORJ20g89Jr%2BSCCO4FjRHmTDss52OLZju28rQPwvMwU4Td8m7pjYvMPcMw6IKsDitgdOg3tZeGT4DX0RCKrScXYIlxMvM6ClWEVZGEyL2rxxWtN8kuU&X-Amz-Signature=24adca6f815f5b32fdd2a3f4b3d51c4bf98da36fa8e727674e822e41f56473c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMCM3R3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFboXOUMlxdSy70pN9VG5biBxzNzoR9Kr0HuG%2B6DMD4xAiEAuxAlumSDKhXpNB9og4veN%2B6uiiMOsxxKLcxE0WnuWhUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3IkV8oNpM%2B7bopcCrcA238iM6sw%2B%2BCl5Xi%2Fkxq8mwMGHbsokA7mHcaSPKVIrGsAAU0gZsfGnVBDmBtmbOeZ5D9z%2BKbKSqohTeKtR4Y68cwv1g4Z2x8GbabG2V4aLqaIGKdyiPGvu9HTAxrKGIJSMWLzykADAl92xzOEwgeKTegafV30M7%2B6mmOwXqbXgvBzfDFn3NFCgfFV00nbhRvdoNDNwajSjYyD0L%2BNRDQKhGLv7f1jtyfWX%2B94IlDM%2FcXOcMbEbs9kIzX%2F2ks1P536ZcFdhsGcEjQthtaxj%2Fre%2BH5wySRResuMvOZ70m%2BEP0uhdFLl4F90uukyf4bkOBa%2ByP1XJ07Bb72bgHI9qGQTlce7pxcKnHR8qK0%2Biusu3LlO5m0y%2FdwYkEXNwQsIQWlVgxWdlCVd1nVDIr4QrEb6pzWCDUdlIJ1l%2BVn4H26CNohRvh768g5klPMzYq3OqFe2tqyQ%2Fp2%2BW5klygH8JMqAdyWW%2B77aJV15vVMnJ%2FJHt4%2BTA3%2FIUVFIIki20TXpf3LsrjEp2Sm2TMCD7ADDJHXceij9gfrA2m8OEOZPzLamUwLxZNvgcO%2BhAfG6JS1%2BQMdK2mlb%2Fu9OhLU8mW9e6%2BgtbZFtQkI52%2FdR4yjs1a6qK%2Fl0RPko2rW%2BFjvRJjjMP%2BOhcIGOqUB274jFaKwYHxuKTEGda1UC0Z5Degiw9a5pMgkMYz3YvoOs6hXSpCT5vz8argdGupQIMqQ8n9uVtLZidN5hPyfOfldkgxv9T3%2FzdqDjdsljdORJ20g89Jr%2BSCCO4FjRHmTDss52OLZju28rQPwvMwU4Td8m7pjYvMPcMw6IKsDitgdOg3tZeGT4DX0RCKrScXYIlxMvM6ClWEVZGEyL2rxxWtN8kuU&X-Amz-Signature=e52df72106e944cb9e46549b1e9e80dd9b13090095f5dd328781bc63fa1ee6b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMCM3R3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFboXOUMlxdSy70pN9VG5biBxzNzoR9Kr0HuG%2B6DMD4xAiEAuxAlumSDKhXpNB9og4veN%2B6uiiMOsxxKLcxE0WnuWhUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3IkV8oNpM%2B7bopcCrcA238iM6sw%2B%2BCl5Xi%2Fkxq8mwMGHbsokA7mHcaSPKVIrGsAAU0gZsfGnVBDmBtmbOeZ5D9z%2BKbKSqohTeKtR4Y68cwv1g4Z2x8GbabG2V4aLqaIGKdyiPGvu9HTAxrKGIJSMWLzykADAl92xzOEwgeKTegafV30M7%2B6mmOwXqbXgvBzfDFn3NFCgfFV00nbhRvdoNDNwajSjYyD0L%2BNRDQKhGLv7f1jtyfWX%2B94IlDM%2FcXOcMbEbs9kIzX%2F2ks1P536ZcFdhsGcEjQthtaxj%2Fre%2BH5wySRResuMvOZ70m%2BEP0uhdFLl4F90uukyf4bkOBa%2ByP1XJ07Bb72bgHI9qGQTlce7pxcKnHR8qK0%2Biusu3LlO5m0y%2FdwYkEXNwQsIQWlVgxWdlCVd1nVDIr4QrEb6pzWCDUdlIJ1l%2BVn4H26CNohRvh768g5klPMzYq3OqFe2tqyQ%2Fp2%2BW5klygH8JMqAdyWW%2B77aJV15vVMnJ%2FJHt4%2BTA3%2FIUVFIIki20TXpf3LsrjEp2Sm2TMCD7ADDJHXceij9gfrA2m8OEOZPzLamUwLxZNvgcO%2BhAfG6JS1%2BQMdK2mlb%2Fu9OhLU8mW9e6%2BgtbZFtQkI52%2FdR4yjs1a6qK%2Fl0RPko2rW%2BFjvRJjjMP%2BOhcIGOqUB274jFaKwYHxuKTEGda1UC0Z5Degiw9a5pMgkMYz3YvoOs6hXSpCT5vz8argdGupQIMqQ8n9uVtLZidN5hPyfOfldkgxv9T3%2FzdqDjdsljdORJ20g89Jr%2BSCCO4FjRHmTDss52OLZju28rQPwvMwU4Td8m7pjYvMPcMw6IKsDitgdOg3tZeGT4DX0RCKrScXYIlxMvM6ClWEVZGEyL2rxxWtN8kuU&X-Amz-Signature=4be6f788fa06758634e9451e854b80faaaa2dc335e8700ba4e285841aee0edd3&X-Amz-SignedHeaders=host&x-id=GetObject)
