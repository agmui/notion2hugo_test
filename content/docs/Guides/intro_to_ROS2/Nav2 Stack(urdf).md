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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZHGTXID%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FklH6B3zLB5bsjuGa5kdsQs1sLSJlDLSpiydFndwYKAiBLW0n7Qmg9uqRjArxz%2Bh5SlOlLfifiBp58b9ea5THotSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2FULdjhS%2Bq5n0q3yKtwDb387Sg8lOr9omTP6Jo8gZ1de%2BlZrf%2FRyHAOW4iCQgHQyZgon4Fln65KOSXSA2d3GRVnzMhikJsZBxLQjPLQoMX%2Bte8wg7VrvPhgXaDP0Mu9M2dlFMXlItdOvEXxsfTYZnVGXE3oe4fPFpkLFJOLBodP9J98E%2BkxAG29b1Zv5vvYZ%2Ffm5q%2BpH2oUuW%2F1k4vtn0OTHrUrs0nrbR%2Bsz%2BrhNq%2BYveh%2FVPzJD6yOyoFp25WXlfaFrnX6MSUpdbzXRL4TSUsAf%2Bnh8dH2%2BaLIEDRguRvxMi5tbPVyx00dWIUJ5ENA%2F%2BVzl6256KVzdTmQnx4nsiycIgo%2F2LwepY2hF3IERKgOiZwSi%2BEzahHh9JpQsOBRM%2F6o6X1Azu%2BKutr2ezzAXr6TmemS3QvL%2BAGQnjERIIYuXy2xiQ1MqsavMGwdTgNPvgj574t3PBwmitZQEnoOBkVfarwYTnI0ctA7u35%2BDMIbroFMHI6m1GZG08%2Bp0pwvgky3lEhndxAQZOYdEiVn2C7h2c1QmnrP8tPPHFu%2BKx9DqDL8%2Bk32LcfY%2F7UtntHV4P99Uj5MMm2kby551FOxAOdRj6nX%2BKFdR10RmeWYe8wSo8vBYXfQe6drsRjFL6f5yUt9R64AOG2K9fIkwubGzwQY6pgFvoyPy49W7nsRLIJNbgt6KtPLlFviwcULBTaU9d92ONIvpHcCadWhyhSDxdP%2BdgcfiGtGUzx7wRVvd4UnECMsGS7MlezFoYhvzrvKe40PqxcYdKqAAP0%2FT9p5snVvfUcl%2Fe01OyA4RO2h0n3BNrB0SRX5Hy2LcvKm8PPOeEwNK9QtGS9B8u5acnHv5x5oLE6jd5X58eDpFI9miGPJ%2F%2BQpF3KN0TPxH&X-Amz-Signature=e01891b5803673a7b4bbf0890ab75d265bce3fad391c7044051c11c81f8b457e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZHGTXID%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FklH6B3zLB5bsjuGa5kdsQs1sLSJlDLSpiydFndwYKAiBLW0n7Qmg9uqRjArxz%2Bh5SlOlLfifiBp58b9ea5THotSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2FULdjhS%2Bq5n0q3yKtwDb387Sg8lOr9omTP6Jo8gZ1de%2BlZrf%2FRyHAOW4iCQgHQyZgon4Fln65KOSXSA2d3GRVnzMhikJsZBxLQjPLQoMX%2Bte8wg7VrvPhgXaDP0Mu9M2dlFMXlItdOvEXxsfTYZnVGXE3oe4fPFpkLFJOLBodP9J98E%2BkxAG29b1Zv5vvYZ%2Ffm5q%2BpH2oUuW%2F1k4vtn0OTHrUrs0nrbR%2Bsz%2BrhNq%2BYveh%2FVPzJD6yOyoFp25WXlfaFrnX6MSUpdbzXRL4TSUsAf%2Bnh8dH2%2BaLIEDRguRvxMi5tbPVyx00dWIUJ5ENA%2F%2BVzl6256KVzdTmQnx4nsiycIgo%2F2LwepY2hF3IERKgOiZwSi%2BEzahHh9JpQsOBRM%2F6o6X1Azu%2BKutr2ezzAXr6TmemS3QvL%2BAGQnjERIIYuXy2xiQ1MqsavMGwdTgNPvgj574t3PBwmitZQEnoOBkVfarwYTnI0ctA7u35%2BDMIbroFMHI6m1GZG08%2Bp0pwvgky3lEhndxAQZOYdEiVn2C7h2c1QmnrP8tPPHFu%2BKx9DqDL8%2Bk32LcfY%2F7UtntHV4P99Uj5MMm2kby551FOxAOdRj6nX%2BKFdR10RmeWYe8wSo8vBYXfQe6drsRjFL6f5yUt9R64AOG2K9fIkwubGzwQY6pgFvoyPy49W7nsRLIJNbgt6KtPLlFviwcULBTaU9d92ONIvpHcCadWhyhSDxdP%2BdgcfiGtGUzx7wRVvd4UnECMsGS7MlezFoYhvzrvKe40PqxcYdKqAAP0%2FT9p5snVvfUcl%2Fe01OyA4RO2h0n3BNrB0SRX5Hy2LcvKm8PPOeEwNK9QtGS9B8u5acnHv5x5oLE6jd5X58eDpFI9miGPJ%2F%2BQpF3KN0TPxH&X-Amz-Signature=73a1237bcd28b02355b3b9abc286dc1ee05528dbe5328e8386fdbca8c62fa36c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZHGTXID%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FklH6B3zLB5bsjuGa5kdsQs1sLSJlDLSpiydFndwYKAiBLW0n7Qmg9uqRjArxz%2Bh5SlOlLfifiBp58b9ea5THotSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2FULdjhS%2Bq5n0q3yKtwDb387Sg8lOr9omTP6Jo8gZ1de%2BlZrf%2FRyHAOW4iCQgHQyZgon4Fln65KOSXSA2d3GRVnzMhikJsZBxLQjPLQoMX%2Bte8wg7VrvPhgXaDP0Mu9M2dlFMXlItdOvEXxsfTYZnVGXE3oe4fPFpkLFJOLBodP9J98E%2BkxAG29b1Zv5vvYZ%2Ffm5q%2BpH2oUuW%2F1k4vtn0OTHrUrs0nrbR%2Bsz%2BrhNq%2BYveh%2FVPzJD6yOyoFp25WXlfaFrnX6MSUpdbzXRL4TSUsAf%2Bnh8dH2%2BaLIEDRguRvxMi5tbPVyx00dWIUJ5ENA%2F%2BVzl6256KVzdTmQnx4nsiycIgo%2F2LwepY2hF3IERKgOiZwSi%2BEzahHh9JpQsOBRM%2F6o6X1Azu%2BKutr2ezzAXr6TmemS3QvL%2BAGQnjERIIYuXy2xiQ1MqsavMGwdTgNPvgj574t3PBwmitZQEnoOBkVfarwYTnI0ctA7u35%2BDMIbroFMHI6m1GZG08%2Bp0pwvgky3lEhndxAQZOYdEiVn2C7h2c1QmnrP8tPPHFu%2BKx9DqDL8%2Bk32LcfY%2F7UtntHV4P99Uj5MMm2kby551FOxAOdRj6nX%2BKFdR10RmeWYe8wSo8vBYXfQe6drsRjFL6f5yUt9R64AOG2K9fIkwubGzwQY6pgFvoyPy49W7nsRLIJNbgt6KtPLlFviwcULBTaU9d92ONIvpHcCadWhyhSDxdP%2BdgcfiGtGUzx7wRVvd4UnECMsGS7MlezFoYhvzrvKe40PqxcYdKqAAP0%2FT9p5snVvfUcl%2Fe01OyA4RO2h0n3BNrB0SRX5Hy2LcvKm8PPOeEwNK9QtGS9B8u5acnHv5x5oLE6jd5X58eDpFI9miGPJ%2F%2BQpF3KN0TPxH&X-Amz-Signature=61987e63f9b5a9431be419844b73c5d81a587349f7215f83751837c45aa28344&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZHGTXID%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FklH6B3zLB5bsjuGa5kdsQs1sLSJlDLSpiydFndwYKAiBLW0n7Qmg9uqRjArxz%2Bh5SlOlLfifiBp58b9ea5THotSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2FULdjhS%2Bq5n0q3yKtwDb387Sg8lOr9omTP6Jo8gZ1de%2BlZrf%2FRyHAOW4iCQgHQyZgon4Fln65KOSXSA2d3GRVnzMhikJsZBxLQjPLQoMX%2Bte8wg7VrvPhgXaDP0Mu9M2dlFMXlItdOvEXxsfTYZnVGXE3oe4fPFpkLFJOLBodP9J98E%2BkxAG29b1Zv5vvYZ%2Ffm5q%2BpH2oUuW%2F1k4vtn0OTHrUrs0nrbR%2Bsz%2BrhNq%2BYveh%2FVPzJD6yOyoFp25WXlfaFrnX6MSUpdbzXRL4TSUsAf%2Bnh8dH2%2BaLIEDRguRvxMi5tbPVyx00dWIUJ5ENA%2F%2BVzl6256KVzdTmQnx4nsiycIgo%2F2LwepY2hF3IERKgOiZwSi%2BEzahHh9JpQsOBRM%2F6o6X1Azu%2BKutr2ezzAXr6TmemS3QvL%2BAGQnjERIIYuXy2xiQ1MqsavMGwdTgNPvgj574t3PBwmitZQEnoOBkVfarwYTnI0ctA7u35%2BDMIbroFMHI6m1GZG08%2Bp0pwvgky3lEhndxAQZOYdEiVn2C7h2c1QmnrP8tPPHFu%2BKx9DqDL8%2Bk32LcfY%2F7UtntHV4P99Uj5MMm2kby551FOxAOdRj6nX%2BKFdR10RmeWYe8wSo8vBYXfQe6drsRjFL6f5yUt9R64AOG2K9fIkwubGzwQY6pgFvoyPy49W7nsRLIJNbgt6KtPLlFviwcULBTaU9d92ONIvpHcCadWhyhSDxdP%2BdgcfiGtGUzx7wRVvd4UnECMsGS7MlezFoYhvzrvKe40PqxcYdKqAAP0%2FT9p5snVvfUcl%2Fe01OyA4RO2h0n3BNrB0SRX5Hy2LcvKm8PPOeEwNK9QtGS9B8u5acnHv5x5oLE6jd5X58eDpFI9miGPJ%2F%2BQpF3KN0TPxH&X-Amz-Signature=dc9bbfac897331eb72c4258f3497455678c0e068e9d8befaa264fabe1e7ba3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZHGTXID%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FklH6B3zLB5bsjuGa5kdsQs1sLSJlDLSpiydFndwYKAiBLW0n7Qmg9uqRjArxz%2Bh5SlOlLfifiBp58b9ea5THotSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2FULdjhS%2Bq5n0q3yKtwDb387Sg8lOr9omTP6Jo8gZ1de%2BlZrf%2FRyHAOW4iCQgHQyZgon4Fln65KOSXSA2d3GRVnzMhikJsZBxLQjPLQoMX%2Bte8wg7VrvPhgXaDP0Mu9M2dlFMXlItdOvEXxsfTYZnVGXE3oe4fPFpkLFJOLBodP9J98E%2BkxAG29b1Zv5vvYZ%2Ffm5q%2BpH2oUuW%2F1k4vtn0OTHrUrs0nrbR%2Bsz%2BrhNq%2BYveh%2FVPzJD6yOyoFp25WXlfaFrnX6MSUpdbzXRL4TSUsAf%2Bnh8dH2%2BaLIEDRguRvxMi5tbPVyx00dWIUJ5ENA%2F%2BVzl6256KVzdTmQnx4nsiycIgo%2F2LwepY2hF3IERKgOiZwSi%2BEzahHh9JpQsOBRM%2F6o6X1Azu%2BKutr2ezzAXr6TmemS3QvL%2BAGQnjERIIYuXy2xiQ1MqsavMGwdTgNPvgj574t3PBwmitZQEnoOBkVfarwYTnI0ctA7u35%2BDMIbroFMHI6m1GZG08%2Bp0pwvgky3lEhndxAQZOYdEiVn2C7h2c1QmnrP8tPPHFu%2BKx9DqDL8%2Bk32LcfY%2F7UtntHV4P99Uj5MMm2kby551FOxAOdRj6nX%2BKFdR10RmeWYe8wSo8vBYXfQe6drsRjFL6f5yUt9R64AOG2K9fIkwubGzwQY6pgFvoyPy49W7nsRLIJNbgt6KtPLlFviwcULBTaU9d92ONIvpHcCadWhyhSDxdP%2BdgcfiGtGUzx7wRVvd4UnECMsGS7MlezFoYhvzrvKe40PqxcYdKqAAP0%2FT9p5snVvfUcl%2Fe01OyA4RO2h0n3BNrB0SRX5Hy2LcvKm8PPOeEwNK9QtGS9B8u5acnHv5x5oLE6jd5X58eDpFI9miGPJ%2F%2BQpF3KN0TPxH&X-Amz-Signature=bb6f5bcac4dbe79d7b78e47926c62cf3db05fa349674f01a05805a60bb373e72&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZHGTXID%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FklH6B3zLB5bsjuGa5kdsQs1sLSJlDLSpiydFndwYKAiBLW0n7Qmg9uqRjArxz%2Bh5SlOlLfifiBp58b9ea5THotSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2FULdjhS%2Bq5n0q3yKtwDb387Sg8lOr9omTP6Jo8gZ1de%2BlZrf%2FRyHAOW4iCQgHQyZgon4Fln65KOSXSA2d3GRVnzMhikJsZBxLQjPLQoMX%2Bte8wg7VrvPhgXaDP0Mu9M2dlFMXlItdOvEXxsfTYZnVGXE3oe4fPFpkLFJOLBodP9J98E%2BkxAG29b1Zv5vvYZ%2Ffm5q%2BpH2oUuW%2F1k4vtn0OTHrUrs0nrbR%2Bsz%2BrhNq%2BYveh%2FVPzJD6yOyoFp25WXlfaFrnX6MSUpdbzXRL4TSUsAf%2Bnh8dH2%2BaLIEDRguRvxMi5tbPVyx00dWIUJ5ENA%2F%2BVzl6256KVzdTmQnx4nsiycIgo%2F2LwepY2hF3IERKgOiZwSi%2BEzahHh9JpQsOBRM%2F6o6X1Azu%2BKutr2ezzAXr6TmemS3QvL%2BAGQnjERIIYuXy2xiQ1MqsavMGwdTgNPvgj574t3PBwmitZQEnoOBkVfarwYTnI0ctA7u35%2BDMIbroFMHI6m1GZG08%2Bp0pwvgky3lEhndxAQZOYdEiVn2C7h2c1QmnrP8tPPHFu%2BKx9DqDL8%2Bk32LcfY%2F7UtntHV4P99Uj5MMm2kby551FOxAOdRj6nX%2BKFdR10RmeWYe8wSo8vBYXfQe6drsRjFL6f5yUt9R64AOG2K9fIkwubGzwQY6pgFvoyPy49W7nsRLIJNbgt6KtPLlFviwcULBTaU9d92ONIvpHcCadWhyhSDxdP%2BdgcfiGtGUzx7wRVvd4UnECMsGS7MlezFoYhvzrvKe40PqxcYdKqAAP0%2FT9p5snVvfUcl%2Fe01OyA4RO2h0n3BNrB0SRX5Hy2LcvKm8PPOeEwNK9QtGS9B8u5acnHv5x5oLE6jd5X58eDpFI9miGPJ%2F%2BQpF3KN0TPxH&X-Amz-Signature=3b59e2f2bdb72309cf350b977459df9c62829e63a020520b2e21bcc53ef6d3ee&X-Amz-SignedHeaders=host&x-id=GetObject)
