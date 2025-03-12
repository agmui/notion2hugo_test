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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57GE3EI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDfDUba0qSsOpHHB3eyH2rQaiCSuUXmT35yxSrVmDnQEAIhANcyOTJFGjgl6Q9UejQLeTlnYc4VYpDenLzW3An4riZwKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwie5057pvyptCVjXAq3AM655qSNVfdEQVhuM4AwSSORwJhl92En8GOEME5TBg%2F5nUawQNQrRvhgi5w6vNtBeSkZM2n9NYYVmXGLlFxbUXovTa%2BGEt4hwksIVLm%2Bb6cFaGdgCU%2BRyLBn%2FtC%2BfolK6lrNsBrzbJ8bviqo6kTT0%2Fy%2FSfrGdsNLUrqbm5h11TxwnV8guMKt9sPWbvDEnpoH8N%2Bd6KyliInhZvkOMHt3rreq0QGQvjelYAXXGlFVCBW5WTEg%2F9wzOBPHVAfDhcXnxqFyFY7ixnAZFpz7Tsr4TFhTHjkWb7f6khSgqInZusjd3j54LlVeg%2FNEr5%2BBm7gTrDrf%2Fsl7yNgtCfnccSmoFwonLsDkMz122PuGMQQW4r%2BbX23QklC9k%2BubpkG%2FJ4l6XxO52tlYvTAuxXixN%2BHAjQ03d3tfB0HidmhtlKDejZ8OCGFzkAN08j0WvAxdcw5AdsSeZxO002enizrc9X47jirdWms4YUvdf5otDd36PV1pTglfP3XARxKYWD5Q1QDFrEs%2B8GPZWsUdIQShgQRLzUjHey0IFSk6UyuWO4za6o0uiq3dT%2FblH4bhqBYELM7gyFJI%2FTVtSbz%2BeMGW0LcrTESuaRuBHKYwSqTUOPVsqx%2F5S9AUsh0mXRFxPkI0zCXm8S%2BBjqkAbkoha5D8Nww22Ei6nvs1xXLdmiGoQLO7P1x8bziL5EOCXEZsf1ZsUig55xYsqq2Jxd4RIi0NwMHmih%2BN4Q7s3ZJSwc%2FnuQG9Wv5RcFBnA3VGqFfl8g3ssCxVfDGi5jYFBfKV5xHQsqD8hOFIS1zrqfNiGaU0YdOTTpakwBMOLTrL8N24FOYhmTVDkVrXUl55gNPhx2KqIOk8L%2Bp%2BTeriICq2VmW&X-Amz-Signature=3cb862d0d6a5e2b21c5d3ca07db2359c0179c1332e71cd7ee2a565fd57e8691b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57GE3EI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDfDUba0qSsOpHHB3eyH2rQaiCSuUXmT35yxSrVmDnQEAIhANcyOTJFGjgl6Q9UejQLeTlnYc4VYpDenLzW3An4riZwKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwie5057pvyptCVjXAq3AM655qSNVfdEQVhuM4AwSSORwJhl92En8GOEME5TBg%2F5nUawQNQrRvhgi5w6vNtBeSkZM2n9NYYVmXGLlFxbUXovTa%2BGEt4hwksIVLm%2Bb6cFaGdgCU%2BRyLBn%2FtC%2BfolK6lrNsBrzbJ8bviqo6kTT0%2Fy%2FSfrGdsNLUrqbm5h11TxwnV8guMKt9sPWbvDEnpoH8N%2Bd6KyliInhZvkOMHt3rreq0QGQvjelYAXXGlFVCBW5WTEg%2F9wzOBPHVAfDhcXnxqFyFY7ixnAZFpz7Tsr4TFhTHjkWb7f6khSgqInZusjd3j54LlVeg%2FNEr5%2BBm7gTrDrf%2Fsl7yNgtCfnccSmoFwonLsDkMz122PuGMQQW4r%2BbX23QklC9k%2BubpkG%2FJ4l6XxO52tlYvTAuxXixN%2BHAjQ03d3tfB0HidmhtlKDejZ8OCGFzkAN08j0WvAxdcw5AdsSeZxO002enizrc9X47jirdWms4YUvdf5otDd36PV1pTglfP3XARxKYWD5Q1QDFrEs%2B8GPZWsUdIQShgQRLzUjHey0IFSk6UyuWO4za6o0uiq3dT%2FblH4bhqBYELM7gyFJI%2FTVtSbz%2BeMGW0LcrTESuaRuBHKYwSqTUOPVsqx%2F5S9AUsh0mXRFxPkI0zCXm8S%2BBjqkAbkoha5D8Nww22Ei6nvs1xXLdmiGoQLO7P1x8bziL5EOCXEZsf1ZsUig55xYsqq2Jxd4RIi0NwMHmih%2BN4Q7s3ZJSwc%2FnuQG9Wv5RcFBnA3VGqFfl8g3ssCxVfDGi5jYFBfKV5xHQsqD8hOFIS1zrqfNiGaU0YdOTTpakwBMOLTrL8N24FOYhmTVDkVrXUl55gNPhx2KqIOk8L%2Bp%2BTeriICq2VmW&X-Amz-Signature=4993f25d2d49fdbf2f00ad8d8672a3a1ed94197df8dc9b7b4906d1eafe49ec0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57GE3EI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDfDUba0qSsOpHHB3eyH2rQaiCSuUXmT35yxSrVmDnQEAIhANcyOTJFGjgl6Q9UejQLeTlnYc4VYpDenLzW3An4riZwKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwie5057pvyptCVjXAq3AM655qSNVfdEQVhuM4AwSSORwJhl92En8GOEME5TBg%2F5nUawQNQrRvhgi5w6vNtBeSkZM2n9NYYVmXGLlFxbUXovTa%2BGEt4hwksIVLm%2Bb6cFaGdgCU%2BRyLBn%2FtC%2BfolK6lrNsBrzbJ8bviqo6kTT0%2Fy%2FSfrGdsNLUrqbm5h11TxwnV8guMKt9sPWbvDEnpoH8N%2Bd6KyliInhZvkOMHt3rreq0QGQvjelYAXXGlFVCBW5WTEg%2F9wzOBPHVAfDhcXnxqFyFY7ixnAZFpz7Tsr4TFhTHjkWb7f6khSgqInZusjd3j54LlVeg%2FNEr5%2BBm7gTrDrf%2Fsl7yNgtCfnccSmoFwonLsDkMz122PuGMQQW4r%2BbX23QklC9k%2BubpkG%2FJ4l6XxO52tlYvTAuxXixN%2BHAjQ03d3tfB0HidmhtlKDejZ8OCGFzkAN08j0WvAxdcw5AdsSeZxO002enizrc9X47jirdWms4YUvdf5otDd36PV1pTglfP3XARxKYWD5Q1QDFrEs%2B8GPZWsUdIQShgQRLzUjHey0IFSk6UyuWO4za6o0uiq3dT%2FblH4bhqBYELM7gyFJI%2FTVtSbz%2BeMGW0LcrTESuaRuBHKYwSqTUOPVsqx%2F5S9AUsh0mXRFxPkI0zCXm8S%2BBjqkAbkoha5D8Nww22Ei6nvs1xXLdmiGoQLO7P1x8bziL5EOCXEZsf1ZsUig55xYsqq2Jxd4RIi0NwMHmih%2BN4Q7s3ZJSwc%2FnuQG9Wv5RcFBnA3VGqFfl8g3ssCxVfDGi5jYFBfKV5xHQsqD8hOFIS1zrqfNiGaU0YdOTTpakwBMOLTrL8N24FOYhmTVDkVrXUl55gNPhx2KqIOk8L%2Bp%2BTeriICq2VmW&X-Amz-Signature=3a82b092e2cfad03902ee63bee52bd04996d570e7c2a9286e925c9bd14588b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57GE3EI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDfDUba0qSsOpHHB3eyH2rQaiCSuUXmT35yxSrVmDnQEAIhANcyOTJFGjgl6Q9UejQLeTlnYc4VYpDenLzW3An4riZwKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwie5057pvyptCVjXAq3AM655qSNVfdEQVhuM4AwSSORwJhl92En8GOEME5TBg%2F5nUawQNQrRvhgi5w6vNtBeSkZM2n9NYYVmXGLlFxbUXovTa%2BGEt4hwksIVLm%2Bb6cFaGdgCU%2BRyLBn%2FtC%2BfolK6lrNsBrzbJ8bviqo6kTT0%2Fy%2FSfrGdsNLUrqbm5h11TxwnV8guMKt9sPWbvDEnpoH8N%2Bd6KyliInhZvkOMHt3rreq0QGQvjelYAXXGlFVCBW5WTEg%2F9wzOBPHVAfDhcXnxqFyFY7ixnAZFpz7Tsr4TFhTHjkWb7f6khSgqInZusjd3j54LlVeg%2FNEr5%2BBm7gTrDrf%2Fsl7yNgtCfnccSmoFwonLsDkMz122PuGMQQW4r%2BbX23QklC9k%2BubpkG%2FJ4l6XxO52tlYvTAuxXixN%2BHAjQ03d3tfB0HidmhtlKDejZ8OCGFzkAN08j0WvAxdcw5AdsSeZxO002enizrc9X47jirdWms4YUvdf5otDd36PV1pTglfP3XARxKYWD5Q1QDFrEs%2B8GPZWsUdIQShgQRLzUjHey0IFSk6UyuWO4za6o0uiq3dT%2FblH4bhqBYELM7gyFJI%2FTVtSbz%2BeMGW0LcrTESuaRuBHKYwSqTUOPVsqx%2F5S9AUsh0mXRFxPkI0zCXm8S%2BBjqkAbkoha5D8Nww22Ei6nvs1xXLdmiGoQLO7P1x8bziL5EOCXEZsf1ZsUig55xYsqq2Jxd4RIi0NwMHmih%2BN4Q7s3ZJSwc%2FnuQG9Wv5RcFBnA3VGqFfl8g3ssCxVfDGi5jYFBfKV5xHQsqD8hOFIS1zrqfNiGaU0YdOTTpakwBMOLTrL8N24FOYhmTVDkVrXUl55gNPhx2KqIOk8L%2Bp%2BTeriICq2VmW&X-Amz-Signature=ce19ee9139537e9f7654c11206c98a818fe4468bb8e263c9976db92bc9fdd80f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57GE3EI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDfDUba0qSsOpHHB3eyH2rQaiCSuUXmT35yxSrVmDnQEAIhANcyOTJFGjgl6Q9UejQLeTlnYc4VYpDenLzW3An4riZwKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwie5057pvyptCVjXAq3AM655qSNVfdEQVhuM4AwSSORwJhl92En8GOEME5TBg%2F5nUawQNQrRvhgi5w6vNtBeSkZM2n9NYYVmXGLlFxbUXovTa%2BGEt4hwksIVLm%2Bb6cFaGdgCU%2BRyLBn%2FtC%2BfolK6lrNsBrzbJ8bviqo6kTT0%2Fy%2FSfrGdsNLUrqbm5h11TxwnV8guMKt9sPWbvDEnpoH8N%2Bd6KyliInhZvkOMHt3rreq0QGQvjelYAXXGlFVCBW5WTEg%2F9wzOBPHVAfDhcXnxqFyFY7ixnAZFpz7Tsr4TFhTHjkWb7f6khSgqInZusjd3j54LlVeg%2FNEr5%2BBm7gTrDrf%2Fsl7yNgtCfnccSmoFwonLsDkMz122PuGMQQW4r%2BbX23QklC9k%2BubpkG%2FJ4l6XxO52tlYvTAuxXixN%2BHAjQ03d3tfB0HidmhtlKDejZ8OCGFzkAN08j0WvAxdcw5AdsSeZxO002enizrc9X47jirdWms4YUvdf5otDd36PV1pTglfP3XARxKYWD5Q1QDFrEs%2B8GPZWsUdIQShgQRLzUjHey0IFSk6UyuWO4za6o0uiq3dT%2FblH4bhqBYELM7gyFJI%2FTVtSbz%2BeMGW0LcrTESuaRuBHKYwSqTUOPVsqx%2F5S9AUsh0mXRFxPkI0zCXm8S%2BBjqkAbkoha5D8Nww22Ei6nvs1xXLdmiGoQLO7P1x8bziL5EOCXEZsf1ZsUig55xYsqq2Jxd4RIi0NwMHmih%2BN4Q7s3ZJSwc%2FnuQG9Wv5RcFBnA3VGqFfl8g3ssCxVfDGi5jYFBfKV5xHQsqD8hOFIS1zrqfNiGaU0YdOTTpakwBMOLTrL8N24FOYhmTVDkVrXUl55gNPhx2KqIOk8L%2Bp%2BTeriICq2VmW&X-Amz-Signature=a819a4030d75c46e0d57e0642a7a50f1d3d4cef5dcf8ff0753fef7b615a274c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57GE3EI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDfDUba0qSsOpHHB3eyH2rQaiCSuUXmT35yxSrVmDnQEAIhANcyOTJFGjgl6Q9UejQLeTlnYc4VYpDenLzW3An4riZwKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwie5057pvyptCVjXAq3AM655qSNVfdEQVhuM4AwSSORwJhl92En8GOEME5TBg%2F5nUawQNQrRvhgi5w6vNtBeSkZM2n9NYYVmXGLlFxbUXovTa%2BGEt4hwksIVLm%2Bb6cFaGdgCU%2BRyLBn%2FtC%2BfolK6lrNsBrzbJ8bviqo6kTT0%2Fy%2FSfrGdsNLUrqbm5h11TxwnV8guMKt9sPWbvDEnpoH8N%2Bd6KyliInhZvkOMHt3rreq0QGQvjelYAXXGlFVCBW5WTEg%2F9wzOBPHVAfDhcXnxqFyFY7ixnAZFpz7Tsr4TFhTHjkWb7f6khSgqInZusjd3j54LlVeg%2FNEr5%2BBm7gTrDrf%2Fsl7yNgtCfnccSmoFwonLsDkMz122PuGMQQW4r%2BbX23QklC9k%2BubpkG%2FJ4l6XxO52tlYvTAuxXixN%2BHAjQ03d3tfB0HidmhtlKDejZ8OCGFzkAN08j0WvAxdcw5AdsSeZxO002enizrc9X47jirdWms4YUvdf5otDd36PV1pTglfP3XARxKYWD5Q1QDFrEs%2B8GPZWsUdIQShgQRLzUjHey0IFSk6UyuWO4za6o0uiq3dT%2FblH4bhqBYELM7gyFJI%2FTVtSbz%2BeMGW0LcrTESuaRuBHKYwSqTUOPVsqx%2F5S9AUsh0mXRFxPkI0zCXm8S%2BBjqkAbkoha5D8Nww22Ei6nvs1xXLdmiGoQLO7P1x8bziL5EOCXEZsf1ZsUig55xYsqq2Jxd4RIi0NwMHmih%2BN4Q7s3ZJSwc%2FnuQG9Wv5RcFBnA3VGqFfl8g3ssCxVfDGi5jYFBfKV5xHQsqD8hOFIS1zrqfNiGaU0YdOTTpakwBMOLTrL8N24FOYhmTVDkVrXUl55gNPhx2KqIOk8L%2Bp%2BTeriICq2VmW&X-Amz-Signature=9c1c6ecb819484ea081c0749d826214e6786d7d970719b36b32f57fbe5809024&X-Amz-SignedHeaders=host&x-id=GetObject)
