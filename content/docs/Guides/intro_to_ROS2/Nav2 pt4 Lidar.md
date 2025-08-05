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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y6J5K3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD4mV6ZUurJ6RK%2F8LUzi0EYiqMeSDE5YP47jF7scnd6rAIgQvzEUHkqJOKhbOY6%2Fh6isU2MZw0W8x5oToq0294g1KIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCtA%2FE8zwmf32lepGSrcA%2BuK5quXq9289yBzCQLi7ruQ9CSZBIlqMN624LvhC%2FSdniZl1GsjI3o3y%2FQYOCY17XaDzCtxvfIzVIoywQcvEo%2BK8uV%2Br0Q710HOqhoxIAxJXcpxmHe6SoDr%2BlC5vqPWo0fxRbcIlzXhddJsU0W%2FzSX6%2BxF6vKtGnc7EssVj9tcSk3%2Fv5H9lY%2BimHdM9pdztog61uSRrHExQVhM9CckOlGJntK1%2BExLp%2FXmS6VyZ7JSCSKIfVYF76StQudhF6OAFx2VcCktE3pGxsp4UdXCYZJmMwcWdLLo3IxZDSkfDagq2Xhsp7rBDyleHiqguCq4BbdaDnVn86%2BZ8OWckgFEsHWUwQJMQ0u1XDTBoZ0HOnRFhPKSSecvhq%2Bfy78obR9MUNjemewNUvtyqcRnLN0a97jGrS6Eec%2F2xfkvnVClmLTRBBVRpEvAXFQBhA2lkjOyLaFxL321O3tCo5jPbk6vJWKBc73mUvyeiBreI3bp1B21OxDvC%2FdSQVsw9TZBje0rrzz0Hu%2BDXZ02QR0hzGAc5fvDDK8kEVQth0He6kZpNn1keUcozrUHCQYPW%2FKyQfwIwPGh%2BNmi3ssJOuO4KSPpSIdWynfRIeTcJu0d33cQvr1wCbjQP4%2B7l7z0kmiiXMLvMyMQGOqUBB09%2F8dsO%2BYZPWabbX5kFI4zRQmJ%2FVDgxiqdm1HddGwC5JEFK%2BDh%2B7yJRg7K0J1N%2BmYDhQggWANcaNin0pSyD4X74ep41TsY4u%2BNPPpC3IhWcOHtb6C0vlYEospEfZK70Sou1ia17iDlXowX7kv4YV0ScjyHO0HVkUn9UQ6XO11ZRm595AjIVmv0OI8xUFCRnYu%2BMMG2m8dZtJcQTb2ljeT%2BuxAd4&X-Amz-Signature=3cd2f4effe9d78dcfac2ea218cc5c6d59d4fbc8e26e78ce8f233ad52f8d4bcd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TH3DEBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVKMgUJ1eEEdArgchHE0u6M3v8khJw4x1G1SF7BOo1TgIhAJYkWFjUMkFqdraUPw0VkwhN90LOoSxGo%2FNgVdkmLUAQKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMTKOgN%2BjEjI9MP7Eq3AMhiWybDvHm6oUPfFubv6MWPgBQTtbU4w5mUAYqeTridjBgoDxQGnM3tGjZ7TSp0vZCHpUq7gIlfYLSLwmvLABt%2F%2FQJwt9nmpjB6U7yAIiBPhlS8raTGFhaF1xG8mu7l3NHq91jPL%2FLo6GzlkFhRVwdEQjYdzEb%2FEWjl1XtoqbRBoLke3MXOflDKBLLIGVTcr3YYLoK3AlXF0BburN8H9k7C5t0sA6vDLBxLrP%2FTTiy38gHCI%2FrcHSlWELhC1Kcox060uhrUrNyNhUoGFZj7dSKoGR%2BZf%2Fz1BARnDHzGt9kscG02w1Ve3uyXMKVX9rKYUxutOvI8YWhhLkSAPz2FtrcFbWyFwKD%2FqLTjS47Gmmw8WJiVHVkxW%2FzdZZ7N3%2BAVDHDMMgKDmQrXjkbCoEsYkxt5TmCQWpUD6WbiRBuWvNek%2Bli2KIEuYp829fg%2FfddTDcPFotjrBDz6ZbPcIzYJ9gqlozyW0J%2BAGDHAL4TPP%2BrZVOPJhPKA2EECc1YI0yPixiFxTAIhsyQNqi%2BrynppHuKkuxxdNu8RVhOkfjTUitUEAMO0Cp861Idegxj2V%2BkIz3CjYRkDoAZ97YZEVGbVpqH38zfBkiTS8C%2Fcs6vPcb22NMNUqtoFWoIB4EFKTC9zMjEBjqkATqnAXKPBZpVTBbuKhl%2FOZhg5TN3jdGbTg1HhPd%2BZrH%2BVXZGQSkk1o01uVXFojwKi%2Fe87ILXThtBRZtdI6fJcE5G0%2FvpeZAy3KZZsdIF6NYlVmzdiLEeBq2sNyIPF8c6nKAYz4WoevtuZOmSZKZl843WjL%2FNVAJ2njYvWCEk%2ByBb9hAU9AECA%2BJAYdeQKvJZguYJZ%2FENx8Y%2FEG02LCIk205WSsvC&X-Amz-Signature=923dfe11476685b31ee19b01b638ec2f9986a16a6f9902abe248e1f86f2d9d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TH3DEBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVKMgUJ1eEEdArgchHE0u6M3v8khJw4x1G1SF7BOo1TgIhAJYkWFjUMkFqdraUPw0VkwhN90LOoSxGo%2FNgVdkmLUAQKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMTKOgN%2BjEjI9MP7Eq3AMhiWybDvHm6oUPfFubv6MWPgBQTtbU4w5mUAYqeTridjBgoDxQGnM3tGjZ7TSp0vZCHpUq7gIlfYLSLwmvLABt%2F%2FQJwt9nmpjB6U7yAIiBPhlS8raTGFhaF1xG8mu7l3NHq91jPL%2FLo6GzlkFhRVwdEQjYdzEb%2FEWjl1XtoqbRBoLke3MXOflDKBLLIGVTcr3YYLoK3AlXF0BburN8H9k7C5t0sA6vDLBxLrP%2FTTiy38gHCI%2FrcHSlWELhC1Kcox060uhrUrNyNhUoGFZj7dSKoGR%2BZf%2Fz1BARnDHzGt9kscG02w1Ve3uyXMKVX9rKYUxutOvI8YWhhLkSAPz2FtrcFbWyFwKD%2FqLTjS47Gmmw8WJiVHVkxW%2FzdZZ7N3%2BAVDHDMMgKDmQrXjkbCoEsYkxt5TmCQWpUD6WbiRBuWvNek%2Bli2KIEuYp829fg%2FfddTDcPFotjrBDz6ZbPcIzYJ9gqlozyW0J%2BAGDHAL4TPP%2BrZVOPJhPKA2EECc1YI0yPixiFxTAIhsyQNqi%2BrynppHuKkuxxdNu8RVhOkfjTUitUEAMO0Cp861Idegxj2V%2BkIz3CjYRkDoAZ97YZEVGbVpqH38zfBkiTS8C%2Fcs6vPcb22NMNUqtoFWoIB4EFKTC9zMjEBjqkATqnAXKPBZpVTBbuKhl%2FOZhg5TN3jdGbTg1HhPd%2BZrH%2BVXZGQSkk1o01uVXFojwKi%2Fe87ILXThtBRZtdI6fJcE5G0%2FvpeZAy3KZZsdIF6NYlVmzdiLEeBq2sNyIPF8c6nKAYz4WoevtuZOmSZKZl843WjL%2FNVAJ2njYvWCEk%2ByBb9hAU9AECA%2BJAYdeQKvJZguYJZ%2FENx8Y%2FEG02LCIk205WSsvC&X-Amz-Signature=558227db80fb27ff3d43cfda58771f516833d1adf81fee5709bb8f2ab6ae3158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TH3DEBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVKMgUJ1eEEdArgchHE0u6M3v8khJw4x1G1SF7BOo1TgIhAJYkWFjUMkFqdraUPw0VkwhN90LOoSxGo%2FNgVdkmLUAQKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMTKOgN%2BjEjI9MP7Eq3AMhiWybDvHm6oUPfFubv6MWPgBQTtbU4w5mUAYqeTridjBgoDxQGnM3tGjZ7TSp0vZCHpUq7gIlfYLSLwmvLABt%2F%2FQJwt9nmpjB6U7yAIiBPhlS8raTGFhaF1xG8mu7l3NHq91jPL%2FLo6GzlkFhRVwdEQjYdzEb%2FEWjl1XtoqbRBoLke3MXOflDKBLLIGVTcr3YYLoK3AlXF0BburN8H9k7C5t0sA6vDLBxLrP%2FTTiy38gHCI%2FrcHSlWELhC1Kcox060uhrUrNyNhUoGFZj7dSKoGR%2BZf%2Fz1BARnDHzGt9kscG02w1Ve3uyXMKVX9rKYUxutOvI8YWhhLkSAPz2FtrcFbWyFwKD%2FqLTjS47Gmmw8WJiVHVkxW%2FzdZZ7N3%2BAVDHDMMgKDmQrXjkbCoEsYkxt5TmCQWpUD6WbiRBuWvNek%2Bli2KIEuYp829fg%2FfddTDcPFotjrBDz6ZbPcIzYJ9gqlozyW0J%2BAGDHAL4TPP%2BrZVOPJhPKA2EECc1YI0yPixiFxTAIhsyQNqi%2BrynppHuKkuxxdNu8RVhOkfjTUitUEAMO0Cp861Idegxj2V%2BkIz3CjYRkDoAZ97YZEVGbVpqH38zfBkiTS8C%2Fcs6vPcb22NMNUqtoFWoIB4EFKTC9zMjEBjqkATqnAXKPBZpVTBbuKhl%2FOZhg5TN3jdGbTg1HhPd%2BZrH%2BVXZGQSkk1o01uVXFojwKi%2Fe87ILXThtBRZtdI6fJcE5G0%2FvpeZAy3KZZsdIF6NYlVmzdiLEeBq2sNyIPF8c6nKAYz4WoevtuZOmSZKZl843WjL%2FNVAJ2njYvWCEk%2ByBb9hAU9AECA%2BJAYdeQKvJZguYJZ%2FENx8Y%2FEG02LCIk205WSsvC&X-Amz-Signature=1fe70f7a226acdc952b58e7e4dbb21a77bd44645534c9aa5627f6ad80b53cbc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TH3DEBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVKMgUJ1eEEdArgchHE0u6M3v8khJw4x1G1SF7BOo1TgIhAJYkWFjUMkFqdraUPw0VkwhN90LOoSxGo%2FNgVdkmLUAQKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMTKOgN%2BjEjI9MP7Eq3AMhiWybDvHm6oUPfFubv6MWPgBQTtbU4w5mUAYqeTridjBgoDxQGnM3tGjZ7TSp0vZCHpUq7gIlfYLSLwmvLABt%2F%2FQJwt9nmpjB6U7yAIiBPhlS8raTGFhaF1xG8mu7l3NHq91jPL%2FLo6GzlkFhRVwdEQjYdzEb%2FEWjl1XtoqbRBoLke3MXOflDKBLLIGVTcr3YYLoK3AlXF0BburN8H9k7C5t0sA6vDLBxLrP%2FTTiy38gHCI%2FrcHSlWELhC1Kcox060uhrUrNyNhUoGFZj7dSKoGR%2BZf%2Fz1BARnDHzGt9kscG02w1Ve3uyXMKVX9rKYUxutOvI8YWhhLkSAPz2FtrcFbWyFwKD%2FqLTjS47Gmmw8WJiVHVkxW%2FzdZZ7N3%2BAVDHDMMgKDmQrXjkbCoEsYkxt5TmCQWpUD6WbiRBuWvNek%2Bli2KIEuYp829fg%2FfddTDcPFotjrBDz6ZbPcIzYJ9gqlozyW0J%2BAGDHAL4TPP%2BrZVOPJhPKA2EECc1YI0yPixiFxTAIhsyQNqi%2BrynppHuKkuxxdNu8RVhOkfjTUitUEAMO0Cp861Idegxj2V%2BkIz3CjYRkDoAZ97YZEVGbVpqH38zfBkiTS8C%2Fcs6vPcb22NMNUqtoFWoIB4EFKTC9zMjEBjqkATqnAXKPBZpVTBbuKhl%2FOZhg5TN3jdGbTg1HhPd%2BZrH%2BVXZGQSkk1o01uVXFojwKi%2Fe87ILXThtBRZtdI6fJcE5G0%2FvpeZAy3KZZsdIF6NYlVmzdiLEeBq2sNyIPF8c6nKAYz4WoevtuZOmSZKZl843WjL%2FNVAJ2njYvWCEk%2ByBb9hAU9AECA%2BJAYdeQKvJZguYJZ%2FENx8Y%2FEG02LCIk205WSsvC&X-Amz-Signature=17cbc9f0da5d56a9fc164349f1a42336c0b07cdf66f84c6f878447fb56eb0d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TH3DEBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVKMgUJ1eEEdArgchHE0u6M3v8khJw4x1G1SF7BOo1TgIhAJYkWFjUMkFqdraUPw0VkwhN90LOoSxGo%2FNgVdkmLUAQKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMTKOgN%2BjEjI9MP7Eq3AMhiWybDvHm6oUPfFubv6MWPgBQTtbU4w5mUAYqeTridjBgoDxQGnM3tGjZ7TSp0vZCHpUq7gIlfYLSLwmvLABt%2F%2FQJwt9nmpjB6U7yAIiBPhlS8raTGFhaF1xG8mu7l3NHq91jPL%2FLo6GzlkFhRVwdEQjYdzEb%2FEWjl1XtoqbRBoLke3MXOflDKBLLIGVTcr3YYLoK3AlXF0BburN8H9k7C5t0sA6vDLBxLrP%2FTTiy38gHCI%2FrcHSlWELhC1Kcox060uhrUrNyNhUoGFZj7dSKoGR%2BZf%2Fz1BARnDHzGt9kscG02w1Ve3uyXMKVX9rKYUxutOvI8YWhhLkSAPz2FtrcFbWyFwKD%2FqLTjS47Gmmw8WJiVHVkxW%2FzdZZ7N3%2BAVDHDMMgKDmQrXjkbCoEsYkxt5TmCQWpUD6WbiRBuWvNek%2Bli2KIEuYp829fg%2FfddTDcPFotjrBDz6ZbPcIzYJ9gqlozyW0J%2BAGDHAL4TPP%2BrZVOPJhPKA2EECc1YI0yPixiFxTAIhsyQNqi%2BrynppHuKkuxxdNu8RVhOkfjTUitUEAMO0Cp861Idegxj2V%2BkIz3CjYRkDoAZ97YZEVGbVpqH38zfBkiTS8C%2Fcs6vPcb22NMNUqtoFWoIB4EFKTC9zMjEBjqkATqnAXKPBZpVTBbuKhl%2FOZhg5TN3jdGbTg1HhPd%2BZrH%2BVXZGQSkk1o01uVXFojwKi%2Fe87ILXThtBRZtdI6fJcE5G0%2FvpeZAy3KZZsdIF6NYlVmzdiLEeBq2sNyIPF8c6nKAYz4WoevtuZOmSZKZl843WjL%2FNVAJ2njYvWCEk%2ByBb9hAU9AECA%2BJAYdeQKvJZguYJZ%2FENx8Y%2FEG02LCIk205WSsvC&X-Amz-Signature=3c0b870d6bedaab58e1a5bb93c06617dadafafdcaa6c61755aac8d2c13f4b438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TH3DEBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVKMgUJ1eEEdArgchHE0u6M3v8khJw4x1G1SF7BOo1TgIhAJYkWFjUMkFqdraUPw0VkwhN90LOoSxGo%2FNgVdkmLUAQKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMTKOgN%2BjEjI9MP7Eq3AMhiWybDvHm6oUPfFubv6MWPgBQTtbU4w5mUAYqeTridjBgoDxQGnM3tGjZ7TSp0vZCHpUq7gIlfYLSLwmvLABt%2F%2FQJwt9nmpjB6U7yAIiBPhlS8raTGFhaF1xG8mu7l3NHq91jPL%2FLo6GzlkFhRVwdEQjYdzEb%2FEWjl1XtoqbRBoLke3MXOflDKBLLIGVTcr3YYLoK3AlXF0BburN8H9k7C5t0sA6vDLBxLrP%2FTTiy38gHCI%2FrcHSlWELhC1Kcox060uhrUrNyNhUoGFZj7dSKoGR%2BZf%2Fz1BARnDHzGt9kscG02w1Ve3uyXMKVX9rKYUxutOvI8YWhhLkSAPz2FtrcFbWyFwKD%2FqLTjS47Gmmw8WJiVHVkxW%2FzdZZ7N3%2BAVDHDMMgKDmQrXjkbCoEsYkxt5TmCQWpUD6WbiRBuWvNek%2Bli2KIEuYp829fg%2FfddTDcPFotjrBDz6ZbPcIzYJ9gqlozyW0J%2BAGDHAL4TPP%2BrZVOPJhPKA2EECc1YI0yPixiFxTAIhsyQNqi%2BrynppHuKkuxxdNu8RVhOkfjTUitUEAMO0Cp861Idegxj2V%2BkIz3CjYRkDoAZ97YZEVGbVpqH38zfBkiTS8C%2Fcs6vPcb22NMNUqtoFWoIB4EFKTC9zMjEBjqkATqnAXKPBZpVTBbuKhl%2FOZhg5TN3jdGbTg1HhPd%2BZrH%2BVXZGQSkk1o01uVXFojwKi%2Fe87ILXThtBRZtdI6fJcE5G0%2FvpeZAy3KZZsdIF6NYlVmzdiLEeBq2sNyIPF8c6nKAYz4WoevtuZOmSZKZl843WjL%2FNVAJ2njYvWCEk%2ByBb9hAU9AECA%2BJAYdeQKvJZguYJZ%2FENx8Y%2FEG02LCIk205WSsvC&X-Amz-Signature=c280e319eab4d1bef48521e7d119d3f2f52a34f949ec6aa40b623cbd3d52fe7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TH3DEBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVKMgUJ1eEEdArgchHE0u6M3v8khJw4x1G1SF7BOo1TgIhAJYkWFjUMkFqdraUPw0VkwhN90LOoSxGo%2FNgVdkmLUAQKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMTKOgN%2BjEjI9MP7Eq3AMhiWybDvHm6oUPfFubv6MWPgBQTtbU4w5mUAYqeTridjBgoDxQGnM3tGjZ7TSp0vZCHpUq7gIlfYLSLwmvLABt%2F%2FQJwt9nmpjB6U7yAIiBPhlS8raTGFhaF1xG8mu7l3NHq91jPL%2FLo6GzlkFhRVwdEQjYdzEb%2FEWjl1XtoqbRBoLke3MXOflDKBLLIGVTcr3YYLoK3AlXF0BburN8H9k7C5t0sA6vDLBxLrP%2FTTiy38gHCI%2FrcHSlWELhC1Kcox060uhrUrNyNhUoGFZj7dSKoGR%2BZf%2Fz1BARnDHzGt9kscG02w1Ve3uyXMKVX9rKYUxutOvI8YWhhLkSAPz2FtrcFbWyFwKD%2FqLTjS47Gmmw8WJiVHVkxW%2FzdZZ7N3%2BAVDHDMMgKDmQrXjkbCoEsYkxt5TmCQWpUD6WbiRBuWvNek%2Bli2KIEuYp829fg%2FfddTDcPFotjrBDz6ZbPcIzYJ9gqlozyW0J%2BAGDHAL4TPP%2BrZVOPJhPKA2EECc1YI0yPixiFxTAIhsyQNqi%2BrynppHuKkuxxdNu8RVhOkfjTUitUEAMO0Cp861Idegxj2V%2BkIz3CjYRkDoAZ97YZEVGbVpqH38zfBkiTS8C%2Fcs6vPcb22NMNUqtoFWoIB4EFKTC9zMjEBjqkATqnAXKPBZpVTBbuKhl%2FOZhg5TN3jdGbTg1HhPd%2BZrH%2BVXZGQSkk1o01uVXFojwKi%2Fe87ILXThtBRZtdI6fJcE5G0%2FvpeZAy3KZZsdIF6NYlVmzdiLEeBq2sNyIPF8c6nKAYz4WoevtuZOmSZKZl843WjL%2FNVAJ2njYvWCEk%2ByBb9hAU9AECA%2BJAYdeQKvJZguYJZ%2FENx8Y%2FEG02LCIk205WSsvC&X-Amz-Signature=9e2534d0d7817bf4c81e2ce642c9ee4c2e651b6ee96edf441ead7b0b010b45b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TH3DEBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVKMgUJ1eEEdArgchHE0u6M3v8khJw4x1G1SF7BOo1TgIhAJYkWFjUMkFqdraUPw0VkwhN90LOoSxGo%2FNgVdkmLUAQKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMTKOgN%2BjEjI9MP7Eq3AMhiWybDvHm6oUPfFubv6MWPgBQTtbU4w5mUAYqeTridjBgoDxQGnM3tGjZ7TSp0vZCHpUq7gIlfYLSLwmvLABt%2F%2FQJwt9nmpjB6U7yAIiBPhlS8raTGFhaF1xG8mu7l3NHq91jPL%2FLo6GzlkFhRVwdEQjYdzEb%2FEWjl1XtoqbRBoLke3MXOflDKBLLIGVTcr3YYLoK3AlXF0BburN8H9k7C5t0sA6vDLBxLrP%2FTTiy38gHCI%2FrcHSlWELhC1Kcox060uhrUrNyNhUoGFZj7dSKoGR%2BZf%2Fz1BARnDHzGt9kscG02w1Ve3uyXMKVX9rKYUxutOvI8YWhhLkSAPz2FtrcFbWyFwKD%2FqLTjS47Gmmw8WJiVHVkxW%2FzdZZ7N3%2BAVDHDMMgKDmQrXjkbCoEsYkxt5TmCQWpUD6WbiRBuWvNek%2Bli2KIEuYp829fg%2FfddTDcPFotjrBDz6ZbPcIzYJ9gqlozyW0J%2BAGDHAL4TPP%2BrZVOPJhPKA2EECc1YI0yPixiFxTAIhsyQNqi%2BrynppHuKkuxxdNu8RVhOkfjTUitUEAMO0Cp861Idegxj2V%2BkIz3CjYRkDoAZ97YZEVGbVpqH38zfBkiTS8C%2Fcs6vPcb22NMNUqtoFWoIB4EFKTC9zMjEBjqkATqnAXKPBZpVTBbuKhl%2FOZhg5TN3jdGbTg1HhPd%2BZrH%2BVXZGQSkk1o01uVXFojwKi%2Fe87ILXThtBRZtdI6fJcE5G0%2FvpeZAy3KZZsdIF6NYlVmzdiLEeBq2sNyIPF8c6nKAYz4WoevtuZOmSZKZl843WjL%2FNVAJ2njYvWCEk%2ByBb9hAU9AECA%2BJAYdeQKvJZguYJZ%2FENx8Y%2FEG02LCIk205WSsvC&X-Amz-Signature=40e768e32b2ac76faa42590be5036cea7ba773b105195b5ab8f1961676fe744a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TH3DEBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVKMgUJ1eEEdArgchHE0u6M3v8khJw4x1G1SF7BOo1TgIhAJYkWFjUMkFqdraUPw0VkwhN90LOoSxGo%2FNgVdkmLUAQKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMTKOgN%2BjEjI9MP7Eq3AMhiWybDvHm6oUPfFubv6MWPgBQTtbU4w5mUAYqeTridjBgoDxQGnM3tGjZ7TSp0vZCHpUq7gIlfYLSLwmvLABt%2F%2FQJwt9nmpjB6U7yAIiBPhlS8raTGFhaF1xG8mu7l3NHq91jPL%2FLo6GzlkFhRVwdEQjYdzEb%2FEWjl1XtoqbRBoLke3MXOflDKBLLIGVTcr3YYLoK3AlXF0BburN8H9k7C5t0sA6vDLBxLrP%2FTTiy38gHCI%2FrcHSlWELhC1Kcox060uhrUrNyNhUoGFZj7dSKoGR%2BZf%2Fz1BARnDHzGt9kscG02w1Ve3uyXMKVX9rKYUxutOvI8YWhhLkSAPz2FtrcFbWyFwKD%2FqLTjS47Gmmw8WJiVHVkxW%2FzdZZ7N3%2BAVDHDMMgKDmQrXjkbCoEsYkxt5TmCQWpUD6WbiRBuWvNek%2Bli2KIEuYp829fg%2FfddTDcPFotjrBDz6ZbPcIzYJ9gqlozyW0J%2BAGDHAL4TPP%2BrZVOPJhPKA2EECc1YI0yPixiFxTAIhsyQNqi%2BrynppHuKkuxxdNu8RVhOkfjTUitUEAMO0Cp861Idegxj2V%2BkIz3CjYRkDoAZ97YZEVGbVpqH38zfBkiTS8C%2Fcs6vPcb22NMNUqtoFWoIB4EFKTC9zMjEBjqkATqnAXKPBZpVTBbuKhl%2FOZhg5TN3jdGbTg1HhPd%2BZrH%2BVXZGQSkk1o01uVXFojwKi%2Fe87ILXThtBRZtdI6fJcE5G0%2FvpeZAy3KZZsdIF6NYlVmzdiLEeBq2sNyIPF8c6nKAYz4WoevtuZOmSZKZl843WjL%2FNVAJ2njYvWCEk%2ByBb9hAU9AECA%2BJAYdeQKvJZguYJZ%2FENx8Y%2FEG02LCIk205WSsvC&X-Amz-Signature=7c982db5ae5b271bebd38364a3855ecce44ea894f382d7bf6cdfbdff321f071e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TH3DEBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVKMgUJ1eEEdArgchHE0u6M3v8khJw4x1G1SF7BOo1TgIhAJYkWFjUMkFqdraUPw0VkwhN90LOoSxGo%2FNgVdkmLUAQKv8DCGEQABoMNjM3NDIzMTgzODA1IgyMTKOgN%2BjEjI9MP7Eq3AMhiWybDvHm6oUPfFubv6MWPgBQTtbU4w5mUAYqeTridjBgoDxQGnM3tGjZ7TSp0vZCHpUq7gIlfYLSLwmvLABt%2F%2FQJwt9nmpjB6U7yAIiBPhlS8raTGFhaF1xG8mu7l3NHq91jPL%2FLo6GzlkFhRVwdEQjYdzEb%2FEWjl1XtoqbRBoLke3MXOflDKBLLIGVTcr3YYLoK3AlXF0BburN8H9k7C5t0sA6vDLBxLrP%2FTTiy38gHCI%2FrcHSlWELhC1Kcox060uhrUrNyNhUoGFZj7dSKoGR%2BZf%2Fz1BARnDHzGt9kscG02w1Ve3uyXMKVX9rKYUxutOvI8YWhhLkSAPz2FtrcFbWyFwKD%2FqLTjS47Gmmw8WJiVHVkxW%2FzdZZ7N3%2BAVDHDMMgKDmQrXjkbCoEsYkxt5TmCQWpUD6WbiRBuWvNek%2Bli2KIEuYp829fg%2FfddTDcPFotjrBDz6ZbPcIzYJ9gqlozyW0J%2BAGDHAL4TPP%2BrZVOPJhPKA2EECc1YI0yPixiFxTAIhsyQNqi%2BrynppHuKkuxxdNu8RVhOkfjTUitUEAMO0Cp861Idegxj2V%2BkIz3CjYRkDoAZ97YZEVGbVpqH38zfBkiTS8C%2Fcs6vPcb22NMNUqtoFWoIB4EFKTC9zMjEBjqkATqnAXKPBZpVTBbuKhl%2FOZhg5TN3jdGbTg1HhPd%2BZrH%2BVXZGQSkk1o01uVXFojwKi%2Fe87ILXThtBRZtdI6fJcE5G0%2FvpeZAy3KZZsdIF6NYlVmzdiLEeBq2sNyIPF8c6nKAYz4WoevtuZOmSZKZl843WjL%2FNVAJ2njYvWCEk%2ByBb9hAU9AECA%2BJAYdeQKvJZguYJZ%2FENx8Y%2FEG02LCIk205WSsvC&X-Amz-Signature=17cbc9f0da5d56a9fc164349f1a42336c0b07cdf66f84c6f878447fb56eb0d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
