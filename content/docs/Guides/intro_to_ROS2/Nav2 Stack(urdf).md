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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLQXFOI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6UTSQFwSRbQf%2F%2FXkr2kD9BK6OipAvwHP2aBKX4RCqyAiBDE7vRJXA5GehWfgn12EyvwzOUqIVZ86IZBBuzHh3OrSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2FC01Tah%2F68LX6zaKtwDKaP2Ox00Ae%2FF1APyg5ovRTJrC5juZGM3STsyRxxANBZkrPrAROoXFQBJaOoRtnggiSFCFBIniQpj1ZaFsh1n8FOyaIRXMskSxSvJkocamvb16m9pQBZP63CncPVVyC2GGoh95bsU4kK3Ra6LAchMFM9%2BUWlha%2BUizFI%2FdL6bwsvBUyJRpPzk4sk59%2FZVnSzL44ZFTGUM7jJsIXj6fyzAeVGOh7CyVeC1oTXbTy%2BxyujuQGM6yeu5ZSk%2FiO4OY0KDv4rE67SQ2oh8uabswAbCDTmA%2Fo2dTug4Ff4s%2FE8W%2FmQWikLMtksVAlHixjncFKt6pCiQHE%2BMSbFmPcZGbqi4MZ%2FyRTFDwgV5QLNQeU7xDtLB1PDPKZlq4Oui%2Fz2%2FRkKt1gpRrwdwUjzLdZ4pFcPR6HL%2Byx4hHo968V03ZzWssdr5VrwOOCypUr4lsJz39qIz9OEqhY7BYTejagAbCRGFLvNKAKbkQLCsXQqzBbYdGLTxLMnMd19Z4BuRBVIigzI5ScRbqOgBf2iOuKUyJxU%2B0mlKFT%2FTOzk6iFpchDemCYaiVjru9E2ljt%2FEi%2FhdmMHJ4AH60KzCh9XRUlBeyo2KFOMr%2FAUlrcAIIAMGKi7Fg1sj3ExTUGU9lg8H22sw7tb4wAY6pgHGxbks2ZFklS1wbi%2BvXoBKkw3kiaDEf27fCDLxwzL6ABEPvBkv6cMdTxVh%2Bd4hzmy2ko2tUepTxa6hmy5549BRSmbINexEFVxpxrPKOfRQEdt%2Fp4b7tGBHhTzkwjjFcM28EqI0zFK1B%2BBInaC6QUBRQNxKH3MDHGA%2FTNklvgdB1LS0WOco3tPde189ywgeKdd0d3LlfXNEEI8QcroHPS2yQHDweCaC&X-Amz-Signature=bda2a9992faf602a707a230ada574c2896775a3531fe4945235c027afe6fe939&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLQXFOI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6UTSQFwSRbQf%2F%2FXkr2kD9BK6OipAvwHP2aBKX4RCqyAiBDE7vRJXA5GehWfgn12EyvwzOUqIVZ86IZBBuzHh3OrSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2FC01Tah%2F68LX6zaKtwDKaP2Ox00Ae%2FF1APyg5ovRTJrC5juZGM3STsyRxxANBZkrPrAROoXFQBJaOoRtnggiSFCFBIniQpj1ZaFsh1n8FOyaIRXMskSxSvJkocamvb16m9pQBZP63CncPVVyC2GGoh95bsU4kK3Ra6LAchMFM9%2BUWlha%2BUizFI%2FdL6bwsvBUyJRpPzk4sk59%2FZVnSzL44ZFTGUM7jJsIXj6fyzAeVGOh7CyVeC1oTXbTy%2BxyujuQGM6yeu5ZSk%2FiO4OY0KDv4rE67SQ2oh8uabswAbCDTmA%2Fo2dTug4Ff4s%2FE8W%2FmQWikLMtksVAlHixjncFKt6pCiQHE%2BMSbFmPcZGbqi4MZ%2FyRTFDwgV5QLNQeU7xDtLB1PDPKZlq4Oui%2Fz2%2FRkKt1gpRrwdwUjzLdZ4pFcPR6HL%2Byx4hHo968V03ZzWssdr5VrwOOCypUr4lsJz39qIz9OEqhY7BYTejagAbCRGFLvNKAKbkQLCsXQqzBbYdGLTxLMnMd19Z4BuRBVIigzI5ScRbqOgBf2iOuKUyJxU%2B0mlKFT%2FTOzk6iFpchDemCYaiVjru9E2ljt%2FEi%2FhdmMHJ4AH60KzCh9XRUlBeyo2KFOMr%2FAUlrcAIIAMGKi7Fg1sj3ExTUGU9lg8H22sw7tb4wAY6pgHGxbks2ZFklS1wbi%2BvXoBKkw3kiaDEf27fCDLxwzL6ABEPvBkv6cMdTxVh%2Bd4hzmy2ko2tUepTxa6hmy5549BRSmbINexEFVxpxrPKOfRQEdt%2Fp4b7tGBHhTzkwjjFcM28EqI0zFK1B%2BBInaC6QUBRQNxKH3MDHGA%2FTNklvgdB1LS0WOco3tPde189ywgeKdd0d3LlfXNEEI8QcroHPS2yQHDweCaC&X-Amz-Signature=77f7130afb7f2f5d094044514999e2661c5518b733bc7ac7720ab9496bee204f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLQXFOI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6UTSQFwSRbQf%2F%2FXkr2kD9BK6OipAvwHP2aBKX4RCqyAiBDE7vRJXA5GehWfgn12EyvwzOUqIVZ86IZBBuzHh3OrSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2FC01Tah%2F68LX6zaKtwDKaP2Ox00Ae%2FF1APyg5ovRTJrC5juZGM3STsyRxxANBZkrPrAROoXFQBJaOoRtnggiSFCFBIniQpj1ZaFsh1n8FOyaIRXMskSxSvJkocamvb16m9pQBZP63CncPVVyC2GGoh95bsU4kK3Ra6LAchMFM9%2BUWlha%2BUizFI%2FdL6bwsvBUyJRpPzk4sk59%2FZVnSzL44ZFTGUM7jJsIXj6fyzAeVGOh7CyVeC1oTXbTy%2BxyujuQGM6yeu5ZSk%2FiO4OY0KDv4rE67SQ2oh8uabswAbCDTmA%2Fo2dTug4Ff4s%2FE8W%2FmQWikLMtksVAlHixjncFKt6pCiQHE%2BMSbFmPcZGbqi4MZ%2FyRTFDwgV5QLNQeU7xDtLB1PDPKZlq4Oui%2Fz2%2FRkKt1gpRrwdwUjzLdZ4pFcPR6HL%2Byx4hHo968V03ZzWssdr5VrwOOCypUr4lsJz39qIz9OEqhY7BYTejagAbCRGFLvNKAKbkQLCsXQqzBbYdGLTxLMnMd19Z4BuRBVIigzI5ScRbqOgBf2iOuKUyJxU%2B0mlKFT%2FTOzk6iFpchDemCYaiVjru9E2ljt%2FEi%2FhdmMHJ4AH60KzCh9XRUlBeyo2KFOMr%2FAUlrcAIIAMGKi7Fg1sj3ExTUGU9lg8H22sw7tb4wAY6pgHGxbks2ZFklS1wbi%2BvXoBKkw3kiaDEf27fCDLxwzL6ABEPvBkv6cMdTxVh%2Bd4hzmy2ko2tUepTxa6hmy5549BRSmbINexEFVxpxrPKOfRQEdt%2Fp4b7tGBHhTzkwjjFcM28EqI0zFK1B%2BBInaC6QUBRQNxKH3MDHGA%2FTNklvgdB1LS0WOco3tPde189ywgeKdd0d3LlfXNEEI8QcroHPS2yQHDweCaC&X-Amz-Signature=a39748e997f805c39423894e10ea698c646bc7525841632f5c963c4db762f4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLQXFOI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6UTSQFwSRbQf%2F%2FXkr2kD9BK6OipAvwHP2aBKX4RCqyAiBDE7vRJXA5GehWfgn12EyvwzOUqIVZ86IZBBuzHh3OrSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2FC01Tah%2F68LX6zaKtwDKaP2Ox00Ae%2FF1APyg5ovRTJrC5juZGM3STsyRxxANBZkrPrAROoXFQBJaOoRtnggiSFCFBIniQpj1ZaFsh1n8FOyaIRXMskSxSvJkocamvb16m9pQBZP63CncPVVyC2GGoh95bsU4kK3Ra6LAchMFM9%2BUWlha%2BUizFI%2FdL6bwsvBUyJRpPzk4sk59%2FZVnSzL44ZFTGUM7jJsIXj6fyzAeVGOh7CyVeC1oTXbTy%2BxyujuQGM6yeu5ZSk%2FiO4OY0KDv4rE67SQ2oh8uabswAbCDTmA%2Fo2dTug4Ff4s%2FE8W%2FmQWikLMtksVAlHixjncFKt6pCiQHE%2BMSbFmPcZGbqi4MZ%2FyRTFDwgV5QLNQeU7xDtLB1PDPKZlq4Oui%2Fz2%2FRkKt1gpRrwdwUjzLdZ4pFcPR6HL%2Byx4hHo968V03ZzWssdr5VrwOOCypUr4lsJz39qIz9OEqhY7BYTejagAbCRGFLvNKAKbkQLCsXQqzBbYdGLTxLMnMd19Z4BuRBVIigzI5ScRbqOgBf2iOuKUyJxU%2B0mlKFT%2FTOzk6iFpchDemCYaiVjru9E2ljt%2FEi%2FhdmMHJ4AH60KzCh9XRUlBeyo2KFOMr%2FAUlrcAIIAMGKi7Fg1sj3ExTUGU9lg8H22sw7tb4wAY6pgHGxbks2ZFklS1wbi%2BvXoBKkw3kiaDEf27fCDLxwzL6ABEPvBkv6cMdTxVh%2Bd4hzmy2ko2tUepTxa6hmy5549BRSmbINexEFVxpxrPKOfRQEdt%2Fp4b7tGBHhTzkwjjFcM28EqI0zFK1B%2BBInaC6QUBRQNxKH3MDHGA%2FTNklvgdB1LS0WOco3tPde189ywgeKdd0d3LlfXNEEI8QcroHPS2yQHDweCaC&X-Amz-Signature=b071e14ccb72f814b4cdc7824e71656b5f35f21f3219f077f06da23c7d81e072&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLQXFOI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6UTSQFwSRbQf%2F%2FXkr2kD9BK6OipAvwHP2aBKX4RCqyAiBDE7vRJXA5GehWfgn12EyvwzOUqIVZ86IZBBuzHh3OrSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2FC01Tah%2F68LX6zaKtwDKaP2Ox00Ae%2FF1APyg5ovRTJrC5juZGM3STsyRxxANBZkrPrAROoXFQBJaOoRtnggiSFCFBIniQpj1ZaFsh1n8FOyaIRXMskSxSvJkocamvb16m9pQBZP63CncPVVyC2GGoh95bsU4kK3Ra6LAchMFM9%2BUWlha%2BUizFI%2FdL6bwsvBUyJRpPzk4sk59%2FZVnSzL44ZFTGUM7jJsIXj6fyzAeVGOh7CyVeC1oTXbTy%2BxyujuQGM6yeu5ZSk%2FiO4OY0KDv4rE67SQ2oh8uabswAbCDTmA%2Fo2dTug4Ff4s%2FE8W%2FmQWikLMtksVAlHixjncFKt6pCiQHE%2BMSbFmPcZGbqi4MZ%2FyRTFDwgV5QLNQeU7xDtLB1PDPKZlq4Oui%2Fz2%2FRkKt1gpRrwdwUjzLdZ4pFcPR6HL%2Byx4hHo968V03ZzWssdr5VrwOOCypUr4lsJz39qIz9OEqhY7BYTejagAbCRGFLvNKAKbkQLCsXQqzBbYdGLTxLMnMd19Z4BuRBVIigzI5ScRbqOgBf2iOuKUyJxU%2B0mlKFT%2FTOzk6iFpchDemCYaiVjru9E2ljt%2FEi%2FhdmMHJ4AH60KzCh9XRUlBeyo2KFOMr%2FAUlrcAIIAMGKi7Fg1sj3ExTUGU9lg8H22sw7tb4wAY6pgHGxbks2ZFklS1wbi%2BvXoBKkw3kiaDEf27fCDLxwzL6ABEPvBkv6cMdTxVh%2Bd4hzmy2ko2tUepTxa6hmy5549BRSmbINexEFVxpxrPKOfRQEdt%2Fp4b7tGBHhTzkwjjFcM28EqI0zFK1B%2BBInaC6QUBRQNxKH3MDHGA%2FTNklvgdB1LS0WOco3tPde189ywgeKdd0d3LlfXNEEI8QcroHPS2yQHDweCaC&X-Amz-Signature=6afb15fd3f247fc668fa91a1ff38c79a872fbd99b642c3126be5a330cf907b76&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLQXFOI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6UTSQFwSRbQf%2F%2FXkr2kD9BK6OipAvwHP2aBKX4RCqyAiBDE7vRJXA5GehWfgn12EyvwzOUqIVZ86IZBBuzHh3OrSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2FC01Tah%2F68LX6zaKtwDKaP2Ox00Ae%2FF1APyg5ovRTJrC5juZGM3STsyRxxANBZkrPrAROoXFQBJaOoRtnggiSFCFBIniQpj1ZaFsh1n8FOyaIRXMskSxSvJkocamvb16m9pQBZP63CncPVVyC2GGoh95bsU4kK3Ra6LAchMFM9%2BUWlha%2BUizFI%2FdL6bwsvBUyJRpPzk4sk59%2FZVnSzL44ZFTGUM7jJsIXj6fyzAeVGOh7CyVeC1oTXbTy%2BxyujuQGM6yeu5ZSk%2FiO4OY0KDv4rE67SQ2oh8uabswAbCDTmA%2Fo2dTug4Ff4s%2FE8W%2FmQWikLMtksVAlHixjncFKt6pCiQHE%2BMSbFmPcZGbqi4MZ%2FyRTFDwgV5QLNQeU7xDtLB1PDPKZlq4Oui%2Fz2%2FRkKt1gpRrwdwUjzLdZ4pFcPR6HL%2Byx4hHo968V03ZzWssdr5VrwOOCypUr4lsJz39qIz9OEqhY7BYTejagAbCRGFLvNKAKbkQLCsXQqzBbYdGLTxLMnMd19Z4BuRBVIigzI5ScRbqOgBf2iOuKUyJxU%2B0mlKFT%2FTOzk6iFpchDemCYaiVjru9E2ljt%2FEi%2FhdmMHJ4AH60KzCh9XRUlBeyo2KFOMr%2FAUlrcAIIAMGKi7Fg1sj3ExTUGU9lg8H22sw7tb4wAY6pgHGxbks2ZFklS1wbi%2BvXoBKkw3kiaDEf27fCDLxwzL6ABEPvBkv6cMdTxVh%2Bd4hzmy2ko2tUepTxa6hmy5549BRSmbINexEFVxpxrPKOfRQEdt%2Fp4b7tGBHhTzkwjjFcM28EqI0zFK1B%2BBInaC6QUBRQNxKH3MDHGA%2FTNklvgdB1LS0WOco3tPde189ywgeKdd0d3LlfXNEEI8QcroHPS2yQHDweCaC&X-Amz-Signature=536a8df18a308613abd547a5239ea0afb1408a927aa355bd858fe2389b7a503e&X-Amz-SignedHeaders=host&x-id=GetObject)
