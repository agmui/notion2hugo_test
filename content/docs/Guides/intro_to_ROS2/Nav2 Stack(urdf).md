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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNN6AYQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDuPS13%2FHtNpZJ5z95Co1fbh%2Bie%2FuLuWX5np1d7%2FPq%2FmwIgLXXoN4PAML8%2F%2Bb3YXoLRtmLfzE1oTxrBaUNppJ%2FzncYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDD0au%2F7TvuylSL2nBCrcA62u02jqP42oXnFgOqrc1YBtvGoQLLNiuCg4LKg%2BsdSChu39FTLRNwqhkOzQqT9TrdQqN3doIsHHim7T4wFbpzM%2F3aRfR2fft6xQ4vNP4wGjCHGyljnJSpoQgfIsDfhpP3AnU3Xv9QkF3CY2see3Y%2Fh9Galq58IEPNHjHA%2Bce6y3mXkcvxJzCjGxPsMGh%2B%2BM%2BBfnqTS3Rs2kB2C0wv%2B6F2SJO302wvXcF8bOEH51vVRPH09o4PoM51h0I2TJfCyUqHQ4KVfWx8vZQou3FZxvzekEQWHIr8jLnvuVz%2F2EZ%2F%2FcRl0ShuXqOdefwCUo6b4xcpyBBHP7iChy2CqpWqizucsLtC%2FWx8%2By%2FQ0EQHu1ZQMukUKgtG1stu6DWzDdLb61oud6J%2FejC9EDWbhNi%2BYjgmeRc1kejPYYtCGdCqf05%2FApWSt637d7ThRo99DInqzoYAwDQwsN%2FBc%2F%2B6hzays6SVuviyftYax6tVE59esxydjWbj6eF9PjWRQpTLjObg08v0CzR5i%2FL4RlSMoLXlQawJq2pom%2Fjl4hAiJBjarwLt7DhmxcfMTNGWdCfc8VFXJimhymYJ%2BrBevrtgXaO%2Fz1ypSlNDRymYUm0GZOKzz48qXvQYz5bhby1aPEDh01MLSAgcIGOqUB3T0p074Kq%2Bev4S2mutGyuM9CDHCqax2nCVGgZdNvZ34ksq1fMHgKgJwXJIlLBs5bpV5wzuVlPqrTTnId5YAEl5OMtfqdIljkdVJOw6xCFu6ymPXfv3titGxKHo%2FRusdxSbIWUhi2IT%2B7ORcBe54%2FuTYw3ndNIUSLxulV4kv6wUq6gm0wGoHJdsDvERe%2F%2BDkPpp971jx2pnZLTIHB%2FnhBORnV5K4x&X-Amz-Signature=90b47768beff650a597723bbdc48eabd184fce793dbc60bdd79e91c7498a0ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNN6AYQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDuPS13%2FHtNpZJ5z95Co1fbh%2Bie%2FuLuWX5np1d7%2FPq%2FmwIgLXXoN4PAML8%2F%2Bb3YXoLRtmLfzE1oTxrBaUNppJ%2FzncYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDD0au%2F7TvuylSL2nBCrcA62u02jqP42oXnFgOqrc1YBtvGoQLLNiuCg4LKg%2BsdSChu39FTLRNwqhkOzQqT9TrdQqN3doIsHHim7T4wFbpzM%2F3aRfR2fft6xQ4vNP4wGjCHGyljnJSpoQgfIsDfhpP3AnU3Xv9QkF3CY2see3Y%2Fh9Galq58IEPNHjHA%2Bce6y3mXkcvxJzCjGxPsMGh%2B%2BM%2BBfnqTS3Rs2kB2C0wv%2B6F2SJO302wvXcF8bOEH51vVRPH09o4PoM51h0I2TJfCyUqHQ4KVfWx8vZQou3FZxvzekEQWHIr8jLnvuVz%2F2EZ%2F%2FcRl0ShuXqOdefwCUo6b4xcpyBBHP7iChy2CqpWqizucsLtC%2FWx8%2By%2FQ0EQHu1ZQMukUKgtG1stu6DWzDdLb61oud6J%2FejC9EDWbhNi%2BYjgmeRc1kejPYYtCGdCqf05%2FApWSt637d7ThRo99DInqzoYAwDQwsN%2FBc%2F%2B6hzays6SVuviyftYax6tVE59esxydjWbj6eF9PjWRQpTLjObg08v0CzR5i%2FL4RlSMoLXlQawJq2pom%2Fjl4hAiJBjarwLt7DhmxcfMTNGWdCfc8VFXJimhymYJ%2BrBevrtgXaO%2Fz1ypSlNDRymYUm0GZOKzz48qXvQYz5bhby1aPEDh01MLSAgcIGOqUB3T0p074Kq%2Bev4S2mutGyuM9CDHCqax2nCVGgZdNvZ34ksq1fMHgKgJwXJIlLBs5bpV5wzuVlPqrTTnId5YAEl5OMtfqdIljkdVJOw6xCFu6ymPXfv3titGxKHo%2FRusdxSbIWUhi2IT%2B7ORcBe54%2FuTYw3ndNIUSLxulV4kv6wUq6gm0wGoHJdsDvERe%2F%2BDkPpp971jx2pnZLTIHB%2FnhBORnV5K4x&X-Amz-Signature=6bca14a628f62326c9269039e286510bab7eed18c7277c2b3ca0930fb1c4c9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNN6AYQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDuPS13%2FHtNpZJ5z95Co1fbh%2Bie%2FuLuWX5np1d7%2FPq%2FmwIgLXXoN4PAML8%2F%2Bb3YXoLRtmLfzE1oTxrBaUNppJ%2FzncYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDD0au%2F7TvuylSL2nBCrcA62u02jqP42oXnFgOqrc1YBtvGoQLLNiuCg4LKg%2BsdSChu39FTLRNwqhkOzQqT9TrdQqN3doIsHHim7T4wFbpzM%2F3aRfR2fft6xQ4vNP4wGjCHGyljnJSpoQgfIsDfhpP3AnU3Xv9QkF3CY2see3Y%2Fh9Galq58IEPNHjHA%2Bce6y3mXkcvxJzCjGxPsMGh%2B%2BM%2BBfnqTS3Rs2kB2C0wv%2B6F2SJO302wvXcF8bOEH51vVRPH09o4PoM51h0I2TJfCyUqHQ4KVfWx8vZQou3FZxvzekEQWHIr8jLnvuVz%2F2EZ%2F%2FcRl0ShuXqOdefwCUo6b4xcpyBBHP7iChy2CqpWqizucsLtC%2FWx8%2By%2FQ0EQHu1ZQMukUKgtG1stu6DWzDdLb61oud6J%2FejC9EDWbhNi%2BYjgmeRc1kejPYYtCGdCqf05%2FApWSt637d7ThRo99DInqzoYAwDQwsN%2FBc%2F%2B6hzays6SVuviyftYax6tVE59esxydjWbj6eF9PjWRQpTLjObg08v0CzR5i%2FL4RlSMoLXlQawJq2pom%2Fjl4hAiJBjarwLt7DhmxcfMTNGWdCfc8VFXJimhymYJ%2BrBevrtgXaO%2Fz1ypSlNDRymYUm0GZOKzz48qXvQYz5bhby1aPEDh01MLSAgcIGOqUB3T0p074Kq%2Bev4S2mutGyuM9CDHCqax2nCVGgZdNvZ34ksq1fMHgKgJwXJIlLBs5bpV5wzuVlPqrTTnId5YAEl5OMtfqdIljkdVJOw6xCFu6ymPXfv3titGxKHo%2FRusdxSbIWUhi2IT%2B7ORcBe54%2FuTYw3ndNIUSLxulV4kv6wUq6gm0wGoHJdsDvERe%2F%2BDkPpp971jx2pnZLTIHB%2FnhBORnV5K4x&X-Amz-Signature=74860b101263cd2184eb6091cd92ce3f04ecbcdd8594a4fd702d7c6f4ebe50a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNN6AYQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDuPS13%2FHtNpZJ5z95Co1fbh%2Bie%2FuLuWX5np1d7%2FPq%2FmwIgLXXoN4PAML8%2F%2Bb3YXoLRtmLfzE1oTxrBaUNppJ%2FzncYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDD0au%2F7TvuylSL2nBCrcA62u02jqP42oXnFgOqrc1YBtvGoQLLNiuCg4LKg%2BsdSChu39FTLRNwqhkOzQqT9TrdQqN3doIsHHim7T4wFbpzM%2F3aRfR2fft6xQ4vNP4wGjCHGyljnJSpoQgfIsDfhpP3AnU3Xv9QkF3CY2see3Y%2Fh9Galq58IEPNHjHA%2Bce6y3mXkcvxJzCjGxPsMGh%2B%2BM%2BBfnqTS3Rs2kB2C0wv%2B6F2SJO302wvXcF8bOEH51vVRPH09o4PoM51h0I2TJfCyUqHQ4KVfWx8vZQou3FZxvzekEQWHIr8jLnvuVz%2F2EZ%2F%2FcRl0ShuXqOdefwCUo6b4xcpyBBHP7iChy2CqpWqizucsLtC%2FWx8%2By%2FQ0EQHu1ZQMukUKgtG1stu6DWzDdLb61oud6J%2FejC9EDWbhNi%2BYjgmeRc1kejPYYtCGdCqf05%2FApWSt637d7ThRo99DInqzoYAwDQwsN%2FBc%2F%2B6hzays6SVuviyftYax6tVE59esxydjWbj6eF9PjWRQpTLjObg08v0CzR5i%2FL4RlSMoLXlQawJq2pom%2Fjl4hAiJBjarwLt7DhmxcfMTNGWdCfc8VFXJimhymYJ%2BrBevrtgXaO%2Fz1ypSlNDRymYUm0GZOKzz48qXvQYz5bhby1aPEDh01MLSAgcIGOqUB3T0p074Kq%2Bev4S2mutGyuM9CDHCqax2nCVGgZdNvZ34ksq1fMHgKgJwXJIlLBs5bpV5wzuVlPqrTTnId5YAEl5OMtfqdIljkdVJOw6xCFu6ymPXfv3titGxKHo%2FRusdxSbIWUhi2IT%2B7ORcBe54%2FuTYw3ndNIUSLxulV4kv6wUq6gm0wGoHJdsDvERe%2F%2BDkPpp971jx2pnZLTIHB%2FnhBORnV5K4x&X-Amz-Signature=5d5709039d26ca9c3cf9ee70e2173155640a1e4bf4dca621436a621a084cc110&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNN6AYQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDuPS13%2FHtNpZJ5z95Co1fbh%2Bie%2FuLuWX5np1d7%2FPq%2FmwIgLXXoN4PAML8%2F%2Bb3YXoLRtmLfzE1oTxrBaUNppJ%2FzncYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDD0au%2F7TvuylSL2nBCrcA62u02jqP42oXnFgOqrc1YBtvGoQLLNiuCg4LKg%2BsdSChu39FTLRNwqhkOzQqT9TrdQqN3doIsHHim7T4wFbpzM%2F3aRfR2fft6xQ4vNP4wGjCHGyljnJSpoQgfIsDfhpP3AnU3Xv9QkF3CY2see3Y%2Fh9Galq58IEPNHjHA%2Bce6y3mXkcvxJzCjGxPsMGh%2B%2BM%2BBfnqTS3Rs2kB2C0wv%2B6F2SJO302wvXcF8bOEH51vVRPH09o4PoM51h0I2TJfCyUqHQ4KVfWx8vZQou3FZxvzekEQWHIr8jLnvuVz%2F2EZ%2F%2FcRl0ShuXqOdefwCUo6b4xcpyBBHP7iChy2CqpWqizucsLtC%2FWx8%2By%2FQ0EQHu1ZQMukUKgtG1stu6DWzDdLb61oud6J%2FejC9EDWbhNi%2BYjgmeRc1kejPYYtCGdCqf05%2FApWSt637d7ThRo99DInqzoYAwDQwsN%2FBc%2F%2B6hzays6SVuviyftYax6tVE59esxydjWbj6eF9PjWRQpTLjObg08v0CzR5i%2FL4RlSMoLXlQawJq2pom%2Fjl4hAiJBjarwLt7DhmxcfMTNGWdCfc8VFXJimhymYJ%2BrBevrtgXaO%2Fz1ypSlNDRymYUm0GZOKzz48qXvQYz5bhby1aPEDh01MLSAgcIGOqUB3T0p074Kq%2Bev4S2mutGyuM9CDHCqax2nCVGgZdNvZ34ksq1fMHgKgJwXJIlLBs5bpV5wzuVlPqrTTnId5YAEl5OMtfqdIljkdVJOw6xCFu6ymPXfv3titGxKHo%2FRusdxSbIWUhi2IT%2B7ORcBe54%2FuTYw3ndNIUSLxulV4kv6wUq6gm0wGoHJdsDvERe%2F%2BDkPpp971jx2pnZLTIHB%2FnhBORnV5K4x&X-Amz-Signature=bce0fee84eca917f451390271d4e413d4636adee2184a381d9cadc28691717f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNN6AYQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDuPS13%2FHtNpZJ5z95Co1fbh%2Bie%2FuLuWX5np1d7%2FPq%2FmwIgLXXoN4PAML8%2F%2Bb3YXoLRtmLfzE1oTxrBaUNppJ%2FzncYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDD0au%2F7TvuylSL2nBCrcA62u02jqP42oXnFgOqrc1YBtvGoQLLNiuCg4LKg%2BsdSChu39FTLRNwqhkOzQqT9TrdQqN3doIsHHim7T4wFbpzM%2F3aRfR2fft6xQ4vNP4wGjCHGyljnJSpoQgfIsDfhpP3AnU3Xv9QkF3CY2see3Y%2Fh9Galq58IEPNHjHA%2Bce6y3mXkcvxJzCjGxPsMGh%2B%2BM%2BBfnqTS3Rs2kB2C0wv%2B6F2SJO302wvXcF8bOEH51vVRPH09o4PoM51h0I2TJfCyUqHQ4KVfWx8vZQou3FZxvzekEQWHIr8jLnvuVz%2F2EZ%2F%2FcRl0ShuXqOdefwCUo6b4xcpyBBHP7iChy2CqpWqizucsLtC%2FWx8%2By%2FQ0EQHu1ZQMukUKgtG1stu6DWzDdLb61oud6J%2FejC9EDWbhNi%2BYjgmeRc1kejPYYtCGdCqf05%2FApWSt637d7ThRo99DInqzoYAwDQwsN%2FBc%2F%2B6hzays6SVuviyftYax6tVE59esxydjWbj6eF9PjWRQpTLjObg08v0CzR5i%2FL4RlSMoLXlQawJq2pom%2Fjl4hAiJBjarwLt7DhmxcfMTNGWdCfc8VFXJimhymYJ%2BrBevrtgXaO%2Fz1ypSlNDRymYUm0GZOKzz48qXvQYz5bhby1aPEDh01MLSAgcIGOqUB3T0p074Kq%2Bev4S2mutGyuM9CDHCqax2nCVGgZdNvZ34ksq1fMHgKgJwXJIlLBs5bpV5wzuVlPqrTTnId5YAEl5OMtfqdIljkdVJOw6xCFu6ymPXfv3titGxKHo%2FRusdxSbIWUhi2IT%2B7ORcBe54%2FuTYw3ndNIUSLxulV4kv6wUq6gm0wGoHJdsDvERe%2F%2BDkPpp971jx2pnZLTIHB%2FnhBORnV5K4x&X-Amz-Signature=c02a672f29a2811d00ef2c30af4934e48d3fab231051477fbd5b342ad2c9895f&X-Amz-SignedHeaders=host&x-id=GetObject)
