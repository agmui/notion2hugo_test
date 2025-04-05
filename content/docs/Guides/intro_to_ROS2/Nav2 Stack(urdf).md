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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CNDP57%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTJjvGmmr1QOSbtNg2WVsls5Wr0wTGvU%2BTUNCNdVCS5wIgMVHmqirxi8R%2FLinnty2eQ72TKsK37Q2Yxbs%2Bq5JX5W4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFX1p3j%2FMnvottR08yrcA3Auuwo1njks5dYTj6PPSZ588Qvgy0T%2BXXv78TTHUo9E%2BTbyK8fkR84oYYJE2M3AaiiNZzwcLHwLOxdSl7jRLLjlCPrarl2R%2BQZP7OW%2BQfNEJWBPIcnH5%2F7cMI10NbHqDRh6sdP5tXQ1Sapxq5ihG7vnBzClfSmX0s5R9UvF5T1dhdvB085ocQfk146LawFCWhZXHdyytYVOcvAhlqSPcMgb9hY8TfvBFUfkB1JPLfNOm%2FOF8CJBljUVPT7Ri3LebBWtkxfadwQbChBa3jQsOey89G6tb0EVw6zpizatX7jbmrnFFaxStZ%2Fn5YW4V0RLBkn9%2Bl2Qsg0If3v1pSmUb7g7oAxq9dJ6wXI7S%2FtWFRCprpxc1DkrtCisWw0sKyoFnIRWdANBZCHKVt4NH7Zpq%2FtNhpUR%2BKfrO0pJz2AeHlLhGwikc3dO1UdcJMsphFI6DY6kZ4KtIdFg8AZmhui04GVeG7qTWjEb8vN8jOpNpOFILRoooGvsWMMCdjMHZ56SLP1Bcamg0yC5AfTJzGUtW%2BDm7UdAiGa4bhhIyhSPe%2Br253yH5mDfSKR%2BikyUl9uJCe%2BPao1%2BbW%2Fn1%2B%2FRUd0UejqQgX95hxjlwA7q3vSsNrEsCBkNPqgrZsOUW9rqMJLHxL8GOqUBu7MKj3qJE%2FN%2FmFmv7OYFkwJLD3TWUNzjv135jlynacTMBhEYyTS%2FzFE6M7%2FrRkYaahS0H%2FJgl05g%2BKxfX4hJoCOpk0J2YZwjRa1cXHv4C9%2BxqCVcBciWjsMJaW4MAznrPgJFX1vawzgxAAh8L3SSbbz%2B0uAy%2FbEW6U125f7CqLl3xNs3KFPkpiv3bUw5f93YplDdd8az%2B4vVm%2FHnOAMVdBnfzVPI&X-Amz-Signature=823d0b723e7786dae16d760684e7e9619aa674a21970e88dd69dc07278d589c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CNDP57%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTJjvGmmr1QOSbtNg2WVsls5Wr0wTGvU%2BTUNCNdVCS5wIgMVHmqirxi8R%2FLinnty2eQ72TKsK37Q2Yxbs%2Bq5JX5W4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFX1p3j%2FMnvottR08yrcA3Auuwo1njks5dYTj6PPSZ588Qvgy0T%2BXXv78TTHUo9E%2BTbyK8fkR84oYYJE2M3AaiiNZzwcLHwLOxdSl7jRLLjlCPrarl2R%2BQZP7OW%2BQfNEJWBPIcnH5%2F7cMI10NbHqDRh6sdP5tXQ1Sapxq5ihG7vnBzClfSmX0s5R9UvF5T1dhdvB085ocQfk146LawFCWhZXHdyytYVOcvAhlqSPcMgb9hY8TfvBFUfkB1JPLfNOm%2FOF8CJBljUVPT7Ri3LebBWtkxfadwQbChBa3jQsOey89G6tb0EVw6zpizatX7jbmrnFFaxStZ%2Fn5YW4V0RLBkn9%2Bl2Qsg0If3v1pSmUb7g7oAxq9dJ6wXI7S%2FtWFRCprpxc1DkrtCisWw0sKyoFnIRWdANBZCHKVt4NH7Zpq%2FtNhpUR%2BKfrO0pJz2AeHlLhGwikc3dO1UdcJMsphFI6DY6kZ4KtIdFg8AZmhui04GVeG7qTWjEb8vN8jOpNpOFILRoooGvsWMMCdjMHZ56SLP1Bcamg0yC5AfTJzGUtW%2BDm7UdAiGa4bhhIyhSPe%2Br253yH5mDfSKR%2BikyUl9uJCe%2BPao1%2BbW%2Fn1%2B%2FRUd0UejqQgX95hxjlwA7q3vSsNrEsCBkNPqgrZsOUW9rqMJLHxL8GOqUBu7MKj3qJE%2FN%2FmFmv7OYFkwJLD3TWUNzjv135jlynacTMBhEYyTS%2FzFE6M7%2FrRkYaahS0H%2FJgl05g%2BKxfX4hJoCOpk0J2YZwjRa1cXHv4C9%2BxqCVcBciWjsMJaW4MAznrPgJFX1vawzgxAAh8L3SSbbz%2B0uAy%2FbEW6U125f7CqLl3xNs3KFPkpiv3bUw5f93YplDdd8az%2B4vVm%2FHnOAMVdBnfzVPI&X-Amz-Signature=e4cc0160b620f875e8406587cabc17bd4ac378d6dafe9101a34550a57eaba1ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CNDP57%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTJjvGmmr1QOSbtNg2WVsls5Wr0wTGvU%2BTUNCNdVCS5wIgMVHmqirxi8R%2FLinnty2eQ72TKsK37Q2Yxbs%2Bq5JX5W4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFX1p3j%2FMnvottR08yrcA3Auuwo1njks5dYTj6PPSZ588Qvgy0T%2BXXv78TTHUo9E%2BTbyK8fkR84oYYJE2M3AaiiNZzwcLHwLOxdSl7jRLLjlCPrarl2R%2BQZP7OW%2BQfNEJWBPIcnH5%2F7cMI10NbHqDRh6sdP5tXQ1Sapxq5ihG7vnBzClfSmX0s5R9UvF5T1dhdvB085ocQfk146LawFCWhZXHdyytYVOcvAhlqSPcMgb9hY8TfvBFUfkB1JPLfNOm%2FOF8CJBljUVPT7Ri3LebBWtkxfadwQbChBa3jQsOey89G6tb0EVw6zpizatX7jbmrnFFaxStZ%2Fn5YW4V0RLBkn9%2Bl2Qsg0If3v1pSmUb7g7oAxq9dJ6wXI7S%2FtWFRCprpxc1DkrtCisWw0sKyoFnIRWdANBZCHKVt4NH7Zpq%2FtNhpUR%2BKfrO0pJz2AeHlLhGwikc3dO1UdcJMsphFI6DY6kZ4KtIdFg8AZmhui04GVeG7qTWjEb8vN8jOpNpOFILRoooGvsWMMCdjMHZ56SLP1Bcamg0yC5AfTJzGUtW%2BDm7UdAiGa4bhhIyhSPe%2Br253yH5mDfSKR%2BikyUl9uJCe%2BPao1%2BbW%2Fn1%2B%2FRUd0UejqQgX95hxjlwA7q3vSsNrEsCBkNPqgrZsOUW9rqMJLHxL8GOqUBu7MKj3qJE%2FN%2FmFmv7OYFkwJLD3TWUNzjv135jlynacTMBhEYyTS%2FzFE6M7%2FrRkYaahS0H%2FJgl05g%2BKxfX4hJoCOpk0J2YZwjRa1cXHv4C9%2BxqCVcBciWjsMJaW4MAznrPgJFX1vawzgxAAh8L3SSbbz%2B0uAy%2FbEW6U125f7CqLl3xNs3KFPkpiv3bUw5f93YplDdd8az%2B4vVm%2FHnOAMVdBnfzVPI&X-Amz-Signature=d816641038c8264cc6729e4644df3fc12899c62fb9f2978707f87c4ab0f7bfef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CNDP57%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTJjvGmmr1QOSbtNg2WVsls5Wr0wTGvU%2BTUNCNdVCS5wIgMVHmqirxi8R%2FLinnty2eQ72TKsK37Q2Yxbs%2Bq5JX5W4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFX1p3j%2FMnvottR08yrcA3Auuwo1njks5dYTj6PPSZ588Qvgy0T%2BXXv78TTHUo9E%2BTbyK8fkR84oYYJE2M3AaiiNZzwcLHwLOxdSl7jRLLjlCPrarl2R%2BQZP7OW%2BQfNEJWBPIcnH5%2F7cMI10NbHqDRh6sdP5tXQ1Sapxq5ihG7vnBzClfSmX0s5R9UvF5T1dhdvB085ocQfk146LawFCWhZXHdyytYVOcvAhlqSPcMgb9hY8TfvBFUfkB1JPLfNOm%2FOF8CJBljUVPT7Ri3LebBWtkxfadwQbChBa3jQsOey89G6tb0EVw6zpizatX7jbmrnFFaxStZ%2Fn5YW4V0RLBkn9%2Bl2Qsg0If3v1pSmUb7g7oAxq9dJ6wXI7S%2FtWFRCprpxc1DkrtCisWw0sKyoFnIRWdANBZCHKVt4NH7Zpq%2FtNhpUR%2BKfrO0pJz2AeHlLhGwikc3dO1UdcJMsphFI6DY6kZ4KtIdFg8AZmhui04GVeG7qTWjEb8vN8jOpNpOFILRoooGvsWMMCdjMHZ56SLP1Bcamg0yC5AfTJzGUtW%2BDm7UdAiGa4bhhIyhSPe%2Br253yH5mDfSKR%2BikyUl9uJCe%2BPao1%2BbW%2Fn1%2B%2FRUd0UejqQgX95hxjlwA7q3vSsNrEsCBkNPqgrZsOUW9rqMJLHxL8GOqUBu7MKj3qJE%2FN%2FmFmv7OYFkwJLD3TWUNzjv135jlynacTMBhEYyTS%2FzFE6M7%2FrRkYaahS0H%2FJgl05g%2BKxfX4hJoCOpk0J2YZwjRa1cXHv4C9%2BxqCVcBciWjsMJaW4MAznrPgJFX1vawzgxAAh8L3SSbbz%2B0uAy%2FbEW6U125f7CqLl3xNs3KFPkpiv3bUw5f93YplDdd8az%2B4vVm%2FHnOAMVdBnfzVPI&X-Amz-Signature=8fbeece3c5818341b8f69a3b7b9039d0d47d01eaea5926858922703616ba6ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CNDP57%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTJjvGmmr1QOSbtNg2WVsls5Wr0wTGvU%2BTUNCNdVCS5wIgMVHmqirxi8R%2FLinnty2eQ72TKsK37Q2Yxbs%2Bq5JX5W4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFX1p3j%2FMnvottR08yrcA3Auuwo1njks5dYTj6PPSZ588Qvgy0T%2BXXv78TTHUo9E%2BTbyK8fkR84oYYJE2M3AaiiNZzwcLHwLOxdSl7jRLLjlCPrarl2R%2BQZP7OW%2BQfNEJWBPIcnH5%2F7cMI10NbHqDRh6sdP5tXQ1Sapxq5ihG7vnBzClfSmX0s5R9UvF5T1dhdvB085ocQfk146LawFCWhZXHdyytYVOcvAhlqSPcMgb9hY8TfvBFUfkB1JPLfNOm%2FOF8CJBljUVPT7Ri3LebBWtkxfadwQbChBa3jQsOey89G6tb0EVw6zpizatX7jbmrnFFaxStZ%2Fn5YW4V0RLBkn9%2Bl2Qsg0If3v1pSmUb7g7oAxq9dJ6wXI7S%2FtWFRCprpxc1DkrtCisWw0sKyoFnIRWdANBZCHKVt4NH7Zpq%2FtNhpUR%2BKfrO0pJz2AeHlLhGwikc3dO1UdcJMsphFI6DY6kZ4KtIdFg8AZmhui04GVeG7qTWjEb8vN8jOpNpOFILRoooGvsWMMCdjMHZ56SLP1Bcamg0yC5AfTJzGUtW%2BDm7UdAiGa4bhhIyhSPe%2Br253yH5mDfSKR%2BikyUl9uJCe%2BPao1%2BbW%2Fn1%2B%2FRUd0UejqQgX95hxjlwA7q3vSsNrEsCBkNPqgrZsOUW9rqMJLHxL8GOqUBu7MKj3qJE%2FN%2FmFmv7OYFkwJLD3TWUNzjv135jlynacTMBhEYyTS%2FzFE6M7%2FrRkYaahS0H%2FJgl05g%2BKxfX4hJoCOpk0J2YZwjRa1cXHv4C9%2BxqCVcBciWjsMJaW4MAznrPgJFX1vawzgxAAh8L3SSbbz%2B0uAy%2FbEW6U125f7CqLl3xNs3KFPkpiv3bUw5f93YplDdd8az%2B4vVm%2FHnOAMVdBnfzVPI&X-Amz-Signature=5870855fa18ee9f920929447be264372bdfbaf6afd3eed46aa63219b54946dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CNDP57%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTJjvGmmr1QOSbtNg2WVsls5Wr0wTGvU%2BTUNCNdVCS5wIgMVHmqirxi8R%2FLinnty2eQ72TKsK37Q2Yxbs%2Bq5JX5W4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFX1p3j%2FMnvottR08yrcA3Auuwo1njks5dYTj6PPSZ588Qvgy0T%2BXXv78TTHUo9E%2BTbyK8fkR84oYYJE2M3AaiiNZzwcLHwLOxdSl7jRLLjlCPrarl2R%2BQZP7OW%2BQfNEJWBPIcnH5%2F7cMI10NbHqDRh6sdP5tXQ1Sapxq5ihG7vnBzClfSmX0s5R9UvF5T1dhdvB085ocQfk146LawFCWhZXHdyytYVOcvAhlqSPcMgb9hY8TfvBFUfkB1JPLfNOm%2FOF8CJBljUVPT7Ri3LebBWtkxfadwQbChBa3jQsOey89G6tb0EVw6zpizatX7jbmrnFFaxStZ%2Fn5YW4V0RLBkn9%2Bl2Qsg0If3v1pSmUb7g7oAxq9dJ6wXI7S%2FtWFRCprpxc1DkrtCisWw0sKyoFnIRWdANBZCHKVt4NH7Zpq%2FtNhpUR%2BKfrO0pJz2AeHlLhGwikc3dO1UdcJMsphFI6DY6kZ4KtIdFg8AZmhui04GVeG7qTWjEb8vN8jOpNpOFILRoooGvsWMMCdjMHZ56SLP1Bcamg0yC5AfTJzGUtW%2BDm7UdAiGa4bhhIyhSPe%2Br253yH5mDfSKR%2BikyUl9uJCe%2BPao1%2BbW%2Fn1%2B%2FRUd0UejqQgX95hxjlwA7q3vSsNrEsCBkNPqgrZsOUW9rqMJLHxL8GOqUBu7MKj3qJE%2FN%2FmFmv7OYFkwJLD3TWUNzjv135jlynacTMBhEYyTS%2FzFE6M7%2FrRkYaahS0H%2FJgl05g%2BKxfX4hJoCOpk0J2YZwjRa1cXHv4C9%2BxqCVcBciWjsMJaW4MAznrPgJFX1vawzgxAAh8L3SSbbz%2B0uAy%2FbEW6U125f7CqLl3xNs3KFPkpiv3bUw5f93YplDdd8az%2B4vVm%2FHnOAMVdBnfzVPI&X-Amz-Signature=96dc2d252ceb169a140adb82538e167dfdb6c6617afa7d7dea434591cef5d306&X-Amz-SignedHeaders=host&x-id=GetObject)
