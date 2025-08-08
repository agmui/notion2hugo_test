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
      <summary>What is slam?</summary>
      TODO:
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=b186fcffd2058f2f3b30247272d47f315e707d45227cbfbb35650a2bde4063c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=c7de232f36f889c3565c8165e0222a95f702fabcc9f9172d4e15c447dc802b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=f83318d926baaa63338e4b514f36b288b995ceeab60c6a066fd8e9b8394078f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=cb64a04695ae8a11a9acc9ce5c63bb899be996c838635dfa3bb615848bfc464a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=253dc24655ed4a4d64473354ec28d594428f4e654db3a253124c1b9bab91f733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=dc9d0d5d5aa4b7ca5c50939c42f2cfac6374d28f15fcc980adec1b6d46a7aeb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=e8bcc9a427e05ceb3da74ee75745fd89a967fa6c2ef1540648d2a0e0a7dc9289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=84b6580a13bdbd5bbb2edb8194d1674f3632c625a1b5c2f7613786cdf0a5bb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=70370eab7aaf59f37327400205e6306afb1e11adf5e283aa48922e8eaf0e49ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=28831af2860873f05de6f94ba03c24297d39c7a5e0a381c5cc164bf840aa18be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=29c67d43b9e2a2875c77acb783ad8004796d5acec4ee7a4c3a04aca52f9dfda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=26fee3a3642456a75dee74fff33db5ef1b2ca303d6360644a0c66eecb6604ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=4befd3a10c2bc49f892af35b40e3e16383af058894973f293770dfb964f22c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEHEO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCX52BCRKPY3UIXXd4irvKx7G1AoDnscslaCX3%2F8fz0WgIgCuYqR4gyF0Jq%2BxRDkxwT%2BmJMZ1OSiu6jbS29OqqoQa4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZXdI6c%2BymvJhs1kyrcA%2FwovNbQf5D9qQu6eIcULZIBjTCHR4raR2%2B%2FrK8DBv5vRncGHPwRBl5ufU7NDXvS%2FzngK04SxNDy%2BcIXvPNd4hH%2F6C6IIoo3T0lcuT8%2B0uzWx74P%2BUC%2BIHx3%2BwEWSgA%2F7OyfD%2F0T4VoRO2y65dC27irzMMLPcAfuy0fXejM1JfQpBOhUH%2FSROtALWMnaQSxQGKQ9USuKBKQ%2FMTJ0rq5XXqW249Q%2BedzWYJMO%2FjgJBZFO6Bn%2BnsOVUnjmy5d95gcP9WuTmr%2FdSTLO5drccvczt9%2FOG8N9vAAyJHRIoz%2B1e0sOrhhiwHLVkXEjC4%2FHzky2k2IzJVsLkujjQdXuBvVZdfoZXPSEiTOIa5xKPDVyv2qhR61BkzqINCMkt3yuFdhaHvzrnWVhJ7QLRi59StgvciSjmcJYQt6zbJb7clpprf1EHYbngxKsGaEa110FUN37z94u7qH4N%2Beum9DU6r17NE%2Foho%2B0jNG%2FBzh1gP5tNh4%2FPYFXEzqy2mIDGrgjQyjAh27rHpmg%2FfPdJRdEtU%2BHu9GibYRa6iVUfdvIw9wE5B45j1kzBu5Kann8GyKw6yV17ELiPoOCRgdVDcEud1K28RTS%2F1KTD0OYEYytPQPiS%2BYhir4JGTyy1%2FVdf3RdMKDH1sQGOqUBJwJTjjB5JnpOxj6dQb%2BuSr2jHqdByKiz7eirDh9IsyVn9Pa2O0MByPZgODSuduTrPxshkGGoF40NWC8Izlohgc3hznC250i7lAW0c4pz9IL5waj9kW9jhQA5pVXgZMv5vDwvSR7IOZg%2FC%2BmrfeTdUMblmnF2N%2BuFk94R2g4fnOvWkgtIpdPKbesUT7LyeMRjDtRJQKkqF1i2nE53UCV%2BM%2Bbi8mk6&X-Amz-Signature=7cd5d99658351d9c61483d7f155538ad0e59cca6c807f198868f5aa63da7f48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
