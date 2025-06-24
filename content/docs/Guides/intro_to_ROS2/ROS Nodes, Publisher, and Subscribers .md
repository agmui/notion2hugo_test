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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QBPFQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCQddGlBbrlTAN791T1eS5ZzBRmahQi17wW45%2BcFuI%2BlAIhAIdingEsaWNpUI9UywWbxDKhZ%2FPb8cxLM8zH%2BGMBvlNRKv8DCCUQABoMNjM3NDIzMTgzODA1IgzDJFacFi452bF8mXQq3ANjif5bM0M4hSr2vNQQs458jDKvZ30%2FAc7HCUMwL2ekOs1UDGVWQgIsX4hM%2F0HdIiIA4qM5dKSNPEXOfFexY8o8ZkM3JechigLgvFeR8PqpYzKHxAEmG5iOcyLxPy32OD7jGhsW3RX0%2BayY2CfUUye3dZF3MuHN31yhTAkniBed3on%2BfHVLikFmGr8Gp65YhMPPNSo%2Fmwe6Q0wY4g5ZST0mOgcdHbgd%2Fe%2BXw1SeFs%2BhLv0tXDsGqBngoQHFS7%2B%2BPOfsMvvWM%2BzbcUrG8FS37PFa7Y%2Fb90XQQ7QBFfq1XBMzSyVO4ZGKeuSsjMbDFCj%2BejTRuxD9HyHE9GfJW4jlb4pfu2wyA6%2Ba5kELg%2Fm%2By8m%2FzJME8wlYEa0cGKTlh2FmCGYMlheKn%2ByVB2BdNRhZdNtP7ZXueU6B0g8WzKPbdgRFWOO2rneWrJKsvwSSc%2FWAR9GoUDnMOrXgY%2Fcu0r3Thf4gnLaMdTJsSatIAMJ8rMtaybWXRjCi6h7JbKpuUxKWa%2FdcMJA0mugKgi2cMDGl%2BzjgwChS9CnwLoCguo6NLMCl%2B67cHL33LvFSnOi7Puz6AAc0%2FCV0hnoWHib9GpMtcDrKwas9BUXXGg6S2Ox8gn4o1CVefdj%2Bfy5pC3oCgjCdzujCBjqkAYi2IDGW0tVcZsuqEHMVBIeZYQ7f5kPcsTJQgVxAnpj9c4RoRg2McMTFkU92hZPt2ZmFnKj18Ha8UrUh8KpWMbBAO03eCJF%2BoMh6cl4v95RB1eRgOYweZujHnbPzXYuwu3wbo%2Fkkix7f8S8e%2BVlxHLWmnkGnB4bPHxMcb3nYYwU3bTZfB0AZ0MoUu78TdzpDrK1go9md97GTner%2FvBHRPquvvGeo&X-Amz-Signature=d57823ba0dde2e91ff74f7706be9bed0229fe4083b48ad762ec45a8f46eca4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QBPFQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCQddGlBbrlTAN791T1eS5ZzBRmahQi17wW45%2BcFuI%2BlAIhAIdingEsaWNpUI9UywWbxDKhZ%2FPb8cxLM8zH%2BGMBvlNRKv8DCCUQABoMNjM3NDIzMTgzODA1IgzDJFacFi452bF8mXQq3ANjif5bM0M4hSr2vNQQs458jDKvZ30%2FAc7HCUMwL2ekOs1UDGVWQgIsX4hM%2F0HdIiIA4qM5dKSNPEXOfFexY8o8ZkM3JechigLgvFeR8PqpYzKHxAEmG5iOcyLxPy32OD7jGhsW3RX0%2BayY2CfUUye3dZF3MuHN31yhTAkniBed3on%2BfHVLikFmGr8Gp65YhMPPNSo%2Fmwe6Q0wY4g5ZST0mOgcdHbgd%2Fe%2BXw1SeFs%2BhLv0tXDsGqBngoQHFS7%2B%2BPOfsMvvWM%2BzbcUrG8FS37PFa7Y%2Fb90XQQ7QBFfq1XBMzSyVO4ZGKeuSsjMbDFCj%2BejTRuxD9HyHE9GfJW4jlb4pfu2wyA6%2Ba5kELg%2Fm%2By8m%2FzJME8wlYEa0cGKTlh2FmCGYMlheKn%2ByVB2BdNRhZdNtP7ZXueU6B0g8WzKPbdgRFWOO2rneWrJKsvwSSc%2FWAR9GoUDnMOrXgY%2Fcu0r3Thf4gnLaMdTJsSatIAMJ8rMtaybWXRjCi6h7JbKpuUxKWa%2FdcMJA0mugKgi2cMDGl%2BzjgwChS9CnwLoCguo6NLMCl%2B67cHL33LvFSnOi7Puz6AAc0%2FCV0hnoWHib9GpMtcDrKwas9BUXXGg6S2Ox8gn4o1CVefdj%2Bfy5pC3oCgjCdzujCBjqkAYi2IDGW0tVcZsuqEHMVBIeZYQ7f5kPcsTJQgVxAnpj9c4RoRg2McMTFkU92hZPt2ZmFnKj18Ha8UrUh8KpWMbBAO03eCJF%2BoMh6cl4v95RB1eRgOYweZujHnbPzXYuwu3wbo%2Fkkix7f8S8e%2BVlxHLWmnkGnB4bPHxMcb3nYYwU3bTZfB0AZ0MoUu78TdzpDrK1go9md97GTner%2FvBHRPquvvGeo&X-Amz-Signature=eb953d1d157105e60dabbe292b3bb03f906b5e395cbc3fc057b0ba43588fd8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QBPFQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCQddGlBbrlTAN791T1eS5ZzBRmahQi17wW45%2BcFuI%2BlAIhAIdingEsaWNpUI9UywWbxDKhZ%2FPb8cxLM8zH%2BGMBvlNRKv8DCCUQABoMNjM3NDIzMTgzODA1IgzDJFacFi452bF8mXQq3ANjif5bM0M4hSr2vNQQs458jDKvZ30%2FAc7HCUMwL2ekOs1UDGVWQgIsX4hM%2F0HdIiIA4qM5dKSNPEXOfFexY8o8ZkM3JechigLgvFeR8PqpYzKHxAEmG5iOcyLxPy32OD7jGhsW3RX0%2BayY2CfUUye3dZF3MuHN31yhTAkniBed3on%2BfHVLikFmGr8Gp65YhMPPNSo%2Fmwe6Q0wY4g5ZST0mOgcdHbgd%2Fe%2BXw1SeFs%2BhLv0tXDsGqBngoQHFS7%2B%2BPOfsMvvWM%2BzbcUrG8FS37PFa7Y%2Fb90XQQ7QBFfq1XBMzSyVO4ZGKeuSsjMbDFCj%2BejTRuxD9HyHE9GfJW4jlb4pfu2wyA6%2Ba5kELg%2Fm%2By8m%2FzJME8wlYEa0cGKTlh2FmCGYMlheKn%2ByVB2BdNRhZdNtP7ZXueU6B0g8WzKPbdgRFWOO2rneWrJKsvwSSc%2FWAR9GoUDnMOrXgY%2Fcu0r3Thf4gnLaMdTJsSatIAMJ8rMtaybWXRjCi6h7JbKpuUxKWa%2FdcMJA0mugKgi2cMDGl%2BzjgwChS9CnwLoCguo6NLMCl%2B67cHL33LvFSnOi7Puz6AAc0%2FCV0hnoWHib9GpMtcDrKwas9BUXXGg6S2Ox8gn4o1CVefdj%2Bfy5pC3oCgjCdzujCBjqkAYi2IDGW0tVcZsuqEHMVBIeZYQ7f5kPcsTJQgVxAnpj9c4RoRg2McMTFkU92hZPt2ZmFnKj18Ha8UrUh8KpWMbBAO03eCJF%2BoMh6cl4v95RB1eRgOYweZujHnbPzXYuwu3wbo%2Fkkix7f8S8e%2BVlxHLWmnkGnB4bPHxMcb3nYYwU3bTZfB0AZ0MoUu78TdzpDrK1go9md97GTner%2FvBHRPquvvGeo&X-Amz-Signature=3df748457bc19fd32ae7b2128728762cd767da51a26b8f9bc673395bcd46bf7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QBPFQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCQddGlBbrlTAN791T1eS5ZzBRmahQi17wW45%2BcFuI%2BlAIhAIdingEsaWNpUI9UywWbxDKhZ%2FPb8cxLM8zH%2BGMBvlNRKv8DCCUQABoMNjM3NDIzMTgzODA1IgzDJFacFi452bF8mXQq3ANjif5bM0M4hSr2vNQQs458jDKvZ30%2FAc7HCUMwL2ekOs1UDGVWQgIsX4hM%2F0HdIiIA4qM5dKSNPEXOfFexY8o8ZkM3JechigLgvFeR8PqpYzKHxAEmG5iOcyLxPy32OD7jGhsW3RX0%2BayY2CfUUye3dZF3MuHN31yhTAkniBed3on%2BfHVLikFmGr8Gp65YhMPPNSo%2Fmwe6Q0wY4g5ZST0mOgcdHbgd%2Fe%2BXw1SeFs%2BhLv0tXDsGqBngoQHFS7%2B%2BPOfsMvvWM%2BzbcUrG8FS37PFa7Y%2Fb90XQQ7QBFfq1XBMzSyVO4ZGKeuSsjMbDFCj%2BejTRuxD9HyHE9GfJW4jlb4pfu2wyA6%2Ba5kELg%2Fm%2By8m%2FzJME8wlYEa0cGKTlh2FmCGYMlheKn%2ByVB2BdNRhZdNtP7ZXueU6B0g8WzKPbdgRFWOO2rneWrJKsvwSSc%2FWAR9GoUDnMOrXgY%2Fcu0r3Thf4gnLaMdTJsSatIAMJ8rMtaybWXRjCi6h7JbKpuUxKWa%2FdcMJA0mugKgi2cMDGl%2BzjgwChS9CnwLoCguo6NLMCl%2B67cHL33LvFSnOi7Puz6AAc0%2FCV0hnoWHib9GpMtcDrKwas9BUXXGg6S2Ox8gn4o1CVefdj%2Bfy5pC3oCgjCdzujCBjqkAYi2IDGW0tVcZsuqEHMVBIeZYQ7f5kPcsTJQgVxAnpj9c4RoRg2McMTFkU92hZPt2ZmFnKj18Ha8UrUh8KpWMbBAO03eCJF%2BoMh6cl4v95RB1eRgOYweZujHnbPzXYuwu3wbo%2Fkkix7f8S8e%2BVlxHLWmnkGnB4bPHxMcb3nYYwU3bTZfB0AZ0MoUu78TdzpDrK1go9md97GTner%2FvBHRPquvvGeo&X-Amz-Signature=624f4667ca99fa31eb5ef5d9c591f498b7e8d5bae356c9ee44eee964fa2e24bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QBPFQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCQddGlBbrlTAN791T1eS5ZzBRmahQi17wW45%2BcFuI%2BlAIhAIdingEsaWNpUI9UywWbxDKhZ%2FPb8cxLM8zH%2BGMBvlNRKv8DCCUQABoMNjM3NDIzMTgzODA1IgzDJFacFi452bF8mXQq3ANjif5bM0M4hSr2vNQQs458jDKvZ30%2FAc7HCUMwL2ekOs1UDGVWQgIsX4hM%2F0HdIiIA4qM5dKSNPEXOfFexY8o8ZkM3JechigLgvFeR8PqpYzKHxAEmG5iOcyLxPy32OD7jGhsW3RX0%2BayY2CfUUye3dZF3MuHN31yhTAkniBed3on%2BfHVLikFmGr8Gp65YhMPPNSo%2Fmwe6Q0wY4g5ZST0mOgcdHbgd%2Fe%2BXw1SeFs%2BhLv0tXDsGqBngoQHFS7%2B%2BPOfsMvvWM%2BzbcUrG8FS37PFa7Y%2Fb90XQQ7QBFfq1XBMzSyVO4ZGKeuSsjMbDFCj%2BejTRuxD9HyHE9GfJW4jlb4pfu2wyA6%2Ba5kELg%2Fm%2By8m%2FzJME8wlYEa0cGKTlh2FmCGYMlheKn%2ByVB2BdNRhZdNtP7ZXueU6B0g8WzKPbdgRFWOO2rneWrJKsvwSSc%2FWAR9GoUDnMOrXgY%2Fcu0r3Thf4gnLaMdTJsSatIAMJ8rMtaybWXRjCi6h7JbKpuUxKWa%2FdcMJA0mugKgi2cMDGl%2BzjgwChS9CnwLoCguo6NLMCl%2B67cHL33LvFSnOi7Puz6AAc0%2FCV0hnoWHib9GpMtcDrKwas9BUXXGg6S2Ox8gn4o1CVefdj%2Bfy5pC3oCgjCdzujCBjqkAYi2IDGW0tVcZsuqEHMVBIeZYQ7f5kPcsTJQgVxAnpj9c4RoRg2McMTFkU92hZPt2ZmFnKj18Ha8UrUh8KpWMbBAO03eCJF%2BoMh6cl4v95RB1eRgOYweZujHnbPzXYuwu3wbo%2Fkkix7f8S8e%2BVlxHLWmnkGnB4bPHxMcb3nYYwU3bTZfB0AZ0MoUu78TdzpDrK1go9md97GTner%2FvBHRPquvvGeo&X-Amz-Signature=618a8207c02d88f60f9d9e555bbd493486621f3158aeaf308ca6a2ff66f569ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QBPFQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCQddGlBbrlTAN791T1eS5ZzBRmahQi17wW45%2BcFuI%2BlAIhAIdingEsaWNpUI9UywWbxDKhZ%2FPb8cxLM8zH%2BGMBvlNRKv8DCCUQABoMNjM3NDIzMTgzODA1IgzDJFacFi452bF8mXQq3ANjif5bM0M4hSr2vNQQs458jDKvZ30%2FAc7HCUMwL2ekOs1UDGVWQgIsX4hM%2F0HdIiIA4qM5dKSNPEXOfFexY8o8ZkM3JechigLgvFeR8PqpYzKHxAEmG5iOcyLxPy32OD7jGhsW3RX0%2BayY2CfUUye3dZF3MuHN31yhTAkniBed3on%2BfHVLikFmGr8Gp65YhMPPNSo%2Fmwe6Q0wY4g5ZST0mOgcdHbgd%2Fe%2BXw1SeFs%2BhLv0tXDsGqBngoQHFS7%2B%2BPOfsMvvWM%2BzbcUrG8FS37PFa7Y%2Fb90XQQ7QBFfq1XBMzSyVO4ZGKeuSsjMbDFCj%2BejTRuxD9HyHE9GfJW4jlb4pfu2wyA6%2Ba5kELg%2Fm%2By8m%2FzJME8wlYEa0cGKTlh2FmCGYMlheKn%2ByVB2BdNRhZdNtP7ZXueU6B0g8WzKPbdgRFWOO2rneWrJKsvwSSc%2FWAR9GoUDnMOrXgY%2Fcu0r3Thf4gnLaMdTJsSatIAMJ8rMtaybWXRjCi6h7JbKpuUxKWa%2FdcMJA0mugKgi2cMDGl%2BzjgwChS9CnwLoCguo6NLMCl%2B67cHL33LvFSnOi7Puz6AAc0%2FCV0hnoWHib9GpMtcDrKwas9BUXXGg6S2Ox8gn4o1CVefdj%2Bfy5pC3oCgjCdzujCBjqkAYi2IDGW0tVcZsuqEHMVBIeZYQ7f5kPcsTJQgVxAnpj9c4RoRg2McMTFkU92hZPt2ZmFnKj18Ha8UrUh8KpWMbBAO03eCJF%2BoMh6cl4v95RB1eRgOYweZujHnbPzXYuwu3wbo%2Fkkix7f8S8e%2BVlxHLWmnkGnB4bPHxMcb3nYYwU3bTZfB0AZ0MoUu78TdzpDrK1go9md97GTner%2FvBHRPquvvGeo&X-Amz-Signature=a8b0a3bd8cb9aaf9f9976cd23224f86cedf3b0a2a6d9b7c1822a389dfc120467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QBPFQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCQddGlBbrlTAN791T1eS5ZzBRmahQi17wW45%2BcFuI%2BlAIhAIdingEsaWNpUI9UywWbxDKhZ%2FPb8cxLM8zH%2BGMBvlNRKv8DCCUQABoMNjM3NDIzMTgzODA1IgzDJFacFi452bF8mXQq3ANjif5bM0M4hSr2vNQQs458jDKvZ30%2FAc7HCUMwL2ekOs1UDGVWQgIsX4hM%2F0HdIiIA4qM5dKSNPEXOfFexY8o8ZkM3JechigLgvFeR8PqpYzKHxAEmG5iOcyLxPy32OD7jGhsW3RX0%2BayY2CfUUye3dZF3MuHN31yhTAkniBed3on%2BfHVLikFmGr8Gp65YhMPPNSo%2Fmwe6Q0wY4g5ZST0mOgcdHbgd%2Fe%2BXw1SeFs%2BhLv0tXDsGqBngoQHFS7%2B%2BPOfsMvvWM%2BzbcUrG8FS37PFa7Y%2Fb90XQQ7QBFfq1XBMzSyVO4ZGKeuSsjMbDFCj%2BejTRuxD9HyHE9GfJW4jlb4pfu2wyA6%2Ba5kELg%2Fm%2By8m%2FzJME8wlYEa0cGKTlh2FmCGYMlheKn%2ByVB2BdNRhZdNtP7ZXueU6B0g8WzKPbdgRFWOO2rneWrJKsvwSSc%2FWAR9GoUDnMOrXgY%2Fcu0r3Thf4gnLaMdTJsSatIAMJ8rMtaybWXRjCi6h7JbKpuUxKWa%2FdcMJA0mugKgi2cMDGl%2BzjgwChS9CnwLoCguo6NLMCl%2B67cHL33LvFSnOi7Puz6AAc0%2FCV0hnoWHib9GpMtcDrKwas9BUXXGg6S2Ox8gn4o1CVefdj%2Bfy5pC3oCgjCdzujCBjqkAYi2IDGW0tVcZsuqEHMVBIeZYQ7f5kPcsTJQgVxAnpj9c4RoRg2McMTFkU92hZPt2ZmFnKj18Ha8UrUh8KpWMbBAO03eCJF%2BoMh6cl4v95RB1eRgOYweZujHnbPzXYuwu3wbo%2Fkkix7f8S8e%2BVlxHLWmnkGnB4bPHxMcb3nYYwU3bTZfB0AZ0MoUu78TdzpDrK1go9md97GTner%2FvBHRPquvvGeo&X-Amz-Signature=3b1b8aeec58fbd492237818685858522d115ee1e1e82cfe969946a5ece56d171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QBPFQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCQddGlBbrlTAN791T1eS5ZzBRmahQi17wW45%2BcFuI%2BlAIhAIdingEsaWNpUI9UywWbxDKhZ%2FPb8cxLM8zH%2BGMBvlNRKv8DCCUQABoMNjM3NDIzMTgzODA1IgzDJFacFi452bF8mXQq3ANjif5bM0M4hSr2vNQQs458jDKvZ30%2FAc7HCUMwL2ekOs1UDGVWQgIsX4hM%2F0HdIiIA4qM5dKSNPEXOfFexY8o8ZkM3JechigLgvFeR8PqpYzKHxAEmG5iOcyLxPy32OD7jGhsW3RX0%2BayY2CfUUye3dZF3MuHN31yhTAkniBed3on%2BfHVLikFmGr8Gp65YhMPPNSo%2Fmwe6Q0wY4g5ZST0mOgcdHbgd%2Fe%2BXw1SeFs%2BhLv0tXDsGqBngoQHFS7%2B%2BPOfsMvvWM%2BzbcUrG8FS37PFa7Y%2Fb90XQQ7QBFfq1XBMzSyVO4ZGKeuSsjMbDFCj%2BejTRuxD9HyHE9GfJW4jlb4pfu2wyA6%2Ba5kELg%2Fm%2By8m%2FzJME8wlYEa0cGKTlh2FmCGYMlheKn%2ByVB2BdNRhZdNtP7ZXueU6B0g8WzKPbdgRFWOO2rneWrJKsvwSSc%2FWAR9GoUDnMOrXgY%2Fcu0r3Thf4gnLaMdTJsSatIAMJ8rMtaybWXRjCi6h7JbKpuUxKWa%2FdcMJA0mugKgi2cMDGl%2BzjgwChS9CnwLoCguo6NLMCl%2B67cHL33LvFSnOi7Puz6AAc0%2FCV0hnoWHib9GpMtcDrKwas9BUXXGg6S2Ox8gn4o1CVefdj%2Bfy5pC3oCgjCdzujCBjqkAYi2IDGW0tVcZsuqEHMVBIeZYQ7f5kPcsTJQgVxAnpj9c4RoRg2McMTFkU92hZPt2ZmFnKj18Ha8UrUh8KpWMbBAO03eCJF%2BoMh6cl4v95RB1eRgOYweZujHnbPzXYuwu3wbo%2Fkkix7f8S8e%2BVlxHLWmnkGnB4bPHxMcb3nYYwU3bTZfB0AZ0MoUu78TdzpDrK1go9md97GTner%2FvBHRPquvvGeo&X-Amz-Signature=cd4511629e7172b2c1fc19222bc0d10cddfec361014e8840c00cf3990b41880b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
