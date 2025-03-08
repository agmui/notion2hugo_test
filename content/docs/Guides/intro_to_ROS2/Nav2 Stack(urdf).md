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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFAC5H2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLGUSUL1CTgEuIAVWOtLWAHbx70joda4DCoKKTj8XTAQIhAIyjF6Be5uRboc6ClwQ6SjBR8VpbeIwvWeqbkFaax0cYKv8DCGMQABoMNjM3NDIzMTgzODA1Igyew4%2FvVV8pUIn3maoq3APkwWQl0K1ihuoFfj8hhWWVZX2AGzn6VrvdlxCakAge3pX4XzM2Tdj4Fs9QCTlD%2BeXnplFcak9bdSDLtVFVBZoDF6lAKCWlk3%2B7losP%2BeSO5mVBzECYOSuP7CTesfidqgr8MSFVGNYxRsFKhw7GMbGmyQgs5qfvtGAaCeZGwFxpIxIicQPAvMZ%2F0ZEQ5uG%2Ba1%2B5qbKGoOAMNF6qkRjYe5fysYG58jmr6xIn4Bu7P7vSBHKsKykzWivtRFkM68ztn0KLEcVo0NfIFWKie9UmGbEhtGVUMnWd6Ivoq%2F3kjqPUSAdX12S47cvreYOf8Y7TJssBD1M8EwNg14BTSv9HVpEIbCCvnB8l2gtgl037Jk9q%2B7L5uzXrd7yXy2n%2BRFPxqr2xt4ddbvA%2BAHIyuG6Nr6UE2XwX9AHJd0v9LqZIp69%2F2OeefpOPK%2Ff4qtTho%2BDNubdiPPMmN2Ftu8r05cKBb4UcihrGdcdCogmeGZpe4j483uFLWodn73kMimwBNXHuY2UbdXKd7CjmGWEBlgrq7PZEvRNjVchA1IZuMDPs6nIah3OUtL%2FaXEibDk4zNINqHFU3Bn1nP8Ji4k3ptgMJdvkGOgVfvvxV3mYSKKjJaiBNbJZgc1U0mqBROp%2Br6DCvg7K%2BBjqkAZLsoddzjX1MoVOojkXNwVGMF%2B6n0UOuB2XmGdcI4ihzZhB45yWYX7ADq4qSfeEJb4DXY1%2Fvlpg7ljVQoPQYzGq4%2F%2B2XxJOTPj8da2MZnThrIbuKE%2BUtlNitr9SRKMtC9h1HJrAXIrcdAVWVcizSgvhj59BG8fOILtILcx%2FLaGhcjpPviGgu5RWXfDAzwLc4fmWC4%2BgVWnHPikB%2FPqRtAFsiycNJ&X-Amz-Signature=461c917f882c48689ffb864c664213809d8e6ced7eb32a638a5a856d48110aba&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFAC5H2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLGUSUL1CTgEuIAVWOtLWAHbx70joda4DCoKKTj8XTAQIhAIyjF6Be5uRboc6ClwQ6SjBR8VpbeIwvWeqbkFaax0cYKv8DCGMQABoMNjM3NDIzMTgzODA1Igyew4%2FvVV8pUIn3maoq3APkwWQl0K1ihuoFfj8hhWWVZX2AGzn6VrvdlxCakAge3pX4XzM2Tdj4Fs9QCTlD%2BeXnplFcak9bdSDLtVFVBZoDF6lAKCWlk3%2B7losP%2BeSO5mVBzECYOSuP7CTesfidqgr8MSFVGNYxRsFKhw7GMbGmyQgs5qfvtGAaCeZGwFxpIxIicQPAvMZ%2F0ZEQ5uG%2Ba1%2B5qbKGoOAMNF6qkRjYe5fysYG58jmr6xIn4Bu7P7vSBHKsKykzWivtRFkM68ztn0KLEcVo0NfIFWKie9UmGbEhtGVUMnWd6Ivoq%2F3kjqPUSAdX12S47cvreYOf8Y7TJssBD1M8EwNg14BTSv9HVpEIbCCvnB8l2gtgl037Jk9q%2B7L5uzXrd7yXy2n%2BRFPxqr2xt4ddbvA%2BAHIyuG6Nr6UE2XwX9AHJd0v9LqZIp69%2F2OeefpOPK%2Ff4qtTho%2BDNubdiPPMmN2Ftu8r05cKBb4UcihrGdcdCogmeGZpe4j483uFLWodn73kMimwBNXHuY2UbdXKd7CjmGWEBlgrq7PZEvRNjVchA1IZuMDPs6nIah3OUtL%2FaXEibDk4zNINqHFU3Bn1nP8Ji4k3ptgMJdvkGOgVfvvxV3mYSKKjJaiBNbJZgc1U0mqBROp%2Br6DCvg7K%2BBjqkAZLsoddzjX1MoVOojkXNwVGMF%2B6n0UOuB2XmGdcI4ihzZhB45yWYX7ADq4qSfeEJb4DXY1%2Fvlpg7ljVQoPQYzGq4%2F%2B2XxJOTPj8da2MZnThrIbuKE%2BUtlNitr9SRKMtC9h1HJrAXIrcdAVWVcizSgvhj59BG8fOILtILcx%2FLaGhcjpPviGgu5RWXfDAzwLc4fmWC4%2BgVWnHPikB%2FPqRtAFsiycNJ&X-Amz-Signature=351fc762f44650a3c7a5633445e997af45f873cb06a8abe111fa11f7a034eaef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFAC5H2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLGUSUL1CTgEuIAVWOtLWAHbx70joda4DCoKKTj8XTAQIhAIyjF6Be5uRboc6ClwQ6SjBR8VpbeIwvWeqbkFaax0cYKv8DCGMQABoMNjM3NDIzMTgzODA1Igyew4%2FvVV8pUIn3maoq3APkwWQl0K1ihuoFfj8hhWWVZX2AGzn6VrvdlxCakAge3pX4XzM2Tdj4Fs9QCTlD%2BeXnplFcak9bdSDLtVFVBZoDF6lAKCWlk3%2B7losP%2BeSO5mVBzECYOSuP7CTesfidqgr8MSFVGNYxRsFKhw7GMbGmyQgs5qfvtGAaCeZGwFxpIxIicQPAvMZ%2F0ZEQ5uG%2Ba1%2B5qbKGoOAMNF6qkRjYe5fysYG58jmr6xIn4Bu7P7vSBHKsKykzWivtRFkM68ztn0KLEcVo0NfIFWKie9UmGbEhtGVUMnWd6Ivoq%2F3kjqPUSAdX12S47cvreYOf8Y7TJssBD1M8EwNg14BTSv9HVpEIbCCvnB8l2gtgl037Jk9q%2B7L5uzXrd7yXy2n%2BRFPxqr2xt4ddbvA%2BAHIyuG6Nr6UE2XwX9AHJd0v9LqZIp69%2F2OeefpOPK%2Ff4qtTho%2BDNubdiPPMmN2Ftu8r05cKBb4UcihrGdcdCogmeGZpe4j483uFLWodn73kMimwBNXHuY2UbdXKd7CjmGWEBlgrq7PZEvRNjVchA1IZuMDPs6nIah3OUtL%2FaXEibDk4zNINqHFU3Bn1nP8Ji4k3ptgMJdvkGOgVfvvxV3mYSKKjJaiBNbJZgc1U0mqBROp%2Br6DCvg7K%2BBjqkAZLsoddzjX1MoVOojkXNwVGMF%2B6n0UOuB2XmGdcI4ihzZhB45yWYX7ADq4qSfeEJb4DXY1%2Fvlpg7ljVQoPQYzGq4%2F%2B2XxJOTPj8da2MZnThrIbuKE%2BUtlNitr9SRKMtC9h1HJrAXIrcdAVWVcizSgvhj59BG8fOILtILcx%2FLaGhcjpPviGgu5RWXfDAzwLc4fmWC4%2BgVWnHPikB%2FPqRtAFsiycNJ&X-Amz-Signature=19ffeedbc4b7d06dbd871403bb4a2a64a953cb342621780e5f777ba23c51b42e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFAC5H2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLGUSUL1CTgEuIAVWOtLWAHbx70joda4DCoKKTj8XTAQIhAIyjF6Be5uRboc6ClwQ6SjBR8VpbeIwvWeqbkFaax0cYKv8DCGMQABoMNjM3NDIzMTgzODA1Igyew4%2FvVV8pUIn3maoq3APkwWQl0K1ihuoFfj8hhWWVZX2AGzn6VrvdlxCakAge3pX4XzM2Tdj4Fs9QCTlD%2BeXnplFcak9bdSDLtVFVBZoDF6lAKCWlk3%2B7losP%2BeSO5mVBzECYOSuP7CTesfidqgr8MSFVGNYxRsFKhw7GMbGmyQgs5qfvtGAaCeZGwFxpIxIicQPAvMZ%2F0ZEQ5uG%2Ba1%2B5qbKGoOAMNF6qkRjYe5fysYG58jmr6xIn4Bu7P7vSBHKsKykzWivtRFkM68ztn0KLEcVo0NfIFWKie9UmGbEhtGVUMnWd6Ivoq%2F3kjqPUSAdX12S47cvreYOf8Y7TJssBD1M8EwNg14BTSv9HVpEIbCCvnB8l2gtgl037Jk9q%2B7L5uzXrd7yXy2n%2BRFPxqr2xt4ddbvA%2BAHIyuG6Nr6UE2XwX9AHJd0v9LqZIp69%2F2OeefpOPK%2Ff4qtTho%2BDNubdiPPMmN2Ftu8r05cKBb4UcihrGdcdCogmeGZpe4j483uFLWodn73kMimwBNXHuY2UbdXKd7CjmGWEBlgrq7PZEvRNjVchA1IZuMDPs6nIah3OUtL%2FaXEibDk4zNINqHFU3Bn1nP8Ji4k3ptgMJdvkGOgVfvvxV3mYSKKjJaiBNbJZgc1U0mqBROp%2Br6DCvg7K%2BBjqkAZLsoddzjX1MoVOojkXNwVGMF%2B6n0UOuB2XmGdcI4ihzZhB45yWYX7ADq4qSfeEJb4DXY1%2Fvlpg7ljVQoPQYzGq4%2F%2B2XxJOTPj8da2MZnThrIbuKE%2BUtlNitr9SRKMtC9h1HJrAXIrcdAVWVcizSgvhj59BG8fOILtILcx%2FLaGhcjpPviGgu5RWXfDAzwLc4fmWC4%2BgVWnHPikB%2FPqRtAFsiycNJ&X-Amz-Signature=8f2a348d47711fa4881c383f27551016489fd4c2a96d3b189316399404609770&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFAC5H2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLGUSUL1CTgEuIAVWOtLWAHbx70joda4DCoKKTj8XTAQIhAIyjF6Be5uRboc6ClwQ6SjBR8VpbeIwvWeqbkFaax0cYKv8DCGMQABoMNjM3NDIzMTgzODA1Igyew4%2FvVV8pUIn3maoq3APkwWQl0K1ihuoFfj8hhWWVZX2AGzn6VrvdlxCakAge3pX4XzM2Tdj4Fs9QCTlD%2BeXnplFcak9bdSDLtVFVBZoDF6lAKCWlk3%2B7losP%2BeSO5mVBzECYOSuP7CTesfidqgr8MSFVGNYxRsFKhw7GMbGmyQgs5qfvtGAaCeZGwFxpIxIicQPAvMZ%2F0ZEQ5uG%2Ba1%2B5qbKGoOAMNF6qkRjYe5fysYG58jmr6xIn4Bu7P7vSBHKsKykzWivtRFkM68ztn0KLEcVo0NfIFWKie9UmGbEhtGVUMnWd6Ivoq%2F3kjqPUSAdX12S47cvreYOf8Y7TJssBD1M8EwNg14BTSv9HVpEIbCCvnB8l2gtgl037Jk9q%2B7L5uzXrd7yXy2n%2BRFPxqr2xt4ddbvA%2BAHIyuG6Nr6UE2XwX9AHJd0v9LqZIp69%2F2OeefpOPK%2Ff4qtTho%2BDNubdiPPMmN2Ftu8r05cKBb4UcihrGdcdCogmeGZpe4j483uFLWodn73kMimwBNXHuY2UbdXKd7CjmGWEBlgrq7PZEvRNjVchA1IZuMDPs6nIah3OUtL%2FaXEibDk4zNINqHFU3Bn1nP8Ji4k3ptgMJdvkGOgVfvvxV3mYSKKjJaiBNbJZgc1U0mqBROp%2Br6DCvg7K%2BBjqkAZLsoddzjX1MoVOojkXNwVGMF%2B6n0UOuB2XmGdcI4ihzZhB45yWYX7ADq4qSfeEJb4DXY1%2Fvlpg7ljVQoPQYzGq4%2F%2B2XxJOTPj8da2MZnThrIbuKE%2BUtlNitr9SRKMtC9h1HJrAXIrcdAVWVcizSgvhj59BG8fOILtILcx%2FLaGhcjpPviGgu5RWXfDAzwLc4fmWC4%2BgVWnHPikB%2FPqRtAFsiycNJ&X-Amz-Signature=2c4adfa56053dc73711756c8cdce5b7d133fde11ccdd84dd4c4dd70dc51c2fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFAC5H2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCLGUSUL1CTgEuIAVWOtLWAHbx70joda4DCoKKTj8XTAQIhAIyjF6Be5uRboc6ClwQ6SjBR8VpbeIwvWeqbkFaax0cYKv8DCGMQABoMNjM3NDIzMTgzODA1Igyew4%2FvVV8pUIn3maoq3APkwWQl0K1ihuoFfj8hhWWVZX2AGzn6VrvdlxCakAge3pX4XzM2Tdj4Fs9QCTlD%2BeXnplFcak9bdSDLtVFVBZoDF6lAKCWlk3%2B7losP%2BeSO5mVBzECYOSuP7CTesfidqgr8MSFVGNYxRsFKhw7GMbGmyQgs5qfvtGAaCeZGwFxpIxIicQPAvMZ%2F0ZEQ5uG%2Ba1%2B5qbKGoOAMNF6qkRjYe5fysYG58jmr6xIn4Bu7P7vSBHKsKykzWivtRFkM68ztn0KLEcVo0NfIFWKie9UmGbEhtGVUMnWd6Ivoq%2F3kjqPUSAdX12S47cvreYOf8Y7TJssBD1M8EwNg14BTSv9HVpEIbCCvnB8l2gtgl037Jk9q%2B7L5uzXrd7yXy2n%2BRFPxqr2xt4ddbvA%2BAHIyuG6Nr6UE2XwX9AHJd0v9LqZIp69%2F2OeefpOPK%2Ff4qtTho%2BDNubdiPPMmN2Ftu8r05cKBb4UcihrGdcdCogmeGZpe4j483uFLWodn73kMimwBNXHuY2UbdXKd7CjmGWEBlgrq7PZEvRNjVchA1IZuMDPs6nIah3OUtL%2FaXEibDk4zNINqHFU3Bn1nP8Ji4k3ptgMJdvkGOgVfvvxV3mYSKKjJaiBNbJZgc1U0mqBROp%2Br6DCvg7K%2BBjqkAZLsoddzjX1MoVOojkXNwVGMF%2B6n0UOuB2XmGdcI4ihzZhB45yWYX7ADq4qSfeEJb4DXY1%2Fvlpg7ljVQoPQYzGq4%2F%2B2XxJOTPj8da2MZnThrIbuKE%2BUtlNitr9SRKMtC9h1HJrAXIrcdAVWVcizSgvhj59BG8fOILtILcx%2FLaGhcjpPviGgu5RWXfDAzwLc4fmWC4%2BgVWnHPikB%2FPqRtAFsiycNJ&X-Amz-Signature=902c896782e9f658a20aaca72fbd164d8279634064005b6e9ee4dfdf05b824f0&X-Amz-SignedHeaders=host&x-id=GetObject)
