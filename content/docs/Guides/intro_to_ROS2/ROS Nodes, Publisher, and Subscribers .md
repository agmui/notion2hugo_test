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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEMJ653%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCID8uEQkOZYHzcLZeyQrffSvvjgzxDo7YX2scyfb2GguIAiAl1533l0CCgaXF9HXTridmLWrIinkZsao6ZYC0%2FC4ZviqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BBBbUn3kemB%2BhJPKtwDIz4xJEbH8FzUjxUusS2ZQNETqeQE4zr%2BC0CidXRK0nP3XL53jBFo7qkhAH1WjBmccrKzfvxwxVc0pF7LMugUVQnqnKIbAq1diYtDrQ8owchaNhvADeU0ZUJM1i5Jx3P5uKLgRFyA5RQi1pWN%2BFxZb0cVmOlfGfhGWsZIR%2BkQCAXxXadqgKh68LrtR5QKGA4WsCZKS6ZA9HIsxLKb4nRwOyK4wY9sieDkj9e1p7wNTnsN7QUg4qULLYHOXRd7tmBYxQgac3%2Fu75EuenyH%2Fxiyv1emEi12R%2FVKg3QkjGb84zd0sLjWV%2Fu3R59kBjo7QKUUIjb%2Fe%2BHmqyJvTieaSCC%2FKdB2xN2F%2FpKeYvjdyxYzgwS45qexUk57ae%2FmTfDYyspYVG3qtbfYUxTqSuuM%2B1Dk%2FzYgjqgpzlprZkaR5VdCU7iNq9tccEQT6rWYTh%2FCU7eH8CJuOxn82%2Bf7zNLSwDP81HBN2HWEb7sJPMBIruG%2F5rXMrODk0pIFLnbCxlXz%2B4h3mofl1VlT922XU%2Fa17d2QP54GhMHmOcM4BJ4UXa3IGKr2wWMScL7UFamD9DXIo%2BWGV%2BGAunL2oKZpmRzhPV1%2FEod%2B4JMorcIhSlqMvEsL3cGYYgNFd%2BL%2F8pjV9tswgNuVwAY6pgHn1hdIvH10V0NAWVBkgrq32%2BocW5UZ2MpnVHMJOaKSdptZ4i4lt6wF27K55ZxreGi7SLQTT0pW0Rdt8OErcV7ND0jHi1JtbQ4uKBTCqwL717cNzqBR65JypTEuT6%2BYOPRit5Z9AEkKHzEL3xkRMPLbfvPFfP6KiBpNhbWh5etiW%2BnBwAwpGz4dfjqwV32ysjsdrL7cXEV9M55DV2%2FMi463tvI5hDjx&X-Amz-Signature=66ef8dc757b294805d5937e0be2f9ec551df1a2d3eca1675a3d9c2d3c826673e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEMJ653%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCID8uEQkOZYHzcLZeyQrffSvvjgzxDo7YX2scyfb2GguIAiAl1533l0CCgaXF9HXTridmLWrIinkZsao6ZYC0%2FC4ZviqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BBBbUn3kemB%2BhJPKtwDIz4xJEbH8FzUjxUusS2ZQNETqeQE4zr%2BC0CidXRK0nP3XL53jBFo7qkhAH1WjBmccrKzfvxwxVc0pF7LMugUVQnqnKIbAq1diYtDrQ8owchaNhvADeU0ZUJM1i5Jx3P5uKLgRFyA5RQi1pWN%2BFxZb0cVmOlfGfhGWsZIR%2BkQCAXxXadqgKh68LrtR5QKGA4WsCZKS6ZA9HIsxLKb4nRwOyK4wY9sieDkj9e1p7wNTnsN7QUg4qULLYHOXRd7tmBYxQgac3%2Fu75EuenyH%2Fxiyv1emEi12R%2FVKg3QkjGb84zd0sLjWV%2Fu3R59kBjo7QKUUIjb%2Fe%2BHmqyJvTieaSCC%2FKdB2xN2F%2FpKeYvjdyxYzgwS45qexUk57ae%2FmTfDYyspYVG3qtbfYUxTqSuuM%2B1Dk%2FzYgjqgpzlprZkaR5VdCU7iNq9tccEQT6rWYTh%2FCU7eH8CJuOxn82%2Bf7zNLSwDP81HBN2HWEb7sJPMBIruG%2F5rXMrODk0pIFLnbCxlXz%2B4h3mofl1VlT922XU%2Fa17d2QP54GhMHmOcM4BJ4UXa3IGKr2wWMScL7UFamD9DXIo%2BWGV%2BGAunL2oKZpmRzhPV1%2FEod%2B4JMorcIhSlqMvEsL3cGYYgNFd%2BL%2F8pjV9tswgNuVwAY6pgHn1hdIvH10V0NAWVBkgrq32%2BocW5UZ2MpnVHMJOaKSdptZ4i4lt6wF27K55ZxreGi7SLQTT0pW0Rdt8OErcV7ND0jHi1JtbQ4uKBTCqwL717cNzqBR65JypTEuT6%2BYOPRit5Z9AEkKHzEL3xkRMPLbfvPFfP6KiBpNhbWh5etiW%2BnBwAwpGz4dfjqwV32ysjsdrL7cXEV9M55DV2%2FMi463tvI5hDjx&X-Amz-Signature=b16a2c22aff28c924453d390fd8b9cedaec69dd310b3b169b298557c2550ba0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEMJ653%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCID8uEQkOZYHzcLZeyQrffSvvjgzxDo7YX2scyfb2GguIAiAl1533l0CCgaXF9HXTridmLWrIinkZsao6ZYC0%2FC4ZviqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BBBbUn3kemB%2BhJPKtwDIz4xJEbH8FzUjxUusS2ZQNETqeQE4zr%2BC0CidXRK0nP3XL53jBFo7qkhAH1WjBmccrKzfvxwxVc0pF7LMugUVQnqnKIbAq1diYtDrQ8owchaNhvADeU0ZUJM1i5Jx3P5uKLgRFyA5RQi1pWN%2BFxZb0cVmOlfGfhGWsZIR%2BkQCAXxXadqgKh68LrtR5QKGA4WsCZKS6ZA9HIsxLKb4nRwOyK4wY9sieDkj9e1p7wNTnsN7QUg4qULLYHOXRd7tmBYxQgac3%2Fu75EuenyH%2Fxiyv1emEi12R%2FVKg3QkjGb84zd0sLjWV%2Fu3R59kBjo7QKUUIjb%2Fe%2BHmqyJvTieaSCC%2FKdB2xN2F%2FpKeYvjdyxYzgwS45qexUk57ae%2FmTfDYyspYVG3qtbfYUxTqSuuM%2B1Dk%2FzYgjqgpzlprZkaR5VdCU7iNq9tccEQT6rWYTh%2FCU7eH8CJuOxn82%2Bf7zNLSwDP81HBN2HWEb7sJPMBIruG%2F5rXMrODk0pIFLnbCxlXz%2B4h3mofl1VlT922XU%2Fa17d2QP54GhMHmOcM4BJ4UXa3IGKr2wWMScL7UFamD9DXIo%2BWGV%2BGAunL2oKZpmRzhPV1%2FEod%2B4JMorcIhSlqMvEsL3cGYYgNFd%2BL%2F8pjV9tswgNuVwAY6pgHn1hdIvH10V0NAWVBkgrq32%2BocW5UZ2MpnVHMJOaKSdptZ4i4lt6wF27K55ZxreGi7SLQTT0pW0Rdt8OErcV7ND0jHi1JtbQ4uKBTCqwL717cNzqBR65JypTEuT6%2BYOPRit5Z9AEkKHzEL3xkRMPLbfvPFfP6KiBpNhbWh5etiW%2BnBwAwpGz4dfjqwV32ysjsdrL7cXEV9M55DV2%2FMi463tvI5hDjx&X-Amz-Signature=466fc7ca7bc28df623c3aaf3981e9f7b9092d27b97f099bd4e1342ab5d1ca1b5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEMJ653%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCID8uEQkOZYHzcLZeyQrffSvvjgzxDo7YX2scyfb2GguIAiAl1533l0CCgaXF9HXTridmLWrIinkZsao6ZYC0%2FC4ZviqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BBBbUn3kemB%2BhJPKtwDIz4xJEbH8FzUjxUusS2ZQNETqeQE4zr%2BC0CidXRK0nP3XL53jBFo7qkhAH1WjBmccrKzfvxwxVc0pF7LMugUVQnqnKIbAq1diYtDrQ8owchaNhvADeU0ZUJM1i5Jx3P5uKLgRFyA5RQi1pWN%2BFxZb0cVmOlfGfhGWsZIR%2BkQCAXxXadqgKh68LrtR5QKGA4WsCZKS6ZA9HIsxLKb4nRwOyK4wY9sieDkj9e1p7wNTnsN7QUg4qULLYHOXRd7tmBYxQgac3%2Fu75EuenyH%2Fxiyv1emEi12R%2FVKg3QkjGb84zd0sLjWV%2Fu3R59kBjo7QKUUIjb%2Fe%2BHmqyJvTieaSCC%2FKdB2xN2F%2FpKeYvjdyxYzgwS45qexUk57ae%2FmTfDYyspYVG3qtbfYUxTqSuuM%2B1Dk%2FzYgjqgpzlprZkaR5VdCU7iNq9tccEQT6rWYTh%2FCU7eH8CJuOxn82%2Bf7zNLSwDP81HBN2HWEb7sJPMBIruG%2F5rXMrODk0pIFLnbCxlXz%2B4h3mofl1VlT922XU%2Fa17d2QP54GhMHmOcM4BJ4UXa3IGKr2wWMScL7UFamD9DXIo%2BWGV%2BGAunL2oKZpmRzhPV1%2FEod%2B4JMorcIhSlqMvEsL3cGYYgNFd%2BL%2F8pjV9tswgNuVwAY6pgHn1hdIvH10V0NAWVBkgrq32%2BocW5UZ2MpnVHMJOaKSdptZ4i4lt6wF27K55ZxreGi7SLQTT0pW0Rdt8OErcV7ND0jHi1JtbQ4uKBTCqwL717cNzqBR65JypTEuT6%2BYOPRit5Z9AEkKHzEL3xkRMPLbfvPFfP6KiBpNhbWh5etiW%2BnBwAwpGz4dfjqwV32ysjsdrL7cXEV9M55DV2%2FMi463tvI5hDjx&X-Amz-Signature=d85f65d7f8118dce1f717c642ac5dc4ae52f47c73d5498986380ec6cbd255159&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEMJ653%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCID8uEQkOZYHzcLZeyQrffSvvjgzxDo7YX2scyfb2GguIAiAl1533l0CCgaXF9HXTridmLWrIinkZsao6ZYC0%2FC4ZviqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BBBbUn3kemB%2BhJPKtwDIz4xJEbH8FzUjxUusS2ZQNETqeQE4zr%2BC0CidXRK0nP3XL53jBFo7qkhAH1WjBmccrKzfvxwxVc0pF7LMugUVQnqnKIbAq1diYtDrQ8owchaNhvADeU0ZUJM1i5Jx3P5uKLgRFyA5RQi1pWN%2BFxZb0cVmOlfGfhGWsZIR%2BkQCAXxXadqgKh68LrtR5QKGA4WsCZKS6ZA9HIsxLKb4nRwOyK4wY9sieDkj9e1p7wNTnsN7QUg4qULLYHOXRd7tmBYxQgac3%2Fu75EuenyH%2Fxiyv1emEi12R%2FVKg3QkjGb84zd0sLjWV%2Fu3R59kBjo7QKUUIjb%2Fe%2BHmqyJvTieaSCC%2FKdB2xN2F%2FpKeYvjdyxYzgwS45qexUk57ae%2FmTfDYyspYVG3qtbfYUxTqSuuM%2B1Dk%2FzYgjqgpzlprZkaR5VdCU7iNq9tccEQT6rWYTh%2FCU7eH8CJuOxn82%2Bf7zNLSwDP81HBN2HWEb7sJPMBIruG%2F5rXMrODk0pIFLnbCxlXz%2B4h3mofl1VlT922XU%2Fa17d2QP54GhMHmOcM4BJ4UXa3IGKr2wWMScL7UFamD9DXIo%2BWGV%2BGAunL2oKZpmRzhPV1%2FEod%2B4JMorcIhSlqMvEsL3cGYYgNFd%2BL%2F8pjV9tswgNuVwAY6pgHn1hdIvH10V0NAWVBkgrq32%2BocW5UZ2MpnVHMJOaKSdptZ4i4lt6wF27K55ZxreGi7SLQTT0pW0Rdt8OErcV7ND0jHi1JtbQ4uKBTCqwL717cNzqBR65JypTEuT6%2BYOPRit5Z9AEkKHzEL3xkRMPLbfvPFfP6KiBpNhbWh5etiW%2BnBwAwpGz4dfjqwV32ysjsdrL7cXEV9M55DV2%2FMi463tvI5hDjx&X-Amz-Signature=6b6add1478b05abdb9c53bc4f032ae093c4ebd866c3f92fc1d8d68ae8adecd9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEMJ653%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCID8uEQkOZYHzcLZeyQrffSvvjgzxDo7YX2scyfb2GguIAiAl1533l0CCgaXF9HXTridmLWrIinkZsao6ZYC0%2FC4ZviqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BBBbUn3kemB%2BhJPKtwDIz4xJEbH8FzUjxUusS2ZQNETqeQE4zr%2BC0CidXRK0nP3XL53jBFo7qkhAH1WjBmccrKzfvxwxVc0pF7LMugUVQnqnKIbAq1diYtDrQ8owchaNhvADeU0ZUJM1i5Jx3P5uKLgRFyA5RQi1pWN%2BFxZb0cVmOlfGfhGWsZIR%2BkQCAXxXadqgKh68LrtR5QKGA4WsCZKS6ZA9HIsxLKb4nRwOyK4wY9sieDkj9e1p7wNTnsN7QUg4qULLYHOXRd7tmBYxQgac3%2Fu75EuenyH%2Fxiyv1emEi12R%2FVKg3QkjGb84zd0sLjWV%2Fu3R59kBjo7QKUUIjb%2Fe%2BHmqyJvTieaSCC%2FKdB2xN2F%2FpKeYvjdyxYzgwS45qexUk57ae%2FmTfDYyspYVG3qtbfYUxTqSuuM%2B1Dk%2FzYgjqgpzlprZkaR5VdCU7iNq9tccEQT6rWYTh%2FCU7eH8CJuOxn82%2Bf7zNLSwDP81HBN2HWEb7sJPMBIruG%2F5rXMrODk0pIFLnbCxlXz%2B4h3mofl1VlT922XU%2Fa17d2QP54GhMHmOcM4BJ4UXa3IGKr2wWMScL7UFamD9DXIo%2BWGV%2BGAunL2oKZpmRzhPV1%2FEod%2B4JMorcIhSlqMvEsL3cGYYgNFd%2BL%2F8pjV9tswgNuVwAY6pgHn1hdIvH10V0NAWVBkgrq32%2BocW5UZ2MpnVHMJOaKSdptZ4i4lt6wF27K55ZxreGi7SLQTT0pW0Rdt8OErcV7ND0jHi1JtbQ4uKBTCqwL717cNzqBR65JypTEuT6%2BYOPRit5Z9AEkKHzEL3xkRMPLbfvPFfP6KiBpNhbWh5etiW%2BnBwAwpGz4dfjqwV32ysjsdrL7cXEV9M55DV2%2FMi463tvI5hDjx&X-Amz-Signature=5778e3578702d0c7b1bd67f05fe2885ffeffa3f49c8d8a3460b3f5c0cce37b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEMJ653%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCID8uEQkOZYHzcLZeyQrffSvvjgzxDo7YX2scyfb2GguIAiAl1533l0CCgaXF9HXTridmLWrIinkZsao6ZYC0%2FC4ZviqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BBBbUn3kemB%2BhJPKtwDIz4xJEbH8FzUjxUusS2ZQNETqeQE4zr%2BC0CidXRK0nP3XL53jBFo7qkhAH1WjBmccrKzfvxwxVc0pF7LMugUVQnqnKIbAq1diYtDrQ8owchaNhvADeU0ZUJM1i5Jx3P5uKLgRFyA5RQi1pWN%2BFxZb0cVmOlfGfhGWsZIR%2BkQCAXxXadqgKh68LrtR5QKGA4WsCZKS6ZA9HIsxLKb4nRwOyK4wY9sieDkj9e1p7wNTnsN7QUg4qULLYHOXRd7tmBYxQgac3%2Fu75EuenyH%2Fxiyv1emEi12R%2FVKg3QkjGb84zd0sLjWV%2Fu3R59kBjo7QKUUIjb%2Fe%2BHmqyJvTieaSCC%2FKdB2xN2F%2FpKeYvjdyxYzgwS45qexUk57ae%2FmTfDYyspYVG3qtbfYUxTqSuuM%2B1Dk%2FzYgjqgpzlprZkaR5VdCU7iNq9tccEQT6rWYTh%2FCU7eH8CJuOxn82%2Bf7zNLSwDP81HBN2HWEb7sJPMBIruG%2F5rXMrODk0pIFLnbCxlXz%2B4h3mofl1VlT922XU%2Fa17d2QP54GhMHmOcM4BJ4UXa3IGKr2wWMScL7UFamD9DXIo%2BWGV%2BGAunL2oKZpmRzhPV1%2FEod%2B4JMorcIhSlqMvEsL3cGYYgNFd%2BL%2F8pjV9tswgNuVwAY6pgHn1hdIvH10V0NAWVBkgrq32%2BocW5UZ2MpnVHMJOaKSdptZ4i4lt6wF27K55ZxreGi7SLQTT0pW0Rdt8OErcV7ND0jHi1JtbQ4uKBTCqwL717cNzqBR65JypTEuT6%2BYOPRit5Z9AEkKHzEL3xkRMPLbfvPFfP6KiBpNhbWh5etiW%2BnBwAwpGz4dfjqwV32ysjsdrL7cXEV9M55DV2%2FMi463tvI5hDjx&X-Amz-Signature=464a2feed9afcbd45159fd6af5097f08ada9bff99de8e44be8c6195ae4047588&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEMJ653%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCID8uEQkOZYHzcLZeyQrffSvvjgzxDo7YX2scyfb2GguIAiAl1533l0CCgaXF9HXTridmLWrIinkZsao6ZYC0%2FC4ZviqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BBBbUn3kemB%2BhJPKtwDIz4xJEbH8FzUjxUusS2ZQNETqeQE4zr%2BC0CidXRK0nP3XL53jBFo7qkhAH1WjBmccrKzfvxwxVc0pF7LMugUVQnqnKIbAq1diYtDrQ8owchaNhvADeU0ZUJM1i5Jx3P5uKLgRFyA5RQi1pWN%2BFxZb0cVmOlfGfhGWsZIR%2BkQCAXxXadqgKh68LrtR5QKGA4WsCZKS6ZA9HIsxLKb4nRwOyK4wY9sieDkj9e1p7wNTnsN7QUg4qULLYHOXRd7tmBYxQgac3%2Fu75EuenyH%2Fxiyv1emEi12R%2FVKg3QkjGb84zd0sLjWV%2Fu3R59kBjo7QKUUIjb%2Fe%2BHmqyJvTieaSCC%2FKdB2xN2F%2FpKeYvjdyxYzgwS45qexUk57ae%2FmTfDYyspYVG3qtbfYUxTqSuuM%2B1Dk%2FzYgjqgpzlprZkaR5VdCU7iNq9tccEQT6rWYTh%2FCU7eH8CJuOxn82%2Bf7zNLSwDP81HBN2HWEb7sJPMBIruG%2F5rXMrODk0pIFLnbCxlXz%2B4h3mofl1VlT922XU%2Fa17d2QP54GhMHmOcM4BJ4UXa3IGKr2wWMScL7UFamD9DXIo%2BWGV%2BGAunL2oKZpmRzhPV1%2FEod%2B4JMorcIhSlqMvEsL3cGYYgNFd%2BL%2F8pjV9tswgNuVwAY6pgHn1hdIvH10V0NAWVBkgrq32%2BocW5UZ2MpnVHMJOaKSdptZ4i4lt6wF27K55ZxreGi7SLQTT0pW0Rdt8OErcV7ND0jHi1JtbQ4uKBTCqwL717cNzqBR65JypTEuT6%2BYOPRit5Z9AEkKHzEL3xkRMPLbfvPFfP6KiBpNhbWh5etiW%2BnBwAwpGz4dfjqwV32ysjsdrL7cXEV9M55DV2%2FMi463tvI5hDjx&X-Amz-Signature=d7bbc7b273ff38aa6332a5b6e7b5bc97545c7e967f35537064c05dd32af220ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
