---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROI4CRHV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFzVIfrcm9RpJ%2FvdRX4w3tkuU0wlePx0RxGpo278yV18AiBoZeZVo1zHaw2opFrI3S3cuSaDYFhTKwvtr8F%2BPU8IDyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQDtVEcqEjci4KnDkKtwDbXLbVcVzJrCHZlK0jNOYGNeXKqVFd2ZSr0ZGICD4MKl0RFhv1Lbbr4tRLXkDD4XYUUHFsT1shhja9aDAZX973qupSApuss4FGsVlNHStrakqcAYYBX2cVt0FmWccnJ1rdXSNkWJtvhWe9YIdQ0FYK1ldWmmbDDw3T0YNA1DxwDgOIHHU4gx19C9GcRZy0WGI%2FBqV58pFhkLMJ0Zcao9iqJ1a79%2BNo4Xy%2FwsG7jqlReZRFqq4AJ8tNd%2FvgQ%2BXodHPPQJMH6MBBt5Ejz%2F1mh1PIiGAwkBohSIKVjdPUsGuxlw3W1amFyr7s%2B8whIslHvoXclMoZ2ytB%2FdVzzATU6n3eHN2M06OfxhoWf8AwJjzQYxaLT%2F7O7yUgaqgCTOKTVnn%2Bp76dZABQArKqbpypvJ4D0IDRcgWcv6Ij%2FQHz%2FEjtO%2BdOpyrfU1vY8pcvHrweIpb9whsGPCZfrullJVeXB0u4WEdlxqEw%2B4z%2FohvRTc5QPgUYqPE8S7AIv9S4AQKinOlBtJ2tkdRpWuKCLEE9FaKX8Yl1%2BRzNznhz9qIokda%2BMIqUbktsPUhXEP%2FJRUhbfV3lF03n4QuESp%2B8IVUiy7QxCtNXvt2M5lsi4NhOJTzroCG4p%2FVY%2BCOnbkN%2BxMwkM7LvQY6pgFwJgvhIXL7zEONHfQXBEV1UrSeLjTIYm8P%2F88SfRzFlj1k73W9X%2BwTeVv99kQ7ssREK4mvtGVnhwchh9uGqbLyRJmGXb2nisdLKYo5C%2FP%2FIdSS6ythF3gIc1tVl4VVi01jhuvOzsf2W0%2BL%2F5vIuKs6CSMd%2BNBLWMdGCvSf6D4xMvc113S0C77dByOmxnfkByoo95By%2BwyaDmmlB%2F4AbbkGNwzUvkbA&X-Amz-Signature=1d34bfe8e579e5ddac005649238537806f0379ef74273fa193ff0f659e2efb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROI4CRHV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFzVIfrcm9RpJ%2FvdRX4w3tkuU0wlePx0RxGpo278yV18AiBoZeZVo1zHaw2opFrI3S3cuSaDYFhTKwvtr8F%2BPU8IDyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQDtVEcqEjci4KnDkKtwDbXLbVcVzJrCHZlK0jNOYGNeXKqVFd2ZSr0ZGICD4MKl0RFhv1Lbbr4tRLXkDD4XYUUHFsT1shhja9aDAZX973qupSApuss4FGsVlNHStrakqcAYYBX2cVt0FmWccnJ1rdXSNkWJtvhWe9YIdQ0FYK1ldWmmbDDw3T0YNA1DxwDgOIHHU4gx19C9GcRZy0WGI%2FBqV58pFhkLMJ0Zcao9iqJ1a79%2BNo4Xy%2FwsG7jqlReZRFqq4AJ8tNd%2FvgQ%2BXodHPPQJMH6MBBt5Ejz%2F1mh1PIiGAwkBohSIKVjdPUsGuxlw3W1amFyr7s%2B8whIslHvoXclMoZ2ytB%2FdVzzATU6n3eHN2M06OfxhoWf8AwJjzQYxaLT%2F7O7yUgaqgCTOKTVnn%2Bp76dZABQArKqbpypvJ4D0IDRcgWcv6Ij%2FQHz%2FEjtO%2BdOpyrfU1vY8pcvHrweIpb9whsGPCZfrullJVeXB0u4WEdlxqEw%2B4z%2FohvRTc5QPgUYqPE8S7AIv9S4AQKinOlBtJ2tkdRpWuKCLEE9FaKX8Yl1%2BRzNznhz9qIokda%2BMIqUbktsPUhXEP%2FJRUhbfV3lF03n4QuESp%2B8IVUiy7QxCtNXvt2M5lsi4NhOJTzroCG4p%2FVY%2BCOnbkN%2BxMwkM7LvQY6pgFwJgvhIXL7zEONHfQXBEV1UrSeLjTIYm8P%2F88SfRzFlj1k73W9X%2BwTeVv99kQ7ssREK4mvtGVnhwchh9uGqbLyRJmGXb2nisdLKYo5C%2FP%2FIdSS6ythF3gIc1tVl4VVi01jhuvOzsf2W0%2BL%2F5vIuKs6CSMd%2BNBLWMdGCvSf6D4xMvc113S0C77dByOmxnfkByoo95By%2BwyaDmmlB%2F4AbbkGNwzUvkbA&X-Amz-Signature=05c612d185648cdd42652ba3790c62d787404ed8bc9dceac2889df583fbe62be&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROI4CRHV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFzVIfrcm9RpJ%2FvdRX4w3tkuU0wlePx0RxGpo278yV18AiBoZeZVo1zHaw2opFrI3S3cuSaDYFhTKwvtr8F%2BPU8IDyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQDtVEcqEjci4KnDkKtwDbXLbVcVzJrCHZlK0jNOYGNeXKqVFd2ZSr0ZGICD4MKl0RFhv1Lbbr4tRLXkDD4XYUUHFsT1shhja9aDAZX973qupSApuss4FGsVlNHStrakqcAYYBX2cVt0FmWccnJ1rdXSNkWJtvhWe9YIdQ0FYK1ldWmmbDDw3T0YNA1DxwDgOIHHU4gx19C9GcRZy0WGI%2FBqV58pFhkLMJ0Zcao9iqJ1a79%2BNo4Xy%2FwsG7jqlReZRFqq4AJ8tNd%2FvgQ%2BXodHPPQJMH6MBBt5Ejz%2F1mh1PIiGAwkBohSIKVjdPUsGuxlw3W1amFyr7s%2B8whIslHvoXclMoZ2ytB%2FdVzzATU6n3eHN2M06OfxhoWf8AwJjzQYxaLT%2F7O7yUgaqgCTOKTVnn%2Bp76dZABQArKqbpypvJ4D0IDRcgWcv6Ij%2FQHz%2FEjtO%2BdOpyrfU1vY8pcvHrweIpb9whsGPCZfrullJVeXB0u4WEdlxqEw%2B4z%2FohvRTc5QPgUYqPE8S7AIv9S4AQKinOlBtJ2tkdRpWuKCLEE9FaKX8Yl1%2BRzNznhz9qIokda%2BMIqUbktsPUhXEP%2FJRUhbfV3lF03n4QuESp%2B8IVUiy7QxCtNXvt2M5lsi4NhOJTzroCG4p%2FVY%2BCOnbkN%2BxMwkM7LvQY6pgFwJgvhIXL7zEONHfQXBEV1UrSeLjTIYm8P%2F88SfRzFlj1k73W9X%2BwTeVv99kQ7ssREK4mvtGVnhwchh9uGqbLyRJmGXb2nisdLKYo5C%2FP%2FIdSS6ythF3gIc1tVl4VVi01jhuvOzsf2W0%2BL%2F5vIuKs6CSMd%2BNBLWMdGCvSf6D4xMvc113S0C77dByOmxnfkByoo95By%2BwyaDmmlB%2F4AbbkGNwzUvkbA&X-Amz-Signature=41ee75ef7e15e851081145f7f6aa4f0559ce73f3d8f00b1a2a2cbcb73d035f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROI4CRHV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFzVIfrcm9RpJ%2FvdRX4w3tkuU0wlePx0RxGpo278yV18AiBoZeZVo1zHaw2opFrI3S3cuSaDYFhTKwvtr8F%2BPU8IDyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQDtVEcqEjci4KnDkKtwDbXLbVcVzJrCHZlK0jNOYGNeXKqVFd2ZSr0ZGICD4MKl0RFhv1Lbbr4tRLXkDD4XYUUHFsT1shhja9aDAZX973qupSApuss4FGsVlNHStrakqcAYYBX2cVt0FmWccnJ1rdXSNkWJtvhWe9YIdQ0FYK1ldWmmbDDw3T0YNA1DxwDgOIHHU4gx19C9GcRZy0WGI%2FBqV58pFhkLMJ0Zcao9iqJ1a79%2BNo4Xy%2FwsG7jqlReZRFqq4AJ8tNd%2FvgQ%2BXodHPPQJMH6MBBt5Ejz%2F1mh1PIiGAwkBohSIKVjdPUsGuxlw3W1amFyr7s%2B8whIslHvoXclMoZ2ytB%2FdVzzATU6n3eHN2M06OfxhoWf8AwJjzQYxaLT%2F7O7yUgaqgCTOKTVnn%2Bp76dZABQArKqbpypvJ4D0IDRcgWcv6Ij%2FQHz%2FEjtO%2BdOpyrfU1vY8pcvHrweIpb9whsGPCZfrullJVeXB0u4WEdlxqEw%2B4z%2FohvRTc5QPgUYqPE8S7AIv9S4AQKinOlBtJ2tkdRpWuKCLEE9FaKX8Yl1%2BRzNznhz9qIokda%2BMIqUbktsPUhXEP%2FJRUhbfV3lF03n4QuESp%2B8IVUiy7QxCtNXvt2M5lsi4NhOJTzroCG4p%2FVY%2BCOnbkN%2BxMwkM7LvQY6pgFwJgvhIXL7zEONHfQXBEV1UrSeLjTIYm8P%2F88SfRzFlj1k73W9X%2BwTeVv99kQ7ssREK4mvtGVnhwchh9uGqbLyRJmGXb2nisdLKYo5C%2FP%2FIdSS6ythF3gIc1tVl4VVi01jhuvOzsf2W0%2BL%2F5vIuKs6CSMd%2BNBLWMdGCvSf6D4xMvc113S0C77dByOmxnfkByoo95By%2BwyaDmmlB%2F4AbbkGNwzUvkbA&X-Amz-Signature=e768d04262459a221bf31a6f40c0fb5e4a2765578857221cc4f51db807a5330b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROI4CRHV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFzVIfrcm9RpJ%2FvdRX4w3tkuU0wlePx0RxGpo278yV18AiBoZeZVo1zHaw2opFrI3S3cuSaDYFhTKwvtr8F%2BPU8IDyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQDtVEcqEjci4KnDkKtwDbXLbVcVzJrCHZlK0jNOYGNeXKqVFd2ZSr0ZGICD4MKl0RFhv1Lbbr4tRLXkDD4XYUUHFsT1shhja9aDAZX973qupSApuss4FGsVlNHStrakqcAYYBX2cVt0FmWccnJ1rdXSNkWJtvhWe9YIdQ0FYK1ldWmmbDDw3T0YNA1DxwDgOIHHU4gx19C9GcRZy0WGI%2FBqV58pFhkLMJ0Zcao9iqJ1a79%2BNo4Xy%2FwsG7jqlReZRFqq4AJ8tNd%2FvgQ%2BXodHPPQJMH6MBBt5Ejz%2F1mh1PIiGAwkBohSIKVjdPUsGuxlw3W1amFyr7s%2B8whIslHvoXclMoZ2ytB%2FdVzzATU6n3eHN2M06OfxhoWf8AwJjzQYxaLT%2F7O7yUgaqgCTOKTVnn%2Bp76dZABQArKqbpypvJ4D0IDRcgWcv6Ij%2FQHz%2FEjtO%2BdOpyrfU1vY8pcvHrweIpb9whsGPCZfrullJVeXB0u4WEdlxqEw%2B4z%2FohvRTc5QPgUYqPE8S7AIv9S4AQKinOlBtJ2tkdRpWuKCLEE9FaKX8Yl1%2BRzNznhz9qIokda%2BMIqUbktsPUhXEP%2FJRUhbfV3lF03n4QuESp%2B8IVUiy7QxCtNXvt2M5lsi4NhOJTzroCG4p%2FVY%2BCOnbkN%2BxMwkM7LvQY6pgFwJgvhIXL7zEONHfQXBEV1UrSeLjTIYm8P%2F88SfRzFlj1k73W9X%2BwTeVv99kQ7ssREK4mvtGVnhwchh9uGqbLyRJmGXb2nisdLKYo5C%2FP%2FIdSS6ythF3gIc1tVl4VVi01jhuvOzsf2W0%2BL%2F5vIuKs6CSMd%2BNBLWMdGCvSf6D4xMvc113S0C77dByOmxnfkByoo95By%2BwyaDmmlB%2F4AbbkGNwzUvkbA&X-Amz-Signature=accf732753ff33c570133431004ab91614a59686f5f37a41b8c6f18431e06401&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROI4CRHV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFzVIfrcm9RpJ%2FvdRX4w3tkuU0wlePx0RxGpo278yV18AiBoZeZVo1zHaw2opFrI3S3cuSaDYFhTKwvtr8F%2BPU8IDyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQDtVEcqEjci4KnDkKtwDbXLbVcVzJrCHZlK0jNOYGNeXKqVFd2ZSr0ZGICD4MKl0RFhv1Lbbr4tRLXkDD4XYUUHFsT1shhja9aDAZX973qupSApuss4FGsVlNHStrakqcAYYBX2cVt0FmWccnJ1rdXSNkWJtvhWe9YIdQ0FYK1ldWmmbDDw3T0YNA1DxwDgOIHHU4gx19C9GcRZy0WGI%2FBqV58pFhkLMJ0Zcao9iqJ1a79%2BNo4Xy%2FwsG7jqlReZRFqq4AJ8tNd%2FvgQ%2BXodHPPQJMH6MBBt5Ejz%2F1mh1PIiGAwkBohSIKVjdPUsGuxlw3W1amFyr7s%2B8whIslHvoXclMoZ2ytB%2FdVzzATU6n3eHN2M06OfxhoWf8AwJjzQYxaLT%2F7O7yUgaqgCTOKTVnn%2Bp76dZABQArKqbpypvJ4D0IDRcgWcv6Ij%2FQHz%2FEjtO%2BdOpyrfU1vY8pcvHrweIpb9whsGPCZfrullJVeXB0u4WEdlxqEw%2B4z%2FohvRTc5QPgUYqPE8S7AIv9S4AQKinOlBtJ2tkdRpWuKCLEE9FaKX8Yl1%2BRzNznhz9qIokda%2BMIqUbktsPUhXEP%2FJRUhbfV3lF03n4QuESp%2B8IVUiy7QxCtNXvt2M5lsi4NhOJTzroCG4p%2FVY%2BCOnbkN%2BxMwkM7LvQY6pgFwJgvhIXL7zEONHfQXBEV1UrSeLjTIYm8P%2F88SfRzFlj1k73W9X%2BwTeVv99kQ7ssREK4mvtGVnhwchh9uGqbLyRJmGXb2nisdLKYo5C%2FP%2FIdSS6ythF3gIc1tVl4VVi01jhuvOzsf2W0%2BL%2F5vIuKs6CSMd%2BNBLWMdGCvSf6D4xMvc113S0C77dByOmxnfkByoo95By%2BwyaDmmlB%2F4AbbkGNwzUvkbA&X-Amz-Signature=da44fb114a592c0337610ce3b72402c5f85229cc327e83e466842099914e663f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROI4CRHV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFzVIfrcm9RpJ%2FvdRX4w3tkuU0wlePx0RxGpo278yV18AiBoZeZVo1zHaw2opFrI3S3cuSaDYFhTKwvtr8F%2BPU8IDyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQDtVEcqEjci4KnDkKtwDbXLbVcVzJrCHZlK0jNOYGNeXKqVFd2ZSr0ZGICD4MKl0RFhv1Lbbr4tRLXkDD4XYUUHFsT1shhja9aDAZX973qupSApuss4FGsVlNHStrakqcAYYBX2cVt0FmWccnJ1rdXSNkWJtvhWe9YIdQ0FYK1ldWmmbDDw3T0YNA1DxwDgOIHHU4gx19C9GcRZy0WGI%2FBqV58pFhkLMJ0Zcao9iqJ1a79%2BNo4Xy%2FwsG7jqlReZRFqq4AJ8tNd%2FvgQ%2BXodHPPQJMH6MBBt5Ejz%2F1mh1PIiGAwkBohSIKVjdPUsGuxlw3W1amFyr7s%2B8whIslHvoXclMoZ2ytB%2FdVzzATU6n3eHN2M06OfxhoWf8AwJjzQYxaLT%2F7O7yUgaqgCTOKTVnn%2Bp76dZABQArKqbpypvJ4D0IDRcgWcv6Ij%2FQHz%2FEjtO%2BdOpyrfU1vY8pcvHrweIpb9whsGPCZfrullJVeXB0u4WEdlxqEw%2B4z%2FohvRTc5QPgUYqPE8S7AIv9S4AQKinOlBtJ2tkdRpWuKCLEE9FaKX8Yl1%2BRzNznhz9qIokda%2BMIqUbktsPUhXEP%2FJRUhbfV3lF03n4QuESp%2B8IVUiy7QxCtNXvt2M5lsi4NhOJTzroCG4p%2FVY%2BCOnbkN%2BxMwkM7LvQY6pgFwJgvhIXL7zEONHfQXBEV1UrSeLjTIYm8P%2F88SfRzFlj1k73W9X%2BwTeVv99kQ7ssREK4mvtGVnhwchh9uGqbLyRJmGXb2nisdLKYo5C%2FP%2FIdSS6ythF3gIc1tVl4VVi01jhuvOzsf2W0%2BL%2F5vIuKs6CSMd%2BNBLWMdGCvSf6D4xMvc113S0C77dByOmxnfkByoo95By%2BwyaDmmlB%2F4AbbkGNwzUvkbA&X-Amz-Signature=56387be2a4a06dc542fe196b78c25a27c24532cfc66be64a6f8f1758a9db00bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROI4CRHV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFzVIfrcm9RpJ%2FvdRX4w3tkuU0wlePx0RxGpo278yV18AiBoZeZVo1zHaw2opFrI3S3cuSaDYFhTKwvtr8F%2BPU8IDyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQDtVEcqEjci4KnDkKtwDbXLbVcVzJrCHZlK0jNOYGNeXKqVFd2ZSr0ZGICD4MKl0RFhv1Lbbr4tRLXkDD4XYUUHFsT1shhja9aDAZX973qupSApuss4FGsVlNHStrakqcAYYBX2cVt0FmWccnJ1rdXSNkWJtvhWe9YIdQ0FYK1ldWmmbDDw3T0YNA1DxwDgOIHHU4gx19C9GcRZy0WGI%2FBqV58pFhkLMJ0Zcao9iqJ1a79%2BNo4Xy%2FwsG7jqlReZRFqq4AJ8tNd%2FvgQ%2BXodHPPQJMH6MBBt5Ejz%2F1mh1PIiGAwkBohSIKVjdPUsGuxlw3W1amFyr7s%2B8whIslHvoXclMoZ2ytB%2FdVzzATU6n3eHN2M06OfxhoWf8AwJjzQYxaLT%2F7O7yUgaqgCTOKTVnn%2Bp76dZABQArKqbpypvJ4D0IDRcgWcv6Ij%2FQHz%2FEjtO%2BdOpyrfU1vY8pcvHrweIpb9whsGPCZfrullJVeXB0u4WEdlxqEw%2B4z%2FohvRTc5QPgUYqPE8S7AIv9S4AQKinOlBtJ2tkdRpWuKCLEE9FaKX8Yl1%2BRzNznhz9qIokda%2BMIqUbktsPUhXEP%2FJRUhbfV3lF03n4QuESp%2B8IVUiy7QxCtNXvt2M5lsi4NhOJTzroCG4p%2FVY%2BCOnbkN%2BxMwkM7LvQY6pgFwJgvhIXL7zEONHfQXBEV1UrSeLjTIYm8P%2F88SfRzFlj1k73W9X%2BwTeVv99kQ7ssREK4mvtGVnhwchh9uGqbLyRJmGXb2nisdLKYo5C%2FP%2FIdSS6ythF3gIc1tVl4VVi01jhuvOzsf2W0%2BL%2F5vIuKs6CSMd%2BNBLWMdGCvSf6D4xMvc113S0C77dByOmxnfkByoo95By%2BwyaDmmlB%2F4AbbkGNwzUvkbA&X-Amz-Signature=452125d8910312792ff0470b84b1d9850baaa6a723fa8de345f4f7dc0f1f91b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
