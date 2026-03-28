---
sys:
  pageId: "22ada3bc-6297-80ff-ba73-e6e68e8311a4"
  createdTime: "2025-07-08T22:29:00.000Z"
  lastEditedTime: "2025-08-13T00:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 overview.md"
title: "Nav2 overview"
date: "2025-08-13T00:52:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 159
toc: false
icon: ""
---

If you have gotten to this point of the ROS guide this is the end to the Nav2 section.

Here is a brief overview of what is needed to set up the Nav2 stack

- create URDF
- create custom joint_state_pub node to publish `odom=>base_link` tf and `/cmd_vel`
- set up sim environment
- add lidar Node
- add Slam Node for `map=>odom` tf
- run nav2 bringup

{{% alert context="info" %}}

There is still one last part of this guide which is in the next page about `setup.py`. For the sake of making the whole guide easier to follow I have changed the way `setup.py` was created. The next guide goes into detail on how to fix this.

{{% /alert %}}

## Further guides

Some extra features you could add to Nav2 are listed here. These are just some extra things I found useful for Robomasters specifically

- [tuning robot footprint](https://docs.nav2.org/setup_guides/footprint/setup_footprint.html)
	- Robot footprint is the 2D representation of the robot nav2 uses for collision avoidance. It can be tuned to better fit the robot
- [keep out zones](https://docs.nav2.org/tutorials/docs/navigation2_with_keepout_filter.html)
	- obstacles that wont be picked up by the lidar can still be avoided by specifying _“keep out”_ zones.
	- Bumps to avoid in the Robomasters 2025 field:

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cfef7dc4-36b7-43a7-aef2-344f15ebe4c7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMXZM4P%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIE43bQc3vhy843ogFVLV%2F2nbAMd2ZETY1cf2dc7FrJrBAiB%2FS%2F0ozUOHCMI9EJa%2FkiVc1HDKImopLmqpauIIhwZHSyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMltqJRPWBlEcvqsuNKtwDQY6bRlXKoU2Qa%2B6hiPeF6RK6wPSQHIsAsxN4ZAJeRSJIonx%2FyURYLW83N4WVepRkC2PPB4Er2PJ%2FXIgXdH3Mo2rT0Zg3sKB%2B9ZVLpAGEA0mYDFlld2PzYJXcHDXauwMAptPSlGnFKiESgJpihGHENIJmbpfyLUoRKwhQDCnf2l7NK4UUAUyV3LnGkL8LmdofgEgJvkZo0OBDxTg4o4XTyUJtZjOvqdWD0q0zuwpSB37h6D%2Bk5VjAvQm7%2FnKQ1cRpERKKr0tuLJR38BawpNvOlC%2BlHve62zXWIxx525hz8C9YKoLrjBLxGZtoxrx%2BfO8SSCKISg9p3ox9xa3K%2FdHCzvQ%2BK92K1St%2Bv1tm8mLJrkwAORk04cCOQeYiiKlPTB2BmT2UWe2OjnnYHWJefiVmFiEMWwoWMpz8PeLi%2BNQMyLD%2FzFylg4LX%2BcVxrG1CgdswQUpZpe6KBsS8%2FV1PjDiDygY6s%2FTBSRz%2BN1mvYCNyK0oxHKKIjQVtG2yQVJVa%2Bfk6QEEYfNU4zCLY1QhDpJhaviKNHd4kS4YWM2imDU3E41RQV9lHKnLDuY3dWDmXnMdAKe%2BjNXMLCPbvwzVyPI4o39QRanFcgiGdgrG0s3jIfGKmDD2wLrl3FxgB6Oowzu2czgY6pgH3uTdIV3P6L3igMMksruyjBAGi4K1CKviMbSaZnd50bOizC%2F4k24eC8wla1MPoRQxSWguR%2Br9g7nZVZMc87JhduocfjXAKY2zXhHV1NiqXSqfjNtAlxhc2EjmFJ9l38TuddJHNhHiyFzAp8ZidAGVevgMAZxjHeyYoPCuIm57fYf5knzMJt7L4eIkBtFf51r5Iw%2BFJXJJOaEA1Sm%2BGDji%2FJjVsUFqa&X-Amz-Signature=ab81487ffb49b5753103e020a9bd3a5d447f3a815650f3fb30e125022acca8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- [lidar ignore zone](https://wiki.ros.org/laser_filters)
	- If your robot blocks off certain parts of the Lidar’s scan it can show up in your map. To avoid this ROS has a `laser_filters` package where you can ignore parts of the Lidar scan.

	<details>
	  <summary>{{< markdownify >}}example setup for ROS2 (the yaml config file stays the same from the guide):{{< /markdownify >}}</summary>
	  
	```python
	    lidar_filter_yaml = os.path.join(pkg_share, 'config', 'lidar_filter.yaml')
	
			...
			
	    lidar_filter = Node(
	            package='laser_filters',
	            executable='scan_to_scan_filter_chain',
	            # name='laser_filters',
	            output='screen',
	            emulate_tty=True,
	            # remappings=[
	            #     # Remap the default '/chatter' topic to '/conversation'
	            #     ('/scan', '/scan_raw'),
	            #     ('/scan_filtered', '/scan'),
	            # ],
	            parameters=[lidar_filter_yaml])
	```
	
	</details>
	
	
- [behavior trees](https://docs.nav2.org/behavior_trees/index.html)
	- Nav2 has a custom system to describe “_robot behavior_” such as what to do if suck or when to go to which goal. It can be though of as an advanced state machine.
	- It is recommend in Robomasters to use the behavior trees for sentry decision making
- [real sense node](https://github.com/IntelRealSense/realsense-ros)
	- It is common to have real sense nodes in Robomasters. If you do use one there is a ROS2 node for it where you can specify all the parameters.

## Configuring for holinomic drive

For our team’s Nav2 setup specifically we set our robot to be omnidirectional or a holinomic drive instead of diff drive. This requires lots of changes in the nav2 params so I will do my best to list them here. These are just the params that I found worked for jazzy.

[Here is another guide that goes over some of the nav2 parameters if lost](https://automaticaddison.com/ros-2-navigation-tuning-guide-nav2/)

- amcl
	- `robot_model_type` set to`"nav2_amcl::OmniMotionModel”`
- controller_server
	- ros__parameters
		- `min_y_velocity_threshold` set to `0.001`
	- general_goal_checker
		- `yaw_goal_tolerance` set to `0.50`
	- FollowPath
		- `ay_min` set to `-3.0`
		- `vy_min` set to `-0.35`
		- `wz_max` set to `1.9`
		- `motion_model` set to `"Omni”`
		- `critics` add `"TwirlingCritic"` to the array
		- GoalAngleCritic
			- `enabled` set to `false`
		- Add this under `PathAngleCritic` with the same number of tabs

			```yaml
			  TwirlingCritic:
			    enabled: true
			    twirling_cost_power: 1
			    twirling_cost_weight: 10.0
			```
- behavior_server
	- ros__parameters
		- `max_rotational_vel` set to `0.0`
		- `min_rotational_vel` set to `0.0`
- velocity_smoother
	- ros__parameters
		- `max_velocity` set to `[0.5, 0.5, 2.0]`
		- `min_velocity` set to `[-0.5, -0.5, -2.0]`
		- `max_accel` set to `[2.5, 2.5, 3.2]`
		- `max_decel` set to `[-2.5, -2.5, -3.2]`

**behavior tree replacement:**

[official behavior tree guide](https://docs.nav2.org/behavior_trees/index.html)

There is a spin critic in the default behavior tree so to get rid of it you have to provide your own behavior tree: 

in the config folder make this file `my_nav_to_pose_bt.xml`

> note this is just a template to just get holinomic drive to work it is recommend you make your own.

```xml
<root main_tree_to_execute="MainTree">
  <BehaviorTree ID="MainTree">
    <RecoveryNode number_of_retries="6" name="NavigateRecovery">
      <PipelineSequence name="NavigateWithReplanning">
        <RateController hz="1.0">
          <RecoveryNode number_of_retries="1" name="ComputePathToPose">
            <ComputePathToPose goal="{goal}" path="{path}" planner_id="GridBased"/>
            <ClearEntireCostmap name="ClearGlobalCostmap-Context" service_name="global_costmap/clear_entirely_global_costmap"/>
          </RecoveryNode>
        </RateController>
        <RecoveryNode number_of_retries="1" name="FollowPath">
          <FollowPath path="{path}" controller_id="FollowPath"/>
          <ClearEntireCostmap name="ClearLocalCostmap-Context" service_name="local_costmap/clear_entirely_local_costmap"/>
        </RecoveryNode>
      </PipelineSequence>
      <ReactiveFallback name="RecoveryFallback">
        <GoalUpdated/>
        <SequenceStar name="RecoveryActions">
          <ClearEntireCostmap name="ClearLocalCostmap-Subtree" service_name="local_costmap/clear_entirely_local_costmap"/>
          <ClearEntireCostmap name="ClearGlobalCostmap-Subtree" service_name="global_costmap/clear_entirely_global_costmap"/>
          <Wait wait_duration="5"/>
        </SequenceStar>
      </ReactiveFallback>
    </RecoveryNode>
  </BehaviorTree>
</root>
```

Then in the launch file add this

```bash "1-1","11-11"
    bt_xml = os.path.join(pkg_share, 'config', 'my_nav_to_pose_bt.xml')
    
    ...
    
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'default_bt_xml_filename': bt_xml
        }.items()
    )
```

## architectural decisions

<details>
  <summary>{{< markdownify >}}Why all in one node?{{< /markdownify >}}</summary>
  
ideally you are suppose to represent the hardware/resources better by having be physical nodes however for Robomasters many things are latency sensitive and having message pass though the ROS middleware had too much latency. Granted this was just though our limited testing was without fine tuning ROS for our specific application. However for the Robomaster’s robotics completion teams just need a dead simple working framework that works well enough for competition. Genraly robomasters clubs don’t have lots of time to fine tune and configure ROS perfectly so arcitecthing the whole robot under the `my_node` is jank but works for our specific situation. This guide is <u>_ment_</u> to give teams a bare bones working Nav2 stack where teams can later on extend and re architect the whole design.

</details>



# Further Nav2 stuff to look at

- [https://docs.nav2.org/concepts/index.html](https://docs.nav2.org/concepts/index.html)
- [https://docs.nav2.org/configuration/index.html](https://docs.nav2.org/configuration/index.html)
- [https://docs.nav2.org/plugin_tutorials/index.html](https://docs.nav2.org/plugin_tutorials/index.html)
- [https://docs.nav2.org/tuning/index.html](https://docs.nav2.org/tuning/index.html)
- [https://docs.nav2.org/plugins/index.html](https://docs.nav2.org/plugins/index.html)
- [making custom gazebo worlds](https://www.youtube.com/watch?v=K4rHglJW7Hg&t=)

---

## common bugs:

```bash
[bt_navigator-11] [ERROR] [1752642430.128585554] [transformPoseInTargetFrame]: Extrapolation Error looking up target frame: Lookup would require extrapolation into the future.  Requested time 1752642429.927490 but the latest data is at time 3.800000, when looking up transform from frame [base_link] to frame [map]
```

not using sim time

for got to set map frame

idk talk about this (mention how this is a cleaner version):

- [https://github.com/adoodevv/diff_drive_robot/tree/main](https://github.com/adoodevv/diff_drive_robot/tree/main)
- [https://github.com/Alexander-Levy/sim_bot/tree/humble-new-gazebo](https://github.com/Alexander-Levy/sim_bot/tree/humble-new-gazebo)
