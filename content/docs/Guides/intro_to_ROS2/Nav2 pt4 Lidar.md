---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSF66HJT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDptl2%2B8xBet7E4W2qasUqupzSO7AiPT9w59El9qmE1ewIgfs3On6ivCD0A%2FQW7De8pr1Uj2cxFb0SeTvIKAc21MVkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKeq04mlrAKNXRZz3SrcA1zRu3o1Bbaj7%2Fr3cLVn4HKmwvL3neBZO4pEbO5fH4Jf6XzSpUOa8uFz%2F2PLTZxNz3zeMm6jN8s7YuDvUTzA3D4v3s86Tf46EDay%2BsXCOX5b%2Fk5685FsRdwTBCsf4IoF7gIjK7RMkme66zFnlX7PVKz70dViz2Xlhq9TTH57S1SFKkKFawKW22%2FtzrXmXUNQxdJJlFmCYAUrrIbr0vqCXKpEL34tjbVLCEDAFv726IAhfigSdJOpAgFbMrYlyFycl7co4g9dDQ222srOxRBzUlZJ7bR88Yr1khHczcUZLHzzrE%2B%2FiwUSdcYQ1Ni1wzYDUF2A%2BaLXfNwcC1vye6sO4%2FfRi%2FEgGh66L8oyRBc02QuP4TYIkrSNoXZWyPx2VFB3qHWZO4LfFXkJFNSjor2R0iVsxXPsvZkoYHBKw1LCYhzPay3kk0JtHsBy5zI1aE31EmnBzqViYXNXRDLNA%2Bj0g90CZMw9MqiLDMsMjmNHI4Z8tDiY8NjyisUZvQcM%2F8KspMoIU6aptch%2FFvFdlWndBesWonyDcxxx32aXxHnwLMMv357g32quGmDurVVqt8rLpn7OT9dUfG26FUYHEoT2W03RpA8ojuBfhoF5nQcG8wCRfoHBVzcHrFYeTCF6MIiBusQGOqUByG2uZegufKprIxdsui4Ol2mCqeFdiZqAbXrsCgfYwtbI%2FEh9IvB1b7HmvRPuxCqYMCLDqLAEEG9bPy9utstsS5Ur8eIHFVziX8KarlG1HUFNhVokjnzOdgiserm6JFgTSfaDcKjs0zEcXdt52A%2BWQARkPvWqVNIWG1rr2noyDuWRVenZVSRPdsBqyQUdGaC4NBQrigHAwo7vpzu2tjIQ3yycBxCe&X-Amz-Signature=0ff3dc17d9d5f168e33a4b95e45b1dd28fbc07adec9c771e81be9becbf4958de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZS4PGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0AgwoB1t3vff4xZQMIA%2Fyi%2FYiqP1HbvfdYfILlg0SJAiEA%2Ba2jv6j8aEWDt5doMi21WkZsReMkIuS9MKc6ETdy9NUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO3%2F4ykWcgEmUFCNGSrcAyYKhp3yyzeAbPLIbcvVZourgh%2B9pD0yHBA68m%2FQqwGg1i5PkYC9TuGQzcQI476xTEjo7l9Jtpn4n3s6eN24CgWyIpi0ICHOrlu%2F9a8y6FpwJyydbUnHr7T0R75Br%2FVWzr7YncWbUnmURjgGLGsQzSD9X5MlYtabDMCKJbpATayoszoCSFPB1AFSz0583LboLYows8bkyNehzYu2qdq%2FAODGiWJn5%2BcZ0hz1rpVi5Wr5lYt5VUKfAjzvTzX7ZgpVHe%2BjTFid0TJL0Y4bAY0RWDLmYuv17lAtWvDcXKm5BXFpiO8A14hLk7zsjspE6KiyLAXAIT%2FmN%2B4ny33XOWOLoYbnFI9NF7Jgl98Ap8%2B0bhiOhlgEdmZ655nlvuKvjwF4XGtdCnUCckwR5tCqNEqjZAOuy%2FEY7Rd4BeeTlSAGvvA22Gd2a0vI5Dkr%2BZT%2FU70tya%2FYrEVJE4KnTkK4mh38NMEUN5UFJayO8cNGzHt5Ua1%2BPb8RPZ8LJ9Xp%2BL6KyUZSyISRdlFl6dTh3oklr%2FDpNSD%2B5bC4BTxjqs%2FlIomGig8eWambxPNOY0M%2Fuzt6rRpMw8EN6mIIXWOa2d7I81%2FrhM1TEigl1X80KhQcLeYtwKfK9vf%2FzyGXM5NT6wSUMMSAusQGOqUBMth6utTQcdOee4tlcNDWpvhu4hbD7cDcdCulJj%2B0wtv16MFdSEcRQpyW3X7WD%2Bha9lzgrtPgvNpfW570%2Fqk4KOum3y%2FN0L8jOmUDgcQ%2BDdkpkoeVgU3lBQFaVMRzYG8e00OeCb1obYRV89s7gx0Q6zWk4lpUNe5re7h8%2FaSUTBaJLXObFKMRn5eIVQ4alhGRfKaCgFoObozfxEtK5Xky2IhUQ6cD&X-Amz-Signature=fe6af683f6a0c8603aa821e05d8c4f27a3fc582a5919020a44f25ba417c9e45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZS4PGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0AgwoB1t3vff4xZQMIA%2Fyi%2FYiqP1HbvfdYfILlg0SJAiEA%2Ba2jv6j8aEWDt5doMi21WkZsReMkIuS9MKc6ETdy9NUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO3%2F4ykWcgEmUFCNGSrcAyYKhp3yyzeAbPLIbcvVZourgh%2B9pD0yHBA68m%2FQqwGg1i5PkYC9TuGQzcQI476xTEjo7l9Jtpn4n3s6eN24CgWyIpi0ICHOrlu%2F9a8y6FpwJyydbUnHr7T0R75Br%2FVWzr7YncWbUnmURjgGLGsQzSD9X5MlYtabDMCKJbpATayoszoCSFPB1AFSz0583LboLYows8bkyNehzYu2qdq%2FAODGiWJn5%2BcZ0hz1rpVi5Wr5lYt5VUKfAjzvTzX7ZgpVHe%2BjTFid0TJL0Y4bAY0RWDLmYuv17lAtWvDcXKm5BXFpiO8A14hLk7zsjspE6KiyLAXAIT%2FmN%2B4ny33XOWOLoYbnFI9NF7Jgl98Ap8%2B0bhiOhlgEdmZ655nlvuKvjwF4XGtdCnUCckwR5tCqNEqjZAOuy%2FEY7Rd4BeeTlSAGvvA22Gd2a0vI5Dkr%2BZT%2FU70tya%2FYrEVJE4KnTkK4mh38NMEUN5UFJayO8cNGzHt5Ua1%2BPb8RPZ8LJ9Xp%2BL6KyUZSyISRdlFl6dTh3oklr%2FDpNSD%2B5bC4BTxjqs%2FlIomGig8eWambxPNOY0M%2Fuzt6rRpMw8EN6mIIXWOa2d7I81%2FrhM1TEigl1X80KhQcLeYtwKfK9vf%2FzyGXM5NT6wSUMMSAusQGOqUBMth6utTQcdOee4tlcNDWpvhu4hbD7cDcdCulJj%2B0wtv16MFdSEcRQpyW3X7WD%2Bha9lzgrtPgvNpfW570%2Fqk4KOum3y%2FN0L8jOmUDgcQ%2BDdkpkoeVgU3lBQFaVMRzYG8e00OeCb1obYRV89s7gx0Q6zWk4lpUNe5re7h8%2FaSUTBaJLXObFKMRn5eIVQ4alhGRfKaCgFoObozfxEtK5Xky2IhUQ6cD&X-Amz-Signature=f56baac6a13914f59119b6916c427472806214375d097f70c1554fbe2be67615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZS4PGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0AgwoB1t3vff4xZQMIA%2Fyi%2FYiqP1HbvfdYfILlg0SJAiEA%2Ba2jv6j8aEWDt5doMi21WkZsReMkIuS9MKc6ETdy9NUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO3%2F4ykWcgEmUFCNGSrcAyYKhp3yyzeAbPLIbcvVZourgh%2B9pD0yHBA68m%2FQqwGg1i5PkYC9TuGQzcQI476xTEjo7l9Jtpn4n3s6eN24CgWyIpi0ICHOrlu%2F9a8y6FpwJyydbUnHr7T0R75Br%2FVWzr7YncWbUnmURjgGLGsQzSD9X5MlYtabDMCKJbpATayoszoCSFPB1AFSz0583LboLYows8bkyNehzYu2qdq%2FAODGiWJn5%2BcZ0hz1rpVi5Wr5lYt5VUKfAjzvTzX7ZgpVHe%2BjTFid0TJL0Y4bAY0RWDLmYuv17lAtWvDcXKm5BXFpiO8A14hLk7zsjspE6KiyLAXAIT%2FmN%2B4ny33XOWOLoYbnFI9NF7Jgl98Ap8%2B0bhiOhlgEdmZ655nlvuKvjwF4XGtdCnUCckwR5tCqNEqjZAOuy%2FEY7Rd4BeeTlSAGvvA22Gd2a0vI5Dkr%2BZT%2FU70tya%2FYrEVJE4KnTkK4mh38NMEUN5UFJayO8cNGzHt5Ua1%2BPb8RPZ8LJ9Xp%2BL6KyUZSyISRdlFl6dTh3oklr%2FDpNSD%2B5bC4BTxjqs%2FlIomGig8eWambxPNOY0M%2Fuzt6rRpMw8EN6mIIXWOa2d7I81%2FrhM1TEigl1X80KhQcLeYtwKfK9vf%2FzyGXM5NT6wSUMMSAusQGOqUBMth6utTQcdOee4tlcNDWpvhu4hbD7cDcdCulJj%2B0wtv16MFdSEcRQpyW3X7WD%2Bha9lzgrtPgvNpfW570%2Fqk4KOum3y%2FN0L8jOmUDgcQ%2BDdkpkoeVgU3lBQFaVMRzYG8e00OeCb1obYRV89s7gx0Q6zWk4lpUNe5re7h8%2FaSUTBaJLXObFKMRn5eIVQ4alhGRfKaCgFoObozfxEtK5Xky2IhUQ6cD&X-Amz-Signature=02120de15a7f2d5a4117fe76a0b5d2d22ba4a338df67b5b2b7b513dbc3a23a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZS4PGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0AgwoB1t3vff4xZQMIA%2Fyi%2FYiqP1HbvfdYfILlg0SJAiEA%2Ba2jv6j8aEWDt5doMi21WkZsReMkIuS9MKc6ETdy9NUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO3%2F4ykWcgEmUFCNGSrcAyYKhp3yyzeAbPLIbcvVZourgh%2B9pD0yHBA68m%2FQqwGg1i5PkYC9TuGQzcQI476xTEjo7l9Jtpn4n3s6eN24CgWyIpi0ICHOrlu%2F9a8y6FpwJyydbUnHr7T0R75Br%2FVWzr7YncWbUnmURjgGLGsQzSD9X5MlYtabDMCKJbpATayoszoCSFPB1AFSz0583LboLYows8bkyNehzYu2qdq%2FAODGiWJn5%2BcZ0hz1rpVi5Wr5lYt5VUKfAjzvTzX7ZgpVHe%2BjTFid0TJL0Y4bAY0RWDLmYuv17lAtWvDcXKm5BXFpiO8A14hLk7zsjspE6KiyLAXAIT%2FmN%2B4ny33XOWOLoYbnFI9NF7Jgl98Ap8%2B0bhiOhlgEdmZ655nlvuKvjwF4XGtdCnUCckwR5tCqNEqjZAOuy%2FEY7Rd4BeeTlSAGvvA22Gd2a0vI5Dkr%2BZT%2FU70tya%2FYrEVJE4KnTkK4mh38NMEUN5UFJayO8cNGzHt5Ua1%2BPb8RPZ8LJ9Xp%2BL6KyUZSyISRdlFl6dTh3oklr%2FDpNSD%2B5bC4BTxjqs%2FlIomGig8eWambxPNOY0M%2Fuzt6rRpMw8EN6mIIXWOa2d7I81%2FrhM1TEigl1X80KhQcLeYtwKfK9vf%2FzyGXM5NT6wSUMMSAusQGOqUBMth6utTQcdOee4tlcNDWpvhu4hbD7cDcdCulJj%2B0wtv16MFdSEcRQpyW3X7WD%2Bha9lzgrtPgvNpfW570%2Fqk4KOum3y%2FN0L8jOmUDgcQ%2BDdkpkoeVgU3lBQFaVMRzYG8e00OeCb1obYRV89s7gx0Q6zWk4lpUNe5re7h8%2FaSUTBaJLXObFKMRn5eIVQ4alhGRfKaCgFoObozfxEtK5Xky2IhUQ6cD&X-Amz-Signature=e1ddf2d6d91b14dc0ce1ac7328ceda221b1e6d4b6afbe6664bf0b4b51c954a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZS4PGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0AgwoB1t3vff4xZQMIA%2Fyi%2FYiqP1HbvfdYfILlg0SJAiEA%2Ba2jv6j8aEWDt5doMi21WkZsReMkIuS9MKc6ETdy9NUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO3%2F4ykWcgEmUFCNGSrcAyYKhp3yyzeAbPLIbcvVZourgh%2B9pD0yHBA68m%2FQqwGg1i5PkYC9TuGQzcQI476xTEjo7l9Jtpn4n3s6eN24CgWyIpi0ICHOrlu%2F9a8y6FpwJyydbUnHr7T0R75Br%2FVWzr7YncWbUnmURjgGLGsQzSD9X5MlYtabDMCKJbpATayoszoCSFPB1AFSz0583LboLYows8bkyNehzYu2qdq%2FAODGiWJn5%2BcZ0hz1rpVi5Wr5lYt5VUKfAjzvTzX7ZgpVHe%2BjTFid0TJL0Y4bAY0RWDLmYuv17lAtWvDcXKm5BXFpiO8A14hLk7zsjspE6KiyLAXAIT%2FmN%2B4ny33XOWOLoYbnFI9NF7Jgl98Ap8%2B0bhiOhlgEdmZ655nlvuKvjwF4XGtdCnUCckwR5tCqNEqjZAOuy%2FEY7Rd4BeeTlSAGvvA22Gd2a0vI5Dkr%2BZT%2FU70tya%2FYrEVJE4KnTkK4mh38NMEUN5UFJayO8cNGzHt5Ua1%2BPb8RPZ8LJ9Xp%2BL6KyUZSyISRdlFl6dTh3oklr%2FDpNSD%2B5bC4BTxjqs%2FlIomGig8eWambxPNOY0M%2Fuzt6rRpMw8EN6mIIXWOa2d7I81%2FrhM1TEigl1X80KhQcLeYtwKfK9vf%2FzyGXM5NT6wSUMMSAusQGOqUBMth6utTQcdOee4tlcNDWpvhu4hbD7cDcdCulJj%2B0wtv16MFdSEcRQpyW3X7WD%2Bha9lzgrtPgvNpfW570%2Fqk4KOum3y%2FN0L8jOmUDgcQ%2BDdkpkoeVgU3lBQFaVMRzYG8e00OeCb1obYRV89s7gx0Q6zWk4lpUNe5re7h8%2FaSUTBaJLXObFKMRn5eIVQ4alhGRfKaCgFoObozfxEtK5Xky2IhUQ6cD&X-Amz-Signature=bf5027b82070aae682acceda7b4464b13e95046bbfcf1e3b2b7012695bd38c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZS4PGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0AgwoB1t3vff4xZQMIA%2Fyi%2FYiqP1HbvfdYfILlg0SJAiEA%2Ba2jv6j8aEWDt5doMi21WkZsReMkIuS9MKc6ETdy9NUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO3%2F4ykWcgEmUFCNGSrcAyYKhp3yyzeAbPLIbcvVZourgh%2B9pD0yHBA68m%2FQqwGg1i5PkYC9TuGQzcQI476xTEjo7l9Jtpn4n3s6eN24CgWyIpi0ICHOrlu%2F9a8y6FpwJyydbUnHr7T0R75Br%2FVWzr7YncWbUnmURjgGLGsQzSD9X5MlYtabDMCKJbpATayoszoCSFPB1AFSz0583LboLYows8bkyNehzYu2qdq%2FAODGiWJn5%2BcZ0hz1rpVi5Wr5lYt5VUKfAjzvTzX7ZgpVHe%2BjTFid0TJL0Y4bAY0RWDLmYuv17lAtWvDcXKm5BXFpiO8A14hLk7zsjspE6KiyLAXAIT%2FmN%2B4ny33XOWOLoYbnFI9NF7Jgl98Ap8%2B0bhiOhlgEdmZ655nlvuKvjwF4XGtdCnUCckwR5tCqNEqjZAOuy%2FEY7Rd4BeeTlSAGvvA22Gd2a0vI5Dkr%2BZT%2FU70tya%2FYrEVJE4KnTkK4mh38NMEUN5UFJayO8cNGzHt5Ua1%2BPb8RPZ8LJ9Xp%2BL6KyUZSyISRdlFl6dTh3oklr%2FDpNSD%2B5bC4BTxjqs%2FlIomGig8eWambxPNOY0M%2Fuzt6rRpMw8EN6mIIXWOa2d7I81%2FrhM1TEigl1X80KhQcLeYtwKfK9vf%2FzyGXM5NT6wSUMMSAusQGOqUBMth6utTQcdOee4tlcNDWpvhu4hbD7cDcdCulJj%2B0wtv16MFdSEcRQpyW3X7WD%2Bha9lzgrtPgvNpfW570%2Fqk4KOum3y%2FN0L8jOmUDgcQ%2BDdkpkoeVgU3lBQFaVMRzYG8e00OeCb1obYRV89s7gx0Q6zWk4lpUNe5re7h8%2FaSUTBaJLXObFKMRn5eIVQ4alhGRfKaCgFoObozfxEtK5Xky2IhUQ6cD&X-Amz-Signature=0684afc74bf5d0cb606c927edea19d7b050d2ff46b9cf583c4c35ad8a2bcb52e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZS4PGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0AgwoB1t3vff4xZQMIA%2Fyi%2FYiqP1HbvfdYfILlg0SJAiEA%2Ba2jv6j8aEWDt5doMi21WkZsReMkIuS9MKc6ETdy9NUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO3%2F4ykWcgEmUFCNGSrcAyYKhp3yyzeAbPLIbcvVZourgh%2B9pD0yHBA68m%2FQqwGg1i5PkYC9TuGQzcQI476xTEjo7l9Jtpn4n3s6eN24CgWyIpi0ICHOrlu%2F9a8y6FpwJyydbUnHr7T0R75Br%2FVWzr7YncWbUnmURjgGLGsQzSD9X5MlYtabDMCKJbpATayoszoCSFPB1AFSz0583LboLYows8bkyNehzYu2qdq%2FAODGiWJn5%2BcZ0hz1rpVi5Wr5lYt5VUKfAjzvTzX7ZgpVHe%2BjTFid0TJL0Y4bAY0RWDLmYuv17lAtWvDcXKm5BXFpiO8A14hLk7zsjspE6KiyLAXAIT%2FmN%2B4ny33XOWOLoYbnFI9NF7Jgl98Ap8%2B0bhiOhlgEdmZ655nlvuKvjwF4XGtdCnUCckwR5tCqNEqjZAOuy%2FEY7Rd4BeeTlSAGvvA22Gd2a0vI5Dkr%2BZT%2FU70tya%2FYrEVJE4KnTkK4mh38NMEUN5UFJayO8cNGzHt5Ua1%2BPb8RPZ8LJ9Xp%2BL6KyUZSyISRdlFl6dTh3oklr%2FDpNSD%2B5bC4BTxjqs%2FlIomGig8eWambxPNOY0M%2Fuzt6rRpMw8EN6mIIXWOa2d7I81%2FrhM1TEigl1X80KhQcLeYtwKfK9vf%2FzyGXM5NT6wSUMMSAusQGOqUBMth6utTQcdOee4tlcNDWpvhu4hbD7cDcdCulJj%2B0wtv16MFdSEcRQpyW3X7WD%2Bha9lzgrtPgvNpfW570%2Fqk4KOum3y%2FN0L8jOmUDgcQ%2BDdkpkoeVgU3lBQFaVMRzYG8e00OeCb1obYRV89s7gx0Q6zWk4lpUNe5re7h8%2FaSUTBaJLXObFKMRn5eIVQ4alhGRfKaCgFoObozfxEtK5Xky2IhUQ6cD&X-Amz-Signature=b3e0fe8054b353422f6642fe1cd36211387e0d149840f46e52400ec317c038bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZS4PGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0AgwoB1t3vff4xZQMIA%2Fyi%2FYiqP1HbvfdYfILlg0SJAiEA%2Ba2jv6j8aEWDt5doMi21WkZsReMkIuS9MKc6ETdy9NUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO3%2F4ykWcgEmUFCNGSrcAyYKhp3yyzeAbPLIbcvVZourgh%2B9pD0yHBA68m%2FQqwGg1i5PkYC9TuGQzcQI476xTEjo7l9Jtpn4n3s6eN24CgWyIpi0ICHOrlu%2F9a8y6FpwJyydbUnHr7T0R75Br%2FVWzr7YncWbUnmURjgGLGsQzSD9X5MlYtabDMCKJbpATayoszoCSFPB1AFSz0583LboLYows8bkyNehzYu2qdq%2FAODGiWJn5%2BcZ0hz1rpVi5Wr5lYt5VUKfAjzvTzX7ZgpVHe%2BjTFid0TJL0Y4bAY0RWDLmYuv17lAtWvDcXKm5BXFpiO8A14hLk7zsjspE6KiyLAXAIT%2FmN%2B4ny33XOWOLoYbnFI9NF7Jgl98Ap8%2B0bhiOhlgEdmZ655nlvuKvjwF4XGtdCnUCckwR5tCqNEqjZAOuy%2FEY7Rd4BeeTlSAGvvA22Gd2a0vI5Dkr%2BZT%2FU70tya%2FYrEVJE4KnTkK4mh38NMEUN5UFJayO8cNGzHt5Ua1%2BPb8RPZ8LJ9Xp%2BL6KyUZSyISRdlFl6dTh3oklr%2FDpNSD%2B5bC4BTxjqs%2FlIomGig8eWambxPNOY0M%2Fuzt6rRpMw8EN6mIIXWOa2d7I81%2FrhM1TEigl1X80KhQcLeYtwKfK9vf%2FzyGXM5NT6wSUMMSAusQGOqUBMth6utTQcdOee4tlcNDWpvhu4hbD7cDcdCulJj%2B0wtv16MFdSEcRQpyW3X7WD%2Bha9lzgrtPgvNpfW570%2Fqk4KOum3y%2FN0L8jOmUDgcQ%2BDdkpkoeVgU3lBQFaVMRzYG8e00OeCb1obYRV89s7gx0Q6zWk4lpUNe5re7h8%2FaSUTBaJLXObFKMRn5eIVQ4alhGRfKaCgFoObozfxEtK5Xky2IhUQ6cD&X-Amz-Signature=8cdb7cee56f2003a4a0b7e4605430eb96ae64d3f9b9534cb8c38546e227fcce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZS4PGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0AgwoB1t3vff4xZQMIA%2Fyi%2FYiqP1HbvfdYfILlg0SJAiEA%2Ba2jv6j8aEWDt5doMi21WkZsReMkIuS9MKc6ETdy9NUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO3%2F4ykWcgEmUFCNGSrcAyYKhp3yyzeAbPLIbcvVZourgh%2B9pD0yHBA68m%2FQqwGg1i5PkYC9TuGQzcQI476xTEjo7l9Jtpn4n3s6eN24CgWyIpi0ICHOrlu%2F9a8y6FpwJyydbUnHr7T0R75Br%2FVWzr7YncWbUnmURjgGLGsQzSD9X5MlYtabDMCKJbpATayoszoCSFPB1AFSz0583LboLYows8bkyNehzYu2qdq%2FAODGiWJn5%2BcZ0hz1rpVi5Wr5lYt5VUKfAjzvTzX7ZgpVHe%2BjTFid0TJL0Y4bAY0RWDLmYuv17lAtWvDcXKm5BXFpiO8A14hLk7zsjspE6KiyLAXAIT%2FmN%2B4ny33XOWOLoYbnFI9NF7Jgl98Ap8%2B0bhiOhlgEdmZ655nlvuKvjwF4XGtdCnUCckwR5tCqNEqjZAOuy%2FEY7Rd4BeeTlSAGvvA22Gd2a0vI5Dkr%2BZT%2FU70tya%2FYrEVJE4KnTkK4mh38NMEUN5UFJayO8cNGzHt5Ua1%2BPb8RPZ8LJ9Xp%2BL6KyUZSyISRdlFl6dTh3oklr%2FDpNSD%2B5bC4BTxjqs%2FlIomGig8eWambxPNOY0M%2Fuzt6rRpMw8EN6mIIXWOa2d7I81%2FrhM1TEigl1X80KhQcLeYtwKfK9vf%2FzyGXM5NT6wSUMMSAusQGOqUBMth6utTQcdOee4tlcNDWpvhu4hbD7cDcdCulJj%2B0wtv16MFdSEcRQpyW3X7WD%2Bha9lzgrtPgvNpfW570%2Fqk4KOum3y%2FN0L8jOmUDgcQ%2BDdkpkoeVgU3lBQFaVMRzYG8e00OeCb1obYRV89s7gx0Q6zWk4lpUNe5re7h8%2FaSUTBaJLXObFKMRn5eIVQ4alhGRfKaCgFoObozfxEtK5Xky2IhUQ6cD&X-Amz-Signature=7880a9a1994cb86239c9b80dae67d78a516900111ea428840a272b363cff07bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZS4PGT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0AgwoB1t3vff4xZQMIA%2Fyi%2FYiqP1HbvfdYfILlg0SJAiEA%2Ba2jv6j8aEWDt5doMi21WkZsReMkIuS9MKc6ETdy9NUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDO3%2F4ykWcgEmUFCNGSrcAyYKhp3yyzeAbPLIbcvVZourgh%2B9pD0yHBA68m%2FQqwGg1i5PkYC9TuGQzcQI476xTEjo7l9Jtpn4n3s6eN24CgWyIpi0ICHOrlu%2F9a8y6FpwJyydbUnHr7T0R75Br%2FVWzr7YncWbUnmURjgGLGsQzSD9X5MlYtabDMCKJbpATayoszoCSFPB1AFSz0583LboLYows8bkyNehzYu2qdq%2FAODGiWJn5%2BcZ0hz1rpVi5Wr5lYt5VUKfAjzvTzX7ZgpVHe%2BjTFid0TJL0Y4bAY0RWDLmYuv17lAtWvDcXKm5BXFpiO8A14hLk7zsjspE6KiyLAXAIT%2FmN%2B4ny33XOWOLoYbnFI9NF7Jgl98Ap8%2B0bhiOhlgEdmZ655nlvuKvjwF4XGtdCnUCckwR5tCqNEqjZAOuy%2FEY7Rd4BeeTlSAGvvA22Gd2a0vI5Dkr%2BZT%2FU70tya%2FYrEVJE4KnTkK4mh38NMEUN5UFJayO8cNGzHt5Ua1%2BPb8RPZ8LJ9Xp%2BL6KyUZSyISRdlFl6dTh3oklr%2FDpNSD%2B5bC4BTxjqs%2FlIomGig8eWambxPNOY0M%2Fuzt6rRpMw8EN6mIIXWOa2d7I81%2FrhM1TEigl1X80KhQcLeYtwKfK9vf%2FzyGXM5NT6wSUMMSAusQGOqUBMth6utTQcdOee4tlcNDWpvhu4hbD7cDcdCulJj%2B0wtv16MFdSEcRQpyW3X7WD%2Bha9lzgrtPgvNpfW570%2Fqk4KOum3y%2FN0L8jOmUDgcQ%2BDdkpkoeVgU3lBQFaVMRzYG8e00OeCb1obYRV89s7gx0Q6zWk4lpUNe5re7h8%2FaSUTBaJLXObFKMRn5eIVQ4alhGRfKaCgFoObozfxEtK5Xky2IhUQ6cD&X-Amz-Signature=e1ddf2d6d91b14dc0ce1ac7328ceda221b1e6d4b6afbe6664bf0b4b51c954a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
