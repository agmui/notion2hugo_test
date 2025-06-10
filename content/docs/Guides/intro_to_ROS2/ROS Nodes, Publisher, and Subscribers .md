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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FKUQ7N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5ruXvJ9D%2FOU11VyGV3368eN5Ab6O6di%2BKPS35D7Td0AiBXOFR6pOExeBlazBh3qMKX4kLOQO8njp0gVUwd7j3tmCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbh1%2BuZjp3H72BKdKtwDP94ZqSmmW3g3ifnCaKC%2FLrJvbPX09GKh21pwBl7fJkwnlWl8kRHog6n3RbDNjykCk9zw%2B4lo03G38w9AHKe9QjrBWsuNHUMEgsCq57Pxf7RHeSNfOxPwe1g8hR9cMt%2FkaIFTsYdo3C0ZkTVCDvSIJl5Al6vHDV3peUV56RV%2B35lmrmy6rLRizUc2MJVFGhgwVqgroZFVxLSccDDM4gkcFplcAnUwNx0nJjK%2B6xYOuiiCq1bW9gMfZgTFYGlsGlt2Ze5jlgzXOYbYIp1G%2F7ksXUNR8uEYjIyLlJHWB5wfWZyNtqREUQ%2Bzx%2FJ5xuu%2F%2BtmqjLR8MdehumxHyspRoRbuoB0GzcyewMTAjEQAmkI9rcF18J0zJC%2FyCg%2BSja553TuuJblpiyuJLqUNNSaMidJYpn0hAPP7QR%2BkXheCjia43RqiYzWkWVL%2BJPUSeBopajX6TNt4iKHp2mN%2BXvXAGfHsbxGx7FrdB1MNXp1g6WEq4pktgngw6%2B8hLemtLvC5axQiToXUQ6iSwrJNVLOBJMx9adydWbknhcu8jyFgINs4sVGdudl2K3Ts2YuXTlet1MkQGpk6y9VvAx%2FMOIg2cNa56zgvi55DZPBbF9BvFz%2FwmFx%2BQdgVrluIeITDMREw47%2BgwgY6pgHZxo5DSjW5as8HB1hW0F3crcxAB0dtR5icFCgywP5DVNf6YSiKfpLPM6TS536X70bHgMqJ%2FBeJ7JjlxRsymZgZ3Nl2PlmSTvv5wzGVSuE46bFTrqfCVKC9UMi2XL6fOJt8y%2BrMe%2F5o8CPnk%2FFiRct1Ow%2FWvO3VJw09Uf0A3RyOHeIAbC5Cu1b4gGQgSCFpDfo6j%2FBgmcOZFiM6jjDhOkOF%2FRNkfFFj&X-Amz-Signature=2c76cb6865dac19f2b90b4bd00d6b4f1b3df88500290cf1d7a6f4701a92df2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FKUQ7N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5ruXvJ9D%2FOU11VyGV3368eN5Ab6O6di%2BKPS35D7Td0AiBXOFR6pOExeBlazBh3qMKX4kLOQO8njp0gVUwd7j3tmCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbh1%2BuZjp3H72BKdKtwDP94ZqSmmW3g3ifnCaKC%2FLrJvbPX09GKh21pwBl7fJkwnlWl8kRHog6n3RbDNjykCk9zw%2B4lo03G38w9AHKe9QjrBWsuNHUMEgsCq57Pxf7RHeSNfOxPwe1g8hR9cMt%2FkaIFTsYdo3C0ZkTVCDvSIJl5Al6vHDV3peUV56RV%2B35lmrmy6rLRizUc2MJVFGhgwVqgroZFVxLSccDDM4gkcFplcAnUwNx0nJjK%2B6xYOuiiCq1bW9gMfZgTFYGlsGlt2Ze5jlgzXOYbYIp1G%2F7ksXUNR8uEYjIyLlJHWB5wfWZyNtqREUQ%2Bzx%2FJ5xuu%2F%2BtmqjLR8MdehumxHyspRoRbuoB0GzcyewMTAjEQAmkI9rcF18J0zJC%2FyCg%2BSja553TuuJblpiyuJLqUNNSaMidJYpn0hAPP7QR%2BkXheCjia43RqiYzWkWVL%2BJPUSeBopajX6TNt4iKHp2mN%2BXvXAGfHsbxGx7FrdB1MNXp1g6WEq4pktgngw6%2B8hLemtLvC5axQiToXUQ6iSwrJNVLOBJMx9adydWbknhcu8jyFgINs4sVGdudl2K3Ts2YuXTlet1MkQGpk6y9VvAx%2FMOIg2cNa56zgvi55DZPBbF9BvFz%2FwmFx%2BQdgVrluIeITDMREw47%2BgwgY6pgHZxo5DSjW5as8HB1hW0F3crcxAB0dtR5icFCgywP5DVNf6YSiKfpLPM6TS536X70bHgMqJ%2FBeJ7JjlxRsymZgZ3Nl2PlmSTvv5wzGVSuE46bFTrqfCVKC9UMi2XL6fOJt8y%2BrMe%2F5o8CPnk%2FFiRct1Ow%2FWvO3VJw09Uf0A3RyOHeIAbC5Cu1b4gGQgSCFpDfo6j%2FBgmcOZFiM6jjDhOkOF%2FRNkfFFj&X-Amz-Signature=49bd2eee5790f55130230544eb7abb33090ffe863483a4c82df60e32e16bd023&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FKUQ7N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5ruXvJ9D%2FOU11VyGV3368eN5Ab6O6di%2BKPS35D7Td0AiBXOFR6pOExeBlazBh3qMKX4kLOQO8njp0gVUwd7j3tmCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbh1%2BuZjp3H72BKdKtwDP94ZqSmmW3g3ifnCaKC%2FLrJvbPX09GKh21pwBl7fJkwnlWl8kRHog6n3RbDNjykCk9zw%2B4lo03G38w9AHKe9QjrBWsuNHUMEgsCq57Pxf7RHeSNfOxPwe1g8hR9cMt%2FkaIFTsYdo3C0ZkTVCDvSIJl5Al6vHDV3peUV56RV%2B35lmrmy6rLRizUc2MJVFGhgwVqgroZFVxLSccDDM4gkcFplcAnUwNx0nJjK%2B6xYOuiiCq1bW9gMfZgTFYGlsGlt2Ze5jlgzXOYbYIp1G%2F7ksXUNR8uEYjIyLlJHWB5wfWZyNtqREUQ%2Bzx%2FJ5xuu%2F%2BtmqjLR8MdehumxHyspRoRbuoB0GzcyewMTAjEQAmkI9rcF18J0zJC%2FyCg%2BSja553TuuJblpiyuJLqUNNSaMidJYpn0hAPP7QR%2BkXheCjia43RqiYzWkWVL%2BJPUSeBopajX6TNt4iKHp2mN%2BXvXAGfHsbxGx7FrdB1MNXp1g6WEq4pktgngw6%2B8hLemtLvC5axQiToXUQ6iSwrJNVLOBJMx9adydWbknhcu8jyFgINs4sVGdudl2K3Ts2YuXTlet1MkQGpk6y9VvAx%2FMOIg2cNa56zgvi55DZPBbF9BvFz%2FwmFx%2BQdgVrluIeITDMREw47%2BgwgY6pgHZxo5DSjW5as8HB1hW0F3crcxAB0dtR5icFCgywP5DVNf6YSiKfpLPM6TS536X70bHgMqJ%2FBeJ7JjlxRsymZgZ3Nl2PlmSTvv5wzGVSuE46bFTrqfCVKC9UMi2XL6fOJt8y%2BrMe%2F5o8CPnk%2FFiRct1Ow%2FWvO3VJw09Uf0A3RyOHeIAbC5Cu1b4gGQgSCFpDfo6j%2FBgmcOZFiM6jjDhOkOF%2FRNkfFFj&X-Amz-Signature=5c9c552797a0b602aee37221134968b2a9645395da9c76458948d55f582910a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FKUQ7N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5ruXvJ9D%2FOU11VyGV3368eN5Ab6O6di%2BKPS35D7Td0AiBXOFR6pOExeBlazBh3qMKX4kLOQO8njp0gVUwd7j3tmCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbh1%2BuZjp3H72BKdKtwDP94ZqSmmW3g3ifnCaKC%2FLrJvbPX09GKh21pwBl7fJkwnlWl8kRHog6n3RbDNjykCk9zw%2B4lo03G38w9AHKe9QjrBWsuNHUMEgsCq57Pxf7RHeSNfOxPwe1g8hR9cMt%2FkaIFTsYdo3C0ZkTVCDvSIJl5Al6vHDV3peUV56RV%2B35lmrmy6rLRizUc2MJVFGhgwVqgroZFVxLSccDDM4gkcFplcAnUwNx0nJjK%2B6xYOuiiCq1bW9gMfZgTFYGlsGlt2Ze5jlgzXOYbYIp1G%2F7ksXUNR8uEYjIyLlJHWB5wfWZyNtqREUQ%2Bzx%2FJ5xuu%2F%2BtmqjLR8MdehumxHyspRoRbuoB0GzcyewMTAjEQAmkI9rcF18J0zJC%2FyCg%2BSja553TuuJblpiyuJLqUNNSaMidJYpn0hAPP7QR%2BkXheCjia43RqiYzWkWVL%2BJPUSeBopajX6TNt4iKHp2mN%2BXvXAGfHsbxGx7FrdB1MNXp1g6WEq4pktgngw6%2B8hLemtLvC5axQiToXUQ6iSwrJNVLOBJMx9adydWbknhcu8jyFgINs4sVGdudl2K3Ts2YuXTlet1MkQGpk6y9VvAx%2FMOIg2cNa56zgvi55DZPBbF9BvFz%2FwmFx%2BQdgVrluIeITDMREw47%2BgwgY6pgHZxo5DSjW5as8HB1hW0F3crcxAB0dtR5icFCgywP5DVNf6YSiKfpLPM6TS536X70bHgMqJ%2FBeJ7JjlxRsymZgZ3Nl2PlmSTvv5wzGVSuE46bFTrqfCVKC9UMi2XL6fOJt8y%2BrMe%2F5o8CPnk%2FFiRct1Ow%2FWvO3VJw09Uf0A3RyOHeIAbC5Cu1b4gGQgSCFpDfo6j%2FBgmcOZFiM6jjDhOkOF%2FRNkfFFj&X-Amz-Signature=7619e1a382947cd52e606baf372100dd80022d13b8a6147ff5a18ddf933cefd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FKUQ7N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5ruXvJ9D%2FOU11VyGV3368eN5Ab6O6di%2BKPS35D7Td0AiBXOFR6pOExeBlazBh3qMKX4kLOQO8njp0gVUwd7j3tmCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbh1%2BuZjp3H72BKdKtwDP94ZqSmmW3g3ifnCaKC%2FLrJvbPX09GKh21pwBl7fJkwnlWl8kRHog6n3RbDNjykCk9zw%2B4lo03G38w9AHKe9QjrBWsuNHUMEgsCq57Pxf7RHeSNfOxPwe1g8hR9cMt%2FkaIFTsYdo3C0ZkTVCDvSIJl5Al6vHDV3peUV56RV%2B35lmrmy6rLRizUc2MJVFGhgwVqgroZFVxLSccDDM4gkcFplcAnUwNx0nJjK%2B6xYOuiiCq1bW9gMfZgTFYGlsGlt2Ze5jlgzXOYbYIp1G%2F7ksXUNR8uEYjIyLlJHWB5wfWZyNtqREUQ%2Bzx%2FJ5xuu%2F%2BtmqjLR8MdehumxHyspRoRbuoB0GzcyewMTAjEQAmkI9rcF18J0zJC%2FyCg%2BSja553TuuJblpiyuJLqUNNSaMidJYpn0hAPP7QR%2BkXheCjia43RqiYzWkWVL%2BJPUSeBopajX6TNt4iKHp2mN%2BXvXAGfHsbxGx7FrdB1MNXp1g6WEq4pktgngw6%2B8hLemtLvC5axQiToXUQ6iSwrJNVLOBJMx9adydWbknhcu8jyFgINs4sVGdudl2K3Ts2YuXTlet1MkQGpk6y9VvAx%2FMOIg2cNa56zgvi55DZPBbF9BvFz%2FwmFx%2BQdgVrluIeITDMREw47%2BgwgY6pgHZxo5DSjW5as8HB1hW0F3crcxAB0dtR5icFCgywP5DVNf6YSiKfpLPM6TS536X70bHgMqJ%2FBeJ7JjlxRsymZgZ3Nl2PlmSTvv5wzGVSuE46bFTrqfCVKC9UMi2XL6fOJt8y%2BrMe%2F5o8CPnk%2FFiRct1Ow%2FWvO3VJw09Uf0A3RyOHeIAbC5Cu1b4gGQgSCFpDfo6j%2FBgmcOZFiM6jjDhOkOF%2FRNkfFFj&X-Amz-Signature=67be34b2c68bdfa8e800d9e7c37bbb9e9e56ce7b223509c979ff05bcd809eaac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FKUQ7N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5ruXvJ9D%2FOU11VyGV3368eN5Ab6O6di%2BKPS35D7Td0AiBXOFR6pOExeBlazBh3qMKX4kLOQO8njp0gVUwd7j3tmCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbh1%2BuZjp3H72BKdKtwDP94ZqSmmW3g3ifnCaKC%2FLrJvbPX09GKh21pwBl7fJkwnlWl8kRHog6n3RbDNjykCk9zw%2B4lo03G38w9AHKe9QjrBWsuNHUMEgsCq57Pxf7RHeSNfOxPwe1g8hR9cMt%2FkaIFTsYdo3C0ZkTVCDvSIJl5Al6vHDV3peUV56RV%2B35lmrmy6rLRizUc2MJVFGhgwVqgroZFVxLSccDDM4gkcFplcAnUwNx0nJjK%2B6xYOuiiCq1bW9gMfZgTFYGlsGlt2Ze5jlgzXOYbYIp1G%2F7ksXUNR8uEYjIyLlJHWB5wfWZyNtqREUQ%2Bzx%2FJ5xuu%2F%2BtmqjLR8MdehumxHyspRoRbuoB0GzcyewMTAjEQAmkI9rcF18J0zJC%2FyCg%2BSja553TuuJblpiyuJLqUNNSaMidJYpn0hAPP7QR%2BkXheCjia43RqiYzWkWVL%2BJPUSeBopajX6TNt4iKHp2mN%2BXvXAGfHsbxGx7FrdB1MNXp1g6WEq4pktgngw6%2B8hLemtLvC5axQiToXUQ6iSwrJNVLOBJMx9adydWbknhcu8jyFgINs4sVGdudl2K3Ts2YuXTlet1MkQGpk6y9VvAx%2FMOIg2cNa56zgvi55DZPBbF9BvFz%2FwmFx%2BQdgVrluIeITDMREw47%2BgwgY6pgHZxo5DSjW5as8HB1hW0F3crcxAB0dtR5icFCgywP5DVNf6YSiKfpLPM6TS536X70bHgMqJ%2FBeJ7JjlxRsymZgZ3Nl2PlmSTvv5wzGVSuE46bFTrqfCVKC9UMi2XL6fOJt8y%2BrMe%2F5o8CPnk%2FFiRct1Ow%2FWvO3VJw09Uf0A3RyOHeIAbC5Cu1b4gGQgSCFpDfo6j%2FBgmcOZFiM6jjDhOkOF%2FRNkfFFj&X-Amz-Signature=72adb2f691841f5fd951a807c7f837c1d15430721a74152a4ff8cca25b328570&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FKUQ7N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5ruXvJ9D%2FOU11VyGV3368eN5Ab6O6di%2BKPS35D7Td0AiBXOFR6pOExeBlazBh3qMKX4kLOQO8njp0gVUwd7j3tmCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbh1%2BuZjp3H72BKdKtwDP94ZqSmmW3g3ifnCaKC%2FLrJvbPX09GKh21pwBl7fJkwnlWl8kRHog6n3RbDNjykCk9zw%2B4lo03G38w9AHKe9QjrBWsuNHUMEgsCq57Pxf7RHeSNfOxPwe1g8hR9cMt%2FkaIFTsYdo3C0ZkTVCDvSIJl5Al6vHDV3peUV56RV%2B35lmrmy6rLRizUc2MJVFGhgwVqgroZFVxLSccDDM4gkcFplcAnUwNx0nJjK%2B6xYOuiiCq1bW9gMfZgTFYGlsGlt2Ze5jlgzXOYbYIp1G%2F7ksXUNR8uEYjIyLlJHWB5wfWZyNtqREUQ%2Bzx%2FJ5xuu%2F%2BtmqjLR8MdehumxHyspRoRbuoB0GzcyewMTAjEQAmkI9rcF18J0zJC%2FyCg%2BSja553TuuJblpiyuJLqUNNSaMidJYpn0hAPP7QR%2BkXheCjia43RqiYzWkWVL%2BJPUSeBopajX6TNt4iKHp2mN%2BXvXAGfHsbxGx7FrdB1MNXp1g6WEq4pktgngw6%2B8hLemtLvC5axQiToXUQ6iSwrJNVLOBJMx9adydWbknhcu8jyFgINs4sVGdudl2K3Ts2YuXTlet1MkQGpk6y9VvAx%2FMOIg2cNa56zgvi55DZPBbF9BvFz%2FwmFx%2BQdgVrluIeITDMREw47%2BgwgY6pgHZxo5DSjW5as8HB1hW0F3crcxAB0dtR5icFCgywP5DVNf6YSiKfpLPM6TS536X70bHgMqJ%2FBeJ7JjlxRsymZgZ3Nl2PlmSTvv5wzGVSuE46bFTrqfCVKC9UMi2XL6fOJt8y%2BrMe%2F5o8CPnk%2FFiRct1Ow%2FWvO3VJw09Uf0A3RyOHeIAbC5Cu1b4gGQgSCFpDfo6j%2FBgmcOZFiM6jjDhOkOF%2FRNkfFFj&X-Amz-Signature=4cf9f72075649017cac9a8c6514ad7a7ca5b76587e562ca7b2134b5d571ba643&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FKUQ7N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5ruXvJ9D%2FOU11VyGV3368eN5Ab6O6di%2BKPS35D7Td0AiBXOFR6pOExeBlazBh3qMKX4kLOQO8njp0gVUwd7j3tmCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbh1%2BuZjp3H72BKdKtwDP94ZqSmmW3g3ifnCaKC%2FLrJvbPX09GKh21pwBl7fJkwnlWl8kRHog6n3RbDNjykCk9zw%2B4lo03G38w9AHKe9QjrBWsuNHUMEgsCq57Pxf7RHeSNfOxPwe1g8hR9cMt%2FkaIFTsYdo3C0ZkTVCDvSIJl5Al6vHDV3peUV56RV%2B35lmrmy6rLRizUc2MJVFGhgwVqgroZFVxLSccDDM4gkcFplcAnUwNx0nJjK%2B6xYOuiiCq1bW9gMfZgTFYGlsGlt2Ze5jlgzXOYbYIp1G%2F7ksXUNR8uEYjIyLlJHWB5wfWZyNtqREUQ%2Bzx%2FJ5xuu%2F%2BtmqjLR8MdehumxHyspRoRbuoB0GzcyewMTAjEQAmkI9rcF18J0zJC%2FyCg%2BSja553TuuJblpiyuJLqUNNSaMidJYpn0hAPP7QR%2BkXheCjia43RqiYzWkWVL%2BJPUSeBopajX6TNt4iKHp2mN%2BXvXAGfHsbxGx7FrdB1MNXp1g6WEq4pktgngw6%2B8hLemtLvC5axQiToXUQ6iSwrJNVLOBJMx9adydWbknhcu8jyFgINs4sVGdudl2K3Ts2YuXTlet1MkQGpk6y9VvAx%2FMOIg2cNa56zgvi55DZPBbF9BvFz%2FwmFx%2BQdgVrluIeITDMREw47%2BgwgY6pgHZxo5DSjW5as8HB1hW0F3crcxAB0dtR5icFCgywP5DVNf6YSiKfpLPM6TS536X70bHgMqJ%2FBeJ7JjlxRsymZgZ3Nl2PlmSTvv5wzGVSuE46bFTrqfCVKC9UMi2XL6fOJt8y%2BrMe%2F5o8CPnk%2FFiRct1Ow%2FWvO3VJw09Uf0A3RyOHeIAbC5Cu1b4gGQgSCFpDfo6j%2FBgmcOZFiM6jjDhOkOF%2FRNkfFFj&X-Amz-Signature=50dd4fbc1fd1af617ee57a69f6f1f09e8e71b8c57322e46beff6dc0a699d4caf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
