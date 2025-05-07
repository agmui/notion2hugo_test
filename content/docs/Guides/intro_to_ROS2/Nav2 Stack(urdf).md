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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2ACSVS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOiR0fE71tR%2B2q2LtLCFBKSiR3Nov6RKmQq9PfCIBB9AiEAkQXfXnNeRDGm%2BOxWSpoauhfae7p0zvf80mPTQWwGjAcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIFWfYtzO0bL4fL9rCrcAzk5prP5MdYPHRvOb%2BumbuZFf2ts6wIgtAPKkPMRykqL9wsdGxamjNBVwbLXXzk%2Fe7w2abQlww7bw13P6dUqG%2F0jgW%2BK6kWgrbdirhaLj3j6cHzPmnyCvjRqNvoAtBsHbivJrnaJTOEZp3%2FuWs1E399ASEsGWqBbxZt6ibnHW4ppn43TzM2N%2BTiYT%2BxnfagoCUSCLQ7orQ%2BGDlYrolO4xRgfQBCD9LvhyJRK1z2PIFZB6zSk5ulboZrPd%2BIgpoQmKDYmYZccqnqsZPvbpKjwLmYNGGj2sBauB2wemdVLZiVENY2M5dE7roN9l6PCz%2BL3MZIDYbKLNYu5n1E0dOlAMvShHJc3%2FledU899VNa2G6h0amwTpwXHi3w%2BpXf2qbKyLcvnD%2F7FT0y70rX6ip6xmXn6Uu4zMu4rNFGQlzHC8iz%2BWXM9XXOEZAnbeu3ZHMwGof5XTMk7pG8d3yaXp13IAtbc7e7vRlP6eCZEAQVhDIlg9vbBSOUGzK5zPoxbn9NNb8hpRU0J8PX8tESShnmnTTqKjmJmsptiKzbp%2FU4O%2F%2By32Jim0H79WMh4fl05DYXCrkiY2RU%2BEyBawHWNdkfbylduLkHlA3ZS5I1jepJoWLdYMZSWkBK6g%2F6AEOT0MMCR68AGOqUBLKszNtT%2FFY5MpyB6mRQztJMpnDLtsxB%2FTzmmsif%2Bt7jPYOEyuwSY2Pb3HmwLeQ1UZ%2Bogs7HjHXLZiXk9uZngbipxDNggx1C88mQXBDtTcIPoNJm6N3npkboTI7zBtJ0H1J9CJNZe9WVJYOygViP4D3GoN9Mgw%2FZlLk9KwzZnZbYjhxiNsQArYisq9UcDtDi1bp2Vnddfd3T7fCeUT8aLdgRv%2F3DE&X-Amz-Signature=e6c545819e1991e44850333f2bc6064c1986dc865cfec4cd3b8cb440ade6dda3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2ACSVS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOiR0fE71tR%2B2q2LtLCFBKSiR3Nov6RKmQq9PfCIBB9AiEAkQXfXnNeRDGm%2BOxWSpoauhfae7p0zvf80mPTQWwGjAcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIFWfYtzO0bL4fL9rCrcAzk5prP5MdYPHRvOb%2BumbuZFf2ts6wIgtAPKkPMRykqL9wsdGxamjNBVwbLXXzk%2Fe7w2abQlww7bw13P6dUqG%2F0jgW%2BK6kWgrbdirhaLj3j6cHzPmnyCvjRqNvoAtBsHbivJrnaJTOEZp3%2FuWs1E399ASEsGWqBbxZt6ibnHW4ppn43TzM2N%2BTiYT%2BxnfagoCUSCLQ7orQ%2BGDlYrolO4xRgfQBCD9LvhyJRK1z2PIFZB6zSk5ulboZrPd%2BIgpoQmKDYmYZccqnqsZPvbpKjwLmYNGGj2sBauB2wemdVLZiVENY2M5dE7roN9l6PCz%2BL3MZIDYbKLNYu5n1E0dOlAMvShHJc3%2FledU899VNa2G6h0amwTpwXHi3w%2BpXf2qbKyLcvnD%2F7FT0y70rX6ip6xmXn6Uu4zMu4rNFGQlzHC8iz%2BWXM9XXOEZAnbeu3ZHMwGof5XTMk7pG8d3yaXp13IAtbc7e7vRlP6eCZEAQVhDIlg9vbBSOUGzK5zPoxbn9NNb8hpRU0J8PX8tESShnmnTTqKjmJmsptiKzbp%2FU4O%2F%2By32Jim0H79WMh4fl05DYXCrkiY2RU%2BEyBawHWNdkfbylduLkHlA3ZS5I1jepJoWLdYMZSWkBK6g%2F6AEOT0MMCR68AGOqUBLKszNtT%2FFY5MpyB6mRQztJMpnDLtsxB%2FTzmmsif%2Bt7jPYOEyuwSY2Pb3HmwLeQ1UZ%2Bogs7HjHXLZiXk9uZngbipxDNggx1C88mQXBDtTcIPoNJm6N3npkboTI7zBtJ0H1J9CJNZe9WVJYOygViP4D3GoN9Mgw%2FZlLk9KwzZnZbYjhxiNsQArYisq9UcDtDi1bp2Vnddfd3T7fCeUT8aLdgRv%2F3DE&X-Amz-Signature=ec59bbd5d8b8b5726849608d05232649c4cde21bef88c7c5570069db3d449058&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2ACSVS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOiR0fE71tR%2B2q2LtLCFBKSiR3Nov6RKmQq9PfCIBB9AiEAkQXfXnNeRDGm%2BOxWSpoauhfae7p0zvf80mPTQWwGjAcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIFWfYtzO0bL4fL9rCrcAzk5prP5MdYPHRvOb%2BumbuZFf2ts6wIgtAPKkPMRykqL9wsdGxamjNBVwbLXXzk%2Fe7w2abQlww7bw13P6dUqG%2F0jgW%2BK6kWgrbdirhaLj3j6cHzPmnyCvjRqNvoAtBsHbivJrnaJTOEZp3%2FuWs1E399ASEsGWqBbxZt6ibnHW4ppn43TzM2N%2BTiYT%2BxnfagoCUSCLQ7orQ%2BGDlYrolO4xRgfQBCD9LvhyJRK1z2PIFZB6zSk5ulboZrPd%2BIgpoQmKDYmYZccqnqsZPvbpKjwLmYNGGj2sBauB2wemdVLZiVENY2M5dE7roN9l6PCz%2BL3MZIDYbKLNYu5n1E0dOlAMvShHJc3%2FledU899VNa2G6h0amwTpwXHi3w%2BpXf2qbKyLcvnD%2F7FT0y70rX6ip6xmXn6Uu4zMu4rNFGQlzHC8iz%2BWXM9XXOEZAnbeu3ZHMwGof5XTMk7pG8d3yaXp13IAtbc7e7vRlP6eCZEAQVhDIlg9vbBSOUGzK5zPoxbn9NNb8hpRU0J8PX8tESShnmnTTqKjmJmsptiKzbp%2FU4O%2F%2By32Jim0H79WMh4fl05DYXCrkiY2RU%2BEyBawHWNdkfbylduLkHlA3ZS5I1jepJoWLdYMZSWkBK6g%2F6AEOT0MMCR68AGOqUBLKszNtT%2FFY5MpyB6mRQztJMpnDLtsxB%2FTzmmsif%2Bt7jPYOEyuwSY2Pb3HmwLeQ1UZ%2Bogs7HjHXLZiXk9uZngbipxDNggx1C88mQXBDtTcIPoNJm6N3npkboTI7zBtJ0H1J9CJNZe9WVJYOygViP4D3GoN9Mgw%2FZlLk9KwzZnZbYjhxiNsQArYisq9UcDtDi1bp2Vnddfd3T7fCeUT8aLdgRv%2F3DE&X-Amz-Signature=b0077b33b6b011eabd6da3110a8371a1e8a516320f0ff00f614dc0fafcecc47f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2ACSVS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOiR0fE71tR%2B2q2LtLCFBKSiR3Nov6RKmQq9PfCIBB9AiEAkQXfXnNeRDGm%2BOxWSpoauhfae7p0zvf80mPTQWwGjAcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIFWfYtzO0bL4fL9rCrcAzk5prP5MdYPHRvOb%2BumbuZFf2ts6wIgtAPKkPMRykqL9wsdGxamjNBVwbLXXzk%2Fe7w2abQlww7bw13P6dUqG%2F0jgW%2BK6kWgrbdirhaLj3j6cHzPmnyCvjRqNvoAtBsHbivJrnaJTOEZp3%2FuWs1E399ASEsGWqBbxZt6ibnHW4ppn43TzM2N%2BTiYT%2BxnfagoCUSCLQ7orQ%2BGDlYrolO4xRgfQBCD9LvhyJRK1z2PIFZB6zSk5ulboZrPd%2BIgpoQmKDYmYZccqnqsZPvbpKjwLmYNGGj2sBauB2wemdVLZiVENY2M5dE7roN9l6PCz%2BL3MZIDYbKLNYu5n1E0dOlAMvShHJc3%2FledU899VNa2G6h0amwTpwXHi3w%2BpXf2qbKyLcvnD%2F7FT0y70rX6ip6xmXn6Uu4zMu4rNFGQlzHC8iz%2BWXM9XXOEZAnbeu3ZHMwGof5XTMk7pG8d3yaXp13IAtbc7e7vRlP6eCZEAQVhDIlg9vbBSOUGzK5zPoxbn9NNb8hpRU0J8PX8tESShnmnTTqKjmJmsptiKzbp%2FU4O%2F%2By32Jim0H79WMh4fl05DYXCrkiY2RU%2BEyBawHWNdkfbylduLkHlA3ZS5I1jepJoWLdYMZSWkBK6g%2F6AEOT0MMCR68AGOqUBLKszNtT%2FFY5MpyB6mRQztJMpnDLtsxB%2FTzmmsif%2Bt7jPYOEyuwSY2Pb3HmwLeQ1UZ%2Bogs7HjHXLZiXk9uZngbipxDNggx1C88mQXBDtTcIPoNJm6N3npkboTI7zBtJ0H1J9CJNZe9WVJYOygViP4D3GoN9Mgw%2FZlLk9KwzZnZbYjhxiNsQArYisq9UcDtDi1bp2Vnddfd3T7fCeUT8aLdgRv%2F3DE&X-Amz-Signature=10cd07ca760cd2a9e72657831e0de62be3d0f0e303829cf08fc348ea893ef754&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2ACSVS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOiR0fE71tR%2B2q2LtLCFBKSiR3Nov6RKmQq9PfCIBB9AiEAkQXfXnNeRDGm%2BOxWSpoauhfae7p0zvf80mPTQWwGjAcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIFWfYtzO0bL4fL9rCrcAzk5prP5MdYPHRvOb%2BumbuZFf2ts6wIgtAPKkPMRykqL9wsdGxamjNBVwbLXXzk%2Fe7w2abQlww7bw13P6dUqG%2F0jgW%2BK6kWgrbdirhaLj3j6cHzPmnyCvjRqNvoAtBsHbivJrnaJTOEZp3%2FuWs1E399ASEsGWqBbxZt6ibnHW4ppn43TzM2N%2BTiYT%2BxnfagoCUSCLQ7orQ%2BGDlYrolO4xRgfQBCD9LvhyJRK1z2PIFZB6zSk5ulboZrPd%2BIgpoQmKDYmYZccqnqsZPvbpKjwLmYNGGj2sBauB2wemdVLZiVENY2M5dE7roN9l6PCz%2BL3MZIDYbKLNYu5n1E0dOlAMvShHJc3%2FledU899VNa2G6h0amwTpwXHi3w%2BpXf2qbKyLcvnD%2F7FT0y70rX6ip6xmXn6Uu4zMu4rNFGQlzHC8iz%2BWXM9XXOEZAnbeu3ZHMwGof5XTMk7pG8d3yaXp13IAtbc7e7vRlP6eCZEAQVhDIlg9vbBSOUGzK5zPoxbn9NNb8hpRU0J8PX8tESShnmnTTqKjmJmsptiKzbp%2FU4O%2F%2By32Jim0H79WMh4fl05DYXCrkiY2RU%2BEyBawHWNdkfbylduLkHlA3ZS5I1jepJoWLdYMZSWkBK6g%2F6AEOT0MMCR68AGOqUBLKszNtT%2FFY5MpyB6mRQztJMpnDLtsxB%2FTzmmsif%2Bt7jPYOEyuwSY2Pb3HmwLeQ1UZ%2Bogs7HjHXLZiXk9uZngbipxDNggx1C88mQXBDtTcIPoNJm6N3npkboTI7zBtJ0H1J9CJNZe9WVJYOygViP4D3GoN9Mgw%2FZlLk9KwzZnZbYjhxiNsQArYisq9UcDtDi1bp2Vnddfd3T7fCeUT8aLdgRv%2F3DE&X-Amz-Signature=3e05b25366856872a05c9a2c105ff3d30f554e850bde999878e54e3e025110d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2ACSVS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOiR0fE71tR%2B2q2LtLCFBKSiR3Nov6RKmQq9PfCIBB9AiEAkQXfXnNeRDGm%2BOxWSpoauhfae7p0zvf80mPTQWwGjAcq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIFWfYtzO0bL4fL9rCrcAzk5prP5MdYPHRvOb%2BumbuZFf2ts6wIgtAPKkPMRykqL9wsdGxamjNBVwbLXXzk%2Fe7w2abQlww7bw13P6dUqG%2F0jgW%2BK6kWgrbdirhaLj3j6cHzPmnyCvjRqNvoAtBsHbivJrnaJTOEZp3%2FuWs1E399ASEsGWqBbxZt6ibnHW4ppn43TzM2N%2BTiYT%2BxnfagoCUSCLQ7orQ%2BGDlYrolO4xRgfQBCD9LvhyJRK1z2PIFZB6zSk5ulboZrPd%2BIgpoQmKDYmYZccqnqsZPvbpKjwLmYNGGj2sBauB2wemdVLZiVENY2M5dE7roN9l6PCz%2BL3MZIDYbKLNYu5n1E0dOlAMvShHJc3%2FledU899VNa2G6h0amwTpwXHi3w%2BpXf2qbKyLcvnD%2F7FT0y70rX6ip6xmXn6Uu4zMu4rNFGQlzHC8iz%2BWXM9XXOEZAnbeu3ZHMwGof5XTMk7pG8d3yaXp13IAtbc7e7vRlP6eCZEAQVhDIlg9vbBSOUGzK5zPoxbn9NNb8hpRU0J8PX8tESShnmnTTqKjmJmsptiKzbp%2FU4O%2F%2By32Jim0H79WMh4fl05DYXCrkiY2RU%2BEyBawHWNdkfbylduLkHlA3ZS5I1jepJoWLdYMZSWkBK6g%2F6AEOT0MMCR68AGOqUBLKszNtT%2FFY5MpyB6mRQztJMpnDLtsxB%2FTzmmsif%2Bt7jPYOEyuwSY2Pb3HmwLeQ1UZ%2Bogs7HjHXLZiXk9uZngbipxDNggx1C88mQXBDtTcIPoNJm6N3npkboTI7zBtJ0H1J9CJNZe9WVJYOygViP4D3GoN9Mgw%2FZlLk9KwzZnZbYjhxiNsQArYisq9UcDtDi1bp2Vnddfd3T7fCeUT8aLdgRv%2F3DE&X-Amz-Signature=ce52fdc8e6817652276305a35329064c351b5a49029aad4e59801154cc52fb27&X-Amz-SignedHeaders=host&x-id=GetObject)
