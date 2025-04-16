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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZRJI3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfXB7NTZhFJcBaqG3i1mbzCvUEqHHExJPoFYsm2OWzJAiEArKuOTzLpTnFfF1h6CWPFtCP4Q2KcWTygxbXUgrFWSr0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDHv5ry%2Bb3i7ISJJNyrcAw4lrKfns2M0WVc2e2DpYTQLf4sP5P0rJnj0Ng7NxvhSF3z4zBPwV%2F2i%2BZ3kLUc1dWQlD8vlsjjNCEL%2B4MgKHR1Sy9OY14XIdPxBWCtHThfxSXKKuHKdyu%2FQgrJWXisqDY01MTd1LSvVmCpI1gn8csynoJzEHlXbG96X%2B6zAzjHVHzZjD1Df%2BROM7%2ByYLYWMzy75PNxVcdLkt5GAU8Y7DgzRL%2BFhyltIOjPzXUaZZnvjd89CpLvDlOLDtOdZNR6JJL1l%2BSevHbxz9rttobOqgPVYpUeAmIlotaKl4UsxWex44gamkUa495nHepAebLd%2Bdq5HvNKdpSmukMTe9nN326cwiY734EwUBJsdt%2FA3yVO2X4BBs6LXfXmHpFaNTNPPSjDBh0xxmJ3Kun2CUz5LeojjwMywXpa9SGJkCbHbmvsiB%2FNSIGqiOfnJ7SU2nfW%2FPgx%2Bb0gIHqYkgdKLHAGDQWtCKnWyyBTBGRd8SbFU%2BILyyMpYcY1I3M97A%2F77EWVd2JwnXZucQVSkSCbQNaSZz7YQhAjXQE5wRUmRhxEm8brBN2t04sIHbhTxGyfMukpFuIIrsylHl%2Fnr1qPW%2BtjmKNtKHIiRM%2FfDmaDIcycmBUu1Zr3YTlXhUZ9jEjeBMNiq%2F78GOqUBBtwZfnA3sR7LIo29hzZLKEOjkZmvNUj7FFBixVtXkIcOcVv63GLbikiC7FX4fcIQAgCi%2FWHKIVfUNR6A56gp495CJB87glUmowVToB%2F3NEuBdEEcClJL9483YDGk7FYB2xuQnndZ2Dvh6bfRnb7KirNa4IlNkcp94xwZHV0YTUAk0F%2BwvJnDkrn3Wv1j7WCxcqgwmTQqgbkVTLkWQ3oWUoxq9JEr&X-Amz-Signature=220f538d16a7f3a1f39a61069d0ea3e0f3a5da5e6473c7a076b4756f57db23fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZRJI3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfXB7NTZhFJcBaqG3i1mbzCvUEqHHExJPoFYsm2OWzJAiEArKuOTzLpTnFfF1h6CWPFtCP4Q2KcWTygxbXUgrFWSr0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDHv5ry%2Bb3i7ISJJNyrcAw4lrKfns2M0WVc2e2DpYTQLf4sP5P0rJnj0Ng7NxvhSF3z4zBPwV%2F2i%2BZ3kLUc1dWQlD8vlsjjNCEL%2B4MgKHR1Sy9OY14XIdPxBWCtHThfxSXKKuHKdyu%2FQgrJWXisqDY01MTd1LSvVmCpI1gn8csynoJzEHlXbG96X%2B6zAzjHVHzZjD1Df%2BROM7%2ByYLYWMzy75PNxVcdLkt5GAU8Y7DgzRL%2BFhyltIOjPzXUaZZnvjd89CpLvDlOLDtOdZNR6JJL1l%2BSevHbxz9rttobOqgPVYpUeAmIlotaKl4UsxWex44gamkUa495nHepAebLd%2Bdq5HvNKdpSmukMTe9nN326cwiY734EwUBJsdt%2FA3yVO2X4BBs6LXfXmHpFaNTNPPSjDBh0xxmJ3Kun2CUz5LeojjwMywXpa9SGJkCbHbmvsiB%2FNSIGqiOfnJ7SU2nfW%2FPgx%2Bb0gIHqYkgdKLHAGDQWtCKnWyyBTBGRd8SbFU%2BILyyMpYcY1I3M97A%2F77EWVd2JwnXZucQVSkSCbQNaSZz7YQhAjXQE5wRUmRhxEm8brBN2t04sIHbhTxGyfMukpFuIIrsylHl%2Fnr1qPW%2BtjmKNtKHIiRM%2FfDmaDIcycmBUu1Zr3YTlXhUZ9jEjeBMNiq%2F78GOqUBBtwZfnA3sR7LIo29hzZLKEOjkZmvNUj7FFBixVtXkIcOcVv63GLbikiC7FX4fcIQAgCi%2FWHKIVfUNR6A56gp495CJB87glUmowVToB%2F3NEuBdEEcClJL9483YDGk7FYB2xuQnndZ2Dvh6bfRnb7KirNa4IlNkcp94xwZHV0YTUAk0F%2BwvJnDkrn3Wv1j7WCxcqgwmTQqgbkVTLkWQ3oWUoxq9JEr&X-Amz-Signature=cd2f7dbc08bc3e26d265d1ec291de1541d8286ea2fd664744c957a08c0c02c48&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZRJI3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfXB7NTZhFJcBaqG3i1mbzCvUEqHHExJPoFYsm2OWzJAiEArKuOTzLpTnFfF1h6CWPFtCP4Q2KcWTygxbXUgrFWSr0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDHv5ry%2Bb3i7ISJJNyrcAw4lrKfns2M0WVc2e2DpYTQLf4sP5P0rJnj0Ng7NxvhSF3z4zBPwV%2F2i%2BZ3kLUc1dWQlD8vlsjjNCEL%2B4MgKHR1Sy9OY14XIdPxBWCtHThfxSXKKuHKdyu%2FQgrJWXisqDY01MTd1LSvVmCpI1gn8csynoJzEHlXbG96X%2B6zAzjHVHzZjD1Df%2BROM7%2ByYLYWMzy75PNxVcdLkt5GAU8Y7DgzRL%2BFhyltIOjPzXUaZZnvjd89CpLvDlOLDtOdZNR6JJL1l%2BSevHbxz9rttobOqgPVYpUeAmIlotaKl4UsxWex44gamkUa495nHepAebLd%2Bdq5HvNKdpSmukMTe9nN326cwiY734EwUBJsdt%2FA3yVO2X4BBs6LXfXmHpFaNTNPPSjDBh0xxmJ3Kun2CUz5LeojjwMywXpa9SGJkCbHbmvsiB%2FNSIGqiOfnJ7SU2nfW%2FPgx%2Bb0gIHqYkgdKLHAGDQWtCKnWyyBTBGRd8SbFU%2BILyyMpYcY1I3M97A%2F77EWVd2JwnXZucQVSkSCbQNaSZz7YQhAjXQE5wRUmRhxEm8brBN2t04sIHbhTxGyfMukpFuIIrsylHl%2Fnr1qPW%2BtjmKNtKHIiRM%2FfDmaDIcycmBUu1Zr3YTlXhUZ9jEjeBMNiq%2F78GOqUBBtwZfnA3sR7LIo29hzZLKEOjkZmvNUj7FFBixVtXkIcOcVv63GLbikiC7FX4fcIQAgCi%2FWHKIVfUNR6A56gp495CJB87glUmowVToB%2F3NEuBdEEcClJL9483YDGk7FYB2xuQnndZ2Dvh6bfRnb7KirNa4IlNkcp94xwZHV0YTUAk0F%2BwvJnDkrn3Wv1j7WCxcqgwmTQqgbkVTLkWQ3oWUoxq9JEr&X-Amz-Signature=5302a9345603fc9dce409784e61d5b79212e9e6dc6b45cb31329863e54eb4a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZRJI3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfXB7NTZhFJcBaqG3i1mbzCvUEqHHExJPoFYsm2OWzJAiEArKuOTzLpTnFfF1h6CWPFtCP4Q2KcWTygxbXUgrFWSr0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDHv5ry%2Bb3i7ISJJNyrcAw4lrKfns2M0WVc2e2DpYTQLf4sP5P0rJnj0Ng7NxvhSF3z4zBPwV%2F2i%2BZ3kLUc1dWQlD8vlsjjNCEL%2B4MgKHR1Sy9OY14XIdPxBWCtHThfxSXKKuHKdyu%2FQgrJWXisqDY01MTd1LSvVmCpI1gn8csynoJzEHlXbG96X%2B6zAzjHVHzZjD1Df%2BROM7%2ByYLYWMzy75PNxVcdLkt5GAU8Y7DgzRL%2BFhyltIOjPzXUaZZnvjd89CpLvDlOLDtOdZNR6JJL1l%2BSevHbxz9rttobOqgPVYpUeAmIlotaKl4UsxWex44gamkUa495nHepAebLd%2Bdq5HvNKdpSmukMTe9nN326cwiY734EwUBJsdt%2FA3yVO2X4BBs6LXfXmHpFaNTNPPSjDBh0xxmJ3Kun2CUz5LeojjwMywXpa9SGJkCbHbmvsiB%2FNSIGqiOfnJ7SU2nfW%2FPgx%2Bb0gIHqYkgdKLHAGDQWtCKnWyyBTBGRd8SbFU%2BILyyMpYcY1I3M97A%2F77EWVd2JwnXZucQVSkSCbQNaSZz7YQhAjXQE5wRUmRhxEm8brBN2t04sIHbhTxGyfMukpFuIIrsylHl%2Fnr1qPW%2BtjmKNtKHIiRM%2FfDmaDIcycmBUu1Zr3YTlXhUZ9jEjeBMNiq%2F78GOqUBBtwZfnA3sR7LIo29hzZLKEOjkZmvNUj7FFBixVtXkIcOcVv63GLbikiC7FX4fcIQAgCi%2FWHKIVfUNR6A56gp495CJB87glUmowVToB%2F3NEuBdEEcClJL9483YDGk7FYB2xuQnndZ2Dvh6bfRnb7KirNa4IlNkcp94xwZHV0YTUAk0F%2BwvJnDkrn3Wv1j7WCxcqgwmTQqgbkVTLkWQ3oWUoxq9JEr&X-Amz-Signature=8a7b36ba2f95f67dffb691dc12c94a3ddb3713db239306e191546c993057d457&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZRJI3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfXB7NTZhFJcBaqG3i1mbzCvUEqHHExJPoFYsm2OWzJAiEArKuOTzLpTnFfF1h6CWPFtCP4Q2KcWTygxbXUgrFWSr0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDHv5ry%2Bb3i7ISJJNyrcAw4lrKfns2M0WVc2e2DpYTQLf4sP5P0rJnj0Ng7NxvhSF3z4zBPwV%2F2i%2BZ3kLUc1dWQlD8vlsjjNCEL%2B4MgKHR1Sy9OY14XIdPxBWCtHThfxSXKKuHKdyu%2FQgrJWXisqDY01MTd1LSvVmCpI1gn8csynoJzEHlXbG96X%2B6zAzjHVHzZjD1Df%2BROM7%2ByYLYWMzy75PNxVcdLkt5GAU8Y7DgzRL%2BFhyltIOjPzXUaZZnvjd89CpLvDlOLDtOdZNR6JJL1l%2BSevHbxz9rttobOqgPVYpUeAmIlotaKl4UsxWex44gamkUa495nHepAebLd%2Bdq5HvNKdpSmukMTe9nN326cwiY734EwUBJsdt%2FA3yVO2X4BBs6LXfXmHpFaNTNPPSjDBh0xxmJ3Kun2CUz5LeojjwMywXpa9SGJkCbHbmvsiB%2FNSIGqiOfnJ7SU2nfW%2FPgx%2Bb0gIHqYkgdKLHAGDQWtCKnWyyBTBGRd8SbFU%2BILyyMpYcY1I3M97A%2F77EWVd2JwnXZucQVSkSCbQNaSZz7YQhAjXQE5wRUmRhxEm8brBN2t04sIHbhTxGyfMukpFuIIrsylHl%2Fnr1qPW%2BtjmKNtKHIiRM%2FfDmaDIcycmBUu1Zr3YTlXhUZ9jEjeBMNiq%2F78GOqUBBtwZfnA3sR7LIo29hzZLKEOjkZmvNUj7FFBixVtXkIcOcVv63GLbikiC7FX4fcIQAgCi%2FWHKIVfUNR6A56gp495CJB87glUmowVToB%2F3NEuBdEEcClJL9483YDGk7FYB2xuQnndZ2Dvh6bfRnb7KirNa4IlNkcp94xwZHV0YTUAk0F%2BwvJnDkrn3Wv1j7WCxcqgwmTQqgbkVTLkWQ3oWUoxq9JEr&X-Amz-Signature=a880c80eef72140565e03be17192da07ec10fcc905cc5ab21238c2fc915df1cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZRJI3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfXB7NTZhFJcBaqG3i1mbzCvUEqHHExJPoFYsm2OWzJAiEArKuOTzLpTnFfF1h6CWPFtCP4Q2KcWTygxbXUgrFWSr0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDHv5ry%2Bb3i7ISJJNyrcAw4lrKfns2M0WVc2e2DpYTQLf4sP5P0rJnj0Ng7NxvhSF3z4zBPwV%2F2i%2BZ3kLUc1dWQlD8vlsjjNCEL%2B4MgKHR1Sy9OY14XIdPxBWCtHThfxSXKKuHKdyu%2FQgrJWXisqDY01MTd1LSvVmCpI1gn8csynoJzEHlXbG96X%2B6zAzjHVHzZjD1Df%2BROM7%2ByYLYWMzy75PNxVcdLkt5GAU8Y7DgzRL%2BFhyltIOjPzXUaZZnvjd89CpLvDlOLDtOdZNR6JJL1l%2BSevHbxz9rttobOqgPVYpUeAmIlotaKl4UsxWex44gamkUa495nHepAebLd%2Bdq5HvNKdpSmukMTe9nN326cwiY734EwUBJsdt%2FA3yVO2X4BBs6LXfXmHpFaNTNPPSjDBh0xxmJ3Kun2CUz5LeojjwMywXpa9SGJkCbHbmvsiB%2FNSIGqiOfnJ7SU2nfW%2FPgx%2Bb0gIHqYkgdKLHAGDQWtCKnWyyBTBGRd8SbFU%2BILyyMpYcY1I3M97A%2F77EWVd2JwnXZucQVSkSCbQNaSZz7YQhAjXQE5wRUmRhxEm8brBN2t04sIHbhTxGyfMukpFuIIrsylHl%2Fnr1qPW%2BtjmKNtKHIiRM%2FfDmaDIcycmBUu1Zr3YTlXhUZ9jEjeBMNiq%2F78GOqUBBtwZfnA3sR7LIo29hzZLKEOjkZmvNUj7FFBixVtXkIcOcVv63GLbikiC7FX4fcIQAgCi%2FWHKIVfUNR6A56gp495CJB87glUmowVToB%2F3NEuBdEEcClJL9483YDGk7FYB2xuQnndZ2Dvh6bfRnb7KirNa4IlNkcp94xwZHV0YTUAk0F%2BwvJnDkrn3Wv1j7WCxcqgwmTQqgbkVTLkWQ3oWUoxq9JEr&X-Amz-Signature=dc316d16291730b51b8a28268fd5cc5b20c9914361293a01a63077b07d2e75d7&X-Amz-SignedHeaders=host&x-id=GetObject)
