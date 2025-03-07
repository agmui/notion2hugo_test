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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656Q4HW6J%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDP7fbG7XKO7UqUDg3NUU3Gdi5XzT8nRNjbca668BRwFQIgZuAEu%2BALiOZNIO675zSBOcbvisCx%2Fph%2FdE6LLgpNX2Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPSmduEYqyIkPE8CECrcA1pt1xUw%2FKKZU7frVxOFlc4IsVzg2AnllkZ7z78HZHHyqgTzreYFtd5y3kRInz2fP5LUQV%2BC0teZGM%2BQUEOx4C9ZqAAd5jtQkMmKTq84jTt%2Bglo9Q2k%2Fv21q1O2DOCUYW07MsjRr7V0JeczfeI9B%2BC0dmZcFHalwC%2BOSfWPOq04LT0GA8l2olQj0yfomUJYb0F3AemQisfw%2BhBv3JRl%2BKpjR%2FF389ZetX5iVj9pbvGQCdli2bbHbEe0SRoRT26piXOMN1dncM%2FTrefp3w%2Fb6C7hp6fjC7JEirAvhjgToWb6z%2BdxGmOZDOXsCZ2hrENki6C0bOB%2F1Ndr8DPr%2B4vu9M7drXi9Q3q5ZswHagpIHrMpUDmsFJboZ%2B4k3UafN7Zh3pHOh6jKqLth%2B43d82pDT5CQTW7OuuJjAdabvEJUVnf03FYE3PFT%2BPVGldWQwjbpwmGze5HuwNPq63x6LJX8yESQc4dlkxkCD6chUbmFh8kNMG9F4w%2FRplwa3bypmSc5UBehOUbRsyVDawgymE0CKdQfdD239wUlDdRZp%2Fqi4sTI9YkAeQo4OTKJ8DQXb8JEo3vQCj69OFTqQ1ey0VizeuKRDvCEtRJkZ9L75dxybEM%2BfI1mT8F7s2Z1GHWcPMLW%2Frb4GOqUB8I26Gi2gfVz83RQN22hPgrvLGjTPKNvuyMXSOZyqEIN9J5OcVfiXzl1tie72RiPGnGDg1%2F8v37bYcKLrwb%2FCuauogZMlsZ%2FUL%2FdigJVa2R2O5KmnWKj8HSVL2DtbsdkK%2FRCKSzrPyTujsGi8aEFISAyiDY1Cs6W%2FNd5NvZDyaKf9jI0thF0e%2FI25n0ddidj5x6BXZiA85YZL0WSwVWVVAesL4jOY&X-Amz-Signature=3a3ba3392f502dd336656e938195d1c5195836b644eba5afb01c918dce509ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656Q4HW6J%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDP7fbG7XKO7UqUDg3NUU3Gdi5XzT8nRNjbca668BRwFQIgZuAEu%2BALiOZNIO675zSBOcbvisCx%2Fph%2FdE6LLgpNX2Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPSmduEYqyIkPE8CECrcA1pt1xUw%2FKKZU7frVxOFlc4IsVzg2AnllkZ7z78HZHHyqgTzreYFtd5y3kRInz2fP5LUQV%2BC0teZGM%2BQUEOx4C9ZqAAd5jtQkMmKTq84jTt%2Bglo9Q2k%2Fv21q1O2DOCUYW07MsjRr7V0JeczfeI9B%2BC0dmZcFHalwC%2BOSfWPOq04LT0GA8l2olQj0yfomUJYb0F3AemQisfw%2BhBv3JRl%2BKpjR%2FF389ZetX5iVj9pbvGQCdli2bbHbEe0SRoRT26piXOMN1dncM%2FTrefp3w%2Fb6C7hp6fjC7JEirAvhjgToWb6z%2BdxGmOZDOXsCZ2hrENki6C0bOB%2F1Ndr8DPr%2B4vu9M7drXi9Q3q5ZswHagpIHrMpUDmsFJboZ%2B4k3UafN7Zh3pHOh6jKqLth%2B43d82pDT5CQTW7OuuJjAdabvEJUVnf03FYE3PFT%2BPVGldWQwjbpwmGze5HuwNPq63x6LJX8yESQc4dlkxkCD6chUbmFh8kNMG9F4w%2FRplwa3bypmSc5UBehOUbRsyVDawgymE0CKdQfdD239wUlDdRZp%2Fqi4sTI9YkAeQo4OTKJ8DQXb8JEo3vQCj69OFTqQ1ey0VizeuKRDvCEtRJkZ9L75dxybEM%2BfI1mT8F7s2Z1GHWcPMLW%2Frb4GOqUB8I26Gi2gfVz83RQN22hPgrvLGjTPKNvuyMXSOZyqEIN9J5OcVfiXzl1tie72RiPGnGDg1%2F8v37bYcKLrwb%2FCuauogZMlsZ%2FUL%2FdigJVa2R2O5KmnWKj8HSVL2DtbsdkK%2FRCKSzrPyTujsGi8aEFISAyiDY1Cs6W%2FNd5NvZDyaKf9jI0thF0e%2FI25n0ddidj5x6BXZiA85YZL0WSwVWVVAesL4jOY&X-Amz-Signature=4465b5dd9974c32a4c955d4f11e122eec33a5e2a4c873429fda0d978dd1201b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656Q4HW6J%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDP7fbG7XKO7UqUDg3NUU3Gdi5XzT8nRNjbca668BRwFQIgZuAEu%2BALiOZNIO675zSBOcbvisCx%2Fph%2FdE6LLgpNX2Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPSmduEYqyIkPE8CECrcA1pt1xUw%2FKKZU7frVxOFlc4IsVzg2AnllkZ7z78HZHHyqgTzreYFtd5y3kRInz2fP5LUQV%2BC0teZGM%2BQUEOx4C9ZqAAd5jtQkMmKTq84jTt%2Bglo9Q2k%2Fv21q1O2DOCUYW07MsjRr7V0JeczfeI9B%2BC0dmZcFHalwC%2BOSfWPOq04LT0GA8l2olQj0yfomUJYb0F3AemQisfw%2BhBv3JRl%2BKpjR%2FF389ZetX5iVj9pbvGQCdli2bbHbEe0SRoRT26piXOMN1dncM%2FTrefp3w%2Fb6C7hp6fjC7JEirAvhjgToWb6z%2BdxGmOZDOXsCZ2hrENki6C0bOB%2F1Ndr8DPr%2B4vu9M7drXi9Q3q5ZswHagpIHrMpUDmsFJboZ%2B4k3UafN7Zh3pHOh6jKqLth%2B43d82pDT5CQTW7OuuJjAdabvEJUVnf03FYE3PFT%2BPVGldWQwjbpwmGze5HuwNPq63x6LJX8yESQc4dlkxkCD6chUbmFh8kNMG9F4w%2FRplwa3bypmSc5UBehOUbRsyVDawgymE0CKdQfdD239wUlDdRZp%2Fqi4sTI9YkAeQo4OTKJ8DQXb8JEo3vQCj69OFTqQ1ey0VizeuKRDvCEtRJkZ9L75dxybEM%2BfI1mT8F7s2Z1GHWcPMLW%2Frb4GOqUB8I26Gi2gfVz83RQN22hPgrvLGjTPKNvuyMXSOZyqEIN9J5OcVfiXzl1tie72RiPGnGDg1%2F8v37bYcKLrwb%2FCuauogZMlsZ%2FUL%2FdigJVa2R2O5KmnWKj8HSVL2DtbsdkK%2FRCKSzrPyTujsGi8aEFISAyiDY1Cs6W%2FNd5NvZDyaKf9jI0thF0e%2FI25n0ddidj5x6BXZiA85YZL0WSwVWVVAesL4jOY&X-Amz-Signature=353c48701bb86ee077ae36800e2cb403dea180acf91f3fe9af7acf7753d80d75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656Q4HW6J%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDP7fbG7XKO7UqUDg3NUU3Gdi5XzT8nRNjbca668BRwFQIgZuAEu%2BALiOZNIO675zSBOcbvisCx%2Fph%2FdE6LLgpNX2Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPSmduEYqyIkPE8CECrcA1pt1xUw%2FKKZU7frVxOFlc4IsVzg2AnllkZ7z78HZHHyqgTzreYFtd5y3kRInz2fP5LUQV%2BC0teZGM%2BQUEOx4C9ZqAAd5jtQkMmKTq84jTt%2Bglo9Q2k%2Fv21q1O2DOCUYW07MsjRr7V0JeczfeI9B%2BC0dmZcFHalwC%2BOSfWPOq04LT0GA8l2olQj0yfomUJYb0F3AemQisfw%2BhBv3JRl%2BKpjR%2FF389ZetX5iVj9pbvGQCdli2bbHbEe0SRoRT26piXOMN1dncM%2FTrefp3w%2Fb6C7hp6fjC7JEirAvhjgToWb6z%2BdxGmOZDOXsCZ2hrENki6C0bOB%2F1Ndr8DPr%2B4vu9M7drXi9Q3q5ZswHagpIHrMpUDmsFJboZ%2B4k3UafN7Zh3pHOh6jKqLth%2B43d82pDT5CQTW7OuuJjAdabvEJUVnf03FYE3PFT%2BPVGldWQwjbpwmGze5HuwNPq63x6LJX8yESQc4dlkxkCD6chUbmFh8kNMG9F4w%2FRplwa3bypmSc5UBehOUbRsyVDawgymE0CKdQfdD239wUlDdRZp%2Fqi4sTI9YkAeQo4OTKJ8DQXb8JEo3vQCj69OFTqQ1ey0VizeuKRDvCEtRJkZ9L75dxybEM%2BfI1mT8F7s2Z1GHWcPMLW%2Frb4GOqUB8I26Gi2gfVz83RQN22hPgrvLGjTPKNvuyMXSOZyqEIN9J5OcVfiXzl1tie72RiPGnGDg1%2F8v37bYcKLrwb%2FCuauogZMlsZ%2FUL%2FdigJVa2R2O5KmnWKj8HSVL2DtbsdkK%2FRCKSzrPyTujsGi8aEFISAyiDY1Cs6W%2FNd5NvZDyaKf9jI0thF0e%2FI25n0ddidj5x6BXZiA85YZL0WSwVWVVAesL4jOY&X-Amz-Signature=1184498186fd5ee3068a95910cb4b02e4a8cf2ccf0d206ba7392f216c8dc935c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656Q4HW6J%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDP7fbG7XKO7UqUDg3NUU3Gdi5XzT8nRNjbca668BRwFQIgZuAEu%2BALiOZNIO675zSBOcbvisCx%2Fph%2FdE6LLgpNX2Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPSmduEYqyIkPE8CECrcA1pt1xUw%2FKKZU7frVxOFlc4IsVzg2AnllkZ7z78HZHHyqgTzreYFtd5y3kRInz2fP5LUQV%2BC0teZGM%2BQUEOx4C9ZqAAd5jtQkMmKTq84jTt%2Bglo9Q2k%2Fv21q1O2DOCUYW07MsjRr7V0JeczfeI9B%2BC0dmZcFHalwC%2BOSfWPOq04LT0GA8l2olQj0yfomUJYb0F3AemQisfw%2BhBv3JRl%2BKpjR%2FF389ZetX5iVj9pbvGQCdli2bbHbEe0SRoRT26piXOMN1dncM%2FTrefp3w%2Fb6C7hp6fjC7JEirAvhjgToWb6z%2BdxGmOZDOXsCZ2hrENki6C0bOB%2F1Ndr8DPr%2B4vu9M7drXi9Q3q5ZswHagpIHrMpUDmsFJboZ%2B4k3UafN7Zh3pHOh6jKqLth%2B43d82pDT5CQTW7OuuJjAdabvEJUVnf03FYE3PFT%2BPVGldWQwjbpwmGze5HuwNPq63x6LJX8yESQc4dlkxkCD6chUbmFh8kNMG9F4w%2FRplwa3bypmSc5UBehOUbRsyVDawgymE0CKdQfdD239wUlDdRZp%2Fqi4sTI9YkAeQo4OTKJ8DQXb8JEo3vQCj69OFTqQ1ey0VizeuKRDvCEtRJkZ9L75dxybEM%2BfI1mT8F7s2Z1GHWcPMLW%2Frb4GOqUB8I26Gi2gfVz83RQN22hPgrvLGjTPKNvuyMXSOZyqEIN9J5OcVfiXzl1tie72RiPGnGDg1%2F8v37bYcKLrwb%2FCuauogZMlsZ%2FUL%2FdigJVa2R2O5KmnWKj8HSVL2DtbsdkK%2FRCKSzrPyTujsGi8aEFISAyiDY1Cs6W%2FNd5NvZDyaKf9jI0thF0e%2FI25n0ddidj5x6BXZiA85YZL0WSwVWVVAesL4jOY&X-Amz-Signature=1ee3f41b48104dcb6d8c8d6c7d1d576fc15b33425efac0ea073b35e61ff59da6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656Q4HW6J%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDP7fbG7XKO7UqUDg3NUU3Gdi5XzT8nRNjbca668BRwFQIgZuAEu%2BALiOZNIO675zSBOcbvisCx%2Fph%2FdE6LLgpNX2Yq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPSmduEYqyIkPE8CECrcA1pt1xUw%2FKKZU7frVxOFlc4IsVzg2AnllkZ7z78HZHHyqgTzreYFtd5y3kRInz2fP5LUQV%2BC0teZGM%2BQUEOx4C9ZqAAd5jtQkMmKTq84jTt%2Bglo9Q2k%2Fv21q1O2DOCUYW07MsjRr7V0JeczfeI9B%2BC0dmZcFHalwC%2BOSfWPOq04LT0GA8l2olQj0yfomUJYb0F3AemQisfw%2BhBv3JRl%2BKpjR%2FF389ZetX5iVj9pbvGQCdli2bbHbEe0SRoRT26piXOMN1dncM%2FTrefp3w%2Fb6C7hp6fjC7JEirAvhjgToWb6z%2BdxGmOZDOXsCZ2hrENki6C0bOB%2F1Ndr8DPr%2B4vu9M7drXi9Q3q5ZswHagpIHrMpUDmsFJboZ%2B4k3UafN7Zh3pHOh6jKqLth%2B43d82pDT5CQTW7OuuJjAdabvEJUVnf03FYE3PFT%2BPVGldWQwjbpwmGze5HuwNPq63x6LJX8yESQc4dlkxkCD6chUbmFh8kNMG9F4w%2FRplwa3bypmSc5UBehOUbRsyVDawgymE0CKdQfdD239wUlDdRZp%2Fqi4sTI9YkAeQo4OTKJ8DQXb8JEo3vQCj69OFTqQ1ey0VizeuKRDvCEtRJkZ9L75dxybEM%2BfI1mT8F7s2Z1GHWcPMLW%2Frb4GOqUB8I26Gi2gfVz83RQN22hPgrvLGjTPKNvuyMXSOZyqEIN9J5OcVfiXzl1tie72RiPGnGDg1%2F8v37bYcKLrwb%2FCuauogZMlsZ%2FUL%2FdigJVa2R2O5KmnWKj8HSVL2DtbsdkK%2FRCKSzrPyTujsGi8aEFISAyiDY1Cs6W%2FNd5NvZDyaKf9jI0thF0e%2FI25n0ddidj5x6BXZiA85YZL0WSwVWVVAesL4jOY&X-Amz-Signature=73763479317acdcb5760520ab72db3081bedaf49285472177434755cd162bee3&X-Amz-SignedHeaders=host&x-id=GetObject)
