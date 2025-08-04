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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AE3BDQH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0GoGYviVPjmIjFNGXHbA%2FaDf9%2FIC2JHCiNSwtjylSFQIhAK2OgPVsVMkk8RXgD725gBqCLlgBNdorfxD0Ajz8AIuFKv8DCFAQABoMNjM3NDIzMTgzODA1Igw3l7eXlrvi7iVamTwq3AMB8A6Lqhwqb%2Fw6PYpnRqqzZeylKnJOsz36iEtqu5%2BP%2BEh9SK%2BZ9QyO7gSKg4uiwNWQq7pzesbsHIYLrKrFL%2B2vmz1m2n1emWLKdlbAuzk2CCLSws7hDmJqXNyfI54rvHKeXnQIQ0hP1FV6N%2FgUbDyLPgqDEuk2CSoKuJU00%2Fdc9DjeNRJXJ1fWG7bVt0SFRrvlgybd8gNcuZPWKJ4G2C40KNO6hwCldENZ%2BFXolh8C2g%2B%2B%2BItIMsD6tF8gDyXOWYEyASnQMMQNIhUDnTmaoyC71VzBjJtc7tRA%2FNrtu2vDb3GBgezCyWtKCVhGVJbIs0%2BWefQNLdSOV9VsPBp0jrAzRvQ6brvlSWMsxlMDa9ZgNVFcYof3BSIA7WTEh0MMx%2B3fxN%2F7LUxlQE1lRG%2BZzI6yVzErC8Si5vSjFk1BJR4pW2g%2FptyhF5unfJkGFPNL%2FLnpml0NLUJmXLzmZzdE7OsXooI4Cy0e%2FF5DaAnRZ9PfUiHswVaL7wkPjC3cdBWYywlcJjNTiWkDNGJAEgmWUccbK5ALy6NxpoJpiMdQ7MsBkDhlG7bCy2v0kJKun0UZD8lIb7zG1ZQ1PQ97JpFCdqJTVbiYaTJdRqQzSHNQNYRFwoTCjGwTldHhmva4BDDB9MTEBjqkAaaJe2D5cdZ1oZIM0SXYTC2DwBLc6SuP6O%2FLUl6o6lCrReeLlSl%2B8yNCHzL8W3Bb3pXNqfBXkf%2BjtDiFCKjZAWwr03owgwq%2FVrdaV1aDlq8ez58nYSzICPXQl3yfQfQAB5PT0iYmES%2Bp1Bz5y%2FKIpLiyXVq7f1C0daiwkT8OXQHkB5lLI6cioTJ6iTopDoors3%2BowUMoOWi112tmECgdJEoyymzy&X-Amz-Signature=713a357bcccefd1fb122e66d665cce0beb4ac6b1af04c1688b435ac5c89aa3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=ca92495cb724808d2056b126a7e24a84ae75d54d56c123534f381028f8e732e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=6173bdd4a6cf94a9feb12dfdeed8e68f5d2d8ea89d1db56ad93e4fd1f16e2647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=122ed37680605ffec8b413835e64b87c6d1ee443b354f259fc7a9f8ab8228289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=3c934ec212bed952b4bc882f3f85c298c58d8fd60ad20caa163e984b46518cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=d48dac3e65469fc2e5da4479a9fa4a3cb8ba2a1ac994b5049157ba43a49f2c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=edcb9b13d979c38ebfdb4caaeed243b66dca58b27b20e176c4ff407029d44b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=89011a08285ead4052770f15bbe75b977b482a8b5fd286dbf497535e8c65e352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=9773dddf8fabd0fd91855e463a7825e4ff7bd879e40bc286fe803aabf9d13370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=21a4c92c61f7ee9f3d4b5faddb1dbe597068d99520a3a0e395c0b2e045468d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=3c934ec212bed952b4bc882f3f85c298c58d8fd60ad20caa163e984b46518cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
