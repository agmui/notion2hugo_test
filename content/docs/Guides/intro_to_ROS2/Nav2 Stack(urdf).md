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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAHB63Z%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGK%2FSeTCj8x5hzoGGdekYHWzL2F49XJ2o9wVQn0Dm5dAiBin42pdDRwWt3U0LaHWf3xP0BHZyLtER4%2Brx3ekEpCUiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUmkKU9q%2Fhk7PkNhpKtwDCVYfX8zxSuCSmwydLjuceTrDh6OFkO91EDzCgq%2FQnDcRy4RLiMFjEpv%2FY5dHbo7s7D%2FNHWTx%2BW67knv8%2F59k5qf0KFuE0R6mQedRi9U7IbvSpcArC3mjGNZvj3Z8PidF%2FtBkFtPuTpZAVz7n2cmemItPlFnut2ANERCfJMcPNfNzGhqXHviDSAv5qh1f%2BTIwtYqYl456ttQeIwKr5RISW77XpjS%2F2QXyvnShDysvQr7Tkbi2RHrxyWa9%2FDtHviz3SMjb6WjTiGn6lKEUxSxxBHo5HcSdnK4fNdd4dIDwU8T%2FhkKuKtZNvs%2FJGwynJUAX0%2FbKHabcPJnU2EpY1FEWhT2Fch8kqO00NYpBNUo2h9HF9c3wtSUc1OczWlanXKpeko%2FbbECg3Nl%2F2mhqs6oXFblqoIHXHV67SIXoWizYhDtujKi7reQ0NdRLhLpFrwmmUs1rwW7o8zXGAXg%2FGrxbCRupsIUVPvTMkUgKiDzFLQyC5yU7kN8NrosiZFeNjD0%2FcpG8Er97JUdnOJBhf%2B4O%2FlhXwY5f%2B5rCa3MSaFjAi8C%2BWFdI4O7jR%2BNus%2FJPdTZ6dqU6dd1y7H2y6MscGluWAZeKow7h1EB4mt%2BxpUemvpaI1ALDVpraETGui1gwwJXxwwY6pgHjhAtHEBewf5zh0F5EoCACH9FVwXY8jpfCpMzkaqp6Hqj9No%2FC9wKR6kDtj3X81wTV6cs5IXqXQ1qGe2Lv3LzYcilcNF8Uk5b6Db2gMN851CIc052z78M6mFfZXK9q1CXoGgHlJhen4bExQe1OC%2Be%2BsJP1fPy0UTJ0pYcDkiINOcdtsW7rdMa7i%2Bm6Zsi%2Bsf5ciWFSmIOuqu1pix0m8I%2FZ2UOtrRsj&X-Amz-Signature=70df13e9a287f2d91e2832241fe24531223a4e85f778d2099cbffe9ee100873d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAHB63Z%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGK%2FSeTCj8x5hzoGGdekYHWzL2F49XJ2o9wVQn0Dm5dAiBin42pdDRwWt3U0LaHWf3xP0BHZyLtER4%2Brx3ekEpCUiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUmkKU9q%2Fhk7PkNhpKtwDCVYfX8zxSuCSmwydLjuceTrDh6OFkO91EDzCgq%2FQnDcRy4RLiMFjEpv%2FY5dHbo7s7D%2FNHWTx%2BW67knv8%2F59k5qf0KFuE0R6mQedRi9U7IbvSpcArC3mjGNZvj3Z8PidF%2FtBkFtPuTpZAVz7n2cmemItPlFnut2ANERCfJMcPNfNzGhqXHviDSAv5qh1f%2BTIwtYqYl456ttQeIwKr5RISW77XpjS%2F2QXyvnShDysvQr7Tkbi2RHrxyWa9%2FDtHviz3SMjb6WjTiGn6lKEUxSxxBHo5HcSdnK4fNdd4dIDwU8T%2FhkKuKtZNvs%2FJGwynJUAX0%2FbKHabcPJnU2EpY1FEWhT2Fch8kqO00NYpBNUo2h9HF9c3wtSUc1OczWlanXKpeko%2FbbECg3Nl%2F2mhqs6oXFblqoIHXHV67SIXoWizYhDtujKi7reQ0NdRLhLpFrwmmUs1rwW7o8zXGAXg%2FGrxbCRupsIUVPvTMkUgKiDzFLQyC5yU7kN8NrosiZFeNjD0%2FcpG8Er97JUdnOJBhf%2B4O%2FlhXwY5f%2B5rCa3MSaFjAi8C%2BWFdI4O7jR%2BNus%2FJPdTZ6dqU6dd1y7H2y6MscGluWAZeKow7h1EB4mt%2BxpUemvpaI1ALDVpraETGui1gwwJXxwwY6pgHjhAtHEBewf5zh0F5EoCACH9FVwXY8jpfCpMzkaqp6Hqj9No%2FC9wKR6kDtj3X81wTV6cs5IXqXQ1qGe2Lv3LzYcilcNF8Uk5b6Db2gMN851CIc052z78M6mFfZXK9q1CXoGgHlJhen4bExQe1OC%2Be%2BsJP1fPy0UTJ0pYcDkiINOcdtsW7rdMa7i%2Bm6Zsi%2Bsf5ciWFSmIOuqu1pix0m8I%2FZ2UOtrRsj&X-Amz-Signature=49e58f1cc0705c65a8a988c0f79956f3cec02c8c5f1c085fa006196894c18099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAHB63Z%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGK%2FSeTCj8x5hzoGGdekYHWzL2F49XJ2o9wVQn0Dm5dAiBin42pdDRwWt3U0LaHWf3xP0BHZyLtER4%2Brx3ekEpCUiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUmkKU9q%2Fhk7PkNhpKtwDCVYfX8zxSuCSmwydLjuceTrDh6OFkO91EDzCgq%2FQnDcRy4RLiMFjEpv%2FY5dHbo7s7D%2FNHWTx%2BW67knv8%2F59k5qf0KFuE0R6mQedRi9U7IbvSpcArC3mjGNZvj3Z8PidF%2FtBkFtPuTpZAVz7n2cmemItPlFnut2ANERCfJMcPNfNzGhqXHviDSAv5qh1f%2BTIwtYqYl456ttQeIwKr5RISW77XpjS%2F2QXyvnShDysvQr7Tkbi2RHrxyWa9%2FDtHviz3SMjb6WjTiGn6lKEUxSxxBHo5HcSdnK4fNdd4dIDwU8T%2FhkKuKtZNvs%2FJGwynJUAX0%2FbKHabcPJnU2EpY1FEWhT2Fch8kqO00NYpBNUo2h9HF9c3wtSUc1OczWlanXKpeko%2FbbECg3Nl%2F2mhqs6oXFblqoIHXHV67SIXoWizYhDtujKi7reQ0NdRLhLpFrwmmUs1rwW7o8zXGAXg%2FGrxbCRupsIUVPvTMkUgKiDzFLQyC5yU7kN8NrosiZFeNjD0%2FcpG8Er97JUdnOJBhf%2B4O%2FlhXwY5f%2B5rCa3MSaFjAi8C%2BWFdI4O7jR%2BNus%2FJPdTZ6dqU6dd1y7H2y6MscGluWAZeKow7h1EB4mt%2BxpUemvpaI1ALDVpraETGui1gwwJXxwwY6pgHjhAtHEBewf5zh0F5EoCACH9FVwXY8jpfCpMzkaqp6Hqj9No%2FC9wKR6kDtj3X81wTV6cs5IXqXQ1qGe2Lv3LzYcilcNF8Uk5b6Db2gMN851CIc052z78M6mFfZXK9q1CXoGgHlJhen4bExQe1OC%2Be%2BsJP1fPy0UTJ0pYcDkiINOcdtsW7rdMa7i%2Bm6Zsi%2Bsf5ciWFSmIOuqu1pix0m8I%2FZ2UOtrRsj&X-Amz-Signature=86947814e4e29e3e9d12de802b88624be1f7e4184d3240ce6fb8a78efdaa0575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAHB63Z%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGK%2FSeTCj8x5hzoGGdekYHWzL2F49XJ2o9wVQn0Dm5dAiBin42pdDRwWt3U0LaHWf3xP0BHZyLtER4%2Brx3ekEpCUiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUmkKU9q%2Fhk7PkNhpKtwDCVYfX8zxSuCSmwydLjuceTrDh6OFkO91EDzCgq%2FQnDcRy4RLiMFjEpv%2FY5dHbo7s7D%2FNHWTx%2BW67knv8%2F59k5qf0KFuE0R6mQedRi9U7IbvSpcArC3mjGNZvj3Z8PidF%2FtBkFtPuTpZAVz7n2cmemItPlFnut2ANERCfJMcPNfNzGhqXHviDSAv5qh1f%2BTIwtYqYl456ttQeIwKr5RISW77XpjS%2F2QXyvnShDysvQr7Tkbi2RHrxyWa9%2FDtHviz3SMjb6WjTiGn6lKEUxSxxBHo5HcSdnK4fNdd4dIDwU8T%2FhkKuKtZNvs%2FJGwynJUAX0%2FbKHabcPJnU2EpY1FEWhT2Fch8kqO00NYpBNUo2h9HF9c3wtSUc1OczWlanXKpeko%2FbbECg3Nl%2F2mhqs6oXFblqoIHXHV67SIXoWizYhDtujKi7reQ0NdRLhLpFrwmmUs1rwW7o8zXGAXg%2FGrxbCRupsIUVPvTMkUgKiDzFLQyC5yU7kN8NrosiZFeNjD0%2FcpG8Er97JUdnOJBhf%2B4O%2FlhXwY5f%2B5rCa3MSaFjAi8C%2BWFdI4O7jR%2BNus%2FJPdTZ6dqU6dd1y7H2y6MscGluWAZeKow7h1EB4mt%2BxpUemvpaI1ALDVpraETGui1gwwJXxwwY6pgHjhAtHEBewf5zh0F5EoCACH9FVwXY8jpfCpMzkaqp6Hqj9No%2FC9wKR6kDtj3X81wTV6cs5IXqXQ1qGe2Lv3LzYcilcNF8Uk5b6Db2gMN851CIc052z78M6mFfZXK9q1CXoGgHlJhen4bExQe1OC%2Be%2BsJP1fPy0UTJ0pYcDkiINOcdtsW7rdMa7i%2Bm6Zsi%2Bsf5ciWFSmIOuqu1pix0m8I%2FZ2UOtrRsj&X-Amz-Signature=e0bf5a4634baa9401dbdc443d969966170fab93bb59aad48f49bd54553fd173f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAHB63Z%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGK%2FSeTCj8x5hzoGGdekYHWzL2F49XJ2o9wVQn0Dm5dAiBin42pdDRwWt3U0LaHWf3xP0BHZyLtER4%2Brx3ekEpCUiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUmkKU9q%2Fhk7PkNhpKtwDCVYfX8zxSuCSmwydLjuceTrDh6OFkO91EDzCgq%2FQnDcRy4RLiMFjEpv%2FY5dHbo7s7D%2FNHWTx%2BW67knv8%2F59k5qf0KFuE0R6mQedRi9U7IbvSpcArC3mjGNZvj3Z8PidF%2FtBkFtPuTpZAVz7n2cmemItPlFnut2ANERCfJMcPNfNzGhqXHviDSAv5qh1f%2BTIwtYqYl456ttQeIwKr5RISW77XpjS%2F2QXyvnShDysvQr7Tkbi2RHrxyWa9%2FDtHviz3SMjb6WjTiGn6lKEUxSxxBHo5HcSdnK4fNdd4dIDwU8T%2FhkKuKtZNvs%2FJGwynJUAX0%2FbKHabcPJnU2EpY1FEWhT2Fch8kqO00NYpBNUo2h9HF9c3wtSUc1OczWlanXKpeko%2FbbECg3Nl%2F2mhqs6oXFblqoIHXHV67SIXoWizYhDtujKi7reQ0NdRLhLpFrwmmUs1rwW7o8zXGAXg%2FGrxbCRupsIUVPvTMkUgKiDzFLQyC5yU7kN8NrosiZFeNjD0%2FcpG8Er97JUdnOJBhf%2B4O%2FlhXwY5f%2B5rCa3MSaFjAi8C%2BWFdI4O7jR%2BNus%2FJPdTZ6dqU6dd1y7H2y6MscGluWAZeKow7h1EB4mt%2BxpUemvpaI1ALDVpraETGui1gwwJXxwwY6pgHjhAtHEBewf5zh0F5EoCACH9FVwXY8jpfCpMzkaqp6Hqj9No%2FC9wKR6kDtj3X81wTV6cs5IXqXQ1qGe2Lv3LzYcilcNF8Uk5b6Db2gMN851CIc052z78M6mFfZXK9q1CXoGgHlJhen4bExQe1OC%2Be%2BsJP1fPy0UTJ0pYcDkiINOcdtsW7rdMa7i%2Bm6Zsi%2Bsf5ciWFSmIOuqu1pix0m8I%2FZ2UOtrRsj&X-Amz-Signature=0be4f60f1515e06194f2e7eb32ed63251f37991b1b4c57b575edfc33170608ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAHB63Z%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGK%2FSeTCj8x5hzoGGdekYHWzL2F49XJ2o9wVQn0Dm5dAiBin42pdDRwWt3U0LaHWf3xP0BHZyLtER4%2Brx3ekEpCUiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUmkKU9q%2Fhk7PkNhpKtwDCVYfX8zxSuCSmwydLjuceTrDh6OFkO91EDzCgq%2FQnDcRy4RLiMFjEpv%2FY5dHbo7s7D%2FNHWTx%2BW67knv8%2F59k5qf0KFuE0R6mQedRi9U7IbvSpcArC3mjGNZvj3Z8PidF%2FtBkFtPuTpZAVz7n2cmemItPlFnut2ANERCfJMcPNfNzGhqXHviDSAv5qh1f%2BTIwtYqYl456ttQeIwKr5RISW77XpjS%2F2QXyvnShDysvQr7Tkbi2RHrxyWa9%2FDtHviz3SMjb6WjTiGn6lKEUxSxxBHo5HcSdnK4fNdd4dIDwU8T%2FhkKuKtZNvs%2FJGwynJUAX0%2FbKHabcPJnU2EpY1FEWhT2Fch8kqO00NYpBNUo2h9HF9c3wtSUc1OczWlanXKpeko%2FbbECg3Nl%2F2mhqs6oXFblqoIHXHV67SIXoWizYhDtujKi7reQ0NdRLhLpFrwmmUs1rwW7o8zXGAXg%2FGrxbCRupsIUVPvTMkUgKiDzFLQyC5yU7kN8NrosiZFeNjD0%2FcpG8Er97JUdnOJBhf%2B4O%2FlhXwY5f%2B5rCa3MSaFjAi8C%2BWFdI4O7jR%2BNus%2FJPdTZ6dqU6dd1y7H2y6MscGluWAZeKow7h1EB4mt%2BxpUemvpaI1ALDVpraETGui1gwwJXxwwY6pgHjhAtHEBewf5zh0F5EoCACH9FVwXY8jpfCpMzkaqp6Hqj9No%2FC9wKR6kDtj3X81wTV6cs5IXqXQ1qGe2Lv3LzYcilcNF8Uk5b6Db2gMN851CIc052z78M6mFfZXK9q1CXoGgHlJhen4bExQe1OC%2Be%2BsJP1fPy0UTJ0pYcDkiINOcdtsW7rdMa7i%2Bm6Zsi%2Bsf5ciWFSmIOuqu1pix0m8I%2FZ2UOtrRsj&X-Amz-Signature=adb048f72bdf0d42e042201c4d6d919089120bda570f002b2d0e893b822424a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
