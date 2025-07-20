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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5TZYK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgaDJoAICzPwXRN3jpPYpxOQ2prDqt%2FEetbLx3%2B7upQAiEAlrp9GUSXAdMNKQUnHAP9aIgC1KR%2BBCpd8mHh1O%2FnP9YqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlU5E982q2c7ui2OyrcA4SDEqDMfZiYZQTJTrk%2FrV8FhwOi1nZ%2BBfdD3B7Et0jOyeGVr11hiTgTnzabx%2Bv8UPoyMcnVIBlkv8nzJKv5L7DQYCmbeB8HXkwGN9OGoaah8lXDZ8OZ2VNRkiGnxVYaV1MxG1%2FeOaQFzfwC0%2BbB6KsZ7%2FGkpqMhACn4qIVyH%2FPYPOvtsRXbAmatSSCY8FJrAfDsbUuqK49%2FwGc%2B08s9jZMtlEPTBrPJXv0qUVPjjF7a0JSiZUQBA4lVLnAdmBSmjttnNcbXpe9VLtNsMvMtqci8PQ9fRt9PIiIjePADT0ksA5r5zNDuknm98M%2BBgK%2FFAShxqRMRSLZrqrjtNNm5lDpKx9gaMJmu%2Fb2LlNjiciCvOsV%2BrOaGbBHWhXP1wK1pkFWu5%2FBn0iOPS0bV5ptXBt9zhSB2lJFQKwRe%2FUFUieZXJ3ynmAt1vJqrx7nXR1CRBfUPTkDfTpCLAYdd5vMS6gy%2Bp4IzohIdi8uR5FTDNnrO6OAkhRj%2B3OgDDFTO0ruxR02hAg5MFWemeRGd8efRIufKrsoWjlt5uzrm8%2BHpCTqCty4M8Oa2i7NEOOIcAbnBqG34U6%2BxqZiEUb5ydPUL08k3PKRHJor62vslonfvDkwU%2FvJsWas4Dzxuka2tMKTd88MGOqUBJVwsZAaOnHYu9WhI2cXBcUiiBxRnB32qGIvI3KVxCtGsViITQyMfBabFswt7fmBZElbNJt4ao6Sm4FA%2FUUTvtW39p%2BSCvzhBTsaBVHB1Ba7lrNMnyFoGjhcqRzwPUE0TUzp4CR77yQSt9qG22M%2FXg57EoaY7QBc%2B57uOdf8VC9L0opmxRuMrOa6RJJLuvNxLyQva7XXCk1PTJRoRd3yiq32ec96M&X-Amz-Signature=92aa2ae25d1ef57c7d806fd7810b99e34c80be899a14a183e4db36e22ddbc06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5TZYK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgaDJoAICzPwXRN3jpPYpxOQ2prDqt%2FEetbLx3%2B7upQAiEAlrp9GUSXAdMNKQUnHAP9aIgC1KR%2BBCpd8mHh1O%2FnP9YqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlU5E982q2c7ui2OyrcA4SDEqDMfZiYZQTJTrk%2FrV8FhwOi1nZ%2BBfdD3B7Et0jOyeGVr11hiTgTnzabx%2Bv8UPoyMcnVIBlkv8nzJKv5L7DQYCmbeB8HXkwGN9OGoaah8lXDZ8OZ2VNRkiGnxVYaV1MxG1%2FeOaQFzfwC0%2BbB6KsZ7%2FGkpqMhACn4qIVyH%2FPYPOvtsRXbAmatSSCY8FJrAfDsbUuqK49%2FwGc%2B08s9jZMtlEPTBrPJXv0qUVPjjF7a0JSiZUQBA4lVLnAdmBSmjttnNcbXpe9VLtNsMvMtqci8PQ9fRt9PIiIjePADT0ksA5r5zNDuknm98M%2BBgK%2FFAShxqRMRSLZrqrjtNNm5lDpKx9gaMJmu%2Fb2LlNjiciCvOsV%2BrOaGbBHWhXP1wK1pkFWu5%2FBn0iOPS0bV5ptXBt9zhSB2lJFQKwRe%2FUFUieZXJ3ynmAt1vJqrx7nXR1CRBfUPTkDfTpCLAYdd5vMS6gy%2Bp4IzohIdi8uR5FTDNnrO6OAkhRj%2B3OgDDFTO0ruxR02hAg5MFWemeRGd8efRIufKrsoWjlt5uzrm8%2BHpCTqCty4M8Oa2i7NEOOIcAbnBqG34U6%2BxqZiEUb5ydPUL08k3PKRHJor62vslonfvDkwU%2FvJsWas4Dzxuka2tMKTd88MGOqUBJVwsZAaOnHYu9WhI2cXBcUiiBxRnB32qGIvI3KVxCtGsViITQyMfBabFswt7fmBZElbNJt4ao6Sm4FA%2FUUTvtW39p%2BSCvzhBTsaBVHB1Ba7lrNMnyFoGjhcqRzwPUE0TUzp4CR77yQSt9qG22M%2FXg57EoaY7QBc%2B57uOdf8VC9L0opmxRuMrOa6RJJLuvNxLyQva7XXCk1PTJRoRd3yiq32ec96M&X-Amz-Signature=5f2ec3a01c7d109ac8ab4adc591252c08af9bfa53b1e60c0e81bbb004c340b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5TZYK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgaDJoAICzPwXRN3jpPYpxOQ2prDqt%2FEetbLx3%2B7upQAiEAlrp9GUSXAdMNKQUnHAP9aIgC1KR%2BBCpd8mHh1O%2FnP9YqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlU5E982q2c7ui2OyrcA4SDEqDMfZiYZQTJTrk%2FrV8FhwOi1nZ%2BBfdD3B7Et0jOyeGVr11hiTgTnzabx%2Bv8UPoyMcnVIBlkv8nzJKv5L7DQYCmbeB8HXkwGN9OGoaah8lXDZ8OZ2VNRkiGnxVYaV1MxG1%2FeOaQFzfwC0%2BbB6KsZ7%2FGkpqMhACn4qIVyH%2FPYPOvtsRXbAmatSSCY8FJrAfDsbUuqK49%2FwGc%2B08s9jZMtlEPTBrPJXv0qUVPjjF7a0JSiZUQBA4lVLnAdmBSmjttnNcbXpe9VLtNsMvMtqci8PQ9fRt9PIiIjePADT0ksA5r5zNDuknm98M%2BBgK%2FFAShxqRMRSLZrqrjtNNm5lDpKx9gaMJmu%2Fb2LlNjiciCvOsV%2BrOaGbBHWhXP1wK1pkFWu5%2FBn0iOPS0bV5ptXBt9zhSB2lJFQKwRe%2FUFUieZXJ3ynmAt1vJqrx7nXR1CRBfUPTkDfTpCLAYdd5vMS6gy%2Bp4IzohIdi8uR5FTDNnrO6OAkhRj%2B3OgDDFTO0ruxR02hAg5MFWemeRGd8efRIufKrsoWjlt5uzrm8%2BHpCTqCty4M8Oa2i7NEOOIcAbnBqG34U6%2BxqZiEUb5ydPUL08k3PKRHJor62vslonfvDkwU%2FvJsWas4Dzxuka2tMKTd88MGOqUBJVwsZAaOnHYu9WhI2cXBcUiiBxRnB32qGIvI3KVxCtGsViITQyMfBabFswt7fmBZElbNJt4ao6Sm4FA%2FUUTvtW39p%2BSCvzhBTsaBVHB1Ba7lrNMnyFoGjhcqRzwPUE0TUzp4CR77yQSt9qG22M%2FXg57EoaY7QBc%2B57uOdf8VC9L0opmxRuMrOa6RJJLuvNxLyQva7XXCk1PTJRoRd3yiq32ec96M&X-Amz-Signature=353935b3959b67c5a0d2930e50b8f3b03b00b07c1c737771113cb5a1d9a4810b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5TZYK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgaDJoAICzPwXRN3jpPYpxOQ2prDqt%2FEetbLx3%2B7upQAiEAlrp9GUSXAdMNKQUnHAP9aIgC1KR%2BBCpd8mHh1O%2FnP9YqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlU5E982q2c7ui2OyrcA4SDEqDMfZiYZQTJTrk%2FrV8FhwOi1nZ%2BBfdD3B7Et0jOyeGVr11hiTgTnzabx%2Bv8UPoyMcnVIBlkv8nzJKv5L7DQYCmbeB8HXkwGN9OGoaah8lXDZ8OZ2VNRkiGnxVYaV1MxG1%2FeOaQFzfwC0%2BbB6KsZ7%2FGkpqMhACn4qIVyH%2FPYPOvtsRXbAmatSSCY8FJrAfDsbUuqK49%2FwGc%2B08s9jZMtlEPTBrPJXv0qUVPjjF7a0JSiZUQBA4lVLnAdmBSmjttnNcbXpe9VLtNsMvMtqci8PQ9fRt9PIiIjePADT0ksA5r5zNDuknm98M%2BBgK%2FFAShxqRMRSLZrqrjtNNm5lDpKx9gaMJmu%2Fb2LlNjiciCvOsV%2BrOaGbBHWhXP1wK1pkFWu5%2FBn0iOPS0bV5ptXBt9zhSB2lJFQKwRe%2FUFUieZXJ3ynmAt1vJqrx7nXR1CRBfUPTkDfTpCLAYdd5vMS6gy%2Bp4IzohIdi8uR5FTDNnrO6OAkhRj%2B3OgDDFTO0ruxR02hAg5MFWemeRGd8efRIufKrsoWjlt5uzrm8%2BHpCTqCty4M8Oa2i7NEOOIcAbnBqG34U6%2BxqZiEUb5ydPUL08k3PKRHJor62vslonfvDkwU%2FvJsWas4Dzxuka2tMKTd88MGOqUBJVwsZAaOnHYu9WhI2cXBcUiiBxRnB32qGIvI3KVxCtGsViITQyMfBabFswt7fmBZElbNJt4ao6Sm4FA%2FUUTvtW39p%2BSCvzhBTsaBVHB1Ba7lrNMnyFoGjhcqRzwPUE0TUzp4CR77yQSt9qG22M%2FXg57EoaY7QBc%2B57uOdf8VC9L0opmxRuMrOa6RJJLuvNxLyQva7XXCk1PTJRoRd3yiq32ec96M&X-Amz-Signature=ad8dd5bc834e8d2379275aa17903570272602e4f92e3304dbf1c79566e0615ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5TZYK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgaDJoAICzPwXRN3jpPYpxOQ2prDqt%2FEetbLx3%2B7upQAiEAlrp9GUSXAdMNKQUnHAP9aIgC1KR%2BBCpd8mHh1O%2FnP9YqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlU5E982q2c7ui2OyrcA4SDEqDMfZiYZQTJTrk%2FrV8FhwOi1nZ%2BBfdD3B7Et0jOyeGVr11hiTgTnzabx%2Bv8UPoyMcnVIBlkv8nzJKv5L7DQYCmbeB8HXkwGN9OGoaah8lXDZ8OZ2VNRkiGnxVYaV1MxG1%2FeOaQFzfwC0%2BbB6KsZ7%2FGkpqMhACn4qIVyH%2FPYPOvtsRXbAmatSSCY8FJrAfDsbUuqK49%2FwGc%2B08s9jZMtlEPTBrPJXv0qUVPjjF7a0JSiZUQBA4lVLnAdmBSmjttnNcbXpe9VLtNsMvMtqci8PQ9fRt9PIiIjePADT0ksA5r5zNDuknm98M%2BBgK%2FFAShxqRMRSLZrqrjtNNm5lDpKx9gaMJmu%2Fb2LlNjiciCvOsV%2BrOaGbBHWhXP1wK1pkFWu5%2FBn0iOPS0bV5ptXBt9zhSB2lJFQKwRe%2FUFUieZXJ3ynmAt1vJqrx7nXR1CRBfUPTkDfTpCLAYdd5vMS6gy%2Bp4IzohIdi8uR5FTDNnrO6OAkhRj%2B3OgDDFTO0ruxR02hAg5MFWemeRGd8efRIufKrsoWjlt5uzrm8%2BHpCTqCty4M8Oa2i7NEOOIcAbnBqG34U6%2BxqZiEUb5ydPUL08k3PKRHJor62vslonfvDkwU%2FvJsWas4Dzxuka2tMKTd88MGOqUBJVwsZAaOnHYu9WhI2cXBcUiiBxRnB32qGIvI3KVxCtGsViITQyMfBabFswt7fmBZElbNJt4ao6Sm4FA%2FUUTvtW39p%2BSCvzhBTsaBVHB1Ba7lrNMnyFoGjhcqRzwPUE0TUzp4CR77yQSt9qG22M%2FXg57EoaY7QBc%2B57uOdf8VC9L0opmxRuMrOa6RJJLuvNxLyQva7XXCk1PTJRoRd3yiq32ec96M&X-Amz-Signature=5743b17c9667dd96ca1992c307081ae988e88b11845712f09d88659858d89bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5TZYK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgaDJoAICzPwXRN3jpPYpxOQ2prDqt%2FEetbLx3%2B7upQAiEAlrp9GUSXAdMNKQUnHAP9aIgC1KR%2BBCpd8mHh1O%2FnP9YqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlU5E982q2c7ui2OyrcA4SDEqDMfZiYZQTJTrk%2FrV8FhwOi1nZ%2BBfdD3B7Et0jOyeGVr11hiTgTnzabx%2Bv8UPoyMcnVIBlkv8nzJKv5L7DQYCmbeB8HXkwGN9OGoaah8lXDZ8OZ2VNRkiGnxVYaV1MxG1%2FeOaQFzfwC0%2BbB6KsZ7%2FGkpqMhACn4qIVyH%2FPYPOvtsRXbAmatSSCY8FJrAfDsbUuqK49%2FwGc%2B08s9jZMtlEPTBrPJXv0qUVPjjF7a0JSiZUQBA4lVLnAdmBSmjttnNcbXpe9VLtNsMvMtqci8PQ9fRt9PIiIjePADT0ksA5r5zNDuknm98M%2BBgK%2FFAShxqRMRSLZrqrjtNNm5lDpKx9gaMJmu%2Fb2LlNjiciCvOsV%2BrOaGbBHWhXP1wK1pkFWu5%2FBn0iOPS0bV5ptXBt9zhSB2lJFQKwRe%2FUFUieZXJ3ynmAt1vJqrx7nXR1CRBfUPTkDfTpCLAYdd5vMS6gy%2Bp4IzohIdi8uR5FTDNnrO6OAkhRj%2B3OgDDFTO0ruxR02hAg5MFWemeRGd8efRIufKrsoWjlt5uzrm8%2BHpCTqCty4M8Oa2i7NEOOIcAbnBqG34U6%2BxqZiEUb5ydPUL08k3PKRHJor62vslonfvDkwU%2FvJsWas4Dzxuka2tMKTd88MGOqUBJVwsZAaOnHYu9WhI2cXBcUiiBxRnB32qGIvI3KVxCtGsViITQyMfBabFswt7fmBZElbNJt4ao6Sm4FA%2FUUTvtW39p%2BSCvzhBTsaBVHB1Ba7lrNMnyFoGjhcqRzwPUE0TUzp4CR77yQSt9qG22M%2FXg57EoaY7QBc%2B57uOdf8VC9L0opmxRuMrOa6RJJLuvNxLyQva7XXCk1PTJRoRd3yiq32ec96M&X-Amz-Signature=a886c8bc3687b828a3131c0d4ebc7ed2d4e5e93c4feaf5be2136a1edc76dbc90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
