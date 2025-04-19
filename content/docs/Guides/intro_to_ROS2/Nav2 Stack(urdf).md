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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7DQPUM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD%2BKir9UzplgKXMXQVwWtoOxPSAVxLMvkF3vOV0NoAFVQIhAKBuBP4%2BFNlMKLfbs9zvZL4aftZivn0uHTV4mAfMGj9sKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztUsESrFbksjxsnLQq3AMlbWOLWL27IzkLBP5udm6ooRwjVkQCGe90svfaXqUSCO%2Bt5qP8zPyZIax%2BQHOFzwVR9yBR3t%2B0kg%2Bij4Dk6ebj5cn44K0MuoXUqogFQVLIEVcpXwvkCRa%2FCftKz9g3mV0Wif96DmZOGxcxMZyTT5slo2tJj2jEFqJzSCCgfGdDFOja33B5tp4f0vkHR2IC%2FJYRZr4P46no1xvXgOGi9xh1kjMf9ZLdxEes1Z9VU%2F4%2BHaMafTwxY%2Fra1WZK6GbqHZk0O4yT8I6EmawN%2BE3%2FEkEm7lt5hxScGX%2B%2B7LPqMaYwNuYOVHYN%2BAzbDGM662WjuFo%2FGRhf1XCiQdHsVfs%2BLUZiZWsVtAHbaAaIE6cq%2BacvLPjbaVBGHJHJnSdg9Q2kFjZUnj%2BjOr75EE6zS%2Bl0rsnLmWIRxdYhOq2net4nvoC%2Fs8JkD%2BDzJVua2NCxtwf4Hb2zpuDshD2JU5kiB%2BUkkteeloTVQHxFjcbOnv5sDACedK%2BYKC%2B3ie6kQgH3IiIHGXQEa5EJLQlmZvexcRilUVBab60STQ2HQTFP4CBF3XMn4%2BU296EEKicmsBlKn6ej89MqAgv58CKyrbwd2kbwpcW1GBaVe4hmPSYj6tsVEwG4dYf6lpHoNzSzJi%2FFOzDAg4%2FABjqkAcPnpr82%2BbkWXnALN7LQ4M9I94oyA%2BCtYOB9Q4NsmqA5CMGE45sSDkz0Xtu6B2rj%2Bpczu3bM4mLgztFFYuvDIqvn8tmB2L5jX3N6UJV4EVYu2W5v6eD57f2wsz9KXsAALnuZM0PHOnbkOEOvIyHK5q8kcPl70d%2BzwKyqgD8oF16W2pMA%2BlV%2BGKXjxD3c%2FIiiU7dX88foEqLSyvfONSHTWasgIvkT&X-Amz-Signature=c41ef02c9fab8770017b61679af3aeb6a5a237359a93550bb527ddb9390b2d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7DQPUM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD%2BKir9UzplgKXMXQVwWtoOxPSAVxLMvkF3vOV0NoAFVQIhAKBuBP4%2BFNlMKLfbs9zvZL4aftZivn0uHTV4mAfMGj9sKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztUsESrFbksjxsnLQq3AMlbWOLWL27IzkLBP5udm6ooRwjVkQCGe90svfaXqUSCO%2Bt5qP8zPyZIax%2BQHOFzwVR9yBR3t%2B0kg%2Bij4Dk6ebj5cn44K0MuoXUqogFQVLIEVcpXwvkCRa%2FCftKz9g3mV0Wif96DmZOGxcxMZyTT5slo2tJj2jEFqJzSCCgfGdDFOja33B5tp4f0vkHR2IC%2FJYRZr4P46no1xvXgOGi9xh1kjMf9ZLdxEes1Z9VU%2F4%2BHaMafTwxY%2Fra1WZK6GbqHZk0O4yT8I6EmawN%2BE3%2FEkEm7lt5hxScGX%2B%2B7LPqMaYwNuYOVHYN%2BAzbDGM662WjuFo%2FGRhf1XCiQdHsVfs%2BLUZiZWsVtAHbaAaIE6cq%2BacvLPjbaVBGHJHJnSdg9Q2kFjZUnj%2BjOr75EE6zS%2Bl0rsnLmWIRxdYhOq2net4nvoC%2Fs8JkD%2BDzJVua2NCxtwf4Hb2zpuDshD2JU5kiB%2BUkkteeloTVQHxFjcbOnv5sDACedK%2BYKC%2B3ie6kQgH3IiIHGXQEa5EJLQlmZvexcRilUVBab60STQ2HQTFP4CBF3XMn4%2BU296EEKicmsBlKn6ej89MqAgv58CKyrbwd2kbwpcW1GBaVe4hmPSYj6tsVEwG4dYf6lpHoNzSzJi%2FFOzDAg4%2FABjqkAcPnpr82%2BbkWXnALN7LQ4M9I94oyA%2BCtYOB9Q4NsmqA5CMGE45sSDkz0Xtu6B2rj%2Bpczu3bM4mLgztFFYuvDIqvn8tmB2L5jX3N6UJV4EVYu2W5v6eD57f2wsz9KXsAALnuZM0PHOnbkOEOvIyHK5q8kcPl70d%2BzwKyqgD8oF16W2pMA%2BlV%2BGKXjxD3c%2FIiiU7dX88foEqLSyvfONSHTWasgIvkT&X-Amz-Signature=689eebfdc1a56f3f199b1efb6305f4769b3737ad0698e2f2872345b84a2cd008&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7DQPUM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD%2BKir9UzplgKXMXQVwWtoOxPSAVxLMvkF3vOV0NoAFVQIhAKBuBP4%2BFNlMKLfbs9zvZL4aftZivn0uHTV4mAfMGj9sKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztUsESrFbksjxsnLQq3AMlbWOLWL27IzkLBP5udm6ooRwjVkQCGe90svfaXqUSCO%2Bt5qP8zPyZIax%2BQHOFzwVR9yBR3t%2B0kg%2Bij4Dk6ebj5cn44K0MuoXUqogFQVLIEVcpXwvkCRa%2FCftKz9g3mV0Wif96DmZOGxcxMZyTT5slo2tJj2jEFqJzSCCgfGdDFOja33B5tp4f0vkHR2IC%2FJYRZr4P46no1xvXgOGi9xh1kjMf9ZLdxEes1Z9VU%2F4%2BHaMafTwxY%2Fra1WZK6GbqHZk0O4yT8I6EmawN%2BE3%2FEkEm7lt5hxScGX%2B%2B7LPqMaYwNuYOVHYN%2BAzbDGM662WjuFo%2FGRhf1XCiQdHsVfs%2BLUZiZWsVtAHbaAaIE6cq%2BacvLPjbaVBGHJHJnSdg9Q2kFjZUnj%2BjOr75EE6zS%2Bl0rsnLmWIRxdYhOq2net4nvoC%2Fs8JkD%2BDzJVua2NCxtwf4Hb2zpuDshD2JU5kiB%2BUkkteeloTVQHxFjcbOnv5sDACedK%2BYKC%2B3ie6kQgH3IiIHGXQEa5EJLQlmZvexcRilUVBab60STQ2HQTFP4CBF3XMn4%2BU296EEKicmsBlKn6ej89MqAgv58CKyrbwd2kbwpcW1GBaVe4hmPSYj6tsVEwG4dYf6lpHoNzSzJi%2FFOzDAg4%2FABjqkAcPnpr82%2BbkWXnALN7LQ4M9I94oyA%2BCtYOB9Q4NsmqA5CMGE45sSDkz0Xtu6B2rj%2Bpczu3bM4mLgztFFYuvDIqvn8tmB2L5jX3N6UJV4EVYu2W5v6eD57f2wsz9KXsAALnuZM0PHOnbkOEOvIyHK5q8kcPl70d%2BzwKyqgD8oF16W2pMA%2BlV%2BGKXjxD3c%2FIiiU7dX88foEqLSyvfONSHTWasgIvkT&X-Amz-Signature=fcf769abb80fc9d1f75c17f1b502605096602d1e6f73879be6a0384f547b9322&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7DQPUM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD%2BKir9UzplgKXMXQVwWtoOxPSAVxLMvkF3vOV0NoAFVQIhAKBuBP4%2BFNlMKLfbs9zvZL4aftZivn0uHTV4mAfMGj9sKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztUsESrFbksjxsnLQq3AMlbWOLWL27IzkLBP5udm6ooRwjVkQCGe90svfaXqUSCO%2Bt5qP8zPyZIax%2BQHOFzwVR9yBR3t%2B0kg%2Bij4Dk6ebj5cn44K0MuoXUqogFQVLIEVcpXwvkCRa%2FCftKz9g3mV0Wif96DmZOGxcxMZyTT5slo2tJj2jEFqJzSCCgfGdDFOja33B5tp4f0vkHR2IC%2FJYRZr4P46no1xvXgOGi9xh1kjMf9ZLdxEes1Z9VU%2F4%2BHaMafTwxY%2Fra1WZK6GbqHZk0O4yT8I6EmawN%2BE3%2FEkEm7lt5hxScGX%2B%2B7LPqMaYwNuYOVHYN%2BAzbDGM662WjuFo%2FGRhf1XCiQdHsVfs%2BLUZiZWsVtAHbaAaIE6cq%2BacvLPjbaVBGHJHJnSdg9Q2kFjZUnj%2BjOr75EE6zS%2Bl0rsnLmWIRxdYhOq2net4nvoC%2Fs8JkD%2BDzJVua2NCxtwf4Hb2zpuDshD2JU5kiB%2BUkkteeloTVQHxFjcbOnv5sDACedK%2BYKC%2B3ie6kQgH3IiIHGXQEa5EJLQlmZvexcRilUVBab60STQ2HQTFP4CBF3XMn4%2BU296EEKicmsBlKn6ej89MqAgv58CKyrbwd2kbwpcW1GBaVe4hmPSYj6tsVEwG4dYf6lpHoNzSzJi%2FFOzDAg4%2FABjqkAcPnpr82%2BbkWXnALN7LQ4M9I94oyA%2BCtYOB9Q4NsmqA5CMGE45sSDkz0Xtu6B2rj%2Bpczu3bM4mLgztFFYuvDIqvn8tmB2L5jX3N6UJV4EVYu2W5v6eD57f2wsz9KXsAALnuZM0PHOnbkOEOvIyHK5q8kcPl70d%2BzwKyqgD8oF16W2pMA%2BlV%2BGKXjxD3c%2FIiiU7dX88foEqLSyvfONSHTWasgIvkT&X-Amz-Signature=785496d9672ed2caac3f4a0c503297c1a1bf058a4abb3c550bac29a886d1bbd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7DQPUM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD%2BKir9UzplgKXMXQVwWtoOxPSAVxLMvkF3vOV0NoAFVQIhAKBuBP4%2BFNlMKLfbs9zvZL4aftZivn0uHTV4mAfMGj9sKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztUsESrFbksjxsnLQq3AMlbWOLWL27IzkLBP5udm6ooRwjVkQCGe90svfaXqUSCO%2Bt5qP8zPyZIax%2BQHOFzwVR9yBR3t%2B0kg%2Bij4Dk6ebj5cn44K0MuoXUqogFQVLIEVcpXwvkCRa%2FCftKz9g3mV0Wif96DmZOGxcxMZyTT5slo2tJj2jEFqJzSCCgfGdDFOja33B5tp4f0vkHR2IC%2FJYRZr4P46no1xvXgOGi9xh1kjMf9ZLdxEes1Z9VU%2F4%2BHaMafTwxY%2Fra1WZK6GbqHZk0O4yT8I6EmawN%2BE3%2FEkEm7lt5hxScGX%2B%2B7LPqMaYwNuYOVHYN%2BAzbDGM662WjuFo%2FGRhf1XCiQdHsVfs%2BLUZiZWsVtAHbaAaIE6cq%2BacvLPjbaVBGHJHJnSdg9Q2kFjZUnj%2BjOr75EE6zS%2Bl0rsnLmWIRxdYhOq2net4nvoC%2Fs8JkD%2BDzJVua2NCxtwf4Hb2zpuDshD2JU5kiB%2BUkkteeloTVQHxFjcbOnv5sDACedK%2BYKC%2B3ie6kQgH3IiIHGXQEa5EJLQlmZvexcRilUVBab60STQ2HQTFP4CBF3XMn4%2BU296EEKicmsBlKn6ej89MqAgv58CKyrbwd2kbwpcW1GBaVe4hmPSYj6tsVEwG4dYf6lpHoNzSzJi%2FFOzDAg4%2FABjqkAcPnpr82%2BbkWXnALN7LQ4M9I94oyA%2BCtYOB9Q4NsmqA5CMGE45sSDkz0Xtu6B2rj%2Bpczu3bM4mLgztFFYuvDIqvn8tmB2L5jX3N6UJV4EVYu2W5v6eD57f2wsz9KXsAALnuZM0PHOnbkOEOvIyHK5q8kcPl70d%2BzwKyqgD8oF16W2pMA%2BlV%2BGKXjxD3c%2FIiiU7dX88foEqLSyvfONSHTWasgIvkT&X-Amz-Signature=2f5c1eed23704c85b497c1db96df3a219f096286641f5faa854a2b16127d0408&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7DQPUM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD%2BKir9UzplgKXMXQVwWtoOxPSAVxLMvkF3vOV0NoAFVQIhAKBuBP4%2BFNlMKLfbs9zvZL4aftZivn0uHTV4mAfMGj9sKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztUsESrFbksjxsnLQq3AMlbWOLWL27IzkLBP5udm6ooRwjVkQCGe90svfaXqUSCO%2Bt5qP8zPyZIax%2BQHOFzwVR9yBR3t%2B0kg%2Bij4Dk6ebj5cn44K0MuoXUqogFQVLIEVcpXwvkCRa%2FCftKz9g3mV0Wif96DmZOGxcxMZyTT5slo2tJj2jEFqJzSCCgfGdDFOja33B5tp4f0vkHR2IC%2FJYRZr4P46no1xvXgOGi9xh1kjMf9ZLdxEes1Z9VU%2F4%2BHaMafTwxY%2Fra1WZK6GbqHZk0O4yT8I6EmawN%2BE3%2FEkEm7lt5hxScGX%2B%2B7LPqMaYwNuYOVHYN%2BAzbDGM662WjuFo%2FGRhf1XCiQdHsVfs%2BLUZiZWsVtAHbaAaIE6cq%2BacvLPjbaVBGHJHJnSdg9Q2kFjZUnj%2BjOr75EE6zS%2Bl0rsnLmWIRxdYhOq2net4nvoC%2Fs8JkD%2BDzJVua2NCxtwf4Hb2zpuDshD2JU5kiB%2BUkkteeloTVQHxFjcbOnv5sDACedK%2BYKC%2B3ie6kQgH3IiIHGXQEa5EJLQlmZvexcRilUVBab60STQ2HQTFP4CBF3XMn4%2BU296EEKicmsBlKn6ej89MqAgv58CKyrbwd2kbwpcW1GBaVe4hmPSYj6tsVEwG4dYf6lpHoNzSzJi%2FFOzDAg4%2FABjqkAcPnpr82%2BbkWXnALN7LQ4M9I94oyA%2BCtYOB9Q4NsmqA5CMGE45sSDkz0Xtu6B2rj%2Bpczu3bM4mLgztFFYuvDIqvn8tmB2L5jX3N6UJV4EVYu2W5v6eD57f2wsz9KXsAALnuZM0PHOnbkOEOvIyHK5q8kcPl70d%2BzwKyqgD8oF16W2pMA%2BlV%2BGKXjxD3c%2FIiiU7dX88foEqLSyvfONSHTWasgIvkT&X-Amz-Signature=a110b5be1f1cd11da4e755a7f9481428058c7d7ae5a98ad53f0c711e3ffa880a&X-Amz-SignedHeaders=host&x-id=GetObject)
