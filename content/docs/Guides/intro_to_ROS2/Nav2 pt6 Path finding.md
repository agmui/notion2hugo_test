---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=7935c320fe1751c2b1a74f618b48a5d0564095b6f674ce540b3e09795bc17fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}


#### Outputs:

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=168be835bb28c72e7718de3527eb5bc73f9b38f25ce160f934ff498bac7c4a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=15dd07272022c1f2a48100f2a35a8c0c3f9a880928d009061325acf45c15ae5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=f84fde98718bd045a3acebdce43957df10cfefb969c261403758bd3873c66273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=3932e1c448626ca17d6838b4b59f3636095b00e751fb0b7ed4f938457ac900d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=611c3ba5575d92188b6b7e0decd06f8b07ea38ceb9322ba49f79ff959ce57b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=73d2956d4ee2546c4ada761c6e3839cf84e7fa57f783b5b8c40d13b3fbe28b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=2ce913fa01d6a78dd554d1bdf1947e4b31c338732870dde489ef7e134f92ca9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=7909d1ba71a3efc793366dd06e96c60a6b965c1762217b9c5783f8feb2582769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=dd7e1e66b024d0a089f88c4581d140d87c6e650d3b41341369280da376492a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=cdc8d76b8c071509b1614822ad1ca3e58cd51dd5640083b343505af7fa446ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=58486cbeb21a178e61dd9909656da054d1a6d7158c97635f0805eed088faa126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6EFO6Z%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1tOmIeBRSXr6x8%2FjIKESlfx7XLPuny5QLyzmUvkLwswIgQscWxfji%2BT79eMrrFAJ0CPFBVCPpXSNOKo0BBQsplVcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeFZy5Mdb6jt6ksPCrcA8rXuSIqQorakz3ptSg7sHAvolFW8Xq8Q7FG0ZxraQFpKh7YgFwfGfvp8pM%2FhG57fbdrNU8Orjx6TQqH51LT0zpy5pPeq7i18tTS7%2BArg5nbhFDO34lYJXoTWNy0UP29RlWpH9uV%2FpVTMCAwgEULejUR%2FSLdEMqPXt7FpW8K%2B1KlpW8F0PSEhm5vu2kH3pcvznw2iFBQ8ny2LM2QhqVas%2BD%2Fmh5tV%2FDktx2XtrBBGVfL16bShCZmjLTninJtHdf7spNLskGGjF7qEGLss0Uo3VredNHcZK%2Bqj6DzmfSRZnfILJ1j51VaenAUa9FTgjgXE8asO3eBjTVMytXBaW%2FxOO8GQfOCefPEGBOz%2B0jd2hzynRLlVlorx6XO%2FOW7PWCx2zQs80yPLZ76DjG%2BLTZNB1Q5i62LSN6Dgqz5gSdaBqUE6uV0Mn06LabgvAS7q3fqMwlU0LMmbOYwMqH%2Bz1%2B5lTnCeat2KX2GBg%2FNBW2N3%2BTzQcR7gq4qmKVn5NO6cV8RixZhu9bFcOtG5izRKsuEvrQuqvoBlZknmBrqXKwfGEqlby7QXxU12%2F%2BycoWHrEPWzmNHWw%2BuJO1Hh00nuMbJdiPd1FN%2FO4%2FVLGb8O%2B3lpwzqIs7YMa%2BmvYASoZlKMLaWjMcGOqUBJMU4Ufvi4Gq%2Bl%2FbBYzeSvYFFT0DJmmnJY%2FTPDQUf4EXZ92UrGDxxfY0cZD57eTVXYJYMfnO4pu%2F34fDbuP9UOb8kiQE0B3Za11KmgrCZ6ko7ciD1LspoYt%2BXsbF0bnR3p4uq4Yl2PmWBlSe7PiWNYSfRIeV5%2BrQuP3Iz4dttz26j2gNkBj1owdyQAUqPc%2B2Ivrvr71qLckY0wY1Kx7ns9zxUMQfd&X-Amz-Signature=c9591a1cf24065e66d67f142e20fd83da7ab4b2a69c412a1c36405283014a1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
