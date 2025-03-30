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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJMJZL5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDhM7ffI9HKbjpRsUhQsflyapZqDyOlqWqelizR4%2FV2%2BgIgfYBnVBTcWtQbpIP5%2BYZMjiluawPrpgGPNBG17l3J9OsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDHfNOLkRjZT%2FhnDircA63VpVyW5VF3yp9z5A7rYQ%2BDw%2FiOMKB3c8b3G8PiA3jy%2FIZZ2cigx2oYm3VYkQFU%2F5b4spT%2FvJR3IZbW7ZLowbWO7sOs2iv9VTOD6cDcPUOf%2FtEa9F2u3TUsWLmZBI1pqoD9twdyBlD%2B81X8VR111i3HpkgCwznwxbBkZqbkYLqUMtFLiXhJT7iOyvkkrzNaFACLRoMKj1U8dIx8Uv093cSk2HPlXT2VEatmBgjY1cfd71uZENWYDy1dJxy5SAU7mWmyh3htyNcC5SCKdO7JMswEtQvMf0YnZ%2BNwyZl7hpav6Q3EmqzY7c%2FqVoS2CA9VAQEo7Q4k1qYNXCWMZ2ha%2FdxrpjfyrC%2FSfUWdklHHhUrvfL0tF2UVrhVspivO%2FfjFGtM8SyHNoZhT7IlcTCrianawhcHqnbynLx8F80NqFVkmoOP2onX%2BARu2pm6VIsxFMMyGoGbyvgPDizVsR4UBx7IvSKl8FPIW2KIH%2BBpTGTiHQrtCAuFmWr2KCnR%2FndFQP0MkuwzV9hUxobW2C46AJJeAYwkWwJHfFRTHVPrQBfV0z42MByrBTQKHRyO9bWTTMf4dQVWaFNmsZEtDyb56bZY8jd2s98v44uzf8J%2FkE3ToyifwiFZ5aGssNNIxMJbupb8GOqUBC8AVLldIqgvdfx6N1b%2FhZDUUrzD2phMiKFYxcffV38OmIjFicn1s%2Fz%2FjelsfLfXgxRzpcRX6wc0r5jEYQLBpBil%2FKFOah6jVoyuMSXGueFZJcA3VfLYcU6czqm%2FFtpO979hUrT0GPUuOA%2BsERyZgkY29coWM67auNfGlNJXHeWoO5V4JTpESOrbRzayiTtnwRyiWU1NRyFZIxrqFM4FErIxBzcZn&X-Amz-Signature=64aeefb51148c4dda98c3a60fc6c63c817de4762afeb9c5a97b125cc0b9bb967&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJMJZL5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDhM7ffI9HKbjpRsUhQsflyapZqDyOlqWqelizR4%2FV2%2BgIgfYBnVBTcWtQbpIP5%2BYZMjiluawPrpgGPNBG17l3J9OsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDHfNOLkRjZT%2FhnDircA63VpVyW5VF3yp9z5A7rYQ%2BDw%2FiOMKB3c8b3G8PiA3jy%2FIZZ2cigx2oYm3VYkQFU%2F5b4spT%2FvJR3IZbW7ZLowbWO7sOs2iv9VTOD6cDcPUOf%2FtEa9F2u3TUsWLmZBI1pqoD9twdyBlD%2B81X8VR111i3HpkgCwznwxbBkZqbkYLqUMtFLiXhJT7iOyvkkrzNaFACLRoMKj1U8dIx8Uv093cSk2HPlXT2VEatmBgjY1cfd71uZENWYDy1dJxy5SAU7mWmyh3htyNcC5SCKdO7JMswEtQvMf0YnZ%2BNwyZl7hpav6Q3EmqzY7c%2FqVoS2CA9VAQEo7Q4k1qYNXCWMZ2ha%2FdxrpjfyrC%2FSfUWdklHHhUrvfL0tF2UVrhVspivO%2FfjFGtM8SyHNoZhT7IlcTCrianawhcHqnbynLx8F80NqFVkmoOP2onX%2BARu2pm6VIsxFMMyGoGbyvgPDizVsR4UBx7IvSKl8FPIW2KIH%2BBpTGTiHQrtCAuFmWr2KCnR%2FndFQP0MkuwzV9hUxobW2C46AJJeAYwkWwJHfFRTHVPrQBfV0z42MByrBTQKHRyO9bWTTMf4dQVWaFNmsZEtDyb56bZY8jd2s98v44uzf8J%2FkE3ToyifwiFZ5aGssNNIxMJbupb8GOqUBC8AVLldIqgvdfx6N1b%2FhZDUUrzD2phMiKFYxcffV38OmIjFicn1s%2Fz%2FjelsfLfXgxRzpcRX6wc0r5jEYQLBpBil%2FKFOah6jVoyuMSXGueFZJcA3VfLYcU6czqm%2FFtpO979hUrT0GPUuOA%2BsERyZgkY29coWM67auNfGlNJXHeWoO5V4JTpESOrbRzayiTtnwRyiWU1NRyFZIxrqFM4FErIxBzcZn&X-Amz-Signature=cbd999dbfb122c1710ee38c56a293d889b00217a7696f60876c947078ae05842&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJMJZL5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDhM7ffI9HKbjpRsUhQsflyapZqDyOlqWqelizR4%2FV2%2BgIgfYBnVBTcWtQbpIP5%2BYZMjiluawPrpgGPNBG17l3J9OsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDHfNOLkRjZT%2FhnDircA63VpVyW5VF3yp9z5A7rYQ%2BDw%2FiOMKB3c8b3G8PiA3jy%2FIZZ2cigx2oYm3VYkQFU%2F5b4spT%2FvJR3IZbW7ZLowbWO7sOs2iv9VTOD6cDcPUOf%2FtEa9F2u3TUsWLmZBI1pqoD9twdyBlD%2B81X8VR111i3HpkgCwznwxbBkZqbkYLqUMtFLiXhJT7iOyvkkrzNaFACLRoMKj1U8dIx8Uv093cSk2HPlXT2VEatmBgjY1cfd71uZENWYDy1dJxy5SAU7mWmyh3htyNcC5SCKdO7JMswEtQvMf0YnZ%2BNwyZl7hpav6Q3EmqzY7c%2FqVoS2CA9VAQEo7Q4k1qYNXCWMZ2ha%2FdxrpjfyrC%2FSfUWdklHHhUrvfL0tF2UVrhVspivO%2FfjFGtM8SyHNoZhT7IlcTCrianawhcHqnbynLx8F80NqFVkmoOP2onX%2BARu2pm6VIsxFMMyGoGbyvgPDizVsR4UBx7IvSKl8FPIW2KIH%2BBpTGTiHQrtCAuFmWr2KCnR%2FndFQP0MkuwzV9hUxobW2C46AJJeAYwkWwJHfFRTHVPrQBfV0z42MByrBTQKHRyO9bWTTMf4dQVWaFNmsZEtDyb56bZY8jd2s98v44uzf8J%2FkE3ToyifwiFZ5aGssNNIxMJbupb8GOqUBC8AVLldIqgvdfx6N1b%2FhZDUUrzD2phMiKFYxcffV38OmIjFicn1s%2Fz%2FjelsfLfXgxRzpcRX6wc0r5jEYQLBpBil%2FKFOah6jVoyuMSXGueFZJcA3VfLYcU6czqm%2FFtpO979hUrT0GPUuOA%2BsERyZgkY29coWM67auNfGlNJXHeWoO5V4JTpESOrbRzayiTtnwRyiWU1NRyFZIxrqFM4FErIxBzcZn&X-Amz-Signature=f885b4f5e1d7ade2c9464a7934f4382f2fdf32e65a5b427a6c412368649f7be6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJMJZL5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDhM7ffI9HKbjpRsUhQsflyapZqDyOlqWqelizR4%2FV2%2BgIgfYBnVBTcWtQbpIP5%2BYZMjiluawPrpgGPNBG17l3J9OsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDHfNOLkRjZT%2FhnDircA63VpVyW5VF3yp9z5A7rYQ%2BDw%2FiOMKB3c8b3G8PiA3jy%2FIZZ2cigx2oYm3VYkQFU%2F5b4spT%2FvJR3IZbW7ZLowbWO7sOs2iv9VTOD6cDcPUOf%2FtEa9F2u3TUsWLmZBI1pqoD9twdyBlD%2B81X8VR111i3HpkgCwznwxbBkZqbkYLqUMtFLiXhJT7iOyvkkrzNaFACLRoMKj1U8dIx8Uv093cSk2HPlXT2VEatmBgjY1cfd71uZENWYDy1dJxy5SAU7mWmyh3htyNcC5SCKdO7JMswEtQvMf0YnZ%2BNwyZl7hpav6Q3EmqzY7c%2FqVoS2CA9VAQEo7Q4k1qYNXCWMZ2ha%2FdxrpjfyrC%2FSfUWdklHHhUrvfL0tF2UVrhVspivO%2FfjFGtM8SyHNoZhT7IlcTCrianawhcHqnbynLx8F80NqFVkmoOP2onX%2BARu2pm6VIsxFMMyGoGbyvgPDizVsR4UBx7IvSKl8FPIW2KIH%2BBpTGTiHQrtCAuFmWr2KCnR%2FndFQP0MkuwzV9hUxobW2C46AJJeAYwkWwJHfFRTHVPrQBfV0z42MByrBTQKHRyO9bWTTMf4dQVWaFNmsZEtDyb56bZY8jd2s98v44uzf8J%2FkE3ToyifwiFZ5aGssNNIxMJbupb8GOqUBC8AVLldIqgvdfx6N1b%2FhZDUUrzD2phMiKFYxcffV38OmIjFicn1s%2Fz%2FjelsfLfXgxRzpcRX6wc0r5jEYQLBpBil%2FKFOah6jVoyuMSXGueFZJcA3VfLYcU6czqm%2FFtpO979hUrT0GPUuOA%2BsERyZgkY29coWM67auNfGlNJXHeWoO5V4JTpESOrbRzayiTtnwRyiWU1NRyFZIxrqFM4FErIxBzcZn&X-Amz-Signature=4e776c433ce812999d91fd8b4344554082a69b7204ae0814421772a3545832df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJMJZL5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDhM7ffI9HKbjpRsUhQsflyapZqDyOlqWqelizR4%2FV2%2BgIgfYBnVBTcWtQbpIP5%2BYZMjiluawPrpgGPNBG17l3J9OsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDHfNOLkRjZT%2FhnDircA63VpVyW5VF3yp9z5A7rYQ%2BDw%2FiOMKB3c8b3G8PiA3jy%2FIZZ2cigx2oYm3VYkQFU%2F5b4spT%2FvJR3IZbW7ZLowbWO7sOs2iv9VTOD6cDcPUOf%2FtEa9F2u3TUsWLmZBI1pqoD9twdyBlD%2B81X8VR111i3HpkgCwznwxbBkZqbkYLqUMtFLiXhJT7iOyvkkrzNaFACLRoMKj1U8dIx8Uv093cSk2HPlXT2VEatmBgjY1cfd71uZENWYDy1dJxy5SAU7mWmyh3htyNcC5SCKdO7JMswEtQvMf0YnZ%2BNwyZl7hpav6Q3EmqzY7c%2FqVoS2CA9VAQEo7Q4k1qYNXCWMZ2ha%2FdxrpjfyrC%2FSfUWdklHHhUrvfL0tF2UVrhVspivO%2FfjFGtM8SyHNoZhT7IlcTCrianawhcHqnbynLx8F80NqFVkmoOP2onX%2BARu2pm6VIsxFMMyGoGbyvgPDizVsR4UBx7IvSKl8FPIW2KIH%2BBpTGTiHQrtCAuFmWr2KCnR%2FndFQP0MkuwzV9hUxobW2C46AJJeAYwkWwJHfFRTHVPrQBfV0z42MByrBTQKHRyO9bWTTMf4dQVWaFNmsZEtDyb56bZY8jd2s98v44uzf8J%2FkE3ToyifwiFZ5aGssNNIxMJbupb8GOqUBC8AVLldIqgvdfx6N1b%2FhZDUUrzD2phMiKFYxcffV38OmIjFicn1s%2Fz%2FjelsfLfXgxRzpcRX6wc0r5jEYQLBpBil%2FKFOah6jVoyuMSXGueFZJcA3VfLYcU6czqm%2FFtpO979hUrT0GPUuOA%2BsERyZgkY29coWM67auNfGlNJXHeWoO5V4JTpESOrbRzayiTtnwRyiWU1NRyFZIxrqFM4FErIxBzcZn&X-Amz-Signature=e5e27e56e803df0edbd81557c45760f69e5c414db344a85ec267d2bbe6832d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJMJZL5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDhM7ffI9HKbjpRsUhQsflyapZqDyOlqWqelizR4%2FV2%2BgIgfYBnVBTcWtQbpIP5%2BYZMjiluawPrpgGPNBG17l3J9OsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDHfNOLkRjZT%2FhnDircA63VpVyW5VF3yp9z5A7rYQ%2BDw%2FiOMKB3c8b3G8PiA3jy%2FIZZ2cigx2oYm3VYkQFU%2F5b4spT%2FvJR3IZbW7ZLowbWO7sOs2iv9VTOD6cDcPUOf%2FtEa9F2u3TUsWLmZBI1pqoD9twdyBlD%2B81X8VR111i3HpkgCwznwxbBkZqbkYLqUMtFLiXhJT7iOyvkkrzNaFACLRoMKj1U8dIx8Uv093cSk2HPlXT2VEatmBgjY1cfd71uZENWYDy1dJxy5SAU7mWmyh3htyNcC5SCKdO7JMswEtQvMf0YnZ%2BNwyZl7hpav6Q3EmqzY7c%2FqVoS2CA9VAQEo7Q4k1qYNXCWMZ2ha%2FdxrpjfyrC%2FSfUWdklHHhUrvfL0tF2UVrhVspivO%2FfjFGtM8SyHNoZhT7IlcTCrianawhcHqnbynLx8F80NqFVkmoOP2onX%2BARu2pm6VIsxFMMyGoGbyvgPDizVsR4UBx7IvSKl8FPIW2KIH%2BBpTGTiHQrtCAuFmWr2KCnR%2FndFQP0MkuwzV9hUxobW2C46AJJeAYwkWwJHfFRTHVPrQBfV0z42MByrBTQKHRyO9bWTTMf4dQVWaFNmsZEtDyb56bZY8jd2s98v44uzf8J%2FkE3ToyifwiFZ5aGssNNIxMJbupb8GOqUBC8AVLldIqgvdfx6N1b%2FhZDUUrzD2phMiKFYxcffV38OmIjFicn1s%2Fz%2FjelsfLfXgxRzpcRX6wc0r5jEYQLBpBil%2FKFOah6jVoyuMSXGueFZJcA3VfLYcU6czqm%2FFtpO979hUrT0GPUuOA%2BsERyZgkY29coWM67auNfGlNJXHeWoO5V4JTpESOrbRzayiTtnwRyiWU1NRyFZIxrqFM4FErIxBzcZn&X-Amz-Signature=4879310c11d1eca56f1e8324e3547a27385cc281d3185f6cd9cdabdda3f54392&X-Amz-SignedHeaders=host&x-id=GetObject)
