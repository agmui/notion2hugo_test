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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEF6ILG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSo9NPUV3DN9ZQmQHxsQbVEfzt4Wv%2BZkO8VdnkQCxXsgIgA0cpw0OcHmBF%2B2LfCi5CS8nt5F7go%2FXBnvDklWxemo0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3FGViKdsv6zdtXbCrcA4CbmCz9gkffiBiA1%2Fa3N2n1YPcEsDb%2FurB7dGo64dCzorxzO77TWm%2BGazhQ0Gm0%2F9i7SM7MpwoeBFkttnQ9osTt%2B5hPih091I3oCcAwtFX1oiN51G%2BqPafI04cEtqnC8oGVyQydAZRV2DEkJIVJ%2F3OkngPul503VqOC7eKT8PfIHo4TOoAp1%2BcA0wJ1Vkawq33qXtPfhaHLKyk1ZsxM1l42VRDVpzsWItrixWHP5igIFGowzCaOwQeD5wFdqeUhHZqIHWon8LDq%2BNUY3J5cYqZTs%2BJkra0qWypA3wYP6zm2UBYiCdxga5A%2Fqi7nnMGdoHTPdrv16bfVQ3EmvMmuPjMSyHvevqBdXy%2BTxlwSyjadK0riw6LvEdYt6XbF6rDwPGNFCCuS8NJMkC09tcN4Y6dzZ4cDITlPR9twGfP4wivplbhS%2FAH5xvBo01tf1aN5sF37cj4Yf1W1GN%2F59gEcxxm%2BT%2BZ9RbWMP7syimR7rLFMOGCDj5pGYgplhjpIqQ%2BdVNtYb1drWLnWMNZbT0Y99Im7sf%2F6X9%2B70E6GuGHeHCLCnmTH6HvNbIrDD2JnNsp6nk4wyWl36%2BAsQSy7vMKE9sLWW%2BpZHeQUIgsxROr2OyE%2Ftv7o5ik1K8PYsDYjMMHemcIGOqUBmVMpEpeEoiUd3c43Uhrz%2Fc2%2BfAgVnJ3gdIv4prumg4a%2FzEBUFHsIVT3b4BMflJ5o%2Bkl90oLviynMQ5yLpbnHK%2Fl0dr0hKiYblPgcjSC9Q58YP9KJxge1mLAKUB9ERE88AFBYXPYfn%2BEOJqOq64mhhj8HazGxy0NCe3ABDNeezZ4YD66jfI7ZzFpB4Jxtvbuf%2FBTzk70kn7pONx1A4lFB6Rapl42q&X-Amz-Signature=7917786c8c1a0eeedee626a384d7a5c36df6df161a8d87ac17464293736dbda2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEF6ILG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSo9NPUV3DN9ZQmQHxsQbVEfzt4Wv%2BZkO8VdnkQCxXsgIgA0cpw0OcHmBF%2B2LfCi5CS8nt5F7go%2FXBnvDklWxemo0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3FGViKdsv6zdtXbCrcA4CbmCz9gkffiBiA1%2Fa3N2n1YPcEsDb%2FurB7dGo64dCzorxzO77TWm%2BGazhQ0Gm0%2F9i7SM7MpwoeBFkttnQ9osTt%2B5hPih091I3oCcAwtFX1oiN51G%2BqPafI04cEtqnC8oGVyQydAZRV2DEkJIVJ%2F3OkngPul503VqOC7eKT8PfIHo4TOoAp1%2BcA0wJ1Vkawq33qXtPfhaHLKyk1ZsxM1l42VRDVpzsWItrixWHP5igIFGowzCaOwQeD5wFdqeUhHZqIHWon8LDq%2BNUY3J5cYqZTs%2BJkra0qWypA3wYP6zm2UBYiCdxga5A%2Fqi7nnMGdoHTPdrv16bfVQ3EmvMmuPjMSyHvevqBdXy%2BTxlwSyjadK0riw6LvEdYt6XbF6rDwPGNFCCuS8NJMkC09tcN4Y6dzZ4cDITlPR9twGfP4wivplbhS%2FAH5xvBo01tf1aN5sF37cj4Yf1W1GN%2F59gEcxxm%2BT%2BZ9RbWMP7syimR7rLFMOGCDj5pGYgplhjpIqQ%2BdVNtYb1drWLnWMNZbT0Y99Im7sf%2F6X9%2B70E6GuGHeHCLCnmTH6HvNbIrDD2JnNsp6nk4wyWl36%2BAsQSy7vMKE9sLWW%2BpZHeQUIgsxROr2OyE%2Ftv7o5ik1K8PYsDYjMMHemcIGOqUBmVMpEpeEoiUd3c43Uhrz%2Fc2%2BfAgVnJ3gdIv4prumg4a%2FzEBUFHsIVT3b4BMflJ5o%2Bkl90oLviynMQ5yLpbnHK%2Fl0dr0hKiYblPgcjSC9Q58YP9KJxge1mLAKUB9ERE88AFBYXPYfn%2BEOJqOq64mhhj8HazGxy0NCe3ABDNeezZ4YD66jfI7ZzFpB4Jxtvbuf%2FBTzk70kn7pONx1A4lFB6Rapl42q&X-Amz-Signature=db9a36888a6399976e565bd5452d5c95e16d63078964fb5575d670f1a2d98d64&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEF6ILG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSo9NPUV3DN9ZQmQHxsQbVEfzt4Wv%2BZkO8VdnkQCxXsgIgA0cpw0OcHmBF%2B2LfCi5CS8nt5F7go%2FXBnvDklWxemo0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3FGViKdsv6zdtXbCrcA4CbmCz9gkffiBiA1%2Fa3N2n1YPcEsDb%2FurB7dGo64dCzorxzO77TWm%2BGazhQ0Gm0%2F9i7SM7MpwoeBFkttnQ9osTt%2B5hPih091I3oCcAwtFX1oiN51G%2BqPafI04cEtqnC8oGVyQydAZRV2DEkJIVJ%2F3OkngPul503VqOC7eKT8PfIHo4TOoAp1%2BcA0wJ1Vkawq33qXtPfhaHLKyk1ZsxM1l42VRDVpzsWItrixWHP5igIFGowzCaOwQeD5wFdqeUhHZqIHWon8LDq%2BNUY3J5cYqZTs%2BJkra0qWypA3wYP6zm2UBYiCdxga5A%2Fqi7nnMGdoHTPdrv16bfVQ3EmvMmuPjMSyHvevqBdXy%2BTxlwSyjadK0riw6LvEdYt6XbF6rDwPGNFCCuS8NJMkC09tcN4Y6dzZ4cDITlPR9twGfP4wivplbhS%2FAH5xvBo01tf1aN5sF37cj4Yf1W1GN%2F59gEcxxm%2BT%2BZ9RbWMP7syimR7rLFMOGCDj5pGYgplhjpIqQ%2BdVNtYb1drWLnWMNZbT0Y99Im7sf%2F6X9%2B70E6GuGHeHCLCnmTH6HvNbIrDD2JnNsp6nk4wyWl36%2BAsQSy7vMKE9sLWW%2BpZHeQUIgsxROr2OyE%2Ftv7o5ik1K8PYsDYjMMHemcIGOqUBmVMpEpeEoiUd3c43Uhrz%2Fc2%2BfAgVnJ3gdIv4prumg4a%2FzEBUFHsIVT3b4BMflJ5o%2Bkl90oLviynMQ5yLpbnHK%2Fl0dr0hKiYblPgcjSC9Q58YP9KJxge1mLAKUB9ERE88AFBYXPYfn%2BEOJqOq64mhhj8HazGxy0NCe3ABDNeezZ4YD66jfI7ZzFpB4Jxtvbuf%2FBTzk70kn7pONx1A4lFB6Rapl42q&X-Amz-Signature=63a43b36d4a18e7d8bff1a1996e201abd7ae5eaaef0d2a300f29a8ed95ddb94d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEF6ILG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSo9NPUV3DN9ZQmQHxsQbVEfzt4Wv%2BZkO8VdnkQCxXsgIgA0cpw0OcHmBF%2B2LfCi5CS8nt5F7go%2FXBnvDklWxemo0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3FGViKdsv6zdtXbCrcA4CbmCz9gkffiBiA1%2Fa3N2n1YPcEsDb%2FurB7dGo64dCzorxzO77TWm%2BGazhQ0Gm0%2F9i7SM7MpwoeBFkttnQ9osTt%2B5hPih091I3oCcAwtFX1oiN51G%2BqPafI04cEtqnC8oGVyQydAZRV2DEkJIVJ%2F3OkngPul503VqOC7eKT8PfIHo4TOoAp1%2BcA0wJ1Vkawq33qXtPfhaHLKyk1ZsxM1l42VRDVpzsWItrixWHP5igIFGowzCaOwQeD5wFdqeUhHZqIHWon8LDq%2BNUY3J5cYqZTs%2BJkra0qWypA3wYP6zm2UBYiCdxga5A%2Fqi7nnMGdoHTPdrv16bfVQ3EmvMmuPjMSyHvevqBdXy%2BTxlwSyjadK0riw6LvEdYt6XbF6rDwPGNFCCuS8NJMkC09tcN4Y6dzZ4cDITlPR9twGfP4wivplbhS%2FAH5xvBo01tf1aN5sF37cj4Yf1W1GN%2F59gEcxxm%2BT%2BZ9RbWMP7syimR7rLFMOGCDj5pGYgplhjpIqQ%2BdVNtYb1drWLnWMNZbT0Y99Im7sf%2F6X9%2B70E6GuGHeHCLCnmTH6HvNbIrDD2JnNsp6nk4wyWl36%2BAsQSy7vMKE9sLWW%2BpZHeQUIgsxROr2OyE%2Ftv7o5ik1K8PYsDYjMMHemcIGOqUBmVMpEpeEoiUd3c43Uhrz%2Fc2%2BfAgVnJ3gdIv4prumg4a%2FzEBUFHsIVT3b4BMflJ5o%2Bkl90oLviynMQ5yLpbnHK%2Fl0dr0hKiYblPgcjSC9Q58YP9KJxge1mLAKUB9ERE88AFBYXPYfn%2BEOJqOq64mhhj8HazGxy0NCe3ABDNeezZ4YD66jfI7ZzFpB4Jxtvbuf%2FBTzk70kn7pONx1A4lFB6Rapl42q&X-Amz-Signature=2121f5a6cb86b245774e719b627fe6c527d4de611eebc7a778e6cfc3871d7561&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEF6ILG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSo9NPUV3DN9ZQmQHxsQbVEfzt4Wv%2BZkO8VdnkQCxXsgIgA0cpw0OcHmBF%2B2LfCi5CS8nt5F7go%2FXBnvDklWxemo0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3FGViKdsv6zdtXbCrcA4CbmCz9gkffiBiA1%2Fa3N2n1YPcEsDb%2FurB7dGo64dCzorxzO77TWm%2BGazhQ0Gm0%2F9i7SM7MpwoeBFkttnQ9osTt%2B5hPih091I3oCcAwtFX1oiN51G%2BqPafI04cEtqnC8oGVyQydAZRV2DEkJIVJ%2F3OkngPul503VqOC7eKT8PfIHo4TOoAp1%2BcA0wJ1Vkawq33qXtPfhaHLKyk1ZsxM1l42VRDVpzsWItrixWHP5igIFGowzCaOwQeD5wFdqeUhHZqIHWon8LDq%2BNUY3J5cYqZTs%2BJkra0qWypA3wYP6zm2UBYiCdxga5A%2Fqi7nnMGdoHTPdrv16bfVQ3EmvMmuPjMSyHvevqBdXy%2BTxlwSyjadK0riw6LvEdYt6XbF6rDwPGNFCCuS8NJMkC09tcN4Y6dzZ4cDITlPR9twGfP4wivplbhS%2FAH5xvBo01tf1aN5sF37cj4Yf1W1GN%2F59gEcxxm%2BT%2BZ9RbWMP7syimR7rLFMOGCDj5pGYgplhjpIqQ%2BdVNtYb1drWLnWMNZbT0Y99Im7sf%2F6X9%2B70E6GuGHeHCLCnmTH6HvNbIrDD2JnNsp6nk4wyWl36%2BAsQSy7vMKE9sLWW%2BpZHeQUIgsxROr2OyE%2Ftv7o5ik1K8PYsDYjMMHemcIGOqUBmVMpEpeEoiUd3c43Uhrz%2Fc2%2BfAgVnJ3gdIv4prumg4a%2FzEBUFHsIVT3b4BMflJ5o%2Bkl90oLviynMQ5yLpbnHK%2Fl0dr0hKiYblPgcjSC9Q58YP9KJxge1mLAKUB9ERE88AFBYXPYfn%2BEOJqOq64mhhj8HazGxy0NCe3ABDNeezZ4YD66jfI7ZzFpB4Jxtvbuf%2FBTzk70kn7pONx1A4lFB6Rapl42q&X-Amz-Signature=8a3158bc81e64c67d2a8176e43b579276f5a6a840b60f2509aa187fa6016b75d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEF6ILG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSo9NPUV3DN9ZQmQHxsQbVEfzt4Wv%2BZkO8VdnkQCxXsgIgA0cpw0OcHmBF%2B2LfCi5CS8nt5F7go%2FXBnvDklWxemo0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3FGViKdsv6zdtXbCrcA4CbmCz9gkffiBiA1%2Fa3N2n1YPcEsDb%2FurB7dGo64dCzorxzO77TWm%2BGazhQ0Gm0%2F9i7SM7MpwoeBFkttnQ9osTt%2B5hPih091I3oCcAwtFX1oiN51G%2BqPafI04cEtqnC8oGVyQydAZRV2DEkJIVJ%2F3OkngPul503VqOC7eKT8PfIHo4TOoAp1%2BcA0wJ1Vkawq33qXtPfhaHLKyk1ZsxM1l42VRDVpzsWItrixWHP5igIFGowzCaOwQeD5wFdqeUhHZqIHWon8LDq%2BNUY3J5cYqZTs%2BJkra0qWypA3wYP6zm2UBYiCdxga5A%2Fqi7nnMGdoHTPdrv16bfVQ3EmvMmuPjMSyHvevqBdXy%2BTxlwSyjadK0riw6LvEdYt6XbF6rDwPGNFCCuS8NJMkC09tcN4Y6dzZ4cDITlPR9twGfP4wivplbhS%2FAH5xvBo01tf1aN5sF37cj4Yf1W1GN%2F59gEcxxm%2BT%2BZ9RbWMP7syimR7rLFMOGCDj5pGYgplhjpIqQ%2BdVNtYb1drWLnWMNZbT0Y99Im7sf%2F6X9%2B70E6GuGHeHCLCnmTH6HvNbIrDD2JnNsp6nk4wyWl36%2BAsQSy7vMKE9sLWW%2BpZHeQUIgsxROr2OyE%2Ftv7o5ik1K8PYsDYjMMHemcIGOqUBmVMpEpeEoiUd3c43Uhrz%2Fc2%2BfAgVnJ3gdIv4prumg4a%2FzEBUFHsIVT3b4BMflJ5o%2Bkl90oLviynMQ5yLpbnHK%2Fl0dr0hKiYblPgcjSC9Q58YP9KJxge1mLAKUB9ERE88AFBYXPYfn%2BEOJqOq64mhhj8HazGxy0NCe3ABDNeezZ4YD66jfI7ZzFpB4Jxtvbuf%2FBTzk70kn7pONx1A4lFB6Rapl42q&X-Amz-Signature=bd9a1c2cf472b1fdfd6c4cfb94d2f1c5f319240139fb5c792a718b58e72d734b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEF6ILG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSo9NPUV3DN9ZQmQHxsQbVEfzt4Wv%2BZkO8VdnkQCxXsgIgA0cpw0OcHmBF%2B2LfCi5CS8nt5F7go%2FXBnvDklWxemo0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3FGViKdsv6zdtXbCrcA4CbmCz9gkffiBiA1%2Fa3N2n1YPcEsDb%2FurB7dGo64dCzorxzO77TWm%2BGazhQ0Gm0%2F9i7SM7MpwoeBFkttnQ9osTt%2B5hPih091I3oCcAwtFX1oiN51G%2BqPafI04cEtqnC8oGVyQydAZRV2DEkJIVJ%2F3OkngPul503VqOC7eKT8PfIHo4TOoAp1%2BcA0wJ1Vkawq33qXtPfhaHLKyk1ZsxM1l42VRDVpzsWItrixWHP5igIFGowzCaOwQeD5wFdqeUhHZqIHWon8LDq%2BNUY3J5cYqZTs%2BJkra0qWypA3wYP6zm2UBYiCdxga5A%2Fqi7nnMGdoHTPdrv16bfVQ3EmvMmuPjMSyHvevqBdXy%2BTxlwSyjadK0riw6LvEdYt6XbF6rDwPGNFCCuS8NJMkC09tcN4Y6dzZ4cDITlPR9twGfP4wivplbhS%2FAH5xvBo01tf1aN5sF37cj4Yf1W1GN%2F59gEcxxm%2BT%2BZ9RbWMP7syimR7rLFMOGCDj5pGYgplhjpIqQ%2BdVNtYb1drWLnWMNZbT0Y99Im7sf%2F6X9%2B70E6GuGHeHCLCnmTH6HvNbIrDD2JnNsp6nk4wyWl36%2BAsQSy7vMKE9sLWW%2BpZHeQUIgsxROr2OyE%2Ftv7o5ik1K8PYsDYjMMHemcIGOqUBmVMpEpeEoiUd3c43Uhrz%2Fc2%2BfAgVnJ3gdIv4prumg4a%2FzEBUFHsIVT3b4BMflJ5o%2Bkl90oLviynMQ5yLpbnHK%2Fl0dr0hKiYblPgcjSC9Q58YP9KJxge1mLAKUB9ERE88AFBYXPYfn%2BEOJqOq64mhhj8HazGxy0NCe3ABDNeezZ4YD66jfI7ZzFpB4Jxtvbuf%2FBTzk70kn7pONx1A4lFB6Rapl42q&X-Amz-Signature=d51fc254ebc9e1277571ab3e09254b636bc7adf14b2bc90b55eb910bf3b61b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEF6ILG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSo9NPUV3DN9ZQmQHxsQbVEfzt4Wv%2BZkO8VdnkQCxXsgIgA0cpw0OcHmBF%2B2LfCi5CS8nt5F7go%2FXBnvDklWxemo0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3FGViKdsv6zdtXbCrcA4CbmCz9gkffiBiA1%2Fa3N2n1YPcEsDb%2FurB7dGo64dCzorxzO77TWm%2BGazhQ0Gm0%2F9i7SM7MpwoeBFkttnQ9osTt%2B5hPih091I3oCcAwtFX1oiN51G%2BqPafI04cEtqnC8oGVyQydAZRV2DEkJIVJ%2F3OkngPul503VqOC7eKT8PfIHo4TOoAp1%2BcA0wJ1Vkawq33qXtPfhaHLKyk1ZsxM1l42VRDVpzsWItrixWHP5igIFGowzCaOwQeD5wFdqeUhHZqIHWon8LDq%2BNUY3J5cYqZTs%2BJkra0qWypA3wYP6zm2UBYiCdxga5A%2Fqi7nnMGdoHTPdrv16bfVQ3EmvMmuPjMSyHvevqBdXy%2BTxlwSyjadK0riw6LvEdYt6XbF6rDwPGNFCCuS8NJMkC09tcN4Y6dzZ4cDITlPR9twGfP4wivplbhS%2FAH5xvBo01tf1aN5sF37cj4Yf1W1GN%2F59gEcxxm%2BT%2BZ9RbWMP7syimR7rLFMOGCDj5pGYgplhjpIqQ%2BdVNtYb1drWLnWMNZbT0Y99Im7sf%2F6X9%2B70E6GuGHeHCLCnmTH6HvNbIrDD2JnNsp6nk4wyWl36%2BAsQSy7vMKE9sLWW%2BpZHeQUIgsxROr2OyE%2Ftv7o5ik1K8PYsDYjMMHemcIGOqUBmVMpEpeEoiUd3c43Uhrz%2Fc2%2BfAgVnJ3gdIv4prumg4a%2FzEBUFHsIVT3b4BMflJ5o%2Bkl90oLviynMQ5yLpbnHK%2Fl0dr0hKiYblPgcjSC9Q58YP9KJxge1mLAKUB9ERE88AFBYXPYfn%2BEOJqOq64mhhj8HazGxy0NCe3ABDNeezZ4YD66jfI7ZzFpB4Jxtvbuf%2FBTzk70kn7pONx1A4lFB6Rapl42q&X-Amz-Signature=137016099a74c56859ec2573034467de247234f2b63e67f6a33614ab4370b312&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
