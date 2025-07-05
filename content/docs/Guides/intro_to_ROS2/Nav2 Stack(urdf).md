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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLXRONA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBapcyeMIJgkUesd7qrQlqM0jkNfE5Om%2FgtyQIut4fTsAiEAtt2Iur0UzKIjdBhKXPkkmNfqtX1GgDIeoosdEksq5Xgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFQco%2B5PjCo%2BZgy%2F7CrcA4Z80ok2SYts664KYjzqrGp5KVlG1dWY3%2Fij%2FFP5YgwXEhJSB88coikPxZPK9HPm%2BOaslw%2BU7Fs9EG64hEJZD5ufIZusIZJ%2BkJmcJUce9n54dc9ecSs4FBe%2BPpZ5NnVJmOY6WH0EHUB8JxMR62ggQhwc9yCghlRq9mFhp9Ch2tKXBRBcCJf1ebmuHDoyJ97WPTB%2FVHZx5LLYyv7MsutdDJLo%2FAAm0OV9E4Gh%2BhecMYsu7RWTb6SladaHZw8KKkGRBel4%2BewCFdB2e4EaPknVUD0b7SWSybshUyc3mQkl%2F7tOyk8f1Sp3ip0azMXpATU4N%2Bv1V%2BV5MFVQCLiZdcNzixNpSWI8AcbC9HiyYhd%2Fyg8KdpAJz102ic3Uxeqboe%2F1Be02VKX9TYuHMb9VKZp2inkaxomyeWZw0kgyRRzzO9M54I8VT%2F3rxoMLz221us6tCZ1%2FfBHC4%2BEYxnUCu3ThyFblGxmiiIJpJ55ooULVdeMh%2F3Xu54w4hC5Tu6DASnZSry5Lv6JMk3Dx01xVGacdOiJydcQwDR63Lc17Qu1X2zk4jHwcQpySy%2FKrCglc9GFDSRsbBFZIbm7UDX1yF7Z6OtLKuXK1WJQxuiFnhWEwaw2IncefJSgzxLasxCCsMI7OpMMGOqUBFroOd32yTRj2By0EYL0pTjNOpdYS6eLYjUzbaIrdY%2BIL%2FWM4zObLuaCh9luyg%2BFeA88HZUGgsvQ4PCSoK38HbAtjTrIi2gS8ziQGHuPYFwBLj8vQdtDPYJWpFA263le3E9IGE0%2FJLcSUH9LNTHXgcX8IitT7a5%2F%2BfrrZ6W%2FuiAG5SievRTPVYAyqsVqAuMNR5D3uCE4qCxfR11lC%2Bwaa%2Fe5ovgxr&X-Amz-Signature=60fd2dcbd451785a1822d336e46546d6936e26a205e04cb46dfa8ffb42c56663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLXRONA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBapcyeMIJgkUesd7qrQlqM0jkNfE5Om%2FgtyQIut4fTsAiEAtt2Iur0UzKIjdBhKXPkkmNfqtX1GgDIeoosdEksq5Xgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFQco%2B5PjCo%2BZgy%2F7CrcA4Z80ok2SYts664KYjzqrGp5KVlG1dWY3%2Fij%2FFP5YgwXEhJSB88coikPxZPK9HPm%2BOaslw%2BU7Fs9EG64hEJZD5ufIZusIZJ%2BkJmcJUce9n54dc9ecSs4FBe%2BPpZ5NnVJmOY6WH0EHUB8JxMR62ggQhwc9yCghlRq9mFhp9Ch2tKXBRBcCJf1ebmuHDoyJ97WPTB%2FVHZx5LLYyv7MsutdDJLo%2FAAm0OV9E4Gh%2BhecMYsu7RWTb6SladaHZw8KKkGRBel4%2BewCFdB2e4EaPknVUD0b7SWSybshUyc3mQkl%2F7tOyk8f1Sp3ip0azMXpATU4N%2Bv1V%2BV5MFVQCLiZdcNzixNpSWI8AcbC9HiyYhd%2Fyg8KdpAJz102ic3Uxeqboe%2F1Be02VKX9TYuHMb9VKZp2inkaxomyeWZw0kgyRRzzO9M54I8VT%2F3rxoMLz221us6tCZ1%2FfBHC4%2BEYxnUCu3ThyFblGxmiiIJpJ55ooULVdeMh%2F3Xu54w4hC5Tu6DASnZSry5Lv6JMk3Dx01xVGacdOiJydcQwDR63Lc17Qu1X2zk4jHwcQpySy%2FKrCglc9GFDSRsbBFZIbm7UDX1yF7Z6OtLKuXK1WJQxuiFnhWEwaw2IncefJSgzxLasxCCsMI7OpMMGOqUBFroOd32yTRj2By0EYL0pTjNOpdYS6eLYjUzbaIrdY%2BIL%2FWM4zObLuaCh9luyg%2BFeA88HZUGgsvQ4PCSoK38HbAtjTrIi2gS8ziQGHuPYFwBLj8vQdtDPYJWpFA263le3E9IGE0%2FJLcSUH9LNTHXgcX8IitT7a5%2F%2BfrrZ6W%2FuiAG5SievRTPVYAyqsVqAuMNR5D3uCE4qCxfR11lC%2Bwaa%2Fe5ovgxr&X-Amz-Signature=610df2b03396f2c4b527cf36b70dda5685834ed7d3b83f3d3581026e4a2c278c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLXRONA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBapcyeMIJgkUesd7qrQlqM0jkNfE5Om%2FgtyQIut4fTsAiEAtt2Iur0UzKIjdBhKXPkkmNfqtX1GgDIeoosdEksq5Xgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFQco%2B5PjCo%2BZgy%2F7CrcA4Z80ok2SYts664KYjzqrGp5KVlG1dWY3%2Fij%2FFP5YgwXEhJSB88coikPxZPK9HPm%2BOaslw%2BU7Fs9EG64hEJZD5ufIZusIZJ%2BkJmcJUce9n54dc9ecSs4FBe%2BPpZ5NnVJmOY6WH0EHUB8JxMR62ggQhwc9yCghlRq9mFhp9Ch2tKXBRBcCJf1ebmuHDoyJ97WPTB%2FVHZx5LLYyv7MsutdDJLo%2FAAm0OV9E4Gh%2BhecMYsu7RWTb6SladaHZw8KKkGRBel4%2BewCFdB2e4EaPknVUD0b7SWSybshUyc3mQkl%2F7tOyk8f1Sp3ip0azMXpATU4N%2Bv1V%2BV5MFVQCLiZdcNzixNpSWI8AcbC9HiyYhd%2Fyg8KdpAJz102ic3Uxeqboe%2F1Be02VKX9TYuHMb9VKZp2inkaxomyeWZw0kgyRRzzO9M54I8VT%2F3rxoMLz221us6tCZ1%2FfBHC4%2BEYxnUCu3ThyFblGxmiiIJpJ55ooULVdeMh%2F3Xu54w4hC5Tu6DASnZSry5Lv6JMk3Dx01xVGacdOiJydcQwDR63Lc17Qu1X2zk4jHwcQpySy%2FKrCglc9GFDSRsbBFZIbm7UDX1yF7Z6OtLKuXK1WJQxuiFnhWEwaw2IncefJSgzxLasxCCsMI7OpMMGOqUBFroOd32yTRj2By0EYL0pTjNOpdYS6eLYjUzbaIrdY%2BIL%2FWM4zObLuaCh9luyg%2BFeA88HZUGgsvQ4PCSoK38HbAtjTrIi2gS8ziQGHuPYFwBLj8vQdtDPYJWpFA263le3E9IGE0%2FJLcSUH9LNTHXgcX8IitT7a5%2F%2BfrrZ6W%2FuiAG5SievRTPVYAyqsVqAuMNR5D3uCE4qCxfR11lC%2Bwaa%2Fe5ovgxr&X-Amz-Signature=9afdebdb7522b274bfe6a35b356a5d7b0d94c01b9553a51a9d443653e5bb3655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLXRONA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBapcyeMIJgkUesd7qrQlqM0jkNfE5Om%2FgtyQIut4fTsAiEAtt2Iur0UzKIjdBhKXPkkmNfqtX1GgDIeoosdEksq5Xgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFQco%2B5PjCo%2BZgy%2F7CrcA4Z80ok2SYts664KYjzqrGp5KVlG1dWY3%2Fij%2FFP5YgwXEhJSB88coikPxZPK9HPm%2BOaslw%2BU7Fs9EG64hEJZD5ufIZusIZJ%2BkJmcJUce9n54dc9ecSs4FBe%2BPpZ5NnVJmOY6WH0EHUB8JxMR62ggQhwc9yCghlRq9mFhp9Ch2tKXBRBcCJf1ebmuHDoyJ97WPTB%2FVHZx5LLYyv7MsutdDJLo%2FAAm0OV9E4Gh%2BhecMYsu7RWTb6SladaHZw8KKkGRBel4%2BewCFdB2e4EaPknVUD0b7SWSybshUyc3mQkl%2F7tOyk8f1Sp3ip0azMXpATU4N%2Bv1V%2BV5MFVQCLiZdcNzixNpSWI8AcbC9HiyYhd%2Fyg8KdpAJz102ic3Uxeqboe%2F1Be02VKX9TYuHMb9VKZp2inkaxomyeWZw0kgyRRzzO9M54I8VT%2F3rxoMLz221us6tCZ1%2FfBHC4%2BEYxnUCu3ThyFblGxmiiIJpJ55ooULVdeMh%2F3Xu54w4hC5Tu6DASnZSry5Lv6JMk3Dx01xVGacdOiJydcQwDR63Lc17Qu1X2zk4jHwcQpySy%2FKrCglc9GFDSRsbBFZIbm7UDX1yF7Z6OtLKuXK1WJQxuiFnhWEwaw2IncefJSgzxLasxCCsMI7OpMMGOqUBFroOd32yTRj2By0EYL0pTjNOpdYS6eLYjUzbaIrdY%2BIL%2FWM4zObLuaCh9luyg%2BFeA88HZUGgsvQ4PCSoK38HbAtjTrIi2gS8ziQGHuPYFwBLj8vQdtDPYJWpFA263le3E9IGE0%2FJLcSUH9LNTHXgcX8IitT7a5%2F%2BfrrZ6W%2FuiAG5SievRTPVYAyqsVqAuMNR5D3uCE4qCxfR11lC%2Bwaa%2Fe5ovgxr&X-Amz-Signature=944195aeb8ffc9878b9f3697c2904af9773813a0562eb28330e8257e3514a7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLXRONA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBapcyeMIJgkUesd7qrQlqM0jkNfE5Om%2FgtyQIut4fTsAiEAtt2Iur0UzKIjdBhKXPkkmNfqtX1GgDIeoosdEksq5Xgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFQco%2B5PjCo%2BZgy%2F7CrcA4Z80ok2SYts664KYjzqrGp5KVlG1dWY3%2Fij%2FFP5YgwXEhJSB88coikPxZPK9HPm%2BOaslw%2BU7Fs9EG64hEJZD5ufIZusIZJ%2BkJmcJUce9n54dc9ecSs4FBe%2BPpZ5NnVJmOY6WH0EHUB8JxMR62ggQhwc9yCghlRq9mFhp9Ch2tKXBRBcCJf1ebmuHDoyJ97WPTB%2FVHZx5LLYyv7MsutdDJLo%2FAAm0OV9E4Gh%2BhecMYsu7RWTb6SladaHZw8KKkGRBel4%2BewCFdB2e4EaPknVUD0b7SWSybshUyc3mQkl%2F7tOyk8f1Sp3ip0azMXpATU4N%2Bv1V%2BV5MFVQCLiZdcNzixNpSWI8AcbC9HiyYhd%2Fyg8KdpAJz102ic3Uxeqboe%2F1Be02VKX9TYuHMb9VKZp2inkaxomyeWZw0kgyRRzzO9M54I8VT%2F3rxoMLz221us6tCZ1%2FfBHC4%2BEYxnUCu3ThyFblGxmiiIJpJ55ooULVdeMh%2F3Xu54w4hC5Tu6DASnZSry5Lv6JMk3Dx01xVGacdOiJydcQwDR63Lc17Qu1X2zk4jHwcQpySy%2FKrCglc9GFDSRsbBFZIbm7UDX1yF7Z6OtLKuXK1WJQxuiFnhWEwaw2IncefJSgzxLasxCCsMI7OpMMGOqUBFroOd32yTRj2By0EYL0pTjNOpdYS6eLYjUzbaIrdY%2BIL%2FWM4zObLuaCh9luyg%2BFeA88HZUGgsvQ4PCSoK38HbAtjTrIi2gS8ziQGHuPYFwBLj8vQdtDPYJWpFA263le3E9IGE0%2FJLcSUH9LNTHXgcX8IitT7a5%2F%2BfrrZ6W%2FuiAG5SievRTPVYAyqsVqAuMNR5D3uCE4qCxfR11lC%2Bwaa%2Fe5ovgxr&X-Amz-Signature=1ffa36c3b9d685c677f1407be4bbdfb57b0a77c0cbd4a605287e711a3fe58973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLXRONA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBapcyeMIJgkUesd7qrQlqM0jkNfE5Om%2FgtyQIut4fTsAiEAtt2Iur0UzKIjdBhKXPkkmNfqtX1GgDIeoosdEksq5Xgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFQco%2B5PjCo%2BZgy%2F7CrcA4Z80ok2SYts664KYjzqrGp5KVlG1dWY3%2Fij%2FFP5YgwXEhJSB88coikPxZPK9HPm%2BOaslw%2BU7Fs9EG64hEJZD5ufIZusIZJ%2BkJmcJUce9n54dc9ecSs4FBe%2BPpZ5NnVJmOY6WH0EHUB8JxMR62ggQhwc9yCghlRq9mFhp9Ch2tKXBRBcCJf1ebmuHDoyJ97WPTB%2FVHZx5LLYyv7MsutdDJLo%2FAAm0OV9E4Gh%2BhecMYsu7RWTb6SladaHZw8KKkGRBel4%2BewCFdB2e4EaPknVUD0b7SWSybshUyc3mQkl%2F7tOyk8f1Sp3ip0azMXpATU4N%2Bv1V%2BV5MFVQCLiZdcNzixNpSWI8AcbC9HiyYhd%2Fyg8KdpAJz102ic3Uxeqboe%2F1Be02VKX9TYuHMb9VKZp2inkaxomyeWZw0kgyRRzzO9M54I8VT%2F3rxoMLz221us6tCZ1%2FfBHC4%2BEYxnUCu3ThyFblGxmiiIJpJ55ooULVdeMh%2F3Xu54w4hC5Tu6DASnZSry5Lv6JMk3Dx01xVGacdOiJydcQwDR63Lc17Qu1X2zk4jHwcQpySy%2FKrCglc9GFDSRsbBFZIbm7UDX1yF7Z6OtLKuXK1WJQxuiFnhWEwaw2IncefJSgzxLasxCCsMI7OpMMGOqUBFroOd32yTRj2By0EYL0pTjNOpdYS6eLYjUzbaIrdY%2BIL%2FWM4zObLuaCh9luyg%2BFeA88HZUGgsvQ4PCSoK38HbAtjTrIi2gS8ziQGHuPYFwBLj8vQdtDPYJWpFA263le3E9IGE0%2FJLcSUH9LNTHXgcX8IitT7a5%2F%2BfrrZ6W%2FuiAG5SievRTPVYAyqsVqAuMNR5D3uCE4qCxfR11lC%2Bwaa%2Fe5ovgxr&X-Amz-Signature=2e0aa57ad5ea52fd954081651b2d502b1b661ce2d03e76cfc372398314cef664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
