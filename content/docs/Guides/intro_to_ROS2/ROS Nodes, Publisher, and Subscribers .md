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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6I6ODD7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZ5noZ%2FX1JNRCLS%2BgslQxn3vur3JNdF7CZM1TGwE9BgIhAO%2BolqXnBoDVgBP5BK2oB13DGQBWJFY6GNm83UPuH7JQKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1XJosZQC2OPSkhYMq3ANORDxidZH64VONFQQtabTRyF2AewjdUwXzNFgF8%2F7Yew7%2FWGhoH7rkwwyare%2BmlLttownsNdMlZUj2hQCe8wM55ScL64%2BQNL7u3cM75mY5NBb2A6m3n9laAEeqYUPfAn4yhm20E67kT3CwyxxK%2Bc0yQ3ZH%2BIF7qmYD352wRnK87PWk%2FmPgglhx5YC3Hbdzs6LhsIM9WS2dEdQpjLePE%2F1jNytAJqljKEBNP%2BOCGWdoAwpjvBRTQTxN6vs914S0PcHC5tmsnklbtWwTVfMq7ijU9g2AitZXiM3vbbNg4027yW79%2F1XrddeeKmFGOcAhRzUkWYDDcFmbMQkAlAzMfQF2Uc0cBpveEWNKZv8Rn7ljMxeTzgI9r09ErkOpPWFdKEXhXtHjUnJfnw4piObJeU4ZWqOzS%2BsKhgOX3qKvlLummCql94pVgQgyn1qyemTgC4G%2FYBcngbxm00dKr8%2BbwHnSmnmvl3Vik6ylp8T3ZLQewFFSKE2Hmqj6bsGiC6wAHoO%2BkmuOQgiNDLUsLk2uhBjcn4ec3wToWEtmpK%2BWLX8NM8riL9vxy6opsUIqknRC7y1%2BSdxUfuyQbQhjbTU1KYWTSzajEhUuZJCDPZ1oJjVSjuKYVelqJ9EdKZQpGzC33PPDBjqkAcUFUUre4qagzzZV%2Be7KAVn5MG1IbbA0uFfR5xpt83ZhN45M0VQboeFes70Bpz50k9JnK29tQ%2FSo26ylBor9uyB2S%2BDzwzC3yEKWvtja8O%2F0nLSRKHG%2FwxZFYy67B0ssRtPpHI%2Fkn0ii0tgtM88552LnOhlpYfKmf0sIe0xItsTm1FuJvDFZiUVXbH8RcO1ZU4858uxLIaqCn3VLrLQxQPHuKmwM&X-Amz-Signature=0aba36db32626b11102a3901034b6605bd45997820ab2715e60e6f585604b777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6I6ODD7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZ5noZ%2FX1JNRCLS%2BgslQxn3vur3JNdF7CZM1TGwE9BgIhAO%2BolqXnBoDVgBP5BK2oB13DGQBWJFY6GNm83UPuH7JQKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1XJosZQC2OPSkhYMq3ANORDxidZH64VONFQQtabTRyF2AewjdUwXzNFgF8%2F7Yew7%2FWGhoH7rkwwyare%2BmlLttownsNdMlZUj2hQCe8wM55ScL64%2BQNL7u3cM75mY5NBb2A6m3n9laAEeqYUPfAn4yhm20E67kT3CwyxxK%2Bc0yQ3ZH%2BIF7qmYD352wRnK87PWk%2FmPgglhx5YC3Hbdzs6LhsIM9WS2dEdQpjLePE%2F1jNytAJqljKEBNP%2BOCGWdoAwpjvBRTQTxN6vs914S0PcHC5tmsnklbtWwTVfMq7ijU9g2AitZXiM3vbbNg4027yW79%2F1XrddeeKmFGOcAhRzUkWYDDcFmbMQkAlAzMfQF2Uc0cBpveEWNKZv8Rn7ljMxeTzgI9r09ErkOpPWFdKEXhXtHjUnJfnw4piObJeU4ZWqOzS%2BsKhgOX3qKvlLummCql94pVgQgyn1qyemTgC4G%2FYBcngbxm00dKr8%2BbwHnSmnmvl3Vik6ylp8T3ZLQewFFSKE2Hmqj6bsGiC6wAHoO%2BkmuOQgiNDLUsLk2uhBjcn4ec3wToWEtmpK%2BWLX8NM8riL9vxy6opsUIqknRC7y1%2BSdxUfuyQbQhjbTU1KYWTSzajEhUuZJCDPZ1oJjVSjuKYVelqJ9EdKZQpGzC33PPDBjqkAcUFUUre4qagzzZV%2Be7KAVn5MG1IbbA0uFfR5xpt83ZhN45M0VQboeFes70Bpz50k9JnK29tQ%2FSo26ylBor9uyB2S%2BDzwzC3yEKWvtja8O%2F0nLSRKHG%2FwxZFYy67B0ssRtPpHI%2Fkn0ii0tgtM88552LnOhlpYfKmf0sIe0xItsTm1FuJvDFZiUVXbH8RcO1ZU4858uxLIaqCn3VLrLQxQPHuKmwM&X-Amz-Signature=2f9d1c97487f5cc0b802945b0ef5f995604c93360331d8660fc6892b03948ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6I6ODD7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZ5noZ%2FX1JNRCLS%2BgslQxn3vur3JNdF7CZM1TGwE9BgIhAO%2BolqXnBoDVgBP5BK2oB13DGQBWJFY6GNm83UPuH7JQKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1XJosZQC2OPSkhYMq3ANORDxidZH64VONFQQtabTRyF2AewjdUwXzNFgF8%2F7Yew7%2FWGhoH7rkwwyare%2BmlLttownsNdMlZUj2hQCe8wM55ScL64%2BQNL7u3cM75mY5NBb2A6m3n9laAEeqYUPfAn4yhm20E67kT3CwyxxK%2Bc0yQ3ZH%2BIF7qmYD352wRnK87PWk%2FmPgglhx5YC3Hbdzs6LhsIM9WS2dEdQpjLePE%2F1jNytAJqljKEBNP%2BOCGWdoAwpjvBRTQTxN6vs914S0PcHC5tmsnklbtWwTVfMq7ijU9g2AitZXiM3vbbNg4027yW79%2F1XrddeeKmFGOcAhRzUkWYDDcFmbMQkAlAzMfQF2Uc0cBpveEWNKZv8Rn7ljMxeTzgI9r09ErkOpPWFdKEXhXtHjUnJfnw4piObJeU4ZWqOzS%2BsKhgOX3qKvlLummCql94pVgQgyn1qyemTgC4G%2FYBcngbxm00dKr8%2BbwHnSmnmvl3Vik6ylp8T3ZLQewFFSKE2Hmqj6bsGiC6wAHoO%2BkmuOQgiNDLUsLk2uhBjcn4ec3wToWEtmpK%2BWLX8NM8riL9vxy6opsUIqknRC7y1%2BSdxUfuyQbQhjbTU1KYWTSzajEhUuZJCDPZ1oJjVSjuKYVelqJ9EdKZQpGzC33PPDBjqkAcUFUUre4qagzzZV%2Be7KAVn5MG1IbbA0uFfR5xpt83ZhN45M0VQboeFes70Bpz50k9JnK29tQ%2FSo26ylBor9uyB2S%2BDzwzC3yEKWvtja8O%2F0nLSRKHG%2FwxZFYy67B0ssRtPpHI%2Fkn0ii0tgtM88552LnOhlpYfKmf0sIe0xItsTm1FuJvDFZiUVXbH8RcO1ZU4858uxLIaqCn3VLrLQxQPHuKmwM&X-Amz-Signature=e014e36c5fc5e267a57ce3cbc3c7f751eb3213f96a05031bb62510a562f78b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6I6ODD7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZ5noZ%2FX1JNRCLS%2BgslQxn3vur3JNdF7CZM1TGwE9BgIhAO%2BolqXnBoDVgBP5BK2oB13DGQBWJFY6GNm83UPuH7JQKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1XJosZQC2OPSkhYMq3ANORDxidZH64VONFQQtabTRyF2AewjdUwXzNFgF8%2F7Yew7%2FWGhoH7rkwwyare%2BmlLttownsNdMlZUj2hQCe8wM55ScL64%2BQNL7u3cM75mY5NBb2A6m3n9laAEeqYUPfAn4yhm20E67kT3CwyxxK%2Bc0yQ3ZH%2BIF7qmYD352wRnK87PWk%2FmPgglhx5YC3Hbdzs6LhsIM9WS2dEdQpjLePE%2F1jNytAJqljKEBNP%2BOCGWdoAwpjvBRTQTxN6vs914S0PcHC5tmsnklbtWwTVfMq7ijU9g2AitZXiM3vbbNg4027yW79%2F1XrddeeKmFGOcAhRzUkWYDDcFmbMQkAlAzMfQF2Uc0cBpveEWNKZv8Rn7ljMxeTzgI9r09ErkOpPWFdKEXhXtHjUnJfnw4piObJeU4ZWqOzS%2BsKhgOX3qKvlLummCql94pVgQgyn1qyemTgC4G%2FYBcngbxm00dKr8%2BbwHnSmnmvl3Vik6ylp8T3ZLQewFFSKE2Hmqj6bsGiC6wAHoO%2BkmuOQgiNDLUsLk2uhBjcn4ec3wToWEtmpK%2BWLX8NM8riL9vxy6opsUIqknRC7y1%2BSdxUfuyQbQhjbTU1KYWTSzajEhUuZJCDPZ1oJjVSjuKYVelqJ9EdKZQpGzC33PPDBjqkAcUFUUre4qagzzZV%2Be7KAVn5MG1IbbA0uFfR5xpt83ZhN45M0VQboeFes70Bpz50k9JnK29tQ%2FSo26ylBor9uyB2S%2BDzwzC3yEKWvtja8O%2F0nLSRKHG%2FwxZFYy67B0ssRtPpHI%2Fkn0ii0tgtM88552LnOhlpYfKmf0sIe0xItsTm1FuJvDFZiUVXbH8RcO1ZU4858uxLIaqCn3VLrLQxQPHuKmwM&X-Amz-Signature=123f43824de935bce23e4abcc2b538d0652ae06d0443f2e4fb10d5dbf31d3af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6I6ODD7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZ5noZ%2FX1JNRCLS%2BgslQxn3vur3JNdF7CZM1TGwE9BgIhAO%2BolqXnBoDVgBP5BK2oB13DGQBWJFY6GNm83UPuH7JQKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1XJosZQC2OPSkhYMq3ANORDxidZH64VONFQQtabTRyF2AewjdUwXzNFgF8%2F7Yew7%2FWGhoH7rkwwyare%2BmlLttownsNdMlZUj2hQCe8wM55ScL64%2BQNL7u3cM75mY5NBb2A6m3n9laAEeqYUPfAn4yhm20E67kT3CwyxxK%2Bc0yQ3ZH%2BIF7qmYD352wRnK87PWk%2FmPgglhx5YC3Hbdzs6LhsIM9WS2dEdQpjLePE%2F1jNytAJqljKEBNP%2BOCGWdoAwpjvBRTQTxN6vs914S0PcHC5tmsnklbtWwTVfMq7ijU9g2AitZXiM3vbbNg4027yW79%2F1XrddeeKmFGOcAhRzUkWYDDcFmbMQkAlAzMfQF2Uc0cBpveEWNKZv8Rn7ljMxeTzgI9r09ErkOpPWFdKEXhXtHjUnJfnw4piObJeU4ZWqOzS%2BsKhgOX3qKvlLummCql94pVgQgyn1qyemTgC4G%2FYBcngbxm00dKr8%2BbwHnSmnmvl3Vik6ylp8T3ZLQewFFSKE2Hmqj6bsGiC6wAHoO%2BkmuOQgiNDLUsLk2uhBjcn4ec3wToWEtmpK%2BWLX8NM8riL9vxy6opsUIqknRC7y1%2BSdxUfuyQbQhjbTU1KYWTSzajEhUuZJCDPZ1oJjVSjuKYVelqJ9EdKZQpGzC33PPDBjqkAcUFUUre4qagzzZV%2Be7KAVn5MG1IbbA0uFfR5xpt83ZhN45M0VQboeFes70Bpz50k9JnK29tQ%2FSo26ylBor9uyB2S%2BDzwzC3yEKWvtja8O%2F0nLSRKHG%2FwxZFYy67B0ssRtPpHI%2Fkn0ii0tgtM88552LnOhlpYfKmf0sIe0xItsTm1FuJvDFZiUVXbH8RcO1ZU4858uxLIaqCn3VLrLQxQPHuKmwM&X-Amz-Signature=c89fe26c5d3f0df7f56234832c71a16a7e9674b6624a332e1ba666ab54cd8a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6I6ODD7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZ5noZ%2FX1JNRCLS%2BgslQxn3vur3JNdF7CZM1TGwE9BgIhAO%2BolqXnBoDVgBP5BK2oB13DGQBWJFY6GNm83UPuH7JQKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1XJosZQC2OPSkhYMq3ANORDxidZH64VONFQQtabTRyF2AewjdUwXzNFgF8%2F7Yew7%2FWGhoH7rkwwyare%2BmlLttownsNdMlZUj2hQCe8wM55ScL64%2BQNL7u3cM75mY5NBb2A6m3n9laAEeqYUPfAn4yhm20E67kT3CwyxxK%2Bc0yQ3ZH%2BIF7qmYD352wRnK87PWk%2FmPgglhx5YC3Hbdzs6LhsIM9WS2dEdQpjLePE%2F1jNytAJqljKEBNP%2BOCGWdoAwpjvBRTQTxN6vs914S0PcHC5tmsnklbtWwTVfMq7ijU9g2AitZXiM3vbbNg4027yW79%2F1XrddeeKmFGOcAhRzUkWYDDcFmbMQkAlAzMfQF2Uc0cBpveEWNKZv8Rn7ljMxeTzgI9r09ErkOpPWFdKEXhXtHjUnJfnw4piObJeU4ZWqOzS%2BsKhgOX3qKvlLummCql94pVgQgyn1qyemTgC4G%2FYBcngbxm00dKr8%2BbwHnSmnmvl3Vik6ylp8T3ZLQewFFSKE2Hmqj6bsGiC6wAHoO%2BkmuOQgiNDLUsLk2uhBjcn4ec3wToWEtmpK%2BWLX8NM8riL9vxy6opsUIqknRC7y1%2BSdxUfuyQbQhjbTU1KYWTSzajEhUuZJCDPZ1oJjVSjuKYVelqJ9EdKZQpGzC33PPDBjqkAcUFUUre4qagzzZV%2Be7KAVn5MG1IbbA0uFfR5xpt83ZhN45M0VQboeFes70Bpz50k9JnK29tQ%2FSo26ylBor9uyB2S%2BDzwzC3yEKWvtja8O%2F0nLSRKHG%2FwxZFYy67B0ssRtPpHI%2Fkn0ii0tgtM88552LnOhlpYfKmf0sIe0xItsTm1FuJvDFZiUVXbH8RcO1ZU4858uxLIaqCn3VLrLQxQPHuKmwM&X-Amz-Signature=4fa42a0be9608c3085a9078cddf2737febb086d36e8e2812ba291ec26839e871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6I6ODD7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZ5noZ%2FX1JNRCLS%2BgslQxn3vur3JNdF7CZM1TGwE9BgIhAO%2BolqXnBoDVgBP5BK2oB13DGQBWJFY6GNm83UPuH7JQKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1XJosZQC2OPSkhYMq3ANORDxidZH64VONFQQtabTRyF2AewjdUwXzNFgF8%2F7Yew7%2FWGhoH7rkwwyare%2BmlLttownsNdMlZUj2hQCe8wM55ScL64%2BQNL7u3cM75mY5NBb2A6m3n9laAEeqYUPfAn4yhm20E67kT3CwyxxK%2Bc0yQ3ZH%2BIF7qmYD352wRnK87PWk%2FmPgglhx5YC3Hbdzs6LhsIM9WS2dEdQpjLePE%2F1jNytAJqljKEBNP%2BOCGWdoAwpjvBRTQTxN6vs914S0PcHC5tmsnklbtWwTVfMq7ijU9g2AitZXiM3vbbNg4027yW79%2F1XrddeeKmFGOcAhRzUkWYDDcFmbMQkAlAzMfQF2Uc0cBpveEWNKZv8Rn7ljMxeTzgI9r09ErkOpPWFdKEXhXtHjUnJfnw4piObJeU4ZWqOzS%2BsKhgOX3qKvlLummCql94pVgQgyn1qyemTgC4G%2FYBcngbxm00dKr8%2BbwHnSmnmvl3Vik6ylp8T3ZLQewFFSKE2Hmqj6bsGiC6wAHoO%2BkmuOQgiNDLUsLk2uhBjcn4ec3wToWEtmpK%2BWLX8NM8riL9vxy6opsUIqknRC7y1%2BSdxUfuyQbQhjbTU1KYWTSzajEhUuZJCDPZ1oJjVSjuKYVelqJ9EdKZQpGzC33PPDBjqkAcUFUUre4qagzzZV%2Be7KAVn5MG1IbbA0uFfR5xpt83ZhN45M0VQboeFes70Bpz50k9JnK29tQ%2FSo26ylBor9uyB2S%2BDzwzC3yEKWvtja8O%2F0nLSRKHG%2FwxZFYy67B0ssRtPpHI%2Fkn0ii0tgtM88552LnOhlpYfKmf0sIe0xItsTm1FuJvDFZiUVXbH8RcO1ZU4858uxLIaqCn3VLrLQxQPHuKmwM&X-Amz-Signature=2a3edb21beac8f27a406ba4435b8418a192dfe1fcdfbe7565c1621d847656217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6I6ODD7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZ5noZ%2FX1JNRCLS%2BgslQxn3vur3JNdF7CZM1TGwE9BgIhAO%2BolqXnBoDVgBP5BK2oB13DGQBWJFY6GNm83UPuH7JQKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1XJosZQC2OPSkhYMq3ANORDxidZH64VONFQQtabTRyF2AewjdUwXzNFgF8%2F7Yew7%2FWGhoH7rkwwyare%2BmlLttownsNdMlZUj2hQCe8wM55ScL64%2BQNL7u3cM75mY5NBb2A6m3n9laAEeqYUPfAn4yhm20E67kT3CwyxxK%2Bc0yQ3ZH%2BIF7qmYD352wRnK87PWk%2FmPgglhx5YC3Hbdzs6LhsIM9WS2dEdQpjLePE%2F1jNytAJqljKEBNP%2BOCGWdoAwpjvBRTQTxN6vs914S0PcHC5tmsnklbtWwTVfMq7ijU9g2AitZXiM3vbbNg4027yW79%2F1XrddeeKmFGOcAhRzUkWYDDcFmbMQkAlAzMfQF2Uc0cBpveEWNKZv8Rn7ljMxeTzgI9r09ErkOpPWFdKEXhXtHjUnJfnw4piObJeU4ZWqOzS%2BsKhgOX3qKvlLummCql94pVgQgyn1qyemTgC4G%2FYBcngbxm00dKr8%2BbwHnSmnmvl3Vik6ylp8T3ZLQewFFSKE2Hmqj6bsGiC6wAHoO%2BkmuOQgiNDLUsLk2uhBjcn4ec3wToWEtmpK%2BWLX8NM8riL9vxy6opsUIqknRC7y1%2BSdxUfuyQbQhjbTU1KYWTSzajEhUuZJCDPZ1oJjVSjuKYVelqJ9EdKZQpGzC33PPDBjqkAcUFUUre4qagzzZV%2Be7KAVn5MG1IbbA0uFfR5xpt83ZhN45M0VQboeFes70Bpz50k9JnK29tQ%2FSo26ylBor9uyB2S%2BDzwzC3yEKWvtja8O%2F0nLSRKHG%2FwxZFYy67B0ssRtPpHI%2Fkn0ii0tgtM88552LnOhlpYfKmf0sIe0xItsTm1FuJvDFZiUVXbH8RcO1ZU4858uxLIaqCn3VLrLQxQPHuKmwM&X-Amz-Signature=27391577a01c9bc54c9edda96508168c8d309993c0f40f735ba6336d269243bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
