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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4S4GWPZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEvkfSNfeaGBu2QebMFR5jIxyspaAxdaN55NuXVTYmmvAiAA32IbuwboM8awMA%2Bh6eR2MWA%2F5wfa%2F9QBcRhfIdFYOCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz3VArPEjo2ylqOXZKtwDeHf8P7KGN80gfZXeOp6cGM7vsLxwG2gqwZ7epIdT%2FLHEiSu1HP74270%2By1B71ONRx%2BqnaZaBtLUcHt1PgU8uk%2B7%2FntSWffLw5stdu%2FqZanIv5MDc6ZoRwRURmyHSr0D%2FBFcXABGVfYnjzenxR3GGkontgGF8SjV9bayWC%2FEqsegtrp9hpvWNX7I%2B5IJGbQ5svSCPw6nX0rohcdYhP%2FscuhKt%2Ffx16NtiTQ7%2FZClvrx2TsHuRtr2yjHE7s9jaPsYyKjgsZEh2EWGeIXY6Oj6ddCajMqVe74RZ4hWTXW6yY42wEcM7B1nSL1vg10ty%2Bj%2F3kwiI%2BLLnSrqIS%2BrdFKnW7IsnEGzfiqjDNxEgPc4WHUZBlKPbgL3JWwFICkecYjm4SiqMnmYv0QJvgZxvz%2FhaIQzhih8ZgkldoTwK2SUiEijhc6rgtt3e%2BuFA4PIG%2BPCkUlNEGkQAGJBN1p0J7Crl34xzfav3jpwpy48BNGWqu%2Bd0W5V9kTvYFgYlljdU3LIZpqh404PJ%2FlWYLDrpNo9B8IV2O%2BgYSIbyGdtpgH4Uq5QHsZrRCaoBhgYQNcW8yY4krNNxdUu8INbV82etW614tLebmW3xWhx%2FdjDtD28dpb4v93%2FqyrHzmObpxiAwg%2FX1wQY6pgGl9cVzIfp4J5dS1CLXfIh6sqp%2Bc0WxLctjAaxQ%2BqQvgwgExilTAF6PDyAqEsp48aUwP5fqyiYkwxWlnGiOK1hrorljMzQcCAKBWdV7GWkw%2FUqZuCgPPoUCxp4OPJtK1Rwm%2FlVKc6ASKi50ab8%2FbjCmMpNu371sHgLmn8FdEm8cAxHJkfMM%2FIRGXrWuu2CRxxHLO30rJgAZNQvapb3pCgRCvjkEIgbF&X-Amz-Signature=0205b74332bedcf91d81485afc529a0e5d2c03e86bd52c550d626c3c3a25118a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4S4GWPZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEvkfSNfeaGBu2QebMFR5jIxyspaAxdaN55NuXVTYmmvAiAA32IbuwboM8awMA%2Bh6eR2MWA%2F5wfa%2F9QBcRhfIdFYOCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz3VArPEjo2ylqOXZKtwDeHf8P7KGN80gfZXeOp6cGM7vsLxwG2gqwZ7epIdT%2FLHEiSu1HP74270%2By1B71ONRx%2BqnaZaBtLUcHt1PgU8uk%2B7%2FntSWffLw5stdu%2FqZanIv5MDc6ZoRwRURmyHSr0D%2FBFcXABGVfYnjzenxR3GGkontgGF8SjV9bayWC%2FEqsegtrp9hpvWNX7I%2B5IJGbQ5svSCPw6nX0rohcdYhP%2FscuhKt%2Ffx16NtiTQ7%2FZClvrx2TsHuRtr2yjHE7s9jaPsYyKjgsZEh2EWGeIXY6Oj6ddCajMqVe74RZ4hWTXW6yY42wEcM7B1nSL1vg10ty%2Bj%2F3kwiI%2BLLnSrqIS%2BrdFKnW7IsnEGzfiqjDNxEgPc4WHUZBlKPbgL3JWwFICkecYjm4SiqMnmYv0QJvgZxvz%2FhaIQzhih8ZgkldoTwK2SUiEijhc6rgtt3e%2BuFA4PIG%2BPCkUlNEGkQAGJBN1p0J7Crl34xzfav3jpwpy48BNGWqu%2Bd0W5V9kTvYFgYlljdU3LIZpqh404PJ%2FlWYLDrpNo9B8IV2O%2BgYSIbyGdtpgH4Uq5QHsZrRCaoBhgYQNcW8yY4krNNxdUu8INbV82etW614tLebmW3xWhx%2FdjDtD28dpb4v93%2FqyrHzmObpxiAwg%2FX1wQY6pgGl9cVzIfp4J5dS1CLXfIh6sqp%2Bc0WxLctjAaxQ%2BqQvgwgExilTAF6PDyAqEsp48aUwP5fqyiYkwxWlnGiOK1hrorljMzQcCAKBWdV7GWkw%2FUqZuCgPPoUCxp4OPJtK1Rwm%2FlVKc6ASKi50ab8%2FbjCmMpNu371sHgLmn8FdEm8cAxHJkfMM%2FIRGXrWuu2CRxxHLO30rJgAZNQvapb3pCgRCvjkEIgbF&X-Amz-Signature=c4ce9a751a32d5a359a8a6fe52ff42ebbae6f16f4a578f920d8e5b863d140778&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4S4GWPZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEvkfSNfeaGBu2QebMFR5jIxyspaAxdaN55NuXVTYmmvAiAA32IbuwboM8awMA%2Bh6eR2MWA%2F5wfa%2F9QBcRhfIdFYOCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz3VArPEjo2ylqOXZKtwDeHf8P7KGN80gfZXeOp6cGM7vsLxwG2gqwZ7epIdT%2FLHEiSu1HP74270%2By1B71ONRx%2BqnaZaBtLUcHt1PgU8uk%2B7%2FntSWffLw5stdu%2FqZanIv5MDc6ZoRwRURmyHSr0D%2FBFcXABGVfYnjzenxR3GGkontgGF8SjV9bayWC%2FEqsegtrp9hpvWNX7I%2B5IJGbQ5svSCPw6nX0rohcdYhP%2FscuhKt%2Ffx16NtiTQ7%2FZClvrx2TsHuRtr2yjHE7s9jaPsYyKjgsZEh2EWGeIXY6Oj6ddCajMqVe74RZ4hWTXW6yY42wEcM7B1nSL1vg10ty%2Bj%2F3kwiI%2BLLnSrqIS%2BrdFKnW7IsnEGzfiqjDNxEgPc4WHUZBlKPbgL3JWwFICkecYjm4SiqMnmYv0QJvgZxvz%2FhaIQzhih8ZgkldoTwK2SUiEijhc6rgtt3e%2BuFA4PIG%2BPCkUlNEGkQAGJBN1p0J7Crl34xzfav3jpwpy48BNGWqu%2Bd0W5V9kTvYFgYlljdU3LIZpqh404PJ%2FlWYLDrpNo9B8IV2O%2BgYSIbyGdtpgH4Uq5QHsZrRCaoBhgYQNcW8yY4krNNxdUu8INbV82etW614tLebmW3xWhx%2FdjDtD28dpb4v93%2FqyrHzmObpxiAwg%2FX1wQY6pgGl9cVzIfp4J5dS1CLXfIh6sqp%2Bc0WxLctjAaxQ%2BqQvgwgExilTAF6PDyAqEsp48aUwP5fqyiYkwxWlnGiOK1hrorljMzQcCAKBWdV7GWkw%2FUqZuCgPPoUCxp4OPJtK1Rwm%2FlVKc6ASKi50ab8%2FbjCmMpNu371sHgLmn8FdEm8cAxHJkfMM%2FIRGXrWuu2CRxxHLO30rJgAZNQvapb3pCgRCvjkEIgbF&X-Amz-Signature=2b6949e91633947db1bcf3ae5192abc5ce06180c2129fe9b69748ae9de1ea4f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4S4GWPZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEvkfSNfeaGBu2QebMFR5jIxyspaAxdaN55NuXVTYmmvAiAA32IbuwboM8awMA%2Bh6eR2MWA%2F5wfa%2F9QBcRhfIdFYOCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz3VArPEjo2ylqOXZKtwDeHf8P7KGN80gfZXeOp6cGM7vsLxwG2gqwZ7epIdT%2FLHEiSu1HP74270%2By1B71ONRx%2BqnaZaBtLUcHt1PgU8uk%2B7%2FntSWffLw5stdu%2FqZanIv5MDc6ZoRwRURmyHSr0D%2FBFcXABGVfYnjzenxR3GGkontgGF8SjV9bayWC%2FEqsegtrp9hpvWNX7I%2B5IJGbQ5svSCPw6nX0rohcdYhP%2FscuhKt%2Ffx16NtiTQ7%2FZClvrx2TsHuRtr2yjHE7s9jaPsYyKjgsZEh2EWGeIXY6Oj6ddCajMqVe74RZ4hWTXW6yY42wEcM7B1nSL1vg10ty%2Bj%2F3kwiI%2BLLnSrqIS%2BrdFKnW7IsnEGzfiqjDNxEgPc4WHUZBlKPbgL3JWwFICkecYjm4SiqMnmYv0QJvgZxvz%2FhaIQzhih8ZgkldoTwK2SUiEijhc6rgtt3e%2BuFA4PIG%2BPCkUlNEGkQAGJBN1p0J7Crl34xzfav3jpwpy48BNGWqu%2Bd0W5V9kTvYFgYlljdU3LIZpqh404PJ%2FlWYLDrpNo9B8IV2O%2BgYSIbyGdtpgH4Uq5QHsZrRCaoBhgYQNcW8yY4krNNxdUu8INbV82etW614tLebmW3xWhx%2FdjDtD28dpb4v93%2FqyrHzmObpxiAwg%2FX1wQY6pgGl9cVzIfp4J5dS1CLXfIh6sqp%2Bc0WxLctjAaxQ%2BqQvgwgExilTAF6PDyAqEsp48aUwP5fqyiYkwxWlnGiOK1hrorljMzQcCAKBWdV7GWkw%2FUqZuCgPPoUCxp4OPJtK1Rwm%2FlVKc6ASKi50ab8%2FbjCmMpNu371sHgLmn8FdEm8cAxHJkfMM%2FIRGXrWuu2CRxxHLO30rJgAZNQvapb3pCgRCvjkEIgbF&X-Amz-Signature=b26447d5a12764be2dfcb91c41093b14c17e6532a0c7eb967d05c693033b1317&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4S4GWPZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEvkfSNfeaGBu2QebMFR5jIxyspaAxdaN55NuXVTYmmvAiAA32IbuwboM8awMA%2Bh6eR2MWA%2F5wfa%2F9QBcRhfIdFYOCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz3VArPEjo2ylqOXZKtwDeHf8P7KGN80gfZXeOp6cGM7vsLxwG2gqwZ7epIdT%2FLHEiSu1HP74270%2By1B71ONRx%2BqnaZaBtLUcHt1PgU8uk%2B7%2FntSWffLw5stdu%2FqZanIv5MDc6ZoRwRURmyHSr0D%2FBFcXABGVfYnjzenxR3GGkontgGF8SjV9bayWC%2FEqsegtrp9hpvWNX7I%2B5IJGbQ5svSCPw6nX0rohcdYhP%2FscuhKt%2Ffx16NtiTQ7%2FZClvrx2TsHuRtr2yjHE7s9jaPsYyKjgsZEh2EWGeIXY6Oj6ddCajMqVe74RZ4hWTXW6yY42wEcM7B1nSL1vg10ty%2Bj%2F3kwiI%2BLLnSrqIS%2BrdFKnW7IsnEGzfiqjDNxEgPc4WHUZBlKPbgL3JWwFICkecYjm4SiqMnmYv0QJvgZxvz%2FhaIQzhih8ZgkldoTwK2SUiEijhc6rgtt3e%2BuFA4PIG%2BPCkUlNEGkQAGJBN1p0J7Crl34xzfav3jpwpy48BNGWqu%2Bd0W5V9kTvYFgYlljdU3LIZpqh404PJ%2FlWYLDrpNo9B8IV2O%2BgYSIbyGdtpgH4Uq5QHsZrRCaoBhgYQNcW8yY4krNNxdUu8INbV82etW614tLebmW3xWhx%2FdjDtD28dpb4v93%2FqyrHzmObpxiAwg%2FX1wQY6pgGl9cVzIfp4J5dS1CLXfIh6sqp%2Bc0WxLctjAaxQ%2BqQvgwgExilTAF6PDyAqEsp48aUwP5fqyiYkwxWlnGiOK1hrorljMzQcCAKBWdV7GWkw%2FUqZuCgPPoUCxp4OPJtK1Rwm%2FlVKc6ASKi50ab8%2FbjCmMpNu371sHgLmn8FdEm8cAxHJkfMM%2FIRGXrWuu2CRxxHLO30rJgAZNQvapb3pCgRCvjkEIgbF&X-Amz-Signature=dcf470a381379ad9fdd1711faca54123b17a858b5ccb853eb04a7c63c9cc4375&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4S4GWPZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEvkfSNfeaGBu2QebMFR5jIxyspaAxdaN55NuXVTYmmvAiAA32IbuwboM8awMA%2Bh6eR2MWA%2F5wfa%2F9QBcRhfIdFYOCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz3VArPEjo2ylqOXZKtwDeHf8P7KGN80gfZXeOp6cGM7vsLxwG2gqwZ7epIdT%2FLHEiSu1HP74270%2By1B71ONRx%2BqnaZaBtLUcHt1PgU8uk%2B7%2FntSWffLw5stdu%2FqZanIv5MDc6ZoRwRURmyHSr0D%2FBFcXABGVfYnjzenxR3GGkontgGF8SjV9bayWC%2FEqsegtrp9hpvWNX7I%2B5IJGbQ5svSCPw6nX0rohcdYhP%2FscuhKt%2Ffx16NtiTQ7%2FZClvrx2TsHuRtr2yjHE7s9jaPsYyKjgsZEh2EWGeIXY6Oj6ddCajMqVe74RZ4hWTXW6yY42wEcM7B1nSL1vg10ty%2Bj%2F3kwiI%2BLLnSrqIS%2BrdFKnW7IsnEGzfiqjDNxEgPc4WHUZBlKPbgL3JWwFICkecYjm4SiqMnmYv0QJvgZxvz%2FhaIQzhih8ZgkldoTwK2SUiEijhc6rgtt3e%2BuFA4PIG%2BPCkUlNEGkQAGJBN1p0J7Crl34xzfav3jpwpy48BNGWqu%2Bd0W5V9kTvYFgYlljdU3LIZpqh404PJ%2FlWYLDrpNo9B8IV2O%2BgYSIbyGdtpgH4Uq5QHsZrRCaoBhgYQNcW8yY4krNNxdUu8INbV82etW614tLebmW3xWhx%2FdjDtD28dpb4v93%2FqyrHzmObpxiAwg%2FX1wQY6pgGl9cVzIfp4J5dS1CLXfIh6sqp%2Bc0WxLctjAaxQ%2BqQvgwgExilTAF6PDyAqEsp48aUwP5fqyiYkwxWlnGiOK1hrorljMzQcCAKBWdV7GWkw%2FUqZuCgPPoUCxp4OPJtK1Rwm%2FlVKc6ASKi50ab8%2FbjCmMpNu371sHgLmn8FdEm8cAxHJkfMM%2FIRGXrWuu2CRxxHLO30rJgAZNQvapb3pCgRCvjkEIgbF&X-Amz-Signature=c2c1722da9bd5d1995be6000405d08816c4d3845400b76a7e3d5087239b535f2&X-Amz-SignedHeaders=host&x-id=GetObject)
