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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZE6XFV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzNbyR9VbIdxyDoCz4SPr0Ne3A0XGfZ9EJ%2FWpeW7FjqAiAvwvDCzA5MCgSVzO7c2RB%2F%2BOYjsC%2F2ijaFpPQlZ5pI8ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2B7s%2BTXISp5DKfqFoKtwDWhNR6HL32puRTzukYH7qqwZ4cIHCTrjAXqBsKMeu1GzbczundZwN6uqCDUHLFHKmB7WbmJag1dg3JvnAM8Oo1uzNLMA6EC5A3Rn5bhpvpIL0u9B%2BNlCHu56KXx7%2B8ykU25fD0%2B9SSzL6hrGOlprl22hKXxAXQjyaaocbuDCwWH%2BBZPzf%2BiKVRVU47FC%2B9v5485gJht9A2gRyFDiLcibg%2B6iuaXvLkCUxI%2F%2FGAle2SOpdU4H%2BfHQyCd0DuHHhyxkPeM1uNNozniXfmQRA9UpNWk9o1cOw1EE9pyF4G5X9Fk5L37LU2nqQqBljA4q1x8y3Djum%2Flv%2FM%2Bcx2yKxGlB0QqwpNAuTrwqXOyrlYNajJe8CAHDh9%2BaiGQsszmY9U6S4d3531ln03EnaHaWu2TaiYh5yXZurSrmQ7uON2vQDGZhq9iSsnovDm9597Kg0KiMWXuRF0jQT4vokE7gWtRC5boNKZqonrF0hqz11cLMDhlhU%2FFZGEDxV9N5UFBvLrFCsXIQ8kFRxsFJqi%2BT1NJcKhk7Sdkw7WaC23xbCA9NVvFadVKm6cTRr9CKUnWqDZjIlu7BRgPBRYc0TDpOKs7MqmfBQaAJUOmyMN%2BgWnmEGxmHzY5Ycb0rzgTKXkt8wmf7lwAY6pgFQGsJugNiMKSRxY7tG8RHuEnTTwTnpFYEt5UC7%2Fy%2FRegsRPjhOoYg0QuJ32QH6Nhptv8Og6aPi1eaB4uSjZUd1xTIW0fvi8sH6cLiFYe28L7PPAf5H2jAa9BC3Ys3QpQLrQbfdkomt3ZtbTcJvJ8VwwRnpD70%2BS%2FfwEMjBwr0oHlMGui3jYyM6pArf8pmZb9OgASmYp0zbg1Diop5FZ83WUBWizfQA&X-Amz-Signature=58baeb7202ba001afbc261383f4d3fba43794c1d3294c2107f79bc35937887a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZE6XFV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzNbyR9VbIdxyDoCz4SPr0Ne3A0XGfZ9EJ%2FWpeW7FjqAiAvwvDCzA5MCgSVzO7c2RB%2F%2BOYjsC%2F2ijaFpPQlZ5pI8ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2B7s%2BTXISp5DKfqFoKtwDWhNR6HL32puRTzukYH7qqwZ4cIHCTrjAXqBsKMeu1GzbczundZwN6uqCDUHLFHKmB7WbmJag1dg3JvnAM8Oo1uzNLMA6EC5A3Rn5bhpvpIL0u9B%2BNlCHu56KXx7%2B8ykU25fD0%2B9SSzL6hrGOlprl22hKXxAXQjyaaocbuDCwWH%2BBZPzf%2BiKVRVU47FC%2B9v5485gJht9A2gRyFDiLcibg%2B6iuaXvLkCUxI%2F%2FGAle2SOpdU4H%2BfHQyCd0DuHHhyxkPeM1uNNozniXfmQRA9UpNWk9o1cOw1EE9pyF4G5X9Fk5L37LU2nqQqBljA4q1x8y3Djum%2Flv%2FM%2Bcx2yKxGlB0QqwpNAuTrwqXOyrlYNajJe8CAHDh9%2BaiGQsszmY9U6S4d3531ln03EnaHaWu2TaiYh5yXZurSrmQ7uON2vQDGZhq9iSsnovDm9597Kg0KiMWXuRF0jQT4vokE7gWtRC5boNKZqonrF0hqz11cLMDhlhU%2FFZGEDxV9N5UFBvLrFCsXIQ8kFRxsFJqi%2BT1NJcKhk7Sdkw7WaC23xbCA9NVvFadVKm6cTRr9CKUnWqDZjIlu7BRgPBRYc0TDpOKs7MqmfBQaAJUOmyMN%2BgWnmEGxmHzY5Ycb0rzgTKXkt8wmf7lwAY6pgFQGsJugNiMKSRxY7tG8RHuEnTTwTnpFYEt5UC7%2Fy%2FRegsRPjhOoYg0QuJ32QH6Nhptv8Og6aPi1eaB4uSjZUd1xTIW0fvi8sH6cLiFYe28L7PPAf5H2jAa9BC3Ys3QpQLrQbfdkomt3ZtbTcJvJ8VwwRnpD70%2BS%2FfwEMjBwr0oHlMGui3jYyM6pArf8pmZb9OgASmYp0zbg1Diop5FZ83WUBWizfQA&X-Amz-Signature=a6e3edd99c4783f318499101ae8c1f83375637169abad56510d9cb9aa47cd127&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZE6XFV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzNbyR9VbIdxyDoCz4SPr0Ne3A0XGfZ9EJ%2FWpeW7FjqAiAvwvDCzA5MCgSVzO7c2RB%2F%2BOYjsC%2F2ijaFpPQlZ5pI8ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2B7s%2BTXISp5DKfqFoKtwDWhNR6HL32puRTzukYH7qqwZ4cIHCTrjAXqBsKMeu1GzbczundZwN6uqCDUHLFHKmB7WbmJag1dg3JvnAM8Oo1uzNLMA6EC5A3Rn5bhpvpIL0u9B%2BNlCHu56KXx7%2B8ykU25fD0%2B9SSzL6hrGOlprl22hKXxAXQjyaaocbuDCwWH%2BBZPzf%2BiKVRVU47FC%2B9v5485gJht9A2gRyFDiLcibg%2B6iuaXvLkCUxI%2F%2FGAle2SOpdU4H%2BfHQyCd0DuHHhyxkPeM1uNNozniXfmQRA9UpNWk9o1cOw1EE9pyF4G5X9Fk5L37LU2nqQqBljA4q1x8y3Djum%2Flv%2FM%2Bcx2yKxGlB0QqwpNAuTrwqXOyrlYNajJe8CAHDh9%2BaiGQsszmY9U6S4d3531ln03EnaHaWu2TaiYh5yXZurSrmQ7uON2vQDGZhq9iSsnovDm9597Kg0KiMWXuRF0jQT4vokE7gWtRC5boNKZqonrF0hqz11cLMDhlhU%2FFZGEDxV9N5UFBvLrFCsXIQ8kFRxsFJqi%2BT1NJcKhk7Sdkw7WaC23xbCA9NVvFadVKm6cTRr9CKUnWqDZjIlu7BRgPBRYc0TDpOKs7MqmfBQaAJUOmyMN%2BgWnmEGxmHzY5Ycb0rzgTKXkt8wmf7lwAY6pgFQGsJugNiMKSRxY7tG8RHuEnTTwTnpFYEt5UC7%2Fy%2FRegsRPjhOoYg0QuJ32QH6Nhptv8Og6aPi1eaB4uSjZUd1xTIW0fvi8sH6cLiFYe28L7PPAf5H2jAa9BC3Ys3QpQLrQbfdkomt3ZtbTcJvJ8VwwRnpD70%2BS%2FfwEMjBwr0oHlMGui3jYyM6pArf8pmZb9OgASmYp0zbg1Diop5FZ83WUBWizfQA&X-Amz-Signature=f8f61bde894c7ec1fc8383c18bb5cc474be66f1997e464fe0bbbada5d4a554a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZE6XFV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzNbyR9VbIdxyDoCz4SPr0Ne3A0XGfZ9EJ%2FWpeW7FjqAiAvwvDCzA5MCgSVzO7c2RB%2F%2BOYjsC%2F2ijaFpPQlZ5pI8ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2B7s%2BTXISp5DKfqFoKtwDWhNR6HL32puRTzukYH7qqwZ4cIHCTrjAXqBsKMeu1GzbczundZwN6uqCDUHLFHKmB7WbmJag1dg3JvnAM8Oo1uzNLMA6EC5A3Rn5bhpvpIL0u9B%2BNlCHu56KXx7%2B8ykU25fD0%2B9SSzL6hrGOlprl22hKXxAXQjyaaocbuDCwWH%2BBZPzf%2BiKVRVU47FC%2B9v5485gJht9A2gRyFDiLcibg%2B6iuaXvLkCUxI%2F%2FGAle2SOpdU4H%2BfHQyCd0DuHHhyxkPeM1uNNozniXfmQRA9UpNWk9o1cOw1EE9pyF4G5X9Fk5L37LU2nqQqBljA4q1x8y3Djum%2Flv%2FM%2Bcx2yKxGlB0QqwpNAuTrwqXOyrlYNajJe8CAHDh9%2BaiGQsszmY9U6S4d3531ln03EnaHaWu2TaiYh5yXZurSrmQ7uON2vQDGZhq9iSsnovDm9597Kg0KiMWXuRF0jQT4vokE7gWtRC5boNKZqonrF0hqz11cLMDhlhU%2FFZGEDxV9N5UFBvLrFCsXIQ8kFRxsFJqi%2BT1NJcKhk7Sdkw7WaC23xbCA9NVvFadVKm6cTRr9CKUnWqDZjIlu7BRgPBRYc0TDpOKs7MqmfBQaAJUOmyMN%2BgWnmEGxmHzY5Ycb0rzgTKXkt8wmf7lwAY6pgFQGsJugNiMKSRxY7tG8RHuEnTTwTnpFYEt5UC7%2Fy%2FRegsRPjhOoYg0QuJ32QH6Nhptv8Og6aPi1eaB4uSjZUd1xTIW0fvi8sH6cLiFYe28L7PPAf5H2jAa9BC3Ys3QpQLrQbfdkomt3ZtbTcJvJ8VwwRnpD70%2BS%2FfwEMjBwr0oHlMGui3jYyM6pArf8pmZb9OgASmYp0zbg1Diop5FZ83WUBWizfQA&X-Amz-Signature=3134fdea7be3fb93187263caa5a715fc946cff1fb67797482414578e828d9590&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZE6XFV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzNbyR9VbIdxyDoCz4SPr0Ne3A0XGfZ9EJ%2FWpeW7FjqAiAvwvDCzA5MCgSVzO7c2RB%2F%2BOYjsC%2F2ijaFpPQlZ5pI8ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2B7s%2BTXISp5DKfqFoKtwDWhNR6HL32puRTzukYH7qqwZ4cIHCTrjAXqBsKMeu1GzbczundZwN6uqCDUHLFHKmB7WbmJag1dg3JvnAM8Oo1uzNLMA6EC5A3Rn5bhpvpIL0u9B%2BNlCHu56KXx7%2B8ykU25fD0%2B9SSzL6hrGOlprl22hKXxAXQjyaaocbuDCwWH%2BBZPzf%2BiKVRVU47FC%2B9v5485gJht9A2gRyFDiLcibg%2B6iuaXvLkCUxI%2F%2FGAle2SOpdU4H%2BfHQyCd0DuHHhyxkPeM1uNNozniXfmQRA9UpNWk9o1cOw1EE9pyF4G5X9Fk5L37LU2nqQqBljA4q1x8y3Djum%2Flv%2FM%2Bcx2yKxGlB0QqwpNAuTrwqXOyrlYNajJe8CAHDh9%2BaiGQsszmY9U6S4d3531ln03EnaHaWu2TaiYh5yXZurSrmQ7uON2vQDGZhq9iSsnovDm9597Kg0KiMWXuRF0jQT4vokE7gWtRC5boNKZqonrF0hqz11cLMDhlhU%2FFZGEDxV9N5UFBvLrFCsXIQ8kFRxsFJqi%2BT1NJcKhk7Sdkw7WaC23xbCA9NVvFadVKm6cTRr9CKUnWqDZjIlu7BRgPBRYc0TDpOKs7MqmfBQaAJUOmyMN%2BgWnmEGxmHzY5Ycb0rzgTKXkt8wmf7lwAY6pgFQGsJugNiMKSRxY7tG8RHuEnTTwTnpFYEt5UC7%2Fy%2FRegsRPjhOoYg0QuJ32QH6Nhptv8Og6aPi1eaB4uSjZUd1xTIW0fvi8sH6cLiFYe28L7PPAf5H2jAa9BC3Ys3QpQLrQbfdkomt3ZtbTcJvJ8VwwRnpD70%2BS%2FfwEMjBwr0oHlMGui3jYyM6pArf8pmZb9OgASmYp0zbg1Diop5FZ83WUBWizfQA&X-Amz-Signature=1fd00ab0609c21152979feabeab3af46ee4ea06d68423cfabc8f5d56da7e1b32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZE6XFV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzNbyR9VbIdxyDoCz4SPr0Ne3A0XGfZ9EJ%2FWpeW7FjqAiAvwvDCzA5MCgSVzO7c2RB%2F%2BOYjsC%2F2ijaFpPQlZ5pI8ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2B7s%2BTXISp5DKfqFoKtwDWhNR6HL32puRTzukYH7qqwZ4cIHCTrjAXqBsKMeu1GzbczundZwN6uqCDUHLFHKmB7WbmJag1dg3JvnAM8Oo1uzNLMA6EC5A3Rn5bhpvpIL0u9B%2BNlCHu56KXx7%2B8ykU25fD0%2B9SSzL6hrGOlprl22hKXxAXQjyaaocbuDCwWH%2BBZPzf%2BiKVRVU47FC%2B9v5485gJht9A2gRyFDiLcibg%2B6iuaXvLkCUxI%2F%2FGAle2SOpdU4H%2BfHQyCd0DuHHhyxkPeM1uNNozniXfmQRA9UpNWk9o1cOw1EE9pyF4G5X9Fk5L37LU2nqQqBljA4q1x8y3Djum%2Flv%2FM%2Bcx2yKxGlB0QqwpNAuTrwqXOyrlYNajJe8CAHDh9%2BaiGQsszmY9U6S4d3531ln03EnaHaWu2TaiYh5yXZurSrmQ7uON2vQDGZhq9iSsnovDm9597Kg0KiMWXuRF0jQT4vokE7gWtRC5boNKZqonrF0hqz11cLMDhlhU%2FFZGEDxV9N5UFBvLrFCsXIQ8kFRxsFJqi%2BT1NJcKhk7Sdkw7WaC23xbCA9NVvFadVKm6cTRr9CKUnWqDZjIlu7BRgPBRYc0TDpOKs7MqmfBQaAJUOmyMN%2BgWnmEGxmHzY5Ycb0rzgTKXkt8wmf7lwAY6pgFQGsJugNiMKSRxY7tG8RHuEnTTwTnpFYEt5UC7%2Fy%2FRegsRPjhOoYg0QuJ32QH6Nhptv8Og6aPi1eaB4uSjZUd1xTIW0fvi8sH6cLiFYe28L7PPAf5H2jAa9BC3Ys3QpQLrQbfdkomt3ZtbTcJvJ8VwwRnpD70%2BS%2FfwEMjBwr0oHlMGui3jYyM6pArf8pmZb9OgASmYp0zbg1Diop5FZ83WUBWizfQA&X-Amz-Signature=aa12b1798e30a0a54c616d83b02e0809c0672ad15d480903a083642e55267869&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZE6XFV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzNbyR9VbIdxyDoCz4SPr0Ne3A0XGfZ9EJ%2FWpeW7FjqAiAvwvDCzA5MCgSVzO7c2RB%2F%2BOYjsC%2F2ijaFpPQlZ5pI8ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2B7s%2BTXISp5DKfqFoKtwDWhNR6HL32puRTzukYH7qqwZ4cIHCTrjAXqBsKMeu1GzbczundZwN6uqCDUHLFHKmB7WbmJag1dg3JvnAM8Oo1uzNLMA6EC5A3Rn5bhpvpIL0u9B%2BNlCHu56KXx7%2B8ykU25fD0%2B9SSzL6hrGOlprl22hKXxAXQjyaaocbuDCwWH%2BBZPzf%2BiKVRVU47FC%2B9v5485gJht9A2gRyFDiLcibg%2B6iuaXvLkCUxI%2F%2FGAle2SOpdU4H%2BfHQyCd0DuHHhyxkPeM1uNNozniXfmQRA9UpNWk9o1cOw1EE9pyF4G5X9Fk5L37LU2nqQqBljA4q1x8y3Djum%2Flv%2FM%2Bcx2yKxGlB0QqwpNAuTrwqXOyrlYNajJe8CAHDh9%2BaiGQsszmY9U6S4d3531ln03EnaHaWu2TaiYh5yXZurSrmQ7uON2vQDGZhq9iSsnovDm9597Kg0KiMWXuRF0jQT4vokE7gWtRC5boNKZqonrF0hqz11cLMDhlhU%2FFZGEDxV9N5UFBvLrFCsXIQ8kFRxsFJqi%2BT1NJcKhk7Sdkw7WaC23xbCA9NVvFadVKm6cTRr9CKUnWqDZjIlu7BRgPBRYc0TDpOKs7MqmfBQaAJUOmyMN%2BgWnmEGxmHzY5Ycb0rzgTKXkt8wmf7lwAY6pgFQGsJugNiMKSRxY7tG8RHuEnTTwTnpFYEt5UC7%2Fy%2FRegsRPjhOoYg0QuJ32QH6Nhptv8Og6aPi1eaB4uSjZUd1xTIW0fvi8sH6cLiFYe28L7PPAf5H2jAa9BC3Ys3QpQLrQbfdkomt3ZtbTcJvJ8VwwRnpD70%2BS%2FfwEMjBwr0oHlMGui3jYyM6pArf8pmZb9OgASmYp0zbg1Diop5FZ83WUBWizfQA&X-Amz-Signature=431edc89da70f24abb67459fedab2e3e2d7087d69c2e4df63e2cd7533f0d2a33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZE6XFV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzNbyR9VbIdxyDoCz4SPr0Ne3A0XGfZ9EJ%2FWpeW7FjqAiAvwvDCzA5MCgSVzO7c2RB%2F%2BOYjsC%2F2ijaFpPQlZ5pI8ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2B7s%2BTXISp5DKfqFoKtwDWhNR6HL32puRTzukYH7qqwZ4cIHCTrjAXqBsKMeu1GzbczundZwN6uqCDUHLFHKmB7WbmJag1dg3JvnAM8Oo1uzNLMA6EC5A3Rn5bhpvpIL0u9B%2BNlCHu56KXx7%2B8ykU25fD0%2B9SSzL6hrGOlprl22hKXxAXQjyaaocbuDCwWH%2BBZPzf%2BiKVRVU47FC%2B9v5485gJht9A2gRyFDiLcibg%2B6iuaXvLkCUxI%2F%2FGAle2SOpdU4H%2BfHQyCd0DuHHhyxkPeM1uNNozniXfmQRA9UpNWk9o1cOw1EE9pyF4G5X9Fk5L37LU2nqQqBljA4q1x8y3Djum%2Flv%2FM%2Bcx2yKxGlB0QqwpNAuTrwqXOyrlYNajJe8CAHDh9%2BaiGQsszmY9U6S4d3531ln03EnaHaWu2TaiYh5yXZurSrmQ7uON2vQDGZhq9iSsnovDm9597Kg0KiMWXuRF0jQT4vokE7gWtRC5boNKZqonrF0hqz11cLMDhlhU%2FFZGEDxV9N5UFBvLrFCsXIQ8kFRxsFJqi%2BT1NJcKhk7Sdkw7WaC23xbCA9NVvFadVKm6cTRr9CKUnWqDZjIlu7BRgPBRYc0TDpOKs7MqmfBQaAJUOmyMN%2BgWnmEGxmHzY5Ycb0rzgTKXkt8wmf7lwAY6pgFQGsJugNiMKSRxY7tG8RHuEnTTwTnpFYEt5UC7%2Fy%2FRegsRPjhOoYg0QuJ32QH6Nhptv8Og6aPi1eaB4uSjZUd1xTIW0fvi8sH6cLiFYe28L7PPAf5H2jAa9BC3Ys3QpQLrQbfdkomt3ZtbTcJvJ8VwwRnpD70%2BS%2FfwEMjBwr0oHlMGui3jYyM6pArf8pmZb9OgASmYp0zbg1Diop5FZ83WUBWizfQA&X-Amz-Signature=79f9eb281fa73d87683a45d1449707f5101705d9869ed07700277bf06fe8a7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
