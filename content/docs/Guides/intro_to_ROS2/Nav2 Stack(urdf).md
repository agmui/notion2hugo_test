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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFN3NXOB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ6UVz07%2F01CKH1Rz8E2JKOm90Tc1OZy8QyJL3AcskkgIgcfst337dShZjFz2VYJWkgmWEBXNUo2vRyYmhTmf%2B8TYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP%2FrI8FGJ9vXCayDAircA9wsA%2BbpS%2BdjPiCCeHYqaUjrm5QMmenf%2FoAQuvmjYX9%2BwIEjLMY0aYpLWSgOcHc7pyR9Vr8kL%2FBicnF0QwBv0lVl50Dpfb1%2FOk3UTSOSB8xEx%2FcxDx%2BaEjE9nyS8NDPg3apwiyrF3ChWGODfb6Pmcx1munGJQdtjp8XtOQ8mscQGxtdPvtiq6BN7H1v59wXXyujxInJbZfAP%2BfUif7tSuObyk%2BncnDzs%2BJI1Psrs8gzADZck7ju2v4epKQS8v%2FtAB5AojhRtzc4I%2BL4FcYFWkmc0Pe2He2GBJotFYhCkKmmSXbQvACCWA%2B241Y0yEvipPNm0ydEmNMBZDX9lXQEBj1ekvzYY06Bs0gyjouvAbAHHia7JlGxjRIL6wHACtfS0sRMHsc7QJhuGDt7R%2BZfkP139BqgH%2F88L49iqoj6awUvHTlvpT0DH4sVgl4Y3vaukVMC8M%2FEAgDGlAXvhvkAuWOoxC5mv82NDrEJYqixjtHDpKlGeYS6meyDOBbgErVGygi%2B56%2B63SoTQeAOM4IiTwoCZBejR8K%2Bh5ZkyEQwrNOCnn7Qm8PiA2sc2nl%2B2kOHJpNXXnSELPe4BFE4e%2F5wd1Y8aLwKlM7dUOqS2%2FG1S3VFThUMn%2ByuH0ss%2FZkHUMPG40r8GOqUB6OVcGASeYQRl9zEL5iZgsHVvhJALynjCMBksz%2BebxWEDHTAogBymSnyG2UjtsgPTDK7p%2BM37pqDpSdYfhdvMsg35LHFT1geFfroTtsMnVGirR9nio7IOwHcWAa9HJJXEE5ubG9dj2hYs2nMYKtUQL0FOdq%2BCxhs27Nyy26OE5ZPdBzQAnoKsjG81bMRrr5IkYwxm7j95vKkej5JdnnFOk%2BqgGaqt&X-Amz-Signature=dbf8f929068c2b1ccf78d8883ec50aabc857a6ee31db9d1de196487e68976040&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFN3NXOB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ6UVz07%2F01CKH1Rz8E2JKOm90Tc1OZy8QyJL3AcskkgIgcfst337dShZjFz2VYJWkgmWEBXNUo2vRyYmhTmf%2B8TYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP%2FrI8FGJ9vXCayDAircA9wsA%2BbpS%2BdjPiCCeHYqaUjrm5QMmenf%2FoAQuvmjYX9%2BwIEjLMY0aYpLWSgOcHc7pyR9Vr8kL%2FBicnF0QwBv0lVl50Dpfb1%2FOk3UTSOSB8xEx%2FcxDx%2BaEjE9nyS8NDPg3apwiyrF3ChWGODfb6Pmcx1munGJQdtjp8XtOQ8mscQGxtdPvtiq6BN7H1v59wXXyujxInJbZfAP%2BfUif7tSuObyk%2BncnDzs%2BJI1Psrs8gzADZck7ju2v4epKQS8v%2FtAB5AojhRtzc4I%2BL4FcYFWkmc0Pe2He2GBJotFYhCkKmmSXbQvACCWA%2B241Y0yEvipPNm0ydEmNMBZDX9lXQEBj1ekvzYY06Bs0gyjouvAbAHHia7JlGxjRIL6wHACtfS0sRMHsc7QJhuGDt7R%2BZfkP139BqgH%2F88L49iqoj6awUvHTlvpT0DH4sVgl4Y3vaukVMC8M%2FEAgDGlAXvhvkAuWOoxC5mv82NDrEJYqixjtHDpKlGeYS6meyDOBbgErVGygi%2B56%2B63SoTQeAOM4IiTwoCZBejR8K%2Bh5ZkyEQwrNOCnn7Qm8PiA2sc2nl%2B2kOHJpNXXnSELPe4BFE4e%2F5wd1Y8aLwKlM7dUOqS2%2FG1S3VFThUMn%2ByuH0ss%2FZkHUMPG40r8GOqUB6OVcGASeYQRl9zEL5iZgsHVvhJALynjCMBksz%2BebxWEDHTAogBymSnyG2UjtsgPTDK7p%2BM37pqDpSdYfhdvMsg35LHFT1geFfroTtsMnVGirR9nio7IOwHcWAa9HJJXEE5ubG9dj2hYs2nMYKtUQL0FOdq%2BCxhs27Nyy26OE5ZPdBzQAnoKsjG81bMRrr5IkYwxm7j95vKkej5JdnnFOk%2BqgGaqt&X-Amz-Signature=6fdb480cee908f0165a6f7bf54bd8bb0ebff354f46c180f5953ff3b1231663cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFN3NXOB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ6UVz07%2F01CKH1Rz8E2JKOm90Tc1OZy8QyJL3AcskkgIgcfst337dShZjFz2VYJWkgmWEBXNUo2vRyYmhTmf%2B8TYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP%2FrI8FGJ9vXCayDAircA9wsA%2BbpS%2BdjPiCCeHYqaUjrm5QMmenf%2FoAQuvmjYX9%2BwIEjLMY0aYpLWSgOcHc7pyR9Vr8kL%2FBicnF0QwBv0lVl50Dpfb1%2FOk3UTSOSB8xEx%2FcxDx%2BaEjE9nyS8NDPg3apwiyrF3ChWGODfb6Pmcx1munGJQdtjp8XtOQ8mscQGxtdPvtiq6BN7H1v59wXXyujxInJbZfAP%2BfUif7tSuObyk%2BncnDzs%2BJI1Psrs8gzADZck7ju2v4epKQS8v%2FtAB5AojhRtzc4I%2BL4FcYFWkmc0Pe2He2GBJotFYhCkKmmSXbQvACCWA%2B241Y0yEvipPNm0ydEmNMBZDX9lXQEBj1ekvzYY06Bs0gyjouvAbAHHia7JlGxjRIL6wHACtfS0sRMHsc7QJhuGDt7R%2BZfkP139BqgH%2F88L49iqoj6awUvHTlvpT0DH4sVgl4Y3vaukVMC8M%2FEAgDGlAXvhvkAuWOoxC5mv82NDrEJYqixjtHDpKlGeYS6meyDOBbgErVGygi%2B56%2B63SoTQeAOM4IiTwoCZBejR8K%2Bh5ZkyEQwrNOCnn7Qm8PiA2sc2nl%2B2kOHJpNXXnSELPe4BFE4e%2F5wd1Y8aLwKlM7dUOqS2%2FG1S3VFThUMn%2ByuH0ss%2FZkHUMPG40r8GOqUB6OVcGASeYQRl9zEL5iZgsHVvhJALynjCMBksz%2BebxWEDHTAogBymSnyG2UjtsgPTDK7p%2BM37pqDpSdYfhdvMsg35LHFT1geFfroTtsMnVGirR9nio7IOwHcWAa9HJJXEE5ubG9dj2hYs2nMYKtUQL0FOdq%2BCxhs27Nyy26OE5ZPdBzQAnoKsjG81bMRrr5IkYwxm7j95vKkej5JdnnFOk%2BqgGaqt&X-Amz-Signature=0bfe289bc460b5c2fe1d3855c1a9269d25b6baa0657bd8dc19dc4539b1b201f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFN3NXOB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ6UVz07%2F01CKH1Rz8E2JKOm90Tc1OZy8QyJL3AcskkgIgcfst337dShZjFz2VYJWkgmWEBXNUo2vRyYmhTmf%2B8TYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP%2FrI8FGJ9vXCayDAircA9wsA%2BbpS%2BdjPiCCeHYqaUjrm5QMmenf%2FoAQuvmjYX9%2BwIEjLMY0aYpLWSgOcHc7pyR9Vr8kL%2FBicnF0QwBv0lVl50Dpfb1%2FOk3UTSOSB8xEx%2FcxDx%2BaEjE9nyS8NDPg3apwiyrF3ChWGODfb6Pmcx1munGJQdtjp8XtOQ8mscQGxtdPvtiq6BN7H1v59wXXyujxInJbZfAP%2BfUif7tSuObyk%2BncnDzs%2BJI1Psrs8gzADZck7ju2v4epKQS8v%2FtAB5AojhRtzc4I%2BL4FcYFWkmc0Pe2He2GBJotFYhCkKmmSXbQvACCWA%2B241Y0yEvipPNm0ydEmNMBZDX9lXQEBj1ekvzYY06Bs0gyjouvAbAHHia7JlGxjRIL6wHACtfS0sRMHsc7QJhuGDt7R%2BZfkP139BqgH%2F88L49iqoj6awUvHTlvpT0DH4sVgl4Y3vaukVMC8M%2FEAgDGlAXvhvkAuWOoxC5mv82NDrEJYqixjtHDpKlGeYS6meyDOBbgErVGygi%2B56%2B63SoTQeAOM4IiTwoCZBejR8K%2Bh5ZkyEQwrNOCnn7Qm8PiA2sc2nl%2B2kOHJpNXXnSELPe4BFE4e%2F5wd1Y8aLwKlM7dUOqS2%2FG1S3VFThUMn%2ByuH0ss%2FZkHUMPG40r8GOqUB6OVcGASeYQRl9zEL5iZgsHVvhJALynjCMBksz%2BebxWEDHTAogBymSnyG2UjtsgPTDK7p%2BM37pqDpSdYfhdvMsg35LHFT1geFfroTtsMnVGirR9nio7IOwHcWAa9HJJXEE5ubG9dj2hYs2nMYKtUQL0FOdq%2BCxhs27Nyy26OE5ZPdBzQAnoKsjG81bMRrr5IkYwxm7j95vKkej5JdnnFOk%2BqgGaqt&X-Amz-Signature=7b8f16d0c0ea46205f6eb960281057ea0a21d4c491dc03c0ca7ad04d56a51426&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFN3NXOB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ6UVz07%2F01CKH1Rz8E2JKOm90Tc1OZy8QyJL3AcskkgIgcfst337dShZjFz2VYJWkgmWEBXNUo2vRyYmhTmf%2B8TYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP%2FrI8FGJ9vXCayDAircA9wsA%2BbpS%2BdjPiCCeHYqaUjrm5QMmenf%2FoAQuvmjYX9%2BwIEjLMY0aYpLWSgOcHc7pyR9Vr8kL%2FBicnF0QwBv0lVl50Dpfb1%2FOk3UTSOSB8xEx%2FcxDx%2BaEjE9nyS8NDPg3apwiyrF3ChWGODfb6Pmcx1munGJQdtjp8XtOQ8mscQGxtdPvtiq6BN7H1v59wXXyujxInJbZfAP%2BfUif7tSuObyk%2BncnDzs%2BJI1Psrs8gzADZck7ju2v4epKQS8v%2FtAB5AojhRtzc4I%2BL4FcYFWkmc0Pe2He2GBJotFYhCkKmmSXbQvACCWA%2B241Y0yEvipPNm0ydEmNMBZDX9lXQEBj1ekvzYY06Bs0gyjouvAbAHHia7JlGxjRIL6wHACtfS0sRMHsc7QJhuGDt7R%2BZfkP139BqgH%2F88L49iqoj6awUvHTlvpT0DH4sVgl4Y3vaukVMC8M%2FEAgDGlAXvhvkAuWOoxC5mv82NDrEJYqixjtHDpKlGeYS6meyDOBbgErVGygi%2B56%2B63SoTQeAOM4IiTwoCZBejR8K%2Bh5ZkyEQwrNOCnn7Qm8PiA2sc2nl%2B2kOHJpNXXnSELPe4BFE4e%2F5wd1Y8aLwKlM7dUOqS2%2FG1S3VFThUMn%2ByuH0ss%2FZkHUMPG40r8GOqUB6OVcGASeYQRl9zEL5iZgsHVvhJALynjCMBksz%2BebxWEDHTAogBymSnyG2UjtsgPTDK7p%2BM37pqDpSdYfhdvMsg35LHFT1geFfroTtsMnVGirR9nio7IOwHcWAa9HJJXEE5ubG9dj2hYs2nMYKtUQL0FOdq%2BCxhs27Nyy26OE5ZPdBzQAnoKsjG81bMRrr5IkYwxm7j95vKkej5JdnnFOk%2BqgGaqt&X-Amz-Signature=2f9b19394452135a8e68aff9390b4db7973789e80dca19e9feafd5f1b17ab309&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFN3NXOB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ6UVz07%2F01CKH1Rz8E2JKOm90Tc1OZy8QyJL3AcskkgIgcfst337dShZjFz2VYJWkgmWEBXNUo2vRyYmhTmf%2B8TYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP%2FrI8FGJ9vXCayDAircA9wsA%2BbpS%2BdjPiCCeHYqaUjrm5QMmenf%2FoAQuvmjYX9%2BwIEjLMY0aYpLWSgOcHc7pyR9Vr8kL%2FBicnF0QwBv0lVl50Dpfb1%2FOk3UTSOSB8xEx%2FcxDx%2BaEjE9nyS8NDPg3apwiyrF3ChWGODfb6Pmcx1munGJQdtjp8XtOQ8mscQGxtdPvtiq6BN7H1v59wXXyujxInJbZfAP%2BfUif7tSuObyk%2BncnDzs%2BJI1Psrs8gzADZck7ju2v4epKQS8v%2FtAB5AojhRtzc4I%2BL4FcYFWkmc0Pe2He2GBJotFYhCkKmmSXbQvACCWA%2B241Y0yEvipPNm0ydEmNMBZDX9lXQEBj1ekvzYY06Bs0gyjouvAbAHHia7JlGxjRIL6wHACtfS0sRMHsc7QJhuGDt7R%2BZfkP139BqgH%2F88L49iqoj6awUvHTlvpT0DH4sVgl4Y3vaukVMC8M%2FEAgDGlAXvhvkAuWOoxC5mv82NDrEJYqixjtHDpKlGeYS6meyDOBbgErVGygi%2B56%2B63SoTQeAOM4IiTwoCZBejR8K%2Bh5ZkyEQwrNOCnn7Qm8PiA2sc2nl%2B2kOHJpNXXnSELPe4BFE4e%2F5wd1Y8aLwKlM7dUOqS2%2FG1S3VFThUMn%2ByuH0ss%2FZkHUMPG40r8GOqUB6OVcGASeYQRl9zEL5iZgsHVvhJALynjCMBksz%2BebxWEDHTAogBymSnyG2UjtsgPTDK7p%2BM37pqDpSdYfhdvMsg35LHFT1geFfroTtsMnVGirR9nio7IOwHcWAa9HJJXEE5ubG9dj2hYs2nMYKtUQL0FOdq%2BCxhs27Nyy26OE5ZPdBzQAnoKsjG81bMRrr5IkYwxm7j95vKkej5JdnnFOk%2BqgGaqt&X-Amz-Signature=1f5649bd9ca24a3cc785aa339f9df969c9af25e012926bd0ff3fd13aac0cc0b6&X-Amz-SignedHeaders=host&x-id=GetObject)
