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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635FY7OXD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFCc%2Bh3pT6ddCi2W0tW0qV2Vb4qoiqrhOy9H%2F8GeJGUjAiEA6UvmuPXFEdHeThDoxtcJ37iQsD78sbg8dXut%2B8nMRVAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3t%2BriwhvMB30PutCrcA3dN7BHmZH801itZDcgVidlWmNQMKQIca0tFoibX48Cp0X9uXCpSeAfyu4DNYwN2krGC7a1JgMrDIMqt%2Bc34rF%2FJbGF4QfyVrQk6aTsoAKpIWCNAuUAtTnr5Smh8xioAJj8YXCEMdYP9AgMfaZ4leKrC3BCa%2BUcOhcdZqpsRCCGRqnW4qlck49zJ1A9DhNb6MFYsYCZ6%2BNCnJGRZLvD6ivOQnzdGyt0k7%2BwvjFeDmf%2FX29M7K40XacBvAyp9Vfyu9GLSDf0GqrXyPZvfIeXfdZ2LIMxyySCRLrMqCUPoFFOValIbJjh3Uc4xnDF%2Fsw0PTPntrcanWYY5x4bfQuNILvbTqQDJ2KHUt4l8RoTSqAtfC4ddGqfwvm5b%2ByoR4GqdLLQzXTLQhuisFRtFA1J9kM8zDbwKZSOFhS%2BAcnAB%2BJLeX2PQuSn%2FyWwFYS36hZc1tkqeYZ0WaaktNftA82hOsoP5p1crjs8bus3ZUO631ubLTHIZtCp4UHxWDJ7L%2FIsuqDCGqzYWWuLa7CSiueBZgfaTwGZOVezWhTLeWCDDnv986R%2BIsk7zonX0KlNjn5EEfQ0vLfMXod35g%2BLe4NbiJ9LCV%2FNUbzHLyc6ziiUwkH%2BUaMMZimKKppbivbiUMPyFhL0GOqUBrQ194AsH6Ri1jIiEEkcHECu0%2FY2SXj4FLmncw9e%2BUZROt9UCyJwa4E%2F41z%2FzeeNlZ%2FeIeWByUFxfMOp47MbGv%2BGQkd1sx46Qj%2B%2BQuupuN2DDntkLKaQ8r8iU5W4yGTXbtvJJC7ER6xdJoHzcCp2PfiNt2X8wpZaGbpgL3GZ4epwD9taq7um%2FksooNsITK9NqgBpgwqOKcb%2BVxwrVwPmFoAlFTMis&X-Amz-Signature=09711f0eb9e5aa310bfd2fb2723c115a79d758f715ec9fa12ad487e4ec3a606e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635FY7OXD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFCc%2Bh3pT6ddCi2W0tW0qV2Vb4qoiqrhOy9H%2F8GeJGUjAiEA6UvmuPXFEdHeThDoxtcJ37iQsD78sbg8dXut%2B8nMRVAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3t%2BriwhvMB30PutCrcA3dN7BHmZH801itZDcgVidlWmNQMKQIca0tFoibX48Cp0X9uXCpSeAfyu4DNYwN2krGC7a1JgMrDIMqt%2Bc34rF%2FJbGF4QfyVrQk6aTsoAKpIWCNAuUAtTnr5Smh8xioAJj8YXCEMdYP9AgMfaZ4leKrC3BCa%2BUcOhcdZqpsRCCGRqnW4qlck49zJ1A9DhNb6MFYsYCZ6%2BNCnJGRZLvD6ivOQnzdGyt0k7%2BwvjFeDmf%2FX29M7K40XacBvAyp9Vfyu9GLSDf0GqrXyPZvfIeXfdZ2LIMxyySCRLrMqCUPoFFOValIbJjh3Uc4xnDF%2Fsw0PTPntrcanWYY5x4bfQuNILvbTqQDJ2KHUt4l8RoTSqAtfC4ddGqfwvm5b%2ByoR4GqdLLQzXTLQhuisFRtFA1J9kM8zDbwKZSOFhS%2BAcnAB%2BJLeX2PQuSn%2FyWwFYS36hZc1tkqeYZ0WaaktNftA82hOsoP5p1crjs8bus3ZUO631ubLTHIZtCp4UHxWDJ7L%2FIsuqDCGqzYWWuLa7CSiueBZgfaTwGZOVezWhTLeWCDDnv986R%2BIsk7zonX0KlNjn5EEfQ0vLfMXod35g%2BLe4NbiJ9LCV%2FNUbzHLyc6ziiUwkH%2BUaMMZimKKppbivbiUMPyFhL0GOqUBrQ194AsH6Ri1jIiEEkcHECu0%2FY2SXj4FLmncw9e%2BUZROt9UCyJwa4E%2F41z%2FzeeNlZ%2FeIeWByUFxfMOp47MbGv%2BGQkd1sx46Qj%2B%2BQuupuN2DDntkLKaQ8r8iU5W4yGTXbtvJJC7ER6xdJoHzcCp2PfiNt2X8wpZaGbpgL3GZ4epwD9taq7um%2FksooNsITK9NqgBpgwqOKcb%2BVxwrVwPmFoAlFTMis&X-Amz-Signature=bf347c016dc40ea0fb48d6705a81455a532c8fc5f8aed6a0a4f032ef4690abcf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635FY7OXD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFCc%2Bh3pT6ddCi2W0tW0qV2Vb4qoiqrhOy9H%2F8GeJGUjAiEA6UvmuPXFEdHeThDoxtcJ37iQsD78sbg8dXut%2B8nMRVAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3t%2BriwhvMB30PutCrcA3dN7BHmZH801itZDcgVidlWmNQMKQIca0tFoibX48Cp0X9uXCpSeAfyu4DNYwN2krGC7a1JgMrDIMqt%2Bc34rF%2FJbGF4QfyVrQk6aTsoAKpIWCNAuUAtTnr5Smh8xioAJj8YXCEMdYP9AgMfaZ4leKrC3BCa%2BUcOhcdZqpsRCCGRqnW4qlck49zJ1A9DhNb6MFYsYCZ6%2BNCnJGRZLvD6ivOQnzdGyt0k7%2BwvjFeDmf%2FX29M7K40XacBvAyp9Vfyu9GLSDf0GqrXyPZvfIeXfdZ2LIMxyySCRLrMqCUPoFFOValIbJjh3Uc4xnDF%2Fsw0PTPntrcanWYY5x4bfQuNILvbTqQDJ2KHUt4l8RoTSqAtfC4ddGqfwvm5b%2ByoR4GqdLLQzXTLQhuisFRtFA1J9kM8zDbwKZSOFhS%2BAcnAB%2BJLeX2PQuSn%2FyWwFYS36hZc1tkqeYZ0WaaktNftA82hOsoP5p1crjs8bus3ZUO631ubLTHIZtCp4UHxWDJ7L%2FIsuqDCGqzYWWuLa7CSiueBZgfaTwGZOVezWhTLeWCDDnv986R%2BIsk7zonX0KlNjn5EEfQ0vLfMXod35g%2BLe4NbiJ9LCV%2FNUbzHLyc6ziiUwkH%2BUaMMZimKKppbivbiUMPyFhL0GOqUBrQ194AsH6Ri1jIiEEkcHECu0%2FY2SXj4FLmncw9e%2BUZROt9UCyJwa4E%2F41z%2FzeeNlZ%2FeIeWByUFxfMOp47MbGv%2BGQkd1sx46Qj%2B%2BQuupuN2DDntkLKaQ8r8iU5W4yGTXbtvJJC7ER6xdJoHzcCp2PfiNt2X8wpZaGbpgL3GZ4epwD9taq7um%2FksooNsITK9NqgBpgwqOKcb%2BVxwrVwPmFoAlFTMis&X-Amz-Signature=7a18007698fa08831735de071a124ee3b761cafcff6b21de060b1c8f4f11e0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635FY7OXD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFCc%2Bh3pT6ddCi2W0tW0qV2Vb4qoiqrhOy9H%2F8GeJGUjAiEA6UvmuPXFEdHeThDoxtcJ37iQsD78sbg8dXut%2B8nMRVAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3t%2BriwhvMB30PutCrcA3dN7BHmZH801itZDcgVidlWmNQMKQIca0tFoibX48Cp0X9uXCpSeAfyu4DNYwN2krGC7a1JgMrDIMqt%2Bc34rF%2FJbGF4QfyVrQk6aTsoAKpIWCNAuUAtTnr5Smh8xioAJj8YXCEMdYP9AgMfaZ4leKrC3BCa%2BUcOhcdZqpsRCCGRqnW4qlck49zJ1A9DhNb6MFYsYCZ6%2BNCnJGRZLvD6ivOQnzdGyt0k7%2BwvjFeDmf%2FX29M7K40XacBvAyp9Vfyu9GLSDf0GqrXyPZvfIeXfdZ2LIMxyySCRLrMqCUPoFFOValIbJjh3Uc4xnDF%2Fsw0PTPntrcanWYY5x4bfQuNILvbTqQDJ2KHUt4l8RoTSqAtfC4ddGqfwvm5b%2ByoR4GqdLLQzXTLQhuisFRtFA1J9kM8zDbwKZSOFhS%2BAcnAB%2BJLeX2PQuSn%2FyWwFYS36hZc1tkqeYZ0WaaktNftA82hOsoP5p1crjs8bus3ZUO631ubLTHIZtCp4UHxWDJ7L%2FIsuqDCGqzYWWuLa7CSiueBZgfaTwGZOVezWhTLeWCDDnv986R%2BIsk7zonX0KlNjn5EEfQ0vLfMXod35g%2BLe4NbiJ9LCV%2FNUbzHLyc6ziiUwkH%2BUaMMZimKKppbivbiUMPyFhL0GOqUBrQ194AsH6Ri1jIiEEkcHECu0%2FY2SXj4FLmncw9e%2BUZROt9UCyJwa4E%2F41z%2FzeeNlZ%2FeIeWByUFxfMOp47MbGv%2BGQkd1sx46Qj%2B%2BQuupuN2DDntkLKaQ8r8iU5W4yGTXbtvJJC7ER6xdJoHzcCp2PfiNt2X8wpZaGbpgL3GZ4epwD9taq7um%2FksooNsITK9NqgBpgwqOKcb%2BVxwrVwPmFoAlFTMis&X-Amz-Signature=6152948db5f1af5e7b48b2dcde37fc5330a2e714c83b933cc2774e1fdbf87276&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635FY7OXD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFCc%2Bh3pT6ddCi2W0tW0qV2Vb4qoiqrhOy9H%2F8GeJGUjAiEA6UvmuPXFEdHeThDoxtcJ37iQsD78sbg8dXut%2B8nMRVAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3t%2BriwhvMB30PutCrcA3dN7BHmZH801itZDcgVidlWmNQMKQIca0tFoibX48Cp0X9uXCpSeAfyu4DNYwN2krGC7a1JgMrDIMqt%2Bc34rF%2FJbGF4QfyVrQk6aTsoAKpIWCNAuUAtTnr5Smh8xioAJj8YXCEMdYP9AgMfaZ4leKrC3BCa%2BUcOhcdZqpsRCCGRqnW4qlck49zJ1A9DhNb6MFYsYCZ6%2BNCnJGRZLvD6ivOQnzdGyt0k7%2BwvjFeDmf%2FX29M7K40XacBvAyp9Vfyu9GLSDf0GqrXyPZvfIeXfdZ2LIMxyySCRLrMqCUPoFFOValIbJjh3Uc4xnDF%2Fsw0PTPntrcanWYY5x4bfQuNILvbTqQDJ2KHUt4l8RoTSqAtfC4ddGqfwvm5b%2ByoR4GqdLLQzXTLQhuisFRtFA1J9kM8zDbwKZSOFhS%2BAcnAB%2BJLeX2PQuSn%2FyWwFYS36hZc1tkqeYZ0WaaktNftA82hOsoP5p1crjs8bus3ZUO631ubLTHIZtCp4UHxWDJ7L%2FIsuqDCGqzYWWuLa7CSiueBZgfaTwGZOVezWhTLeWCDDnv986R%2BIsk7zonX0KlNjn5EEfQ0vLfMXod35g%2BLe4NbiJ9LCV%2FNUbzHLyc6ziiUwkH%2BUaMMZimKKppbivbiUMPyFhL0GOqUBrQ194AsH6Ri1jIiEEkcHECu0%2FY2SXj4FLmncw9e%2BUZROt9UCyJwa4E%2F41z%2FzeeNlZ%2FeIeWByUFxfMOp47MbGv%2BGQkd1sx46Qj%2B%2BQuupuN2DDntkLKaQ8r8iU5W4yGTXbtvJJC7ER6xdJoHzcCp2PfiNt2X8wpZaGbpgL3GZ4epwD9taq7um%2FksooNsITK9NqgBpgwqOKcb%2BVxwrVwPmFoAlFTMis&X-Amz-Signature=ff3f0f30c7fda21c7fc243fdfbf4c9c159f03dd09bbef6f6adaa3da41486a5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635FY7OXD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFCc%2Bh3pT6ddCi2W0tW0qV2Vb4qoiqrhOy9H%2F8GeJGUjAiEA6UvmuPXFEdHeThDoxtcJ37iQsD78sbg8dXut%2B8nMRVAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3t%2BriwhvMB30PutCrcA3dN7BHmZH801itZDcgVidlWmNQMKQIca0tFoibX48Cp0X9uXCpSeAfyu4DNYwN2krGC7a1JgMrDIMqt%2Bc34rF%2FJbGF4QfyVrQk6aTsoAKpIWCNAuUAtTnr5Smh8xioAJj8YXCEMdYP9AgMfaZ4leKrC3BCa%2BUcOhcdZqpsRCCGRqnW4qlck49zJ1A9DhNb6MFYsYCZ6%2BNCnJGRZLvD6ivOQnzdGyt0k7%2BwvjFeDmf%2FX29M7K40XacBvAyp9Vfyu9GLSDf0GqrXyPZvfIeXfdZ2LIMxyySCRLrMqCUPoFFOValIbJjh3Uc4xnDF%2Fsw0PTPntrcanWYY5x4bfQuNILvbTqQDJ2KHUt4l8RoTSqAtfC4ddGqfwvm5b%2ByoR4GqdLLQzXTLQhuisFRtFA1J9kM8zDbwKZSOFhS%2BAcnAB%2BJLeX2PQuSn%2FyWwFYS36hZc1tkqeYZ0WaaktNftA82hOsoP5p1crjs8bus3ZUO631ubLTHIZtCp4UHxWDJ7L%2FIsuqDCGqzYWWuLa7CSiueBZgfaTwGZOVezWhTLeWCDDnv986R%2BIsk7zonX0KlNjn5EEfQ0vLfMXod35g%2BLe4NbiJ9LCV%2FNUbzHLyc6ziiUwkH%2BUaMMZimKKppbivbiUMPyFhL0GOqUBrQ194AsH6Ri1jIiEEkcHECu0%2FY2SXj4FLmncw9e%2BUZROt9UCyJwa4E%2F41z%2FzeeNlZ%2FeIeWByUFxfMOp47MbGv%2BGQkd1sx46Qj%2B%2BQuupuN2DDntkLKaQ8r8iU5W4yGTXbtvJJC7ER6xdJoHzcCp2PfiNt2X8wpZaGbpgL3GZ4epwD9taq7um%2FksooNsITK9NqgBpgwqOKcb%2BVxwrVwPmFoAlFTMis&X-Amz-Signature=e671ac233404ada2d9b6282498844c2bdd061ff632fc7cc389a035c61c9504f5&X-Amz-SignedHeaders=host&x-id=GetObject)
