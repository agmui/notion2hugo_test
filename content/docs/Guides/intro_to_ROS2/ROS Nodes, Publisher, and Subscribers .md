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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH53LNXH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK1tQOxsdf7EFxjkf5gM6PnOCahd5jJDpiEhAUSw9LuAiEA%2BdEMTfOxIuxebLxbzfZ1WaULBSVqxsNBt2a38Jnb6SEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB3SolNS3tUqV2qoyrcA2fKuHPnGzY%2FhDqc%2BTZwyuVOHAIvKrMqWwPUmOt6M1pEBCEc5AujRlH%2BEKCbfnbJd19C5JVwYVeYqISpEvyLtHlseZNJs5K3nejXh6ufIJACI9vpkVQqF24E5jgvRIwIF9JmWUA09GbmhWbdW9Ng5lp2FFxogrTgO44BRMOuJglq%2Fk7%2FcezuWM07qPXK0XFdH1jxNGmgScod8hj7wOp2RPzMm8wKQnC8zdJVkf9GGHFEDvcv6iq1RxHgEkw%2BDbcTCORyeEua5bi5YdWuHBvySqzLYOhQWHPOqmROgbcEtzKJNstHkcU8%2BmCePVexVDvT1XNFYppLPrCu399eOErTCgzPZZe8QG6m51qP%2B%2FtFUiuE9xlVESqq7MAV6lW3kQbr%2FRCbWOJT8XMv6mepj2B%2FGcmOCVGkY2nS5ecqHgnsmU0TnPcIaWjT%2FVzBKPW%2FDLgBYnxh%2BNoWshSo%2FNLWaI5c4z%2B53FBOTR%2BR6nQKgWuMgpIY7aql9kwc5U8fT49JzWIYHMQF0LQfgNnvFOV73U8hNHOIi9aLR%2Bs7%2Faz4Hf7HdeL4uvspmAukWZ1Pg122%2FM8XOzBvxGzNehONVSIcSI4hp1%2BNmLQEighgYyWFfIC%2FHj6GLfET3iO3tlliQiCWMNTAgL0GOqUBDkNP0VKPrEV8AfbGDrM0M%2Fz4tdTcdNeuTkPbdTutVcklxpQd%2FfHj6zqvGkHXoYp4s%2FzqXfY3hsnT05mhxW9Q%2B5IdAQGcd4CoSZJhwrAlQE5gI0ISy%2BjoIKIKHdEZmtS94OD8CnF0So6XZf22PQIGW8zv36%2FsqZGQCPIMjY6e7i7CbqMc9C2bSYU80P%2B47vJu2KrUa56n5CflT1YUPc2PrL6ZwEoF&X-Amz-Signature=ed5444ec0e3232289e8ee6c76c52046018e19497317e52b3afaf6631cf044cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH53LNXH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK1tQOxsdf7EFxjkf5gM6PnOCahd5jJDpiEhAUSw9LuAiEA%2BdEMTfOxIuxebLxbzfZ1WaULBSVqxsNBt2a38Jnb6SEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB3SolNS3tUqV2qoyrcA2fKuHPnGzY%2FhDqc%2BTZwyuVOHAIvKrMqWwPUmOt6M1pEBCEc5AujRlH%2BEKCbfnbJd19C5JVwYVeYqISpEvyLtHlseZNJs5K3nejXh6ufIJACI9vpkVQqF24E5jgvRIwIF9JmWUA09GbmhWbdW9Ng5lp2FFxogrTgO44BRMOuJglq%2Fk7%2FcezuWM07qPXK0XFdH1jxNGmgScod8hj7wOp2RPzMm8wKQnC8zdJVkf9GGHFEDvcv6iq1RxHgEkw%2BDbcTCORyeEua5bi5YdWuHBvySqzLYOhQWHPOqmROgbcEtzKJNstHkcU8%2BmCePVexVDvT1XNFYppLPrCu399eOErTCgzPZZe8QG6m51qP%2B%2FtFUiuE9xlVESqq7MAV6lW3kQbr%2FRCbWOJT8XMv6mepj2B%2FGcmOCVGkY2nS5ecqHgnsmU0TnPcIaWjT%2FVzBKPW%2FDLgBYnxh%2BNoWshSo%2FNLWaI5c4z%2B53FBOTR%2BR6nQKgWuMgpIY7aql9kwc5U8fT49JzWIYHMQF0LQfgNnvFOV73U8hNHOIi9aLR%2Bs7%2Faz4Hf7HdeL4uvspmAukWZ1Pg122%2FM8XOzBvxGzNehONVSIcSI4hp1%2BNmLQEighgYyWFfIC%2FHj6GLfET3iO3tlliQiCWMNTAgL0GOqUBDkNP0VKPrEV8AfbGDrM0M%2Fz4tdTcdNeuTkPbdTutVcklxpQd%2FfHj6zqvGkHXoYp4s%2FzqXfY3hsnT05mhxW9Q%2B5IdAQGcd4CoSZJhwrAlQE5gI0ISy%2BjoIKIKHdEZmtS94OD8CnF0So6XZf22PQIGW8zv36%2FsqZGQCPIMjY6e7i7CbqMc9C2bSYU80P%2B47vJu2KrUa56n5CflT1YUPc2PrL6ZwEoF&X-Amz-Signature=6c602731a314a570772d379e40d890d649de85f24e408837315ca3ec8fb730f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH53LNXH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK1tQOxsdf7EFxjkf5gM6PnOCahd5jJDpiEhAUSw9LuAiEA%2BdEMTfOxIuxebLxbzfZ1WaULBSVqxsNBt2a38Jnb6SEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB3SolNS3tUqV2qoyrcA2fKuHPnGzY%2FhDqc%2BTZwyuVOHAIvKrMqWwPUmOt6M1pEBCEc5AujRlH%2BEKCbfnbJd19C5JVwYVeYqISpEvyLtHlseZNJs5K3nejXh6ufIJACI9vpkVQqF24E5jgvRIwIF9JmWUA09GbmhWbdW9Ng5lp2FFxogrTgO44BRMOuJglq%2Fk7%2FcezuWM07qPXK0XFdH1jxNGmgScod8hj7wOp2RPzMm8wKQnC8zdJVkf9GGHFEDvcv6iq1RxHgEkw%2BDbcTCORyeEua5bi5YdWuHBvySqzLYOhQWHPOqmROgbcEtzKJNstHkcU8%2BmCePVexVDvT1XNFYppLPrCu399eOErTCgzPZZe8QG6m51qP%2B%2FtFUiuE9xlVESqq7MAV6lW3kQbr%2FRCbWOJT8XMv6mepj2B%2FGcmOCVGkY2nS5ecqHgnsmU0TnPcIaWjT%2FVzBKPW%2FDLgBYnxh%2BNoWshSo%2FNLWaI5c4z%2B53FBOTR%2BR6nQKgWuMgpIY7aql9kwc5U8fT49JzWIYHMQF0LQfgNnvFOV73U8hNHOIi9aLR%2Bs7%2Faz4Hf7HdeL4uvspmAukWZ1Pg122%2FM8XOzBvxGzNehONVSIcSI4hp1%2BNmLQEighgYyWFfIC%2FHj6GLfET3iO3tlliQiCWMNTAgL0GOqUBDkNP0VKPrEV8AfbGDrM0M%2Fz4tdTcdNeuTkPbdTutVcklxpQd%2FfHj6zqvGkHXoYp4s%2FzqXfY3hsnT05mhxW9Q%2B5IdAQGcd4CoSZJhwrAlQE5gI0ISy%2BjoIKIKHdEZmtS94OD8CnF0So6XZf22PQIGW8zv36%2FsqZGQCPIMjY6e7i7CbqMc9C2bSYU80P%2B47vJu2KrUa56n5CflT1YUPc2PrL6ZwEoF&X-Amz-Signature=224b475d54e557fccb61aeb3f596dac7d023a1baa09f354a5a4d7dc07d3c50e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH53LNXH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK1tQOxsdf7EFxjkf5gM6PnOCahd5jJDpiEhAUSw9LuAiEA%2BdEMTfOxIuxebLxbzfZ1WaULBSVqxsNBt2a38Jnb6SEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB3SolNS3tUqV2qoyrcA2fKuHPnGzY%2FhDqc%2BTZwyuVOHAIvKrMqWwPUmOt6M1pEBCEc5AujRlH%2BEKCbfnbJd19C5JVwYVeYqISpEvyLtHlseZNJs5K3nejXh6ufIJACI9vpkVQqF24E5jgvRIwIF9JmWUA09GbmhWbdW9Ng5lp2FFxogrTgO44BRMOuJglq%2Fk7%2FcezuWM07qPXK0XFdH1jxNGmgScod8hj7wOp2RPzMm8wKQnC8zdJVkf9GGHFEDvcv6iq1RxHgEkw%2BDbcTCORyeEua5bi5YdWuHBvySqzLYOhQWHPOqmROgbcEtzKJNstHkcU8%2BmCePVexVDvT1XNFYppLPrCu399eOErTCgzPZZe8QG6m51qP%2B%2FtFUiuE9xlVESqq7MAV6lW3kQbr%2FRCbWOJT8XMv6mepj2B%2FGcmOCVGkY2nS5ecqHgnsmU0TnPcIaWjT%2FVzBKPW%2FDLgBYnxh%2BNoWshSo%2FNLWaI5c4z%2B53FBOTR%2BR6nQKgWuMgpIY7aql9kwc5U8fT49JzWIYHMQF0LQfgNnvFOV73U8hNHOIi9aLR%2Bs7%2Faz4Hf7HdeL4uvspmAukWZ1Pg122%2FM8XOzBvxGzNehONVSIcSI4hp1%2BNmLQEighgYyWFfIC%2FHj6GLfET3iO3tlliQiCWMNTAgL0GOqUBDkNP0VKPrEV8AfbGDrM0M%2Fz4tdTcdNeuTkPbdTutVcklxpQd%2FfHj6zqvGkHXoYp4s%2FzqXfY3hsnT05mhxW9Q%2B5IdAQGcd4CoSZJhwrAlQE5gI0ISy%2BjoIKIKHdEZmtS94OD8CnF0So6XZf22PQIGW8zv36%2FsqZGQCPIMjY6e7i7CbqMc9C2bSYU80P%2B47vJu2KrUa56n5CflT1YUPc2PrL6ZwEoF&X-Amz-Signature=dfa6a6f0a99c8b6d6aa9fa6c86563a5d4c069e771032cecfb93d5803875ec1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH53LNXH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK1tQOxsdf7EFxjkf5gM6PnOCahd5jJDpiEhAUSw9LuAiEA%2BdEMTfOxIuxebLxbzfZ1WaULBSVqxsNBt2a38Jnb6SEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB3SolNS3tUqV2qoyrcA2fKuHPnGzY%2FhDqc%2BTZwyuVOHAIvKrMqWwPUmOt6M1pEBCEc5AujRlH%2BEKCbfnbJd19C5JVwYVeYqISpEvyLtHlseZNJs5K3nejXh6ufIJACI9vpkVQqF24E5jgvRIwIF9JmWUA09GbmhWbdW9Ng5lp2FFxogrTgO44BRMOuJglq%2Fk7%2FcezuWM07qPXK0XFdH1jxNGmgScod8hj7wOp2RPzMm8wKQnC8zdJVkf9GGHFEDvcv6iq1RxHgEkw%2BDbcTCORyeEua5bi5YdWuHBvySqzLYOhQWHPOqmROgbcEtzKJNstHkcU8%2BmCePVexVDvT1XNFYppLPrCu399eOErTCgzPZZe8QG6m51qP%2B%2FtFUiuE9xlVESqq7MAV6lW3kQbr%2FRCbWOJT8XMv6mepj2B%2FGcmOCVGkY2nS5ecqHgnsmU0TnPcIaWjT%2FVzBKPW%2FDLgBYnxh%2BNoWshSo%2FNLWaI5c4z%2B53FBOTR%2BR6nQKgWuMgpIY7aql9kwc5U8fT49JzWIYHMQF0LQfgNnvFOV73U8hNHOIi9aLR%2Bs7%2Faz4Hf7HdeL4uvspmAukWZ1Pg122%2FM8XOzBvxGzNehONVSIcSI4hp1%2BNmLQEighgYyWFfIC%2FHj6GLfET3iO3tlliQiCWMNTAgL0GOqUBDkNP0VKPrEV8AfbGDrM0M%2Fz4tdTcdNeuTkPbdTutVcklxpQd%2FfHj6zqvGkHXoYp4s%2FzqXfY3hsnT05mhxW9Q%2B5IdAQGcd4CoSZJhwrAlQE5gI0ISy%2BjoIKIKHdEZmtS94OD8CnF0So6XZf22PQIGW8zv36%2FsqZGQCPIMjY6e7i7CbqMc9C2bSYU80P%2B47vJu2KrUa56n5CflT1YUPc2PrL6ZwEoF&X-Amz-Signature=09ffe1b384cf9f0815295f479ed75e44cb448cd30c59a2f83d598d6f5e31f52a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH53LNXH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK1tQOxsdf7EFxjkf5gM6PnOCahd5jJDpiEhAUSw9LuAiEA%2BdEMTfOxIuxebLxbzfZ1WaULBSVqxsNBt2a38Jnb6SEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB3SolNS3tUqV2qoyrcA2fKuHPnGzY%2FhDqc%2BTZwyuVOHAIvKrMqWwPUmOt6M1pEBCEc5AujRlH%2BEKCbfnbJd19C5JVwYVeYqISpEvyLtHlseZNJs5K3nejXh6ufIJACI9vpkVQqF24E5jgvRIwIF9JmWUA09GbmhWbdW9Ng5lp2FFxogrTgO44BRMOuJglq%2Fk7%2FcezuWM07qPXK0XFdH1jxNGmgScod8hj7wOp2RPzMm8wKQnC8zdJVkf9GGHFEDvcv6iq1RxHgEkw%2BDbcTCORyeEua5bi5YdWuHBvySqzLYOhQWHPOqmROgbcEtzKJNstHkcU8%2BmCePVexVDvT1XNFYppLPrCu399eOErTCgzPZZe8QG6m51qP%2B%2FtFUiuE9xlVESqq7MAV6lW3kQbr%2FRCbWOJT8XMv6mepj2B%2FGcmOCVGkY2nS5ecqHgnsmU0TnPcIaWjT%2FVzBKPW%2FDLgBYnxh%2BNoWshSo%2FNLWaI5c4z%2B53FBOTR%2BR6nQKgWuMgpIY7aql9kwc5U8fT49JzWIYHMQF0LQfgNnvFOV73U8hNHOIi9aLR%2Bs7%2Faz4Hf7HdeL4uvspmAukWZ1Pg122%2FM8XOzBvxGzNehONVSIcSI4hp1%2BNmLQEighgYyWFfIC%2FHj6GLfET3iO3tlliQiCWMNTAgL0GOqUBDkNP0VKPrEV8AfbGDrM0M%2Fz4tdTcdNeuTkPbdTutVcklxpQd%2FfHj6zqvGkHXoYp4s%2FzqXfY3hsnT05mhxW9Q%2B5IdAQGcd4CoSZJhwrAlQE5gI0ISy%2BjoIKIKHdEZmtS94OD8CnF0So6XZf22PQIGW8zv36%2FsqZGQCPIMjY6e7i7CbqMc9C2bSYU80P%2B47vJu2KrUa56n5CflT1YUPc2PrL6ZwEoF&X-Amz-Signature=ac46ec424ab743d96637787bfc3768332b722968f4931b9ff95edd8da507fe71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH53LNXH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK1tQOxsdf7EFxjkf5gM6PnOCahd5jJDpiEhAUSw9LuAiEA%2BdEMTfOxIuxebLxbzfZ1WaULBSVqxsNBt2a38Jnb6SEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB3SolNS3tUqV2qoyrcA2fKuHPnGzY%2FhDqc%2BTZwyuVOHAIvKrMqWwPUmOt6M1pEBCEc5AujRlH%2BEKCbfnbJd19C5JVwYVeYqISpEvyLtHlseZNJs5K3nejXh6ufIJACI9vpkVQqF24E5jgvRIwIF9JmWUA09GbmhWbdW9Ng5lp2FFxogrTgO44BRMOuJglq%2Fk7%2FcezuWM07qPXK0XFdH1jxNGmgScod8hj7wOp2RPzMm8wKQnC8zdJVkf9GGHFEDvcv6iq1RxHgEkw%2BDbcTCORyeEua5bi5YdWuHBvySqzLYOhQWHPOqmROgbcEtzKJNstHkcU8%2BmCePVexVDvT1XNFYppLPrCu399eOErTCgzPZZe8QG6m51qP%2B%2FtFUiuE9xlVESqq7MAV6lW3kQbr%2FRCbWOJT8XMv6mepj2B%2FGcmOCVGkY2nS5ecqHgnsmU0TnPcIaWjT%2FVzBKPW%2FDLgBYnxh%2BNoWshSo%2FNLWaI5c4z%2B53FBOTR%2BR6nQKgWuMgpIY7aql9kwc5U8fT49JzWIYHMQF0LQfgNnvFOV73U8hNHOIi9aLR%2Bs7%2Faz4Hf7HdeL4uvspmAukWZ1Pg122%2FM8XOzBvxGzNehONVSIcSI4hp1%2BNmLQEighgYyWFfIC%2FHj6GLfET3iO3tlliQiCWMNTAgL0GOqUBDkNP0VKPrEV8AfbGDrM0M%2Fz4tdTcdNeuTkPbdTutVcklxpQd%2FfHj6zqvGkHXoYp4s%2FzqXfY3hsnT05mhxW9Q%2B5IdAQGcd4CoSZJhwrAlQE5gI0ISy%2BjoIKIKHdEZmtS94OD8CnF0So6XZf22PQIGW8zv36%2FsqZGQCPIMjY6e7i7CbqMc9C2bSYU80P%2B47vJu2KrUa56n5CflT1YUPc2PrL6ZwEoF&X-Amz-Signature=56b99664bbcada1f1d4a5f0f6c12fac5f5cf4c1b3a71950a3f79398e937f2039&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH53LNXH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK1tQOxsdf7EFxjkf5gM6PnOCahd5jJDpiEhAUSw9LuAiEA%2BdEMTfOxIuxebLxbzfZ1WaULBSVqxsNBt2a38Jnb6SEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB3SolNS3tUqV2qoyrcA2fKuHPnGzY%2FhDqc%2BTZwyuVOHAIvKrMqWwPUmOt6M1pEBCEc5AujRlH%2BEKCbfnbJd19C5JVwYVeYqISpEvyLtHlseZNJs5K3nejXh6ufIJACI9vpkVQqF24E5jgvRIwIF9JmWUA09GbmhWbdW9Ng5lp2FFxogrTgO44BRMOuJglq%2Fk7%2FcezuWM07qPXK0XFdH1jxNGmgScod8hj7wOp2RPzMm8wKQnC8zdJVkf9GGHFEDvcv6iq1RxHgEkw%2BDbcTCORyeEua5bi5YdWuHBvySqzLYOhQWHPOqmROgbcEtzKJNstHkcU8%2BmCePVexVDvT1XNFYppLPrCu399eOErTCgzPZZe8QG6m51qP%2B%2FtFUiuE9xlVESqq7MAV6lW3kQbr%2FRCbWOJT8XMv6mepj2B%2FGcmOCVGkY2nS5ecqHgnsmU0TnPcIaWjT%2FVzBKPW%2FDLgBYnxh%2BNoWshSo%2FNLWaI5c4z%2B53FBOTR%2BR6nQKgWuMgpIY7aql9kwc5U8fT49JzWIYHMQF0LQfgNnvFOV73U8hNHOIi9aLR%2Bs7%2Faz4Hf7HdeL4uvspmAukWZ1Pg122%2FM8XOzBvxGzNehONVSIcSI4hp1%2BNmLQEighgYyWFfIC%2FHj6GLfET3iO3tlliQiCWMNTAgL0GOqUBDkNP0VKPrEV8AfbGDrM0M%2Fz4tdTcdNeuTkPbdTutVcklxpQd%2FfHj6zqvGkHXoYp4s%2FzqXfY3hsnT05mhxW9Q%2B5IdAQGcd4CoSZJhwrAlQE5gI0ISy%2BjoIKIKHdEZmtS94OD8CnF0So6XZf22PQIGW8zv36%2FsqZGQCPIMjY6e7i7CbqMc9C2bSYU80P%2B47vJu2KrUa56n5CflT1YUPc2PrL6ZwEoF&X-Amz-Signature=98440480b87f2d2a5b3eb821ba639830210c0b3374f72a265c06abd8843e9899&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
