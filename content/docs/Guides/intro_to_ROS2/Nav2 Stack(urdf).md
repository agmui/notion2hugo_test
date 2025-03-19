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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJSUC5M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDLpznmWQL93Y15WlnXI3lk7uTz8nhIA5HwcBIYtOKgGgIhAI1NAYxXCx%2BMEIcjeCf%2B5TzWJKHp%2BsczpNrB6poSApaYKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHBT90PTi%2BvM%2Bvp7cq3ANP1aiM9iKWALQ6y%2FKFP%2BoWgwm7%2B%2FpcjokjQAVto8ZOa3%2FrQrzLJygYpSG3h0C7tK3c%2FJ%2FvYijk%2F%2BgL%2FgIBkxMve6TDWZ%2F9BeUC%2B6scSIACpJjH1ptRKtodZZqo0joN90cYlMyt8lXwegvVwGvrJ37SkRWNLKy%2F51LVQv441GWAZnOI%2Fei9TyS%2BguVfn70WWKFDVsNgML5ZmGuoVub%2BncEtXzvpszBuzf%2BLiPVeAnGOmJYrU1wJoBBTkJYbA9kjZe6jmNmyuq%2FuVYhIpdOj9om5%2F%2F8QYYTGcmY9Um7CMr31ZhDSg0QqpL2cXfv8KF6umSK7jKYxytwkWthw7AwKUEdo5DQ%2BRClLHjbU2PGe%2F35giFBMZgzTFdDSGTCJLvXrfMARk4g5qlkfTHv074UyjM3MYuH4i9uZD4f485fb6%2F3DIbF2Zf22WSyPtVUgX7zH4CQeIAnXMnkXgOyAVrcklISmCRmnPVs5eapCqstBLBcYuY4e6muT%2B5fXlwMMMqsuzTYlrDwx%2FLf%2FrUX%2FW3t70uIGTQnc6Z4iB6q%2FIiFwD8yreXAJ%2FgKzRVm%2BRUvI414QkcWeJHnaBrokWVLj%2BfymcHo8GJDVN4%2FKBpNWG8lJLSv6G3x%2BvUSLMhzt29IBmjCMvOu%2BBjqkAdV%2FChE%2B6lw4ooOrLBvgu1ZkWzWezkW%2Fcq2KMbYj%2FvHbXsZU7HVaS9o4ZgVBFs8UbqdbO%2Fn5PMoID%2BjYZxjAf%2BCcz317o%2BACHQLcs4PiBpG4yTuwKK8vFKVk9siJh9u4D8ONUBBwGUvSwRglagbkAxYhSRhR4vO7FN12lA4UJmmIyjN0VLPvVG3GvFlJOH5m4ei9mZoobOuPd4ndd%2BE7VmDV7kyI&X-Amz-Signature=ba9f67755d6a00c07623735693d7fe65b25f7e3a5e856da3d65b6048f2e98161&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJSUC5M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDLpznmWQL93Y15WlnXI3lk7uTz8nhIA5HwcBIYtOKgGgIhAI1NAYxXCx%2BMEIcjeCf%2B5TzWJKHp%2BsczpNrB6poSApaYKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHBT90PTi%2BvM%2Bvp7cq3ANP1aiM9iKWALQ6y%2FKFP%2BoWgwm7%2B%2FpcjokjQAVto8ZOa3%2FrQrzLJygYpSG3h0C7tK3c%2FJ%2FvYijk%2F%2BgL%2FgIBkxMve6TDWZ%2F9BeUC%2B6scSIACpJjH1ptRKtodZZqo0joN90cYlMyt8lXwegvVwGvrJ37SkRWNLKy%2F51LVQv441GWAZnOI%2Fei9TyS%2BguVfn70WWKFDVsNgML5ZmGuoVub%2BncEtXzvpszBuzf%2BLiPVeAnGOmJYrU1wJoBBTkJYbA9kjZe6jmNmyuq%2FuVYhIpdOj9om5%2F%2F8QYYTGcmY9Um7CMr31ZhDSg0QqpL2cXfv8KF6umSK7jKYxytwkWthw7AwKUEdo5DQ%2BRClLHjbU2PGe%2F35giFBMZgzTFdDSGTCJLvXrfMARk4g5qlkfTHv074UyjM3MYuH4i9uZD4f485fb6%2F3DIbF2Zf22WSyPtVUgX7zH4CQeIAnXMnkXgOyAVrcklISmCRmnPVs5eapCqstBLBcYuY4e6muT%2B5fXlwMMMqsuzTYlrDwx%2FLf%2FrUX%2FW3t70uIGTQnc6Z4iB6q%2FIiFwD8yreXAJ%2FgKzRVm%2BRUvI414QkcWeJHnaBrokWVLj%2BfymcHo8GJDVN4%2FKBpNWG8lJLSv6G3x%2BvUSLMhzt29IBmjCMvOu%2BBjqkAdV%2FChE%2B6lw4ooOrLBvgu1ZkWzWezkW%2Fcq2KMbYj%2FvHbXsZU7HVaS9o4ZgVBFs8UbqdbO%2Fn5PMoID%2BjYZxjAf%2BCcz317o%2BACHQLcs4PiBpG4yTuwKK8vFKVk9siJh9u4D8ONUBBwGUvSwRglagbkAxYhSRhR4vO7FN12lA4UJmmIyjN0VLPvVG3GvFlJOH5m4ei9mZoobOuPd4ndd%2BE7VmDV7kyI&X-Amz-Signature=3a3f8756f3fcdd805095d0e722a8780ba3b960a8aa9c87761c7d6fac280f7f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJSUC5M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDLpznmWQL93Y15WlnXI3lk7uTz8nhIA5HwcBIYtOKgGgIhAI1NAYxXCx%2BMEIcjeCf%2B5TzWJKHp%2BsczpNrB6poSApaYKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHBT90PTi%2BvM%2Bvp7cq3ANP1aiM9iKWALQ6y%2FKFP%2BoWgwm7%2B%2FpcjokjQAVto8ZOa3%2FrQrzLJygYpSG3h0C7tK3c%2FJ%2FvYijk%2F%2BgL%2FgIBkxMve6TDWZ%2F9BeUC%2B6scSIACpJjH1ptRKtodZZqo0joN90cYlMyt8lXwegvVwGvrJ37SkRWNLKy%2F51LVQv441GWAZnOI%2Fei9TyS%2BguVfn70WWKFDVsNgML5ZmGuoVub%2BncEtXzvpszBuzf%2BLiPVeAnGOmJYrU1wJoBBTkJYbA9kjZe6jmNmyuq%2FuVYhIpdOj9om5%2F%2F8QYYTGcmY9Um7CMr31ZhDSg0QqpL2cXfv8KF6umSK7jKYxytwkWthw7AwKUEdo5DQ%2BRClLHjbU2PGe%2F35giFBMZgzTFdDSGTCJLvXrfMARk4g5qlkfTHv074UyjM3MYuH4i9uZD4f485fb6%2F3DIbF2Zf22WSyPtVUgX7zH4CQeIAnXMnkXgOyAVrcklISmCRmnPVs5eapCqstBLBcYuY4e6muT%2B5fXlwMMMqsuzTYlrDwx%2FLf%2FrUX%2FW3t70uIGTQnc6Z4iB6q%2FIiFwD8yreXAJ%2FgKzRVm%2BRUvI414QkcWeJHnaBrokWVLj%2BfymcHo8GJDVN4%2FKBpNWG8lJLSv6G3x%2BvUSLMhzt29IBmjCMvOu%2BBjqkAdV%2FChE%2B6lw4ooOrLBvgu1ZkWzWezkW%2Fcq2KMbYj%2FvHbXsZU7HVaS9o4ZgVBFs8UbqdbO%2Fn5PMoID%2BjYZxjAf%2BCcz317o%2BACHQLcs4PiBpG4yTuwKK8vFKVk9siJh9u4D8ONUBBwGUvSwRglagbkAxYhSRhR4vO7FN12lA4UJmmIyjN0VLPvVG3GvFlJOH5m4ei9mZoobOuPd4ndd%2BE7VmDV7kyI&X-Amz-Signature=4d993611e426295d8123d0cfcbaa49c4f51d44eb88e928c76a6c7b0f371f91cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJSUC5M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDLpznmWQL93Y15WlnXI3lk7uTz8nhIA5HwcBIYtOKgGgIhAI1NAYxXCx%2BMEIcjeCf%2B5TzWJKHp%2BsczpNrB6poSApaYKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHBT90PTi%2BvM%2Bvp7cq3ANP1aiM9iKWALQ6y%2FKFP%2BoWgwm7%2B%2FpcjokjQAVto8ZOa3%2FrQrzLJygYpSG3h0C7tK3c%2FJ%2FvYijk%2F%2BgL%2FgIBkxMve6TDWZ%2F9BeUC%2B6scSIACpJjH1ptRKtodZZqo0joN90cYlMyt8lXwegvVwGvrJ37SkRWNLKy%2F51LVQv441GWAZnOI%2Fei9TyS%2BguVfn70WWKFDVsNgML5ZmGuoVub%2BncEtXzvpszBuzf%2BLiPVeAnGOmJYrU1wJoBBTkJYbA9kjZe6jmNmyuq%2FuVYhIpdOj9om5%2F%2F8QYYTGcmY9Um7CMr31ZhDSg0QqpL2cXfv8KF6umSK7jKYxytwkWthw7AwKUEdo5DQ%2BRClLHjbU2PGe%2F35giFBMZgzTFdDSGTCJLvXrfMARk4g5qlkfTHv074UyjM3MYuH4i9uZD4f485fb6%2F3DIbF2Zf22WSyPtVUgX7zH4CQeIAnXMnkXgOyAVrcklISmCRmnPVs5eapCqstBLBcYuY4e6muT%2B5fXlwMMMqsuzTYlrDwx%2FLf%2FrUX%2FW3t70uIGTQnc6Z4iB6q%2FIiFwD8yreXAJ%2FgKzRVm%2BRUvI414QkcWeJHnaBrokWVLj%2BfymcHo8GJDVN4%2FKBpNWG8lJLSv6G3x%2BvUSLMhzt29IBmjCMvOu%2BBjqkAdV%2FChE%2B6lw4ooOrLBvgu1ZkWzWezkW%2Fcq2KMbYj%2FvHbXsZU7HVaS9o4ZgVBFs8UbqdbO%2Fn5PMoID%2BjYZxjAf%2BCcz317o%2BACHQLcs4PiBpG4yTuwKK8vFKVk9siJh9u4D8ONUBBwGUvSwRglagbkAxYhSRhR4vO7FN12lA4UJmmIyjN0VLPvVG3GvFlJOH5m4ei9mZoobOuPd4ndd%2BE7VmDV7kyI&X-Amz-Signature=5bfad2821a877d5fa6849061a796d92e6aa0e15a4592abc4506f4e7827a128a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJSUC5M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDLpznmWQL93Y15WlnXI3lk7uTz8nhIA5HwcBIYtOKgGgIhAI1NAYxXCx%2BMEIcjeCf%2B5TzWJKHp%2BsczpNrB6poSApaYKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHBT90PTi%2BvM%2Bvp7cq3ANP1aiM9iKWALQ6y%2FKFP%2BoWgwm7%2B%2FpcjokjQAVto8ZOa3%2FrQrzLJygYpSG3h0C7tK3c%2FJ%2FvYijk%2F%2BgL%2FgIBkxMve6TDWZ%2F9BeUC%2B6scSIACpJjH1ptRKtodZZqo0joN90cYlMyt8lXwegvVwGvrJ37SkRWNLKy%2F51LVQv441GWAZnOI%2Fei9TyS%2BguVfn70WWKFDVsNgML5ZmGuoVub%2BncEtXzvpszBuzf%2BLiPVeAnGOmJYrU1wJoBBTkJYbA9kjZe6jmNmyuq%2FuVYhIpdOj9om5%2F%2F8QYYTGcmY9Um7CMr31ZhDSg0QqpL2cXfv8KF6umSK7jKYxytwkWthw7AwKUEdo5DQ%2BRClLHjbU2PGe%2F35giFBMZgzTFdDSGTCJLvXrfMARk4g5qlkfTHv074UyjM3MYuH4i9uZD4f485fb6%2F3DIbF2Zf22WSyPtVUgX7zH4CQeIAnXMnkXgOyAVrcklISmCRmnPVs5eapCqstBLBcYuY4e6muT%2B5fXlwMMMqsuzTYlrDwx%2FLf%2FrUX%2FW3t70uIGTQnc6Z4iB6q%2FIiFwD8yreXAJ%2FgKzRVm%2BRUvI414QkcWeJHnaBrokWVLj%2BfymcHo8GJDVN4%2FKBpNWG8lJLSv6G3x%2BvUSLMhzt29IBmjCMvOu%2BBjqkAdV%2FChE%2B6lw4ooOrLBvgu1ZkWzWezkW%2Fcq2KMbYj%2FvHbXsZU7HVaS9o4ZgVBFs8UbqdbO%2Fn5PMoID%2BjYZxjAf%2BCcz317o%2BACHQLcs4PiBpG4yTuwKK8vFKVk9siJh9u4D8ONUBBwGUvSwRglagbkAxYhSRhR4vO7FN12lA4UJmmIyjN0VLPvVG3GvFlJOH5m4ei9mZoobOuPd4ndd%2BE7VmDV7kyI&X-Amz-Signature=cea4e3285e5608987852953af939ac71d0bba5f3677851af6fd7ba2473855ada&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJSUC5M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDLpznmWQL93Y15WlnXI3lk7uTz8nhIA5HwcBIYtOKgGgIhAI1NAYxXCx%2BMEIcjeCf%2B5TzWJKHp%2BsczpNrB6poSApaYKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHBT90PTi%2BvM%2Bvp7cq3ANP1aiM9iKWALQ6y%2FKFP%2BoWgwm7%2B%2FpcjokjQAVto8ZOa3%2FrQrzLJygYpSG3h0C7tK3c%2FJ%2FvYijk%2F%2BgL%2FgIBkxMve6TDWZ%2F9BeUC%2B6scSIACpJjH1ptRKtodZZqo0joN90cYlMyt8lXwegvVwGvrJ37SkRWNLKy%2F51LVQv441GWAZnOI%2Fei9TyS%2BguVfn70WWKFDVsNgML5ZmGuoVub%2BncEtXzvpszBuzf%2BLiPVeAnGOmJYrU1wJoBBTkJYbA9kjZe6jmNmyuq%2FuVYhIpdOj9om5%2F%2F8QYYTGcmY9Um7CMr31ZhDSg0QqpL2cXfv8KF6umSK7jKYxytwkWthw7AwKUEdo5DQ%2BRClLHjbU2PGe%2F35giFBMZgzTFdDSGTCJLvXrfMARk4g5qlkfTHv074UyjM3MYuH4i9uZD4f485fb6%2F3DIbF2Zf22WSyPtVUgX7zH4CQeIAnXMnkXgOyAVrcklISmCRmnPVs5eapCqstBLBcYuY4e6muT%2B5fXlwMMMqsuzTYlrDwx%2FLf%2FrUX%2FW3t70uIGTQnc6Z4iB6q%2FIiFwD8yreXAJ%2FgKzRVm%2BRUvI414QkcWeJHnaBrokWVLj%2BfymcHo8GJDVN4%2FKBpNWG8lJLSv6G3x%2BvUSLMhzt29IBmjCMvOu%2BBjqkAdV%2FChE%2B6lw4ooOrLBvgu1ZkWzWezkW%2Fcq2KMbYj%2FvHbXsZU7HVaS9o4ZgVBFs8UbqdbO%2Fn5PMoID%2BjYZxjAf%2BCcz317o%2BACHQLcs4PiBpG4yTuwKK8vFKVk9siJh9u4D8ONUBBwGUvSwRglagbkAxYhSRhR4vO7FN12lA4UJmmIyjN0VLPvVG3GvFlJOH5m4ei9mZoobOuPd4ndd%2BE7VmDV7kyI&X-Amz-Signature=f6f59675c64ab5f11dbdc9441a6c8c39d1eabe69c305023eb02ac967ab56c39f&X-Amz-SignedHeaders=host&x-id=GetObject)
