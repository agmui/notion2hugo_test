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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRYHPSB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFttS38HU9fkK6UMZo8QAltQopa2sv1tnfaC95ZImVPzAiEAu%2BcXA9UY8HSgZpuhVZtK629VFZUq0NVSNs8FEHU1phoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMK57QURT3DXsPqxDCrcA%2FQOz9iCTPAz0ln6cR2xlIhPoThQAvI3tZ%2FO2OUIcBmwoqD9kvSg1s%2BkBs2BU4Vz7YIbB%2BB72ttBSsXrXV5YubvrqTBnk0K8aNpOoUzE%2FX9pOfMQkDjLRELh0wWE3nrlNPxZEnhQbZF3bHI0o8LEBB8vveoU3SSRubeJ%2Bi8x1K3lvVnepgxHtMO%2Fa5P1q%2B1%2Fzxz306sMYnkVH2%2FQVv7dd5aTSGkHu1ZV69%2BViENNnUgW2zuWZFwziB%2FpwWZ%2Ft1InDfbsxGmSsTTUdaJm9yJ8XVhtynvLL%2Fi5jWat6I1V7VuV4%2FsRIGptNiK5otIGvhOAGFJMGUZhmwWnOsBuFNkVs%2FoqIDmbMhjLdklrvHfWmhrKzlwbEF41jjL5EfXw2QnM64KuT1B2KvF1zH%2FNvYmVusK7zI3XEBdCRePUWGn480kJ60vwq6DBAbUrJ5VG1OXWgnrR%2F%2FuL%2F7YsBXZun%2FWJI328YY72ClxhBZOWZmEGKcXmNAZjTInQEmaaBXih%2BuL6uH%2BlzCPLbCDpT8Kg2HFnfS%2FWvNKX1wk7bUjwYHFXeglfoNUqoNDwfK4u0Rq9uBei801oS76PfUI%2B4oHf8OenCqmZ98Q9%2FFTTBDOFqSI7ABeMTb7CAe4BMOqaczXEMPrnoMMGOqUBmKSB0vkq4y6b6Ab6p8z98Y66JWbVH2jf1C1Lccl5KeoqkC3Eb9%2BULSjv%2Fgz%2FLVEpAwdr9WtbOz3jORjDVUS7BoLbO%2FodtINQmvDh52gUx2fpA8rb2fUVAD9ibatvl9zA%2BfqPM0qPPCsRO5xQw1S3M2HbeYTXijmcLqDueT9KbZ7QnhZyGpcuIqJYg9%2FPPgjFUVK%2FKxBHMSwlo9W91jPh6CRJc4hA&X-Amz-Signature=040e9183957cd93d87e4f4e5a536674aff49850feca2b17d02665f1d41438d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRYHPSB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFttS38HU9fkK6UMZo8QAltQopa2sv1tnfaC95ZImVPzAiEAu%2BcXA9UY8HSgZpuhVZtK629VFZUq0NVSNs8FEHU1phoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMK57QURT3DXsPqxDCrcA%2FQOz9iCTPAz0ln6cR2xlIhPoThQAvI3tZ%2FO2OUIcBmwoqD9kvSg1s%2BkBs2BU4Vz7YIbB%2BB72ttBSsXrXV5YubvrqTBnk0K8aNpOoUzE%2FX9pOfMQkDjLRELh0wWE3nrlNPxZEnhQbZF3bHI0o8LEBB8vveoU3SSRubeJ%2Bi8x1K3lvVnepgxHtMO%2Fa5P1q%2B1%2Fzxz306sMYnkVH2%2FQVv7dd5aTSGkHu1ZV69%2BViENNnUgW2zuWZFwziB%2FpwWZ%2Ft1InDfbsxGmSsTTUdaJm9yJ8XVhtynvLL%2Fi5jWat6I1V7VuV4%2FsRIGptNiK5otIGvhOAGFJMGUZhmwWnOsBuFNkVs%2FoqIDmbMhjLdklrvHfWmhrKzlwbEF41jjL5EfXw2QnM64KuT1B2KvF1zH%2FNvYmVusK7zI3XEBdCRePUWGn480kJ60vwq6DBAbUrJ5VG1OXWgnrR%2F%2FuL%2F7YsBXZun%2FWJI328YY72ClxhBZOWZmEGKcXmNAZjTInQEmaaBXih%2BuL6uH%2BlzCPLbCDpT8Kg2HFnfS%2FWvNKX1wk7bUjwYHFXeglfoNUqoNDwfK4u0Rq9uBei801oS76PfUI%2B4oHf8OenCqmZ98Q9%2FFTTBDOFqSI7ABeMTb7CAe4BMOqaczXEMPrnoMMGOqUBmKSB0vkq4y6b6Ab6p8z98Y66JWbVH2jf1C1Lccl5KeoqkC3Eb9%2BULSjv%2Fgz%2FLVEpAwdr9WtbOz3jORjDVUS7BoLbO%2FodtINQmvDh52gUx2fpA8rb2fUVAD9ibatvl9zA%2BfqPM0qPPCsRO5xQw1S3M2HbeYTXijmcLqDueT9KbZ7QnhZyGpcuIqJYg9%2FPPgjFUVK%2FKxBHMSwlo9W91jPh6CRJc4hA&X-Amz-Signature=7e2e9bba7c301501a303b9c112ee39f9ae06d8b5b934aba54b680d510eca9799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRYHPSB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFttS38HU9fkK6UMZo8QAltQopa2sv1tnfaC95ZImVPzAiEAu%2BcXA9UY8HSgZpuhVZtK629VFZUq0NVSNs8FEHU1phoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMK57QURT3DXsPqxDCrcA%2FQOz9iCTPAz0ln6cR2xlIhPoThQAvI3tZ%2FO2OUIcBmwoqD9kvSg1s%2BkBs2BU4Vz7YIbB%2BB72ttBSsXrXV5YubvrqTBnk0K8aNpOoUzE%2FX9pOfMQkDjLRELh0wWE3nrlNPxZEnhQbZF3bHI0o8LEBB8vveoU3SSRubeJ%2Bi8x1K3lvVnepgxHtMO%2Fa5P1q%2B1%2Fzxz306sMYnkVH2%2FQVv7dd5aTSGkHu1ZV69%2BViENNnUgW2zuWZFwziB%2FpwWZ%2Ft1InDfbsxGmSsTTUdaJm9yJ8XVhtynvLL%2Fi5jWat6I1V7VuV4%2FsRIGptNiK5otIGvhOAGFJMGUZhmwWnOsBuFNkVs%2FoqIDmbMhjLdklrvHfWmhrKzlwbEF41jjL5EfXw2QnM64KuT1B2KvF1zH%2FNvYmVusK7zI3XEBdCRePUWGn480kJ60vwq6DBAbUrJ5VG1OXWgnrR%2F%2FuL%2F7YsBXZun%2FWJI328YY72ClxhBZOWZmEGKcXmNAZjTInQEmaaBXih%2BuL6uH%2BlzCPLbCDpT8Kg2HFnfS%2FWvNKX1wk7bUjwYHFXeglfoNUqoNDwfK4u0Rq9uBei801oS76PfUI%2B4oHf8OenCqmZ98Q9%2FFTTBDOFqSI7ABeMTb7CAe4BMOqaczXEMPrnoMMGOqUBmKSB0vkq4y6b6Ab6p8z98Y66JWbVH2jf1C1Lccl5KeoqkC3Eb9%2BULSjv%2Fgz%2FLVEpAwdr9WtbOz3jORjDVUS7BoLbO%2FodtINQmvDh52gUx2fpA8rb2fUVAD9ibatvl9zA%2BfqPM0qPPCsRO5xQw1S3M2HbeYTXijmcLqDueT9KbZ7QnhZyGpcuIqJYg9%2FPPgjFUVK%2FKxBHMSwlo9W91jPh6CRJc4hA&X-Amz-Signature=290018ea6186167abcf102ebaa7e5d3e85ff6b488b9de597d08e66d4c20bdd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRYHPSB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFttS38HU9fkK6UMZo8QAltQopa2sv1tnfaC95ZImVPzAiEAu%2BcXA9UY8HSgZpuhVZtK629VFZUq0NVSNs8FEHU1phoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMK57QURT3DXsPqxDCrcA%2FQOz9iCTPAz0ln6cR2xlIhPoThQAvI3tZ%2FO2OUIcBmwoqD9kvSg1s%2BkBs2BU4Vz7YIbB%2BB72ttBSsXrXV5YubvrqTBnk0K8aNpOoUzE%2FX9pOfMQkDjLRELh0wWE3nrlNPxZEnhQbZF3bHI0o8LEBB8vveoU3SSRubeJ%2Bi8x1K3lvVnepgxHtMO%2Fa5P1q%2B1%2Fzxz306sMYnkVH2%2FQVv7dd5aTSGkHu1ZV69%2BViENNnUgW2zuWZFwziB%2FpwWZ%2Ft1InDfbsxGmSsTTUdaJm9yJ8XVhtynvLL%2Fi5jWat6I1V7VuV4%2FsRIGptNiK5otIGvhOAGFJMGUZhmwWnOsBuFNkVs%2FoqIDmbMhjLdklrvHfWmhrKzlwbEF41jjL5EfXw2QnM64KuT1B2KvF1zH%2FNvYmVusK7zI3XEBdCRePUWGn480kJ60vwq6DBAbUrJ5VG1OXWgnrR%2F%2FuL%2F7YsBXZun%2FWJI328YY72ClxhBZOWZmEGKcXmNAZjTInQEmaaBXih%2BuL6uH%2BlzCPLbCDpT8Kg2HFnfS%2FWvNKX1wk7bUjwYHFXeglfoNUqoNDwfK4u0Rq9uBei801oS76PfUI%2B4oHf8OenCqmZ98Q9%2FFTTBDOFqSI7ABeMTb7CAe4BMOqaczXEMPrnoMMGOqUBmKSB0vkq4y6b6Ab6p8z98Y66JWbVH2jf1C1Lccl5KeoqkC3Eb9%2BULSjv%2Fgz%2FLVEpAwdr9WtbOz3jORjDVUS7BoLbO%2FodtINQmvDh52gUx2fpA8rb2fUVAD9ibatvl9zA%2BfqPM0qPPCsRO5xQw1S3M2HbeYTXijmcLqDueT9KbZ7QnhZyGpcuIqJYg9%2FPPgjFUVK%2FKxBHMSwlo9W91jPh6CRJc4hA&X-Amz-Signature=944dc2f8559a42e7e8a0a1d23aa058497d0c5b558e8156de1c7c4345d4a263be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRYHPSB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFttS38HU9fkK6UMZo8QAltQopa2sv1tnfaC95ZImVPzAiEAu%2BcXA9UY8HSgZpuhVZtK629VFZUq0NVSNs8FEHU1phoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMK57QURT3DXsPqxDCrcA%2FQOz9iCTPAz0ln6cR2xlIhPoThQAvI3tZ%2FO2OUIcBmwoqD9kvSg1s%2BkBs2BU4Vz7YIbB%2BB72ttBSsXrXV5YubvrqTBnk0K8aNpOoUzE%2FX9pOfMQkDjLRELh0wWE3nrlNPxZEnhQbZF3bHI0o8LEBB8vveoU3SSRubeJ%2Bi8x1K3lvVnepgxHtMO%2Fa5P1q%2B1%2Fzxz306sMYnkVH2%2FQVv7dd5aTSGkHu1ZV69%2BViENNnUgW2zuWZFwziB%2FpwWZ%2Ft1InDfbsxGmSsTTUdaJm9yJ8XVhtynvLL%2Fi5jWat6I1V7VuV4%2FsRIGptNiK5otIGvhOAGFJMGUZhmwWnOsBuFNkVs%2FoqIDmbMhjLdklrvHfWmhrKzlwbEF41jjL5EfXw2QnM64KuT1B2KvF1zH%2FNvYmVusK7zI3XEBdCRePUWGn480kJ60vwq6DBAbUrJ5VG1OXWgnrR%2F%2FuL%2F7YsBXZun%2FWJI328YY72ClxhBZOWZmEGKcXmNAZjTInQEmaaBXih%2BuL6uH%2BlzCPLbCDpT8Kg2HFnfS%2FWvNKX1wk7bUjwYHFXeglfoNUqoNDwfK4u0Rq9uBei801oS76PfUI%2B4oHf8OenCqmZ98Q9%2FFTTBDOFqSI7ABeMTb7CAe4BMOqaczXEMPrnoMMGOqUBmKSB0vkq4y6b6Ab6p8z98Y66JWbVH2jf1C1Lccl5KeoqkC3Eb9%2BULSjv%2Fgz%2FLVEpAwdr9WtbOz3jORjDVUS7BoLbO%2FodtINQmvDh52gUx2fpA8rb2fUVAD9ibatvl9zA%2BfqPM0qPPCsRO5xQw1S3M2HbeYTXijmcLqDueT9KbZ7QnhZyGpcuIqJYg9%2FPPgjFUVK%2FKxBHMSwlo9W91jPh6CRJc4hA&X-Amz-Signature=ef4f78b44900f5c00a70599af10215fc4ad21daf4f725f8183a6105ebb9f4d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRYHPSB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFttS38HU9fkK6UMZo8QAltQopa2sv1tnfaC95ZImVPzAiEAu%2BcXA9UY8HSgZpuhVZtK629VFZUq0NVSNs8FEHU1phoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMK57QURT3DXsPqxDCrcA%2FQOz9iCTPAz0ln6cR2xlIhPoThQAvI3tZ%2FO2OUIcBmwoqD9kvSg1s%2BkBs2BU4Vz7YIbB%2BB72ttBSsXrXV5YubvrqTBnk0K8aNpOoUzE%2FX9pOfMQkDjLRELh0wWE3nrlNPxZEnhQbZF3bHI0o8LEBB8vveoU3SSRubeJ%2Bi8x1K3lvVnepgxHtMO%2Fa5P1q%2B1%2Fzxz306sMYnkVH2%2FQVv7dd5aTSGkHu1ZV69%2BViENNnUgW2zuWZFwziB%2FpwWZ%2Ft1InDfbsxGmSsTTUdaJm9yJ8XVhtynvLL%2Fi5jWat6I1V7VuV4%2FsRIGptNiK5otIGvhOAGFJMGUZhmwWnOsBuFNkVs%2FoqIDmbMhjLdklrvHfWmhrKzlwbEF41jjL5EfXw2QnM64KuT1B2KvF1zH%2FNvYmVusK7zI3XEBdCRePUWGn480kJ60vwq6DBAbUrJ5VG1OXWgnrR%2F%2FuL%2F7YsBXZun%2FWJI328YY72ClxhBZOWZmEGKcXmNAZjTInQEmaaBXih%2BuL6uH%2BlzCPLbCDpT8Kg2HFnfS%2FWvNKX1wk7bUjwYHFXeglfoNUqoNDwfK4u0Rq9uBei801oS76PfUI%2B4oHf8OenCqmZ98Q9%2FFTTBDOFqSI7ABeMTb7CAe4BMOqaczXEMPrnoMMGOqUBmKSB0vkq4y6b6Ab6p8z98Y66JWbVH2jf1C1Lccl5KeoqkC3Eb9%2BULSjv%2Fgz%2FLVEpAwdr9WtbOz3jORjDVUS7BoLbO%2FodtINQmvDh52gUx2fpA8rb2fUVAD9ibatvl9zA%2BfqPM0qPPCsRO5xQw1S3M2HbeYTXijmcLqDueT9KbZ7QnhZyGpcuIqJYg9%2FPPgjFUVK%2FKxBHMSwlo9W91jPh6CRJc4hA&X-Amz-Signature=5ef93e7348ad27c9853835d50b33a8b7aec124cdce1146ac2a236056bc40a5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
