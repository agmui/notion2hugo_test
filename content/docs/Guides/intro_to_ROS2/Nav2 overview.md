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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cfef7dc4-36b7-43a7-aef2-344f15ebe4c7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHMPCSK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzkywFCbW8vJGMOdD9FK50T87bCkTG%2FQhTJJRZWRsplwIgBoPGc4fRb3R7HRkHGc%2FpXbR6OAufhOJO%2FNFYfW5xGLMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBwvyb5bRZgbcjQkRCrcA0DoCwiZwS6reqhCDhLbwtH2Mc5hW2vFyb07EBiW9jaAfscJDvxdtC8pUb2DUsIbWh8qBxKnOhgqLlDYhbx9VcOx%2FsBp6eL8k0vG5MIIxfVb1MUZMK9KE4B%2Ba6auY1X9bXJqBX%2FmAUWEbKVUoM8wakZsbW90XbW86hSLDuczEjdqkWE%2Bwwjmbgr%2F1bZTnzKK2T72jj%2BxPrEktJ%2B%2F4bMphBj9WUt7HY9QmcNfe87RyYuRZZ9hhDlYblW%2BXQ9pCCjbOSNLHrDeF6BcQAnLONgJjsyj6IDY3Etn0fw%2BMQAZ%2B7AAHTI813nPdVDdHgsv5%2BwOZmgslmAMLj0TvdQVKOVXUo6kFTOznjnPAxKCTCMZZ8W1OitOj0LOt4R0zj4Hu18P5F7Llzjpkf5yrjI4pQDO9ohJHfz7qOhHIcvGdfiG9pc2w5uOKVIsOuICLsdV1c%2BKt4gVsnun6Hs4YjEgLxfJ0FGvcXoiBbEEsFkus50o5bJ67ijWGi0GxN%2BAqCp2sIshn46vIw8Zghre7WqB9IPrmo2xV8m%2BLQYVq1VQx1G5obLCM6uE4BnV1HpKnk2nlKOtVQ2v%2BPet6NWbbS3SxS4BoglWl1esvea153Lqo6KdvYhopmnvKJFdNX79ehcFMPDQ8MQGOqUBUyiOv597q0G4213bOzZrvx7WBxAYhF0Cf3%2BVDIDtfnH%2FEab07S%2FV2AtW6tGVCcyCzCaiTbqxJ7w3O2w3V%2Fqk9TjbZv3jUHKS%2Bnk93ls0mtB7cUvkDIDIvVduIJph2hzJOwLw2uzedG%2FR5mpHLpJGo%2FtqqrfSXzKCX8VZpBRkr3ixV1vqoEJXyg8SUTIBkeGiAp9roylB08QKCBwBD2%2BZGqw4fMJY&X-Amz-Signature=0ec904db8c78b345a397da45c5ffab07a8c7043bfbf510fda26f25fb5a7a3991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- [lidar ignore zone](https://wiki.ros.org/laser_filters)
	- If your robot blocks off certain parts of the Lidar’s scan it can show up in your map. To avoid this ROS has a `laser_filters` package where you can ignore parts of the Lidar scan.

	<details>
	      <summary>example setup for ROS2 (the yaml config file stays the same from the guide):</summary>
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

```bash
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
      <summary>Why all in one node?</summary>
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
