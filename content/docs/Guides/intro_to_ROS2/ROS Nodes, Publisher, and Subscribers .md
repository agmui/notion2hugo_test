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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBSADJ6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2xYuIHywxnX%2Frx%2BRYna%2Fyb5olO8JeHK2eeUmruHVNeAiEA58oIGrg%2FOWNSRDq4lZztmM%2FQrTjuNVhkVKSupoJa%2BosqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0eZ6qlreYKBqhVkyrcA31Uduj0gWz7vtbc9YsoIvTZS7fnNvHTKQilgBA121cW1aWhNdRgzj7KLOH3vg%2F5%2B67GQM%2FiS1jCHjNdd4BvLriCq5nnHWnssSG3%2Fz%2BhTFFj%2FGN7Mw8w8A02ZFzVlkTbs7DknEytxmtWNwr7Iemhy5RmEIthpDgCrK2wJP1ww%2By6Sz%2FKgjPjYW5Hi8X%2Bzskk9c23VLvHBKe%2BPFelItFzhiVLSNBcxfTbCQwqsseKVj%2Bt2zCRGXoz8osQKfLRIjiAN837Iwzh31R%2FxiEa79tCtBXeqXWiCzzQQsiSkFD8QTbOd%2FrLDGL1jHw0y9qJRjp%2FJik33gI8QDwiOp3RFzs5%2F8E43ZaBsS5XO4I1%2B%2FjVnY8h2NSzYqvhtYNV5cWQNomCs%2FV9K8u%2B3xnkRiGXtJsu6PrrsAoH0r9SCq4oePk3Xwy2QJEyejJyF4rIbxWZk1u02BoCj28djOzV%2FlsoBT0gkMTQd9OOJ0nkviUkKEaWCqEISBkUZj1%2BsI7aWZHo6XQ0DKLtcU8JeGOv1HSa9h2y%2BQV%2FJmyKw10TS9oxCxLsdyUnx1wCIdOm5DSUdpeRylHeaYwGfnAuA29RRaiCPJBIpMSdxg86b3SHAj1jLN6SeJhoyiqGNr8v7ZlEhs47MMSlk74GOqUBaQXJF9KmwTqkgFvVh6evzckXSWCkf8n7sQLqXh8XxpbHu3owfj9d9%2Fq%2FNdFlGF%2BOUOgsmJTznu975whiNu5%2BIRwiSeOANX4UiPMVZhRQ6JMiP3zPohyq1brv8LdKJJgZOMzmDGs0VCCcbwdNVGoXEXR1zF5EdywYTohEnZT1gSdBmXFem2Z2ylI4SIBjEHF7p%2BnLb3%2BZDmH3O345vM2NquBQbi56&X-Amz-Signature=84acdf5446bcb4d1469ba1354631dd00e3f1c689b955eed53b49a5b6d3fc94d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBSADJ6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2xYuIHywxnX%2Frx%2BRYna%2Fyb5olO8JeHK2eeUmruHVNeAiEA58oIGrg%2FOWNSRDq4lZztmM%2FQrTjuNVhkVKSupoJa%2BosqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0eZ6qlreYKBqhVkyrcA31Uduj0gWz7vtbc9YsoIvTZS7fnNvHTKQilgBA121cW1aWhNdRgzj7KLOH3vg%2F5%2B67GQM%2FiS1jCHjNdd4BvLriCq5nnHWnssSG3%2Fz%2BhTFFj%2FGN7Mw8w8A02ZFzVlkTbs7DknEytxmtWNwr7Iemhy5RmEIthpDgCrK2wJP1ww%2By6Sz%2FKgjPjYW5Hi8X%2Bzskk9c23VLvHBKe%2BPFelItFzhiVLSNBcxfTbCQwqsseKVj%2Bt2zCRGXoz8osQKfLRIjiAN837Iwzh31R%2FxiEa79tCtBXeqXWiCzzQQsiSkFD8QTbOd%2FrLDGL1jHw0y9qJRjp%2FJik33gI8QDwiOp3RFzs5%2F8E43ZaBsS5XO4I1%2B%2FjVnY8h2NSzYqvhtYNV5cWQNomCs%2FV9K8u%2B3xnkRiGXtJsu6PrrsAoH0r9SCq4oePk3Xwy2QJEyejJyF4rIbxWZk1u02BoCj28djOzV%2FlsoBT0gkMTQd9OOJ0nkviUkKEaWCqEISBkUZj1%2BsI7aWZHo6XQ0DKLtcU8JeGOv1HSa9h2y%2BQV%2FJmyKw10TS9oxCxLsdyUnx1wCIdOm5DSUdpeRylHeaYwGfnAuA29RRaiCPJBIpMSdxg86b3SHAj1jLN6SeJhoyiqGNr8v7ZlEhs47MMSlk74GOqUBaQXJF9KmwTqkgFvVh6evzckXSWCkf8n7sQLqXh8XxpbHu3owfj9d9%2Fq%2FNdFlGF%2BOUOgsmJTznu975whiNu5%2BIRwiSeOANX4UiPMVZhRQ6JMiP3zPohyq1brv8LdKJJgZOMzmDGs0VCCcbwdNVGoXEXR1zF5EdywYTohEnZT1gSdBmXFem2Z2ylI4SIBjEHF7p%2BnLb3%2BZDmH3O345vM2NquBQbi56&X-Amz-Signature=6748c985f6f040e227c076517cd9043540e1b346d4f14d8dc99b6615943c2467&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBSADJ6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2xYuIHywxnX%2Frx%2BRYna%2Fyb5olO8JeHK2eeUmruHVNeAiEA58oIGrg%2FOWNSRDq4lZztmM%2FQrTjuNVhkVKSupoJa%2BosqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0eZ6qlreYKBqhVkyrcA31Uduj0gWz7vtbc9YsoIvTZS7fnNvHTKQilgBA121cW1aWhNdRgzj7KLOH3vg%2F5%2B67GQM%2FiS1jCHjNdd4BvLriCq5nnHWnssSG3%2Fz%2BhTFFj%2FGN7Mw8w8A02ZFzVlkTbs7DknEytxmtWNwr7Iemhy5RmEIthpDgCrK2wJP1ww%2By6Sz%2FKgjPjYW5Hi8X%2Bzskk9c23VLvHBKe%2BPFelItFzhiVLSNBcxfTbCQwqsseKVj%2Bt2zCRGXoz8osQKfLRIjiAN837Iwzh31R%2FxiEa79tCtBXeqXWiCzzQQsiSkFD8QTbOd%2FrLDGL1jHw0y9qJRjp%2FJik33gI8QDwiOp3RFzs5%2F8E43ZaBsS5XO4I1%2B%2FjVnY8h2NSzYqvhtYNV5cWQNomCs%2FV9K8u%2B3xnkRiGXtJsu6PrrsAoH0r9SCq4oePk3Xwy2QJEyejJyF4rIbxWZk1u02BoCj28djOzV%2FlsoBT0gkMTQd9OOJ0nkviUkKEaWCqEISBkUZj1%2BsI7aWZHo6XQ0DKLtcU8JeGOv1HSa9h2y%2BQV%2FJmyKw10TS9oxCxLsdyUnx1wCIdOm5DSUdpeRylHeaYwGfnAuA29RRaiCPJBIpMSdxg86b3SHAj1jLN6SeJhoyiqGNr8v7ZlEhs47MMSlk74GOqUBaQXJF9KmwTqkgFvVh6evzckXSWCkf8n7sQLqXh8XxpbHu3owfj9d9%2Fq%2FNdFlGF%2BOUOgsmJTznu975whiNu5%2BIRwiSeOANX4UiPMVZhRQ6JMiP3zPohyq1brv8LdKJJgZOMzmDGs0VCCcbwdNVGoXEXR1zF5EdywYTohEnZT1gSdBmXFem2Z2ylI4SIBjEHF7p%2BnLb3%2BZDmH3O345vM2NquBQbi56&X-Amz-Signature=1c33767bd7efe33993530679da4f06b61f00836c25fe5d19254c00f6d8270099&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBSADJ6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2xYuIHywxnX%2Frx%2BRYna%2Fyb5olO8JeHK2eeUmruHVNeAiEA58oIGrg%2FOWNSRDq4lZztmM%2FQrTjuNVhkVKSupoJa%2BosqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0eZ6qlreYKBqhVkyrcA31Uduj0gWz7vtbc9YsoIvTZS7fnNvHTKQilgBA121cW1aWhNdRgzj7KLOH3vg%2F5%2B67GQM%2FiS1jCHjNdd4BvLriCq5nnHWnssSG3%2Fz%2BhTFFj%2FGN7Mw8w8A02ZFzVlkTbs7DknEytxmtWNwr7Iemhy5RmEIthpDgCrK2wJP1ww%2By6Sz%2FKgjPjYW5Hi8X%2Bzskk9c23VLvHBKe%2BPFelItFzhiVLSNBcxfTbCQwqsseKVj%2Bt2zCRGXoz8osQKfLRIjiAN837Iwzh31R%2FxiEa79tCtBXeqXWiCzzQQsiSkFD8QTbOd%2FrLDGL1jHw0y9qJRjp%2FJik33gI8QDwiOp3RFzs5%2F8E43ZaBsS5XO4I1%2B%2FjVnY8h2NSzYqvhtYNV5cWQNomCs%2FV9K8u%2B3xnkRiGXtJsu6PrrsAoH0r9SCq4oePk3Xwy2QJEyejJyF4rIbxWZk1u02BoCj28djOzV%2FlsoBT0gkMTQd9OOJ0nkviUkKEaWCqEISBkUZj1%2BsI7aWZHo6XQ0DKLtcU8JeGOv1HSa9h2y%2BQV%2FJmyKw10TS9oxCxLsdyUnx1wCIdOm5DSUdpeRylHeaYwGfnAuA29RRaiCPJBIpMSdxg86b3SHAj1jLN6SeJhoyiqGNr8v7ZlEhs47MMSlk74GOqUBaQXJF9KmwTqkgFvVh6evzckXSWCkf8n7sQLqXh8XxpbHu3owfj9d9%2Fq%2FNdFlGF%2BOUOgsmJTznu975whiNu5%2BIRwiSeOANX4UiPMVZhRQ6JMiP3zPohyq1brv8LdKJJgZOMzmDGs0VCCcbwdNVGoXEXR1zF5EdywYTohEnZT1gSdBmXFem2Z2ylI4SIBjEHF7p%2BnLb3%2BZDmH3O345vM2NquBQbi56&X-Amz-Signature=7e64ddb92c921ef9cd99d244817e89d8cc17f55865da857f7add670d920a2d69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBSADJ6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2xYuIHywxnX%2Frx%2BRYna%2Fyb5olO8JeHK2eeUmruHVNeAiEA58oIGrg%2FOWNSRDq4lZztmM%2FQrTjuNVhkVKSupoJa%2BosqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0eZ6qlreYKBqhVkyrcA31Uduj0gWz7vtbc9YsoIvTZS7fnNvHTKQilgBA121cW1aWhNdRgzj7KLOH3vg%2F5%2B67GQM%2FiS1jCHjNdd4BvLriCq5nnHWnssSG3%2Fz%2BhTFFj%2FGN7Mw8w8A02ZFzVlkTbs7DknEytxmtWNwr7Iemhy5RmEIthpDgCrK2wJP1ww%2By6Sz%2FKgjPjYW5Hi8X%2Bzskk9c23VLvHBKe%2BPFelItFzhiVLSNBcxfTbCQwqsseKVj%2Bt2zCRGXoz8osQKfLRIjiAN837Iwzh31R%2FxiEa79tCtBXeqXWiCzzQQsiSkFD8QTbOd%2FrLDGL1jHw0y9qJRjp%2FJik33gI8QDwiOp3RFzs5%2F8E43ZaBsS5XO4I1%2B%2FjVnY8h2NSzYqvhtYNV5cWQNomCs%2FV9K8u%2B3xnkRiGXtJsu6PrrsAoH0r9SCq4oePk3Xwy2QJEyejJyF4rIbxWZk1u02BoCj28djOzV%2FlsoBT0gkMTQd9OOJ0nkviUkKEaWCqEISBkUZj1%2BsI7aWZHo6XQ0DKLtcU8JeGOv1HSa9h2y%2BQV%2FJmyKw10TS9oxCxLsdyUnx1wCIdOm5DSUdpeRylHeaYwGfnAuA29RRaiCPJBIpMSdxg86b3SHAj1jLN6SeJhoyiqGNr8v7ZlEhs47MMSlk74GOqUBaQXJF9KmwTqkgFvVh6evzckXSWCkf8n7sQLqXh8XxpbHu3owfj9d9%2Fq%2FNdFlGF%2BOUOgsmJTznu975whiNu5%2BIRwiSeOANX4UiPMVZhRQ6JMiP3zPohyq1brv8LdKJJgZOMzmDGs0VCCcbwdNVGoXEXR1zF5EdywYTohEnZT1gSdBmXFem2Z2ylI4SIBjEHF7p%2BnLb3%2BZDmH3O345vM2NquBQbi56&X-Amz-Signature=ef3a6f12ff3cf71dc6ad1d62bc32886dd1e7771cf953c7027bd5d8a16082e032&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBSADJ6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2xYuIHywxnX%2Frx%2BRYna%2Fyb5olO8JeHK2eeUmruHVNeAiEA58oIGrg%2FOWNSRDq4lZztmM%2FQrTjuNVhkVKSupoJa%2BosqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0eZ6qlreYKBqhVkyrcA31Uduj0gWz7vtbc9YsoIvTZS7fnNvHTKQilgBA121cW1aWhNdRgzj7KLOH3vg%2F5%2B67GQM%2FiS1jCHjNdd4BvLriCq5nnHWnssSG3%2Fz%2BhTFFj%2FGN7Mw8w8A02ZFzVlkTbs7DknEytxmtWNwr7Iemhy5RmEIthpDgCrK2wJP1ww%2By6Sz%2FKgjPjYW5Hi8X%2Bzskk9c23VLvHBKe%2BPFelItFzhiVLSNBcxfTbCQwqsseKVj%2Bt2zCRGXoz8osQKfLRIjiAN837Iwzh31R%2FxiEa79tCtBXeqXWiCzzQQsiSkFD8QTbOd%2FrLDGL1jHw0y9qJRjp%2FJik33gI8QDwiOp3RFzs5%2F8E43ZaBsS5XO4I1%2B%2FjVnY8h2NSzYqvhtYNV5cWQNomCs%2FV9K8u%2B3xnkRiGXtJsu6PrrsAoH0r9SCq4oePk3Xwy2QJEyejJyF4rIbxWZk1u02BoCj28djOzV%2FlsoBT0gkMTQd9OOJ0nkviUkKEaWCqEISBkUZj1%2BsI7aWZHo6XQ0DKLtcU8JeGOv1HSa9h2y%2BQV%2FJmyKw10TS9oxCxLsdyUnx1wCIdOm5DSUdpeRylHeaYwGfnAuA29RRaiCPJBIpMSdxg86b3SHAj1jLN6SeJhoyiqGNr8v7ZlEhs47MMSlk74GOqUBaQXJF9KmwTqkgFvVh6evzckXSWCkf8n7sQLqXh8XxpbHu3owfj9d9%2Fq%2FNdFlGF%2BOUOgsmJTznu975whiNu5%2BIRwiSeOANX4UiPMVZhRQ6JMiP3zPohyq1brv8LdKJJgZOMzmDGs0VCCcbwdNVGoXEXR1zF5EdywYTohEnZT1gSdBmXFem2Z2ylI4SIBjEHF7p%2BnLb3%2BZDmH3O345vM2NquBQbi56&X-Amz-Signature=04cde0bde8699d3ef0037d9a96dfdf661ee6de5dce8b64cfec6a2cb211f6a593&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBSADJ6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2xYuIHywxnX%2Frx%2BRYna%2Fyb5olO8JeHK2eeUmruHVNeAiEA58oIGrg%2FOWNSRDq4lZztmM%2FQrTjuNVhkVKSupoJa%2BosqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0eZ6qlreYKBqhVkyrcA31Uduj0gWz7vtbc9YsoIvTZS7fnNvHTKQilgBA121cW1aWhNdRgzj7KLOH3vg%2F5%2B67GQM%2FiS1jCHjNdd4BvLriCq5nnHWnssSG3%2Fz%2BhTFFj%2FGN7Mw8w8A02ZFzVlkTbs7DknEytxmtWNwr7Iemhy5RmEIthpDgCrK2wJP1ww%2By6Sz%2FKgjPjYW5Hi8X%2Bzskk9c23VLvHBKe%2BPFelItFzhiVLSNBcxfTbCQwqsseKVj%2Bt2zCRGXoz8osQKfLRIjiAN837Iwzh31R%2FxiEa79tCtBXeqXWiCzzQQsiSkFD8QTbOd%2FrLDGL1jHw0y9qJRjp%2FJik33gI8QDwiOp3RFzs5%2F8E43ZaBsS5XO4I1%2B%2FjVnY8h2NSzYqvhtYNV5cWQNomCs%2FV9K8u%2B3xnkRiGXtJsu6PrrsAoH0r9SCq4oePk3Xwy2QJEyejJyF4rIbxWZk1u02BoCj28djOzV%2FlsoBT0gkMTQd9OOJ0nkviUkKEaWCqEISBkUZj1%2BsI7aWZHo6XQ0DKLtcU8JeGOv1HSa9h2y%2BQV%2FJmyKw10TS9oxCxLsdyUnx1wCIdOm5DSUdpeRylHeaYwGfnAuA29RRaiCPJBIpMSdxg86b3SHAj1jLN6SeJhoyiqGNr8v7ZlEhs47MMSlk74GOqUBaQXJF9KmwTqkgFvVh6evzckXSWCkf8n7sQLqXh8XxpbHu3owfj9d9%2Fq%2FNdFlGF%2BOUOgsmJTznu975whiNu5%2BIRwiSeOANX4UiPMVZhRQ6JMiP3zPohyq1brv8LdKJJgZOMzmDGs0VCCcbwdNVGoXEXR1zF5EdywYTohEnZT1gSdBmXFem2Z2ylI4SIBjEHF7p%2BnLb3%2BZDmH3O345vM2NquBQbi56&X-Amz-Signature=bb5e50172fa8d3dae66a0a26b4c3920ae4a75da4a5dcd5fd80051f886143166e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBSADJ6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2xYuIHywxnX%2Frx%2BRYna%2Fyb5olO8JeHK2eeUmruHVNeAiEA58oIGrg%2FOWNSRDq4lZztmM%2FQrTjuNVhkVKSupoJa%2BosqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0eZ6qlreYKBqhVkyrcA31Uduj0gWz7vtbc9YsoIvTZS7fnNvHTKQilgBA121cW1aWhNdRgzj7KLOH3vg%2F5%2B67GQM%2FiS1jCHjNdd4BvLriCq5nnHWnssSG3%2Fz%2BhTFFj%2FGN7Mw8w8A02ZFzVlkTbs7DknEytxmtWNwr7Iemhy5RmEIthpDgCrK2wJP1ww%2By6Sz%2FKgjPjYW5Hi8X%2Bzskk9c23VLvHBKe%2BPFelItFzhiVLSNBcxfTbCQwqsseKVj%2Bt2zCRGXoz8osQKfLRIjiAN837Iwzh31R%2FxiEa79tCtBXeqXWiCzzQQsiSkFD8QTbOd%2FrLDGL1jHw0y9qJRjp%2FJik33gI8QDwiOp3RFzs5%2F8E43ZaBsS5XO4I1%2B%2FjVnY8h2NSzYqvhtYNV5cWQNomCs%2FV9K8u%2B3xnkRiGXtJsu6PrrsAoH0r9SCq4oePk3Xwy2QJEyejJyF4rIbxWZk1u02BoCj28djOzV%2FlsoBT0gkMTQd9OOJ0nkviUkKEaWCqEISBkUZj1%2BsI7aWZHo6XQ0DKLtcU8JeGOv1HSa9h2y%2BQV%2FJmyKw10TS9oxCxLsdyUnx1wCIdOm5DSUdpeRylHeaYwGfnAuA29RRaiCPJBIpMSdxg86b3SHAj1jLN6SeJhoyiqGNr8v7ZlEhs47MMSlk74GOqUBaQXJF9KmwTqkgFvVh6evzckXSWCkf8n7sQLqXh8XxpbHu3owfj9d9%2Fq%2FNdFlGF%2BOUOgsmJTznu975whiNu5%2BIRwiSeOANX4UiPMVZhRQ6JMiP3zPohyq1brv8LdKJJgZOMzmDGs0VCCcbwdNVGoXEXR1zF5EdywYTohEnZT1gSdBmXFem2Z2ylI4SIBjEHF7p%2BnLb3%2BZDmH3O345vM2NquBQbi56&X-Amz-Signature=259633323f5095ab9d7bafe73b97ed325a177341dfcbfb206f06019bf1097e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
