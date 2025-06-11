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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZKVNMK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCxl9p9MvRbSHLE2Gr1POu0rDkGLEbT%2BR5dRrUoDKsLvgIgTjaseQK9lleCx0Cuxy7jpHLq%2Bply15hLMBjouAHqGsQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0eli60tiVKPpqVlSrcA8rkI0kukQd1CXH1QUys4dX7eNUnK4x%2FxDpAgQieJHkw9fmjTnHMI6LQ3wVXn%2BIkfy9dF1Irb4sKYZhTCBsYvvsq0cG%2FIbk9jcL3Z%2BnRGzZQwNHpgNdKIUHMK2IcsFxFMcsn3FKr0jPzW52WgcXqTaeDlIaXZsTEzL5TP1ongmB5717pkYD2aIt6XwLkcD0wxbtEBWkk0rhjUXCOzHv%2BPOuIFG53WraOKhdmHgconNZOgF%2BM7wgt0B1TAbZ%2FX1QhY%2BFKlMDfOCrX4V7TfX1X%2By1J7rRyKKz1C1PeXBsDZ7bPrsmNQybbR5VTcDI8KLLNNHrBiAiGd91DvU5Qn0DOQ5Z54zGr4%2FD46VW1c17khz%2BLN7FPeQ2EzaKgn9LiVOkFWIbIMeYHgORxG1eBVCb4vK2a3sGUWxQv1w1f2lys0HW2vTB%2FP6cM3VZCTn3wLiANcddKp1j3EmGmq%2FyjtIZUCYtoHPuTnqEB2jJ8jJNTqunEHy%2BHDg3FKZ2Sn4bYF%2F%2BuPWe0tXWSo%2BgJ5RsU4xZaUfVQav9XsYIVGpU9b1U63aTlr1oJPwXuZ%2FnomKW7QnAstAymMAwOcqho1Hn78aLJ0fEKGoqEwvoqe57G1J06F2NfXagkSdO8I7IKg0rJMMPIp8IGOqUB5Jnq62BrGczkSxB%2Bpx3WZag8Bpxjny5qUaFKw3DLp9gfgnx3yi2wOWUzvnr2XiCbbqaqosOfDmQMEeV4%2BHv8ai%2FWA6NnedIDv7iiaLUc7YqocUIaW3wX7baNWX0nPxqbGvr6LJXDh5YuUuzttsH0kfR8FxiR7UYC0whOgREjGRBCd7U8ALFqsdZ%2FuIICaCzIwJYmbPP1TFSbfkAL3Igv1UFKvPsU&X-Amz-Signature=b96745f2965320e0f04a7bac702634645b4974f4cb9eb82369582065d3fa1efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZKVNMK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCxl9p9MvRbSHLE2Gr1POu0rDkGLEbT%2BR5dRrUoDKsLvgIgTjaseQK9lleCx0Cuxy7jpHLq%2Bply15hLMBjouAHqGsQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0eli60tiVKPpqVlSrcA8rkI0kukQd1CXH1QUys4dX7eNUnK4x%2FxDpAgQieJHkw9fmjTnHMI6LQ3wVXn%2BIkfy9dF1Irb4sKYZhTCBsYvvsq0cG%2FIbk9jcL3Z%2BnRGzZQwNHpgNdKIUHMK2IcsFxFMcsn3FKr0jPzW52WgcXqTaeDlIaXZsTEzL5TP1ongmB5717pkYD2aIt6XwLkcD0wxbtEBWkk0rhjUXCOzHv%2BPOuIFG53WraOKhdmHgconNZOgF%2BM7wgt0B1TAbZ%2FX1QhY%2BFKlMDfOCrX4V7TfX1X%2By1J7rRyKKz1C1PeXBsDZ7bPrsmNQybbR5VTcDI8KLLNNHrBiAiGd91DvU5Qn0DOQ5Z54zGr4%2FD46VW1c17khz%2BLN7FPeQ2EzaKgn9LiVOkFWIbIMeYHgORxG1eBVCb4vK2a3sGUWxQv1w1f2lys0HW2vTB%2FP6cM3VZCTn3wLiANcddKp1j3EmGmq%2FyjtIZUCYtoHPuTnqEB2jJ8jJNTqunEHy%2BHDg3FKZ2Sn4bYF%2F%2BuPWe0tXWSo%2BgJ5RsU4xZaUfVQav9XsYIVGpU9b1U63aTlr1oJPwXuZ%2FnomKW7QnAstAymMAwOcqho1Hn78aLJ0fEKGoqEwvoqe57G1J06F2NfXagkSdO8I7IKg0rJMMPIp8IGOqUB5Jnq62BrGczkSxB%2Bpx3WZag8Bpxjny5qUaFKw3DLp9gfgnx3yi2wOWUzvnr2XiCbbqaqosOfDmQMEeV4%2BHv8ai%2FWA6NnedIDv7iiaLUc7YqocUIaW3wX7baNWX0nPxqbGvr6LJXDh5YuUuzttsH0kfR8FxiR7UYC0whOgREjGRBCd7U8ALFqsdZ%2FuIICaCzIwJYmbPP1TFSbfkAL3Igv1UFKvPsU&X-Amz-Signature=5b596ff461864e713b212384ec4b90b20a00afc2961bf9880db1b65f0038cc29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZKVNMK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCxl9p9MvRbSHLE2Gr1POu0rDkGLEbT%2BR5dRrUoDKsLvgIgTjaseQK9lleCx0Cuxy7jpHLq%2Bply15hLMBjouAHqGsQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0eli60tiVKPpqVlSrcA8rkI0kukQd1CXH1QUys4dX7eNUnK4x%2FxDpAgQieJHkw9fmjTnHMI6LQ3wVXn%2BIkfy9dF1Irb4sKYZhTCBsYvvsq0cG%2FIbk9jcL3Z%2BnRGzZQwNHpgNdKIUHMK2IcsFxFMcsn3FKr0jPzW52WgcXqTaeDlIaXZsTEzL5TP1ongmB5717pkYD2aIt6XwLkcD0wxbtEBWkk0rhjUXCOzHv%2BPOuIFG53WraOKhdmHgconNZOgF%2BM7wgt0B1TAbZ%2FX1QhY%2BFKlMDfOCrX4V7TfX1X%2By1J7rRyKKz1C1PeXBsDZ7bPrsmNQybbR5VTcDI8KLLNNHrBiAiGd91DvU5Qn0DOQ5Z54zGr4%2FD46VW1c17khz%2BLN7FPeQ2EzaKgn9LiVOkFWIbIMeYHgORxG1eBVCb4vK2a3sGUWxQv1w1f2lys0HW2vTB%2FP6cM3VZCTn3wLiANcddKp1j3EmGmq%2FyjtIZUCYtoHPuTnqEB2jJ8jJNTqunEHy%2BHDg3FKZ2Sn4bYF%2F%2BuPWe0tXWSo%2BgJ5RsU4xZaUfVQav9XsYIVGpU9b1U63aTlr1oJPwXuZ%2FnomKW7QnAstAymMAwOcqho1Hn78aLJ0fEKGoqEwvoqe57G1J06F2NfXagkSdO8I7IKg0rJMMPIp8IGOqUB5Jnq62BrGczkSxB%2Bpx3WZag8Bpxjny5qUaFKw3DLp9gfgnx3yi2wOWUzvnr2XiCbbqaqosOfDmQMEeV4%2BHv8ai%2FWA6NnedIDv7iiaLUc7YqocUIaW3wX7baNWX0nPxqbGvr6LJXDh5YuUuzttsH0kfR8FxiR7UYC0whOgREjGRBCd7U8ALFqsdZ%2FuIICaCzIwJYmbPP1TFSbfkAL3Igv1UFKvPsU&X-Amz-Signature=1741f2bce45cfa6f3c886387ee6c0ad0110a6944b5f9aac5f39bc31a7f18c2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZKVNMK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCxl9p9MvRbSHLE2Gr1POu0rDkGLEbT%2BR5dRrUoDKsLvgIgTjaseQK9lleCx0Cuxy7jpHLq%2Bply15hLMBjouAHqGsQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0eli60tiVKPpqVlSrcA8rkI0kukQd1CXH1QUys4dX7eNUnK4x%2FxDpAgQieJHkw9fmjTnHMI6LQ3wVXn%2BIkfy9dF1Irb4sKYZhTCBsYvvsq0cG%2FIbk9jcL3Z%2BnRGzZQwNHpgNdKIUHMK2IcsFxFMcsn3FKr0jPzW52WgcXqTaeDlIaXZsTEzL5TP1ongmB5717pkYD2aIt6XwLkcD0wxbtEBWkk0rhjUXCOzHv%2BPOuIFG53WraOKhdmHgconNZOgF%2BM7wgt0B1TAbZ%2FX1QhY%2BFKlMDfOCrX4V7TfX1X%2By1J7rRyKKz1C1PeXBsDZ7bPrsmNQybbR5VTcDI8KLLNNHrBiAiGd91DvU5Qn0DOQ5Z54zGr4%2FD46VW1c17khz%2BLN7FPeQ2EzaKgn9LiVOkFWIbIMeYHgORxG1eBVCb4vK2a3sGUWxQv1w1f2lys0HW2vTB%2FP6cM3VZCTn3wLiANcddKp1j3EmGmq%2FyjtIZUCYtoHPuTnqEB2jJ8jJNTqunEHy%2BHDg3FKZ2Sn4bYF%2F%2BuPWe0tXWSo%2BgJ5RsU4xZaUfVQav9XsYIVGpU9b1U63aTlr1oJPwXuZ%2FnomKW7QnAstAymMAwOcqho1Hn78aLJ0fEKGoqEwvoqe57G1J06F2NfXagkSdO8I7IKg0rJMMPIp8IGOqUB5Jnq62BrGczkSxB%2Bpx3WZag8Bpxjny5qUaFKw3DLp9gfgnx3yi2wOWUzvnr2XiCbbqaqosOfDmQMEeV4%2BHv8ai%2FWA6NnedIDv7iiaLUc7YqocUIaW3wX7baNWX0nPxqbGvr6LJXDh5YuUuzttsH0kfR8FxiR7UYC0whOgREjGRBCd7U8ALFqsdZ%2FuIICaCzIwJYmbPP1TFSbfkAL3Igv1UFKvPsU&X-Amz-Signature=16084373845ebcc9ff7930a5e3e07eec68fa2cec3570f81026f8b57dc40ba4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZKVNMK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCxl9p9MvRbSHLE2Gr1POu0rDkGLEbT%2BR5dRrUoDKsLvgIgTjaseQK9lleCx0Cuxy7jpHLq%2Bply15hLMBjouAHqGsQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0eli60tiVKPpqVlSrcA8rkI0kukQd1CXH1QUys4dX7eNUnK4x%2FxDpAgQieJHkw9fmjTnHMI6LQ3wVXn%2BIkfy9dF1Irb4sKYZhTCBsYvvsq0cG%2FIbk9jcL3Z%2BnRGzZQwNHpgNdKIUHMK2IcsFxFMcsn3FKr0jPzW52WgcXqTaeDlIaXZsTEzL5TP1ongmB5717pkYD2aIt6XwLkcD0wxbtEBWkk0rhjUXCOzHv%2BPOuIFG53WraOKhdmHgconNZOgF%2BM7wgt0B1TAbZ%2FX1QhY%2BFKlMDfOCrX4V7TfX1X%2By1J7rRyKKz1C1PeXBsDZ7bPrsmNQybbR5VTcDI8KLLNNHrBiAiGd91DvU5Qn0DOQ5Z54zGr4%2FD46VW1c17khz%2BLN7FPeQ2EzaKgn9LiVOkFWIbIMeYHgORxG1eBVCb4vK2a3sGUWxQv1w1f2lys0HW2vTB%2FP6cM3VZCTn3wLiANcddKp1j3EmGmq%2FyjtIZUCYtoHPuTnqEB2jJ8jJNTqunEHy%2BHDg3FKZ2Sn4bYF%2F%2BuPWe0tXWSo%2BgJ5RsU4xZaUfVQav9XsYIVGpU9b1U63aTlr1oJPwXuZ%2FnomKW7QnAstAymMAwOcqho1Hn78aLJ0fEKGoqEwvoqe57G1J06F2NfXagkSdO8I7IKg0rJMMPIp8IGOqUB5Jnq62BrGczkSxB%2Bpx3WZag8Bpxjny5qUaFKw3DLp9gfgnx3yi2wOWUzvnr2XiCbbqaqosOfDmQMEeV4%2BHv8ai%2FWA6NnedIDv7iiaLUc7YqocUIaW3wX7baNWX0nPxqbGvr6LJXDh5YuUuzttsH0kfR8FxiR7UYC0whOgREjGRBCd7U8ALFqsdZ%2FuIICaCzIwJYmbPP1TFSbfkAL3Igv1UFKvPsU&X-Amz-Signature=33580f45f771e2d49e0611dcb7ed180f8ce68e7597bf3a974095d124cd17b21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZKVNMK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCxl9p9MvRbSHLE2Gr1POu0rDkGLEbT%2BR5dRrUoDKsLvgIgTjaseQK9lleCx0Cuxy7jpHLq%2Bply15hLMBjouAHqGsQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0eli60tiVKPpqVlSrcA8rkI0kukQd1CXH1QUys4dX7eNUnK4x%2FxDpAgQieJHkw9fmjTnHMI6LQ3wVXn%2BIkfy9dF1Irb4sKYZhTCBsYvvsq0cG%2FIbk9jcL3Z%2BnRGzZQwNHpgNdKIUHMK2IcsFxFMcsn3FKr0jPzW52WgcXqTaeDlIaXZsTEzL5TP1ongmB5717pkYD2aIt6XwLkcD0wxbtEBWkk0rhjUXCOzHv%2BPOuIFG53WraOKhdmHgconNZOgF%2BM7wgt0B1TAbZ%2FX1QhY%2BFKlMDfOCrX4V7TfX1X%2By1J7rRyKKz1C1PeXBsDZ7bPrsmNQybbR5VTcDI8KLLNNHrBiAiGd91DvU5Qn0DOQ5Z54zGr4%2FD46VW1c17khz%2BLN7FPeQ2EzaKgn9LiVOkFWIbIMeYHgORxG1eBVCb4vK2a3sGUWxQv1w1f2lys0HW2vTB%2FP6cM3VZCTn3wLiANcddKp1j3EmGmq%2FyjtIZUCYtoHPuTnqEB2jJ8jJNTqunEHy%2BHDg3FKZ2Sn4bYF%2F%2BuPWe0tXWSo%2BgJ5RsU4xZaUfVQav9XsYIVGpU9b1U63aTlr1oJPwXuZ%2FnomKW7QnAstAymMAwOcqho1Hn78aLJ0fEKGoqEwvoqe57G1J06F2NfXagkSdO8I7IKg0rJMMPIp8IGOqUB5Jnq62BrGczkSxB%2Bpx3WZag8Bpxjny5qUaFKw3DLp9gfgnx3yi2wOWUzvnr2XiCbbqaqosOfDmQMEeV4%2BHv8ai%2FWA6NnedIDv7iiaLUc7YqocUIaW3wX7baNWX0nPxqbGvr6LJXDh5YuUuzttsH0kfR8FxiR7UYC0whOgREjGRBCd7U8ALFqsdZ%2FuIICaCzIwJYmbPP1TFSbfkAL3Igv1UFKvPsU&X-Amz-Signature=0bb7af5c39bb8ab651137d1ff6d8087c2a5d199c8d8be068d8dfbd1243426ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
