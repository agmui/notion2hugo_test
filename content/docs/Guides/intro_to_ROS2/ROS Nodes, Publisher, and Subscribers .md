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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNDKDZB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDsFZoLDizBIKRA9svMRaWBqfai1CRfDfguKWaU0ByGwIgIlXmxOrXy%2BWynqfepzpHv7X5jHQDoKDyxQzYn9DcNHwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXSHcOgQpyKxJZQMSrcA39KxpsnaLiRykC7mICkdW7gZKpVB3oCPpl7R9iqdXsE3ZsUE%2BEMnikglIAlHY3R0nP8tE9A13MT%2BAqyf9lKTP%2F0%2F3tIGFCIEWkkWupwUNqhcEDBE7AZCEtMZziV9ZarAIi2zOv%2BQWkH%2BtxuHl4nlkQ%2BI4KGwwPIX4GU7fnpU%2BSAz7gJHetGau47Jl1N%2FQ7nOnQk3NJwmIU%2BWnFPuTG%2FjKrNDasYfoD04Kf2MZGSqYN7JOwD77LW7bm%2Bl27tbqPCnMkiYh5MwVEPuSPHiGphEGppnTpzBaAGyVVnJVIlnJJpoyP6608N7B2CqocxWm6ParzWG5wVYeYFCAdGiijjMay%2FPjvMuIVdiYK83B%2BlE7lWPigmpRy%2F10MhVUySac9XdyS0CmugL0bD00yIG%2Ff6u6A1lcubkgxkK%2FGInabjyI3jKuRdGbb9d9AiVTg0w5lYEkoNjBgCgw85qtLIjxU8dPNaYWJ8b7bTKzZqtH8ksxOEEoxYAUrQi%2BbGb%2BTgu8n21jz5%2FI73Fc4NGDKWx1NBRJwrqEPMZbdBLbrXHQsnOQzon38OGYa6Jew36CTDaOT24nZ7e4F3MDIRmWoEduaYkpl%2Benxv85NetoGRIhZWz1DkthDMmlMIM1Js3M%2F8MPjS2L0GOqUB7hGV7nh80LHHD6qFHCU9XLgE3o02qe7TeARvkzai8VGfNv59fyy6%2BCHRW5tr4kua0k6XIyGZ%2FJ9N5H6pUYTHpXvAxDwnKm97TfiuB4LFXISI03D1b43lXXr9NI0vIb1HpCOhECCVps1vrgsuPzSPH0oE2C0FVMqqoG1wUhIGfUVFovJo1GK7d1%2FzsBr9%2F2g7tu7qQOvHo2W%2FIIS859yLtAXAMGJH&X-Amz-Signature=df22df58c3f095f19279d84e74261fc12fcfc06494f1090ad9a575b68680db98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNDKDZB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDsFZoLDizBIKRA9svMRaWBqfai1CRfDfguKWaU0ByGwIgIlXmxOrXy%2BWynqfepzpHv7X5jHQDoKDyxQzYn9DcNHwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXSHcOgQpyKxJZQMSrcA39KxpsnaLiRykC7mICkdW7gZKpVB3oCPpl7R9iqdXsE3ZsUE%2BEMnikglIAlHY3R0nP8tE9A13MT%2BAqyf9lKTP%2F0%2F3tIGFCIEWkkWupwUNqhcEDBE7AZCEtMZziV9ZarAIi2zOv%2BQWkH%2BtxuHl4nlkQ%2BI4KGwwPIX4GU7fnpU%2BSAz7gJHetGau47Jl1N%2FQ7nOnQk3NJwmIU%2BWnFPuTG%2FjKrNDasYfoD04Kf2MZGSqYN7JOwD77LW7bm%2Bl27tbqPCnMkiYh5MwVEPuSPHiGphEGppnTpzBaAGyVVnJVIlnJJpoyP6608N7B2CqocxWm6ParzWG5wVYeYFCAdGiijjMay%2FPjvMuIVdiYK83B%2BlE7lWPigmpRy%2F10MhVUySac9XdyS0CmugL0bD00yIG%2Ff6u6A1lcubkgxkK%2FGInabjyI3jKuRdGbb9d9AiVTg0w5lYEkoNjBgCgw85qtLIjxU8dPNaYWJ8b7bTKzZqtH8ksxOEEoxYAUrQi%2BbGb%2BTgu8n21jz5%2FI73Fc4NGDKWx1NBRJwrqEPMZbdBLbrXHQsnOQzon38OGYa6Jew36CTDaOT24nZ7e4F3MDIRmWoEduaYkpl%2Benxv85NetoGRIhZWz1DkthDMmlMIM1Js3M%2F8MPjS2L0GOqUB7hGV7nh80LHHD6qFHCU9XLgE3o02qe7TeARvkzai8VGfNv59fyy6%2BCHRW5tr4kua0k6XIyGZ%2FJ9N5H6pUYTHpXvAxDwnKm97TfiuB4LFXISI03D1b43lXXr9NI0vIb1HpCOhECCVps1vrgsuPzSPH0oE2C0FVMqqoG1wUhIGfUVFovJo1GK7d1%2FzsBr9%2F2g7tu7qQOvHo2W%2FIIS859yLtAXAMGJH&X-Amz-Signature=3e053656f5c203d8a86b3cf1bbe43634a56672e6d77044b391eae71fcfc88de8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNDKDZB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDsFZoLDizBIKRA9svMRaWBqfai1CRfDfguKWaU0ByGwIgIlXmxOrXy%2BWynqfepzpHv7X5jHQDoKDyxQzYn9DcNHwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXSHcOgQpyKxJZQMSrcA39KxpsnaLiRykC7mICkdW7gZKpVB3oCPpl7R9iqdXsE3ZsUE%2BEMnikglIAlHY3R0nP8tE9A13MT%2BAqyf9lKTP%2F0%2F3tIGFCIEWkkWupwUNqhcEDBE7AZCEtMZziV9ZarAIi2zOv%2BQWkH%2BtxuHl4nlkQ%2BI4KGwwPIX4GU7fnpU%2BSAz7gJHetGau47Jl1N%2FQ7nOnQk3NJwmIU%2BWnFPuTG%2FjKrNDasYfoD04Kf2MZGSqYN7JOwD77LW7bm%2Bl27tbqPCnMkiYh5MwVEPuSPHiGphEGppnTpzBaAGyVVnJVIlnJJpoyP6608N7B2CqocxWm6ParzWG5wVYeYFCAdGiijjMay%2FPjvMuIVdiYK83B%2BlE7lWPigmpRy%2F10MhVUySac9XdyS0CmugL0bD00yIG%2Ff6u6A1lcubkgxkK%2FGInabjyI3jKuRdGbb9d9AiVTg0w5lYEkoNjBgCgw85qtLIjxU8dPNaYWJ8b7bTKzZqtH8ksxOEEoxYAUrQi%2BbGb%2BTgu8n21jz5%2FI73Fc4NGDKWx1NBRJwrqEPMZbdBLbrXHQsnOQzon38OGYa6Jew36CTDaOT24nZ7e4F3MDIRmWoEduaYkpl%2Benxv85NetoGRIhZWz1DkthDMmlMIM1Js3M%2F8MPjS2L0GOqUB7hGV7nh80LHHD6qFHCU9XLgE3o02qe7TeARvkzai8VGfNv59fyy6%2BCHRW5tr4kua0k6XIyGZ%2FJ9N5H6pUYTHpXvAxDwnKm97TfiuB4LFXISI03D1b43lXXr9NI0vIb1HpCOhECCVps1vrgsuPzSPH0oE2C0FVMqqoG1wUhIGfUVFovJo1GK7d1%2FzsBr9%2F2g7tu7qQOvHo2W%2FIIS859yLtAXAMGJH&X-Amz-Signature=3f1087ef2c05965eaa8df4cc79c00ba905d4f96699b16c132f5dc049e6acdd55&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNDKDZB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDsFZoLDizBIKRA9svMRaWBqfai1CRfDfguKWaU0ByGwIgIlXmxOrXy%2BWynqfepzpHv7X5jHQDoKDyxQzYn9DcNHwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXSHcOgQpyKxJZQMSrcA39KxpsnaLiRykC7mICkdW7gZKpVB3oCPpl7R9iqdXsE3ZsUE%2BEMnikglIAlHY3R0nP8tE9A13MT%2BAqyf9lKTP%2F0%2F3tIGFCIEWkkWupwUNqhcEDBE7AZCEtMZziV9ZarAIi2zOv%2BQWkH%2BtxuHl4nlkQ%2BI4KGwwPIX4GU7fnpU%2BSAz7gJHetGau47Jl1N%2FQ7nOnQk3NJwmIU%2BWnFPuTG%2FjKrNDasYfoD04Kf2MZGSqYN7JOwD77LW7bm%2Bl27tbqPCnMkiYh5MwVEPuSPHiGphEGppnTpzBaAGyVVnJVIlnJJpoyP6608N7B2CqocxWm6ParzWG5wVYeYFCAdGiijjMay%2FPjvMuIVdiYK83B%2BlE7lWPigmpRy%2F10MhVUySac9XdyS0CmugL0bD00yIG%2Ff6u6A1lcubkgxkK%2FGInabjyI3jKuRdGbb9d9AiVTg0w5lYEkoNjBgCgw85qtLIjxU8dPNaYWJ8b7bTKzZqtH8ksxOEEoxYAUrQi%2BbGb%2BTgu8n21jz5%2FI73Fc4NGDKWx1NBRJwrqEPMZbdBLbrXHQsnOQzon38OGYa6Jew36CTDaOT24nZ7e4F3MDIRmWoEduaYkpl%2Benxv85NetoGRIhZWz1DkthDMmlMIM1Js3M%2F8MPjS2L0GOqUB7hGV7nh80LHHD6qFHCU9XLgE3o02qe7TeARvkzai8VGfNv59fyy6%2BCHRW5tr4kua0k6XIyGZ%2FJ9N5H6pUYTHpXvAxDwnKm97TfiuB4LFXISI03D1b43lXXr9NI0vIb1HpCOhECCVps1vrgsuPzSPH0oE2C0FVMqqoG1wUhIGfUVFovJo1GK7d1%2FzsBr9%2F2g7tu7qQOvHo2W%2FIIS859yLtAXAMGJH&X-Amz-Signature=2326659cdfd96114c86ac5be1f3355b3656ba66612847ed8dd82913e8bde4f30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNDKDZB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDsFZoLDizBIKRA9svMRaWBqfai1CRfDfguKWaU0ByGwIgIlXmxOrXy%2BWynqfepzpHv7X5jHQDoKDyxQzYn9DcNHwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXSHcOgQpyKxJZQMSrcA39KxpsnaLiRykC7mICkdW7gZKpVB3oCPpl7R9iqdXsE3ZsUE%2BEMnikglIAlHY3R0nP8tE9A13MT%2BAqyf9lKTP%2F0%2F3tIGFCIEWkkWupwUNqhcEDBE7AZCEtMZziV9ZarAIi2zOv%2BQWkH%2BtxuHl4nlkQ%2BI4KGwwPIX4GU7fnpU%2BSAz7gJHetGau47Jl1N%2FQ7nOnQk3NJwmIU%2BWnFPuTG%2FjKrNDasYfoD04Kf2MZGSqYN7JOwD77LW7bm%2Bl27tbqPCnMkiYh5MwVEPuSPHiGphEGppnTpzBaAGyVVnJVIlnJJpoyP6608N7B2CqocxWm6ParzWG5wVYeYFCAdGiijjMay%2FPjvMuIVdiYK83B%2BlE7lWPigmpRy%2F10MhVUySac9XdyS0CmugL0bD00yIG%2Ff6u6A1lcubkgxkK%2FGInabjyI3jKuRdGbb9d9AiVTg0w5lYEkoNjBgCgw85qtLIjxU8dPNaYWJ8b7bTKzZqtH8ksxOEEoxYAUrQi%2BbGb%2BTgu8n21jz5%2FI73Fc4NGDKWx1NBRJwrqEPMZbdBLbrXHQsnOQzon38OGYa6Jew36CTDaOT24nZ7e4F3MDIRmWoEduaYkpl%2Benxv85NetoGRIhZWz1DkthDMmlMIM1Js3M%2F8MPjS2L0GOqUB7hGV7nh80LHHD6qFHCU9XLgE3o02qe7TeARvkzai8VGfNv59fyy6%2BCHRW5tr4kua0k6XIyGZ%2FJ9N5H6pUYTHpXvAxDwnKm97TfiuB4LFXISI03D1b43lXXr9NI0vIb1HpCOhECCVps1vrgsuPzSPH0oE2C0FVMqqoG1wUhIGfUVFovJo1GK7d1%2FzsBr9%2F2g7tu7qQOvHo2W%2FIIS859yLtAXAMGJH&X-Amz-Signature=2894d03280734919fd3a373e9e2bc56ea64b5b7f59325c961c319d80e32547fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNDKDZB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDsFZoLDizBIKRA9svMRaWBqfai1CRfDfguKWaU0ByGwIgIlXmxOrXy%2BWynqfepzpHv7X5jHQDoKDyxQzYn9DcNHwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXSHcOgQpyKxJZQMSrcA39KxpsnaLiRykC7mICkdW7gZKpVB3oCPpl7R9iqdXsE3ZsUE%2BEMnikglIAlHY3R0nP8tE9A13MT%2BAqyf9lKTP%2F0%2F3tIGFCIEWkkWupwUNqhcEDBE7AZCEtMZziV9ZarAIi2zOv%2BQWkH%2BtxuHl4nlkQ%2BI4KGwwPIX4GU7fnpU%2BSAz7gJHetGau47Jl1N%2FQ7nOnQk3NJwmIU%2BWnFPuTG%2FjKrNDasYfoD04Kf2MZGSqYN7JOwD77LW7bm%2Bl27tbqPCnMkiYh5MwVEPuSPHiGphEGppnTpzBaAGyVVnJVIlnJJpoyP6608N7B2CqocxWm6ParzWG5wVYeYFCAdGiijjMay%2FPjvMuIVdiYK83B%2BlE7lWPigmpRy%2F10MhVUySac9XdyS0CmugL0bD00yIG%2Ff6u6A1lcubkgxkK%2FGInabjyI3jKuRdGbb9d9AiVTg0w5lYEkoNjBgCgw85qtLIjxU8dPNaYWJ8b7bTKzZqtH8ksxOEEoxYAUrQi%2BbGb%2BTgu8n21jz5%2FI73Fc4NGDKWx1NBRJwrqEPMZbdBLbrXHQsnOQzon38OGYa6Jew36CTDaOT24nZ7e4F3MDIRmWoEduaYkpl%2Benxv85NetoGRIhZWz1DkthDMmlMIM1Js3M%2F8MPjS2L0GOqUB7hGV7nh80LHHD6qFHCU9XLgE3o02qe7TeARvkzai8VGfNv59fyy6%2BCHRW5tr4kua0k6XIyGZ%2FJ9N5H6pUYTHpXvAxDwnKm97TfiuB4LFXISI03D1b43lXXr9NI0vIb1HpCOhECCVps1vrgsuPzSPH0oE2C0FVMqqoG1wUhIGfUVFovJo1GK7d1%2FzsBr9%2F2g7tu7qQOvHo2W%2FIIS859yLtAXAMGJH&X-Amz-Signature=202425e9a50c36569cb01e3b941dd4f1ce98ef9eb67c1c542eb1755e52dd2d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNDKDZB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDsFZoLDizBIKRA9svMRaWBqfai1CRfDfguKWaU0ByGwIgIlXmxOrXy%2BWynqfepzpHv7X5jHQDoKDyxQzYn9DcNHwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXSHcOgQpyKxJZQMSrcA39KxpsnaLiRykC7mICkdW7gZKpVB3oCPpl7R9iqdXsE3ZsUE%2BEMnikglIAlHY3R0nP8tE9A13MT%2BAqyf9lKTP%2F0%2F3tIGFCIEWkkWupwUNqhcEDBE7AZCEtMZziV9ZarAIi2zOv%2BQWkH%2BtxuHl4nlkQ%2BI4KGwwPIX4GU7fnpU%2BSAz7gJHetGau47Jl1N%2FQ7nOnQk3NJwmIU%2BWnFPuTG%2FjKrNDasYfoD04Kf2MZGSqYN7JOwD77LW7bm%2Bl27tbqPCnMkiYh5MwVEPuSPHiGphEGppnTpzBaAGyVVnJVIlnJJpoyP6608N7B2CqocxWm6ParzWG5wVYeYFCAdGiijjMay%2FPjvMuIVdiYK83B%2BlE7lWPigmpRy%2F10MhVUySac9XdyS0CmugL0bD00yIG%2Ff6u6A1lcubkgxkK%2FGInabjyI3jKuRdGbb9d9AiVTg0w5lYEkoNjBgCgw85qtLIjxU8dPNaYWJ8b7bTKzZqtH8ksxOEEoxYAUrQi%2BbGb%2BTgu8n21jz5%2FI73Fc4NGDKWx1NBRJwrqEPMZbdBLbrXHQsnOQzon38OGYa6Jew36CTDaOT24nZ7e4F3MDIRmWoEduaYkpl%2Benxv85NetoGRIhZWz1DkthDMmlMIM1Js3M%2F8MPjS2L0GOqUB7hGV7nh80LHHD6qFHCU9XLgE3o02qe7TeARvkzai8VGfNv59fyy6%2BCHRW5tr4kua0k6XIyGZ%2FJ9N5H6pUYTHpXvAxDwnKm97TfiuB4LFXISI03D1b43lXXr9NI0vIb1HpCOhECCVps1vrgsuPzSPH0oE2C0FVMqqoG1wUhIGfUVFovJo1GK7d1%2FzsBr9%2F2g7tu7qQOvHo2W%2FIIS859yLtAXAMGJH&X-Amz-Signature=ea5a1820f46de918df7a17a6182414082bd0fd7d34c6adf94ead9ed606b252eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNDKDZB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDsFZoLDizBIKRA9svMRaWBqfai1CRfDfguKWaU0ByGwIgIlXmxOrXy%2BWynqfepzpHv7X5jHQDoKDyxQzYn9DcNHwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXSHcOgQpyKxJZQMSrcA39KxpsnaLiRykC7mICkdW7gZKpVB3oCPpl7R9iqdXsE3ZsUE%2BEMnikglIAlHY3R0nP8tE9A13MT%2BAqyf9lKTP%2F0%2F3tIGFCIEWkkWupwUNqhcEDBE7AZCEtMZziV9ZarAIi2zOv%2BQWkH%2BtxuHl4nlkQ%2BI4KGwwPIX4GU7fnpU%2BSAz7gJHetGau47Jl1N%2FQ7nOnQk3NJwmIU%2BWnFPuTG%2FjKrNDasYfoD04Kf2MZGSqYN7JOwD77LW7bm%2Bl27tbqPCnMkiYh5MwVEPuSPHiGphEGppnTpzBaAGyVVnJVIlnJJpoyP6608N7B2CqocxWm6ParzWG5wVYeYFCAdGiijjMay%2FPjvMuIVdiYK83B%2BlE7lWPigmpRy%2F10MhVUySac9XdyS0CmugL0bD00yIG%2Ff6u6A1lcubkgxkK%2FGInabjyI3jKuRdGbb9d9AiVTg0w5lYEkoNjBgCgw85qtLIjxU8dPNaYWJ8b7bTKzZqtH8ksxOEEoxYAUrQi%2BbGb%2BTgu8n21jz5%2FI73Fc4NGDKWx1NBRJwrqEPMZbdBLbrXHQsnOQzon38OGYa6Jew36CTDaOT24nZ7e4F3MDIRmWoEduaYkpl%2Benxv85NetoGRIhZWz1DkthDMmlMIM1Js3M%2F8MPjS2L0GOqUB7hGV7nh80LHHD6qFHCU9XLgE3o02qe7TeARvkzai8VGfNv59fyy6%2BCHRW5tr4kua0k6XIyGZ%2FJ9N5H6pUYTHpXvAxDwnKm97TfiuB4LFXISI03D1b43lXXr9NI0vIb1HpCOhECCVps1vrgsuPzSPH0oE2C0FVMqqoG1wUhIGfUVFovJo1GK7d1%2FzsBr9%2F2g7tu7qQOvHo2W%2FIIS859yLtAXAMGJH&X-Amz-Signature=77cc595d9b65ae5c3be972aea4f971ff3ab31b741ccfb06f2b283869d28d36a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
