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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GCAEB3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9oaBkOfpx84BkUHdzBtwqx8Q8PzLKLD95AOGipxnhFAiEAv471E7ptL5oDhE%2B%2B7YYjJmULDO5jvnrGpqfdPGduvFAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL3107UELgZnG1PSCrcA3%2F2LIGRA4xGnS0AS3wKKOHonlhMP%2FpCKJR4eatmcFY21uZ3vnYFJaHUpz%2BBaS64TwwKHmUC497OnvmaDt8yYG5D8%2FlwJlC2NSkiGZB6396RbO3rw6jZPpsmLvnWrC6CTHKIrLATb6RvbANwvfI%2Bxdn8xSftzWTGbjh3myJiS7ieU0Mu4WTlUOm9DGoOxWEmMmQwSZBw9wmEgCglPhZk9s2sYZvZI%2BmVUqkSBEx4vQug6QkDf5r%2BBnyhqyWaG7AvjM4e4wyyvhC%2FqvYIuDQ4VWfceIkxl4dSM37xdKjwUiQuX6zaiBmRv%2B9UU5NJvbvoizwhcAUBkor48yXjSm2VFevrTo2FNuW6osMMukUJXM1VEaqk%2BVvczj98lpRJGQgNtZAyGEpqi6JYfE%2B8UQReSWo3IFxoMbfdWfclCmKVGyetbcNzeZvMdzm3IwO0DWVpuckD36nI7pC%2FiRfwHsv0%2FNrUNIe%2Fy4EDHxHFQ2WeGq6SBJg22TFK1P%2Bix8eJ1czqiNJWPujdrfbHYbdd6bx%2Fn3IqIeB5opJO48Z%2BVB5AePsYHlW8a4pD2sFXjfbKcxn1vZQ7y0npZzAyyK13cvKjMDZo%2Bsg5qWEe%2Fjc0ar%2BcXepREz3i7x1uuRkVHo%2FJMJnx1MIGOqUBkDNrjduQqwSJUnYzEoRjg0IzIdWLsog6QEjTAUHbiOOg4lb%2FcW%2B9wdtV6SSS8Da4HOpPbrEC2URl5YqFnOdAuwp9wyouo3LS7%2BZ%2B5YgKG9yB6zZIOGver8AvQ1wWfkiMRb80v2mW1q7zbAlBAC%2Bv4%2FhQhWGNmlFqZxUlJhPkAAOlm5DN54yYFRaMqBWSKRE1QTxfIVpb8bnxSKSwsgMe%2Fb3PkcOo&X-Amz-Signature=3046cf222c29f842ac0124bdba079f6bbd251e3ad639f112f29fe308e6065ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GCAEB3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9oaBkOfpx84BkUHdzBtwqx8Q8PzLKLD95AOGipxnhFAiEAv471E7ptL5oDhE%2B%2B7YYjJmULDO5jvnrGpqfdPGduvFAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL3107UELgZnG1PSCrcA3%2F2LIGRA4xGnS0AS3wKKOHonlhMP%2FpCKJR4eatmcFY21uZ3vnYFJaHUpz%2BBaS64TwwKHmUC497OnvmaDt8yYG5D8%2FlwJlC2NSkiGZB6396RbO3rw6jZPpsmLvnWrC6CTHKIrLATb6RvbANwvfI%2Bxdn8xSftzWTGbjh3myJiS7ieU0Mu4WTlUOm9DGoOxWEmMmQwSZBw9wmEgCglPhZk9s2sYZvZI%2BmVUqkSBEx4vQug6QkDf5r%2BBnyhqyWaG7AvjM4e4wyyvhC%2FqvYIuDQ4VWfceIkxl4dSM37xdKjwUiQuX6zaiBmRv%2B9UU5NJvbvoizwhcAUBkor48yXjSm2VFevrTo2FNuW6osMMukUJXM1VEaqk%2BVvczj98lpRJGQgNtZAyGEpqi6JYfE%2B8UQReSWo3IFxoMbfdWfclCmKVGyetbcNzeZvMdzm3IwO0DWVpuckD36nI7pC%2FiRfwHsv0%2FNrUNIe%2Fy4EDHxHFQ2WeGq6SBJg22TFK1P%2Bix8eJ1czqiNJWPujdrfbHYbdd6bx%2Fn3IqIeB5opJO48Z%2BVB5AePsYHlW8a4pD2sFXjfbKcxn1vZQ7y0npZzAyyK13cvKjMDZo%2Bsg5qWEe%2Fjc0ar%2BcXepREz3i7x1uuRkVHo%2FJMJnx1MIGOqUBkDNrjduQqwSJUnYzEoRjg0IzIdWLsog6QEjTAUHbiOOg4lb%2FcW%2B9wdtV6SSS8Da4HOpPbrEC2URl5YqFnOdAuwp9wyouo3LS7%2BZ%2B5YgKG9yB6zZIOGver8AvQ1wWfkiMRb80v2mW1q7zbAlBAC%2Bv4%2FhQhWGNmlFqZxUlJhPkAAOlm5DN54yYFRaMqBWSKRE1QTxfIVpb8bnxSKSwsgMe%2Fb3PkcOo&X-Amz-Signature=6fc20909d42bacac795c0151653597682aa495d8de652773369113831e3dae04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GCAEB3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9oaBkOfpx84BkUHdzBtwqx8Q8PzLKLD95AOGipxnhFAiEAv471E7ptL5oDhE%2B%2B7YYjJmULDO5jvnrGpqfdPGduvFAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL3107UELgZnG1PSCrcA3%2F2LIGRA4xGnS0AS3wKKOHonlhMP%2FpCKJR4eatmcFY21uZ3vnYFJaHUpz%2BBaS64TwwKHmUC497OnvmaDt8yYG5D8%2FlwJlC2NSkiGZB6396RbO3rw6jZPpsmLvnWrC6CTHKIrLATb6RvbANwvfI%2Bxdn8xSftzWTGbjh3myJiS7ieU0Mu4WTlUOm9DGoOxWEmMmQwSZBw9wmEgCglPhZk9s2sYZvZI%2BmVUqkSBEx4vQug6QkDf5r%2BBnyhqyWaG7AvjM4e4wyyvhC%2FqvYIuDQ4VWfceIkxl4dSM37xdKjwUiQuX6zaiBmRv%2B9UU5NJvbvoizwhcAUBkor48yXjSm2VFevrTo2FNuW6osMMukUJXM1VEaqk%2BVvczj98lpRJGQgNtZAyGEpqi6JYfE%2B8UQReSWo3IFxoMbfdWfclCmKVGyetbcNzeZvMdzm3IwO0DWVpuckD36nI7pC%2FiRfwHsv0%2FNrUNIe%2Fy4EDHxHFQ2WeGq6SBJg22TFK1P%2Bix8eJ1czqiNJWPujdrfbHYbdd6bx%2Fn3IqIeB5opJO48Z%2BVB5AePsYHlW8a4pD2sFXjfbKcxn1vZQ7y0npZzAyyK13cvKjMDZo%2Bsg5qWEe%2Fjc0ar%2BcXepREz3i7x1uuRkVHo%2FJMJnx1MIGOqUBkDNrjduQqwSJUnYzEoRjg0IzIdWLsog6QEjTAUHbiOOg4lb%2FcW%2B9wdtV6SSS8Da4HOpPbrEC2URl5YqFnOdAuwp9wyouo3LS7%2BZ%2B5YgKG9yB6zZIOGver8AvQ1wWfkiMRb80v2mW1q7zbAlBAC%2Bv4%2FhQhWGNmlFqZxUlJhPkAAOlm5DN54yYFRaMqBWSKRE1QTxfIVpb8bnxSKSwsgMe%2Fb3PkcOo&X-Amz-Signature=936eef497392307b7d8bb96b8abca06b0712cf40ad5058382a71fe12d08d2939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GCAEB3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9oaBkOfpx84BkUHdzBtwqx8Q8PzLKLD95AOGipxnhFAiEAv471E7ptL5oDhE%2B%2B7YYjJmULDO5jvnrGpqfdPGduvFAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL3107UELgZnG1PSCrcA3%2F2LIGRA4xGnS0AS3wKKOHonlhMP%2FpCKJR4eatmcFY21uZ3vnYFJaHUpz%2BBaS64TwwKHmUC497OnvmaDt8yYG5D8%2FlwJlC2NSkiGZB6396RbO3rw6jZPpsmLvnWrC6CTHKIrLATb6RvbANwvfI%2Bxdn8xSftzWTGbjh3myJiS7ieU0Mu4WTlUOm9DGoOxWEmMmQwSZBw9wmEgCglPhZk9s2sYZvZI%2BmVUqkSBEx4vQug6QkDf5r%2BBnyhqyWaG7AvjM4e4wyyvhC%2FqvYIuDQ4VWfceIkxl4dSM37xdKjwUiQuX6zaiBmRv%2B9UU5NJvbvoizwhcAUBkor48yXjSm2VFevrTo2FNuW6osMMukUJXM1VEaqk%2BVvczj98lpRJGQgNtZAyGEpqi6JYfE%2B8UQReSWo3IFxoMbfdWfclCmKVGyetbcNzeZvMdzm3IwO0DWVpuckD36nI7pC%2FiRfwHsv0%2FNrUNIe%2Fy4EDHxHFQ2WeGq6SBJg22TFK1P%2Bix8eJ1czqiNJWPujdrfbHYbdd6bx%2Fn3IqIeB5opJO48Z%2BVB5AePsYHlW8a4pD2sFXjfbKcxn1vZQ7y0npZzAyyK13cvKjMDZo%2Bsg5qWEe%2Fjc0ar%2BcXepREz3i7x1uuRkVHo%2FJMJnx1MIGOqUBkDNrjduQqwSJUnYzEoRjg0IzIdWLsog6QEjTAUHbiOOg4lb%2FcW%2B9wdtV6SSS8Da4HOpPbrEC2URl5YqFnOdAuwp9wyouo3LS7%2BZ%2B5YgKG9yB6zZIOGver8AvQ1wWfkiMRb80v2mW1q7zbAlBAC%2Bv4%2FhQhWGNmlFqZxUlJhPkAAOlm5DN54yYFRaMqBWSKRE1QTxfIVpb8bnxSKSwsgMe%2Fb3PkcOo&X-Amz-Signature=60fa2f355b4d217398cafc14a5a74687a6d1fd5f30d765a3257ebe0130813d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GCAEB3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9oaBkOfpx84BkUHdzBtwqx8Q8PzLKLD95AOGipxnhFAiEAv471E7ptL5oDhE%2B%2B7YYjJmULDO5jvnrGpqfdPGduvFAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL3107UELgZnG1PSCrcA3%2F2LIGRA4xGnS0AS3wKKOHonlhMP%2FpCKJR4eatmcFY21uZ3vnYFJaHUpz%2BBaS64TwwKHmUC497OnvmaDt8yYG5D8%2FlwJlC2NSkiGZB6396RbO3rw6jZPpsmLvnWrC6CTHKIrLATb6RvbANwvfI%2Bxdn8xSftzWTGbjh3myJiS7ieU0Mu4WTlUOm9DGoOxWEmMmQwSZBw9wmEgCglPhZk9s2sYZvZI%2BmVUqkSBEx4vQug6QkDf5r%2BBnyhqyWaG7AvjM4e4wyyvhC%2FqvYIuDQ4VWfceIkxl4dSM37xdKjwUiQuX6zaiBmRv%2B9UU5NJvbvoizwhcAUBkor48yXjSm2VFevrTo2FNuW6osMMukUJXM1VEaqk%2BVvczj98lpRJGQgNtZAyGEpqi6JYfE%2B8UQReSWo3IFxoMbfdWfclCmKVGyetbcNzeZvMdzm3IwO0DWVpuckD36nI7pC%2FiRfwHsv0%2FNrUNIe%2Fy4EDHxHFQ2WeGq6SBJg22TFK1P%2Bix8eJ1czqiNJWPujdrfbHYbdd6bx%2Fn3IqIeB5opJO48Z%2BVB5AePsYHlW8a4pD2sFXjfbKcxn1vZQ7y0npZzAyyK13cvKjMDZo%2Bsg5qWEe%2Fjc0ar%2BcXepREz3i7x1uuRkVHo%2FJMJnx1MIGOqUBkDNrjduQqwSJUnYzEoRjg0IzIdWLsog6QEjTAUHbiOOg4lb%2FcW%2B9wdtV6SSS8Da4HOpPbrEC2URl5YqFnOdAuwp9wyouo3LS7%2BZ%2B5YgKG9yB6zZIOGver8AvQ1wWfkiMRb80v2mW1q7zbAlBAC%2Bv4%2FhQhWGNmlFqZxUlJhPkAAOlm5DN54yYFRaMqBWSKRE1QTxfIVpb8bnxSKSwsgMe%2Fb3PkcOo&X-Amz-Signature=a7e7e3ba4731f953e037e224d35bdfd399f0f7650da37b0475af8798cd0c6734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GCAEB3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9oaBkOfpx84BkUHdzBtwqx8Q8PzLKLD95AOGipxnhFAiEAv471E7ptL5oDhE%2B%2B7YYjJmULDO5jvnrGpqfdPGduvFAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL3107UELgZnG1PSCrcA3%2F2LIGRA4xGnS0AS3wKKOHonlhMP%2FpCKJR4eatmcFY21uZ3vnYFJaHUpz%2BBaS64TwwKHmUC497OnvmaDt8yYG5D8%2FlwJlC2NSkiGZB6396RbO3rw6jZPpsmLvnWrC6CTHKIrLATb6RvbANwvfI%2Bxdn8xSftzWTGbjh3myJiS7ieU0Mu4WTlUOm9DGoOxWEmMmQwSZBw9wmEgCglPhZk9s2sYZvZI%2BmVUqkSBEx4vQug6QkDf5r%2BBnyhqyWaG7AvjM4e4wyyvhC%2FqvYIuDQ4VWfceIkxl4dSM37xdKjwUiQuX6zaiBmRv%2B9UU5NJvbvoizwhcAUBkor48yXjSm2VFevrTo2FNuW6osMMukUJXM1VEaqk%2BVvczj98lpRJGQgNtZAyGEpqi6JYfE%2B8UQReSWo3IFxoMbfdWfclCmKVGyetbcNzeZvMdzm3IwO0DWVpuckD36nI7pC%2FiRfwHsv0%2FNrUNIe%2Fy4EDHxHFQ2WeGq6SBJg22TFK1P%2Bix8eJ1czqiNJWPujdrfbHYbdd6bx%2Fn3IqIeB5opJO48Z%2BVB5AePsYHlW8a4pD2sFXjfbKcxn1vZQ7y0npZzAyyK13cvKjMDZo%2Bsg5qWEe%2Fjc0ar%2BcXepREz3i7x1uuRkVHo%2FJMJnx1MIGOqUBkDNrjduQqwSJUnYzEoRjg0IzIdWLsog6QEjTAUHbiOOg4lb%2FcW%2B9wdtV6SSS8Da4HOpPbrEC2URl5YqFnOdAuwp9wyouo3LS7%2BZ%2B5YgKG9yB6zZIOGver8AvQ1wWfkiMRb80v2mW1q7zbAlBAC%2Bv4%2FhQhWGNmlFqZxUlJhPkAAOlm5DN54yYFRaMqBWSKRE1QTxfIVpb8bnxSKSwsgMe%2Fb3PkcOo&X-Amz-Signature=35e54d6f917dbff5712bd503abd0f7b044e22c8ba2332011e5a5b4de952f60a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
