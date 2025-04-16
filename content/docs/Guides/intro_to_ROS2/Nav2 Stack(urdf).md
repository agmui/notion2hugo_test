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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXN23F7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjCJZZMNkc8F3PpU8zT0%2FFoclw3xNXhk%2FVFfR9RY4mVwIgSA2QY5E0ZZXHCVZtXMVLfk6j1CTE55wAH%2F%2B2omLYPAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKofy6O%2BE0NhHrfpqircA%2F%2BgOraiaUThWqFiT%2FkwtShxKuHT0k0iDemz0C75Wx%2BMtQfmefXbnpzJDkbKEmLO10p%2BisyIIm0GSAAhpPKNRGEGN36lcLZWP0CRhsKiNQGs6ly5cVdHZ70K9LUZxOmr7nyJLAVsWH4wLNhP1G6YIFBEzK9m6kbQNgkMY5StqO72K3ZWTJXmUSi8poQJI%2F15CJ1XIfeOto%2FJFr5Da6lDsE9xKrA69FD1m2ZWHNIBM5%2BVr1V5PGV3ZfkGo9b7QNLzaGQojaxpTwG5plJZGMDwUdl%2BeaKWhXDZjUE%2BVvgBItCiyczncKqOFaVayzvKKcU7DVL9im%2BR3hk%2BE2lXScON2NvBOQ0ED%2FieIVxqatbyK9aKX%2FfEoGio6qAEeMg57RLPKmq64%2BVjJ1gWPDmVtdU%2FtIQG6tw73GM7e2VdpUzp0gKYc5EBtZhbGvR%2BOYar3Z%2FjbfLujAtWCTJKCo4pbdu7%2BhF%2BYkwbdNmJqLDCYuHHZPKxA2uEECsfoqrbMQfvboHlj%2FPlbO2sK5kr634c3dchFw83WdS%2Fl0SkRq%2FMwKdVCXtXVXjITzz7nxiS0W%2B45TJJVchMFdCFXOdLBAOX3Z5lJq6v6kzQaG7CN2fdUdcVDO7o7fio8HJeSFGzO0ywMNaK%2Fb8GOqUBxbP2aEozNlH1foAoNayHR%2BCZgMg00FImBAxrgITiUIrdz50oCrui3n5uHpdsdGS0ORZuu74qgyeq1qsK5NmTcjy%2FsinnuE9yXwvNjEmtql%2FbTvXwVqs12DB8TRfL3PiTw30agViJ6teuVoFV5gKSo8SGDBFUsSRSiBO8zX3nP4C2x5VxqFpHpM2ZXZWPvzX3XetzTypkfpS%2Fd3M%2BTwqU4497YxZu&X-Amz-Signature=c8139ad1bd83b1bda7d7f187d35a3e035dbec47a067424016e4c60c05fc794e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXN23F7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjCJZZMNkc8F3PpU8zT0%2FFoclw3xNXhk%2FVFfR9RY4mVwIgSA2QY5E0ZZXHCVZtXMVLfk6j1CTE55wAH%2F%2B2omLYPAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKofy6O%2BE0NhHrfpqircA%2F%2BgOraiaUThWqFiT%2FkwtShxKuHT0k0iDemz0C75Wx%2BMtQfmefXbnpzJDkbKEmLO10p%2BisyIIm0GSAAhpPKNRGEGN36lcLZWP0CRhsKiNQGs6ly5cVdHZ70K9LUZxOmr7nyJLAVsWH4wLNhP1G6YIFBEzK9m6kbQNgkMY5StqO72K3ZWTJXmUSi8poQJI%2F15CJ1XIfeOto%2FJFr5Da6lDsE9xKrA69FD1m2ZWHNIBM5%2BVr1V5PGV3ZfkGo9b7QNLzaGQojaxpTwG5plJZGMDwUdl%2BeaKWhXDZjUE%2BVvgBItCiyczncKqOFaVayzvKKcU7DVL9im%2BR3hk%2BE2lXScON2NvBOQ0ED%2FieIVxqatbyK9aKX%2FfEoGio6qAEeMg57RLPKmq64%2BVjJ1gWPDmVtdU%2FtIQG6tw73GM7e2VdpUzp0gKYc5EBtZhbGvR%2BOYar3Z%2FjbfLujAtWCTJKCo4pbdu7%2BhF%2BYkwbdNmJqLDCYuHHZPKxA2uEECsfoqrbMQfvboHlj%2FPlbO2sK5kr634c3dchFw83WdS%2Fl0SkRq%2FMwKdVCXtXVXjITzz7nxiS0W%2B45TJJVchMFdCFXOdLBAOX3Z5lJq6v6kzQaG7CN2fdUdcVDO7o7fio8HJeSFGzO0ywMNaK%2Fb8GOqUBxbP2aEozNlH1foAoNayHR%2BCZgMg00FImBAxrgITiUIrdz50oCrui3n5uHpdsdGS0ORZuu74qgyeq1qsK5NmTcjy%2FsinnuE9yXwvNjEmtql%2FbTvXwVqs12DB8TRfL3PiTw30agViJ6teuVoFV5gKSo8SGDBFUsSRSiBO8zX3nP4C2x5VxqFpHpM2ZXZWPvzX3XetzTypkfpS%2Fd3M%2BTwqU4497YxZu&X-Amz-Signature=f2aaa370f17242cace522131cc9c739ab7e7033744a1bed332483edad489c742&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXN23F7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjCJZZMNkc8F3PpU8zT0%2FFoclw3xNXhk%2FVFfR9RY4mVwIgSA2QY5E0ZZXHCVZtXMVLfk6j1CTE55wAH%2F%2B2omLYPAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKofy6O%2BE0NhHrfpqircA%2F%2BgOraiaUThWqFiT%2FkwtShxKuHT0k0iDemz0C75Wx%2BMtQfmefXbnpzJDkbKEmLO10p%2BisyIIm0GSAAhpPKNRGEGN36lcLZWP0CRhsKiNQGs6ly5cVdHZ70K9LUZxOmr7nyJLAVsWH4wLNhP1G6YIFBEzK9m6kbQNgkMY5StqO72K3ZWTJXmUSi8poQJI%2F15CJ1XIfeOto%2FJFr5Da6lDsE9xKrA69FD1m2ZWHNIBM5%2BVr1V5PGV3ZfkGo9b7QNLzaGQojaxpTwG5plJZGMDwUdl%2BeaKWhXDZjUE%2BVvgBItCiyczncKqOFaVayzvKKcU7DVL9im%2BR3hk%2BE2lXScON2NvBOQ0ED%2FieIVxqatbyK9aKX%2FfEoGio6qAEeMg57RLPKmq64%2BVjJ1gWPDmVtdU%2FtIQG6tw73GM7e2VdpUzp0gKYc5EBtZhbGvR%2BOYar3Z%2FjbfLujAtWCTJKCo4pbdu7%2BhF%2BYkwbdNmJqLDCYuHHZPKxA2uEECsfoqrbMQfvboHlj%2FPlbO2sK5kr634c3dchFw83WdS%2Fl0SkRq%2FMwKdVCXtXVXjITzz7nxiS0W%2B45TJJVchMFdCFXOdLBAOX3Z5lJq6v6kzQaG7CN2fdUdcVDO7o7fio8HJeSFGzO0ywMNaK%2Fb8GOqUBxbP2aEozNlH1foAoNayHR%2BCZgMg00FImBAxrgITiUIrdz50oCrui3n5uHpdsdGS0ORZuu74qgyeq1qsK5NmTcjy%2FsinnuE9yXwvNjEmtql%2FbTvXwVqs12DB8TRfL3PiTw30agViJ6teuVoFV5gKSo8SGDBFUsSRSiBO8zX3nP4C2x5VxqFpHpM2ZXZWPvzX3XetzTypkfpS%2Fd3M%2BTwqU4497YxZu&X-Amz-Signature=ccc820b1259399f3a2d8aa5f856a8054bcd047beb2dcc0d810fde778fd69eade&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXN23F7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjCJZZMNkc8F3PpU8zT0%2FFoclw3xNXhk%2FVFfR9RY4mVwIgSA2QY5E0ZZXHCVZtXMVLfk6j1CTE55wAH%2F%2B2omLYPAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKofy6O%2BE0NhHrfpqircA%2F%2BgOraiaUThWqFiT%2FkwtShxKuHT0k0iDemz0C75Wx%2BMtQfmefXbnpzJDkbKEmLO10p%2BisyIIm0GSAAhpPKNRGEGN36lcLZWP0CRhsKiNQGs6ly5cVdHZ70K9LUZxOmr7nyJLAVsWH4wLNhP1G6YIFBEzK9m6kbQNgkMY5StqO72K3ZWTJXmUSi8poQJI%2F15CJ1XIfeOto%2FJFr5Da6lDsE9xKrA69FD1m2ZWHNIBM5%2BVr1V5PGV3ZfkGo9b7QNLzaGQojaxpTwG5plJZGMDwUdl%2BeaKWhXDZjUE%2BVvgBItCiyczncKqOFaVayzvKKcU7DVL9im%2BR3hk%2BE2lXScON2NvBOQ0ED%2FieIVxqatbyK9aKX%2FfEoGio6qAEeMg57RLPKmq64%2BVjJ1gWPDmVtdU%2FtIQG6tw73GM7e2VdpUzp0gKYc5EBtZhbGvR%2BOYar3Z%2FjbfLujAtWCTJKCo4pbdu7%2BhF%2BYkwbdNmJqLDCYuHHZPKxA2uEECsfoqrbMQfvboHlj%2FPlbO2sK5kr634c3dchFw83WdS%2Fl0SkRq%2FMwKdVCXtXVXjITzz7nxiS0W%2B45TJJVchMFdCFXOdLBAOX3Z5lJq6v6kzQaG7CN2fdUdcVDO7o7fio8HJeSFGzO0ywMNaK%2Fb8GOqUBxbP2aEozNlH1foAoNayHR%2BCZgMg00FImBAxrgITiUIrdz50oCrui3n5uHpdsdGS0ORZuu74qgyeq1qsK5NmTcjy%2FsinnuE9yXwvNjEmtql%2FbTvXwVqs12DB8TRfL3PiTw30agViJ6teuVoFV5gKSo8SGDBFUsSRSiBO8zX3nP4C2x5VxqFpHpM2ZXZWPvzX3XetzTypkfpS%2Fd3M%2BTwqU4497YxZu&X-Amz-Signature=f07372fd9bd6ddd53e142a994dda33678c10780850cb07425f2639e6c435d539&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXN23F7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjCJZZMNkc8F3PpU8zT0%2FFoclw3xNXhk%2FVFfR9RY4mVwIgSA2QY5E0ZZXHCVZtXMVLfk6j1CTE55wAH%2F%2B2omLYPAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKofy6O%2BE0NhHrfpqircA%2F%2BgOraiaUThWqFiT%2FkwtShxKuHT0k0iDemz0C75Wx%2BMtQfmefXbnpzJDkbKEmLO10p%2BisyIIm0GSAAhpPKNRGEGN36lcLZWP0CRhsKiNQGs6ly5cVdHZ70K9LUZxOmr7nyJLAVsWH4wLNhP1G6YIFBEzK9m6kbQNgkMY5StqO72K3ZWTJXmUSi8poQJI%2F15CJ1XIfeOto%2FJFr5Da6lDsE9xKrA69FD1m2ZWHNIBM5%2BVr1V5PGV3ZfkGo9b7QNLzaGQojaxpTwG5plJZGMDwUdl%2BeaKWhXDZjUE%2BVvgBItCiyczncKqOFaVayzvKKcU7DVL9im%2BR3hk%2BE2lXScON2NvBOQ0ED%2FieIVxqatbyK9aKX%2FfEoGio6qAEeMg57RLPKmq64%2BVjJ1gWPDmVtdU%2FtIQG6tw73GM7e2VdpUzp0gKYc5EBtZhbGvR%2BOYar3Z%2FjbfLujAtWCTJKCo4pbdu7%2BhF%2BYkwbdNmJqLDCYuHHZPKxA2uEECsfoqrbMQfvboHlj%2FPlbO2sK5kr634c3dchFw83WdS%2Fl0SkRq%2FMwKdVCXtXVXjITzz7nxiS0W%2B45TJJVchMFdCFXOdLBAOX3Z5lJq6v6kzQaG7CN2fdUdcVDO7o7fio8HJeSFGzO0ywMNaK%2Fb8GOqUBxbP2aEozNlH1foAoNayHR%2BCZgMg00FImBAxrgITiUIrdz50oCrui3n5uHpdsdGS0ORZuu74qgyeq1qsK5NmTcjy%2FsinnuE9yXwvNjEmtql%2FbTvXwVqs12DB8TRfL3PiTw30agViJ6teuVoFV5gKSo8SGDBFUsSRSiBO8zX3nP4C2x5VxqFpHpM2ZXZWPvzX3XetzTypkfpS%2Fd3M%2BTwqU4497YxZu&X-Amz-Signature=747e9453bdfea02663276227c9193fcdbd0a8e4098fcac5f677b49ebb7829c87&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXN23F7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjCJZZMNkc8F3PpU8zT0%2FFoclw3xNXhk%2FVFfR9RY4mVwIgSA2QY5E0ZZXHCVZtXMVLfk6j1CTE55wAH%2F%2B2omLYPAoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKofy6O%2BE0NhHrfpqircA%2F%2BgOraiaUThWqFiT%2FkwtShxKuHT0k0iDemz0C75Wx%2BMtQfmefXbnpzJDkbKEmLO10p%2BisyIIm0GSAAhpPKNRGEGN36lcLZWP0CRhsKiNQGs6ly5cVdHZ70K9LUZxOmr7nyJLAVsWH4wLNhP1G6YIFBEzK9m6kbQNgkMY5StqO72K3ZWTJXmUSi8poQJI%2F15CJ1XIfeOto%2FJFr5Da6lDsE9xKrA69FD1m2ZWHNIBM5%2BVr1V5PGV3ZfkGo9b7QNLzaGQojaxpTwG5plJZGMDwUdl%2BeaKWhXDZjUE%2BVvgBItCiyczncKqOFaVayzvKKcU7DVL9im%2BR3hk%2BE2lXScON2NvBOQ0ED%2FieIVxqatbyK9aKX%2FfEoGio6qAEeMg57RLPKmq64%2BVjJ1gWPDmVtdU%2FtIQG6tw73GM7e2VdpUzp0gKYc5EBtZhbGvR%2BOYar3Z%2FjbfLujAtWCTJKCo4pbdu7%2BhF%2BYkwbdNmJqLDCYuHHZPKxA2uEECsfoqrbMQfvboHlj%2FPlbO2sK5kr634c3dchFw83WdS%2Fl0SkRq%2FMwKdVCXtXVXjITzz7nxiS0W%2B45TJJVchMFdCFXOdLBAOX3Z5lJq6v6kzQaG7CN2fdUdcVDO7o7fio8HJeSFGzO0ywMNaK%2Fb8GOqUBxbP2aEozNlH1foAoNayHR%2BCZgMg00FImBAxrgITiUIrdz50oCrui3n5uHpdsdGS0ORZuu74qgyeq1qsK5NmTcjy%2FsinnuE9yXwvNjEmtql%2FbTvXwVqs12DB8TRfL3PiTw30agViJ6teuVoFV5gKSo8SGDBFUsSRSiBO8zX3nP4C2x5VxqFpHpM2ZXZWPvzX3XetzTypkfpS%2Fd3M%2BTwqU4497YxZu&X-Amz-Signature=d57a8aaad093ab4c5ceb9976be15ad57132d9c94bf2d6b240ebf19007637a059&X-Amz-SignedHeaders=host&x-id=GetObject)
