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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W47J3GF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34Gc%2B%2B7zVSZlRmapEsHzr7vRyoptv8vIFWoeILYVhOwIhAIQBT9jAd%2B4bWEByfsAkAl87HoQwtZ%2BoVWt9lNwLpRMPKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXdvA5jonuhXTqTYq3AP3tLgQeeh49VXMORPBJhe1qwtCGZUw5Civrfeqr0Mnvc5OHfvYF%2BU2vvusshWQUktaTPYfgGLktb8Y5AGtYTQvsKXxu9n8DGakEmRNUgWQ2LQsFPq2C3IBFEJIblMFCBLePEPi5Dx%2BiqM644PQCvD3pVA4zCTDYjLJPGew%2BIpaQpoqepJhNZ6PvBDy7n8sc44MCniKdbu32WeAeSRotR2mD6qTh5QQXBPVJ1kOik%2F9928pipIn8cK%2BYcRbFUhMqkH9UNgBba6KhDeR9K72FX0eFx9Pt%2FvReteoxILHZWhjrhYKKJPAs6Fk6snY5rH6zjlT1ihDSnaeULIQ8leNRIWMOESu6tUWyb60C1Q1ZYut%2FHENo1ZjgRlFHosjlhDU9Vy9Aq2YTDCJCfUVHdRi0KkThuKCMJzhSITN8T%2FAvrKXh10zyxWw3I2qWFQNvOSGsbG60sn4zTfAZuoUmF7mn0T3qvdIXQoOh0aWhovUc9CSx%2BmQiIW%2F6lsm61bdrcvlTyf4gPRTs8L6cR1R7KHY1HuTqdIBfqskF2qlZSfHHqlVQYMlWN8VvoAuapdwSLkU%2FnRMlmFCat3FMP0RT9R3tMFVapjFekI%2F8pKKbx9o7n7nhlQMrbY8K5ejTsXCyzCU4K7BBjqkAW8nFS1GJIyh2M21vin9Amh4iEwK%2BksIUyy3T1OgzVUOZhDTS1rQ13TCEg%2B1y5DY9XeMLEWpW3tiGM4dK%2FUTErKMsUSfwstX1evciHJ5CaXNoFKgwGlJUVj41BuiE4VotMdQmj9hklEQ6GWLsVVfoEehqRs%2BNoKGjkRz2v9X86BQ3F5hvJH2h3cESVLvOUcIh0C7%2Baqyl1aUPCw9yAgVYapv0s%2Fa&X-Amz-Signature=96db9f394fd96e58e71f8e2949dcd50972eb7cae013a9ccedd42fb71a6a1acac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W47J3GF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34Gc%2B%2B7zVSZlRmapEsHzr7vRyoptv8vIFWoeILYVhOwIhAIQBT9jAd%2B4bWEByfsAkAl87HoQwtZ%2BoVWt9lNwLpRMPKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXdvA5jonuhXTqTYq3AP3tLgQeeh49VXMORPBJhe1qwtCGZUw5Civrfeqr0Mnvc5OHfvYF%2BU2vvusshWQUktaTPYfgGLktb8Y5AGtYTQvsKXxu9n8DGakEmRNUgWQ2LQsFPq2C3IBFEJIblMFCBLePEPi5Dx%2BiqM644PQCvD3pVA4zCTDYjLJPGew%2BIpaQpoqepJhNZ6PvBDy7n8sc44MCniKdbu32WeAeSRotR2mD6qTh5QQXBPVJ1kOik%2F9928pipIn8cK%2BYcRbFUhMqkH9UNgBba6KhDeR9K72FX0eFx9Pt%2FvReteoxILHZWhjrhYKKJPAs6Fk6snY5rH6zjlT1ihDSnaeULIQ8leNRIWMOESu6tUWyb60C1Q1ZYut%2FHENo1ZjgRlFHosjlhDU9Vy9Aq2YTDCJCfUVHdRi0KkThuKCMJzhSITN8T%2FAvrKXh10zyxWw3I2qWFQNvOSGsbG60sn4zTfAZuoUmF7mn0T3qvdIXQoOh0aWhovUc9CSx%2BmQiIW%2F6lsm61bdrcvlTyf4gPRTs8L6cR1R7KHY1HuTqdIBfqskF2qlZSfHHqlVQYMlWN8VvoAuapdwSLkU%2FnRMlmFCat3FMP0RT9R3tMFVapjFekI%2F8pKKbx9o7n7nhlQMrbY8K5ejTsXCyzCU4K7BBjqkAW8nFS1GJIyh2M21vin9Amh4iEwK%2BksIUyy3T1OgzVUOZhDTS1rQ13TCEg%2B1y5DY9XeMLEWpW3tiGM4dK%2FUTErKMsUSfwstX1evciHJ5CaXNoFKgwGlJUVj41BuiE4VotMdQmj9hklEQ6GWLsVVfoEehqRs%2BNoKGjkRz2v9X86BQ3F5hvJH2h3cESVLvOUcIh0C7%2Baqyl1aUPCw9yAgVYapv0s%2Fa&X-Amz-Signature=0fab702f984592123fe478ab42b78bf1cb739e2d7b85f447c700897d2c218a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W47J3GF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34Gc%2B%2B7zVSZlRmapEsHzr7vRyoptv8vIFWoeILYVhOwIhAIQBT9jAd%2B4bWEByfsAkAl87HoQwtZ%2BoVWt9lNwLpRMPKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXdvA5jonuhXTqTYq3AP3tLgQeeh49VXMORPBJhe1qwtCGZUw5Civrfeqr0Mnvc5OHfvYF%2BU2vvusshWQUktaTPYfgGLktb8Y5AGtYTQvsKXxu9n8DGakEmRNUgWQ2LQsFPq2C3IBFEJIblMFCBLePEPi5Dx%2BiqM644PQCvD3pVA4zCTDYjLJPGew%2BIpaQpoqepJhNZ6PvBDy7n8sc44MCniKdbu32WeAeSRotR2mD6qTh5QQXBPVJ1kOik%2F9928pipIn8cK%2BYcRbFUhMqkH9UNgBba6KhDeR9K72FX0eFx9Pt%2FvReteoxILHZWhjrhYKKJPAs6Fk6snY5rH6zjlT1ihDSnaeULIQ8leNRIWMOESu6tUWyb60C1Q1ZYut%2FHENo1ZjgRlFHosjlhDU9Vy9Aq2YTDCJCfUVHdRi0KkThuKCMJzhSITN8T%2FAvrKXh10zyxWw3I2qWFQNvOSGsbG60sn4zTfAZuoUmF7mn0T3qvdIXQoOh0aWhovUc9CSx%2BmQiIW%2F6lsm61bdrcvlTyf4gPRTs8L6cR1R7KHY1HuTqdIBfqskF2qlZSfHHqlVQYMlWN8VvoAuapdwSLkU%2FnRMlmFCat3FMP0RT9R3tMFVapjFekI%2F8pKKbx9o7n7nhlQMrbY8K5ejTsXCyzCU4K7BBjqkAW8nFS1GJIyh2M21vin9Amh4iEwK%2BksIUyy3T1OgzVUOZhDTS1rQ13TCEg%2B1y5DY9XeMLEWpW3tiGM4dK%2FUTErKMsUSfwstX1evciHJ5CaXNoFKgwGlJUVj41BuiE4VotMdQmj9hklEQ6GWLsVVfoEehqRs%2BNoKGjkRz2v9X86BQ3F5hvJH2h3cESVLvOUcIh0C7%2Baqyl1aUPCw9yAgVYapv0s%2Fa&X-Amz-Signature=d9267ef4c7723805c945cbc3dc7de1855432d22d31f63de5f1af54e3fe15c0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W47J3GF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34Gc%2B%2B7zVSZlRmapEsHzr7vRyoptv8vIFWoeILYVhOwIhAIQBT9jAd%2B4bWEByfsAkAl87HoQwtZ%2BoVWt9lNwLpRMPKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXdvA5jonuhXTqTYq3AP3tLgQeeh49VXMORPBJhe1qwtCGZUw5Civrfeqr0Mnvc5OHfvYF%2BU2vvusshWQUktaTPYfgGLktb8Y5AGtYTQvsKXxu9n8DGakEmRNUgWQ2LQsFPq2C3IBFEJIblMFCBLePEPi5Dx%2BiqM644PQCvD3pVA4zCTDYjLJPGew%2BIpaQpoqepJhNZ6PvBDy7n8sc44MCniKdbu32WeAeSRotR2mD6qTh5QQXBPVJ1kOik%2F9928pipIn8cK%2BYcRbFUhMqkH9UNgBba6KhDeR9K72FX0eFx9Pt%2FvReteoxILHZWhjrhYKKJPAs6Fk6snY5rH6zjlT1ihDSnaeULIQ8leNRIWMOESu6tUWyb60C1Q1ZYut%2FHENo1ZjgRlFHosjlhDU9Vy9Aq2YTDCJCfUVHdRi0KkThuKCMJzhSITN8T%2FAvrKXh10zyxWw3I2qWFQNvOSGsbG60sn4zTfAZuoUmF7mn0T3qvdIXQoOh0aWhovUc9CSx%2BmQiIW%2F6lsm61bdrcvlTyf4gPRTs8L6cR1R7KHY1HuTqdIBfqskF2qlZSfHHqlVQYMlWN8VvoAuapdwSLkU%2FnRMlmFCat3FMP0RT9R3tMFVapjFekI%2F8pKKbx9o7n7nhlQMrbY8K5ejTsXCyzCU4K7BBjqkAW8nFS1GJIyh2M21vin9Amh4iEwK%2BksIUyy3T1OgzVUOZhDTS1rQ13TCEg%2B1y5DY9XeMLEWpW3tiGM4dK%2FUTErKMsUSfwstX1evciHJ5CaXNoFKgwGlJUVj41BuiE4VotMdQmj9hklEQ6GWLsVVfoEehqRs%2BNoKGjkRz2v9X86BQ3F5hvJH2h3cESVLvOUcIh0C7%2Baqyl1aUPCw9yAgVYapv0s%2Fa&X-Amz-Signature=7a5bf9a8ef7f1ee890fa73b40caabe3b258543242358a27c890d49d97cc2c076&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W47J3GF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34Gc%2B%2B7zVSZlRmapEsHzr7vRyoptv8vIFWoeILYVhOwIhAIQBT9jAd%2B4bWEByfsAkAl87HoQwtZ%2BoVWt9lNwLpRMPKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXdvA5jonuhXTqTYq3AP3tLgQeeh49VXMORPBJhe1qwtCGZUw5Civrfeqr0Mnvc5OHfvYF%2BU2vvusshWQUktaTPYfgGLktb8Y5AGtYTQvsKXxu9n8DGakEmRNUgWQ2LQsFPq2C3IBFEJIblMFCBLePEPi5Dx%2BiqM644PQCvD3pVA4zCTDYjLJPGew%2BIpaQpoqepJhNZ6PvBDy7n8sc44MCniKdbu32WeAeSRotR2mD6qTh5QQXBPVJ1kOik%2F9928pipIn8cK%2BYcRbFUhMqkH9UNgBba6KhDeR9K72FX0eFx9Pt%2FvReteoxILHZWhjrhYKKJPAs6Fk6snY5rH6zjlT1ihDSnaeULIQ8leNRIWMOESu6tUWyb60C1Q1ZYut%2FHENo1ZjgRlFHosjlhDU9Vy9Aq2YTDCJCfUVHdRi0KkThuKCMJzhSITN8T%2FAvrKXh10zyxWw3I2qWFQNvOSGsbG60sn4zTfAZuoUmF7mn0T3qvdIXQoOh0aWhovUc9CSx%2BmQiIW%2F6lsm61bdrcvlTyf4gPRTs8L6cR1R7KHY1HuTqdIBfqskF2qlZSfHHqlVQYMlWN8VvoAuapdwSLkU%2FnRMlmFCat3FMP0RT9R3tMFVapjFekI%2F8pKKbx9o7n7nhlQMrbY8K5ejTsXCyzCU4K7BBjqkAW8nFS1GJIyh2M21vin9Amh4iEwK%2BksIUyy3T1OgzVUOZhDTS1rQ13TCEg%2B1y5DY9XeMLEWpW3tiGM4dK%2FUTErKMsUSfwstX1evciHJ5CaXNoFKgwGlJUVj41BuiE4VotMdQmj9hklEQ6GWLsVVfoEehqRs%2BNoKGjkRz2v9X86BQ3F5hvJH2h3cESVLvOUcIh0C7%2Baqyl1aUPCw9yAgVYapv0s%2Fa&X-Amz-Signature=ae188eb2a100dae25e7e16fa287c116ba5c7b73a7b3528b8be157715343f9d65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W47J3GF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34Gc%2B%2B7zVSZlRmapEsHzr7vRyoptv8vIFWoeILYVhOwIhAIQBT9jAd%2B4bWEByfsAkAl87HoQwtZ%2BoVWt9lNwLpRMPKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXdvA5jonuhXTqTYq3AP3tLgQeeh49VXMORPBJhe1qwtCGZUw5Civrfeqr0Mnvc5OHfvYF%2BU2vvusshWQUktaTPYfgGLktb8Y5AGtYTQvsKXxu9n8DGakEmRNUgWQ2LQsFPq2C3IBFEJIblMFCBLePEPi5Dx%2BiqM644PQCvD3pVA4zCTDYjLJPGew%2BIpaQpoqepJhNZ6PvBDy7n8sc44MCniKdbu32WeAeSRotR2mD6qTh5QQXBPVJ1kOik%2F9928pipIn8cK%2BYcRbFUhMqkH9UNgBba6KhDeR9K72FX0eFx9Pt%2FvReteoxILHZWhjrhYKKJPAs6Fk6snY5rH6zjlT1ihDSnaeULIQ8leNRIWMOESu6tUWyb60C1Q1ZYut%2FHENo1ZjgRlFHosjlhDU9Vy9Aq2YTDCJCfUVHdRi0KkThuKCMJzhSITN8T%2FAvrKXh10zyxWw3I2qWFQNvOSGsbG60sn4zTfAZuoUmF7mn0T3qvdIXQoOh0aWhovUc9CSx%2BmQiIW%2F6lsm61bdrcvlTyf4gPRTs8L6cR1R7KHY1HuTqdIBfqskF2qlZSfHHqlVQYMlWN8VvoAuapdwSLkU%2FnRMlmFCat3FMP0RT9R3tMFVapjFekI%2F8pKKbx9o7n7nhlQMrbY8K5ejTsXCyzCU4K7BBjqkAW8nFS1GJIyh2M21vin9Amh4iEwK%2BksIUyy3T1OgzVUOZhDTS1rQ13TCEg%2B1y5DY9XeMLEWpW3tiGM4dK%2FUTErKMsUSfwstX1evciHJ5CaXNoFKgwGlJUVj41BuiE4VotMdQmj9hklEQ6GWLsVVfoEehqRs%2BNoKGjkRz2v9X86BQ3F5hvJH2h3cESVLvOUcIh0C7%2Baqyl1aUPCw9yAgVYapv0s%2Fa&X-Amz-Signature=bd212aa3bee970dc0bc67c6f7c5d1c8e7c26112fefa55becd70a786a7ca3799a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W47J3GF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34Gc%2B%2B7zVSZlRmapEsHzr7vRyoptv8vIFWoeILYVhOwIhAIQBT9jAd%2B4bWEByfsAkAl87HoQwtZ%2BoVWt9lNwLpRMPKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXdvA5jonuhXTqTYq3AP3tLgQeeh49VXMORPBJhe1qwtCGZUw5Civrfeqr0Mnvc5OHfvYF%2BU2vvusshWQUktaTPYfgGLktb8Y5AGtYTQvsKXxu9n8DGakEmRNUgWQ2LQsFPq2C3IBFEJIblMFCBLePEPi5Dx%2BiqM644PQCvD3pVA4zCTDYjLJPGew%2BIpaQpoqepJhNZ6PvBDy7n8sc44MCniKdbu32WeAeSRotR2mD6qTh5QQXBPVJ1kOik%2F9928pipIn8cK%2BYcRbFUhMqkH9UNgBba6KhDeR9K72FX0eFx9Pt%2FvReteoxILHZWhjrhYKKJPAs6Fk6snY5rH6zjlT1ihDSnaeULIQ8leNRIWMOESu6tUWyb60C1Q1ZYut%2FHENo1ZjgRlFHosjlhDU9Vy9Aq2YTDCJCfUVHdRi0KkThuKCMJzhSITN8T%2FAvrKXh10zyxWw3I2qWFQNvOSGsbG60sn4zTfAZuoUmF7mn0T3qvdIXQoOh0aWhovUc9CSx%2BmQiIW%2F6lsm61bdrcvlTyf4gPRTs8L6cR1R7KHY1HuTqdIBfqskF2qlZSfHHqlVQYMlWN8VvoAuapdwSLkU%2FnRMlmFCat3FMP0RT9R3tMFVapjFekI%2F8pKKbx9o7n7nhlQMrbY8K5ejTsXCyzCU4K7BBjqkAW8nFS1GJIyh2M21vin9Amh4iEwK%2BksIUyy3T1OgzVUOZhDTS1rQ13TCEg%2B1y5DY9XeMLEWpW3tiGM4dK%2FUTErKMsUSfwstX1evciHJ5CaXNoFKgwGlJUVj41BuiE4VotMdQmj9hklEQ6GWLsVVfoEehqRs%2BNoKGjkRz2v9X86BQ3F5hvJH2h3cESVLvOUcIh0C7%2Baqyl1aUPCw9yAgVYapv0s%2Fa&X-Amz-Signature=1a9a52e8fcd9af29841211ee3e783f7f33fe5a950bafcadfbd4404d1553389e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W47J3GF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34Gc%2B%2B7zVSZlRmapEsHzr7vRyoptv8vIFWoeILYVhOwIhAIQBT9jAd%2B4bWEByfsAkAl87HoQwtZ%2BoVWt9lNwLpRMPKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXdvA5jonuhXTqTYq3AP3tLgQeeh49VXMORPBJhe1qwtCGZUw5Civrfeqr0Mnvc5OHfvYF%2BU2vvusshWQUktaTPYfgGLktb8Y5AGtYTQvsKXxu9n8DGakEmRNUgWQ2LQsFPq2C3IBFEJIblMFCBLePEPi5Dx%2BiqM644PQCvD3pVA4zCTDYjLJPGew%2BIpaQpoqepJhNZ6PvBDy7n8sc44MCniKdbu32WeAeSRotR2mD6qTh5QQXBPVJ1kOik%2F9928pipIn8cK%2BYcRbFUhMqkH9UNgBba6KhDeR9K72FX0eFx9Pt%2FvReteoxILHZWhjrhYKKJPAs6Fk6snY5rH6zjlT1ihDSnaeULIQ8leNRIWMOESu6tUWyb60C1Q1ZYut%2FHENo1ZjgRlFHosjlhDU9Vy9Aq2YTDCJCfUVHdRi0KkThuKCMJzhSITN8T%2FAvrKXh10zyxWw3I2qWFQNvOSGsbG60sn4zTfAZuoUmF7mn0T3qvdIXQoOh0aWhovUc9CSx%2BmQiIW%2F6lsm61bdrcvlTyf4gPRTs8L6cR1R7KHY1HuTqdIBfqskF2qlZSfHHqlVQYMlWN8VvoAuapdwSLkU%2FnRMlmFCat3FMP0RT9R3tMFVapjFekI%2F8pKKbx9o7n7nhlQMrbY8K5ejTsXCyzCU4K7BBjqkAW8nFS1GJIyh2M21vin9Amh4iEwK%2BksIUyy3T1OgzVUOZhDTS1rQ13TCEg%2B1y5DY9XeMLEWpW3tiGM4dK%2FUTErKMsUSfwstX1evciHJ5CaXNoFKgwGlJUVj41BuiE4VotMdQmj9hklEQ6GWLsVVfoEehqRs%2BNoKGjkRz2v9X86BQ3F5hvJH2h3cESVLvOUcIh0C7%2Baqyl1aUPCw9yAgVYapv0s%2Fa&X-Amz-Signature=e33ccf25300dbde9057a1cc3fdafd967bafd6f6b335e2f7147d44fced2dc3603&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
