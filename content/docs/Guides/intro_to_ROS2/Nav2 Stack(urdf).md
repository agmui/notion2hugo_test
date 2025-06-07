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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZNWV2X%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfWuk7FfINoSw3Fy8k178nQtw3yxPUUJSATpD0SISA%2FQIhAO9aHqpt7%2BeJ3yFQX0rpdrMxPgfZFWbJ5wtD5QrYXTCeKv8DCHIQABoMNjM3NDIzMTgzODA1Igysf5bQCfIE59iiHTkq3AOr4bF6eWL%2By8Ttnf4KwrMDr3GLj3AxsKXBYyIbwqVgONkFUi%2B95I7F3s4OQ7IjNzSKruPUtp0k44A9pKqyS%2FXEqkKaYqBzqdNsG%2BYbUiuAcmHdv8iK%2Bw%2BJBzCFtxYoiB%2F8MPbggk%2FjAQ6NnkepCKB%2BIO1YiJlikKjwwdn7jKgmssAqXo6yX3sSGYhBJQMlj58yo1knVZJXJ63BfnK3V7WHa54B%2B5Ay6tI0Sn682jPNADni7qOpUgHyqYOjWlQSPlzgGjpNJveG1AhOaM04D0XoJphGzqrX8N74kF37bGmfGhKppGXXPNBnAxM%2BSi9Qq5cozr89t%2B7O2IXSA5x1plwGtb%2BSoMFZPtel83BzU8Oy6PWecmrxAxcdMVgWegtzWvj7ibHFSOtIhaivX%2BfW45oSFR7At9DJo%2FKK3ZvX2wOyaJP0SMdSYUmSMUt6x%2FahK9SwtWFwarN%2BBkyviv9XQvoCgQrAGttMhBmDKqQ%2BN9LT15dQVWoslrFT0kf8x2BzvObcddIgZRJuy6X8ca8hOyObzmmb%2BcAstFIeOJjZ5mAdtIqKtx2LtNR863FSrIcyXktxw4twRlNQeIdUnvwAJVM1uvF7bR24eMTizNAX60MDCtUEeMMuBZ2xgNuhgjDl%2Bo%2FCBjqkAfOUlx3jWgmGemdgXEBdYKlxp%2FIevm2v1nV%2BItC%2FUWJvCjuDmBt6BA6pgv2Tnif7WOeVGezqxJWAj1Cor1OtWX6v74%2BnMT5KfjOStDybWrpmRUEvBzup3hOyi%2Fl1BILh3uMQ8W717XFgJn03Xy98mFCmnWGMttCVoVl2NUc7UXK32PmMfHxYGuF9%2FYXiNlPpGOLIfE6W%2F7gqS5rJTFx4sYW9pX9y&X-Amz-Signature=7cd924a895905167a59134643d0c27099c9f315dcb9fb8701cdc08430f6384d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZNWV2X%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfWuk7FfINoSw3Fy8k178nQtw3yxPUUJSATpD0SISA%2FQIhAO9aHqpt7%2BeJ3yFQX0rpdrMxPgfZFWbJ5wtD5QrYXTCeKv8DCHIQABoMNjM3NDIzMTgzODA1Igysf5bQCfIE59iiHTkq3AOr4bF6eWL%2By8Ttnf4KwrMDr3GLj3AxsKXBYyIbwqVgONkFUi%2B95I7F3s4OQ7IjNzSKruPUtp0k44A9pKqyS%2FXEqkKaYqBzqdNsG%2BYbUiuAcmHdv8iK%2Bw%2BJBzCFtxYoiB%2F8MPbggk%2FjAQ6NnkepCKB%2BIO1YiJlikKjwwdn7jKgmssAqXo6yX3sSGYhBJQMlj58yo1knVZJXJ63BfnK3V7WHa54B%2B5Ay6tI0Sn682jPNADni7qOpUgHyqYOjWlQSPlzgGjpNJveG1AhOaM04D0XoJphGzqrX8N74kF37bGmfGhKppGXXPNBnAxM%2BSi9Qq5cozr89t%2B7O2IXSA5x1plwGtb%2BSoMFZPtel83BzU8Oy6PWecmrxAxcdMVgWegtzWvj7ibHFSOtIhaivX%2BfW45oSFR7At9DJo%2FKK3ZvX2wOyaJP0SMdSYUmSMUt6x%2FahK9SwtWFwarN%2BBkyviv9XQvoCgQrAGttMhBmDKqQ%2BN9LT15dQVWoslrFT0kf8x2BzvObcddIgZRJuy6X8ca8hOyObzmmb%2BcAstFIeOJjZ5mAdtIqKtx2LtNR863FSrIcyXktxw4twRlNQeIdUnvwAJVM1uvF7bR24eMTizNAX60MDCtUEeMMuBZ2xgNuhgjDl%2Bo%2FCBjqkAfOUlx3jWgmGemdgXEBdYKlxp%2FIevm2v1nV%2BItC%2FUWJvCjuDmBt6BA6pgv2Tnif7WOeVGezqxJWAj1Cor1OtWX6v74%2BnMT5KfjOStDybWrpmRUEvBzup3hOyi%2Fl1BILh3uMQ8W717XFgJn03Xy98mFCmnWGMttCVoVl2NUc7UXK32PmMfHxYGuF9%2FYXiNlPpGOLIfE6W%2F7gqS5rJTFx4sYW9pX9y&X-Amz-Signature=b7c86694fb6ca1a309601034866dbb85ad86856a9409f02e5f0a5e3995e6d6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZNWV2X%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfWuk7FfINoSw3Fy8k178nQtw3yxPUUJSATpD0SISA%2FQIhAO9aHqpt7%2BeJ3yFQX0rpdrMxPgfZFWbJ5wtD5QrYXTCeKv8DCHIQABoMNjM3NDIzMTgzODA1Igysf5bQCfIE59iiHTkq3AOr4bF6eWL%2By8Ttnf4KwrMDr3GLj3AxsKXBYyIbwqVgONkFUi%2B95I7F3s4OQ7IjNzSKruPUtp0k44A9pKqyS%2FXEqkKaYqBzqdNsG%2BYbUiuAcmHdv8iK%2Bw%2BJBzCFtxYoiB%2F8MPbggk%2FjAQ6NnkepCKB%2BIO1YiJlikKjwwdn7jKgmssAqXo6yX3sSGYhBJQMlj58yo1knVZJXJ63BfnK3V7WHa54B%2B5Ay6tI0Sn682jPNADni7qOpUgHyqYOjWlQSPlzgGjpNJveG1AhOaM04D0XoJphGzqrX8N74kF37bGmfGhKppGXXPNBnAxM%2BSi9Qq5cozr89t%2B7O2IXSA5x1plwGtb%2BSoMFZPtel83BzU8Oy6PWecmrxAxcdMVgWegtzWvj7ibHFSOtIhaivX%2BfW45oSFR7At9DJo%2FKK3ZvX2wOyaJP0SMdSYUmSMUt6x%2FahK9SwtWFwarN%2BBkyviv9XQvoCgQrAGttMhBmDKqQ%2BN9LT15dQVWoslrFT0kf8x2BzvObcddIgZRJuy6X8ca8hOyObzmmb%2BcAstFIeOJjZ5mAdtIqKtx2LtNR863FSrIcyXktxw4twRlNQeIdUnvwAJVM1uvF7bR24eMTizNAX60MDCtUEeMMuBZ2xgNuhgjDl%2Bo%2FCBjqkAfOUlx3jWgmGemdgXEBdYKlxp%2FIevm2v1nV%2BItC%2FUWJvCjuDmBt6BA6pgv2Tnif7WOeVGezqxJWAj1Cor1OtWX6v74%2BnMT5KfjOStDybWrpmRUEvBzup3hOyi%2Fl1BILh3uMQ8W717XFgJn03Xy98mFCmnWGMttCVoVl2NUc7UXK32PmMfHxYGuF9%2FYXiNlPpGOLIfE6W%2F7gqS5rJTFx4sYW9pX9y&X-Amz-Signature=bf0db6d6cf38ff34be56a7fce29f02d2f9a7ee681369615db2061c70554a4eab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZNWV2X%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfWuk7FfINoSw3Fy8k178nQtw3yxPUUJSATpD0SISA%2FQIhAO9aHqpt7%2BeJ3yFQX0rpdrMxPgfZFWbJ5wtD5QrYXTCeKv8DCHIQABoMNjM3NDIzMTgzODA1Igysf5bQCfIE59iiHTkq3AOr4bF6eWL%2By8Ttnf4KwrMDr3GLj3AxsKXBYyIbwqVgONkFUi%2B95I7F3s4OQ7IjNzSKruPUtp0k44A9pKqyS%2FXEqkKaYqBzqdNsG%2BYbUiuAcmHdv8iK%2Bw%2BJBzCFtxYoiB%2F8MPbggk%2FjAQ6NnkepCKB%2BIO1YiJlikKjwwdn7jKgmssAqXo6yX3sSGYhBJQMlj58yo1knVZJXJ63BfnK3V7WHa54B%2B5Ay6tI0Sn682jPNADni7qOpUgHyqYOjWlQSPlzgGjpNJveG1AhOaM04D0XoJphGzqrX8N74kF37bGmfGhKppGXXPNBnAxM%2BSi9Qq5cozr89t%2B7O2IXSA5x1plwGtb%2BSoMFZPtel83BzU8Oy6PWecmrxAxcdMVgWegtzWvj7ibHFSOtIhaivX%2BfW45oSFR7At9DJo%2FKK3ZvX2wOyaJP0SMdSYUmSMUt6x%2FahK9SwtWFwarN%2BBkyviv9XQvoCgQrAGttMhBmDKqQ%2BN9LT15dQVWoslrFT0kf8x2BzvObcddIgZRJuy6X8ca8hOyObzmmb%2BcAstFIeOJjZ5mAdtIqKtx2LtNR863FSrIcyXktxw4twRlNQeIdUnvwAJVM1uvF7bR24eMTizNAX60MDCtUEeMMuBZ2xgNuhgjDl%2Bo%2FCBjqkAfOUlx3jWgmGemdgXEBdYKlxp%2FIevm2v1nV%2BItC%2FUWJvCjuDmBt6BA6pgv2Tnif7WOeVGezqxJWAj1Cor1OtWX6v74%2BnMT5KfjOStDybWrpmRUEvBzup3hOyi%2Fl1BILh3uMQ8W717XFgJn03Xy98mFCmnWGMttCVoVl2NUc7UXK32PmMfHxYGuF9%2FYXiNlPpGOLIfE6W%2F7gqS5rJTFx4sYW9pX9y&X-Amz-Signature=b9deaee9ddf47e2b62daa76d7228d3d0927191438f9f7fd45be4ff50e1b58a97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZNWV2X%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfWuk7FfINoSw3Fy8k178nQtw3yxPUUJSATpD0SISA%2FQIhAO9aHqpt7%2BeJ3yFQX0rpdrMxPgfZFWbJ5wtD5QrYXTCeKv8DCHIQABoMNjM3NDIzMTgzODA1Igysf5bQCfIE59iiHTkq3AOr4bF6eWL%2By8Ttnf4KwrMDr3GLj3AxsKXBYyIbwqVgONkFUi%2B95I7F3s4OQ7IjNzSKruPUtp0k44A9pKqyS%2FXEqkKaYqBzqdNsG%2BYbUiuAcmHdv8iK%2Bw%2BJBzCFtxYoiB%2F8MPbggk%2FjAQ6NnkepCKB%2BIO1YiJlikKjwwdn7jKgmssAqXo6yX3sSGYhBJQMlj58yo1knVZJXJ63BfnK3V7WHa54B%2B5Ay6tI0Sn682jPNADni7qOpUgHyqYOjWlQSPlzgGjpNJveG1AhOaM04D0XoJphGzqrX8N74kF37bGmfGhKppGXXPNBnAxM%2BSi9Qq5cozr89t%2B7O2IXSA5x1plwGtb%2BSoMFZPtel83BzU8Oy6PWecmrxAxcdMVgWegtzWvj7ibHFSOtIhaivX%2BfW45oSFR7At9DJo%2FKK3ZvX2wOyaJP0SMdSYUmSMUt6x%2FahK9SwtWFwarN%2BBkyviv9XQvoCgQrAGttMhBmDKqQ%2BN9LT15dQVWoslrFT0kf8x2BzvObcddIgZRJuy6X8ca8hOyObzmmb%2BcAstFIeOJjZ5mAdtIqKtx2LtNR863FSrIcyXktxw4twRlNQeIdUnvwAJVM1uvF7bR24eMTizNAX60MDCtUEeMMuBZ2xgNuhgjDl%2Bo%2FCBjqkAfOUlx3jWgmGemdgXEBdYKlxp%2FIevm2v1nV%2BItC%2FUWJvCjuDmBt6BA6pgv2Tnif7WOeVGezqxJWAj1Cor1OtWX6v74%2BnMT5KfjOStDybWrpmRUEvBzup3hOyi%2Fl1BILh3uMQ8W717XFgJn03Xy98mFCmnWGMttCVoVl2NUc7UXK32PmMfHxYGuF9%2FYXiNlPpGOLIfE6W%2F7gqS5rJTFx4sYW9pX9y&X-Amz-Signature=e509500cc99b5320eeb05adc832a0b05938e83ceaeb62bfa049fa3a50cb2362c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZNWV2X%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfWuk7FfINoSw3Fy8k178nQtw3yxPUUJSATpD0SISA%2FQIhAO9aHqpt7%2BeJ3yFQX0rpdrMxPgfZFWbJ5wtD5QrYXTCeKv8DCHIQABoMNjM3NDIzMTgzODA1Igysf5bQCfIE59iiHTkq3AOr4bF6eWL%2By8Ttnf4KwrMDr3GLj3AxsKXBYyIbwqVgONkFUi%2B95I7F3s4OQ7IjNzSKruPUtp0k44A9pKqyS%2FXEqkKaYqBzqdNsG%2BYbUiuAcmHdv8iK%2Bw%2BJBzCFtxYoiB%2F8MPbggk%2FjAQ6NnkepCKB%2BIO1YiJlikKjwwdn7jKgmssAqXo6yX3sSGYhBJQMlj58yo1knVZJXJ63BfnK3V7WHa54B%2B5Ay6tI0Sn682jPNADni7qOpUgHyqYOjWlQSPlzgGjpNJveG1AhOaM04D0XoJphGzqrX8N74kF37bGmfGhKppGXXPNBnAxM%2BSi9Qq5cozr89t%2B7O2IXSA5x1plwGtb%2BSoMFZPtel83BzU8Oy6PWecmrxAxcdMVgWegtzWvj7ibHFSOtIhaivX%2BfW45oSFR7At9DJo%2FKK3ZvX2wOyaJP0SMdSYUmSMUt6x%2FahK9SwtWFwarN%2BBkyviv9XQvoCgQrAGttMhBmDKqQ%2BN9LT15dQVWoslrFT0kf8x2BzvObcddIgZRJuy6X8ca8hOyObzmmb%2BcAstFIeOJjZ5mAdtIqKtx2LtNR863FSrIcyXktxw4twRlNQeIdUnvwAJVM1uvF7bR24eMTizNAX60MDCtUEeMMuBZ2xgNuhgjDl%2Bo%2FCBjqkAfOUlx3jWgmGemdgXEBdYKlxp%2FIevm2v1nV%2BItC%2FUWJvCjuDmBt6BA6pgv2Tnif7WOeVGezqxJWAj1Cor1OtWX6v74%2BnMT5KfjOStDybWrpmRUEvBzup3hOyi%2Fl1BILh3uMQ8W717XFgJn03Xy98mFCmnWGMttCVoVl2NUc7UXK32PmMfHxYGuF9%2FYXiNlPpGOLIfE6W%2F7gqS5rJTFx4sYW9pX9y&X-Amz-Signature=b6dadaaf337e81051e47f45f61a04c166aa37acc6bf7acf3232f9e606017a11c&X-Amz-SignedHeaders=host&x-id=GetObject)
