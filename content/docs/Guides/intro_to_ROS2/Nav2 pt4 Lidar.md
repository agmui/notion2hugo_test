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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5SA27T%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCMigQgz%2BjA2g%2FHYCFJFkQ2DkUc%2BzfGep%2B8dQkDLDy3hwIhAPDf06Edx6oZ1BEwXm9dUx3Rtkjz4qzjsy93ynb9sIyNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoaED4ObnI4IFZfj8q3ANYiq8SwJLXqbwObHTqn1hdbyCEC3v3FmvUtJ3SdIyGGppy4Ip7Uv4R1P0ga8GNi4P4z%2BO%2FQ%2BbaZaCZKuuHac0lXS2T%2BVIeAEvErmCRqZMaJeM50FftpiaLju%2F9RSVFnshq6CehBwJfJs7jK0ZVAznDrCkwjiZH%2Bn%2FtRrBBcuFJh5fYl05FpEB%2Frnjb0ann5dD6GMvUhr%2BZ8QEXjfDIOlHjSXnHggReyHwIrBPMwUAcjmkqY9JHFW8i%2BMZhYkCMTmWKMYxf8WFIajQpwFegUWcegp5RlgO8XcHhez%2Ba4cr8oX9hcgIA%2B0A3%2F%2Bae%2B0UYOxOGtRewAAZQC6coBYTI1U7alOHHkFCIhvUQSbVahs9cJSFHfJCgigwf8WeQwkynSkv9bNEdka%2BdpefqmS4emtl6GGffcD04Aw6cBBfKwyDJmQs8eV8%2B7rir4xlyzEfSYJiVMZFiwX8aq0UzsrA3IQanjuE5Dg3bE17j9KlFwq0dNMWfoR0L8s9ziY%2Bz8Ctd5S0AQDBi2I%2B%2F%2F2gLLB61HwdJVs04dmohjWf1UaGdjH1u2215FfHZNYKTo5rZ7I8eTYszEJKq45b29%2BKhSW6QTs5e00Upi%2FG5lUh4ishexPbsa8Rei358HlOEjvpeYTDU%2BpvHBjqkAbsNBfCTywdDjQ0u56GlGYFR8rEW83ex5ihDI9XT54shA7vWaHP8xMcBClnZQ08vS%2B%2B6cIG29ZqVMvkkQHZtJmx4govL7A4%2FadnCLeTYuGI%2FK33uFRvrSP9wbSBLoQJbUFSAkGX%2BqFWyr%2FJKxa7uT3Hx0bx4ySxJwXtMlFHCpGOg8Qx4YUsZALOvmIMy%2Fo89d%2FkErYUJC5e09adzkO7Auies%2BULz&X-Amz-Signature=9e3060988ed8924e6bad44d596e9c73af6bddb15c7020ed4310d645ed0984e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGINJY5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD4U7UXUd6e%2Bc90mSU7FhBBLUuOowUVXyzzVEIpGiZjEQIgN8B1PqHXzJQjjVTeCq4Tm7x01vDUPMfDX5eEYqWWezwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdPMxVD3AggCk33yrcAzSsFTLNGgKlJX2iSsY9AJk5wuSOUVuiiZtVNIkvY7iGq2iWWMNETXin2rTDEwfc4yl83sbqC5n10mrHsVGaa1Nw4fngB%2BZFhx3ltxA7O8NbXBV5jnb8traaj3UYTfy8zsTkljYEYZJqZTIWORKS1xCdtVB0JIGiHYF%2BtKuo%2Fb9lwXbW%2B2T4CeRnQyeqMLJt1ZukS7ttDPqK4kk3sKjrc5Kd2lHDzv3ipzvZQNQFq3gqH3QFcWlR%2F5o9F4HL3EJ%2F5ECMhi2kKFt1Sy4HzeLkHnbZuqSRHagPH%2Brdar2bnWSLu1a7Y9ZrArbDKnbqlbapiLuMylOgMmCVtXtuKR5XMaLVlxat0WrsfigE8afUCZYbRwN95wSidbV5WWv9prDAqDn7pNWEmsio3EBOD3W99Foxcg7F%2FY01huE9lOaN1w7ScouSoCBudhISWUFN99JUA31aYqLHHjYGEQjugnhjLKWWMhi2minaLaoSQw2w8oHY0J3FBTwfhXoCKeqj0JXSLwcJYY9zg%2BDCKZBXXi9ur6ZCVk2OG1DSEwhM9jYWlaQmkRcoeJemvQLMMTqO7euSmjyJQLTf4A4Q2Pz8WTZScr%2FdN1BI6PDLBzBSBWCHW%2Bo%2FP0MY9TJVnFFkAOimMMj6m8cGOqUBPYMXs2lcpQA2oLeTHXa9m%2FQRosWf2lCZ58yOJgR7c0y%2FPuCZbOwHFT5SLOE0rQO8XcrwWN%2B10TqcWwxR6rHsJemhJnVn7rp9kxGYG1gsnosxz4puI%2BSDyms0EW9Qe7uLOEkgudWi0QaCl2cGjXuNR6kYRvVpwzlTMZa2Hbwow2WRDouIbOOhA9FH8ZViRhCCZ6MyDSMVwn0cp70ZxS8rJw6nTcDI&X-Amz-Signature=9fa6254eb0c16bb200e42fb6a7fec813222126bf2bdc3fda08228ba223c9bca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGINJY5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD4U7UXUd6e%2Bc90mSU7FhBBLUuOowUVXyzzVEIpGiZjEQIgN8B1PqHXzJQjjVTeCq4Tm7x01vDUPMfDX5eEYqWWezwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdPMxVD3AggCk33yrcAzSsFTLNGgKlJX2iSsY9AJk5wuSOUVuiiZtVNIkvY7iGq2iWWMNETXin2rTDEwfc4yl83sbqC5n10mrHsVGaa1Nw4fngB%2BZFhx3ltxA7O8NbXBV5jnb8traaj3UYTfy8zsTkljYEYZJqZTIWORKS1xCdtVB0JIGiHYF%2BtKuo%2Fb9lwXbW%2B2T4CeRnQyeqMLJt1ZukS7ttDPqK4kk3sKjrc5Kd2lHDzv3ipzvZQNQFq3gqH3QFcWlR%2F5o9F4HL3EJ%2F5ECMhi2kKFt1Sy4HzeLkHnbZuqSRHagPH%2Brdar2bnWSLu1a7Y9ZrArbDKnbqlbapiLuMylOgMmCVtXtuKR5XMaLVlxat0WrsfigE8afUCZYbRwN95wSidbV5WWv9prDAqDn7pNWEmsio3EBOD3W99Foxcg7F%2FY01huE9lOaN1w7ScouSoCBudhISWUFN99JUA31aYqLHHjYGEQjugnhjLKWWMhi2minaLaoSQw2w8oHY0J3FBTwfhXoCKeqj0JXSLwcJYY9zg%2BDCKZBXXi9ur6ZCVk2OG1DSEwhM9jYWlaQmkRcoeJemvQLMMTqO7euSmjyJQLTf4A4Q2Pz8WTZScr%2FdN1BI6PDLBzBSBWCHW%2Bo%2FP0MY9TJVnFFkAOimMMj6m8cGOqUBPYMXs2lcpQA2oLeTHXa9m%2FQRosWf2lCZ58yOJgR7c0y%2FPuCZbOwHFT5SLOE0rQO8XcrwWN%2B10TqcWwxR6rHsJemhJnVn7rp9kxGYG1gsnosxz4puI%2BSDyms0EW9Qe7uLOEkgudWi0QaCl2cGjXuNR6kYRvVpwzlTMZa2Hbwow2WRDouIbOOhA9FH8ZViRhCCZ6MyDSMVwn0cp70ZxS8rJw6nTcDI&X-Amz-Signature=8b38d2c75aaeb114a8ff0b27ca935a7cbf4cafed2bb856b231ca853a2871df18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGINJY5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD4U7UXUd6e%2Bc90mSU7FhBBLUuOowUVXyzzVEIpGiZjEQIgN8B1PqHXzJQjjVTeCq4Tm7x01vDUPMfDX5eEYqWWezwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdPMxVD3AggCk33yrcAzSsFTLNGgKlJX2iSsY9AJk5wuSOUVuiiZtVNIkvY7iGq2iWWMNETXin2rTDEwfc4yl83sbqC5n10mrHsVGaa1Nw4fngB%2BZFhx3ltxA7O8NbXBV5jnb8traaj3UYTfy8zsTkljYEYZJqZTIWORKS1xCdtVB0JIGiHYF%2BtKuo%2Fb9lwXbW%2B2T4CeRnQyeqMLJt1ZukS7ttDPqK4kk3sKjrc5Kd2lHDzv3ipzvZQNQFq3gqH3QFcWlR%2F5o9F4HL3EJ%2F5ECMhi2kKFt1Sy4HzeLkHnbZuqSRHagPH%2Brdar2bnWSLu1a7Y9ZrArbDKnbqlbapiLuMylOgMmCVtXtuKR5XMaLVlxat0WrsfigE8afUCZYbRwN95wSidbV5WWv9prDAqDn7pNWEmsio3EBOD3W99Foxcg7F%2FY01huE9lOaN1w7ScouSoCBudhISWUFN99JUA31aYqLHHjYGEQjugnhjLKWWMhi2minaLaoSQw2w8oHY0J3FBTwfhXoCKeqj0JXSLwcJYY9zg%2BDCKZBXXi9ur6ZCVk2OG1DSEwhM9jYWlaQmkRcoeJemvQLMMTqO7euSmjyJQLTf4A4Q2Pz8WTZScr%2FdN1BI6PDLBzBSBWCHW%2Bo%2FP0MY9TJVnFFkAOimMMj6m8cGOqUBPYMXs2lcpQA2oLeTHXa9m%2FQRosWf2lCZ58yOJgR7c0y%2FPuCZbOwHFT5SLOE0rQO8XcrwWN%2B10TqcWwxR6rHsJemhJnVn7rp9kxGYG1gsnosxz4puI%2BSDyms0EW9Qe7uLOEkgudWi0QaCl2cGjXuNR6kYRvVpwzlTMZa2Hbwow2WRDouIbOOhA9FH8ZViRhCCZ6MyDSMVwn0cp70ZxS8rJw6nTcDI&X-Amz-Signature=7709d10b991582ce9a49b3d49170d8caa99092f7cea5a2d0f7c77454ef2abaee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGINJY5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD4U7UXUd6e%2Bc90mSU7FhBBLUuOowUVXyzzVEIpGiZjEQIgN8B1PqHXzJQjjVTeCq4Tm7x01vDUPMfDX5eEYqWWezwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdPMxVD3AggCk33yrcAzSsFTLNGgKlJX2iSsY9AJk5wuSOUVuiiZtVNIkvY7iGq2iWWMNETXin2rTDEwfc4yl83sbqC5n10mrHsVGaa1Nw4fngB%2BZFhx3ltxA7O8NbXBV5jnb8traaj3UYTfy8zsTkljYEYZJqZTIWORKS1xCdtVB0JIGiHYF%2BtKuo%2Fb9lwXbW%2B2T4CeRnQyeqMLJt1ZukS7ttDPqK4kk3sKjrc5Kd2lHDzv3ipzvZQNQFq3gqH3QFcWlR%2F5o9F4HL3EJ%2F5ECMhi2kKFt1Sy4HzeLkHnbZuqSRHagPH%2Brdar2bnWSLu1a7Y9ZrArbDKnbqlbapiLuMylOgMmCVtXtuKR5XMaLVlxat0WrsfigE8afUCZYbRwN95wSidbV5WWv9prDAqDn7pNWEmsio3EBOD3W99Foxcg7F%2FY01huE9lOaN1w7ScouSoCBudhISWUFN99JUA31aYqLHHjYGEQjugnhjLKWWMhi2minaLaoSQw2w8oHY0J3FBTwfhXoCKeqj0JXSLwcJYY9zg%2BDCKZBXXi9ur6ZCVk2OG1DSEwhM9jYWlaQmkRcoeJemvQLMMTqO7euSmjyJQLTf4A4Q2Pz8WTZScr%2FdN1BI6PDLBzBSBWCHW%2Bo%2FP0MY9TJVnFFkAOimMMj6m8cGOqUBPYMXs2lcpQA2oLeTHXa9m%2FQRosWf2lCZ58yOJgR7c0y%2FPuCZbOwHFT5SLOE0rQO8XcrwWN%2B10TqcWwxR6rHsJemhJnVn7rp9kxGYG1gsnosxz4puI%2BSDyms0EW9Qe7uLOEkgudWi0QaCl2cGjXuNR6kYRvVpwzlTMZa2Hbwow2WRDouIbOOhA9FH8ZViRhCCZ6MyDSMVwn0cp70ZxS8rJw6nTcDI&X-Amz-Signature=54a4b091e2248ee2d39645df398caf026ec776ad1b7ec31bffcfdefdd8499a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGINJY5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD4U7UXUd6e%2Bc90mSU7FhBBLUuOowUVXyzzVEIpGiZjEQIgN8B1PqHXzJQjjVTeCq4Tm7x01vDUPMfDX5eEYqWWezwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdPMxVD3AggCk33yrcAzSsFTLNGgKlJX2iSsY9AJk5wuSOUVuiiZtVNIkvY7iGq2iWWMNETXin2rTDEwfc4yl83sbqC5n10mrHsVGaa1Nw4fngB%2BZFhx3ltxA7O8NbXBV5jnb8traaj3UYTfy8zsTkljYEYZJqZTIWORKS1xCdtVB0JIGiHYF%2BtKuo%2Fb9lwXbW%2B2T4CeRnQyeqMLJt1ZukS7ttDPqK4kk3sKjrc5Kd2lHDzv3ipzvZQNQFq3gqH3QFcWlR%2F5o9F4HL3EJ%2F5ECMhi2kKFt1Sy4HzeLkHnbZuqSRHagPH%2Brdar2bnWSLu1a7Y9ZrArbDKnbqlbapiLuMylOgMmCVtXtuKR5XMaLVlxat0WrsfigE8afUCZYbRwN95wSidbV5WWv9prDAqDn7pNWEmsio3EBOD3W99Foxcg7F%2FY01huE9lOaN1w7ScouSoCBudhISWUFN99JUA31aYqLHHjYGEQjugnhjLKWWMhi2minaLaoSQw2w8oHY0J3FBTwfhXoCKeqj0JXSLwcJYY9zg%2BDCKZBXXi9ur6ZCVk2OG1DSEwhM9jYWlaQmkRcoeJemvQLMMTqO7euSmjyJQLTf4A4Q2Pz8WTZScr%2FdN1BI6PDLBzBSBWCHW%2Bo%2FP0MY9TJVnFFkAOimMMj6m8cGOqUBPYMXs2lcpQA2oLeTHXa9m%2FQRosWf2lCZ58yOJgR7c0y%2FPuCZbOwHFT5SLOE0rQO8XcrwWN%2B10TqcWwxR6rHsJemhJnVn7rp9kxGYG1gsnosxz4puI%2BSDyms0EW9Qe7uLOEkgudWi0QaCl2cGjXuNR6kYRvVpwzlTMZa2Hbwow2WRDouIbOOhA9FH8ZViRhCCZ6MyDSMVwn0cp70ZxS8rJw6nTcDI&X-Amz-Signature=2a6284117ca9e77b1e3d0a53307a67dfb5391bf1c1681c8fc0e1ba868877d12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGINJY5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD4U7UXUd6e%2Bc90mSU7FhBBLUuOowUVXyzzVEIpGiZjEQIgN8B1PqHXzJQjjVTeCq4Tm7x01vDUPMfDX5eEYqWWezwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdPMxVD3AggCk33yrcAzSsFTLNGgKlJX2iSsY9AJk5wuSOUVuiiZtVNIkvY7iGq2iWWMNETXin2rTDEwfc4yl83sbqC5n10mrHsVGaa1Nw4fngB%2BZFhx3ltxA7O8NbXBV5jnb8traaj3UYTfy8zsTkljYEYZJqZTIWORKS1xCdtVB0JIGiHYF%2BtKuo%2Fb9lwXbW%2B2T4CeRnQyeqMLJt1ZukS7ttDPqK4kk3sKjrc5Kd2lHDzv3ipzvZQNQFq3gqH3QFcWlR%2F5o9F4HL3EJ%2F5ECMhi2kKFt1Sy4HzeLkHnbZuqSRHagPH%2Brdar2bnWSLu1a7Y9ZrArbDKnbqlbapiLuMylOgMmCVtXtuKR5XMaLVlxat0WrsfigE8afUCZYbRwN95wSidbV5WWv9prDAqDn7pNWEmsio3EBOD3W99Foxcg7F%2FY01huE9lOaN1w7ScouSoCBudhISWUFN99JUA31aYqLHHjYGEQjugnhjLKWWMhi2minaLaoSQw2w8oHY0J3FBTwfhXoCKeqj0JXSLwcJYY9zg%2BDCKZBXXi9ur6ZCVk2OG1DSEwhM9jYWlaQmkRcoeJemvQLMMTqO7euSmjyJQLTf4A4Q2Pz8WTZScr%2FdN1BI6PDLBzBSBWCHW%2Bo%2FP0MY9TJVnFFkAOimMMj6m8cGOqUBPYMXs2lcpQA2oLeTHXa9m%2FQRosWf2lCZ58yOJgR7c0y%2FPuCZbOwHFT5SLOE0rQO8XcrwWN%2B10TqcWwxR6rHsJemhJnVn7rp9kxGYG1gsnosxz4puI%2BSDyms0EW9Qe7uLOEkgudWi0QaCl2cGjXuNR6kYRvVpwzlTMZa2Hbwow2WRDouIbOOhA9FH8ZViRhCCZ6MyDSMVwn0cp70ZxS8rJw6nTcDI&X-Amz-Signature=c4b83c30438690e244b049bb45f53b72b7af5e7c831f674b4cd1e798509a712e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGINJY5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD4U7UXUd6e%2Bc90mSU7FhBBLUuOowUVXyzzVEIpGiZjEQIgN8B1PqHXzJQjjVTeCq4Tm7x01vDUPMfDX5eEYqWWezwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdPMxVD3AggCk33yrcAzSsFTLNGgKlJX2iSsY9AJk5wuSOUVuiiZtVNIkvY7iGq2iWWMNETXin2rTDEwfc4yl83sbqC5n10mrHsVGaa1Nw4fngB%2BZFhx3ltxA7O8NbXBV5jnb8traaj3UYTfy8zsTkljYEYZJqZTIWORKS1xCdtVB0JIGiHYF%2BtKuo%2Fb9lwXbW%2B2T4CeRnQyeqMLJt1ZukS7ttDPqK4kk3sKjrc5Kd2lHDzv3ipzvZQNQFq3gqH3QFcWlR%2F5o9F4HL3EJ%2F5ECMhi2kKFt1Sy4HzeLkHnbZuqSRHagPH%2Brdar2bnWSLu1a7Y9ZrArbDKnbqlbapiLuMylOgMmCVtXtuKR5XMaLVlxat0WrsfigE8afUCZYbRwN95wSidbV5WWv9prDAqDn7pNWEmsio3EBOD3W99Foxcg7F%2FY01huE9lOaN1w7ScouSoCBudhISWUFN99JUA31aYqLHHjYGEQjugnhjLKWWMhi2minaLaoSQw2w8oHY0J3FBTwfhXoCKeqj0JXSLwcJYY9zg%2BDCKZBXXi9ur6ZCVk2OG1DSEwhM9jYWlaQmkRcoeJemvQLMMTqO7euSmjyJQLTf4A4Q2Pz8WTZScr%2FdN1BI6PDLBzBSBWCHW%2Bo%2FP0MY9TJVnFFkAOimMMj6m8cGOqUBPYMXs2lcpQA2oLeTHXa9m%2FQRosWf2lCZ58yOJgR7c0y%2FPuCZbOwHFT5SLOE0rQO8XcrwWN%2B10TqcWwxR6rHsJemhJnVn7rp9kxGYG1gsnosxz4puI%2BSDyms0EW9Qe7uLOEkgudWi0QaCl2cGjXuNR6kYRvVpwzlTMZa2Hbwow2WRDouIbOOhA9FH8ZViRhCCZ6MyDSMVwn0cp70ZxS8rJw6nTcDI&X-Amz-Signature=8084a1ceda59b1401101a6d672e47f52bd8ae0ca3b1bce75c97ee4c0918895ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGINJY5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD4U7UXUd6e%2Bc90mSU7FhBBLUuOowUVXyzzVEIpGiZjEQIgN8B1PqHXzJQjjVTeCq4Tm7x01vDUPMfDX5eEYqWWezwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdPMxVD3AggCk33yrcAzSsFTLNGgKlJX2iSsY9AJk5wuSOUVuiiZtVNIkvY7iGq2iWWMNETXin2rTDEwfc4yl83sbqC5n10mrHsVGaa1Nw4fngB%2BZFhx3ltxA7O8NbXBV5jnb8traaj3UYTfy8zsTkljYEYZJqZTIWORKS1xCdtVB0JIGiHYF%2BtKuo%2Fb9lwXbW%2B2T4CeRnQyeqMLJt1ZukS7ttDPqK4kk3sKjrc5Kd2lHDzv3ipzvZQNQFq3gqH3QFcWlR%2F5o9F4HL3EJ%2F5ECMhi2kKFt1Sy4HzeLkHnbZuqSRHagPH%2Brdar2bnWSLu1a7Y9ZrArbDKnbqlbapiLuMylOgMmCVtXtuKR5XMaLVlxat0WrsfigE8afUCZYbRwN95wSidbV5WWv9prDAqDn7pNWEmsio3EBOD3W99Foxcg7F%2FY01huE9lOaN1w7ScouSoCBudhISWUFN99JUA31aYqLHHjYGEQjugnhjLKWWMhi2minaLaoSQw2w8oHY0J3FBTwfhXoCKeqj0JXSLwcJYY9zg%2BDCKZBXXi9ur6ZCVk2OG1DSEwhM9jYWlaQmkRcoeJemvQLMMTqO7euSmjyJQLTf4A4Q2Pz8WTZScr%2FdN1BI6PDLBzBSBWCHW%2Bo%2FP0MY9TJVnFFkAOimMMj6m8cGOqUBPYMXs2lcpQA2oLeTHXa9m%2FQRosWf2lCZ58yOJgR7c0y%2FPuCZbOwHFT5SLOE0rQO8XcrwWN%2B10TqcWwxR6rHsJemhJnVn7rp9kxGYG1gsnosxz4puI%2BSDyms0EW9Qe7uLOEkgudWi0QaCl2cGjXuNR6kYRvVpwzlTMZa2Hbwow2WRDouIbOOhA9FH8ZViRhCCZ6MyDSMVwn0cp70ZxS8rJw6nTcDI&X-Amz-Signature=4d1ab3a307046d06dd57df9c4d9ab94a71f938ed1e3e4e09513746d0cdfaeb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGINJY5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD4U7UXUd6e%2Bc90mSU7FhBBLUuOowUVXyzzVEIpGiZjEQIgN8B1PqHXzJQjjVTeCq4Tm7x01vDUPMfDX5eEYqWWezwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdPMxVD3AggCk33yrcAzSsFTLNGgKlJX2iSsY9AJk5wuSOUVuiiZtVNIkvY7iGq2iWWMNETXin2rTDEwfc4yl83sbqC5n10mrHsVGaa1Nw4fngB%2BZFhx3ltxA7O8NbXBV5jnb8traaj3UYTfy8zsTkljYEYZJqZTIWORKS1xCdtVB0JIGiHYF%2BtKuo%2Fb9lwXbW%2B2T4CeRnQyeqMLJt1ZukS7ttDPqK4kk3sKjrc5Kd2lHDzv3ipzvZQNQFq3gqH3QFcWlR%2F5o9F4HL3EJ%2F5ECMhi2kKFt1Sy4HzeLkHnbZuqSRHagPH%2Brdar2bnWSLu1a7Y9ZrArbDKnbqlbapiLuMylOgMmCVtXtuKR5XMaLVlxat0WrsfigE8afUCZYbRwN95wSidbV5WWv9prDAqDn7pNWEmsio3EBOD3W99Foxcg7F%2FY01huE9lOaN1w7ScouSoCBudhISWUFN99JUA31aYqLHHjYGEQjugnhjLKWWMhi2minaLaoSQw2w8oHY0J3FBTwfhXoCKeqj0JXSLwcJYY9zg%2BDCKZBXXi9ur6ZCVk2OG1DSEwhM9jYWlaQmkRcoeJemvQLMMTqO7euSmjyJQLTf4A4Q2Pz8WTZScr%2FdN1BI6PDLBzBSBWCHW%2Bo%2FP0MY9TJVnFFkAOimMMj6m8cGOqUBPYMXs2lcpQA2oLeTHXa9m%2FQRosWf2lCZ58yOJgR7c0y%2FPuCZbOwHFT5SLOE0rQO8XcrwWN%2B10TqcWwxR6rHsJemhJnVn7rp9kxGYG1gsnosxz4puI%2BSDyms0EW9Qe7uLOEkgudWi0QaCl2cGjXuNR6kYRvVpwzlTMZa2Hbwow2WRDouIbOOhA9FH8ZViRhCCZ6MyDSMVwn0cp70ZxS8rJw6nTcDI&X-Amz-Signature=0c6e4c9754f3e85573973a93684a16a989b93850c4e371e8ffd04cae66543589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGINJY5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD4U7UXUd6e%2Bc90mSU7FhBBLUuOowUVXyzzVEIpGiZjEQIgN8B1PqHXzJQjjVTeCq4Tm7x01vDUPMfDX5eEYqWWezwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdPMxVD3AggCk33yrcAzSsFTLNGgKlJX2iSsY9AJk5wuSOUVuiiZtVNIkvY7iGq2iWWMNETXin2rTDEwfc4yl83sbqC5n10mrHsVGaa1Nw4fngB%2BZFhx3ltxA7O8NbXBV5jnb8traaj3UYTfy8zsTkljYEYZJqZTIWORKS1xCdtVB0JIGiHYF%2BtKuo%2Fb9lwXbW%2B2T4CeRnQyeqMLJt1ZukS7ttDPqK4kk3sKjrc5Kd2lHDzv3ipzvZQNQFq3gqH3QFcWlR%2F5o9F4HL3EJ%2F5ECMhi2kKFt1Sy4HzeLkHnbZuqSRHagPH%2Brdar2bnWSLu1a7Y9ZrArbDKnbqlbapiLuMylOgMmCVtXtuKR5XMaLVlxat0WrsfigE8afUCZYbRwN95wSidbV5WWv9prDAqDn7pNWEmsio3EBOD3W99Foxcg7F%2FY01huE9lOaN1w7ScouSoCBudhISWUFN99JUA31aYqLHHjYGEQjugnhjLKWWMhi2minaLaoSQw2w8oHY0J3FBTwfhXoCKeqj0JXSLwcJYY9zg%2BDCKZBXXi9ur6ZCVk2OG1DSEwhM9jYWlaQmkRcoeJemvQLMMTqO7euSmjyJQLTf4A4Q2Pz8WTZScr%2FdN1BI6PDLBzBSBWCHW%2Bo%2FP0MY9TJVnFFkAOimMMj6m8cGOqUBPYMXs2lcpQA2oLeTHXa9m%2FQRosWf2lCZ58yOJgR7c0y%2FPuCZbOwHFT5SLOE0rQO8XcrwWN%2B10TqcWwxR6rHsJemhJnVn7rp9kxGYG1gsnosxz4puI%2BSDyms0EW9Qe7uLOEkgudWi0QaCl2cGjXuNR6kYRvVpwzlTMZa2Hbwow2WRDouIbOOhA9FH8ZViRhCCZ6MyDSMVwn0cp70ZxS8rJw6nTcDI&X-Amz-Signature=54a4b091e2248ee2d39645df398caf026ec776ad1b7ec31bffcfdefdd8499a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
