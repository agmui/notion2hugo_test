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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTUCN73%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDP%2F25MZJPkzU0kJsbmFcDPZVJobWPUm2TDkyEpX8aC9wIhAPyF%2FhoLoMEeXjj5idMtOSd5lM24YtzaWtZql0Xjg03aKv8DCFEQABoMNjM3NDIzMTgzODA1IgxL%2FLzymoFoTet3miwq3ANz4BkfHXvflIHeR7kkRXP20ijS7xmre6O4W1plI7oQpT3cqRJcAJy1vOSA10JbdGBZalGsG2LWSE9VlsHE0T0s54ptDyXPtUM9986wxRuc4hL38RgVJ3Ul2Puy380lHpiIm9IIP3VhEypQc7ZFTpyPj7tn03STBRn8ELV6tVceNIjfePGhZuBIYiNzCPU1l%2BdX63HsMZWganSKjU2vucPY5MbqDEQZCxFZbOTATxKpao3NHSpFe2r95UQv%2Fw9XulzbFPuaYGQBQgbuSfdQQH6jc2m%2FTwqetsFUh%2B%2BQ3b77VknFAVO0RsfB%2BeW8LLKBakSjHf2qwmpJmM4%2B4g%2FTyGLj8QtmiPcHGB3omQ%2FD0wN2htGSwXmbGq13f8e9%2BliVx5D3c0Tq4x0WrtjsFET3BaSj4yz24Xnr%2FvGa6WD44NfJK%2FrB86LLH1jKiU3SoyFDd2MMDP7ioJ0V8uYtN8o4Ayn4cIiRBamEDfsgKpPFRdgjHe%2BEOhcg0mRRIHDhqOV8O2tTm3sb1fMpxIhYaFj6wEqZVtyl1sU6oweYLbqG9MvHmf02vGdLy8ZTjmBxzTfOQZzequAyd%2FgTyQU3QFWKYkkVsTxFRZuPK5yG9cJlNPgE%2F1vD8%2FYiflVmMXlZgjCsvfm9BjqkAZJgK4CwQivLvGRGvAGiJhLtbKHXmqbwfRVBAAXVerqmwho%2B9vt2cuSML5JlHMNjQ1U%2FYoHo90zqFGFMtdDd5bMqn1n3zidwihCLemHLynEqLVOJQeKwMsicCfKhcFWoNC6Ita4mkmV7arxiLKc60RiMgqTBGhd6%2Bl7tQV2web2Gjgp1shRUJ9Qvjn7g8KT0fZ6McR1UhHL8pFzSDsAZHDdXBp45&X-Amz-Signature=cca145c829fbe13d171c12f69836fd936d05588496aa6a9954545ae800d704af&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTUCN73%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDP%2F25MZJPkzU0kJsbmFcDPZVJobWPUm2TDkyEpX8aC9wIhAPyF%2FhoLoMEeXjj5idMtOSd5lM24YtzaWtZql0Xjg03aKv8DCFEQABoMNjM3NDIzMTgzODA1IgxL%2FLzymoFoTet3miwq3ANz4BkfHXvflIHeR7kkRXP20ijS7xmre6O4W1plI7oQpT3cqRJcAJy1vOSA10JbdGBZalGsG2LWSE9VlsHE0T0s54ptDyXPtUM9986wxRuc4hL38RgVJ3Ul2Puy380lHpiIm9IIP3VhEypQc7ZFTpyPj7tn03STBRn8ELV6tVceNIjfePGhZuBIYiNzCPU1l%2BdX63HsMZWganSKjU2vucPY5MbqDEQZCxFZbOTATxKpao3NHSpFe2r95UQv%2Fw9XulzbFPuaYGQBQgbuSfdQQH6jc2m%2FTwqetsFUh%2B%2BQ3b77VknFAVO0RsfB%2BeW8LLKBakSjHf2qwmpJmM4%2B4g%2FTyGLj8QtmiPcHGB3omQ%2FD0wN2htGSwXmbGq13f8e9%2BliVx5D3c0Tq4x0WrtjsFET3BaSj4yz24Xnr%2FvGa6WD44NfJK%2FrB86LLH1jKiU3SoyFDd2MMDP7ioJ0V8uYtN8o4Ayn4cIiRBamEDfsgKpPFRdgjHe%2BEOhcg0mRRIHDhqOV8O2tTm3sb1fMpxIhYaFj6wEqZVtyl1sU6oweYLbqG9MvHmf02vGdLy8ZTjmBxzTfOQZzequAyd%2FgTyQU3QFWKYkkVsTxFRZuPK5yG9cJlNPgE%2F1vD8%2FYiflVmMXlZgjCsvfm9BjqkAZJgK4CwQivLvGRGvAGiJhLtbKHXmqbwfRVBAAXVerqmwho%2B9vt2cuSML5JlHMNjQ1U%2FYoHo90zqFGFMtdDd5bMqn1n3zidwihCLemHLynEqLVOJQeKwMsicCfKhcFWoNC6Ita4mkmV7arxiLKc60RiMgqTBGhd6%2Bl7tQV2web2Gjgp1shRUJ9Qvjn7g8KT0fZ6McR1UhHL8pFzSDsAZHDdXBp45&X-Amz-Signature=5fddb422ab7812174395e0e6828e7ac71f2b22ad297e71fb71296d1398dd1bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTUCN73%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDP%2F25MZJPkzU0kJsbmFcDPZVJobWPUm2TDkyEpX8aC9wIhAPyF%2FhoLoMEeXjj5idMtOSd5lM24YtzaWtZql0Xjg03aKv8DCFEQABoMNjM3NDIzMTgzODA1IgxL%2FLzymoFoTet3miwq3ANz4BkfHXvflIHeR7kkRXP20ijS7xmre6O4W1plI7oQpT3cqRJcAJy1vOSA10JbdGBZalGsG2LWSE9VlsHE0T0s54ptDyXPtUM9986wxRuc4hL38RgVJ3Ul2Puy380lHpiIm9IIP3VhEypQc7ZFTpyPj7tn03STBRn8ELV6tVceNIjfePGhZuBIYiNzCPU1l%2BdX63HsMZWganSKjU2vucPY5MbqDEQZCxFZbOTATxKpao3NHSpFe2r95UQv%2Fw9XulzbFPuaYGQBQgbuSfdQQH6jc2m%2FTwqetsFUh%2B%2BQ3b77VknFAVO0RsfB%2BeW8LLKBakSjHf2qwmpJmM4%2B4g%2FTyGLj8QtmiPcHGB3omQ%2FD0wN2htGSwXmbGq13f8e9%2BliVx5D3c0Tq4x0WrtjsFET3BaSj4yz24Xnr%2FvGa6WD44NfJK%2FrB86LLH1jKiU3SoyFDd2MMDP7ioJ0V8uYtN8o4Ayn4cIiRBamEDfsgKpPFRdgjHe%2BEOhcg0mRRIHDhqOV8O2tTm3sb1fMpxIhYaFj6wEqZVtyl1sU6oweYLbqG9MvHmf02vGdLy8ZTjmBxzTfOQZzequAyd%2FgTyQU3QFWKYkkVsTxFRZuPK5yG9cJlNPgE%2F1vD8%2FYiflVmMXlZgjCsvfm9BjqkAZJgK4CwQivLvGRGvAGiJhLtbKHXmqbwfRVBAAXVerqmwho%2B9vt2cuSML5JlHMNjQ1U%2FYoHo90zqFGFMtdDd5bMqn1n3zidwihCLemHLynEqLVOJQeKwMsicCfKhcFWoNC6Ita4mkmV7arxiLKc60RiMgqTBGhd6%2Bl7tQV2web2Gjgp1shRUJ9Qvjn7g8KT0fZ6McR1UhHL8pFzSDsAZHDdXBp45&X-Amz-Signature=05f73d1949bed1706027332f13596147e76672bf581aa1b6f8f1d004038c14d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTUCN73%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDP%2F25MZJPkzU0kJsbmFcDPZVJobWPUm2TDkyEpX8aC9wIhAPyF%2FhoLoMEeXjj5idMtOSd5lM24YtzaWtZql0Xjg03aKv8DCFEQABoMNjM3NDIzMTgzODA1IgxL%2FLzymoFoTet3miwq3ANz4BkfHXvflIHeR7kkRXP20ijS7xmre6O4W1plI7oQpT3cqRJcAJy1vOSA10JbdGBZalGsG2LWSE9VlsHE0T0s54ptDyXPtUM9986wxRuc4hL38RgVJ3Ul2Puy380lHpiIm9IIP3VhEypQc7ZFTpyPj7tn03STBRn8ELV6tVceNIjfePGhZuBIYiNzCPU1l%2BdX63HsMZWganSKjU2vucPY5MbqDEQZCxFZbOTATxKpao3NHSpFe2r95UQv%2Fw9XulzbFPuaYGQBQgbuSfdQQH6jc2m%2FTwqetsFUh%2B%2BQ3b77VknFAVO0RsfB%2BeW8LLKBakSjHf2qwmpJmM4%2B4g%2FTyGLj8QtmiPcHGB3omQ%2FD0wN2htGSwXmbGq13f8e9%2BliVx5D3c0Tq4x0WrtjsFET3BaSj4yz24Xnr%2FvGa6WD44NfJK%2FrB86LLH1jKiU3SoyFDd2MMDP7ioJ0V8uYtN8o4Ayn4cIiRBamEDfsgKpPFRdgjHe%2BEOhcg0mRRIHDhqOV8O2tTm3sb1fMpxIhYaFj6wEqZVtyl1sU6oweYLbqG9MvHmf02vGdLy8ZTjmBxzTfOQZzequAyd%2FgTyQU3QFWKYkkVsTxFRZuPK5yG9cJlNPgE%2F1vD8%2FYiflVmMXlZgjCsvfm9BjqkAZJgK4CwQivLvGRGvAGiJhLtbKHXmqbwfRVBAAXVerqmwho%2B9vt2cuSML5JlHMNjQ1U%2FYoHo90zqFGFMtdDd5bMqn1n3zidwihCLemHLynEqLVOJQeKwMsicCfKhcFWoNC6Ita4mkmV7arxiLKc60RiMgqTBGhd6%2Bl7tQV2web2Gjgp1shRUJ9Qvjn7g8KT0fZ6McR1UhHL8pFzSDsAZHDdXBp45&X-Amz-Signature=f521e200364b951a012c5f608e0e3104e43beaab9a58d6783fc3a0a7b5e5b592&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTUCN73%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDP%2F25MZJPkzU0kJsbmFcDPZVJobWPUm2TDkyEpX8aC9wIhAPyF%2FhoLoMEeXjj5idMtOSd5lM24YtzaWtZql0Xjg03aKv8DCFEQABoMNjM3NDIzMTgzODA1IgxL%2FLzymoFoTet3miwq3ANz4BkfHXvflIHeR7kkRXP20ijS7xmre6O4W1plI7oQpT3cqRJcAJy1vOSA10JbdGBZalGsG2LWSE9VlsHE0T0s54ptDyXPtUM9986wxRuc4hL38RgVJ3Ul2Puy380lHpiIm9IIP3VhEypQc7ZFTpyPj7tn03STBRn8ELV6tVceNIjfePGhZuBIYiNzCPU1l%2BdX63HsMZWganSKjU2vucPY5MbqDEQZCxFZbOTATxKpao3NHSpFe2r95UQv%2Fw9XulzbFPuaYGQBQgbuSfdQQH6jc2m%2FTwqetsFUh%2B%2BQ3b77VknFAVO0RsfB%2BeW8LLKBakSjHf2qwmpJmM4%2B4g%2FTyGLj8QtmiPcHGB3omQ%2FD0wN2htGSwXmbGq13f8e9%2BliVx5D3c0Tq4x0WrtjsFET3BaSj4yz24Xnr%2FvGa6WD44NfJK%2FrB86LLH1jKiU3SoyFDd2MMDP7ioJ0V8uYtN8o4Ayn4cIiRBamEDfsgKpPFRdgjHe%2BEOhcg0mRRIHDhqOV8O2tTm3sb1fMpxIhYaFj6wEqZVtyl1sU6oweYLbqG9MvHmf02vGdLy8ZTjmBxzTfOQZzequAyd%2FgTyQU3QFWKYkkVsTxFRZuPK5yG9cJlNPgE%2F1vD8%2FYiflVmMXlZgjCsvfm9BjqkAZJgK4CwQivLvGRGvAGiJhLtbKHXmqbwfRVBAAXVerqmwho%2B9vt2cuSML5JlHMNjQ1U%2FYoHo90zqFGFMtdDd5bMqn1n3zidwihCLemHLynEqLVOJQeKwMsicCfKhcFWoNC6Ita4mkmV7arxiLKc60RiMgqTBGhd6%2Bl7tQV2web2Gjgp1shRUJ9Qvjn7g8KT0fZ6McR1UhHL8pFzSDsAZHDdXBp45&X-Amz-Signature=c6719eb9a3228bf11db953b7f094e320a4f2b96e951481b47df6efbeb7c7ba11&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTUCN73%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDP%2F25MZJPkzU0kJsbmFcDPZVJobWPUm2TDkyEpX8aC9wIhAPyF%2FhoLoMEeXjj5idMtOSd5lM24YtzaWtZql0Xjg03aKv8DCFEQABoMNjM3NDIzMTgzODA1IgxL%2FLzymoFoTet3miwq3ANz4BkfHXvflIHeR7kkRXP20ijS7xmre6O4W1plI7oQpT3cqRJcAJy1vOSA10JbdGBZalGsG2LWSE9VlsHE0T0s54ptDyXPtUM9986wxRuc4hL38RgVJ3Ul2Puy380lHpiIm9IIP3VhEypQc7ZFTpyPj7tn03STBRn8ELV6tVceNIjfePGhZuBIYiNzCPU1l%2BdX63HsMZWganSKjU2vucPY5MbqDEQZCxFZbOTATxKpao3NHSpFe2r95UQv%2Fw9XulzbFPuaYGQBQgbuSfdQQH6jc2m%2FTwqetsFUh%2B%2BQ3b77VknFAVO0RsfB%2BeW8LLKBakSjHf2qwmpJmM4%2B4g%2FTyGLj8QtmiPcHGB3omQ%2FD0wN2htGSwXmbGq13f8e9%2BliVx5D3c0Tq4x0WrtjsFET3BaSj4yz24Xnr%2FvGa6WD44NfJK%2FrB86LLH1jKiU3SoyFDd2MMDP7ioJ0V8uYtN8o4Ayn4cIiRBamEDfsgKpPFRdgjHe%2BEOhcg0mRRIHDhqOV8O2tTm3sb1fMpxIhYaFj6wEqZVtyl1sU6oweYLbqG9MvHmf02vGdLy8ZTjmBxzTfOQZzequAyd%2FgTyQU3QFWKYkkVsTxFRZuPK5yG9cJlNPgE%2F1vD8%2FYiflVmMXlZgjCsvfm9BjqkAZJgK4CwQivLvGRGvAGiJhLtbKHXmqbwfRVBAAXVerqmwho%2B9vt2cuSML5JlHMNjQ1U%2FYoHo90zqFGFMtdDd5bMqn1n3zidwihCLemHLynEqLVOJQeKwMsicCfKhcFWoNC6Ita4mkmV7arxiLKc60RiMgqTBGhd6%2Bl7tQV2web2Gjgp1shRUJ9Qvjn7g8KT0fZ6McR1UhHL8pFzSDsAZHDdXBp45&X-Amz-Signature=1be44f43924f3e7f1b6cc83e349b8d9fdef6b20e72dd98607da566416a2f31c4&X-Amz-SignedHeaders=host&x-id=GetObject)
