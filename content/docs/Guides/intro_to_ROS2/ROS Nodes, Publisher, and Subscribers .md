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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4NBGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIulTSJIqLwVh2sZ8h8Qr9iwMXApmfRg3saS7CzqGReAiAEOfpZFO8WK7ypt9tguKarsIRpUsngCFr1LAUi%2FBSUACqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYsAtwXQGgFmOC5d6KtwDj1ENZ9USjSqW56rCJWq%2BTYpCGc45dpdXvUYbxGpxyhR%2Fdx7zgU4UeawXGCL5r0ifjsTWQKbLkdFm16eBVKnS6XfDq20t2iKoL%2FNpXZAiShiGX2dmFuvuFXkcSx1QQuSsc7vfHyRPL4Sdzw92Jo6ZmPsqT208TOHcfUmiWwknGKy1Ky7TjXdfOeC0adGRkeIXHXt8I1UgcglfMSH8GD0lQC72gOYbYiW4iPIF7IvMElaKPzhVPkWQZp7LVyT7KXgHgBgks059GWbH6MHGTAIRP%2FolL91RIJ0HRF6U8o9z1QkDxMkU6x7rPvIh1gF%2FfnTv1j92PN0GeFxQKnZQZcNHFr2O4RvSFrHgC3gd%2FrJ%2Bs7IE5FlRlmAGOCf75Pd3WEf7nO9oxBXmKSNAhSI2tb%2BSnDQtrnKmaVKLyOCicVN4ahjhFjJ00WOKNxvsSyTvypEmHxK0Ey%2Bn9Iprrn6973PBH6coQ7kEYeesMJA8%2FA8zf5nx39DPHUgZ5%2BwuZzB0aOdk9uS3vDB29mzXIO8jhNJLNOkFYEGUplFY676p2VP6KduRTTCxAFiFXyvY3lIyDPGi3byclRaUNIkMkv1NZCPlviw%2BGm5lzCpgDdUT7gME5xxz1okfJksD8S6UToowqr3TwgY6pgGEhX3vIkuVbHvCJXwtDnAQKezhKqCkUkerVAua%2BrDPL%2BMWYcrU4ka0kBs41vm2PX3PGthtbSlV5Jxk%2BYrWxSVpwgxSXNWKZ3F1%2B6zIMIvdUY2IOWFiPOo7V2uPkyf%2Fgi0camlWM74OydS0wUMP0N0I4PMsB3TwsmpU5uOsx71rSVmZJSfxl%2FM%2FABu3Zhj5uYJC5%2FymMgqHdJFN0SPN5oFK5aVoN7mA&X-Amz-Signature=5fd4baaedf5d596a6074aed4f557aae6229cce48f5dddd5cf96df09e211bcbc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4NBGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIulTSJIqLwVh2sZ8h8Qr9iwMXApmfRg3saS7CzqGReAiAEOfpZFO8WK7ypt9tguKarsIRpUsngCFr1LAUi%2FBSUACqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYsAtwXQGgFmOC5d6KtwDj1ENZ9USjSqW56rCJWq%2BTYpCGc45dpdXvUYbxGpxyhR%2Fdx7zgU4UeawXGCL5r0ifjsTWQKbLkdFm16eBVKnS6XfDq20t2iKoL%2FNpXZAiShiGX2dmFuvuFXkcSx1QQuSsc7vfHyRPL4Sdzw92Jo6ZmPsqT208TOHcfUmiWwknGKy1Ky7TjXdfOeC0adGRkeIXHXt8I1UgcglfMSH8GD0lQC72gOYbYiW4iPIF7IvMElaKPzhVPkWQZp7LVyT7KXgHgBgks059GWbH6MHGTAIRP%2FolL91RIJ0HRF6U8o9z1QkDxMkU6x7rPvIh1gF%2FfnTv1j92PN0GeFxQKnZQZcNHFr2O4RvSFrHgC3gd%2FrJ%2Bs7IE5FlRlmAGOCf75Pd3WEf7nO9oxBXmKSNAhSI2tb%2BSnDQtrnKmaVKLyOCicVN4ahjhFjJ00WOKNxvsSyTvypEmHxK0Ey%2Bn9Iprrn6973PBH6coQ7kEYeesMJA8%2FA8zf5nx39DPHUgZ5%2BwuZzB0aOdk9uS3vDB29mzXIO8jhNJLNOkFYEGUplFY676p2VP6KduRTTCxAFiFXyvY3lIyDPGi3byclRaUNIkMkv1NZCPlviw%2BGm5lzCpgDdUT7gME5xxz1okfJksD8S6UToowqr3TwgY6pgGEhX3vIkuVbHvCJXwtDnAQKezhKqCkUkerVAua%2BrDPL%2BMWYcrU4ka0kBs41vm2PX3PGthtbSlV5Jxk%2BYrWxSVpwgxSXNWKZ3F1%2B6zIMIvdUY2IOWFiPOo7V2uPkyf%2Fgi0camlWM74OydS0wUMP0N0I4PMsB3TwsmpU5uOsx71rSVmZJSfxl%2FM%2FABu3Zhj5uYJC5%2FymMgqHdJFN0SPN5oFK5aVoN7mA&X-Amz-Signature=c425421d2cdf85662acb1b38bdceaf99974e92744d227df62a0333faf2f77aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4NBGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIulTSJIqLwVh2sZ8h8Qr9iwMXApmfRg3saS7CzqGReAiAEOfpZFO8WK7ypt9tguKarsIRpUsngCFr1LAUi%2FBSUACqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYsAtwXQGgFmOC5d6KtwDj1ENZ9USjSqW56rCJWq%2BTYpCGc45dpdXvUYbxGpxyhR%2Fdx7zgU4UeawXGCL5r0ifjsTWQKbLkdFm16eBVKnS6XfDq20t2iKoL%2FNpXZAiShiGX2dmFuvuFXkcSx1QQuSsc7vfHyRPL4Sdzw92Jo6ZmPsqT208TOHcfUmiWwknGKy1Ky7TjXdfOeC0adGRkeIXHXt8I1UgcglfMSH8GD0lQC72gOYbYiW4iPIF7IvMElaKPzhVPkWQZp7LVyT7KXgHgBgks059GWbH6MHGTAIRP%2FolL91RIJ0HRF6U8o9z1QkDxMkU6x7rPvIh1gF%2FfnTv1j92PN0GeFxQKnZQZcNHFr2O4RvSFrHgC3gd%2FrJ%2Bs7IE5FlRlmAGOCf75Pd3WEf7nO9oxBXmKSNAhSI2tb%2BSnDQtrnKmaVKLyOCicVN4ahjhFjJ00WOKNxvsSyTvypEmHxK0Ey%2Bn9Iprrn6973PBH6coQ7kEYeesMJA8%2FA8zf5nx39DPHUgZ5%2BwuZzB0aOdk9uS3vDB29mzXIO8jhNJLNOkFYEGUplFY676p2VP6KduRTTCxAFiFXyvY3lIyDPGi3byclRaUNIkMkv1NZCPlviw%2BGm5lzCpgDdUT7gME5xxz1okfJksD8S6UToowqr3TwgY6pgGEhX3vIkuVbHvCJXwtDnAQKezhKqCkUkerVAua%2BrDPL%2BMWYcrU4ka0kBs41vm2PX3PGthtbSlV5Jxk%2BYrWxSVpwgxSXNWKZ3F1%2B6zIMIvdUY2IOWFiPOo7V2uPkyf%2Fgi0camlWM74OydS0wUMP0N0I4PMsB3TwsmpU5uOsx71rSVmZJSfxl%2FM%2FABu3Zhj5uYJC5%2FymMgqHdJFN0SPN5oFK5aVoN7mA&X-Amz-Signature=0c5e6a36b990d7972d00e0c99188b4ece016f9dc2fcd54920725275860ce06e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4NBGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIulTSJIqLwVh2sZ8h8Qr9iwMXApmfRg3saS7CzqGReAiAEOfpZFO8WK7ypt9tguKarsIRpUsngCFr1LAUi%2FBSUACqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYsAtwXQGgFmOC5d6KtwDj1ENZ9USjSqW56rCJWq%2BTYpCGc45dpdXvUYbxGpxyhR%2Fdx7zgU4UeawXGCL5r0ifjsTWQKbLkdFm16eBVKnS6XfDq20t2iKoL%2FNpXZAiShiGX2dmFuvuFXkcSx1QQuSsc7vfHyRPL4Sdzw92Jo6ZmPsqT208TOHcfUmiWwknGKy1Ky7TjXdfOeC0adGRkeIXHXt8I1UgcglfMSH8GD0lQC72gOYbYiW4iPIF7IvMElaKPzhVPkWQZp7LVyT7KXgHgBgks059GWbH6MHGTAIRP%2FolL91RIJ0HRF6U8o9z1QkDxMkU6x7rPvIh1gF%2FfnTv1j92PN0GeFxQKnZQZcNHFr2O4RvSFrHgC3gd%2FrJ%2Bs7IE5FlRlmAGOCf75Pd3WEf7nO9oxBXmKSNAhSI2tb%2BSnDQtrnKmaVKLyOCicVN4ahjhFjJ00WOKNxvsSyTvypEmHxK0Ey%2Bn9Iprrn6973PBH6coQ7kEYeesMJA8%2FA8zf5nx39DPHUgZ5%2BwuZzB0aOdk9uS3vDB29mzXIO8jhNJLNOkFYEGUplFY676p2VP6KduRTTCxAFiFXyvY3lIyDPGi3byclRaUNIkMkv1NZCPlviw%2BGm5lzCpgDdUT7gME5xxz1okfJksD8S6UToowqr3TwgY6pgGEhX3vIkuVbHvCJXwtDnAQKezhKqCkUkerVAua%2BrDPL%2BMWYcrU4ka0kBs41vm2PX3PGthtbSlV5Jxk%2BYrWxSVpwgxSXNWKZ3F1%2B6zIMIvdUY2IOWFiPOo7V2uPkyf%2Fgi0camlWM74OydS0wUMP0N0I4PMsB3TwsmpU5uOsx71rSVmZJSfxl%2FM%2FABu3Zhj5uYJC5%2FymMgqHdJFN0SPN5oFK5aVoN7mA&X-Amz-Signature=35fbf1702b4179dc64f32503c2e15bcb70a3d087a6260f80f79f581325cdc831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4NBGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIulTSJIqLwVh2sZ8h8Qr9iwMXApmfRg3saS7CzqGReAiAEOfpZFO8WK7ypt9tguKarsIRpUsngCFr1LAUi%2FBSUACqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYsAtwXQGgFmOC5d6KtwDj1ENZ9USjSqW56rCJWq%2BTYpCGc45dpdXvUYbxGpxyhR%2Fdx7zgU4UeawXGCL5r0ifjsTWQKbLkdFm16eBVKnS6XfDq20t2iKoL%2FNpXZAiShiGX2dmFuvuFXkcSx1QQuSsc7vfHyRPL4Sdzw92Jo6ZmPsqT208TOHcfUmiWwknGKy1Ky7TjXdfOeC0adGRkeIXHXt8I1UgcglfMSH8GD0lQC72gOYbYiW4iPIF7IvMElaKPzhVPkWQZp7LVyT7KXgHgBgks059GWbH6MHGTAIRP%2FolL91RIJ0HRF6U8o9z1QkDxMkU6x7rPvIh1gF%2FfnTv1j92PN0GeFxQKnZQZcNHFr2O4RvSFrHgC3gd%2FrJ%2Bs7IE5FlRlmAGOCf75Pd3WEf7nO9oxBXmKSNAhSI2tb%2BSnDQtrnKmaVKLyOCicVN4ahjhFjJ00WOKNxvsSyTvypEmHxK0Ey%2Bn9Iprrn6973PBH6coQ7kEYeesMJA8%2FA8zf5nx39DPHUgZ5%2BwuZzB0aOdk9uS3vDB29mzXIO8jhNJLNOkFYEGUplFY676p2VP6KduRTTCxAFiFXyvY3lIyDPGi3byclRaUNIkMkv1NZCPlviw%2BGm5lzCpgDdUT7gME5xxz1okfJksD8S6UToowqr3TwgY6pgGEhX3vIkuVbHvCJXwtDnAQKezhKqCkUkerVAua%2BrDPL%2BMWYcrU4ka0kBs41vm2PX3PGthtbSlV5Jxk%2BYrWxSVpwgxSXNWKZ3F1%2B6zIMIvdUY2IOWFiPOo7V2uPkyf%2Fgi0camlWM74OydS0wUMP0N0I4PMsB3TwsmpU5uOsx71rSVmZJSfxl%2FM%2FABu3Zhj5uYJC5%2FymMgqHdJFN0SPN5oFK5aVoN7mA&X-Amz-Signature=3bb5861e51b0d08cd0ad08a0647562298f84483ff9c4576e86a1e21d65a4a5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4NBGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIulTSJIqLwVh2sZ8h8Qr9iwMXApmfRg3saS7CzqGReAiAEOfpZFO8WK7ypt9tguKarsIRpUsngCFr1LAUi%2FBSUACqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYsAtwXQGgFmOC5d6KtwDj1ENZ9USjSqW56rCJWq%2BTYpCGc45dpdXvUYbxGpxyhR%2Fdx7zgU4UeawXGCL5r0ifjsTWQKbLkdFm16eBVKnS6XfDq20t2iKoL%2FNpXZAiShiGX2dmFuvuFXkcSx1QQuSsc7vfHyRPL4Sdzw92Jo6ZmPsqT208TOHcfUmiWwknGKy1Ky7TjXdfOeC0adGRkeIXHXt8I1UgcglfMSH8GD0lQC72gOYbYiW4iPIF7IvMElaKPzhVPkWQZp7LVyT7KXgHgBgks059GWbH6MHGTAIRP%2FolL91RIJ0HRF6U8o9z1QkDxMkU6x7rPvIh1gF%2FfnTv1j92PN0GeFxQKnZQZcNHFr2O4RvSFrHgC3gd%2FrJ%2Bs7IE5FlRlmAGOCf75Pd3WEf7nO9oxBXmKSNAhSI2tb%2BSnDQtrnKmaVKLyOCicVN4ahjhFjJ00WOKNxvsSyTvypEmHxK0Ey%2Bn9Iprrn6973PBH6coQ7kEYeesMJA8%2FA8zf5nx39DPHUgZ5%2BwuZzB0aOdk9uS3vDB29mzXIO8jhNJLNOkFYEGUplFY676p2VP6KduRTTCxAFiFXyvY3lIyDPGi3byclRaUNIkMkv1NZCPlviw%2BGm5lzCpgDdUT7gME5xxz1okfJksD8S6UToowqr3TwgY6pgGEhX3vIkuVbHvCJXwtDnAQKezhKqCkUkerVAua%2BrDPL%2BMWYcrU4ka0kBs41vm2PX3PGthtbSlV5Jxk%2BYrWxSVpwgxSXNWKZ3F1%2B6zIMIvdUY2IOWFiPOo7V2uPkyf%2Fgi0camlWM74OydS0wUMP0N0I4PMsB3TwsmpU5uOsx71rSVmZJSfxl%2FM%2FABu3Zhj5uYJC5%2FymMgqHdJFN0SPN5oFK5aVoN7mA&X-Amz-Signature=d654711e98c44cc1889cf77e2a322cf3e598a7a816cd8df5d12a0b2fe137a7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4NBGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIulTSJIqLwVh2sZ8h8Qr9iwMXApmfRg3saS7CzqGReAiAEOfpZFO8WK7ypt9tguKarsIRpUsngCFr1LAUi%2FBSUACqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYsAtwXQGgFmOC5d6KtwDj1ENZ9USjSqW56rCJWq%2BTYpCGc45dpdXvUYbxGpxyhR%2Fdx7zgU4UeawXGCL5r0ifjsTWQKbLkdFm16eBVKnS6XfDq20t2iKoL%2FNpXZAiShiGX2dmFuvuFXkcSx1QQuSsc7vfHyRPL4Sdzw92Jo6ZmPsqT208TOHcfUmiWwknGKy1Ky7TjXdfOeC0adGRkeIXHXt8I1UgcglfMSH8GD0lQC72gOYbYiW4iPIF7IvMElaKPzhVPkWQZp7LVyT7KXgHgBgks059GWbH6MHGTAIRP%2FolL91RIJ0HRF6U8o9z1QkDxMkU6x7rPvIh1gF%2FfnTv1j92PN0GeFxQKnZQZcNHFr2O4RvSFrHgC3gd%2FrJ%2Bs7IE5FlRlmAGOCf75Pd3WEf7nO9oxBXmKSNAhSI2tb%2BSnDQtrnKmaVKLyOCicVN4ahjhFjJ00WOKNxvsSyTvypEmHxK0Ey%2Bn9Iprrn6973PBH6coQ7kEYeesMJA8%2FA8zf5nx39DPHUgZ5%2BwuZzB0aOdk9uS3vDB29mzXIO8jhNJLNOkFYEGUplFY676p2VP6KduRTTCxAFiFXyvY3lIyDPGi3byclRaUNIkMkv1NZCPlviw%2BGm5lzCpgDdUT7gME5xxz1okfJksD8S6UToowqr3TwgY6pgGEhX3vIkuVbHvCJXwtDnAQKezhKqCkUkerVAua%2BrDPL%2BMWYcrU4ka0kBs41vm2PX3PGthtbSlV5Jxk%2BYrWxSVpwgxSXNWKZ3F1%2B6zIMIvdUY2IOWFiPOo7V2uPkyf%2Fgi0camlWM74OydS0wUMP0N0I4PMsB3TwsmpU5uOsx71rSVmZJSfxl%2FM%2FABu3Zhj5uYJC5%2FymMgqHdJFN0SPN5oFK5aVoN7mA&X-Amz-Signature=91f6cb8f562c306bc199a46668546157b2152fd1994db8e143ffdd1069dba575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4NBGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIulTSJIqLwVh2sZ8h8Qr9iwMXApmfRg3saS7CzqGReAiAEOfpZFO8WK7ypt9tguKarsIRpUsngCFr1LAUi%2FBSUACqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYsAtwXQGgFmOC5d6KtwDj1ENZ9USjSqW56rCJWq%2BTYpCGc45dpdXvUYbxGpxyhR%2Fdx7zgU4UeawXGCL5r0ifjsTWQKbLkdFm16eBVKnS6XfDq20t2iKoL%2FNpXZAiShiGX2dmFuvuFXkcSx1QQuSsc7vfHyRPL4Sdzw92Jo6ZmPsqT208TOHcfUmiWwknGKy1Ky7TjXdfOeC0adGRkeIXHXt8I1UgcglfMSH8GD0lQC72gOYbYiW4iPIF7IvMElaKPzhVPkWQZp7LVyT7KXgHgBgks059GWbH6MHGTAIRP%2FolL91RIJ0HRF6U8o9z1QkDxMkU6x7rPvIh1gF%2FfnTv1j92PN0GeFxQKnZQZcNHFr2O4RvSFrHgC3gd%2FrJ%2Bs7IE5FlRlmAGOCf75Pd3WEf7nO9oxBXmKSNAhSI2tb%2BSnDQtrnKmaVKLyOCicVN4ahjhFjJ00WOKNxvsSyTvypEmHxK0Ey%2Bn9Iprrn6973PBH6coQ7kEYeesMJA8%2FA8zf5nx39DPHUgZ5%2BwuZzB0aOdk9uS3vDB29mzXIO8jhNJLNOkFYEGUplFY676p2VP6KduRTTCxAFiFXyvY3lIyDPGi3byclRaUNIkMkv1NZCPlviw%2BGm5lzCpgDdUT7gME5xxz1okfJksD8S6UToowqr3TwgY6pgGEhX3vIkuVbHvCJXwtDnAQKezhKqCkUkerVAua%2BrDPL%2BMWYcrU4ka0kBs41vm2PX3PGthtbSlV5Jxk%2BYrWxSVpwgxSXNWKZ3F1%2B6zIMIvdUY2IOWFiPOo7V2uPkyf%2Fgi0camlWM74OydS0wUMP0N0I4PMsB3TwsmpU5uOsx71rSVmZJSfxl%2FM%2FABu3Zhj5uYJC5%2FymMgqHdJFN0SPN5oFK5aVoN7mA&X-Amz-Signature=774132232f199e0b22aaa43850857c059e767d5566d1203c24f27835479e8f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
