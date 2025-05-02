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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2FOU5Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCXqTfmNevLoHVJfpMMbgs%2FnEV4wBdLK53rd%2F6Kxp%2FV2gIgOxL8luSg1fEKD1azJ7EglGPS19D%2BawJDTxyieRFcxpMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6vPEN8%2F4ivQAeRircAxjTxzSMprys%2FnM29Mr9uyT0cmcs4E4Q9Nol2f%2BxaGnQovsKIRJNFZIl8YERVikNlJ5lAUt3tjZyKUydosRCCDnxZ%2BdPH8t641vfUAIoyNAD8EkyluHlad1hvDiGndQQmZqt3eDCCU5vaO3b8rpzSMLEu9MHOi8g64VyJFSniU53SqQm62VxgU2EiUudq7dKuXGpHhQ4dr270ZLtkWnMJa82Ckp580%2B3LxLXo5vZ6wOU5ag8r33S%2FTf45u3tcRVgvNOT2%2FAl6cTnGucdmjW8f1u39XeD1OGL5ApVGO%2FmPOdU3McDlN6CydfYKhdfvi2jWyk0w0938ulXXhiA6sjDw7w6FnDy1qZ2mCG1J7KYt7%2B5%2BjC2Fg0fbZxWb1ZKkODBRfnR1dnxcS8eq3GIpvWfISoG7AooxUwwO3Qp%2F9Rt4k8n0XZa%2B6C%2FR0sVKfe0m9dWImo3WrV9YnuMxmmbThdWb%2BuNSQax2GAZc3L0xJbk5aY0Tt3RigRVkfLdriUDbffXjgNlnJkmjNw9piEs6cRZ7BKE1atlRQ9T5jiZO%2BhiMPiBW5IqG5an8kqdztkCLa%2Flsr8Mrrd1D6NZam0CrmyNAjQLqlzcdgB2n%2BgVxzQaxSp2mWJsroGUf4Z%2FQ60XMIrl08AGOqUBIf8zKbrTlgE%2FtPOeTvD%2BQmdGAvsU9tp5pfCDZ2XvOMuUJK1SectjuWbeXGayYVxyf95IvIYEGLMVqXg6Ui%2BjFvjUrwesoQKPrWrxxaINpSrUOqQMABts8tnYEq7wTslubysvvdulFM3gMsgBaaLrmXTkBDPm6bjnKu0N%2Bi4WO9crugqHtCTBGr47%2B8FP8j7lahjqy4P5M0G3ZknjvyLmyoXOLBVa&X-Amz-Signature=b5b0d365348a34a966e9112d539b72a37b14458c1c0620176cf1371bfab38d21&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2FOU5Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCXqTfmNevLoHVJfpMMbgs%2FnEV4wBdLK53rd%2F6Kxp%2FV2gIgOxL8luSg1fEKD1azJ7EglGPS19D%2BawJDTxyieRFcxpMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6vPEN8%2F4ivQAeRircAxjTxzSMprys%2FnM29Mr9uyT0cmcs4E4Q9Nol2f%2BxaGnQovsKIRJNFZIl8YERVikNlJ5lAUt3tjZyKUydosRCCDnxZ%2BdPH8t641vfUAIoyNAD8EkyluHlad1hvDiGndQQmZqt3eDCCU5vaO3b8rpzSMLEu9MHOi8g64VyJFSniU53SqQm62VxgU2EiUudq7dKuXGpHhQ4dr270ZLtkWnMJa82Ckp580%2B3LxLXo5vZ6wOU5ag8r33S%2FTf45u3tcRVgvNOT2%2FAl6cTnGucdmjW8f1u39XeD1OGL5ApVGO%2FmPOdU3McDlN6CydfYKhdfvi2jWyk0w0938ulXXhiA6sjDw7w6FnDy1qZ2mCG1J7KYt7%2B5%2BjC2Fg0fbZxWb1ZKkODBRfnR1dnxcS8eq3GIpvWfISoG7AooxUwwO3Qp%2F9Rt4k8n0XZa%2B6C%2FR0sVKfe0m9dWImo3WrV9YnuMxmmbThdWb%2BuNSQax2GAZc3L0xJbk5aY0Tt3RigRVkfLdriUDbffXjgNlnJkmjNw9piEs6cRZ7BKE1atlRQ9T5jiZO%2BhiMPiBW5IqG5an8kqdztkCLa%2Flsr8Mrrd1D6NZam0CrmyNAjQLqlzcdgB2n%2BgVxzQaxSp2mWJsroGUf4Z%2FQ60XMIrl08AGOqUBIf8zKbrTlgE%2FtPOeTvD%2BQmdGAvsU9tp5pfCDZ2XvOMuUJK1SectjuWbeXGayYVxyf95IvIYEGLMVqXg6Ui%2BjFvjUrwesoQKPrWrxxaINpSrUOqQMABts8tnYEq7wTslubysvvdulFM3gMsgBaaLrmXTkBDPm6bjnKu0N%2Bi4WO9crugqHtCTBGr47%2B8FP8j7lahjqy4P5M0G3ZknjvyLmyoXOLBVa&X-Amz-Signature=f552bcb45a980a8c91cc4f2effd0bedd5cfb614cd44d70226cb4bddbe8d8f510&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2FOU5Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCXqTfmNevLoHVJfpMMbgs%2FnEV4wBdLK53rd%2F6Kxp%2FV2gIgOxL8luSg1fEKD1azJ7EglGPS19D%2BawJDTxyieRFcxpMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6vPEN8%2F4ivQAeRircAxjTxzSMprys%2FnM29Mr9uyT0cmcs4E4Q9Nol2f%2BxaGnQovsKIRJNFZIl8YERVikNlJ5lAUt3tjZyKUydosRCCDnxZ%2BdPH8t641vfUAIoyNAD8EkyluHlad1hvDiGndQQmZqt3eDCCU5vaO3b8rpzSMLEu9MHOi8g64VyJFSniU53SqQm62VxgU2EiUudq7dKuXGpHhQ4dr270ZLtkWnMJa82Ckp580%2B3LxLXo5vZ6wOU5ag8r33S%2FTf45u3tcRVgvNOT2%2FAl6cTnGucdmjW8f1u39XeD1OGL5ApVGO%2FmPOdU3McDlN6CydfYKhdfvi2jWyk0w0938ulXXhiA6sjDw7w6FnDy1qZ2mCG1J7KYt7%2B5%2BjC2Fg0fbZxWb1ZKkODBRfnR1dnxcS8eq3GIpvWfISoG7AooxUwwO3Qp%2F9Rt4k8n0XZa%2B6C%2FR0sVKfe0m9dWImo3WrV9YnuMxmmbThdWb%2BuNSQax2GAZc3L0xJbk5aY0Tt3RigRVkfLdriUDbffXjgNlnJkmjNw9piEs6cRZ7BKE1atlRQ9T5jiZO%2BhiMPiBW5IqG5an8kqdztkCLa%2Flsr8Mrrd1D6NZam0CrmyNAjQLqlzcdgB2n%2BgVxzQaxSp2mWJsroGUf4Z%2FQ60XMIrl08AGOqUBIf8zKbrTlgE%2FtPOeTvD%2BQmdGAvsU9tp5pfCDZ2XvOMuUJK1SectjuWbeXGayYVxyf95IvIYEGLMVqXg6Ui%2BjFvjUrwesoQKPrWrxxaINpSrUOqQMABts8tnYEq7wTslubysvvdulFM3gMsgBaaLrmXTkBDPm6bjnKu0N%2Bi4WO9crugqHtCTBGr47%2B8FP8j7lahjqy4P5M0G3ZknjvyLmyoXOLBVa&X-Amz-Signature=d98b4dc95f44b3811611adcb718d066bd8026e36a686f3e318403c7f69758574&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2FOU5Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCXqTfmNevLoHVJfpMMbgs%2FnEV4wBdLK53rd%2F6Kxp%2FV2gIgOxL8luSg1fEKD1azJ7EglGPS19D%2BawJDTxyieRFcxpMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6vPEN8%2F4ivQAeRircAxjTxzSMprys%2FnM29Mr9uyT0cmcs4E4Q9Nol2f%2BxaGnQovsKIRJNFZIl8YERVikNlJ5lAUt3tjZyKUydosRCCDnxZ%2BdPH8t641vfUAIoyNAD8EkyluHlad1hvDiGndQQmZqt3eDCCU5vaO3b8rpzSMLEu9MHOi8g64VyJFSniU53SqQm62VxgU2EiUudq7dKuXGpHhQ4dr270ZLtkWnMJa82Ckp580%2B3LxLXo5vZ6wOU5ag8r33S%2FTf45u3tcRVgvNOT2%2FAl6cTnGucdmjW8f1u39XeD1OGL5ApVGO%2FmPOdU3McDlN6CydfYKhdfvi2jWyk0w0938ulXXhiA6sjDw7w6FnDy1qZ2mCG1J7KYt7%2B5%2BjC2Fg0fbZxWb1ZKkODBRfnR1dnxcS8eq3GIpvWfISoG7AooxUwwO3Qp%2F9Rt4k8n0XZa%2B6C%2FR0sVKfe0m9dWImo3WrV9YnuMxmmbThdWb%2BuNSQax2GAZc3L0xJbk5aY0Tt3RigRVkfLdriUDbffXjgNlnJkmjNw9piEs6cRZ7BKE1atlRQ9T5jiZO%2BhiMPiBW5IqG5an8kqdztkCLa%2Flsr8Mrrd1D6NZam0CrmyNAjQLqlzcdgB2n%2BgVxzQaxSp2mWJsroGUf4Z%2FQ60XMIrl08AGOqUBIf8zKbrTlgE%2FtPOeTvD%2BQmdGAvsU9tp5pfCDZ2XvOMuUJK1SectjuWbeXGayYVxyf95IvIYEGLMVqXg6Ui%2BjFvjUrwesoQKPrWrxxaINpSrUOqQMABts8tnYEq7wTslubysvvdulFM3gMsgBaaLrmXTkBDPm6bjnKu0N%2Bi4WO9crugqHtCTBGr47%2B8FP8j7lahjqy4P5M0G3ZknjvyLmyoXOLBVa&X-Amz-Signature=7eff9daf21a9bfc65f264c35cba9b821e2378f311589b7cc435de1c753d81599&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2FOU5Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCXqTfmNevLoHVJfpMMbgs%2FnEV4wBdLK53rd%2F6Kxp%2FV2gIgOxL8luSg1fEKD1azJ7EglGPS19D%2BawJDTxyieRFcxpMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6vPEN8%2F4ivQAeRircAxjTxzSMprys%2FnM29Mr9uyT0cmcs4E4Q9Nol2f%2BxaGnQovsKIRJNFZIl8YERVikNlJ5lAUt3tjZyKUydosRCCDnxZ%2BdPH8t641vfUAIoyNAD8EkyluHlad1hvDiGndQQmZqt3eDCCU5vaO3b8rpzSMLEu9MHOi8g64VyJFSniU53SqQm62VxgU2EiUudq7dKuXGpHhQ4dr270ZLtkWnMJa82Ckp580%2B3LxLXo5vZ6wOU5ag8r33S%2FTf45u3tcRVgvNOT2%2FAl6cTnGucdmjW8f1u39XeD1OGL5ApVGO%2FmPOdU3McDlN6CydfYKhdfvi2jWyk0w0938ulXXhiA6sjDw7w6FnDy1qZ2mCG1J7KYt7%2B5%2BjC2Fg0fbZxWb1ZKkODBRfnR1dnxcS8eq3GIpvWfISoG7AooxUwwO3Qp%2F9Rt4k8n0XZa%2B6C%2FR0sVKfe0m9dWImo3WrV9YnuMxmmbThdWb%2BuNSQax2GAZc3L0xJbk5aY0Tt3RigRVkfLdriUDbffXjgNlnJkmjNw9piEs6cRZ7BKE1atlRQ9T5jiZO%2BhiMPiBW5IqG5an8kqdztkCLa%2Flsr8Mrrd1D6NZam0CrmyNAjQLqlzcdgB2n%2BgVxzQaxSp2mWJsroGUf4Z%2FQ60XMIrl08AGOqUBIf8zKbrTlgE%2FtPOeTvD%2BQmdGAvsU9tp5pfCDZ2XvOMuUJK1SectjuWbeXGayYVxyf95IvIYEGLMVqXg6Ui%2BjFvjUrwesoQKPrWrxxaINpSrUOqQMABts8tnYEq7wTslubysvvdulFM3gMsgBaaLrmXTkBDPm6bjnKu0N%2Bi4WO9crugqHtCTBGr47%2B8FP8j7lahjqy4P5M0G3ZknjvyLmyoXOLBVa&X-Amz-Signature=498020612a257d0f9e22a836816a5569f1db56614126a722df93ba317d8741e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2FOU5Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCXqTfmNevLoHVJfpMMbgs%2FnEV4wBdLK53rd%2F6Kxp%2FV2gIgOxL8luSg1fEKD1azJ7EglGPS19D%2BawJDTxyieRFcxpMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK6vPEN8%2F4ivQAeRircAxjTxzSMprys%2FnM29Mr9uyT0cmcs4E4Q9Nol2f%2BxaGnQovsKIRJNFZIl8YERVikNlJ5lAUt3tjZyKUydosRCCDnxZ%2BdPH8t641vfUAIoyNAD8EkyluHlad1hvDiGndQQmZqt3eDCCU5vaO3b8rpzSMLEu9MHOi8g64VyJFSniU53SqQm62VxgU2EiUudq7dKuXGpHhQ4dr270ZLtkWnMJa82Ckp580%2B3LxLXo5vZ6wOU5ag8r33S%2FTf45u3tcRVgvNOT2%2FAl6cTnGucdmjW8f1u39XeD1OGL5ApVGO%2FmPOdU3McDlN6CydfYKhdfvi2jWyk0w0938ulXXhiA6sjDw7w6FnDy1qZ2mCG1J7KYt7%2B5%2BjC2Fg0fbZxWb1ZKkODBRfnR1dnxcS8eq3GIpvWfISoG7AooxUwwO3Qp%2F9Rt4k8n0XZa%2B6C%2FR0sVKfe0m9dWImo3WrV9YnuMxmmbThdWb%2BuNSQax2GAZc3L0xJbk5aY0Tt3RigRVkfLdriUDbffXjgNlnJkmjNw9piEs6cRZ7BKE1atlRQ9T5jiZO%2BhiMPiBW5IqG5an8kqdztkCLa%2Flsr8Mrrd1D6NZam0CrmyNAjQLqlzcdgB2n%2BgVxzQaxSp2mWJsroGUf4Z%2FQ60XMIrl08AGOqUBIf8zKbrTlgE%2FtPOeTvD%2BQmdGAvsU9tp5pfCDZ2XvOMuUJK1SectjuWbeXGayYVxyf95IvIYEGLMVqXg6Ui%2BjFvjUrwesoQKPrWrxxaINpSrUOqQMABts8tnYEq7wTslubysvvdulFM3gMsgBaaLrmXTkBDPm6bjnKu0N%2Bi4WO9crugqHtCTBGr47%2B8FP8j7lahjqy4P5M0G3ZknjvyLmyoXOLBVa&X-Amz-Signature=2e84a32691dd79935abb0e48fadcd8d495383b1d08f961c1e92416d8d83bd1bb&X-Amz-SignedHeaders=host&x-id=GetObject)
