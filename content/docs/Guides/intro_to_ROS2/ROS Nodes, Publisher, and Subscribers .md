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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWMAKLV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEt%2FfsB86KKFo8FlvQoAdvYS13iaStIqIoCWbr6STO5RAiAPuUdPxitc5LZ%2FW4ItOY84bRSuyRxxhDM%2FEdFSKFsmMyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLg9HkhcqeJiXPsCKtwDu8XEXrbbX31BcRK3PPqqBe%2F2bezJeIEm%2B9r9V9%2FmdTOdueEd5qNx3o4llx5B1ni%2Ft0ctar0csUxPp%2BDp4fCF%2FZBfqK1Zlbylroe0Lzot6in%2BkrZfGE3GJu16Y1Fw%2BLWMdJoo0S9Ux8HlCy9aBqAEDz0E6pFIRXuXK9XensFlTcva%2BZTtyZYe7NFA3kFWaDfdlmbSU1hIcEif9w7TkIePXd5rGiL0wvpj5AyvemCRQ690aPDK2ClwmKLNlgnw9LBzDaVHnANui6mkz572ge83DpE9BNMYLWyX%2FzXe4y%2Fjqflc1QddSU8qdnZP8IOv7HUTB%2FujH1l7sCletwsYCHpklE8BLePVOPS2yeVZJlL31FmQTHlI2AN%2BSzFlB9Q4SgmXyDSszi3FSUcS%2BucijNNiLevyTFUYms2JujeWdYx9lDDeqyHgSixlcP%2BhNr1v9bgLQ%2FMFWGVGxpGeKEXU%2FWWyEBaX4OMjl57csjh0v%2FhmTFp8oRtcCCxc42Us9yZIGRHRtiqUm4T%2FfnyM%2BJEyZgwEn0sXxJclbEDLlPXijrhTBbUO%2F2RZlvGjd%2F83cnwm217PPRgCt8zJ5I9wlQj5VN0R7PbqvZDA7asuPtuHOaGzM8UDSkXM8jOpPmH1%2BfcwjbzmvAY6pgFx2xwJF2trE69Ym7VN2KRda1JOcMtnhjq2SZeyQN98xROkvDcYtd2g3P%2FzMJKcKBl0K2jOBdRKP5YkfB4M9w8btY8NpHMkCrOS3nbr5PvjaxbkEM7FWNO6gucAdAK1DQUnYt%2FW5BfKpmN7G6nsY2uWCd%2BRrbXiYKsgeE%2BIfaFqbnD2k1SMrQrzsjq52ILrmhacUziUfCnlVzqH%2BnUa8%2BL0o4NC1dFE&X-Amz-Signature=5b21730633c5453e950ef4c62b34a05ece64e94d028c59680478bc8b56b5377b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWMAKLV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEt%2FfsB86KKFo8FlvQoAdvYS13iaStIqIoCWbr6STO5RAiAPuUdPxitc5LZ%2FW4ItOY84bRSuyRxxhDM%2FEdFSKFsmMyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLg9HkhcqeJiXPsCKtwDu8XEXrbbX31BcRK3PPqqBe%2F2bezJeIEm%2B9r9V9%2FmdTOdueEd5qNx3o4llx5B1ni%2Ft0ctar0csUxPp%2BDp4fCF%2FZBfqK1Zlbylroe0Lzot6in%2BkrZfGE3GJu16Y1Fw%2BLWMdJoo0S9Ux8HlCy9aBqAEDz0E6pFIRXuXK9XensFlTcva%2BZTtyZYe7NFA3kFWaDfdlmbSU1hIcEif9w7TkIePXd5rGiL0wvpj5AyvemCRQ690aPDK2ClwmKLNlgnw9LBzDaVHnANui6mkz572ge83DpE9BNMYLWyX%2FzXe4y%2Fjqflc1QddSU8qdnZP8IOv7HUTB%2FujH1l7sCletwsYCHpklE8BLePVOPS2yeVZJlL31FmQTHlI2AN%2BSzFlB9Q4SgmXyDSszi3FSUcS%2BucijNNiLevyTFUYms2JujeWdYx9lDDeqyHgSixlcP%2BhNr1v9bgLQ%2FMFWGVGxpGeKEXU%2FWWyEBaX4OMjl57csjh0v%2FhmTFp8oRtcCCxc42Us9yZIGRHRtiqUm4T%2FfnyM%2BJEyZgwEn0sXxJclbEDLlPXijrhTBbUO%2F2RZlvGjd%2F83cnwm217PPRgCt8zJ5I9wlQj5VN0R7PbqvZDA7asuPtuHOaGzM8UDSkXM8jOpPmH1%2BfcwjbzmvAY6pgFx2xwJF2trE69Ym7VN2KRda1JOcMtnhjq2SZeyQN98xROkvDcYtd2g3P%2FzMJKcKBl0K2jOBdRKP5YkfB4M9w8btY8NpHMkCrOS3nbr5PvjaxbkEM7FWNO6gucAdAK1DQUnYt%2FW5BfKpmN7G6nsY2uWCd%2BRrbXiYKsgeE%2BIfaFqbnD2k1SMrQrzsjq52ILrmhacUziUfCnlVzqH%2BnUa8%2BL0o4NC1dFE&X-Amz-Signature=3c245e1076645faa54d4b44070aac8f783d3dd64f90ae0a4776536f3e39557c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWMAKLV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEt%2FfsB86KKFo8FlvQoAdvYS13iaStIqIoCWbr6STO5RAiAPuUdPxitc5LZ%2FW4ItOY84bRSuyRxxhDM%2FEdFSKFsmMyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLg9HkhcqeJiXPsCKtwDu8XEXrbbX31BcRK3PPqqBe%2F2bezJeIEm%2B9r9V9%2FmdTOdueEd5qNx3o4llx5B1ni%2Ft0ctar0csUxPp%2BDp4fCF%2FZBfqK1Zlbylroe0Lzot6in%2BkrZfGE3GJu16Y1Fw%2BLWMdJoo0S9Ux8HlCy9aBqAEDz0E6pFIRXuXK9XensFlTcva%2BZTtyZYe7NFA3kFWaDfdlmbSU1hIcEif9w7TkIePXd5rGiL0wvpj5AyvemCRQ690aPDK2ClwmKLNlgnw9LBzDaVHnANui6mkz572ge83DpE9BNMYLWyX%2FzXe4y%2Fjqflc1QddSU8qdnZP8IOv7HUTB%2FujH1l7sCletwsYCHpklE8BLePVOPS2yeVZJlL31FmQTHlI2AN%2BSzFlB9Q4SgmXyDSszi3FSUcS%2BucijNNiLevyTFUYms2JujeWdYx9lDDeqyHgSixlcP%2BhNr1v9bgLQ%2FMFWGVGxpGeKEXU%2FWWyEBaX4OMjl57csjh0v%2FhmTFp8oRtcCCxc42Us9yZIGRHRtiqUm4T%2FfnyM%2BJEyZgwEn0sXxJclbEDLlPXijrhTBbUO%2F2RZlvGjd%2F83cnwm217PPRgCt8zJ5I9wlQj5VN0R7PbqvZDA7asuPtuHOaGzM8UDSkXM8jOpPmH1%2BfcwjbzmvAY6pgFx2xwJF2trE69Ym7VN2KRda1JOcMtnhjq2SZeyQN98xROkvDcYtd2g3P%2FzMJKcKBl0K2jOBdRKP5YkfB4M9w8btY8NpHMkCrOS3nbr5PvjaxbkEM7FWNO6gucAdAK1DQUnYt%2FW5BfKpmN7G6nsY2uWCd%2BRrbXiYKsgeE%2BIfaFqbnD2k1SMrQrzsjq52ILrmhacUziUfCnlVzqH%2BnUa8%2BL0o4NC1dFE&X-Amz-Signature=b03f3ee4bc479aeaf1ec34c3c136eb5d3fde6f4e9e5dc0531e4fbd44488e0d38&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWMAKLV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEt%2FfsB86KKFo8FlvQoAdvYS13iaStIqIoCWbr6STO5RAiAPuUdPxitc5LZ%2FW4ItOY84bRSuyRxxhDM%2FEdFSKFsmMyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLg9HkhcqeJiXPsCKtwDu8XEXrbbX31BcRK3PPqqBe%2F2bezJeIEm%2B9r9V9%2FmdTOdueEd5qNx3o4llx5B1ni%2Ft0ctar0csUxPp%2BDp4fCF%2FZBfqK1Zlbylroe0Lzot6in%2BkrZfGE3GJu16Y1Fw%2BLWMdJoo0S9Ux8HlCy9aBqAEDz0E6pFIRXuXK9XensFlTcva%2BZTtyZYe7NFA3kFWaDfdlmbSU1hIcEif9w7TkIePXd5rGiL0wvpj5AyvemCRQ690aPDK2ClwmKLNlgnw9LBzDaVHnANui6mkz572ge83DpE9BNMYLWyX%2FzXe4y%2Fjqflc1QddSU8qdnZP8IOv7HUTB%2FujH1l7sCletwsYCHpklE8BLePVOPS2yeVZJlL31FmQTHlI2AN%2BSzFlB9Q4SgmXyDSszi3FSUcS%2BucijNNiLevyTFUYms2JujeWdYx9lDDeqyHgSixlcP%2BhNr1v9bgLQ%2FMFWGVGxpGeKEXU%2FWWyEBaX4OMjl57csjh0v%2FhmTFp8oRtcCCxc42Us9yZIGRHRtiqUm4T%2FfnyM%2BJEyZgwEn0sXxJclbEDLlPXijrhTBbUO%2F2RZlvGjd%2F83cnwm217PPRgCt8zJ5I9wlQj5VN0R7PbqvZDA7asuPtuHOaGzM8UDSkXM8jOpPmH1%2BfcwjbzmvAY6pgFx2xwJF2trE69Ym7VN2KRda1JOcMtnhjq2SZeyQN98xROkvDcYtd2g3P%2FzMJKcKBl0K2jOBdRKP5YkfB4M9w8btY8NpHMkCrOS3nbr5PvjaxbkEM7FWNO6gucAdAK1DQUnYt%2FW5BfKpmN7G6nsY2uWCd%2BRrbXiYKsgeE%2BIfaFqbnD2k1SMrQrzsjq52ILrmhacUziUfCnlVzqH%2BnUa8%2BL0o4NC1dFE&X-Amz-Signature=ff9f25cff49216f3cad002b83f2ed07456704091706793bae57cef67caa7c77e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWMAKLV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEt%2FfsB86KKFo8FlvQoAdvYS13iaStIqIoCWbr6STO5RAiAPuUdPxitc5LZ%2FW4ItOY84bRSuyRxxhDM%2FEdFSKFsmMyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLg9HkhcqeJiXPsCKtwDu8XEXrbbX31BcRK3PPqqBe%2F2bezJeIEm%2B9r9V9%2FmdTOdueEd5qNx3o4llx5B1ni%2Ft0ctar0csUxPp%2BDp4fCF%2FZBfqK1Zlbylroe0Lzot6in%2BkrZfGE3GJu16Y1Fw%2BLWMdJoo0S9Ux8HlCy9aBqAEDz0E6pFIRXuXK9XensFlTcva%2BZTtyZYe7NFA3kFWaDfdlmbSU1hIcEif9w7TkIePXd5rGiL0wvpj5AyvemCRQ690aPDK2ClwmKLNlgnw9LBzDaVHnANui6mkz572ge83DpE9BNMYLWyX%2FzXe4y%2Fjqflc1QddSU8qdnZP8IOv7HUTB%2FujH1l7sCletwsYCHpklE8BLePVOPS2yeVZJlL31FmQTHlI2AN%2BSzFlB9Q4SgmXyDSszi3FSUcS%2BucijNNiLevyTFUYms2JujeWdYx9lDDeqyHgSixlcP%2BhNr1v9bgLQ%2FMFWGVGxpGeKEXU%2FWWyEBaX4OMjl57csjh0v%2FhmTFp8oRtcCCxc42Us9yZIGRHRtiqUm4T%2FfnyM%2BJEyZgwEn0sXxJclbEDLlPXijrhTBbUO%2F2RZlvGjd%2F83cnwm217PPRgCt8zJ5I9wlQj5VN0R7PbqvZDA7asuPtuHOaGzM8UDSkXM8jOpPmH1%2BfcwjbzmvAY6pgFx2xwJF2trE69Ym7VN2KRda1JOcMtnhjq2SZeyQN98xROkvDcYtd2g3P%2FzMJKcKBl0K2jOBdRKP5YkfB4M9w8btY8NpHMkCrOS3nbr5PvjaxbkEM7FWNO6gucAdAK1DQUnYt%2FW5BfKpmN7G6nsY2uWCd%2BRrbXiYKsgeE%2BIfaFqbnD2k1SMrQrzsjq52ILrmhacUziUfCnlVzqH%2BnUa8%2BL0o4NC1dFE&X-Amz-Signature=3b6fbec9526f33d4b9a2f7d1981a3d3bdb6ce02b0f5c06383a50fa851fd1c645&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWMAKLV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEt%2FfsB86KKFo8FlvQoAdvYS13iaStIqIoCWbr6STO5RAiAPuUdPxitc5LZ%2FW4ItOY84bRSuyRxxhDM%2FEdFSKFsmMyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLg9HkhcqeJiXPsCKtwDu8XEXrbbX31BcRK3PPqqBe%2F2bezJeIEm%2B9r9V9%2FmdTOdueEd5qNx3o4llx5B1ni%2Ft0ctar0csUxPp%2BDp4fCF%2FZBfqK1Zlbylroe0Lzot6in%2BkrZfGE3GJu16Y1Fw%2BLWMdJoo0S9Ux8HlCy9aBqAEDz0E6pFIRXuXK9XensFlTcva%2BZTtyZYe7NFA3kFWaDfdlmbSU1hIcEif9w7TkIePXd5rGiL0wvpj5AyvemCRQ690aPDK2ClwmKLNlgnw9LBzDaVHnANui6mkz572ge83DpE9BNMYLWyX%2FzXe4y%2Fjqflc1QddSU8qdnZP8IOv7HUTB%2FujH1l7sCletwsYCHpklE8BLePVOPS2yeVZJlL31FmQTHlI2AN%2BSzFlB9Q4SgmXyDSszi3FSUcS%2BucijNNiLevyTFUYms2JujeWdYx9lDDeqyHgSixlcP%2BhNr1v9bgLQ%2FMFWGVGxpGeKEXU%2FWWyEBaX4OMjl57csjh0v%2FhmTFp8oRtcCCxc42Us9yZIGRHRtiqUm4T%2FfnyM%2BJEyZgwEn0sXxJclbEDLlPXijrhTBbUO%2F2RZlvGjd%2F83cnwm217PPRgCt8zJ5I9wlQj5VN0R7PbqvZDA7asuPtuHOaGzM8UDSkXM8jOpPmH1%2BfcwjbzmvAY6pgFx2xwJF2trE69Ym7VN2KRda1JOcMtnhjq2SZeyQN98xROkvDcYtd2g3P%2FzMJKcKBl0K2jOBdRKP5YkfB4M9w8btY8NpHMkCrOS3nbr5PvjaxbkEM7FWNO6gucAdAK1DQUnYt%2FW5BfKpmN7G6nsY2uWCd%2BRrbXiYKsgeE%2BIfaFqbnD2k1SMrQrzsjq52ILrmhacUziUfCnlVzqH%2BnUa8%2BL0o4NC1dFE&X-Amz-Signature=86aaf29e3c129c2df5e7af4e2af808e1ddbb0b39b1cc1952f2a617a8c55e678d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWMAKLV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEt%2FfsB86KKFo8FlvQoAdvYS13iaStIqIoCWbr6STO5RAiAPuUdPxitc5LZ%2FW4ItOY84bRSuyRxxhDM%2FEdFSKFsmMyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLg9HkhcqeJiXPsCKtwDu8XEXrbbX31BcRK3PPqqBe%2F2bezJeIEm%2B9r9V9%2FmdTOdueEd5qNx3o4llx5B1ni%2Ft0ctar0csUxPp%2BDp4fCF%2FZBfqK1Zlbylroe0Lzot6in%2BkrZfGE3GJu16Y1Fw%2BLWMdJoo0S9Ux8HlCy9aBqAEDz0E6pFIRXuXK9XensFlTcva%2BZTtyZYe7NFA3kFWaDfdlmbSU1hIcEif9w7TkIePXd5rGiL0wvpj5AyvemCRQ690aPDK2ClwmKLNlgnw9LBzDaVHnANui6mkz572ge83DpE9BNMYLWyX%2FzXe4y%2Fjqflc1QddSU8qdnZP8IOv7HUTB%2FujH1l7sCletwsYCHpklE8BLePVOPS2yeVZJlL31FmQTHlI2AN%2BSzFlB9Q4SgmXyDSszi3FSUcS%2BucijNNiLevyTFUYms2JujeWdYx9lDDeqyHgSixlcP%2BhNr1v9bgLQ%2FMFWGVGxpGeKEXU%2FWWyEBaX4OMjl57csjh0v%2FhmTFp8oRtcCCxc42Us9yZIGRHRtiqUm4T%2FfnyM%2BJEyZgwEn0sXxJclbEDLlPXijrhTBbUO%2F2RZlvGjd%2F83cnwm217PPRgCt8zJ5I9wlQj5VN0R7PbqvZDA7asuPtuHOaGzM8UDSkXM8jOpPmH1%2BfcwjbzmvAY6pgFx2xwJF2trE69Ym7VN2KRda1JOcMtnhjq2SZeyQN98xROkvDcYtd2g3P%2FzMJKcKBl0K2jOBdRKP5YkfB4M9w8btY8NpHMkCrOS3nbr5PvjaxbkEM7FWNO6gucAdAK1DQUnYt%2FW5BfKpmN7G6nsY2uWCd%2BRrbXiYKsgeE%2BIfaFqbnD2k1SMrQrzsjq52ILrmhacUziUfCnlVzqH%2BnUa8%2BL0o4NC1dFE&X-Amz-Signature=d348d2d7f34790ea0da287b6d894ebdb4406f5ea52f001ad6d584e5d905cf845&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWMAKLV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEt%2FfsB86KKFo8FlvQoAdvYS13iaStIqIoCWbr6STO5RAiAPuUdPxitc5LZ%2FW4ItOY84bRSuyRxxhDM%2FEdFSKFsmMyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLg9HkhcqeJiXPsCKtwDu8XEXrbbX31BcRK3PPqqBe%2F2bezJeIEm%2B9r9V9%2FmdTOdueEd5qNx3o4llx5B1ni%2Ft0ctar0csUxPp%2BDp4fCF%2FZBfqK1Zlbylroe0Lzot6in%2BkrZfGE3GJu16Y1Fw%2BLWMdJoo0S9Ux8HlCy9aBqAEDz0E6pFIRXuXK9XensFlTcva%2BZTtyZYe7NFA3kFWaDfdlmbSU1hIcEif9w7TkIePXd5rGiL0wvpj5AyvemCRQ690aPDK2ClwmKLNlgnw9LBzDaVHnANui6mkz572ge83DpE9BNMYLWyX%2FzXe4y%2Fjqflc1QddSU8qdnZP8IOv7HUTB%2FujH1l7sCletwsYCHpklE8BLePVOPS2yeVZJlL31FmQTHlI2AN%2BSzFlB9Q4SgmXyDSszi3FSUcS%2BucijNNiLevyTFUYms2JujeWdYx9lDDeqyHgSixlcP%2BhNr1v9bgLQ%2FMFWGVGxpGeKEXU%2FWWyEBaX4OMjl57csjh0v%2FhmTFp8oRtcCCxc42Us9yZIGRHRtiqUm4T%2FfnyM%2BJEyZgwEn0sXxJclbEDLlPXijrhTBbUO%2F2RZlvGjd%2F83cnwm217PPRgCt8zJ5I9wlQj5VN0R7PbqvZDA7asuPtuHOaGzM8UDSkXM8jOpPmH1%2BfcwjbzmvAY6pgFx2xwJF2trE69Ym7VN2KRda1JOcMtnhjq2SZeyQN98xROkvDcYtd2g3P%2FzMJKcKBl0K2jOBdRKP5YkfB4M9w8btY8NpHMkCrOS3nbr5PvjaxbkEM7FWNO6gucAdAK1DQUnYt%2FW5BfKpmN7G6nsY2uWCd%2BRrbXiYKsgeE%2BIfaFqbnD2k1SMrQrzsjq52ILrmhacUziUfCnlVzqH%2BnUa8%2BL0o4NC1dFE&X-Amz-Signature=fd028a8f748c3d91f52fa62b70953eade8e43beba81d79b27edc5613bbeba647&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
