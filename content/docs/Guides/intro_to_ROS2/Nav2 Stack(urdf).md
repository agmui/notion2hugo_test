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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC63YAS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAukin1%2FOm4gX7O2JKfZ6eI4TY%2BAfzgn%2Bs1HocfcXyl1AiEA0tIxGhzdXLcDb%2Fz5RQWu4rUx9wQkoHFPzztqP1ZGHwoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuKiE7Lsy36x8JwqyrcAx73poCjsE0gqe3mnm4iQr%2FdTYqUlGcUDJB0NLdUCp3iphJoLWe67LU9J12satkIbN0XMmIpinHbjEI4jAj1ebvlYihf0Y7UyP5o%2BOFDhFy6n7QyDsxmnR5KjxKkWHO22je4LeYjdS1zFolI%2Bwzq6EIIsUL3bNwMOwI33kDze8uaevM0%2FpB9EemjLGrLjckCaom797%2B61Nyrsm3gJ1HcXzc%2FM0XYyj%2FReXBwvDtrVtZItjw91ohZy9pw9zcNjnlJp82Ai86TOkjWU%2BybQ62HQyOcO%2F8T1bLQWvAtnGLoePm8m%2BjUcsXk0JupFxZzgle0QUxMRfSRU8u4QZAar4UtzlMMiPXl4Wjb0WULHO4C09N20%2Blb9DQS0vmx%2Fz3MM4KVcMX9qX8%2FlDxeXBI0Aznio9RgcD4yq4ZMYQBmYRqe%2BKV1YTpGlQEk2WtjNpf556yqlNPw6o8Jyzniq4uCGluVhhy3TyVBU6kpXlbu8C6M5VI8CapTYdRjVOSzwvenZZO5E1W7oz3lVCNgrQgHRexMMNC4%2FNSyu%2BYzFgGsd114ppI0sJ4RhrXrlBk1f63zuX1m9Y6uBKmcyOAPuhp6Ln3XMQYwNuKtJ%2FHLBvamdnnepe%2BsITxcsHKnDMvaumvTMI%2FxiL8GOqUBmdZq8rm1helnICFJvTC%2BgS2Xnnb31W4lsvjaEIslN4tDenKYKnUpdZoaEvoXwDxfSzmFGZBjNti8yHLupL6eJdNpmmHRRsXYiFe4ayHr%2FrPKIDGO6Fjx6inUP3QnYDvuYDf7JSFGuOcBeN6XgR9IKq7d%2FVUzZIcXPXbf8dE9EWMyOT4o0RdmgRhebna1FZRZSMtbfnca7rvPjJhUyBHnhTnVO%2FtR&X-Amz-Signature=f2d641f966918cb877504eca049ec892f5e654ff23b6143aa726b62f77cc89ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC63YAS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAukin1%2FOm4gX7O2JKfZ6eI4TY%2BAfzgn%2Bs1HocfcXyl1AiEA0tIxGhzdXLcDb%2Fz5RQWu4rUx9wQkoHFPzztqP1ZGHwoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuKiE7Lsy36x8JwqyrcAx73poCjsE0gqe3mnm4iQr%2FdTYqUlGcUDJB0NLdUCp3iphJoLWe67LU9J12satkIbN0XMmIpinHbjEI4jAj1ebvlYihf0Y7UyP5o%2BOFDhFy6n7QyDsxmnR5KjxKkWHO22je4LeYjdS1zFolI%2Bwzq6EIIsUL3bNwMOwI33kDze8uaevM0%2FpB9EemjLGrLjckCaom797%2B61Nyrsm3gJ1HcXzc%2FM0XYyj%2FReXBwvDtrVtZItjw91ohZy9pw9zcNjnlJp82Ai86TOkjWU%2BybQ62HQyOcO%2F8T1bLQWvAtnGLoePm8m%2BjUcsXk0JupFxZzgle0QUxMRfSRU8u4QZAar4UtzlMMiPXl4Wjb0WULHO4C09N20%2Blb9DQS0vmx%2Fz3MM4KVcMX9qX8%2FlDxeXBI0Aznio9RgcD4yq4ZMYQBmYRqe%2BKV1YTpGlQEk2WtjNpf556yqlNPw6o8Jyzniq4uCGluVhhy3TyVBU6kpXlbu8C6M5VI8CapTYdRjVOSzwvenZZO5E1W7oz3lVCNgrQgHRexMMNC4%2FNSyu%2BYzFgGsd114ppI0sJ4RhrXrlBk1f63zuX1m9Y6uBKmcyOAPuhp6Ln3XMQYwNuKtJ%2FHLBvamdnnepe%2BsITxcsHKnDMvaumvTMI%2FxiL8GOqUBmdZq8rm1helnICFJvTC%2BgS2Xnnb31W4lsvjaEIslN4tDenKYKnUpdZoaEvoXwDxfSzmFGZBjNti8yHLupL6eJdNpmmHRRsXYiFe4ayHr%2FrPKIDGO6Fjx6inUP3QnYDvuYDf7JSFGuOcBeN6XgR9IKq7d%2FVUzZIcXPXbf8dE9EWMyOT4o0RdmgRhebna1FZRZSMtbfnca7rvPjJhUyBHnhTnVO%2FtR&X-Amz-Signature=1aaae6e67d6e60373940fbcc68898c5cbcb47012ead8f5d186bbe34fe085684b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC63YAS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAukin1%2FOm4gX7O2JKfZ6eI4TY%2BAfzgn%2Bs1HocfcXyl1AiEA0tIxGhzdXLcDb%2Fz5RQWu4rUx9wQkoHFPzztqP1ZGHwoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuKiE7Lsy36x8JwqyrcAx73poCjsE0gqe3mnm4iQr%2FdTYqUlGcUDJB0NLdUCp3iphJoLWe67LU9J12satkIbN0XMmIpinHbjEI4jAj1ebvlYihf0Y7UyP5o%2BOFDhFy6n7QyDsxmnR5KjxKkWHO22je4LeYjdS1zFolI%2Bwzq6EIIsUL3bNwMOwI33kDze8uaevM0%2FpB9EemjLGrLjckCaom797%2B61Nyrsm3gJ1HcXzc%2FM0XYyj%2FReXBwvDtrVtZItjw91ohZy9pw9zcNjnlJp82Ai86TOkjWU%2BybQ62HQyOcO%2F8T1bLQWvAtnGLoePm8m%2BjUcsXk0JupFxZzgle0QUxMRfSRU8u4QZAar4UtzlMMiPXl4Wjb0WULHO4C09N20%2Blb9DQS0vmx%2Fz3MM4KVcMX9qX8%2FlDxeXBI0Aznio9RgcD4yq4ZMYQBmYRqe%2BKV1YTpGlQEk2WtjNpf556yqlNPw6o8Jyzniq4uCGluVhhy3TyVBU6kpXlbu8C6M5VI8CapTYdRjVOSzwvenZZO5E1W7oz3lVCNgrQgHRexMMNC4%2FNSyu%2BYzFgGsd114ppI0sJ4RhrXrlBk1f63zuX1m9Y6uBKmcyOAPuhp6Ln3XMQYwNuKtJ%2FHLBvamdnnepe%2BsITxcsHKnDMvaumvTMI%2FxiL8GOqUBmdZq8rm1helnICFJvTC%2BgS2Xnnb31W4lsvjaEIslN4tDenKYKnUpdZoaEvoXwDxfSzmFGZBjNti8yHLupL6eJdNpmmHRRsXYiFe4ayHr%2FrPKIDGO6Fjx6inUP3QnYDvuYDf7JSFGuOcBeN6XgR9IKq7d%2FVUzZIcXPXbf8dE9EWMyOT4o0RdmgRhebna1FZRZSMtbfnca7rvPjJhUyBHnhTnVO%2FtR&X-Amz-Signature=a0bc206ea0ba6edb799025c4a134ae1aef4178d04f6c3dd8c51ca567f0ca987f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC63YAS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAukin1%2FOm4gX7O2JKfZ6eI4TY%2BAfzgn%2Bs1HocfcXyl1AiEA0tIxGhzdXLcDb%2Fz5RQWu4rUx9wQkoHFPzztqP1ZGHwoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuKiE7Lsy36x8JwqyrcAx73poCjsE0gqe3mnm4iQr%2FdTYqUlGcUDJB0NLdUCp3iphJoLWe67LU9J12satkIbN0XMmIpinHbjEI4jAj1ebvlYihf0Y7UyP5o%2BOFDhFy6n7QyDsxmnR5KjxKkWHO22je4LeYjdS1zFolI%2Bwzq6EIIsUL3bNwMOwI33kDze8uaevM0%2FpB9EemjLGrLjckCaom797%2B61Nyrsm3gJ1HcXzc%2FM0XYyj%2FReXBwvDtrVtZItjw91ohZy9pw9zcNjnlJp82Ai86TOkjWU%2BybQ62HQyOcO%2F8T1bLQWvAtnGLoePm8m%2BjUcsXk0JupFxZzgle0QUxMRfSRU8u4QZAar4UtzlMMiPXl4Wjb0WULHO4C09N20%2Blb9DQS0vmx%2Fz3MM4KVcMX9qX8%2FlDxeXBI0Aznio9RgcD4yq4ZMYQBmYRqe%2BKV1YTpGlQEk2WtjNpf556yqlNPw6o8Jyzniq4uCGluVhhy3TyVBU6kpXlbu8C6M5VI8CapTYdRjVOSzwvenZZO5E1W7oz3lVCNgrQgHRexMMNC4%2FNSyu%2BYzFgGsd114ppI0sJ4RhrXrlBk1f63zuX1m9Y6uBKmcyOAPuhp6Ln3XMQYwNuKtJ%2FHLBvamdnnepe%2BsITxcsHKnDMvaumvTMI%2FxiL8GOqUBmdZq8rm1helnICFJvTC%2BgS2Xnnb31W4lsvjaEIslN4tDenKYKnUpdZoaEvoXwDxfSzmFGZBjNti8yHLupL6eJdNpmmHRRsXYiFe4ayHr%2FrPKIDGO6Fjx6inUP3QnYDvuYDf7JSFGuOcBeN6XgR9IKq7d%2FVUzZIcXPXbf8dE9EWMyOT4o0RdmgRhebna1FZRZSMtbfnca7rvPjJhUyBHnhTnVO%2FtR&X-Amz-Signature=6c75ee408bdbf829bd0a9bdd02ae52a97d1a7775aaad1edb937a2480ab23fb36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC63YAS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAukin1%2FOm4gX7O2JKfZ6eI4TY%2BAfzgn%2Bs1HocfcXyl1AiEA0tIxGhzdXLcDb%2Fz5RQWu4rUx9wQkoHFPzztqP1ZGHwoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuKiE7Lsy36x8JwqyrcAx73poCjsE0gqe3mnm4iQr%2FdTYqUlGcUDJB0NLdUCp3iphJoLWe67LU9J12satkIbN0XMmIpinHbjEI4jAj1ebvlYihf0Y7UyP5o%2BOFDhFy6n7QyDsxmnR5KjxKkWHO22je4LeYjdS1zFolI%2Bwzq6EIIsUL3bNwMOwI33kDze8uaevM0%2FpB9EemjLGrLjckCaom797%2B61Nyrsm3gJ1HcXzc%2FM0XYyj%2FReXBwvDtrVtZItjw91ohZy9pw9zcNjnlJp82Ai86TOkjWU%2BybQ62HQyOcO%2F8T1bLQWvAtnGLoePm8m%2BjUcsXk0JupFxZzgle0QUxMRfSRU8u4QZAar4UtzlMMiPXl4Wjb0WULHO4C09N20%2Blb9DQS0vmx%2Fz3MM4KVcMX9qX8%2FlDxeXBI0Aznio9RgcD4yq4ZMYQBmYRqe%2BKV1YTpGlQEk2WtjNpf556yqlNPw6o8Jyzniq4uCGluVhhy3TyVBU6kpXlbu8C6M5VI8CapTYdRjVOSzwvenZZO5E1W7oz3lVCNgrQgHRexMMNC4%2FNSyu%2BYzFgGsd114ppI0sJ4RhrXrlBk1f63zuX1m9Y6uBKmcyOAPuhp6Ln3XMQYwNuKtJ%2FHLBvamdnnepe%2BsITxcsHKnDMvaumvTMI%2FxiL8GOqUBmdZq8rm1helnICFJvTC%2BgS2Xnnb31W4lsvjaEIslN4tDenKYKnUpdZoaEvoXwDxfSzmFGZBjNti8yHLupL6eJdNpmmHRRsXYiFe4ayHr%2FrPKIDGO6Fjx6inUP3QnYDvuYDf7JSFGuOcBeN6XgR9IKq7d%2FVUzZIcXPXbf8dE9EWMyOT4o0RdmgRhebna1FZRZSMtbfnca7rvPjJhUyBHnhTnVO%2FtR&X-Amz-Signature=8145066d92e610260465b9d935a4a444f1453462cf5e10201d322ab2cbd10a32&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC63YAS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAukin1%2FOm4gX7O2JKfZ6eI4TY%2BAfzgn%2Bs1HocfcXyl1AiEA0tIxGhzdXLcDb%2Fz5RQWu4rUx9wQkoHFPzztqP1ZGHwoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuKiE7Lsy36x8JwqyrcAx73poCjsE0gqe3mnm4iQr%2FdTYqUlGcUDJB0NLdUCp3iphJoLWe67LU9J12satkIbN0XMmIpinHbjEI4jAj1ebvlYihf0Y7UyP5o%2BOFDhFy6n7QyDsxmnR5KjxKkWHO22je4LeYjdS1zFolI%2Bwzq6EIIsUL3bNwMOwI33kDze8uaevM0%2FpB9EemjLGrLjckCaom797%2B61Nyrsm3gJ1HcXzc%2FM0XYyj%2FReXBwvDtrVtZItjw91ohZy9pw9zcNjnlJp82Ai86TOkjWU%2BybQ62HQyOcO%2F8T1bLQWvAtnGLoePm8m%2BjUcsXk0JupFxZzgle0QUxMRfSRU8u4QZAar4UtzlMMiPXl4Wjb0WULHO4C09N20%2Blb9DQS0vmx%2Fz3MM4KVcMX9qX8%2FlDxeXBI0Aznio9RgcD4yq4ZMYQBmYRqe%2BKV1YTpGlQEk2WtjNpf556yqlNPw6o8Jyzniq4uCGluVhhy3TyVBU6kpXlbu8C6M5VI8CapTYdRjVOSzwvenZZO5E1W7oz3lVCNgrQgHRexMMNC4%2FNSyu%2BYzFgGsd114ppI0sJ4RhrXrlBk1f63zuX1m9Y6uBKmcyOAPuhp6Ln3XMQYwNuKtJ%2FHLBvamdnnepe%2BsITxcsHKnDMvaumvTMI%2FxiL8GOqUBmdZq8rm1helnICFJvTC%2BgS2Xnnb31W4lsvjaEIslN4tDenKYKnUpdZoaEvoXwDxfSzmFGZBjNti8yHLupL6eJdNpmmHRRsXYiFe4ayHr%2FrPKIDGO6Fjx6inUP3QnYDvuYDf7JSFGuOcBeN6XgR9IKq7d%2FVUzZIcXPXbf8dE9EWMyOT4o0RdmgRhebna1FZRZSMtbfnca7rvPjJhUyBHnhTnVO%2FtR&X-Amz-Signature=4e491be5ee8a53f24d67234abd2c7822eb44c4814a3082029f9621d61f28bc4a&X-Amz-SignedHeaders=host&x-id=GetObject)
