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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77HZYIO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHb6Qobo1Mc3LdM2OfKK1jGmDlS9cejhpPNrW1%2FZBQcEAiEAmx916PgpZHiR9UCHkcsGVaPwhD3xn49zBwHnM1WXfV4q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGiulZo07fihxu8kRSrcA4collXYOsKBmtrGm%2BT4PfYnJFXZqNLA90qbUce3AgyG%2Bz3SVhOBdrWxoUhVxWCwQmaXKcXpWm%2F8M0QQD%2F8WQaHkMBjEuArkPhljx0hMYzlLdpoqgZV4fiqsDtZrPGSRXGhUbAW2zYh%2Bp5f3TzSbz1Aow9gqPoZbaXSHEPLQ%2B4kYEXwTUD29YCHxgxfzSjcs9rdz%2BFyC9AkPuWC7O3ahauYkaEZeinC15E9F356CmLvl5mjKVb5IzaTriK3hLJB8rODTMJ4LFysm%2FW4kxZFjFJKeTTd0bU%2F%2BClB7fEUNYfG1ZMbx6NtrdP1UOlIt%2B0CxIyEwejIaS5WC%2Bosjedrk5OHtn82SVKzWDXejQ7OJJhT7l%2F7ZxiTOkv8qdflwY59%2BiY9AkCmEyBs2RemJFJ9FquocB%2BX%2Bpbwd720kVpwp%2BeCoNNGUXE4v7r6yKvEu%2B31r2u%2FzMN%2Boc0QambB%2BZq8OeDgElQmiaHJWyMVu1QvuI8M%2FgeMFkp0hUD3YYKc3z10TrQnnapW%2Fip2JYT8OrJlmzL298MXGSR2c9LcX4PsNlTGfe032T5QY0zuwCPg1vzVNXXNL2berdDrJWZ%2FCKt6NNjuU%2B4KfA7Hd47SaF6aFXRvKsvBbWWoYocj%2FZtjhMIS6msMGOqUB6FqnK8%2B%2FXsufPqHvNGbsapQHLAeNn7iN3VM27mp4k%2FmFyh8cOQqa8n%2BbqHA4SYiDdihQU6NrU0JoQuYj4yMmT8L75RGLuJXbe2Z67U6LXoDLmM0iSCksNgxQADJD7KmZT0xO64zHgWVf7rT6DcwCcOCJDalIlRWck3D9q%2FKBV%2FCItKBMqV099hM0jaAXR3U0p9dZLsQE3q%2B2Amd1YK7SVIEID0%2B%2B&X-Amz-Signature=8459fb86de478c8365e2f18340ff051c9551a3058346cc5085847fe402839e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77HZYIO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHb6Qobo1Mc3LdM2OfKK1jGmDlS9cejhpPNrW1%2FZBQcEAiEAmx916PgpZHiR9UCHkcsGVaPwhD3xn49zBwHnM1WXfV4q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGiulZo07fihxu8kRSrcA4collXYOsKBmtrGm%2BT4PfYnJFXZqNLA90qbUce3AgyG%2Bz3SVhOBdrWxoUhVxWCwQmaXKcXpWm%2F8M0QQD%2F8WQaHkMBjEuArkPhljx0hMYzlLdpoqgZV4fiqsDtZrPGSRXGhUbAW2zYh%2Bp5f3TzSbz1Aow9gqPoZbaXSHEPLQ%2B4kYEXwTUD29YCHxgxfzSjcs9rdz%2BFyC9AkPuWC7O3ahauYkaEZeinC15E9F356CmLvl5mjKVb5IzaTriK3hLJB8rODTMJ4LFysm%2FW4kxZFjFJKeTTd0bU%2F%2BClB7fEUNYfG1ZMbx6NtrdP1UOlIt%2B0CxIyEwejIaS5WC%2Bosjedrk5OHtn82SVKzWDXejQ7OJJhT7l%2F7ZxiTOkv8qdflwY59%2BiY9AkCmEyBs2RemJFJ9FquocB%2BX%2Bpbwd720kVpwp%2BeCoNNGUXE4v7r6yKvEu%2B31r2u%2FzMN%2Boc0QambB%2BZq8OeDgElQmiaHJWyMVu1QvuI8M%2FgeMFkp0hUD3YYKc3z10TrQnnapW%2Fip2JYT8OrJlmzL298MXGSR2c9LcX4PsNlTGfe032T5QY0zuwCPg1vzVNXXNL2berdDrJWZ%2FCKt6NNjuU%2B4KfA7Hd47SaF6aFXRvKsvBbWWoYocj%2FZtjhMIS6msMGOqUB6FqnK8%2B%2FXsufPqHvNGbsapQHLAeNn7iN3VM27mp4k%2FmFyh8cOQqa8n%2BbqHA4SYiDdihQU6NrU0JoQuYj4yMmT8L75RGLuJXbe2Z67U6LXoDLmM0iSCksNgxQADJD7KmZT0xO64zHgWVf7rT6DcwCcOCJDalIlRWck3D9q%2FKBV%2FCItKBMqV099hM0jaAXR3U0p9dZLsQE3q%2B2Amd1YK7SVIEID0%2B%2B&X-Amz-Signature=87b933f227b0d5ea19637dad6f4241b3df8a86507847cbb07763d4a369f48abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77HZYIO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHb6Qobo1Mc3LdM2OfKK1jGmDlS9cejhpPNrW1%2FZBQcEAiEAmx916PgpZHiR9UCHkcsGVaPwhD3xn49zBwHnM1WXfV4q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGiulZo07fihxu8kRSrcA4collXYOsKBmtrGm%2BT4PfYnJFXZqNLA90qbUce3AgyG%2Bz3SVhOBdrWxoUhVxWCwQmaXKcXpWm%2F8M0QQD%2F8WQaHkMBjEuArkPhljx0hMYzlLdpoqgZV4fiqsDtZrPGSRXGhUbAW2zYh%2Bp5f3TzSbz1Aow9gqPoZbaXSHEPLQ%2B4kYEXwTUD29YCHxgxfzSjcs9rdz%2BFyC9AkPuWC7O3ahauYkaEZeinC15E9F356CmLvl5mjKVb5IzaTriK3hLJB8rODTMJ4LFysm%2FW4kxZFjFJKeTTd0bU%2F%2BClB7fEUNYfG1ZMbx6NtrdP1UOlIt%2B0CxIyEwejIaS5WC%2Bosjedrk5OHtn82SVKzWDXejQ7OJJhT7l%2F7ZxiTOkv8qdflwY59%2BiY9AkCmEyBs2RemJFJ9FquocB%2BX%2Bpbwd720kVpwp%2BeCoNNGUXE4v7r6yKvEu%2B31r2u%2FzMN%2Boc0QambB%2BZq8OeDgElQmiaHJWyMVu1QvuI8M%2FgeMFkp0hUD3YYKc3z10TrQnnapW%2Fip2JYT8OrJlmzL298MXGSR2c9LcX4PsNlTGfe032T5QY0zuwCPg1vzVNXXNL2berdDrJWZ%2FCKt6NNjuU%2B4KfA7Hd47SaF6aFXRvKsvBbWWoYocj%2FZtjhMIS6msMGOqUB6FqnK8%2B%2FXsufPqHvNGbsapQHLAeNn7iN3VM27mp4k%2FmFyh8cOQqa8n%2BbqHA4SYiDdihQU6NrU0JoQuYj4yMmT8L75RGLuJXbe2Z67U6LXoDLmM0iSCksNgxQADJD7KmZT0xO64zHgWVf7rT6DcwCcOCJDalIlRWck3D9q%2FKBV%2FCItKBMqV099hM0jaAXR3U0p9dZLsQE3q%2B2Amd1YK7SVIEID0%2B%2B&X-Amz-Signature=669769a91eda57386bad379b86033921f8bb368a3368b43af23fc8e2ead1a482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77HZYIO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHb6Qobo1Mc3LdM2OfKK1jGmDlS9cejhpPNrW1%2FZBQcEAiEAmx916PgpZHiR9UCHkcsGVaPwhD3xn49zBwHnM1WXfV4q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGiulZo07fihxu8kRSrcA4collXYOsKBmtrGm%2BT4PfYnJFXZqNLA90qbUce3AgyG%2Bz3SVhOBdrWxoUhVxWCwQmaXKcXpWm%2F8M0QQD%2F8WQaHkMBjEuArkPhljx0hMYzlLdpoqgZV4fiqsDtZrPGSRXGhUbAW2zYh%2Bp5f3TzSbz1Aow9gqPoZbaXSHEPLQ%2B4kYEXwTUD29YCHxgxfzSjcs9rdz%2BFyC9AkPuWC7O3ahauYkaEZeinC15E9F356CmLvl5mjKVb5IzaTriK3hLJB8rODTMJ4LFysm%2FW4kxZFjFJKeTTd0bU%2F%2BClB7fEUNYfG1ZMbx6NtrdP1UOlIt%2B0CxIyEwejIaS5WC%2Bosjedrk5OHtn82SVKzWDXejQ7OJJhT7l%2F7ZxiTOkv8qdflwY59%2BiY9AkCmEyBs2RemJFJ9FquocB%2BX%2Bpbwd720kVpwp%2BeCoNNGUXE4v7r6yKvEu%2B31r2u%2FzMN%2Boc0QambB%2BZq8OeDgElQmiaHJWyMVu1QvuI8M%2FgeMFkp0hUD3YYKc3z10TrQnnapW%2Fip2JYT8OrJlmzL298MXGSR2c9LcX4PsNlTGfe032T5QY0zuwCPg1vzVNXXNL2berdDrJWZ%2FCKt6NNjuU%2B4KfA7Hd47SaF6aFXRvKsvBbWWoYocj%2FZtjhMIS6msMGOqUB6FqnK8%2B%2FXsufPqHvNGbsapQHLAeNn7iN3VM27mp4k%2FmFyh8cOQqa8n%2BbqHA4SYiDdihQU6NrU0JoQuYj4yMmT8L75RGLuJXbe2Z67U6LXoDLmM0iSCksNgxQADJD7KmZT0xO64zHgWVf7rT6DcwCcOCJDalIlRWck3D9q%2FKBV%2FCItKBMqV099hM0jaAXR3U0p9dZLsQE3q%2B2Amd1YK7SVIEID0%2B%2B&X-Amz-Signature=0f87dfbeae13e8232536b3882a0df6dc36d55100a86e441fc4b91c30bcc33d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77HZYIO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHb6Qobo1Mc3LdM2OfKK1jGmDlS9cejhpPNrW1%2FZBQcEAiEAmx916PgpZHiR9UCHkcsGVaPwhD3xn49zBwHnM1WXfV4q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGiulZo07fihxu8kRSrcA4collXYOsKBmtrGm%2BT4PfYnJFXZqNLA90qbUce3AgyG%2Bz3SVhOBdrWxoUhVxWCwQmaXKcXpWm%2F8M0QQD%2F8WQaHkMBjEuArkPhljx0hMYzlLdpoqgZV4fiqsDtZrPGSRXGhUbAW2zYh%2Bp5f3TzSbz1Aow9gqPoZbaXSHEPLQ%2B4kYEXwTUD29YCHxgxfzSjcs9rdz%2BFyC9AkPuWC7O3ahauYkaEZeinC15E9F356CmLvl5mjKVb5IzaTriK3hLJB8rODTMJ4LFysm%2FW4kxZFjFJKeTTd0bU%2F%2BClB7fEUNYfG1ZMbx6NtrdP1UOlIt%2B0CxIyEwejIaS5WC%2Bosjedrk5OHtn82SVKzWDXejQ7OJJhT7l%2F7ZxiTOkv8qdflwY59%2BiY9AkCmEyBs2RemJFJ9FquocB%2BX%2Bpbwd720kVpwp%2BeCoNNGUXE4v7r6yKvEu%2B31r2u%2FzMN%2Boc0QambB%2BZq8OeDgElQmiaHJWyMVu1QvuI8M%2FgeMFkp0hUD3YYKc3z10TrQnnapW%2Fip2JYT8OrJlmzL298MXGSR2c9LcX4PsNlTGfe032T5QY0zuwCPg1vzVNXXNL2berdDrJWZ%2FCKt6NNjuU%2B4KfA7Hd47SaF6aFXRvKsvBbWWoYocj%2FZtjhMIS6msMGOqUB6FqnK8%2B%2FXsufPqHvNGbsapQHLAeNn7iN3VM27mp4k%2FmFyh8cOQqa8n%2BbqHA4SYiDdihQU6NrU0JoQuYj4yMmT8L75RGLuJXbe2Z67U6LXoDLmM0iSCksNgxQADJD7KmZT0xO64zHgWVf7rT6DcwCcOCJDalIlRWck3D9q%2FKBV%2FCItKBMqV099hM0jaAXR3U0p9dZLsQE3q%2B2Amd1YK7SVIEID0%2B%2B&X-Amz-Signature=a2ef703cc91517cf10f4415f4000921efcba1286248856ef8f6b355b6e087f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77HZYIO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHb6Qobo1Mc3LdM2OfKK1jGmDlS9cejhpPNrW1%2FZBQcEAiEAmx916PgpZHiR9UCHkcsGVaPwhD3xn49zBwHnM1WXfV4q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGiulZo07fihxu8kRSrcA4collXYOsKBmtrGm%2BT4PfYnJFXZqNLA90qbUce3AgyG%2Bz3SVhOBdrWxoUhVxWCwQmaXKcXpWm%2F8M0QQD%2F8WQaHkMBjEuArkPhljx0hMYzlLdpoqgZV4fiqsDtZrPGSRXGhUbAW2zYh%2Bp5f3TzSbz1Aow9gqPoZbaXSHEPLQ%2B4kYEXwTUD29YCHxgxfzSjcs9rdz%2BFyC9AkPuWC7O3ahauYkaEZeinC15E9F356CmLvl5mjKVb5IzaTriK3hLJB8rODTMJ4LFysm%2FW4kxZFjFJKeTTd0bU%2F%2BClB7fEUNYfG1ZMbx6NtrdP1UOlIt%2B0CxIyEwejIaS5WC%2Bosjedrk5OHtn82SVKzWDXejQ7OJJhT7l%2F7ZxiTOkv8qdflwY59%2BiY9AkCmEyBs2RemJFJ9FquocB%2BX%2Bpbwd720kVpwp%2BeCoNNGUXE4v7r6yKvEu%2B31r2u%2FzMN%2Boc0QambB%2BZq8OeDgElQmiaHJWyMVu1QvuI8M%2FgeMFkp0hUD3YYKc3z10TrQnnapW%2Fip2JYT8OrJlmzL298MXGSR2c9LcX4PsNlTGfe032T5QY0zuwCPg1vzVNXXNL2berdDrJWZ%2FCKt6NNjuU%2B4KfA7Hd47SaF6aFXRvKsvBbWWoYocj%2FZtjhMIS6msMGOqUB6FqnK8%2B%2FXsufPqHvNGbsapQHLAeNn7iN3VM27mp4k%2FmFyh8cOQqa8n%2BbqHA4SYiDdihQU6NrU0JoQuYj4yMmT8L75RGLuJXbe2Z67U6LXoDLmM0iSCksNgxQADJD7KmZT0xO64zHgWVf7rT6DcwCcOCJDalIlRWck3D9q%2FKBV%2FCItKBMqV099hM0jaAXR3U0p9dZLsQE3q%2B2Amd1YK7SVIEID0%2B%2B&X-Amz-Signature=1cc995ed988266b850adf830f41c75a77bc12c55e427d485114dbd9b4c245dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
