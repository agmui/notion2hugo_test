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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5VAXQ5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCS58uCwsiIuShGqKm1lq0voOgcLYllHYZauLCwlTdiAiEA96GX1HOicL5jrzHuy8CUkJdKP%2Fe0N5tQOBJxil6ZGPkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHOutbLspiSNORKjfyrcA6%2FeJK1ldLMJFfHM6OgtdTEhJuX%2F1dh%2F68aVz9wrSm4zT1LjNHAY7FuboP0h4%2Fu7q9Q%2BanraNX%2B0po4ExKA20ovoakZoCKD4J2NKXW379QGeuch%2FhU3Hw2sNdYbKrBw%2F07bmVYkgcOGbulN8Thv9ETA8iB4Sh47smhJtPsaYfcJiZVPxBZByMbFTQtSXMVOaJvHzED8q2LWFLwG780eOqzCx2kasCmyaJEGM8ipFuXcY%2BeIULfurQJEUyLCyqYvhU6Qr6gJheGdahpPJxHx%2BNdM%2F2hNMQGfpQgQ3fKhXODvThtdivEQETq3alUTRiMUW2ozt3hH7hJJ1ChY3wijUc3S180cQWbsykZmrqWf0Jl%2FYTJscPRqEA%2B2ENe9LpmwCoDGQ3Q7x1hUMqvfDSqAAKJt9sS3QLN7BsztSRXv9HXTaR7ZWZPoSOTH0Aux8v2JSZX2HiGiN4etZszEu7rlEFfyGEV8JHsTLvf4Y1t%2BW65kATOboRRmxkfv9iVXM1usXsCr6A2xFWxlOYcNXNsVOPGzgVgNn3CQhJsU1Qehchy7R6REvlmz%2F%2BD9Zaxr5SuxTWtXLEtg%2Bi7pZ%2FwESDBOdfMwkWkNYpE9QS1p8Ua92lJC%2Bz%2BDeVeD%2B9X4wAPSlMIeM8b0GOqUBsuhAlu5BgpOLgyA10HHtblFU7t%2BTJSXrh4BukS31VFGs7Ur7ff8%2BXwKZsi4cVAnJHOzv9L5591jmL28IptQ%2BFV7Yi%2BAjM%2BF10Qy19f%2FZ4PofvBpSB2g3MkUJPclW9hUW1VAnrAn5X9ibcWUgU6FqfRjDvZ8UPtbmNN%2B%2BSBMWhxsRG9jqNJAZBw94166lbSfqTlyNyFQJX4CuTygjk94CIiFB0LQ4&X-Amz-Signature=04a2ecfb80280363139b184a59c89558333766c97e4538ca90948fc5d482b721&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5VAXQ5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCS58uCwsiIuShGqKm1lq0voOgcLYllHYZauLCwlTdiAiEA96GX1HOicL5jrzHuy8CUkJdKP%2Fe0N5tQOBJxil6ZGPkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHOutbLspiSNORKjfyrcA6%2FeJK1ldLMJFfHM6OgtdTEhJuX%2F1dh%2F68aVz9wrSm4zT1LjNHAY7FuboP0h4%2Fu7q9Q%2BanraNX%2B0po4ExKA20ovoakZoCKD4J2NKXW379QGeuch%2FhU3Hw2sNdYbKrBw%2F07bmVYkgcOGbulN8Thv9ETA8iB4Sh47smhJtPsaYfcJiZVPxBZByMbFTQtSXMVOaJvHzED8q2LWFLwG780eOqzCx2kasCmyaJEGM8ipFuXcY%2BeIULfurQJEUyLCyqYvhU6Qr6gJheGdahpPJxHx%2BNdM%2F2hNMQGfpQgQ3fKhXODvThtdivEQETq3alUTRiMUW2ozt3hH7hJJ1ChY3wijUc3S180cQWbsykZmrqWf0Jl%2FYTJscPRqEA%2B2ENe9LpmwCoDGQ3Q7x1hUMqvfDSqAAKJt9sS3QLN7BsztSRXv9HXTaR7ZWZPoSOTH0Aux8v2JSZX2HiGiN4etZszEu7rlEFfyGEV8JHsTLvf4Y1t%2BW65kATOboRRmxkfv9iVXM1usXsCr6A2xFWxlOYcNXNsVOPGzgVgNn3CQhJsU1Qehchy7R6REvlmz%2F%2BD9Zaxr5SuxTWtXLEtg%2Bi7pZ%2FwESDBOdfMwkWkNYpE9QS1p8Ua92lJC%2Bz%2BDeVeD%2B9X4wAPSlMIeM8b0GOqUBsuhAlu5BgpOLgyA10HHtblFU7t%2BTJSXrh4BukS31VFGs7Ur7ff8%2BXwKZsi4cVAnJHOzv9L5591jmL28IptQ%2BFV7Yi%2BAjM%2BF10Qy19f%2FZ4PofvBpSB2g3MkUJPclW9hUW1VAnrAn5X9ibcWUgU6FqfRjDvZ8UPtbmNN%2B%2BSBMWhxsRG9jqNJAZBw94166lbSfqTlyNyFQJX4CuTygjk94CIiFB0LQ4&X-Amz-Signature=808840585583780db8164aa99f384479ea70e83ebe90331217ed9bc5982226e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5VAXQ5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCS58uCwsiIuShGqKm1lq0voOgcLYllHYZauLCwlTdiAiEA96GX1HOicL5jrzHuy8CUkJdKP%2Fe0N5tQOBJxil6ZGPkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHOutbLspiSNORKjfyrcA6%2FeJK1ldLMJFfHM6OgtdTEhJuX%2F1dh%2F68aVz9wrSm4zT1LjNHAY7FuboP0h4%2Fu7q9Q%2BanraNX%2B0po4ExKA20ovoakZoCKD4J2NKXW379QGeuch%2FhU3Hw2sNdYbKrBw%2F07bmVYkgcOGbulN8Thv9ETA8iB4Sh47smhJtPsaYfcJiZVPxBZByMbFTQtSXMVOaJvHzED8q2LWFLwG780eOqzCx2kasCmyaJEGM8ipFuXcY%2BeIULfurQJEUyLCyqYvhU6Qr6gJheGdahpPJxHx%2BNdM%2F2hNMQGfpQgQ3fKhXODvThtdivEQETq3alUTRiMUW2ozt3hH7hJJ1ChY3wijUc3S180cQWbsykZmrqWf0Jl%2FYTJscPRqEA%2B2ENe9LpmwCoDGQ3Q7x1hUMqvfDSqAAKJt9sS3QLN7BsztSRXv9HXTaR7ZWZPoSOTH0Aux8v2JSZX2HiGiN4etZszEu7rlEFfyGEV8JHsTLvf4Y1t%2BW65kATOboRRmxkfv9iVXM1usXsCr6A2xFWxlOYcNXNsVOPGzgVgNn3CQhJsU1Qehchy7R6REvlmz%2F%2BD9Zaxr5SuxTWtXLEtg%2Bi7pZ%2FwESDBOdfMwkWkNYpE9QS1p8Ua92lJC%2Bz%2BDeVeD%2B9X4wAPSlMIeM8b0GOqUBsuhAlu5BgpOLgyA10HHtblFU7t%2BTJSXrh4BukS31VFGs7Ur7ff8%2BXwKZsi4cVAnJHOzv9L5591jmL28IptQ%2BFV7Yi%2BAjM%2BF10Qy19f%2FZ4PofvBpSB2g3MkUJPclW9hUW1VAnrAn5X9ibcWUgU6FqfRjDvZ8UPtbmNN%2B%2BSBMWhxsRG9jqNJAZBw94166lbSfqTlyNyFQJX4CuTygjk94CIiFB0LQ4&X-Amz-Signature=ba9b1f8521dc7a2950dd0b7fce001523c1e835eb2a7527d25fb92c582040440c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5VAXQ5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCS58uCwsiIuShGqKm1lq0voOgcLYllHYZauLCwlTdiAiEA96GX1HOicL5jrzHuy8CUkJdKP%2Fe0N5tQOBJxil6ZGPkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHOutbLspiSNORKjfyrcA6%2FeJK1ldLMJFfHM6OgtdTEhJuX%2F1dh%2F68aVz9wrSm4zT1LjNHAY7FuboP0h4%2Fu7q9Q%2BanraNX%2B0po4ExKA20ovoakZoCKD4J2NKXW379QGeuch%2FhU3Hw2sNdYbKrBw%2F07bmVYkgcOGbulN8Thv9ETA8iB4Sh47smhJtPsaYfcJiZVPxBZByMbFTQtSXMVOaJvHzED8q2LWFLwG780eOqzCx2kasCmyaJEGM8ipFuXcY%2BeIULfurQJEUyLCyqYvhU6Qr6gJheGdahpPJxHx%2BNdM%2F2hNMQGfpQgQ3fKhXODvThtdivEQETq3alUTRiMUW2ozt3hH7hJJ1ChY3wijUc3S180cQWbsykZmrqWf0Jl%2FYTJscPRqEA%2B2ENe9LpmwCoDGQ3Q7x1hUMqvfDSqAAKJt9sS3QLN7BsztSRXv9HXTaR7ZWZPoSOTH0Aux8v2JSZX2HiGiN4etZszEu7rlEFfyGEV8JHsTLvf4Y1t%2BW65kATOboRRmxkfv9iVXM1usXsCr6A2xFWxlOYcNXNsVOPGzgVgNn3CQhJsU1Qehchy7R6REvlmz%2F%2BD9Zaxr5SuxTWtXLEtg%2Bi7pZ%2FwESDBOdfMwkWkNYpE9QS1p8Ua92lJC%2Bz%2BDeVeD%2B9X4wAPSlMIeM8b0GOqUBsuhAlu5BgpOLgyA10HHtblFU7t%2BTJSXrh4BukS31VFGs7Ur7ff8%2BXwKZsi4cVAnJHOzv9L5591jmL28IptQ%2BFV7Yi%2BAjM%2BF10Qy19f%2FZ4PofvBpSB2g3MkUJPclW9hUW1VAnrAn5X9ibcWUgU6FqfRjDvZ8UPtbmNN%2B%2BSBMWhxsRG9jqNJAZBw94166lbSfqTlyNyFQJX4CuTygjk94CIiFB0LQ4&X-Amz-Signature=091bcaeca2de768b3acf5f6c57b8c843855d2b6d2b0d99adaea258d19181c9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5VAXQ5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCS58uCwsiIuShGqKm1lq0voOgcLYllHYZauLCwlTdiAiEA96GX1HOicL5jrzHuy8CUkJdKP%2Fe0N5tQOBJxil6ZGPkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHOutbLspiSNORKjfyrcA6%2FeJK1ldLMJFfHM6OgtdTEhJuX%2F1dh%2F68aVz9wrSm4zT1LjNHAY7FuboP0h4%2Fu7q9Q%2BanraNX%2B0po4ExKA20ovoakZoCKD4J2NKXW379QGeuch%2FhU3Hw2sNdYbKrBw%2F07bmVYkgcOGbulN8Thv9ETA8iB4Sh47smhJtPsaYfcJiZVPxBZByMbFTQtSXMVOaJvHzED8q2LWFLwG780eOqzCx2kasCmyaJEGM8ipFuXcY%2BeIULfurQJEUyLCyqYvhU6Qr6gJheGdahpPJxHx%2BNdM%2F2hNMQGfpQgQ3fKhXODvThtdivEQETq3alUTRiMUW2ozt3hH7hJJ1ChY3wijUc3S180cQWbsykZmrqWf0Jl%2FYTJscPRqEA%2B2ENe9LpmwCoDGQ3Q7x1hUMqvfDSqAAKJt9sS3QLN7BsztSRXv9HXTaR7ZWZPoSOTH0Aux8v2JSZX2HiGiN4etZszEu7rlEFfyGEV8JHsTLvf4Y1t%2BW65kATOboRRmxkfv9iVXM1usXsCr6A2xFWxlOYcNXNsVOPGzgVgNn3CQhJsU1Qehchy7R6REvlmz%2F%2BD9Zaxr5SuxTWtXLEtg%2Bi7pZ%2FwESDBOdfMwkWkNYpE9QS1p8Ua92lJC%2Bz%2BDeVeD%2B9X4wAPSlMIeM8b0GOqUBsuhAlu5BgpOLgyA10HHtblFU7t%2BTJSXrh4BukS31VFGs7Ur7ff8%2BXwKZsi4cVAnJHOzv9L5591jmL28IptQ%2BFV7Yi%2BAjM%2BF10Qy19f%2FZ4PofvBpSB2g3MkUJPclW9hUW1VAnrAn5X9ibcWUgU6FqfRjDvZ8UPtbmNN%2B%2BSBMWhxsRG9jqNJAZBw94166lbSfqTlyNyFQJX4CuTygjk94CIiFB0LQ4&X-Amz-Signature=4cd48c3dde4348cae31bed6fdd0e495c529e0764e1463f493f73c714d817d60a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5VAXQ5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCS58uCwsiIuShGqKm1lq0voOgcLYllHYZauLCwlTdiAiEA96GX1HOicL5jrzHuy8CUkJdKP%2Fe0N5tQOBJxil6ZGPkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHOutbLspiSNORKjfyrcA6%2FeJK1ldLMJFfHM6OgtdTEhJuX%2F1dh%2F68aVz9wrSm4zT1LjNHAY7FuboP0h4%2Fu7q9Q%2BanraNX%2B0po4ExKA20ovoakZoCKD4J2NKXW379QGeuch%2FhU3Hw2sNdYbKrBw%2F07bmVYkgcOGbulN8Thv9ETA8iB4Sh47smhJtPsaYfcJiZVPxBZByMbFTQtSXMVOaJvHzED8q2LWFLwG780eOqzCx2kasCmyaJEGM8ipFuXcY%2BeIULfurQJEUyLCyqYvhU6Qr6gJheGdahpPJxHx%2BNdM%2F2hNMQGfpQgQ3fKhXODvThtdivEQETq3alUTRiMUW2ozt3hH7hJJ1ChY3wijUc3S180cQWbsykZmrqWf0Jl%2FYTJscPRqEA%2B2ENe9LpmwCoDGQ3Q7x1hUMqvfDSqAAKJt9sS3QLN7BsztSRXv9HXTaR7ZWZPoSOTH0Aux8v2JSZX2HiGiN4etZszEu7rlEFfyGEV8JHsTLvf4Y1t%2BW65kATOboRRmxkfv9iVXM1usXsCr6A2xFWxlOYcNXNsVOPGzgVgNn3CQhJsU1Qehchy7R6REvlmz%2F%2BD9Zaxr5SuxTWtXLEtg%2Bi7pZ%2FwESDBOdfMwkWkNYpE9QS1p8Ua92lJC%2Bz%2BDeVeD%2B9X4wAPSlMIeM8b0GOqUBsuhAlu5BgpOLgyA10HHtblFU7t%2BTJSXrh4BukS31VFGs7Ur7ff8%2BXwKZsi4cVAnJHOzv9L5591jmL28IptQ%2BFV7Yi%2BAjM%2BF10Qy19f%2FZ4PofvBpSB2g3MkUJPclW9hUW1VAnrAn5X9ibcWUgU6FqfRjDvZ8UPtbmNN%2B%2BSBMWhxsRG9jqNJAZBw94166lbSfqTlyNyFQJX4CuTygjk94CIiFB0LQ4&X-Amz-Signature=592d08cb591a01b056f22fe90de0a8800e90ad6488f5b544e62c74e2f7aa290c&X-Amz-SignedHeaders=host&x-id=GetObject)
