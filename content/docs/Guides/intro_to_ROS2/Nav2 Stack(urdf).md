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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WFRUWQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzBmLw4I5xgGI8GuqUfn6fpvFQKsZ%2BRYjf0GRKOOXzowIgeXpx9iPbBPKvtn5uVFrA1bDD6rtcz%2BBj5kT8X0F4DAsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCxRoRhMacCNCY5PCrcA%2FR0xpl8Vq1RYnv%2FQr3KAeMa8dE0LEzOrEh1ocLtGruS06EK%2BC3nCxKfMtLCSJBPPsx7fgGVSu2GngAtKf%2FlY2Oya41rN7Uv1I5q%2F1utJdzE5qDHErVNkgcJY%2FDlmdpaefdERPfdUVj6Pe44E56f1z69FlP9MPviGiM9wLuqmffHDLUf1nhHpGatZ%2BTi1ZMzbfwpfNJngjOvPYdCUXRc%2FnRPHsV1v9EMVp%2FYaSTxG7bcFzP1CODQyKPJoi%2BHn9fWEOXbXFGWkvMDyV%2BNdyVDpv%2FFcMKapvutnNCvkmhntT9l3SNA5%2FXMS5VhyG6P7ImhA00HK1KGIgMMmxRh7k%2Ff%2F7Z7FEsmVcnN7RIbkQIKphzZ2ydjVYMY6JFtM7Nu73K7ICEv5CR2sOFB4%2BJAx1USYWDPdiS8L7ohiMwK1PyAkxROk2IIwMjvlMvOq7CowrB3XY5qnvSoBKe6Om%2FFPN7cO%2By%2BEyd%2FHyYQJLA3jAF2ve4bhJ7rreMRFrDMKDR43371WbTGockWacseoD8Yc%2Fkf5axqPGXfKI50LQ%2BizyQGrfrdVQLpxkZYapYoZX5NxOmMGZxuY7qzryeZ%2BfiIrtXFv2k3Gt3WWUffdJ4uNO%2F7oFfnrDeosCJ30GdD90JFMO2tscEGOqUBdnLjmO9kIwB%2F3n3opSlORyVujsQIgQrGvo2GDXfMcNygaw3ZIFE%2Bn0fK8VCXKvpUOhKl%2Fx8r77vOJpX7ewH3gBhCIhmAr721mXGi7QSyPV9k12vOa0oJD5UGKSfDwGzboRNO1DZepGuYQbbQO4m6O8GHV61jSNfpnijCs4M9zN8lR2DMMUD6LoThGzZ2cq63UfIRRLC1mqJoYIx05mPJyC9yM4b6&X-Amz-Signature=b9f2ede3f7f71b9a3c4a294f8473abb68c3812d4c7346759e266e4ad5b826e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WFRUWQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzBmLw4I5xgGI8GuqUfn6fpvFQKsZ%2BRYjf0GRKOOXzowIgeXpx9iPbBPKvtn5uVFrA1bDD6rtcz%2BBj5kT8X0F4DAsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCxRoRhMacCNCY5PCrcA%2FR0xpl8Vq1RYnv%2FQr3KAeMa8dE0LEzOrEh1ocLtGruS06EK%2BC3nCxKfMtLCSJBPPsx7fgGVSu2GngAtKf%2FlY2Oya41rN7Uv1I5q%2F1utJdzE5qDHErVNkgcJY%2FDlmdpaefdERPfdUVj6Pe44E56f1z69FlP9MPviGiM9wLuqmffHDLUf1nhHpGatZ%2BTi1ZMzbfwpfNJngjOvPYdCUXRc%2FnRPHsV1v9EMVp%2FYaSTxG7bcFzP1CODQyKPJoi%2BHn9fWEOXbXFGWkvMDyV%2BNdyVDpv%2FFcMKapvutnNCvkmhntT9l3SNA5%2FXMS5VhyG6P7ImhA00HK1KGIgMMmxRh7k%2Ff%2F7Z7FEsmVcnN7RIbkQIKphzZ2ydjVYMY6JFtM7Nu73K7ICEv5CR2sOFB4%2BJAx1USYWDPdiS8L7ohiMwK1PyAkxROk2IIwMjvlMvOq7CowrB3XY5qnvSoBKe6Om%2FFPN7cO%2By%2BEyd%2FHyYQJLA3jAF2ve4bhJ7rreMRFrDMKDR43371WbTGockWacseoD8Yc%2Fkf5axqPGXfKI50LQ%2BizyQGrfrdVQLpxkZYapYoZX5NxOmMGZxuY7qzryeZ%2BfiIrtXFv2k3Gt3WWUffdJ4uNO%2F7oFfnrDeosCJ30GdD90JFMO2tscEGOqUBdnLjmO9kIwB%2F3n3opSlORyVujsQIgQrGvo2GDXfMcNygaw3ZIFE%2Bn0fK8VCXKvpUOhKl%2Fx8r77vOJpX7ewH3gBhCIhmAr721mXGi7QSyPV9k12vOa0oJD5UGKSfDwGzboRNO1DZepGuYQbbQO4m6O8GHV61jSNfpnijCs4M9zN8lR2DMMUD6LoThGzZ2cq63UfIRRLC1mqJoYIx05mPJyC9yM4b6&X-Amz-Signature=d93806041041381b28eb5f6eee7d4d6e430986a4192940ac784497220c0cb0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WFRUWQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzBmLw4I5xgGI8GuqUfn6fpvFQKsZ%2BRYjf0GRKOOXzowIgeXpx9iPbBPKvtn5uVFrA1bDD6rtcz%2BBj5kT8X0F4DAsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCxRoRhMacCNCY5PCrcA%2FR0xpl8Vq1RYnv%2FQr3KAeMa8dE0LEzOrEh1ocLtGruS06EK%2BC3nCxKfMtLCSJBPPsx7fgGVSu2GngAtKf%2FlY2Oya41rN7Uv1I5q%2F1utJdzE5qDHErVNkgcJY%2FDlmdpaefdERPfdUVj6Pe44E56f1z69FlP9MPviGiM9wLuqmffHDLUf1nhHpGatZ%2BTi1ZMzbfwpfNJngjOvPYdCUXRc%2FnRPHsV1v9EMVp%2FYaSTxG7bcFzP1CODQyKPJoi%2BHn9fWEOXbXFGWkvMDyV%2BNdyVDpv%2FFcMKapvutnNCvkmhntT9l3SNA5%2FXMS5VhyG6P7ImhA00HK1KGIgMMmxRh7k%2Ff%2F7Z7FEsmVcnN7RIbkQIKphzZ2ydjVYMY6JFtM7Nu73K7ICEv5CR2sOFB4%2BJAx1USYWDPdiS8L7ohiMwK1PyAkxROk2IIwMjvlMvOq7CowrB3XY5qnvSoBKe6Om%2FFPN7cO%2By%2BEyd%2FHyYQJLA3jAF2ve4bhJ7rreMRFrDMKDR43371WbTGockWacseoD8Yc%2Fkf5axqPGXfKI50LQ%2BizyQGrfrdVQLpxkZYapYoZX5NxOmMGZxuY7qzryeZ%2BfiIrtXFv2k3Gt3WWUffdJ4uNO%2F7oFfnrDeosCJ30GdD90JFMO2tscEGOqUBdnLjmO9kIwB%2F3n3opSlORyVujsQIgQrGvo2GDXfMcNygaw3ZIFE%2Bn0fK8VCXKvpUOhKl%2Fx8r77vOJpX7ewH3gBhCIhmAr721mXGi7QSyPV9k12vOa0oJD5UGKSfDwGzboRNO1DZepGuYQbbQO4m6O8GHV61jSNfpnijCs4M9zN8lR2DMMUD6LoThGzZ2cq63UfIRRLC1mqJoYIx05mPJyC9yM4b6&X-Amz-Signature=f6162e1f8811bf25ed02fcb2e19f1afe36d137e45e71f3251eb2407ea61f2830&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WFRUWQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzBmLw4I5xgGI8GuqUfn6fpvFQKsZ%2BRYjf0GRKOOXzowIgeXpx9iPbBPKvtn5uVFrA1bDD6rtcz%2BBj5kT8X0F4DAsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCxRoRhMacCNCY5PCrcA%2FR0xpl8Vq1RYnv%2FQr3KAeMa8dE0LEzOrEh1ocLtGruS06EK%2BC3nCxKfMtLCSJBPPsx7fgGVSu2GngAtKf%2FlY2Oya41rN7Uv1I5q%2F1utJdzE5qDHErVNkgcJY%2FDlmdpaefdERPfdUVj6Pe44E56f1z69FlP9MPviGiM9wLuqmffHDLUf1nhHpGatZ%2BTi1ZMzbfwpfNJngjOvPYdCUXRc%2FnRPHsV1v9EMVp%2FYaSTxG7bcFzP1CODQyKPJoi%2BHn9fWEOXbXFGWkvMDyV%2BNdyVDpv%2FFcMKapvutnNCvkmhntT9l3SNA5%2FXMS5VhyG6P7ImhA00HK1KGIgMMmxRh7k%2Ff%2F7Z7FEsmVcnN7RIbkQIKphzZ2ydjVYMY6JFtM7Nu73K7ICEv5CR2sOFB4%2BJAx1USYWDPdiS8L7ohiMwK1PyAkxROk2IIwMjvlMvOq7CowrB3XY5qnvSoBKe6Om%2FFPN7cO%2By%2BEyd%2FHyYQJLA3jAF2ve4bhJ7rreMRFrDMKDR43371WbTGockWacseoD8Yc%2Fkf5axqPGXfKI50LQ%2BizyQGrfrdVQLpxkZYapYoZX5NxOmMGZxuY7qzryeZ%2BfiIrtXFv2k3Gt3WWUffdJ4uNO%2F7oFfnrDeosCJ30GdD90JFMO2tscEGOqUBdnLjmO9kIwB%2F3n3opSlORyVujsQIgQrGvo2GDXfMcNygaw3ZIFE%2Bn0fK8VCXKvpUOhKl%2Fx8r77vOJpX7ewH3gBhCIhmAr721mXGi7QSyPV9k12vOa0oJD5UGKSfDwGzboRNO1DZepGuYQbbQO4m6O8GHV61jSNfpnijCs4M9zN8lR2DMMUD6LoThGzZ2cq63UfIRRLC1mqJoYIx05mPJyC9yM4b6&X-Amz-Signature=fa71f9439ed3c618531186caa67db9d2ce64a8f6ceb4a4ff7d8d831a19d7c3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WFRUWQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzBmLw4I5xgGI8GuqUfn6fpvFQKsZ%2BRYjf0GRKOOXzowIgeXpx9iPbBPKvtn5uVFrA1bDD6rtcz%2BBj5kT8X0F4DAsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCxRoRhMacCNCY5PCrcA%2FR0xpl8Vq1RYnv%2FQr3KAeMa8dE0LEzOrEh1ocLtGruS06EK%2BC3nCxKfMtLCSJBPPsx7fgGVSu2GngAtKf%2FlY2Oya41rN7Uv1I5q%2F1utJdzE5qDHErVNkgcJY%2FDlmdpaefdERPfdUVj6Pe44E56f1z69FlP9MPviGiM9wLuqmffHDLUf1nhHpGatZ%2BTi1ZMzbfwpfNJngjOvPYdCUXRc%2FnRPHsV1v9EMVp%2FYaSTxG7bcFzP1CODQyKPJoi%2BHn9fWEOXbXFGWkvMDyV%2BNdyVDpv%2FFcMKapvutnNCvkmhntT9l3SNA5%2FXMS5VhyG6P7ImhA00HK1KGIgMMmxRh7k%2Ff%2F7Z7FEsmVcnN7RIbkQIKphzZ2ydjVYMY6JFtM7Nu73K7ICEv5CR2sOFB4%2BJAx1USYWDPdiS8L7ohiMwK1PyAkxROk2IIwMjvlMvOq7CowrB3XY5qnvSoBKe6Om%2FFPN7cO%2By%2BEyd%2FHyYQJLA3jAF2ve4bhJ7rreMRFrDMKDR43371WbTGockWacseoD8Yc%2Fkf5axqPGXfKI50LQ%2BizyQGrfrdVQLpxkZYapYoZX5NxOmMGZxuY7qzryeZ%2BfiIrtXFv2k3Gt3WWUffdJ4uNO%2F7oFfnrDeosCJ30GdD90JFMO2tscEGOqUBdnLjmO9kIwB%2F3n3opSlORyVujsQIgQrGvo2GDXfMcNygaw3ZIFE%2Bn0fK8VCXKvpUOhKl%2Fx8r77vOJpX7ewH3gBhCIhmAr721mXGi7QSyPV9k12vOa0oJD5UGKSfDwGzboRNO1DZepGuYQbbQO4m6O8GHV61jSNfpnijCs4M9zN8lR2DMMUD6LoThGzZ2cq63UfIRRLC1mqJoYIx05mPJyC9yM4b6&X-Amz-Signature=339126e42a4168d557523f42f793ddfe1be78263c1dd432970e4e14e9301e551&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WFRUWQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzBmLw4I5xgGI8GuqUfn6fpvFQKsZ%2BRYjf0GRKOOXzowIgeXpx9iPbBPKvtn5uVFrA1bDD6rtcz%2BBj5kT8X0F4DAsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCxRoRhMacCNCY5PCrcA%2FR0xpl8Vq1RYnv%2FQr3KAeMa8dE0LEzOrEh1ocLtGruS06EK%2BC3nCxKfMtLCSJBPPsx7fgGVSu2GngAtKf%2FlY2Oya41rN7Uv1I5q%2F1utJdzE5qDHErVNkgcJY%2FDlmdpaefdERPfdUVj6Pe44E56f1z69FlP9MPviGiM9wLuqmffHDLUf1nhHpGatZ%2BTi1ZMzbfwpfNJngjOvPYdCUXRc%2FnRPHsV1v9EMVp%2FYaSTxG7bcFzP1CODQyKPJoi%2BHn9fWEOXbXFGWkvMDyV%2BNdyVDpv%2FFcMKapvutnNCvkmhntT9l3SNA5%2FXMS5VhyG6P7ImhA00HK1KGIgMMmxRh7k%2Ff%2F7Z7FEsmVcnN7RIbkQIKphzZ2ydjVYMY6JFtM7Nu73K7ICEv5CR2sOFB4%2BJAx1USYWDPdiS8L7ohiMwK1PyAkxROk2IIwMjvlMvOq7CowrB3XY5qnvSoBKe6Om%2FFPN7cO%2By%2BEyd%2FHyYQJLA3jAF2ve4bhJ7rreMRFrDMKDR43371WbTGockWacseoD8Yc%2Fkf5axqPGXfKI50LQ%2BizyQGrfrdVQLpxkZYapYoZX5NxOmMGZxuY7qzryeZ%2BfiIrtXFv2k3Gt3WWUffdJ4uNO%2F7oFfnrDeosCJ30GdD90JFMO2tscEGOqUBdnLjmO9kIwB%2F3n3opSlORyVujsQIgQrGvo2GDXfMcNygaw3ZIFE%2Bn0fK8VCXKvpUOhKl%2Fx8r77vOJpX7ewH3gBhCIhmAr721mXGi7QSyPV9k12vOa0oJD5UGKSfDwGzboRNO1DZepGuYQbbQO4m6O8GHV61jSNfpnijCs4M9zN8lR2DMMUD6LoThGzZ2cq63UfIRRLC1mqJoYIx05mPJyC9yM4b6&X-Amz-Signature=a4b591133decb64b2a29c426a455313f73369e802b59fbc4e165bff83c5bb67f&X-Amz-SignedHeaders=host&x-id=GetObject)
