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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJL4Y35%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEeblrjiBJNf%2BNRyAMSMs2mZezDMHdcyh6jzRXHgaYFgAiAwYwNFD4A1YAGFvJcU3e32LGhKwNDQFCu4I5OP3iOoPyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMz9b3yOidwqKw0RwVKtwDpcoBiUdfQr3%2B2oa4AWU7VXRquZso%2BILCaYG7MibSwpkFl9EK%2BvF6YdrovRA4sXiB%2BDEf9ea4paCLwkgWBfdCegVhyfkYKn4%2F%2FJZZcs66POYRDAFNieiV9rWwQwrOgIhm0mziTKR4Tvmk5JSnVAcpoLWO2Dmf%2FpXorgugdjTxwqVB48e0n67811ORXFLQWo3H501gue8p8XuZPu%2B8%2FxchppGlL4UgQVe8YwVv%2BX1qPeW2dl8HPfwfKstQZMIB3Lnz4LPvoO1SaQmNt3%2FpeYgRGtZtydTzS4vQgISO4Vn4UcHrNP%2FlTX1b%2FbNtn4yqVyKKBlytHaTz7zIATEfVm7XbzjKeSXBVKVp6Sz2LWRQoKBj4h0QbxYv4tHp0asDIRQV0nQzI8%2FNs9MLrkBA9A6DaVB%2BK3UWriO6x1DP8a6kH6nppZQtUNMqohb86oXQf87WW8oTBvyZccvLQOidBEdWMdargg%2Fi9jRZTRP60ogkgwMkJFZiKISi%2FNu3RznuiR7CJbC5f%2FtehT2zipUsGo8QPbI8xutN29ihpCploBqNQFKOyBZHJdjFeLW1mlqDCTV5%2FUo1Xis06%2Fenc4tOKYw2xrGbMaE2zOcvcZuBn5t56%2FOAnR882k3NNGy2Ijacw1u7VywY6pgFb5Qwkr%2Bdn4%2FISqTZ%2BkI2hdYXF6%2FW4AsSAPYM9ukuQlmBXwsyKFsJLSDQq2PVBD2Lwc0iu2%2BLyB1%2FFSI7pNZP1UMT0VhDz4t%2Fww73C7itJqtv0jd%2BUjiEY5s%2F0%2FPfhSDB0hhpG6BnhEukSGKCC5qC6FuddfncmIzdaN5EGWe%2B97a5NeFepOB13vk1tunp63rG3D0YptH6MhAG0w%2FBFOEDUyflqtbJH&X-Amz-Signature=e7b93e39a1da688649cc042ac82796fba90e4c8f642e49dd7441887f343b8a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI466GVK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGqnTU%2FcESr%2BW8Ft7oeauUsCjwW9Y8OgbGu5ZNbyiMDdAiEAv70GNiGBzwC9Sc%2BnFzboPAM92qGAwf8izyaoe0zuPRoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOnmMSGytPloHf%2FMuircA5KTX4z5SPTOsmj6KxwGhqmEyTXbuA3eamADtUR3JBjXzi%2Bvf%2Fcq%2Fb9yvy4gp4%2F0h6KFDSISLmiVzlxG%2BVgSoRsGxsvxwCLpwM%2Bi%2Flxr4IsGgppVwtRhDW4wfscayQn3Lb4UGvkNcKA15fBdEg27VkWXzjJuaH8cGeu79PTLzK7V3yG0rEdeofJynVJRbj0IXW1QYxkrmEKsD9S22qzzY%2F%2FemnKcTPcpwdxfkOTS%2FhjiEzBQ2s3zzRk1m217d0bib%2B87S9wOdEF%2FgkGwnWia%2FfSNxh14H7SHTEX9LHo%2FpdNGbEd3r%2Bko%2BhRAOz1XQlUF7rsjd5%2FUqKG54kbq6Da2YyJZoT8Y5XRkH6BJfFysFUyo5kV%2FHunAOy3Q%2B%2FoqHqSxCxNDpVlzAhYAL6xpp6LMyJ0bJud9MLzTkhd5ag8ZaG3gpciR5qGciEQEXuFwRi0F8jO1M0CgYt%2B9og6SdEAZ4Va9NN00HNELEr2IrnK%2BzuybpQCAXBs%2F9S0JQLpxkCqqa3CGt0iTtLTFqqpI7KhpA45PgbzfwXMOPjvnAw69w4VQYGDvfS%2FO3jXXNZTVUun8xLboIQvMk1GimS7Mts7%2BtBFonS60P5jbYltB2E1p56DYtENEDJNhHB2n8aulMIDv1csGOqUBmkbLZS2hfxN9MVdinBikaefWLgcInqwWNMdw%2FduY5u70lj%2FiSnDDji0BiqBOyRGIByFy%2BECDQQX5VHIdyZhqgzPhww1ngKEkD79M8f5t2a50SWUJFi%2BLaE52IYvfv80FUzVm%2FSnSVKMLlc9Rviui55kxJB2CW%2FdBkJ0fhpXaUEjiut2M58zamQH4fS8dJnS6JLaeSuIsqqn%2BV4DTNVIdjJy%2FGvrg&X-Amz-Signature=fb6fe7d2ea3a6e2d8b62433179bd07acea6a4092c11c36eb4db8d60e60d571db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI466GVK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGqnTU%2FcESr%2BW8Ft7oeauUsCjwW9Y8OgbGu5ZNbyiMDdAiEAv70GNiGBzwC9Sc%2BnFzboPAM92qGAwf8izyaoe0zuPRoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOnmMSGytPloHf%2FMuircA5KTX4z5SPTOsmj6KxwGhqmEyTXbuA3eamADtUR3JBjXzi%2Bvf%2Fcq%2Fb9yvy4gp4%2F0h6KFDSISLmiVzlxG%2BVgSoRsGxsvxwCLpwM%2Bi%2Flxr4IsGgppVwtRhDW4wfscayQn3Lb4UGvkNcKA15fBdEg27VkWXzjJuaH8cGeu79PTLzK7V3yG0rEdeofJynVJRbj0IXW1QYxkrmEKsD9S22qzzY%2F%2FemnKcTPcpwdxfkOTS%2FhjiEzBQ2s3zzRk1m217d0bib%2B87S9wOdEF%2FgkGwnWia%2FfSNxh14H7SHTEX9LHo%2FpdNGbEd3r%2Bko%2BhRAOz1XQlUF7rsjd5%2FUqKG54kbq6Da2YyJZoT8Y5XRkH6BJfFysFUyo5kV%2FHunAOy3Q%2B%2FoqHqSxCxNDpVlzAhYAL6xpp6LMyJ0bJud9MLzTkhd5ag8ZaG3gpciR5qGciEQEXuFwRi0F8jO1M0CgYt%2B9og6SdEAZ4Va9NN00HNELEr2IrnK%2BzuybpQCAXBs%2F9S0JQLpxkCqqa3CGt0iTtLTFqqpI7KhpA45PgbzfwXMOPjvnAw69w4VQYGDvfS%2FO3jXXNZTVUun8xLboIQvMk1GimS7Mts7%2BtBFonS60P5jbYltB2E1p56DYtENEDJNhHB2n8aulMIDv1csGOqUBmkbLZS2hfxN9MVdinBikaefWLgcInqwWNMdw%2FduY5u70lj%2FiSnDDji0BiqBOyRGIByFy%2BECDQQX5VHIdyZhqgzPhww1ngKEkD79M8f5t2a50SWUJFi%2BLaE52IYvfv80FUzVm%2FSnSVKMLlc9Rviui55kxJB2CW%2FdBkJ0fhpXaUEjiut2M58zamQH4fS8dJnS6JLaeSuIsqqn%2BV4DTNVIdjJy%2FGvrg&X-Amz-Signature=0221451a624d63c62e108a76f8d2d4a0773c3e57c5bbe02e10bac7642e9e1c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI466GVK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGqnTU%2FcESr%2BW8Ft7oeauUsCjwW9Y8OgbGu5ZNbyiMDdAiEAv70GNiGBzwC9Sc%2BnFzboPAM92qGAwf8izyaoe0zuPRoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOnmMSGytPloHf%2FMuircA5KTX4z5SPTOsmj6KxwGhqmEyTXbuA3eamADtUR3JBjXzi%2Bvf%2Fcq%2Fb9yvy4gp4%2F0h6KFDSISLmiVzlxG%2BVgSoRsGxsvxwCLpwM%2Bi%2Flxr4IsGgppVwtRhDW4wfscayQn3Lb4UGvkNcKA15fBdEg27VkWXzjJuaH8cGeu79PTLzK7V3yG0rEdeofJynVJRbj0IXW1QYxkrmEKsD9S22qzzY%2F%2FemnKcTPcpwdxfkOTS%2FhjiEzBQ2s3zzRk1m217d0bib%2B87S9wOdEF%2FgkGwnWia%2FfSNxh14H7SHTEX9LHo%2FpdNGbEd3r%2Bko%2BhRAOz1XQlUF7rsjd5%2FUqKG54kbq6Da2YyJZoT8Y5XRkH6BJfFysFUyo5kV%2FHunAOy3Q%2B%2FoqHqSxCxNDpVlzAhYAL6xpp6LMyJ0bJud9MLzTkhd5ag8ZaG3gpciR5qGciEQEXuFwRi0F8jO1M0CgYt%2B9og6SdEAZ4Va9NN00HNELEr2IrnK%2BzuybpQCAXBs%2F9S0JQLpxkCqqa3CGt0iTtLTFqqpI7KhpA45PgbzfwXMOPjvnAw69w4VQYGDvfS%2FO3jXXNZTVUun8xLboIQvMk1GimS7Mts7%2BtBFonS60P5jbYltB2E1p56DYtENEDJNhHB2n8aulMIDv1csGOqUBmkbLZS2hfxN9MVdinBikaefWLgcInqwWNMdw%2FduY5u70lj%2FiSnDDji0BiqBOyRGIByFy%2BECDQQX5VHIdyZhqgzPhww1ngKEkD79M8f5t2a50SWUJFi%2BLaE52IYvfv80FUzVm%2FSnSVKMLlc9Rviui55kxJB2CW%2FdBkJ0fhpXaUEjiut2M58zamQH4fS8dJnS6JLaeSuIsqqn%2BV4DTNVIdjJy%2FGvrg&X-Amz-Signature=e460fa3be2ebb7faebf72b7834729c946329218b04860bcd540e9d45b1d6f511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI466GVK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGqnTU%2FcESr%2BW8Ft7oeauUsCjwW9Y8OgbGu5ZNbyiMDdAiEAv70GNiGBzwC9Sc%2BnFzboPAM92qGAwf8izyaoe0zuPRoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOnmMSGytPloHf%2FMuircA5KTX4z5SPTOsmj6KxwGhqmEyTXbuA3eamADtUR3JBjXzi%2Bvf%2Fcq%2Fb9yvy4gp4%2F0h6KFDSISLmiVzlxG%2BVgSoRsGxsvxwCLpwM%2Bi%2Flxr4IsGgppVwtRhDW4wfscayQn3Lb4UGvkNcKA15fBdEg27VkWXzjJuaH8cGeu79PTLzK7V3yG0rEdeofJynVJRbj0IXW1QYxkrmEKsD9S22qzzY%2F%2FemnKcTPcpwdxfkOTS%2FhjiEzBQ2s3zzRk1m217d0bib%2B87S9wOdEF%2FgkGwnWia%2FfSNxh14H7SHTEX9LHo%2FpdNGbEd3r%2Bko%2BhRAOz1XQlUF7rsjd5%2FUqKG54kbq6Da2YyJZoT8Y5XRkH6BJfFysFUyo5kV%2FHunAOy3Q%2B%2FoqHqSxCxNDpVlzAhYAL6xpp6LMyJ0bJud9MLzTkhd5ag8ZaG3gpciR5qGciEQEXuFwRi0F8jO1M0CgYt%2B9og6SdEAZ4Va9NN00HNELEr2IrnK%2BzuybpQCAXBs%2F9S0JQLpxkCqqa3CGt0iTtLTFqqpI7KhpA45PgbzfwXMOPjvnAw69w4VQYGDvfS%2FO3jXXNZTVUun8xLboIQvMk1GimS7Mts7%2BtBFonS60P5jbYltB2E1p56DYtENEDJNhHB2n8aulMIDv1csGOqUBmkbLZS2hfxN9MVdinBikaefWLgcInqwWNMdw%2FduY5u70lj%2FiSnDDji0BiqBOyRGIByFy%2BECDQQX5VHIdyZhqgzPhww1ngKEkD79M8f5t2a50SWUJFi%2BLaE52IYvfv80FUzVm%2FSnSVKMLlc9Rviui55kxJB2CW%2FdBkJ0fhpXaUEjiut2M58zamQH4fS8dJnS6JLaeSuIsqqn%2BV4DTNVIdjJy%2FGvrg&X-Amz-Signature=5112442ca361ed83529621a9aa2e795b74cc6d9ae0ea11e857cd8f989cfd23a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI466GVK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGqnTU%2FcESr%2BW8Ft7oeauUsCjwW9Y8OgbGu5ZNbyiMDdAiEAv70GNiGBzwC9Sc%2BnFzboPAM92qGAwf8izyaoe0zuPRoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOnmMSGytPloHf%2FMuircA5KTX4z5SPTOsmj6KxwGhqmEyTXbuA3eamADtUR3JBjXzi%2Bvf%2Fcq%2Fb9yvy4gp4%2F0h6KFDSISLmiVzlxG%2BVgSoRsGxsvxwCLpwM%2Bi%2Flxr4IsGgppVwtRhDW4wfscayQn3Lb4UGvkNcKA15fBdEg27VkWXzjJuaH8cGeu79PTLzK7V3yG0rEdeofJynVJRbj0IXW1QYxkrmEKsD9S22qzzY%2F%2FemnKcTPcpwdxfkOTS%2FhjiEzBQ2s3zzRk1m217d0bib%2B87S9wOdEF%2FgkGwnWia%2FfSNxh14H7SHTEX9LHo%2FpdNGbEd3r%2Bko%2BhRAOz1XQlUF7rsjd5%2FUqKG54kbq6Da2YyJZoT8Y5XRkH6BJfFysFUyo5kV%2FHunAOy3Q%2B%2FoqHqSxCxNDpVlzAhYAL6xpp6LMyJ0bJud9MLzTkhd5ag8ZaG3gpciR5qGciEQEXuFwRi0F8jO1M0CgYt%2B9og6SdEAZ4Va9NN00HNELEr2IrnK%2BzuybpQCAXBs%2F9S0JQLpxkCqqa3CGt0iTtLTFqqpI7KhpA45PgbzfwXMOPjvnAw69w4VQYGDvfS%2FO3jXXNZTVUun8xLboIQvMk1GimS7Mts7%2BtBFonS60P5jbYltB2E1p56DYtENEDJNhHB2n8aulMIDv1csGOqUBmkbLZS2hfxN9MVdinBikaefWLgcInqwWNMdw%2FduY5u70lj%2FiSnDDji0BiqBOyRGIByFy%2BECDQQX5VHIdyZhqgzPhww1ngKEkD79M8f5t2a50SWUJFi%2BLaE52IYvfv80FUzVm%2FSnSVKMLlc9Rviui55kxJB2CW%2FdBkJ0fhpXaUEjiut2M58zamQH4fS8dJnS6JLaeSuIsqqn%2BV4DTNVIdjJy%2FGvrg&X-Amz-Signature=4930351ab4e93f74ea68bbcb0cc030ca8faeaa38d7d10e05b9270dcb0e3bbca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI466GVK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGqnTU%2FcESr%2BW8Ft7oeauUsCjwW9Y8OgbGu5ZNbyiMDdAiEAv70GNiGBzwC9Sc%2BnFzboPAM92qGAwf8izyaoe0zuPRoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOnmMSGytPloHf%2FMuircA5KTX4z5SPTOsmj6KxwGhqmEyTXbuA3eamADtUR3JBjXzi%2Bvf%2Fcq%2Fb9yvy4gp4%2F0h6KFDSISLmiVzlxG%2BVgSoRsGxsvxwCLpwM%2Bi%2Flxr4IsGgppVwtRhDW4wfscayQn3Lb4UGvkNcKA15fBdEg27VkWXzjJuaH8cGeu79PTLzK7V3yG0rEdeofJynVJRbj0IXW1QYxkrmEKsD9S22qzzY%2F%2FemnKcTPcpwdxfkOTS%2FhjiEzBQ2s3zzRk1m217d0bib%2B87S9wOdEF%2FgkGwnWia%2FfSNxh14H7SHTEX9LHo%2FpdNGbEd3r%2Bko%2BhRAOz1XQlUF7rsjd5%2FUqKG54kbq6Da2YyJZoT8Y5XRkH6BJfFysFUyo5kV%2FHunAOy3Q%2B%2FoqHqSxCxNDpVlzAhYAL6xpp6LMyJ0bJud9MLzTkhd5ag8ZaG3gpciR5qGciEQEXuFwRi0F8jO1M0CgYt%2B9og6SdEAZ4Va9NN00HNELEr2IrnK%2BzuybpQCAXBs%2F9S0JQLpxkCqqa3CGt0iTtLTFqqpI7KhpA45PgbzfwXMOPjvnAw69w4VQYGDvfS%2FO3jXXNZTVUun8xLboIQvMk1GimS7Mts7%2BtBFonS60P5jbYltB2E1p56DYtENEDJNhHB2n8aulMIDv1csGOqUBmkbLZS2hfxN9MVdinBikaefWLgcInqwWNMdw%2FduY5u70lj%2FiSnDDji0BiqBOyRGIByFy%2BECDQQX5VHIdyZhqgzPhww1ngKEkD79M8f5t2a50SWUJFi%2BLaE52IYvfv80FUzVm%2FSnSVKMLlc9Rviui55kxJB2CW%2FdBkJ0fhpXaUEjiut2M58zamQH4fS8dJnS6JLaeSuIsqqn%2BV4DTNVIdjJy%2FGvrg&X-Amz-Signature=3c8189bd8d63d74f6d74b31162a254051ab65ffe80a7758b2832efcc59a96673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI466GVK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGqnTU%2FcESr%2BW8Ft7oeauUsCjwW9Y8OgbGu5ZNbyiMDdAiEAv70GNiGBzwC9Sc%2BnFzboPAM92qGAwf8izyaoe0zuPRoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOnmMSGytPloHf%2FMuircA5KTX4z5SPTOsmj6KxwGhqmEyTXbuA3eamADtUR3JBjXzi%2Bvf%2Fcq%2Fb9yvy4gp4%2F0h6KFDSISLmiVzlxG%2BVgSoRsGxsvxwCLpwM%2Bi%2Flxr4IsGgppVwtRhDW4wfscayQn3Lb4UGvkNcKA15fBdEg27VkWXzjJuaH8cGeu79PTLzK7V3yG0rEdeofJynVJRbj0IXW1QYxkrmEKsD9S22qzzY%2F%2FemnKcTPcpwdxfkOTS%2FhjiEzBQ2s3zzRk1m217d0bib%2B87S9wOdEF%2FgkGwnWia%2FfSNxh14H7SHTEX9LHo%2FpdNGbEd3r%2Bko%2BhRAOz1XQlUF7rsjd5%2FUqKG54kbq6Da2YyJZoT8Y5XRkH6BJfFysFUyo5kV%2FHunAOy3Q%2B%2FoqHqSxCxNDpVlzAhYAL6xpp6LMyJ0bJud9MLzTkhd5ag8ZaG3gpciR5qGciEQEXuFwRi0F8jO1M0CgYt%2B9og6SdEAZ4Va9NN00HNELEr2IrnK%2BzuybpQCAXBs%2F9S0JQLpxkCqqa3CGt0iTtLTFqqpI7KhpA45PgbzfwXMOPjvnAw69w4VQYGDvfS%2FO3jXXNZTVUun8xLboIQvMk1GimS7Mts7%2BtBFonS60P5jbYltB2E1p56DYtENEDJNhHB2n8aulMIDv1csGOqUBmkbLZS2hfxN9MVdinBikaefWLgcInqwWNMdw%2FduY5u70lj%2FiSnDDji0BiqBOyRGIByFy%2BECDQQX5VHIdyZhqgzPhww1ngKEkD79M8f5t2a50SWUJFi%2BLaE52IYvfv80FUzVm%2FSnSVKMLlc9Rviui55kxJB2CW%2FdBkJ0fhpXaUEjiut2M58zamQH4fS8dJnS6JLaeSuIsqqn%2BV4DTNVIdjJy%2FGvrg&X-Amz-Signature=c6cb1b3a4a6e1639f058224e2381ec71e8090916fd15039f3dadd9b95ffcf58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI466GVK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGqnTU%2FcESr%2BW8Ft7oeauUsCjwW9Y8OgbGu5ZNbyiMDdAiEAv70GNiGBzwC9Sc%2BnFzboPAM92qGAwf8izyaoe0zuPRoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOnmMSGytPloHf%2FMuircA5KTX4z5SPTOsmj6KxwGhqmEyTXbuA3eamADtUR3JBjXzi%2Bvf%2Fcq%2Fb9yvy4gp4%2F0h6KFDSISLmiVzlxG%2BVgSoRsGxsvxwCLpwM%2Bi%2Flxr4IsGgppVwtRhDW4wfscayQn3Lb4UGvkNcKA15fBdEg27VkWXzjJuaH8cGeu79PTLzK7V3yG0rEdeofJynVJRbj0IXW1QYxkrmEKsD9S22qzzY%2F%2FemnKcTPcpwdxfkOTS%2FhjiEzBQ2s3zzRk1m217d0bib%2B87S9wOdEF%2FgkGwnWia%2FfSNxh14H7SHTEX9LHo%2FpdNGbEd3r%2Bko%2BhRAOz1XQlUF7rsjd5%2FUqKG54kbq6Da2YyJZoT8Y5XRkH6BJfFysFUyo5kV%2FHunAOy3Q%2B%2FoqHqSxCxNDpVlzAhYAL6xpp6LMyJ0bJud9MLzTkhd5ag8ZaG3gpciR5qGciEQEXuFwRi0F8jO1M0CgYt%2B9og6SdEAZ4Va9NN00HNELEr2IrnK%2BzuybpQCAXBs%2F9S0JQLpxkCqqa3CGt0iTtLTFqqpI7KhpA45PgbzfwXMOPjvnAw69w4VQYGDvfS%2FO3jXXNZTVUun8xLboIQvMk1GimS7Mts7%2BtBFonS60P5jbYltB2E1p56DYtENEDJNhHB2n8aulMIDv1csGOqUBmkbLZS2hfxN9MVdinBikaefWLgcInqwWNMdw%2FduY5u70lj%2FiSnDDji0BiqBOyRGIByFy%2BECDQQX5VHIdyZhqgzPhww1ngKEkD79M8f5t2a50SWUJFi%2BLaE52IYvfv80FUzVm%2FSnSVKMLlc9Rviui55kxJB2CW%2FdBkJ0fhpXaUEjiut2M58zamQH4fS8dJnS6JLaeSuIsqqn%2BV4DTNVIdjJy%2FGvrg&X-Amz-Signature=fbd7ed154588a77607471b59ac97d76d7faff2129ba8872ec818c8c5ae7f4406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI466GVK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGqnTU%2FcESr%2BW8Ft7oeauUsCjwW9Y8OgbGu5ZNbyiMDdAiEAv70GNiGBzwC9Sc%2BnFzboPAM92qGAwf8izyaoe0zuPRoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOnmMSGytPloHf%2FMuircA5KTX4z5SPTOsmj6KxwGhqmEyTXbuA3eamADtUR3JBjXzi%2Bvf%2Fcq%2Fb9yvy4gp4%2F0h6KFDSISLmiVzlxG%2BVgSoRsGxsvxwCLpwM%2Bi%2Flxr4IsGgppVwtRhDW4wfscayQn3Lb4UGvkNcKA15fBdEg27VkWXzjJuaH8cGeu79PTLzK7V3yG0rEdeofJynVJRbj0IXW1QYxkrmEKsD9S22qzzY%2F%2FemnKcTPcpwdxfkOTS%2FhjiEzBQ2s3zzRk1m217d0bib%2B87S9wOdEF%2FgkGwnWia%2FfSNxh14H7SHTEX9LHo%2FpdNGbEd3r%2Bko%2BhRAOz1XQlUF7rsjd5%2FUqKG54kbq6Da2YyJZoT8Y5XRkH6BJfFysFUyo5kV%2FHunAOy3Q%2B%2FoqHqSxCxNDpVlzAhYAL6xpp6LMyJ0bJud9MLzTkhd5ag8ZaG3gpciR5qGciEQEXuFwRi0F8jO1M0CgYt%2B9og6SdEAZ4Va9NN00HNELEr2IrnK%2BzuybpQCAXBs%2F9S0JQLpxkCqqa3CGt0iTtLTFqqpI7KhpA45PgbzfwXMOPjvnAw69w4VQYGDvfS%2FO3jXXNZTVUun8xLboIQvMk1GimS7Mts7%2BtBFonS60P5jbYltB2E1p56DYtENEDJNhHB2n8aulMIDv1csGOqUBmkbLZS2hfxN9MVdinBikaefWLgcInqwWNMdw%2FduY5u70lj%2FiSnDDji0BiqBOyRGIByFy%2BECDQQX5VHIdyZhqgzPhww1ngKEkD79M8f5t2a50SWUJFi%2BLaE52IYvfv80FUzVm%2FSnSVKMLlc9Rviui55kxJB2CW%2FdBkJ0fhpXaUEjiut2M58zamQH4fS8dJnS6JLaeSuIsqqn%2BV4DTNVIdjJy%2FGvrg&X-Amz-Signature=0c1b9dbb1c9895199a78d051cc84c524641546c8522945d6ecdd3f72b29ec9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI466GVK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGqnTU%2FcESr%2BW8Ft7oeauUsCjwW9Y8OgbGu5ZNbyiMDdAiEAv70GNiGBzwC9Sc%2BnFzboPAM92qGAwf8izyaoe0zuPRoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOnmMSGytPloHf%2FMuircA5KTX4z5SPTOsmj6KxwGhqmEyTXbuA3eamADtUR3JBjXzi%2Bvf%2Fcq%2Fb9yvy4gp4%2F0h6KFDSISLmiVzlxG%2BVgSoRsGxsvxwCLpwM%2Bi%2Flxr4IsGgppVwtRhDW4wfscayQn3Lb4UGvkNcKA15fBdEg27VkWXzjJuaH8cGeu79PTLzK7V3yG0rEdeofJynVJRbj0IXW1QYxkrmEKsD9S22qzzY%2F%2FemnKcTPcpwdxfkOTS%2FhjiEzBQ2s3zzRk1m217d0bib%2B87S9wOdEF%2FgkGwnWia%2FfSNxh14H7SHTEX9LHo%2FpdNGbEd3r%2Bko%2BhRAOz1XQlUF7rsjd5%2FUqKG54kbq6Da2YyJZoT8Y5XRkH6BJfFysFUyo5kV%2FHunAOy3Q%2B%2FoqHqSxCxNDpVlzAhYAL6xpp6LMyJ0bJud9MLzTkhd5ag8ZaG3gpciR5qGciEQEXuFwRi0F8jO1M0CgYt%2B9og6SdEAZ4Va9NN00HNELEr2IrnK%2BzuybpQCAXBs%2F9S0JQLpxkCqqa3CGt0iTtLTFqqpI7KhpA45PgbzfwXMOPjvnAw69w4VQYGDvfS%2FO3jXXNZTVUun8xLboIQvMk1GimS7Mts7%2BtBFonS60P5jbYltB2E1p56DYtENEDJNhHB2n8aulMIDv1csGOqUBmkbLZS2hfxN9MVdinBikaefWLgcInqwWNMdw%2FduY5u70lj%2FiSnDDji0BiqBOyRGIByFy%2BECDQQX5VHIdyZhqgzPhww1ngKEkD79M8f5t2a50SWUJFi%2BLaE52IYvfv80FUzVm%2FSnSVKMLlc9Rviui55kxJB2CW%2FdBkJ0fhpXaUEjiut2M58zamQH4fS8dJnS6JLaeSuIsqqn%2BV4DTNVIdjJy%2FGvrg&X-Amz-Signature=5112442ca361ed83529621a9aa2e795b74cc6d9ae0ea11e857cd8f989cfd23a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
