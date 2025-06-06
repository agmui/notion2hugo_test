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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXLV7YI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsOCeeZz8AHxXqmCQ3kpo79MbCO0GgkLLcJDvpnaUXYAiBrBvWb9Z4BWnTLBhxhuuDl8hV50%2FVSKTGVhEMXt6MXLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMpGCLwGukHiC8WUaHKtwDRmq9fmCedmQof2VbRJ0SjD567zkz42u8b26cHLGc1we9R84JgmBq%2FtL5qrrH0Fms7nxibY93Q%2BhptCjlmh2KmyoRxWiIL2SucoJ9FU7YsOYA2M3KJDl%2FTVEhlmSaZTJiYe%2BMViW82Waf73iGiexv%2FHIaRLATSXRLkCc2v2s%2BXk%2BAzRjVa95vffonPCwC2pvkQQG6TL%2FPGeQDXULL4FC021t7uprPi8EwbOLNP1m86r1%2BepJ%2BmHN0rmcb7k5GzoM4VvHzkYxtV8luANgHLj1r%2B%2FU4EXjnRaF%2BaED39ryo67pNHdEcWTnLX9oBw9waGuyvG1PXwmUUXX0NUaaoJBQA87lgj9aG3J8brwcAsb6U%2F%2FXEPMmA%2BA%2BzeUgMP%2BG2mxC6v72a4y22tjldWcRJsYfQvxucJpSs%2FTkXKaubn9YUe2yMPLYbt8IrxddwdxQZxPGjB7JbtFaQ%2F8RSgh8%2F3pfSJ83cBzVMEdZ2kveWj%2FECTA%2B6OUA9aZPeYi%2BU54j2V1QESj0qd9cCl6tc3lZJFz5gL1Ni5swCg2UcQwuOPtTWfMlLfsI2ZzVPKfxNhqYmZTMG30PLBwCAZGr4lu8LPUrb5LXPJiuzzadLK1uqLtgKZ7L%2BtUXrbeze0lX%2BWHswx5mLwgY6pgF8%2FWS%2BK1H30kyYq5csZXxHBwJTGRNFSta9bJCd8RJkahzaenl%2B2tgLV734GASILA7l6uxi1aUtcVB%2BWwZLwxsZyiFdKXo7VNJ1qxF9560SNjBX%2BsAUMtCDIjjiDEYsoB5SB5yvN2NvEdkisjUJyu8vCfiool7QrVcEzuq8agEpbQKX5lUwO1NN9IG7rztP4eaREBCKBNtWkWnje1owSF1oHCefAkyu&X-Amz-Signature=5f75addcd9ebfbec711a23e7827592a1fd8eb7bb4c4083b56907d44a88f7703f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXLV7YI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsOCeeZz8AHxXqmCQ3kpo79MbCO0GgkLLcJDvpnaUXYAiBrBvWb9Z4BWnTLBhxhuuDl8hV50%2FVSKTGVhEMXt6MXLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMpGCLwGukHiC8WUaHKtwDRmq9fmCedmQof2VbRJ0SjD567zkz42u8b26cHLGc1we9R84JgmBq%2FtL5qrrH0Fms7nxibY93Q%2BhptCjlmh2KmyoRxWiIL2SucoJ9FU7YsOYA2M3KJDl%2FTVEhlmSaZTJiYe%2BMViW82Waf73iGiexv%2FHIaRLATSXRLkCc2v2s%2BXk%2BAzRjVa95vffonPCwC2pvkQQG6TL%2FPGeQDXULL4FC021t7uprPi8EwbOLNP1m86r1%2BepJ%2BmHN0rmcb7k5GzoM4VvHzkYxtV8luANgHLj1r%2B%2FU4EXjnRaF%2BaED39ryo67pNHdEcWTnLX9oBw9waGuyvG1PXwmUUXX0NUaaoJBQA87lgj9aG3J8brwcAsb6U%2F%2FXEPMmA%2BA%2BzeUgMP%2BG2mxC6v72a4y22tjldWcRJsYfQvxucJpSs%2FTkXKaubn9YUe2yMPLYbt8IrxddwdxQZxPGjB7JbtFaQ%2F8RSgh8%2F3pfSJ83cBzVMEdZ2kveWj%2FECTA%2B6OUA9aZPeYi%2BU54j2V1QESj0qd9cCl6tc3lZJFz5gL1Ni5swCg2UcQwuOPtTWfMlLfsI2ZzVPKfxNhqYmZTMG30PLBwCAZGr4lu8LPUrb5LXPJiuzzadLK1uqLtgKZ7L%2BtUXrbeze0lX%2BWHswx5mLwgY6pgF8%2FWS%2BK1H30kyYq5csZXxHBwJTGRNFSta9bJCd8RJkahzaenl%2B2tgLV734GASILA7l6uxi1aUtcVB%2BWwZLwxsZyiFdKXo7VNJ1qxF9560SNjBX%2BsAUMtCDIjjiDEYsoB5SB5yvN2NvEdkisjUJyu8vCfiool7QrVcEzuq8agEpbQKX5lUwO1NN9IG7rztP4eaREBCKBNtWkWnje1owSF1oHCefAkyu&X-Amz-Signature=314fe42e2682a33956a1be45137e539750929219cee3c500e07d67fe06232812&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXLV7YI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsOCeeZz8AHxXqmCQ3kpo79MbCO0GgkLLcJDvpnaUXYAiBrBvWb9Z4BWnTLBhxhuuDl8hV50%2FVSKTGVhEMXt6MXLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMpGCLwGukHiC8WUaHKtwDRmq9fmCedmQof2VbRJ0SjD567zkz42u8b26cHLGc1we9R84JgmBq%2FtL5qrrH0Fms7nxibY93Q%2BhptCjlmh2KmyoRxWiIL2SucoJ9FU7YsOYA2M3KJDl%2FTVEhlmSaZTJiYe%2BMViW82Waf73iGiexv%2FHIaRLATSXRLkCc2v2s%2BXk%2BAzRjVa95vffonPCwC2pvkQQG6TL%2FPGeQDXULL4FC021t7uprPi8EwbOLNP1m86r1%2BepJ%2BmHN0rmcb7k5GzoM4VvHzkYxtV8luANgHLj1r%2B%2FU4EXjnRaF%2BaED39ryo67pNHdEcWTnLX9oBw9waGuyvG1PXwmUUXX0NUaaoJBQA87lgj9aG3J8brwcAsb6U%2F%2FXEPMmA%2BA%2BzeUgMP%2BG2mxC6v72a4y22tjldWcRJsYfQvxucJpSs%2FTkXKaubn9YUe2yMPLYbt8IrxddwdxQZxPGjB7JbtFaQ%2F8RSgh8%2F3pfSJ83cBzVMEdZ2kveWj%2FECTA%2B6OUA9aZPeYi%2BU54j2V1QESj0qd9cCl6tc3lZJFz5gL1Ni5swCg2UcQwuOPtTWfMlLfsI2ZzVPKfxNhqYmZTMG30PLBwCAZGr4lu8LPUrb5LXPJiuzzadLK1uqLtgKZ7L%2BtUXrbeze0lX%2BWHswx5mLwgY6pgF8%2FWS%2BK1H30kyYq5csZXxHBwJTGRNFSta9bJCd8RJkahzaenl%2B2tgLV734GASILA7l6uxi1aUtcVB%2BWwZLwxsZyiFdKXo7VNJ1qxF9560SNjBX%2BsAUMtCDIjjiDEYsoB5SB5yvN2NvEdkisjUJyu8vCfiool7QrVcEzuq8agEpbQKX5lUwO1NN9IG7rztP4eaREBCKBNtWkWnje1owSF1oHCefAkyu&X-Amz-Signature=43e6594b3d15e19088ecb237adf789d260a098549cae1dadb6153912ac371811&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXLV7YI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsOCeeZz8AHxXqmCQ3kpo79MbCO0GgkLLcJDvpnaUXYAiBrBvWb9Z4BWnTLBhxhuuDl8hV50%2FVSKTGVhEMXt6MXLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMpGCLwGukHiC8WUaHKtwDRmq9fmCedmQof2VbRJ0SjD567zkz42u8b26cHLGc1we9R84JgmBq%2FtL5qrrH0Fms7nxibY93Q%2BhptCjlmh2KmyoRxWiIL2SucoJ9FU7YsOYA2M3KJDl%2FTVEhlmSaZTJiYe%2BMViW82Waf73iGiexv%2FHIaRLATSXRLkCc2v2s%2BXk%2BAzRjVa95vffonPCwC2pvkQQG6TL%2FPGeQDXULL4FC021t7uprPi8EwbOLNP1m86r1%2BepJ%2BmHN0rmcb7k5GzoM4VvHzkYxtV8luANgHLj1r%2B%2FU4EXjnRaF%2BaED39ryo67pNHdEcWTnLX9oBw9waGuyvG1PXwmUUXX0NUaaoJBQA87lgj9aG3J8brwcAsb6U%2F%2FXEPMmA%2BA%2BzeUgMP%2BG2mxC6v72a4y22tjldWcRJsYfQvxucJpSs%2FTkXKaubn9YUe2yMPLYbt8IrxddwdxQZxPGjB7JbtFaQ%2F8RSgh8%2F3pfSJ83cBzVMEdZ2kveWj%2FECTA%2B6OUA9aZPeYi%2BU54j2V1QESj0qd9cCl6tc3lZJFz5gL1Ni5swCg2UcQwuOPtTWfMlLfsI2ZzVPKfxNhqYmZTMG30PLBwCAZGr4lu8LPUrb5LXPJiuzzadLK1uqLtgKZ7L%2BtUXrbeze0lX%2BWHswx5mLwgY6pgF8%2FWS%2BK1H30kyYq5csZXxHBwJTGRNFSta9bJCd8RJkahzaenl%2B2tgLV734GASILA7l6uxi1aUtcVB%2BWwZLwxsZyiFdKXo7VNJ1qxF9560SNjBX%2BsAUMtCDIjjiDEYsoB5SB5yvN2NvEdkisjUJyu8vCfiool7QrVcEzuq8agEpbQKX5lUwO1NN9IG7rztP4eaREBCKBNtWkWnje1owSF1oHCefAkyu&X-Amz-Signature=c1b7657c2470a26b116c24183ece0d77dafb0818f4de7f6740a4ea1133f9dca6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXLV7YI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsOCeeZz8AHxXqmCQ3kpo79MbCO0GgkLLcJDvpnaUXYAiBrBvWb9Z4BWnTLBhxhuuDl8hV50%2FVSKTGVhEMXt6MXLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMpGCLwGukHiC8WUaHKtwDRmq9fmCedmQof2VbRJ0SjD567zkz42u8b26cHLGc1we9R84JgmBq%2FtL5qrrH0Fms7nxibY93Q%2BhptCjlmh2KmyoRxWiIL2SucoJ9FU7YsOYA2M3KJDl%2FTVEhlmSaZTJiYe%2BMViW82Waf73iGiexv%2FHIaRLATSXRLkCc2v2s%2BXk%2BAzRjVa95vffonPCwC2pvkQQG6TL%2FPGeQDXULL4FC021t7uprPi8EwbOLNP1m86r1%2BepJ%2BmHN0rmcb7k5GzoM4VvHzkYxtV8luANgHLj1r%2B%2FU4EXjnRaF%2BaED39ryo67pNHdEcWTnLX9oBw9waGuyvG1PXwmUUXX0NUaaoJBQA87lgj9aG3J8brwcAsb6U%2F%2FXEPMmA%2BA%2BzeUgMP%2BG2mxC6v72a4y22tjldWcRJsYfQvxucJpSs%2FTkXKaubn9YUe2yMPLYbt8IrxddwdxQZxPGjB7JbtFaQ%2F8RSgh8%2F3pfSJ83cBzVMEdZ2kveWj%2FECTA%2B6OUA9aZPeYi%2BU54j2V1QESj0qd9cCl6tc3lZJFz5gL1Ni5swCg2UcQwuOPtTWfMlLfsI2ZzVPKfxNhqYmZTMG30PLBwCAZGr4lu8LPUrb5LXPJiuzzadLK1uqLtgKZ7L%2BtUXrbeze0lX%2BWHswx5mLwgY6pgF8%2FWS%2BK1H30kyYq5csZXxHBwJTGRNFSta9bJCd8RJkahzaenl%2B2tgLV734GASILA7l6uxi1aUtcVB%2BWwZLwxsZyiFdKXo7VNJ1qxF9560SNjBX%2BsAUMtCDIjjiDEYsoB5SB5yvN2NvEdkisjUJyu8vCfiool7QrVcEzuq8agEpbQKX5lUwO1NN9IG7rztP4eaREBCKBNtWkWnje1owSF1oHCefAkyu&X-Amz-Signature=c8cfc7225bf6a157d1814daa5c4ae7395e9563aebdf51891499ad65fdc16470c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXLV7YI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsOCeeZz8AHxXqmCQ3kpo79MbCO0GgkLLcJDvpnaUXYAiBrBvWb9Z4BWnTLBhxhuuDl8hV50%2FVSKTGVhEMXt6MXLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMpGCLwGukHiC8WUaHKtwDRmq9fmCedmQof2VbRJ0SjD567zkz42u8b26cHLGc1we9R84JgmBq%2FtL5qrrH0Fms7nxibY93Q%2BhptCjlmh2KmyoRxWiIL2SucoJ9FU7YsOYA2M3KJDl%2FTVEhlmSaZTJiYe%2BMViW82Waf73iGiexv%2FHIaRLATSXRLkCc2v2s%2BXk%2BAzRjVa95vffonPCwC2pvkQQG6TL%2FPGeQDXULL4FC021t7uprPi8EwbOLNP1m86r1%2BepJ%2BmHN0rmcb7k5GzoM4VvHzkYxtV8luANgHLj1r%2B%2FU4EXjnRaF%2BaED39ryo67pNHdEcWTnLX9oBw9waGuyvG1PXwmUUXX0NUaaoJBQA87lgj9aG3J8brwcAsb6U%2F%2FXEPMmA%2BA%2BzeUgMP%2BG2mxC6v72a4y22tjldWcRJsYfQvxucJpSs%2FTkXKaubn9YUe2yMPLYbt8IrxddwdxQZxPGjB7JbtFaQ%2F8RSgh8%2F3pfSJ83cBzVMEdZ2kveWj%2FECTA%2B6OUA9aZPeYi%2BU54j2V1QESj0qd9cCl6tc3lZJFz5gL1Ni5swCg2UcQwuOPtTWfMlLfsI2ZzVPKfxNhqYmZTMG30PLBwCAZGr4lu8LPUrb5LXPJiuzzadLK1uqLtgKZ7L%2BtUXrbeze0lX%2BWHswx5mLwgY6pgF8%2FWS%2BK1H30kyYq5csZXxHBwJTGRNFSta9bJCd8RJkahzaenl%2B2tgLV734GASILA7l6uxi1aUtcVB%2BWwZLwxsZyiFdKXo7VNJ1qxF9560SNjBX%2BsAUMtCDIjjiDEYsoB5SB5yvN2NvEdkisjUJyu8vCfiool7QrVcEzuq8agEpbQKX5lUwO1NN9IG7rztP4eaREBCKBNtWkWnje1owSF1oHCefAkyu&X-Amz-Signature=25754e68028ad783cb963b6531d8736c44d7bfd5aba053881d8eabc78128d552&X-Amz-SignedHeaders=host&x-id=GetObject)
