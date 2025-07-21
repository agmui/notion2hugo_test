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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DVULN5B%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERT7WNr9Ok%2F7R%2Bqxzwm9%2BGMIH8YaWW6Xzh7QFVx4uC2AiEApXEiW6ukKa1cv%2BAQfuq%2FcRGWvnfis8yU4k7bu2%2FlChsqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRfYhGBr%2F9qXwZK0SrcA8L%2BIQAl7YMTWyNZPUoQIz4aNsdCUNzR4VJT2L9WZ8%2B62jfHT%2FQSXyjOri7OPTyO18QRRDdsu9sIGa2ugMoWPugiaCX8ulMnakCP%2FkH8vftqUqOlhgdk7eVWdfxEtr3eAjrFoXO90X7cUEzJo5m1KXaVJ8mhOn7yKXC07rhSRSVyND2V7%2FoXQdaIPTBTkLITFaDA3lKPXI9YTehQD6Ict6fBc1%2BFOdXrm%2B15tNvnTCawrh2o%2FT%2BbN%2FBwNKYZpNmzdgWN487%2B7nAgVbAs8Cc96hsocpSz8pp4Pmv1tzj%2FGM%2FfVCl9Qb8N64sbZewuXkKtmO1NQNeAPlg58SCu8k%2Bo5qZG1xWzf6Zs19pqrhn6D0XKkWa%2FgV%2B4n2vdrm7doKV7lREGqU2ElgjgKBv9RRZvjW20Qz0vENQHmWnpOKkP0Qnynap5o6dXfzuo9VYLspAJlEJtXcPJKSLz0GQb8INDN8CEP1CrUMtx6%2BVmDz9C0KTsjIRvz5LWP7po2NMwLivquOJbJMn02h6vT1jD60MUscyUut4XoIDOvXh%2FAIVJxbcylY4a6RtijWgWEBAhGgUGBX%2BJ0hykdZYxfSnzxR%2BvhNlpc0LIuzH816%2FVLAJMbtG8lFb05VJxJLGxtkJmMIn5%2BMMGOqUBsNfoBGNZMIpN0hdjUmF22bHCif7VlOyxAI82%2F%2FzEgU1i2IbDRVs3vN8Qjc3%2Fde8%2BZtMmTkuBelz8Pu9yFg1PM%2B9nI4L6mXbAT8i%2FGfV1dY%2FOZRN4najyN0hj5pMg56PZxhWyCWhzk6Zd%2F%2B0pm3aEQBbLaQBrcytn2OuUeGHrFZjdA%2BquWCCI2OjMrH0TLHw%2FPlxRlNlVyZzXKxjtc5ppRcAxwBDt&X-Amz-Signature=131a5b73be8c4189403a9539cb4712398611520e89263bea7bb92b69fe39d4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DVULN5B%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERT7WNr9Ok%2F7R%2Bqxzwm9%2BGMIH8YaWW6Xzh7QFVx4uC2AiEApXEiW6ukKa1cv%2BAQfuq%2FcRGWvnfis8yU4k7bu2%2FlChsqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRfYhGBr%2F9qXwZK0SrcA8L%2BIQAl7YMTWyNZPUoQIz4aNsdCUNzR4VJT2L9WZ8%2B62jfHT%2FQSXyjOri7OPTyO18QRRDdsu9sIGa2ugMoWPugiaCX8ulMnakCP%2FkH8vftqUqOlhgdk7eVWdfxEtr3eAjrFoXO90X7cUEzJo5m1KXaVJ8mhOn7yKXC07rhSRSVyND2V7%2FoXQdaIPTBTkLITFaDA3lKPXI9YTehQD6Ict6fBc1%2BFOdXrm%2B15tNvnTCawrh2o%2FT%2BbN%2FBwNKYZpNmzdgWN487%2B7nAgVbAs8Cc96hsocpSz8pp4Pmv1tzj%2FGM%2FfVCl9Qb8N64sbZewuXkKtmO1NQNeAPlg58SCu8k%2Bo5qZG1xWzf6Zs19pqrhn6D0XKkWa%2FgV%2B4n2vdrm7doKV7lREGqU2ElgjgKBv9RRZvjW20Qz0vENQHmWnpOKkP0Qnynap5o6dXfzuo9VYLspAJlEJtXcPJKSLz0GQb8INDN8CEP1CrUMtx6%2BVmDz9C0KTsjIRvz5LWP7po2NMwLivquOJbJMn02h6vT1jD60MUscyUut4XoIDOvXh%2FAIVJxbcylY4a6RtijWgWEBAhGgUGBX%2BJ0hykdZYxfSnzxR%2BvhNlpc0LIuzH816%2FVLAJMbtG8lFb05VJxJLGxtkJmMIn5%2BMMGOqUBsNfoBGNZMIpN0hdjUmF22bHCif7VlOyxAI82%2F%2FzEgU1i2IbDRVs3vN8Qjc3%2Fde8%2BZtMmTkuBelz8Pu9yFg1PM%2B9nI4L6mXbAT8i%2FGfV1dY%2FOZRN4najyN0hj5pMg56PZxhWyCWhzk6Zd%2F%2B0pm3aEQBbLaQBrcytn2OuUeGHrFZjdA%2BquWCCI2OjMrH0TLHw%2FPlxRlNlVyZzXKxjtc5ppRcAxwBDt&X-Amz-Signature=b67ec1e2add90eafbdc872a2f9fe990cffe8dc2297f03d6ddaf0c3633df045c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DVULN5B%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERT7WNr9Ok%2F7R%2Bqxzwm9%2BGMIH8YaWW6Xzh7QFVx4uC2AiEApXEiW6ukKa1cv%2BAQfuq%2FcRGWvnfis8yU4k7bu2%2FlChsqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRfYhGBr%2F9qXwZK0SrcA8L%2BIQAl7YMTWyNZPUoQIz4aNsdCUNzR4VJT2L9WZ8%2B62jfHT%2FQSXyjOri7OPTyO18QRRDdsu9sIGa2ugMoWPugiaCX8ulMnakCP%2FkH8vftqUqOlhgdk7eVWdfxEtr3eAjrFoXO90X7cUEzJo5m1KXaVJ8mhOn7yKXC07rhSRSVyND2V7%2FoXQdaIPTBTkLITFaDA3lKPXI9YTehQD6Ict6fBc1%2BFOdXrm%2B15tNvnTCawrh2o%2FT%2BbN%2FBwNKYZpNmzdgWN487%2B7nAgVbAs8Cc96hsocpSz8pp4Pmv1tzj%2FGM%2FfVCl9Qb8N64sbZewuXkKtmO1NQNeAPlg58SCu8k%2Bo5qZG1xWzf6Zs19pqrhn6D0XKkWa%2FgV%2B4n2vdrm7doKV7lREGqU2ElgjgKBv9RRZvjW20Qz0vENQHmWnpOKkP0Qnynap5o6dXfzuo9VYLspAJlEJtXcPJKSLz0GQb8INDN8CEP1CrUMtx6%2BVmDz9C0KTsjIRvz5LWP7po2NMwLivquOJbJMn02h6vT1jD60MUscyUut4XoIDOvXh%2FAIVJxbcylY4a6RtijWgWEBAhGgUGBX%2BJ0hykdZYxfSnzxR%2BvhNlpc0LIuzH816%2FVLAJMbtG8lFb05VJxJLGxtkJmMIn5%2BMMGOqUBsNfoBGNZMIpN0hdjUmF22bHCif7VlOyxAI82%2F%2FzEgU1i2IbDRVs3vN8Qjc3%2Fde8%2BZtMmTkuBelz8Pu9yFg1PM%2B9nI4L6mXbAT8i%2FGfV1dY%2FOZRN4najyN0hj5pMg56PZxhWyCWhzk6Zd%2F%2B0pm3aEQBbLaQBrcytn2OuUeGHrFZjdA%2BquWCCI2OjMrH0TLHw%2FPlxRlNlVyZzXKxjtc5ppRcAxwBDt&X-Amz-Signature=4c9ef107126f963b5b0af40d266ac8371510e770c9b9cf514c154baa6bb29690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DVULN5B%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERT7WNr9Ok%2F7R%2Bqxzwm9%2BGMIH8YaWW6Xzh7QFVx4uC2AiEApXEiW6ukKa1cv%2BAQfuq%2FcRGWvnfis8yU4k7bu2%2FlChsqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRfYhGBr%2F9qXwZK0SrcA8L%2BIQAl7YMTWyNZPUoQIz4aNsdCUNzR4VJT2L9WZ8%2B62jfHT%2FQSXyjOri7OPTyO18QRRDdsu9sIGa2ugMoWPugiaCX8ulMnakCP%2FkH8vftqUqOlhgdk7eVWdfxEtr3eAjrFoXO90X7cUEzJo5m1KXaVJ8mhOn7yKXC07rhSRSVyND2V7%2FoXQdaIPTBTkLITFaDA3lKPXI9YTehQD6Ict6fBc1%2BFOdXrm%2B15tNvnTCawrh2o%2FT%2BbN%2FBwNKYZpNmzdgWN487%2B7nAgVbAs8Cc96hsocpSz8pp4Pmv1tzj%2FGM%2FfVCl9Qb8N64sbZewuXkKtmO1NQNeAPlg58SCu8k%2Bo5qZG1xWzf6Zs19pqrhn6D0XKkWa%2FgV%2B4n2vdrm7doKV7lREGqU2ElgjgKBv9RRZvjW20Qz0vENQHmWnpOKkP0Qnynap5o6dXfzuo9VYLspAJlEJtXcPJKSLz0GQb8INDN8CEP1CrUMtx6%2BVmDz9C0KTsjIRvz5LWP7po2NMwLivquOJbJMn02h6vT1jD60MUscyUut4XoIDOvXh%2FAIVJxbcylY4a6RtijWgWEBAhGgUGBX%2BJ0hykdZYxfSnzxR%2BvhNlpc0LIuzH816%2FVLAJMbtG8lFb05VJxJLGxtkJmMIn5%2BMMGOqUBsNfoBGNZMIpN0hdjUmF22bHCif7VlOyxAI82%2F%2FzEgU1i2IbDRVs3vN8Qjc3%2Fde8%2BZtMmTkuBelz8Pu9yFg1PM%2B9nI4L6mXbAT8i%2FGfV1dY%2FOZRN4najyN0hj5pMg56PZxhWyCWhzk6Zd%2F%2B0pm3aEQBbLaQBrcytn2OuUeGHrFZjdA%2BquWCCI2OjMrH0TLHw%2FPlxRlNlVyZzXKxjtc5ppRcAxwBDt&X-Amz-Signature=04efcb9c96ef95f23f6f8633c335540de1864204f60580d7aed3eb8f0bd78d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DVULN5B%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERT7WNr9Ok%2F7R%2Bqxzwm9%2BGMIH8YaWW6Xzh7QFVx4uC2AiEApXEiW6ukKa1cv%2BAQfuq%2FcRGWvnfis8yU4k7bu2%2FlChsqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRfYhGBr%2F9qXwZK0SrcA8L%2BIQAl7YMTWyNZPUoQIz4aNsdCUNzR4VJT2L9WZ8%2B62jfHT%2FQSXyjOri7OPTyO18QRRDdsu9sIGa2ugMoWPugiaCX8ulMnakCP%2FkH8vftqUqOlhgdk7eVWdfxEtr3eAjrFoXO90X7cUEzJo5m1KXaVJ8mhOn7yKXC07rhSRSVyND2V7%2FoXQdaIPTBTkLITFaDA3lKPXI9YTehQD6Ict6fBc1%2BFOdXrm%2B15tNvnTCawrh2o%2FT%2BbN%2FBwNKYZpNmzdgWN487%2B7nAgVbAs8Cc96hsocpSz8pp4Pmv1tzj%2FGM%2FfVCl9Qb8N64sbZewuXkKtmO1NQNeAPlg58SCu8k%2Bo5qZG1xWzf6Zs19pqrhn6D0XKkWa%2FgV%2B4n2vdrm7doKV7lREGqU2ElgjgKBv9RRZvjW20Qz0vENQHmWnpOKkP0Qnynap5o6dXfzuo9VYLspAJlEJtXcPJKSLz0GQb8INDN8CEP1CrUMtx6%2BVmDz9C0KTsjIRvz5LWP7po2NMwLivquOJbJMn02h6vT1jD60MUscyUut4XoIDOvXh%2FAIVJxbcylY4a6RtijWgWEBAhGgUGBX%2BJ0hykdZYxfSnzxR%2BvhNlpc0LIuzH816%2FVLAJMbtG8lFb05VJxJLGxtkJmMIn5%2BMMGOqUBsNfoBGNZMIpN0hdjUmF22bHCif7VlOyxAI82%2F%2FzEgU1i2IbDRVs3vN8Qjc3%2Fde8%2BZtMmTkuBelz8Pu9yFg1PM%2B9nI4L6mXbAT8i%2FGfV1dY%2FOZRN4najyN0hj5pMg56PZxhWyCWhzk6Zd%2F%2B0pm3aEQBbLaQBrcytn2OuUeGHrFZjdA%2BquWCCI2OjMrH0TLHw%2FPlxRlNlVyZzXKxjtc5ppRcAxwBDt&X-Amz-Signature=1ae48fe0df155d00fb5a0f19d34536398f9be71d113fc63f53cb550e74eaafce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DVULN5B%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERT7WNr9Ok%2F7R%2Bqxzwm9%2BGMIH8YaWW6Xzh7QFVx4uC2AiEApXEiW6ukKa1cv%2BAQfuq%2FcRGWvnfis8yU4k7bu2%2FlChsqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRfYhGBr%2F9qXwZK0SrcA8L%2BIQAl7YMTWyNZPUoQIz4aNsdCUNzR4VJT2L9WZ8%2B62jfHT%2FQSXyjOri7OPTyO18QRRDdsu9sIGa2ugMoWPugiaCX8ulMnakCP%2FkH8vftqUqOlhgdk7eVWdfxEtr3eAjrFoXO90X7cUEzJo5m1KXaVJ8mhOn7yKXC07rhSRSVyND2V7%2FoXQdaIPTBTkLITFaDA3lKPXI9YTehQD6Ict6fBc1%2BFOdXrm%2B15tNvnTCawrh2o%2FT%2BbN%2FBwNKYZpNmzdgWN487%2B7nAgVbAs8Cc96hsocpSz8pp4Pmv1tzj%2FGM%2FfVCl9Qb8N64sbZewuXkKtmO1NQNeAPlg58SCu8k%2Bo5qZG1xWzf6Zs19pqrhn6D0XKkWa%2FgV%2B4n2vdrm7doKV7lREGqU2ElgjgKBv9RRZvjW20Qz0vENQHmWnpOKkP0Qnynap5o6dXfzuo9VYLspAJlEJtXcPJKSLz0GQb8INDN8CEP1CrUMtx6%2BVmDz9C0KTsjIRvz5LWP7po2NMwLivquOJbJMn02h6vT1jD60MUscyUut4XoIDOvXh%2FAIVJxbcylY4a6RtijWgWEBAhGgUGBX%2BJ0hykdZYxfSnzxR%2BvhNlpc0LIuzH816%2FVLAJMbtG8lFb05VJxJLGxtkJmMIn5%2BMMGOqUBsNfoBGNZMIpN0hdjUmF22bHCif7VlOyxAI82%2F%2FzEgU1i2IbDRVs3vN8Qjc3%2Fde8%2BZtMmTkuBelz8Pu9yFg1PM%2B9nI4L6mXbAT8i%2FGfV1dY%2FOZRN4najyN0hj5pMg56PZxhWyCWhzk6Zd%2F%2B0pm3aEQBbLaQBrcytn2OuUeGHrFZjdA%2BquWCCI2OjMrH0TLHw%2FPlxRlNlVyZzXKxjtc5ppRcAxwBDt&X-Amz-Signature=c55d6764c09453a5accf6b8302d42ae209b09fe2bd78ecc19ec75d47a4703c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
