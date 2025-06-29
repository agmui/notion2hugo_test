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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGNFL4C%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FNSrgUEPxulIiHX2Ct1Jy1zzYSPj4%2B7u6DPiOSr0YNQIgPxGMnEIrcvpx%2Byj8gmBh8qtXcJE6J270IcalCzMAtVoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZY1WeWCAUO9UVWUSrcA1KpQvP3MSE8uqbaWMH7dwWJKs34MWs3v1iAsgLiKg6zx%2BrI4gplZPFM%2FJIbm%2Bk1c85noNUF%2ByxuTs5NAPe28IWmut5cNlY%2FDG3T0qqsREbrxQEsnHETvOo1FfUDb3zeDkcMV65HjD98lfb1jLeq7gM6%2BaogyBsDPQopgd%2BVbejuvBNdqYwMI%2Be9OmbN%2BEZSi%2BQneiDZ6c2rogTOQfhnLZMzb42j6lQ3LBr4I5uzKKrAGshbBTqqPE8A1Q5lm%2FoXFVPtlPY%2BoV3XXakFlpVHNhxD%2B6KNYo2r35iwkjgCSndft%2BTny4BJ%2FyfhJwm6qZULE6DT9lJuT97BMdSbkvh3TQ32S%2FulTgH1SX8tqH55szxylQ7ZIjWMGCBloa4tZZRly8hJc2SGGUH2TQ%2BGVm9JD%2Fy6sSetwvyFFannu3itl%2F9b7k2km4BC5d5AqF6hEWI29och%2BVT9D%2FCSZ9CekAoPrIMADQ57YsW1%2BJgiEzvh7pviG3KYMD7%2FbiiXDrLjX81si6FPkWgzaBei8cAoppbBlrBVimShLhyisAlWgBIjf5ZmA66dI8RnbPenFkaRMnM7Z4w5slsksxJLG7nL97Oi%2BtHHaCCOjIjqBdHcTeYL8SEYFaIfK%2FUzZ%2FXVzbEVMMb6hcMGOqUBjKgTI5o1A5I2yOaT4L7byt0YKBYJXp%2FACDCcGSkxKskkCEF%2BS3tLv71sktDNTWnZ8khRifz2rL6UkB3oS1z3%2B9i%2BcqizEqBHzbYbMoz862TZKVLMNcXGjjSvl0KQ%2BLCCiMCNFJgxadoFZYqb5RfqtYnm1BwuxfiqcfU%2FEASjHZYay3C2UlmIw2Y0CB2TFcFlhLFBhw5dsdlQ3BAjrf3gY8KyojNc&X-Amz-Signature=eecaedf48774193acd31715b59e5fa7876f3233409887e6b1c684ec0a75d3039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGNFL4C%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FNSrgUEPxulIiHX2Ct1Jy1zzYSPj4%2B7u6DPiOSr0YNQIgPxGMnEIrcvpx%2Byj8gmBh8qtXcJE6J270IcalCzMAtVoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZY1WeWCAUO9UVWUSrcA1KpQvP3MSE8uqbaWMH7dwWJKs34MWs3v1iAsgLiKg6zx%2BrI4gplZPFM%2FJIbm%2Bk1c85noNUF%2ByxuTs5NAPe28IWmut5cNlY%2FDG3T0qqsREbrxQEsnHETvOo1FfUDb3zeDkcMV65HjD98lfb1jLeq7gM6%2BaogyBsDPQopgd%2BVbejuvBNdqYwMI%2Be9OmbN%2BEZSi%2BQneiDZ6c2rogTOQfhnLZMzb42j6lQ3LBr4I5uzKKrAGshbBTqqPE8A1Q5lm%2FoXFVPtlPY%2BoV3XXakFlpVHNhxD%2B6KNYo2r35iwkjgCSndft%2BTny4BJ%2FyfhJwm6qZULE6DT9lJuT97BMdSbkvh3TQ32S%2FulTgH1SX8tqH55szxylQ7ZIjWMGCBloa4tZZRly8hJc2SGGUH2TQ%2BGVm9JD%2Fy6sSetwvyFFannu3itl%2F9b7k2km4BC5d5AqF6hEWI29och%2BVT9D%2FCSZ9CekAoPrIMADQ57YsW1%2BJgiEzvh7pviG3KYMD7%2FbiiXDrLjX81si6FPkWgzaBei8cAoppbBlrBVimShLhyisAlWgBIjf5ZmA66dI8RnbPenFkaRMnM7Z4w5slsksxJLG7nL97Oi%2BtHHaCCOjIjqBdHcTeYL8SEYFaIfK%2FUzZ%2FXVzbEVMMb6hcMGOqUBjKgTI5o1A5I2yOaT4L7byt0YKBYJXp%2FACDCcGSkxKskkCEF%2BS3tLv71sktDNTWnZ8khRifz2rL6UkB3oS1z3%2B9i%2BcqizEqBHzbYbMoz862TZKVLMNcXGjjSvl0KQ%2BLCCiMCNFJgxadoFZYqb5RfqtYnm1BwuxfiqcfU%2FEASjHZYay3C2UlmIw2Y0CB2TFcFlhLFBhw5dsdlQ3BAjrf3gY8KyojNc&X-Amz-Signature=030a71ceabbc73710f16466868c75d4976e3bb4ea1ca198f42f00802cef6c4e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGNFL4C%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FNSrgUEPxulIiHX2Ct1Jy1zzYSPj4%2B7u6DPiOSr0YNQIgPxGMnEIrcvpx%2Byj8gmBh8qtXcJE6J270IcalCzMAtVoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZY1WeWCAUO9UVWUSrcA1KpQvP3MSE8uqbaWMH7dwWJKs34MWs3v1iAsgLiKg6zx%2BrI4gplZPFM%2FJIbm%2Bk1c85noNUF%2ByxuTs5NAPe28IWmut5cNlY%2FDG3T0qqsREbrxQEsnHETvOo1FfUDb3zeDkcMV65HjD98lfb1jLeq7gM6%2BaogyBsDPQopgd%2BVbejuvBNdqYwMI%2Be9OmbN%2BEZSi%2BQneiDZ6c2rogTOQfhnLZMzb42j6lQ3LBr4I5uzKKrAGshbBTqqPE8A1Q5lm%2FoXFVPtlPY%2BoV3XXakFlpVHNhxD%2B6KNYo2r35iwkjgCSndft%2BTny4BJ%2FyfhJwm6qZULE6DT9lJuT97BMdSbkvh3TQ32S%2FulTgH1SX8tqH55szxylQ7ZIjWMGCBloa4tZZRly8hJc2SGGUH2TQ%2BGVm9JD%2Fy6sSetwvyFFannu3itl%2F9b7k2km4BC5d5AqF6hEWI29och%2BVT9D%2FCSZ9CekAoPrIMADQ57YsW1%2BJgiEzvh7pviG3KYMD7%2FbiiXDrLjX81si6FPkWgzaBei8cAoppbBlrBVimShLhyisAlWgBIjf5ZmA66dI8RnbPenFkaRMnM7Z4w5slsksxJLG7nL97Oi%2BtHHaCCOjIjqBdHcTeYL8SEYFaIfK%2FUzZ%2FXVzbEVMMb6hcMGOqUBjKgTI5o1A5I2yOaT4L7byt0YKBYJXp%2FACDCcGSkxKskkCEF%2BS3tLv71sktDNTWnZ8khRifz2rL6UkB3oS1z3%2B9i%2BcqizEqBHzbYbMoz862TZKVLMNcXGjjSvl0KQ%2BLCCiMCNFJgxadoFZYqb5RfqtYnm1BwuxfiqcfU%2FEASjHZYay3C2UlmIw2Y0CB2TFcFlhLFBhw5dsdlQ3BAjrf3gY8KyojNc&X-Amz-Signature=56a7d3e0dea206286d102e565341e2078540b0743e790e10423db0fd8bded3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGNFL4C%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FNSrgUEPxulIiHX2Ct1Jy1zzYSPj4%2B7u6DPiOSr0YNQIgPxGMnEIrcvpx%2Byj8gmBh8qtXcJE6J270IcalCzMAtVoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZY1WeWCAUO9UVWUSrcA1KpQvP3MSE8uqbaWMH7dwWJKs34MWs3v1iAsgLiKg6zx%2BrI4gplZPFM%2FJIbm%2Bk1c85noNUF%2ByxuTs5NAPe28IWmut5cNlY%2FDG3T0qqsREbrxQEsnHETvOo1FfUDb3zeDkcMV65HjD98lfb1jLeq7gM6%2BaogyBsDPQopgd%2BVbejuvBNdqYwMI%2Be9OmbN%2BEZSi%2BQneiDZ6c2rogTOQfhnLZMzb42j6lQ3LBr4I5uzKKrAGshbBTqqPE8A1Q5lm%2FoXFVPtlPY%2BoV3XXakFlpVHNhxD%2B6KNYo2r35iwkjgCSndft%2BTny4BJ%2FyfhJwm6qZULE6DT9lJuT97BMdSbkvh3TQ32S%2FulTgH1SX8tqH55szxylQ7ZIjWMGCBloa4tZZRly8hJc2SGGUH2TQ%2BGVm9JD%2Fy6sSetwvyFFannu3itl%2F9b7k2km4BC5d5AqF6hEWI29och%2BVT9D%2FCSZ9CekAoPrIMADQ57YsW1%2BJgiEzvh7pviG3KYMD7%2FbiiXDrLjX81si6FPkWgzaBei8cAoppbBlrBVimShLhyisAlWgBIjf5ZmA66dI8RnbPenFkaRMnM7Z4w5slsksxJLG7nL97Oi%2BtHHaCCOjIjqBdHcTeYL8SEYFaIfK%2FUzZ%2FXVzbEVMMb6hcMGOqUBjKgTI5o1A5I2yOaT4L7byt0YKBYJXp%2FACDCcGSkxKskkCEF%2BS3tLv71sktDNTWnZ8khRifz2rL6UkB3oS1z3%2B9i%2BcqizEqBHzbYbMoz862TZKVLMNcXGjjSvl0KQ%2BLCCiMCNFJgxadoFZYqb5RfqtYnm1BwuxfiqcfU%2FEASjHZYay3C2UlmIw2Y0CB2TFcFlhLFBhw5dsdlQ3BAjrf3gY8KyojNc&X-Amz-Signature=4f3327518d876528eff40032ed3f3240baa807713c100b225193162e6e7c6dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGNFL4C%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FNSrgUEPxulIiHX2Ct1Jy1zzYSPj4%2B7u6DPiOSr0YNQIgPxGMnEIrcvpx%2Byj8gmBh8qtXcJE6J270IcalCzMAtVoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZY1WeWCAUO9UVWUSrcA1KpQvP3MSE8uqbaWMH7dwWJKs34MWs3v1iAsgLiKg6zx%2BrI4gplZPFM%2FJIbm%2Bk1c85noNUF%2ByxuTs5NAPe28IWmut5cNlY%2FDG3T0qqsREbrxQEsnHETvOo1FfUDb3zeDkcMV65HjD98lfb1jLeq7gM6%2BaogyBsDPQopgd%2BVbejuvBNdqYwMI%2Be9OmbN%2BEZSi%2BQneiDZ6c2rogTOQfhnLZMzb42j6lQ3LBr4I5uzKKrAGshbBTqqPE8A1Q5lm%2FoXFVPtlPY%2BoV3XXakFlpVHNhxD%2B6KNYo2r35iwkjgCSndft%2BTny4BJ%2FyfhJwm6qZULE6DT9lJuT97BMdSbkvh3TQ32S%2FulTgH1SX8tqH55szxylQ7ZIjWMGCBloa4tZZRly8hJc2SGGUH2TQ%2BGVm9JD%2Fy6sSetwvyFFannu3itl%2F9b7k2km4BC5d5AqF6hEWI29och%2BVT9D%2FCSZ9CekAoPrIMADQ57YsW1%2BJgiEzvh7pviG3KYMD7%2FbiiXDrLjX81si6FPkWgzaBei8cAoppbBlrBVimShLhyisAlWgBIjf5ZmA66dI8RnbPenFkaRMnM7Z4w5slsksxJLG7nL97Oi%2BtHHaCCOjIjqBdHcTeYL8SEYFaIfK%2FUzZ%2FXVzbEVMMb6hcMGOqUBjKgTI5o1A5I2yOaT4L7byt0YKBYJXp%2FACDCcGSkxKskkCEF%2BS3tLv71sktDNTWnZ8khRifz2rL6UkB3oS1z3%2B9i%2BcqizEqBHzbYbMoz862TZKVLMNcXGjjSvl0KQ%2BLCCiMCNFJgxadoFZYqb5RfqtYnm1BwuxfiqcfU%2FEASjHZYay3C2UlmIw2Y0CB2TFcFlhLFBhw5dsdlQ3BAjrf3gY8KyojNc&X-Amz-Signature=d1417373a1f345ce32cf1e1db438ba20be83e0ade3cd225bf41f3cd7e7be56ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGNFL4C%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FNSrgUEPxulIiHX2Ct1Jy1zzYSPj4%2B7u6DPiOSr0YNQIgPxGMnEIrcvpx%2Byj8gmBh8qtXcJE6J270IcalCzMAtVoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZY1WeWCAUO9UVWUSrcA1KpQvP3MSE8uqbaWMH7dwWJKs34MWs3v1iAsgLiKg6zx%2BrI4gplZPFM%2FJIbm%2Bk1c85noNUF%2ByxuTs5NAPe28IWmut5cNlY%2FDG3T0qqsREbrxQEsnHETvOo1FfUDb3zeDkcMV65HjD98lfb1jLeq7gM6%2BaogyBsDPQopgd%2BVbejuvBNdqYwMI%2Be9OmbN%2BEZSi%2BQneiDZ6c2rogTOQfhnLZMzb42j6lQ3LBr4I5uzKKrAGshbBTqqPE8A1Q5lm%2FoXFVPtlPY%2BoV3XXakFlpVHNhxD%2B6KNYo2r35iwkjgCSndft%2BTny4BJ%2FyfhJwm6qZULE6DT9lJuT97BMdSbkvh3TQ32S%2FulTgH1SX8tqH55szxylQ7ZIjWMGCBloa4tZZRly8hJc2SGGUH2TQ%2BGVm9JD%2Fy6sSetwvyFFannu3itl%2F9b7k2km4BC5d5AqF6hEWI29och%2BVT9D%2FCSZ9CekAoPrIMADQ57YsW1%2BJgiEzvh7pviG3KYMD7%2FbiiXDrLjX81si6FPkWgzaBei8cAoppbBlrBVimShLhyisAlWgBIjf5ZmA66dI8RnbPenFkaRMnM7Z4w5slsksxJLG7nL97Oi%2BtHHaCCOjIjqBdHcTeYL8SEYFaIfK%2FUzZ%2FXVzbEVMMb6hcMGOqUBjKgTI5o1A5I2yOaT4L7byt0YKBYJXp%2FACDCcGSkxKskkCEF%2BS3tLv71sktDNTWnZ8khRifz2rL6UkB3oS1z3%2B9i%2BcqizEqBHzbYbMoz862TZKVLMNcXGjjSvl0KQ%2BLCCiMCNFJgxadoFZYqb5RfqtYnm1BwuxfiqcfU%2FEASjHZYay3C2UlmIw2Y0CB2TFcFlhLFBhw5dsdlQ3BAjrf3gY8KyojNc&X-Amz-Signature=f82067587d2cdaeca3a7c1b0a7b9f60ee36fd203a47a2f51d1186c7e9ce794d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
