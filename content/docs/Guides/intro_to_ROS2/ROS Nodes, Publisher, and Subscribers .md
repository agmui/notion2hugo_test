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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUMRRX3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxgwkHeB%2FMKWk0640D6ALuEGrRDgTBTNdyW%2FOuxvl5VAiBtuisX7aWX7DCvuvtDNCiWUq5a9xq7dqtgraostVeS2yqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQL7D%2BwcLY91ZFumKtwDY2X1Qaw56HnaE7GeyUsHdM91Zlh6scf5Uv2iWaPEn3L%2FnBIUAFfLAI3Zm%2BMArrwBoza8vCKF7l92YhC%2Ba3oBfNqeRvf%2BExv8fL0%2BFm%2FBG%2BJM7%2BHfD0StB2x624U0x6qSrdrqrhw1drLGzC9ZEx4HGWJ%2B7m%2FETCIb8F%2F%2FaB%2FcScbrLt%2Fn1vMEyivSq6iSX5n9eZBSSQjjCQNZeZTB7EXg84ln74n0jfV3mxlYqlpR8rzFvST22nj4HTwLBjfY%2BbZEAGA8JO2O9uaJAv5xFh3n5eSQw%2FH1o5tWZP0E5ttfOFXKEFavUbc4%2F47K6uqnxy2pm%2B8wJ6WRVJhkArSd8CzUngzBGQbPXs38O0J4LJs1gMCOET1ErFasK7rBt7CXEc%2BWgmunubJ3gWb0dHjAGtcTgrE8ZuBrnumjXPRjakmTaUDj0CFH%2Ftf3H8nLNM1OESEUVZyere69Wp0AYWJBU6Sd1WoEKVxDDlcuzNHma66yG7G75W%2FDwVDJ1okR14E%2FEEYJZE2SRoOCpVrzJhUlG9ffese1%2Bgh%2B4kB8H7NdErZ47z7GCy95%2FrEiITU3d%2FrBXBKCnLayEWaBrowlnAlyUR4QodCcYkntCyr25alsNEzIuL3RBhKBbLsMyCntEs0wiuKXwgY6pgGeEvbWrPzVvrU6EATu4w6Heg7sxe%2BevJ5NTcOuRbXS2gCePDTsJeMu1%2BstKFowY9s9cQw4XxXIhr1aR7J0rYsk%2FScBwStFHN%2B7iqs7jAbAJBvdWTi2ZO7z%2Fy2s5uJl5sY1h0E3gA63RJ4VLFVKAJosnI2xME%2BFLzNHs%2F8TxN%2Fc7H67YZVRoesHhdXHiQGSFK4jOGzbcz6l6AcXIOanpnOBCtyt9tdS&X-Amz-Signature=07ffec2dace3b10eb731d080171e6c3a0fcbc27fdcf676f9f5ac12ff557a1fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUMRRX3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxgwkHeB%2FMKWk0640D6ALuEGrRDgTBTNdyW%2FOuxvl5VAiBtuisX7aWX7DCvuvtDNCiWUq5a9xq7dqtgraostVeS2yqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQL7D%2BwcLY91ZFumKtwDY2X1Qaw56HnaE7GeyUsHdM91Zlh6scf5Uv2iWaPEn3L%2FnBIUAFfLAI3Zm%2BMArrwBoza8vCKF7l92YhC%2Ba3oBfNqeRvf%2BExv8fL0%2BFm%2FBG%2BJM7%2BHfD0StB2x624U0x6qSrdrqrhw1drLGzC9ZEx4HGWJ%2B7m%2FETCIb8F%2F%2FaB%2FcScbrLt%2Fn1vMEyivSq6iSX5n9eZBSSQjjCQNZeZTB7EXg84ln74n0jfV3mxlYqlpR8rzFvST22nj4HTwLBjfY%2BbZEAGA8JO2O9uaJAv5xFh3n5eSQw%2FH1o5tWZP0E5ttfOFXKEFavUbc4%2F47K6uqnxy2pm%2B8wJ6WRVJhkArSd8CzUngzBGQbPXs38O0J4LJs1gMCOET1ErFasK7rBt7CXEc%2BWgmunubJ3gWb0dHjAGtcTgrE8ZuBrnumjXPRjakmTaUDj0CFH%2Ftf3H8nLNM1OESEUVZyere69Wp0AYWJBU6Sd1WoEKVxDDlcuzNHma66yG7G75W%2FDwVDJ1okR14E%2FEEYJZE2SRoOCpVrzJhUlG9ffese1%2Bgh%2B4kB8H7NdErZ47z7GCy95%2FrEiITU3d%2FrBXBKCnLayEWaBrowlnAlyUR4QodCcYkntCyr25alsNEzIuL3RBhKBbLsMyCntEs0wiuKXwgY6pgGeEvbWrPzVvrU6EATu4w6Heg7sxe%2BevJ5NTcOuRbXS2gCePDTsJeMu1%2BstKFowY9s9cQw4XxXIhr1aR7J0rYsk%2FScBwStFHN%2B7iqs7jAbAJBvdWTi2ZO7z%2Fy2s5uJl5sY1h0E3gA63RJ4VLFVKAJosnI2xME%2BFLzNHs%2F8TxN%2Fc7H67YZVRoesHhdXHiQGSFK4jOGzbcz6l6AcXIOanpnOBCtyt9tdS&X-Amz-Signature=69c394ced552cbe0d4456a5445e432b9c9322279bc5d5e95b501a5b90b618d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUMRRX3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxgwkHeB%2FMKWk0640D6ALuEGrRDgTBTNdyW%2FOuxvl5VAiBtuisX7aWX7DCvuvtDNCiWUq5a9xq7dqtgraostVeS2yqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQL7D%2BwcLY91ZFumKtwDY2X1Qaw56HnaE7GeyUsHdM91Zlh6scf5Uv2iWaPEn3L%2FnBIUAFfLAI3Zm%2BMArrwBoza8vCKF7l92YhC%2Ba3oBfNqeRvf%2BExv8fL0%2BFm%2FBG%2BJM7%2BHfD0StB2x624U0x6qSrdrqrhw1drLGzC9ZEx4HGWJ%2B7m%2FETCIb8F%2F%2FaB%2FcScbrLt%2Fn1vMEyivSq6iSX5n9eZBSSQjjCQNZeZTB7EXg84ln74n0jfV3mxlYqlpR8rzFvST22nj4HTwLBjfY%2BbZEAGA8JO2O9uaJAv5xFh3n5eSQw%2FH1o5tWZP0E5ttfOFXKEFavUbc4%2F47K6uqnxy2pm%2B8wJ6WRVJhkArSd8CzUngzBGQbPXs38O0J4LJs1gMCOET1ErFasK7rBt7CXEc%2BWgmunubJ3gWb0dHjAGtcTgrE8ZuBrnumjXPRjakmTaUDj0CFH%2Ftf3H8nLNM1OESEUVZyere69Wp0AYWJBU6Sd1WoEKVxDDlcuzNHma66yG7G75W%2FDwVDJ1okR14E%2FEEYJZE2SRoOCpVrzJhUlG9ffese1%2Bgh%2B4kB8H7NdErZ47z7GCy95%2FrEiITU3d%2FrBXBKCnLayEWaBrowlnAlyUR4QodCcYkntCyr25alsNEzIuL3RBhKBbLsMyCntEs0wiuKXwgY6pgGeEvbWrPzVvrU6EATu4w6Heg7sxe%2BevJ5NTcOuRbXS2gCePDTsJeMu1%2BstKFowY9s9cQw4XxXIhr1aR7J0rYsk%2FScBwStFHN%2B7iqs7jAbAJBvdWTi2ZO7z%2Fy2s5uJl5sY1h0E3gA63RJ4VLFVKAJosnI2xME%2BFLzNHs%2F8TxN%2Fc7H67YZVRoesHhdXHiQGSFK4jOGzbcz6l6AcXIOanpnOBCtyt9tdS&X-Amz-Signature=ef9204f845252e091c13ce907c8edff3316b4e3bf852c8a147d18e4acf6dd2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUMRRX3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxgwkHeB%2FMKWk0640D6ALuEGrRDgTBTNdyW%2FOuxvl5VAiBtuisX7aWX7DCvuvtDNCiWUq5a9xq7dqtgraostVeS2yqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQL7D%2BwcLY91ZFumKtwDY2X1Qaw56HnaE7GeyUsHdM91Zlh6scf5Uv2iWaPEn3L%2FnBIUAFfLAI3Zm%2BMArrwBoza8vCKF7l92YhC%2Ba3oBfNqeRvf%2BExv8fL0%2BFm%2FBG%2BJM7%2BHfD0StB2x624U0x6qSrdrqrhw1drLGzC9ZEx4HGWJ%2B7m%2FETCIb8F%2F%2FaB%2FcScbrLt%2Fn1vMEyivSq6iSX5n9eZBSSQjjCQNZeZTB7EXg84ln74n0jfV3mxlYqlpR8rzFvST22nj4HTwLBjfY%2BbZEAGA8JO2O9uaJAv5xFh3n5eSQw%2FH1o5tWZP0E5ttfOFXKEFavUbc4%2F47K6uqnxy2pm%2B8wJ6WRVJhkArSd8CzUngzBGQbPXs38O0J4LJs1gMCOET1ErFasK7rBt7CXEc%2BWgmunubJ3gWb0dHjAGtcTgrE8ZuBrnumjXPRjakmTaUDj0CFH%2Ftf3H8nLNM1OESEUVZyere69Wp0AYWJBU6Sd1WoEKVxDDlcuzNHma66yG7G75W%2FDwVDJ1okR14E%2FEEYJZE2SRoOCpVrzJhUlG9ffese1%2Bgh%2B4kB8H7NdErZ47z7GCy95%2FrEiITU3d%2FrBXBKCnLayEWaBrowlnAlyUR4QodCcYkntCyr25alsNEzIuL3RBhKBbLsMyCntEs0wiuKXwgY6pgGeEvbWrPzVvrU6EATu4w6Heg7sxe%2BevJ5NTcOuRbXS2gCePDTsJeMu1%2BstKFowY9s9cQw4XxXIhr1aR7J0rYsk%2FScBwStFHN%2B7iqs7jAbAJBvdWTi2ZO7z%2Fy2s5uJl5sY1h0E3gA63RJ4VLFVKAJosnI2xME%2BFLzNHs%2F8TxN%2Fc7H67YZVRoesHhdXHiQGSFK4jOGzbcz6l6AcXIOanpnOBCtyt9tdS&X-Amz-Signature=127f48015cd6675ed2d098b462af5975404176c54c7f291ff16768caad32e113&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUMRRX3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxgwkHeB%2FMKWk0640D6ALuEGrRDgTBTNdyW%2FOuxvl5VAiBtuisX7aWX7DCvuvtDNCiWUq5a9xq7dqtgraostVeS2yqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQL7D%2BwcLY91ZFumKtwDY2X1Qaw56HnaE7GeyUsHdM91Zlh6scf5Uv2iWaPEn3L%2FnBIUAFfLAI3Zm%2BMArrwBoza8vCKF7l92YhC%2Ba3oBfNqeRvf%2BExv8fL0%2BFm%2FBG%2BJM7%2BHfD0StB2x624U0x6qSrdrqrhw1drLGzC9ZEx4HGWJ%2B7m%2FETCIb8F%2F%2FaB%2FcScbrLt%2Fn1vMEyivSq6iSX5n9eZBSSQjjCQNZeZTB7EXg84ln74n0jfV3mxlYqlpR8rzFvST22nj4HTwLBjfY%2BbZEAGA8JO2O9uaJAv5xFh3n5eSQw%2FH1o5tWZP0E5ttfOFXKEFavUbc4%2F47K6uqnxy2pm%2B8wJ6WRVJhkArSd8CzUngzBGQbPXs38O0J4LJs1gMCOET1ErFasK7rBt7CXEc%2BWgmunubJ3gWb0dHjAGtcTgrE8ZuBrnumjXPRjakmTaUDj0CFH%2Ftf3H8nLNM1OESEUVZyere69Wp0AYWJBU6Sd1WoEKVxDDlcuzNHma66yG7G75W%2FDwVDJ1okR14E%2FEEYJZE2SRoOCpVrzJhUlG9ffese1%2Bgh%2B4kB8H7NdErZ47z7GCy95%2FrEiITU3d%2FrBXBKCnLayEWaBrowlnAlyUR4QodCcYkntCyr25alsNEzIuL3RBhKBbLsMyCntEs0wiuKXwgY6pgGeEvbWrPzVvrU6EATu4w6Heg7sxe%2BevJ5NTcOuRbXS2gCePDTsJeMu1%2BstKFowY9s9cQw4XxXIhr1aR7J0rYsk%2FScBwStFHN%2B7iqs7jAbAJBvdWTi2ZO7z%2Fy2s5uJl5sY1h0E3gA63RJ4VLFVKAJosnI2xME%2BFLzNHs%2F8TxN%2Fc7H67YZVRoesHhdXHiQGSFK4jOGzbcz6l6AcXIOanpnOBCtyt9tdS&X-Amz-Signature=d3cafd0a85cb97b2ecb329c4530d7f23cdf73c19b7cac7d0d4eb61b604a49cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUMRRX3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxgwkHeB%2FMKWk0640D6ALuEGrRDgTBTNdyW%2FOuxvl5VAiBtuisX7aWX7DCvuvtDNCiWUq5a9xq7dqtgraostVeS2yqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQL7D%2BwcLY91ZFumKtwDY2X1Qaw56HnaE7GeyUsHdM91Zlh6scf5Uv2iWaPEn3L%2FnBIUAFfLAI3Zm%2BMArrwBoza8vCKF7l92YhC%2Ba3oBfNqeRvf%2BExv8fL0%2BFm%2FBG%2BJM7%2BHfD0StB2x624U0x6qSrdrqrhw1drLGzC9ZEx4HGWJ%2B7m%2FETCIb8F%2F%2FaB%2FcScbrLt%2Fn1vMEyivSq6iSX5n9eZBSSQjjCQNZeZTB7EXg84ln74n0jfV3mxlYqlpR8rzFvST22nj4HTwLBjfY%2BbZEAGA8JO2O9uaJAv5xFh3n5eSQw%2FH1o5tWZP0E5ttfOFXKEFavUbc4%2F47K6uqnxy2pm%2B8wJ6WRVJhkArSd8CzUngzBGQbPXs38O0J4LJs1gMCOET1ErFasK7rBt7CXEc%2BWgmunubJ3gWb0dHjAGtcTgrE8ZuBrnumjXPRjakmTaUDj0CFH%2Ftf3H8nLNM1OESEUVZyere69Wp0AYWJBU6Sd1WoEKVxDDlcuzNHma66yG7G75W%2FDwVDJ1okR14E%2FEEYJZE2SRoOCpVrzJhUlG9ffese1%2Bgh%2B4kB8H7NdErZ47z7GCy95%2FrEiITU3d%2FrBXBKCnLayEWaBrowlnAlyUR4QodCcYkntCyr25alsNEzIuL3RBhKBbLsMyCntEs0wiuKXwgY6pgGeEvbWrPzVvrU6EATu4w6Heg7sxe%2BevJ5NTcOuRbXS2gCePDTsJeMu1%2BstKFowY9s9cQw4XxXIhr1aR7J0rYsk%2FScBwStFHN%2B7iqs7jAbAJBvdWTi2ZO7z%2Fy2s5uJl5sY1h0E3gA63RJ4VLFVKAJosnI2xME%2BFLzNHs%2F8TxN%2Fc7H67YZVRoesHhdXHiQGSFK4jOGzbcz6l6AcXIOanpnOBCtyt9tdS&X-Amz-Signature=3532e3cac49f92b95e049840e09ade88670e760de5af229164581ce5844a242b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUMRRX3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxgwkHeB%2FMKWk0640D6ALuEGrRDgTBTNdyW%2FOuxvl5VAiBtuisX7aWX7DCvuvtDNCiWUq5a9xq7dqtgraostVeS2yqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQL7D%2BwcLY91ZFumKtwDY2X1Qaw56HnaE7GeyUsHdM91Zlh6scf5Uv2iWaPEn3L%2FnBIUAFfLAI3Zm%2BMArrwBoza8vCKF7l92YhC%2Ba3oBfNqeRvf%2BExv8fL0%2BFm%2FBG%2BJM7%2BHfD0StB2x624U0x6qSrdrqrhw1drLGzC9ZEx4HGWJ%2B7m%2FETCIb8F%2F%2FaB%2FcScbrLt%2Fn1vMEyivSq6iSX5n9eZBSSQjjCQNZeZTB7EXg84ln74n0jfV3mxlYqlpR8rzFvST22nj4HTwLBjfY%2BbZEAGA8JO2O9uaJAv5xFh3n5eSQw%2FH1o5tWZP0E5ttfOFXKEFavUbc4%2F47K6uqnxy2pm%2B8wJ6WRVJhkArSd8CzUngzBGQbPXs38O0J4LJs1gMCOET1ErFasK7rBt7CXEc%2BWgmunubJ3gWb0dHjAGtcTgrE8ZuBrnumjXPRjakmTaUDj0CFH%2Ftf3H8nLNM1OESEUVZyere69Wp0AYWJBU6Sd1WoEKVxDDlcuzNHma66yG7G75W%2FDwVDJ1okR14E%2FEEYJZE2SRoOCpVrzJhUlG9ffese1%2Bgh%2B4kB8H7NdErZ47z7GCy95%2FrEiITU3d%2FrBXBKCnLayEWaBrowlnAlyUR4QodCcYkntCyr25alsNEzIuL3RBhKBbLsMyCntEs0wiuKXwgY6pgGeEvbWrPzVvrU6EATu4w6Heg7sxe%2BevJ5NTcOuRbXS2gCePDTsJeMu1%2BstKFowY9s9cQw4XxXIhr1aR7J0rYsk%2FScBwStFHN%2B7iqs7jAbAJBvdWTi2ZO7z%2Fy2s5uJl5sY1h0E3gA63RJ4VLFVKAJosnI2xME%2BFLzNHs%2F8TxN%2Fc7H67YZVRoesHhdXHiQGSFK4jOGzbcz6l6AcXIOanpnOBCtyt9tdS&X-Amz-Signature=c24b33aa84f368f015c96dc0ea0c2d2d0e547d34dffba680bf9fb74fbfe32238&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUMRRX3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxgwkHeB%2FMKWk0640D6ALuEGrRDgTBTNdyW%2FOuxvl5VAiBtuisX7aWX7DCvuvtDNCiWUq5a9xq7dqtgraostVeS2yqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQL7D%2BwcLY91ZFumKtwDY2X1Qaw56HnaE7GeyUsHdM91Zlh6scf5Uv2iWaPEn3L%2FnBIUAFfLAI3Zm%2BMArrwBoza8vCKF7l92YhC%2Ba3oBfNqeRvf%2BExv8fL0%2BFm%2FBG%2BJM7%2BHfD0StB2x624U0x6qSrdrqrhw1drLGzC9ZEx4HGWJ%2B7m%2FETCIb8F%2F%2FaB%2FcScbrLt%2Fn1vMEyivSq6iSX5n9eZBSSQjjCQNZeZTB7EXg84ln74n0jfV3mxlYqlpR8rzFvST22nj4HTwLBjfY%2BbZEAGA8JO2O9uaJAv5xFh3n5eSQw%2FH1o5tWZP0E5ttfOFXKEFavUbc4%2F47K6uqnxy2pm%2B8wJ6WRVJhkArSd8CzUngzBGQbPXs38O0J4LJs1gMCOET1ErFasK7rBt7CXEc%2BWgmunubJ3gWb0dHjAGtcTgrE8ZuBrnumjXPRjakmTaUDj0CFH%2Ftf3H8nLNM1OESEUVZyere69Wp0AYWJBU6Sd1WoEKVxDDlcuzNHma66yG7G75W%2FDwVDJ1okR14E%2FEEYJZE2SRoOCpVrzJhUlG9ffese1%2Bgh%2B4kB8H7NdErZ47z7GCy95%2FrEiITU3d%2FrBXBKCnLayEWaBrowlnAlyUR4QodCcYkntCyr25alsNEzIuL3RBhKBbLsMyCntEs0wiuKXwgY6pgGeEvbWrPzVvrU6EATu4w6Heg7sxe%2BevJ5NTcOuRbXS2gCePDTsJeMu1%2BstKFowY9s9cQw4XxXIhr1aR7J0rYsk%2FScBwStFHN%2B7iqs7jAbAJBvdWTi2ZO7z%2Fy2s5uJl5sY1h0E3gA63RJ4VLFVKAJosnI2xME%2BFLzNHs%2F8TxN%2Fc7H67YZVRoesHhdXHiQGSFK4jOGzbcz6l6AcXIOanpnOBCtyt9tdS&X-Amz-Signature=7767616dbe645d7b75d44fb018673ae3b1e0864e557c0659043a135b9e171e12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
