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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DYRYXS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZzSjYx%2F6NL9y%2BuG9cS7lKyWGURbuezC8rBR%2BPaj5EGAIhALRYlSxJ5Fk6iekaMVxQ51sbSw1Mlw2T7TsxkoyOe5ekKv8DCBEQABoMNjM3NDIzMTgzODA1Igy4%2BwgF4Gz93ueatGwq3AO9r356gGP98q%2BzfF%2FtoLB4zL8oxmf%2BSSp6EB6W%2BcZuki9yflhnL4OEDZC4TbofqyQ3VstWgHl%2Fk0cuQUi%2BDIGlkAQaAwLEhzcShku%2Fw%2F4YixAsDUQz7eQO4C0%2BIOPd1PrO7pRJRpz6MaT0IlLkh62iwBmDotut6ndJbRS%2FQPz4jRz%2FVJF2SCqSTS6KHAz05Y%2FEZ8Z0eRBRW9lPwnhHb6J0ho3HbJ6SSY5BJJfUwamRm1QqQrfylCX%2Bwg9vg5ChL5vxMIspCqXomkpwW8HxIoV%2BEJaZ7D1WKI5TMXIZmURmPFUKYr67zOyH1g5ahzY2NeWxqadSiI5QeFCeGarQZ8x6pcE%2BG9dbzdYvik86xubr5Ish0pjaXpFbLqN0mQVGARQBmT%2BjTdJKg1EMK8Ir2Gk7PRNXvOxHslR2rpGgSmw%2FKcflogaQJ4eVvWw3VDy6aQnQp4HA8u6yx0Phn0L2Lhf9Y5LJcGbZ%2BTQnUwmIjmIeQJ5bq6bZ6XxycQpbZP72871hnbupC0ylvsWg5cftfTazsuyKXT5InIMAR7Swmo5DINNGpCCj6DH1oXzi2RZ7vRgZ2dGnFd0BU%2FxopOGyNXqT%2FLKUYTjFtHt1wdGiVBRelRL7mRMeKhdreoSXqzD%2BzIm%2FBjqkARP7iZjE%2BAYFZfLI1DD5isc92VOkY9kXt%2FDNkpK0%2FCnkz7kEy7CnRY1my38tKQzyn%2FoEq6pPrNFcl3XdneY4NW1aN0B6EcsVx1%2BO6z3ItM3CGXOwlLLMGQy1N3HfP4TIu8%2FDuot4iFC878c5wwZEKy2dFkYRmwJiBRgDcyStWochSb7rRMtTMDzLMR%2BG84dFQT4zWVoRr1jqY7C9gNpS96D%2BmQYI&X-Amz-Signature=7f1415233c0a052c5f3071b408629ed8e51c9115903661053abdd7ccf05c9fad&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DYRYXS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZzSjYx%2F6NL9y%2BuG9cS7lKyWGURbuezC8rBR%2BPaj5EGAIhALRYlSxJ5Fk6iekaMVxQ51sbSw1Mlw2T7TsxkoyOe5ekKv8DCBEQABoMNjM3NDIzMTgzODA1Igy4%2BwgF4Gz93ueatGwq3AO9r356gGP98q%2BzfF%2FtoLB4zL8oxmf%2BSSp6EB6W%2BcZuki9yflhnL4OEDZC4TbofqyQ3VstWgHl%2Fk0cuQUi%2BDIGlkAQaAwLEhzcShku%2Fw%2F4YixAsDUQz7eQO4C0%2BIOPd1PrO7pRJRpz6MaT0IlLkh62iwBmDotut6ndJbRS%2FQPz4jRz%2FVJF2SCqSTS6KHAz05Y%2FEZ8Z0eRBRW9lPwnhHb6J0ho3HbJ6SSY5BJJfUwamRm1QqQrfylCX%2Bwg9vg5ChL5vxMIspCqXomkpwW8HxIoV%2BEJaZ7D1WKI5TMXIZmURmPFUKYr67zOyH1g5ahzY2NeWxqadSiI5QeFCeGarQZ8x6pcE%2BG9dbzdYvik86xubr5Ish0pjaXpFbLqN0mQVGARQBmT%2BjTdJKg1EMK8Ir2Gk7PRNXvOxHslR2rpGgSmw%2FKcflogaQJ4eVvWw3VDy6aQnQp4HA8u6yx0Phn0L2Lhf9Y5LJcGbZ%2BTQnUwmIjmIeQJ5bq6bZ6XxycQpbZP72871hnbupC0ylvsWg5cftfTazsuyKXT5InIMAR7Swmo5DINNGpCCj6DH1oXzi2RZ7vRgZ2dGnFd0BU%2FxopOGyNXqT%2FLKUYTjFtHt1wdGiVBRelRL7mRMeKhdreoSXqzD%2BzIm%2FBjqkARP7iZjE%2BAYFZfLI1DD5isc92VOkY9kXt%2FDNkpK0%2FCnkz7kEy7CnRY1my38tKQzyn%2FoEq6pPrNFcl3XdneY4NW1aN0B6EcsVx1%2BO6z3ItM3CGXOwlLLMGQy1N3HfP4TIu8%2FDuot4iFC878c5wwZEKy2dFkYRmwJiBRgDcyStWochSb7rRMtTMDzLMR%2BG84dFQT4zWVoRr1jqY7C9gNpS96D%2BmQYI&X-Amz-Signature=82695f451bc9665bb5574b38f6c124b5e5148d50354ba1cf1c806f3c99e35fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DYRYXS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZzSjYx%2F6NL9y%2BuG9cS7lKyWGURbuezC8rBR%2BPaj5EGAIhALRYlSxJ5Fk6iekaMVxQ51sbSw1Mlw2T7TsxkoyOe5ekKv8DCBEQABoMNjM3NDIzMTgzODA1Igy4%2BwgF4Gz93ueatGwq3AO9r356gGP98q%2BzfF%2FtoLB4zL8oxmf%2BSSp6EB6W%2BcZuki9yflhnL4OEDZC4TbofqyQ3VstWgHl%2Fk0cuQUi%2BDIGlkAQaAwLEhzcShku%2Fw%2F4YixAsDUQz7eQO4C0%2BIOPd1PrO7pRJRpz6MaT0IlLkh62iwBmDotut6ndJbRS%2FQPz4jRz%2FVJF2SCqSTS6KHAz05Y%2FEZ8Z0eRBRW9lPwnhHb6J0ho3HbJ6SSY5BJJfUwamRm1QqQrfylCX%2Bwg9vg5ChL5vxMIspCqXomkpwW8HxIoV%2BEJaZ7D1WKI5TMXIZmURmPFUKYr67zOyH1g5ahzY2NeWxqadSiI5QeFCeGarQZ8x6pcE%2BG9dbzdYvik86xubr5Ish0pjaXpFbLqN0mQVGARQBmT%2BjTdJKg1EMK8Ir2Gk7PRNXvOxHslR2rpGgSmw%2FKcflogaQJ4eVvWw3VDy6aQnQp4HA8u6yx0Phn0L2Lhf9Y5LJcGbZ%2BTQnUwmIjmIeQJ5bq6bZ6XxycQpbZP72871hnbupC0ylvsWg5cftfTazsuyKXT5InIMAR7Swmo5DINNGpCCj6DH1oXzi2RZ7vRgZ2dGnFd0BU%2FxopOGyNXqT%2FLKUYTjFtHt1wdGiVBRelRL7mRMeKhdreoSXqzD%2BzIm%2FBjqkARP7iZjE%2BAYFZfLI1DD5isc92VOkY9kXt%2FDNkpK0%2FCnkz7kEy7CnRY1my38tKQzyn%2FoEq6pPrNFcl3XdneY4NW1aN0B6EcsVx1%2BO6z3ItM3CGXOwlLLMGQy1N3HfP4TIu8%2FDuot4iFC878c5wwZEKy2dFkYRmwJiBRgDcyStWochSb7rRMtTMDzLMR%2BG84dFQT4zWVoRr1jqY7C9gNpS96D%2BmQYI&X-Amz-Signature=fe863b181a16fcbd623d0ce1e7ee269d1097d01db6c10358f3c2c6cca3d761fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DYRYXS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZzSjYx%2F6NL9y%2BuG9cS7lKyWGURbuezC8rBR%2BPaj5EGAIhALRYlSxJ5Fk6iekaMVxQ51sbSw1Mlw2T7TsxkoyOe5ekKv8DCBEQABoMNjM3NDIzMTgzODA1Igy4%2BwgF4Gz93ueatGwq3AO9r356gGP98q%2BzfF%2FtoLB4zL8oxmf%2BSSp6EB6W%2BcZuki9yflhnL4OEDZC4TbofqyQ3VstWgHl%2Fk0cuQUi%2BDIGlkAQaAwLEhzcShku%2Fw%2F4YixAsDUQz7eQO4C0%2BIOPd1PrO7pRJRpz6MaT0IlLkh62iwBmDotut6ndJbRS%2FQPz4jRz%2FVJF2SCqSTS6KHAz05Y%2FEZ8Z0eRBRW9lPwnhHb6J0ho3HbJ6SSY5BJJfUwamRm1QqQrfylCX%2Bwg9vg5ChL5vxMIspCqXomkpwW8HxIoV%2BEJaZ7D1WKI5TMXIZmURmPFUKYr67zOyH1g5ahzY2NeWxqadSiI5QeFCeGarQZ8x6pcE%2BG9dbzdYvik86xubr5Ish0pjaXpFbLqN0mQVGARQBmT%2BjTdJKg1EMK8Ir2Gk7PRNXvOxHslR2rpGgSmw%2FKcflogaQJ4eVvWw3VDy6aQnQp4HA8u6yx0Phn0L2Lhf9Y5LJcGbZ%2BTQnUwmIjmIeQJ5bq6bZ6XxycQpbZP72871hnbupC0ylvsWg5cftfTazsuyKXT5InIMAR7Swmo5DINNGpCCj6DH1oXzi2RZ7vRgZ2dGnFd0BU%2FxopOGyNXqT%2FLKUYTjFtHt1wdGiVBRelRL7mRMeKhdreoSXqzD%2BzIm%2FBjqkARP7iZjE%2BAYFZfLI1DD5isc92VOkY9kXt%2FDNkpK0%2FCnkz7kEy7CnRY1my38tKQzyn%2FoEq6pPrNFcl3XdneY4NW1aN0B6EcsVx1%2BO6z3ItM3CGXOwlLLMGQy1N3HfP4TIu8%2FDuot4iFC878c5wwZEKy2dFkYRmwJiBRgDcyStWochSb7rRMtTMDzLMR%2BG84dFQT4zWVoRr1jqY7C9gNpS96D%2BmQYI&X-Amz-Signature=c8e64805ad26c9d01646eb369cf96c18ba1585a7bf6f6bee6d9998ce430123bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DYRYXS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZzSjYx%2F6NL9y%2BuG9cS7lKyWGURbuezC8rBR%2BPaj5EGAIhALRYlSxJ5Fk6iekaMVxQ51sbSw1Mlw2T7TsxkoyOe5ekKv8DCBEQABoMNjM3NDIzMTgzODA1Igy4%2BwgF4Gz93ueatGwq3AO9r356gGP98q%2BzfF%2FtoLB4zL8oxmf%2BSSp6EB6W%2BcZuki9yflhnL4OEDZC4TbofqyQ3VstWgHl%2Fk0cuQUi%2BDIGlkAQaAwLEhzcShku%2Fw%2F4YixAsDUQz7eQO4C0%2BIOPd1PrO7pRJRpz6MaT0IlLkh62iwBmDotut6ndJbRS%2FQPz4jRz%2FVJF2SCqSTS6KHAz05Y%2FEZ8Z0eRBRW9lPwnhHb6J0ho3HbJ6SSY5BJJfUwamRm1QqQrfylCX%2Bwg9vg5ChL5vxMIspCqXomkpwW8HxIoV%2BEJaZ7D1WKI5TMXIZmURmPFUKYr67zOyH1g5ahzY2NeWxqadSiI5QeFCeGarQZ8x6pcE%2BG9dbzdYvik86xubr5Ish0pjaXpFbLqN0mQVGARQBmT%2BjTdJKg1EMK8Ir2Gk7PRNXvOxHslR2rpGgSmw%2FKcflogaQJ4eVvWw3VDy6aQnQp4HA8u6yx0Phn0L2Lhf9Y5LJcGbZ%2BTQnUwmIjmIeQJ5bq6bZ6XxycQpbZP72871hnbupC0ylvsWg5cftfTazsuyKXT5InIMAR7Swmo5DINNGpCCj6DH1oXzi2RZ7vRgZ2dGnFd0BU%2FxopOGyNXqT%2FLKUYTjFtHt1wdGiVBRelRL7mRMeKhdreoSXqzD%2BzIm%2FBjqkARP7iZjE%2BAYFZfLI1DD5isc92VOkY9kXt%2FDNkpK0%2FCnkz7kEy7CnRY1my38tKQzyn%2FoEq6pPrNFcl3XdneY4NW1aN0B6EcsVx1%2BO6z3ItM3CGXOwlLLMGQy1N3HfP4TIu8%2FDuot4iFC878c5wwZEKy2dFkYRmwJiBRgDcyStWochSb7rRMtTMDzLMR%2BG84dFQT4zWVoRr1jqY7C9gNpS96D%2BmQYI&X-Amz-Signature=8f87de1cca9673555e0dc106ae9d18132540d0d0d3c25c34e46c11283b3f3cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DYRYXS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZzSjYx%2F6NL9y%2BuG9cS7lKyWGURbuezC8rBR%2BPaj5EGAIhALRYlSxJ5Fk6iekaMVxQ51sbSw1Mlw2T7TsxkoyOe5ekKv8DCBEQABoMNjM3NDIzMTgzODA1Igy4%2BwgF4Gz93ueatGwq3AO9r356gGP98q%2BzfF%2FtoLB4zL8oxmf%2BSSp6EB6W%2BcZuki9yflhnL4OEDZC4TbofqyQ3VstWgHl%2Fk0cuQUi%2BDIGlkAQaAwLEhzcShku%2Fw%2F4YixAsDUQz7eQO4C0%2BIOPd1PrO7pRJRpz6MaT0IlLkh62iwBmDotut6ndJbRS%2FQPz4jRz%2FVJF2SCqSTS6KHAz05Y%2FEZ8Z0eRBRW9lPwnhHb6J0ho3HbJ6SSY5BJJfUwamRm1QqQrfylCX%2Bwg9vg5ChL5vxMIspCqXomkpwW8HxIoV%2BEJaZ7D1WKI5TMXIZmURmPFUKYr67zOyH1g5ahzY2NeWxqadSiI5QeFCeGarQZ8x6pcE%2BG9dbzdYvik86xubr5Ish0pjaXpFbLqN0mQVGARQBmT%2BjTdJKg1EMK8Ir2Gk7PRNXvOxHslR2rpGgSmw%2FKcflogaQJ4eVvWw3VDy6aQnQp4HA8u6yx0Phn0L2Lhf9Y5LJcGbZ%2BTQnUwmIjmIeQJ5bq6bZ6XxycQpbZP72871hnbupC0ylvsWg5cftfTazsuyKXT5InIMAR7Swmo5DINNGpCCj6DH1oXzi2RZ7vRgZ2dGnFd0BU%2FxopOGyNXqT%2FLKUYTjFtHt1wdGiVBRelRL7mRMeKhdreoSXqzD%2BzIm%2FBjqkARP7iZjE%2BAYFZfLI1DD5isc92VOkY9kXt%2FDNkpK0%2FCnkz7kEy7CnRY1my38tKQzyn%2FoEq6pPrNFcl3XdneY4NW1aN0B6EcsVx1%2BO6z3ItM3CGXOwlLLMGQy1N3HfP4TIu8%2FDuot4iFC878c5wwZEKy2dFkYRmwJiBRgDcyStWochSb7rRMtTMDzLMR%2BG84dFQT4zWVoRr1jqY7C9gNpS96D%2BmQYI&X-Amz-Signature=d6bbbc065e796690b5dab773bc5c6a8cc88ba0620a43895eb17b94127fac2bf1&X-Amz-SignedHeaders=host&x-id=GetObject)
