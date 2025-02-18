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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOYXVUS%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDqzwcGOogLulUpZx8u8MTIWOQN0GlOag12zGCg7bCgGAiBF%2FM%2FQaoPgmYfzPzMh9sb%2F5A0Uf3FXVkHfHEYPq5iIwyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8zGeC9fa52XOutNKtwDnUjReDQst6G50Kbbk3uszofjlXYLn21G7MMe8G5zMwTp%2Fkap2G64%2BXTiKtqMNJVPkCrOoh6NZdVNXCxXRTP64ayb0L4k5VjuO7sbj3NHkpk00z0cEZOpkIwg5NNOAu%2BU75iGiMciVarqSYyrcS6OgXKfqKeS7szP7IN2w4kupMOtF4ngopxN2r94tH6MdN%2BhOLM00KWk765MgQve4vsmY9caunNC7HjAgzhqBkGmcaKks10AULsBXvUpGAB5iO4JjQVV3RxJZU0218c7tuoMcx5eI7LT8nt2mr5ko6WojnyGUe1XupkpxYemWb796qsKfYfe%2BIl%2BiW%2F0L7zJuEI4DD1grc90yhAWfUKjXXKdbXdLnBcA4rB08CDkxAr2JEwKFVsRYgm4Xs12mW2fT%2B1T5Qcol9iwtWQu79ufok7YxLAfHR3YpSfaSt7W6Qm4Ixl6ugYVYBd8PDLSfvpv%2BLF%2BspTAJfHIBs1YAo9hICyGkHKrv1KbkX3%2Bll4l1esdjuHLjFexYx4budRhmpTr27J3YAO9qcuK%2FugGixx%2FrrnplC7pmOCGgBWrbFpCPji8f7w0b1uh5D8r5Z%2B64AYp0Y0%2F9Y50hklk9%2BkElmf3qMh5%2FR%2BQk3m5gdrtx8I%2BWkww8LHSvQY6pgE8gzBYCqlSJhvS4KvUUWWBCOcbc%2ByZh6oF6lJgG9fvUnD7bOKpspcFLeTNU%2FFbbE7fQr1z8n0LIabx7LAm7R6ytzzAOXGkVPP2wTYZgAfjtWiEU8j8Qh9EJMZcnvSoA558ZX3%2BUopgMy5e2DC2pZHRxwCtuDTW9Nk%2F%2B7HbN9KZfQAaAxyMkMWW%2F78AMXb04tVBeqO%2BqUFf6hn7E3%2Bct%2FRP4wliFLju&X-Amz-Signature=367150f5dcca0eb3ef183c6ced87f39c1378cadcb2e227a8d5a2862201ca540c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOYXVUS%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDqzwcGOogLulUpZx8u8MTIWOQN0GlOag12zGCg7bCgGAiBF%2FM%2FQaoPgmYfzPzMh9sb%2F5A0Uf3FXVkHfHEYPq5iIwyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8zGeC9fa52XOutNKtwDnUjReDQst6G50Kbbk3uszofjlXYLn21G7MMe8G5zMwTp%2Fkap2G64%2BXTiKtqMNJVPkCrOoh6NZdVNXCxXRTP64ayb0L4k5VjuO7sbj3NHkpk00z0cEZOpkIwg5NNOAu%2BU75iGiMciVarqSYyrcS6OgXKfqKeS7szP7IN2w4kupMOtF4ngopxN2r94tH6MdN%2BhOLM00KWk765MgQve4vsmY9caunNC7HjAgzhqBkGmcaKks10AULsBXvUpGAB5iO4JjQVV3RxJZU0218c7tuoMcx5eI7LT8nt2mr5ko6WojnyGUe1XupkpxYemWb796qsKfYfe%2BIl%2BiW%2F0L7zJuEI4DD1grc90yhAWfUKjXXKdbXdLnBcA4rB08CDkxAr2JEwKFVsRYgm4Xs12mW2fT%2B1T5Qcol9iwtWQu79ufok7YxLAfHR3YpSfaSt7W6Qm4Ixl6ugYVYBd8PDLSfvpv%2BLF%2BspTAJfHIBs1YAo9hICyGkHKrv1KbkX3%2Bll4l1esdjuHLjFexYx4budRhmpTr27J3YAO9qcuK%2FugGixx%2FrrnplC7pmOCGgBWrbFpCPji8f7w0b1uh5D8r5Z%2B64AYp0Y0%2F9Y50hklk9%2BkElmf3qMh5%2FR%2BQk3m5gdrtx8I%2BWkww8LHSvQY6pgE8gzBYCqlSJhvS4KvUUWWBCOcbc%2ByZh6oF6lJgG9fvUnD7bOKpspcFLeTNU%2FFbbE7fQr1z8n0LIabx7LAm7R6ytzzAOXGkVPP2wTYZgAfjtWiEU8j8Qh9EJMZcnvSoA558ZX3%2BUopgMy5e2DC2pZHRxwCtuDTW9Nk%2F%2B7HbN9KZfQAaAxyMkMWW%2F78AMXb04tVBeqO%2BqUFf6hn7E3%2Bct%2FRP4wliFLju&X-Amz-Signature=b02406b724bc94db596c6fdda39712a95e40bb41b60ed2147e7151b4e2e18818&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOYXVUS%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDqzwcGOogLulUpZx8u8MTIWOQN0GlOag12zGCg7bCgGAiBF%2FM%2FQaoPgmYfzPzMh9sb%2F5A0Uf3FXVkHfHEYPq5iIwyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8zGeC9fa52XOutNKtwDnUjReDQst6G50Kbbk3uszofjlXYLn21G7MMe8G5zMwTp%2Fkap2G64%2BXTiKtqMNJVPkCrOoh6NZdVNXCxXRTP64ayb0L4k5VjuO7sbj3NHkpk00z0cEZOpkIwg5NNOAu%2BU75iGiMciVarqSYyrcS6OgXKfqKeS7szP7IN2w4kupMOtF4ngopxN2r94tH6MdN%2BhOLM00KWk765MgQve4vsmY9caunNC7HjAgzhqBkGmcaKks10AULsBXvUpGAB5iO4JjQVV3RxJZU0218c7tuoMcx5eI7LT8nt2mr5ko6WojnyGUe1XupkpxYemWb796qsKfYfe%2BIl%2BiW%2F0L7zJuEI4DD1grc90yhAWfUKjXXKdbXdLnBcA4rB08CDkxAr2JEwKFVsRYgm4Xs12mW2fT%2B1T5Qcol9iwtWQu79ufok7YxLAfHR3YpSfaSt7W6Qm4Ixl6ugYVYBd8PDLSfvpv%2BLF%2BspTAJfHIBs1YAo9hICyGkHKrv1KbkX3%2Bll4l1esdjuHLjFexYx4budRhmpTr27J3YAO9qcuK%2FugGixx%2FrrnplC7pmOCGgBWrbFpCPji8f7w0b1uh5D8r5Z%2B64AYp0Y0%2F9Y50hklk9%2BkElmf3qMh5%2FR%2BQk3m5gdrtx8I%2BWkww8LHSvQY6pgE8gzBYCqlSJhvS4KvUUWWBCOcbc%2ByZh6oF6lJgG9fvUnD7bOKpspcFLeTNU%2FFbbE7fQr1z8n0LIabx7LAm7R6ytzzAOXGkVPP2wTYZgAfjtWiEU8j8Qh9EJMZcnvSoA558ZX3%2BUopgMy5e2DC2pZHRxwCtuDTW9Nk%2F%2B7HbN9KZfQAaAxyMkMWW%2F78AMXb04tVBeqO%2BqUFf6hn7E3%2Bct%2FRP4wliFLju&X-Amz-Signature=5fc55d455d2b1c8c9a415c55045a2633d82130e233a70fc9cd00b40d0071bfca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOYXVUS%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDqzwcGOogLulUpZx8u8MTIWOQN0GlOag12zGCg7bCgGAiBF%2FM%2FQaoPgmYfzPzMh9sb%2F5A0Uf3FXVkHfHEYPq5iIwyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8zGeC9fa52XOutNKtwDnUjReDQst6G50Kbbk3uszofjlXYLn21G7MMe8G5zMwTp%2Fkap2G64%2BXTiKtqMNJVPkCrOoh6NZdVNXCxXRTP64ayb0L4k5VjuO7sbj3NHkpk00z0cEZOpkIwg5NNOAu%2BU75iGiMciVarqSYyrcS6OgXKfqKeS7szP7IN2w4kupMOtF4ngopxN2r94tH6MdN%2BhOLM00KWk765MgQve4vsmY9caunNC7HjAgzhqBkGmcaKks10AULsBXvUpGAB5iO4JjQVV3RxJZU0218c7tuoMcx5eI7LT8nt2mr5ko6WojnyGUe1XupkpxYemWb796qsKfYfe%2BIl%2BiW%2F0L7zJuEI4DD1grc90yhAWfUKjXXKdbXdLnBcA4rB08CDkxAr2JEwKFVsRYgm4Xs12mW2fT%2B1T5Qcol9iwtWQu79ufok7YxLAfHR3YpSfaSt7W6Qm4Ixl6ugYVYBd8PDLSfvpv%2BLF%2BspTAJfHIBs1YAo9hICyGkHKrv1KbkX3%2Bll4l1esdjuHLjFexYx4budRhmpTr27J3YAO9qcuK%2FugGixx%2FrrnplC7pmOCGgBWrbFpCPji8f7w0b1uh5D8r5Z%2B64AYp0Y0%2F9Y50hklk9%2BkElmf3qMh5%2FR%2BQk3m5gdrtx8I%2BWkww8LHSvQY6pgE8gzBYCqlSJhvS4KvUUWWBCOcbc%2ByZh6oF6lJgG9fvUnD7bOKpspcFLeTNU%2FFbbE7fQr1z8n0LIabx7LAm7R6ytzzAOXGkVPP2wTYZgAfjtWiEU8j8Qh9EJMZcnvSoA558ZX3%2BUopgMy5e2DC2pZHRxwCtuDTW9Nk%2F%2B7HbN9KZfQAaAxyMkMWW%2F78AMXb04tVBeqO%2BqUFf6hn7E3%2Bct%2FRP4wliFLju&X-Amz-Signature=182310b1f3d3433768dad3ff39998d61c8a2b4e57793cd20559b7c439d131bde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOYXVUS%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDqzwcGOogLulUpZx8u8MTIWOQN0GlOag12zGCg7bCgGAiBF%2FM%2FQaoPgmYfzPzMh9sb%2F5A0Uf3FXVkHfHEYPq5iIwyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8zGeC9fa52XOutNKtwDnUjReDQst6G50Kbbk3uszofjlXYLn21G7MMe8G5zMwTp%2Fkap2G64%2BXTiKtqMNJVPkCrOoh6NZdVNXCxXRTP64ayb0L4k5VjuO7sbj3NHkpk00z0cEZOpkIwg5NNOAu%2BU75iGiMciVarqSYyrcS6OgXKfqKeS7szP7IN2w4kupMOtF4ngopxN2r94tH6MdN%2BhOLM00KWk765MgQve4vsmY9caunNC7HjAgzhqBkGmcaKks10AULsBXvUpGAB5iO4JjQVV3RxJZU0218c7tuoMcx5eI7LT8nt2mr5ko6WojnyGUe1XupkpxYemWb796qsKfYfe%2BIl%2BiW%2F0L7zJuEI4DD1grc90yhAWfUKjXXKdbXdLnBcA4rB08CDkxAr2JEwKFVsRYgm4Xs12mW2fT%2B1T5Qcol9iwtWQu79ufok7YxLAfHR3YpSfaSt7W6Qm4Ixl6ugYVYBd8PDLSfvpv%2BLF%2BspTAJfHIBs1YAo9hICyGkHKrv1KbkX3%2Bll4l1esdjuHLjFexYx4budRhmpTr27J3YAO9qcuK%2FugGixx%2FrrnplC7pmOCGgBWrbFpCPji8f7w0b1uh5D8r5Z%2B64AYp0Y0%2F9Y50hklk9%2BkElmf3qMh5%2FR%2BQk3m5gdrtx8I%2BWkww8LHSvQY6pgE8gzBYCqlSJhvS4KvUUWWBCOcbc%2ByZh6oF6lJgG9fvUnD7bOKpspcFLeTNU%2FFbbE7fQr1z8n0LIabx7LAm7R6ytzzAOXGkVPP2wTYZgAfjtWiEU8j8Qh9EJMZcnvSoA558ZX3%2BUopgMy5e2DC2pZHRxwCtuDTW9Nk%2F%2B7HbN9KZfQAaAxyMkMWW%2F78AMXb04tVBeqO%2BqUFf6hn7E3%2Bct%2FRP4wliFLju&X-Amz-Signature=2f887e31461c593d46c2bbea08a8605ee8ae621dcff9a3ba5b48990f92daa2df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCOYXVUS%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDqzwcGOogLulUpZx8u8MTIWOQN0GlOag12zGCg7bCgGAiBF%2FM%2FQaoPgmYfzPzMh9sb%2F5A0Uf3FXVkHfHEYPq5iIwyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8zGeC9fa52XOutNKtwDnUjReDQst6G50Kbbk3uszofjlXYLn21G7MMe8G5zMwTp%2Fkap2G64%2BXTiKtqMNJVPkCrOoh6NZdVNXCxXRTP64ayb0L4k5VjuO7sbj3NHkpk00z0cEZOpkIwg5NNOAu%2BU75iGiMciVarqSYyrcS6OgXKfqKeS7szP7IN2w4kupMOtF4ngopxN2r94tH6MdN%2BhOLM00KWk765MgQve4vsmY9caunNC7HjAgzhqBkGmcaKks10AULsBXvUpGAB5iO4JjQVV3RxJZU0218c7tuoMcx5eI7LT8nt2mr5ko6WojnyGUe1XupkpxYemWb796qsKfYfe%2BIl%2BiW%2F0L7zJuEI4DD1grc90yhAWfUKjXXKdbXdLnBcA4rB08CDkxAr2JEwKFVsRYgm4Xs12mW2fT%2B1T5Qcol9iwtWQu79ufok7YxLAfHR3YpSfaSt7W6Qm4Ixl6ugYVYBd8PDLSfvpv%2BLF%2BspTAJfHIBs1YAo9hICyGkHKrv1KbkX3%2Bll4l1esdjuHLjFexYx4budRhmpTr27J3YAO9qcuK%2FugGixx%2FrrnplC7pmOCGgBWrbFpCPji8f7w0b1uh5D8r5Z%2B64AYp0Y0%2F9Y50hklk9%2BkElmf3qMh5%2FR%2BQk3m5gdrtx8I%2BWkww8LHSvQY6pgE8gzBYCqlSJhvS4KvUUWWBCOcbc%2ByZh6oF6lJgG9fvUnD7bOKpspcFLeTNU%2FFbbE7fQr1z8n0LIabx7LAm7R6ytzzAOXGkVPP2wTYZgAfjtWiEU8j8Qh9EJMZcnvSoA558ZX3%2BUopgMy5e2DC2pZHRxwCtuDTW9Nk%2F%2B7HbN9KZfQAaAxyMkMWW%2F78AMXb04tVBeqO%2BqUFf6hn7E3%2Bct%2FRP4wliFLju&X-Amz-Signature=15a6c8332e289168102f63a98e708148c7ad761a0b732f1d905c5bd82221d4bd&X-Amz-SignedHeaders=host&x-id=GetObject)
