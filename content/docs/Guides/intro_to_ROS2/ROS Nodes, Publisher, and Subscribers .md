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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IQ2PIE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVU47yMPNzq6vz5q%2Bc%2BYe7CCkxeZayl4JyCGgd2ZIBAIhALS%2F%2FHP7YjM5nXKc2YQ5nX1JUX6tBgx%2FQmyOpdZ731wFKv8DCDMQABoMNjM3NDIzMTgzODA1IgxIJjfCWYCtIATy6nYq3APktRCxvIR1CRDje6rSy22rSBV70dpTHl0pplxi1nJcjzxZWJX0ONip3T1pPLuxH0TDXqdfklTZDOKJxnAId7poqPoegFoxgKFQlOyBvi7W8bkal4xAib9MYhoVAzr3HLMvevYFFfcOIT%2BNKU%2BuixVSICN8dHOFvGAhin9ijKQgx6o9lXmKvKarmgtiSDgsT6%2BeypUMP8A4cUXejQPaXfJ4wTfeAMxVXjEi%2BHL6bwvNGmXqQb7lL7Y%2FnERvHYrDOG4ntRbymrAudsNY0hqT8txekN9fCO%2FfiCYOqVjxXbBbalppNYutwxgFtOBH9ooQbJrMIFwq4fz0HtY1zzZLiX34flgWnJL15%2BNqpkUfkjirG%2Btd82A9W5CS3cj%2BjsKTPcDKmL%2FCslZ83UIefnjN%2B%2FC57FPLVpvEviw5GQXWPEFXgCuJiy2SZ3FS3HK4kU3HDsI%2BoZLFec67WI1WZlEs0E%2FoDVMsRvG%2Ff39b4nOUvPTGhlCWmGBO63a10ErKFZtRqTF%2FEXwtnZvkhZvoBiHVM1Vp35gHVO40diROjbN4WypO7Pi3z1pxLrV2Gc9ywNUsQP4iFp5pT7Kk76%2By9jiLMLEBT59yq8yYGdx6sMjXFPEKTHY%2BRXfUl9piJiwgHDDc%2BuPABjqkAWnQ6Xtt7S5GnyN6K0qBG5JSWWpBkFrOsBot2qv%2FtfkKGCCH%2FFcRsbXxOUbzNee1oCJrer3j46zSnjn4T3ZogKJkZJ2pxfDG7EFGS4zNCex86nJvuDDALcIdy1rNqpNCmmktGTeRSsYBCKZerXS02%2B4HY44hagm5pVQUe6cdsyK9lysiQe%2BRiWQ86Qrhvt%2Fa%2B7%2FZm2bOCj9FQILXkBVVblEVUrmd&X-Amz-Signature=334246f3da752042739559e04d9753f44ba6b5cf2fbc73211523dada35ae45b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IQ2PIE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVU47yMPNzq6vz5q%2Bc%2BYe7CCkxeZayl4JyCGgd2ZIBAIhALS%2F%2FHP7YjM5nXKc2YQ5nX1JUX6tBgx%2FQmyOpdZ731wFKv8DCDMQABoMNjM3NDIzMTgzODA1IgxIJjfCWYCtIATy6nYq3APktRCxvIR1CRDje6rSy22rSBV70dpTHl0pplxi1nJcjzxZWJX0ONip3T1pPLuxH0TDXqdfklTZDOKJxnAId7poqPoegFoxgKFQlOyBvi7W8bkal4xAib9MYhoVAzr3HLMvevYFFfcOIT%2BNKU%2BuixVSICN8dHOFvGAhin9ijKQgx6o9lXmKvKarmgtiSDgsT6%2BeypUMP8A4cUXejQPaXfJ4wTfeAMxVXjEi%2BHL6bwvNGmXqQb7lL7Y%2FnERvHYrDOG4ntRbymrAudsNY0hqT8txekN9fCO%2FfiCYOqVjxXbBbalppNYutwxgFtOBH9ooQbJrMIFwq4fz0HtY1zzZLiX34flgWnJL15%2BNqpkUfkjirG%2Btd82A9W5CS3cj%2BjsKTPcDKmL%2FCslZ83UIefnjN%2B%2FC57FPLVpvEviw5GQXWPEFXgCuJiy2SZ3FS3HK4kU3HDsI%2BoZLFec67WI1WZlEs0E%2FoDVMsRvG%2Ff39b4nOUvPTGhlCWmGBO63a10ErKFZtRqTF%2FEXwtnZvkhZvoBiHVM1Vp35gHVO40diROjbN4WypO7Pi3z1pxLrV2Gc9ywNUsQP4iFp5pT7Kk76%2By9jiLMLEBT59yq8yYGdx6sMjXFPEKTHY%2BRXfUl9piJiwgHDDc%2BuPABjqkAWnQ6Xtt7S5GnyN6K0qBG5JSWWpBkFrOsBot2qv%2FtfkKGCCH%2FFcRsbXxOUbzNee1oCJrer3j46zSnjn4T3ZogKJkZJ2pxfDG7EFGS4zNCex86nJvuDDALcIdy1rNqpNCmmktGTeRSsYBCKZerXS02%2B4HY44hagm5pVQUe6cdsyK9lysiQe%2BRiWQ86Qrhvt%2Fa%2B7%2FZm2bOCj9FQILXkBVVblEVUrmd&X-Amz-Signature=7aa09da15082675cc6d59b44150d6095c32bfeb9c2e9aaf8d74ab3b6f9fcd0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IQ2PIE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVU47yMPNzq6vz5q%2Bc%2BYe7CCkxeZayl4JyCGgd2ZIBAIhALS%2F%2FHP7YjM5nXKc2YQ5nX1JUX6tBgx%2FQmyOpdZ731wFKv8DCDMQABoMNjM3NDIzMTgzODA1IgxIJjfCWYCtIATy6nYq3APktRCxvIR1CRDje6rSy22rSBV70dpTHl0pplxi1nJcjzxZWJX0ONip3T1pPLuxH0TDXqdfklTZDOKJxnAId7poqPoegFoxgKFQlOyBvi7W8bkal4xAib9MYhoVAzr3HLMvevYFFfcOIT%2BNKU%2BuixVSICN8dHOFvGAhin9ijKQgx6o9lXmKvKarmgtiSDgsT6%2BeypUMP8A4cUXejQPaXfJ4wTfeAMxVXjEi%2BHL6bwvNGmXqQb7lL7Y%2FnERvHYrDOG4ntRbymrAudsNY0hqT8txekN9fCO%2FfiCYOqVjxXbBbalppNYutwxgFtOBH9ooQbJrMIFwq4fz0HtY1zzZLiX34flgWnJL15%2BNqpkUfkjirG%2Btd82A9W5CS3cj%2BjsKTPcDKmL%2FCslZ83UIefnjN%2B%2FC57FPLVpvEviw5GQXWPEFXgCuJiy2SZ3FS3HK4kU3HDsI%2BoZLFec67WI1WZlEs0E%2FoDVMsRvG%2Ff39b4nOUvPTGhlCWmGBO63a10ErKFZtRqTF%2FEXwtnZvkhZvoBiHVM1Vp35gHVO40diROjbN4WypO7Pi3z1pxLrV2Gc9ywNUsQP4iFp5pT7Kk76%2By9jiLMLEBT59yq8yYGdx6sMjXFPEKTHY%2BRXfUl9piJiwgHDDc%2BuPABjqkAWnQ6Xtt7S5GnyN6K0qBG5JSWWpBkFrOsBot2qv%2FtfkKGCCH%2FFcRsbXxOUbzNee1oCJrer3j46zSnjn4T3ZogKJkZJ2pxfDG7EFGS4zNCex86nJvuDDALcIdy1rNqpNCmmktGTeRSsYBCKZerXS02%2B4HY44hagm5pVQUe6cdsyK9lysiQe%2BRiWQ86Qrhvt%2Fa%2B7%2FZm2bOCj9FQILXkBVVblEVUrmd&X-Amz-Signature=ec358e9f50017b0e31118e5475cdc06bd68d037a896ab3b76652400155b29823&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IQ2PIE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVU47yMPNzq6vz5q%2Bc%2BYe7CCkxeZayl4JyCGgd2ZIBAIhALS%2F%2FHP7YjM5nXKc2YQ5nX1JUX6tBgx%2FQmyOpdZ731wFKv8DCDMQABoMNjM3NDIzMTgzODA1IgxIJjfCWYCtIATy6nYq3APktRCxvIR1CRDje6rSy22rSBV70dpTHl0pplxi1nJcjzxZWJX0ONip3T1pPLuxH0TDXqdfklTZDOKJxnAId7poqPoegFoxgKFQlOyBvi7W8bkal4xAib9MYhoVAzr3HLMvevYFFfcOIT%2BNKU%2BuixVSICN8dHOFvGAhin9ijKQgx6o9lXmKvKarmgtiSDgsT6%2BeypUMP8A4cUXejQPaXfJ4wTfeAMxVXjEi%2BHL6bwvNGmXqQb7lL7Y%2FnERvHYrDOG4ntRbymrAudsNY0hqT8txekN9fCO%2FfiCYOqVjxXbBbalppNYutwxgFtOBH9ooQbJrMIFwq4fz0HtY1zzZLiX34flgWnJL15%2BNqpkUfkjirG%2Btd82A9W5CS3cj%2BjsKTPcDKmL%2FCslZ83UIefnjN%2B%2FC57FPLVpvEviw5GQXWPEFXgCuJiy2SZ3FS3HK4kU3HDsI%2BoZLFec67WI1WZlEs0E%2FoDVMsRvG%2Ff39b4nOUvPTGhlCWmGBO63a10ErKFZtRqTF%2FEXwtnZvkhZvoBiHVM1Vp35gHVO40diROjbN4WypO7Pi3z1pxLrV2Gc9ywNUsQP4iFp5pT7Kk76%2By9jiLMLEBT59yq8yYGdx6sMjXFPEKTHY%2BRXfUl9piJiwgHDDc%2BuPABjqkAWnQ6Xtt7S5GnyN6K0qBG5JSWWpBkFrOsBot2qv%2FtfkKGCCH%2FFcRsbXxOUbzNee1oCJrer3j46zSnjn4T3ZogKJkZJ2pxfDG7EFGS4zNCex86nJvuDDALcIdy1rNqpNCmmktGTeRSsYBCKZerXS02%2B4HY44hagm5pVQUe6cdsyK9lysiQe%2BRiWQ86Qrhvt%2Fa%2B7%2FZm2bOCj9FQILXkBVVblEVUrmd&X-Amz-Signature=2673524f4a1e407c30ca61fc94347cd48c84f6e5a9b11d5493278236f880b3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IQ2PIE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVU47yMPNzq6vz5q%2Bc%2BYe7CCkxeZayl4JyCGgd2ZIBAIhALS%2F%2FHP7YjM5nXKc2YQ5nX1JUX6tBgx%2FQmyOpdZ731wFKv8DCDMQABoMNjM3NDIzMTgzODA1IgxIJjfCWYCtIATy6nYq3APktRCxvIR1CRDje6rSy22rSBV70dpTHl0pplxi1nJcjzxZWJX0ONip3T1pPLuxH0TDXqdfklTZDOKJxnAId7poqPoegFoxgKFQlOyBvi7W8bkal4xAib9MYhoVAzr3HLMvevYFFfcOIT%2BNKU%2BuixVSICN8dHOFvGAhin9ijKQgx6o9lXmKvKarmgtiSDgsT6%2BeypUMP8A4cUXejQPaXfJ4wTfeAMxVXjEi%2BHL6bwvNGmXqQb7lL7Y%2FnERvHYrDOG4ntRbymrAudsNY0hqT8txekN9fCO%2FfiCYOqVjxXbBbalppNYutwxgFtOBH9ooQbJrMIFwq4fz0HtY1zzZLiX34flgWnJL15%2BNqpkUfkjirG%2Btd82A9W5CS3cj%2BjsKTPcDKmL%2FCslZ83UIefnjN%2B%2FC57FPLVpvEviw5GQXWPEFXgCuJiy2SZ3FS3HK4kU3HDsI%2BoZLFec67WI1WZlEs0E%2FoDVMsRvG%2Ff39b4nOUvPTGhlCWmGBO63a10ErKFZtRqTF%2FEXwtnZvkhZvoBiHVM1Vp35gHVO40diROjbN4WypO7Pi3z1pxLrV2Gc9ywNUsQP4iFp5pT7Kk76%2By9jiLMLEBT59yq8yYGdx6sMjXFPEKTHY%2BRXfUl9piJiwgHDDc%2BuPABjqkAWnQ6Xtt7S5GnyN6K0qBG5JSWWpBkFrOsBot2qv%2FtfkKGCCH%2FFcRsbXxOUbzNee1oCJrer3j46zSnjn4T3ZogKJkZJ2pxfDG7EFGS4zNCex86nJvuDDALcIdy1rNqpNCmmktGTeRSsYBCKZerXS02%2B4HY44hagm5pVQUe6cdsyK9lysiQe%2BRiWQ86Qrhvt%2Fa%2B7%2FZm2bOCj9FQILXkBVVblEVUrmd&X-Amz-Signature=38af36f352e12e0b123ba67a6dc44457cc72a8ce17f175b517249b8a98bb6ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IQ2PIE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVU47yMPNzq6vz5q%2Bc%2BYe7CCkxeZayl4JyCGgd2ZIBAIhALS%2F%2FHP7YjM5nXKc2YQ5nX1JUX6tBgx%2FQmyOpdZ731wFKv8DCDMQABoMNjM3NDIzMTgzODA1IgxIJjfCWYCtIATy6nYq3APktRCxvIR1CRDje6rSy22rSBV70dpTHl0pplxi1nJcjzxZWJX0ONip3T1pPLuxH0TDXqdfklTZDOKJxnAId7poqPoegFoxgKFQlOyBvi7W8bkal4xAib9MYhoVAzr3HLMvevYFFfcOIT%2BNKU%2BuixVSICN8dHOFvGAhin9ijKQgx6o9lXmKvKarmgtiSDgsT6%2BeypUMP8A4cUXejQPaXfJ4wTfeAMxVXjEi%2BHL6bwvNGmXqQb7lL7Y%2FnERvHYrDOG4ntRbymrAudsNY0hqT8txekN9fCO%2FfiCYOqVjxXbBbalppNYutwxgFtOBH9ooQbJrMIFwq4fz0HtY1zzZLiX34flgWnJL15%2BNqpkUfkjirG%2Btd82A9W5CS3cj%2BjsKTPcDKmL%2FCslZ83UIefnjN%2B%2FC57FPLVpvEviw5GQXWPEFXgCuJiy2SZ3FS3HK4kU3HDsI%2BoZLFec67WI1WZlEs0E%2FoDVMsRvG%2Ff39b4nOUvPTGhlCWmGBO63a10ErKFZtRqTF%2FEXwtnZvkhZvoBiHVM1Vp35gHVO40diROjbN4WypO7Pi3z1pxLrV2Gc9ywNUsQP4iFp5pT7Kk76%2By9jiLMLEBT59yq8yYGdx6sMjXFPEKTHY%2BRXfUl9piJiwgHDDc%2BuPABjqkAWnQ6Xtt7S5GnyN6K0qBG5JSWWpBkFrOsBot2qv%2FtfkKGCCH%2FFcRsbXxOUbzNee1oCJrer3j46zSnjn4T3ZogKJkZJ2pxfDG7EFGS4zNCex86nJvuDDALcIdy1rNqpNCmmktGTeRSsYBCKZerXS02%2B4HY44hagm5pVQUe6cdsyK9lysiQe%2BRiWQ86Qrhvt%2Fa%2B7%2FZm2bOCj9FQILXkBVVblEVUrmd&X-Amz-Signature=3da0bf4a679820f51351b9b316cda20217e6ecbdcde022d1c1635c256e943010&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IQ2PIE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVU47yMPNzq6vz5q%2Bc%2BYe7CCkxeZayl4JyCGgd2ZIBAIhALS%2F%2FHP7YjM5nXKc2YQ5nX1JUX6tBgx%2FQmyOpdZ731wFKv8DCDMQABoMNjM3NDIzMTgzODA1IgxIJjfCWYCtIATy6nYq3APktRCxvIR1CRDje6rSy22rSBV70dpTHl0pplxi1nJcjzxZWJX0ONip3T1pPLuxH0TDXqdfklTZDOKJxnAId7poqPoegFoxgKFQlOyBvi7W8bkal4xAib9MYhoVAzr3HLMvevYFFfcOIT%2BNKU%2BuixVSICN8dHOFvGAhin9ijKQgx6o9lXmKvKarmgtiSDgsT6%2BeypUMP8A4cUXejQPaXfJ4wTfeAMxVXjEi%2BHL6bwvNGmXqQb7lL7Y%2FnERvHYrDOG4ntRbymrAudsNY0hqT8txekN9fCO%2FfiCYOqVjxXbBbalppNYutwxgFtOBH9ooQbJrMIFwq4fz0HtY1zzZLiX34flgWnJL15%2BNqpkUfkjirG%2Btd82A9W5CS3cj%2BjsKTPcDKmL%2FCslZ83UIefnjN%2B%2FC57FPLVpvEviw5GQXWPEFXgCuJiy2SZ3FS3HK4kU3HDsI%2BoZLFec67WI1WZlEs0E%2FoDVMsRvG%2Ff39b4nOUvPTGhlCWmGBO63a10ErKFZtRqTF%2FEXwtnZvkhZvoBiHVM1Vp35gHVO40diROjbN4WypO7Pi3z1pxLrV2Gc9ywNUsQP4iFp5pT7Kk76%2By9jiLMLEBT59yq8yYGdx6sMjXFPEKTHY%2BRXfUl9piJiwgHDDc%2BuPABjqkAWnQ6Xtt7S5GnyN6K0qBG5JSWWpBkFrOsBot2qv%2FtfkKGCCH%2FFcRsbXxOUbzNee1oCJrer3j46zSnjn4T3ZogKJkZJ2pxfDG7EFGS4zNCex86nJvuDDALcIdy1rNqpNCmmktGTeRSsYBCKZerXS02%2B4HY44hagm5pVQUe6cdsyK9lysiQe%2BRiWQ86Qrhvt%2Fa%2B7%2FZm2bOCj9FQILXkBVVblEVUrmd&X-Amz-Signature=f20d3dbf3a69c9f706396dd9042d77c97d5fb6d178755388f2dcdbbb988de612&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IQ2PIE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVU47yMPNzq6vz5q%2Bc%2BYe7CCkxeZayl4JyCGgd2ZIBAIhALS%2F%2FHP7YjM5nXKc2YQ5nX1JUX6tBgx%2FQmyOpdZ731wFKv8DCDMQABoMNjM3NDIzMTgzODA1IgxIJjfCWYCtIATy6nYq3APktRCxvIR1CRDje6rSy22rSBV70dpTHl0pplxi1nJcjzxZWJX0ONip3T1pPLuxH0TDXqdfklTZDOKJxnAId7poqPoegFoxgKFQlOyBvi7W8bkal4xAib9MYhoVAzr3HLMvevYFFfcOIT%2BNKU%2BuixVSICN8dHOFvGAhin9ijKQgx6o9lXmKvKarmgtiSDgsT6%2BeypUMP8A4cUXejQPaXfJ4wTfeAMxVXjEi%2BHL6bwvNGmXqQb7lL7Y%2FnERvHYrDOG4ntRbymrAudsNY0hqT8txekN9fCO%2FfiCYOqVjxXbBbalppNYutwxgFtOBH9ooQbJrMIFwq4fz0HtY1zzZLiX34flgWnJL15%2BNqpkUfkjirG%2Btd82A9W5CS3cj%2BjsKTPcDKmL%2FCslZ83UIefnjN%2B%2FC57FPLVpvEviw5GQXWPEFXgCuJiy2SZ3FS3HK4kU3HDsI%2BoZLFec67WI1WZlEs0E%2FoDVMsRvG%2Ff39b4nOUvPTGhlCWmGBO63a10ErKFZtRqTF%2FEXwtnZvkhZvoBiHVM1Vp35gHVO40diROjbN4WypO7Pi3z1pxLrV2Gc9ywNUsQP4iFp5pT7Kk76%2By9jiLMLEBT59yq8yYGdx6sMjXFPEKTHY%2BRXfUl9piJiwgHDDc%2BuPABjqkAWnQ6Xtt7S5GnyN6K0qBG5JSWWpBkFrOsBot2qv%2FtfkKGCCH%2FFcRsbXxOUbzNee1oCJrer3j46zSnjn4T3ZogKJkZJ2pxfDG7EFGS4zNCex86nJvuDDALcIdy1rNqpNCmmktGTeRSsYBCKZerXS02%2B4HY44hagm5pVQUe6cdsyK9lysiQe%2BRiWQ86Qrhvt%2Fa%2B7%2FZm2bOCj9FQILXkBVVblEVUrmd&X-Amz-Signature=4c2153f56d3099662c1bc83c927ac3dcb0abce94c3fe4b30d0dd37ef20f1c1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
