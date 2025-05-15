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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GVVAKAU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDfTUwsmtM2x4EHzxwIfEmRyF8vbKKCsSQkhLcWcx1MkAiBRrwgy133zjHvJYRwjaikzvkALZpcsUfvVlVdUJL31eCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMIOkrwzK%2B3ekBBgb0KtwDd9SW3qnuOAiUUN%2BfBWhMC2cIyQdqJ0kDu7UZrCf6NWIzYcJW0yfcoeft0JAA7emlGh%2Fh0HoDUC0ROjrMgDsRET5wUHXiyuLPe7XjlkGdU93HoeL38PwLMQ6d5hxoUMNqOojHa79HeaZz6zTb8%2FEMVTeQGCz%2BGZqjYOSesI44py%2BYPZI%2FDmKAlnWNFriQirYxw3A9Lq4jtyVBKj%2FLjMbwwtZXKNMFR5FfzoWcl9pGAHkGQ0XmzA6q2mfnAVYdiWrIPRVuEydl%2B4Q5ck%2FoIUFmZQ%2BFLAjV%2FGaGpGLNZSIvMJDqtuwig98mM9n7cf%2FYWmEnzYPXLYBeYJ3LJiqnXcaNuzVyBckZCAqK9t7mA9aCCc80ytDrk9mNiife%2F9ZQuq9uBZQgaV8rx5Eh4MosElWcFlqv7h3TAb7wNGhDiTt%2BTXNmGMK%2FEpeEctQ4thQvb3%2F%2FtBX1KP3J7EARB0gkqOxVIMtWTHwRNZjtsU4fS3X%2FhfIBUq2RZE8HBax%2FEsKMkbZmlo0fRGOt4LhJbUKSfdxereU9pOJgShOsK4dhvZy74YuAz4a7rVMseqm%2BkRue4RzPuod2rGOIl6hMbYBqMII3ODmAqoQe43zoOnOIWVovSO2BEml2kiPQOQTTqCQw%2BJCYwQY6pgGncde2GDEU6qc4Qu%2Bjs6dF9wtoJIzfWSMLo6ox40br3upiAF0lMVOKfkKxxxVRECXB3O06vv6vopab4ox4kIgPTK6HC5vJHVdn2x%2BoAGk8oryM1wt70HinN1UwCgs8fgrw%2BhI6SyXppg9EB9LN5qARcLhQUbT%2FMQ5MxJmNIq7L%2BMmKQp2hlw1%2FYYwa3EJgef%2BZMsXxDhAUR%2FPSUdnNt0lDHvpywZt6&X-Amz-Signature=da406cda1ad6b72b2558112c8b563c9137ea61e1ec8944b3edd4024ddb98e25b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GVVAKAU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDfTUwsmtM2x4EHzxwIfEmRyF8vbKKCsSQkhLcWcx1MkAiBRrwgy133zjHvJYRwjaikzvkALZpcsUfvVlVdUJL31eCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMIOkrwzK%2B3ekBBgb0KtwDd9SW3qnuOAiUUN%2BfBWhMC2cIyQdqJ0kDu7UZrCf6NWIzYcJW0yfcoeft0JAA7emlGh%2Fh0HoDUC0ROjrMgDsRET5wUHXiyuLPe7XjlkGdU93HoeL38PwLMQ6d5hxoUMNqOojHa79HeaZz6zTb8%2FEMVTeQGCz%2BGZqjYOSesI44py%2BYPZI%2FDmKAlnWNFriQirYxw3A9Lq4jtyVBKj%2FLjMbwwtZXKNMFR5FfzoWcl9pGAHkGQ0XmzA6q2mfnAVYdiWrIPRVuEydl%2B4Q5ck%2FoIUFmZQ%2BFLAjV%2FGaGpGLNZSIvMJDqtuwig98mM9n7cf%2FYWmEnzYPXLYBeYJ3LJiqnXcaNuzVyBckZCAqK9t7mA9aCCc80ytDrk9mNiife%2F9ZQuq9uBZQgaV8rx5Eh4MosElWcFlqv7h3TAb7wNGhDiTt%2BTXNmGMK%2FEpeEctQ4thQvb3%2F%2FtBX1KP3J7EARB0gkqOxVIMtWTHwRNZjtsU4fS3X%2FhfIBUq2RZE8HBax%2FEsKMkbZmlo0fRGOt4LhJbUKSfdxereU9pOJgShOsK4dhvZy74YuAz4a7rVMseqm%2BkRue4RzPuod2rGOIl6hMbYBqMII3ODmAqoQe43zoOnOIWVovSO2BEml2kiPQOQTTqCQw%2BJCYwQY6pgGncde2GDEU6qc4Qu%2Bjs6dF9wtoJIzfWSMLo6ox40br3upiAF0lMVOKfkKxxxVRECXB3O06vv6vopab4ox4kIgPTK6HC5vJHVdn2x%2BoAGk8oryM1wt70HinN1UwCgs8fgrw%2BhI6SyXppg9EB9LN5qARcLhQUbT%2FMQ5MxJmNIq7L%2BMmKQp2hlw1%2FYYwa3EJgef%2BZMsXxDhAUR%2FPSUdnNt0lDHvpywZt6&X-Amz-Signature=ba11b4ac97662ed4db3d5af98582e8b833777be77e032f6e5173814040927804&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GVVAKAU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDfTUwsmtM2x4EHzxwIfEmRyF8vbKKCsSQkhLcWcx1MkAiBRrwgy133zjHvJYRwjaikzvkALZpcsUfvVlVdUJL31eCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMIOkrwzK%2B3ekBBgb0KtwDd9SW3qnuOAiUUN%2BfBWhMC2cIyQdqJ0kDu7UZrCf6NWIzYcJW0yfcoeft0JAA7emlGh%2Fh0HoDUC0ROjrMgDsRET5wUHXiyuLPe7XjlkGdU93HoeL38PwLMQ6d5hxoUMNqOojHa79HeaZz6zTb8%2FEMVTeQGCz%2BGZqjYOSesI44py%2BYPZI%2FDmKAlnWNFriQirYxw3A9Lq4jtyVBKj%2FLjMbwwtZXKNMFR5FfzoWcl9pGAHkGQ0XmzA6q2mfnAVYdiWrIPRVuEydl%2B4Q5ck%2FoIUFmZQ%2BFLAjV%2FGaGpGLNZSIvMJDqtuwig98mM9n7cf%2FYWmEnzYPXLYBeYJ3LJiqnXcaNuzVyBckZCAqK9t7mA9aCCc80ytDrk9mNiife%2F9ZQuq9uBZQgaV8rx5Eh4MosElWcFlqv7h3TAb7wNGhDiTt%2BTXNmGMK%2FEpeEctQ4thQvb3%2F%2FtBX1KP3J7EARB0gkqOxVIMtWTHwRNZjtsU4fS3X%2FhfIBUq2RZE8HBax%2FEsKMkbZmlo0fRGOt4LhJbUKSfdxereU9pOJgShOsK4dhvZy74YuAz4a7rVMseqm%2BkRue4RzPuod2rGOIl6hMbYBqMII3ODmAqoQe43zoOnOIWVovSO2BEml2kiPQOQTTqCQw%2BJCYwQY6pgGncde2GDEU6qc4Qu%2Bjs6dF9wtoJIzfWSMLo6ox40br3upiAF0lMVOKfkKxxxVRECXB3O06vv6vopab4ox4kIgPTK6HC5vJHVdn2x%2BoAGk8oryM1wt70HinN1UwCgs8fgrw%2BhI6SyXppg9EB9LN5qARcLhQUbT%2FMQ5MxJmNIq7L%2BMmKQp2hlw1%2FYYwa3EJgef%2BZMsXxDhAUR%2FPSUdnNt0lDHvpywZt6&X-Amz-Signature=6d80f01b8b6fa77fb890614a26acddb4e3eaeba17d397696105a96a854649a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GVVAKAU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDfTUwsmtM2x4EHzxwIfEmRyF8vbKKCsSQkhLcWcx1MkAiBRrwgy133zjHvJYRwjaikzvkALZpcsUfvVlVdUJL31eCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMIOkrwzK%2B3ekBBgb0KtwDd9SW3qnuOAiUUN%2BfBWhMC2cIyQdqJ0kDu7UZrCf6NWIzYcJW0yfcoeft0JAA7emlGh%2Fh0HoDUC0ROjrMgDsRET5wUHXiyuLPe7XjlkGdU93HoeL38PwLMQ6d5hxoUMNqOojHa79HeaZz6zTb8%2FEMVTeQGCz%2BGZqjYOSesI44py%2BYPZI%2FDmKAlnWNFriQirYxw3A9Lq4jtyVBKj%2FLjMbwwtZXKNMFR5FfzoWcl9pGAHkGQ0XmzA6q2mfnAVYdiWrIPRVuEydl%2B4Q5ck%2FoIUFmZQ%2BFLAjV%2FGaGpGLNZSIvMJDqtuwig98mM9n7cf%2FYWmEnzYPXLYBeYJ3LJiqnXcaNuzVyBckZCAqK9t7mA9aCCc80ytDrk9mNiife%2F9ZQuq9uBZQgaV8rx5Eh4MosElWcFlqv7h3TAb7wNGhDiTt%2BTXNmGMK%2FEpeEctQ4thQvb3%2F%2FtBX1KP3J7EARB0gkqOxVIMtWTHwRNZjtsU4fS3X%2FhfIBUq2RZE8HBax%2FEsKMkbZmlo0fRGOt4LhJbUKSfdxereU9pOJgShOsK4dhvZy74YuAz4a7rVMseqm%2BkRue4RzPuod2rGOIl6hMbYBqMII3ODmAqoQe43zoOnOIWVovSO2BEml2kiPQOQTTqCQw%2BJCYwQY6pgGncde2GDEU6qc4Qu%2Bjs6dF9wtoJIzfWSMLo6ox40br3upiAF0lMVOKfkKxxxVRECXB3O06vv6vopab4ox4kIgPTK6HC5vJHVdn2x%2BoAGk8oryM1wt70HinN1UwCgs8fgrw%2BhI6SyXppg9EB9LN5qARcLhQUbT%2FMQ5MxJmNIq7L%2BMmKQp2hlw1%2FYYwa3EJgef%2BZMsXxDhAUR%2FPSUdnNt0lDHvpywZt6&X-Amz-Signature=f6cf2f8df1a4ff1b7367822d7ef6161a056fa2df368eaad9ba93dd5335c55d39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GVVAKAU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDfTUwsmtM2x4EHzxwIfEmRyF8vbKKCsSQkhLcWcx1MkAiBRrwgy133zjHvJYRwjaikzvkALZpcsUfvVlVdUJL31eCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMIOkrwzK%2B3ekBBgb0KtwDd9SW3qnuOAiUUN%2BfBWhMC2cIyQdqJ0kDu7UZrCf6NWIzYcJW0yfcoeft0JAA7emlGh%2Fh0HoDUC0ROjrMgDsRET5wUHXiyuLPe7XjlkGdU93HoeL38PwLMQ6d5hxoUMNqOojHa79HeaZz6zTb8%2FEMVTeQGCz%2BGZqjYOSesI44py%2BYPZI%2FDmKAlnWNFriQirYxw3A9Lq4jtyVBKj%2FLjMbwwtZXKNMFR5FfzoWcl9pGAHkGQ0XmzA6q2mfnAVYdiWrIPRVuEydl%2B4Q5ck%2FoIUFmZQ%2BFLAjV%2FGaGpGLNZSIvMJDqtuwig98mM9n7cf%2FYWmEnzYPXLYBeYJ3LJiqnXcaNuzVyBckZCAqK9t7mA9aCCc80ytDrk9mNiife%2F9ZQuq9uBZQgaV8rx5Eh4MosElWcFlqv7h3TAb7wNGhDiTt%2BTXNmGMK%2FEpeEctQ4thQvb3%2F%2FtBX1KP3J7EARB0gkqOxVIMtWTHwRNZjtsU4fS3X%2FhfIBUq2RZE8HBax%2FEsKMkbZmlo0fRGOt4LhJbUKSfdxereU9pOJgShOsK4dhvZy74YuAz4a7rVMseqm%2BkRue4RzPuod2rGOIl6hMbYBqMII3ODmAqoQe43zoOnOIWVovSO2BEml2kiPQOQTTqCQw%2BJCYwQY6pgGncde2GDEU6qc4Qu%2Bjs6dF9wtoJIzfWSMLo6ox40br3upiAF0lMVOKfkKxxxVRECXB3O06vv6vopab4ox4kIgPTK6HC5vJHVdn2x%2BoAGk8oryM1wt70HinN1UwCgs8fgrw%2BhI6SyXppg9EB9LN5qARcLhQUbT%2FMQ5MxJmNIq7L%2BMmKQp2hlw1%2FYYwa3EJgef%2BZMsXxDhAUR%2FPSUdnNt0lDHvpywZt6&X-Amz-Signature=91b50b7383c6ca436da6b9dd5b4edb0814d1d235f454307901d9c33dd0abc87d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GVVAKAU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDfTUwsmtM2x4EHzxwIfEmRyF8vbKKCsSQkhLcWcx1MkAiBRrwgy133zjHvJYRwjaikzvkALZpcsUfvVlVdUJL31eCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMIOkrwzK%2B3ekBBgb0KtwDd9SW3qnuOAiUUN%2BfBWhMC2cIyQdqJ0kDu7UZrCf6NWIzYcJW0yfcoeft0JAA7emlGh%2Fh0HoDUC0ROjrMgDsRET5wUHXiyuLPe7XjlkGdU93HoeL38PwLMQ6d5hxoUMNqOojHa79HeaZz6zTb8%2FEMVTeQGCz%2BGZqjYOSesI44py%2BYPZI%2FDmKAlnWNFriQirYxw3A9Lq4jtyVBKj%2FLjMbwwtZXKNMFR5FfzoWcl9pGAHkGQ0XmzA6q2mfnAVYdiWrIPRVuEydl%2B4Q5ck%2FoIUFmZQ%2BFLAjV%2FGaGpGLNZSIvMJDqtuwig98mM9n7cf%2FYWmEnzYPXLYBeYJ3LJiqnXcaNuzVyBckZCAqK9t7mA9aCCc80ytDrk9mNiife%2F9ZQuq9uBZQgaV8rx5Eh4MosElWcFlqv7h3TAb7wNGhDiTt%2BTXNmGMK%2FEpeEctQ4thQvb3%2F%2FtBX1KP3J7EARB0gkqOxVIMtWTHwRNZjtsU4fS3X%2FhfIBUq2RZE8HBax%2FEsKMkbZmlo0fRGOt4LhJbUKSfdxereU9pOJgShOsK4dhvZy74YuAz4a7rVMseqm%2BkRue4RzPuod2rGOIl6hMbYBqMII3ODmAqoQe43zoOnOIWVovSO2BEml2kiPQOQTTqCQw%2BJCYwQY6pgGncde2GDEU6qc4Qu%2Bjs6dF9wtoJIzfWSMLo6ox40br3upiAF0lMVOKfkKxxxVRECXB3O06vv6vopab4ox4kIgPTK6HC5vJHVdn2x%2BoAGk8oryM1wt70HinN1UwCgs8fgrw%2BhI6SyXppg9EB9LN5qARcLhQUbT%2FMQ5MxJmNIq7L%2BMmKQp2hlw1%2FYYwa3EJgef%2BZMsXxDhAUR%2FPSUdnNt0lDHvpywZt6&X-Amz-Signature=8e0b15483d373c9e7357608ff73829995baeb833d3bb834b6d6cfa669b6980fc&X-Amz-SignedHeaders=host&x-id=GetObject)
