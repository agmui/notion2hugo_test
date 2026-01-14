---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

</details>



TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSP72XUV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIApYpUp%2BJEikBaVRCtuA2xlRo%2Bbsh3kRv%2BgM%2BuM1d7wFAiBa%2BsTcJNw9TvWPf5dB345MQmzUwxHAHXYXxCJ04jIZiCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMcqI1O0RRK3yW8uXxKtwDALLsmkPEwn%2BU7Mu0mQ4RB31Nfpt7rItM43fnXdhTp81So8dYgjaHiGKCw3ZDrG38w5vb43NuxOnnlyc62IceNNUUUyaf%2By1JaME%2FjEYsnd7YEU0WtKYZUthmZHfu3%2FyhcOzg9ThwAU1aTlaoekzJjz8cVWcr%2BgRcpCpqRakcH5oE52LjofpCBGcUIuqkK4Z1ZWiqKBUpFlln58PApt3Mq2nmlIHOP1%2BN7ci8PKqLjK3Wcm0tUlDxvaoIfyJFwn3yMTNuceZKcCd2RL0cC8a6YSMaXyliOOt73HU4aEp2WWhqsGlAFQIJFNYTlpaEhuJkDHPqzueNUGheCJfM6VwguMM5P1tMMMfeygJNpiyi1OrESt9auNcA%2FWOjpJcwAt8SPN5XhdcjaDe6m2aHQboHYhwHe4gZxg3ofb7boPJIuT%2BuJcwCwqaOvjDRuIfMce7ctmOCG0kxuZAh%2FpC8RYW075NvTY1HSbpFTOia0LcPQ1Ykosa6JHKD%2B2fsZnFZEfOw8EA8U4vcvMg0pV1Mx5YekPlG0vWVVBB1PTTouAYhgDxQqd5tGATcIIrXJwhkd09XNQqm5hXD8rR5mB8qKJaGygE8jL4dXxSdQsWF7BObnRiFqGMEsXnvFuXCcKQw882bywY6pgEgh0voTvP%2FFVhLmP%2B%2F%2FP1CJ65UXSzyqsTz26iYAsWXPLefVp%2Bbbj1qmiWkMbRKuOl7cEC7WB6Vv81lvfVwn9TMHivvhSYGzgoGdLeQ1xPf6cyNR7Ei9E4NH14Hy2dQnU7z00veMe%2FHnntXl%2FHxAekj%2FY6X75OvXAQ7sTCpGa%2B8R1wOlXihs%2F3lZnkWNEENzLsmYya53V8zS7%2BuLk8mMdZBeMOj1CZJ&X-Amz-Signature=a3c6d87b6e875631863f0a3a9be3421f69519506dd15f5aafbfc36e5d6bd362b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVXPSAL%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICb1u862j1APpQ0E7qFpzFuGKX2oMCpPXtAgnedxjj3yAiEAjGxBw6ScxdipaWzaeUR5B%2BBLmjK%2FaW0VX12ZVJ8nRmsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH0ZHDbHE2zZyrnxICrcAwWFMJmYX7WFh3APLaRg9nqHVITWv0LpgGOHw83jCaTqXGccyrYTAYkZd3apfwHg01sQaQ9jAe80V%2BTB%2BgP7MQ%2Fx8Pdp7%2FbuAugiHuyfpLRltJ1aYPCLvHoTlOQaAgzO9V%2FgHsNvoTlN8UICy66GtxAz7ucw7tS23HNqCdsBykdBPWD8ihIL1slNJcvgc7WLVTZE9Ux50NoKWyxbsYueP9OV6IroA36aWyeZ7OxvpauHWLDTi672Cbh5%2BQH39KMJ%2By9G%2BH6tKkNV7BCJ%2BltmbVsmPRD55EoVDYnHrGB%2BgWGjwNZBaao%2B66YMMguIuIqqew%2FpUX%2BXV5ets%2BueKn8I6VT1V91IsztH1JiNXjtKlWtiP7owSl6djU1gUFiDHH7PYHYKO94EJHSY3nDIWJvwjq%2B%2FhzCl5WspzCsdQ8Fi0MomBx%2B53VwXW%2F9yZJA3WvS5YngpPVjtKfhLrkCuvRZGSSoWFdqabEZC4y0n1bw8WknqRvZwtLLAePGNZhEaTZPVP3Uku2qaDpeBvGCmyDF4ZBYdSlMiJ%2BX2b%2BnLworst3f6RQeyoLSPEtTLaI5IinQo%2FZHsBcd5To7rZusnrOk3Spa2j1wbGfa%2FtQRIdw%2FViXMFk3CU3UxI%2BYsMX%2F6mMPzNm8sGOqUBfoGzRjCdv3waaQL%2BurE5WUvVY%2BVkFMzwrCmLDdcyAKb1YKC35y%2B%2FH5R8f0X8CzquEp0YXh6erG6eW3NI0BDT6gMPu9W7AIcy%2B2HYaLg2gFRccxKUHJvXCq%2FGr1ZpdekQPde2q7CyjudM71xW%2FwFb%2B9FHcRNsqZis%2FmHuPJqDpsPJJRi%2BLq2wRn8LDjMURj2fPSi6x69r2lbvoO9EnBzpjGYjlyaT&X-Amz-Signature=525378458e7e69648317cec622634fa4c291683132eaceea802c3c579ba0fa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVXPSAL%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICb1u862j1APpQ0E7qFpzFuGKX2oMCpPXtAgnedxjj3yAiEAjGxBw6ScxdipaWzaeUR5B%2BBLmjK%2FaW0VX12ZVJ8nRmsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH0ZHDbHE2zZyrnxICrcAwWFMJmYX7WFh3APLaRg9nqHVITWv0LpgGOHw83jCaTqXGccyrYTAYkZd3apfwHg01sQaQ9jAe80V%2BTB%2BgP7MQ%2Fx8Pdp7%2FbuAugiHuyfpLRltJ1aYPCLvHoTlOQaAgzO9V%2FgHsNvoTlN8UICy66GtxAz7ucw7tS23HNqCdsBykdBPWD8ihIL1slNJcvgc7WLVTZE9Ux50NoKWyxbsYueP9OV6IroA36aWyeZ7OxvpauHWLDTi672Cbh5%2BQH39KMJ%2By9G%2BH6tKkNV7BCJ%2BltmbVsmPRD55EoVDYnHrGB%2BgWGjwNZBaao%2B66YMMguIuIqqew%2FpUX%2BXV5ets%2BueKn8I6VT1V91IsztH1JiNXjtKlWtiP7owSl6djU1gUFiDHH7PYHYKO94EJHSY3nDIWJvwjq%2B%2FhzCl5WspzCsdQ8Fi0MomBx%2B53VwXW%2F9yZJA3WvS5YngpPVjtKfhLrkCuvRZGSSoWFdqabEZC4y0n1bw8WknqRvZwtLLAePGNZhEaTZPVP3Uku2qaDpeBvGCmyDF4ZBYdSlMiJ%2BX2b%2BnLworst3f6RQeyoLSPEtTLaI5IinQo%2FZHsBcd5To7rZusnrOk3Spa2j1wbGfa%2FtQRIdw%2FViXMFk3CU3UxI%2BYsMX%2F6mMPzNm8sGOqUBfoGzRjCdv3waaQL%2BurE5WUvVY%2BVkFMzwrCmLDdcyAKb1YKC35y%2B%2FH5R8f0X8CzquEp0YXh6erG6eW3NI0BDT6gMPu9W7AIcy%2B2HYaLg2gFRccxKUHJvXCq%2FGr1ZpdekQPde2q7CyjudM71xW%2FwFb%2B9FHcRNsqZis%2FmHuPJqDpsPJJRi%2BLq2wRn8LDjMURj2fPSi6x69r2lbvoO9EnBzpjGYjlyaT&X-Amz-Signature=b6273393ecac7b159a09a328b91b176165dbd83e19828788ea81ac69f60be9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVXPSAL%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICb1u862j1APpQ0E7qFpzFuGKX2oMCpPXtAgnedxjj3yAiEAjGxBw6ScxdipaWzaeUR5B%2BBLmjK%2FaW0VX12ZVJ8nRmsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH0ZHDbHE2zZyrnxICrcAwWFMJmYX7WFh3APLaRg9nqHVITWv0LpgGOHw83jCaTqXGccyrYTAYkZd3apfwHg01sQaQ9jAe80V%2BTB%2BgP7MQ%2Fx8Pdp7%2FbuAugiHuyfpLRltJ1aYPCLvHoTlOQaAgzO9V%2FgHsNvoTlN8UICy66GtxAz7ucw7tS23HNqCdsBykdBPWD8ihIL1slNJcvgc7WLVTZE9Ux50NoKWyxbsYueP9OV6IroA36aWyeZ7OxvpauHWLDTi672Cbh5%2BQH39KMJ%2By9G%2BH6tKkNV7BCJ%2BltmbVsmPRD55EoVDYnHrGB%2BgWGjwNZBaao%2B66YMMguIuIqqew%2FpUX%2BXV5ets%2BueKn8I6VT1V91IsztH1JiNXjtKlWtiP7owSl6djU1gUFiDHH7PYHYKO94EJHSY3nDIWJvwjq%2B%2FhzCl5WspzCsdQ8Fi0MomBx%2B53VwXW%2F9yZJA3WvS5YngpPVjtKfhLrkCuvRZGSSoWFdqabEZC4y0n1bw8WknqRvZwtLLAePGNZhEaTZPVP3Uku2qaDpeBvGCmyDF4ZBYdSlMiJ%2BX2b%2BnLworst3f6RQeyoLSPEtTLaI5IinQo%2FZHsBcd5To7rZusnrOk3Spa2j1wbGfa%2FtQRIdw%2FViXMFk3CU3UxI%2BYsMX%2F6mMPzNm8sGOqUBfoGzRjCdv3waaQL%2BurE5WUvVY%2BVkFMzwrCmLDdcyAKb1YKC35y%2B%2FH5R8f0X8CzquEp0YXh6erG6eW3NI0BDT6gMPu9W7AIcy%2B2HYaLg2gFRccxKUHJvXCq%2FGr1ZpdekQPde2q7CyjudM71xW%2FwFb%2B9FHcRNsqZis%2FmHuPJqDpsPJJRi%2BLq2wRn8LDjMURj2fPSi6x69r2lbvoO9EnBzpjGYjlyaT&X-Amz-Signature=23f92f6283e5c2a9bb137d55644bd3e0f712e6b36c33157be0ccbcaca0d55144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVXPSAL%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICb1u862j1APpQ0E7qFpzFuGKX2oMCpPXtAgnedxjj3yAiEAjGxBw6ScxdipaWzaeUR5B%2BBLmjK%2FaW0VX12ZVJ8nRmsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH0ZHDbHE2zZyrnxICrcAwWFMJmYX7WFh3APLaRg9nqHVITWv0LpgGOHw83jCaTqXGccyrYTAYkZd3apfwHg01sQaQ9jAe80V%2BTB%2BgP7MQ%2Fx8Pdp7%2FbuAugiHuyfpLRltJ1aYPCLvHoTlOQaAgzO9V%2FgHsNvoTlN8UICy66GtxAz7ucw7tS23HNqCdsBykdBPWD8ihIL1slNJcvgc7WLVTZE9Ux50NoKWyxbsYueP9OV6IroA36aWyeZ7OxvpauHWLDTi672Cbh5%2BQH39KMJ%2By9G%2BH6tKkNV7BCJ%2BltmbVsmPRD55EoVDYnHrGB%2BgWGjwNZBaao%2B66YMMguIuIqqew%2FpUX%2BXV5ets%2BueKn8I6VT1V91IsztH1JiNXjtKlWtiP7owSl6djU1gUFiDHH7PYHYKO94EJHSY3nDIWJvwjq%2B%2FhzCl5WspzCsdQ8Fi0MomBx%2B53VwXW%2F9yZJA3WvS5YngpPVjtKfhLrkCuvRZGSSoWFdqabEZC4y0n1bw8WknqRvZwtLLAePGNZhEaTZPVP3Uku2qaDpeBvGCmyDF4ZBYdSlMiJ%2BX2b%2BnLworst3f6RQeyoLSPEtTLaI5IinQo%2FZHsBcd5To7rZusnrOk3Spa2j1wbGfa%2FtQRIdw%2FViXMFk3CU3UxI%2BYsMX%2F6mMPzNm8sGOqUBfoGzRjCdv3waaQL%2BurE5WUvVY%2BVkFMzwrCmLDdcyAKb1YKC35y%2B%2FH5R8f0X8CzquEp0YXh6erG6eW3NI0BDT6gMPu9W7AIcy%2B2HYaLg2gFRccxKUHJvXCq%2FGr1ZpdekQPde2q7CyjudM71xW%2FwFb%2B9FHcRNsqZis%2FmHuPJqDpsPJJRi%2BLq2wRn8LDjMURj2fPSi6x69r2lbvoO9EnBzpjGYjlyaT&X-Amz-Signature=0783a45b47a096d4210da876b9f7f8c6484919e24b6732fcb353a1bd45488de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVXPSAL%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICb1u862j1APpQ0E7qFpzFuGKX2oMCpPXtAgnedxjj3yAiEAjGxBw6ScxdipaWzaeUR5B%2BBLmjK%2FaW0VX12ZVJ8nRmsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH0ZHDbHE2zZyrnxICrcAwWFMJmYX7WFh3APLaRg9nqHVITWv0LpgGOHw83jCaTqXGccyrYTAYkZd3apfwHg01sQaQ9jAe80V%2BTB%2BgP7MQ%2Fx8Pdp7%2FbuAugiHuyfpLRltJ1aYPCLvHoTlOQaAgzO9V%2FgHsNvoTlN8UICy66GtxAz7ucw7tS23HNqCdsBykdBPWD8ihIL1slNJcvgc7WLVTZE9Ux50NoKWyxbsYueP9OV6IroA36aWyeZ7OxvpauHWLDTi672Cbh5%2BQH39KMJ%2By9G%2BH6tKkNV7BCJ%2BltmbVsmPRD55EoVDYnHrGB%2BgWGjwNZBaao%2B66YMMguIuIqqew%2FpUX%2BXV5ets%2BueKn8I6VT1V91IsztH1JiNXjtKlWtiP7owSl6djU1gUFiDHH7PYHYKO94EJHSY3nDIWJvwjq%2B%2FhzCl5WspzCsdQ8Fi0MomBx%2B53VwXW%2F9yZJA3WvS5YngpPVjtKfhLrkCuvRZGSSoWFdqabEZC4y0n1bw8WknqRvZwtLLAePGNZhEaTZPVP3Uku2qaDpeBvGCmyDF4ZBYdSlMiJ%2BX2b%2BnLworst3f6RQeyoLSPEtTLaI5IinQo%2FZHsBcd5To7rZusnrOk3Spa2j1wbGfa%2FtQRIdw%2FViXMFk3CU3UxI%2BYsMX%2F6mMPzNm8sGOqUBfoGzRjCdv3waaQL%2BurE5WUvVY%2BVkFMzwrCmLDdcyAKb1YKC35y%2B%2FH5R8f0X8CzquEp0YXh6erG6eW3NI0BDT6gMPu9W7AIcy%2B2HYaLg2gFRccxKUHJvXCq%2FGr1ZpdekQPde2q7CyjudM71xW%2FwFb%2B9FHcRNsqZis%2FmHuPJqDpsPJJRi%2BLq2wRn8LDjMURj2fPSi6x69r2lbvoO9EnBzpjGYjlyaT&X-Amz-Signature=a759e0a11c6feb6103c195dc31fbc3ec43f9e528402decbe2021ba519fb77d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVXPSAL%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICb1u862j1APpQ0E7qFpzFuGKX2oMCpPXtAgnedxjj3yAiEAjGxBw6ScxdipaWzaeUR5B%2BBLmjK%2FaW0VX12ZVJ8nRmsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH0ZHDbHE2zZyrnxICrcAwWFMJmYX7WFh3APLaRg9nqHVITWv0LpgGOHw83jCaTqXGccyrYTAYkZd3apfwHg01sQaQ9jAe80V%2BTB%2BgP7MQ%2Fx8Pdp7%2FbuAugiHuyfpLRltJ1aYPCLvHoTlOQaAgzO9V%2FgHsNvoTlN8UICy66GtxAz7ucw7tS23HNqCdsBykdBPWD8ihIL1slNJcvgc7WLVTZE9Ux50NoKWyxbsYueP9OV6IroA36aWyeZ7OxvpauHWLDTi672Cbh5%2BQH39KMJ%2By9G%2BH6tKkNV7BCJ%2BltmbVsmPRD55EoVDYnHrGB%2BgWGjwNZBaao%2B66YMMguIuIqqew%2FpUX%2BXV5ets%2BueKn8I6VT1V91IsztH1JiNXjtKlWtiP7owSl6djU1gUFiDHH7PYHYKO94EJHSY3nDIWJvwjq%2B%2FhzCl5WspzCsdQ8Fi0MomBx%2B53VwXW%2F9yZJA3WvS5YngpPVjtKfhLrkCuvRZGSSoWFdqabEZC4y0n1bw8WknqRvZwtLLAePGNZhEaTZPVP3Uku2qaDpeBvGCmyDF4ZBYdSlMiJ%2BX2b%2BnLworst3f6RQeyoLSPEtTLaI5IinQo%2FZHsBcd5To7rZusnrOk3Spa2j1wbGfa%2FtQRIdw%2FViXMFk3CU3UxI%2BYsMX%2F6mMPzNm8sGOqUBfoGzRjCdv3waaQL%2BurE5WUvVY%2BVkFMzwrCmLDdcyAKb1YKC35y%2B%2FH5R8f0X8CzquEp0YXh6erG6eW3NI0BDT6gMPu9W7AIcy%2B2HYaLg2gFRccxKUHJvXCq%2FGr1ZpdekQPde2q7CyjudM71xW%2FwFb%2B9FHcRNsqZis%2FmHuPJqDpsPJJRi%2BLq2wRn8LDjMURj2fPSi6x69r2lbvoO9EnBzpjGYjlyaT&X-Amz-Signature=dabb2113bcc0878ee3bbd591bd1b721eb3a12089dc1ab43f654d361c55792dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVXPSAL%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICb1u862j1APpQ0E7qFpzFuGKX2oMCpPXtAgnedxjj3yAiEAjGxBw6ScxdipaWzaeUR5B%2BBLmjK%2FaW0VX12ZVJ8nRmsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH0ZHDbHE2zZyrnxICrcAwWFMJmYX7WFh3APLaRg9nqHVITWv0LpgGOHw83jCaTqXGccyrYTAYkZd3apfwHg01sQaQ9jAe80V%2BTB%2BgP7MQ%2Fx8Pdp7%2FbuAugiHuyfpLRltJ1aYPCLvHoTlOQaAgzO9V%2FgHsNvoTlN8UICy66GtxAz7ucw7tS23HNqCdsBykdBPWD8ihIL1slNJcvgc7WLVTZE9Ux50NoKWyxbsYueP9OV6IroA36aWyeZ7OxvpauHWLDTi672Cbh5%2BQH39KMJ%2By9G%2BH6tKkNV7BCJ%2BltmbVsmPRD55EoVDYnHrGB%2BgWGjwNZBaao%2B66YMMguIuIqqew%2FpUX%2BXV5ets%2BueKn8I6VT1V91IsztH1JiNXjtKlWtiP7owSl6djU1gUFiDHH7PYHYKO94EJHSY3nDIWJvwjq%2B%2FhzCl5WspzCsdQ8Fi0MomBx%2B53VwXW%2F9yZJA3WvS5YngpPVjtKfhLrkCuvRZGSSoWFdqabEZC4y0n1bw8WknqRvZwtLLAePGNZhEaTZPVP3Uku2qaDpeBvGCmyDF4ZBYdSlMiJ%2BX2b%2BnLworst3f6RQeyoLSPEtTLaI5IinQo%2FZHsBcd5To7rZusnrOk3Spa2j1wbGfa%2FtQRIdw%2FViXMFk3CU3UxI%2BYsMX%2F6mMPzNm8sGOqUBfoGzRjCdv3waaQL%2BurE5WUvVY%2BVkFMzwrCmLDdcyAKb1YKC35y%2B%2FH5R8f0X8CzquEp0YXh6erG6eW3NI0BDT6gMPu9W7AIcy%2B2HYaLg2gFRccxKUHJvXCq%2FGr1ZpdekQPde2q7CyjudM71xW%2FwFb%2B9FHcRNsqZis%2FmHuPJqDpsPJJRi%2BLq2wRn8LDjMURj2fPSi6x69r2lbvoO9EnBzpjGYjlyaT&X-Amz-Signature=eb4c7e16fde9640e9f41d7ce72e8b59b41f70dc15a196da89f44b22e9325a317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVXPSAL%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICb1u862j1APpQ0E7qFpzFuGKX2oMCpPXtAgnedxjj3yAiEAjGxBw6ScxdipaWzaeUR5B%2BBLmjK%2FaW0VX12ZVJ8nRmsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH0ZHDbHE2zZyrnxICrcAwWFMJmYX7WFh3APLaRg9nqHVITWv0LpgGOHw83jCaTqXGccyrYTAYkZd3apfwHg01sQaQ9jAe80V%2BTB%2BgP7MQ%2Fx8Pdp7%2FbuAugiHuyfpLRltJ1aYPCLvHoTlOQaAgzO9V%2FgHsNvoTlN8UICy66GtxAz7ucw7tS23HNqCdsBykdBPWD8ihIL1slNJcvgc7WLVTZE9Ux50NoKWyxbsYueP9OV6IroA36aWyeZ7OxvpauHWLDTi672Cbh5%2BQH39KMJ%2By9G%2BH6tKkNV7BCJ%2BltmbVsmPRD55EoVDYnHrGB%2BgWGjwNZBaao%2B66YMMguIuIqqew%2FpUX%2BXV5ets%2BueKn8I6VT1V91IsztH1JiNXjtKlWtiP7owSl6djU1gUFiDHH7PYHYKO94EJHSY3nDIWJvwjq%2B%2FhzCl5WspzCsdQ8Fi0MomBx%2B53VwXW%2F9yZJA3WvS5YngpPVjtKfhLrkCuvRZGSSoWFdqabEZC4y0n1bw8WknqRvZwtLLAePGNZhEaTZPVP3Uku2qaDpeBvGCmyDF4ZBYdSlMiJ%2BX2b%2BnLworst3f6RQeyoLSPEtTLaI5IinQo%2FZHsBcd5To7rZusnrOk3Spa2j1wbGfa%2FtQRIdw%2FViXMFk3CU3UxI%2BYsMX%2F6mMPzNm8sGOqUBfoGzRjCdv3waaQL%2BurE5WUvVY%2BVkFMzwrCmLDdcyAKb1YKC35y%2B%2FH5R8f0X8CzquEp0YXh6erG6eW3NI0BDT6gMPu9W7AIcy%2B2HYaLg2gFRccxKUHJvXCq%2FGr1ZpdekQPde2q7CyjudM71xW%2FwFb%2B9FHcRNsqZis%2FmHuPJqDpsPJJRi%2BLq2wRn8LDjMURj2fPSi6x69r2lbvoO9EnBzpjGYjlyaT&X-Amz-Signature=43c34c6cd6ad3a6a5c47addeaa15b74b6846a76c012d4b01ae058e9e5dcde4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
    ])
