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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=b956f347ef100534d1848df3d03d0ee3ff6a64adc11fcdc6f79ca31363946888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=7f46a10326c6605867c82c64eaa3ad31e151929e50428c07619c5e7a2db12cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=8569c301768cdf17a476d1c026478e84cd529ccf8a46d2836ab4898f5c7a3ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=6a579c1608fc0ba666b04f0402067b6a233ee36ede75350d783d28e1842d3612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=05274552f19637eb1e7c356025f6334f4648d63834915e9c7f28c13711d83c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=75b3212df18a4d4448f656310336311a9cfe1871903f9445cc0858c199fb0059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=cadf6236174d85b4c0a6c05142685557f2f14d8cec223697dd162795e8b94a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=8843c1c71feadb0a17bbe80b9089e5e9d288865fc0322297b40c744e81916f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=f2dc3d4e2fd376cb71776fd47d7367095af844fcfd198c0488c2862baa9a3ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=2cc072badca0e31b56de2486eeafd1a4edf777d3ca3f482806d091e2041a4142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOST4O4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCYAx4AEzD0ntQ5RhYcgDBRSoroBdWPLcgkK52FN3GkTwIgdBYyvl5k25YKDfkHNAv0FVHJUJzTBe9m99KD9jTEoasqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9EN2Ad9BCBqXWufSrcAzqTfXC%2FrIoTaPfIP8fvbeCClmCGYa7AsPABtgTnWwF54FtqovPjTa6uFEuUxCdfGKDGLWt1hm1j9LhoktILiHNhCzonQIGJGjD37odrk7Raj11030AC8grd13p2iu0c3etsTtLyP5WoVhtiDqq0WTnXJ8%2Br3OzERiaOm5sG3Ksyk4eocPp3HJ%2BIiGzV7qLeK9WwD5sNtqxQXAGyoYtRyYMZ4SHrd5ySm8lpT9UOde5Zo3PT1s86oJiuo0IzOdfuO%2BLC2sSACaFz3FEM5QllhFsiFk4XqfwtZtLa%2FUZN9a%2BxvboORA9kxtejXkt6HSrMRrKTErq%2BvRw4xc10BrRNCYbHUqfQNq%2BVq4ZceRXFXNBys9cG3UWM4336ngdgfq%2FFMUsenrcBGxoSp0n31wjSSvlBcufTknX47F4gCvCJ4iL1d6a1J6qGyElSMR1agvIhaCtcdD5XbawTR5XLhjgkF7DXNOMCsS1KBME%2FjlSDNR2ALdGvMMh%2BxxLLWCcHtXVWOlLkttk63Guqx8v7k0MiBdVSYHM97MhVZftXbAUUS92y19ZEIuYASRtuUzAfqZwTFfzLJExpdfdmH9nTYjKGvQpk1Ft8u2nrKdE7ZwOYiutjUdf%2FJxnGg3vCZp8HMIHV0sQGOqUBjuBVgWPEIOxtQA372FVr4JEs84SDyVgvWuP56bvrLVVqfF8KQumwGVwTsASAC6iFE9fy0rWjcM99gNOlF3PByS56v%2B%2FUEDnVlynzQ8KAEFjB%2Bzgemz8x336DgmyzRbrNWE9JfesYgPxtV9iKuVi6JTyfEiay69nEasb7ryL3zBBfvC0yd0EUof%2BkLhiGoxQWHOWGYYxmRAhjWfF15F82bT8EdBYI&X-Amz-Signature=c611098f1605870c573210725ed5f6b1b1f8ec71d24447d29ecd749b8d099dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD5CIBNV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIAnezjKAXAGPOhNWw4KlV5h56Zcc5ijGaekTUC%2FH0X2vAiEA2SR6hKBN7H8rfRj%2F5fE9FKBi30nK4xi0%2Bq%2B95KL8AoMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUiSlaxXSfCd3GIfircA6TZrFq0Dvf0gBvVzQN%2FUB8qMHEeOS18CLu46VV%2ByNFBSdWTFs6KCMIQi3VgNCmXM7YMb6QW8QVmwIYXFfsq7e1PdkKkkVERJTatchm9GV81iojiQ6I3aVJEd15kj%2FeLhueHmnTwViPi6McO4sQQgo4FiA7Uy48OZfOxm8JHnpVwqBUGU3rqDt23zxb5QtW6qejgzMQXOSyrHqljFoCB47Mthmdz8zBtle8Fuq5Lkps4gLiecRsd7TP2BdnZK4P9BnzJXuJbMOgJ8DeICjL%2F4EnNLrHNGB7VcM6MyjDbl4iVy19uXPLZ%2FAjggC6HqMyxVX9OqA8feKpQPRIybptjkCUzQcVUnChNTr58HleBri1GHBHnHTll7uq%2BTGnMFi1qZUBK1Py9NcBhuu93SRAb8V3%2BL71IE8N9kCI9xenowjD6CUANmU%2FHQSZtXXPER%2Fb1RO%2FRbL6FtqLTFRUlXbTzePuDyInzbTd%2BAG1S6gLZ%2FT%2Fk32KQoVkVwZMMqGcrRLEUjzaFppyziV4xU6xk0%2FHzrG8k770vqOySe4fNpShpBp0yw%2BfLQpeE%2BnKXxDoeNZyyI9mdbnNcfHC6fQwGMSwlDJnWMN7mOdbuW9sg0RMvnN6B%2BBITjfacijoDqhIyMKDV0sQGOqUBcNUCkVsUrq%2BV%2Fsit6UnazlI49r6FtPftUJOCq2eQIm37aY64CVYB4ij0F9bMGutOcuAAf7aue%2B%2BE467lqrUiXPECnv9LgG3v5v1EwtReHz9cjEPQRFlFzkeYKZydbVNQdn5L7L7wixtxbB4jyc1m0FNuRYXjg%2FJ42VSIxu23H1jDOyKBK06LtPyidP9ELu%2FNuSpHWS2byZNVLprWFRkGJO1TMoNk&X-Amz-Signature=88b10dd5cdca76d711488a6d0d427a959324d79e58b9ac9473e98e28ce9ae9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWVE6W2X%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIGJxbAwMo7MajVPOulMxEULCSPQVXnZpfFywdEJ%2FyHp1AiEA8HduZMhJb9%2FhOgEE8HvrzCVViLvSghYLwi0g72Te%2BUgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTFhWWmcEvcbVy3QSrcA4Q0M7QxSHQr6GopDrKzVK7OION7iRfpRX90CFY2R7LoBljJnvuvQRQJCXhxsIHJJB7iQogmQaw%2BcVdvxoN4e8JPoQRXdyzX4YQCR9B5sh46WwB1ZCK7EIz5Y8G5fKhYyKkul7BlnhuPUQIn%2F94lZMlk4ku2E%2Fls%2FyjRNx%2BN%2FRLQg1CFHFmaxEUceVvAfbHuLoYkSnKdsS1BxwnVv60q%2FkbJc%2FRcn%2FGM%2F5tIZtzDuxwxIanNnrQnaV2%2FnDdrRoFFBZp94UTukg66PJ2ZBZwGRLBSg%2BxxBgg7e967M48xbAyc0HCta7QyYwrCXneqkdeE8q26%2FgvUCHoO%2Ffe2b6KBYjZO9Ou44gK%2BsDsAbrOV7RviHsSf3Tu6Q%2BHcbd%2BiJVdAB96WE8cddHfYCWTAducuLsw9fjXIkmxGbWLLsPDi5KlB%2FOhmXBqoM5bg9lA9wAKhXXc6rRuvXvkFN0GaQKunhLhdIg%2F23lFyPm5uaqqnUDvw5wI0s0%2Ba3ZSR40AqAMQ0JUVDMdMmmx3WViWaISyEDqV7pdq3vs7vZpSSRk66b0hT5lgmiH2LtUmj4SnRI9Di%2BWBLfs2rBbF17Wo6Ygv6UFwJco7zQnfK4t7%2FVp%2B5I1XVLzDK0oKEDxJjZhFcMJnU0sQGOqUBqapri3rQT0AIE11N3tL4JxZM5ZpY9iirVNOyo%2FB6pXjXlDTRXqhefHVOfstUBMV3S5pqPd4r68UR5zhG5rz5QCJZuDZHyosOOBQymWnnRfAPTCnglHG4BdKFDyGBO6JAnvpLeceCY9fWc5tc1VGp8Pf4sCASOUQH6tV%2Br%2BxgNjv2LGBNQcr2CtWHWIeVz3fFxBcQstQpDfArnHX1rcgaSwf8ZCzP&X-Amz-Signature=eebb8da2a86fe03bf6c93cbeabc39b16d5b334d85aa72a8563b2627fbf112017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=2d90d30893ca9bca844f8b8cdb70426328d7011b8e8483712ae7f6b2f3745aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWGB5SP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDotrtxcF%2B9bBwVQx2MAsnTHcF86DBT3ktbpQeO%2BVmDsAIhAL9t%2BvSRHpN5ke4Q5I8iCde9Nn%2F33aSkZ%2Fq0zLsQTolKKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwjz1V0SmqZmbBDGw4q3AMWD0MW2R0SWzYXRtGr7DF5%2B7RzPLfPOV4TLRxAFSv07WX3sjHybaAS7bhYI5SQolZISyMO93A3u8UlWJn9OfX%2BDmy3FVkVszUuzieLKF0H%2BfwcvpandXutL%2FL8%2Bn6%2F%2BjwhNa4Y%2B%2Fa0jFMpEYtBgPAhMWCqEIeBBxNuBmv7czi2fT1KemakjtJ7ZK5JHNt2xQSJlUm3yKWmsF%2BtCTUjyFxWqG2kh7Xo0EkBOaL6oPP1KJBdYSRPpXWNgT5HzdQUZ2l1Lxgpg0u28jMf3CZq7Llhk3JW%2F%2FyDyuf7MkV%2FgugnWtOoMhCLISnLAJnGwBla8VE%2Bdqug0chkF5BI%2Bo7i7cgoDaBVtrhB8C3ry8vZYmI99b7entgz8WDHUguIg%2BX%2Bf%2B3Y3sJgVO%2BrE%2FWPZXpBivkg2M9hkhjdEjEjCHqvEjfu1KbeFCTvJqi1TMA4ZHpf8KmZ8zJ9WjeJup8uT2k10wVtxnwn8QJYjZfln%2FsdDYTfcv28QXWP23sLIfofXFoukTxdmX8zv2%2BckwrncGgxnYwWqmJbmVFleDPPwJw9Qq7vmQLVw7gHJhf9vcYUqSW%2B8E1QTxfMXphPFiCpPQmeB4xj7FS1KvZOiodwYOKHqJe7aFCs513Bu3YmsMmHHDDi1NLEBjqkAV%2BftWK0SWus92WzLTqXAIZePU2da2jHinT%2Bu%2FzFR2nRavmzNy0QxsKMH6XApN7578gK%2BoXU%2B%2B2Z8LLmm8klitRw5%2BBVlNd2%2FYk01nmIxDVKxjXAbOcEelQPBK8sD7oo%2BzzLnDdDp3ami%2BILrq5Y3YuTmGo05Xb4vtwTezWuTdogIXf0P29ckC0CBp62phNTE4VZ21UAxMcxrnpvXtGSqUJQS%2BoH&X-Amz-Signature=113c5a398b36d94b9bf7d6db52bb48f490d0241f12e362c28133673d0ad60d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=04e5aa20a9f0fe4f3b0c9ad469f794f97298f6c8a09c1f6b6e2109b6662c3082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KSVDC6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQChgQG3zikJbYwyDZZ9BOk9U9PsLYJlDEXC0bGWy7SjVAIhAPZ90N3QuzmB6Dk6suEyl9g0VSCDe4Q869FiYeXXEkIBKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfYU8qeM5LH9OANvIq3AMYbOhUHn40PzxRXmxf3b5kLRlylMZ%2FjDin35du9c%2FzfB8F%2FLt9HJXTSJTNURmPrBGLOb76Twv2%2F7WwP7RXnpK1L7WiBs61u2vj2QQ4326qA5H5j4G46f%2Fn0iDrVQodJ0rdQXcRRzcDs2Hgx2ppjif%2FZZafPnCQCsCbtgk60ElspnxNlbJl8odVOLCXdxaz%2FGezD6mhwHCQ5SW%2BrnKsBuIWLQ2rX3SvXa6hP%2Bj2xtOAHMvkblA5CHUKmLLlCAzA8TaahZjVMEEorgP4B4okeJUYXeFIzMgXaICvyBOQvll%2FjCBCsN9J9skZcletK5VOZyFKFmpP1dlXwy8EkmH9ThVpfdnGJWRpJ8LeBkRjtBiKpmuZ7F%2BROsBuKsHgum1iAP3E10NRSqvJssd6UnxdQMtK64tZiFCIRGlWMoLQ1NUpakyMKn%2FjT%2BuRGtj3QUuR5OUEcNEXvDA33JpGa8jYE0B1xltMdonN2xmMLwvByMdE48uEjRKttlCwcuRCz0B7iCUT0HUSsH0bRC5fSOnG3CCG0QX5mVUsDW5zAtK9j6BXUAb0g79deu5vhgcbRDok9F%2B0ubgFjBDn9dFSGR%2FRFn%2BF5XVwPVvKoweLv77XnA%2BcFlCygBEkAxnWinw%2FyzCq1NLEBjqkAVAjfYDplfj7UoZj3rMYra%2FvRPVERvkUN59uERZxNr1O1z45M%2F8JFkZOjMqp8kXgixukFyvSb99WnwSmspOXo2KnBo2qXMNnVWxUA9PYSVwVrQG8JF3gAJwAHrnjVmJTJ07DiDqnMC0wPJjLeanK8L3olCMZodwu1YL0aQYkmtV6%2BvpCDbldJQ8IV1DpQRyqi6amOHksROU8z9xhiYeUA4RCEQda&X-Amz-Signature=b13895b931765c4f4d139ae2d8ac0b22446f1c3800d68e72de361e6eba47e5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=e318b351d4a1b97862adebba9ccd0321006699db9ac3ebaf419aa466ba0cfac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXTOOYP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCl6fb%2Bi7TbS%2BxARHTs3pGieOxlqdNGAijjpRpl5RakXwIgMp3FPrCHr6tdTP70cjqPLYEycDCgNpe9G0B%2BLb2UNK8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITAOizlcIYEp6fuXircA2Lfsgse8OOZTf00HEr90CdTuFmj2dmLp61GdzyLjl3d6ij%2B2AJsX%2FSy1Wo5ly7LrAukj%2FgDy4lVf01b0hEgI9RkDU0E8lWkylO2LQCbfowTC8d98EdEfMeFuYsqOqeQOmlGrik0LLMvNe5C6iv6ugWFYpA90%2BHXK8LyRtHE88aPFdXGUhEgSI521egeS2yNMRspLPSp6hzAAD5VraLWwmJfuKHvMluHLXQGsEeuMJQWbpWapyW7hHFnNP8ct0xfXhg7Gvm17z%2BKoS3X%2F7rIDX7ckBLwJnV8IEUDl9ih7%2Bq%2B9xdNB%2BSPHb8AATo6FYJRvpxgfyLo3Mueq2C7H4an3FEMtnPpXffbIPGvFW4c%2B3y9IzAbvn%2BIkf7Hspzj6whnEFiZodt2uoVz1oZNMoJesofGQ0jl5p%2FtAea4SOv8ZXTsN22w84cT7zGHvNu8nqGBwB%2B9y%2FjOXB6fuSW9MmMSsbcTsTB49DNBh3A7Jv%2F9fymb3AwxUH87AT%2Ba%2FNcNlt15Eaf8V3tCU1Q%2Fu08iAeC4l%2Beshq9%2BPSJH23t6ko%2BWG2L4%2B2bGX82fW78EJeCs2Bf3FizBZGYRMW6Us3BaEmOHI1QMtlVIpXRp6tXU6p%2Bb3dJ%2BVgCsQxCuSHHgh0DIMKHV0sQGOqUBOY%2FYnoiNkR1pwpRwmI7mZz1vA6V8hE0JnzgiCI9TGwdydjJxC6eE9L0u8m%2FIXd1vqRVjMLRb%2Bu8S1w9nJ%2BxneOHpf%2FXsZ3Vnz7mIG4E7frDmS%2BravzKzCwDq4dGAXYIs2pqsZeEubqMnnsbBDKufOCHArConRYJdOPMrmdPiOXLFpAnzN%2BJrDAiM79U2IaCaiuOYIdSsXBbK0A%2BR3bbWxaAHkMP3&X-Amz-Signature=72d690c532e38c1d046071f22a83374adb15c1f3503870c947be2360fa775506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=3fbca263867d83573574ddfd1f7035ed8bbdd4e5f6651c8b5a76f5fbbb004f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EGRJJN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHZDOWlBKOaWjzz1%2BqNYuSK7Ft%2F4eCmDvvYnAyt3YK1jAiEAyFQQ1UY25BHCC262Qq4Vp0hj73AGRmrz6%2BkDbOEg3kgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo3Z8Uf97hTAfYdkSrcA9xQ8GxVgn7U2vY2RvTHI%2FPYhyDoEvbAjTTFfmFg9%2FHn99ouF%2FaR73SWXwiioGHYwDcWxaX5CaTrd58wF3TL5hhSePeu19uynEoJa96aIs%2BDsJDTIxv508YGWuP57CNc4BCXPsG6b29Hzh5SnSbhLjRCddM7UtbCAc3ww7InDZN0ivSzeLY9hG8sTPmoxRfF%2F89V%2FSPIVA%2FTh63YaXIorsLicQFtENryYFhclALbpk%2FhsOEJM7rZQGbpl3TcZyNWHdSV8sdTzh%2BJwGve1I%2FYGojH1QEmSglWaTlBUYQc%2Ff2VXCk1WYUNdm%2FOUvE8y4wzUs3DQArGoZ9gfZ%2FSuCHFZeVhBH%2FyVjg4PJ5t3zSZjS2%2Fuy5TCpWxC8QI4iBmirQO%2F7zS%2FlBHcESwyDHtFXNcUyhcwvF9BDmEg20pA2s2F1gaJctyWEtuq4WGIZZXmOAoqMOtaHBJ3zXX%2Fljse6BJLcYBZ33rCvwgNF7Q%2FTKhRtfYcNoXUHHFjcot7BNWlH3NRPLgZhZu48niGf85or1P6mzuUibpyfBStG8PCjQg78OETnTnWt9nbWkC%2BuDttypQNygwMV7vwiiPAn9PL02wg4fB20AKtkN%2F57CJIMV%2FIrRWCy354Cso92e3n7NdMJ3V0sQGOqUB78vX9wWsptY%2F%2BpChLXnrdhyVXJenuspbQ6AyCoyAY9jB8m2e9%2BkBS727fZaEAmzMCNaasanvBCZx%2BnHfQjqokYCTs%2FsEgm4D9uLud%2B97cFqOynj%2ForseT5NXz6%2FWlN9DKr76uNEaX8DUrFWujnGbBMy5c5EHdPuUrTfKhb7oDpX44OTCSGPOjCF7FeAoQazPhGe2OqnAOVUzLth0ySe%2FrWvTbE7d&X-Amz-Signature=066fb50e3ad73789c9465e6c99b7ccd2e8c05eae00deab5ee272c5f24c16baf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYHX6AG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCICd8ESRQAO82sHREImdmTTEyRj%2F8TBwcK8xOAGYxrYhYAiEAsx7%2Fnjryi7TPoAWyTMmEyO3xUmUrg7kXqkqpi3Cb5zsqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0RJ6gf8Bn%2BUEMzjCrcAzEkErAOWYhvOdq6PdJiHhJoBs8fduQYBcqcvSlkc023CZJZeZ1SYLPH%2BbAmZJxJ2C0DEgAQdk70GHN8GjL84Ypioxs6VHCpbHFvWN8gQ01oflSXsTELFxlqrKzmRa1fQSMVe4E7cDM%2B8eftQvqUkPma8%2Beb0RlpdzgEF%2FzRDp4tuZSpULjs7dvN8TyVGBiAiAz%2FjdJikKPV5LPxCQf51%2B%2FXeJ1payE1xhI0AK%2FAaysLT3LcZrBZs7%2FiFIKvnvRrgpd8JSihREshoQ11kzankTMwrHRz8N3ySSgWPL5RYfjJrMdsaOnXvtvLEP838JmxkZdnzz%2FZtBJtChQhkRi5773DvBpd%2BORKxsnDpJByxKdKZ7JMCPgnG4q1CjiCs5NZwQdGt43okvB2l3Nm%2BOPYk%2B9tsPnuWq5o7m8DyACoJ3ravBUeCDWp4S8cZ83HpM1kIcvrL1DItwxy0CLmuSIQjzq%2BSoYw09%2BHpfZVDPP74aksw87pFSptI0mZo%2B6gh7p5c0kEZU6FXcO4lkIntvTngJQrfNgLJHv0NYZ1IHS%2BlLgP3BVh2%2BIeGcE2enbSpqOwJAM8xj8%2Bq%2B%2BsoDhgt3E46qzCCCLDppypuIYrdCp51gfMwO095BQNtGlsr%2FfxMK%2FV0sQGOqUBNdMDaOKeUkOBwagUidr8QQfgpw7pvzbvOUpiXNbI4SUrQAxLS7RINDxCtbmA3GRlwpseAMb23ozruf0fAjdHuAfDWGRZpwHd5bkKWz%2B5ScUfy4xiKR2ZAFpEkHg23jSKrGkZ52egtYzw6m0tqcukIw29S0u0AHpijO9%2BSt4gWxoK8JUEq%2FC761Lz14lA22DHTgvxaVXQLfSFovCJHMFzNVl9TmpD&X-Amz-Signature=818d048155297ef07b2f7faa48dbd5b425c0088f2c7667fc60d3037c282692fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WMXSHU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIF7DUwfOeaXwwgfnn%2FANyAeqiG7dLISY7B4o5liuOsvtAiACAi7LJuJROGSbDKKxpX9g1Ad7a3TZStdKM%2BZGWfAVHiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnponHvc9i1%2F8kLGvKtwDfOEZaxQS7zUicwhWr7I2Lh659w1NxQ9v2hVwrt1DeoSyqmnUw2EFtr2s2PVvq%2BWz7T%2BtTQ6X9N3ZvSPdNiKE9mQrcQSq%2Bbqn6z1grbmWBGxUntVZy6wOR6nuH%2BymSwcPX2z7dGcSkIjVD6vmWEzvbz2Ukpyv4U6vS1%2BNjE8hwGvEansd%2FjN59po7KyqzroeIAxQXBToVG3pFXesASlLh%2BnPWJBWvFR5VQ3Z%2BDXRJ9Qu4fyocmYdN%2B6ymdp%2FwzeGftG1hhJxLZddcXcXCFXLRmiWo03GcMwIlKqRhNL8LUdsyuNIRtDWSC%2FmtqPdUN68ZJy%2BD4u82ppwRXR9fKvVnRBkBCMT433eVykDGnx7W9p8p1tjN4J7UWvoXjnv1wPi1vqq%2B50E0QnPliT3i3uQqzk0%2FAjXKult9tDpCezDGIM%2B0ksdf5c5OvLt7%2BfY%2BKzx1uStwyRBikNcQrOQO6T%2BafJ4fESEmN5f3ry12DjsiR%2BMIm8ETntvwSnS%2Fn5IkHIcmhXmZaEzwFbtbTWzkoGElx1SAXrltp3fLdThoVL0j7NYUmP9nUbgGWsAhEoWS8SXiSHJDPQIpZo469KmP%2BcrzD7OUmhUZVLVj4pBuaOhWWPkNz%2F%2FC0vZ%2FWZMhORowpNTSxAY6pgHTl2nx%2FWqKKtsHhvf22lD57MKysA9t6yk4prMtgwhwssvA92ibHQ%2BJQmKLCwleX%2B0lr4zyhxQ7JKGnflHffZrMFZv6v7yXb1%2BGSGTX8I9BBxCBMi%2FGtGEKETvkHuQaaopfBpebqjVh4QRe3fmnFGbTXbPdTjCp5hXGv2nzOfsH4dr%2FQmjNiSFPwDkrELIodZl1VDKxs4d9VYdOro4nYjPExxUIKToS&X-Amz-Signature=1e6a1777159f5d86a309e46570edc4160048bc80841a536de8c17a7b46c5993b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2P7VB2W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDA%2FvGHVRw7AtF2TyuVhofMBu6Rx8IGbdLofAszdpCJYwIgJLWMJWe0vqjtiG3TEmSAJcSd6S%2BNt67%2FhvYTrJnpMKoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvArpWIkm01jszIMCrcA%2BRYQEJ22jDwsfRc7S%2BALNr%2FJBiJFYIUFe6lBUqCCuVd%2BLzKr%2FPg8UM3qiX8PgzSK8rIsvSf6QDdySlVRK8A4vgbTrc8Zl7CttNkwUhOkYStWDV5wsUeQjeI24L7X4Ay7G29pxgjB0WnT20vERtOKaXS1ArD5NipdNEQcSYUxM4xg2QZQOp1Wdk91UgVuAxgdOagQXwXET6aP7w2ijT0IduGgcahdrP8MQ3LYw5SzoDMgKmCNlzw0A32OotFubKYVl7RcgxM3NhrOJdOUufx0EDKBcTlv5ZIaMljHYeTE%2F%2FCtwgKnAakBTrbM2rkI8TVMky%2B8PtQcnx07Y1yD%2FpKMbt1V7OmFvYXZa7%2FkgsuUXPYO0lgMaU5jbQDmwI8ZR8JLbcIsyJ3m08w3TGX71D8%2BAFtbohL9Iugg4U6rnfkpOW42%2F0U1yXT%2FHPj48RuBT%2Bo%2BP2umjlRC5A42iJIfkZzYGvhnp0wLN%2F%2F0nSOILwKhBbUxwdVMhkTLwn9p0icJeD%2FU4JCcWrqrg7o5jAS5iZ6m4WWzLlpdF95a1uuGA3%2F33%2FUdm5DiZlRz%2FDlBIiO2cmRVc%2BjHDNNquy5NGuhBeg25iCn6qDDqR5vbapdDMY9m%2F8Zri3pTo9wsB3UbkzxMJ%2FV0sQGOqUBW1W0SPtDC0t6tgOen3j7FKXaW4hgppkYY6NKYXtIatPDTTf%2Bthn5%2BHNIwqzIqdimXgM7KA0TmuSoIRCqtuuzbnuUuDzKa%2FYjYbCUFFaCOAAW0GNrPP%2FyVamCPYAdtqgjP2hz3kwSn1Lu1ybHXToVfdNlStgMjMQWoE6%2BK2IP97Hc5Jj%2BjO3t83%2Fy07esKtxI5gZkNdUGjUlVtze6OIw%2B1fhzhDzt&X-Amz-Signature=93b5c80b759ee56d48c040192a953ae08475d283b0db5980dd8a58dd0ae1cf85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHCTBCD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCcXeQin1%2FChvcelXOr90yH%2B%2FsH67qL5Z6O1woE92U0UwIhAOqE3ld%2FZPpPGvAMKV9pRw3YA6MIzxAlWA4KW%2FTU9nlPKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgmTWng6%2Bnkry8an8q3AM7S8JshFDlZjzh5uteLgT2tQ4waSLa%2Bdwony5Y2y6xlaxI8VnF85D0SBsFlyfVuWc1RgfGZHoftkL%2FORapL6qDr1zRn%2B%2B4561BjyScSxHunRm%2BP2JWen6OTlV6MicG9fNm3XbCZaZKgp6XfuFS0VsdbXaJoBMw0X3NCtrWIgsMjtGWc8WT0mJPLCEfckseG%2B7JM1TbV8YqbCrEqT%2BC6j7Ucroosb5BiQwvNTHowybkUgrgeSFFgH2Br8FYAJZfh1vqjB3%2FY6rKKk7M6TrwsALo7DRL475%2FgaUGeax6dS8CqaQlHLR5NGW%2BQkOGJVcsyQNPNb1zLCphB0eYcfCvwOiSiixhNLvZ2Wlg1zdc9M4KAJOO40yqhc7%2Fy%2BlB%2Bi%2F8Zn1ccdFcp4D%2Be4FK2u4kM%2Fe%2FpIwLWQazHcoaRBVv6w%2BXo2iu5InPEKmLvkj1%2BnWQxLTxIs2ZCQiTbXGz6l4JiwRMzBBMMy9%2BtwyNkKlgjOzD55B%2BuVg5f58Aj1fuycjgCCwPR35PuIyDuw%2BWqJeC7joKkfpt9wex%2F6atOJXEz5s4ShCtpDmoQpUUiOEjh4iVhanhfZ%2Fpwd4ymFmmMDWdWSGDSAC9XxPIOyc8Zr6voXdXALS9HHTsjwec%2F8NcSjC81dLEBjqkAdCSI%2FTIo5SCPsdzHmfWVeVHutkDA5Mxe3c%2FBBbXR8yIkUQpq5ht5H6IJR7yNXe5DcLi2%2FQc5zV%2FM2m8XKSJ2qT045nE1bN6%2FAKWO0kjJ22yGqMDBlQG%2F4BMYklcDIFHiT700zDyR9nGhkLfHtPwbIrvSCBDIl8DTJbI2tu6vnPqWxhLBPGNtS6M%2B8DnVwCopgwxURXV62bBJqZ0yotHlU9ZKC0F&X-Amz-Signature=02e157551bcb71274975af4d1a2d241f02f3273f0767b1612a8b48d46c7d5f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=44956eeea9c91a616738177efeddbbbabe814d3e08fedadaf7d962b52adfb11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOTUCRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCUfFosG%2FzTVLDe6miaXJFN2PGK5li8pIlGCUUUCArDZAIhANR9t4tG7Zeh%2FMHJrN%2BWqtuhFZ9MVZZbhn6r%2FgWULEGJKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FAWRoIPjmrwptON0q3ANvJhtStDohrU60mlIec1ZQG%2Fb7bp0PN9fDVPP70U5DzaRSkaAuHonROmD6er97i3GqgkeH6asidCijtKJvJ0FcrBoEQ%2Bi8lpJI8Y66cGd5NbvDtWW0nntiGVHrui5ApekKEDygWlyK4N3e%2F%2B4JyXpVw8O4N4WTS6jQGHhmonmkX5109bzGTb41A6nHKLIpbG8wJCdzngSW7FI9Ak%2FV6eOluROX1c0X2tO6cUNzImSXIJ5Np7BwBcI7L%2Bp%2B041d9f05T39lBGi8fXq6TvMlJeJg28Bqe20XKt3JfTF6x6bSgB6Uq3%2BRxUe9KUDsCyGsSZP68uqH0RGNZx0aXYuygPio6T9go%2BdEFO15FiUN3bq0Dw4LZimwZ9v%2BAy%2B6mWYBUA7jNoqWNYq4sC58N8ARgwTpGWLTLwUL6UcC%2BS5Mp58uepF3p9c%2B%2F2%2F5shonDJQOt5S5Oo5gKRPh4TzuwrpkzFTzy8xpnAeV%2F6jXdd75UDMhgtjZFhtgJIIuXipYk%2BiGKFWdlu5QJOteQ0SjuFiHZ5AGppioBmbFHJunhfcPSzPwH4uBb1R82E3owOeSn5UW1nqI3H53mr9M5tn7tekaDQ2gGE7sv%2F14g5zMhiWVtS9kUCfCahx2OClGU0RLeDCB1dLEBjqkAUjE4bTRkdoSCRnMUwXBmtwrSmQtI9%2BAh4Z7oewKtDY9dFdxyKTLEkkkNJt73mHolvVYRTjiSjBaVZfjbJmtQEQYAqAyPRvQB%2F9bidouy3yYwy3QRkg%2F1t97JXuj2Srm3MEpoGutNNIku5OO8SUROhJKGOuT8dWHqd8iiCk41DZK8xUU9b3dPixpBp3ERxQ9ovBYrY%2FnGcA4LO6r9NMIDzh2Tj5n&X-Amz-Signature=dbff525afc67a508aba7aa6257a7c459387a632980b603fb6ab97c4eb4cde0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKL53DD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDpYvJYxHh4Tl5U8Dzj%2BLew4pIHrTk%2BUUR%2Fcokc6jVV6wIhAItTqzsjLlbSwjF65lllrM7V0cH57lY3Dza3f4u6ZnL4KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6u5v9AaDtjHA520q3AMfum90ehXt2Zc6%2F2chZdTVhMilR4ex3lWIaUQLmk6dntJ0cW0E%2BLeel1wXArOurbWGPHQlfcc3H8j3cQxueiAMmgwPdfmUzeqHu8bWpaWyC1BQzeHuVQaxGU13wCf5T%2BwDjmqLNl9jekkHIwR62HZpASTrN1a6eydMBy5azKizATsSUHWAB81NuhWXX3rK%2FZxDeVM%2FVCgz%2BnpkVK%2BCA9r2Drmoywfr1U46%2FGf5ne6jxhN%2FuReUuqA7wctODV3i%2FENfdVNgEAaS%2Fwz%2FZBwO%2B%2FmLqy33YTSLIGH9uLCWrv%2BwUY%2FC1VMSUgZ%2F9Ew3bn%2FN8eq60E5RCA2cTsWrUcaA5PEc8qRy0gb1IeUSuDzwZs7z%2BjlkwznGL1Ggi5w7g3jCHu0oLoYXJOZOiLjc7siJWIMlRM7ED7UuAj4UcqND5xlSkKiGZ3MvN1FFI34j%2BANIy7l1emXfudn9%2B%2FRSkzkqBFHyDG8%2FkmdHiDAb5GYH67LVW%2BH8YYfzUC%2FZCVD6z9KPuoeMoalhqKidhmSFlTY5HOciTwZTAzHmBsigOeFdZ9WnGdCLgd%2FI05pAWupHvSlqDAarYNH14VmG668bPAATUarxqyyADqpQsDcJAYfVtVVi9Af4j67WecpOSsHP5zCc1NLEBjqkARrVKl1D9eMTFKAa9n7Hyuakod8UEjoOyqA0we3AYPl3zRcD3FMRwM8LTJeJ9dWHYhTVtu%2FeOiF605TbMaAghdVjRdB3Ff1beRcNM7PmnRtPmTBce%2FvKkBzlSrX3TkpmO6Hestc9jHeiox9fbD7E5VKZKM2%2FHl9GlhslZsBHavrKgbmn8nF3j65u90WSXE90Ksskbe%2FN2QoDe3tqTLl5MKEoBBor&X-Amz-Signature=695df2022b659834d0fdd933bbcb127cb5f07059264628fd7fcd9f70b28c13a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKL53DD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDpYvJYxHh4Tl5U8Dzj%2BLew4pIHrTk%2BUUR%2Fcokc6jVV6wIhAItTqzsjLlbSwjF65lllrM7V0cH57lY3Dza3f4u6ZnL4KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6u5v9AaDtjHA520q3AMfum90ehXt2Zc6%2F2chZdTVhMilR4ex3lWIaUQLmk6dntJ0cW0E%2BLeel1wXArOurbWGPHQlfcc3H8j3cQxueiAMmgwPdfmUzeqHu8bWpaWyC1BQzeHuVQaxGU13wCf5T%2BwDjmqLNl9jekkHIwR62HZpASTrN1a6eydMBy5azKizATsSUHWAB81NuhWXX3rK%2FZxDeVM%2FVCgz%2BnpkVK%2BCA9r2Drmoywfr1U46%2FGf5ne6jxhN%2FuReUuqA7wctODV3i%2FENfdVNgEAaS%2Fwz%2FZBwO%2B%2FmLqy33YTSLIGH9uLCWrv%2BwUY%2FC1VMSUgZ%2F9Ew3bn%2FN8eq60E5RCA2cTsWrUcaA5PEc8qRy0gb1IeUSuDzwZs7z%2BjlkwznGL1Ggi5w7g3jCHu0oLoYXJOZOiLjc7siJWIMlRM7ED7UuAj4UcqND5xlSkKiGZ3MvN1FFI34j%2BANIy7l1emXfudn9%2B%2FRSkzkqBFHyDG8%2FkmdHiDAb5GYH67LVW%2BH8YYfzUC%2FZCVD6z9KPuoeMoalhqKidhmSFlTY5HOciTwZTAzHmBsigOeFdZ9WnGdCLgd%2FI05pAWupHvSlqDAarYNH14VmG668bPAATUarxqyyADqpQsDcJAYfVtVVi9Af4j67WecpOSsHP5zCc1NLEBjqkARrVKl1D9eMTFKAa9n7Hyuakod8UEjoOyqA0we3AYPl3zRcD3FMRwM8LTJeJ9dWHYhTVtu%2FeOiF605TbMaAghdVjRdB3Ff1beRcNM7PmnRtPmTBce%2FvKkBzlSrX3TkpmO6Hestc9jHeiox9fbD7E5VKZKM2%2FHl9GlhslZsBHavrKgbmn8nF3j65u90WSXE90Ksskbe%2FN2QoDe3tqTLl5MKEoBBor&X-Amz-Signature=3599d447956bb266036c622aa8cc810e21fcd25be361abc21877c7b518a72563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKL53DD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDpYvJYxHh4Tl5U8Dzj%2BLew4pIHrTk%2BUUR%2Fcokc6jVV6wIhAItTqzsjLlbSwjF65lllrM7V0cH57lY3Dza3f4u6ZnL4KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6u5v9AaDtjHA520q3AMfum90ehXt2Zc6%2F2chZdTVhMilR4ex3lWIaUQLmk6dntJ0cW0E%2BLeel1wXArOurbWGPHQlfcc3H8j3cQxueiAMmgwPdfmUzeqHu8bWpaWyC1BQzeHuVQaxGU13wCf5T%2BwDjmqLNl9jekkHIwR62HZpASTrN1a6eydMBy5azKizATsSUHWAB81NuhWXX3rK%2FZxDeVM%2FVCgz%2BnpkVK%2BCA9r2Drmoywfr1U46%2FGf5ne6jxhN%2FuReUuqA7wctODV3i%2FENfdVNgEAaS%2Fwz%2FZBwO%2B%2FmLqy33YTSLIGH9uLCWrv%2BwUY%2FC1VMSUgZ%2F9Ew3bn%2FN8eq60E5RCA2cTsWrUcaA5PEc8qRy0gb1IeUSuDzwZs7z%2BjlkwznGL1Ggi5w7g3jCHu0oLoYXJOZOiLjc7siJWIMlRM7ED7UuAj4UcqND5xlSkKiGZ3MvN1FFI34j%2BANIy7l1emXfudn9%2B%2FRSkzkqBFHyDG8%2FkmdHiDAb5GYH67LVW%2BH8YYfzUC%2FZCVD6z9KPuoeMoalhqKidhmSFlTY5HOciTwZTAzHmBsigOeFdZ9WnGdCLgd%2FI05pAWupHvSlqDAarYNH14VmG668bPAATUarxqyyADqpQsDcJAYfVtVVi9Af4j67WecpOSsHP5zCc1NLEBjqkARrVKl1D9eMTFKAa9n7Hyuakod8UEjoOyqA0we3AYPl3zRcD3FMRwM8LTJeJ9dWHYhTVtu%2FeOiF605TbMaAghdVjRdB3Ff1beRcNM7PmnRtPmTBce%2FvKkBzlSrX3TkpmO6Hestc9jHeiox9fbD7E5VKZKM2%2FHl9GlhslZsBHavrKgbmn8nF3j65u90WSXE90Ksskbe%2FN2QoDe3tqTLl5MKEoBBor&X-Amz-Signature=8c4b483cb57e9f431ff0b7b5b965512419631260e53f0a41861d82cb93b055a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKL53DD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDpYvJYxHh4Tl5U8Dzj%2BLew4pIHrTk%2BUUR%2Fcokc6jVV6wIhAItTqzsjLlbSwjF65lllrM7V0cH57lY3Dza3f4u6ZnL4KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6u5v9AaDtjHA520q3AMfum90ehXt2Zc6%2F2chZdTVhMilR4ex3lWIaUQLmk6dntJ0cW0E%2BLeel1wXArOurbWGPHQlfcc3H8j3cQxueiAMmgwPdfmUzeqHu8bWpaWyC1BQzeHuVQaxGU13wCf5T%2BwDjmqLNl9jekkHIwR62HZpASTrN1a6eydMBy5azKizATsSUHWAB81NuhWXX3rK%2FZxDeVM%2FVCgz%2BnpkVK%2BCA9r2Drmoywfr1U46%2FGf5ne6jxhN%2FuReUuqA7wctODV3i%2FENfdVNgEAaS%2Fwz%2FZBwO%2B%2FmLqy33YTSLIGH9uLCWrv%2BwUY%2FC1VMSUgZ%2F9Ew3bn%2FN8eq60E5RCA2cTsWrUcaA5PEc8qRy0gb1IeUSuDzwZs7z%2BjlkwznGL1Ggi5w7g3jCHu0oLoYXJOZOiLjc7siJWIMlRM7ED7UuAj4UcqND5xlSkKiGZ3MvN1FFI34j%2BANIy7l1emXfudn9%2B%2FRSkzkqBFHyDG8%2FkmdHiDAb5GYH67LVW%2BH8YYfzUC%2FZCVD6z9KPuoeMoalhqKidhmSFlTY5HOciTwZTAzHmBsigOeFdZ9WnGdCLgd%2FI05pAWupHvSlqDAarYNH14VmG668bPAATUarxqyyADqpQsDcJAYfVtVVi9Af4j67WecpOSsHP5zCc1NLEBjqkARrVKl1D9eMTFKAa9n7Hyuakod8UEjoOyqA0we3AYPl3zRcD3FMRwM8LTJeJ9dWHYhTVtu%2FeOiF605TbMaAghdVjRdB3Ff1beRcNM7PmnRtPmTBce%2FvKkBzlSrX3TkpmO6Hestc9jHeiox9fbD7E5VKZKM2%2FHl9GlhslZsBHavrKgbmn8nF3j65u90WSXE90Ksskbe%2FN2QoDe3tqTLl5MKEoBBor&X-Amz-Signature=a957cedecb2ba07d4099d5c20413d900a77b4f8e70ca319ac7d772f47c44ad85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKL53DD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDpYvJYxHh4Tl5U8Dzj%2BLew4pIHrTk%2BUUR%2Fcokc6jVV6wIhAItTqzsjLlbSwjF65lllrM7V0cH57lY3Dza3f4u6ZnL4KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6u5v9AaDtjHA520q3AMfum90ehXt2Zc6%2F2chZdTVhMilR4ex3lWIaUQLmk6dntJ0cW0E%2BLeel1wXArOurbWGPHQlfcc3H8j3cQxueiAMmgwPdfmUzeqHu8bWpaWyC1BQzeHuVQaxGU13wCf5T%2BwDjmqLNl9jekkHIwR62HZpASTrN1a6eydMBy5azKizATsSUHWAB81NuhWXX3rK%2FZxDeVM%2FVCgz%2BnpkVK%2BCA9r2Drmoywfr1U46%2FGf5ne6jxhN%2FuReUuqA7wctODV3i%2FENfdVNgEAaS%2Fwz%2FZBwO%2B%2FmLqy33YTSLIGH9uLCWrv%2BwUY%2FC1VMSUgZ%2F9Ew3bn%2FN8eq60E5RCA2cTsWrUcaA5PEc8qRy0gb1IeUSuDzwZs7z%2BjlkwznGL1Ggi5w7g3jCHu0oLoYXJOZOiLjc7siJWIMlRM7ED7UuAj4UcqND5xlSkKiGZ3MvN1FFI34j%2BANIy7l1emXfudn9%2B%2FRSkzkqBFHyDG8%2FkmdHiDAb5GYH67LVW%2BH8YYfzUC%2FZCVD6z9KPuoeMoalhqKidhmSFlTY5HOciTwZTAzHmBsigOeFdZ9WnGdCLgd%2FI05pAWupHvSlqDAarYNH14VmG668bPAATUarxqyyADqpQsDcJAYfVtVVi9Af4j67WecpOSsHP5zCc1NLEBjqkARrVKl1D9eMTFKAa9n7Hyuakod8UEjoOyqA0we3AYPl3zRcD3FMRwM8LTJeJ9dWHYhTVtu%2FeOiF605TbMaAghdVjRdB3Ff1beRcNM7PmnRtPmTBce%2FvKkBzlSrX3TkpmO6Hestc9jHeiox9fbD7E5VKZKM2%2FHl9GlhslZsBHavrKgbmn8nF3j65u90WSXE90Ksskbe%2FN2QoDe3tqTLl5MKEoBBor&X-Amz-Signature=3b51c51f3529ef2f335f564862e82749ecde2c4440b61741b4bfa75dc93836da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKL53DD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDpYvJYxHh4Tl5U8Dzj%2BLew4pIHrTk%2BUUR%2Fcokc6jVV6wIhAItTqzsjLlbSwjF65lllrM7V0cH57lY3Dza3f4u6ZnL4KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6u5v9AaDtjHA520q3AMfum90ehXt2Zc6%2F2chZdTVhMilR4ex3lWIaUQLmk6dntJ0cW0E%2BLeel1wXArOurbWGPHQlfcc3H8j3cQxueiAMmgwPdfmUzeqHu8bWpaWyC1BQzeHuVQaxGU13wCf5T%2BwDjmqLNl9jekkHIwR62HZpASTrN1a6eydMBy5azKizATsSUHWAB81NuhWXX3rK%2FZxDeVM%2FVCgz%2BnpkVK%2BCA9r2Drmoywfr1U46%2FGf5ne6jxhN%2FuReUuqA7wctODV3i%2FENfdVNgEAaS%2Fwz%2FZBwO%2B%2FmLqy33YTSLIGH9uLCWrv%2BwUY%2FC1VMSUgZ%2F9Ew3bn%2FN8eq60E5RCA2cTsWrUcaA5PEc8qRy0gb1IeUSuDzwZs7z%2BjlkwznGL1Ggi5w7g3jCHu0oLoYXJOZOiLjc7siJWIMlRM7ED7UuAj4UcqND5xlSkKiGZ3MvN1FFI34j%2BANIy7l1emXfudn9%2B%2FRSkzkqBFHyDG8%2FkmdHiDAb5GYH67LVW%2BH8YYfzUC%2FZCVD6z9KPuoeMoalhqKidhmSFlTY5HOciTwZTAzHmBsigOeFdZ9WnGdCLgd%2FI05pAWupHvSlqDAarYNH14VmG668bPAATUarxqyyADqpQsDcJAYfVtVVi9Af4j67WecpOSsHP5zCc1NLEBjqkARrVKl1D9eMTFKAa9n7Hyuakod8UEjoOyqA0we3AYPl3zRcD3FMRwM8LTJeJ9dWHYhTVtu%2FeOiF605TbMaAghdVjRdB3Ff1beRcNM7PmnRtPmTBce%2FvKkBzlSrX3TkpmO6Hestc9jHeiox9fbD7E5VKZKM2%2FHl9GlhslZsBHavrKgbmn8nF3j65u90WSXE90Ksskbe%2FN2QoDe3tqTLl5MKEoBBor&X-Amz-Signature=3d8fc92d1e8c76ffe0f09b12a096416ba0b0925370f71633afd09deb6219b946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKL53DD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDpYvJYxHh4Tl5U8Dzj%2BLew4pIHrTk%2BUUR%2Fcokc6jVV6wIhAItTqzsjLlbSwjF65lllrM7V0cH57lY3Dza3f4u6ZnL4KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6u5v9AaDtjHA520q3AMfum90ehXt2Zc6%2F2chZdTVhMilR4ex3lWIaUQLmk6dntJ0cW0E%2BLeel1wXArOurbWGPHQlfcc3H8j3cQxueiAMmgwPdfmUzeqHu8bWpaWyC1BQzeHuVQaxGU13wCf5T%2BwDjmqLNl9jekkHIwR62HZpASTrN1a6eydMBy5azKizATsSUHWAB81NuhWXX3rK%2FZxDeVM%2FVCgz%2BnpkVK%2BCA9r2Drmoywfr1U46%2FGf5ne6jxhN%2FuReUuqA7wctODV3i%2FENfdVNgEAaS%2Fwz%2FZBwO%2B%2FmLqy33YTSLIGH9uLCWrv%2BwUY%2FC1VMSUgZ%2F9Ew3bn%2FN8eq60E5RCA2cTsWrUcaA5PEc8qRy0gb1IeUSuDzwZs7z%2BjlkwznGL1Ggi5w7g3jCHu0oLoYXJOZOiLjc7siJWIMlRM7ED7UuAj4UcqND5xlSkKiGZ3MvN1FFI34j%2BANIy7l1emXfudn9%2B%2FRSkzkqBFHyDG8%2FkmdHiDAb5GYH67LVW%2BH8YYfzUC%2FZCVD6z9KPuoeMoalhqKidhmSFlTY5HOciTwZTAzHmBsigOeFdZ9WnGdCLgd%2FI05pAWupHvSlqDAarYNH14VmG668bPAATUarxqyyADqpQsDcJAYfVtVVi9Af4j67WecpOSsHP5zCc1NLEBjqkARrVKl1D9eMTFKAa9n7Hyuakod8UEjoOyqA0we3AYPl3zRcD3FMRwM8LTJeJ9dWHYhTVtu%2FeOiF605TbMaAghdVjRdB3Ff1beRcNM7PmnRtPmTBce%2FvKkBzlSrX3TkpmO6Hestc9jHeiox9fbD7E5VKZKM2%2FHl9GlhslZsBHavrKgbmn8nF3j65u90WSXE90Ksskbe%2FN2QoDe3tqTLl5MKEoBBor&X-Amz-Signature=8c4b483cb57e9f431ff0b7b5b965512419631260e53f0a41861d82cb93b055a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKL53DD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDpYvJYxHh4Tl5U8Dzj%2BLew4pIHrTk%2BUUR%2Fcokc6jVV6wIhAItTqzsjLlbSwjF65lllrM7V0cH57lY3Dza3f4u6ZnL4KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6u5v9AaDtjHA520q3AMfum90ehXt2Zc6%2F2chZdTVhMilR4ex3lWIaUQLmk6dntJ0cW0E%2BLeel1wXArOurbWGPHQlfcc3H8j3cQxueiAMmgwPdfmUzeqHu8bWpaWyC1BQzeHuVQaxGU13wCf5T%2BwDjmqLNl9jekkHIwR62HZpASTrN1a6eydMBy5azKizATsSUHWAB81NuhWXX3rK%2FZxDeVM%2FVCgz%2BnpkVK%2BCA9r2Drmoywfr1U46%2FGf5ne6jxhN%2FuReUuqA7wctODV3i%2FENfdVNgEAaS%2Fwz%2FZBwO%2B%2FmLqy33YTSLIGH9uLCWrv%2BwUY%2FC1VMSUgZ%2F9Ew3bn%2FN8eq60E5RCA2cTsWrUcaA5PEc8qRy0gb1IeUSuDzwZs7z%2BjlkwznGL1Ggi5w7g3jCHu0oLoYXJOZOiLjc7siJWIMlRM7ED7UuAj4UcqND5xlSkKiGZ3MvN1FFI34j%2BANIy7l1emXfudn9%2B%2FRSkzkqBFHyDG8%2FkmdHiDAb5GYH67LVW%2BH8YYfzUC%2FZCVD6z9KPuoeMoalhqKidhmSFlTY5HOciTwZTAzHmBsigOeFdZ9WnGdCLgd%2FI05pAWupHvSlqDAarYNH14VmG668bPAATUarxqyyADqpQsDcJAYfVtVVi9Af4j67WecpOSsHP5zCc1NLEBjqkARrVKl1D9eMTFKAa9n7Hyuakod8UEjoOyqA0we3AYPl3zRcD3FMRwM8LTJeJ9dWHYhTVtu%2FeOiF605TbMaAghdVjRdB3Ff1beRcNM7PmnRtPmTBce%2FvKkBzlSrX3TkpmO6Hestc9jHeiox9fbD7E5VKZKM2%2FHl9GlhslZsBHavrKgbmn8nF3j65u90WSXE90Ksskbe%2FN2QoDe3tqTLl5MKEoBBor&X-Amz-Signature=0d583cedcf77f136ba4bb70057fac68fd74d09247e0faff9a5caafceab7cb19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKL53DD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDpYvJYxHh4Tl5U8Dzj%2BLew4pIHrTk%2BUUR%2Fcokc6jVV6wIhAItTqzsjLlbSwjF65lllrM7V0cH57lY3Dza3f4u6ZnL4KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6u5v9AaDtjHA520q3AMfum90ehXt2Zc6%2F2chZdTVhMilR4ex3lWIaUQLmk6dntJ0cW0E%2BLeel1wXArOurbWGPHQlfcc3H8j3cQxueiAMmgwPdfmUzeqHu8bWpaWyC1BQzeHuVQaxGU13wCf5T%2BwDjmqLNl9jekkHIwR62HZpASTrN1a6eydMBy5azKizATsSUHWAB81NuhWXX3rK%2FZxDeVM%2FVCgz%2BnpkVK%2BCA9r2Drmoywfr1U46%2FGf5ne6jxhN%2FuReUuqA7wctODV3i%2FENfdVNgEAaS%2Fwz%2FZBwO%2B%2FmLqy33YTSLIGH9uLCWrv%2BwUY%2FC1VMSUgZ%2F9Ew3bn%2FN8eq60E5RCA2cTsWrUcaA5PEc8qRy0gb1IeUSuDzwZs7z%2BjlkwznGL1Ggi5w7g3jCHu0oLoYXJOZOiLjc7siJWIMlRM7ED7UuAj4UcqND5xlSkKiGZ3MvN1FFI34j%2BANIy7l1emXfudn9%2B%2FRSkzkqBFHyDG8%2FkmdHiDAb5GYH67LVW%2BH8YYfzUC%2FZCVD6z9KPuoeMoalhqKidhmSFlTY5HOciTwZTAzHmBsigOeFdZ9WnGdCLgd%2FI05pAWupHvSlqDAarYNH14VmG668bPAATUarxqyyADqpQsDcJAYfVtVVi9Af4j67WecpOSsHP5zCc1NLEBjqkARrVKl1D9eMTFKAa9n7Hyuakod8UEjoOyqA0we3AYPl3zRcD3FMRwM8LTJeJ9dWHYhTVtu%2FeOiF605TbMaAghdVjRdB3Ff1beRcNM7PmnRtPmTBce%2FvKkBzlSrX3TkpmO6Hestc9jHeiox9fbD7E5VKZKM2%2FHl9GlhslZsBHavrKgbmn8nF3j65u90WSXE90Ksskbe%2FN2QoDe3tqTLl5MKEoBBor&X-Amz-Signature=bf8f97d61b31e7affe7cdc62e74c9a0884a949ea1fd5fd5b9a7870dcbbb55fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKL53DD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDpYvJYxHh4Tl5U8Dzj%2BLew4pIHrTk%2BUUR%2Fcokc6jVV6wIhAItTqzsjLlbSwjF65lllrM7V0cH57lY3Dza3f4u6ZnL4KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6u5v9AaDtjHA520q3AMfum90ehXt2Zc6%2F2chZdTVhMilR4ex3lWIaUQLmk6dntJ0cW0E%2BLeel1wXArOurbWGPHQlfcc3H8j3cQxueiAMmgwPdfmUzeqHu8bWpaWyC1BQzeHuVQaxGU13wCf5T%2BwDjmqLNl9jekkHIwR62HZpASTrN1a6eydMBy5azKizATsSUHWAB81NuhWXX3rK%2FZxDeVM%2FVCgz%2BnpkVK%2BCA9r2Drmoywfr1U46%2FGf5ne6jxhN%2FuReUuqA7wctODV3i%2FENfdVNgEAaS%2Fwz%2FZBwO%2B%2FmLqy33YTSLIGH9uLCWrv%2BwUY%2FC1VMSUgZ%2F9Ew3bn%2FN8eq60E5RCA2cTsWrUcaA5PEc8qRy0gb1IeUSuDzwZs7z%2BjlkwznGL1Ggi5w7g3jCHu0oLoYXJOZOiLjc7siJWIMlRM7ED7UuAj4UcqND5xlSkKiGZ3MvN1FFI34j%2BANIy7l1emXfudn9%2B%2FRSkzkqBFHyDG8%2FkmdHiDAb5GYH67LVW%2BH8YYfzUC%2FZCVD6z9KPuoeMoalhqKidhmSFlTY5HOciTwZTAzHmBsigOeFdZ9WnGdCLgd%2FI05pAWupHvSlqDAarYNH14VmG668bPAATUarxqyyADqpQsDcJAYfVtVVi9Af4j67WecpOSsHP5zCc1NLEBjqkARrVKl1D9eMTFKAa9n7Hyuakod8UEjoOyqA0we3AYPl3zRcD3FMRwM8LTJeJ9dWHYhTVtu%2FeOiF605TbMaAghdVjRdB3Ff1beRcNM7PmnRtPmTBce%2FvKkBzlSrX3TkpmO6Hestc9jHeiox9fbD7E5VKZKM2%2FHl9GlhslZsBHavrKgbmn8nF3j65u90WSXE90Ksskbe%2FN2QoDe3tqTLl5MKEoBBor&X-Amz-Signature=974126ed37bed0e82b34530655d7a1258babe2f34d00d826c6c28242cf012de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
