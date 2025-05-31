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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXS3EV4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8AUz8mV9uYKI1FP8T%2F%2BaTeh4jBzExbj4DYZFR9j1%2FgIgcJWZpZUASmlHuolqZRw6NC0%2FddmdSfBN3V3a%2BrvJLdkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUm3Xyy%2Fa%2BNLWKOGyrcAzVtAlFROcCej6d9KG1an%2FZxF7%2Fy7DVr6DI0iXRNaV7h4nJdXlHNXDGLsDUl8m4qPmCxpkKXR4S0cmphAiFhPdrAvc1NY8gCWzDd3if3u7I13pTo5R%2FSnc%2FyclVoz7FP%2BJVkj3fV2jZRq4PQrlTIrTxZzjQMdLqPLph6WwaOpR4%2BukAVv3WeUluETfodHQaF5GaSTbRZrQ1aiQCZXNbHplYxEDt7Rp%2Flf9kukemvlPmEnEwok%2BvU%2F3v8xlIDNhI%2FUb11Z88hQ9vmOizz4GhqpUyZ04zfG9JhuiibDac1adJ0mb6dY%2BZjXU8oo66zjz6FQ9UISldVq2L4RTmItU6ZnHT72LjVp%2FM1HtRCS7Ii5gIYQDa8ezu1kFwlrh%2FRRF3rnpB275syaar1LpUQYtAMDuJVkHRSXmGe1PegjV1yQqeneVg1%2B5YMCLuLcn8J9nJSv%2F%2F29bYKEyvdHQ8JfKvxf6Y4GDg%2BcN8YcyidNw03IE6o4Snh0yDOUx5cR7sorSFhshLymZGyh8V7HVLsHE6XceDwESybJWe0oNnakUp2x6SbSauRz%2BzkYzxMXLpRdFsnLZEeebqnHejf6Qb%2Be%2FKgLuYpnki9y3n%2FW5pDkW0Asezx2BJu4SaIN6aTAM0yMKip7MEGOqUBSH6fvBgnvZM4QA758P7hKgStynjy0tyO0JPB0LEWXYhi85Zo4paXEDDNR2k63esrXx1Hd3m%2FfE6ITYLaCplo2zHjan9th9oyKGCRdBc%2BU0yS5TqisGTKiNusZxeSCwMUq%2B%2FfT%2BdAYMUAngm8tiIH56gqxiNJ14Bb5fGwTSaHL%2F%2Fr1w3RyX0w5n343b9OBLjOyZKjZnB93SB%2FHmHO1cKaPwTipFie&X-Amz-Signature=6f1c4d6d2025edb09c81a516d354d088cd3493641cccd3a9205c436876c3ee71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXS3EV4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8AUz8mV9uYKI1FP8T%2F%2BaTeh4jBzExbj4DYZFR9j1%2FgIgcJWZpZUASmlHuolqZRw6NC0%2FddmdSfBN3V3a%2BrvJLdkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUm3Xyy%2Fa%2BNLWKOGyrcAzVtAlFROcCej6d9KG1an%2FZxF7%2Fy7DVr6DI0iXRNaV7h4nJdXlHNXDGLsDUl8m4qPmCxpkKXR4S0cmphAiFhPdrAvc1NY8gCWzDd3if3u7I13pTo5R%2FSnc%2FyclVoz7FP%2BJVkj3fV2jZRq4PQrlTIrTxZzjQMdLqPLph6WwaOpR4%2BukAVv3WeUluETfodHQaF5GaSTbRZrQ1aiQCZXNbHplYxEDt7Rp%2Flf9kukemvlPmEnEwok%2BvU%2F3v8xlIDNhI%2FUb11Z88hQ9vmOizz4GhqpUyZ04zfG9JhuiibDac1adJ0mb6dY%2BZjXU8oo66zjz6FQ9UISldVq2L4RTmItU6ZnHT72LjVp%2FM1HtRCS7Ii5gIYQDa8ezu1kFwlrh%2FRRF3rnpB275syaar1LpUQYtAMDuJVkHRSXmGe1PegjV1yQqeneVg1%2B5YMCLuLcn8J9nJSv%2F%2F29bYKEyvdHQ8JfKvxf6Y4GDg%2BcN8YcyidNw03IE6o4Snh0yDOUx5cR7sorSFhshLymZGyh8V7HVLsHE6XceDwESybJWe0oNnakUp2x6SbSauRz%2BzkYzxMXLpRdFsnLZEeebqnHejf6Qb%2Be%2FKgLuYpnki9y3n%2FW5pDkW0Asezx2BJu4SaIN6aTAM0yMKip7MEGOqUBSH6fvBgnvZM4QA758P7hKgStynjy0tyO0JPB0LEWXYhi85Zo4paXEDDNR2k63esrXx1Hd3m%2FfE6ITYLaCplo2zHjan9th9oyKGCRdBc%2BU0yS5TqisGTKiNusZxeSCwMUq%2B%2FfT%2BdAYMUAngm8tiIH56gqxiNJ14Bb5fGwTSaHL%2F%2Fr1w3RyX0w5n343b9OBLjOyZKjZnB93SB%2FHmHO1cKaPwTipFie&X-Amz-Signature=d6254d3feb86da790c92995d98f7f03505807dcec5703e6c9336fabe49a7fd43&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXS3EV4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8AUz8mV9uYKI1FP8T%2F%2BaTeh4jBzExbj4DYZFR9j1%2FgIgcJWZpZUASmlHuolqZRw6NC0%2FddmdSfBN3V3a%2BrvJLdkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUm3Xyy%2Fa%2BNLWKOGyrcAzVtAlFROcCej6d9KG1an%2FZxF7%2Fy7DVr6DI0iXRNaV7h4nJdXlHNXDGLsDUl8m4qPmCxpkKXR4S0cmphAiFhPdrAvc1NY8gCWzDd3if3u7I13pTo5R%2FSnc%2FyclVoz7FP%2BJVkj3fV2jZRq4PQrlTIrTxZzjQMdLqPLph6WwaOpR4%2BukAVv3WeUluETfodHQaF5GaSTbRZrQ1aiQCZXNbHplYxEDt7Rp%2Flf9kukemvlPmEnEwok%2BvU%2F3v8xlIDNhI%2FUb11Z88hQ9vmOizz4GhqpUyZ04zfG9JhuiibDac1adJ0mb6dY%2BZjXU8oo66zjz6FQ9UISldVq2L4RTmItU6ZnHT72LjVp%2FM1HtRCS7Ii5gIYQDa8ezu1kFwlrh%2FRRF3rnpB275syaar1LpUQYtAMDuJVkHRSXmGe1PegjV1yQqeneVg1%2B5YMCLuLcn8J9nJSv%2F%2F29bYKEyvdHQ8JfKvxf6Y4GDg%2BcN8YcyidNw03IE6o4Snh0yDOUx5cR7sorSFhshLymZGyh8V7HVLsHE6XceDwESybJWe0oNnakUp2x6SbSauRz%2BzkYzxMXLpRdFsnLZEeebqnHejf6Qb%2Be%2FKgLuYpnki9y3n%2FW5pDkW0Asezx2BJu4SaIN6aTAM0yMKip7MEGOqUBSH6fvBgnvZM4QA758P7hKgStynjy0tyO0JPB0LEWXYhi85Zo4paXEDDNR2k63esrXx1Hd3m%2FfE6ITYLaCplo2zHjan9th9oyKGCRdBc%2BU0yS5TqisGTKiNusZxeSCwMUq%2B%2FfT%2BdAYMUAngm8tiIH56gqxiNJ14Bb5fGwTSaHL%2F%2Fr1w3RyX0w5n343b9OBLjOyZKjZnB93SB%2FHmHO1cKaPwTipFie&X-Amz-Signature=319b42a8b9f9613556725b02eeccda064f76464b7b54149f7f185373c6d6c9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXS3EV4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8AUz8mV9uYKI1FP8T%2F%2BaTeh4jBzExbj4DYZFR9j1%2FgIgcJWZpZUASmlHuolqZRw6NC0%2FddmdSfBN3V3a%2BrvJLdkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUm3Xyy%2Fa%2BNLWKOGyrcAzVtAlFROcCej6d9KG1an%2FZxF7%2Fy7DVr6DI0iXRNaV7h4nJdXlHNXDGLsDUl8m4qPmCxpkKXR4S0cmphAiFhPdrAvc1NY8gCWzDd3if3u7I13pTo5R%2FSnc%2FyclVoz7FP%2BJVkj3fV2jZRq4PQrlTIrTxZzjQMdLqPLph6WwaOpR4%2BukAVv3WeUluETfodHQaF5GaSTbRZrQ1aiQCZXNbHplYxEDt7Rp%2Flf9kukemvlPmEnEwok%2BvU%2F3v8xlIDNhI%2FUb11Z88hQ9vmOizz4GhqpUyZ04zfG9JhuiibDac1adJ0mb6dY%2BZjXU8oo66zjz6FQ9UISldVq2L4RTmItU6ZnHT72LjVp%2FM1HtRCS7Ii5gIYQDa8ezu1kFwlrh%2FRRF3rnpB275syaar1LpUQYtAMDuJVkHRSXmGe1PegjV1yQqeneVg1%2B5YMCLuLcn8J9nJSv%2F%2F29bYKEyvdHQ8JfKvxf6Y4GDg%2BcN8YcyidNw03IE6o4Snh0yDOUx5cR7sorSFhshLymZGyh8V7HVLsHE6XceDwESybJWe0oNnakUp2x6SbSauRz%2BzkYzxMXLpRdFsnLZEeebqnHejf6Qb%2Be%2FKgLuYpnki9y3n%2FW5pDkW0Asezx2BJu4SaIN6aTAM0yMKip7MEGOqUBSH6fvBgnvZM4QA758P7hKgStynjy0tyO0JPB0LEWXYhi85Zo4paXEDDNR2k63esrXx1Hd3m%2FfE6ITYLaCplo2zHjan9th9oyKGCRdBc%2BU0yS5TqisGTKiNusZxeSCwMUq%2B%2FfT%2BdAYMUAngm8tiIH56gqxiNJ14Bb5fGwTSaHL%2F%2Fr1w3RyX0w5n343b9OBLjOyZKjZnB93SB%2FHmHO1cKaPwTipFie&X-Amz-Signature=c3090b3e3b6465917571d1788b3ef5bbcf62d4623c7c0728750a7f221a39ba73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXS3EV4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8AUz8mV9uYKI1FP8T%2F%2BaTeh4jBzExbj4DYZFR9j1%2FgIgcJWZpZUASmlHuolqZRw6NC0%2FddmdSfBN3V3a%2BrvJLdkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUm3Xyy%2Fa%2BNLWKOGyrcAzVtAlFROcCej6d9KG1an%2FZxF7%2Fy7DVr6DI0iXRNaV7h4nJdXlHNXDGLsDUl8m4qPmCxpkKXR4S0cmphAiFhPdrAvc1NY8gCWzDd3if3u7I13pTo5R%2FSnc%2FyclVoz7FP%2BJVkj3fV2jZRq4PQrlTIrTxZzjQMdLqPLph6WwaOpR4%2BukAVv3WeUluETfodHQaF5GaSTbRZrQ1aiQCZXNbHplYxEDt7Rp%2Flf9kukemvlPmEnEwok%2BvU%2F3v8xlIDNhI%2FUb11Z88hQ9vmOizz4GhqpUyZ04zfG9JhuiibDac1adJ0mb6dY%2BZjXU8oo66zjz6FQ9UISldVq2L4RTmItU6ZnHT72LjVp%2FM1HtRCS7Ii5gIYQDa8ezu1kFwlrh%2FRRF3rnpB275syaar1LpUQYtAMDuJVkHRSXmGe1PegjV1yQqeneVg1%2B5YMCLuLcn8J9nJSv%2F%2F29bYKEyvdHQ8JfKvxf6Y4GDg%2BcN8YcyidNw03IE6o4Snh0yDOUx5cR7sorSFhshLymZGyh8V7HVLsHE6XceDwESybJWe0oNnakUp2x6SbSauRz%2BzkYzxMXLpRdFsnLZEeebqnHejf6Qb%2Be%2FKgLuYpnki9y3n%2FW5pDkW0Asezx2BJu4SaIN6aTAM0yMKip7MEGOqUBSH6fvBgnvZM4QA758P7hKgStynjy0tyO0JPB0LEWXYhi85Zo4paXEDDNR2k63esrXx1Hd3m%2FfE6ITYLaCplo2zHjan9th9oyKGCRdBc%2BU0yS5TqisGTKiNusZxeSCwMUq%2B%2FfT%2BdAYMUAngm8tiIH56gqxiNJ14Bb5fGwTSaHL%2F%2Fr1w3RyX0w5n343b9OBLjOyZKjZnB93SB%2FHmHO1cKaPwTipFie&X-Amz-Signature=bffc313e47cd00297e27579adb003df4f96e09b0bd46732b38d4f3608a54ea2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXS3EV4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8AUz8mV9uYKI1FP8T%2F%2BaTeh4jBzExbj4DYZFR9j1%2FgIgcJWZpZUASmlHuolqZRw6NC0%2FddmdSfBN3V3a%2BrvJLdkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUm3Xyy%2Fa%2BNLWKOGyrcAzVtAlFROcCej6d9KG1an%2FZxF7%2Fy7DVr6DI0iXRNaV7h4nJdXlHNXDGLsDUl8m4qPmCxpkKXR4S0cmphAiFhPdrAvc1NY8gCWzDd3if3u7I13pTo5R%2FSnc%2FyclVoz7FP%2BJVkj3fV2jZRq4PQrlTIrTxZzjQMdLqPLph6WwaOpR4%2BukAVv3WeUluETfodHQaF5GaSTbRZrQ1aiQCZXNbHplYxEDt7Rp%2Flf9kukemvlPmEnEwok%2BvU%2F3v8xlIDNhI%2FUb11Z88hQ9vmOizz4GhqpUyZ04zfG9JhuiibDac1adJ0mb6dY%2BZjXU8oo66zjz6FQ9UISldVq2L4RTmItU6ZnHT72LjVp%2FM1HtRCS7Ii5gIYQDa8ezu1kFwlrh%2FRRF3rnpB275syaar1LpUQYtAMDuJVkHRSXmGe1PegjV1yQqeneVg1%2B5YMCLuLcn8J9nJSv%2F%2F29bYKEyvdHQ8JfKvxf6Y4GDg%2BcN8YcyidNw03IE6o4Snh0yDOUx5cR7sorSFhshLymZGyh8V7HVLsHE6XceDwESybJWe0oNnakUp2x6SbSauRz%2BzkYzxMXLpRdFsnLZEeebqnHejf6Qb%2Be%2FKgLuYpnki9y3n%2FW5pDkW0Asezx2BJu4SaIN6aTAM0yMKip7MEGOqUBSH6fvBgnvZM4QA758P7hKgStynjy0tyO0JPB0LEWXYhi85Zo4paXEDDNR2k63esrXx1Hd3m%2FfE6ITYLaCplo2zHjan9th9oyKGCRdBc%2BU0yS5TqisGTKiNusZxeSCwMUq%2B%2FfT%2BdAYMUAngm8tiIH56gqxiNJ14Bb5fGwTSaHL%2F%2Fr1w3RyX0w5n343b9OBLjOyZKjZnB93SB%2FHmHO1cKaPwTipFie&X-Amz-Signature=2653e1af16e8dc5fefd2b03307cd9a9062fc68042f32e4337a251e16281d8a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXS3EV4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8AUz8mV9uYKI1FP8T%2F%2BaTeh4jBzExbj4DYZFR9j1%2FgIgcJWZpZUASmlHuolqZRw6NC0%2FddmdSfBN3V3a%2BrvJLdkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUm3Xyy%2Fa%2BNLWKOGyrcAzVtAlFROcCej6d9KG1an%2FZxF7%2Fy7DVr6DI0iXRNaV7h4nJdXlHNXDGLsDUl8m4qPmCxpkKXR4S0cmphAiFhPdrAvc1NY8gCWzDd3if3u7I13pTo5R%2FSnc%2FyclVoz7FP%2BJVkj3fV2jZRq4PQrlTIrTxZzjQMdLqPLph6WwaOpR4%2BukAVv3WeUluETfodHQaF5GaSTbRZrQ1aiQCZXNbHplYxEDt7Rp%2Flf9kukemvlPmEnEwok%2BvU%2F3v8xlIDNhI%2FUb11Z88hQ9vmOizz4GhqpUyZ04zfG9JhuiibDac1adJ0mb6dY%2BZjXU8oo66zjz6FQ9UISldVq2L4RTmItU6ZnHT72LjVp%2FM1HtRCS7Ii5gIYQDa8ezu1kFwlrh%2FRRF3rnpB275syaar1LpUQYtAMDuJVkHRSXmGe1PegjV1yQqeneVg1%2B5YMCLuLcn8J9nJSv%2F%2F29bYKEyvdHQ8JfKvxf6Y4GDg%2BcN8YcyidNw03IE6o4Snh0yDOUx5cR7sorSFhshLymZGyh8V7HVLsHE6XceDwESybJWe0oNnakUp2x6SbSauRz%2BzkYzxMXLpRdFsnLZEeebqnHejf6Qb%2Be%2FKgLuYpnki9y3n%2FW5pDkW0Asezx2BJu4SaIN6aTAM0yMKip7MEGOqUBSH6fvBgnvZM4QA758P7hKgStynjy0tyO0JPB0LEWXYhi85Zo4paXEDDNR2k63esrXx1Hd3m%2FfE6ITYLaCplo2zHjan9th9oyKGCRdBc%2BU0yS5TqisGTKiNusZxeSCwMUq%2B%2FfT%2BdAYMUAngm8tiIH56gqxiNJ14Bb5fGwTSaHL%2F%2Fr1w3RyX0w5n343b9OBLjOyZKjZnB93SB%2FHmHO1cKaPwTipFie&X-Amz-Signature=b9211c8bb356a8767cec173ec1efd6ec102deade34c674921381043af0695d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXS3EV4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP8AUz8mV9uYKI1FP8T%2F%2BaTeh4jBzExbj4DYZFR9j1%2FgIgcJWZpZUASmlHuolqZRw6NC0%2FddmdSfBN3V3a%2BrvJLdkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUm3Xyy%2Fa%2BNLWKOGyrcAzVtAlFROcCej6d9KG1an%2FZxF7%2Fy7DVr6DI0iXRNaV7h4nJdXlHNXDGLsDUl8m4qPmCxpkKXR4S0cmphAiFhPdrAvc1NY8gCWzDd3if3u7I13pTo5R%2FSnc%2FyclVoz7FP%2BJVkj3fV2jZRq4PQrlTIrTxZzjQMdLqPLph6WwaOpR4%2BukAVv3WeUluETfodHQaF5GaSTbRZrQ1aiQCZXNbHplYxEDt7Rp%2Flf9kukemvlPmEnEwok%2BvU%2F3v8xlIDNhI%2FUb11Z88hQ9vmOizz4GhqpUyZ04zfG9JhuiibDac1adJ0mb6dY%2BZjXU8oo66zjz6FQ9UISldVq2L4RTmItU6ZnHT72LjVp%2FM1HtRCS7Ii5gIYQDa8ezu1kFwlrh%2FRRF3rnpB275syaar1LpUQYtAMDuJVkHRSXmGe1PegjV1yQqeneVg1%2B5YMCLuLcn8J9nJSv%2F%2F29bYKEyvdHQ8JfKvxf6Y4GDg%2BcN8YcyidNw03IE6o4Snh0yDOUx5cR7sorSFhshLymZGyh8V7HVLsHE6XceDwESybJWe0oNnakUp2x6SbSauRz%2BzkYzxMXLpRdFsnLZEeebqnHejf6Qb%2Be%2FKgLuYpnki9y3n%2FW5pDkW0Asezx2BJu4SaIN6aTAM0yMKip7MEGOqUBSH6fvBgnvZM4QA758P7hKgStynjy0tyO0JPB0LEWXYhi85Zo4paXEDDNR2k63esrXx1Hd3m%2FfE6ITYLaCplo2zHjan9th9oyKGCRdBc%2BU0yS5TqisGTKiNusZxeSCwMUq%2B%2FfT%2BdAYMUAngm8tiIH56gqxiNJ14Bb5fGwTSaHL%2F%2Fr1w3RyX0w5n343b9OBLjOyZKjZnB93SB%2FHmHO1cKaPwTipFie&X-Amz-Signature=3165ed2055ab45f92b2b7d482b821c4c784fc5195336f6ab1c4b34c77fae9f89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
