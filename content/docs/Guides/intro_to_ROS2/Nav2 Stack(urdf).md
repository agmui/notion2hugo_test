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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRIQSO2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCauuBEi%2BFoarSRu72dqLYc1EC2%2BZDpkz%2B3BzJxBoCAqQIhAJAi0Tduyx4SGxOWAY3auquTqr3cJm6SXRqhrny%2Fhf47KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoR3hJXviFtvBhAXgq3APyYY5of1UuCSpsXeKYzgTa74ZGo4vqhMIlpYan%2B1%2Fr5lfRgEvUbE%2F2p6TX308qVfCiSlL6U3ua88uHDywaLKVeymG7ng6wnTkTZhaDEZaWsNUsLKErlCJH08uixf3XB0ufGdmMlvXuSHbUByRfKdHq%2FVgOEue1bvLfHy50DGdlEx2gTLXY4kbJQ1f0TvHLwkMR77Bvay3l9YtRmPO06GiEGlJ%2FSgZCyop6bVIQ93QIIBnnHL7kgvxnZW5iNci%2BHa2SEgBePIXNLwmhs1%2BuQNIp1MV0HNG%2FnFBCVhTUHTZ5jK028E%2B44GEFUvcAwEQjtzcSwJZXTvL739S5%2FQRxntI1ELh%2BeOSGhhkLgVObaepou2Y%2FhEsKSrVeYuANSoFbGZms4BCn4c1kO6QKYxr2iuIBEWqkkQt0k7F4vqXV1B3fkxb1VcrhYKyQDtwdAVWI5kgIhoAVA1a5jpSwd1oMdEj6q5EtWQ0gPKymbIaAoHzGYZOXcXxvIvSl3qoAXp6mY1gb4cwMwyS6sRNnz8CZ8LhL%2FK2vgoy4RuQFyCqNrip4G3ULZkgJAKmh8kK5En0GPfpCmWmSg8WfyPMHNXZ%2FWx5bh4imiuUq9WHN60nlcpcBuTfE9HRyfnaWAk0qwzDCm8W%2BBjqkAV7djdsDo8XtgoZGdMSV3j63VmF%2BmU8vhTgvD9Y5sOXdRfUd7IbsrmlAgx6lrocmCWfHCHSsaX9YROZvINkcG7lvsnWKPCH6a4hSxmcMfJcgPu%2FIu6kDUfeO6D7FXVNWavwtggwRxyPzAdsM744TwKgnkEwVsn5Al9j7JUI5lIwutN%2FBsMQgzdEYdBJop4eGatTmA8%2BXuwNjuGwe%2BCiXG5S%2BunxF&X-Amz-Signature=d7924148f6add41766447b7ff212f9c06af94a07298c19d7f6bcf198ac033cef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRIQSO2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCauuBEi%2BFoarSRu72dqLYc1EC2%2BZDpkz%2B3BzJxBoCAqQIhAJAi0Tduyx4SGxOWAY3auquTqr3cJm6SXRqhrny%2Fhf47KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoR3hJXviFtvBhAXgq3APyYY5of1UuCSpsXeKYzgTa74ZGo4vqhMIlpYan%2B1%2Fr5lfRgEvUbE%2F2p6TX308qVfCiSlL6U3ua88uHDywaLKVeymG7ng6wnTkTZhaDEZaWsNUsLKErlCJH08uixf3XB0ufGdmMlvXuSHbUByRfKdHq%2FVgOEue1bvLfHy50DGdlEx2gTLXY4kbJQ1f0TvHLwkMR77Bvay3l9YtRmPO06GiEGlJ%2FSgZCyop6bVIQ93QIIBnnHL7kgvxnZW5iNci%2BHa2SEgBePIXNLwmhs1%2BuQNIp1MV0HNG%2FnFBCVhTUHTZ5jK028E%2B44GEFUvcAwEQjtzcSwJZXTvL739S5%2FQRxntI1ELh%2BeOSGhhkLgVObaepou2Y%2FhEsKSrVeYuANSoFbGZms4BCn4c1kO6QKYxr2iuIBEWqkkQt0k7F4vqXV1B3fkxb1VcrhYKyQDtwdAVWI5kgIhoAVA1a5jpSwd1oMdEj6q5EtWQ0gPKymbIaAoHzGYZOXcXxvIvSl3qoAXp6mY1gb4cwMwyS6sRNnz8CZ8LhL%2FK2vgoy4RuQFyCqNrip4G3ULZkgJAKmh8kK5En0GPfpCmWmSg8WfyPMHNXZ%2FWx5bh4imiuUq9WHN60nlcpcBuTfE9HRyfnaWAk0qwzDCm8W%2BBjqkAV7djdsDo8XtgoZGdMSV3j63VmF%2BmU8vhTgvD9Y5sOXdRfUd7IbsrmlAgx6lrocmCWfHCHSsaX9YROZvINkcG7lvsnWKPCH6a4hSxmcMfJcgPu%2FIu6kDUfeO6D7FXVNWavwtggwRxyPzAdsM744TwKgnkEwVsn5Al9j7JUI5lIwutN%2FBsMQgzdEYdBJop4eGatTmA8%2BXuwNjuGwe%2BCiXG5S%2BunxF&X-Amz-Signature=cb911a29613d302ec6339bbd93af607a4b8d8d4670c291e656555982a78289ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRIQSO2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCauuBEi%2BFoarSRu72dqLYc1EC2%2BZDpkz%2B3BzJxBoCAqQIhAJAi0Tduyx4SGxOWAY3auquTqr3cJm6SXRqhrny%2Fhf47KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoR3hJXviFtvBhAXgq3APyYY5of1UuCSpsXeKYzgTa74ZGo4vqhMIlpYan%2B1%2Fr5lfRgEvUbE%2F2p6TX308qVfCiSlL6U3ua88uHDywaLKVeymG7ng6wnTkTZhaDEZaWsNUsLKErlCJH08uixf3XB0ufGdmMlvXuSHbUByRfKdHq%2FVgOEue1bvLfHy50DGdlEx2gTLXY4kbJQ1f0TvHLwkMR77Bvay3l9YtRmPO06GiEGlJ%2FSgZCyop6bVIQ93QIIBnnHL7kgvxnZW5iNci%2BHa2SEgBePIXNLwmhs1%2BuQNIp1MV0HNG%2FnFBCVhTUHTZ5jK028E%2B44GEFUvcAwEQjtzcSwJZXTvL739S5%2FQRxntI1ELh%2BeOSGhhkLgVObaepou2Y%2FhEsKSrVeYuANSoFbGZms4BCn4c1kO6QKYxr2iuIBEWqkkQt0k7F4vqXV1B3fkxb1VcrhYKyQDtwdAVWI5kgIhoAVA1a5jpSwd1oMdEj6q5EtWQ0gPKymbIaAoHzGYZOXcXxvIvSl3qoAXp6mY1gb4cwMwyS6sRNnz8CZ8LhL%2FK2vgoy4RuQFyCqNrip4G3ULZkgJAKmh8kK5En0GPfpCmWmSg8WfyPMHNXZ%2FWx5bh4imiuUq9WHN60nlcpcBuTfE9HRyfnaWAk0qwzDCm8W%2BBjqkAV7djdsDo8XtgoZGdMSV3j63VmF%2BmU8vhTgvD9Y5sOXdRfUd7IbsrmlAgx6lrocmCWfHCHSsaX9YROZvINkcG7lvsnWKPCH6a4hSxmcMfJcgPu%2FIu6kDUfeO6D7FXVNWavwtggwRxyPzAdsM744TwKgnkEwVsn5Al9j7JUI5lIwutN%2FBsMQgzdEYdBJop4eGatTmA8%2BXuwNjuGwe%2BCiXG5S%2BunxF&X-Amz-Signature=ea7f74f65fe8f72bf6b4256f109fee381eff695568ee4b43176c72778244f3d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRIQSO2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCauuBEi%2BFoarSRu72dqLYc1EC2%2BZDpkz%2B3BzJxBoCAqQIhAJAi0Tduyx4SGxOWAY3auquTqr3cJm6SXRqhrny%2Fhf47KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoR3hJXviFtvBhAXgq3APyYY5of1UuCSpsXeKYzgTa74ZGo4vqhMIlpYan%2B1%2Fr5lfRgEvUbE%2F2p6TX308qVfCiSlL6U3ua88uHDywaLKVeymG7ng6wnTkTZhaDEZaWsNUsLKErlCJH08uixf3XB0ufGdmMlvXuSHbUByRfKdHq%2FVgOEue1bvLfHy50DGdlEx2gTLXY4kbJQ1f0TvHLwkMR77Bvay3l9YtRmPO06GiEGlJ%2FSgZCyop6bVIQ93QIIBnnHL7kgvxnZW5iNci%2BHa2SEgBePIXNLwmhs1%2BuQNIp1MV0HNG%2FnFBCVhTUHTZ5jK028E%2B44GEFUvcAwEQjtzcSwJZXTvL739S5%2FQRxntI1ELh%2BeOSGhhkLgVObaepou2Y%2FhEsKSrVeYuANSoFbGZms4BCn4c1kO6QKYxr2iuIBEWqkkQt0k7F4vqXV1B3fkxb1VcrhYKyQDtwdAVWI5kgIhoAVA1a5jpSwd1oMdEj6q5EtWQ0gPKymbIaAoHzGYZOXcXxvIvSl3qoAXp6mY1gb4cwMwyS6sRNnz8CZ8LhL%2FK2vgoy4RuQFyCqNrip4G3ULZkgJAKmh8kK5En0GPfpCmWmSg8WfyPMHNXZ%2FWx5bh4imiuUq9WHN60nlcpcBuTfE9HRyfnaWAk0qwzDCm8W%2BBjqkAV7djdsDo8XtgoZGdMSV3j63VmF%2BmU8vhTgvD9Y5sOXdRfUd7IbsrmlAgx6lrocmCWfHCHSsaX9YROZvINkcG7lvsnWKPCH6a4hSxmcMfJcgPu%2FIu6kDUfeO6D7FXVNWavwtggwRxyPzAdsM744TwKgnkEwVsn5Al9j7JUI5lIwutN%2FBsMQgzdEYdBJop4eGatTmA8%2BXuwNjuGwe%2BCiXG5S%2BunxF&X-Amz-Signature=97644632ff29f375d249d61e86837e828d8bf3c4646844394ffca7cab48ee77a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRIQSO2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCauuBEi%2BFoarSRu72dqLYc1EC2%2BZDpkz%2B3BzJxBoCAqQIhAJAi0Tduyx4SGxOWAY3auquTqr3cJm6SXRqhrny%2Fhf47KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoR3hJXviFtvBhAXgq3APyYY5of1UuCSpsXeKYzgTa74ZGo4vqhMIlpYan%2B1%2Fr5lfRgEvUbE%2F2p6TX308qVfCiSlL6U3ua88uHDywaLKVeymG7ng6wnTkTZhaDEZaWsNUsLKErlCJH08uixf3XB0ufGdmMlvXuSHbUByRfKdHq%2FVgOEue1bvLfHy50DGdlEx2gTLXY4kbJQ1f0TvHLwkMR77Bvay3l9YtRmPO06GiEGlJ%2FSgZCyop6bVIQ93QIIBnnHL7kgvxnZW5iNci%2BHa2SEgBePIXNLwmhs1%2BuQNIp1MV0HNG%2FnFBCVhTUHTZ5jK028E%2B44GEFUvcAwEQjtzcSwJZXTvL739S5%2FQRxntI1ELh%2BeOSGhhkLgVObaepou2Y%2FhEsKSrVeYuANSoFbGZms4BCn4c1kO6QKYxr2iuIBEWqkkQt0k7F4vqXV1B3fkxb1VcrhYKyQDtwdAVWI5kgIhoAVA1a5jpSwd1oMdEj6q5EtWQ0gPKymbIaAoHzGYZOXcXxvIvSl3qoAXp6mY1gb4cwMwyS6sRNnz8CZ8LhL%2FK2vgoy4RuQFyCqNrip4G3ULZkgJAKmh8kK5En0GPfpCmWmSg8WfyPMHNXZ%2FWx5bh4imiuUq9WHN60nlcpcBuTfE9HRyfnaWAk0qwzDCm8W%2BBjqkAV7djdsDo8XtgoZGdMSV3j63VmF%2BmU8vhTgvD9Y5sOXdRfUd7IbsrmlAgx6lrocmCWfHCHSsaX9YROZvINkcG7lvsnWKPCH6a4hSxmcMfJcgPu%2FIu6kDUfeO6D7FXVNWavwtggwRxyPzAdsM744TwKgnkEwVsn5Al9j7JUI5lIwutN%2FBsMQgzdEYdBJop4eGatTmA8%2BXuwNjuGwe%2BCiXG5S%2BunxF&X-Amz-Signature=a357ab0f46ad56abd86e2179a7c19c704676ef10634679643af74d17e60ed090&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRIQSO2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCauuBEi%2BFoarSRu72dqLYc1EC2%2BZDpkz%2B3BzJxBoCAqQIhAJAi0Tduyx4SGxOWAY3auquTqr3cJm6SXRqhrny%2Fhf47KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoR3hJXviFtvBhAXgq3APyYY5of1UuCSpsXeKYzgTa74ZGo4vqhMIlpYan%2B1%2Fr5lfRgEvUbE%2F2p6TX308qVfCiSlL6U3ua88uHDywaLKVeymG7ng6wnTkTZhaDEZaWsNUsLKErlCJH08uixf3XB0ufGdmMlvXuSHbUByRfKdHq%2FVgOEue1bvLfHy50DGdlEx2gTLXY4kbJQ1f0TvHLwkMR77Bvay3l9YtRmPO06GiEGlJ%2FSgZCyop6bVIQ93QIIBnnHL7kgvxnZW5iNci%2BHa2SEgBePIXNLwmhs1%2BuQNIp1MV0HNG%2FnFBCVhTUHTZ5jK028E%2B44GEFUvcAwEQjtzcSwJZXTvL739S5%2FQRxntI1ELh%2BeOSGhhkLgVObaepou2Y%2FhEsKSrVeYuANSoFbGZms4BCn4c1kO6QKYxr2iuIBEWqkkQt0k7F4vqXV1B3fkxb1VcrhYKyQDtwdAVWI5kgIhoAVA1a5jpSwd1oMdEj6q5EtWQ0gPKymbIaAoHzGYZOXcXxvIvSl3qoAXp6mY1gb4cwMwyS6sRNnz8CZ8LhL%2FK2vgoy4RuQFyCqNrip4G3ULZkgJAKmh8kK5En0GPfpCmWmSg8WfyPMHNXZ%2FWx5bh4imiuUq9WHN60nlcpcBuTfE9HRyfnaWAk0qwzDCm8W%2BBjqkAV7djdsDo8XtgoZGdMSV3j63VmF%2BmU8vhTgvD9Y5sOXdRfUd7IbsrmlAgx6lrocmCWfHCHSsaX9YROZvINkcG7lvsnWKPCH6a4hSxmcMfJcgPu%2FIu6kDUfeO6D7FXVNWavwtggwRxyPzAdsM744TwKgnkEwVsn5Al9j7JUI5lIwutN%2FBsMQgzdEYdBJop4eGatTmA8%2BXuwNjuGwe%2BCiXG5S%2BunxF&X-Amz-Signature=724988947effb5f2af706c34f123fd5dfe5b8af471d36159e7b030788bc9bf4c&X-Amz-SignedHeaders=host&x-id=GetObject)
