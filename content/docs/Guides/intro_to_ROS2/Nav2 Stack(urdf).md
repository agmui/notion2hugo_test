---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRWDCKN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCLqxkii8qPPXU8XeycmlplHi%2B%2FeHdrb0UNZ6rFNA7QpAIgJB%2BmISLZlZMFkWyZSPWSiYFt6jzzDkeD%2BVwAHWBYhGMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1pWo0U25mPdL1%2BKCrcA5BaMRjXHFOEVNe089jpRXZqU57ZLp%2FKWiG1nL47ptAQ8EM%2BOcOjSuiupwQkyUUiO4cehCxAkTtQmW%2BaDgpsPOWOUQOMJXvzIHXbo5ZOMmF4aZcLHPUrcLh%2BDS0xY5wX0p4XQskjXArxVsWMWqOlGZmpJKyIPaoD%2F%2F9CBFnAdGzsPchc2bhtDa2b6rFfvoBAKIFNTqT1KjfQQMQBaSt8paCOiUsdm0aDFuMlUAiwIJbfmkMo3xRNMpvRq7bt5Ff9PZBr3ai4AnuxDhn5IjfAyDPw4efJw%2FIREWTblT3LQryul75mYpzA6rT2qTzjefDeSrBLVcuc8z5xR7JMYbdCS%2BTG6UEQeigy%2BnnGU%2BH0LqEoYBJxTyQ%2Fvyt73qZdh7KR5mCohT%2Bfq9I7dM3RXStn4S0cYcxdjAmrwlEcYug18aW0HkDXV6930Ruq9g0oBguFlvmYcvIflfyyJcFvcsvZonKld8rXxi5a1N3SDRKLW4wNd6UoaSSOV1F3%2BOEpylvG%2F%2Bnba%2F4M4jh6wMgmnTKhUV%2FKwK6cDIEmAY0m5V1uhAwGC3aOYYhPRMBhc6Kiod7OxTsscADNQxhvLLVE2uy45MnymThomOwZZlzV15%2F%2F6aJzNBFSrvRY8uWC16IRMM%2BF5rwGOqUB6SQ3z5RUwxbSibjZ2cE4dWiizCsM4GVqmhafKInE2rheaE0GIGgRyA8VlvvxmmoLveGeAOAKQaOXRj6I4BBw67AIw2N%2F4SLpsMygM7iGS8R5NHmWsnq6qn92Z0XvYSmbjqafv0xp6RCinm7AfpAExOprI7ktplSnHgWpyw%2BTI8w6%2FraNWR2FMx4R1o2ePdiIod99ZLfMjqXnOiELsAXHCgR4%2F9KM&X-Amz-Signature=382caf004e84bf605e54cb81645d857f6aba20f9dcdfd41cb62d241cf4086e48&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRWDCKN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCLqxkii8qPPXU8XeycmlplHi%2B%2FeHdrb0UNZ6rFNA7QpAIgJB%2BmISLZlZMFkWyZSPWSiYFt6jzzDkeD%2BVwAHWBYhGMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1pWo0U25mPdL1%2BKCrcA5BaMRjXHFOEVNe089jpRXZqU57ZLp%2FKWiG1nL47ptAQ8EM%2BOcOjSuiupwQkyUUiO4cehCxAkTtQmW%2BaDgpsPOWOUQOMJXvzIHXbo5ZOMmF4aZcLHPUrcLh%2BDS0xY5wX0p4XQskjXArxVsWMWqOlGZmpJKyIPaoD%2F%2F9CBFnAdGzsPchc2bhtDa2b6rFfvoBAKIFNTqT1KjfQQMQBaSt8paCOiUsdm0aDFuMlUAiwIJbfmkMo3xRNMpvRq7bt5Ff9PZBr3ai4AnuxDhn5IjfAyDPw4efJw%2FIREWTblT3LQryul75mYpzA6rT2qTzjefDeSrBLVcuc8z5xR7JMYbdCS%2BTG6UEQeigy%2BnnGU%2BH0LqEoYBJxTyQ%2Fvyt73qZdh7KR5mCohT%2Bfq9I7dM3RXStn4S0cYcxdjAmrwlEcYug18aW0HkDXV6930Ruq9g0oBguFlvmYcvIflfyyJcFvcsvZonKld8rXxi5a1N3SDRKLW4wNd6UoaSSOV1F3%2BOEpylvG%2F%2Bnba%2F4M4jh6wMgmnTKhUV%2FKwK6cDIEmAY0m5V1uhAwGC3aOYYhPRMBhc6Kiod7OxTsscADNQxhvLLVE2uy45MnymThomOwZZlzV15%2F%2F6aJzNBFSrvRY8uWC16IRMM%2BF5rwGOqUB6SQ3z5RUwxbSibjZ2cE4dWiizCsM4GVqmhafKInE2rheaE0GIGgRyA8VlvvxmmoLveGeAOAKQaOXRj6I4BBw67AIw2N%2F4SLpsMygM7iGS8R5NHmWsnq6qn92Z0XvYSmbjqafv0xp6RCinm7AfpAExOprI7ktplSnHgWpyw%2BTI8w6%2FraNWR2FMx4R1o2ePdiIod99ZLfMjqXnOiELsAXHCgR4%2F9KM&X-Amz-Signature=84790d4a833f86d30fa2a1ea68086b88457f90a63309124d9ba44cb9100b117c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRWDCKN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCLqxkii8qPPXU8XeycmlplHi%2B%2FeHdrb0UNZ6rFNA7QpAIgJB%2BmISLZlZMFkWyZSPWSiYFt6jzzDkeD%2BVwAHWBYhGMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1pWo0U25mPdL1%2BKCrcA5BaMRjXHFOEVNe089jpRXZqU57ZLp%2FKWiG1nL47ptAQ8EM%2BOcOjSuiupwQkyUUiO4cehCxAkTtQmW%2BaDgpsPOWOUQOMJXvzIHXbo5ZOMmF4aZcLHPUrcLh%2BDS0xY5wX0p4XQskjXArxVsWMWqOlGZmpJKyIPaoD%2F%2F9CBFnAdGzsPchc2bhtDa2b6rFfvoBAKIFNTqT1KjfQQMQBaSt8paCOiUsdm0aDFuMlUAiwIJbfmkMo3xRNMpvRq7bt5Ff9PZBr3ai4AnuxDhn5IjfAyDPw4efJw%2FIREWTblT3LQryul75mYpzA6rT2qTzjefDeSrBLVcuc8z5xR7JMYbdCS%2BTG6UEQeigy%2BnnGU%2BH0LqEoYBJxTyQ%2Fvyt73qZdh7KR5mCohT%2Bfq9I7dM3RXStn4S0cYcxdjAmrwlEcYug18aW0HkDXV6930Ruq9g0oBguFlvmYcvIflfyyJcFvcsvZonKld8rXxi5a1N3SDRKLW4wNd6UoaSSOV1F3%2BOEpylvG%2F%2Bnba%2F4M4jh6wMgmnTKhUV%2FKwK6cDIEmAY0m5V1uhAwGC3aOYYhPRMBhc6Kiod7OxTsscADNQxhvLLVE2uy45MnymThomOwZZlzV15%2F%2F6aJzNBFSrvRY8uWC16IRMM%2BF5rwGOqUB6SQ3z5RUwxbSibjZ2cE4dWiizCsM4GVqmhafKInE2rheaE0GIGgRyA8VlvvxmmoLveGeAOAKQaOXRj6I4BBw67AIw2N%2F4SLpsMygM7iGS8R5NHmWsnq6qn92Z0XvYSmbjqafv0xp6RCinm7AfpAExOprI7ktplSnHgWpyw%2BTI8w6%2FraNWR2FMx4R1o2ePdiIod99ZLfMjqXnOiELsAXHCgR4%2F9KM&X-Amz-Signature=be5e7f2bd594c679e8332201b48cec89118220b73f568f591e00f5655dde7290&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRWDCKN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCLqxkii8qPPXU8XeycmlplHi%2B%2FeHdrb0UNZ6rFNA7QpAIgJB%2BmISLZlZMFkWyZSPWSiYFt6jzzDkeD%2BVwAHWBYhGMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1pWo0U25mPdL1%2BKCrcA5BaMRjXHFOEVNe089jpRXZqU57ZLp%2FKWiG1nL47ptAQ8EM%2BOcOjSuiupwQkyUUiO4cehCxAkTtQmW%2BaDgpsPOWOUQOMJXvzIHXbo5ZOMmF4aZcLHPUrcLh%2BDS0xY5wX0p4XQskjXArxVsWMWqOlGZmpJKyIPaoD%2F%2F9CBFnAdGzsPchc2bhtDa2b6rFfvoBAKIFNTqT1KjfQQMQBaSt8paCOiUsdm0aDFuMlUAiwIJbfmkMo3xRNMpvRq7bt5Ff9PZBr3ai4AnuxDhn5IjfAyDPw4efJw%2FIREWTblT3LQryul75mYpzA6rT2qTzjefDeSrBLVcuc8z5xR7JMYbdCS%2BTG6UEQeigy%2BnnGU%2BH0LqEoYBJxTyQ%2Fvyt73qZdh7KR5mCohT%2Bfq9I7dM3RXStn4S0cYcxdjAmrwlEcYug18aW0HkDXV6930Ruq9g0oBguFlvmYcvIflfyyJcFvcsvZonKld8rXxi5a1N3SDRKLW4wNd6UoaSSOV1F3%2BOEpylvG%2F%2Bnba%2F4M4jh6wMgmnTKhUV%2FKwK6cDIEmAY0m5V1uhAwGC3aOYYhPRMBhc6Kiod7OxTsscADNQxhvLLVE2uy45MnymThomOwZZlzV15%2F%2F6aJzNBFSrvRY8uWC16IRMM%2BF5rwGOqUB6SQ3z5RUwxbSibjZ2cE4dWiizCsM4GVqmhafKInE2rheaE0GIGgRyA8VlvvxmmoLveGeAOAKQaOXRj6I4BBw67AIw2N%2F4SLpsMygM7iGS8R5NHmWsnq6qn92Z0XvYSmbjqafv0xp6RCinm7AfpAExOprI7ktplSnHgWpyw%2BTI8w6%2FraNWR2FMx4R1o2ePdiIod99ZLfMjqXnOiELsAXHCgR4%2F9KM&X-Amz-Signature=729a3a593d4bcb6af13ad20cd958a5b8ed0f69761a27551cddeaa66cbf6765e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRWDCKN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCLqxkii8qPPXU8XeycmlplHi%2B%2FeHdrb0UNZ6rFNA7QpAIgJB%2BmISLZlZMFkWyZSPWSiYFt6jzzDkeD%2BVwAHWBYhGMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1pWo0U25mPdL1%2BKCrcA5BaMRjXHFOEVNe089jpRXZqU57ZLp%2FKWiG1nL47ptAQ8EM%2BOcOjSuiupwQkyUUiO4cehCxAkTtQmW%2BaDgpsPOWOUQOMJXvzIHXbo5ZOMmF4aZcLHPUrcLh%2BDS0xY5wX0p4XQskjXArxVsWMWqOlGZmpJKyIPaoD%2F%2F9CBFnAdGzsPchc2bhtDa2b6rFfvoBAKIFNTqT1KjfQQMQBaSt8paCOiUsdm0aDFuMlUAiwIJbfmkMo3xRNMpvRq7bt5Ff9PZBr3ai4AnuxDhn5IjfAyDPw4efJw%2FIREWTblT3LQryul75mYpzA6rT2qTzjefDeSrBLVcuc8z5xR7JMYbdCS%2BTG6UEQeigy%2BnnGU%2BH0LqEoYBJxTyQ%2Fvyt73qZdh7KR5mCohT%2Bfq9I7dM3RXStn4S0cYcxdjAmrwlEcYug18aW0HkDXV6930Ruq9g0oBguFlvmYcvIflfyyJcFvcsvZonKld8rXxi5a1N3SDRKLW4wNd6UoaSSOV1F3%2BOEpylvG%2F%2Bnba%2F4M4jh6wMgmnTKhUV%2FKwK6cDIEmAY0m5V1uhAwGC3aOYYhPRMBhc6Kiod7OxTsscADNQxhvLLVE2uy45MnymThomOwZZlzV15%2F%2F6aJzNBFSrvRY8uWC16IRMM%2BF5rwGOqUB6SQ3z5RUwxbSibjZ2cE4dWiizCsM4GVqmhafKInE2rheaE0GIGgRyA8VlvvxmmoLveGeAOAKQaOXRj6I4BBw67AIw2N%2F4SLpsMygM7iGS8R5NHmWsnq6qn92Z0XvYSmbjqafv0xp6RCinm7AfpAExOprI7ktplSnHgWpyw%2BTI8w6%2FraNWR2FMx4R1o2ePdiIod99ZLfMjqXnOiELsAXHCgR4%2F9KM&X-Amz-Signature=ad0c03b1be04053c756fde8b983af5f1b0f5d4c7e796b99379c5932da5283aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRWDCKN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCLqxkii8qPPXU8XeycmlplHi%2B%2FeHdrb0UNZ6rFNA7QpAIgJB%2BmISLZlZMFkWyZSPWSiYFt6jzzDkeD%2BVwAHWBYhGMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1pWo0U25mPdL1%2BKCrcA5BaMRjXHFOEVNe089jpRXZqU57ZLp%2FKWiG1nL47ptAQ8EM%2BOcOjSuiupwQkyUUiO4cehCxAkTtQmW%2BaDgpsPOWOUQOMJXvzIHXbo5ZOMmF4aZcLHPUrcLh%2BDS0xY5wX0p4XQskjXArxVsWMWqOlGZmpJKyIPaoD%2F%2F9CBFnAdGzsPchc2bhtDa2b6rFfvoBAKIFNTqT1KjfQQMQBaSt8paCOiUsdm0aDFuMlUAiwIJbfmkMo3xRNMpvRq7bt5Ff9PZBr3ai4AnuxDhn5IjfAyDPw4efJw%2FIREWTblT3LQryul75mYpzA6rT2qTzjefDeSrBLVcuc8z5xR7JMYbdCS%2BTG6UEQeigy%2BnnGU%2BH0LqEoYBJxTyQ%2Fvyt73qZdh7KR5mCohT%2Bfq9I7dM3RXStn4S0cYcxdjAmrwlEcYug18aW0HkDXV6930Ruq9g0oBguFlvmYcvIflfyyJcFvcsvZonKld8rXxi5a1N3SDRKLW4wNd6UoaSSOV1F3%2BOEpylvG%2F%2Bnba%2F4M4jh6wMgmnTKhUV%2FKwK6cDIEmAY0m5V1uhAwGC3aOYYhPRMBhc6Kiod7OxTsscADNQxhvLLVE2uy45MnymThomOwZZlzV15%2F%2F6aJzNBFSrvRY8uWC16IRMM%2BF5rwGOqUB6SQ3z5RUwxbSibjZ2cE4dWiizCsM4GVqmhafKInE2rheaE0GIGgRyA8VlvvxmmoLveGeAOAKQaOXRj6I4BBw67AIw2N%2F4SLpsMygM7iGS8R5NHmWsnq6qn92Z0XvYSmbjqafv0xp6RCinm7AfpAExOprI7ktplSnHgWpyw%2BTI8w6%2FraNWR2FMx4R1o2ePdiIod99ZLfMjqXnOiELsAXHCgR4%2F9KM&X-Amz-Signature=32b9ae6faefd71b783a9ee276a94d1bc200a79ffd6c1a151a382b475c635dbab&X-Amz-SignedHeaders=host&x-id=GetObject)
