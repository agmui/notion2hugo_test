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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZJOV2O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlphot7aSeTfp2K5ibBjtx0WiAfSCmVKZ8F%2B9z6YJPKQIgDF7j%2BNk6jjQ8%2FKqtLQt4oCS%2BfXauTK1FPs6rpdIHSZAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIm8s4UJLuJP%2Bb0qHyrcA3vdiPyk2k1DP3T%2BtkBfEhi3FgVOJ6WbCyzzdsHlusooS1QM1wWULcU9203V2iICEkhC1Trvz0ByMNpY64cy91SZMCH5HQsQKEOKxiuFgPVLRd7A40JhHiT0mpuuXgtTgUm96t331vh8mO5aNlkXUMCpV6D%2FX1VzSsvxZPfRh2iEv60dB0iqqTTFpij334Tovy1FOlAb0nZXhsann14lhNZxDSxq6MQuJf0mieauT%2BSHm1G6yPXoR1Q64ZdBbxE3L%2BU5O0cPVBBofIz3Tk99x%2FGdwyx2EWbFylqYAATaiiWKmthLQbTjQxirA8DWwt8ai%2F83ypWh60d4blzoDReARDWgrqBlGsYu4%2FT8oBLuMxa4ARBwgBrqYaQtKYcqy8Y%2FtLBr8EsADckoq9HI%2BlaXIn9W8f1oalX5FckTDVvox5PJF7KasrZBwEzEKOE530rvBDhAvM4lJvptw%2FLN4HZI34snTbtkH%2F8Mg4GguXxh8ek4LHCkv4%2FRiIX7ZmEIIRK3gY7kswGRthCTYE50KxsX%2B09Zo9lahOwDsGaS2h3MY4OV%2BcD0459r1zyRLtscs72Y0ZShWS%2BFL1tu0Cm64z2M%2FATMDOVPnzW8GqKx2ZDJjlbB7lysvQXj%2Fc3pq9vLMO3Rr8AGOqUBdYqHE8%2BCRFB%2FDz4N0hjUzTl4GF6xslLvz%2F6uco5zJQOyApnMMg%2BRNUqKlhkaf41%2FCqChpACtjuzjBrJrn%2FV%2BvBTPrtJpOf92Eh1chx5y4uyRM0Xn2mLL7jJQr2c9Eb3Dyi%2FjxQSubEgoBVbOCtJ8df4kLmB1gKFnvgY0VTt7%2BHOpgOTgDzEAJQ6YXQy7gVWGsyibLj55ErrHM8mIpBKOlpdyxIRr&X-Amz-Signature=95bfdb9bc454cb248a6420f7dceafb7beb9a4957362e2445938a686095373a14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZJOV2O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlphot7aSeTfp2K5ibBjtx0WiAfSCmVKZ8F%2B9z6YJPKQIgDF7j%2BNk6jjQ8%2FKqtLQt4oCS%2BfXauTK1FPs6rpdIHSZAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIm8s4UJLuJP%2Bb0qHyrcA3vdiPyk2k1DP3T%2BtkBfEhi3FgVOJ6WbCyzzdsHlusooS1QM1wWULcU9203V2iICEkhC1Trvz0ByMNpY64cy91SZMCH5HQsQKEOKxiuFgPVLRd7A40JhHiT0mpuuXgtTgUm96t331vh8mO5aNlkXUMCpV6D%2FX1VzSsvxZPfRh2iEv60dB0iqqTTFpij334Tovy1FOlAb0nZXhsann14lhNZxDSxq6MQuJf0mieauT%2BSHm1G6yPXoR1Q64ZdBbxE3L%2BU5O0cPVBBofIz3Tk99x%2FGdwyx2EWbFylqYAATaiiWKmthLQbTjQxirA8DWwt8ai%2F83ypWh60d4blzoDReARDWgrqBlGsYu4%2FT8oBLuMxa4ARBwgBrqYaQtKYcqy8Y%2FtLBr8EsADckoq9HI%2BlaXIn9W8f1oalX5FckTDVvox5PJF7KasrZBwEzEKOE530rvBDhAvM4lJvptw%2FLN4HZI34snTbtkH%2F8Mg4GguXxh8ek4LHCkv4%2FRiIX7ZmEIIRK3gY7kswGRthCTYE50KxsX%2B09Zo9lahOwDsGaS2h3MY4OV%2BcD0459r1zyRLtscs72Y0ZShWS%2BFL1tu0Cm64z2M%2FATMDOVPnzW8GqKx2ZDJjlbB7lysvQXj%2Fc3pq9vLMO3Rr8AGOqUBdYqHE8%2BCRFB%2FDz4N0hjUzTl4GF6xslLvz%2F6uco5zJQOyApnMMg%2BRNUqKlhkaf41%2FCqChpACtjuzjBrJrn%2FV%2BvBTPrtJpOf92Eh1chx5y4uyRM0Xn2mLL7jJQr2c9Eb3Dyi%2FjxQSubEgoBVbOCtJ8df4kLmB1gKFnvgY0VTt7%2BHOpgOTgDzEAJQ6YXQy7gVWGsyibLj55ErrHM8mIpBKOlpdyxIRr&X-Amz-Signature=d1788fe9388ccae7a6ad8a36a77e57afa98951924e2f686fc9fc205845a8471f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZJOV2O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlphot7aSeTfp2K5ibBjtx0WiAfSCmVKZ8F%2B9z6YJPKQIgDF7j%2BNk6jjQ8%2FKqtLQt4oCS%2BfXauTK1FPs6rpdIHSZAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIm8s4UJLuJP%2Bb0qHyrcA3vdiPyk2k1DP3T%2BtkBfEhi3FgVOJ6WbCyzzdsHlusooS1QM1wWULcU9203V2iICEkhC1Trvz0ByMNpY64cy91SZMCH5HQsQKEOKxiuFgPVLRd7A40JhHiT0mpuuXgtTgUm96t331vh8mO5aNlkXUMCpV6D%2FX1VzSsvxZPfRh2iEv60dB0iqqTTFpij334Tovy1FOlAb0nZXhsann14lhNZxDSxq6MQuJf0mieauT%2BSHm1G6yPXoR1Q64ZdBbxE3L%2BU5O0cPVBBofIz3Tk99x%2FGdwyx2EWbFylqYAATaiiWKmthLQbTjQxirA8DWwt8ai%2F83ypWh60d4blzoDReARDWgrqBlGsYu4%2FT8oBLuMxa4ARBwgBrqYaQtKYcqy8Y%2FtLBr8EsADckoq9HI%2BlaXIn9W8f1oalX5FckTDVvox5PJF7KasrZBwEzEKOE530rvBDhAvM4lJvptw%2FLN4HZI34snTbtkH%2F8Mg4GguXxh8ek4LHCkv4%2FRiIX7ZmEIIRK3gY7kswGRthCTYE50KxsX%2B09Zo9lahOwDsGaS2h3MY4OV%2BcD0459r1zyRLtscs72Y0ZShWS%2BFL1tu0Cm64z2M%2FATMDOVPnzW8GqKx2ZDJjlbB7lysvQXj%2Fc3pq9vLMO3Rr8AGOqUBdYqHE8%2BCRFB%2FDz4N0hjUzTl4GF6xslLvz%2F6uco5zJQOyApnMMg%2BRNUqKlhkaf41%2FCqChpACtjuzjBrJrn%2FV%2BvBTPrtJpOf92Eh1chx5y4uyRM0Xn2mLL7jJQr2c9Eb3Dyi%2FjxQSubEgoBVbOCtJ8df4kLmB1gKFnvgY0VTt7%2BHOpgOTgDzEAJQ6YXQy7gVWGsyibLj55ErrHM8mIpBKOlpdyxIRr&X-Amz-Signature=b7d4b5d946c9565172d2d3835218723dbf6058ad303ca3da03a163c3ee7b153b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZJOV2O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlphot7aSeTfp2K5ibBjtx0WiAfSCmVKZ8F%2B9z6YJPKQIgDF7j%2BNk6jjQ8%2FKqtLQt4oCS%2BfXauTK1FPs6rpdIHSZAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIm8s4UJLuJP%2Bb0qHyrcA3vdiPyk2k1DP3T%2BtkBfEhi3FgVOJ6WbCyzzdsHlusooS1QM1wWULcU9203V2iICEkhC1Trvz0ByMNpY64cy91SZMCH5HQsQKEOKxiuFgPVLRd7A40JhHiT0mpuuXgtTgUm96t331vh8mO5aNlkXUMCpV6D%2FX1VzSsvxZPfRh2iEv60dB0iqqTTFpij334Tovy1FOlAb0nZXhsann14lhNZxDSxq6MQuJf0mieauT%2BSHm1G6yPXoR1Q64ZdBbxE3L%2BU5O0cPVBBofIz3Tk99x%2FGdwyx2EWbFylqYAATaiiWKmthLQbTjQxirA8DWwt8ai%2F83ypWh60d4blzoDReARDWgrqBlGsYu4%2FT8oBLuMxa4ARBwgBrqYaQtKYcqy8Y%2FtLBr8EsADckoq9HI%2BlaXIn9W8f1oalX5FckTDVvox5PJF7KasrZBwEzEKOE530rvBDhAvM4lJvptw%2FLN4HZI34snTbtkH%2F8Mg4GguXxh8ek4LHCkv4%2FRiIX7ZmEIIRK3gY7kswGRthCTYE50KxsX%2B09Zo9lahOwDsGaS2h3MY4OV%2BcD0459r1zyRLtscs72Y0ZShWS%2BFL1tu0Cm64z2M%2FATMDOVPnzW8GqKx2ZDJjlbB7lysvQXj%2Fc3pq9vLMO3Rr8AGOqUBdYqHE8%2BCRFB%2FDz4N0hjUzTl4GF6xslLvz%2F6uco5zJQOyApnMMg%2BRNUqKlhkaf41%2FCqChpACtjuzjBrJrn%2FV%2BvBTPrtJpOf92Eh1chx5y4uyRM0Xn2mLL7jJQr2c9Eb3Dyi%2FjxQSubEgoBVbOCtJ8df4kLmB1gKFnvgY0VTt7%2BHOpgOTgDzEAJQ6YXQy7gVWGsyibLj55ErrHM8mIpBKOlpdyxIRr&X-Amz-Signature=18b18f2fe9dd64cb0f629c909157c4e95b308260e4924fc702fc2e1de5b60b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZJOV2O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlphot7aSeTfp2K5ibBjtx0WiAfSCmVKZ8F%2B9z6YJPKQIgDF7j%2BNk6jjQ8%2FKqtLQt4oCS%2BfXauTK1FPs6rpdIHSZAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIm8s4UJLuJP%2Bb0qHyrcA3vdiPyk2k1DP3T%2BtkBfEhi3FgVOJ6WbCyzzdsHlusooS1QM1wWULcU9203V2iICEkhC1Trvz0ByMNpY64cy91SZMCH5HQsQKEOKxiuFgPVLRd7A40JhHiT0mpuuXgtTgUm96t331vh8mO5aNlkXUMCpV6D%2FX1VzSsvxZPfRh2iEv60dB0iqqTTFpij334Tovy1FOlAb0nZXhsann14lhNZxDSxq6MQuJf0mieauT%2BSHm1G6yPXoR1Q64ZdBbxE3L%2BU5O0cPVBBofIz3Tk99x%2FGdwyx2EWbFylqYAATaiiWKmthLQbTjQxirA8DWwt8ai%2F83ypWh60d4blzoDReARDWgrqBlGsYu4%2FT8oBLuMxa4ARBwgBrqYaQtKYcqy8Y%2FtLBr8EsADckoq9HI%2BlaXIn9W8f1oalX5FckTDVvox5PJF7KasrZBwEzEKOE530rvBDhAvM4lJvptw%2FLN4HZI34snTbtkH%2F8Mg4GguXxh8ek4LHCkv4%2FRiIX7ZmEIIRK3gY7kswGRthCTYE50KxsX%2B09Zo9lahOwDsGaS2h3MY4OV%2BcD0459r1zyRLtscs72Y0ZShWS%2BFL1tu0Cm64z2M%2FATMDOVPnzW8GqKx2ZDJjlbB7lysvQXj%2Fc3pq9vLMO3Rr8AGOqUBdYqHE8%2BCRFB%2FDz4N0hjUzTl4GF6xslLvz%2F6uco5zJQOyApnMMg%2BRNUqKlhkaf41%2FCqChpACtjuzjBrJrn%2FV%2BvBTPrtJpOf92Eh1chx5y4uyRM0Xn2mLL7jJQr2c9Eb3Dyi%2FjxQSubEgoBVbOCtJ8df4kLmB1gKFnvgY0VTt7%2BHOpgOTgDzEAJQ6YXQy7gVWGsyibLj55ErrHM8mIpBKOlpdyxIRr&X-Amz-Signature=068979334e61bb42e741d8c990c1fe0c4c00ab4671b5631f0178ed13a32cdf85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZJOV2O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlphot7aSeTfp2K5ibBjtx0WiAfSCmVKZ8F%2B9z6YJPKQIgDF7j%2BNk6jjQ8%2FKqtLQt4oCS%2BfXauTK1FPs6rpdIHSZAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIm8s4UJLuJP%2Bb0qHyrcA3vdiPyk2k1DP3T%2BtkBfEhi3FgVOJ6WbCyzzdsHlusooS1QM1wWULcU9203V2iICEkhC1Trvz0ByMNpY64cy91SZMCH5HQsQKEOKxiuFgPVLRd7A40JhHiT0mpuuXgtTgUm96t331vh8mO5aNlkXUMCpV6D%2FX1VzSsvxZPfRh2iEv60dB0iqqTTFpij334Tovy1FOlAb0nZXhsann14lhNZxDSxq6MQuJf0mieauT%2BSHm1G6yPXoR1Q64ZdBbxE3L%2BU5O0cPVBBofIz3Tk99x%2FGdwyx2EWbFylqYAATaiiWKmthLQbTjQxirA8DWwt8ai%2F83ypWh60d4blzoDReARDWgrqBlGsYu4%2FT8oBLuMxa4ARBwgBrqYaQtKYcqy8Y%2FtLBr8EsADckoq9HI%2BlaXIn9W8f1oalX5FckTDVvox5PJF7KasrZBwEzEKOE530rvBDhAvM4lJvptw%2FLN4HZI34snTbtkH%2F8Mg4GguXxh8ek4LHCkv4%2FRiIX7ZmEIIRK3gY7kswGRthCTYE50KxsX%2B09Zo9lahOwDsGaS2h3MY4OV%2BcD0459r1zyRLtscs72Y0ZShWS%2BFL1tu0Cm64z2M%2FATMDOVPnzW8GqKx2ZDJjlbB7lysvQXj%2Fc3pq9vLMO3Rr8AGOqUBdYqHE8%2BCRFB%2FDz4N0hjUzTl4GF6xslLvz%2F6uco5zJQOyApnMMg%2BRNUqKlhkaf41%2FCqChpACtjuzjBrJrn%2FV%2BvBTPrtJpOf92Eh1chx5y4uyRM0Xn2mLL7jJQr2c9Eb3Dyi%2FjxQSubEgoBVbOCtJ8df4kLmB1gKFnvgY0VTt7%2BHOpgOTgDzEAJQ6YXQy7gVWGsyibLj55ErrHM8mIpBKOlpdyxIRr&X-Amz-Signature=070d8fbc73ea9e3c91fc21364d3b3c053d36c06b3054c2e3273050f5d6183082&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZJOV2O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlphot7aSeTfp2K5ibBjtx0WiAfSCmVKZ8F%2B9z6YJPKQIgDF7j%2BNk6jjQ8%2FKqtLQt4oCS%2BfXauTK1FPs6rpdIHSZAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIm8s4UJLuJP%2Bb0qHyrcA3vdiPyk2k1DP3T%2BtkBfEhi3FgVOJ6WbCyzzdsHlusooS1QM1wWULcU9203V2iICEkhC1Trvz0ByMNpY64cy91SZMCH5HQsQKEOKxiuFgPVLRd7A40JhHiT0mpuuXgtTgUm96t331vh8mO5aNlkXUMCpV6D%2FX1VzSsvxZPfRh2iEv60dB0iqqTTFpij334Tovy1FOlAb0nZXhsann14lhNZxDSxq6MQuJf0mieauT%2BSHm1G6yPXoR1Q64ZdBbxE3L%2BU5O0cPVBBofIz3Tk99x%2FGdwyx2EWbFylqYAATaiiWKmthLQbTjQxirA8DWwt8ai%2F83ypWh60d4blzoDReARDWgrqBlGsYu4%2FT8oBLuMxa4ARBwgBrqYaQtKYcqy8Y%2FtLBr8EsADckoq9HI%2BlaXIn9W8f1oalX5FckTDVvox5PJF7KasrZBwEzEKOE530rvBDhAvM4lJvptw%2FLN4HZI34snTbtkH%2F8Mg4GguXxh8ek4LHCkv4%2FRiIX7ZmEIIRK3gY7kswGRthCTYE50KxsX%2B09Zo9lahOwDsGaS2h3MY4OV%2BcD0459r1zyRLtscs72Y0ZShWS%2BFL1tu0Cm64z2M%2FATMDOVPnzW8GqKx2ZDJjlbB7lysvQXj%2Fc3pq9vLMO3Rr8AGOqUBdYqHE8%2BCRFB%2FDz4N0hjUzTl4GF6xslLvz%2F6uco5zJQOyApnMMg%2BRNUqKlhkaf41%2FCqChpACtjuzjBrJrn%2FV%2BvBTPrtJpOf92Eh1chx5y4uyRM0Xn2mLL7jJQr2c9Eb3Dyi%2FjxQSubEgoBVbOCtJ8df4kLmB1gKFnvgY0VTt7%2BHOpgOTgDzEAJQ6YXQy7gVWGsyibLj55ErrHM8mIpBKOlpdyxIRr&X-Amz-Signature=d1e91aec7af7a6baba91c6e5d9f3fefdc131af6d3331b3a2d6a8364ac8bd0a39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZJOV2O%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlphot7aSeTfp2K5ibBjtx0WiAfSCmVKZ8F%2B9z6YJPKQIgDF7j%2BNk6jjQ8%2FKqtLQt4oCS%2BfXauTK1FPs6rpdIHSZAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIm8s4UJLuJP%2Bb0qHyrcA3vdiPyk2k1DP3T%2BtkBfEhi3FgVOJ6WbCyzzdsHlusooS1QM1wWULcU9203V2iICEkhC1Trvz0ByMNpY64cy91SZMCH5HQsQKEOKxiuFgPVLRd7A40JhHiT0mpuuXgtTgUm96t331vh8mO5aNlkXUMCpV6D%2FX1VzSsvxZPfRh2iEv60dB0iqqTTFpij334Tovy1FOlAb0nZXhsann14lhNZxDSxq6MQuJf0mieauT%2BSHm1G6yPXoR1Q64ZdBbxE3L%2BU5O0cPVBBofIz3Tk99x%2FGdwyx2EWbFylqYAATaiiWKmthLQbTjQxirA8DWwt8ai%2F83ypWh60d4blzoDReARDWgrqBlGsYu4%2FT8oBLuMxa4ARBwgBrqYaQtKYcqy8Y%2FtLBr8EsADckoq9HI%2BlaXIn9W8f1oalX5FckTDVvox5PJF7KasrZBwEzEKOE530rvBDhAvM4lJvptw%2FLN4HZI34snTbtkH%2F8Mg4GguXxh8ek4LHCkv4%2FRiIX7ZmEIIRK3gY7kswGRthCTYE50KxsX%2B09Zo9lahOwDsGaS2h3MY4OV%2BcD0459r1zyRLtscs72Y0ZShWS%2BFL1tu0Cm64z2M%2FATMDOVPnzW8GqKx2ZDJjlbB7lysvQXj%2Fc3pq9vLMO3Rr8AGOqUBdYqHE8%2BCRFB%2FDz4N0hjUzTl4GF6xslLvz%2F6uco5zJQOyApnMMg%2BRNUqKlhkaf41%2FCqChpACtjuzjBrJrn%2FV%2BvBTPrtJpOf92Eh1chx5y4uyRM0Xn2mLL7jJQr2c9Eb3Dyi%2FjxQSubEgoBVbOCtJ8df4kLmB1gKFnvgY0VTt7%2BHOpgOTgDzEAJQ6YXQy7gVWGsyibLj55ErrHM8mIpBKOlpdyxIRr&X-Amz-Signature=2f2f56d8c4e8dfc505d691e88479304007f90dcab2c987bbfbbfc2247983ac45&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
