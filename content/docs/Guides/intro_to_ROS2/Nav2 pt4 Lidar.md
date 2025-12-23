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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDPPCRRG%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIApKp1Hiw3Ty9y7G96esLBo5P2WOOSrEu6CDDepvpziRAiEAnCM1FoTOz45FPN0tGOc3ENeL%2Fg6ZqW9M52HkryijjsYq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDBZjvYDPoCPD0ODs3yrcAy6qTsW5HlkEAPBaIVzwi%2FWQqnJMyluLJO4WFOEU9v28UxGU2bvQS9TebIXFfbatcyp8I3MnT2mI6kMwyFpmQzZd8MSg8VwUICvCIa52U7rLslzCF%2B2MuaG02CcoszbhHZDu3X0QsmFOfpOQJAaXubD4O%2BkhNU8xy0dFeHt%2F%2Bag1tv1InbDvgAwBdBFHxwhIHf6puJu3QWoo511j2tESwePIsg98qY3aEb72YHEzxI%2BesUxD2DMOdPsT%2FGhe4wQWqMZWV38ippOx3Rj88CSvimnG6Yav6Ul3wIv%2BsHn24foTtXsE5TB3mzb%2Fn3PtXbGnumkaA4VAuO0eAmx1d%2Fdl%2BKtLnWElYtmo7kNQhxmohWEFAe5%2FaUdeqkUbOXDbOXUq4Soshb1zdmni5eloqb5sQ03mS5jxpTH0w%2B5LINGKAxpjQ1X9qS5Abk76rWn0MsIbsarS3HSaBzBfUf5OZSJ44s%2Be7OCXcYrssVTOJMH%2BWRMzRYzbiFA3SVnCp5Nu0Pl9cJf5xUxc7h9u0P2%2BCu06HV3X5MS35ttwhLVtvaILhMTqJgpHOz1kdYFmU8GikBFAIuZNWQVwCTwnluzvAF%2FPXnLQxxDzGo4%2BnIG1B5AxetrowR%2B1eN1AXbLn5o8bMObfp8oGOqUBUaQrzrUTGGA2DalP6y7b%2FNG5BRNQK8T6g%2BXh7sIkoA4lFIlWVkswtx%2FkHPxM6KX2OZSLjQ3RQCQvjrHFdWO3%2FztWDIsTdx9JC9ow4EoKj8jFfFVjzhw6DX%2Bkcsa9iEKTq76VYhGUJ%2FvPPIc82jC8MGbNgClyBujwxJBmD7bWgFSP%2FqR%2BBgak1qzTmqqQ8%2B0S8rQ234jbsUJyD7Ilg%2FvBcDQt7f4R&X-Amz-Signature=0fb5cd851ce531d3cd7410787fc78f3917f681335ff1ad61cbdef62205cf9685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725XGFOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAoGAkpj6XZ0unrJxDjeWEpzawQ1U6uzrmdVaah0LQfyAiEAlQxcNv4JoWHnqAUqxD3ojCiQ%2FAnnkLJ2DTKuqH0HFYUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEwFC7hj93fdZCuyRCrcAyk%2FJRRnCOFAHprQV1GC%2F7UXuMXTWUlo9GBFgZlV6nJOcYYUh7MPpHRjARUTNayB%2FtR7F%2BgwUX8fDw7Ti6wHR3hSRXaz%2BsCul7tWzGfKqzxbbaUscO7teF7POyaku2SFIJkiIDVa5nuXK4iRDERVISE4lgt6uQm13ytHvXxxhEFFqDBwm4SBHqqyAbkxPO97zcRLP587ZGPZ7rQM0djT6cyxfMZY81lD1yD6ifteZpg%2B8FiA3O1bpisWlki6wkCBVwfMgxcDC3oaCSEm2cbIsAh3zaMIGCpTDM%2FRVJVVVaVg3GewRSN8OaPnMZCUN%2F1Gw4KBGj5zukcUhQTM4SxQniHTt2QrQvVXSJN7p0FYcRHUJa5EI8gDFKkAx3JBvOy64vamo0f6kGC8NDLfHllweTjAOyhkbky30%2B%2FFjTQcFonhdQ7Fe7dX0zsejwAkh2DIoC%2BsV6fpgB4Q1eHgDlNSb5lOLbIeq62lwZY7WChqIB3ZhIhgCtiyclF5hG2yjt1nkYmEyZqdHE1W4oXXP4fD%2FurW%2FHjgqqN5HKZZwDdQRb66p2%2B2d2I083CsM4wmIR8UZBDs0p7HgpJnLpOPvrDpOroE0OqM9qYZHwcXZ8khH%2FMI3HVdv1jL%2FPTiSglHMKTgp8oGOqUBQ19R4XdRZOFtBh5sXvBYGda01rsPuVSAF%2BTTNWmTAZbDtR9XO4K%2BZ3OGffzk9NI6v2hpT0IehAbgwCOzCiAx09XuLSA2OTvh7OqniDeV8GA2Ocrb92npLIJM803Ol%2F7vl8aWcDrpv3xe7w1qZEKrMGsoQfQxG3f6to%2FR1eSyBUQFYYq4DoH0KbC8RUEdrFujijUAaHnIdLJYR2irOgK6zF8q4N6m&X-Amz-Signature=fbc4762b8f8e05eba808f6ea1a492b428ae22bb2a63586264dee4f6ccf0c6b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725XGFOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAoGAkpj6XZ0unrJxDjeWEpzawQ1U6uzrmdVaah0LQfyAiEAlQxcNv4JoWHnqAUqxD3ojCiQ%2FAnnkLJ2DTKuqH0HFYUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEwFC7hj93fdZCuyRCrcAyk%2FJRRnCOFAHprQV1GC%2F7UXuMXTWUlo9GBFgZlV6nJOcYYUh7MPpHRjARUTNayB%2FtR7F%2BgwUX8fDw7Ti6wHR3hSRXaz%2BsCul7tWzGfKqzxbbaUscO7teF7POyaku2SFIJkiIDVa5nuXK4iRDERVISE4lgt6uQm13ytHvXxxhEFFqDBwm4SBHqqyAbkxPO97zcRLP587ZGPZ7rQM0djT6cyxfMZY81lD1yD6ifteZpg%2B8FiA3O1bpisWlki6wkCBVwfMgxcDC3oaCSEm2cbIsAh3zaMIGCpTDM%2FRVJVVVaVg3GewRSN8OaPnMZCUN%2F1Gw4KBGj5zukcUhQTM4SxQniHTt2QrQvVXSJN7p0FYcRHUJa5EI8gDFKkAx3JBvOy64vamo0f6kGC8NDLfHllweTjAOyhkbky30%2B%2FFjTQcFonhdQ7Fe7dX0zsejwAkh2DIoC%2BsV6fpgB4Q1eHgDlNSb5lOLbIeq62lwZY7WChqIB3ZhIhgCtiyclF5hG2yjt1nkYmEyZqdHE1W4oXXP4fD%2FurW%2FHjgqqN5HKZZwDdQRb66p2%2B2d2I083CsM4wmIR8UZBDs0p7HgpJnLpOPvrDpOroE0OqM9qYZHwcXZ8khH%2FMI3HVdv1jL%2FPTiSglHMKTgp8oGOqUBQ19R4XdRZOFtBh5sXvBYGda01rsPuVSAF%2BTTNWmTAZbDtR9XO4K%2BZ3OGffzk9NI6v2hpT0IehAbgwCOzCiAx09XuLSA2OTvh7OqniDeV8GA2Ocrb92npLIJM803Ol%2F7vl8aWcDrpv3xe7w1qZEKrMGsoQfQxG3f6to%2FR1eSyBUQFYYq4DoH0KbC8RUEdrFujijUAaHnIdLJYR2irOgK6zF8q4N6m&X-Amz-Signature=4fcbf5f5a7deb82f83270c1a0985d5c4005d33ea40416acf2d73547e7ffdaee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725XGFOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAoGAkpj6XZ0unrJxDjeWEpzawQ1U6uzrmdVaah0LQfyAiEAlQxcNv4JoWHnqAUqxD3ojCiQ%2FAnnkLJ2DTKuqH0HFYUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEwFC7hj93fdZCuyRCrcAyk%2FJRRnCOFAHprQV1GC%2F7UXuMXTWUlo9GBFgZlV6nJOcYYUh7MPpHRjARUTNayB%2FtR7F%2BgwUX8fDw7Ti6wHR3hSRXaz%2BsCul7tWzGfKqzxbbaUscO7teF7POyaku2SFIJkiIDVa5nuXK4iRDERVISE4lgt6uQm13ytHvXxxhEFFqDBwm4SBHqqyAbkxPO97zcRLP587ZGPZ7rQM0djT6cyxfMZY81lD1yD6ifteZpg%2B8FiA3O1bpisWlki6wkCBVwfMgxcDC3oaCSEm2cbIsAh3zaMIGCpTDM%2FRVJVVVaVg3GewRSN8OaPnMZCUN%2F1Gw4KBGj5zukcUhQTM4SxQniHTt2QrQvVXSJN7p0FYcRHUJa5EI8gDFKkAx3JBvOy64vamo0f6kGC8NDLfHllweTjAOyhkbky30%2B%2FFjTQcFonhdQ7Fe7dX0zsejwAkh2DIoC%2BsV6fpgB4Q1eHgDlNSb5lOLbIeq62lwZY7WChqIB3ZhIhgCtiyclF5hG2yjt1nkYmEyZqdHE1W4oXXP4fD%2FurW%2FHjgqqN5HKZZwDdQRb66p2%2B2d2I083CsM4wmIR8UZBDs0p7HgpJnLpOPvrDpOroE0OqM9qYZHwcXZ8khH%2FMI3HVdv1jL%2FPTiSglHMKTgp8oGOqUBQ19R4XdRZOFtBh5sXvBYGda01rsPuVSAF%2BTTNWmTAZbDtR9XO4K%2BZ3OGffzk9NI6v2hpT0IehAbgwCOzCiAx09XuLSA2OTvh7OqniDeV8GA2Ocrb92npLIJM803Ol%2F7vl8aWcDrpv3xe7w1qZEKrMGsoQfQxG3f6to%2FR1eSyBUQFYYq4DoH0KbC8RUEdrFujijUAaHnIdLJYR2irOgK6zF8q4N6m&X-Amz-Signature=06746bd5fae44ba2555a9cc6ed4dc79205a340d674fcb63cc407cbc04b811f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725XGFOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAoGAkpj6XZ0unrJxDjeWEpzawQ1U6uzrmdVaah0LQfyAiEAlQxcNv4JoWHnqAUqxD3ojCiQ%2FAnnkLJ2DTKuqH0HFYUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEwFC7hj93fdZCuyRCrcAyk%2FJRRnCOFAHprQV1GC%2F7UXuMXTWUlo9GBFgZlV6nJOcYYUh7MPpHRjARUTNayB%2FtR7F%2BgwUX8fDw7Ti6wHR3hSRXaz%2BsCul7tWzGfKqzxbbaUscO7teF7POyaku2SFIJkiIDVa5nuXK4iRDERVISE4lgt6uQm13ytHvXxxhEFFqDBwm4SBHqqyAbkxPO97zcRLP587ZGPZ7rQM0djT6cyxfMZY81lD1yD6ifteZpg%2B8FiA3O1bpisWlki6wkCBVwfMgxcDC3oaCSEm2cbIsAh3zaMIGCpTDM%2FRVJVVVaVg3GewRSN8OaPnMZCUN%2F1Gw4KBGj5zukcUhQTM4SxQniHTt2QrQvVXSJN7p0FYcRHUJa5EI8gDFKkAx3JBvOy64vamo0f6kGC8NDLfHllweTjAOyhkbky30%2B%2FFjTQcFonhdQ7Fe7dX0zsejwAkh2DIoC%2BsV6fpgB4Q1eHgDlNSb5lOLbIeq62lwZY7WChqIB3ZhIhgCtiyclF5hG2yjt1nkYmEyZqdHE1W4oXXP4fD%2FurW%2FHjgqqN5HKZZwDdQRb66p2%2B2d2I083CsM4wmIR8UZBDs0p7HgpJnLpOPvrDpOroE0OqM9qYZHwcXZ8khH%2FMI3HVdv1jL%2FPTiSglHMKTgp8oGOqUBQ19R4XdRZOFtBh5sXvBYGda01rsPuVSAF%2BTTNWmTAZbDtR9XO4K%2BZ3OGffzk9NI6v2hpT0IehAbgwCOzCiAx09XuLSA2OTvh7OqniDeV8GA2Ocrb92npLIJM803Ol%2F7vl8aWcDrpv3xe7w1qZEKrMGsoQfQxG3f6to%2FR1eSyBUQFYYq4DoH0KbC8RUEdrFujijUAaHnIdLJYR2irOgK6zF8q4N6m&X-Amz-Signature=b3406f6c02f188545e0b67fee2bf00774786a326dde1843fe914a4de23e60377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725XGFOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAoGAkpj6XZ0unrJxDjeWEpzawQ1U6uzrmdVaah0LQfyAiEAlQxcNv4JoWHnqAUqxD3ojCiQ%2FAnnkLJ2DTKuqH0HFYUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEwFC7hj93fdZCuyRCrcAyk%2FJRRnCOFAHprQV1GC%2F7UXuMXTWUlo9GBFgZlV6nJOcYYUh7MPpHRjARUTNayB%2FtR7F%2BgwUX8fDw7Ti6wHR3hSRXaz%2BsCul7tWzGfKqzxbbaUscO7teF7POyaku2SFIJkiIDVa5nuXK4iRDERVISE4lgt6uQm13ytHvXxxhEFFqDBwm4SBHqqyAbkxPO97zcRLP587ZGPZ7rQM0djT6cyxfMZY81lD1yD6ifteZpg%2B8FiA3O1bpisWlki6wkCBVwfMgxcDC3oaCSEm2cbIsAh3zaMIGCpTDM%2FRVJVVVaVg3GewRSN8OaPnMZCUN%2F1Gw4KBGj5zukcUhQTM4SxQniHTt2QrQvVXSJN7p0FYcRHUJa5EI8gDFKkAx3JBvOy64vamo0f6kGC8NDLfHllweTjAOyhkbky30%2B%2FFjTQcFonhdQ7Fe7dX0zsejwAkh2DIoC%2BsV6fpgB4Q1eHgDlNSb5lOLbIeq62lwZY7WChqIB3ZhIhgCtiyclF5hG2yjt1nkYmEyZqdHE1W4oXXP4fD%2FurW%2FHjgqqN5HKZZwDdQRb66p2%2B2d2I083CsM4wmIR8UZBDs0p7HgpJnLpOPvrDpOroE0OqM9qYZHwcXZ8khH%2FMI3HVdv1jL%2FPTiSglHMKTgp8oGOqUBQ19R4XdRZOFtBh5sXvBYGda01rsPuVSAF%2BTTNWmTAZbDtR9XO4K%2BZ3OGffzk9NI6v2hpT0IehAbgwCOzCiAx09XuLSA2OTvh7OqniDeV8GA2Ocrb92npLIJM803Ol%2F7vl8aWcDrpv3xe7w1qZEKrMGsoQfQxG3f6to%2FR1eSyBUQFYYq4DoH0KbC8RUEdrFujijUAaHnIdLJYR2irOgK6zF8q4N6m&X-Amz-Signature=e8ab0b50ff4b9edbbe611b95c63b3cf3e0857c2e6a12aa35ed28786568ce24e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725XGFOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAoGAkpj6XZ0unrJxDjeWEpzawQ1U6uzrmdVaah0LQfyAiEAlQxcNv4JoWHnqAUqxD3ojCiQ%2FAnnkLJ2DTKuqH0HFYUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEwFC7hj93fdZCuyRCrcAyk%2FJRRnCOFAHprQV1GC%2F7UXuMXTWUlo9GBFgZlV6nJOcYYUh7MPpHRjARUTNayB%2FtR7F%2BgwUX8fDw7Ti6wHR3hSRXaz%2BsCul7tWzGfKqzxbbaUscO7teF7POyaku2SFIJkiIDVa5nuXK4iRDERVISE4lgt6uQm13ytHvXxxhEFFqDBwm4SBHqqyAbkxPO97zcRLP587ZGPZ7rQM0djT6cyxfMZY81lD1yD6ifteZpg%2B8FiA3O1bpisWlki6wkCBVwfMgxcDC3oaCSEm2cbIsAh3zaMIGCpTDM%2FRVJVVVaVg3GewRSN8OaPnMZCUN%2F1Gw4KBGj5zukcUhQTM4SxQniHTt2QrQvVXSJN7p0FYcRHUJa5EI8gDFKkAx3JBvOy64vamo0f6kGC8NDLfHllweTjAOyhkbky30%2B%2FFjTQcFonhdQ7Fe7dX0zsejwAkh2DIoC%2BsV6fpgB4Q1eHgDlNSb5lOLbIeq62lwZY7WChqIB3ZhIhgCtiyclF5hG2yjt1nkYmEyZqdHE1W4oXXP4fD%2FurW%2FHjgqqN5HKZZwDdQRb66p2%2B2d2I083CsM4wmIR8UZBDs0p7HgpJnLpOPvrDpOroE0OqM9qYZHwcXZ8khH%2FMI3HVdv1jL%2FPTiSglHMKTgp8oGOqUBQ19R4XdRZOFtBh5sXvBYGda01rsPuVSAF%2BTTNWmTAZbDtR9XO4K%2BZ3OGffzk9NI6v2hpT0IehAbgwCOzCiAx09XuLSA2OTvh7OqniDeV8GA2Ocrb92npLIJM803Ol%2F7vl8aWcDrpv3xe7w1qZEKrMGsoQfQxG3f6to%2FR1eSyBUQFYYq4DoH0KbC8RUEdrFujijUAaHnIdLJYR2irOgK6zF8q4N6m&X-Amz-Signature=c7d902d31a2ff089faa6ef1b6029f6bc7fcd25df693d4c1e5dbfb696648b967f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725XGFOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAoGAkpj6XZ0unrJxDjeWEpzawQ1U6uzrmdVaah0LQfyAiEAlQxcNv4JoWHnqAUqxD3ojCiQ%2FAnnkLJ2DTKuqH0HFYUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEwFC7hj93fdZCuyRCrcAyk%2FJRRnCOFAHprQV1GC%2F7UXuMXTWUlo9GBFgZlV6nJOcYYUh7MPpHRjARUTNayB%2FtR7F%2BgwUX8fDw7Ti6wHR3hSRXaz%2BsCul7tWzGfKqzxbbaUscO7teF7POyaku2SFIJkiIDVa5nuXK4iRDERVISE4lgt6uQm13ytHvXxxhEFFqDBwm4SBHqqyAbkxPO97zcRLP587ZGPZ7rQM0djT6cyxfMZY81lD1yD6ifteZpg%2B8FiA3O1bpisWlki6wkCBVwfMgxcDC3oaCSEm2cbIsAh3zaMIGCpTDM%2FRVJVVVaVg3GewRSN8OaPnMZCUN%2F1Gw4KBGj5zukcUhQTM4SxQniHTt2QrQvVXSJN7p0FYcRHUJa5EI8gDFKkAx3JBvOy64vamo0f6kGC8NDLfHllweTjAOyhkbky30%2B%2FFjTQcFonhdQ7Fe7dX0zsejwAkh2DIoC%2BsV6fpgB4Q1eHgDlNSb5lOLbIeq62lwZY7WChqIB3ZhIhgCtiyclF5hG2yjt1nkYmEyZqdHE1W4oXXP4fD%2FurW%2FHjgqqN5HKZZwDdQRb66p2%2B2d2I083CsM4wmIR8UZBDs0p7HgpJnLpOPvrDpOroE0OqM9qYZHwcXZ8khH%2FMI3HVdv1jL%2FPTiSglHMKTgp8oGOqUBQ19R4XdRZOFtBh5sXvBYGda01rsPuVSAF%2BTTNWmTAZbDtR9XO4K%2BZ3OGffzk9NI6v2hpT0IehAbgwCOzCiAx09XuLSA2OTvh7OqniDeV8GA2Ocrb92npLIJM803Ol%2F7vl8aWcDrpv3xe7w1qZEKrMGsoQfQxG3f6to%2FR1eSyBUQFYYq4DoH0KbC8RUEdrFujijUAaHnIdLJYR2irOgK6zF8q4N6m&X-Amz-Signature=564a29a1a21bc732dc01dce3a06024a6951387a07a0084d5eaa1d8abdcae22e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725XGFOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAoGAkpj6XZ0unrJxDjeWEpzawQ1U6uzrmdVaah0LQfyAiEAlQxcNv4JoWHnqAUqxD3ojCiQ%2FAnnkLJ2DTKuqH0HFYUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEwFC7hj93fdZCuyRCrcAyk%2FJRRnCOFAHprQV1GC%2F7UXuMXTWUlo9GBFgZlV6nJOcYYUh7MPpHRjARUTNayB%2FtR7F%2BgwUX8fDw7Ti6wHR3hSRXaz%2BsCul7tWzGfKqzxbbaUscO7teF7POyaku2SFIJkiIDVa5nuXK4iRDERVISE4lgt6uQm13ytHvXxxhEFFqDBwm4SBHqqyAbkxPO97zcRLP587ZGPZ7rQM0djT6cyxfMZY81lD1yD6ifteZpg%2B8FiA3O1bpisWlki6wkCBVwfMgxcDC3oaCSEm2cbIsAh3zaMIGCpTDM%2FRVJVVVaVg3GewRSN8OaPnMZCUN%2F1Gw4KBGj5zukcUhQTM4SxQniHTt2QrQvVXSJN7p0FYcRHUJa5EI8gDFKkAx3JBvOy64vamo0f6kGC8NDLfHllweTjAOyhkbky30%2B%2FFjTQcFonhdQ7Fe7dX0zsejwAkh2DIoC%2BsV6fpgB4Q1eHgDlNSb5lOLbIeq62lwZY7WChqIB3ZhIhgCtiyclF5hG2yjt1nkYmEyZqdHE1W4oXXP4fD%2FurW%2FHjgqqN5HKZZwDdQRb66p2%2B2d2I083CsM4wmIR8UZBDs0p7HgpJnLpOPvrDpOroE0OqM9qYZHwcXZ8khH%2FMI3HVdv1jL%2FPTiSglHMKTgp8oGOqUBQ19R4XdRZOFtBh5sXvBYGda01rsPuVSAF%2BTTNWmTAZbDtR9XO4K%2BZ3OGffzk9NI6v2hpT0IehAbgwCOzCiAx09XuLSA2OTvh7OqniDeV8GA2Ocrb92npLIJM803Ol%2F7vl8aWcDrpv3xe7w1qZEKrMGsoQfQxG3f6to%2FR1eSyBUQFYYq4DoH0KbC8RUEdrFujijUAaHnIdLJYR2irOgK6zF8q4N6m&X-Amz-Signature=0b41daa9c0409deacdbf13f3e038736bdcaf28154075aadc389a79ad2d192a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725XGFOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAoGAkpj6XZ0unrJxDjeWEpzawQ1U6uzrmdVaah0LQfyAiEAlQxcNv4JoWHnqAUqxD3ojCiQ%2FAnnkLJ2DTKuqH0HFYUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEwFC7hj93fdZCuyRCrcAyk%2FJRRnCOFAHprQV1GC%2F7UXuMXTWUlo9GBFgZlV6nJOcYYUh7MPpHRjARUTNayB%2FtR7F%2BgwUX8fDw7Ti6wHR3hSRXaz%2BsCul7tWzGfKqzxbbaUscO7teF7POyaku2SFIJkiIDVa5nuXK4iRDERVISE4lgt6uQm13ytHvXxxhEFFqDBwm4SBHqqyAbkxPO97zcRLP587ZGPZ7rQM0djT6cyxfMZY81lD1yD6ifteZpg%2B8FiA3O1bpisWlki6wkCBVwfMgxcDC3oaCSEm2cbIsAh3zaMIGCpTDM%2FRVJVVVaVg3GewRSN8OaPnMZCUN%2F1Gw4KBGj5zukcUhQTM4SxQniHTt2QrQvVXSJN7p0FYcRHUJa5EI8gDFKkAx3JBvOy64vamo0f6kGC8NDLfHllweTjAOyhkbky30%2B%2FFjTQcFonhdQ7Fe7dX0zsejwAkh2DIoC%2BsV6fpgB4Q1eHgDlNSb5lOLbIeq62lwZY7WChqIB3ZhIhgCtiyclF5hG2yjt1nkYmEyZqdHE1W4oXXP4fD%2FurW%2FHjgqqN5HKZZwDdQRb66p2%2B2d2I083CsM4wmIR8UZBDs0p7HgpJnLpOPvrDpOroE0OqM9qYZHwcXZ8khH%2FMI3HVdv1jL%2FPTiSglHMKTgp8oGOqUBQ19R4XdRZOFtBh5sXvBYGda01rsPuVSAF%2BTTNWmTAZbDtR9XO4K%2BZ3OGffzk9NI6v2hpT0IehAbgwCOzCiAx09XuLSA2OTvh7OqniDeV8GA2Ocrb92npLIJM803Ol%2F7vl8aWcDrpv3xe7w1qZEKrMGsoQfQxG3f6to%2FR1eSyBUQFYYq4DoH0KbC8RUEdrFujijUAaHnIdLJYR2irOgK6zF8q4N6m&X-Amz-Signature=90cbf5b639260bd031be3e1c97ecafb3db796621d998422d9faa9fd5a6e609e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466725XGFOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAoGAkpj6XZ0unrJxDjeWEpzawQ1U6uzrmdVaah0LQfyAiEAlQxcNv4JoWHnqAUqxD3ojCiQ%2FAnnkLJ2DTKuqH0HFYUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEwFC7hj93fdZCuyRCrcAyk%2FJRRnCOFAHprQV1GC%2F7UXuMXTWUlo9GBFgZlV6nJOcYYUh7MPpHRjARUTNayB%2FtR7F%2BgwUX8fDw7Ti6wHR3hSRXaz%2BsCul7tWzGfKqzxbbaUscO7teF7POyaku2SFIJkiIDVa5nuXK4iRDERVISE4lgt6uQm13ytHvXxxhEFFqDBwm4SBHqqyAbkxPO97zcRLP587ZGPZ7rQM0djT6cyxfMZY81lD1yD6ifteZpg%2B8FiA3O1bpisWlki6wkCBVwfMgxcDC3oaCSEm2cbIsAh3zaMIGCpTDM%2FRVJVVVaVg3GewRSN8OaPnMZCUN%2F1Gw4KBGj5zukcUhQTM4SxQniHTt2QrQvVXSJN7p0FYcRHUJa5EI8gDFKkAx3JBvOy64vamo0f6kGC8NDLfHllweTjAOyhkbky30%2B%2FFjTQcFonhdQ7Fe7dX0zsejwAkh2DIoC%2BsV6fpgB4Q1eHgDlNSb5lOLbIeq62lwZY7WChqIB3ZhIhgCtiyclF5hG2yjt1nkYmEyZqdHE1W4oXXP4fD%2FurW%2FHjgqqN5HKZZwDdQRb66p2%2B2d2I083CsM4wmIR8UZBDs0p7HgpJnLpOPvrDpOroE0OqM9qYZHwcXZ8khH%2FMI3HVdv1jL%2FPTiSglHMKTgp8oGOqUBQ19R4XdRZOFtBh5sXvBYGda01rsPuVSAF%2BTTNWmTAZbDtR9XO4K%2BZ3OGffzk9NI6v2hpT0IehAbgwCOzCiAx09XuLSA2OTvh7OqniDeV8GA2Ocrb92npLIJM803Ol%2F7vl8aWcDrpv3xe7w1qZEKrMGsoQfQxG3f6to%2FR1eSyBUQFYYq4DoH0KbC8RUEdrFujijUAaHnIdLJYR2irOgK6zF8q4N6m&X-Amz-Signature=b3406f6c02f188545e0b67fee2bf00774786a326dde1843fe914a4de23e60377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
