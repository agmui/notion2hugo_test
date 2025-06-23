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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L3DVP3G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDv9wSxqICPZBa7Ovu8WIeqaOClfCdnQPFrtQnTG1JZ%2BgIgAoj2CZReK5TzbmSfnDPeBZirfQOtGyK6r5lre4QeEpUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMfaTKrUHJ53RlXhCrcA3AUQr3Dapu1ROG1pjjBOdxxbu9nQcngjyqWFrAZre%2BgB4vQqNSWT21U3zqeHKpsCZsteLtjybaeWyr8uwKoKn03AtdbHGLtsGNl%2FOODN9LmbKs%2BZicxpUVr3pe34pUDZyOyUQZQVSkjbjGZe9kotX%2BYRDPIc4QJYI9IvONeNS6Z01g63mOG9hNuRj80hlRx1LXxCMZP8Z0cqTIu6Ajhh0Q0R2p9CY2Hck8QY2TPX7yaH67MkAIWVkDOysohk4%2B3GTcqSJq28mtMOHEMhf8w7%2BDstwIjxLPhTvGKmsEpOV19IguU7ByE90cr4pMdgTthIicz5hLIQWjnf8clPHNge%2BBRsWz8yYiZ6lIm532TAHwFHCKI9UpiTgZ9crLulBcjS0%2FlpPuVzhw%2Bl%2F0IPB9O%2F86WwIPAl6%2FpSuQfgolbnooi5KG7r18ZADviYBf1OQd4BcCiANU5yp2odVHTh5rUyk67lu3ICU%2B23XmmZxhZCK4zJOlVR73Pg4jyTuVXRn8h9QsgsduNxLWl90YgEieEX%2FQptlolyKxTlHU1pqpAshBlrpC3L7ISJNSgLKxXsrwdXoFXSiIbSsZgdt6x3rmGizx1JV9zB4N7146z7%2FIInU1eRw8N9Ful70%2B3P2pkMOen48IGOqUBYT4v4ghHlpccq7l0sTRxxzZS4POXUNHzJ02gL4gDl2SPk37oDqxl%2FW2w%2FeXfCdTk9kl400N40N5D0TEkgdty9LKX00SEFyRD8lh66Qtav%2FougrKGZI%2FIFDHrhqT6WN%2BRwSk6tF8N%2BSYxrc1fD2qp2cO2QEPpHw2Gx14upSvBf8EU6UykSRzXQnMQWnbdNhiUQJAEweLs8UHZm94IDo77V7IpBJJD&X-Amz-Signature=91395b4ce18b6a34919d400aeeae7ae4f740bda887a229387a45e4f266eef765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L3DVP3G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDv9wSxqICPZBa7Ovu8WIeqaOClfCdnQPFrtQnTG1JZ%2BgIgAoj2CZReK5TzbmSfnDPeBZirfQOtGyK6r5lre4QeEpUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMfaTKrUHJ53RlXhCrcA3AUQr3Dapu1ROG1pjjBOdxxbu9nQcngjyqWFrAZre%2BgB4vQqNSWT21U3zqeHKpsCZsteLtjybaeWyr8uwKoKn03AtdbHGLtsGNl%2FOODN9LmbKs%2BZicxpUVr3pe34pUDZyOyUQZQVSkjbjGZe9kotX%2BYRDPIc4QJYI9IvONeNS6Z01g63mOG9hNuRj80hlRx1LXxCMZP8Z0cqTIu6Ajhh0Q0R2p9CY2Hck8QY2TPX7yaH67MkAIWVkDOysohk4%2B3GTcqSJq28mtMOHEMhf8w7%2BDstwIjxLPhTvGKmsEpOV19IguU7ByE90cr4pMdgTthIicz5hLIQWjnf8clPHNge%2BBRsWz8yYiZ6lIm532TAHwFHCKI9UpiTgZ9crLulBcjS0%2FlpPuVzhw%2Bl%2F0IPB9O%2F86WwIPAl6%2FpSuQfgolbnooi5KG7r18ZADviYBf1OQd4BcCiANU5yp2odVHTh5rUyk67lu3ICU%2B23XmmZxhZCK4zJOlVR73Pg4jyTuVXRn8h9QsgsduNxLWl90YgEieEX%2FQptlolyKxTlHU1pqpAshBlrpC3L7ISJNSgLKxXsrwdXoFXSiIbSsZgdt6x3rmGizx1JV9zB4N7146z7%2FIInU1eRw8N9Ful70%2B3P2pkMOen48IGOqUBYT4v4ghHlpccq7l0sTRxxzZS4POXUNHzJ02gL4gDl2SPk37oDqxl%2FW2w%2FeXfCdTk9kl400N40N5D0TEkgdty9LKX00SEFyRD8lh66Qtav%2FougrKGZI%2FIFDHrhqT6WN%2BRwSk6tF8N%2BSYxrc1fD2qp2cO2QEPpHw2Gx14upSvBf8EU6UykSRzXQnMQWnbdNhiUQJAEweLs8UHZm94IDo77V7IpBJJD&X-Amz-Signature=a611eb6ac55d5a905808ad247dfe41c1a6dd1f950c3b89005196e9826afddde0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L3DVP3G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDv9wSxqICPZBa7Ovu8WIeqaOClfCdnQPFrtQnTG1JZ%2BgIgAoj2CZReK5TzbmSfnDPeBZirfQOtGyK6r5lre4QeEpUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMfaTKrUHJ53RlXhCrcA3AUQr3Dapu1ROG1pjjBOdxxbu9nQcngjyqWFrAZre%2BgB4vQqNSWT21U3zqeHKpsCZsteLtjybaeWyr8uwKoKn03AtdbHGLtsGNl%2FOODN9LmbKs%2BZicxpUVr3pe34pUDZyOyUQZQVSkjbjGZe9kotX%2BYRDPIc4QJYI9IvONeNS6Z01g63mOG9hNuRj80hlRx1LXxCMZP8Z0cqTIu6Ajhh0Q0R2p9CY2Hck8QY2TPX7yaH67MkAIWVkDOysohk4%2B3GTcqSJq28mtMOHEMhf8w7%2BDstwIjxLPhTvGKmsEpOV19IguU7ByE90cr4pMdgTthIicz5hLIQWjnf8clPHNge%2BBRsWz8yYiZ6lIm532TAHwFHCKI9UpiTgZ9crLulBcjS0%2FlpPuVzhw%2Bl%2F0IPB9O%2F86WwIPAl6%2FpSuQfgolbnooi5KG7r18ZADviYBf1OQd4BcCiANU5yp2odVHTh5rUyk67lu3ICU%2B23XmmZxhZCK4zJOlVR73Pg4jyTuVXRn8h9QsgsduNxLWl90YgEieEX%2FQptlolyKxTlHU1pqpAshBlrpC3L7ISJNSgLKxXsrwdXoFXSiIbSsZgdt6x3rmGizx1JV9zB4N7146z7%2FIInU1eRw8N9Ful70%2B3P2pkMOen48IGOqUBYT4v4ghHlpccq7l0sTRxxzZS4POXUNHzJ02gL4gDl2SPk37oDqxl%2FW2w%2FeXfCdTk9kl400N40N5D0TEkgdty9LKX00SEFyRD8lh66Qtav%2FougrKGZI%2FIFDHrhqT6WN%2BRwSk6tF8N%2BSYxrc1fD2qp2cO2QEPpHw2Gx14upSvBf8EU6UykSRzXQnMQWnbdNhiUQJAEweLs8UHZm94IDo77V7IpBJJD&X-Amz-Signature=67685fc96b27a5916a5f55a27c90df0dcbfccf6e1cd8b55742b3dadf3af82528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L3DVP3G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDv9wSxqICPZBa7Ovu8WIeqaOClfCdnQPFrtQnTG1JZ%2BgIgAoj2CZReK5TzbmSfnDPeBZirfQOtGyK6r5lre4QeEpUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMfaTKrUHJ53RlXhCrcA3AUQr3Dapu1ROG1pjjBOdxxbu9nQcngjyqWFrAZre%2BgB4vQqNSWT21U3zqeHKpsCZsteLtjybaeWyr8uwKoKn03AtdbHGLtsGNl%2FOODN9LmbKs%2BZicxpUVr3pe34pUDZyOyUQZQVSkjbjGZe9kotX%2BYRDPIc4QJYI9IvONeNS6Z01g63mOG9hNuRj80hlRx1LXxCMZP8Z0cqTIu6Ajhh0Q0R2p9CY2Hck8QY2TPX7yaH67MkAIWVkDOysohk4%2B3GTcqSJq28mtMOHEMhf8w7%2BDstwIjxLPhTvGKmsEpOV19IguU7ByE90cr4pMdgTthIicz5hLIQWjnf8clPHNge%2BBRsWz8yYiZ6lIm532TAHwFHCKI9UpiTgZ9crLulBcjS0%2FlpPuVzhw%2Bl%2F0IPB9O%2F86WwIPAl6%2FpSuQfgolbnooi5KG7r18ZADviYBf1OQd4BcCiANU5yp2odVHTh5rUyk67lu3ICU%2B23XmmZxhZCK4zJOlVR73Pg4jyTuVXRn8h9QsgsduNxLWl90YgEieEX%2FQptlolyKxTlHU1pqpAshBlrpC3L7ISJNSgLKxXsrwdXoFXSiIbSsZgdt6x3rmGizx1JV9zB4N7146z7%2FIInU1eRw8N9Ful70%2B3P2pkMOen48IGOqUBYT4v4ghHlpccq7l0sTRxxzZS4POXUNHzJ02gL4gDl2SPk37oDqxl%2FW2w%2FeXfCdTk9kl400N40N5D0TEkgdty9LKX00SEFyRD8lh66Qtav%2FougrKGZI%2FIFDHrhqT6WN%2BRwSk6tF8N%2BSYxrc1fD2qp2cO2QEPpHw2Gx14upSvBf8EU6UykSRzXQnMQWnbdNhiUQJAEweLs8UHZm94IDo77V7IpBJJD&X-Amz-Signature=364e8f751275d84d1e5d34fe3666b26d9e78e5161cadbbd60b7cf7da835d47d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L3DVP3G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDv9wSxqICPZBa7Ovu8WIeqaOClfCdnQPFrtQnTG1JZ%2BgIgAoj2CZReK5TzbmSfnDPeBZirfQOtGyK6r5lre4QeEpUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMfaTKrUHJ53RlXhCrcA3AUQr3Dapu1ROG1pjjBOdxxbu9nQcngjyqWFrAZre%2BgB4vQqNSWT21U3zqeHKpsCZsteLtjybaeWyr8uwKoKn03AtdbHGLtsGNl%2FOODN9LmbKs%2BZicxpUVr3pe34pUDZyOyUQZQVSkjbjGZe9kotX%2BYRDPIc4QJYI9IvONeNS6Z01g63mOG9hNuRj80hlRx1LXxCMZP8Z0cqTIu6Ajhh0Q0R2p9CY2Hck8QY2TPX7yaH67MkAIWVkDOysohk4%2B3GTcqSJq28mtMOHEMhf8w7%2BDstwIjxLPhTvGKmsEpOV19IguU7ByE90cr4pMdgTthIicz5hLIQWjnf8clPHNge%2BBRsWz8yYiZ6lIm532TAHwFHCKI9UpiTgZ9crLulBcjS0%2FlpPuVzhw%2Bl%2F0IPB9O%2F86WwIPAl6%2FpSuQfgolbnooi5KG7r18ZADviYBf1OQd4BcCiANU5yp2odVHTh5rUyk67lu3ICU%2B23XmmZxhZCK4zJOlVR73Pg4jyTuVXRn8h9QsgsduNxLWl90YgEieEX%2FQptlolyKxTlHU1pqpAshBlrpC3L7ISJNSgLKxXsrwdXoFXSiIbSsZgdt6x3rmGizx1JV9zB4N7146z7%2FIInU1eRw8N9Ful70%2B3P2pkMOen48IGOqUBYT4v4ghHlpccq7l0sTRxxzZS4POXUNHzJ02gL4gDl2SPk37oDqxl%2FW2w%2FeXfCdTk9kl400N40N5D0TEkgdty9LKX00SEFyRD8lh66Qtav%2FougrKGZI%2FIFDHrhqT6WN%2BRwSk6tF8N%2BSYxrc1fD2qp2cO2QEPpHw2Gx14upSvBf8EU6UykSRzXQnMQWnbdNhiUQJAEweLs8UHZm94IDo77V7IpBJJD&X-Amz-Signature=3fa8e53cc00e3f71051f83a4199af19604db8945e88b89175f6b6418d7ed497d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L3DVP3G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDv9wSxqICPZBa7Ovu8WIeqaOClfCdnQPFrtQnTG1JZ%2BgIgAoj2CZReK5TzbmSfnDPeBZirfQOtGyK6r5lre4QeEpUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMfaTKrUHJ53RlXhCrcA3AUQr3Dapu1ROG1pjjBOdxxbu9nQcngjyqWFrAZre%2BgB4vQqNSWT21U3zqeHKpsCZsteLtjybaeWyr8uwKoKn03AtdbHGLtsGNl%2FOODN9LmbKs%2BZicxpUVr3pe34pUDZyOyUQZQVSkjbjGZe9kotX%2BYRDPIc4QJYI9IvONeNS6Z01g63mOG9hNuRj80hlRx1LXxCMZP8Z0cqTIu6Ajhh0Q0R2p9CY2Hck8QY2TPX7yaH67MkAIWVkDOysohk4%2B3GTcqSJq28mtMOHEMhf8w7%2BDstwIjxLPhTvGKmsEpOV19IguU7ByE90cr4pMdgTthIicz5hLIQWjnf8clPHNge%2BBRsWz8yYiZ6lIm532TAHwFHCKI9UpiTgZ9crLulBcjS0%2FlpPuVzhw%2Bl%2F0IPB9O%2F86WwIPAl6%2FpSuQfgolbnooi5KG7r18ZADviYBf1OQd4BcCiANU5yp2odVHTh5rUyk67lu3ICU%2B23XmmZxhZCK4zJOlVR73Pg4jyTuVXRn8h9QsgsduNxLWl90YgEieEX%2FQptlolyKxTlHU1pqpAshBlrpC3L7ISJNSgLKxXsrwdXoFXSiIbSsZgdt6x3rmGizx1JV9zB4N7146z7%2FIInU1eRw8N9Ful70%2B3P2pkMOen48IGOqUBYT4v4ghHlpccq7l0sTRxxzZS4POXUNHzJ02gL4gDl2SPk37oDqxl%2FW2w%2FeXfCdTk9kl400N40N5D0TEkgdty9LKX00SEFyRD8lh66Qtav%2FougrKGZI%2FIFDHrhqT6WN%2BRwSk6tF8N%2BSYxrc1fD2qp2cO2QEPpHw2Gx14upSvBf8EU6UykSRzXQnMQWnbdNhiUQJAEweLs8UHZm94IDo77V7IpBJJD&X-Amz-Signature=d10115a1c1f90a535358a666d75599e2d08028dbc64c760da811820b68da6015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
