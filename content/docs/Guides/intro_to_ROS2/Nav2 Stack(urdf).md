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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA32ABJK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo117UBltfq0acwmbjw3TzIVrvmF46XYzsvA6DbMkaTAiACgQUzJomKKSlsY4NX81tsYj29bMSsuvexeEa6ICjsaSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMh17ejuSHHJyXNUlgKtwD%2FMiBcZTvH9selRqM%2FwlwPNXB4s0hjxpDlhyboQP6DddXtedU3Ja9rEvKqCznMCaRy5RWawlA%2B0%2FLflc0TB19LVZU0HLhSNeBgWP26xYd6z%2BPFkURXUMmsAjM%2FEekhem1NOx72uGabr7%2F2rZcDOcygU%2FGeU6GdqPWb4BuN%2Fvr%2BgwHAcBzb0fwdCm3WpxrUlJ03ToyW9Vd3L3WR2gwxmiL8O%2FjEeCx0CQKnBz6R%2BRReIyWsuNdYHFfOQmSRrn8uUDlf0eAbvdXSrUnhHR2Faj1lrtYkw1MS11rWY%2FGQ2QxJUwZyKgJdhEbEM2LWbFqQjdcUvarzzHiLyf5pGAX8YQo4dLvLmMEMGsCvVj7LpW4wBtF%2BVe4zGUcmNYg%2Bqwu4QgqTkSH6HyF52nuLo9ohnoncT7isf%2FMRMx5T4Pz6CSmnszxMuV5PujgEbk%2F60ZLOvii%2FatyyvtvRMasy4KlwjhJhDAvyz7bzjnaxxi7y2Nn8NBT4obbIG99W4EYuoPlAZgAUHWvlSIkc%2B8xuSf5Lo8D5iXA287nH%2Fq%2BDFD2CwC5E1Iop3veItOopgqlozNgSm84K3wWljNp7KevEcXx78gxlVJOXfU3PXfdOR6XgVX%2FTd8cwSr4ndQKlSkYwwow5NOawQY6pgEdw8sWnrQH7QxhUt8q5u1ddWtqAZTBNMgGyWD4aDMJ%2BAJHatVqzbbXXB1tAecEtqA38tGvAXPc%2B2vzuzRHalQ4Pwpve9ZTBdmJ7YDwOMYlb3o2kmoznxjdEfLENMsMATpH1smdy6wQmhfhOqwg0DAz6wf428rBtqSc2qCbWJXxzJxmdGhH7%2FlpQrW2aSFqsz7N%2BxSNcIdvGCpoAE2pKFUSIKzc5YW0&X-Amz-Signature=ff551d3c33587f2dd3eb42942c1c6f47befafbf5a0ab2e4fabaaa586049aef2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA32ABJK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo117UBltfq0acwmbjw3TzIVrvmF46XYzsvA6DbMkaTAiACgQUzJomKKSlsY4NX81tsYj29bMSsuvexeEa6ICjsaSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMh17ejuSHHJyXNUlgKtwD%2FMiBcZTvH9selRqM%2FwlwPNXB4s0hjxpDlhyboQP6DddXtedU3Ja9rEvKqCznMCaRy5RWawlA%2B0%2FLflc0TB19LVZU0HLhSNeBgWP26xYd6z%2BPFkURXUMmsAjM%2FEekhem1NOx72uGabr7%2F2rZcDOcygU%2FGeU6GdqPWb4BuN%2Fvr%2BgwHAcBzb0fwdCm3WpxrUlJ03ToyW9Vd3L3WR2gwxmiL8O%2FjEeCx0CQKnBz6R%2BRReIyWsuNdYHFfOQmSRrn8uUDlf0eAbvdXSrUnhHR2Faj1lrtYkw1MS11rWY%2FGQ2QxJUwZyKgJdhEbEM2LWbFqQjdcUvarzzHiLyf5pGAX8YQo4dLvLmMEMGsCvVj7LpW4wBtF%2BVe4zGUcmNYg%2Bqwu4QgqTkSH6HyF52nuLo9ohnoncT7isf%2FMRMx5T4Pz6CSmnszxMuV5PujgEbk%2F60ZLOvii%2FatyyvtvRMasy4KlwjhJhDAvyz7bzjnaxxi7y2Nn8NBT4obbIG99W4EYuoPlAZgAUHWvlSIkc%2B8xuSf5Lo8D5iXA287nH%2Fq%2BDFD2CwC5E1Iop3veItOopgqlozNgSm84K3wWljNp7KevEcXx78gxlVJOXfU3PXfdOR6XgVX%2FTd8cwSr4ndQKlSkYwwow5NOawQY6pgEdw8sWnrQH7QxhUt8q5u1ddWtqAZTBNMgGyWD4aDMJ%2BAJHatVqzbbXXB1tAecEtqA38tGvAXPc%2B2vzuzRHalQ4Pwpve9ZTBdmJ7YDwOMYlb3o2kmoznxjdEfLENMsMATpH1smdy6wQmhfhOqwg0DAz6wf428rBtqSc2qCbWJXxzJxmdGhH7%2FlpQrW2aSFqsz7N%2BxSNcIdvGCpoAE2pKFUSIKzc5YW0&X-Amz-Signature=30f617bf3a0c5b5187e78b1f0951b181ae3f0b480b53e0323b2f0ebf3ad8a186&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA32ABJK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo117UBltfq0acwmbjw3TzIVrvmF46XYzsvA6DbMkaTAiACgQUzJomKKSlsY4NX81tsYj29bMSsuvexeEa6ICjsaSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMh17ejuSHHJyXNUlgKtwD%2FMiBcZTvH9selRqM%2FwlwPNXB4s0hjxpDlhyboQP6DddXtedU3Ja9rEvKqCznMCaRy5RWawlA%2B0%2FLflc0TB19LVZU0HLhSNeBgWP26xYd6z%2BPFkURXUMmsAjM%2FEekhem1NOx72uGabr7%2F2rZcDOcygU%2FGeU6GdqPWb4BuN%2Fvr%2BgwHAcBzb0fwdCm3WpxrUlJ03ToyW9Vd3L3WR2gwxmiL8O%2FjEeCx0CQKnBz6R%2BRReIyWsuNdYHFfOQmSRrn8uUDlf0eAbvdXSrUnhHR2Faj1lrtYkw1MS11rWY%2FGQ2QxJUwZyKgJdhEbEM2LWbFqQjdcUvarzzHiLyf5pGAX8YQo4dLvLmMEMGsCvVj7LpW4wBtF%2BVe4zGUcmNYg%2Bqwu4QgqTkSH6HyF52nuLo9ohnoncT7isf%2FMRMx5T4Pz6CSmnszxMuV5PujgEbk%2F60ZLOvii%2FatyyvtvRMasy4KlwjhJhDAvyz7bzjnaxxi7y2Nn8NBT4obbIG99W4EYuoPlAZgAUHWvlSIkc%2B8xuSf5Lo8D5iXA287nH%2Fq%2BDFD2CwC5E1Iop3veItOopgqlozNgSm84K3wWljNp7KevEcXx78gxlVJOXfU3PXfdOR6XgVX%2FTd8cwSr4ndQKlSkYwwow5NOawQY6pgEdw8sWnrQH7QxhUt8q5u1ddWtqAZTBNMgGyWD4aDMJ%2BAJHatVqzbbXXB1tAecEtqA38tGvAXPc%2B2vzuzRHalQ4Pwpve9ZTBdmJ7YDwOMYlb3o2kmoznxjdEfLENMsMATpH1smdy6wQmhfhOqwg0DAz6wf428rBtqSc2qCbWJXxzJxmdGhH7%2FlpQrW2aSFqsz7N%2BxSNcIdvGCpoAE2pKFUSIKzc5YW0&X-Amz-Signature=7b5fad4c5dac34a706c9bc60e8e358ac72d05972321ab175c3991b86588ec61b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA32ABJK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo117UBltfq0acwmbjw3TzIVrvmF46XYzsvA6DbMkaTAiACgQUzJomKKSlsY4NX81tsYj29bMSsuvexeEa6ICjsaSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMh17ejuSHHJyXNUlgKtwD%2FMiBcZTvH9selRqM%2FwlwPNXB4s0hjxpDlhyboQP6DddXtedU3Ja9rEvKqCznMCaRy5RWawlA%2B0%2FLflc0TB19LVZU0HLhSNeBgWP26xYd6z%2BPFkURXUMmsAjM%2FEekhem1NOx72uGabr7%2F2rZcDOcygU%2FGeU6GdqPWb4BuN%2Fvr%2BgwHAcBzb0fwdCm3WpxrUlJ03ToyW9Vd3L3WR2gwxmiL8O%2FjEeCx0CQKnBz6R%2BRReIyWsuNdYHFfOQmSRrn8uUDlf0eAbvdXSrUnhHR2Faj1lrtYkw1MS11rWY%2FGQ2QxJUwZyKgJdhEbEM2LWbFqQjdcUvarzzHiLyf5pGAX8YQo4dLvLmMEMGsCvVj7LpW4wBtF%2BVe4zGUcmNYg%2Bqwu4QgqTkSH6HyF52nuLo9ohnoncT7isf%2FMRMx5T4Pz6CSmnszxMuV5PujgEbk%2F60ZLOvii%2FatyyvtvRMasy4KlwjhJhDAvyz7bzjnaxxi7y2Nn8NBT4obbIG99W4EYuoPlAZgAUHWvlSIkc%2B8xuSf5Lo8D5iXA287nH%2Fq%2BDFD2CwC5E1Iop3veItOopgqlozNgSm84K3wWljNp7KevEcXx78gxlVJOXfU3PXfdOR6XgVX%2FTd8cwSr4ndQKlSkYwwow5NOawQY6pgEdw8sWnrQH7QxhUt8q5u1ddWtqAZTBNMgGyWD4aDMJ%2BAJHatVqzbbXXB1tAecEtqA38tGvAXPc%2B2vzuzRHalQ4Pwpve9ZTBdmJ7YDwOMYlb3o2kmoznxjdEfLENMsMATpH1smdy6wQmhfhOqwg0DAz6wf428rBtqSc2qCbWJXxzJxmdGhH7%2FlpQrW2aSFqsz7N%2BxSNcIdvGCpoAE2pKFUSIKzc5YW0&X-Amz-Signature=aaa630fb0b043cb38afa49981fb3e8638565ad1494352f168f448631d4eb0aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA32ABJK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo117UBltfq0acwmbjw3TzIVrvmF46XYzsvA6DbMkaTAiACgQUzJomKKSlsY4NX81tsYj29bMSsuvexeEa6ICjsaSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMh17ejuSHHJyXNUlgKtwD%2FMiBcZTvH9selRqM%2FwlwPNXB4s0hjxpDlhyboQP6DddXtedU3Ja9rEvKqCznMCaRy5RWawlA%2B0%2FLflc0TB19LVZU0HLhSNeBgWP26xYd6z%2BPFkURXUMmsAjM%2FEekhem1NOx72uGabr7%2F2rZcDOcygU%2FGeU6GdqPWb4BuN%2Fvr%2BgwHAcBzb0fwdCm3WpxrUlJ03ToyW9Vd3L3WR2gwxmiL8O%2FjEeCx0CQKnBz6R%2BRReIyWsuNdYHFfOQmSRrn8uUDlf0eAbvdXSrUnhHR2Faj1lrtYkw1MS11rWY%2FGQ2QxJUwZyKgJdhEbEM2LWbFqQjdcUvarzzHiLyf5pGAX8YQo4dLvLmMEMGsCvVj7LpW4wBtF%2BVe4zGUcmNYg%2Bqwu4QgqTkSH6HyF52nuLo9ohnoncT7isf%2FMRMx5T4Pz6CSmnszxMuV5PujgEbk%2F60ZLOvii%2FatyyvtvRMasy4KlwjhJhDAvyz7bzjnaxxi7y2Nn8NBT4obbIG99W4EYuoPlAZgAUHWvlSIkc%2B8xuSf5Lo8D5iXA287nH%2Fq%2BDFD2CwC5E1Iop3veItOopgqlozNgSm84K3wWljNp7KevEcXx78gxlVJOXfU3PXfdOR6XgVX%2FTd8cwSr4ndQKlSkYwwow5NOawQY6pgEdw8sWnrQH7QxhUt8q5u1ddWtqAZTBNMgGyWD4aDMJ%2BAJHatVqzbbXXB1tAecEtqA38tGvAXPc%2B2vzuzRHalQ4Pwpve9ZTBdmJ7YDwOMYlb3o2kmoznxjdEfLENMsMATpH1smdy6wQmhfhOqwg0DAz6wf428rBtqSc2qCbWJXxzJxmdGhH7%2FlpQrW2aSFqsz7N%2BxSNcIdvGCpoAE2pKFUSIKzc5YW0&X-Amz-Signature=2d20c2909bb2a562f942b196ffd445550dc299991e8dbb12548d41b0552234a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA32ABJK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo117UBltfq0acwmbjw3TzIVrvmF46XYzsvA6DbMkaTAiACgQUzJomKKSlsY4NX81tsYj29bMSsuvexeEa6ICjsaSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMh17ejuSHHJyXNUlgKtwD%2FMiBcZTvH9selRqM%2FwlwPNXB4s0hjxpDlhyboQP6DddXtedU3Ja9rEvKqCznMCaRy5RWawlA%2B0%2FLflc0TB19LVZU0HLhSNeBgWP26xYd6z%2BPFkURXUMmsAjM%2FEekhem1NOx72uGabr7%2F2rZcDOcygU%2FGeU6GdqPWb4BuN%2Fvr%2BgwHAcBzb0fwdCm3WpxrUlJ03ToyW9Vd3L3WR2gwxmiL8O%2FjEeCx0CQKnBz6R%2BRReIyWsuNdYHFfOQmSRrn8uUDlf0eAbvdXSrUnhHR2Faj1lrtYkw1MS11rWY%2FGQ2QxJUwZyKgJdhEbEM2LWbFqQjdcUvarzzHiLyf5pGAX8YQo4dLvLmMEMGsCvVj7LpW4wBtF%2BVe4zGUcmNYg%2Bqwu4QgqTkSH6HyF52nuLo9ohnoncT7isf%2FMRMx5T4Pz6CSmnszxMuV5PujgEbk%2F60ZLOvii%2FatyyvtvRMasy4KlwjhJhDAvyz7bzjnaxxi7y2Nn8NBT4obbIG99W4EYuoPlAZgAUHWvlSIkc%2B8xuSf5Lo8D5iXA287nH%2Fq%2BDFD2CwC5E1Iop3veItOopgqlozNgSm84K3wWljNp7KevEcXx78gxlVJOXfU3PXfdOR6XgVX%2FTd8cwSr4ndQKlSkYwwow5NOawQY6pgEdw8sWnrQH7QxhUt8q5u1ddWtqAZTBNMgGyWD4aDMJ%2BAJHatVqzbbXXB1tAecEtqA38tGvAXPc%2B2vzuzRHalQ4Pwpve9ZTBdmJ7YDwOMYlb3o2kmoznxjdEfLENMsMATpH1smdy6wQmhfhOqwg0DAz6wf428rBtqSc2qCbWJXxzJxmdGhH7%2FlpQrW2aSFqsz7N%2BxSNcIdvGCpoAE2pKFUSIKzc5YW0&X-Amz-Signature=8de3eefe6d27afb8ff918b1b84330c7ae31706a572c54cd87c6a284fd0b0fb6b&X-Amz-SignedHeaders=host&x-id=GetObject)
