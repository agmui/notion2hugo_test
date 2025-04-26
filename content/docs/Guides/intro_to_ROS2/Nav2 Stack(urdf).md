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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCCGVFO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVALewspNb97AYhu%2FxFf5v%2Bd37uLEXagsg6G8n%2Bmlo8AIhALX0tVo9kBtqZfrJpERYfrzlkFJNrvdTUHP0EJM2WF4CKv8DCEgQABoMNjM3NDIzMTgzODA1IgwCfRUPY2UcRcAxh78q3AO%2FXX51Q5UFcCrA7b4Q3%2BdcthkyD8BTFIlja6w8ceODye%2B3zeM0awnnCPJI%2FAN0QidBrzGeaBl%2FGY5WydQ4uqHPrpzXF%2FQ%2BpxeTh%2FjEou%2BbGToD%2Fl8zRTMYdO3RMIiZrXHVxPP%2FBu5it7ADuvjOW7K5p09Tuf0uZyg%2FeOpGvV%2B5QV9iZq57Prt4j2jsrAnY6y2omKPNx2iuEkuZxGKWe185MG5CoFomxbrW55Cr8KfMIZnL8VcwLSHrZK3SocPTVYZYLNpQcLITSVUohFOmK7ChaVD1Pl0UxszMT61oASIAGm4r3LvzZcZ1RiHXWklxBp2J6w0mdacTt3BpvVBDDX2QSqIbWZI3503tqeCriwPtuLQUEV3uxYuzYhx5efzFdgWi%2Fozi0gSjZkKBp0mGg5WfNniscHqzrkEvVAKpehIQgJoGTAk7hy5VOzxNKqUQa9NaIWrQQAdDom0n9gzfUpm0tlYf2yesV5pOzNacr9rYWUP09LkY%2FmkQLBd4kGfJTr9mffHz0v%2BRvMQlaW6W6PqfsFbESinmpQNX3wZ9iuFwCRUmUP%2FEf7bFEpi%2FoxmtPOC6Iu10Zzj62gDHy4AaE8spHAoEN5EH5voO%2Fp8Us5Q5EJY8ETXf1cvls2P0mzDv5rPABjqkASqibBhUweuJ2gLrKkLgkgBncgUU3uOXjkbtl2BjOo6LGdtThKZY2RderkXPzUAvSrkpJId9J3SgeTlDGHVyZNMu67DPUJ%2Ft1PU%2F%2BQgYZ8EZT6cG0rUT6bWTZi8MKS0DQoFodLE1oUpiRbAUlLnMcaEmsAUHSBZoNUAD46WXkMXkcvXrGTBVGQbmwf47nedxpcx%2BlLTJEfXY8XOH5%2FNAUcsCkBJn&X-Amz-Signature=e2264594ac000592e122b05b5cbf21fc4c1ae301bac66d3aaf50b325d069fd66&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCCGVFO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVALewspNb97AYhu%2FxFf5v%2Bd37uLEXagsg6G8n%2Bmlo8AIhALX0tVo9kBtqZfrJpERYfrzlkFJNrvdTUHP0EJM2WF4CKv8DCEgQABoMNjM3NDIzMTgzODA1IgwCfRUPY2UcRcAxh78q3AO%2FXX51Q5UFcCrA7b4Q3%2BdcthkyD8BTFIlja6w8ceODye%2B3zeM0awnnCPJI%2FAN0QidBrzGeaBl%2FGY5WydQ4uqHPrpzXF%2FQ%2BpxeTh%2FjEou%2BbGToD%2Fl8zRTMYdO3RMIiZrXHVxPP%2FBu5it7ADuvjOW7K5p09Tuf0uZyg%2FeOpGvV%2B5QV9iZq57Prt4j2jsrAnY6y2omKPNx2iuEkuZxGKWe185MG5CoFomxbrW55Cr8KfMIZnL8VcwLSHrZK3SocPTVYZYLNpQcLITSVUohFOmK7ChaVD1Pl0UxszMT61oASIAGm4r3LvzZcZ1RiHXWklxBp2J6w0mdacTt3BpvVBDDX2QSqIbWZI3503tqeCriwPtuLQUEV3uxYuzYhx5efzFdgWi%2Fozi0gSjZkKBp0mGg5WfNniscHqzrkEvVAKpehIQgJoGTAk7hy5VOzxNKqUQa9NaIWrQQAdDom0n9gzfUpm0tlYf2yesV5pOzNacr9rYWUP09LkY%2FmkQLBd4kGfJTr9mffHz0v%2BRvMQlaW6W6PqfsFbESinmpQNX3wZ9iuFwCRUmUP%2FEf7bFEpi%2FoxmtPOC6Iu10Zzj62gDHy4AaE8spHAoEN5EH5voO%2Fp8Us5Q5EJY8ETXf1cvls2P0mzDv5rPABjqkASqibBhUweuJ2gLrKkLgkgBncgUU3uOXjkbtl2BjOo6LGdtThKZY2RderkXPzUAvSrkpJId9J3SgeTlDGHVyZNMu67DPUJ%2Ft1PU%2F%2BQgYZ8EZT6cG0rUT6bWTZi8MKS0DQoFodLE1oUpiRbAUlLnMcaEmsAUHSBZoNUAD46WXkMXkcvXrGTBVGQbmwf47nedxpcx%2BlLTJEfXY8XOH5%2FNAUcsCkBJn&X-Amz-Signature=4f377d9037845560b322c97dcc75caef6cd6584c6b0f8dcaf5f86ca234bc1b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCCGVFO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVALewspNb97AYhu%2FxFf5v%2Bd37uLEXagsg6G8n%2Bmlo8AIhALX0tVo9kBtqZfrJpERYfrzlkFJNrvdTUHP0EJM2WF4CKv8DCEgQABoMNjM3NDIzMTgzODA1IgwCfRUPY2UcRcAxh78q3AO%2FXX51Q5UFcCrA7b4Q3%2BdcthkyD8BTFIlja6w8ceODye%2B3zeM0awnnCPJI%2FAN0QidBrzGeaBl%2FGY5WydQ4uqHPrpzXF%2FQ%2BpxeTh%2FjEou%2BbGToD%2Fl8zRTMYdO3RMIiZrXHVxPP%2FBu5it7ADuvjOW7K5p09Tuf0uZyg%2FeOpGvV%2B5QV9iZq57Prt4j2jsrAnY6y2omKPNx2iuEkuZxGKWe185MG5CoFomxbrW55Cr8KfMIZnL8VcwLSHrZK3SocPTVYZYLNpQcLITSVUohFOmK7ChaVD1Pl0UxszMT61oASIAGm4r3LvzZcZ1RiHXWklxBp2J6w0mdacTt3BpvVBDDX2QSqIbWZI3503tqeCriwPtuLQUEV3uxYuzYhx5efzFdgWi%2Fozi0gSjZkKBp0mGg5WfNniscHqzrkEvVAKpehIQgJoGTAk7hy5VOzxNKqUQa9NaIWrQQAdDom0n9gzfUpm0tlYf2yesV5pOzNacr9rYWUP09LkY%2FmkQLBd4kGfJTr9mffHz0v%2BRvMQlaW6W6PqfsFbESinmpQNX3wZ9iuFwCRUmUP%2FEf7bFEpi%2FoxmtPOC6Iu10Zzj62gDHy4AaE8spHAoEN5EH5voO%2Fp8Us5Q5EJY8ETXf1cvls2P0mzDv5rPABjqkASqibBhUweuJ2gLrKkLgkgBncgUU3uOXjkbtl2BjOo6LGdtThKZY2RderkXPzUAvSrkpJId9J3SgeTlDGHVyZNMu67DPUJ%2Ft1PU%2F%2BQgYZ8EZT6cG0rUT6bWTZi8MKS0DQoFodLE1oUpiRbAUlLnMcaEmsAUHSBZoNUAD46WXkMXkcvXrGTBVGQbmwf47nedxpcx%2BlLTJEfXY8XOH5%2FNAUcsCkBJn&X-Amz-Signature=7210a6da5bf91c96db43f1a20ae78214aa532b33afb382b6e0d4a765494cc1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCCGVFO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVALewspNb97AYhu%2FxFf5v%2Bd37uLEXagsg6G8n%2Bmlo8AIhALX0tVo9kBtqZfrJpERYfrzlkFJNrvdTUHP0EJM2WF4CKv8DCEgQABoMNjM3NDIzMTgzODA1IgwCfRUPY2UcRcAxh78q3AO%2FXX51Q5UFcCrA7b4Q3%2BdcthkyD8BTFIlja6w8ceODye%2B3zeM0awnnCPJI%2FAN0QidBrzGeaBl%2FGY5WydQ4uqHPrpzXF%2FQ%2BpxeTh%2FjEou%2BbGToD%2Fl8zRTMYdO3RMIiZrXHVxPP%2FBu5it7ADuvjOW7K5p09Tuf0uZyg%2FeOpGvV%2B5QV9iZq57Prt4j2jsrAnY6y2omKPNx2iuEkuZxGKWe185MG5CoFomxbrW55Cr8KfMIZnL8VcwLSHrZK3SocPTVYZYLNpQcLITSVUohFOmK7ChaVD1Pl0UxszMT61oASIAGm4r3LvzZcZ1RiHXWklxBp2J6w0mdacTt3BpvVBDDX2QSqIbWZI3503tqeCriwPtuLQUEV3uxYuzYhx5efzFdgWi%2Fozi0gSjZkKBp0mGg5WfNniscHqzrkEvVAKpehIQgJoGTAk7hy5VOzxNKqUQa9NaIWrQQAdDom0n9gzfUpm0tlYf2yesV5pOzNacr9rYWUP09LkY%2FmkQLBd4kGfJTr9mffHz0v%2BRvMQlaW6W6PqfsFbESinmpQNX3wZ9iuFwCRUmUP%2FEf7bFEpi%2FoxmtPOC6Iu10Zzj62gDHy4AaE8spHAoEN5EH5voO%2Fp8Us5Q5EJY8ETXf1cvls2P0mzDv5rPABjqkASqibBhUweuJ2gLrKkLgkgBncgUU3uOXjkbtl2BjOo6LGdtThKZY2RderkXPzUAvSrkpJId9J3SgeTlDGHVyZNMu67DPUJ%2Ft1PU%2F%2BQgYZ8EZT6cG0rUT6bWTZi8MKS0DQoFodLE1oUpiRbAUlLnMcaEmsAUHSBZoNUAD46WXkMXkcvXrGTBVGQbmwf47nedxpcx%2BlLTJEfXY8XOH5%2FNAUcsCkBJn&X-Amz-Signature=f67cb82970bc550607768a4dcf56ebecd0e7a5d82ae456870181186f2491fab3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCCGVFO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVALewspNb97AYhu%2FxFf5v%2Bd37uLEXagsg6G8n%2Bmlo8AIhALX0tVo9kBtqZfrJpERYfrzlkFJNrvdTUHP0EJM2WF4CKv8DCEgQABoMNjM3NDIzMTgzODA1IgwCfRUPY2UcRcAxh78q3AO%2FXX51Q5UFcCrA7b4Q3%2BdcthkyD8BTFIlja6w8ceODye%2B3zeM0awnnCPJI%2FAN0QidBrzGeaBl%2FGY5WydQ4uqHPrpzXF%2FQ%2BpxeTh%2FjEou%2BbGToD%2Fl8zRTMYdO3RMIiZrXHVxPP%2FBu5it7ADuvjOW7K5p09Tuf0uZyg%2FeOpGvV%2B5QV9iZq57Prt4j2jsrAnY6y2omKPNx2iuEkuZxGKWe185MG5CoFomxbrW55Cr8KfMIZnL8VcwLSHrZK3SocPTVYZYLNpQcLITSVUohFOmK7ChaVD1Pl0UxszMT61oASIAGm4r3LvzZcZ1RiHXWklxBp2J6w0mdacTt3BpvVBDDX2QSqIbWZI3503tqeCriwPtuLQUEV3uxYuzYhx5efzFdgWi%2Fozi0gSjZkKBp0mGg5WfNniscHqzrkEvVAKpehIQgJoGTAk7hy5VOzxNKqUQa9NaIWrQQAdDom0n9gzfUpm0tlYf2yesV5pOzNacr9rYWUP09LkY%2FmkQLBd4kGfJTr9mffHz0v%2BRvMQlaW6W6PqfsFbESinmpQNX3wZ9iuFwCRUmUP%2FEf7bFEpi%2FoxmtPOC6Iu10Zzj62gDHy4AaE8spHAoEN5EH5voO%2Fp8Us5Q5EJY8ETXf1cvls2P0mzDv5rPABjqkASqibBhUweuJ2gLrKkLgkgBncgUU3uOXjkbtl2BjOo6LGdtThKZY2RderkXPzUAvSrkpJId9J3SgeTlDGHVyZNMu67DPUJ%2Ft1PU%2F%2BQgYZ8EZT6cG0rUT6bWTZi8MKS0DQoFodLE1oUpiRbAUlLnMcaEmsAUHSBZoNUAD46WXkMXkcvXrGTBVGQbmwf47nedxpcx%2BlLTJEfXY8XOH5%2FNAUcsCkBJn&X-Amz-Signature=d14e39dc9a9ce72c6b5e269d4a2dfacb6a9492ce6d7cdc6f8c3f6e55033f4859&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCCGVFO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVALewspNb97AYhu%2FxFf5v%2Bd37uLEXagsg6G8n%2Bmlo8AIhALX0tVo9kBtqZfrJpERYfrzlkFJNrvdTUHP0EJM2WF4CKv8DCEgQABoMNjM3NDIzMTgzODA1IgwCfRUPY2UcRcAxh78q3AO%2FXX51Q5UFcCrA7b4Q3%2BdcthkyD8BTFIlja6w8ceODye%2B3zeM0awnnCPJI%2FAN0QidBrzGeaBl%2FGY5WydQ4uqHPrpzXF%2FQ%2BpxeTh%2FjEou%2BbGToD%2Fl8zRTMYdO3RMIiZrXHVxPP%2FBu5it7ADuvjOW7K5p09Tuf0uZyg%2FeOpGvV%2B5QV9iZq57Prt4j2jsrAnY6y2omKPNx2iuEkuZxGKWe185MG5CoFomxbrW55Cr8KfMIZnL8VcwLSHrZK3SocPTVYZYLNpQcLITSVUohFOmK7ChaVD1Pl0UxszMT61oASIAGm4r3LvzZcZ1RiHXWklxBp2J6w0mdacTt3BpvVBDDX2QSqIbWZI3503tqeCriwPtuLQUEV3uxYuzYhx5efzFdgWi%2Fozi0gSjZkKBp0mGg5WfNniscHqzrkEvVAKpehIQgJoGTAk7hy5VOzxNKqUQa9NaIWrQQAdDom0n9gzfUpm0tlYf2yesV5pOzNacr9rYWUP09LkY%2FmkQLBd4kGfJTr9mffHz0v%2BRvMQlaW6W6PqfsFbESinmpQNX3wZ9iuFwCRUmUP%2FEf7bFEpi%2FoxmtPOC6Iu10Zzj62gDHy4AaE8spHAoEN5EH5voO%2Fp8Us5Q5EJY8ETXf1cvls2P0mzDv5rPABjqkASqibBhUweuJ2gLrKkLgkgBncgUU3uOXjkbtl2BjOo6LGdtThKZY2RderkXPzUAvSrkpJId9J3SgeTlDGHVyZNMu67DPUJ%2Ft1PU%2F%2BQgYZ8EZT6cG0rUT6bWTZi8MKS0DQoFodLE1oUpiRbAUlLnMcaEmsAUHSBZoNUAD46WXkMXkcvXrGTBVGQbmwf47nedxpcx%2BlLTJEfXY8XOH5%2FNAUcsCkBJn&X-Amz-Signature=afe98f28ac4392cccbf68bd47b377548f0ff2a8ca77eda4ef0674d4329508843&X-Amz-SignedHeaders=host&x-id=GetObject)
