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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXABPKTG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICB%2FGWwzuFhZJXZN%2Fdfj0PE%2B6xcsv67MzKUrho%2FgyBBdAiAMY1ebhEzTSWCN8UFkji9qKg4VVOA5bwE9CAnqJq%2F68SqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMskFtmKbTQl3zwAnDKtwDXAnQhL%2BiEcw%2Fy7yfPQcRYJeExTlGMWiov%2B7XdDzWbxRa9LP2BtkQtyA%2FP685YVYdD22sGqJ41gZENvyr3BRlwZJIR9rljOyEAmbfoOl%2BaYWRau9Z3nUtZeFNu0XZY5ZQdzbO%2BVDESRBxDatmwZPASbovJIYbs9Ak2PXYVn5VHHQQCOmpKYoCPOxkkCrhivCuTRy0S1q1ndPW3qLZwjMawoOZa2LJhRWhW0tt5tzDnhMWxXzOrJ%2Fca5DWruAIos2HAhPT7Q6VHsY69jsX73yeS1Xj5phM%2BHnt99%2Fo%2BibDL%2BxyU2GVtWTS0NizOnplC8NVRNH26LKNitPpPbr3KEmD4ewPHvZ9JvCpUIkZqxSBMxzyJsg64P9aKRm1oHCxF2OtccUwlizCA31UylWwwzGh3fYp%2BjikEHL8sRaOAk%2FxpUVzDaKSMgErRgT8w0c9MREkEHnS1RMlGFWC1aUPNq9QbE%2F%2BV%2Fw69chKrdJb%2FAlGftnwAMt%2FdX%2BYFgKtzVPMnVhJnska%2Fl36g17W8Sd7S8BFczqaR6dKQk1uXABtTNhmurmOqjMyF17oypHGKTpOV5SNoPcDuqiC9wnN%2BINPgNeopyfDfeTCjNdvNlsytal5619o4t8xwcVOj3qDqeUw%2B4WFwQY6pgECXkbd6w0CTGRO%2BGmWap8oIs0%2BSPw1LWwIube%2BHDzMstguOxAAsutzHkkph%2FlqaEKrg7Vd4yiEM9V9CuCb3evBuLZxExOMKeD3rF8fQ0whxce%2FCWLgGqe3KFfEEvTkclzRroy7w%2BI%2F0bmhmj15nERRfEcgcL8O6uq6mI%2BX1A0lGCtH7tE0yVlw5iqv5lPW%2FMYsEDlLaNaedaz%2BGdzb3CMS8WJ7HVRZ&X-Amz-Signature=2f4c4bd26c9c738c327ba77ec05c18155278ea77eb186e6504e2f56dbe512d35&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXABPKTG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICB%2FGWwzuFhZJXZN%2Fdfj0PE%2B6xcsv67MzKUrho%2FgyBBdAiAMY1ebhEzTSWCN8UFkji9qKg4VVOA5bwE9CAnqJq%2F68SqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMskFtmKbTQl3zwAnDKtwDXAnQhL%2BiEcw%2Fy7yfPQcRYJeExTlGMWiov%2B7XdDzWbxRa9LP2BtkQtyA%2FP685YVYdD22sGqJ41gZENvyr3BRlwZJIR9rljOyEAmbfoOl%2BaYWRau9Z3nUtZeFNu0XZY5ZQdzbO%2BVDESRBxDatmwZPASbovJIYbs9Ak2PXYVn5VHHQQCOmpKYoCPOxkkCrhivCuTRy0S1q1ndPW3qLZwjMawoOZa2LJhRWhW0tt5tzDnhMWxXzOrJ%2Fca5DWruAIos2HAhPT7Q6VHsY69jsX73yeS1Xj5phM%2BHnt99%2Fo%2BibDL%2BxyU2GVtWTS0NizOnplC8NVRNH26LKNitPpPbr3KEmD4ewPHvZ9JvCpUIkZqxSBMxzyJsg64P9aKRm1oHCxF2OtccUwlizCA31UylWwwzGh3fYp%2BjikEHL8sRaOAk%2FxpUVzDaKSMgErRgT8w0c9MREkEHnS1RMlGFWC1aUPNq9QbE%2F%2BV%2Fw69chKrdJb%2FAlGftnwAMt%2FdX%2BYFgKtzVPMnVhJnska%2Fl36g17W8Sd7S8BFczqaR6dKQk1uXABtTNhmurmOqjMyF17oypHGKTpOV5SNoPcDuqiC9wnN%2BINPgNeopyfDfeTCjNdvNlsytal5619o4t8xwcVOj3qDqeUw%2B4WFwQY6pgECXkbd6w0CTGRO%2BGmWap8oIs0%2BSPw1LWwIube%2BHDzMstguOxAAsutzHkkph%2FlqaEKrg7Vd4yiEM9V9CuCb3evBuLZxExOMKeD3rF8fQ0whxce%2FCWLgGqe3KFfEEvTkclzRroy7w%2BI%2F0bmhmj15nERRfEcgcL8O6uq6mI%2BX1A0lGCtH7tE0yVlw5iqv5lPW%2FMYsEDlLaNaedaz%2BGdzb3CMS8WJ7HVRZ&X-Amz-Signature=4d54f4324f13038e4f3734f3786bd71f8ae1ecc96b4be9512df93698887ce312&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXABPKTG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICB%2FGWwzuFhZJXZN%2Fdfj0PE%2B6xcsv67MzKUrho%2FgyBBdAiAMY1ebhEzTSWCN8UFkji9qKg4VVOA5bwE9CAnqJq%2F68SqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMskFtmKbTQl3zwAnDKtwDXAnQhL%2BiEcw%2Fy7yfPQcRYJeExTlGMWiov%2B7XdDzWbxRa9LP2BtkQtyA%2FP685YVYdD22sGqJ41gZENvyr3BRlwZJIR9rljOyEAmbfoOl%2BaYWRau9Z3nUtZeFNu0XZY5ZQdzbO%2BVDESRBxDatmwZPASbovJIYbs9Ak2PXYVn5VHHQQCOmpKYoCPOxkkCrhivCuTRy0S1q1ndPW3qLZwjMawoOZa2LJhRWhW0tt5tzDnhMWxXzOrJ%2Fca5DWruAIos2HAhPT7Q6VHsY69jsX73yeS1Xj5phM%2BHnt99%2Fo%2BibDL%2BxyU2GVtWTS0NizOnplC8NVRNH26LKNitPpPbr3KEmD4ewPHvZ9JvCpUIkZqxSBMxzyJsg64P9aKRm1oHCxF2OtccUwlizCA31UylWwwzGh3fYp%2BjikEHL8sRaOAk%2FxpUVzDaKSMgErRgT8w0c9MREkEHnS1RMlGFWC1aUPNq9QbE%2F%2BV%2Fw69chKrdJb%2FAlGftnwAMt%2FdX%2BYFgKtzVPMnVhJnska%2Fl36g17W8Sd7S8BFczqaR6dKQk1uXABtTNhmurmOqjMyF17oypHGKTpOV5SNoPcDuqiC9wnN%2BINPgNeopyfDfeTCjNdvNlsytal5619o4t8xwcVOj3qDqeUw%2B4WFwQY6pgECXkbd6w0CTGRO%2BGmWap8oIs0%2BSPw1LWwIube%2BHDzMstguOxAAsutzHkkph%2FlqaEKrg7Vd4yiEM9V9CuCb3evBuLZxExOMKeD3rF8fQ0whxce%2FCWLgGqe3KFfEEvTkclzRroy7w%2BI%2F0bmhmj15nERRfEcgcL8O6uq6mI%2BX1A0lGCtH7tE0yVlw5iqv5lPW%2FMYsEDlLaNaedaz%2BGdzb3CMS8WJ7HVRZ&X-Amz-Signature=b78082be22ae46471a109837ce3fce86fc60a01b4cf7479d76aa6a7cb5201336&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXABPKTG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICB%2FGWwzuFhZJXZN%2Fdfj0PE%2B6xcsv67MzKUrho%2FgyBBdAiAMY1ebhEzTSWCN8UFkji9qKg4VVOA5bwE9CAnqJq%2F68SqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMskFtmKbTQl3zwAnDKtwDXAnQhL%2BiEcw%2Fy7yfPQcRYJeExTlGMWiov%2B7XdDzWbxRa9LP2BtkQtyA%2FP685YVYdD22sGqJ41gZENvyr3BRlwZJIR9rljOyEAmbfoOl%2BaYWRau9Z3nUtZeFNu0XZY5ZQdzbO%2BVDESRBxDatmwZPASbovJIYbs9Ak2PXYVn5VHHQQCOmpKYoCPOxkkCrhivCuTRy0S1q1ndPW3qLZwjMawoOZa2LJhRWhW0tt5tzDnhMWxXzOrJ%2Fca5DWruAIos2HAhPT7Q6VHsY69jsX73yeS1Xj5phM%2BHnt99%2Fo%2BibDL%2BxyU2GVtWTS0NizOnplC8NVRNH26LKNitPpPbr3KEmD4ewPHvZ9JvCpUIkZqxSBMxzyJsg64P9aKRm1oHCxF2OtccUwlizCA31UylWwwzGh3fYp%2BjikEHL8sRaOAk%2FxpUVzDaKSMgErRgT8w0c9MREkEHnS1RMlGFWC1aUPNq9QbE%2F%2BV%2Fw69chKrdJb%2FAlGftnwAMt%2FdX%2BYFgKtzVPMnVhJnska%2Fl36g17W8Sd7S8BFczqaR6dKQk1uXABtTNhmurmOqjMyF17oypHGKTpOV5SNoPcDuqiC9wnN%2BINPgNeopyfDfeTCjNdvNlsytal5619o4t8xwcVOj3qDqeUw%2B4WFwQY6pgECXkbd6w0CTGRO%2BGmWap8oIs0%2BSPw1LWwIube%2BHDzMstguOxAAsutzHkkph%2FlqaEKrg7Vd4yiEM9V9CuCb3evBuLZxExOMKeD3rF8fQ0whxce%2FCWLgGqe3KFfEEvTkclzRroy7w%2BI%2F0bmhmj15nERRfEcgcL8O6uq6mI%2BX1A0lGCtH7tE0yVlw5iqv5lPW%2FMYsEDlLaNaedaz%2BGdzb3CMS8WJ7HVRZ&X-Amz-Signature=c6c011abbc29bad54c5b6d50bead5a06d4ceb90757612127ec25d6739121aa75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXABPKTG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICB%2FGWwzuFhZJXZN%2Fdfj0PE%2B6xcsv67MzKUrho%2FgyBBdAiAMY1ebhEzTSWCN8UFkji9qKg4VVOA5bwE9CAnqJq%2F68SqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMskFtmKbTQl3zwAnDKtwDXAnQhL%2BiEcw%2Fy7yfPQcRYJeExTlGMWiov%2B7XdDzWbxRa9LP2BtkQtyA%2FP685YVYdD22sGqJ41gZENvyr3BRlwZJIR9rljOyEAmbfoOl%2BaYWRau9Z3nUtZeFNu0XZY5ZQdzbO%2BVDESRBxDatmwZPASbovJIYbs9Ak2PXYVn5VHHQQCOmpKYoCPOxkkCrhivCuTRy0S1q1ndPW3qLZwjMawoOZa2LJhRWhW0tt5tzDnhMWxXzOrJ%2Fca5DWruAIos2HAhPT7Q6VHsY69jsX73yeS1Xj5phM%2BHnt99%2Fo%2BibDL%2BxyU2GVtWTS0NizOnplC8NVRNH26LKNitPpPbr3KEmD4ewPHvZ9JvCpUIkZqxSBMxzyJsg64P9aKRm1oHCxF2OtccUwlizCA31UylWwwzGh3fYp%2BjikEHL8sRaOAk%2FxpUVzDaKSMgErRgT8w0c9MREkEHnS1RMlGFWC1aUPNq9QbE%2F%2BV%2Fw69chKrdJb%2FAlGftnwAMt%2FdX%2BYFgKtzVPMnVhJnska%2Fl36g17W8Sd7S8BFczqaR6dKQk1uXABtTNhmurmOqjMyF17oypHGKTpOV5SNoPcDuqiC9wnN%2BINPgNeopyfDfeTCjNdvNlsytal5619o4t8xwcVOj3qDqeUw%2B4WFwQY6pgECXkbd6w0CTGRO%2BGmWap8oIs0%2BSPw1LWwIube%2BHDzMstguOxAAsutzHkkph%2FlqaEKrg7Vd4yiEM9V9CuCb3evBuLZxExOMKeD3rF8fQ0whxce%2FCWLgGqe3KFfEEvTkclzRroy7w%2BI%2F0bmhmj15nERRfEcgcL8O6uq6mI%2BX1A0lGCtH7tE0yVlw5iqv5lPW%2FMYsEDlLaNaedaz%2BGdzb3CMS8WJ7HVRZ&X-Amz-Signature=8f7fe28e64a5f667d89845476a9f01a246ddc1203f61d62817f749ea4f0a08e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXABPKTG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICB%2FGWwzuFhZJXZN%2Fdfj0PE%2B6xcsv67MzKUrho%2FgyBBdAiAMY1ebhEzTSWCN8UFkji9qKg4VVOA5bwE9CAnqJq%2F68SqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMskFtmKbTQl3zwAnDKtwDXAnQhL%2BiEcw%2Fy7yfPQcRYJeExTlGMWiov%2B7XdDzWbxRa9LP2BtkQtyA%2FP685YVYdD22sGqJ41gZENvyr3BRlwZJIR9rljOyEAmbfoOl%2BaYWRau9Z3nUtZeFNu0XZY5ZQdzbO%2BVDESRBxDatmwZPASbovJIYbs9Ak2PXYVn5VHHQQCOmpKYoCPOxkkCrhivCuTRy0S1q1ndPW3qLZwjMawoOZa2LJhRWhW0tt5tzDnhMWxXzOrJ%2Fca5DWruAIos2HAhPT7Q6VHsY69jsX73yeS1Xj5phM%2BHnt99%2Fo%2BibDL%2BxyU2GVtWTS0NizOnplC8NVRNH26LKNitPpPbr3KEmD4ewPHvZ9JvCpUIkZqxSBMxzyJsg64P9aKRm1oHCxF2OtccUwlizCA31UylWwwzGh3fYp%2BjikEHL8sRaOAk%2FxpUVzDaKSMgErRgT8w0c9MREkEHnS1RMlGFWC1aUPNq9QbE%2F%2BV%2Fw69chKrdJb%2FAlGftnwAMt%2FdX%2BYFgKtzVPMnVhJnska%2Fl36g17W8Sd7S8BFczqaR6dKQk1uXABtTNhmurmOqjMyF17oypHGKTpOV5SNoPcDuqiC9wnN%2BINPgNeopyfDfeTCjNdvNlsytal5619o4t8xwcVOj3qDqeUw%2B4WFwQY6pgECXkbd6w0CTGRO%2BGmWap8oIs0%2BSPw1LWwIube%2BHDzMstguOxAAsutzHkkph%2FlqaEKrg7Vd4yiEM9V9CuCb3evBuLZxExOMKeD3rF8fQ0whxce%2FCWLgGqe3KFfEEvTkclzRroy7w%2BI%2F0bmhmj15nERRfEcgcL8O6uq6mI%2BX1A0lGCtH7tE0yVlw5iqv5lPW%2FMYsEDlLaNaedaz%2BGdzb3CMS8WJ7HVRZ&X-Amz-Signature=4409f6aca0e815260bf90de72fc6ac7693752ca7a97d103e39f3cc0e0a708640&X-Amz-SignedHeaders=host&x-id=GetObject)
