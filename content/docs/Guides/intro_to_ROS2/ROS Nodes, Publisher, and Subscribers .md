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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5TJKXZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpjX2axZOd0q%2B9x%2BF9LU8FSIn3B%2FoX%2BjjaoSj4lfOSgIhAIQN98afOn1Svg%2FKuLzbmu3y3PPWrD%2BUL5KZuNa3VmDOKv8DCFYQABoMNjM3NDIzMTgzODA1Igw8tPwO2T%2B2ff%2B2DoEq3AM8PThiGeryFSgBgctp9%2FdDHFhRsWmsPcWbpxc3%2F89kTZyKvFLXRaiwfn1SUa8Txv9amhf9m6OJG2v0xXAh7YnIcWBIAR7UO9S5ISjBOz3uQ9ufQFOAoaPEBMLP4l1zwjh%2BBIqAhfrFtvCFFN1k8ZkhzjPCNU9r1mSyZHurSA7YcWU%2Fqtyru30I2YaaNqVojmkCACDlztK2LDBPbEkJETU%2B4BFoZsGkK8AV7j278Mysc%2Fe0u0jVVxGjqKW8IBa0o2pJRdDfuHqAyw7A8iXTGKZhdG8kfJZNhviSdyLBSTL0rtO8oh1K7euiQVJ%2FqZcgGaYitQeK1b8ddV8NadUDLQBBieiHTt3iEHjfL%2FgOaFSzy7VKulIKoD3BYwnQmu35Yu95HeS6ZIqlteegMhYPsSG0w0j90QFNyx%2F7fVKE69jY663rFgBAMHxRgY%2FOcULKUfSe0q91q6Oht4uPaa42kaphuUhhg9reG8Y8V4AL01eNsg5OcfUoOS%2BYRanU4%2BzY8YDy8W9GhtMQayBoP%2FcwY%2BtILMsLbtt522VeazyScR4Y6AowyAk5nxcW1kKLmQSP%2BdEsMnETMc25AKOTJwjXMhlaH%2BCorMTw2buiftbhEhXrBws60Pucy7vb5s%2BCszCJq6DBBjqkAaP%2B%2F7IVt6HhPJ49FUQW6pVfeffdLuJZ9MiQE7QPXkw5qRJ4oy6MhH5q2so28SuNdFFOyEYfrj3PUS6tIjdIOf9HOwUxZOKSCbX2%2FxbmRK07p8MQkSOSiLRpXjeKjN4BW9DcBWqBI0MKvG8cpvrRHPiKIpNWhW6DBJSAWh5Wrp96wxRtqOitaRHO1A2Ut%2Bvdy9S1FPYxNTgiPdaEsXW3wHnh8QE6&X-Amz-Signature=63cd0de3b7d4f1942f3336a7b8627b07d546669ef90389ba11bb0f6dcbebac1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5TJKXZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpjX2axZOd0q%2B9x%2BF9LU8FSIn3B%2FoX%2BjjaoSj4lfOSgIhAIQN98afOn1Svg%2FKuLzbmu3y3PPWrD%2BUL5KZuNa3VmDOKv8DCFYQABoMNjM3NDIzMTgzODA1Igw8tPwO2T%2B2ff%2B2DoEq3AM8PThiGeryFSgBgctp9%2FdDHFhRsWmsPcWbpxc3%2F89kTZyKvFLXRaiwfn1SUa8Txv9amhf9m6OJG2v0xXAh7YnIcWBIAR7UO9S5ISjBOz3uQ9ufQFOAoaPEBMLP4l1zwjh%2BBIqAhfrFtvCFFN1k8ZkhzjPCNU9r1mSyZHurSA7YcWU%2Fqtyru30I2YaaNqVojmkCACDlztK2LDBPbEkJETU%2B4BFoZsGkK8AV7j278Mysc%2Fe0u0jVVxGjqKW8IBa0o2pJRdDfuHqAyw7A8iXTGKZhdG8kfJZNhviSdyLBSTL0rtO8oh1K7euiQVJ%2FqZcgGaYitQeK1b8ddV8NadUDLQBBieiHTt3iEHjfL%2FgOaFSzy7VKulIKoD3BYwnQmu35Yu95HeS6ZIqlteegMhYPsSG0w0j90QFNyx%2F7fVKE69jY663rFgBAMHxRgY%2FOcULKUfSe0q91q6Oht4uPaa42kaphuUhhg9reG8Y8V4AL01eNsg5OcfUoOS%2BYRanU4%2BzY8YDy8W9GhtMQayBoP%2FcwY%2BtILMsLbtt522VeazyScR4Y6AowyAk5nxcW1kKLmQSP%2BdEsMnETMc25AKOTJwjXMhlaH%2BCorMTw2buiftbhEhXrBws60Pucy7vb5s%2BCszCJq6DBBjqkAaP%2B%2F7IVt6HhPJ49FUQW6pVfeffdLuJZ9MiQE7QPXkw5qRJ4oy6MhH5q2so28SuNdFFOyEYfrj3PUS6tIjdIOf9HOwUxZOKSCbX2%2FxbmRK07p8MQkSOSiLRpXjeKjN4BW9DcBWqBI0MKvG8cpvrRHPiKIpNWhW6DBJSAWh5Wrp96wxRtqOitaRHO1A2Ut%2Bvdy9S1FPYxNTgiPdaEsXW3wHnh8QE6&X-Amz-Signature=0d9b11dff137e4b09ce37568ad1058d0cb449d344fab56f688422a52708a908a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5TJKXZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpjX2axZOd0q%2B9x%2BF9LU8FSIn3B%2FoX%2BjjaoSj4lfOSgIhAIQN98afOn1Svg%2FKuLzbmu3y3PPWrD%2BUL5KZuNa3VmDOKv8DCFYQABoMNjM3NDIzMTgzODA1Igw8tPwO2T%2B2ff%2B2DoEq3AM8PThiGeryFSgBgctp9%2FdDHFhRsWmsPcWbpxc3%2F89kTZyKvFLXRaiwfn1SUa8Txv9amhf9m6OJG2v0xXAh7YnIcWBIAR7UO9S5ISjBOz3uQ9ufQFOAoaPEBMLP4l1zwjh%2BBIqAhfrFtvCFFN1k8ZkhzjPCNU9r1mSyZHurSA7YcWU%2Fqtyru30I2YaaNqVojmkCACDlztK2LDBPbEkJETU%2B4BFoZsGkK8AV7j278Mysc%2Fe0u0jVVxGjqKW8IBa0o2pJRdDfuHqAyw7A8iXTGKZhdG8kfJZNhviSdyLBSTL0rtO8oh1K7euiQVJ%2FqZcgGaYitQeK1b8ddV8NadUDLQBBieiHTt3iEHjfL%2FgOaFSzy7VKulIKoD3BYwnQmu35Yu95HeS6ZIqlteegMhYPsSG0w0j90QFNyx%2F7fVKE69jY663rFgBAMHxRgY%2FOcULKUfSe0q91q6Oht4uPaa42kaphuUhhg9reG8Y8V4AL01eNsg5OcfUoOS%2BYRanU4%2BzY8YDy8W9GhtMQayBoP%2FcwY%2BtILMsLbtt522VeazyScR4Y6AowyAk5nxcW1kKLmQSP%2BdEsMnETMc25AKOTJwjXMhlaH%2BCorMTw2buiftbhEhXrBws60Pucy7vb5s%2BCszCJq6DBBjqkAaP%2B%2F7IVt6HhPJ49FUQW6pVfeffdLuJZ9MiQE7QPXkw5qRJ4oy6MhH5q2so28SuNdFFOyEYfrj3PUS6tIjdIOf9HOwUxZOKSCbX2%2FxbmRK07p8MQkSOSiLRpXjeKjN4BW9DcBWqBI0MKvG8cpvrRHPiKIpNWhW6DBJSAWh5Wrp96wxRtqOitaRHO1A2Ut%2Bvdy9S1FPYxNTgiPdaEsXW3wHnh8QE6&X-Amz-Signature=6032a9c77a84464909562bcac7440bf7067a6bd995da41943df1bd0cdbd801c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5TJKXZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpjX2axZOd0q%2B9x%2BF9LU8FSIn3B%2FoX%2BjjaoSj4lfOSgIhAIQN98afOn1Svg%2FKuLzbmu3y3PPWrD%2BUL5KZuNa3VmDOKv8DCFYQABoMNjM3NDIzMTgzODA1Igw8tPwO2T%2B2ff%2B2DoEq3AM8PThiGeryFSgBgctp9%2FdDHFhRsWmsPcWbpxc3%2F89kTZyKvFLXRaiwfn1SUa8Txv9amhf9m6OJG2v0xXAh7YnIcWBIAR7UO9S5ISjBOz3uQ9ufQFOAoaPEBMLP4l1zwjh%2BBIqAhfrFtvCFFN1k8ZkhzjPCNU9r1mSyZHurSA7YcWU%2Fqtyru30I2YaaNqVojmkCACDlztK2LDBPbEkJETU%2B4BFoZsGkK8AV7j278Mysc%2Fe0u0jVVxGjqKW8IBa0o2pJRdDfuHqAyw7A8iXTGKZhdG8kfJZNhviSdyLBSTL0rtO8oh1K7euiQVJ%2FqZcgGaYitQeK1b8ddV8NadUDLQBBieiHTt3iEHjfL%2FgOaFSzy7VKulIKoD3BYwnQmu35Yu95HeS6ZIqlteegMhYPsSG0w0j90QFNyx%2F7fVKE69jY663rFgBAMHxRgY%2FOcULKUfSe0q91q6Oht4uPaa42kaphuUhhg9reG8Y8V4AL01eNsg5OcfUoOS%2BYRanU4%2BzY8YDy8W9GhtMQayBoP%2FcwY%2BtILMsLbtt522VeazyScR4Y6AowyAk5nxcW1kKLmQSP%2BdEsMnETMc25AKOTJwjXMhlaH%2BCorMTw2buiftbhEhXrBws60Pucy7vb5s%2BCszCJq6DBBjqkAaP%2B%2F7IVt6HhPJ49FUQW6pVfeffdLuJZ9MiQE7QPXkw5qRJ4oy6MhH5q2so28SuNdFFOyEYfrj3PUS6tIjdIOf9HOwUxZOKSCbX2%2FxbmRK07p8MQkSOSiLRpXjeKjN4BW9DcBWqBI0MKvG8cpvrRHPiKIpNWhW6DBJSAWh5Wrp96wxRtqOitaRHO1A2Ut%2Bvdy9S1FPYxNTgiPdaEsXW3wHnh8QE6&X-Amz-Signature=094c6a753806510f17a31909c5fd5c8fd908721ad794b1191eecc55b81c3a7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5TJKXZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpjX2axZOd0q%2B9x%2BF9LU8FSIn3B%2FoX%2BjjaoSj4lfOSgIhAIQN98afOn1Svg%2FKuLzbmu3y3PPWrD%2BUL5KZuNa3VmDOKv8DCFYQABoMNjM3NDIzMTgzODA1Igw8tPwO2T%2B2ff%2B2DoEq3AM8PThiGeryFSgBgctp9%2FdDHFhRsWmsPcWbpxc3%2F89kTZyKvFLXRaiwfn1SUa8Txv9amhf9m6OJG2v0xXAh7YnIcWBIAR7UO9S5ISjBOz3uQ9ufQFOAoaPEBMLP4l1zwjh%2BBIqAhfrFtvCFFN1k8ZkhzjPCNU9r1mSyZHurSA7YcWU%2Fqtyru30I2YaaNqVojmkCACDlztK2LDBPbEkJETU%2B4BFoZsGkK8AV7j278Mysc%2Fe0u0jVVxGjqKW8IBa0o2pJRdDfuHqAyw7A8iXTGKZhdG8kfJZNhviSdyLBSTL0rtO8oh1K7euiQVJ%2FqZcgGaYitQeK1b8ddV8NadUDLQBBieiHTt3iEHjfL%2FgOaFSzy7VKulIKoD3BYwnQmu35Yu95HeS6ZIqlteegMhYPsSG0w0j90QFNyx%2F7fVKE69jY663rFgBAMHxRgY%2FOcULKUfSe0q91q6Oht4uPaa42kaphuUhhg9reG8Y8V4AL01eNsg5OcfUoOS%2BYRanU4%2BzY8YDy8W9GhtMQayBoP%2FcwY%2BtILMsLbtt522VeazyScR4Y6AowyAk5nxcW1kKLmQSP%2BdEsMnETMc25AKOTJwjXMhlaH%2BCorMTw2buiftbhEhXrBws60Pucy7vb5s%2BCszCJq6DBBjqkAaP%2B%2F7IVt6HhPJ49FUQW6pVfeffdLuJZ9MiQE7QPXkw5qRJ4oy6MhH5q2so28SuNdFFOyEYfrj3PUS6tIjdIOf9HOwUxZOKSCbX2%2FxbmRK07p8MQkSOSiLRpXjeKjN4BW9DcBWqBI0MKvG8cpvrRHPiKIpNWhW6DBJSAWh5Wrp96wxRtqOitaRHO1A2Ut%2Bvdy9S1FPYxNTgiPdaEsXW3wHnh8QE6&X-Amz-Signature=7196811a68a4a1e35b7bd7cca34d7e9134e9c4cfa100da286fc1cbf62bef06ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5TJKXZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpjX2axZOd0q%2B9x%2BF9LU8FSIn3B%2FoX%2BjjaoSj4lfOSgIhAIQN98afOn1Svg%2FKuLzbmu3y3PPWrD%2BUL5KZuNa3VmDOKv8DCFYQABoMNjM3NDIzMTgzODA1Igw8tPwO2T%2B2ff%2B2DoEq3AM8PThiGeryFSgBgctp9%2FdDHFhRsWmsPcWbpxc3%2F89kTZyKvFLXRaiwfn1SUa8Txv9amhf9m6OJG2v0xXAh7YnIcWBIAR7UO9S5ISjBOz3uQ9ufQFOAoaPEBMLP4l1zwjh%2BBIqAhfrFtvCFFN1k8ZkhzjPCNU9r1mSyZHurSA7YcWU%2Fqtyru30I2YaaNqVojmkCACDlztK2LDBPbEkJETU%2B4BFoZsGkK8AV7j278Mysc%2Fe0u0jVVxGjqKW8IBa0o2pJRdDfuHqAyw7A8iXTGKZhdG8kfJZNhviSdyLBSTL0rtO8oh1K7euiQVJ%2FqZcgGaYitQeK1b8ddV8NadUDLQBBieiHTt3iEHjfL%2FgOaFSzy7VKulIKoD3BYwnQmu35Yu95HeS6ZIqlteegMhYPsSG0w0j90QFNyx%2F7fVKE69jY663rFgBAMHxRgY%2FOcULKUfSe0q91q6Oht4uPaa42kaphuUhhg9reG8Y8V4AL01eNsg5OcfUoOS%2BYRanU4%2BzY8YDy8W9GhtMQayBoP%2FcwY%2BtILMsLbtt522VeazyScR4Y6AowyAk5nxcW1kKLmQSP%2BdEsMnETMc25AKOTJwjXMhlaH%2BCorMTw2buiftbhEhXrBws60Pucy7vb5s%2BCszCJq6DBBjqkAaP%2B%2F7IVt6HhPJ49FUQW6pVfeffdLuJZ9MiQE7QPXkw5qRJ4oy6MhH5q2so28SuNdFFOyEYfrj3PUS6tIjdIOf9HOwUxZOKSCbX2%2FxbmRK07p8MQkSOSiLRpXjeKjN4BW9DcBWqBI0MKvG8cpvrRHPiKIpNWhW6DBJSAWh5Wrp96wxRtqOitaRHO1A2Ut%2Bvdy9S1FPYxNTgiPdaEsXW3wHnh8QE6&X-Amz-Signature=0245e650417a80dc267ce6dfdaef798071cd23e36ebd7e0f858808f833bdf703&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5TJKXZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpjX2axZOd0q%2B9x%2BF9LU8FSIn3B%2FoX%2BjjaoSj4lfOSgIhAIQN98afOn1Svg%2FKuLzbmu3y3PPWrD%2BUL5KZuNa3VmDOKv8DCFYQABoMNjM3NDIzMTgzODA1Igw8tPwO2T%2B2ff%2B2DoEq3AM8PThiGeryFSgBgctp9%2FdDHFhRsWmsPcWbpxc3%2F89kTZyKvFLXRaiwfn1SUa8Txv9amhf9m6OJG2v0xXAh7YnIcWBIAR7UO9S5ISjBOz3uQ9ufQFOAoaPEBMLP4l1zwjh%2BBIqAhfrFtvCFFN1k8ZkhzjPCNU9r1mSyZHurSA7YcWU%2Fqtyru30I2YaaNqVojmkCACDlztK2LDBPbEkJETU%2B4BFoZsGkK8AV7j278Mysc%2Fe0u0jVVxGjqKW8IBa0o2pJRdDfuHqAyw7A8iXTGKZhdG8kfJZNhviSdyLBSTL0rtO8oh1K7euiQVJ%2FqZcgGaYitQeK1b8ddV8NadUDLQBBieiHTt3iEHjfL%2FgOaFSzy7VKulIKoD3BYwnQmu35Yu95HeS6ZIqlteegMhYPsSG0w0j90QFNyx%2F7fVKE69jY663rFgBAMHxRgY%2FOcULKUfSe0q91q6Oht4uPaa42kaphuUhhg9reG8Y8V4AL01eNsg5OcfUoOS%2BYRanU4%2BzY8YDy8W9GhtMQayBoP%2FcwY%2BtILMsLbtt522VeazyScR4Y6AowyAk5nxcW1kKLmQSP%2BdEsMnETMc25AKOTJwjXMhlaH%2BCorMTw2buiftbhEhXrBws60Pucy7vb5s%2BCszCJq6DBBjqkAaP%2B%2F7IVt6HhPJ49FUQW6pVfeffdLuJZ9MiQE7QPXkw5qRJ4oy6MhH5q2so28SuNdFFOyEYfrj3PUS6tIjdIOf9HOwUxZOKSCbX2%2FxbmRK07p8MQkSOSiLRpXjeKjN4BW9DcBWqBI0MKvG8cpvrRHPiKIpNWhW6DBJSAWh5Wrp96wxRtqOitaRHO1A2Ut%2Bvdy9S1FPYxNTgiPdaEsXW3wHnh8QE6&X-Amz-Signature=e2fa4a057bd767c34c2b5e2a68df2e916c1bf3d8f9552c43c57f495edd081785&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5TJKXZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpjX2axZOd0q%2B9x%2BF9LU8FSIn3B%2FoX%2BjjaoSj4lfOSgIhAIQN98afOn1Svg%2FKuLzbmu3y3PPWrD%2BUL5KZuNa3VmDOKv8DCFYQABoMNjM3NDIzMTgzODA1Igw8tPwO2T%2B2ff%2B2DoEq3AM8PThiGeryFSgBgctp9%2FdDHFhRsWmsPcWbpxc3%2F89kTZyKvFLXRaiwfn1SUa8Txv9amhf9m6OJG2v0xXAh7YnIcWBIAR7UO9S5ISjBOz3uQ9ufQFOAoaPEBMLP4l1zwjh%2BBIqAhfrFtvCFFN1k8ZkhzjPCNU9r1mSyZHurSA7YcWU%2Fqtyru30I2YaaNqVojmkCACDlztK2LDBPbEkJETU%2B4BFoZsGkK8AV7j278Mysc%2Fe0u0jVVxGjqKW8IBa0o2pJRdDfuHqAyw7A8iXTGKZhdG8kfJZNhviSdyLBSTL0rtO8oh1K7euiQVJ%2FqZcgGaYitQeK1b8ddV8NadUDLQBBieiHTt3iEHjfL%2FgOaFSzy7VKulIKoD3BYwnQmu35Yu95HeS6ZIqlteegMhYPsSG0w0j90QFNyx%2F7fVKE69jY663rFgBAMHxRgY%2FOcULKUfSe0q91q6Oht4uPaa42kaphuUhhg9reG8Y8V4AL01eNsg5OcfUoOS%2BYRanU4%2BzY8YDy8W9GhtMQayBoP%2FcwY%2BtILMsLbtt522VeazyScR4Y6AowyAk5nxcW1kKLmQSP%2BdEsMnETMc25AKOTJwjXMhlaH%2BCorMTw2buiftbhEhXrBws60Pucy7vb5s%2BCszCJq6DBBjqkAaP%2B%2F7IVt6HhPJ49FUQW6pVfeffdLuJZ9MiQE7QPXkw5qRJ4oy6MhH5q2so28SuNdFFOyEYfrj3PUS6tIjdIOf9HOwUxZOKSCbX2%2FxbmRK07p8MQkSOSiLRpXjeKjN4BW9DcBWqBI0MKvG8cpvrRHPiKIpNWhW6DBJSAWh5Wrp96wxRtqOitaRHO1A2Ut%2Bvdy9S1FPYxNTgiPdaEsXW3wHnh8QE6&X-Amz-Signature=79a1cd930454a26e7be887229ca4aa0f363d63efb3162e66db4e0c4774daff53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
