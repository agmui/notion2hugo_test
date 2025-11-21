---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHL2H2UF%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCsEMvAxFc5AWaV9BOrh%2B7jUaleUxiiOwoannzoGCr6KAIhAJwSJS2Rkkv5cNoH%2FmS0INaeOACSnE1kE3QWXiD4Kze4Kv8DCAMQABoMNjM3NDIzMTgzODA1IgzhNIyPgwvx%2BGcQ1nIq3APFobd0HkTCIbnoQgZcmUGaHGt1ZUT8TOhVkXpIIA976LCmyyeCizE15tiXXxBoOdj6WuPiQKjrQX0N2fJMd5FuSt3bFbVlTUx2NcZiNLZA38jVAilrlGTDQdHZIYfb%2BKFU2uG%2F%2Bz%2FMjNFm0%2BAVBCLIOAFSjh1fpbnQojMVlZUMuAxiP4XARtrXeoW5FVkdubKm9Q2k8zrCIZFYpwH%2Bicn8Ocah2UF0FdqoLhuJcANqYyoin6DWYOtGLda7gxgGrWbbA0rnxPiH3yajbZ84lQ4hVr4PrLWF0u1R63soQUSwDRU0OA9h1JW%2FIej5moCRjBL1%2B0uD5%2FdA8JAELsM%2B2WiUmdfPnd8PQp3z27ZAux9Bw%2Fpx3SCeanvNipzGDUd8EFrBq8Hs674twWP%2BoDIf7Zok3LQSHCcofvSNJxORGbh3qd4EGaSOsaBBVezNv3j77g1H9PtgLI6QDmXfY2xQiLYoLu8c3m7J1umqqnB1gJqwqFhQdw4rVbAbOddRWWViyp5HPb8wHsbrL9OmyV8w24kCqm%2FSOYffK%2FXSRH12%2FmIlvaaOAe4i0TcnLWkQRciRpAJkmel9cAsEAYQMch%2FmRq%2B5%2B9hdUjK1HIilW97OTdo1cYBauAfK%2BhGRYbC8SzDo%2F%2F7IBjqkAVL6K5I%2FTpnWgQfsTkHctQMCvrvfUIWhpKs7h8hWBpzoP69al5IR%2BblSV6Sz4f6BEctut70F%2FnTqoFyc5WBxzWiAyYBhC1aYP1vFK4yoDNAJZCHd1B%2Bahkg7dld4uTsWMxtllwU8S7shI%2Fx2WfxXK0y9FBUoqpSa8kosxe5uNgbH%2BjsB%2BwPgw4cun3IcC7Nbmmr6h0s%2Bh%2F3hfQJSbrJtWAMiTl1m&X-Amz-Signature=5dce976cfad2e774d2eb2b5c5c6057a0ca3ebca0c999a3e5d71772956b81995f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHL2H2UF%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCsEMvAxFc5AWaV9BOrh%2B7jUaleUxiiOwoannzoGCr6KAIhAJwSJS2Rkkv5cNoH%2FmS0INaeOACSnE1kE3QWXiD4Kze4Kv8DCAMQABoMNjM3NDIzMTgzODA1IgzhNIyPgwvx%2BGcQ1nIq3APFobd0HkTCIbnoQgZcmUGaHGt1ZUT8TOhVkXpIIA976LCmyyeCizE15tiXXxBoOdj6WuPiQKjrQX0N2fJMd5FuSt3bFbVlTUx2NcZiNLZA38jVAilrlGTDQdHZIYfb%2BKFU2uG%2F%2Bz%2FMjNFm0%2BAVBCLIOAFSjh1fpbnQojMVlZUMuAxiP4XARtrXeoW5FVkdubKm9Q2k8zrCIZFYpwH%2Bicn8Ocah2UF0FdqoLhuJcANqYyoin6DWYOtGLda7gxgGrWbbA0rnxPiH3yajbZ84lQ4hVr4PrLWF0u1R63soQUSwDRU0OA9h1JW%2FIej5moCRjBL1%2B0uD5%2FdA8JAELsM%2B2WiUmdfPnd8PQp3z27ZAux9Bw%2Fpx3SCeanvNipzGDUd8EFrBq8Hs674twWP%2BoDIf7Zok3LQSHCcofvSNJxORGbh3qd4EGaSOsaBBVezNv3j77g1H9PtgLI6QDmXfY2xQiLYoLu8c3m7J1umqqnB1gJqwqFhQdw4rVbAbOddRWWViyp5HPb8wHsbrL9OmyV8w24kCqm%2FSOYffK%2FXSRH12%2FmIlvaaOAe4i0TcnLWkQRciRpAJkmel9cAsEAYQMch%2FmRq%2B5%2B9hdUjK1HIilW97OTdo1cYBauAfK%2BhGRYbC8SzDo%2F%2F7IBjqkAVL6K5I%2FTpnWgQfsTkHctQMCvrvfUIWhpKs7h8hWBpzoP69al5IR%2BblSV6Sz4f6BEctut70F%2FnTqoFyc5WBxzWiAyYBhC1aYP1vFK4yoDNAJZCHd1B%2Bahkg7dld4uTsWMxtllwU8S7shI%2Fx2WfxXK0y9FBUoqpSa8kosxe5uNgbH%2BjsB%2BwPgw4cun3IcC7Nbmmr6h0s%2Bh%2F3hfQJSbrJtWAMiTl1m&X-Amz-Signature=87e6a043f0654cf04706028c0df909cba218413f1917c5783229e95f03fc0a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHL2H2UF%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCsEMvAxFc5AWaV9BOrh%2B7jUaleUxiiOwoannzoGCr6KAIhAJwSJS2Rkkv5cNoH%2FmS0INaeOACSnE1kE3QWXiD4Kze4Kv8DCAMQABoMNjM3NDIzMTgzODA1IgzhNIyPgwvx%2BGcQ1nIq3APFobd0HkTCIbnoQgZcmUGaHGt1ZUT8TOhVkXpIIA976LCmyyeCizE15tiXXxBoOdj6WuPiQKjrQX0N2fJMd5FuSt3bFbVlTUx2NcZiNLZA38jVAilrlGTDQdHZIYfb%2BKFU2uG%2F%2Bz%2FMjNFm0%2BAVBCLIOAFSjh1fpbnQojMVlZUMuAxiP4XARtrXeoW5FVkdubKm9Q2k8zrCIZFYpwH%2Bicn8Ocah2UF0FdqoLhuJcANqYyoin6DWYOtGLda7gxgGrWbbA0rnxPiH3yajbZ84lQ4hVr4PrLWF0u1R63soQUSwDRU0OA9h1JW%2FIej5moCRjBL1%2B0uD5%2FdA8JAELsM%2B2WiUmdfPnd8PQp3z27ZAux9Bw%2Fpx3SCeanvNipzGDUd8EFrBq8Hs674twWP%2BoDIf7Zok3LQSHCcofvSNJxORGbh3qd4EGaSOsaBBVezNv3j77g1H9PtgLI6QDmXfY2xQiLYoLu8c3m7J1umqqnB1gJqwqFhQdw4rVbAbOddRWWViyp5HPb8wHsbrL9OmyV8w24kCqm%2FSOYffK%2FXSRH12%2FmIlvaaOAe4i0TcnLWkQRciRpAJkmel9cAsEAYQMch%2FmRq%2B5%2B9hdUjK1HIilW97OTdo1cYBauAfK%2BhGRYbC8SzDo%2F%2F7IBjqkAVL6K5I%2FTpnWgQfsTkHctQMCvrvfUIWhpKs7h8hWBpzoP69al5IR%2BblSV6Sz4f6BEctut70F%2FnTqoFyc5WBxzWiAyYBhC1aYP1vFK4yoDNAJZCHd1B%2Bahkg7dld4uTsWMxtllwU8S7shI%2Fx2WfxXK0y9FBUoqpSa8kosxe5uNgbH%2BjsB%2BwPgw4cun3IcC7Nbmmr6h0s%2Bh%2F3hfQJSbrJtWAMiTl1m&X-Amz-Signature=c5204578016ddb5e703558292f35637f97fdbec7474f9942ae887c3a0ebea03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHL2H2UF%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCsEMvAxFc5AWaV9BOrh%2B7jUaleUxiiOwoannzoGCr6KAIhAJwSJS2Rkkv5cNoH%2FmS0INaeOACSnE1kE3QWXiD4Kze4Kv8DCAMQABoMNjM3NDIzMTgzODA1IgzhNIyPgwvx%2BGcQ1nIq3APFobd0HkTCIbnoQgZcmUGaHGt1ZUT8TOhVkXpIIA976LCmyyeCizE15tiXXxBoOdj6WuPiQKjrQX0N2fJMd5FuSt3bFbVlTUx2NcZiNLZA38jVAilrlGTDQdHZIYfb%2BKFU2uG%2F%2Bz%2FMjNFm0%2BAVBCLIOAFSjh1fpbnQojMVlZUMuAxiP4XARtrXeoW5FVkdubKm9Q2k8zrCIZFYpwH%2Bicn8Ocah2UF0FdqoLhuJcANqYyoin6DWYOtGLda7gxgGrWbbA0rnxPiH3yajbZ84lQ4hVr4PrLWF0u1R63soQUSwDRU0OA9h1JW%2FIej5moCRjBL1%2B0uD5%2FdA8JAELsM%2B2WiUmdfPnd8PQp3z27ZAux9Bw%2Fpx3SCeanvNipzGDUd8EFrBq8Hs674twWP%2BoDIf7Zok3LQSHCcofvSNJxORGbh3qd4EGaSOsaBBVezNv3j77g1H9PtgLI6QDmXfY2xQiLYoLu8c3m7J1umqqnB1gJqwqFhQdw4rVbAbOddRWWViyp5HPb8wHsbrL9OmyV8w24kCqm%2FSOYffK%2FXSRH12%2FmIlvaaOAe4i0TcnLWkQRciRpAJkmel9cAsEAYQMch%2FmRq%2B5%2B9hdUjK1HIilW97OTdo1cYBauAfK%2BhGRYbC8SzDo%2F%2F7IBjqkAVL6K5I%2FTpnWgQfsTkHctQMCvrvfUIWhpKs7h8hWBpzoP69al5IR%2BblSV6Sz4f6BEctut70F%2FnTqoFyc5WBxzWiAyYBhC1aYP1vFK4yoDNAJZCHd1B%2Bahkg7dld4uTsWMxtllwU8S7shI%2Fx2WfxXK0y9FBUoqpSa8kosxe5uNgbH%2BjsB%2BwPgw4cun3IcC7Nbmmr6h0s%2Bh%2F3hfQJSbrJtWAMiTl1m&X-Amz-Signature=a561a48028ac57cf7a12aff3aa26cb60551183f587d670c4b78f62396495bcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHL2H2UF%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCsEMvAxFc5AWaV9BOrh%2B7jUaleUxiiOwoannzoGCr6KAIhAJwSJS2Rkkv5cNoH%2FmS0INaeOACSnE1kE3QWXiD4Kze4Kv8DCAMQABoMNjM3NDIzMTgzODA1IgzhNIyPgwvx%2BGcQ1nIq3APFobd0HkTCIbnoQgZcmUGaHGt1ZUT8TOhVkXpIIA976LCmyyeCizE15tiXXxBoOdj6WuPiQKjrQX0N2fJMd5FuSt3bFbVlTUx2NcZiNLZA38jVAilrlGTDQdHZIYfb%2BKFU2uG%2F%2Bz%2FMjNFm0%2BAVBCLIOAFSjh1fpbnQojMVlZUMuAxiP4XARtrXeoW5FVkdubKm9Q2k8zrCIZFYpwH%2Bicn8Ocah2UF0FdqoLhuJcANqYyoin6DWYOtGLda7gxgGrWbbA0rnxPiH3yajbZ84lQ4hVr4PrLWF0u1R63soQUSwDRU0OA9h1JW%2FIej5moCRjBL1%2B0uD5%2FdA8JAELsM%2B2WiUmdfPnd8PQp3z27ZAux9Bw%2Fpx3SCeanvNipzGDUd8EFrBq8Hs674twWP%2BoDIf7Zok3LQSHCcofvSNJxORGbh3qd4EGaSOsaBBVezNv3j77g1H9PtgLI6QDmXfY2xQiLYoLu8c3m7J1umqqnB1gJqwqFhQdw4rVbAbOddRWWViyp5HPb8wHsbrL9OmyV8w24kCqm%2FSOYffK%2FXSRH12%2FmIlvaaOAe4i0TcnLWkQRciRpAJkmel9cAsEAYQMch%2FmRq%2B5%2B9hdUjK1HIilW97OTdo1cYBauAfK%2BhGRYbC8SzDo%2F%2F7IBjqkAVL6K5I%2FTpnWgQfsTkHctQMCvrvfUIWhpKs7h8hWBpzoP69al5IR%2BblSV6Sz4f6BEctut70F%2FnTqoFyc5WBxzWiAyYBhC1aYP1vFK4yoDNAJZCHd1B%2Bahkg7dld4uTsWMxtllwU8S7shI%2Fx2WfxXK0y9FBUoqpSa8kosxe5uNgbH%2BjsB%2BwPgw4cun3IcC7Nbmmr6h0s%2Bh%2F3hfQJSbrJtWAMiTl1m&X-Amz-Signature=c47556925fee1f05929b10d50054e88fae840ffb228e69f6a996c389dcf69c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHL2H2UF%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCsEMvAxFc5AWaV9BOrh%2B7jUaleUxiiOwoannzoGCr6KAIhAJwSJS2Rkkv5cNoH%2FmS0INaeOACSnE1kE3QWXiD4Kze4Kv8DCAMQABoMNjM3NDIzMTgzODA1IgzhNIyPgwvx%2BGcQ1nIq3APFobd0HkTCIbnoQgZcmUGaHGt1ZUT8TOhVkXpIIA976LCmyyeCizE15tiXXxBoOdj6WuPiQKjrQX0N2fJMd5FuSt3bFbVlTUx2NcZiNLZA38jVAilrlGTDQdHZIYfb%2BKFU2uG%2F%2Bz%2FMjNFm0%2BAVBCLIOAFSjh1fpbnQojMVlZUMuAxiP4XARtrXeoW5FVkdubKm9Q2k8zrCIZFYpwH%2Bicn8Ocah2UF0FdqoLhuJcANqYyoin6DWYOtGLda7gxgGrWbbA0rnxPiH3yajbZ84lQ4hVr4PrLWF0u1R63soQUSwDRU0OA9h1JW%2FIej5moCRjBL1%2B0uD5%2FdA8JAELsM%2B2WiUmdfPnd8PQp3z27ZAux9Bw%2Fpx3SCeanvNipzGDUd8EFrBq8Hs674twWP%2BoDIf7Zok3LQSHCcofvSNJxORGbh3qd4EGaSOsaBBVezNv3j77g1H9PtgLI6QDmXfY2xQiLYoLu8c3m7J1umqqnB1gJqwqFhQdw4rVbAbOddRWWViyp5HPb8wHsbrL9OmyV8w24kCqm%2FSOYffK%2FXSRH12%2FmIlvaaOAe4i0TcnLWkQRciRpAJkmel9cAsEAYQMch%2FmRq%2B5%2B9hdUjK1HIilW97OTdo1cYBauAfK%2BhGRYbC8SzDo%2F%2F7IBjqkAVL6K5I%2FTpnWgQfsTkHctQMCvrvfUIWhpKs7h8hWBpzoP69al5IR%2BblSV6Sz4f6BEctut70F%2FnTqoFyc5WBxzWiAyYBhC1aYP1vFK4yoDNAJZCHd1B%2Bahkg7dld4uTsWMxtllwU8S7shI%2Fx2WfxXK0y9FBUoqpSa8kosxe5uNgbH%2BjsB%2BwPgw4cun3IcC7Nbmmr6h0s%2Bh%2F3hfQJSbrJtWAMiTl1m&X-Amz-Signature=07b62f5c3b717d9cc05f4175ad010f95da9ed0a25b01f41a0cf44f4b90a909d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHL2H2UF%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCsEMvAxFc5AWaV9BOrh%2B7jUaleUxiiOwoannzoGCr6KAIhAJwSJS2Rkkv5cNoH%2FmS0INaeOACSnE1kE3QWXiD4Kze4Kv8DCAMQABoMNjM3NDIzMTgzODA1IgzhNIyPgwvx%2BGcQ1nIq3APFobd0HkTCIbnoQgZcmUGaHGt1ZUT8TOhVkXpIIA976LCmyyeCizE15tiXXxBoOdj6WuPiQKjrQX0N2fJMd5FuSt3bFbVlTUx2NcZiNLZA38jVAilrlGTDQdHZIYfb%2BKFU2uG%2F%2Bz%2FMjNFm0%2BAVBCLIOAFSjh1fpbnQojMVlZUMuAxiP4XARtrXeoW5FVkdubKm9Q2k8zrCIZFYpwH%2Bicn8Ocah2UF0FdqoLhuJcANqYyoin6DWYOtGLda7gxgGrWbbA0rnxPiH3yajbZ84lQ4hVr4PrLWF0u1R63soQUSwDRU0OA9h1JW%2FIej5moCRjBL1%2B0uD5%2FdA8JAELsM%2B2WiUmdfPnd8PQp3z27ZAux9Bw%2Fpx3SCeanvNipzGDUd8EFrBq8Hs674twWP%2BoDIf7Zok3LQSHCcofvSNJxORGbh3qd4EGaSOsaBBVezNv3j77g1H9PtgLI6QDmXfY2xQiLYoLu8c3m7J1umqqnB1gJqwqFhQdw4rVbAbOddRWWViyp5HPb8wHsbrL9OmyV8w24kCqm%2FSOYffK%2FXSRH12%2FmIlvaaOAe4i0TcnLWkQRciRpAJkmel9cAsEAYQMch%2FmRq%2B5%2B9hdUjK1HIilW97OTdo1cYBauAfK%2BhGRYbC8SzDo%2F%2F7IBjqkAVL6K5I%2FTpnWgQfsTkHctQMCvrvfUIWhpKs7h8hWBpzoP69al5IR%2BblSV6Sz4f6BEctut70F%2FnTqoFyc5WBxzWiAyYBhC1aYP1vFK4yoDNAJZCHd1B%2Bahkg7dld4uTsWMxtllwU8S7shI%2Fx2WfxXK0y9FBUoqpSa8kosxe5uNgbH%2BjsB%2BwPgw4cun3IcC7Nbmmr6h0s%2Bh%2F3hfQJSbrJtWAMiTl1m&X-Amz-Signature=37ffd19e27a49df23ccbb564628e11507c88c9bbf7847c96d12f0b40c7dd36cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHL2H2UF%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCsEMvAxFc5AWaV9BOrh%2B7jUaleUxiiOwoannzoGCr6KAIhAJwSJS2Rkkv5cNoH%2FmS0INaeOACSnE1kE3QWXiD4Kze4Kv8DCAMQABoMNjM3NDIzMTgzODA1IgzhNIyPgwvx%2BGcQ1nIq3APFobd0HkTCIbnoQgZcmUGaHGt1ZUT8TOhVkXpIIA976LCmyyeCizE15tiXXxBoOdj6WuPiQKjrQX0N2fJMd5FuSt3bFbVlTUx2NcZiNLZA38jVAilrlGTDQdHZIYfb%2BKFU2uG%2F%2Bz%2FMjNFm0%2BAVBCLIOAFSjh1fpbnQojMVlZUMuAxiP4XARtrXeoW5FVkdubKm9Q2k8zrCIZFYpwH%2Bicn8Ocah2UF0FdqoLhuJcANqYyoin6DWYOtGLda7gxgGrWbbA0rnxPiH3yajbZ84lQ4hVr4PrLWF0u1R63soQUSwDRU0OA9h1JW%2FIej5moCRjBL1%2B0uD5%2FdA8JAELsM%2B2WiUmdfPnd8PQp3z27ZAux9Bw%2Fpx3SCeanvNipzGDUd8EFrBq8Hs674twWP%2BoDIf7Zok3LQSHCcofvSNJxORGbh3qd4EGaSOsaBBVezNv3j77g1H9PtgLI6QDmXfY2xQiLYoLu8c3m7J1umqqnB1gJqwqFhQdw4rVbAbOddRWWViyp5HPb8wHsbrL9OmyV8w24kCqm%2FSOYffK%2FXSRH12%2FmIlvaaOAe4i0TcnLWkQRciRpAJkmel9cAsEAYQMch%2FmRq%2B5%2B9hdUjK1HIilW97OTdo1cYBauAfK%2BhGRYbC8SzDo%2F%2F7IBjqkAVL6K5I%2FTpnWgQfsTkHctQMCvrvfUIWhpKs7h8hWBpzoP69al5IR%2BblSV6Sz4f6BEctut70F%2FnTqoFyc5WBxzWiAyYBhC1aYP1vFK4yoDNAJZCHd1B%2Bahkg7dld4uTsWMxtllwU8S7shI%2Fx2WfxXK0y9FBUoqpSa8kosxe5uNgbH%2BjsB%2BwPgw4cun3IcC7Nbmmr6h0s%2Bh%2F3hfQJSbrJtWAMiTl1m&X-Amz-Signature=340cd96be9d9fe88ce67f5e8c1f4859cdedda23947f8d2abaeb79fe3862504a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
