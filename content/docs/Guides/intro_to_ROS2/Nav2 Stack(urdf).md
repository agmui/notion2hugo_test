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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRNV4S3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDtEs%2FqK4vKGpBt6xWMq2MxVVX8NLoqEvdorsA%2BSRJ1OwIgVB5dXSdzT8QGgZ75xyUzobTavg3WIN0IzOkJjpdDmfYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHZvetB%2F%2FxKMzCK5GircAwTdJ3K%2BDVFPu48GSnMyWLehHuHtsWH%2FhLmRhfvpXDrJgHHIF7%2BVZ%2FFut3dblUmh2RENXa1qja0Cl9QP7syoWzpqOWWJmG3MtxvAGlf9KSesjADhgPZkUa8fYHSjAFOeYe4Xiybs6yzvplibS9GB0qRzT2xaOIkXKGrjxXPJZEM%2B6Es9MG%2BSSamFIY7JM7vcEGQiGi%2FMhWpePHciHgpJ%2BK8qpt1zLTAHp1pqYyNJQszDtSocs00n9L%2BO7vNXXMMXZMa5TVdsSOAnUX%2B29tmh3v9aZmkkKC%2BoIRg8eDzIlJ96FNJJQBx2nnQdo36E%2FiJ%2FjEmZqVD1TUk7EK%2F73%2FpRNJwjzcmuKLk4p1fwUlyludZWMEuBwfsmQ36o5B5OYaNY%2FhaVmH5tIqaSGDuS6LdLavtLwNnpHv7vivrhUWrDOZ%2Bt0Vf%2FENZx68nL%2BLwFK9NWqCMDCpZhi5eyhvZJGMEykEDAkJtEkBgriZUE6ueWqWfUGGQXHEekInwXugGmhoZng4z%2BWHoBgpLAix4KpQ0eVJ967AVjkyqVTRN0i9S64AOQNDt84BXqv9cK%2FaQIecLyvea1QDUPOKzxnsrDWrFbTHowNUSu8m%2BaJPp%2FF%2FlroCZ8oAx1ZUW9do%2BV2IV2MKSi6sIGOqUBY5D7mL9tEHrUeBryvqTJSIi0Ga5SbTO2qTCO1My1Oal90u%2FT3J58oqYNtwMrkj1UriSr7lVgwWs9LrrAibXBbu6iTBbX2glpIyexb1egr01rSueD4eCDfkTmZ%2BXsovjo86NksNimOJliaZhpqjYBws3F5stKhHKwSdT2%2FSUEBtzGC%2F8Kl3hjmnCLI0HpTOBcDMQVG%2FiT4OPUbaU6VCGN06QnfGLK&X-Amz-Signature=15cf76f97adcf0d79ac5ec8d71d113fbea15c7a6d5dcc54d19c8fcf3e1f38502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRNV4S3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDtEs%2FqK4vKGpBt6xWMq2MxVVX8NLoqEvdorsA%2BSRJ1OwIgVB5dXSdzT8QGgZ75xyUzobTavg3WIN0IzOkJjpdDmfYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHZvetB%2F%2FxKMzCK5GircAwTdJ3K%2BDVFPu48GSnMyWLehHuHtsWH%2FhLmRhfvpXDrJgHHIF7%2BVZ%2FFut3dblUmh2RENXa1qja0Cl9QP7syoWzpqOWWJmG3MtxvAGlf9KSesjADhgPZkUa8fYHSjAFOeYe4Xiybs6yzvplibS9GB0qRzT2xaOIkXKGrjxXPJZEM%2B6Es9MG%2BSSamFIY7JM7vcEGQiGi%2FMhWpePHciHgpJ%2BK8qpt1zLTAHp1pqYyNJQszDtSocs00n9L%2BO7vNXXMMXZMa5TVdsSOAnUX%2B29tmh3v9aZmkkKC%2BoIRg8eDzIlJ96FNJJQBx2nnQdo36E%2FiJ%2FjEmZqVD1TUk7EK%2F73%2FpRNJwjzcmuKLk4p1fwUlyludZWMEuBwfsmQ36o5B5OYaNY%2FhaVmH5tIqaSGDuS6LdLavtLwNnpHv7vivrhUWrDOZ%2Bt0Vf%2FENZx68nL%2BLwFK9NWqCMDCpZhi5eyhvZJGMEykEDAkJtEkBgriZUE6ueWqWfUGGQXHEekInwXugGmhoZng4z%2BWHoBgpLAix4KpQ0eVJ967AVjkyqVTRN0i9S64AOQNDt84BXqv9cK%2FaQIecLyvea1QDUPOKzxnsrDWrFbTHowNUSu8m%2BaJPp%2FF%2FlroCZ8oAx1ZUW9do%2BV2IV2MKSi6sIGOqUBY5D7mL9tEHrUeBryvqTJSIi0Ga5SbTO2qTCO1My1Oal90u%2FT3J58oqYNtwMrkj1UriSr7lVgwWs9LrrAibXBbu6iTBbX2glpIyexb1egr01rSueD4eCDfkTmZ%2BXsovjo86NksNimOJliaZhpqjYBws3F5stKhHKwSdT2%2FSUEBtzGC%2F8Kl3hjmnCLI0HpTOBcDMQVG%2FiT4OPUbaU6VCGN06QnfGLK&X-Amz-Signature=430124f6f992d92417239d1cbf3855b345774669a787b0dbc2cbfe4668abd89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRNV4S3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDtEs%2FqK4vKGpBt6xWMq2MxVVX8NLoqEvdorsA%2BSRJ1OwIgVB5dXSdzT8QGgZ75xyUzobTavg3WIN0IzOkJjpdDmfYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHZvetB%2F%2FxKMzCK5GircAwTdJ3K%2BDVFPu48GSnMyWLehHuHtsWH%2FhLmRhfvpXDrJgHHIF7%2BVZ%2FFut3dblUmh2RENXa1qja0Cl9QP7syoWzpqOWWJmG3MtxvAGlf9KSesjADhgPZkUa8fYHSjAFOeYe4Xiybs6yzvplibS9GB0qRzT2xaOIkXKGrjxXPJZEM%2B6Es9MG%2BSSamFIY7JM7vcEGQiGi%2FMhWpePHciHgpJ%2BK8qpt1zLTAHp1pqYyNJQszDtSocs00n9L%2BO7vNXXMMXZMa5TVdsSOAnUX%2B29tmh3v9aZmkkKC%2BoIRg8eDzIlJ96FNJJQBx2nnQdo36E%2FiJ%2FjEmZqVD1TUk7EK%2F73%2FpRNJwjzcmuKLk4p1fwUlyludZWMEuBwfsmQ36o5B5OYaNY%2FhaVmH5tIqaSGDuS6LdLavtLwNnpHv7vivrhUWrDOZ%2Bt0Vf%2FENZx68nL%2BLwFK9NWqCMDCpZhi5eyhvZJGMEykEDAkJtEkBgriZUE6ueWqWfUGGQXHEekInwXugGmhoZng4z%2BWHoBgpLAix4KpQ0eVJ967AVjkyqVTRN0i9S64AOQNDt84BXqv9cK%2FaQIecLyvea1QDUPOKzxnsrDWrFbTHowNUSu8m%2BaJPp%2FF%2FlroCZ8oAx1ZUW9do%2BV2IV2MKSi6sIGOqUBY5D7mL9tEHrUeBryvqTJSIi0Ga5SbTO2qTCO1My1Oal90u%2FT3J58oqYNtwMrkj1UriSr7lVgwWs9LrrAibXBbu6iTBbX2glpIyexb1egr01rSueD4eCDfkTmZ%2BXsovjo86NksNimOJliaZhpqjYBws3F5stKhHKwSdT2%2FSUEBtzGC%2F8Kl3hjmnCLI0HpTOBcDMQVG%2FiT4OPUbaU6VCGN06QnfGLK&X-Amz-Signature=4d61b949423afeaa3a48127e6ba71ce6ae18bdbbbbc9d7f620dcf51f0d3786d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRNV4S3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDtEs%2FqK4vKGpBt6xWMq2MxVVX8NLoqEvdorsA%2BSRJ1OwIgVB5dXSdzT8QGgZ75xyUzobTavg3WIN0IzOkJjpdDmfYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHZvetB%2F%2FxKMzCK5GircAwTdJ3K%2BDVFPu48GSnMyWLehHuHtsWH%2FhLmRhfvpXDrJgHHIF7%2BVZ%2FFut3dblUmh2RENXa1qja0Cl9QP7syoWzpqOWWJmG3MtxvAGlf9KSesjADhgPZkUa8fYHSjAFOeYe4Xiybs6yzvplibS9GB0qRzT2xaOIkXKGrjxXPJZEM%2B6Es9MG%2BSSamFIY7JM7vcEGQiGi%2FMhWpePHciHgpJ%2BK8qpt1zLTAHp1pqYyNJQszDtSocs00n9L%2BO7vNXXMMXZMa5TVdsSOAnUX%2B29tmh3v9aZmkkKC%2BoIRg8eDzIlJ96FNJJQBx2nnQdo36E%2FiJ%2FjEmZqVD1TUk7EK%2F73%2FpRNJwjzcmuKLk4p1fwUlyludZWMEuBwfsmQ36o5B5OYaNY%2FhaVmH5tIqaSGDuS6LdLavtLwNnpHv7vivrhUWrDOZ%2Bt0Vf%2FENZx68nL%2BLwFK9NWqCMDCpZhi5eyhvZJGMEykEDAkJtEkBgriZUE6ueWqWfUGGQXHEekInwXugGmhoZng4z%2BWHoBgpLAix4KpQ0eVJ967AVjkyqVTRN0i9S64AOQNDt84BXqv9cK%2FaQIecLyvea1QDUPOKzxnsrDWrFbTHowNUSu8m%2BaJPp%2FF%2FlroCZ8oAx1ZUW9do%2BV2IV2MKSi6sIGOqUBY5D7mL9tEHrUeBryvqTJSIi0Ga5SbTO2qTCO1My1Oal90u%2FT3J58oqYNtwMrkj1UriSr7lVgwWs9LrrAibXBbu6iTBbX2glpIyexb1egr01rSueD4eCDfkTmZ%2BXsovjo86NksNimOJliaZhpqjYBws3F5stKhHKwSdT2%2FSUEBtzGC%2F8Kl3hjmnCLI0HpTOBcDMQVG%2FiT4OPUbaU6VCGN06QnfGLK&X-Amz-Signature=ee654a8355a2c98983c6279c400a6e4a7445206f86638aa45f76d12420aad591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRNV4S3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDtEs%2FqK4vKGpBt6xWMq2MxVVX8NLoqEvdorsA%2BSRJ1OwIgVB5dXSdzT8QGgZ75xyUzobTavg3WIN0IzOkJjpdDmfYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHZvetB%2F%2FxKMzCK5GircAwTdJ3K%2BDVFPu48GSnMyWLehHuHtsWH%2FhLmRhfvpXDrJgHHIF7%2BVZ%2FFut3dblUmh2RENXa1qja0Cl9QP7syoWzpqOWWJmG3MtxvAGlf9KSesjADhgPZkUa8fYHSjAFOeYe4Xiybs6yzvplibS9GB0qRzT2xaOIkXKGrjxXPJZEM%2B6Es9MG%2BSSamFIY7JM7vcEGQiGi%2FMhWpePHciHgpJ%2BK8qpt1zLTAHp1pqYyNJQszDtSocs00n9L%2BO7vNXXMMXZMa5TVdsSOAnUX%2B29tmh3v9aZmkkKC%2BoIRg8eDzIlJ96FNJJQBx2nnQdo36E%2FiJ%2FjEmZqVD1TUk7EK%2F73%2FpRNJwjzcmuKLk4p1fwUlyludZWMEuBwfsmQ36o5B5OYaNY%2FhaVmH5tIqaSGDuS6LdLavtLwNnpHv7vivrhUWrDOZ%2Bt0Vf%2FENZx68nL%2BLwFK9NWqCMDCpZhi5eyhvZJGMEykEDAkJtEkBgriZUE6ueWqWfUGGQXHEekInwXugGmhoZng4z%2BWHoBgpLAix4KpQ0eVJ967AVjkyqVTRN0i9S64AOQNDt84BXqv9cK%2FaQIecLyvea1QDUPOKzxnsrDWrFbTHowNUSu8m%2BaJPp%2FF%2FlroCZ8oAx1ZUW9do%2BV2IV2MKSi6sIGOqUBY5D7mL9tEHrUeBryvqTJSIi0Ga5SbTO2qTCO1My1Oal90u%2FT3J58oqYNtwMrkj1UriSr7lVgwWs9LrrAibXBbu6iTBbX2glpIyexb1egr01rSueD4eCDfkTmZ%2BXsovjo86NksNimOJliaZhpqjYBws3F5stKhHKwSdT2%2FSUEBtzGC%2F8Kl3hjmnCLI0HpTOBcDMQVG%2FiT4OPUbaU6VCGN06QnfGLK&X-Amz-Signature=c5a6abd13656d8198451f60733422c9d83cf91bd6b471a40800d98ec61410a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRNV4S3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDtEs%2FqK4vKGpBt6xWMq2MxVVX8NLoqEvdorsA%2BSRJ1OwIgVB5dXSdzT8QGgZ75xyUzobTavg3WIN0IzOkJjpdDmfYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHZvetB%2F%2FxKMzCK5GircAwTdJ3K%2BDVFPu48GSnMyWLehHuHtsWH%2FhLmRhfvpXDrJgHHIF7%2BVZ%2FFut3dblUmh2RENXa1qja0Cl9QP7syoWzpqOWWJmG3MtxvAGlf9KSesjADhgPZkUa8fYHSjAFOeYe4Xiybs6yzvplibS9GB0qRzT2xaOIkXKGrjxXPJZEM%2B6Es9MG%2BSSamFIY7JM7vcEGQiGi%2FMhWpePHciHgpJ%2BK8qpt1zLTAHp1pqYyNJQszDtSocs00n9L%2BO7vNXXMMXZMa5TVdsSOAnUX%2B29tmh3v9aZmkkKC%2BoIRg8eDzIlJ96FNJJQBx2nnQdo36E%2FiJ%2FjEmZqVD1TUk7EK%2F73%2FpRNJwjzcmuKLk4p1fwUlyludZWMEuBwfsmQ36o5B5OYaNY%2FhaVmH5tIqaSGDuS6LdLavtLwNnpHv7vivrhUWrDOZ%2Bt0Vf%2FENZx68nL%2BLwFK9NWqCMDCpZhi5eyhvZJGMEykEDAkJtEkBgriZUE6ueWqWfUGGQXHEekInwXugGmhoZng4z%2BWHoBgpLAix4KpQ0eVJ967AVjkyqVTRN0i9S64AOQNDt84BXqv9cK%2FaQIecLyvea1QDUPOKzxnsrDWrFbTHowNUSu8m%2BaJPp%2FF%2FlroCZ8oAx1ZUW9do%2BV2IV2MKSi6sIGOqUBY5D7mL9tEHrUeBryvqTJSIi0Ga5SbTO2qTCO1My1Oal90u%2FT3J58oqYNtwMrkj1UriSr7lVgwWs9LrrAibXBbu6iTBbX2glpIyexb1egr01rSueD4eCDfkTmZ%2BXsovjo86NksNimOJliaZhpqjYBws3F5stKhHKwSdT2%2FSUEBtzGC%2F8Kl3hjmnCLI0HpTOBcDMQVG%2FiT4OPUbaU6VCGN06QnfGLK&X-Amz-Signature=a2ddf584ab7eb280ad3dc38aa829fcca2f5c334b22ee4e2cb742e7f32009eb86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
