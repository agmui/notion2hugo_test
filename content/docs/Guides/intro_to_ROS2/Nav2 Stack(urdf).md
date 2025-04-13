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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MSXFVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDFeCzq648oXz9T6qLpJGLJ4GcFDmPop2Qt3tShkPfToAiEA0nl26RPPWb7e4%2F0fgq0GIqgME3zDU1Frq72aZnW2MngqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ1Nfpw4WflKfEQ2SrcA%2Bz%2Fi3j5KL8PWHSYr8l1zNPvjyy8dZA60izVOCOMzovE%2B%2B9lZAJlIrSvSOeW%2BNSK6WWC3MQcmVN0cyVMqrhouz9HfNEQmHzvu9ZQCe4uFgg4eQEVypvsRp25fNTvymrPwAyfTSi5DCQogalMhT5o90bZvV7zEeVQXCJg2YE%2FeG86xl98ohtm2pYnjMkwl7YKArSQf3c20y%2FRgr%2BIsSRsJs2kqN2xJQaeuDAdVz4ygdg%2B94vHM%2Bmp%2FSpo7NISKhvIUjAdLf6UPDDfWsvUsQHXL66xE7aWPXITfNBVBEjZQiszRVfbTWY5NxHEO7Jtj85I4iJ19cb1O3TCYE7PeqQ%2FTOSqP6HRcTuerZL%2Fv%2B%2BzlmMuvkMM7%2BSeR%2Ff9KDqyCwN%2FO%2BYXP7UduUFhdQIpsSiIb2rnGHiErnybFHHt19jNe9IRPsJ7EY8ZgqaEYAxCsKIrz63GtWnpDbCufBCzyypnL8FmusWcJEuBP8KktTPm0VqOhl43k8bYtmFDXlDE%2BhNoJT%2B94oK%2FkUs6r8s9VBGFvNTOjum52U1%2BfcBIqv1BI%2FSHji5P34rPEqGgFCv8OM7LP0rU7EuujAhXWN8SxR46cs4ONC9phsDZgXUj26ANzXPH5jmL%2Fqak34ZJsHxPML6O7b8GOqUB1hUfXtcd7ByBZiCYrGbQmMf59FcBcOY1nBDzrJ807ABKXTZC80%2FLZxtRDCUdStoLIfDopGEqMvbmcXKpHd5uW1cEIAcMQN6npDOimCfSDpxma6Uv3Ed41CNTcfp71a3hT%2BOo7oO%2B88n6vc6641QU31mjs9YR9doP%2B5TpzMwCwaHSRxNaWyubnrPIJhtv6wp2yZHQa5ElE097Sk%2Bo6MO2zENYKh2N&X-Amz-Signature=9ebdef85de308747183d35dc4fd274979812f31531db606c10eec856ddcdffed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MSXFVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDFeCzq648oXz9T6qLpJGLJ4GcFDmPop2Qt3tShkPfToAiEA0nl26RPPWb7e4%2F0fgq0GIqgME3zDU1Frq72aZnW2MngqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ1Nfpw4WflKfEQ2SrcA%2Bz%2Fi3j5KL8PWHSYr8l1zNPvjyy8dZA60izVOCOMzovE%2B%2B9lZAJlIrSvSOeW%2BNSK6WWC3MQcmVN0cyVMqrhouz9HfNEQmHzvu9ZQCe4uFgg4eQEVypvsRp25fNTvymrPwAyfTSi5DCQogalMhT5o90bZvV7zEeVQXCJg2YE%2FeG86xl98ohtm2pYnjMkwl7YKArSQf3c20y%2FRgr%2BIsSRsJs2kqN2xJQaeuDAdVz4ygdg%2B94vHM%2Bmp%2FSpo7NISKhvIUjAdLf6UPDDfWsvUsQHXL66xE7aWPXITfNBVBEjZQiszRVfbTWY5NxHEO7Jtj85I4iJ19cb1O3TCYE7PeqQ%2FTOSqP6HRcTuerZL%2Fv%2B%2BzlmMuvkMM7%2BSeR%2Ff9KDqyCwN%2FO%2BYXP7UduUFhdQIpsSiIb2rnGHiErnybFHHt19jNe9IRPsJ7EY8ZgqaEYAxCsKIrz63GtWnpDbCufBCzyypnL8FmusWcJEuBP8KktTPm0VqOhl43k8bYtmFDXlDE%2BhNoJT%2B94oK%2FkUs6r8s9VBGFvNTOjum52U1%2BfcBIqv1BI%2FSHji5P34rPEqGgFCv8OM7LP0rU7EuujAhXWN8SxR46cs4ONC9phsDZgXUj26ANzXPH5jmL%2Fqak34ZJsHxPML6O7b8GOqUB1hUfXtcd7ByBZiCYrGbQmMf59FcBcOY1nBDzrJ807ABKXTZC80%2FLZxtRDCUdStoLIfDopGEqMvbmcXKpHd5uW1cEIAcMQN6npDOimCfSDpxma6Uv3Ed41CNTcfp71a3hT%2BOo7oO%2B88n6vc6641QU31mjs9YR9doP%2B5TpzMwCwaHSRxNaWyubnrPIJhtv6wp2yZHQa5ElE097Sk%2Bo6MO2zENYKh2N&X-Amz-Signature=cde443456ec630fdda573e4112830fede8f52b075a032efc155bdf76108e88d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MSXFVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDFeCzq648oXz9T6qLpJGLJ4GcFDmPop2Qt3tShkPfToAiEA0nl26RPPWb7e4%2F0fgq0GIqgME3zDU1Frq72aZnW2MngqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ1Nfpw4WflKfEQ2SrcA%2Bz%2Fi3j5KL8PWHSYr8l1zNPvjyy8dZA60izVOCOMzovE%2B%2B9lZAJlIrSvSOeW%2BNSK6WWC3MQcmVN0cyVMqrhouz9HfNEQmHzvu9ZQCe4uFgg4eQEVypvsRp25fNTvymrPwAyfTSi5DCQogalMhT5o90bZvV7zEeVQXCJg2YE%2FeG86xl98ohtm2pYnjMkwl7YKArSQf3c20y%2FRgr%2BIsSRsJs2kqN2xJQaeuDAdVz4ygdg%2B94vHM%2Bmp%2FSpo7NISKhvIUjAdLf6UPDDfWsvUsQHXL66xE7aWPXITfNBVBEjZQiszRVfbTWY5NxHEO7Jtj85I4iJ19cb1O3TCYE7PeqQ%2FTOSqP6HRcTuerZL%2Fv%2B%2BzlmMuvkMM7%2BSeR%2Ff9KDqyCwN%2FO%2BYXP7UduUFhdQIpsSiIb2rnGHiErnybFHHt19jNe9IRPsJ7EY8ZgqaEYAxCsKIrz63GtWnpDbCufBCzyypnL8FmusWcJEuBP8KktTPm0VqOhl43k8bYtmFDXlDE%2BhNoJT%2B94oK%2FkUs6r8s9VBGFvNTOjum52U1%2BfcBIqv1BI%2FSHji5P34rPEqGgFCv8OM7LP0rU7EuujAhXWN8SxR46cs4ONC9phsDZgXUj26ANzXPH5jmL%2Fqak34ZJsHxPML6O7b8GOqUB1hUfXtcd7ByBZiCYrGbQmMf59FcBcOY1nBDzrJ807ABKXTZC80%2FLZxtRDCUdStoLIfDopGEqMvbmcXKpHd5uW1cEIAcMQN6npDOimCfSDpxma6Uv3Ed41CNTcfp71a3hT%2BOo7oO%2B88n6vc6641QU31mjs9YR9doP%2B5TpzMwCwaHSRxNaWyubnrPIJhtv6wp2yZHQa5ElE097Sk%2Bo6MO2zENYKh2N&X-Amz-Signature=8b4c3f70736340176aa5e57e5dacac4fa34efa82d79be2b819365486383fe6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MSXFVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDFeCzq648oXz9T6qLpJGLJ4GcFDmPop2Qt3tShkPfToAiEA0nl26RPPWb7e4%2F0fgq0GIqgME3zDU1Frq72aZnW2MngqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ1Nfpw4WflKfEQ2SrcA%2Bz%2Fi3j5KL8PWHSYr8l1zNPvjyy8dZA60izVOCOMzovE%2B%2B9lZAJlIrSvSOeW%2BNSK6WWC3MQcmVN0cyVMqrhouz9HfNEQmHzvu9ZQCe4uFgg4eQEVypvsRp25fNTvymrPwAyfTSi5DCQogalMhT5o90bZvV7zEeVQXCJg2YE%2FeG86xl98ohtm2pYnjMkwl7YKArSQf3c20y%2FRgr%2BIsSRsJs2kqN2xJQaeuDAdVz4ygdg%2B94vHM%2Bmp%2FSpo7NISKhvIUjAdLf6UPDDfWsvUsQHXL66xE7aWPXITfNBVBEjZQiszRVfbTWY5NxHEO7Jtj85I4iJ19cb1O3TCYE7PeqQ%2FTOSqP6HRcTuerZL%2Fv%2B%2BzlmMuvkMM7%2BSeR%2Ff9KDqyCwN%2FO%2BYXP7UduUFhdQIpsSiIb2rnGHiErnybFHHt19jNe9IRPsJ7EY8ZgqaEYAxCsKIrz63GtWnpDbCufBCzyypnL8FmusWcJEuBP8KktTPm0VqOhl43k8bYtmFDXlDE%2BhNoJT%2B94oK%2FkUs6r8s9VBGFvNTOjum52U1%2BfcBIqv1BI%2FSHji5P34rPEqGgFCv8OM7LP0rU7EuujAhXWN8SxR46cs4ONC9phsDZgXUj26ANzXPH5jmL%2Fqak34ZJsHxPML6O7b8GOqUB1hUfXtcd7ByBZiCYrGbQmMf59FcBcOY1nBDzrJ807ABKXTZC80%2FLZxtRDCUdStoLIfDopGEqMvbmcXKpHd5uW1cEIAcMQN6npDOimCfSDpxma6Uv3Ed41CNTcfp71a3hT%2BOo7oO%2B88n6vc6641QU31mjs9YR9doP%2B5TpzMwCwaHSRxNaWyubnrPIJhtv6wp2yZHQa5ElE097Sk%2Bo6MO2zENYKh2N&X-Amz-Signature=792525bb0d94864a15d56e4e2ce8ce25c688e6b13adef9e7bc34d17b4f268bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MSXFVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDFeCzq648oXz9T6qLpJGLJ4GcFDmPop2Qt3tShkPfToAiEA0nl26RPPWb7e4%2F0fgq0GIqgME3zDU1Frq72aZnW2MngqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ1Nfpw4WflKfEQ2SrcA%2Bz%2Fi3j5KL8PWHSYr8l1zNPvjyy8dZA60izVOCOMzovE%2B%2B9lZAJlIrSvSOeW%2BNSK6WWC3MQcmVN0cyVMqrhouz9HfNEQmHzvu9ZQCe4uFgg4eQEVypvsRp25fNTvymrPwAyfTSi5DCQogalMhT5o90bZvV7zEeVQXCJg2YE%2FeG86xl98ohtm2pYnjMkwl7YKArSQf3c20y%2FRgr%2BIsSRsJs2kqN2xJQaeuDAdVz4ygdg%2B94vHM%2Bmp%2FSpo7NISKhvIUjAdLf6UPDDfWsvUsQHXL66xE7aWPXITfNBVBEjZQiszRVfbTWY5NxHEO7Jtj85I4iJ19cb1O3TCYE7PeqQ%2FTOSqP6HRcTuerZL%2Fv%2B%2BzlmMuvkMM7%2BSeR%2Ff9KDqyCwN%2FO%2BYXP7UduUFhdQIpsSiIb2rnGHiErnybFHHt19jNe9IRPsJ7EY8ZgqaEYAxCsKIrz63GtWnpDbCufBCzyypnL8FmusWcJEuBP8KktTPm0VqOhl43k8bYtmFDXlDE%2BhNoJT%2B94oK%2FkUs6r8s9VBGFvNTOjum52U1%2BfcBIqv1BI%2FSHji5P34rPEqGgFCv8OM7LP0rU7EuujAhXWN8SxR46cs4ONC9phsDZgXUj26ANzXPH5jmL%2Fqak34ZJsHxPML6O7b8GOqUB1hUfXtcd7ByBZiCYrGbQmMf59FcBcOY1nBDzrJ807ABKXTZC80%2FLZxtRDCUdStoLIfDopGEqMvbmcXKpHd5uW1cEIAcMQN6npDOimCfSDpxma6Uv3Ed41CNTcfp71a3hT%2BOo7oO%2B88n6vc6641QU31mjs9YR9doP%2B5TpzMwCwaHSRxNaWyubnrPIJhtv6wp2yZHQa5ElE097Sk%2Bo6MO2zENYKh2N&X-Amz-Signature=163c8909bab30267053abba2db9b739de990de6e44da7c2c62732f79ce22563e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MSXFVQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDFeCzq648oXz9T6qLpJGLJ4GcFDmPop2Qt3tShkPfToAiEA0nl26RPPWb7e4%2F0fgq0GIqgME3zDU1Frq72aZnW2MngqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ1Nfpw4WflKfEQ2SrcA%2Bz%2Fi3j5KL8PWHSYr8l1zNPvjyy8dZA60izVOCOMzovE%2B%2B9lZAJlIrSvSOeW%2BNSK6WWC3MQcmVN0cyVMqrhouz9HfNEQmHzvu9ZQCe4uFgg4eQEVypvsRp25fNTvymrPwAyfTSi5DCQogalMhT5o90bZvV7zEeVQXCJg2YE%2FeG86xl98ohtm2pYnjMkwl7YKArSQf3c20y%2FRgr%2BIsSRsJs2kqN2xJQaeuDAdVz4ygdg%2B94vHM%2Bmp%2FSpo7NISKhvIUjAdLf6UPDDfWsvUsQHXL66xE7aWPXITfNBVBEjZQiszRVfbTWY5NxHEO7Jtj85I4iJ19cb1O3TCYE7PeqQ%2FTOSqP6HRcTuerZL%2Fv%2B%2BzlmMuvkMM7%2BSeR%2Ff9KDqyCwN%2FO%2BYXP7UduUFhdQIpsSiIb2rnGHiErnybFHHt19jNe9IRPsJ7EY8ZgqaEYAxCsKIrz63GtWnpDbCufBCzyypnL8FmusWcJEuBP8KktTPm0VqOhl43k8bYtmFDXlDE%2BhNoJT%2B94oK%2FkUs6r8s9VBGFvNTOjum52U1%2BfcBIqv1BI%2FSHji5P34rPEqGgFCv8OM7LP0rU7EuujAhXWN8SxR46cs4ONC9phsDZgXUj26ANzXPH5jmL%2Fqak34ZJsHxPML6O7b8GOqUB1hUfXtcd7ByBZiCYrGbQmMf59FcBcOY1nBDzrJ807ABKXTZC80%2FLZxtRDCUdStoLIfDopGEqMvbmcXKpHd5uW1cEIAcMQN6npDOimCfSDpxma6Uv3Ed41CNTcfp71a3hT%2BOo7oO%2B88n6vc6641QU31mjs9YR9doP%2B5TpzMwCwaHSRxNaWyubnrPIJhtv6wp2yZHQa5ElE097Sk%2Bo6MO2zENYKh2N&X-Amz-Signature=3c384215d97fe63ec7818294f034eedb6b23284a371c663a570d12ef268383c8&X-Amz-SignedHeaders=host&x-id=GetObject)
