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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DKZS6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg0Hj6%2BRbOuKVpVhtzRKA2sb%2FO0wGwJ%2FR7VWGJvtq5WAiEA6FjprGgjP6FkO%2Fzq3dyRZZYaUJ4IjTg%2B94G4al5pi38qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1yrBZZXp%2Fz6pN9LircA%2FG35t%2FYFPiNCcJUy4mnHzqjJ7bZq7hbhURrgC5whqheH4Ivoi%2BsK8Gpmr%2FRo5wattwLyPnRw9YsRl%2B2LqW5lVz34UJBxU1ZxGNzLrdncVWi9dv49Px%2FDTzV8Zp%2FMCrrhKjwKKeW2uVYCJympWi0obeRAWMj7lF6o3YFkdBYtz3DoVnTL2edWEUUX7LtHvWlk4%2FGH0%2Fhq01pznhOre2vaX4jECexBxzz7OBXpx0jj%2FYYV66ZTEmP6nzsuzdar1zKPSEsYoMhQTg%2B%2BnZ5REdKnHFeoBRPGidGBQzHy42wze7kYKM1uDfWK4mMMZWK6bqp6%2FZk89pTVzCNozTAw69evUPFSKB7%2B8pqKdP2KMY53FWXapjtQ9syRvZClKTv7iVtohwfaHwb1PsNqabdqCq%2FK%2BPZF7cEUGC5MfBksDr%2Bq9PgBoXcfIlyhO9AEk4zygNSnT2n%2FMyZ%2BbmCSKPkXN%2Fkayv9JPjgbF0ywSVDLaof7IBMJMryOzU%2FKkGiJiYOfeCZ7A6eJunz1v%2F6X9DqMLpdjPHpvdaFDrn90b9RxWIfylToxe8TzWQ%2Fi0D5g8K5xJ6tOf7CZwLj5jZdlUZzm77heNGK7P7K2FIq5XqdG1xNhmGIi4is3Az0yXiohyVIMOmj1cIGOqUBjS%2BF4hWL%2FoMNXF%2BlfiRRSKI%2BT8Ysmf5inASkvHiwJCD3uA51iFjf07pwYmcAhAywBwxIBc7AR0WBDpf8xXxOH2ngoqKWl3Jo0EWATlA%2FMCHfqvyAf9l7IV8vImrPCZxgoftd%2BIzH1K%2FpKif1rHEOtbeK1PfaOv5GzEAyra1s5fBZKpj4WrBvefPHR0orV4i8pIl0gKLHF7VznyXGHU7xkQKEdo%2Bx&X-Amz-Signature=36ecbe369189303e048514c7354d3b20377b0dc1e3f273f7603b826c873f2839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DKZS6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg0Hj6%2BRbOuKVpVhtzRKA2sb%2FO0wGwJ%2FR7VWGJvtq5WAiEA6FjprGgjP6FkO%2Fzq3dyRZZYaUJ4IjTg%2B94G4al5pi38qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1yrBZZXp%2Fz6pN9LircA%2FG35t%2FYFPiNCcJUy4mnHzqjJ7bZq7hbhURrgC5whqheH4Ivoi%2BsK8Gpmr%2FRo5wattwLyPnRw9YsRl%2B2LqW5lVz34UJBxU1ZxGNzLrdncVWi9dv49Px%2FDTzV8Zp%2FMCrrhKjwKKeW2uVYCJympWi0obeRAWMj7lF6o3YFkdBYtz3DoVnTL2edWEUUX7LtHvWlk4%2FGH0%2Fhq01pznhOre2vaX4jECexBxzz7OBXpx0jj%2FYYV66ZTEmP6nzsuzdar1zKPSEsYoMhQTg%2B%2BnZ5REdKnHFeoBRPGidGBQzHy42wze7kYKM1uDfWK4mMMZWK6bqp6%2FZk89pTVzCNozTAw69evUPFSKB7%2B8pqKdP2KMY53FWXapjtQ9syRvZClKTv7iVtohwfaHwb1PsNqabdqCq%2FK%2BPZF7cEUGC5MfBksDr%2Bq9PgBoXcfIlyhO9AEk4zygNSnT2n%2FMyZ%2BbmCSKPkXN%2Fkayv9JPjgbF0ywSVDLaof7IBMJMryOzU%2FKkGiJiYOfeCZ7A6eJunz1v%2F6X9DqMLpdjPHpvdaFDrn90b9RxWIfylToxe8TzWQ%2Fi0D5g8K5xJ6tOf7CZwLj5jZdlUZzm77heNGK7P7K2FIq5XqdG1xNhmGIi4is3Az0yXiohyVIMOmj1cIGOqUBjS%2BF4hWL%2FoMNXF%2BlfiRRSKI%2BT8Ysmf5inASkvHiwJCD3uA51iFjf07pwYmcAhAywBwxIBc7AR0WBDpf8xXxOH2ngoqKWl3Jo0EWATlA%2FMCHfqvyAf9l7IV8vImrPCZxgoftd%2BIzH1K%2FpKif1rHEOtbeK1PfaOv5GzEAyra1s5fBZKpj4WrBvefPHR0orV4i8pIl0gKLHF7VznyXGHU7xkQKEdo%2Bx&X-Amz-Signature=e80f95833a51a9d9c7bb87ecbb9d4a16d3dfd465021a0b7abe2f0e5d701bc8b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DKZS6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg0Hj6%2BRbOuKVpVhtzRKA2sb%2FO0wGwJ%2FR7VWGJvtq5WAiEA6FjprGgjP6FkO%2Fzq3dyRZZYaUJ4IjTg%2B94G4al5pi38qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1yrBZZXp%2Fz6pN9LircA%2FG35t%2FYFPiNCcJUy4mnHzqjJ7bZq7hbhURrgC5whqheH4Ivoi%2BsK8Gpmr%2FRo5wattwLyPnRw9YsRl%2B2LqW5lVz34UJBxU1ZxGNzLrdncVWi9dv49Px%2FDTzV8Zp%2FMCrrhKjwKKeW2uVYCJympWi0obeRAWMj7lF6o3YFkdBYtz3DoVnTL2edWEUUX7LtHvWlk4%2FGH0%2Fhq01pznhOre2vaX4jECexBxzz7OBXpx0jj%2FYYV66ZTEmP6nzsuzdar1zKPSEsYoMhQTg%2B%2BnZ5REdKnHFeoBRPGidGBQzHy42wze7kYKM1uDfWK4mMMZWK6bqp6%2FZk89pTVzCNozTAw69evUPFSKB7%2B8pqKdP2KMY53FWXapjtQ9syRvZClKTv7iVtohwfaHwb1PsNqabdqCq%2FK%2BPZF7cEUGC5MfBksDr%2Bq9PgBoXcfIlyhO9AEk4zygNSnT2n%2FMyZ%2BbmCSKPkXN%2Fkayv9JPjgbF0ywSVDLaof7IBMJMryOzU%2FKkGiJiYOfeCZ7A6eJunz1v%2F6X9DqMLpdjPHpvdaFDrn90b9RxWIfylToxe8TzWQ%2Fi0D5g8K5xJ6tOf7CZwLj5jZdlUZzm77heNGK7P7K2FIq5XqdG1xNhmGIi4is3Az0yXiohyVIMOmj1cIGOqUBjS%2BF4hWL%2FoMNXF%2BlfiRRSKI%2BT8Ysmf5inASkvHiwJCD3uA51iFjf07pwYmcAhAywBwxIBc7AR0WBDpf8xXxOH2ngoqKWl3Jo0EWATlA%2FMCHfqvyAf9l7IV8vImrPCZxgoftd%2BIzH1K%2FpKif1rHEOtbeK1PfaOv5GzEAyra1s5fBZKpj4WrBvefPHR0orV4i8pIl0gKLHF7VznyXGHU7xkQKEdo%2Bx&X-Amz-Signature=f40dcd205740848984a1b7c01689d534d9cfb8bc89a334dd6f1243310fbafd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DKZS6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg0Hj6%2BRbOuKVpVhtzRKA2sb%2FO0wGwJ%2FR7VWGJvtq5WAiEA6FjprGgjP6FkO%2Fzq3dyRZZYaUJ4IjTg%2B94G4al5pi38qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1yrBZZXp%2Fz6pN9LircA%2FG35t%2FYFPiNCcJUy4mnHzqjJ7bZq7hbhURrgC5whqheH4Ivoi%2BsK8Gpmr%2FRo5wattwLyPnRw9YsRl%2B2LqW5lVz34UJBxU1ZxGNzLrdncVWi9dv49Px%2FDTzV8Zp%2FMCrrhKjwKKeW2uVYCJympWi0obeRAWMj7lF6o3YFkdBYtz3DoVnTL2edWEUUX7LtHvWlk4%2FGH0%2Fhq01pznhOre2vaX4jECexBxzz7OBXpx0jj%2FYYV66ZTEmP6nzsuzdar1zKPSEsYoMhQTg%2B%2BnZ5REdKnHFeoBRPGidGBQzHy42wze7kYKM1uDfWK4mMMZWK6bqp6%2FZk89pTVzCNozTAw69evUPFSKB7%2B8pqKdP2KMY53FWXapjtQ9syRvZClKTv7iVtohwfaHwb1PsNqabdqCq%2FK%2BPZF7cEUGC5MfBksDr%2Bq9PgBoXcfIlyhO9AEk4zygNSnT2n%2FMyZ%2BbmCSKPkXN%2Fkayv9JPjgbF0ywSVDLaof7IBMJMryOzU%2FKkGiJiYOfeCZ7A6eJunz1v%2F6X9DqMLpdjPHpvdaFDrn90b9RxWIfylToxe8TzWQ%2Fi0D5g8K5xJ6tOf7CZwLj5jZdlUZzm77heNGK7P7K2FIq5XqdG1xNhmGIi4is3Az0yXiohyVIMOmj1cIGOqUBjS%2BF4hWL%2FoMNXF%2BlfiRRSKI%2BT8Ysmf5inASkvHiwJCD3uA51iFjf07pwYmcAhAywBwxIBc7AR0WBDpf8xXxOH2ngoqKWl3Jo0EWATlA%2FMCHfqvyAf9l7IV8vImrPCZxgoftd%2BIzH1K%2FpKif1rHEOtbeK1PfaOv5GzEAyra1s5fBZKpj4WrBvefPHR0orV4i8pIl0gKLHF7VznyXGHU7xkQKEdo%2Bx&X-Amz-Signature=14e6ee6fa13b4b8e5df66e9b6968a48cca445a902effc43cf989acd2ece5d5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DKZS6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg0Hj6%2BRbOuKVpVhtzRKA2sb%2FO0wGwJ%2FR7VWGJvtq5WAiEA6FjprGgjP6FkO%2Fzq3dyRZZYaUJ4IjTg%2B94G4al5pi38qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1yrBZZXp%2Fz6pN9LircA%2FG35t%2FYFPiNCcJUy4mnHzqjJ7bZq7hbhURrgC5whqheH4Ivoi%2BsK8Gpmr%2FRo5wattwLyPnRw9YsRl%2B2LqW5lVz34UJBxU1ZxGNzLrdncVWi9dv49Px%2FDTzV8Zp%2FMCrrhKjwKKeW2uVYCJympWi0obeRAWMj7lF6o3YFkdBYtz3DoVnTL2edWEUUX7LtHvWlk4%2FGH0%2Fhq01pznhOre2vaX4jECexBxzz7OBXpx0jj%2FYYV66ZTEmP6nzsuzdar1zKPSEsYoMhQTg%2B%2BnZ5REdKnHFeoBRPGidGBQzHy42wze7kYKM1uDfWK4mMMZWK6bqp6%2FZk89pTVzCNozTAw69evUPFSKB7%2B8pqKdP2KMY53FWXapjtQ9syRvZClKTv7iVtohwfaHwb1PsNqabdqCq%2FK%2BPZF7cEUGC5MfBksDr%2Bq9PgBoXcfIlyhO9AEk4zygNSnT2n%2FMyZ%2BbmCSKPkXN%2Fkayv9JPjgbF0ywSVDLaof7IBMJMryOzU%2FKkGiJiYOfeCZ7A6eJunz1v%2F6X9DqMLpdjPHpvdaFDrn90b9RxWIfylToxe8TzWQ%2Fi0D5g8K5xJ6tOf7CZwLj5jZdlUZzm77heNGK7P7K2FIq5XqdG1xNhmGIi4is3Az0yXiohyVIMOmj1cIGOqUBjS%2BF4hWL%2FoMNXF%2BlfiRRSKI%2BT8Ysmf5inASkvHiwJCD3uA51iFjf07pwYmcAhAywBwxIBc7AR0WBDpf8xXxOH2ngoqKWl3Jo0EWATlA%2FMCHfqvyAf9l7IV8vImrPCZxgoftd%2BIzH1K%2FpKif1rHEOtbeK1PfaOv5GzEAyra1s5fBZKpj4WrBvefPHR0orV4i8pIl0gKLHF7VznyXGHU7xkQKEdo%2Bx&X-Amz-Signature=6a775d1d8c9b43ab918c6476d6b0ede82035d9a3b3f22e0d2365008dc12b966f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DKZS6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg0Hj6%2BRbOuKVpVhtzRKA2sb%2FO0wGwJ%2FR7VWGJvtq5WAiEA6FjprGgjP6FkO%2Fzq3dyRZZYaUJ4IjTg%2B94G4al5pi38qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1yrBZZXp%2Fz6pN9LircA%2FG35t%2FYFPiNCcJUy4mnHzqjJ7bZq7hbhURrgC5whqheH4Ivoi%2BsK8Gpmr%2FRo5wattwLyPnRw9YsRl%2B2LqW5lVz34UJBxU1ZxGNzLrdncVWi9dv49Px%2FDTzV8Zp%2FMCrrhKjwKKeW2uVYCJympWi0obeRAWMj7lF6o3YFkdBYtz3DoVnTL2edWEUUX7LtHvWlk4%2FGH0%2Fhq01pznhOre2vaX4jECexBxzz7OBXpx0jj%2FYYV66ZTEmP6nzsuzdar1zKPSEsYoMhQTg%2B%2BnZ5REdKnHFeoBRPGidGBQzHy42wze7kYKM1uDfWK4mMMZWK6bqp6%2FZk89pTVzCNozTAw69evUPFSKB7%2B8pqKdP2KMY53FWXapjtQ9syRvZClKTv7iVtohwfaHwb1PsNqabdqCq%2FK%2BPZF7cEUGC5MfBksDr%2Bq9PgBoXcfIlyhO9AEk4zygNSnT2n%2FMyZ%2BbmCSKPkXN%2Fkayv9JPjgbF0ywSVDLaof7IBMJMryOzU%2FKkGiJiYOfeCZ7A6eJunz1v%2F6X9DqMLpdjPHpvdaFDrn90b9RxWIfylToxe8TzWQ%2Fi0D5g8K5xJ6tOf7CZwLj5jZdlUZzm77heNGK7P7K2FIq5XqdG1xNhmGIi4is3Az0yXiohyVIMOmj1cIGOqUBjS%2BF4hWL%2FoMNXF%2BlfiRRSKI%2BT8Ysmf5inASkvHiwJCD3uA51iFjf07pwYmcAhAywBwxIBc7AR0WBDpf8xXxOH2ngoqKWl3Jo0EWATlA%2FMCHfqvyAf9l7IV8vImrPCZxgoftd%2BIzH1K%2FpKif1rHEOtbeK1PfaOv5GzEAyra1s5fBZKpj4WrBvefPHR0orV4i8pIl0gKLHF7VznyXGHU7xkQKEdo%2Bx&X-Amz-Signature=f190076b37c429bb84ec71e460d10e276dc2ab7c7af7721ff87c18ed389c87ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
