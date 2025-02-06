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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLKHVMO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCGT%2FYwetxpQhlq3aMi4XXZBtJRfCYItEVre0TX9Lbq2gIhAK4tV7W%2BnnxSyTd4J%2B2JpPDRdEnMHsacqjJJGNTUPu0EKv8DCGAQABoMNjM3NDIzMTgzODA1Igz0TvhBFWMJyb75%2B74q3AMr40Rewrh7SgL6AZaP9tp6SJ84u%2FRCvdiScZNNiEbP%2B%2FwxfdEt%2BcezgsNZCcO3%2B2Scnd0%2BEAsldbywc%2B3AcHSlvAg5dNe5p4wjlJ8HaXXsWu5sEVxuUMwJaMd4pRQo6bAW4Ey4khM4DlgZYUh2EK4CAwO1dTR6UsQBWNl9gfo9hQgDUV0P7%2Fsb2tkZtgdrnf1BqLCLjpLJDlU5uwriBKn8eXqhXc9H14a%2FdnCuK7qdatJOkpfWd8r8csW6tKsS3wI6RrqmxvJa7ZI5LnA1ohwGaHJcc6pSQ%2BLiYK6Lu26nBOsNgyIo8VmrpnneCB8cTQifHIvwEwtcLqhmAY964qSPdnT6QXazEMFGk3LYmndG9FVW%2BNKlREiAghW7bJZNFcF5%2Bjk2DFrbu5tP2zXqnJkGgWbFOUleT1y7oxVKjNro7nhBIrJt9hXFp7T3W%2Bv6n8Vkct8vuc63QsnsPFG8KFxGGNk22XpcGKG5QxtkmTvaqhc4omAYRrEuYhsvvzEBMr1aN4TPnsHoOdbmb2sIjCVnXE8P%2F0Fn6kshNXNQNz4IxzoK%2B9ENtpgMTAmzPoRP6ROhq9YPTj8J5c6im5tXvQacnoYXBZsKjNOh1Z4XOAjyP9rn8baZbI2IMVUv0TCUnZO9BjqkAX3J%2Bo8LCxE6GbJkfWONPUuKcVEUR0acnoE13W7EipbE41jhRXcokA12cJIMbkRT%2FNvAXb5e42AVUdtiZP91wlpnZj%2F2u0wOLrJrtbkOwaHClnZcgWKLeFPIGY4BMgXscVX25AdwAcZTRqEVV3iFhodvJYkZ3i6TqZJg5E02TBNQAPDg%2ForcdmxuGCxLWwxVMJ8c2vsvkPaGIjOsRXGzWmIs2e8g&X-Amz-Signature=4670cca0d37ca2f6d0bc709a043dc5c69f3cc290aff12a7257d3c2fe00ddadc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLKHVMO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCGT%2FYwetxpQhlq3aMi4XXZBtJRfCYItEVre0TX9Lbq2gIhAK4tV7W%2BnnxSyTd4J%2B2JpPDRdEnMHsacqjJJGNTUPu0EKv8DCGAQABoMNjM3NDIzMTgzODA1Igz0TvhBFWMJyb75%2B74q3AMr40Rewrh7SgL6AZaP9tp6SJ84u%2FRCvdiScZNNiEbP%2B%2FwxfdEt%2BcezgsNZCcO3%2B2Scnd0%2BEAsldbywc%2B3AcHSlvAg5dNe5p4wjlJ8HaXXsWu5sEVxuUMwJaMd4pRQo6bAW4Ey4khM4DlgZYUh2EK4CAwO1dTR6UsQBWNl9gfo9hQgDUV0P7%2Fsb2tkZtgdrnf1BqLCLjpLJDlU5uwriBKn8eXqhXc9H14a%2FdnCuK7qdatJOkpfWd8r8csW6tKsS3wI6RrqmxvJa7ZI5LnA1ohwGaHJcc6pSQ%2BLiYK6Lu26nBOsNgyIo8VmrpnneCB8cTQifHIvwEwtcLqhmAY964qSPdnT6QXazEMFGk3LYmndG9FVW%2BNKlREiAghW7bJZNFcF5%2Bjk2DFrbu5tP2zXqnJkGgWbFOUleT1y7oxVKjNro7nhBIrJt9hXFp7T3W%2Bv6n8Vkct8vuc63QsnsPFG8KFxGGNk22XpcGKG5QxtkmTvaqhc4omAYRrEuYhsvvzEBMr1aN4TPnsHoOdbmb2sIjCVnXE8P%2F0Fn6kshNXNQNz4IxzoK%2B9ENtpgMTAmzPoRP6ROhq9YPTj8J5c6im5tXvQacnoYXBZsKjNOh1Z4XOAjyP9rn8baZbI2IMVUv0TCUnZO9BjqkAX3J%2Bo8LCxE6GbJkfWONPUuKcVEUR0acnoE13W7EipbE41jhRXcokA12cJIMbkRT%2FNvAXb5e42AVUdtiZP91wlpnZj%2F2u0wOLrJrtbkOwaHClnZcgWKLeFPIGY4BMgXscVX25AdwAcZTRqEVV3iFhodvJYkZ3i6TqZJg5E02TBNQAPDg%2ForcdmxuGCxLWwxVMJ8c2vsvkPaGIjOsRXGzWmIs2e8g&X-Amz-Signature=b8ac29cc7c5ffd9f7d257810fb8f38639cb6b62e0541e597ea7334beff1bdeb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLKHVMO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCGT%2FYwetxpQhlq3aMi4XXZBtJRfCYItEVre0TX9Lbq2gIhAK4tV7W%2BnnxSyTd4J%2B2JpPDRdEnMHsacqjJJGNTUPu0EKv8DCGAQABoMNjM3NDIzMTgzODA1Igz0TvhBFWMJyb75%2B74q3AMr40Rewrh7SgL6AZaP9tp6SJ84u%2FRCvdiScZNNiEbP%2B%2FwxfdEt%2BcezgsNZCcO3%2B2Scnd0%2BEAsldbywc%2B3AcHSlvAg5dNe5p4wjlJ8HaXXsWu5sEVxuUMwJaMd4pRQo6bAW4Ey4khM4DlgZYUh2EK4CAwO1dTR6UsQBWNl9gfo9hQgDUV0P7%2Fsb2tkZtgdrnf1BqLCLjpLJDlU5uwriBKn8eXqhXc9H14a%2FdnCuK7qdatJOkpfWd8r8csW6tKsS3wI6RrqmxvJa7ZI5LnA1ohwGaHJcc6pSQ%2BLiYK6Lu26nBOsNgyIo8VmrpnneCB8cTQifHIvwEwtcLqhmAY964qSPdnT6QXazEMFGk3LYmndG9FVW%2BNKlREiAghW7bJZNFcF5%2Bjk2DFrbu5tP2zXqnJkGgWbFOUleT1y7oxVKjNro7nhBIrJt9hXFp7T3W%2Bv6n8Vkct8vuc63QsnsPFG8KFxGGNk22XpcGKG5QxtkmTvaqhc4omAYRrEuYhsvvzEBMr1aN4TPnsHoOdbmb2sIjCVnXE8P%2F0Fn6kshNXNQNz4IxzoK%2B9ENtpgMTAmzPoRP6ROhq9YPTj8J5c6im5tXvQacnoYXBZsKjNOh1Z4XOAjyP9rn8baZbI2IMVUv0TCUnZO9BjqkAX3J%2Bo8LCxE6GbJkfWONPUuKcVEUR0acnoE13W7EipbE41jhRXcokA12cJIMbkRT%2FNvAXb5e42AVUdtiZP91wlpnZj%2F2u0wOLrJrtbkOwaHClnZcgWKLeFPIGY4BMgXscVX25AdwAcZTRqEVV3iFhodvJYkZ3i6TqZJg5E02TBNQAPDg%2ForcdmxuGCxLWwxVMJ8c2vsvkPaGIjOsRXGzWmIs2e8g&X-Amz-Signature=2433a01f048f42a102ce11a3b0fdab8f352287b7c4c3326051b670714ca890d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLKHVMO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCGT%2FYwetxpQhlq3aMi4XXZBtJRfCYItEVre0TX9Lbq2gIhAK4tV7W%2BnnxSyTd4J%2B2JpPDRdEnMHsacqjJJGNTUPu0EKv8DCGAQABoMNjM3NDIzMTgzODA1Igz0TvhBFWMJyb75%2B74q3AMr40Rewrh7SgL6AZaP9tp6SJ84u%2FRCvdiScZNNiEbP%2B%2FwxfdEt%2BcezgsNZCcO3%2B2Scnd0%2BEAsldbywc%2B3AcHSlvAg5dNe5p4wjlJ8HaXXsWu5sEVxuUMwJaMd4pRQo6bAW4Ey4khM4DlgZYUh2EK4CAwO1dTR6UsQBWNl9gfo9hQgDUV0P7%2Fsb2tkZtgdrnf1BqLCLjpLJDlU5uwriBKn8eXqhXc9H14a%2FdnCuK7qdatJOkpfWd8r8csW6tKsS3wI6RrqmxvJa7ZI5LnA1ohwGaHJcc6pSQ%2BLiYK6Lu26nBOsNgyIo8VmrpnneCB8cTQifHIvwEwtcLqhmAY964qSPdnT6QXazEMFGk3LYmndG9FVW%2BNKlREiAghW7bJZNFcF5%2Bjk2DFrbu5tP2zXqnJkGgWbFOUleT1y7oxVKjNro7nhBIrJt9hXFp7T3W%2Bv6n8Vkct8vuc63QsnsPFG8KFxGGNk22XpcGKG5QxtkmTvaqhc4omAYRrEuYhsvvzEBMr1aN4TPnsHoOdbmb2sIjCVnXE8P%2F0Fn6kshNXNQNz4IxzoK%2B9ENtpgMTAmzPoRP6ROhq9YPTj8J5c6im5tXvQacnoYXBZsKjNOh1Z4XOAjyP9rn8baZbI2IMVUv0TCUnZO9BjqkAX3J%2Bo8LCxE6GbJkfWONPUuKcVEUR0acnoE13W7EipbE41jhRXcokA12cJIMbkRT%2FNvAXb5e42AVUdtiZP91wlpnZj%2F2u0wOLrJrtbkOwaHClnZcgWKLeFPIGY4BMgXscVX25AdwAcZTRqEVV3iFhodvJYkZ3i6TqZJg5E02TBNQAPDg%2ForcdmxuGCxLWwxVMJ8c2vsvkPaGIjOsRXGzWmIs2e8g&X-Amz-Signature=dfeec9e82309174ab077e53b3cc7c7eee236a16fd07dbde51baaa2d7a4632d04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLKHVMO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCGT%2FYwetxpQhlq3aMi4XXZBtJRfCYItEVre0TX9Lbq2gIhAK4tV7W%2BnnxSyTd4J%2B2JpPDRdEnMHsacqjJJGNTUPu0EKv8DCGAQABoMNjM3NDIzMTgzODA1Igz0TvhBFWMJyb75%2B74q3AMr40Rewrh7SgL6AZaP9tp6SJ84u%2FRCvdiScZNNiEbP%2B%2FwxfdEt%2BcezgsNZCcO3%2B2Scnd0%2BEAsldbywc%2B3AcHSlvAg5dNe5p4wjlJ8HaXXsWu5sEVxuUMwJaMd4pRQo6bAW4Ey4khM4DlgZYUh2EK4CAwO1dTR6UsQBWNl9gfo9hQgDUV0P7%2Fsb2tkZtgdrnf1BqLCLjpLJDlU5uwriBKn8eXqhXc9H14a%2FdnCuK7qdatJOkpfWd8r8csW6tKsS3wI6RrqmxvJa7ZI5LnA1ohwGaHJcc6pSQ%2BLiYK6Lu26nBOsNgyIo8VmrpnneCB8cTQifHIvwEwtcLqhmAY964qSPdnT6QXazEMFGk3LYmndG9FVW%2BNKlREiAghW7bJZNFcF5%2Bjk2DFrbu5tP2zXqnJkGgWbFOUleT1y7oxVKjNro7nhBIrJt9hXFp7T3W%2Bv6n8Vkct8vuc63QsnsPFG8KFxGGNk22XpcGKG5QxtkmTvaqhc4omAYRrEuYhsvvzEBMr1aN4TPnsHoOdbmb2sIjCVnXE8P%2F0Fn6kshNXNQNz4IxzoK%2B9ENtpgMTAmzPoRP6ROhq9YPTj8J5c6im5tXvQacnoYXBZsKjNOh1Z4XOAjyP9rn8baZbI2IMVUv0TCUnZO9BjqkAX3J%2Bo8LCxE6GbJkfWONPUuKcVEUR0acnoE13W7EipbE41jhRXcokA12cJIMbkRT%2FNvAXb5e42AVUdtiZP91wlpnZj%2F2u0wOLrJrtbkOwaHClnZcgWKLeFPIGY4BMgXscVX25AdwAcZTRqEVV3iFhodvJYkZ3i6TqZJg5E02TBNQAPDg%2ForcdmxuGCxLWwxVMJ8c2vsvkPaGIjOsRXGzWmIs2e8g&X-Amz-Signature=500d63e8a413a0ab85c028c8cf4d796d2e1a30630b166dc3a9cf1a42afee9066&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLKHVMO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCGT%2FYwetxpQhlq3aMi4XXZBtJRfCYItEVre0TX9Lbq2gIhAK4tV7W%2BnnxSyTd4J%2B2JpPDRdEnMHsacqjJJGNTUPu0EKv8DCGAQABoMNjM3NDIzMTgzODA1Igz0TvhBFWMJyb75%2B74q3AMr40Rewrh7SgL6AZaP9tp6SJ84u%2FRCvdiScZNNiEbP%2B%2FwxfdEt%2BcezgsNZCcO3%2B2Scnd0%2BEAsldbywc%2B3AcHSlvAg5dNe5p4wjlJ8HaXXsWu5sEVxuUMwJaMd4pRQo6bAW4Ey4khM4DlgZYUh2EK4CAwO1dTR6UsQBWNl9gfo9hQgDUV0P7%2Fsb2tkZtgdrnf1BqLCLjpLJDlU5uwriBKn8eXqhXc9H14a%2FdnCuK7qdatJOkpfWd8r8csW6tKsS3wI6RrqmxvJa7ZI5LnA1ohwGaHJcc6pSQ%2BLiYK6Lu26nBOsNgyIo8VmrpnneCB8cTQifHIvwEwtcLqhmAY964qSPdnT6QXazEMFGk3LYmndG9FVW%2BNKlREiAghW7bJZNFcF5%2Bjk2DFrbu5tP2zXqnJkGgWbFOUleT1y7oxVKjNro7nhBIrJt9hXFp7T3W%2Bv6n8Vkct8vuc63QsnsPFG8KFxGGNk22XpcGKG5QxtkmTvaqhc4omAYRrEuYhsvvzEBMr1aN4TPnsHoOdbmb2sIjCVnXE8P%2F0Fn6kshNXNQNz4IxzoK%2B9ENtpgMTAmzPoRP6ROhq9YPTj8J5c6im5tXvQacnoYXBZsKjNOh1Z4XOAjyP9rn8baZbI2IMVUv0TCUnZO9BjqkAX3J%2Bo8LCxE6GbJkfWONPUuKcVEUR0acnoE13W7EipbE41jhRXcokA12cJIMbkRT%2FNvAXb5e42AVUdtiZP91wlpnZj%2F2u0wOLrJrtbkOwaHClnZcgWKLeFPIGY4BMgXscVX25AdwAcZTRqEVV3iFhodvJYkZ3i6TqZJg5E02TBNQAPDg%2ForcdmxuGCxLWwxVMJ8c2vsvkPaGIjOsRXGzWmIs2e8g&X-Amz-Signature=9e725dadaa9721637da144039b9948388ef3a8d6cc2dfa29f9cd161fa8d730f5&X-Amz-SignedHeaders=host&x-id=GetObject)
