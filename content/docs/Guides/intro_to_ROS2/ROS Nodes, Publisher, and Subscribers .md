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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQJSYUF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEPlfCZY7M913hLmB%2B89P1wQj1w08VFChPFs0h2S8LsAiEAlq1O0HFDPVMY0bQQ8nrtvk8GY1g6fAfG0hEagp%2FjJdUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGLhR5cX2bNyY2nX2yrcA4t4D%2F%2Fgcn4bIpq8xG33oJGziSn58x6BMuqhE7b%2FD%2FIRu5M43jDjFrM4sddyqe5%2B9w9Ulk990x5jKh%2FqWoQ1ybvYWD9OdV0xwnOmiy3q2lwxCwRYVg%2FCiHJ9289lbsTPpsaRNV0HBjUnIrcNhv7LLMWxvMKhlzGtF0OPxufrCE%2FbF3HLCVJoEXFmMn2rXfv4LxA5pxNwhDTl32hA%2F%2FnzJG1YSDktp4UxM1Us3YdGWobjQE14OBEMxNGcZpGPA0vscE0zoV32SnKGENBhpT6Wi1Xd2rKbkef%2BACtjUcDMmiU%2B%2FX74XMM27A676hvMA6t3keTHyNGqMkBAmlP95jyhz%2BQZxJS0Y8LDe8XVLUoRCDSXFA4HZgd23E558UrdrnM7egXInMSrkSp2HuK1BKCHZDY8XIDdtM6c71eL7gvUGw2g%2FyBx9meAIGJ6WhwZL1DPz47EE2JfbExnlCKaJxyEvnomZVFdo3Q2c80foOyDKdvHWMQGPncQ9B1G8Sy28Z2tuNfB362OOSselLDJCasHlQA68ZJ1s%2F6nRSNLVN5YM7lj6LMe8JO3fD88NrLn2TZvD9unObnIqmCSlCXyHAg2Ca3QXfS%2FsfGys91O4%2B6B3xMqji8LmHf4bLKMYk7MMKiE98QGOqUBtueDSWlybsMyvXRfU9HihYeU4O9J7sd2zt0QGVXmTRQmm9R%2Bg49OBwb4wJLixmhuujKHXiNlwVS5MpCYwFwL2LQTMpYm1oxeREEbgB8%2B%2Bi01C3dZA6v504tIds2GqGm3M2fLeLojjzZqAnoZEdJNWWjR3xvOONssNQSezDdun%2B5m1msuAEDqKGCaGiDXHd6cXj4VOI0Ir97QBFbmJV1b2nAHm3AM&X-Amz-Signature=acc9001070aeed91f33a075b76b15eea5be64921ffa801b070ca3d55f6ac75e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQJSYUF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEPlfCZY7M913hLmB%2B89P1wQj1w08VFChPFs0h2S8LsAiEAlq1O0HFDPVMY0bQQ8nrtvk8GY1g6fAfG0hEagp%2FjJdUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGLhR5cX2bNyY2nX2yrcA4t4D%2F%2Fgcn4bIpq8xG33oJGziSn58x6BMuqhE7b%2FD%2FIRu5M43jDjFrM4sddyqe5%2B9w9Ulk990x5jKh%2FqWoQ1ybvYWD9OdV0xwnOmiy3q2lwxCwRYVg%2FCiHJ9289lbsTPpsaRNV0HBjUnIrcNhv7LLMWxvMKhlzGtF0OPxufrCE%2FbF3HLCVJoEXFmMn2rXfv4LxA5pxNwhDTl32hA%2F%2FnzJG1YSDktp4UxM1Us3YdGWobjQE14OBEMxNGcZpGPA0vscE0zoV32SnKGENBhpT6Wi1Xd2rKbkef%2BACtjUcDMmiU%2B%2FX74XMM27A676hvMA6t3keTHyNGqMkBAmlP95jyhz%2BQZxJS0Y8LDe8XVLUoRCDSXFA4HZgd23E558UrdrnM7egXInMSrkSp2HuK1BKCHZDY8XIDdtM6c71eL7gvUGw2g%2FyBx9meAIGJ6WhwZL1DPz47EE2JfbExnlCKaJxyEvnomZVFdo3Q2c80foOyDKdvHWMQGPncQ9B1G8Sy28Z2tuNfB362OOSselLDJCasHlQA68ZJ1s%2F6nRSNLVN5YM7lj6LMe8JO3fD88NrLn2TZvD9unObnIqmCSlCXyHAg2Ca3QXfS%2FsfGys91O4%2B6B3xMqji8LmHf4bLKMYk7MMKiE98QGOqUBtueDSWlybsMyvXRfU9HihYeU4O9J7sd2zt0QGVXmTRQmm9R%2Bg49OBwb4wJLixmhuujKHXiNlwVS5MpCYwFwL2LQTMpYm1oxeREEbgB8%2B%2Bi01C3dZA6v504tIds2GqGm3M2fLeLojjzZqAnoZEdJNWWjR3xvOONssNQSezDdun%2B5m1msuAEDqKGCaGiDXHd6cXj4VOI0Ir97QBFbmJV1b2nAHm3AM&X-Amz-Signature=ccf21f1c6a34e39f899393af6cb6435f2198e4a6a294bbf894fe9d6d2aaa6f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQJSYUF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEPlfCZY7M913hLmB%2B89P1wQj1w08VFChPFs0h2S8LsAiEAlq1O0HFDPVMY0bQQ8nrtvk8GY1g6fAfG0hEagp%2FjJdUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGLhR5cX2bNyY2nX2yrcA4t4D%2F%2Fgcn4bIpq8xG33oJGziSn58x6BMuqhE7b%2FD%2FIRu5M43jDjFrM4sddyqe5%2B9w9Ulk990x5jKh%2FqWoQ1ybvYWD9OdV0xwnOmiy3q2lwxCwRYVg%2FCiHJ9289lbsTPpsaRNV0HBjUnIrcNhv7LLMWxvMKhlzGtF0OPxufrCE%2FbF3HLCVJoEXFmMn2rXfv4LxA5pxNwhDTl32hA%2F%2FnzJG1YSDktp4UxM1Us3YdGWobjQE14OBEMxNGcZpGPA0vscE0zoV32SnKGENBhpT6Wi1Xd2rKbkef%2BACtjUcDMmiU%2B%2FX74XMM27A676hvMA6t3keTHyNGqMkBAmlP95jyhz%2BQZxJS0Y8LDe8XVLUoRCDSXFA4HZgd23E558UrdrnM7egXInMSrkSp2HuK1BKCHZDY8XIDdtM6c71eL7gvUGw2g%2FyBx9meAIGJ6WhwZL1DPz47EE2JfbExnlCKaJxyEvnomZVFdo3Q2c80foOyDKdvHWMQGPncQ9B1G8Sy28Z2tuNfB362OOSselLDJCasHlQA68ZJ1s%2F6nRSNLVN5YM7lj6LMe8JO3fD88NrLn2TZvD9unObnIqmCSlCXyHAg2Ca3QXfS%2FsfGys91O4%2B6B3xMqji8LmHf4bLKMYk7MMKiE98QGOqUBtueDSWlybsMyvXRfU9HihYeU4O9J7sd2zt0QGVXmTRQmm9R%2Bg49OBwb4wJLixmhuujKHXiNlwVS5MpCYwFwL2LQTMpYm1oxeREEbgB8%2B%2Bi01C3dZA6v504tIds2GqGm3M2fLeLojjzZqAnoZEdJNWWjR3xvOONssNQSezDdun%2B5m1msuAEDqKGCaGiDXHd6cXj4VOI0Ir97QBFbmJV1b2nAHm3AM&X-Amz-Signature=262d54953b43b75b2a4feff71223da50b1fdbc13567e00b224ee190c78752d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQJSYUF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEPlfCZY7M913hLmB%2B89P1wQj1w08VFChPFs0h2S8LsAiEAlq1O0HFDPVMY0bQQ8nrtvk8GY1g6fAfG0hEagp%2FjJdUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGLhR5cX2bNyY2nX2yrcA4t4D%2F%2Fgcn4bIpq8xG33oJGziSn58x6BMuqhE7b%2FD%2FIRu5M43jDjFrM4sddyqe5%2B9w9Ulk990x5jKh%2FqWoQ1ybvYWD9OdV0xwnOmiy3q2lwxCwRYVg%2FCiHJ9289lbsTPpsaRNV0HBjUnIrcNhv7LLMWxvMKhlzGtF0OPxufrCE%2FbF3HLCVJoEXFmMn2rXfv4LxA5pxNwhDTl32hA%2F%2FnzJG1YSDktp4UxM1Us3YdGWobjQE14OBEMxNGcZpGPA0vscE0zoV32SnKGENBhpT6Wi1Xd2rKbkef%2BACtjUcDMmiU%2B%2FX74XMM27A676hvMA6t3keTHyNGqMkBAmlP95jyhz%2BQZxJS0Y8LDe8XVLUoRCDSXFA4HZgd23E558UrdrnM7egXInMSrkSp2HuK1BKCHZDY8XIDdtM6c71eL7gvUGw2g%2FyBx9meAIGJ6WhwZL1DPz47EE2JfbExnlCKaJxyEvnomZVFdo3Q2c80foOyDKdvHWMQGPncQ9B1G8Sy28Z2tuNfB362OOSselLDJCasHlQA68ZJ1s%2F6nRSNLVN5YM7lj6LMe8JO3fD88NrLn2TZvD9unObnIqmCSlCXyHAg2Ca3QXfS%2FsfGys91O4%2B6B3xMqji8LmHf4bLKMYk7MMKiE98QGOqUBtueDSWlybsMyvXRfU9HihYeU4O9J7sd2zt0QGVXmTRQmm9R%2Bg49OBwb4wJLixmhuujKHXiNlwVS5MpCYwFwL2LQTMpYm1oxeREEbgB8%2B%2Bi01C3dZA6v504tIds2GqGm3M2fLeLojjzZqAnoZEdJNWWjR3xvOONssNQSezDdun%2B5m1msuAEDqKGCaGiDXHd6cXj4VOI0Ir97QBFbmJV1b2nAHm3AM&X-Amz-Signature=5cdab849bcc3e20342154d464667c6cb8bfc1e59afa286871bbba5845e6e7ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQJSYUF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEPlfCZY7M913hLmB%2B89P1wQj1w08VFChPFs0h2S8LsAiEAlq1O0HFDPVMY0bQQ8nrtvk8GY1g6fAfG0hEagp%2FjJdUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGLhR5cX2bNyY2nX2yrcA4t4D%2F%2Fgcn4bIpq8xG33oJGziSn58x6BMuqhE7b%2FD%2FIRu5M43jDjFrM4sddyqe5%2B9w9Ulk990x5jKh%2FqWoQ1ybvYWD9OdV0xwnOmiy3q2lwxCwRYVg%2FCiHJ9289lbsTPpsaRNV0HBjUnIrcNhv7LLMWxvMKhlzGtF0OPxufrCE%2FbF3HLCVJoEXFmMn2rXfv4LxA5pxNwhDTl32hA%2F%2FnzJG1YSDktp4UxM1Us3YdGWobjQE14OBEMxNGcZpGPA0vscE0zoV32SnKGENBhpT6Wi1Xd2rKbkef%2BACtjUcDMmiU%2B%2FX74XMM27A676hvMA6t3keTHyNGqMkBAmlP95jyhz%2BQZxJS0Y8LDe8XVLUoRCDSXFA4HZgd23E558UrdrnM7egXInMSrkSp2HuK1BKCHZDY8XIDdtM6c71eL7gvUGw2g%2FyBx9meAIGJ6WhwZL1DPz47EE2JfbExnlCKaJxyEvnomZVFdo3Q2c80foOyDKdvHWMQGPncQ9B1G8Sy28Z2tuNfB362OOSselLDJCasHlQA68ZJ1s%2F6nRSNLVN5YM7lj6LMe8JO3fD88NrLn2TZvD9unObnIqmCSlCXyHAg2Ca3QXfS%2FsfGys91O4%2B6B3xMqji8LmHf4bLKMYk7MMKiE98QGOqUBtueDSWlybsMyvXRfU9HihYeU4O9J7sd2zt0QGVXmTRQmm9R%2Bg49OBwb4wJLixmhuujKHXiNlwVS5MpCYwFwL2LQTMpYm1oxeREEbgB8%2B%2Bi01C3dZA6v504tIds2GqGm3M2fLeLojjzZqAnoZEdJNWWjR3xvOONssNQSezDdun%2B5m1msuAEDqKGCaGiDXHd6cXj4VOI0Ir97QBFbmJV1b2nAHm3AM&X-Amz-Signature=95e26a6bb210957753d5945812a2fb57a998aba601e99d86a4486f1ac0a5a781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQJSYUF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEPlfCZY7M913hLmB%2B89P1wQj1w08VFChPFs0h2S8LsAiEAlq1O0HFDPVMY0bQQ8nrtvk8GY1g6fAfG0hEagp%2FjJdUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGLhR5cX2bNyY2nX2yrcA4t4D%2F%2Fgcn4bIpq8xG33oJGziSn58x6BMuqhE7b%2FD%2FIRu5M43jDjFrM4sddyqe5%2B9w9Ulk990x5jKh%2FqWoQ1ybvYWD9OdV0xwnOmiy3q2lwxCwRYVg%2FCiHJ9289lbsTPpsaRNV0HBjUnIrcNhv7LLMWxvMKhlzGtF0OPxufrCE%2FbF3HLCVJoEXFmMn2rXfv4LxA5pxNwhDTl32hA%2F%2FnzJG1YSDktp4UxM1Us3YdGWobjQE14OBEMxNGcZpGPA0vscE0zoV32SnKGENBhpT6Wi1Xd2rKbkef%2BACtjUcDMmiU%2B%2FX74XMM27A676hvMA6t3keTHyNGqMkBAmlP95jyhz%2BQZxJS0Y8LDe8XVLUoRCDSXFA4HZgd23E558UrdrnM7egXInMSrkSp2HuK1BKCHZDY8XIDdtM6c71eL7gvUGw2g%2FyBx9meAIGJ6WhwZL1DPz47EE2JfbExnlCKaJxyEvnomZVFdo3Q2c80foOyDKdvHWMQGPncQ9B1G8Sy28Z2tuNfB362OOSselLDJCasHlQA68ZJ1s%2F6nRSNLVN5YM7lj6LMe8JO3fD88NrLn2TZvD9unObnIqmCSlCXyHAg2Ca3QXfS%2FsfGys91O4%2B6B3xMqji8LmHf4bLKMYk7MMKiE98QGOqUBtueDSWlybsMyvXRfU9HihYeU4O9J7sd2zt0QGVXmTRQmm9R%2Bg49OBwb4wJLixmhuujKHXiNlwVS5MpCYwFwL2LQTMpYm1oxeREEbgB8%2B%2Bi01C3dZA6v504tIds2GqGm3M2fLeLojjzZqAnoZEdJNWWjR3xvOONssNQSezDdun%2B5m1msuAEDqKGCaGiDXHd6cXj4VOI0Ir97QBFbmJV1b2nAHm3AM&X-Amz-Signature=853828a72be2441bd2cf4f8c5f719929d84875ba892c91e048f399495a795923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQJSYUF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEPlfCZY7M913hLmB%2B89P1wQj1w08VFChPFs0h2S8LsAiEAlq1O0HFDPVMY0bQQ8nrtvk8GY1g6fAfG0hEagp%2FjJdUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGLhR5cX2bNyY2nX2yrcA4t4D%2F%2Fgcn4bIpq8xG33oJGziSn58x6BMuqhE7b%2FD%2FIRu5M43jDjFrM4sddyqe5%2B9w9Ulk990x5jKh%2FqWoQ1ybvYWD9OdV0xwnOmiy3q2lwxCwRYVg%2FCiHJ9289lbsTPpsaRNV0HBjUnIrcNhv7LLMWxvMKhlzGtF0OPxufrCE%2FbF3HLCVJoEXFmMn2rXfv4LxA5pxNwhDTl32hA%2F%2FnzJG1YSDktp4UxM1Us3YdGWobjQE14OBEMxNGcZpGPA0vscE0zoV32SnKGENBhpT6Wi1Xd2rKbkef%2BACtjUcDMmiU%2B%2FX74XMM27A676hvMA6t3keTHyNGqMkBAmlP95jyhz%2BQZxJS0Y8LDe8XVLUoRCDSXFA4HZgd23E558UrdrnM7egXInMSrkSp2HuK1BKCHZDY8XIDdtM6c71eL7gvUGw2g%2FyBx9meAIGJ6WhwZL1DPz47EE2JfbExnlCKaJxyEvnomZVFdo3Q2c80foOyDKdvHWMQGPncQ9B1G8Sy28Z2tuNfB362OOSselLDJCasHlQA68ZJ1s%2F6nRSNLVN5YM7lj6LMe8JO3fD88NrLn2TZvD9unObnIqmCSlCXyHAg2Ca3QXfS%2FsfGys91O4%2B6B3xMqji8LmHf4bLKMYk7MMKiE98QGOqUBtueDSWlybsMyvXRfU9HihYeU4O9J7sd2zt0QGVXmTRQmm9R%2Bg49OBwb4wJLixmhuujKHXiNlwVS5MpCYwFwL2LQTMpYm1oxeREEbgB8%2B%2Bi01C3dZA6v504tIds2GqGm3M2fLeLojjzZqAnoZEdJNWWjR3xvOONssNQSezDdun%2B5m1msuAEDqKGCaGiDXHd6cXj4VOI0Ir97QBFbmJV1b2nAHm3AM&X-Amz-Signature=d5ce0ab96c338bd14f67a61f49320f1efd9770414029f1ab9395a41f4e7cab05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQJSYUF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEPlfCZY7M913hLmB%2B89P1wQj1w08VFChPFs0h2S8LsAiEAlq1O0HFDPVMY0bQQ8nrtvk8GY1g6fAfG0hEagp%2FjJdUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGLhR5cX2bNyY2nX2yrcA4t4D%2F%2Fgcn4bIpq8xG33oJGziSn58x6BMuqhE7b%2FD%2FIRu5M43jDjFrM4sddyqe5%2B9w9Ulk990x5jKh%2FqWoQ1ybvYWD9OdV0xwnOmiy3q2lwxCwRYVg%2FCiHJ9289lbsTPpsaRNV0HBjUnIrcNhv7LLMWxvMKhlzGtF0OPxufrCE%2FbF3HLCVJoEXFmMn2rXfv4LxA5pxNwhDTl32hA%2F%2FnzJG1YSDktp4UxM1Us3YdGWobjQE14OBEMxNGcZpGPA0vscE0zoV32SnKGENBhpT6Wi1Xd2rKbkef%2BACtjUcDMmiU%2B%2FX74XMM27A676hvMA6t3keTHyNGqMkBAmlP95jyhz%2BQZxJS0Y8LDe8XVLUoRCDSXFA4HZgd23E558UrdrnM7egXInMSrkSp2HuK1BKCHZDY8XIDdtM6c71eL7gvUGw2g%2FyBx9meAIGJ6WhwZL1DPz47EE2JfbExnlCKaJxyEvnomZVFdo3Q2c80foOyDKdvHWMQGPncQ9B1G8Sy28Z2tuNfB362OOSselLDJCasHlQA68ZJ1s%2F6nRSNLVN5YM7lj6LMe8JO3fD88NrLn2TZvD9unObnIqmCSlCXyHAg2Ca3QXfS%2FsfGys91O4%2B6B3xMqji8LmHf4bLKMYk7MMKiE98QGOqUBtueDSWlybsMyvXRfU9HihYeU4O9J7sd2zt0QGVXmTRQmm9R%2Bg49OBwb4wJLixmhuujKHXiNlwVS5MpCYwFwL2LQTMpYm1oxeREEbgB8%2B%2Bi01C3dZA6v504tIds2GqGm3M2fLeLojjzZqAnoZEdJNWWjR3xvOONssNQSezDdun%2B5m1msuAEDqKGCaGiDXHd6cXj4VOI0Ir97QBFbmJV1b2nAHm3AM&X-Amz-Signature=16c3c0547420a3d3a3366447e2c67c2390497a8f80cd3a8d7f1ff300ef3e0a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
