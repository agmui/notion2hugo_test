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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REI6YXAJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC11HM2Peo%2FFKaSZzcPumq%2FA3Kp0GXvVk2l724db9rVwgIhAOYdpOx2BqyJ3G%2BThsCug9norT6qLdCuvnezS34kmL7IKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87rvbvq42Xw1FIc0q3ANQewyiqdUNna8mBvwb2gW3DWdYROBaAGSb2Wr5yrZ4Zpt9p12bAnOQSjwhvCfiaiH29IgBSTvUMcBqnuuWVdGV8ORm%2Ba2kGjhzicc6v0iqaPNP9vl%2BdDsz7YkGYIfKKkWjFZSa2nTbcQPdPZsisDRlPL61jqDC3dh6etsvFdWZ8DuZaqsKZdxUbrKmP3N%2F1OIR%2F8fyYb%2B3D5HWgUcEvycsHvoNkZINXRYNZu8Y60K7OihYbjM5nhUfuKGB0gV2rvaVuoKLy%2FpkS%2BIClxlGcm8wlUT1YiZK6Prb4%2B9HyMIJ6Lk8BjDoLgN0i5fzOCgwxdORKAzkKfpcpukkQKeQ%2FHs7hGKlpjgv4TQ%2F3eOkPLyB9rO0EA4HiptJTIvU8f1KRx4YgqbT%2FZdx3rDi%2FUTL9WYR0wgwwnU1zd%2Fzz%2ForOK5f60W6YmezDr07LhhRLEzxA7x%2FwYS7fc%2BFu4elETsCHpimAy%2FZyR2fdezNYhAMxrIZjjv6WUXyplcxnuGVZpDM%2F6Xl77ErttVEfjRGJnUeoREeAdRENrwgxpAA5jlkMZK1ifALBRv2X37NeAdCTOcIyR6yu%2BfBtfXUxOJAof3aydPVP9vuSQbDBPxAa02PLRoBCmSx7IRbJJscbSOKhjCpqrS%2FBjqkAfvYm11OK074jFDt%2FZzARcexur8FwVLoxlmbznGZKcfD59rxO4SsZHtQuCF9mImrVdjoG2Yl5sKDeUub%2FkWuujL5VIrTkUTembkpWoF7udzce20U47%2B7PGay9iYbj78WutL7PeQvlXWTJYMkIXjvRWnWyqAPQ010rTrHe7waqTxOZWIZL4IOp5Y37X1hafL9ExYYEId0%2BgNI2FduqrQW3KV%2BpeJk&X-Amz-Signature=cb75b155b3b9b57853b83130f82a9b672ecb45362df37db1ecc7f0c13a7d3a47&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REI6YXAJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC11HM2Peo%2FFKaSZzcPumq%2FA3Kp0GXvVk2l724db9rVwgIhAOYdpOx2BqyJ3G%2BThsCug9norT6qLdCuvnezS34kmL7IKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87rvbvq42Xw1FIc0q3ANQewyiqdUNna8mBvwb2gW3DWdYROBaAGSb2Wr5yrZ4Zpt9p12bAnOQSjwhvCfiaiH29IgBSTvUMcBqnuuWVdGV8ORm%2Ba2kGjhzicc6v0iqaPNP9vl%2BdDsz7YkGYIfKKkWjFZSa2nTbcQPdPZsisDRlPL61jqDC3dh6etsvFdWZ8DuZaqsKZdxUbrKmP3N%2F1OIR%2F8fyYb%2B3D5HWgUcEvycsHvoNkZINXRYNZu8Y60K7OihYbjM5nhUfuKGB0gV2rvaVuoKLy%2FpkS%2BIClxlGcm8wlUT1YiZK6Prb4%2B9HyMIJ6Lk8BjDoLgN0i5fzOCgwxdORKAzkKfpcpukkQKeQ%2FHs7hGKlpjgv4TQ%2F3eOkPLyB9rO0EA4HiptJTIvU8f1KRx4YgqbT%2FZdx3rDi%2FUTL9WYR0wgwwnU1zd%2Fzz%2ForOK5f60W6YmezDr07LhhRLEzxA7x%2FwYS7fc%2BFu4elETsCHpimAy%2FZyR2fdezNYhAMxrIZjjv6WUXyplcxnuGVZpDM%2F6Xl77ErttVEfjRGJnUeoREeAdRENrwgxpAA5jlkMZK1ifALBRv2X37NeAdCTOcIyR6yu%2BfBtfXUxOJAof3aydPVP9vuSQbDBPxAa02PLRoBCmSx7IRbJJscbSOKhjCpqrS%2FBjqkAfvYm11OK074jFDt%2FZzARcexur8FwVLoxlmbznGZKcfD59rxO4SsZHtQuCF9mImrVdjoG2Yl5sKDeUub%2FkWuujL5VIrTkUTembkpWoF7udzce20U47%2B7PGay9iYbj78WutL7PeQvlXWTJYMkIXjvRWnWyqAPQ010rTrHe7waqTxOZWIZL4IOp5Y37X1hafL9ExYYEId0%2BgNI2FduqrQW3KV%2BpeJk&X-Amz-Signature=f502e3bd787c22b4bd6488230efdc3e7236623c777047c0fc75cf7103a4fcf5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REI6YXAJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC11HM2Peo%2FFKaSZzcPumq%2FA3Kp0GXvVk2l724db9rVwgIhAOYdpOx2BqyJ3G%2BThsCug9norT6qLdCuvnezS34kmL7IKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87rvbvq42Xw1FIc0q3ANQewyiqdUNna8mBvwb2gW3DWdYROBaAGSb2Wr5yrZ4Zpt9p12bAnOQSjwhvCfiaiH29IgBSTvUMcBqnuuWVdGV8ORm%2Ba2kGjhzicc6v0iqaPNP9vl%2BdDsz7YkGYIfKKkWjFZSa2nTbcQPdPZsisDRlPL61jqDC3dh6etsvFdWZ8DuZaqsKZdxUbrKmP3N%2F1OIR%2F8fyYb%2B3D5HWgUcEvycsHvoNkZINXRYNZu8Y60K7OihYbjM5nhUfuKGB0gV2rvaVuoKLy%2FpkS%2BIClxlGcm8wlUT1YiZK6Prb4%2B9HyMIJ6Lk8BjDoLgN0i5fzOCgwxdORKAzkKfpcpukkQKeQ%2FHs7hGKlpjgv4TQ%2F3eOkPLyB9rO0EA4HiptJTIvU8f1KRx4YgqbT%2FZdx3rDi%2FUTL9WYR0wgwwnU1zd%2Fzz%2ForOK5f60W6YmezDr07LhhRLEzxA7x%2FwYS7fc%2BFu4elETsCHpimAy%2FZyR2fdezNYhAMxrIZjjv6WUXyplcxnuGVZpDM%2F6Xl77ErttVEfjRGJnUeoREeAdRENrwgxpAA5jlkMZK1ifALBRv2X37NeAdCTOcIyR6yu%2BfBtfXUxOJAof3aydPVP9vuSQbDBPxAa02PLRoBCmSx7IRbJJscbSOKhjCpqrS%2FBjqkAfvYm11OK074jFDt%2FZzARcexur8FwVLoxlmbznGZKcfD59rxO4SsZHtQuCF9mImrVdjoG2Yl5sKDeUub%2FkWuujL5VIrTkUTembkpWoF7udzce20U47%2B7PGay9iYbj78WutL7PeQvlXWTJYMkIXjvRWnWyqAPQ010rTrHe7waqTxOZWIZL4IOp5Y37X1hafL9ExYYEId0%2BgNI2FduqrQW3KV%2BpeJk&X-Amz-Signature=41a04f97061c47a3e6b4fdfb62bf51d076f1a06aff7ce7f542d5e611c95c003b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REI6YXAJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC11HM2Peo%2FFKaSZzcPumq%2FA3Kp0GXvVk2l724db9rVwgIhAOYdpOx2BqyJ3G%2BThsCug9norT6qLdCuvnezS34kmL7IKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87rvbvq42Xw1FIc0q3ANQewyiqdUNna8mBvwb2gW3DWdYROBaAGSb2Wr5yrZ4Zpt9p12bAnOQSjwhvCfiaiH29IgBSTvUMcBqnuuWVdGV8ORm%2Ba2kGjhzicc6v0iqaPNP9vl%2BdDsz7YkGYIfKKkWjFZSa2nTbcQPdPZsisDRlPL61jqDC3dh6etsvFdWZ8DuZaqsKZdxUbrKmP3N%2F1OIR%2F8fyYb%2B3D5HWgUcEvycsHvoNkZINXRYNZu8Y60K7OihYbjM5nhUfuKGB0gV2rvaVuoKLy%2FpkS%2BIClxlGcm8wlUT1YiZK6Prb4%2B9HyMIJ6Lk8BjDoLgN0i5fzOCgwxdORKAzkKfpcpukkQKeQ%2FHs7hGKlpjgv4TQ%2F3eOkPLyB9rO0EA4HiptJTIvU8f1KRx4YgqbT%2FZdx3rDi%2FUTL9WYR0wgwwnU1zd%2Fzz%2ForOK5f60W6YmezDr07LhhRLEzxA7x%2FwYS7fc%2BFu4elETsCHpimAy%2FZyR2fdezNYhAMxrIZjjv6WUXyplcxnuGVZpDM%2F6Xl77ErttVEfjRGJnUeoREeAdRENrwgxpAA5jlkMZK1ifALBRv2X37NeAdCTOcIyR6yu%2BfBtfXUxOJAof3aydPVP9vuSQbDBPxAa02PLRoBCmSx7IRbJJscbSOKhjCpqrS%2FBjqkAfvYm11OK074jFDt%2FZzARcexur8FwVLoxlmbznGZKcfD59rxO4SsZHtQuCF9mImrVdjoG2Yl5sKDeUub%2FkWuujL5VIrTkUTembkpWoF7udzce20U47%2B7PGay9iYbj78WutL7PeQvlXWTJYMkIXjvRWnWyqAPQ010rTrHe7waqTxOZWIZL4IOp5Y37X1hafL9ExYYEId0%2BgNI2FduqrQW3KV%2BpeJk&X-Amz-Signature=54acab2c92fc657aa6bc0db63cfbb13ca49836c8165a17826ed593de8476673c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REI6YXAJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC11HM2Peo%2FFKaSZzcPumq%2FA3Kp0GXvVk2l724db9rVwgIhAOYdpOx2BqyJ3G%2BThsCug9norT6qLdCuvnezS34kmL7IKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87rvbvq42Xw1FIc0q3ANQewyiqdUNna8mBvwb2gW3DWdYROBaAGSb2Wr5yrZ4Zpt9p12bAnOQSjwhvCfiaiH29IgBSTvUMcBqnuuWVdGV8ORm%2Ba2kGjhzicc6v0iqaPNP9vl%2BdDsz7YkGYIfKKkWjFZSa2nTbcQPdPZsisDRlPL61jqDC3dh6etsvFdWZ8DuZaqsKZdxUbrKmP3N%2F1OIR%2F8fyYb%2B3D5HWgUcEvycsHvoNkZINXRYNZu8Y60K7OihYbjM5nhUfuKGB0gV2rvaVuoKLy%2FpkS%2BIClxlGcm8wlUT1YiZK6Prb4%2B9HyMIJ6Lk8BjDoLgN0i5fzOCgwxdORKAzkKfpcpukkQKeQ%2FHs7hGKlpjgv4TQ%2F3eOkPLyB9rO0EA4HiptJTIvU8f1KRx4YgqbT%2FZdx3rDi%2FUTL9WYR0wgwwnU1zd%2Fzz%2ForOK5f60W6YmezDr07LhhRLEzxA7x%2FwYS7fc%2BFu4elETsCHpimAy%2FZyR2fdezNYhAMxrIZjjv6WUXyplcxnuGVZpDM%2F6Xl77ErttVEfjRGJnUeoREeAdRENrwgxpAA5jlkMZK1ifALBRv2X37NeAdCTOcIyR6yu%2BfBtfXUxOJAof3aydPVP9vuSQbDBPxAa02PLRoBCmSx7IRbJJscbSOKhjCpqrS%2FBjqkAfvYm11OK074jFDt%2FZzARcexur8FwVLoxlmbznGZKcfD59rxO4SsZHtQuCF9mImrVdjoG2Yl5sKDeUub%2FkWuujL5VIrTkUTembkpWoF7udzce20U47%2B7PGay9iYbj78WutL7PeQvlXWTJYMkIXjvRWnWyqAPQ010rTrHe7waqTxOZWIZL4IOp5Y37X1hafL9ExYYEId0%2BgNI2FduqrQW3KV%2BpeJk&X-Amz-Signature=2f57a735ffeb2f48cb88749c8c9c3282e9368aa99d779da278f4b3a9d2585c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REI6YXAJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC11HM2Peo%2FFKaSZzcPumq%2FA3Kp0GXvVk2l724db9rVwgIhAOYdpOx2BqyJ3G%2BThsCug9norT6qLdCuvnezS34kmL7IKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87rvbvq42Xw1FIc0q3ANQewyiqdUNna8mBvwb2gW3DWdYROBaAGSb2Wr5yrZ4Zpt9p12bAnOQSjwhvCfiaiH29IgBSTvUMcBqnuuWVdGV8ORm%2Ba2kGjhzicc6v0iqaPNP9vl%2BdDsz7YkGYIfKKkWjFZSa2nTbcQPdPZsisDRlPL61jqDC3dh6etsvFdWZ8DuZaqsKZdxUbrKmP3N%2F1OIR%2F8fyYb%2B3D5HWgUcEvycsHvoNkZINXRYNZu8Y60K7OihYbjM5nhUfuKGB0gV2rvaVuoKLy%2FpkS%2BIClxlGcm8wlUT1YiZK6Prb4%2B9HyMIJ6Lk8BjDoLgN0i5fzOCgwxdORKAzkKfpcpukkQKeQ%2FHs7hGKlpjgv4TQ%2F3eOkPLyB9rO0EA4HiptJTIvU8f1KRx4YgqbT%2FZdx3rDi%2FUTL9WYR0wgwwnU1zd%2Fzz%2ForOK5f60W6YmezDr07LhhRLEzxA7x%2FwYS7fc%2BFu4elETsCHpimAy%2FZyR2fdezNYhAMxrIZjjv6WUXyplcxnuGVZpDM%2F6Xl77ErttVEfjRGJnUeoREeAdRENrwgxpAA5jlkMZK1ifALBRv2X37NeAdCTOcIyR6yu%2BfBtfXUxOJAof3aydPVP9vuSQbDBPxAa02PLRoBCmSx7IRbJJscbSOKhjCpqrS%2FBjqkAfvYm11OK074jFDt%2FZzARcexur8FwVLoxlmbznGZKcfD59rxO4SsZHtQuCF9mImrVdjoG2Yl5sKDeUub%2FkWuujL5VIrTkUTembkpWoF7udzce20U47%2B7PGay9iYbj78WutL7PeQvlXWTJYMkIXjvRWnWyqAPQ010rTrHe7waqTxOZWIZL4IOp5Y37X1hafL9ExYYEId0%2BgNI2FduqrQW3KV%2BpeJk&X-Amz-Signature=f2412d8139e28fad0786ba81c9744c86bca1674033d1b582da5b44733f69c1e4&X-Amz-SignedHeaders=host&x-id=GetObject)
