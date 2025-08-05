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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUMLNGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAo6uWyss4QjhdaICGaytY5VWJhfVOa5sBPe27ifOtq%2BAiEA7mVU9ylWnAefX1PLNoAz87%2BGeP4U5z%2FNRuBzAs9hW%2BQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMMoVkOO65nQYVTZRCrcA6UgvZOeyeTCpy3Vwsm60ZDvvSYZTEse2SPzddTF3aLLZwyvXMbvaJG9ID1McVuswKLJXp3Mjm6BmN2HbnCxWaQCxExsAyIaF6xPn5uJN9cV9Ec3kD1I4c8NVFXkFNEl1uaX91HSxlVgCEv3Ubk4sCb9xRBg0f4iwfMrmv0nPtXFPNSL%2BQaEea0cgUSa9rIu2nIBIfQXjBQtj8PV2ConnhOvtdZNG4iMKWlILykvOXpny4r42h7BjlUOiNdaTD3QJLOq77ALYeze3FZfjgBVQgpXDbYZxcNMnwm6YWingxNxOzul6RRChi3AVU0%2Bn%2BBPQ5lfM67y1JCgwGoEqEBilQQkS5%2FlAtBLqRKmMDCUaeADEDrRdbBbg15FrYcE4X6pmoCWBYwswQYQpYQWqf1AjJqPsEwudpGk79e79XlaPqhStKRE0y3zbgxBajPvQPTsuex7Ye%2FGWAFm%2FTHJUwBkukw%2F4qsiskG%2BEZxZzPn7%2Bmmq2SSX3B6OKSCqRzDgU006oQCSfqLymSmIgdb%2BFT6nQLQ3cHE1VjO9cnSW6uWjzRBiFu4XXVQVPaxdskmN9F3ivcauj8TQ2GAj53adwzth14rEeUBnh4poSheOT3iMTgl43nfSnIlCfNhg3kLHMPLaxsQGOqUBt53mrHfbBGpyNMNkDVAZX8vq2EuSMhAp86DEN0BscEMqaFEALkHs3gmI3jNxM7KhELflihpmGfBVKFHj8NCuNopZAJ568%2FH6%2FQ47u84ofYHqOVnANaNCEAnEC6D6fXss4smZiX5qj6QI%2F8ltUHr%2Bigy1X%2FCKlxEG1ZvVHsCmJYcqbUe9btGcnig8Jm9CxdDOE96cW76xNLjvFjW4Wz5trLy6zmaN&X-Amz-Signature=2625d9dad95bac1c5a768af75885fc6b1dd1aeaf2b16ca1210da1a617214a8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZFQVPJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH2YC3jaQ73ZznRdGk%2BljIhlQFvViI8PqtMTptDmhn%2B7AiEA4%2BqP2vD2%2BtnPxsHSYqw033%2B5owi2md3kAqbGMEKFkMgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHR9lQnqkjfq2OYQWCrcAwS6duV0tld86GtitBeVK8RY8qkGH5SC9diduxa%2F86zBpxW%2BXS%2FBEyshp23RUmn9dKdZQ4O%2Fj%2FMSGVvGxKQQY0C4cKIo%2FJg9EMwnb5hDDuLj%2BvdVApcbKKmfAQl6eb483MFSUxIWx2Zgb4nPFmJcg92XZ1JeOMZEab%2F%2BfxKvJa4%2FPRRKAC%2FJD4tbRTNN3UVXMiwGFnKnIfUeBt9L8l0wfYnHuhUK7dJ5tbYPn5anADC73gBgNSkQwpBJpL%2FXAzxlyGWbeuuU7NgDZ5O4rt5zFjSG7Ov6eK8dpkpsvlLmWuO5C1Oj8OlmdNK3vs7bTQCVmTd%2BvugUUOLB9JEW34OcBdetMGgIkqlAIKstYZ17S8iM58iOh2dlFDyRVxE3t6GaAQUJK4f6tNwzqJO8Y3tTo%2B%2FClIY0jn1yiTZ%2FD6MCv93PJ%2BxcXABy4q7U0WNN4%2FdkHn8azrhIfiHxqYfSKs2tBJz8fwasRa2O2ewRgKgVPyV%2B02yHyBj6Et8%2F80RHyy5NuewPU%2Fr8cSlFbNbNeMvJskjgh9TRYRKz%2FzBomfJxxIrupsjqFImcklgd8dGUH07Ixj92Y7jBZNSCX64x%2Bd9pW7heYyLfjnayize4J9j0CjTkd8AX7YLl4EPbVxzqMKHaxsQGOqUBQ6FmiyJ9HV5u4XhwNU5Au8sMfPVp%2B4hViGhoaAaJr7RFShPGydn2A7jeyHFLXe%2FyYmnokK%2F3IL8rcL%2Bzn3MIYdqMdZP2VUi6pecajTVIYVa%2B4mKoaxw6fTSLVOBEh3mINytM01TK8bUe%2FrkdmcYhb3EnXhYZPKj5GS72WeMsNEBnJC4Hi5lxAJgxMSDQWmefbGAp6esQkFOF3BdIf4FS9sUgiUQ9&X-Amz-Signature=76c213e3edd7cbaf2917f7490897613d361c0c3594e69c2ea212a38ad2584e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZFQVPJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH2YC3jaQ73ZznRdGk%2BljIhlQFvViI8PqtMTptDmhn%2B7AiEA4%2BqP2vD2%2BtnPxsHSYqw033%2B5owi2md3kAqbGMEKFkMgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHR9lQnqkjfq2OYQWCrcAwS6duV0tld86GtitBeVK8RY8qkGH5SC9diduxa%2F86zBpxW%2BXS%2FBEyshp23RUmn9dKdZQ4O%2Fj%2FMSGVvGxKQQY0C4cKIo%2FJg9EMwnb5hDDuLj%2BvdVApcbKKmfAQl6eb483MFSUxIWx2Zgb4nPFmJcg92XZ1JeOMZEab%2F%2BfxKvJa4%2FPRRKAC%2FJD4tbRTNN3UVXMiwGFnKnIfUeBt9L8l0wfYnHuhUK7dJ5tbYPn5anADC73gBgNSkQwpBJpL%2FXAzxlyGWbeuuU7NgDZ5O4rt5zFjSG7Ov6eK8dpkpsvlLmWuO5C1Oj8OlmdNK3vs7bTQCVmTd%2BvugUUOLB9JEW34OcBdetMGgIkqlAIKstYZ17S8iM58iOh2dlFDyRVxE3t6GaAQUJK4f6tNwzqJO8Y3tTo%2B%2FClIY0jn1yiTZ%2FD6MCv93PJ%2BxcXABy4q7U0WNN4%2FdkHn8azrhIfiHxqYfSKs2tBJz8fwasRa2O2ewRgKgVPyV%2B02yHyBj6Et8%2F80RHyy5NuewPU%2Fr8cSlFbNbNeMvJskjgh9TRYRKz%2FzBomfJxxIrupsjqFImcklgd8dGUH07Ixj92Y7jBZNSCX64x%2Bd9pW7heYyLfjnayize4J9j0CjTkd8AX7YLl4EPbVxzqMKHaxsQGOqUBQ6FmiyJ9HV5u4XhwNU5Au8sMfPVp%2B4hViGhoaAaJr7RFShPGydn2A7jeyHFLXe%2FyYmnokK%2F3IL8rcL%2Bzn3MIYdqMdZP2VUi6pecajTVIYVa%2B4mKoaxw6fTSLVOBEh3mINytM01TK8bUe%2FrkdmcYhb3EnXhYZPKj5GS72WeMsNEBnJC4Hi5lxAJgxMSDQWmefbGAp6esQkFOF3BdIf4FS9sUgiUQ9&X-Amz-Signature=7d5645ff08912fc6cb2f116e8a41f713bd8110a0190d6be22acd41788c106aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZFQVPJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH2YC3jaQ73ZznRdGk%2BljIhlQFvViI8PqtMTptDmhn%2B7AiEA4%2BqP2vD2%2BtnPxsHSYqw033%2B5owi2md3kAqbGMEKFkMgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHR9lQnqkjfq2OYQWCrcAwS6duV0tld86GtitBeVK8RY8qkGH5SC9diduxa%2F86zBpxW%2BXS%2FBEyshp23RUmn9dKdZQ4O%2Fj%2FMSGVvGxKQQY0C4cKIo%2FJg9EMwnb5hDDuLj%2BvdVApcbKKmfAQl6eb483MFSUxIWx2Zgb4nPFmJcg92XZ1JeOMZEab%2F%2BfxKvJa4%2FPRRKAC%2FJD4tbRTNN3UVXMiwGFnKnIfUeBt9L8l0wfYnHuhUK7dJ5tbYPn5anADC73gBgNSkQwpBJpL%2FXAzxlyGWbeuuU7NgDZ5O4rt5zFjSG7Ov6eK8dpkpsvlLmWuO5C1Oj8OlmdNK3vs7bTQCVmTd%2BvugUUOLB9JEW34OcBdetMGgIkqlAIKstYZ17S8iM58iOh2dlFDyRVxE3t6GaAQUJK4f6tNwzqJO8Y3tTo%2B%2FClIY0jn1yiTZ%2FD6MCv93PJ%2BxcXABy4q7U0WNN4%2FdkHn8azrhIfiHxqYfSKs2tBJz8fwasRa2O2ewRgKgVPyV%2B02yHyBj6Et8%2F80RHyy5NuewPU%2Fr8cSlFbNbNeMvJskjgh9TRYRKz%2FzBomfJxxIrupsjqFImcklgd8dGUH07Ixj92Y7jBZNSCX64x%2Bd9pW7heYyLfjnayize4J9j0CjTkd8AX7YLl4EPbVxzqMKHaxsQGOqUBQ6FmiyJ9HV5u4XhwNU5Au8sMfPVp%2B4hViGhoaAaJr7RFShPGydn2A7jeyHFLXe%2FyYmnokK%2F3IL8rcL%2Bzn3MIYdqMdZP2VUi6pecajTVIYVa%2B4mKoaxw6fTSLVOBEh3mINytM01TK8bUe%2FrkdmcYhb3EnXhYZPKj5GS72WeMsNEBnJC4Hi5lxAJgxMSDQWmefbGAp6esQkFOF3BdIf4FS9sUgiUQ9&X-Amz-Signature=941020daa36e2d3bc37bdd38ad9794584f60e1ec7c596ddc72d4b74b9a424ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZFQVPJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH2YC3jaQ73ZznRdGk%2BljIhlQFvViI8PqtMTptDmhn%2B7AiEA4%2BqP2vD2%2BtnPxsHSYqw033%2B5owi2md3kAqbGMEKFkMgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHR9lQnqkjfq2OYQWCrcAwS6duV0tld86GtitBeVK8RY8qkGH5SC9diduxa%2F86zBpxW%2BXS%2FBEyshp23RUmn9dKdZQ4O%2Fj%2FMSGVvGxKQQY0C4cKIo%2FJg9EMwnb5hDDuLj%2BvdVApcbKKmfAQl6eb483MFSUxIWx2Zgb4nPFmJcg92XZ1JeOMZEab%2F%2BfxKvJa4%2FPRRKAC%2FJD4tbRTNN3UVXMiwGFnKnIfUeBt9L8l0wfYnHuhUK7dJ5tbYPn5anADC73gBgNSkQwpBJpL%2FXAzxlyGWbeuuU7NgDZ5O4rt5zFjSG7Ov6eK8dpkpsvlLmWuO5C1Oj8OlmdNK3vs7bTQCVmTd%2BvugUUOLB9JEW34OcBdetMGgIkqlAIKstYZ17S8iM58iOh2dlFDyRVxE3t6GaAQUJK4f6tNwzqJO8Y3tTo%2B%2FClIY0jn1yiTZ%2FD6MCv93PJ%2BxcXABy4q7U0WNN4%2FdkHn8azrhIfiHxqYfSKs2tBJz8fwasRa2O2ewRgKgVPyV%2B02yHyBj6Et8%2F80RHyy5NuewPU%2Fr8cSlFbNbNeMvJskjgh9TRYRKz%2FzBomfJxxIrupsjqFImcklgd8dGUH07Ixj92Y7jBZNSCX64x%2Bd9pW7heYyLfjnayize4J9j0CjTkd8AX7YLl4EPbVxzqMKHaxsQGOqUBQ6FmiyJ9HV5u4XhwNU5Au8sMfPVp%2B4hViGhoaAaJr7RFShPGydn2A7jeyHFLXe%2FyYmnokK%2F3IL8rcL%2Bzn3MIYdqMdZP2VUi6pecajTVIYVa%2B4mKoaxw6fTSLVOBEh3mINytM01TK8bUe%2FrkdmcYhb3EnXhYZPKj5GS72WeMsNEBnJC4Hi5lxAJgxMSDQWmefbGAp6esQkFOF3BdIf4FS9sUgiUQ9&X-Amz-Signature=257d52668d09dccc177faa14bf6f710e14866b804ef3fc8bdb511c6b9637aeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZFQVPJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH2YC3jaQ73ZznRdGk%2BljIhlQFvViI8PqtMTptDmhn%2B7AiEA4%2BqP2vD2%2BtnPxsHSYqw033%2B5owi2md3kAqbGMEKFkMgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHR9lQnqkjfq2OYQWCrcAwS6duV0tld86GtitBeVK8RY8qkGH5SC9diduxa%2F86zBpxW%2BXS%2FBEyshp23RUmn9dKdZQ4O%2Fj%2FMSGVvGxKQQY0C4cKIo%2FJg9EMwnb5hDDuLj%2BvdVApcbKKmfAQl6eb483MFSUxIWx2Zgb4nPFmJcg92XZ1JeOMZEab%2F%2BfxKvJa4%2FPRRKAC%2FJD4tbRTNN3UVXMiwGFnKnIfUeBt9L8l0wfYnHuhUK7dJ5tbYPn5anADC73gBgNSkQwpBJpL%2FXAzxlyGWbeuuU7NgDZ5O4rt5zFjSG7Ov6eK8dpkpsvlLmWuO5C1Oj8OlmdNK3vs7bTQCVmTd%2BvugUUOLB9JEW34OcBdetMGgIkqlAIKstYZ17S8iM58iOh2dlFDyRVxE3t6GaAQUJK4f6tNwzqJO8Y3tTo%2B%2FClIY0jn1yiTZ%2FD6MCv93PJ%2BxcXABy4q7U0WNN4%2FdkHn8azrhIfiHxqYfSKs2tBJz8fwasRa2O2ewRgKgVPyV%2B02yHyBj6Et8%2F80RHyy5NuewPU%2Fr8cSlFbNbNeMvJskjgh9TRYRKz%2FzBomfJxxIrupsjqFImcklgd8dGUH07Ixj92Y7jBZNSCX64x%2Bd9pW7heYyLfjnayize4J9j0CjTkd8AX7YLl4EPbVxzqMKHaxsQGOqUBQ6FmiyJ9HV5u4XhwNU5Au8sMfPVp%2B4hViGhoaAaJr7RFShPGydn2A7jeyHFLXe%2FyYmnokK%2F3IL8rcL%2Bzn3MIYdqMdZP2VUi6pecajTVIYVa%2B4mKoaxw6fTSLVOBEh3mINytM01TK8bUe%2FrkdmcYhb3EnXhYZPKj5GS72WeMsNEBnJC4Hi5lxAJgxMSDQWmefbGAp6esQkFOF3BdIf4FS9sUgiUQ9&X-Amz-Signature=ccc08c4cea7543ac0c97c46e47d6d627cab3ae77c13920cd8d9f6bc38abd8be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZFQVPJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH2YC3jaQ73ZznRdGk%2BljIhlQFvViI8PqtMTptDmhn%2B7AiEA4%2BqP2vD2%2BtnPxsHSYqw033%2B5owi2md3kAqbGMEKFkMgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHR9lQnqkjfq2OYQWCrcAwS6duV0tld86GtitBeVK8RY8qkGH5SC9diduxa%2F86zBpxW%2BXS%2FBEyshp23RUmn9dKdZQ4O%2Fj%2FMSGVvGxKQQY0C4cKIo%2FJg9EMwnb5hDDuLj%2BvdVApcbKKmfAQl6eb483MFSUxIWx2Zgb4nPFmJcg92XZ1JeOMZEab%2F%2BfxKvJa4%2FPRRKAC%2FJD4tbRTNN3UVXMiwGFnKnIfUeBt9L8l0wfYnHuhUK7dJ5tbYPn5anADC73gBgNSkQwpBJpL%2FXAzxlyGWbeuuU7NgDZ5O4rt5zFjSG7Ov6eK8dpkpsvlLmWuO5C1Oj8OlmdNK3vs7bTQCVmTd%2BvugUUOLB9JEW34OcBdetMGgIkqlAIKstYZ17S8iM58iOh2dlFDyRVxE3t6GaAQUJK4f6tNwzqJO8Y3tTo%2B%2FClIY0jn1yiTZ%2FD6MCv93PJ%2BxcXABy4q7U0WNN4%2FdkHn8azrhIfiHxqYfSKs2tBJz8fwasRa2O2ewRgKgVPyV%2B02yHyBj6Et8%2F80RHyy5NuewPU%2Fr8cSlFbNbNeMvJskjgh9TRYRKz%2FzBomfJxxIrupsjqFImcklgd8dGUH07Ixj92Y7jBZNSCX64x%2Bd9pW7heYyLfjnayize4J9j0CjTkd8AX7YLl4EPbVxzqMKHaxsQGOqUBQ6FmiyJ9HV5u4XhwNU5Au8sMfPVp%2B4hViGhoaAaJr7RFShPGydn2A7jeyHFLXe%2FyYmnokK%2F3IL8rcL%2Bzn3MIYdqMdZP2VUi6pecajTVIYVa%2B4mKoaxw6fTSLVOBEh3mINytM01TK8bUe%2FrkdmcYhb3EnXhYZPKj5GS72WeMsNEBnJC4Hi5lxAJgxMSDQWmefbGAp6esQkFOF3BdIf4FS9sUgiUQ9&X-Amz-Signature=086b29bb82fee0b663e973e337b7d2be0fd6c6f2f0b5ff39f58226d3ad0ea55e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZFQVPJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH2YC3jaQ73ZznRdGk%2BljIhlQFvViI8PqtMTptDmhn%2B7AiEA4%2BqP2vD2%2BtnPxsHSYqw033%2B5owi2md3kAqbGMEKFkMgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHR9lQnqkjfq2OYQWCrcAwS6duV0tld86GtitBeVK8RY8qkGH5SC9diduxa%2F86zBpxW%2BXS%2FBEyshp23RUmn9dKdZQ4O%2Fj%2FMSGVvGxKQQY0C4cKIo%2FJg9EMwnb5hDDuLj%2BvdVApcbKKmfAQl6eb483MFSUxIWx2Zgb4nPFmJcg92XZ1JeOMZEab%2F%2BfxKvJa4%2FPRRKAC%2FJD4tbRTNN3UVXMiwGFnKnIfUeBt9L8l0wfYnHuhUK7dJ5tbYPn5anADC73gBgNSkQwpBJpL%2FXAzxlyGWbeuuU7NgDZ5O4rt5zFjSG7Ov6eK8dpkpsvlLmWuO5C1Oj8OlmdNK3vs7bTQCVmTd%2BvugUUOLB9JEW34OcBdetMGgIkqlAIKstYZ17S8iM58iOh2dlFDyRVxE3t6GaAQUJK4f6tNwzqJO8Y3tTo%2B%2FClIY0jn1yiTZ%2FD6MCv93PJ%2BxcXABy4q7U0WNN4%2FdkHn8azrhIfiHxqYfSKs2tBJz8fwasRa2O2ewRgKgVPyV%2B02yHyBj6Et8%2F80RHyy5NuewPU%2Fr8cSlFbNbNeMvJskjgh9TRYRKz%2FzBomfJxxIrupsjqFImcklgd8dGUH07Ixj92Y7jBZNSCX64x%2Bd9pW7heYyLfjnayize4J9j0CjTkd8AX7YLl4EPbVxzqMKHaxsQGOqUBQ6FmiyJ9HV5u4XhwNU5Au8sMfPVp%2B4hViGhoaAaJr7RFShPGydn2A7jeyHFLXe%2FyYmnokK%2F3IL8rcL%2Bzn3MIYdqMdZP2VUi6pecajTVIYVa%2B4mKoaxw6fTSLVOBEh3mINytM01TK8bUe%2FrkdmcYhb3EnXhYZPKj5GS72WeMsNEBnJC4Hi5lxAJgxMSDQWmefbGAp6esQkFOF3BdIf4FS9sUgiUQ9&X-Amz-Signature=156d054bcfa5c37cb085a218dfd4949c2ff09810777f396416ee49f64ec9bd1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZFQVPJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH2YC3jaQ73ZznRdGk%2BljIhlQFvViI8PqtMTptDmhn%2B7AiEA4%2BqP2vD2%2BtnPxsHSYqw033%2B5owi2md3kAqbGMEKFkMgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHR9lQnqkjfq2OYQWCrcAwS6duV0tld86GtitBeVK8RY8qkGH5SC9diduxa%2F86zBpxW%2BXS%2FBEyshp23RUmn9dKdZQ4O%2Fj%2FMSGVvGxKQQY0C4cKIo%2FJg9EMwnb5hDDuLj%2BvdVApcbKKmfAQl6eb483MFSUxIWx2Zgb4nPFmJcg92XZ1JeOMZEab%2F%2BfxKvJa4%2FPRRKAC%2FJD4tbRTNN3UVXMiwGFnKnIfUeBt9L8l0wfYnHuhUK7dJ5tbYPn5anADC73gBgNSkQwpBJpL%2FXAzxlyGWbeuuU7NgDZ5O4rt5zFjSG7Ov6eK8dpkpsvlLmWuO5C1Oj8OlmdNK3vs7bTQCVmTd%2BvugUUOLB9JEW34OcBdetMGgIkqlAIKstYZ17S8iM58iOh2dlFDyRVxE3t6GaAQUJK4f6tNwzqJO8Y3tTo%2B%2FClIY0jn1yiTZ%2FD6MCv93PJ%2BxcXABy4q7U0WNN4%2FdkHn8azrhIfiHxqYfSKs2tBJz8fwasRa2O2ewRgKgVPyV%2B02yHyBj6Et8%2F80RHyy5NuewPU%2Fr8cSlFbNbNeMvJskjgh9TRYRKz%2FzBomfJxxIrupsjqFImcklgd8dGUH07Ixj92Y7jBZNSCX64x%2Bd9pW7heYyLfjnayize4J9j0CjTkd8AX7YLl4EPbVxzqMKHaxsQGOqUBQ6FmiyJ9HV5u4XhwNU5Au8sMfPVp%2B4hViGhoaAaJr7RFShPGydn2A7jeyHFLXe%2FyYmnokK%2F3IL8rcL%2Bzn3MIYdqMdZP2VUi6pecajTVIYVa%2B4mKoaxw6fTSLVOBEh3mINytM01TK8bUe%2FrkdmcYhb3EnXhYZPKj5GS72WeMsNEBnJC4Hi5lxAJgxMSDQWmefbGAp6esQkFOF3BdIf4FS9sUgiUQ9&X-Amz-Signature=bd6b6f8258507cb3a5fdeb02866abc47680d38f334906a68b252e7a948591315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZFQVPJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH2YC3jaQ73ZznRdGk%2BljIhlQFvViI8PqtMTptDmhn%2B7AiEA4%2BqP2vD2%2BtnPxsHSYqw033%2B5owi2md3kAqbGMEKFkMgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHR9lQnqkjfq2OYQWCrcAwS6duV0tld86GtitBeVK8RY8qkGH5SC9diduxa%2F86zBpxW%2BXS%2FBEyshp23RUmn9dKdZQ4O%2Fj%2FMSGVvGxKQQY0C4cKIo%2FJg9EMwnb5hDDuLj%2BvdVApcbKKmfAQl6eb483MFSUxIWx2Zgb4nPFmJcg92XZ1JeOMZEab%2F%2BfxKvJa4%2FPRRKAC%2FJD4tbRTNN3UVXMiwGFnKnIfUeBt9L8l0wfYnHuhUK7dJ5tbYPn5anADC73gBgNSkQwpBJpL%2FXAzxlyGWbeuuU7NgDZ5O4rt5zFjSG7Ov6eK8dpkpsvlLmWuO5C1Oj8OlmdNK3vs7bTQCVmTd%2BvugUUOLB9JEW34OcBdetMGgIkqlAIKstYZ17S8iM58iOh2dlFDyRVxE3t6GaAQUJK4f6tNwzqJO8Y3tTo%2B%2FClIY0jn1yiTZ%2FD6MCv93PJ%2BxcXABy4q7U0WNN4%2FdkHn8azrhIfiHxqYfSKs2tBJz8fwasRa2O2ewRgKgVPyV%2B02yHyBj6Et8%2F80RHyy5NuewPU%2Fr8cSlFbNbNeMvJskjgh9TRYRKz%2FzBomfJxxIrupsjqFImcklgd8dGUH07Ixj92Y7jBZNSCX64x%2Bd9pW7heYyLfjnayize4J9j0CjTkd8AX7YLl4EPbVxzqMKHaxsQGOqUBQ6FmiyJ9HV5u4XhwNU5Au8sMfPVp%2B4hViGhoaAaJr7RFShPGydn2A7jeyHFLXe%2FyYmnokK%2F3IL8rcL%2Bzn3MIYdqMdZP2VUi6pecajTVIYVa%2B4mKoaxw6fTSLVOBEh3mINytM01TK8bUe%2FrkdmcYhb3EnXhYZPKj5GS72WeMsNEBnJC4Hi5lxAJgxMSDQWmefbGAp6esQkFOF3BdIf4FS9sUgiUQ9&X-Amz-Signature=9d5fc2786292a99845c1ed1149a04d865bec8ef142b4030f6e831417828be57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZFQVPJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIH2YC3jaQ73ZznRdGk%2BljIhlQFvViI8PqtMTptDmhn%2B7AiEA4%2BqP2vD2%2BtnPxsHSYqw033%2B5owi2md3kAqbGMEKFkMgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHR9lQnqkjfq2OYQWCrcAwS6duV0tld86GtitBeVK8RY8qkGH5SC9diduxa%2F86zBpxW%2BXS%2FBEyshp23RUmn9dKdZQ4O%2Fj%2FMSGVvGxKQQY0C4cKIo%2FJg9EMwnb5hDDuLj%2BvdVApcbKKmfAQl6eb483MFSUxIWx2Zgb4nPFmJcg92XZ1JeOMZEab%2F%2BfxKvJa4%2FPRRKAC%2FJD4tbRTNN3UVXMiwGFnKnIfUeBt9L8l0wfYnHuhUK7dJ5tbYPn5anADC73gBgNSkQwpBJpL%2FXAzxlyGWbeuuU7NgDZ5O4rt5zFjSG7Ov6eK8dpkpsvlLmWuO5C1Oj8OlmdNK3vs7bTQCVmTd%2BvugUUOLB9JEW34OcBdetMGgIkqlAIKstYZ17S8iM58iOh2dlFDyRVxE3t6GaAQUJK4f6tNwzqJO8Y3tTo%2B%2FClIY0jn1yiTZ%2FD6MCv93PJ%2BxcXABy4q7U0WNN4%2FdkHn8azrhIfiHxqYfSKs2tBJz8fwasRa2O2ewRgKgVPyV%2B02yHyBj6Et8%2F80RHyy5NuewPU%2Fr8cSlFbNbNeMvJskjgh9TRYRKz%2FzBomfJxxIrupsjqFImcklgd8dGUH07Ixj92Y7jBZNSCX64x%2Bd9pW7heYyLfjnayize4J9j0CjTkd8AX7YLl4EPbVxzqMKHaxsQGOqUBQ6FmiyJ9HV5u4XhwNU5Au8sMfPVp%2B4hViGhoaAaJr7RFShPGydn2A7jeyHFLXe%2FyYmnokK%2F3IL8rcL%2Bzn3MIYdqMdZP2VUi6pecajTVIYVa%2B4mKoaxw6fTSLVOBEh3mINytM01TK8bUe%2FrkdmcYhb3EnXhYZPKj5GS72WeMsNEBnJC4Hi5lxAJgxMSDQWmefbGAp6esQkFOF3BdIf4FS9sUgiUQ9&X-Amz-Signature=4f4f8a8c41bf8c5398e74c244cd32b20ce598eade4dba782b722bad31e256d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
