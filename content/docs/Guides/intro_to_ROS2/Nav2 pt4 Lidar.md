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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBX6EMS%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxfCaR1VQUea1zPaum0xnrkm%2FhHFQ6tundxUMi3deOjAiA5%2Bfy2Q4ELmH2OPJ8ehXi2ypxcP6reJUGjHw%2BbDbwxLyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMqiLABpKRiYzIpuVQKtwDcpDWP3XDwx2PwyohCxEOot4HOuAMtSyUozkBmNERijQFn4VabLEwfnC5iw34S8VxDZG%2BEIxa7ud65%2FD9tZThUf1vh4HrXNqkVYclNXeuQD%2FDuFoXXH2at7ozf4qzrWDLADlodJQ3ug5XcucY7qFpH8yyArBNfmxZhDB5COEqzABNmgoEvVOrTwhLeUJkUnQ7pQJFcFisWhy9wTTBrk68XSP2jSn6lEZeaLlEPesETP5VsB3loAicbpqETfXdDAE6ixnQdypQEEHiVxaKpiRKfjEMOwJ5y5dgZwkct%2Ful3u091oNzE%2Fyi8lE4ubgnMW84UHRsYszbq8F7mKNZJsUmJET4a5AKzUl45WtrGfSh9gADPCpii9ulVlQ0UJlJx3bMPOYKzQwhghwa9Av69mO%2BOBoZNefJ2KaenlfUmcTufJB9nVHtuTNVUtyUSS%2F8ktg3n2IbVcPU8nbe7mIhyi0GAoBkAVpd6IeQNauOpDIfrcCl66VbEwqcIyzCIwaX8QPLY9lYOMNlhbdj50ggmUgR%2FFAnpqfj0FtOvK%2F34v18sNS%2FHPI1%2FYKbC9wc591Vf28q%2Fu0ng7vL3hOFGvjAFVTqDZEUmrwyxHUWmtpEAPKZPFtE4TxRrCxY9AKBKD0wiKq2xwY6pgF9pdKr7FleSfqbdbD38HVwP92Cbt%2BVteZaTpgIpUcvg0xNitRWOcIFWT3eehhMgAScQgvYbaP4hF8OB6iBjJIJSgNDnANP13D77uf%2FDrHWxa1u1xU%2BlBi%2FKbKEaMM1uzcaEPr4utMYCv2T%2Bsl%2B%2F2pQQpP8HJX00hSGgptO0kRIeiCmtFYsnJlZK9LXfDwzhuujQTuxP8kitBJF5Zhi3OZpMcyRZegi&X-Amz-Signature=a1597009b87773411b4c6fbc8d7b40b09342ca6aaa862e184101e86ed72c48db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDFAHPE%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMypPkVlvKO%2FLVVwWatzNq3pMxaleydtSHcXli3vF%2BAiAVYQOemGZRBmsYyZpkLOSPsyX26hyyGDTJRfGdtBtBfCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMORFF3P5ZM7EsF9TSKtwDMQF%2BHeoh5S4UhcNEO29KEkfxBMql3Qp%2FPnuSkBvMA71vPLNE8VCA6XmJVnYP86w%2F0wwkoWcpGUlOrdUfGtIlRFB5bodZibxOSPxLYcXhYV0ux65IWSFaOHdJl5oyTGF7TeAPsAp5CVq3DNZv%2BHTCCw4tFvCpETb6Gc8tls%2BW5799mTV2qGJ3OxSEESWVS0p90M%2FTUNW96Tk8mka2rPNPxjWwA98YW2CFVHSDgQPYd%2B6Y2%2B1C4NtXapYjAy69FkCWn76IM7IPmYLHND0PxXm2DzMs70wyu60RdFz%2FqYtrNb%2Fmr9YrugXuHMSjCsjteHeExRaNdPkoJUKTzxcyJGTIF12TjdCXxA%2BDpEHm%2B5VYhO01036eASQQWAq%2BI17RJdsDKCKijOozsR12ZtVKWDSMxK5tMHWJEO3jmFPldto%2FjRuRr8fyZhPv1VC5phgCqBrfMTNo6IhE%2F1xLh9vnIH9ZskPObZn0XBcANFMw29f3LC5zmqSTZEwPFygQAmb0Vt54BV5mpYygDiwP6pcMLAuzh0ssK70%2BelUuaOmALGE1gaYK%2FdPA3FbL96t5%2FMhvYld5T5HQFjIdLnLGQCuKPr%2BQVDzMntA%2Btmyl3%2F0JaOyVxHE7P8XNlAsekjPON14wh6q2xwY6pgHhkD7FExJ%2FzF09HtJdB2eEzvNKQ2smhKfGE283RvRtNcJBxrm2HSd5hcJNeeybdaO2shxRhnk0q2oQ3AcQ0QH2rBbp8t0Bt%2Fk%2FH%2BXOs8kiTJBjrlZLPmSVYAyr9G4EEQwdILEqn3s%2BJvYKJioYw3WNZJaE%2FV5Got2%2Fm6zhQFqxZlRvlXc%2BpD2LxTXcp7yqrQ79DNVbhh9Zaf7gQKS8EgCAwkMYIn8s&X-Amz-Signature=5b488fc557139456dfedfd8c3d1399e00a391e2d14dd85f4fda1fa8dea492244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDFAHPE%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMypPkVlvKO%2FLVVwWatzNq3pMxaleydtSHcXli3vF%2BAiAVYQOemGZRBmsYyZpkLOSPsyX26hyyGDTJRfGdtBtBfCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMORFF3P5ZM7EsF9TSKtwDMQF%2BHeoh5S4UhcNEO29KEkfxBMql3Qp%2FPnuSkBvMA71vPLNE8VCA6XmJVnYP86w%2F0wwkoWcpGUlOrdUfGtIlRFB5bodZibxOSPxLYcXhYV0ux65IWSFaOHdJl5oyTGF7TeAPsAp5CVq3DNZv%2BHTCCw4tFvCpETb6Gc8tls%2BW5799mTV2qGJ3OxSEESWVS0p90M%2FTUNW96Tk8mka2rPNPxjWwA98YW2CFVHSDgQPYd%2B6Y2%2B1C4NtXapYjAy69FkCWn76IM7IPmYLHND0PxXm2DzMs70wyu60RdFz%2FqYtrNb%2Fmr9YrugXuHMSjCsjteHeExRaNdPkoJUKTzxcyJGTIF12TjdCXxA%2BDpEHm%2B5VYhO01036eASQQWAq%2BI17RJdsDKCKijOozsR12ZtVKWDSMxK5tMHWJEO3jmFPldto%2FjRuRr8fyZhPv1VC5phgCqBrfMTNo6IhE%2F1xLh9vnIH9ZskPObZn0XBcANFMw29f3LC5zmqSTZEwPFygQAmb0Vt54BV5mpYygDiwP6pcMLAuzh0ssK70%2BelUuaOmALGE1gaYK%2FdPA3FbL96t5%2FMhvYld5T5HQFjIdLnLGQCuKPr%2BQVDzMntA%2Btmyl3%2F0JaOyVxHE7P8XNlAsekjPON14wh6q2xwY6pgHhkD7FExJ%2FzF09HtJdB2eEzvNKQ2smhKfGE283RvRtNcJBxrm2HSd5hcJNeeybdaO2shxRhnk0q2oQ3AcQ0QH2rBbp8t0Bt%2Fk%2FH%2BXOs8kiTJBjrlZLPmSVYAyr9G4EEQwdILEqn3s%2BJvYKJioYw3WNZJaE%2FV5Got2%2Fm6zhQFqxZlRvlXc%2BpD2LxTXcp7yqrQ79DNVbhh9Zaf7gQKS8EgCAwkMYIn8s&X-Amz-Signature=79139942c4dd0bf9ff2e0db200529e280a949a17b51ee26a19f63abb4799d441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDFAHPE%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMypPkVlvKO%2FLVVwWatzNq3pMxaleydtSHcXli3vF%2BAiAVYQOemGZRBmsYyZpkLOSPsyX26hyyGDTJRfGdtBtBfCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMORFF3P5ZM7EsF9TSKtwDMQF%2BHeoh5S4UhcNEO29KEkfxBMql3Qp%2FPnuSkBvMA71vPLNE8VCA6XmJVnYP86w%2F0wwkoWcpGUlOrdUfGtIlRFB5bodZibxOSPxLYcXhYV0ux65IWSFaOHdJl5oyTGF7TeAPsAp5CVq3DNZv%2BHTCCw4tFvCpETb6Gc8tls%2BW5799mTV2qGJ3OxSEESWVS0p90M%2FTUNW96Tk8mka2rPNPxjWwA98YW2CFVHSDgQPYd%2B6Y2%2B1C4NtXapYjAy69FkCWn76IM7IPmYLHND0PxXm2DzMs70wyu60RdFz%2FqYtrNb%2Fmr9YrugXuHMSjCsjteHeExRaNdPkoJUKTzxcyJGTIF12TjdCXxA%2BDpEHm%2B5VYhO01036eASQQWAq%2BI17RJdsDKCKijOozsR12ZtVKWDSMxK5tMHWJEO3jmFPldto%2FjRuRr8fyZhPv1VC5phgCqBrfMTNo6IhE%2F1xLh9vnIH9ZskPObZn0XBcANFMw29f3LC5zmqSTZEwPFygQAmb0Vt54BV5mpYygDiwP6pcMLAuzh0ssK70%2BelUuaOmALGE1gaYK%2FdPA3FbL96t5%2FMhvYld5T5HQFjIdLnLGQCuKPr%2BQVDzMntA%2Btmyl3%2F0JaOyVxHE7P8XNlAsekjPON14wh6q2xwY6pgHhkD7FExJ%2FzF09HtJdB2eEzvNKQ2smhKfGE283RvRtNcJBxrm2HSd5hcJNeeybdaO2shxRhnk0q2oQ3AcQ0QH2rBbp8t0Bt%2Fk%2FH%2BXOs8kiTJBjrlZLPmSVYAyr9G4EEQwdILEqn3s%2BJvYKJioYw3WNZJaE%2FV5Got2%2Fm6zhQFqxZlRvlXc%2BpD2LxTXcp7yqrQ79DNVbhh9Zaf7gQKS8EgCAwkMYIn8s&X-Amz-Signature=89b95ea599ba17ff10392779a54e053e16072348d1f62cbc1973806888bfd481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDFAHPE%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMypPkVlvKO%2FLVVwWatzNq3pMxaleydtSHcXli3vF%2BAiAVYQOemGZRBmsYyZpkLOSPsyX26hyyGDTJRfGdtBtBfCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMORFF3P5ZM7EsF9TSKtwDMQF%2BHeoh5S4UhcNEO29KEkfxBMql3Qp%2FPnuSkBvMA71vPLNE8VCA6XmJVnYP86w%2F0wwkoWcpGUlOrdUfGtIlRFB5bodZibxOSPxLYcXhYV0ux65IWSFaOHdJl5oyTGF7TeAPsAp5CVq3DNZv%2BHTCCw4tFvCpETb6Gc8tls%2BW5799mTV2qGJ3OxSEESWVS0p90M%2FTUNW96Tk8mka2rPNPxjWwA98YW2CFVHSDgQPYd%2B6Y2%2B1C4NtXapYjAy69FkCWn76IM7IPmYLHND0PxXm2DzMs70wyu60RdFz%2FqYtrNb%2Fmr9YrugXuHMSjCsjteHeExRaNdPkoJUKTzxcyJGTIF12TjdCXxA%2BDpEHm%2B5VYhO01036eASQQWAq%2BI17RJdsDKCKijOozsR12ZtVKWDSMxK5tMHWJEO3jmFPldto%2FjRuRr8fyZhPv1VC5phgCqBrfMTNo6IhE%2F1xLh9vnIH9ZskPObZn0XBcANFMw29f3LC5zmqSTZEwPFygQAmb0Vt54BV5mpYygDiwP6pcMLAuzh0ssK70%2BelUuaOmALGE1gaYK%2FdPA3FbL96t5%2FMhvYld5T5HQFjIdLnLGQCuKPr%2BQVDzMntA%2Btmyl3%2F0JaOyVxHE7P8XNlAsekjPON14wh6q2xwY6pgHhkD7FExJ%2FzF09HtJdB2eEzvNKQ2smhKfGE283RvRtNcJBxrm2HSd5hcJNeeybdaO2shxRhnk0q2oQ3AcQ0QH2rBbp8t0Bt%2Fk%2FH%2BXOs8kiTJBjrlZLPmSVYAyr9G4EEQwdILEqn3s%2BJvYKJioYw3WNZJaE%2FV5Got2%2Fm6zhQFqxZlRvlXc%2BpD2LxTXcp7yqrQ79DNVbhh9Zaf7gQKS8EgCAwkMYIn8s&X-Amz-Signature=8dcfe5145aa4697fa8fef4d153f9b996551967cd032992565cd9176e5f396053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDFAHPE%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMypPkVlvKO%2FLVVwWatzNq3pMxaleydtSHcXli3vF%2BAiAVYQOemGZRBmsYyZpkLOSPsyX26hyyGDTJRfGdtBtBfCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMORFF3P5ZM7EsF9TSKtwDMQF%2BHeoh5S4UhcNEO29KEkfxBMql3Qp%2FPnuSkBvMA71vPLNE8VCA6XmJVnYP86w%2F0wwkoWcpGUlOrdUfGtIlRFB5bodZibxOSPxLYcXhYV0ux65IWSFaOHdJl5oyTGF7TeAPsAp5CVq3DNZv%2BHTCCw4tFvCpETb6Gc8tls%2BW5799mTV2qGJ3OxSEESWVS0p90M%2FTUNW96Tk8mka2rPNPxjWwA98YW2CFVHSDgQPYd%2B6Y2%2B1C4NtXapYjAy69FkCWn76IM7IPmYLHND0PxXm2DzMs70wyu60RdFz%2FqYtrNb%2Fmr9YrugXuHMSjCsjteHeExRaNdPkoJUKTzxcyJGTIF12TjdCXxA%2BDpEHm%2B5VYhO01036eASQQWAq%2BI17RJdsDKCKijOozsR12ZtVKWDSMxK5tMHWJEO3jmFPldto%2FjRuRr8fyZhPv1VC5phgCqBrfMTNo6IhE%2F1xLh9vnIH9ZskPObZn0XBcANFMw29f3LC5zmqSTZEwPFygQAmb0Vt54BV5mpYygDiwP6pcMLAuzh0ssK70%2BelUuaOmALGE1gaYK%2FdPA3FbL96t5%2FMhvYld5T5HQFjIdLnLGQCuKPr%2BQVDzMntA%2Btmyl3%2F0JaOyVxHE7P8XNlAsekjPON14wh6q2xwY6pgHhkD7FExJ%2FzF09HtJdB2eEzvNKQ2smhKfGE283RvRtNcJBxrm2HSd5hcJNeeybdaO2shxRhnk0q2oQ3AcQ0QH2rBbp8t0Bt%2Fk%2FH%2BXOs8kiTJBjrlZLPmSVYAyr9G4EEQwdILEqn3s%2BJvYKJioYw3WNZJaE%2FV5Got2%2Fm6zhQFqxZlRvlXc%2BpD2LxTXcp7yqrQ79DNVbhh9Zaf7gQKS8EgCAwkMYIn8s&X-Amz-Signature=57a872485c490edf1384de48435d7ec798705e1a3ebc738d9626c02f3418e9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDFAHPE%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMypPkVlvKO%2FLVVwWatzNq3pMxaleydtSHcXli3vF%2BAiAVYQOemGZRBmsYyZpkLOSPsyX26hyyGDTJRfGdtBtBfCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMORFF3P5ZM7EsF9TSKtwDMQF%2BHeoh5S4UhcNEO29KEkfxBMql3Qp%2FPnuSkBvMA71vPLNE8VCA6XmJVnYP86w%2F0wwkoWcpGUlOrdUfGtIlRFB5bodZibxOSPxLYcXhYV0ux65IWSFaOHdJl5oyTGF7TeAPsAp5CVq3DNZv%2BHTCCw4tFvCpETb6Gc8tls%2BW5799mTV2qGJ3OxSEESWVS0p90M%2FTUNW96Tk8mka2rPNPxjWwA98YW2CFVHSDgQPYd%2B6Y2%2B1C4NtXapYjAy69FkCWn76IM7IPmYLHND0PxXm2DzMs70wyu60RdFz%2FqYtrNb%2Fmr9YrugXuHMSjCsjteHeExRaNdPkoJUKTzxcyJGTIF12TjdCXxA%2BDpEHm%2B5VYhO01036eASQQWAq%2BI17RJdsDKCKijOozsR12ZtVKWDSMxK5tMHWJEO3jmFPldto%2FjRuRr8fyZhPv1VC5phgCqBrfMTNo6IhE%2F1xLh9vnIH9ZskPObZn0XBcANFMw29f3LC5zmqSTZEwPFygQAmb0Vt54BV5mpYygDiwP6pcMLAuzh0ssK70%2BelUuaOmALGE1gaYK%2FdPA3FbL96t5%2FMhvYld5T5HQFjIdLnLGQCuKPr%2BQVDzMntA%2Btmyl3%2F0JaOyVxHE7P8XNlAsekjPON14wh6q2xwY6pgHhkD7FExJ%2FzF09HtJdB2eEzvNKQ2smhKfGE283RvRtNcJBxrm2HSd5hcJNeeybdaO2shxRhnk0q2oQ3AcQ0QH2rBbp8t0Bt%2Fk%2FH%2BXOs8kiTJBjrlZLPmSVYAyr9G4EEQwdILEqn3s%2BJvYKJioYw3WNZJaE%2FV5Got2%2Fm6zhQFqxZlRvlXc%2BpD2LxTXcp7yqrQ79DNVbhh9Zaf7gQKS8EgCAwkMYIn8s&X-Amz-Signature=13cb89a8902d3cb0ebcca5e73aa33562925ea9b0271f1d8b348c5d895fc1d481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDFAHPE%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMypPkVlvKO%2FLVVwWatzNq3pMxaleydtSHcXli3vF%2BAiAVYQOemGZRBmsYyZpkLOSPsyX26hyyGDTJRfGdtBtBfCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMORFF3P5ZM7EsF9TSKtwDMQF%2BHeoh5S4UhcNEO29KEkfxBMql3Qp%2FPnuSkBvMA71vPLNE8VCA6XmJVnYP86w%2F0wwkoWcpGUlOrdUfGtIlRFB5bodZibxOSPxLYcXhYV0ux65IWSFaOHdJl5oyTGF7TeAPsAp5CVq3DNZv%2BHTCCw4tFvCpETb6Gc8tls%2BW5799mTV2qGJ3OxSEESWVS0p90M%2FTUNW96Tk8mka2rPNPxjWwA98YW2CFVHSDgQPYd%2B6Y2%2B1C4NtXapYjAy69FkCWn76IM7IPmYLHND0PxXm2DzMs70wyu60RdFz%2FqYtrNb%2Fmr9YrugXuHMSjCsjteHeExRaNdPkoJUKTzxcyJGTIF12TjdCXxA%2BDpEHm%2B5VYhO01036eASQQWAq%2BI17RJdsDKCKijOozsR12ZtVKWDSMxK5tMHWJEO3jmFPldto%2FjRuRr8fyZhPv1VC5phgCqBrfMTNo6IhE%2F1xLh9vnIH9ZskPObZn0XBcANFMw29f3LC5zmqSTZEwPFygQAmb0Vt54BV5mpYygDiwP6pcMLAuzh0ssK70%2BelUuaOmALGE1gaYK%2FdPA3FbL96t5%2FMhvYld5T5HQFjIdLnLGQCuKPr%2BQVDzMntA%2Btmyl3%2F0JaOyVxHE7P8XNlAsekjPON14wh6q2xwY6pgHhkD7FExJ%2FzF09HtJdB2eEzvNKQ2smhKfGE283RvRtNcJBxrm2HSd5hcJNeeybdaO2shxRhnk0q2oQ3AcQ0QH2rBbp8t0Bt%2Fk%2FH%2BXOs8kiTJBjrlZLPmSVYAyr9G4EEQwdILEqn3s%2BJvYKJioYw3WNZJaE%2FV5Got2%2Fm6zhQFqxZlRvlXc%2BpD2LxTXcp7yqrQ79DNVbhh9Zaf7gQKS8EgCAwkMYIn8s&X-Amz-Signature=ebb1c8b62243277fb0066b1170af26840e562f56e624927ad20c821fb979d00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDFAHPE%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMypPkVlvKO%2FLVVwWatzNq3pMxaleydtSHcXli3vF%2BAiAVYQOemGZRBmsYyZpkLOSPsyX26hyyGDTJRfGdtBtBfCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMORFF3P5ZM7EsF9TSKtwDMQF%2BHeoh5S4UhcNEO29KEkfxBMql3Qp%2FPnuSkBvMA71vPLNE8VCA6XmJVnYP86w%2F0wwkoWcpGUlOrdUfGtIlRFB5bodZibxOSPxLYcXhYV0ux65IWSFaOHdJl5oyTGF7TeAPsAp5CVq3DNZv%2BHTCCw4tFvCpETb6Gc8tls%2BW5799mTV2qGJ3OxSEESWVS0p90M%2FTUNW96Tk8mka2rPNPxjWwA98YW2CFVHSDgQPYd%2B6Y2%2B1C4NtXapYjAy69FkCWn76IM7IPmYLHND0PxXm2DzMs70wyu60RdFz%2FqYtrNb%2Fmr9YrugXuHMSjCsjteHeExRaNdPkoJUKTzxcyJGTIF12TjdCXxA%2BDpEHm%2B5VYhO01036eASQQWAq%2BI17RJdsDKCKijOozsR12ZtVKWDSMxK5tMHWJEO3jmFPldto%2FjRuRr8fyZhPv1VC5phgCqBrfMTNo6IhE%2F1xLh9vnIH9ZskPObZn0XBcANFMw29f3LC5zmqSTZEwPFygQAmb0Vt54BV5mpYygDiwP6pcMLAuzh0ssK70%2BelUuaOmALGE1gaYK%2FdPA3FbL96t5%2FMhvYld5T5HQFjIdLnLGQCuKPr%2BQVDzMntA%2Btmyl3%2F0JaOyVxHE7P8XNlAsekjPON14wh6q2xwY6pgHhkD7FExJ%2FzF09HtJdB2eEzvNKQ2smhKfGE283RvRtNcJBxrm2HSd5hcJNeeybdaO2shxRhnk0q2oQ3AcQ0QH2rBbp8t0Bt%2Fk%2FH%2BXOs8kiTJBjrlZLPmSVYAyr9G4EEQwdILEqn3s%2BJvYKJioYw3WNZJaE%2FV5Got2%2Fm6zhQFqxZlRvlXc%2BpD2LxTXcp7yqrQ79DNVbhh9Zaf7gQKS8EgCAwkMYIn8s&X-Amz-Signature=057e1d84aba7a29ec5bf803b364a573e7f663b469feebaf745b5b96d26c93d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDFAHPE%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMypPkVlvKO%2FLVVwWatzNq3pMxaleydtSHcXli3vF%2BAiAVYQOemGZRBmsYyZpkLOSPsyX26hyyGDTJRfGdtBtBfCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMORFF3P5ZM7EsF9TSKtwDMQF%2BHeoh5S4UhcNEO29KEkfxBMql3Qp%2FPnuSkBvMA71vPLNE8VCA6XmJVnYP86w%2F0wwkoWcpGUlOrdUfGtIlRFB5bodZibxOSPxLYcXhYV0ux65IWSFaOHdJl5oyTGF7TeAPsAp5CVq3DNZv%2BHTCCw4tFvCpETb6Gc8tls%2BW5799mTV2qGJ3OxSEESWVS0p90M%2FTUNW96Tk8mka2rPNPxjWwA98YW2CFVHSDgQPYd%2B6Y2%2B1C4NtXapYjAy69FkCWn76IM7IPmYLHND0PxXm2DzMs70wyu60RdFz%2FqYtrNb%2Fmr9YrugXuHMSjCsjteHeExRaNdPkoJUKTzxcyJGTIF12TjdCXxA%2BDpEHm%2B5VYhO01036eASQQWAq%2BI17RJdsDKCKijOozsR12ZtVKWDSMxK5tMHWJEO3jmFPldto%2FjRuRr8fyZhPv1VC5phgCqBrfMTNo6IhE%2F1xLh9vnIH9ZskPObZn0XBcANFMw29f3LC5zmqSTZEwPFygQAmb0Vt54BV5mpYygDiwP6pcMLAuzh0ssK70%2BelUuaOmALGE1gaYK%2FdPA3FbL96t5%2FMhvYld5T5HQFjIdLnLGQCuKPr%2BQVDzMntA%2Btmyl3%2F0JaOyVxHE7P8XNlAsekjPON14wh6q2xwY6pgHhkD7FExJ%2FzF09HtJdB2eEzvNKQ2smhKfGE283RvRtNcJBxrm2HSd5hcJNeeybdaO2shxRhnk0q2oQ3AcQ0QH2rBbp8t0Bt%2Fk%2FH%2BXOs8kiTJBjrlZLPmSVYAyr9G4EEQwdILEqn3s%2BJvYKJioYw3WNZJaE%2FV5Got2%2Fm6zhQFqxZlRvlXc%2BpD2LxTXcp7yqrQ79DNVbhh9Zaf7gQKS8EgCAwkMYIn8s&X-Amz-Signature=05daf87ee1d31ef6e031442d7ed416f4737b6727cc548c0eb4b934b193f96b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDFAHPE%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMypPkVlvKO%2FLVVwWatzNq3pMxaleydtSHcXli3vF%2BAiAVYQOemGZRBmsYyZpkLOSPsyX26hyyGDTJRfGdtBtBfCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMORFF3P5ZM7EsF9TSKtwDMQF%2BHeoh5S4UhcNEO29KEkfxBMql3Qp%2FPnuSkBvMA71vPLNE8VCA6XmJVnYP86w%2F0wwkoWcpGUlOrdUfGtIlRFB5bodZibxOSPxLYcXhYV0ux65IWSFaOHdJl5oyTGF7TeAPsAp5CVq3DNZv%2BHTCCw4tFvCpETb6Gc8tls%2BW5799mTV2qGJ3OxSEESWVS0p90M%2FTUNW96Tk8mka2rPNPxjWwA98YW2CFVHSDgQPYd%2B6Y2%2B1C4NtXapYjAy69FkCWn76IM7IPmYLHND0PxXm2DzMs70wyu60RdFz%2FqYtrNb%2Fmr9YrugXuHMSjCsjteHeExRaNdPkoJUKTzxcyJGTIF12TjdCXxA%2BDpEHm%2B5VYhO01036eASQQWAq%2BI17RJdsDKCKijOozsR12ZtVKWDSMxK5tMHWJEO3jmFPldto%2FjRuRr8fyZhPv1VC5phgCqBrfMTNo6IhE%2F1xLh9vnIH9ZskPObZn0XBcANFMw29f3LC5zmqSTZEwPFygQAmb0Vt54BV5mpYygDiwP6pcMLAuzh0ssK70%2BelUuaOmALGE1gaYK%2FdPA3FbL96t5%2FMhvYld5T5HQFjIdLnLGQCuKPr%2BQVDzMntA%2Btmyl3%2F0JaOyVxHE7P8XNlAsekjPON14wh6q2xwY6pgHhkD7FExJ%2FzF09HtJdB2eEzvNKQ2smhKfGE283RvRtNcJBxrm2HSd5hcJNeeybdaO2shxRhnk0q2oQ3AcQ0QH2rBbp8t0Bt%2Fk%2FH%2BXOs8kiTJBjrlZLPmSVYAyr9G4EEQwdILEqn3s%2BJvYKJioYw3WNZJaE%2FV5Got2%2Fm6zhQFqxZlRvlXc%2BpD2LxTXcp7yqrQ79DNVbhh9Zaf7gQKS8EgCAwkMYIn8s&X-Amz-Signature=8dcfe5145aa4697fa8fef4d153f9b996551967cd032992565cd9176e5f396053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
