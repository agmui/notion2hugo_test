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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWQLNYN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICLtILatgBOc4e5rEzsbQGU4l7R0pKEWFHGbfQ9SoVvOAiEA%2Bo6kKFrljS7y2p6e%2Bt7UT10EGi%2Fg93zKj0oLmvvanLYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNQJLS18POGk1w0ZOCrcA3AWgj9wABUwkjm6S4ZDaUEY7wNgxPq7aoliz8K1OQW8tklvrG%2FkpVz6m65yXG4D7FWC6PUjyUrwyyu0EegiYqsD6Vrvs%2FYKuBh4JG%2Fe62OsHpMI9CeIM13TNzIXxuuDKDCPvyaIBTDoZY0wJ3ZCt6Oh3RJPWVByTg3QdJl9xPxxD3ks4njoxvVQqkDZ3i8VvuZy4mLMvJo2412v%2FLRZb6l5w2eMVi8pdNR73xfbnbdGER%2BPVykClNetqucA1iovBvPyKBn8dyAr8Se0RNunCKb5G094HW0qRtRd0yzbvt61yRK48DAqT%2FT2D%2BO4BxO0LzjjaSU4Cgeq4yCSSElmE%2B%2BoUjPxVZy9LmEVHIM9zwGFvSm8XZtgrUENAb0Vnw41DRXsHeIfAKCw7e8Wl08%2FMPtgXfk5wIoSzju%2F6PYSVj%2B4ivcNxrg4eVitAGgj1C%2Fm4rBBOZMM6tECpefQJc4zUhlJohByxdDfeP%2F6FNQbjjVBcsnFmBxvvz%2FwO7wUeE4wlevqF4p3asDHOZUPVa7ajTuQMQiR0EgA45QioAjatxit%2FBrY7cvNO6F2JGdGfskkQRS66mpz1LJRppgCQ5YY9E3Qqe0OOY1h5KyPPEyV1hbArlxrvjCPvrV6Le%2BDMNyxvL0GOqUBk%2Bq3oi9drqmv0WY4CT9ux%2F3sVxNdHOofVaq4hOE2LcvY8G9i4QjpeQVDQRD2AxzANq111Op7p8nhu84RQj6%2BQqoiUcdYiZutzYLlNqktOWHSoOubfUpEgEL68I8co4ZqTLPmjPhDlj0rSZ2%2BxOkZw7C15uWHZvDyLL5g6VCk%2B%2BWd86ryep0bwyndVovEr0UQXVZKKXBqKji5m2oOpTlhSDPQs9oO&X-Amz-Signature=7ec5bdd8df6a311ab82d40abbe93a873aa84bd3d5365c5b082b4ba3cf643500b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWQLNYN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICLtILatgBOc4e5rEzsbQGU4l7R0pKEWFHGbfQ9SoVvOAiEA%2Bo6kKFrljS7y2p6e%2Bt7UT10EGi%2Fg93zKj0oLmvvanLYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNQJLS18POGk1w0ZOCrcA3AWgj9wABUwkjm6S4ZDaUEY7wNgxPq7aoliz8K1OQW8tklvrG%2FkpVz6m65yXG4D7FWC6PUjyUrwyyu0EegiYqsD6Vrvs%2FYKuBh4JG%2Fe62OsHpMI9CeIM13TNzIXxuuDKDCPvyaIBTDoZY0wJ3ZCt6Oh3RJPWVByTg3QdJl9xPxxD3ks4njoxvVQqkDZ3i8VvuZy4mLMvJo2412v%2FLRZb6l5w2eMVi8pdNR73xfbnbdGER%2BPVykClNetqucA1iovBvPyKBn8dyAr8Se0RNunCKb5G094HW0qRtRd0yzbvt61yRK48DAqT%2FT2D%2BO4BxO0LzjjaSU4Cgeq4yCSSElmE%2B%2BoUjPxVZy9LmEVHIM9zwGFvSm8XZtgrUENAb0Vnw41DRXsHeIfAKCw7e8Wl08%2FMPtgXfk5wIoSzju%2F6PYSVj%2B4ivcNxrg4eVitAGgj1C%2Fm4rBBOZMM6tECpefQJc4zUhlJohByxdDfeP%2F6FNQbjjVBcsnFmBxvvz%2FwO7wUeE4wlevqF4p3asDHOZUPVa7ajTuQMQiR0EgA45QioAjatxit%2FBrY7cvNO6F2JGdGfskkQRS66mpz1LJRppgCQ5YY9E3Qqe0OOY1h5KyPPEyV1hbArlxrvjCPvrV6Le%2BDMNyxvL0GOqUBk%2Bq3oi9drqmv0WY4CT9ux%2F3sVxNdHOofVaq4hOE2LcvY8G9i4QjpeQVDQRD2AxzANq111Op7p8nhu84RQj6%2BQqoiUcdYiZutzYLlNqktOWHSoOubfUpEgEL68I8co4ZqTLPmjPhDlj0rSZ2%2BxOkZw7C15uWHZvDyLL5g6VCk%2B%2BWd86ryep0bwyndVovEr0UQXVZKKXBqKji5m2oOpTlhSDPQs9oO&X-Amz-Signature=2465e0aecf3161a742ed8e123df7c4c235a17ca310c92c3b7c3c059935ad5d27&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWQLNYN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICLtILatgBOc4e5rEzsbQGU4l7R0pKEWFHGbfQ9SoVvOAiEA%2Bo6kKFrljS7y2p6e%2Bt7UT10EGi%2Fg93zKj0oLmvvanLYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNQJLS18POGk1w0ZOCrcA3AWgj9wABUwkjm6S4ZDaUEY7wNgxPq7aoliz8K1OQW8tklvrG%2FkpVz6m65yXG4D7FWC6PUjyUrwyyu0EegiYqsD6Vrvs%2FYKuBh4JG%2Fe62OsHpMI9CeIM13TNzIXxuuDKDCPvyaIBTDoZY0wJ3ZCt6Oh3RJPWVByTg3QdJl9xPxxD3ks4njoxvVQqkDZ3i8VvuZy4mLMvJo2412v%2FLRZb6l5w2eMVi8pdNR73xfbnbdGER%2BPVykClNetqucA1iovBvPyKBn8dyAr8Se0RNunCKb5G094HW0qRtRd0yzbvt61yRK48DAqT%2FT2D%2BO4BxO0LzjjaSU4Cgeq4yCSSElmE%2B%2BoUjPxVZy9LmEVHIM9zwGFvSm8XZtgrUENAb0Vnw41DRXsHeIfAKCw7e8Wl08%2FMPtgXfk5wIoSzju%2F6PYSVj%2B4ivcNxrg4eVitAGgj1C%2Fm4rBBOZMM6tECpefQJc4zUhlJohByxdDfeP%2F6FNQbjjVBcsnFmBxvvz%2FwO7wUeE4wlevqF4p3asDHOZUPVa7ajTuQMQiR0EgA45QioAjatxit%2FBrY7cvNO6F2JGdGfskkQRS66mpz1LJRppgCQ5YY9E3Qqe0OOY1h5KyPPEyV1hbArlxrvjCPvrV6Le%2BDMNyxvL0GOqUBk%2Bq3oi9drqmv0WY4CT9ux%2F3sVxNdHOofVaq4hOE2LcvY8G9i4QjpeQVDQRD2AxzANq111Op7p8nhu84RQj6%2BQqoiUcdYiZutzYLlNqktOWHSoOubfUpEgEL68I8co4ZqTLPmjPhDlj0rSZ2%2BxOkZw7C15uWHZvDyLL5g6VCk%2B%2BWd86ryep0bwyndVovEr0UQXVZKKXBqKji5m2oOpTlhSDPQs9oO&X-Amz-Signature=d3538ae5594659542a1624d80c1a8f8d710aa238a5353b23f2dbe51502603d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWQLNYN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICLtILatgBOc4e5rEzsbQGU4l7R0pKEWFHGbfQ9SoVvOAiEA%2Bo6kKFrljS7y2p6e%2Bt7UT10EGi%2Fg93zKj0oLmvvanLYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNQJLS18POGk1w0ZOCrcA3AWgj9wABUwkjm6S4ZDaUEY7wNgxPq7aoliz8K1OQW8tklvrG%2FkpVz6m65yXG4D7FWC6PUjyUrwyyu0EegiYqsD6Vrvs%2FYKuBh4JG%2Fe62OsHpMI9CeIM13TNzIXxuuDKDCPvyaIBTDoZY0wJ3ZCt6Oh3RJPWVByTg3QdJl9xPxxD3ks4njoxvVQqkDZ3i8VvuZy4mLMvJo2412v%2FLRZb6l5w2eMVi8pdNR73xfbnbdGER%2BPVykClNetqucA1iovBvPyKBn8dyAr8Se0RNunCKb5G094HW0qRtRd0yzbvt61yRK48DAqT%2FT2D%2BO4BxO0LzjjaSU4Cgeq4yCSSElmE%2B%2BoUjPxVZy9LmEVHIM9zwGFvSm8XZtgrUENAb0Vnw41DRXsHeIfAKCw7e8Wl08%2FMPtgXfk5wIoSzju%2F6PYSVj%2B4ivcNxrg4eVitAGgj1C%2Fm4rBBOZMM6tECpefQJc4zUhlJohByxdDfeP%2F6FNQbjjVBcsnFmBxvvz%2FwO7wUeE4wlevqF4p3asDHOZUPVa7ajTuQMQiR0EgA45QioAjatxit%2FBrY7cvNO6F2JGdGfskkQRS66mpz1LJRppgCQ5YY9E3Qqe0OOY1h5KyPPEyV1hbArlxrvjCPvrV6Le%2BDMNyxvL0GOqUBk%2Bq3oi9drqmv0WY4CT9ux%2F3sVxNdHOofVaq4hOE2LcvY8G9i4QjpeQVDQRD2AxzANq111Op7p8nhu84RQj6%2BQqoiUcdYiZutzYLlNqktOWHSoOubfUpEgEL68I8co4ZqTLPmjPhDlj0rSZ2%2BxOkZw7C15uWHZvDyLL5g6VCk%2B%2BWd86ryep0bwyndVovEr0UQXVZKKXBqKji5m2oOpTlhSDPQs9oO&X-Amz-Signature=61e4bb995c84e667566f3d0d13fd931c603167cb7505d1a3b0862e60530ce357&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWQLNYN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICLtILatgBOc4e5rEzsbQGU4l7R0pKEWFHGbfQ9SoVvOAiEA%2Bo6kKFrljS7y2p6e%2Bt7UT10EGi%2Fg93zKj0oLmvvanLYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNQJLS18POGk1w0ZOCrcA3AWgj9wABUwkjm6S4ZDaUEY7wNgxPq7aoliz8K1OQW8tklvrG%2FkpVz6m65yXG4D7FWC6PUjyUrwyyu0EegiYqsD6Vrvs%2FYKuBh4JG%2Fe62OsHpMI9CeIM13TNzIXxuuDKDCPvyaIBTDoZY0wJ3ZCt6Oh3RJPWVByTg3QdJl9xPxxD3ks4njoxvVQqkDZ3i8VvuZy4mLMvJo2412v%2FLRZb6l5w2eMVi8pdNR73xfbnbdGER%2BPVykClNetqucA1iovBvPyKBn8dyAr8Se0RNunCKb5G094HW0qRtRd0yzbvt61yRK48DAqT%2FT2D%2BO4BxO0LzjjaSU4Cgeq4yCSSElmE%2B%2BoUjPxVZy9LmEVHIM9zwGFvSm8XZtgrUENAb0Vnw41DRXsHeIfAKCw7e8Wl08%2FMPtgXfk5wIoSzju%2F6PYSVj%2B4ivcNxrg4eVitAGgj1C%2Fm4rBBOZMM6tECpefQJc4zUhlJohByxdDfeP%2F6FNQbjjVBcsnFmBxvvz%2FwO7wUeE4wlevqF4p3asDHOZUPVa7ajTuQMQiR0EgA45QioAjatxit%2FBrY7cvNO6F2JGdGfskkQRS66mpz1LJRppgCQ5YY9E3Qqe0OOY1h5KyPPEyV1hbArlxrvjCPvrV6Le%2BDMNyxvL0GOqUBk%2Bq3oi9drqmv0WY4CT9ux%2F3sVxNdHOofVaq4hOE2LcvY8G9i4QjpeQVDQRD2AxzANq111Op7p8nhu84RQj6%2BQqoiUcdYiZutzYLlNqktOWHSoOubfUpEgEL68I8co4ZqTLPmjPhDlj0rSZ2%2BxOkZw7C15uWHZvDyLL5g6VCk%2B%2BWd86ryep0bwyndVovEr0UQXVZKKXBqKji5m2oOpTlhSDPQs9oO&X-Amz-Signature=fd524f8dd609e951bb9b7aba449aa77ad9bafca824f90ac18a24aacdb317976e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWQLNYN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICLtILatgBOc4e5rEzsbQGU4l7R0pKEWFHGbfQ9SoVvOAiEA%2Bo6kKFrljS7y2p6e%2Bt7UT10EGi%2Fg93zKj0oLmvvanLYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNQJLS18POGk1w0ZOCrcA3AWgj9wABUwkjm6S4ZDaUEY7wNgxPq7aoliz8K1OQW8tklvrG%2FkpVz6m65yXG4D7FWC6PUjyUrwyyu0EegiYqsD6Vrvs%2FYKuBh4JG%2Fe62OsHpMI9CeIM13TNzIXxuuDKDCPvyaIBTDoZY0wJ3ZCt6Oh3RJPWVByTg3QdJl9xPxxD3ks4njoxvVQqkDZ3i8VvuZy4mLMvJo2412v%2FLRZb6l5w2eMVi8pdNR73xfbnbdGER%2BPVykClNetqucA1iovBvPyKBn8dyAr8Se0RNunCKb5G094HW0qRtRd0yzbvt61yRK48DAqT%2FT2D%2BO4BxO0LzjjaSU4Cgeq4yCSSElmE%2B%2BoUjPxVZy9LmEVHIM9zwGFvSm8XZtgrUENAb0Vnw41DRXsHeIfAKCw7e8Wl08%2FMPtgXfk5wIoSzju%2F6PYSVj%2B4ivcNxrg4eVitAGgj1C%2Fm4rBBOZMM6tECpefQJc4zUhlJohByxdDfeP%2F6FNQbjjVBcsnFmBxvvz%2FwO7wUeE4wlevqF4p3asDHOZUPVa7ajTuQMQiR0EgA45QioAjatxit%2FBrY7cvNO6F2JGdGfskkQRS66mpz1LJRppgCQ5YY9E3Qqe0OOY1h5KyPPEyV1hbArlxrvjCPvrV6Le%2BDMNyxvL0GOqUBk%2Bq3oi9drqmv0WY4CT9ux%2F3sVxNdHOofVaq4hOE2LcvY8G9i4QjpeQVDQRD2AxzANq111Op7p8nhu84RQj6%2BQqoiUcdYiZutzYLlNqktOWHSoOubfUpEgEL68I8co4ZqTLPmjPhDlj0rSZ2%2BxOkZw7C15uWHZvDyLL5g6VCk%2B%2BWd86ryep0bwyndVovEr0UQXVZKKXBqKji5m2oOpTlhSDPQs9oO&X-Amz-Signature=65df6f558bf19e1eff6ce15b7afea957829f37953abe5a359def1983defa3bf7&X-Amz-SignedHeaders=host&x-id=GetObject)
