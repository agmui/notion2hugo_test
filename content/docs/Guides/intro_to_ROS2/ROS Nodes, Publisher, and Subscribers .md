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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR572PDF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICvyJYobpz7y6naGz4BKrvekfAxOepENZACch4mJGw7%2FAiAVpSF6lWjIqvFE1hWFMDHZIS521cW1nlJP52UHm1CQuyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggNAOIupeEi2nFl7KtwDbG%2F7UKIaYWP9teB2ZTV%2FXC2blfhkR5%2Fq3ArCih4dqQdDbROJzqV6oHslgVAhbHCLl1Lm%2BoK9zzLF6r2EttJH6LCiRHilPr47ddJauTl7pna%2FwiCg5IqZjelzC58dhzHziLlzuegzSKOCySlRuWzeAcT0qmCnhFV%2FBqbjQin7LBR9BVi5njpKWAdQQ3JDHmzqj9hmev%2B0ffUhozmDIYSYsG7H%2Fqbcn4rj5bAVkQvdQeBbllirUefSwLfA6sdGWOWe5mqP9%2B%2FWppb4xntpZcEP1s5lRrbSqHTusQwYMBA8SXX5bV%2FnW4E%2FWQoyot7RYkmRlPipW4%2FO88ULhIEZ3MnLE5UxgvgQsOxSOE0qa0HsOJ5%2FBx5qDk84hvPWR%2Bpw9Hl5m%2FgaLWpFQQQuEQcRyrGXKRw%2BcH0savcfHc5GY26%2BvL%2BsIVq5aXIbyyH66RQbmkkWRusyIh1d8CLnB6Yn%2Bn3iXphy4xGxjt9Ij4mn6N11UyO2vh3Gq7lHqlvEYztcAMbVocCv98XScbFq8%2F5ab0niqag88ONbcV1BSv3mx5u6SHE7vRAr%2BnnysmL91ih4k2F%2F%2Fp%2BNBUxysp2Qj%2BcDtJbh2cc3jglD7%2BpWM6zRLt6PlBUEyL7g%2Bn%2BKqbGz0Z0whrycwAY6pgEoA4UXQ7%2FwGzZy7xWAZmoqdT51kJQJGcmn%2Fte77i%2BcGJ%2FLakSmt%2BxHZa9pjoBvty4rQgOjYP%2FJxH1wci3E%2FT9H9%2FhcA9axuwsdx6eTRwr44l4wXFKUdfA%2BNrprpPCNQO%2BOLRuXW2%2FvOaSbM%2FEQEuVFgJrI0wvpgL8P54ypzBnk%2BYcle%2BHRSVQ14oxto9BF3pmeiz6qEvysnoJtFPuf2BTzvWMb%2B9BB&X-Amz-Signature=f1b99a593debdedae6ca9ad24038da0aacc6c490baf571f917de7772a45633dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR572PDF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICvyJYobpz7y6naGz4BKrvekfAxOepENZACch4mJGw7%2FAiAVpSF6lWjIqvFE1hWFMDHZIS521cW1nlJP52UHm1CQuyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggNAOIupeEi2nFl7KtwDbG%2F7UKIaYWP9teB2ZTV%2FXC2blfhkR5%2Fq3ArCih4dqQdDbROJzqV6oHslgVAhbHCLl1Lm%2BoK9zzLF6r2EttJH6LCiRHilPr47ddJauTl7pna%2FwiCg5IqZjelzC58dhzHziLlzuegzSKOCySlRuWzeAcT0qmCnhFV%2FBqbjQin7LBR9BVi5njpKWAdQQ3JDHmzqj9hmev%2B0ffUhozmDIYSYsG7H%2Fqbcn4rj5bAVkQvdQeBbllirUefSwLfA6sdGWOWe5mqP9%2B%2FWppb4xntpZcEP1s5lRrbSqHTusQwYMBA8SXX5bV%2FnW4E%2FWQoyot7RYkmRlPipW4%2FO88ULhIEZ3MnLE5UxgvgQsOxSOE0qa0HsOJ5%2FBx5qDk84hvPWR%2Bpw9Hl5m%2FgaLWpFQQQuEQcRyrGXKRw%2BcH0savcfHc5GY26%2BvL%2BsIVq5aXIbyyH66RQbmkkWRusyIh1d8CLnB6Yn%2Bn3iXphy4xGxjt9Ij4mn6N11UyO2vh3Gq7lHqlvEYztcAMbVocCv98XScbFq8%2F5ab0niqag88ONbcV1BSv3mx5u6SHE7vRAr%2BnnysmL91ih4k2F%2F%2Fp%2BNBUxysp2Qj%2BcDtJbh2cc3jglD7%2BpWM6zRLt6PlBUEyL7g%2Bn%2BKqbGz0Z0whrycwAY6pgEoA4UXQ7%2FwGzZy7xWAZmoqdT51kJQJGcmn%2Fte77i%2BcGJ%2FLakSmt%2BxHZa9pjoBvty4rQgOjYP%2FJxH1wci3E%2FT9H9%2FhcA9axuwsdx6eTRwr44l4wXFKUdfA%2BNrprpPCNQO%2BOLRuXW2%2FvOaSbM%2FEQEuVFgJrI0wvpgL8P54ypzBnk%2BYcle%2BHRSVQ14oxto9BF3pmeiz6qEvysnoJtFPuf2BTzvWMb%2B9BB&X-Amz-Signature=be3fec158b8a1d2a4da8a45afe603d38f87c3877213d07dcfd96222ee9965dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR572PDF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICvyJYobpz7y6naGz4BKrvekfAxOepENZACch4mJGw7%2FAiAVpSF6lWjIqvFE1hWFMDHZIS521cW1nlJP52UHm1CQuyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggNAOIupeEi2nFl7KtwDbG%2F7UKIaYWP9teB2ZTV%2FXC2blfhkR5%2Fq3ArCih4dqQdDbROJzqV6oHslgVAhbHCLl1Lm%2BoK9zzLF6r2EttJH6LCiRHilPr47ddJauTl7pna%2FwiCg5IqZjelzC58dhzHziLlzuegzSKOCySlRuWzeAcT0qmCnhFV%2FBqbjQin7LBR9BVi5njpKWAdQQ3JDHmzqj9hmev%2B0ffUhozmDIYSYsG7H%2Fqbcn4rj5bAVkQvdQeBbllirUefSwLfA6sdGWOWe5mqP9%2B%2FWppb4xntpZcEP1s5lRrbSqHTusQwYMBA8SXX5bV%2FnW4E%2FWQoyot7RYkmRlPipW4%2FO88ULhIEZ3MnLE5UxgvgQsOxSOE0qa0HsOJ5%2FBx5qDk84hvPWR%2Bpw9Hl5m%2FgaLWpFQQQuEQcRyrGXKRw%2BcH0savcfHc5GY26%2BvL%2BsIVq5aXIbyyH66RQbmkkWRusyIh1d8CLnB6Yn%2Bn3iXphy4xGxjt9Ij4mn6N11UyO2vh3Gq7lHqlvEYztcAMbVocCv98XScbFq8%2F5ab0niqag88ONbcV1BSv3mx5u6SHE7vRAr%2BnnysmL91ih4k2F%2F%2Fp%2BNBUxysp2Qj%2BcDtJbh2cc3jglD7%2BpWM6zRLt6PlBUEyL7g%2Bn%2BKqbGz0Z0whrycwAY6pgEoA4UXQ7%2FwGzZy7xWAZmoqdT51kJQJGcmn%2Fte77i%2BcGJ%2FLakSmt%2BxHZa9pjoBvty4rQgOjYP%2FJxH1wci3E%2FT9H9%2FhcA9axuwsdx6eTRwr44l4wXFKUdfA%2BNrprpPCNQO%2BOLRuXW2%2FvOaSbM%2FEQEuVFgJrI0wvpgL8P54ypzBnk%2BYcle%2BHRSVQ14oxto9BF3pmeiz6qEvysnoJtFPuf2BTzvWMb%2B9BB&X-Amz-Signature=263ceec9b38d7c2d48eb61dfb5d8ac703fe19184f8ab41372fe0ce3f629b7af9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR572PDF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICvyJYobpz7y6naGz4BKrvekfAxOepENZACch4mJGw7%2FAiAVpSF6lWjIqvFE1hWFMDHZIS521cW1nlJP52UHm1CQuyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggNAOIupeEi2nFl7KtwDbG%2F7UKIaYWP9teB2ZTV%2FXC2blfhkR5%2Fq3ArCih4dqQdDbROJzqV6oHslgVAhbHCLl1Lm%2BoK9zzLF6r2EttJH6LCiRHilPr47ddJauTl7pna%2FwiCg5IqZjelzC58dhzHziLlzuegzSKOCySlRuWzeAcT0qmCnhFV%2FBqbjQin7LBR9BVi5njpKWAdQQ3JDHmzqj9hmev%2B0ffUhozmDIYSYsG7H%2Fqbcn4rj5bAVkQvdQeBbllirUefSwLfA6sdGWOWe5mqP9%2B%2FWppb4xntpZcEP1s5lRrbSqHTusQwYMBA8SXX5bV%2FnW4E%2FWQoyot7RYkmRlPipW4%2FO88ULhIEZ3MnLE5UxgvgQsOxSOE0qa0HsOJ5%2FBx5qDk84hvPWR%2Bpw9Hl5m%2FgaLWpFQQQuEQcRyrGXKRw%2BcH0savcfHc5GY26%2BvL%2BsIVq5aXIbyyH66RQbmkkWRusyIh1d8CLnB6Yn%2Bn3iXphy4xGxjt9Ij4mn6N11UyO2vh3Gq7lHqlvEYztcAMbVocCv98XScbFq8%2F5ab0niqag88ONbcV1BSv3mx5u6SHE7vRAr%2BnnysmL91ih4k2F%2F%2Fp%2BNBUxysp2Qj%2BcDtJbh2cc3jglD7%2BpWM6zRLt6PlBUEyL7g%2Bn%2BKqbGz0Z0whrycwAY6pgEoA4UXQ7%2FwGzZy7xWAZmoqdT51kJQJGcmn%2Fte77i%2BcGJ%2FLakSmt%2BxHZa9pjoBvty4rQgOjYP%2FJxH1wci3E%2FT9H9%2FhcA9axuwsdx6eTRwr44l4wXFKUdfA%2BNrprpPCNQO%2BOLRuXW2%2FvOaSbM%2FEQEuVFgJrI0wvpgL8P54ypzBnk%2BYcle%2BHRSVQ14oxto9BF3pmeiz6qEvysnoJtFPuf2BTzvWMb%2B9BB&X-Amz-Signature=2bc557c23a6d054e6d1e873785be1f0283cfb70b2a0eaa64796214fa2e4b098b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR572PDF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICvyJYobpz7y6naGz4BKrvekfAxOepENZACch4mJGw7%2FAiAVpSF6lWjIqvFE1hWFMDHZIS521cW1nlJP52UHm1CQuyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggNAOIupeEi2nFl7KtwDbG%2F7UKIaYWP9teB2ZTV%2FXC2blfhkR5%2Fq3ArCih4dqQdDbROJzqV6oHslgVAhbHCLl1Lm%2BoK9zzLF6r2EttJH6LCiRHilPr47ddJauTl7pna%2FwiCg5IqZjelzC58dhzHziLlzuegzSKOCySlRuWzeAcT0qmCnhFV%2FBqbjQin7LBR9BVi5njpKWAdQQ3JDHmzqj9hmev%2B0ffUhozmDIYSYsG7H%2Fqbcn4rj5bAVkQvdQeBbllirUefSwLfA6sdGWOWe5mqP9%2B%2FWppb4xntpZcEP1s5lRrbSqHTusQwYMBA8SXX5bV%2FnW4E%2FWQoyot7RYkmRlPipW4%2FO88ULhIEZ3MnLE5UxgvgQsOxSOE0qa0HsOJ5%2FBx5qDk84hvPWR%2Bpw9Hl5m%2FgaLWpFQQQuEQcRyrGXKRw%2BcH0savcfHc5GY26%2BvL%2BsIVq5aXIbyyH66RQbmkkWRusyIh1d8CLnB6Yn%2Bn3iXphy4xGxjt9Ij4mn6N11UyO2vh3Gq7lHqlvEYztcAMbVocCv98XScbFq8%2F5ab0niqag88ONbcV1BSv3mx5u6SHE7vRAr%2BnnysmL91ih4k2F%2F%2Fp%2BNBUxysp2Qj%2BcDtJbh2cc3jglD7%2BpWM6zRLt6PlBUEyL7g%2Bn%2BKqbGz0Z0whrycwAY6pgEoA4UXQ7%2FwGzZy7xWAZmoqdT51kJQJGcmn%2Fte77i%2BcGJ%2FLakSmt%2BxHZa9pjoBvty4rQgOjYP%2FJxH1wci3E%2FT9H9%2FhcA9axuwsdx6eTRwr44l4wXFKUdfA%2BNrprpPCNQO%2BOLRuXW2%2FvOaSbM%2FEQEuVFgJrI0wvpgL8P54ypzBnk%2BYcle%2BHRSVQ14oxto9BF3pmeiz6qEvysnoJtFPuf2BTzvWMb%2B9BB&X-Amz-Signature=288bfe65e77ee5696aef02991089eb16c0b804ab0eb47b3b4b8dfa77bd6b689c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR572PDF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICvyJYobpz7y6naGz4BKrvekfAxOepENZACch4mJGw7%2FAiAVpSF6lWjIqvFE1hWFMDHZIS521cW1nlJP52UHm1CQuyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggNAOIupeEi2nFl7KtwDbG%2F7UKIaYWP9teB2ZTV%2FXC2blfhkR5%2Fq3ArCih4dqQdDbROJzqV6oHslgVAhbHCLl1Lm%2BoK9zzLF6r2EttJH6LCiRHilPr47ddJauTl7pna%2FwiCg5IqZjelzC58dhzHziLlzuegzSKOCySlRuWzeAcT0qmCnhFV%2FBqbjQin7LBR9BVi5njpKWAdQQ3JDHmzqj9hmev%2B0ffUhozmDIYSYsG7H%2Fqbcn4rj5bAVkQvdQeBbllirUefSwLfA6sdGWOWe5mqP9%2B%2FWppb4xntpZcEP1s5lRrbSqHTusQwYMBA8SXX5bV%2FnW4E%2FWQoyot7RYkmRlPipW4%2FO88ULhIEZ3MnLE5UxgvgQsOxSOE0qa0HsOJ5%2FBx5qDk84hvPWR%2Bpw9Hl5m%2FgaLWpFQQQuEQcRyrGXKRw%2BcH0savcfHc5GY26%2BvL%2BsIVq5aXIbyyH66RQbmkkWRusyIh1d8CLnB6Yn%2Bn3iXphy4xGxjt9Ij4mn6N11UyO2vh3Gq7lHqlvEYztcAMbVocCv98XScbFq8%2F5ab0niqag88ONbcV1BSv3mx5u6SHE7vRAr%2BnnysmL91ih4k2F%2F%2Fp%2BNBUxysp2Qj%2BcDtJbh2cc3jglD7%2BpWM6zRLt6PlBUEyL7g%2Bn%2BKqbGz0Z0whrycwAY6pgEoA4UXQ7%2FwGzZy7xWAZmoqdT51kJQJGcmn%2Fte77i%2BcGJ%2FLakSmt%2BxHZa9pjoBvty4rQgOjYP%2FJxH1wci3E%2FT9H9%2FhcA9axuwsdx6eTRwr44l4wXFKUdfA%2BNrprpPCNQO%2BOLRuXW2%2FvOaSbM%2FEQEuVFgJrI0wvpgL8P54ypzBnk%2BYcle%2BHRSVQ14oxto9BF3pmeiz6qEvysnoJtFPuf2BTzvWMb%2B9BB&X-Amz-Signature=3935c2c9b91d2ef8226f092cf05057188f44aff0894bc2d4a0e56fc673a5a957&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR572PDF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICvyJYobpz7y6naGz4BKrvekfAxOepENZACch4mJGw7%2FAiAVpSF6lWjIqvFE1hWFMDHZIS521cW1nlJP52UHm1CQuyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggNAOIupeEi2nFl7KtwDbG%2F7UKIaYWP9teB2ZTV%2FXC2blfhkR5%2Fq3ArCih4dqQdDbROJzqV6oHslgVAhbHCLl1Lm%2BoK9zzLF6r2EttJH6LCiRHilPr47ddJauTl7pna%2FwiCg5IqZjelzC58dhzHziLlzuegzSKOCySlRuWzeAcT0qmCnhFV%2FBqbjQin7LBR9BVi5njpKWAdQQ3JDHmzqj9hmev%2B0ffUhozmDIYSYsG7H%2Fqbcn4rj5bAVkQvdQeBbllirUefSwLfA6sdGWOWe5mqP9%2B%2FWppb4xntpZcEP1s5lRrbSqHTusQwYMBA8SXX5bV%2FnW4E%2FWQoyot7RYkmRlPipW4%2FO88ULhIEZ3MnLE5UxgvgQsOxSOE0qa0HsOJ5%2FBx5qDk84hvPWR%2Bpw9Hl5m%2FgaLWpFQQQuEQcRyrGXKRw%2BcH0savcfHc5GY26%2BvL%2BsIVq5aXIbyyH66RQbmkkWRusyIh1d8CLnB6Yn%2Bn3iXphy4xGxjt9Ij4mn6N11UyO2vh3Gq7lHqlvEYztcAMbVocCv98XScbFq8%2F5ab0niqag88ONbcV1BSv3mx5u6SHE7vRAr%2BnnysmL91ih4k2F%2F%2Fp%2BNBUxysp2Qj%2BcDtJbh2cc3jglD7%2BpWM6zRLt6PlBUEyL7g%2Bn%2BKqbGz0Z0whrycwAY6pgEoA4UXQ7%2FwGzZy7xWAZmoqdT51kJQJGcmn%2Fte77i%2BcGJ%2FLakSmt%2BxHZa9pjoBvty4rQgOjYP%2FJxH1wci3E%2FT9H9%2FhcA9axuwsdx6eTRwr44l4wXFKUdfA%2BNrprpPCNQO%2BOLRuXW2%2FvOaSbM%2FEQEuVFgJrI0wvpgL8P54ypzBnk%2BYcle%2BHRSVQ14oxto9BF3pmeiz6qEvysnoJtFPuf2BTzvWMb%2B9BB&X-Amz-Signature=e51b1443e94f1c42ca3f018bcce01f42a206a2e4f6a9d303f5657ce281b6d858&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR572PDF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICvyJYobpz7y6naGz4BKrvekfAxOepENZACch4mJGw7%2FAiAVpSF6lWjIqvFE1hWFMDHZIS521cW1nlJP52UHm1CQuyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggNAOIupeEi2nFl7KtwDbG%2F7UKIaYWP9teB2ZTV%2FXC2blfhkR5%2Fq3ArCih4dqQdDbROJzqV6oHslgVAhbHCLl1Lm%2BoK9zzLF6r2EttJH6LCiRHilPr47ddJauTl7pna%2FwiCg5IqZjelzC58dhzHziLlzuegzSKOCySlRuWzeAcT0qmCnhFV%2FBqbjQin7LBR9BVi5njpKWAdQQ3JDHmzqj9hmev%2B0ffUhozmDIYSYsG7H%2Fqbcn4rj5bAVkQvdQeBbllirUefSwLfA6sdGWOWe5mqP9%2B%2FWppb4xntpZcEP1s5lRrbSqHTusQwYMBA8SXX5bV%2FnW4E%2FWQoyot7RYkmRlPipW4%2FO88ULhIEZ3MnLE5UxgvgQsOxSOE0qa0HsOJ5%2FBx5qDk84hvPWR%2Bpw9Hl5m%2FgaLWpFQQQuEQcRyrGXKRw%2BcH0savcfHc5GY26%2BvL%2BsIVq5aXIbyyH66RQbmkkWRusyIh1d8CLnB6Yn%2Bn3iXphy4xGxjt9Ij4mn6N11UyO2vh3Gq7lHqlvEYztcAMbVocCv98XScbFq8%2F5ab0niqag88ONbcV1BSv3mx5u6SHE7vRAr%2BnnysmL91ih4k2F%2F%2Fp%2BNBUxysp2Qj%2BcDtJbh2cc3jglD7%2BpWM6zRLt6PlBUEyL7g%2Bn%2BKqbGz0Z0whrycwAY6pgEoA4UXQ7%2FwGzZy7xWAZmoqdT51kJQJGcmn%2Fte77i%2BcGJ%2FLakSmt%2BxHZa9pjoBvty4rQgOjYP%2FJxH1wci3E%2FT9H9%2FhcA9axuwsdx6eTRwr44l4wXFKUdfA%2BNrprpPCNQO%2BOLRuXW2%2FvOaSbM%2FEQEuVFgJrI0wvpgL8P54ypzBnk%2BYcle%2BHRSVQ14oxto9BF3pmeiz6qEvysnoJtFPuf2BTzvWMb%2B9BB&X-Amz-Signature=8d4452f78a8f85966fa32c424d30976f0a2a294ac0ac909cdaddf927f0520dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
