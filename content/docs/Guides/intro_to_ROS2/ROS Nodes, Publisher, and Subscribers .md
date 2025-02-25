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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVB7YZ6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsODbbf0h770tqTMPDFnpqGrkKcQ5eesft7olctVrLhwIhAKREhC%2Fb0K72zvGk3Btwbwy9Dcej12j1JYR5%2BxsEL%2FRYKv8DCEEQABoMNjM3NDIzMTgzODA1Igw%2BHIzhCxuKpGTakUMq3AMr2QmYMIXRUSuUyZM%2FaAl520sEW6jU%2B4rgc4VXT5Aq8emYRQsd11zMK3XAbFrv%2BRfE2fM3M33G2cfVHi4KEkIh4hUScbN0bFk9VuPlpl%2FZ2koPIobWyC2EZxRfBCmgRWr7n7H80lpgfQojmH1SddwY38nsC8nSDMMCd4IUfjhI2IbXut77zzoH%2BAmR7tvV9A8U6HJZbEz2uYUR1ZlmsOxstLlJY%2B5pkke%2Fs9%2FsRQauu5nwSdNWJtQzxI8czHnuysUqJQvDJIdkZs5HAp%2ByragMK%2B7Fs%2F1Ot0oU3i27g1WfwUKXJ9oscvp3BtD1BwXX8A7Y3wjVDbAej1v8sV3rHFZAobZnENfjKMEYVXVCGsuTRvDP2nfkM0SQZA3OTlLsCIaEvBEW6jmoIm5sKfQZ7dZIz2uOBDlXKCGRT5Ph4I6BQ9I5rs%2BKPT32%2FkU1u1QDk%2BrS5R6fbMTj0M%2Bxn33h5PDOOpZ9nFHp5NrmiF6JGziFPC9IfRUI8uo74coreJPE%2B20UDrE8SWPRW6EjaoSV2JoS98t0WueELa77xo39TzvRfd0siaaziAPRw0dkfFiPK7N%2Fr3%2Bcw9piwvMqxfKE6h6F21ILZ4qQj%2BFyGQRWpkLcrEq%2BdIy7EsDyVVg9FDCA6fW9BjqkAVsqBtJ9vZscKnSqsvy6pTpTC4dc%2Bn6J%2F5GWXMutpnozlXcfOyZazy4%2F9s4cG0VjcTDJXlVk445f9vYnqHeK0X1c0dwm5bbR0yEKEVilwKKiWoZ%2Bdd%2B6XnQ5ZFMzeEoI68fSWGZH3DayKI%2BphwDtcZVhscYRpdg1dug9WDUt9pv29WcYG3a21WRoR6%2BkLQI1ZWcmyO2yR46zHxDl9wr39r4p70Jb&X-Amz-Signature=a3da3b4ab21f0265ef1307ab684657139d870ad5b5ddaac91a619b1a50c92350&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVB7YZ6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsODbbf0h770tqTMPDFnpqGrkKcQ5eesft7olctVrLhwIhAKREhC%2Fb0K72zvGk3Btwbwy9Dcej12j1JYR5%2BxsEL%2FRYKv8DCEEQABoMNjM3NDIzMTgzODA1Igw%2BHIzhCxuKpGTakUMq3AMr2QmYMIXRUSuUyZM%2FaAl520sEW6jU%2B4rgc4VXT5Aq8emYRQsd11zMK3XAbFrv%2BRfE2fM3M33G2cfVHi4KEkIh4hUScbN0bFk9VuPlpl%2FZ2koPIobWyC2EZxRfBCmgRWr7n7H80lpgfQojmH1SddwY38nsC8nSDMMCd4IUfjhI2IbXut77zzoH%2BAmR7tvV9A8U6HJZbEz2uYUR1ZlmsOxstLlJY%2B5pkke%2Fs9%2FsRQauu5nwSdNWJtQzxI8czHnuysUqJQvDJIdkZs5HAp%2ByragMK%2B7Fs%2F1Ot0oU3i27g1WfwUKXJ9oscvp3BtD1BwXX8A7Y3wjVDbAej1v8sV3rHFZAobZnENfjKMEYVXVCGsuTRvDP2nfkM0SQZA3OTlLsCIaEvBEW6jmoIm5sKfQZ7dZIz2uOBDlXKCGRT5Ph4I6BQ9I5rs%2BKPT32%2FkU1u1QDk%2BrS5R6fbMTj0M%2Bxn33h5PDOOpZ9nFHp5NrmiF6JGziFPC9IfRUI8uo74coreJPE%2B20UDrE8SWPRW6EjaoSV2JoS98t0WueELa77xo39TzvRfd0siaaziAPRw0dkfFiPK7N%2Fr3%2Bcw9piwvMqxfKE6h6F21ILZ4qQj%2BFyGQRWpkLcrEq%2BdIy7EsDyVVg9FDCA6fW9BjqkAVsqBtJ9vZscKnSqsvy6pTpTC4dc%2Bn6J%2F5GWXMutpnozlXcfOyZazy4%2F9s4cG0VjcTDJXlVk445f9vYnqHeK0X1c0dwm5bbR0yEKEVilwKKiWoZ%2Bdd%2B6XnQ5ZFMzeEoI68fSWGZH3DayKI%2BphwDtcZVhscYRpdg1dug9WDUt9pv29WcYG3a21WRoR6%2BkLQI1ZWcmyO2yR46zHxDl9wr39r4p70Jb&X-Amz-Signature=72344ab99e26030c8b7aa1d6d611b6d48ccb0c69ff64247a2be34216fe804acd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVB7YZ6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsODbbf0h770tqTMPDFnpqGrkKcQ5eesft7olctVrLhwIhAKREhC%2Fb0K72zvGk3Btwbwy9Dcej12j1JYR5%2BxsEL%2FRYKv8DCEEQABoMNjM3NDIzMTgzODA1Igw%2BHIzhCxuKpGTakUMq3AMr2QmYMIXRUSuUyZM%2FaAl520sEW6jU%2B4rgc4VXT5Aq8emYRQsd11zMK3XAbFrv%2BRfE2fM3M33G2cfVHi4KEkIh4hUScbN0bFk9VuPlpl%2FZ2koPIobWyC2EZxRfBCmgRWr7n7H80lpgfQojmH1SddwY38nsC8nSDMMCd4IUfjhI2IbXut77zzoH%2BAmR7tvV9A8U6HJZbEz2uYUR1ZlmsOxstLlJY%2B5pkke%2Fs9%2FsRQauu5nwSdNWJtQzxI8czHnuysUqJQvDJIdkZs5HAp%2ByragMK%2B7Fs%2F1Ot0oU3i27g1WfwUKXJ9oscvp3BtD1BwXX8A7Y3wjVDbAej1v8sV3rHFZAobZnENfjKMEYVXVCGsuTRvDP2nfkM0SQZA3OTlLsCIaEvBEW6jmoIm5sKfQZ7dZIz2uOBDlXKCGRT5Ph4I6BQ9I5rs%2BKPT32%2FkU1u1QDk%2BrS5R6fbMTj0M%2Bxn33h5PDOOpZ9nFHp5NrmiF6JGziFPC9IfRUI8uo74coreJPE%2B20UDrE8SWPRW6EjaoSV2JoS98t0WueELa77xo39TzvRfd0siaaziAPRw0dkfFiPK7N%2Fr3%2Bcw9piwvMqxfKE6h6F21ILZ4qQj%2BFyGQRWpkLcrEq%2BdIy7EsDyVVg9FDCA6fW9BjqkAVsqBtJ9vZscKnSqsvy6pTpTC4dc%2Bn6J%2F5GWXMutpnozlXcfOyZazy4%2F9s4cG0VjcTDJXlVk445f9vYnqHeK0X1c0dwm5bbR0yEKEVilwKKiWoZ%2Bdd%2B6XnQ5ZFMzeEoI68fSWGZH3DayKI%2BphwDtcZVhscYRpdg1dug9WDUt9pv29WcYG3a21WRoR6%2BkLQI1ZWcmyO2yR46zHxDl9wr39r4p70Jb&X-Amz-Signature=b66a1b47e97e604cc4f7eafe7b6e52c53bf2c1f1274e2a83420a25cdabc7e35b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVB7YZ6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsODbbf0h770tqTMPDFnpqGrkKcQ5eesft7olctVrLhwIhAKREhC%2Fb0K72zvGk3Btwbwy9Dcej12j1JYR5%2BxsEL%2FRYKv8DCEEQABoMNjM3NDIzMTgzODA1Igw%2BHIzhCxuKpGTakUMq3AMr2QmYMIXRUSuUyZM%2FaAl520sEW6jU%2B4rgc4VXT5Aq8emYRQsd11zMK3XAbFrv%2BRfE2fM3M33G2cfVHi4KEkIh4hUScbN0bFk9VuPlpl%2FZ2koPIobWyC2EZxRfBCmgRWr7n7H80lpgfQojmH1SddwY38nsC8nSDMMCd4IUfjhI2IbXut77zzoH%2BAmR7tvV9A8U6HJZbEz2uYUR1ZlmsOxstLlJY%2B5pkke%2Fs9%2FsRQauu5nwSdNWJtQzxI8czHnuysUqJQvDJIdkZs5HAp%2ByragMK%2B7Fs%2F1Ot0oU3i27g1WfwUKXJ9oscvp3BtD1BwXX8A7Y3wjVDbAej1v8sV3rHFZAobZnENfjKMEYVXVCGsuTRvDP2nfkM0SQZA3OTlLsCIaEvBEW6jmoIm5sKfQZ7dZIz2uOBDlXKCGRT5Ph4I6BQ9I5rs%2BKPT32%2FkU1u1QDk%2BrS5R6fbMTj0M%2Bxn33h5PDOOpZ9nFHp5NrmiF6JGziFPC9IfRUI8uo74coreJPE%2B20UDrE8SWPRW6EjaoSV2JoS98t0WueELa77xo39TzvRfd0siaaziAPRw0dkfFiPK7N%2Fr3%2Bcw9piwvMqxfKE6h6F21ILZ4qQj%2BFyGQRWpkLcrEq%2BdIy7EsDyVVg9FDCA6fW9BjqkAVsqBtJ9vZscKnSqsvy6pTpTC4dc%2Bn6J%2F5GWXMutpnozlXcfOyZazy4%2F9s4cG0VjcTDJXlVk445f9vYnqHeK0X1c0dwm5bbR0yEKEVilwKKiWoZ%2Bdd%2B6XnQ5ZFMzeEoI68fSWGZH3DayKI%2BphwDtcZVhscYRpdg1dug9WDUt9pv29WcYG3a21WRoR6%2BkLQI1ZWcmyO2yR46zHxDl9wr39r4p70Jb&X-Amz-Signature=f4ff2cbb0a26eaf4c2d89cc4e2dcb02a30fa527684bf9452304646ec201d2930&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVB7YZ6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsODbbf0h770tqTMPDFnpqGrkKcQ5eesft7olctVrLhwIhAKREhC%2Fb0K72zvGk3Btwbwy9Dcej12j1JYR5%2BxsEL%2FRYKv8DCEEQABoMNjM3NDIzMTgzODA1Igw%2BHIzhCxuKpGTakUMq3AMr2QmYMIXRUSuUyZM%2FaAl520sEW6jU%2B4rgc4VXT5Aq8emYRQsd11zMK3XAbFrv%2BRfE2fM3M33G2cfVHi4KEkIh4hUScbN0bFk9VuPlpl%2FZ2koPIobWyC2EZxRfBCmgRWr7n7H80lpgfQojmH1SddwY38nsC8nSDMMCd4IUfjhI2IbXut77zzoH%2BAmR7tvV9A8U6HJZbEz2uYUR1ZlmsOxstLlJY%2B5pkke%2Fs9%2FsRQauu5nwSdNWJtQzxI8czHnuysUqJQvDJIdkZs5HAp%2ByragMK%2B7Fs%2F1Ot0oU3i27g1WfwUKXJ9oscvp3BtD1BwXX8A7Y3wjVDbAej1v8sV3rHFZAobZnENfjKMEYVXVCGsuTRvDP2nfkM0SQZA3OTlLsCIaEvBEW6jmoIm5sKfQZ7dZIz2uOBDlXKCGRT5Ph4I6BQ9I5rs%2BKPT32%2FkU1u1QDk%2BrS5R6fbMTj0M%2Bxn33h5PDOOpZ9nFHp5NrmiF6JGziFPC9IfRUI8uo74coreJPE%2B20UDrE8SWPRW6EjaoSV2JoS98t0WueELa77xo39TzvRfd0siaaziAPRw0dkfFiPK7N%2Fr3%2Bcw9piwvMqxfKE6h6F21ILZ4qQj%2BFyGQRWpkLcrEq%2BdIy7EsDyVVg9FDCA6fW9BjqkAVsqBtJ9vZscKnSqsvy6pTpTC4dc%2Bn6J%2F5GWXMutpnozlXcfOyZazy4%2F9s4cG0VjcTDJXlVk445f9vYnqHeK0X1c0dwm5bbR0yEKEVilwKKiWoZ%2Bdd%2B6XnQ5ZFMzeEoI68fSWGZH3DayKI%2BphwDtcZVhscYRpdg1dug9WDUt9pv29WcYG3a21WRoR6%2BkLQI1ZWcmyO2yR46zHxDl9wr39r4p70Jb&X-Amz-Signature=478787bf95101b14492a4b77b7902eb663ed6182bf71788c0c355101e1680a15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVB7YZ6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsODbbf0h770tqTMPDFnpqGrkKcQ5eesft7olctVrLhwIhAKREhC%2Fb0K72zvGk3Btwbwy9Dcej12j1JYR5%2BxsEL%2FRYKv8DCEEQABoMNjM3NDIzMTgzODA1Igw%2BHIzhCxuKpGTakUMq3AMr2QmYMIXRUSuUyZM%2FaAl520sEW6jU%2B4rgc4VXT5Aq8emYRQsd11zMK3XAbFrv%2BRfE2fM3M33G2cfVHi4KEkIh4hUScbN0bFk9VuPlpl%2FZ2koPIobWyC2EZxRfBCmgRWr7n7H80lpgfQojmH1SddwY38nsC8nSDMMCd4IUfjhI2IbXut77zzoH%2BAmR7tvV9A8U6HJZbEz2uYUR1ZlmsOxstLlJY%2B5pkke%2Fs9%2FsRQauu5nwSdNWJtQzxI8czHnuysUqJQvDJIdkZs5HAp%2ByragMK%2B7Fs%2F1Ot0oU3i27g1WfwUKXJ9oscvp3BtD1BwXX8A7Y3wjVDbAej1v8sV3rHFZAobZnENfjKMEYVXVCGsuTRvDP2nfkM0SQZA3OTlLsCIaEvBEW6jmoIm5sKfQZ7dZIz2uOBDlXKCGRT5Ph4I6BQ9I5rs%2BKPT32%2FkU1u1QDk%2BrS5R6fbMTj0M%2Bxn33h5PDOOpZ9nFHp5NrmiF6JGziFPC9IfRUI8uo74coreJPE%2B20UDrE8SWPRW6EjaoSV2JoS98t0WueELa77xo39TzvRfd0siaaziAPRw0dkfFiPK7N%2Fr3%2Bcw9piwvMqxfKE6h6F21ILZ4qQj%2BFyGQRWpkLcrEq%2BdIy7EsDyVVg9FDCA6fW9BjqkAVsqBtJ9vZscKnSqsvy6pTpTC4dc%2Bn6J%2F5GWXMutpnozlXcfOyZazy4%2F9s4cG0VjcTDJXlVk445f9vYnqHeK0X1c0dwm5bbR0yEKEVilwKKiWoZ%2Bdd%2B6XnQ5ZFMzeEoI68fSWGZH3DayKI%2BphwDtcZVhscYRpdg1dug9WDUt9pv29WcYG3a21WRoR6%2BkLQI1ZWcmyO2yR46zHxDl9wr39r4p70Jb&X-Amz-Signature=e494bef923c8d658936b2fd2534df6659c0307f5472ea8f49fc2c46c75c3fe95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVB7YZ6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsODbbf0h770tqTMPDFnpqGrkKcQ5eesft7olctVrLhwIhAKREhC%2Fb0K72zvGk3Btwbwy9Dcej12j1JYR5%2BxsEL%2FRYKv8DCEEQABoMNjM3NDIzMTgzODA1Igw%2BHIzhCxuKpGTakUMq3AMr2QmYMIXRUSuUyZM%2FaAl520sEW6jU%2B4rgc4VXT5Aq8emYRQsd11zMK3XAbFrv%2BRfE2fM3M33G2cfVHi4KEkIh4hUScbN0bFk9VuPlpl%2FZ2koPIobWyC2EZxRfBCmgRWr7n7H80lpgfQojmH1SddwY38nsC8nSDMMCd4IUfjhI2IbXut77zzoH%2BAmR7tvV9A8U6HJZbEz2uYUR1ZlmsOxstLlJY%2B5pkke%2Fs9%2FsRQauu5nwSdNWJtQzxI8czHnuysUqJQvDJIdkZs5HAp%2ByragMK%2B7Fs%2F1Ot0oU3i27g1WfwUKXJ9oscvp3BtD1BwXX8A7Y3wjVDbAej1v8sV3rHFZAobZnENfjKMEYVXVCGsuTRvDP2nfkM0SQZA3OTlLsCIaEvBEW6jmoIm5sKfQZ7dZIz2uOBDlXKCGRT5Ph4I6BQ9I5rs%2BKPT32%2FkU1u1QDk%2BrS5R6fbMTj0M%2Bxn33h5PDOOpZ9nFHp5NrmiF6JGziFPC9IfRUI8uo74coreJPE%2B20UDrE8SWPRW6EjaoSV2JoS98t0WueELa77xo39TzvRfd0siaaziAPRw0dkfFiPK7N%2Fr3%2Bcw9piwvMqxfKE6h6F21ILZ4qQj%2BFyGQRWpkLcrEq%2BdIy7EsDyVVg9FDCA6fW9BjqkAVsqBtJ9vZscKnSqsvy6pTpTC4dc%2Bn6J%2F5GWXMutpnozlXcfOyZazy4%2F9s4cG0VjcTDJXlVk445f9vYnqHeK0X1c0dwm5bbR0yEKEVilwKKiWoZ%2Bdd%2B6XnQ5ZFMzeEoI68fSWGZH3DayKI%2BphwDtcZVhscYRpdg1dug9WDUt9pv29WcYG3a21WRoR6%2BkLQI1ZWcmyO2yR46zHxDl9wr39r4p70Jb&X-Amz-Signature=6c43e6498d23c8b5cfbc8d689e8483905350e11893f67825fada753cdd3cfe90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVB7YZ6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCsODbbf0h770tqTMPDFnpqGrkKcQ5eesft7olctVrLhwIhAKREhC%2Fb0K72zvGk3Btwbwy9Dcej12j1JYR5%2BxsEL%2FRYKv8DCEEQABoMNjM3NDIzMTgzODA1Igw%2BHIzhCxuKpGTakUMq3AMr2QmYMIXRUSuUyZM%2FaAl520sEW6jU%2B4rgc4VXT5Aq8emYRQsd11zMK3XAbFrv%2BRfE2fM3M33G2cfVHi4KEkIh4hUScbN0bFk9VuPlpl%2FZ2koPIobWyC2EZxRfBCmgRWr7n7H80lpgfQojmH1SddwY38nsC8nSDMMCd4IUfjhI2IbXut77zzoH%2BAmR7tvV9A8U6HJZbEz2uYUR1ZlmsOxstLlJY%2B5pkke%2Fs9%2FsRQauu5nwSdNWJtQzxI8czHnuysUqJQvDJIdkZs5HAp%2ByragMK%2B7Fs%2F1Ot0oU3i27g1WfwUKXJ9oscvp3BtD1BwXX8A7Y3wjVDbAej1v8sV3rHFZAobZnENfjKMEYVXVCGsuTRvDP2nfkM0SQZA3OTlLsCIaEvBEW6jmoIm5sKfQZ7dZIz2uOBDlXKCGRT5Ph4I6BQ9I5rs%2BKPT32%2FkU1u1QDk%2BrS5R6fbMTj0M%2Bxn33h5PDOOpZ9nFHp5NrmiF6JGziFPC9IfRUI8uo74coreJPE%2B20UDrE8SWPRW6EjaoSV2JoS98t0WueELa77xo39TzvRfd0siaaziAPRw0dkfFiPK7N%2Fr3%2Bcw9piwvMqxfKE6h6F21ILZ4qQj%2BFyGQRWpkLcrEq%2BdIy7EsDyVVg9FDCA6fW9BjqkAVsqBtJ9vZscKnSqsvy6pTpTC4dc%2Bn6J%2F5GWXMutpnozlXcfOyZazy4%2F9s4cG0VjcTDJXlVk445f9vYnqHeK0X1c0dwm5bbR0yEKEVilwKKiWoZ%2Bdd%2B6XnQ5ZFMzeEoI68fSWGZH3DayKI%2BphwDtcZVhscYRpdg1dug9WDUt9pv29WcYG3a21WRoR6%2BkLQI1ZWcmyO2yR46zHxDl9wr39r4p70Jb&X-Amz-Signature=51c000fc9baa58c8c64f489dc2d3009a0c86bb68453828b761a50892af93e743&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
