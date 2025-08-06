---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T09:55:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide: [https://docs.nav2.org/setup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

---

This part of the guide goes over [Nav2](https://docs.nav2.org/index.html) which is a package in ROS that provides autonomous navigation.

In this guide we will build a simple differential drive (tank drive) robot

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=65e84a7f0aa442a0ca0be7e6a0e052bf475c9656f978cb1c6b063c0ee5c1272b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=d95adf555da331495d764f34a1e058c8531b7e882b99e1fb41896e82c6bb27b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=c810ab7e3451155c4b19778ed009bc6ee1bc4a9a51f89498ccfd299fc802e82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## Creating workspace + package

[What are ROS workspaces/packages?](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-packages/)

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node mbot_pkg
```

### Building 

```bash
cd ../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## install pkg

{{< tabs tabTotal="2">}}
{{% tab tabName="Dev container" %}}

If you are doing the Dev container setup put these at the bottom of your `Dockerfile` in `.devcontainer/Dockerfile`

```bash

################################
## ADD ANY CUSTOM SETUP BELOW ##
################################

RUN sudo apt update

# Rosdep update
RUN rosdep update --rosdistro ${ROS_DISTRO}

# Install dependencies
RUN sudo apt-get install -y \
    python3-colcon-common-extensions \
    ros-${ROS_DISTRO}-xacro \
    ros-${ROS_DISTRO}-ament-cmake \
    ros-${ROS_DISTRO}-robot-localization \
    ros-${ROS_DISTRO}-joint-state-publisher-gui \
    ros-${ROS_DISTRO}-slam-toolbox \
    ros-${ROS_DISTRO}-navigation2 \
    ros-${ROS_DISTRO}-nav2-bringup \
    ros-${ROS_DISTRO}-tf-transformations \
    ros-${ROS_DISTRO}-librealsense2* \
    ros-${ROS_DISTRO}-realsense2-* \
    ros-${ROS_DISTRO}-rqt-tf-tree \
    ros-${ROS_DISTRO}-foxglove-bridge \
    ros-${ROS_DISTRO}-ros-gz 

RUN sudo apt-get install -y python3-pip \
    && sudo rm -rf /var/lib/apt/lists/*


# enable extra quality of life plugins
RUN echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> ~/.bashrc
RUN echo "source /usr/share/colcon_cd/function/colcon_cd.sh" >> ~/.bashrc
RUN echo "export _colcon_cd_root=/opt/ros/${ROS_DISTRO}/" >> ~/.bashrc
RUN echo "export RCUTILS_COLORIZED_OUTPUT=1" >> ~/.bashrc


# Source the ROS setup file
RUN echo "source /<your root folder>/mbot_ws/install/setup.bash" >> ~/.bashrc
```

**Example:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=c72d0f1995e2605eeb3320bb93de1905081b73e4139ba60876506cfd261b11e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=ae86b3eabdea8f59e17624f052e1ff1bd210ed8bf0584bba66c54e2ab0bc7433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=ebb09e43aec7a1fb6a28c31e7842dbec1a8618996b488f82439b12ec2c70da3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> NOTE: every time you do an `apt install ...` you need to add it to the dev container to make it stay permanently

I also recommend you add these extensions to your dev container in `devcontainer.json`

```json
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-python.python",
        "VisualStudioExptTeam.vscodeintellicode",
        "twxs.cmake",
        "zchrissirhcz.cmake-highlight",
        "Ranch-Hand-Robotics.urdf-editor"
      ]
    }
  }
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=13dc84bcff39cf857d60d3eb4bda19d42af388d532bde5a11f5b1ef5053df9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% /tab %}}
{{% tab tabName="Linux" %}}

Install these packages (if you are not running the dev container setup)

```bash
sudo apt install ros-$ROS2_DISTRO-joint-state-publisher-gui
sudo apt install ros-$ROS2_DISTRO-xacro
```

{{% /tab %}}
{{< /tabs >}}

---

# Building your robot in URDF

make a folder in `mbot_pkg` called `description` and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=fcdb148f1fd13d3afe53c1146e5f98755d44a128f7e4612a546932b270d2da8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=001cfd1e8afc844912772aa916a5fcf5806c6af2d30beb40978527b958aab69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=4e392f3e52c7dee39c9213c3210ad576ff267a12173d985d7126b581896458a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NKJXH5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCpt9d2pSwmEEmQGJSaoRF8s5QBZokg5LWVLHLmlSj0kQIhAI9gXinAa0WVuDYJCzLYGhNR4UPAo%2FaQ9flH%2BE7aieT2Kv8DCG4QABoMNjM3NDIzMTgzODA1IgyZpnl%2FckS8W72PHQ4q3AM5ZttCujf4Le4RqKdUM%2BKd5cQADgVrnKVTyyEngit9LppMIHtzFdYaJO0vmrM4EQBgR%2B7rdVREKsso4JCj9twyDaHsCclzaN3svOWuB%2BwunCRYScPL5POfUbB4a%2Fatmxc7S73VNkO730NMNx3oBziMP9xS4X6gLfYU8IqDH0%2F5em5eMaRk7BQ0Fv3eyudQcfPR88ADosRVg8xc68EXwoF4lsff14QEKFttJz3Z6Kv%2Fcd7dnHPBRwD9dZTg8kefUMx5o2AaU9%2BxWl%2B8IuBFwMuiCo%2BBHNQ%2BnVQOSMwcjtrlOXX0eGIO1VoMVftmXGAaXNLxISy9WwjL1zTY9qLEHWrSE3b3rwcPgUpuWTzdA4ooVikWu4gvOTIsam61M9vmDO2gxSgAA49JX3CCVBUhBfe%2FjmkwYdqNnQsruzG9ZcD9H8e1Jp%2Bon0miYo%2BU6K9flQ%2B9CFJgDk7d5vYjqPTHXIlbf3jYBTNImmsVs6XeVJyiR%2B85zmkHLHMDiX6fsP4EhxiKwxUURlQO7nWmLXPTj5SS7poYbc3D9KPy33nRU2J6GmqXPJqpfg4zgu5vGdoqEFdOy7NY%2F7pll%2Bu%2FdHQ36N6JuS7r3XONUGjFkqHnR%2BCeWiLZh5ULaN9jU5YO2TCIy8vEBjqkAau5PkD5fRH16XuFQ7TEv0KatyUQwz5AMSLoPjp1K0qoDLpdDyw9mCc%2BS71wQEXkrnEJvmqLLQqIhr4K%2FTm6lYY5dzQCyWtnG82Y2cuxCRymXH6kqL5bUnxpWtPWGlUIZSMRnbdD4qXo3JdxeqA85YEwvuuq1a%2FMZXz%2F1bkOvBFLcdQZHcFID3Lw5zgKJJZlU5Bmq9pJldT2KtECOUZk7jaJECUH&X-Amz-Signature=e3fce429f55a20038c2025e4e7943cd80b0b5883c8cd5fa0e9fcb4eba5fd97c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">
  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>


</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJSVUBHL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCPWPzXgAHowzGeiGNnYI0nsDoM4rvRdbgL%2B335fNSTMQIhAPj6U6TxyJTlqX%2FV%2BBx%2Fh6LKlh4GHEusKtFn7GS1%2FSQDKv8DCG4QABoMNjM3NDIzMTgzODA1IgxdbWMCjYEB%2FoDDZ24q3APIoFNoxOLq7eWF6DdMgcpc986YWe5LvT3q1hfGD%2BFP%2FkUMePmObH6qqNmUW0XjIdXFzls%2BgM4nKMPSr0kVPiN1DKGXSfW50xBnUxbwUberSZzfOkxF6Y2qsU%2BN%2FF%2FFyk%2FJ%2BzuhQzx%2Bn1l2c7YketMaU%2FewyAo0YhA0EUfR4EloPlbiAhVU4GAv9vtijN84OVXTZJJQuG3N6Ah64MHWMI01vPA4HMy4J7eu8SB1%2FI%2FPpr2T%2BkRfGwDex%2Bcpm4jokZ380PhwtCQRXTBPazEP6l7Ull4kwlkPW2Y92BUR2M6xz9uAugWhAD%2Bx4phC2oUXyJq%2Fkx4x39%2BetnafveplRBZAMk3rabX6MDy69fnYHdJSFjq9teFoYFFc2vCLj3TRFEmfHUBE33UhXptV8aZwQH2IYv9%2F4m%2FIDOCIvxHngmCZF%2F3iyTBQx%2FpfXwl1nwnhIKyhl6wdg1mM2eXjkM%2FaSIH1F0Ffz8F4ySDngEoZ2LLi0Bc3MMCvu7rln8qghwepek%2Bw1cRBWN%2FpQCAvMIjDE9HZoG6Iabm3ItMgYxHw3g120mnqlbryH4%2BSj6H26KrC586x6GJrqdKGtqKVXd5lyidjZen9PIwdhgkN083nb6PGbI6Gor%2F7LWcz114CvzC3y8vEBjqkAbuhy5K9IGnrilRYj0OJToqSWaKU6S6vIlprA%2B12OmlvEkLazCXh7tE6a%2BaGcZA%2Bh0ddXTMRB9N88sK%2FghzptgeXTEFWjjafy45MHY%2BZRlgqJ90C0TMOX7foVshkdG2ve3%2FwxeZ88gTmUatyXMHgES87MXGgmApB2VvrkpBUZVD27pmELd1aeYQE1jid2%2BxifNybIGfiU%2F7ZkJzSdqVfDKtpcnLw&X-Amz-Signature=84279d9cb2dd1aecd9b2806bcaefe0914075b7b96095b90b338caaec8c548a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      `base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.
  </details>

Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFJLERTN%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDFjOQT80uu72%2Bk5GHI04NjhOZ7W%2FSbYx6dFEsKv8S5gAiAF%2FxnLwfrLNxC9lX9OkdxJjl9RJadSyo008XCQy2xgYyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMmFdhpwCouumgRXJPKtwD9aO502TcrlGpn0BU8G6TOzMyfTg6KcynHeaGO1UfQngn%2Fm%2BlH3QuSPNbPB4isGqv%2BaaV3mbJHD8aQ1RRpo5s%2BNZ5k0XwPz28yo91TFa2Fp3CEBVaMFU85VV2zHLOhO3KZI165MT1T%2BrR7W3eqvzVo5CVrS2oTDmLw4QELUO8OfjjjunCFSSapMrHPYTXqTIKOgKJxcofUMcsx5J7WLr2bA2r4FZJEynwWhx4GLTem0trSgv7wyGuuj5bJcisYI6s3L2bHGFCpSw%2B3Ic6ADzlEfR5oalsElmRiTb7Uz1Y1AhaiVrdnTtgTzlIvi3952U8PzfaCuxIHZymPEbZdb4stxyV6hox47ZxowTPFjn3ZQPaQosOt6CdSHyinh%2BbUseoePAWFIsg%2F2z40W%2FAU4RQKHLoKKSuQDiryHB2i8lPERKKJHyoIZCEAI8cKegZX%2BghYKGCrs2%2FLsa30M%2B%2FBmMXpztn%2Fq4%2FzzqgMncdFXKftdCgMooGgXzmlVQuV6erpVjs9BB%2FJg2luKqb5HHJ8S9NGSBX%2BO0ZQCSP8PhzoMhxni1FuC7h5crJJwQs9I55w628FjANd37FbdnTKj6fpfI%2BV2%2F5oCdRevbHb2OoNOJ0sH3M7M085KpuCmCVPTUwqMvLxAY6pgFIBAgWoraWONsf%2FgvAIDC9Gyhro005My9J%2BS5WEwDfk351d1RLZQjOK6iF5JjVbpSsdWYVNTYIN2ZenCies3YSYgd7NVkIyaNEBc2cgrofvopKsk44xndeeHmsigAQp6hohqH11VKp6RHgOE1mZPOUPDQbqzcnCzC%2BemxWU%2Btpr90xhGGVBr3zE9Xa149ikbAZrzO881RRmjdigNvrjlQwdXzrWsey&X-Amz-Signature=00964a1f75c034c366efa56d565ba35d16c311f767fb45b618b8e55cc1ea32d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=1fc279a518efeb1b73bd25c4a38a36dd898648d2c4075c7ee935792019c8b105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXS3WDX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFQbSRAx4NasZ9mdL3ZBtikss7w85ZRf74BHQNdO7qRKAiAxJB68q%2Bjb45%2ByvUAaG0kor9UdXi6ivVDOOVS4DPAeXir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM3j2N6xCMwvFJoqUyKtwDxdnx6Wj3Dl9AH1UmLzYvfS41k%2F0p9cQe58d%2BTclfk0bVPNoIAW%2BYLBkL9HWbZjpQQ0LJtQ%2BQeKs2SgUUWuQEX7VbS9tuCjZaU0J29s3tIzP74Ky34fh%2BmgZs5vEmmwvUT%2FKfpnnj%2B9rqBfszWw4lUCp%2BP%2BVV2wfJsv1Q77s3O98K8o8R0XDRQC%2FY9c2Bg2dI7oCMGsuulWXAeKXPhxp2BAdFqZaO93PzdER1zGydDgH2AkGyMboqL6taSvDGkLDVxoX5hNapE5f1Y5Kki2N7lEh54E9gL4yt7PI6xoDJ9o%2FwUAELramh478eHeMzaEfjQeMWcektp996uaVBYIRSd0lRcJg0IVLih40A7JwzXyVeuvuNpF5sX9ZXgMtBE2R8Gk%2BYqRtYkFD7ZynhjovPz%2FNrsyIZzsYiFdWvifYN7KDYMRd%2BxwMfFPxZ4lEGU%2BB7eGbgdOibroz3egQ9JmKI5PZqRrkTTRrxiTv8JPtch3rYEtVcjWPLhuHA86JpDmscWMVlZMH9DpXFZ%2FZANDVXk2w3gURfUoNMcr6AZccR9PaKKYsQk5m3f9aTYoJv26oKi5ysJiWQ9rE2nrzJ3Tt8wvOyU1tFnqAperOrAB%2BmR6UVBvEENTC0pjI2td8wusvLxAY6pgEvDeGfxFu4NSRlqtImmXLWrxdO1rKvojhdcjVMfemGvDjdFyCD%2BnSQK3CoUtcxS%2BYmTXiFtKMk06Ndi1PlSRefa5DRosaEO79TLiXHUp2HMO9yD6Uzzn6l4SxgTJZmwl%2FWEUv8fk1LXQDDk8tOIDsOuUJk2McShEGCD0RzsD33R2byfZZJ3DetEOBu7hdzpvpX28yTZYx4JNezIzw1qqU9qd3hfEq4&X-Amz-Signature=0f8773362ae89c2333745882002843beee8915e579661db54b9fa0876a66fd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=78b101399409aa99c5398b9363e89e4d3ec8c462a5d6fb3771d33baade85953a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HK2K64%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCd7Clgpk5h6ROa57rfhI%2B9rXvGb1lzyESua53aGWo5YgIhANSwlJjwwxAnO07yFzSs%2Bufo5y%2B099YV0GhaI01%2FxxquKv8DCG4QABoMNjM3NDIzMTgzODA1IgzG2CpKwp2aZehAAmYq3APhJ%2FPAGNQc4h1h6K6qWpfYFQHUZfqE3%2FHg29HWmXVX48x%2FTebs5PVwrbT0Dgyg05n9QONh%2FrKiRCuh1nsOhhVsTrgjOGZq3dpFi3RrKqluEquU1fTSZcLW6l9QoBmUu5oR%2B4MMyl%2Fk%2FZXnM2AuwW36UOb1Y5y9MN8kfqO2W7OdvBf9L4SBt0h3aJqfGm6k%2FTnL56VcYl4HKubjxSlYgG%2FB0Txa49ExY2T5nFsy9RCImGBQn2F7nxkRvc37jat3iO7%2BYhsv4R7tNRuJOzgNuSb8tHbkJ963ATgCIEXRVWwWuacwNbekaM3%2B9FWDTrjpf5uqeZZylcg5qs9KUetyX7yLugGSf97lj0cyy7DGJVym5MyWDnGks5WGyxwmK5Npifi1eIUIdmPIJv4Q6iJZFPyRGAkxa2XOYv3xXQ2wiP0Fyb2OtWKw6cd2IhOggOxPNEee4uozeIQ6xz9%2FDlaXUzbgFNOj%2FLNgUeCAtPk%2BdQ6W4hDlHzVHhpQSGG50Tg%2BrdJ%2FnNzZbaK2yUqL3HIssuib4hXCW3FOHx9xN2kqgEv0Lb%2F3o5O%2FvFi7eGa7ECB5BpRSAOh%2BQb%2BoF0XOAbl7hh6nTDXcbiaoMifsSY%2BVRATu8cfHi86uKRGuKy4TzIjC3y8vEBjqkAex6MgB8P%2Buvw%2BYGj6oZXxLEGt41OKFLi8kJhqVt8q%2Bb2lJ5DHBx79hqV%2Ff1rxnDCL3Gg3makAfYlwgZKd0v0ebbDEc1S48Z37QBSYD%2FLWY0Sx2c0KTMcWGEuR%2FmyQp%2B2adSy%2BMav4K3yKLcJdjODpSktcV2%2FQL5n1fqFx0wHUZWN7O1IISAf4vFNbEVza6WhRVPbbxowJD%2BNzRyfl7mBPi6c%2Fnk&X-Amz-Signature=1f27d5d8612de98934d9a9542887df96d7774f01c6e7da638cd88c6f8eb3d52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=0d67aece52d66c6d3e38b8476dbebac05d495461279e3e3e954b02b5805cfe33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPVHBSS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIBM3mMfNzHjxcCrGPRSRb%2FV3sAtwTbfmuHBxPFRGo70nAiBn8YFPtToyVREKjsviOq4WYYVwTfG5JuGrbw4%2FRM5JQir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMWeJFEoNLEtO%2FvmJzKtwDH7Ri6suim5pzkUYMdojiPfLfnpyYjZR%2FMtS6lswFvlib3%2Fuve%2BZsOaK3feV9d%2Fic%2FhpXqZ6P21mXXMMwmJ78%2F5q8rszlRR7BnY%2FCwnG%2BPbk720RuxbUDqPzCES3rfGyefhFvPMLkU8OvcYcRZHDvE8zwBpZFTKssrfW8x8%2B0DPt8KwOvY8mX5Pi5OVikzw3aZh4YWixtLX5yGc3ujq%2Bu232%2BWkT1NCn9dDTnfGD6JUZlrrADcxKohLp82l5CHzzDySc7JnAM9%2F%2BiRXVXHvdpSagSwQsNNk6oWcDr4H5miibA5wtOi2WkbFraKRwLn6oTQyeCHYtxKPPuhAAtaa0AC1PvOeUMo53IvzPdVbRpHqQOXHlZKuH0%2FTYvh2gtEhxFtjh%2BfvbNUN2JVF9cmnTdlxmGLIWs8XNHOJ9tTdr%2FyN8%2FzlE%2BL11xzL5p2hz3MprAda6oHE2gWnxN34lVE4XP9%2FsiuOvWQb9VwIfYx2FJe9KHtcaTERrvtKSzOogEK8qpkfzN4uVHf9IqnD4MxFXZw9a0EBQ%2BTUpD7in2cWOuKsVJmfsOXNZ5eBD3oggytvkd7TKfKRXsOQZykA9MEJRX553Lm84117NiBvlH4f4A75rJR1GWkvzTq%2FDzhZYw5MrLxAY6pgFnJSzAxAfD7KMSGdeglybv8XQv6ahbJihnGc2RtWzLT1K%2FgqvSMRu1r1OOvxJtovwJjUOj0R%2FX16tXMyXw7Nu0WV4vcHsca%2BmOUZO2ILYIstEU0IpKRv1JIj3%2BmverbYKpdcAeKo5B98v9Q8GOaMegQQY9oEqLVGhmUWbdYCY6rlcA7z8KqkTzNmagKG0DzUDdQfWEwCAAEm%2F3WD2mOn3CevpWZBq%2F&X-Amz-Signature=51212f96288d9f2dde1f12c8107ee300a13bac566386ccfb19ae0df3ba85c07b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=4c8ed1f0810a7afba66888c6cdc06f715ecd701fcbd1764ee5a6a47757f3d3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>code up until this point</summary>
      <div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">

  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>

  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
  </link>

  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>

  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />

    <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>

</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6IPV47%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQClc%2BtehZ%2F8zgNnIRykZpJJsuvCTkwnAhCfqEIZUR7ZtgIhALcUfxpFRqfhD%2BVQDupFCsd%2B%2B26Bu7BKaLjw7OJHMt%2FtKv8DCG4QABoMNjM3NDIzMTgzODA1IgwUXa%2FaPWWTyo764lIq3ANouPBR9hizqCAYmKUktALKp2LDrdDkp7dumEICKkeJCSMRMtxAp2uEraxyIxtoLghyCMbD2GQu%2BgFPSHBPx4xjm1QmizjJBV0yWgc4wqPd6DTvzZ5SA673YDYe%2FpcZtJamvbmllWD7ss%2BViRu1OBgTe1P9%2BzyjPKXw2pfIFANFDIpA4rqH7m%2FVGktE5qR%2B6iWAAjpv%2BNKzVxjgCBzTB9Gq%2Fr7I07XHa9qNvVNcsX0DxPvqmi7kA64qe%2F%2B7l5e7dfvz23O15lNqdS9L%2BN9EnEQHcQl8twTZJZKCqlZgpj%2FWSWUff%2BcywUL7QwavxUX3NEOG9doq6uSHKVeU96ikAELPzMCeSoldizvJspXv2HsnAnrfEbdbra2q0VQ9Fl6wQOZkZ7suMaTYM%2B1OmmavnvO2XkZ78FTTBNAgo6YC%2FfHzjtq1640MoeE5ZGq1A55IFNpnFho9MDZ6PRLE3d14XMT6she9HK2rETRugxB%2BnmiZFazqSMt5P5FP4ww3J5Z8bKIFubSpqonA7WdCngFOI2Anhi%2BIh8RvLxYWWD3NkH1JB6%2FLCL2Jwo8fmylqmQ8dyovnr7X%2FczPq%2F08vYYel%2F%2FwIvb1TyEMkNisZCFrU21%2BXCm4pbE3KsHIlMvrX0DC9y8vEBjqkAanSJGMQuEyw%2BevPhSED%2FyF5N8VTPDKYEhXxrEceUgA5fX5NzvA2oJGsttGmcFgmSBa7WVPod8YG0Ri7TEysbZ%2BJs16hx36zSmV9wuBatjmhRAyXZpTfuU%2B%2BC%2BrFEAI3HQZkzlGUFQ%2Fr%2B5a75mWmZXCqJfxrCAS8t3TEOyAfLT6da8Qt%2BOZvgNbf3AM2fBC8E42zTgDhXWDQUJjYHBVSksiHTbm0&X-Amz-Signature=cc1244c56ee2a6fdf4fa7eabd2e73697f94c4168261ed7f93dbd44bf95bdc2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Define inertial property macros  -->
  <xacro:macro name="box_inertia" params="m w h d">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 ${pi/2}"/>
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (h*h + d*d)}" ixy="0.0" ixz="0.0" iyy="${(m/12) * (w*w + d*d)}" iyz="0.0" izz="${(m/12) * (w*w + h*h)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="cylinder_inertia" params="m r h">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 0" />
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (3*r*r + h*h)}" ixy = "0" ixz = "0" iyy="${(m/12) * (3*r*r + h*h)}" iyz = "0" izz="${(m/2) * (r*r)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="sphere_inertia" params="m r">
    <inertial>
      <mass value="${m}"/>
      <inertia ixx="${(2/5) * m * (r*r)}" ixy="0.0" ixz="0.0" iyy="${(2/5) * m * (r*r)}" iyz="0.0" izz="${(2/5) * m * (r*r)}"/>
    </inertial>
  </xacro:macro>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMTA6LTM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHrthj2T%2B2iGcCwuytDAyj82FKLfg0y6hTZWirHqwGPhAiEAiL50pnzu6i2mwz%2Bwui7mcv7hfIzGXsDU3%2FU88Ukous8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDD66CgX2vRBibcULqyrcAzceJPhml6VYW7wY1kD7uU57RM4M%2BMm9NECC4mWAEIkM7suHzeFcTqEHBCNXzY3pidwd%2Bg3xf4yDd9yJtuuPrzEsJcShkZWmQ5i8xKoE1rTzonknqkUA2tT%2Fz08666dmGOfy2Lqfa0ZAwItr0LCI0w5EkE9MhLrmN72wAiqSfWY9UUMCTYB3I3funsow2dsZFeeHFURZroileYNwVj6lHVn4Ol9Eun4bCSLVPafi%2BlKvnO9Qyn2ymjk9Q5XRihr9zoUbeDSLETP641RbvXrb8w3RBY9LDm1ldBbb%2FoTnnmZBqNSqm9nOoNr5HG5YuU%2Bg7gbnM3lyrrvjoJaAppCcs%2FB3MGknoUvpzWIJdJ5r1ZndPw0XRDiKzV5K6e7LCNjO6eZIaGfFwmweTaLyO9nJFM0tfKLwqhflTPsttMd%2FQfXseouEbdO%2FrlUiBVvB01T3Rt0RCD3%2B0zgG5aqdTZUL67a6XPPUdXCHfSF%2FuYGXaXgbHztao2bcB1bh18fd88NOYFdJo%2Bf8gk7%2FPdgYJLSWyKfHaYm8qBVA3ChbPkSg9l%2Bb9lcXI56XRK0FV5G0x8zxaoqXIXJq9m52uyBB2TTOeQXG2ER%2BbqL%2BAs00TS6hb9ur%2BkOZCVTv8vCrc0SsMJ%2FLy8QGOqUB80gARUaWu9ph8gm%2F%2FBuJMFViTQ2zxzTPhwZ7nYW4oXRpWsgLF8DzQ3m0Yau7ZfmuuDUUtYZTKQnDIAj8WgJrLcPwfAElZD34U2%2F3NnC7n7lISeSDDIZz7Rm%2FdBWW%2BynD2t1ukm3VPe2REXLXyFoEpyG9v2tQem%2FWKOtkfy7bz7jjByRsIV%2BUzf2QrIwESJfS%2FiimvldPFXfTpEV8YJdVqz1qvLGw&X-Amz-Signature=a3dde44a6ae13d44f135adf8c62a1c43dab52955c811e715b30d673799cc64cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>
    
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>
```

Same for our wheels:

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJN3MJE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDI%2FIKciTmy57JRJJ2s4ayKJvuFT0LJaMx0Myerp2WZVgIgMTrJxUJ3JI%2B9bmTnpmkC1786W6ktH1O4g2b7ibame6Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHKOYZUfYj2deZH0QyrcAzztDLM1YMScHBpgUbiAK%2BwhvJDqc6%2BvfmnipvsZBcjkVmjEfGJeP38%2BKkoYFDJBSn2ND9YA7ha1KiNyiIrMIJYKJ1bqNTK8J8tWCj4hOYLBMCbjAf3w1lpVDEB%2Bb7zSPrhBT%2BqFzFgAwcpoYdNWaIOeVI1DrByl8UyyQV1RX3PX9R5gs6efO%2B2n%2B0oNNTvRf4pdUXPToUus33hisvQTdqD90J6px7gXS0dlyCy4MVi4tKgATDIVnXB1QZI4aiCluLTSjxU2hFiJAedUN%2BBRbDQ5AXBXG1rYYABn8JbsFXSljo%2B%2Byt7YQ77d9i38%2Ftu7HgznDpPV4O%2BuR1H64ThKmTSkEXZnBQEjC1IAi9jypr8ai5GDvpuv8r5EIiC1GbMuJ6J6BfQ3Rg%2B09DQi1jBGmo8gT7IngP6JcnFDhTabcEPNCQM68tKdhc4G9aoMMweMn3%2B0FBbuQD%2FviDs0jSGamNDGkuTJM3iw8%2FjYTfZ%2FEgPJVb%2BIWlDYabIp%2FXgGDBhzH08r6K8f4bZ%2BhneAFEyotE3yEzRx8JbMn5xwnxWK%2FS2f5KeWeLTJ%2FaL%2FU0X78uBIFTFoGjEbQ8g9zsDTIFa4M3XZ4KfWGGc%2BD9uZooa5RhJHpDJQFjUuRisSpYc%2BMJDLy8QGOqUB5THOFExT7Rd9wdMjSORIgsn%2BCrigJnthKoQwdUufSBl6aJzdlLQbxFOM1QD4OGzo2qKtGpCLkmY1xsuQfTmeAaBmO6stAXQwqdsyALRq53SCiG64RB3PnW%2BuJTinYxp%2BUlyPt2cmOvMfH413DjEMeJRl%2BxdqCKuUQKlM2ElJu9LClTORhTnp29u3eVZZhQt43C9OGtipi1u9YMIIO9MBiHzHqPUp&X-Amz-Signature=8385c5a33e31d403f1c1df35c0109428540532c46432f265b3d8c03fa4cbc68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>

      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TONKXEQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAWAx7Fn4ySIQpXkdW1AElrEr1ZU8DJxhBiXDxg%2B%2Be3%2FAiEA0gGfEnnnPfwW0hCDZEpT%2BJ3oSnLXADh3f5b%2FshKUQWAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ54VBwz5h10TlrsRCrcA9bjwdCg6203epMg4N03o%2BJyhil7g6T%2FlbNm0sdRilRfRTiRS2jjy%2FbalOxnoxYmSj1EhZ4fa3FjqRdbelT99E50ZLU1JPr6lTsTXpHWe8Tv%2FkoQanK4ossZAarq%2BTUNJLkC99r6JWM%2BlPUfzRcKZc1cJszFmBfMq1dKH5x%2BEEl%2Fxg%2Fx6osgHvI86SWofVFsWYXatoGjnre6VKcPYqyO1raNakhs1C%2Bt3o9BRtcoJ5MbnoYsTNus94FIAFLCbUliCTBunztOmB5x0EEs7wJ00PRbFA815g2M8STVoMgu6SnTe5yK7FHDTrtQP11qnfU9Bo6Y0zRFBLUGaQce5j6OvQH7ImOZqyi4pULw1sGx%2FOteZRmqezcQWVc7iZ%2FuSQSHobJLOdr7VcAQ5t6ba8g6AJPmEtyXlHLvv66bBX9EWKZiDRCGXUZO4XNkAHESKbJ%2F8sbbJtv7pKLOad7XBkn%2BEIrPNAhj39Gr3Ofg6VYdGdhaYh0Pq7lxUV06I92oKkW%2Fm8tqOqW5M%2B9wA1vNdhcYMklFxFnLI58RQxKAHrijt%2Fw7oadnNV7DtxL%2BFWdmghbxdzkSxU3nXkNNdEwuZXkITp2FMJNZsjqvqj7RXky50%2B%2B%2F5UaTilOQbLiNwab8MJ3Ly8QGOqUBsdVgyqPr0B5FaeDym2a4W%2Btf7ZoWtwUhBSWsoTWkvWW298mCY7ctyHfFUrkDTXHGIMmgOJ7Qs%2BbEKXIIi7TQ6FS3jb89pvUb4GFedt1j27%2BLG%2BQ5Vyb7ZFcnfyBZmnvKo5i6Vvj7ND%2F3g3j3akItdOEi3hCErTaYNAzrUqxcMnFjoyE%2Bu5mOGeoxouxcfK%2B0XH1yj1TPmz74hk8olLRZTpuflrTO&X-Amz-Signature=7fb989d519285f46620321eb1cea322e69d18abae9763e5ba8e03a064cfe7298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
    </collision>

    <xacro:sphere_inertia m="0.5" r="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUVFMW3A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIBDs%2FYIHuhMxoQuXlf8pqI46D1VG3bNH%2BZFq5TM7a4JUAiEAzEHWG4xjVlDtnE9yl5CEAlyIsFsVY3TC9L7m8PAwkyUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOkoRcF7CUyVpEMePCrcA9GNvGuFxqKAaNEN75w58O6mn5%2FjJl6VibSXZpsEXKm74ZW7CPBV0pV0NNOwpuzPoCXG%2BOENFZ8rzeqNPuhz%2FpjfteJC6n1qVcYuMMNr2I6XzJAnhRzXuUfvGLUFSXCyY5dT5Xm5Opc3VdqxM3OhGLUW7Uj15fJ7v3p11sI%2FqOLda10eLsFPHBT1r7hXvaqFI6Fm58Rmk9FBDizOyKnsOP9p9jx4hbTmKTzM6V0eyrWtPXEL9DhWHWWwrs4%2FuPMeg8eSQ4q9%2FooBf0yxeHTRKDlaFqiPXnE6yS6L6859DMoNBMBQTqIwRw6wbUNXZ6zbWXVf7DVGSxkwHtHhKXrsr71mHr8u9U2oUy7DxzdwyC0kmgRWqWB5A9SWPLHKG5KziDXhJ76pwa%2FTs%2FT9vjsSF48PbU8O3XoB3Fla1ugiZuYxt%2BLTYAlv3B0Yewd1U66fEtuljdykEgkwUBk19QzCEvyJR0WWlowoRlGCBL5cMm15w5IFCNJWQRlBQq%2FKhDzHTPRH2CwSFG0Wui8rvixKisJeNU%2BOMqaRzmzzFvjk%2Boe7EXS4xVk5RlLmPM7JvHMNtjM5VsDega0f%2BpFHkzPaasKarcH0XEvY4yLgEOjjJjQs6wTDstCjscxF6fGhMMnLy8QGOqUBXpcuL6dlV5svGpGsSOE%2F7cUCo0xqpOVYm7L%2FXguxkR8gsUq4M7LBkK%2FdPRi6%2Fj%2BWno%2Fi4ufkuwiW%2BT90w8uc7wrtej5E6tMsYrjmdzYuG2WZNI2LY%2FmpxRRuzCn1%2FKPB%2Fc0NZ%2FsygkpUgbgrmSyIX3t80e4%2F0DMAXatNORS2ir%2F6i2XdxVTHmPr4mSbS3s%2FR0CcPuFax6exPTMHjw4GVNGcGpr4p&X-Amz-Signature=f4c0e723580ef3776c11a575870279e485a061eeae5832dc36ce3f37cd5d05c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=cc8822d24dc05dc2b776781360f62101dcb874565db56646616bc6d69f71f044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>final code:</summary>
      ```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">

  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>

	<!-- Define inertial property macros  -->
  <xacro:macro name="box_inertia" params="m w h d">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 ${pi/2}"/>
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (h*h + d*d)}" ixy="0.0" ixz="0.0" iyy="${(m/12) * (w*w + d*d)}" iyz="0.0" izz="${(m/12) * (w*w + h*h)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="cylinder_inertia" params="m r h">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 0" />
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (3*r*r + h*h)}" ixy = "0" ixz = "0" iyy="${(m/12) * (3*r*r + h*h)}" iyz = "0" izz="${(m/2) * (r*r)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="sphere_inertia" params="m r">
    <inertial>
      <mass value="${m}"/>
      <inertia ixx="${(2/5) * m * (r*r)}" ixy="0.0" ixz="0.0" iyy="${(2/5) * m * (r*r)}" iyz="0.0" izz="${(2/5) * m * (r*r)}"/>
    </inertial>
  </xacro:macro>


  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>

  <!-- Robot Footprint -->
  <link name="base_footprint">
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>


  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />

    <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
    </collision>

  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>

</robot>
```
  </details>

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CA44ZQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCnricgYjNMtMTW7jEJm0h7shBxdBM015eESjE3b%2BhFQQIgeeHu4tGLj09PuE5b1jTStDETvwuXVXZBfhW4t%2BJBJBsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAt2moDy1OQb8cH5xyrcA7Wd%2BVC47CXQDqzzzXL1W5RdbQ%2FvK3KNkadeCDq5NmhzwF7klhsLyVsyB8UB%2BWSItSjaaVQN4U4aQZksoN1QEz5VeqNxeWnMQ4eHwuOqfttjhyyc1uS%2FMZM%2BAa2rytZEshd8WtOyXKXgjxbVs%2Bs3q%2F9plg%2Bf4zhsw0wXUHt9QjAtFfsFa7i9MFZKmCtlacnqBpCIWEoTgMvGGlyqkd40FiOQqVOd99aNDdfAhFKoMjW0Ns8QkfWuA19REBs%2FRrX5705UCYqPu6duz9u9XJHfrovZXf7Qf2Q46uuzTTNmwU63sIGGybqAHM74%2FDVB3ucZAFhDzPafCKr76KQ2AnsWvBwrsWodMk7VIJ60e8IAqAuWlvJNGx%2BtGqyh4L2SzgiEDBwTO8Xm68AJBjAjPHFEuvVJzsIp5Wl2bKxsgGIFQEbYb5UDCofAc2sSlLb9%2FzWuT%2BmGiNgOBQbtFBvbzN5WcX07B8c83EFPCm0U0TSDKZhqXwH1eNbiOXcQwN1yBCOjeAXcG0LkPy4IwvshYPJwy6ru%2FFhqcGu8LvRc5b5iUXyOsyONYENNxlBZzodOwtt4LlK4ccrzJ%2FA2f6ntMkYUeg%2BYFQsGvjmtUHezUWCwfq6DPKPovp68hNqUR58qMNnKy8QGOqUBzdYZmZG1pWjtCepbnW7FCFNZ2tsARFCoSVE8AlY9RwD0lxWU0FyFof1w8ZKAasSQCE1Z3KOxTwd%2FeVn8Kp6DIdAqAHlvwswXrTIRK29CMxkz5ZtIlDS0XNOVefC1ygErwveluXu2ehkhVZ4A3lktnYCbDp8wUI86Bf9hTZG9Aqsrl94vcg9xzP3CFi1tsTMnYLr6ExO%2F23ZZJSeWvjh8026lFca5&X-Amz-Signature=470c653baaa1e68540540c3c49780d7847eef04f56eed43f859dbc7af0d8e605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

{{< /table >}}

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUROZUD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDBDb92XE9mOYfNvrv8qFcdEzuk%2Fdmi2fIIM97Ern%2Fr%2FAiBUaVD9PPmpXgwzML46h00bOphiDZqLpgghQiZ04kqF7Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsHLZU7UWlNuKoee2KtwDXgg3OGX8pcBmxRTcByqhgLWZx%2FJqukX5%2FUhZYBGjC0QN9hUjCyoOcj83Z3e4%2FxZXyTMHTXE1vKZMURcOgGa8g22Is2M9MmdZwtrp447zVYkxxl0mte6T3ICPp3AyhEb8hW%2BEBABskraPUpPnhdIQhsmv561dCvCw8fOgz77v6md5iApR%2FsFMmTNmw5mHO%2F1ee0i28g82rWSxWnxX08j3GcJTX47Jf7TEx04DP0iwBgzdQRWEUk0J8M8f54Ys2YayYDhAUXzzrafT4JUtnTm7bZCcRSnpQlx9qKUnta5aR7y9K6bpug1YbFvgZpfSZvkyJ8dHHwtg6NE%2B%2F%2FOZWSoGHFz2qD63RERGPZZ6ggKKPjTlANmnxVhcOB0bD%2Bq9c%2FnTbW2%2BmZjmJn48onE1yZqR05DhHYN50pzXnZ3bnfy7OmAmHC7xkR%2By%2BNbX%2F6TiBNE%2BrrDT%2BubKgNWzH6IZNBUrxuCnu3JDL2tsVlXHinRq8aYzPq%2B7eNfI07MQV1tNtSeBozyvg2%2FramGBOjKMsfEhOC2e82ck7%2BV99eDWsDV3Xg%2BFQInZOvB%2Bpm6u%2F%2FPz68BkZL6cn28O1ZWFW3%2Bd%2FBPX8Yi00H7y0XTW2BSfOiuS8lctqOoC5AuYuzFFZMQwg8vLxAY6pgFxJKpv0W2taPaBtnhGKC1Onik8S4sCvzmW2BbrDG7elMv8H183ocXlI3WVIAm3H42GiTSfe7FTwXX%2FHnAehuA5z1jF1XaTbdoum6cjjdze84bxvGxkXPQVFVGoAVpLkRfbMLR8oqUnCdx53ey1pAXLFckfn1sICl88nuhqMBV292TxilzB71YCiui%2BSemhdfahBjhS9MNqFXlksgFuy0QahqHJYMkm&X-Amz-Signature=34804d897d1c486d8121c63f70425d3946f7f7cf54fa0d80f5e8689bc647733b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUROZUD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDBDb92XE9mOYfNvrv8qFcdEzuk%2Fdmi2fIIM97Ern%2Fr%2FAiBUaVD9PPmpXgwzML46h00bOphiDZqLpgghQiZ04kqF7Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsHLZU7UWlNuKoee2KtwDXgg3OGX8pcBmxRTcByqhgLWZx%2FJqukX5%2FUhZYBGjC0QN9hUjCyoOcj83Z3e4%2FxZXyTMHTXE1vKZMURcOgGa8g22Is2M9MmdZwtrp447zVYkxxl0mte6T3ICPp3AyhEb8hW%2BEBABskraPUpPnhdIQhsmv561dCvCw8fOgz77v6md5iApR%2FsFMmTNmw5mHO%2F1ee0i28g82rWSxWnxX08j3GcJTX47Jf7TEx04DP0iwBgzdQRWEUk0J8M8f54Ys2YayYDhAUXzzrafT4JUtnTm7bZCcRSnpQlx9qKUnta5aR7y9K6bpug1YbFvgZpfSZvkyJ8dHHwtg6NE%2B%2F%2FOZWSoGHFz2qD63RERGPZZ6ggKKPjTlANmnxVhcOB0bD%2Bq9c%2FnTbW2%2BmZjmJn48onE1yZqR05DhHYN50pzXnZ3bnfy7OmAmHC7xkR%2By%2BNbX%2F6TiBNE%2BrrDT%2BubKgNWzH6IZNBUrxuCnu3JDL2tsVlXHinRq8aYzPq%2B7eNfI07MQV1tNtSeBozyvg2%2FramGBOjKMsfEhOC2e82ck7%2BV99eDWsDV3Xg%2BFQInZOvB%2Bpm6u%2F%2FPz68BkZL6cn28O1ZWFW3%2Bd%2FBPX8Yi00H7y0XTW2BSfOiuS8lctqOoC5AuYuzFFZMQwg8vLxAY6pgFxJKpv0W2taPaBtnhGKC1Onik8S4sCvzmW2BbrDG7elMv8H183ocXlI3WVIAm3H42GiTSfe7FTwXX%2FHnAehuA5z1jF1XaTbdoum6cjjdze84bxvGxkXPQVFVGoAVpLkRfbMLR8oqUnCdx53ey1pAXLFckfn1sICl88nuhqMBV292TxilzB71YCiui%2BSemhdfahBjhS9MNqFXlksgFuy0QahqHJYMkm&X-Amz-Signature=d6180d28cd0cd8cc48227699a3ba6f85c83211c35f5f3a0e055eb0efed6388f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUROZUD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDBDb92XE9mOYfNvrv8qFcdEzuk%2Fdmi2fIIM97Ern%2Fr%2FAiBUaVD9PPmpXgwzML46h00bOphiDZqLpgghQiZ04kqF7Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsHLZU7UWlNuKoee2KtwDXgg3OGX8pcBmxRTcByqhgLWZx%2FJqukX5%2FUhZYBGjC0QN9hUjCyoOcj83Z3e4%2FxZXyTMHTXE1vKZMURcOgGa8g22Is2M9MmdZwtrp447zVYkxxl0mte6T3ICPp3AyhEb8hW%2BEBABskraPUpPnhdIQhsmv561dCvCw8fOgz77v6md5iApR%2FsFMmTNmw5mHO%2F1ee0i28g82rWSxWnxX08j3GcJTX47Jf7TEx04DP0iwBgzdQRWEUk0J8M8f54Ys2YayYDhAUXzzrafT4JUtnTm7bZCcRSnpQlx9qKUnta5aR7y9K6bpug1YbFvgZpfSZvkyJ8dHHwtg6NE%2B%2F%2FOZWSoGHFz2qD63RERGPZZ6ggKKPjTlANmnxVhcOB0bD%2Bq9c%2FnTbW2%2BmZjmJn48onE1yZqR05DhHYN50pzXnZ3bnfy7OmAmHC7xkR%2By%2BNbX%2F6TiBNE%2BrrDT%2BubKgNWzH6IZNBUrxuCnu3JDL2tsVlXHinRq8aYzPq%2B7eNfI07MQV1tNtSeBozyvg2%2FramGBOjKMsfEhOC2e82ck7%2BV99eDWsDV3Xg%2BFQInZOvB%2Bpm6u%2F%2FPz68BkZL6cn28O1ZWFW3%2Bd%2FBPX8Yi00H7y0XTW2BSfOiuS8lctqOoC5AuYuzFFZMQwg8vLxAY6pgFxJKpv0W2taPaBtnhGKC1Onik8S4sCvzmW2BbrDG7elMv8H183ocXlI3WVIAm3H42GiTSfe7FTwXX%2FHnAehuA5z1jF1XaTbdoum6cjjdze84bxvGxkXPQVFVGoAVpLkRfbMLR8oqUnCdx53ey1pAXLFckfn1sICl88nuhqMBV292TxilzB71YCiui%2BSemhdfahBjhS9MNqFXlksgFuy0QahqHJYMkm&X-Amz-Signature=6fa1f61ef8c57698370b906919a496848f471ea5c71c94d5387e3837dfcc6e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUROZUD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDBDb92XE9mOYfNvrv8qFcdEzuk%2Fdmi2fIIM97Ern%2Fr%2FAiBUaVD9PPmpXgwzML46h00bOphiDZqLpgghQiZ04kqF7Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsHLZU7UWlNuKoee2KtwDXgg3OGX8pcBmxRTcByqhgLWZx%2FJqukX5%2FUhZYBGjC0QN9hUjCyoOcj83Z3e4%2FxZXyTMHTXE1vKZMURcOgGa8g22Is2M9MmdZwtrp447zVYkxxl0mte6T3ICPp3AyhEb8hW%2BEBABskraPUpPnhdIQhsmv561dCvCw8fOgz77v6md5iApR%2FsFMmTNmw5mHO%2F1ee0i28g82rWSxWnxX08j3GcJTX47Jf7TEx04DP0iwBgzdQRWEUk0J8M8f54Ys2YayYDhAUXzzrafT4JUtnTm7bZCcRSnpQlx9qKUnta5aR7y9K6bpug1YbFvgZpfSZvkyJ8dHHwtg6NE%2B%2F%2FOZWSoGHFz2qD63RERGPZZ6ggKKPjTlANmnxVhcOB0bD%2Bq9c%2FnTbW2%2BmZjmJn48onE1yZqR05DhHYN50pzXnZ3bnfy7OmAmHC7xkR%2By%2BNbX%2F6TiBNE%2BrrDT%2BubKgNWzH6IZNBUrxuCnu3JDL2tsVlXHinRq8aYzPq%2B7eNfI07MQV1tNtSeBozyvg2%2FramGBOjKMsfEhOC2e82ck7%2BV99eDWsDV3Xg%2BFQInZOvB%2Bpm6u%2F%2FPz68BkZL6cn28O1ZWFW3%2Bd%2FBPX8Yi00H7y0XTW2BSfOiuS8lctqOoC5AuYuzFFZMQwg8vLxAY6pgFxJKpv0W2taPaBtnhGKC1Onik8S4sCvzmW2BbrDG7elMv8H183ocXlI3WVIAm3H42GiTSfe7FTwXX%2FHnAehuA5z1jF1XaTbdoum6cjjdze84bxvGxkXPQVFVGoAVpLkRfbMLR8oqUnCdx53ey1pAXLFckfn1sICl88nuhqMBV292TxilzB71YCiui%2BSemhdfahBjhS9MNqFXlksgFuy0QahqHJYMkm&X-Amz-Signature=844614f4038d2c14361608d63b60e7746eb30c2e43dd95028185c0987fd22aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUROZUD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDBDb92XE9mOYfNvrv8qFcdEzuk%2Fdmi2fIIM97Ern%2Fr%2FAiBUaVD9PPmpXgwzML46h00bOphiDZqLpgghQiZ04kqF7Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsHLZU7UWlNuKoee2KtwDXgg3OGX8pcBmxRTcByqhgLWZx%2FJqukX5%2FUhZYBGjC0QN9hUjCyoOcj83Z3e4%2FxZXyTMHTXE1vKZMURcOgGa8g22Is2M9MmdZwtrp447zVYkxxl0mte6T3ICPp3AyhEb8hW%2BEBABskraPUpPnhdIQhsmv561dCvCw8fOgz77v6md5iApR%2FsFMmTNmw5mHO%2F1ee0i28g82rWSxWnxX08j3GcJTX47Jf7TEx04DP0iwBgzdQRWEUk0J8M8f54Ys2YayYDhAUXzzrafT4JUtnTm7bZCcRSnpQlx9qKUnta5aR7y9K6bpug1YbFvgZpfSZvkyJ8dHHwtg6NE%2B%2F%2FOZWSoGHFz2qD63RERGPZZ6ggKKPjTlANmnxVhcOB0bD%2Bq9c%2FnTbW2%2BmZjmJn48onE1yZqR05DhHYN50pzXnZ3bnfy7OmAmHC7xkR%2By%2BNbX%2F6TiBNE%2BrrDT%2BubKgNWzH6IZNBUrxuCnu3JDL2tsVlXHinRq8aYzPq%2B7eNfI07MQV1tNtSeBozyvg2%2FramGBOjKMsfEhOC2e82ck7%2BV99eDWsDV3Xg%2BFQInZOvB%2Bpm6u%2F%2FPz68BkZL6cn28O1ZWFW3%2Bd%2FBPX8Yi00H7y0XTW2BSfOiuS8lctqOoC5AuYuzFFZMQwg8vLxAY6pgFxJKpv0W2taPaBtnhGKC1Onik8S4sCvzmW2BbrDG7elMv8H183ocXlI3WVIAm3H42GiTSfe7FTwXX%2FHnAehuA5z1jF1XaTbdoum6cjjdze84bxvGxkXPQVFVGoAVpLkRfbMLR8oqUnCdx53ey1pAXLFckfn1sICl88nuhqMBV292TxilzB71YCiui%2BSemhdfahBjhS9MNqFXlksgFuy0QahqHJYMkm&X-Amz-Signature=c502019343e8d96c1661fd7c02dcd7b290f8ce45044b7f867f7fe8bc833a2b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
      <summary>What is rviz?</summary>
      TODO: explain rviz better (say how it is like ros2 echo but visual)
  </details>

create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUROZUD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDBDb92XE9mOYfNvrv8qFcdEzuk%2Fdmi2fIIM97Ern%2Fr%2FAiBUaVD9PPmpXgwzML46h00bOphiDZqLpgghQiZ04kqF7Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsHLZU7UWlNuKoee2KtwDXgg3OGX8pcBmxRTcByqhgLWZx%2FJqukX5%2FUhZYBGjC0QN9hUjCyoOcj83Z3e4%2FxZXyTMHTXE1vKZMURcOgGa8g22Is2M9MmdZwtrp447zVYkxxl0mte6T3ICPp3AyhEb8hW%2BEBABskraPUpPnhdIQhsmv561dCvCw8fOgz77v6md5iApR%2FsFMmTNmw5mHO%2F1ee0i28g82rWSxWnxX08j3GcJTX47Jf7TEx04DP0iwBgzdQRWEUk0J8M8f54Ys2YayYDhAUXzzrafT4JUtnTm7bZCcRSnpQlx9qKUnta5aR7y9K6bpug1YbFvgZpfSZvkyJ8dHHwtg6NE%2B%2F%2FOZWSoGHFz2qD63RERGPZZ6ggKKPjTlANmnxVhcOB0bD%2Bq9c%2FnTbW2%2BmZjmJn48onE1yZqR05DhHYN50pzXnZ3bnfy7OmAmHC7xkR%2By%2BNbX%2F6TiBNE%2BrrDT%2BubKgNWzH6IZNBUrxuCnu3JDL2tsVlXHinRq8aYzPq%2B7eNfI07MQV1tNtSeBozyvg2%2FramGBOjKMsfEhOC2e82ck7%2BV99eDWsDV3Xg%2BFQInZOvB%2Bpm6u%2F%2FPz68BkZL6cn28O1ZWFW3%2Bd%2FBPX8Yi00H7y0XTW2BSfOiuS8lctqOoC5AuYuzFFZMQwg8vLxAY6pgFxJKpv0W2taPaBtnhGKC1Onik8S4sCvzmW2BbrDG7elMv8H183ocXlI3WVIAm3H42GiTSfe7FTwXX%2FHnAehuA5z1jF1XaTbdoum6cjjdze84bxvGxkXPQVFVGoAVpLkRfbMLR8oqUnCdx53ey1pAXLFckfn1sICl88nuhqMBV292TxilzB71YCiui%2BSemhdfahBjhS9MNqFXlksgFuy0QahqHJYMkm&X-Amz-Signature=e1ae6657063883e894243a97398d0ce17f0eddeeee57f8a44c541ed5312218c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUROZUD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDBDb92XE9mOYfNvrv8qFcdEzuk%2Fdmi2fIIM97Ern%2Fr%2FAiBUaVD9PPmpXgwzML46h00bOphiDZqLpgghQiZ04kqF7Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsHLZU7UWlNuKoee2KtwDXgg3OGX8pcBmxRTcByqhgLWZx%2FJqukX5%2FUhZYBGjC0QN9hUjCyoOcj83Z3e4%2FxZXyTMHTXE1vKZMURcOgGa8g22Is2M9MmdZwtrp447zVYkxxl0mte6T3ICPp3AyhEb8hW%2BEBABskraPUpPnhdIQhsmv561dCvCw8fOgz77v6md5iApR%2FsFMmTNmw5mHO%2F1ee0i28g82rWSxWnxX08j3GcJTX47Jf7TEx04DP0iwBgzdQRWEUk0J8M8f54Ys2YayYDhAUXzzrafT4JUtnTm7bZCcRSnpQlx9qKUnta5aR7y9K6bpug1YbFvgZpfSZvkyJ8dHHwtg6NE%2B%2F%2FOZWSoGHFz2qD63RERGPZZ6ggKKPjTlANmnxVhcOB0bD%2Bq9c%2FnTbW2%2BmZjmJn48onE1yZqR05DhHYN50pzXnZ3bnfy7OmAmHC7xkR%2By%2BNbX%2F6TiBNE%2BrrDT%2BubKgNWzH6IZNBUrxuCnu3JDL2tsVlXHinRq8aYzPq%2B7eNfI07MQV1tNtSeBozyvg2%2FramGBOjKMsfEhOC2e82ck7%2BV99eDWsDV3Xg%2BFQInZOvB%2Bpm6u%2F%2FPz68BkZL6cn28O1ZWFW3%2Bd%2FBPX8Yi00H7y0XTW2BSfOiuS8lctqOoC5AuYuzFFZMQwg8vLxAY6pgFxJKpv0W2taPaBtnhGKC1Onik8S4sCvzmW2BbrDG7elMv8H183ocXlI3WVIAm3H42GiTSfe7FTwXX%2FHnAehuA5z1jF1XaTbdoum6cjjdze84bxvGxkXPQVFVGoAVpLkRfbMLR8oqUnCdx53ey1pAXLFckfn1sICl88nuhqMBV292TxilzB71YCiui%2BSemhdfahBjhS9MNqFXlksgFuy0QahqHJYMkm&X-Amz-Signature=6fa1f61ef8c57698370b906919a496848f471ea5c71c94d5387e3837dfcc6e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      [launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)
  </details>

This should do the same thing as running the three terminals from above

```python
import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, ExecuteProcess, IncludeLaunchDescription
from launch.conditions import IfCondition, UnlessCondition
from launch.substitutions import Command, LaunchConfiguration
from launch_ros.actions import Node
from launch.launch_description_sources import PythonLaunchDescriptionSource
from ament_index_python.packages import get_package_share_directory
from ros_gz_bridge.actions import RosGzBridge
from ros_gz_sim.actions import GzServer
from launch_ros.substitutions import FindPackageShare


def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config

    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}]
    )
    joint_state_publisher_gui_node = Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
    )
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        output='screen',
        arguments=['-d', default_rviz_config_path],
    )

    return LaunchDescription([
        joint_state_publisher_gui_node, # debugs urdf joints
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node # starts rviz
    ])
