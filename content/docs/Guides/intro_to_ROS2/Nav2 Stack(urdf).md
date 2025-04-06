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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTV2P62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyReAZWs6qWlqCork2YTkWe0a0QjK5%2F%2BLKMQHyUIkfBAiEAm3rk7klrw8dJMam1FXjBp4WR5TA%2FseKFDTrAt%2Fr56m8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIh41JtTvxAhxJT%2FmSrcA7eLLMBL%2FJ8hLG0a6IKrtZ9HWXjFziYWeWc50FftqQEBOMIbJMmjB%2BMFHF6hFfZqK3FOdJapiNRuZbGiua4vDwhXpvxeONYadko2Nw1y%2BoUgKe9nwXNg9uo3MvfspUBBPuLkWLbWi7NseagnyjW6S4WFohiRCX3jdihOY2zbQWCI%2F%2F3Y8fwLMJ9kkhgJ2CaI%2FsCUqpSFaNrn%2BdxyHmi%2FwXZaSinJg6DUz7Eq%2FN80rXwoHYdjGnJOIFRneq7EH%2BVW1XnlaWX60Atx3oyouIZNQ89roOCWprBmLP7pSo0GXHPagnD8PdTwjY%2FYzqResETBeOlpEuFCD3U6hiWshaENgAXYyBTZFCMxLgc%2BpC9zSHF96MXijxNbiVbBY57cDr2ocWIxV5SAnp3NU1qqopw%2BO2Bmq01SfTiO3n%2F8LggEOaAznxMhQRuG1X3b8cwXdK0WY9NaFKrAhRkwDrWgpfUyc6mBbKXPiSjMIWB0P2THEFsMjxwJD2vow8DJslO4923eW%2FTitx%2FfChkww1iUK6ECBfEJ%2FZYjFYnchPsvrV9NFUEhZnFW5tmmtAbgYhPRdJ9cSbwT2AwB2vwp76qksztmraf%2FS%2FVkfsDgVXtfT74FHPHCQ%2FNhw7Fs%2FFCjnuuWMN%2Bcyr8GOqUB3sFdbWQD8MYXnOXf5vFdAn2LO1%2B2zwo3vI1uxktq6y4rGnpyk6HpSlf6YUjMA1cQzcPeJX3oETF8AyMbEfzNpnyXl1BYa%2FnNMqZflK0RDYZoy1wk%2BF5%2FeRecAPA1EpqhEYjBp3NkYfDePln7skmjKI7tEu%2BtzV9YogYPRmJdq7t18XjfNckRDYmZ4fcIBiDoq3kJotMpyS5hTrFl%2FOzKPz3HUzX3&X-Amz-Signature=1756629747735fd73b2142bda74d18a1fbe356835137dc9b0c99b71c6506919c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTV2P62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyReAZWs6qWlqCork2YTkWe0a0QjK5%2F%2BLKMQHyUIkfBAiEAm3rk7klrw8dJMam1FXjBp4WR5TA%2FseKFDTrAt%2Fr56m8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIh41JtTvxAhxJT%2FmSrcA7eLLMBL%2FJ8hLG0a6IKrtZ9HWXjFziYWeWc50FftqQEBOMIbJMmjB%2BMFHF6hFfZqK3FOdJapiNRuZbGiua4vDwhXpvxeONYadko2Nw1y%2BoUgKe9nwXNg9uo3MvfspUBBPuLkWLbWi7NseagnyjW6S4WFohiRCX3jdihOY2zbQWCI%2F%2F3Y8fwLMJ9kkhgJ2CaI%2FsCUqpSFaNrn%2BdxyHmi%2FwXZaSinJg6DUz7Eq%2FN80rXwoHYdjGnJOIFRneq7EH%2BVW1XnlaWX60Atx3oyouIZNQ89roOCWprBmLP7pSo0GXHPagnD8PdTwjY%2FYzqResETBeOlpEuFCD3U6hiWshaENgAXYyBTZFCMxLgc%2BpC9zSHF96MXijxNbiVbBY57cDr2ocWIxV5SAnp3NU1qqopw%2BO2Bmq01SfTiO3n%2F8LggEOaAznxMhQRuG1X3b8cwXdK0WY9NaFKrAhRkwDrWgpfUyc6mBbKXPiSjMIWB0P2THEFsMjxwJD2vow8DJslO4923eW%2FTitx%2FfChkww1iUK6ECBfEJ%2FZYjFYnchPsvrV9NFUEhZnFW5tmmtAbgYhPRdJ9cSbwT2AwB2vwp76qksztmraf%2FS%2FVkfsDgVXtfT74FHPHCQ%2FNhw7Fs%2FFCjnuuWMN%2Bcyr8GOqUB3sFdbWQD8MYXnOXf5vFdAn2LO1%2B2zwo3vI1uxktq6y4rGnpyk6HpSlf6YUjMA1cQzcPeJX3oETF8AyMbEfzNpnyXl1BYa%2FnNMqZflK0RDYZoy1wk%2BF5%2FeRecAPA1EpqhEYjBp3NkYfDePln7skmjKI7tEu%2BtzV9YogYPRmJdq7t18XjfNckRDYmZ4fcIBiDoq3kJotMpyS5hTrFl%2FOzKPz3HUzX3&X-Amz-Signature=7382a6cd68afbba2144a072ac33c6ce7108136ee0e23319779b3830c5e9d25e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTV2P62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyReAZWs6qWlqCork2YTkWe0a0QjK5%2F%2BLKMQHyUIkfBAiEAm3rk7klrw8dJMam1FXjBp4WR5TA%2FseKFDTrAt%2Fr56m8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIh41JtTvxAhxJT%2FmSrcA7eLLMBL%2FJ8hLG0a6IKrtZ9HWXjFziYWeWc50FftqQEBOMIbJMmjB%2BMFHF6hFfZqK3FOdJapiNRuZbGiua4vDwhXpvxeONYadko2Nw1y%2BoUgKe9nwXNg9uo3MvfspUBBPuLkWLbWi7NseagnyjW6S4WFohiRCX3jdihOY2zbQWCI%2F%2F3Y8fwLMJ9kkhgJ2CaI%2FsCUqpSFaNrn%2BdxyHmi%2FwXZaSinJg6DUz7Eq%2FN80rXwoHYdjGnJOIFRneq7EH%2BVW1XnlaWX60Atx3oyouIZNQ89roOCWprBmLP7pSo0GXHPagnD8PdTwjY%2FYzqResETBeOlpEuFCD3U6hiWshaENgAXYyBTZFCMxLgc%2BpC9zSHF96MXijxNbiVbBY57cDr2ocWIxV5SAnp3NU1qqopw%2BO2Bmq01SfTiO3n%2F8LggEOaAznxMhQRuG1X3b8cwXdK0WY9NaFKrAhRkwDrWgpfUyc6mBbKXPiSjMIWB0P2THEFsMjxwJD2vow8DJslO4923eW%2FTitx%2FfChkww1iUK6ECBfEJ%2FZYjFYnchPsvrV9NFUEhZnFW5tmmtAbgYhPRdJ9cSbwT2AwB2vwp76qksztmraf%2FS%2FVkfsDgVXtfT74FHPHCQ%2FNhw7Fs%2FFCjnuuWMN%2Bcyr8GOqUB3sFdbWQD8MYXnOXf5vFdAn2LO1%2B2zwo3vI1uxktq6y4rGnpyk6HpSlf6YUjMA1cQzcPeJX3oETF8AyMbEfzNpnyXl1BYa%2FnNMqZflK0RDYZoy1wk%2BF5%2FeRecAPA1EpqhEYjBp3NkYfDePln7skmjKI7tEu%2BtzV9YogYPRmJdq7t18XjfNckRDYmZ4fcIBiDoq3kJotMpyS5hTrFl%2FOzKPz3HUzX3&X-Amz-Signature=0a4e27801f1a50c2b8dfbb351774a22624d6cfd55bccee3f9921a047ddcb38c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTV2P62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyReAZWs6qWlqCork2YTkWe0a0QjK5%2F%2BLKMQHyUIkfBAiEAm3rk7klrw8dJMam1FXjBp4WR5TA%2FseKFDTrAt%2Fr56m8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIh41JtTvxAhxJT%2FmSrcA7eLLMBL%2FJ8hLG0a6IKrtZ9HWXjFziYWeWc50FftqQEBOMIbJMmjB%2BMFHF6hFfZqK3FOdJapiNRuZbGiua4vDwhXpvxeONYadko2Nw1y%2BoUgKe9nwXNg9uo3MvfspUBBPuLkWLbWi7NseagnyjW6S4WFohiRCX3jdihOY2zbQWCI%2F%2F3Y8fwLMJ9kkhgJ2CaI%2FsCUqpSFaNrn%2BdxyHmi%2FwXZaSinJg6DUz7Eq%2FN80rXwoHYdjGnJOIFRneq7EH%2BVW1XnlaWX60Atx3oyouIZNQ89roOCWprBmLP7pSo0GXHPagnD8PdTwjY%2FYzqResETBeOlpEuFCD3U6hiWshaENgAXYyBTZFCMxLgc%2BpC9zSHF96MXijxNbiVbBY57cDr2ocWIxV5SAnp3NU1qqopw%2BO2Bmq01SfTiO3n%2F8LggEOaAznxMhQRuG1X3b8cwXdK0WY9NaFKrAhRkwDrWgpfUyc6mBbKXPiSjMIWB0P2THEFsMjxwJD2vow8DJslO4923eW%2FTitx%2FfChkww1iUK6ECBfEJ%2FZYjFYnchPsvrV9NFUEhZnFW5tmmtAbgYhPRdJ9cSbwT2AwB2vwp76qksztmraf%2FS%2FVkfsDgVXtfT74FHPHCQ%2FNhw7Fs%2FFCjnuuWMN%2Bcyr8GOqUB3sFdbWQD8MYXnOXf5vFdAn2LO1%2B2zwo3vI1uxktq6y4rGnpyk6HpSlf6YUjMA1cQzcPeJX3oETF8AyMbEfzNpnyXl1BYa%2FnNMqZflK0RDYZoy1wk%2BF5%2FeRecAPA1EpqhEYjBp3NkYfDePln7skmjKI7tEu%2BtzV9YogYPRmJdq7t18XjfNckRDYmZ4fcIBiDoq3kJotMpyS5hTrFl%2FOzKPz3HUzX3&X-Amz-Signature=f1d08b535b6dc3647a240649823b0097b39b37c6df064a0cda36de5aa7496f92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTV2P62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyReAZWs6qWlqCork2YTkWe0a0QjK5%2F%2BLKMQHyUIkfBAiEAm3rk7klrw8dJMam1FXjBp4WR5TA%2FseKFDTrAt%2Fr56m8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIh41JtTvxAhxJT%2FmSrcA7eLLMBL%2FJ8hLG0a6IKrtZ9HWXjFziYWeWc50FftqQEBOMIbJMmjB%2BMFHF6hFfZqK3FOdJapiNRuZbGiua4vDwhXpvxeONYadko2Nw1y%2BoUgKe9nwXNg9uo3MvfspUBBPuLkWLbWi7NseagnyjW6S4WFohiRCX3jdihOY2zbQWCI%2F%2F3Y8fwLMJ9kkhgJ2CaI%2FsCUqpSFaNrn%2BdxyHmi%2FwXZaSinJg6DUz7Eq%2FN80rXwoHYdjGnJOIFRneq7EH%2BVW1XnlaWX60Atx3oyouIZNQ89roOCWprBmLP7pSo0GXHPagnD8PdTwjY%2FYzqResETBeOlpEuFCD3U6hiWshaENgAXYyBTZFCMxLgc%2BpC9zSHF96MXijxNbiVbBY57cDr2ocWIxV5SAnp3NU1qqopw%2BO2Bmq01SfTiO3n%2F8LggEOaAznxMhQRuG1X3b8cwXdK0WY9NaFKrAhRkwDrWgpfUyc6mBbKXPiSjMIWB0P2THEFsMjxwJD2vow8DJslO4923eW%2FTitx%2FfChkww1iUK6ECBfEJ%2FZYjFYnchPsvrV9NFUEhZnFW5tmmtAbgYhPRdJ9cSbwT2AwB2vwp76qksztmraf%2FS%2FVkfsDgVXtfT74FHPHCQ%2FNhw7Fs%2FFCjnuuWMN%2Bcyr8GOqUB3sFdbWQD8MYXnOXf5vFdAn2LO1%2B2zwo3vI1uxktq6y4rGnpyk6HpSlf6YUjMA1cQzcPeJX3oETF8AyMbEfzNpnyXl1BYa%2FnNMqZflK0RDYZoy1wk%2BF5%2FeRecAPA1EpqhEYjBp3NkYfDePln7skmjKI7tEu%2BtzV9YogYPRmJdq7t18XjfNckRDYmZ4fcIBiDoq3kJotMpyS5hTrFl%2FOzKPz3HUzX3&X-Amz-Signature=afe0e133796ad97261376455ece45c613908f0655cf26613aeec7338397ac22e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTV2P62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyReAZWs6qWlqCork2YTkWe0a0QjK5%2F%2BLKMQHyUIkfBAiEAm3rk7klrw8dJMam1FXjBp4WR5TA%2FseKFDTrAt%2Fr56m8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIh41JtTvxAhxJT%2FmSrcA7eLLMBL%2FJ8hLG0a6IKrtZ9HWXjFziYWeWc50FftqQEBOMIbJMmjB%2BMFHF6hFfZqK3FOdJapiNRuZbGiua4vDwhXpvxeONYadko2Nw1y%2BoUgKe9nwXNg9uo3MvfspUBBPuLkWLbWi7NseagnyjW6S4WFohiRCX3jdihOY2zbQWCI%2F%2F3Y8fwLMJ9kkhgJ2CaI%2FsCUqpSFaNrn%2BdxyHmi%2FwXZaSinJg6DUz7Eq%2FN80rXwoHYdjGnJOIFRneq7EH%2BVW1XnlaWX60Atx3oyouIZNQ89roOCWprBmLP7pSo0GXHPagnD8PdTwjY%2FYzqResETBeOlpEuFCD3U6hiWshaENgAXYyBTZFCMxLgc%2BpC9zSHF96MXijxNbiVbBY57cDr2ocWIxV5SAnp3NU1qqopw%2BO2Bmq01SfTiO3n%2F8LggEOaAznxMhQRuG1X3b8cwXdK0WY9NaFKrAhRkwDrWgpfUyc6mBbKXPiSjMIWB0P2THEFsMjxwJD2vow8DJslO4923eW%2FTitx%2FfChkww1iUK6ECBfEJ%2FZYjFYnchPsvrV9NFUEhZnFW5tmmtAbgYhPRdJ9cSbwT2AwB2vwp76qksztmraf%2FS%2FVkfsDgVXtfT74FHPHCQ%2FNhw7Fs%2FFCjnuuWMN%2Bcyr8GOqUB3sFdbWQD8MYXnOXf5vFdAn2LO1%2B2zwo3vI1uxktq6y4rGnpyk6HpSlf6YUjMA1cQzcPeJX3oETF8AyMbEfzNpnyXl1BYa%2FnNMqZflK0RDYZoy1wk%2BF5%2FeRecAPA1EpqhEYjBp3NkYfDePln7skmjKI7tEu%2BtzV9YogYPRmJdq7t18XjfNckRDYmZ4fcIBiDoq3kJotMpyS5hTrFl%2FOzKPz3HUzX3&X-Amz-Signature=3e2398f4ec5c92ec7e3a1ea204a1fd06407c4f1f4c0a6192540a60ec79d9cb17&X-Amz-SignedHeaders=host&x-id=GetObject)
