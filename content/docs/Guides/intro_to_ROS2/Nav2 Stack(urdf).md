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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXBJJY5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMQXbzZPi1paMkDbHi8X%2FT3DnYzqepKfeMssLizMEQwIgAsVtnKji6iUa%2F5vFx%2FVwPIRBzj3sm7LUlOe3ej73bxYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2aqRpUZhiJNPdbuircAxywTos9qz%2BqRPTwpIcSd4IIXXqfq%2Bh5dmSGWefl%2BRSjd055svAiEnQ6rwcvn23NvUpFtU7c%2BTQKW45zsaUqDlUM3ECCG6Gm8bRgxyH3nswDQKRqXUk93LML4Tf9nUqTGAV2ZbU%2BxTSd94eNnIKI2McCQ9C0qQfqKd%2BB3N1E98DU3khVCT1ulty4A11rtuYsKgE2CAi5OAxmFCH8RfHwQazXm6o8xTx%2F5k0V4akqx6YvjVZgBV8GLGOp6YuZKW2oVqJ8tA1BDXrBdshZA8brv88tY93DxivjvGStuuwr1hqTeL%2FZIOoeWoR2FHdQMkQo3AGpJ4eoar%2BpXhzRW20c%2BuKRNnqjrXBBjGgYsDn38JUJYOpW42gd7LrwydSDJRgJ32gh6yCfjonbAfVL300v9Cg%2B7ZxaYY3glLapjIJ9de%2Bnw64AljCuFuJwnGRpW9wH0hiZtz3qGCYrUfSA9m4G6bCWSDp%2BTedHqPLIHf7l6vVN%2FfLKIGBUc7EUWMKPOOw47F%2BCIv2nIix6%2BhXbg%2FpUTo5%2BwbK9UYkbK5DVIYn52ZmFjEsaEoWjEQnJWXDNhY7CT2eral2I11q2B1MjbpLRf%2BfXHM0f09de5OZYq1AFl022SWj%2BI6JIvr1yrmkZML37y8IGOqUB9VlA61TjWeiv4pp6nN2fIMSp9l2YIQoGKuYhFDn0Q8Hv1anxItflChh8SuHxoiW%2FpWg%2F7zP43b%2BaP3WOoIlnNm0Zc6JAzspvxoa5vbnmmRuDfKgskG8sEJjsYEQir6s8bHTx5VnkrmvzZGSnvqjLDvdeGMpYD6r8KTBiDD1d1SV5AsZkNulwJGJKy30Lhk2hpQuOKG2j4nkH%2F%2FBEbuX12cSQGit4&X-Amz-Signature=ce515d9abc3fc49289cb4a753b921a60f848c4b105ec4e2191dac2d5121e095c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXBJJY5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMQXbzZPi1paMkDbHi8X%2FT3DnYzqepKfeMssLizMEQwIgAsVtnKji6iUa%2F5vFx%2FVwPIRBzj3sm7LUlOe3ej73bxYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2aqRpUZhiJNPdbuircAxywTos9qz%2BqRPTwpIcSd4IIXXqfq%2Bh5dmSGWefl%2BRSjd055svAiEnQ6rwcvn23NvUpFtU7c%2BTQKW45zsaUqDlUM3ECCG6Gm8bRgxyH3nswDQKRqXUk93LML4Tf9nUqTGAV2ZbU%2BxTSd94eNnIKI2McCQ9C0qQfqKd%2BB3N1E98DU3khVCT1ulty4A11rtuYsKgE2CAi5OAxmFCH8RfHwQazXm6o8xTx%2F5k0V4akqx6YvjVZgBV8GLGOp6YuZKW2oVqJ8tA1BDXrBdshZA8brv88tY93DxivjvGStuuwr1hqTeL%2FZIOoeWoR2FHdQMkQo3AGpJ4eoar%2BpXhzRW20c%2BuKRNnqjrXBBjGgYsDn38JUJYOpW42gd7LrwydSDJRgJ32gh6yCfjonbAfVL300v9Cg%2B7ZxaYY3glLapjIJ9de%2Bnw64AljCuFuJwnGRpW9wH0hiZtz3qGCYrUfSA9m4G6bCWSDp%2BTedHqPLIHf7l6vVN%2FfLKIGBUc7EUWMKPOOw47F%2BCIv2nIix6%2BhXbg%2FpUTo5%2BwbK9UYkbK5DVIYn52ZmFjEsaEoWjEQnJWXDNhY7CT2eral2I11q2B1MjbpLRf%2BfXHM0f09de5OZYq1AFl022SWj%2BI6JIvr1yrmkZML37y8IGOqUB9VlA61TjWeiv4pp6nN2fIMSp9l2YIQoGKuYhFDn0Q8Hv1anxItflChh8SuHxoiW%2FpWg%2F7zP43b%2BaP3WOoIlnNm0Zc6JAzspvxoa5vbnmmRuDfKgskG8sEJjsYEQir6s8bHTx5VnkrmvzZGSnvqjLDvdeGMpYD6r8KTBiDD1d1SV5AsZkNulwJGJKy30Lhk2hpQuOKG2j4nkH%2F%2FBEbuX12cSQGit4&X-Amz-Signature=01201789a340dec0141f1320eed566e2ff64824691066e40cc9ed3123a0eaf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXBJJY5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMQXbzZPi1paMkDbHi8X%2FT3DnYzqepKfeMssLizMEQwIgAsVtnKji6iUa%2F5vFx%2FVwPIRBzj3sm7LUlOe3ej73bxYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2aqRpUZhiJNPdbuircAxywTos9qz%2BqRPTwpIcSd4IIXXqfq%2Bh5dmSGWefl%2BRSjd055svAiEnQ6rwcvn23NvUpFtU7c%2BTQKW45zsaUqDlUM3ECCG6Gm8bRgxyH3nswDQKRqXUk93LML4Tf9nUqTGAV2ZbU%2BxTSd94eNnIKI2McCQ9C0qQfqKd%2BB3N1E98DU3khVCT1ulty4A11rtuYsKgE2CAi5OAxmFCH8RfHwQazXm6o8xTx%2F5k0V4akqx6YvjVZgBV8GLGOp6YuZKW2oVqJ8tA1BDXrBdshZA8brv88tY93DxivjvGStuuwr1hqTeL%2FZIOoeWoR2FHdQMkQo3AGpJ4eoar%2BpXhzRW20c%2BuKRNnqjrXBBjGgYsDn38JUJYOpW42gd7LrwydSDJRgJ32gh6yCfjonbAfVL300v9Cg%2B7ZxaYY3glLapjIJ9de%2Bnw64AljCuFuJwnGRpW9wH0hiZtz3qGCYrUfSA9m4G6bCWSDp%2BTedHqPLIHf7l6vVN%2FfLKIGBUc7EUWMKPOOw47F%2BCIv2nIix6%2BhXbg%2FpUTo5%2BwbK9UYkbK5DVIYn52ZmFjEsaEoWjEQnJWXDNhY7CT2eral2I11q2B1MjbpLRf%2BfXHM0f09de5OZYq1AFl022SWj%2BI6JIvr1yrmkZML37y8IGOqUB9VlA61TjWeiv4pp6nN2fIMSp9l2YIQoGKuYhFDn0Q8Hv1anxItflChh8SuHxoiW%2FpWg%2F7zP43b%2BaP3WOoIlnNm0Zc6JAzspvxoa5vbnmmRuDfKgskG8sEJjsYEQir6s8bHTx5VnkrmvzZGSnvqjLDvdeGMpYD6r8KTBiDD1d1SV5AsZkNulwJGJKy30Lhk2hpQuOKG2j4nkH%2F%2FBEbuX12cSQGit4&X-Amz-Signature=d9c3f1c0e1c94341fe4bc525f5a2d9523d1b77d0b9b86a4f79fde39766a3bbe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXBJJY5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMQXbzZPi1paMkDbHi8X%2FT3DnYzqepKfeMssLizMEQwIgAsVtnKji6iUa%2F5vFx%2FVwPIRBzj3sm7LUlOe3ej73bxYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2aqRpUZhiJNPdbuircAxywTos9qz%2BqRPTwpIcSd4IIXXqfq%2Bh5dmSGWefl%2BRSjd055svAiEnQ6rwcvn23NvUpFtU7c%2BTQKW45zsaUqDlUM3ECCG6Gm8bRgxyH3nswDQKRqXUk93LML4Tf9nUqTGAV2ZbU%2BxTSd94eNnIKI2McCQ9C0qQfqKd%2BB3N1E98DU3khVCT1ulty4A11rtuYsKgE2CAi5OAxmFCH8RfHwQazXm6o8xTx%2F5k0V4akqx6YvjVZgBV8GLGOp6YuZKW2oVqJ8tA1BDXrBdshZA8brv88tY93DxivjvGStuuwr1hqTeL%2FZIOoeWoR2FHdQMkQo3AGpJ4eoar%2BpXhzRW20c%2BuKRNnqjrXBBjGgYsDn38JUJYOpW42gd7LrwydSDJRgJ32gh6yCfjonbAfVL300v9Cg%2B7ZxaYY3glLapjIJ9de%2Bnw64AljCuFuJwnGRpW9wH0hiZtz3qGCYrUfSA9m4G6bCWSDp%2BTedHqPLIHf7l6vVN%2FfLKIGBUc7EUWMKPOOw47F%2BCIv2nIix6%2BhXbg%2FpUTo5%2BwbK9UYkbK5DVIYn52ZmFjEsaEoWjEQnJWXDNhY7CT2eral2I11q2B1MjbpLRf%2BfXHM0f09de5OZYq1AFl022SWj%2BI6JIvr1yrmkZML37y8IGOqUB9VlA61TjWeiv4pp6nN2fIMSp9l2YIQoGKuYhFDn0Q8Hv1anxItflChh8SuHxoiW%2FpWg%2F7zP43b%2BaP3WOoIlnNm0Zc6JAzspvxoa5vbnmmRuDfKgskG8sEJjsYEQir6s8bHTx5VnkrmvzZGSnvqjLDvdeGMpYD6r8KTBiDD1d1SV5AsZkNulwJGJKy30Lhk2hpQuOKG2j4nkH%2F%2FBEbuX12cSQGit4&X-Amz-Signature=5ddf19d79b5943d18a8308ecad88c1ac7cd712c8438da9e860678758158462c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXBJJY5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMQXbzZPi1paMkDbHi8X%2FT3DnYzqepKfeMssLizMEQwIgAsVtnKji6iUa%2F5vFx%2FVwPIRBzj3sm7LUlOe3ej73bxYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2aqRpUZhiJNPdbuircAxywTos9qz%2BqRPTwpIcSd4IIXXqfq%2Bh5dmSGWefl%2BRSjd055svAiEnQ6rwcvn23NvUpFtU7c%2BTQKW45zsaUqDlUM3ECCG6Gm8bRgxyH3nswDQKRqXUk93LML4Tf9nUqTGAV2ZbU%2BxTSd94eNnIKI2McCQ9C0qQfqKd%2BB3N1E98DU3khVCT1ulty4A11rtuYsKgE2CAi5OAxmFCH8RfHwQazXm6o8xTx%2F5k0V4akqx6YvjVZgBV8GLGOp6YuZKW2oVqJ8tA1BDXrBdshZA8brv88tY93DxivjvGStuuwr1hqTeL%2FZIOoeWoR2FHdQMkQo3AGpJ4eoar%2BpXhzRW20c%2BuKRNnqjrXBBjGgYsDn38JUJYOpW42gd7LrwydSDJRgJ32gh6yCfjonbAfVL300v9Cg%2B7ZxaYY3glLapjIJ9de%2Bnw64AljCuFuJwnGRpW9wH0hiZtz3qGCYrUfSA9m4G6bCWSDp%2BTedHqPLIHf7l6vVN%2FfLKIGBUc7EUWMKPOOw47F%2BCIv2nIix6%2BhXbg%2FpUTo5%2BwbK9UYkbK5DVIYn52ZmFjEsaEoWjEQnJWXDNhY7CT2eral2I11q2B1MjbpLRf%2BfXHM0f09de5OZYq1AFl022SWj%2BI6JIvr1yrmkZML37y8IGOqUB9VlA61TjWeiv4pp6nN2fIMSp9l2YIQoGKuYhFDn0Q8Hv1anxItflChh8SuHxoiW%2FpWg%2F7zP43b%2BaP3WOoIlnNm0Zc6JAzspvxoa5vbnmmRuDfKgskG8sEJjsYEQir6s8bHTx5VnkrmvzZGSnvqjLDvdeGMpYD6r8KTBiDD1d1SV5AsZkNulwJGJKy30Lhk2hpQuOKG2j4nkH%2F%2FBEbuX12cSQGit4&X-Amz-Signature=9ffe26dff09adc5341ef6d9942775e51edb5d2de7c07f247c4e9e4944d5e946b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXBJJY5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIMQXbzZPi1paMkDbHi8X%2FT3DnYzqepKfeMssLizMEQwIgAsVtnKji6iUa%2F5vFx%2FVwPIRBzj3sm7LUlOe3ej73bxYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2aqRpUZhiJNPdbuircAxywTos9qz%2BqRPTwpIcSd4IIXXqfq%2Bh5dmSGWefl%2BRSjd055svAiEnQ6rwcvn23NvUpFtU7c%2BTQKW45zsaUqDlUM3ECCG6Gm8bRgxyH3nswDQKRqXUk93LML4Tf9nUqTGAV2ZbU%2BxTSd94eNnIKI2McCQ9C0qQfqKd%2BB3N1E98DU3khVCT1ulty4A11rtuYsKgE2CAi5OAxmFCH8RfHwQazXm6o8xTx%2F5k0V4akqx6YvjVZgBV8GLGOp6YuZKW2oVqJ8tA1BDXrBdshZA8brv88tY93DxivjvGStuuwr1hqTeL%2FZIOoeWoR2FHdQMkQo3AGpJ4eoar%2BpXhzRW20c%2BuKRNnqjrXBBjGgYsDn38JUJYOpW42gd7LrwydSDJRgJ32gh6yCfjonbAfVL300v9Cg%2B7ZxaYY3glLapjIJ9de%2Bnw64AljCuFuJwnGRpW9wH0hiZtz3qGCYrUfSA9m4G6bCWSDp%2BTedHqPLIHf7l6vVN%2FfLKIGBUc7EUWMKPOOw47F%2BCIv2nIix6%2BhXbg%2FpUTo5%2BwbK9UYkbK5DVIYn52ZmFjEsaEoWjEQnJWXDNhY7CT2eral2I11q2B1MjbpLRf%2BfXHM0f09de5OZYq1AFl022SWj%2BI6JIvr1yrmkZML37y8IGOqUB9VlA61TjWeiv4pp6nN2fIMSp9l2YIQoGKuYhFDn0Q8Hv1anxItflChh8SuHxoiW%2FpWg%2F7zP43b%2BaP3WOoIlnNm0Zc6JAzspvxoa5vbnmmRuDfKgskG8sEJjsYEQir6s8bHTx5VnkrmvzZGSnvqjLDvdeGMpYD6r8KTBiDD1d1SV5AsZkNulwJGJKy30Lhk2hpQuOKG2j4nkH%2F%2FBEbuX12cSQGit4&X-Amz-Signature=3e7b5065158496d558c28eefed6a4474c934096a72349123e601d10c2cfc97cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
