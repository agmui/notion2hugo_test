---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-19T09:18:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-19T09:18:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=167e1f645c29d9194d8bde69595629e74ac5e3557b98125240d8f188a120f9de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=2bac50651e871af99b66480e6ae8ab8310475d87c0b8afa60f957078a46c1bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=6752562cde6d686c2e97b5286b5a70c549df4bc7ead17f4b4420ddd2c917d722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=4dbd94c2df67093fde14441a507d6c1045254559ab827adbc400ead8d99d7eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=074c5f318d5386f630b44defd63edb3fbbc81ef36d121324cebcef8cc59502c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=ab862de33b767cf13efad3c549b55ef3b1a99d1ec851ad445fa17d22927d2336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=666481794927eea4475776b106a73cb2829e6cceeb96b36417c5591f918e761b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=a4a8b8cc99ffb54560073c4147924ef81fa637e4ea0fa4cb2ecc9aba7f6c8945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=42819d33571dd7aa8ed1ab0cf518fb92fa1a3739ccbe5430c1523ac8802befec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=61806edb56413c11069b31ba1c21ef69f8095dea666b5b19b816007181ade8e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGT2DCJ%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCDj8bk%2F8eVHbCcYMwFNGBPGRSh1DSmbr9CqLpSKNdZbAIgbo%2FxeTPNmfHCu9saHG%2FXOlgvkl1QMwj2o5Us%2BZ9tA1gq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDIL8ls590AcJjBFy%2BSrcA%2BBQBgzEOrkQKUETmUJCkMJgeFYesrncOEa2pxwc9%2BFPokWBaZFrVfOIjkae0svHwtzjWlBRoU4J3HYIrngDuaCno3865ibsC8aeXMvS7u19eM2PMo6PWTvj9o59CuH%2BiEV%2B%2FVKKBeCXcxk7vX0WSZV%2BHjEeVRIqaJJIh%2BMavCs3pqy76YGa09PShDZwaOXAjx7oRUxLum6SRzA0gZCQ8JbE%2F8opj3WzP8UfZrWXHH5U9GdzyAw22nT21K3e3M7fyANFkTFFL5tXoL4URH%2Bu2rIUbTu5kE1xTbRFnSthiLKxB2jv8NvirQaHVgYRQAkDKpu5sAeZQ%2FKdUjTyQ6njuflnRi2upYM4l%2BJNdPt8BA0aan1MIpt06LNnYh7dMiMhsx0r6NAy%2B%2B7YPA%2B%2Fk8uNk3%2FPl5xOHfQ97fMeeUlJ%2Fh90jPZbYMcO%2F9UyC3vuepJecAfkW8PmgJ8yudZMa%2FJgavKOwPA%2BqBx7OWEFH11EBaLADF3kI0UUxaXZwfpP%2BMaZXrgMYNlqbo5wyiAQsYuO9EbXz2avrmZDw9zgVcjChRyvm%2FrZdAkaJuy%2BN2Uv6wMYtHIEGs39rpiALfUstDNYP7sYZnmVRX635I7oHB2D%2FJxf1aGDTFQI%2F8KTNCuiMPyXz8wGOqUBy1gl%2FwYgtKYdCx%2FXuiVpcf1YYo9Pn%2BQ0tV%2BBuE7%2F7fEmqm%2BL%2Bk4MWCrMZzkDUqPn2LeSe2oFZ09gPtA5j88O4Q2F43AeXidgJuJsCEZiWzsWcQMoqXZEw7EMebt%2FlNpzTomoF4G2aWS0%2Fgpb0PobalbBP5KJN%2FtjdGXdVDOixRdRyxFJUcDN9lDVZVTF8LN6NOx9xPeXGK0DjeUlf1pPFBNTCPd3&X-Amz-Signature=de18c89536145b28c2db2129c77b32d905db07f07393a6053cd264a84f48f920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMCZ7RD%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFRvD2hKCAGiwsD30dU22pSpYAYpy6rcg1tA9gYaDivfAiBiWwiotWv7ycz%2FoUygWQ3CMtUW%2F4bDxxhyjIm%2Frz%2B13Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM7eBjylV1SVkCGBvhKtwD1PYCJzREfjf%2FV%2F2d27U8LgoN0BEfOwwO%2By3456vv8UDIR%2FqJIQiBBuDBPlae23CuGEJcmPp%2FreJAYljqEox0EZEnLDhVg2I4WJ36W3DTmjcV%2FhlqEwcXFCEPGqJpIfhTdwTUgWdqGWGSS9408Tu%2BuH5OAisZK7GJujhDlNh8qT1iJTVDjS0z9FUqHrYI8E39r8y70v1HtxwvBAQCwrhlQ7PxW2LoLlD9kLxOrsQyVMzFWo6MWRvhLNmt6QXrvSuu2%2BP5zli2Yuqibg6IcmpB0jyc7Xh5UNAVKKvkFXE54kRH1BeYLVK7faPINRgwtwjwRyH%2B%2Fq23%2F7smyX90xmxJ8nzxMJMgKQtzmFTnymQmOCub5gXixE2pA%2FH4ZK1ikcXHXL3COWmD78LZjvw1wUbred307s1Fq3jhjis%2FgrPgV%2FsGrMgWAiP32bkgiqYMWb99xEKA7tSFKOiMuS%2FlDobZ8Zinj2XFS%2BQuPqPpQsZy1JmSK578kO0l7fUslLn7e0c0exgpchlX3xPT%2FlHTNWGfJQv%2F2gzvEDte9DIPSkjfW8vaOqnzAN0KTTZp3yDBhA5IKOz4JteE%2BtMDKL7pbRpr%2BzfJeJQuCAJEZ673X3qP8ZENxSBEGU6fBVTWvsEwxpfPzAY6pgG6hE7tJI4H9ri6JpcxJ%2F6XyFHsdoFEjJ8w7Z3lFooDyDZMGXpJW1qgfhTSqZlAN5ZAC%2B56Z7%2BEVN2%2BCrQRnPt%2BLkbg0gzSG2siHLusJnBj68TVf3WOBzC9SoAGlUFTc6YGHNMSfE7wyfQndPOto9xqvH9LBpKgb27eyKs1UVJ1QvggY%2B%2FVt4IOcz%2BvkgDHZXYnk1oBn93ch23gbpdW73p3ijvJ%2B%2BSO&X-Amz-Signature=8b073b29c6c90a24c26af8c1fa8cd6eca6ee0048b0f91508bdf07ffddbd4b69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
  <summary>{{< markdownify >}}What do the variables represent?{{< /markdownify >}}</summary>
  
