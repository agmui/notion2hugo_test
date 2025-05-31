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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6FPANV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsKRf4V7QDMHX0kSCQPm23wjy6KEtDaOXgsT3tPKyPhAIhAPs8yHouvugROl4BP7JkUA%2B%2BgrB5%2FiV3jlvP1%2BAUylrJKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ6T%2FzhRkjfzCXPCsq3ANh7w57RNGGG6o1CHCKtX3PaD288Pjq96M7FrirYwUXTUCOwBm3fMTCAytkSSL0PmcMmwZmzjrTy%2BQUv6X5W5EgGwB6KVu6pPDq%2FzA%2B74nojQ0TLRB2OzEQiR21Z0ZNsLNsrjlhiXk1anNqqR1k599hWayiXQyPAnnnFHgUnrooVhiCl3fRFt8ZCvFzbJd6dfxnGuPlD5P%2BFxqVKJyLDFL3%2FBmQiivHwv7aRnUFGVuZimIgzpGL52L1RPPGliWwnUhthpMVVZnIWA%2FZvBljCSgzdNQEGp5xV0hs71bmH3GoODYVy9SoDy6OsCh0dwLoakU7ThHU3iF5V9DovsWOQ5J2gmfc2SQ94IjZsRXxK2EAPwAhOgs5OHQYVXEWCcLO2WMD7lfORC99qnUXgFdfVb7YyajebI3O1e2a7Zqu0MhsbAe9FV0L3jCw4rQjZBs537ba%2BipkiRPRKOVEmDA1E7qHQyxxUqnx%2Fvi0p7II0a8SzW3iHxrh29ETCM07K8hTvBPJdvCpA74JcI%2FKAXnDcqIXRg86TcggnCkftJmfT874xy5T6nWA12jRlNy6dotvOZzgCrC3aYDS52%2Bncq0OJDa1H4A2H3VvXJkH3FtKuETFhIFuTkYDs%2FLfatwwBjDSpOzBBjqkAVRLx0z7iCr9EfVt7Opwh9BHdeuJG7j%2BZyd9%2FUEZgb8vUv%2Fc6ldDZ7gytBD0YNaREj8brlzgZKCXi%2BxXt6cHyJXo4TyoMcd%2FuGV6YOc0AmrEfWIFokjllzyFLNhIvoJ%2F17Y0Plbk4sFTcm6qjhHdpcm9ltDpJPidY2YjrPomX5C%2Bo%2FUJ21ndthfpNqKki%2F2S%2B1DudAEj9z4B6AhSofZaMW6a7VEN&X-Amz-Signature=18549b5155e6cd704c5191dba87d25f3e487be25cd8b7d2d0d5bb17600317f39&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6FPANV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsKRf4V7QDMHX0kSCQPm23wjy6KEtDaOXgsT3tPKyPhAIhAPs8yHouvugROl4BP7JkUA%2B%2BgrB5%2FiV3jlvP1%2BAUylrJKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ6T%2FzhRkjfzCXPCsq3ANh7w57RNGGG6o1CHCKtX3PaD288Pjq96M7FrirYwUXTUCOwBm3fMTCAytkSSL0PmcMmwZmzjrTy%2BQUv6X5W5EgGwB6KVu6pPDq%2FzA%2B74nojQ0TLRB2OzEQiR21Z0ZNsLNsrjlhiXk1anNqqR1k599hWayiXQyPAnnnFHgUnrooVhiCl3fRFt8ZCvFzbJd6dfxnGuPlD5P%2BFxqVKJyLDFL3%2FBmQiivHwv7aRnUFGVuZimIgzpGL52L1RPPGliWwnUhthpMVVZnIWA%2FZvBljCSgzdNQEGp5xV0hs71bmH3GoODYVy9SoDy6OsCh0dwLoakU7ThHU3iF5V9DovsWOQ5J2gmfc2SQ94IjZsRXxK2EAPwAhOgs5OHQYVXEWCcLO2WMD7lfORC99qnUXgFdfVb7YyajebI3O1e2a7Zqu0MhsbAe9FV0L3jCw4rQjZBs537ba%2BipkiRPRKOVEmDA1E7qHQyxxUqnx%2Fvi0p7II0a8SzW3iHxrh29ETCM07K8hTvBPJdvCpA74JcI%2FKAXnDcqIXRg86TcggnCkftJmfT874xy5T6nWA12jRlNy6dotvOZzgCrC3aYDS52%2Bncq0OJDa1H4A2H3VvXJkH3FtKuETFhIFuTkYDs%2FLfatwwBjDSpOzBBjqkAVRLx0z7iCr9EfVt7Opwh9BHdeuJG7j%2BZyd9%2FUEZgb8vUv%2Fc6ldDZ7gytBD0YNaREj8brlzgZKCXi%2BxXt6cHyJXo4TyoMcd%2FuGV6YOc0AmrEfWIFokjllzyFLNhIvoJ%2F17Y0Plbk4sFTcm6qjhHdpcm9ltDpJPidY2YjrPomX5C%2Bo%2FUJ21ndthfpNqKki%2F2S%2B1DudAEj9z4B6AhSofZaMW6a7VEN&X-Amz-Signature=0b39385aa3cb8608f17917f8bdeb7b1e7aa9b167cc7e78f037aafc2300aa54a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6FPANV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsKRf4V7QDMHX0kSCQPm23wjy6KEtDaOXgsT3tPKyPhAIhAPs8yHouvugROl4BP7JkUA%2B%2BgrB5%2FiV3jlvP1%2BAUylrJKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ6T%2FzhRkjfzCXPCsq3ANh7w57RNGGG6o1CHCKtX3PaD288Pjq96M7FrirYwUXTUCOwBm3fMTCAytkSSL0PmcMmwZmzjrTy%2BQUv6X5W5EgGwB6KVu6pPDq%2FzA%2B74nojQ0TLRB2OzEQiR21Z0ZNsLNsrjlhiXk1anNqqR1k599hWayiXQyPAnnnFHgUnrooVhiCl3fRFt8ZCvFzbJd6dfxnGuPlD5P%2BFxqVKJyLDFL3%2FBmQiivHwv7aRnUFGVuZimIgzpGL52L1RPPGliWwnUhthpMVVZnIWA%2FZvBljCSgzdNQEGp5xV0hs71bmH3GoODYVy9SoDy6OsCh0dwLoakU7ThHU3iF5V9DovsWOQ5J2gmfc2SQ94IjZsRXxK2EAPwAhOgs5OHQYVXEWCcLO2WMD7lfORC99qnUXgFdfVb7YyajebI3O1e2a7Zqu0MhsbAe9FV0L3jCw4rQjZBs537ba%2BipkiRPRKOVEmDA1E7qHQyxxUqnx%2Fvi0p7II0a8SzW3iHxrh29ETCM07K8hTvBPJdvCpA74JcI%2FKAXnDcqIXRg86TcggnCkftJmfT874xy5T6nWA12jRlNy6dotvOZzgCrC3aYDS52%2Bncq0OJDa1H4A2H3VvXJkH3FtKuETFhIFuTkYDs%2FLfatwwBjDSpOzBBjqkAVRLx0z7iCr9EfVt7Opwh9BHdeuJG7j%2BZyd9%2FUEZgb8vUv%2Fc6ldDZ7gytBD0YNaREj8brlzgZKCXi%2BxXt6cHyJXo4TyoMcd%2FuGV6YOc0AmrEfWIFokjllzyFLNhIvoJ%2F17Y0Plbk4sFTcm6qjhHdpcm9ltDpJPidY2YjrPomX5C%2Bo%2FUJ21ndthfpNqKki%2F2S%2B1DudAEj9z4B6AhSofZaMW6a7VEN&X-Amz-Signature=e2934b6fca8efdc8bc182ad8aa9f76cafcff1ac2a91009ef15e5de6197ba0789&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6FPANV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsKRf4V7QDMHX0kSCQPm23wjy6KEtDaOXgsT3tPKyPhAIhAPs8yHouvugROl4BP7JkUA%2B%2BgrB5%2FiV3jlvP1%2BAUylrJKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ6T%2FzhRkjfzCXPCsq3ANh7w57RNGGG6o1CHCKtX3PaD288Pjq96M7FrirYwUXTUCOwBm3fMTCAytkSSL0PmcMmwZmzjrTy%2BQUv6X5W5EgGwB6KVu6pPDq%2FzA%2B74nojQ0TLRB2OzEQiR21Z0ZNsLNsrjlhiXk1anNqqR1k599hWayiXQyPAnnnFHgUnrooVhiCl3fRFt8ZCvFzbJd6dfxnGuPlD5P%2BFxqVKJyLDFL3%2FBmQiivHwv7aRnUFGVuZimIgzpGL52L1RPPGliWwnUhthpMVVZnIWA%2FZvBljCSgzdNQEGp5xV0hs71bmH3GoODYVy9SoDy6OsCh0dwLoakU7ThHU3iF5V9DovsWOQ5J2gmfc2SQ94IjZsRXxK2EAPwAhOgs5OHQYVXEWCcLO2WMD7lfORC99qnUXgFdfVb7YyajebI3O1e2a7Zqu0MhsbAe9FV0L3jCw4rQjZBs537ba%2BipkiRPRKOVEmDA1E7qHQyxxUqnx%2Fvi0p7II0a8SzW3iHxrh29ETCM07K8hTvBPJdvCpA74JcI%2FKAXnDcqIXRg86TcggnCkftJmfT874xy5T6nWA12jRlNy6dotvOZzgCrC3aYDS52%2Bncq0OJDa1H4A2H3VvXJkH3FtKuETFhIFuTkYDs%2FLfatwwBjDSpOzBBjqkAVRLx0z7iCr9EfVt7Opwh9BHdeuJG7j%2BZyd9%2FUEZgb8vUv%2Fc6ldDZ7gytBD0YNaREj8brlzgZKCXi%2BxXt6cHyJXo4TyoMcd%2FuGV6YOc0AmrEfWIFokjllzyFLNhIvoJ%2F17Y0Plbk4sFTcm6qjhHdpcm9ltDpJPidY2YjrPomX5C%2Bo%2FUJ21ndthfpNqKki%2F2S%2B1DudAEj9z4B6AhSofZaMW6a7VEN&X-Amz-Signature=3356a872c83f7c18633c6dd6526b2da4760ef6aa9123ce032363d525f5a30fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6FPANV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsKRf4V7QDMHX0kSCQPm23wjy6KEtDaOXgsT3tPKyPhAIhAPs8yHouvugROl4BP7JkUA%2B%2BgrB5%2FiV3jlvP1%2BAUylrJKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ6T%2FzhRkjfzCXPCsq3ANh7w57RNGGG6o1CHCKtX3PaD288Pjq96M7FrirYwUXTUCOwBm3fMTCAytkSSL0PmcMmwZmzjrTy%2BQUv6X5W5EgGwB6KVu6pPDq%2FzA%2B74nojQ0TLRB2OzEQiR21Z0ZNsLNsrjlhiXk1anNqqR1k599hWayiXQyPAnnnFHgUnrooVhiCl3fRFt8ZCvFzbJd6dfxnGuPlD5P%2BFxqVKJyLDFL3%2FBmQiivHwv7aRnUFGVuZimIgzpGL52L1RPPGliWwnUhthpMVVZnIWA%2FZvBljCSgzdNQEGp5xV0hs71bmH3GoODYVy9SoDy6OsCh0dwLoakU7ThHU3iF5V9DovsWOQ5J2gmfc2SQ94IjZsRXxK2EAPwAhOgs5OHQYVXEWCcLO2WMD7lfORC99qnUXgFdfVb7YyajebI3O1e2a7Zqu0MhsbAe9FV0L3jCw4rQjZBs537ba%2BipkiRPRKOVEmDA1E7qHQyxxUqnx%2Fvi0p7II0a8SzW3iHxrh29ETCM07K8hTvBPJdvCpA74JcI%2FKAXnDcqIXRg86TcggnCkftJmfT874xy5T6nWA12jRlNy6dotvOZzgCrC3aYDS52%2Bncq0OJDa1H4A2H3VvXJkH3FtKuETFhIFuTkYDs%2FLfatwwBjDSpOzBBjqkAVRLx0z7iCr9EfVt7Opwh9BHdeuJG7j%2BZyd9%2FUEZgb8vUv%2Fc6ldDZ7gytBD0YNaREj8brlzgZKCXi%2BxXt6cHyJXo4TyoMcd%2FuGV6YOc0AmrEfWIFokjllzyFLNhIvoJ%2F17Y0Plbk4sFTcm6qjhHdpcm9ltDpJPidY2YjrPomX5C%2Bo%2FUJ21ndthfpNqKki%2F2S%2B1DudAEj9z4B6AhSofZaMW6a7VEN&X-Amz-Signature=6c23c99563c951ae57dc0c41704f63de3c7e8f68c646767d066d55714d403f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6FPANV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsKRf4V7QDMHX0kSCQPm23wjy6KEtDaOXgsT3tPKyPhAIhAPs8yHouvugROl4BP7JkUA%2B%2BgrB5%2FiV3jlvP1%2BAUylrJKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ6T%2FzhRkjfzCXPCsq3ANh7w57RNGGG6o1CHCKtX3PaD288Pjq96M7FrirYwUXTUCOwBm3fMTCAytkSSL0PmcMmwZmzjrTy%2BQUv6X5W5EgGwB6KVu6pPDq%2FzA%2B74nojQ0TLRB2OzEQiR21Z0ZNsLNsrjlhiXk1anNqqR1k599hWayiXQyPAnnnFHgUnrooVhiCl3fRFt8ZCvFzbJd6dfxnGuPlD5P%2BFxqVKJyLDFL3%2FBmQiivHwv7aRnUFGVuZimIgzpGL52L1RPPGliWwnUhthpMVVZnIWA%2FZvBljCSgzdNQEGp5xV0hs71bmH3GoODYVy9SoDy6OsCh0dwLoakU7ThHU3iF5V9DovsWOQ5J2gmfc2SQ94IjZsRXxK2EAPwAhOgs5OHQYVXEWCcLO2WMD7lfORC99qnUXgFdfVb7YyajebI3O1e2a7Zqu0MhsbAe9FV0L3jCw4rQjZBs537ba%2BipkiRPRKOVEmDA1E7qHQyxxUqnx%2Fvi0p7II0a8SzW3iHxrh29ETCM07K8hTvBPJdvCpA74JcI%2FKAXnDcqIXRg86TcggnCkftJmfT874xy5T6nWA12jRlNy6dotvOZzgCrC3aYDS52%2Bncq0OJDa1H4A2H3VvXJkH3FtKuETFhIFuTkYDs%2FLfatwwBjDSpOzBBjqkAVRLx0z7iCr9EfVt7Opwh9BHdeuJG7j%2BZyd9%2FUEZgb8vUv%2Fc6ldDZ7gytBD0YNaREj8brlzgZKCXi%2BxXt6cHyJXo4TyoMcd%2FuGV6YOc0AmrEfWIFokjllzyFLNhIvoJ%2F17Y0Plbk4sFTcm6qjhHdpcm9ltDpJPidY2YjrPomX5C%2Bo%2FUJ21ndthfpNqKki%2F2S%2B1DudAEj9z4B6AhSofZaMW6a7VEN&X-Amz-Signature=3ca14d56c1673908da20f794615c0309a9210b81dd44cbff0695831b018ff77b&X-Amz-SignedHeaders=host&x-id=GetObject)
