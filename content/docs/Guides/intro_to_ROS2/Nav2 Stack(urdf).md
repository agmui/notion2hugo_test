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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHY7XJI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOR9RISOswzXEH%2FbdyuK3JCV6Q6gFSU%2F2Fmo%2B1is8zaAiEA2Kw3KnW9akmQ8gEFJ09J0kN25U%2BH%2FWglop8I%2FMYoTT8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHgNTuQ0wDQXGo3ZVyrcA7AOIIJrxkJ9ZdTKwm4SFTKidgceZJCge82rh2UKbtVhUYfr3vRAepYiIRma1YRsFYB891bfWrd4KTqjTgoLQmhf%2BlslQBHPyA1qyUElkMoWkHCplsgoLlG4jqwkOcmwyiWJwLuvm4dryu76GSs%2BC4v1vRcHC7DpeIipUQLWE0eynYKLf9793YHbvGdQoOe%2FzkGUsxkV%2FRJBNFP3bDIzpJoj2URgj8FCJpdLAwBoXbwSCiWzvwG4FYlCg3kgzeUYM7IExR7lK80UROxwRxHbjM05SWdTid2yZTaAMHX3CEJx6MuwHhEv8EWrwN4cmnfxltxtmpW7dDFjPYTgzPvYx5QAkqjmoxSCkxL3x3ucyIZ3JouhKiG9qUnrSgIB2s57mPCkDGw4x5QY8X%2BjD6viwX2DsbfA6GNZlsRyO9Pt%2F7fjryW7ejHLAYsICgQ8P7INqFcqTdnBFasqlDILAHcuYw9QL%2BDhOFDwqMzkhJPO5FBoXiwZtnB3nGaIlYgiJUtVs0VIg4a06tCGh%2BAcHNizZFctA%2FSlV2ZNJAohTSzbC4FAoNuAhFFk0q8qaTIM4wOmQTVTOyysOZQLTUbRznPlUyetodOyjVjli%2Bmc75PmFftWf3xBwZqitBiJjui6MILZ2r4GOqUBv5AOltvnRam4bSgSywalm00cvEQegjftG9ygWT0ewZePPVXCGCPbRZbRolcnZOn3HTbeti26SCjx046Yy2cUvr9svarBnoH5pyi9aVz4cTcsNqlIY23vEiyGP%2FY%2BCQRTbFSpKnH1umR4s%2FwU4H15xUguetJeno4wdOuThSSVpLXcqpFj86h2RIBnt1buHAWQlLIkfoLmSG%2B6BM0%2BCMgJQnR7saJP&X-Amz-Signature=39ad8245cbca4bc360997b6184a11f069856afa5375fa501549d3686eaed8d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHY7XJI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOR9RISOswzXEH%2FbdyuK3JCV6Q6gFSU%2F2Fmo%2B1is8zaAiEA2Kw3KnW9akmQ8gEFJ09J0kN25U%2BH%2FWglop8I%2FMYoTT8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHgNTuQ0wDQXGo3ZVyrcA7AOIIJrxkJ9ZdTKwm4SFTKidgceZJCge82rh2UKbtVhUYfr3vRAepYiIRma1YRsFYB891bfWrd4KTqjTgoLQmhf%2BlslQBHPyA1qyUElkMoWkHCplsgoLlG4jqwkOcmwyiWJwLuvm4dryu76GSs%2BC4v1vRcHC7DpeIipUQLWE0eynYKLf9793YHbvGdQoOe%2FzkGUsxkV%2FRJBNFP3bDIzpJoj2URgj8FCJpdLAwBoXbwSCiWzvwG4FYlCg3kgzeUYM7IExR7lK80UROxwRxHbjM05SWdTid2yZTaAMHX3CEJx6MuwHhEv8EWrwN4cmnfxltxtmpW7dDFjPYTgzPvYx5QAkqjmoxSCkxL3x3ucyIZ3JouhKiG9qUnrSgIB2s57mPCkDGw4x5QY8X%2BjD6viwX2DsbfA6GNZlsRyO9Pt%2F7fjryW7ejHLAYsICgQ8P7INqFcqTdnBFasqlDILAHcuYw9QL%2BDhOFDwqMzkhJPO5FBoXiwZtnB3nGaIlYgiJUtVs0VIg4a06tCGh%2BAcHNizZFctA%2FSlV2ZNJAohTSzbC4FAoNuAhFFk0q8qaTIM4wOmQTVTOyysOZQLTUbRznPlUyetodOyjVjli%2Bmc75PmFftWf3xBwZqitBiJjui6MILZ2r4GOqUBv5AOltvnRam4bSgSywalm00cvEQegjftG9ygWT0ewZePPVXCGCPbRZbRolcnZOn3HTbeti26SCjx046Yy2cUvr9svarBnoH5pyi9aVz4cTcsNqlIY23vEiyGP%2FY%2BCQRTbFSpKnH1umR4s%2FwU4H15xUguetJeno4wdOuThSSVpLXcqpFj86h2RIBnt1buHAWQlLIkfoLmSG%2B6BM0%2BCMgJQnR7saJP&X-Amz-Signature=9df7805eb546876854e3fde6341d46e9fdb737955ba9908ddf74be71c98f32e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHY7XJI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOR9RISOswzXEH%2FbdyuK3JCV6Q6gFSU%2F2Fmo%2B1is8zaAiEA2Kw3KnW9akmQ8gEFJ09J0kN25U%2BH%2FWglop8I%2FMYoTT8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHgNTuQ0wDQXGo3ZVyrcA7AOIIJrxkJ9ZdTKwm4SFTKidgceZJCge82rh2UKbtVhUYfr3vRAepYiIRma1YRsFYB891bfWrd4KTqjTgoLQmhf%2BlslQBHPyA1qyUElkMoWkHCplsgoLlG4jqwkOcmwyiWJwLuvm4dryu76GSs%2BC4v1vRcHC7DpeIipUQLWE0eynYKLf9793YHbvGdQoOe%2FzkGUsxkV%2FRJBNFP3bDIzpJoj2URgj8FCJpdLAwBoXbwSCiWzvwG4FYlCg3kgzeUYM7IExR7lK80UROxwRxHbjM05SWdTid2yZTaAMHX3CEJx6MuwHhEv8EWrwN4cmnfxltxtmpW7dDFjPYTgzPvYx5QAkqjmoxSCkxL3x3ucyIZ3JouhKiG9qUnrSgIB2s57mPCkDGw4x5QY8X%2BjD6viwX2DsbfA6GNZlsRyO9Pt%2F7fjryW7ejHLAYsICgQ8P7INqFcqTdnBFasqlDILAHcuYw9QL%2BDhOFDwqMzkhJPO5FBoXiwZtnB3nGaIlYgiJUtVs0VIg4a06tCGh%2BAcHNizZFctA%2FSlV2ZNJAohTSzbC4FAoNuAhFFk0q8qaTIM4wOmQTVTOyysOZQLTUbRznPlUyetodOyjVjli%2Bmc75PmFftWf3xBwZqitBiJjui6MILZ2r4GOqUBv5AOltvnRam4bSgSywalm00cvEQegjftG9ygWT0ewZePPVXCGCPbRZbRolcnZOn3HTbeti26SCjx046Yy2cUvr9svarBnoH5pyi9aVz4cTcsNqlIY23vEiyGP%2FY%2BCQRTbFSpKnH1umR4s%2FwU4H15xUguetJeno4wdOuThSSVpLXcqpFj86h2RIBnt1buHAWQlLIkfoLmSG%2B6BM0%2BCMgJQnR7saJP&X-Amz-Signature=42a16f7c6bc43b5dadb9936484ca6e9a8ac92a5840377c1b811a1748fd38326e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHY7XJI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOR9RISOswzXEH%2FbdyuK3JCV6Q6gFSU%2F2Fmo%2B1is8zaAiEA2Kw3KnW9akmQ8gEFJ09J0kN25U%2BH%2FWglop8I%2FMYoTT8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHgNTuQ0wDQXGo3ZVyrcA7AOIIJrxkJ9ZdTKwm4SFTKidgceZJCge82rh2UKbtVhUYfr3vRAepYiIRma1YRsFYB891bfWrd4KTqjTgoLQmhf%2BlslQBHPyA1qyUElkMoWkHCplsgoLlG4jqwkOcmwyiWJwLuvm4dryu76GSs%2BC4v1vRcHC7DpeIipUQLWE0eynYKLf9793YHbvGdQoOe%2FzkGUsxkV%2FRJBNFP3bDIzpJoj2URgj8FCJpdLAwBoXbwSCiWzvwG4FYlCg3kgzeUYM7IExR7lK80UROxwRxHbjM05SWdTid2yZTaAMHX3CEJx6MuwHhEv8EWrwN4cmnfxltxtmpW7dDFjPYTgzPvYx5QAkqjmoxSCkxL3x3ucyIZ3JouhKiG9qUnrSgIB2s57mPCkDGw4x5QY8X%2BjD6viwX2DsbfA6GNZlsRyO9Pt%2F7fjryW7ejHLAYsICgQ8P7INqFcqTdnBFasqlDILAHcuYw9QL%2BDhOFDwqMzkhJPO5FBoXiwZtnB3nGaIlYgiJUtVs0VIg4a06tCGh%2BAcHNizZFctA%2FSlV2ZNJAohTSzbC4FAoNuAhFFk0q8qaTIM4wOmQTVTOyysOZQLTUbRznPlUyetodOyjVjli%2Bmc75PmFftWf3xBwZqitBiJjui6MILZ2r4GOqUBv5AOltvnRam4bSgSywalm00cvEQegjftG9ygWT0ewZePPVXCGCPbRZbRolcnZOn3HTbeti26SCjx046Yy2cUvr9svarBnoH5pyi9aVz4cTcsNqlIY23vEiyGP%2FY%2BCQRTbFSpKnH1umR4s%2FwU4H15xUguetJeno4wdOuThSSVpLXcqpFj86h2RIBnt1buHAWQlLIkfoLmSG%2B6BM0%2BCMgJQnR7saJP&X-Amz-Signature=4d61d4e53ba7b8a02631921e8aeaa7a98a045390a995e540c83e92961ea469b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHY7XJI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOR9RISOswzXEH%2FbdyuK3JCV6Q6gFSU%2F2Fmo%2B1is8zaAiEA2Kw3KnW9akmQ8gEFJ09J0kN25U%2BH%2FWglop8I%2FMYoTT8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHgNTuQ0wDQXGo3ZVyrcA7AOIIJrxkJ9ZdTKwm4SFTKidgceZJCge82rh2UKbtVhUYfr3vRAepYiIRma1YRsFYB891bfWrd4KTqjTgoLQmhf%2BlslQBHPyA1qyUElkMoWkHCplsgoLlG4jqwkOcmwyiWJwLuvm4dryu76GSs%2BC4v1vRcHC7DpeIipUQLWE0eynYKLf9793YHbvGdQoOe%2FzkGUsxkV%2FRJBNFP3bDIzpJoj2URgj8FCJpdLAwBoXbwSCiWzvwG4FYlCg3kgzeUYM7IExR7lK80UROxwRxHbjM05SWdTid2yZTaAMHX3CEJx6MuwHhEv8EWrwN4cmnfxltxtmpW7dDFjPYTgzPvYx5QAkqjmoxSCkxL3x3ucyIZ3JouhKiG9qUnrSgIB2s57mPCkDGw4x5QY8X%2BjD6viwX2DsbfA6GNZlsRyO9Pt%2F7fjryW7ejHLAYsICgQ8P7INqFcqTdnBFasqlDILAHcuYw9QL%2BDhOFDwqMzkhJPO5FBoXiwZtnB3nGaIlYgiJUtVs0VIg4a06tCGh%2BAcHNizZFctA%2FSlV2ZNJAohTSzbC4FAoNuAhFFk0q8qaTIM4wOmQTVTOyysOZQLTUbRznPlUyetodOyjVjli%2Bmc75PmFftWf3xBwZqitBiJjui6MILZ2r4GOqUBv5AOltvnRam4bSgSywalm00cvEQegjftG9ygWT0ewZePPVXCGCPbRZbRolcnZOn3HTbeti26SCjx046Yy2cUvr9svarBnoH5pyi9aVz4cTcsNqlIY23vEiyGP%2FY%2BCQRTbFSpKnH1umR4s%2FwU4H15xUguetJeno4wdOuThSSVpLXcqpFj86h2RIBnt1buHAWQlLIkfoLmSG%2B6BM0%2BCMgJQnR7saJP&X-Amz-Signature=8b94353fca04cb3c14cba4cc367bf512691498287474e42e2d360bdc1d6f3d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHY7XJI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOR9RISOswzXEH%2FbdyuK3JCV6Q6gFSU%2F2Fmo%2B1is8zaAiEA2Kw3KnW9akmQ8gEFJ09J0kN25U%2BH%2FWglop8I%2FMYoTT8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHgNTuQ0wDQXGo3ZVyrcA7AOIIJrxkJ9ZdTKwm4SFTKidgceZJCge82rh2UKbtVhUYfr3vRAepYiIRma1YRsFYB891bfWrd4KTqjTgoLQmhf%2BlslQBHPyA1qyUElkMoWkHCplsgoLlG4jqwkOcmwyiWJwLuvm4dryu76GSs%2BC4v1vRcHC7DpeIipUQLWE0eynYKLf9793YHbvGdQoOe%2FzkGUsxkV%2FRJBNFP3bDIzpJoj2URgj8FCJpdLAwBoXbwSCiWzvwG4FYlCg3kgzeUYM7IExR7lK80UROxwRxHbjM05SWdTid2yZTaAMHX3CEJx6MuwHhEv8EWrwN4cmnfxltxtmpW7dDFjPYTgzPvYx5QAkqjmoxSCkxL3x3ucyIZ3JouhKiG9qUnrSgIB2s57mPCkDGw4x5QY8X%2BjD6viwX2DsbfA6GNZlsRyO9Pt%2F7fjryW7ejHLAYsICgQ8P7INqFcqTdnBFasqlDILAHcuYw9QL%2BDhOFDwqMzkhJPO5FBoXiwZtnB3nGaIlYgiJUtVs0VIg4a06tCGh%2BAcHNizZFctA%2FSlV2ZNJAohTSzbC4FAoNuAhFFk0q8qaTIM4wOmQTVTOyysOZQLTUbRznPlUyetodOyjVjli%2Bmc75PmFftWf3xBwZqitBiJjui6MILZ2r4GOqUBv5AOltvnRam4bSgSywalm00cvEQegjftG9ygWT0ewZePPVXCGCPbRZbRolcnZOn3HTbeti26SCjx046Yy2cUvr9svarBnoH5pyi9aVz4cTcsNqlIY23vEiyGP%2FY%2BCQRTbFSpKnH1umR4s%2FwU4H15xUguetJeno4wdOuThSSVpLXcqpFj86h2RIBnt1buHAWQlLIkfoLmSG%2B6BM0%2BCMgJQnR7saJP&X-Amz-Signature=ad6e42afb557e553afa79f6a41b346c147aac11403a3a533aab7cc5466d781d7&X-Amz-SignedHeaders=host&x-id=GetObject)