```

## Add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

package_name = 'mbot_pkg'

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)


setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ] + files,


...

```

**Build:**

{{% alert context="danger" %}}

## MAKE SURE YOUR RUN `colcon build` in `mbot_ws` folder!

```bash
colcon build --symlink-install
```

{{% /alert %}}

## Running

To run the code we just need to do:

```bash
ros2 launch mbot_pkg display.launch.py
```

{{% alert context="warning" %}}

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUROZUD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDBDb92XE9mOYfNvrv8qFcdEzuk%2Fdmi2fIIM97Ern%2Fr%2FAiBUaVD9PPmpXgwzML46h00bOphiDZqLpgghQiZ04kqF7Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsHLZU7UWlNuKoee2KtwDXgg3OGX8pcBmxRTcByqhgLWZx%2FJqukX5%2FUhZYBGjC0QN9hUjCyoOcj83Z3e4%2FxZXyTMHTXE1vKZMURcOgGa8g22Is2M9MmdZwtrp447zVYkxxl0mte6T3ICPp3AyhEb8hW%2BEBABskraPUpPnhdIQhsmv561dCvCw8fOgz77v6md5iApR%2FsFMmTNmw5mHO%2F1ee0i28g82rWSxWnxX08j3GcJTX47Jf7TEx04DP0iwBgzdQRWEUk0J8M8f54Ys2YayYDhAUXzzrafT4JUtnTm7bZCcRSnpQlx9qKUnta5aR7y9K6bpug1YbFvgZpfSZvkyJ8dHHwtg6NE%2B%2F%2FOZWSoGHFz2qD63RERGPZZ6ggKKPjTlANmnxVhcOB0bD%2Bq9c%2FnTbW2%2BmZjmJn48onE1yZqR05DhHYN50pzXnZ3bnfy7OmAmHC7xkR%2By%2BNbX%2F6TiBNE%2BrrDT%2BubKgNWzH6IZNBUrxuCnu3JDL2tsVlXHinRq8aYzPq%2B7eNfI07MQV1tNtSeBozyvg2%2FramGBOjKMsfEhOC2e82ck7%2BV99eDWsDV3Xg%2BFQInZOvB%2Bpm6u%2F%2FPz68BkZL6cn28O1ZWFW3%2Bd%2FBPX8Yi00H7y0XTW2BSfOiuS8lctqOoC5AuYuzFFZMQwg8vLxAY6pgFxJKpv0W2taPaBtnhGKC1Onik8S4sCvzmW2BbrDG7elMv8H183ocXlI3WVIAm3H42GiTSfe7FTwXX%2FHnAehuA5z1jF1XaTbdoum6cjjdze84bxvGxkXPQVFVGoAVpLkRfbMLR8oqUnCdx53ey1pAXLFckfn1sICl88nuhqMBV292TxilzB71YCiui%2BSemhdfahBjhS9MNqFXlksgFuy0QahqHJYMkm&X-Amz-Signature=abcfa6b678fc5f73fd6e473b5a82ad8e2119574d5b670aedfecf0ef52ce6fd0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUROZUD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDBDb92XE9mOYfNvrv8qFcdEzuk%2Fdmi2fIIM97Ern%2Fr%2FAiBUaVD9PPmpXgwzML46h00bOphiDZqLpgghQiZ04kqF7Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsHLZU7UWlNuKoee2KtwDXgg3OGX8pcBmxRTcByqhgLWZx%2FJqukX5%2FUhZYBGjC0QN9hUjCyoOcj83Z3e4%2FxZXyTMHTXE1vKZMURcOgGa8g22Is2M9MmdZwtrp447zVYkxxl0mte6T3ICPp3AyhEb8hW%2BEBABskraPUpPnhdIQhsmv561dCvCw8fOgz77v6md5iApR%2FsFMmTNmw5mHO%2F1ee0i28g82rWSxWnxX08j3GcJTX47Jf7TEx04DP0iwBgzdQRWEUk0J8M8f54Ys2YayYDhAUXzzrafT4JUtnTm7bZCcRSnpQlx9qKUnta5aR7y9K6bpug1YbFvgZpfSZvkyJ8dHHwtg6NE%2B%2F%2FOZWSoGHFz2qD63RERGPZZ6ggKKPjTlANmnxVhcOB0bD%2Bq9c%2FnTbW2%2BmZjmJn48onE1yZqR05DhHYN50pzXnZ3bnfy7OmAmHC7xkR%2By%2BNbX%2F6TiBNE%2BrrDT%2BubKgNWzH6IZNBUrxuCnu3JDL2tsVlXHinRq8aYzPq%2B7eNfI07MQV1tNtSeBozyvg2%2FramGBOjKMsfEhOC2e82ck7%2BV99eDWsDV3Xg%2BFQInZOvB%2Bpm6u%2F%2FPz68BkZL6cn28O1ZWFW3%2Bd%2FBPX8Yi00H7y0XTW2BSfOiuS8lctqOoC5AuYuzFFZMQwg8vLxAY6pgFxJKpv0W2taPaBtnhGKC1Onik8S4sCvzmW2BbrDG7elMv8H183ocXlI3WVIAm3H42GiTSfe7FTwXX%2FHnAehuA5z1jF1XaTbdoum6cjjdze84bxvGxkXPQVFVGoAVpLkRfbMLR8oqUnCdx53ey1pAXLFckfn1sICl88nuhqMBV292TxilzB71YCiui%2BSemhdfahBjhS9MNqFXlksgFuy0QahqHJYMkm&X-Amz-Signature=78f3bd07f8445bb5c1b7b3f04fc5fdda6994ee3b00117c4b10adae786524ecc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUROZUD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDBDb92XE9mOYfNvrv8qFcdEzuk%2Fdmi2fIIM97Ern%2Fr%2FAiBUaVD9PPmpXgwzML46h00bOphiDZqLpgghQiZ04kqF7Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMsHLZU7UWlNuKoee2KtwDXgg3OGX8pcBmxRTcByqhgLWZx%2FJqukX5%2FUhZYBGjC0QN9hUjCyoOcj83Z3e4%2FxZXyTMHTXE1vKZMURcOgGa8g22Is2M9MmdZwtrp447zVYkxxl0mte6T3ICPp3AyhEb8hW%2BEBABskraPUpPnhdIQhsmv561dCvCw8fOgz77v6md5iApR%2FsFMmTNmw5mHO%2F1ee0i28g82rWSxWnxX08j3GcJTX47Jf7TEx04DP0iwBgzdQRWEUk0J8M8f54Ys2YayYDhAUXzzrafT4JUtnTm7bZCcRSnpQlx9qKUnta5aR7y9K6bpug1YbFvgZpfSZvkyJ8dHHwtg6NE%2B%2F%2FOZWSoGHFz2qD63RERGPZZ6ggKKPjTlANmnxVhcOB0bD%2Bq9c%2FnTbW2%2BmZjmJn48onE1yZqR05DhHYN50pzXnZ3bnfy7OmAmHC7xkR%2By%2BNbX%2F6TiBNE%2BrrDT%2BubKgNWzH6IZNBUrxuCnu3JDL2tsVlXHinRq8aYzPq%2B7eNfI07MQV1tNtSeBozyvg2%2FramGBOjKMsfEhOC2e82ck7%2BV99eDWsDV3Xg%2BFQInZOvB%2Bpm6u%2F%2FPz68BkZL6cn28O1ZWFW3%2Bd%2FBPX8Yi00H7y0XTW2BSfOiuS8lctqOoC5AuYuzFFZMQwg8vLxAY6pgFxJKpv0W2taPaBtnhGKC1Onik8S4sCvzmW2BbrDG7elMv8H183ocXlI3WVIAm3H42GiTSfe7FTwXX%2FHnAehuA5z1jF1XaTbdoum6cjjdze84bxvGxkXPQVFVGoAVpLkRfbMLR8oqUnCdx53ey1pAXLFckfn1sICl88nuhqMBV292TxilzB71YCiui%2BSemhdfahBjhS9MNqFXlksgFuy0QahqHJYMkm&X-Amz-Signature=25d2b824b703ddeee5555b63bae75f02f9745c8733529d213a19e003a879a827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
