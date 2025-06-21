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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLT5VER%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRO5ER6b2%2FVZ0DM5D6E9omx9AGAhZ%2F1CieYRN6NysMKAiAp5HcUOYvcG55QnMZMwLzioIBVuyUg7twTMvwqIoA2SiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHi%2FzvClTAhZEs%2FgpKtwDrZeWldQ%2BDvBVwTZFQt54v1ZzDyINX%2FXPrbc5Lbydo1P7ak4acqGUeCv%2BH8dzz0LDzYXc33XCZL4MVrCTlitqGV9PYWsOUNjnj2J7BJv9T%2FeVKOjMsKjkpRRCY9EIWnmUfOhEE5OZ2vCJS5MQ1OKJ%2FcveK8BWSyP3KRldrTIZNGOY%2BRasMktokrKRbYW7whufBp%2Fy9XEvJSwpsjxki%2Bb4Zdk%2BFqqzrAuIDzvRMXruiHO%2BwoZRnbdZUJkwNlzGAn%2FzHV2KvCpjMbSJEfVqjLqdkLV4tvVU0wRULMXCm68IGcL5kiGDdZ9Xm2SuPTDVytI5jQzSYI7Spb4FjXvXF7PmRuhYvuDuoXYRnJHZtsYPCnY%2FWNha%2F2vhQBqijQw6%2Fh2MXMZARw5tMcJRhh2tYZUICXl09c14fCusWm0D7iQLA8OpuW5fZnf%2FlJ40DgimqokugqgKBc5719AQslh34%2FS8jQDZpMi43BGW2WBaOuvg1%2BaLECgWonH%2FKABMzL0ilDJHPmhYz5jt3ytbhHAIJaj%2BuZcbMhXqJPyy8X61Qr9cZdx9kBdZH%2BZjrR3mGMKdtj8eeWxDLkjn%2FUPuIB9XEFP3alPOH0tBNUQ9Lev2xH7uR%2BzfInjdrtJZ63OKPZ4wyZzXwgY6pgHNNr%2FVbidmtqgS3vI9S7NCGtOSSQab7NmJgrM4vCeHnWz7cWDFnF9jZgMuyRHVvwCY9WOBOTAMdFgtl3%2BFehQO8I0hFkjKgqTk%2Bwr3Yy6mT5%2BCWfr3XSOvCWiLLHv2ZAjdZoXyu%2BARr1pnkBGtHKkRoeiqUHK3JxRkptsoQzatktEz1vs3hTRcKGl1pDMzJhN7kxFKDO6s7CgG4g1EuiJ%2F9U5Tgixd&X-Amz-Signature=6bc86c409e908d81cfbde2e5dcf295016b8c86b48bd055e08641ea74d5e5e482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLT5VER%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRO5ER6b2%2FVZ0DM5D6E9omx9AGAhZ%2F1CieYRN6NysMKAiAp5HcUOYvcG55QnMZMwLzioIBVuyUg7twTMvwqIoA2SiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHi%2FzvClTAhZEs%2FgpKtwDrZeWldQ%2BDvBVwTZFQt54v1ZzDyINX%2FXPrbc5Lbydo1P7ak4acqGUeCv%2BH8dzz0LDzYXc33XCZL4MVrCTlitqGV9PYWsOUNjnj2J7BJv9T%2FeVKOjMsKjkpRRCY9EIWnmUfOhEE5OZ2vCJS5MQ1OKJ%2FcveK8BWSyP3KRldrTIZNGOY%2BRasMktokrKRbYW7whufBp%2Fy9XEvJSwpsjxki%2Bb4Zdk%2BFqqzrAuIDzvRMXruiHO%2BwoZRnbdZUJkwNlzGAn%2FzHV2KvCpjMbSJEfVqjLqdkLV4tvVU0wRULMXCm68IGcL5kiGDdZ9Xm2SuPTDVytI5jQzSYI7Spb4FjXvXF7PmRuhYvuDuoXYRnJHZtsYPCnY%2FWNha%2F2vhQBqijQw6%2Fh2MXMZARw5tMcJRhh2tYZUICXl09c14fCusWm0D7iQLA8OpuW5fZnf%2FlJ40DgimqokugqgKBc5719AQslh34%2FS8jQDZpMi43BGW2WBaOuvg1%2BaLECgWonH%2FKABMzL0ilDJHPmhYz5jt3ytbhHAIJaj%2BuZcbMhXqJPyy8X61Qr9cZdx9kBdZH%2BZjrR3mGMKdtj8eeWxDLkjn%2FUPuIB9XEFP3alPOH0tBNUQ9Lev2xH7uR%2BzfInjdrtJZ63OKPZ4wyZzXwgY6pgHNNr%2FVbidmtqgS3vI9S7NCGtOSSQab7NmJgrM4vCeHnWz7cWDFnF9jZgMuyRHVvwCY9WOBOTAMdFgtl3%2BFehQO8I0hFkjKgqTk%2Bwr3Yy6mT5%2BCWfr3XSOvCWiLLHv2ZAjdZoXyu%2BARr1pnkBGtHKkRoeiqUHK3JxRkptsoQzatktEz1vs3hTRcKGl1pDMzJhN7kxFKDO6s7CgG4g1EuiJ%2F9U5Tgixd&X-Amz-Signature=f9860c11426e336b4913636cba0c6ea171ac38e4c6714acee8f572d328a27712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLT5VER%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRO5ER6b2%2FVZ0DM5D6E9omx9AGAhZ%2F1CieYRN6NysMKAiAp5HcUOYvcG55QnMZMwLzioIBVuyUg7twTMvwqIoA2SiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHi%2FzvClTAhZEs%2FgpKtwDrZeWldQ%2BDvBVwTZFQt54v1ZzDyINX%2FXPrbc5Lbydo1P7ak4acqGUeCv%2BH8dzz0LDzYXc33XCZL4MVrCTlitqGV9PYWsOUNjnj2J7BJv9T%2FeVKOjMsKjkpRRCY9EIWnmUfOhEE5OZ2vCJS5MQ1OKJ%2FcveK8BWSyP3KRldrTIZNGOY%2BRasMktokrKRbYW7whufBp%2Fy9XEvJSwpsjxki%2Bb4Zdk%2BFqqzrAuIDzvRMXruiHO%2BwoZRnbdZUJkwNlzGAn%2FzHV2KvCpjMbSJEfVqjLqdkLV4tvVU0wRULMXCm68IGcL5kiGDdZ9Xm2SuPTDVytI5jQzSYI7Spb4FjXvXF7PmRuhYvuDuoXYRnJHZtsYPCnY%2FWNha%2F2vhQBqijQw6%2Fh2MXMZARw5tMcJRhh2tYZUICXl09c14fCusWm0D7iQLA8OpuW5fZnf%2FlJ40DgimqokugqgKBc5719AQslh34%2FS8jQDZpMi43BGW2WBaOuvg1%2BaLECgWonH%2FKABMzL0ilDJHPmhYz5jt3ytbhHAIJaj%2BuZcbMhXqJPyy8X61Qr9cZdx9kBdZH%2BZjrR3mGMKdtj8eeWxDLkjn%2FUPuIB9XEFP3alPOH0tBNUQ9Lev2xH7uR%2BzfInjdrtJZ63OKPZ4wyZzXwgY6pgHNNr%2FVbidmtqgS3vI9S7NCGtOSSQab7NmJgrM4vCeHnWz7cWDFnF9jZgMuyRHVvwCY9WOBOTAMdFgtl3%2BFehQO8I0hFkjKgqTk%2Bwr3Yy6mT5%2BCWfr3XSOvCWiLLHv2ZAjdZoXyu%2BARr1pnkBGtHKkRoeiqUHK3JxRkptsoQzatktEz1vs3hTRcKGl1pDMzJhN7kxFKDO6s7CgG4g1EuiJ%2F9U5Tgixd&X-Amz-Signature=cd5a84340a5f535efc2d06bd3d715f57ad3912fe70b4d7a8bb22e80ff9291244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLT5VER%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRO5ER6b2%2FVZ0DM5D6E9omx9AGAhZ%2F1CieYRN6NysMKAiAp5HcUOYvcG55QnMZMwLzioIBVuyUg7twTMvwqIoA2SiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHi%2FzvClTAhZEs%2FgpKtwDrZeWldQ%2BDvBVwTZFQt54v1ZzDyINX%2FXPrbc5Lbydo1P7ak4acqGUeCv%2BH8dzz0LDzYXc33XCZL4MVrCTlitqGV9PYWsOUNjnj2J7BJv9T%2FeVKOjMsKjkpRRCY9EIWnmUfOhEE5OZ2vCJS5MQ1OKJ%2FcveK8BWSyP3KRldrTIZNGOY%2BRasMktokrKRbYW7whufBp%2Fy9XEvJSwpsjxki%2Bb4Zdk%2BFqqzrAuIDzvRMXruiHO%2BwoZRnbdZUJkwNlzGAn%2FzHV2KvCpjMbSJEfVqjLqdkLV4tvVU0wRULMXCm68IGcL5kiGDdZ9Xm2SuPTDVytI5jQzSYI7Spb4FjXvXF7PmRuhYvuDuoXYRnJHZtsYPCnY%2FWNha%2F2vhQBqijQw6%2Fh2MXMZARw5tMcJRhh2tYZUICXl09c14fCusWm0D7iQLA8OpuW5fZnf%2FlJ40DgimqokugqgKBc5719AQslh34%2FS8jQDZpMi43BGW2WBaOuvg1%2BaLECgWonH%2FKABMzL0ilDJHPmhYz5jt3ytbhHAIJaj%2BuZcbMhXqJPyy8X61Qr9cZdx9kBdZH%2BZjrR3mGMKdtj8eeWxDLkjn%2FUPuIB9XEFP3alPOH0tBNUQ9Lev2xH7uR%2BzfInjdrtJZ63OKPZ4wyZzXwgY6pgHNNr%2FVbidmtqgS3vI9S7NCGtOSSQab7NmJgrM4vCeHnWz7cWDFnF9jZgMuyRHVvwCY9WOBOTAMdFgtl3%2BFehQO8I0hFkjKgqTk%2Bwr3Yy6mT5%2BCWfr3XSOvCWiLLHv2ZAjdZoXyu%2BARr1pnkBGtHKkRoeiqUHK3JxRkptsoQzatktEz1vs3hTRcKGl1pDMzJhN7kxFKDO6s7CgG4g1EuiJ%2F9U5Tgixd&X-Amz-Signature=c41552f588a203fad6bf6a5ea85acf5a8829c2b0bad3fe2b57ab75ed35f3ec53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLT5VER%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRO5ER6b2%2FVZ0DM5D6E9omx9AGAhZ%2F1CieYRN6NysMKAiAp5HcUOYvcG55QnMZMwLzioIBVuyUg7twTMvwqIoA2SiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHi%2FzvClTAhZEs%2FgpKtwDrZeWldQ%2BDvBVwTZFQt54v1ZzDyINX%2FXPrbc5Lbydo1P7ak4acqGUeCv%2BH8dzz0LDzYXc33XCZL4MVrCTlitqGV9PYWsOUNjnj2J7BJv9T%2FeVKOjMsKjkpRRCY9EIWnmUfOhEE5OZ2vCJS5MQ1OKJ%2FcveK8BWSyP3KRldrTIZNGOY%2BRasMktokrKRbYW7whufBp%2Fy9XEvJSwpsjxki%2Bb4Zdk%2BFqqzrAuIDzvRMXruiHO%2BwoZRnbdZUJkwNlzGAn%2FzHV2KvCpjMbSJEfVqjLqdkLV4tvVU0wRULMXCm68IGcL5kiGDdZ9Xm2SuPTDVytI5jQzSYI7Spb4FjXvXF7PmRuhYvuDuoXYRnJHZtsYPCnY%2FWNha%2F2vhQBqijQw6%2Fh2MXMZARw5tMcJRhh2tYZUICXl09c14fCusWm0D7iQLA8OpuW5fZnf%2FlJ40DgimqokugqgKBc5719AQslh34%2FS8jQDZpMi43BGW2WBaOuvg1%2BaLECgWonH%2FKABMzL0ilDJHPmhYz5jt3ytbhHAIJaj%2BuZcbMhXqJPyy8X61Qr9cZdx9kBdZH%2BZjrR3mGMKdtj8eeWxDLkjn%2FUPuIB9XEFP3alPOH0tBNUQ9Lev2xH7uR%2BzfInjdrtJZ63OKPZ4wyZzXwgY6pgHNNr%2FVbidmtqgS3vI9S7NCGtOSSQab7NmJgrM4vCeHnWz7cWDFnF9jZgMuyRHVvwCY9WOBOTAMdFgtl3%2BFehQO8I0hFkjKgqTk%2Bwr3Yy6mT5%2BCWfr3XSOvCWiLLHv2ZAjdZoXyu%2BARr1pnkBGtHKkRoeiqUHK3JxRkptsoQzatktEz1vs3hTRcKGl1pDMzJhN7kxFKDO6s7CgG4g1EuiJ%2F9U5Tgixd&X-Amz-Signature=656bcb725f7882d79ffe5bfc2752e9742b3cb6130271df93a36fd70ee63adedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLT5VER%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRO5ER6b2%2FVZ0DM5D6E9omx9AGAhZ%2F1CieYRN6NysMKAiAp5HcUOYvcG55QnMZMwLzioIBVuyUg7twTMvwqIoA2SiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHi%2FzvClTAhZEs%2FgpKtwDrZeWldQ%2BDvBVwTZFQt54v1ZzDyINX%2FXPrbc5Lbydo1P7ak4acqGUeCv%2BH8dzz0LDzYXc33XCZL4MVrCTlitqGV9PYWsOUNjnj2J7BJv9T%2FeVKOjMsKjkpRRCY9EIWnmUfOhEE5OZ2vCJS5MQ1OKJ%2FcveK8BWSyP3KRldrTIZNGOY%2BRasMktokrKRbYW7whufBp%2Fy9XEvJSwpsjxki%2Bb4Zdk%2BFqqzrAuIDzvRMXruiHO%2BwoZRnbdZUJkwNlzGAn%2FzHV2KvCpjMbSJEfVqjLqdkLV4tvVU0wRULMXCm68IGcL5kiGDdZ9Xm2SuPTDVytI5jQzSYI7Spb4FjXvXF7PmRuhYvuDuoXYRnJHZtsYPCnY%2FWNha%2F2vhQBqijQw6%2Fh2MXMZARw5tMcJRhh2tYZUICXl09c14fCusWm0D7iQLA8OpuW5fZnf%2FlJ40DgimqokugqgKBc5719AQslh34%2FS8jQDZpMi43BGW2WBaOuvg1%2BaLECgWonH%2FKABMzL0ilDJHPmhYz5jt3ytbhHAIJaj%2BuZcbMhXqJPyy8X61Qr9cZdx9kBdZH%2BZjrR3mGMKdtj8eeWxDLkjn%2FUPuIB9XEFP3alPOH0tBNUQ9Lev2xH7uR%2BzfInjdrtJZ63OKPZ4wyZzXwgY6pgHNNr%2FVbidmtqgS3vI9S7NCGtOSSQab7NmJgrM4vCeHnWz7cWDFnF9jZgMuyRHVvwCY9WOBOTAMdFgtl3%2BFehQO8I0hFkjKgqTk%2Bwr3Yy6mT5%2BCWfr3XSOvCWiLLHv2ZAjdZoXyu%2BARr1pnkBGtHKkRoeiqUHK3JxRkptsoQzatktEz1vs3hTRcKGl1pDMzJhN7kxFKDO6s7CgG4g1EuiJ%2F9U5Tgixd&X-Amz-Signature=0a86ca360a76db21dcd35c807ac9f8be3344e55c3ac829bd5b9ff7523ae064bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