```

<details>
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
```bash
ls /dev/ttyUSB*
```

</details>



{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVXPSAL%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICb1u862j1APpQ0E7qFpzFuGKX2oMCpPXtAgnedxjj3yAiEAjGxBw6ScxdipaWzaeUR5B%2BBLmjK%2FaW0VX12ZVJ8nRmsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH0ZHDbHE2zZyrnxICrcAwWFMJmYX7WFh3APLaRg9nqHVITWv0LpgGOHw83jCaTqXGccyrYTAYkZd3apfwHg01sQaQ9jAe80V%2BTB%2BgP7MQ%2Fx8Pdp7%2FbuAugiHuyfpLRltJ1aYPCLvHoTlOQaAgzO9V%2FgHsNvoTlN8UICy66GtxAz7ucw7tS23HNqCdsBykdBPWD8ihIL1slNJcvgc7WLVTZE9Ux50NoKWyxbsYueP9OV6IroA36aWyeZ7OxvpauHWLDTi672Cbh5%2BQH39KMJ%2By9G%2BH6tKkNV7BCJ%2BltmbVsmPRD55EoVDYnHrGB%2BgWGjwNZBaao%2B66YMMguIuIqqew%2FpUX%2BXV5ets%2BueKn8I6VT1V91IsztH1JiNXjtKlWtiP7owSl6djU1gUFiDHH7PYHYKO94EJHSY3nDIWJvwjq%2B%2FhzCl5WspzCsdQ8Fi0MomBx%2B53VwXW%2F9yZJA3WvS5YngpPVjtKfhLrkCuvRZGSSoWFdqabEZC4y0n1bw8WknqRvZwtLLAePGNZhEaTZPVP3Uku2qaDpeBvGCmyDF4ZBYdSlMiJ%2BX2b%2BnLworst3f6RQeyoLSPEtTLaI5IinQo%2FZHsBcd5To7rZusnrOk3Spa2j1wbGfa%2FtQRIdw%2FViXMFk3CU3UxI%2BYsMX%2F6mMPzNm8sGOqUBfoGzRjCdv3waaQL%2BurE5WUvVY%2BVkFMzwrCmLDdcyAKb1YKC35y%2B%2FH5R8f0X8CzquEp0YXh6erG6eW3NI0BDT6gMPu9W7AIcy%2B2HYaLg2gFRccxKUHJvXCq%2FGr1ZpdekQPde2q7CyjudM71xW%2FwFb%2B9FHcRNsqZis%2FmHuPJqDpsPJJRi%2BLq2wRn8LDjMURj2fPSi6x69r2lbvoO9EnBzpjGYjlyaT&X-Amz-Signature=e5a20074eceb59c276f1dd14f576a89a7a40e5ccce9100cd0256645cf1dd2d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVXPSAL%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICb1u862j1APpQ0E7qFpzFuGKX2oMCpPXtAgnedxjj3yAiEAjGxBw6ScxdipaWzaeUR5B%2BBLmjK%2FaW0VX12ZVJ8nRmsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH0ZHDbHE2zZyrnxICrcAwWFMJmYX7WFh3APLaRg9nqHVITWv0LpgGOHw83jCaTqXGccyrYTAYkZd3apfwHg01sQaQ9jAe80V%2BTB%2BgP7MQ%2Fx8Pdp7%2FbuAugiHuyfpLRltJ1aYPCLvHoTlOQaAgzO9V%2FgHsNvoTlN8UICy66GtxAz7ucw7tS23HNqCdsBykdBPWD8ihIL1slNJcvgc7WLVTZE9Ux50NoKWyxbsYueP9OV6IroA36aWyeZ7OxvpauHWLDTi672Cbh5%2BQH39KMJ%2By9G%2BH6tKkNV7BCJ%2BltmbVsmPRD55EoVDYnHrGB%2BgWGjwNZBaao%2B66YMMguIuIqqew%2FpUX%2BXV5ets%2BueKn8I6VT1V91IsztH1JiNXjtKlWtiP7owSl6djU1gUFiDHH7PYHYKO94EJHSY3nDIWJvwjq%2B%2FhzCl5WspzCsdQ8Fi0MomBx%2B53VwXW%2F9yZJA3WvS5YngpPVjtKfhLrkCuvRZGSSoWFdqabEZC4y0n1bw8WknqRvZwtLLAePGNZhEaTZPVP3Uku2qaDpeBvGCmyDF4ZBYdSlMiJ%2BX2b%2BnLworst3f6RQeyoLSPEtTLaI5IinQo%2FZHsBcd5To7rZusnrOk3Spa2j1wbGfa%2FtQRIdw%2FViXMFk3CU3UxI%2BYsMX%2F6mMPzNm8sGOqUBfoGzRjCdv3waaQL%2BurE5WUvVY%2BVkFMzwrCmLDdcyAKb1YKC35y%2B%2FH5R8f0X8CzquEp0YXh6erG6eW3NI0BDT6gMPu9W7AIcy%2B2HYaLg2gFRccxKUHJvXCq%2FGr1ZpdekQPde2q7CyjudM71xW%2FwFb%2B9FHcRNsqZis%2FmHuPJqDpsPJJRi%2BLq2wRn8LDjMURj2fPSi6x69r2lbvoO9EnBzpjGYjlyaT&X-Amz-Signature=5a7064910ebafa04897216ee137021a5314d8e40bd02883eeaa8ae734ac3131a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
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

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
