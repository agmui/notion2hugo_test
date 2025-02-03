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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H23PRJY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIJXiwCVevL9beZ2%2FzVdKYdYla85lT0q0FZzI4Bmw6sAIgBL%2FEPzg9XmHo4FpFx24P3ul2I9QgEh1J8NsOa1PsqZQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOlWVMHJ1KBychT4MSrcA%2F8GIRpQGvJn1aKEM9KnhgEZCMYY9jrqnQqppUMK78cFrBpYoDkSqz3jwzpl9fRXlO7jHfy1t%2Bm%2FhXeoqysNhuZuotRjnPGfCsGmi3H02%2FSXWAEM96DGPgJE%2FhKsa34dFck9DcvSaaN0N4ywFfzjGQwwkmDyBogpOwQcyN7NJ6hiiTtxAw1fLAemUzVO4iAg2JMSF%2FlR1scpwU%2FhB0p10jFvIfx8%2BjX8nYfpWyx%2B7KnrA%2BiakLE566y8urwzOAMx5sHpjuQj0Ua6XA0SOSzh5flj2rQ2q3DF2ys4%2FojiKOmREd9oMw15sG%2B849uX5k6solJysyJA4hRKOeovGxklir4JUv0ODt%2BIJGuzk7R5yZNilLK2l3Vd2JJw%2F61CCxNyuLPZVCikTgNB8wquobi%2B65VB8f%2Fn4eBi0nDEPlcKSCBIL8RvGIvwldSZZRQOAv%2FM4V5tm4YaFe%2BCT8K07ez%2FqhQXbOieKMqSkuUG8bT9NyHDjxRFV5kvXO%2Fa9nR1dlJ2ZEwTcZK2jHGYu3jZVwXRFSiszxq6ro6WLFKjVM3LwT8uAW7insbR2HYdJWoE6Z5um34%2FKvNHGryKmvnjIwc0edZus%2FuiS60kKxG%2FCpVnsdlXLnCI8q42ryBcgL%2FvMMO1gr0GOqUBQU0YhMqClYauNtmocUojhe4rr0rg7AdBPvMFm7%2FnZbUnNtRzJ8n9dB5uvcbZK6aFHIWFt3R4lBebUdeXzumqs0%2FY4mCqkGgjbV03QslCjF1ePu%2BRajslXVNbahgVpV5WCczZdkn4cEMlf4gvU%2By8RXRYdQ3GFKvZ7FiPcISYXrzaWx7HFQFgkD%2BI0VHSi97A7w75mRWwPAb7aVUh6KgkkgtipK0t&X-Amz-Signature=575ebd690f170db8f9f6852b808a2a3547c59fb49f322c01a4258d36cd46d068&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H23PRJY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIJXiwCVevL9beZ2%2FzVdKYdYla85lT0q0FZzI4Bmw6sAIgBL%2FEPzg9XmHo4FpFx24P3ul2I9QgEh1J8NsOa1PsqZQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOlWVMHJ1KBychT4MSrcA%2F8GIRpQGvJn1aKEM9KnhgEZCMYY9jrqnQqppUMK78cFrBpYoDkSqz3jwzpl9fRXlO7jHfy1t%2Bm%2FhXeoqysNhuZuotRjnPGfCsGmi3H02%2FSXWAEM96DGPgJE%2FhKsa34dFck9DcvSaaN0N4ywFfzjGQwwkmDyBogpOwQcyN7NJ6hiiTtxAw1fLAemUzVO4iAg2JMSF%2FlR1scpwU%2FhB0p10jFvIfx8%2BjX8nYfpWyx%2B7KnrA%2BiakLE566y8urwzOAMx5sHpjuQj0Ua6XA0SOSzh5flj2rQ2q3DF2ys4%2FojiKOmREd9oMw15sG%2B849uX5k6solJysyJA4hRKOeovGxklir4JUv0ODt%2BIJGuzk7R5yZNilLK2l3Vd2JJw%2F61CCxNyuLPZVCikTgNB8wquobi%2B65VB8f%2Fn4eBi0nDEPlcKSCBIL8RvGIvwldSZZRQOAv%2FM4V5tm4YaFe%2BCT8K07ez%2FqhQXbOieKMqSkuUG8bT9NyHDjxRFV5kvXO%2Fa9nR1dlJ2ZEwTcZK2jHGYu3jZVwXRFSiszxq6ro6WLFKjVM3LwT8uAW7insbR2HYdJWoE6Z5um34%2FKvNHGryKmvnjIwc0edZus%2FuiS60kKxG%2FCpVnsdlXLnCI8q42ryBcgL%2FvMMO1gr0GOqUBQU0YhMqClYauNtmocUojhe4rr0rg7AdBPvMFm7%2FnZbUnNtRzJ8n9dB5uvcbZK6aFHIWFt3R4lBebUdeXzumqs0%2FY4mCqkGgjbV03QslCjF1ePu%2BRajslXVNbahgVpV5WCczZdkn4cEMlf4gvU%2By8RXRYdQ3GFKvZ7FiPcISYXrzaWx7HFQFgkD%2BI0VHSi97A7w75mRWwPAb7aVUh6KgkkgtipK0t&X-Amz-Signature=ee018870d004763b08b91fc8383cd4060d281a113b35d72cb37c0aaa32a673b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H23PRJY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIJXiwCVevL9beZ2%2FzVdKYdYla85lT0q0FZzI4Bmw6sAIgBL%2FEPzg9XmHo4FpFx24P3ul2I9QgEh1J8NsOa1PsqZQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOlWVMHJ1KBychT4MSrcA%2F8GIRpQGvJn1aKEM9KnhgEZCMYY9jrqnQqppUMK78cFrBpYoDkSqz3jwzpl9fRXlO7jHfy1t%2Bm%2FhXeoqysNhuZuotRjnPGfCsGmi3H02%2FSXWAEM96DGPgJE%2FhKsa34dFck9DcvSaaN0N4ywFfzjGQwwkmDyBogpOwQcyN7NJ6hiiTtxAw1fLAemUzVO4iAg2JMSF%2FlR1scpwU%2FhB0p10jFvIfx8%2BjX8nYfpWyx%2B7KnrA%2BiakLE566y8urwzOAMx5sHpjuQj0Ua6XA0SOSzh5flj2rQ2q3DF2ys4%2FojiKOmREd9oMw15sG%2B849uX5k6solJysyJA4hRKOeovGxklir4JUv0ODt%2BIJGuzk7R5yZNilLK2l3Vd2JJw%2F61CCxNyuLPZVCikTgNB8wquobi%2B65VB8f%2Fn4eBi0nDEPlcKSCBIL8RvGIvwldSZZRQOAv%2FM4V5tm4YaFe%2BCT8K07ez%2FqhQXbOieKMqSkuUG8bT9NyHDjxRFV5kvXO%2Fa9nR1dlJ2ZEwTcZK2jHGYu3jZVwXRFSiszxq6ro6WLFKjVM3LwT8uAW7insbR2HYdJWoE6Z5um34%2FKvNHGryKmvnjIwc0edZus%2FuiS60kKxG%2FCpVnsdlXLnCI8q42ryBcgL%2FvMMO1gr0GOqUBQU0YhMqClYauNtmocUojhe4rr0rg7AdBPvMFm7%2FnZbUnNtRzJ8n9dB5uvcbZK6aFHIWFt3R4lBebUdeXzumqs0%2FY4mCqkGgjbV03QslCjF1ePu%2BRajslXVNbahgVpV5WCczZdkn4cEMlf4gvU%2By8RXRYdQ3GFKvZ7FiPcISYXrzaWx7HFQFgkD%2BI0VHSi97A7w75mRWwPAb7aVUh6KgkkgtipK0t&X-Amz-Signature=c66860e154e49774dbeac6c69dbf6dbbba6a0f4dbcdafb198513ce1f10f7398c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H23PRJY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIJXiwCVevL9beZ2%2FzVdKYdYla85lT0q0FZzI4Bmw6sAIgBL%2FEPzg9XmHo4FpFx24P3ul2I9QgEh1J8NsOa1PsqZQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOlWVMHJ1KBychT4MSrcA%2F8GIRpQGvJn1aKEM9KnhgEZCMYY9jrqnQqppUMK78cFrBpYoDkSqz3jwzpl9fRXlO7jHfy1t%2Bm%2FhXeoqysNhuZuotRjnPGfCsGmi3H02%2FSXWAEM96DGPgJE%2FhKsa34dFck9DcvSaaN0N4ywFfzjGQwwkmDyBogpOwQcyN7NJ6hiiTtxAw1fLAemUzVO4iAg2JMSF%2FlR1scpwU%2FhB0p10jFvIfx8%2BjX8nYfpWyx%2B7KnrA%2BiakLE566y8urwzOAMx5sHpjuQj0Ua6XA0SOSzh5flj2rQ2q3DF2ys4%2FojiKOmREd9oMw15sG%2B849uX5k6solJysyJA4hRKOeovGxklir4JUv0ODt%2BIJGuzk7R5yZNilLK2l3Vd2JJw%2F61CCxNyuLPZVCikTgNB8wquobi%2B65VB8f%2Fn4eBi0nDEPlcKSCBIL8RvGIvwldSZZRQOAv%2FM4V5tm4YaFe%2BCT8K07ez%2FqhQXbOieKMqSkuUG8bT9NyHDjxRFV5kvXO%2Fa9nR1dlJ2ZEwTcZK2jHGYu3jZVwXRFSiszxq6ro6WLFKjVM3LwT8uAW7insbR2HYdJWoE6Z5um34%2FKvNHGryKmvnjIwc0edZus%2FuiS60kKxG%2FCpVnsdlXLnCI8q42ryBcgL%2FvMMO1gr0GOqUBQU0YhMqClYauNtmocUojhe4rr0rg7AdBPvMFm7%2FnZbUnNtRzJ8n9dB5uvcbZK6aFHIWFt3R4lBebUdeXzumqs0%2FY4mCqkGgjbV03QslCjF1ePu%2BRajslXVNbahgVpV5WCczZdkn4cEMlf4gvU%2By8RXRYdQ3GFKvZ7FiPcISYXrzaWx7HFQFgkD%2BI0VHSi97A7w75mRWwPAb7aVUh6KgkkgtipK0t&X-Amz-Signature=f10440f5860c973f669e297c8cef660da2e82110d807e2f562669472feb6f804&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H23PRJY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIJXiwCVevL9beZ2%2FzVdKYdYla85lT0q0FZzI4Bmw6sAIgBL%2FEPzg9XmHo4FpFx24P3ul2I9QgEh1J8NsOa1PsqZQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOlWVMHJ1KBychT4MSrcA%2F8GIRpQGvJn1aKEM9KnhgEZCMYY9jrqnQqppUMK78cFrBpYoDkSqz3jwzpl9fRXlO7jHfy1t%2Bm%2FhXeoqysNhuZuotRjnPGfCsGmi3H02%2FSXWAEM96DGPgJE%2FhKsa34dFck9DcvSaaN0N4ywFfzjGQwwkmDyBogpOwQcyN7NJ6hiiTtxAw1fLAemUzVO4iAg2JMSF%2FlR1scpwU%2FhB0p10jFvIfx8%2BjX8nYfpWyx%2B7KnrA%2BiakLE566y8urwzOAMx5sHpjuQj0Ua6XA0SOSzh5flj2rQ2q3DF2ys4%2FojiKOmREd9oMw15sG%2B849uX5k6solJysyJA4hRKOeovGxklir4JUv0ODt%2BIJGuzk7R5yZNilLK2l3Vd2JJw%2F61CCxNyuLPZVCikTgNB8wquobi%2B65VB8f%2Fn4eBi0nDEPlcKSCBIL8RvGIvwldSZZRQOAv%2FM4V5tm4YaFe%2BCT8K07ez%2FqhQXbOieKMqSkuUG8bT9NyHDjxRFV5kvXO%2Fa9nR1dlJ2ZEwTcZK2jHGYu3jZVwXRFSiszxq6ro6WLFKjVM3LwT8uAW7insbR2HYdJWoE6Z5um34%2FKvNHGryKmvnjIwc0edZus%2FuiS60kKxG%2FCpVnsdlXLnCI8q42ryBcgL%2FvMMO1gr0GOqUBQU0YhMqClYauNtmocUojhe4rr0rg7AdBPvMFm7%2FnZbUnNtRzJ8n9dB5uvcbZK6aFHIWFt3R4lBebUdeXzumqs0%2FY4mCqkGgjbV03QslCjF1ePu%2BRajslXVNbahgVpV5WCczZdkn4cEMlf4gvU%2By8RXRYdQ3GFKvZ7FiPcISYXrzaWx7HFQFgkD%2BI0VHSi97A7w75mRWwPAb7aVUh6KgkkgtipK0t&X-Amz-Signature=db425894b4f3acdc19480d4daac7feba04dfe90516d16b18f8f542c6c2eb1eca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H23PRJY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIJXiwCVevL9beZ2%2FzVdKYdYla85lT0q0FZzI4Bmw6sAIgBL%2FEPzg9XmHo4FpFx24P3ul2I9QgEh1J8NsOa1PsqZQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOlWVMHJ1KBychT4MSrcA%2F8GIRpQGvJn1aKEM9KnhgEZCMYY9jrqnQqppUMK78cFrBpYoDkSqz3jwzpl9fRXlO7jHfy1t%2Bm%2FhXeoqysNhuZuotRjnPGfCsGmi3H02%2FSXWAEM96DGPgJE%2FhKsa34dFck9DcvSaaN0N4ywFfzjGQwwkmDyBogpOwQcyN7NJ6hiiTtxAw1fLAemUzVO4iAg2JMSF%2FlR1scpwU%2FhB0p10jFvIfx8%2BjX8nYfpWyx%2B7KnrA%2BiakLE566y8urwzOAMx5sHpjuQj0Ua6XA0SOSzh5flj2rQ2q3DF2ys4%2FojiKOmREd9oMw15sG%2B849uX5k6solJysyJA4hRKOeovGxklir4JUv0ODt%2BIJGuzk7R5yZNilLK2l3Vd2JJw%2F61CCxNyuLPZVCikTgNB8wquobi%2B65VB8f%2Fn4eBi0nDEPlcKSCBIL8RvGIvwldSZZRQOAv%2FM4V5tm4YaFe%2BCT8K07ez%2FqhQXbOieKMqSkuUG8bT9NyHDjxRFV5kvXO%2Fa9nR1dlJ2ZEwTcZK2jHGYu3jZVwXRFSiszxq6ro6WLFKjVM3LwT8uAW7insbR2HYdJWoE6Z5um34%2FKvNHGryKmvnjIwc0edZus%2FuiS60kKxG%2FCpVnsdlXLnCI8q42ryBcgL%2FvMMO1gr0GOqUBQU0YhMqClYauNtmocUojhe4rr0rg7AdBPvMFm7%2FnZbUnNtRzJ8n9dB5uvcbZK6aFHIWFt3R4lBebUdeXzumqs0%2FY4mCqkGgjbV03QslCjF1ePu%2BRajslXVNbahgVpV5WCczZdkn4cEMlf4gvU%2By8RXRYdQ3GFKvZ7FiPcISYXrzaWx7HFQFgkD%2BI0VHSi97A7w75mRWwPAb7aVUh6KgkkgtipK0t&X-Amz-Signature=baaecfd48271e4170da04646609e5e6eacca1764d3ebb827c48ca5e9d179d317&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H23PRJY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIJXiwCVevL9beZ2%2FzVdKYdYla85lT0q0FZzI4Bmw6sAIgBL%2FEPzg9XmHo4FpFx24P3ul2I9QgEh1J8NsOa1PsqZQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOlWVMHJ1KBychT4MSrcA%2F8GIRpQGvJn1aKEM9KnhgEZCMYY9jrqnQqppUMK78cFrBpYoDkSqz3jwzpl9fRXlO7jHfy1t%2Bm%2FhXeoqysNhuZuotRjnPGfCsGmi3H02%2FSXWAEM96DGPgJE%2FhKsa34dFck9DcvSaaN0N4ywFfzjGQwwkmDyBogpOwQcyN7NJ6hiiTtxAw1fLAemUzVO4iAg2JMSF%2FlR1scpwU%2FhB0p10jFvIfx8%2BjX8nYfpWyx%2B7KnrA%2BiakLE566y8urwzOAMx5sHpjuQj0Ua6XA0SOSzh5flj2rQ2q3DF2ys4%2FojiKOmREd9oMw15sG%2B849uX5k6solJysyJA4hRKOeovGxklir4JUv0ODt%2BIJGuzk7R5yZNilLK2l3Vd2JJw%2F61CCxNyuLPZVCikTgNB8wquobi%2B65VB8f%2Fn4eBi0nDEPlcKSCBIL8RvGIvwldSZZRQOAv%2FM4V5tm4YaFe%2BCT8K07ez%2FqhQXbOieKMqSkuUG8bT9NyHDjxRFV5kvXO%2Fa9nR1dlJ2ZEwTcZK2jHGYu3jZVwXRFSiszxq6ro6WLFKjVM3LwT8uAW7insbR2HYdJWoE6Z5um34%2FKvNHGryKmvnjIwc0edZus%2FuiS60kKxG%2FCpVnsdlXLnCI8q42ryBcgL%2FvMMO1gr0GOqUBQU0YhMqClYauNtmocUojhe4rr0rg7AdBPvMFm7%2FnZbUnNtRzJ8n9dB5uvcbZK6aFHIWFt3R4lBebUdeXzumqs0%2FY4mCqkGgjbV03QslCjF1ePu%2BRajslXVNbahgVpV5WCczZdkn4cEMlf4gvU%2By8RXRYdQ3GFKvZ7FiPcISYXrzaWx7HFQFgkD%2BI0VHSi97A7w75mRWwPAb7aVUh6KgkkgtipK0t&X-Amz-Signature=5924ffda4044ff0f1aac78369390311aaadc1e7eabb150a99cf71cf533e6156e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H23PRJY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIJXiwCVevL9beZ2%2FzVdKYdYla85lT0q0FZzI4Bmw6sAIgBL%2FEPzg9XmHo4FpFx24P3ul2I9QgEh1J8NsOa1PsqZQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOlWVMHJ1KBychT4MSrcA%2F8GIRpQGvJn1aKEM9KnhgEZCMYY9jrqnQqppUMK78cFrBpYoDkSqz3jwzpl9fRXlO7jHfy1t%2Bm%2FhXeoqysNhuZuotRjnPGfCsGmi3H02%2FSXWAEM96DGPgJE%2FhKsa34dFck9DcvSaaN0N4ywFfzjGQwwkmDyBogpOwQcyN7NJ6hiiTtxAw1fLAemUzVO4iAg2JMSF%2FlR1scpwU%2FhB0p10jFvIfx8%2BjX8nYfpWyx%2B7KnrA%2BiakLE566y8urwzOAMx5sHpjuQj0Ua6XA0SOSzh5flj2rQ2q3DF2ys4%2FojiKOmREd9oMw15sG%2B849uX5k6solJysyJA4hRKOeovGxklir4JUv0ODt%2BIJGuzk7R5yZNilLK2l3Vd2JJw%2F61CCxNyuLPZVCikTgNB8wquobi%2B65VB8f%2Fn4eBi0nDEPlcKSCBIL8RvGIvwldSZZRQOAv%2FM4V5tm4YaFe%2BCT8K07ez%2FqhQXbOieKMqSkuUG8bT9NyHDjxRFV5kvXO%2Fa9nR1dlJ2ZEwTcZK2jHGYu3jZVwXRFSiszxq6ro6WLFKjVM3LwT8uAW7insbR2HYdJWoE6Z5um34%2FKvNHGryKmvnjIwc0edZus%2FuiS60kKxG%2FCpVnsdlXLnCI8q42ryBcgL%2FvMMO1gr0GOqUBQU0YhMqClYauNtmocUojhe4rr0rg7AdBPvMFm7%2FnZbUnNtRzJ8n9dB5uvcbZK6aFHIWFt3R4lBebUdeXzumqs0%2FY4mCqkGgjbV03QslCjF1ePu%2BRajslXVNbahgVpV5WCczZdkn4cEMlf4gvU%2By8RXRYdQ3GFKvZ7FiPcISYXrzaWx7HFQFgkD%2BI0VHSi97A7w75mRWwPAb7aVUh6KgkkgtipK0t&X-Amz-Signature=91141c9e425773be22d51256b670f3cb17fae007ae6c16afad2745403ba28dea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
