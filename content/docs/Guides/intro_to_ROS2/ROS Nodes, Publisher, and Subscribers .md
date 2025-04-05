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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IHP2HL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh0t5%2BUgIy0N%2FSQzHn3eMzk8wnFG20nm4BJRaATrbaMAiBfiF%2Fx23kvLSAqlNPyqi7xV3XkCmWPKfqWStjfTwlHnyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM3ezFU0HThSxTM5tIKtwDEQgYtl9RVE2ydJT%2FlhuUNZb2NA%2B46hsKiiPsQwZlXzBc%2BysYPH5gua%2FVVpjKlnyx4Ge07sczSQzQa6pEPDEjU6zIGTECF4eZdSHaSuDdVWLUjxVdQuiF2amEu4jToZ2zjZEvx4%2BvUDRWJTjNGztbjtWlTzwaoH114568R26zoOfjTP6a18gChIQ%2BSIturdV2k4GrkYnMD2H9n2f8Y6Mo%2BE7Pr7wZsp%2F4k6ww1Tnl0hpXcWfAcuXb8tRCgZXJ9SRDaPXl2oku2g5nby24YZ%2FEczKXaBzTgOiOT1DpHkVa5ij4%2BAqQQYX8EvCsVnwPH1nghuIigys%2FYwAaD3gZK9DDpAhWVAQcyTgAmugumnS3RSoPAxnCi8y98zueqCywIKAYApIAoN9WNUkGEKQO5iLDpuk2Lk9I%2FKfo54mALRefDz1QP1rkbJVD0IGsmFXkWvC%2FVVMtSyygpMBsQ5YHVUUpmsF82pkNqC6KsxmcI9wJDWrpi%2FFR%2BK%2FbRaegvlijnqI%2BuejgOTmSpQbr0r3DNSFkJ63gESAqDfcIjcFt5TahVlNf6IWADXVc9LgmEJPvuB8ljoUZkFF%2BCK5rjW1rWNFqVc9u9mJDZMBTbvf0YA3bPFbLxL7A%2Fxo%2FBcbTCxYw9KLDvwY6pgFSsr23XRgkyipUhf%2FxjWQSnqB5J27TJ%2BqBUpJVvIR8O80guhzt1qXQNaM9f2MGMc3H7JZrwT1Hqp31L7ysAmjhsTgC2mChj6bBhXI%2B%2FLZx%2FsOPum7fumXbXBs1hGrz2Z%2FX3ckYRvCRbek4V9S%2BQfAuxIJElkv0pizAJQ7%2BTF3plyo%2FuPMSIvET5yOc8DE3l3SkcxklStltoZBsQajLzIiST3yIiyJY&X-Amz-Signature=b0a9042afd390a371974e6f67600a7ebf3d529eeb84326e4974fe2d54c95a72e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IHP2HL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh0t5%2BUgIy0N%2FSQzHn3eMzk8wnFG20nm4BJRaATrbaMAiBfiF%2Fx23kvLSAqlNPyqi7xV3XkCmWPKfqWStjfTwlHnyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM3ezFU0HThSxTM5tIKtwDEQgYtl9RVE2ydJT%2FlhuUNZb2NA%2B46hsKiiPsQwZlXzBc%2BysYPH5gua%2FVVpjKlnyx4Ge07sczSQzQa6pEPDEjU6zIGTECF4eZdSHaSuDdVWLUjxVdQuiF2amEu4jToZ2zjZEvx4%2BvUDRWJTjNGztbjtWlTzwaoH114568R26zoOfjTP6a18gChIQ%2BSIturdV2k4GrkYnMD2H9n2f8Y6Mo%2BE7Pr7wZsp%2F4k6ww1Tnl0hpXcWfAcuXb8tRCgZXJ9SRDaPXl2oku2g5nby24YZ%2FEczKXaBzTgOiOT1DpHkVa5ij4%2BAqQQYX8EvCsVnwPH1nghuIigys%2FYwAaD3gZK9DDpAhWVAQcyTgAmugumnS3RSoPAxnCi8y98zueqCywIKAYApIAoN9WNUkGEKQO5iLDpuk2Lk9I%2FKfo54mALRefDz1QP1rkbJVD0IGsmFXkWvC%2FVVMtSyygpMBsQ5YHVUUpmsF82pkNqC6KsxmcI9wJDWrpi%2FFR%2BK%2FbRaegvlijnqI%2BuejgOTmSpQbr0r3DNSFkJ63gESAqDfcIjcFt5TahVlNf6IWADXVc9LgmEJPvuB8ljoUZkFF%2BCK5rjW1rWNFqVc9u9mJDZMBTbvf0YA3bPFbLxL7A%2Fxo%2FBcbTCxYw9KLDvwY6pgFSsr23XRgkyipUhf%2FxjWQSnqB5J27TJ%2BqBUpJVvIR8O80guhzt1qXQNaM9f2MGMc3H7JZrwT1Hqp31L7ysAmjhsTgC2mChj6bBhXI%2B%2FLZx%2FsOPum7fumXbXBs1hGrz2Z%2FX3ckYRvCRbek4V9S%2BQfAuxIJElkv0pizAJQ7%2BTF3plyo%2FuPMSIvET5yOc8DE3l3SkcxklStltoZBsQajLzIiST3yIiyJY&X-Amz-Signature=6b8a713b8cc2258f8bbc4eee43bc82507b74ae3467d6336e3dc8fad4d650ddfd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IHP2HL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh0t5%2BUgIy0N%2FSQzHn3eMzk8wnFG20nm4BJRaATrbaMAiBfiF%2Fx23kvLSAqlNPyqi7xV3XkCmWPKfqWStjfTwlHnyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM3ezFU0HThSxTM5tIKtwDEQgYtl9RVE2ydJT%2FlhuUNZb2NA%2B46hsKiiPsQwZlXzBc%2BysYPH5gua%2FVVpjKlnyx4Ge07sczSQzQa6pEPDEjU6zIGTECF4eZdSHaSuDdVWLUjxVdQuiF2amEu4jToZ2zjZEvx4%2BvUDRWJTjNGztbjtWlTzwaoH114568R26zoOfjTP6a18gChIQ%2BSIturdV2k4GrkYnMD2H9n2f8Y6Mo%2BE7Pr7wZsp%2F4k6ww1Tnl0hpXcWfAcuXb8tRCgZXJ9SRDaPXl2oku2g5nby24YZ%2FEczKXaBzTgOiOT1DpHkVa5ij4%2BAqQQYX8EvCsVnwPH1nghuIigys%2FYwAaD3gZK9DDpAhWVAQcyTgAmugumnS3RSoPAxnCi8y98zueqCywIKAYApIAoN9WNUkGEKQO5iLDpuk2Lk9I%2FKfo54mALRefDz1QP1rkbJVD0IGsmFXkWvC%2FVVMtSyygpMBsQ5YHVUUpmsF82pkNqC6KsxmcI9wJDWrpi%2FFR%2BK%2FbRaegvlijnqI%2BuejgOTmSpQbr0r3DNSFkJ63gESAqDfcIjcFt5TahVlNf6IWADXVc9LgmEJPvuB8ljoUZkFF%2BCK5rjW1rWNFqVc9u9mJDZMBTbvf0YA3bPFbLxL7A%2Fxo%2FBcbTCxYw9KLDvwY6pgFSsr23XRgkyipUhf%2FxjWQSnqB5J27TJ%2BqBUpJVvIR8O80guhzt1qXQNaM9f2MGMc3H7JZrwT1Hqp31L7ysAmjhsTgC2mChj6bBhXI%2B%2FLZx%2FsOPum7fumXbXBs1hGrz2Z%2FX3ckYRvCRbek4V9S%2BQfAuxIJElkv0pizAJQ7%2BTF3plyo%2FuPMSIvET5yOc8DE3l3SkcxklStltoZBsQajLzIiST3yIiyJY&X-Amz-Signature=a217423f35370ddad25dec5040b17690476b74314ed9ba7715936f011c1e43ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IHP2HL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh0t5%2BUgIy0N%2FSQzHn3eMzk8wnFG20nm4BJRaATrbaMAiBfiF%2Fx23kvLSAqlNPyqi7xV3XkCmWPKfqWStjfTwlHnyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM3ezFU0HThSxTM5tIKtwDEQgYtl9RVE2ydJT%2FlhuUNZb2NA%2B46hsKiiPsQwZlXzBc%2BysYPH5gua%2FVVpjKlnyx4Ge07sczSQzQa6pEPDEjU6zIGTECF4eZdSHaSuDdVWLUjxVdQuiF2amEu4jToZ2zjZEvx4%2BvUDRWJTjNGztbjtWlTzwaoH114568R26zoOfjTP6a18gChIQ%2BSIturdV2k4GrkYnMD2H9n2f8Y6Mo%2BE7Pr7wZsp%2F4k6ww1Tnl0hpXcWfAcuXb8tRCgZXJ9SRDaPXl2oku2g5nby24YZ%2FEczKXaBzTgOiOT1DpHkVa5ij4%2BAqQQYX8EvCsVnwPH1nghuIigys%2FYwAaD3gZK9DDpAhWVAQcyTgAmugumnS3RSoPAxnCi8y98zueqCywIKAYApIAoN9WNUkGEKQO5iLDpuk2Lk9I%2FKfo54mALRefDz1QP1rkbJVD0IGsmFXkWvC%2FVVMtSyygpMBsQ5YHVUUpmsF82pkNqC6KsxmcI9wJDWrpi%2FFR%2BK%2FbRaegvlijnqI%2BuejgOTmSpQbr0r3DNSFkJ63gESAqDfcIjcFt5TahVlNf6IWADXVc9LgmEJPvuB8ljoUZkFF%2BCK5rjW1rWNFqVc9u9mJDZMBTbvf0YA3bPFbLxL7A%2Fxo%2FBcbTCxYw9KLDvwY6pgFSsr23XRgkyipUhf%2FxjWQSnqB5J27TJ%2BqBUpJVvIR8O80guhzt1qXQNaM9f2MGMc3H7JZrwT1Hqp31L7ysAmjhsTgC2mChj6bBhXI%2B%2FLZx%2FsOPum7fumXbXBs1hGrz2Z%2FX3ckYRvCRbek4V9S%2BQfAuxIJElkv0pizAJQ7%2BTF3plyo%2FuPMSIvET5yOc8DE3l3SkcxklStltoZBsQajLzIiST3yIiyJY&X-Amz-Signature=aedebea02e3c7423dfb6239ce95e58fc5caf42080c674ae5711521c117b0cf13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IHP2HL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh0t5%2BUgIy0N%2FSQzHn3eMzk8wnFG20nm4BJRaATrbaMAiBfiF%2Fx23kvLSAqlNPyqi7xV3XkCmWPKfqWStjfTwlHnyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM3ezFU0HThSxTM5tIKtwDEQgYtl9RVE2ydJT%2FlhuUNZb2NA%2B46hsKiiPsQwZlXzBc%2BysYPH5gua%2FVVpjKlnyx4Ge07sczSQzQa6pEPDEjU6zIGTECF4eZdSHaSuDdVWLUjxVdQuiF2amEu4jToZ2zjZEvx4%2BvUDRWJTjNGztbjtWlTzwaoH114568R26zoOfjTP6a18gChIQ%2BSIturdV2k4GrkYnMD2H9n2f8Y6Mo%2BE7Pr7wZsp%2F4k6ww1Tnl0hpXcWfAcuXb8tRCgZXJ9SRDaPXl2oku2g5nby24YZ%2FEczKXaBzTgOiOT1DpHkVa5ij4%2BAqQQYX8EvCsVnwPH1nghuIigys%2FYwAaD3gZK9DDpAhWVAQcyTgAmugumnS3RSoPAxnCi8y98zueqCywIKAYApIAoN9WNUkGEKQO5iLDpuk2Lk9I%2FKfo54mALRefDz1QP1rkbJVD0IGsmFXkWvC%2FVVMtSyygpMBsQ5YHVUUpmsF82pkNqC6KsxmcI9wJDWrpi%2FFR%2BK%2FbRaegvlijnqI%2BuejgOTmSpQbr0r3DNSFkJ63gESAqDfcIjcFt5TahVlNf6IWADXVc9LgmEJPvuB8ljoUZkFF%2BCK5rjW1rWNFqVc9u9mJDZMBTbvf0YA3bPFbLxL7A%2Fxo%2FBcbTCxYw9KLDvwY6pgFSsr23XRgkyipUhf%2FxjWQSnqB5J27TJ%2BqBUpJVvIR8O80guhzt1qXQNaM9f2MGMc3H7JZrwT1Hqp31L7ysAmjhsTgC2mChj6bBhXI%2B%2FLZx%2FsOPum7fumXbXBs1hGrz2Z%2FX3ckYRvCRbek4V9S%2BQfAuxIJElkv0pizAJQ7%2BTF3plyo%2FuPMSIvET5yOc8DE3l3SkcxklStltoZBsQajLzIiST3yIiyJY&X-Amz-Signature=22f2efc63c68e52baf3d0af6ecb807c613504cc65853f9a93915359d6ee1b142&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IHP2HL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh0t5%2BUgIy0N%2FSQzHn3eMzk8wnFG20nm4BJRaATrbaMAiBfiF%2Fx23kvLSAqlNPyqi7xV3XkCmWPKfqWStjfTwlHnyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM3ezFU0HThSxTM5tIKtwDEQgYtl9RVE2ydJT%2FlhuUNZb2NA%2B46hsKiiPsQwZlXzBc%2BysYPH5gua%2FVVpjKlnyx4Ge07sczSQzQa6pEPDEjU6zIGTECF4eZdSHaSuDdVWLUjxVdQuiF2amEu4jToZ2zjZEvx4%2BvUDRWJTjNGztbjtWlTzwaoH114568R26zoOfjTP6a18gChIQ%2BSIturdV2k4GrkYnMD2H9n2f8Y6Mo%2BE7Pr7wZsp%2F4k6ww1Tnl0hpXcWfAcuXb8tRCgZXJ9SRDaPXl2oku2g5nby24YZ%2FEczKXaBzTgOiOT1DpHkVa5ij4%2BAqQQYX8EvCsVnwPH1nghuIigys%2FYwAaD3gZK9DDpAhWVAQcyTgAmugumnS3RSoPAxnCi8y98zueqCywIKAYApIAoN9WNUkGEKQO5iLDpuk2Lk9I%2FKfo54mALRefDz1QP1rkbJVD0IGsmFXkWvC%2FVVMtSyygpMBsQ5YHVUUpmsF82pkNqC6KsxmcI9wJDWrpi%2FFR%2BK%2FbRaegvlijnqI%2BuejgOTmSpQbr0r3DNSFkJ63gESAqDfcIjcFt5TahVlNf6IWADXVc9LgmEJPvuB8ljoUZkFF%2BCK5rjW1rWNFqVc9u9mJDZMBTbvf0YA3bPFbLxL7A%2Fxo%2FBcbTCxYw9KLDvwY6pgFSsr23XRgkyipUhf%2FxjWQSnqB5J27TJ%2BqBUpJVvIR8O80guhzt1qXQNaM9f2MGMc3H7JZrwT1Hqp31L7ysAmjhsTgC2mChj6bBhXI%2B%2FLZx%2FsOPum7fumXbXBs1hGrz2Z%2FX3ckYRvCRbek4V9S%2BQfAuxIJElkv0pizAJQ7%2BTF3plyo%2FuPMSIvET5yOc8DE3l3SkcxklStltoZBsQajLzIiST3yIiyJY&X-Amz-Signature=28e1f6fe0b7737960ce6db79d93930d6e207bc6b0c61918171131e6d738d5c18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IHP2HL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh0t5%2BUgIy0N%2FSQzHn3eMzk8wnFG20nm4BJRaATrbaMAiBfiF%2Fx23kvLSAqlNPyqi7xV3XkCmWPKfqWStjfTwlHnyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM3ezFU0HThSxTM5tIKtwDEQgYtl9RVE2ydJT%2FlhuUNZb2NA%2B46hsKiiPsQwZlXzBc%2BysYPH5gua%2FVVpjKlnyx4Ge07sczSQzQa6pEPDEjU6zIGTECF4eZdSHaSuDdVWLUjxVdQuiF2amEu4jToZ2zjZEvx4%2BvUDRWJTjNGztbjtWlTzwaoH114568R26zoOfjTP6a18gChIQ%2BSIturdV2k4GrkYnMD2H9n2f8Y6Mo%2BE7Pr7wZsp%2F4k6ww1Tnl0hpXcWfAcuXb8tRCgZXJ9SRDaPXl2oku2g5nby24YZ%2FEczKXaBzTgOiOT1DpHkVa5ij4%2BAqQQYX8EvCsVnwPH1nghuIigys%2FYwAaD3gZK9DDpAhWVAQcyTgAmugumnS3RSoPAxnCi8y98zueqCywIKAYApIAoN9WNUkGEKQO5iLDpuk2Lk9I%2FKfo54mALRefDz1QP1rkbJVD0IGsmFXkWvC%2FVVMtSyygpMBsQ5YHVUUpmsF82pkNqC6KsxmcI9wJDWrpi%2FFR%2BK%2FbRaegvlijnqI%2BuejgOTmSpQbr0r3DNSFkJ63gESAqDfcIjcFt5TahVlNf6IWADXVc9LgmEJPvuB8ljoUZkFF%2BCK5rjW1rWNFqVc9u9mJDZMBTbvf0YA3bPFbLxL7A%2Fxo%2FBcbTCxYw9KLDvwY6pgFSsr23XRgkyipUhf%2FxjWQSnqB5J27TJ%2BqBUpJVvIR8O80guhzt1qXQNaM9f2MGMc3H7JZrwT1Hqp31L7ysAmjhsTgC2mChj6bBhXI%2B%2FLZx%2FsOPum7fumXbXBs1hGrz2Z%2FX3ckYRvCRbek4V9S%2BQfAuxIJElkv0pizAJQ7%2BTF3plyo%2FuPMSIvET5yOc8DE3l3SkcxklStltoZBsQajLzIiST3yIiyJY&X-Amz-Signature=f2b181cef458728bdf6d166ea9cfd215ef177ea02b041370b66f9651e9d18ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IHP2HL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh0t5%2BUgIy0N%2FSQzHn3eMzk8wnFG20nm4BJRaATrbaMAiBfiF%2Fx23kvLSAqlNPyqi7xV3XkCmWPKfqWStjfTwlHnyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM3ezFU0HThSxTM5tIKtwDEQgYtl9RVE2ydJT%2FlhuUNZb2NA%2B46hsKiiPsQwZlXzBc%2BysYPH5gua%2FVVpjKlnyx4Ge07sczSQzQa6pEPDEjU6zIGTECF4eZdSHaSuDdVWLUjxVdQuiF2amEu4jToZ2zjZEvx4%2BvUDRWJTjNGztbjtWlTzwaoH114568R26zoOfjTP6a18gChIQ%2BSIturdV2k4GrkYnMD2H9n2f8Y6Mo%2BE7Pr7wZsp%2F4k6ww1Tnl0hpXcWfAcuXb8tRCgZXJ9SRDaPXl2oku2g5nby24YZ%2FEczKXaBzTgOiOT1DpHkVa5ij4%2BAqQQYX8EvCsVnwPH1nghuIigys%2FYwAaD3gZK9DDpAhWVAQcyTgAmugumnS3RSoPAxnCi8y98zueqCywIKAYApIAoN9WNUkGEKQO5iLDpuk2Lk9I%2FKfo54mALRefDz1QP1rkbJVD0IGsmFXkWvC%2FVVMtSyygpMBsQ5YHVUUpmsF82pkNqC6KsxmcI9wJDWrpi%2FFR%2BK%2FbRaegvlijnqI%2BuejgOTmSpQbr0r3DNSFkJ63gESAqDfcIjcFt5TahVlNf6IWADXVc9LgmEJPvuB8ljoUZkFF%2BCK5rjW1rWNFqVc9u9mJDZMBTbvf0YA3bPFbLxL7A%2Fxo%2FBcbTCxYw9KLDvwY6pgFSsr23XRgkyipUhf%2FxjWQSnqB5J27TJ%2BqBUpJVvIR8O80guhzt1qXQNaM9f2MGMc3H7JZrwT1Hqp31L7ysAmjhsTgC2mChj6bBhXI%2B%2FLZx%2FsOPum7fumXbXBs1hGrz2Z%2FX3ckYRvCRbek4V9S%2BQfAuxIJElkv0pizAJQ7%2BTF3plyo%2FuPMSIvET5yOc8DE3l3SkcxklStltoZBsQajLzIiST3yIiyJY&X-Amz-Signature=a0efc6d2a1e471e2a90a35ea26c61a99ee30db4009e6cb82658b990d6baa5a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
