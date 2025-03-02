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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR5X3SV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDAeqS8NVQAUimtaStGvVLbzuWyVr67XdZR5u0dvuOwmAiBiNS%2B44YNbwewJvpymeruJQbYZnl8Agn7rWvJF%2FyQOaiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMur%2Bb%2Bqzcjm4HEwWtKtwDE6AbdzWRkB0xcwKVwGa6k6iOlOnVGtmL36i4Ee5MHsvLJ%2FggM2pq6zSAGGyL7eEBfyh9qcvCUv8Eu656kLDlqW%2FCME1edC46rrOWi01bWB1ZR1m4kI8BM4DNJlDKs%2BuRqMUuRozX9vVfQB6REaLhBQdCWWtjoDb3tIhfjZfbqZFjIeruTrwUdIl6FCQP9Knv90rW8Rswa%2BgG2bSryPXoIVYKzPLIxWfA2Yxwi9PCTgWBtni4Otgqu9IDC%2BI%2FWGm60Qt0H%2BDMcH8fbTTFtP4ZKsQVCMTJS26GbM6Llx4B2Wk3%2B2vqMsb%2Fn6r3tw5ticCYbThHvV2mC26s5DgxTSgx9uElc2fTP4v8Ngs6EryXhqF%2FppaI9Wa1%2BT6vmGwfKWcnvxm6GK%2FNTaoYcNhUKiCUl0Ru76VaobHat5d6MyQZ12AiBreoWjOJFTTaAvh%2BBHEmBLNgpKvu0Ox%2BY2EP4yKDYvmo68k%2BRIQNEwk0H6IypC%2FkOQGiXFx6XTYKmXYiyRcL6OmAOtxMZbaGdf7TYi43q8sO3LlJdtZFj%2F6vsnhBamja8ZnSCLcCYLSXj30Yjo1PcQ5urTL3X0eHZI%2FssC0yfr5NOc8FETf%2BCOlxOkUMS48VCs00EHEEYj12rxAw3LePvgY6pgFOZaZpFKAXqB2S3BZcA%2B%2Fc8HKlQ7HdM3L1gjCNCaeR9mY9dELcfAJlrjZkASp5NiempKLjeNetW3zfdsUbNMOsoA9dDUZfq0u0CnpqAi8%2FpffO2n6LM7OWa6In3fpciZg6ybcTgbgVAZ1a9Y8xnYQxqmI%2BuZCtAmOu4bDTNKVf5M7aJsDo%2F8o0M0MirzsarrrK1Q02R35riVgooF38dzP3o3FFmSx8&X-Amz-Signature=db59a774722efcb84139ea7e6499ab3d50ec72ef87e7452aecfbaf73adfa1a74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR5X3SV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDAeqS8NVQAUimtaStGvVLbzuWyVr67XdZR5u0dvuOwmAiBiNS%2B44YNbwewJvpymeruJQbYZnl8Agn7rWvJF%2FyQOaiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMur%2Bb%2Bqzcjm4HEwWtKtwDE6AbdzWRkB0xcwKVwGa6k6iOlOnVGtmL36i4Ee5MHsvLJ%2FggM2pq6zSAGGyL7eEBfyh9qcvCUv8Eu656kLDlqW%2FCME1edC46rrOWi01bWB1ZR1m4kI8BM4DNJlDKs%2BuRqMUuRozX9vVfQB6REaLhBQdCWWtjoDb3tIhfjZfbqZFjIeruTrwUdIl6FCQP9Knv90rW8Rswa%2BgG2bSryPXoIVYKzPLIxWfA2Yxwi9PCTgWBtni4Otgqu9IDC%2BI%2FWGm60Qt0H%2BDMcH8fbTTFtP4ZKsQVCMTJS26GbM6Llx4B2Wk3%2B2vqMsb%2Fn6r3tw5ticCYbThHvV2mC26s5DgxTSgx9uElc2fTP4v8Ngs6EryXhqF%2FppaI9Wa1%2BT6vmGwfKWcnvxm6GK%2FNTaoYcNhUKiCUl0Ru76VaobHat5d6MyQZ12AiBreoWjOJFTTaAvh%2BBHEmBLNgpKvu0Ox%2BY2EP4yKDYvmo68k%2BRIQNEwk0H6IypC%2FkOQGiXFx6XTYKmXYiyRcL6OmAOtxMZbaGdf7TYi43q8sO3LlJdtZFj%2F6vsnhBamja8ZnSCLcCYLSXj30Yjo1PcQ5urTL3X0eHZI%2FssC0yfr5NOc8FETf%2BCOlxOkUMS48VCs00EHEEYj12rxAw3LePvgY6pgFOZaZpFKAXqB2S3BZcA%2B%2Fc8HKlQ7HdM3L1gjCNCaeR9mY9dELcfAJlrjZkASp5NiempKLjeNetW3zfdsUbNMOsoA9dDUZfq0u0CnpqAi8%2FpffO2n6LM7OWa6In3fpciZg6ybcTgbgVAZ1a9Y8xnYQxqmI%2BuZCtAmOu4bDTNKVf5M7aJsDo%2F8o0M0MirzsarrrK1Q02R35riVgooF38dzP3o3FFmSx8&X-Amz-Signature=45de6b5c4b33858b541a9c27cc41c419f7d31c53ee76a6c7a6b74cd3c6d6e6a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR5X3SV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDAeqS8NVQAUimtaStGvVLbzuWyVr67XdZR5u0dvuOwmAiBiNS%2B44YNbwewJvpymeruJQbYZnl8Agn7rWvJF%2FyQOaiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMur%2Bb%2Bqzcjm4HEwWtKtwDE6AbdzWRkB0xcwKVwGa6k6iOlOnVGtmL36i4Ee5MHsvLJ%2FggM2pq6zSAGGyL7eEBfyh9qcvCUv8Eu656kLDlqW%2FCME1edC46rrOWi01bWB1ZR1m4kI8BM4DNJlDKs%2BuRqMUuRozX9vVfQB6REaLhBQdCWWtjoDb3tIhfjZfbqZFjIeruTrwUdIl6FCQP9Knv90rW8Rswa%2BgG2bSryPXoIVYKzPLIxWfA2Yxwi9PCTgWBtni4Otgqu9IDC%2BI%2FWGm60Qt0H%2BDMcH8fbTTFtP4ZKsQVCMTJS26GbM6Llx4B2Wk3%2B2vqMsb%2Fn6r3tw5ticCYbThHvV2mC26s5DgxTSgx9uElc2fTP4v8Ngs6EryXhqF%2FppaI9Wa1%2BT6vmGwfKWcnvxm6GK%2FNTaoYcNhUKiCUl0Ru76VaobHat5d6MyQZ12AiBreoWjOJFTTaAvh%2BBHEmBLNgpKvu0Ox%2BY2EP4yKDYvmo68k%2BRIQNEwk0H6IypC%2FkOQGiXFx6XTYKmXYiyRcL6OmAOtxMZbaGdf7TYi43q8sO3LlJdtZFj%2F6vsnhBamja8ZnSCLcCYLSXj30Yjo1PcQ5urTL3X0eHZI%2FssC0yfr5NOc8FETf%2BCOlxOkUMS48VCs00EHEEYj12rxAw3LePvgY6pgFOZaZpFKAXqB2S3BZcA%2B%2Fc8HKlQ7HdM3L1gjCNCaeR9mY9dELcfAJlrjZkASp5NiempKLjeNetW3zfdsUbNMOsoA9dDUZfq0u0CnpqAi8%2FpffO2n6LM7OWa6In3fpciZg6ybcTgbgVAZ1a9Y8xnYQxqmI%2BuZCtAmOu4bDTNKVf5M7aJsDo%2F8o0M0MirzsarrrK1Q02R35riVgooF38dzP3o3FFmSx8&X-Amz-Signature=9a64f8a7143a59a1813865412cdd5871b3ff0d26c361d0603ed9f97d0d2b881d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR5X3SV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDAeqS8NVQAUimtaStGvVLbzuWyVr67XdZR5u0dvuOwmAiBiNS%2B44YNbwewJvpymeruJQbYZnl8Agn7rWvJF%2FyQOaiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMur%2Bb%2Bqzcjm4HEwWtKtwDE6AbdzWRkB0xcwKVwGa6k6iOlOnVGtmL36i4Ee5MHsvLJ%2FggM2pq6zSAGGyL7eEBfyh9qcvCUv8Eu656kLDlqW%2FCME1edC46rrOWi01bWB1ZR1m4kI8BM4DNJlDKs%2BuRqMUuRozX9vVfQB6REaLhBQdCWWtjoDb3tIhfjZfbqZFjIeruTrwUdIl6FCQP9Knv90rW8Rswa%2BgG2bSryPXoIVYKzPLIxWfA2Yxwi9PCTgWBtni4Otgqu9IDC%2BI%2FWGm60Qt0H%2BDMcH8fbTTFtP4ZKsQVCMTJS26GbM6Llx4B2Wk3%2B2vqMsb%2Fn6r3tw5ticCYbThHvV2mC26s5DgxTSgx9uElc2fTP4v8Ngs6EryXhqF%2FppaI9Wa1%2BT6vmGwfKWcnvxm6GK%2FNTaoYcNhUKiCUl0Ru76VaobHat5d6MyQZ12AiBreoWjOJFTTaAvh%2BBHEmBLNgpKvu0Ox%2BY2EP4yKDYvmo68k%2BRIQNEwk0H6IypC%2FkOQGiXFx6XTYKmXYiyRcL6OmAOtxMZbaGdf7TYi43q8sO3LlJdtZFj%2F6vsnhBamja8ZnSCLcCYLSXj30Yjo1PcQ5urTL3X0eHZI%2FssC0yfr5NOc8FETf%2BCOlxOkUMS48VCs00EHEEYj12rxAw3LePvgY6pgFOZaZpFKAXqB2S3BZcA%2B%2Fc8HKlQ7HdM3L1gjCNCaeR9mY9dELcfAJlrjZkASp5NiempKLjeNetW3zfdsUbNMOsoA9dDUZfq0u0CnpqAi8%2FpffO2n6LM7OWa6In3fpciZg6ybcTgbgVAZ1a9Y8xnYQxqmI%2BuZCtAmOu4bDTNKVf5M7aJsDo%2F8o0M0MirzsarrrK1Q02R35riVgooF38dzP3o3FFmSx8&X-Amz-Signature=cd690a4403cf9f8fcecc99859695fb9ae59d458e97fdaadb896bef9121990b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR5X3SV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDAeqS8NVQAUimtaStGvVLbzuWyVr67XdZR5u0dvuOwmAiBiNS%2B44YNbwewJvpymeruJQbYZnl8Agn7rWvJF%2FyQOaiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMur%2Bb%2Bqzcjm4HEwWtKtwDE6AbdzWRkB0xcwKVwGa6k6iOlOnVGtmL36i4Ee5MHsvLJ%2FggM2pq6zSAGGyL7eEBfyh9qcvCUv8Eu656kLDlqW%2FCME1edC46rrOWi01bWB1ZR1m4kI8BM4DNJlDKs%2BuRqMUuRozX9vVfQB6REaLhBQdCWWtjoDb3tIhfjZfbqZFjIeruTrwUdIl6FCQP9Knv90rW8Rswa%2BgG2bSryPXoIVYKzPLIxWfA2Yxwi9PCTgWBtni4Otgqu9IDC%2BI%2FWGm60Qt0H%2BDMcH8fbTTFtP4ZKsQVCMTJS26GbM6Llx4B2Wk3%2B2vqMsb%2Fn6r3tw5ticCYbThHvV2mC26s5DgxTSgx9uElc2fTP4v8Ngs6EryXhqF%2FppaI9Wa1%2BT6vmGwfKWcnvxm6GK%2FNTaoYcNhUKiCUl0Ru76VaobHat5d6MyQZ12AiBreoWjOJFTTaAvh%2BBHEmBLNgpKvu0Ox%2BY2EP4yKDYvmo68k%2BRIQNEwk0H6IypC%2FkOQGiXFx6XTYKmXYiyRcL6OmAOtxMZbaGdf7TYi43q8sO3LlJdtZFj%2F6vsnhBamja8ZnSCLcCYLSXj30Yjo1PcQ5urTL3X0eHZI%2FssC0yfr5NOc8FETf%2BCOlxOkUMS48VCs00EHEEYj12rxAw3LePvgY6pgFOZaZpFKAXqB2S3BZcA%2B%2Fc8HKlQ7HdM3L1gjCNCaeR9mY9dELcfAJlrjZkASp5NiempKLjeNetW3zfdsUbNMOsoA9dDUZfq0u0CnpqAi8%2FpffO2n6LM7OWa6In3fpciZg6ybcTgbgVAZ1a9Y8xnYQxqmI%2BuZCtAmOu4bDTNKVf5M7aJsDo%2F8o0M0MirzsarrrK1Q02R35riVgooF38dzP3o3FFmSx8&X-Amz-Signature=d99b82c3519a2ecc8b930af42aaa77d28df2677b5a2b19da7ad0399b10dcd65d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR5X3SV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDAeqS8NVQAUimtaStGvVLbzuWyVr67XdZR5u0dvuOwmAiBiNS%2B44YNbwewJvpymeruJQbYZnl8Agn7rWvJF%2FyQOaiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMur%2Bb%2Bqzcjm4HEwWtKtwDE6AbdzWRkB0xcwKVwGa6k6iOlOnVGtmL36i4Ee5MHsvLJ%2FggM2pq6zSAGGyL7eEBfyh9qcvCUv8Eu656kLDlqW%2FCME1edC46rrOWi01bWB1ZR1m4kI8BM4DNJlDKs%2BuRqMUuRozX9vVfQB6REaLhBQdCWWtjoDb3tIhfjZfbqZFjIeruTrwUdIl6FCQP9Knv90rW8Rswa%2BgG2bSryPXoIVYKzPLIxWfA2Yxwi9PCTgWBtni4Otgqu9IDC%2BI%2FWGm60Qt0H%2BDMcH8fbTTFtP4ZKsQVCMTJS26GbM6Llx4B2Wk3%2B2vqMsb%2Fn6r3tw5ticCYbThHvV2mC26s5DgxTSgx9uElc2fTP4v8Ngs6EryXhqF%2FppaI9Wa1%2BT6vmGwfKWcnvxm6GK%2FNTaoYcNhUKiCUl0Ru76VaobHat5d6MyQZ12AiBreoWjOJFTTaAvh%2BBHEmBLNgpKvu0Ox%2BY2EP4yKDYvmo68k%2BRIQNEwk0H6IypC%2FkOQGiXFx6XTYKmXYiyRcL6OmAOtxMZbaGdf7TYi43q8sO3LlJdtZFj%2F6vsnhBamja8ZnSCLcCYLSXj30Yjo1PcQ5urTL3X0eHZI%2FssC0yfr5NOc8FETf%2BCOlxOkUMS48VCs00EHEEYj12rxAw3LePvgY6pgFOZaZpFKAXqB2S3BZcA%2B%2Fc8HKlQ7HdM3L1gjCNCaeR9mY9dELcfAJlrjZkASp5NiempKLjeNetW3zfdsUbNMOsoA9dDUZfq0u0CnpqAi8%2FpffO2n6LM7OWa6In3fpciZg6ybcTgbgVAZ1a9Y8xnYQxqmI%2BuZCtAmOu4bDTNKVf5M7aJsDo%2F8o0M0MirzsarrrK1Q02R35riVgooF38dzP3o3FFmSx8&X-Amz-Signature=e08d6d89b1160d898cd1d1c8db22136aab4e3d05f6085498cdd6cd7ed00f1a60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR5X3SV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDAeqS8NVQAUimtaStGvVLbzuWyVr67XdZR5u0dvuOwmAiBiNS%2B44YNbwewJvpymeruJQbYZnl8Agn7rWvJF%2FyQOaiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMur%2Bb%2Bqzcjm4HEwWtKtwDE6AbdzWRkB0xcwKVwGa6k6iOlOnVGtmL36i4Ee5MHsvLJ%2FggM2pq6zSAGGyL7eEBfyh9qcvCUv8Eu656kLDlqW%2FCME1edC46rrOWi01bWB1ZR1m4kI8BM4DNJlDKs%2BuRqMUuRozX9vVfQB6REaLhBQdCWWtjoDb3tIhfjZfbqZFjIeruTrwUdIl6FCQP9Knv90rW8Rswa%2BgG2bSryPXoIVYKzPLIxWfA2Yxwi9PCTgWBtni4Otgqu9IDC%2BI%2FWGm60Qt0H%2BDMcH8fbTTFtP4ZKsQVCMTJS26GbM6Llx4B2Wk3%2B2vqMsb%2Fn6r3tw5ticCYbThHvV2mC26s5DgxTSgx9uElc2fTP4v8Ngs6EryXhqF%2FppaI9Wa1%2BT6vmGwfKWcnvxm6GK%2FNTaoYcNhUKiCUl0Ru76VaobHat5d6MyQZ12AiBreoWjOJFTTaAvh%2BBHEmBLNgpKvu0Ox%2BY2EP4yKDYvmo68k%2BRIQNEwk0H6IypC%2FkOQGiXFx6XTYKmXYiyRcL6OmAOtxMZbaGdf7TYi43q8sO3LlJdtZFj%2F6vsnhBamja8ZnSCLcCYLSXj30Yjo1PcQ5urTL3X0eHZI%2FssC0yfr5NOc8FETf%2BCOlxOkUMS48VCs00EHEEYj12rxAw3LePvgY6pgFOZaZpFKAXqB2S3BZcA%2B%2Fc8HKlQ7HdM3L1gjCNCaeR9mY9dELcfAJlrjZkASp5NiempKLjeNetW3zfdsUbNMOsoA9dDUZfq0u0CnpqAi8%2FpffO2n6LM7OWa6In3fpciZg6ybcTgbgVAZ1a9Y8xnYQxqmI%2BuZCtAmOu4bDTNKVf5M7aJsDo%2F8o0M0MirzsarrrK1Q02R35riVgooF38dzP3o3FFmSx8&X-Amz-Signature=3cf0adc4de6d871c0f86bb4529d754fc387fecf7433ded84afdbb5436e7dd0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR5X3SV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDAeqS8NVQAUimtaStGvVLbzuWyVr67XdZR5u0dvuOwmAiBiNS%2B44YNbwewJvpymeruJQbYZnl8Agn7rWvJF%2FyQOaiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMur%2Bb%2Bqzcjm4HEwWtKtwDE6AbdzWRkB0xcwKVwGa6k6iOlOnVGtmL36i4Ee5MHsvLJ%2FggM2pq6zSAGGyL7eEBfyh9qcvCUv8Eu656kLDlqW%2FCME1edC46rrOWi01bWB1ZR1m4kI8BM4DNJlDKs%2BuRqMUuRozX9vVfQB6REaLhBQdCWWtjoDb3tIhfjZfbqZFjIeruTrwUdIl6FCQP9Knv90rW8Rswa%2BgG2bSryPXoIVYKzPLIxWfA2Yxwi9PCTgWBtni4Otgqu9IDC%2BI%2FWGm60Qt0H%2BDMcH8fbTTFtP4ZKsQVCMTJS26GbM6Llx4B2Wk3%2B2vqMsb%2Fn6r3tw5ticCYbThHvV2mC26s5DgxTSgx9uElc2fTP4v8Ngs6EryXhqF%2FppaI9Wa1%2BT6vmGwfKWcnvxm6GK%2FNTaoYcNhUKiCUl0Ru76VaobHat5d6MyQZ12AiBreoWjOJFTTaAvh%2BBHEmBLNgpKvu0Ox%2BY2EP4yKDYvmo68k%2BRIQNEwk0H6IypC%2FkOQGiXFx6XTYKmXYiyRcL6OmAOtxMZbaGdf7TYi43q8sO3LlJdtZFj%2F6vsnhBamja8ZnSCLcCYLSXj30Yjo1PcQ5urTL3X0eHZI%2FssC0yfr5NOc8FETf%2BCOlxOkUMS48VCs00EHEEYj12rxAw3LePvgY6pgFOZaZpFKAXqB2S3BZcA%2B%2Fc8HKlQ7HdM3L1gjCNCaeR9mY9dELcfAJlrjZkASp5NiempKLjeNetW3zfdsUbNMOsoA9dDUZfq0u0CnpqAi8%2FpffO2n6LM7OWa6In3fpciZg6ybcTgbgVAZ1a9Y8xnYQxqmI%2BuZCtAmOu4bDTNKVf5M7aJsDo%2F8o0M0MirzsarrrK1Q02R35riVgooF38dzP3o3FFmSx8&X-Amz-Signature=0968b96715775bdb5651193c54d3f69ce8d4836f691d7e335562e66f4d0978d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
