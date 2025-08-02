---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5KS57D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAN26YjFK8t1bGMzDjPLirhpLmdY9kbbq26YQ1u5kBXAiEAty9941ioHh0kqCn1AYeaKyg4n1jPtFeBUBLQVjo8aQgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmdIcZX1ZQRN7zQsircA9HZs5JY%2FkApgXZ2R1PIIH%2FCXOnT17dQU1C1IznWhqdqYsLR8a%2F5AvX0LCxGqCNHDE%2F%2B9N9LRvCgOYX2L5EkPUu3QiPBG620BZiDlPLL0v8X0ndCiMydSdKuqin7dejWyXo5TOa3WFbMmu1lI5CYU8g2xFhyJswqENPogmH6%2F5p72GmqDmCAJWkrdreijczJ5QlQeLEgRs5j1Liz7uZscpQ9jz7ic8orMNk83L2w4Osu4UXb9JNmMWYe2PwnR%2Bmq6hHhUdTbHPw7FVUws6nDVkqeBMDc5kfTYiPr43ZMwXKSBdOQDqJF70tRH9ox4DkbRWoqjbCewkDno1LfWwWkpteLX0s%2FhYDruDtbGEBbKhcsEZvvPCuQ9NlwNf7Rd3Q2N4%2F3RvECJE2W2FAWDu6Ea%2Feh52H%2Fj%2FI5t2XgTnVNQf7ljAGfnEPLPz8PVptYSziB9AkBZEw5M7HEHDXMbxqlrzcD5Fy2%2F7%2BmEFC40HauDoXtKuLCZ2M4x6tXFO8rsphs4scFG7wQcpX897KEgb%2FOvlxgTupfwHfds1mmbbz22bA%2Fxp%2F%2F69RiqDmEq5PIKsSqDT3AWCCoTJ64TOuYRUz1oD5RbgJ3aCZXRXSw5dLwSi70CEkqlKiSAe4idnoBMJD3tcQGOqUBRejyIekCi6KJM0DlZV5yrjXt7ZqTya16EM0hPpXDYoCyMUdC2bNd8Jm4sxsqbU0HdiNW8DEtPCF5aSK0RVFExOyTnm37zGymA2NLh7chK9Hg%2F7BRKw%2F11rPBFqm9hVVgKU89lfGEp%2F5HebOIXu5Ymb1Pp3PmQgMCsWVBnIrfmT7F7z0JD1kOWAt%2BwolEhMOhNgIvP5KHMUvXtIuiUukArL1Bzq3J&X-Amz-Signature=ac41397c367d63c6ea9e2517b61d59f94c0442c668f3e03152eb1d5882c5fa5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5KS57D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAN26YjFK8t1bGMzDjPLirhpLmdY9kbbq26YQ1u5kBXAiEAty9941ioHh0kqCn1AYeaKyg4n1jPtFeBUBLQVjo8aQgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmdIcZX1ZQRN7zQsircA9HZs5JY%2FkApgXZ2R1PIIH%2FCXOnT17dQU1C1IznWhqdqYsLR8a%2F5AvX0LCxGqCNHDE%2F%2B9N9LRvCgOYX2L5EkPUu3QiPBG620BZiDlPLL0v8X0ndCiMydSdKuqin7dejWyXo5TOa3WFbMmu1lI5CYU8g2xFhyJswqENPogmH6%2F5p72GmqDmCAJWkrdreijczJ5QlQeLEgRs5j1Liz7uZscpQ9jz7ic8orMNk83L2w4Osu4UXb9JNmMWYe2PwnR%2Bmq6hHhUdTbHPw7FVUws6nDVkqeBMDc5kfTYiPr43ZMwXKSBdOQDqJF70tRH9ox4DkbRWoqjbCewkDno1LfWwWkpteLX0s%2FhYDruDtbGEBbKhcsEZvvPCuQ9NlwNf7Rd3Q2N4%2F3RvECJE2W2FAWDu6Ea%2Feh52H%2Fj%2FI5t2XgTnVNQf7ljAGfnEPLPz8PVptYSziB9AkBZEw5M7HEHDXMbxqlrzcD5Fy2%2F7%2BmEFC40HauDoXtKuLCZ2M4x6tXFO8rsphs4scFG7wQcpX897KEgb%2FOvlxgTupfwHfds1mmbbz22bA%2Fxp%2F%2F69RiqDmEq5PIKsSqDT3AWCCoTJ64TOuYRUz1oD5RbgJ3aCZXRXSw5dLwSi70CEkqlKiSAe4idnoBMJD3tcQGOqUBRejyIekCi6KJM0DlZV5yrjXt7ZqTya16EM0hPpXDYoCyMUdC2bNd8Jm4sxsqbU0HdiNW8DEtPCF5aSK0RVFExOyTnm37zGymA2NLh7chK9Hg%2F7BRKw%2F11rPBFqm9hVVgKU89lfGEp%2F5HebOIXu5Ymb1Pp3PmQgMCsWVBnIrfmT7F7z0JD1kOWAt%2BwolEhMOhNgIvP5KHMUvXtIuiUukArL1Bzq3J&X-Amz-Signature=dfea06f93a0f3970fbb4e148db13d55d31843e99d83baef4c1836fbe8aad6f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5KS57D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAN26YjFK8t1bGMzDjPLirhpLmdY9kbbq26YQ1u5kBXAiEAty9941ioHh0kqCn1AYeaKyg4n1jPtFeBUBLQVjo8aQgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmdIcZX1ZQRN7zQsircA9HZs5JY%2FkApgXZ2R1PIIH%2FCXOnT17dQU1C1IznWhqdqYsLR8a%2F5AvX0LCxGqCNHDE%2F%2B9N9LRvCgOYX2L5EkPUu3QiPBG620BZiDlPLL0v8X0ndCiMydSdKuqin7dejWyXo5TOa3WFbMmu1lI5CYU8g2xFhyJswqENPogmH6%2F5p72GmqDmCAJWkrdreijczJ5QlQeLEgRs5j1Liz7uZscpQ9jz7ic8orMNk83L2w4Osu4UXb9JNmMWYe2PwnR%2Bmq6hHhUdTbHPw7FVUws6nDVkqeBMDc5kfTYiPr43ZMwXKSBdOQDqJF70tRH9ox4DkbRWoqjbCewkDno1LfWwWkpteLX0s%2FhYDruDtbGEBbKhcsEZvvPCuQ9NlwNf7Rd3Q2N4%2F3RvECJE2W2FAWDu6Ea%2Feh52H%2Fj%2FI5t2XgTnVNQf7ljAGfnEPLPz8PVptYSziB9AkBZEw5M7HEHDXMbxqlrzcD5Fy2%2F7%2BmEFC40HauDoXtKuLCZ2M4x6tXFO8rsphs4scFG7wQcpX897KEgb%2FOvlxgTupfwHfds1mmbbz22bA%2Fxp%2F%2F69RiqDmEq5PIKsSqDT3AWCCoTJ64TOuYRUz1oD5RbgJ3aCZXRXSw5dLwSi70CEkqlKiSAe4idnoBMJD3tcQGOqUBRejyIekCi6KJM0DlZV5yrjXt7ZqTya16EM0hPpXDYoCyMUdC2bNd8Jm4sxsqbU0HdiNW8DEtPCF5aSK0RVFExOyTnm37zGymA2NLh7chK9Hg%2F7BRKw%2F11rPBFqm9hVVgKU89lfGEp%2F5HebOIXu5Ymb1Pp3PmQgMCsWVBnIrfmT7F7z0JD1kOWAt%2BwolEhMOhNgIvP5KHMUvXtIuiUukArL1Bzq3J&X-Amz-Signature=b66d02d9fde755061c17833605ddd328e475b275ba5f9ae3047cda9e8481f0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5KS57D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAN26YjFK8t1bGMzDjPLirhpLmdY9kbbq26YQ1u5kBXAiEAty9941ioHh0kqCn1AYeaKyg4n1jPtFeBUBLQVjo8aQgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmdIcZX1ZQRN7zQsircA9HZs5JY%2FkApgXZ2R1PIIH%2FCXOnT17dQU1C1IznWhqdqYsLR8a%2F5AvX0LCxGqCNHDE%2F%2B9N9LRvCgOYX2L5EkPUu3QiPBG620BZiDlPLL0v8X0ndCiMydSdKuqin7dejWyXo5TOa3WFbMmu1lI5CYU8g2xFhyJswqENPogmH6%2F5p72GmqDmCAJWkrdreijczJ5QlQeLEgRs5j1Liz7uZscpQ9jz7ic8orMNk83L2w4Osu4UXb9JNmMWYe2PwnR%2Bmq6hHhUdTbHPw7FVUws6nDVkqeBMDc5kfTYiPr43ZMwXKSBdOQDqJF70tRH9ox4DkbRWoqjbCewkDno1LfWwWkpteLX0s%2FhYDruDtbGEBbKhcsEZvvPCuQ9NlwNf7Rd3Q2N4%2F3RvECJE2W2FAWDu6Ea%2Feh52H%2Fj%2FI5t2XgTnVNQf7ljAGfnEPLPz8PVptYSziB9AkBZEw5M7HEHDXMbxqlrzcD5Fy2%2F7%2BmEFC40HauDoXtKuLCZ2M4x6tXFO8rsphs4scFG7wQcpX897KEgb%2FOvlxgTupfwHfds1mmbbz22bA%2Fxp%2F%2F69RiqDmEq5PIKsSqDT3AWCCoTJ64TOuYRUz1oD5RbgJ3aCZXRXSw5dLwSi70CEkqlKiSAe4idnoBMJD3tcQGOqUBRejyIekCi6KJM0DlZV5yrjXt7ZqTya16EM0hPpXDYoCyMUdC2bNd8Jm4sxsqbU0HdiNW8DEtPCF5aSK0RVFExOyTnm37zGymA2NLh7chK9Hg%2F7BRKw%2F11rPBFqm9hVVgKU89lfGEp%2F5HebOIXu5Ymb1Pp3PmQgMCsWVBnIrfmT7F7z0JD1kOWAt%2BwolEhMOhNgIvP5KHMUvXtIuiUukArL1Bzq3J&X-Amz-Signature=af8aa0d861e3886406e2ddd684c40d08f907543ec248f45badc6817897b56b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5KS57D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAN26YjFK8t1bGMzDjPLirhpLmdY9kbbq26YQ1u5kBXAiEAty9941ioHh0kqCn1AYeaKyg4n1jPtFeBUBLQVjo8aQgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmdIcZX1ZQRN7zQsircA9HZs5JY%2FkApgXZ2R1PIIH%2FCXOnT17dQU1C1IznWhqdqYsLR8a%2F5AvX0LCxGqCNHDE%2F%2B9N9LRvCgOYX2L5EkPUu3QiPBG620BZiDlPLL0v8X0ndCiMydSdKuqin7dejWyXo5TOa3WFbMmu1lI5CYU8g2xFhyJswqENPogmH6%2F5p72GmqDmCAJWkrdreijczJ5QlQeLEgRs5j1Liz7uZscpQ9jz7ic8orMNk83L2w4Osu4UXb9JNmMWYe2PwnR%2Bmq6hHhUdTbHPw7FVUws6nDVkqeBMDc5kfTYiPr43ZMwXKSBdOQDqJF70tRH9ox4DkbRWoqjbCewkDno1LfWwWkpteLX0s%2FhYDruDtbGEBbKhcsEZvvPCuQ9NlwNf7Rd3Q2N4%2F3RvECJE2W2FAWDu6Ea%2Feh52H%2Fj%2FI5t2XgTnVNQf7ljAGfnEPLPz8PVptYSziB9AkBZEw5M7HEHDXMbxqlrzcD5Fy2%2F7%2BmEFC40HauDoXtKuLCZ2M4x6tXFO8rsphs4scFG7wQcpX897KEgb%2FOvlxgTupfwHfds1mmbbz22bA%2Fxp%2F%2F69RiqDmEq5PIKsSqDT3AWCCoTJ64TOuYRUz1oD5RbgJ3aCZXRXSw5dLwSi70CEkqlKiSAe4idnoBMJD3tcQGOqUBRejyIekCi6KJM0DlZV5yrjXt7ZqTya16EM0hPpXDYoCyMUdC2bNd8Jm4sxsqbU0HdiNW8DEtPCF5aSK0RVFExOyTnm37zGymA2NLh7chK9Hg%2F7BRKw%2F11rPBFqm9hVVgKU89lfGEp%2F5HebOIXu5Ymb1Pp3PmQgMCsWVBnIrfmT7F7z0JD1kOWAt%2BwolEhMOhNgIvP5KHMUvXtIuiUukArL1Bzq3J&X-Amz-Signature=00ab810013ca511763c19f60e7a418cafe41cbfb81bd68544fa22c151d9cc73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5KS57D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAN26YjFK8t1bGMzDjPLirhpLmdY9kbbq26YQ1u5kBXAiEAty9941ioHh0kqCn1AYeaKyg4n1jPtFeBUBLQVjo8aQgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmdIcZX1ZQRN7zQsircA9HZs5JY%2FkApgXZ2R1PIIH%2FCXOnT17dQU1C1IznWhqdqYsLR8a%2F5AvX0LCxGqCNHDE%2F%2B9N9LRvCgOYX2L5EkPUu3QiPBG620BZiDlPLL0v8X0ndCiMydSdKuqin7dejWyXo5TOa3WFbMmu1lI5CYU8g2xFhyJswqENPogmH6%2F5p72GmqDmCAJWkrdreijczJ5QlQeLEgRs5j1Liz7uZscpQ9jz7ic8orMNk83L2w4Osu4UXb9JNmMWYe2PwnR%2Bmq6hHhUdTbHPw7FVUws6nDVkqeBMDc5kfTYiPr43ZMwXKSBdOQDqJF70tRH9ox4DkbRWoqjbCewkDno1LfWwWkpteLX0s%2FhYDruDtbGEBbKhcsEZvvPCuQ9NlwNf7Rd3Q2N4%2F3RvECJE2W2FAWDu6Ea%2Feh52H%2Fj%2FI5t2XgTnVNQf7ljAGfnEPLPz8PVptYSziB9AkBZEw5M7HEHDXMbxqlrzcD5Fy2%2F7%2BmEFC40HauDoXtKuLCZ2M4x6tXFO8rsphs4scFG7wQcpX897KEgb%2FOvlxgTupfwHfds1mmbbz22bA%2Fxp%2F%2F69RiqDmEq5PIKsSqDT3AWCCoTJ64TOuYRUz1oD5RbgJ3aCZXRXSw5dLwSi70CEkqlKiSAe4idnoBMJD3tcQGOqUBRejyIekCi6KJM0DlZV5yrjXt7ZqTya16EM0hPpXDYoCyMUdC2bNd8Jm4sxsqbU0HdiNW8DEtPCF5aSK0RVFExOyTnm37zGymA2NLh7chK9Hg%2F7BRKw%2F11rPBFqm9hVVgKU89lfGEp%2F5HebOIXu5Ymb1Pp3PmQgMCsWVBnIrfmT7F7z0JD1kOWAt%2BwolEhMOhNgIvP5KHMUvXtIuiUukArL1Bzq3J&X-Amz-Signature=ef1ed3b3999888a4f6ed0f17f6b9c3915a749fc12f330c139f0c8a08b4aead5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5KS57D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAN26YjFK8t1bGMzDjPLirhpLmdY9kbbq26YQ1u5kBXAiEAty9941ioHh0kqCn1AYeaKyg4n1jPtFeBUBLQVjo8aQgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmdIcZX1ZQRN7zQsircA9HZs5JY%2FkApgXZ2R1PIIH%2FCXOnT17dQU1C1IznWhqdqYsLR8a%2F5AvX0LCxGqCNHDE%2F%2B9N9LRvCgOYX2L5EkPUu3QiPBG620BZiDlPLL0v8X0ndCiMydSdKuqin7dejWyXo5TOa3WFbMmu1lI5CYU8g2xFhyJswqENPogmH6%2F5p72GmqDmCAJWkrdreijczJ5QlQeLEgRs5j1Liz7uZscpQ9jz7ic8orMNk83L2w4Osu4UXb9JNmMWYe2PwnR%2Bmq6hHhUdTbHPw7FVUws6nDVkqeBMDc5kfTYiPr43ZMwXKSBdOQDqJF70tRH9ox4DkbRWoqjbCewkDno1LfWwWkpteLX0s%2FhYDruDtbGEBbKhcsEZvvPCuQ9NlwNf7Rd3Q2N4%2F3RvECJE2W2FAWDu6Ea%2Feh52H%2Fj%2FI5t2XgTnVNQf7ljAGfnEPLPz8PVptYSziB9AkBZEw5M7HEHDXMbxqlrzcD5Fy2%2F7%2BmEFC40HauDoXtKuLCZ2M4x6tXFO8rsphs4scFG7wQcpX897KEgb%2FOvlxgTupfwHfds1mmbbz22bA%2Fxp%2F%2F69RiqDmEq5PIKsSqDT3AWCCoTJ64TOuYRUz1oD5RbgJ3aCZXRXSw5dLwSi70CEkqlKiSAe4idnoBMJD3tcQGOqUBRejyIekCi6KJM0DlZV5yrjXt7ZqTya16EM0hPpXDYoCyMUdC2bNd8Jm4sxsqbU0HdiNW8DEtPCF5aSK0RVFExOyTnm37zGymA2NLh7chK9Hg%2F7BRKw%2F11rPBFqm9hVVgKU89lfGEp%2F5HebOIXu5Ymb1Pp3PmQgMCsWVBnIrfmT7F7z0JD1kOWAt%2BwolEhMOhNgIvP5KHMUvXtIuiUukArL1Bzq3J&X-Amz-Signature=2e6c6860ab2e7dd075cee3c6c38fd73bdec8aebf6c4ebe2614fcc88f3856ba2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5KS57D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAN26YjFK8t1bGMzDjPLirhpLmdY9kbbq26YQ1u5kBXAiEAty9941ioHh0kqCn1AYeaKyg4n1jPtFeBUBLQVjo8aQgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmdIcZX1ZQRN7zQsircA9HZs5JY%2FkApgXZ2R1PIIH%2FCXOnT17dQU1C1IznWhqdqYsLR8a%2F5AvX0LCxGqCNHDE%2F%2B9N9LRvCgOYX2L5EkPUu3QiPBG620BZiDlPLL0v8X0ndCiMydSdKuqin7dejWyXo5TOa3WFbMmu1lI5CYU8g2xFhyJswqENPogmH6%2F5p72GmqDmCAJWkrdreijczJ5QlQeLEgRs5j1Liz7uZscpQ9jz7ic8orMNk83L2w4Osu4UXb9JNmMWYe2PwnR%2Bmq6hHhUdTbHPw7FVUws6nDVkqeBMDc5kfTYiPr43ZMwXKSBdOQDqJF70tRH9ox4DkbRWoqjbCewkDno1LfWwWkpteLX0s%2FhYDruDtbGEBbKhcsEZvvPCuQ9NlwNf7Rd3Q2N4%2F3RvECJE2W2FAWDu6Ea%2Feh52H%2Fj%2FI5t2XgTnVNQf7ljAGfnEPLPz8PVptYSziB9AkBZEw5M7HEHDXMbxqlrzcD5Fy2%2F7%2BmEFC40HauDoXtKuLCZ2M4x6tXFO8rsphs4scFG7wQcpX897KEgb%2FOvlxgTupfwHfds1mmbbz22bA%2Fxp%2F%2F69RiqDmEq5PIKsSqDT3AWCCoTJ64TOuYRUz1oD5RbgJ3aCZXRXSw5dLwSi70CEkqlKiSAe4idnoBMJD3tcQGOqUBRejyIekCi6KJM0DlZV5yrjXt7ZqTya16EM0hPpXDYoCyMUdC2bNd8Jm4sxsqbU0HdiNW8DEtPCF5aSK0RVFExOyTnm37zGymA2NLh7chK9Hg%2F7BRKw%2F11rPBFqm9hVVgKU89lfGEp%2F5HebOIXu5Ymb1Pp3PmQgMCsWVBnIrfmT7F7z0JD1kOWAt%2BwolEhMOhNgIvP5KHMUvXtIuiUukArL1Bzq3J&X-Amz-Signature=ecda75b2a66b667cf4389b4f9a2c8084dc4cb88f6f1657bc9eae7c9d4bc7a674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
