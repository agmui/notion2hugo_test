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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGATUH7B%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCtQRpvBi4Cw9prl6jJhzrFZYfvEAS%2BmXyAvyvFyfdBhAIhAJnfK0LRgj69D0E4GVxzElFKEjumohuN%2FPmVsnbhXifzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzMfs5dpw73ijJXiTMq3AM2DxfLmio5nPpFMDPzWsmnSvrATxohAxNLPdszhNwVh%2FFkoY6VYWxRKwhMPUHrXFJuq1zHHvkDm6iiesFJjxnZp5xnSObj6xmywfvkOn9oxy4SAzIs7ZiaEQK1Z2IlQjIZcYFuKcv0eMerthRx6VwHruDa05uHnbpiGwu4jkcpiXgvPgrGCimjePsly2OnBdOCqM36kPdrlPsIZzk930m5YaH%2B97oJ4UfbIfQa8kPIaGQkSEevg85K3k4M%2FZ%2FQ19nbA0hbGPLkazmXJE46dS9EvDveZEv2rrHI7hAk%2FXACEV0WHZo1gziYxR2A1o1afwoQBQEdX0qUnm9j%2FC3GQSxdCA9S5Nb%2FQtDP4gWkXgCTuXfL92y7dipVQzvuuLHdCML%2BuJ7PyHUpSeuxs3qfvpHYoqDtyMxnP1IuXChdymDtr2VjqTM5rMtDgfd0%2FqoqbpLWAGcWOQ12BLqdTcmUJyOwHkmaFzlnz%2FvDvRycA9fXeir%2BQtB9XLAp4yhmHH%2BlsV83JUNTnAhl4I%2BpkmbqQUMKyFcGHTcbHQ51ScYC1ScBoQN1A95cz79cwKJwoVpbwK6oLc4yV6o8F%2FYycIpg3eoZVE%2BeLJFSJPYlOkH0z%2FF8Ujigb765mRNBc2lnQTD79ujCBjqkAQ5UP1oZb%2FqTmIh4xMIcQ%2FPWXrmAY9rlZNqB5XznxfrSm6dgeNhT0Pmux2dXue5Wz%2BrnGiuUVRO5WMAVjIjpHLqQtVUN2kwAsyU86Gtp83mEaolM7BKSZSYVCO5GgUT%2FeuzQBrH6sT6gE%2Fk%2BvejynVbwRmRRdlItY1cqZPDx94e3cjMx57zBuyWgLalExat4xMtY6y4yjVZyijMW5xFVful3%2Fjg0&X-Amz-Signature=efae04b2b977c07ec7b070d66148d13901c88099321719e1ba3d569ffec860a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGATUH7B%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCtQRpvBi4Cw9prl6jJhzrFZYfvEAS%2BmXyAvyvFyfdBhAIhAJnfK0LRgj69D0E4GVxzElFKEjumohuN%2FPmVsnbhXifzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzMfs5dpw73ijJXiTMq3AM2DxfLmio5nPpFMDPzWsmnSvrATxohAxNLPdszhNwVh%2FFkoY6VYWxRKwhMPUHrXFJuq1zHHvkDm6iiesFJjxnZp5xnSObj6xmywfvkOn9oxy4SAzIs7ZiaEQK1Z2IlQjIZcYFuKcv0eMerthRx6VwHruDa05uHnbpiGwu4jkcpiXgvPgrGCimjePsly2OnBdOCqM36kPdrlPsIZzk930m5YaH%2B97oJ4UfbIfQa8kPIaGQkSEevg85K3k4M%2FZ%2FQ19nbA0hbGPLkazmXJE46dS9EvDveZEv2rrHI7hAk%2FXACEV0WHZo1gziYxR2A1o1afwoQBQEdX0qUnm9j%2FC3GQSxdCA9S5Nb%2FQtDP4gWkXgCTuXfL92y7dipVQzvuuLHdCML%2BuJ7PyHUpSeuxs3qfvpHYoqDtyMxnP1IuXChdymDtr2VjqTM5rMtDgfd0%2FqoqbpLWAGcWOQ12BLqdTcmUJyOwHkmaFzlnz%2FvDvRycA9fXeir%2BQtB9XLAp4yhmHH%2BlsV83JUNTnAhl4I%2BpkmbqQUMKyFcGHTcbHQ51ScYC1ScBoQN1A95cz79cwKJwoVpbwK6oLc4yV6o8F%2FYycIpg3eoZVE%2BeLJFSJPYlOkH0z%2FF8Ujigb765mRNBc2lnQTD79ujCBjqkAQ5UP1oZb%2FqTmIh4xMIcQ%2FPWXrmAY9rlZNqB5XznxfrSm6dgeNhT0Pmux2dXue5Wz%2BrnGiuUVRO5WMAVjIjpHLqQtVUN2kwAsyU86Gtp83mEaolM7BKSZSYVCO5GgUT%2FeuzQBrH6sT6gE%2Fk%2BvejynVbwRmRRdlItY1cqZPDx94e3cjMx57zBuyWgLalExat4xMtY6y4yjVZyijMW5xFVful3%2Fjg0&X-Amz-Signature=f434b7cc45f131380f819083b612b5b70d1fb3f5dcafeb06879d745b2ed57fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGATUH7B%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCtQRpvBi4Cw9prl6jJhzrFZYfvEAS%2BmXyAvyvFyfdBhAIhAJnfK0LRgj69D0E4GVxzElFKEjumohuN%2FPmVsnbhXifzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzMfs5dpw73ijJXiTMq3AM2DxfLmio5nPpFMDPzWsmnSvrATxohAxNLPdszhNwVh%2FFkoY6VYWxRKwhMPUHrXFJuq1zHHvkDm6iiesFJjxnZp5xnSObj6xmywfvkOn9oxy4SAzIs7ZiaEQK1Z2IlQjIZcYFuKcv0eMerthRx6VwHruDa05uHnbpiGwu4jkcpiXgvPgrGCimjePsly2OnBdOCqM36kPdrlPsIZzk930m5YaH%2B97oJ4UfbIfQa8kPIaGQkSEevg85K3k4M%2FZ%2FQ19nbA0hbGPLkazmXJE46dS9EvDveZEv2rrHI7hAk%2FXACEV0WHZo1gziYxR2A1o1afwoQBQEdX0qUnm9j%2FC3GQSxdCA9S5Nb%2FQtDP4gWkXgCTuXfL92y7dipVQzvuuLHdCML%2BuJ7PyHUpSeuxs3qfvpHYoqDtyMxnP1IuXChdymDtr2VjqTM5rMtDgfd0%2FqoqbpLWAGcWOQ12BLqdTcmUJyOwHkmaFzlnz%2FvDvRycA9fXeir%2BQtB9XLAp4yhmHH%2BlsV83JUNTnAhl4I%2BpkmbqQUMKyFcGHTcbHQ51ScYC1ScBoQN1A95cz79cwKJwoVpbwK6oLc4yV6o8F%2FYycIpg3eoZVE%2BeLJFSJPYlOkH0z%2FF8Ujigb765mRNBc2lnQTD79ujCBjqkAQ5UP1oZb%2FqTmIh4xMIcQ%2FPWXrmAY9rlZNqB5XznxfrSm6dgeNhT0Pmux2dXue5Wz%2BrnGiuUVRO5WMAVjIjpHLqQtVUN2kwAsyU86Gtp83mEaolM7BKSZSYVCO5GgUT%2FeuzQBrH6sT6gE%2Fk%2BvejynVbwRmRRdlItY1cqZPDx94e3cjMx57zBuyWgLalExat4xMtY6y4yjVZyijMW5xFVful3%2Fjg0&X-Amz-Signature=c04568542d4911bd2848beaa06afa98304f5b11508280dd42dd78b0698cf0e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGATUH7B%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCtQRpvBi4Cw9prl6jJhzrFZYfvEAS%2BmXyAvyvFyfdBhAIhAJnfK0LRgj69D0E4GVxzElFKEjumohuN%2FPmVsnbhXifzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzMfs5dpw73ijJXiTMq3AM2DxfLmio5nPpFMDPzWsmnSvrATxohAxNLPdszhNwVh%2FFkoY6VYWxRKwhMPUHrXFJuq1zHHvkDm6iiesFJjxnZp5xnSObj6xmywfvkOn9oxy4SAzIs7ZiaEQK1Z2IlQjIZcYFuKcv0eMerthRx6VwHruDa05uHnbpiGwu4jkcpiXgvPgrGCimjePsly2OnBdOCqM36kPdrlPsIZzk930m5YaH%2B97oJ4UfbIfQa8kPIaGQkSEevg85K3k4M%2FZ%2FQ19nbA0hbGPLkazmXJE46dS9EvDveZEv2rrHI7hAk%2FXACEV0WHZo1gziYxR2A1o1afwoQBQEdX0qUnm9j%2FC3GQSxdCA9S5Nb%2FQtDP4gWkXgCTuXfL92y7dipVQzvuuLHdCML%2BuJ7PyHUpSeuxs3qfvpHYoqDtyMxnP1IuXChdymDtr2VjqTM5rMtDgfd0%2FqoqbpLWAGcWOQ12BLqdTcmUJyOwHkmaFzlnz%2FvDvRycA9fXeir%2BQtB9XLAp4yhmHH%2BlsV83JUNTnAhl4I%2BpkmbqQUMKyFcGHTcbHQ51ScYC1ScBoQN1A95cz79cwKJwoVpbwK6oLc4yV6o8F%2FYycIpg3eoZVE%2BeLJFSJPYlOkH0z%2FF8Ujigb765mRNBc2lnQTD79ujCBjqkAQ5UP1oZb%2FqTmIh4xMIcQ%2FPWXrmAY9rlZNqB5XznxfrSm6dgeNhT0Pmux2dXue5Wz%2BrnGiuUVRO5WMAVjIjpHLqQtVUN2kwAsyU86Gtp83mEaolM7BKSZSYVCO5GgUT%2FeuzQBrH6sT6gE%2Fk%2BvejynVbwRmRRdlItY1cqZPDx94e3cjMx57zBuyWgLalExat4xMtY6y4yjVZyijMW5xFVful3%2Fjg0&X-Amz-Signature=1cc6b0e6f1b9b1ea1f55084a645338bcf07c94769fd34335148a48564253e3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGATUH7B%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCtQRpvBi4Cw9prl6jJhzrFZYfvEAS%2BmXyAvyvFyfdBhAIhAJnfK0LRgj69D0E4GVxzElFKEjumohuN%2FPmVsnbhXifzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzMfs5dpw73ijJXiTMq3AM2DxfLmio5nPpFMDPzWsmnSvrATxohAxNLPdszhNwVh%2FFkoY6VYWxRKwhMPUHrXFJuq1zHHvkDm6iiesFJjxnZp5xnSObj6xmywfvkOn9oxy4SAzIs7ZiaEQK1Z2IlQjIZcYFuKcv0eMerthRx6VwHruDa05uHnbpiGwu4jkcpiXgvPgrGCimjePsly2OnBdOCqM36kPdrlPsIZzk930m5YaH%2B97oJ4UfbIfQa8kPIaGQkSEevg85K3k4M%2FZ%2FQ19nbA0hbGPLkazmXJE46dS9EvDveZEv2rrHI7hAk%2FXACEV0WHZo1gziYxR2A1o1afwoQBQEdX0qUnm9j%2FC3GQSxdCA9S5Nb%2FQtDP4gWkXgCTuXfL92y7dipVQzvuuLHdCML%2BuJ7PyHUpSeuxs3qfvpHYoqDtyMxnP1IuXChdymDtr2VjqTM5rMtDgfd0%2FqoqbpLWAGcWOQ12BLqdTcmUJyOwHkmaFzlnz%2FvDvRycA9fXeir%2BQtB9XLAp4yhmHH%2BlsV83JUNTnAhl4I%2BpkmbqQUMKyFcGHTcbHQ51ScYC1ScBoQN1A95cz79cwKJwoVpbwK6oLc4yV6o8F%2FYycIpg3eoZVE%2BeLJFSJPYlOkH0z%2FF8Ujigb765mRNBc2lnQTD79ujCBjqkAQ5UP1oZb%2FqTmIh4xMIcQ%2FPWXrmAY9rlZNqB5XznxfrSm6dgeNhT0Pmux2dXue5Wz%2BrnGiuUVRO5WMAVjIjpHLqQtVUN2kwAsyU86Gtp83mEaolM7BKSZSYVCO5GgUT%2FeuzQBrH6sT6gE%2Fk%2BvejynVbwRmRRdlItY1cqZPDx94e3cjMx57zBuyWgLalExat4xMtY6y4yjVZyijMW5xFVful3%2Fjg0&X-Amz-Signature=1a11d1a51aaa2fbda0619af5c925a3ab208d4816d298946c5490a1bac5934669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGATUH7B%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCtQRpvBi4Cw9prl6jJhzrFZYfvEAS%2BmXyAvyvFyfdBhAIhAJnfK0LRgj69D0E4GVxzElFKEjumohuN%2FPmVsnbhXifzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzMfs5dpw73ijJXiTMq3AM2DxfLmio5nPpFMDPzWsmnSvrATxohAxNLPdszhNwVh%2FFkoY6VYWxRKwhMPUHrXFJuq1zHHvkDm6iiesFJjxnZp5xnSObj6xmywfvkOn9oxy4SAzIs7ZiaEQK1Z2IlQjIZcYFuKcv0eMerthRx6VwHruDa05uHnbpiGwu4jkcpiXgvPgrGCimjePsly2OnBdOCqM36kPdrlPsIZzk930m5YaH%2B97oJ4UfbIfQa8kPIaGQkSEevg85K3k4M%2FZ%2FQ19nbA0hbGPLkazmXJE46dS9EvDveZEv2rrHI7hAk%2FXACEV0WHZo1gziYxR2A1o1afwoQBQEdX0qUnm9j%2FC3GQSxdCA9S5Nb%2FQtDP4gWkXgCTuXfL92y7dipVQzvuuLHdCML%2BuJ7PyHUpSeuxs3qfvpHYoqDtyMxnP1IuXChdymDtr2VjqTM5rMtDgfd0%2FqoqbpLWAGcWOQ12BLqdTcmUJyOwHkmaFzlnz%2FvDvRycA9fXeir%2BQtB9XLAp4yhmHH%2BlsV83JUNTnAhl4I%2BpkmbqQUMKyFcGHTcbHQ51ScYC1ScBoQN1A95cz79cwKJwoVpbwK6oLc4yV6o8F%2FYycIpg3eoZVE%2BeLJFSJPYlOkH0z%2FF8Ujigb765mRNBc2lnQTD79ujCBjqkAQ5UP1oZb%2FqTmIh4xMIcQ%2FPWXrmAY9rlZNqB5XznxfrSm6dgeNhT0Pmux2dXue5Wz%2BrnGiuUVRO5WMAVjIjpHLqQtVUN2kwAsyU86Gtp83mEaolM7BKSZSYVCO5GgUT%2FeuzQBrH6sT6gE%2Fk%2BvejynVbwRmRRdlItY1cqZPDx94e3cjMx57zBuyWgLalExat4xMtY6y4yjVZyijMW5xFVful3%2Fjg0&X-Amz-Signature=88f43f2c4b8a61ae3ebe0dd10affa75df459874ef0117ca7666ac3290d60f6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
