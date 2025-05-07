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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU5CBCDD%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPlhqTOhZWRyY6CGL8z8euzEk5%2FapmAkNeRJEkrS%2BijAIgeJoCC6H5NYTU%2FEMFJ%2F5idCUCUu32JDyla4gdksrcyd8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO%2FJ8d%2BhUOsXmNxRFCrcA0VrJCj304sjlpqRTIR0Lc6v3gIb5oxn3YFBWKP4Xh%2Byy%2BvVo0PHJlk8%2FI7hqgE8zUa3CH96OXGagTBYOtvnUJuUzE362RQErNjHUO4GsI4CILEAeTy1x3amb%2BSwBFgm71BaDv24KmLtpW3GW1AFtfEyj4He%2BI4W0V3%2BSts9gl9SeB2EdiCaM%2BhlptSUx4irn4c4gKIfViDVVrMSG2jxGPshfaXZale%2FnBkepPvMevtm%2BWyI0v9z2YelOUhIlDeB%2BpapPILPuWtJyB%2F0FqqvqeTfO9vwrzLc%2F52OwS6eomqfEAAC%2FMLFKJeybwyK4p8%2B%2FvI0vBGmbvdSZtxIuzhWVmuTi9zVA1fiCuueHYJ7kocdy3jsB8eamwgNTY96ao5S9QH%2Fo%2FbnNBJudF%2FYQq0CYA9iP4g38iElRrqmFrwqL5Kg5gHhdYrCSogN9VSnmys6i04brYjzFncTohI2SbN4GXouCcrfqV%2Fw31TpND5%2Bm6RE9vY%2B5wVamchu35Ze5%2B80oChnxjjL92J49iEfELdIrc%2FjHc3NclVuhTm5SQKeAAehn55p7VIJCY2i56lTfJxWKg97cHxVIG7Nn%2BgCACLphbBwDX6LDxw3ogIhrSspDAx16PJDlaWPCkmB2ZXNMLHp7sAGOqUBAJHZgxJPsWDaF7Id1VoirmN5FCP6Nd0lWdLKE6CP%2FFaox6Xha15d3rbfdbUB%2BkLe%2FkWoh3IsiY6kVp%2B9uRcz1vyMiAxIbZgv0BXq2twry3rBGsErtsqMEj9%2FPN1pXoYFZ0DUOPdug0aCOk5nf3POitlNgW27WhPnj1STb6AEUwmtTreUDHRqZxL803MQvqaMotqBQbuHQ8hBdtbd6tvvTgDWifZW&X-Amz-Signature=1aa33974ecbe922f3904851ca63447eec12aeb7562a1406885b5d46df6acbe18&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU5CBCDD%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPlhqTOhZWRyY6CGL8z8euzEk5%2FapmAkNeRJEkrS%2BijAIgeJoCC6H5NYTU%2FEMFJ%2F5idCUCUu32JDyla4gdksrcyd8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO%2FJ8d%2BhUOsXmNxRFCrcA0VrJCj304sjlpqRTIR0Lc6v3gIb5oxn3YFBWKP4Xh%2Byy%2BvVo0PHJlk8%2FI7hqgE8zUa3CH96OXGagTBYOtvnUJuUzE362RQErNjHUO4GsI4CILEAeTy1x3amb%2BSwBFgm71BaDv24KmLtpW3GW1AFtfEyj4He%2BI4W0V3%2BSts9gl9SeB2EdiCaM%2BhlptSUx4irn4c4gKIfViDVVrMSG2jxGPshfaXZale%2FnBkepPvMevtm%2BWyI0v9z2YelOUhIlDeB%2BpapPILPuWtJyB%2F0FqqvqeTfO9vwrzLc%2F52OwS6eomqfEAAC%2FMLFKJeybwyK4p8%2B%2FvI0vBGmbvdSZtxIuzhWVmuTi9zVA1fiCuueHYJ7kocdy3jsB8eamwgNTY96ao5S9QH%2Fo%2FbnNBJudF%2FYQq0CYA9iP4g38iElRrqmFrwqL5Kg5gHhdYrCSogN9VSnmys6i04brYjzFncTohI2SbN4GXouCcrfqV%2Fw31TpND5%2Bm6RE9vY%2B5wVamchu35Ze5%2B80oChnxjjL92J49iEfELdIrc%2FjHc3NclVuhTm5SQKeAAehn55p7VIJCY2i56lTfJxWKg97cHxVIG7Nn%2BgCACLphbBwDX6LDxw3ogIhrSspDAx16PJDlaWPCkmB2ZXNMLHp7sAGOqUBAJHZgxJPsWDaF7Id1VoirmN5FCP6Nd0lWdLKE6CP%2FFaox6Xha15d3rbfdbUB%2BkLe%2FkWoh3IsiY6kVp%2B9uRcz1vyMiAxIbZgv0BXq2twry3rBGsErtsqMEj9%2FPN1pXoYFZ0DUOPdug0aCOk5nf3POitlNgW27WhPnj1STb6AEUwmtTreUDHRqZxL803MQvqaMotqBQbuHQ8hBdtbd6tvvTgDWifZW&X-Amz-Signature=631912e15465def5bba6437ea41b86548681dce67a1e65fa7d3490499828d378&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU5CBCDD%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPlhqTOhZWRyY6CGL8z8euzEk5%2FapmAkNeRJEkrS%2BijAIgeJoCC6H5NYTU%2FEMFJ%2F5idCUCUu32JDyla4gdksrcyd8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO%2FJ8d%2BhUOsXmNxRFCrcA0VrJCj304sjlpqRTIR0Lc6v3gIb5oxn3YFBWKP4Xh%2Byy%2BvVo0PHJlk8%2FI7hqgE8zUa3CH96OXGagTBYOtvnUJuUzE362RQErNjHUO4GsI4CILEAeTy1x3amb%2BSwBFgm71BaDv24KmLtpW3GW1AFtfEyj4He%2BI4W0V3%2BSts9gl9SeB2EdiCaM%2BhlptSUx4irn4c4gKIfViDVVrMSG2jxGPshfaXZale%2FnBkepPvMevtm%2BWyI0v9z2YelOUhIlDeB%2BpapPILPuWtJyB%2F0FqqvqeTfO9vwrzLc%2F52OwS6eomqfEAAC%2FMLFKJeybwyK4p8%2B%2FvI0vBGmbvdSZtxIuzhWVmuTi9zVA1fiCuueHYJ7kocdy3jsB8eamwgNTY96ao5S9QH%2Fo%2FbnNBJudF%2FYQq0CYA9iP4g38iElRrqmFrwqL5Kg5gHhdYrCSogN9VSnmys6i04brYjzFncTohI2SbN4GXouCcrfqV%2Fw31TpND5%2Bm6RE9vY%2B5wVamchu35Ze5%2B80oChnxjjL92J49iEfELdIrc%2FjHc3NclVuhTm5SQKeAAehn55p7VIJCY2i56lTfJxWKg97cHxVIG7Nn%2BgCACLphbBwDX6LDxw3ogIhrSspDAx16PJDlaWPCkmB2ZXNMLHp7sAGOqUBAJHZgxJPsWDaF7Id1VoirmN5FCP6Nd0lWdLKE6CP%2FFaox6Xha15d3rbfdbUB%2BkLe%2FkWoh3IsiY6kVp%2B9uRcz1vyMiAxIbZgv0BXq2twry3rBGsErtsqMEj9%2FPN1pXoYFZ0DUOPdug0aCOk5nf3POitlNgW27WhPnj1STb6AEUwmtTreUDHRqZxL803MQvqaMotqBQbuHQ8hBdtbd6tvvTgDWifZW&X-Amz-Signature=d3695ea2670aad06a2669e0d3cd1412f28bfa041771f8ef82208f5f9f2122bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU5CBCDD%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPlhqTOhZWRyY6CGL8z8euzEk5%2FapmAkNeRJEkrS%2BijAIgeJoCC6H5NYTU%2FEMFJ%2F5idCUCUu32JDyla4gdksrcyd8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO%2FJ8d%2BhUOsXmNxRFCrcA0VrJCj304sjlpqRTIR0Lc6v3gIb5oxn3YFBWKP4Xh%2Byy%2BvVo0PHJlk8%2FI7hqgE8zUa3CH96OXGagTBYOtvnUJuUzE362RQErNjHUO4GsI4CILEAeTy1x3amb%2BSwBFgm71BaDv24KmLtpW3GW1AFtfEyj4He%2BI4W0V3%2BSts9gl9SeB2EdiCaM%2BhlptSUx4irn4c4gKIfViDVVrMSG2jxGPshfaXZale%2FnBkepPvMevtm%2BWyI0v9z2YelOUhIlDeB%2BpapPILPuWtJyB%2F0FqqvqeTfO9vwrzLc%2F52OwS6eomqfEAAC%2FMLFKJeybwyK4p8%2B%2FvI0vBGmbvdSZtxIuzhWVmuTi9zVA1fiCuueHYJ7kocdy3jsB8eamwgNTY96ao5S9QH%2Fo%2FbnNBJudF%2FYQq0CYA9iP4g38iElRrqmFrwqL5Kg5gHhdYrCSogN9VSnmys6i04brYjzFncTohI2SbN4GXouCcrfqV%2Fw31TpND5%2Bm6RE9vY%2B5wVamchu35Ze5%2B80oChnxjjL92J49iEfELdIrc%2FjHc3NclVuhTm5SQKeAAehn55p7VIJCY2i56lTfJxWKg97cHxVIG7Nn%2BgCACLphbBwDX6LDxw3ogIhrSspDAx16PJDlaWPCkmB2ZXNMLHp7sAGOqUBAJHZgxJPsWDaF7Id1VoirmN5FCP6Nd0lWdLKE6CP%2FFaox6Xha15d3rbfdbUB%2BkLe%2FkWoh3IsiY6kVp%2B9uRcz1vyMiAxIbZgv0BXq2twry3rBGsErtsqMEj9%2FPN1pXoYFZ0DUOPdug0aCOk5nf3POitlNgW27WhPnj1STb6AEUwmtTreUDHRqZxL803MQvqaMotqBQbuHQ8hBdtbd6tvvTgDWifZW&X-Amz-Signature=71cf6749060632eb5b3e0564a3a945697f1e5c62da9d056bee5bcc4806af2b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU5CBCDD%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPlhqTOhZWRyY6CGL8z8euzEk5%2FapmAkNeRJEkrS%2BijAIgeJoCC6H5NYTU%2FEMFJ%2F5idCUCUu32JDyla4gdksrcyd8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO%2FJ8d%2BhUOsXmNxRFCrcA0VrJCj304sjlpqRTIR0Lc6v3gIb5oxn3YFBWKP4Xh%2Byy%2BvVo0PHJlk8%2FI7hqgE8zUa3CH96OXGagTBYOtvnUJuUzE362RQErNjHUO4GsI4CILEAeTy1x3amb%2BSwBFgm71BaDv24KmLtpW3GW1AFtfEyj4He%2BI4W0V3%2BSts9gl9SeB2EdiCaM%2BhlptSUx4irn4c4gKIfViDVVrMSG2jxGPshfaXZale%2FnBkepPvMevtm%2BWyI0v9z2YelOUhIlDeB%2BpapPILPuWtJyB%2F0FqqvqeTfO9vwrzLc%2F52OwS6eomqfEAAC%2FMLFKJeybwyK4p8%2B%2FvI0vBGmbvdSZtxIuzhWVmuTi9zVA1fiCuueHYJ7kocdy3jsB8eamwgNTY96ao5S9QH%2Fo%2FbnNBJudF%2FYQq0CYA9iP4g38iElRrqmFrwqL5Kg5gHhdYrCSogN9VSnmys6i04brYjzFncTohI2SbN4GXouCcrfqV%2Fw31TpND5%2Bm6RE9vY%2B5wVamchu35Ze5%2B80oChnxjjL92J49iEfELdIrc%2FjHc3NclVuhTm5SQKeAAehn55p7VIJCY2i56lTfJxWKg97cHxVIG7Nn%2BgCACLphbBwDX6LDxw3ogIhrSspDAx16PJDlaWPCkmB2ZXNMLHp7sAGOqUBAJHZgxJPsWDaF7Id1VoirmN5FCP6Nd0lWdLKE6CP%2FFaox6Xha15d3rbfdbUB%2BkLe%2FkWoh3IsiY6kVp%2B9uRcz1vyMiAxIbZgv0BXq2twry3rBGsErtsqMEj9%2FPN1pXoYFZ0DUOPdug0aCOk5nf3POitlNgW27WhPnj1STb6AEUwmtTreUDHRqZxL803MQvqaMotqBQbuHQ8hBdtbd6tvvTgDWifZW&X-Amz-Signature=b7f4e3ec9a4502d944c6c9dc91fae97c95c64fafa0e3e400949badde840d2dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU5CBCDD%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPlhqTOhZWRyY6CGL8z8euzEk5%2FapmAkNeRJEkrS%2BijAIgeJoCC6H5NYTU%2FEMFJ%2F5idCUCUu32JDyla4gdksrcyd8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO%2FJ8d%2BhUOsXmNxRFCrcA0VrJCj304sjlpqRTIR0Lc6v3gIb5oxn3YFBWKP4Xh%2Byy%2BvVo0PHJlk8%2FI7hqgE8zUa3CH96OXGagTBYOtvnUJuUzE362RQErNjHUO4GsI4CILEAeTy1x3amb%2BSwBFgm71BaDv24KmLtpW3GW1AFtfEyj4He%2BI4W0V3%2BSts9gl9SeB2EdiCaM%2BhlptSUx4irn4c4gKIfViDVVrMSG2jxGPshfaXZale%2FnBkepPvMevtm%2BWyI0v9z2YelOUhIlDeB%2BpapPILPuWtJyB%2F0FqqvqeTfO9vwrzLc%2F52OwS6eomqfEAAC%2FMLFKJeybwyK4p8%2B%2FvI0vBGmbvdSZtxIuzhWVmuTi9zVA1fiCuueHYJ7kocdy3jsB8eamwgNTY96ao5S9QH%2Fo%2FbnNBJudF%2FYQq0CYA9iP4g38iElRrqmFrwqL5Kg5gHhdYrCSogN9VSnmys6i04brYjzFncTohI2SbN4GXouCcrfqV%2Fw31TpND5%2Bm6RE9vY%2B5wVamchu35Ze5%2B80oChnxjjL92J49iEfELdIrc%2FjHc3NclVuhTm5SQKeAAehn55p7VIJCY2i56lTfJxWKg97cHxVIG7Nn%2BgCACLphbBwDX6LDxw3ogIhrSspDAx16PJDlaWPCkmB2ZXNMLHp7sAGOqUBAJHZgxJPsWDaF7Id1VoirmN5FCP6Nd0lWdLKE6CP%2FFaox6Xha15d3rbfdbUB%2BkLe%2FkWoh3IsiY6kVp%2B9uRcz1vyMiAxIbZgv0BXq2twry3rBGsErtsqMEj9%2FPN1pXoYFZ0DUOPdug0aCOk5nf3POitlNgW27WhPnj1STb6AEUwmtTreUDHRqZxL803MQvqaMotqBQbuHQ8hBdtbd6tvvTgDWifZW&X-Amz-Signature=590cdf72098cfa2265f34f76f4497c5533fe2b1bf2cda37799d3c4d9d20ed463&X-Amz-SignedHeaders=host&x-id=GetObject)
