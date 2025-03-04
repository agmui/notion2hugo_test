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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPHI5KF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz8%2B9ef8eapKJU%2FjJZyGLNfWqgasnhUf9lBNTvmzScQIhAJt3q5PjEhXWCcXg4xr2rwpSQbrkdbXqGKmLTtf6TWo7KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIx%2BMcVD5odLKnN4gq3AN%2FgCHqwcZvM3uiWSmVyzlMUcwFXyrIDAxcEytENIaV8vR7cmgJmd2MFJyDhp9xpQKinVOCs2T5vpXoN2CXI00k5QJ243txtvxuPNOeRL7lBK8GkSZSqs6VOrJwh5%2BsBK8HoDfzK7J5H7oFQG2Bc2lIMLHwn9cmOmjcMadJQCAR1qZJ6zJI%2Fsli3Wtu0n4PmJxss8UOzAcx89e0aVahX6%2BEa9%2BcsmwbdPEMqjop7hVI8Cq3w0JBiSbVOYBN2XgTx9nSH2LtHNUAky2xYYJ%2BcpChMvK2abGhmf4wLSZKDCTcmPpJ5wY%2BhFt8UsKe3wzit0HeyqPVT%2FcIpXE79Mnt7j6eLOb%2BWQwcSkJoaXKftzc3DscYCOIF9RQx5nt413y7WEtx1F9SQmB9P2l64PxGEGFhfTfpqqiukIaTDegsoNT5J2w9ryKz7DAKR%2BBBqe8O5WYNmGrzR1cevZAbrmXxKFtSe7BuL5wOb0AnwK%2B%2FvtPydIBD0Xj%2BTiA1Gp543kF4tV6ZJMvyX2KW9eU3EnstCZ2tl8Rr4IRJr7PHtnHh1aL0OVRgsq7LggwNda%2BAVQWqi7AsbuWpw0TxoG19seIDoLV0r5GAUOzRXXtKKX4hqw%2BFelivng8VS%2F4v4j%2BDvzC5hpm%2BBjqkAduDip9A1nKq%2FwirlTQy5jmKtOBW304YrwvtN4K7%2F%2FTzh4foFqemYANwuynwT4K3BNJ9lwDCK90ELaTjeU%2F3OxdGqflKOhQo9dkBoagxWk0DBCS0qb5I3nUwWMR89CmsV8apBPmP%2F6Rw%2BZidlMGglvlvKw66IrbetUtf9cem9uySW6blgS0doF2c4ihMsaPBhXN5TWulwqrNrwBRbEbbAaO%2BwHxK&X-Amz-Signature=77ac27975bedc7490768e8591878a4228d5bb63b70c4cba29d82860b41a681c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPHI5KF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz8%2B9ef8eapKJU%2FjJZyGLNfWqgasnhUf9lBNTvmzScQIhAJt3q5PjEhXWCcXg4xr2rwpSQbrkdbXqGKmLTtf6TWo7KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIx%2BMcVD5odLKnN4gq3AN%2FgCHqwcZvM3uiWSmVyzlMUcwFXyrIDAxcEytENIaV8vR7cmgJmd2MFJyDhp9xpQKinVOCs2T5vpXoN2CXI00k5QJ243txtvxuPNOeRL7lBK8GkSZSqs6VOrJwh5%2BsBK8HoDfzK7J5H7oFQG2Bc2lIMLHwn9cmOmjcMadJQCAR1qZJ6zJI%2Fsli3Wtu0n4PmJxss8UOzAcx89e0aVahX6%2BEa9%2BcsmwbdPEMqjop7hVI8Cq3w0JBiSbVOYBN2XgTx9nSH2LtHNUAky2xYYJ%2BcpChMvK2abGhmf4wLSZKDCTcmPpJ5wY%2BhFt8UsKe3wzit0HeyqPVT%2FcIpXE79Mnt7j6eLOb%2BWQwcSkJoaXKftzc3DscYCOIF9RQx5nt413y7WEtx1F9SQmB9P2l64PxGEGFhfTfpqqiukIaTDegsoNT5J2w9ryKz7DAKR%2BBBqe8O5WYNmGrzR1cevZAbrmXxKFtSe7BuL5wOb0AnwK%2B%2FvtPydIBD0Xj%2BTiA1Gp543kF4tV6ZJMvyX2KW9eU3EnstCZ2tl8Rr4IRJr7PHtnHh1aL0OVRgsq7LggwNda%2BAVQWqi7AsbuWpw0TxoG19seIDoLV0r5GAUOzRXXtKKX4hqw%2BFelivng8VS%2F4v4j%2BDvzC5hpm%2BBjqkAduDip9A1nKq%2FwirlTQy5jmKtOBW304YrwvtN4K7%2F%2FTzh4foFqemYANwuynwT4K3BNJ9lwDCK90ELaTjeU%2F3OxdGqflKOhQo9dkBoagxWk0DBCS0qb5I3nUwWMR89CmsV8apBPmP%2F6Rw%2BZidlMGglvlvKw66IrbetUtf9cem9uySW6blgS0doF2c4ihMsaPBhXN5TWulwqrNrwBRbEbbAaO%2BwHxK&X-Amz-Signature=ac2738b44b0e96d9cabe78fc64034f7218434b22874c06528b7cfd1a592c2010&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPHI5KF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz8%2B9ef8eapKJU%2FjJZyGLNfWqgasnhUf9lBNTvmzScQIhAJt3q5PjEhXWCcXg4xr2rwpSQbrkdbXqGKmLTtf6TWo7KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIx%2BMcVD5odLKnN4gq3AN%2FgCHqwcZvM3uiWSmVyzlMUcwFXyrIDAxcEytENIaV8vR7cmgJmd2MFJyDhp9xpQKinVOCs2T5vpXoN2CXI00k5QJ243txtvxuPNOeRL7lBK8GkSZSqs6VOrJwh5%2BsBK8HoDfzK7J5H7oFQG2Bc2lIMLHwn9cmOmjcMadJQCAR1qZJ6zJI%2Fsli3Wtu0n4PmJxss8UOzAcx89e0aVahX6%2BEa9%2BcsmwbdPEMqjop7hVI8Cq3w0JBiSbVOYBN2XgTx9nSH2LtHNUAky2xYYJ%2BcpChMvK2abGhmf4wLSZKDCTcmPpJ5wY%2BhFt8UsKe3wzit0HeyqPVT%2FcIpXE79Mnt7j6eLOb%2BWQwcSkJoaXKftzc3DscYCOIF9RQx5nt413y7WEtx1F9SQmB9P2l64PxGEGFhfTfpqqiukIaTDegsoNT5J2w9ryKz7DAKR%2BBBqe8O5WYNmGrzR1cevZAbrmXxKFtSe7BuL5wOb0AnwK%2B%2FvtPydIBD0Xj%2BTiA1Gp543kF4tV6ZJMvyX2KW9eU3EnstCZ2tl8Rr4IRJr7PHtnHh1aL0OVRgsq7LggwNda%2BAVQWqi7AsbuWpw0TxoG19seIDoLV0r5GAUOzRXXtKKX4hqw%2BFelivng8VS%2F4v4j%2BDvzC5hpm%2BBjqkAduDip9A1nKq%2FwirlTQy5jmKtOBW304YrwvtN4K7%2F%2FTzh4foFqemYANwuynwT4K3BNJ9lwDCK90ELaTjeU%2F3OxdGqflKOhQo9dkBoagxWk0DBCS0qb5I3nUwWMR89CmsV8apBPmP%2F6Rw%2BZidlMGglvlvKw66IrbetUtf9cem9uySW6blgS0doF2c4ihMsaPBhXN5TWulwqrNrwBRbEbbAaO%2BwHxK&X-Amz-Signature=20b2e0242350f9373053f7584c8429b0ed2dc39797bf39ab934ec7ac1c5608c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPHI5KF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz8%2B9ef8eapKJU%2FjJZyGLNfWqgasnhUf9lBNTvmzScQIhAJt3q5PjEhXWCcXg4xr2rwpSQbrkdbXqGKmLTtf6TWo7KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIx%2BMcVD5odLKnN4gq3AN%2FgCHqwcZvM3uiWSmVyzlMUcwFXyrIDAxcEytENIaV8vR7cmgJmd2MFJyDhp9xpQKinVOCs2T5vpXoN2CXI00k5QJ243txtvxuPNOeRL7lBK8GkSZSqs6VOrJwh5%2BsBK8HoDfzK7J5H7oFQG2Bc2lIMLHwn9cmOmjcMadJQCAR1qZJ6zJI%2Fsli3Wtu0n4PmJxss8UOzAcx89e0aVahX6%2BEa9%2BcsmwbdPEMqjop7hVI8Cq3w0JBiSbVOYBN2XgTx9nSH2LtHNUAky2xYYJ%2BcpChMvK2abGhmf4wLSZKDCTcmPpJ5wY%2BhFt8UsKe3wzit0HeyqPVT%2FcIpXE79Mnt7j6eLOb%2BWQwcSkJoaXKftzc3DscYCOIF9RQx5nt413y7WEtx1F9SQmB9P2l64PxGEGFhfTfpqqiukIaTDegsoNT5J2w9ryKz7DAKR%2BBBqe8O5WYNmGrzR1cevZAbrmXxKFtSe7BuL5wOb0AnwK%2B%2FvtPydIBD0Xj%2BTiA1Gp543kF4tV6ZJMvyX2KW9eU3EnstCZ2tl8Rr4IRJr7PHtnHh1aL0OVRgsq7LggwNda%2BAVQWqi7AsbuWpw0TxoG19seIDoLV0r5GAUOzRXXtKKX4hqw%2BFelivng8VS%2F4v4j%2BDvzC5hpm%2BBjqkAduDip9A1nKq%2FwirlTQy5jmKtOBW304YrwvtN4K7%2F%2FTzh4foFqemYANwuynwT4K3BNJ9lwDCK90ELaTjeU%2F3OxdGqflKOhQo9dkBoagxWk0DBCS0qb5I3nUwWMR89CmsV8apBPmP%2F6Rw%2BZidlMGglvlvKw66IrbetUtf9cem9uySW6blgS0doF2c4ihMsaPBhXN5TWulwqrNrwBRbEbbAaO%2BwHxK&X-Amz-Signature=c767b3fab51f606cc648eab8d5875de99d4bbb9c3a43c6a8a4b8563886401dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPHI5KF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz8%2B9ef8eapKJU%2FjJZyGLNfWqgasnhUf9lBNTvmzScQIhAJt3q5PjEhXWCcXg4xr2rwpSQbrkdbXqGKmLTtf6TWo7KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIx%2BMcVD5odLKnN4gq3AN%2FgCHqwcZvM3uiWSmVyzlMUcwFXyrIDAxcEytENIaV8vR7cmgJmd2MFJyDhp9xpQKinVOCs2T5vpXoN2CXI00k5QJ243txtvxuPNOeRL7lBK8GkSZSqs6VOrJwh5%2BsBK8HoDfzK7J5H7oFQG2Bc2lIMLHwn9cmOmjcMadJQCAR1qZJ6zJI%2Fsli3Wtu0n4PmJxss8UOzAcx89e0aVahX6%2BEa9%2BcsmwbdPEMqjop7hVI8Cq3w0JBiSbVOYBN2XgTx9nSH2LtHNUAky2xYYJ%2BcpChMvK2abGhmf4wLSZKDCTcmPpJ5wY%2BhFt8UsKe3wzit0HeyqPVT%2FcIpXE79Mnt7j6eLOb%2BWQwcSkJoaXKftzc3DscYCOIF9RQx5nt413y7WEtx1F9SQmB9P2l64PxGEGFhfTfpqqiukIaTDegsoNT5J2w9ryKz7DAKR%2BBBqe8O5WYNmGrzR1cevZAbrmXxKFtSe7BuL5wOb0AnwK%2B%2FvtPydIBD0Xj%2BTiA1Gp543kF4tV6ZJMvyX2KW9eU3EnstCZ2tl8Rr4IRJr7PHtnHh1aL0OVRgsq7LggwNda%2BAVQWqi7AsbuWpw0TxoG19seIDoLV0r5GAUOzRXXtKKX4hqw%2BFelivng8VS%2F4v4j%2BDvzC5hpm%2BBjqkAduDip9A1nKq%2FwirlTQy5jmKtOBW304YrwvtN4K7%2F%2FTzh4foFqemYANwuynwT4K3BNJ9lwDCK90ELaTjeU%2F3OxdGqflKOhQo9dkBoagxWk0DBCS0qb5I3nUwWMR89CmsV8apBPmP%2F6Rw%2BZidlMGglvlvKw66IrbetUtf9cem9uySW6blgS0doF2c4ihMsaPBhXN5TWulwqrNrwBRbEbbAaO%2BwHxK&X-Amz-Signature=11b547751a0619b4cc24ee451f56c5ca79cf9c59a508332c39ac49c595d1cd67&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPHI5KF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz8%2B9ef8eapKJU%2FjJZyGLNfWqgasnhUf9lBNTvmzScQIhAJt3q5PjEhXWCcXg4xr2rwpSQbrkdbXqGKmLTtf6TWo7KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIx%2BMcVD5odLKnN4gq3AN%2FgCHqwcZvM3uiWSmVyzlMUcwFXyrIDAxcEytENIaV8vR7cmgJmd2MFJyDhp9xpQKinVOCs2T5vpXoN2CXI00k5QJ243txtvxuPNOeRL7lBK8GkSZSqs6VOrJwh5%2BsBK8HoDfzK7J5H7oFQG2Bc2lIMLHwn9cmOmjcMadJQCAR1qZJ6zJI%2Fsli3Wtu0n4PmJxss8UOzAcx89e0aVahX6%2BEa9%2BcsmwbdPEMqjop7hVI8Cq3w0JBiSbVOYBN2XgTx9nSH2LtHNUAky2xYYJ%2BcpChMvK2abGhmf4wLSZKDCTcmPpJ5wY%2BhFt8UsKe3wzit0HeyqPVT%2FcIpXE79Mnt7j6eLOb%2BWQwcSkJoaXKftzc3DscYCOIF9RQx5nt413y7WEtx1F9SQmB9P2l64PxGEGFhfTfpqqiukIaTDegsoNT5J2w9ryKz7DAKR%2BBBqe8O5WYNmGrzR1cevZAbrmXxKFtSe7BuL5wOb0AnwK%2B%2FvtPydIBD0Xj%2BTiA1Gp543kF4tV6ZJMvyX2KW9eU3EnstCZ2tl8Rr4IRJr7PHtnHh1aL0OVRgsq7LggwNda%2BAVQWqi7AsbuWpw0TxoG19seIDoLV0r5GAUOzRXXtKKX4hqw%2BFelivng8VS%2F4v4j%2BDvzC5hpm%2BBjqkAduDip9A1nKq%2FwirlTQy5jmKtOBW304YrwvtN4K7%2F%2FTzh4foFqemYANwuynwT4K3BNJ9lwDCK90ELaTjeU%2F3OxdGqflKOhQo9dkBoagxWk0DBCS0qb5I3nUwWMR89CmsV8apBPmP%2F6Rw%2BZidlMGglvlvKw66IrbetUtf9cem9uySW6blgS0doF2c4ihMsaPBhXN5TWulwqrNrwBRbEbbAaO%2BwHxK&X-Amz-Signature=456d57bb98eba7c9dc86b126e698881d3a12bb7a3bf36ee333a34209860a228d&X-Amz-SignedHeaders=host&x-id=GetObject)
