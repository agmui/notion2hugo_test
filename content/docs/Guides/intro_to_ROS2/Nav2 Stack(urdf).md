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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37ZSNAP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDARskP9o4Buh2dlUnTxONzFju2IOKQU%2Fe3KN8oCLGvMQIgenb%2BT7XIxBnEy4MEoLxNGhPVm7ovZhBfVO4eg9tK1FEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpGQ4jol2IG5bEBuCrcA8HBFX2HBZXvWWODDFonAr6hkUc%2Bihb1u8VdNMcpkUXFDpohMRi%2Bzf8s9CTRqKAfQb0XZO3h7FAXlVvnwtMsnq3EeG8CgZ7Tgt15MmXaPSx6FXucmMm2hZrtfLbbnJj%2FjnAREexbLQhQMcs8j2k2Xg8kLMQbMix4Okhyux92ZXAtWZelt1ebHqdmyNadjZDmVEr0N97ct%2FxWqDtaC7W2fhVQiNpQpSg7sjGhF%2FbI951Yxp2LK0j5dJAmqVoK%2Brgu1HIwht8LwiVUeiNS5q66LUQ08qKrybhfkQ%2BmRWJuk6rzdrd4GSxiYhJfktMxDQpD4gyVGUeYVO8aRt3%2Bd2Xikfy08X4G16E74sW85ZDPBbEsn2yXBgZDWbPcS9QvfXadOM6MgGaeIG5sxm4mNAfMGHeYNRDu2ypY9U8dIrnFukuMntvQZcZIPyoepQHsDk3XXehXzwORJ3kAHq44JDveEwinpLPRYfWNfqwuKPOdEUQdqtLD6zH0SSRRh5zEufP5bzpAyHREg%2FToysnDnPlh%2FF0bO4Syj%2FkjbB908Ggal4j%2BOkyV7zwhtZqmzQWRTBZX0Z1%2Fzkyp75TWzod%2FPZ%2FHTR4mQYR9k%2BGW6QmEmgbJzv03TxjDwtabATo%2B45QTMI6UqcIGOqUBKqjFNZsnr%2BKydPvLB25QAfYh0BEf9vmP7pQKCaRI0TKoF%2FQaLIOzWLN%2BzjEiR%2BMublwjvdimnUobBSBiQqmt2%2FrJ6Kt2pknMWVrBbn7kzuyvWbZajCia%2B6I%2BBs8vEWXwnErudnyRq6eVctj2FLrbCBCVs1OtutJd3V39DiA8DO38s3NE2U9LaCZZQYFFgQQWxVKoGZn%2B1D4s2goiQSz%2FPVY9PtaU&X-Amz-Signature=9f31445c272d617f9430a1f7160239bc4d198e75a28905b6b1bfa1a60eb65f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37ZSNAP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDARskP9o4Buh2dlUnTxONzFju2IOKQU%2Fe3KN8oCLGvMQIgenb%2BT7XIxBnEy4MEoLxNGhPVm7ovZhBfVO4eg9tK1FEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpGQ4jol2IG5bEBuCrcA8HBFX2HBZXvWWODDFonAr6hkUc%2Bihb1u8VdNMcpkUXFDpohMRi%2Bzf8s9CTRqKAfQb0XZO3h7FAXlVvnwtMsnq3EeG8CgZ7Tgt15MmXaPSx6FXucmMm2hZrtfLbbnJj%2FjnAREexbLQhQMcs8j2k2Xg8kLMQbMix4Okhyux92ZXAtWZelt1ebHqdmyNadjZDmVEr0N97ct%2FxWqDtaC7W2fhVQiNpQpSg7sjGhF%2FbI951Yxp2LK0j5dJAmqVoK%2Brgu1HIwht8LwiVUeiNS5q66LUQ08qKrybhfkQ%2BmRWJuk6rzdrd4GSxiYhJfktMxDQpD4gyVGUeYVO8aRt3%2Bd2Xikfy08X4G16E74sW85ZDPBbEsn2yXBgZDWbPcS9QvfXadOM6MgGaeIG5sxm4mNAfMGHeYNRDu2ypY9U8dIrnFukuMntvQZcZIPyoepQHsDk3XXehXzwORJ3kAHq44JDveEwinpLPRYfWNfqwuKPOdEUQdqtLD6zH0SSRRh5zEufP5bzpAyHREg%2FToysnDnPlh%2FF0bO4Syj%2FkjbB908Ggal4j%2BOkyV7zwhtZqmzQWRTBZX0Z1%2Fzkyp75TWzod%2FPZ%2FHTR4mQYR9k%2BGW6QmEmgbJzv03TxjDwtabATo%2B45QTMI6UqcIGOqUBKqjFNZsnr%2BKydPvLB25QAfYh0BEf9vmP7pQKCaRI0TKoF%2FQaLIOzWLN%2BzjEiR%2BMublwjvdimnUobBSBiQqmt2%2FrJ6Kt2pknMWVrBbn7kzuyvWbZajCia%2B6I%2BBs8vEWXwnErudnyRq6eVctj2FLrbCBCVs1OtutJd3V39DiA8DO38s3NE2U9LaCZZQYFFgQQWxVKoGZn%2B1D4s2goiQSz%2FPVY9PtaU&X-Amz-Signature=08a105557ce1a41ab88f404422f46083fefa0329924398e82071a0cbad786eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37ZSNAP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDARskP9o4Buh2dlUnTxONzFju2IOKQU%2Fe3KN8oCLGvMQIgenb%2BT7XIxBnEy4MEoLxNGhPVm7ovZhBfVO4eg9tK1FEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpGQ4jol2IG5bEBuCrcA8HBFX2HBZXvWWODDFonAr6hkUc%2Bihb1u8VdNMcpkUXFDpohMRi%2Bzf8s9CTRqKAfQb0XZO3h7FAXlVvnwtMsnq3EeG8CgZ7Tgt15MmXaPSx6FXucmMm2hZrtfLbbnJj%2FjnAREexbLQhQMcs8j2k2Xg8kLMQbMix4Okhyux92ZXAtWZelt1ebHqdmyNadjZDmVEr0N97ct%2FxWqDtaC7W2fhVQiNpQpSg7sjGhF%2FbI951Yxp2LK0j5dJAmqVoK%2Brgu1HIwht8LwiVUeiNS5q66LUQ08qKrybhfkQ%2BmRWJuk6rzdrd4GSxiYhJfktMxDQpD4gyVGUeYVO8aRt3%2Bd2Xikfy08X4G16E74sW85ZDPBbEsn2yXBgZDWbPcS9QvfXadOM6MgGaeIG5sxm4mNAfMGHeYNRDu2ypY9U8dIrnFukuMntvQZcZIPyoepQHsDk3XXehXzwORJ3kAHq44JDveEwinpLPRYfWNfqwuKPOdEUQdqtLD6zH0SSRRh5zEufP5bzpAyHREg%2FToysnDnPlh%2FF0bO4Syj%2FkjbB908Ggal4j%2BOkyV7zwhtZqmzQWRTBZX0Z1%2Fzkyp75TWzod%2FPZ%2FHTR4mQYR9k%2BGW6QmEmgbJzv03TxjDwtabATo%2B45QTMI6UqcIGOqUBKqjFNZsnr%2BKydPvLB25QAfYh0BEf9vmP7pQKCaRI0TKoF%2FQaLIOzWLN%2BzjEiR%2BMublwjvdimnUobBSBiQqmt2%2FrJ6Kt2pknMWVrBbn7kzuyvWbZajCia%2B6I%2BBs8vEWXwnErudnyRq6eVctj2FLrbCBCVs1OtutJd3V39DiA8DO38s3NE2U9LaCZZQYFFgQQWxVKoGZn%2B1D4s2goiQSz%2FPVY9PtaU&X-Amz-Signature=8f5a032203e6cda2d30e1d5130c7a3f135436386df7b6e2425cf360a28ddb205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37ZSNAP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDARskP9o4Buh2dlUnTxONzFju2IOKQU%2Fe3KN8oCLGvMQIgenb%2BT7XIxBnEy4MEoLxNGhPVm7ovZhBfVO4eg9tK1FEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpGQ4jol2IG5bEBuCrcA8HBFX2HBZXvWWODDFonAr6hkUc%2Bihb1u8VdNMcpkUXFDpohMRi%2Bzf8s9CTRqKAfQb0XZO3h7FAXlVvnwtMsnq3EeG8CgZ7Tgt15MmXaPSx6FXucmMm2hZrtfLbbnJj%2FjnAREexbLQhQMcs8j2k2Xg8kLMQbMix4Okhyux92ZXAtWZelt1ebHqdmyNadjZDmVEr0N97ct%2FxWqDtaC7W2fhVQiNpQpSg7sjGhF%2FbI951Yxp2LK0j5dJAmqVoK%2Brgu1HIwht8LwiVUeiNS5q66LUQ08qKrybhfkQ%2BmRWJuk6rzdrd4GSxiYhJfktMxDQpD4gyVGUeYVO8aRt3%2Bd2Xikfy08X4G16E74sW85ZDPBbEsn2yXBgZDWbPcS9QvfXadOM6MgGaeIG5sxm4mNAfMGHeYNRDu2ypY9U8dIrnFukuMntvQZcZIPyoepQHsDk3XXehXzwORJ3kAHq44JDveEwinpLPRYfWNfqwuKPOdEUQdqtLD6zH0SSRRh5zEufP5bzpAyHREg%2FToysnDnPlh%2FF0bO4Syj%2FkjbB908Ggal4j%2BOkyV7zwhtZqmzQWRTBZX0Z1%2Fzkyp75TWzod%2FPZ%2FHTR4mQYR9k%2BGW6QmEmgbJzv03TxjDwtabATo%2B45QTMI6UqcIGOqUBKqjFNZsnr%2BKydPvLB25QAfYh0BEf9vmP7pQKCaRI0TKoF%2FQaLIOzWLN%2BzjEiR%2BMublwjvdimnUobBSBiQqmt2%2FrJ6Kt2pknMWVrBbn7kzuyvWbZajCia%2B6I%2BBs8vEWXwnErudnyRq6eVctj2FLrbCBCVs1OtutJd3V39DiA8DO38s3NE2U9LaCZZQYFFgQQWxVKoGZn%2B1D4s2goiQSz%2FPVY9PtaU&X-Amz-Signature=4ea133d308674148586733f6352258250d07b45f6dad10a1a112836613f3744a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37ZSNAP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDARskP9o4Buh2dlUnTxONzFju2IOKQU%2Fe3KN8oCLGvMQIgenb%2BT7XIxBnEy4MEoLxNGhPVm7ovZhBfVO4eg9tK1FEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpGQ4jol2IG5bEBuCrcA8HBFX2HBZXvWWODDFonAr6hkUc%2Bihb1u8VdNMcpkUXFDpohMRi%2Bzf8s9CTRqKAfQb0XZO3h7FAXlVvnwtMsnq3EeG8CgZ7Tgt15MmXaPSx6FXucmMm2hZrtfLbbnJj%2FjnAREexbLQhQMcs8j2k2Xg8kLMQbMix4Okhyux92ZXAtWZelt1ebHqdmyNadjZDmVEr0N97ct%2FxWqDtaC7W2fhVQiNpQpSg7sjGhF%2FbI951Yxp2LK0j5dJAmqVoK%2Brgu1HIwht8LwiVUeiNS5q66LUQ08qKrybhfkQ%2BmRWJuk6rzdrd4GSxiYhJfktMxDQpD4gyVGUeYVO8aRt3%2Bd2Xikfy08X4G16E74sW85ZDPBbEsn2yXBgZDWbPcS9QvfXadOM6MgGaeIG5sxm4mNAfMGHeYNRDu2ypY9U8dIrnFukuMntvQZcZIPyoepQHsDk3XXehXzwORJ3kAHq44JDveEwinpLPRYfWNfqwuKPOdEUQdqtLD6zH0SSRRh5zEufP5bzpAyHREg%2FToysnDnPlh%2FF0bO4Syj%2FkjbB908Ggal4j%2BOkyV7zwhtZqmzQWRTBZX0Z1%2Fzkyp75TWzod%2FPZ%2FHTR4mQYR9k%2BGW6QmEmgbJzv03TxjDwtabATo%2B45QTMI6UqcIGOqUBKqjFNZsnr%2BKydPvLB25QAfYh0BEf9vmP7pQKCaRI0TKoF%2FQaLIOzWLN%2BzjEiR%2BMublwjvdimnUobBSBiQqmt2%2FrJ6Kt2pknMWVrBbn7kzuyvWbZajCia%2B6I%2BBs8vEWXwnErudnyRq6eVctj2FLrbCBCVs1OtutJd3V39DiA8DO38s3NE2U9LaCZZQYFFgQQWxVKoGZn%2B1D4s2goiQSz%2FPVY9PtaU&X-Amz-Signature=094dd9f4d65f0059fef9e73164b9f6fd70c3f5f29a53ca77b7d4730e9228a563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37ZSNAP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDARskP9o4Buh2dlUnTxONzFju2IOKQU%2Fe3KN8oCLGvMQIgenb%2BT7XIxBnEy4MEoLxNGhPVm7ovZhBfVO4eg9tK1FEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpGQ4jol2IG5bEBuCrcA8HBFX2HBZXvWWODDFonAr6hkUc%2Bihb1u8VdNMcpkUXFDpohMRi%2Bzf8s9CTRqKAfQb0XZO3h7FAXlVvnwtMsnq3EeG8CgZ7Tgt15MmXaPSx6FXucmMm2hZrtfLbbnJj%2FjnAREexbLQhQMcs8j2k2Xg8kLMQbMix4Okhyux92ZXAtWZelt1ebHqdmyNadjZDmVEr0N97ct%2FxWqDtaC7W2fhVQiNpQpSg7sjGhF%2FbI951Yxp2LK0j5dJAmqVoK%2Brgu1HIwht8LwiVUeiNS5q66LUQ08qKrybhfkQ%2BmRWJuk6rzdrd4GSxiYhJfktMxDQpD4gyVGUeYVO8aRt3%2Bd2Xikfy08X4G16E74sW85ZDPBbEsn2yXBgZDWbPcS9QvfXadOM6MgGaeIG5sxm4mNAfMGHeYNRDu2ypY9U8dIrnFukuMntvQZcZIPyoepQHsDk3XXehXzwORJ3kAHq44JDveEwinpLPRYfWNfqwuKPOdEUQdqtLD6zH0SSRRh5zEufP5bzpAyHREg%2FToysnDnPlh%2FF0bO4Syj%2FkjbB908Ggal4j%2BOkyV7zwhtZqmzQWRTBZX0Z1%2Fzkyp75TWzod%2FPZ%2FHTR4mQYR9k%2BGW6QmEmgbJzv03TxjDwtabATo%2B45QTMI6UqcIGOqUBKqjFNZsnr%2BKydPvLB25QAfYh0BEf9vmP7pQKCaRI0TKoF%2FQaLIOzWLN%2BzjEiR%2BMublwjvdimnUobBSBiQqmt2%2FrJ6Kt2pknMWVrBbn7kzuyvWbZajCia%2B6I%2BBs8vEWXwnErudnyRq6eVctj2FLrbCBCVs1OtutJd3V39DiA8DO38s3NE2U9LaCZZQYFFgQQWxVKoGZn%2B1D4s2goiQSz%2FPVY9PtaU&X-Amz-Signature=ab473f5fccd986eb21ea5ca1a2615e9fd719b2e1db514add58c3763e3c3fcd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
