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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VNPSKR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCGSRqs7jtAfCa%2BAYp%2BHoxeh5AEeNzFRScYvAlIqGoCqAIhAPfnvbeYADNU6HbqHymnQQTqbmO7Zy5kwne3EwubOUusKv8DCGgQABoMNjM3NDIzMTgzODA1Igynm9LVxcgIbr7S2c8q3AO1536hdYthniOCpCn0WcSTt0gpEixP5I25U4itb%2FqtCOV1NwPDrATntV1S9ubfAbfilOZjxjovu1gsA5pASULqQO4y33EMqIBKpu9CTaa6fBWAl2Ez1QjXT7frv9AQ6w%2Bara8reArkWt4e48yG77FRxLL5wrMGn%2BoGP5AojYSDS57YL%2F1e9gihADobjuSqHDsAc4LEfQ%2FhF461%2BigoAYndfl0aBzv1Ucgrebk4AN6kxqTJIwCcqlPCs%2FWj5Tbbpb0A8jsYHUNcmREo%2BQU7YTKPmL6QwTssS5aUx64X9Uc2kZyCf%2Fk%2ByjN3TIsoLIbYj4uWwsFam3z5drt1qNc3wYyFZk2zrOTPadGZbz3CfPFwrMyEjG0oY6BS1R80L4cWsWMVy%2FO8pb9gq06YTgi%2FHq8DUHCEW42gOjcZudMHf6Y8VnUPhLONdLviVev4NjSLDvsRiEjFaVYmyfLVHs%2FHEXAMIuMflzrnaEqh4VNa5vCckYW%2Bsy6%2F7MN7FOl5L7J5uRAFEITHKpek9WX4b%2FIGeRMJjsG6VbTeNLkVJXs9qv6%2BfxUimFNHHJohND%2Fx5iUJVUqYaBBMF4Ze7Oc%2Fup7WQzoAHZAEuNAlbJ%2FbXjrsuOi50jPTqIpPWMaojstv6jDsu%2F69BjqkAQsEbbwHfvpo2xpaqRVzFH5wrKmycdtgS927dCsk3OkLRLXT46DlNXmfDgw8E4LT2GnUgzDNf4t6Yak6GHa%2Bim7BigroB9zrO9Gj2MwL4wQdqzOCVx%2Bzf%2BPM0JOmuys8LKJDBDTjzwkbXb7E0WqK2w8STXU91IrUmPichJ5%2Fupx%2FAj2XZ2CgeoWtBEA%2BH8SraFIRfsrP1jRb6PguDmFAr19Dl%2Fmt&X-Amz-Signature=b9e56b1ae65b52899e9bc6387ca296665921a339b9773be774819227a85f11f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VNPSKR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCGSRqs7jtAfCa%2BAYp%2BHoxeh5AEeNzFRScYvAlIqGoCqAIhAPfnvbeYADNU6HbqHymnQQTqbmO7Zy5kwne3EwubOUusKv8DCGgQABoMNjM3NDIzMTgzODA1Igynm9LVxcgIbr7S2c8q3AO1536hdYthniOCpCn0WcSTt0gpEixP5I25U4itb%2FqtCOV1NwPDrATntV1S9ubfAbfilOZjxjovu1gsA5pASULqQO4y33EMqIBKpu9CTaa6fBWAl2Ez1QjXT7frv9AQ6w%2Bara8reArkWt4e48yG77FRxLL5wrMGn%2BoGP5AojYSDS57YL%2F1e9gihADobjuSqHDsAc4LEfQ%2FhF461%2BigoAYndfl0aBzv1Ucgrebk4AN6kxqTJIwCcqlPCs%2FWj5Tbbpb0A8jsYHUNcmREo%2BQU7YTKPmL6QwTssS5aUx64X9Uc2kZyCf%2Fk%2ByjN3TIsoLIbYj4uWwsFam3z5drt1qNc3wYyFZk2zrOTPadGZbz3CfPFwrMyEjG0oY6BS1R80L4cWsWMVy%2FO8pb9gq06YTgi%2FHq8DUHCEW42gOjcZudMHf6Y8VnUPhLONdLviVev4NjSLDvsRiEjFaVYmyfLVHs%2FHEXAMIuMflzrnaEqh4VNa5vCckYW%2Bsy6%2F7MN7FOl5L7J5uRAFEITHKpek9WX4b%2FIGeRMJjsG6VbTeNLkVJXs9qv6%2BfxUimFNHHJohND%2Fx5iUJVUqYaBBMF4Ze7Oc%2Fup7WQzoAHZAEuNAlbJ%2FbXjrsuOi50jPTqIpPWMaojstv6jDsu%2F69BjqkAQsEbbwHfvpo2xpaqRVzFH5wrKmycdtgS927dCsk3OkLRLXT46DlNXmfDgw8E4LT2GnUgzDNf4t6Yak6GHa%2Bim7BigroB9zrO9Gj2MwL4wQdqzOCVx%2Bzf%2BPM0JOmuys8LKJDBDTjzwkbXb7E0WqK2w8STXU91IrUmPichJ5%2Fupx%2FAj2XZ2CgeoWtBEA%2BH8SraFIRfsrP1jRb6PguDmFAr19Dl%2Fmt&X-Amz-Signature=4d7529535bd003a161172f1528006a90b73030cc9decde36d8aa19a65ea253db&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VNPSKR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCGSRqs7jtAfCa%2BAYp%2BHoxeh5AEeNzFRScYvAlIqGoCqAIhAPfnvbeYADNU6HbqHymnQQTqbmO7Zy5kwne3EwubOUusKv8DCGgQABoMNjM3NDIzMTgzODA1Igynm9LVxcgIbr7S2c8q3AO1536hdYthniOCpCn0WcSTt0gpEixP5I25U4itb%2FqtCOV1NwPDrATntV1S9ubfAbfilOZjxjovu1gsA5pASULqQO4y33EMqIBKpu9CTaa6fBWAl2Ez1QjXT7frv9AQ6w%2Bara8reArkWt4e48yG77FRxLL5wrMGn%2BoGP5AojYSDS57YL%2F1e9gihADobjuSqHDsAc4LEfQ%2FhF461%2BigoAYndfl0aBzv1Ucgrebk4AN6kxqTJIwCcqlPCs%2FWj5Tbbpb0A8jsYHUNcmREo%2BQU7YTKPmL6QwTssS5aUx64X9Uc2kZyCf%2Fk%2ByjN3TIsoLIbYj4uWwsFam3z5drt1qNc3wYyFZk2zrOTPadGZbz3CfPFwrMyEjG0oY6BS1R80L4cWsWMVy%2FO8pb9gq06YTgi%2FHq8DUHCEW42gOjcZudMHf6Y8VnUPhLONdLviVev4NjSLDvsRiEjFaVYmyfLVHs%2FHEXAMIuMflzrnaEqh4VNa5vCckYW%2Bsy6%2F7MN7FOl5L7J5uRAFEITHKpek9WX4b%2FIGeRMJjsG6VbTeNLkVJXs9qv6%2BfxUimFNHHJohND%2Fx5iUJVUqYaBBMF4Ze7Oc%2Fup7WQzoAHZAEuNAlbJ%2FbXjrsuOi50jPTqIpPWMaojstv6jDsu%2F69BjqkAQsEbbwHfvpo2xpaqRVzFH5wrKmycdtgS927dCsk3OkLRLXT46DlNXmfDgw8E4LT2GnUgzDNf4t6Yak6GHa%2Bim7BigroB9zrO9Gj2MwL4wQdqzOCVx%2Bzf%2BPM0JOmuys8LKJDBDTjzwkbXb7E0WqK2w8STXU91IrUmPichJ5%2Fupx%2FAj2XZ2CgeoWtBEA%2BH8SraFIRfsrP1jRb6PguDmFAr19Dl%2Fmt&X-Amz-Signature=bab05b43729f01e0cbac8084f60ce9cd68f1a07583cd41e18333356f95ded33a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VNPSKR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCGSRqs7jtAfCa%2BAYp%2BHoxeh5AEeNzFRScYvAlIqGoCqAIhAPfnvbeYADNU6HbqHymnQQTqbmO7Zy5kwne3EwubOUusKv8DCGgQABoMNjM3NDIzMTgzODA1Igynm9LVxcgIbr7S2c8q3AO1536hdYthniOCpCn0WcSTt0gpEixP5I25U4itb%2FqtCOV1NwPDrATntV1S9ubfAbfilOZjxjovu1gsA5pASULqQO4y33EMqIBKpu9CTaa6fBWAl2Ez1QjXT7frv9AQ6w%2Bara8reArkWt4e48yG77FRxLL5wrMGn%2BoGP5AojYSDS57YL%2F1e9gihADobjuSqHDsAc4LEfQ%2FhF461%2BigoAYndfl0aBzv1Ucgrebk4AN6kxqTJIwCcqlPCs%2FWj5Tbbpb0A8jsYHUNcmREo%2BQU7YTKPmL6QwTssS5aUx64X9Uc2kZyCf%2Fk%2ByjN3TIsoLIbYj4uWwsFam3z5drt1qNc3wYyFZk2zrOTPadGZbz3CfPFwrMyEjG0oY6BS1R80L4cWsWMVy%2FO8pb9gq06YTgi%2FHq8DUHCEW42gOjcZudMHf6Y8VnUPhLONdLviVev4NjSLDvsRiEjFaVYmyfLVHs%2FHEXAMIuMflzrnaEqh4VNa5vCckYW%2Bsy6%2F7MN7FOl5L7J5uRAFEITHKpek9WX4b%2FIGeRMJjsG6VbTeNLkVJXs9qv6%2BfxUimFNHHJohND%2Fx5iUJVUqYaBBMF4Ze7Oc%2Fup7WQzoAHZAEuNAlbJ%2FbXjrsuOi50jPTqIpPWMaojstv6jDsu%2F69BjqkAQsEbbwHfvpo2xpaqRVzFH5wrKmycdtgS927dCsk3OkLRLXT46DlNXmfDgw8E4LT2GnUgzDNf4t6Yak6GHa%2Bim7BigroB9zrO9Gj2MwL4wQdqzOCVx%2Bzf%2BPM0JOmuys8LKJDBDTjzwkbXb7E0WqK2w8STXU91IrUmPichJ5%2Fupx%2FAj2XZ2CgeoWtBEA%2BH8SraFIRfsrP1jRb6PguDmFAr19Dl%2Fmt&X-Amz-Signature=65368e66dc2f76f73f631ab01d358119477ca2fbdf1d7888f0812c478683ca9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VNPSKR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCGSRqs7jtAfCa%2BAYp%2BHoxeh5AEeNzFRScYvAlIqGoCqAIhAPfnvbeYADNU6HbqHymnQQTqbmO7Zy5kwne3EwubOUusKv8DCGgQABoMNjM3NDIzMTgzODA1Igynm9LVxcgIbr7S2c8q3AO1536hdYthniOCpCn0WcSTt0gpEixP5I25U4itb%2FqtCOV1NwPDrATntV1S9ubfAbfilOZjxjovu1gsA5pASULqQO4y33EMqIBKpu9CTaa6fBWAl2Ez1QjXT7frv9AQ6w%2Bara8reArkWt4e48yG77FRxLL5wrMGn%2BoGP5AojYSDS57YL%2F1e9gihADobjuSqHDsAc4LEfQ%2FhF461%2BigoAYndfl0aBzv1Ucgrebk4AN6kxqTJIwCcqlPCs%2FWj5Tbbpb0A8jsYHUNcmREo%2BQU7YTKPmL6QwTssS5aUx64X9Uc2kZyCf%2Fk%2ByjN3TIsoLIbYj4uWwsFam3z5drt1qNc3wYyFZk2zrOTPadGZbz3CfPFwrMyEjG0oY6BS1R80L4cWsWMVy%2FO8pb9gq06YTgi%2FHq8DUHCEW42gOjcZudMHf6Y8VnUPhLONdLviVev4NjSLDvsRiEjFaVYmyfLVHs%2FHEXAMIuMflzrnaEqh4VNa5vCckYW%2Bsy6%2F7MN7FOl5L7J5uRAFEITHKpek9WX4b%2FIGeRMJjsG6VbTeNLkVJXs9qv6%2BfxUimFNHHJohND%2Fx5iUJVUqYaBBMF4Ze7Oc%2Fup7WQzoAHZAEuNAlbJ%2FbXjrsuOi50jPTqIpPWMaojstv6jDsu%2F69BjqkAQsEbbwHfvpo2xpaqRVzFH5wrKmycdtgS927dCsk3OkLRLXT46DlNXmfDgw8E4LT2GnUgzDNf4t6Yak6GHa%2Bim7BigroB9zrO9Gj2MwL4wQdqzOCVx%2Bzf%2BPM0JOmuys8LKJDBDTjzwkbXb7E0WqK2w8STXU91IrUmPichJ5%2Fupx%2FAj2XZ2CgeoWtBEA%2BH8SraFIRfsrP1jRb6PguDmFAr19Dl%2Fmt&X-Amz-Signature=299d7a6984b5cef17ffb8f7fb646a102f9e1b012b56071baaff9839cb21464b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VNPSKR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCGSRqs7jtAfCa%2BAYp%2BHoxeh5AEeNzFRScYvAlIqGoCqAIhAPfnvbeYADNU6HbqHymnQQTqbmO7Zy5kwne3EwubOUusKv8DCGgQABoMNjM3NDIzMTgzODA1Igynm9LVxcgIbr7S2c8q3AO1536hdYthniOCpCn0WcSTt0gpEixP5I25U4itb%2FqtCOV1NwPDrATntV1S9ubfAbfilOZjxjovu1gsA5pASULqQO4y33EMqIBKpu9CTaa6fBWAl2Ez1QjXT7frv9AQ6w%2Bara8reArkWt4e48yG77FRxLL5wrMGn%2BoGP5AojYSDS57YL%2F1e9gihADobjuSqHDsAc4LEfQ%2FhF461%2BigoAYndfl0aBzv1Ucgrebk4AN6kxqTJIwCcqlPCs%2FWj5Tbbpb0A8jsYHUNcmREo%2BQU7YTKPmL6QwTssS5aUx64X9Uc2kZyCf%2Fk%2ByjN3TIsoLIbYj4uWwsFam3z5drt1qNc3wYyFZk2zrOTPadGZbz3CfPFwrMyEjG0oY6BS1R80L4cWsWMVy%2FO8pb9gq06YTgi%2FHq8DUHCEW42gOjcZudMHf6Y8VnUPhLONdLviVev4NjSLDvsRiEjFaVYmyfLVHs%2FHEXAMIuMflzrnaEqh4VNa5vCckYW%2Bsy6%2F7MN7FOl5L7J5uRAFEITHKpek9WX4b%2FIGeRMJjsG6VbTeNLkVJXs9qv6%2BfxUimFNHHJohND%2Fx5iUJVUqYaBBMF4Ze7Oc%2Fup7WQzoAHZAEuNAlbJ%2FbXjrsuOi50jPTqIpPWMaojstv6jDsu%2F69BjqkAQsEbbwHfvpo2xpaqRVzFH5wrKmycdtgS927dCsk3OkLRLXT46DlNXmfDgw8E4LT2GnUgzDNf4t6Yak6GHa%2Bim7BigroB9zrO9Gj2MwL4wQdqzOCVx%2Bzf%2BPM0JOmuys8LKJDBDTjzwkbXb7E0WqK2w8STXU91IrUmPichJ5%2Fupx%2FAj2XZ2CgeoWtBEA%2BH8SraFIRfsrP1jRb6PguDmFAr19Dl%2Fmt&X-Amz-Signature=3e2d5f3c9bea185a992dffea5df5f1bef70db4329135d3ae8bdaf33f5b966dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VNPSKR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCGSRqs7jtAfCa%2BAYp%2BHoxeh5AEeNzFRScYvAlIqGoCqAIhAPfnvbeYADNU6HbqHymnQQTqbmO7Zy5kwne3EwubOUusKv8DCGgQABoMNjM3NDIzMTgzODA1Igynm9LVxcgIbr7S2c8q3AO1536hdYthniOCpCn0WcSTt0gpEixP5I25U4itb%2FqtCOV1NwPDrATntV1S9ubfAbfilOZjxjovu1gsA5pASULqQO4y33EMqIBKpu9CTaa6fBWAl2Ez1QjXT7frv9AQ6w%2Bara8reArkWt4e48yG77FRxLL5wrMGn%2BoGP5AojYSDS57YL%2F1e9gihADobjuSqHDsAc4LEfQ%2FhF461%2BigoAYndfl0aBzv1Ucgrebk4AN6kxqTJIwCcqlPCs%2FWj5Tbbpb0A8jsYHUNcmREo%2BQU7YTKPmL6QwTssS5aUx64X9Uc2kZyCf%2Fk%2ByjN3TIsoLIbYj4uWwsFam3z5drt1qNc3wYyFZk2zrOTPadGZbz3CfPFwrMyEjG0oY6BS1R80L4cWsWMVy%2FO8pb9gq06YTgi%2FHq8DUHCEW42gOjcZudMHf6Y8VnUPhLONdLviVev4NjSLDvsRiEjFaVYmyfLVHs%2FHEXAMIuMflzrnaEqh4VNa5vCckYW%2Bsy6%2F7MN7FOl5L7J5uRAFEITHKpek9WX4b%2FIGeRMJjsG6VbTeNLkVJXs9qv6%2BfxUimFNHHJohND%2Fx5iUJVUqYaBBMF4Ze7Oc%2Fup7WQzoAHZAEuNAlbJ%2FbXjrsuOi50jPTqIpPWMaojstv6jDsu%2F69BjqkAQsEbbwHfvpo2xpaqRVzFH5wrKmycdtgS927dCsk3OkLRLXT46DlNXmfDgw8E4LT2GnUgzDNf4t6Yak6GHa%2Bim7BigroB9zrO9Gj2MwL4wQdqzOCVx%2Bzf%2BPM0JOmuys8LKJDBDTjzwkbXb7E0WqK2w8STXU91IrUmPichJ5%2Fupx%2FAj2XZ2CgeoWtBEA%2BH8SraFIRfsrP1jRb6PguDmFAr19Dl%2Fmt&X-Amz-Signature=6b841ef47755d10682d722e1f8269a2c5acc999a2ca9e572e3c7ec41c284515b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VNPSKR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCGSRqs7jtAfCa%2BAYp%2BHoxeh5AEeNzFRScYvAlIqGoCqAIhAPfnvbeYADNU6HbqHymnQQTqbmO7Zy5kwne3EwubOUusKv8DCGgQABoMNjM3NDIzMTgzODA1Igynm9LVxcgIbr7S2c8q3AO1536hdYthniOCpCn0WcSTt0gpEixP5I25U4itb%2FqtCOV1NwPDrATntV1S9ubfAbfilOZjxjovu1gsA5pASULqQO4y33EMqIBKpu9CTaa6fBWAl2Ez1QjXT7frv9AQ6w%2Bara8reArkWt4e48yG77FRxLL5wrMGn%2BoGP5AojYSDS57YL%2F1e9gihADobjuSqHDsAc4LEfQ%2FhF461%2BigoAYndfl0aBzv1Ucgrebk4AN6kxqTJIwCcqlPCs%2FWj5Tbbpb0A8jsYHUNcmREo%2BQU7YTKPmL6QwTssS5aUx64X9Uc2kZyCf%2Fk%2ByjN3TIsoLIbYj4uWwsFam3z5drt1qNc3wYyFZk2zrOTPadGZbz3CfPFwrMyEjG0oY6BS1R80L4cWsWMVy%2FO8pb9gq06YTgi%2FHq8DUHCEW42gOjcZudMHf6Y8VnUPhLONdLviVev4NjSLDvsRiEjFaVYmyfLVHs%2FHEXAMIuMflzrnaEqh4VNa5vCckYW%2Bsy6%2F7MN7FOl5L7J5uRAFEITHKpek9WX4b%2FIGeRMJjsG6VbTeNLkVJXs9qv6%2BfxUimFNHHJohND%2Fx5iUJVUqYaBBMF4Ze7Oc%2Fup7WQzoAHZAEuNAlbJ%2FbXjrsuOi50jPTqIpPWMaojstv6jDsu%2F69BjqkAQsEbbwHfvpo2xpaqRVzFH5wrKmycdtgS927dCsk3OkLRLXT46DlNXmfDgw8E4LT2GnUgzDNf4t6Yak6GHa%2Bim7BigroB9zrO9Gj2MwL4wQdqzOCVx%2Bzf%2BPM0JOmuys8LKJDBDTjzwkbXb7E0WqK2w8STXU91IrUmPichJ5%2Fupx%2FAj2XZ2CgeoWtBEA%2BH8SraFIRfsrP1jRb6PguDmFAr19Dl%2Fmt&X-Amz-Signature=422670426b9787cd33e74cfea728f929d5726c0eb1c8911507661092864eb11a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
