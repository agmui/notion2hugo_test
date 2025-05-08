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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LM4YWGU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIbcO%2BA9Z8OyCnA5XHZDpZ%2F7ch7%2Bdmq3eY%2FPPHskqS4AiAi3Lm2pbHLLfBlck9bjPVZiDT9mq0AyOM641wujUDJaCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BG7SdLlxDeSu1xcQKtwDwvmyVAzSj9pqwDBakoCecwwdsupemCifmN1pGH5QL6ppzLSTQw%2FZOyQnUGwNDlYk7sYiF21y9bVvgDXprowxlfyMsW6pqL5bEFzS4VbWO3lDi%2B9%2BZReacBEQ1jMpDUuliQg6WJami4W%2FVi9t221zOfrnD3Lkcr%2BDM7TNY5TsLF5zmUMUBEedZLiqApFOkoMBUoBYWWgkuvqFed8iOHEBmwnj5Vf8gc0r5dnEh1eKEeS44F9FXOLkL2cy0dISQD9CJnNz1oG%2Bm0g0RH%2B4f4eu3uzqid9htM38TvwPlB7jimrknkn0Veet1LdU5JHiMvbQhNwiEmT2JFm8Z4K%2FGZKaODHnlPiD8yxcTZdGteSLe0zHygCMjJLStSThUOrQ3LwMVQgXgY9dgPaXzyuIk0H7HbHaxS4fddYLdpGYC45iSzVaWlToY%2FlB1PkXlrqVa2V60TedIsCp5YtohuDU%2B%2FRlITjLI%2BqioeY4mEfKkSiVASfLKrO7EstG4wezShA82y27A7oCOTfapueBxRJmMddKSYniz2bKnjt%2FhMlgddQxHm7CWT6N8rjZeAnJlWvUlZ%2FlnFY6V4LxAb5TCj5Tyqu92FnAI3LyuRltGUlA9Stj%2Bimb2K8IV2CEtNxIB20w2LDywAY6pgFGQOiWtqJyDf8LCbOEjW75jOYTZ1%2BE6n%2Fp3aM7voJHuglBjHy5iBskcyARxQQJwWwJDTMR2Ir%2Fk7YIYTlqw6kN8O4SNUkfP8z4c%2F5%2BXfKlvR9Cc3mdav%2FdsCDUqmdp57YNUP4JBKKsySYoJAkkdo70SSzSBHxYavDS7G1ZKvgMKy79z%2FhC12d5gxC7T9LA339F4Zvv1EfVTCMdfG7cb2BLKqDyKYuC&X-Amz-Signature=95726ee1ee0b118a6c0819930bf8417e78f62f526921d8f7063aefd13afe1055&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LM4YWGU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIbcO%2BA9Z8OyCnA5XHZDpZ%2F7ch7%2Bdmq3eY%2FPPHskqS4AiAi3Lm2pbHLLfBlck9bjPVZiDT9mq0AyOM641wujUDJaCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BG7SdLlxDeSu1xcQKtwDwvmyVAzSj9pqwDBakoCecwwdsupemCifmN1pGH5QL6ppzLSTQw%2FZOyQnUGwNDlYk7sYiF21y9bVvgDXprowxlfyMsW6pqL5bEFzS4VbWO3lDi%2B9%2BZReacBEQ1jMpDUuliQg6WJami4W%2FVi9t221zOfrnD3Lkcr%2BDM7TNY5TsLF5zmUMUBEedZLiqApFOkoMBUoBYWWgkuvqFed8iOHEBmwnj5Vf8gc0r5dnEh1eKEeS44F9FXOLkL2cy0dISQD9CJnNz1oG%2Bm0g0RH%2B4f4eu3uzqid9htM38TvwPlB7jimrknkn0Veet1LdU5JHiMvbQhNwiEmT2JFm8Z4K%2FGZKaODHnlPiD8yxcTZdGteSLe0zHygCMjJLStSThUOrQ3LwMVQgXgY9dgPaXzyuIk0H7HbHaxS4fddYLdpGYC45iSzVaWlToY%2FlB1PkXlrqVa2V60TedIsCp5YtohuDU%2B%2FRlITjLI%2BqioeY4mEfKkSiVASfLKrO7EstG4wezShA82y27A7oCOTfapueBxRJmMddKSYniz2bKnjt%2FhMlgddQxHm7CWT6N8rjZeAnJlWvUlZ%2FlnFY6V4LxAb5TCj5Tyqu92FnAI3LyuRltGUlA9Stj%2Bimb2K8IV2CEtNxIB20w2LDywAY6pgFGQOiWtqJyDf8LCbOEjW75jOYTZ1%2BE6n%2Fp3aM7voJHuglBjHy5iBskcyARxQQJwWwJDTMR2Ir%2Fk7YIYTlqw6kN8O4SNUkfP8z4c%2F5%2BXfKlvR9Cc3mdav%2FdsCDUqmdp57YNUP4JBKKsySYoJAkkdo70SSzSBHxYavDS7G1ZKvgMKy79z%2FhC12d5gxC7T9LA339F4Zvv1EfVTCMdfG7cb2BLKqDyKYuC&X-Amz-Signature=07aac376a2e0ca7c59a78e0355a0e82bc43f2e7d740b91bc976e7215011943a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LM4YWGU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIbcO%2BA9Z8OyCnA5XHZDpZ%2F7ch7%2Bdmq3eY%2FPPHskqS4AiAi3Lm2pbHLLfBlck9bjPVZiDT9mq0AyOM641wujUDJaCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BG7SdLlxDeSu1xcQKtwDwvmyVAzSj9pqwDBakoCecwwdsupemCifmN1pGH5QL6ppzLSTQw%2FZOyQnUGwNDlYk7sYiF21y9bVvgDXprowxlfyMsW6pqL5bEFzS4VbWO3lDi%2B9%2BZReacBEQ1jMpDUuliQg6WJami4W%2FVi9t221zOfrnD3Lkcr%2BDM7TNY5TsLF5zmUMUBEedZLiqApFOkoMBUoBYWWgkuvqFed8iOHEBmwnj5Vf8gc0r5dnEh1eKEeS44F9FXOLkL2cy0dISQD9CJnNz1oG%2Bm0g0RH%2B4f4eu3uzqid9htM38TvwPlB7jimrknkn0Veet1LdU5JHiMvbQhNwiEmT2JFm8Z4K%2FGZKaODHnlPiD8yxcTZdGteSLe0zHygCMjJLStSThUOrQ3LwMVQgXgY9dgPaXzyuIk0H7HbHaxS4fddYLdpGYC45iSzVaWlToY%2FlB1PkXlrqVa2V60TedIsCp5YtohuDU%2B%2FRlITjLI%2BqioeY4mEfKkSiVASfLKrO7EstG4wezShA82y27A7oCOTfapueBxRJmMddKSYniz2bKnjt%2FhMlgddQxHm7CWT6N8rjZeAnJlWvUlZ%2FlnFY6V4LxAb5TCj5Tyqu92FnAI3LyuRltGUlA9Stj%2Bimb2K8IV2CEtNxIB20w2LDywAY6pgFGQOiWtqJyDf8LCbOEjW75jOYTZ1%2BE6n%2Fp3aM7voJHuglBjHy5iBskcyARxQQJwWwJDTMR2Ir%2Fk7YIYTlqw6kN8O4SNUkfP8z4c%2F5%2BXfKlvR9Cc3mdav%2FdsCDUqmdp57YNUP4JBKKsySYoJAkkdo70SSzSBHxYavDS7G1ZKvgMKy79z%2FhC12d5gxC7T9LA339F4Zvv1EfVTCMdfG7cb2BLKqDyKYuC&X-Amz-Signature=ca75cd82faf4f6a1236d3d7c82c9e7211fa85b2a9a6291307472515320c73d00&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LM4YWGU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIbcO%2BA9Z8OyCnA5XHZDpZ%2F7ch7%2Bdmq3eY%2FPPHskqS4AiAi3Lm2pbHLLfBlck9bjPVZiDT9mq0AyOM641wujUDJaCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BG7SdLlxDeSu1xcQKtwDwvmyVAzSj9pqwDBakoCecwwdsupemCifmN1pGH5QL6ppzLSTQw%2FZOyQnUGwNDlYk7sYiF21y9bVvgDXprowxlfyMsW6pqL5bEFzS4VbWO3lDi%2B9%2BZReacBEQ1jMpDUuliQg6WJami4W%2FVi9t221zOfrnD3Lkcr%2BDM7TNY5TsLF5zmUMUBEedZLiqApFOkoMBUoBYWWgkuvqFed8iOHEBmwnj5Vf8gc0r5dnEh1eKEeS44F9FXOLkL2cy0dISQD9CJnNz1oG%2Bm0g0RH%2B4f4eu3uzqid9htM38TvwPlB7jimrknkn0Veet1LdU5JHiMvbQhNwiEmT2JFm8Z4K%2FGZKaODHnlPiD8yxcTZdGteSLe0zHygCMjJLStSThUOrQ3LwMVQgXgY9dgPaXzyuIk0H7HbHaxS4fddYLdpGYC45iSzVaWlToY%2FlB1PkXlrqVa2V60TedIsCp5YtohuDU%2B%2FRlITjLI%2BqioeY4mEfKkSiVASfLKrO7EstG4wezShA82y27A7oCOTfapueBxRJmMddKSYniz2bKnjt%2FhMlgddQxHm7CWT6N8rjZeAnJlWvUlZ%2FlnFY6V4LxAb5TCj5Tyqu92FnAI3LyuRltGUlA9Stj%2Bimb2K8IV2CEtNxIB20w2LDywAY6pgFGQOiWtqJyDf8LCbOEjW75jOYTZ1%2BE6n%2Fp3aM7voJHuglBjHy5iBskcyARxQQJwWwJDTMR2Ir%2Fk7YIYTlqw6kN8O4SNUkfP8z4c%2F5%2BXfKlvR9Cc3mdav%2FdsCDUqmdp57YNUP4JBKKsySYoJAkkdo70SSzSBHxYavDS7G1ZKvgMKy79z%2FhC12d5gxC7T9LA339F4Zvv1EfVTCMdfG7cb2BLKqDyKYuC&X-Amz-Signature=3dd9ea7eaa666f64c6f7360f94b7cce19b235617eb9f550aa65650154e0ea0f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LM4YWGU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIbcO%2BA9Z8OyCnA5XHZDpZ%2F7ch7%2Bdmq3eY%2FPPHskqS4AiAi3Lm2pbHLLfBlck9bjPVZiDT9mq0AyOM641wujUDJaCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BG7SdLlxDeSu1xcQKtwDwvmyVAzSj9pqwDBakoCecwwdsupemCifmN1pGH5QL6ppzLSTQw%2FZOyQnUGwNDlYk7sYiF21y9bVvgDXprowxlfyMsW6pqL5bEFzS4VbWO3lDi%2B9%2BZReacBEQ1jMpDUuliQg6WJami4W%2FVi9t221zOfrnD3Lkcr%2BDM7TNY5TsLF5zmUMUBEedZLiqApFOkoMBUoBYWWgkuvqFed8iOHEBmwnj5Vf8gc0r5dnEh1eKEeS44F9FXOLkL2cy0dISQD9CJnNz1oG%2Bm0g0RH%2B4f4eu3uzqid9htM38TvwPlB7jimrknkn0Veet1LdU5JHiMvbQhNwiEmT2JFm8Z4K%2FGZKaODHnlPiD8yxcTZdGteSLe0zHygCMjJLStSThUOrQ3LwMVQgXgY9dgPaXzyuIk0H7HbHaxS4fddYLdpGYC45iSzVaWlToY%2FlB1PkXlrqVa2V60TedIsCp5YtohuDU%2B%2FRlITjLI%2BqioeY4mEfKkSiVASfLKrO7EstG4wezShA82y27A7oCOTfapueBxRJmMddKSYniz2bKnjt%2FhMlgddQxHm7CWT6N8rjZeAnJlWvUlZ%2FlnFY6V4LxAb5TCj5Tyqu92FnAI3LyuRltGUlA9Stj%2Bimb2K8IV2CEtNxIB20w2LDywAY6pgFGQOiWtqJyDf8LCbOEjW75jOYTZ1%2BE6n%2Fp3aM7voJHuglBjHy5iBskcyARxQQJwWwJDTMR2Ir%2Fk7YIYTlqw6kN8O4SNUkfP8z4c%2F5%2BXfKlvR9Cc3mdav%2FdsCDUqmdp57YNUP4JBKKsySYoJAkkdo70SSzSBHxYavDS7G1ZKvgMKy79z%2FhC12d5gxC7T9LA339F4Zvv1EfVTCMdfG7cb2BLKqDyKYuC&X-Amz-Signature=0c26033f4a0e32e5dab72de9d312c93f7a47ee1416e405dbaa28af608cf63a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LM4YWGU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIbcO%2BA9Z8OyCnA5XHZDpZ%2F7ch7%2Bdmq3eY%2FPPHskqS4AiAi3Lm2pbHLLfBlck9bjPVZiDT9mq0AyOM641wujUDJaCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BG7SdLlxDeSu1xcQKtwDwvmyVAzSj9pqwDBakoCecwwdsupemCifmN1pGH5QL6ppzLSTQw%2FZOyQnUGwNDlYk7sYiF21y9bVvgDXprowxlfyMsW6pqL5bEFzS4VbWO3lDi%2B9%2BZReacBEQ1jMpDUuliQg6WJami4W%2FVi9t221zOfrnD3Lkcr%2BDM7TNY5TsLF5zmUMUBEedZLiqApFOkoMBUoBYWWgkuvqFed8iOHEBmwnj5Vf8gc0r5dnEh1eKEeS44F9FXOLkL2cy0dISQD9CJnNz1oG%2Bm0g0RH%2B4f4eu3uzqid9htM38TvwPlB7jimrknkn0Veet1LdU5JHiMvbQhNwiEmT2JFm8Z4K%2FGZKaODHnlPiD8yxcTZdGteSLe0zHygCMjJLStSThUOrQ3LwMVQgXgY9dgPaXzyuIk0H7HbHaxS4fddYLdpGYC45iSzVaWlToY%2FlB1PkXlrqVa2V60TedIsCp5YtohuDU%2B%2FRlITjLI%2BqioeY4mEfKkSiVASfLKrO7EstG4wezShA82y27A7oCOTfapueBxRJmMddKSYniz2bKnjt%2FhMlgddQxHm7CWT6N8rjZeAnJlWvUlZ%2FlnFY6V4LxAb5TCj5Tyqu92FnAI3LyuRltGUlA9Stj%2Bimb2K8IV2CEtNxIB20w2LDywAY6pgFGQOiWtqJyDf8LCbOEjW75jOYTZ1%2BE6n%2Fp3aM7voJHuglBjHy5iBskcyARxQQJwWwJDTMR2Ir%2Fk7YIYTlqw6kN8O4SNUkfP8z4c%2F5%2BXfKlvR9Cc3mdav%2FdsCDUqmdp57YNUP4JBKKsySYoJAkkdo70SSzSBHxYavDS7G1ZKvgMKy79z%2FhC12d5gxC7T9LA339F4Zvv1EfVTCMdfG7cb2BLKqDyKYuC&X-Amz-Signature=d99ea6a13b5275bccc9516d63f7660d704d3327b90225a79d1157fdac6da3c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LM4YWGU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIbcO%2BA9Z8OyCnA5XHZDpZ%2F7ch7%2Bdmq3eY%2FPPHskqS4AiAi3Lm2pbHLLfBlck9bjPVZiDT9mq0AyOM641wujUDJaCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BG7SdLlxDeSu1xcQKtwDwvmyVAzSj9pqwDBakoCecwwdsupemCifmN1pGH5QL6ppzLSTQw%2FZOyQnUGwNDlYk7sYiF21y9bVvgDXprowxlfyMsW6pqL5bEFzS4VbWO3lDi%2B9%2BZReacBEQ1jMpDUuliQg6WJami4W%2FVi9t221zOfrnD3Lkcr%2BDM7TNY5TsLF5zmUMUBEedZLiqApFOkoMBUoBYWWgkuvqFed8iOHEBmwnj5Vf8gc0r5dnEh1eKEeS44F9FXOLkL2cy0dISQD9CJnNz1oG%2Bm0g0RH%2B4f4eu3uzqid9htM38TvwPlB7jimrknkn0Veet1LdU5JHiMvbQhNwiEmT2JFm8Z4K%2FGZKaODHnlPiD8yxcTZdGteSLe0zHygCMjJLStSThUOrQ3LwMVQgXgY9dgPaXzyuIk0H7HbHaxS4fddYLdpGYC45iSzVaWlToY%2FlB1PkXlrqVa2V60TedIsCp5YtohuDU%2B%2FRlITjLI%2BqioeY4mEfKkSiVASfLKrO7EstG4wezShA82y27A7oCOTfapueBxRJmMddKSYniz2bKnjt%2FhMlgddQxHm7CWT6N8rjZeAnJlWvUlZ%2FlnFY6V4LxAb5TCj5Tyqu92FnAI3LyuRltGUlA9Stj%2Bimb2K8IV2CEtNxIB20w2LDywAY6pgFGQOiWtqJyDf8LCbOEjW75jOYTZ1%2BE6n%2Fp3aM7voJHuglBjHy5iBskcyARxQQJwWwJDTMR2Ir%2Fk7YIYTlqw6kN8O4SNUkfP8z4c%2F5%2BXfKlvR9Cc3mdav%2FdsCDUqmdp57YNUP4JBKKsySYoJAkkdo70SSzSBHxYavDS7G1ZKvgMKy79z%2FhC12d5gxC7T9LA339F4Zvv1EfVTCMdfG7cb2BLKqDyKYuC&X-Amz-Signature=f36996eba93e0fd39740bf4022d27b555915c94c762af8c403d8f8e5049c3738&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LM4YWGU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIbcO%2BA9Z8OyCnA5XHZDpZ%2F7ch7%2Bdmq3eY%2FPPHskqS4AiAi3Lm2pbHLLfBlck9bjPVZiDT9mq0AyOM641wujUDJaCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BG7SdLlxDeSu1xcQKtwDwvmyVAzSj9pqwDBakoCecwwdsupemCifmN1pGH5QL6ppzLSTQw%2FZOyQnUGwNDlYk7sYiF21y9bVvgDXprowxlfyMsW6pqL5bEFzS4VbWO3lDi%2B9%2BZReacBEQ1jMpDUuliQg6WJami4W%2FVi9t221zOfrnD3Lkcr%2BDM7TNY5TsLF5zmUMUBEedZLiqApFOkoMBUoBYWWgkuvqFed8iOHEBmwnj5Vf8gc0r5dnEh1eKEeS44F9FXOLkL2cy0dISQD9CJnNz1oG%2Bm0g0RH%2B4f4eu3uzqid9htM38TvwPlB7jimrknkn0Veet1LdU5JHiMvbQhNwiEmT2JFm8Z4K%2FGZKaODHnlPiD8yxcTZdGteSLe0zHygCMjJLStSThUOrQ3LwMVQgXgY9dgPaXzyuIk0H7HbHaxS4fddYLdpGYC45iSzVaWlToY%2FlB1PkXlrqVa2V60TedIsCp5YtohuDU%2B%2FRlITjLI%2BqioeY4mEfKkSiVASfLKrO7EstG4wezShA82y27A7oCOTfapueBxRJmMddKSYniz2bKnjt%2FhMlgddQxHm7CWT6N8rjZeAnJlWvUlZ%2FlnFY6V4LxAb5TCj5Tyqu92FnAI3LyuRltGUlA9Stj%2Bimb2K8IV2CEtNxIB20w2LDywAY6pgFGQOiWtqJyDf8LCbOEjW75jOYTZ1%2BE6n%2Fp3aM7voJHuglBjHy5iBskcyARxQQJwWwJDTMR2Ir%2Fk7YIYTlqw6kN8O4SNUkfP8z4c%2F5%2BXfKlvR9Cc3mdav%2FdsCDUqmdp57YNUP4JBKKsySYoJAkkdo70SSzSBHxYavDS7G1ZKvgMKy79z%2FhC12d5gxC7T9LA339F4Zvv1EfVTCMdfG7cb2BLKqDyKYuC&X-Amz-Signature=c3bc420fc6c531ba1e8b04b13027f91ce0b1171038053e2fb89ec82ee45c5572&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
