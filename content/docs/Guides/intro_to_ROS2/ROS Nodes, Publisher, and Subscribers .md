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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLORBBND%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnoVgIsnLXK6Hfg063ommQl1RZAB3cW5nG26%2BGAi%2B%2B7AIhAO71bLWSl0PmbyjSux5ITOqCnqUhcZU4sM8mJ1%2FwwBRPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0q5djhd6H9ydtLc0q3APfK9grygdbz86f%2FSwW001D9v4E9f1NbZmKexdeWrsqe4URzTgbQoCKgGl016a6FeDX%2Bg8NyMjydI4SJHfHdRNtfBs5DjqUr92zUHrHWNkQUd%2F14Upu3NL9cTOcnOZiKtepJlnhu91sHKPAJjvnE360ABeuEi7XffBMUffAryTwhgq0HqnYQ%2BHbpc2ZA4VAQwf%2Bd0jKBZiV%2FnicuI69LTNC%2B2GyYzmOuYAQbhmx58S1zl0zvvPFC0%2BLSkaqFEGEaIq%2BFfHumwnrQtEXdG2Z74c9Dla%2FFd1XAsmLH%2BYCwE8NW%2FLE4vk%2B7j%2BlHHiVAEc7TRR%2FuisC6ei%2FAIF6%2Fq7Q4D3dNiZgdIw04QBZf%2BbRAPEdh4x%2FQvaSzN40t03H03YjRGbCQV6G4kr2B7MJjHDkEhvkiYBr2TTsoowMF4LPCkamCPTWkYJPtxnJRpm16xdr7AblcEExKVly8SjtwkXJ4ncg%2Fg0occYPQj3vfVSWMViaTn%2FJNiitBATxPNikvn4vWeVcTnduSYoG6YdnZ4CIb0%2FODO36A9hPAik3eiahc2lwbzAED6xD%2BoK0998M0K%2FRaWDCfRSYqStroO%2B1eVicMTw1e%2BMDyRp7Gpk%2FhROxkLD7FtlaljA6JNReypqafDDo39q9BjqkAdvTYMGk8EfvWze3ekhWk6IJa5YsbVqvlUgiQw3Ug4gJP3%2BqDVw6Rz0ZwNviYo7N%2F6I9KNxvOhI5vEdCyCCVO350V7l0pcDisDv4WgMcKkQ7lJhEr0jYK5z%2BR2AsJzK6pph6CPY9I7mWqVPdgzLLYH3ilVven3iN5Gt1I2Xg9QT0XDDbiXnYmFOXcQ985HEyIklmj9QZEeFzDvR6ohdMxjOM%2FskC&X-Amz-Signature=6386b8609b854311b85d977e866b12f9ef74703338037a9b34553b449acaf725&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLORBBND%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnoVgIsnLXK6Hfg063ommQl1RZAB3cW5nG26%2BGAi%2B%2B7AIhAO71bLWSl0PmbyjSux5ITOqCnqUhcZU4sM8mJ1%2FwwBRPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0q5djhd6H9ydtLc0q3APfK9grygdbz86f%2FSwW001D9v4E9f1NbZmKexdeWrsqe4URzTgbQoCKgGl016a6FeDX%2Bg8NyMjydI4SJHfHdRNtfBs5DjqUr92zUHrHWNkQUd%2F14Upu3NL9cTOcnOZiKtepJlnhu91sHKPAJjvnE360ABeuEi7XffBMUffAryTwhgq0HqnYQ%2BHbpc2ZA4VAQwf%2Bd0jKBZiV%2FnicuI69LTNC%2B2GyYzmOuYAQbhmx58S1zl0zvvPFC0%2BLSkaqFEGEaIq%2BFfHumwnrQtEXdG2Z74c9Dla%2FFd1XAsmLH%2BYCwE8NW%2FLE4vk%2B7j%2BlHHiVAEc7TRR%2FuisC6ei%2FAIF6%2Fq7Q4D3dNiZgdIw04QBZf%2BbRAPEdh4x%2FQvaSzN40t03H03YjRGbCQV6G4kr2B7MJjHDkEhvkiYBr2TTsoowMF4LPCkamCPTWkYJPtxnJRpm16xdr7AblcEExKVly8SjtwkXJ4ncg%2Fg0occYPQj3vfVSWMViaTn%2FJNiitBATxPNikvn4vWeVcTnduSYoG6YdnZ4CIb0%2FODO36A9hPAik3eiahc2lwbzAED6xD%2BoK0998M0K%2FRaWDCfRSYqStroO%2B1eVicMTw1e%2BMDyRp7Gpk%2FhROxkLD7FtlaljA6JNReypqafDDo39q9BjqkAdvTYMGk8EfvWze3ekhWk6IJa5YsbVqvlUgiQw3Ug4gJP3%2BqDVw6Rz0ZwNviYo7N%2F6I9KNxvOhI5vEdCyCCVO350V7l0pcDisDv4WgMcKkQ7lJhEr0jYK5z%2BR2AsJzK6pph6CPY9I7mWqVPdgzLLYH3ilVven3iN5Gt1I2Xg9QT0XDDbiXnYmFOXcQ985HEyIklmj9QZEeFzDvR6ohdMxjOM%2FskC&X-Amz-Signature=207afeed41c711dd14f80a5bdcf8b895a8b0052b670aa065ef66d902fbabb375&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLORBBND%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnoVgIsnLXK6Hfg063ommQl1RZAB3cW5nG26%2BGAi%2B%2B7AIhAO71bLWSl0PmbyjSux5ITOqCnqUhcZU4sM8mJ1%2FwwBRPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0q5djhd6H9ydtLc0q3APfK9grygdbz86f%2FSwW001D9v4E9f1NbZmKexdeWrsqe4URzTgbQoCKgGl016a6FeDX%2Bg8NyMjydI4SJHfHdRNtfBs5DjqUr92zUHrHWNkQUd%2F14Upu3NL9cTOcnOZiKtepJlnhu91sHKPAJjvnE360ABeuEi7XffBMUffAryTwhgq0HqnYQ%2BHbpc2ZA4VAQwf%2Bd0jKBZiV%2FnicuI69LTNC%2B2GyYzmOuYAQbhmx58S1zl0zvvPFC0%2BLSkaqFEGEaIq%2BFfHumwnrQtEXdG2Z74c9Dla%2FFd1XAsmLH%2BYCwE8NW%2FLE4vk%2B7j%2BlHHiVAEc7TRR%2FuisC6ei%2FAIF6%2Fq7Q4D3dNiZgdIw04QBZf%2BbRAPEdh4x%2FQvaSzN40t03H03YjRGbCQV6G4kr2B7MJjHDkEhvkiYBr2TTsoowMF4LPCkamCPTWkYJPtxnJRpm16xdr7AblcEExKVly8SjtwkXJ4ncg%2Fg0occYPQj3vfVSWMViaTn%2FJNiitBATxPNikvn4vWeVcTnduSYoG6YdnZ4CIb0%2FODO36A9hPAik3eiahc2lwbzAED6xD%2BoK0998M0K%2FRaWDCfRSYqStroO%2B1eVicMTw1e%2BMDyRp7Gpk%2FhROxkLD7FtlaljA6JNReypqafDDo39q9BjqkAdvTYMGk8EfvWze3ekhWk6IJa5YsbVqvlUgiQw3Ug4gJP3%2BqDVw6Rz0ZwNviYo7N%2F6I9KNxvOhI5vEdCyCCVO350V7l0pcDisDv4WgMcKkQ7lJhEr0jYK5z%2BR2AsJzK6pph6CPY9I7mWqVPdgzLLYH3ilVven3iN5Gt1I2Xg9QT0XDDbiXnYmFOXcQ985HEyIklmj9QZEeFzDvR6ohdMxjOM%2FskC&X-Amz-Signature=4575ecbfc13a0ba46e10833f67c8e22880145cf760e14afdb28924e2f0542875&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLORBBND%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnoVgIsnLXK6Hfg063ommQl1RZAB3cW5nG26%2BGAi%2B%2B7AIhAO71bLWSl0PmbyjSux5ITOqCnqUhcZU4sM8mJ1%2FwwBRPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0q5djhd6H9ydtLc0q3APfK9grygdbz86f%2FSwW001D9v4E9f1NbZmKexdeWrsqe4URzTgbQoCKgGl016a6FeDX%2Bg8NyMjydI4SJHfHdRNtfBs5DjqUr92zUHrHWNkQUd%2F14Upu3NL9cTOcnOZiKtepJlnhu91sHKPAJjvnE360ABeuEi7XffBMUffAryTwhgq0HqnYQ%2BHbpc2ZA4VAQwf%2Bd0jKBZiV%2FnicuI69LTNC%2B2GyYzmOuYAQbhmx58S1zl0zvvPFC0%2BLSkaqFEGEaIq%2BFfHumwnrQtEXdG2Z74c9Dla%2FFd1XAsmLH%2BYCwE8NW%2FLE4vk%2B7j%2BlHHiVAEc7TRR%2FuisC6ei%2FAIF6%2Fq7Q4D3dNiZgdIw04QBZf%2BbRAPEdh4x%2FQvaSzN40t03H03YjRGbCQV6G4kr2B7MJjHDkEhvkiYBr2TTsoowMF4LPCkamCPTWkYJPtxnJRpm16xdr7AblcEExKVly8SjtwkXJ4ncg%2Fg0occYPQj3vfVSWMViaTn%2FJNiitBATxPNikvn4vWeVcTnduSYoG6YdnZ4CIb0%2FODO36A9hPAik3eiahc2lwbzAED6xD%2BoK0998M0K%2FRaWDCfRSYqStroO%2B1eVicMTw1e%2BMDyRp7Gpk%2FhROxkLD7FtlaljA6JNReypqafDDo39q9BjqkAdvTYMGk8EfvWze3ekhWk6IJa5YsbVqvlUgiQw3Ug4gJP3%2BqDVw6Rz0ZwNviYo7N%2F6I9KNxvOhI5vEdCyCCVO350V7l0pcDisDv4WgMcKkQ7lJhEr0jYK5z%2BR2AsJzK6pph6CPY9I7mWqVPdgzLLYH3ilVven3iN5Gt1I2Xg9QT0XDDbiXnYmFOXcQ985HEyIklmj9QZEeFzDvR6ohdMxjOM%2FskC&X-Amz-Signature=fcea36b62a406c47375529af0b71a957cb5f1d3776a2d64e1c6187c685c962e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLORBBND%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnoVgIsnLXK6Hfg063ommQl1RZAB3cW5nG26%2BGAi%2B%2B7AIhAO71bLWSl0PmbyjSux5ITOqCnqUhcZU4sM8mJ1%2FwwBRPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0q5djhd6H9ydtLc0q3APfK9grygdbz86f%2FSwW001D9v4E9f1NbZmKexdeWrsqe4URzTgbQoCKgGl016a6FeDX%2Bg8NyMjydI4SJHfHdRNtfBs5DjqUr92zUHrHWNkQUd%2F14Upu3NL9cTOcnOZiKtepJlnhu91sHKPAJjvnE360ABeuEi7XffBMUffAryTwhgq0HqnYQ%2BHbpc2ZA4VAQwf%2Bd0jKBZiV%2FnicuI69LTNC%2B2GyYzmOuYAQbhmx58S1zl0zvvPFC0%2BLSkaqFEGEaIq%2BFfHumwnrQtEXdG2Z74c9Dla%2FFd1XAsmLH%2BYCwE8NW%2FLE4vk%2B7j%2BlHHiVAEc7TRR%2FuisC6ei%2FAIF6%2Fq7Q4D3dNiZgdIw04QBZf%2BbRAPEdh4x%2FQvaSzN40t03H03YjRGbCQV6G4kr2B7MJjHDkEhvkiYBr2TTsoowMF4LPCkamCPTWkYJPtxnJRpm16xdr7AblcEExKVly8SjtwkXJ4ncg%2Fg0occYPQj3vfVSWMViaTn%2FJNiitBATxPNikvn4vWeVcTnduSYoG6YdnZ4CIb0%2FODO36A9hPAik3eiahc2lwbzAED6xD%2BoK0998M0K%2FRaWDCfRSYqStroO%2B1eVicMTw1e%2BMDyRp7Gpk%2FhROxkLD7FtlaljA6JNReypqafDDo39q9BjqkAdvTYMGk8EfvWze3ekhWk6IJa5YsbVqvlUgiQw3Ug4gJP3%2BqDVw6Rz0ZwNviYo7N%2F6I9KNxvOhI5vEdCyCCVO350V7l0pcDisDv4WgMcKkQ7lJhEr0jYK5z%2BR2AsJzK6pph6CPY9I7mWqVPdgzLLYH3ilVven3iN5Gt1I2Xg9QT0XDDbiXnYmFOXcQ985HEyIklmj9QZEeFzDvR6ohdMxjOM%2FskC&X-Amz-Signature=e369f888037890cd49c4a8483e00b073f02cf3b748dd31c045aa7df1fc6cac9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLORBBND%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnoVgIsnLXK6Hfg063ommQl1RZAB3cW5nG26%2BGAi%2B%2B7AIhAO71bLWSl0PmbyjSux5ITOqCnqUhcZU4sM8mJ1%2FwwBRPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0q5djhd6H9ydtLc0q3APfK9grygdbz86f%2FSwW001D9v4E9f1NbZmKexdeWrsqe4URzTgbQoCKgGl016a6FeDX%2Bg8NyMjydI4SJHfHdRNtfBs5DjqUr92zUHrHWNkQUd%2F14Upu3NL9cTOcnOZiKtepJlnhu91sHKPAJjvnE360ABeuEi7XffBMUffAryTwhgq0HqnYQ%2BHbpc2ZA4VAQwf%2Bd0jKBZiV%2FnicuI69LTNC%2B2GyYzmOuYAQbhmx58S1zl0zvvPFC0%2BLSkaqFEGEaIq%2BFfHumwnrQtEXdG2Z74c9Dla%2FFd1XAsmLH%2BYCwE8NW%2FLE4vk%2B7j%2BlHHiVAEc7TRR%2FuisC6ei%2FAIF6%2Fq7Q4D3dNiZgdIw04QBZf%2BbRAPEdh4x%2FQvaSzN40t03H03YjRGbCQV6G4kr2B7MJjHDkEhvkiYBr2TTsoowMF4LPCkamCPTWkYJPtxnJRpm16xdr7AblcEExKVly8SjtwkXJ4ncg%2Fg0occYPQj3vfVSWMViaTn%2FJNiitBATxPNikvn4vWeVcTnduSYoG6YdnZ4CIb0%2FODO36A9hPAik3eiahc2lwbzAED6xD%2BoK0998M0K%2FRaWDCfRSYqStroO%2B1eVicMTw1e%2BMDyRp7Gpk%2FhROxkLD7FtlaljA6JNReypqafDDo39q9BjqkAdvTYMGk8EfvWze3ekhWk6IJa5YsbVqvlUgiQw3Ug4gJP3%2BqDVw6Rz0ZwNviYo7N%2F6I9KNxvOhI5vEdCyCCVO350V7l0pcDisDv4WgMcKkQ7lJhEr0jYK5z%2BR2AsJzK6pph6CPY9I7mWqVPdgzLLYH3ilVven3iN5Gt1I2Xg9QT0XDDbiXnYmFOXcQ985HEyIklmj9QZEeFzDvR6ohdMxjOM%2FskC&X-Amz-Signature=de165bc693be5fae2577c9fecb3d784aa4c1097755b5cc49b9c89acab84979b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLORBBND%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnoVgIsnLXK6Hfg063ommQl1RZAB3cW5nG26%2BGAi%2B%2B7AIhAO71bLWSl0PmbyjSux5ITOqCnqUhcZU4sM8mJ1%2FwwBRPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0q5djhd6H9ydtLc0q3APfK9grygdbz86f%2FSwW001D9v4E9f1NbZmKexdeWrsqe4URzTgbQoCKgGl016a6FeDX%2Bg8NyMjydI4SJHfHdRNtfBs5DjqUr92zUHrHWNkQUd%2F14Upu3NL9cTOcnOZiKtepJlnhu91sHKPAJjvnE360ABeuEi7XffBMUffAryTwhgq0HqnYQ%2BHbpc2ZA4VAQwf%2Bd0jKBZiV%2FnicuI69LTNC%2B2GyYzmOuYAQbhmx58S1zl0zvvPFC0%2BLSkaqFEGEaIq%2BFfHumwnrQtEXdG2Z74c9Dla%2FFd1XAsmLH%2BYCwE8NW%2FLE4vk%2B7j%2BlHHiVAEc7TRR%2FuisC6ei%2FAIF6%2Fq7Q4D3dNiZgdIw04QBZf%2BbRAPEdh4x%2FQvaSzN40t03H03YjRGbCQV6G4kr2B7MJjHDkEhvkiYBr2TTsoowMF4LPCkamCPTWkYJPtxnJRpm16xdr7AblcEExKVly8SjtwkXJ4ncg%2Fg0occYPQj3vfVSWMViaTn%2FJNiitBATxPNikvn4vWeVcTnduSYoG6YdnZ4CIb0%2FODO36A9hPAik3eiahc2lwbzAED6xD%2BoK0998M0K%2FRaWDCfRSYqStroO%2B1eVicMTw1e%2BMDyRp7Gpk%2FhROxkLD7FtlaljA6JNReypqafDDo39q9BjqkAdvTYMGk8EfvWze3ekhWk6IJa5YsbVqvlUgiQw3Ug4gJP3%2BqDVw6Rz0ZwNviYo7N%2F6I9KNxvOhI5vEdCyCCVO350V7l0pcDisDv4WgMcKkQ7lJhEr0jYK5z%2BR2AsJzK6pph6CPY9I7mWqVPdgzLLYH3ilVven3iN5Gt1I2Xg9QT0XDDbiXnYmFOXcQ985HEyIklmj9QZEeFzDvR6ohdMxjOM%2FskC&X-Amz-Signature=aa55d79f650c6e6df2dce29314e173286e0ec627ae669bebd59979cc6c3b5344&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLORBBND%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnoVgIsnLXK6Hfg063ommQl1RZAB3cW5nG26%2BGAi%2B%2B7AIhAO71bLWSl0PmbyjSux5ITOqCnqUhcZU4sM8mJ1%2FwwBRPKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0q5djhd6H9ydtLc0q3APfK9grygdbz86f%2FSwW001D9v4E9f1NbZmKexdeWrsqe4URzTgbQoCKgGl016a6FeDX%2Bg8NyMjydI4SJHfHdRNtfBs5DjqUr92zUHrHWNkQUd%2F14Upu3NL9cTOcnOZiKtepJlnhu91sHKPAJjvnE360ABeuEi7XffBMUffAryTwhgq0HqnYQ%2BHbpc2ZA4VAQwf%2Bd0jKBZiV%2FnicuI69LTNC%2B2GyYzmOuYAQbhmx58S1zl0zvvPFC0%2BLSkaqFEGEaIq%2BFfHumwnrQtEXdG2Z74c9Dla%2FFd1XAsmLH%2BYCwE8NW%2FLE4vk%2B7j%2BlHHiVAEc7TRR%2FuisC6ei%2FAIF6%2Fq7Q4D3dNiZgdIw04QBZf%2BbRAPEdh4x%2FQvaSzN40t03H03YjRGbCQV6G4kr2B7MJjHDkEhvkiYBr2TTsoowMF4LPCkamCPTWkYJPtxnJRpm16xdr7AblcEExKVly8SjtwkXJ4ncg%2Fg0occYPQj3vfVSWMViaTn%2FJNiitBATxPNikvn4vWeVcTnduSYoG6YdnZ4CIb0%2FODO36A9hPAik3eiahc2lwbzAED6xD%2BoK0998M0K%2FRaWDCfRSYqStroO%2B1eVicMTw1e%2BMDyRp7Gpk%2FhROxkLD7FtlaljA6JNReypqafDDo39q9BjqkAdvTYMGk8EfvWze3ekhWk6IJa5YsbVqvlUgiQw3Ug4gJP3%2BqDVw6Rz0ZwNviYo7N%2F6I9KNxvOhI5vEdCyCCVO350V7l0pcDisDv4WgMcKkQ7lJhEr0jYK5z%2BR2AsJzK6pph6CPY9I7mWqVPdgzLLYH3ilVven3iN5Gt1I2Xg9QT0XDDbiXnYmFOXcQ985HEyIklmj9QZEeFzDvR6ohdMxjOM%2FskC&X-Amz-Signature=4bd89bb1071bced89ed2257b3285f45f985810f98c33d882f7e637d39513daf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
