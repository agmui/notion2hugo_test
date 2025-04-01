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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCMFZE3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFBqdcYjifBy2CUviEpf4kUGrBp42I0U1IFZ9W3DqiZiAiAjMsIK1UBmA8O7EfqTE%2BNkqX0AA%2FQHC5QcYYDo1jAO1yqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtaaTmW0nin5tc5NKtwDM4aQ9o0cnhuRaLdJ3qqAsc7BOuPTUhq2ndKz%2Fbgm%2B18KErlbJMxmFCBmwU0ZJ%2BxpNrIQTp8mx6UU64qI2cBcBKMDdE61UlEWgQkOxZ3WFkaPN0rGWZyAIRLCZIqt%2BnFXStZ3RwDqsDMYxDFNec3Z62lNYzb1x1VEjeFAOmQ44HgXTSU4dLAGOdYIFNwr6RE8JVScmqDYQ%2B1HPqV%2Byn1nYLsUcg0%2BOZWxhtyTU7IKlj1mkiAYdeMZaQlPNsn2css0i%2F7uUIloiymM9%2FRZnciC4P6diSGpabft6js2g44Wz4AUstgXrGncz1At%2FVLL2Miu9SjoC5NjE8tClAc421vzhItCCqqxfMro6s7P0i%2BChER9Cyg3wp0TtAPNn3v1YZexld98yTkIajf6AC0hhLCQsFTJw8srBQ5yl8v9dwuutXmc%2BH1MI9xvTAQJyiYcdv4JW%2F5gHCN1Y%2Feg5Z423egT0rUkeYKzZeBIqgVegv71gxxiJGoDfSJqurSvvav80MSCRDNkL1SYi1ztulm3qAV9dHUIb0BfeMOlQlXZs0XOd%2FzuD7j3UbUtGIcr2XBxFrPIrGnAe6hDikZ6ine6AogsYzABukh%2BHCM1M70MBfMNbyO%2BS4WlatlEtvaZ%2FzQw2aixvwY6pgF%2FrEc2CSWJoS0LB1SsDc%2FCKFsrq2i9xRuBaon3PDfH%2Bi4%2BXwSTDSxzYSQmckH7h9exQLnIcoQNFiL%2Bdlzs1FBapxa%2BuJTBXHH7HuRdjDnDoZk5sLJVSF3oh1slhEgIi1sSgu00JVJyJS1uBEnWcI6M1LEi6rAYwTZCTPIugcbR%2BhWXir%2BmpYAWklI1d8WP9HR0%2B5BfDUGiZCnHld2SbvJ%2FVA9LAQTk&X-Amz-Signature=a395e5f42fee870a1806e03f0b981514dada5dc6ecba44f97620e97da35f511e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCMFZE3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFBqdcYjifBy2CUviEpf4kUGrBp42I0U1IFZ9W3DqiZiAiAjMsIK1UBmA8O7EfqTE%2BNkqX0AA%2FQHC5QcYYDo1jAO1yqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtaaTmW0nin5tc5NKtwDM4aQ9o0cnhuRaLdJ3qqAsc7BOuPTUhq2ndKz%2Fbgm%2B18KErlbJMxmFCBmwU0ZJ%2BxpNrIQTp8mx6UU64qI2cBcBKMDdE61UlEWgQkOxZ3WFkaPN0rGWZyAIRLCZIqt%2BnFXStZ3RwDqsDMYxDFNec3Z62lNYzb1x1VEjeFAOmQ44HgXTSU4dLAGOdYIFNwr6RE8JVScmqDYQ%2B1HPqV%2Byn1nYLsUcg0%2BOZWxhtyTU7IKlj1mkiAYdeMZaQlPNsn2css0i%2F7uUIloiymM9%2FRZnciC4P6diSGpabft6js2g44Wz4AUstgXrGncz1At%2FVLL2Miu9SjoC5NjE8tClAc421vzhItCCqqxfMro6s7P0i%2BChER9Cyg3wp0TtAPNn3v1YZexld98yTkIajf6AC0hhLCQsFTJw8srBQ5yl8v9dwuutXmc%2BH1MI9xvTAQJyiYcdv4JW%2F5gHCN1Y%2Feg5Z423egT0rUkeYKzZeBIqgVegv71gxxiJGoDfSJqurSvvav80MSCRDNkL1SYi1ztulm3qAV9dHUIb0BfeMOlQlXZs0XOd%2FzuD7j3UbUtGIcr2XBxFrPIrGnAe6hDikZ6ine6AogsYzABukh%2BHCM1M70MBfMNbyO%2BS4WlatlEtvaZ%2FzQw2aixvwY6pgF%2FrEc2CSWJoS0LB1SsDc%2FCKFsrq2i9xRuBaon3PDfH%2Bi4%2BXwSTDSxzYSQmckH7h9exQLnIcoQNFiL%2Bdlzs1FBapxa%2BuJTBXHH7HuRdjDnDoZk5sLJVSF3oh1slhEgIi1sSgu00JVJyJS1uBEnWcI6M1LEi6rAYwTZCTPIugcbR%2BhWXir%2BmpYAWklI1d8WP9HR0%2B5BfDUGiZCnHld2SbvJ%2FVA9LAQTk&X-Amz-Signature=a67e398452fd67ef128c87e838356c49da0c594970872c7bf07d9db214ddd814&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCMFZE3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFBqdcYjifBy2CUviEpf4kUGrBp42I0U1IFZ9W3DqiZiAiAjMsIK1UBmA8O7EfqTE%2BNkqX0AA%2FQHC5QcYYDo1jAO1yqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtaaTmW0nin5tc5NKtwDM4aQ9o0cnhuRaLdJ3qqAsc7BOuPTUhq2ndKz%2Fbgm%2B18KErlbJMxmFCBmwU0ZJ%2BxpNrIQTp8mx6UU64qI2cBcBKMDdE61UlEWgQkOxZ3WFkaPN0rGWZyAIRLCZIqt%2BnFXStZ3RwDqsDMYxDFNec3Z62lNYzb1x1VEjeFAOmQ44HgXTSU4dLAGOdYIFNwr6RE8JVScmqDYQ%2B1HPqV%2Byn1nYLsUcg0%2BOZWxhtyTU7IKlj1mkiAYdeMZaQlPNsn2css0i%2F7uUIloiymM9%2FRZnciC4P6diSGpabft6js2g44Wz4AUstgXrGncz1At%2FVLL2Miu9SjoC5NjE8tClAc421vzhItCCqqxfMro6s7P0i%2BChER9Cyg3wp0TtAPNn3v1YZexld98yTkIajf6AC0hhLCQsFTJw8srBQ5yl8v9dwuutXmc%2BH1MI9xvTAQJyiYcdv4JW%2F5gHCN1Y%2Feg5Z423egT0rUkeYKzZeBIqgVegv71gxxiJGoDfSJqurSvvav80MSCRDNkL1SYi1ztulm3qAV9dHUIb0BfeMOlQlXZs0XOd%2FzuD7j3UbUtGIcr2XBxFrPIrGnAe6hDikZ6ine6AogsYzABukh%2BHCM1M70MBfMNbyO%2BS4WlatlEtvaZ%2FzQw2aixvwY6pgF%2FrEc2CSWJoS0LB1SsDc%2FCKFsrq2i9xRuBaon3PDfH%2Bi4%2BXwSTDSxzYSQmckH7h9exQLnIcoQNFiL%2Bdlzs1FBapxa%2BuJTBXHH7HuRdjDnDoZk5sLJVSF3oh1slhEgIi1sSgu00JVJyJS1uBEnWcI6M1LEi6rAYwTZCTPIugcbR%2BhWXir%2BmpYAWklI1d8WP9HR0%2B5BfDUGiZCnHld2SbvJ%2FVA9LAQTk&X-Amz-Signature=7e27d0070db4f7a7cddea5ac2d3b8c4701d9b6d7d72eb359dafbc0ebad9cc676&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCMFZE3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFBqdcYjifBy2CUviEpf4kUGrBp42I0U1IFZ9W3DqiZiAiAjMsIK1UBmA8O7EfqTE%2BNkqX0AA%2FQHC5QcYYDo1jAO1yqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtaaTmW0nin5tc5NKtwDM4aQ9o0cnhuRaLdJ3qqAsc7BOuPTUhq2ndKz%2Fbgm%2B18KErlbJMxmFCBmwU0ZJ%2BxpNrIQTp8mx6UU64qI2cBcBKMDdE61UlEWgQkOxZ3WFkaPN0rGWZyAIRLCZIqt%2BnFXStZ3RwDqsDMYxDFNec3Z62lNYzb1x1VEjeFAOmQ44HgXTSU4dLAGOdYIFNwr6RE8JVScmqDYQ%2B1HPqV%2Byn1nYLsUcg0%2BOZWxhtyTU7IKlj1mkiAYdeMZaQlPNsn2css0i%2F7uUIloiymM9%2FRZnciC4P6diSGpabft6js2g44Wz4AUstgXrGncz1At%2FVLL2Miu9SjoC5NjE8tClAc421vzhItCCqqxfMro6s7P0i%2BChER9Cyg3wp0TtAPNn3v1YZexld98yTkIajf6AC0hhLCQsFTJw8srBQ5yl8v9dwuutXmc%2BH1MI9xvTAQJyiYcdv4JW%2F5gHCN1Y%2Feg5Z423egT0rUkeYKzZeBIqgVegv71gxxiJGoDfSJqurSvvav80MSCRDNkL1SYi1ztulm3qAV9dHUIb0BfeMOlQlXZs0XOd%2FzuD7j3UbUtGIcr2XBxFrPIrGnAe6hDikZ6ine6AogsYzABukh%2BHCM1M70MBfMNbyO%2BS4WlatlEtvaZ%2FzQw2aixvwY6pgF%2FrEc2CSWJoS0LB1SsDc%2FCKFsrq2i9xRuBaon3PDfH%2Bi4%2BXwSTDSxzYSQmckH7h9exQLnIcoQNFiL%2Bdlzs1FBapxa%2BuJTBXHH7HuRdjDnDoZk5sLJVSF3oh1slhEgIi1sSgu00JVJyJS1uBEnWcI6M1LEi6rAYwTZCTPIugcbR%2BhWXir%2BmpYAWklI1d8WP9HR0%2B5BfDUGiZCnHld2SbvJ%2FVA9LAQTk&X-Amz-Signature=e828f6e10aaaff20b60c8d039cca3d8b73a56a87651fb867e6b8903d9cd4f219&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCMFZE3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFBqdcYjifBy2CUviEpf4kUGrBp42I0U1IFZ9W3DqiZiAiAjMsIK1UBmA8O7EfqTE%2BNkqX0AA%2FQHC5QcYYDo1jAO1yqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtaaTmW0nin5tc5NKtwDM4aQ9o0cnhuRaLdJ3qqAsc7BOuPTUhq2ndKz%2Fbgm%2B18KErlbJMxmFCBmwU0ZJ%2BxpNrIQTp8mx6UU64qI2cBcBKMDdE61UlEWgQkOxZ3WFkaPN0rGWZyAIRLCZIqt%2BnFXStZ3RwDqsDMYxDFNec3Z62lNYzb1x1VEjeFAOmQ44HgXTSU4dLAGOdYIFNwr6RE8JVScmqDYQ%2B1HPqV%2Byn1nYLsUcg0%2BOZWxhtyTU7IKlj1mkiAYdeMZaQlPNsn2css0i%2F7uUIloiymM9%2FRZnciC4P6diSGpabft6js2g44Wz4AUstgXrGncz1At%2FVLL2Miu9SjoC5NjE8tClAc421vzhItCCqqxfMro6s7P0i%2BChER9Cyg3wp0TtAPNn3v1YZexld98yTkIajf6AC0hhLCQsFTJw8srBQ5yl8v9dwuutXmc%2BH1MI9xvTAQJyiYcdv4JW%2F5gHCN1Y%2Feg5Z423egT0rUkeYKzZeBIqgVegv71gxxiJGoDfSJqurSvvav80MSCRDNkL1SYi1ztulm3qAV9dHUIb0BfeMOlQlXZs0XOd%2FzuD7j3UbUtGIcr2XBxFrPIrGnAe6hDikZ6ine6AogsYzABukh%2BHCM1M70MBfMNbyO%2BS4WlatlEtvaZ%2FzQw2aixvwY6pgF%2FrEc2CSWJoS0LB1SsDc%2FCKFsrq2i9xRuBaon3PDfH%2Bi4%2BXwSTDSxzYSQmckH7h9exQLnIcoQNFiL%2Bdlzs1FBapxa%2BuJTBXHH7HuRdjDnDoZk5sLJVSF3oh1slhEgIi1sSgu00JVJyJS1uBEnWcI6M1LEi6rAYwTZCTPIugcbR%2BhWXir%2BmpYAWklI1d8WP9HR0%2B5BfDUGiZCnHld2SbvJ%2FVA9LAQTk&X-Amz-Signature=804f4788bf3974f092059f7e523e240b37afff9426ad85cb46fd72da0946e983&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCMFZE3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFBqdcYjifBy2CUviEpf4kUGrBp42I0U1IFZ9W3DqiZiAiAjMsIK1UBmA8O7EfqTE%2BNkqX0AA%2FQHC5QcYYDo1jAO1yqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtaaTmW0nin5tc5NKtwDM4aQ9o0cnhuRaLdJ3qqAsc7BOuPTUhq2ndKz%2Fbgm%2B18KErlbJMxmFCBmwU0ZJ%2BxpNrIQTp8mx6UU64qI2cBcBKMDdE61UlEWgQkOxZ3WFkaPN0rGWZyAIRLCZIqt%2BnFXStZ3RwDqsDMYxDFNec3Z62lNYzb1x1VEjeFAOmQ44HgXTSU4dLAGOdYIFNwr6RE8JVScmqDYQ%2B1HPqV%2Byn1nYLsUcg0%2BOZWxhtyTU7IKlj1mkiAYdeMZaQlPNsn2css0i%2F7uUIloiymM9%2FRZnciC4P6diSGpabft6js2g44Wz4AUstgXrGncz1At%2FVLL2Miu9SjoC5NjE8tClAc421vzhItCCqqxfMro6s7P0i%2BChER9Cyg3wp0TtAPNn3v1YZexld98yTkIajf6AC0hhLCQsFTJw8srBQ5yl8v9dwuutXmc%2BH1MI9xvTAQJyiYcdv4JW%2F5gHCN1Y%2Feg5Z423egT0rUkeYKzZeBIqgVegv71gxxiJGoDfSJqurSvvav80MSCRDNkL1SYi1ztulm3qAV9dHUIb0BfeMOlQlXZs0XOd%2FzuD7j3UbUtGIcr2XBxFrPIrGnAe6hDikZ6ine6AogsYzABukh%2BHCM1M70MBfMNbyO%2BS4WlatlEtvaZ%2FzQw2aixvwY6pgF%2FrEc2CSWJoS0LB1SsDc%2FCKFsrq2i9xRuBaon3PDfH%2Bi4%2BXwSTDSxzYSQmckH7h9exQLnIcoQNFiL%2Bdlzs1FBapxa%2BuJTBXHH7HuRdjDnDoZk5sLJVSF3oh1slhEgIi1sSgu00JVJyJS1uBEnWcI6M1LEi6rAYwTZCTPIugcbR%2BhWXir%2BmpYAWklI1d8WP9HR0%2B5BfDUGiZCnHld2SbvJ%2FVA9LAQTk&X-Amz-Signature=93385dc989974a8db9378f87503018e0b2da9e9603a2d2e24d38e7b1726f5222&X-Amz-SignedHeaders=host&x-id=GetObject)
