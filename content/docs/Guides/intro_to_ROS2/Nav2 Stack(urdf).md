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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWOISDA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZqPKfI%2FJyDIx9YK1FoxW6Qn4o13yV5IsEltHWIyHI7QIhAI3hIXbqzHYQRqVKAWK4eoflCnLsL6i8L3xOxYtwmeu8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHIFYxwe5gzuXsqDAq3AO%2FnSMWenbPAuf%2FyZhMiqGwjvDmBygHlvu9o55IcPZqYkcolF1naQUqZIwnDDOh7R0RfH6i%2BqueCr1Ci8xLEKbRwNRkcjOeajg%2FHiGnQefrquIT2eRoP0TCD896x%2FoSIRTNNcYL2E98POh0Z79Dg4SCGpb5BhpYa8RB%2BeuYzm%2BQ%2BdcjHDUUwpE66yt637Spr%2Bf6R%2FjtlOKdaC0dWwj7B0njojTaVcpT6X%2BX72h4vizL24Njhj0Z1DfStS9AncQN2J63QLv2VweADnYn43nDjftX7RsqwSjmaTJbj%2FwjvDo9irmH1ZK%2FS5wDoBwGLkt2Pr8LvxRVJe0f2O6tcL%2FOma2%2BInWtdYsE77A8UDl%2FkgAFD8oOGbI6V%2BETLMclyGdCsz0kC5q3%2B9wGJoysxSEjrpHyL5A8oZ027SB2%2BVpfxEZcDnsfmItyKuFG5VQC5MksYShsL%2F1FToRWblBVlPbqaWA6OiQDQidQpLnylTkNyKcJAWz0fHrDWa0gDBrO3mQvSJsNJnHLO%2BVftx2oxpHeus23t0FvuOuRW0N0rzEFUG4e7pzJyP4LKAD3QTRvGNSfDUm2r2%2BW6uSGX0Pex%2BHJK3LMGWp3sImC7zH7Hg1lWNZ0Pp08kU%2BXTEZiGgbXgDCgvdPCBjqkAa8u%2FT5IusBWjQf%2BLBaoifirnD0RXmq2oI4KZOUtH%2FeWYXqM6NMxN4Ln5blaeRJcDTb4eaADVRWUxis7x9wCyPMQdFA3FHVcZASgz34WXxFEvX8kUDV7%2BZKk6ZV0IqdPRotyaEn79AgJwnR4CXZWgGV5YJqzGUnWXLiSQN7%2Bc1mEyJI98o%2FcuHxdB31H2d1Bww9dxZ5IGJ7CkI6jqjgxHsDUQPrT&X-Amz-Signature=4fc40fbf2d63454e144a0fed2a4b65e2a01a096ea45a763729cc777c9d3e5f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWOISDA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZqPKfI%2FJyDIx9YK1FoxW6Qn4o13yV5IsEltHWIyHI7QIhAI3hIXbqzHYQRqVKAWK4eoflCnLsL6i8L3xOxYtwmeu8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHIFYxwe5gzuXsqDAq3AO%2FnSMWenbPAuf%2FyZhMiqGwjvDmBygHlvu9o55IcPZqYkcolF1naQUqZIwnDDOh7R0RfH6i%2BqueCr1Ci8xLEKbRwNRkcjOeajg%2FHiGnQefrquIT2eRoP0TCD896x%2FoSIRTNNcYL2E98POh0Z79Dg4SCGpb5BhpYa8RB%2BeuYzm%2BQ%2BdcjHDUUwpE66yt637Spr%2Bf6R%2FjtlOKdaC0dWwj7B0njojTaVcpT6X%2BX72h4vizL24Njhj0Z1DfStS9AncQN2J63QLv2VweADnYn43nDjftX7RsqwSjmaTJbj%2FwjvDo9irmH1ZK%2FS5wDoBwGLkt2Pr8LvxRVJe0f2O6tcL%2FOma2%2BInWtdYsE77A8UDl%2FkgAFD8oOGbI6V%2BETLMclyGdCsz0kC5q3%2B9wGJoysxSEjrpHyL5A8oZ027SB2%2BVpfxEZcDnsfmItyKuFG5VQC5MksYShsL%2F1FToRWblBVlPbqaWA6OiQDQidQpLnylTkNyKcJAWz0fHrDWa0gDBrO3mQvSJsNJnHLO%2BVftx2oxpHeus23t0FvuOuRW0N0rzEFUG4e7pzJyP4LKAD3QTRvGNSfDUm2r2%2BW6uSGX0Pex%2BHJK3LMGWp3sImC7zH7Hg1lWNZ0Pp08kU%2BXTEZiGgbXgDCgvdPCBjqkAa8u%2FT5IusBWjQf%2BLBaoifirnD0RXmq2oI4KZOUtH%2FeWYXqM6NMxN4Ln5blaeRJcDTb4eaADVRWUxis7x9wCyPMQdFA3FHVcZASgz34WXxFEvX8kUDV7%2BZKk6ZV0IqdPRotyaEn79AgJwnR4CXZWgGV5YJqzGUnWXLiSQN7%2Bc1mEyJI98o%2FcuHxdB31H2d1Bww9dxZ5IGJ7CkI6jqjgxHsDUQPrT&X-Amz-Signature=8c5c792d4d7278fa0f598cfe5fe3bc8b5f1c21daca3f6aa9df69acf869f21b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWOISDA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZqPKfI%2FJyDIx9YK1FoxW6Qn4o13yV5IsEltHWIyHI7QIhAI3hIXbqzHYQRqVKAWK4eoflCnLsL6i8L3xOxYtwmeu8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHIFYxwe5gzuXsqDAq3AO%2FnSMWenbPAuf%2FyZhMiqGwjvDmBygHlvu9o55IcPZqYkcolF1naQUqZIwnDDOh7R0RfH6i%2BqueCr1Ci8xLEKbRwNRkcjOeajg%2FHiGnQefrquIT2eRoP0TCD896x%2FoSIRTNNcYL2E98POh0Z79Dg4SCGpb5BhpYa8RB%2BeuYzm%2BQ%2BdcjHDUUwpE66yt637Spr%2Bf6R%2FjtlOKdaC0dWwj7B0njojTaVcpT6X%2BX72h4vizL24Njhj0Z1DfStS9AncQN2J63QLv2VweADnYn43nDjftX7RsqwSjmaTJbj%2FwjvDo9irmH1ZK%2FS5wDoBwGLkt2Pr8LvxRVJe0f2O6tcL%2FOma2%2BInWtdYsE77A8UDl%2FkgAFD8oOGbI6V%2BETLMclyGdCsz0kC5q3%2B9wGJoysxSEjrpHyL5A8oZ027SB2%2BVpfxEZcDnsfmItyKuFG5VQC5MksYShsL%2F1FToRWblBVlPbqaWA6OiQDQidQpLnylTkNyKcJAWz0fHrDWa0gDBrO3mQvSJsNJnHLO%2BVftx2oxpHeus23t0FvuOuRW0N0rzEFUG4e7pzJyP4LKAD3QTRvGNSfDUm2r2%2BW6uSGX0Pex%2BHJK3LMGWp3sImC7zH7Hg1lWNZ0Pp08kU%2BXTEZiGgbXgDCgvdPCBjqkAa8u%2FT5IusBWjQf%2BLBaoifirnD0RXmq2oI4KZOUtH%2FeWYXqM6NMxN4Ln5blaeRJcDTb4eaADVRWUxis7x9wCyPMQdFA3FHVcZASgz34WXxFEvX8kUDV7%2BZKk6ZV0IqdPRotyaEn79AgJwnR4CXZWgGV5YJqzGUnWXLiSQN7%2Bc1mEyJI98o%2FcuHxdB31H2d1Bww9dxZ5IGJ7CkI6jqjgxHsDUQPrT&X-Amz-Signature=428596b3dd0891f0831b7b8645a3484ffc90eda5158582d6db6d432de742e1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWOISDA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZqPKfI%2FJyDIx9YK1FoxW6Qn4o13yV5IsEltHWIyHI7QIhAI3hIXbqzHYQRqVKAWK4eoflCnLsL6i8L3xOxYtwmeu8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHIFYxwe5gzuXsqDAq3AO%2FnSMWenbPAuf%2FyZhMiqGwjvDmBygHlvu9o55IcPZqYkcolF1naQUqZIwnDDOh7R0RfH6i%2BqueCr1Ci8xLEKbRwNRkcjOeajg%2FHiGnQefrquIT2eRoP0TCD896x%2FoSIRTNNcYL2E98POh0Z79Dg4SCGpb5BhpYa8RB%2BeuYzm%2BQ%2BdcjHDUUwpE66yt637Spr%2Bf6R%2FjtlOKdaC0dWwj7B0njojTaVcpT6X%2BX72h4vizL24Njhj0Z1DfStS9AncQN2J63QLv2VweADnYn43nDjftX7RsqwSjmaTJbj%2FwjvDo9irmH1ZK%2FS5wDoBwGLkt2Pr8LvxRVJe0f2O6tcL%2FOma2%2BInWtdYsE77A8UDl%2FkgAFD8oOGbI6V%2BETLMclyGdCsz0kC5q3%2B9wGJoysxSEjrpHyL5A8oZ027SB2%2BVpfxEZcDnsfmItyKuFG5VQC5MksYShsL%2F1FToRWblBVlPbqaWA6OiQDQidQpLnylTkNyKcJAWz0fHrDWa0gDBrO3mQvSJsNJnHLO%2BVftx2oxpHeus23t0FvuOuRW0N0rzEFUG4e7pzJyP4LKAD3QTRvGNSfDUm2r2%2BW6uSGX0Pex%2BHJK3LMGWp3sImC7zH7Hg1lWNZ0Pp08kU%2BXTEZiGgbXgDCgvdPCBjqkAa8u%2FT5IusBWjQf%2BLBaoifirnD0RXmq2oI4KZOUtH%2FeWYXqM6NMxN4Ln5blaeRJcDTb4eaADVRWUxis7x9wCyPMQdFA3FHVcZASgz34WXxFEvX8kUDV7%2BZKk6ZV0IqdPRotyaEn79AgJwnR4CXZWgGV5YJqzGUnWXLiSQN7%2Bc1mEyJI98o%2FcuHxdB31H2d1Bww9dxZ5IGJ7CkI6jqjgxHsDUQPrT&X-Amz-Signature=ed1465212672feac1c5e93649e96d58a3d36af86168f07508b2fa33024e51a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWOISDA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZqPKfI%2FJyDIx9YK1FoxW6Qn4o13yV5IsEltHWIyHI7QIhAI3hIXbqzHYQRqVKAWK4eoflCnLsL6i8L3xOxYtwmeu8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHIFYxwe5gzuXsqDAq3AO%2FnSMWenbPAuf%2FyZhMiqGwjvDmBygHlvu9o55IcPZqYkcolF1naQUqZIwnDDOh7R0RfH6i%2BqueCr1Ci8xLEKbRwNRkcjOeajg%2FHiGnQefrquIT2eRoP0TCD896x%2FoSIRTNNcYL2E98POh0Z79Dg4SCGpb5BhpYa8RB%2BeuYzm%2BQ%2BdcjHDUUwpE66yt637Spr%2Bf6R%2FjtlOKdaC0dWwj7B0njojTaVcpT6X%2BX72h4vizL24Njhj0Z1DfStS9AncQN2J63QLv2VweADnYn43nDjftX7RsqwSjmaTJbj%2FwjvDo9irmH1ZK%2FS5wDoBwGLkt2Pr8LvxRVJe0f2O6tcL%2FOma2%2BInWtdYsE77A8UDl%2FkgAFD8oOGbI6V%2BETLMclyGdCsz0kC5q3%2B9wGJoysxSEjrpHyL5A8oZ027SB2%2BVpfxEZcDnsfmItyKuFG5VQC5MksYShsL%2F1FToRWblBVlPbqaWA6OiQDQidQpLnylTkNyKcJAWz0fHrDWa0gDBrO3mQvSJsNJnHLO%2BVftx2oxpHeus23t0FvuOuRW0N0rzEFUG4e7pzJyP4LKAD3QTRvGNSfDUm2r2%2BW6uSGX0Pex%2BHJK3LMGWp3sImC7zH7Hg1lWNZ0Pp08kU%2BXTEZiGgbXgDCgvdPCBjqkAa8u%2FT5IusBWjQf%2BLBaoifirnD0RXmq2oI4KZOUtH%2FeWYXqM6NMxN4Ln5blaeRJcDTb4eaADVRWUxis7x9wCyPMQdFA3FHVcZASgz34WXxFEvX8kUDV7%2BZKk6ZV0IqdPRotyaEn79AgJwnR4CXZWgGV5YJqzGUnWXLiSQN7%2Bc1mEyJI98o%2FcuHxdB31H2d1Bww9dxZ5IGJ7CkI6jqjgxHsDUQPrT&X-Amz-Signature=ba5a50a2f162981cf28c75471db8e1aa4603bea76c93a2ca122cbe18674b79db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWOISDA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZqPKfI%2FJyDIx9YK1FoxW6Qn4o13yV5IsEltHWIyHI7QIhAI3hIXbqzHYQRqVKAWK4eoflCnLsL6i8L3xOxYtwmeu8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHIFYxwe5gzuXsqDAq3AO%2FnSMWenbPAuf%2FyZhMiqGwjvDmBygHlvu9o55IcPZqYkcolF1naQUqZIwnDDOh7R0RfH6i%2BqueCr1Ci8xLEKbRwNRkcjOeajg%2FHiGnQefrquIT2eRoP0TCD896x%2FoSIRTNNcYL2E98POh0Z79Dg4SCGpb5BhpYa8RB%2BeuYzm%2BQ%2BdcjHDUUwpE66yt637Spr%2Bf6R%2FjtlOKdaC0dWwj7B0njojTaVcpT6X%2BX72h4vizL24Njhj0Z1DfStS9AncQN2J63QLv2VweADnYn43nDjftX7RsqwSjmaTJbj%2FwjvDo9irmH1ZK%2FS5wDoBwGLkt2Pr8LvxRVJe0f2O6tcL%2FOma2%2BInWtdYsE77A8UDl%2FkgAFD8oOGbI6V%2BETLMclyGdCsz0kC5q3%2B9wGJoysxSEjrpHyL5A8oZ027SB2%2BVpfxEZcDnsfmItyKuFG5VQC5MksYShsL%2F1FToRWblBVlPbqaWA6OiQDQidQpLnylTkNyKcJAWz0fHrDWa0gDBrO3mQvSJsNJnHLO%2BVftx2oxpHeus23t0FvuOuRW0N0rzEFUG4e7pzJyP4LKAD3QTRvGNSfDUm2r2%2BW6uSGX0Pex%2BHJK3LMGWp3sImC7zH7Hg1lWNZ0Pp08kU%2BXTEZiGgbXgDCgvdPCBjqkAa8u%2FT5IusBWjQf%2BLBaoifirnD0RXmq2oI4KZOUtH%2FeWYXqM6NMxN4Ln5blaeRJcDTb4eaADVRWUxis7x9wCyPMQdFA3FHVcZASgz34WXxFEvX8kUDV7%2BZKk6ZV0IqdPRotyaEn79AgJwnR4CXZWgGV5YJqzGUnWXLiSQN7%2Bc1mEyJI98o%2FcuHxdB31H2d1Bww9dxZ5IGJ7CkI6jqjgxHsDUQPrT&X-Amz-Signature=ddbb315457098bfba951bbd5d2aeacb82db28e6a4f5bc3276f87ae3bde4c506b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
