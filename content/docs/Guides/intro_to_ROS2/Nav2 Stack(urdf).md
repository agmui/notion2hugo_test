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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7WVTD4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnjcHqEDOPG9ZLf3FC2ntwltSXtzF65ImgkE0O59WkuAIgbPOmbE%2F%2FNmrBd%2BNVINvnRnDJhv%2FCBRcLnjodmOSM12oq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDENAfiIDpY0po3VhSyrcA3CdliOlXP6KkXjM15y43UwgHhOgZ8Kxwd2ZtTATef4BrumuRbNIjrS2w8%2F3si0oZn%2FlGT7Qidd8agN3kdDH5NdtN9d6zjzrrxAoD2cklA2fH0Eyj32dOxxAe509TpBsP0CCqiNd7sYyBQ6ijGzsBF9E6ZkE8n0zL7YJH6naTiF4z2wzky27x6vMLOVUigjljF16zs9kqtOPM4701AGbtHiBiAa39Fei2i00F7bh80Gkcc%2FFJ3uaZSrD8Kmfkvz4jnHfPqQ%2BbKlK7QfxH7%2FUxOK0%2B3ElYyyrd4%2B67PlajZOofX%2Blaz3t%2Fg0Tk11Qa%2ByUlaqjDobb%2B1IQQ9Ls%2BygeWP%2BvNn0fe6PkJrkR4hbF4fz7g%2Bd1QNT2gT2VnPZ%2FdJqKuLj9hDhDggGW60x98RYXUVL4Ov9MpCTvXTbSbLvjRpgwxcOcXyWtz%2B0YciIXOUUHqIhMq7fEoeiHz987Mvn%2F11T9tSdG9phkRjz48cCIW7Q0axjBHGukodAfPJ0M3UbLsjVTq0oCiz0dj0dQvDAx5A%2Bg6qPUgHqz2aiS%2B9du5nVP3m846DnvERIbShmRkiEhK6uLSglJCyjRlzMV2xtVXT%2Brv8lADuBQEKuPgVsGOxMugn6CUCYVuvE63KguMJiptMAGOqUB8te7VXcG%2BswzsCTtK2pEbbjoS8cRbpsBo9%2FST6dtWtE9toev3cA6%2Fkm7m4dISLr6ss%2FoXBu9OtRYzdBbalDg24RZ1RgjQSMxXxXKb3MmtAC7xJ%2F4NRa3UuTKjn8S8cN%2FCF20Na5UwQ7YrdNWpv%2B3MQKs3PL7L1PbdrEQuvG3%2FPygSjoVUCZKmCzpb6M0YBfg%2Bz5g7dQMAZpAibrbJojS7EidtH1R&X-Amz-Signature=d0040bd8716a875212cc6e1fe5e8d0189da0fbe64702cb8f8b27d1d685521ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7WVTD4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnjcHqEDOPG9ZLf3FC2ntwltSXtzF65ImgkE0O59WkuAIgbPOmbE%2F%2FNmrBd%2BNVINvnRnDJhv%2FCBRcLnjodmOSM12oq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDENAfiIDpY0po3VhSyrcA3CdliOlXP6KkXjM15y43UwgHhOgZ8Kxwd2ZtTATef4BrumuRbNIjrS2w8%2F3si0oZn%2FlGT7Qidd8agN3kdDH5NdtN9d6zjzrrxAoD2cklA2fH0Eyj32dOxxAe509TpBsP0CCqiNd7sYyBQ6ijGzsBF9E6ZkE8n0zL7YJH6naTiF4z2wzky27x6vMLOVUigjljF16zs9kqtOPM4701AGbtHiBiAa39Fei2i00F7bh80Gkcc%2FFJ3uaZSrD8Kmfkvz4jnHfPqQ%2BbKlK7QfxH7%2FUxOK0%2B3ElYyyrd4%2B67PlajZOofX%2Blaz3t%2Fg0Tk11Qa%2ByUlaqjDobb%2B1IQQ9Ls%2BygeWP%2BvNn0fe6PkJrkR4hbF4fz7g%2Bd1QNT2gT2VnPZ%2FdJqKuLj9hDhDggGW60x98RYXUVL4Ov9MpCTvXTbSbLvjRpgwxcOcXyWtz%2B0YciIXOUUHqIhMq7fEoeiHz987Mvn%2F11T9tSdG9phkRjz48cCIW7Q0axjBHGukodAfPJ0M3UbLsjVTq0oCiz0dj0dQvDAx5A%2Bg6qPUgHqz2aiS%2B9du5nVP3m846DnvERIbShmRkiEhK6uLSglJCyjRlzMV2xtVXT%2Brv8lADuBQEKuPgVsGOxMugn6CUCYVuvE63KguMJiptMAGOqUB8te7VXcG%2BswzsCTtK2pEbbjoS8cRbpsBo9%2FST6dtWtE9toev3cA6%2Fkm7m4dISLr6ss%2FoXBu9OtRYzdBbalDg24RZ1RgjQSMxXxXKb3MmtAC7xJ%2F4NRa3UuTKjn8S8cN%2FCF20Na5UwQ7YrdNWpv%2B3MQKs3PL7L1PbdrEQuvG3%2FPygSjoVUCZKmCzpb6M0YBfg%2Bz5g7dQMAZpAibrbJojS7EidtH1R&X-Amz-Signature=ae6b25a7bb36dccf6e6e20e58e8bec24efba04a3471f188dc1d1d3f617a0e429&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7WVTD4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnjcHqEDOPG9ZLf3FC2ntwltSXtzF65ImgkE0O59WkuAIgbPOmbE%2F%2FNmrBd%2BNVINvnRnDJhv%2FCBRcLnjodmOSM12oq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDENAfiIDpY0po3VhSyrcA3CdliOlXP6KkXjM15y43UwgHhOgZ8Kxwd2ZtTATef4BrumuRbNIjrS2w8%2F3si0oZn%2FlGT7Qidd8agN3kdDH5NdtN9d6zjzrrxAoD2cklA2fH0Eyj32dOxxAe509TpBsP0CCqiNd7sYyBQ6ijGzsBF9E6ZkE8n0zL7YJH6naTiF4z2wzky27x6vMLOVUigjljF16zs9kqtOPM4701AGbtHiBiAa39Fei2i00F7bh80Gkcc%2FFJ3uaZSrD8Kmfkvz4jnHfPqQ%2BbKlK7QfxH7%2FUxOK0%2B3ElYyyrd4%2B67PlajZOofX%2Blaz3t%2Fg0Tk11Qa%2ByUlaqjDobb%2B1IQQ9Ls%2BygeWP%2BvNn0fe6PkJrkR4hbF4fz7g%2Bd1QNT2gT2VnPZ%2FdJqKuLj9hDhDggGW60x98RYXUVL4Ov9MpCTvXTbSbLvjRpgwxcOcXyWtz%2B0YciIXOUUHqIhMq7fEoeiHz987Mvn%2F11T9tSdG9phkRjz48cCIW7Q0axjBHGukodAfPJ0M3UbLsjVTq0oCiz0dj0dQvDAx5A%2Bg6qPUgHqz2aiS%2B9du5nVP3m846DnvERIbShmRkiEhK6uLSglJCyjRlzMV2xtVXT%2Brv8lADuBQEKuPgVsGOxMugn6CUCYVuvE63KguMJiptMAGOqUB8te7VXcG%2BswzsCTtK2pEbbjoS8cRbpsBo9%2FST6dtWtE9toev3cA6%2Fkm7m4dISLr6ss%2FoXBu9OtRYzdBbalDg24RZ1RgjQSMxXxXKb3MmtAC7xJ%2F4NRa3UuTKjn8S8cN%2FCF20Na5UwQ7YrdNWpv%2B3MQKs3PL7L1PbdrEQuvG3%2FPygSjoVUCZKmCzpb6M0YBfg%2Bz5g7dQMAZpAibrbJojS7EidtH1R&X-Amz-Signature=2c3a37583fc1705ded469ad22b33164d887ba80335c3f3c2be7816ebc0eada77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7WVTD4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnjcHqEDOPG9ZLf3FC2ntwltSXtzF65ImgkE0O59WkuAIgbPOmbE%2F%2FNmrBd%2BNVINvnRnDJhv%2FCBRcLnjodmOSM12oq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDENAfiIDpY0po3VhSyrcA3CdliOlXP6KkXjM15y43UwgHhOgZ8Kxwd2ZtTATef4BrumuRbNIjrS2w8%2F3si0oZn%2FlGT7Qidd8agN3kdDH5NdtN9d6zjzrrxAoD2cklA2fH0Eyj32dOxxAe509TpBsP0CCqiNd7sYyBQ6ijGzsBF9E6ZkE8n0zL7YJH6naTiF4z2wzky27x6vMLOVUigjljF16zs9kqtOPM4701AGbtHiBiAa39Fei2i00F7bh80Gkcc%2FFJ3uaZSrD8Kmfkvz4jnHfPqQ%2BbKlK7QfxH7%2FUxOK0%2B3ElYyyrd4%2B67PlajZOofX%2Blaz3t%2Fg0Tk11Qa%2ByUlaqjDobb%2B1IQQ9Ls%2BygeWP%2BvNn0fe6PkJrkR4hbF4fz7g%2Bd1QNT2gT2VnPZ%2FdJqKuLj9hDhDggGW60x98RYXUVL4Ov9MpCTvXTbSbLvjRpgwxcOcXyWtz%2B0YciIXOUUHqIhMq7fEoeiHz987Mvn%2F11T9tSdG9phkRjz48cCIW7Q0axjBHGukodAfPJ0M3UbLsjVTq0oCiz0dj0dQvDAx5A%2Bg6qPUgHqz2aiS%2B9du5nVP3m846DnvERIbShmRkiEhK6uLSglJCyjRlzMV2xtVXT%2Brv8lADuBQEKuPgVsGOxMugn6CUCYVuvE63KguMJiptMAGOqUB8te7VXcG%2BswzsCTtK2pEbbjoS8cRbpsBo9%2FST6dtWtE9toev3cA6%2Fkm7m4dISLr6ss%2FoXBu9OtRYzdBbalDg24RZ1RgjQSMxXxXKb3MmtAC7xJ%2F4NRa3UuTKjn8S8cN%2FCF20Na5UwQ7YrdNWpv%2B3MQKs3PL7L1PbdrEQuvG3%2FPygSjoVUCZKmCzpb6M0YBfg%2Bz5g7dQMAZpAibrbJojS7EidtH1R&X-Amz-Signature=80ac81a888360e04e4b6630d6d88654a84a92ffd2cb7c5ce40a4692cde8be570&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7WVTD4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnjcHqEDOPG9ZLf3FC2ntwltSXtzF65ImgkE0O59WkuAIgbPOmbE%2F%2FNmrBd%2BNVINvnRnDJhv%2FCBRcLnjodmOSM12oq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDENAfiIDpY0po3VhSyrcA3CdliOlXP6KkXjM15y43UwgHhOgZ8Kxwd2ZtTATef4BrumuRbNIjrS2w8%2F3si0oZn%2FlGT7Qidd8agN3kdDH5NdtN9d6zjzrrxAoD2cklA2fH0Eyj32dOxxAe509TpBsP0CCqiNd7sYyBQ6ijGzsBF9E6ZkE8n0zL7YJH6naTiF4z2wzky27x6vMLOVUigjljF16zs9kqtOPM4701AGbtHiBiAa39Fei2i00F7bh80Gkcc%2FFJ3uaZSrD8Kmfkvz4jnHfPqQ%2BbKlK7QfxH7%2FUxOK0%2B3ElYyyrd4%2B67PlajZOofX%2Blaz3t%2Fg0Tk11Qa%2ByUlaqjDobb%2B1IQQ9Ls%2BygeWP%2BvNn0fe6PkJrkR4hbF4fz7g%2Bd1QNT2gT2VnPZ%2FdJqKuLj9hDhDggGW60x98RYXUVL4Ov9MpCTvXTbSbLvjRpgwxcOcXyWtz%2B0YciIXOUUHqIhMq7fEoeiHz987Mvn%2F11T9tSdG9phkRjz48cCIW7Q0axjBHGukodAfPJ0M3UbLsjVTq0oCiz0dj0dQvDAx5A%2Bg6qPUgHqz2aiS%2B9du5nVP3m846DnvERIbShmRkiEhK6uLSglJCyjRlzMV2xtVXT%2Brv8lADuBQEKuPgVsGOxMugn6CUCYVuvE63KguMJiptMAGOqUB8te7VXcG%2BswzsCTtK2pEbbjoS8cRbpsBo9%2FST6dtWtE9toev3cA6%2Fkm7m4dISLr6ss%2FoXBu9OtRYzdBbalDg24RZ1RgjQSMxXxXKb3MmtAC7xJ%2F4NRa3UuTKjn8S8cN%2FCF20Na5UwQ7YrdNWpv%2B3MQKs3PL7L1PbdrEQuvG3%2FPygSjoVUCZKmCzpb6M0YBfg%2Bz5g7dQMAZpAibrbJojS7EidtH1R&X-Amz-Signature=fc238ab279de54010bdcbf22080d7aa1b4cdc0753fdda14b8b0148ae73ddf8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7WVTD4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnjcHqEDOPG9ZLf3FC2ntwltSXtzF65ImgkE0O59WkuAIgbPOmbE%2F%2FNmrBd%2BNVINvnRnDJhv%2FCBRcLnjodmOSM12oq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDENAfiIDpY0po3VhSyrcA3CdliOlXP6KkXjM15y43UwgHhOgZ8Kxwd2ZtTATef4BrumuRbNIjrS2w8%2F3si0oZn%2FlGT7Qidd8agN3kdDH5NdtN9d6zjzrrxAoD2cklA2fH0Eyj32dOxxAe509TpBsP0CCqiNd7sYyBQ6ijGzsBF9E6ZkE8n0zL7YJH6naTiF4z2wzky27x6vMLOVUigjljF16zs9kqtOPM4701AGbtHiBiAa39Fei2i00F7bh80Gkcc%2FFJ3uaZSrD8Kmfkvz4jnHfPqQ%2BbKlK7QfxH7%2FUxOK0%2B3ElYyyrd4%2B67PlajZOofX%2Blaz3t%2Fg0Tk11Qa%2ByUlaqjDobb%2B1IQQ9Ls%2BygeWP%2BvNn0fe6PkJrkR4hbF4fz7g%2Bd1QNT2gT2VnPZ%2FdJqKuLj9hDhDggGW60x98RYXUVL4Ov9MpCTvXTbSbLvjRpgwxcOcXyWtz%2B0YciIXOUUHqIhMq7fEoeiHz987Mvn%2F11T9tSdG9phkRjz48cCIW7Q0axjBHGukodAfPJ0M3UbLsjVTq0oCiz0dj0dQvDAx5A%2Bg6qPUgHqz2aiS%2B9du5nVP3m846DnvERIbShmRkiEhK6uLSglJCyjRlzMV2xtVXT%2Brv8lADuBQEKuPgVsGOxMugn6CUCYVuvE63KguMJiptMAGOqUB8te7VXcG%2BswzsCTtK2pEbbjoS8cRbpsBo9%2FST6dtWtE9toev3cA6%2Fkm7m4dISLr6ss%2FoXBu9OtRYzdBbalDg24RZ1RgjQSMxXxXKb3MmtAC7xJ%2F4NRa3UuTKjn8S8cN%2FCF20Na5UwQ7YrdNWpv%2B3MQKs3PL7L1PbdrEQuvG3%2FPygSjoVUCZKmCzpb6M0YBfg%2Bz5g7dQMAZpAibrbJojS7EidtH1R&X-Amz-Signature=0792d2d9f4a679298f3fbdf805b78ee2802cc8546f2806c68c355f00ca04c6f3&X-Amz-SignedHeaders=host&x-id=GetObject)
