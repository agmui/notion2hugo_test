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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDDSLW2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOjEySaVAtO%2BES3HEx6ORWdfweBFpyjlliOowVb6%2BBgAiAvTp77RliFs2xU2SWcM8QoVb0JAmZReyyl2e7tXp0PNyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0u%2FO6KMkqMdLjMSKtwD6nWsIIy7JiO0VXFkZ7xgjO%2F87uNOb3sLkUCJumtJ1NnJqkDRpw9S6dwHjSaSoqd%2BebtoCS0oecR17gorawZAcp58YwWN%2FqP8K4rFeAls0i9gI2uKLh7pV1w5bGY%2BXyzxet9wXoqPZKPAJQ4iedUV%2B%2Bj6e9E6%2Blpfr%2FFRIGfOz2O6YfeFQ7A29dOJyhmoaZghT6Gb1JcADFbnf3q1iTtPZUPk9%2BHF3b6MnmQg7L7o8WNQr%2FoD4vNe0mhaXO7R4kPn6PwipYd5MgTZBemcxw11030FA%2B0d2mfkQUszbAi3UnupuKjK27OFAegDprdsdLEs9PjUA2QxRitvV4mWzFZEkYBrm9EHA0iPb%2B2FQMh4AszMUimLi0sQvZkBhFuM3UNXn6iD7siYdN7I6E6n0UNbaI49wnJr3R8tVuFSndVmNoMk7GMrosvFK%2B7dicx47yOCFT207YAnfI2ZzUbqyxhWbbUGZ9eFgdgQ%2BSDgGMmYUtP3TNM7mJS%2Ft0ps%2FisEgcGuOS1EThlCyDRvDpifX4BODkgLAY9Ja1ieIUJ%2BC7zvUf3gebM9gcpQ27nXUWKz2YP%2FAWnF5RWhs7dHXpIBQWrQLC6VPF9hZssm1vTgbLJuKOagCRV%2FTOo57wPFQAQwiZC1wQY6pgH2r26crkL3iMetWhh48Ri9C2E3NS882vz7VMB%2FNFQ0CoYUhOrrjUj5JJ%2Bh0finAwKSiYYqaSVybo5Fe6NvCccUn8fqvc1RMovSQS%2BnujAEBh3rtgtlTR5HjR%2F7i7qBmQxrGgPv087vknvRyrtY%2FqeP1G6XqchN0H54zS%2B7j01PmjTvxw7g04nqxPoVvb99O0yvEjpmqzTSVttmkr4136jWRJnYOeZf&X-Amz-Signature=91d043d44a9001ec8c59e4ae6ae03b592b15fafc3e79efab46a4d0ca57197de7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDDSLW2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOjEySaVAtO%2BES3HEx6ORWdfweBFpyjlliOowVb6%2BBgAiAvTp77RliFs2xU2SWcM8QoVb0JAmZReyyl2e7tXp0PNyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0u%2FO6KMkqMdLjMSKtwD6nWsIIy7JiO0VXFkZ7xgjO%2F87uNOb3sLkUCJumtJ1NnJqkDRpw9S6dwHjSaSoqd%2BebtoCS0oecR17gorawZAcp58YwWN%2FqP8K4rFeAls0i9gI2uKLh7pV1w5bGY%2BXyzxet9wXoqPZKPAJQ4iedUV%2B%2Bj6e9E6%2Blpfr%2FFRIGfOz2O6YfeFQ7A29dOJyhmoaZghT6Gb1JcADFbnf3q1iTtPZUPk9%2BHF3b6MnmQg7L7o8WNQr%2FoD4vNe0mhaXO7R4kPn6PwipYd5MgTZBemcxw11030FA%2B0d2mfkQUszbAi3UnupuKjK27OFAegDprdsdLEs9PjUA2QxRitvV4mWzFZEkYBrm9EHA0iPb%2B2FQMh4AszMUimLi0sQvZkBhFuM3UNXn6iD7siYdN7I6E6n0UNbaI49wnJr3R8tVuFSndVmNoMk7GMrosvFK%2B7dicx47yOCFT207YAnfI2ZzUbqyxhWbbUGZ9eFgdgQ%2BSDgGMmYUtP3TNM7mJS%2Ft0ps%2FisEgcGuOS1EThlCyDRvDpifX4BODkgLAY9Ja1ieIUJ%2BC7zvUf3gebM9gcpQ27nXUWKz2YP%2FAWnF5RWhs7dHXpIBQWrQLC6VPF9hZssm1vTgbLJuKOagCRV%2FTOo57wPFQAQwiZC1wQY6pgH2r26crkL3iMetWhh48Ri9C2E3NS882vz7VMB%2FNFQ0CoYUhOrrjUj5JJ%2Bh0finAwKSiYYqaSVybo5Fe6NvCccUn8fqvc1RMovSQS%2BnujAEBh3rtgtlTR5HjR%2F7i7qBmQxrGgPv087vknvRyrtY%2FqeP1G6XqchN0H54zS%2B7j01PmjTvxw7g04nqxPoVvb99O0yvEjpmqzTSVttmkr4136jWRJnYOeZf&X-Amz-Signature=fdaae7587e21ce021c0b623feae4d3c6d6baa8a7c8167423b44197bae590fc57&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDDSLW2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOjEySaVAtO%2BES3HEx6ORWdfweBFpyjlliOowVb6%2BBgAiAvTp77RliFs2xU2SWcM8QoVb0JAmZReyyl2e7tXp0PNyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0u%2FO6KMkqMdLjMSKtwD6nWsIIy7JiO0VXFkZ7xgjO%2F87uNOb3sLkUCJumtJ1NnJqkDRpw9S6dwHjSaSoqd%2BebtoCS0oecR17gorawZAcp58YwWN%2FqP8K4rFeAls0i9gI2uKLh7pV1w5bGY%2BXyzxet9wXoqPZKPAJQ4iedUV%2B%2Bj6e9E6%2Blpfr%2FFRIGfOz2O6YfeFQ7A29dOJyhmoaZghT6Gb1JcADFbnf3q1iTtPZUPk9%2BHF3b6MnmQg7L7o8WNQr%2FoD4vNe0mhaXO7R4kPn6PwipYd5MgTZBemcxw11030FA%2B0d2mfkQUszbAi3UnupuKjK27OFAegDprdsdLEs9PjUA2QxRitvV4mWzFZEkYBrm9EHA0iPb%2B2FQMh4AszMUimLi0sQvZkBhFuM3UNXn6iD7siYdN7I6E6n0UNbaI49wnJr3R8tVuFSndVmNoMk7GMrosvFK%2B7dicx47yOCFT207YAnfI2ZzUbqyxhWbbUGZ9eFgdgQ%2BSDgGMmYUtP3TNM7mJS%2Ft0ps%2FisEgcGuOS1EThlCyDRvDpifX4BODkgLAY9Ja1ieIUJ%2BC7zvUf3gebM9gcpQ27nXUWKz2YP%2FAWnF5RWhs7dHXpIBQWrQLC6VPF9hZssm1vTgbLJuKOagCRV%2FTOo57wPFQAQwiZC1wQY6pgH2r26crkL3iMetWhh48Ri9C2E3NS882vz7VMB%2FNFQ0CoYUhOrrjUj5JJ%2Bh0finAwKSiYYqaSVybo5Fe6NvCccUn8fqvc1RMovSQS%2BnujAEBh3rtgtlTR5HjR%2F7i7qBmQxrGgPv087vknvRyrtY%2FqeP1G6XqchN0H54zS%2B7j01PmjTvxw7g04nqxPoVvb99O0yvEjpmqzTSVttmkr4136jWRJnYOeZf&X-Amz-Signature=0f1146a84f330febef3313c622e474286d85d6ff82601e6c1e02449c5acc9a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDDSLW2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOjEySaVAtO%2BES3HEx6ORWdfweBFpyjlliOowVb6%2BBgAiAvTp77RliFs2xU2SWcM8QoVb0JAmZReyyl2e7tXp0PNyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0u%2FO6KMkqMdLjMSKtwD6nWsIIy7JiO0VXFkZ7xgjO%2F87uNOb3sLkUCJumtJ1NnJqkDRpw9S6dwHjSaSoqd%2BebtoCS0oecR17gorawZAcp58YwWN%2FqP8K4rFeAls0i9gI2uKLh7pV1w5bGY%2BXyzxet9wXoqPZKPAJQ4iedUV%2B%2Bj6e9E6%2Blpfr%2FFRIGfOz2O6YfeFQ7A29dOJyhmoaZghT6Gb1JcADFbnf3q1iTtPZUPk9%2BHF3b6MnmQg7L7o8WNQr%2FoD4vNe0mhaXO7R4kPn6PwipYd5MgTZBemcxw11030FA%2B0d2mfkQUszbAi3UnupuKjK27OFAegDprdsdLEs9PjUA2QxRitvV4mWzFZEkYBrm9EHA0iPb%2B2FQMh4AszMUimLi0sQvZkBhFuM3UNXn6iD7siYdN7I6E6n0UNbaI49wnJr3R8tVuFSndVmNoMk7GMrosvFK%2B7dicx47yOCFT207YAnfI2ZzUbqyxhWbbUGZ9eFgdgQ%2BSDgGMmYUtP3TNM7mJS%2Ft0ps%2FisEgcGuOS1EThlCyDRvDpifX4BODkgLAY9Ja1ieIUJ%2BC7zvUf3gebM9gcpQ27nXUWKz2YP%2FAWnF5RWhs7dHXpIBQWrQLC6VPF9hZssm1vTgbLJuKOagCRV%2FTOo57wPFQAQwiZC1wQY6pgH2r26crkL3iMetWhh48Ri9C2E3NS882vz7VMB%2FNFQ0CoYUhOrrjUj5JJ%2Bh0finAwKSiYYqaSVybo5Fe6NvCccUn8fqvc1RMovSQS%2BnujAEBh3rtgtlTR5HjR%2F7i7qBmQxrGgPv087vknvRyrtY%2FqeP1G6XqchN0H54zS%2B7j01PmjTvxw7g04nqxPoVvb99O0yvEjpmqzTSVttmkr4136jWRJnYOeZf&X-Amz-Signature=62707981457970f17148ec2a87c76bfc645567be98c68f183b1b4fbca9951e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDDSLW2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOjEySaVAtO%2BES3HEx6ORWdfweBFpyjlliOowVb6%2BBgAiAvTp77RliFs2xU2SWcM8QoVb0JAmZReyyl2e7tXp0PNyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0u%2FO6KMkqMdLjMSKtwD6nWsIIy7JiO0VXFkZ7xgjO%2F87uNOb3sLkUCJumtJ1NnJqkDRpw9S6dwHjSaSoqd%2BebtoCS0oecR17gorawZAcp58YwWN%2FqP8K4rFeAls0i9gI2uKLh7pV1w5bGY%2BXyzxet9wXoqPZKPAJQ4iedUV%2B%2Bj6e9E6%2Blpfr%2FFRIGfOz2O6YfeFQ7A29dOJyhmoaZghT6Gb1JcADFbnf3q1iTtPZUPk9%2BHF3b6MnmQg7L7o8WNQr%2FoD4vNe0mhaXO7R4kPn6PwipYd5MgTZBemcxw11030FA%2B0d2mfkQUszbAi3UnupuKjK27OFAegDprdsdLEs9PjUA2QxRitvV4mWzFZEkYBrm9EHA0iPb%2B2FQMh4AszMUimLi0sQvZkBhFuM3UNXn6iD7siYdN7I6E6n0UNbaI49wnJr3R8tVuFSndVmNoMk7GMrosvFK%2B7dicx47yOCFT207YAnfI2ZzUbqyxhWbbUGZ9eFgdgQ%2BSDgGMmYUtP3TNM7mJS%2Ft0ps%2FisEgcGuOS1EThlCyDRvDpifX4BODkgLAY9Ja1ieIUJ%2BC7zvUf3gebM9gcpQ27nXUWKz2YP%2FAWnF5RWhs7dHXpIBQWrQLC6VPF9hZssm1vTgbLJuKOagCRV%2FTOo57wPFQAQwiZC1wQY6pgH2r26crkL3iMetWhh48Ri9C2E3NS882vz7VMB%2FNFQ0CoYUhOrrjUj5JJ%2Bh0finAwKSiYYqaSVybo5Fe6NvCccUn8fqvc1RMovSQS%2BnujAEBh3rtgtlTR5HjR%2F7i7qBmQxrGgPv087vknvRyrtY%2FqeP1G6XqchN0H54zS%2B7j01PmjTvxw7g04nqxPoVvb99O0yvEjpmqzTSVttmkr4136jWRJnYOeZf&X-Amz-Signature=ae45cd318a31bbcaba087d28648c2794f62524c36c7d47d4b267da2f3656f0da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDDSLW2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOjEySaVAtO%2BES3HEx6ORWdfweBFpyjlliOowVb6%2BBgAiAvTp77RliFs2xU2SWcM8QoVb0JAmZReyyl2e7tXp0PNyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0u%2FO6KMkqMdLjMSKtwD6nWsIIy7JiO0VXFkZ7xgjO%2F87uNOb3sLkUCJumtJ1NnJqkDRpw9S6dwHjSaSoqd%2BebtoCS0oecR17gorawZAcp58YwWN%2FqP8K4rFeAls0i9gI2uKLh7pV1w5bGY%2BXyzxet9wXoqPZKPAJQ4iedUV%2B%2Bj6e9E6%2Blpfr%2FFRIGfOz2O6YfeFQ7A29dOJyhmoaZghT6Gb1JcADFbnf3q1iTtPZUPk9%2BHF3b6MnmQg7L7o8WNQr%2FoD4vNe0mhaXO7R4kPn6PwipYd5MgTZBemcxw11030FA%2B0d2mfkQUszbAi3UnupuKjK27OFAegDprdsdLEs9PjUA2QxRitvV4mWzFZEkYBrm9EHA0iPb%2B2FQMh4AszMUimLi0sQvZkBhFuM3UNXn6iD7siYdN7I6E6n0UNbaI49wnJr3R8tVuFSndVmNoMk7GMrosvFK%2B7dicx47yOCFT207YAnfI2ZzUbqyxhWbbUGZ9eFgdgQ%2BSDgGMmYUtP3TNM7mJS%2Ft0ps%2FisEgcGuOS1EThlCyDRvDpifX4BODkgLAY9Ja1ieIUJ%2BC7zvUf3gebM9gcpQ27nXUWKz2YP%2FAWnF5RWhs7dHXpIBQWrQLC6VPF9hZssm1vTgbLJuKOagCRV%2FTOo57wPFQAQwiZC1wQY6pgH2r26crkL3iMetWhh48Ri9C2E3NS882vz7VMB%2FNFQ0CoYUhOrrjUj5JJ%2Bh0finAwKSiYYqaSVybo5Fe6NvCccUn8fqvc1RMovSQS%2BnujAEBh3rtgtlTR5HjR%2F7i7qBmQxrGgPv087vknvRyrtY%2FqeP1G6XqchN0H54zS%2B7j01PmjTvxw7g04nqxPoVvb99O0yvEjpmqzTSVttmkr4136jWRJnYOeZf&X-Amz-Signature=64d8d41fe88f0f389293a44b1f49bfce9f7fcd5ce26893c7e6c04f94f89aa6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDDSLW2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOjEySaVAtO%2BES3HEx6ORWdfweBFpyjlliOowVb6%2BBgAiAvTp77RliFs2xU2SWcM8QoVb0JAmZReyyl2e7tXp0PNyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0u%2FO6KMkqMdLjMSKtwD6nWsIIy7JiO0VXFkZ7xgjO%2F87uNOb3sLkUCJumtJ1NnJqkDRpw9S6dwHjSaSoqd%2BebtoCS0oecR17gorawZAcp58YwWN%2FqP8K4rFeAls0i9gI2uKLh7pV1w5bGY%2BXyzxet9wXoqPZKPAJQ4iedUV%2B%2Bj6e9E6%2Blpfr%2FFRIGfOz2O6YfeFQ7A29dOJyhmoaZghT6Gb1JcADFbnf3q1iTtPZUPk9%2BHF3b6MnmQg7L7o8WNQr%2FoD4vNe0mhaXO7R4kPn6PwipYd5MgTZBemcxw11030FA%2B0d2mfkQUszbAi3UnupuKjK27OFAegDprdsdLEs9PjUA2QxRitvV4mWzFZEkYBrm9EHA0iPb%2B2FQMh4AszMUimLi0sQvZkBhFuM3UNXn6iD7siYdN7I6E6n0UNbaI49wnJr3R8tVuFSndVmNoMk7GMrosvFK%2B7dicx47yOCFT207YAnfI2ZzUbqyxhWbbUGZ9eFgdgQ%2BSDgGMmYUtP3TNM7mJS%2Ft0ps%2FisEgcGuOS1EThlCyDRvDpifX4BODkgLAY9Ja1ieIUJ%2BC7zvUf3gebM9gcpQ27nXUWKz2YP%2FAWnF5RWhs7dHXpIBQWrQLC6VPF9hZssm1vTgbLJuKOagCRV%2FTOo57wPFQAQwiZC1wQY6pgH2r26crkL3iMetWhh48Ri9C2E3NS882vz7VMB%2FNFQ0CoYUhOrrjUj5JJ%2Bh0finAwKSiYYqaSVybo5Fe6NvCccUn8fqvc1RMovSQS%2BnujAEBh3rtgtlTR5HjR%2F7i7qBmQxrGgPv087vknvRyrtY%2FqeP1G6XqchN0H54zS%2B7j01PmjTvxw7g04nqxPoVvb99O0yvEjpmqzTSVttmkr4136jWRJnYOeZf&X-Amz-Signature=9e5f4810614a19990f060c12237efd672581e99e1d6c584a6fcd27f77e9e9897&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDDSLW2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOjEySaVAtO%2BES3HEx6ORWdfweBFpyjlliOowVb6%2BBgAiAvTp77RliFs2xU2SWcM8QoVb0JAmZReyyl2e7tXp0PNyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0u%2FO6KMkqMdLjMSKtwD6nWsIIy7JiO0VXFkZ7xgjO%2F87uNOb3sLkUCJumtJ1NnJqkDRpw9S6dwHjSaSoqd%2BebtoCS0oecR17gorawZAcp58YwWN%2FqP8K4rFeAls0i9gI2uKLh7pV1w5bGY%2BXyzxet9wXoqPZKPAJQ4iedUV%2B%2Bj6e9E6%2Blpfr%2FFRIGfOz2O6YfeFQ7A29dOJyhmoaZghT6Gb1JcADFbnf3q1iTtPZUPk9%2BHF3b6MnmQg7L7o8WNQr%2FoD4vNe0mhaXO7R4kPn6PwipYd5MgTZBemcxw11030FA%2B0d2mfkQUszbAi3UnupuKjK27OFAegDprdsdLEs9PjUA2QxRitvV4mWzFZEkYBrm9EHA0iPb%2B2FQMh4AszMUimLi0sQvZkBhFuM3UNXn6iD7siYdN7I6E6n0UNbaI49wnJr3R8tVuFSndVmNoMk7GMrosvFK%2B7dicx47yOCFT207YAnfI2ZzUbqyxhWbbUGZ9eFgdgQ%2BSDgGMmYUtP3TNM7mJS%2Ft0ps%2FisEgcGuOS1EThlCyDRvDpifX4BODkgLAY9Ja1ieIUJ%2BC7zvUf3gebM9gcpQ27nXUWKz2YP%2FAWnF5RWhs7dHXpIBQWrQLC6VPF9hZssm1vTgbLJuKOagCRV%2FTOo57wPFQAQwiZC1wQY6pgH2r26crkL3iMetWhh48Ri9C2E3NS882vz7VMB%2FNFQ0CoYUhOrrjUj5JJ%2Bh0finAwKSiYYqaSVybo5Fe6NvCccUn8fqvc1RMovSQS%2BnujAEBh3rtgtlTR5HjR%2F7i7qBmQxrGgPv087vknvRyrtY%2FqeP1G6XqchN0H54zS%2B7j01PmjTvxw7g04nqxPoVvb99O0yvEjpmqzTSVttmkr4136jWRJnYOeZf&X-Amz-Signature=7327d8e24d179576efe14a6e9ea0d9d555fdbadd234f194dd1d61f6c99c70c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
