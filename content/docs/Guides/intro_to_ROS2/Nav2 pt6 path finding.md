---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXMH2YZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFtCe2xRWmCEeAtMrO8LpEosXc79EF8xkfefFIZGCLMOAiAP%2BhgLhOmEwCvjs63cdtd3uETX8L8bqrWGP6pKQVyWbyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMK9hlkpa0FluYeFMDKtwDBhthSMKO6DLakyd%2BIBQcfsLweE6huChxky4Nq6XgajqzK49%2FtWLXgM7OnZA5xBh8emrtWHgMqzxW5lYaS2HbfwNbfR9VoUEM3yOq3Ca3AFQuHSX95R55XeP8V%2BlCJosYYa4ApaepjPjrJeLVyV765qRKjoXEqn3wCB0EMyTQj%2FNOFVFJ%2FfNFKwplPZBvoKGFE9756%2FSayTg7RA1mPdxe0yObB3BoTSjfw27cm4JI%2BD2Npy5o5SJ7QloiNLAOhwh9WN8f6mB%2FFjAN8BwXNk1%2FX%2B82%2B7L5Bx8Njj4AKtE6kuBmxs2udPKslmGjIfKvj0uDzuClCRmEakZVhohF%2BwLpzelMgVIaCJxpm0qORvJrA0Xf1NLilj7ho5271hjGNO2%2B5tahi9uTX40JzhPcLhbO6kTyM7Z9suuaygQ0rCY7%2BiPx8PLTptcxd76p6ni6nMhst%2F%2FGmAku9NPp%2BPAmlJx7nCtJ6%2BJfOo7MKVH6QhhjGVpznpv9zCCMFwF2PInGae5gBR2u%2F%2BaQ160AGcqlsZDLBRpnWR0dn5q89pRFkuGnI95dsTRumlQe%2BQSO%2FUvKwgSEjpLxJ8lg13MKte8DUgWUfC2r%2FUGrES2azQsAEruA28lHNeYD4fLFw6wBuaAwwveLxAY6pgHBY1w8hhcx63O0boGyWiUrHAr59617xeV3hr%2BPYr1uqq1ez%2FuzCugT8lR5yYRkPFQWc1RaLygsdyfT3Pkc17%2B2ZUsoW4qUUuB0a0vYwBLAY%2BRAkmAGMbg87otzGexs4%2B5PJOrR83isIhsdRTjg2WOK6eatsp%2FbN149XsJh%2BDglda5wTIj9mHJk5iV478i8cT67T%2BGY7NOKGfIzG3Ysw6A38g2BT5zP&X-Amz-Signature=ff23f3a808eada5bf7730d454510754fd931364bfbd051eeef1497c4a824fe8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXMH2YZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFtCe2xRWmCEeAtMrO8LpEosXc79EF8xkfefFIZGCLMOAiAP%2BhgLhOmEwCvjs63cdtd3uETX8L8bqrWGP6pKQVyWbyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMK9hlkpa0FluYeFMDKtwDBhthSMKO6DLakyd%2BIBQcfsLweE6huChxky4Nq6XgajqzK49%2FtWLXgM7OnZA5xBh8emrtWHgMqzxW5lYaS2HbfwNbfR9VoUEM3yOq3Ca3AFQuHSX95R55XeP8V%2BlCJosYYa4ApaepjPjrJeLVyV765qRKjoXEqn3wCB0EMyTQj%2FNOFVFJ%2FfNFKwplPZBvoKGFE9756%2FSayTg7RA1mPdxe0yObB3BoTSjfw27cm4JI%2BD2Npy5o5SJ7QloiNLAOhwh9WN8f6mB%2FFjAN8BwXNk1%2FX%2B82%2B7L5Bx8Njj4AKtE6kuBmxs2udPKslmGjIfKvj0uDzuClCRmEakZVhohF%2BwLpzelMgVIaCJxpm0qORvJrA0Xf1NLilj7ho5271hjGNO2%2B5tahi9uTX40JzhPcLhbO6kTyM7Z9suuaygQ0rCY7%2BiPx8PLTptcxd76p6ni6nMhst%2F%2FGmAku9NPp%2BPAmlJx7nCtJ6%2BJfOo7MKVH6QhhjGVpznpv9zCCMFwF2PInGae5gBR2u%2F%2BaQ160AGcqlsZDLBRpnWR0dn5q89pRFkuGnI95dsTRumlQe%2BQSO%2FUvKwgSEjpLxJ8lg13MKte8DUgWUfC2r%2FUGrES2azQsAEruA28lHNeYD4fLFw6wBuaAwwveLxAY6pgHBY1w8hhcx63O0boGyWiUrHAr59617xeV3hr%2BPYr1uqq1ez%2FuzCugT8lR5yYRkPFQWc1RaLygsdyfT3Pkc17%2B2ZUsoW4qUUuB0a0vYwBLAY%2BRAkmAGMbg87otzGexs4%2B5PJOrR83isIhsdRTjg2WOK6eatsp%2FbN149XsJh%2BDglda5wTIj9mHJk5iV478i8cT67T%2BGY7NOKGfIzG3Ysw6A38g2BT5zP&X-Amz-Signature=cbb31bee41a398d54661493dd8c7564501b11effac10d4629d3bd29e4db02e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXMH2YZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFtCe2xRWmCEeAtMrO8LpEosXc79EF8xkfefFIZGCLMOAiAP%2BhgLhOmEwCvjs63cdtd3uETX8L8bqrWGP6pKQVyWbyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMK9hlkpa0FluYeFMDKtwDBhthSMKO6DLakyd%2BIBQcfsLweE6huChxky4Nq6XgajqzK49%2FtWLXgM7OnZA5xBh8emrtWHgMqzxW5lYaS2HbfwNbfR9VoUEM3yOq3Ca3AFQuHSX95R55XeP8V%2BlCJosYYa4ApaepjPjrJeLVyV765qRKjoXEqn3wCB0EMyTQj%2FNOFVFJ%2FfNFKwplPZBvoKGFE9756%2FSayTg7RA1mPdxe0yObB3BoTSjfw27cm4JI%2BD2Npy5o5SJ7QloiNLAOhwh9WN8f6mB%2FFjAN8BwXNk1%2FX%2B82%2B7L5Bx8Njj4AKtE6kuBmxs2udPKslmGjIfKvj0uDzuClCRmEakZVhohF%2BwLpzelMgVIaCJxpm0qORvJrA0Xf1NLilj7ho5271hjGNO2%2B5tahi9uTX40JzhPcLhbO6kTyM7Z9suuaygQ0rCY7%2BiPx8PLTptcxd76p6ni6nMhst%2F%2FGmAku9NPp%2BPAmlJx7nCtJ6%2BJfOo7MKVH6QhhjGVpznpv9zCCMFwF2PInGae5gBR2u%2F%2BaQ160AGcqlsZDLBRpnWR0dn5q89pRFkuGnI95dsTRumlQe%2BQSO%2FUvKwgSEjpLxJ8lg13MKte8DUgWUfC2r%2FUGrES2azQsAEruA28lHNeYD4fLFw6wBuaAwwveLxAY6pgHBY1w8hhcx63O0boGyWiUrHAr59617xeV3hr%2BPYr1uqq1ez%2FuzCugT8lR5yYRkPFQWc1RaLygsdyfT3Pkc17%2B2ZUsoW4qUUuB0a0vYwBLAY%2BRAkmAGMbg87otzGexs4%2B5PJOrR83isIhsdRTjg2WOK6eatsp%2FbN149XsJh%2BDglda5wTIj9mHJk5iV478i8cT67T%2BGY7NOKGfIzG3Ysw6A38g2BT5zP&X-Amz-Signature=2484488ef1e3f28afd5e0004c2ae4db5faa75a9b25e30949418d4b210b482093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXMH2YZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFtCe2xRWmCEeAtMrO8LpEosXc79EF8xkfefFIZGCLMOAiAP%2BhgLhOmEwCvjs63cdtd3uETX8L8bqrWGP6pKQVyWbyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMK9hlkpa0FluYeFMDKtwDBhthSMKO6DLakyd%2BIBQcfsLweE6huChxky4Nq6XgajqzK49%2FtWLXgM7OnZA5xBh8emrtWHgMqzxW5lYaS2HbfwNbfR9VoUEM3yOq3Ca3AFQuHSX95R55XeP8V%2BlCJosYYa4ApaepjPjrJeLVyV765qRKjoXEqn3wCB0EMyTQj%2FNOFVFJ%2FfNFKwplPZBvoKGFE9756%2FSayTg7RA1mPdxe0yObB3BoTSjfw27cm4JI%2BD2Npy5o5SJ7QloiNLAOhwh9WN8f6mB%2FFjAN8BwXNk1%2FX%2B82%2B7L5Bx8Njj4AKtE6kuBmxs2udPKslmGjIfKvj0uDzuClCRmEakZVhohF%2BwLpzelMgVIaCJxpm0qORvJrA0Xf1NLilj7ho5271hjGNO2%2B5tahi9uTX40JzhPcLhbO6kTyM7Z9suuaygQ0rCY7%2BiPx8PLTptcxd76p6ni6nMhst%2F%2FGmAku9NPp%2BPAmlJx7nCtJ6%2BJfOo7MKVH6QhhjGVpznpv9zCCMFwF2PInGae5gBR2u%2F%2BaQ160AGcqlsZDLBRpnWR0dn5q89pRFkuGnI95dsTRumlQe%2BQSO%2FUvKwgSEjpLxJ8lg13MKte8DUgWUfC2r%2FUGrES2azQsAEruA28lHNeYD4fLFw6wBuaAwwveLxAY6pgHBY1w8hhcx63O0boGyWiUrHAr59617xeV3hr%2BPYr1uqq1ez%2FuzCugT8lR5yYRkPFQWc1RaLygsdyfT3Pkc17%2B2ZUsoW4qUUuB0a0vYwBLAY%2BRAkmAGMbg87otzGexs4%2B5PJOrR83isIhsdRTjg2WOK6eatsp%2FbN149XsJh%2BDglda5wTIj9mHJk5iV478i8cT67T%2BGY7NOKGfIzG3Ysw6A38g2BT5zP&X-Amz-Signature=3dcfc4cc2abb438244a079402d8999fe008c13596c05b5f69752c09773c16534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXMH2YZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFtCe2xRWmCEeAtMrO8LpEosXc79EF8xkfefFIZGCLMOAiAP%2BhgLhOmEwCvjs63cdtd3uETX8L8bqrWGP6pKQVyWbyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMK9hlkpa0FluYeFMDKtwDBhthSMKO6DLakyd%2BIBQcfsLweE6huChxky4Nq6XgajqzK49%2FtWLXgM7OnZA5xBh8emrtWHgMqzxW5lYaS2HbfwNbfR9VoUEM3yOq3Ca3AFQuHSX95R55XeP8V%2BlCJosYYa4ApaepjPjrJeLVyV765qRKjoXEqn3wCB0EMyTQj%2FNOFVFJ%2FfNFKwplPZBvoKGFE9756%2FSayTg7RA1mPdxe0yObB3BoTSjfw27cm4JI%2BD2Npy5o5SJ7QloiNLAOhwh9WN8f6mB%2FFjAN8BwXNk1%2FX%2B82%2B7L5Bx8Njj4AKtE6kuBmxs2udPKslmGjIfKvj0uDzuClCRmEakZVhohF%2BwLpzelMgVIaCJxpm0qORvJrA0Xf1NLilj7ho5271hjGNO2%2B5tahi9uTX40JzhPcLhbO6kTyM7Z9suuaygQ0rCY7%2BiPx8PLTptcxd76p6ni6nMhst%2F%2FGmAku9NPp%2BPAmlJx7nCtJ6%2BJfOo7MKVH6QhhjGVpznpv9zCCMFwF2PInGae5gBR2u%2F%2BaQ160AGcqlsZDLBRpnWR0dn5q89pRFkuGnI95dsTRumlQe%2BQSO%2FUvKwgSEjpLxJ8lg13MKte8DUgWUfC2r%2FUGrES2azQsAEruA28lHNeYD4fLFw6wBuaAwwveLxAY6pgHBY1w8hhcx63O0boGyWiUrHAr59617xeV3hr%2BPYr1uqq1ez%2FuzCugT8lR5yYRkPFQWc1RaLygsdyfT3Pkc17%2B2ZUsoW4qUUuB0a0vYwBLAY%2BRAkmAGMbg87otzGexs4%2B5PJOrR83isIhsdRTjg2WOK6eatsp%2FbN149XsJh%2BDglda5wTIj9mHJk5iV478i8cT67T%2BGY7NOKGfIzG3Ysw6A38g2BT5zP&X-Amz-Signature=ae3c6e87cb0ddefa3463d3c58832e190cffc7d0edf6ea8f7956e8bc4cddb1372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXMH2YZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFtCe2xRWmCEeAtMrO8LpEosXc79EF8xkfefFIZGCLMOAiAP%2BhgLhOmEwCvjs63cdtd3uETX8L8bqrWGP6pKQVyWbyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMK9hlkpa0FluYeFMDKtwDBhthSMKO6DLakyd%2BIBQcfsLweE6huChxky4Nq6XgajqzK49%2FtWLXgM7OnZA5xBh8emrtWHgMqzxW5lYaS2HbfwNbfR9VoUEM3yOq3Ca3AFQuHSX95R55XeP8V%2BlCJosYYa4ApaepjPjrJeLVyV765qRKjoXEqn3wCB0EMyTQj%2FNOFVFJ%2FfNFKwplPZBvoKGFE9756%2FSayTg7RA1mPdxe0yObB3BoTSjfw27cm4JI%2BD2Npy5o5SJ7QloiNLAOhwh9WN8f6mB%2FFjAN8BwXNk1%2FX%2B82%2B7L5Bx8Njj4AKtE6kuBmxs2udPKslmGjIfKvj0uDzuClCRmEakZVhohF%2BwLpzelMgVIaCJxpm0qORvJrA0Xf1NLilj7ho5271hjGNO2%2B5tahi9uTX40JzhPcLhbO6kTyM7Z9suuaygQ0rCY7%2BiPx8PLTptcxd76p6ni6nMhst%2F%2FGmAku9NPp%2BPAmlJx7nCtJ6%2BJfOo7MKVH6QhhjGVpznpv9zCCMFwF2PInGae5gBR2u%2F%2BaQ160AGcqlsZDLBRpnWR0dn5q89pRFkuGnI95dsTRumlQe%2BQSO%2FUvKwgSEjpLxJ8lg13MKte8DUgWUfC2r%2FUGrES2azQsAEruA28lHNeYD4fLFw6wBuaAwwveLxAY6pgHBY1w8hhcx63O0boGyWiUrHAr59617xeV3hr%2BPYr1uqq1ez%2FuzCugT8lR5yYRkPFQWc1RaLygsdyfT3Pkc17%2B2ZUsoW4qUUuB0a0vYwBLAY%2BRAkmAGMbg87otzGexs4%2B5PJOrR83isIhsdRTjg2WOK6eatsp%2FbN149XsJh%2BDglda5wTIj9mHJk5iV478i8cT67T%2BGY7NOKGfIzG3Ysw6A38g2BT5zP&X-Amz-Signature=93281e12ac525a295c3706950ee564891a24e03e68eac5ced5c30cd3c3fb40b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
