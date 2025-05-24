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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNZEHJE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDAEFxeOXx6XObwYBa68SvO7z7HgiXlTgFOqoQ0oq8myAiEApegSKzTA%2FtiHtMdhCShQccphXo5i1KYz5cwZUpkalcwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDH9uNRIZ6KlrjN98QSrcA5rjG6WHIwTMFXCOIk7TR6%2FA1DSSqy81OexCkH5EJ3q8V%2FsMXRN9e4NNaemxyZsrQsI3N4FQUbuFJgQOT%2BUsOQn9xnCPRncIw2HrH%2FJZegRt9sjCAqfIX47Xccuu70SX8em3gFMJavQDL8EabDLYvkKJzcuMTxI%2BmK4f4QzkTUdscKKfM1HNnI2PRSSgHaqxSziV52pHtfG%2FKOo8JHcSR%2Fe0%2FYKM1AV6XYmJlKG5WLWaSRD2hosYP4F39R78RN480M0AB89oVDv2xXlzURuP0ktfFqSwptI%2F%2BDgxgKkEe0%2BECt7Hs%2FKb4VbI1Ct20mMT3nzoqZX2sRMyvUhW9QhBBmr0ZBzeNdWc6hEbtWPFdDNn5KU53KNVCbhgpIz0oWsIsOZ1jECHsDWPdcawKUwJ%2BnYiEsd75%2B5%2BYdPG%2BDT4l37%2FsHCrI6BcmuRp7YKalr%2F%2B6c1tnBDH%2BcMvVj8%2Bm4r4UwVUGBUbbjHDdaHGNcyTdO2CtfnzjcLyDhX9cAg%2F0vbCgaNCVMokW4gfYNqPdXfU%2F7EGcWLsJVxQzV1W6L%2FcySr8gAoTX4fcKUKxYWKEeqPctJX9bwWMYrXPsM8OFsKfWtcwCxMbXPAe8QqBRAHHisbEHWg7xFX9CWYj9blwMJeAxsEGOqUBA8bgVK%2FkKOiS08AyBAPai3r5FnVQkQPUdHO648C8hBD2wJBDsMeMneXPzltYnxTy4n84wNAsURPCQNu8fGcwtloDCqpxQpmoeSl64CZLAe1L0Gj4CzhTzDVafjl7qXc4pk5HLt19XUsxbMSOkTJGa%2B5F8ZD1G3VtYRTJOVSkTa1HaTGHbOsF6NSa9ygAp%2BcRNaq3tMOFfMIKHOk0AVk%2Fi%2FR1KLvZ&X-Amz-Signature=93c4669cbbbd9264bad052b1047e6255c91350fc8cf56695bb9b18f458d34e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNZEHJE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDAEFxeOXx6XObwYBa68SvO7z7HgiXlTgFOqoQ0oq8myAiEApegSKzTA%2FtiHtMdhCShQccphXo5i1KYz5cwZUpkalcwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDH9uNRIZ6KlrjN98QSrcA5rjG6WHIwTMFXCOIk7TR6%2FA1DSSqy81OexCkH5EJ3q8V%2FsMXRN9e4NNaemxyZsrQsI3N4FQUbuFJgQOT%2BUsOQn9xnCPRncIw2HrH%2FJZegRt9sjCAqfIX47Xccuu70SX8em3gFMJavQDL8EabDLYvkKJzcuMTxI%2BmK4f4QzkTUdscKKfM1HNnI2PRSSgHaqxSziV52pHtfG%2FKOo8JHcSR%2Fe0%2FYKM1AV6XYmJlKG5WLWaSRD2hosYP4F39R78RN480M0AB89oVDv2xXlzURuP0ktfFqSwptI%2F%2BDgxgKkEe0%2BECt7Hs%2FKb4VbI1Ct20mMT3nzoqZX2sRMyvUhW9QhBBmr0ZBzeNdWc6hEbtWPFdDNn5KU53KNVCbhgpIz0oWsIsOZ1jECHsDWPdcawKUwJ%2BnYiEsd75%2B5%2BYdPG%2BDT4l37%2FsHCrI6BcmuRp7YKalr%2F%2B6c1tnBDH%2BcMvVj8%2Bm4r4UwVUGBUbbjHDdaHGNcyTdO2CtfnzjcLyDhX9cAg%2F0vbCgaNCVMokW4gfYNqPdXfU%2F7EGcWLsJVxQzV1W6L%2FcySr8gAoTX4fcKUKxYWKEeqPctJX9bwWMYrXPsM8OFsKfWtcwCxMbXPAe8QqBRAHHisbEHWg7xFX9CWYj9blwMJeAxsEGOqUBA8bgVK%2FkKOiS08AyBAPai3r5FnVQkQPUdHO648C8hBD2wJBDsMeMneXPzltYnxTy4n84wNAsURPCQNu8fGcwtloDCqpxQpmoeSl64CZLAe1L0Gj4CzhTzDVafjl7qXc4pk5HLt19XUsxbMSOkTJGa%2B5F8ZD1G3VtYRTJOVSkTa1HaTGHbOsF6NSa9ygAp%2BcRNaq3tMOFfMIKHOk0AVk%2Fi%2FR1KLvZ&X-Amz-Signature=cf9220022daf612ef0f1b2ea6ba910cd0a20a45a22022c1dbf7849067558eaca&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNZEHJE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDAEFxeOXx6XObwYBa68SvO7z7HgiXlTgFOqoQ0oq8myAiEApegSKzTA%2FtiHtMdhCShQccphXo5i1KYz5cwZUpkalcwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDH9uNRIZ6KlrjN98QSrcA5rjG6WHIwTMFXCOIk7TR6%2FA1DSSqy81OexCkH5EJ3q8V%2FsMXRN9e4NNaemxyZsrQsI3N4FQUbuFJgQOT%2BUsOQn9xnCPRncIw2HrH%2FJZegRt9sjCAqfIX47Xccuu70SX8em3gFMJavQDL8EabDLYvkKJzcuMTxI%2BmK4f4QzkTUdscKKfM1HNnI2PRSSgHaqxSziV52pHtfG%2FKOo8JHcSR%2Fe0%2FYKM1AV6XYmJlKG5WLWaSRD2hosYP4F39R78RN480M0AB89oVDv2xXlzURuP0ktfFqSwptI%2F%2BDgxgKkEe0%2BECt7Hs%2FKb4VbI1Ct20mMT3nzoqZX2sRMyvUhW9QhBBmr0ZBzeNdWc6hEbtWPFdDNn5KU53KNVCbhgpIz0oWsIsOZ1jECHsDWPdcawKUwJ%2BnYiEsd75%2B5%2BYdPG%2BDT4l37%2FsHCrI6BcmuRp7YKalr%2F%2B6c1tnBDH%2BcMvVj8%2Bm4r4UwVUGBUbbjHDdaHGNcyTdO2CtfnzjcLyDhX9cAg%2F0vbCgaNCVMokW4gfYNqPdXfU%2F7EGcWLsJVxQzV1W6L%2FcySr8gAoTX4fcKUKxYWKEeqPctJX9bwWMYrXPsM8OFsKfWtcwCxMbXPAe8QqBRAHHisbEHWg7xFX9CWYj9blwMJeAxsEGOqUBA8bgVK%2FkKOiS08AyBAPai3r5FnVQkQPUdHO648C8hBD2wJBDsMeMneXPzltYnxTy4n84wNAsURPCQNu8fGcwtloDCqpxQpmoeSl64CZLAe1L0Gj4CzhTzDVafjl7qXc4pk5HLt19XUsxbMSOkTJGa%2B5F8ZD1G3VtYRTJOVSkTa1HaTGHbOsF6NSa9ygAp%2BcRNaq3tMOFfMIKHOk0AVk%2Fi%2FR1KLvZ&X-Amz-Signature=43b42418bc593d32f5d73a5402d52e51d1a16af94b880f9b9484748d914e0c54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNZEHJE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDAEFxeOXx6XObwYBa68SvO7z7HgiXlTgFOqoQ0oq8myAiEApegSKzTA%2FtiHtMdhCShQccphXo5i1KYz5cwZUpkalcwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDH9uNRIZ6KlrjN98QSrcA5rjG6WHIwTMFXCOIk7TR6%2FA1DSSqy81OexCkH5EJ3q8V%2FsMXRN9e4NNaemxyZsrQsI3N4FQUbuFJgQOT%2BUsOQn9xnCPRncIw2HrH%2FJZegRt9sjCAqfIX47Xccuu70SX8em3gFMJavQDL8EabDLYvkKJzcuMTxI%2BmK4f4QzkTUdscKKfM1HNnI2PRSSgHaqxSziV52pHtfG%2FKOo8JHcSR%2Fe0%2FYKM1AV6XYmJlKG5WLWaSRD2hosYP4F39R78RN480M0AB89oVDv2xXlzURuP0ktfFqSwptI%2F%2BDgxgKkEe0%2BECt7Hs%2FKb4VbI1Ct20mMT3nzoqZX2sRMyvUhW9QhBBmr0ZBzeNdWc6hEbtWPFdDNn5KU53KNVCbhgpIz0oWsIsOZ1jECHsDWPdcawKUwJ%2BnYiEsd75%2B5%2BYdPG%2BDT4l37%2FsHCrI6BcmuRp7YKalr%2F%2B6c1tnBDH%2BcMvVj8%2Bm4r4UwVUGBUbbjHDdaHGNcyTdO2CtfnzjcLyDhX9cAg%2F0vbCgaNCVMokW4gfYNqPdXfU%2F7EGcWLsJVxQzV1W6L%2FcySr8gAoTX4fcKUKxYWKEeqPctJX9bwWMYrXPsM8OFsKfWtcwCxMbXPAe8QqBRAHHisbEHWg7xFX9CWYj9blwMJeAxsEGOqUBA8bgVK%2FkKOiS08AyBAPai3r5FnVQkQPUdHO648C8hBD2wJBDsMeMneXPzltYnxTy4n84wNAsURPCQNu8fGcwtloDCqpxQpmoeSl64CZLAe1L0Gj4CzhTzDVafjl7qXc4pk5HLt19XUsxbMSOkTJGa%2B5F8ZD1G3VtYRTJOVSkTa1HaTGHbOsF6NSa9ygAp%2BcRNaq3tMOFfMIKHOk0AVk%2Fi%2FR1KLvZ&X-Amz-Signature=cc430dd22e533ec1b5af5754a943b751cc2431884b0dee138f07c624dbcbca93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNZEHJE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDAEFxeOXx6XObwYBa68SvO7z7HgiXlTgFOqoQ0oq8myAiEApegSKzTA%2FtiHtMdhCShQccphXo5i1KYz5cwZUpkalcwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDH9uNRIZ6KlrjN98QSrcA5rjG6WHIwTMFXCOIk7TR6%2FA1DSSqy81OexCkH5EJ3q8V%2FsMXRN9e4NNaemxyZsrQsI3N4FQUbuFJgQOT%2BUsOQn9xnCPRncIw2HrH%2FJZegRt9sjCAqfIX47Xccuu70SX8em3gFMJavQDL8EabDLYvkKJzcuMTxI%2BmK4f4QzkTUdscKKfM1HNnI2PRSSgHaqxSziV52pHtfG%2FKOo8JHcSR%2Fe0%2FYKM1AV6XYmJlKG5WLWaSRD2hosYP4F39R78RN480M0AB89oVDv2xXlzURuP0ktfFqSwptI%2F%2BDgxgKkEe0%2BECt7Hs%2FKb4VbI1Ct20mMT3nzoqZX2sRMyvUhW9QhBBmr0ZBzeNdWc6hEbtWPFdDNn5KU53KNVCbhgpIz0oWsIsOZ1jECHsDWPdcawKUwJ%2BnYiEsd75%2B5%2BYdPG%2BDT4l37%2FsHCrI6BcmuRp7YKalr%2F%2B6c1tnBDH%2BcMvVj8%2Bm4r4UwVUGBUbbjHDdaHGNcyTdO2CtfnzjcLyDhX9cAg%2F0vbCgaNCVMokW4gfYNqPdXfU%2F7EGcWLsJVxQzV1W6L%2FcySr8gAoTX4fcKUKxYWKEeqPctJX9bwWMYrXPsM8OFsKfWtcwCxMbXPAe8QqBRAHHisbEHWg7xFX9CWYj9blwMJeAxsEGOqUBA8bgVK%2FkKOiS08AyBAPai3r5FnVQkQPUdHO648C8hBD2wJBDsMeMneXPzltYnxTy4n84wNAsURPCQNu8fGcwtloDCqpxQpmoeSl64CZLAe1L0Gj4CzhTzDVafjl7qXc4pk5HLt19XUsxbMSOkTJGa%2B5F8ZD1G3VtYRTJOVSkTa1HaTGHbOsF6NSa9ygAp%2BcRNaq3tMOFfMIKHOk0AVk%2Fi%2FR1KLvZ&X-Amz-Signature=72768cf6460fa3fc8b3178a56f1755c18b7dfa1b93bc2eb8d0656936b0311eef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNZEHJE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDAEFxeOXx6XObwYBa68SvO7z7HgiXlTgFOqoQ0oq8myAiEApegSKzTA%2FtiHtMdhCShQccphXo5i1KYz5cwZUpkalcwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDH9uNRIZ6KlrjN98QSrcA5rjG6WHIwTMFXCOIk7TR6%2FA1DSSqy81OexCkH5EJ3q8V%2FsMXRN9e4NNaemxyZsrQsI3N4FQUbuFJgQOT%2BUsOQn9xnCPRncIw2HrH%2FJZegRt9sjCAqfIX47Xccuu70SX8em3gFMJavQDL8EabDLYvkKJzcuMTxI%2BmK4f4QzkTUdscKKfM1HNnI2PRSSgHaqxSziV52pHtfG%2FKOo8JHcSR%2Fe0%2FYKM1AV6XYmJlKG5WLWaSRD2hosYP4F39R78RN480M0AB89oVDv2xXlzURuP0ktfFqSwptI%2F%2BDgxgKkEe0%2BECt7Hs%2FKb4VbI1Ct20mMT3nzoqZX2sRMyvUhW9QhBBmr0ZBzeNdWc6hEbtWPFdDNn5KU53KNVCbhgpIz0oWsIsOZ1jECHsDWPdcawKUwJ%2BnYiEsd75%2B5%2BYdPG%2BDT4l37%2FsHCrI6BcmuRp7YKalr%2F%2B6c1tnBDH%2BcMvVj8%2Bm4r4UwVUGBUbbjHDdaHGNcyTdO2CtfnzjcLyDhX9cAg%2F0vbCgaNCVMokW4gfYNqPdXfU%2F7EGcWLsJVxQzV1W6L%2FcySr8gAoTX4fcKUKxYWKEeqPctJX9bwWMYrXPsM8OFsKfWtcwCxMbXPAe8QqBRAHHisbEHWg7xFX9CWYj9blwMJeAxsEGOqUBA8bgVK%2FkKOiS08AyBAPai3r5FnVQkQPUdHO648C8hBD2wJBDsMeMneXPzltYnxTy4n84wNAsURPCQNu8fGcwtloDCqpxQpmoeSl64CZLAe1L0Gj4CzhTzDVafjl7qXc4pk5HLt19XUsxbMSOkTJGa%2B5F8ZD1G3VtYRTJOVSkTa1HaTGHbOsF6NSa9ygAp%2BcRNaq3tMOFfMIKHOk0AVk%2Fi%2FR1KLvZ&X-Amz-Signature=42bf87c3211190413458be5be67397a979c1b501d0ee0339e7208d6c48849a6f&X-Amz-SignedHeaders=host&x-id=GetObject)
