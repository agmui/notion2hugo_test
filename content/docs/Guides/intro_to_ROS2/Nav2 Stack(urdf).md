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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDX4OW7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEkamnongq1SI9bXayo%2BkI%2B4tYbjnpyWHJjoYN9XS8eAiEAypfy6MTo0rGji%2FGR9iSIQMd%2BfkX76LYdLfWpmBRCeK0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG46eUngvNhl%2BWG0WyrcA7%2BlFXmBlu0IEvXRKnRf%2FqXTEO3H0L9asZTmFb0kyzrJCeQMvsIjl3Y5HYqvxqt3qwdTXh3UBDGNa0yEdspugMLgNXmEH5sM%2FsytT3%2Fkrw7PqU4iUF7WHm8jRh6PIaCPelIoDooJydQGlUdJaFmaSgW7qO7vX%2F%2FaiJ7kN1A37MBEJJG8vFxk0q8%2Fx2cqnAFKDKC%2FXWaTLrv1PlX28LwFyDh%2B2jsGcJtTWhHrkmw%2BEaER0eksH8dJRTJum6a8CkBezJL0jRLP8sROf%2FLlEjE2Pn4qMF5nqFeT7B6SCpi%2BIBaLPQvvyMN1vx%2Fo7Ckqy%2Ff6jY02N76p3QRqwFJmlhGmxD83iYJeIYG0FjKfiUwhSrokRN%2FEvOKOMkFTPE%2BH2BFsvtXyw3XEcTCK7KlG2p1GAeUxzxiKOVTTGLZkAU7VpaLXsbfbcrFRTD%2Fc887xcuUfyTg8eQsssHlYbk%2BjTsCZcnHIc4pbXZVW3Qt8yI2MwCykZWjPz%2B8cpCoDCOVTLxYMxfVYXyPbWCHH9mqOczqkHabqTEcWkfpPsCwrHqxobWaNUCOxzKZ%2Bmx%2F%2FqEOW4jJdpm6sVuU8TCxF2O6KG95hRaa%2Fhm01WiAopBw5bYnKKxU0vJ%2FkLs%2Bk50%2Fi7DNxMLekjcMGOqUBLyNuUav7oWUJBpdQdyaEj%2FzoICMmDx2wmtcNHn8L565qFwqOwHQ4gm7XgJQ%2Bxb5y8ai9td%2BwFrIFfYHHvOhyvN15BbVlRkwS2vqqz59DdjXPsK66mLmnNA%2F9j%2FeCxFRaGAythTTrjZvyNAH2jrV6Us491jQlHWd6Qp%2FJGoMKluvDZKTzEhzOahPolNRvPeSK06nkvYOuornuaedzvGor8z6lTvbF&X-Amz-Signature=43076ad031322a63c3142f4ea69ab47e4f1ba57d6c5c6a38db4539c54ad4aa6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDX4OW7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEkamnongq1SI9bXayo%2BkI%2B4tYbjnpyWHJjoYN9XS8eAiEAypfy6MTo0rGji%2FGR9iSIQMd%2BfkX76LYdLfWpmBRCeK0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG46eUngvNhl%2BWG0WyrcA7%2BlFXmBlu0IEvXRKnRf%2FqXTEO3H0L9asZTmFb0kyzrJCeQMvsIjl3Y5HYqvxqt3qwdTXh3UBDGNa0yEdspugMLgNXmEH5sM%2FsytT3%2Fkrw7PqU4iUF7WHm8jRh6PIaCPelIoDooJydQGlUdJaFmaSgW7qO7vX%2F%2FaiJ7kN1A37MBEJJG8vFxk0q8%2Fx2cqnAFKDKC%2FXWaTLrv1PlX28LwFyDh%2B2jsGcJtTWhHrkmw%2BEaER0eksH8dJRTJum6a8CkBezJL0jRLP8sROf%2FLlEjE2Pn4qMF5nqFeT7B6SCpi%2BIBaLPQvvyMN1vx%2Fo7Ckqy%2Ff6jY02N76p3QRqwFJmlhGmxD83iYJeIYG0FjKfiUwhSrokRN%2FEvOKOMkFTPE%2BH2BFsvtXyw3XEcTCK7KlG2p1GAeUxzxiKOVTTGLZkAU7VpaLXsbfbcrFRTD%2Fc887xcuUfyTg8eQsssHlYbk%2BjTsCZcnHIc4pbXZVW3Qt8yI2MwCykZWjPz%2B8cpCoDCOVTLxYMxfVYXyPbWCHH9mqOczqkHabqTEcWkfpPsCwrHqxobWaNUCOxzKZ%2Bmx%2F%2FqEOW4jJdpm6sVuU8TCxF2O6KG95hRaa%2Fhm01WiAopBw5bYnKKxU0vJ%2FkLs%2Bk50%2Fi7DNxMLekjcMGOqUBLyNuUav7oWUJBpdQdyaEj%2FzoICMmDx2wmtcNHn8L565qFwqOwHQ4gm7XgJQ%2Bxb5y8ai9td%2BwFrIFfYHHvOhyvN15BbVlRkwS2vqqz59DdjXPsK66mLmnNA%2F9j%2FeCxFRaGAythTTrjZvyNAH2jrV6Us491jQlHWd6Qp%2FJGoMKluvDZKTzEhzOahPolNRvPeSK06nkvYOuornuaedzvGor8z6lTvbF&X-Amz-Signature=6038778e88286d3f02f7ed541a3d6c583a0a6b07643485417cfddbaba9b8a304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDX4OW7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEkamnongq1SI9bXayo%2BkI%2B4tYbjnpyWHJjoYN9XS8eAiEAypfy6MTo0rGji%2FGR9iSIQMd%2BfkX76LYdLfWpmBRCeK0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG46eUngvNhl%2BWG0WyrcA7%2BlFXmBlu0IEvXRKnRf%2FqXTEO3H0L9asZTmFb0kyzrJCeQMvsIjl3Y5HYqvxqt3qwdTXh3UBDGNa0yEdspugMLgNXmEH5sM%2FsytT3%2Fkrw7PqU4iUF7WHm8jRh6PIaCPelIoDooJydQGlUdJaFmaSgW7qO7vX%2F%2FaiJ7kN1A37MBEJJG8vFxk0q8%2Fx2cqnAFKDKC%2FXWaTLrv1PlX28LwFyDh%2B2jsGcJtTWhHrkmw%2BEaER0eksH8dJRTJum6a8CkBezJL0jRLP8sROf%2FLlEjE2Pn4qMF5nqFeT7B6SCpi%2BIBaLPQvvyMN1vx%2Fo7Ckqy%2Ff6jY02N76p3QRqwFJmlhGmxD83iYJeIYG0FjKfiUwhSrokRN%2FEvOKOMkFTPE%2BH2BFsvtXyw3XEcTCK7KlG2p1GAeUxzxiKOVTTGLZkAU7VpaLXsbfbcrFRTD%2Fc887xcuUfyTg8eQsssHlYbk%2BjTsCZcnHIc4pbXZVW3Qt8yI2MwCykZWjPz%2B8cpCoDCOVTLxYMxfVYXyPbWCHH9mqOczqkHabqTEcWkfpPsCwrHqxobWaNUCOxzKZ%2Bmx%2F%2FqEOW4jJdpm6sVuU8TCxF2O6KG95hRaa%2Fhm01WiAopBw5bYnKKxU0vJ%2FkLs%2Bk50%2Fi7DNxMLekjcMGOqUBLyNuUav7oWUJBpdQdyaEj%2FzoICMmDx2wmtcNHn8L565qFwqOwHQ4gm7XgJQ%2Bxb5y8ai9td%2BwFrIFfYHHvOhyvN15BbVlRkwS2vqqz59DdjXPsK66mLmnNA%2F9j%2FeCxFRaGAythTTrjZvyNAH2jrV6Us491jQlHWd6Qp%2FJGoMKluvDZKTzEhzOahPolNRvPeSK06nkvYOuornuaedzvGor8z6lTvbF&X-Amz-Signature=5f514e39a349009040bbc5e0d91ce49e3a16fba398b8fc9dc37cb8e491686601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDX4OW7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEkamnongq1SI9bXayo%2BkI%2B4tYbjnpyWHJjoYN9XS8eAiEAypfy6MTo0rGji%2FGR9iSIQMd%2BfkX76LYdLfWpmBRCeK0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG46eUngvNhl%2BWG0WyrcA7%2BlFXmBlu0IEvXRKnRf%2FqXTEO3H0L9asZTmFb0kyzrJCeQMvsIjl3Y5HYqvxqt3qwdTXh3UBDGNa0yEdspugMLgNXmEH5sM%2FsytT3%2Fkrw7PqU4iUF7WHm8jRh6PIaCPelIoDooJydQGlUdJaFmaSgW7qO7vX%2F%2FaiJ7kN1A37MBEJJG8vFxk0q8%2Fx2cqnAFKDKC%2FXWaTLrv1PlX28LwFyDh%2B2jsGcJtTWhHrkmw%2BEaER0eksH8dJRTJum6a8CkBezJL0jRLP8sROf%2FLlEjE2Pn4qMF5nqFeT7B6SCpi%2BIBaLPQvvyMN1vx%2Fo7Ckqy%2Ff6jY02N76p3QRqwFJmlhGmxD83iYJeIYG0FjKfiUwhSrokRN%2FEvOKOMkFTPE%2BH2BFsvtXyw3XEcTCK7KlG2p1GAeUxzxiKOVTTGLZkAU7VpaLXsbfbcrFRTD%2Fc887xcuUfyTg8eQsssHlYbk%2BjTsCZcnHIc4pbXZVW3Qt8yI2MwCykZWjPz%2B8cpCoDCOVTLxYMxfVYXyPbWCHH9mqOczqkHabqTEcWkfpPsCwrHqxobWaNUCOxzKZ%2Bmx%2F%2FqEOW4jJdpm6sVuU8TCxF2O6KG95hRaa%2Fhm01WiAopBw5bYnKKxU0vJ%2FkLs%2Bk50%2Fi7DNxMLekjcMGOqUBLyNuUav7oWUJBpdQdyaEj%2FzoICMmDx2wmtcNHn8L565qFwqOwHQ4gm7XgJQ%2Bxb5y8ai9td%2BwFrIFfYHHvOhyvN15BbVlRkwS2vqqz59DdjXPsK66mLmnNA%2F9j%2FeCxFRaGAythTTrjZvyNAH2jrV6Us491jQlHWd6Qp%2FJGoMKluvDZKTzEhzOahPolNRvPeSK06nkvYOuornuaedzvGor8z6lTvbF&X-Amz-Signature=1a14fef723745b10444a4ac4b9c0ef016eb50ab0da52fc1d78422ef844e2e742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDX4OW7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEkamnongq1SI9bXayo%2BkI%2B4tYbjnpyWHJjoYN9XS8eAiEAypfy6MTo0rGji%2FGR9iSIQMd%2BfkX76LYdLfWpmBRCeK0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG46eUngvNhl%2BWG0WyrcA7%2BlFXmBlu0IEvXRKnRf%2FqXTEO3H0L9asZTmFb0kyzrJCeQMvsIjl3Y5HYqvxqt3qwdTXh3UBDGNa0yEdspugMLgNXmEH5sM%2FsytT3%2Fkrw7PqU4iUF7WHm8jRh6PIaCPelIoDooJydQGlUdJaFmaSgW7qO7vX%2F%2FaiJ7kN1A37MBEJJG8vFxk0q8%2Fx2cqnAFKDKC%2FXWaTLrv1PlX28LwFyDh%2B2jsGcJtTWhHrkmw%2BEaER0eksH8dJRTJum6a8CkBezJL0jRLP8sROf%2FLlEjE2Pn4qMF5nqFeT7B6SCpi%2BIBaLPQvvyMN1vx%2Fo7Ckqy%2Ff6jY02N76p3QRqwFJmlhGmxD83iYJeIYG0FjKfiUwhSrokRN%2FEvOKOMkFTPE%2BH2BFsvtXyw3XEcTCK7KlG2p1GAeUxzxiKOVTTGLZkAU7VpaLXsbfbcrFRTD%2Fc887xcuUfyTg8eQsssHlYbk%2BjTsCZcnHIc4pbXZVW3Qt8yI2MwCykZWjPz%2B8cpCoDCOVTLxYMxfVYXyPbWCHH9mqOczqkHabqTEcWkfpPsCwrHqxobWaNUCOxzKZ%2Bmx%2F%2FqEOW4jJdpm6sVuU8TCxF2O6KG95hRaa%2Fhm01WiAopBw5bYnKKxU0vJ%2FkLs%2Bk50%2Fi7DNxMLekjcMGOqUBLyNuUav7oWUJBpdQdyaEj%2FzoICMmDx2wmtcNHn8L565qFwqOwHQ4gm7XgJQ%2Bxb5y8ai9td%2BwFrIFfYHHvOhyvN15BbVlRkwS2vqqz59DdjXPsK66mLmnNA%2F9j%2FeCxFRaGAythTTrjZvyNAH2jrV6Us491jQlHWd6Qp%2FJGoMKluvDZKTzEhzOahPolNRvPeSK06nkvYOuornuaedzvGor8z6lTvbF&X-Amz-Signature=04554364b8e236ed945f27b251e9eb5c63eda8c51208e369e0fdbd0748f2d01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDX4OW7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEkamnongq1SI9bXayo%2BkI%2B4tYbjnpyWHJjoYN9XS8eAiEAypfy6MTo0rGji%2FGR9iSIQMd%2BfkX76LYdLfWpmBRCeK0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG46eUngvNhl%2BWG0WyrcA7%2BlFXmBlu0IEvXRKnRf%2FqXTEO3H0L9asZTmFb0kyzrJCeQMvsIjl3Y5HYqvxqt3qwdTXh3UBDGNa0yEdspugMLgNXmEH5sM%2FsytT3%2Fkrw7PqU4iUF7WHm8jRh6PIaCPelIoDooJydQGlUdJaFmaSgW7qO7vX%2F%2FaiJ7kN1A37MBEJJG8vFxk0q8%2Fx2cqnAFKDKC%2FXWaTLrv1PlX28LwFyDh%2B2jsGcJtTWhHrkmw%2BEaER0eksH8dJRTJum6a8CkBezJL0jRLP8sROf%2FLlEjE2Pn4qMF5nqFeT7B6SCpi%2BIBaLPQvvyMN1vx%2Fo7Ckqy%2Ff6jY02N76p3QRqwFJmlhGmxD83iYJeIYG0FjKfiUwhSrokRN%2FEvOKOMkFTPE%2BH2BFsvtXyw3XEcTCK7KlG2p1GAeUxzxiKOVTTGLZkAU7VpaLXsbfbcrFRTD%2Fc887xcuUfyTg8eQsssHlYbk%2BjTsCZcnHIc4pbXZVW3Qt8yI2MwCykZWjPz%2B8cpCoDCOVTLxYMxfVYXyPbWCHH9mqOczqkHabqTEcWkfpPsCwrHqxobWaNUCOxzKZ%2Bmx%2F%2FqEOW4jJdpm6sVuU8TCxF2O6KG95hRaa%2Fhm01WiAopBw5bYnKKxU0vJ%2FkLs%2Bk50%2Fi7DNxMLekjcMGOqUBLyNuUav7oWUJBpdQdyaEj%2FzoICMmDx2wmtcNHn8L565qFwqOwHQ4gm7XgJQ%2Bxb5y8ai9td%2BwFrIFfYHHvOhyvN15BbVlRkwS2vqqz59DdjXPsK66mLmnNA%2F9j%2FeCxFRaGAythTTrjZvyNAH2jrV6Us491jQlHWd6Qp%2FJGoMKluvDZKTzEhzOahPolNRvPeSK06nkvYOuornuaedzvGor8z6lTvbF&X-Amz-Signature=39fe95fbd991d6b746a68185de3d0a6065b44563069cbb76a0e5412822efa692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
