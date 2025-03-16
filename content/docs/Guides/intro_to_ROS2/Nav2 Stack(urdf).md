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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUHT4EH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtbj1jdrJCZ5hmZYq4RWcLAoyLjLM82csQjeLzylEgbgIgT2NOICDh85yloRzGYLklvVBeLvkgFTi%2BCgnws82SGZYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPaqNjdDhietOMYZXSrcA80biv3uIGhdJ4DBtV%2Fl6SLQAJn28n10BabXjY7lSPLnflOYVAH1sJQ63Xg%2FSdLWt2cozWKnR6Dg%2FwzgqyPLJlIzbxHfVOvBqa%2BY3h5ohi0EXZgiyzbdJr9cukfCrsHeMBE8Qhosh3tv4He59MkO74%2FwBBYva96oGXpSA6FgELsHUw1rQPKZpqyCJ4n5k5Yre0Hcw%2Fq6yufZiewFXQh2CHraNZVwoO%2B43dTh9R7quUVyOEf3WJX%2BoQ3IxiNKM6%2FX6z9ZF6Dtw2tf7UYy2zvzRBWY6JJfwH8wVYc6JVF90LsrVZqzYFdfIYlcSi57%2Bi1fcnLD5KoTyaR3hNujvcKjlfyaq%2Feun5ZgpAvE6FhZcSl3bR51UncfDNGFJiMcVdz6Gl7oS48Vw3yMyRCNESJ1TypQDCImEhr9liCTtjm6dMpmNW0Z9xCrIoDpZapFgoWJ1BNEifLDfTWfmxqq1OX0XGhk61QakwEW4fOKZk6QUSgI9wSRD%2FkOlvwIi%2BeLZljD6SlrKunBSizutPqXBQ3pn94laDTYduSrVdyAkPyI9iwO93hcUFXJRfvrOMB2CM9u6TvgtOHZsAvwdwpdbOzOyXGX1dzrrmpIxvCwHtDMWAvvvXv5BOk8SZ7Uih9jML2K274GOqUB1FnDTwvPeBrAPPkjqvVLJzcVSrpowAVVvgaLt4p102tRF2Oz2lrOsdog0l9FTD0VyTK6BJBzycwj%2Bj7Ddr8sM55tLCTYenQTDDszX%2BvrC%2FbKRUV0qpYT%2FF6vtgcLUh4UzrOc6prkMLowASPX5oEpYT8XLkPuddn6iIH43xTGvFwjpYSLGWw8WPlMPXb0r7t9ypDfrU7Vr3%2FliIQqqza%2BO%2BBr79VF&X-Amz-Signature=9c04a0f71f12d86667bd0a533b2725bf7074de51965a970e3b1e84173094aa94&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUHT4EH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtbj1jdrJCZ5hmZYq4RWcLAoyLjLM82csQjeLzylEgbgIgT2NOICDh85yloRzGYLklvVBeLvkgFTi%2BCgnws82SGZYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPaqNjdDhietOMYZXSrcA80biv3uIGhdJ4DBtV%2Fl6SLQAJn28n10BabXjY7lSPLnflOYVAH1sJQ63Xg%2FSdLWt2cozWKnR6Dg%2FwzgqyPLJlIzbxHfVOvBqa%2BY3h5ohi0EXZgiyzbdJr9cukfCrsHeMBE8Qhosh3tv4He59MkO74%2FwBBYva96oGXpSA6FgELsHUw1rQPKZpqyCJ4n5k5Yre0Hcw%2Fq6yufZiewFXQh2CHraNZVwoO%2B43dTh9R7quUVyOEf3WJX%2BoQ3IxiNKM6%2FX6z9ZF6Dtw2tf7UYy2zvzRBWY6JJfwH8wVYc6JVF90LsrVZqzYFdfIYlcSi57%2Bi1fcnLD5KoTyaR3hNujvcKjlfyaq%2Feun5ZgpAvE6FhZcSl3bR51UncfDNGFJiMcVdz6Gl7oS48Vw3yMyRCNESJ1TypQDCImEhr9liCTtjm6dMpmNW0Z9xCrIoDpZapFgoWJ1BNEifLDfTWfmxqq1OX0XGhk61QakwEW4fOKZk6QUSgI9wSRD%2FkOlvwIi%2BeLZljD6SlrKunBSizutPqXBQ3pn94laDTYduSrVdyAkPyI9iwO93hcUFXJRfvrOMB2CM9u6TvgtOHZsAvwdwpdbOzOyXGX1dzrrmpIxvCwHtDMWAvvvXv5BOk8SZ7Uih9jML2K274GOqUB1FnDTwvPeBrAPPkjqvVLJzcVSrpowAVVvgaLt4p102tRF2Oz2lrOsdog0l9FTD0VyTK6BJBzycwj%2Bj7Ddr8sM55tLCTYenQTDDszX%2BvrC%2FbKRUV0qpYT%2FF6vtgcLUh4UzrOc6prkMLowASPX5oEpYT8XLkPuddn6iIH43xTGvFwjpYSLGWw8WPlMPXb0r7t9ypDfrU7Vr3%2FliIQqqza%2BO%2BBr79VF&X-Amz-Signature=65aabc1c95fe03b577fc7d156afb132fb3a66c370ee338ca30d9e7ec1b604401&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUHT4EH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtbj1jdrJCZ5hmZYq4RWcLAoyLjLM82csQjeLzylEgbgIgT2NOICDh85yloRzGYLklvVBeLvkgFTi%2BCgnws82SGZYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPaqNjdDhietOMYZXSrcA80biv3uIGhdJ4DBtV%2Fl6SLQAJn28n10BabXjY7lSPLnflOYVAH1sJQ63Xg%2FSdLWt2cozWKnR6Dg%2FwzgqyPLJlIzbxHfVOvBqa%2BY3h5ohi0EXZgiyzbdJr9cukfCrsHeMBE8Qhosh3tv4He59MkO74%2FwBBYva96oGXpSA6FgELsHUw1rQPKZpqyCJ4n5k5Yre0Hcw%2Fq6yufZiewFXQh2CHraNZVwoO%2B43dTh9R7quUVyOEf3WJX%2BoQ3IxiNKM6%2FX6z9ZF6Dtw2tf7UYy2zvzRBWY6JJfwH8wVYc6JVF90LsrVZqzYFdfIYlcSi57%2Bi1fcnLD5KoTyaR3hNujvcKjlfyaq%2Feun5ZgpAvE6FhZcSl3bR51UncfDNGFJiMcVdz6Gl7oS48Vw3yMyRCNESJ1TypQDCImEhr9liCTtjm6dMpmNW0Z9xCrIoDpZapFgoWJ1BNEifLDfTWfmxqq1OX0XGhk61QakwEW4fOKZk6QUSgI9wSRD%2FkOlvwIi%2BeLZljD6SlrKunBSizutPqXBQ3pn94laDTYduSrVdyAkPyI9iwO93hcUFXJRfvrOMB2CM9u6TvgtOHZsAvwdwpdbOzOyXGX1dzrrmpIxvCwHtDMWAvvvXv5BOk8SZ7Uih9jML2K274GOqUB1FnDTwvPeBrAPPkjqvVLJzcVSrpowAVVvgaLt4p102tRF2Oz2lrOsdog0l9FTD0VyTK6BJBzycwj%2Bj7Ddr8sM55tLCTYenQTDDszX%2BvrC%2FbKRUV0qpYT%2FF6vtgcLUh4UzrOc6prkMLowASPX5oEpYT8XLkPuddn6iIH43xTGvFwjpYSLGWw8WPlMPXb0r7t9ypDfrU7Vr3%2FliIQqqza%2BO%2BBr79VF&X-Amz-Signature=b8a915d019616f524ae94f0e41b6f484ade88a146bee30765e918226c5a79897&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUHT4EH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtbj1jdrJCZ5hmZYq4RWcLAoyLjLM82csQjeLzylEgbgIgT2NOICDh85yloRzGYLklvVBeLvkgFTi%2BCgnws82SGZYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPaqNjdDhietOMYZXSrcA80biv3uIGhdJ4DBtV%2Fl6SLQAJn28n10BabXjY7lSPLnflOYVAH1sJQ63Xg%2FSdLWt2cozWKnR6Dg%2FwzgqyPLJlIzbxHfVOvBqa%2BY3h5ohi0EXZgiyzbdJr9cukfCrsHeMBE8Qhosh3tv4He59MkO74%2FwBBYva96oGXpSA6FgELsHUw1rQPKZpqyCJ4n5k5Yre0Hcw%2Fq6yufZiewFXQh2CHraNZVwoO%2B43dTh9R7quUVyOEf3WJX%2BoQ3IxiNKM6%2FX6z9ZF6Dtw2tf7UYy2zvzRBWY6JJfwH8wVYc6JVF90LsrVZqzYFdfIYlcSi57%2Bi1fcnLD5KoTyaR3hNujvcKjlfyaq%2Feun5ZgpAvE6FhZcSl3bR51UncfDNGFJiMcVdz6Gl7oS48Vw3yMyRCNESJ1TypQDCImEhr9liCTtjm6dMpmNW0Z9xCrIoDpZapFgoWJ1BNEifLDfTWfmxqq1OX0XGhk61QakwEW4fOKZk6QUSgI9wSRD%2FkOlvwIi%2BeLZljD6SlrKunBSizutPqXBQ3pn94laDTYduSrVdyAkPyI9iwO93hcUFXJRfvrOMB2CM9u6TvgtOHZsAvwdwpdbOzOyXGX1dzrrmpIxvCwHtDMWAvvvXv5BOk8SZ7Uih9jML2K274GOqUB1FnDTwvPeBrAPPkjqvVLJzcVSrpowAVVvgaLt4p102tRF2Oz2lrOsdog0l9FTD0VyTK6BJBzycwj%2Bj7Ddr8sM55tLCTYenQTDDszX%2BvrC%2FbKRUV0qpYT%2FF6vtgcLUh4UzrOc6prkMLowASPX5oEpYT8XLkPuddn6iIH43xTGvFwjpYSLGWw8WPlMPXb0r7t9ypDfrU7Vr3%2FliIQqqza%2BO%2BBr79VF&X-Amz-Signature=4155a2423e10ad41c69b29b2e87bda2a155096694ed8b9a328ea93cf84b81bde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUHT4EH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtbj1jdrJCZ5hmZYq4RWcLAoyLjLM82csQjeLzylEgbgIgT2NOICDh85yloRzGYLklvVBeLvkgFTi%2BCgnws82SGZYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPaqNjdDhietOMYZXSrcA80biv3uIGhdJ4DBtV%2Fl6SLQAJn28n10BabXjY7lSPLnflOYVAH1sJQ63Xg%2FSdLWt2cozWKnR6Dg%2FwzgqyPLJlIzbxHfVOvBqa%2BY3h5ohi0EXZgiyzbdJr9cukfCrsHeMBE8Qhosh3tv4He59MkO74%2FwBBYva96oGXpSA6FgELsHUw1rQPKZpqyCJ4n5k5Yre0Hcw%2Fq6yufZiewFXQh2CHraNZVwoO%2B43dTh9R7quUVyOEf3WJX%2BoQ3IxiNKM6%2FX6z9ZF6Dtw2tf7UYy2zvzRBWY6JJfwH8wVYc6JVF90LsrVZqzYFdfIYlcSi57%2Bi1fcnLD5KoTyaR3hNujvcKjlfyaq%2Feun5ZgpAvE6FhZcSl3bR51UncfDNGFJiMcVdz6Gl7oS48Vw3yMyRCNESJ1TypQDCImEhr9liCTtjm6dMpmNW0Z9xCrIoDpZapFgoWJ1BNEifLDfTWfmxqq1OX0XGhk61QakwEW4fOKZk6QUSgI9wSRD%2FkOlvwIi%2BeLZljD6SlrKunBSizutPqXBQ3pn94laDTYduSrVdyAkPyI9iwO93hcUFXJRfvrOMB2CM9u6TvgtOHZsAvwdwpdbOzOyXGX1dzrrmpIxvCwHtDMWAvvvXv5BOk8SZ7Uih9jML2K274GOqUB1FnDTwvPeBrAPPkjqvVLJzcVSrpowAVVvgaLt4p102tRF2Oz2lrOsdog0l9FTD0VyTK6BJBzycwj%2Bj7Ddr8sM55tLCTYenQTDDszX%2BvrC%2FbKRUV0qpYT%2FF6vtgcLUh4UzrOc6prkMLowASPX5oEpYT8XLkPuddn6iIH43xTGvFwjpYSLGWw8WPlMPXb0r7t9ypDfrU7Vr3%2FliIQqqza%2BO%2BBr79VF&X-Amz-Signature=8452600869959a825b8d314a0e543a91887c8ad960c3c2f66074f989064f47b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUHT4EH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtbj1jdrJCZ5hmZYq4RWcLAoyLjLM82csQjeLzylEgbgIgT2NOICDh85yloRzGYLklvVBeLvkgFTi%2BCgnws82SGZYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPaqNjdDhietOMYZXSrcA80biv3uIGhdJ4DBtV%2Fl6SLQAJn28n10BabXjY7lSPLnflOYVAH1sJQ63Xg%2FSdLWt2cozWKnR6Dg%2FwzgqyPLJlIzbxHfVOvBqa%2BY3h5ohi0EXZgiyzbdJr9cukfCrsHeMBE8Qhosh3tv4He59MkO74%2FwBBYva96oGXpSA6FgELsHUw1rQPKZpqyCJ4n5k5Yre0Hcw%2Fq6yufZiewFXQh2CHraNZVwoO%2B43dTh9R7quUVyOEf3WJX%2BoQ3IxiNKM6%2FX6z9ZF6Dtw2tf7UYy2zvzRBWY6JJfwH8wVYc6JVF90LsrVZqzYFdfIYlcSi57%2Bi1fcnLD5KoTyaR3hNujvcKjlfyaq%2Feun5ZgpAvE6FhZcSl3bR51UncfDNGFJiMcVdz6Gl7oS48Vw3yMyRCNESJ1TypQDCImEhr9liCTtjm6dMpmNW0Z9xCrIoDpZapFgoWJ1BNEifLDfTWfmxqq1OX0XGhk61QakwEW4fOKZk6QUSgI9wSRD%2FkOlvwIi%2BeLZljD6SlrKunBSizutPqXBQ3pn94laDTYduSrVdyAkPyI9iwO93hcUFXJRfvrOMB2CM9u6TvgtOHZsAvwdwpdbOzOyXGX1dzrrmpIxvCwHtDMWAvvvXv5BOk8SZ7Uih9jML2K274GOqUB1FnDTwvPeBrAPPkjqvVLJzcVSrpowAVVvgaLt4p102tRF2Oz2lrOsdog0l9FTD0VyTK6BJBzycwj%2Bj7Ddr8sM55tLCTYenQTDDszX%2BvrC%2FbKRUV0qpYT%2FF6vtgcLUh4UzrOc6prkMLowASPX5oEpYT8XLkPuddn6iIH43xTGvFwjpYSLGWw8WPlMPXb0r7t9ypDfrU7Vr3%2FliIQqqza%2BO%2BBr79VF&X-Amz-Signature=beab4b3156567288d7e9819c7be36ca7f5e70c8d643e0ee20b0deeb3bc6c22ba&X-Amz-SignedHeaders=host&x-id=GetObject)
