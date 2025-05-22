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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHEKQZT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B9DL4aWag24DiuF1IZMpZMas%2BlWbnT0UMFrk1vNTVwgIhAPg7XaqTi0wgSfUQ0WAiqQ2FhqFQkD6ognMhvTsg0LOrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjjw3NYJqQKXu2RnQq3APRXFmOA36X%2BfGgq4wbra4t87nlMqLtK8OPHdRbgqVvxKsFFzvsi7TWaTVRJVWbX4Ffq%2Bq4qf5%2BH91SpwIdPHHGsx8FRJejmcMrn2KeHkfJLGiKfrM4I82l2cEYxi7Nnn2FCuFkiv3ToVGEc9mpqvbHMz5HbC39B6TPRu0ZqZaACqpAfKj%2F%2FrTyVG%2FIdZCYh%2BXwRidOK2vdDc2jNKn6MwlwEpd8H773OlNxq995rqajpMOgly2v1XE33kPmeNonHw384KJ5GBLwvN8kOg0VA3iDrbuHfhD1oN%2FK6k%2Fpj63i4AFE%2FHGBNkkDRw1%2BBDCsm4ow42Gz%2BduMZIfMlEL3JiY1m2quivztSxyL4qdDe%2B%2FzXWiwvi7l2mNb4hMQD1PzRC7nTfAGB44ivqXlXYHfgPhiHn1q4LNi3MUgb8PRquipM9VGvwErkow%2FX7Q1uWTuyVM5l5G%2BK144FxtMcBtLJMFEg9abcbF2ylTX%2B7CGCabedeZFOmgJcddEmSSOPn43FO%2BNwy5Iiye%2BBWDaKECInW1MnrwjUjK7VJAG4MbWLRQ%2FIk8kfS%2FIdZ%2FSjBZw4P4jPka4pCk8J0ERemZht2%2FHy6JurgUzUFqUx2ficXwpdiO2SYDhxjjQdd%2Fut5FjyzCZxbzBBjqkAWNcPlz%2FVdpd%2BXPpy3ZJfZpLCfRN0UaxeAYrVkIyFMDMULwvh28WYoSZ%2BLGeLeVNyYOG1qgojo7gnsCo5jyuswXdhptlleurd5ow9y%2BfPviAq1VR6vLVrllf1LUJqOaCAWFmBjwUNDDBeHCoCOtD7Pb413djJX67GIvtzZo16sHwBZ0kxlJ%2F5X43HALMdpXxzn30Y1wwcUFKuAAzbmq%2FepFYw2AK&X-Amz-Signature=4f0c6cac9889fc7145d096abf5df1357b48c50022046bc377b72e14e3eedbb2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHEKQZT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B9DL4aWag24DiuF1IZMpZMas%2BlWbnT0UMFrk1vNTVwgIhAPg7XaqTi0wgSfUQ0WAiqQ2FhqFQkD6ognMhvTsg0LOrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjjw3NYJqQKXu2RnQq3APRXFmOA36X%2BfGgq4wbra4t87nlMqLtK8OPHdRbgqVvxKsFFzvsi7TWaTVRJVWbX4Ffq%2Bq4qf5%2BH91SpwIdPHHGsx8FRJejmcMrn2KeHkfJLGiKfrM4I82l2cEYxi7Nnn2FCuFkiv3ToVGEc9mpqvbHMz5HbC39B6TPRu0ZqZaACqpAfKj%2F%2FrTyVG%2FIdZCYh%2BXwRidOK2vdDc2jNKn6MwlwEpd8H773OlNxq995rqajpMOgly2v1XE33kPmeNonHw384KJ5GBLwvN8kOg0VA3iDrbuHfhD1oN%2FK6k%2Fpj63i4AFE%2FHGBNkkDRw1%2BBDCsm4ow42Gz%2BduMZIfMlEL3JiY1m2quivztSxyL4qdDe%2B%2FzXWiwvi7l2mNb4hMQD1PzRC7nTfAGB44ivqXlXYHfgPhiHn1q4LNi3MUgb8PRquipM9VGvwErkow%2FX7Q1uWTuyVM5l5G%2BK144FxtMcBtLJMFEg9abcbF2ylTX%2B7CGCabedeZFOmgJcddEmSSOPn43FO%2BNwy5Iiye%2BBWDaKECInW1MnrwjUjK7VJAG4MbWLRQ%2FIk8kfS%2FIdZ%2FSjBZw4P4jPka4pCk8J0ERemZht2%2FHy6JurgUzUFqUx2ficXwpdiO2SYDhxjjQdd%2Fut5FjyzCZxbzBBjqkAWNcPlz%2FVdpd%2BXPpy3ZJfZpLCfRN0UaxeAYrVkIyFMDMULwvh28WYoSZ%2BLGeLeVNyYOG1qgojo7gnsCo5jyuswXdhptlleurd5ow9y%2BfPviAq1VR6vLVrllf1LUJqOaCAWFmBjwUNDDBeHCoCOtD7Pb413djJX67GIvtzZo16sHwBZ0kxlJ%2F5X43HALMdpXxzn30Y1wwcUFKuAAzbmq%2FepFYw2AK&X-Amz-Signature=c71cdfcddda2b9353132e2cd979072aa145d4285692e2aaaf446b3af0a2811ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHEKQZT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B9DL4aWag24DiuF1IZMpZMas%2BlWbnT0UMFrk1vNTVwgIhAPg7XaqTi0wgSfUQ0WAiqQ2FhqFQkD6ognMhvTsg0LOrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjjw3NYJqQKXu2RnQq3APRXFmOA36X%2BfGgq4wbra4t87nlMqLtK8OPHdRbgqVvxKsFFzvsi7TWaTVRJVWbX4Ffq%2Bq4qf5%2BH91SpwIdPHHGsx8FRJejmcMrn2KeHkfJLGiKfrM4I82l2cEYxi7Nnn2FCuFkiv3ToVGEc9mpqvbHMz5HbC39B6TPRu0ZqZaACqpAfKj%2F%2FrTyVG%2FIdZCYh%2BXwRidOK2vdDc2jNKn6MwlwEpd8H773OlNxq995rqajpMOgly2v1XE33kPmeNonHw384KJ5GBLwvN8kOg0VA3iDrbuHfhD1oN%2FK6k%2Fpj63i4AFE%2FHGBNkkDRw1%2BBDCsm4ow42Gz%2BduMZIfMlEL3JiY1m2quivztSxyL4qdDe%2B%2FzXWiwvi7l2mNb4hMQD1PzRC7nTfAGB44ivqXlXYHfgPhiHn1q4LNi3MUgb8PRquipM9VGvwErkow%2FX7Q1uWTuyVM5l5G%2BK144FxtMcBtLJMFEg9abcbF2ylTX%2B7CGCabedeZFOmgJcddEmSSOPn43FO%2BNwy5Iiye%2BBWDaKECInW1MnrwjUjK7VJAG4MbWLRQ%2FIk8kfS%2FIdZ%2FSjBZw4P4jPka4pCk8J0ERemZht2%2FHy6JurgUzUFqUx2ficXwpdiO2SYDhxjjQdd%2Fut5FjyzCZxbzBBjqkAWNcPlz%2FVdpd%2BXPpy3ZJfZpLCfRN0UaxeAYrVkIyFMDMULwvh28WYoSZ%2BLGeLeVNyYOG1qgojo7gnsCo5jyuswXdhptlleurd5ow9y%2BfPviAq1VR6vLVrllf1LUJqOaCAWFmBjwUNDDBeHCoCOtD7Pb413djJX67GIvtzZo16sHwBZ0kxlJ%2F5X43HALMdpXxzn30Y1wwcUFKuAAzbmq%2FepFYw2AK&X-Amz-Signature=c7523dd9b108f3624e7afc380ae7ee705a3fffadcbe8448e5f85f266271ddda6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHEKQZT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B9DL4aWag24DiuF1IZMpZMas%2BlWbnT0UMFrk1vNTVwgIhAPg7XaqTi0wgSfUQ0WAiqQ2FhqFQkD6ognMhvTsg0LOrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjjw3NYJqQKXu2RnQq3APRXFmOA36X%2BfGgq4wbra4t87nlMqLtK8OPHdRbgqVvxKsFFzvsi7TWaTVRJVWbX4Ffq%2Bq4qf5%2BH91SpwIdPHHGsx8FRJejmcMrn2KeHkfJLGiKfrM4I82l2cEYxi7Nnn2FCuFkiv3ToVGEc9mpqvbHMz5HbC39B6TPRu0ZqZaACqpAfKj%2F%2FrTyVG%2FIdZCYh%2BXwRidOK2vdDc2jNKn6MwlwEpd8H773OlNxq995rqajpMOgly2v1XE33kPmeNonHw384KJ5GBLwvN8kOg0VA3iDrbuHfhD1oN%2FK6k%2Fpj63i4AFE%2FHGBNkkDRw1%2BBDCsm4ow42Gz%2BduMZIfMlEL3JiY1m2quivztSxyL4qdDe%2B%2FzXWiwvi7l2mNb4hMQD1PzRC7nTfAGB44ivqXlXYHfgPhiHn1q4LNi3MUgb8PRquipM9VGvwErkow%2FX7Q1uWTuyVM5l5G%2BK144FxtMcBtLJMFEg9abcbF2ylTX%2B7CGCabedeZFOmgJcddEmSSOPn43FO%2BNwy5Iiye%2BBWDaKECInW1MnrwjUjK7VJAG4MbWLRQ%2FIk8kfS%2FIdZ%2FSjBZw4P4jPka4pCk8J0ERemZht2%2FHy6JurgUzUFqUx2ficXwpdiO2SYDhxjjQdd%2Fut5FjyzCZxbzBBjqkAWNcPlz%2FVdpd%2BXPpy3ZJfZpLCfRN0UaxeAYrVkIyFMDMULwvh28WYoSZ%2BLGeLeVNyYOG1qgojo7gnsCo5jyuswXdhptlleurd5ow9y%2BfPviAq1VR6vLVrllf1LUJqOaCAWFmBjwUNDDBeHCoCOtD7Pb413djJX67GIvtzZo16sHwBZ0kxlJ%2F5X43HALMdpXxzn30Y1wwcUFKuAAzbmq%2FepFYw2AK&X-Amz-Signature=2e6f204387078db7426180fcc5d31cc19237204875e0b7207d085fd9c1b85745&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHEKQZT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B9DL4aWag24DiuF1IZMpZMas%2BlWbnT0UMFrk1vNTVwgIhAPg7XaqTi0wgSfUQ0WAiqQ2FhqFQkD6ognMhvTsg0LOrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjjw3NYJqQKXu2RnQq3APRXFmOA36X%2BfGgq4wbra4t87nlMqLtK8OPHdRbgqVvxKsFFzvsi7TWaTVRJVWbX4Ffq%2Bq4qf5%2BH91SpwIdPHHGsx8FRJejmcMrn2KeHkfJLGiKfrM4I82l2cEYxi7Nnn2FCuFkiv3ToVGEc9mpqvbHMz5HbC39B6TPRu0ZqZaACqpAfKj%2F%2FrTyVG%2FIdZCYh%2BXwRidOK2vdDc2jNKn6MwlwEpd8H773OlNxq995rqajpMOgly2v1XE33kPmeNonHw384KJ5GBLwvN8kOg0VA3iDrbuHfhD1oN%2FK6k%2Fpj63i4AFE%2FHGBNkkDRw1%2BBDCsm4ow42Gz%2BduMZIfMlEL3JiY1m2quivztSxyL4qdDe%2B%2FzXWiwvi7l2mNb4hMQD1PzRC7nTfAGB44ivqXlXYHfgPhiHn1q4LNi3MUgb8PRquipM9VGvwErkow%2FX7Q1uWTuyVM5l5G%2BK144FxtMcBtLJMFEg9abcbF2ylTX%2B7CGCabedeZFOmgJcddEmSSOPn43FO%2BNwy5Iiye%2BBWDaKECInW1MnrwjUjK7VJAG4MbWLRQ%2FIk8kfS%2FIdZ%2FSjBZw4P4jPka4pCk8J0ERemZht2%2FHy6JurgUzUFqUx2ficXwpdiO2SYDhxjjQdd%2Fut5FjyzCZxbzBBjqkAWNcPlz%2FVdpd%2BXPpy3ZJfZpLCfRN0UaxeAYrVkIyFMDMULwvh28WYoSZ%2BLGeLeVNyYOG1qgojo7gnsCo5jyuswXdhptlleurd5ow9y%2BfPviAq1VR6vLVrllf1LUJqOaCAWFmBjwUNDDBeHCoCOtD7Pb413djJX67GIvtzZo16sHwBZ0kxlJ%2F5X43HALMdpXxzn30Y1wwcUFKuAAzbmq%2FepFYw2AK&X-Amz-Signature=fac9d4cc0cb5b3e27546ed07ed9d684c67adf2b663e389cab67f2dd8c79c21d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHEKQZT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B9DL4aWag24DiuF1IZMpZMas%2BlWbnT0UMFrk1vNTVwgIhAPg7XaqTi0wgSfUQ0WAiqQ2FhqFQkD6ognMhvTsg0LOrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjjw3NYJqQKXu2RnQq3APRXFmOA36X%2BfGgq4wbra4t87nlMqLtK8OPHdRbgqVvxKsFFzvsi7TWaTVRJVWbX4Ffq%2Bq4qf5%2BH91SpwIdPHHGsx8FRJejmcMrn2KeHkfJLGiKfrM4I82l2cEYxi7Nnn2FCuFkiv3ToVGEc9mpqvbHMz5HbC39B6TPRu0ZqZaACqpAfKj%2F%2FrTyVG%2FIdZCYh%2BXwRidOK2vdDc2jNKn6MwlwEpd8H773OlNxq995rqajpMOgly2v1XE33kPmeNonHw384KJ5GBLwvN8kOg0VA3iDrbuHfhD1oN%2FK6k%2Fpj63i4AFE%2FHGBNkkDRw1%2BBDCsm4ow42Gz%2BduMZIfMlEL3JiY1m2quivztSxyL4qdDe%2B%2FzXWiwvi7l2mNb4hMQD1PzRC7nTfAGB44ivqXlXYHfgPhiHn1q4LNi3MUgb8PRquipM9VGvwErkow%2FX7Q1uWTuyVM5l5G%2BK144FxtMcBtLJMFEg9abcbF2ylTX%2B7CGCabedeZFOmgJcddEmSSOPn43FO%2BNwy5Iiye%2BBWDaKECInW1MnrwjUjK7VJAG4MbWLRQ%2FIk8kfS%2FIdZ%2FSjBZw4P4jPka4pCk8J0ERemZht2%2FHy6JurgUzUFqUx2ficXwpdiO2SYDhxjjQdd%2Fut5FjyzCZxbzBBjqkAWNcPlz%2FVdpd%2BXPpy3ZJfZpLCfRN0UaxeAYrVkIyFMDMULwvh28WYoSZ%2BLGeLeVNyYOG1qgojo7gnsCo5jyuswXdhptlleurd5ow9y%2BfPviAq1VR6vLVrllf1LUJqOaCAWFmBjwUNDDBeHCoCOtD7Pb413djJX67GIvtzZo16sHwBZ0kxlJ%2F5X43HALMdpXxzn30Y1wwcUFKuAAzbmq%2FepFYw2AK&X-Amz-Signature=aa20242f99afccbe3f1c35bce81eb6ad0ca44578fa2b9cfc4c892b904e26bf56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHEKQZT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B9DL4aWag24DiuF1IZMpZMas%2BlWbnT0UMFrk1vNTVwgIhAPg7XaqTi0wgSfUQ0WAiqQ2FhqFQkD6ognMhvTsg0LOrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjjw3NYJqQKXu2RnQq3APRXFmOA36X%2BfGgq4wbra4t87nlMqLtK8OPHdRbgqVvxKsFFzvsi7TWaTVRJVWbX4Ffq%2Bq4qf5%2BH91SpwIdPHHGsx8FRJejmcMrn2KeHkfJLGiKfrM4I82l2cEYxi7Nnn2FCuFkiv3ToVGEc9mpqvbHMz5HbC39B6TPRu0ZqZaACqpAfKj%2F%2FrTyVG%2FIdZCYh%2BXwRidOK2vdDc2jNKn6MwlwEpd8H773OlNxq995rqajpMOgly2v1XE33kPmeNonHw384KJ5GBLwvN8kOg0VA3iDrbuHfhD1oN%2FK6k%2Fpj63i4AFE%2FHGBNkkDRw1%2BBDCsm4ow42Gz%2BduMZIfMlEL3JiY1m2quivztSxyL4qdDe%2B%2FzXWiwvi7l2mNb4hMQD1PzRC7nTfAGB44ivqXlXYHfgPhiHn1q4LNi3MUgb8PRquipM9VGvwErkow%2FX7Q1uWTuyVM5l5G%2BK144FxtMcBtLJMFEg9abcbF2ylTX%2B7CGCabedeZFOmgJcddEmSSOPn43FO%2BNwy5Iiye%2BBWDaKECInW1MnrwjUjK7VJAG4MbWLRQ%2FIk8kfS%2FIdZ%2FSjBZw4P4jPka4pCk8J0ERemZht2%2FHy6JurgUzUFqUx2ficXwpdiO2SYDhxjjQdd%2Fut5FjyzCZxbzBBjqkAWNcPlz%2FVdpd%2BXPpy3ZJfZpLCfRN0UaxeAYrVkIyFMDMULwvh28WYoSZ%2BLGeLeVNyYOG1qgojo7gnsCo5jyuswXdhptlleurd5ow9y%2BfPviAq1VR6vLVrllf1LUJqOaCAWFmBjwUNDDBeHCoCOtD7Pb413djJX67GIvtzZo16sHwBZ0kxlJ%2F5X43HALMdpXxzn30Y1wwcUFKuAAzbmq%2FepFYw2AK&X-Amz-Signature=331ccb5764a24d2e64c69c2f2127cab2c583947b097a21e5a5f2b2638f7faefb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHEKQZT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B9DL4aWag24DiuF1IZMpZMas%2BlWbnT0UMFrk1vNTVwgIhAPg7XaqTi0wgSfUQ0WAiqQ2FhqFQkD6ognMhvTsg0LOrKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyjjw3NYJqQKXu2RnQq3APRXFmOA36X%2BfGgq4wbra4t87nlMqLtK8OPHdRbgqVvxKsFFzvsi7TWaTVRJVWbX4Ffq%2Bq4qf5%2BH91SpwIdPHHGsx8FRJejmcMrn2KeHkfJLGiKfrM4I82l2cEYxi7Nnn2FCuFkiv3ToVGEc9mpqvbHMz5HbC39B6TPRu0ZqZaACqpAfKj%2F%2FrTyVG%2FIdZCYh%2BXwRidOK2vdDc2jNKn6MwlwEpd8H773OlNxq995rqajpMOgly2v1XE33kPmeNonHw384KJ5GBLwvN8kOg0VA3iDrbuHfhD1oN%2FK6k%2Fpj63i4AFE%2FHGBNkkDRw1%2BBDCsm4ow42Gz%2BduMZIfMlEL3JiY1m2quivztSxyL4qdDe%2B%2FzXWiwvi7l2mNb4hMQD1PzRC7nTfAGB44ivqXlXYHfgPhiHn1q4LNi3MUgb8PRquipM9VGvwErkow%2FX7Q1uWTuyVM5l5G%2BK144FxtMcBtLJMFEg9abcbF2ylTX%2B7CGCabedeZFOmgJcddEmSSOPn43FO%2BNwy5Iiye%2BBWDaKECInW1MnrwjUjK7VJAG4MbWLRQ%2FIk8kfS%2FIdZ%2FSjBZw4P4jPka4pCk8J0ERemZht2%2FHy6JurgUzUFqUx2ficXwpdiO2SYDhxjjQdd%2Fut5FjyzCZxbzBBjqkAWNcPlz%2FVdpd%2BXPpy3ZJfZpLCfRN0UaxeAYrVkIyFMDMULwvh28WYoSZ%2BLGeLeVNyYOG1qgojo7gnsCo5jyuswXdhptlleurd5ow9y%2BfPviAq1VR6vLVrllf1LUJqOaCAWFmBjwUNDDBeHCoCOtD7Pb413djJX67GIvtzZo16sHwBZ0kxlJ%2F5X43HALMdpXxzn30Y1wwcUFKuAAzbmq%2FepFYw2AK&X-Amz-Signature=2bcb048a4e454e87ea484d21211f60c6432b57f24afe9c113a9ab76bb10214e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
