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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMPNVZ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEHexzAyzKz%2B6x%2BSMtFzJLea7ZOUwuRful0QzTnlCGl9AiAFUxwobQFWfobxo5rq9n16Aynm9LtVIMa5nZAzhBxlMiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMezqNQEKs1eVtyfp1KtwDEfpCPiUEfcxybZ2LfifEP83wUXzmLuqYPwiXvAIef%2BZEzwg4EihyrrXuYTYKtSzVmX458gnrfUknss2RxbrhU5CmfRsj1A3VYWlMZAepBBN9v7tz7lVhGlLy%2BzKOcWXk2bEJ%2Bi3IfW3wNBq%2FcJtuMBIMxpSbgc2rF0OhqsT3a3QWMNBB7MN5tnHGRZDPe%2B6H25atuq%2F%2BJKqiuQvjiq%2FLkq4UQSJTzTNTOdACBt1zwMtovTAK0YysvnhXFym8VjbMgibDd1xHN3HDlXyyYxdb5qEFDp3rPB4OchLYMeVmSmzGdCsydAb8qTG0n1m9PKH%2FWJNX7w9cQFZAyt%2FmUf98P7wgbtLfMxzwnYcmA4BB8e1Pd%2BGhzBCRg7xJnx%2B7o58OW9%2FPGSBcYpB3n8r%2F3GRnHWLjHBkhn7yyGYwZbcV0ZC7eePzCOqPgI1GvqVAlL7H%2BUcUJG4WKY3PC5haQ0X3a%2FWBRDWAKcP8BNsfQfLrNhOhdwP7DIzod0e4LTT0mJ6MpKMsOekTkzDVpZooh%2BERhQbATD5PaQFJ1fs2wXlAmYoelnDV25p8fmAjQQfZFlzUFepxUwL755%2F3funXkJxAvysDovFp1mjrFWsTEtYBI7qsuQ0JbJtkDEyPWZicwqICnwAY6pgF2%2BYsujqcytQ6i3Zap5luI4JLCJ7QlIYseThqE9jIbsvir62lvuDTv%2Bajo5XH6r504GouQSAQkVYrKnY6RS3RZlwP%2FcewdHKmYnaF%2FIf0Xzbf%2BDz18Hpq%2F3BF95jqcKYwNIFhsfBbzV%2B2GsvprDFycjNa804XVgxcc3Ykzf0UQZaK8mFJGcsqqIwga2li20c7oZoXpAchnun8%2FeXocbu8zGwh53RWY&X-Amz-Signature=632799ef607ab198f810d400cccf8775c4e1b897fd11114ca3b0cff149bfa910&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMPNVZ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEHexzAyzKz%2B6x%2BSMtFzJLea7ZOUwuRful0QzTnlCGl9AiAFUxwobQFWfobxo5rq9n16Aynm9LtVIMa5nZAzhBxlMiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMezqNQEKs1eVtyfp1KtwDEfpCPiUEfcxybZ2LfifEP83wUXzmLuqYPwiXvAIef%2BZEzwg4EihyrrXuYTYKtSzVmX458gnrfUknss2RxbrhU5CmfRsj1A3VYWlMZAepBBN9v7tz7lVhGlLy%2BzKOcWXk2bEJ%2Bi3IfW3wNBq%2FcJtuMBIMxpSbgc2rF0OhqsT3a3QWMNBB7MN5tnHGRZDPe%2B6H25atuq%2F%2BJKqiuQvjiq%2FLkq4UQSJTzTNTOdACBt1zwMtovTAK0YysvnhXFym8VjbMgibDd1xHN3HDlXyyYxdb5qEFDp3rPB4OchLYMeVmSmzGdCsydAb8qTG0n1m9PKH%2FWJNX7w9cQFZAyt%2FmUf98P7wgbtLfMxzwnYcmA4BB8e1Pd%2BGhzBCRg7xJnx%2B7o58OW9%2FPGSBcYpB3n8r%2F3GRnHWLjHBkhn7yyGYwZbcV0ZC7eePzCOqPgI1GvqVAlL7H%2BUcUJG4WKY3PC5haQ0X3a%2FWBRDWAKcP8BNsfQfLrNhOhdwP7DIzod0e4LTT0mJ6MpKMsOekTkzDVpZooh%2BERhQbATD5PaQFJ1fs2wXlAmYoelnDV25p8fmAjQQfZFlzUFepxUwL755%2F3funXkJxAvysDovFp1mjrFWsTEtYBI7qsuQ0JbJtkDEyPWZicwqICnwAY6pgF2%2BYsujqcytQ6i3Zap5luI4JLCJ7QlIYseThqE9jIbsvir62lvuDTv%2Bajo5XH6r504GouQSAQkVYrKnY6RS3RZlwP%2FcewdHKmYnaF%2FIf0Xzbf%2BDz18Hpq%2F3BF95jqcKYwNIFhsfBbzV%2B2GsvprDFycjNa804XVgxcc3Ykzf0UQZaK8mFJGcsqqIwga2li20c7oZoXpAchnun8%2FeXocbu8zGwh53RWY&X-Amz-Signature=2657603ae9fc5b0a861d9d210f98e826b4935f4aa47ee948c1ae42ff983eb81f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMPNVZ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEHexzAyzKz%2B6x%2BSMtFzJLea7ZOUwuRful0QzTnlCGl9AiAFUxwobQFWfobxo5rq9n16Aynm9LtVIMa5nZAzhBxlMiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMezqNQEKs1eVtyfp1KtwDEfpCPiUEfcxybZ2LfifEP83wUXzmLuqYPwiXvAIef%2BZEzwg4EihyrrXuYTYKtSzVmX458gnrfUknss2RxbrhU5CmfRsj1A3VYWlMZAepBBN9v7tz7lVhGlLy%2BzKOcWXk2bEJ%2Bi3IfW3wNBq%2FcJtuMBIMxpSbgc2rF0OhqsT3a3QWMNBB7MN5tnHGRZDPe%2B6H25atuq%2F%2BJKqiuQvjiq%2FLkq4UQSJTzTNTOdACBt1zwMtovTAK0YysvnhXFym8VjbMgibDd1xHN3HDlXyyYxdb5qEFDp3rPB4OchLYMeVmSmzGdCsydAb8qTG0n1m9PKH%2FWJNX7w9cQFZAyt%2FmUf98P7wgbtLfMxzwnYcmA4BB8e1Pd%2BGhzBCRg7xJnx%2B7o58OW9%2FPGSBcYpB3n8r%2F3GRnHWLjHBkhn7yyGYwZbcV0ZC7eePzCOqPgI1GvqVAlL7H%2BUcUJG4WKY3PC5haQ0X3a%2FWBRDWAKcP8BNsfQfLrNhOhdwP7DIzod0e4LTT0mJ6MpKMsOekTkzDVpZooh%2BERhQbATD5PaQFJ1fs2wXlAmYoelnDV25p8fmAjQQfZFlzUFepxUwL755%2F3funXkJxAvysDovFp1mjrFWsTEtYBI7qsuQ0JbJtkDEyPWZicwqICnwAY6pgF2%2BYsujqcytQ6i3Zap5luI4JLCJ7QlIYseThqE9jIbsvir62lvuDTv%2Bajo5XH6r504GouQSAQkVYrKnY6RS3RZlwP%2FcewdHKmYnaF%2FIf0Xzbf%2BDz18Hpq%2F3BF95jqcKYwNIFhsfBbzV%2B2GsvprDFycjNa804XVgxcc3Ykzf0UQZaK8mFJGcsqqIwga2li20c7oZoXpAchnun8%2FeXocbu8zGwh53RWY&X-Amz-Signature=8eed281af1027321b0562d7368d6a6da46751233b48c289ba0d01be03ad57d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMPNVZ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEHexzAyzKz%2B6x%2BSMtFzJLea7ZOUwuRful0QzTnlCGl9AiAFUxwobQFWfobxo5rq9n16Aynm9LtVIMa5nZAzhBxlMiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMezqNQEKs1eVtyfp1KtwDEfpCPiUEfcxybZ2LfifEP83wUXzmLuqYPwiXvAIef%2BZEzwg4EihyrrXuYTYKtSzVmX458gnrfUknss2RxbrhU5CmfRsj1A3VYWlMZAepBBN9v7tz7lVhGlLy%2BzKOcWXk2bEJ%2Bi3IfW3wNBq%2FcJtuMBIMxpSbgc2rF0OhqsT3a3QWMNBB7MN5tnHGRZDPe%2B6H25atuq%2F%2BJKqiuQvjiq%2FLkq4UQSJTzTNTOdACBt1zwMtovTAK0YysvnhXFym8VjbMgibDd1xHN3HDlXyyYxdb5qEFDp3rPB4OchLYMeVmSmzGdCsydAb8qTG0n1m9PKH%2FWJNX7w9cQFZAyt%2FmUf98P7wgbtLfMxzwnYcmA4BB8e1Pd%2BGhzBCRg7xJnx%2B7o58OW9%2FPGSBcYpB3n8r%2F3GRnHWLjHBkhn7yyGYwZbcV0ZC7eePzCOqPgI1GvqVAlL7H%2BUcUJG4WKY3PC5haQ0X3a%2FWBRDWAKcP8BNsfQfLrNhOhdwP7DIzod0e4LTT0mJ6MpKMsOekTkzDVpZooh%2BERhQbATD5PaQFJ1fs2wXlAmYoelnDV25p8fmAjQQfZFlzUFepxUwL755%2F3funXkJxAvysDovFp1mjrFWsTEtYBI7qsuQ0JbJtkDEyPWZicwqICnwAY6pgF2%2BYsujqcytQ6i3Zap5luI4JLCJ7QlIYseThqE9jIbsvir62lvuDTv%2Bajo5XH6r504GouQSAQkVYrKnY6RS3RZlwP%2FcewdHKmYnaF%2FIf0Xzbf%2BDz18Hpq%2F3BF95jqcKYwNIFhsfBbzV%2B2GsvprDFycjNa804XVgxcc3Ykzf0UQZaK8mFJGcsqqIwga2li20c7oZoXpAchnun8%2FeXocbu8zGwh53RWY&X-Amz-Signature=0f06676bf07a27161f519dd52e8b8b3dc754569df926341efd36f9dd7afbac6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMPNVZ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEHexzAyzKz%2B6x%2BSMtFzJLea7ZOUwuRful0QzTnlCGl9AiAFUxwobQFWfobxo5rq9n16Aynm9LtVIMa5nZAzhBxlMiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMezqNQEKs1eVtyfp1KtwDEfpCPiUEfcxybZ2LfifEP83wUXzmLuqYPwiXvAIef%2BZEzwg4EihyrrXuYTYKtSzVmX458gnrfUknss2RxbrhU5CmfRsj1A3VYWlMZAepBBN9v7tz7lVhGlLy%2BzKOcWXk2bEJ%2Bi3IfW3wNBq%2FcJtuMBIMxpSbgc2rF0OhqsT3a3QWMNBB7MN5tnHGRZDPe%2B6H25atuq%2F%2BJKqiuQvjiq%2FLkq4UQSJTzTNTOdACBt1zwMtovTAK0YysvnhXFym8VjbMgibDd1xHN3HDlXyyYxdb5qEFDp3rPB4OchLYMeVmSmzGdCsydAb8qTG0n1m9PKH%2FWJNX7w9cQFZAyt%2FmUf98P7wgbtLfMxzwnYcmA4BB8e1Pd%2BGhzBCRg7xJnx%2B7o58OW9%2FPGSBcYpB3n8r%2F3GRnHWLjHBkhn7yyGYwZbcV0ZC7eePzCOqPgI1GvqVAlL7H%2BUcUJG4WKY3PC5haQ0X3a%2FWBRDWAKcP8BNsfQfLrNhOhdwP7DIzod0e4LTT0mJ6MpKMsOekTkzDVpZooh%2BERhQbATD5PaQFJ1fs2wXlAmYoelnDV25p8fmAjQQfZFlzUFepxUwL755%2F3funXkJxAvysDovFp1mjrFWsTEtYBI7qsuQ0JbJtkDEyPWZicwqICnwAY6pgF2%2BYsujqcytQ6i3Zap5luI4JLCJ7QlIYseThqE9jIbsvir62lvuDTv%2Bajo5XH6r504GouQSAQkVYrKnY6RS3RZlwP%2FcewdHKmYnaF%2FIf0Xzbf%2BDz18Hpq%2F3BF95jqcKYwNIFhsfBbzV%2B2GsvprDFycjNa804XVgxcc3Ykzf0UQZaK8mFJGcsqqIwga2li20c7oZoXpAchnun8%2FeXocbu8zGwh53RWY&X-Amz-Signature=2d2ab4d8d4e6a64ef58e413e5bb051ce90b69b148918c0bcfac31398b17902c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMPNVZ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEHexzAyzKz%2B6x%2BSMtFzJLea7ZOUwuRful0QzTnlCGl9AiAFUxwobQFWfobxo5rq9n16Aynm9LtVIMa5nZAzhBxlMiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMezqNQEKs1eVtyfp1KtwDEfpCPiUEfcxybZ2LfifEP83wUXzmLuqYPwiXvAIef%2BZEzwg4EihyrrXuYTYKtSzVmX458gnrfUknss2RxbrhU5CmfRsj1A3VYWlMZAepBBN9v7tz7lVhGlLy%2BzKOcWXk2bEJ%2Bi3IfW3wNBq%2FcJtuMBIMxpSbgc2rF0OhqsT3a3QWMNBB7MN5tnHGRZDPe%2B6H25atuq%2F%2BJKqiuQvjiq%2FLkq4UQSJTzTNTOdACBt1zwMtovTAK0YysvnhXFym8VjbMgibDd1xHN3HDlXyyYxdb5qEFDp3rPB4OchLYMeVmSmzGdCsydAb8qTG0n1m9PKH%2FWJNX7w9cQFZAyt%2FmUf98P7wgbtLfMxzwnYcmA4BB8e1Pd%2BGhzBCRg7xJnx%2B7o58OW9%2FPGSBcYpB3n8r%2F3GRnHWLjHBkhn7yyGYwZbcV0ZC7eePzCOqPgI1GvqVAlL7H%2BUcUJG4WKY3PC5haQ0X3a%2FWBRDWAKcP8BNsfQfLrNhOhdwP7DIzod0e4LTT0mJ6MpKMsOekTkzDVpZooh%2BERhQbATD5PaQFJ1fs2wXlAmYoelnDV25p8fmAjQQfZFlzUFepxUwL755%2F3funXkJxAvysDovFp1mjrFWsTEtYBI7qsuQ0JbJtkDEyPWZicwqICnwAY6pgF2%2BYsujqcytQ6i3Zap5luI4JLCJ7QlIYseThqE9jIbsvir62lvuDTv%2Bajo5XH6r504GouQSAQkVYrKnY6RS3RZlwP%2FcewdHKmYnaF%2FIf0Xzbf%2BDz18Hpq%2F3BF95jqcKYwNIFhsfBbzV%2B2GsvprDFycjNa804XVgxcc3Ykzf0UQZaK8mFJGcsqqIwga2li20c7oZoXpAchnun8%2FeXocbu8zGwh53RWY&X-Amz-Signature=47eb95f88e7ca90194127b6c88331e8315150ce0bc5773f3e42e8ef2b17a1002&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMPNVZ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEHexzAyzKz%2B6x%2BSMtFzJLea7ZOUwuRful0QzTnlCGl9AiAFUxwobQFWfobxo5rq9n16Aynm9LtVIMa5nZAzhBxlMiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMezqNQEKs1eVtyfp1KtwDEfpCPiUEfcxybZ2LfifEP83wUXzmLuqYPwiXvAIef%2BZEzwg4EihyrrXuYTYKtSzVmX458gnrfUknss2RxbrhU5CmfRsj1A3VYWlMZAepBBN9v7tz7lVhGlLy%2BzKOcWXk2bEJ%2Bi3IfW3wNBq%2FcJtuMBIMxpSbgc2rF0OhqsT3a3QWMNBB7MN5tnHGRZDPe%2B6H25atuq%2F%2BJKqiuQvjiq%2FLkq4UQSJTzTNTOdACBt1zwMtovTAK0YysvnhXFym8VjbMgibDd1xHN3HDlXyyYxdb5qEFDp3rPB4OchLYMeVmSmzGdCsydAb8qTG0n1m9PKH%2FWJNX7w9cQFZAyt%2FmUf98P7wgbtLfMxzwnYcmA4BB8e1Pd%2BGhzBCRg7xJnx%2B7o58OW9%2FPGSBcYpB3n8r%2F3GRnHWLjHBkhn7yyGYwZbcV0ZC7eePzCOqPgI1GvqVAlL7H%2BUcUJG4WKY3PC5haQ0X3a%2FWBRDWAKcP8BNsfQfLrNhOhdwP7DIzod0e4LTT0mJ6MpKMsOekTkzDVpZooh%2BERhQbATD5PaQFJ1fs2wXlAmYoelnDV25p8fmAjQQfZFlzUFepxUwL755%2F3funXkJxAvysDovFp1mjrFWsTEtYBI7qsuQ0JbJtkDEyPWZicwqICnwAY6pgF2%2BYsujqcytQ6i3Zap5luI4JLCJ7QlIYseThqE9jIbsvir62lvuDTv%2Bajo5XH6r504GouQSAQkVYrKnY6RS3RZlwP%2FcewdHKmYnaF%2FIf0Xzbf%2BDz18Hpq%2F3BF95jqcKYwNIFhsfBbzV%2B2GsvprDFycjNa804XVgxcc3Ykzf0UQZaK8mFJGcsqqIwga2li20c7oZoXpAchnun8%2FeXocbu8zGwh53RWY&X-Amz-Signature=fa9b069c462fe035bdfbd27c0538c250d4dde3067c9e3d655c1e4cc31cfc28d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMPNVZ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEHexzAyzKz%2B6x%2BSMtFzJLea7ZOUwuRful0QzTnlCGl9AiAFUxwobQFWfobxo5rq9n16Aynm9LtVIMa5nZAzhBxlMiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMezqNQEKs1eVtyfp1KtwDEfpCPiUEfcxybZ2LfifEP83wUXzmLuqYPwiXvAIef%2BZEzwg4EihyrrXuYTYKtSzVmX458gnrfUknss2RxbrhU5CmfRsj1A3VYWlMZAepBBN9v7tz7lVhGlLy%2BzKOcWXk2bEJ%2Bi3IfW3wNBq%2FcJtuMBIMxpSbgc2rF0OhqsT3a3QWMNBB7MN5tnHGRZDPe%2B6H25atuq%2F%2BJKqiuQvjiq%2FLkq4UQSJTzTNTOdACBt1zwMtovTAK0YysvnhXFym8VjbMgibDd1xHN3HDlXyyYxdb5qEFDp3rPB4OchLYMeVmSmzGdCsydAb8qTG0n1m9PKH%2FWJNX7w9cQFZAyt%2FmUf98P7wgbtLfMxzwnYcmA4BB8e1Pd%2BGhzBCRg7xJnx%2B7o58OW9%2FPGSBcYpB3n8r%2F3GRnHWLjHBkhn7yyGYwZbcV0ZC7eePzCOqPgI1GvqVAlL7H%2BUcUJG4WKY3PC5haQ0X3a%2FWBRDWAKcP8BNsfQfLrNhOhdwP7DIzod0e4LTT0mJ6MpKMsOekTkzDVpZooh%2BERhQbATD5PaQFJ1fs2wXlAmYoelnDV25p8fmAjQQfZFlzUFepxUwL755%2F3funXkJxAvysDovFp1mjrFWsTEtYBI7qsuQ0JbJtkDEyPWZicwqICnwAY6pgF2%2BYsujqcytQ6i3Zap5luI4JLCJ7QlIYseThqE9jIbsvir62lvuDTv%2Bajo5XH6r504GouQSAQkVYrKnY6RS3RZlwP%2FcewdHKmYnaF%2FIf0Xzbf%2BDz18Hpq%2F3BF95jqcKYwNIFhsfBbzV%2B2GsvprDFycjNa804XVgxcc3Ykzf0UQZaK8mFJGcsqqIwga2li20c7oZoXpAchnun8%2FeXocbu8zGwh53RWY&X-Amz-Signature=0d3db960d2177b740b7135bdc507e38aa4c560a7a27c8bb36940c5969ae9c350&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
