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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XFDEAGV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDwSSrZsHxacRfflHztQqQ849ECX6Bm3RVGP8Ui0RgT8AiA3WB98bbT9NHpL328X1FI4E7u0Wk54V0MJ4nZlsRwPByr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAgdro5quubawN4rjKtwDCKdrLWTmmNIbJARRP9Ar%2FrbWB%2Fg%2BC6%2BipLQdM%2FWMARxVjzHdY6YTyouZK7IMFkqRdR2NL143HHWmoLQ0vHRFPUEVFlYYayNQgYuZbXP4L3e9OSRZe1TyaPn6%2F8Ub8TxATEzmtwvLo2yA2a%2BQVyaNtSYID816fqXrRNddlEA%2FJ243smpJsk2UYhnet1jNWhoP58uEs9l4cr8SMMEVW8KyDSs%2FXXPd3Ze8%2FWsR2uH18tphEiqC%2FOwKhj2pq9Xs%2FJFmSXj4oCmf%2Bdsscl0EJQhLaI0p1h0zBS55tsXvUWDB%2BvYLv5G8ruX0Vjl4zi1JMLw3K53UFxyG2Lf8a3ckAy0kr0bgf3rCHWK%2BU6Op1mi1fpUhyp%2Bl5WZ6TYq6JDJBjGpKuz1M0oec1QA9I2uJhovogpZoTuxICkzAwd3Bi6hxkK7Mby9uWwJD%2BEeedxZ6kBAiZQxJd4gQAOk9u9cqtnlo54zuXH%2BIhr%2FVFwTuAMCcsXWXgZNbceVh1yPOZIivr%2Fnn%2FlklPE%2BZat%2FZG6Hlh6vWZbk%2FdcoXZzGzgV4EQ1d%2FwXccPz0ejhg1%2FAxh2Ur0Tw3J6IQIlv8yRlwB0VV2eGimThWJ3VOXBgbDg%2F34X5MtJSuGZ3Nr9DhRbKAD1MMwsb35vQY6pgFpjJCpOjsvljdOztiSZENItZw%2BFRH4zfGwhGaMZMbyzQQTPGGyzjRPPnjfbGVpMP7mzHmKv2OJtuzDs0B%2FDX%2BCmtolZWs%2FG73eURt2%2Fw5PGKJNqDs5lZfi40zlvDlU879L4sM8ww68%2Bod4Ir%2F6vItxQXCOkmWRanO40zAujOrDupMRm7Y2LVRKRkXyZcCiUlKQn4EarxPHdo20JIGpG09k%2BkdYmOxO&X-Amz-Signature=d5291a56c1016c421d9c49ec2c7136a3dd5d8949b1fbaea62d41d583dc16ee71&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XFDEAGV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDwSSrZsHxacRfflHztQqQ849ECX6Bm3RVGP8Ui0RgT8AiA3WB98bbT9NHpL328X1FI4E7u0Wk54V0MJ4nZlsRwPByr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAgdro5quubawN4rjKtwDCKdrLWTmmNIbJARRP9Ar%2FrbWB%2Fg%2BC6%2BipLQdM%2FWMARxVjzHdY6YTyouZK7IMFkqRdR2NL143HHWmoLQ0vHRFPUEVFlYYayNQgYuZbXP4L3e9OSRZe1TyaPn6%2F8Ub8TxATEzmtwvLo2yA2a%2BQVyaNtSYID816fqXrRNddlEA%2FJ243smpJsk2UYhnet1jNWhoP58uEs9l4cr8SMMEVW8KyDSs%2FXXPd3Ze8%2FWsR2uH18tphEiqC%2FOwKhj2pq9Xs%2FJFmSXj4oCmf%2Bdsscl0EJQhLaI0p1h0zBS55tsXvUWDB%2BvYLv5G8ruX0Vjl4zi1JMLw3K53UFxyG2Lf8a3ckAy0kr0bgf3rCHWK%2BU6Op1mi1fpUhyp%2Bl5WZ6TYq6JDJBjGpKuz1M0oec1QA9I2uJhovogpZoTuxICkzAwd3Bi6hxkK7Mby9uWwJD%2BEeedxZ6kBAiZQxJd4gQAOk9u9cqtnlo54zuXH%2BIhr%2FVFwTuAMCcsXWXgZNbceVh1yPOZIivr%2Fnn%2FlklPE%2BZat%2FZG6Hlh6vWZbk%2FdcoXZzGzgV4EQ1d%2FwXccPz0ejhg1%2FAxh2Ur0Tw3J6IQIlv8yRlwB0VV2eGimThWJ3VOXBgbDg%2F34X5MtJSuGZ3Nr9DhRbKAD1MMwsb35vQY6pgFpjJCpOjsvljdOztiSZENItZw%2BFRH4zfGwhGaMZMbyzQQTPGGyzjRPPnjfbGVpMP7mzHmKv2OJtuzDs0B%2FDX%2BCmtolZWs%2FG73eURt2%2Fw5PGKJNqDs5lZfi40zlvDlU879L4sM8ww68%2Bod4Ir%2F6vItxQXCOkmWRanO40zAujOrDupMRm7Y2LVRKRkXyZcCiUlKQn4EarxPHdo20JIGpG09k%2BkdYmOxO&X-Amz-Signature=742b8ebb4ac601d0da9dac1786e3f3bc2b4bbbf9061c9277eb9449886beaec46&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XFDEAGV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDwSSrZsHxacRfflHztQqQ849ECX6Bm3RVGP8Ui0RgT8AiA3WB98bbT9NHpL328X1FI4E7u0Wk54V0MJ4nZlsRwPByr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAgdro5quubawN4rjKtwDCKdrLWTmmNIbJARRP9Ar%2FrbWB%2Fg%2BC6%2BipLQdM%2FWMARxVjzHdY6YTyouZK7IMFkqRdR2NL143HHWmoLQ0vHRFPUEVFlYYayNQgYuZbXP4L3e9OSRZe1TyaPn6%2F8Ub8TxATEzmtwvLo2yA2a%2BQVyaNtSYID816fqXrRNddlEA%2FJ243smpJsk2UYhnet1jNWhoP58uEs9l4cr8SMMEVW8KyDSs%2FXXPd3Ze8%2FWsR2uH18tphEiqC%2FOwKhj2pq9Xs%2FJFmSXj4oCmf%2Bdsscl0EJQhLaI0p1h0zBS55tsXvUWDB%2BvYLv5G8ruX0Vjl4zi1JMLw3K53UFxyG2Lf8a3ckAy0kr0bgf3rCHWK%2BU6Op1mi1fpUhyp%2Bl5WZ6TYq6JDJBjGpKuz1M0oec1QA9I2uJhovogpZoTuxICkzAwd3Bi6hxkK7Mby9uWwJD%2BEeedxZ6kBAiZQxJd4gQAOk9u9cqtnlo54zuXH%2BIhr%2FVFwTuAMCcsXWXgZNbceVh1yPOZIivr%2Fnn%2FlklPE%2BZat%2FZG6Hlh6vWZbk%2FdcoXZzGzgV4EQ1d%2FwXccPz0ejhg1%2FAxh2Ur0Tw3J6IQIlv8yRlwB0VV2eGimThWJ3VOXBgbDg%2F34X5MtJSuGZ3Nr9DhRbKAD1MMwsb35vQY6pgFpjJCpOjsvljdOztiSZENItZw%2BFRH4zfGwhGaMZMbyzQQTPGGyzjRPPnjfbGVpMP7mzHmKv2OJtuzDs0B%2FDX%2BCmtolZWs%2FG73eURt2%2Fw5PGKJNqDs5lZfi40zlvDlU879L4sM8ww68%2Bod4Ir%2F6vItxQXCOkmWRanO40zAujOrDupMRm7Y2LVRKRkXyZcCiUlKQn4EarxPHdo20JIGpG09k%2BkdYmOxO&X-Amz-Signature=71832d9b6b28abee60d82202da4275f7596757dfed5124884c07c05da0a81edd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XFDEAGV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDwSSrZsHxacRfflHztQqQ849ECX6Bm3RVGP8Ui0RgT8AiA3WB98bbT9NHpL328X1FI4E7u0Wk54V0MJ4nZlsRwPByr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAgdro5quubawN4rjKtwDCKdrLWTmmNIbJARRP9Ar%2FrbWB%2Fg%2BC6%2BipLQdM%2FWMARxVjzHdY6YTyouZK7IMFkqRdR2NL143HHWmoLQ0vHRFPUEVFlYYayNQgYuZbXP4L3e9OSRZe1TyaPn6%2F8Ub8TxATEzmtwvLo2yA2a%2BQVyaNtSYID816fqXrRNddlEA%2FJ243smpJsk2UYhnet1jNWhoP58uEs9l4cr8SMMEVW8KyDSs%2FXXPd3Ze8%2FWsR2uH18tphEiqC%2FOwKhj2pq9Xs%2FJFmSXj4oCmf%2Bdsscl0EJQhLaI0p1h0zBS55tsXvUWDB%2BvYLv5G8ruX0Vjl4zi1JMLw3K53UFxyG2Lf8a3ckAy0kr0bgf3rCHWK%2BU6Op1mi1fpUhyp%2Bl5WZ6TYq6JDJBjGpKuz1M0oec1QA9I2uJhovogpZoTuxICkzAwd3Bi6hxkK7Mby9uWwJD%2BEeedxZ6kBAiZQxJd4gQAOk9u9cqtnlo54zuXH%2BIhr%2FVFwTuAMCcsXWXgZNbceVh1yPOZIivr%2Fnn%2FlklPE%2BZat%2FZG6Hlh6vWZbk%2FdcoXZzGzgV4EQ1d%2FwXccPz0ejhg1%2FAxh2Ur0Tw3J6IQIlv8yRlwB0VV2eGimThWJ3VOXBgbDg%2F34X5MtJSuGZ3Nr9DhRbKAD1MMwsb35vQY6pgFpjJCpOjsvljdOztiSZENItZw%2BFRH4zfGwhGaMZMbyzQQTPGGyzjRPPnjfbGVpMP7mzHmKv2OJtuzDs0B%2FDX%2BCmtolZWs%2FG73eURt2%2Fw5PGKJNqDs5lZfi40zlvDlU879L4sM8ww68%2Bod4Ir%2F6vItxQXCOkmWRanO40zAujOrDupMRm7Y2LVRKRkXyZcCiUlKQn4EarxPHdo20JIGpG09k%2BkdYmOxO&X-Amz-Signature=af4bc3c6ab4f4b4def65c5a79e382332878c63386a72eb6b376ec2480c2eff82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XFDEAGV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDwSSrZsHxacRfflHztQqQ849ECX6Bm3RVGP8Ui0RgT8AiA3WB98bbT9NHpL328X1FI4E7u0Wk54V0MJ4nZlsRwPByr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAgdro5quubawN4rjKtwDCKdrLWTmmNIbJARRP9Ar%2FrbWB%2Fg%2BC6%2BipLQdM%2FWMARxVjzHdY6YTyouZK7IMFkqRdR2NL143HHWmoLQ0vHRFPUEVFlYYayNQgYuZbXP4L3e9OSRZe1TyaPn6%2F8Ub8TxATEzmtwvLo2yA2a%2BQVyaNtSYID816fqXrRNddlEA%2FJ243smpJsk2UYhnet1jNWhoP58uEs9l4cr8SMMEVW8KyDSs%2FXXPd3Ze8%2FWsR2uH18tphEiqC%2FOwKhj2pq9Xs%2FJFmSXj4oCmf%2Bdsscl0EJQhLaI0p1h0zBS55tsXvUWDB%2BvYLv5G8ruX0Vjl4zi1JMLw3K53UFxyG2Lf8a3ckAy0kr0bgf3rCHWK%2BU6Op1mi1fpUhyp%2Bl5WZ6TYq6JDJBjGpKuz1M0oec1QA9I2uJhovogpZoTuxICkzAwd3Bi6hxkK7Mby9uWwJD%2BEeedxZ6kBAiZQxJd4gQAOk9u9cqtnlo54zuXH%2BIhr%2FVFwTuAMCcsXWXgZNbceVh1yPOZIivr%2Fnn%2FlklPE%2BZat%2FZG6Hlh6vWZbk%2FdcoXZzGzgV4EQ1d%2FwXccPz0ejhg1%2FAxh2Ur0Tw3J6IQIlv8yRlwB0VV2eGimThWJ3VOXBgbDg%2F34X5MtJSuGZ3Nr9DhRbKAD1MMwsb35vQY6pgFpjJCpOjsvljdOztiSZENItZw%2BFRH4zfGwhGaMZMbyzQQTPGGyzjRPPnjfbGVpMP7mzHmKv2OJtuzDs0B%2FDX%2BCmtolZWs%2FG73eURt2%2Fw5PGKJNqDs5lZfi40zlvDlU879L4sM8ww68%2Bod4Ir%2F6vItxQXCOkmWRanO40zAujOrDupMRm7Y2LVRKRkXyZcCiUlKQn4EarxPHdo20JIGpG09k%2BkdYmOxO&X-Amz-Signature=a101c5426f5c3d01a7daf7e6bf067e3e67e912532cab2a5b4c31eec8c445f082&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XFDEAGV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDwSSrZsHxacRfflHztQqQ849ECX6Bm3RVGP8Ui0RgT8AiA3WB98bbT9NHpL328X1FI4E7u0Wk54V0MJ4nZlsRwPByr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAgdro5quubawN4rjKtwDCKdrLWTmmNIbJARRP9Ar%2FrbWB%2Fg%2BC6%2BipLQdM%2FWMARxVjzHdY6YTyouZK7IMFkqRdR2NL143HHWmoLQ0vHRFPUEVFlYYayNQgYuZbXP4L3e9OSRZe1TyaPn6%2F8Ub8TxATEzmtwvLo2yA2a%2BQVyaNtSYID816fqXrRNddlEA%2FJ243smpJsk2UYhnet1jNWhoP58uEs9l4cr8SMMEVW8KyDSs%2FXXPd3Ze8%2FWsR2uH18tphEiqC%2FOwKhj2pq9Xs%2FJFmSXj4oCmf%2Bdsscl0EJQhLaI0p1h0zBS55tsXvUWDB%2BvYLv5G8ruX0Vjl4zi1JMLw3K53UFxyG2Lf8a3ckAy0kr0bgf3rCHWK%2BU6Op1mi1fpUhyp%2Bl5WZ6TYq6JDJBjGpKuz1M0oec1QA9I2uJhovogpZoTuxICkzAwd3Bi6hxkK7Mby9uWwJD%2BEeedxZ6kBAiZQxJd4gQAOk9u9cqtnlo54zuXH%2BIhr%2FVFwTuAMCcsXWXgZNbceVh1yPOZIivr%2Fnn%2FlklPE%2BZat%2FZG6Hlh6vWZbk%2FdcoXZzGzgV4EQ1d%2FwXccPz0ejhg1%2FAxh2Ur0Tw3J6IQIlv8yRlwB0VV2eGimThWJ3VOXBgbDg%2F34X5MtJSuGZ3Nr9DhRbKAD1MMwsb35vQY6pgFpjJCpOjsvljdOztiSZENItZw%2BFRH4zfGwhGaMZMbyzQQTPGGyzjRPPnjfbGVpMP7mzHmKv2OJtuzDs0B%2FDX%2BCmtolZWs%2FG73eURt2%2Fw5PGKJNqDs5lZfi40zlvDlU879L4sM8ww68%2Bod4Ir%2F6vItxQXCOkmWRanO40zAujOrDupMRm7Y2LVRKRkXyZcCiUlKQn4EarxPHdo20JIGpG09k%2BkdYmOxO&X-Amz-Signature=70990385cb2ef28164d34dfcf66bcca3f20c6408ef5d255e4ec702a9b6728f32&X-Amz-SignedHeaders=host&x-id=GetObject)
