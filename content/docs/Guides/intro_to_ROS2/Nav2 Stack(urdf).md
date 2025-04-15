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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNLWEJZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKl8UvZ4nrnnneBmED0RDi86GKl%2FbFE1iNXPmInmdCuQIgS2UR9L5xKTe72gnP%2FjlmOxT6qk3TWzxw4Mws5dm94ugq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC6woeTmO1J%2FGMs%2BMyrcA8nrBDLWvkqu3v37EWD%2BYz4QpTX2t1RMnD3flfPVOphiVv0CQIGxmnxGABH%2BvlkT2XgI7oW%2Bzr4VHpxa3IfNMbhg8RzDZXuSSYGK4aAmWbH5dnHQ6rKDE7yTRU3J%2Bf23MjP7z7vvwC7Umgi3CRcdbjzYr6X68ChyTRN6FEugJTJQrtHNbi3AloGaIXeZ%2FNOWyemOfcFtxg28QeZEudK5%2F13QuleWlpgoUlr%2FLjUH7%2B5bfouezIZX%2BaPUr0oTCmpeCgZ%2FGeP7fy%2F73vu7Qu1TVmnj5JMrFd9bm70uEiwvoemz6yazMhMFTTvqthES%2BBYO423IpCYsytKzX0M%2FOFK7wZveSIlOao%2BhxpDoQwOqA3D4F3RFEidxrdeeQNUP3n%2FRhi80nIHHh9x5fS3MdilOzA3fJTWuXnako8T9h%2Fc1eY%2B8GGfgCbE3dWmKGmk2LsGlChhkaTdJTjR3n0G90i9OMlp2PAwGcVyYv52S6gKUP4Vhbks34Bou0VCslM%2F9jHzty50Nlju4ap%2FjTE9D7iYMRro%2Fazff%2FNg84g23Qc7cvm5rQZdAxAhJe46k%2BAkL7YxdPNqgys%2BeGQo%2BzbRkmQXQRrQEalrACy4NbfQSFeKM4IMfw%2F0YWJRwbQGDY9P0MKbP%2BL8GOqUBgKWEooKXoEFD5dq%2FQ8bxKJzjj%2FZ5VMXDtV1GcJNaCs3GRlutB9cX8cf9WvWRrCaoUfdnVTUEbcZHiWj8%2FEf5VWMP61aPpkUYviR5rwhF0vWmt1%2BV0BK%2BqV3SkMsTnXTUrY%2FON%2FBkqqREtg6r%2B3ELIutkFkjZ%2BAZfOH%2BQT1r7rOswohjtdzf%2B5Q2y1iYutZO9FZTg6Ihg16TWpi2Wuy2ltDneztVG&X-Amz-Signature=fa8e6ec91613ed509603216ac967e94895094e63cd96dc39c031976981b58e88&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNLWEJZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKl8UvZ4nrnnneBmED0RDi86GKl%2FbFE1iNXPmInmdCuQIgS2UR9L5xKTe72gnP%2FjlmOxT6qk3TWzxw4Mws5dm94ugq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC6woeTmO1J%2FGMs%2BMyrcA8nrBDLWvkqu3v37EWD%2BYz4QpTX2t1RMnD3flfPVOphiVv0CQIGxmnxGABH%2BvlkT2XgI7oW%2Bzr4VHpxa3IfNMbhg8RzDZXuSSYGK4aAmWbH5dnHQ6rKDE7yTRU3J%2Bf23MjP7z7vvwC7Umgi3CRcdbjzYr6X68ChyTRN6FEugJTJQrtHNbi3AloGaIXeZ%2FNOWyemOfcFtxg28QeZEudK5%2F13QuleWlpgoUlr%2FLjUH7%2B5bfouezIZX%2BaPUr0oTCmpeCgZ%2FGeP7fy%2F73vu7Qu1TVmnj5JMrFd9bm70uEiwvoemz6yazMhMFTTvqthES%2BBYO423IpCYsytKzX0M%2FOFK7wZveSIlOao%2BhxpDoQwOqA3D4F3RFEidxrdeeQNUP3n%2FRhi80nIHHh9x5fS3MdilOzA3fJTWuXnako8T9h%2Fc1eY%2B8GGfgCbE3dWmKGmk2LsGlChhkaTdJTjR3n0G90i9OMlp2PAwGcVyYv52S6gKUP4Vhbks34Bou0VCslM%2F9jHzty50Nlju4ap%2FjTE9D7iYMRro%2Fazff%2FNg84g23Qc7cvm5rQZdAxAhJe46k%2BAkL7YxdPNqgys%2BeGQo%2BzbRkmQXQRrQEalrACy4NbfQSFeKM4IMfw%2F0YWJRwbQGDY9P0MKbP%2BL8GOqUBgKWEooKXoEFD5dq%2FQ8bxKJzjj%2FZ5VMXDtV1GcJNaCs3GRlutB9cX8cf9WvWRrCaoUfdnVTUEbcZHiWj8%2FEf5VWMP61aPpkUYviR5rwhF0vWmt1%2BV0BK%2BqV3SkMsTnXTUrY%2FON%2FBkqqREtg6r%2B3ELIutkFkjZ%2BAZfOH%2BQT1r7rOswohjtdzf%2B5Q2y1iYutZO9FZTg6Ihg16TWpi2Wuy2ltDneztVG&X-Amz-Signature=e0afca72e774bb45af7c930f642fd42fcebf7d97bdc8534f1aaf4de4753c57bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNLWEJZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKl8UvZ4nrnnneBmED0RDi86GKl%2FbFE1iNXPmInmdCuQIgS2UR9L5xKTe72gnP%2FjlmOxT6qk3TWzxw4Mws5dm94ugq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC6woeTmO1J%2FGMs%2BMyrcA8nrBDLWvkqu3v37EWD%2BYz4QpTX2t1RMnD3flfPVOphiVv0CQIGxmnxGABH%2BvlkT2XgI7oW%2Bzr4VHpxa3IfNMbhg8RzDZXuSSYGK4aAmWbH5dnHQ6rKDE7yTRU3J%2Bf23MjP7z7vvwC7Umgi3CRcdbjzYr6X68ChyTRN6FEugJTJQrtHNbi3AloGaIXeZ%2FNOWyemOfcFtxg28QeZEudK5%2F13QuleWlpgoUlr%2FLjUH7%2B5bfouezIZX%2BaPUr0oTCmpeCgZ%2FGeP7fy%2F73vu7Qu1TVmnj5JMrFd9bm70uEiwvoemz6yazMhMFTTvqthES%2BBYO423IpCYsytKzX0M%2FOFK7wZveSIlOao%2BhxpDoQwOqA3D4F3RFEidxrdeeQNUP3n%2FRhi80nIHHh9x5fS3MdilOzA3fJTWuXnako8T9h%2Fc1eY%2B8GGfgCbE3dWmKGmk2LsGlChhkaTdJTjR3n0G90i9OMlp2PAwGcVyYv52S6gKUP4Vhbks34Bou0VCslM%2F9jHzty50Nlju4ap%2FjTE9D7iYMRro%2Fazff%2FNg84g23Qc7cvm5rQZdAxAhJe46k%2BAkL7YxdPNqgys%2BeGQo%2BzbRkmQXQRrQEalrACy4NbfQSFeKM4IMfw%2F0YWJRwbQGDY9P0MKbP%2BL8GOqUBgKWEooKXoEFD5dq%2FQ8bxKJzjj%2FZ5VMXDtV1GcJNaCs3GRlutB9cX8cf9WvWRrCaoUfdnVTUEbcZHiWj8%2FEf5VWMP61aPpkUYviR5rwhF0vWmt1%2BV0BK%2BqV3SkMsTnXTUrY%2FON%2FBkqqREtg6r%2B3ELIutkFkjZ%2BAZfOH%2BQT1r7rOswohjtdzf%2B5Q2y1iYutZO9FZTg6Ihg16TWpi2Wuy2ltDneztVG&X-Amz-Signature=04e32c0a6b6d8ecf089ee3677c24ea5b0ea11a427f4ee1e3bc8e9908af2c6d15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNLWEJZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKl8UvZ4nrnnneBmED0RDi86GKl%2FbFE1iNXPmInmdCuQIgS2UR9L5xKTe72gnP%2FjlmOxT6qk3TWzxw4Mws5dm94ugq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC6woeTmO1J%2FGMs%2BMyrcA8nrBDLWvkqu3v37EWD%2BYz4QpTX2t1RMnD3flfPVOphiVv0CQIGxmnxGABH%2BvlkT2XgI7oW%2Bzr4VHpxa3IfNMbhg8RzDZXuSSYGK4aAmWbH5dnHQ6rKDE7yTRU3J%2Bf23MjP7z7vvwC7Umgi3CRcdbjzYr6X68ChyTRN6FEugJTJQrtHNbi3AloGaIXeZ%2FNOWyemOfcFtxg28QeZEudK5%2F13QuleWlpgoUlr%2FLjUH7%2B5bfouezIZX%2BaPUr0oTCmpeCgZ%2FGeP7fy%2F73vu7Qu1TVmnj5JMrFd9bm70uEiwvoemz6yazMhMFTTvqthES%2BBYO423IpCYsytKzX0M%2FOFK7wZveSIlOao%2BhxpDoQwOqA3D4F3RFEidxrdeeQNUP3n%2FRhi80nIHHh9x5fS3MdilOzA3fJTWuXnako8T9h%2Fc1eY%2B8GGfgCbE3dWmKGmk2LsGlChhkaTdJTjR3n0G90i9OMlp2PAwGcVyYv52S6gKUP4Vhbks34Bou0VCslM%2F9jHzty50Nlju4ap%2FjTE9D7iYMRro%2Fazff%2FNg84g23Qc7cvm5rQZdAxAhJe46k%2BAkL7YxdPNqgys%2BeGQo%2BzbRkmQXQRrQEalrACy4NbfQSFeKM4IMfw%2F0YWJRwbQGDY9P0MKbP%2BL8GOqUBgKWEooKXoEFD5dq%2FQ8bxKJzjj%2FZ5VMXDtV1GcJNaCs3GRlutB9cX8cf9WvWRrCaoUfdnVTUEbcZHiWj8%2FEf5VWMP61aPpkUYviR5rwhF0vWmt1%2BV0BK%2BqV3SkMsTnXTUrY%2FON%2FBkqqREtg6r%2B3ELIutkFkjZ%2BAZfOH%2BQT1r7rOswohjtdzf%2B5Q2y1iYutZO9FZTg6Ihg16TWpi2Wuy2ltDneztVG&X-Amz-Signature=1d83a93d2621a5cba028de918f19dc10094087cf2b9166ea07ef502a4f717988&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNLWEJZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKl8UvZ4nrnnneBmED0RDi86GKl%2FbFE1iNXPmInmdCuQIgS2UR9L5xKTe72gnP%2FjlmOxT6qk3TWzxw4Mws5dm94ugq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC6woeTmO1J%2FGMs%2BMyrcA8nrBDLWvkqu3v37EWD%2BYz4QpTX2t1RMnD3flfPVOphiVv0CQIGxmnxGABH%2BvlkT2XgI7oW%2Bzr4VHpxa3IfNMbhg8RzDZXuSSYGK4aAmWbH5dnHQ6rKDE7yTRU3J%2Bf23MjP7z7vvwC7Umgi3CRcdbjzYr6X68ChyTRN6FEugJTJQrtHNbi3AloGaIXeZ%2FNOWyemOfcFtxg28QeZEudK5%2F13QuleWlpgoUlr%2FLjUH7%2B5bfouezIZX%2BaPUr0oTCmpeCgZ%2FGeP7fy%2F73vu7Qu1TVmnj5JMrFd9bm70uEiwvoemz6yazMhMFTTvqthES%2BBYO423IpCYsytKzX0M%2FOFK7wZveSIlOao%2BhxpDoQwOqA3D4F3RFEidxrdeeQNUP3n%2FRhi80nIHHh9x5fS3MdilOzA3fJTWuXnako8T9h%2Fc1eY%2B8GGfgCbE3dWmKGmk2LsGlChhkaTdJTjR3n0G90i9OMlp2PAwGcVyYv52S6gKUP4Vhbks34Bou0VCslM%2F9jHzty50Nlju4ap%2FjTE9D7iYMRro%2Fazff%2FNg84g23Qc7cvm5rQZdAxAhJe46k%2BAkL7YxdPNqgys%2BeGQo%2BzbRkmQXQRrQEalrACy4NbfQSFeKM4IMfw%2F0YWJRwbQGDY9P0MKbP%2BL8GOqUBgKWEooKXoEFD5dq%2FQ8bxKJzjj%2FZ5VMXDtV1GcJNaCs3GRlutB9cX8cf9WvWRrCaoUfdnVTUEbcZHiWj8%2FEf5VWMP61aPpkUYviR5rwhF0vWmt1%2BV0BK%2BqV3SkMsTnXTUrY%2FON%2FBkqqREtg6r%2B3ELIutkFkjZ%2BAZfOH%2BQT1r7rOswohjtdzf%2B5Q2y1iYutZO9FZTg6Ihg16TWpi2Wuy2ltDneztVG&X-Amz-Signature=fa4d3ab1003d726ff332a9d8de412ee76a20b0cd7152d87d9ea3a3d127ce385d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNLWEJZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKl8UvZ4nrnnneBmED0RDi86GKl%2FbFE1iNXPmInmdCuQIgS2UR9L5xKTe72gnP%2FjlmOxT6qk3TWzxw4Mws5dm94ugq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC6woeTmO1J%2FGMs%2BMyrcA8nrBDLWvkqu3v37EWD%2BYz4QpTX2t1RMnD3flfPVOphiVv0CQIGxmnxGABH%2BvlkT2XgI7oW%2Bzr4VHpxa3IfNMbhg8RzDZXuSSYGK4aAmWbH5dnHQ6rKDE7yTRU3J%2Bf23MjP7z7vvwC7Umgi3CRcdbjzYr6X68ChyTRN6FEugJTJQrtHNbi3AloGaIXeZ%2FNOWyemOfcFtxg28QeZEudK5%2F13QuleWlpgoUlr%2FLjUH7%2B5bfouezIZX%2BaPUr0oTCmpeCgZ%2FGeP7fy%2F73vu7Qu1TVmnj5JMrFd9bm70uEiwvoemz6yazMhMFTTvqthES%2BBYO423IpCYsytKzX0M%2FOFK7wZveSIlOao%2BhxpDoQwOqA3D4F3RFEidxrdeeQNUP3n%2FRhi80nIHHh9x5fS3MdilOzA3fJTWuXnako8T9h%2Fc1eY%2B8GGfgCbE3dWmKGmk2LsGlChhkaTdJTjR3n0G90i9OMlp2PAwGcVyYv52S6gKUP4Vhbks34Bou0VCslM%2F9jHzty50Nlju4ap%2FjTE9D7iYMRro%2Fazff%2FNg84g23Qc7cvm5rQZdAxAhJe46k%2BAkL7YxdPNqgys%2BeGQo%2BzbRkmQXQRrQEalrACy4NbfQSFeKM4IMfw%2F0YWJRwbQGDY9P0MKbP%2BL8GOqUBgKWEooKXoEFD5dq%2FQ8bxKJzjj%2FZ5VMXDtV1GcJNaCs3GRlutB9cX8cf9WvWRrCaoUfdnVTUEbcZHiWj8%2FEf5VWMP61aPpkUYviR5rwhF0vWmt1%2BV0BK%2BqV3SkMsTnXTUrY%2FON%2FBkqqREtg6r%2B3ELIutkFkjZ%2BAZfOH%2BQT1r7rOswohjtdzf%2B5Q2y1iYutZO9FZTg6Ihg16TWpi2Wuy2ltDneztVG&X-Amz-Signature=02fdc83f24b7a85e5fd9c9cbb93229062a0e93b3e4193106609c2d5c8dafd764&X-Amz-SignedHeaders=host&x-id=GetObject)
