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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVGIANFP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbLqNx2nSgSAgT5jjokXwW2tOYNv%2FatgpnlMKKz3ha4AiAcuurH502144UIeE1%2BWiuNQlUCpNQwIhhZ8TUhn24TpSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMppp3zfa2J2dqVA2iKtwDFT1oBY2O3eBdBPk3jjE6I3yQQXhwCDjw9ZeUQywqtDOOea69zqw905bMdyvIU3Zq3v8jK0JyPvG7lt3tdMRFYIFsvMk%2FKsUlJIBqYoumTE7pu75V5UeWFY4lFGtDbeuUFyPOmUX1G7j%2BHz0crAIRWFGWB11x3KZ2ZkBieHgRiGye97loLigj%2FwsNipkReMqaKtCgqSwKU08RkYBqg5qE%2BiiypuAR2SuYc1%2FB5F%2FQJWtkfPUGfkFoAPiHXwzQiDkujLNHNxcvHnlbaI6bP9%2BI6TW%2B24m2PX76vttQgjiIl6%2Fum9PnS%2BV2EmwRfmN%2FeEjGN2xg9ZO4AppLVYirRRp%2F0wTBum2SC%2FxE%2BMTS4pU4Bu3ruByiSKhh0s9pdt9nCmXidfhN06tUCkC8fFp9%2FQ0RpsDwuAf7QAjjqLFQnuD5GL8qdLSIqTPzLOSp3DPeODQtNv1ACfeVQPTloa64DTXLk3yo8qQBYQXjxUanX0100No1Rya4gFySJxDYojilM9OTI0B3i2xrV1Ecm6ujq%2F2KjTqF0b5%2B28lqLw%2F7lCAcZpv6LqavOziwaShndDhAcsMbmdifZ2gkL11Bgztr17SbE%2FVs6lfUAawjBfq3oMM0LPUCeayRL9qoTqjnewQw29SCvQY6pgGX%2BVY71UiCfOT%2BugyDh2zjUbrWiGkkSihVo5zpe0aYZsqJzBlgzxXHt7zlfOmXDb6vvs1FTRIk4jFMYzF%2BPQy2kSDFT1ZS7b%2BOmEo3BI2hSV3%2BpO97dPyLMoY%2BnCPVOrmJmvCJa5hiOSPoJtUVY0%2B8IiHhlf%2BK21WLqlVAMEPxgGOAph4SfRXqWbXH3hlkFhZYEBbjzoQ6fNOyBJIPGWcuUn%2BNI%2FZq&X-Amz-Signature=21f04cfe10d6bb1f5bafa7cff79abaf558adb1e318f839ee52b9265eb0b86db6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVGIANFP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbLqNx2nSgSAgT5jjokXwW2tOYNv%2FatgpnlMKKz3ha4AiAcuurH502144UIeE1%2BWiuNQlUCpNQwIhhZ8TUhn24TpSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMppp3zfa2J2dqVA2iKtwDFT1oBY2O3eBdBPk3jjE6I3yQQXhwCDjw9ZeUQywqtDOOea69zqw905bMdyvIU3Zq3v8jK0JyPvG7lt3tdMRFYIFsvMk%2FKsUlJIBqYoumTE7pu75V5UeWFY4lFGtDbeuUFyPOmUX1G7j%2BHz0crAIRWFGWB11x3KZ2ZkBieHgRiGye97loLigj%2FwsNipkReMqaKtCgqSwKU08RkYBqg5qE%2BiiypuAR2SuYc1%2FB5F%2FQJWtkfPUGfkFoAPiHXwzQiDkujLNHNxcvHnlbaI6bP9%2BI6TW%2B24m2PX76vttQgjiIl6%2Fum9PnS%2BV2EmwRfmN%2FeEjGN2xg9ZO4AppLVYirRRp%2F0wTBum2SC%2FxE%2BMTS4pU4Bu3ruByiSKhh0s9pdt9nCmXidfhN06tUCkC8fFp9%2FQ0RpsDwuAf7QAjjqLFQnuD5GL8qdLSIqTPzLOSp3DPeODQtNv1ACfeVQPTloa64DTXLk3yo8qQBYQXjxUanX0100No1Rya4gFySJxDYojilM9OTI0B3i2xrV1Ecm6ujq%2F2KjTqF0b5%2B28lqLw%2F7lCAcZpv6LqavOziwaShndDhAcsMbmdifZ2gkL11Bgztr17SbE%2FVs6lfUAawjBfq3oMM0LPUCeayRL9qoTqjnewQw29SCvQY6pgGX%2BVY71UiCfOT%2BugyDh2zjUbrWiGkkSihVo5zpe0aYZsqJzBlgzxXHt7zlfOmXDb6vvs1FTRIk4jFMYzF%2BPQy2kSDFT1ZS7b%2BOmEo3BI2hSV3%2BpO97dPyLMoY%2BnCPVOrmJmvCJa5hiOSPoJtUVY0%2B8IiHhlf%2BK21WLqlVAMEPxgGOAph4SfRXqWbXH3hlkFhZYEBbjzoQ6fNOyBJIPGWcuUn%2BNI%2FZq&X-Amz-Signature=8c1bca8a30aa4ea0c25d77dbda654bbc60edd5ef9d25402f1fad583089466880&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVGIANFP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbLqNx2nSgSAgT5jjokXwW2tOYNv%2FatgpnlMKKz3ha4AiAcuurH502144UIeE1%2BWiuNQlUCpNQwIhhZ8TUhn24TpSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMppp3zfa2J2dqVA2iKtwDFT1oBY2O3eBdBPk3jjE6I3yQQXhwCDjw9ZeUQywqtDOOea69zqw905bMdyvIU3Zq3v8jK0JyPvG7lt3tdMRFYIFsvMk%2FKsUlJIBqYoumTE7pu75V5UeWFY4lFGtDbeuUFyPOmUX1G7j%2BHz0crAIRWFGWB11x3KZ2ZkBieHgRiGye97loLigj%2FwsNipkReMqaKtCgqSwKU08RkYBqg5qE%2BiiypuAR2SuYc1%2FB5F%2FQJWtkfPUGfkFoAPiHXwzQiDkujLNHNxcvHnlbaI6bP9%2BI6TW%2B24m2PX76vttQgjiIl6%2Fum9PnS%2BV2EmwRfmN%2FeEjGN2xg9ZO4AppLVYirRRp%2F0wTBum2SC%2FxE%2BMTS4pU4Bu3ruByiSKhh0s9pdt9nCmXidfhN06tUCkC8fFp9%2FQ0RpsDwuAf7QAjjqLFQnuD5GL8qdLSIqTPzLOSp3DPeODQtNv1ACfeVQPTloa64DTXLk3yo8qQBYQXjxUanX0100No1Rya4gFySJxDYojilM9OTI0B3i2xrV1Ecm6ujq%2F2KjTqF0b5%2B28lqLw%2F7lCAcZpv6LqavOziwaShndDhAcsMbmdifZ2gkL11Bgztr17SbE%2FVs6lfUAawjBfq3oMM0LPUCeayRL9qoTqjnewQw29SCvQY6pgGX%2BVY71UiCfOT%2BugyDh2zjUbrWiGkkSihVo5zpe0aYZsqJzBlgzxXHt7zlfOmXDb6vvs1FTRIk4jFMYzF%2BPQy2kSDFT1ZS7b%2BOmEo3BI2hSV3%2BpO97dPyLMoY%2BnCPVOrmJmvCJa5hiOSPoJtUVY0%2B8IiHhlf%2BK21WLqlVAMEPxgGOAph4SfRXqWbXH3hlkFhZYEBbjzoQ6fNOyBJIPGWcuUn%2BNI%2FZq&X-Amz-Signature=cf42228ac21c101d3a720e4e5c2658f024a89503a1ad50f9062651f1a1aae499&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVGIANFP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbLqNx2nSgSAgT5jjokXwW2tOYNv%2FatgpnlMKKz3ha4AiAcuurH502144UIeE1%2BWiuNQlUCpNQwIhhZ8TUhn24TpSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMppp3zfa2J2dqVA2iKtwDFT1oBY2O3eBdBPk3jjE6I3yQQXhwCDjw9ZeUQywqtDOOea69zqw905bMdyvIU3Zq3v8jK0JyPvG7lt3tdMRFYIFsvMk%2FKsUlJIBqYoumTE7pu75V5UeWFY4lFGtDbeuUFyPOmUX1G7j%2BHz0crAIRWFGWB11x3KZ2ZkBieHgRiGye97loLigj%2FwsNipkReMqaKtCgqSwKU08RkYBqg5qE%2BiiypuAR2SuYc1%2FB5F%2FQJWtkfPUGfkFoAPiHXwzQiDkujLNHNxcvHnlbaI6bP9%2BI6TW%2B24m2PX76vttQgjiIl6%2Fum9PnS%2BV2EmwRfmN%2FeEjGN2xg9ZO4AppLVYirRRp%2F0wTBum2SC%2FxE%2BMTS4pU4Bu3ruByiSKhh0s9pdt9nCmXidfhN06tUCkC8fFp9%2FQ0RpsDwuAf7QAjjqLFQnuD5GL8qdLSIqTPzLOSp3DPeODQtNv1ACfeVQPTloa64DTXLk3yo8qQBYQXjxUanX0100No1Rya4gFySJxDYojilM9OTI0B3i2xrV1Ecm6ujq%2F2KjTqF0b5%2B28lqLw%2F7lCAcZpv6LqavOziwaShndDhAcsMbmdifZ2gkL11Bgztr17SbE%2FVs6lfUAawjBfq3oMM0LPUCeayRL9qoTqjnewQw29SCvQY6pgGX%2BVY71UiCfOT%2BugyDh2zjUbrWiGkkSihVo5zpe0aYZsqJzBlgzxXHt7zlfOmXDb6vvs1FTRIk4jFMYzF%2BPQy2kSDFT1ZS7b%2BOmEo3BI2hSV3%2BpO97dPyLMoY%2BnCPVOrmJmvCJa5hiOSPoJtUVY0%2B8IiHhlf%2BK21WLqlVAMEPxgGOAph4SfRXqWbXH3hlkFhZYEBbjzoQ6fNOyBJIPGWcuUn%2BNI%2FZq&X-Amz-Signature=477c20df2337795e52cf5b0d222a019e09490abcd0dfe4f479e1e9a4c620cdd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVGIANFP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbLqNx2nSgSAgT5jjokXwW2tOYNv%2FatgpnlMKKz3ha4AiAcuurH502144UIeE1%2BWiuNQlUCpNQwIhhZ8TUhn24TpSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMppp3zfa2J2dqVA2iKtwDFT1oBY2O3eBdBPk3jjE6I3yQQXhwCDjw9ZeUQywqtDOOea69zqw905bMdyvIU3Zq3v8jK0JyPvG7lt3tdMRFYIFsvMk%2FKsUlJIBqYoumTE7pu75V5UeWFY4lFGtDbeuUFyPOmUX1G7j%2BHz0crAIRWFGWB11x3KZ2ZkBieHgRiGye97loLigj%2FwsNipkReMqaKtCgqSwKU08RkYBqg5qE%2BiiypuAR2SuYc1%2FB5F%2FQJWtkfPUGfkFoAPiHXwzQiDkujLNHNxcvHnlbaI6bP9%2BI6TW%2B24m2PX76vttQgjiIl6%2Fum9PnS%2BV2EmwRfmN%2FeEjGN2xg9ZO4AppLVYirRRp%2F0wTBum2SC%2FxE%2BMTS4pU4Bu3ruByiSKhh0s9pdt9nCmXidfhN06tUCkC8fFp9%2FQ0RpsDwuAf7QAjjqLFQnuD5GL8qdLSIqTPzLOSp3DPeODQtNv1ACfeVQPTloa64DTXLk3yo8qQBYQXjxUanX0100No1Rya4gFySJxDYojilM9OTI0B3i2xrV1Ecm6ujq%2F2KjTqF0b5%2B28lqLw%2F7lCAcZpv6LqavOziwaShndDhAcsMbmdifZ2gkL11Bgztr17SbE%2FVs6lfUAawjBfq3oMM0LPUCeayRL9qoTqjnewQw29SCvQY6pgGX%2BVY71UiCfOT%2BugyDh2zjUbrWiGkkSihVo5zpe0aYZsqJzBlgzxXHt7zlfOmXDb6vvs1FTRIk4jFMYzF%2BPQy2kSDFT1ZS7b%2BOmEo3BI2hSV3%2BpO97dPyLMoY%2BnCPVOrmJmvCJa5hiOSPoJtUVY0%2B8IiHhlf%2BK21WLqlVAMEPxgGOAph4SfRXqWbXH3hlkFhZYEBbjzoQ6fNOyBJIPGWcuUn%2BNI%2FZq&X-Amz-Signature=f16ae67e2c7982598cf809c6b35a10036ad5fddaef5c6793889944531ded2cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVGIANFP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbLqNx2nSgSAgT5jjokXwW2tOYNv%2FatgpnlMKKz3ha4AiAcuurH502144UIeE1%2BWiuNQlUCpNQwIhhZ8TUhn24TpSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMppp3zfa2J2dqVA2iKtwDFT1oBY2O3eBdBPk3jjE6I3yQQXhwCDjw9ZeUQywqtDOOea69zqw905bMdyvIU3Zq3v8jK0JyPvG7lt3tdMRFYIFsvMk%2FKsUlJIBqYoumTE7pu75V5UeWFY4lFGtDbeuUFyPOmUX1G7j%2BHz0crAIRWFGWB11x3KZ2ZkBieHgRiGye97loLigj%2FwsNipkReMqaKtCgqSwKU08RkYBqg5qE%2BiiypuAR2SuYc1%2FB5F%2FQJWtkfPUGfkFoAPiHXwzQiDkujLNHNxcvHnlbaI6bP9%2BI6TW%2B24m2PX76vttQgjiIl6%2Fum9PnS%2BV2EmwRfmN%2FeEjGN2xg9ZO4AppLVYirRRp%2F0wTBum2SC%2FxE%2BMTS4pU4Bu3ruByiSKhh0s9pdt9nCmXidfhN06tUCkC8fFp9%2FQ0RpsDwuAf7QAjjqLFQnuD5GL8qdLSIqTPzLOSp3DPeODQtNv1ACfeVQPTloa64DTXLk3yo8qQBYQXjxUanX0100No1Rya4gFySJxDYojilM9OTI0B3i2xrV1Ecm6ujq%2F2KjTqF0b5%2B28lqLw%2F7lCAcZpv6LqavOziwaShndDhAcsMbmdifZ2gkL11Bgztr17SbE%2FVs6lfUAawjBfq3oMM0LPUCeayRL9qoTqjnewQw29SCvQY6pgGX%2BVY71UiCfOT%2BugyDh2zjUbrWiGkkSihVo5zpe0aYZsqJzBlgzxXHt7zlfOmXDb6vvs1FTRIk4jFMYzF%2BPQy2kSDFT1ZS7b%2BOmEo3BI2hSV3%2BpO97dPyLMoY%2BnCPVOrmJmvCJa5hiOSPoJtUVY0%2B8IiHhlf%2BK21WLqlVAMEPxgGOAph4SfRXqWbXH3hlkFhZYEBbjzoQ6fNOyBJIPGWcuUn%2BNI%2FZq&X-Amz-Signature=1b118e9b153eb46112124e09ddcf8c0eade625d51e96e10e0c94017013a13478&X-Amz-SignedHeaders=host&x-id=GetObject)
