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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOE2VV5W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDfXDSbTyRd%2Fmt8G70Bz14wn5mbuR9%2FGtLCMA3UOGbq3gIge7wBzRTmpHS%2FAkRGAQW8zaMCsM545LVuyFVIhyVW7JMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAASW7K%2FvRzZjIQnFCrcA%2Fl0Y80oZybb7c1x19RoVQ%2BjFLnMw79rEHqRQZrQvrwhmxs6uYlzLbY3cJCJ3UY10DRI%2Bv01CTv6jwSUeKypXMx8Hp8JL7mM%2BGZ1QLMvVvc91yvDmitJJCZJwcD7YQ9g2K5%2B8Ok2PvbJrkUWMxA3xA8NnR6Ntsdmg66a%2B7HUJDPPJefBZJ4fX%2BK1C6GcImtcBxfLpraVT4mdrhH%2FEnfRoTYEiIrFtBV9reV4yAyvRRFmCy9PriWVw2o7LeEFeOcRRJ8psrsTn3nai7I4kkPWnBpQTeXbTt7Dzt%2B58iCbcUV%2BbyOXvi6eg6%2FyRMD50PxaVV8LSSijjDUNx1%2FwYqLwa4Sx7PsQ%2FotjJ3CmdlXz%2F2M%2BHO74UGPnOGVSP2%2Fa3BmFe027W7e3ednH6etig%2Bvm96c3tg%2FA4uey%2BPZmvmPml464bF2UzzsQ5I4QaIwa0GD5NEbphYGFBPAc7yo8BNLOrqqzGyfN5HvHBFL1KI5JffRXBt1yQV675yoEJsD5naDT9oUezwru8omsqckcrbIFUl3i8%2B0CMJTCxCgD57qsyxLvsGLv6MyKdrVBrWM6hihfLuz6GucRUPB2gFqcmd0TZRcyKZhEs207zo%2B3LNJwHPanJOzzDUsD%2BFKLDHVaMO247MIGOqUB7Zs6s2eD7UQTnDZjDV1BeYbD6RFtbF7K1odiCarP0p5G2XwIaNHXtzzQkNNrdMrJChigakPmk5g7JvDlFt7iUEzBnBKLX60jO8Y7LYqYjBTsbsBNznOwF56I%2FKiis8iv4eTYdRXqQsvhCCgTPXMF8M51s0wKeRSCngZaURFYaHFK4MNOQ3IsstwC2LxMnkaFfw2UbvZ%2Bi1jUEvCy328mkt2741A%2F&X-Amz-Signature=77be3d46417f35885c84b43dca4580f7a928cf5ab07c3f06524150a80819874a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOE2VV5W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDfXDSbTyRd%2Fmt8G70Bz14wn5mbuR9%2FGtLCMA3UOGbq3gIge7wBzRTmpHS%2FAkRGAQW8zaMCsM545LVuyFVIhyVW7JMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAASW7K%2FvRzZjIQnFCrcA%2Fl0Y80oZybb7c1x19RoVQ%2BjFLnMw79rEHqRQZrQvrwhmxs6uYlzLbY3cJCJ3UY10DRI%2Bv01CTv6jwSUeKypXMx8Hp8JL7mM%2BGZ1QLMvVvc91yvDmitJJCZJwcD7YQ9g2K5%2B8Ok2PvbJrkUWMxA3xA8NnR6Ntsdmg66a%2B7HUJDPPJefBZJ4fX%2BK1C6GcImtcBxfLpraVT4mdrhH%2FEnfRoTYEiIrFtBV9reV4yAyvRRFmCy9PriWVw2o7LeEFeOcRRJ8psrsTn3nai7I4kkPWnBpQTeXbTt7Dzt%2B58iCbcUV%2BbyOXvi6eg6%2FyRMD50PxaVV8LSSijjDUNx1%2FwYqLwa4Sx7PsQ%2FotjJ3CmdlXz%2F2M%2BHO74UGPnOGVSP2%2Fa3BmFe027W7e3ednH6etig%2Bvm96c3tg%2FA4uey%2BPZmvmPml464bF2UzzsQ5I4QaIwa0GD5NEbphYGFBPAc7yo8BNLOrqqzGyfN5HvHBFL1KI5JffRXBt1yQV675yoEJsD5naDT9oUezwru8omsqckcrbIFUl3i8%2B0CMJTCxCgD57qsyxLvsGLv6MyKdrVBrWM6hihfLuz6GucRUPB2gFqcmd0TZRcyKZhEs207zo%2B3LNJwHPanJOzzDUsD%2BFKLDHVaMO247MIGOqUB7Zs6s2eD7UQTnDZjDV1BeYbD6RFtbF7K1odiCarP0p5G2XwIaNHXtzzQkNNrdMrJChigakPmk5g7JvDlFt7iUEzBnBKLX60jO8Y7LYqYjBTsbsBNznOwF56I%2FKiis8iv4eTYdRXqQsvhCCgTPXMF8M51s0wKeRSCngZaURFYaHFK4MNOQ3IsstwC2LxMnkaFfw2UbvZ%2Bi1jUEvCy328mkt2741A%2F&X-Amz-Signature=3665c5ed7f5fa206cd81e7ecd904c7fc36d79290817fd75ebbee2473e6997e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOE2VV5W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDfXDSbTyRd%2Fmt8G70Bz14wn5mbuR9%2FGtLCMA3UOGbq3gIge7wBzRTmpHS%2FAkRGAQW8zaMCsM545LVuyFVIhyVW7JMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAASW7K%2FvRzZjIQnFCrcA%2Fl0Y80oZybb7c1x19RoVQ%2BjFLnMw79rEHqRQZrQvrwhmxs6uYlzLbY3cJCJ3UY10DRI%2Bv01CTv6jwSUeKypXMx8Hp8JL7mM%2BGZ1QLMvVvc91yvDmitJJCZJwcD7YQ9g2K5%2B8Ok2PvbJrkUWMxA3xA8NnR6Ntsdmg66a%2B7HUJDPPJefBZJ4fX%2BK1C6GcImtcBxfLpraVT4mdrhH%2FEnfRoTYEiIrFtBV9reV4yAyvRRFmCy9PriWVw2o7LeEFeOcRRJ8psrsTn3nai7I4kkPWnBpQTeXbTt7Dzt%2B58iCbcUV%2BbyOXvi6eg6%2FyRMD50PxaVV8LSSijjDUNx1%2FwYqLwa4Sx7PsQ%2FotjJ3CmdlXz%2F2M%2BHO74UGPnOGVSP2%2Fa3BmFe027W7e3ednH6etig%2Bvm96c3tg%2FA4uey%2BPZmvmPml464bF2UzzsQ5I4QaIwa0GD5NEbphYGFBPAc7yo8BNLOrqqzGyfN5HvHBFL1KI5JffRXBt1yQV675yoEJsD5naDT9oUezwru8omsqckcrbIFUl3i8%2B0CMJTCxCgD57qsyxLvsGLv6MyKdrVBrWM6hihfLuz6GucRUPB2gFqcmd0TZRcyKZhEs207zo%2B3LNJwHPanJOzzDUsD%2BFKLDHVaMO247MIGOqUB7Zs6s2eD7UQTnDZjDV1BeYbD6RFtbF7K1odiCarP0p5G2XwIaNHXtzzQkNNrdMrJChigakPmk5g7JvDlFt7iUEzBnBKLX60jO8Y7LYqYjBTsbsBNznOwF56I%2FKiis8iv4eTYdRXqQsvhCCgTPXMF8M51s0wKeRSCngZaURFYaHFK4MNOQ3IsstwC2LxMnkaFfw2UbvZ%2Bi1jUEvCy328mkt2741A%2F&X-Amz-Signature=052a850558fd97bd3ed9d2fb50b21cf66eaf6e31f68fcdf4a28e083842c30209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOE2VV5W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDfXDSbTyRd%2Fmt8G70Bz14wn5mbuR9%2FGtLCMA3UOGbq3gIge7wBzRTmpHS%2FAkRGAQW8zaMCsM545LVuyFVIhyVW7JMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAASW7K%2FvRzZjIQnFCrcA%2Fl0Y80oZybb7c1x19RoVQ%2BjFLnMw79rEHqRQZrQvrwhmxs6uYlzLbY3cJCJ3UY10DRI%2Bv01CTv6jwSUeKypXMx8Hp8JL7mM%2BGZ1QLMvVvc91yvDmitJJCZJwcD7YQ9g2K5%2B8Ok2PvbJrkUWMxA3xA8NnR6Ntsdmg66a%2B7HUJDPPJefBZJ4fX%2BK1C6GcImtcBxfLpraVT4mdrhH%2FEnfRoTYEiIrFtBV9reV4yAyvRRFmCy9PriWVw2o7LeEFeOcRRJ8psrsTn3nai7I4kkPWnBpQTeXbTt7Dzt%2B58iCbcUV%2BbyOXvi6eg6%2FyRMD50PxaVV8LSSijjDUNx1%2FwYqLwa4Sx7PsQ%2FotjJ3CmdlXz%2F2M%2BHO74UGPnOGVSP2%2Fa3BmFe027W7e3ednH6etig%2Bvm96c3tg%2FA4uey%2BPZmvmPml464bF2UzzsQ5I4QaIwa0GD5NEbphYGFBPAc7yo8BNLOrqqzGyfN5HvHBFL1KI5JffRXBt1yQV675yoEJsD5naDT9oUezwru8omsqckcrbIFUl3i8%2B0CMJTCxCgD57qsyxLvsGLv6MyKdrVBrWM6hihfLuz6GucRUPB2gFqcmd0TZRcyKZhEs207zo%2B3LNJwHPanJOzzDUsD%2BFKLDHVaMO247MIGOqUB7Zs6s2eD7UQTnDZjDV1BeYbD6RFtbF7K1odiCarP0p5G2XwIaNHXtzzQkNNrdMrJChigakPmk5g7JvDlFt7iUEzBnBKLX60jO8Y7LYqYjBTsbsBNznOwF56I%2FKiis8iv4eTYdRXqQsvhCCgTPXMF8M51s0wKeRSCngZaURFYaHFK4MNOQ3IsstwC2LxMnkaFfw2UbvZ%2Bi1jUEvCy328mkt2741A%2F&X-Amz-Signature=acfe60144a37ce1f973cad8e8902561da8dbe2447f2bf22dfc12d00053e17cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOE2VV5W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDfXDSbTyRd%2Fmt8G70Bz14wn5mbuR9%2FGtLCMA3UOGbq3gIge7wBzRTmpHS%2FAkRGAQW8zaMCsM545LVuyFVIhyVW7JMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAASW7K%2FvRzZjIQnFCrcA%2Fl0Y80oZybb7c1x19RoVQ%2BjFLnMw79rEHqRQZrQvrwhmxs6uYlzLbY3cJCJ3UY10DRI%2Bv01CTv6jwSUeKypXMx8Hp8JL7mM%2BGZ1QLMvVvc91yvDmitJJCZJwcD7YQ9g2K5%2B8Ok2PvbJrkUWMxA3xA8NnR6Ntsdmg66a%2B7HUJDPPJefBZJ4fX%2BK1C6GcImtcBxfLpraVT4mdrhH%2FEnfRoTYEiIrFtBV9reV4yAyvRRFmCy9PriWVw2o7LeEFeOcRRJ8psrsTn3nai7I4kkPWnBpQTeXbTt7Dzt%2B58iCbcUV%2BbyOXvi6eg6%2FyRMD50PxaVV8LSSijjDUNx1%2FwYqLwa4Sx7PsQ%2FotjJ3CmdlXz%2F2M%2BHO74UGPnOGVSP2%2Fa3BmFe027W7e3ednH6etig%2Bvm96c3tg%2FA4uey%2BPZmvmPml464bF2UzzsQ5I4QaIwa0GD5NEbphYGFBPAc7yo8BNLOrqqzGyfN5HvHBFL1KI5JffRXBt1yQV675yoEJsD5naDT9oUezwru8omsqckcrbIFUl3i8%2B0CMJTCxCgD57qsyxLvsGLv6MyKdrVBrWM6hihfLuz6GucRUPB2gFqcmd0TZRcyKZhEs207zo%2B3LNJwHPanJOzzDUsD%2BFKLDHVaMO247MIGOqUB7Zs6s2eD7UQTnDZjDV1BeYbD6RFtbF7K1odiCarP0p5G2XwIaNHXtzzQkNNrdMrJChigakPmk5g7JvDlFt7iUEzBnBKLX60jO8Y7LYqYjBTsbsBNznOwF56I%2FKiis8iv4eTYdRXqQsvhCCgTPXMF8M51s0wKeRSCngZaURFYaHFK4MNOQ3IsstwC2LxMnkaFfw2UbvZ%2Bi1jUEvCy328mkt2741A%2F&X-Amz-Signature=c7c83a594502d67400803a79eea354e8cf7008697bba813a0443237bc59a37dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOE2VV5W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDfXDSbTyRd%2Fmt8G70Bz14wn5mbuR9%2FGtLCMA3UOGbq3gIge7wBzRTmpHS%2FAkRGAQW8zaMCsM545LVuyFVIhyVW7JMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAASW7K%2FvRzZjIQnFCrcA%2Fl0Y80oZybb7c1x19RoVQ%2BjFLnMw79rEHqRQZrQvrwhmxs6uYlzLbY3cJCJ3UY10DRI%2Bv01CTv6jwSUeKypXMx8Hp8JL7mM%2BGZ1QLMvVvc91yvDmitJJCZJwcD7YQ9g2K5%2B8Ok2PvbJrkUWMxA3xA8NnR6Ntsdmg66a%2B7HUJDPPJefBZJ4fX%2BK1C6GcImtcBxfLpraVT4mdrhH%2FEnfRoTYEiIrFtBV9reV4yAyvRRFmCy9PriWVw2o7LeEFeOcRRJ8psrsTn3nai7I4kkPWnBpQTeXbTt7Dzt%2B58iCbcUV%2BbyOXvi6eg6%2FyRMD50PxaVV8LSSijjDUNx1%2FwYqLwa4Sx7PsQ%2FotjJ3CmdlXz%2F2M%2BHO74UGPnOGVSP2%2Fa3BmFe027W7e3ednH6etig%2Bvm96c3tg%2FA4uey%2BPZmvmPml464bF2UzzsQ5I4QaIwa0GD5NEbphYGFBPAc7yo8BNLOrqqzGyfN5HvHBFL1KI5JffRXBt1yQV675yoEJsD5naDT9oUezwru8omsqckcrbIFUl3i8%2B0CMJTCxCgD57qsyxLvsGLv6MyKdrVBrWM6hihfLuz6GucRUPB2gFqcmd0TZRcyKZhEs207zo%2B3LNJwHPanJOzzDUsD%2BFKLDHVaMO247MIGOqUB7Zs6s2eD7UQTnDZjDV1BeYbD6RFtbF7K1odiCarP0p5G2XwIaNHXtzzQkNNrdMrJChigakPmk5g7JvDlFt7iUEzBnBKLX60jO8Y7LYqYjBTsbsBNznOwF56I%2FKiis8iv4eTYdRXqQsvhCCgTPXMF8M51s0wKeRSCngZaURFYaHFK4MNOQ3IsstwC2LxMnkaFfw2UbvZ%2Bi1jUEvCy328mkt2741A%2F&X-Amz-Signature=344f740baf60a738a229e8b3b0cce5aaa9a7301881f75f6aaea8f06e353fa846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOE2VV5W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDfXDSbTyRd%2Fmt8G70Bz14wn5mbuR9%2FGtLCMA3UOGbq3gIge7wBzRTmpHS%2FAkRGAQW8zaMCsM545LVuyFVIhyVW7JMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAASW7K%2FvRzZjIQnFCrcA%2Fl0Y80oZybb7c1x19RoVQ%2BjFLnMw79rEHqRQZrQvrwhmxs6uYlzLbY3cJCJ3UY10DRI%2Bv01CTv6jwSUeKypXMx8Hp8JL7mM%2BGZ1QLMvVvc91yvDmitJJCZJwcD7YQ9g2K5%2B8Ok2PvbJrkUWMxA3xA8NnR6Ntsdmg66a%2B7HUJDPPJefBZJ4fX%2BK1C6GcImtcBxfLpraVT4mdrhH%2FEnfRoTYEiIrFtBV9reV4yAyvRRFmCy9PriWVw2o7LeEFeOcRRJ8psrsTn3nai7I4kkPWnBpQTeXbTt7Dzt%2B58iCbcUV%2BbyOXvi6eg6%2FyRMD50PxaVV8LSSijjDUNx1%2FwYqLwa4Sx7PsQ%2FotjJ3CmdlXz%2F2M%2BHO74UGPnOGVSP2%2Fa3BmFe027W7e3ednH6etig%2Bvm96c3tg%2FA4uey%2BPZmvmPml464bF2UzzsQ5I4QaIwa0GD5NEbphYGFBPAc7yo8BNLOrqqzGyfN5HvHBFL1KI5JffRXBt1yQV675yoEJsD5naDT9oUezwru8omsqckcrbIFUl3i8%2B0CMJTCxCgD57qsyxLvsGLv6MyKdrVBrWM6hihfLuz6GucRUPB2gFqcmd0TZRcyKZhEs207zo%2B3LNJwHPanJOzzDUsD%2BFKLDHVaMO247MIGOqUB7Zs6s2eD7UQTnDZjDV1BeYbD6RFtbF7K1odiCarP0p5G2XwIaNHXtzzQkNNrdMrJChigakPmk5g7JvDlFt7iUEzBnBKLX60jO8Y7LYqYjBTsbsBNznOwF56I%2FKiis8iv4eTYdRXqQsvhCCgTPXMF8M51s0wKeRSCngZaURFYaHFK4MNOQ3IsstwC2LxMnkaFfw2UbvZ%2Bi1jUEvCy328mkt2741A%2F&X-Amz-Signature=0de6bc45784f412f8745907f0d267f51990cfaea34187300258c6a16ca03b690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOE2VV5W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDfXDSbTyRd%2Fmt8G70Bz14wn5mbuR9%2FGtLCMA3UOGbq3gIge7wBzRTmpHS%2FAkRGAQW8zaMCsM545LVuyFVIhyVW7JMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAASW7K%2FvRzZjIQnFCrcA%2Fl0Y80oZybb7c1x19RoVQ%2BjFLnMw79rEHqRQZrQvrwhmxs6uYlzLbY3cJCJ3UY10DRI%2Bv01CTv6jwSUeKypXMx8Hp8JL7mM%2BGZ1QLMvVvc91yvDmitJJCZJwcD7YQ9g2K5%2B8Ok2PvbJrkUWMxA3xA8NnR6Ntsdmg66a%2B7HUJDPPJefBZJ4fX%2BK1C6GcImtcBxfLpraVT4mdrhH%2FEnfRoTYEiIrFtBV9reV4yAyvRRFmCy9PriWVw2o7LeEFeOcRRJ8psrsTn3nai7I4kkPWnBpQTeXbTt7Dzt%2B58iCbcUV%2BbyOXvi6eg6%2FyRMD50PxaVV8LSSijjDUNx1%2FwYqLwa4Sx7PsQ%2FotjJ3CmdlXz%2F2M%2BHO74UGPnOGVSP2%2Fa3BmFe027W7e3ednH6etig%2Bvm96c3tg%2FA4uey%2BPZmvmPml464bF2UzzsQ5I4QaIwa0GD5NEbphYGFBPAc7yo8BNLOrqqzGyfN5HvHBFL1KI5JffRXBt1yQV675yoEJsD5naDT9oUezwru8omsqckcrbIFUl3i8%2B0CMJTCxCgD57qsyxLvsGLv6MyKdrVBrWM6hihfLuz6GucRUPB2gFqcmd0TZRcyKZhEs207zo%2B3LNJwHPanJOzzDUsD%2BFKLDHVaMO247MIGOqUB7Zs6s2eD7UQTnDZjDV1BeYbD6RFtbF7K1odiCarP0p5G2XwIaNHXtzzQkNNrdMrJChigakPmk5g7JvDlFt7iUEzBnBKLX60jO8Y7LYqYjBTsbsBNznOwF56I%2FKiis8iv4eTYdRXqQsvhCCgTPXMF8M51s0wKeRSCngZaURFYaHFK4MNOQ3IsstwC2LxMnkaFfw2UbvZ%2Bi1jUEvCy328mkt2741A%2F&X-Amz-Signature=3232a5179e880bb6ff1c7235954c0863ebdef1a661a0a099c281257ab5ad2bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
