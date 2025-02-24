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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LI2JWP5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPKhvfsXSJC8bpkAaewsMz%2BHOCh9gDaM27Ajrw3GxW9wIhAIZEQfkfDFgQxWJzGv1V5u%2Ffxe3wt63T%2BexTBdQaJPo%2BKv8DCCUQABoMNjM3NDIzMTgzODA1IgxLmwuQ4WCv7UP5Y50q3AMA%2Bn5gNBz25K8gSw%2BNW3NFRN%2FsIvSInILD2%2Bqyv3wggg%2BO%2FV6qCIRTkB%2B0pK1A2yeTOTR9oFUedz%2B8ydGEpL2VfqQAyLhRnHZI4D0oQAWgWrundLvvz1XaFfG1RDn5AmboSxDwZWmJgkoXyXWNrFpe3uFE9kmmy2bLLZ0cbiu7yFry3%2FTQnbcbZvFHVG0XHrRvUpDU7kSxQUX2wf42wPTvSVaA0AaDg3W9kuFrsbDjw8U3s8MB%2Fuv511pTPrVTy1JCGdjRm8A1u6DEHVHm55vlbq9kIawGf3gHRSAYWC2mjkZ6rwU6QFTDovQabpwTH%2FpyJ0H4lYsyPPxOETlR%2B8EctsEWN5Iuuf4wAd97nsqZc%2BUqDNTX12EnlvmHTsofyOzm%2BDnhYahR9zuQF9ExNq38JZC%2FrB2tRBfTLwKtmoqXjrH%2BKncLJb4dxpZIZzToqdXMXV147U5OKhpknnyjHyfHPF6fBOnt8ra32xAOt%2BXCiEMvf7rF8xmqtPjRX8K%2BO5C9lKp%2B%2FAF%2FZkSql%2FFSkEP0n%2Fk79TO%2FKmWYaWRvKxEdSqKmRrabJ%2BxLShjMt92NpRwUgA3yl2Vfpo%2F55Gwyob1nN%2BmAaHRaJrS132zvZRwegupKvbnK1VYLszo71TDw4e%2B9BjqkASNk7F9HVEZarEcjKVv4U4Z3jWKxuyg2Fl3h0eXxZ0e83ZhMPyHBSzI2zh5SDGe0%2FOQgw6XGvSU3AGUnykvzuhEhIn8lmootVl8BpYB22IWjRkEpD7Ve5skG%2BHlXsnekgwb%2FsZO0O7g1frfI6rOcfvdFlw4Kg6t7QoCJTuE92xCuHXqL1vdNgwQk50oqrMUdE36Zy3qOt3BoJGWZMk1sKD55hf6r&X-Amz-Signature=891b213c0cbac10936227be9efa4eea8d7d9daf0475b09f3b4f51547e2879ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LI2JWP5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPKhvfsXSJC8bpkAaewsMz%2BHOCh9gDaM27Ajrw3GxW9wIhAIZEQfkfDFgQxWJzGv1V5u%2Ffxe3wt63T%2BexTBdQaJPo%2BKv8DCCUQABoMNjM3NDIzMTgzODA1IgxLmwuQ4WCv7UP5Y50q3AMA%2Bn5gNBz25K8gSw%2BNW3NFRN%2FsIvSInILD2%2Bqyv3wggg%2BO%2FV6qCIRTkB%2B0pK1A2yeTOTR9oFUedz%2B8ydGEpL2VfqQAyLhRnHZI4D0oQAWgWrundLvvz1XaFfG1RDn5AmboSxDwZWmJgkoXyXWNrFpe3uFE9kmmy2bLLZ0cbiu7yFry3%2FTQnbcbZvFHVG0XHrRvUpDU7kSxQUX2wf42wPTvSVaA0AaDg3W9kuFrsbDjw8U3s8MB%2Fuv511pTPrVTy1JCGdjRm8A1u6DEHVHm55vlbq9kIawGf3gHRSAYWC2mjkZ6rwU6QFTDovQabpwTH%2FpyJ0H4lYsyPPxOETlR%2B8EctsEWN5Iuuf4wAd97nsqZc%2BUqDNTX12EnlvmHTsofyOzm%2BDnhYahR9zuQF9ExNq38JZC%2FrB2tRBfTLwKtmoqXjrH%2BKncLJb4dxpZIZzToqdXMXV147U5OKhpknnyjHyfHPF6fBOnt8ra32xAOt%2BXCiEMvf7rF8xmqtPjRX8K%2BO5C9lKp%2B%2FAF%2FZkSql%2FFSkEP0n%2Fk79TO%2FKmWYaWRvKxEdSqKmRrabJ%2BxLShjMt92NpRwUgA3yl2Vfpo%2F55Gwyob1nN%2BmAaHRaJrS132zvZRwegupKvbnK1VYLszo71TDw4e%2B9BjqkASNk7F9HVEZarEcjKVv4U4Z3jWKxuyg2Fl3h0eXxZ0e83ZhMPyHBSzI2zh5SDGe0%2FOQgw6XGvSU3AGUnykvzuhEhIn8lmootVl8BpYB22IWjRkEpD7Ve5skG%2BHlXsnekgwb%2FsZO0O7g1frfI6rOcfvdFlw4Kg6t7QoCJTuE92xCuHXqL1vdNgwQk50oqrMUdE36Zy3qOt3BoJGWZMk1sKD55hf6r&X-Amz-Signature=f90f5d99eb7fd9158c98eff774d3903787e12f84e8780950b33399e692013f57&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LI2JWP5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPKhvfsXSJC8bpkAaewsMz%2BHOCh9gDaM27Ajrw3GxW9wIhAIZEQfkfDFgQxWJzGv1V5u%2Ffxe3wt63T%2BexTBdQaJPo%2BKv8DCCUQABoMNjM3NDIzMTgzODA1IgxLmwuQ4WCv7UP5Y50q3AMA%2Bn5gNBz25K8gSw%2BNW3NFRN%2FsIvSInILD2%2Bqyv3wggg%2BO%2FV6qCIRTkB%2B0pK1A2yeTOTR9oFUedz%2B8ydGEpL2VfqQAyLhRnHZI4D0oQAWgWrundLvvz1XaFfG1RDn5AmboSxDwZWmJgkoXyXWNrFpe3uFE9kmmy2bLLZ0cbiu7yFry3%2FTQnbcbZvFHVG0XHrRvUpDU7kSxQUX2wf42wPTvSVaA0AaDg3W9kuFrsbDjw8U3s8MB%2Fuv511pTPrVTy1JCGdjRm8A1u6DEHVHm55vlbq9kIawGf3gHRSAYWC2mjkZ6rwU6QFTDovQabpwTH%2FpyJ0H4lYsyPPxOETlR%2B8EctsEWN5Iuuf4wAd97nsqZc%2BUqDNTX12EnlvmHTsofyOzm%2BDnhYahR9zuQF9ExNq38JZC%2FrB2tRBfTLwKtmoqXjrH%2BKncLJb4dxpZIZzToqdXMXV147U5OKhpknnyjHyfHPF6fBOnt8ra32xAOt%2BXCiEMvf7rF8xmqtPjRX8K%2BO5C9lKp%2B%2FAF%2FZkSql%2FFSkEP0n%2Fk79TO%2FKmWYaWRvKxEdSqKmRrabJ%2BxLShjMt92NpRwUgA3yl2Vfpo%2F55Gwyob1nN%2BmAaHRaJrS132zvZRwegupKvbnK1VYLszo71TDw4e%2B9BjqkASNk7F9HVEZarEcjKVv4U4Z3jWKxuyg2Fl3h0eXxZ0e83ZhMPyHBSzI2zh5SDGe0%2FOQgw6XGvSU3AGUnykvzuhEhIn8lmootVl8BpYB22IWjRkEpD7Ve5skG%2BHlXsnekgwb%2FsZO0O7g1frfI6rOcfvdFlw4Kg6t7QoCJTuE92xCuHXqL1vdNgwQk50oqrMUdE36Zy3qOt3BoJGWZMk1sKD55hf6r&X-Amz-Signature=6b86b44147ad6b167d8eaac19ad800be595380a321a85a404873a8baf3218304&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LI2JWP5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPKhvfsXSJC8bpkAaewsMz%2BHOCh9gDaM27Ajrw3GxW9wIhAIZEQfkfDFgQxWJzGv1V5u%2Ffxe3wt63T%2BexTBdQaJPo%2BKv8DCCUQABoMNjM3NDIzMTgzODA1IgxLmwuQ4WCv7UP5Y50q3AMA%2Bn5gNBz25K8gSw%2BNW3NFRN%2FsIvSInILD2%2Bqyv3wggg%2BO%2FV6qCIRTkB%2B0pK1A2yeTOTR9oFUedz%2B8ydGEpL2VfqQAyLhRnHZI4D0oQAWgWrundLvvz1XaFfG1RDn5AmboSxDwZWmJgkoXyXWNrFpe3uFE9kmmy2bLLZ0cbiu7yFry3%2FTQnbcbZvFHVG0XHrRvUpDU7kSxQUX2wf42wPTvSVaA0AaDg3W9kuFrsbDjw8U3s8MB%2Fuv511pTPrVTy1JCGdjRm8A1u6DEHVHm55vlbq9kIawGf3gHRSAYWC2mjkZ6rwU6QFTDovQabpwTH%2FpyJ0H4lYsyPPxOETlR%2B8EctsEWN5Iuuf4wAd97nsqZc%2BUqDNTX12EnlvmHTsofyOzm%2BDnhYahR9zuQF9ExNq38JZC%2FrB2tRBfTLwKtmoqXjrH%2BKncLJb4dxpZIZzToqdXMXV147U5OKhpknnyjHyfHPF6fBOnt8ra32xAOt%2BXCiEMvf7rF8xmqtPjRX8K%2BO5C9lKp%2B%2FAF%2FZkSql%2FFSkEP0n%2Fk79TO%2FKmWYaWRvKxEdSqKmRrabJ%2BxLShjMt92NpRwUgA3yl2Vfpo%2F55Gwyob1nN%2BmAaHRaJrS132zvZRwegupKvbnK1VYLszo71TDw4e%2B9BjqkASNk7F9HVEZarEcjKVv4U4Z3jWKxuyg2Fl3h0eXxZ0e83ZhMPyHBSzI2zh5SDGe0%2FOQgw6XGvSU3AGUnykvzuhEhIn8lmootVl8BpYB22IWjRkEpD7Ve5skG%2BHlXsnekgwb%2FsZO0O7g1frfI6rOcfvdFlw4Kg6t7QoCJTuE92xCuHXqL1vdNgwQk50oqrMUdE36Zy3qOt3BoJGWZMk1sKD55hf6r&X-Amz-Signature=302c48c90e31877c92040e9293bedf8d14b3da9499aaa9e41337e04b685022f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LI2JWP5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPKhvfsXSJC8bpkAaewsMz%2BHOCh9gDaM27Ajrw3GxW9wIhAIZEQfkfDFgQxWJzGv1V5u%2Ffxe3wt63T%2BexTBdQaJPo%2BKv8DCCUQABoMNjM3NDIzMTgzODA1IgxLmwuQ4WCv7UP5Y50q3AMA%2Bn5gNBz25K8gSw%2BNW3NFRN%2FsIvSInILD2%2Bqyv3wggg%2BO%2FV6qCIRTkB%2B0pK1A2yeTOTR9oFUedz%2B8ydGEpL2VfqQAyLhRnHZI4D0oQAWgWrundLvvz1XaFfG1RDn5AmboSxDwZWmJgkoXyXWNrFpe3uFE9kmmy2bLLZ0cbiu7yFry3%2FTQnbcbZvFHVG0XHrRvUpDU7kSxQUX2wf42wPTvSVaA0AaDg3W9kuFrsbDjw8U3s8MB%2Fuv511pTPrVTy1JCGdjRm8A1u6DEHVHm55vlbq9kIawGf3gHRSAYWC2mjkZ6rwU6QFTDovQabpwTH%2FpyJ0H4lYsyPPxOETlR%2B8EctsEWN5Iuuf4wAd97nsqZc%2BUqDNTX12EnlvmHTsofyOzm%2BDnhYahR9zuQF9ExNq38JZC%2FrB2tRBfTLwKtmoqXjrH%2BKncLJb4dxpZIZzToqdXMXV147U5OKhpknnyjHyfHPF6fBOnt8ra32xAOt%2BXCiEMvf7rF8xmqtPjRX8K%2BO5C9lKp%2B%2FAF%2FZkSql%2FFSkEP0n%2Fk79TO%2FKmWYaWRvKxEdSqKmRrabJ%2BxLShjMt92NpRwUgA3yl2Vfpo%2F55Gwyob1nN%2BmAaHRaJrS132zvZRwegupKvbnK1VYLszo71TDw4e%2B9BjqkASNk7F9HVEZarEcjKVv4U4Z3jWKxuyg2Fl3h0eXxZ0e83ZhMPyHBSzI2zh5SDGe0%2FOQgw6XGvSU3AGUnykvzuhEhIn8lmootVl8BpYB22IWjRkEpD7Ve5skG%2BHlXsnekgwb%2FsZO0O7g1frfI6rOcfvdFlw4Kg6t7QoCJTuE92xCuHXqL1vdNgwQk50oqrMUdE36Zy3qOt3BoJGWZMk1sKD55hf6r&X-Amz-Signature=6dde8962518e597d8e2fe2a607781f8d6053782b3ad30577740a370a25d2d430&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LI2JWP5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPKhvfsXSJC8bpkAaewsMz%2BHOCh9gDaM27Ajrw3GxW9wIhAIZEQfkfDFgQxWJzGv1V5u%2Ffxe3wt63T%2BexTBdQaJPo%2BKv8DCCUQABoMNjM3NDIzMTgzODA1IgxLmwuQ4WCv7UP5Y50q3AMA%2Bn5gNBz25K8gSw%2BNW3NFRN%2FsIvSInILD2%2Bqyv3wggg%2BO%2FV6qCIRTkB%2B0pK1A2yeTOTR9oFUedz%2B8ydGEpL2VfqQAyLhRnHZI4D0oQAWgWrundLvvz1XaFfG1RDn5AmboSxDwZWmJgkoXyXWNrFpe3uFE9kmmy2bLLZ0cbiu7yFry3%2FTQnbcbZvFHVG0XHrRvUpDU7kSxQUX2wf42wPTvSVaA0AaDg3W9kuFrsbDjw8U3s8MB%2Fuv511pTPrVTy1JCGdjRm8A1u6DEHVHm55vlbq9kIawGf3gHRSAYWC2mjkZ6rwU6QFTDovQabpwTH%2FpyJ0H4lYsyPPxOETlR%2B8EctsEWN5Iuuf4wAd97nsqZc%2BUqDNTX12EnlvmHTsofyOzm%2BDnhYahR9zuQF9ExNq38JZC%2FrB2tRBfTLwKtmoqXjrH%2BKncLJb4dxpZIZzToqdXMXV147U5OKhpknnyjHyfHPF6fBOnt8ra32xAOt%2BXCiEMvf7rF8xmqtPjRX8K%2BO5C9lKp%2B%2FAF%2FZkSql%2FFSkEP0n%2Fk79TO%2FKmWYaWRvKxEdSqKmRrabJ%2BxLShjMt92NpRwUgA3yl2Vfpo%2F55Gwyob1nN%2BmAaHRaJrS132zvZRwegupKvbnK1VYLszo71TDw4e%2B9BjqkASNk7F9HVEZarEcjKVv4U4Z3jWKxuyg2Fl3h0eXxZ0e83ZhMPyHBSzI2zh5SDGe0%2FOQgw6XGvSU3AGUnykvzuhEhIn8lmootVl8BpYB22IWjRkEpD7Ve5skG%2BHlXsnekgwb%2FsZO0O7g1frfI6rOcfvdFlw4Kg6t7QoCJTuE92xCuHXqL1vdNgwQk50oqrMUdE36Zy3qOt3BoJGWZMk1sKD55hf6r&X-Amz-Signature=045008fc670b085b6e6caaae7a6d1a18c6f736073a24bf707c53133a9a43c1b9&X-Amz-SignedHeaders=host&x-id=GetObject)
