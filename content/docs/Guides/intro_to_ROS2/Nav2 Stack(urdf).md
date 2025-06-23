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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7QISOL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBkF%2F%2FHtvgOl%2BbX4ZpARZb%2Fo7SXXmyyPjYUHfJ2MlLGUAiEAuUdzhr0Zp3HQbC1yJtX8RQSc8hpiSsguq2fHO%2BvnEEQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJS8eNsotCc9UmQTOCrcA0l%2BwjFfVfkdU48GBFjmO7UjfFpESLnximI1l5Nx8J6Ma2%2Bo1XGpuIqIA%2BeXB84ng2%2FzX8UaNlEmx5DsJdk0chBgl9UrgYlPCAl0zzTa5bRf%2Fnlci2oxoJezaifOfKc%2FHVo%2B5NxfrBiFswE4KTerKbL7cDHWNzIt6BhseYn3qzi9jV2%2BSwBEqE2V4rMJnWD3gC15%2BJW1hhONLLqadFV2qNpFv9v4V0%2F2wBfE99YYUOm4oOy0EIKKUvqY3L3SQFCMo8LWnbo%2FW0iOU5MvcfSzXLmUEigdOUy59lo19DfPuWkhoR2DaBQPTZ4M8xoNp1GOxxPfsZRVdQhYKEN%2FB6iPuZoMeOhk6jQBWldgPMjYZVFZAsgTPUPq5Gx3TLrrIjxLiedoOtDfLjuZFEJ666WDRzfOORGcUaVr159H%2BboosYYhb7i2yHhvgdDKBdUCijrOqmqaAP7hXoXEP%2BCKYuB4Uh94lAItHwPlKPMDiVua5pQvpEVSzXgpggaPBZIh9Lt8dL1JzNj%2Fut8NX6qlN78j1ZAqod%2FEaFP19RSxFkdYsD%2FcT9PKQAldUlRlCEYvuQFeYrtkS798pEY9BOfQa1rI%2BOL8zkpCU492bcl2Nf1WPn2yQbETdBr1M6Qt4FZFMJn05MIGOqUBr6dszqI1%2F2HqYhLn3%2BvqgsVo0N0xXU5xSknUNfMRI2QI5RZ63jfHc96tgDFWophuSAkqV1dg6HBuPWhXhNnm6rssphvvjYuG1AL5XFzlM7PG%2Fv9WY0nkBy911RtdoNxrOOU6d0eDhbOfKMTPJZaSH9SumPz3hm9RkSrpBVBgppmMNDyKJrNA51eUymDExNfxs%2Budeyp9Ry60ttVbKTQDOdYWMxjK&X-Amz-Signature=5e35e69684026df8a12c09ad1658707e34c30fc68a7793216adbd3c7def1c3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7QISOL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBkF%2F%2FHtvgOl%2BbX4ZpARZb%2Fo7SXXmyyPjYUHfJ2MlLGUAiEAuUdzhr0Zp3HQbC1yJtX8RQSc8hpiSsguq2fHO%2BvnEEQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJS8eNsotCc9UmQTOCrcA0l%2BwjFfVfkdU48GBFjmO7UjfFpESLnximI1l5Nx8J6Ma2%2Bo1XGpuIqIA%2BeXB84ng2%2FzX8UaNlEmx5DsJdk0chBgl9UrgYlPCAl0zzTa5bRf%2Fnlci2oxoJezaifOfKc%2FHVo%2B5NxfrBiFswE4KTerKbL7cDHWNzIt6BhseYn3qzi9jV2%2BSwBEqE2V4rMJnWD3gC15%2BJW1hhONLLqadFV2qNpFv9v4V0%2F2wBfE99YYUOm4oOy0EIKKUvqY3L3SQFCMo8LWnbo%2FW0iOU5MvcfSzXLmUEigdOUy59lo19DfPuWkhoR2DaBQPTZ4M8xoNp1GOxxPfsZRVdQhYKEN%2FB6iPuZoMeOhk6jQBWldgPMjYZVFZAsgTPUPq5Gx3TLrrIjxLiedoOtDfLjuZFEJ666WDRzfOORGcUaVr159H%2BboosYYhb7i2yHhvgdDKBdUCijrOqmqaAP7hXoXEP%2BCKYuB4Uh94lAItHwPlKPMDiVua5pQvpEVSzXgpggaPBZIh9Lt8dL1JzNj%2Fut8NX6qlN78j1ZAqod%2FEaFP19RSxFkdYsD%2FcT9PKQAldUlRlCEYvuQFeYrtkS798pEY9BOfQa1rI%2BOL8zkpCU492bcl2Nf1WPn2yQbETdBr1M6Qt4FZFMJn05MIGOqUBr6dszqI1%2F2HqYhLn3%2BvqgsVo0N0xXU5xSknUNfMRI2QI5RZ63jfHc96tgDFWophuSAkqV1dg6HBuPWhXhNnm6rssphvvjYuG1AL5XFzlM7PG%2Fv9WY0nkBy911RtdoNxrOOU6d0eDhbOfKMTPJZaSH9SumPz3hm9RkSrpBVBgppmMNDyKJrNA51eUymDExNfxs%2Budeyp9Ry60ttVbKTQDOdYWMxjK&X-Amz-Signature=1982c5700a0afafad7192b717f049873ea4256095b591acb0584ab9f0c731e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7QISOL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBkF%2F%2FHtvgOl%2BbX4ZpARZb%2Fo7SXXmyyPjYUHfJ2MlLGUAiEAuUdzhr0Zp3HQbC1yJtX8RQSc8hpiSsguq2fHO%2BvnEEQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJS8eNsotCc9UmQTOCrcA0l%2BwjFfVfkdU48GBFjmO7UjfFpESLnximI1l5Nx8J6Ma2%2Bo1XGpuIqIA%2BeXB84ng2%2FzX8UaNlEmx5DsJdk0chBgl9UrgYlPCAl0zzTa5bRf%2Fnlci2oxoJezaifOfKc%2FHVo%2B5NxfrBiFswE4KTerKbL7cDHWNzIt6BhseYn3qzi9jV2%2BSwBEqE2V4rMJnWD3gC15%2BJW1hhONLLqadFV2qNpFv9v4V0%2F2wBfE99YYUOm4oOy0EIKKUvqY3L3SQFCMo8LWnbo%2FW0iOU5MvcfSzXLmUEigdOUy59lo19DfPuWkhoR2DaBQPTZ4M8xoNp1GOxxPfsZRVdQhYKEN%2FB6iPuZoMeOhk6jQBWldgPMjYZVFZAsgTPUPq5Gx3TLrrIjxLiedoOtDfLjuZFEJ666WDRzfOORGcUaVr159H%2BboosYYhb7i2yHhvgdDKBdUCijrOqmqaAP7hXoXEP%2BCKYuB4Uh94lAItHwPlKPMDiVua5pQvpEVSzXgpggaPBZIh9Lt8dL1JzNj%2Fut8NX6qlN78j1ZAqod%2FEaFP19RSxFkdYsD%2FcT9PKQAldUlRlCEYvuQFeYrtkS798pEY9BOfQa1rI%2BOL8zkpCU492bcl2Nf1WPn2yQbETdBr1M6Qt4FZFMJn05MIGOqUBr6dszqI1%2F2HqYhLn3%2BvqgsVo0N0xXU5xSknUNfMRI2QI5RZ63jfHc96tgDFWophuSAkqV1dg6HBuPWhXhNnm6rssphvvjYuG1AL5XFzlM7PG%2Fv9WY0nkBy911RtdoNxrOOU6d0eDhbOfKMTPJZaSH9SumPz3hm9RkSrpBVBgppmMNDyKJrNA51eUymDExNfxs%2Budeyp9Ry60ttVbKTQDOdYWMxjK&X-Amz-Signature=3efde9c5a68d9ca6c15381aaccf50f6af324af8f59eef9d81f12a3936136301f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7QISOL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBkF%2F%2FHtvgOl%2BbX4ZpARZb%2Fo7SXXmyyPjYUHfJ2MlLGUAiEAuUdzhr0Zp3HQbC1yJtX8RQSc8hpiSsguq2fHO%2BvnEEQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJS8eNsotCc9UmQTOCrcA0l%2BwjFfVfkdU48GBFjmO7UjfFpESLnximI1l5Nx8J6Ma2%2Bo1XGpuIqIA%2BeXB84ng2%2FzX8UaNlEmx5DsJdk0chBgl9UrgYlPCAl0zzTa5bRf%2Fnlci2oxoJezaifOfKc%2FHVo%2B5NxfrBiFswE4KTerKbL7cDHWNzIt6BhseYn3qzi9jV2%2BSwBEqE2V4rMJnWD3gC15%2BJW1hhONLLqadFV2qNpFv9v4V0%2F2wBfE99YYUOm4oOy0EIKKUvqY3L3SQFCMo8LWnbo%2FW0iOU5MvcfSzXLmUEigdOUy59lo19DfPuWkhoR2DaBQPTZ4M8xoNp1GOxxPfsZRVdQhYKEN%2FB6iPuZoMeOhk6jQBWldgPMjYZVFZAsgTPUPq5Gx3TLrrIjxLiedoOtDfLjuZFEJ666WDRzfOORGcUaVr159H%2BboosYYhb7i2yHhvgdDKBdUCijrOqmqaAP7hXoXEP%2BCKYuB4Uh94lAItHwPlKPMDiVua5pQvpEVSzXgpggaPBZIh9Lt8dL1JzNj%2Fut8NX6qlN78j1ZAqod%2FEaFP19RSxFkdYsD%2FcT9PKQAldUlRlCEYvuQFeYrtkS798pEY9BOfQa1rI%2BOL8zkpCU492bcl2Nf1WPn2yQbETdBr1M6Qt4FZFMJn05MIGOqUBr6dszqI1%2F2HqYhLn3%2BvqgsVo0N0xXU5xSknUNfMRI2QI5RZ63jfHc96tgDFWophuSAkqV1dg6HBuPWhXhNnm6rssphvvjYuG1AL5XFzlM7PG%2Fv9WY0nkBy911RtdoNxrOOU6d0eDhbOfKMTPJZaSH9SumPz3hm9RkSrpBVBgppmMNDyKJrNA51eUymDExNfxs%2Budeyp9Ry60ttVbKTQDOdYWMxjK&X-Amz-Signature=57507aa65de61e0fe638ecb8afdbb622a8a7b11812d8974f7d2b79fe22b7ceeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7QISOL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBkF%2F%2FHtvgOl%2BbX4ZpARZb%2Fo7SXXmyyPjYUHfJ2MlLGUAiEAuUdzhr0Zp3HQbC1yJtX8RQSc8hpiSsguq2fHO%2BvnEEQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJS8eNsotCc9UmQTOCrcA0l%2BwjFfVfkdU48GBFjmO7UjfFpESLnximI1l5Nx8J6Ma2%2Bo1XGpuIqIA%2BeXB84ng2%2FzX8UaNlEmx5DsJdk0chBgl9UrgYlPCAl0zzTa5bRf%2Fnlci2oxoJezaifOfKc%2FHVo%2B5NxfrBiFswE4KTerKbL7cDHWNzIt6BhseYn3qzi9jV2%2BSwBEqE2V4rMJnWD3gC15%2BJW1hhONLLqadFV2qNpFv9v4V0%2F2wBfE99YYUOm4oOy0EIKKUvqY3L3SQFCMo8LWnbo%2FW0iOU5MvcfSzXLmUEigdOUy59lo19DfPuWkhoR2DaBQPTZ4M8xoNp1GOxxPfsZRVdQhYKEN%2FB6iPuZoMeOhk6jQBWldgPMjYZVFZAsgTPUPq5Gx3TLrrIjxLiedoOtDfLjuZFEJ666WDRzfOORGcUaVr159H%2BboosYYhb7i2yHhvgdDKBdUCijrOqmqaAP7hXoXEP%2BCKYuB4Uh94lAItHwPlKPMDiVua5pQvpEVSzXgpggaPBZIh9Lt8dL1JzNj%2Fut8NX6qlN78j1ZAqod%2FEaFP19RSxFkdYsD%2FcT9PKQAldUlRlCEYvuQFeYrtkS798pEY9BOfQa1rI%2BOL8zkpCU492bcl2Nf1WPn2yQbETdBr1M6Qt4FZFMJn05MIGOqUBr6dszqI1%2F2HqYhLn3%2BvqgsVo0N0xXU5xSknUNfMRI2QI5RZ63jfHc96tgDFWophuSAkqV1dg6HBuPWhXhNnm6rssphvvjYuG1AL5XFzlM7PG%2Fv9WY0nkBy911RtdoNxrOOU6d0eDhbOfKMTPJZaSH9SumPz3hm9RkSrpBVBgppmMNDyKJrNA51eUymDExNfxs%2Budeyp9Ry60ttVbKTQDOdYWMxjK&X-Amz-Signature=fbdb7539252d11a4b3a4fab67ed2cf56dd49ac922567702e522834389cf18281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7QISOL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBkF%2F%2FHtvgOl%2BbX4ZpARZb%2Fo7SXXmyyPjYUHfJ2MlLGUAiEAuUdzhr0Zp3HQbC1yJtX8RQSc8hpiSsguq2fHO%2BvnEEQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJS8eNsotCc9UmQTOCrcA0l%2BwjFfVfkdU48GBFjmO7UjfFpESLnximI1l5Nx8J6Ma2%2Bo1XGpuIqIA%2BeXB84ng2%2FzX8UaNlEmx5DsJdk0chBgl9UrgYlPCAl0zzTa5bRf%2Fnlci2oxoJezaifOfKc%2FHVo%2B5NxfrBiFswE4KTerKbL7cDHWNzIt6BhseYn3qzi9jV2%2BSwBEqE2V4rMJnWD3gC15%2BJW1hhONLLqadFV2qNpFv9v4V0%2F2wBfE99YYUOm4oOy0EIKKUvqY3L3SQFCMo8LWnbo%2FW0iOU5MvcfSzXLmUEigdOUy59lo19DfPuWkhoR2DaBQPTZ4M8xoNp1GOxxPfsZRVdQhYKEN%2FB6iPuZoMeOhk6jQBWldgPMjYZVFZAsgTPUPq5Gx3TLrrIjxLiedoOtDfLjuZFEJ666WDRzfOORGcUaVr159H%2BboosYYhb7i2yHhvgdDKBdUCijrOqmqaAP7hXoXEP%2BCKYuB4Uh94lAItHwPlKPMDiVua5pQvpEVSzXgpggaPBZIh9Lt8dL1JzNj%2Fut8NX6qlN78j1ZAqod%2FEaFP19RSxFkdYsD%2FcT9PKQAldUlRlCEYvuQFeYrtkS798pEY9BOfQa1rI%2BOL8zkpCU492bcl2Nf1WPn2yQbETdBr1M6Qt4FZFMJn05MIGOqUBr6dszqI1%2F2HqYhLn3%2BvqgsVo0N0xXU5xSknUNfMRI2QI5RZ63jfHc96tgDFWophuSAkqV1dg6HBuPWhXhNnm6rssphvvjYuG1AL5XFzlM7PG%2Fv9WY0nkBy911RtdoNxrOOU6d0eDhbOfKMTPJZaSH9SumPz3hm9RkSrpBVBgppmMNDyKJrNA51eUymDExNfxs%2Budeyp9Ry60ttVbKTQDOdYWMxjK&X-Amz-Signature=7f513ad59441d017d034b2a81c05aeff4843d91dd961947b94a862f0517bd8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
