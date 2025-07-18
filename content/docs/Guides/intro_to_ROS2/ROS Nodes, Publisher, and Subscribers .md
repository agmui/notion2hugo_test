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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGTGAKAL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIC%2B7qw9X53LP6%2FwaacRiOBRtCDl43tflIBU%2BVKxlQ8vsAiAjY067EZXO4u9LJxwlOq8Tne5v3lVjekI1estbRjif9SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlqnC9EPojCNv6AkrKtwDfL83fuZhVQ8JdQzXYb96psSJOVySlwVZILqUNzPFO2XAyDnlVp3lx5SX%2BUNyWMDjRAh3sE0fGe8gnWAUva%2FSMr40oIkx8CYV6ZnBKfsE0z7Qlvgta1isxHYVK78WZjqVlIsKP3ZV6XaMWZzPd3ffa%2BQeaZ4ZsQPAxHM9HKutsra7M2Dy%2BE2pOCEHs22KQdyp0rSO9clzd8Fw0QNAtoOJKwKHGfVt9NBb01SD2P2MUTLxfNqMhStyuzTB7z8qpSqHHGscqQHmFPR%2FV0fEvdfLXNybaSrFkrNiBWj7vtnBcSgNAv2FelWAphNy6rxwwS1boTYIeYvHnG3EmvUmjEWSAmnZGkXMisocz6oGOZkJ%2BhUyt4C%2FoVxdZtaQv1mJGHh1x%2FPSVJsu7LBbEn32dsyYchaFFcz8T2exzvGk97TSFPAkEJSJIFPHmuFAcfNv20Uje2nn24bBReX%2Fj8IK4iKRHeFcPFD6tS9eWxptEcck1RNXYc9GrgFPg3UgZkS6cFr6qFAE%2B2mbwnwiHBKaR0dZoZicf6e4%2FQ8L%2Bt0c%2BW2t6zkr0Gbm9XEmAAFVIiCzOKTIi0f74EL5ay43A9vGNWL5hGXIsXw9dkqoGYZqZY9E4CkTFaRtyM0DqpP7oBcw5K%2FnwwY6pgF4oq8M9X9WQzeMHAiBCOToR6YI1%2Bl4mT%2FWEmiRCExCOoeOmrPGFPTvY34DkOaEqLRbicX6kiOtwrgAoiYAIVYmHhQZaMChl4lbNPtCESJpDK%2F6yB9C0Z2rmdHCh8i4rBfz%2FNZa%2Bxi%2F5fC1hqXN5ghQhBxuDPaJwb%2Fm4qA4kc7NWLf7sZv5Pe7oBxrm%2B4hdB%2FBLRro1QHHP6K1LXcqKPm3DNDcW7pgc&X-Amz-Signature=22689383c2431fb809f82537bde49c2a1f29ce95a695539acf8fff32ea29e466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGTGAKAL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIC%2B7qw9X53LP6%2FwaacRiOBRtCDl43tflIBU%2BVKxlQ8vsAiAjY067EZXO4u9LJxwlOq8Tne5v3lVjekI1estbRjif9SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlqnC9EPojCNv6AkrKtwDfL83fuZhVQ8JdQzXYb96psSJOVySlwVZILqUNzPFO2XAyDnlVp3lx5SX%2BUNyWMDjRAh3sE0fGe8gnWAUva%2FSMr40oIkx8CYV6ZnBKfsE0z7Qlvgta1isxHYVK78WZjqVlIsKP3ZV6XaMWZzPd3ffa%2BQeaZ4ZsQPAxHM9HKutsra7M2Dy%2BE2pOCEHs22KQdyp0rSO9clzd8Fw0QNAtoOJKwKHGfVt9NBb01SD2P2MUTLxfNqMhStyuzTB7z8qpSqHHGscqQHmFPR%2FV0fEvdfLXNybaSrFkrNiBWj7vtnBcSgNAv2FelWAphNy6rxwwS1boTYIeYvHnG3EmvUmjEWSAmnZGkXMisocz6oGOZkJ%2BhUyt4C%2FoVxdZtaQv1mJGHh1x%2FPSVJsu7LBbEn32dsyYchaFFcz8T2exzvGk97TSFPAkEJSJIFPHmuFAcfNv20Uje2nn24bBReX%2Fj8IK4iKRHeFcPFD6tS9eWxptEcck1RNXYc9GrgFPg3UgZkS6cFr6qFAE%2B2mbwnwiHBKaR0dZoZicf6e4%2FQ8L%2Bt0c%2BW2t6zkr0Gbm9XEmAAFVIiCzOKTIi0f74EL5ay43A9vGNWL5hGXIsXw9dkqoGYZqZY9E4CkTFaRtyM0DqpP7oBcw5K%2FnwwY6pgF4oq8M9X9WQzeMHAiBCOToR6YI1%2Bl4mT%2FWEmiRCExCOoeOmrPGFPTvY34DkOaEqLRbicX6kiOtwrgAoiYAIVYmHhQZaMChl4lbNPtCESJpDK%2F6yB9C0Z2rmdHCh8i4rBfz%2FNZa%2Bxi%2F5fC1hqXN5ghQhBxuDPaJwb%2Fm4qA4kc7NWLf7sZv5Pe7oBxrm%2B4hdB%2FBLRro1QHHP6K1LXcqKPm3DNDcW7pgc&X-Amz-Signature=064647ebaec9dad69e26557eff107d7d6396c141ec6fd3aa117528e4828cb0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGTGAKAL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIC%2B7qw9X53LP6%2FwaacRiOBRtCDl43tflIBU%2BVKxlQ8vsAiAjY067EZXO4u9LJxwlOq8Tne5v3lVjekI1estbRjif9SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlqnC9EPojCNv6AkrKtwDfL83fuZhVQ8JdQzXYb96psSJOVySlwVZILqUNzPFO2XAyDnlVp3lx5SX%2BUNyWMDjRAh3sE0fGe8gnWAUva%2FSMr40oIkx8CYV6ZnBKfsE0z7Qlvgta1isxHYVK78WZjqVlIsKP3ZV6XaMWZzPd3ffa%2BQeaZ4ZsQPAxHM9HKutsra7M2Dy%2BE2pOCEHs22KQdyp0rSO9clzd8Fw0QNAtoOJKwKHGfVt9NBb01SD2P2MUTLxfNqMhStyuzTB7z8qpSqHHGscqQHmFPR%2FV0fEvdfLXNybaSrFkrNiBWj7vtnBcSgNAv2FelWAphNy6rxwwS1boTYIeYvHnG3EmvUmjEWSAmnZGkXMisocz6oGOZkJ%2BhUyt4C%2FoVxdZtaQv1mJGHh1x%2FPSVJsu7LBbEn32dsyYchaFFcz8T2exzvGk97TSFPAkEJSJIFPHmuFAcfNv20Uje2nn24bBReX%2Fj8IK4iKRHeFcPFD6tS9eWxptEcck1RNXYc9GrgFPg3UgZkS6cFr6qFAE%2B2mbwnwiHBKaR0dZoZicf6e4%2FQ8L%2Bt0c%2BW2t6zkr0Gbm9XEmAAFVIiCzOKTIi0f74EL5ay43A9vGNWL5hGXIsXw9dkqoGYZqZY9E4CkTFaRtyM0DqpP7oBcw5K%2FnwwY6pgF4oq8M9X9WQzeMHAiBCOToR6YI1%2Bl4mT%2FWEmiRCExCOoeOmrPGFPTvY34DkOaEqLRbicX6kiOtwrgAoiYAIVYmHhQZaMChl4lbNPtCESJpDK%2F6yB9C0Z2rmdHCh8i4rBfz%2FNZa%2Bxi%2F5fC1hqXN5ghQhBxuDPaJwb%2Fm4qA4kc7NWLf7sZv5Pe7oBxrm%2B4hdB%2FBLRro1QHHP6K1LXcqKPm3DNDcW7pgc&X-Amz-Signature=d16502644e4c0e3e6fcc9f69f550947611933c6bc1a408332652e657dc6a0458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGTGAKAL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIC%2B7qw9X53LP6%2FwaacRiOBRtCDl43tflIBU%2BVKxlQ8vsAiAjY067EZXO4u9LJxwlOq8Tne5v3lVjekI1estbRjif9SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlqnC9EPojCNv6AkrKtwDfL83fuZhVQ8JdQzXYb96psSJOVySlwVZILqUNzPFO2XAyDnlVp3lx5SX%2BUNyWMDjRAh3sE0fGe8gnWAUva%2FSMr40oIkx8CYV6ZnBKfsE0z7Qlvgta1isxHYVK78WZjqVlIsKP3ZV6XaMWZzPd3ffa%2BQeaZ4ZsQPAxHM9HKutsra7M2Dy%2BE2pOCEHs22KQdyp0rSO9clzd8Fw0QNAtoOJKwKHGfVt9NBb01SD2P2MUTLxfNqMhStyuzTB7z8qpSqHHGscqQHmFPR%2FV0fEvdfLXNybaSrFkrNiBWj7vtnBcSgNAv2FelWAphNy6rxwwS1boTYIeYvHnG3EmvUmjEWSAmnZGkXMisocz6oGOZkJ%2BhUyt4C%2FoVxdZtaQv1mJGHh1x%2FPSVJsu7LBbEn32dsyYchaFFcz8T2exzvGk97TSFPAkEJSJIFPHmuFAcfNv20Uje2nn24bBReX%2Fj8IK4iKRHeFcPFD6tS9eWxptEcck1RNXYc9GrgFPg3UgZkS6cFr6qFAE%2B2mbwnwiHBKaR0dZoZicf6e4%2FQ8L%2Bt0c%2BW2t6zkr0Gbm9XEmAAFVIiCzOKTIi0f74EL5ay43A9vGNWL5hGXIsXw9dkqoGYZqZY9E4CkTFaRtyM0DqpP7oBcw5K%2FnwwY6pgF4oq8M9X9WQzeMHAiBCOToR6YI1%2Bl4mT%2FWEmiRCExCOoeOmrPGFPTvY34DkOaEqLRbicX6kiOtwrgAoiYAIVYmHhQZaMChl4lbNPtCESJpDK%2F6yB9C0Z2rmdHCh8i4rBfz%2FNZa%2Bxi%2F5fC1hqXN5ghQhBxuDPaJwb%2Fm4qA4kc7NWLf7sZv5Pe7oBxrm%2B4hdB%2FBLRro1QHHP6K1LXcqKPm3DNDcW7pgc&X-Amz-Signature=cced1ac58be10d90d3fb652f15055f19338181201d349e11fc2c033f02455137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGTGAKAL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIC%2B7qw9X53LP6%2FwaacRiOBRtCDl43tflIBU%2BVKxlQ8vsAiAjY067EZXO4u9LJxwlOq8Tne5v3lVjekI1estbRjif9SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlqnC9EPojCNv6AkrKtwDfL83fuZhVQ8JdQzXYb96psSJOVySlwVZILqUNzPFO2XAyDnlVp3lx5SX%2BUNyWMDjRAh3sE0fGe8gnWAUva%2FSMr40oIkx8CYV6ZnBKfsE0z7Qlvgta1isxHYVK78WZjqVlIsKP3ZV6XaMWZzPd3ffa%2BQeaZ4ZsQPAxHM9HKutsra7M2Dy%2BE2pOCEHs22KQdyp0rSO9clzd8Fw0QNAtoOJKwKHGfVt9NBb01SD2P2MUTLxfNqMhStyuzTB7z8qpSqHHGscqQHmFPR%2FV0fEvdfLXNybaSrFkrNiBWj7vtnBcSgNAv2FelWAphNy6rxwwS1boTYIeYvHnG3EmvUmjEWSAmnZGkXMisocz6oGOZkJ%2BhUyt4C%2FoVxdZtaQv1mJGHh1x%2FPSVJsu7LBbEn32dsyYchaFFcz8T2exzvGk97TSFPAkEJSJIFPHmuFAcfNv20Uje2nn24bBReX%2Fj8IK4iKRHeFcPFD6tS9eWxptEcck1RNXYc9GrgFPg3UgZkS6cFr6qFAE%2B2mbwnwiHBKaR0dZoZicf6e4%2FQ8L%2Bt0c%2BW2t6zkr0Gbm9XEmAAFVIiCzOKTIi0f74EL5ay43A9vGNWL5hGXIsXw9dkqoGYZqZY9E4CkTFaRtyM0DqpP7oBcw5K%2FnwwY6pgF4oq8M9X9WQzeMHAiBCOToR6YI1%2Bl4mT%2FWEmiRCExCOoeOmrPGFPTvY34DkOaEqLRbicX6kiOtwrgAoiYAIVYmHhQZaMChl4lbNPtCESJpDK%2F6yB9C0Z2rmdHCh8i4rBfz%2FNZa%2Bxi%2F5fC1hqXN5ghQhBxuDPaJwb%2Fm4qA4kc7NWLf7sZv5Pe7oBxrm%2B4hdB%2FBLRro1QHHP6K1LXcqKPm3DNDcW7pgc&X-Amz-Signature=4cb221db89ccc8579cb9dea355370225161b6419e2566fc1a2ba431231ae5c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGTGAKAL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIC%2B7qw9X53LP6%2FwaacRiOBRtCDl43tflIBU%2BVKxlQ8vsAiAjY067EZXO4u9LJxwlOq8Tne5v3lVjekI1estbRjif9SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlqnC9EPojCNv6AkrKtwDfL83fuZhVQ8JdQzXYb96psSJOVySlwVZILqUNzPFO2XAyDnlVp3lx5SX%2BUNyWMDjRAh3sE0fGe8gnWAUva%2FSMr40oIkx8CYV6ZnBKfsE0z7Qlvgta1isxHYVK78WZjqVlIsKP3ZV6XaMWZzPd3ffa%2BQeaZ4ZsQPAxHM9HKutsra7M2Dy%2BE2pOCEHs22KQdyp0rSO9clzd8Fw0QNAtoOJKwKHGfVt9NBb01SD2P2MUTLxfNqMhStyuzTB7z8qpSqHHGscqQHmFPR%2FV0fEvdfLXNybaSrFkrNiBWj7vtnBcSgNAv2FelWAphNy6rxwwS1boTYIeYvHnG3EmvUmjEWSAmnZGkXMisocz6oGOZkJ%2BhUyt4C%2FoVxdZtaQv1mJGHh1x%2FPSVJsu7LBbEn32dsyYchaFFcz8T2exzvGk97TSFPAkEJSJIFPHmuFAcfNv20Uje2nn24bBReX%2Fj8IK4iKRHeFcPFD6tS9eWxptEcck1RNXYc9GrgFPg3UgZkS6cFr6qFAE%2B2mbwnwiHBKaR0dZoZicf6e4%2FQ8L%2Bt0c%2BW2t6zkr0Gbm9XEmAAFVIiCzOKTIi0f74EL5ay43A9vGNWL5hGXIsXw9dkqoGYZqZY9E4CkTFaRtyM0DqpP7oBcw5K%2FnwwY6pgF4oq8M9X9WQzeMHAiBCOToR6YI1%2Bl4mT%2FWEmiRCExCOoeOmrPGFPTvY34DkOaEqLRbicX6kiOtwrgAoiYAIVYmHhQZaMChl4lbNPtCESJpDK%2F6yB9C0Z2rmdHCh8i4rBfz%2FNZa%2Bxi%2F5fC1hqXN5ghQhBxuDPaJwb%2Fm4qA4kc7NWLf7sZv5Pe7oBxrm%2B4hdB%2FBLRro1QHHP6K1LXcqKPm3DNDcW7pgc&X-Amz-Signature=5b06d73373e4e37176efcadd07e8f734bd13654f711ec7c0d7016b612fe3d9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGTGAKAL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIC%2B7qw9X53LP6%2FwaacRiOBRtCDl43tflIBU%2BVKxlQ8vsAiAjY067EZXO4u9LJxwlOq8Tne5v3lVjekI1estbRjif9SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlqnC9EPojCNv6AkrKtwDfL83fuZhVQ8JdQzXYb96psSJOVySlwVZILqUNzPFO2XAyDnlVp3lx5SX%2BUNyWMDjRAh3sE0fGe8gnWAUva%2FSMr40oIkx8CYV6ZnBKfsE0z7Qlvgta1isxHYVK78WZjqVlIsKP3ZV6XaMWZzPd3ffa%2BQeaZ4ZsQPAxHM9HKutsra7M2Dy%2BE2pOCEHs22KQdyp0rSO9clzd8Fw0QNAtoOJKwKHGfVt9NBb01SD2P2MUTLxfNqMhStyuzTB7z8qpSqHHGscqQHmFPR%2FV0fEvdfLXNybaSrFkrNiBWj7vtnBcSgNAv2FelWAphNy6rxwwS1boTYIeYvHnG3EmvUmjEWSAmnZGkXMisocz6oGOZkJ%2BhUyt4C%2FoVxdZtaQv1mJGHh1x%2FPSVJsu7LBbEn32dsyYchaFFcz8T2exzvGk97TSFPAkEJSJIFPHmuFAcfNv20Uje2nn24bBReX%2Fj8IK4iKRHeFcPFD6tS9eWxptEcck1RNXYc9GrgFPg3UgZkS6cFr6qFAE%2B2mbwnwiHBKaR0dZoZicf6e4%2FQ8L%2Bt0c%2BW2t6zkr0Gbm9XEmAAFVIiCzOKTIi0f74EL5ay43A9vGNWL5hGXIsXw9dkqoGYZqZY9E4CkTFaRtyM0DqpP7oBcw5K%2FnwwY6pgF4oq8M9X9WQzeMHAiBCOToR6YI1%2Bl4mT%2FWEmiRCExCOoeOmrPGFPTvY34DkOaEqLRbicX6kiOtwrgAoiYAIVYmHhQZaMChl4lbNPtCESJpDK%2F6yB9C0Z2rmdHCh8i4rBfz%2FNZa%2Bxi%2F5fC1hqXN5ghQhBxuDPaJwb%2Fm4qA4kc7NWLf7sZv5Pe7oBxrm%2B4hdB%2FBLRro1QHHP6K1LXcqKPm3DNDcW7pgc&X-Amz-Signature=e156a7629e816057e80a398171827b1239dfdef70ec6c615a9126f50427fbd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGTGAKAL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIC%2B7qw9X53LP6%2FwaacRiOBRtCDl43tflIBU%2BVKxlQ8vsAiAjY067EZXO4u9LJxwlOq8Tne5v3lVjekI1estbRjif9SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlqnC9EPojCNv6AkrKtwDfL83fuZhVQ8JdQzXYb96psSJOVySlwVZILqUNzPFO2XAyDnlVp3lx5SX%2BUNyWMDjRAh3sE0fGe8gnWAUva%2FSMr40oIkx8CYV6ZnBKfsE0z7Qlvgta1isxHYVK78WZjqVlIsKP3ZV6XaMWZzPd3ffa%2BQeaZ4ZsQPAxHM9HKutsra7M2Dy%2BE2pOCEHs22KQdyp0rSO9clzd8Fw0QNAtoOJKwKHGfVt9NBb01SD2P2MUTLxfNqMhStyuzTB7z8qpSqHHGscqQHmFPR%2FV0fEvdfLXNybaSrFkrNiBWj7vtnBcSgNAv2FelWAphNy6rxwwS1boTYIeYvHnG3EmvUmjEWSAmnZGkXMisocz6oGOZkJ%2BhUyt4C%2FoVxdZtaQv1mJGHh1x%2FPSVJsu7LBbEn32dsyYchaFFcz8T2exzvGk97TSFPAkEJSJIFPHmuFAcfNv20Uje2nn24bBReX%2Fj8IK4iKRHeFcPFD6tS9eWxptEcck1RNXYc9GrgFPg3UgZkS6cFr6qFAE%2B2mbwnwiHBKaR0dZoZicf6e4%2FQ8L%2Bt0c%2BW2t6zkr0Gbm9XEmAAFVIiCzOKTIi0f74EL5ay43A9vGNWL5hGXIsXw9dkqoGYZqZY9E4CkTFaRtyM0DqpP7oBcw5K%2FnwwY6pgF4oq8M9X9WQzeMHAiBCOToR6YI1%2Bl4mT%2FWEmiRCExCOoeOmrPGFPTvY34DkOaEqLRbicX6kiOtwrgAoiYAIVYmHhQZaMChl4lbNPtCESJpDK%2F6yB9C0Z2rmdHCh8i4rBfz%2FNZa%2Bxi%2F5fC1hqXN5ghQhBxuDPaJwb%2Fm4qA4kc7NWLf7sZv5Pe7oBxrm%2B4hdB%2FBLRro1QHHP6K1LXcqKPm3DNDcW7pgc&X-Amz-Signature=02a89d5921ab1c73a44e7dd454966e42a44518e41ba0c65c5e99bd1c684f8bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
