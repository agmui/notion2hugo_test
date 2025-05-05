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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEB7IO4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqD7STCxqZmqSMY4394UzUM5odTgC%2F%2FCACzE4Eu5dElgIhAMaZhva5kFjTNWQP8EBeNglcwSquAv6NH3ccbGdgFtkkKv8DCCgQABoMNjM3NDIzMTgzODA1IgxHNlIoWcXgli64QCcq3AMyOYf6AknXrYuFyJvSPKbSrKQNV22RvVXYjuNa4OtEGAy%2FN6PoDulyz1CdPTHAlUo7RQbVKQ95IPPsbkSZKPpt1y1rnvDElvRqjImylP743p0z07Gl4382YXliEEjk5IdOzzKiw0Uefa%2FkGDqPHRoSPeS7QgEQXZ48cnjAAV2lpcU6YXaIR4txfdQS1yhD7jd5dpkc5q281Akk5iiNMOkL%2Fw1DCCBc%2Fq7HkbnIVfglsrRrhOrroOJa47Lc7ROmKmwBAhZcKKmCbfNn2NR1hwHGqV55troS0Zx0sP5KfR12BqoIm%2BlVG%2Fow5qK%2FpW4lUX7jQai7YMmrqBM1nwYVlwHmEx%2BCjbNLSo0co69AgfVbTTiDdfTGYcLeyj9txxVQLqm%2FOP%2Fw3RAv1tUSjPthbSo55LmiCsaBFH4%2F%2FwReczvdA6wzi4loSDw26%2Fk1bCXWvIYP0J8dk4fZzIqJgfEqk7utW%2Fp2PZathx1g4LGo6RHigCcaALxNHrxX3iG%2BO78avVV%2B%2FfEi%2FXmO2MAgHblxAFSQrQkPtCxOo5gBHe1kS1oBTnfOScrQsgbaasbFHtonY5qOJMFz%2FfaktbxTYQDewjJYqTtZSXbuYh4MxbjK8sxj7Mr6BaUP42xP7E%2BJdTDNz%2BHABjqkARFoBNOaKC77xmuPEN9eHBywW0WpIrP%2FOntxS0he%2Bd9MUsIRlIepidbqN8G1PCpbKu5uBqO6Ihyu3xAsLoPJYe5731mOPk9bL1UPhRxGajQYDHomlm6FJ%2Fn63lDdibwrutcHlhLCJPc%2FMrvLbMshoXvx5gt2ogerWcQuAJngNeLrTdBpF%2Bh9cAPWJL2Dh1s5xtA68FVC7UwMR7UsI0QH5HK6yECB&X-Amz-Signature=5fc95fc949db826fb782fdb6a09b758d64567402a107c8f8dc00ca8bcf2377ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEB7IO4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqD7STCxqZmqSMY4394UzUM5odTgC%2F%2FCACzE4Eu5dElgIhAMaZhva5kFjTNWQP8EBeNglcwSquAv6NH3ccbGdgFtkkKv8DCCgQABoMNjM3NDIzMTgzODA1IgxHNlIoWcXgli64QCcq3AMyOYf6AknXrYuFyJvSPKbSrKQNV22RvVXYjuNa4OtEGAy%2FN6PoDulyz1CdPTHAlUo7RQbVKQ95IPPsbkSZKPpt1y1rnvDElvRqjImylP743p0z07Gl4382YXliEEjk5IdOzzKiw0Uefa%2FkGDqPHRoSPeS7QgEQXZ48cnjAAV2lpcU6YXaIR4txfdQS1yhD7jd5dpkc5q281Akk5iiNMOkL%2Fw1DCCBc%2Fq7HkbnIVfglsrRrhOrroOJa47Lc7ROmKmwBAhZcKKmCbfNn2NR1hwHGqV55troS0Zx0sP5KfR12BqoIm%2BlVG%2Fow5qK%2FpW4lUX7jQai7YMmrqBM1nwYVlwHmEx%2BCjbNLSo0co69AgfVbTTiDdfTGYcLeyj9txxVQLqm%2FOP%2Fw3RAv1tUSjPthbSo55LmiCsaBFH4%2F%2FwReczvdA6wzi4loSDw26%2Fk1bCXWvIYP0J8dk4fZzIqJgfEqk7utW%2Fp2PZathx1g4LGo6RHigCcaALxNHrxX3iG%2BO78avVV%2B%2FfEi%2FXmO2MAgHblxAFSQrQkPtCxOo5gBHe1kS1oBTnfOScrQsgbaasbFHtonY5qOJMFz%2FfaktbxTYQDewjJYqTtZSXbuYh4MxbjK8sxj7Mr6BaUP42xP7E%2BJdTDNz%2BHABjqkARFoBNOaKC77xmuPEN9eHBywW0WpIrP%2FOntxS0he%2Bd9MUsIRlIepidbqN8G1PCpbKu5uBqO6Ihyu3xAsLoPJYe5731mOPk9bL1UPhRxGajQYDHomlm6FJ%2Fn63lDdibwrutcHlhLCJPc%2FMrvLbMshoXvx5gt2ogerWcQuAJngNeLrTdBpF%2Bh9cAPWJL2Dh1s5xtA68FVC7UwMR7UsI0QH5HK6yECB&X-Amz-Signature=38e71012f87369d3c1ae5e7f114b25f7ae438d96f99eb5b0cd375ff57f0ed688&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEB7IO4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqD7STCxqZmqSMY4394UzUM5odTgC%2F%2FCACzE4Eu5dElgIhAMaZhva5kFjTNWQP8EBeNglcwSquAv6NH3ccbGdgFtkkKv8DCCgQABoMNjM3NDIzMTgzODA1IgxHNlIoWcXgli64QCcq3AMyOYf6AknXrYuFyJvSPKbSrKQNV22RvVXYjuNa4OtEGAy%2FN6PoDulyz1CdPTHAlUo7RQbVKQ95IPPsbkSZKPpt1y1rnvDElvRqjImylP743p0z07Gl4382YXliEEjk5IdOzzKiw0Uefa%2FkGDqPHRoSPeS7QgEQXZ48cnjAAV2lpcU6YXaIR4txfdQS1yhD7jd5dpkc5q281Akk5iiNMOkL%2Fw1DCCBc%2Fq7HkbnIVfglsrRrhOrroOJa47Lc7ROmKmwBAhZcKKmCbfNn2NR1hwHGqV55troS0Zx0sP5KfR12BqoIm%2BlVG%2Fow5qK%2FpW4lUX7jQai7YMmrqBM1nwYVlwHmEx%2BCjbNLSo0co69AgfVbTTiDdfTGYcLeyj9txxVQLqm%2FOP%2Fw3RAv1tUSjPthbSo55LmiCsaBFH4%2F%2FwReczvdA6wzi4loSDw26%2Fk1bCXWvIYP0J8dk4fZzIqJgfEqk7utW%2Fp2PZathx1g4LGo6RHigCcaALxNHrxX3iG%2BO78avVV%2B%2FfEi%2FXmO2MAgHblxAFSQrQkPtCxOo5gBHe1kS1oBTnfOScrQsgbaasbFHtonY5qOJMFz%2FfaktbxTYQDewjJYqTtZSXbuYh4MxbjK8sxj7Mr6BaUP42xP7E%2BJdTDNz%2BHABjqkARFoBNOaKC77xmuPEN9eHBywW0WpIrP%2FOntxS0he%2Bd9MUsIRlIepidbqN8G1PCpbKu5uBqO6Ihyu3xAsLoPJYe5731mOPk9bL1UPhRxGajQYDHomlm6FJ%2Fn63lDdibwrutcHlhLCJPc%2FMrvLbMshoXvx5gt2ogerWcQuAJngNeLrTdBpF%2Bh9cAPWJL2Dh1s5xtA68FVC7UwMR7UsI0QH5HK6yECB&X-Amz-Signature=a74b7a7fb01cc57a8a061fd4cb3b80c99d7ee37fb0acc3619957fb1285358ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEB7IO4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqD7STCxqZmqSMY4394UzUM5odTgC%2F%2FCACzE4Eu5dElgIhAMaZhva5kFjTNWQP8EBeNglcwSquAv6NH3ccbGdgFtkkKv8DCCgQABoMNjM3NDIzMTgzODA1IgxHNlIoWcXgli64QCcq3AMyOYf6AknXrYuFyJvSPKbSrKQNV22RvVXYjuNa4OtEGAy%2FN6PoDulyz1CdPTHAlUo7RQbVKQ95IPPsbkSZKPpt1y1rnvDElvRqjImylP743p0z07Gl4382YXliEEjk5IdOzzKiw0Uefa%2FkGDqPHRoSPeS7QgEQXZ48cnjAAV2lpcU6YXaIR4txfdQS1yhD7jd5dpkc5q281Akk5iiNMOkL%2Fw1DCCBc%2Fq7HkbnIVfglsrRrhOrroOJa47Lc7ROmKmwBAhZcKKmCbfNn2NR1hwHGqV55troS0Zx0sP5KfR12BqoIm%2BlVG%2Fow5qK%2FpW4lUX7jQai7YMmrqBM1nwYVlwHmEx%2BCjbNLSo0co69AgfVbTTiDdfTGYcLeyj9txxVQLqm%2FOP%2Fw3RAv1tUSjPthbSo55LmiCsaBFH4%2F%2FwReczvdA6wzi4loSDw26%2Fk1bCXWvIYP0J8dk4fZzIqJgfEqk7utW%2Fp2PZathx1g4LGo6RHigCcaALxNHrxX3iG%2BO78avVV%2B%2FfEi%2FXmO2MAgHblxAFSQrQkPtCxOo5gBHe1kS1oBTnfOScrQsgbaasbFHtonY5qOJMFz%2FfaktbxTYQDewjJYqTtZSXbuYh4MxbjK8sxj7Mr6BaUP42xP7E%2BJdTDNz%2BHABjqkARFoBNOaKC77xmuPEN9eHBywW0WpIrP%2FOntxS0he%2Bd9MUsIRlIepidbqN8G1PCpbKu5uBqO6Ihyu3xAsLoPJYe5731mOPk9bL1UPhRxGajQYDHomlm6FJ%2Fn63lDdibwrutcHlhLCJPc%2FMrvLbMshoXvx5gt2ogerWcQuAJngNeLrTdBpF%2Bh9cAPWJL2Dh1s5xtA68FVC7UwMR7UsI0QH5HK6yECB&X-Amz-Signature=7b7855070c0239c25aa567ed99452c71ddce558c3c2d61cbdb7f8b1143db94a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEB7IO4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqD7STCxqZmqSMY4394UzUM5odTgC%2F%2FCACzE4Eu5dElgIhAMaZhva5kFjTNWQP8EBeNglcwSquAv6NH3ccbGdgFtkkKv8DCCgQABoMNjM3NDIzMTgzODA1IgxHNlIoWcXgli64QCcq3AMyOYf6AknXrYuFyJvSPKbSrKQNV22RvVXYjuNa4OtEGAy%2FN6PoDulyz1CdPTHAlUo7RQbVKQ95IPPsbkSZKPpt1y1rnvDElvRqjImylP743p0z07Gl4382YXliEEjk5IdOzzKiw0Uefa%2FkGDqPHRoSPeS7QgEQXZ48cnjAAV2lpcU6YXaIR4txfdQS1yhD7jd5dpkc5q281Akk5iiNMOkL%2Fw1DCCBc%2Fq7HkbnIVfglsrRrhOrroOJa47Lc7ROmKmwBAhZcKKmCbfNn2NR1hwHGqV55troS0Zx0sP5KfR12BqoIm%2BlVG%2Fow5qK%2FpW4lUX7jQai7YMmrqBM1nwYVlwHmEx%2BCjbNLSo0co69AgfVbTTiDdfTGYcLeyj9txxVQLqm%2FOP%2Fw3RAv1tUSjPthbSo55LmiCsaBFH4%2F%2FwReczvdA6wzi4loSDw26%2Fk1bCXWvIYP0J8dk4fZzIqJgfEqk7utW%2Fp2PZathx1g4LGo6RHigCcaALxNHrxX3iG%2BO78avVV%2B%2FfEi%2FXmO2MAgHblxAFSQrQkPtCxOo5gBHe1kS1oBTnfOScrQsgbaasbFHtonY5qOJMFz%2FfaktbxTYQDewjJYqTtZSXbuYh4MxbjK8sxj7Mr6BaUP42xP7E%2BJdTDNz%2BHABjqkARFoBNOaKC77xmuPEN9eHBywW0WpIrP%2FOntxS0he%2Bd9MUsIRlIepidbqN8G1PCpbKu5uBqO6Ihyu3xAsLoPJYe5731mOPk9bL1UPhRxGajQYDHomlm6FJ%2Fn63lDdibwrutcHlhLCJPc%2FMrvLbMshoXvx5gt2ogerWcQuAJngNeLrTdBpF%2Bh9cAPWJL2Dh1s5xtA68FVC7UwMR7UsI0QH5HK6yECB&X-Amz-Signature=365e69cd05173fbf6613937dc86e219215506fa2dbb33646e9c0faf64aed9e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEB7IO4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqD7STCxqZmqSMY4394UzUM5odTgC%2F%2FCACzE4Eu5dElgIhAMaZhva5kFjTNWQP8EBeNglcwSquAv6NH3ccbGdgFtkkKv8DCCgQABoMNjM3NDIzMTgzODA1IgxHNlIoWcXgli64QCcq3AMyOYf6AknXrYuFyJvSPKbSrKQNV22RvVXYjuNa4OtEGAy%2FN6PoDulyz1CdPTHAlUo7RQbVKQ95IPPsbkSZKPpt1y1rnvDElvRqjImylP743p0z07Gl4382YXliEEjk5IdOzzKiw0Uefa%2FkGDqPHRoSPeS7QgEQXZ48cnjAAV2lpcU6YXaIR4txfdQS1yhD7jd5dpkc5q281Akk5iiNMOkL%2Fw1DCCBc%2Fq7HkbnIVfglsrRrhOrroOJa47Lc7ROmKmwBAhZcKKmCbfNn2NR1hwHGqV55troS0Zx0sP5KfR12BqoIm%2BlVG%2Fow5qK%2FpW4lUX7jQai7YMmrqBM1nwYVlwHmEx%2BCjbNLSo0co69AgfVbTTiDdfTGYcLeyj9txxVQLqm%2FOP%2Fw3RAv1tUSjPthbSo55LmiCsaBFH4%2F%2FwReczvdA6wzi4loSDw26%2Fk1bCXWvIYP0J8dk4fZzIqJgfEqk7utW%2Fp2PZathx1g4LGo6RHigCcaALxNHrxX3iG%2BO78avVV%2B%2FfEi%2FXmO2MAgHblxAFSQrQkPtCxOo5gBHe1kS1oBTnfOScrQsgbaasbFHtonY5qOJMFz%2FfaktbxTYQDewjJYqTtZSXbuYh4MxbjK8sxj7Mr6BaUP42xP7E%2BJdTDNz%2BHABjqkARFoBNOaKC77xmuPEN9eHBywW0WpIrP%2FOntxS0he%2Bd9MUsIRlIepidbqN8G1PCpbKu5uBqO6Ihyu3xAsLoPJYe5731mOPk9bL1UPhRxGajQYDHomlm6FJ%2Fn63lDdibwrutcHlhLCJPc%2FMrvLbMshoXvx5gt2ogerWcQuAJngNeLrTdBpF%2Bh9cAPWJL2Dh1s5xtA68FVC7UwMR7UsI0QH5HK6yECB&X-Amz-Signature=b3c91a1e0fd53b58ac3f9752f6d98978ca61dff8de97233650380df8995fa1da&X-Amz-SignedHeaders=host&x-id=GetObject)
