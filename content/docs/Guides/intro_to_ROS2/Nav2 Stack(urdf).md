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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2NAOS2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB%2BPYJuUKZWoe4a%2F%2BYJrgDCbSMDwESdqQv5%2BCxE%2FGYdoAiEA6qyezBh55MeearMEXQ0MqrCn%2FP%2FyAYN2S%2BRxrSzVxecqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmmt1LTRCOTxiyxLCrcA4cKlRT6PQT9ahXgLpEPSjyo9B33TFDD88%2BnxDWvyDqry%2Buv7XRCTtgGulAAFyHXiP1BFA8iNeFEsXk78Xx39M7oTpq4aok5bG2SeVJxtynpUdUzDtYWfy2cyz9uOD6xDz1bmnyC6XH1FIoLgh1gAj5GB8rHmBtt%2BeASG8hmIuxGbYMjcqXGhO853jgtDaJrCtgwHk15QY2kS2%2BhVU2VuXNnmL5FKQwG409u4vjJXmyH8tDaUn%2FEizcM1w3rmcMgCU3%2FLRdWhFwRQ61l%2BGQzMUwBJV8rnHJ61yvGwxj%2B6QBDFELmCXZQfdgzKBFnvnllz0PrsbZY54rfOdsU8rC5JA68nxtYSbJgrysPr2HlVwZaczjiG17dU1ERBqYhD40ZJvDXPfCoQ%2F5Np1%2F5ooRwpfUUa3uQ8UyAiCvEUCG8ezoyFTQFj3bYwJZ%2BO%2FJyVEJhEICzjJ9Md0%2FcvzV6o5VVOqFKPZv5MPCzWXiOh6z6IYiX%2FkAgXlFLEqRDhExy%2BIm6dURAeTFaZE17IjR2GaZLLH%2B4mrAZIqnXSCDSH2a9ZlooSwm%2BeUaAbE13oTyL%2Fk%2F2xC0N6puK95wDE8ornNWEwY8RiTQh5hbK52TEY8o3qWZwA8KRR4AZ70iTfigCMIm6i74GOqUBsUoRSugc7%2BJj305WC2UTKXPTuD8on18boPv2L27L%2FDYrPla%2F1Gek30VVa8rHYuo64hFP48fDCDwAAOtMs0oR4Y%2BMyTeeIuMdooSEVs5DCTVnNdmOZCLPC2DQpt8R1V66jH%2FJ4qNZ5JB7RUdibxmwiPe5KuxGMK4MjqXKL7TKMafK2%2B2jaINc2%2FpkDuTsNE3V6QF8oiqBsh%2BDMoQcl5uvMbIeISwd&X-Amz-Signature=a1e316bc01756ee7d9cef21dcbc391faeca1929dad37b0b686697ed7b8ffde74&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2NAOS2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB%2BPYJuUKZWoe4a%2F%2BYJrgDCbSMDwESdqQv5%2BCxE%2FGYdoAiEA6qyezBh55MeearMEXQ0MqrCn%2FP%2FyAYN2S%2BRxrSzVxecqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmmt1LTRCOTxiyxLCrcA4cKlRT6PQT9ahXgLpEPSjyo9B33TFDD88%2BnxDWvyDqry%2Buv7XRCTtgGulAAFyHXiP1BFA8iNeFEsXk78Xx39M7oTpq4aok5bG2SeVJxtynpUdUzDtYWfy2cyz9uOD6xDz1bmnyC6XH1FIoLgh1gAj5GB8rHmBtt%2BeASG8hmIuxGbYMjcqXGhO853jgtDaJrCtgwHk15QY2kS2%2BhVU2VuXNnmL5FKQwG409u4vjJXmyH8tDaUn%2FEizcM1w3rmcMgCU3%2FLRdWhFwRQ61l%2BGQzMUwBJV8rnHJ61yvGwxj%2B6QBDFELmCXZQfdgzKBFnvnllz0PrsbZY54rfOdsU8rC5JA68nxtYSbJgrysPr2HlVwZaczjiG17dU1ERBqYhD40ZJvDXPfCoQ%2F5Np1%2F5ooRwpfUUa3uQ8UyAiCvEUCG8ezoyFTQFj3bYwJZ%2BO%2FJyVEJhEICzjJ9Md0%2FcvzV6o5VVOqFKPZv5MPCzWXiOh6z6IYiX%2FkAgXlFLEqRDhExy%2BIm6dURAeTFaZE17IjR2GaZLLH%2B4mrAZIqnXSCDSH2a9ZlooSwm%2BeUaAbE13oTyL%2Fk%2F2xC0N6puK95wDE8ornNWEwY8RiTQh5hbK52TEY8o3qWZwA8KRR4AZ70iTfigCMIm6i74GOqUBsUoRSugc7%2BJj305WC2UTKXPTuD8on18boPv2L27L%2FDYrPla%2F1Gek30VVa8rHYuo64hFP48fDCDwAAOtMs0oR4Y%2BMyTeeIuMdooSEVs5DCTVnNdmOZCLPC2DQpt8R1V66jH%2FJ4qNZ5JB7RUdibxmwiPe5KuxGMK4MjqXKL7TKMafK2%2B2jaINc2%2FpkDuTsNE3V6QF8oiqBsh%2BDMoQcl5uvMbIeISwd&X-Amz-Signature=71445eeea292329fdbb7a22dd0daf9807a6489d9432fdbc7bfedb1ac61fc66ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2NAOS2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB%2BPYJuUKZWoe4a%2F%2BYJrgDCbSMDwESdqQv5%2BCxE%2FGYdoAiEA6qyezBh55MeearMEXQ0MqrCn%2FP%2FyAYN2S%2BRxrSzVxecqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmmt1LTRCOTxiyxLCrcA4cKlRT6PQT9ahXgLpEPSjyo9B33TFDD88%2BnxDWvyDqry%2Buv7XRCTtgGulAAFyHXiP1BFA8iNeFEsXk78Xx39M7oTpq4aok5bG2SeVJxtynpUdUzDtYWfy2cyz9uOD6xDz1bmnyC6XH1FIoLgh1gAj5GB8rHmBtt%2BeASG8hmIuxGbYMjcqXGhO853jgtDaJrCtgwHk15QY2kS2%2BhVU2VuXNnmL5FKQwG409u4vjJXmyH8tDaUn%2FEizcM1w3rmcMgCU3%2FLRdWhFwRQ61l%2BGQzMUwBJV8rnHJ61yvGwxj%2B6QBDFELmCXZQfdgzKBFnvnllz0PrsbZY54rfOdsU8rC5JA68nxtYSbJgrysPr2HlVwZaczjiG17dU1ERBqYhD40ZJvDXPfCoQ%2F5Np1%2F5ooRwpfUUa3uQ8UyAiCvEUCG8ezoyFTQFj3bYwJZ%2BO%2FJyVEJhEICzjJ9Md0%2FcvzV6o5VVOqFKPZv5MPCzWXiOh6z6IYiX%2FkAgXlFLEqRDhExy%2BIm6dURAeTFaZE17IjR2GaZLLH%2B4mrAZIqnXSCDSH2a9ZlooSwm%2BeUaAbE13oTyL%2Fk%2F2xC0N6puK95wDE8ornNWEwY8RiTQh5hbK52TEY8o3qWZwA8KRR4AZ70iTfigCMIm6i74GOqUBsUoRSugc7%2BJj305WC2UTKXPTuD8on18boPv2L27L%2FDYrPla%2F1Gek30VVa8rHYuo64hFP48fDCDwAAOtMs0oR4Y%2BMyTeeIuMdooSEVs5DCTVnNdmOZCLPC2DQpt8R1V66jH%2FJ4qNZ5JB7RUdibxmwiPe5KuxGMK4MjqXKL7TKMafK2%2B2jaINc2%2FpkDuTsNE3V6QF8oiqBsh%2BDMoQcl5uvMbIeISwd&X-Amz-Signature=70cc45be6c1c114c92b124764cf4ecf23b6627453a08360b48e045a9a4293684&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2NAOS2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB%2BPYJuUKZWoe4a%2F%2BYJrgDCbSMDwESdqQv5%2BCxE%2FGYdoAiEA6qyezBh55MeearMEXQ0MqrCn%2FP%2FyAYN2S%2BRxrSzVxecqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmmt1LTRCOTxiyxLCrcA4cKlRT6PQT9ahXgLpEPSjyo9B33TFDD88%2BnxDWvyDqry%2Buv7XRCTtgGulAAFyHXiP1BFA8iNeFEsXk78Xx39M7oTpq4aok5bG2SeVJxtynpUdUzDtYWfy2cyz9uOD6xDz1bmnyC6XH1FIoLgh1gAj5GB8rHmBtt%2BeASG8hmIuxGbYMjcqXGhO853jgtDaJrCtgwHk15QY2kS2%2BhVU2VuXNnmL5FKQwG409u4vjJXmyH8tDaUn%2FEizcM1w3rmcMgCU3%2FLRdWhFwRQ61l%2BGQzMUwBJV8rnHJ61yvGwxj%2B6QBDFELmCXZQfdgzKBFnvnllz0PrsbZY54rfOdsU8rC5JA68nxtYSbJgrysPr2HlVwZaczjiG17dU1ERBqYhD40ZJvDXPfCoQ%2F5Np1%2F5ooRwpfUUa3uQ8UyAiCvEUCG8ezoyFTQFj3bYwJZ%2BO%2FJyVEJhEICzjJ9Md0%2FcvzV6o5VVOqFKPZv5MPCzWXiOh6z6IYiX%2FkAgXlFLEqRDhExy%2BIm6dURAeTFaZE17IjR2GaZLLH%2B4mrAZIqnXSCDSH2a9ZlooSwm%2BeUaAbE13oTyL%2Fk%2F2xC0N6puK95wDE8ornNWEwY8RiTQh5hbK52TEY8o3qWZwA8KRR4AZ70iTfigCMIm6i74GOqUBsUoRSugc7%2BJj305WC2UTKXPTuD8on18boPv2L27L%2FDYrPla%2F1Gek30VVa8rHYuo64hFP48fDCDwAAOtMs0oR4Y%2BMyTeeIuMdooSEVs5DCTVnNdmOZCLPC2DQpt8R1V66jH%2FJ4qNZ5JB7RUdibxmwiPe5KuxGMK4MjqXKL7TKMafK2%2B2jaINc2%2FpkDuTsNE3V6QF8oiqBsh%2BDMoQcl5uvMbIeISwd&X-Amz-Signature=94acd2e0ac704b7bbcd587b35238ebd50ca797b754c285aea9fa4c5813feb978&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2NAOS2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB%2BPYJuUKZWoe4a%2F%2BYJrgDCbSMDwESdqQv5%2BCxE%2FGYdoAiEA6qyezBh55MeearMEXQ0MqrCn%2FP%2FyAYN2S%2BRxrSzVxecqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmmt1LTRCOTxiyxLCrcA4cKlRT6PQT9ahXgLpEPSjyo9B33TFDD88%2BnxDWvyDqry%2Buv7XRCTtgGulAAFyHXiP1BFA8iNeFEsXk78Xx39M7oTpq4aok5bG2SeVJxtynpUdUzDtYWfy2cyz9uOD6xDz1bmnyC6XH1FIoLgh1gAj5GB8rHmBtt%2BeASG8hmIuxGbYMjcqXGhO853jgtDaJrCtgwHk15QY2kS2%2BhVU2VuXNnmL5FKQwG409u4vjJXmyH8tDaUn%2FEizcM1w3rmcMgCU3%2FLRdWhFwRQ61l%2BGQzMUwBJV8rnHJ61yvGwxj%2B6QBDFELmCXZQfdgzKBFnvnllz0PrsbZY54rfOdsU8rC5JA68nxtYSbJgrysPr2HlVwZaczjiG17dU1ERBqYhD40ZJvDXPfCoQ%2F5Np1%2F5ooRwpfUUa3uQ8UyAiCvEUCG8ezoyFTQFj3bYwJZ%2BO%2FJyVEJhEICzjJ9Md0%2FcvzV6o5VVOqFKPZv5MPCzWXiOh6z6IYiX%2FkAgXlFLEqRDhExy%2BIm6dURAeTFaZE17IjR2GaZLLH%2B4mrAZIqnXSCDSH2a9ZlooSwm%2BeUaAbE13oTyL%2Fk%2F2xC0N6puK95wDE8ornNWEwY8RiTQh5hbK52TEY8o3qWZwA8KRR4AZ70iTfigCMIm6i74GOqUBsUoRSugc7%2BJj305WC2UTKXPTuD8on18boPv2L27L%2FDYrPla%2F1Gek30VVa8rHYuo64hFP48fDCDwAAOtMs0oR4Y%2BMyTeeIuMdooSEVs5DCTVnNdmOZCLPC2DQpt8R1V66jH%2FJ4qNZ5JB7RUdibxmwiPe5KuxGMK4MjqXKL7TKMafK2%2B2jaINc2%2FpkDuTsNE3V6QF8oiqBsh%2BDMoQcl5uvMbIeISwd&X-Amz-Signature=42e1833ddd378b700e69a36918e62a4cdce9b954d95bad0ffd85d44be8fc2f02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2NAOS2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB%2BPYJuUKZWoe4a%2F%2BYJrgDCbSMDwESdqQv5%2BCxE%2FGYdoAiEA6qyezBh55MeearMEXQ0MqrCn%2FP%2FyAYN2S%2BRxrSzVxecqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmmt1LTRCOTxiyxLCrcA4cKlRT6PQT9ahXgLpEPSjyo9B33TFDD88%2BnxDWvyDqry%2Buv7XRCTtgGulAAFyHXiP1BFA8iNeFEsXk78Xx39M7oTpq4aok5bG2SeVJxtynpUdUzDtYWfy2cyz9uOD6xDz1bmnyC6XH1FIoLgh1gAj5GB8rHmBtt%2BeASG8hmIuxGbYMjcqXGhO853jgtDaJrCtgwHk15QY2kS2%2BhVU2VuXNnmL5FKQwG409u4vjJXmyH8tDaUn%2FEizcM1w3rmcMgCU3%2FLRdWhFwRQ61l%2BGQzMUwBJV8rnHJ61yvGwxj%2B6QBDFELmCXZQfdgzKBFnvnllz0PrsbZY54rfOdsU8rC5JA68nxtYSbJgrysPr2HlVwZaczjiG17dU1ERBqYhD40ZJvDXPfCoQ%2F5Np1%2F5ooRwpfUUa3uQ8UyAiCvEUCG8ezoyFTQFj3bYwJZ%2BO%2FJyVEJhEICzjJ9Md0%2FcvzV6o5VVOqFKPZv5MPCzWXiOh6z6IYiX%2FkAgXlFLEqRDhExy%2BIm6dURAeTFaZE17IjR2GaZLLH%2B4mrAZIqnXSCDSH2a9ZlooSwm%2BeUaAbE13oTyL%2Fk%2F2xC0N6puK95wDE8ornNWEwY8RiTQh5hbK52TEY8o3qWZwA8KRR4AZ70iTfigCMIm6i74GOqUBsUoRSugc7%2BJj305WC2UTKXPTuD8on18boPv2L27L%2FDYrPla%2F1Gek30VVa8rHYuo64hFP48fDCDwAAOtMs0oR4Y%2BMyTeeIuMdooSEVs5DCTVnNdmOZCLPC2DQpt8R1V66jH%2FJ4qNZ5JB7RUdibxmwiPe5KuxGMK4MjqXKL7TKMafK2%2B2jaINc2%2FpkDuTsNE3V6QF8oiqBsh%2BDMoQcl5uvMbIeISwd&X-Amz-Signature=ce9076aa2367d6ba117669cf50a7f2f83a354bc2fca3f8352964a4539ee5b8b8&X-Amz-SignedHeaders=host&x-id=GetObject)
