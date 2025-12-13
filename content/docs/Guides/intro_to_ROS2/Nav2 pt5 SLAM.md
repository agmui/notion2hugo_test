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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=96e37aace7ca78cacfa27f99d530a5807b04c17ad17cdceb1b076ee9ade49b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=67fbac6ea9036e817c7cb996d193acabc36b748aa28fe90d7b7d3725b7ea67ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=4d57949602fa807a6e89bfbabb397f4d7f09481f57a1f41823093e83b9c428d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=d6ee7c44978ae3c6856361be8facf0b01f7b65dbfab6a610be86dec04ba8185e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=0727e9540ad989a0650e080f8818ea8c7f5c2c4d7a076985cd39e910f2cee698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=e312c31f77e4fe8639308f56baaf905414a4c78e801108c03994fd954588e0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=fa5c2103e287e81c23b6f26f137a819249a3c79be859a3db121d60dee2850d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=e3752f3ee76dbc23eb663aca096683c374e15611fd298b54be61fece93103dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=bc03ce6135b5de58d94aeddb8955d07aa53751118b48395900dee01e43eec65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=f6d01a66c75b89bc68b00fec926ae50b71719a1b658b519e7811ea4de75fb76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=d1a0a71152bffd0b06c6178f75d2e742f4674882eda54775e5da95bbe90c1597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=fb9dc456abd8b9ff14064ee930887172543538e2989f0ccbb6e872ce6e6e53e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=49c2aafbecd9f89330b10f8587b842d896ca6d392ae927a370dc18cc0f03ca8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6226B5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtnpdcOqetY%2BrloBomD%2F178dL74XfuRc7QtxHdjM7alAIhALytAQg7stG9QsCYEXuIfuIz0nxA9B18NiyaY5vAuAW3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy98mDOg5A6uvfTLfcq3AN3CycVMM25I470zCKSwALfUr5F1SkiIWzdqyuMZzxtx%2FD6Wg3Ub1%2BrraBXcXbqvE%2B10xfroo8YQIVj9jZEsjpTSYpFX5Ga4TIIntkBRDk%2FTCBwUTKLUulTLamyfQZzV4cEthAk3EI315p6%2B2r%2FKQg%2BmiF%2BF9EJWXrD0mIns81n1mkM2FWvGJLpHSuhkhzb8j%2F38YxJ8W54p0USXxN%2Bvs%2FLWSczIhJIhQUYmAyvJe9Wi4W6uyeVuNyST7UZBNT8Sk%2BajN1lz%2FA1fCRlrWOy3VSHlk9KWcgeerlNTsHVnDoNzAOa88HD66d%2FzmwsB6bbuyQEaA2aO%2FIkZTiftSGiD%2BZzdPlcRLmB6x1luDa8Kfq%2B38cbkOCM8yq6b1HQQscEp1z0VZjfu%2Bwg1U4f8aVKjrmdRRemATtkWYQ3y%2BRkzz2MFviDuD2OiM%2BQeABab14IDdcUO%2Ft2gq%2BSdgDt%2Bix7dtEWoq1zYbYpkOdO3jb9eNu9eajWdPRa2pREbtxrB5ocNcaz2FMseKutJ0hoveEGf%2BFwj9zt1XwXFaNUTwfcqixDvV%2BkgpuBzK%2FZeK2E3J2gx9IG8BuNh742PbOqVyIMAYNPbPf5GAHPI2FXfcCJhGti8xWpVwm1d7IJtzAI5zCD9PLJBjqkAdIcU6%2BqMTGJJ4uqHbr1gOapFbekmu4uAOLIGVMC6oZQdD0xQzkn4O6cMAUeclXc1GGQzw%2BypbZd9%2BhjVAHNtOC%2FSdg1qdmyTFSpx1kewNy4p3kUUEez5JxctPFYCTNDEsmbYt%2Fklwsg8qL%2By8qm7JoUDRzt7x6nUElSe2HxoDkKZnsIQYWNaXzBYp7%2FxJQC2FL%2BdvnJnIIzxAK19QsW6yYA87FN&X-Amz-Signature=4447ac305a3917fb29d1fa322bfb17a6aec93ccea4d41c64de6162489b3455d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
