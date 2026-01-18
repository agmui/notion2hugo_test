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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKK4OHKX%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXdbsq3Xv7JfRhe%2FtXtujfNer2ai6tQxzglh79ZDcN5AiBorJ9vj26nGxrnVeRFFTcKrAeKqBZc7Bey7rDWiEx0iSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMahzYce3%2F6R7PAJvtKtwD5OSUSQSxxQX2zHUSh8ODblBRY%2FycNCmXNtRywxg1hTbT4oLwveWZK9si0yZzKnpoQBOizAE4ytINOs9UT4CrZiUbv4SiBGWRffyDkpfDA5EDX3FgTRmEb%2FYdiFjqmatn5s3NiUZMt8ZnyJcaEJmTv6%2BR50vpBNS2qrbS8z1a%2B4rzEa6jUHJlmPnOn7nRY1OKWnuPUwea%2F5%2FGtjr3SKSdgTB%2FaYoiLYKFGzPT%2B%2B2veEiDaAk2EpabukeKxaEGBu5wZBlGChs7D%2BH8a7qTSKHsWQP%2Bor8TM%2BRoI37hsVd8mxit6DfpvYaTo%2B8aOtW%2BxcBi1tERlcZLM6PQb9ZW5SQePPY3WFb0jYmcp34WyCFj32p4rSac4fxq8fc5pwM%2BW87xDxWV8KzmMqw6GMinqBJa1shu2TDum3Yn3fXcloi4%2F43C1D1bscUvsaed7YuiurY7dKcwAMwkas5gfdVFyVLmGiqSe7F%2FpEe3MVX5HVQ7zFGyKxBLyhFDAyfN2KgmIagwuP7Cvbtl8gqpbVCR%2Bgmh9bpWIhjPuF4WfAe9p9Lna6v%2FLRMfg9FGyVEQHefUuJ9pTtUaGqlBLf3lprpz0k4sLqG3WDLnb66YKA%2F7VygMgfaUTPR6%2B0t0fX9IVscwy5ywywY6pgHlq%2Bkry5eMCOeYMF9YMH3SemrhqEBjawNkODf59MtNfJW0xK3oOEdQpEmINcgp0Ztz%2Fk6juDWirN2NdI5M35wlJMFQY1vLAUNfrTd5pqz2BkGEKkB87uln1hjSWTf1aVuMLupxNTUE57%2BwHu7YIsZKqZd%2BgOHGg4ttVyaHJJL1hOuMtLHX%2BLz7aQ%2BkhuOJszmhMS38yTNxha5thdEFG2sVsxDOZlGc&X-Amz-Signature=285223ef5f8d33d89d35ab3f3e776dbdf979a2b0779fbd7e254addaa1a45df5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKKPIJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXavf4rM1MyCc%2FVwbeUO3i6dyXIQjS1PcuU0PjzBPZsAiEArIw7HDEAS%2BuTv3aBRhVihjivsSJLImksEFPEG6XVqjsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPDKuTwfoV2SEn%2BDDSrcA%2BH7SZbq3%2F8G%2BI8G0cAkYvNNy1A7MUgVSXAzQSdRDOu4cFFLEh6qcwbxid8cI%2BxFjmvlB9qQGIxPwS7Pp6c3D%2F0l5DVw8UDMlKxu1ZpZQzzaI8ROnWpo2JMfsY%2BFiJ43FTwdlRaraVhupihpiGDV4lQQYhY2ec%2Fjh2PIM7HefftO9BgOS58fsMdACkmKI1cAYPBAxTOhKGQfVjFdugWwRS8wRoVOtq6wSJTgiNKZvd3fBNZj1qwy51oOQT0fwbcLNncbjWybOjqROk6LY%2BXmQ3lA09fZVY1yvPzXxzFT6kwJ1zxecB3gW3yqZlYHRisRz49g8VtYJUJ2ej%2FwzIsc3krzpYG4qvrnPEdpOQ0ic1JP2GfDWjblq2rR6P9%2B%2BXp2WJW08dFjPFau7GDfXWZV9tsQ3e189dzPz%2FPoE57yuO5rBF6hrKcPZumduD%2FceJAy5yqF%2Fn7OSkAe0rHSAuyf5Q3FDK8kRe6MP8lUNKgenjhZ31EUcWePuLKNIXzdRmB6dx89sCAywqv5REUuzPSjmljEsaAQfve5UDdu6c%2B0S5oUYF%2F0HLvvCUsNGlaFLzTeGOBChzxL3nJOYGPNtjSzw6Mp2sPsYC%2FBD69sOMq5QcH5imFFz6oTZi8Ce%2Fg7MMycsMsGOqUB%2FDDyAL9xZWZUV3B65b9ZpGx9PhwEG5x%2FBZWgXCANmEk2r8H9N3gPhMZKo75sWoys916fpFJypm3aejn0aajqQxxqflHMoVa9bAUbqL6JwfvaWx76uKXORb7FHKiFrP0TxyrlAzuVoQ4SVlBis10Om4FPljXtgFQJ0RMV2yHQbxV%2FiWRqaPLd0Ep24FccdkwWBDwSkW3zHUTGWkyr1tPaeASiOPSd&X-Amz-Signature=8721d7fd5b38514d3abcbd61bd4017d01bdc4cd9229b1dbeeb90b278eda48125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKKPIJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXavf4rM1MyCc%2FVwbeUO3i6dyXIQjS1PcuU0PjzBPZsAiEArIw7HDEAS%2BuTv3aBRhVihjivsSJLImksEFPEG6XVqjsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPDKuTwfoV2SEn%2BDDSrcA%2BH7SZbq3%2F8G%2BI8G0cAkYvNNy1A7MUgVSXAzQSdRDOu4cFFLEh6qcwbxid8cI%2BxFjmvlB9qQGIxPwS7Pp6c3D%2F0l5DVw8UDMlKxu1ZpZQzzaI8ROnWpo2JMfsY%2BFiJ43FTwdlRaraVhupihpiGDV4lQQYhY2ec%2Fjh2PIM7HefftO9BgOS58fsMdACkmKI1cAYPBAxTOhKGQfVjFdugWwRS8wRoVOtq6wSJTgiNKZvd3fBNZj1qwy51oOQT0fwbcLNncbjWybOjqROk6LY%2BXmQ3lA09fZVY1yvPzXxzFT6kwJ1zxecB3gW3yqZlYHRisRz49g8VtYJUJ2ej%2FwzIsc3krzpYG4qvrnPEdpOQ0ic1JP2GfDWjblq2rR6P9%2B%2BXp2WJW08dFjPFau7GDfXWZV9tsQ3e189dzPz%2FPoE57yuO5rBF6hrKcPZumduD%2FceJAy5yqF%2Fn7OSkAe0rHSAuyf5Q3FDK8kRe6MP8lUNKgenjhZ31EUcWePuLKNIXzdRmB6dx89sCAywqv5REUuzPSjmljEsaAQfve5UDdu6c%2B0S5oUYF%2F0HLvvCUsNGlaFLzTeGOBChzxL3nJOYGPNtjSzw6Mp2sPsYC%2FBD69sOMq5QcH5imFFz6oTZi8Ce%2Fg7MMycsMsGOqUB%2FDDyAL9xZWZUV3B65b9ZpGx9PhwEG5x%2FBZWgXCANmEk2r8H9N3gPhMZKo75sWoys916fpFJypm3aejn0aajqQxxqflHMoVa9bAUbqL6JwfvaWx76uKXORb7FHKiFrP0TxyrlAzuVoQ4SVlBis10Om4FPljXtgFQJ0RMV2yHQbxV%2FiWRqaPLd0Ep24FccdkwWBDwSkW3zHUTGWkyr1tPaeASiOPSd&X-Amz-Signature=3c38aaf761c7c8f0b240f0b1632c91d1a9813525af27f0ef4d97ac10e16dc533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKKPIJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXavf4rM1MyCc%2FVwbeUO3i6dyXIQjS1PcuU0PjzBPZsAiEArIw7HDEAS%2BuTv3aBRhVihjivsSJLImksEFPEG6XVqjsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPDKuTwfoV2SEn%2BDDSrcA%2BH7SZbq3%2F8G%2BI8G0cAkYvNNy1A7MUgVSXAzQSdRDOu4cFFLEh6qcwbxid8cI%2BxFjmvlB9qQGIxPwS7Pp6c3D%2F0l5DVw8UDMlKxu1ZpZQzzaI8ROnWpo2JMfsY%2BFiJ43FTwdlRaraVhupihpiGDV4lQQYhY2ec%2Fjh2PIM7HefftO9BgOS58fsMdACkmKI1cAYPBAxTOhKGQfVjFdugWwRS8wRoVOtq6wSJTgiNKZvd3fBNZj1qwy51oOQT0fwbcLNncbjWybOjqROk6LY%2BXmQ3lA09fZVY1yvPzXxzFT6kwJ1zxecB3gW3yqZlYHRisRz49g8VtYJUJ2ej%2FwzIsc3krzpYG4qvrnPEdpOQ0ic1JP2GfDWjblq2rR6P9%2B%2BXp2WJW08dFjPFau7GDfXWZV9tsQ3e189dzPz%2FPoE57yuO5rBF6hrKcPZumduD%2FceJAy5yqF%2Fn7OSkAe0rHSAuyf5Q3FDK8kRe6MP8lUNKgenjhZ31EUcWePuLKNIXzdRmB6dx89sCAywqv5REUuzPSjmljEsaAQfve5UDdu6c%2B0S5oUYF%2F0HLvvCUsNGlaFLzTeGOBChzxL3nJOYGPNtjSzw6Mp2sPsYC%2FBD69sOMq5QcH5imFFz6oTZi8Ce%2Fg7MMycsMsGOqUB%2FDDyAL9xZWZUV3B65b9ZpGx9PhwEG5x%2FBZWgXCANmEk2r8H9N3gPhMZKo75sWoys916fpFJypm3aejn0aajqQxxqflHMoVa9bAUbqL6JwfvaWx76uKXORb7FHKiFrP0TxyrlAzuVoQ4SVlBis10Om4FPljXtgFQJ0RMV2yHQbxV%2FiWRqaPLd0Ep24FccdkwWBDwSkW3zHUTGWkyr1tPaeASiOPSd&X-Amz-Signature=34bc6566289f85886e57f824fb72284c9c830f94b8dd7c044db5a691e59412ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKKPIJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXavf4rM1MyCc%2FVwbeUO3i6dyXIQjS1PcuU0PjzBPZsAiEArIw7HDEAS%2BuTv3aBRhVihjivsSJLImksEFPEG6XVqjsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPDKuTwfoV2SEn%2BDDSrcA%2BH7SZbq3%2F8G%2BI8G0cAkYvNNy1A7MUgVSXAzQSdRDOu4cFFLEh6qcwbxid8cI%2BxFjmvlB9qQGIxPwS7Pp6c3D%2F0l5DVw8UDMlKxu1ZpZQzzaI8ROnWpo2JMfsY%2BFiJ43FTwdlRaraVhupihpiGDV4lQQYhY2ec%2Fjh2PIM7HefftO9BgOS58fsMdACkmKI1cAYPBAxTOhKGQfVjFdugWwRS8wRoVOtq6wSJTgiNKZvd3fBNZj1qwy51oOQT0fwbcLNncbjWybOjqROk6LY%2BXmQ3lA09fZVY1yvPzXxzFT6kwJ1zxecB3gW3yqZlYHRisRz49g8VtYJUJ2ej%2FwzIsc3krzpYG4qvrnPEdpOQ0ic1JP2GfDWjblq2rR6P9%2B%2BXp2WJW08dFjPFau7GDfXWZV9tsQ3e189dzPz%2FPoE57yuO5rBF6hrKcPZumduD%2FceJAy5yqF%2Fn7OSkAe0rHSAuyf5Q3FDK8kRe6MP8lUNKgenjhZ31EUcWePuLKNIXzdRmB6dx89sCAywqv5REUuzPSjmljEsaAQfve5UDdu6c%2B0S5oUYF%2F0HLvvCUsNGlaFLzTeGOBChzxL3nJOYGPNtjSzw6Mp2sPsYC%2FBD69sOMq5QcH5imFFz6oTZi8Ce%2Fg7MMycsMsGOqUB%2FDDyAL9xZWZUV3B65b9ZpGx9PhwEG5x%2FBZWgXCANmEk2r8H9N3gPhMZKo75sWoys916fpFJypm3aejn0aajqQxxqflHMoVa9bAUbqL6JwfvaWx76uKXORb7FHKiFrP0TxyrlAzuVoQ4SVlBis10Om4FPljXtgFQJ0RMV2yHQbxV%2FiWRqaPLd0Ep24FccdkwWBDwSkW3zHUTGWkyr1tPaeASiOPSd&X-Amz-Signature=448bc0d7ea886cc67b2f51e0cbbe1156b5c2ae8b534944e61078e792e6309218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKKPIJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXavf4rM1MyCc%2FVwbeUO3i6dyXIQjS1PcuU0PjzBPZsAiEArIw7HDEAS%2BuTv3aBRhVihjivsSJLImksEFPEG6XVqjsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPDKuTwfoV2SEn%2BDDSrcA%2BH7SZbq3%2F8G%2BI8G0cAkYvNNy1A7MUgVSXAzQSdRDOu4cFFLEh6qcwbxid8cI%2BxFjmvlB9qQGIxPwS7Pp6c3D%2F0l5DVw8UDMlKxu1ZpZQzzaI8ROnWpo2JMfsY%2BFiJ43FTwdlRaraVhupihpiGDV4lQQYhY2ec%2Fjh2PIM7HefftO9BgOS58fsMdACkmKI1cAYPBAxTOhKGQfVjFdugWwRS8wRoVOtq6wSJTgiNKZvd3fBNZj1qwy51oOQT0fwbcLNncbjWybOjqROk6LY%2BXmQ3lA09fZVY1yvPzXxzFT6kwJ1zxecB3gW3yqZlYHRisRz49g8VtYJUJ2ej%2FwzIsc3krzpYG4qvrnPEdpOQ0ic1JP2GfDWjblq2rR6P9%2B%2BXp2WJW08dFjPFau7GDfXWZV9tsQ3e189dzPz%2FPoE57yuO5rBF6hrKcPZumduD%2FceJAy5yqF%2Fn7OSkAe0rHSAuyf5Q3FDK8kRe6MP8lUNKgenjhZ31EUcWePuLKNIXzdRmB6dx89sCAywqv5REUuzPSjmljEsaAQfve5UDdu6c%2B0S5oUYF%2F0HLvvCUsNGlaFLzTeGOBChzxL3nJOYGPNtjSzw6Mp2sPsYC%2FBD69sOMq5QcH5imFFz6oTZi8Ce%2Fg7MMycsMsGOqUB%2FDDyAL9xZWZUV3B65b9ZpGx9PhwEG5x%2FBZWgXCANmEk2r8H9N3gPhMZKo75sWoys916fpFJypm3aejn0aajqQxxqflHMoVa9bAUbqL6JwfvaWx76uKXORb7FHKiFrP0TxyrlAzuVoQ4SVlBis10Om4FPljXtgFQJ0RMV2yHQbxV%2FiWRqaPLd0Ep24FccdkwWBDwSkW3zHUTGWkyr1tPaeASiOPSd&X-Amz-Signature=c2085168be268d46b8e950915cd07fd755a02e8617643b75dd49e94daa7379b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKKPIJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXavf4rM1MyCc%2FVwbeUO3i6dyXIQjS1PcuU0PjzBPZsAiEArIw7HDEAS%2BuTv3aBRhVihjivsSJLImksEFPEG6XVqjsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPDKuTwfoV2SEn%2BDDSrcA%2BH7SZbq3%2F8G%2BI8G0cAkYvNNy1A7MUgVSXAzQSdRDOu4cFFLEh6qcwbxid8cI%2BxFjmvlB9qQGIxPwS7Pp6c3D%2F0l5DVw8UDMlKxu1ZpZQzzaI8ROnWpo2JMfsY%2BFiJ43FTwdlRaraVhupihpiGDV4lQQYhY2ec%2Fjh2PIM7HefftO9BgOS58fsMdACkmKI1cAYPBAxTOhKGQfVjFdugWwRS8wRoVOtq6wSJTgiNKZvd3fBNZj1qwy51oOQT0fwbcLNncbjWybOjqROk6LY%2BXmQ3lA09fZVY1yvPzXxzFT6kwJ1zxecB3gW3yqZlYHRisRz49g8VtYJUJ2ej%2FwzIsc3krzpYG4qvrnPEdpOQ0ic1JP2GfDWjblq2rR6P9%2B%2BXp2WJW08dFjPFau7GDfXWZV9tsQ3e189dzPz%2FPoE57yuO5rBF6hrKcPZumduD%2FceJAy5yqF%2Fn7OSkAe0rHSAuyf5Q3FDK8kRe6MP8lUNKgenjhZ31EUcWePuLKNIXzdRmB6dx89sCAywqv5REUuzPSjmljEsaAQfve5UDdu6c%2B0S5oUYF%2F0HLvvCUsNGlaFLzTeGOBChzxL3nJOYGPNtjSzw6Mp2sPsYC%2FBD69sOMq5QcH5imFFz6oTZi8Ce%2Fg7MMycsMsGOqUB%2FDDyAL9xZWZUV3B65b9ZpGx9PhwEG5x%2FBZWgXCANmEk2r8H9N3gPhMZKo75sWoys916fpFJypm3aejn0aajqQxxqflHMoVa9bAUbqL6JwfvaWx76uKXORb7FHKiFrP0TxyrlAzuVoQ4SVlBis10Om4FPljXtgFQJ0RMV2yHQbxV%2FiWRqaPLd0Ep24FccdkwWBDwSkW3zHUTGWkyr1tPaeASiOPSd&X-Amz-Signature=c32f075ef15253995fc3e794ebb6ec3c6f3f9badd21a681b523f90076c95ce85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKKPIJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXavf4rM1MyCc%2FVwbeUO3i6dyXIQjS1PcuU0PjzBPZsAiEArIw7HDEAS%2BuTv3aBRhVihjivsSJLImksEFPEG6XVqjsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPDKuTwfoV2SEn%2BDDSrcA%2BH7SZbq3%2F8G%2BI8G0cAkYvNNy1A7MUgVSXAzQSdRDOu4cFFLEh6qcwbxid8cI%2BxFjmvlB9qQGIxPwS7Pp6c3D%2F0l5DVw8UDMlKxu1ZpZQzzaI8ROnWpo2JMfsY%2BFiJ43FTwdlRaraVhupihpiGDV4lQQYhY2ec%2Fjh2PIM7HefftO9BgOS58fsMdACkmKI1cAYPBAxTOhKGQfVjFdugWwRS8wRoVOtq6wSJTgiNKZvd3fBNZj1qwy51oOQT0fwbcLNncbjWybOjqROk6LY%2BXmQ3lA09fZVY1yvPzXxzFT6kwJ1zxecB3gW3yqZlYHRisRz49g8VtYJUJ2ej%2FwzIsc3krzpYG4qvrnPEdpOQ0ic1JP2GfDWjblq2rR6P9%2B%2BXp2WJW08dFjPFau7GDfXWZV9tsQ3e189dzPz%2FPoE57yuO5rBF6hrKcPZumduD%2FceJAy5yqF%2Fn7OSkAe0rHSAuyf5Q3FDK8kRe6MP8lUNKgenjhZ31EUcWePuLKNIXzdRmB6dx89sCAywqv5REUuzPSjmljEsaAQfve5UDdu6c%2B0S5oUYF%2F0HLvvCUsNGlaFLzTeGOBChzxL3nJOYGPNtjSzw6Mp2sPsYC%2FBD69sOMq5QcH5imFFz6oTZi8Ce%2Fg7MMycsMsGOqUB%2FDDyAL9xZWZUV3B65b9ZpGx9PhwEG5x%2FBZWgXCANmEk2r8H9N3gPhMZKo75sWoys916fpFJypm3aejn0aajqQxxqflHMoVa9bAUbqL6JwfvaWx76uKXORb7FHKiFrP0TxyrlAzuVoQ4SVlBis10Om4FPljXtgFQJ0RMV2yHQbxV%2FiWRqaPLd0Ep24FccdkwWBDwSkW3zHUTGWkyr1tPaeASiOPSd&X-Amz-Signature=0c403d16470ec4d86d3d18449cc55623b7755e772eda799ef0618c2ea2f8aded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKKPIJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXavf4rM1MyCc%2FVwbeUO3i6dyXIQjS1PcuU0PjzBPZsAiEArIw7HDEAS%2BuTv3aBRhVihjivsSJLImksEFPEG6XVqjsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPDKuTwfoV2SEn%2BDDSrcA%2BH7SZbq3%2F8G%2BI8G0cAkYvNNy1A7MUgVSXAzQSdRDOu4cFFLEh6qcwbxid8cI%2BxFjmvlB9qQGIxPwS7Pp6c3D%2F0l5DVw8UDMlKxu1ZpZQzzaI8ROnWpo2JMfsY%2BFiJ43FTwdlRaraVhupihpiGDV4lQQYhY2ec%2Fjh2PIM7HefftO9BgOS58fsMdACkmKI1cAYPBAxTOhKGQfVjFdugWwRS8wRoVOtq6wSJTgiNKZvd3fBNZj1qwy51oOQT0fwbcLNncbjWybOjqROk6LY%2BXmQ3lA09fZVY1yvPzXxzFT6kwJ1zxecB3gW3yqZlYHRisRz49g8VtYJUJ2ej%2FwzIsc3krzpYG4qvrnPEdpOQ0ic1JP2GfDWjblq2rR6P9%2B%2BXp2WJW08dFjPFau7GDfXWZV9tsQ3e189dzPz%2FPoE57yuO5rBF6hrKcPZumduD%2FceJAy5yqF%2Fn7OSkAe0rHSAuyf5Q3FDK8kRe6MP8lUNKgenjhZ31EUcWePuLKNIXzdRmB6dx89sCAywqv5REUuzPSjmljEsaAQfve5UDdu6c%2B0S5oUYF%2F0HLvvCUsNGlaFLzTeGOBChzxL3nJOYGPNtjSzw6Mp2sPsYC%2FBD69sOMq5QcH5imFFz6oTZi8Ce%2Fg7MMycsMsGOqUB%2FDDyAL9xZWZUV3B65b9ZpGx9PhwEG5x%2FBZWgXCANmEk2r8H9N3gPhMZKo75sWoys916fpFJypm3aejn0aajqQxxqflHMoVa9bAUbqL6JwfvaWx76uKXORb7FHKiFrP0TxyrlAzuVoQ4SVlBis10Om4FPljXtgFQJ0RMV2yHQbxV%2FiWRqaPLd0Ep24FccdkwWBDwSkW3zHUTGWkyr1tPaeASiOPSd&X-Amz-Signature=db524eaf20898f20fd6df9b8e87069c6e7876d4346b3d79deca1db180f3f8276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKKPIJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXavf4rM1MyCc%2FVwbeUO3i6dyXIQjS1PcuU0PjzBPZsAiEArIw7HDEAS%2BuTv3aBRhVihjivsSJLImksEFPEG6XVqjsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPDKuTwfoV2SEn%2BDDSrcA%2BH7SZbq3%2F8G%2BI8G0cAkYvNNy1A7MUgVSXAzQSdRDOu4cFFLEh6qcwbxid8cI%2BxFjmvlB9qQGIxPwS7Pp6c3D%2F0l5DVw8UDMlKxu1ZpZQzzaI8ROnWpo2JMfsY%2BFiJ43FTwdlRaraVhupihpiGDV4lQQYhY2ec%2Fjh2PIM7HefftO9BgOS58fsMdACkmKI1cAYPBAxTOhKGQfVjFdugWwRS8wRoVOtq6wSJTgiNKZvd3fBNZj1qwy51oOQT0fwbcLNncbjWybOjqROk6LY%2BXmQ3lA09fZVY1yvPzXxzFT6kwJ1zxecB3gW3yqZlYHRisRz49g8VtYJUJ2ej%2FwzIsc3krzpYG4qvrnPEdpOQ0ic1JP2GfDWjblq2rR6P9%2B%2BXp2WJW08dFjPFau7GDfXWZV9tsQ3e189dzPz%2FPoE57yuO5rBF6hrKcPZumduD%2FceJAy5yqF%2Fn7OSkAe0rHSAuyf5Q3FDK8kRe6MP8lUNKgenjhZ31EUcWePuLKNIXzdRmB6dx89sCAywqv5REUuzPSjmljEsaAQfve5UDdu6c%2B0S5oUYF%2F0HLvvCUsNGlaFLzTeGOBChzxL3nJOYGPNtjSzw6Mp2sPsYC%2FBD69sOMq5QcH5imFFz6oTZi8Ce%2Fg7MMycsMsGOqUB%2FDDyAL9xZWZUV3B65b9ZpGx9PhwEG5x%2FBZWgXCANmEk2r8H9N3gPhMZKo75sWoys916fpFJypm3aejn0aajqQxxqflHMoVa9bAUbqL6JwfvaWx76uKXORb7FHKiFrP0TxyrlAzuVoQ4SVlBis10Om4FPljXtgFQJ0RMV2yHQbxV%2FiWRqaPLd0Ep24FccdkwWBDwSkW3zHUTGWkyr1tPaeASiOPSd&X-Amz-Signature=f4e2ec92e8641b8cbaf22e880c88984c485a8268a1f788a8c9d97655593f74d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRKKPIJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXavf4rM1MyCc%2FVwbeUO3i6dyXIQjS1PcuU0PjzBPZsAiEArIw7HDEAS%2BuTv3aBRhVihjivsSJLImksEFPEG6XVqjsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPDKuTwfoV2SEn%2BDDSrcA%2BH7SZbq3%2F8G%2BI8G0cAkYvNNy1A7MUgVSXAzQSdRDOu4cFFLEh6qcwbxid8cI%2BxFjmvlB9qQGIxPwS7Pp6c3D%2F0l5DVw8UDMlKxu1ZpZQzzaI8ROnWpo2JMfsY%2BFiJ43FTwdlRaraVhupihpiGDV4lQQYhY2ec%2Fjh2PIM7HefftO9BgOS58fsMdACkmKI1cAYPBAxTOhKGQfVjFdugWwRS8wRoVOtq6wSJTgiNKZvd3fBNZj1qwy51oOQT0fwbcLNncbjWybOjqROk6LY%2BXmQ3lA09fZVY1yvPzXxzFT6kwJ1zxecB3gW3yqZlYHRisRz49g8VtYJUJ2ej%2FwzIsc3krzpYG4qvrnPEdpOQ0ic1JP2GfDWjblq2rR6P9%2B%2BXp2WJW08dFjPFau7GDfXWZV9tsQ3e189dzPz%2FPoE57yuO5rBF6hrKcPZumduD%2FceJAy5yqF%2Fn7OSkAe0rHSAuyf5Q3FDK8kRe6MP8lUNKgenjhZ31EUcWePuLKNIXzdRmB6dx89sCAywqv5REUuzPSjmljEsaAQfve5UDdu6c%2B0S5oUYF%2F0HLvvCUsNGlaFLzTeGOBChzxL3nJOYGPNtjSzw6Mp2sPsYC%2FBD69sOMq5QcH5imFFz6oTZi8Ce%2Fg7MMycsMsGOqUB%2FDDyAL9xZWZUV3B65b9ZpGx9PhwEG5x%2FBZWgXCANmEk2r8H9N3gPhMZKo75sWoys916fpFJypm3aejn0aajqQxxqflHMoVa9bAUbqL6JwfvaWx76uKXORb7FHKiFrP0TxyrlAzuVoQ4SVlBis10Om4FPljXtgFQJ0RMV2yHQbxV%2FiWRqaPLd0Ep24FccdkwWBDwSkW3zHUTGWkyr1tPaeASiOPSd&X-Amz-Signature=448bc0d7ea886cc67b2f51e0cbbe1156b5c2ae8b534944e61078e792e6309218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
