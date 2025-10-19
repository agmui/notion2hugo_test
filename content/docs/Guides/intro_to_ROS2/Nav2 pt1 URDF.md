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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=fc4fa720f3d327d27be91a884b2a77f49c931a556e9dbd30f03fb470bdb375b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=ef63e8ac89549dd3613334d3e025322c5b23ec0f26902df18b65edb4e159f2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=b15264091e03f787a4950e95cd8cfb0a74f9bd858914930f4e8ce0da5dcd48ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=04f16ab58d269659256501ad5e13f50632637fc4f1bfbd7430fdd2a9a643d456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=2c087740eee74512e1ebaa8fc0262ec421b60f8713d531ad29bb0b1548122f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=19c8235d48bc79cdefa0cba13ccf830e0c3c5bbb6b09dcd15a19e9d169d8075c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=56ea86a303245498384402cb262180c489b1499cceffa2ca3be4be718cf737b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=f4e111cf093ff1001a39ca05ecf1d64820fb2152c1cc41f5bf1f8445f68f2e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=7b048ee45067a3ec94b5ffc4bde4462ea60a1b89c513eb3111b1ca966bdbf856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=75d4205dcb709ed5eff68f5699ccd46e6ff2371ffc20826fedce3144c4ed9059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUAGUM4%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCY6TbKo8VSjgY23cenaanIAByK81f420NPYlTg7Jr3GwIgXQZaAaCFHPveIKvxcRpLvmm8J5ryaet4zvd%2BNoyNup0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6wFYKwv6c3%2BBHCSircA4jSbKGVqyHo1tIsT2DCHtcVmaJf3X9c9VOLSugx18t5Muxz0pHbZ5NOaJFGrfCwEIfz4XEkoGDWXcDU%2B4gGSTi8F0BxZoY1YZYePecc13xlJSkG%2FYUot3IiFmpVdfQwWny%2FC8e3I9ySu0Ns2G5sESiyo9kIogVv%2FPgL2ZZHDbhaIan53M7q3b9i6aMaNEP22SQbsCfxoB4Haztjp3AyPMZSZyvMpdM1RHIa7Z%2FjeBp67%2FAzVqMz0iiSimCTcnc8pT94%2FJTiqEtJzyr1WKHhAA9tznuWup2M3DA4FmMtYDHLvsGfZgVhyCHSPhdyiF5yfyrRHvwRYmc3r7TqsFPv8C9knbcsh4DGWXhSRiBr%2BrBFitXSkOh3l3P2b5YU96iQZ8H6Bn7u%2BqHpD0TPk1x9mM4QXgXn0%2FPM1drV3XX8HWl8R%2Fdxt2a82xer4Mo5zK%2B7hGABMlbjUdUWeL6vZWe6cwTr%2FRUoEX3QdSCOtWZ7xNEsj5WBj2YYvlVrJaLrs5ZemTMQtW%2FyDEAFy6zyl%2BBBLwi9YhounKbGvwcIeYr1cqFv40RQDy%2F1%2FB5Ipv5k8xrVN42f4PVBI5ytwBrOMqwg%2BsD5BTKY5a%2B%2FDdBFtEyQNTzCK9DQv7e1gxOpVV0aMOiC0ccGOqUBBLF0oG3nOggROT%2Bxj%2BaZ%2Bf3HgciyOjWdFfkyge3VGzIadTnLFg3CBhkGodRHEj9sYNg6zOR8liH469ahSjjygeC47WNBgZNgfZafZXu2A%2FGhKg2N3YSBsAiC3DBko5QqhMelZPSOD9nrKd%2FXoQ5XN%2Bpf31GfGfwISgfbn9z0f2b04LiClccehed9fBHLPp52X%2Fj%2BaSvkhkFwW%2FGr6c0hmjMIbjKh&X-Amz-Signature=d4ffef6f27c0dff86dcbbeab4dd1cfa45ab05afd73ae5e8f5b51b7eb70748657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZEEE7S%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCpPx683lvDVCcHADSjkN2hbLbsDAgiAI0h6fIxmwpvGgIhAKN%2FGPTNzzZ9oZb7YmQ3U3knkH39BwQ9nJ%2BraehyccjwKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz77ocji4yucEd5JOAq3AP7zD45Xw6r6wVGmjOPeE35nGWocAUhO4N723JH7rzwxi70QqKZrdT5c9ELY11CgJiYz%2BMNhdgb3j%2FAdNS%2B0MmQ6P%2Ba65BtQFV6COKL7Y1fsiNkCvDD6yeJzga6FlEKMafNpqnVK%2BhiyOV7NjCQVWot6Mhi6oW8suclY0%2FVJM8QFrvOWv%2B1ak%2BjIgMl4L0eBLTINY6eYhParYkD7Oo6MB%2FlcBAmLRRdIxEF5d2To9jWeCQcgtE5BFKdfqVciplIFjjmISjPK6WiuwzUidViVnom5W%2BUHKZzTRwABgHfZnZVkV5w1bT3WBQyuJxNTkvKKiMe0w6Tb9KIFOSQwoRxbvW92l2RIX4xLrRNSe%2BXpuCJsxKLVcgAP6LK39pAVTZHjEdqotHgWuSvJ8xOryo9W0%2BetVpuLbbe%2BQ0tqmITSvgc%2B%2BJpVh0m2nl7LQG7zZltyU1lAzOhdkGnDTXS7CDjzNnpbgHBQQqlGhD7WS30r%2Fnx%2Fz6XC05nw%2FJtl5QqKMrY8e2jmhOj6iKXDwsWN9Nt3WqIEtLIu12ekh63mNEZ9fYbLGuNb9qHPoVwpNT9C1pM8dH%2F64%2BqKYYqOWoRWmsFjfOc17XeucjPxdowR0Ej0leXYbiO06n%2FKUgPBf5%2B4DCJ%2BtDHBjqkAblTxE6iK3W7Vvk8w2%2BVqpdY588EiWxrCkLz1P3lT%2BKx32KN7%2BM%2FRYi1wPF2oJ1Su9mCdKFdpw7M0GMe9cP8yyf%2B7rzX9INJswVk37mhFJzDA97Y3OHOMgouw4EuuVDDg8Npqna%2BKbuIhYyfhddvKSXYZxtDTPxUNfsMD7YXCU0wg2bkLLIHPWAwjdZhShMls6tD%2BrQa0wPKzyV17FoiUmaZ4RE%2B&X-Amz-Signature=36dbeda3d169464cde63de81a215cbf936bea211bb74b9dd4d742a1beda75fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUQQ5WE%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEmcRQoZxHRNLZXjdvkTk3oUWP8SkRx7rWyu7oxFrQSwIgAbVMK3bzYaCET43X9xuQQpaawklmHtZwKR%2BgTkSksqsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaQ6QYYP0pHPu0cvCrcA%2FJyWqcL4g1zv9QDoBU5K6Zb9nLdYUo6DAu1R2XtWfY%2Fkcwf5a312H4Qkbj7gnTdH%2Bju17GilIEhN5QTbNlHI7Lsa%2B5RSw%2FCS%2BVjpAhg2KDSIPdZpl6PAuPPL5XE9JtUwVwFCVWYCUbXByy7kIUhXm3vcHd0hqYPrc6iA5I5fZB9gVTeKTudEksLqLBilNZPMhKY0j8Pp0EF2Gx40Nh52u71XTEtx2nQ%2BhnI7barKSJP%2Bs9nekTn21sCpTZ8V1swlU0FmE%2BsFYIG9Lf3FyyAzwYR7DoetnWGRSlSzhOyECNmVnruNM%2FsRf6hiMtIC7Act9o1wTGkZClwCtoemCmVasEw%2BjFyOJwl%2BUTrnVxevjZNr7NZ925s9R2Bt7epuerrfIeEL0SoC7%2F4M9sQKRAL8QLaTXh%2Bwc2QjyPoVD1QsiGnrRhZ2RdZK9I2oiKJqioYb5Z3yzEjYVXMpL6pRc%2Bc%2Frmb6DSifQ7Gz%2FvPH4Y7OXJsOcjtSzi6JcVqxmS6vg3jozMI83kSJNGwtCNCqT%2Fr5okwsQp5cIbiGb6rDRdMI0i7BFruavE8qj9pBvYNejNHdupep6GLPuL2rMTE7sk2OH863gHPumhgqg1SwFJ9FaRZpLTvFZalWmmjQVT%2FMOqC0ccGOqUBrnblOaBV2rIg2omFyCBo0pKNXDaTbmAyG55J4HNbP1IbUL9%2BP5S8aJ4IQFeRRIlbhgebOLQxY1NMv6lvB34pY1Aq7HqnDg%2FJjxWtiSiq0%2FSf%2BcYFhdg8dX8946LrKDHOTIT6ylMpKX14Y4XkRUTxezSUCClHqDOfXfKb3%2Fk9D5B1WWCFa%2FWOqUY%2FtbcMIY1yc73z%2FdrKj5tVmLl%2BiTvE9BiesBAY&X-Amz-Signature=1d9eb2ba80058ceb0167f9501709b2d0f830ece67a71a5cd91e5a3a2a295eb00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=be8f2b9d6a714b6dd17f7ee6992f8e26a8e22a758f2b6ca9c14bfa1e18195e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBQ5Q5L%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDd%2B43NFRkRw2%2Bfue7%2BHQxLughHZCP5fcV7JQTEyhhHrgIgSiRR1tZRHeYdh3sOURqOQSJTrmq5fNySJ5pB5ScIZPUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhcOmD7gprOcFiACyrcAxcQkqWVI8aE71Tn8QxTVc52IenxQxtQ%2BbwvpKEzYdIuiuaekiieVH4w5N2f7s9bwiyTFyud6AYpsrOQQR0cmIh7OhoryLFYOSlO0KllSo7Akql4i9jDDc5M%2Bz%2BYnkdoGGjI2%2FnOBIArSd%2B6EYkDcDxYfNVlFcXxhBRTYFy3W%2BOos3gdbnCEVujuY2GqRX5yn%2BaffXKaIr8cOjhapA1KfJI%2F2hslbkhjSV%2F9cnzJ52AKkqGJvBv5H2Fn2QEBRnN5egUrE6yWF5H6zXpbqiRBFfOGjdPOSsMGd80UNsovZIi7GyGwRRNdScgOl4gNg8hvRwuK4v30VJ9Zy63%2B66ROsDoKUQfcrWJgxkYNbBKm7W4b4rMAaWKTqF5uenCNkwCSRnJT56iQS%2Bk%2FogZ3%2BDPH2xz6Lpsy4o6zY0IMG7NYdJen5XD9D6vkQIvQBfdP7F2CkApLp4uzfnIKMiZWfpgvfGSHhnHuws8uOrvDaE8bv2PyydjPb214eA6aCgg5kBrmn%2Bd5kgkhD7cn%2F6MtoOdlLfugjcuuCIsxjWvW8UEzOUMMJKvLKrA0oDeL3KxsRhUPV2U1MmMNGwBXVWc2Xwa%2BAfQkQ5ttiQgEoq7jceF0nHLImXloGPP9eDe%2FGbg8MKTez8cGOqUBI6OnyDZedp1ATOAVzFYq6PbCl%2Fqt6q%2FGsbH9q7EuUoXYdh6EgsOLV8IGmpkeIO5p2y1lAn6Y179XdsQNG98bNQ%2FEkch8hsGgulkHsZJQy%2BVFVyGL%2FTD0X0WXEZDNBEqPGObFme8xIsNuSSr4IcVvh6yjv5%2Fyf90kHRfWKdGXYLOczL%2FL1QJjcwRki%2BnY4%2FMZvKIT1WMXxy8RqbYbUHslZs7Mwwin&X-Amz-Signature=a1986bbdaebc9bf001de74728c0dd92bf7e954c69fc24cc4c868c13cef1f57ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=dba0771fb126b8dc864416e96f238000967c660a09824ce727cccc03816687c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O42L6W%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF63c2bvl4U25w8ZmpLTuQbwVZ%2F7ItHpzR5LW0ihRigLAiB8XrNsrmmoc7esyP0U6XexWwBxxPxLp44CgCX2ugDNIiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2MwL8BycCO57tDz2KtwDpWKr3xRQs6m5gEjHLHaMBcv6padUHqpXmazE%2F%2B8xycV6pQW0SEfppqI3F2cTpKgxwwA0VQCZw8zoYTHavrd%2FLl4UcVv4ZEEx2N6h4Fgs9vj85Tm2yo4sMcDx28%2FYWJ9kQFk55DEF%2BKaIPJj29biAwlEMx5eelnPRZ2ZKIa%2BQgDJsM4U7DbYFptiuLh2fJbSdKoZOj%2Br5r79ePTWY0CaWEQgMPTLmMWxSsYipl2WUxz3mw%2B3PLNFiw5gPFQkc0jUuPhJSnaSETGkFCNYs3myoDS4%2FOtaNIQivYkGnymyfh2vawhl5vf1kBnDASYFPWPXnR%2BQxInUGQSJKsZXmPSiBWhJjiRlmNj5TS%2BbBuYakEeKk%2FcgU8WRjXP3QiyuRWNvGFjC9EWLSa3ajYfs9gUZdaN%2BN4cfGSYTcnBh54B2d1OttKxziATUX%2Fp%2FOGWix4JCr0LS49dGey5APYhwSQ6cjBzu8z2Idbr%2FlWBovZa%2BFBqIepIbBCjSShWU0dNU3oUx4%2B%2BAkePAu0RzIRyjEhv6JjjQmCSmcCRVLT9IrG%2FKftUeiDU7ZSpSqMrEQtj0YwL1TVMYEATgB7oMk0Tj5vZ7zH7Li9fOXwlUW20aFObP4Ot%2B7lmXP3DtOoTREix4w2vnQxwY6pgFRePCl1goPSv1HIBaE5tFTf1i9BBrgiLlAOC4KpVx5YEPY94H2PqZFrFcdQ77%2FLOYCWwE1NR%2FgxQB7likw32voAWTQl46MIsum%2Fcs3mmbpXuOvfnkPbS%2FwT3%2FjWuhLIsufNT3dfXGRdGr%2F3GUfWZp%2Bqid4UbygeRPOSzbxrMw0JUiiXs2%2BEGWvJDOIuagqipOceaTLG7Kt4F8dQNDBFU5yAJoIo1L%2B&X-Amz-Signature=346d4a7decc415b82a6028907acabfd0c2d846a29910e99f0ecd80ffa67d17c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=b316ea2e7567147b15fb2217e9138762c2757b815c43b12f17a5c4fbb854cecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4K7QGN%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIE39mOzwjXzNxmFhLzC0TkeCGBQZl%2FMrYMrCWHV279tFAiAzkaIgP9PY64j5q1xtvtuzVBtRgNJOo7xFM%2B6YNRND5yqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7o5B%2BsqVQvep2YzSKtwDRwVnTIcW5uDAItTdybKQE6BHncjX%2FBEdmWqSt9cg8x%2B%2BC%2BKsft9o8T2%2Fdztj2HWqqsqWIcgV7PkHzQIDO4utOWoRAjrPH6rz9ZPXR6WgcE5xHXOSFnzXMtam48HJXwDHKyzRb%2B33QIyxDPiE05xGXvuZJcr%2Fb%2BTacbBy4M1gip%2FI0%2BurHOJA8i62LDKRumV61H7vYcS78jRkneqwc5ZdJS%2BYBTlzx92oGupH68oB5sY9GsLTnG2LauZ37ewevId7i8ZPjQZEwv3ki%2FAHZ57pco9RfAfQhEdeKGfHnZdulAgPKMPTxT%2FHtmmkybkngSGTwHEjjtAanmSwPv2xyiRNJO0XbniCJH5SNLOToD9o0ZAXkNTtkcOb889iOfDHoHhVcLK7KuBdgy941dXW5EvNc4EYCViN1h3%2BJs3k5ecyH5lt9h6EFiBfkJ3GUs%2BAXrwbvpJ5mfmsybB5lBzfrWbomBl7rAG7hJYdcuqGyl0zG%2F0mMn1iXPHh%2BBy3D6eAvfI46EL4RWdlGDtoPf4x1O84Cuo20P%2FpGHWlMsSjOPVVatZgjL0gGt1h%2FHmcElUzxNv054y%2FZfXgcr3HZ%2FZrOJ0VLPWAJ7SxoZpNjoKv1YuXplW72%2Bn4mBAioK3mX8ww3f%2FQxwY6pgEyhk4bP0TgFNAAoJsXLakNO%2FNbh0CrIdi%2BTeDBpNMNB2cgi9lLI8IfhYc%2Ff4lz0BSmJtFt0sDNYgtPGi4cu87w09JF%2Bi9b7NCHUxxbCa6LlE%2FJ5MUvQbfnD4MMvppUZ%2F%2B0k7%2FShIhthtArxIP835GcpIUqHkyjLOXzowTzm%2B35KYWmM%2FBytJSM5dXy6T2R5lEdhI8HOG68OS9XI5BrbQvuSWogTgwI&X-Amz-Signature=2487d50859d69fcfd1ab1da8e1269faa12e3c2e08c24117464607d88d426132a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=a2a998c4b335ed547c6c2222bb97470cfd18c54a3d07e730623fdac9c5a951bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HBH3LT%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrVxQGh3QRMunK7DyoK8ElmsNooNMmGCBsYg8Oc7u95AIgCvERJaCNCjQyp9ISM0Fyjukp7DqD5r8aE%2Bf54HV%2F2wcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqPQoUksmNSKPpJSrcA3ZTDw6UmQZw%2BvbTX%2BTIyI7ugojxTz3RwlQKrJzscc4%2FuDRMZ5%2B8iMrGADpNFao%2BqWCrj5z%2BBFjnq5b%2FDrwFddjUJaMXIczdDF%2FgESLcamy2jcgNMs4m8EZnxg%2B1qUpkk4RDHhCU0czRVOO1I8cNuMhAX3%2FgyCBBCgZsONrnywHDr0IYqwrSBiY7RaOC%2BadJ3uTB%2BHfOiKIGACAQcUivYWsHLgu8tJiXjIhhh2nLh5qRU%2F8y4CHWOtTIJLXb6%2Fyzv%2Br4%2B0S7fxugTSuDw35r9u0ZDG5uNnUqEHp14j8JdGF1oL%2BPjMuAmlMVr9ZZ0WeorKRQE4%2FYNkZ7W0OJiN1Ys5Ml2w9BC2bvV7ba4yKiT1HD3B9Cs2Sauz8BfxYt1LnBFRld8T82spuqQaJjX0gKcmsM0oL%2F67A42AgFt67rk5RSzvksjseyYV4%2BqzrxaEQqwiPoYIMumeZVRpSn22SBs27V2Hw%2Bec%2BsoRLLk1JJUTtZrP7MRHldDNQOiSjqCmOC9hDB%2FnwKarvvYCgzhsvrCDznxZVVnvxIGfVsDWTGpvMTCxghbT%2FVyRaMYVpQbDfEgnN6maw3eSlBJKzzksY1eMAyqgoND%2FwI2WRGCumlwpaOuxpJFQSJuphG%2BgdEMMv%2B0McGOqUBh2GSpPG7y2FDd3dDQrtLyxdWkbZ%2BbAa42oLkc3tBl018Oe83o%2BMjndh6w3Inlk%2FYRzN%2BAuXeKJk%2F3ex%2BFA8pRZhiSeIUKeqSEBm8VLnFM4kjJaMIj%2FAx6HJSMEaqj0TlUbXeRf9%2Bw0iIMZ3C7foU18tx0qeIdnE5%2BW1yPoxX1Wu1ElAD4rf0edNck4679VMSsUa9wgH0vbs2kyVN71B%2BpvrhaE%2Bv&X-Amz-Signature=d32bd4286973a9b663266842f2ebdc024b89c815129beac886bc787dab87bb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=cd5c2d98d6eca9ecc4993750a2cddbf6c8caaf09ceaf0d773c869b04bea333db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJ6WVIP%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCnkKBzGp%2BUKLh%2B25l2sI8Rg7e9dYy3yPFxxTZp7QYAFwIhAP6t5ydUwwjHWP1E72RJDLWta32PlSAiIz1SweeqKLKfKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYf08fE1fnao0wCzMq3AOPv0CHZd0dMGFz03kvwZAM67U8gGXVQiTizGKVEc6bNE%2FvFygO%2B5mhFdOUq6jZ0AjKxtuhdBoqEZli2ERNmyKCHpFk6MdUelL01YOlUJ7%2FJc3srjXAJ0WTsJv4J0%2FT%2Fox0vB%2FIcht51d5thP0fdPv2sdqpy0ECYpUVGJrdWDObk2YiEFYpNJB7uVenOgklyo2SnZUVBmQuSsKZzpOU1yI3FvBp%2FWDKQserWrvAv2kuQHzN3zrasdlZkQwEHN7wCp3J7%2FMy586nAd35cqwY5RdAmXaQUMU%2FPNfRxUTXIYmll5coYSUhtDkISwJ%2BA63z7wN%2Flz4JAVffugENnFELqCX3GMw2lhVgVHygFrzMKzfhyNg1sCKmkKsSg42n2SLV0WltCIDnHJT%2FbIBJc3LG9wxGNYlQ1UQdGjPgdI6sLgpbsAD7skEtZLWnHfze2Z70TntORd7CAG0qi5LU3sU6RzT1aMj9vINXGzDWhjFgGI%2FJqnV4B65UCXLge78cPnw3X7Z%2BPANgUbFd5zMGTuVzP4AUQSprGojn9%2FUEZ7e6iLnBtZQl0aMhmWE9qXMuKzuRCYCPQm%2B3XpxKn4V9ZZx4uwitjeIdo2SD7hD0SckWV4909q6TtuBhKYMcEGIKWzDWgtHHBjqkAZqs8zhfzqYiSM9TTTQMRi%2FH7A0RHaH9%2FGNY1JPaAwMeHEk76g35WEv6PjSrDsvg6hiLOoaJVzKI1XRf4MI18qP42o%2FO11nL0cIG7uURJFZU%2BYPcXd1dVtzjMeG3Ra3GtaifEj8zNwJZNPTlW6xD8geaGwfEFPLfDmWpEQEIbU2Uy%2FG36d%2Bo2ILPRvFWfmMpR8ktlWkwm55fbqvmfPsCfreL0TpI&X-Amz-Signature=0d17c8c96b731b60c35555765451c3f416ffa8c76b116359850ef0498dd0cd55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEMQVDD%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDoeLQ8V8euhsjNpglFIfv30ybLCNPZN2XLX0JL5Ca%2B6gIgRodwrdqOEKUfBunhWf4RBhiWhAmNRyZwP8Qm6O%2FgYYoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0McPmhj%2Brgg0RXFyrcAzMlb%2F31V1YyuvlCcpW3ECRq%2Bk%2FZ%2BapMefXRQUnvl9sRtGmz0c0hSEohG5R%2FY2vQw%2B2wuA%2BbVBkQAGR75NWqPadTOreDDUdLKbFmOE9tFvuUiBWHIU2inFXrHeznrbnvyxp%2FZCAIWNI9Xzxb5doGqJalC%2BhgeLjuJBtzAx9Hz4i0Qe2YCgXaxN3eX8thbNws5UWUafeUNDPaH5lCjlwKzpDNI9M55XEBHGM7iXkVzvjQinB66oyB4fdLc6x1tzwL9f%2FmhDECtYQKqKfLaJ8QsIWtly7o9kMD%2BvdmFBJcMQm1FPWKSW80r4RFql6nBytcTLvXgNhLtyb7QmWPGm%2FtWTSRfETrcneKzl9358rz%2FTy1akP0bBXbn1alc%2F7Z52dQzK0u0L0jc6pMsqvRQif%2BxJcvYLj7DcSqPBqvdJv5Hvg7Didk9Yqp900LyQaquAXFPPuOpBtlu%2BRfP3wnaM4Uy6F7hmKXQbKzX3igX8oh4mDyfOwe2Faq%2ByQpgCZTvTy82R4HkIl12Y1Uxe7nqNjfpaVWUnSfK4gu8AVggvTu8OX9rXCqvbNwDbRRpGSvfJM4Tz4TQA1WkxHobiwwuFjSRSx%2BwKRJmVQ%2FgfEund2QfePOJgx6ruc%2BkSE4hKmOMLSA0ccGOqUB1I8Tz133rhdjKe9onUC7Iq1A48jtFSbelcpH2ixv7A8hmSt9hGw06NWFNiT%2FQTOGNPHbd2GTc2b85KuKPWc9AN5Zj7dlQFFIoTBJhvIoA9QYL4sIFblJc0SKoe32OvT%2BfcMcbjoohY6vu9E%2FI8l2YT1kea3Wug%2F5tINrvT5XNDKfL8j37Fq3ohuEv6Hae8B0bLm86OlPoBJzehoDe2MJVAkUeCEM&X-Amz-Signature=3a923afb7b9d569dc32376acbef330b7b7bdccfa54a7c3e91a4cdd5e22f8b4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVYKQ7ZN%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHZR1E3n8b6IY9lMCl8b02uQDYpCcCD%2BVDBSVY93c%2F6KAiBeKPDPTYDq2TClZrS8BRfZ5X029pjPwe0aOLRwi7Sp9CqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufc7ZOMD1UP5%2FFbWKtwDVC1FLuBmx7ZdwDjBZPFdKfuLNCsYyKce1DKMnrgNVyRwwI4pOK6TVujAGxEoyTphNMyj2w3ZRP9WPJ14dtSTPIlGw8XbWSegayzABM6BYG%2FMfgjOXJSWqI%2Bv8VJyucOSF9LU3u54IcA%2BPz%2FzyJIYWYgCoWhVUe3XnOou3KkyuuSHUtU1Qk23u9jfJzpQtttIskkAy%2FssSJBjHxSLFElb3vq2t1SEuCLjXhssL6q0j%2FsKW%2FdtmHsE7FMVdX8QPz%2Fw7zZnWHcb%2F3c%2BbkyHifTXcKyy%2BAWGg1VFmsgkU9Kiw0jZh%2FQ39lztaPteCj5yQ1huEHkomwN8bqkaDpdrkTLoTP%2FRFFatXOjxR%2Bd6eM%2BIzfKZlj56v7NmtVwVk9RPIXdo4H2e5C%2FAHqYvRvzXxJAq%2BKVElqQHp02Od%2Fs5roJIJanXOHBfgBeWp6rMUxZW7UQmbwjuG8CxJLVybzxdF005I5VSg%2FIeVGKxXpnqDeutzIec0YHpXO2fYjtD1QS4VMfZ6gQJ6RKJtRiemVas9e2A30DevfhKKjVFi5i61rdNBkMHNb9spjnv8clvaTngZVyBhBOWGxaHJw0k7E%2BZbWrhscuOp3ZG1v8fKQvSvmCd0o1LdYf2OnajFQvicE0wu4DRxwY6pgFxIulXD9i98oas1nsSRaJ2vXmJ2TPBwwBCu45yC3YxSZdWBJ%2BbzNZviQtsu3XRhZc2px4m5T0MMGA8IEPHAO%2F9fT1SCaEhFcvZ4gKXMhyTW2lKOeZkghEoMUzVn9rP%2FbdRnEASyIB8mxz09%2B0MoNlFevSEcONU31PI00rlghsdUaybjB0ZXhXByPInMAyOdPlqcaZa4JxCyjwUjKajuR%2FWUbwOgKpQ&X-Amz-Signature=c7984ea255bd8e4964016c6da5858c13595b62e2f3f315d3fe1c2840df95e8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=ee48ea5ed42cda23f41d388e7a8e99fa61bd5a6d750bb30184b68e8360bb2817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6IGYB3%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHdPP6aMURxXqhtdu0v%2BTPry3tfqQOQSZzPMcECVO5zKAiAVFlBCeCQyB9z8EblRyuqjbWusQXbZ7kxc%2FJi%2Fxa9M8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8o5JY2nXL2lcDlTvKtwDhWsGTGVOdvFb1awHMOo39Eh89dsTZE2MJ92VkaUJCMq8qpRUVyw3oXRfX5sgyqJtc%2B5bG3wa0bTDcC0GRlXxYxWUN4fNFrM0NWUJQEQwwaViEGI4KYAy67nMnfndBAl2tCGcc1mkuPMDn3%2BHkB0Jr1dDIV2ceyNqvATLmtvhgJTil6ZGJKIHj0Er4tnkhae2oyPBO7SY4SINkhqNLPgxVj%2Fu591cV%2FXsqHPYRCcmDZ34M4FA9O7jlBTyDA5WhtADdfP8aidzCdDpL4LPXLonw3qOKp3blf3tElG4AigTutgWMMnnH4KKXl6cVfkM1VBjb%2FhmnX1LvQ3KSzVIGEyBypjj5uOgNbwTdnZjLoW6%2BEXa2TN58U0T5dFEKNlf5lds6J8Yw4Tv4JBUR2eqdhKJidNh%2FawdVZ6%2FIpDlxHgxH%2BeBHm6mPbOh2ZaDYHMvTvddHheh7pai2on9RBuV5lOH0bQEACgRBLiHP2CP0CGdMi55lSSTgWnSVIRenzuIn8so5ou8UWXHcupcACzmPhFmmLeIW1CC6dsehYTjRguJNk8n2n%2BMA9XgisUkcz2olK1p%2BmohPiHgpMGtzLA7YmLg59EItrlGk3JrXEoCO7wISPHZA5X9arXlb6tUwF4wif3QxwY6pgGYc%2FGGtvxotQ%2B7qltjph9p7v5V0KqCVdRRu2Cm%2BN4g2LB5h6bFWwiRLEkKu%2BO0XuC5Si3yIUwMLl35BfHnya1P4e6XaaWdt9yJLPVnqh4nMuyphb7Bop4kYGIdnri3FsYqTc%2BFm4KZdsE0bUQMZtSobxwgDvfmxYjVegS1i42FTjf1KX84PdjN%2FgTNXu7AKfFQurJm2mq7GuRNOuxqXJAiujUV9jOf&X-Amz-Signature=ae9b9f26012dd73135e3d3e69adbda9f69963fc74b27fba5bdc6fb287b4a520f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFKK2P%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXUoxAkAvUOi1yO1QFD6WtEOguyVJWynf6WhTZIsPIAQIgP7uTh7WDIr6VkJAOAJdRYK4W10ySmg6QDd5U0%2FJIxAkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQghacTZuwmT%2FsyqCrcA8FYCc%2BLVUYGVDyKZJ%2BkaqZEELKLd2IdTtb6FIxLWzIUf0XhMqUOncyQtu0c1dFkP5tdxJaKMUPfRn3bcb2f3co6e0x3w7vzcYsGeMPS4G28IihhGcHmo6Ez6icPr6La7YZ5lRRouSQAVaViWKKkJNYqNPJ1QNAfbGV7jxGpymBCyB5IkAJjK4OkwrnPG0zbJOnj2iDBEG0VYcq4DZyd7kJ%2FuFgrdBn%2FNF90Au1PJeGJzKBrbi4w1FD71qsyPDFpZoKr2ftqX84QoTM6p65%2Bj2G4yYKKqycP%2B1KWa9elLAcT4hvlP5dSE98DmvYVz6xF2Uu6N2QJsTnE%2FQEqivpNyLMNcID9qRAsITnOM0za%2F2NHskSaUu9H1K5MRUCR7ZCvTurq00Evzs8%2F5SDY7cFtGmvenCLr9L%2FZo33FJVgZ9gwATRZyWxBL7ana62JV3fKUJH8l0j8w5X6gM2N9%2FHe5js3Ux2T0iOldsUuUnsK5l7utSw4nytIfV8lxPSa9i7kDYd%2Be7iki4BmYg89CPnE17rRvyE%2Fn8b%2Fymcr%2BIZUL5JpZ6XS8THyGGxPeadinbAHP40Q6babYK7cIXXec%2FhqXrz6ntE0kjFYx8z23W7%2B9OzPh%2FQSIFyljbihWIduHMP6D0ccGOqUB%2Fyulqtl1is%2FbrKjC%2BqtTsKD8BY64T0bvQtYaGD6RGDUSCb6k5%2BXzDP%2Bjuj1glc8ndr96Hyrk9lu1bCZYcXg3rBS8BC4TTvnBow9Cyjd%2BAkI0UoMhgtPzDkzm7kwv2AU1ZPPopXhu%2BIdLLmA%2BmNnULsdWadthr%2FOjlsDqHDcM8uzliwN%2BcYJIF5c2dnm9kPI8oV8Cq4k0u60brNqvR4PdpWt1Kg%2F3&X-Amz-Signature=eafbdc45338c80f20db7fd272ee52f670665c8b729e050891b09ed637c0e8ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFKK2P%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXUoxAkAvUOi1yO1QFD6WtEOguyVJWynf6WhTZIsPIAQIgP7uTh7WDIr6VkJAOAJdRYK4W10ySmg6QDd5U0%2FJIxAkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQghacTZuwmT%2FsyqCrcA8FYCc%2BLVUYGVDyKZJ%2BkaqZEELKLd2IdTtb6FIxLWzIUf0XhMqUOncyQtu0c1dFkP5tdxJaKMUPfRn3bcb2f3co6e0x3w7vzcYsGeMPS4G28IihhGcHmo6Ez6icPr6La7YZ5lRRouSQAVaViWKKkJNYqNPJ1QNAfbGV7jxGpymBCyB5IkAJjK4OkwrnPG0zbJOnj2iDBEG0VYcq4DZyd7kJ%2FuFgrdBn%2FNF90Au1PJeGJzKBrbi4w1FD71qsyPDFpZoKr2ftqX84QoTM6p65%2Bj2G4yYKKqycP%2B1KWa9elLAcT4hvlP5dSE98DmvYVz6xF2Uu6N2QJsTnE%2FQEqivpNyLMNcID9qRAsITnOM0za%2F2NHskSaUu9H1K5MRUCR7ZCvTurq00Evzs8%2F5SDY7cFtGmvenCLr9L%2FZo33FJVgZ9gwATRZyWxBL7ana62JV3fKUJH8l0j8w5X6gM2N9%2FHe5js3Ux2T0iOldsUuUnsK5l7utSw4nytIfV8lxPSa9i7kDYd%2Be7iki4BmYg89CPnE17rRvyE%2Fn8b%2Fymcr%2BIZUL5JpZ6XS8THyGGxPeadinbAHP40Q6babYK7cIXXec%2FhqXrz6ntE0kjFYx8z23W7%2B9OzPh%2FQSIFyljbihWIduHMP6D0ccGOqUB%2Fyulqtl1is%2FbrKjC%2BqtTsKD8BY64T0bvQtYaGD6RGDUSCb6k5%2BXzDP%2Bjuj1glc8ndr96Hyrk9lu1bCZYcXg3rBS8BC4TTvnBow9Cyjd%2BAkI0UoMhgtPzDkzm7kwv2AU1ZPPopXhu%2BIdLLmA%2BmNnULsdWadthr%2FOjlsDqHDcM8uzliwN%2BcYJIF5c2dnm9kPI8oV8Cq4k0u60brNqvR4PdpWt1Kg%2F3&X-Amz-Signature=74c31bb4677e643bf353d97c466b98217d58a3c1809177f87b36c0055938c6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFKK2P%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXUoxAkAvUOi1yO1QFD6WtEOguyVJWynf6WhTZIsPIAQIgP7uTh7WDIr6VkJAOAJdRYK4W10ySmg6QDd5U0%2FJIxAkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQghacTZuwmT%2FsyqCrcA8FYCc%2BLVUYGVDyKZJ%2BkaqZEELKLd2IdTtb6FIxLWzIUf0XhMqUOncyQtu0c1dFkP5tdxJaKMUPfRn3bcb2f3co6e0x3w7vzcYsGeMPS4G28IihhGcHmo6Ez6icPr6La7YZ5lRRouSQAVaViWKKkJNYqNPJ1QNAfbGV7jxGpymBCyB5IkAJjK4OkwrnPG0zbJOnj2iDBEG0VYcq4DZyd7kJ%2FuFgrdBn%2FNF90Au1PJeGJzKBrbi4w1FD71qsyPDFpZoKr2ftqX84QoTM6p65%2Bj2G4yYKKqycP%2B1KWa9elLAcT4hvlP5dSE98DmvYVz6xF2Uu6N2QJsTnE%2FQEqivpNyLMNcID9qRAsITnOM0za%2F2NHskSaUu9H1K5MRUCR7ZCvTurq00Evzs8%2F5SDY7cFtGmvenCLr9L%2FZo33FJVgZ9gwATRZyWxBL7ana62JV3fKUJH8l0j8w5X6gM2N9%2FHe5js3Ux2T0iOldsUuUnsK5l7utSw4nytIfV8lxPSa9i7kDYd%2Be7iki4BmYg89CPnE17rRvyE%2Fn8b%2Fymcr%2BIZUL5JpZ6XS8THyGGxPeadinbAHP40Q6babYK7cIXXec%2FhqXrz6ntE0kjFYx8z23W7%2B9OzPh%2FQSIFyljbihWIduHMP6D0ccGOqUB%2Fyulqtl1is%2FbrKjC%2BqtTsKD8BY64T0bvQtYaGD6RGDUSCb6k5%2BXzDP%2Bjuj1glc8ndr96Hyrk9lu1bCZYcXg3rBS8BC4TTvnBow9Cyjd%2BAkI0UoMhgtPzDkzm7kwv2AU1ZPPopXhu%2BIdLLmA%2BmNnULsdWadthr%2FOjlsDqHDcM8uzliwN%2BcYJIF5c2dnm9kPI8oV8Cq4k0u60brNqvR4PdpWt1Kg%2F3&X-Amz-Signature=97a873380acf1abc7a1774d409273993bb897014afc5abd0a996fb5fcb1054ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFKK2P%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXUoxAkAvUOi1yO1QFD6WtEOguyVJWynf6WhTZIsPIAQIgP7uTh7WDIr6VkJAOAJdRYK4W10ySmg6QDd5U0%2FJIxAkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQghacTZuwmT%2FsyqCrcA8FYCc%2BLVUYGVDyKZJ%2BkaqZEELKLd2IdTtb6FIxLWzIUf0XhMqUOncyQtu0c1dFkP5tdxJaKMUPfRn3bcb2f3co6e0x3w7vzcYsGeMPS4G28IihhGcHmo6Ez6icPr6La7YZ5lRRouSQAVaViWKKkJNYqNPJ1QNAfbGV7jxGpymBCyB5IkAJjK4OkwrnPG0zbJOnj2iDBEG0VYcq4DZyd7kJ%2FuFgrdBn%2FNF90Au1PJeGJzKBrbi4w1FD71qsyPDFpZoKr2ftqX84QoTM6p65%2Bj2G4yYKKqycP%2B1KWa9elLAcT4hvlP5dSE98DmvYVz6xF2Uu6N2QJsTnE%2FQEqivpNyLMNcID9qRAsITnOM0za%2F2NHskSaUu9H1K5MRUCR7ZCvTurq00Evzs8%2F5SDY7cFtGmvenCLr9L%2FZo33FJVgZ9gwATRZyWxBL7ana62JV3fKUJH8l0j8w5X6gM2N9%2FHe5js3Ux2T0iOldsUuUnsK5l7utSw4nytIfV8lxPSa9i7kDYd%2Be7iki4BmYg89CPnE17rRvyE%2Fn8b%2Fymcr%2BIZUL5JpZ6XS8THyGGxPeadinbAHP40Q6babYK7cIXXec%2FhqXrz6ntE0kjFYx8z23W7%2B9OzPh%2FQSIFyljbihWIduHMP6D0ccGOqUB%2Fyulqtl1is%2FbrKjC%2BqtTsKD8BY64T0bvQtYaGD6RGDUSCb6k5%2BXzDP%2Bjuj1glc8ndr96Hyrk9lu1bCZYcXg3rBS8BC4TTvnBow9Cyjd%2BAkI0UoMhgtPzDkzm7kwv2AU1ZPPopXhu%2BIdLLmA%2BmNnULsdWadthr%2FOjlsDqHDcM8uzliwN%2BcYJIF5c2dnm9kPI8oV8Cq4k0u60brNqvR4PdpWt1Kg%2F3&X-Amz-Signature=87033d4a7590ebb5a1c235e791c0c65ffe205e490108d359d4508725cef821c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFAHHBTK%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCemRZkrILCU7bwMRIM%2F9hA2QxsCvtOz0s21%2FhBR2w4RgIhAJwIcds7NpHyl1kTyDYcWR3YPudaKv%2BjTG1TqwZ%2BD9YrKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLE3zQKuu9qUwRwBIq3AOfiwEh6lNb%2BmA7P2m7yVM02RSqP7WJ0DqkItWva8UDn8hB23EG1DtDGG%2FuEXY92v8MIKUgLFCq9lATl8pnJguKbsQyVridE6CorvXKXcpv7Zr6jesexCDrV7Q3UFJX9eyAprqLkmgbEOwgmxeXJ31xe%2BYKake2nIvBWmb6DkKWuKgwIa%2FH5IfVqADQAdVxZK2YbNHEq%2Bzkg7qeDk3SvqeeWimJ59im0fEorWULXS9RIp9kb8A79X%2Bug6tkce9jdX6YxdWXl%2BPqyIWosbENbnSh7a38h95%2BaZwkB%2BtWAAUMhmoo7OT4dkNsT%2FyrdJX32B%2BUWi8bxMetDqiNEJXK6oQmIk5IqQU614E8igmrP0p1iSxdAny06PuTh%2FP%2BNsUWGNfVW5Rt2jIBFlVq7QWvRxKj2UIASad%2FNNMNnB7%2BR%2FnWUJ475WXYwt9T11ZYM1kr8PGhItJIN%2F726vmUv9A0wxueuA9Vj%2FsgcvRGckf0aJbxFtIZ%2F82radP7LcZyvcgMX5mEjGSWP%2FfAv9mY8UmANn9%2FDRs8Bc0oHmDozU%2FGVuw6Dnf10LVP6DhnL2BYGAQu9Dn1sWwMhQz82f%2BL2oGD%2BitplSTJBHSjoC94iPI4BOChgalI%2BETlWcc1uOg05DC9gtHHBjqkAdt32kwObJa0EVTgNuxWCXSKaA4tqDJtdINKD2UFAAPP7cJfZmoPmyjeEIh4rm69ot91i%2BI%2BtzR1iqZ3aNpl6YdK3oiTEzoIC1yqhahDpUcqHfIvRu0L7pxjI9xAXQd1kiF677c31YSsWOi3PI5wHT4N3wwfY3t%2Fepm6XqPJsEO9hYUAMKRpK6Dm5Pg3KlPsYx1BWc71VFA2Hst4Xvfrkr0pwguI&X-Amz-Signature=4a5da146e4ea1524453e62ae84abbcfff47d198623b93eb44bb91a6349b029f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFKK2P%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXUoxAkAvUOi1yO1QFD6WtEOguyVJWynf6WhTZIsPIAQIgP7uTh7WDIr6VkJAOAJdRYK4W10ySmg6QDd5U0%2FJIxAkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQghacTZuwmT%2FsyqCrcA8FYCc%2BLVUYGVDyKZJ%2BkaqZEELKLd2IdTtb6FIxLWzIUf0XhMqUOncyQtu0c1dFkP5tdxJaKMUPfRn3bcb2f3co6e0x3w7vzcYsGeMPS4G28IihhGcHmo6Ez6icPr6La7YZ5lRRouSQAVaViWKKkJNYqNPJ1QNAfbGV7jxGpymBCyB5IkAJjK4OkwrnPG0zbJOnj2iDBEG0VYcq4DZyd7kJ%2FuFgrdBn%2FNF90Au1PJeGJzKBrbi4w1FD71qsyPDFpZoKr2ftqX84QoTM6p65%2Bj2G4yYKKqycP%2B1KWa9elLAcT4hvlP5dSE98DmvYVz6xF2Uu6N2QJsTnE%2FQEqivpNyLMNcID9qRAsITnOM0za%2F2NHskSaUu9H1K5MRUCR7ZCvTurq00Evzs8%2F5SDY7cFtGmvenCLr9L%2FZo33FJVgZ9gwATRZyWxBL7ana62JV3fKUJH8l0j8w5X6gM2N9%2FHe5js3Ux2T0iOldsUuUnsK5l7utSw4nytIfV8lxPSa9i7kDYd%2Be7iki4BmYg89CPnE17rRvyE%2Fn8b%2Fymcr%2BIZUL5JpZ6XS8THyGGxPeadinbAHP40Q6babYK7cIXXec%2FhqXrz6ntE0kjFYx8z23W7%2B9OzPh%2FQSIFyljbihWIduHMP6D0ccGOqUB%2Fyulqtl1is%2FbrKjC%2BqtTsKD8BY64T0bvQtYaGD6RGDUSCb6k5%2BXzDP%2Bjuj1glc8ndr96Hyrk9lu1bCZYcXg3rBS8BC4TTvnBow9Cyjd%2BAkI0UoMhgtPzDkzm7kwv2AU1ZPPopXhu%2BIdLLmA%2BmNnULsdWadthr%2FOjlsDqHDcM8uzliwN%2BcYJIF5c2dnm9kPI8oV8Cq4k0u60brNqvR4PdpWt1Kg%2F3&X-Amz-Signature=adcd6afd7f55e171d88e293cdfeddf8fe5f471c1a7fe74627a6592e0118b4f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFKK2P%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXUoxAkAvUOi1yO1QFD6WtEOguyVJWynf6WhTZIsPIAQIgP7uTh7WDIr6VkJAOAJdRYK4W10ySmg6QDd5U0%2FJIxAkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQghacTZuwmT%2FsyqCrcA8FYCc%2BLVUYGVDyKZJ%2BkaqZEELKLd2IdTtb6FIxLWzIUf0XhMqUOncyQtu0c1dFkP5tdxJaKMUPfRn3bcb2f3co6e0x3w7vzcYsGeMPS4G28IihhGcHmo6Ez6icPr6La7YZ5lRRouSQAVaViWKKkJNYqNPJ1QNAfbGV7jxGpymBCyB5IkAJjK4OkwrnPG0zbJOnj2iDBEG0VYcq4DZyd7kJ%2FuFgrdBn%2FNF90Au1PJeGJzKBrbi4w1FD71qsyPDFpZoKr2ftqX84QoTM6p65%2Bj2G4yYKKqycP%2B1KWa9elLAcT4hvlP5dSE98DmvYVz6xF2Uu6N2QJsTnE%2FQEqivpNyLMNcID9qRAsITnOM0za%2F2NHskSaUu9H1K5MRUCR7ZCvTurq00Evzs8%2F5SDY7cFtGmvenCLr9L%2FZo33FJVgZ9gwATRZyWxBL7ana62JV3fKUJH8l0j8w5X6gM2N9%2FHe5js3Ux2T0iOldsUuUnsK5l7utSw4nytIfV8lxPSa9i7kDYd%2Be7iki4BmYg89CPnE17rRvyE%2Fn8b%2Fymcr%2BIZUL5JpZ6XS8THyGGxPeadinbAHP40Q6babYK7cIXXec%2FhqXrz6ntE0kjFYx8z23W7%2B9OzPh%2FQSIFyljbihWIduHMP6D0ccGOqUB%2Fyulqtl1is%2FbrKjC%2BqtTsKD8BY64T0bvQtYaGD6RGDUSCb6k5%2BXzDP%2Bjuj1glc8ndr96Hyrk9lu1bCZYcXg3rBS8BC4TTvnBow9Cyjd%2BAkI0UoMhgtPzDkzm7kwv2AU1ZPPopXhu%2BIdLLmA%2BmNnULsdWadthr%2FOjlsDqHDcM8uzliwN%2BcYJIF5c2dnm9kPI8oV8Cq4k0u60brNqvR4PdpWt1Kg%2F3&X-Amz-Signature=21d483683d5a9d974a28cfbe275cdad7d12503c2619902a72de201f9cded8067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFKK2P%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXUoxAkAvUOi1yO1QFD6WtEOguyVJWynf6WhTZIsPIAQIgP7uTh7WDIr6VkJAOAJdRYK4W10ySmg6QDd5U0%2FJIxAkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQghacTZuwmT%2FsyqCrcA8FYCc%2BLVUYGVDyKZJ%2BkaqZEELKLd2IdTtb6FIxLWzIUf0XhMqUOncyQtu0c1dFkP5tdxJaKMUPfRn3bcb2f3co6e0x3w7vzcYsGeMPS4G28IihhGcHmo6Ez6icPr6La7YZ5lRRouSQAVaViWKKkJNYqNPJ1QNAfbGV7jxGpymBCyB5IkAJjK4OkwrnPG0zbJOnj2iDBEG0VYcq4DZyd7kJ%2FuFgrdBn%2FNF90Au1PJeGJzKBrbi4w1FD71qsyPDFpZoKr2ftqX84QoTM6p65%2Bj2G4yYKKqycP%2B1KWa9elLAcT4hvlP5dSE98DmvYVz6xF2Uu6N2QJsTnE%2FQEqivpNyLMNcID9qRAsITnOM0za%2F2NHskSaUu9H1K5MRUCR7ZCvTurq00Evzs8%2F5SDY7cFtGmvenCLr9L%2FZo33FJVgZ9gwATRZyWxBL7ana62JV3fKUJH8l0j8w5X6gM2N9%2FHe5js3Ux2T0iOldsUuUnsK5l7utSw4nytIfV8lxPSa9i7kDYd%2Be7iki4BmYg89CPnE17rRvyE%2Fn8b%2Fymcr%2BIZUL5JpZ6XS8THyGGxPeadinbAHP40Q6babYK7cIXXec%2FhqXrz6ntE0kjFYx8z23W7%2B9OzPh%2FQSIFyljbihWIduHMP6D0ccGOqUB%2Fyulqtl1is%2FbrKjC%2BqtTsKD8BY64T0bvQtYaGD6RGDUSCb6k5%2BXzDP%2Bjuj1glc8ndr96Hyrk9lu1bCZYcXg3rBS8BC4TTvnBow9Cyjd%2BAkI0UoMhgtPzDkzm7kwv2AU1ZPPopXhu%2BIdLLmA%2BmNnULsdWadthr%2FOjlsDqHDcM8uzliwN%2BcYJIF5c2dnm9kPI8oV8Cq4k0u60brNqvR4PdpWt1Kg%2F3&X-Amz-Signature=97a873380acf1abc7a1774d409273993bb897014afc5abd0a996fb5fcb1054ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFKK2P%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXUoxAkAvUOi1yO1QFD6WtEOguyVJWynf6WhTZIsPIAQIgP7uTh7WDIr6VkJAOAJdRYK4W10ySmg6QDd5U0%2FJIxAkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQghacTZuwmT%2FsyqCrcA8FYCc%2BLVUYGVDyKZJ%2BkaqZEELKLd2IdTtb6FIxLWzIUf0XhMqUOncyQtu0c1dFkP5tdxJaKMUPfRn3bcb2f3co6e0x3w7vzcYsGeMPS4G28IihhGcHmo6Ez6icPr6La7YZ5lRRouSQAVaViWKKkJNYqNPJ1QNAfbGV7jxGpymBCyB5IkAJjK4OkwrnPG0zbJOnj2iDBEG0VYcq4DZyd7kJ%2FuFgrdBn%2FNF90Au1PJeGJzKBrbi4w1FD71qsyPDFpZoKr2ftqX84QoTM6p65%2Bj2G4yYKKqycP%2B1KWa9elLAcT4hvlP5dSE98DmvYVz6xF2Uu6N2QJsTnE%2FQEqivpNyLMNcID9qRAsITnOM0za%2F2NHskSaUu9H1K5MRUCR7ZCvTurq00Evzs8%2F5SDY7cFtGmvenCLr9L%2FZo33FJVgZ9gwATRZyWxBL7ana62JV3fKUJH8l0j8w5X6gM2N9%2FHe5js3Ux2T0iOldsUuUnsK5l7utSw4nytIfV8lxPSa9i7kDYd%2Be7iki4BmYg89CPnE17rRvyE%2Fn8b%2Fymcr%2BIZUL5JpZ6XS8THyGGxPeadinbAHP40Q6babYK7cIXXec%2FhqXrz6ntE0kjFYx8z23W7%2B9OzPh%2FQSIFyljbihWIduHMP6D0ccGOqUB%2Fyulqtl1is%2FbrKjC%2BqtTsKD8BY64T0bvQtYaGD6RGDUSCb6k5%2BXzDP%2Bjuj1glc8ndr96Hyrk9lu1bCZYcXg3rBS8BC4TTvnBow9Cyjd%2BAkI0UoMhgtPzDkzm7kwv2AU1ZPPopXhu%2BIdLLmA%2BmNnULsdWadthr%2FOjlsDqHDcM8uzliwN%2BcYJIF5c2dnm9kPI8oV8Cq4k0u60brNqvR4PdpWt1Kg%2F3&X-Amz-Signature=928c862416920ab45ffa905be6f7bd35f6daf9d4ebb78a48acb2df29d973fec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFKK2P%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXUoxAkAvUOi1yO1QFD6WtEOguyVJWynf6WhTZIsPIAQIgP7uTh7WDIr6VkJAOAJdRYK4W10ySmg6QDd5U0%2FJIxAkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQghacTZuwmT%2FsyqCrcA8FYCc%2BLVUYGVDyKZJ%2BkaqZEELKLd2IdTtb6FIxLWzIUf0XhMqUOncyQtu0c1dFkP5tdxJaKMUPfRn3bcb2f3co6e0x3w7vzcYsGeMPS4G28IihhGcHmo6Ez6icPr6La7YZ5lRRouSQAVaViWKKkJNYqNPJ1QNAfbGV7jxGpymBCyB5IkAJjK4OkwrnPG0zbJOnj2iDBEG0VYcq4DZyd7kJ%2FuFgrdBn%2FNF90Au1PJeGJzKBrbi4w1FD71qsyPDFpZoKr2ftqX84QoTM6p65%2Bj2G4yYKKqycP%2B1KWa9elLAcT4hvlP5dSE98DmvYVz6xF2Uu6N2QJsTnE%2FQEqivpNyLMNcID9qRAsITnOM0za%2F2NHskSaUu9H1K5MRUCR7ZCvTurq00Evzs8%2F5SDY7cFtGmvenCLr9L%2FZo33FJVgZ9gwATRZyWxBL7ana62JV3fKUJH8l0j8w5X6gM2N9%2FHe5js3Ux2T0iOldsUuUnsK5l7utSw4nytIfV8lxPSa9i7kDYd%2Be7iki4BmYg89CPnE17rRvyE%2Fn8b%2Fymcr%2BIZUL5JpZ6XS8THyGGxPeadinbAHP40Q6babYK7cIXXec%2FhqXrz6ntE0kjFYx8z23W7%2B9OzPh%2FQSIFyljbihWIduHMP6D0ccGOqUB%2Fyulqtl1is%2FbrKjC%2BqtTsKD8BY64T0bvQtYaGD6RGDUSCb6k5%2BXzDP%2Bjuj1glc8ndr96Hyrk9lu1bCZYcXg3rBS8BC4TTvnBow9Cyjd%2BAkI0UoMhgtPzDkzm7kwv2AU1ZPPopXhu%2BIdLLmA%2BmNnULsdWadthr%2FOjlsDqHDcM8uzliwN%2BcYJIF5c2dnm9kPI8oV8Cq4k0u60brNqvR4PdpWt1Kg%2F3&X-Amz-Signature=5ad587c1cc21393ab2518710d7d1915b6dac51f03d0d1c5b62f5aa9ab9dd9ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFKK2P%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXUoxAkAvUOi1yO1QFD6WtEOguyVJWynf6WhTZIsPIAQIgP7uTh7WDIr6VkJAOAJdRYK4W10ySmg6QDd5U0%2FJIxAkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQghacTZuwmT%2FsyqCrcA8FYCc%2BLVUYGVDyKZJ%2BkaqZEELKLd2IdTtb6FIxLWzIUf0XhMqUOncyQtu0c1dFkP5tdxJaKMUPfRn3bcb2f3co6e0x3w7vzcYsGeMPS4G28IihhGcHmo6Ez6icPr6La7YZ5lRRouSQAVaViWKKkJNYqNPJ1QNAfbGV7jxGpymBCyB5IkAJjK4OkwrnPG0zbJOnj2iDBEG0VYcq4DZyd7kJ%2FuFgrdBn%2FNF90Au1PJeGJzKBrbi4w1FD71qsyPDFpZoKr2ftqX84QoTM6p65%2Bj2G4yYKKqycP%2B1KWa9elLAcT4hvlP5dSE98DmvYVz6xF2Uu6N2QJsTnE%2FQEqivpNyLMNcID9qRAsITnOM0za%2F2NHskSaUu9H1K5MRUCR7ZCvTurq00Evzs8%2F5SDY7cFtGmvenCLr9L%2FZo33FJVgZ9gwATRZyWxBL7ana62JV3fKUJH8l0j8w5X6gM2N9%2FHe5js3Ux2T0iOldsUuUnsK5l7utSw4nytIfV8lxPSa9i7kDYd%2Be7iki4BmYg89CPnE17rRvyE%2Fn8b%2Fymcr%2BIZUL5JpZ6XS8THyGGxPeadinbAHP40Q6babYK7cIXXec%2FhqXrz6ntE0kjFYx8z23W7%2B9OzPh%2FQSIFyljbihWIduHMP6D0ccGOqUB%2Fyulqtl1is%2FbrKjC%2BqtTsKD8BY64T0bvQtYaGD6RGDUSCb6k5%2BXzDP%2Bjuj1glc8ndr96Hyrk9lu1bCZYcXg3rBS8BC4TTvnBow9Cyjd%2BAkI0UoMhgtPzDkzm7kwv2AU1ZPPopXhu%2BIdLLmA%2BmNnULsdWadthr%2FOjlsDqHDcM8uzliwN%2BcYJIF5c2dnm9kPI8oV8Cq4k0u60brNqvR4PdpWt1Kg%2F3&X-Amz-Signature=01e4fcebda8e68f080d3372de7b75d84de870616d63a6229bb9e00c666b90a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


