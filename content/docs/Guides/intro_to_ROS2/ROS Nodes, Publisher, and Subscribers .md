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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IQVGYB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBsxtYUxr7edZKwDI29TustKrhlOgQUNeEcBHgdaag2bAiEAugXN8h7qdoU%2F8%2FfRZvW%2FAj7E%2Fz3OdPLIjEFpOCua9Zsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJbgdrYffCoI%2Ff9jjCrcAwvqAqWhGxG9d5b4rDnyVxybbGvXFYGWTqjqCfiKRPoSSBU05fINX6wmUp6ymc1MG18c2G5LMRrNuBpCgrU77e4YCaXA3G%2FpM5PXqB0TsVLr6wNOaVG7rZOl5EKZJ%2B3lFr7VdeZ94ix4PFuGpprrsdUF3nQubXLs1H%2FH%2FxAMIsig5zWWChWBXM39MnnbniJaoRiqgRHwkyYvKhomh%2Bc2fWZbs8pc03FgkkSMUsYiiwu8GihBr9ivE4naha4WBN7OqODztTlqylOugEO0cKF3mhGL08BLkKy8eFKeE9yHgBSFlp0JFvtISUpa06fEjF9d%2BvK6CU1z51jGCOR9dECkU9nFauWJfzLqSyX8vvkWhtvSOfB6ktqmsMwYumqSEZL%2F4fFFMMBH3PfTyMkHmIsho3wcvLsDOqS9F1ETGVP43TQMAh%2BqgGmXKgoqHthiwvWkiB18JDKrnZC90Vxs3h11pdELMOCi0C%2BbbCFUAdMMMQjVF4cwc12%2FV%2BjIHvmTdiott5dVT%2F0kBd3n1gGM5FYlqdf8jvOWaqPSTWsFz1Ey1McixxcmK45pghyt3jQRCy6axafZM%2F7cpo%2BhvslsCA2DsUfRz7x9EreVAzbVQLcq4YGWeBnzKODqPNqvLIzlMKT3%2FcEGOqUBcSadETY7mmyHgOrIqZkwZ5Q6VXlGzBGRsrBx27wg0yoL7l0AK9EuULdbDN%2BidxJD6Ovkv2m5CuLRVhNOumZKmow4UVoJM0X67dWsDGHwWd%2BTO%2B7eKYK%2FbZgoiCRO8NFHLUdthbc8qkuzDFRbaZcB9ZBhSlq%2F4uvp%2BHJ3EBR5N0Vr5YsSAw9M%2BagkgFlsVTVyIIm6KYrji%2BmcYIRI0le84ddVkcpe&X-Amz-Signature=9590fb8c5534a291fbdc3d7983c45d1f55f9f496ca1e3d32cab77fe9ac602dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IQVGYB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBsxtYUxr7edZKwDI29TustKrhlOgQUNeEcBHgdaag2bAiEAugXN8h7qdoU%2F8%2FfRZvW%2FAj7E%2Fz3OdPLIjEFpOCua9Zsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJbgdrYffCoI%2Ff9jjCrcAwvqAqWhGxG9d5b4rDnyVxybbGvXFYGWTqjqCfiKRPoSSBU05fINX6wmUp6ymc1MG18c2G5LMRrNuBpCgrU77e4YCaXA3G%2FpM5PXqB0TsVLr6wNOaVG7rZOl5EKZJ%2B3lFr7VdeZ94ix4PFuGpprrsdUF3nQubXLs1H%2FH%2FxAMIsig5zWWChWBXM39MnnbniJaoRiqgRHwkyYvKhomh%2Bc2fWZbs8pc03FgkkSMUsYiiwu8GihBr9ivE4naha4WBN7OqODztTlqylOugEO0cKF3mhGL08BLkKy8eFKeE9yHgBSFlp0JFvtISUpa06fEjF9d%2BvK6CU1z51jGCOR9dECkU9nFauWJfzLqSyX8vvkWhtvSOfB6ktqmsMwYumqSEZL%2F4fFFMMBH3PfTyMkHmIsho3wcvLsDOqS9F1ETGVP43TQMAh%2BqgGmXKgoqHthiwvWkiB18JDKrnZC90Vxs3h11pdELMOCi0C%2BbbCFUAdMMMQjVF4cwc12%2FV%2BjIHvmTdiott5dVT%2F0kBd3n1gGM5FYlqdf8jvOWaqPSTWsFz1Ey1McixxcmK45pghyt3jQRCy6axafZM%2F7cpo%2BhvslsCA2DsUfRz7x9EreVAzbVQLcq4YGWeBnzKODqPNqvLIzlMKT3%2FcEGOqUBcSadETY7mmyHgOrIqZkwZ5Q6VXlGzBGRsrBx27wg0yoL7l0AK9EuULdbDN%2BidxJD6Ovkv2m5CuLRVhNOumZKmow4UVoJM0X67dWsDGHwWd%2BTO%2B7eKYK%2FbZgoiCRO8NFHLUdthbc8qkuzDFRbaZcB9ZBhSlq%2F4uvp%2BHJ3EBR5N0Vr5YsSAw9M%2BagkgFlsVTVyIIm6KYrji%2BmcYIRI0le84ddVkcpe&X-Amz-Signature=a958463e82f5e6ee2d30c76e7a495b2df759b0865925deadbfc523a675f83e73&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IQVGYB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBsxtYUxr7edZKwDI29TustKrhlOgQUNeEcBHgdaag2bAiEAugXN8h7qdoU%2F8%2FfRZvW%2FAj7E%2Fz3OdPLIjEFpOCua9Zsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJbgdrYffCoI%2Ff9jjCrcAwvqAqWhGxG9d5b4rDnyVxybbGvXFYGWTqjqCfiKRPoSSBU05fINX6wmUp6ymc1MG18c2G5LMRrNuBpCgrU77e4YCaXA3G%2FpM5PXqB0TsVLr6wNOaVG7rZOl5EKZJ%2B3lFr7VdeZ94ix4PFuGpprrsdUF3nQubXLs1H%2FH%2FxAMIsig5zWWChWBXM39MnnbniJaoRiqgRHwkyYvKhomh%2Bc2fWZbs8pc03FgkkSMUsYiiwu8GihBr9ivE4naha4WBN7OqODztTlqylOugEO0cKF3mhGL08BLkKy8eFKeE9yHgBSFlp0JFvtISUpa06fEjF9d%2BvK6CU1z51jGCOR9dECkU9nFauWJfzLqSyX8vvkWhtvSOfB6ktqmsMwYumqSEZL%2F4fFFMMBH3PfTyMkHmIsho3wcvLsDOqS9F1ETGVP43TQMAh%2BqgGmXKgoqHthiwvWkiB18JDKrnZC90Vxs3h11pdELMOCi0C%2BbbCFUAdMMMQjVF4cwc12%2FV%2BjIHvmTdiott5dVT%2F0kBd3n1gGM5FYlqdf8jvOWaqPSTWsFz1Ey1McixxcmK45pghyt3jQRCy6axafZM%2F7cpo%2BhvslsCA2DsUfRz7x9EreVAzbVQLcq4YGWeBnzKODqPNqvLIzlMKT3%2FcEGOqUBcSadETY7mmyHgOrIqZkwZ5Q6VXlGzBGRsrBx27wg0yoL7l0AK9EuULdbDN%2BidxJD6Ovkv2m5CuLRVhNOumZKmow4UVoJM0X67dWsDGHwWd%2BTO%2B7eKYK%2FbZgoiCRO8NFHLUdthbc8qkuzDFRbaZcB9ZBhSlq%2F4uvp%2BHJ3EBR5N0Vr5YsSAw9M%2BagkgFlsVTVyIIm6KYrji%2BmcYIRI0le84ddVkcpe&X-Amz-Signature=8a1ecd6a65f6711d0e78be7597fcf71e12aeb0d989d8ff9f6bd6324b505b5c0d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IQVGYB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBsxtYUxr7edZKwDI29TustKrhlOgQUNeEcBHgdaag2bAiEAugXN8h7qdoU%2F8%2FfRZvW%2FAj7E%2Fz3OdPLIjEFpOCua9Zsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJbgdrYffCoI%2Ff9jjCrcAwvqAqWhGxG9d5b4rDnyVxybbGvXFYGWTqjqCfiKRPoSSBU05fINX6wmUp6ymc1MG18c2G5LMRrNuBpCgrU77e4YCaXA3G%2FpM5PXqB0TsVLr6wNOaVG7rZOl5EKZJ%2B3lFr7VdeZ94ix4PFuGpprrsdUF3nQubXLs1H%2FH%2FxAMIsig5zWWChWBXM39MnnbniJaoRiqgRHwkyYvKhomh%2Bc2fWZbs8pc03FgkkSMUsYiiwu8GihBr9ivE4naha4WBN7OqODztTlqylOugEO0cKF3mhGL08BLkKy8eFKeE9yHgBSFlp0JFvtISUpa06fEjF9d%2BvK6CU1z51jGCOR9dECkU9nFauWJfzLqSyX8vvkWhtvSOfB6ktqmsMwYumqSEZL%2F4fFFMMBH3PfTyMkHmIsho3wcvLsDOqS9F1ETGVP43TQMAh%2BqgGmXKgoqHthiwvWkiB18JDKrnZC90Vxs3h11pdELMOCi0C%2BbbCFUAdMMMQjVF4cwc12%2FV%2BjIHvmTdiott5dVT%2F0kBd3n1gGM5FYlqdf8jvOWaqPSTWsFz1Ey1McixxcmK45pghyt3jQRCy6axafZM%2F7cpo%2BhvslsCA2DsUfRz7x9EreVAzbVQLcq4YGWeBnzKODqPNqvLIzlMKT3%2FcEGOqUBcSadETY7mmyHgOrIqZkwZ5Q6VXlGzBGRsrBx27wg0yoL7l0AK9EuULdbDN%2BidxJD6Ovkv2m5CuLRVhNOumZKmow4UVoJM0X67dWsDGHwWd%2BTO%2B7eKYK%2FbZgoiCRO8NFHLUdthbc8qkuzDFRbaZcB9ZBhSlq%2F4uvp%2BHJ3EBR5N0Vr5YsSAw9M%2BagkgFlsVTVyIIm6KYrji%2BmcYIRI0le84ddVkcpe&X-Amz-Signature=7b26cfb6d96ac0db3549f01331fd1f848628b4e95b750f31195894e5f9b101a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IQVGYB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBsxtYUxr7edZKwDI29TustKrhlOgQUNeEcBHgdaag2bAiEAugXN8h7qdoU%2F8%2FfRZvW%2FAj7E%2Fz3OdPLIjEFpOCua9Zsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJbgdrYffCoI%2Ff9jjCrcAwvqAqWhGxG9d5b4rDnyVxybbGvXFYGWTqjqCfiKRPoSSBU05fINX6wmUp6ymc1MG18c2G5LMRrNuBpCgrU77e4YCaXA3G%2FpM5PXqB0TsVLr6wNOaVG7rZOl5EKZJ%2B3lFr7VdeZ94ix4PFuGpprrsdUF3nQubXLs1H%2FH%2FxAMIsig5zWWChWBXM39MnnbniJaoRiqgRHwkyYvKhomh%2Bc2fWZbs8pc03FgkkSMUsYiiwu8GihBr9ivE4naha4WBN7OqODztTlqylOugEO0cKF3mhGL08BLkKy8eFKeE9yHgBSFlp0JFvtISUpa06fEjF9d%2BvK6CU1z51jGCOR9dECkU9nFauWJfzLqSyX8vvkWhtvSOfB6ktqmsMwYumqSEZL%2F4fFFMMBH3PfTyMkHmIsho3wcvLsDOqS9F1ETGVP43TQMAh%2BqgGmXKgoqHthiwvWkiB18JDKrnZC90Vxs3h11pdELMOCi0C%2BbbCFUAdMMMQjVF4cwc12%2FV%2BjIHvmTdiott5dVT%2F0kBd3n1gGM5FYlqdf8jvOWaqPSTWsFz1Ey1McixxcmK45pghyt3jQRCy6axafZM%2F7cpo%2BhvslsCA2DsUfRz7x9EreVAzbVQLcq4YGWeBnzKODqPNqvLIzlMKT3%2FcEGOqUBcSadETY7mmyHgOrIqZkwZ5Q6VXlGzBGRsrBx27wg0yoL7l0AK9EuULdbDN%2BidxJD6Ovkv2m5CuLRVhNOumZKmow4UVoJM0X67dWsDGHwWd%2BTO%2B7eKYK%2FbZgoiCRO8NFHLUdthbc8qkuzDFRbaZcB9ZBhSlq%2F4uvp%2BHJ3EBR5N0Vr5YsSAw9M%2BagkgFlsVTVyIIm6KYrji%2BmcYIRI0le84ddVkcpe&X-Amz-Signature=3d5c98a3b1bb8a2a37e0bf9d6c530490d08a31804895721846a770a73ed1551a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IQVGYB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBsxtYUxr7edZKwDI29TustKrhlOgQUNeEcBHgdaag2bAiEAugXN8h7qdoU%2F8%2FfRZvW%2FAj7E%2Fz3OdPLIjEFpOCua9Zsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJbgdrYffCoI%2Ff9jjCrcAwvqAqWhGxG9d5b4rDnyVxybbGvXFYGWTqjqCfiKRPoSSBU05fINX6wmUp6ymc1MG18c2G5LMRrNuBpCgrU77e4YCaXA3G%2FpM5PXqB0TsVLr6wNOaVG7rZOl5EKZJ%2B3lFr7VdeZ94ix4PFuGpprrsdUF3nQubXLs1H%2FH%2FxAMIsig5zWWChWBXM39MnnbniJaoRiqgRHwkyYvKhomh%2Bc2fWZbs8pc03FgkkSMUsYiiwu8GihBr9ivE4naha4WBN7OqODztTlqylOugEO0cKF3mhGL08BLkKy8eFKeE9yHgBSFlp0JFvtISUpa06fEjF9d%2BvK6CU1z51jGCOR9dECkU9nFauWJfzLqSyX8vvkWhtvSOfB6ktqmsMwYumqSEZL%2F4fFFMMBH3PfTyMkHmIsho3wcvLsDOqS9F1ETGVP43TQMAh%2BqgGmXKgoqHthiwvWkiB18JDKrnZC90Vxs3h11pdELMOCi0C%2BbbCFUAdMMMQjVF4cwc12%2FV%2BjIHvmTdiott5dVT%2F0kBd3n1gGM5FYlqdf8jvOWaqPSTWsFz1Ey1McixxcmK45pghyt3jQRCy6axafZM%2F7cpo%2BhvslsCA2DsUfRz7x9EreVAzbVQLcq4YGWeBnzKODqPNqvLIzlMKT3%2FcEGOqUBcSadETY7mmyHgOrIqZkwZ5Q6VXlGzBGRsrBx27wg0yoL7l0AK9EuULdbDN%2BidxJD6Ovkv2m5CuLRVhNOumZKmow4UVoJM0X67dWsDGHwWd%2BTO%2B7eKYK%2FbZgoiCRO8NFHLUdthbc8qkuzDFRbaZcB9ZBhSlq%2F4uvp%2BHJ3EBR5N0Vr5YsSAw9M%2BagkgFlsVTVyIIm6KYrji%2BmcYIRI0le84ddVkcpe&X-Amz-Signature=33bb76fccd8051dde26d084e292ac5816d5d7e9dd06d88fd7ea2790997149a81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IQVGYB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBsxtYUxr7edZKwDI29TustKrhlOgQUNeEcBHgdaag2bAiEAugXN8h7qdoU%2F8%2FfRZvW%2FAj7E%2Fz3OdPLIjEFpOCua9Zsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJbgdrYffCoI%2Ff9jjCrcAwvqAqWhGxG9d5b4rDnyVxybbGvXFYGWTqjqCfiKRPoSSBU05fINX6wmUp6ymc1MG18c2G5LMRrNuBpCgrU77e4YCaXA3G%2FpM5PXqB0TsVLr6wNOaVG7rZOl5EKZJ%2B3lFr7VdeZ94ix4PFuGpprrsdUF3nQubXLs1H%2FH%2FxAMIsig5zWWChWBXM39MnnbniJaoRiqgRHwkyYvKhomh%2Bc2fWZbs8pc03FgkkSMUsYiiwu8GihBr9ivE4naha4WBN7OqODztTlqylOugEO0cKF3mhGL08BLkKy8eFKeE9yHgBSFlp0JFvtISUpa06fEjF9d%2BvK6CU1z51jGCOR9dECkU9nFauWJfzLqSyX8vvkWhtvSOfB6ktqmsMwYumqSEZL%2F4fFFMMBH3PfTyMkHmIsho3wcvLsDOqS9F1ETGVP43TQMAh%2BqgGmXKgoqHthiwvWkiB18JDKrnZC90Vxs3h11pdELMOCi0C%2BbbCFUAdMMMQjVF4cwc12%2FV%2BjIHvmTdiott5dVT%2F0kBd3n1gGM5FYlqdf8jvOWaqPSTWsFz1Ey1McixxcmK45pghyt3jQRCy6axafZM%2F7cpo%2BhvslsCA2DsUfRz7x9EreVAzbVQLcq4YGWeBnzKODqPNqvLIzlMKT3%2FcEGOqUBcSadETY7mmyHgOrIqZkwZ5Q6VXlGzBGRsrBx27wg0yoL7l0AK9EuULdbDN%2BidxJD6Ovkv2m5CuLRVhNOumZKmow4UVoJM0X67dWsDGHwWd%2BTO%2B7eKYK%2FbZgoiCRO8NFHLUdthbc8qkuzDFRbaZcB9ZBhSlq%2F4uvp%2BHJ3EBR5N0Vr5YsSAw9M%2BagkgFlsVTVyIIm6KYrji%2BmcYIRI0le84ddVkcpe&X-Amz-Signature=2ea56e73bcc375fc5677ccafc736893c9ddbf28ee53a16543f0260482a49563c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IQVGYB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBsxtYUxr7edZKwDI29TustKrhlOgQUNeEcBHgdaag2bAiEAugXN8h7qdoU%2F8%2FfRZvW%2FAj7E%2Fz3OdPLIjEFpOCua9Zsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJbgdrYffCoI%2Ff9jjCrcAwvqAqWhGxG9d5b4rDnyVxybbGvXFYGWTqjqCfiKRPoSSBU05fINX6wmUp6ymc1MG18c2G5LMRrNuBpCgrU77e4YCaXA3G%2FpM5PXqB0TsVLr6wNOaVG7rZOl5EKZJ%2B3lFr7VdeZ94ix4PFuGpprrsdUF3nQubXLs1H%2FH%2FxAMIsig5zWWChWBXM39MnnbniJaoRiqgRHwkyYvKhomh%2Bc2fWZbs8pc03FgkkSMUsYiiwu8GihBr9ivE4naha4WBN7OqODztTlqylOugEO0cKF3mhGL08BLkKy8eFKeE9yHgBSFlp0JFvtISUpa06fEjF9d%2BvK6CU1z51jGCOR9dECkU9nFauWJfzLqSyX8vvkWhtvSOfB6ktqmsMwYumqSEZL%2F4fFFMMBH3PfTyMkHmIsho3wcvLsDOqS9F1ETGVP43TQMAh%2BqgGmXKgoqHthiwvWkiB18JDKrnZC90Vxs3h11pdELMOCi0C%2BbbCFUAdMMMQjVF4cwc12%2FV%2BjIHvmTdiott5dVT%2F0kBd3n1gGM5FYlqdf8jvOWaqPSTWsFz1Ey1McixxcmK45pghyt3jQRCy6axafZM%2F7cpo%2BhvslsCA2DsUfRz7x9EreVAzbVQLcq4YGWeBnzKODqPNqvLIzlMKT3%2FcEGOqUBcSadETY7mmyHgOrIqZkwZ5Q6VXlGzBGRsrBx27wg0yoL7l0AK9EuULdbDN%2BidxJD6Ovkv2m5CuLRVhNOumZKmow4UVoJM0X67dWsDGHwWd%2BTO%2B7eKYK%2FbZgoiCRO8NFHLUdthbc8qkuzDFRbaZcB9ZBhSlq%2F4uvp%2BHJ3EBR5N0Vr5YsSAw9M%2BagkgFlsVTVyIIm6KYrji%2BmcYIRI0le84ddVkcpe&X-Amz-Signature=051b494cbf8e47a2d0fa0e7adcf5fac37b34ff87a9e79d31c04e7dcd9ba730b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
