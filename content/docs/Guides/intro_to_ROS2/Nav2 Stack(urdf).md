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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPWRGQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFQ3nfItU10obJJgWpBZJ4PTza3O8%2BjvKkpBQ9z4UU4AiEAp%2FVck%2Fp3czs4IEMTsGKFIM7OQ7ghXFbyJgMRDLyxhBsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDABUUvmjmp%2BerEtuJircA4Mxbs5de%2FaDSwbci7b4v5oyG11rlLJLsGUFH6kt5TpCu6I8D5u9ND6x0HP10nfn6LUIm2nosx53dICPv68JN6MXyXlbqVPcINY6byXEO%2BIhChf9%2FGs%2B2Q%2BlQ%2FLk2yufBLgBD18%2B9jEXnIgZhgEfz9lVjhV%2FSk25X4eMEVhVzdbVje5eIkd%2F1i6K%2BbicVC3nLiv%2BxVwr7bpgFW2Bi06pr8RfoBkyQ592t5X9W%2B0exROg381RWyNYaTxSsV02K0ZNrS5xsUrSAY%2FNBCFYAZnHJZ4APChceVQKHfDU2%2FQOFLre7OWNOB9ZQCBQ%2B8YT%2BrChx%2BWSyQcyZcl7pSfvhhoEwBPfXjB%2BbWFHfbbbyEhcZpBZAvhlCddRXD8XAJpfWAbBzh2XNMFzLC4VEpTgiPBk9pfWotHmxiQW%2Fc9iXikyHo96jiCXQ%2BFlB7hPx6iH%2F8SfelLwcFaA8eOkTU7U689%2F7TDGtwK3rxBnIKDjIVudM2PLqqSIYCZZVTx51EQY8WRavm7tQ%2BHwFhX1ckW%2BX%2FL%2BN8nsVIQn8VY24QvqPOvz2nwewk7qJ9WQUclcuy%2Bf0MxIXRaWuWuiyFzLppoQBkCCQPdhU1RTM4CWuEiGIJ0f48Fv%2FPKbID2dNTFY3770MMeKusAGOqUBXqiDI%2F6mcvwB%2FygV8%2B8teDqi6EQFU85o%2BoFXeCUIwNDXtBKlHVhUxxcLl4AdRTc%2BylN7%2Flnusx4XeyPzAdFcvVhBxNSMA9hekEvHFGHJaVXUjPXz%2B2WTGjBpv95EbyyEDu97Rn9IsAlx5Ph%2BfYqchEbqmMx6N7zJSEEyUkN0ry6eHFZqgEzdg5RwhyUpmn4O5%2FarEd3Vui9Jkv0zMTT859%2BM76cB&X-Amz-Signature=35dbf048567b1214da5408a463f0bad83c827a5aeb1a8820dba366cc50d30744&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPWRGQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFQ3nfItU10obJJgWpBZJ4PTza3O8%2BjvKkpBQ9z4UU4AiEAp%2FVck%2Fp3czs4IEMTsGKFIM7OQ7ghXFbyJgMRDLyxhBsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDABUUvmjmp%2BerEtuJircA4Mxbs5de%2FaDSwbci7b4v5oyG11rlLJLsGUFH6kt5TpCu6I8D5u9ND6x0HP10nfn6LUIm2nosx53dICPv68JN6MXyXlbqVPcINY6byXEO%2BIhChf9%2FGs%2B2Q%2BlQ%2FLk2yufBLgBD18%2B9jEXnIgZhgEfz9lVjhV%2FSk25X4eMEVhVzdbVje5eIkd%2F1i6K%2BbicVC3nLiv%2BxVwr7bpgFW2Bi06pr8RfoBkyQ592t5X9W%2B0exROg381RWyNYaTxSsV02K0ZNrS5xsUrSAY%2FNBCFYAZnHJZ4APChceVQKHfDU2%2FQOFLre7OWNOB9ZQCBQ%2B8YT%2BrChx%2BWSyQcyZcl7pSfvhhoEwBPfXjB%2BbWFHfbbbyEhcZpBZAvhlCddRXD8XAJpfWAbBzh2XNMFzLC4VEpTgiPBk9pfWotHmxiQW%2Fc9iXikyHo96jiCXQ%2BFlB7hPx6iH%2F8SfelLwcFaA8eOkTU7U689%2F7TDGtwK3rxBnIKDjIVudM2PLqqSIYCZZVTx51EQY8WRavm7tQ%2BHwFhX1ckW%2BX%2FL%2BN8nsVIQn8VY24QvqPOvz2nwewk7qJ9WQUclcuy%2Bf0MxIXRaWuWuiyFzLppoQBkCCQPdhU1RTM4CWuEiGIJ0f48Fv%2FPKbID2dNTFY3770MMeKusAGOqUBXqiDI%2F6mcvwB%2FygV8%2B8teDqi6EQFU85o%2BoFXeCUIwNDXtBKlHVhUxxcLl4AdRTc%2BylN7%2Flnusx4XeyPzAdFcvVhBxNSMA9hekEvHFGHJaVXUjPXz%2B2WTGjBpv95EbyyEDu97Rn9IsAlx5Ph%2BfYqchEbqmMx6N7zJSEEyUkN0ry6eHFZqgEzdg5RwhyUpmn4O5%2FarEd3Vui9Jkv0zMTT859%2BM76cB&X-Amz-Signature=64d897a62fd87ed45c188988a40a7259edffe238258389d6a3c166b381890db9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPWRGQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFQ3nfItU10obJJgWpBZJ4PTza3O8%2BjvKkpBQ9z4UU4AiEAp%2FVck%2Fp3czs4IEMTsGKFIM7OQ7ghXFbyJgMRDLyxhBsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDABUUvmjmp%2BerEtuJircA4Mxbs5de%2FaDSwbci7b4v5oyG11rlLJLsGUFH6kt5TpCu6I8D5u9ND6x0HP10nfn6LUIm2nosx53dICPv68JN6MXyXlbqVPcINY6byXEO%2BIhChf9%2FGs%2B2Q%2BlQ%2FLk2yufBLgBD18%2B9jEXnIgZhgEfz9lVjhV%2FSk25X4eMEVhVzdbVje5eIkd%2F1i6K%2BbicVC3nLiv%2BxVwr7bpgFW2Bi06pr8RfoBkyQ592t5X9W%2B0exROg381RWyNYaTxSsV02K0ZNrS5xsUrSAY%2FNBCFYAZnHJZ4APChceVQKHfDU2%2FQOFLre7OWNOB9ZQCBQ%2B8YT%2BrChx%2BWSyQcyZcl7pSfvhhoEwBPfXjB%2BbWFHfbbbyEhcZpBZAvhlCddRXD8XAJpfWAbBzh2XNMFzLC4VEpTgiPBk9pfWotHmxiQW%2Fc9iXikyHo96jiCXQ%2BFlB7hPx6iH%2F8SfelLwcFaA8eOkTU7U689%2F7TDGtwK3rxBnIKDjIVudM2PLqqSIYCZZVTx51EQY8WRavm7tQ%2BHwFhX1ckW%2BX%2FL%2BN8nsVIQn8VY24QvqPOvz2nwewk7qJ9WQUclcuy%2Bf0MxIXRaWuWuiyFzLppoQBkCCQPdhU1RTM4CWuEiGIJ0f48Fv%2FPKbID2dNTFY3770MMeKusAGOqUBXqiDI%2F6mcvwB%2FygV8%2B8teDqi6EQFU85o%2BoFXeCUIwNDXtBKlHVhUxxcLl4AdRTc%2BylN7%2Flnusx4XeyPzAdFcvVhBxNSMA9hekEvHFGHJaVXUjPXz%2B2WTGjBpv95EbyyEDu97Rn9IsAlx5Ph%2BfYqchEbqmMx6N7zJSEEyUkN0ry6eHFZqgEzdg5RwhyUpmn4O5%2FarEd3Vui9Jkv0zMTT859%2BM76cB&X-Amz-Signature=80ff2efd0fbb6c171fc35f8eadf8ee490e595e92ca47720d96cf6f4ab3c58636&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPWRGQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFQ3nfItU10obJJgWpBZJ4PTza3O8%2BjvKkpBQ9z4UU4AiEAp%2FVck%2Fp3czs4IEMTsGKFIM7OQ7ghXFbyJgMRDLyxhBsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDABUUvmjmp%2BerEtuJircA4Mxbs5de%2FaDSwbci7b4v5oyG11rlLJLsGUFH6kt5TpCu6I8D5u9ND6x0HP10nfn6LUIm2nosx53dICPv68JN6MXyXlbqVPcINY6byXEO%2BIhChf9%2FGs%2B2Q%2BlQ%2FLk2yufBLgBD18%2B9jEXnIgZhgEfz9lVjhV%2FSk25X4eMEVhVzdbVje5eIkd%2F1i6K%2BbicVC3nLiv%2BxVwr7bpgFW2Bi06pr8RfoBkyQ592t5X9W%2B0exROg381RWyNYaTxSsV02K0ZNrS5xsUrSAY%2FNBCFYAZnHJZ4APChceVQKHfDU2%2FQOFLre7OWNOB9ZQCBQ%2B8YT%2BrChx%2BWSyQcyZcl7pSfvhhoEwBPfXjB%2BbWFHfbbbyEhcZpBZAvhlCddRXD8XAJpfWAbBzh2XNMFzLC4VEpTgiPBk9pfWotHmxiQW%2Fc9iXikyHo96jiCXQ%2BFlB7hPx6iH%2F8SfelLwcFaA8eOkTU7U689%2F7TDGtwK3rxBnIKDjIVudM2PLqqSIYCZZVTx51EQY8WRavm7tQ%2BHwFhX1ckW%2BX%2FL%2BN8nsVIQn8VY24QvqPOvz2nwewk7qJ9WQUclcuy%2Bf0MxIXRaWuWuiyFzLppoQBkCCQPdhU1RTM4CWuEiGIJ0f48Fv%2FPKbID2dNTFY3770MMeKusAGOqUBXqiDI%2F6mcvwB%2FygV8%2B8teDqi6EQFU85o%2BoFXeCUIwNDXtBKlHVhUxxcLl4AdRTc%2BylN7%2Flnusx4XeyPzAdFcvVhBxNSMA9hekEvHFGHJaVXUjPXz%2B2WTGjBpv95EbyyEDu97Rn9IsAlx5Ph%2BfYqchEbqmMx6N7zJSEEyUkN0ry6eHFZqgEzdg5RwhyUpmn4O5%2FarEd3Vui9Jkv0zMTT859%2BM76cB&X-Amz-Signature=93a643a042deca0bdc5db410cb67d723d0f6239150284139730e0a5961244a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPWRGQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFQ3nfItU10obJJgWpBZJ4PTza3O8%2BjvKkpBQ9z4UU4AiEAp%2FVck%2Fp3czs4IEMTsGKFIM7OQ7ghXFbyJgMRDLyxhBsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDABUUvmjmp%2BerEtuJircA4Mxbs5de%2FaDSwbci7b4v5oyG11rlLJLsGUFH6kt5TpCu6I8D5u9ND6x0HP10nfn6LUIm2nosx53dICPv68JN6MXyXlbqVPcINY6byXEO%2BIhChf9%2FGs%2B2Q%2BlQ%2FLk2yufBLgBD18%2B9jEXnIgZhgEfz9lVjhV%2FSk25X4eMEVhVzdbVje5eIkd%2F1i6K%2BbicVC3nLiv%2BxVwr7bpgFW2Bi06pr8RfoBkyQ592t5X9W%2B0exROg381RWyNYaTxSsV02K0ZNrS5xsUrSAY%2FNBCFYAZnHJZ4APChceVQKHfDU2%2FQOFLre7OWNOB9ZQCBQ%2B8YT%2BrChx%2BWSyQcyZcl7pSfvhhoEwBPfXjB%2BbWFHfbbbyEhcZpBZAvhlCddRXD8XAJpfWAbBzh2XNMFzLC4VEpTgiPBk9pfWotHmxiQW%2Fc9iXikyHo96jiCXQ%2BFlB7hPx6iH%2F8SfelLwcFaA8eOkTU7U689%2F7TDGtwK3rxBnIKDjIVudM2PLqqSIYCZZVTx51EQY8WRavm7tQ%2BHwFhX1ckW%2BX%2FL%2BN8nsVIQn8VY24QvqPOvz2nwewk7qJ9WQUclcuy%2Bf0MxIXRaWuWuiyFzLppoQBkCCQPdhU1RTM4CWuEiGIJ0f48Fv%2FPKbID2dNTFY3770MMeKusAGOqUBXqiDI%2F6mcvwB%2FygV8%2B8teDqi6EQFU85o%2BoFXeCUIwNDXtBKlHVhUxxcLl4AdRTc%2BylN7%2Flnusx4XeyPzAdFcvVhBxNSMA9hekEvHFGHJaVXUjPXz%2B2WTGjBpv95EbyyEDu97Rn9IsAlx5Ph%2BfYqchEbqmMx6N7zJSEEyUkN0ry6eHFZqgEzdg5RwhyUpmn4O5%2FarEd3Vui9Jkv0zMTT859%2BM76cB&X-Amz-Signature=baf23f15bdacdde3e5e3ee52ec88cba51f3b5312362da640649eb43a8fa0b6c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPWRGQ5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFQ3nfItU10obJJgWpBZJ4PTza3O8%2BjvKkpBQ9z4UU4AiEAp%2FVck%2Fp3czs4IEMTsGKFIM7OQ7ghXFbyJgMRDLyxhBsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDABUUvmjmp%2BerEtuJircA4Mxbs5de%2FaDSwbci7b4v5oyG11rlLJLsGUFH6kt5TpCu6I8D5u9ND6x0HP10nfn6LUIm2nosx53dICPv68JN6MXyXlbqVPcINY6byXEO%2BIhChf9%2FGs%2B2Q%2BlQ%2FLk2yufBLgBD18%2B9jEXnIgZhgEfz9lVjhV%2FSk25X4eMEVhVzdbVje5eIkd%2F1i6K%2BbicVC3nLiv%2BxVwr7bpgFW2Bi06pr8RfoBkyQ592t5X9W%2B0exROg381RWyNYaTxSsV02K0ZNrS5xsUrSAY%2FNBCFYAZnHJZ4APChceVQKHfDU2%2FQOFLre7OWNOB9ZQCBQ%2B8YT%2BrChx%2BWSyQcyZcl7pSfvhhoEwBPfXjB%2BbWFHfbbbyEhcZpBZAvhlCddRXD8XAJpfWAbBzh2XNMFzLC4VEpTgiPBk9pfWotHmxiQW%2Fc9iXikyHo96jiCXQ%2BFlB7hPx6iH%2F8SfelLwcFaA8eOkTU7U689%2F7TDGtwK3rxBnIKDjIVudM2PLqqSIYCZZVTx51EQY8WRavm7tQ%2BHwFhX1ckW%2BX%2FL%2BN8nsVIQn8VY24QvqPOvz2nwewk7qJ9WQUclcuy%2Bf0MxIXRaWuWuiyFzLppoQBkCCQPdhU1RTM4CWuEiGIJ0f48Fv%2FPKbID2dNTFY3770MMeKusAGOqUBXqiDI%2F6mcvwB%2FygV8%2B8teDqi6EQFU85o%2BoFXeCUIwNDXtBKlHVhUxxcLl4AdRTc%2BylN7%2Flnusx4XeyPzAdFcvVhBxNSMA9hekEvHFGHJaVXUjPXz%2B2WTGjBpv95EbyyEDu97Rn9IsAlx5Ph%2BfYqchEbqmMx6N7zJSEEyUkN0ry6eHFZqgEzdg5RwhyUpmn4O5%2FarEd3Vui9Jkv0zMTT859%2BM76cB&X-Amz-Signature=d862ef93e314c2011eedf149069a193357f0f0ee6fce2cf847e2661b04fb69e2&X-Amz-SignedHeaders=host&x-id=GetObject)
