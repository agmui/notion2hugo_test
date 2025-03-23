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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNT2XPL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBEhQrv0OmR2j6N838PZu4H1lHo%2Fct5LYl9cO5ASKWIVAiAoYWV9EvwdR4THFZUOvBE2t8C9VqEowZ%2Bi%2FQX1Oki3JiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9kfl96pjdVCmEZobKtwDUMvZ26dK6%2BrZ0p5NMLB%2FSNBdjWR%2BC%2FizykQy3K3cl%2Fz0a8z4ePFuAu%2BJ%2FEWBYUc9C%2Bo2dR3syA4tNHnC148VnK0YX8GlIGJzROdWA0xoN6dVhj2lHJpRUsnxghntZhGq2fU%2B5TzrBS53p5nYW10PQji9Lj7gGGKsD1U7Qa6I1VIN%2Bz%2FxF0niyMJc%2FOC1yxAz6wnj%2Brrap6Xaj%2BFN57pisC37BL8lDMnTlCKPtfTh55zYySXq0zIJQnLblZNRWFLeSXN6m8JM%2Frtx%2FHBg%2BExm687IngrJmUHncyRSuugxGZxO8uC2HVkXi6SR3NGQr%2B9%2BSpJLe8AskhojHh8zBfdbKCJZG9igTL%2Bi%2BHO4gk4VBc3%2FBNqOA81DdOJ1%2BywUN7XWOMN9hto%2BPO2gSPTwiJYCz8BSUbhyCXBu%2BuDO1BHTusKPIcfhDh%2BACBqtevd0sw77qLM5j%2Bt5o4TtL4VN8cIUepfdPbDzMR1Ka%2B%2Bs0jY0jdSDotH%2FLskB2ns2EazqXbApsFUy69oAdxMaAgU7gN%2FPMG1mmfyvfAC%2FQeT77xbF2gU0hJDss0YHYzvAe7APtRGev7TGSHOIRx02jW%2BOLy0wt01SnqDpoP7TySJRUcS0DWtauBcB4QQ3qY%2FDYCswruP9vgY6pgGK1tz28N7aG8aumrnvhC1saigN2cWd68P92EkKlKbarMFXEl3HpI%2By4L0nEyY%2FWm96FANGITEAwzghWGBT%2BUA37Jx5GSTo8IZ4nYIqLRTDBKJK%2BkrHN9lFvhTPG1H3uJULjJBewklnAr0EapbEV43B6fjLu2mPyPMpd%2FXeHpnaLUVjRGxnz90apWqJHbf7s4NYWzjFyW4XWa1z4v6DBmv5Ylth0%2F87&X-Amz-Signature=c615b3df50eb1ebc34e0e53fd1d2f899ad14ae99815f826090d468629107f5f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNT2XPL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBEhQrv0OmR2j6N838PZu4H1lHo%2Fct5LYl9cO5ASKWIVAiAoYWV9EvwdR4THFZUOvBE2t8C9VqEowZ%2Bi%2FQX1Oki3JiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9kfl96pjdVCmEZobKtwDUMvZ26dK6%2BrZ0p5NMLB%2FSNBdjWR%2BC%2FizykQy3K3cl%2Fz0a8z4ePFuAu%2BJ%2FEWBYUc9C%2Bo2dR3syA4tNHnC148VnK0YX8GlIGJzROdWA0xoN6dVhj2lHJpRUsnxghntZhGq2fU%2B5TzrBS53p5nYW10PQji9Lj7gGGKsD1U7Qa6I1VIN%2Bz%2FxF0niyMJc%2FOC1yxAz6wnj%2Brrap6Xaj%2BFN57pisC37BL8lDMnTlCKPtfTh55zYySXq0zIJQnLblZNRWFLeSXN6m8JM%2Frtx%2FHBg%2BExm687IngrJmUHncyRSuugxGZxO8uC2HVkXi6SR3NGQr%2B9%2BSpJLe8AskhojHh8zBfdbKCJZG9igTL%2Bi%2BHO4gk4VBc3%2FBNqOA81DdOJ1%2BywUN7XWOMN9hto%2BPO2gSPTwiJYCz8BSUbhyCXBu%2BuDO1BHTusKPIcfhDh%2BACBqtevd0sw77qLM5j%2Bt5o4TtL4VN8cIUepfdPbDzMR1Ka%2B%2Bs0jY0jdSDotH%2FLskB2ns2EazqXbApsFUy69oAdxMaAgU7gN%2FPMG1mmfyvfAC%2FQeT77xbF2gU0hJDss0YHYzvAe7APtRGev7TGSHOIRx02jW%2BOLy0wt01SnqDpoP7TySJRUcS0DWtauBcB4QQ3qY%2FDYCswruP9vgY6pgGK1tz28N7aG8aumrnvhC1saigN2cWd68P92EkKlKbarMFXEl3HpI%2By4L0nEyY%2FWm96FANGITEAwzghWGBT%2BUA37Jx5GSTo8IZ4nYIqLRTDBKJK%2BkrHN9lFvhTPG1H3uJULjJBewklnAr0EapbEV43B6fjLu2mPyPMpd%2FXeHpnaLUVjRGxnz90apWqJHbf7s4NYWzjFyW4XWa1z4v6DBmv5Ylth0%2F87&X-Amz-Signature=bcfe103b5dc277a70671c5f2edd61ad8569641908ae8b02658bed35b3a7c9abf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNT2XPL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBEhQrv0OmR2j6N838PZu4H1lHo%2Fct5LYl9cO5ASKWIVAiAoYWV9EvwdR4THFZUOvBE2t8C9VqEowZ%2Bi%2FQX1Oki3JiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9kfl96pjdVCmEZobKtwDUMvZ26dK6%2BrZ0p5NMLB%2FSNBdjWR%2BC%2FizykQy3K3cl%2Fz0a8z4ePFuAu%2BJ%2FEWBYUc9C%2Bo2dR3syA4tNHnC148VnK0YX8GlIGJzROdWA0xoN6dVhj2lHJpRUsnxghntZhGq2fU%2B5TzrBS53p5nYW10PQji9Lj7gGGKsD1U7Qa6I1VIN%2Bz%2FxF0niyMJc%2FOC1yxAz6wnj%2Brrap6Xaj%2BFN57pisC37BL8lDMnTlCKPtfTh55zYySXq0zIJQnLblZNRWFLeSXN6m8JM%2Frtx%2FHBg%2BExm687IngrJmUHncyRSuugxGZxO8uC2HVkXi6SR3NGQr%2B9%2BSpJLe8AskhojHh8zBfdbKCJZG9igTL%2Bi%2BHO4gk4VBc3%2FBNqOA81DdOJ1%2BywUN7XWOMN9hto%2BPO2gSPTwiJYCz8BSUbhyCXBu%2BuDO1BHTusKPIcfhDh%2BACBqtevd0sw77qLM5j%2Bt5o4TtL4VN8cIUepfdPbDzMR1Ka%2B%2Bs0jY0jdSDotH%2FLskB2ns2EazqXbApsFUy69oAdxMaAgU7gN%2FPMG1mmfyvfAC%2FQeT77xbF2gU0hJDss0YHYzvAe7APtRGev7TGSHOIRx02jW%2BOLy0wt01SnqDpoP7TySJRUcS0DWtauBcB4QQ3qY%2FDYCswruP9vgY6pgGK1tz28N7aG8aumrnvhC1saigN2cWd68P92EkKlKbarMFXEl3HpI%2By4L0nEyY%2FWm96FANGITEAwzghWGBT%2BUA37Jx5GSTo8IZ4nYIqLRTDBKJK%2BkrHN9lFvhTPG1H3uJULjJBewklnAr0EapbEV43B6fjLu2mPyPMpd%2FXeHpnaLUVjRGxnz90apWqJHbf7s4NYWzjFyW4XWa1z4v6DBmv5Ylth0%2F87&X-Amz-Signature=875eb504ce07121c62a9b9ae1f6f184316799647086389d1fd4a69cad0e1da3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNT2XPL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBEhQrv0OmR2j6N838PZu4H1lHo%2Fct5LYl9cO5ASKWIVAiAoYWV9EvwdR4THFZUOvBE2t8C9VqEowZ%2Bi%2FQX1Oki3JiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9kfl96pjdVCmEZobKtwDUMvZ26dK6%2BrZ0p5NMLB%2FSNBdjWR%2BC%2FizykQy3K3cl%2Fz0a8z4ePFuAu%2BJ%2FEWBYUc9C%2Bo2dR3syA4tNHnC148VnK0YX8GlIGJzROdWA0xoN6dVhj2lHJpRUsnxghntZhGq2fU%2B5TzrBS53p5nYW10PQji9Lj7gGGKsD1U7Qa6I1VIN%2Bz%2FxF0niyMJc%2FOC1yxAz6wnj%2Brrap6Xaj%2BFN57pisC37BL8lDMnTlCKPtfTh55zYySXq0zIJQnLblZNRWFLeSXN6m8JM%2Frtx%2FHBg%2BExm687IngrJmUHncyRSuugxGZxO8uC2HVkXi6SR3NGQr%2B9%2BSpJLe8AskhojHh8zBfdbKCJZG9igTL%2Bi%2BHO4gk4VBc3%2FBNqOA81DdOJ1%2BywUN7XWOMN9hto%2BPO2gSPTwiJYCz8BSUbhyCXBu%2BuDO1BHTusKPIcfhDh%2BACBqtevd0sw77qLM5j%2Bt5o4TtL4VN8cIUepfdPbDzMR1Ka%2B%2Bs0jY0jdSDotH%2FLskB2ns2EazqXbApsFUy69oAdxMaAgU7gN%2FPMG1mmfyvfAC%2FQeT77xbF2gU0hJDss0YHYzvAe7APtRGev7TGSHOIRx02jW%2BOLy0wt01SnqDpoP7TySJRUcS0DWtauBcB4QQ3qY%2FDYCswruP9vgY6pgGK1tz28N7aG8aumrnvhC1saigN2cWd68P92EkKlKbarMFXEl3HpI%2By4L0nEyY%2FWm96FANGITEAwzghWGBT%2BUA37Jx5GSTo8IZ4nYIqLRTDBKJK%2BkrHN9lFvhTPG1H3uJULjJBewklnAr0EapbEV43B6fjLu2mPyPMpd%2FXeHpnaLUVjRGxnz90apWqJHbf7s4NYWzjFyW4XWa1z4v6DBmv5Ylth0%2F87&X-Amz-Signature=e0bbc7c7c78b5dc80015d3766260d613b6481e9d8447757f3f38a7ddf7cb5be5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNT2XPL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBEhQrv0OmR2j6N838PZu4H1lHo%2Fct5LYl9cO5ASKWIVAiAoYWV9EvwdR4THFZUOvBE2t8C9VqEowZ%2Bi%2FQX1Oki3JiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9kfl96pjdVCmEZobKtwDUMvZ26dK6%2BrZ0p5NMLB%2FSNBdjWR%2BC%2FizykQy3K3cl%2Fz0a8z4ePFuAu%2BJ%2FEWBYUc9C%2Bo2dR3syA4tNHnC148VnK0YX8GlIGJzROdWA0xoN6dVhj2lHJpRUsnxghntZhGq2fU%2B5TzrBS53p5nYW10PQji9Lj7gGGKsD1U7Qa6I1VIN%2Bz%2FxF0niyMJc%2FOC1yxAz6wnj%2Brrap6Xaj%2BFN57pisC37BL8lDMnTlCKPtfTh55zYySXq0zIJQnLblZNRWFLeSXN6m8JM%2Frtx%2FHBg%2BExm687IngrJmUHncyRSuugxGZxO8uC2HVkXi6SR3NGQr%2B9%2BSpJLe8AskhojHh8zBfdbKCJZG9igTL%2Bi%2BHO4gk4VBc3%2FBNqOA81DdOJ1%2BywUN7XWOMN9hto%2BPO2gSPTwiJYCz8BSUbhyCXBu%2BuDO1BHTusKPIcfhDh%2BACBqtevd0sw77qLM5j%2Bt5o4TtL4VN8cIUepfdPbDzMR1Ka%2B%2Bs0jY0jdSDotH%2FLskB2ns2EazqXbApsFUy69oAdxMaAgU7gN%2FPMG1mmfyvfAC%2FQeT77xbF2gU0hJDss0YHYzvAe7APtRGev7TGSHOIRx02jW%2BOLy0wt01SnqDpoP7TySJRUcS0DWtauBcB4QQ3qY%2FDYCswruP9vgY6pgGK1tz28N7aG8aumrnvhC1saigN2cWd68P92EkKlKbarMFXEl3HpI%2By4L0nEyY%2FWm96FANGITEAwzghWGBT%2BUA37Jx5GSTo8IZ4nYIqLRTDBKJK%2BkrHN9lFvhTPG1H3uJULjJBewklnAr0EapbEV43B6fjLu2mPyPMpd%2FXeHpnaLUVjRGxnz90apWqJHbf7s4NYWzjFyW4XWa1z4v6DBmv5Ylth0%2F87&X-Amz-Signature=1eee3faa8705efd2930c9781d97101375b383cd6b38320bb3064dd493fe231de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNT2XPL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBEhQrv0OmR2j6N838PZu4H1lHo%2Fct5LYl9cO5ASKWIVAiAoYWV9EvwdR4THFZUOvBE2t8C9VqEowZ%2Bi%2FQX1Oki3JiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9kfl96pjdVCmEZobKtwDUMvZ26dK6%2BrZ0p5NMLB%2FSNBdjWR%2BC%2FizykQy3K3cl%2Fz0a8z4ePFuAu%2BJ%2FEWBYUc9C%2Bo2dR3syA4tNHnC148VnK0YX8GlIGJzROdWA0xoN6dVhj2lHJpRUsnxghntZhGq2fU%2B5TzrBS53p5nYW10PQji9Lj7gGGKsD1U7Qa6I1VIN%2Bz%2FxF0niyMJc%2FOC1yxAz6wnj%2Brrap6Xaj%2BFN57pisC37BL8lDMnTlCKPtfTh55zYySXq0zIJQnLblZNRWFLeSXN6m8JM%2Frtx%2FHBg%2BExm687IngrJmUHncyRSuugxGZxO8uC2HVkXi6SR3NGQr%2B9%2BSpJLe8AskhojHh8zBfdbKCJZG9igTL%2Bi%2BHO4gk4VBc3%2FBNqOA81DdOJ1%2BywUN7XWOMN9hto%2BPO2gSPTwiJYCz8BSUbhyCXBu%2BuDO1BHTusKPIcfhDh%2BACBqtevd0sw77qLM5j%2Bt5o4TtL4VN8cIUepfdPbDzMR1Ka%2B%2Bs0jY0jdSDotH%2FLskB2ns2EazqXbApsFUy69oAdxMaAgU7gN%2FPMG1mmfyvfAC%2FQeT77xbF2gU0hJDss0YHYzvAe7APtRGev7TGSHOIRx02jW%2BOLy0wt01SnqDpoP7TySJRUcS0DWtauBcB4QQ3qY%2FDYCswruP9vgY6pgGK1tz28N7aG8aumrnvhC1saigN2cWd68P92EkKlKbarMFXEl3HpI%2By4L0nEyY%2FWm96FANGITEAwzghWGBT%2BUA37Jx5GSTo8IZ4nYIqLRTDBKJK%2BkrHN9lFvhTPG1H3uJULjJBewklnAr0EapbEV43B6fjLu2mPyPMpd%2FXeHpnaLUVjRGxnz90apWqJHbf7s4NYWzjFyW4XWa1z4v6DBmv5Ylth0%2F87&X-Amz-Signature=42a70867baaeefb4667539f742877d0c5ffd19edb771314c4d57721afd0a5190&X-Amz-SignedHeaders=host&x-id=GetObject)
