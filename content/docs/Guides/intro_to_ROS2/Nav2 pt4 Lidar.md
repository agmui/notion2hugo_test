---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCOSHEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnFilUtLGM0Mjbc1bM3S4an4%2Bb6%2By7zjmTdbwm0fQ3gIga%2BEx7m386PN6GTo1X3pf30ogOpg0plCrQN1NK%2Bisz4wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7p3u%2BqjNHI2JrHyCrcA%2Fk7%2FGcyJ%2Ft%2F6bRtTB8%2F3MuPX%2BvwRfBbJYE32503JwSYn%2BBYUz%2BAPFevwZTLPmZqgtZDFP78cF0LEhalyyUwxdv71VCqRKtZQOAC8rwXG3GDqnDVGq0D%2Beu4oZnlo3tePknpK4lkbGj5CDjqB8OfFA3L5EYJ3169f29kRgzzbExvCONXvT0VEfmdnVhfjJlTy9zjvTCdd3GvtzPLNnOIXyvI5gg2lW6z49YYqOgsvtO1kpceX2i3Ha4m7wQg4mAZSEwA4GuOLoyCotsfRMct38Ef7VfJviZZ4%2BP8UXsOeN1fHgbrf26ozEDhQvbBaSdz5Y1kWT1Dic%2BXQfJrDBmFIcPuunJ%2FNvwksJiCHgL38Fxe5wgQUkqnx2kHAmYvkmBPjaOZpCc52scKkHw00L8UlM0dWAGtcchg6TyQuGL8gRtD%2BNZhePOPBSBMcTM1SY3qzsWBibq8Lsp8HztFBuUIgBxtSMi1fKtTCIWUVjnYvH28jp%2FRM4b1l3b%2FNGKKWYCoroVm%2Bx6JA3ihVNqSljt2BPIgvJEHtybf1q9AUZJGWGfPtJCMLRQXdN%2BR0HoBxAyygqjO8T%2FHYke5UFu9YKmlGaWuUHQvXg2mBjp%2F5ZT4AV9PROUh0evvY1VyAsPTMLqhtMQGOqUBALL0GDDYA%2Brh%2FTJBQbR%2FMoHqJ%2FrXFkFFAeYWJgLP60Bo1eCRK7V0XKu%2Bng6nMn971IVkAw7txFrzuukTKFlUGXYZVTUVNIVBdRL3tO3DxVBbZV%2FxLeaGbDgGUyO3e%2F3NuYyFHpXTG4QeSOXHKqUOSt4E9bbZzwsTqjxpCRRAJ8VHyikT8K3nr5%2F%2FTYJKff86NOkXeKbi0ls4PKyb6teBvzaOpt3I&X-Amz-Signature=8cae21b5af5b8d9eb42355936f384d4fe3cedfd651bd585a64f9002c24b01fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCOSHEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnFilUtLGM0Mjbc1bM3S4an4%2Bb6%2By7zjmTdbwm0fQ3gIga%2BEx7m386PN6GTo1X3pf30ogOpg0plCrQN1NK%2Bisz4wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7p3u%2BqjNHI2JrHyCrcA%2Fk7%2FGcyJ%2Ft%2F6bRtTB8%2F3MuPX%2BvwRfBbJYE32503JwSYn%2BBYUz%2BAPFevwZTLPmZqgtZDFP78cF0LEhalyyUwxdv71VCqRKtZQOAC8rwXG3GDqnDVGq0D%2Beu4oZnlo3tePknpK4lkbGj5CDjqB8OfFA3L5EYJ3169f29kRgzzbExvCONXvT0VEfmdnVhfjJlTy9zjvTCdd3GvtzPLNnOIXyvI5gg2lW6z49YYqOgsvtO1kpceX2i3Ha4m7wQg4mAZSEwA4GuOLoyCotsfRMct38Ef7VfJviZZ4%2BP8UXsOeN1fHgbrf26ozEDhQvbBaSdz5Y1kWT1Dic%2BXQfJrDBmFIcPuunJ%2FNvwksJiCHgL38Fxe5wgQUkqnx2kHAmYvkmBPjaOZpCc52scKkHw00L8UlM0dWAGtcchg6TyQuGL8gRtD%2BNZhePOPBSBMcTM1SY3qzsWBibq8Lsp8HztFBuUIgBxtSMi1fKtTCIWUVjnYvH28jp%2FRM4b1l3b%2FNGKKWYCoroVm%2Bx6JA3ihVNqSljt2BPIgvJEHtybf1q9AUZJGWGfPtJCMLRQXdN%2BR0HoBxAyygqjO8T%2FHYke5UFu9YKmlGaWuUHQvXg2mBjp%2F5ZT4AV9PROUh0evvY1VyAsPTMLqhtMQGOqUBALL0GDDYA%2Brh%2FTJBQbR%2FMoHqJ%2FrXFkFFAeYWJgLP60Bo1eCRK7V0XKu%2Bng6nMn971IVkAw7txFrzuukTKFlUGXYZVTUVNIVBdRL3tO3DxVBbZV%2FxLeaGbDgGUyO3e%2F3NuYyFHpXTG4QeSOXHKqUOSt4E9bbZzwsTqjxpCRRAJ8VHyikT8K3nr5%2F%2FTYJKff86NOkXeKbi0ls4PKyb6teBvzaOpt3I&X-Amz-Signature=6ed786e1061f04216b3dca9ee06b09858e5b754ba3c9e88b48584af0a1cee235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCOSHEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnFilUtLGM0Mjbc1bM3S4an4%2Bb6%2By7zjmTdbwm0fQ3gIga%2BEx7m386PN6GTo1X3pf30ogOpg0plCrQN1NK%2Bisz4wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7p3u%2BqjNHI2JrHyCrcA%2Fk7%2FGcyJ%2Ft%2F6bRtTB8%2F3MuPX%2BvwRfBbJYE32503JwSYn%2BBYUz%2BAPFevwZTLPmZqgtZDFP78cF0LEhalyyUwxdv71VCqRKtZQOAC8rwXG3GDqnDVGq0D%2Beu4oZnlo3tePknpK4lkbGj5CDjqB8OfFA3L5EYJ3169f29kRgzzbExvCONXvT0VEfmdnVhfjJlTy9zjvTCdd3GvtzPLNnOIXyvI5gg2lW6z49YYqOgsvtO1kpceX2i3Ha4m7wQg4mAZSEwA4GuOLoyCotsfRMct38Ef7VfJviZZ4%2BP8UXsOeN1fHgbrf26ozEDhQvbBaSdz5Y1kWT1Dic%2BXQfJrDBmFIcPuunJ%2FNvwksJiCHgL38Fxe5wgQUkqnx2kHAmYvkmBPjaOZpCc52scKkHw00L8UlM0dWAGtcchg6TyQuGL8gRtD%2BNZhePOPBSBMcTM1SY3qzsWBibq8Lsp8HztFBuUIgBxtSMi1fKtTCIWUVjnYvH28jp%2FRM4b1l3b%2FNGKKWYCoroVm%2Bx6JA3ihVNqSljt2BPIgvJEHtybf1q9AUZJGWGfPtJCMLRQXdN%2BR0HoBxAyygqjO8T%2FHYke5UFu9YKmlGaWuUHQvXg2mBjp%2F5ZT4AV9PROUh0evvY1VyAsPTMLqhtMQGOqUBALL0GDDYA%2Brh%2FTJBQbR%2FMoHqJ%2FrXFkFFAeYWJgLP60Bo1eCRK7V0XKu%2Bng6nMn971IVkAw7txFrzuukTKFlUGXYZVTUVNIVBdRL3tO3DxVBbZV%2FxLeaGbDgGUyO3e%2F3NuYyFHpXTG4QeSOXHKqUOSt4E9bbZzwsTqjxpCRRAJ8VHyikT8K3nr5%2F%2FTYJKff86NOkXeKbi0ls4PKyb6teBvzaOpt3I&X-Amz-Signature=3cc258151057d07572f3469cb2240d41d423f98b0e30cfa934b6b1ed0d10e070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCOSHEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnFilUtLGM0Mjbc1bM3S4an4%2Bb6%2By7zjmTdbwm0fQ3gIga%2BEx7m386PN6GTo1X3pf30ogOpg0plCrQN1NK%2Bisz4wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7p3u%2BqjNHI2JrHyCrcA%2Fk7%2FGcyJ%2Ft%2F6bRtTB8%2F3MuPX%2BvwRfBbJYE32503JwSYn%2BBYUz%2BAPFevwZTLPmZqgtZDFP78cF0LEhalyyUwxdv71VCqRKtZQOAC8rwXG3GDqnDVGq0D%2Beu4oZnlo3tePknpK4lkbGj5CDjqB8OfFA3L5EYJ3169f29kRgzzbExvCONXvT0VEfmdnVhfjJlTy9zjvTCdd3GvtzPLNnOIXyvI5gg2lW6z49YYqOgsvtO1kpceX2i3Ha4m7wQg4mAZSEwA4GuOLoyCotsfRMct38Ef7VfJviZZ4%2BP8UXsOeN1fHgbrf26ozEDhQvbBaSdz5Y1kWT1Dic%2BXQfJrDBmFIcPuunJ%2FNvwksJiCHgL38Fxe5wgQUkqnx2kHAmYvkmBPjaOZpCc52scKkHw00L8UlM0dWAGtcchg6TyQuGL8gRtD%2BNZhePOPBSBMcTM1SY3qzsWBibq8Lsp8HztFBuUIgBxtSMi1fKtTCIWUVjnYvH28jp%2FRM4b1l3b%2FNGKKWYCoroVm%2Bx6JA3ihVNqSljt2BPIgvJEHtybf1q9AUZJGWGfPtJCMLRQXdN%2BR0HoBxAyygqjO8T%2FHYke5UFu9YKmlGaWuUHQvXg2mBjp%2F5ZT4AV9PROUh0evvY1VyAsPTMLqhtMQGOqUBALL0GDDYA%2Brh%2FTJBQbR%2FMoHqJ%2FrXFkFFAeYWJgLP60Bo1eCRK7V0XKu%2Bng6nMn971IVkAw7txFrzuukTKFlUGXYZVTUVNIVBdRL3tO3DxVBbZV%2FxLeaGbDgGUyO3e%2F3NuYyFHpXTG4QeSOXHKqUOSt4E9bbZzwsTqjxpCRRAJ8VHyikT8K3nr5%2F%2FTYJKff86NOkXeKbi0ls4PKyb6teBvzaOpt3I&X-Amz-Signature=2c8a11087c9f5f72e841c8c17b8a910dd1aa2d923a0695dc59330d1d0efb7650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCOSHEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnFilUtLGM0Mjbc1bM3S4an4%2Bb6%2By7zjmTdbwm0fQ3gIga%2BEx7m386PN6GTo1X3pf30ogOpg0plCrQN1NK%2Bisz4wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7p3u%2BqjNHI2JrHyCrcA%2Fk7%2FGcyJ%2Ft%2F6bRtTB8%2F3MuPX%2BvwRfBbJYE32503JwSYn%2BBYUz%2BAPFevwZTLPmZqgtZDFP78cF0LEhalyyUwxdv71VCqRKtZQOAC8rwXG3GDqnDVGq0D%2Beu4oZnlo3tePknpK4lkbGj5CDjqB8OfFA3L5EYJ3169f29kRgzzbExvCONXvT0VEfmdnVhfjJlTy9zjvTCdd3GvtzPLNnOIXyvI5gg2lW6z49YYqOgsvtO1kpceX2i3Ha4m7wQg4mAZSEwA4GuOLoyCotsfRMct38Ef7VfJviZZ4%2BP8UXsOeN1fHgbrf26ozEDhQvbBaSdz5Y1kWT1Dic%2BXQfJrDBmFIcPuunJ%2FNvwksJiCHgL38Fxe5wgQUkqnx2kHAmYvkmBPjaOZpCc52scKkHw00L8UlM0dWAGtcchg6TyQuGL8gRtD%2BNZhePOPBSBMcTM1SY3qzsWBibq8Lsp8HztFBuUIgBxtSMi1fKtTCIWUVjnYvH28jp%2FRM4b1l3b%2FNGKKWYCoroVm%2Bx6JA3ihVNqSljt2BPIgvJEHtybf1q9AUZJGWGfPtJCMLRQXdN%2BR0HoBxAyygqjO8T%2FHYke5UFu9YKmlGaWuUHQvXg2mBjp%2F5ZT4AV9PROUh0evvY1VyAsPTMLqhtMQGOqUBALL0GDDYA%2Brh%2FTJBQbR%2FMoHqJ%2FrXFkFFAeYWJgLP60Bo1eCRK7V0XKu%2Bng6nMn971IVkAw7txFrzuukTKFlUGXYZVTUVNIVBdRL3tO3DxVBbZV%2FxLeaGbDgGUyO3e%2F3NuYyFHpXTG4QeSOXHKqUOSt4E9bbZzwsTqjxpCRRAJ8VHyikT8K3nr5%2F%2FTYJKff86NOkXeKbi0ls4PKyb6teBvzaOpt3I&X-Amz-Signature=3bf7dd3295e1e94f7b9718881207a7488f742d1a76d56c0bec16a68e268e82ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCOSHEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnFilUtLGM0Mjbc1bM3S4an4%2Bb6%2By7zjmTdbwm0fQ3gIga%2BEx7m386PN6GTo1X3pf30ogOpg0plCrQN1NK%2Bisz4wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7p3u%2BqjNHI2JrHyCrcA%2Fk7%2FGcyJ%2Ft%2F6bRtTB8%2F3MuPX%2BvwRfBbJYE32503JwSYn%2BBYUz%2BAPFevwZTLPmZqgtZDFP78cF0LEhalyyUwxdv71VCqRKtZQOAC8rwXG3GDqnDVGq0D%2Beu4oZnlo3tePknpK4lkbGj5CDjqB8OfFA3L5EYJ3169f29kRgzzbExvCONXvT0VEfmdnVhfjJlTy9zjvTCdd3GvtzPLNnOIXyvI5gg2lW6z49YYqOgsvtO1kpceX2i3Ha4m7wQg4mAZSEwA4GuOLoyCotsfRMct38Ef7VfJviZZ4%2BP8UXsOeN1fHgbrf26ozEDhQvbBaSdz5Y1kWT1Dic%2BXQfJrDBmFIcPuunJ%2FNvwksJiCHgL38Fxe5wgQUkqnx2kHAmYvkmBPjaOZpCc52scKkHw00L8UlM0dWAGtcchg6TyQuGL8gRtD%2BNZhePOPBSBMcTM1SY3qzsWBibq8Lsp8HztFBuUIgBxtSMi1fKtTCIWUVjnYvH28jp%2FRM4b1l3b%2FNGKKWYCoroVm%2Bx6JA3ihVNqSljt2BPIgvJEHtybf1q9AUZJGWGfPtJCMLRQXdN%2BR0HoBxAyygqjO8T%2FHYke5UFu9YKmlGaWuUHQvXg2mBjp%2F5ZT4AV9PROUh0evvY1VyAsPTMLqhtMQGOqUBALL0GDDYA%2Brh%2FTJBQbR%2FMoHqJ%2FrXFkFFAeYWJgLP60Bo1eCRK7V0XKu%2Bng6nMn971IVkAw7txFrzuukTKFlUGXYZVTUVNIVBdRL3tO3DxVBbZV%2FxLeaGbDgGUyO3e%2F3NuYyFHpXTG4QeSOXHKqUOSt4E9bbZzwsTqjxpCRRAJ8VHyikT8K3nr5%2F%2FTYJKff86NOkXeKbi0ls4PKyb6teBvzaOpt3I&X-Amz-Signature=1920b7b1243f86945e91f8c41857e6220070e3e751a19230441577a4683a3456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCOSHEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnFilUtLGM0Mjbc1bM3S4an4%2Bb6%2By7zjmTdbwm0fQ3gIga%2BEx7m386PN6GTo1X3pf30ogOpg0plCrQN1NK%2Bisz4wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7p3u%2BqjNHI2JrHyCrcA%2Fk7%2FGcyJ%2Ft%2F6bRtTB8%2F3MuPX%2BvwRfBbJYE32503JwSYn%2BBYUz%2BAPFevwZTLPmZqgtZDFP78cF0LEhalyyUwxdv71VCqRKtZQOAC8rwXG3GDqnDVGq0D%2Beu4oZnlo3tePknpK4lkbGj5CDjqB8OfFA3L5EYJ3169f29kRgzzbExvCONXvT0VEfmdnVhfjJlTy9zjvTCdd3GvtzPLNnOIXyvI5gg2lW6z49YYqOgsvtO1kpceX2i3Ha4m7wQg4mAZSEwA4GuOLoyCotsfRMct38Ef7VfJviZZ4%2BP8UXsOeN1fHgbrf26ozEDhQvbBaSdz5Y1kWT1Dic%2BXQfJrDBmFIcPuunJ%2FNvwksJiCHgL38Fxe5wgQUkqnx2kHAmYvkmBPjaOZpCc52scKkHw00L8UlM0dWAGtcchg6TyQuGL8gRtD%2BNZhePOPBSBMcTM1SY3qzsWBibq8Lsp8HztFBuUIgBxtSMi1fKtTCIWUVjnYvH28jp%2FRM4b1l3b%2FNGKKWYCoroVm%2Bx6JA3ihVNqSljt2BPIgvJEHtybf1q9AUZJGWGfPtJCMLRQXdN%2BR0HoBxAyygqjO8T%2FHYke5UFu9YKmlGaWuUHQvXg2mBjp%2F5ZT4AV9PROUh0evvY1VyAsPTMLqhtMQGOqUBALL0GDDYA%2Brh%2FTJBQbR%2FMoHqJ%2FrXFkFFAeYWJgLP60Bo1eCRK7V0XKu%2Bng6nMn971IVkAw7txFrzuukTKFlUGXYZVTUVNIVBdRL3tO3DxVBbZV%2FxLeaGbDgGUyO3e%2F3NuYyFHpXTG4QeSOXHKqUOSt4E9bbZzwsTqjxpCRRAJ8VHyikT8K3nr5%2F%2FTYJKff86NOkXeKbi0ls4PKyb6teBvzaOpt3I&X-Amz-Signature=df2a9a24f3e7b4498744940dd514756ad9016f6f6e42e6a60cd5968239d75e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCOSHEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnFilUtLGM0Mjbc1bM3S4an4%2Bb6%2By7zjmTdbwm0fQ3gIga%2BEx7m386PN6GTo1X3pf30ogOpg0plCrQN1NK%2Bisz4wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7p3u%2BqjNHI2JrHyCrcA%2Fk7%2FGcyJ%2Ft%2F6bRtTB8%2F3MuPX%2BvwRfBbJYE32503JwSYn%2BBYUz%2BAPFevwZTLPmZqgtZDFP78cF0LEhalyyUwxdv71VCqRKtZQOAC8rwXG3GDqnDVGq0D%2Beu4oZnlo3tePknpK4lkbGj5CDjqB8OfFA3L5EYJ3169f29kRgzzbExvCONXvT0VEfmdnVhfjJlTy9zjvTCdd3GvtzPLNnOIXyvI5gg2lW6z49YYqOgsvtO1kpceX2i3Ha4m7wQg4mAZSEwA4GuOLoyCotsfRMct38Ef7VfJviZZ4%2BP8UXsOeN1fHgbrf26ozEDhQvbBaSdz5Y1kWT1Dic%2BXQfJrDBmFIcPuunJ%2FNvwksJiCHgL38Fxe5wgQUkqnx2kHAmYvkmBPjaOZpCc52scKkHw00L8UlM0dWAGtcchg6TyQuGL8gRtD%2BNZhePOPBSBMcTM1SY3qzsWBibq8Lsp8HztFBuUIgBxtSMi1fKtTCIWUVjnYvH28jp%2FRM4b1l3b%2FNGKKWYCoroVm%2Bx6JA3ihVNqSljt2BPIgvJEHtybf1q9AUZJGWGfPtJCMLRQXdN%2BR0HoBxAyygqjO8T%2FHYke5UFu9YKmlGaWuUHQvXg2mBjp%2F5ZT4AV9PROUh0evvY1VyAsPTMLqhtMQGOqUBALL0GDDYA%2Brh%2FTJBQbR%2FMoHqJ%2FrXFkFFAeYWJgLP60Bo1eCRK7V0XKu%2Bng6nMn971IVkAw7txFrzuukTKFlUGXYZVTUVNIVBdRL3tO3DxVBbZV%2FxLeaGbDgGUyO3e%2F3NuYyFHpXTG4QeSOXHKqUOSt4E9bbZzwsTqjxpCRRAJ8VHyikT8K3nr5%2F%2FTYJKff86NOkXeKbi0ls4PKyb6teBvzaOpt3I&X-Amz-Signature=96586180ee89c6381568d09ef47f25cd22ec57bd4101a83cb945c8f65dfdb9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCOSHEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnFilUtLGM0Mjbc1bM3S4an4%2Bb6%2By7zjmTdbwm0fQ3gIga%2BEx7m386PN6GTo1X3pf30ogOpg0plCrQN1NK%2Bisz4wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7p3u%2BqjNHI2JrHyCrcA%2Fk7%2FGcyJ%2Ft%2F6bRtTB8%2F3MuPX%2BvwRfBbJYE32503JwSYn%2BBYUz%2BAPFevwZTLPmZqgtZDFP78cF0LEhalyyUwxdv71VCqRKtZQOAC8rwXG3GDqnDVGq0D%2Beu4oZnlo3tePknpK4lkbGj5CDjqB8OfFA3L5EYJ3169f29kRgzzbExvCONXvT0VEfmdnVhfjJlTy9zjvTCdd3GvtzPLNnOIXyvI5gg2lW6z49YYqOgsvtO1kpceX2i3Ha4m7wQg4mAZSEwA4GuOLoyCotsfRMct38Ef7VfJviZZ4%2BP8UXsOeN1fHgbrf26ozEDhQvbBaSdz5Y1kWT1Dic%2BXQfJrDBmFIcPuunJ%2FNvwksJiCHgL38Fxe5wgQUkqnx2kHAmYvkmBPjaOZpCc52scKkHw00L8UlM0dWAGtcchg6TyQuGL8gRtD%2BNZhePOPBSBMcTM1SY3qzsWBibq8Lsp8HztFBuUIgBxtSMi1fKtTCIWUVjnYvH28jp%2FRM4b1l3b%2FNGKKWYCoroVm%2Bx6JA3ihVNqSljt2BPIgvJEHtybf1q9AUZJGWGfPtJCMLRQXdN%2BR0HoBxAyygqjO8T%2FHYke5UFu9YKmlGaWuUHQvXg2mBjp%2F5ZT4AV9PROUh0evvY1VyAsPTMLqhtMQGOqUBALL0GDDYA%2Brh%2FTJBQbR%2FMoHqJ%2FrXFkFFAeYWJgLP60Bo1eCRK7V0XKu%2Bng6nMn971IVkAw7txFrzuukTKFlUGXYZVTUVNIVBdRL3tO3DxVBbZV%2FxLeaGbDgGUyO3e%2F3NuYyFHpXTG4QeSOXHKqUOSt4E9bbZzwsTqjxpCRRAJ8VHyikT8K3nr5%2F%2FTYJKff86NOkXeKbi0ls4PKyb6teBvzaOpt3I&X-Amz-Signature=9b80738849b8b0e4ca2319d0f101a9d7fccd1477ae3ff1f6957802016d019894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCOSHEQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnFilUtLGM0Mjbc1bM3S4an4%2Bb6%2By7zjmTdbwm0fQ3gIga%2BEx7m386PN6GTo1X3pf30ogOpg0plCrQN1NK%2Bisz4wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7p3u%2BqjNHI2JrHyCrcA%2Fk7%2FGcyJ%2Ft%2F6bRtTB8%2F3MuPX%2BvwRfBbJYE32503JwSYn%2BBYUz%2BAPFevwZTLPmZqgtZDFP78cF0LEhalyyUwxdv71VCqRKtZQOAC8rwXG3GDqnDVGq0D%2Beu4oZnlo3tePknpK4lkbGj5CDjqB8OfFA3L5EYJ3169f29kRgzzbExvCONXvT0VEfmdnVhfjJlTy9zjvTCdd3GvtzPLNnOIXyvI5gg2lW6z49YYqOgsvtO1kpceX2i3Ha4m7wQg4mAZSEwA4GuOLoyCotsfRMct38Ef7VfJviZZ4%2BP8UXsOeN1fHgbrf26ozEDhQvbBaSdz5Y1kWT1Dic%2BXQfJrDBmFIcPuunJ%2FNvwksJiCHgL38Fxe5wgQUkqnx2kHAmYvkmBPjaOZpCc52scKkHw00L8UlM0dWAGtcchg6TyQuGL8gRtD%2BNZhePOPBSBMcTM1SY3qzsWBibq8Lsp8HztFBuUIgBxtSMi1fKtTCIWUVjnYvH28jp%2FRM4b1l3b%2FNGKKWYCoroVm%2Bx6JA3ihVNqSljt2BPIgvJEHtybf1q9AUZJGWGfPtJCMLRQXdN%2BR0HoBxAyygqjO8T%2FHYke5UFu9YKmlGaWuUHQvXg2mBjp%2F5ZT4AV9PROUh0evvY1VyAsPTMLqhtMQGOqUBALL0GDDYA%2Brh%2FTJBQbR%2FMoHqJ%2FrXFkFFAeYWJgLP60Bo1eCRK7V0XKu%2Bng6nMn971IVkAw7txFrzuukTKFlUGXYZVTUVNIVBdRL3tO3DxVBbZV%2FxLeaGbDgGUyO3e%2F3NuYyFHpXTG4QeSOXHKqUOSt4E9bbZzwsTqjxpCRRAJ8VHyikT8K3nr5%2F%2FTYJKff86NOkXeKbi0ls4PKyb6teBvzaOpt3I&X-Amz-Signature=facb0f14c17d3cb35c86e540ab85627be84ee034d7d8dd8467d7db60bdff0eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
