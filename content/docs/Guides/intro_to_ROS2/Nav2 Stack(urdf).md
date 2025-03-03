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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2XZYLA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4VoGHLgeSLL%2F1q0c8fr2viYM4hETEM39pUZplGWA9XQIhAPl1B145nNuGc940oiW4PUP1JLdVWwUFeMe2BPsZCgd5KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB7h1VDWuuq20yaTAq3APzLMdYbaSvmxuBB7LAUqzprsRQmnt%2FHpofAdv6NYATrDtRR2flj294adbhIXEWMNhjUtcgj2vcY3vZohIouI0m7bgw9Y9mYA4R6oDjNGfjZYJQ0bmwqumWEc98biibauJvEssjxVTEbgDjW6Nus2BCBsIBUnLiPI0vFiN8xuV9Xw9lu29KRtKUS7bz5%2BSWVGsz62jY6FuN6E4v5WP2W1rYJ4KQY6uctCnuVPgk5qO%2BjC8sdbcnReAyzKZ4%2BuwikKbmTlO%2F56grThw9tMTGQPFFQxIKvSuD0X9%2B2TfKu8ScK9vZMvHZU%2BVHSeKG%2BTa5Ps69irfyDJlhPHfSNSbuSwZvdNBhPk3WqPtTQ62WaK0ZHARr3EJJJvsZ9WJh4LQOn06H%2FW4u94%2FZRZiho1x7EUCU7g%2FV0NYAzQGstAnoQDIHID6RZmj2Teu%2BT%2BD7A5sCuzSspJoo8vArzZZO%2B7nTnZ9gVeHQIhham13UriqXfPyCBgc7IsigwqMyTFI0L3tZurSbuTbItxxgyKSLjQM%2B63tjzSO9EgKTyLnLt2DrvM0EJskrLnR%2BB1wLSvW0azsfZkE1UOaROXCj8a%2FlZrY%2Bor2hBXcUm1%2F21PgMBrScnGjokS%2F4xDMKqoa20ej05TCVoJS%2BBjqkAeJMCAF%2FqyFaJ3%2FJsNemcRZgs0DwMjPd0qUpxfFPJBQMen1ZHhw9EvTH%2Fzv1Mv1lLjTCyIDwa9dT89Z4SCQ42YDNsqx8ZD53J7Z4YQEXUWhJNYS94uUjVdEr9MjClk%2B0f5pVXYc30riDvrejWYR7U3wnJRs1UZjpNLD9zEPHCiu%2BM21jzBIMj22XlsnR9Hb6Trg%2BtrZjL4CMNnZvrb8OeV1mQB6%2B&X-Amz-Signature=2895e54976fbb13652a7ebb693da4973c64d70418014ce5bddebb43ceb400490&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2XZYLA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4VoGHLgeSLL%2F1q0c8fr2viYM4hETEM39pUZplGWA9XQIhAPl1B145nNuGc940oiW4PUP1JLdVWwUFeMe2BPsZCgd5KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB7h1VDWuuq20yaTAq3APzLMdYbaSvmxuBB7LAUqzprsRQmnt%2FHpofAdv6NYATrDtRR2flj294adbhIXEWMNhjUtcgj2vcY3vZohIouI0m7bgw9Y9mYA4R6oDjNGfjZYJQ0bmwqumWEc98biibauJvEssjxVTEbgDjW6Nus2BCBsIBUnLiPI0vFiN8xuV9Xw9lu29KRtKUS7bz5%2BSWVGsz62jY6FuN6E4v5WP2W1rYJ4KQY6uctCnuVPgk5qO%2BjC8sdbcnReAyzKZ4%2BuwikKbmTlO%2F56grThw9tMTGQPFFQxIKvSuD0X9%2B2TfKu8ScK9vZMvHZU%2BVHSeKG%2BTa5Ps69irfyDJlhPHfSNSbuSwZvdNBhPk3WqPtTQ62WaK0ZHARr3EJJJvsZ9WJh4LQOn06H%2FW4u94%2FZRZiho1x7EUCU7g%2FV0NYAzQGstAnoQDIHID6RZmj2Teu%2BT%2BD7A5sCuzSspJoo8vArzZZO%2B7nTnZ9gVeHQIhham13UriqXfPyCBgc7IsigwqMyTFI0L3tZurSbuTbItxxgyKSLjQM%2B63tjzSO9EgKTyLnLt2DrvM0EJskrLnR%2BB1wLSvW0azsfZkE1UOaROXCj8a%2FlZrY%2Bor2hBXcUm1%2F21PgMBrScnGjokS%2F4xDMKqoa20ej05TCVoJS%2BBjqkAeJMCAF%2FqyFaJ3%2FJsNemcRZgs0DwMjPd0qUpxfFPJBQMen1ZHhw9EvTH%2Fzv1Mv1lLjTCyIDwa9dT89Z4SCQ42YDNsqx8ZD53J7Z4YQEXUWhJNYS94uUjVdEr9MjClk%2B0f5pVXYc30riDvrejWYR7U3wnJRs1UZjpNLD9zEPHCiu%2BM21jzBIMj22XlsnR9Hb6Trg%2BtrZjL4CMNnZvrb8OeV1mQB6%2B&X-Amz-Signature=aae1a840d1725a35173c31d6f1388d30b4157f139f9491ef4ab7854b01993327&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2XZYLA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4VoGHLgeSLL%2F1q0c8fr2viYM4hETEM39pUZplGWA9XQIhAPl1B145nNuGc940oiW4PUP1JLdVWwUFeMe2BPsZCgd5KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB7h1VDWuuq20yaTAq3APzLMdYbaSvmxuBB7LAUqzprsRQmnt%2FHpofAdv6NYATrDtRR2flj294adbhIXEWMNhjUtcgj2vcY3vZohIouI0m7bgw9Y9mYA4R6oDjNGfjZYJQ0bmwqumWEc98biibauJvEssjxVTEbgDjW6Nus2BCBsIBUnLiPI0vFiN8xuV9Xw9lu29KRtKUS7bz5%2BSWVGsz62jY6FuN6E4v5WP2W1rYJ4KQY6uctCnuVPgk5qO%2BjC8sdbcnReAyzKZ4%2BuwikKbmTlO%2F56grThw9tMTGQPFFQxIKvSuD0X9%2B2TfKu8ScK9vZMvHZU%2BVHSeKG%2BTa5Ps69irfyDJlhPHfSNSbuSwZvdNBhPk3WqPtTQ62WaK0ZHARr3EJJJvsZ9WJh4LQOn06H%2FW4u94%2FZRZiho1x7EUCU7g%2FV0NYAzQGstAnoQDIHID6RZmj2Teu%2BT%2BD7A5sCuzSspJoo8vArzZZO%2B7nTnZ9gVeHQIhham13UriqXfPyCBgc7IsigwqMyTFI0L3tZurSbuTbItxxgyKSLjQM%2B63tjzSO9EgKTyLnLt2DrvM0EJskrLnR%2BB1wLSvW0azsfZkE1UOaROXCj8a%2FlZrY%2Bor2hBXcUm1%2F21PgMBrScnGjokS%2F4xDMKqoa20ej05TCVoJS%2BBjqkAeJMCAF%2FqyFaJ3%2FJsNemcRZgs0DwMjPd0qUpxfFPJBQMen1ZHhw9EvTH%2Fzv1Mv1lLjTCyIDwa9dT89Z4SCQ42YDNsqx8ZD53J7Z4YQEXUWhJNYS94uUjVdEr9MjClk%2B0f5pVXYc30riDvrejWYR7U3wnJRs1UZjpNLD9zEPHCiu%2BM21jzBIMj22XlsnR9Hb6Trg%2BtrZjL4CMNnZvrb8OeV1mQB6%2B&X-Amz-Signature=44ffec611028cd78aecb32288117598dcb4f38c5fecc4038ee45612540d2a526&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2XZYLA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4VoGHLgeSLL%2F1q0c8fr2viYM4hETEM39pUZplGWA9XQIhAPl1B145nNuGc940oiW4PUP1JLdVWwUFeMe2BPsZCgd5KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB7h1VDWuuq20yaTAq3APzLMdYbaSvmxuBB7LAUqzprsRQmnt%2FHpofAdv6NYATrDtRR2flj294adbhIXEWMNhjUtcgj2vcY3vZohIouI0m7bgw9Y9mYA4R6oDjNGfjZYJQ0bmwqumWEc98biibauJvEssjxVTEbgDjW6Nus2BCBsIBUnLiPI0vFiN8xuV9Xw9lu29KRtKUS7bz5%2BSWVGsz62jY6FuN6E4v5WP2W1rYJ4KQY6uctCnuVPgk5qO%2BjC8sdbcnReAyzKZ4%2BuwikKbmTlO%2F56grThw9tMTGQPFFQxIKvSuD0X9%2B2TfKu8ScK9vZMvHZU%2BVHSeKG%2BTa5Ps69irfyDJlhPHfSNSbuSwZvdNBhPk3WqPtTQ62WaK0ZHARr3EJJJvsZ9WJh4LQOn06H%2FW4u94%2FZRZiho1x7EUCU7g%2FV0NYAzQGstAnoQDIHID6RZmj2Teu%2BT%2BD7A5sCuzSspJoo8vArzZZO%2B7nTnZ9gVeHQIhham13UriqXfPyCBgc7IsigwqMyTFI0L3tZurSbuTbItxxgyKSLjQM%2B63tjzSO9EgKTyLnLt2DrvM0EJskrLnR%2BB1wLSvW0azsfZkE1UOaROXCj8a%2FlZrY%2Bor2hBXcUm1%2F21PgMBrScnGjokS%2F4xDMKqoa20ej05TCVoJS%2BBjqkAeJMCAF%2FqyFaJ3%2FJsNemcRZgs0DwMjPd0qUpxfFPJBQMen1ZHhw9EvTH%2Fzv1Mv1lLjTCyIDwa9dT89Z4SCQ42YDNsqx8ZD53J7Z4YQEXUWhJNYS94uUjVdEr9MjClk%2B0f5pVXYc30riDvrejWYR7U3wnJRs1UZjpNLD9zEPHCiu%2BM21jzBIMj22XlsnR9Hb6Trg%2BtrZjL4CMNnZvrb8OeV1mQB6%2B&X-Amz-Signature=5aacb987355501f74b9b015a314a4f0bdd8efca94242f37460da809335e41435&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2XZYLA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4VoGHLgeSLL%2F1q0c8fr2viYM4hETEM39pUZplGWA9XQIhAPl1B145nNuGc940oiW4PUP1JLdVWwUFeMe2BPsZCgd5KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB7h1VDWuuq20yaTAq3APzLMdYbaSvmxuBB7LAUqzprsRQmnt%2FHpofAdv6NYATrDtRR2flj294adbhIXEWMNhjUtcgj2vcY3vZohIouI0m7bgw9Y9mYA4R6oDjNGfjZYJQ0bmwqumWEc98biibauJvEssjxVTEbgDjW6Nus2BCBsIBUnLiPI0vFiN8xuV9Xw9lu29KRtKUS7bz5%2BSWVGsz62jY6FuN6E4v5WP2W1rYJ4KQY6uctCnuVPgk5qO%2BjC8sdbcnReAyzKZ4%2BuwikKbmTlO%2F56grThw9tMTGQPFFQxIKvSuD0X9%2B2TfKu8ScK9vZMvHZU%2BVHSeKG%2BTa5Ps69irfyDJlhPHfSNSbuSwZvdNBhPk3WqPtTQ62WaK0ZHARr3EJJJvsZ9WJh4LQOn06H%2FW4u94%2FZRZiho1x7EUCU7g%2FV0NYAzQGstAnoQDIHID6RZmj2Teu%2BT%2BD7A5sCuzSspJoo8vArzZZO%2B7nTnZ9gVeHQIhham13UriqXfPyCBgc7IsigwqMyTFI0L3tZurSbuTbItxxgyKSLjQM%2B63tjzSO9EgKTyLnLt2DrvM0EJskrLnR%2BB1wLSvW0azsfZkE1UOaROXCj8a%2FlZrY%2Bor2hBXcUm1%2F21PgMBrScnGjokS%2F4xDMKqoa20ej05TCVoJS%2BBjqkAeJMCAF%2FqyFaJ3%2FJsNemcRZgs0DwMjPd0qUpxfFPJBQMen1ZHhw9EvTH%2Fzv1Mv1lLjTCyIDwa9dT89Z4SCQ42YDNsqx8ZD53J7Z4YQEXUWhJNYS94uUjVdEr9MjClk%2B0f5pVXYc30riDvrejWYR7U3wnJRs1UZjpNLD9zEPHCiu%2BM21jzBIMj22XlsnR9Hb6Trg%2BtrZjL4CMNnZvrb8OeV1mQB6%2B&X-Amz-Signature=d125790b6149adf286ac00b45aa0cce1a0c87cd9161e26a266639046ef5db70d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2XZYLA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4VoGHLgeSLL%2F1q0c8fr2viYM4hETEM39pUZplGWA9XQIhAPl1B145nNuGc940oiW4PUP1JLdVWwUFeMe2BPsZCgd5KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB7h1VDWuuq20yaTAq3APzLMdYbaSvmxuBB7LAUqzprsRQmnt%2FHpofAdv6NYATrDtRR2flj294adbhIXEWMNhjUtcgj2vcY3vZohIouI0m7bgw9Y9mYA4R6oDjNGfjZYJQ0bmwqumWEc98biibauJvEssjxVTEbgDjW6Nus2BCBsIBUnLiPI0vFiN8xuV9Xw9lu29KRtKUS7bz5%2BSWVGsz62jY6FuN6E4v5WP2W1rYJ4KQY6uctCnuVPgk5qO%2BjC8sdbcnReAyzKZ4%2BuwikKbmTlO%2F56grThw9tMTGQPFFQxIKvSuD0X9%2B2TfKu8ScK9vZMvHZU%2BVHSeKG%2BTa5Ps69irfyDJlhPHfSNSbuSwZvdNBhPk3WqPtTQ62WaK0ZHARr3EJJJvsZ9WJh4LQOn06H%2FW4u94%2FZRZiho1x7EUCU7g%2FV0NYAzQGstAnoQDIHID6RZmj2Teu%2BT%2BD7A5sCuzSspJoo8vArzZZO%2B7nTnZ9gVeHQIhham13UriqXfPyCBgc7IsigwqMyTFI0L3tZurSbuTbItxxgyKSLjQM%2B63tjzSO9EgKTyLnLt2DrvM0EJskrLnR%2BB1wLSvW0azsfZkE1UOaROXCj8a%2FlZrY%2Bor2hBXcUm1%2F21PgMBrScnGjokS%2F4xDMKqoa20ej05TCVoJS%2BBjqkAeJMCAF%2FqyFaJ3%2FJsNemcRZgs0DwMjPd0qUpxfFPJBQMen1ZHhw9EvTH%2Fzv1Mv1lLjTCyIDwa9dT89Z4SCQ42YDNsqx8ZD53J7Z4YQEXUWhJNYS94uUjVdEr9MjClk%2B0f5pVXYc30riDvrejWYR7U3wnJRs1UZjpNLD9zEPHCiu%2BM21jzBIMj22XlsnR9Hb6Trg%2BtrZjL4CMNnZvrb8OeV1mQB6%2B&X-Amz-Signature=8a5b91026302f65cbc8eba628c851ecde1dcd10a2d2320c61cac3ede75769f4c&X-Amz-SignedHeaders=host&x-id=GetObject)
