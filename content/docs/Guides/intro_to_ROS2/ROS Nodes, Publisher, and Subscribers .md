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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN5E2XV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoNRIudNqpQsm3pXCC76c%2FOMZOTphTSgzPkcmycqlkLwIgAjA7yHiMIiffrEPTBN4r3eEOh35hc9DP8HOx7xi3ANYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSHq4pHy91VaN6q8SrcAyOENESB99ygSBCN4C1PE5DA0ZuTe8UrD9Zl7VQeudAPqeNFbKf8V8RvjzJf0zIpTWlfsf9zSZNbiXveo145uxntcGWVjBNm4XjdL1BaU55KF2ZyRxia6F2NNSjps%2F7jBpbe4M7K3pFBP5s9EbmczVx3N8YP5CO0DUil2zf%2FPvbTs1Znelt%2BT8SLnJ677pxGVYm6kByM0RFwzxfuNGliKnk5wWkBOUJdgl9qr4iVc5J3VGEmoptjNTXNLVISGXxSq%2BieRLh84h6sLaGobcqgbuo%2F%2FWaW3PgHC72biqQPj0D1unDqQ5fsYUuIUNNlJqNoW6pZZ0cAyU3rD09jrqwcvYG8%2FawXPDzHK65t9VYDA%2F66WBVKM2os4AyEb34kwWb8i9ZKEtjvxsnHFm8oC%2FpnN0XuFQozG9Qo7qkEihvrbKFxwr2yjxA3D6MmV8nMR4yXp0v09CCrvL7X3Alv2eTmC7phDnQryu8XbG3OE1ktaphWZsSt1wbgU4aLkR5cYSWLlVWLfWfM6dILrecdtGsyvsgypcdoPAy3VCmAyCfyzx5rOmzNys4JZlH7jM%2FChjNhDVJIFgNz0QyJ9jEZYm5Ubadjg9K0ZyeQ3626SAygjwrcDcF8pR1oRQAFOrDDMJCau8MGOqUBzmJplz9eDfJPmwFlALEXrppTU5RPB0xQ3s3wUGYn5FGbGeJO7Jrx3UvSHTez3YVpxGTX9EJvPe0RyDvx%2BjUfzk9%2Fe9E1uXin6orne1qeTVVT%2Fv9x43MLPuUE8Lg1rOBjLmc7R5qXStnyAaJ0qOUZHo54hFJz9hNWcrWlrb6Mey8zPfrfkm%2F%2FH%2FW%2BwPu906CxO5SS8eJEMGLo3LVbqqCDCTQkHe11&X-Amz-Signature=2c2a0d36433d30b31171a29c3d3c4547daf967bf0235bbfe358e97eaa5e3a1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN5E2XV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoNRIudNqpQsm3pXCC76c%2FOMZOTphTSgzPkcmycqlkLwIgAjA7yHiMIiffrEPTBN4r3eEOh35hc9DP8HOx7xi3ANYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSHq4pHy91VaN6q8SrcAyOENESB99ygSBCN4C1PE5DA0ZuTe8UrD9Zl7VQeudAPqeNFbKf8V8RvjzJf0zIpTWlfsf9zSZNbiXveo145uxntcGWVjBNm4XjdL1BaU55KF2ZyRxia6F2NNSjps%2F7jBpbe4M7K3pFBP5s9EbmczVx3N8YP5CO0DUil2zf%2FPvbTs1Znelt%2BT8SLnJ677pxGVYm6kByM0RFwzxfuNGliKnk5wWkBOUJdgl9qr4iVc5J3VGEmoptjNTXNLVISGXxSq%2BieRLh84h6sLaGobcqgbuo%2F%2FWaW3PgHC72biqQPj0D1unDqQ5fsYUuIUNNlJqNoW6pZZ0cAyU3rD09jrqwcvYG8%2FawXPDzHK65t9VYDA%2F66WBVKM2os4AyEb34kwWb8i9ZKEtjvxsnHFm8oC%2FpnN0XuFQozG9Qo7qkEihvrbKFxwr2yjxA3D6MmV8nMR4yXp0v09CCrvL7X3Alv2eTmC7phDnQryu8XbG3OE1ktaphWZsSt1wbgU4aLkR5cYSWLlVWLfWfM6dILrecdtGsyvsgypcdoPAy3VCmAyCfyzx5rOmzNys4JZlH7jM%2FChjNhDVJIFgNz0QyJ9jEZYm5Ubadjg9K0ZyeQ3626SAygjwrcDcF8pR1oRQAFOrDDMJCau8MGOqUBzmJplz9eDfJPmwFlALEXrppTU5RPB0xQ3s3wUGYn5FGbGeJO7Jrx3UvSHTez3YVpxGTX9EJvPe0RyDvx%2BjUfzk9%2Fe9E1uXin6orne1qeTVVT%2Fv9x43MLPuUE8Lg1rOBjLmc7R5qXStnyAaJ0qOUZHo54hFJz9hNWcrWlrb6Mey8zPfrfkm%2F%2FH%2FW%2BwPu906CxO5SS8eJEMGLo3LVbqqCDCTQkHe11&X-Amz-Signature=02d59cfeb57d9998ea14337b2e13bbcd75df64e6c876c1748ba61647077fcd2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN5E2XV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoNRIudNqpQsm3pXCC76c%2FOMZOTphTSgzPkcmycqlkLwIgAjA7yHiMIiffrEPTBN4r3eEOh35hc9DP8HOx7xi3ANYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSHq4pHy91VaN6q8SrcAyOENESB99ygSBCN4C1PE5DA0ZuTe8UrD9Zl7VQeudAPqeNFbKf8V8RvjzJf0zIpTWlfsf9zSZNbiXveo145uxntcGWVjBNm4XjdL1BaU55KF2ZyRxia6F2NNSjps%2F7jBpbe4M7K3pFBP5s9EbmczVx3N8YP5CO0DUil2zf%2FPvbTs1Znelt%2BT8SLnJ677pxGVYm6kByM0RFwzxfuNGliKnk5wWkBOUJdgl9qr4iVc5J3VGEmoptjNTXNLVISGXxSq%2BieRLh84h6sLaGobcqgbuo%2F%2FWaW3PgHC72biqQPj0D1unDqQ5fsYUuIUNNlJqNoW6pZZ0cAyU3rD09jrqwcvYG8%2FawXPDzHK65t9VYDA%2F66WBVKM2os4AyEb34kwWb8i9ZKEtjvxsnHFm8oC%2FpnN0XuFQozG9Qo7qkEihvrbKFxwr2yjxA3D6MmV8nMR4yXp0v09CCrvL7X3Alv2eTmC7phDnQryu8XbG3OE1ktaphWZsSt1wbgU4aLkR5cYSWLlVWLfWfM6dILrecdtGsyvsgypcdoPAy3VCmAyCfyzx5rOmzNys4JZlH7jM%2FChjNhDVJIFgNz0QyJ9jEZYm5Ubadjg9K0ZyeQ3626SAygjwrcDcF8pR1oRQAFOrDDMJCau8MGOqUBzmJplz9eDfJPmwFlALEXrppTU5RPB0xQ3s3wUGYn5FGbGeJO7Jrx3UvSHTez3YVpxGTX9EJvPe0RyDvx%2BjUfzk9%2Fe9E1uXin6orne1qeTVVT%2Fv9x43MLPuUE8Lg1rOBjLmc7R5qXStnyAaJ0qOUZHo54hFJz9hNWcrWlrb6Mey8zPfrfkm%2F%2FH%2FW%2BwPu906CxO5SS8eJEMGLo3LVbqqCDCTQkHe11&X-Amz-Signature=7db9202a2c4cf7ce497dbe75870eee2014df39a4891779a50ab102523322c515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN5E2XV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoNRIudNqpQsm3pXCC76c%2FOMZOTphTSgzPkcmycqlkLwIgAjA7yHiMIiffrEPTBN4r3eEOh35hc9DP8HOx7xi3ANYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSHq4pHy91VaN6q8SrcAyOENESB99ygSBCN4C1PE5DA0ZuTe8UrD9Zl7VQeudAPqeNFbKf8V8RvjzJf0zIpTWlfsf9zSZNbiXveo145uxntcGWVjBNm4XjdL1BaU55KF2ZyRxia6F2NNSjps%2F7jBpbe4M7K3pFBP5s9EbmczVx3N8YP5CO0DUil2zf%2FPvbTs1Znelt%2BT8SLnJ677pxGVYm6kByM0RFwzxfuNGliKnk5wWkBOUJdgl9qr4iVc5J3VGEmoptjNTXNLVISGXxSq%2BieRLh84h6sLaGobcqgbuo%2F%2FWaW3PgHC72biqQPj0D1unDqQ5fsYUuIUNNlJqNoW6pZZ0cAyU3rD09jrqwcvYG8%2FawXPDzHK65t9VYDA%2F66WBVKM2os4AyEb34kwWb8i9ZKEtjvxsnHFm8oC%2FpnN0XuFQozG9Qo7qkEihvrbKFxwr2yjxA3D6MmV8nMR4yXp0v09CCrvL7X3Alv2eTmC7phDnQryu8XbG3OE1ktaphWZsSt1wbgU4aLkR5cYSWLlVWLfWfM6dILrecdtGsyvsgypcdoPAy3VCmAyCfyzx5rOmzNys4JZlH7jM%2FChjNhDVJIFgNz0QyJ9jEZYm5Ubadjg9K0ZyeQ3626SAygjwrcDcF8pR1oRQAFOrDDMJCau8MGOqUBzmJplz9eDfJPmwFlALEXrppTU5RPB0xQ3s3wUGYn5FGbGeJO7Jrx3UvSHTez3YVpxGTX9EJvPe0RyDvx%2BjUfzk9%2Fe9E1uXin6orne1qeTVVT%2Fv9x43MLPuUE8Lg1rOBjLmc7R5qXStnyAaJ0qOUZHo54hFJz9hNWcrWlrb6Mey8zPfrfkm%2F%2FH%2FW%2BwPu906CxO5SS8eJEMGLo3LVbqqCDCTQkHe11&X-Amz-Signature=102530c5ff1d4b31058b9612436f00b9cd2d90ab0af22f525db6c2b0035c56d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN5E2XV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoNRIudNqpQsm3pXCC76c%2FOMZOTphTSgzPkcmycqlkLwIgAjA7yHiMIiffrEPTBN4r3eEOh35hc9DP8HOx7xi3ANYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSHq4pHy91VaN6q8SrcAyOENESB99ygSBCN4C1PE5DA0ZuTe8UrD9Zl7VQeudAPqeNFbKf8V8RvjzJf0zIpTWlfsf9zSZNbiXveo145uxntcGWVjBNm4XjdL1BaU55KF2ZyRxia6F2NNSjps%2F7jBpbe4M7K3pFBP5s9EbmczVx3N8YP5CO0DUil2zf%2FPvbTs1Znelt%2BT8SLnJ677pxGVYm6kByM0RFwzxfuNGliKnk5wWkBOUJdgl9qr4iVc5J3VGEmoptjNTXNLVISGXxSq%2BieRLh84h6sLaGobcqgbuo%2F%2FWaW3PgHC72biqQPj0D1unDqQ5fsYUuIUNNlJqNoW6pZZ0cAyU3rD09jrqwcvYG8%2FawXPDzHK65t9VYDA%2F66WBVKM2os4AyEb34kwWb8i9ZKEtjvxsnHFm8oC%2FpnN0XuFQozG9Qo7qkEihvrbKFxwr2yjxA3D6MmV8nMR4yXp0v09CCrvL7X3Alv2eTmC7phDnQryu8XbG3OE1ktaphWZsSt1wbgU4aLkR5cYSWLlVWLfWfM6dILrecdtGsyvsgypcdoPAy3VCmAyCfyzx5rOmzNys4JZlH7jM%2FChjNhDVJIFgNz0QyJ9jEZYm5Ubadjg9K0ZyeQ3626SAygjwrcDcF8pR1oRQAFOrDDMJCau8MGOqUBzmJplz9eDfJPmwFlALEXrppTU5RPB0xQ3s3wUGYn5FGbGeJO7Jrx3UvSHTez3YVpxGTX9EJvPe0RyDvx%2BjUfzk9%2Fe9E1uXin6orne1qeTVVT%2Fv9x43MLPuUE8Lg1rOBjLmc7R5qXStnyAaJ0qOUZHo54hFJz9hNWcrWlrb6Mey8zPfrfkm%2F%2FH%2FW%2BwPu906CxO5SS8eJEMGLo3LVbqqCDCTQkHe11&X-Amz-Signature=ab8687a400c6342c6e880f25d22d8a4182cb17fd728417b5d47ea20b645e229a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN5E2XV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoNRIudNqpQsm3pXCC76c%2FOMZOTphTSgzPkcmycqlkLwIgAjA7yHiMIiffrEPTBN4r3eEOh35hc9DP8HOx7xi3ANYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSHq4pHy91VaN6q8SrcAyOENESB99ygSBCN4C1PE5DA0ZuTe8UrD9Zl7VQeudAPqeNFbKf8V8RvjzJf0zIpTWlfsf9zSZNbiXveo145uxntcGWVjBNm4XjdL1BaU55KF2ZyRxia6F2NNSjps%2F7jBpbe4M7K3pFBP5s9EbmczVx3N8YP5CO0DUil2zf%2FPvbTs1Znelt%2BT8SLnJ677pxGVYm6kByM0RFwzxfuNGliKnk5wWkBOUJdgl9qr4iVc5J3VGEmoptjNTXNLVISGXxSq%2BieRLh84h6sLaGobcqgbuo%2F%2FWaW3PgHC72biqQPj0D1unDqQ5fsYUuIUNNlJqNoW6pZZ0cAyU3rD09jrqwcvYG8%2FawXPDzHK65t9VYDA%2F66WBVKM2os4AyEb34kwWb8i9ZKEtjvxsnHFm8oC%2FpnN0XuFQozG9Qo7qkEihvrbKFxwr2yjxA3D6MmV8nMR4yXp0v09CCrvL7X3Alv2eTmC7phDnQryu8XbG3OE1ktaphWZsSt1wbgU4aLkR5cYSWLlVWLfWfM6dILrecdtGsyvsgypcdoPAy3VCmAyCfyzx5rOmzNys4JZlH7jM%2FChjNhDVJIFgNz0QyJ9jEZYm5Ubadjg9K0ZyeQ3626SAygjwrcDcF8pR1oRQAFOrDDMJCau8MGOqUBzmJplz9eDfJPmwFlALEXrppTU5RPB0xQ3s3wUGYn5FGbGeJO7Jrx3UvSHTez3YVpxGTX9EJvPe0RyDvx%2BjUfzk9%2Fe9E1uXin6orne1qeTVVT%2Fv9x43MLPuUE8Lg1rOBjLmc7R5qXStnyAaJ0qOUZHo54hFJz9hNWcrWlrb6Mey8zPfrfkm%2F%2FH%2FW%2BwPu906CxO5SS8eJEMGLo3LVbqqCDCTQkHe11&X-Amz-Signature=b1595a11a550509293d134acd5d88a136faa3a107ab85dbdc6f043adae277181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN5E2XV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoNRIudNqpQsm3pXCC76c%2FOMZOTphTSgzPkcmycqlkLwIgAjA7yHiMIiffrEPTBN4r3eEOh35hc9DP8HOx7xi3ANYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSHq4pHy91VaN6q8SrcAyOENESB99ygSBCN4C1PE5DA0ZuTe8UrD9Zl7VQeudAPqeNFbKf8V8RvjzJf0zIpTWlfsf9zSZNbiXveo145uxntcGWVjBNm4XjdL1BaU55KF2ZyRxia6F2NNSjps%2F7jBpbe4M7K3pFBP5s9EbmczVx3N8YP5CO0DUil2zf%2FPvbTs1Znelt%2BT8SLnJ677pxGVYm6kByM0RFwzxfuNGliKnk5wWkBOUJdgl9qr4iVc5J3VGEmoptjNTXNLVISGXxSq%2BieRLh84h6sLaGobcqgbuo%2F%2FWaW3PgHC72biqQPj0D1unDqQ5fsYUuIUNNlJqNoW6pZZ0cAyU3rD09jrqwcvYG8%2FawXPDzHK65t9VYDA%2F66WBVKM2os4AyEb34kwWb8i9ZKEtjvxsnHFm8oC%2FpnN0XuFQozG9Qo7qkEihvrbKFxwr2yjxA3D6MmV8nMR4yXp0v09CCrvL7X3Alv2eTmC7phDnQryu8XbG3OE1ktaphWZsSt1wbgU4aLkR5cYSWLlVWLfWfM6dILrecdtGsyvsgypcdoPAy3VCmAyCfyzx5rOmzNys4JZlH7jM%2FChjNhDVJIFgNz0QyJ9jEZYm5Ubadjg9K0ZyeQ3626SAygjwrcDcF8pR1oRQAFOrDDMJCau8MGOqUBzmJplz9eDfJPmwFlALEXrppTU5RPB0xQ3s3wUGYn5FGbGeJO7Jrx3UvSHTez3YVpxGTX9EJvPe0RyDvx%2BjUfzk9%2Fe9E1uXin6orne1qeTVVT%2Fv9x43MLPuUE8Lg1rOBjLmc7R5qXStnyAaJ0qOUZHo54hFJz9hNWcrWlrb6Mey8zPfrfkm%2F%2FH%2FW%2BwPu906CxO5SS8eJEMGLo3LVbqqCDCTQkHe11&X-Amz-Signature=10dc41f87febc125ca1af6fe333ee4e44c6d27bf12b47fd99c7dfeaa32e5503c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN5E2XV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoNRIudNqpQsm3pXCC76c%2FOMZOTphTSgzPkcmycqlkLwIgAjA7yHiMIiffrEPTBN4r3eEOh35hc9DP8HOx7xi3ANYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSHq4pHy91VaN6q8SrcAyOENESB99ygSBCN4C1PE5DA0ZuTe8UrD9Zl7VQeudAPqeNFbKf8V8RvjzJf0zIpTWlfsf9zSZNbiXveo145uxntcGWVjBNm4XjdL1BaU55KF2ZyRxia6F2NNSjps%2F7jBpbe4M7K3pFBP5s9EbmczVx3N8YP5CO0DUil2zf%2FPvbTs1Znelt%2BT8SLnJ677pxGVYm6kByM0RFwzxfuNGliKnk5wWkBOUJdgl9qr4iVc5J3VGEmoptjNTXNLVISGXxSq%2BieRLh84h6sLaGobcqgbuo%2F%2FWaW3PgHC72biqQPj0D1unDqQ5fsYUuIUNNlJqNoW6pZZ0cAyU3rD09jrqwcvYG8%2FawXPDzHK65t9VYDA%2F66WBVKM2os4AyEb34kwWb8i9ZKEtjvxsnHFm8oC%2FpnN0XuFQozG9Qo7qkEihvrbKFxwr2yjxA3D6MmV8nMR4yXp0v09CCrvL7X3Alv2eTmC7phDnQryu8XbG3OE1ktaphWZsSt1wbgU4aLkR5cYSWLlVWLfWfM6dILrecdtGsyvsgypcdoPAy3VCmAyCfyzx5rOmzNys4JZlH7jM%2FChjNhDVJIFgNz0QyJ9jEZYm5Ubadjg9K0ZyeQ3626SAygjwrcDcF8pR1oRQAFOrDDMJCau8MGOqUBzmJplz9eDfJPmwFlALEXrppTU5RPB0xQ3s3wUGYn5FGbGeJO7Jrx3UvSHTez3YVpxGTX9EJvPe0RyDvx%2BjUfzk9%2Fe9E1uXin6orne1qeTVVT%2Fv9x43MLPuUE8Lg1rOBjLmc7R5qXStnyAaJ0qOUZHo54hFJz9hNWcrWlrb6Mey8zPfrfkm%2F%2FH%2FW%2BwPu906CxO5SS8eJEMGLo3LVbqqCDCTQkHe11&X-Amz-Signature=7e39dd18953ba0686131478965eb975773d2e5cb227664adb506b12ff4bbcfa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
