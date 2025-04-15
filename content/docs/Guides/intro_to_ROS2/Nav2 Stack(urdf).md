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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=07cc466428ed7211b2edb3085df3ea86b183a723e150b02f24874b101e7b7696&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=e13e7276bd366d641a2421f9d94d2d1fbdc8589798f5fa4a1d89540ec4f4f96f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=11aa21f3950e7224fd62b7a8b9b2dacd3ba0337be40df17d8c5800e7f1193c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=238e2302d717df663cb3d1ec1093754d478d61c48ec855ca109f60cc0a7361dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=55ee0b8a9e0fd4028722905d6f5568cc5540d072db53fa2c9fe02995e018cbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF746R3L%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHNex7KZhu7rrYDJzbj%2BUPV0rjUXz12T6t%2FEiGJ%2FhT6gIgdq5COIu50PS3jw9Kv%2B54W%2BPAUqWUtNT09bDVR96vAHAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNUVObCjKxsJnvwCGSrcA6BqQF5J5NH3q6InqvHMUeiDB0WXhKT2qeCnzXHj98gO38c58Bcwglp0J5hxOoIQdxvrBAuoS2Z5ED4r433u0D1ENL4u0SJZ2FP8VDd%2B9XgUYfOwqev8op1aKGBgGUn9ZeqFzo8xa1xR0K1Q%2BYF4M3WDg7Y9gzdAcJUrMdrQr1k3%2FIwHN6l%2FEZ%2FO3%2FPh7FpWcf6GS79G5TaSGYRF9APieMTQIGY3lefsg%2F4BcQJGNoShNUMrJ7C0%2BTwGQbklvdPB6b2AWP1tPWNCCjUvoczawIRz4tLjlI6nQ9A2xdYIXo7V2ZHq2mGgsEdC%2BW9s73ROqoVdmRUUgElnt3ql8TLRbuFpxhy9iI4Cl1f1dK4PLjHDBScYK3XJOzJkJ4tSzMYx9eC5tr72ZmKqykiScvRm6%2FXZdhXYDRlLOJQqNM9Y29%2FZ2%2BvUzS2ktjU%2BokR90BgCW5rhkA3gecjU%2FGRFSxh7UjAodbr7snOLnNrVkMc9I8OqW92YbS%2B%2BfT9iiM5ysw3eBJ%2Fe7qQ0kZWidjXjZC1WEGvaNq6iLVmDWpfvDrFOjXT5EE2Jw8hrPK0rXtBQxz%2FXybsKgpHOVONRBvHbGhrl7YRvYGhVfoQKC6dafzq2P0YljE%2FXYILKys7RcMuOMN%2FW%2Br8GOqUB%2BZ1zvNNYo9G6av9dRFjzRi5J22Z8LOz7XcyjbiBxOmUVTj%2B5ppnl%2FBSdPT9TqD42o0%2BWXmNEClSnZlPt6dv5xwVON0mxkHlZBc0OyYxA9xY25kSsAW%2FUzxdc6XCjqcjXG6cVEQqER%2BF6ifOsqVS1WXYy99B8PI1gOLVvHt7Rq48RbdNTAj0RwSfZKYTBfTRKBzGWi0W0awpHYTQgrOnMumrBcR7u&X-Amz-Signature=825f36cd41dc5afd3c9c25d91e983497c193e9c3620341f26ac2e33be2514326&X-Amz-SignedHeaders=host&x-id=GetObject)
