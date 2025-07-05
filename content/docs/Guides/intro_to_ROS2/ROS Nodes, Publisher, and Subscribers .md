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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NLT3BN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEMPhra0KZ850RKslcFBuDtaBYCGIqBITBEsjF5%2BhFLCAiEAtVl0KRdWngZiIcSurmLL%2Bn%2FvvWGqy1TowDGGtHZhOuoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIY6jdTs291HNihFQSrcA51eKdSU%2FMWQ6uEoAAME8HNLpVSdl2bsF5Son7hgFsGXSPqiezKnB9e7NpHhls6Hk6UPJoTC%2F%2FDtF11eshgeggW3hZvYQaXGiIdQ8xRcPPJA%2B0cfqr%2FcFUOdCAYwLhcWuWOOFbUFLhuVWSv0yBN1gVM1MRwmSJ70073uIKzZJwnV1LGjvZH%2BKG6VY88UMBcZ3yD4T3JgniD27J53I665s5%2BPt6FKNYVqgpNm95SnuW6UHw75l4%2FUBadjp%2BxkXpr5tnMQZrmDJlLiZqcPR094DzQv3J3ddKLQf2ar86kTnZAGwr4sNAiUmu0Zf0Ou4yfxbe1pQQane49J4KcjY6IFHJZZM8dH95jPWpdiHcCiTvyHY2XSAyJObLx%2FksGE0EX4FTtaYPwirydS6D8ccZvwl%2FB5Z7Hp1ObSfJSyH7OQXAs5Yuu1SPJaoVPBEathv%2FFheUW5aKRpEu170pzFsZHYg0BfBS3C7EfTfxSyToxwGT8wUyNhA2JeWctSTB%2BS9%2FYU%2Bbzl1VQ6vDQPMkM4sJZTlRpcInWjLbWHsRmXuTJOS00eLcojxOGFa%2FA3ryP82K4G1pe%2Ftkjfg8W2gIxYZaTaHd%2FQguaZVY3%2B2cwTo32Apulzr3A4OKAl2%2BfxWgMEMOSfo8MGOqUBho37Uo1BtFIE8i6EqFoVQre3etkKK2PyX7DkJkiLhY4%2BZmuLRtebiVmg5ICghBTa6nZOBGlFxRj8ESnxM3lMUqevj4yE3ieJ9wopDjWad9tTtCdoBq5HPvnNpI3jWm4uWMssXfVIefpbmMcXlbmhL1dN5ljqWJMGbUe1AtNrWEQEkxGoUPN0GBV6AmGfHneNbtYyusNSprJNDGuBVb7029tb6rJf&X-Amz-Signature=e61e6e5b99154a68f5c1ea0590937d9f721e4b1472d82f9ba66dec03a8cf4a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NLT3BN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEMPhra0KZ850RKslcFBuDtaBYCGIqBITBEsjF5%2BhFLCAiEAtVl0KRdWngZiIcSurmLL%2Bn%2FvvWGqy1TowDGGtHZhOuoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIY6jdTs291HNihFQSrcA51eKdSU%2FMWQ6uEoAAME8HNLpVSdl2bsF5Son7hgFsGXSPqiezKnB9e7NpHhls6Hk6UPJoTC%2F%2FDtF11eshgeggW3hZvYQaXGiIdQ8xRcPPJA%2B0cfqr%2FcFUOdCAYwLhcWuWOOFbUFLhuVWSv0yBN1gVM1MRwmSJ70073uIKzZJwnV1LGjvZH%2BKG6VY88UMBcZ3yD4T3JgniD27J53I665s5%2BPt6FKNYVqgpNm95SnuW6UHw75l4%2FUBadjp%2BxkXpr5tnMQZrmDJlLiZqcPR094DzQv3J3ddKLQf2ar86kTnZAGwr4sNAiUmu0Zf0Ou4yfxbe1pQQane49J4KcjY6IFHJZZM8dH95jPWpdiHcCiTvyHY2XSAyJObLx%2FksGE0EX4FTtaYPwirydS6D8ccZvwl%2FB5Z7Hp1ObSfJSyH7OQXAs5Yuu1SPJaoVPBEathv%2FFheUW5aKRpEu170pzFsZHYg0BfBS3C7EfTfxSyToxwGT8wUyNhA2JeWctSTB%2BS9%2FYU%2Bbzl1VQ6vDQPMkM4sJZTlRpcInWjLbWHsRmXuTJOS00eLcojxOGFa%2FA3ryP82K4G1pe%2Ftkjfg8W2gIxYZaTaHd%2FQguaZVY3%2B2cwTo32Apulzr3A4OKAl2%2BfxWgMEMOSfo8MGOqUBho37Uo1BtFIE8i6EqFoVQre3etkKK2PyX7DkJkiLhY4%2BZmuLRtebiVmg5ICghBTa6nZOBGlFxRj8ESnxM3lMUqevj4yE3ieJ9wopDjWad9tTtCdoBq5HPvnNpI3jWm4uWMssXfVIefpbmMcXlbmhL1dN5ljqWJMGbUe1AtNrWEQEkxGoUPN0GBV6AmGfHneNbtYyusNSprJNDGuBVb7029tb6rJf&X-Amz-Signature=16c5d672a290b9ddfb2b4150ffaf1c754586a80737a8bf0498fd19a4d40066e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NLT3BN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEMPhra0KZ850RKslcFBuDtaBYCGIqBITBEsjF5%2BhFLCAiEAtVl0KRdWngZiIcSurmLL%2Bn%2FvvWGqy1TowDGGtHZhOuoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIY6jdTs291HNihFQSrcA51eKdSU%2FMWQ6uEoAAME8HNLpVSdl2bsF5Son7hgFsGXSPqiezKnB9e7NpHhls6Hk6UPJoTC%2F%2FDtF11eshgeggW3hZvYQaXGiIdQ8xRcPPJA%2B0cfqr%2FcFUOdCAYwLhcWuWOOFbUFLhuVWSv0yBN1gVM1MRwmSJ70073uIKzZJwnV1LGjvZH%2BKG6VY88UMBcZ3yD4T3JgniD27J53I665s5%2BPt6FKNYVqgpNm95SnuW6UHw75l4%2FUBadjp%2BxkXpr5tnMQZrmDJlLiZqcPR094DzQv3J3ddKLQf2ar86kTnZAGwr4sNAiUmu0Zf0Ou4yfxbe1pQQane49J4KcjY6IFHJZZM8dH95jPWpdiHcCiTvyHY2XSAyJObLx%2FksGE0EX4FTtaYPwirydS6D8ccZvwl%2FB5Z7Hp1ObSfJSyH7OQXAs5Yuu1SPJaoVPBEathv%2FFheUW5aKRpEu170pzFsZHYg0BfBS3C7EfTfxSyToxwGT8wUyNhA2JeWctSTB%2BS9%2FYU%2Bbzl1VQ6vDQPMkM4sJZTlRpcInWjLbWHsRmXuTJOS00eLcojxOGFa%2FA3ryP82K4G1pe%2Ftkjfg8W2gIxYZaTaHd%2FQguaZVY3%2B2cwTo32Apulzr3A4OKAl2%2BfxWgMEMOSfo8MGOqUBho37Uo1BtFIE8i6EqFoVQre3etkKK2PyX7DkJkiLhY4%2BZmuLRtebiVmg5ICghBTa6nZOBGlFxRj8ESnxM3lMUqevj4yE3ieJ9wopDjWad9tTtCdoBq5HPvnNpI3jWm4uWMssXfVIefpbmMcXlbmhL1dN5ljqWJMGbUe1AtNrWEQEkxGoUPN0GBV6AmGfHneNbtYyusNSprJNDGuBVb7029tb6rJf&X-Amz-Signature=19aeb37b24d289c960cad7927d59c22f4d9ea5eef9ec535b62b8dd975d4077cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NLT3BN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEMPhra0KZ850RKslcFBuDtaBYCGIqBITBEsjF5%2BhFLCAiEAtVl0KRdWngZiIcSurmLL%2Bn%2FvvWGqy1TowDGGtHZhOuoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIY6jdTs291HNihFQSrcA51eKdSU%2FMWQ6uEoAAME8HNLpVSdl2bsF5Son7hgFsGXSPqiezKnB9e7NpHhls6Hk6UPJoTC%2F%2FDtF11eshgeggW3hZvYQaXGiIdQ8xRcPPJA%2B0cfqr%2FcFUOdCAYwLhcWuWOOFbUFLhuVWSv0yBN1gVM1MRwmSJ70073uIKzZJwnV1LGjvZH%2BKG6VY88UMBcZ3yD4T3JgniD27J53I665s5%2BPt6FKNYVqgpNm95SnuW6UHw75l4%2FUBadjp%2BxkXpr5tnMQZrmDJlLiZqcPR094DzQv3J3ddKLQf2ar86kTnZAGwr4sNAiUmu0Zf0Ou4yfxbe1pQQane49J4KcjY6IFHJZZM8dH95jPWpdiHcCiTvyHY2XSAyJObLx%2FksGE0EX4FTtaYPwirydS6D8ccZvwl%2FB5Z7Hp1ObSfJSyH7OQXAs5Yuu1SPJaoVPBEathv%2FFheUW5aKRpEu170pzFsZHYg0BfBS3C7EfTfxSyToxwGT8wUyNhA2JeWctSTB%2BS9%2FYU%2Bbzl1VQ6vDQPMkM4sJZTlRpcInWjLbWHsRmXuTJOS00eLcojxOGFa%2FA3ryP82K4G1pe%2Ftkjfg8W2gIxYZaTaHd%2FQguaZVY3%2B2cwTo32Apulzr3A4OKAl2%2BfxWgMEMOSfo8MGOqUBho37Uo1BtFIE8i6EqFoVQre3etkKK2PyX7DkJkiLhY4%2BZmuLRtebiVmg5ICghBTa6nZOBGlFxRj8ESnxM3lMUqevj4yE3ieJ9wopDjWad9tTtCdoBq5HPvnNpI3jWm4uWMssXfVIefpbmMcXlbmhL1dN5ljqWJMGbUe1AtNrWEQEkxGoUPN0GBV6AmGfHneNbtYyusNSprJNDGuBVb7029tb6rJf&X-Amz-Signature=1655eac38b7cb940074894c2f9fdcffe9ed80120178abebcce3769f4ff803a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NLT3BN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEMPhra0KZ850RKslcFBuDtaBYCGIqBITBEsjF5%2BhFLCAiEAtVl0KRdWngZiIcSurmLL%2Bn%2FvvWGqy1TowDGGtHZhOuoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIY6jdTs291HNihFQSrcA51eKdSU%2FMWQ6uEoAAME8HNLpVSdl2bsF5Son7hgFsGXSPqiezKnB9e7NpHhls6Hk6UPJoTC%2F%2FDtF11eshgeggW3hZvYQaXGiIdQ8xRcPPJA%2B0cfqr%2FcFUOdCAYwLhcWuWOOFbUFLhuVWSv0yBN1gVM1MRwmSJ70073uIKzZJwnV1LGjvZH%2BKG6VY88UMBcZ3yD4T3JgniD27J53I665s5%2BPt6FKNYVqgpNm95SnuW6UHw75l4%2FUBadjp%2BxkXpr5tnMQZrmDJlLiZqcPR094DzQv3J3ddKLQf2ar86kTnZAGwr4sNAiUmu0Zf0Ou4yfxbe1pQQane49J4KcjY6IFHJZZM8dH95jPWpdiHcCiTvyHY2XSAyJObLx%2FksGE0EX4FTtaYPwirydS6D8ccZvwl%2FB5Z7Hp1ObSfJSyH7OQXAs5Yuu1SPJaoVPBEathv%2FFheUW5aKRpEu170pzFsZHYg0BfBS3C7EfTfxSyToxwGT8wUyNhA2JeWctSTB%2BS9%2FYU%2Bbzl1VQ6vDQPMkM4sJZTlRpcInWjLbWHsRmXuTJOS00eLcojxOGFa%2FA3ryP82K4G1pe%2Ftkjfg8W2gIxYZaTaHd%2FQguaZVY3%2B2cwTo32Apulzr3A4OKAl2%2BfxWgMEMOSfo8MGOqUBho37Uo1BtFIE8i6EqFoVQre3etkKK2PyX7DkJkiLhY4%2BZmuLRtebiVmg5ICghBTa6nZOBGlFxRj8ESnxM3lMUqevj4yE3ieJ9wopDjWad9tTtCdoBq5HPvnNpI3jWm4uWMssXfVIefpbmMcXlbmhL1dN5ljqWJMGbUe1AtNrWEQEkxGoUPN0GBV6AmGfHneNbtYyusNSprJNDGuBVb7029tb6rJf&X-Amz-Signature=d93814288b357a05898ca35c34745caf966bca64528fdc2d0e90c93cfff08cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NLT3BN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEMPhra0KZ850RKslcFBuDtaBYCGIqBITBEsjF5%2BhFLCAiEAtVl0KRdWngZiIcSurmLL%2Bn%2FvvWGqy1TowDGGtHZhOuoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIY6jdTs291HNihFQSrcA51eKdSU%2FMWQ6uEoAAME8HNLpVSdl2bsF5Son7hgFsGXSPqiezKnB9e7NpHhls6Hk6UPJoTC%2F%2FDtF11eshgeggW3hZvYQaXGiIdQ8xRcPPJA%2B0cfqr%2FcFUOdCAYwLhcWuWOOFbUFLhuVWSv0yBN1gVM1MRwmSJ70073uIKzZJwnV1LGjvZH%2BKG6VY88UMBcZ3yD4T3JgniD27J53I665s5%2BPt6FKNYVqgpNm95SnuW6UHw75l4%2FUBadjp%2BxkXpr5tnMQZrmDJlLiZqcPR094DzQv3J3ddKLQf2ar86kTnZAGwr4sNAiUmu0Zf0Ou4yfxbe1pQQane49J4KcjY6IFHJZZM8dH95jPWpdiHcCiTvyHY2XSAyJObLx%2FksGE0EX4FTtaYPwirydS6D8ccZvwl%2FB5Z7Hp1ObSfJSyH7OQXAs5Yuu1SPJaoVPBEathv%2FFheUW5aKRpEu170pzFsZHYg0BfBS3C7EfTfxSyToxwGT8wUyNhA2JeWctSTB%2BS9%2FYU%2Bbzl1VQ6vDQPMkM4sJZTlRpcInWjLbWHsRmXuTJOS00eLcojxOGFa%2FA3ryP82K4G1pe%2Ftkjfg8W2gIxYZaTaHd%2FQguaZVY3%2B2cwTo32Apulzr3A4OKAl2%2BfxWgMEMOSfo8MGOqUBho37Uo1BtFIE8i6EqFoVQre3etkKK2PyX7DkJkiLhY4%2BZmuLRtebiVmg5ICghBTa6nZOBGlFxRj8ESnxM3lMUqevj4yE3ieJ9wopDjWad9tTtCdoBq5HPvnNpI3jWm4uWMssXfVIefpbmMcXlbmhL1dN5ljqWJMGbUe1AtNrWEQEkxGoUPN0GBV6AmGfHneNbtYyusNSprJNDGuBVb7029tb6rJf&X-Amz-Signature=97d06fda3776a301d4627dc9377c53cc6bf9bdbc0c5998cd4411e6d77eeb470b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NLT3BN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEMPhra0KZ850RKslcFBuDtaBYCGIqBITBEsjF5%2BhFLCAiEAtVl0KRdWngZiIcSurmLL%2Bn%2FvvWGqy1TowDGGtHZhOuoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIY6jdTs291HNihFQSrcA51eKdSU%2FMWQ6uEoAAME8HNLpVSdl2bsF5Son7hgFsGXSPqiezKnB9e7NpHhls6Hk6UPJoTC%2F%2FDtF11eshgeggW3hZvYQaXGiIdQ8xRcPPJA%2B0cfqr%2FcFUOdCAYwLhcWuWOOFbUFLhuVWSv0yBN1gVM1MRwmSJ70073uIKzZJwnV1LGjvZH%2BKG6VY88UMBcZ3yD4T3JgniD27J53I665s5%2BPt6FKNYVqgpNm95SnuW6UHw75l4%2FUBadjp%2BxkXpr5tnMQZrmDJlLiZqcPR094DzQv3J3ddKLQf2ar86kTnZAGwr4sNAiUmu0Zf0Ou4yfxbe1pQQane49J4KcjY6IFHJZZM8dH95jPWpdiHcCiTvyHY2XSAyJObLx%2FksGE0EX4FTtaYPwirydS6D8ccZvwl%2FB5Z7Hp1ObSfJSyH7OQXAs5Yuu1SPJaoVPBEathv%2FFheUW5aKRpEu170pzFsZHYg0BfBS3C7EfTfxSyToxwGT8wUyNhA2JeWctSTB%2BS9%2FYU%2Bbzl1VQ6vDQPMkM4sJZTlRpcInWjLbWHsRmXuTJOS00eLcojxOGFa%2FA3ryP82K4G1pe%2Ftkjfg8W2gIxYZaTaHd%2FQguaZVY3%2B2cwTo32Apulzr3A4OKAl2%2BfxWgMEMOSfo8MGOqUBho37Uo1BtFIE8i6EqFoVQre3etkKK2PyX7DkJkiLhY4%2BZmuLRtebiVmg5ICghBTa6nZOBGlFxRj8ESnxM3lMUqevj4yE3ieJ9wopDjWad9tTtCdoBq5HPvnNpI3jWm4uWMssXfVIefpbmMcXlbmhL1dN5ljqWJMGbUe1AtNrWEQEkxGoUPN0GBV6AmGfHneNbtYyusNSprJNDGuBVb7029tb6rJf&X-Amz-Signature=13a09dab57dc10a8b1a513788ca1da9b6dab77629691c5290e476e31ae6032e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NLT3BN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIEMPhra0KZ850RKslcFBuDtaBYCGIqBITBEsjF5%2BhFLCAiEAtVl0KRdWngZiIcSurmLL%2Bn%2FvvWGqy1TowDGGtHZhOuoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIY6jdTs291HNihFQSrcA51eKdSU%2FMWQ6uEoAAME8HNLpVSdl2bsF5Son7hgFsGXSPqiezKnB9e7NpHhls6Hk6UPJoTC%2F%2FDtF11eshgeggW3hZvYQaXGiIdQ8xRcPPJA%2B0cfqr%2FcFUOdCAYwLhcWuWOOFbUFLhuVWSv0yBN1gVM1MRwmSJ70073uIKzZJwnV1LGjvZH%2BKG6VY88UMBcZ3yD4T3JgniD27J53I665s5%2BPt6FKNYVqgpNm95SnuW6UHw75l4%2FUBadjp%2BxkXpr5tnMQZrmDJlLiZqcPR094DzQv3J3ddKLQf2ar86kTnZAGwr4sNAiUmu0Zf0Ou4yfxbe1pQQane49J4KcjY6IFHJZZM8dH95jPWpdiHcCiTvyHY2XSAyJObLx%2FksGE0EX4FTtaYPwirydS6D8ccZvwl%2FB5Z7Hp1ObSfJSyH7OQXAs5Yuu1SPJaoVPBEathv%2FFheUW5aKRpEu170pzFsZHYg0BfBS3C7EfTfxSyToxwGT8wUyNhA2JeWctSTB%2BS9%2FYU%2Bbzl1VQ6vDQPMkM4sJZTlRpcInWjLbWHsRmXuTJOS00eLcojxOGFa%2FA3ryP82K4G1pe%2Ftkjfg8W2gIxYZaTaHd%2FQguaZVY3%2B2cwTo32Apulzr3A4OKAl2%2BfxWgMEMOSfo8MGOqUBho37Uo1BtFIE8i6EqFoVQre3etkKK2PyX7DkJkiLhY4%2BZmuLRtebiVmg5ICghBTa6nZOBGlFxRj8ESnxM3lMUqevj4yE3ieJ9wopDjWad9tTtCdoBq5HPvnNpI3jWm4uWMssXfVIefpbmMcXlbmhL1dN5ljqWJMGbUe1AtNrWEQEkxGoUPN0GBV6AmGfHneNbtYyusNSprJNDGuBVb7029tb6rJf&X-Amz-Signature=c8964098dc3150f8044499d529c6c6fce5afe1a2d1f627a26ad96384a4628af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
