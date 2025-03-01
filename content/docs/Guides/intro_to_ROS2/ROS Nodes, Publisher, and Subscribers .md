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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKJYYXG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICvVZRncN7ZVkMq5oKxaDYWmJx6Z7DVB3gWnpKdgD7aNAiA0Uzj9TNGPhR0vtGIw3AFokH44Qwyin4esJ2FWnX9HsSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2hlo2bi9mLaljjNKtwD4ZfEMVrtZhOIOtk6NF9pmjsEd5QJI8B%2FOjDCMmRdAGcwj%2B1jiQ%2FrdaAkhEYmP0RgD9Yvw5fuLsat8oGdCArCo99%2BO2d65jkes7xaq9iM%2BIeukfzALrJdtH9TB8jP%2BuBEoPr3zKDTYa42WLvE%2F2aurKwG4g42VAjO24%2FCw32Groq4edswhc%2FKn7Darc6SnJoE4%2BsXUwBOlkLfGOD2IOM7VGnX8p48QljuCk5aEGYE2ru%2Bkr3qBrIrniIqZ38h8xJpoj%2FbjGMmkks0e9%2B6aOgwNRc6xQwvVgxULNGzA8jZq5%2BI0BoVywKvx5SczTgWYMqfH9qsGiEUnOKYH9eGNLU84XPKDfQ44SUURav99yQJVxbXn%2F5Oi0HoXT4SXOAhILrYKz1EwzCselXFlOYq2wRe3XDHMax4QT9aQDfxEt01d0dQ71qXb4nA7%2FG4Ve4AgUD9OR7rsVx27zsqNgVjipTibywRhQ0pZ2aOMgrhaagS1RiZdZhSydsa5h%2Fq7ZltGQwrxbO6eNRD4l3TQtJR2pIBs46L2L%2BOTDjnmubgaFygVGWQ50gDRb5FspESb0YERGVp5lknLMX4Mbz3yROw3WR1OI2B%2BVT%2Fju6UcxvSKyKIj9cb9%2Bzs6T9coSUN08Uw9pCKvgY6pgGvCZmO2qcv79Brr9R92pNNysXIv4h2H2F%2FKFNm9DL9Gw63JxRTtdfKmRwWmt3YRYVZylABtJJnOodDBWVbjkHsZyeg0oh5w%2FHy28svTigPxerTUiw7onyH4u0ilKklhMnjTCOqpT7kt3XeNuWXzGKv9q34KPK53bbstZaDgH6R%2FXoi9vIykgEzoiR0mcxqmuZnTG1v6p7siswl4LWlfk4oABDksMYY&X-Amz-Signature=dd7095c328e72eac4dc54a7739596c4bd97b6ba8104ef6227f96902be96b5d08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKJYYXG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICvVZRncN7ZVkMq5oKxaDYWmJx6Z7DVB3gWnpKdgD7aNAiA0Uzj9TNGPhR0vtGIw3AFokH44Qwyin4esJ2FWnX9HsSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2hlo2bi9mLaljjNKtwD4ZfEMVrtZhOIOtk6NF9pmjsEd5QJI8B%2FOjDCMmRdAGcwj%2B1jiQ%2FrdaAkhEYmP0RgD9Yvw5fuLsat8oGdCArCo99%2BO2d65jkes7xaq9iM%2BIeukfzALrJdtH9TB8jP%2BuBEoPr3zKDTYa42WLvE%2F2aurKwG4g42VAjO24%2FCw32Groq4edswhc%2FKn7Darc6SnJoE4%2BsXUwBOlkLfGOD2IOM7VGnX8p48QljuCk5aEGYE2ru%2Bkr3qBrIrniIqZ38h8xJpoj%2FbjGMmkks0e9%2B6aOgwNRc6xQwvVgxULNGzA8jZq5%2BI0BoVywKvx5SczTgWYMqfH9qsGiEUnOKYH9eGNLU84XPKDfQ44SUURav99yQJVxbXn%2F5Oi0HoXT4SXOAhILrYKz1EwzCselXFlOYq2wRe3XDHMax4QT9aQDfxEt01d0dQ71qXb4nA7%2FG4Ve4AgUD9OR7rsVx27zsqNgVjipTibywRhQ0pZ2aOMgrhaagS1RiZdZhSydsa5h%2Fq7ZltGQwrxbO6eNRD4l3TQtJR2pIBs46L2L%2BOTDjnmubgaFygVGWQ50gDRb5FspESb0YERGVp5lknLMX4Mbz3yROw3WR1OI2B%2BVT%2Fju6UcxvSKyKIj9cb9%2Bzs6T9coSUN08Uw9pCKvgY6pgGvCZmO2qcv79Brr9R92pNNysXIv4h2H2F%2FKFNm9DL9Gw63JxRTtdfKmRwWmt3YRYVZylABtJJnOodDBWVbjkHsZyeg0oh5w%2FHy28svTigPxerTUiw7onyH4u0ilKklhMnjTCOqpT7kt3XeNuWXzGKv9q34KPK53bbstZaDgH6R%2FXoi9vIykgEzoiR0mcxqmuZnTG1v6p7siswl4LWlfk4oABDksMYY&X-Amz-Signature=acd6035576dbf5aa39075f0aeeafce3c0285fa35cd33e94c3fc941f8463ba8db&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKJYYXG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICvVZRncN7ZVkMq5oKxaDYWmJx6Z7DVB3gWnpKdgD7aNAiA0Uzj9TNGPhR0vtGIw3AFokH44Qwyin4esJ2FWnX9HsSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2hlo2bi9mLaljjNKtwD4ZfEMVrtZhOIOtk6NF9pmjsEd5QJI8B%2FOjDCMmRdAGcwj%2B1jiQ%2FrdaAkhEYmP0RgD9Yvw5fuLsat8oGdCArCo99%2BO2d65jkes7xaq9iM%2BIeukfzALrJdtH9TB8jP%2BuBEoPr3zKDTYa42WLvE%2F2aurKwG4g42VAjO24%2FCw32Groq4edswhc%2FKn7Darc6SnJoE4%2BsXUwBOlkLfGOD2IOM7VGnX8p48QljuCk5aEGYE2ru%2Bkr3qBrIrniIqZ38h8xJpoj%2FbjGMmkks0e9%2B6aOgwNRc6xQwvVgxULNGzA8jZq5%2BI0BoVywKvx5SczTgWYMqfH9qsGiEUnOKYH9eGNLU84XPKDfQ44SUURav99yQJVxbXn%2F5Oi0HoXT4SXOAhILrYKz1EwzCselXFlOYq2wRe3XDHMax4QT9aQDfxEt01d0dQ71qXb4nA7%2FG4Ve4AgUD9OR7rsVx27zsqNgVjipTibywRhQ0pZ2aOMgrhaagS1RiZdZhSydsa5h%2Fq7ZltGQwrxbO6eNRD4l3TQtJR2pIBs46L2L%2BOTDjnmubgaFygVGWQ50gDRb5FspESb0YERGVp5lknLMX4Mbz3yROw3WR1OI2B%2BVT%2Fju6UcxvSKyKIj9cb9%2Bzs6T9coSUN08Uw9pCKvgY6pgGvCZmO2qcv79Brr9R92pNNysXIv4h2H2F%2FKFNm9DL9Gw63JxRTtdfKmRwWmt3YRYVZylABtJJnOodDBWVbjkHsZyeg0oh5w%2FHy28svTigPxerTUiw7onyH4u0ilKklhMnjTCOqpT7kt3XeNuWXzGKv9q34KPK53bbstZaDgH6R%2FXoi9vIykgEzoiR0mcxqmuZnTG1v6p7siswl4LWlfk4oABDksMYY&X-Amz-Signature=926ae18353b1f4f0532ec54cbb4853957d54b22621761cd73b1a88fd36f2ee8e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKJYYXG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICvVZRncN7ZVkMq5oKxaDYWmJx6Z7DVB3gWnpKdgD7aNAiA0Uzj9TNGPhR0vtGIw3AFokH44Qwyin4esJ2FWnX9HsSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2hlo2bi9mLaljjNKtwD4ZfEMVrtZhOIOtk6NF9pmjsEd5QJI8B%2FOjDCMmRdAGcwj%2B1jiQ%2FrdaAkhEYmP0RgD9Yvw5fuLsat8oGdCArCo99%2BO2d65jkes7xaq9iM%2BIeukfzALrJdtH9TB8jP%2BuBEoPr3zKDTYa42WLvE%2F2aurKwG4g42VAjO24%2FCw32Groq4edswhc%2FKn7Darc6SnJoE4%2BsXUwBOlkLfGOD2IOM7VGnX8p48QljuCk5aEGYE2ru%2Bkr3qBrIrniIqZ38h8xJpoj%2FbjGMmkks0e9%2B6aOgwNRc6xQwvVgxULNGzA8jZq5%2BI0BoVywKvx5SczTgWYMqfH9qsGiEUnOKYH9eGNLU84XPKDfQ44SUURav99yQJVxbXn%2F5Oi0HoXT4SXOAhILrYKz1EwzCselXFlOYq2wRe3XDHMax4QT9aQDfxEt01d0dQ71qXb4nA7%2FG4Ve4AgUD9OR7rsVx27zsqNgVjipTibywRhQ0pZ2aOMgrhaagS1RiZdZhSydsa5h%2Fq7ZltGQwrxbO6eNRD4l3TQtJR2pIBs46L2L%2BOTDjnmubgaFygVGWQ50gDRb5FspESb0YERGVp5lknLMX4Mbz3yROw3WR1OI2B%2BVT%2Fju6UcxvSKyKIj9cb9%2Bzs6T9coSUN08Uw9pCKvgY6pgGvCZmO2qcv79Brr9R92pNNysXIv4h2H2F%2FKFNm9DL9Gw63JxRTtdfKmRwWmt3YRYVZylABtJJnOodDBWVbjkHsZyeg0oh5w%2FHy28svTigPxerTUiw7onyH4u0ilKklhMnjTCOqpT7kt3XeNuWXzGKv9q34KPK53bbstZaDgH6R%2FXoi9vIykgEzoiR0mcxqmuZnTG1v6p7siswl4LWlfk4oABDksMYY&X-Amz-Signature=07fe8a6daf89c67cfb4b356268e772510fd5cf8bfb8975908b9cb28d52b40a80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKJYYXG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICvVZRncN7ZVkMq5oKxaDYWmJx6Z7DVB3gWnpKdgD7aNAiA0Uzj9TNGPhR0vtGIw3AFokH44Qwyin4esJ2FWnX9HsSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2hlo2bi9mLaljjNKtwD4ZfEMVrtZhOIOtk6NF9pmjsEd5QJI8B%2FOjDCMmRdAGcwj%2B1jiQ%2FrdaAkhEYmP0RgD9Yvw5fuLsat8oGdCArCo99%2BO2d65jkes7xaq9iM%2BIeukfzALrJdtH9TB8jP%2BuBEoPr3zKDTYa42WLvE%2F2aurKwG4g42VAjO24%2FCw32Groq4edswhc%2FKn7Darc6SnJoE4%2BsXUwBOlkLfGOD2IOM7VGnX8p48QljuCk5aEGYE2ru%2Bkr3qBrIrniIqZ38h8xJpoj%2FbjGMmkks0e9%2B6aOgwNRc6xQwvVgxULNGzA8jZq5%2BI0BoVywKvx5SczTgWYMqfH9qsGiEUnOKYH9eGNLU84XPKDfQ44SUURav99yQJVxbXn%2F5Oi0HoXT4SXOAhILrYKz1EwzCselXFlOYq2wRe3XDHMax4QT9aQDfxEt01d0dQ71qXb4nA7%2FG4Ve4AgUD9OR7rsVx27zsqNgVjipTibywRhQ0pZ2aOMgrhaagS1RiZdZhSydsa5h%2Fq7ZltGQwrxbO6eNRD4l3TQtJR2pIBs46L2L%2BOTDjnmubgaFygVGWQ50gDRb5FspESb0YERGVp5lknLMX4Mbz3yROw3WR1OI2B%2BVT%2Fju6UcxvSKyKIj9cb9%2Bzs6T9coSUN08Uw9pCKvgY6pgGvCZmO2qcv79Brr9R92pNNysXIv4h2H2F%2FKFNm9DL9Gw63JxRTtdfKmRwWmt3YRYVZylABtJJnOodDBWVbjkHsZyeg0oh5w%2FHy28svTigPxerTUiw7onyH4u0ilKklhMnjTCOqpT7kt3XeNuWXzGKv9q34KPK53bbstZaDgH6R%2FXoi9vIykgEzoiR0mcxqmuZnTG1v6p7siswl4LWlfk4oABDksMYY&X-Amz-Signature=95a90e43d002d287e2fa600d6d22deceedc341d63a945767e5933655554d97b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKJYYXG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICvVZRncN7ZVkMq5oKxaDYWmJx6Z7DVB3gWnpKdgD7aNAiA0Uzj9TNGPhR0vtGIw3AFokH44Qwyin4esJ2FWnX9HsSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2hlo2bi9mLaljjNKtwD4ZfEMVrtZhOIOtk6NF9pmjsEd5QJI8B%2FOjDCMmRdAGcwj%2B1jiQ%2FrdaAkhEYmP0RgD9Yvw5fuLsat8oGdCArCo99%2BO2d65jkes7xaq9iM%2BIeukfzALrJdtH9TB8jP%2BuBEoPr3zKDTYa42WLvE%2F2aurKwG4g42VAjO24%2FCw32Groq4edswhc%2FKn7Darc6SnJoE4%2BsXUwBOlkLfGOD2IOM7VGnX8p48QljuCk5aEGYE2ru%2Bkr3qBrIrniIqZ38h8xJpoj%2FbjGMmkks0e9%2B6aOgwNRc6xQwvVgxULNGzA8jZq5%2BI0BoVywKvx5SczTgWYMqfH9qsGiEUnOKYH9eGNLU84XPKDfQ44SUURav99yQJVxbXn%2F5Oi0HoXT4SXOAhILrYKz1EwzCselXFlOYq2wRe3XDHMax4QT9aQDfxEt01d0dQ71qXb4nA7%2FG4Ve4AgUD9OR7rsVx27zsqNgVjipTibywRhQ0pZ2aOMgrhaagS1RiZdZhSydsa5h%2Fq7ZltGQwrxbO6eNRD4l3TQtJR2pIBs46L2L%2BOTDjnmubgaFygVGWQ50gDRb5FspESb0YERGVp5lknLMX4Mbz3yROw3WR1OI2B%2BVT%2Fju6UcxvSKyKIj9cb9%2Bzs6T9coSUN08Uw9pCKvgY6pgGvCZmO2qcv79Brr9R92pNNysXIv4h2H2F%2FKFNm9DL9Gw63JxRTtdfKmRwWmt3YRYVZylABtJJnOodDBWVbjkHsZyeg0oh5w%2FHy28svTigPxerTUiw7onyH4u0ilKklhMnjTCOqpT7kt3XeNuWXzGKv9q34KPK53bbstZaDgH6R%2FXoi9vIykgEzoiR0mcxqmuZnTG1v6p7siswl4LWlfk4oABDksMYY&X-Amz-Signature=74704c7f77748dc7f8a4ad65ad97fd1a0947e581887cb10b2f4656bff3772a75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKJYYXG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICvVZRncN7ZVkMq5oKxaDYWmJx6Z7DVB3gWnpKdgD7aNAiA0Uzj9TNGPhR0vtGIw3AFokH44Qwyin4esJ2FWnX9HsSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2hlo2bi9mLaljjNKtwD4ZfEMVrtZhOIOtk6NF9pmjsEd5QJI8B%2FOjDCMmRdAGcwj%2B1jiQ%2FrdaAkhEYmP0RgD9Yvw5fuLsat8oGdCArCo99%2BO2d65jkes7xaq9iM%2BIeukfzALrJdtH9TB8jP%2BuBEoPr3zKDTYa42WLvE%2F2aurKwG4g42VAjO24%2FCw32Groq4edswhc%2FKn7Darc6SnJoE4%2BsXUwBOlkLfGOD2IOM7VGnX8p48QljuCk5aEGYE2ru%2Bkr3qBrIrniIqZ38h8xJpoj%2FbjGMmkks0e9%2B6aOgwNRc6xQwvVgxULNGzA8jZq5%2BI0BoVywKvx5SczTgWYMqfH9qsGiEUnOKYH9eGNLU84XPKDfQ44SUURav99yQJVxbXn%2F5Oi0HoXT4SXOAhILrYKz1EwzCselXFlOYq2wRe3XDHMax4QT9aQDfxEt01d0dQ71qXb4nA7%2FG4Ve4AgUD9OR7rsVx27zsqNgVjipTibywRhQ0pZ2aOMgrhaagS1RiZdZhSydsa5h%2Fq7ZltGQwrxbO6eNRD4l3TQtJR2pIBs46L2L%2BOTDjnmubgaFygVGWQ50gDRb5FspESb0YERGVp5lknLMX4Mbz3yROw3WR1OI2B%2BVT%2Fju6UcxvSKyKIj9cb9%2Bzs6T9coSUN08Uw9pCKvgY6pgGvCZmO2qcv79Brr9R92pNNysXIv4h2H2F%2FKFNm9DL9Gw63JxRTtdfKmRwWmt3YRYVZylABtJJnOodDBWVbjkHsZyeg0oh5w%2FHy28svTigPxerTUiw7onyH4u0ilKklhMnjTCOqpT7kt3XeNuWXzGKv9q34KPK53bbstZaDgH6R%2FXoi9vIykgEzoiR0mcxqmuZnTG1v6p7siswl4LWlfk4oABDksMYY&X-Amz-Signature=951688a4a336b8b0308076c7c5a7fdf62865420f04a6eeb09e24d100a48b410e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKJYYXG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICvVZRncN7ZVkMq5oKxaDYWmJx6Z7DVB3gWnpKdgD7aNAiA0Uzj9TNGPhR0vtGIw3AFokH44Qwyin4esJ2FWnX9HsSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2hlo2bi9mLaljjNKtwD4ZfEMVrtZhOIOtk6NF9pmjsEd5QJI8B%2FOjDCMmRdAGcwj%2B1jiQ%2FrdaAkhEYmP0RgD9Yvw5fuLsat8oGdCArCo99%2BO2d65jkes7xaq9iM%2BIeukfzALrJdtH9TB8jP%2BuBEoPr3zKDTYa42WLvE%2F2aurKwG4g42VAjO24%2FCw32Groq4edswhc%2FKn7Darc6SnJoE4%2BsXUwBOlkLfGOD2IOM7VGnX8p48QljuCk5aEGYE2ru%2Bkr3qBrIrniIqZ38h8xJpoj%2FbjGMmkks0e9%2B6aOgwNRc6xQwvVgxULNGzA8jZq5%2BI0BoVywKvx5SczTgWYMqfH9qsGiEUnOKYH9eGNLU84XPKDfQ44SUURav99yQJVxbXn%2F5Oi0HoXT4SXOAhILrYKz1EwzCselXFlOYq2wRe3XDHMax4QT9aQDfxEt01d0dQ71qXb4nA7%2FG4Ve4AgUD9OR7rsVx27zsqNgVjipTibywRhQ0pZ2aOMgrhaagS1RiZdZhSydsa5h%2Fq7ZltGQwrxbO6eNRD4l3TQtJR2pIBs46L2L%2BOTDjnmubgaFygVGWQ50gDRb5FspESb0YERGVp5lknLMX4Mbz3yROw3WR1OI2B%2BVT%2Fju6UcxvSKyKIj9cb9%2Bzs6T9coSUN08Uw9pCKvgY6pgGvCZmO2qcv79Brr9R92pNNysXIv4h2H2F%2FKFNm9DL9Gw63JxRTtdfKmRwWmt3YRYVZylABtJJnOodDBWVbjkHsZyeg0oh5w%2FHy28svTigPxerTUiw7onyH4u0ilKklhMnjTCOqpT7kt3XeNuWXzGKv9q34KPK53bbstZaDgH6R%2FXoi9vIykgEzoiR0mcxqmuZnTG1v6p7siswl4LWlfk4oABDksMYY&X-Amz-Signature=42f6a21c75236c4f3bca78d140c068a48df943462519fd30dbf5ee4f9632540b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
