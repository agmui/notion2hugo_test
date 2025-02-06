---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRE7ZTJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGC9f7MahX67koPS2T%2FWFXJdZA85DPARuwrPX8djel2aAiAgUXDJaVagJ%2F7gdE2CJ5HYAABYRsGPvRTkabg1yPaPhSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMrofEUrYQWylJ8RI0KtwDgU%2B9nC5CUSlDisdvDPRA9pgwm6F8c1oDGVeNCmsL93ona6rwxGWcqP%2FuLDN%2BRRrJbx6kOJQnyE8zMoPf79JCadMMEIxgFD%2FTFVjk7vShAOCPzACBfwdwSr%2Ftl%2FUkCE%2BkvWhId5rAtcw21kj66yvVaNyJ3kyiC1KRtQlIVJYYGdgu530QufVEPV6DgzTR8l6kQhcCAYwPr7WIZJeJmLJknUXB3qxqixBAPDkmK37NExITUYG6mq4TPsyoeR3kgbKCj%2FP7D%2BheOJ36T6liV6BQpbWJY%2BVLE1XH5uf6yioxXJllAI3gO5goZxxEEDTYms%2BvHiDbqk5VoJUpMuKLH6si8f6VmZz%2FBP31cjipR8N%2B0vFeogyZJor13x7JdrhebjcqJgSelGEAPzAiJjHr%2BeVHPdONHkuG4xD6YafOhP%2BQ2NN%2FXFR46ZiNiXbu0XguPWEQVcwkmMUVcfIzDB3AwZFCumlO8ZEgl7%2FLSAQN9f2Xie7wCwGs7VE6VXCw16c7ZWgN9U4w2kKHTZqStmp%2Fpy2zQ1jF1zAeaEox3yYsZ0%2BJM%2BWU8A8qrfrwB8jorxZH%2FbuFM2Ee4qsssNgm4yIp2hU7LO16bLODZVTAtWQ8Q%2B4K5ZkfNtduR%2BjnZwWV9YwwvcSSvQY6pgHeSvSQl4L3tZMmo%2BkYifClzPQ52d7HPlWx%2BDaqPt4eteYgp27N8A7%2FS%2BzoX4NWPYFOnw5dZo%2BTDCspreMcBJXdgUl28sgPKLoB8CsUGG%2F6rln0RRpYe%2Buu4lX%2BTROCQnrwHtAgjIpIutGSlDeB3C28SXrBv6s8zARVveFpzFBOj1hH87fy%2FYNF2Zj7tLVf%2BY%2Fm8FzGkndqQCbnpAa%2BnWa3ZXC8B7DY&X-Amz-Signature=f854608d20c9f344d8eb169d7568dde9d184a2b2170780f9d04ad59a39ac2668&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRE7ZTJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGC9f7MahX67koPS2T%2FWFXJdZA85DPARuwrPX8djel2aAiAgUXDJaVagJ%2F7gdE2CJ5HYAABYRsGPvRTkabg1yPaPhSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMrofEUrYQWylJ8RI0KtwDgU%2B9nC5CUSlDisdvDPRA9pgwm6F8c1oDGVeNCmsL93ona6rwxGWcqP%2FuLDN%2BRRrJbx6kOJQnyE8zMoPf79JCadMMEIxgFD%2FTFVjk7vShAOCPzACBfwdwSr%2Ftl%2FUkCE%2BkvWhId5rAtcw21kj66yvVaNyJ3kyiC1KRtQlIVJYYGdgu530QufVEPV6DgzTR8l6kQhcCAYwPr7WIZJeJmLJknUXB3qxqixBAPDkmK37NExITUYG6mq4TPsyoeR3kgbKCj%2FP7D%2BheOJ36T6liV6BQpbWJY%2BVLE1XH5uf6yioxXJllAI3gO5goZxxEEDTYms%2BvHiDbqk5VoJUpMuKLH6si8f6VmZz%2FBP31cjipR8N%2B0vFeogyZJor13x7JdrhebjcqJgSelGEAPzAiJjHr%2BeVHPdONHkuG4xD6YafOhP%2BQ2NN%2FXFR46ZiNiXbu0XguPWEQVcwkmMUVcfIzDB3AwZFCumlO8ZEgl7%2FLSAQN9f2Xie7wCwGs7VE6VXCw16c7ZWgN9U4w2kKHTZqStmp%2Fpy2zQ1jF1zAeaEox3yYsZ0%2BJM%2BWU8A8qrfrwB8jorxZH%2FbuFM2Ee4qsssNgm4yIp2hU7LO16bLODZVTAtWQ8Q%2B4K5ZkfNtduR%2BjnZwWV9YwwvcSSvQY6pgHeSvSQl4L3tZMmo%2BkYifClzPQ52d7HPlWx%2BDaqPt4eteYgp27N8A7%2FS%2BzoX4NWPYFOnw5dZo%2BTDCspreMcBJXdgUl28sgPKLoB8CsUGG%2F6rln0RRpYe%2Buu4lX%2BTROCQnrwHtAgjIpIutGSlDeB3C28SXrBv6s8zARVveFpzFBOj1hH87fy%2FYNF2Zj7tLVf%2BY%2Fm8FzGkndqQCbnpAa%2BnWa3ZXC8B7DY&X-Amz-Signature=970095b7782a88fba19becf6eb2f8c914d78606e458ae3e539f36939b14c668c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRE7ZTJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGC9f7MahX67koPS2T%2FWFXJdZA85DPARuwrPX8djel2aAiAgUXDJaVagJ%2F7gdE2CJ5HYAABYRsGPvRTkabg1yPaPhSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMrofEUrYQWylJ8RI0KtwDgU%2B9nC5CUSlDisdvDPRA9pgwm6F8c1oDGVeNCmsL93ona6rwxGWcqP%2FuLDN%2BRRrJbx6kOJQnyE8zMoPf79JCadMMEIxgFD%2FTFVjk7vShAOCPzACBfwdwSr%2Ftl%2FUkCE%2BkvWhId5rAtcw21kj66yvVaNyJ3kyiC1KRtQlIVJYYGdgu530QufVEPV6DgzTR8l6kQhcCAYwPr7WIZJeJmLJknUXB3qxqixBAPDkmK37NExITUYG6mq4TPsyoeR3kgbKCj%2FP7D%2BheOJ36T6liV6BQpbWJY%2BVLE1XH5uf6yioxXJllAI3gO5goZxxEEDTYms%2BvHiDbqk5VoJUpMuKLH6si8f6VmZz%2FBP31cjipR8N%2B0vFeogyZJor13x7JdrhebjcqJgSelGEAPzAiJjHr%2BeVHPdONHkuG4xD6YafOhP%2BQ2NN%2FXFR46ZiNiXbu0XguPWEQVcwkmMUVcfIzDB3AwZFCumlO8ZEgl7%2FLSAQN9f2Xie7wCwGs7VE6VXCw16c7ZWgN9U4w2kKHTZqStmp%2Fpy2zQ1jF1zAeaEox3yYsZ0%2BJM%2BWU8A8qrfrwB8jorxZH%2FbuFM2Ee4qsssNgm4yIp2hU7LO16bLODZVTAtWQ8Q%2B4K5ZkfNtduR%2BjnZwWV9YwwvcSSvQY6pgHeSvSQl4L3tZMmo%2BkYifClzPQ52d7HPlWx%2BDaqPt4eteYgp27N8A7%2FS%2BzoX4NWPYFOnw5dZo%2BTDCspreMcBJXdgUl28sgPKLoB8CsUGG%2F6rln0RRpYe%2Buu4lX%2BTROCQnrwHtAgjIpIutGSlDeB3C28SXrBv6s8zARVveFpzFBOj1hH87fy%2FYNF2Zj7tLVf%2BY%2Fm8FzGkndqQCbnpAa%2BnWa3ZXC8B7DY&X-Amz-Signature=af0fb22faa026e79fad87b012b0958f130c891299e4c72678963acccf394ebc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRE7ZTJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGC9f7MahX67koPS2T%2FWFXJdZA85DPARuwrPX8djel2aAiAgUXDJaVagJ%2F7gdE2CJ5HYAABYRsGPvRTkabg1yPaPhSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMrofEUrYQWylJ8RI0KtwDgU%2B9nC5CUSlDisdvDPRA9pgwm6F8c1oDGVeNCmsL93ona6rwxGWcqP%2FuLDN%2BRRrJbx6kOJQnyE8zMoPf79JCadMMEIxgFD%2FTFVjk7vShAOCPzACBfwdwSr%2Ftl%2FUkCE%2BkvWhId5rAtcw21kj66yvVaNyJ3kyiC1KRtQlIVJYYGdgu530QufVEPV6DgzTR8l6kQhcCAYwPr7WIZJeJmLJknUXB3qxqixBAPDkmK37NExITUYG6mq4TPsyoeR3kgbKCj%2FP7D%2BheOJ36T6liV6BQpbWJY%2BVLE1XH5uf6yioxXJllAI3gO5goZxxEEDTYms%2BvHiDbqk5VoJUpMuKLH6si8f6VmZz%2FBP31cjipR8N%2B0vFeogyZJor13x7JdrhebjcqJgSelGEAPzAiJjHr%2BeVHPdONHkuG4xD6YafOhP%2BQ2NN%2FXFR46ZiNiXbu0XguPWEQVcwkmMUVcfIzDB3AwZFCumlO8ZEgl7%2FLSAQN9f2Xie7wCwGs7VE6VXCw16c7ZWgN9U4w2kKHTZqStmp%2Fpy2zQ1jF1zAeaEox3yYsZ0%2BJM%2BWU8A8qrfrwB8jorxZH%2FbuFM2Ee4qsssNgm4yIp2hU7LO16bLODZVTAtWQ8Q%2B4K5ZkfNtduR%2BjnZwWV9YwwvcSSvQY6pgHeSvSQl4L3tZMmo%2BkYifClzPQ52d7HPlWx%2BDaqPt4eteYgp27N8A7%2FS%2BzoX4NWPYFOnw5dZo%2BTDCspreMcBJXdgUl28sgPKLoB8CsUGG%2F6rln0RRpYe%2Buu4lX%2BTROCQnrwHtAgjIpIutGSlDeB3C28SXrBv6s8zARVveFpzFBOj1hH87fy%2FYNF2Zj7tLVf%2BY%2Fm8FzGkndqQCbnpAa%2BnWa3ZXC8B7DY&X-Amz-Signature=3fa7b249d6dfccd1b79998cc1e8afa4a85e05b4a915c2aa18e6ac569e98496b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRE7ZTJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGC9f7MahX67koPS2T%2FWFXJdZA85DPARuwrPX8djel2aAiAgUXDJaVagJ%2F7gdE2CJ5HYAABYRsGPvRTkabg1yPaPhSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMrofEUrYQWylJ8RI0KtwDgU%2B9nC5CUSlDisdvDPRA9pgwm6F8c1oDGVeNCmsL93ona6rwxGWcqP%2FuLDN%2BRRrJbx6kOJQnyE8zMoPf79JCadMMEIxgFD%2FTFVjk7vShAOCPzACBfwdwSr%2Ftl%2FUkCE%2BkvWhId5rAtcw21kj66yvVaNyJ3kyiC1KRtQlIVJYYGdgu530QufVEPV6DgzTR8l6kQhcCAYwPr7WIZJeJmLJknUXB3qxqixBAPDkmK37NExITUYG6mq4TPsyoeR3kgbKCj%2FP7D%2BheOJ36T6liV6BQpbWJY%2BVLE1XH5uf6yioxXJllAI3gO5goZxxEEDTYms%2BvHiDbqk5VoJUpMuKLH6si8f6VmZz%2FBP31cjipR8N%2B0vFeogyZJor13x7JdrhebjcqJgSelGEAPzAiJjHr%2BeVHPdONHkuG4xD6YafOhP%2BQ2NN%2FXFR46ZiNiXbu0XguPWEQVcwkmMUVcfIzDB3AwZFCumlO8ZEgl7%2FLSAQN9f2Xie7wCwGs7VE6VXCw16c7ZWgN9U4w2kKHTZqStmp%2Fpy2zQ1jF1zAeaEox3yYsZ0%2BJM%2BWU8A8qrfrwB8jorxZH%2FbuFM2Ee4qsssNgm4yIp2hU7LO16bLODZVTAtWQ8Q%2B4K5ZkfNtduR%2BjnZwWV9YwwvcSSvQY6pgHeSvSQl4L3tZMmo%2BkYifClzPQ52d7HPlWx%2BDaqPt4eteYgp27N8A7%2FS%2BzoX4NWPYFOnw5dZo%2BTDCspreMcBJXdgUl28sgPKLoB8CsUGG%2F6rln0RRpYe%2Buu4lX%2BTROCQnrwHtAgjIpIutGSlDeB3C28SXrBv6s8zARVveFpzFBOj1hH87fy%2FYNF2Zj7tLVf%2BY%2Fm8FzGkndqQCbnpAa%2BnWa3ZXC8B7DY&X-Amz-Signature=a34f71ac9e23e3c030fb05352a873316092ad5747d461973f23be2ed310e3664&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRE7ZTJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGC9f7MahX67koPS2T%2FWFXJdZA85DPARuwrPX8djel2aAiAgUXDJaVagJ%2F7gdE2CJ5HYAABYRsGPvRTkabg1yPaPhSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMrofEUrYQWylJ8RI0KtwDgU%2B9nC5CUSlDisdvDPRA9pgwm6F8c1oDGVeNCmsL93ona6rwxGWcqP%2FuLDN%2BRRrJbx6kOJQnyE8zMoPf79JCadMMEIxgFD%2FTFVjk7vShAOCPzACBfwdwSr%2Ftl%2FUkCE%2BkvWhId5rAtcw21kj66yvVaNyJ3kyiC1KRtQlIVJYYGdgu530QufVEPV6DgzTR8l6kQhcCAYwPr7WIZJeJmLJknUXB3qxqixBAPDkmK37NExITUYG6mq4TPsyoeR3kgbKCj%2FP7D%2BheOJ36T6liV6BQpbWJY%2BVLE1XH5uf6yioxXJllAI3gO5goZxxEEDTYms%2BvHiDbqk5VoJUpMuKLH6si8f6VmZz%2FBP31cjipR8N%2B0vFeogyZJor13x7JdrhebjcqJgSelGEAPzAiJjHr%2BeVHPdONHkuG4xD6YafOhP%2BQ2NN%2FXFR46ZiNiXbu0XguPWEQVcwkmMUVcfIzDB3AwZFCumlO8ZEgl7%2FLSAQN9f2Xie7wCwGs7VE6VXCw16c7ZWgN9U4w2kKHTZqStmp%2Fpy2zQ1jF1zAeaEox3yYsZ0%2BJM%2BWU8A8qrfrwB8jorxZH%2FbuFM2Ee4qsssNgm4yIp2hU7LO16bLODZVTAtWQ8Q%2B4K5ZkfNtduR%2BjnZwWV9YwwvcSSvQY6pgHeSvSQl4L3tZMmo%2BkYifClzPQ52d7HPlWx%2BDaqPt4eteYgp27N8A7%2FS%2BzoX4NWPYFOnw5dZo%2BTDCspreMcBJXdgUl28sgPKLoB8CsUGG%2F6rln0RRpYe%2Buu4lX%2BTROCQnrwHtAgjIpIutGSlDeB3C28SXrBv6s8zARVveFpzFBOj1hH87fy%2FYNF2Zj7tLVf%2BY%2Fm8FzGkndqQCbnpAa%2BnWa3ZXC8B7DY&X-Amz-Signature=f1b4cc2e72a4d0d9370bef31caaca4dd5374762eb24da0b251ca81005413fea3&X-Amz-SignedHeaders=host&x-id=GetObject)
