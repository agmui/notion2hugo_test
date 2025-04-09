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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJRKGNN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHbiVTF%2FsecAKkFdc2atcF%2BaDIVF%2Bgkwgn1fevJg3966AiA6wREGT0M04tI6UMIc39f3nBT%2BlH7Ca%2BeuJ%2BfBx6F%2F6yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaPuw9qHHmKpJtShKtwD6TkrTKZWBYGYtdh6dtZIeRHSd3eBNqO6e4qnYdmbc%2BVmOGz65QSUoAXLdwRWy8ooW5YHORYNOBxYO9jfb%2FT1eh31tEKTLY%2B4XrBaajGLXkhXI9609Gf%2BcflXDYoIj6oSGuAF0GGeUT5Xs%2B8%2BBwcGm4DYSMc7xPNJqDTPi1rHy3pqKAbPthfbuHLSBT7Occ6GBOuwB2CM6XffJAVyEzDkU7wKdT1hvUutagdUogp94mZRe74m%2Fo%2FGydDhVxdyp50rK%2FRorbe7O4Mji4o0Ho4Pb0JywUOiVH8NO0xiSuOR7oi0Bd2YOzLBD74EOisqRHTGDXIyYxVB%2FNX3UFgXHRWCVNWE5UMgHqZisi1IP%2FLqcoaYJuL1XFMUIahRMriCcy1drM69Y0kipWTAQT9OJp6sgL7nP0K5leG82X%2FEDvEil8qdbIdVHNAaNIJAdJWW75CUXLNE%2FTHcI5WfughCOFGyLPI%2BhE73ObIJT7mebyacE%2BwBVrHX0urg1fAF9bC2SKS90ml6fHYdN6mp2hjrerJnWfVGek6IZM4Kg%2B2OwSohiZ13e9PEmwAqdI0PrKnxGhfH2mfzIQzov3UBV8RxDee0JCk%2FhQxh3HehjtUrKodia4t2a7aMDTQ7qB4XirYwnvvavwY6pgGhPTqPF4IckXqD%2FwQHJhFyq6yic244c20l537Gd8OkzauyAGb1Hx%2BiaByP6Y5%2FPilp5ZQEhT5fr%2FtMSMfN%2FHDixsBHc10iV%2FClkFlzeroMlQKVR9M7Aa6FLfRR6u%2Bamuthtcc5URDLcT9es6fjUHz07%2FwQG5T%2BX4VzbMQdtNejNrqD1oIHmmmWquUFMetmN6N4vReym6lmm8vNgxyZon9y9dLyJFtU&X-Amz-Signature=53f892b2e3d0a6303d69c6a661217ef5f767351654ca368c138ce43fd820d0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJRKGNN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHbiVTF%2FsecAKkFdc2atcF%2BaDIVF%2Bgkwgn1fevJg3966AiA6wREGT0M04tI6UMIc39f3nBT%2BlH7Ca%2BeuJ%2BfBx6F%2F6yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaPuw9qHHmKpJtShKtwD6TkrTKZWBYGYtdh6dtZIeRHSd3eBNqO6e4qnYdmbc%2BVmOGz65QSUoAXLdwRWy8ooW5YHORYNOBxYO9jfb%2FT1eh31tEKTLY%2B4XrBaajGLXkhXI9609Gf%2BcflXDYoIj6oSGuAF0GGeUT5Xs%2B8%2BBwcGm4DYSMc7xPNJqDTPi1rHy3pqKAbPthfbuHLSBT7Occ6GBOuwB2CM6XffJAVyEzDkU7wKdT1hvUutagdUogp94mZRe74m%2Fo%2FGydDhVxdyp50rK%2FRorbe7O4Mji4o0Ho4Pb0JywUOiVH8NO0xiSuOR7oi0Bd2YOzLBD74EOisqRHTGDXIyYxVB%2FNX3UFgXHRWCVNWE5UMgHqZisi1IP%2FLqcoaYJuL1XFMUIahRMriCcy1drM69Y0kipWTAQT9OJp6sgL7nP0K5leG82X%2FEDvEil8qdbIdVHNAaNIJAdJWW75CUXLNE%2FTHcI5WfughCOFGyLPI%2BhE73ObIJT7mebyacE%2BwBVrHX0urg1fAF9bC2SKS90ml6fHYdN6mp2hjrerJnWfVGek6IZM4Kg%2B2OwSohiZ13e9PEmwAqdI0PrKnxGhfH2mfzIQzov3UBV8RxDee0JCk%2FhQxh3HehjtUrKodia4t2a7aMDTQ7qB4XirYwnvvavwY6pgGhPTqPF4IckXqD%2FwQHJhFyq6yic244c20l537Gd8OkzauyAGb1Hx%2BiaByP6Y5%2FPilp5ZQEhT5fr%2FtMSMfN%2FHDixsBHc10iV%2FClkFlzeroMlQKVR9M7Aa6FLfRR6u%2Bamuthtcc5URDLcT9es6fjUHz07%2FwQG5T%2BX4VzbMQdtNejNrqD1oIHmmmWquUFMetmN6N4vReym6lmm8vNgxyZon9y9dLyJFtU&X-Amz-Signature=7222c0ca9eb3317c27a3d886b81688d4f3299ec8661279136b1db999abc18de8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJRKGNN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHbiVTF%2FsecAKkFdc2atcF%2BaDIVF%2Bgkwgn1fevJg3966AiA6wREGT0M04tI6UMIc39f3nBT%2BlH7Ca%2BeuJ%2BfBx6F%2F6yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaPuw9qHHmKpJtShKtwD6TkrTKZWBYGYtdh6dtZIeRHSd3eBNqO6e4qnYdmbc%2BVmOGz65QSUoAXLdwRWy8ooW5YHORYNOBxYO9jfb%2FT1eh31tEKTLY%2B4XrBaajGLXkhXI9609Gf%2BcflXDYoIj6oSGuAF0GGeUT5Xs%2B8%2BBwcGm4DYSMc7xPNJqDTPi1rHy3pqKAbPthfbuHLSBT7Occ6GBOuwB2CM6XffJAVyEzDkU7wKdT1hvUutagdUogp94mZRe74m%2Fo%2FGydDhVxdyp50rK%2FRorbe7O4Mji4o0Ho4Pb0JywUOiVH8NO0xiSuOR7oi0Bd2YOzLBD74EOisqRHTGDXIyYxVB%2FNX3UFgXHRWCVNWE5UMgHqZisi1IP%2FLqcoaYJuL1XFMUIahRMriCcy1drM69Y0kipWTAQT9OJp6sgL7nP0K5leG82X%2FEDvEil8qdbIdVHNAaNIJAdJWW75CUXLNE%2FTHcI5WfughCOFGyLPI%2BhE73ObIJT7mebyacE%2BwBVrHX0urg1fAF9bC2SKS90ml6fHYdN6mp2hjrerJnWfVGek6IZM4Kg%2B2OwSohiZ13e9PEmwAqdI0PrKnxGhfH2mfzIQzov3UBV8RxDee0JCk%2FhQxh3HehjtUrKodia4t2a7aMDTQ7qB4XirYwnvvavwY6pgGhPTqPF4IckXqD%2FwQHJhFyq6yic244c20l537Gd8OkzauyAGb1Hx%2BiaByP6Y5%2FPilp5ZQEhT5fr%2FtMSMfN%2FHDixsBHc10iV%2FClkFlzeroMlQKVR9M7Aa6FLfRR6u%2Bamuthtcc5URDLcT9es6fjUHz07%2FwQG5T%2BX4VzbMQdtNejNrqD1oIHmmmWquUFMetmN6N4vReym6lmm8vNgxyZon9y9dLyJFtU&X-Amz-Signature=0915b2dbdedaf66417aa32e51612f242523b9e3d66a7327f29edf8cab20e2787&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJRKGNN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHbiVTF%2FsecAKkFdc2atcF%2BaDIVF%2Bgkwgn1fevJg3966AiA6wREGT0M04tI6UMIc39f3nBT%2BlH7Ca%2BeuJ%2BfBx6F%2F6yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaPuw9qHHmKpJtShKtwD6TkrTKZWBYGYtdh6dtZIeRHSd3eBNqO6e4qnYdmbc%2BVmOGz65QSUoAXLdwRWy8ooW5YHORYNOBxYO9jfb%2FT1eh31tEKTLY%2B4XrBaajGLXkhXI9609Gf%2BcflXDYoIj6oSGuAF0GGeUT5Xs%2B8%2BBwcGm4DYSMc7xPNJqDTPi1rHy3pqKAbPthfbuHLSBT7Occ6GBOuwB2CM6XffJAVyEzDkU7wKdT1hvUutagdUogp94mZRe74m%2Fo%2FGydDhVxdyp50rK%2FRorbe7O4Mji4o0Ho4Pb0JywUOiVH8NO0xiSuOR7oi0Bd2YOzLBD74EOisqRHTGDXIyYxVB%2FNX3UFgXHRWCVNWE5UMgHqZisi1IP%2FLqcoaYJuL1XFMUIahRMriCcy1drM69Y0kipWTAQT9OJp6sgL7nP0K5leG82X%2FEDvEil8qdbIdVHNAaNIJAdJWW75CUXLNE%2FTHcI5WfughCOFGyLPI%2BhE73ObIJT7mebyacE%2BwBVrHX0urg1fAF9bC2SKS90ml6fHYdN6mp2hjrerJnWfVGek6IZM4Kg%2B2OwSohiZ13e9PEmwAqdI0PrKnxGhfH2mfzIQzov3UBV8RxDee0JCk%2FhQxh3HehjtUrKodia4t2a7aMDTQ7qB4XirYwnvvavwY6pgGhPTqPF4IckXqD%2FwQHJhFyq6yic244c20l537Gd8OkzauyAGb1Hx%2BiaByP6Y5%2FPilp5ZQEhT5fr%2FtMSMfN%2FHDixsBHc10iV%2FClkFlzeroMlQKVR9M7Aa6FLfRR6u%2Bamuthtcc5URDLcT9es6fjUHz07%2FwQG5T%2BX4VzbMQdtNejNrqD1oIHmmmWquUFMetmN6N4vReym6lmm8vNgxyZon9y9dLyJFtU&X-Amz-Signature=eaee1fb3d1008672d02e48ee12a382b962c81dbbe9f203abe1da405f85e0481d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJRKGNN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHbiVTF%2FsecAKkFdc2atcF%2BaDIVF%2Bgkwgn1fevJg3966AiA6wREGT0M04tI6UMIc39f3nBT%2BlH7Ca%2BeuJ%2BfBx6F%2F6yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaPuw9qHHmKpJtShKtwD6TkrTKZWBYGYtdh6dtZIeRHSd3eBNqO6e4qnYdmbc%2BVmOGz65QSUoAXLdwRWy8ooW5YHORYNOBxYO9jfb%2FT1eh31tEKTLY%2B4XrBaajGLXkhXI9609Gf%2BcflXDYoIj6oSGuAF0GGeUT5Xs%2B8%2BBwcGm4DYSMc7xPNJqDTPi1rHy3pqKAbPthfbuHLSBT7Occ6GBOuwB2CM6XffJAVyEzDkU7wKdT1hvUutagdUogp94mZRe74m%2Fo%2FGydDhVxdyp50rK%2FRorbe7O4Mji4o0Ho4Pb0JywUOiVH8NO0xiSuOR7oi0Bd2YOzLBD74EOisqRHTGDXIyYxVB%2FNX3UFgXHRWCVNWE5UMgHqZisi1IP%2FLqcoaYJuL1XFMUIahRMriCcy1drM69Y0kipWTAQT9OJp6sgL7nP0K5leG82X%2FEDvEil8qdbIdVHNAaNIJAdJWW75CUXLNE%2FTHcI5WfughCOFGyLPI%2BhE73ObIJT7mebyacE%2BwBVrHX0urg1fAF9bC2SKS90ml6fHYdN6mp2hjrerJnWfVGek6IZM4Kg%2B2OwSohiZ13e9PEmwAqdI0PrKnxGhfH2mfzIQzov3UBV8RxDee0JCk%2FhQxh3HehjtUrKodia4t2a7aMDTQ7qB4XirYwnvvavwY6pgGhPTqPF4IckXqD%2FwQHJhFyq6yic244c20l537Gd8OkzauyAGb1Hx%2BiaByP6Y5%2FPilp5ZQEhT5fr%2FtMSMfN%2FHDixsBHc10iV%2FClkFlzeroMlQKVR9M7Aa6FLfRR6u%2Bamuthtcc5URDLcT9es6fjUHz07%2FwQG5T%2BX4VzbMQdtNejNrqD1oIHmmmWquUFMetmN6N4vReym6lmm8vNgxyZon9y9dLyJFtU&X-Amz-Signature=34e35f34e6bf5af302910faf54a7932a0e9ca044c9d71be2393fac14216bc194&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJRKGNN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHbiVTF%2FsecAKkFdc2atcF%2BaDIVF%2Bgkwgn1fevJg3966AiA6wREGT0M04tI6UMIc39f3nBT%2BlH7Ca%2BeuJ%2BfBx6F%2F6yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaPuw9qHHmKpJtShKtwD6TkrTKZWBYGYtdh6dtZIeRHSd3eBNqO6e4qnYdmbc%2BVmOGz65QSUoAXLdwRWy8ooW5YHORYNOBxYO9jfb%2FT1eh31tEKTLY%2B4XrBaajGLXkhXI9609Gf%2BcflXDYoIj6oSGuAF0GGeUT5Xs%2B8%2BBwcGm4DYSMc7xPNJqDTPi1rHy3pqKAbPthfbuHLSBT7Occ6GBOuwB2CM6XffJAVyEzDkU7wKdT1hvUutagdUogp94mZRe74m%2Fo%2FGydDhVxdyp50rK%2FRorbe7O4Mji4o0Ho4Pb0JywUOiVH8NO0xiSuOR7oi0Bd2YOzLBD74EOisqRHTGDXIyYxVB%2FNX3UFgXHRWCVNWE5UMgHqZisi1IP%2FLqcoaYJuL1XFMUIahRMriCcy1drM69Y0kipWTAQT9OJp6sgL7nP0K5leG82X%2FEDvEil8qdbIdVHNAaNIJAdJWW75CUXLNE%2FTHcI5WfughCOFGyLPI%2BhE73ObIJT7mebyacE%2BwBVrHX0urg1fAF9bC2SKS90ml6fHYdN6mp2hjrerJnWfVGek6IZM4Kg%2B2OwSohiZ13e9PEmwAqdI0PrKnxGhfH2mfzIQzov3UBV8RxDee0JCk%2FhQxh3HehjtUrKodia4t2a7aMDTQ7qB4XirYwnvvavwY6pgGhPTqPF4IckXqD%2FwQHJhFyq6yic244c20l537Gd8OkzauyAGb1Hx%2BiaByP6Y5%2FPilp5ZQEhT5fr%2FtMSMfN%2FHDixsBHc10iV%2FClkFlzeroMlQKVR9M7Aa6FLfRR6u%2Bamuthtcc5URDLcT9es6fjUHz07%2FwQG5T%2BX4VzbMQdtNejNrqD1oIHmmmWquUFMetmN6N4vReym6lmm8vNgxyZon9y9dLyJFtU&X-Amz-Signature=3cb625b13074ed94b445b16cf6cf2917bd08d634e26f80776deb4bb8329195f7&X-Amz-SignedHeaders=host&x-id=GetObject)
