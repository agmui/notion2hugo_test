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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDOC4O3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFEFCRuGE2Xexeltgx0PkKqD8xAhkg85w%2BDT%2FmdIclSZAiB34%2FNnlX7IDlWYC1RbHVxBL0OEobhDeBTYoyEMylR3ICr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMfDqX5JZWNNkvFEI0KtwDCWsXlsW90%2FNaUNuW%2BRSzTE5dWeYMj2PcBMg9eJbMjkZVQ8NN6k7xOMFpLsxvW9tbzxChXN3sk71%2Fwtadl%2BVjACjCdfYVNZn5zJCCoLNWv3Pvrbcv2AENWBnqbTaCOS5w62%2BRqqSGXD%2BCBCGDjqtuGuQzUmcmZ1dOLOnNX4Q4rrUkYWlnr8JA482UgGvC7pK7yTRY%2FSEsAvoTiIYvUfV5hVvhZxpE5XVauNCFGWJUuJMBrMP4s5%2FkbTxupIIzpZGICatnk4q6iZ1x6B8cw7BCK1OGOb8tNnNcBI2MChdITuvINl%2BINt0rsD%2FjULxyPpjz5DdFnIT5Fy32MCpPSjc7jKcQqj0rw3pJlWeN%2BXqGsACGuT1zXMT0lwmtUxcm96OBpSggSlc6cNXhOnzolRH8pxuc%2B4Li2%2Fn9ODRzOJO0e5L6xrrS4kXdTxsS%2F5F5fySnyghr20grkqjYxGQjd5D4eMcazZM6CHRLCRNYd1IJwTW1hla0quOnO9y7WmAkK1q83PpwuaMsV9ZAwE3nQsQmYF9X4wJ28Rr%2F80hFT7YZtRWAlGawKDghJqmkzk4lmh3CjqsAlTWpIBmemKGMi%2FmV6yrgEdEAly0EOIX5qbrrI9%2Fep0p7oQtKAVppDocw%2BOSbwwY6pgGFOKTPkKCl94n07HzLr2hFRJ7w5f%2FSOtu10Jnrdz%2BgPrTvN1W%2Bocq34mgy3g4ROWCihgxSAIGElNmD0w10BSle82wmBiDf3jIAutBfbP6fA3wt5ABSJBEOGlzr1vz5hk9TZYnY7G9v5%2BmHaiyvjeFMOJbzPPN%2Fbiw2tQ%2Fk1L2nN7wIV3LFFLjzdk5AQLwJ1X3LF57vTHaKm8uH8uB%2B8tyRRNFaF1%2Bs&X-Amz-Signature=81b81a94a055375a77e028453961139716c8fd92082f74d3f6e7fa94a0dd3da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDOC4O3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFEFCRuGE2Xexeltgx0PkKqD8xAhkg85w%2BDT%2FmdIclSZAiB34%2FNnlX7IDlWYC1RbHVxBL0OEobhDeBTYoyEMylR3ICr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMfDqX5JZWNNkvFEI0KtwDCWsXlsW90%2FNaUNuW%2BRSzTE5dWeYMj2PcBMg9eJbMjkZVQ8NN6k7xOMFpLsxvW9tbzxChXN3sk71%2Fwtadl%2BVjACjCdfYVNZn5zJCCoLNWv3Pvrbcv2AENWBnqbTaCOS5w62%2BRqqSGXD%2BCBCGDjqtuGuQzUmcmZ1dOLOnNX4Q4rrUkYWlnr8JA482UgGvC7pK7yTRY%2FSEsAvoTiIYvUfV5hVvhZxpE5XVauNCFGWJUuJMBrMP4s5%2FkbTxupIIzpZGICatnk4q6iZ1x6B8cw7BCK1OGOb8tNnNcBI2MChdITuvINl%2BINt0rsD%2FjULxyPpjz5DdFnIT5Fy32MCpPSjc7jKcQqj0rw3pJlWeN%2BXqGsACGuT1zXMT0lwmtUxcm96OBpSggSlc6cNXhOnzolRH8pxuc%2B4Li2%2Fn9ODRzOJO0e5L6xrrS4kXdTxsS%2F5F5fySnyghr20grkqjYxGQjd5D4eMcazZM6CHRLCRNYd1IJwTW1hla0quOnO9y7WmAkK1q83PpwuaMsV9ZAwE3nQsQmYF9X4wJ28Rr%2F80hFT7YZtRWAlGawKDghJqmkzk4lmh3CjqsAlTWpIBmemKGMi%2FmV6yrgEdEAly0EOIX5qbrrI9%2Fep0p7oQtKAVppDocw%2BOSbwwY6pgGFOKTPkKCl94n07HzLr2hFRJ7w5f%2FSOtu10Jnrdz%2BgPrTvN1W%2Bocq34mgy3g4ROWCihgxSAIGElNmD0w10BSle82wmBiDf3jIAutBfbP6fA3wt5ABSJBEOGlzr1vz5hk9TZYnY7G9v5%2BmHaiyvjeFMOJbzPPN%2Fbiw2tQ%2Fk1L2nN7wIV3LFFLjzdk5AQLwJ1X3LF57vTHaKm8uH8uB%2B8tyRRNFaF1%2Bs&X-Amz-Signature=ee53dcc96f5d87cbe0a63edd4f2ad49b6928e592fe114a2e697e144f2a1df4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDOC4O3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFEFCRuGE2Xexeltgx0PkKqD8xAhkg85w%2BDT%2FmdIclSZAiB34%2FNnlX7IDlWYC1RbHVxBL0OEobhDeBTYoyEMylR3ICr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMfDqX5JZWNNkvFEI0KtwDCWsXlsW90%2FNaUNuW%2BRSzTE5dWeYMj2PcBMg9eJbMjkZVQ8NN6k7xOMFpLsxvW9tbzxChXN3sk71%2Fwtadl%2BVjACjCdfYVNZn5zJCCoLNWv3Pvrbcv2AENWBnqbTaCOS5w62%2BRqqSGXD%2BCBCGDjqtuGuQzUmcmZ1dOLOnNX4Q4rrUkYWlnr8JA482UgGvC7pK7yTRY%2FSEsAvoTiIYvUfV5hVvhZxpE5XVauNCFGWJUuJMBrMP4s5%2FkbTxupIIzpZGICatnk4q6iZ1x6B8cw7BCK1OGOb8tNnNcBI2MChdITuvINl%2BINt0rsD%2FjULxyPpjz5DdFnIT5Fy32MCpPSjc7jKcQqj0rw3pJlWeN%2BXqGsACGuT1zXMT0lwmtUxcm96OBpSggSlc6cNXhOnzolRH8pxuc%2B4Li2%2Fn9ODRzOJO0e5L6xrrS4kXdTxsS%2F5F5fySnyghr20grkqjYxGQjd5D4eMcazZM6CHRLCRNYd1IJwTW1hla0quOnO9y7WmAkK1q83PpwuaMsV9ZAwE3nQsQmYF9X4wJ28Rr%2F80hFT7YZtRWAlGawKDghJqmkzk4lmh3CjqsAlTWpIBmemKGMi%2FmV6yrgEdEAly0EOIX5qbrrI9%2Fep0p7oQtKAVppDocw%2BOSbwwY6pgGFOKTPkKCl94n07HzLr2hFRJ7w5f%2FSOtu10Jnrdz%2BgPrTvN1W%2Bocq34mgy3g4ROWCihgxSAIGElNmD0w10BSle82wmBiDf3jIAutBfbP6fA3wt5ABSJBEOGlzr1vz5hk9TZYnY7G9v5%2BmHaiyvjeFMOJbzPPN%2Fbiw2tQ%2Fk1L2nN7wIV3LFFLjzdk5AQLwJ1X3LF57vTHaKm8uH8uB%2B8tyRRNFaF1%2Bs&X-Amz-Signature=008d9e2b2e7f63d4211e732c5ff63f753cfd808eeab88c4937fb70a07ed34e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDOC4O3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFEFCRuGE2Xexeltgx0PkKqD8xAhkg85w%2BDT%2FmdIclSZAiB34%2FNnlX7IDlWYC1RbHVxBL0OEobhDeBTYoyEMylR3ICr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMfDqX5JZWNNkvFEI0KtwDCWsXlsW90%2FNaUNuW%2BRSzTE5dWeYMj2PcBMg9eJbMjkZVQ8NN6k7xOMFpLsxvW9tbzxChXN3sk71%2Fwtadl%2BVjACjCdfYVNZn5zJCCoLNWv3Pvrbcv2AENWBnqbTaCOS5w62%2BRqqSGXD%2BCBCGDjqtuGuQzUmcmZ1dOLOnNX4Q4rrUkYWlnr8JA482UgGvC7pK7yTRY%2FSEsAvoTiIYvUfV5hVvhZxpE5XVauNCFGWJUuJMBrMP4s5%2FkbTxupIIzpZGICatnk4q6iZ1x6B8cw7BCK1OGOb8tNnNcBI2MChdITuvINl%2BINt0rsD%2FjULxyPpjz5DdFnIT5Fy32MCpPSjc7jKcQqj0rw3pJlWeN%2BXqGsACGuT1zXMT0lwmtUxcm96OBpSggSlc6cNXhOnzolRH8pxuc%2B4Li2%2Fn9ODRzOJO0e5L6xrrS4kXdTxsS%2F5F5fySnyghr20grkqjYxGQjd5D4eMcazZM6CHRLCRNYd1IJwTW1hla0quOnO9y7WmAkK1q83PpwuaMsV9ZAwE3nQsQmYF9X4wJ28Rr%2F80hFT7YZtRWAlGawKDghJqmkzk4lmh3CjqsAlTWpIBmemKGMi%2FmV6yrgEdEAly0EOIX5qbrrI9%2Fep0p7oQtKAVppDocw%2BOSbwwY6pgGFOKTPkKCl94n07HzLr2hFRJ7w5f%2FSOtu10Jnrdz%2BgPrTvN1W%2Bocq34mgy3g4ROWCihgxSAIGElNmD0w10BSle82wmBiDf3jIAutBfbP6fA3wt5ABSJBEOGlzr1vz5hk9TZYnY7G9v5%2BmHaiyvjeFMOJbzPPN%2Fbiw2tQ%2Fk1L2nN7wIV3LFFLjzdk5AQLwJ1X3LF57vTHaKm8uH8uB%2B8tyRRNFaF1%2Bs&X-Amz-Signature=eee4dcdd3ac0fe94ac7e0c9786c8373570bc0c72667bd3eece971dae44110f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDOC4O3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFEFCRuGE2Xexeltgx0PkKqD8xAhkg85w%2BDT%2FmdIclSZAiB34%2FNnlX7IDlWYC1RbHVxBL0OEobhDeBTYoyEMylR3ICr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMfDqX5JZWNNkvFEI0KtwDCWsXlsW90%2FNaUNuW%2BRSzTE5dWeYMj2PcBMg9eJbMjkZVQ8NN6k7xOMFpLsxvW9tbzxChXN3sk71%2Fwtadl%2BVjACjCdfYVNZn5zJCCoLNWv3Pvrbcv2AENWBnqbTaCOS5w62%2BRqqSGXD%2BCBCGDjqtuGuQzUmcmZ1dOLOnNX4Q4rrUkYWlnr8JA482UgGvC7pK7yTRY%2FSEsAvoTiIYvUfV5hVvhZxpE5XVauNCFGWJUuJMBrMP4s5%2FkbTxupIIzpZGICatnk4q6iZ1x6B8cw7BCK1OGOb8tNnNcBI2MChdITuvINl%2BINt0rsD%2FjULxyPpjz5DdFnIT5Fy32MCpPSjc7jKcQqj0rw3pJlWeN%2BXqGsACGuT1zXMT0lwmtUxcm96OBpSggSlc6cNXhOnzolRH8pxuc%2B4Li2%2Fn9ODRzOJO0e5L6xrrS4kXdTxsS%2F5F5fySnyghr20grkqjYxGQjd5D4eMcazZM6CHRLCRNYd1IJwTW1hla0quOnO9y7WmAkK1q83PpwuaMsV9ZAwE3nQsQmYF9X4wJ28Rr%2F80hFT7YZtRWAlGawKDghJqmkzk4lmh3CjqsAlTWpIBmemKGMi%2FmV6yrgEdEAly0EOIX5qbrrI9%2Fep0p7oQtKAVppDocw%2BOSbwwY6pgGFOKTPkKCl94n07HzLr2hFRJ7w5f%2FSOtu10Jnrdz%2BgPrTvN1W%2Bocq34mgy3g4ROWCihgxSAIGElNmD0w10BSle82wmBiDf3jIAutBfbP6fA3wt5ABSJBEOGlzr1vz5hk9TZYnY7G9v5%2BmHaiyvjeFMOJbzPPN%2Fbiw2tQ%2Fk1L2nN7wIV3LFFLjzdk5AQLwJ1X3LF57vTHaKm8uH8uB%2B8tyRRNFaF1%2Bs&X-Amz-Signature=0a3f84470d1d4b491d707d077ea34358f22060ed7afe24fb34da2fafcdcaad5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDOC4O3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFEFCRuGE2Xexeltgx0PkKqD8xAhkg85w%2BDT%2FmdIclSZAiB34%2FNnlX7IDlWYC1RbHVxBL0OEobhDeBTYoyEMylR3ICr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMfDqX5JZWNNkvFEI0KtwDCWsXlsW90%2FNaUNuW%2BRSzTE5dWeYMj2PcBMg9eJbMjkZVQ8NN6k7xOMFpLsxvW9tbzxChXN3sk71%2Fwtadl%2BVjACjCdfYVNZn5zJCCoLNWv3Pvrbcv2AENWBnqbTaCOS5w62%2BRqqSGXD%2BCBCGDjqtuGuQzUmcmZ1dOLOnNX4Q4rrUkYWlnr8JA482UgGvC7pK7yTRY%2FSEsAvoTiIYvUfV5hVvhZxpE5XVauNCFGWJUuJMBrMP4s5%2FkbTxupIIzpZGICatnk4q6iZ1x6B8cw7BCK1OGOb8tNnNcBI2MChdITuvINl%2BINt0rsD%2FjULxyPpjz5DdFnIT5Fy32MCpPSjc7jKcQqj0rw3pJlWeN%2BXqGsACGuT1zXMT0lwmtUxcm96OBpSggSlc6cNXhOnzolRH8pxuc%2B4Li2%2Fn9ODRzOJO0e5L6xrrS4kXdTxsS%2F5F5fySnyghr20grkqjYxGQjd5D4eMcazZM6CHRLCRNYd1IJwTW1hla0quOnO9y7WmAkK1q83PpwuaMsV9ZAwE3nQsQmYF9X4wJ28Rr%2F80hFT7YZtRWAlGawKDghJqmkzk4lmh3CjqsAlTWpIBmemKGMi%2FmV6yrgEdEAly0EOIX5qbrrI9%2Fep0p7oQtKAVppDocw%2BOSbwwY6pgGFOKTPkKCl94n07HzLr2hFRJ7w5f%2FSOtu10Jnrdz%2BgPrTvN1W%2Bocq34mgy3g4ROWCihgxSAIGElNmD0w10BSle82wmBiDf3jIAutBfbP6fA3wt5ABSJBEOGlzr1vz5hk9TZYnY7G9v5%2BmHaiyvjeFMOJbzPPN%2Fbiw2tQ%2Fk1L2nN7wIV3LFFLjzdk5AQLwJ1X3LF57vTHaKm8uH8uB%2B8tyRRNFaF1%2Bs&X-Amz-Signature=a2167443088002c561921558246b59f3765b76192d7897e9c54fbd35b95686b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
