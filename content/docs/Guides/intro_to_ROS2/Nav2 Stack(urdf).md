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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KR5VHVU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCxIXuG8Vt2bFus6kppqv3Nm4fYUvXwsIpYQz2TAzrDfAIhANvSJwJcOPQuMQ%2BYp4YNhCDGUn8g8oIhZlRI9vX0VfsBKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc4waVWC1tVD6qtxAq3AM9%2FoEo6kkOxso8MHsxcrMywNWNdwKySJ3PQ315Ob1RK04MS4uP1vrra4C7SfxfViXXuQW%2BnFSgyOyOzn7dpxUX75N8AKc1nWknLctvzOFfT4kkfess3kESjmmltdLcRYcK4VbgPGBOeX%2BUY2kkPGH8rXzDlCvNc39FnEqfVP1RZrosLARV%2FXrkyNNIdAo9Mp%2BLXLzTjEJyIBisOmUo%2BMBsTYSs3QpmBiWg%2FzLB47lJZJul3gM5xT4ssvs4SfnJKF%2BgXgnIo2kcClG2vzvJkMVWq6ajNjMEabeTmH3m7qnZ01jgPWTIGD8nHoNbVjgV8GvLNRsl3%2F6Jte%2FMHXj0JF20ra%2BPK9joEscYWRZasP8POE%2BhQZM0W1fPlg0WD3NDopKoRWZHlzCJ6lShQUdsggILIxEWvKZG7KKguyjO%2BMkNcDUT9KSmAaR7QtENDthJPiaRWvdL0Zk6hZXf84zjCYX8Zf%2BVQWnshcK39xaLOD003EKeZ21nncISD4j54L824nM%2FuSkRDVCIA3XQaF3Dr3tBFrqDtQQ%2BQWk%2Bsk4%2BwlmMmQFkmDFC51BhlEfIPn7vdHXOkfPmeHGC5pomMTrwJveLowdQRVi3ZZziPAFv%2FpdQi41PK32Sm0AOsdhmEzCI19LABjqkAVBOIquXofCRYaRxySVY19KeK2VLo1XiYe5%2BJYE7EgU7aUAtPJVGsq7HuNHOtXDTx69DREATbDJogM7I%2BzeTeOqVjLXpp6X7FiklRUuU%2BdXZJKTqJuYezJ4h903lRyWIe%2FFZo4hR%2BAg9l67IKEvqBsvyEUhuRGqkKcVa42XVvp9yZoMKxSMgmzDd3EnUiZDhZI0QcZiXxT3b4UaDWw0pornwXpGP&X-Amz-Signature=6f1db317a386d114d2be757e21eebeb3848c720448f3291373d6fbdb8b5ba2db&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KR5VHVU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCxIXuG8Vt2bFus6kppqv3Nm4fYUvXwsIpYQz2TAzrDfAIhANvSJwJcOPQuMQ%2BYp4YNhCDGUn8g8oIhZlRI9vX0VfsBKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc4waVWC1tVD6qtxAq3AM9%2FoEo6kkOxso8MHsxcrMywNWNdwKySJ3PQ315Ob1RK04MS4uP1vrra4C7SfxfViXXuQW%2BnFSgyOyOzn7dpxUX75N8AKc1nWknLctvzOFfT4kkfess3kESjmmltdLcRYcK4VbgPGBOeX%2BUY2kkPGH8rXzDlCvNc39FnEqfVP1RZrosLARV%2FXrkyNNIdAo9Mp%2BLXLzTjEJyIBisOmUo%2BMBsTYSs3QpmBiWg%2FzLB47lJZJul3gM5xT4ssvs4SfnJKF%2BgXgnIo2kcClG2vzvJkMVWq6ajNjMEabeTmH3m7qnZ01jgPWTIGD8nHoNbVjgV8GvLNRsl3%2F6Jte%2FMHXj0JF20ra%2BPK9joEscYWRZasP8POE%2BhQZM0W1fPlg0WD3NDopKoRWZHlzCJ6lShQUdsggILIxEWvKZG7KKguyjO%2BMkNcDUT9KSmAaR7QtENDthJPiaRWvdL0Zk6hZXf84zjCYX8Zf%2BVQWnshcK39xaLOD003EKeZ21nncISD4j54L824nM%2FuSkRDVCIA3XQaF3Dr3tBFrqDtQQ%2BQWk%2Bsk4%2BwlmMmQFkmDFC51BhlEfIPn7vdHXOkfPmeHGC5pomMTrwJveLowdQRVi3ZZziPAFv%2FpdQi41PK32Sm0AOsdhmEzCI19LABjqkAVBOIquXofCRYaRxySVY19KeK2VLo1XiYe5%2BJYE7EgU7aUAtPJVGsq7HuNHOtXDTx69DREATbDJogM7I%2BzeTeOqVjLXpp6X7FiklRUuU%2BdXZJKTqJuYezJ4h903lRyWIe%2FFZo4hR%2BAg9l67IKEvqBsvyEUhuRGqkKcVa42XVvp9yZoMKxSMgmzDd3EnUiZDhZI0QcZiXxT3b4UaDWw0pornwXpGP&X-Amz-Signature=59c628d6e6ad7e280e5328c584a7aa63453215042aa5d22e59f90c3cc3b8384b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KR5VHVU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCxIXuG8Vt2bFus6kppqv3Nm4fYUvXwsIpYQz2TAzrDfAIhANvSJwJcOPQuMQ%2BYp4YNhCDGUn8g8oIhZlRI9vX0VfsBKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc4waVWC1tVD6qtxAq3AM9%2FoEo6kkOxso8MHsxcrMywNWNdwKySJ3PQ315Ob1RK04MS4uP1vrra4C7SfxfViXXuQW%2BnFSgyOyOzn7dpxUX75N8AKc1nWknLctvzOFfT4kkfess3kESjmmltdLcRYcK4VbgPGBOeX%2BUY2kkPGH8rXzDlCvNc39FnEqfVP1RZrosLARV%2FXrkyNNIdAo9Mp%2BLXLzTjEJyIBisOmUo%2BMBsTYSs3QpmBiWg%2FzLB47lJZJul3gM5xT4ssvs4SfnJKF%2BgXgnIo2kcClG2vzvJkMVWq6ajNjMEabeTmH3m7qnZ01jgPWTIGD8nHoNbVjgV8GvLNRsl3%2F6Jte%2FMHXj0JF20ra%2BPK9joEscYWRZasP8POE%2BhQZM0W1fPlg0WD3NDopKoRWZHlzCJ6lShQUdsggILIxEWvKZG7KKguyjO%2BMkNcDUT9KSmAaR7QtENDthJPiaRWvdL0Zk6hZXf84zjCYX8Zf%2BVQWnshcK39xaLOD003EKeZ21nncISD4j54L824nM%2FuSkRDVCIA3XQaF3Dr3tBFrqDtQQ%2BQWk%2Bsk4%2BwlmMmQFkmDFC51BhlEfIPn7vdHXOkfPmeHGC5pomMTrwJveLowdQRVi3ZZziPAFv%2FpdQi41PK32Sm0AOsdhmEzCI19LABjqkAVBOIquXofCRYaRxySVY19KeK2VLo1XiYe5%2BJYE7EgU7aUAtPJVGsq7HuNHOtXDTx69DREATbDJogM7I%2BzeTeOqVjLXpp6X7FiklRUuU%2BdXZJKTqJuYezJ4h903lRyWIe%2FFZo4hR%2BAg9l67IKEvqBsvyEUhuRGqkKcVa42XVvp9yZoMKxSMgmzDd3EnUiZDhZI0QcZiXxT3b4UaDWw0pornwXpGP&X-Amz-Signature=fee2e0549e6f2adf4c2ec7684a3bbfd8420c2691ad85f2ea8735cd7237c177b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KR5VHVU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCxIXuG8Vt2bFus6kppqv3Nm4fYUvXwsIpYQz2TAzrDfAIhANvSJwJcOPQuMQ%2BYp4YNhCDGUn8g8oIhZlRI9vX0VfsBKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc4waVWC1tVD6qtxAq3AM9%2FoEo6kkOxso8MHsxcrMywNWNdwKySJ3PQ315Ob1RK04MS4uP1vrra4C7SfxfViXXuQW%2BnFSgyOyOzn7dpxUX75N8AKc1nWknLctvzOFfT4kkfess3kESjmmltdLcRYcK4VbgPGBOeX%2BUY2kkPGH8rXzDlCvNc39FnEqfVP1RZrosLARV%2FXrkyNNIdAo9Mp%2BLXLzTjEJyIBisOmUo%2BMBsTYSs3QpmBiWg%2FzLB47lJZJul3gM5xT4ssvs4SfnJKF%2BgXgnIo2kcClG2vzvJkMVWq6ajNjMEabeTmH3m7qnZ01jgPWTIGD8nHoNbVjgV8GvLNRsl3%2F6Jte%2FMHXj0JF20ra%2BPK9joEscYWRZasP8POE%2BhQZM0W1fPlg0WD3NDopKoRWZHlzCJ6lShQUdsggILIxEWvKZG7KKguyjO%2BMkNcDUT9KSmAaR7QtENDthJPiaRWvdL0Zk6hZXf84zjCYX8Zf%2BVQWnshcK39xaLOD003EKeZ21nncISD4j54L824nM%2FuSkRDVCIA3XQaF3Dr3tBFrqDtQQ%2BQWk%2Bsk4%2BwlmMmQFkmDFC51BhlEfIPn7vdHXOkfPmeHGC5pomMTrwJveLowdQRVi3ZZziPAFv%2FpdQi41PK32Sm0AOsdhmEzCI19LABjqkAVBOIquXofCRYaRxySVY19KeK2VLo1XiYe5%2BJYE7EgU7aUAtPJVGsq7HuNHOtXDTx69DREATbDJogM7I%2BzeTeOqVjLXpp6X7FiklRUuU%2BdXZJKTqJuYezJ4h903lRyWIe%2FFZo4hR%2BAg9l67IKEvqBsvyEUhuRGqkKcVa42XVvp9yZoMKxSMgmzDd3EnUiZDhZI0QcZiXxT3b4UaDWw0pornwXpGP&X-Amz-Signature=daa2cfdb5df699df52c156101ec39bfb5904ba25b780c649ffae112ca6929084&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KR5VHVU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCxIXuG8Vt2bFus6kppqv3Nm4fYUvXwsIpYQz2TAzrDfAIhANvSJwJcOPQuMQ%2BYp4YNhCDGUn8g8oIhZlRI9vX0VfsBKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc4waVWC1tVD6qtxAq3AM9%2FoEo6kkOxso8MHsxcrMywNWNdwKySJ3PQ315Ob1RK04MS4uP1vrra4C7SfxfViXXuQW%2BnFSgyOyOzn7dpxUX75N8AKc1nWknLctvzOFfT4kkfess3kESjmmltdLcRYcK4VbgPGBOeX%2BUY2kkPGH8rXzDlCvNc39FnEqfVP1RZrosLARV%2FXrkyNNIdAo9Mp%2BLXLzTjEJyIBisOmUo%2BMBsTYSs3QpmBiWg%2FzLB47lJZJul3gM5xT4ssvs4SfnJKF%2BgXgnIo2kcClG2vzvJkMVWq6ajNjMEabeTmH3m7qnZ01jgPWTIGD8nHoNbVjgV8GvLNRsl3%2F6Jte%2FMHXj0JF20ra%2BPK9joEscYWRZasP8POE%2BhQZM0W1fPlg0WD3NDopKoRWZHlzCJ6lShQUdsggILIxEWvKZG7KKguyjO%2BMkNcDUT9KSmAaR7QtENDthJPiaRWvdL0Zk6hZXf84zjCYX8Zf%2BVQWnshcK39xaLOD003EKeZ21nncISD4j54L824nM%2FuSkRDVCIA3XQaF3Dr3tBFrqDtQQ%2BQWk%2Bsk4%2BwlmMmQFkmDFC51BhlEfIPn7vdHXOkfPmeHGC5pomMTrwJveLowdQRVi3ZZziPAFv%2FpdQi41PK32Sm0AOsdhmEzCI19LABjqkAVBOIquXofCRYaRxySVY19KeK2VLo1XiYe5%2BJYE7EgU7aUAtPJVGsq7HuNHOtXDTx69DREATbDJogM7I%2BzeTeOqVjLXpp6X7FiklRUuU%2BdXZJKTqJuYezJ4h903lRyWIe%2FFZo4hR%2BAg9l67IKEvqBsvyEUhuRGqkKcVa42XVvp9yZoMKxSMgmzDd3EnUiZDhZI0QcZiXxT3b4UaDWw0pornwXpGP&X-Amz-Signature=e3fba13027d45df4532813c54d46eee2e199a1e157fb050a6a160af0f19e8812&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KR5VHVU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCxIXuG8Vt2bFus6kppqv3Nm4fYUvXwsIpYQz2TAzrDfAIhANvSJwJcOPQuMQ%2BYp4YNhCDGUn8g8oIhZlRI9vX0VfsBKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc4waVWC1tVD6qtxAq3AM9%2FoEo6kkOxso8MHsxcrMywNWNdwKySJ3PQ315Ob1RK04MS4uP1vrra4C7SfxfViXXuQW%2BnFSgyOyOzn7dpxUX75N8AKc1nWknLctvzOFfT4kkfess3kESjmmltdLcRYcK4VbgPGBOeX%2BUY2kkPGH8rXzDlCvNc39FnEqfVP1RZrosLARV%2FXrkyNNIdAo9Mp%2BLXLzTjEJyIBisOmUo%2BMBsTYSs3QpmBiWg%2FzLB47lJZJul3gM5xT4ssvs4SfnJKF%2BgXgnIo2kcClG2vzvJkMVWq6ajNjMEabeTmH3m7qnZ01jgPWTIGD8nHoNbVjgV8GvLNRsl3%2F6Jte%2FMHXj0JF20ra%2BPK9joEscYWRZasP8POE%2BhQZM0W1fPlg0WD3NDopKoRWZHlzCJ6lShQUdsggILIxEWvKZG7KKguyjO%2BMkNcDUT9KSmAaR7QtENDthJPiaRWvdL0Zk6hZXf84zjCYX8Zf%2BVQWnshcK39xaLOD003EKeZ21nncISD4j54L824nM%2FuSkRDVCIA3XQaF3Dr3tBFrqDtQQ%2BQWk%2Bsk4%2BwlmMmQFkmDFC51BhlEfIPn7vdHXOkfPmeHGC5pomMTrwJveLowdQRVi3ZZziPAFv%2FpdQi41PK32Sm0AOsdhmEzCI19LABjqkAVBOIquXofCRYaRxySVY19KeK2VLo1XiYe5%2BJYE7EgU7aUAtPJVGsq7HuNHOtXDTx69DREATbDJogM7I%2BzeTeOqVjLXpp6X7FiklRUuU%2BdXZJKTqJuYezJ4h903lRyWIe%2FFZo4hR%2BAg9l67IKEvqBsvyEUhuRGqkKcVa42XVvp9yZoMKxSMgmzDd3EnUiZDhZI0QcZiXxT3b4UaDWw0pornwXpGP&X-Amz-Signature=a823c5ab03b45a213095a6dae29de7f9cce00276a8319d3e517f274eb03f8514&X-Amz-SignedHeaders=host&x-id=GetObject)
