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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7JOXSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGe0UiMvnenwypnUVPBdWT1NLHyPQ%2FRnehYKZZR07cXyAiBSKXzGeeTPqQm3rEPzs33v4ikrLrsYiO%2BhKaseEkQVCCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM72jJJwJm8MA2kq28KtwDWz4Obo5b50TNBCrhGdEH7yAJvPzcZUhm4m1C6gZxQu2XWBMq0sHyoBIQOG1nkM8A7JsFzxCWoEhUpG8hLGuza8E%2Fkj3eBPQvQi48o1Qam8IEu2daWVfyBr4Mq8KG96vp9hWf67jSR3VD9u7Lbpi16pkPenl7d%2Fc30t6utIVYxAgTP9bxT4Yemn3WfiqLor0LfSOERz5%2BWqLXvbTEooArTv0mOBdX0FLHlDxk0jd8AdW51z4oXVWkCO1yB7oexe0MKHKhGRo0uxlhFO1Fr%2FdUL7ygZOgrEmo2BDszcapht9gUBBeKpNO4KkCqc5rAGdijFAa7KYu2diTfKrS3WCsCqZEYzuNlvXtvu4SdV4ZmO2AUQjC%2FsNoS5qot90TpuQO2fZRfWR311pTKcMT5d5teNJZipo9CzHJ93xGX3ypbitKt3n%2Bz8r79WY77JiVJMfC0i9Vl02fCdxnGfP%2BUr7a5XnfBXPiv%2BNIPo35LH7srR82MB3EgdHR8IoJpGAK6%2FxuQH1GoLPbBoWO7h5en1exV4KaKMFGlWbrE1LTHY%2FHVGyVLh3SwAZWIWIUzJG36DL5ugc8Tk7h74NqZBO4H%2BXxS7I8pw9KrXQ9fmlxtMiJ%2F4FyrbDGeVJ383A9N6lwwzoeiwwY6pgEHDA0zb8lHs5pX4QQoH8mcHaQwbAUuzqvCkeCtB0zmgDElvfps9R55xkXXoo9DFI36%2Br7JCAUdIfjHWmm0cq%2B2FDfAgoqoTOzHWrf0ZtQn2PQZSKnqszxIFwvPxOTkSckVGbv9JAphmy%2FGbGlIi3kxxrs3zbeiK6eM5fLjC66gWnV1cT9Uc2IgwCmFPU4X21kkDmInObmFwLgrTlpF9ch9nPi6NGcH&X-Amz-Signature=e7d5ee6aacceec1020acae61fe07bfca27842844db838519bed3c7474f90849a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7JOXSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGe0UiMvnenwypnUVPBdWT1NLHyPQ%2FRnehYKZZR07cXyAiBSKXzGeeTPqQm3rEPzs33v4ikrLrsYiO%2BhKaseEkQVCCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM72jJJwJm8MA2kq28KtwDWz4Obo5b50TNBCrhGdEH7yAJvPzcZUhm4m1C6gZxQu2XWBMq0sHyoBIQOG1nkM8A7JsFzxCWoEhUpG8hLGuza8E%2Fkj3eBPQvQi48o1Qam8IEu2daWVfyBr4Mq8KG96vp9hWf67jSR3VD9u7Lbpi16pkPenl7d%2Fc30t6utIVYxAgTP9bxT4Yemn3WfiqLor0LfSOERz5%2BWqLXvbTEooArTv0mOBdX0FLHlDxk0jd8AdW51z4oXVWkCO1yB7oexe0MKHKhGRo0uxlhFO1Fr%2FdUL7ygZOgrEmo2BDszcapht9gUBBeKpNO4KkCqc5rAGdijFAa7KYu2diTfKrS3WCsCqZEYzuNlvXtvu4SdV4ZmO2AUQjC%2FsNoS5qot90TpuQO2fZRfWR311pTKcMT5d5teNJZipo9CzHJ93xGX3ypbitKt3n%2Bz8r79WY77JiVJMfC0i9Vl02fCdxnGfP%2BUr7a5XnfBXPiv%2BNIPo35LH7srR82MB3EgdHR8IoJpGAK6%2FxuQH1GoLPbBoWO7h5en1exV4KaKMFGlWbrE1LTHY%2FHVGyVLh3SwAZWIWIUzJG36DL5ugc8Tk7h74NqZBO4H%2BXxS7I8pw9KrXQ9fmlxtMiJ%2F4FyrbDGeVJ383A9N6lwwzoeiwwY6pgEHDA0zb8lHs5pX4QQoH8mcHaQwbAUuzqvCkeCtB0zmgDElvfps9R55xkXXoo9DFI36%2Br7JCAUdIfjHWmm0cq%2B2FDfAgoqoTOzHWrf0ZtQn2PQZSKnqszxIFwvPxOTkSckVGbv9JAphmy%2FGbGlIi3kxxrs3zbeiK6eM5fLjC66gWnV1cT9Uc2IgwCmFPU4X21kkDmInObmFwLgrTlpF9ch9nPi6NGcH&X-Amz-Signature=004415da4269fdfbbd194b32648011594cb03197f5ee0c4b9b3ce253a73d5ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7JOXSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGe0UiMvnenwypnUVPBdWT1NLHyPQ%2FRnehYKZZR07cXyAiBSKXzGeeTPqQm3rEPzs33v4ikrLrsYiO%2BhKaseEkQVCCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM72jJJwJm8MA2kq28KtwDWz4Obo5b50TNBCrhGdEH7yAJvPzcZUhm4m1C6gZxQu2XWBMq0sHyoBIQOG1nkM8A7JsFzxCWoEhUpG8hLGuza8E%2Fkj3eBPQvQi48o1Qam8IEu2daWVfyBr4Mq8KG96vp9hWf67jSR3VD9u7Lbpi16pkPenl7d%2Fc30t6utIVYxAgTP9bxT4Yemn3WfiqLor0LfSOERz5%2BWqLXvbTEooArTv0mOBdX0FLHlDxk0jd8AdW51z4oXVWkCO1yB7oexe0MKHKhGRo0uxlhFO1Fr%2FdUL7ygZOgrEmo2BDszcapht9gUBBeKpNO4KkCqc5rAGdijFAa7KYu2diTfKrS3WCsCqZEYzuNlvXtvu4SdV4ZmO2AUQjC%2FsNoS5qot90TpuQO2fZRfWR311pTKcMT5d5teNJZipo9CzHJ93xGX3ypbitKt3n%2Bz8r79WY77JiVJMfC0i9Vl02fCdxnGfP%2BUr7a5XnfBXPiv%2BNIPo35LH7srR82MB3EgdHR8IoJpGAK6%2FxuQH1GoLPbBoWO7h5en1exV4KaKMFGlWbrE1LTHY%2FHVGyVLh3SwAZWIWIUzJG36DL5ugc8Tk7h74NqZBO4H%2BXxS7I8pw9KrXQ9fmlxtMiJ%2F4FyrbDGeVJ383A9N6lwwzoeiwwY6pgEHDA0zb8lHs5pX4QQoH8mcHaQwbAUuzqvCkeCtB0zmgDElvfps9R55xkXXoo9DFI36%2Br7JCAUdIfjHWmm0cq%2B2FDfAgoqoTOzHWrf0ZtQn2PQZSKnqszxIFwvPxOTkSckVGbv9JAphmy%2FGbGlIi3kxxrs3zbeiK6eM5fLjC66gWnV1cT9Uc2IgwCmFPU4X21kkDmInObmFwLgrTlpF9ch9nPi6NGcH&X-Amz-Signature=b0a74196995b7b2d6d98c1db0302cd4500de0abe25992f227bff31c179da440d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7JOXSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGe0UiMvnenwypnUVPBdWT1NLHyPQ%2FRnehYKZZR07cXyAiBSKXzGeeTPqQm3rEPzs33v4ikrLrsYiO%2BhKaseEkQVCCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM72jJJwJm8MA2kq28KtwDWz4Obo5b50TNBCrhGdEH7yAJvPzcZUhm4m1C6gZxQu2XWBMq0sHyoBIQOG1nkM8A7JsFzxCWoEhUpG8hLGuza8E%2Fkj3eBPQvQi48o1Qam8IEu2daWVfyBr4Mq8KG96vp9hWf67jSR3VD9u7Lbpi16pkPenl7d%2Fc30t6utIVYxAgTP9bxT4Yemn3WfiqLor0LfSOERz5%2BWqLXvbTEooArTv0mOBdX0FLHlDxk0jd8AdW51z4oXVWkCO1yB7oexe0MKHKhGRo0uxlhFO1Fr%2FdUL7ygZOgrEmo2BDszcapht9gUBBeKpNO4KkCqc5rAGdijFAa7KYu2diTfKrS3WCsCqZEYzuNlvXtvu4SdV4ZmO2AUQjC%2FsNoS5qot90TpuQO2fZRfWR311pTKcMT5d5teNJZipo9CzHJ93xGX3ypbitKt3n%2Bz8r79WY77JiVJMfC0i9Vl02fCdxnGfP%2BUr7a5XnfBXPiv%2BNIPo35LH7srR82MB3EgdHR8IoJpGAK6%2FxuQH1GoLPbBoWO7h5en1exV4KaKMFGlWbrE1LTHY%2FHVGyVLh3SwAZWIWIUzJG36DL5ugc8Tk7h74NqZBO4H%2BXxS7I8pw9KrXQ9fmlxtMiJ%2F4FyrbDGeVJ383A9N6lwwzoeiwwY6pgEHDA0zb8lHs5pX4QQoH8mcHaQwbAUuzqvCkeCtB0zmgDElvfps9R55xkXXoo9DFI36%2Br7JCAUdIfjHWmm0cq%2B2FDfAgoqoTOzHWrf0ZtQn2PQZSKnqszxIFwvPxOTkSckVGbv9JAphmy%2FGbGlIi3kxxrs3zbeiK6eM5fLjC66gWnV1cT9Uc2IgwCmFPU4X21kkDmInObmFwLgrTlpF9ch9nPi6NGcH&X-Amz-Signature=b8428becc6ce0c245ab880f47fa2c1ccb98bdfe474be8e4d70ce006119d85f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7JOXSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGe0UiMvnenwypnUVPBdWT1NLHyPQ%2FRnehYKZZR07cXyAiBSKXzGeeTPqQm3rEPzs33v4ikrLrsYiO%2BhKaseEkQVCCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM72jJJwJm8MA2kq28KtwDWz4Obo5b50TNBCrhGdEH7yAJvPzcZUhm4m1C6gZxQu2XWBMq0sHyoBIQOG1nkM8A7JsFzxCWoEhUpG8hLGuza8E%2Fkj3eBPQvQi48o1Qam8IEu2daWVfyBr4Mq8KG96vp9hWf67jSR3VD9u7Lbpi16pkPenl7d%2Fc30t6utIVYxAgTP9bxT4Yemn3WfiqLor0LfSOERz5%2BWqLXvbTEooArTv0mOBdX0FLHlDxk0jd8AdW51z4oXVWkCO1yB7oexe0MKHKhGRo0uxlhFO1Fr%2FdUL7ygZOgrEmo2BDszcapht9gUBBeKpNO4KkCqc5rAGdijFAa7KYu2diTfKrS3WCsCqZEYzuNlvXtvu4SdV4ZmO2AUQjC%2FsNoS5qot90TpuQO2fZRfWR311pTKcMT5d5teNJZipo9CzHJ93xGX3ypbitKt3n%2Bz8r79WY77JiVJMfC0i9Vl02fCdxnGfP%2BUr7a5XnfBXPiv%2BNIPo35LH7srR82MB3EgdHR8IoJpGAK6%2FxuQH1GoLPbBoWO7h5en1exV4KaKMFGlWbrE1LTHY%2FHVGyVLh3SwAZWIWIUzJG36DL5ugc8Tk7h74NqZBO4H%2BXxS7I8pw9KrXQ9fmlxtMiJ%2F4FyrbDGeVJ383A9N6lwwzoeiwwY6pgEHDA0zb8lHs5pX4QQoH8mcHaQwbAUuzqvCkeCtB0zmgDElvfps9R55xkXXoo9DFI36%2Br7JCAUdIfjHWmm0cq%2B2FDfAgoqoTOzHWrf0ZtQn2PQZSKnqszxIFwvPxOTkSckVGbv9JAphmy%2FGbGlIi3kxxrs3zbeiK6eM5fLjC66gWnV1cT9Uc2IgwCmFPU4X21kkDmInObmFwLgrTlpF9ch9nPi6NGcH&X-Amz-Signature=5cf3b95b001be45cd7f53531893727d5abbd39ff5b3e42db24f136b60a3d2364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7JOXSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGe0UiMvnenwypnUVPBdWT1NLHyPQ%2FRnehYKZZR07cXyAiBSKXzGeeTPqQm3rEPzs33v4ikrLrsYiO%2BhKaseEkQVCCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM72jJJwJm8MA2kq28KtwDWz4Obo5b50TNBCrhGdEH7yAJvPzcZUhm4m1C6gZxQu2XWBMq0sHyoBIQOG1nkM8A7JsFzxCWoEhUpG8hLGuza8E%2Fkj3eBPQvQi48o1Qam8IEu2daWVfyBr4Mq8KG96vp9hWf67jSR3VD9u7Lbpi16pkPenl7d%2Fc30t6utIVYxAgTP9bxT4Yemn3WfiqLor0LfSOERz5%2BWqLXvbTEooArTv0mOBdX0FLHlDxk0jd8AdW51z4oXVWkCO1yB7oexe0MKHKhGRo0uxlhFO1Fr%2FdUL7ygZOgrEmo2BDszcapht9gUBBeKpNO4KkCqc5rAGdijFAa7KYu2diTfKrS3WCsCqZEYzuNlvXtvu4SdV4ZmO2AUQjC%2FsNoS5qot90TpuQO2fZRfWR311pTKcMT5d5teNJZipo9CzHJ93xGX3ypbitKt3n%2Bz8r79WY77JiVJMfC0i9Vl02fCdxnGfP%2BUr7a5XnfBXPiv%2BNIPo35LH7srR82MB3EgdHR8IoJpGAK6%2FxuQH1GoLPbBoWO7h5en1exV4KaKMFGlWbrE1LTHY%2FHVGyVLh3SwAZWIWIUzJG36DL5ugc8Tk7h74NqZBO4H%2BXxS7I8pw9KrXQ9fmlxtMiJ%2F4FyrbDGeVJ383A9N6lwwzoeiwwY6pgEHDA0zb8lHs5pX4QQoH8mcHaQwbAUuzqvCkeCtB0zmgDElvfps9R55xkXXoo9DFI36%2Br7JCAUdIfjHWmm0cq%2B2FDfAgoqoTOzHWrf0ZtQn2PQZSKnqszxIFwvPxOTkSckVGbv9JAphmy%2FGbGlIi3kxxrs3zbeiK6eM5fLjC66gWnV1cT9Uc2IgwCmFPU4X21kkDmInObmFwLgrTlpF9ch9nPi6NGcH&X-Amz-Signature=b4a1acbf521f69baf3710d9c680f9232198979eb734b9ee2d8f47fef2f7e9f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
