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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVU2P5C%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCQGELHgfiRNrg9dby746lPBq%2FBCYA6WA6uaDMciy0%2FFQIgcJgCA5mrbT8qCvku8ruIdWLrCzuTRyiom4%2FTw1Vf5SsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI3WbSyJX25cBAreSrcAy7mB%2BYzCM3yHotHT561L6C3eFbqKBIer8HlrF0sD7FLZSbEkFlYDcA%2BB%2FonhEN4qRvRsS2PcXL9S0Odxf5OuJ6EVjvo6WTUW4UErQVgWAjuJboonK0AY2KPMRacFFzFe%2BZHGbOSbJ%2B1Jev68aICYCmHstvjVRs1eQkSefw7VknoVDq15fiRyvFJrRBej5UsfWtFZAnjG6GQRviZmw5YV9LXsbmVSsD9iIhXNPfllw32R80Hu14nJ%2FrGhCd77LJypxfUNbXwdChTCAQgbfrbhI8zIhB%2BuuqISrDNIR%2BceFNDMEOlJ4lb6P%2FvEjjqcCVjXJMZlE2QMBa4f1nBq%2FUkiBdtiTWX5XSwkrTpYcoco%2FmqBwkp09wyqKd2Mj2SBpoFQqk4pB8HMmJmwKrxJDwaXRpzM0TEEVbYAkFf1btNLkKiVvxQwOHQPSYAr9IFlSG%2B8LJ6rGG7%2FmQoGnoyYGEYG8VW9vLDlY9o4Z1ltX%2FnMWMjoQUg3Ctz3x04Y48L7Ga2cQJs1nmI1pR2b7tkGLKjOhvnbzexwn2%2BvIGL%2BzxcQ91CEFyIeheft9Ze%2Fhcft3UYvCM3IAj4qMi7NBNNxZ3AvjLM8SAkbwR5HALKs0mvRTUeY1N5qplf69xQB0BhMI2UqcIGOqUBbcuLkXoYbVPe3Rdmj6vKxajRTn%2BtuYDxZw6rkw%2BSGmHpaXYOLdki%2F3BM2Lb9EP0LoA%2BV72jtkhf2bptQw%2F9rudkE5gDa3rPbuRCWc33LlhLJXHmGcaKaftS3XKdKuLmdeLHYYfOAWqOB0KAnRUdoDVuYPgLXScNNeMcz7JlRj53HekP5neJgrfOImq13ON4acSXJzdlWxqM%2Bo3bRYxy8AFSdfFH%2B&X-Amz-Signature=60fea0ae689572e90b99d02f8ab8957fab533a15f52a868acaa655affa69a770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVU2P5C%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCQGELHgfiRNrg9dby746lPBq%2FBCYA6WA6uaDMciy0%2FFQIgcJgCA5mrbT8qCvku8ruIdWLrCzuTRyiom4%2FTw1Vf5SsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI3WbSyJX25cBAreSrcAy7mB%2BYzCM3yHotHT561L6C3eFbqKBIer8HlrF0sD7FLZSbEkFlYDcA%2BB%2FonhEN4qRvRsS2PcXL9S0Odxf5OuJ6EVjvo6WTUW4UErQVgWAjuJboonK0AY2KPMRacFFzFe%2BZHGbOSbJ%2B1Jev68aICYCmHstvjVRs1eQkSefw7VknoVDq15fiRyvFJrRBej5UsfWtFZAnjG6GQRviZmw5YV9LXsbmVSsD9iIhXNPfllw32R80Hu14nJ%2FrGhCd77LJypxfUNbXwdChTCAQgbfrbhI8zIhB%2BuuqISrDNIR%2BceFNDMEOlJ4lb6P%2FvEjjqcCVjXJMZlE2QMBa4f1nBq%2FUkiBdtiTWX5XSwkrTpYcoco%2FmqBwkp09wyqKd2Mj2SBpoFQqk4pB8HMmJmwKrxJDwaXRpzM0TEEVbYAkFf1btNLkKiVvxQwOHQPSYAr9IFlSG%2B8LJ6rGG7%2FmQoGnoyYGEYG8VW9vLDlY9o4Z1ltX%2FnMWMjoQUg3Ctz3x04Y48L7Ga2cQJs1nmI1pR2b7tkGLKjOhvnbzexwn2%2BvIGL%2BzxcQ91CEFyIeheft9Ze%2Fhcft3UYvCM3IAj4qMi7NBNNxZ3AvjLM8SAkbwR5HALKs0mvRTUeY1N5qplf69xQB0BhMI2UqcIGOqUBbcuLkXoYbVPe3Rdmj6vKxajRTn%2BtuYDxZw6rkw%2BSGmHpaXYOLdki%2F3BM2Lb9EP0LoA%2BV72jtkhf2bptQw%2F9rudkE5gDa3rPbuRCWc33LlhLJXHmGcaKaftS3XKdKuLmdeLHYYfOAWqOB0KAnRUdoDVuYPgLXScNNeMcz7JlRj53HekP5neJgrfOImq13ON4acSXJzdlWxqM%2Bo3bRYxy8AFSdfFH%2B&X-Amz-Signature=b823d441ab3d43f14ccfb0a8f37e62c5f14e7c66c577d3900ecf3c2a4cbac5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVU2P5C%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCQGELHgfiRNrg9dby746lPBq%2FBCYA6WA6uaDMciy0%2FFQIgcJgCA5mrbT8qCvku8ruIdWLrCzuTRyiom4%2FTw1Vf5SsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI3WbSyJX25cBAreSrcAy7mB%2BYzCM3yHotHT561L6C3eFbqKBIer8HlrF0sD7FLZSbEkFlYDcA%2BB%2FonhEN4qRvRsS2PcXL9S0Odxf5OuJ6EVjvo6WTUW4UErQVgWAjuJboonK0AY2KPMRacFFzFe%2BZHGbOSbJ%2B1Jev68aICYCmHstvjVRs1eQkSefw7VknoVDq15fiRyvFJrRBej5UsfWtFZAnjG6GQRviZmw5YV9LXsbmVSsD9iIhXNPfllw32R80Hu14nJ%2FrGhCd77LJypxfUNbXwdChTCAQgbfrbhI8zIhB%2BuuqISrDNIR%2BceFNDMEOlJ4lb6P%2FvEjjqcCVjXJMZlE2QMBa4f1nBq%2FUkiBdtiTWX5XSwkrTpYcoco%2FmqBwkp09wyqKd2Mj2SBpoFQqk4pB8HMmJmwKrxJDwaXRpzM0TEEVbYAkFf1btNLkKiVvxQwOHQPSYAr9IFlSG%2B8LJ6rGG7%2FmQoGnoyYGEYG8VW9vLDlY9o4Z1ltX%2FnMWMjoQUg3Ctz3x04Y48L7Ga2cQJs1nmI1pR2b7tkGLKjOhvnbzexwn2%2BvIGL%2BzxcQ91CEFyIeheft9Ze%2Fhcft3UYvCM3IAj4qMi7NBNNxZ3AvjLM8SAkbwR5HALKs0mvRTUeY1N5qplf69xQB0BhMI2UqcIGOqUBbcuLkXoYbVPe3Rdmj6vKxajRTn%2BtuYDxZw6rkw%2BSGmHpaXYOLdki%2F3BM2Lb9EP0LoA%2BV72jtkhf2bptQw%2F9rudkE5gDa3rPbuRCWc33LlhLJXHmGcaKaftS3XKdKuLmdeLHYYfOAWqOB0KAnRUdoDVuYPgLXScNNeMcz7JlRj53HekP5neJgrfOImq13ON4acSXJzdlWxqM%2Bo3bRYxy8AFSdfFH%2B&X-Amz-Signature=6fbe0adfe92378cd3bdff55efe7dafc4465ae5db284db9a5706385d1598b79ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVU2P5C%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCQGELHgfiRNrg9dby746lPBq%2FBCYA6WA6uaDMciy0%2FFQIgcJgCA5mrbT8qCvku8ruIdWLrCzuTRyiom4%2FTw1Vf5SsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI3WbSyJX25cBAreSrcAy7mB%2BYzCM3yHotHT561L6C3eFbqKBIer8HlrF0sD7FLZSbEkFlYDcA%2BB%2FonhEN4qRvRsS2PcXL9S0Odxf5OuJ6EVjvo6WTUW4UErQVgWAjuJboonK0AY2KPMRacFFzFe%2BZHGbOSbJ%2B1Jev68aICYCmHstvjVRs1eQkSefw7VknoVDq15fiRyvFJrRBej5UsfWtFZAnjG6GQRviZmw5YV9LXsbmVSsD9iIhXNPfllw32R80Hu14nJ%2FrGhCd77LJypxfUNbXwdChTCAQgbfrbhI8zIhB%2BuuqISrDNIR%2BceFNDMEOlJ4lb6P%2FvEjjqcCVjXJMZlE2QMBa4f1nBq%2FUkiBdtiTWX5XSwkrTpYcoco%2FmqBwkp09wyqKd2Mj2SBpoFQqk4pB8HMmJmwKrxJDwaXRpzM0TEEVbYAkFf1btNLkKiVvxQwOHQPSYAr9IFlSG%2B8LJ6rGG7%2FmQoGnoyYGEYG8VW9vLDlY9o4Z1ltX%2FnMWMjoQUg3Ctz3x04Y48L7Ga2cQJs1nmI1pR2b7tkGLKjOhvnbzexwn2%2BvIGL%2BzxcQ91CEFyIeheft9Ze%2Fhcft3UYvCM3IAj4qMi7NBNNxZ3AvjLM8SAkbwR5HALKs0mvRTUeY1N5qplf69xQB0BhMI2UqcIGOqUBbcuLkXoYbVPe3Rdmj6vKxajRTn%2BtuYDxZw6rkw%2BSGmHpaXYOLdki%2F3BM2Lb9EP0LoA%2BV72jtkhf2bptQw%2F9rudkE5gDa3rPbuRCWc33LlhLJXHmGcaKaftS3XKdKuLmdeLHYYfOAWqOB0KAnRUdoDVuYPgLXScNNeMcz7JlRj53HekP5neJgrfOImq13ON4acSXJzdlWxqM%2Bo3bRYxy8AFSdfFH%2B&X-Amz-Signature=f6bbdef1e6f8c83df9aa962cfb8aa541c76ca70211dfac9e51a0a3c5afc6b5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVU2P5C%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCQGELHgfiRNrg9dby746lPBq%2FBCYA6WA6uaDMciy0%2FFQIgcJgCA5mrbT8qCvku8ruIdWLrCzuTRyiom4%2FTw1Vf5SsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI3WbSyJX25cBAreSrcAy7mB%2BYzCM3yHotHT561L6C3eFbqKBIer8HlrF0sD7FLZSbEkFlYDcA%2BB%2FonhEN4qRvRsS2PcXL9S0Odxf5OuJ6EVjvo6WTUW4UErQVgWAjuJboonK0AY2KPMRacFFzFe%2BZHGbOSbJ%2B1Jev68aICYCmHstvjVRs1eQkSefw7VknoVDq15fiRyvFJrRBej5UsfWtFZAnjG6GQRviZmw5YV9LXsbmVSsD9iIhXNPfllw32R80Hu14nJ%2FrGhCd77LJypxfUNbXwdChTCAQgbfrbhI8zIhB%2BuuqISrDNIR%2BceFNDMEOlJ4lb6P%2FvEjjqcCVjXJMZlE2QMBa4f1nBq%2FUkiBdtiTWX5XSwkrTpYcoco%2FmqBwkp09wyqKd2Mj2SBpoFQqk4pB8HMmJmwKrxJDwaXRpzM0TEEVbYAkFf1btNLkKiVvxQwOHQPSYAr9IFlSG%2B8LJ6rGG7%2FmQoGnoyYGEYG8VW9vLDlY9o4Z1ltX%2FnMWMjoQUg3Ctz3x04Y48L7Ga2cQJs1nmI1pR2b7tkGLKjOhvnbzexwn2%2BvIGL%2BzxcQ91CEFyIeheft9Ze%2Fhcft3UYvCM3IAj4qMi7NBNNxZ3AvjLM8SAkbwR5HALKs0mvRTUeY1N5qplf69xQB0BhMI2UqcIGOqUBbcuLkXoYbVPe3Rdmj6vKxajRTn%2BtuYDxZw6rkw%2BSGmHpaXYOLdki%2F3BM2Lb9EP0LoA%2BV72jtkhf2bptQw%2F9rudkE5gDa3rPbuRCWc33LlhLJXHmGcaKaftS3XKdKuLmdeLHYYfOAWqOB0KAnRUdoDVuYPgLXScNNeMcz7JlRj53HekP5neJgrfOImq13ON4acSXJzdlWxqM%2Bo3bRYxy8AFSdfFH%2B&X-Amz-Signature=0f68344263dbb0d31d6525b5fc4cb629b8bc288735d93c55eeba972c4e4ef22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVU2P5C%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCQGELHgfiRNrg9dby746lPBq%2FBCYA6WA6uaDMciy0%2FFQIgcJgCA5mrbT8qCvku8ruIdWLrCzuTRyiom4%2FTw1Vf5SsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI3WbSyJX25cBAreSrcAy7mB%2BYzCM3yHotHT561L6C3eFbqKBIer8HlrF0sD7FLZSbEkFlYDcA%2BB%2FonhEN4qRvRsS2PcXL9S0Odxf5OuJ6EVjvo6WTUW4UErQVgWAjuJboonK0AY2KPMRacFFzFe%2BZHGbOSbJ%2B1Jev68aICYCmHstvjVRs1eQkSefw7VknoVDq15fiRyvFJrRBej5UsfWtFZAnjG6GQRviZmw5YV9LXsbmVSsD9iIhXNPfllw32R80Hu14nJ%2FrGhCd77LJypxfUNbXwdChTCAQgbfrbhI8zIhB%2BuuqISrDNIR%2BceFNDMEOlJ4lb6P%2FvEjjqcCVjXJMZlE2QMBa4f1nBq%2FUkiBdtiTWX5XSwkrTpYcoco%2FmqBwkp09wyqKd2Mj2SBpoFQqk4pB8HMmJmwKrxJDwaXRpzM0TEEVbYAkFf1btNLkKiVvxQwOHQPSYAr9IFlSG%2B8LJ6rGG7%2FmQoGnoyYGEYG8VW9vLDlY9o4Z1ltX%2FnMWMjoQUg3Ctz3x04Y48L7Ga2cQJs1nmI1pR2b7tkGLKjOhvnbzexwn2%2BvIGL%2BzxcQ91CEFyIeheft9Ze%2Fhcft3UYvCM3IAj4qMi7NBNNxZ3AvjLM8SAkbwR5HALKs0mvRTUeY1N5qplf69xQB0BhMI2UqcIGOqUBbcuLkXoYbVPe3Rdmj6vKxajRTn%2BtuYDxZw6rkw%2BSGmHpaXYOLdki%2F3BM2Lb9EP0LoA%2BV72jtkhf2bptQw%2F9rudkE5gDa3rPbuRCWc33LlhLJXHmGcaKaftS3XKdKuLmdeLHYYfOAWqOB0KAnRUdoDVuYPgLXScNNeMcz7JlRj53HekP5neJgrfOImq13ON4acSXJzdlWxqM%2Bo3bRYxy8AFSdfFH%2B&X-Amz-Signature=b4bb8842874e71c197e507518e3df03f54ca574d236477cb45299ada5ade4cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVU2P5C%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCQGELHgfiRNrg9dby746lPBq%2FBCYA6WA6uaDMciy0%2FFQIgcJgCA5mrbT8qCvku8ruIdWLrCzuTRyiom4%2FTw1Vf5SsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI3WbSyJX25cBAreSrcAy7mB%2BYzCM3yHotHT561L6C3eFbqKBIer8HlrF0sD7FLZSbEkFlYDcA%2BB%2FonhEN4qRvRsS2PcXL9S0Odxf5OuJ6EVjvo6WTUW4UErQVgWAjuJboonK0AY2KPMRacFFzFe%2BZHGbOSbJ%2B1Jev68aICYCmHstvjVRs1eQkSefw7VknoVDq15fiRyvFJrRBej5UsfWtFZAnjG6GQRviZmw5YV9LXsbmVSsD9iIhXNPfllw32R80Hu14nJ%2FrGhCd77LJypxfUNbXwdChTCAQgbfrbhI8zIhB%2BuuqISrDNIR%2BceFNDMEOlJ4lb6P%2FvEjjqcCVjXJMZlE2QMBa4f1nBq%2FUkiBdtiTWX5XSwkrTpYcoco%2FmqBwkp09wyqKd2Mj2SBpoFQqk4pB8HMmJmwKrxJDwaXRpzM0TEEVbYAkFf1btNLkKiVvxQwOHQPSYAr9IFlSG%2B8LJ6rGG7%2FmQoGnoyYGEYG8VW9vLDlY9o4Z1ltX%2FnMWMjoQUg3Ctz3x04Y48L7Ga2cQJs1nmI1pR2b7tkGLKjOhvnbzexwn2%2BvIGL%2BzxcQ91CEFyIeheft9Ze%2Fhcft3UYvCM3IAj4qMi7NBNNxZ3AvjLM8SAkbwR5HALKs0mvRTUeY1N5qplf69xQB0BhMI2UqcIGOqUBbcuLkXoYbVPe3Rdmj6vKxajRTn%2BtuYDxZw6rkw%2BSGmHpaXYOLdki%2F3BM2Lb9EP0LoA%2BV72jtkhf2bptQw%2F9rudkE5gDa3rPbuRCWc33LlhLJXHmGcaKaftS3XKdKuLmdeLHYYfOAWqOB0KAnRUdoDVuYPgLXScNNeMcz7JlRj53HekP5neJgrfOImq13ON4acSXJzdlWxqM%2Bo3bRYxy8AFSdfFH%2B&X-Amz-Signature=e7b335981805903c99e1fa1ac37beda36050ba399ea9c8549b6630ee0ff1b555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVU2P5C%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCQGELHgfiRNrg9dby746lPBq%2FBCYA6WA6uaDMciy0%2FFQIgcJgCA5mrbT8qCvku8ruIdWLrCzuTRyiom4%2FTw1Vf5SsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI3WbSyJX25cBAreSrcAy7mB%2BYzCM3yHotHT561L6C3eFbqKBIer8HlrF0sD7FLZSbEkFlYDcA%2BB%2FonhEN4qRvRsS2PcXL9S0Odxf5OuJ6EVjvo6WTUW4UErQVgWAjuJboonK0AY2KPMRacFFzFe%2BZHGbOSbJ%2B1Jev68aICYCmHstvjVRs1eQkSefw7VknoVDq15fiRyvFJrRBej5UsfWtFZAnjG6GQRviZmw5YV9LXsbmVSsD9iIhXNPfllw32R80Hu14nJ%2FrGhCd77LJypxfUNbXwdChTCAQgbfrbhI8zIhB%2BuuqISrDNIR%2BceFNDMEOlJ4lb6P%2FvEjjqcCVjXJMZlE2QMBa4f1nBq%2FUkiBdtiTWX5XSwkrTpYcoco%2FmqBwkp09wyqKd2Mj2SBpoFQqk4pB8HMmJmwKrxJDwaXRpzM0TEEVbYAkFf1btNLkKiVvxQwOHQPSYAr9IFlSG%2B8LJ6rGG7%2FmQoGnoyYGEYG8VW9vLDlY9o4Z1ltX%2FnMWMjoQUg3Ctz3x04Y48L7Ga2cQJs1nmI1pR2b7tkGLKjOhvnbzexwn2%2BvIGL%2BzxcQ91CEFyIeheft9Ze%2Fhcft3UYvCM3IAj4qMi7NBNNxZ3AvjLM8SAkbwR5HALKs0mvRTUeY1N5qplf69xQB0BhMI2UqcIGOqUBbcuLkXoYbVPe3Rdmj6vKxajRTn%2BtuYDxZw6rkw%2BSGmHpaXYOLdki%2F3BM2Lb9EP0LoA%2BV72jtkhf2bptQw%2F9rudkE5gDa3rPbuRCWc33LlhLJXHmGcaKaftS3XKdKuLmdeLHYYfOAWqOB0KAnRUdoDVuYPgLXScNNeMcz7JlRj53HekP5neJgrfOImq13ON4acSXJzdlWxqM%2Bo3bRYxy8AFSdfFH%2B&X-Amz-Signature=697805e9390d565b90ea05a9d5e2ba615ead60056b91608b7bc41b5cc93d3765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
