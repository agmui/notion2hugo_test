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
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJ6XT5O%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACfkeN5fqQQwrZLwbBZnh04wIK7ebJfeZwo80jFyb0sAiEAzqCnbJj%2FoxdSux8UDeJVX8Y9asY8RjbV361nfDaczA8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK3yt2eksQCioLTCfircAyZ8kkpFhHCcF8jWlHyWMXdaiSo96XhdOP592kJPD51N%2BzDXVTBTWS6wsioO98EdjKgs3eyBE9l3Dr3OqSGejiXXITnfaBhV3sf7mRQs4hSsHCOJV52z7w6jeyUUmSUGRdHVs3BCktgAUmE8DY4uztbosjZEpRLFbv1ogNAOB8rT9mzLTzwV4uZb2EhmHpiXyqWzkv%2BzblIm0f6lo5viq3cBUthnwERJBi%2B%2BqkUvbL0gHuvRA430ldOeoIS4C%2Bx1JGXW%2B8CrWraYHwXkmkBzq8LDurOlJugz8ZTPfuhS8GuA9R33A%2FkanKDCZFZ5BOOXdYuyc2rXV%2FhUNbrwmYhaIoVsqxcl4M8jGjYxX9aleb0bI0PTqdRtEgyBI91oagdMCKHZvOW%2FsD9vV0Qt%2BxWWMONe8wpt3iPNuoe%2Bd0h3h6aoEt1%2Ftey0AbGavsB0oUY0eRci2KWtkbMTL1FMxdSebcnaZW0eEsUVgbyV8MpipQIHXiK%2Bc63AwB1f6%2BBOkhmxRBzgF4Qdnpouhe90UJbG5%2BZUUKN4sXJkbtIi62VFCnLm3UmG30W6dKhFgRnaf4W4OI3Gt6UBe0vWScd0OyI3EWOMRNb0J1UYEIbJ3vz3r0zFwEr2Em5hVQ8fWbB6MM6YgsUGOqUBHgalfP%2FtNh6KcEGIH6JB1%2BFyNUtR5ZJCdSV4pXWv8LZlx%2FSURigr9R43t3IrMSDHepAk9ExQErPkXtZGxFm9Ka60mH3p4i%2BU52WU2N%2F7FJnrxNMTy3jX989UobeLSi8U4kFZ40L8c4vMqPbNYladaTHJL0W2LiSLArmVPMh30EYbAJRW1niZ3uzFKbUtUT5HDlpwQPXh%2FzZYnDW%2F8GZ5A5SyW2bx&X-Amz-Signature=f45fa02213ba3245d48bf44ecf99df1683c504d67f9874cff215daaaa23a8f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCIEM4V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAum2V05kc5rvO5wXl6PHvf9ULrRBj6qe3d6nyl3VYUMAiBkunm%2B40kuplKXja%2BzuqE6VgksGMh8LB0YfCz%2Fe89moSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeAMrtQDwNYpijBP3KtwDMGiiMZCvSS5S7rgW0tZns8hUGE%2Fct4%2FGO2ClqaJ84Q%2FA7r9yZL%2BEOc7N8XaTsHcbnF930q%2B56HleVRUMAceWkeRYg0ZYrNNrOqUzmcbajSXHqOygDOupkxkmBY6hdWxYBQs8fm0zpE4Sf7BOHXXyrFk7UFo9ogsTIa6KQ2F%2FZLWC8iw4kPyP8RI4k5emrPOXgdxIbzZ7y%2FwLJxdRHIKOLbpw7%2BfnX8i9dshrIebhSIyAUJ8ujZU%2FoTz6Q74KtlBd%2Bef6%2BrQ70Em3ovitYN2LLmVUHk47mn6VV%2BiNNYq%2BFhZJ1eSbqFTu6Ap%2F2nLGn%2Beik8T10BUrJ115P%2Bq9PUi0OgI%2FK1TkfBBqjzjxqoejMB5cvD3PMDdwZotFqRnW4%2FYMMn%2B%2FaFvY4HAHYSiH5L6DAsb12MEvxGfD6u9fs7s65mySJwkmbvDccEmtDL4PWEIsPU13oHFPh4Mly2UTg7wBX2YqgBBwYgpc%2Bl%2BEt9vCa8SFEq788czGG6OLBOxpduAUxoTtXYw1Kn5%2F9QJNfjtjGEq%2BShROOB6fvWbmNhgV3FKNu2KPJ9QjkFndt2xQrIdo3VNb4mLmWEr8SFdLEsSPVmMVftlIW%2B%2Bk6cDv2YMhan1cl%2FOERyDPzwDylUcw%2FJ2CxQY6pgEkzlT2XE9CKlOPCDyBr9D2DK1VxkQDFEQoshPsPg1a9%2FH7wAI73oSDVfLElYBFOa483XoZrg6Q575sUjsg1%2BqSWDFpdCwFlWNKzodSXGjeYA8pTy3K54%2FGjP0Ch4SWdwFTg%2FNxvf%2B9oS8On0VLusiJUe8jr4WxWgryZQMlXs6%2Fyan78kq7oUeeyx6KHW1bALCJdGtMvY12Y3cetQysURq%2FbdOb0vI%2B&X-Amz-Signature=d5d957de707796dcce611cf8a455f174b4001e364b48c14b428e396ce79bfaab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCIEM4V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAum2V05kc5rvO5wXl6PHvf9ULrRBj6qe3d6nyl3VYUMAiBkunm%2B40kuplKXja%2BzuqE6VgksGMh8LB0YfCz%2Fe89moSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeAMrtQDwNYpijBP3KtwDMGiiMZCvSS5S7rgW0tZns8hUGE%2Fct4%2FGO2ClqaJ84Q%2FA7r9yZL%2BEOc7N8XaTsHcbnF930q%2B56HleVRUMAceWkeRYg0ZYrNNrOqUzmcbajSXHqOygDOupkxkmBY6hdWxYBQs8fm0zpE4Sf7BOHXXyrFk7UFo9ogsTIa6KQ2F%2FZLWC8iw4kPyP8RI4k5emrPOXgdxIbzZ7y%2FwLJxdRHIKOLbpw7%2BfnX8i9dshrIebhSIyAUJ8ujZU%2FoTz6Q74KtlBd%2Bef6%2BrQ70Em3ovitYN2LLmVUHk47mn6VV%2BiNNYq%2BFhZJ1eSbqFTu6Ap%2F2nLGn%2Beik8T10BUrJ115P%2Bq9PUi0OgI%2FK1TkfBBqjzjxqoejMB5cvD3PMDdwZotFqRnW4%2FYMMn%2B%2FaFvY4HAHYSiH5L6DAsb12MEvxGfD6u9fs7s65mySJwkmbvDccEmtDL4PWEIsPU13oHFPh4Mly2UTg7wBX2YqgBBwYgpc%2Bl%2BEt9vCa8SFEq788czGG6OLBOxpduAUxoTtXYw1Kn5%2F9QJNfjtjGEq%2BShROOB6fvWbmNhgV3FKNu2KPJ9QjkFndt2xQrIdo3VNb4mLmWEr8SFdLEsSPVmMVftlIW%2B%2Bk6cDv2YMhan1cl%2FOERyDPzwDylUcw%2FJ2CxQY6pgEkzlT2XE9CKlOPCDyBr9D2DK1VxkQDFEQoshPsPg1a9%2FH7wAI73oSDVfLElYBFOa483XoZrg6Q575sUjsg1%2BqSWDFpdCwFlWNKzodSXGjeYA8pTy3K54%2FGjP0Ch4SWdwFTg%2FNxvf%2B9oS8On0VLusiJUe8jr4WxWgryZQMlXs6%2Fyan78kq7oUeeyx6KHW1bALCJdGtMvY12Y3cetQysURq%2FbdOb0vI%2B&X-Amz-Signature=68956f7d359ea31fb49ad5f890160d2af8fea56ea31097977aa8daf3bef1edc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCIEM4V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAum2V05kc5rvO5wXl6PHvf9ULrRBj6qe3d6nyl3VYUMAiBkunm%2B40kuplKXja%2BzuqE6VgksGMh8LB0YfCz%2Fe89moSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeAMrtQDwNYpijBP3KtwDMGiiMZCvSS5S7rgW0tZns8hUGE%2Fct4%2FGO2ClqaJ84Q%2FA7r9yZL%2BEOc7N8XaTsHcbnF930q%2B56HleVRUMAceWkeRYg0ZYrNNrOqUzmcbajSXHqOygDOupkxkmBY6hdWxYBQs8fm0zpE4Sf7BOHXXyrFk7UFo9ogsTIa6KQ2F%2FZLWC8iw4kPyP8RI4k5emrPOXgdxIbzZ7y%2FwLJxdRHIKOLbpw7%2BfnX8i9dshrIebhSIyAUJ8ujZU%2FoTz6Q74KtlBd%2Bef6%2BrQ70Em3ovitYN2LLmVUHk47mn6VV%2BiNNYq%2BFhZJ1eSbqFTu6Ap%2F2nLGn%2Beik8T10BUrJ115P%2Bq9PUi0OgI%2FK1TkfBBqjzjxqoejMB5cvD3PMDdwZotFqRnW4%2FYMMn%2B%2FaFvY4HAHYSiH5L6DAsb12MEvxGfD6u9fs7s65mySJwkmbvDccEmtDL4PWEIsPU13oHFPh4Mly2UTg7wBX2YqgBBwYgpc%2Bl%2BEt9vCa8SFEq788czGG6OLBOxpduAUxoTtXYw1Kn5%2F9QJNfjtjGEq%2BShROOB6fvWbmNhgV3FKNu2KPJ9QjkFndt2xQrIdo3VNb4mLmWEr8SFdLEsSPVmMVftlIW%2B%2Bk6cDv2YMhan1cl%2FOERyDPzwDylUcw%2FJ2CxQY6pgEkzlT2XE9CKlOPCDyBr9D2DK1VxkQDFEQoshPsPg1a9%2FH7wAI73oSDVfLElYBFOa483XoZrg6Q575sUjsg1%2BqSWDFpdCwFlWNKzodSXGjeYA8pTy3K54%2FGjP0Ch4SWdwFTg%2FNxvf%2B9oS8On0VLusiJUe8jr4WxWgryZQMlXs6%2Fyan78kq7oUeeyx6KHW1bALCJdGtMvY12Y3cetQysURq%2FbdOb0vI%2B&X-Amz-Signature=88e37812cf4b3775dcadf4f4bd09ac4176261601d5c0e18604ff6ef5985ddd4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCIEM4V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAum2V05kc5rvO5wXl6PHvf9ULrRBj6qe3d6nyl3VYUMAiBkunm%2B40kuplKXja%2BzuqE6VgksGMh8LB0YfCz%2Fe89moSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeAMrtQDwNYpijBP3KtwDMGiiMZCvSS5S7rgW0tZns8hUGE%2Fct4%2FGO2ClqaJ84Q%2FA7r9yZL%2BEOc7N8XaTsHcbnF930q%2B56HleVRUMAceWkeRYg0ZYrNNrOqUzmcbajSXHqOygDOupkxkmBY6hdWxYBQs8fm0zpE4Sf7BOHXXyrFk7UFo9ogsTIa6KQ2F%2FZLWC8iw4kPyP8RI4k5emrPOXgdxIbzZ7y%2FwLJxdRHIKOLbpw7%2BfnX8i9dshrIebhSIyAUJ8ujZU%2FoTz6Q74KtlBd%2Bef6%2BrQ70Em3ovitYN2LLmVUHk47mn6VV%2BiNNYq%2BFhZJ1eSbqFTu6Ap%2F2nLGn%2Beik8T10BUrJ115P%2Bq9PUi0OgI%2FK1TkfBBqjzjxqoejMB5cvD3PMDdwZotFqRnW4%2FYMMn%2B%2FaFvY4HAHYSiH5L6DAsb12MEvxGfD6u9fs7s65mySJwkmbvDccEmtDL4PWEIsPU13oHFPh4Mly2UTg7wBX2YqgBBwYgpc%2Bl%2BEt9vCa8SFEq788czGG6OLBOxpduAUxoTtXYw1Kn5%2F9QJNfjtjGEq%2BShROOB6fvWbmNhgV3FKNu2KPJ9QjkFndt2xQrIdo3VNb4mLmWEr8SFdLEsSPVmMVftlIW%2B%2Bk6cDv2YMhan1cl%2FOERyDPzwDylUcw%2FJ2CxQY6pgEkzlT2XE9CKlOPCDyBr9D2DK1VxkQDFEQoshPsPg1a9%2FH7wAI73oSDVfLElYBFOa483XoZrg6Q575sUjsg1%2BqSWDFpdCwFlWNKzodSXGjeYA8pTy3K54%2FGjP0Ch4SWdwFTg%2FNxvf%2B9oS8On0VLusiJUe8jr4WxWgryZQMlXs6%2Fyan78kq7oUeeyx6KHW1bALCJdGtMvY12Y3cetQysURq%2FbdOb0vI%2B&X-Amz-Signature=ef5a591ef08dcc57bd5515d88d393c73b572aaeb4a496946af961c29847cc63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCIEM4V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAum2V05kc5rvO5wXl6PHvf9ULrRBj6qe3d6nyl3VYUMAiBkunm%2B40kuplKXja%2BzuqE6VgksGMh8LB0YfCz%2Fe89moSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeAMrtQDwNYpijBP3KtwDMGiiMZCvSS5S7rgW0tZns8hUGE%2Fct4%2FGO2ClqaJ84Q%2FA7r9yZL%2BEOc7N8XaTsHcbnF930q%2B56HleVRUMAceWkeRYg0ZYrNNrOqUzmcbajSXHqOygDOupkxkmBY6hdWxYBQs8fm0zpE4Sf7BOHXXyrFk7UFo9ogsTIa6KQ2F%2FZLWC8iw4kPyP8RI4k5emrPOXgdxIbzZ7y%2FwLJxdRHIKOLbpw7%2BfnX8i9dshrIebhSIyAUJ8ujZU%2FoTz6Q74KtlBd%2Bef6%2BrQ70Em3ovitYN2LLmVUHk47mn6VV%2BiNNYq%2BFhZJ1eSbqFTu6Ap%2F2nLGn%2Beik8T10BUrJ115P%2Bq9PUi0OgI%2FK1TkfBBqjzjxqoejMB5cvD3PMDdwZotFqRnW4%2FYMMn%2B%2FaFvY4HAHYSiH5L6DAsb12MEvxGfD6u9fs7s65mySJwkmbvDccEmtDL4PWEIsPU13oHFPh4Mly2UTg7wBX2YqgBBwYgpc%2Bl%2BEt9vCa8SFEq788czGG6OLBOxpduAUxoTtXYw1Kn5%2F9QJNfjtjGEq%2BShROOB6fvWbmNhgV3FKNu2KPJ9QjkFndt2xQrIdo3VNb4mLmWEr8SFdLEsSPVmMVftlIW%2B%2Bk6cDv2YMhan1cl%2FOERyDPzwDylUcw%2FJ2CxQY6pgEkzlT2XE9CKlOPCDyBr9D2DK1VxkQDFEQoshPsPg1a9%2FH7wAI73oSDVfLElYBFOa483XoZrg6Q575sUjsg1%2BqSWDFpdCwFlWNKzodSXGjeYA8pTy3K54%2FGjP0Ch4SWdwFTg%2FNxvf%2B9oS8On0VLusiJUe8jr4WxWgryZQMlXs6%2Fyan78kq7oUeeyx6KHW1bALCJdGtMvY12Y3cetQysURq%2FbdOb0vI%2B&X-Amz-Signature=fe4d351774e8ebff556a91ea4af4dc72284741bf49c7bb21bd1e7506e5a9d98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCIEM4V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAum2V05kc5rvO5wXl6PHvf9ULrRBj6qe3d6nyl3VYUMAiBkunm%2B40kuplKXja%2BzuqE6VgksGMh8LB0YfCz%2Fe89moSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeAMrtQDwNYpijBP3KtwDMGiiMZCvSS5S7rgW0tZns8hUGE%2Fct4%2FGO2ClqaJ84Q%2FA7r9yZL%2BEOc7N8XaTsHcbnF930q%2B56HleVRUMAceWkeRYg0ZYrNNrOqUzmcbajSXHqOygDOupkxkmBY6hdWxYBQs8fm0zpE4Sf7BOHXXyrFk7UFo9ogsTIa6KQ2F%2FZLWC8iw4kPyP8RI4k5emrPOXgdxIbzZ7y%2FwLJxdRHIKOLbpw7%2BfnX8i9dshrIebhSIyAUJ8ujZU%2FoTz6Q74KtlBd%2Bef6%2BrQ70Em3ovitYN2LLmVUHk47mn6VV%2BiNNYq%2BFhZJ1eSbqFTu6Ap%2F2nLGn%2Beik8T10BUrJ115P%2Bq9PUi0OgI%2FK1TkfBBqjzjxqoejMB5cvD3PMDdwZotFqRnW4%2FYMMn%2B%2FaFvY4HAHYSiH5L6DAsb12MEvxGfD6u9fs7s65mySJwkmbvDccEmtDL4PWEIsPU13oHFPh4Mly2UTg7wBX2YqgBBwYgpc%2Bl%2BEt9vCa8SFEq788czGG6OLBOxpduAUxoTtXYw1Kn5%2F9QJNfjtjGEq%2BShROOB6fvWbmNhgV3FKNu2KPJ9QjkFndt2xQrIdo3VNb4mLmWEr8SFdLEsSPVmMVftlIW%2B%2Bk6cDv2YMhan1cl%2FOERyDPzwDylUcw%2FJ2CxQY6pgEkzlT2XE9CKlOPCDyBr9D2DK1VxkQDFEQoshPsPg1a9%2FH7wAI73oSDVfLElYBFOa483XoZrg6Q575sUjsg1%2BqSWDFpdCwFlWNKzodSXGjeYA8pTy3K54%2FGjP0Ch4SWdwFTg%2FNxvf%2B9oS8On0VLusiJUe8jr4WxWgryZQMlXs6%2Fyan78kq7oUeeyx6KHW1bALCJdGtMvY12Y3cetQysURq%2FbdOb0vI%2B&X-Amz-Signature=cba7973e98bcc9719aaa8d073aa3ba7b639c2a1b86691e73bdc19faefee6ae29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCIEM4V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAum2V05kc5rvO5wXl6PHvf9ULrRBj6qe3d6nyl3VYUMAiBkunm%2B40kuplKXja%2BzuqE6VgksGMh8LB0YfCz%2Fe89moSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeAMrtQDwNYpijBP3KtwDMGiiMZCvSS5S7rgW0tZns8hUGE%2Fct4%2FGO2ClqaJ84Q%2FA7r9yZL%2BEOc7N8XaTsHcbnF930q%2B56HleVRUMAceWkeRYg0ZYrNNrOqUzmcbajSXHqOygDOupkxkmBY6hdWxYBQs8fm0zpE4Sf7BOHXXyrFk7UFo9ogsTIa6KQ2F%2FZLWC8iw4kPyP8RI4k5emrPOXgdxIbzZ7y%2FwLJxdRHIKOLbpw7%2BfnX8i9dshrIebhSIyAUJ8ujZU%2FoTz6Q74KtlBd%2Bef6%2BrQ70Em3ovitYN2LLmVUHk47mn6VV%2BiNNYq%2BFhZJ1eSbqFTu6Ap%2F2nLGn%2Beik8T10BUrJ115P%2Bq9PUi0OgI%2FK1TkfBBqjzjxqoejMB5cvD3PMDdwZotFqRnW4%2FYMMn%2B%2FaFvY4HAHYSiH5L6DAsb12MEvxGfD6u9fs7s65mySJwkmbvDccEmtDL4PWEIsPU13oHFPh4Mly2UTg7wBX2YqgBBwYgpc%2Bl%2BEt9vCa8SFEq788czGG6OLBOxpduAUxoTtXYw1Kn5%2F9QJNfjtjGEq%2BShROOB6fvWbmNhgV3FKNu2KPJ9QjkFndt2xQrIdo3VNb4mLmWEr8SFdLEsSPVmMVftlIW%2B%2Bk6cDv2YMhan1cl%2FOERyDPzwDylUcw%2FJ2CxQY6pgEkzlT2XE9CKlOPCDyBr9D2DK1VxkQDFEQoshPsPg1a9%2FH7wAI73oSDVfLElYBFOa483XoZrg6Q575sUjsg1%2BqSWDFpdCwFlWNKzodSXGjeYA8pTy3K54%2FGjP0Ch4SWdwFTg%2FNxvf%2B9oS8On0VLusiJUe8jr4WxWgryZQMlXs6%2Fyan78kq7oUeeyx6KHW1bALCJdGtMvY12Y3cetQysURq%2FbdOb0vI%2B&X-Amz-Signature=f633c4956ee48aea2a1818b81e005b03b2edec5d3fbfdd65de0866c6512eabf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCIEM4V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAum2V05kc5rvO5wXl6PHvf9ULrRBj6qe3d6nyl3VYUMAiBkunm%2B40kuplKXja%2BzuqE6VgksGMh8LB0YfCz%2Fe89moSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeAMrtQDwNYpijBP3KtwDMGiiMZCvSS5S7rgW0tZns8hUGE%2Fct4%2FGO2ClqaJ84Q%2FA7r9yZL%2BEOc7N8XaTsHcbnF930q%2B56HleVRUMAceWkeRYg0ZYrNNrOqUzmcbajSXHqOygDOupkxkmBY6hdWxYBQs8fm0zpE4Sf7BOHXXyrFk7UFo9ogsTIa6KQ2F%2FZLWC8iw4kPyP8RI4k5emrPOXgdxIbzZ7y%2FwLJxdRHIKOLbpw7%2BfnX8i9dshrIebhSIyAUJ8ujZU%2FoTz6Q74KtlBd%2Bef6%2BrQ70Em3ovitYN2LLmVUHk47mn6VV%2BiNNYq%2BFhZJ1eSbqFTu6Ap%2F2nLGn%2Beik8T10BUrJ115P%2Bq9PUi0OgI%2FK1TkfBBqjzjxqoejMB5cvD3PMDdwZotFqRnW4%2FYMMn%2B%2FaFvY4HAHYSiH5L6DAsb12MEvxGfD6u9fs7s65mySJwkmbvDccEmtDL4PWEIsPU13oHFPh4Mly2UTg7wBX2YqgBBwYgpc%2Bl%2BEt9vCa8SFEq788czGG6OLBOxpduAUxoTtXYw1Kn5%2F9QJNfjtjGEq%2BShROOB6fvWbmNhgV3FKNu2KPJ9QjkFndt2xQrIdo3VNb4mLmWEr8SFdLEsSPVmMVftlIW%2B%2Bk6cDv2YMhan1cl%2FOERyDPzwDylUcw%2FJ2CxQY6pgEkzlT2XE9CKlOPCDyBr9D2DK1VxkQDFEQoshPsPg1a9%2FH7wAI73oSDVfLElYBFOa483XoZrg6Q575sUjsg1%2BqSWDFpdCwFlWNKzodSXGjeYA8pTy3K54%2FGjP0Ch4SWdwFTg%2FNxvf%2B9oS8On0VLusiJUe8jr4WxWgryZQMlXs6%2Fyan78kq7oUeeyx6KHW1bALCJdGtMvY12Y3cetQysURq%2FbdOb0vI%2B&X-Amz-Signature=06fbeec040f3364cc3b0481be9c5fbc224390c92fb199a79553eed6ff7da1a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

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
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCIEM4V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAum2V05kc5rvO5wXl6PHvf9ULrRBj6qe3d6nyl3VYUMAiBkunm%2B40kuplKXja%2BzuqE6VgksGMh8LB0YfCz%2Fe89moSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeAMrtQDwNYpijBP3KtwDMGiiMZCvSS5S7rgW0tZns8hUGE%2Fct4%2FGO2ClqaJ84Q%2FA7r9yZL%2BEOc7N8XaTsHcbnF930q%2B56HleVRUMAceWkeRYg0ZYrNNrOqUzmcbajSXHqOygDOupkxkmBY6hdWxYBQs8fm0zpE4Sf7BOHXXyrFk7UFo9ogsTIa6KQ2F%2FZLWC8iw4kPyP8RI4k5emrPOXgdxIbzZ7y%2FwLJxdRHIKOLbpw7%2BfnX8i9dshrIebhSIyAUJ8ujZU%2FoTz6Q74KtlBd%2Bef6%2BrQ70Em3ovitYN2LLmVUHk47mn6VV%2BiNNYq%2BFhZJ1eSbqFTu6Ap%2F2nLGn%2Beik8T10BUrJ115P%2Bq9PUi0OgI%2FK1TkfBBqjzjxqoejMB5cvD3PMDdwZotFqRnW4%2FYMMn%2B%2FaFvY4HAHYSiH5L6DAsb12MEvxGfD6u9fs7s65mySJwkmbvDccEmtDL4PWEIsPU13oHFPh4Mly2UTg7wBX2YqgBBwYgpc%2Bl%2BEt9vCa8SFEq788czGG6OLBOxpduAUxoTtXYw1Kn5%2F9QJNfjtjGEq%2BShROOB6fvWbmNhgV3FKNu2KPJ9QjkFndt2xQrIdo3VNb4mLmWEr8SFdLEsSPVmMVftlIW%2B%2Bk6cDv2YMhan1cl%2FOERyDPzwDylUcw%2FJ2CxQY6pgEkzlT2XE9CKlOPCDyBr9D2DK1VxkQDFEQoshPsPg1a9%2FH7wAI73oSDVfLElYBFOa483XoZrg6Q575sUjsg1%2BqSWDFpdCwFlWNKzodSXGjeYA8pTy3K54%2FGjP0Ch4SWdwFTg%2FNxvf%2B9oS8On0VLusiJUe8jr4WxWgryZQMlXs6%2Fyan78kq7oUeeyx6KHW1bALCJdGtMvY12Y3cetQysURq%2FbdOb0vI%2B&X-Amz-Signature=640ea507546e069da98c7fc143968840a9e196d5745b411a9470c8e35a5231df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCIEM4V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAum2V05kc5rvO5wXl6PHvf9ULrRBj6qe3d6nyl3VYUMAiBkunm%2B40kuplKXja%2BzuqE6VgksGMh8LB0YfCz%2Fe89moSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMeAMrtQDwNYpijBP3KtwDMGiiMZCvSS5S7rgW0tZns8hUGE%2Fct4%2FGO2ClqaJ84Q%2FA7r9yZL%2BEOc7N8XaTsHcbnF930q%2B56HleVRUMAceWkeRYg0ZYrNNrOqUzmcbajSXHqOygDOupkxkmBY6hdWxYBQs8fm0zpE4Sf7BOHXXyrFk7UFo9ogsTIa6KQ2F%2FZLWC8iw4kPyP8RI4k5emrPOXgdxIbzZ7y%2FwLJxdRHIKOLbpw7%2BfnX8i9dshrIebhSIyAUJ8ujZU%2FoTz6Q74KtlBd%2Bef6%2BrQ70Em3ovitYN2LLmVUHk47mn6VV%2BiNNYq%2BFhZJ1eSbqFTu6Ap%2F2nLGn%2Beik8T10BUrJ115P%2Bq9PUi0OgI%2FK1TkfBBqjzjxqoejMB5cvD3PMDdwZotFqRnW4%2FYMMn%2B%2FaFvY4HAHYSiH5L6DAsb12MEvxGfD6u9fs7s65mySJwkmbvDccEmtDL4PWEIsPU13oHFPh4Mly2UTg7wBX2YqgBBwYgpc%2Bl%2BEt9vCa8SFEq788czGG6OLBOxpduAUxoTtXYw1Kn5%2F9QJNfjtjGEq%2BShROOB6fvWbmNhgV3FKNu2KPJ9QjkFndt2xQrIdo3VNb4mLmWEr8SFdLEsSPVmMVftlIW%2B%2Bk6cDv2YMhan1cl%2FOERyDPzwDylUcw%2FJ2CxQY6pgEkzlT2XE9CKlOPCDyBr9D2DK1VxkQDFEQoshPsPg1a9%2FH7wAI73oSDVfLElYBFOa483XoZrg6Q575sUjsg1%2BqSWDFpdCwFlWNKzodSXGjeYA8pTy3K54%2FGjP0Ch4SWdwFTg%2FNxvf%2B9oS8On0VLusiJUe8jr4WxWgryZQMlXs6%2Fyan78kq7oUeeyx6KHW1bALCJdGtMvY12Y3cetQysURq%2FbdOb0vI%2B&X-Amz-Signature=ef5a591ef08dcc57bd5515d88d393c73b572aaeb4a496946af961c29847cc63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

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
