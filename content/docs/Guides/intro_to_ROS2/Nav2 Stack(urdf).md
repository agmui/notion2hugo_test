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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTW45O6O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFAWPM7SCQT4Tl66RxS%2B4yKu4eTTnIL5BxFNSxoj2f1kAiEA4wa8U741bE%2BdkXX9NqOhsQz1K07WqFTRB9g8NJ7y6y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSq6YlBsd2BFhctfircAyYR7Vt6J12etFYMoNpESlUNQLEqN%2F75eh9ovIGh5%2Bl5F0%2Ffx%2FquJJDGgUcKHL3DK9sn9GBMg4bMpTh6qUMVFoX4D1tETC%2FMEqJAXI%2BeZX3pMR0ETOygj9wG2w8C7vGi9YFUlAMnQ3jzokBF87EKGerDdntoLHlyMaUv2ypV8xtyfSQJKh5ExzzuvbkgLloITqLUW7fk3XshasHBxciqe%2BmAFdeKZxUv1MF70OSM51GAk1l1w%2FCZAS7i3W4IHNQ7cP7d7%2BkFdLvvH7g3HfffE9p1BqHfdjfCjhW31OXR%2FxGflyisp45dshXuU2Zzo4qr9AiVE1zX6suiSaClv2Dn%2BL%2Brlw%2F48F0YDB0ioOYgd2ZaXgRqRf5SL9L13HU9RXUSFJOpE%2BAVaA7tkUh4RxJjG6%2BFJObFAC7u%2BRBrn42dccSJfU4UzjEdl5bPNHGF1XwlnfvDyHW4pbWPIo%2FLZlY7%2BX2BXbjYFlRwqs8WM7e8xhAqc2XQXXJcu3tEyh1G2QzBU71xinIMhIu77ZLhaKZezHf%2BaWeCqbd9JQbLH29FUg6QW8YnDVj4%2Ftnf8yyMGq0KlGCOcyuScW2Dva3vS%2BZjhzeocNCwlKAyvVRGbvzZ3bzEBBjtyJk32NsyY1MVMOuG1sAGOqUBNj%2BgzDBxc08onJSNwyx4XoxjU2Rxlg8Ge2KP3%2BAswxApSw%2FY82w5RAFNGlu55meR44udpk9CGc0kwLNfNkOn3fyd%2B%2F5dSwPUxoKUI%2BaqRKNNkSye7Nq%2F22SjlanGIPLPfTQVp5sBhZ4I7kXV4TbonM06Z%2BuFVosoJ%2BIqaTHWRdC4iH1FCYNo%2BLQH%2F3oS71L1wbkRSGbKsqHQeiytDkds6gyLOiVk&X-Amz-Signature=02f7933a48c04210601f23081d897610559ab161cc6a9c3636e56aea7398fac9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTW45O6O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFAWPM7SCQT4Tl66RxS%2B4yKu4eTTnIL5BxFNSxoj2f1kAiEA4wa8U741bE%2BdkXX9NqOhsQz1K07WqFTRB9g8NJ7y6y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSq6YlBsd2BFhctfircAyYR7Vt6J12etFYMoNpESlUNQLEqN%2F75eh9ovIGh5%2Bl5F0%2Ffx%2FquJJDGgUcKHL3DK9sn9GBMg4bMpTh6qUMVFoX4D1tETC%2FMEqJAXI%2BeZX3pMR0ETOygj9wG2w8C7vGi9YFUlAMnQ3jzokBF87EKGerDdntoLHlyMaUv2ypV8xtyfSQJKh5ExzzuvbkgLloITqLUW7fk3XshasHBxciqe%2BmAFdeKZxUv1MF70OSM51GAk1l1w%2FCZAS7i3W4IHNQ7cP7d7%2BkFdLvvH7g3HfffE9p1BqHfdjfCjhW31OXR%2FxGflyisp45dshXuU2Zzo4qr9AiVE1zX6suiSaClv2Dn%2BL%2Brlw%2F48F0YDB0ioOYgd2ZaXgRqRf5SL9L13HU9RXUSFJOpE%2BAVaA7tkUh4RxJjG6%2BFJObFAC7u%2BRBrn42dccSJfU4UzjEdl5bPNHGF1XwlnfvDyHW4pbWPIo%2FLZlY7%2BX2BXbjYFlRwqs8WM7e8xhAqc2XQXXJcu3tEyh1G2QzBU71xinIMhIu77ZLhaKZezHf%2BaWeCqbd9JQbLH29FUg6QW8YnDVj4%2Ftnf8yyMGq0KlGCOcyuScW2Dva3vS%2BZjhzeocNCwlKAyvVRGbvzZ3bzEBBjtyJk32NsyY1MVMOuG1sAGOqUBNj%2BgzDBxc08onJSNwyx4XoxjU2Rxlg8Ge2KP3%2BAswxApSw%2FY82w5RAFNGlu55meR44udpk9CGc0kwLNfNkOn3fyd%2B%2F5dSwPUxoKUI%2BaqRKNNkSye7Nq%2F22SjlanGIPLPfTQVp5sBhZ4I7kXV4TbonM06Z%2BuFVosoJ%2BIqaTHWRdC4iH1FCYNo%2BLQH%2F3oS71L1wbkRSGbKsqHQeiytDkds6gyLOiVk&X-Amz-Signature=3a995bc023b3471c34730edf060b4fb439c63007fcc1d2e697032d0996086a52&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTW45O6O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFAWPM7SCQT4Tl66RxS%2B4yKu4eTTnIL5BxFNSxoj2f1kAiEA4wa8U741bE%2BdkXX9NqOhsQz1K07WqFTRB9g8NJ7y6y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSq6YlBsd2BFhctfircAyYR7Vt6J12etFYMoNpESlUNQLEqN%2F75eh9ovIGh5%2Bl5F0%2Ffx%2FquJJDGgUcKHL3DK9sn9GBMg4bMpTh6qUMVFoX4D1tETC%2FMEqJAXI%2BeZX3pMR0ETOygj9wG2w8C7vGi9YFUlAMnQ3jzokBF87EKGerDdntoLHlyMaUv2ypV8xtyfSQJKh5ExzzuvbkgLloITqLUW7fk3XshasHBxciqe%2BmAFdeKZxUv1MF70OSM51GAk1l1w%2FCZAS7i3W4IHNQ7cP7d7%2BkFdLvvH7g3HfffE9p1BqHfdjfCjhW31OXR%2FxGflyisp45dshXuU2Zzo4qr9AiVE1zX6suiSaClv2Dn%2BL%2Brlw%2F48F0YDB0ioOYgd2ZaXgRqRf5SL9L13HU9RXUSFJOpE%2BAVaA7tkUh4RxJjG6%2BFJObFAC7u%2BRBrn42dccSJfU4UzjEdl5bPNHGF1XwlnfvDyHW4pbWPIo%2FLZlY7%2BX2BXbjYFlRwqs8WM7e8xhAqc2XQXXJcu3tEyh1G2QzBU71xinIMhIu77ZLhaKZezHf%2BaWeCqbd9JQbLH29FUg6QW8YnDVj4%2Ftnf8yyMGq0KlGCOcyuScW2Dva3vS%2BZjhzeocNCwlKAyvVRGbvzZ3bzEBBjtyJk32NsyY1MVMOuG1sAGOqUBNj%2BgzDBxc08onJSNwyx4XoxjU2Rxlg8Ge2KP3%2BAswxApSw%2FY82w5RAFNGlu55meR44udpk9CGc0kwLNfNkOn3fyd%2B%2F5dSwPUxoKUI%2BaqRKNNkSye7Nq%2F22SjlanGIPLPfTQVp5sBhZ4I7kXV4TbonM06Z%2BuFVosoJ%2BIqaTHWRdC4iH1FCYNo%2BLQH%2F3oS71L1wbkRSGbKsqHQeiytDkds6gyLOiVk&X-Amz-Signature=2fc6e56815a0705726b61dddb2e8cc236a06b853f35a7695548688d09165bc1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTW45O6O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFAWPM7SCQT4Tl66RxS%2B4yKu4eTTnIL5BxFNSxoj2f1kAiEA4wa8U741bE%2BdkXX9NqOhsQz1K07WqFTRB9g8NJ7y6y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSq6YlBsd2BFhctfircAyYR7Vt6J12etFYMoNpESlUNQLEqN%2F75eh9ovIGh5%2Bl5F0%2Ffx%2FquJJDGgUcKHL3DK9sn9GBMg4bMpTh6qUMVFoX4D1tETC%2FMEqJAXI%2BeZX3pMR0ETOygj9wG2w8C7vGi9YFUlAMnQ3jzokBF87EKGerDdntoLHlyMaUv2ypV8xtyfSQJKh5ExzzuvbkgLloITqLUW7fk3XshasHBxciqe%2BmAFdeKZxUv1MF70OSM51GAk1l1w%2FCZAS7i3W4IHNQ7cP7d7%2BkFdLvvH7g3HfffE9p1BqHfdjfCjhW31OXR%2FxGflyisp45dshXuU2Zzo4qr9AiVE1zX6suiSaClv2Dn%2BL%2Brlw%2F48F0YDB0ioOYgd2ZaXgRqRf5SL9L13HU9RXUSFJOpE%2BAVaA7tkUh4RxJjG6%2BFJObFAC7u%2BRBrn42dccSJfU4UzjEdl5bPNHGF1XwlnfvDyHW4pbWPIo%2FLZlY7%2BX2BXbjYFlRwqs8WM7e8xhAqc2XQXXJcu3tEyh1G2QzBU71xinIMhIu77ZLhaKZezHf%2BaWeCqbd9JQbLH29FUg6QW8YnDVj4%2Ftnf8yyMGq0KlGCOcyuScW2Dva3vS%2BZjhzeocNCwlKAyvVRGbvzZ3bzEBBjtyJk32NsyY1MVMOuG1sAGOqUBNj%2BgzDBxc08onJSNwyx4XoxjU2Rxlg8Ge2KP3%2BAswxApSw%2FY82w5RAFNGlu55meR44udpk9CGc0kwLNfNkOn3fyd%2B%2F5dSwPUxoKUI%2BaqRKNNkSye7Nq%2F22SjlanGIPLPfTQVp5sBhZ4I7kXV4TbonM06Z%2BuFVosoJ%2BIqaTHWRdC4iH1FCYNo%2BLQH%2F3oS71L1wbkRSGbKsqHQeiytDkds6gyLOiVk&X-Amz-Signature=50adb52c274af7e2d1cf90c7502aa28e7a784eb23060ac8cc3d72c2e14f8a3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTW45O6O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFAWPM7SCQT4Tl66RxS%2B4yKu4eTTnIL5BxFNSxoj2f1kAiEA4wa8U741bE%2BdkXX9NqOhsQz1K07WqFTRB9g8NJ7y6y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSq6YlBsd2BFhctfircAyYR7Vt6J12etFYMoNpESlUNQLEqN%2F75eh9ovIGh5%2Bl5F0%2Ffx%2FquJJDGgUcKHL3DK9sn9GBMg4bMpTh6qUMVFoX4D1tETC%2FMEqJAXI%2BeZX3pMR0ETOygj9wG2w8C7vGi9YFUlAMnQ3jzokBF87EKGerDdntoLHlyMaUv2ypV8xtyfSQJKh5ExzzuvbkgLloITqLUW7fk3XshasHBxciqe%2BmAFdeKZxUv1MF70OSM51GAk1l1w%2FCZAS7i3W4IHNQ7cP7d7%2BkFdLvvH7g3HfffE9p1BqHfdjfCjhW31OXR%2FxGflyisp45dshXuU2Zzo4qr9AiVE1zX6suiSaClv2Dn%2BL%2Brlw%2F48F0YDB0ioOYgd2ZaXgRqRf5SL9L13HU9RXUSFJOpE%2BAVaA7tkUh4RxJjG6%2BFJObFAC7u%2BRBrn42dccSJfU4UzjEdl5bPNHGF1XwlnfvDyHW4pbWPIo%2FLZlY7%2BX2BXbjYFlRwqs8WM7e8xhAqc2XQXXJcu3tEyh1G2QzBU71xinIMhIu77ZLhaKZezHf%2BaWeCqbd9JQbLH29FUg6QW8YnDVj4%2Ftnf8yyMGq0KlGCOcyuScW2Dva3vS%2BZjhzeocNCwlKAyvVRGbvzZ3bzEBBjtyJk32NsyY1MVMOuG1sAGOqUBNj%2BgzDBxc08onJSNwyx4XoxjU2Rxlg8Ge2KP3%2BAswxApSw%2FY82w5RAFNGlu55meR44udpk9CGc0kwLNfNkOn3fyd%2B%2F5dSwPUxoKUI%2BaqRKNNkSye7Nq%2F22SjlanGIPLPfTQVp5sBhZ4I7kXV4TbonM06Z%2BuFVosoJ%2BIqaTHWRdC4iH1FCYNo%2BLQH%2F3oS71L1wbkRSGbKsqHQeiytDkds6gyLOiVk&X-Amz-Signature=922b3a8d4b07f15f44e9b50ffba8bb9abba8738f563e412aeeb5ba8c70cdd64d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTW45O6O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFAWPM7SCQT4Tl66RxS%2B4yKu4eTTnIL5BxFNSxoj2f1kAiEA4wa8U741bE%2BdkXX9NqOhsQz1K07WqFTRB9g8NJ7y6y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSq6YlBsd2BFhctfircAyYR7Vt6J12etFYMoNpESlUNQLEqN%2F75eh9ovIGh5%2Bl5F0%2Ffx%2FquJJDGgUcKHL3DK9sn9GBMg4bMpTh6qUMVFoX4D1tETC%2FMEqJAXI%2BeZX3pMR0ETOygj9wG2w8C7vGi9YFUlAMnQ3jzokBF87EKGerDdntoLHlyMaUv2ypV8xtyfSQJKh5ExzzuvbkgLloITqLUW7fk3XshasHBxciqe%2BmAFdeKZxUv1MF70OSM51GAk1l1w%2FCZAS7i3W4IHNQ7cP7d7%2BkFdLvvH7g3HfffE9p1BqHfdjfCjhW31OXR%2FxGflyisp45dshXuU2Zzo4qr9AiVE1zX6suiSaClv2Dn%2BL%2Brlw%2F48F0YDB0ioOYgd2ZaXgRqRf5SL9L13HU9RXUSFJOpE%2BAVaA7tkUh4RxJjG6%2BFJObFAC7u%2BRBrn42dccSJfU4UzjEdl5bPNHGF1XwlnfvDyHW4pbWPIo%2FLZlY7%2BX2BXbjYFlRwqs8WM7e8xhAqc2XQXXJcu3tEyh1G2QzBU71xinIMhIu77ZLhaKZezHf%2BaWeCqbd9JQbLH29FUg6QW8YnDVj4%2Ftnf8yyMGq0KlGCOcyuScW2Dva3vS%2BZjhzeocNCwlKAyvVRGbvzZ3bzEBBjtyJk32NsyY1MVMOuG1sAGOqUBNj%2BgzDBxc08onJSNwyx4XoxjU2Rxlg8Ge2KP3%2BAswxApSw%2FY82w5RAFNGlu55meR44udpk9CGc0kwLNfNkOn3fyd%2B%2F5dSwPUxoKUI%2BaqRKNNkSye7Nq%2F22SjlanGIPLPfTQVp5sBhZ4I7kXV4TbonM06Z%2BuFVosoJ%2BIqaTHWRdC4iH1FCYNo%2BLQH%2F3oS71L1wbkRSGbKsqHQeiytDkds6gyLOiVk&X-Amz-Signature=d58addd9f9a082bd20aa2d9d45b09ff227f565489ed7d45a257b07217bff1c34&X-Amz-SignedHeaders=host&x-id=GetObject)
