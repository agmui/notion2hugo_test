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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZUUXIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQYaIdMYoYIumma8B3PjBGwQvWK7%2F0%2BxNhnCVYDRK3PAiBWQ9EHSX%2FMWYnL9daH62a25OC1woY4fMpFZVMM1t5W7yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdzTeZnwX9B8PEckxKtwDMOzl0KU23ywEZJvo1d6btJuGwoSUbcNnLyFP647oqyUY20qgDsYV3AKUkGHjppVC6VnDwiDoTuJZARCd9ny8DhdTo2V7bk8C%2F6Euj9yJnRoH%2BdrquqPGM7OQEaOIj8ijaHrGtIahUeS1r1Wb9OhaAPDYmctKN99V36Qo8wji%2FYqaHFodYMoQB2zYolD2mNNaH8rcmJccQpvqbk89N08ymup7NGgTysSf2yh%2F0MGpCC7JG6qPW7ikwHDjqaEWc280cTvU0mZF%2BeGn0KApaEKqPr%2F2duyctucexrW2QDTNz3LhtE4RgW0CykTvwR%2FSSiPSg4FZm9YZcRubcEFERGeqedofl6J0U6LaZsmc8L8ppuEnU11onHZDPBf2G21E8OcvRzcpYm4f%2Bd%2FHqsLSXx82Yzpge3%2BzXpUMYsMOf2xbA4%2F0Ezp1skLd9W2D9D1C1iUTcDiqtytaD3X5ZVksrJRz2Obpi2jehy5RrpfvHsPY7OB466jNFLUaldAQr37dFzAOK0m41O03E5g1%2BDG7b9%2F2WYvWvEAE1A%2BxhkQBvZQAePT95zTS14xULFRQ4NarAodQDEH6CfaxlEB37DOFJePa4wffvOueYU0cpabtRwSxh79fkujd0Qg4%2FcEDGnUwsIuPvwY6pgElrk8EFdcFZygBT8r0hky6zcWTkFnhureUs0kKPvsB1KAeGF4z9UxGpcBOBkrP5AIDReEo4XtdVxsqgZ6UhaZKsOqhEqT1XVg6TtufHGAlwS7CEfVR9M5EmfmIJP0lxZZKMAB51KlJ%2FsD3JguhM6Y1k3sX5lhe0zOoZAptIl3uQFtZ7Xfd0%2F1Z9ySf%2Bn5%2FMcgVSntALLBDHX8rDuAwCvXY5ee7imp9&X-Amz-Signature=728739746075244d5d4526abb2ca0c025bf2245ceec90f14e8bd3104d6ae3651&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZUUXIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQYaIdMYoYIumma8B3PjBGwQvWK7%2F0%2BxNhnCVYDRK3PAiBWQ9EHSX%2FMWYnL9daH62a25OC1woY4fMpFZVMM1t5W7yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdzTeZnwX9B8PEckxKtwDMOzl0KU23ywEZJvo1d6btJuGwoSUbcNnLyFP647oqyUY20qgDsYV3AKUkGHjppVC6VnDwiDoTuJZARCd9ny8DhdTo2V7bk8C%2F6Euj9yJnRoH%2BdrquqPGM7OQEaOIj8ijaHrGtIahUeS1r1Wb9OhaAPDYmctKN99V36Qo8wji%2FYqaHFodYMoQB2zYolD2mNNaH8rcmJccQpvqbk89N08ymup7NGgTysSf2yh%2F0MGpCC7JG6qPW7ikwHDjqaEWc280cTvU0mZF%2BeGn0KApaEKqPr%2F2duyctucexrW2QDTNz3LhtE4RgW0CykTvwR%2FSSiPSg4FZm9YZcRubcEFERGeqedofl6J0U6LaZsmc8L8ppuEnU11onHZDPBf2G21E8OcvRzcpYm4f%2Bd%2FHqsLSXx82Yzpge3%2BzXpUMYsMOf2xbA4%2F0Ezp1skLd9W2D9D1C1iUTcDiqtytaD3X5ZVksrJRz2Obpi2jehy5RrpfvHsPY7OB466jNFLUaldAQr37dFzAOK0m41O03E5g1%2BDG7b9%2F2WYvWvEAE1A%2BxhkQBvZQAePT95zTS14xULFRQ4NarAodQDEH6CfaxlEB37DOFJePa4wffvOueYU0cpabtRwSxh79fkujd0Qg4%2FcEDGnUwsIuPvwY6pgElrk8EFdcFZygBT8r0hky6zcWTkFnhureUs0kKPvsB1KAeGF4z9UxGpcBOBkrP5AIDReEo4XtdVxsqgZ6UhaZKsOqhEqT1XVg6TtufHGAlwS7CEfVR9M5EmfmIJP0lxZZKMAB51KlJ%2FsD3JguhM6Y1k3sX5lhe0zOoZAptIl3uQFtZ7Xfd0%2F1Z9ySf%2Bn5%2FMcgVSntALLBDHX8rDuAwCvXY5ee7imp9&X-Amz-Signature=df5d9c43b3d9937f26be54a0dc6e419821d792acd96d1757a3e64656ff95b081&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZUUXIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQYaIdMYoYIumma8B3PjBGwQvWK7%2F0%2BxNhnCVYDRK3PAiBWQ9EHSX%2FMWYnL9daH62a25OC1woY4fMpFZVMM1t5W7yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdzTeZnwX9B8PEckxKtwDMOzl0KU23ywEZJvo1d6btJuGwoSUbcNnLyFP647oqyUY20qgDsYV3AKUkGHjppVC6VnDwiDoTuJZARCd9ny8DhdTo2V7bk8C%2F6Euj9yJnRoH%2BdrquqPGM7OQEaOIj8ijaHrGtIahUeS1r1Wb9OhaAPDYmctKN99V36Qo8wji%2FYqaHFodYMoQB2zYolD2mNNaH8rcmJccQpvqbk89N08ymup7NGgTysSf2yh%2F0MGpCC7JG6qPW7ikwHDjqaEWc280cTvU0mZF%2BeGn0KApaEKqPr%2F2duyctucexrW2QDTNz3LhtE4RgW0CykTvwR%2FSSiPSg4FZm9YZcRubcEFERGeqedofl6J0U6LaZsmc8L8ppuEnU11onHZDPBf2G21E8OcvRzcpYm4f%2Bd%2FHqsLSXx82Yzpge3%2BzXpUMYsMOf2xbA4%2F0Ezp1skLd9W2D9D1C1iUTcDiqtytaD3X5ZVksrJRz2Obpi2jehy5RrpfvHsPY7OB466jNFLUaldAQr37dFzAOK0m41O03E5g1%2BDG7b9%2F2WYvWvEAE1A%2BxhkQBvZQAePT95zTS14xULFRQ4NarAodQDEH6CfaxlEB37DOFJePa4wffvOueYU0cpabtRwSxh79fkujd0Qg4%2FcEDGnUwsIuPvwY6pgElrk8EFdcFZygBT8r0hky6zcWTkFnhureUs0kKPvsB1KAeGF4z9UxGpcBOBkrP5AIDReEo4XtdVxsqgZ6UhaZKsOqhEqT1XVg6TtufHGAlwS7CEfVR9M5EmfmIJP0lxZZKMAB51KlJ%2FsD3JguhM6Y1k3sX5lhe0zOoZAptIl3uQFtZ7Xfd0%2F1Z9ySf%2Bn5%2FMcgVSntALLBDHX8rDuAwCvXY5ee7imp9&X-Amz-Signature=551d2b728cf7a90e7d995f86aaafa46ec91699e8afd85ecf666aa17134db4e68&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZUUXIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQYaIdMYoYIumma8B3PjBGwQvWK7%2F0%2BxNhnCVYDRK3PAiBWQ9EHSX%2FMWYnL9daH62a25OC1woY4fMpFZVMM1t5W7yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdzTeZnwX9B8PEckxKtwDMOzl0KU23ywEZJvo1d6btJuGwoSUbcNnLyFP647oqyUY20qgDsYV3AKUkGHjppVC6VnDwiDoTuJZARCd9ny8DhdTo2V7bk8C%2F6Euj9yJnRoH%2BdrquqPGM7OQEaOIj8ijaHrGtIahUeS1r1Wb9OhaAPDYmctKN99V36Qo8wji%2FYqaHFodYMoQB2zYolD2mNNaH8rcmJccQpvqbk89N08ymup7NGgTysSf2yh%2F0MGpCC7JG6qPW7ikwHDjqaEWc280cTvU0mZF%2BeGn0KApaEKqPr%2F2duyctucexrW2QDTNz3LhtE4RgW0CykTvwR%2FSSiPSg4FZm9YZcRubcEFERGeqedofl6J0U6LaZsmc8L8ppuEnU11onHZDPBf2G21E8OcvRzcpYm4f%2Bd%2FHqsLSXx82Yzpge3%2BzXpUMYsMOf2xbA4%2F0Ezp1skLd9W2D9D1C1iUTcDiqtytaD3X5ZVksrJRz2Obpi2jehy5RrpfvHsPY7OB466jNFLUaldAQr37dFzAOK0m41O03E5g1%2BDG7b9%2F2WYvWvEAE1A%2BxhkQBvZQAePT95zTS14xULFRQ4NarAodQDEH6CfaxlEB37DOFJePa4wffvOueYU0cpabtRwSxh79fkujd0Qg4%2FcEDGnUwsIuPvwY6pgElrk8EFdcFZygBT8r0hky6zcWTkFnhureUs0kKPvsB1KAeGF4z9UxGpcBOBkrP5AIDReEo4XtdVxsqgZ6UhaZKsOqhEqT1XVg6TtufHGAlwS7CEfVR9M5EmfmIJP0lxZZKMAB51KlJ%2FsD3JguhM6Y1k3sX5lhe0zOoZAptIl3uQFtZ7Xfd0%2F1Z9ySf%2Bn5%2FMcgVSntALLBDHX8rDuAwCvXY5ee7imp9&X-Amz-Signature=63d966bd8e5e2201b6507d49abf886991538af919c88af10667c9515001bf832&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZUUXIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQYaIdMYoYIumma8B3PjBGwQvWK7%2F0%2BxNhnCVYDRK3PAiBWQ9EHSX%2FMWYnL9daH62a25OC1woY4fMpFZVMM1t5W7yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdzTeZnwX9B8PEckxKtwDMOzl0KU23ywEZJvo1d6btJuGwoSUbcNnLyFP647oqyUY20qgDsYV3AKUkGHjppVC6VnDwiDoTuJZARCd9ny8DhdTo2V7bk8C%2F6Euj9yJnRoH%2BdrquqPGM7OQEaOIj8ijaHrGtIahUeS1r1Wb9OhaAPDYmctKN99V36Qo8wji%2FYqaHFodYMoQB2zYolD2mNNaH8rcmJccQpvqbk89N08ymup7NGgTysSf2yh%2F0MGpCC7JG6qPW7ikwHDjqaEWc280cTvU0mZF%2BeGn0KApaEKqPr%2F2duyctucexrW2QDTNz3LhtE4RgW0CykTvwR%2FSSiPSg4FZm9YZcRubcEFERGeqedofl6J0U6LaZsmc8L8ppuEnU11onHZDPBf2G21E8OcvRzcpYm4f%2Bd%2FHqsLSXx82Yzpge3%2BzXpUMYsMOf2xbA4%2F0Ezp1skLd9W2D9D1C1iUTcDiqtytaD3X5ZVksrJRz2Obpi2jehy5RrpfvHsPY7OB466jNFLUaldAQr37dFzAOK0m41O03E5g1%2BDG7b9%2F2WYvWvEAE1A%2BxhkQBvZQAePT95zTS14xULFRQ4NarAodQDEH6CfaxlEB37DOFJePa4wffvOueYU0cpabtRwSxh79fkujd0Qg4%2FcEDGnUwsIuPvwY6pgElrk8EFdcFZygBT8r0hky6zcWTkFnhureUs0kKPvsB1KAeGF4z9UxGpcBOBkrP5AIDReEo4XtdVxsqgZ6UhaZKsOqhEqT1XVg6TtufHGAlwS7CEfVR9M5EmfmIJP0lxZZKMAB51KlJ%2FsD3JguhM6Y1k3sX5lhe0zOoZAptIl3uQFtZ7Xfd0%2F1Z9ySf%2Bn5%2FMcgVSntALLBDHX8rDuAwCvXY5ee7imp9&X-Amz-Signature=b96ac9924525e39d8164cbad1992c673d759e2dcbf56c9ebbff8aef26339e636&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZUUXIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQYaIdMYoYIumma8B3PjBGwQvWK7%2F0%2BxNhnCVYDRK3PAiBWQ9EHSX%2FMWYnL9daH62a25OC1woY4fMpFZVMM1t5W7yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdzTeZnwX9B8PEckxKtwDMOzl0KU23ywEZJvo1d6btJuGwoSUbcNnLyFP647oqyUY20qgDsYV3AKUkGHjppVC6VnDwiDoTuJZARCd9ny8DhdTo2V7bk8C%2F6Euj9yJnRoH%2BdrquqPGM7OQEaOIj8ijaHrGtIahUeS1r1Wb9OhaAPDYmctKN99V36Qo8wji%2FYqaHFodYMoQB2zYolD2mNNaH8rcmJccQpvqbk89N08ymup7NGgTysSf2yh%2F0MGpCC7JG6qPW7ikwHDjqaEWc280cTvU0mZF%2BeGn0KApaEKqPr%2F2duyctucexrW2QDTNz3LhtE4RgW0CykTvwR%2FSSiPSg4FZm9YZcRubcEFERGeqedofl6J0U6LaZsmc8L8ppuEnU11onHZDPBf2G21E8OcvRzcpYm4f%2Bd%2FHqsLSXx82Yzpge3%2BzXpUMYsMOf2xbA4%2F0Ezp1skLd9W2D9D1C1iUTcDiqtytaD3X5ZVksrJRz2Obpi2jehy5RrpfvHsPY7OB466jNFLUaldAQr37dFzAOK0m41O03E5g1%2BDG7b9%2F2WYvWvEAE1A%2BxhkQBvZQAePT95zTS14xULFRQ4NarAodQDEH6CfaxlEB37DOFJePa4wffvOueYU0cpabtRwSxh79fkujd0Qg4%2FcEDGnUwsIuPvwY6pgElrk8EFdcFZygBT8r0hky6zcWTkFnhureUs0kKPvsB1KAeGF4z9UxGpcBOBkrP5AIDReEo4XtdVxsqgZ6UhaZKsOqhEqT1XVg6TtufHGAlwS7CEfVR9M5EmfmIJP0lxZZKMAB51KlJ%2FsD3JguhM6Y1k3sX5lhe0zOoZAptIl3uQFtZ7Xfd0%2F1Z9ySf%2Bn5%2FMcgVSntALLBDHX8rDuAwCvXY5ee7imp9&X-Amz-Signature=de68ebaea40fce967611e648bdbc9f371f1e4e890f8086aec6ee7f0b8475de2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZUUXIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQYaIdMYoYIumma8B3PjBGwQvWK7%2F0%2BxNhnCVYDRK3PAiBWQ9EHSX%2FMWYnL9daH62a25OC1woY4fMpFZVMM1t5W7yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdzTeZnwX9B8PEckxKtwDMOzl0KU23ywEZJvo1d6btJuGwoSUbcNnLyFP647oqyUY20qgDsYV3AKUkGHjppVC6VnDwiDoTuJZARCd9ny8DhdTo2V7bk8C%2F6Euj9yJnRoH%2BdrquqPGM7OQEaOIj8ijaHrGtIahUeS1r1Wb9OhaAPDYmctKN99V36Qo8wji%2FYqaHFodYMoQB2zYolD2mNNaH8rcmJccQpvqbk89N08ymup7NGgTysSf2yh%2F0MGpCC7JG6qPW7ikwHDjqaEWc280cTvU0mZF%2BeGn0KApaEKqPr%2F2duyctucexrW2QDTNz3LhtE4RgW0CykTvwR%2FSSiPSg4FZm9YZcRubcEFERGeqedofl6J0U6LaZsmc8L8ppuEnU11onHZDPBf2G21E8OcvRzcpYm4f%2Bd%2FHqsLSXx82Yzpge3%2BzXpUMYsMOf2xbA4%2F0Ezp1skLd9W2D9D1C1iUTcDiqtytaD3X5ZVksrJRz2Obpi2jehy5RrpfvHsPY7OB466jNFLUaldAQr37dFzAOK0m41O03E5g1%2BDG7b9%2F2WYvWvEAE1A%2BxhkQBvZQAePT95zTS14xULFRQ4NarAodQDEH6CfaxlEB37DOFJePa4wffvOueYU0cpabtRwSxh79fkujd0Qg4%2FcEDGnUwsIuPvwY6pgElrk8EFdcFZygBT8r0hky6zcWTkFnhureUs0kKPvsB1KAeGF4z9UxGpcBOBkrP5AIDReEo4XtdVxsqgZ6UhaZKsOqhEqT1XVg6TtufHGAlwS7CEfVR9M5EmfmIJP0lxZZKMAB51KlJ%2FsD3JguhM6Y1k3sX5lhe0zOoZAptIl3uQFtZ7Xfd0%2F1Z9ySf%2Bn5%2FMcgVSntALLBDHX8rDuAwCvXY5ee7imp9&X-Amz-Signature=4cb838aa1d3e37d27802b285cc9a9537acbe68266fc6847b460bd1df9726d404&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZUUXIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQYaIdMYoYIumma8B3PjBGwQvWK7%2F0%2BxNhnCVYDRK3PAiBWQ9EHSX%2FMWYnL9daH62a25OC1woY4fMpFZVMM1t5W7yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdzTeZnwX9B8PEckxKtwDMOzl0KU23ywEZJvo1d6btJuGwoSUbcNnLyFP647oqyUY20qgDsYV3AKUkGHjppVC6VnDwiDoTuJZARCd9ny8DhdTo2V7bk8C%2F6Euj9yJnRoH%2BdrquqPGM7OQEaOIj8ijaHrGtIahUeS1r1Wb9OhaAPDYmctKN99V36Qo8wji%2FYqaHFodYMoQB2zYolD2mNNaH8rcmJccQpvqbk89N08ymup7NGgTysSf2yh%2F0MGpCC7JG6qPW7ikwHDjqaEWc280cTvU0mZF%2BeGn0KApaEKqPr%2F2duyctucexrW2QDTNz3LhtE4RgW0CykTvwR%2FSSiPSg4FZm9YZcRubcEFERGeqedofl6J0U6LaZsmc8L8ppuEnU11onHZDPBf2G21E8OcvRzcpYm4f%2Bd%2FHqsLSXx82Yzpge3%2BzXpUMYsMOf2xbA4%2F0Ezp1skLd9W2D9D1C1iUTcDiqtytaD3X5ZVksrJRz2Obpi2jehy5RrpfvHsPY7OB466jNFLUaldAQr37dFzAOK0m41O03E5g1%2BDG7b9%2F2WYvWvEAE1A%2BxhkQBvZQAePT95zTS14xULFRQ4NarAodQDEH6CfaxlEB37DOFJePa4wffvOueYU0cpabtRwSxh79fkujd0Qg4%2FcEDGnUwsIuPvwY6pgElrk8EFdcFZygBT8r0hky6zcWTkFnhureUs0kKPvsB1KAeGF4z9UxGpcBOBkrP5AIDReEo4XtdVxsqgZ6UhaZKsOqhEqT1XVg6TtufHGAlwS7CEfVR9M5EmfmIJP0lxZZKMAB51KlJ%2FsD3JguhM6Y1k3sX5lhe0zOoZAptIl3uQFtZ7Xfd0%2F1Z9ySf%2Bn5%2FMcgVSntALLBDHX8rDuAwCvXY5ee7imp9&X-Amz-Signature=14aa67d2a3b8135a6e0d4b7abf4ec2f464681da9c7b33e9936b5534cd958ff35&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
