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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNPVPQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8mtBUGA2gQps8hO2v14sVyQXUZ0SRG4%2Bb3D3vJpKpFwIgR6NXeJoODuMq3CqtBA%2B3%2FqssBLe8fRTKLGMlqbgtwasqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZ%2B8qQQvBzW1N1ryrcA7gABRZuCf%2BGDnJDkjehCyS1jWvF9A%2FHILEWRyiQT5ePLKWiDsdkUZsCd8r4zD0vyoCRVsXQrlnLkR0R%2FgSzzQfwgKIuzbhPIXERN3zrk5KJJDa6BpyeS3N33whTJ68uHTuGY6AeG8NTZLzoaKuY4lY3Qhew69mhi6pvmupvj8rZck7tTvvk0TNXwilil4b%2FuqbFQKD2JAYuDtR0THFGwh5baZqtkf9FwuH%2BBoFgWhQDJ4yRy%2BElluG%2FoybcDJM%2BCvWTiPmtUW5hOBtUOGongMYhk9QJwX%2Bc5SR3ikYvyTwy9JNFgTrb89Tu9BsiJ7uL87uZ1yW8p%2BKN%2FHCohibWbGJGQJL%2F7QdOFlQRJnhbNK%2FU9SG7%2FsDAy%2FYjJCUgZPPU0blQwPG8vnajklpB0KWfMJo14iIT%2F%2BR7ny2iIvn%2FrkoXy36qIC%2FOURUXjOxKJawXwh8OpYaqVakfx4tyRNZhuXetm%2BkYvUDYRVx2YeRDPxRcudBOAqhP7y%2FZGJhRJusovYXqPwEY6RIe0PxI%2BuMLrVFhSH6I%2BcWRVobLmqmEzpTQPFmtv9vxpq3wGJekM8vzladuF%2FnEWWAxcWV0I6xD7x2GWpXnR%2BFbeceHazYXPBe5aL9md0fmC4g68EgOMPqs6b0GOqUBwcijuUXvCMP2XMSx2dE%2BiX%2FMPpToUPRqhh%2FCGPGRJwqO4jEpeYFmRyVIpzsInZxYFBOcbYEd3XL5V3rM1qnG4PoyhYuIDeZPXNPMuVHjftfpKrJ6ZKVXBOlXMSKpgkVy7VULCEMdjqA24g0YIAHa12z28XhN8EBAG1jwGoy%2FpFXCtKMzLG8U6UOtOaYrJ1svpD14P%2BGd79ppD9ZrxNQt%2B2HtAPmS&X-Amz-Signature=802f44ada75658cd400e9195b9f72470ce156b93027f2c1c2d7286b5ef78e9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNPVPQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8mtBUGA2gQps8hO2v14sVyQXUZ0SRG4%2Bb3D3vJpKpFwIgR6NXeJoODuMq3CqtBA%2B3%2FqssBLe8fRTKLGMlqbgtwasqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZ%2B8qQQvBzW1N1ryrcA7gABRZuCf%2BGDnJDkjehCyS1jWvF9A%2FHILEWRyiQT5ePLKWiDsdkUZsCd8r4zD0vyoCRVsXQrlnLkR0R%2FgSzzQfwgKIuzbhPIXERN3zrk5KJJDa6BpyeS3N33whTJ68uHTuGY6AeG8NTZLzoaKuY4lY3Qhew69mhi6pvmupvj8rZck7tTvvk0TNXwilil4b%2FuqbFQKD2JAYuDtR0THFGwh5baZqtkf9FwuH%2BBoFgWhQDJ4yRy%2BElluG%2FoybcDJM%2BCvWTiPmtUW5hOBtUOGongMYhk9QJwX%2Bc5SR3ikYvyTwy9JNFgTrb89Tu9BsiJ7uL87uZ1yW8p%2BKN%2FHCohibWbGJGQJL%2F7QdOFlQRJnhbNK%2FU9SG7%2FsDAy%2FYjJCUgZPPU0blQwPG8vnajklpB0KWfMJo14iIT%2F%2BR7ny2iIvn%2FrkoXy36qIC%2FOURUXjOxKJawXwh8OpYaqVakfx4tyRNZhuXetm%2BkYvUDYRVx2YeRDPxRcudBOAqhP7y%2FZGJhRJusovYXqPwEY6RIe0PxI%2BuMLrVFhSH6I%2BcWRVobLmqmEzpTQPFmtv9vxpq3wGJekM8vzladuF%2FnEWWAxcWV0I6xD7x2GWpXnR%2BFbeceHazYXPBe5aL9md0fmC4g68EgOMPqs6b0GOqUBwcijuUXvCMP2XMSx2dE%2BiX%2FMPpToUPRqhh%2FCGPGRJwqO4jEpeYFmRyVIpzsInZxYFBOcbYEd3XL5V3rM1qnG4PoyhYuIDeZPXNPMuVHjftfpKrJ6ZKVXBOlXMSKpgkVy7VULCEMdjqA24g0YIAHa12z28XhN8EBAG1jwGoy%2FpFXCtKMzLG8U6UOtOaYrJ1svpD14P%2BGd79ppD9ZrxNQt%2B2HtAPmS&X-Amz-Signature=8e87c1d2f5dbc08bd623260d755184b30788c85092b6b4cfd211fcc561fa1dac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNPVPQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8mtBUGA2gQps8hO2v14sVyQXUZ0SRG4%2Bb3D3vJpKpFwIgR6NXeJoODuMq3CqtBA%2B3%2FqssBLe8fRTKLGMlqbgtwasqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZ%2B8qQQvBzW1N1ryrcA7gABRZuCf%2BGDnJDkjehCyS1jWvF9A%2FHILEWRyiQT5ePLKWiDsdkUZsCd8r4zD0vyoCRVsXQrlnLkR0R%2FgSzzQfwgKIuzbhPIXERN3zrk5KJJDa6BpyeS3N33whTJ68uHTuGY6AeG8NTZLzoaKuY4lY3Qhew69mhi6pvmupvj8rZck7tTvvk0TNXwilil4b%2FuqbFQKD2JAYuDtR0THFGwh5baZqtkf9FwuH%2BBoFgWhQDJ4yRy%2BElluG%2FoybcDJM%2BCvWTiPmtUW5hOBtUOGongMYhk9QJwX%2Bc5SR3ikYvyTwy9JNFgTrb89Tu9BsiJ7uL87uZ1yW8p%2BKN%2FHCohibWbGJGQJL%2F7QdOFlQRJnhbNK%2FU9SG7%2FsDAy%2FYjJCUgZPPU0blQwPG8vnajklpB0KWfMJo14iIT%2F%2BR7ny2iIvn%2FrkoXy36qIC%2FOURUXjOxKJawXwh8OpYaqVakfx4tyRNZhuXetm%2BkYvUDYRVx2YeRDPxRcudBOAqhP7y%2FZGJhRJusovYXqPwEY6RIe0PxI%2BuMLrVFhSH6I%2BcWRVobLmqmEzpTQPFmtv9vxpq3wGJekM8vzladuF%2FnEWWAxcWV0I6xD7x2GWpXnR%2BFbeceHazYXPBe5aL9md0fmC4g68EgOMPqs6b0GOqUBwcijuUXvCMP2XMSx2dE%2BiX%2FMPpToUPRqhh%2FCGPGRJwqO4jEpeYFmRyVIpzsInZxYFBOcbYEd3XL5V3rM1qnG4PoyhYuIDeZPXNPMuVHjftfpKrJ6ZKVXBOlXMSKpgkVy7VULCEMdjqA24g0YIAHa12z28XhN8EBAG1jwGoy%2FpFXCtKMzLG8U6UOtOaYrJ1svpD14P%2BGd79ppD9ZrxNQt%2B2HtAPmS&X-Amz-Signature=5f7c14734c3a07bc2abb2d7f575e6cb4e459ab2d0a42d5e6493abe38d02aa232&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNPVPQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8mtBUGA2gQps8hO2v14sVyQXUZ0SRG4%2Bb3D3vJpKpFwIgR6NXeJoODuMq3CqtBA%2B3%2FqssBLe8fRTKLGMlqbgtwasqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZ%2B8qQQvBzW1N1ryrcA7gABRZuCf%2BGDnJDkjehCyS1jWvF9A%2FHILEWRyiQT5ePLKWiDsdkUZsCd8r4zD0vyoCRVsXQrlnLkR0R%2FgSzzQfwgKIuzbhPIXERN3zrk5KJJDa6BpyeS3N33whTJ68uHTuGY6AeG8NTZLzoaKuY4lY3Qhew69mhi6pvmupvj8rZck7tTvvk0TNXwilil4b%2FuqbFQKD2JAYuDtR0THFGwh5baZqtkf9FwuH%2BBoFgWhQDJ4yRy%2BElluG%2FoybcDJM%2BCvWTiPmtUW5hOBtUOGongMYhk9QJwX%2Bc5SR3ikYvyTwy9JNFgTrb89Tu9BsiJ7uL87uZ1yW8p%2BKN%2FHCohibWbGJGQJL%2F7QdOFlQRJnhbNK%2FU9SG7%2FsDAy%2FYjJCUgZPPU0blQwPG8vnajklpB0KWfMJo14iIT%2F%2BR7ny2iIvn%2FrkoXy36qIC%2FOURUXjOxKJawXwh8OpYaqVakfx4tyRNZhuXetm%2BkYvUDYRVx2YeRDPxRcudBOAqhP7y%2FZGJhRJusovYXqPwEY6RIe0PxI%2BuMLrVFhSH6I%2BcWRVobLmqmEzpTQPFmtv9vxpq3wGJekM8vzladuF%2FnEWWAxcWV0I6xD7x2GWpXnR%2BFbeceHazYXPBe5aL9md0fmC4g68EgOMPqs6b0GOqUBwcijuUXvCMP2XMSx2dE%2BiX%2FMPpToUPRqhh%2FCGPGRJwqO4jEpeYFmRyVIpzsInZxYFBOcbYEd3XL5V3rM1qnG4PoyhYuIDeZPXNPMuVHjftfpKrJ6ZKVXBOlXMSKpgkVy7VULCEMdjqA24g0YIAHa12z28XhN8EBAG1jwGoy%2FpFXCtKMzLG8U6UOtOaYrJ1svpD14P%2BGd79ppD9ZrxNQt%2B2HtAPmS&X-Amz-Signature=b539ce74fda8e63271d03c120fecff2a7bda9fc78a21be601c95992b1fece082&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNPVPQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8mtBUGA2gQps8hO2v14sVyQXUZ0SRG4%2Bb3D3vJpKpFwIgR6NXeJoODuMq3CqtBA%2B3%2FqssBLe8fRTKLGMlqbgtwasqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZ%2B8qQQvBzW1N1ryrcA7gABRZuCf%2BGDnJDkjehCyS1jWvF9A%2FHILEWRyiQT5ePLKWiDsdkUZsCd8r4zD0vyoCRVsXQrlnLkR0R%2FgSzzQfwgKIuzbhPIXERN3zrk5KJJDa6BpyeS3N33whTJ68uHTuGY6AeG8NTZLzoaKuY4lY3Qhew69mhi6pvmupvj8rZck7tTvvk0TNXwilil4b%2FuqbFQKD2JAYuDtR0THFGwh5baZqtkf9FwuH%2BBoFgWhQDJ4yRy%2BElluG%2FoybcDJM%2BCvWTiPmtUW5hOBtUOGongMYhk9QJwX%2Bc5SR3ikYvyTwy9JNFgTrb89Tu9BsiJ7uL87uZ1yW8p%2BKN%2FHCohibWbGJGQJL%2F7QdOFlQRJnhbNK%2FU9SG7%2FsDAy%2FYjJCUgZPPU0blQwPG8vnajklpB0KWfMJo14iIT%2F%2BR7ny2iIvn%2FrkoXy36qIC%2FOURUXjOxKJawXwh8OpYaqVakfx4tyRNZhuXetm%2BkYvUDYRVx2YeRDPxRcudBOAqhP7y%2FZGJhRJusovYXqPwEY6RIe0PxI%2BuMLrVFhSH6I%2BcWRVobLmqmEzpTQPFmtv9vxpq3wGJekM8vzladuF%2FnEWWAxcWV0I6xD7x2GWpXnR%2BFbeceHazYXPBe5aL9md0fmC4g68EgOMPqs6b0GOqUBwcijuUXvCMP2XMSx2dE%2BiX%2FMPpToUPRqhh%2FCGPGRJwqO4jEpeYFmRyVIpzsInZxYFBOcbYEd3XL5V3rM1qnG4PoyhYuIDeZPXNPMuVHjftfpKrJ6ZKVXBOlXMSKpgkVy7VULCEMdjqA24g0YIAHa12z28XhN8EBAG1jwGoy%2FpFXCtKMzLG8U6UOtOaYrJ1svpD14P%2BGd79ppD9ZrxNQt%2B2HtAPmS&X-Amz-Signature=a124d9a37d98ebb1e1bd037e025598ec02a291a162f72da9dafc6236fdda95bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNPVPQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8mtBUGA2gQps8hO2v14sVyQXUZ0SRG4%2Bb3D3vJpKpFwIgR6NXeJoODuMq3CqtBA%2B3%2FqssBLe8fRTKLGMlqbgtwasqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpZ%2B8qQQvBzW1N1ryrcA7gABRZuCf%2BGDnJDkjehCyS1jWvF9A%2FHILEWRyiQT5ePLKWiDsdkUZsCd8r4zD0vyoCRVsXQrlnLkR0R%2FgSzzQfwgKIuzbhPIXERN3zrk5KJJDa6BpyeS3N33whTJ68uHTuGY6AeG8NTZLzoaKuY4lY3Qhew69mhi6pvmupvj8rZck7tTvvk0TNXwilil4b%2FuqbFQKD2JAYuDtR0THFGwh5baZqtkf9FwuH%2BBoFgWhQDJ4yRy%2BElluG%2FoybcDJM%2BCvWTiPmtUW5hOBtUOGongMYhk9QJwX%2Bc5SR3ikYvyTwy9JNFgTrb89Tu9BsiJ7uL87uZ1yW8p%2BKN%2FHCohibWbGJGQJL%2F7QdOFlQRJnhbNK%2FU9SG7%2FsDAy%2FYjJCUgZPPU0blQwPG8vnajklpB0KWfMJo14iIT%2F%2BR7ny2iIvn%2FrkoXy36qIC%2FOURUXjOxKJawXwh8OpYaqVakfx4tyRNZhuXetm%2BkYvUDYRVx2YeRDPxRcudBOAqhP7y%2FZGJhRJusovYXqPwEY6RIe0PxI%2BuMLrVFhSH6I%2BcWRVobLmqmEzpTQPFmtv9vxpq3wGJekM8vzladuF%2FnEWWAxcWV0I6xD7x2GWpXnR%2BFbeceHazYXPBe5aL9md0fmC4g68EgOMPqs6b0GOqUBwcijuUXvCMP2XMSx2dE%2BiX%2FMPpToUPRqhh%2FCGPGRJwqO4jEpeYFmRyVIpzsInZxYFBOcbYEd3XL5V3rM1qnG4PoyhYuIDeZPXNPMuVHjftfpKrJ6ZKVXBOlXMSKpgkVy7VULCEMdjqA24g0YIAHa12z28XhN8EBAG1jwGoy%2FpFXCtKMzLG8U6UOtOaYrJ1svpD14P%2BGd79ppD9ZrxNQt%2B2HtAPmS&X-Amz-Signature=2ce8141bf61e556f1dc9d00671d140b70d5cc44b0cb746c069b70e5c20fc1032&X-Amz-SignedHeaders=host&x-id=GetObject)
