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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRGWOSX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCpU78faLCJZuNy7pfwpVudj3G7u%2BRSMH6zi7GtPxD08wIhAPHwVpijvWne5EeKI2GSj0h6Xd4ekC3qkJZnr6gD%2FKmGKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmFrFp5WWO914uXH4q3AMnhwJKnZQgPgAHS%2FR5xKUJKdUwAWlMzmym2EDhxI43CsRVQyQEuoxrRy2spD5a4PFehqRGjWtgPueJ7TuiPtkbIdZKXx3tihmDG4TrJsaUEG6uY7dlnHaTZkwee1yjwxHrdSml9cT7pwiakMrH4fkLL3sOWKnfvZiznRVSGUPatUdl1210%2BCLo%2BIahtvI%2BprSaYHKzb%2Fx%2FpvwxNE9l4C%2FfjgbNqSxhTh1Y5imWnn9G4%2FefNdVZPZ%2Fdqx3GFlnD0%2Bhr3%2BOvh2jdlBd092eZQZqWhJbYj5DbxMQeAPDMuoa0VDEHsb4BvCQJV1Q2HIuYf4Ih76zkdJLpVhv3Z3HMyMKJ8mqEW8B0JRK7cthXUvTyuCbpvXf0wGKM1d97MmbzsTOrEvUcPO6EZC3YiAvfBrcd04ZNsA1E4Ga%2F2XeuElj22k2LSIZQsHp0KN%2BK9eseVuZNiLz2mGUS4WxCR1SyKsc7PtBs0NpwVK4louKjRr5fVN%2F5z8GWrl1jvOsSh%2Fw0zNFlcqYgVZ%2FeKujcSWVL3q2sfGZogz8wCa2ZChB46RDnd%2FQbXFPMI2hV7eRC%2FEEziYGgE354CenelR581D%2FQ%2Bw%2FAbdh81Vn2%2FtSZ4eh8g2SwAPuNkTIKOiYq1DkkWjC%2FxMHBBjqkAf26kXDhxikO%2FrrnCrfbccOqRj4P1JkFLaaty6Wl5Ko4KLSSJ3ywCtG3YNd6FhDd%2FdFSciPdvAjDey0cIi4jvhx0naFI8pjWlTjNiwonYHOB%2BUTpZSgp%2BF8oqzq6%2FvjAJfiX9wCnM2ah0HXn8VHcuPHieJ%2BpfZraVfaagJvTV87v9KNYPoxsWWMk1efYAMDbcmyXseDhfix55HAEVwuztplt1wsg&X-Amz-Signature=0c1f20660654ff75550c437fd5d1966a8c78eaa51d097b19d822a8c837709414&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRGWOSX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCpU78faLCJZuNy7pfwpVudj3G7u%2BRSMH6zi7GtPxD08wIhAPHwVpijvWne5EeKI2GSj0h6Xd4ekC3qkJZnr6gD%2FKmGKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmFrFp5WWO914uXH4q3AMnhwJKnZQgPgAHS%2FR5xKUJKdUwAWlMzmym2EDhxI43CsRVQyQEuoxrRy2spD5a4PFehqRGjWtgPueJ7TuiPtkbIdZKXx3tihmDG4TrJsaUEG6uY7dlnHaTZkwee1yjwxHrdSml9cT7pwiakMrH4fkLL3sOWKnfvZiznRVSGUPatUdl1210%2BCLo%2BIahtvI%2BprSaYHKzb%2Fx%2FpvwxNE9l4C%2FfjgbNqSxhTh1Y5imWnn9G4%2FefNdVZPZ%2Fdqx3GFlnD0%2Bhr3%2BOvh2jdlBd092eZQZqWhJbYj5DbxMQeAPDMuoa0VDEHsb4BvCQJV1Q2HIuYf4Ih76zkdJLpVhv3Z3HMyMKJ8mqEW8B0JRK7cthXUvTyuCbpvXf0wGKM1d97MmbzsTOrEvUcPO6EZC3YiAvfBrcd04ZNsA1E4Ga%2F2XeuElj22k2LSIZQsHp0KN%2BK9eseVuZNiLz2mGUS4WxCR1SyKsc7PtBs0NpwVK4louKjRr5fVN%2F5z8GWrl1jvOsSh%2Fw0zNFlcqYgVZ%2FeKujcSWVL3q2sfGZogz8wCa2ZChB46RDnd%2FQbXFPMI2hV7eRC%2FEEziYGgE354CenelR581D%2FQ%2Bw%2FAbdh81Vn2%2FtSZ4eh8g2SwAPuNkTIKOiYq1DkkWjC%2FxMHBBjqkAf26kXDhxikO%2FrrnCrfbccOqRj4P1JkFLaaty6Wl5Ko4KLSSJ3ywCtG3YNd6FhDd%2FdFSciPdvAjDey0cIi4jvhx0naFI8pjWlTjNiwonYHOB%2BUTpZSgp%2BF8oqzq6%2FvjAJfiX9wCnM2ah0HXn8VHcuPHieJ%2BpfZraVfaagJvTV87v9KNYPoxsWWMk1efYAMDbcmyXseDhfix55HAEVwuztplt1wsg&X-Amz-Signature=9998fbc6522f39b99f6057851618ef24458fa8c96d4c397a28fec602544fafdd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRGWOSX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCpU78faLCJZuNy7pfwpVudj3G7u%2BRSMH6zi7GtPxD08wIhAPHwVpijvWne5EeKI2GSj0h6Xd4ekC3qkJZnr6gD%2FKmGKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmFrFp5WWO914uXH4q3AMnhwJKnZQgPgAHS%2FR5xKUJKdUwAWlMzmym2EDhxI43CsRVQyQEuoxrRy2spD5a4PFehqRGjWtgPueJ7TuiPtkbIdZKXx3tihmDG4TrJsaUEG6uY7dlnHaTZkwee1yjwxHrdSml9cT7pwiakMrH4fkLL3sOWKnfvZiznRVSGUPatUdl1210%2BCLo%2BIahtvI%2BprSaYHKzb%2Fx%2FpvwxNE9l4C%2FfjgbNqSxhTh1Y5imWnn9G4%2FefNdVZPZ%2Fdqx3GFlnD0%2Bhr3%2BOvh2jdlBd092eZQZqWhJbYj5DbxMQeAPDMuoa0VDEHsb4BvCQJV1Q2HIuYf4Ih76zkdJLpVhv3Z3HMyMKJ8mqEW8B0JRK7cthXUvTyuCbpvXf0wGKM1d97MmbzsTOrEvUcPO6EZC3YiAvfBrcd04ZNsA1E4Ga%2F2XeuElj22k2LSIZQsHp0KN%2BK9eseVuZNiLz2mGUS4WxCR1SyKsc7PtBs0NpwVK4louKjRr5fVN%2F5z8GWrl1jvOsSh%2Fw0zNFlcqYgVZ%2FeKujcSWVL3q2sfGZogz8wCa2ZChB46RDnd%2FQbXFPMI2hV7eRC%2FEEziYGgE354CenelR581D%2FQ%2Bw%2FAbdh81Vn2%2FtSZ4eh8g2SwAPuNkTIKOiYq1DkkWjC%2FxMHBBjqkAf26kXDhxikO%2FrrnCrfbccOqRj4P1JkFLaaty6Wl5Ko4KLSSJ3ywCtG3YNd6FhDd%2FdFSciPdvAjDey0cIi4jvhx0naFI8pjWlTjNiwonYHOB%2BUTpZSgp%2BF8oqzq6%2FvjAJfiX9wCnM2ah0HXn8VHcuPHieJ%2BpfZraVfaagJvTV87v9KNYPoxsWWMk1efYAMDbcmyXseDhfix55HAEVwuztplt1wsg&X-Amz-Signature=04737156a3ec25c77a23c8a29c044041cab29afcc7a31633ebb4e0797df967eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRGWOSX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCpU78faLCJZuNy7pfwpVudj3G7u%2BRSMH6zi7GtPxD08wIhAPHwVpijvWne5EeKI2GSj0h6Xd4ekC3qkJZnr6gD%2FKmGKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmFrFp5WWO914uXH4q3AMnhwJKnZQgPgAHS%2FR5xKUJKdUwAWlMzmym2EDhxI43CsRVQyQEuoxrRy2spD5a4PFehqRGjWtgPueJ7TuiPtkbIdZKXx3tihmDG4TrJsaUEG6uY7dlnHaTZkwee1yjwxHrdSml9cT7pwiakMrH4fkLL3sOWKnfvZiznRVSGUPatUdl1210%2BCLo%2BIahtvI%2BprSaYHKzb%2Fx%2FpvwxNE9l4C%2FfjgbNqSxhTh1Y5imWnn9G4%2FefNdVZPZ%2Fdqx3GFlnD0%2Bhr3%2BOvh2jdlBd092eZQZqWhJbYj5DbxMQeAPDMuoa0VDEHsb4BvCQJV1Q2HIuYf4Ih76zkdJLpVhv3Z3HMyMKJ8mqEW8B0JRK7cthXUvTyuCbpvXf0wGKM1d97MmbzsTOrEvUcPO6EZC3YiAvfBrcd04ZNsA1E4Ga%2F2XeuElj22k2LSIZQsHp0KN%2BK9eseVuZNiLz2mGUS4WxCR1SyKsc7PtBs0NpwVK4louKjRr5fVN%2F5z8GWrl1jvOsSh%2Fw0zNFlcqYgVZ%2FeKujcSWVL3q2sfGZogz8wCa2ZChB46RDnd%2FQbXFPMI2hV7eRC%2FEEziYGgE354CenelR581D%2FQ%2Bw%2FAbdh81Vn2%2FtSZ4eh8g2SwAPuNkTIKOiYq1DkkWjC%2FxMHBBjqkAf26kXDhxikO%2FrrnCrfbccOqRj4P1JkFLaaty6Wl5Ko4KLSSJ3ywCtG3YNd6FhDd%2FdFSciPdvAjDey0cIi4jvhx0naFI8pjWlTjNiwonYHOB%2BUTpZSgp%2BF8oqzq6%2FvjAJfiX9wCnM2ah0HXn8VHcuPHieJ%2BpfZraVfaagJvTV87v9KNYPoxsWWMk1efYAMDbcmyXseDhfix55HAEVwuztplt1wsg&X-Amz-Signature=b884e98877c68a562d4c975ffdb8fb85e48e2f1ee8580c8d8b94f92d75b8f5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRGWOSX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCpU78faLCJZuNy7pfwpVudj3G7u%2BRSMH6zi7GtPxD08wIhAPHwVpijvWne5EeKI2GSj0h6Xd4ekC3qkJZnr6gD%2FKmGKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmFrFp5WWO914uXH4q3AMnhwJKnZQgPgAHS%2FR5xKUJKdUwAWlMzmym2EDhxI43CsRVQyQEuoxrRy2spD5a4PFehqRGjWtgPueJ7TuiPtkbIdZKXx3tihmDG4TrJsaUEG6uY7dlnHaTZkwee1yjwxHrdSml9cT7pwiakMrH4fkLL3sOWKnfvZiznRVSGUPatUdl1210%2BCLo%2BIahtvI%2BprSaYHKzb%2Fx%2FpvwxNE9l4C%2FfjgbNqSxhTh1Y5imWnn9G4%2FefNdVZPZ%2Fdqx3GFlnD0%2Bhr3%2BOvh2jdlBd092eZQZqWhJbYj5DbxMQeAPDMuoa0VDEHsb4BvCQJV1Q2HIuYf4Ih76zkdJLpVhv3Z3HMyMKJ8mqEW8B0JRK7cthXUvTyuCbpvXf0wGKM1d97MmbzsTOrEvUcPO6EZC3YiAvfBrcd04ZNsA1E4Ga%2F2XeuElj22k2LSIZQsHp0KN%2BK9eseVuZNiLz2mGUS4WxCR1SyKsc7PtBs0NpwVK4louKjRr5fVN%2F5z8GWrl1jvOsSh%2Fw0zNFlcqYgVZ%2FeKujcSWVL3q2sfGZogz8wCa2ZChB46RDnd%2FQbXFPMI2hV7eRC%2FEEziYGgE354CenelR581D%2FQ%2Bw%2FAbdh81Vn2%2FtSZ4eh8g2SwAPuNkTIKOiYq1DkkWjC%2FxMHBBjqkAf26kXDhxikO%2FrrnCrfbccOqRj4P1JkFLaaty6Wl5Ko4KLSSJ3ywCtG3YNd6FhDd%2FdFSciPdvAjDey0cIi4jvhx0naFI8pjWlTjNiwonYHOB%2BUTpZSgp%2BF8oqzq6%2FvjAJfiX9wCnM2ah0HXn8VHcuPHieJ%2BpfZraVfaagJvTV87v9KNYPoxsWWMk1efYAMDbcmyXseDhfix55HAEVwuztplt1wsg&X-Amz-Signature=9e2a7a630987c576129e984d0bb07e2a0108eee7797f4e1e3bd6b89ba683ca7f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRGWOSX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCpU78faLCJZuNy7pfwpVudj3G7u%2BRSMH6zi7GtPxD08wIhAPHwVpijvWne5EeKI2GSj0h6Xd4ekC3qkJZnr6gD%2FKmGKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmFrFp5WWO914uXH4q3AMnhwJKnZQgPgAHS%2FR5xKUJKdUwAWlMzmym2EDhxI43CsRVQyQEuoxrRy2spD5a4PFehqRGjWtgPueJ7TuiPtkbIdZKXx3tihmDG4TrJsaUEG6uY7dlnHaTZkwee1yjwxHrdSml9cT7pwiakMrH4fkLL3sOWKnfvZiznRVSGUPatUdl1210%2BCLo%2BIahtvI%2BprSaYHKzb%2Fx%2FpvwxNE9l4C%2FfjgbNqSxhTh1Y5imWnn9G4%2FefNdVZPZ%2Fdqx3GFlnD0%2Bhr3%2BOvh2jdlBd092eZQZqWhJbYj5DbxMQeAPDMuoa0VDEHsb4BvCQJV1Q2HIuYf4Ih76zkdJLpVhv3Z3HMyMKJ8mqEW8B0JRK7cthXUvTyuCbpvXf0wGKM1d97MmbzsTOrEvUcPO6EZC3YiAvfBrcd04ZNsA1E4Ga%2F2XeuElj22k2LSIZQsHp0KN%2BK9eseVuZNiLz2mGUS4WxCR1SyKsc7PtBs0NpwVK4louKjRr5fVN%2F5z8GWrl1jvOsSh%2Fw0zNFlcqYgVZ%2FeKujcSWVL3q2sfGZogz8wCa2ZChB46RDnd%2FQbXFPMI2hV7eRC%2FEEziYGgE354CenelR581D%2FQ%2Bw%2FAbdh81Vn2%2FtSZ4eh8g2SwAPuNkTIKOiYq1DkkWjC%2FxMHBBjqkAf26kXDhxikO%2FrrnCrfbccOqRj4P1JkFLaaty6Wl5Ko4KLSSJ3ywCtG3YNd6FhDd%2FdFSciPdvAjDey0cIi4jvhx0naFI8pjWlTjNiwonYHOB%2BUTpZSgp%2BF8oqzq6%2FvjAJfiX9wCnM2ah0HXn8VHcuPHieJ%2BpfZraVfaagJvTV87v9KNYPoxsWWMk1efYAMDbcmyXseDhfix55HAEVwuztplt1wsg&X-Amz-Signature=73139bae61acef4ee2f5428148c65dc1af687f2d424825f367eaa42a0fddd7a8&X-Amz-SignedHeaders=host&x-id=GetObject)
