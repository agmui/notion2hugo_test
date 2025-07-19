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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W662WRN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTiEiue5saItutcy3E1rWF1p%2B6V6pX%2FK1fTvLCAdpYPQIhAKbhbA1FQtEsVdiuPsCTFjvXNbcvVuIDSrDR3mGjTmjdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVpoFgzS%2FWnsR6CYoq3APX245OXdxz1AiopB50Y5jrPdtO%2BUjAVUC%2Fzs%2BaG67zEYWbwyTO35fri88LJfhMRSOtgeRJwuIbApgk5Mw4zb%2Bpo5TlStoijtTHL2TkE89evX3Aqtgr8hl0dwMXJqVS9fnzffk5%2F81TmIq9LF4aAc%2FD8NIi%2Fk5gqIwEKxkbB5rXR90yxpnaXnbBXGeAKwA4GC40g7HR8gD2dQ%2BHiIEcbl19%2B6oeRdfO0xvn0F38wFdZe7SvyJRtX5SwgCNtj1UdjiRCCwEyxuZpkTBZ0N2UT1dLkS7mA1W1XKvZPa9scy%2Fi7Pn%2F9pQprw47WVNsO2B6XalKvn27YSxqBpTjO%2BpYQS4aRf90LXMZoSHW3zAjkiK%2BjQXG9BYd6VFDdOQpQSCxfZ%2BvoQWhrqBE0%2BMi1AKsaJekeCn%2BuKnYV9Q1kwDi1DYZnTeLz1SzRchKgCn4X0gzn%2BtUXIxca9p%2Bc4zz5mqEsu9RKyhaPIOVmu3zqzN3%2FHDsRgq4L9obm%2FS21XSKAJm3Ztn%2Bwj%2Bv9gIfm9KgRoZ%2BnkyyR66yxHOMKovKNISykI5UStY3tnSgLdGZG94QWoH%2BpLN62XfOaFA6cCz4feDvm4BvEO3aNC7cc35x8Vl3XdX9pg9GHeq48H8JFHYTMjCj9e%2FDBjqkATQxy8OOXXZC63aagTeWmk07A0S%2F2DKhwRXqMTqhomqxGvLyW75Elf0afy9nsC9GzXqJqGDNBQ9UpFR%2FBQnCwVmSEadsrAjZ7tLFtKHCtaN%2BwMfpUIOHlxlaWtEY4LKoS%2FEI%2BClpUM%2B7ji3zDpwE3IQIjJqddvjU9wTdFz9TX%2FhWHfR52QfvYGPUPWalg5qXengyt3RvgL93E7adYHJ%2BBACCj8Hu&X-Amz-Signature=d795691753f268d7b39fdde76b03c2cb820aa8ce90528d1ea3b584734f978c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W662WRN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTiEiue5saItutcy3E1rWF1p%2B6V6pX%2FK1fTvLCAdpYPQIhAKbhbA1FQtEsVdiuPsCTFjvXNbcvVuIDSrDR3mGjTmjdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVpoFgzS%2FWnsR6CYoq3APX245OXdxz1AiopB50Y5jrPdtO%2BUjAVUC%2Fzs%2BaG67zEYWbwyTO35fri88LJfhMRSOtgeRJwuIbApgk5Mw4zb%2Bpo5TlStoijtTHL2TkE89evX3Aqtgr8hl0dwMXJqVS9fnzffk5%2F81TmIq9LF4aAc%2FD8NIi%2Fk5gqIwEKxkbB5rXR90yxpnaXnbBXGeAKwA4GC40g7HR8gD2dQ%2BHiIEcbl19%2B6oeRdfO0xvn0F38wFdZe7SvyJRtX5SwgCNtj1UdjiRCCwEyxuZpkTBZ0N2UT1dLkS7mA1W1XKvZPa9scy%2Fi7Pn%2F9pQprw47WVNsO2B6XalKvn27YSxqBpTjO%2BpYQS4aRf90LXMZoSHW3zAjkiK%2BjQXG9BYd6VFDdOQpQSCxfZ%2BvoQWhrqBE0%2BMi1AKsaJekeCn%2BuKnYV9Q1kwDi1DYZnTeLz1SzRchKgCn4X0gzn%2BtUXIxca9p%2Bc4zz5mqEsu9RKyhaPIOVmu3zqzN3%2FHDsRgq4L9obm%2FS21XSKAJm3Ztn%2Bwj%2Bv9gIfm9KgRoZ%2BnkyyR66yxHOMKovKNISykI5UStY3tnSgLdGZG94QWoH%2BpLN62XfOaFA6cCz4feDvm4BvEO3aNC7cc35x8Vl3XdX9pg9GHeq48H8JFHYTMjCj9e%2FDBjqkATQxy8OOXXZC63aagTeWmk07A0S%2F2DKhwRXqMTqhomqxGvLyW75Elf0afy9nsC9GzXqJqGDNBQ9UpFR%2FBQnCwVmSEadsrAjZ7tLFtKHCtaN%2BwMfpUIOHlxlaWtEY4LKoS%2FEI%2BClpUM%2B7ji3zDpwE3IQIjJqddvjU9wTdFz9TX%2FhWHfR52QfvYGPUPWalg5qXengyt3RvgL93E7adYHJ%2BBACCj8Hu&X-Amz-Signature=278ac386bec3b23eca92bff2aa87e494da53187732b7e9796cea80bf0bb296b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W662WRN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTiEiue5saItutcy3E1rWF1p%2B6V6pX%2FK1fTvLCAdpYPQIhAKbhbA1FQtEsVdiuPsCTFjvXNbcvVuIDSrDR3mGjTmjdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVpoFgzS%2FWnsR6CYoq3APX245OXdxz1AiopB50Y5jrPdtO%2BUjAVUC%2Fzs%2BaG67zEYWbwyTO35fri88LJfhMRSOtgeRJwuIbApgk5Mw4zb%2Bpo5TlStoijtTHL2TkE89evX3Aqtgr8hl0dwMXJqVS9fnzffk5%2F81TmIq9LF4aAc%2FD8NIi%2Fk5gqIwEKxkbB5rXR90yxpnaXnbBXGeAKwA4GC40g7HR8gD2dQ%2BHiIEcbl19%2B6oeRdfO0xvn0F38wFdZe7SvyJRtX5SwgCNtj1UdjiRCCwEyxuZpkTBZ0N2UT1dLkS7mA1W1XKvZPa9scy%2Fi7Pn%2F9pQprw47WVNsO2B6XalKvn27YSxqBpTjO%2BpYQS4aRf90LXMZoSHW3zAjkiK%2BjQXG9BYd6VFDdOQpQSCxfZ%2BvoQWhrqBE0%2BMi1AKsaJekeCn%2BuKnYV9Q1kwDi1DYZnTeLz1SzRchKgCn4X0gzn%2BtUXIxca9p%2Bc4zz5mqEsu9RKyhaPIOVmu3zqzN3%2FHDsRgq4L9obm%2FS21XSKAJm3Ztn%2Bwj%2Bv9gIfm9KgRoZ%2BnkyyR66yxHOMKovKNISykI5UStY3tnSgLdGZG94QWoH%2BpLN62XfOaFA6cCz4feDvm4BvEO3aNC7cc35x8Vl3XdX9pg9GHeq48H8JFHYTMjCj9e%2FDBjqkATQxy8OOXXZC63aagTeWmk07A0S%2F2DKhwRXqMTqhomqxGvLyW75Elf0afy9nsC9GzXqJqGDNBQ9UpFR%2FBQnCwVmSEadsrAjZ7tLFtKHCtaN%2BwMfpUIOHlxlaWtEY4LKoS%2FEI%2BClpUM%2B7ji3zDpwE3IQIjJqddvjU9wTdFz9TX%2FhWHfR52QfvYGPUPWalg5qXengyt3RvgL93E7adYHJ%2BBACCj8Hu&X-Amz-Signature=a4bb4c747f1d8b5f4e8ab73b7afc0f63cb9a15d0bb1b83de2df068fd2bd06b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W662WRN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTiEiue5saItutcy3E1rWF1p%2B6V6pX%2FK1fTvLCAdpYPQIhAKbhbA1FQtEsVdiuPsCTFjvXNbcvVuIDSrDR3mGjTmjdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVpoFgzS%2FWnsR6CYoq3APX245OXdxz1AiopB50Y5jrPdtO%2BUjAVUC%2Fzs%2BaG67zEYWbwyTO35fri88LJfhMRSOtgeRJwuIbApgk5Mw4zb%2Bpo5TlStoijtTHL2TkE89evX3Aqtgr8hl0dwMXJqVS9fnzffk5%2F81TmIq9LF4aAc%2FD8NIi%2Fk5gqIwEKxkbB5rXR90yxpnaXnbBXGeAKwA4GC40g7HR8gD2dQ%2BHiIEcbl19%2B6oeRdfO0xvn0F38wFdZe7SvyJRtX5SwgCNtj1UdjiRCCwEyxuZpkTBZ0N2UT1dLkS7mA1W1XKvZPa9scy%2Fi7Pn%2F9pQprw47WVNsO2B6XalKvn27YSxqBpTjO%2BpYQS4aRf90LXMZoSHW3zAjkiK%2BjQXG9BYd6VFDdOQpQSCxfZ%2BvoQWhrqBE0%2BMi1AKsaJekeCn%2BuKnYV9Q1kwDi1DYZnTeLz1SzRchKgCn4X0gzn%2BtUXIxca9p%2Bc4zz5mqEsu9RKyhaPIOVmu3zqzN3%2FHDsRgq4L9obm%2FS21XSKAJm3Ztn%2Bwj%2Bv9gIfm9KgRoZ%2BnkyyR66yxHOMKovKNISykI5UStY3tnSgLdGZG94QWoH%2BpLN62XfOaFA6cCz4feDvm4BvEO3aNC7cc35x8Vl3XdX9pg9GHeq48H8JFHYTMjCj9e%2FDBjqkATQxy8OOXXZC63aagTeWmk07A0S%2F2DKhwRXqMTqhomqxGvLyW75Elf0afy9nsC9GzXqJqGDNBQ9UpFR%2FBQnCwVmSEadsrAjZ7tLFtKHCtaN%2BwMfpUIOHlxlaWtEY4LKoS%2FEI%2BClpUM%2B7ji3zDpwE3IQIjJqddvjU9wTdFz9TX%2FhWHfR52QfvYGPUPWalg5qXengyt3RvgL93E7adYHJ%2BBACCj8Hu&X-Amz-Signature=8957273f38d08cd5ba9e54d7c1e7cf89b86dd374712ba2e8aa9f1e7b39b8feae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W662WRN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTiEiue5saItutcy3E1rWF1p%2B6V6pX%2FK1fTvLCAdpYPQIhAKbhbA1FQtEsVdiuPsCTFjvXNbcvVuIDSrDR3mGjTmjdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVpoFgzS%2FWnsR6CYoq3APX245OXdxz1AiopB50Y5jrPdtO%2BUjAVUC%2Fzs%2BaG67zEYWbwyTO35fri88LJfhMRSOtgeRJwuIbApgk5Mw4zb%2Bpo5TlStoijtTHL2TkE89evX3Aqtgr8hl0dwMXJqVS9fnzffk5%2F81TmIq9LF4aAc%2FD8NIi%2Fk5gqIwEKxkbB5rXR90yxpnaXnbBXGeAKwA4GC40g7HR8gD2dQ%2BHiIEcbl19%2B6oeRdfO0xvn0F38wFdZe7SvyJRtX5SwgCNtj1UdjiRCCwEyxuZpkTBZ0N2UT1dLkS7mA1W1XKvZPa9scy%2Fi7Pn%2F9pQprw47WVNsO2B6XalKvn27YSxqBpTjO%2BpYQS4aRf90LXMZoSHW3zAjkiK%2BjQXG9BYd6VFDdOQpQSCxfZ%2BvoQWhrqBE0%2BMi1AKsaJekeCn%2BuKnYV9Q1kwDi1DYZnTeLz1SzRchKgCn4X0gzn%2BtUXIxca9p%2Bc4zz5mqEsu9RKyhaPIOVmu3zqzN3%2FHDsRgq4L9obm%2FS21XSKAJm3Ztn%2Bwj%2Bv9gIfm9KgRoZ%2BnkyyR66yxHOMKovKNISykI5UStY3tnSgLdGZG94QWoH%2BpLN62XfOaFA6cCz4feDvm4BvEO3aNC7cc35x8Vl3XdX9pg9GHeq48H8JFHYTMjCj9e%2FDBjqkATQxy8OOXXZC63aagTeWmk07A0S%2F2DKhwRXqMTqhomqxGvLyW75Elf0afy9nsC9GzXqJqGDNBQ9UpFR%2FBQnCwVmSEadsrAjZ7tLFtKHCtaN%2BwMfpUIOHlxlaWtEY4LKoS%2FEI%2BClpUM%2B7ji3zDpwE3IQIjJqddvjU9wTdFz9TX%2FhWHfR52QfvYGPUPWalg5qXengyt3RvgL93E7adYHJ%2BBACCj8Hu&X-Amz-Signature=a3f2543609780cec786f65988941d1c15e310e1f5f8d5e4012061e1ab479fc22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W662WRN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTiEiue5saItutcy3E1rWF1p%2B6V6pX%2FK1fTvLCAdpYPQIhAKbhbA1FQtEsVdiuPsCTFjvXNbcvVuIDSrDR3mGjTmjdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVpoFgzS%2FWnsR6CYoq3APX245OXdxz1AiopB50Y5jrPdtO%2BUjAVUC%2Fzs%2BaG67zEYWbwyTO35fri88LJfhMRSOtgeRJwuIbApgk5Mw4zb%2Bpo5TlStoijtTHL2TkE89evX3Aqtgr8hl0dwMXJqVS9fnzffk5%2F81TmIq9LF4aAc%2FD8NIi%2Fk5gqIwEKxkbB5rXR90yxpnaXnbBXGeAKwA4GC40g7HR8gD2dQ%2BHiIEcbl19%2B6oeRdfO0xvn0F38wFdZe7SvyJRtX5SwgCNtj1UdjiRCCwEyxuZpkTBZ0N2UT1dLkS7mA1W1XKvZPa9scy%2Fi7Pn%2F9pQprw47WVNsO2B6XalKvn27YSxqBpTjO%2BpYQS4aRf90LXMZoSHW3zAjkiK%2BjQXG9BYd6VFDdOQpQSCxfZ%2BvoQWhrqBE0%2BMi1AKsaJekeCn%2BuKnYV9Q1kwDi1DYZnTeLz1SzRchKgCn4X0gzn%2BtUXIxca9p%2Bc4zz5mqEsu9RKyhaPIOVmu3zqzN3%2FHDsRgq4L9obm%2FS21XSKAJm3Ztn%2Bwj%2Bv9gIfm9KgRoZ%2BnkyyR66yxHOMKovKNISykI5UStY3tnSgLdGZG94QWoH%2BpLN62XfOaFA6cCz4feDvm4BvEO3aNC7cc35x8Vl3XdX9pg9GHeq48H8JFHYTMjCj9e%2FDBjqkATQxy8OOXXZC63aagTeWmk07A0S%2F2DKhwRXqMTqhomqxGvLyW75Elf0afy9nsC9GzXqJqGDNBQ9UpFR%2FBQnCwVmSEadsrAjZ7tLFtKHCtaN%2BwMfpUIOHlxlaWtEY4LKoS%2FEI%2BClpUM%2B7ji3zDpwE3IQIjJqddvjU9wTdFz9TX%2FhWHfR52QfvYGPUPWalg5qXengyt3RvgL93E7adYHJ%2BBACCj8Hu&X-Amz-Signature=a12ce487208ab1bcaf3e06c9d50c3b95495b096514133363b1a7a53137653a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W662WRN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTiEiue5saItutcy3E1rWF1p%2B6V6pX%2FK1fTvLCAdpYPQIhAKbhbA1FQtEsVdiuPsCTFjvXNbcvVuIDSrDR3mGjTmjdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVpoFgzS%2FWnsR6CYoq3APX245OXdxz1AiopB50Y5jrPdtO%2BUjAVUC%2Fzs%2BaG67zEYWbwyTO35fri88LJfhMRSOtgeRJwuIbApgk5Mw4zb%2Bpo5TlStoijtTHL2TkE89evX3Aqtgr8hl0dwMXJqVS9fnzffk5%2F81TmIq9LF4aAc%2FD8NIi%2Fk5gqIwEKxkbB5rXR90yxpnaXnbBXGeAKwA4GC40g7HR8gD2dQ%2BHiIEcbl19%2B6oeRdfO0xvn0F38wFdZe7SvyJRtX5SwgCNtj1UdjiRCCwEyxuZpkTBZ0N2UT1dLkS7mA1W1XKvZPa9scy%2Fi7Pn%2F9pQprw47WVNsO2B6XalKvn27YSxqBpTjO%2BpYQS4aRf90LXMZoSHW3zAjkiK%2BjQXG9BYd6VFDdOQpQSCxfZ%2BvoQWhrqBE0%2BMi1AKsaJekeCn%2BuKnYV9Q1kwDi1DYZnTeLz1SzRchKgCn4X0gzn%2BtUXIxca9p%2Bc4zz5mqEsu9RKyhaPIOVmu3zqzN3%2FHDsRgq4L9obm%2FS21XSKAJm3Ztn%2Bwj%2Bv9gIfm9KgRoZ%2BnkyyR66yxHOMKovKNISykI5UStY3tnSgLdGZG94QWoH%2BpLN62XfOaFA6cCz4feDvm4BvEO3aNC7cc35x8Vl3XdX9pg9GHeq48H8JFHYTMjCj9e%2FDBjqkATQxy8OOXXZC63aagTeWmk07A0S%2F2DKhwRXqMTqhomqxGvLyW75Elf0afy9nsC9GzXqJqGDNBQ9UpFR%2FBQnCwVmSEadsrAjZ7tLFtKHCtaN%2BwMfpUIOHlxlaWtEY4LKoS%2FEI%2BClpUM%2B7ji3zDpwE3IQIjJqddvjU9wTdFz9TX%2FhWHfR52QfvYGPUPWalg5qXengyt3RvgL93E7adYHJ%2BBACCj8Hu&X-Amz-Signature=9e59e7831c1573bf35fc358f3e6a3305c30dcd6059e6fd5e649d2a60e1fd558a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W662WRN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTiEiue5saItutcy3E1rWF1p%2B6V6pX%2FK1fTvLCAdpYPQIhAKbhbA1FQtEsVdiuPsCTFjvXNbcvVuIDSrDR3mGjTmjdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVpoFgzS%2FWnsR6CYoq3APX245OXdxz1AiopB50Y5jrPdtO%2BUjAVUC%2Fzs%2BaG67zEYWbwyTO35fri88LJfhMRSOtgeRJwuIbApgk5Mw4zb%2Bpo5TlStoijtTHL2TkE89evX3Aqtgr8hl0dwMXJqVS9fnzffk5%2F81TmIq9LF4aAc%2FD8NIi%2Fk5gqIwEKxkbB5rXR90yxpnaXnbBXGeAKwA4GC40g7HR8gD2dQ%2BHiIEcbl19%2B6oeRdfO0xvn0F38wFdZe7SvyJRtX5SwgCNtj1UdjiRCCwEyxuZpkTBZ0N2UT1dLkS7mA1W1XKvZPa9scy%2Fi7Pn%2F9pQprw47WVNsO2B6XalKvn27YSxqBpTjO%2BpYQS4aRf90LXMZoSHW3zAjkiK%2BjQXG9BYd6VFDdOQpQSCxfZ%2BvoQWhrqBE0%2BMi1AKsaJekeCn%2BuKnYV9Q1kwDi1DYZnTeLz1SzRchKgCn4X0gzn%2BtUXIxca9p%2Bc4zz5mqEsu9RKyhaPIOVmu3zqzN3%2FHDsRgq4L9obm%2FS21XSKAJm3Ztn%2Bwj%2Bv9gIfm9KgRoZ%2BnkyyR66yxHOMKovKNISykI5UStY3tnSgLdGZG94QWoH%2BpLN62XfOaFA6cCz4feDvm4BvEO3aNC7cc35x8Vl3XdX9pg9GHeq48H8JFHYTMjCj9e%2FDBjqkATQxy8OOXXZC63aagTeWmk07A0S%2F2DKhwRXqMTqhomqxGvLyW75Elf0afy9nsC9GzXqJqGDNBQ9UpFR%2FBQnCwVmSEadsrAjZ7tLFtKHCtaN%2BwMfpUIOHlxlaWtEY4LKoS%2FEI%2BClpUM%2B7ji3zDpwE3IQIjJqddvjU9wTdFz9TX%2FhWHfR52QfvYGPUPWalg5qXengyt3RvgL93E7adYHJ%2BBACCj8Hu&X-Amz-Signature=7a5ed2d21acfd95d52eca442216fb6766e7c2e98074f25197982b168df359ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
