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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24NWJI2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDy1bmd5T%2Bi8acXmdsNhUrIs7uuA4f86rIauqbMJHezJwIgMU6n9R9j5eDV4uhxTsy%2F1xNMVUYTEmgnEfeKjoGxww0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDCoSBZusIR74Sr27PircA3YAeyLAu6RahEDwsaYjUFybonSBvkcCMmwfbnOCg6O1v%2B3mgDdBj%2B958aa5hFiryVPE09yFM5qAXbNQCkkkOZ6D7bCGZ2uueoJYDWSPXRQ%2F6lO9A366RtNnH8%2BFHqlIcLBFb2NFf3Fo42%2Fbqolbvs7OdhNz1dCrDWgJUJox2aBVUPGiijyie7GHw%2FqtQRLgZjZwp5L93KC%2FX5il2OYKb29riuOY4hrRJjL18pKlAdndvlqvBx60Tc1qqQfeoyOlxfcGdgcv4YREUstMgLdpntsGMA3VNF4YMJPY%2B5W9ehyNMAY9WWX4257dfpe%2FAvP7UCJEsgMXaOXUwWL8FJdAZnBhTLPjvutmlYhD8Yg34rLpXZlTd20Bz8yydNDFSkHkWEAz4kYaXHtlo4v1w7R0Y7%2BjZFcLRmOkRQnoFMH60R2YozFfBq8BuqomH17ieExwpVjxRhluXqwsr8yYAH5kT8ab3qjz2aft7gBzvhTJYTlUsNQD7F25WrYV6ogjgJnWLGVr8ctOlCeBqdU8ESh3XYv62qlfBsgoTQFa4KRBVWJ3n8L%2B0g2GeMIFj%2Bdb96RIrMXowG0gyAQqZ3QwwWTPKOfo17JNx0tydLGiyUnYveVyl%2Fr1GoHd%2Bur1MTofMKqu3MMGOqUBsWcXb16l2cS1N79ac1ZZCEKOWyHu6XCAqCcUON64cvanpqCYJWl%2FBQpUMVVVgzCjZ0oXR44GEmUYYGIvAjfSVxIHbBpxa%2BBnOmY8UxDGlV5WHJnrKNH70X5SLH8ZGeOkYoZ3iGv7q%2B1upEYyn9w%2FIZ2XAA53qBXQo2IFNDGQChQJpE2ZqzgH8tc1dcvyajsMOg0vOvfHkS4%2Fvn%2Fn7CVLBoA56uFs&X-Amz-Signature=28eb24e9bb3bf35dc58fdb2f573e0026bec88d204ca3ed9f2759f7d6c85ea95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24NWJI2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDy1bmd5T%2Bi8acXmdsNhUrIs7uuA4f86rIauqbMJHezJwIgMU6n9R9j5eDV4uhxTsy%2F1xNMVUYTEmgnEfeKjoGxww0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDCoSBZusIR74Sr27PircA3YAeyLAu6RahEDwsaYjUFybonSBvkcCMmwfbnOCg6O1v%2B3mgDdBj%2B958aa5hFiryVPE09yFM5qAXbNQCkkkOZ6D7bCGZ2uueoJYDWSPXRQ%2F6lO9A366RtNnH8%2BFHqlIcLBFb2NFf3Fo42%2Fbqolbvs7OdhNz1dCrDWgJUJox2aBVUPGiijyie7GHw%2FqtQRLgZjZwp5L93KC%2FX5il2OYKb29riuOY4hrRJjL18pKlAdndvlqvBx60Tc1qqQfeoyOlxfcGdgcv4YREUstMgLdpntsGMA3VNF4YMJPY%2B5W9ehyNMAY9WWX4257dfpe%2FAvP7UCJEsgMXaOXUwWL8FJdAZnBhTLPjvutmlYhD8Yg34rLpXZlTd20Bz8yydNDFSkHkWEAz4kYaXHtlo4v1w7R0Y7%2BjZFcLRmOkRQnoFMH60R2YozFfBq8BuqomH17ieExwpVjxRhluXqwsr8yYAH5kT8ab3qjz2aft7gBzvhTJYTlUsNQD7F25WrYV6ogjgJnWLGVr8ctOlCeBqdU8ESh3XYv62qlfBsgoTQFa4KRBVWJ3n8L%2B0g2GeMIFj%2Bdb96RIrMXowG0gyAQqZ3QwwWTPKOfo17JNx0tydLGiyUnYveVyl%2Fr1GoHd%2Bur1MTofMKqu3MMGOqUBsWcXb16l2cS1N79ac1ZZCEKOWyHu6XCAqCcUON64cvanpqCYJWl%2FBQpUMVVVgzCjZ0oXR44GEmUYYGIvAjfSVxIHbBpxa%2BBnOmY8UxDGlV5WHJnrKNH70X5SLH8ZGeOkYoZ3iGv7q%2B1upEYyn9w%2FIZ2XAA53qBXQo2IFNDGQChQJpE2ZqzgH8tc1dcvyajsMOg0vOvfHkS4%2Fvn%2Fn7CVLBoA56uFs&X-Amz-Signature=dfe229b92e050439524a8b7bb307055c0775e2314096548d915e8e6cf0dc42ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24NWJI2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDy1bmd5T%2Bi8acXmdsNhUrIs7uuA4f86rIauqbMJHezJwIgMU6n9R9j5eDV4uhxTsy%2F1xNMVUYTEmgnEfeKjoGxww0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDCoSBZusIR74Sr27PircA3YAeyLAu6RahEDwsaYjUFybonSBvkcCMmwfbnOCg6O1v%2B3mgDdBj%2B958aa5hFiryVPE09yFM5qAXbNQCkkkOZ6D7bCGZ2uueoJYDWSPXRQ%2F6lO9A366RtNnH8%2BFHqlIcLBFb2NFf3Fo42%2Fbqolbvs7OdhNz1dCrDWgJUJox2aBVUPGiijyie7GHw%2FqtQRLgZjZwp5L93KC%2FX5il2OYKb29riuOY4hrRJjL18pKlAdndvlqvBx60Tc1qqQfeoyOlxfcGdgcv4YREUstMgLdpntsGMA3VNF4YMJPY%2B5W9ehyNMAY9WWX4257dfpe%2FAvP7UCJEsgMXaOXUwWL8FJdAZnBhTLPjvutmlYhD8Yg34rLpXZlTd20Bz8yydNDFSkHkWEAz4kYaXHtlo4v1w7R0Y7%2BjZFcLRmOkRQnoFMH60R2YozFfBq8BuqomH17ieExwpVjxRhluXqwsr8yYAH5kT8ab3qjz2aft7gBzvhTJYTlUsNQD7F25WrYV6ogjgJnWLGVr8ctOlCeBqdU8ESh3XYv62qlfBsgoTQFa4KRBVWJ3n8L%2B0g2GeMIFj%2Bdb96RIrMXowG0gyAQqZ3QwwWTPKOfo17JNx0tydLGiyUnYveVyl%2Fr1GoHd%2Bur1MTofMKqu3MMGOqUBsWcXb16l2cS1N79ac1ZZCEKOWyHu6XCAqCcUON64cvanpqCYJWl%2FBQpUMVVVgzCjZ0oXR44GEmUYYGIvAjfSVxIHbBpxa%2BBnOmY8UxDGlV5WHJnrKNH70X5SLH8ZGeOkYoZ3iGv7q%2B1upEYyn9w%2FIZ2XAA53qBXQo2IFNDGQChQJpE2ZqzgH8tc1dcvyajsMOg0vOvfHkS4%2Fvn%2Fn7CVLBoA56uFs&X-Amz-Signature=c6725da1c8e782e45d1215b9837e071435c6e84fd3cb30ef5b74703e49df992f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24NWJI2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDy1bmd5T%2Bi8acXmdsNhUrIs7uuA4f86rIauqbMJHezJwIgMU6n9R9j5eDV4uhxTsy%2F1xNMVUYTEmgnEfeKjoGxww0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDCoSBZusIR74Sr27PircA3YAeyLAu6RahEDwsaYjUFybonSBvkcCMmwfbnOCg6O1v%2B3mgDdBj%2B958aa5hFiryVPE09yFM5qAXbNQCkkkOZ6D7bCGZ2uueoJYDWSPXRQ%2F6lO9A366RtNnH8%2BFHqlIcLBFb2NFf3Fo42%2Fbqolbvs7OdhNz1dCrDWgJUJox2aBVUPGiijyie7GHw%2FqtQRLgZjZwp5L93KC%2FX5il2OYKb29riuOY4hrRJjL18pKlAdndvlqvBx60Tc1qqQfeoyOlxfcGdgcv4YREUstMgLdpntsGMA3VNF4YMJPY%2B5W9ehyNMAY9WWX4257dfpe%2FAvP7UCJEsgMXaOXUwWL8FJdAZnBhTLPjvutmlYhD8Yg34rLpXZlTd20Bz8yydNDFSkHkWEAz4kYaXHtlo4v1w7R0Y7%2BjZFcLRmOkRQnoFMH60R2YozFfBq8BuqomH17ieExwpVjxRhluXqwsr8yYAH5kT8ab3qjz2aft7gBzvhTJYTlUsNQD7F25WrYV6ogjgJnWLGVr8ctOlCeBqdU8ESh3XYv62qlfBsgoTQFa4KRBVWJ3n8L%2B0g2GeMIFj%2Bdb96RIrMXowG0gyAQqZ3QwwWTPKOfo17JNx0tydLGiyUnYveVyl%2Fr1GoHd%2Bur1MTofMKqu3MMGOqUBsWcXb16l2cS1N79ac1ZZCEKOWyHu6XCAqCcUON64cvanpqCYJWl%2FBQpUMVVVgzCjZ0oXR44GEmUYYGIvAjfSVxIHbBpxa%2BBnOmY8UxDGlV5WHJnrKNH70X5SLH8ZGeOkYoZ3iGv7q%2B1upEYyn9w%2FIZ2XAA53qBXQo2IFNDGQChQJpE2ZqzgH8tc1dcvyajsMOg0vOvfHkS4%2Fvn%2Fn7CVLBoA56uFs&X-Amz-Signature=9fafc5f52721562736dee013e60090c7b4747958f8e1159cfb0b57dfe66c9713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24NWJI2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDy1bmd5T%2Bi8acXmdsNhUrIs7uuA4f86rIauqbMJHezJwIgMU6n9R9j5eDV4uhxTsy%2F1xNMVUYTEmgnEfeKjoGxww0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDCoSBZusIR74Sr27PircA3YAeyLAu6RahEDwsaYjUFybonSBvkcCMmwfbnOCg6O1v%2B3mgDdBj%2B958aa5hFiryVPE09yFM5qAXbNQCkkkOZ6D7bCGZ2uueoJYDWSPXRQ%2F6lO9A366RtNnH8%2BFHqlIcLBFb2NFf3Fo42%2Fbqolbvs7OdhNz1dCrDWgJUJox2aBVUPGiijyie7GHw%2FqtQRLgZjZwp5L93KC%2FX5il2OYKb29riuOY4hrRJjL18pKlAdndvlqvBx60Tc1qqQfeoyOlxfcGdgcv4YREUstMgLdpntsGMA3VNF4YMJPY%2B5W9ehyNMAY9WWX4257dfpe%2FAvP7UCJEsgMXaOXUwWL8FJdAZnBhTLPjvutmlYhD8Yg34rLpXZlTd20Bz8yydNDFSkHkWEAz4kYaXHtlo4v1w7R0Y7%2BjZFcLRmOkRQnoFMH60R2YozFfBq8BuqomH17ieExwpVjxRhluXqwsr8yYAH5kT8ab3qjz2aft7gBzvhTJYTlUsNQD7F25WrYV6ogjgJnWLGVr8ctOlCeBqdU8ESh3XYv62qlfBsgoTQFa4KRBVWJ3n8L%2B0g2GeMIFj%2Bdb96RIrMXowG0gyAQqZ3QwwWTPKOfo17JNx0tydLGiyUnYveVyl%2Fr1GoHd%2Bur1MTofMKqu3MMGOqUBsWcXb16l2cS1N79ac1ZZCEKOWyHu6XCAqCcUON64cvanpqCYJWl%2FBQpUMVVVgzCjZ0oXR44GEmUYYGIvAjfSVxIHbBpxa%2BBnOmY8UxDGlV5WHJnrKNH70X5SLH8ZGeOkYoZ3iGv7q%2B1upEYyn9w%2FIZ2XAA53qBXQo2IFNDGQChQJpE2ZqzgH8tc1dcvyajsMOg0vOvfHkS4%2Fvn%2Fn7CVLBoA56uFs&X-Amz-Signature=843d195c06268bedda6c71c414f12599207135742aa8cbf4f8c118abf6c4fe43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24NWJI2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDy1bmd5T%2Bi8acXmdsNhUrIs7uuA4f86rIauqbMJHezJwIgMU6n9R9j5eDV4uhxTsy%2F1xNMVUYTEmgnEfeKjoGxww0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDCoSBZusIR74Sr27PircA3YAeyLAu6RahEDwsaYjUFybonSBvkcCMmwfbnOCg6O1v%2B3mgDdBj%2B958aa5hFiryVPE09yFM5qAXbNQCkkkOZ6D7bCGZ2uueoJYDWSPXRQ%2F6lO9A366RtNnH8%2BFHqlIcLBFb2NFf3Fo42%2Fbqolbvs7OdhNz1dCrDWgJUJox2aBVUPGiijyie7GHw%2FqtQRLgZjZwp5L93KC%2FX5il2OYKb29riuOY4hrRJjL18pKlAdndvlqvBx60Tc1qqQfeoyOlxfcGdgcv4YREUstMgLdpntsGMA3VNF4YMJPY%2B5W9ehyNMAY9WWX4257dfpe%2FAvP7UCJEsgMXaOXUwWL8FJdAZnBhTLPjvutmlYhD8Yg34rLpXZlTd20Bz8yydNDFSkHkWEAz4kYaXHtlo4v1w7R0Y7%2BjZFcLRmOkRQnoFMH60R2YozFfBq8BuqomH17ieExwpVjxRhluXqwsr8yYAH5kT8ab3qjz2aft7gBzvhTJYTlUsNQD7F25WrYV6ogjgJnWLGVr8ctOlCeBqdU8ESh3XYv62qlfBsgoTQFa4KRBVWJ3n8L%2B0g2GeMIFj%2Bdb96RIrMXowG0gyAQqZ3QwwWTPKOfo17JNx0tydLGiyUnYveVyl%2Fr1GoHd%2Bur1MTofMKqu3MMGOqUBsWcXb16l2cS1N79ac1ZZCEKOWyHu6XCAqCcUON64cvanpqCYJWl%2FBQpUMVVVgzCjZ0oXR44GEmUYYGIvAjfSVxIHbBpxa%2BBnOmY8UxDGlV5WHJnrKNH70X5SLH8ZGeOkYoZ3iGv7q%2B1upEYyn9w%2FIZ2XAA53qBXQo2IFNDGQChQJpE2ZqzgH8tc1dcvyajsMOg0vOvfHkS4%2Fvn%2Fn7CVLBoA56uFs&X-Amz-Signature=913c6a821f62fa3645d08a016b2b0e4186748fa30f33670c239acb3a2c2d0d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
