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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IOOKECA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCzskS0b9y%2BcA9lYINckjCV72Ejrk9xZ7GqZzj5WNpMnAIga%2FB827o18O1TTpkdoYffzOakSxggrlw4gpV9nbiyYhwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAf9AF1jyweMG1uxuSrcAylGEEmg0a%2F5%2B799Tqmohl2YUcm6EOvQjZB47sDtmrCq2avDHncGqNjZ3L8i%2BfKNk2QsLnMBeWzWVD5zwC7wvcOuaAJkuoTLuWLTP0%2B7YCRWD6iXAtXPtfqATqC7orKQk%2Bde%2FPu48vUOQIpMu4jFAwiQmjpyb3ZUPm4s7ctFVNCSvSqKQA%2FwtdRyOvPC6%2F84KrqSGkYqam3PusgBVc%2B%2FxI1t8hwTjvFuZVuYgnDJPtc69r8ya%2FzdcT5Cbxxi4vroVUYxPV3CaADpZ5Ul47oCOUBpLnpmgLalJSvES1JBJktCV6Oq8bnjV4PgY1R9rCcBEcoTU21ChCLuFIbVbUyrEMEyLFDHAyZFt6OVmTUl0JaF%2FEDdAML3Azw1i7wh1%2BAMxOQfGUFQbQ46rSn47%2BUfmtoRTAZdzeEZSu3EIYN2N5J5SZsQoGu%2FUrE56BlpkHUFbaqlTAma1BbOkO6%2FjJ%2BtQj1Nimpj7Zw3Gow9j%2BVROKqWkGSrOOaooyCBOqY8rfoQN931mq%2F0WlywnaExxuNSjNC3uu2juErEU%2BIJSEU7zsqdxKy64lZobuO1RTGV8ZSMSh8dBuuo0BRM1QfQeVNhn9%2FBReA0sfhywEWMdd4pYL%2BAgsE4bFU0DGkzODoHMILEsL4GOqUBZWiZ5B94iayfC2yeBkyCgz08BWzz6oXf4iwFJQLGLPTycljoPX63XrGtOmE4eWLGVUAC7g0eEWZFi4b2kswT3eIa1Wm666Y7Zq%2FpExrSbVIhvVdHHiPkTOzGfwuCq2X0jcv1yubYCzKoE8kdb6WreOR5%2Ft7VHO9gOKaPaOn27NzUyZLYzi3mCxTsN4jzMdgpkgYi%2BVPwySyp%2BqPjD2oPBz1PgHL0&X-Amz-Signature=75a6e54074c72d00d8bb3d63f76a94c982ce02fc41b984c8e36b658a01ca4a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IOOKECA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCzskS0b9y%2BcA9lYINckjCV72Ejrk9xZ7GqZzj5WNpMnAIga%2FB827o18O1TTpkdoYffzOakSxggrlw4gpV9nbiyYhwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAf9AF1jyweMG1uxuSrcAylGEEmg0a%2F5%2B799Tqmohl2YUcm6EOvQjZB47sDtmrCq2avDHncGqNjZ3L8i%2BfKNk2QsLnMBeWzWVD5zwC7wvcOuaAJkuoTLuWLTP0%2B7YCRWD6iXAtXPtfqATqC7orKQk%2Bde%2FPu48vUOQIpMu4jFAwiQmjpyb3ZUPm4s7ctFVNCSvSqKQA%2FwtdRyOvPC6%2F84KrqSGkYqam3PusgBVc%2B%2FxI1t8hwTjvFuZVuYgnDJPtc69r8ya%2FzdcT5Cbxxi4vroVUYxPV3CaADpZ5Ul47oCOUBpLnpmgLalJSvES1JBJktCV6Oq8bnjV4PgY1R9rCcBEcoTU21ChCLuFIbVbUyrEMEyLFDHAyZFt6OVmTUl0JaF%2FEDdAML3Azw1i7wh1%2BAMxOQfGUFQbQ46rSn47%2BUfmtoRTAZdzeEZSu3EIYN2N5J5SZsQoGu%2FUrE56BlpkHUFbaqlTAma1BbOkO6%2FjJ%2BtQj1Nimpj7Zw3Gow9j%2BVROKqWkGSrOOaooyCBOqY8rfoQN931mq%2F0WlywnaExxuNSjNC3uu2juErEU%2BIJSEU7zsqdxKy64lZobuO1RTGV8ZSMSh8dBuuo0BRM1QfQeVNhn9%2FBReA0sfhywEWMdd4pYL%2BAgsE4bFU0DGkzODoHMILEsL4GOqUBZWiZ5B94iayfC2yeBkyCgz08BWzz6oXf4iwFJQLGLPTycljoPX63XrGtOmE4eWLGVUAC7g0eEWZFi4b2kswT3eIa1Wm666Y7Zq%2FpExrSbVIhvVdHHiPkTOzGfwuCq2X0jcv1yubYCzKoE8kdb6WreOR5%2Ft7VHO9gOKaPaOn27NzUyZLYzi3mCxTsN4jzMdgpkgYi%2BVPwySyp%2BqPjD2oPBz1PgHL0&X-Amz-Signature=bd48aa800b50ac6e4e266c15799e8e102b315fe834ad3507c54c940bfa1d8800&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IOOKECA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCzskS0b9y%2BcA9lYINckjCV72Ejrk9xZ7GqZzj5WNpMnAIga%2FB827o18O1TTpkdoYffzOakSxggrlw4gpV9nbiyYhwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAf9AF1jyweMG1uxuSrcAylGEEmg0a%2F5%2B799Tqmohl2YUcm6EOvQjZB47sDtmrCq2avDHncGqNjZ3L8i%2BfKNk2QsLnMBeWzWVD5zwC7wvcOuaAJkuoTLuWLTP0%2B7YCRWD6iXAtXPtfqATqC7orKQk%2Bde%2FPu48vUOQIpMu4jFAwiQmjpyb3ZUPm4s7ctFVNCSvSqKQA%2FwtdRyOvPC6%2F84KrqSGkYqam3PusgBVc%2B%2FxI1t8hwTjvFuZVuYgnDJPtc69r8ya%2FzdcT5Cbxxi4vroVUYxPV3CaADpZ5Ul47oCOUBpLnpmgLalJSvES1JBJktCV6Oq8bnjV4PgY1R9rCcBEcoTU21ChCLuFIbVbUyrEMEyLFDHAyZFt6OVmTUl0JaF%2FEDdAML3Azw1i7wh1%2BAMxOQfGUFQbQ46rSn47%2BUfmtoRTAZdzeEZSu3EIYN2N5J5SZsQoGu%2FUrE56BlpkHUFbaqlTAma1BbOkO6%2FjJ%2BtQj1Nimpj7Zw3Gow9j%2BVROKqWkGSrOOaooyCBOqY8rfoQN931mq%2F0WlywnaExxuNSjNC3uu2juErEU%2BIJSEU7zsqdxKy64lZobuO1RTGV8ZSMSh8dBuuo0BRM1QfQeVNhn9%2FBReA0sfhywEWMdd4pYL%2BAgsE4bFU0DGkzODoHMILEsL4GOqUBZWiZ5B94iayfC2yeBkyCgz08BWzz6oXf4iwFJQLGLPTycljoPX63XrGtOmE4eWLGVUAC7g0eEWZFi4b2kswT3eIa1Wm666Y7Zq%2FpExrSbVIhvVdHHiPkTOzGfwuCq2X0jcv1yubYCzKoE8kdb6WreOR5%2Ft7VHO9gOKaPaOn27NzUyZLYzi3mCxTsN4jzMdgpkgYi%2BVPwySyp%2BqPjD2oPBz1PgHL0&X-Amz-Signature=32094ac91e816949fbb4edbd8f7d6ff34fc1966c1e8b419eec1114c6bb31b092&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IOOKECA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCzskS0b9y%2BcA9lYINckjCV72Ejrk9xZ7GqZzj5WNpMnAIga%2FB827o18O1TTpkdoYffzOakSxggrlw4gpV9nbiyYhwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAf9AF1jyweMG1uxuSrcAylGEEmg0a%2F5%2B799Tqmohl2YUcm6EOvQjZB47sDtmrCq2avDHncGqNjZ3L8i%2BfKNk2QsLnMBeWzWVD5zwC7wvcOuaAJkuoTLuWLTP0%2B7YCRWD6iXAtXPtfqATqC7orKQk%2Bde%2FPu48vUOQIpMu4jFAwiQmjpyb3ZUPm4s7ctFVNCSvSqKQA%2FwtdRyOvPC6%2F84KrqSGkYqam3PusgBVc%2B%2FxI1t8hwTjvFuZVuYgnDJPtc69r8ya%2FzdcT5Cbxxi4vroVUYxPV3CaADpZ5Ul47oCOUBpLnpmgLalJSvES1JBJktCV6Oq8bnjV4PgY1R9rCcBEcoTU21ChCLuFIbVbUyrEMEyLFDHAyZFt6OVmTUl0JaF%2FEDdAML3Azw1i7wh1%2BAMxOQfGUFQbQ46rSn47%2BUfmtoRTAZdzeEZSu3EIYN2N5J5SZsQoGu%2FUrE56BlpkHUFbaqlTAma1BbOkO6%2FjJ%2BtQj1Nimpj7Zw3Gow9j%2BVROKqWkGSrOOaooyCBOqY8rfoQN931mq%2F0WlywnaExxuNSjNC3uu2juErEU%2BIJSEU7zsqdxKy64lZobuO1RTGV8ZSMSh8dBuuo0BRM1QfQeVNhn9%2FBReA0sfhywEWMdd4pYL%2BAgsE4bFU0DGkzODoHMILEsL4GOqUBZWiZ5B94iayfC2yeBkyCgz08BWzz6oXf4iwFJQLGLPTycljoPX63XrGtOmE4eWLGVUAC7g0eEWZFi4b2kswT3eIa1Wm666Y7Zq%2FpExrSbVIhvVdHHiPkTOzGfwuCq2X0jcv1yubYCzKoE8kdb6WreOR5%2Ft7VHO9gOKaPaOn27NzUyZLYzi3mCxTsN4jzMdgpkgYi%2BVPwySyp%2BqPjD2oPBz1PgHL0&X-Amz-Signature=6561e6fd6795a8f058a778cba60e6250b92edd8e708703076b51df83889805c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IOOKECA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCzskS0b9y%2BcA9lYINckjCV72Ejrk9xZ7GqZzj5WNpMnAIga%2FB827o18O1TTpkdoYffzOakSxggrlw4gpV9nbiyYhwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAf9AF1jyweMG1uxuSrcAylGEEmg0a%2F5%2B799Tqmohl2YUcm6EOvQjZB47sDtmrCq2avDHncGqNjZ3L8i%2BfKNk2QsLnMBeWzWVD5zwC7wvcOuaAJkuoTLuWLTP0%2B7YCRWD6iXAtXPtfqATqC7orKQk%2Bde%2FPu48vUOQIpMu4jFAwiQmjpyb3ZUPm4s7ctFVNCSvSqKQA%2FwtdRyOvPC6%2F84KrqSGkYqam3PusgBVc%2B%2FxI1t8hwTjvFuZVuYgnDJPtc69r8ya%2FzdcT5Cbxxi4vroVUYxPV3CaADpZ5Ul47oCOUBpLnpmgLalJSvES1JBJktCV6Oq8bnjV4PgY1R9rCcBEcoTU21ChCLuFIbVbUyrEMEyLFDHAyZFt6OVmTUl0JaF%2FEDdAML3Azw1i7wh1%2BAMxOQfGUFQbQ46rSn47%2BUfmtoRTAZdzeEZSu3EIYN2N5J5SZsQoGu%2FUrE56BlpkHUFbaqlTAma1BbOkO6%2FjJ%2BtQj1Nimpj7Zw3Gow9j%2BVROKqWkGSrOOaooyCBOqY8rfoQN931mq%2F0WlywnaExxuNSjNC3uu2juErEU%2BIJSEU7zsqdxKy64lZobuO1RTGV8ZSMSh8dBuuo0BRM1QfQeVNhn9%2FBReA0sfhywEWMdd4pYL%2BAgsE4bFU0DGkzODoHMILEsL4GOqUBZWiZ5B94iayfC2yeBkyCgz08BWzz6oXf4iwFJQLGLPTycljoPX63XrGtOmE4eWLGVUAC7g0eEWZFi4b2kswT3eIa1Wm666Y7Zq%2FpExrSbVIhvVdHHiPkTOzGfwuCq2X0jcv1yubYCzKoE8kdb6WreOR5%2Ft7VHO9gOKaPaOn27NzUyZLYzi3mCxTsN4jzMdgpkgYi%2BVPwySyp%2BqPjD2oPBz1PgHL0&X-Amz-Signature=686b2c8b7307b126d01d94d37dc4ecea28c3200fd629f9e0b6e54b900b61db08&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IOOKECA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCzskS0b9y%2BcA9lYINckjCV72Ejrk9xZ7GqZzj5WNpMnAIga%2FB827o18O1TTpkdoYffzOakSxggrlw4gpV9nbiyYhwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAf9AF1jyweMG1uxuSrcAylGEEmg0a%2F5%2B799Tqmohl2YUcm6EOvQjZB47sDtmrCq2avDHncGqNjZ3L8i%2BfKNk2QsLnMBeWzWVD5zwC7wvcOuaAJkuoTLuWLTP0%2B7YCRWD6iXAtXPtfqATqC7orKQk%2Bde%2FPu48vUOQIpMu4jFAwiQmjpyb3ZUPm4s7ctFVNCSvSqKQA%2FwtdRyOvPC6%2F84KrqSGkYqam3PusgBVc%2B%2FxI1t8hwTjvFuZVuYgnDJPtc69r8ya%2FzdcT5Cbxxi4vroVUYxPV3CaADpZ5Ul47oCOUBpLnpmgLalJSvES1JBJktCV6Oq8bnjV4PgY1R9rCcBEcoTU21ChCLuFIbVbUyrEMEyLFDHAyZFt6OVmTUl0JaF%2FEDdAML3Azw1i7wh1%2BAMxOQfGUFQbQ46rSn47%2BUfmtoRTAZdzeEZSu3EIYN2N5J5SZsQoGu%2FUrE56BlpkHUFbaqlTAma1BbOkO6%2FjJ%2BtQj1Nimpj7Zw3Gow9j%2BVROKqWkGSrOOaooyCBOqY8rfoQN931mq%2F0WlywnaExxuNSjNC3uu2juErEU%2BIJSEU7zsqdxKy64lZobuO1RTGV8ZSMSh8dBuuo0BRM1QfQeVNhn9%2FBReA0sfhywEWMdd4pYL%2BAgsE4bFU0DGkzODoHMILEsL4GOqUBZWiZ5B94iayfC2yeBkyCgz08BWzz6oXf4iwFJQLGLPTycljoPX63XrGtOmE4eWLGVUAC7g0eEWZFi4b2kswT3eIa1Wm666Y7Zq%2FpExrSbVIhvVdHHiPkTOzGfwuCq2X0jcv1yubYCzKoE8kdb6WreOR5%2Ft7VHO9gOKaPaOn27NzUyZLYzi3mCxTsN4jzMdgpkgYi%2BVPwySyp%2BqPjD2oPBz1PgHL0&X-Amz-Signature=6b522a8fe02a2bf7acd36edd94efc73616bd6398a623d396216a247f520674dd&X-Amz-SignedHeaders=host&x-id=GetObject)
