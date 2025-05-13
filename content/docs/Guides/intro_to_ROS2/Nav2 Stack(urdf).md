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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZSLL3P%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIESsXh%2BfGXU2LBu%2BsrNiFdZikUqYaLYajeNInr7JgmU5AiALcJ3SvqF2y4Nqlb67%2BxkY7soqLMWG0VAjV4LAS3lKDSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScVbIz8qYHvPca4vKtwDgNG8tRU86%2BDeaeV%2BI75uuzIHLnAAxI0PwJ7JFxv0Vd70Yl951gciauQdNaoFkc%2FEY1ot7Lx9%2BmjSWNVzoW3jYECqOyVm3PA%2BKEG5Zb247bE3Btbk73JQIwndYRYJ2hkAp%2FkAIffPXFbatBO5a9pkMF0eHcyIoZ24jBpNA2tMdw%2BxPEx8ccCkhL7kOyvmtEQ1Dm53e%2Bqgu1wpZFCSamgsI6nzVPo7CjT2HtSArTxuNA%2BkgBPoLVcKTIXUxm5MuLyqK2lEgWuqgxpESbCN1XGSEkYQQJSNJ9WeSs2nX2hWP61W4DgoJVoyA7dIJq%2BhaqNAQWLCPLy9mp43V%2FKrJsJsNax5Dx7gGAP14OVrk2xow%2F%2FjwdQ7sU4qL1rc21%2F5jyxMgSEMPn73kgcQetCHiMQrXeYkYqzbMEFrllHvNz6EwtGFjP%2FSv6glaFIqTnVZr3ZcG0%2Fw8MW%2BuRkULXBmlFKLABo2lqniCkigvpfVaDgL35PGrx8SVWDEjryqL45zaXz0hErpO0YY5Na2M5YSRpiolb1giXm1kjm9Csw49F%2Be2mqUfxIEPOwtwaPLJPzrzt6LB6nqiLscYu%2B%2F0Pt9UDnxGVIRek9HgQwcc6BDGU1KYicAz6wlGbmg0tbZZJIw0veKwQY6pgE8ovhjTwWyvVlkHLbtSyVuS%2FT6Prju2ty4WICHtLEobJPUgyAZ0dv3g3Ow0mCMB%2BR6IgfHzlAgFFsP%2BXbGYoyNaQYiES%2FnQ2v7qVvAEtbQH0otY0b8X2OGMbdzHoaMBhrMWAYJLPeKboWojgGXOnnlQLJkegD%2Bw2QHJG9GROojm0c5uBE291n%2BBhsmBrhfqEk8LCgNYwGAnsHMJ83i85l2xFiIWFTo&X-Amz-Signature=cc305157cd9e298d138dbed1d66a6d8e466d0e48ef350628b9782471d026de06&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZSLL3P%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIESsXh%2BfGXU2LBu%2BsrNiFdZikUqYaLYajeNInr7JgmU5AiALcJ3SvqF2y4Nqlb67%2BxkY7soqLMWG0VAjV4LAS3lKDSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScVbIz8qYHvPca4vKtwDgNG8tRU86%2BDeaeV%2BI75uuzIHLnAAxI0PwJ7JFxv0Vd70Yl951gciauQdNaoFkc%2FEY1ot7Lx9%2BmjSWNVzoW3jYECqOyVm3PA%2BKEG5Zb247bE3Btbk73JQIwndYRYJ2hkAp%2FkAIffPXFbatBO5a9pkMF0eHcyIoZ24jBpNA2tMdw%2BxPEx8ccCkhL7kOyvmtEQ1Dm53e%2Bqgu1wpZFCSamgsI6nzVPo7CjT2HtSArTxuNA%2BkgBPoLVcKTIXUxm5MuLyqK2lEgWuqgxpESbCN1XGSEkYQQJSNJ9WeSs2nX2hWP61W4DgoJVoyA7dIJq%2BhaqNAQWLCPLy9mp43V%2FKrJsJsNax5Dx7gGAP14OVrk2xow%2F%2FjwdQ7sU4qL1rc21%2F5jyxMgSEMPn73kgcQetCHiMQrXeYkYqzbMEFrllHvNz6EwtGFjP%2FSv6glaFIqTnVZr3ZcG0%2Fw8MW%2BuRkULXBmlFKLABo2lqniCkigvpfVaDgL35PGrx8SVWDEjryqL45zaXz0hErpO0YY5Na2M5YSRpiolb1giXm1kjm9Csw49F%2Be2mqUfxIEPOwtwaPLJPzrzt6LB6nqiLscYu%2B%2F0Pt9UDnxGVIRek9HgQwcc6BDGU1KYicAz6wlGbmg0tbZZJIw0veKwQY6pgE8ovhjTwWyvVlkHLbtSyVuS%2FT6Prju2ty4WICHtLEobJPUgyAZ0dv3g3Ow0mCMB%2BR6IgfHzlAgFFsP%2BXbGYoyNaQYiES%2FnQ2v7qVvAEtbQH0otY0b8X2OGMbdzHoaMBhrMWAYJLPeKboWojgGXOnnlQLJkegD%2Bw2QHJG9GROojm0c5uBE291n%2BBhsmBrhfqEk8LCgNYwGAnsHMJ83i85l2xFiIWFTo&X-Amz-Signature=c0a6bca5d4db65bce3c7c8aa9d2f30a1ca2988b0e7f6bf26f286d33aefc3e684&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZSLL3P%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIESsXh%2BfGXU2LBu%2BsrNiFdZikUqYaLYajeNInr7JgmU5AiALcJ3SvqF2y4Nqlb67%2BxkY7soqLMWG0VAjV4LAS3lKDSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScVbIz8qYHvPca4vKtwDgNG8tRU86%2BDeaeV%2BI75uuzIHLnAAxI0PwJ7JFxv0Vd70Yl951gciauQdNaoFkc%2FEY1ot7Lx9%2BmjSWNVzoW3jYECqOyVm3PA%2BKEG5Zb247bE3Btbk73JQIwndYRYJ2hkAp%2FkAIffPXFbatBO5a9pkMF0eHcyIoZ24jBpNA2tMdw%2BxPEx8ccCkhL7kOyvmtEQ1Dm53e%2Bqgu1wpZFCSamgsI6nzVPo7CjT2HtSArTxuNA%2BkgBPoLVcKTIXUxm5MuLyqK2lEgWuqgxpESbCN1XGSEkYQQJSNJ9WeSs2nX2hWP61W4DgoJVoyA7dIJq%2BhaqNAQWLCPLy9mp43V%2FKrJsJsNax5Dx7gGAP14OVrk2xow%2F%2FjwdQ7sU4qL1rc21%2F5jyxMgSEMPn73kgcQetCHiMQrXeYkYqzbMEFrllHvNz6EwtGFjP%2FSv6glaFIqTnVZr3ZcG0%2Fw8MW%2BuRkULXBmlFKLABo2lqniCkigvpfVaDgL35PGrx8SVWDEjryqL45zaXz0hErpO0YY5Na2M5YSRpiolb1giXm1kjm9Csw49F%2Be2mqUfxIEPOwtwaPLJPzrzt6LB6nqiLscYu%2B%2F0Pt9UDnxGVIRek9HgQwcc6BDGU1KYicAz6wlGbmg0tbZZJIw0veKwQY6pgE8ovhjTwWyvVlkHLbtSyVuS%2FT6Prju2ty4WICHtLEobJPUgyAZ0dv3g3Ow0mCMB%2BR6IgfHzlAgFFsP%2BXbGYoyNaQYiES%2FnQ2v7qVvAEtbQH0otY0b8X2OGMbdzHoaMBhrMWAYJLPeKboWojgGXOnnlQLJkegD%2Bw2QHJG9GROojm0c5uBE291n%2BBhsmBrhfqEk8LCgNYwGAnsHMJ83i85l2xFiIWFTo&X-Amz-Signature=0c7e9cebb934a87dc909ae48b43ae107237debb81f1fe09bbd6804273e71b34d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZSLL3P%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIESsXh%2BfGXU2LBu%2BsrNiFdZikUqYaLYajeNInr7JgmU5AiALcJ3SvqF2y4Nqlb67%2BxkY7soqLMWG0VAjV4LAS3lKDSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScVbIz8qYHvPca4vKtwDgNG8tRU86%2BDeaeV%2BI75uuzIHLnAAxI0PwJ7JFxv0Vd70Yl951gciauQdNaoFkc%2FEY1ot7Lx9%2BmjSWNVzoW3jYECqOyVm3PA%2BKEG5Zb247bE3Btbk73JQIwndYRYJ2hkAp%2FkAIffPXFbatBO5a9pkMF0eHcyIoZ24jBpNA2tMdw%2BxPEx8ccCkhL7kOyvmtEQ1Dm53e%2Bqgu1wpZFCSamgsI6nzVPo7CjT2HtSArTxuNA%2BkgBPoLVcKTIXUxm5MuLyqK2lEgWuqgxpESbCN1XGSEkYQQJSNJ9WeSs2nX2hWP61W4DgoJVoyA7dIJq%2BhaqNAQWLCPLy9mp43V%2FKrJsJsNax5Dx7gGAP14OVrk2xow%2F%2FjwdQ7sU4qL1rc21%2F5jyxMgSEMPn73kgcQetCHiMQrXeYkYqzbMEFrllHvNz6EwtGFjP%2FSv6glaFIqTnVZr3ZcG0%2Fw8MW%2BuRkULXBmlFKLABo2lqniCkigvpfVaDgL35PGrx8SVWDEjryqL45zaXz0hErpO0YY5Na2M5YSRpiolb1giXm1kjm9Csw49F%2Be2mqUfxIEPOwtwaPLJPzrzt6LB6nqiLscYu%2B%2F0Pt9UDnxGVIRek9HgQwcc6BDGU1KYicAz6wlGbmg0tbZZJIw0veKwQY6pgE8ovhjTwWyvVlkHLbtSyVuS%2FT6Prju2ty4WICHtLEobJPUgyAZ0dv3g3Ow0mCMB%2BR6IgfHzlAgFFsP%2BXbGYoyNaQYiES%2FnQ2v7qVvAEtbQH0otY0b8X2OGMbdzHoaMBhrMWAYJLPeKboWojgGXOnnlQLJkegD%2Bw2QHJG9GROojm0c5uBE291n%2BBhsmBrhfqEk8LCgNYwGAnsHMJ83i85l2xFiIWFTo&X-Amz-Signature=c432cb0e607bf8d15eac2f8788081b2fb1552ba9114b8e78503755fc8e2a16ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZSLL3P%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIESsXh%2BfGXU2LBu%2BsrNiFdZikUqYaLYajeNInr7JgmU5AiALcJ3SvqF2y4Nqlb67%2BxkY7soqLMWG0VAjV4LAS3lKDSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScVbIz8qYHvPca4vKtwDgNG8tRU86%2BDeaeV%2BI75uuzIHLnAAxI0PwJ7JFxv0Vd70Yl951gciauQdNaoFkc%2FEY1ot7Lx9%2BmjSWNVzoW3jYECqOyVm3PA%2BKEG5Zb247bE3Btbk73JQIwndYRYJ2hkAp%2FkAIffPXFbatBO5a9pkMF0eHcyIoZ24jBpNA2tMdw%2BxPEx8ccCkhL7kOyvmtEQ1Dm53e%2Bqgu1wpZFCSamgsI6nzVPo7CjT2HtSArTxuNA%2BkgBPoLVcKTIXUxm5MuLyqK2lEgWuqgxpESbCN1XGSEkYQQJSNJ9WeSs2nX2hWP61W4DgoJVoyA7dIJq%2BhaqNAQWLCPLy9mp43V%2FKrJsJsNax5Dx7gGAP14OVrk2xow%2F%2FjwdQ7sU4qL1rc21%2F5jyxMgSEMPn73kgcQetCHiMQrXeYkYqzbMEFrllHvNz6EwtGFjP%2FSv6glaFIqTnVZr3ZcG0%2Fw8MW%2BuRkULXBmlFKLABo2lqniCkigvpfVaDgL35PGrx8SVWDEjryqL45zaXz0hErpO0YY5Na2M5YSRpiolb1giXm1kjm9Csw49F%2Be2mqUfxIEPOwtwaPLJPzrzt6LB6nqiLscYu%2B%2F0Pt9UDnxGVIRek9HgQwcc6BDGU1KYicAz6wlGbmg0tbZZJIw0veKwQY6pgE8ovhjTwWyvVlkHLbtSyVuS%2FT6Prju2ty4WICHtLEobJPUgyAZ0dv3g3Ow0mCMB%2BR6IgfHzlAgFFsP%2BXbGYoyNaQYiES%2FnQ2v7qVvAEtbQH0otY0b8X2OGMbdzHoaMBhrMWAYJLPeKboWojgGXOnnlQLJkegD%2Bw2QHJG9GROojm0c5uBE291n%2BBhsmBrhfqEk8LCgNYwGAnsHMJ83i85l2xFiIWFTo&X-Amz-Signature=b93cc34f76fcb36df561f482d38beddd7fad40bc0b4f29888108c7ea393f7a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZSLL3P%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIESsXh%2BfGXU2LBu%2BsrNiFdZikUqYaLYajeNInr7JgmU5AiALcJ3SvqF2y4Nqlb67%2BxkY7soqLMWG0VAjV4LAS3lKDSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScVbIz8qYHvPca4vKtwDgNG8tRU86%2BDeaeV%2BI75uuzIHLnAAxI0PwJ7JFxv0Vd70Yl951gciauQdNaoFkc%2FEY1ot7Lx9%2BmjSWNVzoW3jYECqOyVm3PA%2BKEG5Zb247bE3Btbk73JQIwndYRYJ2hkAp%2FkAIffPXFbatBO5a9pkMF0eHcyIoZ24jBpNA2tMdw%2BxPEx8ccCkhL7kOyvmtEQ1Dm53e%2Bqgu1wpZFCSamgsI6nzVPo7CjT2HtSArTxuNA%2BkgBPoLVcKTIXUxm5MuLyqK2lEgWuqgxpESbCN1XGSEkYQQJSNJ9WeSs2nX2hWP61W4DgoJVoyA7dIJq%2BhaqNAQWLCPLy9mp43V%2FKrJsJsNax5Dx7gGAP14OVrk2xow%2F%2FjwdQ7sU4qL1rc21%2F5jyxMgSEMPn73kgcQetCHiMQrXeYkYqzbMEFrllHvNz6EwtGFjP%2FSv6glaFIqTnVZr3ZcG0%2Fw8MW%2BuRkULXBmlFKLABo2lqniCkigvpfVaDgL35PGrx8SVWDEjryqL45zaXz0hErpO0YY5Na2M5YSRpiolb1giXm1kjm9Csw49F%2Be2mqUfxIEPOwtwaPLJPzrzt6LB6nqiLscYu%2B%2F0Pt9UDnxGVIRek9HgQwcc6BDGU1KYicAz6wlGbmg0tbZZJIw0veKwQY6pgE8ovhjTwWyvVlkHLbtSyVuS%2FT6Prju2ty4WICHtLEobJPUgyAZ0dv3g3Ow0mCMB%2BR6IgfHzlAgFFsP%2BXbGYoyNaQYiES%2FnQ2v7qVvAEtbQH0otY0b8X2OGMbdzHoaMBhrMWAYJLPeKboWojgGXOnnlQLJkegD%2Bw2QHJG9GROojm0c5uBE291n%2BBhsmBrhfqEk8LCgNYwGAnsHMJ83i85l2xFiIWFTo&X-Amz-Signature=099e273f7d7677d7daf738bce25859333ce1c394ca9d1e422551fc0070912bb3&X-Amz-SignedHeaders=host&x-id=GetObject)
