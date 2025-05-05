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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYSBN3W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9WGw%2FtAgNC7eiFTvOSSxawVTkAZj334giZf9F%2FFarsgIgaPnqopGQBGM9f4uY00D%2FpeBSf%2FS209vxrkEoYx%2Fv7R0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIflEiurzVSLx7UBcCrcA%2F14KyQ1wDwp4bN4Go8V3vCclEDPnjr6AN6uo4Xe1K%2BHVJMW5WIrrUUGjR%2FZZz%2FiAuuKAlrneZwkwdf75rT9Vbc8x73xNTaT%2FAXlM%2BT0tbaMw%2B7hGeh1VG7btt2cwv2%2Bx2Pc7M1Tx4NqiP%2Fx4FkgEJl%2FeuUhrjfBQCj2X49wa6DMYcRJmmtSqm2T6N3L9M3c5qKwgDRscMvPHu1MC%2FERSMX8Ui3QlUUPlXIsIyUZCU%2FCnGgQGnkPBRvlcHo8mOLaD7UJI6lBW6N0Xkcl9eMh7yxyjzV4XmSjIIIBwkvV%2Bc7xKB8GEW9VOkoi%2Fm8b%2Bo4eWRee0tHU%2FsEQAcM%2FYv%2Bczw6Nnj%2Fkt6rUWr29Po7H%2BNA7wJeGgF8OxkyTEZp7TPSWP9HNAYISVgflL9YHmw%2FjMR9N639Q0wFfmD%2B8pwxqqsDQbfba%2B%2Fb8AA%2FZBo6JzH3Dxo1JN1ouo18A0k10Z3PfMbmgiEBER5ynpoo1UlTGpfV7J7ZJY1EwrAbp0Xy3Qdna7K3Pz6pjgv3oAIjjKU2QFfudsNKcfSelCYRBxaJAwErImjMXnJ05u5EtlMoiIie5kiRxtseruIIdh9y3iDleweLVbYefVP9YGFJ%2B4dHL6L2vbve4MRkcAJ1ympsZMIP748AGOqUBs6jOLFeOP%2FFwodOAx4%2BO3RYJtsfgaP%2FTwBDWCudUxfiirDNumCJQVGs5vfJYzad%2BoVVlavlLe7ZkiQDzXpCp5PAYKzCQlxJReNI6TltfOmqDs4whAMpJl6%2FtXGC4YpN7faQCy%2BQf5PqkyR91IaMphwoPLjgyEYNssTw%2FY80ap1SVgNBRPKXLKL%2FUWdD0AZhstm4U%2FIttSifggQvkmZb5t3pbK8iR&X-Amz-Signature=94fa5a3f9fb182d764c762f57b9334d256df072ff44ae3f7242e8bf50faed33f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYSBN3W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9WGw%2FtAgNC7eiFTvOSSxawVTkAZj334giZf9F%2FFarsgIgaPnqopGQBGM9f4uY00D%2FpeBSf%2FS209vxrkEoYx%2Fv7R0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIflEiurzVSLx7UBcCrcA%2F14KyQ1wDwp4bN4Go8V3vCclEDPnjr6AN6uo4Xe1K%2BHVJMW5WIrrUUGjR%2FZZz%2FiAuuKAlrneZwkwdf75rT9Vbc8x73xNTaT%2FAXlM%2BT0tbaMw%2B7hGeh1VG7btt2cwv2%2Bx2Pc7M1Tx4NqiP%2Fx4FkgEJl%2FeuUhrjfBQCj2X49wa6DMYcRJmmtSqm2T6N3L9M3c5qKwgDRscMvPHu1MC%2FERSMX8Ui3QlUUPlXIsIyUZCU%2FCnGgQGnkPBRvlcHo8mOLaD7UJI6lBW6N0Xkcl9eMh7yxyjzV4XmSjIIIBwkvV%2Bc7xKB8GEW9VOkoi%2Fm8b%2Bo4eWRee0tHU%2FsEQAcM%2FYv%2Bczw6Nnj%2Fkt6rUWr29Po7H%2BNA7wJeGgF8OxkyTEZp7TPSWP9HNAYISVgflL9YHmw%2FjMR9N639Q0wFfmD%2B8pwxqqsDQbfba%2B%2Fb8AA%2FZBo6JzH3Dxo1JN1ouo18A0k10Z3PfMbmgiEBER5ynpoo1UlTGpfV7J7ZJY1EwrAbp0Xy3Qdna7K3Pz6pjgv3oAIjjKU2QFfudsNKcfSelCYRBxaJAwErImjMXnJ05u5EtlMoiIie5kiRxtseruIIdh9y3iDleweLVbYefVP9YGFJ%2B4dHL6L2vbve4MRkcAJ1ympsZMIP748AGOqUBs6jOLFeOP%2FFwodOAx4%2BO3RYJtsfgaP%2FTwBDWCudUxfiirDNumCJQVGs5vfJYzad%2BoVVlavlLe7ZkiQDzXpCp5PAYKzCQlxJReNI6TltfOmqDs4whAMpJl6%2FtXGC4YpN7faQCy%2BQf5PqkyR91IaMphwoPLjgyEYNssTw%2FY80ap1SVgNBRPKXLKL%2FUWdD0AZhstm4U%2FIttSifggQvkmZb5t3pbK8iR&X-Amz-Signature=43cd3ca491f608b0883b1cc89f9df626e1379175ec7909b152d2449d3453f03a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYSBN3W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9WGw%2FtAgNC7eiFTvOSSxawVTkAZj334giZf9F%2FFarsgIgaPnqopGQBGM9f4uY00D%2FpeBSf%2FS209vxrkEoYx%2Fv7R0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIflEiurzVSLx7UBcCrcA%2F14KyQ1wDwp4bN4Go8V3vCclEDPnjr6AN6uo4Xe1K%2BHVJMW5WIrrUUGjR%2FZZz%2FiAuuKAlrneZwkwdf75rT9Vbc8x73xNTaT%2FAXlM%2BT0tbaMw%2B7hGeh1VG7btt2cwv2%2Bx2Pc7M1Tx4NqiP%2Fx4FkgEJl%2FeuUhrjfBQCj2X49wa6DMYcRJmmtSqm2T6N3L9M3c5qKwgDRscMvPHu1MC%2FERSMX8Ui3QlUUPlXIsIyUZCU%2FCnGgQGnkPBRvlcHo8mOLaD7UJI6lBW6N0Xkcl9eMh7yxyjzV4XmSjIIIBwkvV%2Bc7xKB8GEW9VOkoi%2Fm8b%2Bo4eWRee0tHU%2FsEQAcM%2FYv%2Bczw6Nnj%2Fkt6rUWr29Po7H%2BNA7wJeGgF8OxkyTEZp7TPSWP9HNAYISVgflL9YHmw%2FjMR9N639Q0wFfmD%2B8pwxqqsDQbfba%2B%2Fb8AA%2FZBo6JzH3Dxo1JN1ouo18A0k10Z3PfMbmgiEBER5ynpoo1UlTGpfV7J7ZJY1EwrAbp0Xy3Qdna7K3Pz6pjgv3oAIjjKU2QFfudsNKcfSelCYRBxaJAwErImjMXnJ05u5EtlMoiIie5kiRxtseruIIdh9y3iDleweLVbYefVP9YGFJ%2B4dHL6L2vbve4MRkcAJ1ympsZMIP748AGOqUBs6jOLFeOP%2FFwodOAx4%2BO3RYJtsfgaP%2FTwBDWCudUxfiirDNumCJQVGs5vfJYzad%2BoVVlavlLe7ZkiQDzXpCp5PAYKzCQlxJReNI6TltfOmqDs4whAMpJl6%2FtXGC4YpN7faQCy%2BQf5PqkyR91IaMphwoPLjgyEYNssTw%2FY80ap1SVgNBRPKXLKL%2FUWdD0AZhstm4U%2FIttSifggQvkmZb5t3pbK8iR&X-Amz-Signature=c5980f9b836fcec86ab88fcd22aabc7ff9ae41c1c62e109b4a9dcced125a9ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYSBN3W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9WGw%2FtAgNC7eiFTvOSSxawVTkAZj334giZf9F%2FFarsgIgaPnqopGQBGM9f4uY00D%2FpeBSf%2FS209vxrkEoYx%2Fv7R0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIflEiurzVSLx7UBcCrcA%2F14KyQ1wDwp4bN4Go8V3vCclEDPnjr6AN6uo4Xe1K%2BHVJMW5WIrrUUGjR%2FZZz%2FiAuuKAlrneZwkwdf75rT9Vbc8x73xNTaT%2FAXlM%2BT0tbaMw%2B7hGeh1VG7btt2cwv2%2Bx2Pc7M1Tx4NqiP%2Fx4FkgEJl%2FeuUhrjfBQCj2X49wa6DMYcRJmmtSqm2T6N3L9M3c5qKwgDRscMvPHu1MC%2FERSMX8Ui3QlUUPlXIsIyUZCU%2FCnGgQGnkPBRvlcHo8mOLaD7UJI6lBW6N0Xkcl9eMh7yxyjzV4XmSjIIIBwkvV%2Bc7xKB8GEW9VOkoi%2Fm8b%2Bo4eWRee0tHU%2FsEQAcM%2FYv%2Bczw6Nnj%2Fkt6rUWr29Po7H%2BNA7wJeGgF8OxkyTEZp7TPSWP9HNAYISVgflL9YHmw%2FjMR9N639Q0wFfmD%2B8pwxqqsDQbfba%2B%2Fb8AA%2FZBo6JzH3Dxo1JN1ouo18A0k10Z3PfMbmgiEBER5ynpoo1UlTGpfV7J7ZJY1EwrAbp0Xy3Qdna7K3Pz6pjgv3oAIjjKU2QFfudsNKcfSelCYRBxaJAwErImjMXnJ05u5EtlMoiIie5kiRxtseruIIdh9y3iDleweLVbYefVP9YGFJ%2B4dHL6L2vbve4MRkcAJ1ympsZMIP748AGOqUBs6jOLFeOP%2FFwodOAx4%2BO3RYJtsfgaP%2FTwBDWCudUxfiirDNumCJQVGs5vfJYzad%2BoVVlavlLe7ZkiQDzXpCp5PAYKzCQlxJReNI6TltfOmqDs4whAMpJl6%2FtXGC4YpN7faQCy%2BQf5PqkyR91IaMphwoPLjgyEYNssTw%2FY80ap1SVgNBRPKXLKL%2FUWdD0AZhstm4U%2FIttSifggQvkmZb5t3pbK8iR&X-Amz-Signature=a784a1e445b66f97661b0fe7a817486806d9bcee9365b60da1868af44d9547cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYSBN3W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9WGw%2FtAgNC7eiFTvOSSxawVTkAZj334giZf9F%2FFarsgIgaPnqopGQBGM9f4uY00D%2FpeBSf%2FS209vxrkEoYx%2Fv7R0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIflEiurzVSLx7UBcCrcA%2F14KyQ1wDwp4bN4Go8V3vCclEDPnjr6AN6uo4Xe1K%2BHVJMW5WIrrUUGjR%2FZZz%2FiAuuKAlrneZwkwdf75rT9Vbc8x73xNTaT%2FAXlM%2BT0tbaMw%2B7hGeh1VG7btt2cwv2%2Bx2Pc7M1Tx4NqiP%2Fx4FkgEJl%2FeuUhrjfBQCj2X49wa6DMYcRJmmtSqm2T6N3L9M3c5qKwgDRscMvPHu1MC%2FERSMX8Ui3QlUUPlXIsIyUZCU%2FCnGgQGnkPBRvlcHo8mOLaD7UJI6lBW6N0Xkcl9eMh7yxyjzV4XmSjIIIBwkvV%2Bc7xKB8GEW9VOkoi%2Fm8b%2Bo4eWRee0tHU%2FsEQAcM%2FYv%2Bczw6Nnj%2Fkt6rUWr29Po7H%2BNA7wJeGgF8OxkyTEZp7TPSWP9HNAYISVgflL9YHmw%2FjMR9N639Q0wFfmD%2B8pwxqqsDQbfba%2B%2Fb8AA%2FZBo6JzH3Dxo1JN1ouo18A0k10Z3PfMbmgiEBER5ynpoo1UlTGpfV7J7ZJY1EwrAbp0Xy3Qdna7K3Pz6pjgv3oAIjjKU2QFfudsNKcfSelCYRBxaJAwErImjMXnJ05u5EtlMoiIie5kiRxtseruIIdh9y3iDleweLVbYefVP9YGFJ%2B4dHL6L2vbve4MRkcAJ1ympsZMIP748AGOqUBs6jOLFeOP%2FFwodOAx4%2BO3RYJtsfgaP%2FTwBDWCudUxfiirDNumCJQVGs5vfJYzad%2BoVVlavlLe7ZkiQDzXpCp5PAYKzCQlxJReNI6TltfOmqDs4whAMpJl6%2FtXGC4YpN7faQCy%2BQf5PqkyR91IaMphwoPLjgyEYNssTw%2FY80ap1SVgNBRPKXLKL%2FUWdD0AZhstm4U%2FIttSifggQvkmZb5t3pbK8iR&X-Amz-Signature=e5c659e8a513329e1e87cbe2079e0454f2f5271ceae7e3059f34a44411ab9578&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYSBN3W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9WGw%2FtAgNC7eiFTvOSSxawVTkAZj334giZf9F%2FFarsgIgaPnqopGQBGM9f4uY00D%2FpeBSf%2FS209vxrkEoYx%2Fv7R0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIflEiurzVSLx7UBcCrcA%2F14KyQ1wDwp4bN4Go8V3vCclEDPnjr6AN6uo4Xe1K%2BHVJMW5WIrrUUGjR%2FZZz%2FiAuuKAlrneZwkwdf75rT9Vbc8x73xNTaT%2FAXlM%2BT0tbaMw%2B7hGeh1VG7btt2cwv2%2Bx2Pc7M1Tx4NqiP%2Fx4FkgEJl%2FeuUhrjfBQCj2X49wa6DMYcRJmmtSqm2T6N3L9M3c5qKwgDRscMvPHu1MC%2FERSMX8Ui3QlUUPlXIsIyUZCU%2FCnGgQGnkPBRvlcHo8mOLaD7UJI6lBW6N0Xkcl9eMh7yxyjzV4XmSjIIIBwkvV%2Bc7xKB8GEW9VOkoi%2Fm8b%2Bo4eWRee0tHU%2FsEQAcM%2FYv%2Bczw6Nnj%2Fkt6rUWr29Po7H%2BNA7wJeGgF8OxkyTEZp7TPSWP9HNAYISVgflL9YHmw%2FjMR9N639Q0wFfmD%2B8pwxqqsDQbfba%2B%2Fb8AA%2FZBo6JzH3Dxo1JN1ouo18A0k10Z3PfMbmgiEBER5ynpoo1UlTGpfV7J7ZJY1EwrAbp0Xy3Qdna7K3Pz6pjgv3oAIjjKU2QFfudsNKcfSelCYRBxaJAwErImjMXnJ05u5EtlMoiIie5kiRxtseruIIdh9y3iDleweLVbYefVP9YGFJ%2B4dHL6L2vbve4MRkcAJ1ympsZMIP748AGOqUBs6jOLFeOP%2FFwodOAx4%2BO3RYJtsfgaP%2FTwBDWCudUxfiirDNumCJQVGs5vfJYzad%2BoVVlavlLe7ZkiQDzXpCp5PAYKzCQlxJReNI6TltfOmqDs4whAMpJl6%2FtXGC4YpN7faQCy%2BQf5PqkyR91IaMphwoPLjgyEYNssTw%2FY80ap1SVgNBRPKXLKL%2FUWdD0AZhstm4U%2FIttSifggQvkmZb5t3pbK8iR&X-Amz-Signature=6259245bd860132c0967216bd0ce53d2bc4a9f303d71081c0a16b6a8c4a4b6f6&X-Amz-SignedHeaders=host&x-id=GetObject)
