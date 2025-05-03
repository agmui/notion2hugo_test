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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX42XHRS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDPqSwCZqgG1Gex6jALfKjOSulAYklVo9%2BJQWijs7txhAIhAPyfyR%2Bd1uwwqnMkaBm6Nl%2FRZrRsfbTEO4gxqOJ8c350KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYvJ4WNAAEf3CAikoq3AMuM5InL%2BS38IVOoe%2BdmcA0TJNLeoajjvblCcMADbc9ZnR%2FUQPBAu2LG4L64lS8vlmur8waRqatn96AKTfw26yJgmMNCMSFU7lRIL9osQd4qSupHlLBzYFiqz9Sitqjo%2BbnNhqrY8CoOorYPRgWqy%2Fq%2BKLakVFHtYu7CJ6cHejE%2FmBnrKFfV7WVcOjTDsd3Ca%2F3l3cz7GheZ%2Bu76B8HLb%2BVaL3OvqnnOenIQ1VDqGkSCMhYu6oPwG35kfixja2bK1Tg39zDqeGLPU7xvH9TAplGKNl1aWXdpIde529pJEkQPfnx8SpAK6OhRH%2BzlpMd2t3pfLc8624Iswh8wRgykR9CTVNpod9ITiPzGZ7JWJh%2B1mN1RLJj6JyB8cAigOtKi69DTVPyblc2ka4qrZs%2BnOdc6%2BOJ%2B14kWqka5eT4EVbCLIoLrdCYzABd1kLSotq3iSY4VQPKKHMT1%2FR5iBDbI83EVa%2B408UsuJa82kOUVn82azOGzj%2B%2Bt4WR0fJnm69G0szGzQ8JHEnsfZJvq50FqRgmmiYWOAZU1u6dWAes9fiKzcryAO%2F6QRAQMI26qLrXgBJmowWLv%2FcLdaVibUgz9XMqJOGd8WKeTJbkVEAXFe3tjuj4wHgYzABuDJi6LDD34tfABjqkAWJMP3%2FwZDBGw8rGCuvO6xdlfY2XgA3sBlH3mzXVwQFn7ED%2BEenjNoNPcFU0QB1hpOT14ggNOgGeNPjbn9OV6pWsfXRUpWZZQIxS6r%2FKpRcQjrZDZ7AdB3l7RfAJGSZY%2BkPWDILCuSa9CZA9CnMfiuKm8SmlxTINsYhTtWJUHlzaWFS%2BP3Ck2F06b9DQyAFJxdiZBD6HNK%2BG%2BWq6Tw76pnyek6P9&X-Amz-Signature=6052762b011417a2d20b7a032d8b295e03b4749a54963b53293a43e8c405dd25&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX42XHRS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDPqSwCZqgG1Gex6jALfKjOSulAYklVo9%2BJQWijs7txhAIhAPyfyR%2Bd1uwwqnMkaBm6Nl%2FRZrRsfbTEO4gxqOJ8c350KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYvJ4WNAAEf3CAikoq3AMuM5InL%2BS38IVOoe%2BdmcA0TJNLeoajjvblCcMADbc9ZnR%2FUQPBAu2LG4L64lS8vlmur8waRqatn96AKTfw26yJgmMNCMSFU7lRIL9osQd4qSupHlLBzYFiqz9Sitqjo%2BbnNhqrY8CoOorYPRgWqy%2Fq%2BKLakVFHtYu7CJ6cHejE%2FmBnrKFfV7WVcOjTDsd3Ca%2F3l3cz7GheZ%2Bu76B8HLb%2BVaL3OvqnnOenIQ1VDqGkSCMhYu6oPwG35kfixja2bK1Tg39zDqeGLPU7xvH9TAplGKNl1aWXdpIde529pJEkQPfnx8SpAK6OhRH%2BzlpMd2t3pfLc8624Iswh8wRgykR9CTVNpod9ITiPzGZ7JWJh%2B1mN1RLJj6JyB8cAigOtKi69DTVPyblc2ka4qrZs%2BnOdc6%2BOJ%2B14kWqka5eT4EVbCLIoLrdCYzABd1kLSotq3iSY4VQPKKHMT1%2FR5iBDbI83EVa%2B408UsuJa82kOUVn82azOGzj%2B%2Bt4WR0fJnm69G0szGzQ8JHEnsfZJvq50FqRgmmiYWOAZU1u6dWAes9fiKzcryAO%2F6QRAQMI26qLrXgBJmowWLv%2FcLdaVibUgz9XMqJOGd8WKeTJbkVEAXFe3tjuj4wHgYzABuDJi6LDD34tfABjqkAWJMP3%2FwZDBGw8rGCuvO6xdlfY2XgA3sBlH3mzXVwQFn7ED%2BEenjNoNPcFU0QB1hpOT14ggNOgGeNPjbn9OV6pWsfXRUpWZZQIxS6r%2FKpRcQjrZDZ7AdB3l7RfAJGSZY%2BkPWDILCuSa9CZA9CnMfiuKm8SmlxTINsYhTtWJUHlzaWFS%2BP3Ck2F06b9DQyAFJxdiZBD6HNK%2BG%2BWq6Tw76pnyek6P9&X-Amz-Signature=d257f19249868062fa820b3ab151430542ac2357357e974d0946f184d97e90a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX42XHRS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDPqSwCZqgG1Gex6jALfKjOSulAYklVo9%2BJQWijs7txhAIhAPyfyR%2Bd1uwwqnMkaBm6Nl%2FRZrRsfbTEO4gxqOJ8c350KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYvJ4WNAAEf3CAikoq3AMuM5InL%2BS38IVOoe%2BdmcA0TJNLeoajjvblCcMADbc9ZnR%2FUQPBAu2LG4L64lS8vlmur8waRqatn96AKTfw26yJgmMNCMSFU7lRIL9osQd4qSupHlLBzYFiqz9Sitqjo%2BbnNhqrY8CoOorYPRgWqy%2Fq%2BKLakVFHtYu7CJ6cHejE%2FmBnrKFfV7WVcOjTDsd3Ca%2F3l3cz7GheZ%2Bu76B8HLb%2BVaL3OvqnnOenIQ1VDqGkSCMhYu6oPwG35kfixja2bK1Tg39zDqeGLPU7xvH9TAplGKNl1aWXdpIde529pJEkQPfnx8SpAK6OhRH%2BzlpMd2t3pfLc8624Iswh8wRgykR9CTVNpod9ITiPzGZ7JWJh%2B1mN1RLJj6JyB8cAigOtKi69DTVPyblc2ka4qrZs%2BnOdc6%2BOJ%2B14kWqka5eT4EVbCLIoLrdCYzABd1kLSotq3iSY4VQPKKHMT1%2FR5iBDbI83EVa%2B408UsuJa82kOUVn82azOGzj%2B%2Bt4WR0fJnm69G0szGzQ8JHEnsfZJvq50FqRgmmiYWOAZU1u6dWAes9fiKzcryAO%2F6QRAQMI26qLrXgBJmowWLv%2FcLdaVibUgz9XMqJOGd8WKeTJbkVEAXFe3tjuj4wHgYzABuDJi6LDD34tfABjqkAWJMP3%2FwZDBGw8rGCuvO6xdlfY2XgA3sBlH3mzXVwQFn7ED%2BEenjNoNPcFU0QB1hpOT14ggNOgGeNPjbn9OV6pWsfXRUpWZZQIxS6r%2FKpRcQjrZDZ7AdB3l7RfAJGSZY%2BkPWDILCuSa9CZA9CnMfiuKm8SmlxTINsYhTtWJUHlzaWFS%2BP3Ck2F06b9DQyAFJxdiZBD6HNK%2BG%2BWq6Tw76pnyek6P9&X-Amz-Signature=cfc8a96e133d906fcc4866f3fd9adc6298bae464c12dac6ee71a299c6be8bef5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX42XHRS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDPqSwCZqgG1Gex6jALfKjOSulAYklVo9%2BJQWijs7txhAIhAPyfyR%2Bd1uwwqnMkaBm6Nl%2FRZrRsfbTEO4gxqOJ8c350KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYvJ4WNAAEf3CAikoq3AMuM5InL%2BS38IVOoe%2BdmcA0TJNLeoajjvblCcMADbc9ZnR%2FUQPBAu2LG4L64lS8vlmur8waRqatn96AKTfw26yJgmMNCMSFU7lRIL9osQd4qSupHlLBzYFiqz9Sitqjo%2BbnNhqrY8CoOorYPRgWqy%2Fq%2BKLakVFHtYu7CJ6cHejE%2FmBnrKFfV7WVcOjTDsd3Ca%2F3l3cz7GheZ%2Bu76B8HLb%2BVaL3OvqnnOenIQ1VDqGkSCMhYu6oPwG35kfixja2bK1Tg39zDqeGLPU7xvH9TAplGKNl1aWXdpIde529pJEkQPfnx8SpAK6OhRH%2BzlpMd2t3pfLc8624Iswh8wRgykR9CTVNpod9ITiPzGZ7JWJh%2B1mN1RLJj6JyB8cAigOtKi69DTVPyblc2ka4qrZs%2BnOdc6%2BOJ%2B14kWqka5eT4EVbCLIoLrdCYzABd1kLSotq3iSY4VQPKKHMT1%2FR5iBDbI83EVa%2B408UsuJa82kOUVn82azOGzj%2B%2Bt4WR0fJnm69G0szGzQ8JHEnsfZJvq50FqRgmmiYWOAZU1u6dWAes9fiKzcryAO%2F6QRAQMI26qLrXgBJmowWLv%2FcLdaVibUgz9XMqJOGd8WKeTJbkVEAXFe3tjuj4wHgYzABuDJi6LDD34tfABjqkAWJMP3%2FwZDBGw8rGCuvO6xdlfY2XgA3sBlH3mzXVwQFn7ED%2BEenjNoNPcFU0QB1hpOT14ggNOgGeNPjbn9OV6pWsfXRUpWZZQIxS6r%2FKpRcQjrZDZ7AdB3l7RfAJGSZY%2BkPWDILCuSa9CZA9CnMfiuKm8SmlxTINsYhTtWJUHlzaWFS%2BP3Ck2F06b9DQyAFJxdiZBD6HNK%2BG%2BWq6Tw76pnyek6P9&X-Amz-Signature=70bf3ff09bd5bb91cbd23ed4a8c505871d0684ad7695854d46ced08d23cab2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX42XHRS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDPqSwCZqgG1Gex6jALfKjOSulAYklVo9%2BJQWijs7txhAIhAPyfyR%2Bd1uwwqnMkaBm6Nl%2FRZrRsfbTEO4gxqOJ8c350KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYvJ4WNAAEf3CAikoq3AMuM5InL%2BS38IVOoe%2BdmcA0TJNLeoajjvblCcMADbc9ZnR%2FUQPBAu2LG4L64lS8vlmur8waRqatn96AKTfw26yJgmMNCMSFU7lRIL9osQd4qSupHlLBzYFiqz9Sitqjo%2BbnNhqrY8CoOorYPRgWqy%2Fq%2BKLakVFHtYu7CJ6cHejE%2FmBnrKFfV7WVcOjTDsd3Ca%2F3l3cz7GheZ%2Bu76B8HLb%2BVaL3OvqnnOenIQ1VDqGkSCMhYu6oPwG35kfixja2bK1Tg39zDqeGLPU7xvH9TAplGKNl1aWXdpIde529pJEkQPfnx8SpAK6OhRH%2BzlpMd2t3pfLc8624Iswh8wRgykR9CTVNpod9ITiPzGZ7JWJh%2B1mN1RLJj6JyB8cAigOtKi69DTVPyblc2ka4qrZs%2BnOdc6%2BOJ%2B14kWqka5eT4EVbCLIoLrdCYzABd1kLSotq3iSY4VQPKKHMT1%2FR5iBDbI83EVa%2B408UsuJa82kOUVn82azOGzj%2B%2Bt4WR0fJnm69G0szGzQ8JHEnsfZJvq50FqRgmmiYWOAZU1u6dWAes9fiKzcryAO%2F6QRAQMI26qLrXgBJmowWLv%2FcLdaVibUgz9XMqJOGd8WKeTJbkVEAXFe3tjuj4wHgYzABuDJi6LDD34tfABjqkAWJMP3%2FwZDBGw8rGCuvO6xdlfY2XgA3sBlH3mzXVwQFn7ED%2BEenjNoNPcFU0QB1hpOT14ggNOgGeNPjbn9OV6pWsfXRUpWZZQIxS6r%2FKpRcQjrZDZ7AdB3l7RfAJGSZY%2BkPWDILCuSa9CZA9CnMfiuKm8SmlxTINsYhTtWJUHlzaWFS%2BP3Ck2F06b9DQyAFJxdiZBD6HNK%2BG%2BWq6Tw76pnyek6P9&X-Amz-Signature=700f2c474ffd4256e3f6162791dcd591a83f90134d271ddf06febe9af3fe953d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX42XHRS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDPqSwCZqgG1Gex6jALfKjOSulAYklVo9%2BJQWijs7txhAIhAPyfyR%2Bd1uwwqnMkaBm6Nl%2FRZrRsfbTEO4gxqOJ8c350KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYvJ4WNAAEf3CAikoq3AMuM5InL%2BS38IVOoe%2BdmcA0TJNLeoajjvblCcMADbc9ZnR%2FUQPBAu2LG4L64lS8vlmur8waRqatn96AKTfw26yJgmMNCMSFU7lRIL9osQd4qSupHlLBzYFiqz9Sitqjo%2BbnNhqrY8CoOorYPRgWqy%2Fq%2BKLakVFHtYu7CJ6cHejE%2FmBnrKFfV7WVcOjTDsd3Ca%2F3l3cz7GheZ%2Bu76B8HLb%2BVaL3OvqnnOenIQ1VDqGkSCMhYu6oPwG35kfixja2bK1Tg39zDqeGLPU7xvH9TAplGKNl1aWXdpIde529pJEkQPfnx8SpAK6OhRH%2BzlpMd2t3pfLc8624Iswh8wRgykR9CTVNpod9ITiPzGZ7JWJh%2B1mN1RLJj6JyB8cAigOtKi69DTVPyblc2ka4qrZs%2BnOdc6%2BOJ%2B14kWqka5eT4EVbCLIoLrdCYzABd1kLSotq3iSY4VQPKKHMT1%2FR5iBDbI83EVa%2B408UsuJa82kOUVn82azOGzj%2B%2Bt4WR0fJnm69G0szGzQ8JHEnsfZJvq50FqRgmmiYWOAZU1u6dWAes9fiKzcryAO%2F6QRAQMI26qLrXgBJmowWLv%2FcLdaVibUgz9XMqJOGd8WKeTJbkVEAXFe3tjuj4wHgYzABuDJi6LDD34tfABjqkAWJMP3%2FwZDBGw8rGCuvO6xdlfY2XgA3sBlH3mzXVwQFn7ED%2BEenjNoNPcFU0QB1hpOT14ggNOgGeNPjbn9OV6pWsfXRUpWZZQIxS6r%2FKpRcQjrZDZ7AdB3l7RfAJGSZY%2BkPWDILCuSa9CZA9CnMfiuKm8SmlxTINsYhTtWJUHlzaWFS%2BP3Ck2F06b9DQyAFJxdiZBD6HNK%2BG%2BWq6Tw76pnyek6P9&X-Amz-Signature=0b17df619b0ab19250b771e47989b0109fe5c739e6445d931dd83e1e170dbc9a&X-Amz-SignedHeaders=host&x-id=GetObject)
