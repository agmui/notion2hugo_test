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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DPWJVC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC2MRoOpprwcifdF%2BFRvzhkUdmoQcPzl4Tw3SNG4Zq6%2FAIhALO9VbaEcqkvXFXkp%2BGoXomWXN6FdjthblVugdOFt%2FqWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWnGOTdP3MBZUtUfMq3APeRfGmRxxi6s0vLe2V4ibn9%2FpKum9r8mURPyA3FfnXqGDBm5wYnFmydZ34934VMm%2B%2FVaTWjtWle3CfRKtOPu9Wq%2BiIIpYZWBb%2B8WFOBxBCUVtqrIPtJAZ39C1P1hL9I%2BEgZhwfkElVLqXxL5kNEN1SaROVhWNCRzNy6QB77yHVGieYGp97WEjhVhYdDUTMSA%2FxdvT%2FVst9C1oi5GzYETD0ZlPNb5MRChNGiPMJEo7CS%2FRxGe%2FxFe7%2B0bYTBkTrsQAfQLmJh0PvsBwLM69AVkadru7GtrYkKd%2Bpq1w%2B5X3gxZii45Ay%2BApA1%2BPJ6B%2BgOf73bcqV4Y92uiNAbm5Vj3Xj9zHIMnG8uwcwnC6RgVipfwHmYl%2FgrH75OCLMIOe6ZYUaLZI%2BDgFfsHBEP5TPlQD0cVYO51w1HWdUaMjbapxokaU0PDoM1MpnK2z74CdBWSBab%2BNrCe%2BvK0XLnEp5cvajm%2Fo1%2BZozSXLkWIQOnOagsWJHImD8A6iIjJhk7vSjaTxZKXosX967gBODM5sh4I6VucbfZuENg2VQoH88gHj5C6JZ2yqqDAb%2B1svdxVjLwRFfjzii%2Fnlb6qn%2BTQ0NvGk7C2Zwx%2F09I7fLrDkM7lFfeq09APZxCjdO0wCy0DCb%2B9a9BjqkAceAsEubcoWoknwhIhV%2BLn7zmaXaw1UTQwgyLpuL95KEzr1jzwmmWzv7uy5mJUTWil%2FwAx8wrKjsjJ8qJSoTQ7yZTYvd2e%2BfvW8uK%2FhmzAhNB5rIAVUXc4ftI2KaDmE3t9In%2BZDzfF%2B9PWMsQ8cQXBT5y4ySPkxTQFnesE%2BuQD%2B8ihv95Ou9J0PrrLn07IAnbgbhKWiUgKbyGCdwIZD%2BNeQYp3rc&X-Amz-Signature=24d64fc9742be0cb8bb79a7334abfa51d68d1893742e05e41fc41d623e7ce53e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DPWJVC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC2MRoOpprwcifdF%2BFRvzhkUdmoQcPzl4Tw3SNG4Zq6%2FAIhALO9VbaEcqkvXFXkp%2BGoXomWXN6FdjthblVugdOFt%2FqWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWnGOTdP3MBZUtUfMq3APeRfGmRxxi6s0vLe2V4ibn9%2FpKum9r8mURPyA3FfnXqGDBm5wYnFmydZ34934VMm%2B%2FVaTWjtWle3CfRKtOPu9Wq%2BiIIpYZWBb%2B8WFOBxBCUVtqrIPtJAZ39C1P1hL9I%2BEgZhwfkElVLqXxL5kNEN1SaROVhWNCRzNy6QB77yHVGieYGp97WEjhVhYdDUTMSA%2FxdvT%2FVst9C1oi5GzYETD0ZlPNb5MRChNGiPMJEo7CS%2FRxGe%2FxFe7%2B0bYTBkTrsQAfQLmJh0PvsBwLM69AVkadru7GtrYkKd%2Bpq1w%2B5X3gxZii45Ay%2BApA1%2BPJ6B%2BgOf73bcqV4Y92uiNAbm5Vj3Xj9zHIMnG8uwcwnC6RgVipfwHmYl%2FgrH75OCLMIOe6ZYUaLZI%2BDgFfsHBEP5TPlQD0cVYO51w1HWdUaMjbapxokaU0PDoM1MpnK2z74CdBWSBab%2BNrCe%2BvK0XLnEp5cvajm%2Fo1%2BZozSXLkWIQOnOagsWJHImD8A6iIjJhk7vSjaTxZKXosX967gBODM5sh4I6VucbfZuENg2VQoH88gHj5C6JZ2yqqDAb%2B1svdxVjLwRFfjzii%2Fnlb6qn%2BTQ0NvGk7C2Zwx%2F09I7fLrDkM7lFfeq09APZxCjdO0wCy0DCb%2B9a9BjqkAceAsEubcoWoknwhIhV%2BLn7zmaXaw1UTQwgyLpuL95KEzr1jzwmmWzv7uy5mJUTWil%2FwAx8wrKjsjJ8qJSoTQ7yZTYvd2e%2BfvW8uK%2FhmzAhNB5rIAVUXc4ftI2KaDmE3t9In%2BZDzfF%2B9PWMsQ8cQXBT5y4ySPkxTQFnesE%2BuQD%2B8ihv95Ou9J0PrrLn07IAnbgbhKWiUgKbyGCdwIZD%2BNeQYp3rc&X-Amz-Signature=4d26fd426a4fcc68fa2dfd2f3ab9f04af760261b398005b0fe5e3f3ae69e50aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DPWJVC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC2MRoOpprwcifdF%2BFRvzhkUdmoQcPzl4Tw3SNG4Zq6%2FAIhALO9VbaEcqkvXFXkp%2BGoXomWXN6FdjthblVugdOFt%2FqWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWnGOTdP3MBZUtUfMq3APeRfGmRxxi6s0vLe2V4ibn9%2FpKum9r8mURPyA3FfnXqGDBm5wYnFmydZ34934VMm%2B%2FVaTWjtWle3CfRKtOPu9Wq%2BiIIpYZWBb%2B8WFOBxBCUVtqrIPtJAZ39C1P1hL9I%2BEgZhwfkElVLqXxL5kNEN1SaROVhWNCRzNy6QB77yHVGieYGp97WEjhVhYdDUTMSA%2FxdvT%2FVst9C1oi5GzYETD0ZlPNb5MRChNGiPMJEo7CS%2FRxGe%2FxFe7%2B0bYTBkTrsQAfQLmJh0PvsBwLM69AVkadru7GtrYkKd%2Bpq1w%2B5X3gxZii45Ay%2BApA1%2BPJ6B%2BgOf73bcqV4Y92uiNAbm5Vj3Xj9zHIMnG8uwcwnC6RgVipfwHmYl%2FgrH75OCLMIOe6ZYUaLZI%2BDgFfsHBEP5TPlQD0cVYO51w1HWdUaMjbapxokaU0PDoM1MpnK2z74CdBWSBab%2BNrCe%2BvK0XLnEp5cvajm%2Fo1%2BZozSXLkWIQOnOagsWJHImD8A6iIjJhk7vSjaTxZKXosX967gBODM5sh4I6VucbfZuENg2VQoH88gHj5C6JZ2yqqDAb%2B1svdxVjLwRFfjzii%2Fnlb6qn%2BTQ0NvGk7C2Zwx%2F09I7fLrDkM7lFfeq09APZxCjdO0wCy0DCb%2B9a9BjqkAceAsEubcoWoknwhIhV%2BLn7zmaXaw1UTQwgyLpuL95KEzr1jzwmmWzv7uy5mJUTWil%2FwAx8wrKjsjJ8qJSoTQ7yZTYvd2e%2BfvW8uK%2FhmzAhNB5rIAVUXc4ftI2KaDmE3t9In%2BZDzfF%2B9PWMsQ8cQXBT5y4ySPkxTQFnesE%2BuQD%2B8ihv95Ou9J0PrrLn07IAnbgbhKWiUgKbyGCdwIZD%2BNeQYp3rc&X-Amz-Signature=cc96b0bbe81609dc1e4a96a6c83846c10d8654761ebceb13dd4d6c7ef2d6c2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DPWJVC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC2MRoOpprwcifdF%2BFRvzhkUdmoQcPzl4Tw3SNG4Zq6%2FAIhALO9VbaEcqkvXFXkp%2BGoXomWXN6FdjthblVugdOFt%2FqWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWnGOTdP3MBZUtUfMq3APeRfGmRxxi6s0vLe2V4ibn9%2FpKum9r8mURPyA3FfnXqGDBm5wYnFmydZ34934VMm%2B%2FVaTWjtWle3CfRKtOPu9Wq%2BiIIpYZWBb%2B8WFOBxBCUVtqrIPtJAZ39C1P1hL9I%2BEgZhwfkElVLqXxL5kNEN1SaROVhWNCRzNy6QB77yHVGieYGp97WEjhVhYdDUTMSA%2FxdvT%2FVst9C1oi5GzYETD0ZlPNb5MRChNGiPMJEo7CS%2FRxGe%2FxFe7%2B0bYTBkTrsQAfQLmJh0PvsBwLM69AVkadru7GtrYkKd%2Bpq1w%2B5X3gxZii45Ay%2BApA1%2BPJ6B%2BgOf73bcqV4Y92uiNAbm5Vj3Xj9zHIMnG8uwcwnC6RgVipfwHmYl%2FgrH75OCLMIOe6ZYUaLZI%2BDgFfsHBEP5TPlQD0cVYO51w1HWdUaMjbapxokaU0PDoM1MpnK2z74CdBWSBab%2BNrCe%2BvK0XLnEp5cvajm%2Fo1%2BZozSXLkWIQOnOagsWJHImD8A6iIjJhk7vSjaTxZKXosX967gBODM5sh4I6VucbfZuENg2VQoH88gHj5C6JZ2yqqDAb%2B1svdxVjLwRFfjzii%2Fnlb6qn%2BTQ0NvGk7C2Zwx%2F09I7fLrDkM7lFfeq09APZxCjdO0wCy0DCb%2B9a9BjqkAceAsEubcoWoknwhIhV%2BLn7zmaXaw1UTQwgyLpuL95KEzr1jzwmmWzv7uy5mJUTWil%2FwAx8wrKjsjJ8qJSoTQ7yZTYvd2e%2BfvW8uK%2FhmzAhNB5rIAVUXc4ftI2KaDmE3t9In%2BZDzfF%2B9PWMsQ8cQXBT5y4ySPkxTQFnesE%2BuQD%2B8ihv95Ou9J0PrrLn07IAnbgbhKWiUgKbyGCdwIZD%2BNeQYp3rc&X-Amz-Signature=a3236b1f75e9ee16d1bfb48761c86d5074ae08e1ffa141244af1ceed5f3f402e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DPWJVC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC2MRoOpprwcifdF%2BFRvzhkUdmoQcPzl4Tw3SNG4Zq6%2FAIhALO9VbaEcqkvXFXkp%2BGoXomWXN6FdjthblVugdOFt%2FqWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWnGOTdP3MBZUtUfMq3APeRfGmRxxi6s0vLe2V4ibn9%2FpKum9r8mURPyA3FfnXqGDBm5wYnFmydZ34934VMm%2B%2FVaTWjtWle3CfRKtOPu9Wq%2BiIIpYZWBb%2B8WFOBxBCUVtqrIPtJAZ39C1P1hL9I%2BEgZhwfkElVLqXxL5kNEN1SaROVhWNCRzNy6QB77yHVGieYGp97WEjhVhYdDUTMSA%2FxdvT%2FVst9C1oi5GzYETD0ZlPNb5MRChNGiPMJEo7CS%2FRxGe%2FxFe7%2B0bYTBkTrsQAfQLmJh0PvsBwLM69AVkadru7GtrYkKd%2Bpq1w%2B5X3gxZii45Ay%2BApA1%2BPJ6B%2BgOf73bcqV4Y92uiNAbm5Vj3Xj9zHIMnG8uwcwnC6RgVipfwHmYl%2FgrH75OCLMIOe6ZYUaLZI%2BDgFfsHBEP5TPlQD0cVYO51w1HWdUaMjbapxokaU0PDoM1MpnK2z74CdBWSBab%2BNrCe%2BvK0XLnEp5cvajm%2Fo1%2BZozSXLkWIQOnOagsWJHImD8A6iIjJhk7vSjaTxZKXosX967gBODM5sh4I6VucbfZuENg2VQoH88gHj5C6JZ2yqqDAb%2B1svdxVjLwRFfjzii%2Fnlb6qn%2BTQ0NvGk7C2Zwx%2F09I7fLrDkM7lFfeq09APZxCjdO0wCy0DCb%2B9a9BjqkAceAsEubcoWoknwhIhV%2BLn7zmaXaw1UTQwgyLpuL95KEzr1jzwmmWzv7uy5mJUTWil%2FwAx8wrKjsjJ8qJSoTQ7yZTYvd2e%2BfvW8uK%2FhmzAhNB5rIAVUXc4ftI2KaDmE3t9In%2BZDzfF%2B9PWMsQ8cQXBT5y4ySPkxTQFnesE%2BuQD%2B8ihv95Ou9J0PrrLn07IAnbgbhKWiUgKbyGCdwIZD%2BNeQYp3rc&X-Amz-Signature=018c30476e6316987718afd704555775a368f369dce13bd1fc134f55c15f6c94&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DPWJVC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC2MRoOpprwcifdF%2BFRvzhkUdmoQcPzl4Tw3SNG4Zq6%2FAIhALO9VbaEcqkvXFXkp%2BGoXomWXN6FdjthblVugdOFt%2FqWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWnGOTdP3MBZUtUfMq3APeRfGmRxxi6s0vLe2V4ibn9%2FpKum9r8mURPyA3FfnXqGDBm5wYnFmydZ34934VMm%2B%2FVaTWjtWle3CfRKtOPu9Wq%2BiIIpYZWBb%2B8WFOBxBCUVtqrIPtJAZ39C1P1hL9I%2BEgZhwfkElVLqXxL5kNEN1SaROVhWNCRzNy6QB77yHVGieYGp97WEjhVhYdDUTMSA%2FxdvT%2FVst9C1oi5GzYETD0ZlPNb5MRChNGiPMJEo7CS%2FRxGe%2FxFe7%2B0bYTBkTrsQAfQLmJh0PvsBwLM69AVkadru7GtrYkKd%2Bpq1w%2B5X3gxZii45Ay%2BApA1%2BPJ6B%2BgOf73bcqV4Y92uiNAbm5Vj3Xj9zHIMnG8uwcwnC6RgVipfwHmYl%2FgrH75OCLMIOe6ZYUaLZI%2BDgFfsHBEP5TPlQD0cVYO51w1HWdUaMjbapxokaU0PDoM1MpnK2z74CdBWSBab%2BNrCe%2BvK0XLnEp5cvajm%2Fo1%2BZozSXLkWIQOnOagsWJHImD8A6iIjJhk7vSjaTxZKXosX967gBODM5sh4I6VucbfZuENg2VQoH88gHj5C6JZ2yqqDAb%2B1svdxVjLwRFfjzii%2Fnlb6qn%2BTQ0NvGk7C2Zwx%2F09I7fLrDkM7lFfeq09APZxCjdO0wCy0DCb%2B9a9BjqkAceAsEubcoWoknwhIhV%2BLn7zmaXaw1UTQwgyLpuL95KEzr1jzwmmWzv7uy5mJUTWil%2FwAx8wrKjsjJ8qJSoTQ7yZTYvd2e%2BfvW8uK%2FhmzAhNB5rIAVUXc4ftI2KaDmE3t9In%2BZDzfF%2B9PWMsQ8cQXBT5y4ySPkxTQFnesE%2BuQD%2B8ihv95Ou9J0PrrLn07IAnbgbhKWiUgKbyGCdwIZD%2BNeQYp3rc&X-Amz-Signature=184bb66770575a8b3bd9afa42c88c3f80777a7c1fdcea6c15177788bbb9ff96d&X-Amz-SignedHeaders=host&x-id=GetObject)
