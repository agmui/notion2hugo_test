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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MHUABS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUFqfxupzyNRBkyFFro2XVR6PhbVuekoO4aNEpvkr4tQIgWIY2x4p%2BqtobBoT1eWjlhTZetTRf6Lx%2B484%2BQVZdyRQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCMB4zPCADaoNpZ2ircA5X9MZYJV8aE9PhLNWVOf2yCrLDB0nbVRiRqNfoDFeVOyjeJ7AF3W2OxuZdmJwaNwTglyzwbBVqJRDe8D%2BKhJNUS0x6CRHTbYz2sy8gvz8awhnlvIr7IxDRPEf1fWQ1eUxjD5GCGMPNl7LANpzYspF2Ci9DGWNtGn9aIRGgQaduR%2Fq8J8FO2zB6g8Da0HSq7YjGF26nQ6Ce4roVRaLiTntV11ZqaPidQYwHpiDxCH9l9aJK7rkY1R53P3sGOtTTf8MSuSl3573nUTYnaVpRDasqBR1SeAxm0OByj1ZqEL8sJJczSwUj%2BTDt%2FhFHH%2FJVC2GcPbnLxYOVlTAKHLorfP3O%2BU%2BP3PBOdv6VRS43YdOyhhX7g7BR5YD%2BgZ2M%2FCJ3Cpz4xEb9tSR%2FRbWVaDr3hoRVzUGE5g7AoNKU2CuNuzFqipBWYmxRJEZDNs2dl9BGm4WBETRQoIMB51KdCddTRCK8jvP4znA3%2Fu5rdcN0OeV3Om2ZuprpJJ88A3Usr4nw%2FHiExCG2UW82v0WihxW4LzE4x7aOkAqQksTuK8%2B2GH6sqWMvuNuf7ZvxC%2FWdBOjYp%2FYDVtB2ePOEZZHFdSqKntiRf9eGYGfU0ny9Uy6MrIqUA5fD5Tr18s%2Btsyd35MJT75cMGOqUBS991DZUb8m7YvT7uF%2FTJv7PA38kfYw4DVKlcZmo90Nbru8utgYNLouKp8tNRtIciBbsOHZ2kVpRDvfJRpBTWtgwVXd6AJ8SZuhPNNQPEoRsqVbAXr7y%2BQ1XqY6MaGqEHOywuwymrRdEOU0TuGXWZWjnXE0i17t9k5oX9k1j3Vhgu6GFBdiblEuyWsHv%2F0Mrl3dRP8DMFXrfT%2BnwQmbReCjGV05or&X-Amz-Signature=4d6479e109fe3600518b862263b9c13d5839e9eed372cc518506ce0320dce566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MHUABS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUFqfxupzyNRBkyFFro2XVR6PhbVuekoO4aNEpvkr4tQIgWIY2x4p%2BqtobBoT1eWjlhTZetTRf6Lx%2B484%2BQVZdyRQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCMB4zPCADaoNpZ2ircA5X9MZYJV8aE9PhLNWVOf2yCrLDB0nbVRiRqNfoDFeVOyjeJ7AF3W2OxuZdmJwaNwTglyzwbBVqJRDe8D%2BKhJNUS0x6CRHTbYz2sy8gvz8awhnlvIr7IxDRPEf1fWQ1eUxjD5GCGMPNl7LANpzYspF2Ci9DGWNtGn9aIRGgQaduR%2Fq8J8FO2zB6g8Da0HSq7YjGF26nQ6Ce4roVRaLiTntV11ZqaPidQYwHpiDxCH9l9aJK7rkY1R53P3sGOtTTf8MSuSl3573nUTYnaVpRDasqBR1SeAxm0OByj1ZqEL8sJJczSwUj%2BTDt%2FhFHH%2FJVC2GcPbnLxYOVlTAKHLorfP3O%2BU%2BP3PBOdv6VRS43YdOyhhX7g7BR5YD%2BgZ2M%2FCJ3Cpz4xEb9tSR%2FRbWVaDr3hoRVzUGE5g7AoNKU2CuNuzFqipBWYmxRJEZDNs2dl9BGm4WBETRQoIMB51KdCddTRCK8jvP4znA3%2Fu5rdcN0OeV3Om2ZuprpJJ88A3Usr4nw%2FHiExCG2UW82v0WihxW4LzE4x7aOkAqQksTuK8%2B2GH6sqWMvuNuf7ZvxC%2FWdBOjYp%2FYDVtB2ePOEZZHFdSqKntiRf9eGYGfU0ny9Uy6MrIqUA5fD5Tr18s%2Btsyd35MJT75cMGOqUBS991DZUb8m7YvT7uF%2FTJv7PA38kfYw4DVKlcZmo90Nbru8utgYNLouKp8tNRtIciBbsOHZ2kVpRDvfJRpBTWtgwVXd6AJ8SZuhPNNQPEoRsqVbAXr7y%2BQ1XqY6MaGqEHOywuwymrRdEOU0TuGXWZWjnXE0i17t9k5oX9k1j3Vhgu6GFBdiblEuyWsHv%2F0Mrl3dRP8DMFXrfT%2BnwQmbReCjGV05or&X-Amz-Signature=85d678f4ffade21d45e3a6ac8ae1b66e1d13d1190cc05668e37be8e3e1fc7f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MHUABS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUFqfxupzyNRBkyFFro2XVR6PhbVuekoO4aNEpvkr4tQIgWIY2x4p%2BqtobBoT1eWjlhTZetTRf6Lx%2B484%2BQVZdyRQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCMB4zPCADaoNpZ2ircA5X9MZYJV8aE9PhLNWVOf2yCrLDB0nbVRiRqNfoDFeVOyjeJ7AF3W2OxuZdmJwaNwTglyzwbBVqJRDe8D%2BKhJNUS0x6CRHTbYz2sy8gvz8awhnlvIr7IxDRPEf1fWQ1eUxjD5GCGMPNl7LANpzYspF2Ci9DGWNtGn9aIRGgQaduR%2Fq8J8FO2zB6g8Da0HSq7YjGF26nQ6Ce4roVRaLiTntV11ZqaPidQYwHpiDxCH9l9aJK7rkY1R53P3sGOtTTf8MSuSl3573nUTYnaVpRDasqBR1SeAxm0OByj1ZqEL8sJJczSwUj%2BTDt%2FhFHH%2FJVC2GcPbnLxYOVlTAKHLorfP3O%2BU%2BP3PBOdv6VRS43YdOyhhX7g7BR5YD%2BgZ2M%2FCJ3Cpz4xEb9tSR%2FRbWVaDr3hoRVzUGE5g7AoNKU2CuNuzFqipBWYmxRJEZDNs2dl9BGm4WBETRQoIMB51KdCddTRCK8jvP4znA3%2Fu5rdcN0OeV3Om2ZuprpJJ88A3Usr4nw%2FHiExCG2UW82v0WihxW4LzE4x7aOkAqQksTuK8%2B2GH6sqWMvuNuf7ZvxC%2FWdBOjYp%2FYDVtB2ePOEZZHFdSqKntiRf9eGYGfU0ny9Uy6MrIqUA5fD5Tr18s%2Btsyd35MJT75cMGOqUBS991DZUb8m7YvT7uF%2FTJv7PA38kfYw4DVKlcZmo90Nbru8utgYNLouKp8tNRtIciBbsOHZ2kVpRDvfJRpBTWtgwVXd6AJ8SZuhPNNQPEoRsqVbAXr7y%2BQ1XqY6MaGqEHOywuwymrRdEOU0TuGXWZWjnXE0i17t9k5oX9k1j3Vhgu6GFBdiblEuyWsHv%2F0Mrl3dRP8DMFXrfT%2BnwQmbReCjGV05or&X-Amz-Signature=5c1f938dcfdf6febb3aee92b9a418bfe46745ad1d344a00a460c4c6994369863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MHUABS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUFqfxupzyNRBkyFFro2XVR6PhbVuekoO4aNEpvkr4tQIgWIY2x4p%2BqtobBoT1eWjlhTZetTRf6Lx%2B484%2BQVZdyRQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCMB4zPCADaoNpZ2ircA5X9MZYJV8aE9PhLNWVOf2yCrLDB0nbVRiRqNfoDFeVOyjeJ7AF3W2OxuZdmJwaNwTglyzwbBVqJRDe8D%2BKhJNUS0x6CRHTbYz2sy8gvz8awhnlvIr7IxDRPEf1fWQ1eUxjD5GCGMPNl7LANpzYspF2Ci9DGWNtGn9aIRGgQaduR%2Fq8J8FO2zB6g8Da0HSq7YjGF26nQ6Ce4roVRaLiTntV11ZqaPidQYwHpiDxCH9l9aJK7rkY1R53P3sGOtTTf8MSuSl3573nUTYnaVpRDasqBR1SeAxm0OByj1ZqEL8sJJczSwUj%2BTDt%2FhFHH%2FJVC2GcPbnLxYOVlTAKHLorfP3O%2BU%2BP3PBOdv6VRS43YdOyhhX7g7BR5YD%2BgZ2M%2FCJ3Cpz4xEb9tSR%2FRbWVaDr3hoRVzUGE5g7AoNKU2CuNuzFqipBWYmxRJEZDNs2dl9BGm4WBETRQoIMB51KdCddTRCK8jvP4znA3%2Fu5rdcN0OeV3Om2ZuprpJJ88A3Usr4nw%2FHiExCG2UW82v0WihxW4LzE4x7aOkAqQksTuK8%2B2GH6sqWMvuNuf7ZvxC%2FWdBOjYp%2FYDVtB2ePOEZZHFdSqKntiRf9eGYGfU0ny9Uy6MrIqUA5fD5Tr18s%2Btsyd35MJT75cMGOqUBS991DZUb8m7YvT7uF%2FTJv7PA38kfYw4DVKlcZmo90Nbru8utgYNLouKp8tNRtIciBbsOHZ2kVpRDvfJRpBTWtgwVXd6AJ8SZuhPNNQPEoRsqVbAXr7y%2BQ1XqY6MaGqEHOywuwymrRdEOU0TuGXWZWjnXE0i17t9k5oX9k1j3Vhgu6GFBdiblEuyWsHv%2F0Mrl3dRP8DMFXrfT%2BnwQmbReCjGV05or&X-Amz-Signature=efa91f85473c32c5eaa2f12fb770e3272fc29ac17340ab27fd5b38191edf02b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MHUABS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUFqfxupzyNRBkyFFro2XVR6PhbVuekoO4aNEpvkr4tQIgWIY2x4p%2BqtobBoT1eWjlhTZetTRf6Lx%2B484%2BQVZdyRQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCMB4zPCADaoNpZ2ircA5X9MZYJV8aE9PhLNWVOf2yCrLDB0nbVRiRqNfoDFeVOyjeJ7AF3W2OxuZdmJwaNwTglyzwbBVqJRDe8D%2BKhJNUS0x6CRHTbYz2sy8gvz8awhnlvIr7IxDRPEf1fWQ1eUxjD5GCGMPNl7LANpzYspF2Ci9DGWNtGn9aIRGgQaduR%2Fq8J8FO2zB6g8Da0HSq7YjGF26nQ6Ce4roVRaLiTntV11ZqaPidQYwHpiDxCH9l9aJK7rkY1R53P3sGOtTTf8MSuSl3573nUTYnaVpRDasqBR1SeAxm0OByj1ZqEL8sJJczSwUj%2BTDt%2FhFHH%2FJVC2GcPbnLxYOVlTAKHLorfP3O%2BU%2BP3PBOdv6VRS43YdOyhhX7g7BR5YD%2BgZ2M%2FCJ3Cpz4xEb9tSR%2FRbWVaDr3hoRVzUGE5g7AoNKU2CuNuzFqipBWYmxRJEZDNs2dl9BGm4WBETRQoIMB51KdCddTRCK8jvP4znA3%2Fu5rdcN0OeV3Om2ZuprpJJ88A3Usr4nw%2FHiExCG2UW82v0WihxW4LzE4x7aOkAqQksTuK8%2B2GH6sqWMvuNuf7ZvxC%2FWdBOjYp%2FYDVtB2ePOEZZHFdSqKntiRf9eGYGfU0ny9Uy6MrIqUA5fD5Tr18s%2Btsyd35MJT75cMGOqUBS991DZUb8m7YvT7uF%2FTJv7PA38kfYw4DVKlcZmo90Nbru8utgYNLouKp8tNRtIciBbsOHZ2kVpRDvfJRpBTWtgwVXd6AJ8SZuhPNNQPEoRsqVbAXr7y%2BQ1XqY6MaGqEHOywuwymrRdEOU0TuGXWZWjnXE0i17t9k5oX9k1j3Vhgu6GFBdiblEuyWsHv%2F0Mrl3dRP8DMFXrfT%2BnwQmbReCjGV05or&X-Amz-Signature=447a5a0c7ffe2d5f2c4d85fb32ed685b65da23b0c7ecb5c845497b4dcae80e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MHUABS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUFqfxupzyNRBkyFFro2XVR6PhbVuekoO4aNEpvkr4tQIgWIY2x4p%2BqtobBoT1eWjlhTZetTRf6Lx%2B484%2BQVZdyRQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCMB4zPCADaoNpZ2ircA5X9MZYJV8aE9PhLNWVOf2yCrLDB0nbVRiRqNfoDFeVOyjeJ7AF3W2OxuZdmJwaNwTglyzwbBVqJRDe8D%2BKhJNUS0x6CRHTbYz2sy8gvz8awhnlvIr7IxDRPEf1fWQ1eUxjD5GCGMPNl7LANpzYspF2Ci9DGWNtGn9aIRGgQaduR%2Fq8J8FO2zB6g8Da0HSq7YjGF26nQ6Ce4roVRaLiTntV11ZqaPidQYwHpiDxCH9l9aJK7rkY1R53P3sGOtTTf8MSuSl3573nUTYnaVpRDasqBR1SeAxm0OByj1ZqEL8sJJczSwUj%2BTDt%2FhFHH%2FJVC2GcPbnLxYOVlTAKHLorfP3O%2BU%2BP3PBOdv6VRS43YdOyhhX7g7BR5YD%2BgZ2M%2FCJ3Cpz4xEb9tSR%2FRbWVaDr3hoRVzUGE5g7AoNKU2CuNuzFqipBWYmxRJEZDNs2dl9BGm4WBETRQoIMB51KdCddTRCK8jvP4znA3%2Fu5rdcN0OeV3Om2ZuprpJJ88A3Usr4nw%2FHiExCG2UW82v0WihxW4LzE4x7aOkAqQksTuK8%2B2GH6sqWMvuNuf7ZvxC%2FWdBOjYp%2FYDVtB2ePOEZZHFdSqKntiRf9eGYGfU0ny9Uy6MrIqUA5fD5Tr18s%2Btsyd35MJT75cMGOqUBS991DZUb8m7YvT7uF%2FTJv7PA38kfYw4DVKlcZmo90Nbru8utgYNLouKp8tNRtIciBbsOHZ2kVpRDvfJRpBTWtgwVXd6AJ8SZuhPNNQPEoRsqVbAXr7y%2BQ1XqY6MaGqEHOywuwymrRdEOU0TuGXWZWjnXE0i17t9k5oX9k1j3Vhgu6GFBdiblEuyWsHv%2F0Mrl3dRP8DMFXrfT%2BnwQmbReCjGV05or&X-Amz-Signature=7eafe0f7cedd54e0c100529d820f9811249792c09a7ffc2aea74c8d57abfc57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MHUABS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUFqfxupzyNRBkyFFro2XVR6PhbVuekoO4aNEpvkr4tQIgWIY2x4p%2BqtobBoT1eWjlhTZetTRf6Lx%2B484%2BQVZdyRQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCMB4zPCADaoNpZ2ircA5X9MZYJV8aE9PhLNWVOf2yCrLDB0nbVRiRqNfoDFeVOyjeJ7AF3W2OxuZdmJwaNwTglyzwbBVqJRDe8D%2BKhJNUS0x6CRHTbYz2sy8gvz8awhnlvIr7IxDRPEf1fWQ1eUxjD5GCGMPNl7LANpzYspF2Ci9DGWNtGn9aIRGgQaduR%2Fq8J8FO2zB6g8Da0HSq7YjGF26nQ6Ce4roVRaLiTntV11ZqaPidQYwHpiDxCH9l9aJK7rkY1R53P3sGOtTTf8MSuSl3573nUTYnaVpRDasqBR1SeAxm0OByj1ZqEL8sJJczSwUj%2BTDt%2FhFHH%2FJVC2GcPbnLxYOVlTAKHLorfP3O%2BU%2BP3PBOdv6VRS43YdOyhhX7g7BR5YD%2BgZ2M%2FCJ3Cpz4xEb9tSR%2FRbWVaDr3hoRVzUGE5g7AoNKU2CuNuzFqipBWYmxRJEZDNs2dl9BGm4WBETRQoIMB51KdCddTRCK8jvP4znA3%2Fu5rdcN0OeV3Om2ZuprpJJ88A3Usr4nw%2FHiExCG2UW82v0WihxW4LzE4x7aOkAqQksTuK8%2B2GH6sqWMvuNuf7ZvxC%2FWdBOjYp%2FYDVtB2ePOEZZHFdSqKntiRf9eGYGfU0ny9Uy6MrIqUA5fD5Tr18s%2Btsyd35MJT75cMGOqUBS991DZUb8m7YvT7uF%2FTJv7PA38kfYw4DVKlcZmo90Nbru8utgYNLouKp8tNRtIciBbsOHZ2kVpRDvfJRpBTWtgwVXd6AJ8SZuhPNNQPEoRsqVbAXr7y%2BQ1XqY6MaGqEHOywuwymrRdEOU0TuGXWZWjnXE0i17t9k5oX9k1j3Vhgu6GFBdiblEuyWsHv%2F0Mrl3dRP8DMFXrfT%2BnwQmbReCjGV05or&X-Amz-Signature=5cb07b234a8e5a38b1e861cb22e4b8417b755e1d1a9e108c0407115771eafc2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MHUABS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUFqfxupzyNRBkyFFro2XVR6PhbVuekoO4aNEpvkr4tQIgWIY2x4p%2BqtobBoT1eWjlhTZetTRf6Lx%2B484%2BQVZdyRQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCMB4zPCADaoNpZ2ircA5X9MZYJV8aE9PhLNWVOf2yCrLDB0nbVRiRqNfoDFeVOyjeJ7AF3W2OxuZdmJwaNwTglyzwbBVqJRDe8D%2BKhJNUS0x6CRHTbYz2sy8gvz8awhnlvIr7IxDRPEf1fWQ1eUxjD5GCGMPNl7LANpzYspF2Ci9DGWNtGn9aIRGgQaduR%2Fq8J8FO2zB6g8Da0HSq7YjGF26nQ6Ce4roVRaLiTntV11ZqaPidQYwHpiDxCH9l9aJK7rkY1R53P3sGOtTTf8MSuSl3573nUTYnaVpRDasqBR1SeAxm0OByj1ZqEL8sJJczSwUj%2BTDt%2FhFHH%2FJVC2GcPbnLxYOVlTAKHLorfP3O%2BU%2BP3PBOdv6VRS43YdOyhhX7g7BR5YD%2BgZ2M%2FCJ3Cpz4xEb9tSR%2FRbWVaDr3hoRVzUGE5g7AoNKU2CuNuzFqipBWYmxRJEZDNs2dl9BGm4WBETRQoIMB51KdCddTRCK8jvP4znA3%2Fu5rdcN0OeV3Om2ZuprpJJ88A3Usr4nw%2FHiExCG2UW82v0WihxW4LzE4x7aOkAqQksTuK8%2B2GH6sqWMvuNuf7ZvxC%2FWdBOjYp%2FYDVtB2ePOEZZHFdSqKntiRf9eGYGfU0ny9Uy6MrIqUA5fD5Tr18s%2Btsyd35MJT75cMGOqUBS991DZUb8m7YvT7uF%2FTJv7PA38kfYw4DVKlcZmo90Nbru8utgYNLouKp8tNRtIciBbsOHZ2kVpRDvfJRpBTWtgwVXd6AJ8SZuhPNNQPEoRsqVbAXr7y%2BQ1XqY6MaGqEHOywuwymrRdEOU0TuGXWZWjnXE0i17t9k5oX9k1j3Vhgu6GFBdiblEuyWsHv%2F0Mrl3dRP8DMFXrfT%2BnwQmbReCjGV05or&X-Amz-Signature=bd80102b2535fdf73733ebdd99a0eef409d563c8969403748fd1c7718b974187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
