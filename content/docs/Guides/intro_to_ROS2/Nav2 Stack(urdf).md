---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEQDTP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxiX2Z0RuRRHmIUuuv8XnTOiBtBIYRu5%2B6Ct%2F5%2Bfd9HAiA7Ms23tVCidyLZzrhCEDW4JWAD6xUy2Ws3TsRPVLO7Pyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlAGvYfVZrhST0gXfKtwDsvA4yC4JKQHUo1XSVWK6VSGqWdpbO2UAyT%2B8K3cmaAZE94ZWkh4%2BD9%2BETd0E2BN8yToh0l2n52a2MYMZ612q1AdrayWhQffYrr3pxiDM7qVPUvrcmiP5sGFzbS18bhMfWqgPl%2BHLY%2BHTkuJSJybDNHLzgshrknJs4OOnpj7CBl9pDyFV04XcmGlzXAq890ceVS3ZS8b4nzRGPRVUSI6bjUljiHsyiEmvw67bJBTl4Wes4twQ%2BpTuxQvsVvJrTAcD72ZkP%2FMXTcUXMoQdoVqAGSYHCwyIt3H%2FKcDyeXk1W3OYgezzivGwSSVybPUuxCXGcVtedlx0nN73WxtNsk4uaZOzFv7slLespeNUF5N7SNPqcWM3DToLGpeAD0Vqx8w2Gm0%2BErUJv7WQL%2FIVuful0F5o80dz8PTCHzAGu%2BVnLocyEg0WHIjkDZKb5yI6yLHY6cpBGuRQOR1YXq4ncQzjfMtPYey2xay%2FtwA%2FIkKN30wMPNbDMiPuxS3PeSZXiyOSkaPELaocsCcVmuzYmCx24xgvV%2Bc9tAQWYIkGjwFyv82ehxuOiik%2FW0wpjedkyMC2yM5OqEXwXJaM8ChYzFQWqOYb7cPxCoSSErTwxHfyIPbKNtaU%2BkVZLvSK1uYw5LWCvQY6pgFEuxWHQbBimqYfiTrn3z4qcrLCq2J0MhGvNYp3fiYiN3cSawxTlAsFzloW6tO%2BWvQs4aQprq8nW6rrvEiKBa%2BgRveJO7evgAgeVYSSbaZYU19DJxemJKEcklhJjiq6Wjr1tu8kdPFCYT4Xv9cTEuG7VTaS5jQ%2BazHLmhYnQvHQgolAhfGUAveLrUOsYp3ubKhwozSXHDxKkCKD5BllZ1zNaO7dFfST&X-Amz-Signature=24060caab1b0a4f5dfa852d1154f85cb84095d4214892d0f3eeddb768ef8c0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEQDTP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxiX2Z0RuRRHmIUuuv8XnTOiBtBIYRu5%2B6Ct%2F5%2Bfd9HAiA7Ms23tVCidyLZzrhCEDW4JWAD6xUy2Ws3TsRPVLO7Pyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlAGvYfVZrhST0gXfKtwDsvA4yC4JKQHUo1XSVWK6VSGqWdpbO2UAyT%2B8K3cmaAZE94ZWkh4%2BD9%2BETd0E2BN8yToh0l2n52a2MYMZ612q1AdrayWhQffYrr3pxiDM7qVPUvrcmiP5sGFzbS18bhMfWqgPl%2BHLY%2BHTkuJSJybDNHLzgshrknJs4OOnpj7CBl9pDyFV04XcmGlzXAq890ceVS3ZS8b4nzRGPRVUSI6bjUljiHsyiEmvw67bJBTl4Wes4twQ%2BpTuxQvsVvJrTAcD72ZkP%2FMXTcUXMoQdoVqAGSYHCwyIt3H%2FKcDyeXk1W3OYgezzivGwSSVybPUuxCXGcVtedlx0nN73WxtNsk4uaZOzFv7slLespeNUF5N7SNPqcWM3DToLGpeAD0Vqx8w2Gm0%2BErUJv7WQL%2FIVuful0F5o80dz8PTCHzAGu%2BVnLocyEg0WHIjkDZKb5yI6yLHY6cpBGuRQOR1YXq4ncQzjfMtPYey2xay%2FtwA%2FIkKN30wMPNbDMiPuxS3PeSZXiyOSkaPELaocsCcVmuzYmCx24xgvV%2Bc9tAQWYIkGjwFyv82ehxuOiik%2FW0wpjedkyMC2yM5OqEXwXJaM8ChYzFQWqOYb7cPxCoSSErTwxHfyIPbKNtaU%2BkVZLvSK1uYw5LWCvQY6pgFEuxWHQbBimqYfiTrn3z4qcrLCq2J0MhGvNYp3fiYiN3cSawxTlAsFzloW6tO%2BWvQs4aQprq8nW6rrvEiKBa%2BgRveJO7evgAgeVYSSbaZYU19DJxemJKEcklhJjiq6Wjr1tu8kdPFCYT4Xv9cTEuG7VTaS5jQ%2BazHLmhYnQvHQgolAhfGUAveLrUOsYp3ubKhwozSXHDxKkCKD5BllZ1zNaO7dFfST&X-Amz-Signature=f2d021be99da130c60c67c099a4d6b2096fc199178d26e9e51dbf2ff71f9fcea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEQDTP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxiX2Z0RuRRHmIUuuv8XnTOiBtBIYRu5%2B6Ct%2F5%2Bfd9HAiA7Ms23tVCidyLZzrhCEDW4JWAD6xUy2Ws3TsRPVLO7Pyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlAGvYfVZrhST0gXfKtwDsvA4yC4JKQHUo1XSVWK6VSGqWdpbO2UAyT%2B8K3cmaAZE94ZWkh4%2BD9%2BETd0E2BN8yToh0l2n52a2MYMZ612q1AdrayWhQffYrr3pxiDM7qVPUvrcmiP5sGFzbS18bhMfWqgPl%2BHLY%2BHTkuJSJybDNHLzgshrknJs4OOnpj7CBl9pDyFV04XcmGlzXAq890ceVS3ZS8b4nzRGPRVUSI6bjUljiHsyiEmvw67bJBTl4Wes4twQ%2BpTuxQvsVvJrTAcD72ZkP%2FMXTcUXMoQdoVqAGSYHCwyIt3H%2FKcDyeXk1W3OYgezzivGwSSVybPUuxCXGcVtedlx0nN73WxtNsk4uaZOzFv7slLespeNUF5N7SNPqcWM3DToLGpeAD0Vqx8w2Gm0%2BErUJv7WQL%2FIVuful0F5o80dz8PTCHzAGu%2BVnLocyEg0WHIjkDZKb5yI6yLHY6cpBGuRQOR1YXq4ncQzjfMtPYey2xay%2FtwA%2FIkKN30wMPNbDMiPuxS3PeSZXiyOSkaPELaocsCcVmuzYmCx24xgvV%2Bc9tAQWYIkGjwFyv82ehxuOiik%2FW0wpjedkyMC2yM5OqEXwXJaM8ChYzFQWqOYb7cPxCoSSErTwxHfyIPbKNtaU%2BkVZLvSK1uYw5LWCvQY6pgFEuxWHQbBimqYfiTrn3z4qcrLCq2J0MhGvNYp3fiYiN3cSawxTlAsFzloW6tO%2BWvQs4aQprq8nW6rrvEiKBa%2BgRveJO7evgAgeVYSSbaZYU19DJxemJKEcklhJjiq6Wjr1tu8kdPFCYT4Xv9cTEuG7VTaS5jQ%2BazHLmhYnQvHQgolAhfGUAveLrUOsYp3ubKhwozSXHDxKkCKD5BllZ1zNaO7dFfST&X-Amz-Signature=1be8c67ff637a3414547509cc7c3e2353c1a0890c0458f5562145a0aa7b5bfc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEQDTP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxiX2Z0RuRRHmIUuuv8XnTOiBtBIYRu5%2B6Ct%2F5%2Bfd9HAiA7Ms23tVCidyLZzrhCEDW4JWAD6xUy2Ws3TsRPVLO7Pyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlAGvYfVZrhST0gXfKtwDsvA4yC4JKQHUo1XSVWK6VSGqWdpbO2UAyT%2B8K3cmaAZE94ZWkh4%2BD9%2BETd0E2BN8yToh0l2n52a2MYMZ612q1AdrayWhQffYrr3pxiDM7qVPUvrcmiP5sGFzbS18bhMfWqgPl%2BHLY%2BHTkuJSJybDNHLzgshrknJs4OOnpj7CBl9pDyFV04XcmGlzXAq890ceVS3ZS8b4nzRGPRVUSI6bjUljiHsyiEmvw67bJBTl4Wes4twQ%2BpTuxQvsVvJrTAcD72ZkP%2FMXTcUXMoQdoVqAGSYHCwyIt3H%2FKcDyeXk1W3OYgezzivGwSSVybPUuxCXGcVtedlx0nN73WxtNsk4uaZOzFv7slLespeNUF5N7SNPqcWM3DToLGpeAD0Vqx8w2Gm0%2BErUJv7WQL%2FIVuful0F5o80dz8PTCHzAGu%2BVnLocyEg0WHIjkDZKb5yI6yLHY6cpBGuRQOR1YXq4ncQzjfMtPYey2xay%2FtwA%2FIkKN30wMPNbDMiPuxS3PeSZXiyOSkaPELaocsCcVmuzYmCx24xgvV%2Bc9tAQWYIkGjwFyv82ehxuOiik%2FW0wpjedkyMC2yM5OqEXwXJaM8ChYzFQWqOYb7cPxCoSSErTwxHfyIPbKNtaU%2BkVZLvSK1uYw5LWCvQY6pgFEuxWHQbBimqYfiTrn3z4qcrLCq2J0MhGvNYp3fiYiN3cSawxTlAsFzloW6tO%2BWvQs4aQprq8nW6rrvEiKBa%2BgRveJO7evgAgeVYSSbaZYU19DJxemJKEcklhJjiq6Wjr1tu8kdPFCYT4Xv9cTEuG7VTaS5jQ%2BazHLmhYnQvHQgolAhfGUAveLrUOsYp3ubKhwozSXHDxKkCKD5BllZ1zNaO7dFfST&X-Amz-Signature=77fc9e9b1e89f65641d153386b4b42e11dcb2961ca9a53af63c26d0027ed4d84&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEQDTP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxiX2Z0RuRRHmIUuuv8XnTOiBtBIYRu5%2B6Ct%2F5%2Bfd9HAiA7Ms23tVCidyLZzrhCEDW4JWAD6xUy2Ws3TsRPVLO7Pyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlAGvYfVZrhST0gXfKtwDsvA4yC4JKQHUo1XSVWK6VSGqWdpbO2UAyT%2B8K3cmaAZE94ZWkh4%2BD9%2BETd0E2BN8yToh0l2n52a2MYMZ612q1AdrayWhQffYrr3pxiDM7qVPUvrcmiP5sGFzbS18bhMfWqgPl%2BHLY%2BHTkuJSJybDNHLzgshrknJs4OOnpj7CBl9pDyFV04XcmGlzXAq890ceVS3ZS8b4nzRGPRVUSI6bjUljiHsyiEmvw67bJBTl4Wes4twQ%2BpTuxQvsVvJrTAcD72ZkP%2FMXTcUXMoQdoVqAGSYHCwyIt3H%2FKcDyeXk1W3OYgezzivGwSSVybPUuxCXGcVtedlx0nN73WxtNsk4uaZOzFv7slLespeNUF5N7SNPqcWM3DToLGpeAD0Vqx8w2Gm0%2BErUJv7WQL%2FIVuful0F5o80dz8PTCHzAGu%2BVnLocyEg0WHIjkDZKb5yI6yLHY6cpBGuRQOR1YXq4ncQzjfMtPYey2xay%2FtwA%2FIkKN30wMPNbDMiPuxS3PeSZXiyOSkaPELaocsCcVmuzYmCx24xgvV%2Bc9tAQWYIkGjwFyv82ehxuOiik%2FW0wpjedkyMC2yM5OqEXwXJaM8ChYzFQWqOYb7cPxCoSSErTwxHfyIPbKNtaU%2BkVZLvSK1uYw5LWCvQY6pgFEuxWHQbBimqYfiTrn3z4qcrLCq2J0MhGvNYp3fiYiN3cSawxTlAsFzloW6tO%2BWvQs4aQprq8nW6rrvEiKBa%2BgRveJO7evgAgeVYSSbaZYU19DJxemJKEcklhJjiq6Wjr1tu8kdPFCYT4Xv9cTEuG7VTaS5jQ%2BazHLmhYnQvHQgolAhfGUAveLrUOsYp3ubKhwozSXHDxKkCKD5BllZ1zNaO7dFfST&X-Amz-Signature=9c3ac132539643647f0f08de3f976bce747d691e09573b7fd96b51fc6068d723&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNEQDTP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxiX2Z0RuRRHmIUuuv8XnTOiBtBIYRu5%2B6Ct%2F5%2Bfd9HAiA7Ms23tVCidyLZzrhCEDW4JWAD6xUy2Ws3TsRPVLO7Pyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMlAGvYfVZrhST0gXfKtwDsvA4yC4JKQHUo1XSVWK6VSGqWdpbO2UAyT%2B8K3cmaAZE94ZWkh4%2BD9%2BETd0E2BN8yToh0l2n52a2MYMZ612q1AdrayWhQffYrr3pxiDM7qVPUvrcmiP5sGFzbS18bhMfWqgPl%2BHLY%2BHTkuJSJybDNHLzgshrknJs4OOnpj7CBl9pDyFV04XcmGlzXAq890ceVS3ZS8b4nzRGPRVUSI6bjUljiHsyiEmvw67bJBTl4Wes4twQ%2BpTuxQvsVvJrTAcD72ZkP%2FMXTcUXMoQdoVqAGSYHCwyIt3H%2FKcDyeXk1W3OYgezzivGwSSVybPUuxCXGcVtedlx0nN73WxtNsk4uaZOzFv7slLespeNUF5N7SNPqcWM3DToLGpeAD0Vqx8w2Gm0%2BErUJv7WQL%2FIVuful0F5o80dz8PTCHzAGu%2BVnLocyEg0WHIjkDZKb5yI6yLHY6cpBGuRQOR1YXq4ncQzjfMtPYey2xay%2FtwA%2FIkKN30wMPNbDMiPuxS3PeSZXiyOSkaPELaocsCcVmuzYmCx24xgvV%2Bc9tAQWYIkGjwFyv82ehxuOiik%2FW0wpjedkyMC2yM5OqEXwXJaM8ChYzFQWqOYb7cPxCoSSErTwxHfyIPbKNtaU%2BkVZLvSK1uYw5LWCvQY6pgFEuxWHQbBimqYfiTrn3z4qcrLCq2J0MhGvNYp3fiYiN3cSawxTlAsFzloW6tO%2BWvQs4aQprq8nW6rrvEiKBa%2BgRveJO7evgAgeVYSSbaZYU19DJxemJKEcklhJjiq6Wjr1tu8kdPFCYT4Xv9cTEuG7VTaS5jQ%2BazHLmhYnQvHQgolAhfGUAveLrUOsYp3ubKhwozSXHDxKkCKD5BllZ1zNaO7dFfST&X-Amz-Signature=b0451b992dd62d8608e6491710c94db0e78eb9aee1d24c7b19f9d4ea1bf85047&X-Amz-SignedHeaders=host&x-id=GetObject)
