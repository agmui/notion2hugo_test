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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A2RL4QE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCID5tEwCJAh7xuiu9KWAWR%2FkqeKlmdIbYIiCDeI2t5OXbAiEAkcnA6xGQVPUsKCuMytNTEyhx0blm5VQpYdsPSGf9APUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJGgG%2BC4ECeBIph0PyrcAw6VtE%2BR8RnuI9XnO1KqOn3HXkVQ85ZFjReTlX9YjVsLP%2FvqsAU2NU0ZW2v8HuVTkEpqsAYlxc63gxK8k30Puk%2FgJ7Qz8Dfx4lpWsWz7Jf5y%2FPM2UNV9UPlAIzfDvOBexXmehGUixZFqaLTUAFGWGo89cBbCuCaAyUKEZdptew58FqVZ4DMpetgs%2BAU2Q%2FH0dkcZ5twNRQQdA2i1WZnWYAwUFmNjdH4G3f0I3gSnzuGoei4YYSZpYhvyhm%2FKM1nx30XT9UnDgG6BCqqy1xwVLMDXQ5PckTtq06dF0adby2QNOxlERcQxpTSErfsKvVWLhZlXsfvfKBLdeLBUDsJdplxS%2FbB6aGIznWxWmhkJUgTV2kmdT7oq7ykJhEAdXX%2Fm4bu1%2B6LTXDAlfQBudiuPPcuPMoYt6zuBX1lPY8RW93WgQUFhEpX60GfqqfBJT5ImIyaY%2B8Z41NcbZicdhxqVQh4hmovSKgxdvN9nZEXSgixwrReKQQ3w75%2BWntHmYl7etW9JzI%2F2YBdpfdLtj82a43oDPVRAHCMCw%2FnnaJPWdeOQ%2Bq8m0cLJREWPEA9qxhznRygiPvunZ8OQeXldUmr5jnrw3jiI%2BSNmsKXY6hxBKEkjsrw2bevGrSb26AmIMPXa%2FcQGOqUBADe4TA0tXoJnpTgdugczZmnTht1h4Eb%2FJnCcMwMoODk9hQ%2FaVg1B7SpImgLx5DLmOoA%2FVxvBYIFDXOnq2CzpbGoufxVTO9mA7tKLtdOrJ%2FPBdZsfJD6WBjysq6Ue%2FICkokZO%2Fg666nq9NmSH2SkF6ZhsNTZIFYxwwCxn34HIHtYyTL22i9q%2BKbBcxMPoAgqBu1%2FlCV2Yp5DhK2n%2FaEN41KKruxFf&X-Amz-Signature=d607ec5fd6c588fdb7b021a1487109c65172d5fd7fc00a9476435739e37bf500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFXJTKI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHk8nHOQVmcEPclJ%2B9a1j7Ie9IEjheghJBWvfwtVdy2LAiEAvC%2B3Odjsd81NljtOb1cFZ%2Fht5aD5VM8SXPeetEf41mEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCkZH%2BG%2FHMQaS7t%2BRSrcA6EPpFwhFD2FGzF0uiM9yRC%2F0O9WDIDjkFQ6%2FpmtVuWKGeHtEloUzMq3c9uO80DEylzaP1IJpC1TRSD1bsrBnT1ENxtQlzJFp%2FzBEYR%2F4rWU7mtrI5eu2VT5BgNTCOsooNw0QwETA6F8jrHezBN%2Bld2wAjNR%2FPfitlZXF0dU4JwEU53Uhzh1Uib%2Fe9pKZZS%2FsM8oKFd%2FXY615bNp6ECIiAMPIqz3IPeaQrXzHDmN067M3jIft0brJnvPp4DQhW6niyWSabjuL1wYJxV2DWRa33CSD24%2FBLcYSE1RopPWhmaoz%2Fa4aj%2Bs8ZuEGYYAEkatMX%2B5rZvYECC6msicpxZ43l0mwaimKr%2FuSd1MI7zeMOSgPMbygBFQYZKMfjDPXdLcitCpIw1%2FXl7Wz6o8kiMqxWzDf5kl2x3UymGNIWjIasQA5K%2F6BehKr7ZDRC89KIhCU2Bul3NA%2FICkr9MaD8TdRFNOshG7DsKwo66Hqu4gwRHgBPlLSsPacPh2MZkUPYfrLCSY1ZfIRYROsKz0GfOhHRxSPSP0scbzJ8lNWRmQzwpc2PArbJYI1KlYymgF5%2FD2htD9PfAW%2F9dUchSm%2F5rGfYWNz6gx6z9xdSt1or%2FrupqkwxR5sxcXcRg3LiuBMO%2Fa%2FcQGOqUBRwkWy4QIvUB1C%2FfXjOU%2FtGHJo4KUWYW83JfSVEpIB9P26Z1Jk1o4uM69IsptGraOgm1ngIpitQ8sGEjj%2BGoEZ%2BSj374HpdOcXPdkPburZNJWTTZEVGEhmyRRVSjBV9F6JSf6umPCUI7brN%2FyAlGwA0T2QC9cNTF2K%2FBi%2Bn2ETL6u%2FDfmNue34r9AHnlTEjKGsveS840Cg39h%2FkH60185dSbdpQkJ&X-Amz-Signature=b139754cbebecfd00af940570bd53854128778da274ebfcf39cefd883c717da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFXJTKI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHk8nHOQVmcEPclJ%2B9a1j7Ie9IEjheghJBWvfwtVdy2LAiEAvC%2B3Odjsd81NljtOb1cFZ%2Fht5aD5VM8SXPeetEf41mEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCkZH%2BG%2FHMQaS7t%2BRSrcA6EPpFwhFD2FGzF0uiM9yRC%2F0O9WDIDjkFQ6%2FpmtVuWKGeHtEloUzMq3c9uO80DEylzaP1IJpC1TRSD1bsrBnT1ENxtQlzJFp%2FzBEYR%2F4rWU7mtrI5eu2VT5BgNTCOsooNw0QwETA6F8jrHezBN%2Bld2wAjNR%2FPfitlZXF0dU4JwEU53Uhzh1Uib%2Fe9pKZZS%2FsM8oKFd%2FXY615bNp6ECIiAMPIqz3IPeaQrXzHDmN067M3jIft0brJnvPp4DQhW6niyWSabjuL1wYJxV2DWRa33CSD24%2FBLcYSE1RopPWhmaoz%2Fa4aj%2Bs8ZuEGYYAEkatMX%2B5rZvYECC6msicpxZ43l0mwaimKr%2FuSd1MI7zeMOSgPMbygBFQYZKMfjDPXdLcitCpIw1%2FXl7Wz6o8kiMqxWzDf5kl2x3UymGNIWjIasQA5K%2F6BehKr7ZDRC89KIhCU2Bul3NA%2FICkr9MaD8TdRFNOshG7DsKwo66Hqu4gwRHgBPlLSsPacPh2MZkUPYfrLCSY1ZfIRYROsKz0GfOhHRxSPSP0scbzJ8lNWRmQzwpc2PArbJYI1KlYymgF5%2FD2htD9PfAW%2F9dUchSm%2F5rGfYWNz6gx6z9xdSt1or%2FrupqkwxR5sxcXcRg3LiuBMO%2Fa%2FcQGOqUBRwkWy4QIvUB1C%2FfXjOU%2FtGHJo4KUWYW83JfSVEpIB9P26Z1Jk1o4uM69IsptGraOgm1ngIpitQ8sGEjj%2BGoEZ%2BSj374HpdOcXPdkPburZNJWTTZEVGEhmyRRVSjBV9F6JSf6umPCUI7brN%2FyAlGwA0T2QC9cNTF2K%2FBi%2Bn2ETL6u%2FDfmNue34r9AHnlTEjKGsveS840Cg39h%2FkH60185dSbdpQkJ&X-Amz-Signature=cee7c33fe5516abf70664dca2eee718e98e6d4342080671cc61d922d2bb37b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFXJTKI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHk8nHOQVmcEPclJ%2B9a1j7Ie9IEjheghJBWvfwtVdy2LAiEAvC%2B3Odjsd81NljtOb1cFZ%2Fht5aD5VM8SXPeetEf41mEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCkZH%2BG%2FHMQaS7t%2BRSrcA6EPpFwhFD2FGzF0uiM9yRC%2F0O9WDIDjkFQ6%2FpmtVuWKGeHtEloUzMq3c9uO80DEylzaP1IJpC1TRSD1bsrBnT1ENxtQlzJFp%2FzBEYR%2F4rWU7mtrI5eu2VT5BgNTCOsooNw0QwETA6F8jrHezBN%2Bld2wAjNR%2FPfitlZXF0dU4JwEU53Uhzh1Uib%2Fe9pKZZS%2FsM8oKFd%2FXY615bNp6ECIiAMPIqz3IPeaQrXzHDmN067M3jIft0brJnvPp4DQhW6niyWSabjuL1wYJxV2DWRa33CSD24%2FBLcYSE1RopPWhmaoz%2Fa4aj%2Bs8ZuEGYYAEkatMX%2B5rZvYECC6msicpxZ43l0mwaimKr%2FuSd1MI7zeMOSgPMbygBFQYZKMfjDPXdLcitCpIw1%2FXl7Wz6o8kiMqxWzDf5kl2x3UymGNIWjIasQA5K%2F6BehKr7ZDRC89KIhCU2Bul3NA%2FICkr9MaD8TdRFNOshG7DsKwo66Hqu4gwRHgBPlLSsPacPh2MZkUPYfrLCSY1ZfIRYROsKz0GfOhHRxSPSP0scbzJ8lNWRmQzwpc2PArbJYI1KlYymgF5%2FD2htD9PfAW%2F9dUchSm%2F5rGfYWNz6gx6z9xdSt1or%2FrupqkwxR5sxcXcRg3LiuBMO%2Fa%2FcQGOqUBRwkWy4QIvUB1C%2FfXjOU%2FtGHJo4KUWYW83JfSVEpIB9P26Z1Jk1o4uM69IsptGraOgm1ngIpitQ8sGEjj%2BGoEZ%2BSj374HpdOcXPdkPburZNJWTTZEVGEhmyRRVSjBV9F6JSf6umPCUI7brN%2FyAlGwA0T2QC9cNTF2K%2FBi%2Bn2ETL6u%2FDfmNue34r9AHnlTEjKGsveS840Cg39h%2FkH60185dSbdpQkJ&X-Amz-Signature=3588766ed436f4917579128626ed2bf232b0d4a7e0685ab9ee3457588c845160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFXJTKI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHk8nHOQVmcEPclJ%2B9a1j7Ie9IEjheghJBWvfwtVdy2LAiEAvC%2B3Odjsd81NljtOb1cFZ%2Fht5aD5VM8SXPeetEf41mEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCkZH%2BG%2FHMQaS7t%2BRSrcA6EPpFwhFD2FGzF0uiM9yRC%2F0O9WDIDjkFQ6%2FpmtVuWKGeHtEloUzMq3c9uO80DEylzaP1IJpC1TRSD1bsrBnT1ENxtQlzJFp%2FzBEYR%2F4rWU7mtrI5eu2VT5BgNTCOsooNw0QwETA6F8jrHezBN%2Bld2wAjNR%2FPfitlZXF0dU4JwEU53Uhzh1Uib%2Fe9pKZZS%2FsM8oKFd%2FXY615bNp6ECIiAMPIqz3IPeaQrXzHDmN067M3jIft0brJnvPp4DQhW6niyWSabjuL1wYJxV2DWRa33CSD24%2FBLcYSE1RopPWhmaoz%2Fa4aj%2Bs8ZuEGYYAEkatMX%2B5rZvYECC6msicpxZ43l0mwaimKr%2FuSd1MI7zeMOSgPMbygBFQYZKMfjDPXdLcitCpIw1%2FXl7Wz6o8kiMqxWzDf5kl2x3UymGNIWjIasQA5K%2F6BehKr7ZDRC89KIhCU2Bul3NA%2FICkr9MaD8TdRFNOshG7DsKwo66Hqu4gwRHgBPlLSsPacPh2MZkUPYfrLCSY1ZfIRYROsKz0GfOhHRxSPSP0scbzJ8lNWRmQzwpc2PArbJYI1KlYymgF5%2FD2htD9PfAW%2F9dUchSm%2F5rGfYWNz6gx6z9xdSt1or%2FrupqkwxR5sxcXcRg3LiuBMO%2Fa%2FcQGOqUBRwkWy4QIvUB1C%2FfXjOU%2FtGHJo4KUWYW83JfSVEpIB9P26Z1Jk1o4uM69IsptGraOgm1ngIpitQ8sGEjj%2BGoEZ%2BSj374HpdOcXPdkPburZNJWTTZEVGEhmyRRVSjBV9F6JSf6umPCUI7brN%2FyAlGwA0T2QC9cNTF2K%2FBi%2Bn2ETL6u%2FDfmNue34r9AHnlTEjKGsveS840Cg39h%2FkH60185dSbdpQkJ&X-Amz-Signature=806eb5fb804a5a501517fa3bbc61a16950b30e9085c8a844211f0db51d824bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFXJTKI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHk8nHOQVmcEPclJ%2B9a1j7Ie9IEjheghJBWvfwtVdy2LAiEAvC%2B3Odjsd81NljtOb1cFZ%2Fht5aD5VM8SXPeetEf41mEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCkZH%2BG%2FHMQaS7t%2BRSrcA6EPpFwhFD2FGzF0uiM9yRC%2F0O9WDIDjkFQ6%2FpmtVuWKGeHtEloUzMq3c9uO80DEylzaP1IJpC1TRSD1bsrBnT1ENxtQlzJFp%2FzBEYR%2F4rWU7mtrI5eu2VT5BgNTCOsooNw0QwETA6F8jrHezBN%2Bld2wAjNR%2FPfitlZXF0dU4JwEU53Uhzh1Uib%2Fe9pKZZS%2FsM8oKFd%2FXY615bNp6ECIiAMPIqz3IPeaQrXzHDmN067M3jIft0brJnvPp4DQhW6niyWSabjuL1wYJxV2DWRa33CSD24%2FBLcYSE1RopPWhmaoz%2Fa4aj%2Bs8ZuEGYYAEkatMX%2B5rZvYECC6msicpxZ43l0mwaimKr%2FuSd1MI7zeMOSgPMbygBFQYZKMfjDPXdLcitCpIw1%2FXl7Wz6o8kiMqxWzDf5kl2x3UymGNIWjIasQA5K%2F6BehKr7ZDRC89KIhCU2Bul3NA%2FICkr9MaD8TdRFNOshG7DsKwo66Hqu4gwRHgBPlLSsPacPh2MZkUPYfrLCSY1ZfIRYROsKz0GfOhHRxSPSP0scbzJ8lNWRmQzwpc2PArbJYI1KlYymgF5%2FD2htD9PfAW%2F9dUchSm%2F5rGfYWNz6gx6z9xdSt1or%2FrupqkwxR5sxcXcRg3LiuBMO%2Fa%2FcQGOqUBRwkWy4QIvUB1C%2FfXjOU%2FtGHJo4KUWYW83JfSVEpIB9P26Z1Jk1o4uM69IsptGraOgm1ngIpitQ8sGEjj%2BGoEZ%2BSj374HpdOcXPdkPburZNJWTTZEVGEhmyRRVSjBV9F6JSf6umPCUI7brN%2FyAlGwA0T2QC9cNTF2K%2FBi%2Bn2ETL6u%2FDfmNue34r9AHnlTEjKGsveS840Cg39h%2FkH60185dSbdpQkJ&X-Amz-Signature=3c8ca5c2812ecca1a5c1e9307bf98ff39ad242830eeb01670a2449f425569496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFXJTKI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHk8nHOQVmcEPclJ%2B9a1j7Ie9IEjheghJBWvfwtVdy2LAiEAvC%2B3Odjsd81NljtOb1cFZ%2Fht5aD5VM8SXPeetEf41mEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCkZH%2BG%2FHMQaS7t%2BRSrcA6EPpFwhFD2FGzF0uiM9yRC%2F0O9WDIDjkFQ6%2FpmtVuWKGeHtEloUzMq3c9uO80DEylzaP1IJpC1TRSD1bsrBnT1ENxtQlzJFp%2FzBEYR%2F4rWU7mtrI5eu2VT5BgNTCOsooNw0QwETA6F8jrHezBN%2Bld2wAjNR%2FPfitlZXF0dU4JwEU53Uhzh1Uib%2Fe9pKZZS%2FsM8oKFd%2FXY615bNp6ECIiAMPIqz3IPeaQrXzHDmN067M3jIft0brJnvPp4DQhW6niyWSabjuL1wYJxV2DWRa33CSD24%2FBLcYSE1RopPWhmaoz%2Fa4aj%2Bs8ZuEGYYAEkatMX%2B5rZvYECC6msicpxZ43l0mwaimKr%2FuSd1MI7zeMOSgPMbygBFQYZKMfjDPXdLcitCpIw1%2FXl7Wz6o8kiMqxWzDf5kl2x3UymGNIWjIasQA5K%2F6BehKr7ZDRC89KIhCU2Bul3NA%2FICkr9MaD8TdRFNOshG7DsKwo66Hqu4gwRHgBPlLSsPacPh2MZkUPYfrLCSY1ZfIRYROsKz0GfOhHRxSPSP0scbzJ8lNWRmQzwpc2PArbJYI1KlYymgF5%2FD2htD9PfAW%2F9dUchSm%2F5rGfYWNz6gx6z9xdSt1or%2FrupqkwxR5sxcXcRg3LiuBMO%2Fa%2FcQGOqUBRwkWy4QIvUB1C%2FfXjOU%2FtGHJo4KUWYW83JfSVEpIB9P26Z1Jk1o4uM69IsptGraOgm1ngIpitQ8sGEjj%2BGoEZ%2BSj374HpdOcXPdkPburZNJWTTZEVGEhmyRRVSjBV9F6JSf6umPCUI7brN%2FyAlGwA0T2QC9cNTF2K%2FBi%2Bn2ETL6u%2FDfmNue34r9AHnlTEjKGsveS840Cg39h%2FkH60185dSbdpQkJ&X-Amz-Signature=24269a265e60fce6edaa0846a442d1ab81ac28710dc59575e569bba514297162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFXJTKI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHk8nHOQVmcEPclJ%2B9a1j7Ie9IEjheghJBWvfwtVdy2LAiEAvC%2B3Odjsd81NljtOb1cFZ%2Fht5aD5VM8SXPeetEf41mEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCkZH%2BG%2FHMQaS7t%2BRSrcA6EPpFwhFD2FGzF0uiM9yRC%2F0O9WDIDjkFQ6%2FpmtVuWKGeHtEloUzMq3c9uO80DEylzaP1IJpC1TRSD1bsrBnT1ENxtQlzJFp%2FzBEYR%2F4rWU7mtrI5eu2VT5BgNTCOsooNw0QwETA6F8jrHezBN%2Bld2wAjNR%2FPfitlZXF0dU4JwEU53Uhzh1Uib%2Fe9pKZZS%2FsM8oKFd%2FXY615bNp6ECIiAMPIqz3IPeaQrXzHDmN067M3jIft0brJnvPp4DQhW6niyWSabjuL1wYJxV2DWRa33CSD24%2FBLcYSE1RopPWhmaoz%2Fa4aj%2Bs8ZuEGYYAEkatMX%2B5rZvYECC6msicpxZ43l0mwaimKr%2FuSd1MI7zeMOSgPMbygBFQYZKMfjDPXdLcitCpIw1%2FXl7Wz6o8kiMqxWzDf5kl2x3UymGNIWjIasQA5K%2F6BehKr7ZDRC89KIhCU2Bul3NA%2FICkr9MaD8TdRFNOshG7DsKwo66Hqu4gwRHgBPlLSsPacPh2MZkUPYfrLCSY1ZfIRYROsKz0GfOhHRxSPSP0scbzJ8lNWRmQzwpc2PArbJYI1KlYymgF5%2FD2htD9PfAW%2F9dUchSm%2F5rGfYWNz6gx6z9xdSt1or%2FrupqkwxR5sxcXcRg3LiuBMO%2Fa%2FcQGOqUBRwkWy4QIvUB1C%2FfXjOU%2FtGHJo4KUWYW83JfSVEpIB9P26Z1Jk1o4uM69IsptGraOgm1ngIpitQ8sGEjj%2BGoEZ%2BSj374HpdOcXPdkPburZNJWTTZEVGEhmyRRVSjBV9F6JSf6umPCUI7brN%2FyAlGwA0T2QC9cNTF2K%2FBi%2Bn2ETL6u%2FDfmNue34r9AHnlTEjKGsveS840Cg39h%2FkH60185dSbdpQkJ&X-Amz-Signature=d65247e10bfeae8553d0c1c0d028e0f7a43410ac5c9cd2b5aaa5eab8ed3be684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFXJTKI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHk8nHOQVmcEPclJ%2B9a1j7Ie9IEjheghJBWvfwtVdy2LAiEAvC%2B3Odjsd81NljtOb1cFZ%2Fht5aD5VM8SXPeetEf41mEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCkZH%2BG%2FHMQaS7t%2BRSrcA6EPpFwhFD2FGzF0uiM9yRC%2F0O9WDIDjkFQ6%2FpmtVuWKGeHtEloUzMq3c9uO80DEylzaP1IJpC1TRSD1bsrBnT1ENxtQlzJFp%2FzBEYR%2F4rWU7mtrI5eu2VT5BgNTCOsooNw0QwETA6F8jrHezBN%2Bld2wAjNR%2FPfitlZXF0dU4JwEU53Uhzh1Uib%2Fe9pKZZS%2FsM8oKFd%2FXY615bNp6ECIiAMPIqz3IPeaQrXzHDmN067M3jIft0brJnvPp4DQhW6niyWSabjuL1wYJxV2DWRa33CSD24%2FBLcYSE1RopPWhmaoz%2Fa4aj%2Bs8ZuEGYYAEkatMX%2B5rZvYECC6msicpxZ43l0mwaimKr%2FuSd1MI7zeMOSgPMbygBFQYZKMfjDPXdLcitCpIw1%2FXl7Wz6o8kiMqxWzDf5kl2x3UymGNIWjIasQA5K%2F6BehKr7ZDRC89KIhCU2Bul3NA%2FICkr9MaD8TdRFNOshG7DsKwo66Hqu4gwRHgBPlLSsPacPh2MZkUPYfrLCSY1ZfIRYROsKz0GfOhHRxSPSP0scbzJ8lNWRmQzwpc2PArbJYI1KlYymgF5%2FD2htD9PfAW%2F9dUchSm%2F5rGfYWNz6gx6z9xdSt1or%2FrupqkwxR5sxcXcRg3LiuBMO%2Fa%2FcQGOqUBRwkWy4QIvUB1C%2FfXjOU%2FtGHJo4KUWYW83JfSVEpIB9P26Z1Jk1o4uM69IsptGraOgm1ngIpitQ8sGEjj%2BGoEZ%2BSj374HpdOcXPdkPburZNJWTTZEVGEhmyRRVSjBV9F6JSf6umPCUI7brN%2FyAlGwA0T2QC9cNTF2K%2FBi%2Bn2ETL6u%2FDfmNue34r9AHnlTEjKGsveS840Cg39h%2FkH60185dSbdpQkJ&X-Amz-Signature=6daca9d15ffcd248c315f853f855ef2c4e51f87f0e5be1c2ecf77f5110590155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFXJTKI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHk8nHOQVmcEPclJ%2B9a1j7Ie9IEjheghJBWvfwtVdy2LAiEAvC%2B3Odjsd81NljtOb1cFZ%2Fht5aD5VM8SXPeetEf41mEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCkZH%2BG%2FHMQaS7t%2BRSrcA6EPpFwhFD2FGzF0uiM9yRC%2F0O9WDIDjkFQ6%2FpmtVuWKGeHtEloUzMq3c9uO80DEylzaP1IJpC1TRSD1bsrBnT1ENxtQlzJFp%2FzBEYR%2F4rWU7mtrI5eu2VT5BgNTCOsooNw0QwETA6F8jrHezBN%2Bld2wAjNR%2FPfitlZXF0dU4JwEU53Uhzh1Uib%2Fe9pKZZS%2FsM8oKFd%2FXY615bNp6ECIiAMPIqz3IPeaQrXzHDmN067M3jIft0brJnvPp4DQhW6niyWSabjuL1wYJxV2DWRa33CSD24%2FBLcYSE1RopPWhmaoz%2Fa4aj%2Bs8ZuEGYYAEkatMX%2B5rZvYECC6msicpxZ43l0mwaimKr%2FuSd1MI7zeMOSgPMbygBFQYZKMfjDPXdLcitCpIw1%2FXl7Wz6o8kiMqxWzDf5kl2x3UymGNIWjIasQA5K%2F6BehKr7ZDRC89KIhCU2Bul3NA%2FICkr9MaD8TdRFNOshG7DsKwo66Hqu4gwRHgBPlLSsPacPh2MZkUPYfrLCSY1ZfIRYROsKz0GfOhHRxSPSP0scbzJ8lNWRmQzwpc2PArbJYI1KlYymgF5%2FD2htD9PfAW%2F9dUchSm%2F5rGfYWNz6gx6z9xdSt1or%2FrupqkwxR5sxcXcRg3LiuBMO%2Fa%2FcQGOqUBRwkWy4QIvUB1C%2FfXjOU%2FtGHJo4KUWYW83JfSVEpIB9P26Z1Jk1o4uM69IsptGraOgm1ngIpitQ8sGEjj%2BGoEZ%2BSj374HpdOcXPdkPburZNJWTTZEVGEhmyRRVSjBV9F6JSf6umPCUI7brN%2FyAlGwA0T2QC9cNTF2K%2FBi%2Bn2ETL6u%2FDfmNue34r9AHnlTEjKGsveS840Cg39h%2FkH60185dSbdpQkJ&X-Amz-Signature=e4134f3ac6016d80ebd47dc039a2f50ce01bd62af91b69a796ee832421b41cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFXJTKI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHk8nHOQVmcEPclJ%2B9a1j7Ie9IEjheghJBWvfwtVdy2LAiEAvC%2B3Odjsd81NljtOb1cFZ%2Fht5aD5VM8SXPeetEf41mEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCkZH%2BG%2FHMQaS7t%2BRSrcA6EPpFwhFD2FGzF0uiM9yRC%2F0O9WDIDjkFQ6%2FpmtVuWKGeHtEloUzMq3c9uO80DEylzaP1IJpC1TRSD1bsrBnT1ENxtQlzJFp%2FzBEYR%2F4rWU7mtrI5eu2VT5BgNTCOsooNw0QwETA6F8jrHezBN%2Bld2wAjNR%2FPfitlZXF0dU4JwEU53Uhzh1Uib%2Fe9pKZZS%2FsM8oKFd%2FXY615bNp6ECIiAMPIqz3IPeaQrXzHDmN067M3jIft0brJnvPp4DQhW6niyWSabjuL1wYJxV2DWRa33CSD24%2FBLcYSE1RopPWhmaoz%2Fa4aj%2Bs8ZuEGYYAEkatMX%2B5rZvYECC6msicpxZ43l0mwaimKr%2FuSd1MI7zeMOSgPMbygBFQYZKMfjDPXdLcitCpIw1%2FXl7Wz6o8kiMqxWzDf5kl2x3UymGNIWjIasQA5K%2F6BehKr7ZDRC89KIhCU2Bul3NA%2FICkr9MaD8TdRFNOshG7DsKwo66Hqu4gwRHgBPlLSsPacPh2MZkUPYfrLCSY1ZfIRYROsKz0GfOhHRxSPSP0scbzJ8lNWRmQzwpc2PArbJYI1KlYymgF5%2FD2htD9PfAW%2F9dUchSm%2F5rGfYWNz6gx6z9xdSt1or%2FrupqkwxR5sxcXcRg3LiuBMO%2Fa%2FcQGOqUBRwkWy4QIvUB1C%2FfXjOU%2FtGHJo4KUWYW83JfSVEpIB9P26Z1Jk1o4uM69IsptGraOgm1ngIpitQ8sGEjj%2BGoEZ%2BSj374HpdOcXPdkPburZNJWTTZEVGEhmyRRVSjBV9F6JSf6umPCUI7brN%2FyAlGwA0T2QC9cNTF2K%2FBi%2Bn2ETL6u%2FDfmNue34r9AHnlTEjKGsveS840Cg39h%2FkH60185dSbdpQkJ&X-Amz-Signature=806eb5fb804a5a501517fa3bbc61a16950b30e9085c8a844211f0db51d824bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
