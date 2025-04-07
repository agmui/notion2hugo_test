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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGRAYPI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHle%2FMlEIEWVwFmDvXNI8EEt4K239t2sV%2FjlG5%2Fy8pfAiAks%2FJzafnXR73ho2jT5HOv8tIvGhXN3vNm9Bkg1huQpyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbFpdI7ff%2FPLPz2g6KtwDMU3YndMhu8P0nJ3dSMprS47G2EHNGJQKB8i%2FPYXUbD8FNqPqkdxJfIwIn46JAG8X42HhhsgQriAK%2Fiu0FRfEjn2t6SXZ14oSReq2e4672KZ54IWKucWfbSm%2Fotgeak0ITWOsXLN87DD1T8cuqNHU4fi91vPnCJeeCbnAgzZILoXWGyHp4%2BIr32MPGNsniCl4WFduq3nqT9tbskjH17zy%2BM7u%2Bji8DQoUP%2Bo9IYhmRE6fcgN0Ud1PgNJzLm5rYGwWIh8B%2FOlFOo58Uq2cyxAYZTI8cIQjvaPih55DHx%2BfIWMnIMdGs0JyXWT856t50ts9fQipvtog6S70v2b%2FaRfgBw77cBjD1gYRIehiZPQZlFI8LwNm6VDTcAxCNHv6kE2X%2FC%2FmUMH%2Bh%2FTJKqtII6%2FmbsEIDEM207XsvZOKVy1fSqIx3He1pqtyc4y0gCyYs7WnnEKnpNoPh5vupD1Nf746iE7Fm2iRPFHXTk5SFwslXlZ32a3ZYI9PWPQPOquvcFti%2F%2BDV6sXFCFDfZGZf1GikB3KZaoUE4Op4Hopg%2Fbph1oxkrqxPjZPfmzYJK2V1foyIfsF8iEjssKyFiZRZrpHgnW9X09g1RBGvA79K9blxBi6SvXfXJrqQYoITcDcwue3PvwY6pgFa8KNXM1nfzrVBUbez8wulVCylXtBfFP0WGyH2%2FBmdklLjtcAeOh3ajnk5KvOLkhirEmiYu4G52lttK9f63HyY09dhsIh9JpanKayInCrtS28kicmQcj%2BDzboSregGfNOf9aLmEmACN6jQl3l4XijJw%2BzwwPlmmbHSFMwlo1IIAeQqiSSXodb%2B341dipYfJ3ii6Bjxit7EhJxxegI%2Fq%2BjDv%2BL19XJY&X-Amz-Signature=483b3a1a4dcb979c95f8d2dd6b6ff3f08bf91ae5f5bc0ccbe6a4655a9a4bd98f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGRAYPI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHle%2FMlEIEWVwFmDvXNI8EEt4K239t2sV%2FjlG5%2Fy8pfAiAks%2FJzafnXR73ho2jT5HOv8tIvGhXN3vNm9Bkg1huQpyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbFpdI7ff%2FPLPz2g6KtwDMU3YndMhu8P0nJ3dSMprS47G2EHNGJQKB8i%2FPYXUbD8FNqPqkdxJfIwIn46JAG8X42HhhsgQriAK%2Fiu0FRfEjn2t6SXZ14oSReq2e4672KZ54IWKucWfbSm%2Fotgeak0ITWOsXLN87DD1T8cuqNHU4fi91vPnCJeeCbnAgzZILoXWGyHp4%2BIr32MPGNsniCl4WFduq3nqT9tbskjH17zy%2BM7u%2Bji8DQoUP%2Bo9IYhmRE6fcgN0Ud1PgNJzLm5rYGwWIh8B%2FOlFOo58Uq2cyxAYZTI8cIQjvaPih55DHx%2BfIWMnIMdGs0JyXWT856t50ts9fQipvtog6S70v2b%2FaRfgBw77cBjD1gYRIehiZPQZlFI8LwNm6VDTcAxCNHv6kE2X%2FC%2FmUMH%2Bh%2FTJKqtII6%2FmbsEIDEM207XsvZOKVy1fSqIx3He1pqtyc4y0gCyYs7WnnEKnpNoPh5vupD1Nf746iE7Fm2iRPFHXTk5SFwslXlZ32a3ZYI9PWPQPOquvcFti%2F%2BDV6sXFCFDfZGZf1GikB3KZaoUE4Op4Hopg%2Fbph1oxkrqxPjZPfmzYJK2V1foyIfsF8iEjssKyFiZRZrpHgnW9X09g1RBGvA79K9blxBi6SvXfXJrqQYoITcDcwue3PvwY6pgFa8KNXM1nfzrVBUbez8wulVCylXtBfFP0WGyH2%2FBmdklLjtcAeOh3ajnk5KvOLkhirEmiYu4G52lttK9f63HyY09dhsIh9JpanKayInCrtS28kicmQcj%2BDzboSregGfNOf9aLmEmACN6jQl3l4XijJw%2BzwwPlmmbHSFMwlo1IIAeQqiSSXodb%2B341dipYfJ3ii6Bjxit7EhJxxegI%2Fq%2BjDv%2BL19XJY&X-Amz-Signature=85eecbeea9ccbe623f5a8026537c9cb705f73f3a18b4e0e4a8eb51354e2f9a00&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGRAYPI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHle%2FMlEIEWVwFmDvXNI8EEt4K239t2sV%2FjlG5%2Fy8pfAiAks%2FJzafnXR73ho2jT5HOv8tIvGhXN3vNm9Bkg1huQpyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbFpdI7ff%2FPLPz2g6KtwDMU3YndMhu8P0nJ3dSMprS47G2EHNGJQKB8i%2FPYXUbD8FNqPqkdxJfIwIn46JAG8X42HhhsgQriAK%2Fiu0FRfEjn2t6SXZ14oSReq2e4672KZ54IWKucWfbSm%2Fotgeak0ITWOsXLN87DD1T8cuqNHU4fi91vPnCJeeCbnAgzZILoXWGyHp4%2BIr32MPGNsniCl4WFduq3nqT9tbskjH17zy%2BM7u%2Bji8DQoUP%2Bo9IYhmRE6fcgN0Ud1PgNJzLm5rYGwWIh8B%2FOlFOo58Uq2cyxAYZTI8cIQjvaPih55DHx%2BfIWMnIMdGs0JyXWT856t50ts9fQipvtog6S70v2b%2FaRfgBw77cBjD1gYRIehiZPQZlFI8LwNm6VDTcAxCNHv6kE2X%2FC%2FmUMH%2Bh%2FTJKqtII6%2FmbsEIDEM207XsvZOKVy1fSqIx3He1pqtyc4y0gCyYs7WnnEKnpNoPh5vupD1Nf746iE7Fm2iRPFHXTk5SFwslXlZ32a3ZYI9PWPQPOquvcFti%2F%2BDV6sXFCFDfZGZf1GikB3KZaoUE4Op4Hopg%2Fbph1oxkrqxPjZPfmzYJK2V1foyIfsF8iEjssKyFiZRZrpHgnW9X09g1RBGvA79K9blxBi6SvXfXJrqQYoITcDcwue3PvwY6pgFa8KNXM1nfzrVBUbez8wulVCylXtBfFP0WGyH2%2FBmdklLjtcAeOh3ajnk5KvOLkhirEmiYu4G52lttK9f63HyY09dhsIh9JpanKayInCrtS28kicmQcj%2BDzboSregGfNOf9aLmEmACN6jQl3l4XijJw%2BzwwPlmmbHSFMwlo1IIAeQqiSSXodb%2B341dipYfJ3ii6Bjxit7EhJxxegI%2Fq%2BjDv%2BL19XJY&X-Amz-Signature=5045b7415da5bfdc66abb24b67df5611de9e0216983c810bff02720dada90de3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGRAYPI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHle%2FMlEIEWVwFmDvXNI8EEt4K239t2sV%2FjlG5%2Fy8pfAiAks%2FJzafnXR73ho2jT5HOv8tIvGhXN3vNm9Bkg1huQpyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbFpdI7ff%2FPLPz2g6KtwDMU3YndMhu8P0nJ3dSMprS47G2EHNGJQKB8i%2FPYXUbD8FNqPqkdxJfIwIn46JAG8X42HhhsgQriAK%2Fiu0FRfEjn2t6SXZ14oSReq2e4672KZ54IWKucWfbSm%2Fotgeak0ITWOsXLN87DD1T8cuqNHU4fi91vPnCJeeCbnAgzZILoXWGyHp4%2BIr32MPGNsniCl4WFduq3nqT9tbskjH17zy%2BM7u%2Bji8DQoUP%2Bo9IYhmRE6fcgN0Ud1PgNJzLm5rYGwWIh8B%2FOlFOo58Uq2cyxAYZTI8cIQjvaPih55DHx%2BfIWMnIMdGs0JyXWT856t50ts9fQipvtog6S70v2b%2FaRfgBw77cBjD1gYRIehiZPQZlFI8LwNm6VDTcAxCNHv6kE2X%2FC%2FmUMH%2Bh%2FTJKqtII6%2FmbsEIDEM207XsvZOKVy1fSqIx3He1pqtyc4y0gCyYs7WnnEKnpNoPh5vupD1Nf746iE7Fm2iRPFHXTk5SFwslXlZ32a3ZYI9PWPQPOquvcFti%2F%2BDV6sXFCFDfZGZf1GikB3KZaoUE4Op4Hopg%2Fbph1oxkrqxPjZPfmzYJK2V1foyIfsF8iEjssKyFiZRZrpHgnW9X09g1RBGvA79K9blxBi6SvXfXJrqQYoITcDcwue3PvwY6pgFa8KNXM1nfzrVBUbez8wulVCylXtBfFP0WGyH2%2FBmdklLjtcAeOh3ajnk5KvOLkhirEmiYu4G52lttK9f63HyY09dhsIh9JpanKayInCrtS28kicmQcj%2BDzboSregGfNOf9aLmEmACN6jQl3l4XijJw%2BzwwPlmmbHSFMwlo1IIAeQqiSSXodb%2B341dipYfJ3ii6Bjxit7EhJxxegI%2Fq%2BjDv%2BL19XJY&X-Amz-Signature=57748cff56e78250a01f6b484d605bf1f4705565109ce72e14f57bb41c2db2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGRAYPI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHle%2FMlEIEWVwFmDvXNI8EEt4K239t2sV%2FjlG5%2Fy8pfAiAks%2FJzafnXR73ho2jT5HOv8tIvGhXN3vNm9Bkg1huQpyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbFpdI7ff%2FPLPz2g6KtwDMU3YndMhu8P0nJ3dSMprS47G2EHNGJQKB8i%2FPYXUbD8FNqPqkdxJfIwIn46JAG8X42HhhsgQriAK%2Fiu0FRfEjn2t6SXZ14oSReq2e4672KZ54IWKucWfbSm%2Fotgeak0ITWOsXLN87DD1T8cuqNHU4fi91vPnCJeeCbnAgzZILoXWGyHp4%2BIr32MPGNsniCl4WFduq3nqT9tbskjH17zy%2BM7u%2Bji8DQoUP%2Bo9IYhmRE6fcgN0Ud1PgNJzLm5rYGwWIh8B%2FOlFOo58Uq2cyxAYZTI8cIQjvaPih55DHx%2BfIWMnIMdGs0JyXWT856t50ts9fQipvtog6S70v2b%2FaRfgBw77cBjD1gYRIehiZPQZlFI8LwNm6VDTcAxCNHv6kE2X%2FC%2FmUMH%2Bh%2FTJKqtII6%2FmbsEIDEM207XsvZOKVy1fSqIx3He1pqtyc4y0gCyYs7WnnEKnpNoPh5vupD1Nf746iE7Fm2iRPFHXTk5SFwslXlZ32a3ZYI9PWPQPOquvcFti%2F%2BDV6sXFCFDfZGZf1GikB3KZaoUE4Op4Hopg%2Fbph1oxkrqxPjZPfmzYJK2V1foyIfsF8iEjssKyFiZRZrpHgnW9X09g1RBGvA79K9blxBi6SvXfXJrqQYoITcDcwue3PvwY6pgFa8KNXM1nfzrVBUbez8wulVCylXtBfFP0WGyH2%2FBmdklLjtcAeOh3ajnk5KvOLkhirEmiYu4G52lttK9f63HyY09dhsIh9JpanKayInCrtS28kicmQcj%2BDzboSregGfNOf9aLmEmACN6jQl3l4XijJw%2BzwwPlmmbHSFMwlo1IIAeQqiSSXodb%2B341dipYfJ3ii6Bjxit7EhJxxegI%2Fq%2BjDv%2BL19XJY&X-Amz-Signature=0b3f01ff934d705bd3acc35ab9d90896d0510a976ff85711300926472f42290f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGRAYPI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHle%2FMlEIEWVwFmDvXNI8EEt4K239t2sV%2FjlG5%2Fy8pfAiAks%2FJzafnXR73ho2jT5HOv8tIvGhXN3vNm9Bkg1huQpyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbFpdI7ff%2FPLPz2g6KtwDMU3YndMhu8P0nJ3dSMprS47G2EHNGJQKB8i%2FPYXUbD8FNqPqkdxJfIwIn46JAG8X42HhhsgQriAK%2Fiu0FRfEjn2t6SXZ14oSReq2e4672KZ54IWKucWfbSm%2Fotgeak0ITWOsXLN87DD1T8cuqNHU4fi91vPnCJeeCbnAgzZILoXWGyHp4%2BIr32MPGNsniCl4WFduq3nqT9tbskjH17zy%2BM7u%2Bji8DQoUP%2Bo9IYhmRE6fcgN0Ud1PgNJzLm5rYGwWIh8B%2FOlFOo58Uq2cyxAYZTI8cIQjvaPih55DHx%2BfIWMnIMdGs0JyXWT856t50ts9fQipvtog6S70v2b%2FaRfgBw77cBjD1gYRIehiZPQZlFI8LwNm6VDTcAxCNHv6kE2X%2FC%2FmUMH%2Bh%2FTJKqtII6%2FmbsEIDEM207XsvZOKVy1fSqIx3He1pqtyc4y0gCyYs7WnnEKnpNoPh5vupD1Nf746iE7Fm2iRPFHXTk5SFwslXlZ32a3ZYI9PWPQPOquvcFti%2F%2BDV6sXFCFDfZGZf1GikB3KZaoUE4Op4Hopg%2Fbph1oxkrqxPjZPfmzYJK2V1foyIfsF8iEjssKyFiZRZrpHgnW9X09g1RBGvA79K9blxBi6SvXfXJrqQYoITcDcwue3PvwY6pgFa8KNXM1nfzrVBUbez8wulVCylXtBfFP0WGyH2%2FBmdklLjtcAeOh3ajnk5KvOLkhirEmiYu4G52lttK9f63HyY09dhsIh9JpanKayInCrtS28kicmQcj%2BDzboSregGfNOf9aLmEmACN6jQl3l4XijJw%2BzwwPlmmbHSFMwlo1IIAeQqiSSXodb%2B341dipYfJ3ii6Bjxit7EhJxxegI%2Fq%2BjDv%2BL19XJY&X-Amz-Signature=d114efc0dec0eb249140d2767af1c1c0e8e9bc52dd1821d73e144df420ce850c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGRAYPI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHle%2FMlEIEWVwFmDvXNI8EEt4K239t2sV%2FjlG5%2Fy8pfAiAks%2FJzafnXR73ho2jT5HOv8tIvGhXN3vNm9Bkg1huQpyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbFpdI7ff%2FPLPz2g6KtwDMU3YndMhu8P0nJ3dSMprS47G2EHNGJQKB8i%2FPYXUbD8FNqPqkdxJfIwIn46JAG8X42HhhsgQriAK%2Fiu0FRfEjn2t6SXZ14oSReq2e4672KZ54IWKucWfbSm%2Fotgeak0ITWOsXLN87DD1T8cuqNHU4fi91vPnCJeeCbnAgzZILoXWGyHp4%2BIr32MPGNsniCl4WFduq3nqT9tbskjH17zy%2BM7u%2Bji8DQoUP%2Bo9IYhmRE6fcgN0Ud1PgNJzLm5rYGwWIh8B%2FOlFOo58Uq2cyxAYZTI8cIQjvaPih55DHx%2BfIWMnIMdGs0JyXWT856t50ts9fQipvtog6S70v2b%2FaRfgBw77cBjD1gYRIehiZPQZlFI8LwNm6VDTcAxCNHv6kE2X%2FC%2FmUMH%2Bh%2FTJKqtII6%2FmbsEIDEM207XsvZOKVy1fSqIx3He1pqtyc4y0gCyYs7WnnEKnpNoPh5vupD1Nf746iE7Fm2iRPFHXTk5SFwslXlZ32a3ZYI9PWPQPOquvcFti%2F%2BDV6sXFCFDfZGZf1GikB3KZaoUE4Op4Hopg%2Fbph1oxkrqxPjZPfmzYJK2V1foyIfsF8iEjssKyFiZRZrpHgnW9X09g1RBGvA79K9blxBi6SvXfXJrqQYoITcDcwue3PvwY6pgFa8KNXM1nfzrVBUbez8wulVCylXtBfFP0WGyH2%2FBmdklLjtcAeOh3ajnk5KvOLkhirEmiYu4G52lttK9f63HyY09dhsIh9JpanKayInCrtS28kicmQcj%2BDzboSregGfNOf9aLmEmACN6jQl3l4XijJw%2BzwwPlmmbHSFMwlo1IIAeQqiSSXodb%2B341dipYfJ3ii6Bjxit7EhJxxegI%2Fq%2BjDv%2BL19XJY&X-Amz-Signature=1c355d2996f234d6338a5429bd19261adcccab99217ccc162310b94605a0d91c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGRAYPI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHle%2FMlEIEWVwFmDvXNI8EEt4K239t2sV%2FjlG5%2Fy8pfAiAks%2FJzafnXR73ho2jT5HOv8tIvGhXN3vNm9Bkg1huQpyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMbFpdI7ff%2FPLPz2g6KtwDMU3YndMhu8P0nJ3dSMprS47G2EHNGJQKB8i%2FPYXUbD8FNqPqkdxJfIwIn46JAG8X42HhhsgQriAK%2Fiu0FRfEjn2t6SXZ14oSReq2e4672KZ54IWKucWfbSm%2Fotgeak0ITWOsXLN87DD1T8cuqNHU4fi91vPnCJeeCbnAgzZILoXWGyHp4%2BIr32MPGNsniCl4WFduq3nqT9tbskjH17zy%2BM7u%2Bji8DQoUP%2Bo9IYhmRE6fcgN0Ud1PgNJzLm5rYGwWIh8B%2FOlFOo58Uq2cyxAYZTI8cIQjvaPih55DHx%2BfIWMnIMdGs0JyXWT856t50ts9fQipvtog6S70v2b%2FaRfgBw77cBjD1gYRIehiZPQZlFI8LwNm6VDTcAxCNHv6kE2X%2FC%2FmUMH%2Bh%2FTJKqtII6%2FmbsEIDEM207XsvZOKVy1fSqIx3He1pqtyc4y0gCyYs7WnnEKnpNoPh5vupD1Nf746iE7Fm2iRPFHXTk5SFwslXlZ32a3ZYI9PWPQPOquvcFti%2F%2BDV6sXFCFDfZGZf1GikB3KZaoUE4Op4Hopg%2Fbph1oxkrqxPjZPfmzYJK2V1foyIfsF8iEjssKyFiZRZrpHgnW9X09g1RBGvA79K9blxBi6SvXfXJrqQYoITcDcwue3PvwY6pgFa8KNXM1nfzrVBUbez8wulVCylXtBfFP0WGyH2%2FBmdklLjtcAeOh3ajnk5KvOLkhirEmiYu4G52lttK9f63HyY09dhsIh9JpanKayInCrtS28kicmQcj%2BDzboSregGfNOf9aLmEmACN6jQl3l4XijJw%2BzwwPlmmbHSFMwlo1IIAeQqiSSXodb%2B341dipYfJ3ii6Bjxit7EhJxxegI%2Fq%2BjDv%2BL19XJY&X-Amz-Signature=463087d6cefc9d7a2978f608d2373412962eabfd1690e0f604101d76da5b046f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
