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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBBIZ2KZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5ZdGiSVTbfkLj2FwvQhG5CgVELYOon4UdQF4ygDR7VAiBkjKONcEhGDJ2A7zKuIqvxsDkwnLX%2BVneK6x7BaZAZ9Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmfNrTz0aWmY5hbQDKtwD3siOTw3Hkxr7CIkoPF4KI1WGgf6ZfHqZ%2Fm6hWom7KZ4UsDazSv5FrP%2F%2BO85bUQMGM3NBAQDWP8bW1RuVJrsO5mz3z3a44EqKaqCm2nK22U86UF5%2Bj4bp%2F8aMdtHh86RQcR8f5PuxdxKqDouHrgYpATzqvsMge0L7MCm04bHgDpHoN8ja2wEEhjumvEhLStXBoKQrTfmEXYI8vVCyMkQ6346yjZvob%2Fcz56Nrdf9qXq%2F2jVcfPRZyVC0YBZlYnegcq8QKG33iR74Bld%2FenbzMaR0Sk5%2FjrySDzfof%2FxeSJjenpnESOFc3Q2NfBCzAD9YMFMNkNjFAq8%2BVyjotjh0E84sLeAnvzpzCdFPZsUiI59dUvZtDwPSjffP2vL91OD%2BAc2e1%2BWrkIwA28YntdHuZEQzLZnrytn3LgxtKqvwjIEankHWreclYC7tFFn0THUZz28Vr8ZYY4QOg0P7julxvxAQDvJ80XStoLiO64fs6oaaEfJlvkMApVvjWxTacJdFWCz%2Fr1ZwjsSqwhdO4wxD2TH1WGr7o73Inp6Vbl6V0lpNpR68T2eBH%2FENfB83H1d3lV6bCpo5I%2BFTfYmTOURvGFuRdAJPZahoOCcsJKWFdtBXjgDrZdlZuzsjuc5Aw96TZwQY6pgGN%2FbRr7xrn3G0YNM3BkcyYZaQ%2B%2BRqQ3fZn9FLSuoGYTIgslYSeoqBLq89spHIQ%2FuDSKfH%2FAtBaLRtK%2BbH6vGyJPcwsqW1hs0stl1tZDZGv4yTqB55VyEsov4%2BaAthDkzf2Ay87N87QlL2fIQWx7Ekk4SwFAReW%2FNFqeYHvTq9Lgv573rX7QsDlQmaCiziga2UbQNrpj%2FZO9evLdx9%2FfY3sbG9r%2FmhM&X-Amz-Signature=8cb01eab0abe8d820fc5d18dc4ad9ee28c4d2d9b8375249b354fdf0b63320ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBBIZ2KZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5ZdGiSVTbfkLj2FwvQhG5CgVELYOon4UdQF4ygDR7VAiBkjKONcEhGDJ2A7zKuIqvxsDkwnLX%2BVneK6x7BaZAZ9Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmfNrTz0aWmY5hbQDKtwD3siOTw3Hkxr7CIkoPF4KI1WGgf6ZfHqZ%2Fm6hWom7KZ4UsDazSv5FrP%2F%2BO85bUQMGM3NBAQDWP8bW1RuVJrsO5mz3z3a44EqKaqCm2nK22U86UF5%2Bj4bp%2F8aMdtHh86RQcR8f5PuxdxKqDouHrgYpATzqvsMge0L7MCm04bHgDpHoN8ja2wEEhjumvEhLStXBoKQrTfmEXYI8vVCyMkQ6346yjZvob%2Fcz56Nrdf9qXq%2F2jVcfPRZyVC0YBZlYnegcq8QKG33iR74Bld%2FenbzMaR0Sk5%2FjrySDzfof%2FxeSJjenpnESOFc3Q2NfBCzAD9YMFMNkNjFAq8%2BVyjotjh0E84sLeAnvzpzCdFPZsUiI59dUvZtDwPSjffP2vL91OD%2BAc2e1%2BWrkIwA28YntdHuZEQzLZnrytn3LgxtKqvwjIEankHWreclYC7tFFn0THUZz28Vr8ZYY4QOg0P7julxvxAQDvJ80XStoLiO64fs6oaaEfJlvkMApVvjWxTacJdFWCz%2Fr1ZwjsSqwhdO4wxD2TH1WGr7o73Inp6Vbl6V0lpNpR68T2eBH%2FENfB83H1d3lV6bCpo5I%2BFTfYmTOURvGFuRdAJPZahoOCcsJKWFdtBXjgDrZdlZuzsjuc5Aw96TZwQY6pgGN%2FbRr7xrn3G0YNM3BkcyYZaQ%2B%2BRqQ3fZn9FLSuoGYTIgslYSeoqBLq89spHIQ%2FuDSKfH%2FAtBaLRtK%2BbH6vGyJPcwsqW1hs0stl1tZDZGv4yTqB55VyEsov4%2BaAthDkzf2Ay87N87QlL2fIQWx7Ekk4SwFAReW%2FNFqeYHvTq9Lgv573rX7QsDlQmaCiziga2UbQNrpj%2FZO9evLdx9%2FfY3sbG9r%2FmhM&X-Amz-Signature=aa7e25186b3fd852ceb9b62f19c3b7b0592894f15c9041d67d912562fa124ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBBIZ2KZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5ZdGiSVTbfkLj2FwvQhG5CgVELYOon4UdQF4ygDR7VAiBkjKONcEhGDJ2A7zKuIqvxsDkwnLX%2BVneK6x7BaZAZ9Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmfNrTz0aWmY5hbQDKtwD3siOTw3Hkxr7CIkoPF4KI1WGgf6ZfHqZ%2Fm6hWom7KZ4UsDazSv5FrP%2F%2BO85bUQMGM3NBAQDWP8bW1RuVJrsO5mz3z3a44EqKaqCm2nK22U86UF5%2Bj4bp%2F8aMdtHh86RQcR8f5PuxdxKqDouHrgYpATzqvsMge0L7MCm04bHgDpHoN8ja2wEEhjumvEhLStXBoKQrTfmEXYI8vVCyMkQ6346yjZvob%2Fcz56Nrdf9qXq%2F2jVcfPRZyVC0YBZlYnegcq8QKG33iR74Bld%2FenbzMaR0Sk5%2FjrySDzfof%2FxeSJjenpnESOFc3Q2NfBCzAD9YMFMNkNjFAq8%2BVyjotjh0E84sLeAnvzpzCdFPZsUiI59dUvZtDwPSjffP2vL91OD%2BAc2e1%2BWrkIwA28YntdHuZEQzLZnrytn3LgxtKqvwjIEankHWreclYC7tFFn0THUZz28Vr8ZYY4QOg0P7julxvxAQDvJ80XStoLiO64fs6oaaEfJlvkMApVvjWxTacJdFWCz%2Fr1ZwjsSqwhdO4wxD2TH1WGr7o73Inp6Vbl6V0lpNpR68T2eBH%2FENfB83H1d3lV6bCpo5I%2BFTfYmTOURvGFuRdAJPZahoOCcsJKWFdtBXjgDrZdlZuzsjuc5Aw96TZwQY6pgGN%2FbRr7xrn3G0YNM3BkcyYZaQ%2B%2BRqQ3fZn9FLSuoGYTIgslYSeoqBLq89spHIQ%2FuDSKfH%2FAtBaLRtK%2BbH6vGyJPcwsqW1hs0stl1tZDZGv4yTqB55VyEsov4%2BaAthDkzf2Ay87N87QlL2fIQWx7Ekk4SwFAReW%2FNFqeYHvTq9Lgv573rX7QsDlQmaCiziga2UbQNrpj%2FZO9evLdx9%2FfY3sbG9r%2FmhM&X-Amz-Signature=f5a9acc9275df6c82f08142fff7b34e1dbca89f986669edda928eccf54c55b62&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBBIZ2KZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5ZdGiSVTbfkLj2FwvQhG5CgVELYOon4UdQF4ygDR7VAiBkjKONcEhGDJ2A7zKuIqvxsDkwnLX%2BVneK6x7BaZAZ9Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmfNrTz0aWmY5hbQDKtwD3siOTw3Hkxr7CIkoPF4KI1WGgf6ZfHqZ%2Fm6hWom7KZ4UsDazSv5FrP%2F%2BO85bUQMGM3NBAQDWP8bW1RuVJrsO5mz3z3a44EqKaqCm2nK22U86UF5%2Bj4bp%2F8aMdtHh86RQcR8f5PuxdxKqDouHrgYpATzqvsMge0L7MCm04bHgDpHoN8ja2wEEhjumvEhLStXBoKQrTfmEXYI8vVCyMkQ6346yjZvob%2Fcz56Nrdf9qXq%2F2jVcfPRZyVC0YBZlYnegcq8QKG33iR74Bld%2FenbzMaR0Sk5%2FjrySDzfof%2FxeSJjenpnESOFc3Q2NfBCzAD9YMFMNkNjFAq8%2BVyjotjh0E84sLeAnvzpzCdFPZsUiI59dUvZtDwPSjffP2vL91OD%2BAc2e1%2BWrkIwA28YntdHuZEQzLZnrytn3LgxtKqvwjIEankHWreclYC7tFFn0THUZz28Vr8ZYY4QOg0P7julxvxAQDvJ80XStoLiO64fs6oaaEfJlvkMApVvjWxTacJdFWCz%2Fr1ZwjsSqwhdO4wxD2TH1WGr7o73Inp6Vbl6V0lpNpR68T2eBH%2FENfB83H1d3lV6bCpo5I%2BFTfYmTOURvGFuRdAJPZahoOCcsJKWFdtBXjgDrZdlZuzsjuc5Aw96TZwQY6pgGN%2FbRr7xrn3G0YNM3BkcyYZaQ%2B%2BRqQ3fZn9FLSuoGYTIgslYSeoqBLq89spHIQ%2FuDSKfH%2FAtBaLRtK%2BbH6vGyJPcwsqW1hs0stl1tZDZGv4yTqB55VyEsov4%2BaAthDkzf2Ay87N87QlL2fIQWx7Ekk4SwFAReW%2FNFqeYHvTq9Lgv573rX7QsDlQmaCiziga2UbQNrpj%2FZO9evLdx9%2FfY3sbG9r%2FmhM&X-Amz-Signature=795f636c9fc4ec529bcf308716780b2ed264b83510d6dc20341b37765314bda9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBBIZ2KZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5ZdGiSVTbfkLj2FwvQhG5CgVELYOon4UdQF4ygDR7VAiBkjKONcEhGDJ2A7zKuIqvxsDkwnLX%2BVneK6x7BaZAZ9Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmfNrTz0aWmY5hbQDKtwD3siOTw3Hkxr7CIkoPF4KI1WGgf6ZfHqZ%2Fm6hWom7KZ4UsDazSv5FrP%2F%2BO85bUQMGM3NBAQDWP8bW1RuVJrsO5mz3z3a44EqKaqCm2nK22U86UF5%2Bj4bp%2F8aMdtHh86RQcR8f5PuxdxKqDouHrgYpATzqvsMge0L7MCm04bHgDpHoN8ja2wEEhjumvEhLStXBoKQrTfmEXYI8vVCyMkQ6346yjZvob%2Fcz56Nrdf9qXq%2F2jVcfPRZyVC0YBZlYnegcq8QKG33iR74Bld%2FenbzMaR0Sk5%2FjrySDzfof%2FxeSJjenpnESOFc3Q2NfBCzAD9YMFMNkNjFAq8%2BVyjotjh0E84sLeAnvzpzCdFPZsUiI59dUvZtDwPSjffP2vL91OD%2BAc2e1%2BWrkIwA28YntdHuZEQzLZnrytn3LgxtKqvwjIEankHWreclYC7tFFn0THUZz28Vr8ZYY4QOg0P7julxvxAQDvJ80XStoLiO64fs6oaaEfJlvkMApVvjWxTacJdFWCz%2Fr1ZwjsSqwhdO4wxD2TH1WGr7o73Inp6Vbl6V0lpNpR68T2eBH%2FENfB83H1d3lV6bCpo5I%2BFTfYmTOURvGFuRdAJPZahoOCcsJKWFdtBXjgDrZdlZuzsjuc5Aw96TZwQY6pgGN%2FbRr7xrn3G0YNM3BkcyYZaQ%2B%2BRqQ3fZn9FLSuoGYTIgslYSeoqBLq89spHIQ%2FuDSKfH%2FAtBaLRtK%2BbH6vGyJPcwsqW1hs0stl1tZDZGv4yTqB55VyEsov4%2BaAthDkzf2Ay87N87QlL2fIQWx7Ekk4SwFAReW%2FNFqeYHvTq9Lgv573rX7QsDlQmaCiziga2UbQNrpj%2FZO9evLdx9%2FfY3sbG9r%2FmhM&X-Amz-Signature=4403d07c7ce800ecf716b3578ab18d6fd6621edc34749c95dda2c8740a9bdbc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBBIZ2KZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5ZdGiSVTbfkLj2FwvQhG5CgVELYOon4UdQF4ygDR7VAiBkjKONcEhGDJ2A7zKuIqvxsDkwnLX%2BVneK6x7BaZAZ9Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmfNrTz0aWmY5hbQDKtwD3siOTw3Hkxr7CIkoPF4KI1WGgf6ZfHqZ%2Fm6hWom7KZ4UsDazSv5FrP%2F%2BO85bUQMGM3NBAQDWP8bW1RuVJrsO5mz3z3a44EqKaqCm2nK22U86UF5%2Bj4bp%2F8aMdtHh86RQcR8f5PuxdxKqDouHrgYpATzqvsMge0L7MCm04bHgDpHoN8ja2wEEhjumvEhLStXBoKQrTfmEXYI8vVCyMkQ6346yjZvob%2Fcz56Nrdf9qXq%2F2jVcfPRZyVC0YBZlYnegcq8QKG33iR74Bld%2FenbzMaR0Sk5%2FjrySDzfof%2FxeSJjenpnESOFc3Q2NfBCzAD9YMFMNkNjFAq8%2BVyjotjh0E84sLeAnvzpzCdFPZsUiI59dUvZtDwPSjffP2vL91OD%2BAc2e1%2BWrkIwA28YntdHuZEQzLZnrytn3LgxtKqvwjIEankHWreclYC7tFFn0THUZz28Vr8ZYY4QOg0P7julxvxAQDvJ80XStoLiO64fs6oaaEfJlvkMApVvjWxTacJdFWCz%2Fr1ZwjsSqwhdO4wxD2TH1WGr7o73Inp6Vbl6V0lpNpR68T2eBH%2FENfB83H1d3lV6bCpo5I%2BFTfYmTOURvGFuRdAJPZahoOCcsJKWFdtBXjgDrZdlZuzsjuc5Aw96TZwQY6pgGN%2FbRr7xrn3G0YNM3BkcyYZaQ%2B%2BRqQ3fZn9FLSuoGYTIgslYSeoqBLq89spHIQ%2FuDSKfH%2FAtBaLRtK%2BbH6vGyJPcwsqW1hs0stl1tZDZGv4yTqB55VyEsov4%2BaAthDkzf2Ay87N87QlL2fIQWx7Ekk4SwFAReW%2FNFqeYHvTq9Lgv573rX7QsDlQmaCiziga2UbQNrpj%2FZO9evLdx9%2FfY3sbG9r%2FmhM&X-Amz-Signature=4797bb2f5de74f2873d2f064cf90821217a397c8607ab66a12a0e3966ddbd039&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBBIZ2KZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5ZdGiSVTbfkLj2FwvQhG5CgVELYOon4UdQF4ygDR7VAiBkjKONcEhGDJ2A7zKuIqvxsDkwnLX%2BVneK6x7BaZAZ9Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmfNrTz0aWmY5hbQDKtwD3siOTw3Hkxr7CIkoPF4KI1WGgf6ZfHqZ%2Fm6hWom7KZ4UsDazSv5FrP%2F%2BO85bUQMGM3NBAQDWP8bW1RuVJrsO5mz3z3a44EqKaqCm2nK22U86UF5%2Bj4bp%2F8aMdtHh86RQcR8f5PuxdxKqDouHrgYpATzqvsMge0L7MCm04bHgDpHoN8ja2wEEhjumvEhLStXBoKQrTfmEXYI8vVCyMkQ6346yjZvob%2Fcz56Nrdf9qXq%2F2jVcfPRZyVC0YBZlYnegcq8QKG33iR74Bld%2FenbzMaR0Sk5%2FjrySDzfof%2FxeSJjenpnESOFc3Q2NfBCzAD9YMFMNkNjFAq8%2BVyjotjh0E84sLeAnvzpzCdFPZsUiI59dUvZtDwPSjffP2vL91OD%2BAc2e1%2BWrkIwA28YntdHuZEQzLZnrytn3LgxtKqvwjIEankHWreclYC7tFFn0THUZz28Vr8ZYY4QOg0P7julxvxAQDvJ80XStoLiO64fs6oaaEfJlvkMApVvjWxTacJdFWCz%2Fr1ZwjsSqwhdO4wxD2TH1WGr7o73Inp6Vbl6V0lpNpR68T2eBH%2FENfB83H1d3lV6bCpo5I%2BFTfYmTOURvGFuRdAJPZahoOCcsJKWFdtBXjgDrZdlZuzsjuc5Aw96TZwQY6pgGN%2FbRr7xrn3G0YNM3BkcyYZaQ%2B%2BRqQ3fZn9FLSuoGYTIgslYSeoqBLq89spHIQ%2FuDSKfH%2FAtBaLRtK%2BbH6vGyJPcwsqW1hs0stl1tZDZGv4yTqB55VyEsov4%2BaAthDkzf2Ay87N87QlL2fIQWx7Ekk4SwFAReW%2FNFqeYHvTq9Lgv573rX7QsDlQmaCiziga2UbQNrpj%2FZO9evLdx9%2FfY3sbG9r%2FmhM&X-Amz-Signature=0b43ef16c828a8cefff3dc0aa5a726bc6a08b5a2271ec495ab8dda3dfb31dfe0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBBIZ2KZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5ZdGiSVTbfkLj2FwvQhG5CgVELYOon4UdQF4ygDR7VAiBkjKONcEhGDJ2A7zKuIqvxsDkwnLX%2BVneK6x7BaZAZ9Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmfNrTz0aWmY5hbQDKtwD3siOTw3Hkxr7CIkoPF4KI1WGgf6ZfHqZ%2Fm6hWom7KZ4UsDazSv5FrP%2F%2BO85bUQMGM3NBAQDWP8bW1RuVJrsO5mz3z3a44EqKaqCm2nK22U86UF5%2Bj4bp%2F8aMdtHh86RQcR8f5PuxdxKqDouHrgYpATzqvsMge0L7MCm04bHgDpHoN8ja2wEEhjumvEhLStXBoKQrTfmEXYI8vVCyMkQ6346yjZvob%2Fcz56Nrdf9qXq%2F2jVcfPRZyVC0YBZlYnegcq8QKG33iR74Bld%2FenbzMaR0Sk5%2FjrySDzfof%2FxeSJjenpnESOFc3Q2NfBCzAD9YMFMNkNjFAq8%2BVyjotjh0E84sLeAnvzpzCdFPZsUiI59dUvZtDwPSjffP2vL91OD%2BAc2e1%2BWrkIwA28YntdHuZEQzLZnrytn3LgxtKqvwjIEankHWreclYC7tFFn0THUZz28Vr8ZYY4QOg0P7julxvxAQDvJ80XStoLiO64fs6oaaEfJlvkMApVvjWxTacJdFWCz%2Fr1ZwjsSqwhdO4wxD2TH1WGr7o73Inp6Vbl6V0lpNpR68T2eBH%2FENfB83H1d3lV6bCpo5I%2BFTfYmTOURvGFuRdAJPZahoOCcsJKWFdtBXjgDrZdlZuzsjuc5Aw96TZwQY6pgGN%2FbRr7xrn3G0YNM3BkcyYZaQ%2B%2BRqQ3fZn9FLSuoGYTIgslYSeoqBLq89spHIQ%2FuDSKfH%2FAtBaLRtK%2BbH6vGyJPcwsqW1hs0stl1tZDZGv4yTqB55VyEsov4%2BaAthDkzf2Ay87N87QlL2fIQWx7Ekk4SwFAReW%2FNFqeYHvTq9Lgv573rX7QsDlQmaCiziga2UbQNrpj%2FZO9evLdx9%2FfY3sbG9r%2FmhM&X-Amz-Signature=452ce1e6948084213cfc7f583ef53faad6d7f5002da3c4e4480316feb85a61a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
