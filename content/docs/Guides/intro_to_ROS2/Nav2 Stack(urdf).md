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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4ORID7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDkhsLz2VsJd05iJK%2F4jgDsGYnqyG5WVsO2hvlAvX%2FeAIhAL7OsjIqXtqIM2zu7ITbHqm2prUvgNed6ZO50nBGS8y7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHl2PRikjkWKRFQaQq3AM5CuEXllqviPy0ehjh8oyr7PxMzENoq%2FE%2B7GUfL4C0j4rzfsW1TzZPF0DP1LUD2YYMmEZDw385RjOHGqycwwAvrcthJ5cp24tHXHIW97LKr5A655tIgWeeTYOWylI%2FefLzIIj7rW0ZUJ8zrFJhn7J9cTIm0QAy4nJ86tAoxnUW9NQ7chSFdXgCqOacnE1G%2B%2FsdZiZytRIai7s75pEPD81J1EiVXE4T3YJyHlWw3fuydaPkhcJ4QdwsDicdOSL6OkKH4pfa8B6zcV6Tuxaii8Pbs4dpiIfBs7cjqtLKeCTXVgIekIjbkjvA0vSQVYTVKE2qo%2FqdImAsCRJRjrLYDiDiLbjZs4PTdluVweENsDt4hty%2FADvgQ5txVYoLRofyoEollCUWDu8L67Vsguclia4oohEngyhoHRTrzZJ1xyTEXTklUJLWy9FAAecPSSfPq%2ByyCxMSEe9U1w3Uc%2B9P7Fs9j7UlBpr4Pu9ojOq5gGFSiHj5ZTTZAMulklk7MTppMBiL6oA43ZI%2F23qml0v8HowJ%2B8f99eRf8xoeehMP1wTp4NksHkD28%2F4xit8VbqXKDKUJmvNk2UuXbPDagjCzYesNO44X4ouz%2Bt6oIoEa1Ud7nrH%2F9rEa8f4p0YtB2TDD8J3CBjqkAaUXhZMshcbfhvYhTUe2QgCtHVbOSLietZBFaQWUXs3IJrsFTnpgIlE%2BfU%2BVqrGttPMbZY7t5qKR3eIJsEXBOGdt%2FhBA6mOpXwjB2XgXvYgwL8W4I%2FnMb9010NghW3ZBRUFVxG7EZXOmmxmHlV0h22CXmcZXa9no%2BeLYRb1vBEWtJMtUP9sMcwsfkuv91OAqFL1sTPJy3Oq42relAfLFNI7ORixP&X-Amz-Signature=40ea6c0cfcfda412029a74384274643778e9e660d572380b9cb839ea4af220f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4ORID7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDkhsLz2VsJd05iJK%2F4jgDsGYnqyG5WVsO2hvlAvX%2FeAIhAL7OsjIqXtqIM2zu7ITbHqm2prUvgNed6ZO50nBGS8y7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHl2PRikjkWKRFQaQq3AM5CuEXllqviPy0ehjh8oyr7PxMzENoq%2FE%2B7GUfL4C0j4rzfsW1TzZPF0DP1LUD2YYMmEZDw385RjOHGqycwwAvrcthJ5cp24tHXHIW97LKr5A655tIgWeeTYOWylI%2FefLzIIj7rW0ZUJ8zrFJhn7J9cTIm0QAy4nJ86tAoxnUW9NQ7chSFdXgCqOacnE1G%2B%2FsdZiZytRIai7s75pEPD81J1EiVXE4T3YJyHlWw3fuydaPkhcJ4QdwsDicdOSL6OkKH4pfa8B6zcV6Tuxaii8Pbs4dpiIfBs7cjqtLKeCTXVgIekIjbkjvA0vSQVYTVKE2qo%2FqdImAsCRJRjrLYDiDiLbjZs4PTdluVweENsDt4hty%2FADvgQ5txVYoLRofyoEollCUWDu8L67Vsguclia4oohEngyhoHRTrzZJ1xyTEXTklUJLWy9FAAecPSSfPq%2ByyCxMSEe9U1w3Uc%2B9P7Fs9j7UlBpr4Pu9ojOq5gGFSiHj5ZTTZAMulklk7MTppMBiL6oA43ZI%2F23qml0v8HowJ%2B8f99eRf8xoeehMP1wTp4NksHkD28%2F4xit8VbqXKDKUJmvNk2UuXbPDagjCzYesNO44X4ouz%2Bt6oIoEa1Ud7nrH%2F9rEa8f4p0YtB2TDD8J3CBjqkAaUXhZMshcbfhvYhTUe2QgCtHVbOSLietZBFaQWUXs3IJrsFTnpgIlE%2BfU%2BVqrGttPMbZY7t5qKR3eIJsEXBOGdt%2FhBA6mOpXwjB2XgXvYgwL8W4I%2FnMb9010NghW3ZBRUFVxG7EZXOmmxmHlV0h22CXmcZXa9no%2BeLYRb1vBEWtJMtUP9sMcwsfkuv91OAqFL1sTPJy3Oq42relAfLFNI7ORixP&X-Amz-Signature=38ac3899d91ad37c32a5292ba55646f1d8b343de6366aa24d3af7f5cb7673375&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4ORID7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDkhsLz2VsJd05iJK%2F4jgDsGYnqyG5WVsO2hvlAvX%2FeAIhAL7OsjIqXtqIM2zu7ITbHqm2prUvgNed6ZO50nBGS8y7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHl2PRikjkWKRFQaQq3AM5CuEXllqviPy0ehjh8oyr7PxMzENoq%2FE%2B7GUfL4C0j4rzfsW1TzZPF0DP1LUD2YYMmEZDw385RjOHGqycwwAvrcthJ5cp24tHXHIW97LKr5A655tIgWeeTYOWylI%2FefLzIIj7rW0ZUJ8zrFJhn7J9cTIm0QAy4nJ86tAoxnUW9NQ7chSFdXgCqOacnE1G%2B%2FsdZiZytRIai7s75pEPD81J1EiVXE4T3YJyHlWw3fuydaPkhcJ4QdwsDicdOSL6OkKH4pfa8B6zcV6Tuxaii8Pbs4dpiIfBs7cjqtLKeCTXVgIekIjbkjvA0vSQVYTVKE2qo%2FqdImAsCRJRjrLYDiDiLbjZs4PTdluVweENsDt4hty%2FADvgQ5txVYoLRofyoEollCUWDu8L67Vsguclia4oohEngyhoHRTrzZJ1xyTEXTklUJLWy9FAAecPSSfPq%2ByyCxMSEe9U1w3Uc%2B9P7Fs9j7UlBpr4Pu9ojOq5gGFSiHj5ZTTZAMulklk7MTppMBiL6oA43ZI%2F23qml0v8HowJ%2B8f99eRf8xoeehMP1wTp4NksHkD28%2F4xit8VbqXKDKUJmvNk2UuXbPDagjCzYesNO44X4ouz%2Bt6oIoEa1Ud7nrH%2F9rEa8f4p0YtB2TDD8J3CBjqkAaUXhZMshcbfhvYhTUe2QgCtHVbOSLietZBFaQWUXs3IJrsFTnpgIlE%2BfU%2BVqrGttPMbZY7t5qKR3eIJsEXBOGdt%2FhBA6mOpXwjB2XgXvYgwL8W4I%2FnMb9010NghW3ZBRUFVxG7EZXOmmxmHlV0h22CXmcZXa9no%2BeLYRb1vBEWtJMtUP9sMcwsfkuv91OAqFL1sTPJy3Oq42relAfLFNI7ORixP&X-Amz-Signature=6f9c83ab234a25a434fc7f90fa474642a3fdcc91e079b4e4c87b5060733e7f67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4ORID7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDkhsLz2VsJd05iJK%2F4jgDsGYnqyG5WVsO2hvlAvX%2FeAIhAL7OsjIqXtqIM2zu7ITbHqm2prUvgNed6ZO50nBGS8y7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHl2PRikjkWKRFQaQq3AM5CuEXllqviPy0ehjh8oyr7PxMzENoq%2FE%2B7GUfL4C0j4rzfsW1TzZPF0DP1LUD2YYMmEZDw385RjOHGqycwwAvrcthJ5cp24tHXHIW97LKr5A655tIgWeeTYOWylI%2FefLzIIj7rW0ZUJ8zrFJhn7J9cTIm0QAy4nJ86tAoxnUW9NQ7chSFdXgCqOacnE1G%2B%2FsdZiZytRIai7s75pEPD81J1EiVXE4T3YJyHlWw3fuydaPkhcJ4QdwsDicdOSL6OkKH4pfa8B6zcV6Tuxaii8Pbs4dpiIfBs7cjqtLKeCTXVgIekIjbkjvA0vSQVYTVKE2qo%2FqdImAsCRJRjrLYDiDiLbjZs4PTdluVweENsDt4hty%2FADvgQ5txVYoLRofyoEollCUWDu8L67Vsguclia4oohEngyhoHRTrzZJ1xyTEXTklUJLWy9FAAecPSSfPq%2ByyCxMSEe9U1w3Uc%2B9P7Fs9j7UlBpr4Pu9ojOq5gGFSiHj5ZTTZAMulklk7MTppMBiL6oA43ZI%2F23qml0v8HowJ%2B8f99eRf8xoeehMP1wTp4NksHkD28%2F4xit8VbqXKDKUJmvNk2UuXbPDagjCzYesNO44X4ouz%2Bt6oIoEa1Ud7nrH%2F9rEa8f4p0YtB2TDD8J3CBjqkAaUXhZMshcbfhvYhTUe2QgCtHVbOSLietZBFaQWUXs3IJrsFTnpgIlE%2BfU%2BVqrGttPMbZY7t5qKR3eIJsEXBOGdt%2FhBA6mOpXwjB2XgXvYgwL8W4I%2FnMb9010NghW3ZBRUFVxG7EZXOmmxmHlV0h22CXmcZXa9no%2BeLYRb1vBEWtJMtUP9sMcwsfkuv91OAqFL1sTPJy3Oq42relAfLFNI7ORixP&X-Amz-Signature=7e69ab708a43ce9e44b00702c3dbddc17822ffe49ef451080180a98defd390d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4ORID7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDkhsLz2VsJd05iJK%2F4jgDsGYnqyG5WVsO2hvlAvX%2FeAIhAL7OsjIqXtqIM2zu7ITbHqm2prUvgNed6ZO50nBGS8y7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHl2PRikjkWKRFQaQq3AM5CuEXllqviPy0ehjh8oyr7PxMzENoq%2FE%2B7GUfL4C0j4rzfsW1TzZPF0DP1LUD2YYMmEZDw385RjOHGqycwwAvrcthJ5cp24tHXHIW97LKr5A655tIgWeeTYOWylI%2FefLzIIj7rW0ZUJ8zrFJhn7J9cTIm0QAy4nJ86tAoxnUW9NQ7chSFdXgCqOacnE1G%2B%2FsdZiZytRIai7s75pEPD81J1EiVXE4T3YJyHlWw3fuydaPkhcJ4QdwsDicdOSL6OkKH4pfa8B6zcV6Tuxaii8Pbs4dpiIfBs7cjqtLKeCTXVgIekIjbkjvA0vSQVYTVKE2qo%2FqdImAsCRJRjrLYDiDiLbjZs4PTdluVweENsDt4hty%2FADvgQ5txVYoLRofyoEollCUWDu8L67Vsguclia4oohEngyhoHRTrzZJ1xyTEXTklUJLWy9FAAecPSSfPq%2ByyCxMSEe9U1w3Uc%2B9P7Fs9j7UlBpr4Pu9ojOq5gGFSiHj5ZTTZAMulklk7MTppMBiL6oA43ZI%2F23qml0v8HowJ%2B8f99eRf8xoeehMP1wTp4NksHkD28%2F4xit8VbqXKDKUJmvNk2UuXbPDagjCzYesNO44X4ouz%2Bt6oIoEa1Ud7nrH%2F9rEa8f4p0YtB2TDD8J3CBjqkAaUXhZMshcbfhvYhTUe2QgCtHVbOSLietZBFaQWUXs3IJrsFTnpgIlE%2BfU%2BVqrGttPMbZY7t5qKR3eIJsEXBOGdt%2FhBA6mOpXwjB2XgXvYgwL8W4I%2FnMb9010NghW3ZBRUFVxG7EZXOmmxmHlV0h22CXmcZXa9no%2BeLYRb1vBEWtJMtUP9sMcwsfkuv91OAqFL1sTPJy3Oq42relAfLFNI7ORixP&X-Amz-Signature=8149652ba2719224fe4351d79cb7ebea0af2604cfbcfd2d0079b630ad19ec628&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4ORID7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDkhsLz2VsJd05iJK%2F4jgDsGYnqyG5WVsO2hvlAvX%2FeAIhAL7OsjIqXtqIM2zu7ITbHqm2prUvgNed6ZO50nBGS8y7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHl2PRikjkWKRFQaQq3AM5CuEXllqviPy0ehjh8oyr7PxMzENoq%2FE%2B7GUfL4C0j4rzfsW1TzZPF0DP1LUD2YYMmEZDw385RjOHGqycwwAvrcthJ5cp24tHXHIW97LKr5A655tIgWeeTYOWylI%2FefLzIIj7rW0ZUJ8zrFJhn7J9cTIm0QAy4nJ86tAoxnUW9NQ7chSFdXgCqOacnE1G%2B%2FsdZiZytRIai7s75pEPD81J1EiVXE4T3YJyHlWw3fuydaPkhcJ4QdwsDicdOSL6OkKH4pfa8B6zcV6Tuxaii8Pbs4dpiIfBs7cjqtLKeCTXVgIekIjbkjvA0vSQVYTVKE2qo%2FqdImAsCRJRjrLYDiDiLbjZs4PTdluVweENsDt4hty%2FADvgQ5txVYoLRofyoEollCUWDu8L67Vsguclia4oohEngyhoHRTrzZJ1xyTEXTklUJLWy9FAAecPSSfPq%2ByyCxMSEe9U1w3Uc%2B9P7Fs9j7UlBpr4Pu9ojOq5gGFSiHj5ZTTZAMulklk7MTppMBiL6oA43ZI%2F23qml0v8HowJ%2B8f99eRf8xoeehMP1wTp4NksHkD28%2F4xit8VbqXKDKUJmvNk2UuXbPDagjCzYesNO44X4ouz%2Bt6oIoEa1Ud7nrH%2F9rEa8f4p0YtB2TDD8J3CBjqkAaUXhZMshcbfhvYhTUe2QgCtHVbOSLietZBFaQWUXs3IJrsFTnpgIlE%2BfU%2BVqrGttPMbZY7t5qKR3eIJsEXBOGdt%2FhBA6mOpXwjB2XgXvYgwL8W4I%2FnMb9010NghW3ZBRUFVxG7EZXOmmxmHlV0h22CXmcZXa9no%2BeLYRb1vBEWtJMtUP9sMcwsfkuv91OAqFL1sTPJy3Oq42relAfLFNI7ORixP&X-Amz-Signature=6fb9ac634b62e931e418a6049a268ec3e9fd3bbb0a8b69922e032d9be82efe36&X-Amz-SignedHeaders=host&x-id=GetObject)