`base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.

`wheel_radius` and `wheel_width` are the dimensions of the 2 back wheels.

`wheel_ygap` is the gap between the chassis and wheel.

`wheel_zoff` and `wheel_xoff` is the offset between the z-axis and x-axis.

`caster_xoff` is the offset of the caster wheel (the little ball) along the x-axis.

</details>



Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXFXF57J%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDBwwsdbWx%2FhAYQ8ahLcmpGwyNCEjnssSZPmAm5C%2Fwx2gIhAML4ybFCcmNlvA968dBogboROClawrtg%2BPikfMtYmNUtKv8DCEMQABoMNjM3NDIzMTgzODA1Igw9EpIobmNiXwUJE8oq3AMvZHcUk%2FWgh3%2BxsjJVWVAM%2Bn04dvznW%2Bp61LMGuuBVw2KFU47mwyDTlwi29b%2B9MxpOpcFOF4jfB04qXzygiv0t2Ct4cLHeh%2FWXKvedRfqBfaGqM6j9HNwacayEwqF45LWAwINAXWsZHbYcwJC6DNtw5c2o7ornLTjRZe26BMdDFrvjClIaCzGQ24emiFDOyhZC%2BGrNVTs1a5FtJTaAojZPRa9lEloK%2FdwL9V09XNu3hhIWPCmxNKMp4r4gQklPRE1IzOGOXvrsfvkcBdgZZF1xddjPEpDayB3oCkjB6GMBIPGM%2FFXlYb4RIGHyswcms%2BG6uMgvqc0HJPPClN4rj3Yq5YCRkKB5goNvb%2B6YfMiPiTDVfzXaKejb5GS5WhGwwCnseYy1gARnk4nYUpYAZDmXTu2wrsBrW2NuaJlrUEsHe9TUXYrPeXuJ0Ek92nR5Rb2uMor1CYkgxNqvsjnL7VctBSmHHV9FYEjEncXw%2F72qrajeFlMdyTSxWLwmoBdluuB5pmCgbCejYyeKwfjMwWeb8fmpGSncrPlbsWdW02QPsEoyV834j4v7lFBBZ5fQXM1ldFVmoI8Cij8EhvvA02VOhpOkWGGAGcm7aa8%2Fle80LecYROo3rqRTtRKDnTD1l8%2FMBjqkAaauSeeIdJ5l1kRMXEcx54LVUGDpCsBFoeNdz7Q6dLkBJ9QavpzWSpEyV6x3%2BvF84D8Z%2Bn%2FcgQsDPbKWQYJ2oe8ySpjWwlwEFVSeofNVGBhToRxvKvpkxDWOBRei1xR5%2FUtasvekRij7nCcxorgMaRRkUG1ob3M2zJ5MJHpr5j%2FZMoc9A7stjS5ABHAGvSB2WX8u7xQV3xjdYB%2Fv3z9OQkFkY4ky&X-Amz-Signature=7fe96d352567466e52c71c309e24b928fb6553eedae7fb485629fbc61d6ddf19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=a597980101599567494d86bc6e8406c04295f1a0df11e2faf531b57028b626f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXAZTRU%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDJ4UHOBkE29aB%2B%2FSe1Bo5RN425ATIS0uK6MNuZvf58%2FQIhAIDFemsgZEmsUBpij74GM9JKUkGNpcMUaqyRBXq1DgofKv8DCEMQABoMNjM3NDIzMTgzODA1IgztJ3YcMVo8%2FJJBUbEq3AM5hMd8n9vlNRrLk2dGJWsHprsqyJHHR6zmxz5jjuQ21Zu4ipkgi2k4UIIKpm114iMTUUc7u2dL7pJqWnfCd9me1asjKvBDfJkyvE8xgTF%2B2EQhSJc2edVulav4TTHHX0TnB%2F8mnAlutUk8P99OqreHixglZb4H%2F1Zg5tqCk3QBF8DYpoDd6E5ryAr1%2Fe2ujxq6KKXSfoiHuv%2Bi9aYv9KGRNXZNqbmXo%2FYiE5T17SQm%2Fpw5jYQf9ajpiIylDm48TjxUOqE9pxogoJ4y9ZsKjuh%2BqwDst3FnasSSsnkPuOS6wrQvSDocStm8FuAmqM7UIUQGRhX8jao4cYaIJ6xCbe2swx4MHlgc%2BPoo8zjNbUn8NxZOs8eJX1Qcm8nmWJLl5By%2Bt1WyXyEt07w3tS62EHicFTGex5cWRTowETv%2BfS4y%2FCUTl485N6D8k6%2BXKByGIFZ9hlzsdzzpK2YCs%2FZnfA2Uonnrzz0btfBgkI30dN73vvj6%2B1KTOMlvrxVhyX9fHed0xb3IksLHSaFi96MqEZ2wipFDXlMqmSOGsINWTq0spb9rENWr6ETYBPKgh1fqRiaoxkUn0Eifs9E29CPkwkAWBhvkGkx2cMF2L%2BLXnkXtbbExgZk2eslTkKmn%2FDDMl8%2FMBjqkAWlNP6mwpGtGqvSNi1ykrE5YY8zO7UEi0ennp1xsfdrJgz7%2BYbZPGl5xiXl5d0HfpCKRVSrWMQHplpt5H2OPXtbFFUHURv1apAbMNcMpNORzgUhS4r0IAYp9EaotBu39JOptKXkXy9fHpXjgBq%2FDaIRQhb97W02MXQvRdeNZ9ll7vz9mHAG7Gh13GNuKQ3Ibz3JYRKJbYoemy9Xm3Le2tHyVw5xo&X-Amz-Signature=c20c513138bac3a11f4adf880e97b2caa9f3828d8ef227553fcc61e0f2117447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=a0f33ea13e44ea31a5e1278daa7bfd6b13bef3b9cdb396ac4ba6090925d2f9ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKE5O5J%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDe5ai2uXIus9V%2B3Ndbz5ICMa%2B9aiG0lIFy%2BX9B%2BEWwowIgfijPVD7zc8ZhU%2B%2BaJTECRQqOzXHm7JUBWrbVXNwCwiQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDORrgi3LqB5ev%2BU6HSrcA2fsfPUO1LSj3rAyCNoot427puEpIEaquHCuYR7CZ33Fy0U2uWtpabkSaS%2F9O%2BaqSjWfD9dGzFCqYOSPw4UpFkhbIPTSX52ZZXmLEwlxfTvz%2BMfPCxsM6d2mRiJv11VuieYpacVbij8hi69SxdMUYlrl6pjaTr7Qt5uDvE4Ob1j5kPoIwTmXAeul5%2FPhk6%2Flv%2FazkZ5YRBX9UhCw%2FKYDu2SGXuBe2lp4AbY%2B0QQD5tGUrfG8RgYWqywHPs26uFh%2BAyHKxXxvIKIYgkX4%2FWiTb6%2F6wUq5UXWSJLkWN%2Bd%2B60kMeXnGC%2F%2Bm81Z8o%2BeU0ulg0M6zkygezJNEbX0%2BarVPhy8eO1telqYnA7Wj2njFPHQCjQXzsnvn42uXK0cI6WxAUOogXmg3KP66atE3xghHaLOtJJY89BRTtJkg97rm55rfZsXkoMXgHRPOIDAdSM79n56%2Bj5DId%2BEt6OyIhikAemadhoH0xPpaPK4OTgeKxYnff3bmU5kkq1yMwpLsoWSVT16jBb%2FA3iqjQ%2FILCLeg7ce0smmnH%2BniIwkpQKLlnWK512Mkb6gRMkX2sHR5Z9bGYJKgcCtyLx7IvJq9w%2Fnc84vb2CSEnb5CH1%2BExywtSpvavc%2BvzrLu9N0fEeRXMPiYz8wGOqUBNP4sSpaBFChO2bnd47ep5z%2Ftp340QntTJogd0Lt0bAp8i1BkRb9rjclFkHE1qitYvrUHK8Qg8E0flV1v5wyDIf7%2Bo8fNadIjEFZMrxBZXhB3zmcYN1fGfxOWMS9QQ2wdQYOv6jFDcnXQbmOFZdsoVK5VR9pyai3weOa%2FQykpmUkDBYnwS7xhjKSJFk5UlT8il3RVKeqRwR44MTJehLZjo1UFERfg&X-Amz-Signature=56e5f39dc623421053bbe2d9ff64ae9a257961901e52f86ee0cb668eb7391ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=f5ca715181efb416f882cc74b6c367e90a8f4f26abcb70835e4538f849aa1ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQICHSVV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDl2CAmw8kW42WHvPW%2BM%2BjzoAYa05ANvb8VOM%2Brhv9SlgIgCe5mH%2F%2FfDoQGlMP%2FMBXJqFyhohiS6diwVL%2Fp%2FGc2bXUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDlgruKAu9GrLbsK3ircA%2FF0Gyi9626xz9SFrjqx%2FCX6DnOIIqi%2BrLMcf23zt8czazdP3P8QApH6OTuR45ZXVjkoyVCdjgACoz2x%2BmnBGUhYX1y%2FNdNGrxV%2B7bbXKbN0VTXarwja9eMdkppNu%2BQ3S2Clgeo49opv7%2FsdcLc4O%2BeweIZKgvm8Jexw1mz3cxadthIapNUCuV%2BOn4gyEWSAKmoU0tUQMBwz71nEPEsly%2BKxgL%2BAy%2BxXRiAGO6rgSWjsX8fZ3vL9BOi2iTHDtNy9xRw2cxwO3KhGVSJNLypDwSLD6lpnWihwjHT%2FbpN9NGT0zP9dJUw1kap%2F6D8YS5Zk6VwLRd2J%2FBNLoSDR4R6Vb630x65mu2Z9M%2FFsKvFzxPtyHJThxifiqNI4nA55wFdxLommBCElkmSwtZNw9s70MBsSM5sD%2BfPutA3iJXFSHTRALmHHOppzX42cA8mFjrVj%2BUEGJeyso71P%2FVSmLs%2B6jRQVIJm%2BsV3wAzaEbU9%2F6nu7BsAuoocnCFCEBlY8cWAew%2FrSu6RlyG2Ap9YPfavXiQeIm3em2xRCIu4dkc0IgH%2FRcM9wyXUlYQIDKdFbxVSqY%2ByQ03%2FLsPBZ5KaPBRQI6q8wA%2FhYMiJgg3bTYKcjrgNz00xNkzFQy%2BvsD5RbMOqXz8wGOqUB9OwsIwZxAL5A5vI70QkLWb93DivZChHdscxmXxf4tBjjaaEf3N7%2F0gTd9kdrE34RKTt6DerOgFaLeI4tiVbmO7z7gUFnzrGoeVnnE3SoKgKyixJL70uVASPsFIcpJleGTR4AsaX8vrbisKRJ4gKJ2llbU%2BJbcHCs%2FA22fo8PvEH%2BkBDgMFr41mJfn0r9wu8nI5CKQ5TbZf%2F6IBTJTPOLV8wV6cyv&X-Amz-Signature=75168e283105c10c9161b0daddce9b4885f8eb8941605b456c1013fcaff9d0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=f720e2b2e75b08989a442a9f2ec87214ef87e67394f12e7d3f5b2553962d94e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}code up until this point{{< /markdownify >}}</summary>
  
<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOLDKY7U%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC%2FW26W6jFAGjF20AnSTCmfzd77wD4WvXwuInJhAdb3AQIhAOuNsxxXj2Z%2BZJGByGY9Uq2T8XlouObSdK1PCjPvOciZKv8DCEMQABoMNjM3NDIzMTgzODA1IgybOAREhlw0I4iaK84q3AMQDqGh%2FAmsIJSfKTAbfPuZ5pJ9iExeRBmcuvRF7XiusCdQUDOnEENpqZkPRPOBummEMih9NzP1mGAZ4raB083%2B91N2ZNwrA5YN4PzQzHqF9dchvfyxmKYi1DvI%2B%2Bv4fHCQJT%2BOflTC8%2BK0697qJuYJaYAqLq1kinncKbFfNxVmitBIP6Ls8VfxBtYPztnI12Z3waJuC47W1qWNhKsV88h68F5BU5QTVNL3pmqByVmxACD2rLNuZhgL7cw2VKQqSqnEHuAk5j1Ys9p8LRYBH9dCe%2BGQidI9pbsAY76fDFIu68vFn%2FT1kjXdEho6JjFMwePyxyqlR8EtSZtJ4rmDQdUaAOKmISxAvQSlVlE6%2FH5maKrruiDfHQDZgSY7fU%2BVQWnkzCZkuZifwWiIehhIwvde8Zrz1HH7FrzoLbM8bhi27CaAueT2Y1VgRnjy5c9FoQcRra9WWU%2BEwfC8exv7q4H1b9BS3aqKq79HMDbVd9mYfuXemtEG0I%2Fclj%2FT9OvxG5z753EjxQVpsWhC1yG8dDsArUW3pAxcWZCBV9jS4f1XjMbuqHxyPV4VIUtjiAVEDOS%2FA2LJky4XMmTqQXmc%2BwLQ0Y5MZYigs8IizusQ1RYbyI43w0hDpf6FGU2OSDC%2FmM%2FMBjqkAZYWTG5VL698HrHpFK5x%2BK1hYFNUNiSIVxupIN%2B5x%2BVsH29a%2FQsWJ%2B7ltE546B1o5h4n4SfscSPJa2Kt2rF%2F5uBQ9X75%2FMpfkBN2gNfMmYR2bTfl6QJRxQeGaEFYuVxZzyeG%2B1GPXWUayKse%2BJIAU3xl8GIz6QcZ6Z1kyaoj3njaTa6lFAkYM2a1m1VCJkBXuKsk1XNXUZB68YY9cs8P8TXYXhkk&X-Amz-Signature=81394ce2735b610d889ce239ed193cfa761e697c3cf550a83e55e0088048bcdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

</details>



### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=9a9adee7ec4e798efccd44c4a5ea61eeff2c74c472a4fb6c96e4c33c10a8ae21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-16","18-18"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSLQTKH%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICjPndJUanl3Q78jXd5%2BOsx4N7RhfYX6obTAdYeM%2Bv2QAiEA%2FPz8LHXcZXhfnxe5oE7FCOMwirzN6MV1EB4Oy9iPTBAq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCihI8rXhxvLYORTcyrcAxFDHDLuhwKmjghViF89q2tHwFRS7Z6UyhB5d4GLH1NG1tAtxuCPYshtEy5qB5By2XW1o6iYQRYYtNnUdxIwVvLieV37iAWPkB7HUFFEJAHGo3TJVMnr761UVAULxOefxA4uWEWxJt95FT823BSo8ZA2jD5D6x4JcT4zKHLh2DEPCzZs8vpLk%2BQ%2BuLxOvVSL3XqilerENRyB1jSuu1GnnC9NDeyYxzJx7BstZYJnRfpXctv4QmLyXclOgEmQXhUrknHV%2BLsWR3CfAuMYTvKs4kDbIpITpb5DF50aplfCQVbJwfFeDkRt9SrVr%2B0gznGGcru0UNLaU34GmfcilAGBtxYld%2FfKTOPMPWAaiEyx8EUBY9JRikPk%2FCWNX6GZycFWwaX1PLyC%2BQigO7AW%2FdBFDghneIVQN9tvuJgfCMGWyjjbIjw48SsU%2FQ7OdO1ZJDSWHulwziYCksY2vJdsWQJ7%2BICEvp1UjPPteClKWsd8ao1BqX78rPtiyQGueYEtSzmIjA3imegSK%2FApR%2Bjxo5JRqv7xoeR4w68esDAFKYlwaYZhsAGdVfhZ6TTlB6b2SzQM2lFcCkk5LF4JKqgyybUQX6AVGabyEIlWOkVpn%2BHNks8Ykw8K7s9wVb0EJ9%2BKMJOYz8wGOqUBC3MwN%2BYORwCSRDnapq3nvz%2BbhpjMVDR2mMQahl8oGb9owPXDtJeNhXGNzSLN4zpA6jZXRutC343heVCoSUZ6pcisr2FTZnk%2FAewZ6E%2BpVa2D81lGa%2BtKIcQUic6uhYrV7auRxNAhMjA8URJSJaeLHcvHMoDi3T9fbEM0VGH1zu0w2x6YB%2FMpF9Qu0Mxf9AdysOZVxkF9ccWMdnJ399eFgM5wvQJT&X-Amz-Signature=506ffe514543d0e7ac1be7cbe65f364d472a5d4241d5d478316f8df2637466b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ZGDRRV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCuePdPODJrSqwpQJulAWh6RZvCym7AONPjI3gc0KZfSgIgXQ2pg3XG9xhkdrtBtkq%2FRYkJT4CwTjPl7qztUbduR58q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGhIie1jlbudTa9qWSrcA1Ogj75yQCOdyoTh81NMyQDkYr%2Fm%2FM2sXQBaZfti6%2FJaFZxeZWFfA09v%2FvkAu6DyRJ7BR0gEsg8di8i5Mf8cwD5nuGQrW6pQOmbgGJmkA6jjOBrm8mzSzXvpRvhwOt7HD3ece52I7UepsjzkQFAumApuogpJIhUYnjE0B%2BdVJ0LY6FpyaXBgtK%2FHrWlR6386Cs3WAfn5nwlAYPptqz8YPJtVxIjtPwNYbHIZBTpLTWmuZwnB9iUJUteKzOZmsAcKMx24P6BE8szSnooc%2FItAWy1TvNvPrERqDKfp5SDTer%2BTrA2PTeO1AVm%2BpbuBfD%2B9CPlj%2B2jf17%2B8WOdk3xRQ5RrC%2FqP%2FgIg284xw9T664brshYRiE6zjLt4yeLu7yc%2BXFohI55qtqX%2BZvrgSPOKhFIPedgLn699rXg2mDKPvbWKIxGp%2BeAfDhBL5rmFnOkN6QVWSpMmWXTmHR6XgHbkZGCY91kJuy7zhQZm1B0kKw9PkW8XYBuM%2BPrAMNc8aLsQenst%2Bh95vbZjAGvLBDOkq2htM%2FBL73OITO8hMZqCumr2A42qqoAVfomplBgxWLp8wePAw0Bkk1cJGnYHhwlA3GxAa5qiy4s82krukbciDFCYFxyBy6stWJYYMpDjFMMeXz8wGOqUB8Z2Z8l50%2F5o0Un7%2Fy3Drl2Eq1eaMKPEfvVRcNoumrKxb%2BwyZCg7jVrNasO5%2FID2tSv%2F%2BnxUqe67TC9kj3lg24r8wmCeDNS46Dbw%2FZiqpAZi3pXPH28EwuYQzEutzADiovEDrY5BtUE5VCo8mnFeMM7mEuBU%2F73ndXTibT7iFg828kyingjlESOtbDev6WXcrMcr7gvwDwCXGELj5IjYMXhtaY24j&X-Amz-Signature=f84821751193ea5b1cdd1eaa1a141d352e18053af1aa3743f6bf4aaba01ce106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RUUL6G3%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHNHMLXzK0uU0RFsO0J5I6CmK31gorZJ6wSaBtgT9ewdAiEAgJ%2BXgKjcLjw8fYXhffWD37T8lpRNheXDvGQ0Al5I7u8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJieoMKBZ7giEb8%2FYircA3TC6JdxjIjdUWijA5szX1RPoplAo9zu8ni3C1uLDL0Fgd1cpimFyOV1Lyitepk3q174v9It7Pv3y31qbB1fDk80BRKQNe8%2FGUZDRrmFHBjqB5ibIV1R%2BghSes9tiExOeFx9jQZitcJrmiRGMQk%2B4sUYv9Agf%2B7SGHqcr1sSpAFla2wSvRZWN4G%2F%2BrpD9at6jWd2UCBU%2B6BfzSLhkflWzpCjL2Jq8Ajb%2BePod1GklKbrrKwtKJOeHQbuSc2hSyvP4SM1IxztsPWOR7x3I%2BKNTIgc1wEGiFXOwAI4fn3FvroZkEIpn3IJdqx97Uj%2FXAAemzcNxpuh0%2BYMnBswW1%2FgNjMIT2j%2BekpzhK2s3svPITnozIg3pOyAy%2B%2FbcqnYt2DI0zWPswrXCUKhvozn%2BQRQvXznDDpX%2FDito8K9Vfg6ywuz9oFvF%2FPvr3Qu7AP%2Fa4%2BkiGIxiLOXjjrAHVeQUtQZuTyYIvD4g9gELW15N%2FCJsCWtaqzLPgSxDuxOnMl3YPE%2BT4kRg224jpAeTZn6KlQ1n4lamsjIbw%2BXLFs5oAsdNfh3i4WHD095hWO8juFuqDYkMGr%2BSE3HvOBqohWpsCLJjOFw%2BZhGDJjDaalcLgxYIgD4dHenXZGCzl9dWbDJMPqYz8wGOqUBs4RLWGzjnsPmkUf3kJIEtB4kw2LVoe39v9M04%2FENLHGDrq%2F2LnbrKTXZkkuytjBu5Qygs70L0gMdb4BTnjSC9mqit4cmXuGDwuTCYlUMlxrpBECC%2F6GTfq1s4OrPgrycr4i5JZKB7jDgBxw1Dh4YQM%2FDQaZ5Ps7Q639FvDv%2FMr8O5zEM2htr24sGY%2Bc0troD0ejHBO7x8EsoqfZoE6HJ7UZPmiTQ&X-Amz-Signature=f6fed3e31ae94237d06fc119ec1d2d555211e215f1d339428899dac3dfb187b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=645730cd22804f79b953a66f73651d98637ef80218233864760b8118e6b28b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**final code:**{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYNU7UG%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIG7yNI30D%2BKDZlusHw16SIhP9APNreVT9b7aeRqurWhcAiAd33s4%2FZFItXrUn1OUVaPmQXLHNpGsOl2tVeG7WNbFbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMirp3dzmviL6QBmXwKtwDy6wb02l%2By8pe4euC6ie3lZqoqjZ288qsXQrzGw%2BSCJK2gsgkAbnfbDdvQnC0ZFnYQ2r8z9qCAvPJsJhGmqbfJUfiADKlTIpFCWfuovK1aP5qR3Psv3hjKEOq5F6TiOlBXKd8MuMZ65yVP2Cl36Syygpj3Pvd91cs8MKZpMH1WUlgQmZrF%2B3%2BzJuCKnGzjEdBgvoX3ric7eoyvXn0lga3hKQLHq9p5v1wnliuvykBwyK65wKTFnOPSHViIXPpdgwXLHf0U72fykUHyzpFDLKooBlw1sgTzJVq1CEEeWVJ0pXjOfPualUGvCu9nbcC7vsiJNZ2p129fNG%2F4dnyYvl%2B53AC12KuRq85n%2FrNi3ShlV0GuJwZcP9amXHl17fO4E0ZxxqmmgO4MAbL0ddEj8NNo7D%2F09vtWGkRajmRnqeziX1NTapod4E2CLe0%2FsVQ7oIBO0lcphEi7fY%2F4WpeJwsXxZMvokUnvp34mxj8RcMi6upi9bIXyLJxlpUGUaooTF1deUXkEct0i4BO%2BofPwye7rYoSDQedsoA4AAAuOLdyjTUZ2ztWMw6jmR2uEvGt7Uz99o5RBgxMfxfNN4QhKfzi8TD3GNciRKRZzLHEc%2FsIVgXAK1AHvZ2xP4iBSkcwzpfPzAY6pgGmmDphX85690fNtdCiCdqgRuADiXrh8iO9NOti7FbL8YGa%2FzJ16K33OlS%2BH5DvHaYorXOURQ4Hed4Q7JlBOmpgp6Vzz66PDlnWASXE8Ed0C%2FA9gTJy%2B23%2BBo3%2B8PP9qX2ezbH3%2BlMXzEFtkH2bkiJdvCjaNBcEfdGS2b3fB8%2FSLmgksOuLZD9OFACWalnpZSy%2BChKp7x0PX1wrKrUu57%2BEgtCeHG96&X-Amz-Signature=84cb93614642b988903d32850711215674a737ba8bbf8a8161c434fdfd0f0229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}


#### Outputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

#### Params:

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=1774a400faf2efebed1cbc947bc510dbb32e072a4bc1410b8ae3e30f8f437fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

#### Outputs:

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=9e4d776550a640e611df7595854916bcbe91219a3d34b86637083a6a59b79990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=a01beb2d1316b471e221f00531e17b1a1e60140cefe810a3b1957204ef351552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=6af9dcb229ac0a417210dbeeef249b0869fded1f95f562c868479409f07cc73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TCZKSME%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T021037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQD13Dj82VWZeYVBUAvalfEeaMNaC4E7%2BzIUZ%2BJ5cUXZAAIgYpohUhgNkv2XPVq%2B1myXiSMpbxSqS8NvdHQVxUVjyboq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBSgUuuKW0qr1sJ0NircAxR96rMSFDXUt3oU2An9%2FK318iAJSvpqBmM2YB%2Fj94Zm2CMxA89eyVv9ed3v5%2BrdFDwn25IrnpQCdftipgOAa7pSd4d084kgXCNlC6NEu04C73a%2FUH33fEEI%2FmVTeZfFGzlV%2Bneryi5GSOpQR%2FfPGAAu%2BJ90KD5A1D0Cb8VCt113Kv2xcbmQsuTwmGvQhLO0wUlzGkgJxm6ICkZQkiI%2F04N9ilc2QGajDdNDbjRKXjFtY%2Fy0xCDipU4XWIFTtfoQzHxjf15ytIsjmzreWaka7893zvtYrHKd8Mm9RqPR4FxJrsRgs%2FErO%2FX8NFE5wcDMYcVkhOxC0Q5Z%2FaRDPXdlH80Smf9szmILbcoNqUTP%2F3NiY3JmfDjreApUmVNqHcEot9ZlQ1oMIBZg%2BnKXTQ53UhT3Nz4aKBOfDIJNove8mL5y5hPcXxwjjKdHfHhXVFtdF%2BvrPHVmVxRq99myvBthAaWhHwMTMIDpvjzpcF%2BYCuCHO%2BhKKVDGvJFxJOC4M455EVnNbt74Vj2Gr0CVzfjHMFEuJ1SgGJ73hOWNSLZN8WDflnNKl4OpLC%2FuXmfkiOA35Zz4BED44YcAKAWksR5VL6nALvgr0DoiL6cChwqzUZNn4YLZlFHdQ8U49hdeMM%2BYz8wGOqUByMWthPL1wDtMU9Pae2zcoPCnEj1Cxc05d7UB653FlWbxJIu%2BYt1tQzHMJ97%2F%2BgJR8mFegLRFqI%2BDxb6fleH8NbNIgDUf42tb8ogUJakEh%2BDzn64mlh83S4Gq%2B6kXZ95FsjONPA7TY%2BQwmAUfDFhkJ2zo0kA0PJxyO00e2mw0sZy1q%2BptRdPH1dynObaxs%2Ff59n1F1IgBJBTqUpKRcNt2%2FcC2GVrr&X-Amz-Signature=5fb8f3446bc74905a6983a8cff35b06cd495fd2ecd4c3b05618e4a470c913d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=a134e13d2a678c1dc97c58567aae51def8bd13308a40c724cbe5fd4b5963b8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
  <summary>{{< markdownify >}}What is rviz?{{< /markdownify >}}</summary>
  
TODO: explain rviz better (say how it is like ros2 echo but visual)

</details>



create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=48331f8538d2f7bc5d48393efcb1c1811118947971c94ff09a66951cc53fd851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=42d3ccb26b71dccad109774fe70510e0cc7dfabe3ca54b1f16c57e5eab597218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
  <summary>{{< markdownify >}}What is in this launch file?{{< /markdownify >}}</summary>
  
[launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)

Launch files are just a scripted way of running multiple ROS nodes at the same time instead of opining multiple terminals.

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

```python "3-6","6-6","6-13","24-24"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=9c85815ecd12e904c9d49c4a6f087fba938c79451301f2d06f52998ae92a5798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=f24379a81cb145d52e8098655d60b1b3b127ef46256422db14a77edc643f1c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=dd46cf6da03cbc97309d1cdcc66c2b671748b0d9ae8eb091cb373638d246964b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


