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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=d9c44c9cde887b131f8dff339aa9f8a6988488b1a0156647947106cb16fb5a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=6e57db4cb4b0df78678e601530dbe7253b5d8c7cb59d97ab4190bdfa1c93bafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=9a11a431c86ced52379062ac4d3b3f848cdb9e7a76e00947cca788eefc2089cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=ac44a12a7b600ddb3d0484678f42f69da54d3881fa3658786eb3d5ff9a4c254d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=1655bb92a80b3d7225c0b219a7c4cbb2a8f427e330b5bc20eb731b2de92e1065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=87c3113c70ebcc4126c4f1894d4c5659b17bb2dc6fb317a232d51742392ac3e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=0e768eb8eb7daf9ebd09c05c9e9a6d15fce583b73c4d2dc80a9b61ea9081b09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OUXTYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA48NXQTgr74aE8lCAiOfEWBSPlDXkTRG8lUkTdbXo2AiA1C6%2BdjJJn%2BBitha%2FsfIB1Xcg0b0HJmvWd%2B3g5HYra%2FiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2BvFFroohrwD2gY0KtwD0l8orIAHub68b6YYfdrHkWLVY2DG73QZpJ%2B5k1VGsAcydYephDsjCPHr0nmK3WgW6s5kzcGoIuvO5mk1rjoPbujkOwDUqv2UlUtWFYMk7MUMIcYcPUvE1T59rUopgAxv0xDlSoel8%2FMf7EruSBAxL7MxBJcW3ltKJklU1fXGkUeHunhNgWg7Velx817%2BWqKIal9T%2Bc73zbOHvAjR3M8RhJuG0NPC3BBSNr95TiKR8ahZ7bFa1qwd4Br3580C1BDmlqimduyZtqBg3OvVeI%2F2UE8giVg5%2FyPIuJqTL6sSP3YsNOiG5rsx54RVSdqKKUPccKXIg0OHqGgGvSmmgwvQ6sm97X%2BqjDovsqRWucM2eCvxdpWSQhdI7ZgSMbdFx4Gybf7%2FApRByrtU60zV6fbfyxGFwWR9WYXf%2BcgSgTQMbKG8uS57afv%2FJaxaROwZziTN755Gr5DgrAZwWzdA7ZFty5iuiKV9jOnHHV6iLHso6HRwzWCkcFeMm8CuEOhE4IT%2B0slb7rffQqVz5I8NU4E%2FRHYELOlaPtTlXJ7wc0L9iRs3IDBFRx47vq65iD7SVjSfVbiZOkYX14leSKY1xknSVX2bgSH%2BLwjYYulI%2BryGfrAIKAn1owiUi3TWyxYw5o%2FbwgY6pgEI0rNlVNP9QghYdKrIeNdhTB98F%2FvokeFPej9Na%2FoNFqyBhctM1RUwvWEtyaQO1PmCfuyk7CWXTW4zX%2FmJRUvnmwLcT%2FDqzc0eA9B1aZvCu81P9VyidLCmlEGr%2FJxnTf288ILNqfQXyPoNG9hWjwQjNh4lGnc3h6H0WB1MYLdH%2BdwzEfDnjeMfDV90RE0rD8FAHRt8yXN9MELVdbfFiaB%2FOw66DYs7&X-Amz-Signature=2eb6571de6436b76b009f4d047d94d067af154bd7985ca1a7e1650daee7e3dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
