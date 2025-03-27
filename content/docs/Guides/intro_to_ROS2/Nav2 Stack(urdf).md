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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN4NU3U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqqnYkNysa0b4rmjia%2Bvu2C4nttto9aVaHf%2F8O7H9E%2FQIgIEHrkbQU3rrrkUzp%2BbZD97gJTFpfLLNyK303lPwsvFMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDILiiSj%2FZzjMCFsCQCrcA9gGBTLw6VgjgbqWuMs2mfDXw38Yz8zVx7HSwAgAXxQnqYZG8bA2KpdgN3XSi40jEL5tF9a11Tj4yhXUrAu6u%2Bt9btHOKpNWENadgM5K%2BY6h3xWUleKQEVGJZTFnKHRgd0hTJi%2FC1%2Br%2BTJFxOIPM2kU06VstgynkAOdsai3boYLr8ikEPxbqMOwex2Kzc4XaeDfDykuIlSC%2BNGURWOI9fsXquq5ob0o7n1lgfKJn%2Bmw9waJ8pfvtc8g78u5k9LWe9XwatKEi4EtIU15Y%2FsyrwBOzfXcyu3iBUP25JheYJXhzPgCVqgrVP6UV6%2BgTQh9WbQIHKG423azJVg1Vjoc7oMlSF5QkughSYWv%2FEA%2FKQkV1naWrJR8jlG65ihyyvO9oqn3H9yQei5lWoBkcmi8x2Bc6G3pkFI6XyvB6jMzhDl%2FvaXPyhOk4qLVhuOcZJQnJ7T9eOu6ui0%2F%2F6u2oNBOVl1mPNuY1J47W5UMMd6avRrD880aqA%2BpIDGQ0LGE8OK1EdWGbQhlfszqwDNEOhriBVY4oAlG5kkvnw172JmytB4k%2FnC%2BPClEqv1Er1mmAGEiDwXExSNsNtCsc7sTkdtS8vgceqM5dJf2E3gI3SCItVo7tFMIPMtTe0QT0EK3FMNr3lL8GOqUBTBxakRIAQuHj7ujjjDUeG973ve1aTg8jFBoaF8wox419LnsFGkDz%2BSSI07FkLi5mHh5Lp8WRqlH7z2kn3XfOoqB31D4LH5yIgirMXNTsM3BHCLFS0%2BzVALzVzGCAzrK%2FS%2BumjzwLcnbGiWvOelqLYLY85LRwwE2iIFbKXqtW%2FSJN2tUUhkYx3tZP99Lg6gdWzuHHJgvcutfuWFaf%2FB7FVAIEdy7L&X-Amz-Signature=17e89168b2ad9d68ee2e1aeac1b38de16d9f4bd563af14ce3d9005721669a03d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN4NU3U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqqnYkNysa0b4rmjia%2Bvu2C4nttto9aVaHf%2F8O7H9E%2FQIgIEHrkbQU3rrrkUzp%2BbZD97gJTFpfLLNyK303lPwsvFMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDILiiSj%2FZzjMCFsCQCrcA9gGBTLw6VgjgbqWuMs2mfDXw38Yz8zVx7HSwAgAXxQnqYZG8bA2KpdgN3XSi40jEL5tF9a11Tj4yhXUrAu6u%2Bt9btHOKpNWENadgM5K%2BY6h3xWUleKQEVGJZTFnKHRgd0hTJi%2FC1%2Br%2BTJFxOIPM2kU06VstgynkAOdsai3boYLr8ikEPxbqMOwex2Kzc4XaeDfDykuIlSC%2BNGURWOI9fsXquq5ob0o7n1lgfKJn%2Bmw9waJ8pfvtc8g78u5k9LWe9XwatKEi4EtIU15Y%2FsyrwBOzfXcyu3iBUP25JheYJXhzPgCVqgrVP6UV6%2BgTQh9WbQIHKG423azJVg1Vjoc7oMlSF5QkughSYWv%2FEA%2FKQkV1naWrJR8jlG65ihyyvO9oqn3H9yQei5lWoBkcmi8x2Bc6G3pkFI6XyvB6jMzhDl%2FvaXPyhOk4qLVhuOcZJQnJ7T9eOu6ui0%2F%2F6u2oNBOVl1mPNuY1J47W5UMMd6avRrD880aqA%2BpIDGQ0LGE8OK1EdWGbQhlfszqwDNEOhriBVY4oAlG5kkvnw172JmytB4k%2FnC%2BPClEqv1Er1mmAGEiDwXExSNsNtCsc7sTkdtS8vgceqM5dJf2E3gI3SCItVo7tFMIPMtTe0QT0EK3FMNr3lL8GOqUBTBxakRIAQuHj7ujjjDUeG973ve1aTg8jFBoaF8wox419LnsFGkDz%2BSSI07FkLi5mHh5Lp8WRqlH7z2kn3XfOoqB31D4LH5yIgirMXNTsM3BHCLFS0%2BzVALzVzGCAzrK%2FS%2BumjzwLcnbGiWvOelqLYLY85LRwwE2iIFbKXqtW%2FSJN2tUUhkYx3tZP99Lg6gdWzuHHJgvcutfuWFaf%2FB7FVAIEdy7L&X-Amz-Signature=27dc4857b02fedbbcbd8dd96fd7142376a40d15f812f2f40b5d80aa1b0092e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN4NU3U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqqnYkNysa0b4rmjia%2Bvu2C4nttto9aVaHf%2F8O7H9E%2FQIgIEHrkbQU3rrrkUzp%2BbZD97gJTFpfLLNyK303lPwsvFMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDILiiSj%2FZzjMCFsCQCrcA9gGBTLw6VgjgbqWuMs2mfDXw38Yz8zVx7HSwAgAXxQnqYZG8bA2KpdgN3XSi40jEL5tF9a11Tj4yhXUrAu6u%2Bt9btHOKpNWENadgM5K%2BY6h3xWUleKQEVGJZTFnKHRgd0hTJi%2FC1%2Br%2BTJFxOIPM2kU06VstgynkAOdsai3boYLr8ikEPxbqMOwex2Kzc4XaeDfDykuIlSC%2BNGURWOI9fsXquq5ob0o7n1lgfKJn%2Bmw9waJ8pfvtc8g78u5k9LWe9XwatKEi4EtIU15Y%2FsyrwBOzfXcyu3iBUP25JheYJXhzPgCVqgrVP6UV6%2BgTQh9WbQIHKG423azJVg1Vjoc7oMlSF5QkughSYWv%2FEA%2FKQkV1naWrJR8jlG65ihyyvO9oqn3H9yQei5lWoBkcmi8x2Bc6G3pkFI6XyvB6jMzhDl%2FvaXPyhOk4qLVhuOcZJQnJ7T9eOu6ui0%2F%2F6u2oNBOVl1mPNuY1J47W5UMMd6avRrD880aqA%2BpIDGQ0LGE8OK1EdWGbQhlfszqwDNEOhriBVY4oAlG5kkvnw172JmytB4k%2FnC%2BPClEqv1Er1mmAGEiDwXExSNsNtCsc7sTkdtS8vgceqM5dJf2E3gI3SCItVo7tFMIPMtTe0QT0EK3FMNr3lL8GOqUBTBxakRIAQuHj7ujjjDUeG973ve1aTg8jFBoaF8wox419LnsFGkDz%2BSSI07FkLi5mHh5Lp8WRqlH7z2kn3XfOoqB31D4LH5yIgirMXNTsM3BHCLFS0%2BzVALzVzGCAzrK%2FS%2BumjzwLcnbGiWvOelqLYLY85LRwwE2iIFbKXqtW%2FSJN2tUUhkYx3tZP99Lg6gdWzuHHJgvcutfuWFaf%2FB7FVAIEdy7L&X-Amz-Signature=b9c402d0e9ec77e84b0957f220eb62c44d88439c6be352e48d72c7a0c15b6f88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN4NU3U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqqnYkNysa0b4rmjia%2Bvu2C4nttto9aVaHf%2F8O7H9E%2FQIgIEHrkbQU3rrrkUzp%2BbZD97gJTFpfLLNyK303lPwsvFMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDILiiSj%2FZzjMCFsCQCrcA9gGBTLw6VgjgbqWuMs2mfDXw38Yz8zVx7HSwAgAXxQnqYZG8bA2KpdgN3XSi40jEL5tF9a11Tj4yhXUrAu6u%2Bt9btHOKpNWENadgM5K%2BY6h3xWUleKQEVGJZTFnKHRgd0hTJi%2FC1%2Br%2BTJFxOIPM2kU06VstgynkAOdsai3boYLr8ikEPxbqMOwex2Kzc4XaeDfDykuIlSC%2BNGURWOI9fsXquq5ob0o7n1lgfKJn%2Bmw9waJ8pfvtc8g78u5k9LWe9XwatKEi4EtIU15Y%2FsyrwBOzfXcyu3iBUP25JheYJXhzPgCVqgrVP6UV6%2BgTQh9WbQIHKG423azJVg1Vjoc7oMlSF5QkughSYWv%2FEA%2FKQkV1naWrJR8jlG65ihyyvO9oqn3H9yQei5lWoBkcmi8x2Bc6G3pkFI6XyvB6jMzhDl%2FvaXPyhOk4qLVhuOcZJQnJ7T9eOu6ui0%2F%2F6u2oNBOVl1mPNuY1J47W5UMMd6avRrD880aqA%2BpIDGQ0LGE8OK1EdWGbQhlfszqwDNEOhriBVY4oAlG5kkvnw172JmytB4k%2FnC%2BPClEqv1Er1mmAGEiDwXExSNsNtCsc7sTkdtS8vgceqM5dJf2E3gI3SCItVo7tFMIPMtTe0QT0EK3FMNr3lL8GOqUBTBxakRIAQuHj7ujjjDUeG973ve1aTg8jFBoaF8wox419LnsFGkDz%2BSSI07FkLi5mHh5Lp8WRqlH7z2kn3XfOoqB31D4LH5yIgirMXNTsM3BHCLFS0%2BzVALzVzGCAzrK%2FS%2BumjzwLcnbGiWvOelqLYLY85LRwwE2iIFbKXqtW%2FSJN2tUUhkYx3tZP99Lg6gdWzuHHJgvcutfuWFaf%2FB7FVAIEdy7L&X-Amz-Signature=5c6d8640565d5290439eb90d8cca226920f2ef71d6386c78999dce23923948db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN4NU3U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqqnYkNysa0b4rmjia%2Bvu2C4nttto9aVaHf%2F8O7H9E%2FQIgIEHrkbQU3rrrkUzp%2BbZD97gJTFpfLLNyK303lPwsvFMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDILiiSj%2FZzjMCFsCQCrcA9gGBTLw6VgjgbqWuMs2mfDXw38Yz8zVx7HSwAgAXxQnqYZG8bA2KpdgN3XSi40jEL5tF9a11Tj4yhXUrAu6u%2Bt9btHOKpNWENadgM5K%2BY6h3xWUleKQEVGJZTFnKHRgd0hTJi%2FC1%2Br%2BTJFxOIPM2kU06VstgynkAOdsai3boYLr8ikEPxbqMOwex2Kzc4XaeDfDykuIlSC%2BNGURWOI9fsXquq5ob0o7n1lgfKJn%2Bmw9waJ8pfvtc8g78u5k9LWe9XwatKEi4EtIU15Y%2FsyrwBOzfXcyu3iBUP25JheYJXhzPgCVqgrVP6UV6%2BgTQh9WbQIHKG423azJVg1Vjoc7oMlSF5QkughSYWv%2FEA%2FKQkV1naWrJR8jlG65ihyyvO9oqn3H9yQei5lWoBkcmi8x2Bc6G3pkFI6XyvB6jMzhDl%2FvaXPyhOk4qLVhuOcZJQnJ7T9eOu6ui0%2F%2F6u2oNBOVl1mPNuY1J47W5UMMd6avRrD880aqA%2BpIDGQ0LGE8OK1EdWGbQhlfszqwDNEOhriBVY4oAlG5kkvnw172JmytB4k%2FnC%2BPClEqv1Er1mmAGEiDwXExSNsNtCsc7sTkdtS8vgceqM5dJf2E3gI3SCItVo7tFMIPMtTe0QT0EK3FMNr3lL8GOqUBTBxakRIAQuHj7ujjjDUeG973ve1aTg8jFBoaF8wox419LnsFGkDz%2BSSI07FkLi5mHh5Lp8WRqlH7z2kn3XfOoqB31D4LH5yIgirMXNTsM3BHCLFS0%2BzVALzVzGCAzrK%2FS%2BumjzwLcnbGiWvOelqLYLY85LRwwE2iIFbKXqtW%2FSJN2tUUhkYx3tZP99Lg6gdWzuHHJgvcutfuWFaf%2FB7FVAIEdy7L&X-Amz-Signature=83c9325e0c51f5599f3bc69e1796da8992ba25bd8b1f93311a2a860d2f94e278&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN4NU3U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqqnYkNysa0b4rmjia%2Bvu2C4nttto9aVaHf%2F8O7H9E%2FQIgIEHrkbQU3rrrkUzp%2BbZD97gJTFpfLLNyK303lPwsvFMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDILiiSj%2FZzjMCFsCQCrcA9gGBTLw6VgjgbqWuMs2mfDXw38Yz8zVx7HSwAgAXxQnqYZG8bA2KpdgN3XSi40jEL5tF9a11Tj4yhXUrAu6u%2Bt9btHOKpNWENadgM5K%2BY6h3xWUleKQEVGJZTFnKHRgd0hTJi%2FC1%2Br%2BTJFxOIPM2kU06VstgynkAOdsai3boYLr8ikEPxbqMOwex2Kzc4XaeDfDykuIlSC%2BNGURWOI9fsXquq5ob0o7n1lgfKJn%2Bmw9waJ8pfvtc8g78u5k9LWe9XwatKEi4EtIU15Y%2FsyrwBOzfXcyu3iBUP25JheYJXhzPgCVqgrVP6UV6%2BgTQh9WbQIHKG423azJVg1Vjoc7oMlSF5QkughSYWv%2FEA%2FKQkV1naWrJR8jlG65ihyyvO9oqn3H9yQei5lWoBkcmi8x2Bc6G3pkFI6XyvB6jMzhDl%2FvaXPyhOk4qLVhuOcZJQnJ7T9eOu6ui0%2F%2F6u2oNBOVl1mPNuY1J47W5UMMd6avRrD880aqA%2BpIDGQ0LGE8OK1EdWGbQhlfszqwDNEOhriBVY4oAlG5kkvnw172JmytB4k%2FnC%2BPClEqv1Er1mmAGEiDwXExSNsNtCsc7sTkdtS8vgceqM5dJf2E3gI3SCItVo7tFMIPMtTe0QT0EK3FMNr3lL8GOqUBTBxakRIAQuHj7ujjjDUeG973ve1aTg8jFBoaF8wox419LnsFGkDz%2BSSI07FkLi5mHh5Lp8WRqlH7z2kn3XfOoqB31D4LH5yIgirMXNTsM3BHCLFS0%2BzVALzVzGCAzrK%2FS%2BumjzwLcnbGiWvOelqLYLY85LRwwE2iIFbKXqtW%2FSJN2tUUhkYx3tZP99Lg6gdWzuHHJgvcutfuWFaf%2FB7FVAIEdy7L&X-Amz-Signature=407971d55541570c5cfd9c0266a3c5b698ef4fccc6c202a1d6e201a7a21096c5&X-Amz-SignedHeaders=host&x-id=GetObject)
