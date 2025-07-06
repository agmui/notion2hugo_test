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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGUTPSGQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCSFgZNzJ%2Fbv7e4ulukFQfz5ZrXEs1xUQ3j9gvIbo4EeAIhAKGd1WAl7YqTxOTy9PCf9LHRh6vZBQlpYlXSQvf%2FHM0AKv8DCGMQABoMNjM3NDIzMTgzODA1Igy0DFv%2BN0WAeN%2Bsazsq3ANdX5IXZ4YcYive28%2FfDOn4UeJo1WHVTxHI1lnPoxhscqk8S09MeWigviYaASuNsdap2rYX3AydHSX8frL0jZ71iaWZLcvBj69IEN9qHu%2Bfcdl5zTA55vTwvxN4MWgu2SFgVV56CSuWNBN8qyp9p%2Fne52YIwQ4cs9ZioQTABTyfSm1708SNN2BDiuANm%2B5gcp2q2TSkrTUSLmnkQ2u4ZBTNCxQ9WaXl22db04OUDAdNm3E%2FnjFBdQJ4ypvFxjr8b9FvoUtE%2FAwJSLIL3N4%2FAo80gFzwEQ3wJaZ%2BYK4FLUuegiSwsx%2BiE%2FD%2Fe5w2HxU3LvpzLwZcPnKnIYbfVfqT6Jejm1cBCWqFVF636mQFeZaIyQLkleLbEYCMkWjZ9xW9h8QH0i5jBU6%2Bmdlv68JceSIzgfITeR0PWfkcVQtutZh0FJZQKQqmrUzHFVAJJAA8Xf6ZOEkMhnyfyZ7Kk8e9AqudvY%2BpX4sCiNnLyLmd4vxrhOw8aj8SB6VbNvQ23GMrP8yD6iqBdRPCPQuDdH%2FusGtcAnLpzrcL2dplb95wB1CDTLi3Edl7aOiKe7i5FHe8PV2k5e12OJ%2Bmd9cdlyfGI5SvI%2FiDJkyuAD8e%2BH59GwdcfLPN68GZnYiIOk3TSDDz5qrDBjqkAYWkpvzQkv%2BcBhnt4JGrE3CJtbo55v512D%2Fjo5zsA17ls9box%2FhYM3ziAP%2BfauYQvDYGG3%2FpCv9Ui%2FadH1VyukTgyff3wBRdeqTMB3b4m6nYz%2F1RYJjZ2C5r2Y%2BRgAsjx8OWrIs%2BeZEudOQRAkTKSpz0UvRWEkiyDEUJ7FM2OQ3nL53QAeVPBY0hWUcVFGQwKCm4oyki%2FpLQaZI3cwNIEtL1sOSJ&X-Amz-Signature=25d9d497c582ff0522682fcd04db2d5df37048af653b4feaa62805ee4dc8b337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGUTPSGQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCSFgZNzJ%2Fbv7e4ulukFQfz5ZrXEs1xUQ3j9gvIbo4EeAIhAKGd1WAl7YqTxOTy9PCf9LHRh6vZBQlpYlXSQvf%2FHM0AKv8DCGMQABoMNjM3NDIzMTgzODA1Igy0DFv%2BN0WAeN%2Bsazsq3ANdX5IXZ4YcYive28%2FfDOn4UeJo1WHVTxHI1lnPoxhscqk8S09MeWigviYaASuNsdap2rYX3AydHSX8frL0jZ71iaWZLcvBj69IEN9qHu%2Bfcdl5zTA55vTwvxN4MWgu2SFgVV56CSuWNBN8qyp9p%2Fne52YIwQ4cs9ZioQTABTyfSm1708SNN2BDiuANm%2B5gcp2q2TSkrTUSLmnkQ2u4ZBTNCxQ9WaXl22db04OUDAdNm3E%2FnjFBdQJ4ypvFxjr8b9FvoUtE%2FAwJSLIL3N4%2FAo80gFzwEQ3wJaZ%2BYK4FLUuegiSwsx%2BiE%2FD%2Fe5w2HxU3LvpzLwZcPnKnIYbfVfqT6Jejm1cBCWqFVF636mQFeZaIyQLkleLbEYCMkWjZ9xW9h8QH0i5jBU6%2Bmdlv68JceSIzgfITeR0PWfkcVQtutZh0FJZQKQqmrUzHFVAJJAA8Xf6ZOEkMhnyfyZ7Kk8e9AqudvY%2BpX4sCiNnLyLmd4vxrhOw8aj8SB6VbNvQ23GMrP8yD6iqBdRPCPQuDdH%2FusGtcAnLpzrcL2dplb95wB1CDTLi3Edl7aOiKe7i5FHe8PV2k5e12OJ%2Bmd9cdlyfGI5SvI%2FiDJkyuAD8e%2BH59GwdcfLPN68GZnYiIOk3TSDDz5qrDBjqkAYWkpvzQkv%2BcBhnt4JGrE3CJtbo55v512D%2Fjo5zsA17ls9box%2FhYM3ziAP%2BfauYQvDYGG3%2FpCv9Ui%2FadH1VyukTgyff3wBRdeqTMB3b4m6nYz%2F1RYJjZ2C5r2Y%2BRgAsjx8OWrIs%2BeZEudOQRAkTKSpz0UvRWEkiyDEUJ7FM2OQ3nL53QAeVPBY0hWUcVFGQwKCm4oyki%2FpLQaZI3cwNIEtL1sOSJ&X-Amz-Signature=9c8f3fe128593ca2e19dc5c4b065856f1686bc8ae737d7babf1da95b227a2b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGUTPSGQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCSFgZNzJ%2Fbv7e4ulukFQfz5ZrXEs1xUQ3j9gvIbo4EeAIhAKGd1WAl7YqTxOTy9PCf9LHRh6vZBQlpYlXSQvf%2FHM0AKv8DCGMQABoMNjM3NDIzMTgzODA1Igy0DFv%2BN0WAeN%2Bsazsq3ANdX5IXZ4YcYive28%2FfDOn4UeJo1WHVTxHI1lnPoxhscqk8S09MeWigviYaASuNsdap2rYX3AydHSX8frL0jZ71iaWZLcvBj69IEN9qHu%2Bfcdl5zTA55vTwvxN4MWgu2SFgVV56CSuWNBN8qyp9p%2Fne52YIwQ4cs9ZioQTABTyfSm1708SNN2BDiuANm%2B5gcp2q2TSkrTUSLmnkQ2u4ZBTNCxQ9WaXl22db04OUDAdNm3E%2FnjFBdQJ4ypvFxjr8b9FvoUtE%2FAwJSLIL3N4%2FAo80gFzwEQ3wJaZ%2BYK4FLUuegiSwsx%2BiE%2FD%2Fe5w2HxU3LvpzLwZcPnKnIYbfVfqT6Jejm1cBCWqFVF636mQFeZaIyQLkleLbEYCMkWjZ9xW9h8QH0i5jBU6%2Bmdlv68JceSIzgfITeR0PWfkcVQtutZh0FJZQKQqmrUzHFVAJJAA8Xf6ZOEkMhnyfyZ7Kk8e9AqudvY%2BpX4sCiNnLyLmd4vxrhOw8aj8SB6VbNvQ23GMrP8yD6iqBdRPCPQuDdH%2FusGtcAnLpzrcL2dplb95wB1CDTLi3Edl7aOiKe7i5FHe8PV2k5e12OJ%2Bmd9cdlyfGI5SvI%2FiDJkyuAD8e%2BH59GwdcfLPN68GZnYiIOk3TSDDz5qrDBjqkAYWkpvzQkv%2BcBhnt4JGrE3CJtbo55v512D%2Fjo5zsA17ls9box%2FhYM3ziAP%2BfauYQvDYGG3%2FpCv9Ui%2FadH1VyukTgyff3wBRdeqTMB3b4m6nYz%2F1RYJjZ2C5r2Y%2BRgAsjx8OWrIs%2BeZEudOQRAkTKSpz0UvRWEkiyDEUJ7FM2OQ3nL53QAeVPBY0hWUcVFGQwKCm4oyki%2FpLQaZI3cwNIEtL1sOSJ&X-Amz-Signature=41c8240a5a187852a2fc795922c61499510ce27c5bfef68c2aad0f1b371c4f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGUTPSGQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCSFgZNzJ%2Fbv7e4ulukFQfz5ZrXEs1xUQ3j9gvIbo4EeAIhAKGd1WAl7YqTxOTy9PCf9LHRh6vZBQlpYlXSQvf%2FHM0AKv8DCGMQABoMNjM3NDIzMTgzODA1Igy0DFv%2BN0WAeN%2Bsazsq3ANdX5IXZ4YcYive28%2FfDOn4UeJo1WHVTxHI1lnPoxhscqk8S09MeWigviYaASuNsdap2rYX3AydHSX8frL0jZ71iaWZLcvBj69IEN9qHu%2Bfcdl5zTA55vTwvxN4MWgu2SFgVV56CSuWNBN8qyp9p%2Fne52YIwQ4cs9ZioQTABTyfSm1708SNN2BDiuANm%2B5gcp2q2TSkrTUSLmnkQ2u4ZBTNCxQ9WaXl22db04OUDAdNm3E%2FnjFBdQJ4ypvFxjr8b9FvoUtE%2FAwJSLIL3N4%2FAo80gFzwEQ3wJaZ%2BYK4FLUuegiSwsx%2BiE%2FD%2Fe5w2HxU3LvpzLwZcPnKnIYbfVfqT6Jejm1cBCWqFVF636mQFeZaIyQLkleLbEYCMkWjZ9xW9h8QH0i5jBU6%2Bmdlv68JceSIzgfITeR0PWfkcVQtutZh0FJZQKQqmrUzHFVAJJAA8Xf6ZOEkMhnyfyZ7Kk8e9AqudvY%2BpX4sCiNnLyLmd4vxrhOw8aj8SB6VbNvQ23GMrP8yD6iqBdRPCPQuDdH%2FusGtcAnLpzrcL2dplb95wB1CDTLi3Edl7aOiKe7i5FHe8PV2k5e12OJ%2Bmd9cdlyfGI5SvI%2FiDJkyuAD8e%2BH59GwdcfLPN68GZnYiIOk3TSDDz5qrDBjqkAYWkpvzQkv%2BcBhnt4JGrE3CJtbo55v512D%2Fjo5zsA17ls9box%2FhYM3ziAP%2BfauYQvDYGG3%2FpCv9Ui%2FadH1VyukTgyff3wBRdeqTMB3b4m6nYz%2F1RYJjZ2C5r2Y%2BRgAsjx8OWrIs%2BeZEudOQRAkTKSpz0UvRWEkiyDEUJ7FM2OQ3nL53QAeVPBY0hWUcVFGQwKCm4oyki%2FpLQaZI3cwNIEtL1sOSJ&X-Amz-Signature=d3b3293c3c1099031da2ea0c2d557938ad6302fc705d6e2aa558514f961e8b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGUTPSGQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCSFgZNzJ%2Fbv7e4ulukFQfz5ZrXEs1xUQ3j9gvIbo4EeAIhAKGd1WAl7YqTxOTy9PCf9LHRh6vZBQlpYlXSQvf%2FHM0AKv8DCGMQABoMNjM3NDIzMTgzODA1Igy0DFv%2BN0WAeN%2Bsazsq3ANdX5IXZ4YcYive28%2FfDOn4UeJo1WHVTxHI1lnPoxhscqk8S09MeWigviYaASuNsdap2rYX3AydHSX8frL0jZ71iaWZLcvBj69IEN9qHu%2Bfcdl5zTA55vTwvxN4MWgu2SFgVV56CSuWNBN8qyp9p%2Fne52YIwQ4cs9ZioQTABTyfSm1708SNN2BDiuANm%2B5gcp2q2TSkrTUSLmnkQ2u4ZBTNCxQ9WaXl22db04OUDAdNm3E%2FnjFBdQJ4ypvFxjr8b9FvoUtE%2FAwJSLIL3N4%2FAo80gFzwEQ3wJaZ%2BYK4FLUuegiSwsx%2BiE%2FD%2Fe5w2HxU3LvpzLwZcPnKnIYbfVfqT6Jejm1cBCWqFVF636mQFeZaIyQLkleLbEYCMkWjZ9xW9h8QH0i5jBU6%2Bmdlv68JceSIzgfITeR0PWfkcVQtutZh0FJZQKQqmrUzHFVAJJAA8Xf6ZOEkMhnyfyZ7Kk8e9AqudvY%2BpX4sCiNnLyLmd4vxrhOw8aj8SB6VbNvQ23GMrP8yD6iqBdRPCPQuDdH%2FusGtcAnLpzrcL2dplb95wB1CDTLi3Edl7aOiKe7i5FHe8PV2k5e12OJ%2Bmd9cdlyfGI5SvI%2FiDJkyuAD8e%2BH59GwdcfLPN68GZnYiIOk3TSDDz5qrDBjqkAYWkpvzQkv%2BcBhnt4JGrE3CJtbo55v512D%2Fjo5zsA17ls9box%2FhYM3ziAP%2BfauYQvDYGG3%2FpCv9Ui%2FadH1VyukTgyff3wBRdeqTMB3b4m6nYz%2F1RYJjZ2C5r2Y%2BRgAsjx8OWrIs%2BeZEudOQRAkTKSpz0UvRWEkiyDEUJ7FM2OQ3nL53QAeVPBY0hWUcVFGQwKCm4oyki%2FpLQaZI3cwNIEtL1sOSJ&X-Amz-Signature=c30bf2976690fa421165f5df57f62fbaa73555a5352ab48ffdfc4a46d22ebedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGUTPSGQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCSFgZNzJ%2Fbv7e4ulukFQfz5ZrXEs1xUQ3j9gvIbo4EeAIhAKGd1WAl7YqTxOTy9PCf9LHRh6vZBQlpYlXSQvf%2FHM0AKv8DCGMQABoMNjM3NDIzMTgzODA1Igy0DFv%2BN0WAeN%2Bsazsq3ANdX5IXZ4YcYive28%2FfDOn4UeJo1WHVTxHI1lnPoxhscqk8S09MeWigviYaASuNsdap2rYX3AydHSX8frL0jZ71iaWZLcvBj69IEN9qHu%2Bfcdl5zTA55vTwvxN4MWgu2SFgVV56CSuWNBN8qyp9p%2Fne52YIwQ4cs9ZioQTABTyfSm1708SNN2BDiuANm%2B5gcp2q2TSkrTUSLmnkQ2u4ZBTNCxQ9WaXl22db04OUDAdNm3E%2FnjFBdQJ4ypvFxjr8b9FvoUtE%2FAwJSLIL3N4%2FAo80gFzwEQ3wJaZ%2BYK4FLUuegiSwsx%2BiE%2FD%2Fe5w2HxU3LvpzLwZcPnKnIYbfVfqT6Jejm1cBCWqFVF636mQFeZaIyQLkleLbEYCMkWjZ9xW9h8QH0i5jBU6%2Bmdlv68JceSIzgfITeR0PWfkcVQtutZh0FJZQKQqmrUzHFVAJJAA8Xf6ZOEkMhnyfyZ7Kk8e9AqudvY%2BpX4sCiNnLyLmd4vxrhOw8aj8SB6VbNvQ23GMrP8yD6iqBdRPCPQuDdH%2FusGtcAnLpzrcL2dplb95wB1CDTLi3Edl7aOiKe7i5FHe8PV2k5e12OJ%2Bmd9cdlyfGI5SvI%2FiDJkyuAD8e%2BH59GwdcfLPN68GZnYiIOk3TSDDz5qrDBjqkAYWkpvzQkv%2BcBhnt4JGrE3CJtbo55v512D%2Fjo5zsA17ls9box%2FhYM3ziAP%2BfauYQvDYGG3%2FpCv9Ui%2FadH1VyukTgyff3wBRdeqTMB3b4m6nYz%2F1RYJjZ2C5r2Y%2BRgAsjx8OWrIs%2BeZEudOQRAkTKSpz0UvRWEkiyDEUJ7FM2OQ3nL53QAeVPBY0hWUcVFGQwKCm4oyki%2FpLQaZI3cwNIEtL1sOSJ&X-Amz-Signature=ee579caf5e6d85db9427273356c4eb814de951767ca2dec7284b18530a5a1a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
