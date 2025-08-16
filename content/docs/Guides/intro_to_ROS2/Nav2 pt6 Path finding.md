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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=ca9831ce882ae1ffa7219e06f8ab63ac066911fdbcdeeaa2a456abfac920d593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=9a7da9ea26314becae162435d715f94eaad2d760edef648ab55060de3e23cc6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=f7ea11e7620c1d317d14f0a7cdc6c839f1ff93dc1e004b97749bd1f43e86614c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=97d23185e534d6d4dc62938f2feee59338889b30e2166732d1903d5e4c2d11c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=cdb4750ba3d85bd714744f4bdd8d98f66bb77c81e914a4c37aae1de420873b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=6442786a327d4c242084a5c84ca54d9d121aa6ac028dc1059b197fd77cc056e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=9fd6cdaa9f3834791c75cba8c712c0d8d2ea4c34b1f54c3048d9716aa4a3c112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=a1e60082d02cef1187d7351709423463dc7b61c52a294136945b761b6b67b497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=46780cfbe5821323f269cf8733e68fd9fc200c7083a0e61481668479bb9fec49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=25c796b04fd972283bfc5ade2a52681f18e6a11e26fb8e13d59fab9cc3641f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=0581dffd21e522e61fb2c0a117fce155cd072cd3595bcc9d409c651f51a5a5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=f7d381f88fceab53c855d2acd96c83a94bd68828da42e5c2e33f25656b32a7f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO2HTSM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJ%2BbIH0RPaLCL3kYYlkR3sEw66Ct2p0ZFUPd2D1fkuMAiBiTSWwBznkPGQTlQxWPpHvmKatHJYAfVE4TN5FHs85Ryr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeYAD6T22erBfNxPxKtwDyBatkke49nMLtgEPDhNEjAe3KN9Je%2FtXPM7LpxB2BqmH%2BFeuqxFidOcGQmcjBcqGfHNATdhDWwkPxcjv%2BZelrHj6De4DzoAQCIxcUD80bIxL%2BQaitJhu6gPcZ0X8vFLb%2BcaIlNcoBuJJtbSausPnPL529X71oWcUOwlPqlEbHOFchQlt7WZDwwPK07WtwCE%2FVkEJZHenJaL06pfTB86xoNAw1xatZ8NyDOFcKJAFg2KCY7xtNUo2kFelppdpXAs4g7oDQ6FaewKa6yo%2FLRMCqBU1kn2idZSZQAb%2FDkXNyfh4pjbpu6TV13f43MTy7OyxDF7XMuFATlKYFj5%2F9m99U1UKuAVGlwIX%2B04pSjQqxwztzDHksg2Vi1Hs1rpsIkCeNA7lBTAGrTL9fn69Nvrmhdlv1TTl9tQFJq2%2FQVBmZeNmzJpXgj5w2EAKGpvxG5XVyCBzKvvUkdQgMV%2FGSRPsm6yGxL%2F7aL8o6pmQ3OH8Aep%2F5HDEViL25vNj0flTjy1direnZGFsrDVJh1OL4qwrkgm80q0m5Z0OOqDTmQHppe4ROcxH%2BMGDI8aJE1b%2B7l2aM%2BZREu1PZol1oa6vrl3LP2Mqm0HmODJfGmLtGz3yG0HjTuXOXn%2Brc6Toj1owttj%2BxAY6pgHVE7U5Jxwpq8fpghHduLLgcfjJZ7XeO5XOMXwamEDaKfRaQaPfk2POxYvSzPyGWj26S5JoCKm5b%2FBJOF5J5yG2VoO%2FqFFDfL8HMtvY%2FujgVZfuKoT6pyq2f7HO3JxPiugFyJweSMAyMCgRDDrYB1kf3eH5je8QEocxRegy8WQFowZ%2BSaQBDTsEpd6pnfGpcwBLkaq8yuMOOY51MDMI9vV95U5IOcne&X-Amz-Signature=4a59b16504915fe911783d1bfe008b85320b1ba54b3530b2dc071ec93611e1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

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
