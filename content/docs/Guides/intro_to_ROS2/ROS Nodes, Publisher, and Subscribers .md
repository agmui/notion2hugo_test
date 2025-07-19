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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VEXARKZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhR97xniEyO%2B42dNlNrwmEbWx1wxMX89lhuAdDYc2GsAiAdNDLyaaY6SZyQ%2BUUnsWNt2I%2BbENnc25pmdAyU11Cm7yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyjQWlALs0wvknnJKtwDNrLl8sA2yMIYXamDzddePG1OkethSlhBJxIrxCldex0XzHOcLk%2BTtUcCRJsXFaq4wMwV6x5Yptxc8Ae7S1OazGpVT%2B94Y%2BVtbUhhGVVcULTPQ3vd1CsWhOHyjwvHLeHpS%2FMs%2BOX3Rhaam5vn6JZEuePbcRkv32wjXOxaBpibHi00gJIslpMW%2Bg9Re8GomJsCbIKIbRex9J%2BjgNgaRY3XvYPR3nO4JL9VcTudEKErMiKcl6Wpr8NXcEBgN3k5Fdq0oZ6LChM7Q29xw4hGnp6GlIH%2B58MofJun5pP85S3MX8Fs3OKrVBTMkc6jKIJq7BuIVO5z3VLms%2BasmxoqkyAILdhwX%2BF2ENxbP58u9ftDYylvqLJubRz6EHH6nBGz4fAxd6B8WuclpgddFHQ20hh60ou5P%2F5yLJ6eJG1rAXmuczkhuxCRXhvTScrpUp8KDFKdKbielGtrQ0dV%2F4y3Y%2B3djOQnz%2BubzW3LlazHxedNpB6JBUQbOtEchDmiznbf9oLECocJ64yFaEtFZATS7Jej4dd3F1lsy3Scvnx2VQ80WHagOpUwrRI7nAAeBYT3gUf3Yb1Ou2pacgx0y%2BRYara9Qc6xok996vyE5EyhzMIUW%2B8pj%2B9XpFwVNmth2cYwjdvvwwY6pgFtundzUA5Onc%2BB6XEA2ClxPzjJmn1G%2BXugdyoFhZAzcvUQY1QUh9RXDdy2J6P%2BDc3A%2Fjoa19%2FtkAZoqzTPBt0diQLQYEmIxTkVwbgqeO6PJDA0jXMTY%2Bm84wP5kmhkcf%2F96kyWBRtqFC6tBM8cyviYFhX%2Fth0Z8vvwAIY7JFkxBncrAcO883KGcn%2BMefC9auUX%2Bs4ZSFZcLqdsQ6kRuPbq7SRJzOOD&X-Amz-Signature=f94412070726b911717d2db19be02cb00ae3fe568a7857c9072dd0012257287f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VEXARKZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhR97xniEyO%2B42dNlNrwmEbWx1wxMX89lhuAdDYc2GsAiAdNDLyaaY6SZyQ%2BUUnsWNt2I%2BbENnc25pmdAyU11Cm7yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyjQWlALs0wvknnJKtwDNrLl8sA2yMIYXamDzddePG1OkethSlhBJxIrxCldex0XzHOcLk%2BTtUcCRJsXFaq4wMwV6x5Yptxc8Ae7S1OazGpVT%2B94Y%2BVtbUhhGVVcULTPQ3vd1CsWhOHyjwvHLeHpS%2FMs%2BOX3Rhaam5vn6JZEuePbcRkv32wjXOxaBpibHi00gJIslpMW%2Bg9Re8GomJsCbIKIbRex9J%2BjgNgaRY3XvYPR3nO4JL9VcTudEKErMiKcl6Wpr8NXcEBgN3k5Fdq0oZ6LChM7Q29xw4hGnp6GlIH%2B58MofJun5pP85S3MX8Fs3OKrVBTMkc6jKIJq7BuIVO5z3VLms%2BasmxoqkyAILdhwX%2BF2ENxbP58u9ftDYylvqLJubRz6EHH6nBGz4fAxd6B8WuclpgddFHQ20hh60ou5P%2F5yLJ6eJG1rAXmuczkhuxCRXhvTScrpUp8KDFKdKbielGtrQ0dV%2F4y3Y%2B3djOQnz%2BubzW3LlazHxedNpB6JBUQbOtEchDmiznbf9oLECocJ64yFaEtFZATS7Jej4dd3F1lsy3Scvnx2VQ80WHagOpUwrRI7nAAeBYT3gUf3Yb1Ou2pacgx0y%2BRYara9Qc6xok996vyE5EyhzMIUW%2B8pj%2B9XpFwVNmth2cYwjdvvwwY6pgFtundzUA5Onc%2BB6XEA2ClxPzjJmn1G%2BXugdyoFhZAzcvUQY1QUh9RXDdy2J6P%2BDc3A%2Fjoa19%2FtkAZoqzTPBt0diQLQYEmIxTkVwbgqeO6PJDA0jXMTY%2Bm84wP5kmhkcf%2F96kyWBRtqFC6tBM8cyviYFhX%2Fth0Z8vvwAIY7JFkxBncrAcO883KGcn%2BMefC9auUX%2Bs4ZSFZcLqdsQ6kRuPbq7SRJzOOD&X-Amz-Signature=26f4f41aeffb7dad2cfdab09dd21d2dd9a92b26508e7d5acc16b43602d7456c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VEXARKZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhR97xniEyO%2B42dNlNrwmEbWx1wxMX89lhuAdDYc2GsAiAdNDLyaaY6SZyQ%2BUUnsWNt2I%2BbENnc25pmdAyU11Cm7yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyjQWlALs0wvknnJKtwDNrLl8sA2yMIYXamDzddePG1OkethSlhBJxIrxCldex0XzHOcLk%2BTtUcCRJsXFaq4wMwV6x5Yptxc8Ae7S1OazGpVT%2B94Y%2BVtbUhhGVVcULTPQ3vd1CsWhOHyjwvHLeHpS%2FMs%2BOX3Rhaam5vn6JZEuePbcRkv32wjXOxaBpibHi00gJIslpMW%2Bg9Re8GomJsCbIKIbRex9J%2BjgNgaRY3XvYPR3nO4JL9VcTudEKErMiKcl6Wpr8NXcEBgN3k5Fdq0oZ6LChM7Q29xw4hGnp6GlIH%2B58MofJun5pP85S3MX8Fs3OKrVBTMkc6jKIJq7BuIVO5z3VLms%2BasmxoqkyAILdhwX%2BF2ENxbP58u9ftDYylvqLJubRz6EHH6nBGz4fAxd6B8WuclpgddFHQ20hh60ou5P%2F5yLJ6eJG1rAXmuczkhuxCRXhvTScrpUp8KDFKdKbielGtrQ0dV%2F4y3Y%2B3djOQnz%2BubzW3LlazHxedNpB6JBUQbOtEchDmiznbf9oLECocJ64yFaEtFZATS7Jej4dd3F1lsy3Scvnx2VQ80WHagOpUwrRI7nAAeBYT3gUf3Yb1Ou2pacgx0y%2BRYara9Qc6xok996vyE5EyhzMIUW%2B8pj%2B9XpFwVNmth2cYwjdvvwwY6pgFtundzUA5Onc%2BB6XEA2ClxPzjJmn1G%2BXugdyoFhZAzcvUQY1QUh9RXDdy2J6P%2BDc3A%2Fjoa19%2FtkAZoqzTPBt0diQLQYEmIxTkVwbgqeO6PJDA0jXMTY%2Bm84wP5kmhkcf%2F96kyWBRtqFC6tBM8cyviYFhX%2Fth0Z8vvwAIY7JFkxBncrAcO883KGcn%2BMefC9auUX%2Bs4ZSFZcLqdsQ6kRuPbq7SRJzOOD&X-Amz-Signature=f8218854420aa8faa2f2667cae72dabf5df9c3527a26062c9ce9d8805abc94db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VEXARKZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhR97xniEyO%2B42dNlNrwmEbWx1wxMX89lhuAdDYc2GsAiAdNDLyaaY6SZyQ%2BUUnsWNt2I%2BbENnc25pmdAyU11Cm7yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyjQWlALs0wvknnJKtwDNrLl8sA2yMIYXamDzddePG1OkethSlhBJxIrxCldex0XzHOcLk%2BTtUcCRJsXFaq4wMwV6x5Yptxc8Ae7S1OazGpVT%2B94Y%2BVtbUhhGVVcULTPQ3vd1CsWhOHyjwvHLeHpS%2FMs%2BOX3Rhaam5vn6JZEuePbcRkv32wjXOxaBpibHi00gJIslpMW%2Bg9Re8GomJsCbIKIbRex9J%2BjgNgaRY3XvYPR3nO4JL9VcTudEKErMiKcl6Wpr8NXcEBgN3k5Fdq0oZ6LChM7Q29xw4hGnp6GlIH%2B58MofJun5pP85S3MX8Fs3OKrVBTMkc6jKIJq7BuIVO5z3VLms%2BasmxoqkyAILdhwX%2BF2ENxbP58u9ftDYylvqLJubRz6EHH6nBGz4fAxd6B8WuclpgddFHQ20hh60ou5P%2F5yLJ6eJG1rAXmuczkhuxCRXhvTScrpUp8KDFKdKbielGtrQ0dV%2F4y3Y%2B3djOQnz%2BubzW3LlazHxedNpB6JBUQbOtEchDmiznbf9oLECocJ64yFaEtFZATS7Jej4dd3F1lsy3Scvnx2VQ80WHagOpUwrRI7nAAeBYT3gUf3Yb1Ou2pacgx0y%2BRYara9Qc6xok996vyE5EyhzMIUW%2B8pj%2B9XpFwVNmth2cYwjdvvwwY6pgFtundzUA5Onc%2BB6XEA2ClxPzjJmn1G%2BXugdyoFhZAzcvUQY1QUh9RXDdy2J6P%2BDc3A%2Fjoa19%2FtkAZoqzTPBt0diQLQYEmIxTkVwbgqeO6PJDA0jXMTY%2Bm84wP5kmhkcf%2F96kyWBRtqFC6tBM8cyviYFhX%2Fth0Z8vvwAIY7JFkxBncrAcO883KGcn%2BMefC9auUX%2Bs4ZSFZcLqdsQ6kRuPbq7SRJzOOD&X-Amz-Signature=3472385528d7464d8b3f9118575d68cc873e8c8b948b6d6037b8517bbbe1b93c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VEXARKZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhR97xniEyO%2B42dNlNrwmEbWx1wxMX89lhuAdDYc2GsAiAdNDLyaaY6SZyQ%2BUUnsWNt2I%2BbENnc25pmdAyU11Cm7yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyjQWlALs0wvknnJKtwDNrLl8sA2yMIYXamDzddePG1OkethSlhBJxIrxCldex0XzHOcLk%2BTtUcCRJsXFaq4wMwV6x5Yptxc8Ae7S1OazGpVT%2B94Y%2BVtbUhhGVVcULTPQ3vd1CsWhOHyjwvHLeHpS%2FMs%2BOX3Rhaam5vn6JZEuePbcRkv32wjXOxaBpibHi00gJIslpMW%2Bg9Re8GomJsCbIKIbRex9J%2BjgNgaRY3XvYPR3nO4JL9VcTudEKErMiKcl6Wpr8NXcEBgN3k5Fdq0oZ6LChM7Q29xw4hGnp6GlIH%2B58MofJun5pP85S3MX8Fs3OKrVBTMkc6jKIJq7BuIVO5z3VLms%2BasmxoqkyAILdhwX%2BF2ENxbP58u9ftDYylvqLJubRz6EHH6nBGz4fAxd6B8WuclpgddFHQ20hh60ou5P%2F5yLJ6eJG1rAXmuczkhuxCRXhvTScrpUp8KDFKdKbielGtrQ0dV%2F4y3Y%2B3djOQnz%2BubzW3LlazHxedNpB6JBUQbOtEchDmiznbf9oLECocJ64yFaEtFZATS7Jej4dd3F1lsy3Scvnx2VQ80WHagOpUwrRI7nAAeBYT3gUf3Yb1Ou2pacgx0y%2BRYara9Qc6xok996vyE5EyhzMIUW%2B8pj%2B9XpFwVNmth2cYwjdvvwwY6pgFtundzUA5Onc%2BB6XEA2ClxPzjJmn1G%2BXugdyoFhZAzcvUQY1QUh9RXDdy2J6P%2BDc3A%2Fjoa19%2FtkAZoqzTPBt0diQLQYEmIxTkVwbgqeO6PJDA0jXMTY%2Bm84wP5kmhkcf%2F96kyWBRtqFC6tBM8cyviYFhX%2Fth0Z8vvwAIY7JFkxBncrAcO883KGcn%2BMefC9auUX%2Bs4ZSFZcLqdsQ6kRuPbq7SRJzOOD&X-Amz-Signature=b8fd033748ea32b15ff320b731384cba4204321945ca126c87703a656fe55c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VEXARKZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhR97xniEyO%2B42dNlNrwmEbWx1wxMX89lhuAdDYc2GsAiAdNDLyaaY6SZyQ%2BUUnsWNt2I%2BbENnc25pmdAyU11Cm7yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyjQWlALs0wvknnJKtwDNrLl8sA2yMIYXamDzddePG1OkethSlhBJxIrxCldex0XzHOcLk%2BTtUcCRJsXFaq4wMwV6x5Yptxc8Ae7S1OazGpVT%2B94Y%2BVtbUhhGVVcULTPQ3vd1CsWhOHyjwvHLeHpS%2FMs%2BOX3Rhaam5vn6JZEuePbcRkv32wjXOxaBpibHi00gJIslpMW%2Bg9Re8GomJsCbIKIbRex9J%2BjgNgaRY3XvYPR3nO4JL9VcTudEKErMiKcl6Wpr8NXcEBgN3k5Fdq0oZ6LChM7Q29xw4hGnp6GlIH%2B58MofJun5pP85S3MX8Fs3OKrVBTMkc6jKIJq7BuIVO5z3VLms%2BasmxoqkyAILdhwX%2BF2ENxbP58u9ftDYylvqLJubRz6EHH6nBGz4fAxd6B8WuclpgddFHQ20hh60ou5P%2F5yLJ6eJG1rAXmuczkhuxCRXhvTScrpUp8KDFKdKbielGtrQ0dV%2F4y3Y%2B3djOQnz%2BubzW3LlazHxedNpB6JBUQbOtEchDmiznbf9oLECocJ64yFaEtFZATS7Jej4dd3F1lsy3Scvnx2VQ80WHagOpUwrRI7nAAeBYT3gUf3Yb1Ou2pacgx0y%2BRYara9Qc6xok996vyE5EyhzMIUW%2B8pj%2B9XpFwVNmth2cYwjdvvwwY6pgFtundzUA5Onc%2BB6XEA2ClxPzjJmn1G%2BXugdyoFhZAzcvUQY1QUh9RXDdy2J6P%2BDc3A%2Fjoa19%2FtkAZoqzTPBt0diQLQYEmIxTkVwbgqeO6PJDA0jXMTY%2Bm84wP5kmhkcf%2F96kyWBRtqFC6tBM8cyviYFhX%2Fth0Z8vvwAIY7JFkxBncrAcO883KGcn%2BMefC9auUX%2Bs4ZSFZcLqdsQ6kRuPbq7SRJzOOD&X-Amz-Signature=af45f3a778fb1afacfa0b0cbfafd49326d8c956877d2bc82e1911b96fe54dc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VEXARKZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhR97xniEyO%2B42dNlNrwmEbWx1wxMX89lhuAdDYc2GsAiAdNDLyaaY6SZyQ%2BUUnsWNt2I%2BbENnc25pmdAyU11Cm7yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyjQWlALs0wvknnJKtwDNrLl8sA2yMIYXamDzddePG1OkethSlhBJxIrxCldex0XzHOcLk%2BTtUcCRJsXFaq4wMwV6x5Yptxc8Ae7S1OazGpVT%2B94Y%2BVtbUhhGVVcULTPQ3vd1CsWhOHyjwvHLeHpS%2FMs%2BOX3Rhaam5vn6JZEuePbcRkv32wjXOxaBpibHi00gJIslpMW%2Bg9Re8GomJsCbIKIbRex9J%2BjgNgaRY3XvYPR3nO4JL9VcTudEKErMiKcl6Wpr8NXcEBgN3k5Fdq0oZ6LChM7Q29xw4hGnp6GlIH%2B58MofJun5pP85S3MX8Fs3OKrVBTMkc6jKIJq7BuIVO5z3VLms%2BasmxoqkyAILdhwX%2BF2ENxbP58u9ftDYylvqLJubRz6EHH6nBGz4fAxd6B8WuclpgddFHQ20hh60ou5P%2F5yLJ6eJG1rAXmuczkhuxCRXhvTScrpUp8KDFKdKbielGtrQ0dV%2F4y3Y%2B3djOQnz%2BubzW3LlazHxedNpB6JBUQbOtEchDmiznbf9oLECocJ64yFaEtFZATS7Jej4dd3F1lsy3Scvnx2VQ80WHagOpUwrRI7nAAeBYT3gUf3Yb1Ou2pacgx0y%2BRYara9Qc6xok996vyE5EyhzMIUW%2B8pj%2B9XpFwVNmth2cYwjdvvwwY6pgFtundzUA5Onc%2BB6XEA2ClxPzjJmn1G%2BXugdyoFhZAzcvUQY1QUh9RXDdy2J6P%2BDc3A%2Fjoa19%2FtkAZoqzTPBt0diQLQYEmIxTkVwbgqeO6PJDA0jXMTY%2Bm84wP5kmhkcf%2F96kyWBRtqFC6tBM8cyviYFhX%2Fth0Z8vvwAIY7JFkxBncrAcO883KGcn%2BMefC9auUX%2Bs4ZSFZcLqdsQ6kRuPbq7SRJzOOD&X-Amz-Signature=8fbd82c659759e4663d0dec8f403026941644ed5e5f89b54686f863f0581b1f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VEXARKZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhR97xniEyO%2B42dNlNrwmEbWx1wxMX89lhuAdDYc2GsAiAdNDLyaaY6SZyQ%2BUUnsWNt2I%2BbENnc25pmdAyU11Cm7yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyjQWlALs0wvknnJKtwDNrLl8sA2yMIYXamDzddePG1OkethSlhBJxIrxCldex0XzHOcLk%2BTtUcCRJsXFaq4wMwV6x5Yptxc8Ae7S1OazGpVT%2B94Y%2BVtbUhhGVVcULTPQ3vd1CsWhOHyjwvHLeHpS%2FMs%2BOX3Rhaam5vn6JZEuePbcRkv32wjXOxaBpibHi00gJIslpMW%2Bg9Re8GomJsCbIKIbRex9J%2BjgNgaRY3XvYPR3nO4JL9VcTudEKErMiKcl6Wpr8NXcEBgN3k5Fdq0oZ6LChM7Q29xw4hGnp6GlIH%2B58MofJun5pP85S3MX8Fs3OKrVBTMkc6jKIJq7BuIVO5z3VLms%2BasmxoqkyAILdhwX%2BF2ENxbP58u9ftDYylvqLJubRz6EHH6nBGz4fAxd6B8WuclpgddFHQ20hh60ou5P%2F5yLJ6eJG1rAXmuczkhuxCRXhvTScrpUp8KDFKdKbielGtrQ0dV%2F4y3Y%2B3djOQnz%2BubzW3LlazHxedNpB6JBUQbOtEchDmiznbf9oLECocJ64yFaEtFZATS7Jej4dd3F1lsy3Scvnx2VQ80WHagOpUwrRI7nAAeBYT3gUf3Yb1Ou2pacgx0y%2BRYara9Qc6xok996vyE5EyhzMIUW%2B8pj%2B9XpFwVNmth2cYwjdvvwwY6pgFtundzUA5Onc%2BB6XEA2ClxPzjJmn1G%2BXugdyoFhZAzcvUQY1QUh9RXDdy2J6P%2BDc3A%2Fjoa19%2FtkAZoqzTPBt0diQLQYEmIxTkVwbgqeO6PJDA0jXMTY%2Bm84wP5kmhkcf%2F96kyWBRtqFC6tBM8cyviYFhX%2Fth0Z8vvwAIY7JFkxBncrAcO883KGcn%2BMefC9auUX%2Bs4ZSFZcLqdsQ6kRuPbq7SRJzOOD&X-Amz-Signature=d82a14926e6643d3a95efeae149afb44bb8d86e1794f18959d6f44c8f3577ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
