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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPZU3X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyGvezXtXveHasE6BSz8SEz1SJMMwCLwMNMCe3vkchaAiEAiBbIKEgnvFYwY%2BJXtwvduSglY1M44sS7%2BzRA%2FhFMLIEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq8wxBj%2FU43YoL6%2BSrcA8EFC8O3lzD%2BMW0B7LDFVvZasXtiUecpbS%2BKP7MfmjQa7m8ydGHXU9BOoY7qZAMPMZPIKKgByNzYxbf5HrvZmOrPP5ydv3aSTm8aT1qR80Ki1smHgig5b94mtTkVtRBt1yVwn3JiB3GdXcvSBwzMW1qHCUmd3akIUrlAHPQQ4A2c8vAhld5YHYuNYan7Hx5G2JceAdG%2BjLadXhumga2VDyljqVzKUgBTRbzugfxnsvgmR%2B2kfD0Xlntn%2FpJEZEwDU7Q6ksJHKoTJfVoh5PYjjc0kVp%2Bng3vJWQ%2B8XBn7jG4YJsNflgwdt7V7YKWpO16NNw0EM1Egb%2FPp8FIYHfb5QSJ3jUpNwBIYbuL0wvwM8KPk6CWVTZ6kzPLJf4I9JD38O2U1P3bYddENjnuWFuM8iJD9Xu6%2Bp0oIax%2BroZHxpfLbFc225uAaoHVDbEeNmD1CZ7qqqkv0dO3WxfklgC43hc6vHP5BX%2FHtvIOFdPXi%2Fxq1ruHO9WqtmwsMMX%2Bb6onxYdyREBNqxf%2F3yQM1o3wOm8SYm8xWeLlS0E2OfHFpab4wdSa7Le%2Bjr5FQzMcyjvhy2EMxH%2BnjUvKa6jXf65G5glRQUIoXkeaektCyzmj9%2FHvkoH2meICXof%2FVlixsMMuy1sIGOqUB%2Fv6k24cfQz3OwrhSRVdotxi9B0arYT%2BJJKhcj8xfIa3u1mn4PBGh1q4TL27uVBymdlt7yfx4BUaY93AzSb4PxFTbstsueginZNILH7yTuRxQwzi8Zsip1ur4RLyGHHx6EN09AKIQl%2B8orbW99oPaN40mKfM7J2XlABGFNaQBOS0DC6H9ttMeh7tUoI4NNcRxZOLDOeJpm1HFZjjRJK7983V2xjSG&X-Amz-Signature=7dbf3c9e2beda28f451fe5c7b5f17ac711b18886cff3038b754adfcc6355442a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPZU3X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyGvezXtXveHasE6BSz8SEz1SJMMwCLwMNMCe3vkchaAiEAiBbIKEgnvFYwY%2BJXtwvduSglY1M44sS7%2BzRA%2FhFMLIEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq8wxBj%2FU43YoL6%2BSrcA8EFC8O3lzD%2BMW0B7LDFVvZasXtiUecpbS%2BKP7MfmjQa7m8ydGHXU9BOoY7qZAMPMZPIKKgByNzYxbf5HrvZmOrPP5ydv3aSTm8aT1qR80Ki1smHgig5b94mtTkVtRBt1yVwn3JiB3GdXcvSBwzMW1qHCUmd3akIUrlAHPQQ4A2c8vAhld5YHYuNYan7Hx5G2JceAdG%2BjLadXhumga2VDyljqVzKUgBTRbzugfxnsvgmR%2B2kfD0Xlntn%2FpJEZEwDU7Q6ksJHKoTJfVoh5PYjjc0kVp%2Bng3vJWQ%2B8XBn7jG4YJsNflgwdt7V7YKWpO16NNw0EM1Egb%2FPp8FIYHfb5QSJ3jUpNwBIYbuL0wvwM8KPk6CWVTZ6kzPLJf4I9JD38O2U1P3bYddENjnuWFuM8iJD9Xu6%2Bp0oIax%2BroZHxpfLbFc225uAaoHVDbEeNmD1CZ7qqqkv0dO3WxfklgC43hc6vHP5BX%2FHtvIOFdPXi%2Fxq1ruHO9WqtmwsMMX%2Bb6onxYdyREBNqxf%2F3yQM1o3wOm8SYm8xWeLlS0E2OfHFpab4wdSa7Le%2Bjr5FQzMcyjvhy2EMxH%2BnjUvKa6jXf65G5glRQUIoXkeaektCyzmj9%2FHvkoH2meICXof%2FVlixsMMuy1sIGOqUB%2Fv6k24cfQz3OwrhSRVdotxi9B0arYT%2BJJKhcj8xfIa3u1mn4PBGh1q4TL27uVBymdlt7yfx4BUaY93AzSb4PxFTbstsueginZNILH7yTuRxQwzi8Zsip1ur4RLyGHHx6EN09AKIQl%2B8orbW99oPaN40mKfM7J2XlABGFNaQBOS0DC6H9ttMeh7tUoI4NNcRxZOLDOeJpm1HFZjjRJK7983V2xjSG&X-Amz-Signature=388a90daa563d485cc0148df62fada828091bd1b268ae65d693478ef94626e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPZU3X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyGvezXtXveHasE6BSz8SEz1SJMMwCLwMNMCe3vkchaAiEAiBbIKEgnvFYwY%2BJXtwvduSglY1M44sS7%2BzRA%2FhFMLIEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq8wxBj%2FU43YoL6%2BSrcA8EFC8O3lzD%2BMW0B7LDFVvZasXtiUecpbS%2BKP7MfmjQa7m8ydGHXU9BOoY7qZAMPMZPIKKgByNzYxbf5HrvZmOrPP5ydv3aSTm8aT1qR80Ki1smHgig5b94mtTkVtRBt1yVwn3JiB3GdXcvSBwzMW1qHCUmd3akIUrlAHPQQ4A2c8vAhld5YHYuNYan7Hx5G2JceAdG%2BjLadXhumga2VDyljqVzKUgBTRbzugfxnsvgmR%2B2kfD0Xlntn%2FpJEZEwDU7Q6ksJHKoTJfVoh5PYjjc0kVp%2Bng3vJWQ%2B8XBn7jG4YJsNflgwdt7V7YKWpO16NNw0EM1Egb%2FPp8FIYHfb5QSJ3jUpNwBIYbuL0wvwM8KPk6CWVTZ6kzPLJf4I9JD38O2U1P3bYddENjnuWFuM8iJD9Xu6%2Bp0oIax%2BroZHxpfLbFc225uAaoHVDbEeNmD1CZ7qqqkv0dO3WxfklgC43hc6vHP5BX%2FHtvIOFdPXi%2Fxq1ruHO9WqtmwsMMX%2Bb6onxYdyREBNqxf%2F3yQM1o3wOm8SYm8xWeLlS0E2OfHFpab4wdSa7Le%2Bjr5FQzMcyjvhy2EMxH%2BnjUvKa6jXf65G5glRQUIoXkeaektCyzmj9%2FHvkoH2meICXof%2FVlixsMMuy1sIGOqUB%2Fv6k24cfQz3OwrhSRVdotxi9B0arYT%2BJJKhcj8xfIa3u1mn4PBGh1q4TL27uVBymdlt7yfx4BUaY93AzSb4PxFTbstsueginZNILH7yTuRxQwzi8Zsip1ur4RLyGHHx6EN09AKIQl%2B8orbW99oPaN40mKfM7J2XlABGFNaQBOS0DC6H9ttMeh7tUoI4NNcRxZOLDOeJpm1HFZjjRJK7983V2xjSG&X-Amz-Signature=c0483928dde91129241ed609ee1f1b7ea96e3891f51ea3c041125268abb8cfc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPZU3X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyGvezXtXveHasE6BSz8SEz1SJMMwCLwMNMCe3vkchaAiEAiBbIKEgnvFYwY%2BJXtwvduSglY1M44sS7%2BzRA%2FhFMLIEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq8wxBj%2FU43YoL6%2BSrcA8EFC8O3lzD%2BMW0B7LDFVvZasXtiUecpbS%2BKP7MfmjQa7m8ydGHXU9BOoY7qZAMPMZPIKKgByNzYxbf5HrvZmOrPP5ydv3aSTm8aT1qR80Ki1smHgig5b94mtTkVtRBt1yVwn3JiB3GdXcvSBwzMW1qHCUmd3akIUrlAHPQQ4A2c8vAhld5YHYuNYan7Hx5G2JceAdG%2BjLadXhumga2VDyljqVzKUgBTRbzugfxnsvgmR%2B2kfD0Xlntn%2FpJEZEwDU7Q6ksJHKoTJfVoh5PYjjc0kVp%2Bng3vJWQ%2B8XBn7jG4YJsNflgwdt7V7YKWpO16NNw0EM1Egb%2FPp8FIYHfb5QSJ3jUpNwBIYbuL0wvwM8KPk6CWVTZ6kzPLJf4I9JD38O2U1P3bYddENjnuWFuM8iJD9Xu6%2Bp0oIax%2BroZHxpfLbFc225uAaoHVDbEeNmD1CZ7qqqkv0dO3WxfklgC43hc6vHP5BX%2FHtvIOFdPXi%2Fxq1ruHO9WqtmwsMMX%2Bb6onxYdyREBNqxf%2F3yQM1o3wOm8SYm8xWeLlS0E2OfHFpab4wdSa7Le%2Bjr5FQzMcyjvhy2EMxH%2BnjUvKa6jXf65G5glRQUIoXkeaektCyzmj9%2FHvkoH2meICXof%2FVlixsMMuy1sIGOqUB%2Fv6k24cfQz3OwrhSRVdotxi9B0arYT%2BJJKhcj8xfIa3u1mn4PBGh1q4TL27uVBymdlt7yfx4BUaY93AzSb4PxFTbstsueginZNILH7yTuRxQwzi8Zsip1ur4RLyGHHx6EN09AKIQl%2B8orbW99oPaN40mKfM7J2XlABGFNaQBOS0DC6H9ttMeh7tUoI4NNcRxZOLDOeJpm1HFZjjRJK7983V2xjSG&X-Amz-Signature=114e84e31f5c00caab382769f8ef4ed210a3fdc82449f47d6d70f3a7d680d424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPZU3X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyGvezXtXveHasE6BSz8SEz1SJMMwCLwMNMCe3vkchaAiEAiBbIKEgnvFYwY%2BJXtwvduSglY1M44sS7%2BzRA%2FhFMLIEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq8wxBj%2FU43YoL6%2BSrcA8EFC8O3lzD%2BMW0B7LDFVvZasXtiUecpbS%2BKP7MfmjQa7m8ydGHXU9BOoY7qZAMPMZPIKKgByNzYxbf5HrvZmOrPP5ydv3aSTm8aT1qR80Ki1smHgig5b94mtTkVtRBt1yVwn3JiB3GdXcvSBwzMW1qHCUmd3akIUrlAHPQQ4A2c8vAhld5YHYuNYan7Hx5G2JceAdG%2BjLadXhumga2VDyljqVzKUgBTRbzugfxnsvgmR%2B2kfD0Xlntn%2FpJEZEwDU7Q6ksJHKoTJfVoh5PYjjc0kVp%2Bng3vJWQ%2B8XBn7jG4YJsNflgwdt7V7YKWpO16NNw0EM1Egb%2FPp8FIYHfb5QSJ3jUpNwBIYbuL0wvwM8KPk6CWVTZ6kzPLJf4I9JD38O2U1P3bYddENjnuWFuM8iJD9Xu6%2Bp0oIax%2BroZHxpfLbFc225uAaoHVDbEeNmD1CZ7qqqkv0dO3WxfklgC43hc6vHP5BX%2FHtvIOFdPXi%2Fxq1ruHO9WqtmwsMMX%2Bb6onxYdyREBNqxf%2F3yQM1o3wOm8SYm8xWeLlS0E2OfHFpab4wdSa7Le%2Bjr5FQzMcyjvhy2EMxH%2BnjUvKa6jXf65G5glRQUIoXkeaektCyzmj9%2FHvkoH2meICXof%2FVlixsMMuy1sIGOqUB%2Fv6k24cfQz3OwrhSRVdotxi9B0arYT%2BJJKhcj8xfIa3u1mn4PBGh1q4TL27uVBymdlt7yfx4BUaY93AzSb4PxFTbstsueginZNILH7yTuRxQwzi8Zsip1ur4RLyGHHx6EN09AKIQl%2B8orbW99oPaN40mKfM7J2XlABGFNaQBOS0DC6H9ttMeh7tUoI4NNcRxZOLDOeJpm1HFZjjRJK7983V2xjSG&X-Amz-Signature=433073f36711b9538d48b0a7731582d396799721a084525cbeab47adf053266d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPZU3X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyGvezXtXveHasE6BSz8SEz1SJMMwCLwMNMCe3vkchaAiEAiBbIKEgnvFYwY%2BJXtwvduSglY1M44sS7%2BzRA%2FhFMLIEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq8wxBj%2FU43YoL6%2BSrcA8EFC8O3lzD%2BMW0B7LDFVvZasXtiUecpbS%2BKP7MfmjQa7m8ydGHXU9BOoY7qZAMPMZPIKKgByNzYxbf5HrvZmOrPP5ydv3aSTm8aT1qR80Ki1smHgig5b94mtTkVtRBt1yVwn3JiB3GdXcvSBwzMW1qHCUmd3akIUrlAHPQQ4A2c8vAhld5YHYuNYan7Hx5G2JceAdG%2BjLadXhumga2VDyljqVzKUgBTRbzugfxnsvgmR%2B2kfD0Xlntn%2FpJEZEwDU7Q6ksJHKoTJfVoh5PYjjc0kVp%2Bng3vJWQ%2B8XBn7jG4YJsNflgwdt7V7YKWpO16NNw0EM1Egb%2FPp8FIYHfb5QSJ3jUpNwBIYbuL0wvwM8KPk6CWVTZ6kzPLJf4I9JD38O2U1P3bYddENjnuWFuM8iJD9Xu6%2Bp0oIax%2BroZHxpfLbFc225uAaoHVDbEeNmD1CZ7qqqkv0dO3WxfklgC43hc6vHP5BX%2FHtvIOFdPXi%2Fxq1ruHO9WqtmwsMMX%2Bb6onxYdyREBNqxf%2F3yQM1o3wOm8SYm8xWeLlS0E2OfHFpab4wdSa7Le%2Bjr5FQzMcyjvhy2EMxH%2BnjUvKa6jXf65G5glRQUIoXkeaektCyzmj9%2FHvkoH2meICXof%2FVlixsMMuy1sIGOqUB%2Fv6k24cfQz3OwrhSRVdotxi9B0arYT%2BJJKhcj8xfIa3u1mn4PBGh1q4TL27uVBymdlt7yfx4BUaY93AzSb4PxFTbstsueginZNILH7yTuRxQwzi8Zsip1ur4RLyGHHx6EN09AKIQl%2B8orbW99oPaN40mKfM7J2XlABGFNaQBOS0DC6H9ttMeh7tUoI4NNcRxZOLDOeJpm1HFZjjRJK7983V2xjSG&X-Amz-Signature=cdf82cc91b307a2c61698f8d8b2cdd4743303b4365726002dd14107589972a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
