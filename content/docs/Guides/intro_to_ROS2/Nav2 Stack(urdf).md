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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYYNLCO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHBu2I%2FkS9%2BM9AdKNebI74f8JiEt9umrTDOUegJYdLgAIgcVXrguvSworMrWpgKy8wXMgnqi7vnmi8hap1LDl57R0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD83A5ZijowM%2BZpGircA5jAdKXTfsjcIrpw4jZcvazaTz4YAqIm1we1QRReub1o%2BrfwpPxRCBLvXowwQ7dEVChjrh2Oc7ItUpaAmFluYfYsYn5uJPJbpwtJq1NMZnggCGZJEWomyQwTQ9rcKDuGTAaVqDTmW80hQvbPTYCHwucMScFJ9Php5drmBr8IpAQlV1N75OuyCvA04UNQsLgki8BZw13P4y3i5Wyia%2Bq4LyUQH5Q6RduuJyXv5ITesj1735RH%2F2YZBXlWrCT90YGWj59FBmVbllj0PwUMoLo%2Fo32mwge5wHwCbiTWdHucgSRCg%2BGAvk4Irf9gVFs73iE9OT2nTZNeZ1IhlxJKHh58%2BxEGg2%2BX%2B2GBHl%2F0Y41kggdofqJB9cWIcLv%2FrnIONPHhB9ba6CFhyht19Amq57j4Mav%2BJmehsOYmq7eI62915F7Fde5YwJ1U%2BuozGeKzXmGWZOF1gNdPR9jNPBip13eFAYU6BQ2ncXdjuy8ZLI0Aptlp1AhiFGl4i7zfw09XR9RzaL9T5ZtswRz6G3pgfBTQiOVVu2Pz%2FPCDS486EHNS2q%2Frk9yBM%2F5aA3hp0F6xF%2FNtk%2BXoeXblFKkqBr75E5sAOsxt8RRxJm5eOagQlSCYf86kHqjxjMCwxSw0tbJjMJ3gxr4GOqUB42PoR%2B6NNBsveXlicF8nh83XZC65nEV0GYALH8bN67tuyQZbdd7dFtIar0mjENgfpesnXHTBU4fddsQfOjNYRpLe7blBe3t8E8KrYVuGKFQIc2KpUaqROgmk8w9tK9dwOP%2Bk5dqsdcvlhwrV9iXfwS%2BW4O1gdSZ1UJnjpz1oSAHju0ej2iGGDFK8jg6d8XUPk6b5Lk4mWa8%2FfFlLtGSVNwBc93D5&X-Amz-Signature=2e34f7e095806a1d61213254490d22ef5be45c6ff05c981ef3cdc8da1db79a10&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYYNLCO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHBu2I%2FkS9%2BM9AdKNebI74f8JiEt9umrTDOUegJYdLgAIgcVXrguvSworMrWpgKy8wXMgnqi7vnmi8hap1LDl57R0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD83A5ZijowM%2BZpGircA5jAdKXTfsjcIrpw4jZcvazaTz4YAqIm1we1QRReub1o%2BrfwpPxRCBLvXowwQ7dEVChjrh2Oc7ItUpaAmFluYfYsYn5uJPJbpwtJq1NMZnggCGZJEWomyQwTQ9rcKDuGTAaVqDTmW80hQvbPTYCHwucMScFJ9Php5drmBr8IpAQlV1N75OuyCvA04UNQsLgki8BZw13P4y3i5Wyia%2Bq4LyUQH5Q6RduuJyXv5ITesj1735RH%2F2YZBXlWrCT90YGWj59FBmVbllj0PwUMoLo%2Fo32mwge5wHwCbiTWdHucgSRCg%2BGAvk4Irf9gVFs73iE9OT2nTZNeZ1IhlxJKHh58%2BxEGg2%2BX%2B2GBHl%2F0Y41kggdofqJB9cWIcLv%2FrnIONPHhB9ba6CFhyht19Amq57j4Mav%2BJmehsOYmq7eI62915F7Fde5YwJ1U%2BuozGeKzXmGWZOF1gNdPR9jNPBip13eFAYU6BQ2ncXdjuy8ZLI0Aptlp1AhiFGl4i7zfw09XR9RzaL9T5ZtswRz6G3pgfBTQiOVVu2Pz%2FPCDS486EHNS2q%2Frk9yBM%2F5aA3hp0F6xF%2FNtk%2BXoeXblFKkqBr75E5sAOsxt8RRxJm5eOagQlSCYf86kHqjxjMCwxSw0tbJjMJ3gxr4GOqUB42PoR%2B6NNBsveXlicF8nh83XZC65nEV0GYALH8bN67tuyQZbdd7dFtIar0mjENgfpesnXHTBU4fddsQfOjNYRpLe7blBe3t8E8KrYVuGKFQIc2KpUaqROgmk8w9tK9dwOP%2Bk5dqsdcvlhwrV9iXfwS%2BW4O1gdSZ1UJnjpz1oSAHju0ej2iGGDFK8jg6d8XUPk6b5Lk4mWa8%2FfFlLtGSVNwBc93D5&X-Amz-Signature=aeb4c8aa41bede604b0a6c89729dc9d439b79bdde96cdcce009980a65150d397&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYYNLCO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHBu2I%2FkS9%2BM9AdKNebI74f8JiEt9umrTDOUegJYdLgAIgcVXrguvSworMrWpgKy8wXMgnqi7vnmi8hap1LDl57R0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD83A5ZijowM%2BZpGircA5jAdKXTfsjcIrpw4jZcvazaTz4YAqIm1we1QRReub1o%2BrfwpPxRCBLvXowwQ7dEVChjrh2Oc7ItUpaAmFluYfYsYn5uJPJbpwtJq1NMZnggCGZJEWomyQwTQ9rcKDuGTAaVqDTmW80hQvbPTYCHwucMScFJ9Php5drmBr8IpAQlV1N75OuyCvA04UNQsLgki8BZw13P4y3i5Wyia%2Bq4LyUQH5Q6RduuJyXv5ITesj1735RH%2F2YZBXlWrCT90YGWj59FBmVbllj0PwUMoLo%2Fo32mwge5wHwCbiTWdHucgSRCg%2BGAvk4Irf9gVFs73iE9OT2nTZNeZ1IhlxJKHh58%2BxEGg2%2BX%2B2GBHl%2F0Y41kggdofqJB9cWIcLv%2FrnIONPHhB9ba6CFhyht19Amq57j4Mav%2BJmehsOYmq7eI62915F7Fde5YwJ1U%2BuozGeKzXmGWZOF1gNdPR9jNPBip13eFAYU6BQ2ncXdjuy8ZLI0Aptlp1AhiFGl4i7zfw09XR9RzaL9T5ZtswRz6G3pgfBTQiOVVu2Pz%2FPCDS486EHNS2q%2Frk9yBM%2F5aA3hp0F6xF%2FNtk%2BXoeXblFKkqBr75E5sAOsxt8RRxJm5eOagQlSCYf86kHqjxjMCwxSw0tbJjMJ3gxr4GOqUB42PoR%2B6NNBsveXlicF8nh83XZC65nEV0GYALH8bN67tuyQZbdd7dFtIar0mjENgfpesnXHTBU4fddsQfOjNYRpLe7blBe3t8E8KrYVuGKFQIc2KpUaqROgmk8w9tK9dwOP%2Bk5dqsdcvlhwrV9iXfwS%2BW4O1gdSZ1UJnjpz1oSAHju0ej2iGGDFK8jg6d8XUPk6b5Lk4mWa8%2FfFlLtGSVNwBc93D5&X-Amz-Signature=4827711b6d1630f154fc6d6444d24c32f660a2373ed3697c87df7520b97df55b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYYNLCO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHBu2I%2FkS9%2BM9AdKNebI74f8JiEt9umrTDOUegJYdLgAIgcVXrguvSworMrWpgKy8wXMgnqi7vnmi8hap1LDl57R0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD83A5ZijowM%2BZpGircA5jAdKXTfsjcIrpw4jZcvazaTz4YAqIm1we1QRReub1o%2BrfwpPxRCBLvXowwQ7dEVChjrh2Oc7ItUpaAmFluYfYsYn5uJPJbpwtJq1NMZnggCGZJEWomyQwTQ9rcKDuGTAaVqDTmW80hQvbPTYCHwucMScFJ9Php5drmBr8IpAQlV1N75OuyCvA04UNQsLgki8BZw13P4y3i5Wyia%2Bq4LyUQH5Q6RduuJyXv5ITesj1735RH%2F2YZBXlWrCT90YGWj59FBmVbllj0PwUMoLo%2Fo32mwge5wHwCbiTWdHucgSRCg%2BGAvk4Irf9gVFs73iE9OT2nTZNeZ1IhlxJKHh58%2BxEGg2%2BX%2B2GBHl%2F0Y41kggdofqJB9cWIcLv%2FrnIONPHhB9ba6CFhyht19Amq57j4Mav%2BJmehsOYmq7eI62915F7Fde5YwJ1U%2BuozGeKzXmGWZOF1gNdPR9jNPBip13eFAYU6BQ2ncXdjuy8ZLI0Aptlp1AhiFGl4i7zfw09XR9RzaL9T5ZtswRz6G3pgfBTQiOVVu2Pz%2FPCDS486EHNS2q%2Frk9yBM%2F5aA3hp0F6xF%2FNtk%2BXoeXblFKkqBr75E5sAOsxt8RRxJm5eOagQlSCYf86kHqjxjMCwxSw0tbJjMJ3gxr4GOqUB42PoR%2B6NNBsveXlicF8nh83XZC65nEV0GYALH8bN67tuyQZbdd7dFtIar0mjENgfpesnXHTBU4fddsQfOjNYRpLe7blBe3t8E8KrYVuGKFQIc2KpUaqROgmk8w9tK9dwOP%2Bk5dqsdcvlhwrV9iXfwS%2BW4O1gdSZ1UJnjpz1oSAHju0ej2iGGDFK8jg6d8XUPk6b5Lk4mWa8%2FfFlLtGSVNwBc93D5&X-Amz-Signature=4857f802db102452e8bc717742fbea94a893883e384c7eebba58d2b26e656e36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYYNLCO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHBu2I%2FkS9%2BM9AdKNebI74f8JiEt9umrTDOUegJYdLgAIgcVXrguvSworMrWpgKy8wXMgnqi7vnmi8hap1LDl57R0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD83A5ZijowM%2BZpGircA5jAdKXTfsjcIrpw4jZcvazaTz4YAqIm1we1QRReub1o%2BrfwpPxRCBLvXowwQ7dEVChjrh2Oc7ItUpaAmFluYfYsYn5uJPJbpwtJq1NMZnggCGZJEWomyQwTQ9rcKDuGTAaVqDTmW80hQvbPTYCHwucMScFJ9Php5drmBr8IpAQlV1N75OuyCvA04UNQsLgki8BZw13P4y3i5Wyia%2Bq4LyUQH5Q6RduuJyXv5ITesj1735RH%2F2YZBXlWrCT90YGWj59FBmVbllj0PwUMoLo%2Fo32mwge5wHwCbiTWdHucgSRCg%2BGAvk4Irf9gVFs73iE9OT2nTZNeZ1IhlxJKHh58%2BxEGg2%2BX%2B2GBHl%2F0Y41kggdofqJB9cWIcLv%2FrnIONPHhB9ba6CFhyht19Amq57j4Mav%2BJmehsOYmq7eI62915F7Fde5YwJ1U%2BuozGeKzXmGWZOF1gNdPR9jNPBip13eFAYU6BQ2ncXdjuy8ZLI0Aptlp1AhiFGl4i7zfw09XR9RzaL9T5ZtswRz6G3pgfBTQiOVVu2Pz%2FPCDS486EHNS2q%2Frk9yBM%2F5aA3hp0F6xF%2FNtk%2BXoeXblFKkqBr75E5sAOsxt8RRxJm5eOagQlSCYf86kHqjxjMCwxSw0tbJjMJ3gxr4GOqUB42PoR%2B6NNBsveXlicF8nh83XZC65nEV0GYALH8bN67tuyQZbdd7dFtIar0mjENgfpesnXHTBU4fddsQfOjNYRpLe7blBe3t8E8KrYVuGKFQIc2KpUaqROgmk8w9tK9dwOP%2Bk5dqsdcvlhwrV9iXfwS%2BW4O1gdSZ1UJnjpz1oSAHju0ej2iGGDFK8jg6d8XUPk6b5Lk4mWa8%2FfFlLtGSVNwBc93D5&X-Amz-Signature=233c7745d44f000b441c133d57b916db2180811d7fda99ee5dfad1d4b4acdaf5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYYNLCO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDHBu2I%2FkS9%2BM9AdKNebI74f8JiEt9umrTDOUegJYdLgAIgcVXrguvSworMrWpgKy8wXMgnqi7vnmi8hap1LDl57R0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD83A5ZijowM%2BZpGircA5jAdKXTfsjcIrpw4jZcvazaTz4YAqIm1we1QRReub1o%2BrfwpPxRCBLvXowwQ7dEVChjrh2Oc7ItUpaAmFluYfYsYn5uJPJbpwtJq1NMZnggCGZJEWomyQwTQ9rcKDuGTAaVqDTmW80hQvbPTYCHwucMScFJ9Php5drmBr8IpAQlV1N75OuyCvA04UNQsLgki8BZw13P4y3i5Wyia%2Bq4LyUQH5Q6RduuJyXv5ITesj1735RH%2F2YZBXlWrCT90YGWj59FBmVbllj0PwUMoLo%2Fo32mwge5wHwCbiTWdHucgSRCg%2BGAvk4Irf9gVFs73iE9OT2nTZNeZ1IhlxJKHh58%2BxEGg2%2BX%2B2GBHl%2F0Y41kggdofqJB9cWIcLv%2FrnIONPHhB9ba6CFhyht19Amq57j4Mav%2BJmehsOYmq7eI62915F7Fde5YwJ1U%2BuozGeKzXmGWZOF1gNdPR9jNPBip13eFAYU6BQ2ncXdjuy8ZLI0Aptlp1AhiFGl4i7zfw09XR9RzaL9T5ZtswRz6G3pgfBTQiOVVu2Pz%2FPCDS486EHNS2q%2Frk9yBM%2F5aA3hp0F6xF%2FNtk%2BXoeXblFKkqBr75E5sAOsxt8RRxJm5eOagQlSCYf86kHqjxjMCwxSw0tbJjMJ3gxr4GOqUB42PoR%2B6NNBsveXlicF8nh83XZC65nEV0GYALH8bN67tuyQZbdd7dFtIar0mjENgfpesnXHTBU4fddsQfOjNYRpLe7blBe3t8E8KrYVuGKFQIc2KpUaqROgmk8w9tK9dwOP%2Bk5dqsdcvlhwrV9iXfwS%2BW4O1gdSZ1UJnjpz1oSAHju0ej2iGGDFK8jg6d8XUPk6b5Lk4mWa8%2FfFlLtGSVNwBc93D5&X-Amz-Signature=e0a905d900f4f9a48a8b66e2a244e60aac68950b5a8bb63953daaaa394db1753&X-Amz-SignedHeaders=host&x-id=GetObject)
