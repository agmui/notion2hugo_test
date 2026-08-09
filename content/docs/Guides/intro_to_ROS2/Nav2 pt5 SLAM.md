---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

</details>



ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=7748229c158394bdfc56129e48ac5f8c5eba7aabb05ac5d2a32f3b476f3b6d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=9edb9bfbc843fdfbbab2085f7b904deb906fd7c3d02066c1fcf42b998d92b5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=fa465c253741b1857fae1879bb2176b99ad5e2f7cb9853c487a374942d202439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=fc61df8332cb65bef96792d23d22317e328de744c62d53febac1dd064302206e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=64ecc6181b75e908554601570f37167fbbb1ddf667e69abec88e6cd21244d47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=ea4804a243b58b44758a5bffcca72bf1657f1e4d8c4a150fc8a05b3ae508cf15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=956ba72e8e654f1cb0f852751828efaaa5c4077fd18467c55eeba58d9888e616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=603cfee182037ff507af4f38db9c5004c5fc9cd24611921fe5019257ce8d56f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=eacca1831d6d11f72819acfd93e37f2ba82b5202d63ab741afb2b2b39e8c8f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=812698d7dea4447c1996b4715bc4d908ebca4e255d51d2f77717ce215a61c6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=22e6442fe0fcf059b64c647925bf88249647775a30521d243de59f369c2d4a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=5469c5daf92ce3028d97b1897775682456b06ea7fcaffe98923c9f38cd131421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=0f5ef2597dab2dd941d1e0b7343cb8f794a2d56040a6496c3a71def6c9937b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LWAEV3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEiJ%2FRjhvhjLDbGMJGV2B9aD4ke24CEe2H2UNbmGrUZAiEAh7WKFRoTHmWmTND5tHrx8Jq9EgWK0tjDZwpDiEUzibkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLBupjn%2Bu85qN8qirSrcA%2BrmWmtPRpkorXtCqfxZBrFE03xBHTbqTaFBnxzqBs%2FogT9oyuClV%2BcNiSuKyrScF%2FmMcxcWHb1bLcX7btgnHy7%2BQegGpL9NiJyazRKz4L82%2BsYlEjJwKPu3jraL9rN%2BKfzUQhVWfj7cUn%2FXTMw6a3E2S3n4vuvPiPknDXE7TjiQZNXGf9kuHGDB4ax37%2B3D9DlIQzXm16NOQNX43HbJH%2Bt%2F5GGFNghnULNbRQzGlcSLoNedLp1r8p2NRvx%2FGL%2Bj%2BMFHwWZzuuupRxdhZRnS5SeK67KvNF4zvIELxsAEFZ1FntfgcSeJXNZIVKSOq9uEPMBXYrINjAmXP3%2FFUAjcyYex8f5byCBdFHYejFCxFthwkVdBGsiTx4EYSCOEQOsBSuH%2BXEfVkn2rU2eNtICZ625e7F70%2FFexvzBOEShtCEFrux3Ht5aMDTFmGvQ5J4JcRPMdz4aosU%2BHnfXaIGL05%2FBT%2BGFziPxv4%2FlU5drbculExxVB7egQRddRPlAyqrUxBjigm%2FbQxfgmj7CE6frC4JMUMnK9kGDg4SNp7PqM%2BPA7KfSXfUuJyWIdcHFNvGZ4qb4SPRT45tjKg0QP%2FL24YnR91HRMn8JmTepNe13U4V2dHmIYoZZF3nRZLYTMMLXT3tMGOqUB6vZZHl1apjxjvpoNMuROtnGjyMcMVguj03cCQp9Kfcvc4zY7quWRgS3bLAEteQ8lQCRfsD2JOcTjTI8JKWf36oYhcfOgt%2FVwOVJiVJJTDfoI14xZsHieNznq592NGmNEYR7PnlPGAim%2BfcugNHaT7rOX9iPWhUSbTCP%2FvT3OdYt1f3eTjzV2mk%2FCHOZmd%2BscOsPV3ZcWqfOocK8faM9oGCiVZrjo&X-Amz-Signature=6895b5dc1b8ac3aa7bb4854bb30bbf1fa84d46ff13837ea6966cfb5b975413e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
