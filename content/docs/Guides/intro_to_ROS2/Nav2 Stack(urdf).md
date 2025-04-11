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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TLPP4V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCJ5M%2Bd68xA4y36xlbPFk3rxGLB63UKxfSK30d7uu6JPAIhANWFSfZRTmhAfbbYT242fT7xiliaOBux19zaSYeSo%2B9VKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyce7wSEIdhJ%2Ftax70q3APp49QCE6B10ia3eYNV989by%2FRqDx7Uaptt9Jtx8Uif6mtXCcW%2FvVH8Ami9P8eq0GqygE16hE6%2BufzE0bhnZls5hH1VG8yAOkDBZ22QyusIKVvwQVJNj46PFLEsvM0qKCedvJXepPsdOI3kfunC0udtwSpcsQ8vCxrwMH26q9Im6vRkxm1cR%2Bfyvn%2F1gKcpkgAzC5UTEM9KQ6WS9vuTlfTFFOJb94U7lmfOVeHCUzWkWF%2FQuFGL3EuFmk6MijOq7OZN5%2BlXM7iQoj%2B0S6z0VBVVomT20tfsUs2SZ9A0XHL3RKIxXiT%2BiHWT58CXaWP4y3bASVvqSpBxDQm4dmJpVfCr2xbEAPuI%2FZOO8C18OQXb3krnH6pBw2YYM1kDJxDkXFsGl9r3GrU48p4h%2FFpo24QG%2B75V5TAx9qSMo3nMdViEDGyZBWB6XjPAAMTMz4YALWBjMce8ft%2FwYZZWWLT1WTaLK2yIo8X%2Fl7NBGrWHT9e8W9GqUjtke0p5lZsjyCRoPx%2F121%2FpLDQ5BLpdE5q2kDa%2FzZyDpnrEaMtLMM5tr3xUFmKcI2Q7y%2BOkK6qgCiACPmuAT81hlKTPiEfkEDaB48Dqg31LpoHwsJo3s5nMYNvN8g2AkmRvCtpscrP6szC13eK%2FBjqkAXJ5SlQ4I8kxEZjZzTCK%2BjmoqTYzBv0xxzhKRoGmNMWdsGFl6R5J2XfoaRk%2B5RCXnGBOV1g8x8eLBicg6cLUnZjsVNIDe5rSSaiLGJz2Mp00HkcEYo9283Ijiuwhdq4cXzDKP%2Bb7xiaBjBxwRHR%2BryFFbreR4qVcvwEArZED1HxeQAPizePdFsYVi69Hnm0Jrj0%2FL3l3CqruemLioKI%2FIBsRxYMe&X-Amz-Signature=6337196e2fc00b6d519d6690d5b546478ba392234a0d14bbec460240081f5457&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TLPP4V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCJ5M%2Bd68xA4y36xlbPFk3rxGLB63UKxfSK30d7uu6JPAIhANWFSfZRTmhAfbbYT242fT7xiliaOBux19zaSYeSo%2B9VKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyce7wSEIdhJ%2Ftax70q3APp49QCE6B10ia3eYNV989by%2FRqDx7Uaptt9Jtx8Uif6mtXCcW%2FvVH8Ami9P8eq0GqygE16hE6%2BufzE0bhnZls5hH1VG8yAOkDBZ22QyusIKVvwQVJNj46PFLEsvM0qKCedvJXepPsdOI3kfunC0udtwSpcsQ8vCxrwMH26q9Im6vRkxm1cR%2Bfyvn%2F1gKcpkgAzC5UTEM9KQ6WS9vuTlfTFFOJb94U7lmfOVeHCUzWkWF%2FQuFGL3EuFmk6MijOq7OZN5%2BlXM7iQoj%2B0S6z0VBVVomT20tfsUs2SZ9A0XHL3RKIxXiT%2BiHWT58CXaWP4y3bASVvqSpBxDQm4dmJpVfCr2xbEAPuI%2FZOO8C18OQXb3krnH6pBw2YYM1kDJxDkXFsGl9r3GrU48p4h%2FFpo24QG%2B75V5TAx9qSMo3nMdViEDGyZBWB6XjPAAMTMz4YALWBjMce8ft%2FwYZZWWLT1WTaLK2yIo8X%2Fl7NBGrWHT9e8W9GqUjtke0p5lZsjyCRoPx%2F121%2FpLDQ5BLpdE5q2kDa%2FzZyDpnrEaMtLMM5tr3xUFmKcI2Q7y%2BOkK6qgCiACPmuAT81hlKTPiEfkEDaB48Dqg31LpoHwsJo3s5nMYNvN8g2AkmRvCtpscrP6szC13eK%2FBjqkAXJ5SlQ4I8kxEZjZzTCK%2BjmoqTYzBv0xxzhKRoGmNMWdsGFl6R5J2XfoaRk%2B5RCXnGBOV1g8x8eLBicg6cLUnZjsVNIDe5rSSaiLGJz2Mp00HkcEYo9283Ijiuwhdq4cXzDKP%2Bb7xiaBjBxwRHR%2BryFFbreR4qVcvwEArZED1HxeQAPizePdFsYVi69Hnm0Jrj0%2FL3l3CqruemLioKI%2FIBsRxYMe&X-Amz-Signature=7591b9879380a628bb49912fbe1922a58da3c86d1e2e461330466da5f37f1e49&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TLPP4V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCJ5M%2Bd68xA4y36xlbPFk3rxGLB63UKxfSK30d7uu6JPAIhANWFSfZRTmhAfbbYT242fT7xiliaOBux19zaSYeSo%2B9VKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyce7wSEIdhJ%2Ftax70q3APp49QCE6B10ia3eYNV989by%2FRqDx7Uaptt9Jtx8Uif6mtXCcW%2FvVH8Ami9P8eq0GqygE16hE6%2BufzE0bhnZls5hH1VG8yAOkDBZ22QyusIKVvwQVJNj46PFLEsvM0qKCedvJXepPsdOI3kfunC0udtwSpcsQ8vCxrwMH26q9Im6vRkxm1cR%2Bfyvn%2F1gKcpkgAzC5UTEM9KQ6WS9vuTlfTFFOJb94U7lmfOVeHCUzWkWF%2FQuFGL3EuFmk6MijOq7OZN5%2BlXM7iQoj%2B0S6z0VBVVomT20tfsUs2SZ9A0XHL3RKIxXiT%2BiHWT58CXaWP4y3bASVvqSpBxDQm4dmJpVfCr2xbEAPuI%2FZOO8C18OQXb3krnH6pBw2YYM1kDJxDkXFsGl9r3GrU48p4h%2FFpo24QG%2B75V5TAx9qSMo3nMdViEDGyZBWB6XjPAAMTMz4YALWBjMce8ft%2FwYZZWWLT1WTaLK2yIo8X%2Fl7NBGrWHT9e8W9GqUjtke0p5lZsjyCRoPx%2F121%2FpLDQ5BLpdE5q2kDa%2FzZyDpnrEaMtLMM5tr3xUFmKcI2Q7y%2BOkK6qgCiACPmuAT81hlKTPiEfkEDaB48Dqg31LpoHwsJo3s5nMYNvN8g2AkmRvCtpscrP6szC13eK%2FBjqkAXJ5SlQ4I8kxEZjZzTCK%2BjmoqTYzBv0xxzhKRoGmNMWdsGFl6R5J2XfoaRk%2B5RCXnGBOV1g8x8eLBicg6cLUnZjsVNIDe5rSSaiLGJz2Mp00HkcEYo9283Ijiuwhdq4cXzDKP%2Bb7xiaBjBxwRHR%2BryFFbreR4qVcvwEArZED1HxeQAPizePdFsYVi69Hnm0Jrj0%2FL3l3CqruemLioKI%2FIBsRxYMe&X-Amz-Signature=a09232a0f96fcb3e803df7f901f7019a46620b55f99f119a8453579d6d7ec5a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TLPP4V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCJ5M%2Bd68xA4y36xlbPFk3rxGLB63UKxfSK30d7uu6JPAIhANWFSfZRTmhAfbbYT242fT7xiliaOBux19zaSYeSo%2B9VKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyce7wSEIdhJ%2Ftax70q3APp49QCE6B10ia3eYNV989by%2FRqDx7Uaptt9Jtx8Uif6mtXCcW%2FvVH8Ami9P8eq0GqygE16hE6%2BufzE0bhnZls5hH1VG8yAOkDBZ22QyusIKVvwQVJNj46PFLEsvM0qKCedvJXepPsdOI3kfunC0udtwSpcsQ8vCxrwMH26q9Im6vRkxm1cR%2Bfyvn%2F1gKcpkgAzC5UTEM9KQ6WS9vuTlfTFFOJb94U7lmfOVeHCUzWkWF%2FQuFGL3EuFmk6MijOq7OZN5%2BlXM7iQoj%2B0S6z0VBVVomT20tfsUs2SZ9A0XHL3RKIxXiT%2BiHWT58CXaWP4y3bASVvqSpBxDQm4dmJpVfCr2xbEAPuI%2FZOO8C18OQXb3krnH6pBw2YYM1kDJxDkXFsGl9r3GrU48p4h%2FFpo24QG%2B75V5TAx9qSMo3nMdViEDGyZBWB6XjPAAMTMz4YALWBjMce8ft%2FwYZZWWLT1WTaLK2yIo8X%2Fl7NBGrWHT9e8W9GqUjtke0p5lZsjyCRoPx%2F121%2FpLDQ5BLpdE5q2kDa%2FzZyDpnrEaMtLMM5tr3xUFmKcI2Q7y%2BOkK6qgCiACPmuAT81hlKTPiEfkEDaB48Dqg31LpoHwsJo3s5nMYNvN8g2AkmRvCtpscrP6szC13eK%2FBjqkAXJ5SlQ4I8kxEZjZzTCK%2BjmoqTYzBv0xxzhKRoGmNMWdsGFl6R5J2XfoaRk%2B5RCXnGBOV1g8x8eLBicg6cLUnZjsVNIDe5rSSaiLGJz2Mp00HkcEYo9283Ijiuwhdq4cXzDKP%2Bb7xiaBjBxwRHR%2BryFFbreR4qVcvwEArZED1HxeQAPizePdFsYVi69Hnm0Jrj0%2FL3l3CqruemLioKI%2FIBsRxYMe&X-Amz-Signature=0cd11ab037972301b77cb4aaa5f2944763e84d0e2a15b93eafb489503f8b931e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TLPP4V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCJ5M%2Bd68xA4y36xlbPFk3rxGLB63UKxfSK30d7uu6JPAIhANWFSfZRTmhAfbbYT242fT7xiliaOBux19zaSYeSo%2B9VKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyce7wSEIdhJ%2Ftax70q3APp49QCE6B10ia3eYNV989by%2FRqDx7Uaptt9Jtx8Uif6mtXCcW%2FvVH8Ami9P8eq0GqygE16hE6%2BufzE0bhnZls5hH1VG8yAOkDBZ22QyusIKVvwQVJNj46PFLEsvM0qKCedvJXepPsdOI3kfunC0udtwSpcsQ8vCxrwMH26q9Im6vRkxm1cR%2Bfyvn%2F1gKcpkgAzC5UTEM9KQ6WS9vuTlfTFFOJb94U7lmfOVeHCUzWkWF%2FQuFGL3EuFmk6MijOq7OZN5%2BlXM7iQoj%2B0S6z0VBVVomT20tfsUs2SZ9A0XHL3RKIxXiT%2BiHWT58CXaWP4y3bASVvqSpBxDQm4dmJpVfCr2xbEAPuI%2FZOO8C18OQXb3krnH6pBw2YYM1kDJxDkXFsGl9r3GrU48p4h%2FFpo24QG%2B75V5TAx9qSMo3nMdViEDGyZBWB6XjPAAMTMz4YALWBjMce8ft%2FwYZZWWLT1WTaLK2yIo8X%2Fl7NBGrWHT9e8W9GqUjtke0p5lZsjyCRoPx%2F121%2FpLDQ5BLpdE5q2kDa%2FzZyDpnrEaMtLMM5tr3xUFmKcI2Q7y%2BOkK6qgCiACPmuAT81hlKTPiEfkEDaB48Dqg31LpoHwsJo3s5nMYNvN8g2AkmRvCtpscrP6szC13eK%2FBjqkAXJ5SlQ4I8kxEZjZzTCK%2BjmoqTYzBv0xxzhKRoGmNMWdsGFl6R5J2XfoaRk%2B5RCXnGBOV1g8x8eLBicg6cLUnZjsVNIDe5rSSaiLGJz2Mp00HkcEYo9283Ijiuwhdq4cXzDKP%2Bb7xiaBjBxwRHR%2BryFFbreR4qVcvwEArZED1HxeQAPizePdFsYVi69Hnm0Jrj0%2FL3l3CqruemLioKI%2FIBsRxYMe&X-Amz-Signature=f0210d563e3fafc7e0d4bcf0ba8fcd3ea17a44e0b4c2fd412e76f2ac4c6022f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TLPP4V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCJ5M%2Bd68xA4y36xlbPFk3rxGLB63UKxfSK30d7uu6JPAIhANWFSfZRTmhAfbbYT242fT7xiliaOBux19zaSYeSo%2B9VKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyce7wSEIdhJ%2Ftax70q3APp49QCE6B10ia3eYNV989by%2FRqDx7Uaptt9Jtx8Uif6mtXCcW%2FvVH8Ami9P8eq0GqygE16hE6%2BufzE0bhnZls5hH1VG8yAOkDBZ22QyusIKVvwQVJNj46PFLEsvM0qKCedvJXepPsdOI3kfunC0udtwSpcsQ8vCxrwMH26q9Im6vRkxm1cR%2Bfyvn%2F1gKcpkgAzC5UTEM9KQ6WS9vuTlfTFFOJb94U7lmfOVeHCUzWkWF%2FQuFGL3EuFmk6MijOq7OZN5%2BlXM7iQoj%2B0S6z0VBVVomT20tfsUs2SZ9A0XHL3RKIxXiT%2BiHWT58CXaWP4y3bASVvqSpBxDQm4dmJpVfCr2xbEAPuI%2FZOO8C18OQXb3krnH6pBw2YYM1kDJxDkXFsGl9r3GrU48p4h%2FFpo24QG%2B75V5TAx9qSMo3nMdViEDGyZBWB6XjPAAMTMz4YALWBjMce8ft%2FwYZZWWLT1WTaLK2yIo8X%2Fl7NBGrWHT9e8W9GqUjtke0p5lZsjyCRoPx%2F121%2FpLDQ5BLpdE5q2kDa%2FzZyDpnrEaMtLMM5tr3xUFmKcI2Q7y%2BOkK6qgCiACPmuAT81hlKTPiEfkEDaB48Dqg31LpoHwsJo3s5nMYNvN8g2AkmRvCtpscrP6szC13eK%2FBjqkAXJ5SlQ4I8kxEZjZzTCK%2BjmoqTYzBv0xxzhKRoGmNMWdsGFl6R5J2XfoaRk%2B5RCXnGBOV1g8x8eLBicg6cLUnZjsVNIDe5rSSaiLGJz2Mp00HkcEYo9283Ijiuwhdq4cXzDKP%2Bb7xiaBjBxwRHR%2BryFFbreR4qVcvwEArZED1HxeQAPizePdFsYVi69Hnm0Jrj0%2FL3l3CqruemLioKI%2FIBsRxYMe&X-Amz-Signature=a840df0b8de53c2fc89bc745ec79d67cc01944cb6740aaaedef9e6fb8c21811b&X-Amz-SignedHeaders=host&x-id=GetObject)
