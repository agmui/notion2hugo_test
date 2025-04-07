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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCG3BGA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkMTRir2NQvs5GLCt7uJ%2F%2FZ0uieuUuBy3lsrxj5npD9AiEA5JPz7JlOt7fU6Rr28egFPqJCMwhlpR9mERD1MpfuNDMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPPtjeYcwbNLS%2BQjWircA%2FcWM4Z4WgBe23iC06NWiiYzXg3%2Bnj1dw3dxl1D%2BnynQb9%2BKEe7LQNrKfb9PFL7IWDxv9Igr6vy6quh0WJGJxn2gj5q8gnT6ByOz6zM1KMkFM%2FdeT4HltYctjwDCvGV5TG%2B%2FgMHYROL88RqH80k4FFuEffSdA11onEu1xato8ymZuxC4ULnq8Td27JCzvLPX6KpbFEsqrVtfKrgTRtMa6UIvem%2FAJKFCzHzEVkRf5Xrs8Is%2BHjt01%2FM0%2FOQJJBTbAhcS8vZAokWcOkn7MNhQdj3HWjEfeavEPFlfoShcgl5ppe1kBIuWshSHvR3YqFIijgnEnnaozom9WXtKqCr5P%2BDgsHb%2B80pccY4ceCDqdGkMv%2BACtplQwod6IzzCqTfxWVyEokZauenunbcOnxi7UajysmkMHgJi%2B%2FjPwIc8Q9H%2FbUBqn%2FSVCFpL3XriEBSfmntM%2FxmAIPauqnSZcn1ZgU6PCHJvLhHpouoDRzLq1w5mYyNpNaXCHoaYQBpJM60B1quDMo3nOt2Rz9gIXFclxiidLSJWCQL6OizFMAadvUD%2Bz6pKff1EMDOo732prQS29DbfRE%2BMTOXSFzgFcau%2FyunHGbbFiharOayAwEoMRjpd7Q9HH45NeAscpFOgMMmfzb8GOqUBrnqRTjrw7ZsGyFTgwHJFuV9Tj0SpZrFJP3Ui315SRwBOX7C%2BtHm0ztB%2Fapu9XSJ6hX%2BIDiFC6E%2BrhNRFMG4IcjNUAgDukh6jB7JoFFN43khBM4oyp1fF42nZNmtQIy6Zr0b5JvqtBLQk7uzwia4t09L3hmJ1wWsIU%2Fx7J%2Fsc73X4%2BKnwdX5My%2FtMqX4yGlWxbgJ3sIU7%2FE91wOLyNTuddPJgbSe%2B&X-Amz-Signature=bf59ce8d2636f1903bfe6dc6d3569baabe9fbbd01155ddc870ffeffe289fbe2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCG3BGA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkMTRir2NQvs5GLCt7uJ%2F%2FZ0uieuUuBy3lsrxj5npD9AiEA5JPz7JlOt7fU6Rr28egFPqJCMwhlpR9mERD1MpfuNDMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPPtjeYcwbNLS%2BQjWircA%2FcWM4Z4WgBe23iC06NWiiYzXg3%2Bnj1dw3dxl1D%2BnynQb9%2BKEe7LQNrKfb9PFL7IWDxv9Igr6vy6quh0WJGJxn2gj5q8gnT6ByOz6zM1KMkFM%2FdeT4HltYctjwDCvGV5TG%2B%2FgMHYROL88RqH80k4FFuEffSdA11onEu1xato8ymZuxC4ULnq8Td27JCzvLPX6KpbFEsqrVtfKrgTRtMa6UIvem%2FAJKFCzHzEVkRf5Xrs8Is%2BHjt01%2FM0%2FOQJJBTbAhcS8vZAokWcOkn7MNhQdj3HWjEfeavEPFlfoShcgl5ppe1kBIuWshSHvR3YqFIijgnEnnaozom9WXtKqCr5P%2BDgsHb%2B80pccY4ceCDqdGkMv%2BACtplQwod6IzzCqTfxWVyEokZauenunbcOnxi7UajysmkMHgJi%2B%2FjPwIc8Q9H%2FbUBqn%2FSVCFpL3XriEBSfmntM%2FxmAIPauqnSZcn1ZgU6PCHJvLhHpouoDRzLq1w5mYyNpNaXCHoaYQBpJM60B1quDMo3nOt2Rz9gIXFclxiidLSJWCQL6OizFMAadvUD%2Bz6pKff1EMDOo732prQS29DbfRE%2BMTOXSFzgFcau%2FyunHGbbFiharOayAwEoMRjpd7Q9HH45NeAscpFOgMMmfzb8GOqUBrnqRTjrw7ZsGyFTgwHJFuV9Tj0SpZrFJP3Ui315SRwBOX7C%2BtHm0ztB%2Fapu9XSJ6hX%2BIDiFC6E%2BrhNRFMG4IcjNUAgDukh6jB7JoFFN43khBM4oyp1fF42nZNmtQIy6Zr0b5JvqtBLQk7uzwia4t09L3hmJ1wWsIU%2Fx7J%2Fsc73X4%2BKnwdX5My%2FtMqX4yGlWxbgJ3sIU7%2FE91wOLyNTuddPJgbSe%2B&X-Amz-Signature=d843b0d84c78f749a7e6a6b33c3369da4944a1565e073f84883ada64e18d8978&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCG3BGA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkMTRir2NQvs5GLCt7uJ%2F%2FZ0uieuUuBy3lsrxj5npD9AiEA5JPz7JlOt7fU6Rr28egFPqJCMwhlpR9mERD1MpfuNDMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPPtjeYcwbNLS%2BQjWircA%2FcWM4Z4WgBe23iC06NWiiYzXg3%2Bnj1dw3dxl1D%2BnynQb9%2BKEe7LQNrKfb9PFL7IWDxv9Igr6vy6quh0WJGJxn2gj5q8gnT6ByOz6zM1KMkFM%2FdeT4HltYctjwDCvGV5TG%2B%2FgMHYROL88RqH80k4FFuEffSdA11onEu1xato8ymZuxC4ULnq8Td27JCzvLPX6KpbFEsqrVtfKrgTRtMa6UIvem%2FAJKFCzHzEVkRf5Xrs8Is%2BHjt01%2FM0%2FOQJJBTbAhcS8vZAokWcOkn7MNhQdj3HWjEfeavEPFlfoShcgl5ppe1kBIuWshSHvR3YqFIijgnEnnaozom9WXtKqCr5P%2BDgsHb%2B80pccY4ceCDqdGkMv%2BACtplQwod6IzzCqTfxWVyEokZauenunbcOnxi7UajysmkMHgJi%2B%2FjPwIc8Q9H%2FbUBqn%2FSVCFpL3XriEBSfmntM%2FxmAIPauqnSZcn1ZgU6PCHJvLhHpouoDRzLq1w5mYyNpNaXCHoaYQBpJM60B1quDMo3nOt2Rz9gIXFclxiidLSJWCQL6OizFMAadvUD%2Bz6pKff1EMDOo732prQS29DbfRE%2BMTOXSFzgFcau%2FyunHGbbFiharOayAwEoMRjpd7Q9HH45NeAscpFOgMMmfzb8GOqUBrnqRTjrw7ZsGyFTgwHJFuV9Tj0SpZrFJP3Ui315SRwBOX7C%2BtHm0ztB%2Fapu9XSJ6hX%2BIDiFC6E%2BrhNRFMG4IcjNUAgDukh6jB7JoFFN43khBM4oyp1fF42nZNmtQIy6Zr0b5JvqtBLQk7uzwia4t09L3hmJ1wWsIU%2Fx7J%2Fsc73X4%2BKnwdX5My%2FtMqX4yGlWxbgJ3sIU7%2FE91wOLyNTuddPJgbSe%2B&X-Amz-Signature=aa87a4de4c2d87221fc855b6d1a874e4fbb7b9772611a9fd9228ccf9b4babff8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCG3BGA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkMTRir2NQvs5GLCt7uJ%2F%2FZ0uieuUuBy3lsrxj5npD9AiEA5JPz7JlOt7fU6Rr28egFPqJCMwhlpR9mERD1MpfuNDMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPPtjeYcwbNLS%2BQjWircA%2FcWM4Z4WgBe23iC06NWiiYzXg3%2Bnj1dw3dxl1D%2BnynQb9%2BKEe7LQNrKfb9PFL7IWDxv9Igr6vy6quh0WJGJxn2gj5q8gnT6ByOz6zM1KMkFM%2FdeT4HltYctjwDCvGV5TG%2B%2FgMHYROL88RqH80k4FFuEffSdA11onEu1xato8ymZuxC4ULnq8Td27JCzvLPX6KpbFEsqrVtfKrgTRtMa6UIvem%2FAJKFCzHzEVkRf5Xrs8Is%2BHjt01%2FM0%2FOQJJBTbAhcS8vZAokWcOkn7MNhQdj3HWjEfeavEPFlfoShcgl5ppe1kBIuWshSHvR3YqFIijgnEnnaozom9WXtKqCr5P%2BDgsHb%2B80pccY4ceCDqdGkMv%2BACtplQwod6IzzCqTfxWVyEokZauenunbcOnxi7UajysmkMHgJi%2B%2FjPwIc8Q9H%2FbUBqn%2FSVCFpL3XriEBSfmntM%2FxmAIPauqnSZcn1ZgU6PCHJvLhHpouoDRzLq1w5mYyNpNaXCHoaYQBpJM60B1quDMo3nOt2Rz9gIXFclxiidLSJWCQL6OizFMAadvUD%2Bz6pKff1EMDOo732prQS29DbfRE%2BMTOXSFzgFcau%2FyunHGbbFiharOayAwEoMRjpd7Q9HH45NeAscpFOgMMmfzb8GOqUBrnqRTjrw7ZsGyFTgwHJFuV9Tj0SpZrFJP3Ui315SRwBOX7C%2BtHm0ztB%2Fapu9XSJ6hX%2BIDiFC6E%2BrhNRFMG4IcjNUAgDukh6jB7JoFFN43khBM4oyp1fF42nZNmtQIy6Zr0b5JvqtBLQk7uzwia4t09L3hmJ1wWsIU%2Fx7J%2Fsc73X4%2BKnwdX5My%2FtMqX4yGlWxbgJ3sIU7%2FE91wOLyNTuddPJgbSe%2B&X-Amz-Signature=1c89943c22d85f07110c8ce751c2c0a9c0bafa6f49de53d8d768a0a44703ecdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCG3BGA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkMTRir2NQvs5GLCt7uJ%2F%2FZ0uieuUuBy3lsrxj5npD9AiEA5JPz7JlOt7fU6Rr28egFPqJCMwhlpR9mERD1MpfuNDMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPPtjeYcwbNLS%2BQjWircA%2FcWM4Z4WgBe23iC06NWiiYzXg3%2Bnj1dw3dxl1D%2BnynQb9%2BKEe7LQNrKfb9PFL7IWDxv9Igr6vy6quh0WJGJxn2gj5q8gnT6ByOz6zM1KMkFM%2FdeT4HltYctjwDCvGV5TG%2B%2FgMHYROL88RqH80k4FFuEffSdA11onEu1xato8ymZuxC4ULnq8Td27JCzvLPX6KpbFEsqrVtfKrgTRtMa6UIvem%2FAJKFCzHzEVkRf5Xrs8Is%2BHjt01%2FM0%2FOQJJBTbAhcS8vZAokWcOkn7MNhQdj3HWjEfeavEPFlfoShcgl5ppe1kBIuWshSHvR3YqFIijgnEnnaozom9WXtKqCr5P%2BDgsHb%2B80pccY4ceCDqdGkMv%2BACtplQwod6IzzCqTfxWVyEokZauenunbcOnxi7UajysmkMHgJi%2B%2FjPwIc8Q9H%2FbUBqn%2FSVCFpL3XriEBSfmntM%2FxmAIPauqnSZcn1ZgU6PCHJvLhHpouoDRzLq1w5mYyNpNaXCHoaYQBpJM60B1quDMo3nOt2Rz9gIXFclxiidLSJWCQL6OizFMAadvUD%2Bz6pKff1EMDOo732prQS29DbfRE%2BMTOXSFzgFcau%2FyunHGbbFiharOayAwEoMRjpd7Q9HH45NeAscpFOgMMmfzb8GOqUBrnqRTjrw7ZsGyFTgwHJFuV9Tj0SpZrFJP3Ui315SRwBOX7C%2BtHm0ztB%2Fapu9XSJ6hX%2BIDiFC6E%2BrhNRFMG4IcjNUAgDukh6jB7JoFFN43khBM4oyp1fF42nZNmtQIy6Zr0b5JvqtBLQk7uzwia4t09L3hmJ1wWsIU%2Fx7J%2Fsc73X4%2BKnwdX5My%2FtMqX4yGlWxbgJ3sIU7%2FE91wOLyNTuddPJgbSe%2B&X-Amz-Signature=163270f79b0e088839fbc14525dc0596b32622183b8c085b5cea3b15017a1c31&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCG3BGA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkMTRir2NQvs5GLCt7uJ%2F%2FZ0uieuUuBy3lsrxj5npD9AiEA5JPz7JlOt7fU6Rr28egFPqJCMwhlpR9mERD1MpfuNDMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPPtjeYcwbNLS%2BQjWircA%2FcWM4Z4WgBe23iC06NWiiYzXg3%2Bnj1dw3dxl1D%2BnynQb9%2BKEe7LQNrKfb9PFL7IWDxv9Igr6vy6quh0WJGJxn2gj5q8gnT6ByOz6zM1KMkFM%2FdeT4HltYctjwDCvGV5TG%2B%2FgMHYROL88RqH80k4FFuEffSdA11onEu1xato8ymZuxC4ULnq8Td27JCzvLPX6KpbFEsqrVtfKrgTRtMa6UIvem%2FAJKFCzHzEVkRf5Xrs8Is%2BHjt01%2FM0%2FOQJJBTbAhcS8vZAokWcOkn7MNhQdj3HWjEfeavEPFlfoShcgl5ppe1kBIuWshSHvR3YqFIijgnEnnaozom9WXtKqCr5P%2BDgsHb%2B80pccY4ceCDqdGkMv%2BACtplQwod6IzzCqTfxWVyEokZauenunbcOnxi7UajysmkMHgJi%2B%2FjPwIc8Q9H%2FbUBqn%2FSVCFpL3XriEBSfmntM%2FxmAIPauqnSZcn1ZgU6PCHJvLhHpouoDRzLq1w5mYyNpNaXCHoaYQBpJM60B1quDMo3nOt2Rz9gIXFclxiidLSJWCQL6OizFMAadvUD%2Bz6pKff1EMDOo732prQS29DbfRE%2BMTOXSFzgFcau%2FyunHGbbFiharOayAwEoMRjpd7Q9HH45NeAscpFOgMMmfzb8GOqUBrnqRTjrw7ZsGyFTgwHJFuV9Tj0SpZrFJP3Ui315SRwBOX7C%2BtHm0ztB%2Fapu9XSJ6hX%2BIDiFC6E%2BrhNRFMG4IcjNUAgDukh6jB7JoFFN43khBM4oyp1fF42nZNmtQIy6Zr0b5JvqtBLQk7uzwia4t09L3hmJ1wWsIU%2Fx7J%2Fsc73X4%2BKnwdX5My%2FtMqX4yGlWxbgJ3sIU7%2FE91wOLyNTuddPJgbSe%2B&X-Amz-Signature=05238ce1f6bca39e0035e69d4b7b0348db467d72f5b1abf3fddba998016b4bd4&X-Amz-SignedHeaders=host&x-id=GetObject)
