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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCJFRPE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClWudYXGDO54ECIdKoq8RVyo6Wh%2Fyo6cbaXOOUB85bQQIhAI9pL4DvcnRMJqbbG%2F5Qb9SAVYi05g22hG2mYRZkq7oSKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLcnLnnE1XHBSlgJoq3AONs9jEh5L81Cmm82dCIFXolg36%2FuQ17verSwNmEt5QV4NgOvhRdN90yvlhLS9nU5Vv2n4Cjxg8k37kn6HPP36fwmRr2P6Hmojvra7mLeY%2FWg73mAFjOlqA5zFEDbWrqHtA%2BZ%2F3N0zkUkoD8zAdw74ZkMEgOQKZmqhZ1hFq1kNmsgny%2FwLRZpcU5DBZSAek16anQOKH4yh6uqKgEeKMoKlmFA4112a3YPUo2B7KnlzJ7UwfrZsq4g1ryXkutwZxpgjkYXQZy8%2BgpI9cjf2BAItT5DKHMgxsMSfb6M5vvjsmdyYQPDkEkzbanPQHLcf45ikEC67Jjbn2LEQ674%2BF0Afw5oRvNcCgW6yzn1uhnzta4gBIS1qm1bjuyh6oKJRWAW9%2FvXdBmFicMrITHSUMePn5%2BbVctyXl%2Bb48Y0v16umBaRIAU63AXYoO%2FROJA%2FD709vowa6Qnrt4aLim8D1LT83jQz9M0A3nsPquNUfdI%2BMyrJkkYmtFrbALitXty72sj56OA%2BUaBsT%2B5BC4z9yzV%2F6AczOXQME8yODNOPiboJAJE4gJ9YUlQUSQeGCOZOLlJ3O7frARrkVIwWKgAa%2FLGPhUU8ZgXaJniYI7FoY4zkHhz1yejp8%2Bmgw6pU%2Bo1TDFu7nBBjqkAQhD3E2z8G6r7TN0RqP%2BlVhRlgKNJH4vnlol2ODgyFdqES8VzLDQr4%2FVqHRRmoUIgE0FpgAI4EqT8Xn%2BRiiFrrStqXvp2p3OlP1oZjRAuzGRuBsLmMJ9SisF%2BuiQmB5kzyR8Sn4NazkEZCA4k9vi3VL%2BHV8nT%2B2msD9jKuFtvutmFF%2BCl%2B%2F0HZN5sxjgiwSnmeQeeZZheC3BMBlckBc7LmRKL8jP&X-Amz-Signature=06466e85b219a78e5e810970110d223956f36ad5b4e3678ccfe30e3bb6659e63&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCJFRPE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClWudYXGDO54ECIdKoq8RVyo6Wh%2Fyo6cbaXOOUB85bQQIhAI9pL4DvcnRMJqbbG%2F5Qb9SAVYi05g22hG2mYRZkq7oSKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLcnLnnE1XHBSlgJoq3AONs9jEh5L81Cmm82dCIFXolg36%2FuQ17verSwNmEt5QV4NgOvhRdN90yvlhLS9nU5Vv2n4Cjxg8k37kn6HPP36fwmRr2P6Hmojvra7mLeY%2FWg73mAFjOlqA5zFEDbWrqHtA%2BZ%2F3N0zkUkoD8zAdw74ZkMEgOQKZmqhZ1hFq1kNmsgny%2FwLRZpcU5DBZSAek16anQOKH4yh6uqKgEeKMoKlmFA4112a3YPUo2B7KnlzJ7UwfrZsq4g1ryXkutwZxpgjkYXQZy8%2BgpI9cjf2BAItT5DKHMgxsMSfb6M5vvjsmdyYQPDkEkzbanPQHLcf45ikEC67Jjbn2LEQ674%2BF0Afw5oRvNcCgW6yzn1uhnzta4gBIS1qm1bjuyh6oKJRWAW9%2FvXdBmFicMrITHSUMePn5%2BbVctyXl%2Bb48Y0v16umBaRIAU63AXYoO%2FROJA%2FD709vowa6Qnrt4aLim8D1LT83jQz9M0A3nsPquNUfdI%2BMyrJkkYmtFrbALitXty72sj56OA%2BUaBsT%2B5BC4z9yzV%2F6AczOXQME8yODNOPiboJAJE4gJ9YUlQUSQeGCOZOLlJ3O7frARrkVIwWKgAa%2FLGPhUU8ZgXaJniYI7FoY4zkHhz1yejp8%2Bmgw6pU%2Bo1TDFu7nBBjqkAQhD3E2z8G6r7TN0RqP%2BlVhRlgKNJH4vnlol2ODgyFdqES8VzLDQr4%2FVqHRRmoUIgE0FpgAI4EqT8Xn%2BRiiFrrStqXvp2p3OlP1oZjRAuzGRuBsLmMJ9SisF%2BuiQmB5kzyR8Sn4NazkEZCA4k9vi3VL%2BHV8nT%2B2msD9jKuFtvutmFF%2BCl%2B%2F0HZN5sxjgiwSnmeQeeZZheC3BMBlckBc7LmRKL8jP&X-Amz-Signature=e599bd50c97370efd58311c0780d2f491c2e5e5be279204e08104069312d6351&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCJFRPE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClWudYXGDO54ECIdKoq8RVyo6Wh%2Fyo6cbaXOOUB85bQQIhAI9pL4DvcnRMJqbbG%2F5Qb9SAVYi05g22hG2mYRZkq7oSKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLcnLnnE1XHBSlgJoq3AONs9jEh5L81Cmm82dCIFXolg36%2FuQ17verSwNmEt5QV4NgOvhRdN90yvlhLS9nU5Vv2n4Cjxg8k37kn6HPP36fwmRr2P6Hmojvra7mLeY%2FWg73mAFjOlqA5zFEDbWrqHtA%2BZ%2F3N0zkUkoD8zAdw74ZkMEgOQKZmqhZ1hFq1kNmsgny%2FwLRZpcU5DBZSAek16anQOKH4yh6uqKgEeKMoKlmFA4112a3YPUo2B7KnlzJ7UwfrZsq4g1ryXkutwZxpgjkYXQZy8%2BgpI9cjf2BAItT5DKHMgxsMSfb6M5vvjsmdyYQPDkEkzbanPQHLcf45ikEC67Jjbn2LEQ674%2BF0Afw5oRvNcCgW6yzn1uhnzta4gBIS1qm1bjuyh6oKJRWAW9%2FvXdBmFicMrITHSUMePn5%2BbVctyXl%2Bb48Y0v16umBaRIAU63AXYoO%2FROJA%2FD709vowa6Qnrt4aLim8D1LT83jQz9M0A3nsPquNUfdI%2BMyrJkkYmtFrbALitXty72sj56OA%2BUaBsT%2B5BC4z9yzV%2F6AczOXQME8yODNOPiboJAJE4gJ9YUlQUSQeGCOZOLlJ3O7frARrkVIwWKgAa%2FLGPhUU8ZgXaJniYI7FoY4zkHhz1yejp8%2Bmgw6pU%2Bo1TDFu7nBBjqkAQhD3E2z8G6r7TN0RqP%2BlVhRlgKNJH4vnlol2ODgyFdqES8VzLDQr4%2FVqHRRmoUIgE0FpgAI4EqT8Xn%2BRiiFrrStqXvp2p3OlP1oZjRAuzGRuBsLmMJ9SisF%2BuiQmB5kzyR8Sn4NazkEZCA4k9vi3VL%2BHV8nT%2B2msD9jKuFtvutmFF%2BCl%2B%2F0HZN5sxjgiwSnmeQeeZZheC3BMBlckBc7LmRKL8jP&X-Amz-Signature=7bb965f4696b0d3d43e70b41f09915ec09225c3a8657045fcebebf721124757e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCJFRPE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClWudYXGDO54ECIdKoq8RVyo6Wh%2Fyo6cbaXOOUB85bQQIhAI9pL4DvcnRMJqbbG%2F5Qb9SAVYi05g22hG2mYRZkq7oSKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLcnLnnE1XHBSlgJoq3AONs9jEh5L81Cmm82dCIFXolg36%2FuQ17verSwNmEt5QV4NgOvhRdN90yvlhLS9nU5Vv2n4Cjxg8k37kn6HPP36fwmRr2P6Hmojvra7mLeY%2FWg73mAFjOlqA5zFEDbWrqHtA%2BZ%2F3N0zkUkoD8zAdw74ZkMEgOQKZmqhZ1hFq1kNmsgny%2FwLRZpcU5DBZSAek16anQOKH4yh6uqKgEeKMoKlmFA4112a3YPUo2B7KnlzJ7UwfrZsq4g1ryXkutwZxpgjkYXQZy8%2BgpI9cjf2BAItT5DKHMgxsMSfb6M5vvjsmdyYQPDkEkzbanPQHLcf45ikEC67Jjbn2LEQ674%2BF0Afw5oRvNcCgW6yzn1uhnzta4gBIS1qm1bjuyh6oKJRWAW9%2FvXdBmFicMrITHSUMePn5%2BbVctyXl%2Bb48Y0v16umBaRIAU63AXYoO%2FROJA%2FD709vowa6Qnrt4aLim8D1LT83jQz9M0A3nsPquNUfdI%2BMyrJkkYmtFrbALitXty72sj56OA%2BUaBsT%2B5BC4z9yzV%2F6AczOXQME8yODNOPiboJAJE4gJ9YUlQUSQeGCOZOLlJ3O7frARrkVIwWKgAa%2FLGPhUU8ZgXaJniYI7FoY4zkHhz1yejp8%2Bmgw6pU%2Bo1TDFu7nBBjqkAQhD3E2z8G6r7TN0RqP%2BlVhRlgKNJH4vnlol2ODgyFdqES8VzLDQr4%2FVqHRRmoUIgE0FpgAI4EqT8Xn%2BRiiFrrStqXvp2p3OlP1oZjRAuzGRuBsLmMJ9SisF%2BuiQmB5kzyR8Sn4NazkEZCA4k9vi3VL%2BHV8nT%2B2msD9jKuFtvutmFF%2BCl%2B%2F0HZN5sxjgiwSnmeQeeZZheC3BMBlckBc7LmRKL8jP&X-Amz-Signature=f2ad6a63251f61054cc8586d7d383c1dfe809f923ecaa42f86f3731c354d693e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCJFRPE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClWudYXGDO54ECIdKoq8RVyo6Wh%2Fyo6cbaXOOUB85bQQIhAI9pL4DvcnRMJqbbG%2F5Qb9SAVYi05g22hG2mYRZkq7oSKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLcnLnnE1XHBSlgJoq3AONs9jEh5L81Cmm82dCIFXolg36%2FuQ17verSwNmEt5QV4NgOvhRdN90yvlhLS9nU5Vv2n4Cjxg8k37kn6HPP36fwmRr2P6Hmojvra7mLeY%2FWg73mAFjOlqA5zFEDbWrqHtA%2BZ%2F3N0zkUkoD8zAdw74ZkMEgOQKZmqhZ1hFq1kNmsgny%2FwLRZpcU5DBZSAek16anQOKH4yh6uqKgEeKMoKlmFA4112a3YPUo2B7KnlzJ7UwfrZsq4g1ryXkutwZxpgjkYXQZy8%2BgpI9cjf2BAItT5DKHMgxsMSfb6M5vvjsmdyYQPDkEkzbanPQHLcf45ikEC67Jjbn2LEQ674%2BF0Afw5oRvNcCgW6yzn1uhnzta4gBIS1qm1bjuyh6oKJRWAW9%2FvXdBmFicMrITHSUMePn5%2BbVctyXl%2Bb48Y0v16umBaRIAU63AXYoO%2FROJA%2FD709vowa6Qnrt4aLim8D1LT83jQz9M0A3nsPquNUfdI%2BMyrJkkYmtFrbALitXty72sj56OA%2BUaBsT%2B5BC4z9yzV%2F6AczOXQME8yODNOPiboJAJE4gJ9YUlQUSQeGCOZOLlJ3O7frARrkVIwWKgAa%2FLGPhUU8ZgXaJniYI7FoY4zkHhz1yejp8%2Bmgw6pU%2Bo1TDFu7nBBjqkAQhD3E2z8G6r7TN0RqP%2BlVhRlgKNJH4vnlol2ODgyFdqES8VzLDQr4%2FVqHRRmoUIgE0FpgAI4EqT8Xn%2BRiiFrrStqXvp2p3OlP1oZjRAuzGRuBsLmMJ9SisF%2BuiQmB5kzyR8Sn4NazkEZCA4k9vi3VL%2BHV8nT%2B2msD9jKuFtvutmFF%2BCl%2B%2F0HZN5sxjgiwSnmeQeeZZheC3BMBlckBc7LmRKL8jP&X-Amz-Signature=9f42b6d48c054a2398b29518b23c255894966e8168be075dde81a1cfbde1ac05&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCJFRPE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClWudYXGDO54ECIdKoq8RVyo6Wh%2Fyo6cbaXOOUB85bQQIhAI9pL4DvcnRMJqbbG%2F5Qb9SAVYi05g22hG2mYRZkq7oSKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLcnLnnE1XHBSlgJoq3AONs9jEh5L81Cmm82dCIFXolg36%2FuQ17verSwNmEt5QV4NgOvhRdN90yvlhLS9nU5Vv2n4Cjxg8k37kn6HPP36fwmRr2P6Hmojvra7mLeY%2FWg73mAFjOlqA5zFEDbWrqHtA%2BZ%2F3N0zkUkoD8zAdw74ZkMEgOQKZmqhZ1hFq1kNmsgny%2FwLRZpcU5DBZSAek16anQOKH4yh6uqKgEeKMoKlmFA4112a3YPUo2B7KnlzJ7UwfrZsq4g1ryXkutwZxpgjkYXQZy8%2BgpI9cjf2BAItT5DKHMgxsMSfb6M5vvjsmdyYQPDkEkzbanPQHLcf45ikEC67Jjbn2LEQ674%2BF0Afw5oRvNcCgW6yzn1uhnzta4gBIS1qm1bjuyh6oKJRWAW9%2FvXdBmFicMrITHSUMePn5%2BbVctyXl%2Bb48Y0v16umBaRIAU63AXYoO%2FROJA%2FD709vowa6Qnrt4aLim8D1LT83jQz9M0A3nsPquNUfdI%2BMyrJkkYmtFrbALitXty72sj56OA%2BUaBsT%2B5BC4z9yzV%2F6AczOXQME8yODNOPiboJAJE4gJ9YUlQUSQeGCOZOLlJ3O7frARrkVIwWKgAa%2FLGPhUU8ZgXaJniYI7FoY4zkHhz1yejp8%2Bmgw6pU%2Bo1TDFu7nBBjqkAQhD3E2z8G6r7TN0RqP%2BlVhRlgKNJH4vnlol2ODgyFdqES8VzLDQr4%2FVqHRRmoUIgE0FpgAI4EqT8Xn%2BRiiFrrStqXvp2p3OlP1oZjRAuzGRuBsLmMJ9SisF%2BuiQmB5kzyR8Sn4NazkEZCA4k9vi3VL%2BHV8nT%2B2msD9jKuFtvutmFF%2BCl%2B%2F0HZN5sxjgiwSnmeQeeZZheC3BMBlckBc7LmRKL8jP&X-Amz-Signature=5e9e6a291d583086939636561b837dd6e3dcece6f31e3ab3818aba282b56bc9c&X-Amz-SignedHeaders=host&x-id=GetObject)
