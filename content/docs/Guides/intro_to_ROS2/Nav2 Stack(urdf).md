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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F23CFRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBSzRTw2fIimDHP6VCV7e%2BKh8UVrB4iwdldz%2B5AmuYQwAiBjUEdvGNl8d%2FivB9Mmz2pON1SPylkIdy73R26j3Y3HgCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSys5395Fq%2BzeUwuaKtwDNBRheLa4QxtfBLwrUo7XiSVlhbKoIpxGwa0NQmS6t9H%2BS6OJa5yN4PfofzcfXrRl2r1089gienbTpeB7DNdRFFV2e9N78y0%2F6OjC5IzUKCkCD8iAJjhYum5lQJvB43jWXKxwmJVxMjst6whgJLjkYQHl%2F3W%2Fwhr6SIKnDLURY8S7ZcDTdkKYMnFYzAW7%2FG4TnU7ptkdfedYEzMTZSYtMGV%2Bl%2FmoDBVO9zYm1M%2B10kY5hQMW01w3zRVwnmErd5Xe3Ie5bNXj%2BDJvubIwtTSWanoXq7IvJ82eargo%2FZ51Obs7X4ITxfLJV0KgzZlAEkBjE4XhaoEQCXTV3bo8CavXqwBxxProhjT%2FamI6edUCd1SRjRi3GgLaRGqE24jnghbg9jlsVT8QyMlZAlNF7JUWZNXvNc%2BPYTHerc%2BmMm1C5L0kv7tWYTHuGbMI1Ipt3LQZLdDpmrh2PJjCeaMmNFV%2F8WmIYs6HGmDxla2fLKGjVObpvSk%2BqK7%2B45O7Hkc5EIzl7UtMjnIqZ6puGz32k3tepSfYwOY9nydqtXa80W3AJisgPH3cf4k7zf0gHKQKlqZSQ1oKYrHEz500sxmejtnhfaNgY9jY7Dh%2BbpB9eVRu0ozfzqsf4vKCIJbzEokMwy4X9wQY6pgH9EIo7dyOzGZ%2B3RjwmH6UKl8njKrIQNgTXEtZJZC7%2FKkXXWU9qPUZw95G3aM8yqPs%2F1%2FT5gIw2IoTSB9SI%2BKhLmVf%2BYUzm48pTySclLd%2BroZThIIj%2B1mBZFoenLak3DOca0iqCpYrsXzZ%2FxaQiM%2Bqwlo1vQhCRqEymUU0q2Rd0VazJyaj1HtO5TFV7iXnxAA7%2FtCZUYLIxk%2BDg13RiVkOi2NwjGQ8C&X-Amz-Signature=21045e09cc4ccf9a425e2a960a95314afc95a5e8d744d035352f36ef740d0ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F23CFRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBSzRTw2fIimDHP6VCV7e%2BKh8UVrB4iwdldz%2B5AmuYQwAiBjUEdvGNl8d%2FivB9Mmz2pON1SPylkIdy73R26j3Y3HgCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSys5395Fq%2BzeUwuaKtwDNBRheLa4QxtfBLwrUo7XiSVlhbKoIpxGwa0NQmS6t9H%2BS6OJa5yN4PfofzcfXrRl2r1089gienbTpeB7DNdRFFV2e9N78y0%2F6OjC5IzUKCkCD8iAJjhYum5lQJvB43jWXKxwmJVxMjst6whgJLjkYQHl%2F3W%2Fwhr6SIKnDLURY8S7ZcDTdkKYMnFYzAW7%2FG4TnU7ptkdfedYEzMTZSYtMGV%2Bl%2FmoDBVO9zYm1M%2B10kY5hQMW01w3zRVwnmErd5Xe3Ie5bNXj%2BDJvubIwtTSWanoXq7IvJ82eargo%2FZ51Obs7X4ITxfLJV0KgzZlAEkBjE4XhaoEQCXTV3bo8CavXqwBxxProhjT%2FamI6edUCd1SRjRi3GgLaRGqE24jnghbg9jlsVT8QyMlZAlNF7JUWZNXvNc%2BPYTHerc%2BmMm1C5L0kv7tWYTHuGbMI1Ipt3LQZLdDpmrh2PJjCeaMmNFV%2F8WmIYs6HGmDxla2fLKGjVObpvSk%2BqK7%2B45O7Hkc5EIzl7UtMjnIqZ6puGz32k3tepSfYwOY9nydqtXa80W3AJisgPH3cf4k7zf0gHKQKlqZSQ1oKYrHEz500sxmejtnhfaNgY9jY7Dh%2BbpB9eVRu0ozfzqsf4vKCIJbzEokMwy4X9wQY6pgH9EIo7dyOzGZ%2B3RjwmH6UKl8njKrIQNgTXEtZJZC7%2FKkXXWU9qPUZw95G3aM8yqPs%2F1%2FT5gIw2IoTSB9SI%2BKhLmVf%2BYUzm48pTySclLd%2BroZThIIj%2B1mBZFoenLak3DOca0iqCpYrsXzZ%2FxaQiM%2Bqwlo1vQhCRqEymUU0q2Rd0VazJyaj1HtO5TFV7iXnxAA7%2FtCZUYLIxk%2BDg13RiVkOi2NwjGQ8C&X-Amz-Signature=b80d3ca58e648e07161b9909e1a454fd688454762c587585a52c09bd9c71f719&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F23CFRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBSzRTw2fIimDHP6VCV7e%2BKh8UVrB4iwdldz%2B5AmuYQwAiBjUEdvGNl8d%2FivB9Mmz2pON1SPylkIdy73R26j3Y3HgCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSys5395Fq%2BzeUwuaKtwDNBRheLa4QxtfBLwrUo7XiSVlhbKoIpxGwa0NQmS6t9H%2BS6OJa5yN4PfofzcfXrRl2r1089gienbTpeB7DNdRFFV2e9N78y0%2F6OjC5IzUKCkCD8iAJjhYum5lQJvB43jWXKxwmJVxMjst6whgJLjkYQHl%2F3W%2Fwhr6SIKnDLURY8S7ZcDTdkKYMnFYzAW7%2FG4TnU7ptkdfedYEzMTZSYtMGV%2Bl%2FmoDBVO9zYm1M%2B10kY5hQMW01w3zRVwnmErd5Xe3Ie5bNXj%2BDJvubIwtTSWanoXq7IvJ82eargo%2FZ51Obs7X4ITxfLJV0KgzZlAEkBjE4XhaoEQCXTV3bo8CavXqwBxxProhjT%2FamI6edUCd1SRjRi3GgLaRGqE24jnghbg9jlsVT8QyMlZAlNF7JUWZNXvNc%2BPYTHerc%2BmMm1C5L0kv7tWYTHuGbMI1Ipt3LQZLdDpmrh2PJjCeaMmNFV%2F8WmIYs6HGmDxla2fLKGjVObpvSk%2BqK7%2B45O7Hkc5EIzl7UtMjnIqZ6puGz32k3tepSfYwOY9nydqtXa80W3AJisgPH3cf4k7zf0gHKQKlqZSQ1oKYrHEz500sxmejtnhfaNgY9jY7Dh%2BbpB9eVRu0ozfzqsf4vKCIJbzEokMwy4X9wQY6pgH9EIo7dyOzGZ%2B3RjwmH6UKl8njKrIQNgTXEtZJZC7%2FKkXXWU9qPUZw95G3aM8yqPs%2F1%2FT5gIw2IoTSB9SI%2BKhLmVf%2BYUzm48pTySclLd%2BroZThIIj%2B1mBZFoenLak3DOca0iqCpYrsXzZ%2FxaQiM%2Bqwlo1vQhCRqEymUU0q2Rd0VazJyaj1HtO5TFV7iXnxAA7%2FtCZUYLIxk%2BDg13RiVkOi2NwjGQ8C&X-Amz-Signature=7e9790d0d7fd97e6855e1429504f8489edccc7c73d99771b3897da2da0d02aab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F23CFRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBSzRTw2fIimDHP6VCV7e%2BKh8UVrB4iwdldz%2B5AmuYQwAiBjUEdvGNl8d%2FivB9Mmz2pON1SPylkIdy73R26j3Y3HgCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSys5395Fq%2BzeUwuaKtwDNBRheLa4QxtfBLwrUo7XiSVlhbKoIpxGwa0NQmS6t9H%2BS6OJa5yN4PfofzcfXrRl2r1089gienbTpeB7DNdRFFV2e9N78y0%2F6OjC5IzUKCkCD8iAJjhYum5lQJvB43jWXKxwmJVxMjst6whgJLjkYQHl%2F3W%2Fwhr6SIKnDLURY8S7ZcDTdkKYMnFYzAW7%2FG4TnU7ptkdfedYEzMTZSYtMGV%2Bl%2FmoDBVO9zYm1M%2B10kY5hQMW01w3zRVwnmErd5Xe3Ie5bNXj%2BDJvubIwtTSWanoXq7IvJ82eargo%2FZ51Obs7X4ITxfLJV0KgzZlAEkBjE4XhaoEQCXTV3bo8CavXqwBxxProhjT%2FamI6edUCd1SRjRi3GgLaRGqE24jnghbg9jlsVT8QyMlZAlNF7JUWZNXvNc%2BPYTHerc%2BmMm1C5L0kv7tWYTHuGbMI1Ipt3LQZLdDpmrh2PJjCeaMmNFV%2F8WmIYs6HGmDxla2fLKGjVObpvSk%2BqK7%2B45O7Hkc5EIzl7UtMjnIqZ6puGz32k3tepSfYwOY9nydqtXa80W3AJisgPH3cf4k7zf0gHKQKlqZSQ1oKYrHEz500sxmejtnhfaNgY9jY7Dh%2BbpB9eVRu0ozfzqsf4vKCIJbzEokMwy4X9wQY6pgH9EIo7dyOzGZ%2B3RjwmH6UKl8njKrIQNgTXEtZJZC7%2FKkXXWU9qPUZw95G3aM8yqPs%2F1%2FT5gIw2IoTSB9SI%2BKhLmVf%2BYUzm48pTySclLd%2BroZThIIj%2B1mBZFoenLak3DOca0iqCpYrsXzZ%2FxaQiM%2Bqwlo1vQhCRqEymUU0q2Rd0VazJyaj1HtO5TFV7iXnxAA7%2FtCZUYLIxk%2BDg13RiVkOi2NwjGQ8C&X-Amz-Signature=b2ba2792e518df7d46ce072e6ab1773f7bd8280cc6b3edde4c2ce830abc08a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F23CFRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBSzRTw2fIimDHP6VCV7e%2BKh8UVrB4iwdldz%2B5AmuYQwAiBjUEdvGNl8d%2FivB9Mmz2pON1SPylkIdy73R26j3Y3HgCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSys5395Fq%2BzeUwuaKtwDNBRheLa4QxtfBLwrUo7XiSVlhbKoIpxGwa0NQmS6t9H%2BS6OJa5yN4PfofzcfXrRl2r1089gienbTpeB7DNdRFFV2e9N78y0%2F6OjC5IzUKCkCD8iAJjhYum5lQJvB43jWXKxwmJVxMjst6whgJLjkYQHl%2F3W%2Fwhr6SIKnDLURY8S7ZcDTdkKYMnFYzAW7%2FG4TnU7ptkdfedYEzMTZSYtMGV%2Bl%2FmoDBVO9zYm1M%2B10kY5hQMW01w3zRVwnmErd5Xe3Ie5bNXj%2BDJvubIwtTSWanoXq7IvJ82eargo%2FZ51Obs7X4ITxfLJV0KgzZlAEkBjE4XhaoEQCXTV3bo8CavXqwBxxProhjT%2FamI6edUCd1SRjRi3GgLaRGqE24jnghbg9jlsVT8QyMlZAlNF7JUWZNXvNc%2BPYTHerc%2BmMm1C5L0kv7tWYTHuGbMI1Ipt3LQZLdDpmrh2PJjCeaMmNFV%2F8WmIYs6HGmDxla2fLKGjVObpvSk%2BqK7%2B45O7Hkc5EIzl7UtMjnIqZ6puGz32k3tepSfYwOY9nydqtXa80W3AJisgPH3cf4k7zf0gHKQKlqZSQ1oKYrHEz500sxmejtnhfaNgY9jY7Dh%2BbpB9eVRu0ozfzqsf4vKCIJbzEokMwy4X9wQY6pgH9EIo7dyOzGZ%2B3RjwmH6UKl8njKrIQNgTXEtZJZC7%2FKkXXWU9qPUZw95G3aM8yqPs%2F1%2FT5gIw2IoTSB9SI%2BKhLmVf%2BYUzm48pTySclLd%2BroZThIIj%2B1mBZFoenLak3DOca0iqCpYrsXzZ%2FxaQiM%2Bqwlo1vQhCRqEymUU0q2Rd0VazJyaj1HtO5TFV7iXnxAA7%2FtCZUYLIxk%2BDg13RiVkOi2NwjGQ8C&X-Amz-Signature=5c56ac27c2214cc26d1d1dacecb2cbaf0d0d92554800c1afe19c7441e17597ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F23CFRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBSzRTw2fIimDHP6VCV7e%2BKh8UVrB4iwdldz%2B5AmuYQwAiBjUEdvGNl8d%2FivB9Mmz2pON1SPylkIdy73R26j3Y3HgCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSys5395Fq%2BzeUwuaKtwDNBRheLa4QxtfBLwrUo7XiSVlhbKoIpxGwa0NQmS6t9H%2BS6OJa5yN4PfofzcfXrRl2r1089gienbTpeB7DNdRFFV2e9N78y0%2F6OjC5IzUKCkCD8iAJjhYum5lQJvB43jWXKxwmJVxMjst6whgJLjkYQHl%2F3W%2Fwhr6SIKnDLURY8S7ZcDTdkKYMnFYzAW7%2FG4TnU7ptkdfedYEzMTZSYtMGV%2Bl%2FmoDBVO9zYm1M%2B10kY5hQMW01w3zRVwnmErd5Xe3Ie5bNXj%2BDJvubIwtTSWanoXq7IvJ82eargo%2FZ51Obs7X4ITxfLJV0KgzZlAEkBjE4XhaoEQCXTV3bo8CavXqwBxxProhjT%2FamI6edUCd1SRjRi3GgLaRGqE24jnghbg9jlsVT8QyMlZAlNF7JUWZNXvNc%2BPYTHerc%2BmMm1C5L0kv7tWYTHuGbMI1Ipt3LQZLdDpmrh2PJjCeaMmNFV%2F8WmIYs6HGmDxla2fLKGjVObpvSk%2BqK7%2B45O7Hkc5EIzl7UtMjnIqZ6puGz32k3tepSfYwOY9nydqtXa80W3AJisgPH3cf4k7zf0gHKQKlqZSQ1oKYrHEz500sxmejtnhfaNgY9jY7Dh%2BbpB9eVRu0ozfzqsf4vKCIJbzEokMwy4X9wQY6pgH9EIo7dyOzGZ%2B3RjwmH6UKl8njKrIQNgTXEtZJZC7%2FKkXXWU9qPUZw95G3aM8yqPs%2F1%2FT5gIw2IoTSB9SI%2BKhLmVf%2BYUzm48pTySclLd%2BroZThIIj%2B1mBZFoenLak3DOca0iqCpYrsXzZ%2FxaQiM%2Bqwlo1vQhCRqEymUU0q2Rd0VazJyaj1HtO5TFV7iXnxAA7%2FtCZUYLIxk%2BDg13RiVkOi2NwjGQ8C&X-Amz-Signature=85abbdf41508a8dc4c47972c3c5b6d18e2582eff061a76a599bb1a471b1ec589&X-Amz-SignedHeaders=host&x-id=GetObject)
