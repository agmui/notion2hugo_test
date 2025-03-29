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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDADVRDO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDpTzPQr1nZPYqtsXh8tCFGrW1nSE6r8RggrxJspd5t9QIgJ%2FJhN1hffOGsSBPgtmyvQB3Q1jmiZHwB65lh1M9qujwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMLbGdOBe0TLluMyqCrcA0Wm83RxGqGWbrjU4zfKiMQbq%2FxgD1xPH1uUb0dhE%2BZ0PmAdbI%2FKdbmEGVw4vOk%2BZuMTMETDSPQOsMHTZytrOzIHQOM42TtGMSSlf3AiVVl8gbP5qPr0S%2B3MlHEGqPJVZ2lXY9JPEiTQEDtWAeJgV4kEJfBkSk8qjlE4eNAOjcJ0X6GdjF%2F9Oj4PBvSnDD78VKOcXHuT1j5p49fwbUmMO5pVGB7N9M%2BnNW3xhnMA1SVNCmPZ%2Bsl0fe7321IQ%2BvxfAN0rVoYU3WGxdLF34vNxBjaZTXnuPjbPNU4fXjUTfxsrgtWYoTq1kdAyvGnlzQQQmbtAp0br%2FM03GyywHvlrtXwoePYee%2BmvnPPC2ux5yyAY583hNF5WzN68HVKm9I54YlEKRFCi0rualvGsbgAW9AuFVGWPx8ASsRZqHjygsxiaESa07%2FZWR%2BYu%2FbW00tEJ9Jx9LnvhJQFb15hvG%2BV%2Fxgqs59l6T7kOMonIV8S28EPlINuJeZFs4F9BKU1eZyhFcCg00da0sO%2Ft2aD5JRPo9hn2SQxd2hOXKndY6yWCh%2BAnKjnLYroOCQqB8tueV2L9HFKd2DRDYHploxtLSZT%2FLjEt3wWYGOfdrLgO7zHZ%2FORwFbftvYgWJAfX5N8tMLnfnL8GOqUBsFtY768AqT%2BC3YIceLOEXBBftkM2kR1JsrNZv8wnJi3GTlHMTnpHW9coCl1SvRq%2FgXSKQRCaXaMcJkilacjO56heTifdsJqfOk%2BTVmjS9d8fcvvO3QhFIg%2BYcOU4k2xTjTosiEpoqOD%2BDbh9cDneZKXxjB3%2FO7BeeVMd%2FHbrxuCKnMG7S1VakUup81bomLGIYpu3pPLPVcPDYZZsLHGqwnhuDLjf&X-Amz-Signature=2c085740f7170b143b2851adc7b5bb0d76653aa51f0e06db897c70fc1f877f72&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDADVRDO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDpTzPQr1nZPYqtsXh8tCFGrW1nSE6r8RggrxJspd5t9QIgJ%2FJhN1hffOGsSBPgtmyvQB3Q1jmiZHwB65lh1M9qujwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMLbGdOBe0TLluMyqCrcA0Wm83RxGqGWbrjU4zfKiMQbq%2FxgD1xPH1uUb0dhE%2BZ0PmAdbI%2FKdbmEGVw4vOk%2BZuMTMETDSPQOsMHTZytrOzIHQOM42TtGMSSlf3AiVVl8gbP5qPr0S%2B3MlHEGqPJVZ2lXY9JPEiTQEDtWAeJgV4kEJfBkSk8qjlE4eNAOjcJ0X6GdjF%2F9Oj4PBvSnDD78VKOcXHuT1j5p49fwbUmMO5pVGB7N9M%2BnNW3xhnMA1SVNCmPZ%2Bsl0fe7321IQ%2BvxfAN0rVoYU3WGxdLF34vNxBjaZTXnuPjbPNU4fXjUTfxsrgtWYoTq1kdAyvGnlzQQQmbtAp0br%2FM03GyywHvlrtXwoePYee%2BmvnPPC2ux5yyAY583hNF5WzN68HVKm9I54YlEKRFCi0rualvGsbgAW9AuFVGWPx8ASsRZqHjygsxiaESa07%2FZWR%2BYu%2FbW00tEJ9Jx9LnvhJQFb15hvG%2BV%2Fxgqs59l6T7kOMonIV8S28EPlINuJeZFs4F9BKU1eZyhFcCg00da0sO%2Ft2aD5JRPo9hn2SQxd2hOXKndY6yWCh%2BAnKjnLYroOCQqB8tueV2L9HFKd2DRDYHploxtLSZT%2FLjEt3wWYGOfdrLgO7zHZ%2FORwFbftvYgWJAfX5N8tMLnfnL8GOqUBsFtY768AqT%2BC3YIceLOEXBBftkM2kR1JsrNZv8wnJi3GTlHMTnpHW9coCl1SvRq%2FgXSKQRCaXaMcJkilacjO56heTifdsJqfOk%2BTVmjS9d8fcvvO3QhFIg%2BYcOU4k2xTjTosiEpoqOD%2BDbh9cDneZKXxjB3%2FO7BeeVMd%2FHbrxuCKnMG7S1VakUup81bomLGIYpu3pPLPVcPDYZZsLHGqwnhuDLjf&X-Amz-Signature=081229319732f7118a923e8e886f435787743085dfe14bfa5d06f28d5e80a8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDADVRDO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDpTzPQr1nZPYqtsXh8tCFGrW1nSE6r8RggrxJspd5t9QIgJ%2FJhN1hffOGsSBPgtmyvQB3Q1jmiZHwB65lh1M9qujwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMLbGdOBe0TLluMyqCrcA0Wm83RxGqGWbrjU4zfKiMQbq%2FxgD1xPH1uUb0dhE%2BZ0PmAdbI%2FKdbmEGVw4vOk%2BZuMTMETDSPQOsMHTZytrOzIHQOM42TtGMSSlf3AiVVl8gbP5qPr0S%2B3MlHEGqPJVZ2lXY9JPEiTQEDtWAeJgV4kEJfBkSk8qjlE4eNAOjcJ0X6GdjF%2F9Oj4PBvSnDD78VKOcXHuT1j5p49fwbUmMO5pVGB7N9M%2BnNW3xhnMA1SVNCmPZ%2Bsl0fe7321IQ%2BvxfAN0rVoYU3WGxdLF34vNxBjaZTXnuPjbPNU4fXjUTfxsrgtWYoTq1kdAyvGnlzQQQmbtAp0br%2FM03GyywHvlrtXwoePYee%2BmvnPPC2ux5yyAY583hNF5WzN68HVKm9I54YlEKRFCi0rualvGsbgAW9AuFVGWPx8ASsRZqHjygsxiaESa07%2FZWR%2BYu%2FbW00tEJ9Jx9LnvhJQFb15hvG%2BV%2Fxgqs59l6T7kOMonIV8S28EPlINuJeZFs4F9BKU1eZyhFcCg00da0sO%2Ft2aD5JRPo9hn2SQxd2hOXKndY6yWCh%2BAnKjnLYroOCQqB8tueV2L9HFKd2DRDYHploxtLSZT%2FLjEt3wWYGOfdrLgO7zHZ%2FORwFbftvYgWJAfX5N8tMLnfnL8GOqUBsFtY768AqT%2BC3YIceLOEXBBftkM2kR1JsrNZv8wnJi3GTlHMTnpHW9coCl1SvRq%2FgXSKQRCaXaMcJkilacjO56heTifdsJqfOk%2BTVmjS9d8fcvvO3QhFIg%2BYcOU4k2xTjTosiEpoqOD%2BDbh9cDneZKXxjB3%2FO7BeeVMd%2FHbrxuCKnMG7S1VakUup81bomLGIYpu3pPLPVcPDYZZsLHGqwnhuDLjf&X-Amz-Signature=45c28d4a717a3b1442a9af12ec7a0bea19a94f823349f03475ee9066ba305f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDADVRDO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDpTzPQr1nZPYqtsXh8tCFGrW1nSE6r8RggrxJspd5t9QIgJ%2FJhN1hffOGsSBPgtmyvQB3Q1jmiZHwB65lh1M9qujwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMLbGdOBe0TLluMyqCrcA0Wm83RxGqGWbrjU4zfKiMQbq%2FxgD1xPH1uUb0dhE%2BZ0PmAdbI%2FKdbmEGVw4vOk%2BZuMTMETDSPQOsMHTZytrOzIHQOM42TtGMSSlf3AiVVl8gbP5qPr0S%2B3MlHEGqPJVZ2lXY9JPEiTQEDtWAeJgV4kEJfBkSk8qjlE4eNAOjcJ0X6GdjF%2F9Oj4PBvSnDD78VKOcXHuT1j5p49fwbUmMO5pVGB7N9M%2BnNW3xhnMA1SVNCmPZ%2Bsl0fe7321IQ%2BvxfAN0rVoYU3WGxdLF34vNxBjaZTXnuPjbPNU4fXjUTfxsrgtWYoTq1kdAyvGnlzQQQmbtAp0br%2FM03GyywHvlrtXwoePYee%2BmvnPPC2ux5yyAY583hNF5WzN68HVKm9I54YlEKRFCi0rualvGsbgAW9AuFVGWPx8ASsRZqHjygsxiaESa07%2FZWR%2BYu%2FbW00tEJ9Jx9LnvhJQFb15hvG%2BV%2Fxgqs59l6T7kOMonIV8S28EPlINuJeZFs4F9BKU1eZyhFcCg00da0sO%2Ft2aD5JRPo9hn2SQxd2hOXKndY6yWCh%2BAnKjnLYroOCQqB8tueV2L9HFKd2DRDYHploxtLSZT%2FLjEt3wWYGOfdrLgO7zHZ%2FORwFbftvYgWJAfX5N8tMLnfnL8GOqUBsFtY768AqT%2BC3YIceLOEXBBftkM2kR1JsrNZv8wnJi3GTlHMTnpHW9coCl1SvRq%2FgXSKQRCaXaMcJkilacjO56heTifdsJqfOk%2BTVmjS9d8fcvvO3QhFIg%2BYcOU4k2xTjTosiEpoqOD%2BDbh9cDneZKXxjB3%2FO7BeeVMd%2FHbrxuCKnMG7S1VakUup81bomLGIYpu3pPLPVcPDYZZsLHGqwnhuDLjf&X-Amz-Signature=2d5e8bd15e748989c3e30c3e6dbe2ff09d1da51613f71521f7ec1f85889cbd24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDADVRDO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDpTzPQr1nZPYqtsXh8tCFGrW1nSE6r8RggrxJspd5t9QIgJ%2FJhN1hffOGsSBPgtmyvQB3Q1jmiZHwB65lh1M9qujwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMLbGdOBe0TLluMyqCrcA0Wm83RxGqGWbrjU4zfKiMQbq%2FxgD1xPH1uUb0dhE%2BZ0PmAdbI%2FKdbmEGVw4vOk%2BZuMTMETDSPQOsMHTZytrOzIHQOM42TtGMSSlf3AiVVl8gbP5qPr0S%2B3MlHEGqPJVZ2lXY9JPEiTQEDtWAeJgV4kEJfBkSk8qjlE4eNAOjcJ0X6GdjF%2F9Oj4PBvSnDD78VKOcXHuT1j5p49fwbUmMO5pVGB7N9M%2BnNW3xhnMA1SVNCmPZ%2Bsl0fe7321IQ%2BvxfAN0rVoYU3WGxdLF34vNxBjaZTXnuPjbPNU4fXjUTfxsrgtWYoTq1kdAyvGnlzQQQmbtAp0br%2FM03GyywHvlrtXwoePYee%2BmvnPPC2ux5yyAY583hNF5WzN68HVKm9I54YlEKRFCi0rualvGsbgAW9AuFVGWPx8ASsRZqHjygsxiaESa07%2FZWR%2BYu%2FbW00tEJ9Jx9LnvhJQFb15hvG%2BV%2Fxgqs59l6T7kOMonIV8S28EPlINuJeZFs4F9BKU1eZyhFcCg00da0sO%2Ft2aD5JRPo9hn2SQxd2hOXKndY6yWCh%2BAnKjnLYroOCQqB8tueV2L9HFKd2DRDYHploxtLSZT%2FLjEt3wWYGOfdrLgO7zHZ%2FORwFbftvYgWJAfX5N8tMLnfnL8GOqUBsFtY768AqT%2BC3YIceLOEXBBftkM2kR1JsrNZv8wnJi3GTlHMTnpHW9coCl1SvRq%2FgXSKQRCaXaMcJkilacjO56heTifdsJqfOk%2BTVmjS9d8fcvvO3QhFIg%2BYcOU4k2xTjTosiEpoqOD%2BDbh9cDneZKXxjB3%2FO7BeeVMd%2FHbrxuCKnMG7S1VakUup81bomLGIYpu3pPLPVcPDYZZsLHGqwnhuDLjf&X-Amz-Signature=ab0cdc26238de7b21920a66a0858af2fc81c53c4076c07a72632c45353d7fb24&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDADVRDO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDpTzPQr1nZPYqtsXh8tCFGrW1nSE6r8RggrxJspd5t9QIgJ%2FJhN1hffOGsSBPgtmyvQB3Q1jmiZHwB65lh1M9qujwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMLbGdOBe0TLluMyqCrcA0Wm83RxGqGWbrjU4zfKiMQbq%2FxgD1xPH1uUb0dhE%2BZ0PmAdbI%2FKdbmEGVw4vOk%2BZuMTMETDSPQOsMHTZytrOzIHQOM42TtGMSSlf3AiVVl8gbP5qPr0S%2B3MlHEGqPJVZ2lXY9JPEiTQEDtWAeJgV4kEJfBkSk8qjlE4eNAOjcJ0X6GdjF%2F9Oj4PBvSnDD78VKOcXHuT1j5p49fwbUmMO5pVGB7N9M%2BnNW3xhnMA1SVNCmPZ%2Bsl0fe7321IQ%2BvxfAN0rVoYU3WGxdLF34vNxBjaZTXnuPjbPNU4fXjUTfxsrgtWYoTq1kdAyvGnlzQQQmbtAp0br%2FM03GyywHvlrtXwoePYee%2BmvnPPC2ux5yyAY583hNF5WzN68HVKm9I54YlEKRFCi0rualvGsbgAW9AuFVGWPx8ASsRZqHjygsxiaESa07%2FZWR%2BYu%2FbW00tEJ9Jx9LnvhJQFb15hvG%2BV%2Fxgqs59l6T7kOMonIV8S28EPlINuJeZFs4F9BKU1eZyhFcCg00da0sO%2Ft2aD5JRPo9hn2SQxd2hOXKndY6yWCh%2BAnKjnLYroOCQqB8tueV2L9HFKd2DRDYHploxtLSZT%2FLjEt3wWYGOfdrLgO7zHZ%2FORwFbftvYgWJAfX5N8tMLnfnL8GOqUBsFtY768AqT%2BC3YIceLOEXBBftkM2kR1JsrNZv8wnJi3GTlHMTnpHW9coCl1SvRq%2FgXSKQRCaXaMcJkilacjO56heTifdsJqfOk%2BTVmjS9d8fcvvO3QhFIg%2BYcOU4k2xTjTosiEpoqOD%2BDbh9cDneZKXxjB3%2FO7BeeVMd%2FHbrxuCKnMG7S1VakUup81bomLGIYpu3pPLPVcPDYZZsLHGqwnhuDLjf&X-Amz-Signature=14737e84db1d03b11f28adb85efc30052a75edde91311302e53ca4897017f6d7&X-Amz-SignedHeaders=host&x-id=GetObject)
