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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKBFM4Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDA3X46enDXlpofYgzPZkoxVaUMj%2BXFEPk3kgUcEOkWYAiEAwASwmdGwO580LkG33GNoBwcjiIQQ8rlj1qX3vpxibCgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGy9vu0V%2FnY8xzojyrcA6WlCYXkhWYG0n3rAg9U0cyAq0c8rZhsbJIGMwMDsB5H0oD9saTlwv3TMMsBNvZH389J8XScibEYm1rliDFIEeyb9TIw8DSVGOJTW21DmdI%2FdlykWpsz6CFPuaTDG%2FjMG9N1qXA4iS7%2BmK%2FeGlOGx0535bW32TgZE%2BVXoDFMbUCtyxhqtskpHLFyihRRWkwmDQz5ERi4rjyJPK6AddFYdAB9sWtawTe9hCYJ5KqVkm%2BD0vsasnCmBifj86MjD6yK0m%2Fgo81ZJ29oUeVjoDEQxlP0ZevmVl%2Fdd4k0yzOjqRkVnlCkVvQ2lyJDx8%2B09%2F%2B3LrS0WmNFrm9y0h8%2BrZGeUhj8G77Hn05FEEEy%2FQEBCA1LtDVgyEipL8L5o8e0WlcAV21Rp5Zgc7AF9q6lqyQ1NSjpCqxUxyR9rgw39PAvpOiMmYIggWv%2FtZmdtLHuhw9b6GEWwTZQRPFevL4f2lGfSv6AXaKnG8l4AfY%2BjpKQiYaS2%2BiRenqcfaar9DqvXvc1p%2BKjS0M7kT%2BiuEhR%2Fo79rXqObBur2%2FRFNh4%2Fp2gsRmIELB96FmoBhf6wisep2%2BJ%2FNfRgvq%2BTtG3TDXH%2Fbq1Ax1hAr%2Fh1UpVYhS9PakKLigtGAXRn3SLYI4ErWcA%2FMK2J778GOqUBndTR1MzJOTbd%2FZS6Q%2FEMw9jr%2BJKwlzF27UScwAdz7L8%2BdCiSne%2B72GNivBsK7Axkvrh%2Fzskp%2FhHs%2F3oHbxXaFlhBl%2FfsfcAjnpyVWw%2BFjNgzl4dzYtSCa4Te8oL1S5YKE6tBPe%2FSyOwVhuZ3ZUZa7kd52hIMrcCf%2FXyqo1tawLBEQ5HXZdN5kZhRTd99P1MEvP2n8Kibko4G5RH3JQkc5%2FtecP44&X-Amz-Signature=89bc41bb369ec0fc7432ab8f158f50715c3964b8de1f4e3512cad8ede54ca710&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKBFM4Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDA3X46enDXlpofYgzPZkoxVaUMj%2BXFEPk3kgUcEOkWYAiEAwASwmdGwO580LkG33GNoBwcjiIQQ8rlj1qX3vpxibCgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGy9vu0V%2FnY8xzojyrcA6WlCYXkhWYG0n3rAg9U0cyAq0c8rZhsbJIGMwMDsB5H0oD9saTlwv3TMMsBNvZH389J8XScibEYm1rliDFIEeyb9TIw8DSVGOJTW21DmdI%2FdlykWpsz6CFPuaTDG%2FjMG9N1qXA4iS7%2BmK%2FeGlOGx0535bW32TgZE%2BVXoDFMbUCtyxhqtskpHLFyihRRWkwmDQz5ERi4rjyJPK6AddFYdAB9sWtawTe9hCYJ5KqVkm%2BD0vsasnCmBifj86MjD6yK0m%2Fgo81ZJ29oUeVjoDEQxlP0ZevmVl%2Fdd4k0yzOjqRkVnlCkVvQ2lyJDx8%2B09%2F%2B3LrS0WmNFrm9y0h8%2BrZGeUhj8G77Hn05FEEEy%2FQEBCA1LtDVgyEipL8L5o8e0WlcAV21Rp5Zgc7AF9q6lqyQ1NSjpCqxUxyR9rgw39PAvpOiMmYIggWv%2FtZmdtLHuhw9b6GEWwTZQRPFevL4f2lGfSv6AXaKnG8l4AfY%2BjpKQiYaS2%2BiRenqcfaar9DqvXvc1p%2BKjS0M7kT%2BiuEhR%2Fo79rXqObBur2%2FRFNh4%2Fp2gsRmIELB96FmoBhf6wisep2%2BJ%2FNfRgvq%2BTtG3TDXH%2Fbq1Ax1hAr%2Fh1UpVYhS9PakKLigtGAXRn3SLYI4ErWcA%2FMK2J778GOqUBndTR1MzJOTbd%2FZS6Q%2FEMw9jr%2BJKwlzF27UScwAdz7L8%2BdCiSne%2B72GNivBsK7Axkvrh%2Fzskp%2FhHs%2F3oHbxXaFlhBl%2FfsfcAjnpyVWw%2BFjNgzl4dzYtSCa4Te8oL1S5YKE6tBPe%2FSyOwVhuZ3ZUZa7kd52hIMrcCf%2FXyqo1tawLBEQ5HXZdN5kZhRTd99P1MEvP2n8Kibko4G5RH3JQkc5%2FtecP44&X-Amz-Signature=edfc8d9b33e8738cbf588ee218c8ac6cac1a49c62618bd8829eab255d94455c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKBFM4Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDA3X46enDXlpofYgzPZkoxVaUMj%2BXFEPk3kgUcEOkWYAiEAwASwmdGwO580LkG33GNoBwcjiIQQ8rlj1qX3vpxibCgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGy9vu0V%2FnY8xzojyrcA6WlCYXkhWYG0n3rAg9U0cyAq0c8rZhsbJIGMwMDsB5H0oD9saTlwv3TMMsBNvZH389J8XScibEYm1rliDFIEeyb9TIw8DSVGOJTW21DmdI%2FdlykWpsz6CFPuaTDG%2FjMG9N1qXA4iS7%2BmK%2FeGlOGx0535bW32TgZE%2BVXoDFMbUCtyxhqtskpHLFyihRRWkwmDQz5ERi4rjyJPK6AddFYdAB9sWtawTe9hCYJ5KqVkm%2BD0vsasnCmBifj86MjD6yK0m%2Fgo81ZJ29oUeVjoDEQxlP0ZevmVl%2Fdd4k0yzOjqRkVnlCkVvQ2lyJDx8%2B09%2F%2B3LrS0WmNFrm9y0h8%2BrZGeUhj8G77Hn05FEEEy%2FQEBCA1LtDVgyEipL8L5o8e0WlcAV21Rp5Zgc7AF9q6lqyQ1NSjpCqxUxyR9rgw39PAvpOiMmYIggWv%2FtZmdtLHuhw9b6GEWwTZQRPFevL4f2lGfSv6AXaKnG8l4AfY%2BjpKQiYaS2%2BiRenqcfaar9DqvXvc1p%2BKjS0M7kT%2BiuEhR%2Fo79rXqObBur2%2FRFNh4%2Fp2gsRmIELB96FmoBhf6wisep2%2BJ%2FNfRgvq%2BTtG3TDXH%2Fbq1Ax1hAr%2Fh1UpVYhS9PakKLigtGAXRn3SLYI4ErWcA%2FMK2J778GOqUBndTR1MzJOTbd%2FZS6Q%2FEMw9jr%2BJKwlzF27UScwAdz7L8%2BdCiSne%2B72GNivBsK7Axkvrh%2Fzskp%2FhHs%2F3oHbxXaFlhBl%2FfsfcAjnpyVWw%2BFjNgzl4dzYtSCa4Te8oL1S5YKE6tBPe%2FSyOwVhuZ3ZUZa7kd52hIMrcCf%2FXyqo1tawLBEQ5HXZdN5kZhRTd99P1MEvP2n8Kibko4G5RH3JQkc5%2FtecP44&X-Amz-Signature=47a07fc3242213181de386a5f98ebb0dfa45f980b905bbce7df4de03e0b1451a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKBFM4Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDA3X46enDXlpofYgzPZkoxVaUMj%2BXFEPk3kgUcEOkWYAiEAwASwmdGwO580LkG33GNoBwcjiIQQ8rlj1qX3vpxibCgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGy9vu0V%2FnY8xzojyrcA6WlCYXkhWYG0n3rAg9U0cyAq0c8rZhsbJIGMwMDsB5H0oD9saTlwv3TMMsBNvZH389J8XScibEYm1rliDFIEeyb9TIw8DSVGOJTW21DmdI%2FdlykWpsz6CFPuaTDG%2FjMG9N1qXA4iS7%2BmK%2FeGlOGx0535bW32TgZE%2BVXoDFMbUCtyxhqtskpHLFyihRRWkwmDQz5ERi4rjyJPK6AddFYdAB9sWtawTe9hCYJ5KqVkm%2BD0vsasnCmBifj86MjD6yK0m%2Fgo81ZJ29oUeVjoDEQxlP0ZevmVl%2Fdd4k0yzOjqRkVnlCkVvQ2lyJDx8%2B09%2F%2B3LrS0WmNFrm9y0h8%2BrZGeUhj8G77Hn05FEEEy%2FQEBCA1LtDVgyEipL8L5o8e0WlcAV21Rp5Zgc7AF9q6lqyQ1NSjpCqxUxyR9rgw39PAvpOiMmYIggWv%2FtZmdtLHuhw9b6GEWwTZQRPFevL4f2lGfSv6AXaKnG8l4AfY%2BjpKQiYaS2%2BiRenqcfaar9DqvXvc1p%2BKjS0M7kT%2BiuEhR%2Fo79rXqObBur2%2FRFNh4%2Fp2gsRmIELB96FmoBhf6wisep2%2BJ%2FNfRgvq%2BTtG3TDXH%2Fbq1Ax1hAr%2Fh1UpVYhS9PakKLigtGAXRn3SLYI4ErWcA%2FMK2J778GOqUBndTR1MzJOTbd%2FZS6Q%2FEMw9jr%2BJKwlzF27UScwAdz7L8%2BdCiSne%2B72GNivBsK7Axkvrh%2Fzskp%2FhHs%2F3oHbxXaFlhBl%2FfsfcAjnpyVWw%2BFjNgzl4dzYtSCa4Te8oL1S5YKE6tBPe%2FSyOwVhuZ3ZUZa7kd52hIMrcCf%2FXyqo1tawLBEQ5HXZdN5kZhRTd99P1MEvP2n8Kibko4G5RH3JQkc5%2FtecP44&X-Amz-Signature=e1bb47c513821804ea5d9783cd644fa20bd3554c355510869550bee0c14ac720&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKBFM4Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDA3X46enDXlpofYgzPZkoxVaUMj%2BXFEPk3kgUcEOkWYAiEAwASwmdGwO580LkG33GNoBwcjiIQQ8rlj1qX3vpxibCgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGy9vu0V%2FnY8xzojyrcA6WlCYXkhWYG0n3rAg9U0cyAq0c8rZhsbJIGMwMDsB5H0oD9saTlwv3TMMsBNvZH389J8XScibEYm1rliDFIEeyb9TIw8DSVGOJTW21DmdI%2FdlykWpsz6CFPuaTDG%2FjMG9N1qXA4iS7%2BmK%2FeGlOGx0535bW32TgZE%2BVXoDFMbUCtyxhqtskpHLFyihRRWkwmDQz5ERi4rjyJPK6AddFYdAB9sWtawTe9hCYJ5KqVkm%2BD0vsasnCmBifj86MjD6yK0m%2Fgo81ZJ29oUeVjoDEQxlP0ZevmVl%2Fdd4k0yzOjqRkVnlCkVvQ2lyJDx8%2B09%2F%2B3LrS0WmNFrm9y0h8%2BrZGeUhj8G77Hn05FEEEy%2FQEBCA1LtDVgyEipL8L5o8e0WlcAV21Rp5Zgc7AF9q6lqyQ1NSjpCqxUxyR9rgw39PAvpOiMmYIggWv%2FtZmdtLHuhw9b6GEWwTZQRPFevL4f2lGfSv6AXaKnG8l4AfY%2BjpKQiYaS2%2BiRenqcfaar9DqvXvc1p%2BKjS0M7kT%2BiuEhR%2Fo79rXqObBur2%2FRFNh4%2Fp2gsRmIELB96FmoBhf6wisep2%2BJ%2FNfRgvq%2BTtG3TDXH%2Fbq1Ax1hAr%2Fh1UpVYhS9PakKLigtGAXRn3SLYI4ErWcA%2FMK2J778GOqUBndTR1MzJOTbd%2FZS6Q%2FEMw9jr%2BJKwlzF27UScwAdz7L8%2BdCiSne%2B72GNivBsK7Axkvrh%2Fzskp%2FhHs%2F3oHbxXaFlhBl%2FfsfcAjnpyVWw%2BFjNgzl4dzYtSCa4Te8oL1S5YKE6tBPe%2FSyOwVhuZ3ZUZa7kd52hIMrcCf%2FXyqo1tawLBEQ5HXZdN5kZhRTd99P1MEvP2n8Kibko4G5RH3JQkc5%2FtecP44&X-Amz-Signature=be22203ca97e58ff4f03736c0579f895ecfeb1ef562df3f748d38607c7d330d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKBFM4Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDA3X46enDXlpofYgzPZkoxVaUMj%2BXFEPk3kgUcEOkWYAiEAwASwmdGwO580LkG33GNoBwcjiIQQ8rlj1qX3vpxibCgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGy9vu0V%2FnY8xzojyrcA6WlCYXkhWYG0n3rAg9U0cyAq0c8rZhsbJIGMwMDsB5H0oD9saTlwv3TMMsBNvZH389J8XScibEYm1rliDFIEeyb9TIw8DSVGOJTW21DmdI%2FdlykWpsz6CFPuaTDG%2FjMG9N1qXA4iS7%2BmK%2FeGlOGx0535bW32TgZE%2BVXoDFMbUCtyxhqtskpHLFyihRRWkwmDQz5ERi4rjyJPK6AddFYdAB9sWtawTe9hCYJ5KqVkm%2BD0vsasnCmBifj86MjD6yK0m%2Fgo81ZJ29oUeVjoDEQxlP0ZevmVl%2Fdd4k0yzOjqRkVnlCkVvQ2lyJDx8%2B09%2F%2B3LrS0WmNFrm9y0h8%2BrZGeUhj8G77Hn05FEEEy%2FQEBCA1LtDVgyEipL8L5o8e0WlcAV21Rp5Zgc7AF9q6lqyQ1NSjpCqxUxyR9rgw39PAvpOiMmYIggWv%2FtZmdtLHuhw9b6GEWwTZQRPFevL4f2lGfSv6AXaKnG8l4AfY%2BjpKQiYaS2%2BiRenqcfaar9DqvXvc1p%2BKjS0M7kT%2BiuEhR%2Fo79rXqObBur2%2FRFNh4%2Fp2gsRmIELB96FmoBhf6wisep2%2BJ%2FNfRgvq%2BTtG3TDXH%2Fbq1Ax1hAr%2Fh1UpVYhS9PakKLigtGAXRn3SLYI4ErWcA%2FMK2J778GOqUBndTR1MzJOTbd%2FZS6Q%2FEMw9jr%2BJKwlzF27UScwAdz7L8%2BdCiSne%2B72GNivBsK7Axkvrh%2Fzskp%2FhHs%2F3oHbxXaFlhBl%2FfsfcAjnpyVWw%2BFjNgzl4dzYtSCa4Te8oL1S5YKE6tBPe%2FSyOwVhuZ3ZUZa7kd52hIMrcCf%2FXyqo1tawLBEQ5HXZdN5kZhRTd99P1MEvP2n8Kibko4G5RH3JQkc5%2FtecP44&X-Amz-Signature=f9e96bb2203bae0133e9695b7ed71344d2cedd74feb6b78b092f8a41043fd323&X-Amz-SignedHeaders=host&x-id=GetObject)
