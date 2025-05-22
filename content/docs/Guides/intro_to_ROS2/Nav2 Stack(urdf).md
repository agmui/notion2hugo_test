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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZET6LJBQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCHcWVB9XigRVK5gfAlAPoyaG2KsznJuiavCyQcJkOZuwIgRmdQTRBCPH9IIXa9Q9XnTpFQaveeEu30uB%2BIWJiEpI8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgoRDHCcUJ5iP2PzyrcA0ID3MWrLx40n8Cdje9zl%2BLx1vSku7hSAbT7pRst5BAMo2GcvrztHW9grPF1AhNcloTFJFv1VayJW8FutfnhP%2FLxog8x90%2FEn82dQHTBLJWRF805wXnUVqBhpOVihoSJkj%2FcQVXiptS47L7RCCxppuXgfZ4HaGQFuL7StuuEKBmyBdM%2BoK%2BAKPRyRQAgMu9TMbjmF3Q51Je1X4DXTWg7BrEcHC2aTDBUvT3sxcR2c0NV1x%2B1SoRyNx05qvChYZ3ISVVYyPTwcZzG3WQ8aS5wtkD9F1HbYLZuug%2BtIaCgE2N56CdKNlAJQZyIjRUiZnDqm1K5ok0URCv9ZsLJbKkZBkeMc3RQwaa2DQs80c9LtB8uDf37e6cutQAN99BvdR1gBvP3GL8hib%2FrwDOwa3EUMtp9niVLaWnrYpVBIAIyyccdHKs56eyX4Yhp0oLDK3Walh2vsfgPYqb8AEpbfGpRtLrzF00EXNzVCMkgpW9UDUWZKWNkD9z5muAqXhVaqd2dsl7op8HS2STK3H86jd%2BWf%2B%2FVbJYHF2%2BuBYNYVujcT2Fnkx7GozgYf6bxbC15Ib33eZs%2Bbws9ECciKPz2%2FA%2FvkGTRL8gIpcN7XTrzga8lFf96QxHXhtoyvW1SbabnMO2TusEGOqUBvUCqK1VQFArfAe1MT9cQGlriagsBsK2TUwRR4MXQYHOJQuKnA7b083qrZ3wNuEbseu%2FW3Nf48WR4pFhY5P4FbWfWREslbyA9%2F2qPTzWfa8kEw%2FWVqanJTzsIOQY8IwwkpipYUamy26HSZ6ataDvLofXrLyr6%2BKYZoCqvBE6tI3Rnat%2BRr2hZnUYKwrZ2oLt7oJq8QNedxpCz36%2BcXCrvETLUNIwU&X-Amz-Signature=3f1f629d57924d758b8ca4d957c878967f795e13f80b79bc87e20ea43d959c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZET6LJBQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCHcWVB9XigRVK5gfAlAPoyaG2KsznJuiavCyQcJkOZuwIgRmdQTRBCPH9IIXa9Q9XnTpFQaveeEu30uB%2BIWJiEpI8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgoRDHCcUJ5iP2PzyrcA0ID3MWrLx40n8Cdje9zl%2BLx1vSku7hSAbT7pRst5BAMo2GcvrztHW9grPF1AhNcloTFJFv1VayJW8FutfnhP%2FLxog8x90%2FEn82dQHTBLJWRF805wXnUVqBhpOVihoSJkj%2FcQVXiptS47L7RCCxppuXgfZ4HaGQFuL7StuuEKBmyBdM%2BoK%2BAKPRyRQAgMu9TMbjmF3Q51Je1X4DXTWg7BrEcHC2aTDBUvT3sxcR2c0NV1x%2B1SoRyNx05qvChYZ3ISVVYyPTwcZzG3WQ8aS5wtkD9F1HbYLZuug%2BtIaCgE2N56CdKNlAJQZyIjRUiZnDqm1K5ok0URCv9ZsLJbKkZBkeMc3RQwaa2DQs80c9LtB8uDf37e6cutQAN99BvdR1gBvP3GL8hib%2FrwDOwa3EUMtp9niVLaWnrYpVBIAIyyccdHKs56eyX4Yhp0oLDK3Walh2vsfgPYqb8AEpbfGpRtLrzF00EXNzVCMkgpW9UDUWZKWNkD9z5muAqXhVaqd2dsl7op8HS2STK3H86jd%2BWf%2B%2FVbJYHF2%2BuBYNYVujcT2Fnkx7GozgYf6bxbC15Ib33eZs%2Bbws9ECciKPz2%2FA%2FvkGTRL8gIpcN7XTrzga8lFf96QxHXhtoyvW1SbabnMO2TusEGOqUBvUCqK1VQFArfAe1MT9cQGlriagsBsK2TUwRR4MXQYHOJQuKnA7b083qrZ3wNuEbseu%2FW3Nf48WR4pFhY5P4FbWfWREslbyA9%2F2qPTzWfa8kEw%2FWVqanJTzsIOQY8IwwkpipYUamy26HSZ6ataDvLofXrLyr6%2BKYZoCqvBE6tI3Rnat%2BRr2hZnUYKwrZ2oLt7oJq8QNedxpCz36%2BcXCrvETLUNIwU&X-Amz-Signature=4389816f4d5c8536bab151db8c4d4c9de5263bbb080413d989d6afbc0e3a668c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZET6LJBQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCHcWVB9XigRVK5gfAlAPoyaG2KsznJuiavCyQcJkOZuwIgRmdQTRBCPH9IIXa9Q9XnTpFQaveeEu30uB%2BIWJiEpI8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgoRDHCcUJ5iP2PzyrcA0ID3MWrLx40n8Cdje9zl%2BLx1vSku7hSAbT7pRst5BAMo2GcvrztHW9grPF1AhNcloTFJFv1VayJW8FutfnhP%2FLxog8x90%2FEn82dQHTBLJWRF805wXnUVqBhpOVihoSJkj%2FcQVXiptS47L7RCCxppuXgfZ4HaGQFuL7StuuEKBmyBdM%2BoK%2BAKPRyRQAgMu9TMbjmF3Q51Je1X4DXTWg7BrEcHC2aTDBUvT3sxcR2c0NV1x%2B1SoRyNx05qvChYZ3ISVVYyPTwcZzG3WQ8aS5wtkD9F1HbYLZuug%2BtIaCgE2N56CdKNlAJQZyIjRUiZnDqm1K5ok0URCv9ZsLJbKkZBkeMc3RQwaa2DQs80c9LtB8uDf37e6cutQAN99BvdR1gBvP3GL8hib%2FrwDOwa3EUMtp9niVLaWnrYpVBIAIyyccdHKs56eyX4Yhp0oLDK3Walh2vsfgPYqb8AEpbfGpRtLrzF00EXNzVCMkgpW9UDUWZKWNkD9z5muAqXhVaqd2dsl7op8HS2STK3H86jd%2BWf%2B%2FVbJYHF2%2BuBYNYVujcT2Fnkx7GozgYf6bxbC15Ib33eZs%2Bbws9ECciKPz2%2FA%2FvkGTRL8gIpcN7XTrzga8lFf96QxHXhtoyvW1SbabnMO2TusEGOqUBvUCqK1VQFArfAe1MT9cQGlriagsBsK2TUwRR4MXQYHOJQuKnA7b083qrZ3wNuEbseu%2FW3Nf48WR4pFhY5P4FbWfWREslbyA9%2F2qPTzWfa8kEw%2FWVqanJTzsIOQY8IwwkpipYUamy26HSZ6ataDvLofXrLyr6%2BKYZoCqvBE6tI3Rnat%2BRr2hZnUYKwrZ2oLt7oJq8QNedxpCz36%2BcXCrvETLUNIwU&X-Amz-Signature=34b6b734edc162ed905015ccf21be34667f4ae456110ee0abbd86272d8799cce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZET6LJBQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCHcWVB9XigRVK5gfAlAPoyaG2KsznJuiavCyQcJkOZuwIgRmdQTRBCPH9IIXa9Q9XnTpFQaveeEu30uB%2BIWJiEpI8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgoRDHCcUJ5iP2PzyrcA0ID3MWrLx40n8Cdje9zl%2BLx1vSku7hSAbT7pRst5BAMo2GcvrztHW9grPF1AhNcloTFJFv1VayJW8FutfnhP%2FLxog8x90%2FEn82dQHTBLJWRF805wXnUVqBhpOVihoSJkj%2FcQVXiptS47L7RCCxppuXgfZ4HaGQFuL7StuuEKBmyBdM%2BoK%2BAKPRyRQAgMu9TMbjmF3Q51Je1X4DXTWg7BrEcHC2aTDBUvT3sxcR2c0NV1x%2B1SoRyNx05qvChYZ3ISVVYyPTwcZzG3WQ8aS5wtkD9F1HbYLZuug%2BtIaCgE2N56CdKNlAJQZyIjRUiZnDqm1K5ok0URCv9ZsLJbKkZBkeMc3RQwaa2DQs80c9LtB8uDf37e6cutQAN99BvdR1gBvP3GL8hib%2FrwDOwa3EUMtp9niVLaWnrYpVBIAIyyccdHKs56eyX4Yhp0oLDK3Walh2vsfgPYqb8AEpbfGpRtLrzF00EXNzVCMkgpW9UDUWZKWNkD9z5muAqXhVaqd2dsl7op8HS2STK3H86jd%2BWf%2B%2FVbJYHF2%2BuBYNYVujcT2Fnkx7GozgYf6bxbC15Ib33eZs%2Bbws9ECciKPz2%2FA%2FvkGTRL8gIpcN7XTrzga8lFf96QxHXhtoyvW1SbabnMO2TusEGOqUBvUCqK1VQFArfAe1MT9cQGlriagsBsK2TUwRR4MXQYHOJQuKnA7b083qrZ3wNuEbseu%2FW3Nf48WR4pFhY5P4FbWfWREslbyA9%2F2qPTzWfa8kEw%2FWVqanJTzsIOQY8IwwkpipYUamy26HSZ6ataDvLofXrLyr6%2BKYZoCqvBE6tI3Rnat%2BRr2hZnUYKwrZ2oLt7oJq8QNedxpCz36%2BcXCrvETLUNIwU&X-Amz-Signature=37fddc7c81a431871bbe41924af1e3170ba74fc3984bb1af1accb60464f652e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZET6LJBQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCHcWVB9XigRVK5gfAlAPoyaG2KsznJuiavCyQcJkOZuwIgRmdQTRBCPH9IIXa9Q9XnTpFQaveeEu30uB%2BIWJiEpI8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgoRDHCcUJ5iP2PzyrcA0ID3MWrLx40n8Cdje9zl%2BLx1vSku7hSAbT7pRst5BAMo2GcvrztHW9grPF1AhNcloTFJFv1VayJW8FutfnhP%2FLxog8x90%2FEn82dQHTBLJWRF805wXnUVqBhpOVihoSJkj%2FcQVXiptS47L7RCCxppuXgfZ4HaGQFuL7StuuEKBmyBdM%2BoK%2BAKPRyRQAgMu9TMbjmF3Q51Je1X4DXTWg7BrEcHC2aTDBUvT3sxcR2c0NV1x%2B1SoRyNx05qvChYZ3ISVVYyPTwcZzG3WQ8aS5wtkD9F1HbYLZuug%2BtIaCgE2N56CdKNlAJQZyIjRUiZnDqm1K5ok0URCv9ZsLJbKkZBkeMc3RQwaa2DQs80c9LtB8uDf37e6cutQAN99BvdR1gBvP3GL8hib%2FrwDOwa3EUMtp9niVLaWnrYpVBIAIyyccdHKs56eyX4Yhp0oLDK3Walh2vsfgPYqb8AEpbfGpRtLrzF00EXNzVCMkgpW9UDUWZKWNkD9z5muAqXhVaqd2dsl7op8HS2STK3H86jd%2BWf%2B%2FVbJYHF2%2BuBYNYVujcT2Fnkx7GozgYf6bxbC15Ib33eZs%2Bbws9ECciKPz2%2FA%2FvkGTRL8gIpcN7XTrzga8lFf96QxHXhtoyvW1SbabnMO2TusEGOqUBvUCqK1VQFArfAe1MT9cQGlriagsBsK2TUwRR4MXQYHOJQuKnA7b083qrZ3wNuEbseu%2FW3Nf48WR4pFhY5P4FbWfWREslbyA9%2F2qPTzWfa8kEw%2FWVqanJTzsIOQY8IwwkpipYUamy26HSZ6ataDvLofXrLyr6%2BKYZoCqvBE6tI3Rnat%2BRr2hZnUYKwrZ2oLt7oJq8QNedxpCz36%2BcXCrvETLUNIwU&X-Amz-Signature=1a4b890afe738f64fab153b6b71fa59280eee24dae0dad52e5b2380dbdb9eb7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZET6LJBQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCHcWVB9XigRVK5gfAlAPoyaG2KsznJuiavCyQcJkOZuwIgRmdQTRBCPH9IIXa9Q9XnTpFQaveeEu30uB%2BIWJiEpI8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgoRDHCcUJ5iP2PzyrcA0ID3MWrLx40n8Cdje9zl%2BLx1vSku7hSAbT7pRst5BAMo2GcvrztHW9grPF1AhNcloTFJFv1VayJW8FutfnhP%2FLxog8x90%2FEn82dQHTBLJWRF805wXnUVqBhpOVihoSJkj%2FcQVXiptS47L7RCCxppuXgfZ4HaGQFuL7StuuEKBmyBdM%2BoK%2BAKPRyRQAgMu9TMbjmF3Q51Je1X4DXTWg7BrEcHC2aTDBUvT3sxcR2c0NV1x%2B1SoRyNx05qvChYZ3ISVVYyPTwcZzG3WQ8aS5wtkD9F1HbYLZuug%2BtIaCgE2N56CdKNlAJQZyIjRUiZnDqm1K5ok0URCv9ZsLJbKkZBkeMc3RQwaa2DQs80c9LtB8uDf37e6cutQAN99BvdR1gBvP3GL8hib%2FrwDOwa3EUMtp9niVLaWnrYpVBIAIyyccdHKs56eyX4Yhp0oLDK3Walh2vsfgPYqb8AEpbfGpRtLrzF00EXNzVCMkgpW9UDUWZKWNkD9z5muAqXhVaqd2dsl7op8HS2STK3H86jd%2BWf%2B%2FVbJYHF2%2BuBYNYVujcT2Fnkx7GozgYf6bxbC15Ib33eZs%2Bbws9ECciKPz2%2FA%2FvkGTRL8gIpcN7XTrzga8lFf96QxHXhtoyvW1SbabnMO2TusEGOqUBvUCqK1VQFArfAe1MT9cQGlriagsBsK2TUwRR4MXQYHOJQuKnA7b083qrZ3wNuEbseu%2FW3Nf48WR4pFhY5P4FbWfWREslbyA9%2F2qPTzWfa8kEw%2FWVqanJTzsIOQY8IwwkpipYUamy26HSZ6ataDvLofXrLyr6%2BKYZoCqvBE6tI3Rnat%2BRr2hZnUYKwrZ2oLt7oJq8QNedxpCz36%2BcXCrvETLUNIwU&X-Amz-Signature=391dce0af51200d6b757f9521a70a10b5bd06b4045f07df2cd32d493c96a42c3&X-Amz-SignedHeaders=host&x-id=GetObject)
