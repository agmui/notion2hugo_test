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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5KPK5O%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDGmmR40pllU6qohFIMeSaln%2BdC8JMKieFbKS0LyxK9FAIgIoG8ok82mTYBisj8wZ6eoRCI8OY%2FBDAk9NSbL6DapN4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgSQ8U6VqrKqP27%2FyrcA%2FcvECEwcN4n1xN%2FItWrEghe2keYNoeQXojduu9s2i%2BlgHn%2B8P%2FnCPp4y0FfkqBw8Oa3uQFSsmei3WOnYM8kaU6cWxzJzFXXu%2B5AJDgCEm5BMgPS4Uom%2F73UZOGjHR7QlAhsls%2FI%2BMbl9YmtnjtykaYENjpcfEu15HQCLhnuuzgRSaM8njobs7CB9Oxt39XWvABi7Wa3asAo1iucSysHJZlhO9jsltMFF8HlBXzBXWkqUYa8bXECgiB6%2FI4ZTm0coUPlaZJAx7A05XW0riDTU%2BsJ3GE5Z%2BFZkYYSVLz4JQ1jcDYbBiMucRrfRMR9%2B9RCC%2BHz6DxGKDrPkpCHWzUPjwOdiTMFwYgCmd1jAbSa7Wkd%2FeFMBzEtBGWxbw%2B1tKBFg%2FZxTIUal5S92AsIIKuxoO0igw3ReE2r0itE8N1hf0IU3TPRRoaxcMDDzUxOhG0ManYbO4fMstnp5L2%2BQ1aw9DMXBWqtl7TIZWWTe%2FpbIree5AY3ZkVzNHYM%2BGWWs%2BfI368p1GzD%2BvTmqCeQyqQeUCFLqazywfAz7Na%2BORQGmcv%2FFtE9%2FDlD6arA9%2BcNUB20F%2BHTWyUUtes36gLDOZIgg4jkeq0AhP0xjkz5N%2Bbt0ESRs19Oe9N14vqikwrQMMiA9sEGOqUBLpjDnX4kll3%2FCGFQsPKtqwxdvPoI10cxWbj3kY7VmvMrStR43c0QqUrGPMMlwS6O99C60ONtL8Sx%2FvapfaZnkvcsbvXiRKdvBHAHQrLOfo7YPBs5FpLpjNmAGl%2FUNHA9I2UOu5ku0lF5Z2Z2pInA9vsUowfKLiTVdV7xwzKn7IAxpUH8%2FbQn7MtJiYUJWS%2FzG7H9LW2XcHAsIVKIsOhrDaJuIXiA&X-Amz-Signature=90810b91ba5635205c74d7260816b8096adde9a047c0c298803b21040c53ece9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5KPK5O%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDGmmR40pllU6qohFIMeSaln%2BdC8JMKieFbKS0LyxK9FAIgIoG8ok82mTYBisj8wZ6eoRCI8OY%2FBDAk9NSbL6DapN4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgSQ8U6VqrKqP27%2FyrcA%2FcvECEwcN4n1xN%2FItWrEghe2keYNoeQXojduu9s2i%2BlgHn%2B8P%2FnCPp4y0FfkqBw8Oa3uQFSsmei3WOnYM8kaU6cWxzJzFXXu%2B5AJDgCEm5BMgPS4Uom%2F73UZOGjHR7QlAhsls%2FI%2BMbl9YmtnjtykaYENjpcfEu15HQCLhnuuzgRSaM8njobs7CB9Oxt39XWvABi7Wa3asAo1iucSysHJZlhO9jsltMFF8HlBXzBXWkqUYa8bXECgiB6%2FI4ZTm0coUPlaZJAx7A05XW0riDTU%2BsJ3GE5Z%2BFZkYYSVLz4JQ1jcDYbBiMucRrfRMR9%2B9RCC%2BHz6DxGKDrPkpCHWzUPjwOdiTMFwYgCmd1jAbSa7Wkd%2FeFMBzEtBGWxbw%2B1tKBFg%2FZxTIUal5S92AsIIKuxoO0igw3ReE2r0itE8N1hf0IU3TPRRoaxcMDDzUxOhG0ManYbO4fMstnp5L2%2BQ1aw9DMXBWqtl7TIZWWTe%2FpbIree5AY3ZkVzNHYM%2BGWWs%2BfI368p1GzD%2BvTmqCeQyqQeUCFLqazywfAz7Na%2BORQGmcv%2FFtE9%2FDlD6arA9%2BcNUB20F%2BHTWyUUtes36gLDOZIgg4jkeq0AhP0xjkz5N%2Bbt0ESRs19Oe9N14vqikwrQMMiA9sEGOqUBLpjDnX4kll3%2FCGFQsPKtqwxdvPoI10cxWbj3kY7VmvMrStR43c0QqUrGPMMlwS6O99C60ONtL8Sx%2FvapfaZnkvcsbvXiRKdvBHAHQrLOfo7YPBs5FpLpjNmAGl%2FUNHA9I2UOu5ku0lF5Z2Z2pInA9vsUowfKLiTVdV7xwzKn7IAxpUH8%2FbQn7MtJiYUJWS%2FzG7H9LW2XcHAsIVKIsOhrDaJuIXiA&X-Amz-Signature=9ef7232f6d96ba9c708636222a51396b789dc1668aa5f542f67437644be54ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5KPK5O%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDGmmR40pllU6qohFIMeSaln%2BdC8JMKieFbKS0LyxK9FAIgIoG8ok82mTYBisj8wZ6eoRCI8OY%2FBDAk9NSbL6DapN4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgSQ8U6VqrKqP27%2FyrcA%2FcvECEwcN4n1xN%2FItWrEghe2keYNoeQXojduu9s2i%2BlgHn%2B8P%2FnCPp4y0FfkqBw8Oa3uQFSsmei3WOnYM8kaU6cWxzJzFXXu%2B5AJDgCEm5BMgPS4Uom%2F73UZOGjHR7QlAhsls%2FI%2BMbl9YmtnjtykaYENjpcfEu15HQCLhnuuzgRSaM8njobs7CB9Oxt39XWvABi7Wa3asAo1iucSysHJZlhO9jsltMFF8HlBXzBXWkqUYa8bXECgiB6%2FI4ZTm0coUPlaZJAx7A05XW0riDTU%2BsJ3GE5Z%2BFZkYYSVLz4JQ1jcDYbBiMucRrfRMR9%2B9RCC%2BHz6DxGKDrPkpCHWzUPjwOdiTMFwYgCmd1jAbSa7Wkd%2FeFMBzEtBGWxbw%2B1tKBFg%2FZxTIUal5S92AsIIKuxoO0igw3ReE2r0itE8N1hf0IU3TPRRoaxcMDDzUxOhG0ManYbO4fMstnp5L2%2BQ1aw9DMXBWqtl7TIZWWTe%2FpbIree5AY3ZkVzNHYM%2BGWWs%2BfI368p1GzD%2BvTmqCeQyqQeUCFLqazywfAz7Na%2BORQGmcv%2FFtE9%2FDlD6arA9%2BcNUB20F%2BHTWyUUtes36gLDOZIgg4jkeq0AhP0xjkz5N%2Bbt0ESRs19Oe9N14vqikwrQMMiA9sEGOqUBLpjDnX4kll3%2FCGFQsPKtqwxdvPoI10cxWbj3kY7VmvMrStR43c0QqUrGPMMlwS6O99C60ONtL8Sx%2FvapfaZnkvcsbvXiRKdvBHAHQrLOfo7YPBs5FpLpjNmAGl%2FUNHA9I2UOu5ku0lF5Z2Z2pInA9vsUowfKLiTVdV7xwzKn7IAxpUH8%2FbQn7MtJiYUJWS%2FzG7H9LW2XcHAsIVKIsOhrDaJuIXiA&X-Amz-Signature=dc30b1f8d1ddbf304cc83bf1731333e2b562189aba06b43f18221eee6b3201ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5KPK5O%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDGmmR40pllU6qohFIMeSaln%2BdC8JMKieFbKS0LyxK9FAIgIoG8ok82mTYBisj8wZ6eoRCI8OY%2FBDAk9NSbL6DapN4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgSQ8U6VqrKqP27%2FyrcA%2FcvECEwcN4n1xN%2FItWrEghe2keYNoeQXojduu9s2i%2BlgHn%2B8P%2FnCPp4y0FfkqBw8Oa3uQFSsmei3WOnYM8kaU6cWxzJzFXXu%2B5AJDgCEm5BMgPS4Uom%2F73UZOGjHR7QlAhsls%2FI%2BMbl9YmtnjtykaYENjpcfEu15HQCLhnuuzgRSaM8njobs7CB9Oxt39XWvABi7Wa3asAo1iucSysHJZlhO9jsltMFF8HlBXzBXWkqUYa8bXECgiB6%2FI4ZTm0coUPlaZJAx7A05XW0riDTU%2BsJ3GE5Z%2BFZkYYSVLz4JQ1jcDYbBiMucRrfRMR9%2B9RCC%2BHz6DxGKDrPkpCHWzUPjwOdiTMFwYgCmd1jAbSa7Wkd%2FeFMBzEtBGWxbw%2B1tKBFg%2FZxTIUal5S92AsIIKuxoO0igw3ReE2r0itE8N1hf0IU3TPRRoaxcMDDzUxOhG0ManYbO4fMstnp5L2%2BQ1aw9DMXBWqtl7TIZWWTe%2FpbIree5AY3ZkVzNHYM%2BGWWs%2BfI368p1GzD%2BvTmqCeQyqQeUCFLqazywfAz7Na%2BORQGmcv%2FFtE9%2FDlD6arA9%2BcNUB20F%2BHTWyUUtes36gLDOZIgg4jkeq0AhP0xjkz5N%2Bbt0ESRs19Oe9N14vqikwrQMMiA9sEGOqUBLpjDnX4kll3%2FCGFQsPKtqwxdvPoI10cxWbj3kY7VmvMrStR43c0QqUrGPMMlwS6O99C60ONtL8Sx%2FvapfaZnkvcsbvXiRKdvBHAHQrLOfo7YPBs5FpLpjNmAGl%2FUNHA9I2UOu5ku0lF5Z2Z2pInA9vsUowfKLiTVdV7xwzKn7IAxpUH8%2FbQn7MtJiYUJWS%2FzG7H9LW2XcHAsIVKIsOhrDaJuIXiA&X-Amz-Signature=80511a07925a60daadb64f15732bce750182879d7744a68631cd391b6a0a7b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5KPK5O%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDGmmR40pllU6qohFIMeSaln%2BdC8JMKieFbKS0LyxK9FAIgIoG8ok82mTYBisj8wZ6eoRCI8OY%2FBDAk9NSbL6DapN4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgSQ8U6VqrKqP27%2FyrcA%2FcvECEwcN4n1xN%2FItWrEghe2keYNoeQXojduu9s2i%2BlgHn%2B8P%2FnCPp4y0FfkqBw8Oa3uQFSsmei3WOnYM8kaU6cWxzJzFXXu%2B5AJDgCEm5BMgPS4Uom%2F73UZOGjHR7QlAhsls%2FI%2BMbl9YmtnjtykaYENjpcfEu15HQCLhnuuzgRSaM8njobs7CB9Oxt39XWvABi7Wa3asAo1iucSysHJZlhO9jsltMFF8HlBXzBXWkqUYa8bXECgiB6%2FI4ZTm0coUPlaZJAx7A05XW0riDTU%2BsJ3GE5Z%2BFZkYYSVLz4JQ1jcDYbBiMucRrfRMR9%2B9RCC%2BHz6DxGKDrPkpCHWzUPjwOdiTMFwYgCmd1jAbSa7Wkd%2FeFMBzEtBGWxbw%2B1tKBFg%2FZxTIUal5S92AsIIKuxoO0igw3ReE2r0itE8N1hf0IU3TPRRoaxcMDDzUxOhG0ManYbO4fMstnp5L2%2BQ1aw9DMXBWqtl7TIZWWTe%2FpbIree5AY3ZkVzNHYM%2BGWWs%2BfI368p1GzD%2BvTmqCeQyqQeUCFLqazywfAz7Na%2BORQGmcv%2FFtE9%2FDlD6arA9%2BcNUB20F%2BHTWyUUtes36gLDOZIgg4jkeq0AhP0xjkz5N%2Bbt0ESRs19Oe9N14vqikwrQMMiA9sEGOqUBLpjDnX4kll3%2FCGFQsPKtqwxdvPoI10cxWbj3kY7VmvMrStR43c0QqUrGPMMlwS6O99C60ONtL8Sx%2FvapfaZnkvcsbvXiRKdvBHAHQrLOfo7YPBs5FpLpjNmAGl%2FUNHA9I2UOu5ku0lF5Z2Z2pInA9vsUowfKLiTVdV7xwzKn7IAxpUH8%2FbQn7MtJiYUJWS%2FzG7H9LW2XcHAsIVKIsOhrDaJuIXiA&X-Amz-Signature=c840c02e0ae11ce361f43cb41cbd64384469dd8feebbf46662a5a0f88dafcb4b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5KPK5O%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDGmmR40pllU6qohFIMeSaln%2BdC8JMKieFbKS0LyxK9FAIgIoG8ok82mTYBisj8wZ6eoRCI8OY%2FBDAk9NSbL6DapN4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgSQ8U6VqrKqP27%2FyrcA%2FcvECEwcN4n1xN%2FItWrEghe2keYNoeQXojduu9s2i%2BlgHn%2B8P%2FnCPp4y0FfkqBw8Oa3uQFSsmei3WOnYM8kaU6cWxzJzFXXu%2B5AJDgCEm5BMgPS4Uom%2F73UZOGjHR7QlAhsls%2FI%2BMbl9YmtnjtykaYENjpcfEu15HQCLhnuuzgRSaM8njobs7CB9Oxt39XWvABi7Wa3asAo1iucSysHJZlhO9jsltMFF8HlBXzBXWkqUYa8bXECgiB6%2FI4ZTm0coUPlaZJAx7A05XW0riDTU%2BsJ3GE5Z%2BFZkYYSVLz4JQ1jcDYbBiMucRrfRMR9%2B9RCC%2BHz6DxGKDrPkpCHWzUPjwOdiTMFwYgCmd1jAbSa7Wkd%2FeFMBzEtBGWxbw%2B1tKBFg%2FZxTIUal5S92AsIIKuxoO0igw3ReE2r0itE8N1hf0IU3TPRRoaxcMDDzUxOhG0ManYbO4fMstnp5L2%2BQ1aw9DMXBWqtl7TIZWWTe%2FpbIree5AY3ZkVzNHYM%2BGWWs%2BfI368p1GzD%2BvTmqCeQyqQeUCFLqazywfAz7Na%2BORQGmcv%2FFtE9%2FDlD6arA9%2BcNUB20F%2BHTWyUUtes36gLDOZIgg4jkeq0AhP0xjkz5N%2Bbt0ESRs19Oe9N14vqikwrQMMiA9sEGOqUBLpjDnX4kll3%2FCGFQsPKtqwxdvPoI10cxWbj3kY7VmvMrStR43c0QqUrGPMMlwS6O99C60ONtL8Sx%2FvapfaZnkvcsbvXiRKdvBHAHQrLOfo7YPBs5FpLpjNmAGl%2FUNHA9I2UOu5ku0lF5Z2Z2pInA9vsUowfKLiTVdV7xwzKn7IAxpUH8%2FbQn7MtJiYUJWS%2FzG7H9LW2XcHAsIVKIsOhrDaJuIXiA&X-Amz-Signature=900d09822e3a6db74d97de44af002049a19c5e85fb577171a87f318c99bd2938&X-Amz-SignedHeaders=host&x-id=GetObject)
