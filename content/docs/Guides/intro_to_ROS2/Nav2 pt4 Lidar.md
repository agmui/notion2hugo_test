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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KKM6A5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICaOs9xSgHIjRvUe%2BqZYUIOrEEQhegTaJbH0Fxkb7vjdAiEAlk9hl8oQFTTmxCtjMO6lLdDm6xdFofpRrIHGTVvtx%2FAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjt6D82FrU%2FIDf8JircAynL9ZsliftrDKszjPSSu5I875jYmBj5U2WoTsYUv72vUBm9pL8ug1PHNsC4yjFio49YX%2FfpF%2BYSkxKGjWW95oPceZp71i0XGIyLJej%2BnNrF105hSI%2BOEJTmmBhw0my5WIn3ipXA%2F40%2FE3CGLprxdWyzMB5kgDOCJDZHl3a1bRjF2gyDC0YQGR7Kzm7aKyZofwqiKvbNU2ojJGgw5xqTGoL9%2FcuBsGlEKmMTEa4WMa4VEzCiWfrqruvpVij%2FX0y%2FGJj2Qsg3pN8U3ewX%2Bnv5tYRd4kxTDtEvgeoDFHb2%2FZKSdH8HarHHRr9Ddb7yqZnKwTZFD9DpkYWCKP4LA3iFGsKe0ZH%2Bb4X57XvhGDO1pb%2FpMu%2FF9PzweFAt%2Br2y6NKgf%2F9FEGiYYyr%2B2ex1xslQiXET18%2FypGQoNOdYcHVhpdkVyv71V6MYik96PPB%2BaHi%2BM853z4K%2Fz4Cfeh0GPwXwXFKoq6W8827fa0I2qZF89ENtTNj4VE4EnUiHn4gjXahjCJX981UAd0Pmo8Tg%2BjrvytRXziursCt4L0e7DzKnz88umVL4G6qgYhBHFhX%2BTINSF8c%2BT0HcW%2FAsnK6MmQG7MTWVr1uM7HPu5eQ8tCcCEb%2FI8Va%2FN4PXKSXrTqqnMJzo%2BMQGOqUBuCRnsfIq0LOFqFAfsmrWiRtpOY5924AgldLpAYKfacXCEgaCVbPLeYn8uj1KQSMnnwDAaYRJ4sQf5UT7JFddY0XB0H1ELciLcZI7aepKL83XTXOh5Tf3RiVGJ94DKth70ulG0VS8c753l%2Fjgqe%2Bd%2BORwDrECh72OaluATJ7khy9OjTRY4ao6G8H7RegKimY8GiMDzxKaLxzzyX%2B9ef1pQWJmikAt&X-Amz-Signature=6faf692c26d1681a71e50bf352c705553acf54b4cba08ccbc422938025f7431e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MSC4KR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCbbDdq5Ri3IQXcgPcXGrJr37BxuFU3NY4I%2Fsl%2FdtysAgIhAO76imxueiAKd9OXoon2kdiV7DCxjMcDJAkLawklePmBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwtH%2BEq1VlODMunhAsq3ANnvRoHGZDU4N1G58xNhocuzyq4OF%2B6lA%2BpKtRg%2Fr0EjthtmVJ6NPshlYfWlNK3KKlHdlv5KdnCA0ezmueh9JIOPkwvm2hVohVIcTsAI89gJgC%2B0arST8lBlHl1rKQd8Wws%2FIkluZ5DbRd00uK8boiw5TGawLDmqo97PGHP0R0DsoyG35BYgYQQc1Bge6iIvbpLKNSyK27%2B7jwPMEFX0bQghusZTw4HNYDQ0r%2BYe3zbiu%2BorHNE%2BIznSnNrpRQSjFdDwHMz9JkWXlkV3PvaJqSvL5UXuOCMTRmdwW2ZrURultYGFhE%2Bsox23%2Bp1Q56hpqpoePDv%2B7N4MIM%2BbsVM%2Bzkd%2FeDgAKWj6M%2FxO7Y%2F%2FsZCIjlrEabcH15irux5al5BJ9O%2FTxv%2Fb%2B5P2U1oqIVkBj4R%2FN5pO0tdgV0p0ZjgDBAtiy0XBNB1Md5iMnatT4fvQinX7wNb8ij4KVaXsF9Ja48yQ8jQs3Fgg1R6Nq2Rsk%2BJJTYRkzy6rpjyz%2FYOUX5O8KHhY42eQUCjV6liXEG%2B4livJ%2F4Iq0vQEvN1y2u8lADGgSr17CFqqEVxFUGsBczhZkV4x7ypwFDd0ITk5DllTgzBO2XskxRtiyTM43znCZWFkNkNXdVtrSejorNIODCy6PjEBjqkAcLr7O3LvKXWssWbXsdruFLKpvjV9DqaE6GRrBcsCCkXpPiXD5bTHHkfBvGRLyFIDZm51S4nv6tn7X9T0hjHXlUUmfSUO874kDhttjLUOzAFarpeDf12mM3IZxak9FOvq8xovGifnfkyMgRgYfHHSnZEephnCXn7XnbMpIi8bDP%2FsrE2Gvj2UWulHqOPIztQi624eYpEJ1VwzUFnuW39hMjgHHe1&X-Amz-Signature=fd8c5d1715f44295e0e47e477723b907e00479c8c49420756432fcf6b085a8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MSC4KR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCbbDdq5Ri3IQXcgPcXGrJr37BxuFU3NY4I%2Fsl%2FdtysAgIhAO76imxueiAKd9OXoon2kdiV7DCxjMcDJAkLawklePmBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwtH%2BEq1VlODMunhAsq3ANnvRoHGZDU4N1G58xNhocuzyq4OF%2B6lA%2BpKtRg%2Fr0EjthtmVJ6NPshlYfWlNK3KKlHdlv5KdnCA0ezmueh9JIOPkwvm2hVohVIcTsAI89gJgC%2B0arST8lBlHl1rKQd8Wws%2FIkluZ5DbRd00uK8boiw5TGawLDmqo97PGHP0R0DsoyG35BYgYQQc1Bge6iIvbpLKNSyK27%2B7jwPMEFX0bQghusZTw4HNYDQ0r%2BYe3zbiu%2BorHNE%2BIznSnNrpRQSjFdDwHMz9JkWXlkV3PvaJqSvL5UXuOCMTRmdwW2ZrURultYGFhE%2Bsox23%2Bp1Q56hpqpoePDv%2B7N4MIM%2BbsVM%2Bzkd%2FeDgAKWj6M%2FxO7Y%2F%2FsZCIjlrEabcH15irux5al5BJ9O%2FTxv%2Fb%2B5P2U1oqIVkBj4R%2FN5pO0tdgV0p0ZjgDBAtiy0XBNB1Md5iMnatT4fvQinX7wNb8ij4KVaXsF9Ja48yQ8jQs3Fgg1R6Nq2Rsk%2BJJTYRkzy6rpjyz%2FYOUX5O8KHhY42eQUCjV6liXEG%2B4livJ%2F4Iq0vQEvN1y2u8lADGgSr17CFqqEVxFUGsBczhZkV4x7ypwFDd0ITk5DllTgzBO2XskxRtiyTM43znCZWFkNkNXdVtrSejorNIODCy6PjEBjqkAcLr7O3LvKXWssWbXsdruFLKpvjV9DqaE6GRrBcsCCkXpPiXD5bTHHkfBvGRLyFIDZm51S4nv6tn7X9T0hjHXlUUmfSUO874kDhttjLUOzAFarpeDf12mM3IZxak9FOvq8xovGifnfkyMgRgYfHHSnZEephnCXn7XnbMpIi8bDP%2FsrE2Gvj2UWulHqOPIztQi624eYpEJ1VwzUFnuW39hMjgHHe1&X-Amz-Signature=54c35e20e0d6703157d3c2e0e3e43ae7e98d9bd1768c7f7c69bf52afce869756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MSC4KR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCbbDdq5Ri3IQXcgPcXGrJr37BxuFU3NY4I%2Fsl%2FdtysAgIhAO76imxueiAKd9OXoon2kdiV7DCxjMcDJAkLawklePmBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwtH%2BEq1VlODMunhAsq3ANnvRoHGZDU4N1G58xNhocuzyq4OF%2B6lA%2BpKtRg%2Fr0EjthtmVJ6NPshlYfWlNK3KKlHdlv5KdnCA0ezmueh9JIOPkwvm2hVohVIcTsAI89gJgC%2B0arST8lBlHl1rKQd8Wws%2FIkluZ5DbRd00uK8boiw5TGawLDmqo97PGHP0R0DsoyG35BYgYQQc1Bge6iIvbpLKNSyK27%2B7jwPMEFX0bQghusZTw4HNYDQ0r%2BYe3zbiu%2BorHNE%2BIznSnNrpRQSjFdDwHMz9JkWXlkV3PvaJqSvL5UXuOCMTRmdwW2ZrURultYGFhE%2Bsox23%2Bp1Q56hpqpoePDv%2B7N4MIM%2BbsVM%2Bzkd%2FeDgAKWj6M%2FxO7Y%2F%2FsZCIjlrEabcH15irux5al5BJ9O%2FTxv%2Fb%2B5P2U1oqIVkBj4R%2FN5pO0tdgV0p0ZjgDBAtiy0XBNB1Md5iMnatT4fvQinX7wNb8ij4KVaXsF9Ja48yQ8jQs3Fgg1R6Nq2Rsk%2BJJTYRkzy6rpjyz%2FYOUX5O8KHhY42eQUCjV6liXEG%2B4livJ%2F4Iq0vQEvN1y2u8lADGgSr17CFqqEVxFUGsBczhZkV4x7ypwFDd0ITk5DllTgzBO2XskxRtiyTM43znCZWFkNkNXdVtrSejorNIODCy6PjEBjqkAcLr7O3LvKXWssWbXsdruFLKpvjV9DqaE6GRrBcsCCkXpPiXD5bTHHkfBvGRLyFIDZm51S4nv6tn7X9T0hjHXlUUmfSUO874kDhttjLUOzAFarpeDf12mM3IZxak9FOvq8xovGifnfkyMgRgYfHHSnZEephnCXn7XnbMpIi8bDP%2FsrE2Gvj2UWulHqOPIztQi624eYpEJ1VwzUFnuW39hMjgHHe1&X-Amz-Signature=3eba5f239312017eed998f3aaa68397eef05f5d693664ae0441b73a14e1cd67c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MSC4KR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCbbDdq5Ri3IQXcgPcXGrJr37BxuFU3NY4I%2Fsl%2FdtysAgIhAO76imxueiAKd9OXoon2kdiV7DCxjMcDJAkLawklePmBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwtH%2BEq1VlODMunhAsq3ANnvRoHGZDU4N1G58xNhocuzyq4OF%2B6lA%2BpKtRg%2Fr0EjthtmVJ6NPshlYfWlNK3KKlHdlv5KdnCA0ezmueh9JIOPkwvm2hVohVIcTsAI89gJgC%2B0arST8lBlHl1rKQd8Wws%2FIkluZ5DbRd00uK8boiw5TGawLDmqo97PGHP0R0DsoyG35BYgYQQc1Bge6iIvbpLKNSyK27%2B7jwPMEFX0bQghusZTw4HNYDQ0r%2BYe3zbiu%2BorHNE%2BIznSnNrpRQSjFdDwHMz9JkWXlkV3PvaJqSvL5UXuOCMTRmdwW2ZrURultYGFhE%2Bsox23%2Bp1Q56hpqpoePDv%2B7N4MIM%2BbsVM%2Bzkd%2FeDgAKWj6M%2FxO7Y%2F%2FsZCIjlrEabcH15irux5al5BJ9O%2FTxv%2Fb%2B5P2U1oqIVkBj4R%2FN5pO0tdgV0p0ZjgDBAtiy0XBNB1Md5iMnatT4fvQinX7wNb8ij4KVaXsF9Ja48yQ8jQs3Fgg1R6Nq2Rsk%2BJJTYRkzy6rpjyz%2FYOUX5O8KHhY42eQUCjV6liXEG%2B4livJ%2F4Iq0vQEvN1y2u8lADGgSr17CFqqEVxFUGsBczhZkV4x7ypwFDd0ITk5DllTgzBO2XskxRtiyTM43znCZWFkNkNXdVtrSejorNIODCy6PjEBjqkAcLr7O3LvKXWssWbXsdruFLKpvjV9DqaE6GRrBcsCCkXpPiXD5bTHHkfBvGRLyFIDZm51S4nv6tn7X9T0hjHXlUUmfSUO874kDhttjLUOzAFarpeDf12mM3IZxak9FOvq8xovGifnfkyMgRgYfHHSnZEephnCXn7XnbMpIi8bDP%2FsrE2Gvj2UWulHqOPIztQi624eYpEJ1VwzUFnuW39hMjgHHe1&X-Amz-Signature=0e1693d33eb5241722f627c52e4aa9492dac110d6bf67937ae568812b0a5152d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MSC4KR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCbbDdq5Ri3IQXcgPcXGrJr37BxuFU3NY4I%2Fsl%2FdtysAgIhAO76imxueiAKd9OXoon2kdiV7DCxjMcDJAkLawklePmBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwtH%2BEq1VlODMunhAsq3ANnvRoHGZDU4N1G58xNhocuzyq4OF%2B6lA%2BpKtRg%2Fr0EjthtmVJ6NPshlYfWlNK3KKlHdlv5KdnCA0ezmueh9JIOPkwvm2hVohVIcTsAI89gJgC%2B0arST8lBlHl1rKQd8Wws%2FIkluZ5DbRd00uK8boiw5TGawLDmqo97PGHP0R0DsoyG35BYgYQQc1Bge6iIvbpLKNSyK27%2B7jwPMEFX0bQghusZTw4HNYDQ0r%2BYe3zbiu%2BorHNE%2BIznSnNrpRQSjFdDwHMz9JkWXlkV3PvaJqSvL5UXuOCMTRmdwW2ZrURultYGFhE%2Bsox23%2Bp1Q56hpqpoePDv%2B7N4MIM%2BbsVM%2Bzkd%2FeDgAKWj6M%2FxO7Y%2F%2FsZCIjlrEabcH15irux5al5BJ9O%2FTxv%2Fb%2B5P2U1oqIVkBj4R%2FN5pO0tdgV0p0ZjgDBAtiy0XBNB1Md5iMnatT4fvQinX7wNb8ij4KVaXsF9Ja48yQ8jQs3Fgg1R6Nq2Rsk%2BJJTYRkzy6rpjyz%2FYOUX5O8KHhY42eQUCjV6liXEG%2B4livJ%2F4Iq0vQEvN1y2u8lADGgSr17CFqqEVxFUGsBczhZkV4x7ypwFDd0ITk5DllTgzBO2XskxRtiyTM43znCZWFkNkNXdVtrSejorNIODCy6PjEBjqkAcLr7O3LvKXWssWbXsdruFLKpvjV9DqaE6GRrBcsCCkXpPiXD5bTHHkfBvGRLyFIDZm51S4nv6tn7X9T0hjHXlUUmfSUO874kDhttjLUOzAFarpeDf12mM3IZxak9FOvq8xovGifnfkyMgRgYfHHSnZEephnCXn7XnbMpIi8bDP%2FsrE2Gvj2UWulHqOPIztQi624eYpEJ1VwzUFnuW39hMjgHHe1&X-Amz-Signature=6f5df23aebe775d1ea367d713a26a77586441939f5bf050731898c4796d446c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MSC4KR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCbbDdq5Ri3IQXcgPcXGrJr37BxuFU3NY4I%2Fsl%2FdtysAgIhAO76imxueiAKd9OXoon2kdiV7DCxjMcDJAkLawklePmBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwtH%2BEq1VlODMunhAsq3ANnvRoHGZDU4N1G58xNhocuzyq4OF%2B6lA%2BpKtRg%2Fr0EjthtmVJ6NPshlYfWlNK3KKlHdlv5KdnCA0ezmueh9JIOPkwvm2hVohVIcTsAI89gJgC%2B0arST8lBlHl1rKQd8Wws%2FIkluZ5DbRd00uK8boiw5TGawLDmqo97PGHP0R0DsoyG35BYgYQQc1Bge6iIvbpLKNSyK27%2B7jwPMEFX0bQghusZTw4HNYDQ0r%2BYe3zbiu%2BorHNE%2BIznSnNrpRQSjFdDwHMz9JkWXlkV3PvaJqSvL5UXuOCMTRmdwW2ZrURultYGFhE%2Bsox23%2Bp1Q56hpqpoePDv%2B7N4MIM%2BbsVM%2Bzkd%2FeDgAKWj6M%2FxO7Y%2F%2FsZCIjlrEabcH15irux5al5BJ9O%2FTxv%2Fb%2B5P2U1oqIVkBj4R%2FN5pO0tdgV0p0ZjgDBAtiy0XBNB1Md5iMnatT4fvQinX7wNb8ij4KVaXsF9Ja48yQ8jQs3Fgg1R6Nq2Rsk%2BJJTYRkzy6rpjyz%2FYOUX5O8KHhY42eQUCjV6liXEG%2B4livJ%2F4Iq0vQEvN1y2u8lADGgSr17CFqqEVxFUGsBczhZkV4x7ypwFDd0ITk5DllTgzBO2XskxRtiyTM43znCZWFkNkNXdVtrSejorNIODCy6PjEBjqkAcLr7O3LvKXWssWbXsdruFLKpvjV9DqaE6GRrBcsCCkXpPiXD5bTHHkfBvGRLyFIDZm51S4nv6tn7X9T0hjHXlUUmfSUO874kDhttjLUOzAFarpeDf12mM3IZxak9FOvq8xovGifnfkyMgRgYfHHSnZEephnCXn7XnbMpIi8bDP%2FsrE2Gvj2UWulHqOPIztQi624eYpEJ1VwzUFnuW39hMjgHHe1&X-Amz-Signature=5813fb0844fda9ead1c51ebb2cc4be17a054813eeacaafd6099cf063e2a99f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MSC4KR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCbbDdq5Ri3IQXcgPcXGrJr37BxuFU3NY4I%2Fsl%2FdtysAgIhAO76imxueiAKd9OXoon2kdiV7DCxjMcDJAkLawklePmBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwtH%2BEq1VlODMunhAsq3ANnvRoHGZDU4N1G58xNhocuzyq4OF%2B6lA%2BpKtRg%2Fr0EjthtmVJ6NPshlYfWlNK3KKlHdlv5KdnCA0ezmueh9JIOPkwvm2hVohVIcTsAI89gJgC%2B0arST8lBlHl1rKQd8Wws%2FIkluZ5DbRd00uK8boiw5TGawLDmqo97PGHP0R0DsoyG35BYgYQQc1Bge6iIvbpLKNSyK27%2B7jwPMEFX0bQghusZTw4HNYDQ0r%2BYe3zbiu%2BorHNE%2BIznSnNrpRQSjFdDwHMz9JkWXlkV3PvaJqSvL5UXuOCMTRmdwW2ZrURultYGFhE%2Bsox23%2Bp1Q56hpqpoePDv%2B7N4MIM%2BbsVM%2Bzkd%2FeDgAKWj6M%2FxO7Y%2F%2FsZCIjlrEabcH15irux5al5BJ9O%2FTxv%2Fb%2B5P2U1oqIVkBj4R%2FN5pO0tdgV0p0ZjgDBAtiy0XBNB1Md5iMnatT4fvQinX7wNb8ij4KVaXsF9Ja48yQ8jQs3Fgg1R6Nq2Rsk%2BJJTYRkzy6rpjyz%2FYOUX5O8KHhY42eQUCjV6liXEG%2B4livJ%2F4Iq0vQEvN1y2u8lADGgSr17CFqqEVxFUGsBczhZkV4x7ypwFDd0ITk5DllTgzBO2XskxRtiyTM43znCZWFkNkNXdVtrSejorNIODCy6PjEBjqkAcLr7O3LvKXWssWbXsdruFLKpvjV9DqaE6GRrBcsCCkXpPiXD5bTHHkfBvGRLyFIDZm51S4nv6tn7X9T0hjHXlUUmfSUO874kDhttjLUOzAFarpeDf12mM3IZxak9FOvq8xovGifnfkyMgRgYfHHSnZEephnCXn7XnbMpIi8bDP%2FsrE2Gvj2UWulHqOPIztQi624eYpEJ1VwzUFnuW39hMjgHHe1&X-Amz-Signature=0cbb4cc21651755af9650da3854215ae8e87d489ce699cdfb74a253ffc349eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MSC4KR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCbbDdq5Ri3IQXcgPcXGrJr37BxuFU3NY4I%2Fsl%2FdtysAgIhAO76imxueiAKd9OXoon2kdiV7DCxjMcDJAkLawklePmBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwtH%2BEq1VlODMunhAsq3ANnvRoHGZDU4N1G58xNhocuzyq4OF%2B6lA%2BpKtRg%2Fr0EjthtmVJ6NPshlYfWlNK3KKlHdlv5KdnCA0ezmueh9JIOPkwvm2hVohVIcTsAI89gJgC%2B0arST8lBlHl1rKQd8Wws%2FIkluZ5DbRd00uK8boiw5TGawLDmqo97PGHP0R0DsoyG35BYgYQQc1Bge6iIvbpLKNSyK27%2B7jwPMEFX0bQghusZTw4HNYDQ0r%2BYe3zbiu%2BorHNE%2BIznSnNrpRQSjFdDwHMz9JkWXlkV3PvaJqSvL5UXuOCMTRmdwW2ZrURultYGFhE%2Bsox23%2Bp1Q56hpqpoePDv%2B7N4MIM%2BbsVM%2Bzkd%2FeDgAKWj6M%2FxO7Y%2F%2FsZCIjlrEabcH15irux5al5BJ9O%2FTxv%2Fb%2B5P2U1oqIVkBj4R%2FN5pO0tdgV0p0ZjgDBAtiy0XBNB1Md5iMnatT4fvQinX7wNb8ij4KVaXsF9Ja48yQ8jQs3Fgg1R6Nq2Rsk%2BJJTYRkzy6rpjyz%2FYOUX5O8KHhY42eQUCjV6liXEG%2B4livJ%2F4Iq0vQEvN1y2u8lADGgSr17CFqqEVxFUGsBczhZkV4x7ypwFDd0ITk5DllTgzBO2XskxRtiyTM43znCZWFkNkNXdVtrSejorNIODCy6PjEBjqkAcLr7O3LvKXWssWbXsdruFLKpvjV9DqaE6GRrBcsCCkXpPiXD5bTHHkfBvGRLyFIDZm51S4nv6tn7X9T0hjHXlUUmfSUO874kDhttjLUOzAFarpeDf12mM3IZxak9FOvq8xovGifnfkyMgRgYfHHSnZEephnCXn7XnbMpIi8bDP%2FsrE2Gvj2UWulHqOPIztQi624eYpEJ1VwzUFnuW39hMjgHHe1&X-Amz-Signature=be6d078948163bea8976ac4e8183e6095878f204d35875565935974ad10aaeec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MSC4KR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCbbDdq5Ri3IQXcgPcXGrJr37BxuFU3NY4I%2Fsl%2FdtysAgIhAO76imxueiAKd9OXoon2kdiV7DCxjMcDJAkLawklePmBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwtH%2BEq1VlODMunhAsq3ANnvRoHGZDU4N1G58xNhocuzyq4OF%2B6lA%2BpKtRg%2Fr0EjthtmVJ6NPshlYfWlNK3KKlHdlv5KdnCA0ezmueh9JIOPkwvm2hVohVIcTsAI89gJgC%2B0arST8lBlHl1rKQd8Wws%2FIkluZ5DbRd00uK8boiw5TGawLDmqo97PGHP0R0DsoyG35BYgYQQc1Bge6iIvbpLKNSyK27%2B7jwPMEFX0bQghusZTw4HNYDQ0r%2BYe3zbiu%2BorHNE%2BIznSnNrpRQSjFdDwHMz9JkWXlkV3PvaJqSvL5UXuOCMTRmdwW2ZrURultYGFhE%2Bsox23%2Bp1Q56hpqpoePDv%2B7N4MIM%2BbsVM%2Bzkd%2FeDgAKWj6M%2FxO7Y%2F%2FsZCIjlrEabcH15irux5al5BJ9O%2FTxv%2Fb%2B5P2U1oqIVkBj4R%2FN5pO0tdgV0p0ZjgDBAtiy0XBNB1Md5iMnatT4fvQinX7wNb8ij4KVaXsF9Ja48yQ8jQs3Fgg1R6Nq2Rsk%2BJJTYRkzy6rpjyz%2FYOUX5O8KHhY42eQUCjV6liXEG%2B4livJ%2F4Iq0vQEvN1y2u8lADGgSr17CFqqEVxFUGsBczhZkV4x7ypwFDd0ITk5DllTgzBO2XskxRtiyTM43znCZWFkNkNXdVtrSejorNIODCy6PjEBjqkAcLr7O3LvKXWssWbXsdruFLKpvjV9DqaE6GRrBcsCCkXpPiXD5bTHHkfBvGRLyFIDZm51S4nv6tn7X9T0hjHXlUUmfSUO874kDhttjLUOzAFarpeDf12mM3IZxak9FOvq8xovGifnfkyMgRgYfHHSnZEephnCXn7XnbMpIi8bDP%2FsrE2Gvj2UWulHqOPIztQi624eYpEJ1VwzUFnuW39hMjgHHe1&X-Amz-Signature=bd185947b6d45d5094089bfd24db37fe7942ee6e71250dbce667b89281b29d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MSC4KR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCbbDdq5Ri3IQXcgPcXGrJr37BxuFU3NY4I%2Fsl%2FdtysAgIhAO76imxueiAKd9OXoon2kdiV7DCxjMcDJAkLawklePmBKv8DCEwQABoMNjM3NDIzMTgzODA1IgwtH%2BEq1VlODMunhAsq3ANnvRoHGZDU4N1G58xNhocuzyq4OF%2B6lA%2BpKtRg%2Fr0EjthtmVJ6NPshlYfWlNK3KKlHdlv5KdnCA0ezmueh9JIOPkwvm2hVohVIcTsAI89gJgC%2B0arST8lBlHl1rKQd8Wws%2FIkluZ5DbRd00uK8boiw5TGawLDmqo97PGHP0R0DsoyG35BYgYQQc1Bge6iIvbpLKNSyK27%2B7jwPMEFX0bQghusZTw4HNYDQ0r%2BYe3zbiu%2BorHNE%2BIznSnNrpRQSjFdDwHMz9JkWXlkV3PvaJqSvL5UXuOCMTRmdwW2ZrURultYGFhE%2Bsox23%2Bp1Q56hpqpoePDv%2B7N4MIM%2BbsVM%2Bzkd%2FeDgAKWj6M%2FxO7Y%2F%2FsZCIjlrEabcH15irux5al5BJ9O%2FTxv%2Fb%2B5P2U1oqIVkBj4R%2FN5pO0tdgV0p0ZjgDBAtiy0XBNB1Md5iMnatT4fvQinX7wNb8ij4KVaXsF9Ja48yQ8jQs3Fgg1R6Nq2Rsk%2BJJTYRkzy6rpjyz%2FYOUX5O8KHhY42eQUCjV6liXEG%2B4livJ%2F4Iq0vQEvN1y2u8lADGgSr17CFqqEVxFUGsBczhZkV4x7ypwFDd0ITk5DllTgzBO2XskxRtiyTM43znCZWFkNkNXdVtrSejorNIODCy6PjEBjqkAcLr7O3LvKXWssWbXsdruFLKpvjV9DqaE6GRrBcsCCkXpPiXD5bTHHkfBvGRLyFIDZm51S4nv6tn7X9T0hjHXlUUmfSUO874kDhttjLUOzAFarpeDf12mM3IZxak9FOvq8xovGifnfkyMgRgYfHHSnZEephnCXn7XnbMpIi8bDP%2FsrE2Gvj2UWulHqOPIztQi624eYpEJ1VwzUFnuW39hMjgHHe1&X-Amz-Signature=0e1693d33eb5241722f627c52e4aa9492dac110d6bf67937ae568812b0a5152d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
