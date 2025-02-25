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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YZHJPE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC0AEJJkRJYsNpiOUmlwTwSrfG0unG%2BfuXuT4AtU21z4gIhAK99jMyGfeiSgR8f6wrgpPfGwce56fV015vXCpHIgsTlKv8DCEcQABoMNjM3NDIzMTgzODA1IgyHaNOw95Nb13zJ14Eq3APwn6MagH%2FyCYmTcQL6Gia3JbhqJL1VcEWEoewnWA%2FsAZM2zEGQkfKFZe8W%2Fdi%2BLdEQO5a%2BQ7sDVWpJqZ0RU1OSXbAaLFtHjjnyn8Ce%2BsUDmwvimdQoUOZ1ng2kZwiNEX1AUsI3mJyLjByBbzw30H86TnsCS06zPed17yL4plOKDl4JR%2FCtO7oovFr51tavcqBUuN3KY63L61DdqVNXlEDtR399WeCfribBZNWzT%2BkDVgdZdxj3Sur2rFfEBP%2ByNDgqrDa4uDBx2qZ78einPgwuVdq3y%2Bh67dQqHdIFgRq%2FG6VHVKBbl0zvcfkkgipfBJq0BBp6UfvW0kC5tOB0OT5k4fhmjBPNnqa%2FPSTmb3Hf5MhfE1mSWZN9VyZU4%2FhDqODSdpQjQU3%2F7b2ytybuL3vomvMyAuiynDBm5tuLIuKgDXbaYuHHz99lvtd6HxDtBq4K4BumWiejAlFZlrjrGdHz9lHdhc74NmhGziQPc9J3y4Uwges769s0qjdxsd5i28dzIOeZ9S5MhyywRwDBo4lKgdyjam5q%2BQO2K7yPU%2F1CXUYIaVKoTwyxQ8fNu9jG6bb9mACds7hRzOKJb8HnxhOF0PMnrSetcHNEIyZScWxga5ysRGZ5a%2Fu6RfXsgzDylfe9BjqkAfvAL1GnTymhOUvP1rJvIXdHs%2BTdxade%2BEdTzlJDhW%2B0fOSQyUK8LE7y81d7k73eijRnb5TV36pLiYJ677oNYKyxtEw1Gm7fkCVQ1qFo9rtppuWA6Usx1lcvdHXxSO8j9QqHuSAZ%2BS3o0y6qWOvLbQsUzWmGlf%2BDIT2BP3zDv7BLT92MnSmYg07P%2BMqfF8uG3QiHaqkUhNtCKdJdH%2BVPcqX0BCzb&X-Amz-Signature=e8246d2daeb148da75bd83da1dcf91644f7d1faab4594d1a0b0da2bc4e9fbbfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YZHJPE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC0AEJJkRJYsNpiOUmlwTwSrfG0unG%2BfuXuT4AtU21z4gIhAK99jMyGfeiSgR8f6wrgpPfGwce56fV015vXCpHIgsTlKv8DCEcQABoMNjM3NDIzMTgzODA1IgyHaNOw95Nb13zJ14Eq3APwn6MagH%2FyCYmTcQL6Gia3JbhqJL1VcEWEoewnWA%2FsAZM2zEGQkfKFZe8W%2Fdi%2BLdEQO5a%2BQ7sDVWpJqZ0RU1OSXbAaLFtHjjnyn8Ce%2BsUDmwvimdQoUOZ1ng2kZwiNEX1AUsI3mJyLjByBbzw30H86TnsCS06zPed17yL4plOKDl4JR%2FCtO7oovFr51tavcqBUuN3KY63L61DdqVNXlEDtR399WeCfribBZNWzT%2BkDVgdZdxj3Sur2rFfEBP%2ByNDgqrDa4uDBx2qZ78einPgwuVdq3y%2Bh67dQqHdIFgRq%2FG6VHVKBbl0zvcfkkgipfBJq0BBp6UfvW0kC5tOB0OT5k4fhmjBPNnqa%2FPSTmb3Hf5MhfE1mSWZN9VyZU4%2FhDqODSdpQjQU3%2F7b2ytybuL3vomvMyAuiynDBm5tuLIuKgDXbaYuHHz99lvtd6HxDtBq4K4BumWiejAlFZlrjrGdHz9lHdhc74NmhGziQPc9J3y4Uwges769s0qjdxsd5i28dzIOeZ9S5MhyywRwDBo4lKgdyjam5q%2BQO2K7yPU%2F1CXUYIaVKoTwyxQ8fNu9jG6bb9mACds7hRzOKJb8HnxhOF0PMnrSetcHNEIyZScWxga5ysRGZ5a%2Fu6RfXsgzDylfe9BjqkAfvAL1GnTymhOUvP1rJvIXdHs%2BTdxade%2BEdTzlJDhW%2B0fOSQyUK8LE7y81d7k73eijRnb5TV36pLiYJ677oNYKyxtEw1Gm7fkCVQ1qFo9rtppuWA6Usx1lcvdHXxSO8j9QqHuSAZ%2BS3o0y6qWOvLbQsUzWmGlf%2BDIT2BP3zDv7BLT92MnSmYg07P%2BMqfF8uG3QiHaqkUhNtCKdJdH%2BVPcqX0BCzb&X-Amz-Signature=d3689b23eeee407266d937688183690e3698aa65a03178f8746fd78a5cdbebb3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YZHJPE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC0AEJJkRJYsNpiOUmlwTwSrfG0unG%2BfuXuT4AtU21z4gIhAK99jMyGfeiSgR8f6wrgpPfGwce56fV015vXCpHIgsTlKv8DCEcQABoMNjM3NDIzMTgzODA1IgyHaNOw95Nb13zJ14Eq3APwn6MagH%2FyCYmTcQL6Gia3JbhqJL1VcEWEoewnWA%2FsAZM2zEGQkfKFZe8W%2Fdi%2BLdEQO5a%2BQ7sDVWpJqZ0RU1OSXbAaLFtHjjnyn8Ce%2BsUDmwvimdQoUOZ1ng2kZwiNEX1AUsI3mJyLjByBbzw30H86TnsCS06zPed17yL4plOKDl4JR%2FCtO7oovFr51tavcqBUuN3KY63L61DdqVNXlEDtR399WeCfribBZNWzT%2BkDVgdZdxj3Sur2rFfEBP%2ByNDgqrDa4uDBx2qZ78einPgwuVdq3y%2Bh67dQqHdIFgRq%2FG6VHVKBbl0zvcfkkgipfBJq0BBp6UfvW0kC5tOB0OT5k4fhmjBPNnqa%2FPSTmb3Hf5MhfE1mSWZN9VyZU4%2FhDqODSdpQjQU3%2F7b2ytybuL3vomvMyAuiynDBm5tuLIuKgDXbaYuHHz99lvtd6HxDtBq4K4BumWiejAlFZlrjrGdHz9lHdhc74NmhGziQPc9J3y4Uwges769s0qjdxsd5i28dzIOeZ9S5MhyywRwDBo4lKgdyjam5q%2BQO2K7yPU%2F1CXUYIaVKoTwyxQ8fNu9jG6bb9mACds7hRzOKJb8HnxhOF0PMnrSetcHNEIyZScWxga5ysRGZ5a%2Fu6RfXsgzDylfe9BjqkAfvAL1GnTymhOUvP1rJvIXdHs%2BTdxade%2BEdTzlJDhW%2B0fOSQyUK8LE7y81d7k73eijRnb5TV36pLiYJ677oNYKyxtEw1Gm7fkCVQ1qFo9rtppuWA6Usx1lcvdHXxSO8j9QqHuSAZ%2BS3o0y6qWOvLbQsUzWmGlf%2BDIT2BP3zDv7BLT92MnSmYg07P%2BMqfF8uG3QiHaqkUhNtCKdJdH%2BVPcqX0BCzb&X-Amz-Signature=de7eb4b084bdf2c5a82bf3169b43329f2a32108133e0f66c78c653f37fb2234c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YZHJPE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC0AEJJkRJYsNpiOUmlwTwSrfG0unG%2BfuXuT4AtU21z4gIhAK99jMyGfeiSgR8f6wrgpPfGwce56fV015vXCpHIgsTlKv8DCEcQABoMNjM3NDIzMTgzODA1IgyHaNOw95Nb13zJ14Eq3APwn6MagH%2FyCYmTcQL6Gia3JbhqJL1VcEWEoewnWA%2FsAZM2zEGQkfKFZe8W%2Fdi%2BLdEQO5a%2BQ7sDVWpJqZ0RU1OSXbAaLFtHjjnyn8Ce%2BsUDmwvimdQoUOZ1ng2kZwiNEX1AUsI3mJyLjByBbzw30H86TnsCS06zPed17yL4plOKDl4JR%2FCtO7oovFr51tavcqBUuN3KY63L61DdqVNXlEDtR399WeCfribBZNWzT%2BkDVgdZdxj3Sur2rFfEBP%2ByNDgqrDa4uDBx2qZ78einPgwuVdq3y%2Bh67dQqHdIFgRq%2FG6VHVKBbl0zvcfkkgipfBJq0BBp6UfvW0kC5tOB0OT5k4fhmjBPNnqa%2FPSTmb3Hf5MhfE1mSWZN9VyZU4%2FhDqODSdpQjQU3%2F7b2ytybuL3vomvMyAuiynDBm5tuLIuKgDXbaYuHHz99lvtd6HxDtBq4K4BumWiejAlFZlrjrGdHz9lHdhc74NmhGziQPc9J3y4Uwges769s0qjdxsd5i28dzIOeZ9S5MhyywRwDBo4lKgdyjam5q%2BQO2K7yPU%2F1CXUYIaVKoTwyxQ8fNu9jG6bb9mACds7hRzOKJb8HnxhOF0PMnrSetcHNEIyZScWxga5ysRGZ5a%2Fu6RfXsgzDylfe9BjqkAfvAL1GnTymhOUvP1rJvIXdHs%2BTdxade%2BEdTzlJDhW%2B0fOSQyUK8LE7y81d7k73eijRnb5TV36pLiYJ677oNYKyxtEw1Gm7fkCVQ1qFo9rtppuWA6Usx1lcvdHXxSO8j9QqHuSAZ%2BS3o0y6qWOvLbQsUzWmGlf%2BDIT2BP3zDv7BLT92MnSmYg07P%2BMqfF8uG3QiHaqkUhNtCKdJdH%2BVPcqX0BCzb&X-Amz-Signature=c8dbf2acc4f7039c7430689f432500d4b1b36260b263f5b88aeda50cd49c0de1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YZHJPE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC0AEJJkRJYsNpiOUmlwTwSrfG0unG%2BfuXuT4AtU21z4gIhAK99jMyGfeiSgR8f6wrgpPfGwce56fV015vXCpHIgsTlKv8DCEcQABoMNjM3NDIzMTgzODA1IgyHaNOw95Nb13zJ14Eq3APwn6MagH%2FyCYmTcQL6Gia3JbhqJL1VcEWEoewnWA%2FsAZM2zEGQkfKFZe8W%2Fdi%2BLdEQO5a%2BQ7sDVWpJqZ0RU1OSXbAaLFtHjjnyn8Ce%2BsUDmwvimdQoUOZ1ng2kZwiNEX1AUsI3mJyLjByBbzw30H86TnsCS06zPed17yL4plOKDl4JR%2FCtO7oovFr51tavcqBUuN3KY63L61DdqVNXlEDtR399WeCfribBZNWzT%2BkDVgdZdxj3Sur2rFfEBP%2ByNDgqrDa4uDBx2qZ78einPgwuVdq3y%2Bh67dQqHdIFgRq%2FG6VHVKBbl0zvcfkkgipfBJq0BBp6UfvW0kC5tOB0OT5k4fhmjBPNnqa%2FPSTmb3Hf5MhfE1mSWZN9VyZU4%2FhDqODSdpQjQU3%2F7b2ytybuL3vomvMyAuiynDBm5tuLIuKgDXbaYuHHz99lvtd6HxDtBq4K4BumWiejAlFZlrjrGdHz9lHdhc74NmhGziQPc9J3y4Uwges769s0qjdxsd5i28dzIOeZ9S5MhyywRwDBo4lKgdyjam5q%2BQO2K7yPU%2F1CXUYIaVKoTwyxQ8fNu9jG6bb9mACds7hRzOKJb8HnxhOF0PMnrSetcHNEIyZScWxga5ysRGZ5a%2Fu6RfXsgzDylfe9BjqkAfvAL1GnTymhOUvP1rJvIXdHs%2BTdxade%2BEdTzlJDhW%2B0fOSQyUK8LE7y81d7k73eijRnb5TV36pLiYJ677oNYKyxtEw1Gm7fkCVQ1qFo9rtppuWA6Usx1lcvdHXxSO8j9QqHuSAZ%2BS3o0y6qWOvLbQsUzWmGlf%2BDIT2BP3zDv7BLT92MnSmYg07P%2BMqfF8uG3QiHaqkUhNtCKdJdH%2BVPcqX0BCzb&X-Amz-Signature=e556cbd373bed3df1776a4b5545a359d47aa41a2beeec79d4bd0b1fab50adadd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YZHJPE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC0AEJJkRJYsNpiOUmlwTwSrfG0unG%2BfuXuT4AtU21z4gIhAK99jMyGfeiSgR8f6wrgpPfGwce56fV015vXCpHIgsTlKv8DCEcQABoMNjM3NDIzMTgzODA1IgyHaNOw95Nb13zJ14Eq3APwn6MagH%2FyCYmTcQL6Gia3JbhqJL1VcEWEoewnWA%2FsAZM2zEGQkfKFZe8W%2Fdi%2BLdEQO5a%2BQ7sDVWpJqZ0RU1OSXbAaLFtHjjnyn8Ce%2BsUDmwvimdQoUOZ1ng2kZwiNEX1AUsI3mJyLjByBbzw30H86TnsCS06zPed17yL4plOKDl4JR%2FCtO7oovFr51tavcqBUuN3KY63L61DdqVNXlEDtR399WeCfribBZNWzT%2BkDVgdZdxj3Sur2rFfEBP%2ByNDgqrDa4uDBx2qZ78einPgwuVdq3y%2Bh67dQqHdIFgRq%2FG6VHVKBbl0zvcfkkgipfBJq0BBp6UfvW0kC5tOB0OT5k4fhmjBPNnqa%2FPSTmb3Hf5MhfE1mSWZN9VyZU4%2FhDqODSdpQjQU3%2F7b2ytybuL3vomvMyAuiynDBm5tuLIuKgDXbaYuHHz99lvtd6HxDtBq4K4BumWiejAlFZlrjrGdHz9lHdhc74NmhGziQPc9J3y4Uwges769s0qjdxsd5i28dzIOeZ9S5MhyywRwDBo4lKgdyjam5q%2BQO2K7yPU%2F1CXUYIaVKoTwyxQ8fNu9jG6bb9mACds7hRzOKJb8HnxhOF0PMnrSetcHNEIyZScWxga5ysRGZ5a%2Fu6RfXsgzDylfe9BjqkAfvAL1GnTymhOUvP1rJvIXdHs%2BTdxade%2BEdTzlJDhW%2B0fOSQyUK8LE7y81d7k73eijRnb5TV36pLiYJ677oNYKyxtEw1Gm7fkCVQ1qFo9rtppuWA6Usx1lcvdHXxSO8j9QqHuSAZ%2BS3o0y6qWOvLbQsUzWmGlf%2BDIT2BP3zDv7BLT92MnSmYg07P%2BMqfF8uG3QiHaqkUhNtCKdJdH%2BVPcqX0BCzb&X-Amz-Signature=8011ee3defa82eafada73999741825cbb0f66da64678a0e891e5bb1f979fb765&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YZHJPE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC0AEJJkRJYsNpiOUmlwTwSrfG0unG%2BfuXuT4AtU21z4gIhAK99jMyGfeiSgR8f6wrgpPfGwce56fV015vXCpHIgsTlKv8DCEcQABoMNjM3NDIzMTgzODA1IgyHaNOw95Nb13zJ14Eq3APwn6MagH%2FyCYmTcQL6Gia3JbhqJL1VcEWEoewnWA%2FsAZM2zEGQkfKFZe8W%2Fdi%2BLdEQO5a%2BQ7sDVWpJqZ0RU1OSXbAaLFtHjjnyn8Ce%2BsUDmwvimdQoUOZ1ng2kZwiNEX1AUsI3mJyLjByBbzw30H86TnsCS06zPed17yL4plOKDl4JR%2FCtO7oovFr51tavcqBUuN3KY63L61DdqVNXlEDtR399WeCfribBZNWzT%2BkDVgdZdxj3Sur2rFfEBP%2ByNDgqrDa4uDBx2qZ78einPgwuVdq3y%2Bh67dQqHdIFgRq%2FG6VHVKBbl0zvcfkkgipfBJq0BBp6UfvW0kC5tOB0OT5k4fhmjBPNnqa%2FPSTmb3Hf5MhfE1mSWZN9VyZU4%2FhDqODSdpQjQU3%2F7b2ytybuL3vomvMyAuiynDBm5tuLIuKgDXbaYuHHz99lvtd6HxDtBq4K4BumWiejAlFZlrjrGdHz9lHdhc74NmhGziQPc9J3y4Uwges769s0qjdxsd5i28dzIOeZ9S5MhyywRwDBo4lKgdyjam5q%2BQO2K7yPU%2F1CXUYIaVKoTwyxQ8fNu9jG6bb9mACds7hRzOKJb8HnxhOF0PMnrSetcHNEIyZScWxga5ysRGZ5a%2Fu6RfXsgzDylfe9BjqkAfvAL1GnTymhOUvP1rJvIXdHs%2BTdxade%2BEdTzlJDhW%2B0fOSQyUK8LE7y81d7k73eijRnb5TV36pLiYJ677oNYKyxtEw1Gm7fkCVQ1qFo9rtppuWA6Usx1lcvdHXxSO8j9QqHuSAZ%2BS3o0y6qWOvLbQsUzWmGlf%2BDIT2BP3zDv7BLT92MnSmYg07P%2BMqfF8uG3QiHaqkUhNtCKdJdH%2BVPcqX0BCzb&X-Amz-Signature=94866dce63241fa301fed028e0b435aab2111377f982a8498d39abc2db305c12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YZHJPE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC0AEJJkRJYsNpiOUmlwTwSrfG0unG%2BfuXuT4AtU21z4gIhAK99jMyGfeiSgR8f6wrgpPfGwce56fV015vXCpHIgsTlKv8DCEcQABoMNjM3NDIzMTgzODA1IgyHaNOw95Nb13zJ14Eq3APwn6MagH%2FyCYmTcQL6Gia3JbhqJL1VcEWEoewnWA%2FsAZM2zEGQkfKFZe8W%2Fdi%2BLdEQO5a%2BQ7sDVWpJqZ0RU1OSXbAaLFtHjjnyn8Ce%2BsUDmwvimdQoUOZ1ng2kZwiNEX1AUsI3mJyLjByBbzw30H86TnsCS06zPed17yL4plOKDl4JR%2FCtO7oovFr51tavcqBUuN3KY63L61DdqVNXlEDtR399WeCfribBZNWzT%2BkDVgdZdxj3Sur2rFfEBP%2ByNDgqrDa4uDBx2qZ78einPgwuVdq3y%2Bh67dQqHdIFgRq%2FG6VHVKBbl0zvcfkkgipfBJq0BBp6UfvW0kC5tOB0OT5k4fhmjBPNnqa%2FPSTmb3Hf5MhfE1mSWZN9VyZU4%2FhDqODSdpQjQU3%2F7b2ytybuL3vomvMyAuiynDBm5tuLIuKgDXbaYuHHz99lvtd6HxDtBq4K4BumWiejAlFZlrjrGdHz9lHdhc74NmhGziQPc9J3y4Uwges769s0qjdxsd5i28dzIOeZ9S5MhyywRwDBo4lKgdyjam5q%2BQO2K7yPU%2F1CXUYIaVKoTwyxQ8fNu9jG6bb9mACds7hRzOKJb8HnxhOF0PMnrSetcHNEIyZScWxga5ysRGZ5a%2Fu6RfXsgzDylfe9BjqkAfvAL1GnTymhOUvP1rJvIXdHs%2BTdxade%2BEdTzlJDhW%2B0fOSQyUK8LE7y81d7k73eijRnb5TV36pLiYJ677oNYKyxtEw1Gm7fkCVQ1qFo9rtppuWA6Usx1lcvdHXxSO8j9QqHuSAZ%2BS3o0y6qWOvLbQsUzWmGlf%2BDIT2BP3zDv7BLT92MnSmYg07P%2BMqfF8uG3QiHaqkUhNtCKdJdH%2BVPcqX0BCzb&X-Amz-Signature=62340b6183b4966761babe7437fd6774c05d48f7e84732daa38167c382678f12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
