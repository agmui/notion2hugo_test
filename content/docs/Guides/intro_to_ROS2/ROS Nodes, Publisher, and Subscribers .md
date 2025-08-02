---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIC23AG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxb2MquvJYuZ0RFo7MSliNO%2BREUzjfFFhbcxacy7156AiArK6e7d4L8%2F8YL9tLCX5Noj88mQx6fbm%2BEbiVxO6qPzCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMaspQGYT2x16qzR9lKtwDOEDlomO%2FwHbMO%2FLodsEAhxAXTpSCac4ZvIS9ZkR246fnP%2BgAYy7BHPi3PgNAiESFwwuYrs9GRoW5DDOEcv1zZOFmf9%2FHupvoRVRTwEHEIGzLlPureimojzec4SyZCirUhXKTrCEQr8koNJv3HGGGZDGH51qd5ruA8z6F3d12aopXOKDmEd8ORkbr1iFthnvTa7HsiXsyHW1CrNZqIBif1Pm75qJfbq1AXUFh0VMVoV1Pm4GIaSrDEmb1B7Wkkkq53yXCOJ9W77t449UslSLtcmqevSCDJpi6p10KGCA4FgwgdBgJDGKsALVZfIcesPTe5XlGpu5Gzdlcgtz2NczpM2zF0WVgf8DGhkOu1126VY6fyTTjWA9GNz8w3tv9ehl%2Bawy4DEqXjrop3LxIyn6hFKQpVUMZlzNeA6lJlaPYZ9f3tJNwIm2MNchCwvJ0ZgpJ9ksFKl4hmVlBbclbo3PNiqfolelPP1vojJM8%2FALE%2Bz4frmfRyUjZj%2B72pqneXBui0BbcLv0Em1goySQqbdGXgfCVMP0PIotp0r6N9ojkpt%2B7f6s4%2BJ1%2BZrbKZ7lgDicdxVmVZT7e0UDiUsZN5%2BzA8xPxktWOlOPFiQYHIZwyJkcANjIKV2D4%2BkryiAIw2J65xAY6pgE7TC%2Fq6%2FXIYMk8dVun127KX8q%2BiRogfI6tI1nc0fMLLeapiSVpv9EwiBua2fywruDWq0YC5ZfwqL0XPTmtNN0mGMxZ6FUpRjDgEYgATZ5puPLjwECY%2FwliBsV1GEeQ7zbMF2tv8t0YGRTwuhYh5KVEfX%2Bjd%2BLOSRedSWDEkf%2BYPGqgiuD%2FabiaC79a3e45R%2F48ByHvVctNKN7LZMDiDlHGdiwBDOP%2B&X-Amz-Signature=5d214062053cdcbd906ee6cac01bb86055963303f6ccdafa82d618ed1a5b5109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIC23AG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxb2MquvJYuZ0RFo7MSliNO%2BREUzjfFFhbcxacy7156AiArK6e7d4L8%2F8YL9tLCX5Noj88mQx6fbm%2BEbiVxO6qPzCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMaspQGYT2x16qzR9lKtwDOEDlomO%2FwHbMO%2FLodsEAhxAXTpSCac4ZvIS9ZkR246fnP%2BgAYy7BHPi3PgNAiESFwwuYrs9GRoW5DDOEcv1zZOFmf9%2FHupvoRVRTwEHEIGzLlPureimojzec4SyZCirUhXKTrCEQr8koNJv3HGGGZDGH51qd5ruA8z6F3d12aopXOKDmEd8ORkbr1iFthnvTa7HsiXsyHW1CrNZqIBif1Pm75qJfbq1AXUFh0VMVoV1Pm4GIaSrDEmb1B7Wkkkq53yXCOJ9W77t449UslSLtcmqevSCDJpi6p10KGCA4FgwgdBgJDGKsALVZfIcesPTe5XlGpu5Gzdlcgtz2NczpM2zF0WVgf8DGhkOu1126VY6fyTTjWA9GNz8w3tv9ehl%2Bawy4DEqXjrop3LxIyn6hFKQpVUMZlzNeA6lJlaPYZ9f3tJNwIm2MNchCwvJ0ZgpJ9ksFKl4hmVlBbclbo3PNiqfolelPP1vojJM8%2FALE%2Bz4frmfRyUjZj%2B72pqneXBui0BbcLv0Em1goySQqbdGXgfCVMP0PIotp0r6N9ojkpt%2B7f6s4%2BJ1%2BZrbKZ7lgDicdxVmVZT7e0UDiUsZN5%2BzA8xPxktWOlOPFiQYHIZwyJkcANjIKV2D4%2BkryiAIw2J65xAY6pgE7TC%2Fq6%2FXIYMk8dVun127KX8q%2BiRogfI6tI1nc0fMLLeapiSVpv9EwiBua2fywruDWq0YC5ZfwqL0XPTmtNN0mGMxZ6FUpRjDgEYgATZ5puPLjwECY%2FwliBsV1GEeQ7zbMF2tv8t0YGRTwuhYh5KVEfX%2Bjd%2BLOSRedSWDEkf%2BYPGqgiuD%2FabiaC79a3e45R%2F48ByHvVctNKN7LZMDiDlHGdiwBDOP%2B&X-Amz-Signature=f8937491b227f2da7da9d056b4c630535fd657b948a0d433070d1cad4f1103f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIC23AG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxb2MquvJYuZ0RFo7MSliNO%2BREUzjfFFhbcxacy7156AiArK6e7d4L8%2F8YL9tLCX5Noj88mQx6fbm%2BEbiVxO6qPzCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMaspQGYT2x16qzR9lKtwDOEDlomO%2FwHbMO%2FLodsEAhxAXTpSCac4ZvIS9ZkR246fnP%2BgAYy7BHPi3PgNAiESFwwuYrs9GRoW5DDOEcv1zZOFmf9%2FHupvoRVRTwEHEIGzLlPureimojzec4SyZCirUhXKTrCEQr8koNJv3HGGGZDGH51qd5ruA8z6F3d12aopXOKDmEd8ORkbr1iFthnvTa7HsiXsyHW1CrNZqIBif1Pm75qJfbq1AXUFh0VMVoV1Pm4GIaSrDEmb1B7Wkkkq53yXCOJ9W77t449UslSLtcmqevSCDJpi6p10KGCA4FgwgdBgJDGKsALVZfIcesPTe5XlGpu5Gzdlcgtz2NczpM2zF0WVgf8DGhkOu1126VY6fyTTjWA9GNz8w3tv9ehl%2Bawy4DEqXjrop3LxIyn6hFKQpVUMZlzNeA6lJlaPYZ9f3tJNwIm2MNchCwvJ0ZgpJ9ksFKl4hmVlBbclbo3PNiqfolelPP1vojJM8%2FALE%2Bz4frmfRyUjZj%2B72pqneXBui0BbcLv0Em1goySQqbdGXgfCVMP0PIotp0r6N9ojkpt%2B7f6s4%2BJ1%2BZrbKZ7lgDicdxVmVZT7e0UDiUsZN5%2BzA8xPxktWOlOPFiQYHIZwyJkcANjIKV2D4%2BkryiAIw2J65xAY6pgE7TC%2Fq6%2FXIYMk8dVun127KX8q%2BiRogfI6tI1nc0fMLLeapiSVpv9EwiBua2fywruDWq0YC5ZfwqL0XPTmtNN0mGMxZ6FUpRjDgEYgATZ5puPLjwECY%2FwliBsV1GEeQ7zbMF2tv8t0YGRTwuhYh5KVEfX%2Bjd%2BLOSRedSWDEkf%2BYPGqgiuD%2FabiaC79a3e45R%2F48ByHvVctNKN7LZMDiDlHGdiwBDOP%2B&X-Amz-Signature=ee6c750d266fc7a0e83fab42e833a45ff34654751ea68d5fea0d6b72806216c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIC23AG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxb2MquvJYuZ0RFo7MSliNO%2BREUzjfFFhbcxacy7156AiArK6e7d4L8%2F8YL9tLCX5Noj88mQx6fbm%2BEbiVxO6qPzCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMaspQGYT2x16qzR9lKtwDOEDlomO%2FwHbMO%2FLodsEAhxAXTpSCac4ZvIS9ZkR246fnP%2BgAYy7BHPi3PgNAiESFwwuYrs9GRoW5DDOEcv1zZOFmf9%2FHupvoRVRTwEHEIGzLlPureimojzec4SyZCirUhXKTrCEQr8koNJv3HGGGZDGH51qd5ruA8z6F3d12aopXOKDmEd8ORkbr1iFthnvTa7HsiXsyHW1CrNZqIBif1Pm75qJfbq1AXUFh0VMVoV1Pm4GIaSrDEmb1B7Wkkkq53yXCOJ9W77t449UslSLtcmqevSCDJpi6p10KGCA4FgwgdBgJDGKsALVZfIcesPTe5XlGpu5Gzdlcgtz2NczpM2zF0WVgf8DGhkOu1126VY6fyTTjWA9GNz8w3tv9ehl%2Bawy4DEqXjrop3LxIyn6hFKQpVUMZlzNeA6lJlaPYZ9f3tJNwIm2MNchCwvJ0ZgpJ9ksFKl4hmVlBbclbo3PNiqfolelPP1vojJM8%2FALE%2Bz4frmfRyUjZj%2B72pqneXBui0BbcLv0Em1goySQqbdGXgfCVMP0PIotp0r6N9ojkpt%2B7f6s4%2BJ1%2BZrbKZ7lgDicdxVmVZT7e0UDiUsZN5%2BzA8xPxktWOlOPFiQYHIZwyJkcANjIKV2D4%2BkryiAIw2J65xAY6pgE7TC%2Fq6%2FXIYMk8dVun127KX8q%2BiRogfI6tI1nc0fMLLeapiSVpv9EwiBua2fywruDWq0YC5ZfwqL0XPTmtNN0mGMxZ6FUpRjDgEYgATZ5puPLjwECY%2FwliBsV1GEeQ7zbMF2tv8t0YGRTwuhYh5KVEfX%2Bjd%2BLOSRedSWDEkf%2BYPGqgiuD%2FabiaC79a3e45R%2F48ByHvVctNKN7LZMDiDlHGdiwBDOP%2B&X-Amz-Signature=e114cdf47aadc4e25c3c7f26d3e32812c3102b70e53cd4bc980907cc475ff9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIC23AG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxb2MquvJYuZ0RFo7MSliNO%2BREUzjfFFhbcxacy7156AiArK6e7d4L8%2F8YL9tLCX5Noj88mQx6fbm%2BEbiVxO6qPzCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMaspQGYT2x16qzR9lKtwDOEDlomO%2FwHbMO%2FLodsEAhxAXTpSCac4ZvIS9ZkR246fnP%2BgAYy7BHPi3PgNAiESFwwuYrs9GRoW5DDOEcv1zZOFmf9%2FHupvoRVRTwEHEIGzLlPureimojzec4SyZCirUhXKTrCEQr8koNJv3HGGGZDGH51qd5ruA8z6F3d12aopXOKDmEd8ORkbr1iFthnvTa7HsiXsyHW1CrNZqIBif1Pm75qJfbq1AXUFh0VMVoV1Pm4GIaSrDEmb1B7Wkkkq53yXCOJ9W77t449UslSLtcmqevSCDJpi6p10KGCA4FgwgdBgJDGKsALVZfIcesPTe5XlGpu5Gzdlcgtz2NczpM2zF0WVgf8DGhkOu1126VY6fyTTjWA9GNz8w3tv9ehl%2Bawy4DEqXjrop3LxIyn6hFKQpVUMZlzNeA6lJlaPYZ9f3tJNwIm2MNchCwvJ0ZgpJ9ksFKl4hmVlBbclbo3PNiqfolelPP1vojJM8%2FALE%2Bz4frmfRyUjZj%2B72pqneXBui0BbcLv0Em1goySQqbdGXgfCVMP0PIotp0r6N9ojkpt%2B7f6s4%2BJ1%2BZrbKZ7lgDicdxVmVZT7e0UDiUsZN5%2BzA8xPxktWOlOPFiQYHIZwyJkcANjIKV2D4%2BkryiAIw2J65xAY6pgE7TC%2Fq6%2FXIYMk8dVun127KX8q%2BiRogfI6tI1nc0fMLLeapiSVpv9EwiBua2fywruDWq0YC5ZfwqL0XPTmtNN0mGMxZ6FUpRjDgEYgATZ5puPLjwECY%2FwliBsV1GEeQ7zbMF2tv8t0YGRTwuhYh5KVEfX%2Bjd%2BLOSRedSWDEkf%2BYPGqgiuD%2FabiaC79a3e45R%2F48ByHvVctNKN7LZMDiDlHGdiwBDOP%2B&X-Amz-Signature=47fec33325c2c4315a585f0d8a6e9ef6f8066e4d45e4264524db908e1ad4a254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIC23AG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxb2MquvJYuZ0RFo7MSliNO%2BREUzjfFFhbcxacy7156AiArK6e7d4L8%2F8YL9tLCX5Noj88mQx6fbm%2BEbiVxO6qPzCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMaspQGYT2x16qzR9lKtwDOEDlomO%2FwHbMO%2FLodsEAhxAXTpSCac4ZvIS9ZkR246fnP%2BgAYy7BHPi3PgNAiESFwwuYrs9GRoW5DDOEcv1zZOFmf9%2FHupvoRVRTwEHEIGzLlPureimojzec4SyZCirUhXKTrCEQr8koNJv3HGGGZDGH51qd5ruA8z6F3d12aopXOKDmEd8ORkbr1iFthnvTa7HsiXsyHW1CrNZqIBif1Pm75qJfbq1AXUFh0VMVoV1Pm4GIaSrDEmb1B7Wkkkq53yXCOJ9W77t449UslSLtcmqevSCDJpi6p10KGCA4FgwgdBgJDGKsALVZfIcesPTe5XlGpu5Gzdlcgtz2NczpM2zF0WVgf8DGhkOu1126VY6fyTTjWA9GNz8w3tv9ehl%2Bawy4DEqXjrop3LxIyn6hFKQpVUMZlzNeA6lJlaPYZ9f3tJNwIm2MNchCwvJ0ZgpJ9ksFKl4hmVlBbclbo3PNiqfolelPP1vojJM8%2FALE%2Bz4frmfRyUjZj%2B72pqneXBui0BbcLv0Em1goySQqbdGXgfCVMP0PIotp0r6N9ojkpt%2B7f6s4%2BJ1%2BZrbKZ7lgDicdxVmVZT7e0UDiUsZN5%2BzA8xPxktWOlOPFiQYHIZwyJkcANjIKV2D4%2BkryiAIw2J65xAY6pgE7TC%2Fq6%2FXIYMk8dVun127KX8q%2BiRogfI6tI1nc0fMLLeapiSVpv9EwiBua2fywruDWq0YC5ZfwqL0XPTmtNN0mGMxZ6FUpRjDgEYgATZ5puPLjwECY%2FwliBsV1GEeQ7zbMF2tv8t0YGRTwuhYh5KVEfX%2Bjd%2BLOSRedSWDEkf%2BYPGqgiuD%2FabiaC79a3e45R%2F48ByHvVctNKN7LZMDiDlHGdiwBDOP%2B&X-Amz-Signature=e1d3c16828b195693100fcc340f3e0ca5a5ff268327568cc0ab8a582b3d7c8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIC23AG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxb2MquvJYuZ0RFo7MSliNO%2BREUzjfFFhbcxacy7156AiArK6e7d4L8%2F8YL9tLCX5Noj88mQx6fbm%2BEbiVxO6qPzCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMaspQGYT2x16qzR9lKtwDOEDlomO%2FwHbMO%2FLodsEAhxAXTpSCac4ZvIS9ZkR246fnP%2BgAYy7BHPi3PgNAiESFwwuYrs9GRoW5DDOEcv1zZOFmf9%2FHupvoRVRTwEHEIGzLlPureimojzec4SyZCirUhXKTrCEQr8koNJv3HGGGZDGH51qd5ruA8z6F3d12aopXOKDmEd8ORkbr1iFthnvTa7HsiXsyHW1CrNZqIBif1Pm75qJfbq1AXUFh0VMVoV1Pm4GIaSrDEmb1B7Wkkkq53yXCOJ9W77t449UslSLtcmqevSCDJpi6p10KGCA4FgwgdBgJDGKsALVZfIcesPTe5XlGpu5Gzdlcgtz2NczpM2zF0WVgf8DGhkOu1126VY6fyTTjWA9GNz8w3tv9ehl%2Bawy4DEqXjrop3LxIyn6hFKQpVUMZlzNeA6lJlaPYZ9f3tJNwIm2MNchCwvJ0ZgpJ9ksFKl4hmVlBbclbo3PNiqfolelPP1vojJM8%2FALE%2Bz4frmfRyUjZj%2B72pqneXBui0BbcLv0Em1goySQqbdGXgfCVMP0PIotp0r6N9ojkpt%2B7f6s4%2BJ1%2BZrbKZ7lgDicdxVmVZT7e0UDiUsZN5%2BzA8xPxktWOlOPFiQYHIZwyJkcANjIKV2D4%2BkryiAIw2J65xAY6pgE7TC%2Fq6%2FXIYMk8dVun127KX8q%2BiRogfI6tI1nc0fMLLeapiSVpv9EwiBua2fywruDWq0YC5ZfwqL0XPTmtNN0mGMxZ6FUpRjDgEYgATZ5puPLjwECY%2FwliBsV1GEeQ7zbMF2tv8t0YGRTwuhYh5KVEfX%2Bjd%2BLOSRedSWDEkf%2BYPGqgiuD%2FabiaC79a3e45R%2F48ByHvVctNKN7LZMDiDlHGdiwBDOP%2B&X-Amz-Signature=a08378dfb1ab2adb37016f6a1ce3c6e295229d6e5f5b640fa20089c260185235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIC23AG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxb2MquvJYuZ0RFo7MSliNO%2BREUzjfFFhbcxacy7156AiArK6e7d4L8%2F8YL9tLCX5Noj88mQx6fbm%2BEbiVxO6qPzCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMaspQGYT2x16qzR9lKtwDOEDlomO%2FwHbMO%2FLodsEAhxAXTpSCac4ZvIS9ZkR246fnP%2BgAYy7BHPi3PgNAiESFwwuYrs9GRoW5DDOEcv1zZOFmf9%2FHupvoRVRTwEHEIGzLlPureimojzec4SyZCirUhXKTrCEQr8koNJv3HGGGZDGH51qd5ruA8z6F3d12aopXOKDmEd8ORkbr1iFthnvTa7HsiXsyHW1CrNZqIBif1Pm75qJfbq1AXUFh0VMVoV1Pm4GIaSrDEmb1B7Wkkkq53yXCOJ9W77t449UslSLtcmqevSCDJpi6p10KGCA4FgwgdBgJDGKsALVZfIcesPTe5XlGpu5Gzdlcgtz2NczpM2zF0WVgf8DGhkOu1126VY6fyTTjWA9GNz8w3tv9ehl%2Bawy4DEqXjrop3LxIyn6hFKQpVUMZlzNeA6lJlaPYZ9f3tJNwIm2MNchCwvJ0ZgpJ9ksFKl4hmVlBbclbo3PNiqfolelPP1vojJM8%2FALE%2Bz4frmfRyUjZj%2B72pqneXBui0BbcLv0Em1goySQqbdGXgfCVMP0PIotp0r6N9ojkpt%2B7f6s4%2BJ1%2BZrbKZ7lgDicdxVmVZT7e0UDiUsZN5%2BzA8xPxktWOlOPFiQYHIZwyJkcANjIKV2D4%2BkryiAIw2J65xAY6pgE7TC%2Fq6%2FXIYMk8dVun127KX8q%2BiRogfI6tI1nc0fMLLeapiSVpv9EwiBua2fywruDWq0YC5ZfwqL0XPTmtNN0mGMxZ6FUpRjDgEYgATZ5puPLjwECY%2FwliBsV1GEeQ7zbMF2tv8t0YGRTwuhYh5KVEfX%2Bjd%2BLOSRedSWDEkf%2BYPGqgiuD%2FabiaC79a3e45R%2F48ByHvVctNKN7LZMDiDlHGdiwBDOP%2B&X-Amz-Signature=6bb29044ca1fb8b3dda1986509c363c68ba8fe13f7e00bf37a7f8c5d0537d028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
