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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3DVTLH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLVAdj1BgjaqjhANcv3%2BRTtd6sXkpzgwWO7Eit8gngyAiEAk6%2BJEcZH8ermPIDIi9uJzJP9uglh2ctNpco7lGPYOLsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDP6GgYMuBGXH6r%2B4WCrcAwL9TIkKahabL9uU7I78IlhFeSp3TXMqaFoBDVm987migrC1e2zx2Swv0u3LmWRwf5O2L7xWPlVFpNCqJbG%2FN5T%2BrKYfNHeRMWKacBIBjiLISb9PXjdD122ErIRcbdZMSAXTBF8c6ls40c0q8NZL%2FdEX8KS7J6Bf8kL9LVtDNbJjPMpjUODf6PDlhpekX%2FPOQdLvix%2FjVCF4%2BC20b4%2FY1KXkWlaXccwip425irma7AUrmWDHYiAC8QVvbGJ91tzvN%2FNHfaBwa2VdrtAGZ8Sbg%2Fh7GqXw2ogjJbCiudKZNkQtqoTRj6g6g6qxWOBhSsDzpLupwYnEpWbfpNs3vk1jmB669Edyb2v0w%2BYL%2BLUI7Sa73zJ88hi2EVPn7r5QGbAacU6cxxOyXcctQuVwvGBUWI7mbsCv8Vovds0oqwEvqfya8svpme%2B%2BXkZJSM1J8l%2Bd%2BS4S%2BNEaG3E3BvG%2FGIFaWhFgJOtvWyLhN6ExLfclo1BAMmeZ0m9MdPPh8rlgHczvnNe0s%2BiCbHAYU8aD22tOqzJ5d9A1o9PfC8LYH%2BYa0C130U1pd%2Fl5rO%2B5%2FUwy9njLHQUGFE1XmLIhJoOxVw%2BY4rfMruxdR5DYULKPFx4lXUjbF23k4xHurxfizEkzMPfZub0GOqUBj5rqonL8K8EsY8pGEx%2BTJsDKNDv21n6dU2LQDEmRYS%2FDJqDkRzTHSzIn24zbMeJAoE8mfTZg7dHlOeCfVc6JifuBoPx09Qsb7t79SC2f7E910n3jXQzab1cOaXaEhUPqjf1piY8ob19fNrIXw9epzx9AjpzuhARsNSoghRqQMARyU3%2F7%2FEU8OtoD59o9YGwTTkcsFvKNFtK68LULqUd%2FLYWmZ8TB&X-Amz-Signature=af590392cafbee98843cb8a2bb319e90bce4d2c44c20dac8a3b2b4bc9f499615&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3DVTLH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLVAdj1BgjaqjhANcv3%2BRTtd6sXkpzgwWO7Eit8gngyAiEAk6%2BJEcZH8ermPIDIi9uJzJP9uglh2ctNpco7lGPYOLsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDP6GgYMuBGXH6r%2B4WCrcAwL9TIkKahabL9uU7I78IlhFeSp3TXMqaFoBDVm987migrC1e2zx2Swv0u3LmWRwf5O2L7xWPlVFpNCqJbG%2FN5T%2BrKYfNHeRMWKacBIBjiLISb9PXjdD122ErIRcbdZMSAXTBF8c6ls40c0q8NZL%2FdEX8KS7J6Bf8kL9LVtDNbJjPMpjUODf6PDlhpekX%2FPOQdLvix%2FjVCF4%2BC20b4%2FY1KXkWlaXccwip425irma7AUrmWDHYiAC8QVvbGJ91tzvN%2FNHfaBwa2VdrtAGZ8Sbg%2Fh7GqXw2ogjJbCiudKZNkQtqoTRj6g6g6qxWOBhSsDzpLupwYnEpWbfpNs3vk1jmB669Edyb2v0w%2BYL%2BLUI7Sa73zJ88hi2EVPn7r5QGbAacU6cxxOyXcctQuVwvGBUWI7mbsCv8Vovds0oqwEvqfya8svpme%2B%2BXkZJSM1J8l%2Bd%2BS4S%2BNEaG3E3BvG%2FGIFaWhFgJOtvWyLhN6ExLfclo1BAMmeZ0m9MdPPh8rlgHczvnNe0s%2BiCbHAYU8aD22tOqzJ5d9A1o9PfC8LYH%2BYa0C130U1pd%2Fl5rO%2B5%2FUwy9njLHQUGFE1XmLIhJoOxVw%2BY4rfMruxdR5DYULKPFx4lXUjbF23k4xHurxfizEkzMPfZub0GOqUBj5rqonL8K8EsY8pGEx%2BTJsDKNDv21n6dU2LQDEmRYS%2FDJqDkRzTHSzIn24zbMeJAoE8mfTZg7dHlOeCfVc6JifuBoPx09Qsb7t79SC2f7E910n3jXQzab1cOaXaEhUPqjf1piY8ob19fNrIXw9epzx9AjpzuhARsNSoghRqQMARyU3%2F7%2FEU8OtoD59o9YGwTTkcsFvKNFtK68LULqUd%2FLYWmZ8TB&X-Amz-Signature=35d682a86727bee4cc87d6d8c21ece9f0d17695ac420f4bf91cc8e578fd0445e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3DVTLH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLVAdj1BgjaqjhANcv3%2BRTtd6sXkpzgwWO7Eit8gngyAiEAk6%2BJEcZH8ermPIDIi9uJzJP9uglh2ctNpco7lGPYOLsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDP6GgYMuBGXH6r%2B4WCrcAwL9TIkKahabL9uU7I78IlhFeSp3TXMqaFoBDVm987migrC1e2zx2Swv0u3LmWRwf5O2L7xWPlVFpNCqJbG%2FN5T%2BrKYfNHeRMWKacBIBjiLISb9PXjdD122ErIRcbdZMSAXTBF8c6ls40c0q8NZL%2FdEX8KS7J6Bf8kL9LVtDNbJjPMpjUODf6PDlhpekX%2FPOQdLvix%2FjVCF4%2BC20b4%2FY1KXkWlaXccwip425irma7AUrmWDHYiAC8QVvbGJ91tzvN%2FNHfaBwa2VdrtAGZ8Sbg%2Fh7GqXw2ogjJbCiudKZNkQtqoTRj6g6g6qxWOBhSsDzpLupwYnEpWbfpNs3vk1jmB669Edyb2v0w%2BYL%2BLUI7Sa73zJ88hi2EVPn7r5QGbAacU6cxxOyXcctQuVwvGBUWI7mbsCv8Vovds0oqwEvqfya8svpme%2B%2BXkZJSM1J8l%2Bd%2BS4S%2BNEaG3E3BvG%2FGIFaWhFgJOtvWyLhN6ExLfclo1BAMmeZ0m9MdPPh8rlgHczvnNe0s%2BiCbHAYU8aD22tOqzJ5d9A1o9PfC8LYH%2BYa0C130U1pd%2Fl5rO%2B5%2FUwy9njLHQUGFE1XmLIhJoOxVw%2BY4rfMruxdR5DYULKPFx4lXUjbF23k4xHurxfizEkzMPfZub0GOqUBj5rqonL8K8EsY8pGEx%2BTJsDKNDv21n6dU2LQDEmRYS%2FDJqDkRzTHSzIn24zbMeJAoE8mfTZg7dHlOeCfVc6JifuBoPx09Qsb7t79SC2f7E910n3jXQzab1cOaXaEhUPqjf1piY8ob19fNrIXw9epzx9AjpzuhARsNSoghRqQMARyU3%2F7%2FEU8OtoD59o9YGwTTkcsFvKNFtK68LULqUd%2FLYWmZ8TB&X-Amz-Signature=4d937c72e4101965ca4edcc54e4ecca56d88d433b5cba7577d07c0c33fd89242&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3DVTLH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLVAdj1BgjaqjhANcv3%2BRTtd6sXkpzgwWO7Eit8gngyAiEAk6%2BJEcZH8ermPIDIi9uJzJP9uglh2ctNpco7lGPYOLsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDP6GgYMuBGXH6r%2B4WCrcAwL9TIkKahabL9uU7I78IlhFeSp3TXMqaFoBDVm987migrC1e2zx2Swv0u3LmWRwf5O2L7xWPlVFpNCqJbG%2FN5T%2BrKYfNHeRMWKacBIBjiLISb9PXjdD122ErIRcbdZMSAXTBF8c6ls40c0q8NZL%2FdEX8KS7J6Bf8kL9LVtDNbJjPMpjUODf6PDlhpekX%2FPOQdLvix%2FjVCF4%2BC20b4%2FY1KXkWlaXccwip425irma7AUrmWDHYiAC8QVvbGJ91tzvN%2FNHfaBwa2VdrtAGZ8Sbg%2Fh7GqXw2ogjJbCiudKZNkQtqoTRj6g6g6qxWOBhSsDzpLupwYnEpWbfpNs3vk1jmB669Edyb2v0w%2BYL%2BLUI7Sa73zJ88hi2EVPn7r5QGbAacU6cxxOyXcctQuVwvGBUWI7mbsCv8Vovds0oqwEvqfya8svpme%2B%2BXkZJSM1J8l%2Bd%2BS4S%2BNEaG3E3BvG%2FGIFaWhFgJOtvWyLhN6ExLfclo1BAMmeZ0m9MdPPh8rlgHczvnNe0s%2BiCbHAYU8aD22tOqzJ5d9A1o9PfC8LYH%2BYa0C130U1pd%2Fl5rO%2B5%2FUwy9njLHQUGFE1XmLIhJoOxVw%2BY4rfMruxdR5DYULKPFx4lXUjbF23k4xHurxfizEkzMPfZub0GOqUBj5rqonL8K8EsY8pGEx%2BTJsDKNDv21n6dU2LQDEmRYS%2FDJqDkRzTHSzIn24zbMeJAoE8mfTZg7dHlOeCfVc6JifuBoPx09Qsb7t79SC2f7E910n3jXQzab1cOaXaEhUPqjf1piY8ob19fNrIXw9epzx9AjpzuhARsNSoghRqQMARyU3%2F7%2FEU8OtoD59o9YGwTTkcsFvKNFtK68LULqUd%2FLYWmZ8TB&X-Amz-Signature=c3da144014dab8983a3580347ff82fbc589e534f559020fbd910d05cf8702ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3DVTLH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLVAdj1BgjaqjhANcv3%2BRTtd6sXkpzgwWO7Eit8gngyAiEAk6%2BJEcZH8ermPIDIi9uJzJP9uglh2ctNpco7lGPYOLsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDP6GgYMuBGXH6r%2B4WCrcAwL9TIkKahabL9uU7I78IlhFeSp3TXMqaFoBDVm987migrC1e2zx2Swv0u3LmWRwf5O2L7xWPlVFpNCqJbG%2FN5T%2BrKYfNHeRMWKacBIBjiLISb9PXjdD122ErIRcbdZMSAXTBF8c6ls40c0q8NZL%2FdEX8KS7J6Bf8kL9LVtDNbJjPMpjUODf6PDlhpekX%2FPOQdLvix%2FjVCF4%2BC20b4%2FY1KXkWlaXccwip425irma7AUrmWDHYiAC8QVvbGJ91tzvN%2FNHfaBwa2VdrtAGZ8Sbg%2Fh7GqXw2ogjJbCiudKZNkQtqoTRj6g6g6qxWOBhSsDzpLupwYnEpWbfpNs3vk1jmB669Edyb2v0w%2BYL%2BLUI7Sa73zJ88hi2EVPn7r5QGbAacU6cxxOyXcctQuVwvGBUWI7mbsCv8Vovds0oqwEvqfya8svpme%2B%2BXkZJSM1J8l%2Bd%2BS4S%2BNEaG3E3BvG%2FGIFaWhFgJOtvWyLhN6ExLfclo1BAMmeZ0m9MdPPh8rlgHczvnNe0s%2BiCbHAYU8aD22tOqzJ5d9A1o9PfC8LYH%2BYa0C130U1pd%2Fl5rO%2B5%2FUwy9njLHQUGFE1XmLIhJoOxVw%2BY4rfMruxdR5DYULKPFx4lXUjbF23k4xHurxfizEkzMPfZub0GOqUBj5rqonL8K8EsY8pGEx%2BTJsDKNDv21n6dU2LQDEmRYS%2FDJqDkRzTHSzIn24zbMeJAoE8mfTZg7dHlOeCfVc6JifuBoPx09Qsb7t79SC2f7E910n3jXQzab1cOaXaEhUPqjf1piY8ob19fNrIXw9epzx9AjpzuhARsNSoghRqQMARyU3%2F7%2FEU8OtoD59o9YGwTTkcsFvKNFtK68LULqUd%2FLYWmZ8TB&X-Amz-Signature=406d2546462ded2082626529be5401717cc253ce6ecdba285588dd360d36651f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3DVTLH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLVAdj1BgjaqjhANcv3%2BRTtd6sXkpzgwWO7Eit8gngyAiEAk6%2BJEcZH8ermPIDIi9uJzJP9uglh2ctNpco7lGPYOLsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDP6GgYMuBGXH6r%2B4WCrcAwL9TIkKahabL9uU7I78IlhFeSp3TXMqaFoBDVm987migrC1e2zx2Swv0u3LmWRwf5O2L7xWPlVFpNCqJbG%2FN5T%2BrKYfNHeRMWKacBIBjiLISb9PXjdD122ErIRcbdZMSAXTBF8c6ls40c0q8NZL%2FdEX8KS7J6Bf8kL9LVtDNbJjPMpjUODf6PDlhpekX%2FPOQdLvix%2FjVCF4%2BC20b4%2FY1KXkWlaXccwip425irma7AUrmWDHYiAC8QVvbGJ91tzvN%2FNHfaBwa2VdrtAGZ8Sbg%2Fh7GqXw2ogjJbCiudKZNkQtqoTRj6g6g6qxWOBhSsDzpLupwYnEpWbfpNs3vk1jmB669Edyb2v0w%2BYL%2BLUI7Sa73zJ88hi2EVPn7r5QGbAacU6cxxOyXcctQuVwvGBUWI7mbsCv8Vovds0oqwEvqfya8svpme%2B%2BXkZJSM1J8l%2Bd%2BS4S%2BNEaG3E3BvG%2FGIFaWhFgJOtvWyLhN6ExLfclo1BAMmeZ0m9MdPPh8rlgHczvnNe0s%2BiCbHAYU8aD22tOqzJ5d9A1o9PfC8LYH%2BYa0C130U1pd%2Fl5rO%2B5%2FUwy9njLHQUGFE1XmLIhJoOxVw%2BY4rfMruxdR5DYULKPFx4lXUjbF23k4xHurxfizEkzMPfZub0GOqUBj5rqonL8K8EsY8pGEx%2BTJsDKNDv21n6dU2LQDEmRYS%2FDJqDkRzTHSzIn24zbMeJAoE8mfTZg7dHlOeCfVc6JifuBoPx09Qsb7t79SC2f7E910n3jXQzab1cOaXaEhUPqjf1piY8ob19fNrIXw9epzx9AjpzuhARsNSoghRqQMARyU3%2F7%2FEU8OtoD59o9YGwTTkcsFvKNFtK68LULqUd%2FLYWmZ8TB&X-Amz-Signature=462f8abb4924d85574f54c48407125cc2f9f4683baa887d2e0d1406127388177&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3DVTLH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLVAdj1BgjaqjhANcv3%2BRTtd6sXkpzgwWO7Eit8gngyAiEAk6%2BJEcZH8ermPIDIi9uJzJP9uglh2ctNpco7lGPYOLsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDP6GgYMuBGXH6r%2B4WCrcAwL9TIkKahabL9uU7I78IlhFeSp3TXMqaFoBDVm987migrC1e2zx2Swv0u3LmWRwf5O2L7xWPlVFpNCqJbG%2FN5T%2BrKYfNHeRMWKacBIBjiLISb9PXjdD122ErIRcbdZMSAXTBF8c6ls40c0q8NZL%2FdEX8KS7J6Bf8kL9LVtDNbJjPMpjUODf6PDlhpekX%2FPOQdLvix%2FjVCF4%2BC20b4%2FY1KXkWlaXccwip425irma7AUrmWDHYiAC8QVvbGJ91tzvN%2FNHfaBwa2VdrtAGZ8Sbg%2Fh7GqXw2ogjJbCiudKZNkQtqoTRj6g6g6qxWOBhSsDzpLupwYnEpWbfpNs3vk1jmB669Edyb2v0w%2BYL%2BLUI7Sa73zJ88hi2EVPn7r5QGbAacU6cxxOyXcctQuVwvGBUWI7mbsCv8Vovds0oqwEvqfya8svpme%2B%2BXkZJSM1J8l%2Bd%2BS4S%2BNEaG3E3BvG%2FGIFaWhFgJOtvWyLhN6ExLfclo1BAMmeZ0m9MdPPh8rlgHczvnNe0s%2BiCbHAYU8aD22tOqzJ5d9A1o9PfC8LYH%2BYa0C130U1pd%2Fl5rO%2B5%2FUwy9njLHQUGFE1XmLIhJoOxVw%2BY4rfMruxdR5DYULKPFx4lXUjbF23k4xHurxfizEkzMPfZub0GOqUBj5rqonL8K8EsY8pGEx%2BTJsDKNDv21n6dU2LQDEmRYS%2FDJqDkRzTHSzIn24zbMeJAoE8mfTZg7dHlOeCfVc6JifuBoPx09Qsb7t79SC2f7E910n3jXQzab1cOaXaEhUPqjf1piY8ob19fNrIXw9epzx9AjpzuhARsNSoghRqQMARyU3%2F7%2FEU8OtoD59o9YGwTTkcsFvKNFtK68LULqUd%2FLYWmZ8TB&X-Amz-Signature=b50326ca74ea5c002507a738959dcdfaeee3a1c0a5353825acfd0d24ee330bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3DVTLH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLVAdj1BgjaqjhANcv3%2BRTtd6sXkpzgwWO7Eit8gngyAiEAk6%2BJEcZH8ermPIDIi9uJzJP9uglh2ctNpco7lGPYOLsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDP6GgYMuBGXH6r%2B4WCrcAwL9TIkKahabL9uU7I78IlhFeSp3TXMqaFoBDVm987migrC1e2zx2Swv0u3LmWRwf5O2L7xWPlVFpNCqJbG%2FN5T%2BrKYfNHeRMWKacBIBjiLISb9PXjdD122ErIRcbdZMSAXTBF8c6ls40c0q8NZL%2FdEX8KS7J6Bf8kL9LVtDNbJjPMpjUODf6PDlhpekX%2FPOQdLvix%2FjVCF4%2BC20b4%2FY1KXkWlaXccwip425irma7AUrmWDHYiAC8QVvbGJ91tzvN%2FNHfaBwa2VdrtAGZ8Sbg%2Fh7GqXw2ogjJbCiudKZNkQtqoTRj6g6g6qxWOBhSsDzpLupwYnEpWbfpNs3vk1jmB669Edyb2v0w%2BYL%2BLUI7Sa73zJ88hi2EVPn7r5QGbAacU6cxxOyXcctQuVwvGBUWI7mbsCv8Vovds0oqwEvqfya8svpme%2B%2BXkZJSM1J8l%2Bd%2BS4S%2BNEaG3E3BvG%2FGIFaWhFgJOtvWyLhN6ExLfclo1BAMmeZ0m9MdPPh8rlgHczvnNe0s%2BiCbHAYU8aD22tOqzJ5d9A1o9PfC8LYH%2BYa0C130U1pd%2Fl5rO%2B5%2FUwy9njLHQUGFE1XmLIhJoOxVw%2BY4rfMruxdR5DYULKPFx4lXUjbF23k4xHurxfizEkzMPfZub0GOqUBj5rqonL8K8EsY8pGEx%2BTJsDKNDv21n6dU2LQDEmRYS%2FDJqDkRzTHSzIn24zbMeJAoE8mfTZg7dHlOeCfVc6JifuBoPx09Qsb7t79SC2f7E910n3jXQzab1cOaXaEhUPqjf1piY8ob19fNrIXw9epzx9AjpzuhARsNSoghRqQMARyU3%2F7%2FEU8OtoD59o9YGwTTkcsFvKNFtK68LULqUd%2FLYWmZ8TB&X-Amz-Signature=2761509085b070f1963e1f1b96903be3d23631f2da20fbd5f2f41f9436e43c16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
