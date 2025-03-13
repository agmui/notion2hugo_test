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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5LN5QY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqO2qso9FQp%2BpZ20bbV92b1yLqFMb2JW9tkoSH3PZdQIhAJTEwmCE5NEIwpuuVynhvsTDggPdwUwF08XkDB2QJEv5KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNiq5e71LCaNTGPtcq3AOrI%2BKUj%2F6G%2FDwKzFO3r73nLnknpZsRDR41F9B6cw1saNNMTUtLyyT1Ep8KPH7CLBKcDD6vLKRSl9FGKuiRn0ivbIeOWWH3uxdz%2BJJ%2FEyApDrdQuqo30W0OsatBjel0slJ8cVsYEFIDtRJJDykhFUsDGIQM8bhJIMLuGbEm9sCMJecvqVTxJ66fqko8yQZlYml0m%2BuQ5r%2BOdyxuljWgx9iutRCpgdBYPhGkerP04DHKkpHNv79%2FRQca4trBhTusKxfhoHQJaWl0U3vUn2gxSmOg%2BOqPXe8BxD%2FrM2YGU0ogoydnU%2BEHPTMpp%2BYM%2BqAa5fimPgAkzidMvbAj%2FjbHHcG81QaagDPdBlzOQ4qvykzHyNUdr2UTzaJbgARSXPtlmaBba%2BS283Eoh1A5Xev5NlnXnuhcS3pvRXrKkgs%2FTMtVXzTLy7OYowJW5MkEgr1e7pqYdCsZI1SrzizU5DIL30VtAS7JDz0rXebknq5nWdTNpW7Y4oDFIRLU1axQ0do9RIB6dJFb37VElXRalymA0THIQsjrjfxBZzrhLekv4gV322RFgYGdBxo8IY3qG1OLDATyKgxtoQXYJItZ%2Bueve%2F5%2F9v9qTwZ7FQOgPPi8Dat82OcEmP9juIVboj6XLzC7u8u%2BBjqkAaogF%2B3Qfy1R2UA2rN4%2FTKG7ngHhVfIF%2FO6fWg6YN%2Bvhh3Bj2fpyFCzndTs1NgAczdKct4Mlb0wH6iUFZCrl91YC0%2BkvkESMlEw4KMbmeEWpvBwhwSuzhi92Y3uBnZGpRIa4ELiJexwsKpoISxOH6nq%2BGvhhxQk%2FrCAdvfeT4lBXXZeoCb5gfPqxZbs%2BoppRQlqJSnhO%2F2KYtjKgmKHNuO7iqk1q&X-Amz-Signature=aa28acee96022514ceb474f3bd9e2ab52c57fc2c936882c0f7882d60495a3119&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5LN5QY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqO2qso9FQp%2BpZ20bbV92b1yLqFMb2JW9tkoSH3PZdQIhAJTEwmCE5NEIwpuuVynhvsTDggPdwUwF08XkDB2QJEv5KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNiq5e71LCaNTGPtcq3AOrI%2BKUj%2F6G%2FDwKzFO3r73nLnknpZsRDR41F9B6cw1saNNMTUtLyyT1Ep8KPH7CLBKcDD6vLKRSl9FGKuiRn0ivbIeOWWH3uxdz%2BJJ%2FEyApDrdQuqo30W0OsatBjel0slJ8cVsYEFIDtRJJDykhFUsDGIQM8bhJIMLuGbEm9sCMJecvqVTxJ66fqko8yQZlYml0m%2BuQ5r%2BOdyxuljWgx9iutRCpgdBYPhGkerP04DHKkpHNv79%2FRQca4trBhTusKxfhoHQJaWl0U3vUn2gxSmOg%2BOqPXe8BxD%2FrM2YGU0ogoydnU%2BEHPTMpp%2BYM%2BqAa5fimPgAkzidMvbAj%2FjbHHcG81QaagDPdBlzOQ4qvykzHyNUdr2UTzaJbgARSXPtlmaBba%2BS283Eoh1A5Xev5NlnXnuhcS3pvRXrKkgs%2FTMtVXzTLy7OYowJW5MkEgr1e7pqYdCsZI1SrzizU5DIL30VtAS7JDz0rXebknq5nWdTNpW7Y4oDFIRLU1axQ0do9RIB6dJFb37VElXRalymA0THIQsjrjfxBZzrhLekv4gV322RFgYGdBxo8IY3qG1OLDATyKgxtoQXYJItZ%2Bueve%2F5%2F9v9qTwZ7FQOgPPi8Dat82OcEmP9juIVboj6XLzC7u8u%2BBjqkAaogF%2B3Qfy1R2UA2rN4%2FTKG7ngHhVfIF%2FO6fWg6YN%2Bvhh3Bj2fpyFCzndTs1NgAczdKct4Mlb0wH6iUFZCrl91YC0%2BkvkESMlEw4KMbmeEWpvBwhwSuzhi92Y3uBnZGpRIa4ELiJexwsKpoISxOH6nq%2BGvhhxQk%2FrCAdvfeT4lBXXZeoCb5gfPqxZbs%2BoppRQlqJSnhO%2F2KYtjKgmKHNuO7iqk1q&X-Amz-Signature=508933e7d665c629b49882eed1cb9749f3f70114d4c542506a6d1d21941e65d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5LN5QY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqO2qso9FQp%2BpZ20bbV92b1yLqFMb2JW9tkoSH3PZdQIhAJTEwmCE5NEIwpuuVynhvsTDggPdwUwF08XkDB2QJEv5KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNiq5e71LCaNTGPtcq3AOrI%2BKUj%2F6G%2FDwKzFO3r73nLnknpZsRDR41F9B6cw1saNNMTUtLyyT1Ep8KPH7CLBKcDD6vLKRSl9FGKuiRn0ivbIeOWWH3uxdz%2BJJ%2FEyApDrdQuqo30W0OsatBjel0slJ8cVsYEFIDtRJJDykhFUsDGIQM8bhJIMLuGbEm9sCMJecvqVTxJ66fqko8yQZlYml0m%2BuQ5r%2BOdyxuljWgx9iutRCpgdBYPhGkerP04DHKkpHNv79%2FRQca4trBhTusKxfhoHQJaWl0U3vUn2gxSmOg%2BOqPXe8BxD%2FrM2YGU0ogoydnU%2BEHPTMpp%2BYM%2BqAa5fimPgAkzidMvbAj%2FjbHHcG81QaagDPdBlzOQ4qvykzHyNUdr2UTzaJbgARSXPtlmaBba%2BS283Eoh1A5Xev5NlnXnuhcS3pvRXrKkgs%2FTMtVXzTLy7OYowJW5MkEgr1e7pqYdCsZI1SrzizU5DIL30VtAS7JDz0rXebknq5nWdTNpW7Y4oDFIRLU1axQ0do9RIB6dJFb37VElXRalymA0THIQsjrjfxBZzrhLekv4gV322RFgYGdBxo8IY3qG1OLDATyKgxtoQXYJItZ%2Bueve%2F5%2F9v9qTwZ7FQOgPPi8Dat82OcEmP9juIVboj6XLzC7u8u%2BBjqkAaogF%2B3Qfy1R2UA2rN4%2FTKG7ngHhVfIF%2FO6fWg6YN%2Bvhh3Bj2fpyFCzndTs1NgAczdKct4Mlb0wH6iUFZCrl91YC0%2BkvkESMlEw4KMbmeEWpvBwhwSuzhi92Y3uBnZGpRIa4ELiJexwsKpoISxOH6nq%2BGvhhxQk%2FrCAdvfeT4lBXXZeoCb5gfPqxZbs%2BoppRQlqJSnhO%2F2KYtjKgmKHNuO7iqk1q&X-Amz-Signature=89d0cbddd06940eda29f4ffe5aef91e2388ec8805a4dcdad524885ac20fb12f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5LN5QY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqO2qso9FQp%2BpZ20bbV92b1yLqFMb2JW9tkoSH3PZdQIhAJTEwmCE5NEIwpuuVynhvsTDggPdwUwF08XkDB2QJEv5KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNiq5e71LCaNTGPtcq3AOrI%2BKUj%2F6G%2FDwKzFO3r73nLnknpZsRDR41F9B6cw1saNNMTUtLyyT1Ep8KPH7CLBKcDD6vLKRSl9FGKuiRn0ivbIeOWWH3uxdz%2BJJ%2FEyApDrdQuqo30W0OsatBjel0slJ8cVsYEFIDtRJJDykhFUsDGIQM8bhJIMLuGbEm9sCMJecvqVTxJ66fqko8yQZlYml0m%2BuQ5r%2BOdyxuljWgx9iutRCpgdBYPhGkerP04DHKkpHNv79%2FRQca4trBhTusKxfhoHQJaWl0U3vUn2gxSmOg%2BOqPXe8BxD%2FrM2YGU0ogoydnU%2BEHPTMpp%2BYM%2BqAa5fimPgAkzidMvbAj%2FjbHHcG81QaagDPdBlzOQ4qvykzHyNUdr2UTzaJbgARSXPtlmaBba%2BS283Eoh1A5Xev5NlnXnuhcS3pvRXrKkgs%2FTMtVXzTLy7OYowJW5MkEgr1e7pqYdCsZI1SrzizU5DIL30VtAS7JDz0rXebknq5nWdTNpW7Y4oDFIRLU1axQ0do9RIB6dJFb37VElXRalymA0THIQsjrjfxBZzrhLekv4gV322RFgYGdBxo8IY3qG1OLDATyKgxtoQXYJItZ%2Bueve%2F5%2F9v9qTwZ7FQOgPPi8Dat82OcEmP9juIVboj6XLzC7u8u%2BBjqkAaogF%2B3Qfy1R2UA2rN4%2FTKG7ngHhVfIF%2FO6fWg6YN%2Bvhh3Bj2fpyFCzndTs1NgAczdKct4Mlb0wH6iUFZCrl91YC0%2BkvkESMlEw4KMbmeEWpvBwhwSuzhi92Y3uBnZGpRIa4ELiJexwsKpoISxOH6nq%2BGvhhxQk%2FrCAdvfeT4lBXXZeoCb5gfPqxZbs%2BoppRQlqJSnhO%2F2KYtjKgmKHNuO7iqk1q&X-Amz-Signature=d8c067ecc97ee4523bda693c2de2c53ecd90089222f0f07c392b2e1fb0693847&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5LN5QY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqO2qso9FQp%2BpZ20bbV92b1yLqFMb2JW9tkoSH3PZdQIhAJTEwmCE5NEIwpuuVynhvsTDggPdwUwF08XkDB2QJEv5KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNiq5e71LCaNTGPtcq3AOrI%2BKUj%2F6G%2FDwKzFO3r73nLnknpZsRDR41F9B6cw1saNNMTUtLyyT1Ep8KPH7CLBKcDD6vLKRSl9FGKuiRn0ivbIeOWWH3uxdz%2BJJ%2FEyApDrdQuqo30W0OsatBjel0slJ8cVsYEFIDtRJJDykhFUsDGIQM8bhJIMLuGbEm9sCMJecvqVTxJ66fqko8yQZlYml0m%2BuQ5r%2BOdyxuljWgx9iutRCpgdBYPhGkerP04DHKkpHNv79%2FRQca4trBhTusKxfhoHQJaWl0U3vUn2gxSmOg%2BOqPXe8BxD%2FrM2YGU0ogoydnU%2BEHPTMpp%2BYM%2BqAa5fimPgAkzidMvbAj%2FjbHHcG81QaagDPdBlzOQ4qvykzHyNUdr2UTzaJbgARSXPtlmaBba%2BS283Eoh1A5Xev5NlnXnuhcS3pvRXrKkgs%2FTMtVXzTLy7OYowJW5MkEgr1e7pqYdCsZI1SrzizU5DIL30VtAS7JDz0rXebknq5nWdTNpW7Y4oDFIRLU1axQ0do9RIB6dJFb37VElXRalymA0THIQsjrjfxBZzrhLekv4gV322RFgYGdBxo8IY3qG1OLDATyKgxtoQXYJItZ%2Bueve%2F5%2F9v9qTwZ7FQOgPPi8Dat82OcEmP9juIVboj6XLzC7u8u%2BBjqkAaogF%2B3Qfy1R2UA2rN4%2FTKG7ngHhVfIF%2FO6fWg6YN%2Bvhh3Bj2fpyFCzndTs1NgAczdKct4Mlb0wH6iUFZCrl91YC0%2BkvkESMlEw4KMbmeEWpvBwhwSuzhi92Y3uBnZGpRIa4ELiJexwsKpoISxOH6nq%2BGvhhxQk%2FrCAdvfeT4lBXXZeoCb5gfPqxZbs%2BoppRQlqJSnhO%2F2KYtjKgmKHNuO7iqk1q&X-Amz-Signature=f525fcf4b08c08ad0c95c90742fc3e853025c14ba6de3db45161879751762dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5LN5QY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqO2qso9FQp%2BpZ20bbV92b1yLqFMb2JW9tkoSH3PZdQIhAJTEwmCE5NEIwpuuVynhvsTDggPdwUwF08XkDB2QJEv5KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNiq5e71LCaNTGPtcq3AOrI%2BKUj%2F6G%2FDwKzFO3r73nLnknpZsRDR41F9B6cw1saNNMTUtLyyT1Ep8KPH7CLBKcDD6vLKRSl9FGKuiRn0ivbIeOWWH3uxdz%2BJJ%2FEyApDrdQuqo30W0OsatBjel0slJ8cVsYEFIDtRJJDykhFUsDGIQM8bhJIMLuGbEm9sCMJecvqVTxJ66fqko8yQZlYml0m%2BuQ5r%2BOdyxuljWgx9iutRCpgdBYPhGkerP04DHKkpHNv79%2FRQca4trBhTusKxfhoHQJaWl0U3vUn2gxSmOg%2BOqPXe8BxD%2FrM2YGU0ogoydnU%2BEHPTMpp%2BYM%2BqAa5fimPgAkzidMvbAj%2FjbHHcG81QaagDPdBlzOQ4qvykzHyNUdr2UTzaJbgARSXPtlmaBba%2BS283Eoh1A5Xev5NlnXnuhcS3pvRXrKkgs%2FTMtVXzTLy7OYowJW5MkEgr1e7pqYdCsZI1SrzizU5DIL30VtAS7JDz0rXebknq5nWdTNpW7Y4oDFIRLU1axQ0do9RIB6dJFb37VElXRalymA0THIQsjrjfxBZzrhLekv4gV322RFgYGdBxo8IY3qG1OLDATyKgxtoQXYJItZ%2Bueve%2F5%2F9v9qTwZ7FQOgPPi8Dat82OcEmP9juIVboj6XLzC7u8u%2BBjqkAaogF%2B3Qfy1R2UA2rN4%2FTKG7ngHhVfIF%2FO6fWg6YN%2Bvhh3Bj2fpyFCzndTs1NgAczdKct4Mlb0wH6iUFZCrl91YC0%2BkvkESMlEw4KMbmeEWpvBwhwSuzhi92Y3uBnZGpRIa4ELiJexwsKpoISxOH6nq%2BGvhhxQk%2FrCAdvfeT4lBXXZeoCb5gfPqxZbs%2BoppRQlqJSnhO%2F2KYtjKgmKHNuO7iqk1q&X-Amz-Signature=1333c78a8c51d20cf316e204d8a948b5ec0946560f75c59b26035142f63f95e0&X-Amz-SignedHeaders=host&x-id=GetObject)
