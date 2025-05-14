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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZOL3MH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDBakLAQ0WOC5eJoUhugQUdm%2BGVG3G7uXDLrO7tVhTIoAiAZJxeAy%2FyVkfNPOWhPN%2FwUSCxNNPmpSduhI1umQAMBGyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMib8UKN6883dH9PCCKtwDTngNNnQjeUqAjLWUXa9o6BReE5d8J8D1uZqePl%2FdUSPCR7Sv1QN0eaSJq3ua49qGeJcGL650LDpCpcXcx7S%2BwkNiFb%2FseKQTOpYaA8vOGFCdr5NVniw7ZadcXdaUKNaZadStInSt253lob%2B9BS1r2omfwS3ZEwwmjDeNKYvYT1CBC%2FjUdVgg9TXDVms5E5NQ3SjWoWfcOBiHNKZ7zMduuxv4hWnhVqN0yU8jRaC2uegLCADuMd2kujOH%2BC3GlzcafO8Ajy963LevI8wWSoNdH2unGxGHVS7V67cSnJIgM1yHQJT9KoHz1vLq22ByFqkhQioDTIbRzeWfjJ1sTLa4p8e7gGqhFh66UEB0hAQFfzRiaL6oAQJ%2FI6FfV6%2FtICdcS4lrmBjlQNuPeqmt8VdVjMhabphdzKMGHAjq6Fp%2FaKbDJ%2F8Mt%2BKT5pLbZXbcZz6xN1MsBYrG4S20oKLhExfk2ouTsxM4Lepa7uB8IsjD%2Bds4OrXDjjwNItL3v1pAY81wVimdFKs2TbjIZ4iDK7nusmOCz8iILaMUMvXMy%2Bk5qSb5xQhf2yGODmAAWPNWUAqrJ7jADgWchCmlBJ%2BAIAnOZXk1LYxPooMoC1WxxSilG5LQwOSJlqrAxnSBUZIw9IeSwQY6pgGiBJMKpYw1raW%2FxNifG4y4qz0In1fUnFb14RMiKZXXepOYclekn8sn96K4K25cs9xJ3QBvTYQ%2FHp1FtmTiINM4daTaiSKjND0B6Ozqj6b0MkG6tETtGOUddii0y5G9%2FnIQJM9ItkNd5AEB1NqYx6Es5%2B5vLNokgR3QM1Th9lm1E1al2algvR6%2BSXkD3pv0V%2FU444mC%2F5U%2B%2BKf7PNYWD0q01MoIz50x&X-Amz-Signature=27d65ecc0b050085dd99e4cb480d3a35cd210f449144d507019cc899f0642ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZOL3MH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDBakLAQ0WOC5eJoUhugQUdm%2BGVG3G7uXDLrO7tVhTIoAiAZJxeAy%2FyVkfNPOWhPN%2FwUSCxNNPmpSduhI1umQAMBGyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMib8UKN6883dH9PCCKtwDTngNNnQjeUqAjLWUXa9o6BReE5d8J8D1uZqePl%2FdUSPCR7Sv1QN0eaSJq3ua49qGeJcGL650LDpCpcXcx7S%2BwkNiFb%2FseKQTOpYaA8vOGFCdr5NVniw7ZadcXdaUKNaZadStInSt253lob%2B9BS1r2omfwS3ZEwwmjDeNKYvYT1CBC%2FjUdVgg9TXDVms5E5NQ3SjWoWfcOBiHNKZ7zMduuxv4hWnhVqN0yU8jRaC2uegLCADuMd2kujOH%2BC3GlzcafO8Ajy963LevI8wWSoNdH2unGxGHVS7V67cSnJIgM1yHQJT9KoHz1vLq22ByFqkhQioDTIbRzeWfjJ1sTLa4p8e7gGqhFh66UEB0hAQFfzRiaL6oAQJ%2FI6FfV6%2FtICdcS4lrmBjlQNuPeqmt8VdVjMhabphdzKMGHAjq6Fp%2FaKbDJ%2F8Mt%2BKT5pLbZXbcZz6xN1MsBYrG4S20oKLhExfk2ouTsxM4Lepa7uB8IsjD%2Bds4OrXDjjwNItL3v1pAY81wVimdFKs2TbjIZ4iDK7nusmOCz8iILaMUMvXMy%2Bk5qSb5xQhf2yGODmAAWPNWUAqrJ7jADgWchCmlBJ%2BAIAnOZXk1LYxPooMoC1WxxSilG5LQwOSJlqrAxnSBUZIw9IeSwQY6pgGiBJMKpYw1raW%2FxNifG4y4qz0In1fUnFb14RMiKZXXepOYclekn8sn96K4K25cs9xJ3QBvTYQ%2FHp1FtmTiINM4daTaiSKjND0B6Ozqj6b0MkG6tETtGOUddii0y5G9%2FnIQJM9ItkNd5AEB1NqYx6Es5%2B5vLNokgR3QM1Th9lm1E1al2algvR6%2BSXkD3pv0V%2FU444mC%2F5U%2B%2BKf7PNYWD0q01MoIz50x&X-Amz-Signature=73e7f3e3fb9b61980144fc97ca699d30c9edfd78a3da963846c34052ca3929be&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZOL3MH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDBakLAQ0WOC5eJoUhugQUdm%2BGVG3G7uXDLrO7tVhTIoAiAZJxeAy%2FyVkfNPOWhPN%2FwUSCxNNPmpSduhI1umQAMBGyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMib8UKN6883dH9PCCKtwDTngNNnQjeUqAjLWUXa9o6BReE5d8J8D1uZqePl%2FdUSPCR7Sv1QN0eaSJq3ua49qGeJcGL650LDpCpcXcx7S%2BwkNiFb%2FseKQTOpYaA8vOGFCdr5NVniw7ZadcXdaUKNaZadStInSt253lob%2B9BS1r2omfwS3ZEwwmjDeNKYvYT1CBC%2FjUdVgg9TXDVms5E5NQ3SjWoWfcOBiHNKZ7zMduuxv4hWnhVqN0yU8jRaC2uegLCADuMd2kujOH%2BC3GlzcafO8Ajy963LevI8wWSoNdH2unGxGHVS7V67cSnJIgM1yHQJT9KoHz1vLq22ByFqkhQioDTIbRzeWfjJ1sTLa4p8e7gGqhFh66UEB0hAQFfzRiaL6oAQJ%2FI6FfV6%2FtICdcS4lrmBjlQNuPeqmt8VdVjMhabphdzKMGHAjq6Fp%2FaKbDJ%2F8Mt%2BKT5pLbZXbcZz6xN1MsBYrG4S20oKLhExfk2ouTsxM4Lepa7uB8IsjD%2Bds4OrXDjjwNItL3v1pAY81wVimdFKs2TbjIZ4iDK7nusmOCz8iILaMUMvXMy%2Bk5qSb5xQhf2yGODmAAWPNWUAqrJ7jADgWchCmlBJ%2BAIAnOZXk1LYxPooMoC1WxxSilG5LQwOSJlqrAxnSBUZIw9IeSwQY6pgGiBJMKpYw1raW%2FxNifG4y4qz0In1fUnFb14RMiKZXXepOYclekn8sn96K4K25cs9xJ3QBvTYQ%2FHp1FtmTiINM4daTaiSKjND0B6Ozqj6b0MkG6tETtGOUddii0y5G9%2FnIQJM9ItkNd5AEB1NqYx6Es5%2B5vLNokgR3QM1Th9lm1E1al2algvR6%2BSXkD3pv0V%2FU444mC%2F5U%2B%2BKf7PNYWD0q01MoIz50x&X-Amz-Signature=61c66048de0c77019d76fbd02e9349cf6a99c46c9da0ceca653e742e2e378265&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZOL3MH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDBakLAQ0WOC5eJoUhugQUdm%2BGVG3G7uXDLrO7tVhTIoAiAZJxeAy%2FyVkfNPOWhPN%2FwUSCxNNPmpSduhI1umQAMBGyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMib8UKN6883dH9PCCKtwDTngNNnQjeUqAjLWUXa9o6BReE5d8J8D1uZqePl%2FdUSPCR7Sv1QN0eaSJq3ua49qGeJcGL650LDpCpcXcx7S%2BwkNiFb%2FseKQTOpYaA8vOGFCdr5NVniw7ZadcXdaUKNaZadStInSt253lob%2B9BS1r2omfwS3ZEwwmjDeNKYvYT1CBC%2FjUdVgg9TXDVms5E5NQ3SjWoWfcOBiHNKZ7zMduuxv4hWnhVqN0yU8jRaC2uegLCADuMd2kujOH%2BC3GlzcafO8Ajy963LevI8wWSoNdH2unGxGHVS7V67cSnJIgM1yHQJT9KoHz1vLq22ByFqkhQioDTIbRzeWfjJ1sTLa4p8e7gGqhFh66UEB0hAQFfzRiaL6oAQJ%2FI6FfV6%2FtICdcS4lrmBjlQNuPeqmt8VdVjMhabphdzKMGHAjq6Fp%2FaKbDJ%2F8Mt%2BKT5pLbZXbcZz6xN1MsBYrG4S20oKLhExfk2ouTsxM4Lepa7uB8IsjD%2Bds4OrXDjjwNItL3v1pAY81wVimdFKs2TbjIZ4iDK7nusmOCz8iILaMUMvXMy%2Bk5qSb5xQhf2yGODmAAWPNWUAqrJ7jADgWchCmlBJ%2BAIAnOZXk1LYxPooMoC1WxxSilG5LQwOSJlqrAxnSBUZIw9IeSwQY6pgGiBJMKpYw1raW%2FxNifG4y4qz0In1fUnFb14RMiKZXXepOYclekn8sn96K4K25cs9xJ3QBvTYQ%2FHp1FtmTiINM4daTaiSKjND0B6Ozqj6b0MkG6tETtGOUddii0y5G9%2FnIQJM9ItkNd5AEB1NqYx6Es5%2B5vLNokgR3QM1Th9lm1E1al2algvR6%2BSXkD3pv0V%2FU444mC%2F5U%2B%2BKf7PNYWD0q01MoIz50x&X-Amz-Signature=2026a6eef6a4ce751fe316d030e01597593a2ad5bf1550ecdab5307bbf723a90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZOL3MH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDBakLAQ0WOC5eJoUhugQUdm%2BGVG3G7uXDLrO7tVhTIoAiAZJxeAy%2FyVkfNPOWhPN%2FwUSCxNNPmpSduhI1umQAMBGyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMib8UKN6883dH9PCCKtwDTngNNnQjeUqAjLWUXa9o6BReE5d8J8D1uZqePl%2FdUSPCR7Sv1QN0eaSJq3ua49qGeJcGL650LDpCpcXcx7S%2BwkNiFb%2FseKQTOpYaA8vOGFCdr5NVniw7ZadcXdaUKNaZadStInSt253lob%2B9BS1r2omfwS3ZEwwmjDeNKYvYT1CBC%2FjUdVgg9TXDVms5E5NQ3SjWoWfcOBiHNKZ7zMduuxv4hWnhVqN0yU8jRaC2uegLCADuMd2kujOH%2BC3GlzcafO8Ajy963LevI8wWSoNdH2unGxGHVS7V67cSnJIgM1yHQJT9KoHz1vLq22ByFqkhQioDTIbRzeWfjJ1sTLa4p8e7gGqhFh66UEB0hAQFfzRiaL6oAQJ%2FI6FfV6%2FtICdcS4lrmBjlQNuPeqmt8VdVjMhabphdzKMGHAjq6Fp%2FaKbDJ%2F8Mt%2BKT5pLbZXbcZz6xN1MsBYrG4S20oKLhExfk2ouTsxM4Lepa7uB8IsjD%2Bds4OrXDjjwNItL3v1pAY81wVimdFKs2TbjIZ4iDK7nusmOCz8iILaMUMvXMy%2Bk5qSb5xQhf2yGODmAAWPNWUAqrJ7jADgWchCmlBJ%2BAIAnOZXk1LYxPooMoC1WxxSilG5LQwOSJlqrAxnSBUZIw9IeSwQY6pgGiBJMKpYw1raW%2FxNifG4y4qz0In1fUnFb14RMiKZXXepOYclekn8sn96K4K25cs9xJ3QBvTYQ%2FHp1FtmTiINM4daTaiSKjND0B6Ozqj6b0MkG6tETtGOUddii0y5G9%2FnIQJM9ItkNd5AEB1NqYx6Es5%2B5vLNokgR3QM1Th9lm1E1al2algvR6%2BSXkD3pv0V%2FU444mC%2F5U%2B%2BKf7PNYWD0q01MoIz50x&X-Amz-Signature=bc170d7a187b596f69163ba7b38eca3f311ae6b99eb9cea0f7ade6a33620a7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZOL3MH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDBakLAQ0WOC5eJoUhugQUdm%2BGVG3G7uXDLrO7tVhTIoAiAZJxeAy%2FyVkfNPOWhPN%2FwUSCxNNPmpSduhI1umQAMBGyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMib8UKN6883dH9PCCKtwDTngNNnQjeUqAjLWUXa9o6BReE5d8J8D1uZqePl%2FdUSPCR7Sv1QN0eaSJq3ua49qGeJcGL650LDpCpcXcx7S%2BwkNiFb%2FseKQTOpYaA8vOGFCdr5NVniw7ZadcXdaUKNaZadStInSt253lob%2B9BS1r2omfwS3ZEwwmjDeNKYvYT1CBC%2FjUdVgg9TXDVms5E5NQ3SjWoWfcOBiHNKZ7zMduuxv4hWnhVqN0yU8jRaC2uegLCADuMd2kujOH%2BC3GlzcafO8Ajy963LevI8wWSoNdH2unGxGHVS7V67cSnJIgM1yHQJT9KoHz1vLq22ByFqkhQioDTIbRzeWfjJ1sTLa4p8e7gGqhFh66UEB0hAQFfzRiaL6oAQJ%2FI6FfV6%2FtICdcS4lrmBjlQNuPeqmt8VdVjMhabphdzKMGHAjq6Fp%2FaKbDJ%2F8Mt%2BKT5pLbZXbcZz6xN1MsBYrG4S20oKLhExfk2ouTsxM4Lepa7uB8IsjD%2Bds4OrXDjjwNItL3v1pAY81wVimdFKs2TbjIZ4iDK7nusmOCz8iILaMUMvXMy%2Bk5qSb5xQhf2yGODmAAWPNWUAqrJ7jADgWchCmlBJ%2BAIAnOZXk1LYxPooMoC1WxxSilG5LQwOSJlqrAxnSBUZIw9IeSwQY6pgGiBJMKpYw1raW%2FxNifG4y4qz0In1fUnFb14RMiKZXXepOYclekn8sn96K4K25cs9xJ3QBvTYQ%2FHp1FtmTiINM4daTaiSKjND0B6Ozqj6b0MkG6tETtGOUddii0y5G9%2FnIQJM9ItkNd5AEB1NqYx6Es5%2B5vLNokgR3QM1Th9lm1E1al2algvR6%2BSXkD3pv0V%2FU444mC%2F5U%2B%2BKf7PNYWD0q01MoIz50x&X-Amz-Signature=23e552f3c02932421f1f4a1f2e7bb628eebf9870490a3a4d298bf6f9c1ed03cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZOL3MH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDBakLAQ0WOC5eJoUhugQUdm%2BGVG3G7uXDLrO7tVhTIoAiAZJxeAy%2FyVkfNPOWhPN%2FwUSCxNNPmpSduhI1umQAMBGyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMib8UKN6883dH9PCCKtwDTngNNnQjeUqAjLWUXa9o6BReE5d8J8D1uZqePl%2FdUSPCR7Sv1QN0eaSJq3ua49qGeJcGL650LDpCpcXcx7S%2BwkNiFb%2FseKQTOpYaA8vOGFCdr5NVniw7ZadcXdaUKNaZadStInSt253lob%2B9BS1r2omfwS3ZEwwmjDeNKYvYT1CBC%2FjUdVgg9TXDVms5E5NQ3SjWoWfcOBiHNKZ7zMduuxv4hWnhVqN0yU8jRaC2uegLCADuMd2kujOH%2BC3GlzcafO8Ajy963LevI8wWSoNdH2unGxGHVS7V67cSnJIgM1yHQJT9KoHz1vLq22ByFqkhQioDTIbRzeWfjJ1sTLa4p8e7gGqhFh66UEB0hAQFfzRiaL6oAQJ%2FI6FfV6%2FtICdcS4lrmBjlQNuPeqmt8VdVjMhabphdzKMGHAjq6Fp%2FaKbDJ%2F8Mt%2BKT5pLbZXbcZz6xN1MsBYrG4S20oKLhExfk2ouTsxM4Lepa7uB8IsjD%2Bds4OrXDjjwNItL3v1pAY81wVimdFKs2TbjIZ4iDK7nusmOCz8iILaMUMvXMy%2Bk5qSb5xQhf2yGODmAAWPNWUAqrJ7jADgWchCmlBJ%2BAIAnOZXk1LYxPooMoC1WxxSilG5LQwOSJlqrAxnSBUZIw9IeSwQY6pgGiBJMKpYw1raW%2FxNifG4y4qz0In1fUnFb14RMiKZXXepOYclekn8sn96K4K25cs9xJ3QBvTYQ%2FHp1FtmTiINM4daTaiSKjND0B6Ozqj6b0MkG6tETtGOUddii0y5G9%2FnIQJM9ItkNd5AEB1NqYx6Es5%2B5vLNokgR3QM1Th9lm1E1al2algvR6%2BSXkD3pv0V%2FU444mC%2F5U%2B%2BKf7PNYWD0q01MoIz50x&X-Amz-Signature=ef56bb9d5b0cd9bcd27da592741ff43776b8e0b52bd7bac551dfa35af4a2632c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZOL3MH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDBakLAQ0WOC5eJoUhugQUdm%2BGVG3G7uXDLrO7tVhTIoAiAZJxeAy%2FyVkfNPOWhPN%2FwUSCxNNPmpSduhI1umQAMBGyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMib8UKN6883dH9PCCKtwDTngNNnQjeUqAjLWUXa9o6BReE5d8J8D1uZqePl%2FdUSPCR7Sv1QN0eaSJq3ua49qGeJcGL650LDpCpcXcx7S%2BwkNiFb%2FseKQTOpYaA8vOGFCdr5NVniw7ZadcXdaUKNaZadStInSt253lob%2B9BS1r2omfwS3ZEwwmjDeNKYvYT1CBC%2FjUdVgg9TXDVms5E5NQ3SjWoWfcOBiHNKZ7zMduuxv4hWnhVqN0yU8jRaC2uegLCADuMd2kujOH%2BC3GlzcafO8Ajy963LevI8wWSoNdH2unGxGHVS7V67cSnJIgM1yHQJT9KoHz1vLq22ByFqkhQioDTIbRzeWfjJ1sTLa4p8e7gGqhFh66UEB0hAQFfzRiaL6oAQJ%2FI6FfV6%2FtICdcS4lrmBjlQNuPeqmt8VdVjMhabphdzKMGHAjq6Fp%2FaKbDJ%2F8Mt%2BKT5pLbZXbcZz6xN1MsBYrG4S20oKLhExfk2ouTsxM4Lepa7uB8IsjD%2Bds4OrXDjjwNItL3v1pAY81wVimdFKs2TbjIZ4iDK7nusmOCz8iILaMUMvXMy%2Bk5qSb5xQhf2yGODmAAWPNWUAqrJ7jADgWchCmlBJ%2BAIAnOZXk1LYxPooMoC1WxxSilG5LQwOSJlqrAxnSBUZIw9IeSwQY6pgGiBJMKpYw1raW%2FxNifG4y4qz0In1fUnFb14RMiKZXXepOYclekn8sn96K4K25cs9xJ3QBvTYQ%2FHp1FtmTiINM4daTaiSKjND0B6Ozqj6b0MkG6tETtGOUddii0y5G9%2FnIQJM9ItkNd5AEB1NqYx6Es5%2B5vLNokgR3QM1Th9lm1E1al2algvR6%2BSXkD3pv0V%2FU444mC%2F5U%2B%2BKf7PNYWD0q01MoIz50x&X-Amz-Signature=55fac0bb581b750ae3c4b5f62afb52775781089d9ada719a1ac80208b4df0281&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
