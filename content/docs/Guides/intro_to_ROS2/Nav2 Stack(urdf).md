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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A62NYQZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG8uYxIpz0MdH18NUuPUMyr%2FHiH6%2BBH0GRDEWQyFAq9oAiEA%2F80AVFCGBTK0T7Nvi%2FXRusRaLFKrAYQB9bl0SuRZT7kqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITtKUok2oaIAPaDLircA05pL5Z00qHPW%2FOVi5J6Ix4qGsIpMGIkFeAspFBhFRREAfn9kkIPtD%2Ft0HlqU9DHy8IFAP3qKsXtIOoP98YEG70h35DBZBItv1ux8nKe7PlIFRyp5ndZFQvCyuDec2eEDocqSsUFvEKc7Va1c05FEgN8IS%2Bd%2F8G8G%2FIMfuwX4hZmLsWWsFmzQ7OjqbwS8citYe%2B8Wr8tG7RLJhIowSXftoz5cfr9aP0SwOw%2Bx1yAHhQ3acUclXgEX1xb3dB9biXqNEvND5We6FrEcU%2Fw4YUL7EVLjm65B%2Fz3mAfrHxOMWiCiMBUCO%2BBbV9Z4PFkb8X8zvZNhwf5vMBjFlr4pIO7%2BdwKkkL1RPU0QbOxCzZ10rESDhBqhvDzWiEzaB5DpU67Mwb7pEcSGZYheaKLMzCgM4BpzAvqrR%2FztZMd5eQ8uYAMQAEqwxCxcaxIqSopghIXDURnK%2FKoIiZeR1AHwdPFgUvkQCW3peD9FuUMI6Qtzr1GGIx8E0zS3XsD0OSILxTCRWqWGTHDlDAWjoyTCXJBesp6PV2Ac9RDk%2FKfZAfNedyCvfx90T%2Bxz9eJX3Zwt0SK2rN4PvJDIPVoJxjEDY9CkLajsati5IcEtku4oztkm72w8J3YaDM41E8qtFz0tMP%2BjksAGOqUBkONKoAnV%2BSmQljn%2FhAdhA%2F8HUqZoFfOwy1u9Pdwz4WIjajMMOfQJWG3ya5TzMTI22pZCzxSayxKYDeNLTRbLr8cMNksZazquH97Zi7dHsAmUJ8FywDxILxS7Sas1Qqgitk7j8OeQO0Rqi9RKIo8J9%2FyVPjJ5rkbZysr2ufDzFTyXMmApsKFRA2vxpQhS9QaeOc4Z5dCYGdO5AMZvN6DmL%2BgEe6T7&X-Amz-Signature=030e906d59762608dc73c4a9949de423e37935ef6994de5439cd1abdf8d28cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A62NYQZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG8uYxIpz0MdH18NUuPUMyr%2FHiH6%2BBH0GRDEWQyFAq9oAiEA%2F80AVFCGBTK0T7Nvi%2FXRusRaLFKrAYQB9bl0SuRZT7kqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITtKUok2oaIAPaDLircA05pL5Z00qHPW%2FOVi5J6Ix4qGsIpMGIkFeAspFBhFRREAfn9kkIPtD%2Ft0HlqU9DHy8IFAP3qKsXtIOoP98YEG70h35DBZBItv1ux8nKe7PlIFRyp5ndZFQvCyuDec2eEDocqSsUFvEKc7Va1c05FEgN8IS%2Bd%2F8G8G%2FIMfuwX4hZmLsWWsFmzQ7OjqbwS8citYe%2B8Wr8tG7RLJhIowSXftoz5cfr9aP0SwOw%2Bx1yAHhQ3acUclXgEX1xb3dB9biXqNEvND5We6FrEcU%2Fw4YUL7EVLjm65B%2Fz3mAfrHxOMWiCiMBUCO%2BBbV9Z4PFkb8X8zvZNhwf5vMBjFlr4pIO7%2BdwKkkL1RPU0QbOxCzZ10rESDhBqhvDzWiEzaB5DpU67Mwb7pEcSGZYheaKLMzCgM4BpzAvqrR%2FztZMd5eQ8uYAMQAEqwxCxcaxIqSopghIXDURnK%2FKoIiZeR1AHwdPFgUvkQCW3peD9FuUMI6Qtzr1GGIx8E0zS3XsD0OSILxTCRWqWGTHDlDAWjoyTCXJBesp6PV2Ac9RDk%2FKfZAfNedyCvfx90T%2Bxz9eJX3Zwt0SK2rN4PvJDIPVoJxjEDY9CkLajsati5IcEtku4oztkm72w8J3YaDM41E8qtFz0tMP%2BjksAGOqUBkONKoAnV%2BSmQljn%2FhAdhA%2F8HUqZoFfOwy1u9Pdwz4WIjajMMOfQJWG3ya5TzMTI22pZCzxSayxKYDeNLTRbLr8cMNksZazquH97Zi7dHsAmUJ8FywDxILxS7Sas1Qqgitk7j8OeQO0Rqi9RKIo8J9%2FyVPjJ5rkbZysr2ufDzFTyXMmApsKFRA2vxpQhS9QaeOc4Z5dCYGdO5AMZvN6DmL%2BgEe6T7&X-Amz-Signature=fa256f39bb0354c4ac9aff2f1c28254f8daa257f08a21a74a39ba34fb2664183&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A62NYQZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG8uYxIpz0MdH18NUuPUMyr%2FHiH6%2BBH0GRDEWQyFAq9oAiEA%2F80AVFCGBTK0T7Nvi%2FXRusRaLFKrAYQB9bl0SuRZT7kqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITtKUok2oaIAPaDLircA05pL5Z00qHPW%2FOVi5J6Ix4qGsIpMGIkFeAspFBhFRREAfn9kkIPtD%2Ft0HlqU9DHy8IFAP3qKsXtIOoP98YEG70h35DBZBItv1ux8nKe7PlIFRyp5ndZFQvCyuDec2eEDocqSsUFvEKc7Va1c05FEgN8IS%2Bd%2F8G8G%2FIMfuwX4hZmLsWWsFmzQ7OjqbwS8citYe%2B8Wr8tG7RLJhIowSXftoz5cfr9aP0SwOw%2Bx1yAHhQ3acUclXgEX1xb3dB9biXqNEvND5We6FrEcU%2Fw4YUL7EVLjm65B%2Fz3mAfrHxOMWiCiMBUCO%2BBbV9Z4PFkb8X8zvZNhwf5vMBjFlr4pIO7%2BdwKkkL1RPU0QbOxCzZ10rESDhBqhvDzWiEzaB5DpU67Mwb7pEcSGZYheaKLMzCgM4BpzAvqrR%2FztZMd5eQ8uYAMQAEqwxCxcaxIqSopghIXDURnK%2FKoIiZeR1AHwdPFgUvkQCW3peD9FuUMI6Qtzr1GGIx8E0zS3XsD0OSILxTCRWqWGTHDlDAWjoyTCXJBesp6PV2Ac9RDk%2FKfZAfNedyCvfx90T%2Bxz9eJX3Zwt0SK2rN4PvJDIPVoJxjEDY9CkLajsati5IcEtku4oztkm72w8J3YaDM41E8qtFz0tMP%2BjksAGOqUBkONKoAnV%2BSmQljn%2FhAdhA%2F8HUqZoFfOwy1u9Pdwz4WIjajMMOfQJWG3ya5TzMTI22pZCzxSayxKYDeNLTRbLr8cMNksZazquH97Zi7dHsAmUJ8FywDxILxS7Sas1Qqgitk7j8OeQO0Rqi9RKIo8J9%2FyVPjJ5rkbZysr2ufDzFTyXMmApsKFRA2vxpQhS9QaeOc4Z5dCYGdO5AMZvN6DmL%2BgEe6T7&X-Amz-Signature=69ea11144f0a8f2c6c049a24196945cca3e911ca3ed363e62772ab8da00462f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A62NYQZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG8uYxIpz0MdH18NUuPUMyr%2FHiH6%2BBH0GRDEWQyFAq9oAiEA%2F80AVFCGBTK0T7Nvi%2FXRusRaLFKrAYQB9bl0SuRZT7kqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITtKUok2oaIAPaDLircA05pL5Z00qHPW%2FOVi5J6Ix4qGsIpMGIkFeAspFBhFRREAfn9kkIPtD%2Ft0HlqU9DHy8IFAP3qKsXtIOoP98YEG70h35DBZBItv1ux8nKe7PlIFRyp5ndZFQvCyuDec2eEDocqSsUFvEKc7Va1c05FEgN8IS%2Bd%2F8G8G%2FIMfuwX4hZmLsWWsFmzQ7OjqbwS8citYe%2B8Wr8tG7RLJhIowSXftoz5cfr9aP0SwOw%2Bx1yAHhQ3acUclXgEX1xb3dB9biXqNEvND5We6FrEcU%2Fw4YUL7EVLjm65B%2Fz3mAfrHxOMWiCiMBUCO%2BBbV9Z4PFkb8X8zvZNhwf5vMBjFlr4pIO7%2BdwKkkL1RPU0QbOxCzZ10rESDhBqhvDzWiEzaB5DpU67Mwb7pEcSGZYheaKLMzCgM4BpzAvqrR%2FztZMd5eQ8uYAMQAEqwxCxcaxIqSopghIXDURnK%2FKoIiZeR1AHwdPFgUvkQCW3peD9FuUMI6Qtzr1GGIx8E0zS3XsD0OSILxTCRWqWGTHDlDAWjoyTCXJBesp6PV2Ac9RDk%2FKfZAfNedyCvfx90T%2Bxz9eJX3Zwt0SK2rN4PvJDIPVoJxjEDY9CkLajsati5IcEtku4oztkm72w8J3YaDM41E8qtFz0tMP%2BjksAGOqUBkONKoAnV%2BSmQljn%2FhAdhA%2F8HUqZoFfOwy1u9Pdwz4WIjajMMOfQJWG3ya5TzMTI22pZCzxSayxKYDeNLTRbLr8cMNksZazquH97Zi7dHsAmUJ8FywDxILxS7Sas1Qqgitk7j8OeQO0Rqi9RKIo8J9%2FyVPjJ5rkbZysr2ufDzFTyXMmApsKFRA2vxpQhS9QaeOc4Z5dCYGdO5AMZvN6DmL%2BgEe6T7&X-Amz-Signature=6a717aee56ce4892a8948a0a9fe529f270a35e31245ac6c3712a8785f4dc98bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A62NYQZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG8uYxIpz0MdH18NUuPUMyr%2FHiH6%2BBH0GRDEWQyFAq9oAiEA%2F80AVFCGBTK0T7Nvi%2FXRusRaLFKrAYQB9bl0SuRZT7kqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITtKUok2oaIAPaDLircA05pL5Z00qHPW%2FOVi5J6Ix4qGsIpMGIkFeAspFBhFRREAfn9kkIPtD%2Ft0HlqU9DHy8IFAP3qKsXtIOoP98YEG70h35DBZBItv1ux8nKe7PlIFRyp5ndZFQvCyuDec2eEDocqSsUFvEKc7Va1c05FEgN8IS%2Bd%2F8G8G%2FIMfuwX4hZmLsWWsFmzQ7OjqbwS8citYe%2B8Wr8tG7RLJhIowSXftoz5cfr9aP0SwOw%2Bx1yAHhQ3acUclXgEX1xb3dB9biXqNEvND5We6FrEcU%2Fw4YUL7EVLjm65B%2Fz3mAfrHxOMWiCiMBUCO%2BBbV9Z4PFkb8X8zvZNhwf5vMBjFlr4pIO7%2BdwKkkL1RPU0QbOxCzZ10rESDhBqhvDzWiEzaB5DpU67Mwb7pEcSGZYheaKLMzCgM4BpzAvqrR%2FztZMd5eQ8uYAMQAEqwxCxcaxIqSopghIXDURnK%2FKoIiZeR1AHwdPFgUvkQCW3peD9FuUMI6Qtzr1GGIx8E0zS3XsD0OSILxTCRWqWGTHDlDAWjoyTCXJBesp6PV2Ac9RDk%2FKfZAfNedyCvfx90T%2Bxz9eJX3Zwt0SK2rN4PvJDIPVoJxjEDY9CkLajsati5IcEtku4oztkm72w8J3YaDM41E8qtFz0tMP%2BjksAGOqUBkONKoAnV%2BSmQljn%2FhAdhA%2F8HUqZoFfOwy1u9Pdwz4WIjajMMOfQJWG3ya5TzMTI22pZCzxSayxKYDeNLTRbLr8cMNksZazquH97Zi7dHsAmUJ8FywDxILxS7Sas1Qqgitk7j8OeQO0Rqi9RKIo8J9%2FyVPjJ5rkbZysr2ufDzFTyXMmApsKFRA2vxpQhS9QaeOc4Z5dCYGdO5AMZvN6DmL%2BgEe6T7&X-Amz-Signature=b747522129cdc24b090cf6a1f104c08d7d34f5298d48e3393e5fc939e6cbb586&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A62NYQZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG8uYxIpz0MdH18NUuPUMyr%2FHiH6%2BBH0GRDEWQyFAq9oAiEA%2F80AVFCGBTK0T7Nvi%2FXRusRaLFKrAYQB9bl0SuRZT7kqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITtKUok2oaIAPaDLircA05pL5Z00qHPW%2FOVi5J6Ix4qGsIpMGIkFeAspFBhFRREAfn9kkIPtD%2Ft0HlqU9DHy8IFAP3qKsXtIOoP98YEG70h35DBZBItv1ux8nKe7PlIFRyp5ndZFQvCyuDec2eEDocqSsUFvEKc7Va1c05FEgN8IS%2Bd%2F8G8G%2FIMfuwX4hZmLsWWsFmzQ7OjqbwS8citYe%2B8Wr8tG7RLJhIowSXftoz5cfr9aP0SwOw%2Bx1yAHhQ3acUclXgEX1xb3dB9biXqNEvND5We6FrEcU%2Fw4YUL7EVLjm65B%2Fz3mAfrHxOMWiCiMBUCO%2BBbV9Z4PFkb8X8zvZNhwf5vMBjFlr4pIO7%2BdwKkkL1RPU0QbOxCzZ10rESDhBqhvDzWiEzaB5DpU67Mwb7pEcSGZYheaKLMzCgM4BpzAvqrR%2FztZMd5eQ8uYAMQAEqwxCxcaxIqSopghIXDURnK%2FKoIiZeR1AHwdPFgUvkQCW3peD9FuUMI6Qtzr1GGIx8E0zS3XsD0OSILxTCRWqWGTHDlDAWjoyTCXJBesp6PV2Ac9RDk%2FKfZAfNedyCvfx90T%2Bxz9eJX3Zwt0SK2rN4PvJDIPVoJxjEDY9CkLajsati5IcEtku4oztkm72w8J3YaDM41E8qtFz0tMP%2BjksAGOqUBkONKoAnV%2BSmQljn%2FhAdhA%2F8HUqZoFfOwy1u9Pdwz4WIjajMMOfQJWG3ya5TzMTI22pZCzxSayxKYDeNLTRbLr8cMNksZazquH97Zi7dHsAmUJ8FywDxILxS7Sas1Qqgitk7j8OeQO0Rqi9RKIo8J9%2FyVPjJ5rkbZysr2ufDzFTyXMmApsKFRA2vxpQhS9QaeOc4Z5dCYGdO5AMZvN6DmL%2BgEe6T7&X-Amz-Signature=c58d30eaa6037e785579fe49cb04d29ab897057ee16b1d74cca39204c30a0937&X-Amz-SignedHeaders=host&x-id=GetObject)
