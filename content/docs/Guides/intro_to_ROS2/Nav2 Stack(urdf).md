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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UNNZOZ3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcRnIRu87x8g0s9pIogkgwvCAp9WNBpCQMJo2q7CiU2gIgItpHbYKAq0MkxV0z39WJCCIH6jpsZOQMWpe9fGdEFYAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwkYs4MHJOIlWbO%2ByrcA0BLikogdKgPbTnEwGIzF9zKIMyM4%2B5H1pDw8M121afRrDUEim5SXcP9kRR0Ej3d494tswvlEn5k6TPcdUuNb9g8%2Fo5KVYhhKy7vsRz9WMi5GEaECVXbo%2B%2BrcdZn%2FqFY4yBlXdsc%2BakBxcWMN5fCarOVxm94Aj%2B49gscxcryg944IJVGj%2Fb%2Fo8VzvrcRvvnp3gU3832piuKKFxiPjpKjkMUanz%2BectLtOVYxNOQPDj7Ed9oFXFqEIE6JsGOiue66LQmq6ElI0%2F2uBwVW%2BUTw%2BsVMdxhKbKo26jcc1B0DBtsumlt3yOJ7kGBH0c5pT%2F3KxDPyTHaMI3%2BcLwO4JYfR%2F8iEtzMm%2FRnTC0DK5e2T6OvKfvF5OavAD5lhiNP0HVTQC8OK3xL3DUJ52KFBkcosgjIuAJxVZNtyMMBOvCFmvSKgvi3NJrcxORTxFFHqddONp9X80%2F%2FUNh0NX%2BOmHoN3bQaEW889wQvBQHEzyzL3%2B4ppc1gKi0WI18%2F6oubdvB9Q3vTc2le9Bn2n85gTup%2FemCBAdHyBixm1%2FvIue6NALMF3pX0TN5A1ivGU2SkT1lGMdvUzuc%2BCmRUgHGjQmUjt%2FAoZ8Yr0ZtGM%2FeM9o7RqRcw3qP3WWeH%2Fi3%2F%2BamXRMPagnsIGOqUBMGHHNzzjRlokPZuuNuu%2FJBecRzrQQZovZOCwhMIA7x8crncLTErea6%2FseDCXXNrPJAIKo2D0fqRBh%2FCLb6QSSxNunh8kfoyFRhjrzz0aKRRC4s7BwSifsdxXxsPFv6uS%2BwDWOg1%2FmgSB8b4TeuhvOzp2Cwe4Azcdn7CBTUMchgCOWNDN5uqDmJPCH26rWISlwhm4RHEzepaf6u12xrrCGPOxSJLa&X-Amz-Signature=08fb20220d859d3b56ce1eaae0fdafcbd88950c6b052403236285ce2716f2f18&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UNNZOZ3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcRnIRu87x8g0s9pIogkgwvCAp9WNBpCQMJo2q7CiU2gIgItpHbYKAq0MkxV0z39WJCCIH6jpsZOQMWpe9fGdEFYAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwkYs4MHJOIlWbO%2ByrcA0BLikogdKgPbTnEwGIzF9zKIMyM4%2B5H1pDw8M121afRrDUEim5SXcP9kRR0Ej3d494tswvlEn5k6TPcdUuNb9g8%2Fo5KVYhhKy7vsRz9WMi5GEaECVXbo%2B%2BrcdZn%2FqFY4yBlXdsc%2BakBxcWMN5fCarOVxm94Aj%2B49gscxcryg944IJVGj%2Fb%2Fo8VzvrcRvvnp3gU3832piuKKFxiPjpKjkMUanz%2BectLtOVYxNOQPDj7Ed9oFXFqEIE6JsGOiue66LQmq6ElI0%2F2uBwVW%2BUTw%2BsVMdxhKbKo26jcc1B0DBtsumlt3yOJ7kGBH0c5pT%2F3KxDPyTHaMI3%2BcLwO4JYfR%2F8iEtzMm%2FRnTC0DK5e2T6OvKfvF5OavAD5lhiNP0HVTQC8OK3xL3DUJ52KFBkcosgjIuAJxVZNtyMMBOvCFmvSKgvi3NJrcxORTxFFHqddONp9X80%2F%2FUNh0NX%2BOmHoN3bQaEW889wQvBQHEzyzL3%2B4ppc1gKi0WI18%2F6oubdvB9Q3vTc2le9Bn2n85gTup%2FemCBAdHyBixm1%2FvIue6NALMF3pX0TN5A1ivGU2SkT1lGMdvUzuc%2BCmRUgHGjQmUjt%2FAoZ8Yr0ZtGM%2FeM9o7RqRcw3qP3WWeH%2Fi3%2F%2BamXRMPagnsIGOqUBMGHHNzzjRlokPZuuNuu%2FJBecRzrQQZovZOCwhMIA7x8crncLTErea6%2FseDCXXNrPJAIKo2D0fqRBh%2FCLb6QSSxNunh8kfoyFRhjrzz0aKRRC4s7BwSifsdxXxsPFv6uS%2BwDWOg1%2FmgSB8b4TeuhvOzp2Cwe4Azcdn7CBTUMchgCOWNDN5uqDmJPCH26rWISlwhm4RHEzepaf6u12xrrCGPOxSJLa&X-Amz-Signature=53ae202c68365abb277837204fd9bce37bcee75983ba7242677f065a0d634abf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UNNZOZ3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcRnIRu87x8g0s9pIogkgwvCAp9WNBpCQMJo2q7CiU2gIgItpHbYKAq0MkxV0z39WJCCIH6jpsZOQMWpe9fGdEFYAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwkYs4MHJOIlWbO%2ByrcA0BLikogdKgPbTnEwGIzF9zKIMyM4%2B5H1pDw8M121afRrDUEim5SXcP9kRR0Ej3d494tswvlEn5k6TPcdUuNb9g8%2Fo5KVYhhKy7vsRz9WMi5GEaECVXbo%2B%2BrcdZn%2FqFY4yBlXdsc%2BakBxcWMN5fCarOVxm94Aj%2B49gscxcryg944IJVGj%2Fb%2Fo8VzvrcRvvnp3gU3832piuKKFxiPjpKjkMUanz%2BectLtOVYxNOQPDj7Ed9oFXFqEIE6JsGOiue66LQmq6ElI0%2F2uBwVW%2BUTw%2BsVMdxhKbKo26jcc1B0DBtsumlt3yOJ7kGBH0c5pT%2F3KxDPyTHaMI3%2BcLwO4JYfR%2F8iEtzMm%2FRnTC0DK5e2T6OvKfvF5OavAD5lhiNP0HVTQC8OK3xL3DUJ52KFBkcosgjIuAJxVZNtyMMBOvCFmvSKgvi3NJrcxORTxFFHqddONp9X80%2F%2FUNh0NX%2BOmHoN3bQaEW889wQvBQHEzyzL3%2B4ppc1gKi0WI18%2F6oubdvB9Q3vTc2le9Bn2n85gTup%2FemCBAdHyBixm1%2FvIue6NALMF3pX0TN5A1ivGU2SkT1lGMdvUzuc%2BCmRUgHGjQmUjt%2FAoZ8Yr0ZtGM%2FeM9o7RqRcw3qP3WWeH%2Fi3%2F%2BamXRMPagnsIGOqUBMGHHNzzjRlokPZuuNuu%2FJBecRzrQQZovZOCwhMIA7x8crncLTErea6%2FseDCXXNrPJAIKo2D0fqRBh%2FCLb6QSSxNunh8kfoyFRhjrzz0aKRRC4s7BwSifsdxXxsPFv6uS%2BwDWOg1%2FmgSB8b4TeuhvOzp2Cwe4Azcdn7CBTUMchgCOWNDN5uqDmJPCH26rWISlwhm4RHEzepaf6u12xrrCGPOxSJLa&X-Amz-Signature=2425493f7ef2721c3b11a0a12a6170ffef97f94f72a8dab100f0ea063f67dc19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UNNZOZ3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcRnIRu87x8g0s9pIogkgwvCAp9WNBpCQMJo2q7CiU2gIgItpHbYKAq0MkxV0z39WJCCIH6jpsZOQMWpe9fGdEFYAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwkYs4MHJOIlWbO%2ByrcA0BLikogdKgPbTnEwGIzF9zKIMyM4%2B5H1pDw8M121afRrDUEim5SXcP9kRR0Ej3d494tswvlEn5k6TPcdUuNb9g8%2Fo5KVYhhKy7vsRz9WMi5GEaECVXbo%2B%2BrcdZn%2FqFY4yBlXdsc%2BakBxcWMN5fCarOVxm94Aj%2B49gscxcryg944IJVGj%2Fb%2Fo8VzvrcRvvnp3gU3832piuKKFxiPjpKjkMUanz%2BectLtOVYxNOQPDj7Ed9oFXFqEIE6JsGOiue66LQmq6ElI0%2F2uBwVW%2BUTw%2BsVMdxhKbKo26jcc1B0DBtsumlt3yOJ7kGBH0c5pT%2F3KxDPyTHaMI3%2BcLwO4JYfR%2F8iEtzMm%2FRnTC0DK5e2T6OvKfvF5OavAD5lhiNP0HVTQC8OK3xL3DUJ52KFBkcosgjIuAJxVZNtyMMBOvCFmvSKgvi3NJrcxORTxFFHqddONp9X80%2F%2FUNh0NX%2BOmHoN3bQaEW889wQvBQHEzyzL3%2B4ppc1gKi0WI18%2F6oubdvB9Q3vTc2le9Bn2n85gTup%2FemCBAdHyBixm1%2FvIue6NALMF3pX0TN5A1ivGU2SkT1lGMdvUzuc%2BCmRUgHGjQmUjt%2FAoZ8Yr0ZtGM%2FeM9o7RqRcw3qP3WWeH%2Fi3%2F%2BamXRMPagnsIGOqUBMGHHNzzjRlokPZuuNuu%2FJBecRzrQQZovZOCwhMIA7x8crncLTErea6%2FseDCXXNrPJAIKo2D0fqRBh%2FCLb6QSSxNunh8kfoyFRhjrzz0aKRRC4s7BwSifsdxXxsPFv6uS%2BwDWOg1%2FmgSB8b4TeuhvOzp2Cwe4Azcdn7CBTUMchgCOWNDN5uqDmJPCH26rWISlwhm4RHEzepaf6u12xrrCGPOxSJLa&X-Amz-Signature=03f519c0cb0392d7df940c72cdd9df50a966a313c08ff2772689b6a91723a0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UNNZOZ3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcRnIRu87x8g0s9pIogkgwvCAp9WNBpCQMJo2q7CiU2gIgItpHbYKAq0MkxV0z39WJCCIH6jpsZOQMWpe9fGdEFYAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwkYs4MHJOIlWbO%2ByrcA0BLikogdKgPbTnEwGIzF9zKIMyM4%2B5H1pDw8M121afRrDUEim5SXcP9kRR0Ej3d494tswvlEn5k6TPcdUuNb9g8%2Fo5KVYhhKy7vsRz9WMi5GEaECVXbo%2B%2BrcdZn%2FqFY4yBlXdsc%2BakBxcWMN5fCarOVxm94Aj%2B49gscxcryg944IJVGj%2Fb%2Fo8VzvrcRvvnp3gU3832piuKKFxiPjpKjkMUanz%2BectLtOVYxNOQPDj7Ed9oFXFqEIE6JsGOiue66LQmq6ElI0%2F2uBwVW%2BUTw%2BsVMdxhKbKo26jcc1B0DBtsumlt3yOJ7kGBH0c5pT%2F3KxDPyTHaMI3%2BcLwO4JYfR%2F8iEtzMm%2FRnTC0DK5e2T6OvKfvF5OavAD5lhiNP0HVTQC8OK3xL3DUJ52KFBkcosgjIuAJxVZNtyMMBOvCFmvSKgvi3NJrcxORTxFFHqddONp9X80%2F%2FUNh0NX%2BOmHoN3bQaEW889wQvBQHEzyzL3%2B4ppc1gKi0WI18%2F6oubdvB9Q3vTc2le9Bn2n85gTup%2FemCBAdHyBixm1%2FvIue6NALMF3pX0TN5A1ivGU2SkT1lGMdvUzuc%2BCmRUgHGjQmUjt%2FAoZ8Yr0ZtGM%2FeM9o7RqRcw3qP3WWeH%2Fi3%2F%2BamXRMPagnsIGOqUBMGHHNzzjRlokPZuuNuu%2FJBecRzrQQZovZOCwhMIA7x8crncLTErea6%2FseDCXXNrPJAIKo2D0fqRBh%2FCLb6QSSxNunh8kfoyFRhjrzz0aKRRC4s7BwSifsdxXxsPFv6uS%2BwDWOg1%2FmgSB8b4TeuhvOzp2Cwe4Azcdn7CBTUMchgCOWNDN5uqDmJPCH26rWISlwhm4RHEzepaf6u12xrrCGPOxSJLa&X-Amz-Signature=f1c6d58171661bfdfd166ad2d9cf01744136e0dfc5d9e6163b16f1fbee4f1278&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UNNZOZ3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcRnIRu87x8g0s9pIogkgwvCAp9WNBpCQMJo2q7CiU2gIgItpHbYKAq0MkxV0z39WJCCIH6jpsZOQMWpe9fGdEFYAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwkYs4MHJOIlWbO%2ByrcA0BLikogdKgPbTnEwGIzF9zKIMyM4%2B5H1pDw8M121afRrDUEim5SXcP9kRR0Ej3d494tswvlEn5k6TPcdUuNb9g8%2Fo5KVYhhKy7vsRz9WMi5GEaECVXbo%2B%2BrcdZn%2FqFY4yBlXdsc%2BakBxcWMN5fCarOVxm94Aj%2B49gscxcryg944IJVGj%2Fb%2Fo8VzvrcRvvnp3gU3832piuKKFxiPjpKjkMUanz%2BectLtOVYxNOQPDj7Ed9oFXFqEIE6JsGOiue66LQmq6ElI0%2F2uBwVW%2BUTw%2BsVMdxhKbKo26jcc1B0DBtsumlt3yOJ7kGBH0c5pT%2F3KxDPyTHaMI3%2BcLwO4JYfR%2F8iEtzMm%2FRnTC0DK5e2T6OvKfvF5OavAD5lhiNP0HVTQC8OK3xL3DUJ52KFBkcosgjIuAJxVZNtyMMBOvCFmvSKgvi3NJrcxORTxFFHqddONp9X80%2F%2FUNh0NX%2BOmHoN3bQaEW889wQvBQHEzyzL3%2B4ppc1gKi0WI18%2F6oubdvB9Q3vTc2le9Bn2n85gTup%2FemCBAdHyBixm1%2FvIue6NALMF3pX0TN5A1ivGU2SkT1lGMdvUzuc%2BCmRUgHGjQmUjt%2FAoZ8Yr0ZtGM%2FeM9o7RqRcw3qP3WWeH%2Fi3%2F%2BamXRMPagnsIGOqUBMGHHNzzjRlokPZuuNuu%2FJBecRzrQQZovZOCwhMIA7x8crncLTErea6%2FseDCXXNrPJAIKo2D0fqRBh%2FCLb6QSSxNunh8kfoyFRhjrzz0aKRRC4s7BwSifsdxXxsPFv6uS%2BwDWOg1%2FmgSB8b4TeuhvOzp2Cwe4Azcdn7CBTUMchgCOWNDN5uqDmJPCH26rWISlwhm4RHEzepaf6u12xrrCGPOxSJLa&X-Amz-Signature=6e94faaf0f3ef04a3d3d0b09c2314490ce2df49d008a0ae98155654658d10acd&X-Amz-SignedHeaders=host&x-id=GetObject)
