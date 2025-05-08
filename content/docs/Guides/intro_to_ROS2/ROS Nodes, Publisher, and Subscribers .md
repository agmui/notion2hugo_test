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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQX4526%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkbm3DqXRJRZ5%2B7dfNNUtaYH1QX9gamL1UDNOhsJTS3AIgXUvFP%2FhCz2CfgFH7zZ%2Fc8Z4dtQR0%2BAn3JRtmN4gfj0Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKZpBI5mWSU26H5qeyrcA%2FeF%2BnAasGa21SO67mMldS8UxQ2GFt6rm8a2Ux4Y1SMEXHOe8xn7tkhZAP6laQm0hCPRo96wAZoYGCIqGN4rAWeAp0zmtQ%2BajcgafGWqaEEfKLVFJNRX5qy%2BvgMkNesAnIDX0LMDJHMSsi9F03a0e8gyZUJdlzv4ePsr5m3AEi8O7y7t2MlGfqjW37G4q3thAByeWaYRVjJfhJhAB6PGZgN6umkq5ZvaGeU2RnnTlW2HZvVYwZnpovd9kRjwrRpuckMMkg2Rx2Q3fAjUg4lLwmYPtSAwZ9IeBo98p3uW%2BA3SyB2IDUT60vjPob4zmZSts%2BpPmaBBxyV7xQrSiS6AhC8ITnkrMurolXu%2BBlttLj9aPzqpG91V7aZvbFrsK6ChO8FIm7mgmc0dEP45RGD0m2PhC5H5O0MiwsRTHaQXJ%2BipQE7s075Oz63WSwT3c9BF4pfEzfOtqjTkvz4bLyrKzNBeeS2r0Iogs6kTxikmycIWu4alfSQl9rbpS5GYnAUxVppM%2Fwyg7uYRsNRy1Z0WjkJNW9wK1ApLh7b3d604OrwAlgKJH%2FbidX2DOS80Zq2RtFM0YIQtOgdKvfedQ5SLxF%2BHkAwM%2F0HvdNzWZruRWvSIH2P7U%2BLaVz3EwLo3MPCx9MAGOqUB3K1m8Rsp1%2Bl%2F%2B%2BM7xiMBWQqWTfGa%2FD4j0IU0srD58QFJEtOQKERBdBTgcX3KFo0a27DprvcczfP4k3fmsedppy6SKSQidHuyI3aohcHMr7oQrDaCGWYqN4z7vd342swnMBncnl3gPcPvCVJBjwJ1x83E02qyBt6CvHYW%2FWATl4gRGGZplbYOob%2B2%2BuP%2BtdRDrVhCw6k6Sqdxq0xYGaIv%2BWaVPZmS&X-Amz-Signature=6ddd93461c3af5709ba4ed379e52f8d0cf0143ec65ef0c24652c418147031b57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQX4526%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkbm3DqXRJRZ5%2B7dfNNUtaYH1QX9gamL1UDNOhsJTS3AIgXUvFP%2FhCz2CfgFH7zZ%2Fc8Z4dtQR0%2BAn3JRtmN4gfj0Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKZpBI5mWSU26H5qeyrcA%2FeF%2BnAasGa21SO67mMldS8UxQ2GFt6rm8a2Ux4Y1SMEXHOe8xn7tkhZAP6laQm0hCPRo96wAZoYGCIqGN4rAWeAp0zmtQ%2BajcgafGWqaEEfKLVFJNRX5qy%2BvgMkNesAnIDX0LMDJHMSsi9F03a0e8gyZUJdlzv4ePsr5m3AEi8O7y7t2MlGfqjW37G4q3thAByeWaYRVjJfhJhAB6PGZgN6umkq5ZvaGeU2RnnTlW2HZvVYwZnpovd9kRjwrRpuckMMkg2Rx2Q3fAjUg4lLwmYPtSAwZ9IeBo98p3uW%2BA3SyB2IDUT60vjPob4zmZSts%2BpPmaBBxyV7xQrSiS6AhC8ITnkrMurolXu%2BBlttLj9aPzqpG91V7aZvbFrsK6ChO8FIm7mgmc0dEP45RGD0m2PhC5H5O0MiwsRTHaQXJ%2BipQE7s075Oz63WSwT3c9BF4pfEzfOtqjTkvz4bLyrKzNBeeS2r0Iogs6kTxikmycIWu4alfSQl9rbpS5GYnAUxVppM%2Fwyg7uYRsNRy1Z0WjkJNW9wK1ApLh7b3d604OrwAlgKJH%2FbidX2DOS80Zq2RtFM0YIQtOgdKvfedQ5SLxF%2BHkAwM%2F0HvdNzWZruRWvSIH2P7U%2BLaVz3EwLo3MPCx9MAGOqUB3K1m8Rsp1%2Bl%2F%2B%2BM7xiMBWQqWTfGa%2FD4j0IU0srD58QFJEtOQKERBdBTgcX3KFo0a27DprvcczfP4k3fmsedppy6SKSQidHuyI3aohcHMr7oQrDaCGWYqN4z7vd342swnMBncnl3gPcPvCVJBjwJ1x83E02qyBt6CvHYW%2FWATl4gRGGZplbYOob%2B2%2BuP%2BtdRDrVhCw6k6Sqdxq0xYGaIv%2BWaVPZmS&X-Amz-Signature=b38a5ec6fc068c14be3a44810ba9c7bf9897aebd8eb1f82bd508942802ab1dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQX4526%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkbm3DqXRJRZ5%2B7dfNNUtaYH1QX9gamL1UDNOhsJTS3AIgXUvFP%2FhCz2CfgFH7zZ%2Fc8Z4dtQR0%2BAn3JRtmN4gfj0Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKZpBI5mWSU26H5qeyrcA%2FeF%2BnAasGa21SO67mMldS8UxQ2GFt6rm8a2Ux4Y1SMEXHOe8xn7tkhZAP6laQm0hCPRo96wAZoYGCIqGN4rAWeAp0zmtQ%2BajcgafGWqaEEfKLVFJNRX5qy%2BvgMkNesAnIDX0LMDJHMSsi9F03a0e8gyZUJdlzv4ePsr5m3AEi8O7y7t2MlGfqjW37G4q3thAByeWaYRVjJfhJhAB6PGZgN6umkq5ZvaGeU2RnnTlW2HZvVYwZnpovd9kRjwrRpuckMMkg2Rx2Q3fAjUg4lLwmYPtSAwZ9IeBo98p3uW%2BA3SyB2IDUT60vjPob4zmZSts%2BpPmaBBxyV7xQrSiS6AhC8ITnkrMurolXu%2BBlttLj9aPzqpG91V7aZvbFrsK6ChO8FIm7mgmc0dEP45RGD0m2PhC5H5O0MiwsRTHaQXJ%2BipQE7s075Oz63WSwT3c9BF4pfEzfOtqjTkvz4bLyrKzNBeeS2r0Iogs6kTxikmycIWu4alfSQl9rbpS5GYnAUxVppM%2Fwyg7uYRsNRy1Z0WjkJNW9wK1ApLh7b3d604OrwAlgKJH%2FbidX2DOS80Zq2RtFM0YIQtOgdKvfedQ5SLxF%2BHkAwM%2F0HvdNzWZruRWvSIH2P7U%2BLaVz3EwLo3MPCx9MAGOqUB3K1m8Rsp1%2Bl%2F%2B%2BM7xiMBWQqWTfGa%2FD4j0IU0srD58QFJEtOQKERBdBTgcX3KFo0a27DprvcczfP4k3fmsedppy6SKSQidHuyI3aohcHMr7oQrDaCGWYqN4z7vd342swnMBncnl3gPcPvCVJBjwJ1x83E02qyBt6CvHYW%2FWATl4gRGGZplbYOob%2B2%2BuP%2BtdRDrVhCw6k6Sqdxq0xYGaIv%2BWaVPZmS&X-Amz-Signature=a3526e718cebb9ede1484ebe1ace17799223af5c7b8f163247d251c4e26ff2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQX4526%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkbm3DqXRJRZ5%2B7dfNNUtaYH1QX9gamL1UDNOhsJTS3AIgXUvFP%2FhCz2CfgFH7zZ%2Fc8Z4dtQR0%2BAn3JRtmN4gfj0Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKZpBI5mWSU26H5qeyrcA%2FeF%2BnAasGa21SO67mMldS8UxQ2GFt6rm8a2Ux4Y1SMEXHOe8xn7tkhZAP6laQm0hCPRo96wAZoYGCIqGN4rAWeAp0zmtQ%2BajcgafGWqaEEfKLVFJNRX5qy%2BvgMkNesAnIDX0LMDJHMSsi9F03a0e8gyZUJdlzv4ePsr5m3AEi8O7y7t2MlGfqjW37G4q3thAByeWaYRVjJfhJhAB6PGZgN6umkq5ZvaGeU2RnnTlW2HZvVYwZnpovd9kRjwrRpuckMMkg2Rx2Q3fAjUg4lLwmYPtSAwZ9IeBo98p3uW%2BA3SyB2IDUT60vjPob4zmZSts%2BpPmaBBxyV7xQrSiS6AhC8ITnkrMurolXu%2BBlttLj9aPzqpG91V7aZvbFrsK6ChO8FIm7mgmc0dEP45RGD0m2PhC5H5O0MiwsRTHaQXJ%2BipQE7s075Oz63WSwT3c9BF4pfEzfOtqjTkvz4bLyrKzNBeeS2r0Iogs6kTxikmycIWu4alfSQl9rbpS5GYnAUxVppM%2Fwyg7uYRsNRy1Z0WjkJNW9wK1ApLh7b3d604OrwAlgKJH%2FbidX2DOS80Zq2RtFM0YIQtOgdKvfedQ5SLxF%2BHkAwM%2F0HvdNzWZruRWvSIH2P7U%2BLaVz3EwLo3MPCx9MAGOqUB3K1m8Rsp1%2Bl%2F%2B%2BM7xiMBWQqWTfGa%2FD4j0IU0srD58QFJEtOQKERBdBTgcX3KFo0a27DprvcczfP4k3fmsedppy6SKSQidHuyI3aohcHMr7oQrDaCGWYqN4z7vd342swnMBncnl3gPcPvCVJBjwJ1x83E02qyBt6CvHYW%2FWATl4gRGGZplbYOob%2B2%2BuP%2BtdRDrVhCw6k6Sqdxq0xYGaIv%2BWaVPZmS&X-Amz-Signature=c80c6fdc7e1dbc48586793f7bc38c6807e1dea64715f5857b3228c9a44eb01ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQX4526%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkbm3DqXRJRZ5%2B7dfNNUtaYH1QX9gamL1UDNOhsJTS3AIgXUvFP%2FhCz2CfgFH7zZ%2Fc8Z4dtQR0%2BAn3JRtmN4gfj0Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKZpBI5mWSU26H5qeyrcA%2FeF%2BnAasGa21SO67mMldS8UxQ2GFt6rm8a2Ux4Y1SMEXHOe8xn7tkhZAP6laQm0hCPRo96wAZoYGCIqGN4rAWeAp0zmtQ%2BajcgafGWqaEEfKLVFJNRX5qy%2BvgMkNesAnIDX0LMDJHMSsi9F03a0e8gyZUJdlzv4ePsr5m3AEi8O7y7t2MlGfqjW37G4q3thAByeWaYRVjJfhJhAB6PGZgN6umkq5ZvaGeU2RnnTlW2HZvVYwZnpovd9kRjwrRpuckMMkg2Rx2Q3fAjUg4lLwmYPtSAwZ9IeBo98p3uW%2BA3SyB2IDUT60vjPob4zmZSts%2BpPmaBBxyV7xQrSiS6AhC8ITnkrMurolXu%2BBlttLj9aPzqpG91V7aZvbFrsK6ChO8FIm7mgmc0dEP45RGD0m2PhC5H5O0MiwsRTHaQXJ%2BipQE7s075Oz63WSwT3c9BF4pfEzfOtqjTkvz4bLyrKzNBeeS2r0Iogs6kTxikmycIWu4alfSQl9rbpS5GYnAUxVppM%2Fwyg7uYRsNRy1Z0WjkJNW9wK1ApLh7b3d604OrwAlgKJH%2FbidX2DOS80Zq2RtFM0YIQtOgdKvfedQ5SLxF%2BHkAwM%2F0HvdNzWZruRWvSIH2P7U%2BLaVz3EwLo3MPCx9MAGOqUB3K1m8Rsp1%2Bl%2F%2B%2BM7xiMBWQqWTfGa%2FD4j0IU0srD58QFJEtOQKERBdBTgcX3KFo0a27DprvcczfP4k3fmsedppy6SKSQidHuyI3aohcHMr7oQrDaCGWYqN4z7vd342swnMBncnl3gPcPvCVJBjwJ1x83E02qyBt6CvHYW%2FWATl4gRGGZplbYOob%2B2%2BuP%2BtdRDrVhCw6k6Sqdxq0xYGaIv%2BWaVPZmS&X-Amz-Signature=cbf9a91fee970b15028f0b23251fdde95c4fd98b2dcbea05dcbb914710e500ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQX4526%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkbm3DqXRJRZ5%2B7dfNNUtaYH1QX9gamL1UDNOhsJTS3AIgXUvFP%2FhCz2CfgFH7zZ%2Fc8Z4dtQR0%2BAn3JRtmN4gfj0Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKZpBI5mWSU26H5qeyrcA%2FeF%2BnAasGa21SO67mMldS8UxQ2GFt6rm8a2Ux4Y1SMEXHOe8xn7tkhZAP6laQm0hCPRo96wAZoYGCIqGN4rAWeAp0zmtQ%2BajcgafGWqaEEfKLVFJNRX5qy%2BvgMkNesAnIDX0LMDJHMSsi9F03a0e8gyZUJdlzv4ePsr5m3AEi8O7y7t2MlGfqjW37G4q3thAByeWaYRVjJfhJhAB6PGZgN6umkq5ZvaGeU2RnnTlW2HZvVYwZnpovd9kRjwrRpuckMMkg2Rx2Q3fAjUg4lLwmYPtSAwZ9IeBo98p3uW%2BA3SyB2IDUT60vjPob4zmZSts%2BpPmaBBxyV7xQrSiS6AhC8ITnkrMurolXu%2BBlttLj9aPzqpG91V7aZvbFrsK6ChO8FIm7mgmc0dEP45RGD0m2PhC5H5O0MiwsRTHaQXJ%2BipQE7s075Oz63WSwT3c9BF4pfEzfOtqjTkvz4bLyrKzNBeeS2r0Iogs6kTxikmycIWu4alfSQl9rbpS5GYnAUxVppM%2Fwyg7uYRsNRy1Z0WjkJNW9wK1ApLh7b3d604OrwAlgKJH%2FbidX2DOS80Zq2RtFM0YIQtOgdKvfedQ5SLxF%2BHkAwM%2F0HvdNzWZruRWvSIH2P7U%2BLaVz3EwLo3MPCx9MAGOqUB3K1m8Rsp1%2Bl%2F%2B%2BM7xiMBWQqWTfGa%2FD4j0IU0srD58QFJEtOQKERBdBTgcX3KFo0a27DprvcczfP4k3fmsedppy6SKSQidHuyI3aohcHMr7oQrDaCGWYqN4z7vd342swnMBncnl3gPcPvCVJBjwJ1x83E02qyBt6CvHYW%2FWATl4gRGGZplbYOob%2B2%2BuP%2BtdRDrVhCw6k6Sqdxq0xYGaIv%2BWaVPZmS&X-Amz-Signature=f9b3046ae25ebc7be987074496ca4747cb7ee689ac395e0f51e5631f8938e8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQX4526%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkbm3DqXRJRZ5%2B7dfNNUtaYH1QX9gamL1UDNOhsJTS3AIgXUvFP%2FhCz2CfgFH7zZ%2Fc8Z4dtQR0%2BAn3JRtmN4gfj0Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKZpBI5mWSU26H5qeyrcA%2FeF%2BnAasGa21SO67mMldS8UxQ2GFt6rm8a2Ux4Y1SMEXHOe8xn7tkhZAP6laQm0hCPRo96wAZoYGCIqGN4rAWeAp0zmtQ%2BajcgafGWqaEEfKLVFJNRX5qy%2BvgMkNesAnIDX0LMDJHMSsi9F03a0e8gyZUJdlzv4ePsr5m3AEi8O7y7t2MlGfqjW37G4q3thAByeWaYRVjJfhJhAB6PGZgN6umkq5ZvaGeU2RnnTlW2HZvVYwZnpovd9kRjwrRpuckMMkg2Rx2Q3fAjUg4lLwmYPtSAwZ9IeBo98p3uW%2BA3SyB2IDUT60vjPob4zmZSts%2BpPmaBBxyV7xQrSiS6AhC8ITnkrMurolXu%2BBlttLj9aPzqpG91V7aZvbFrsK6ChO8FIm7mgmc0dEP45RGD0m2PhC5H5O0MiwsRTHaQXJ%2BipQE7s075Oz63WSwT3c9BF4pfEzfOtqjTkvz4bLyrKzNBeeS2r0Iogs6kTxikmycIWu4alfSQl9rbpS5GYnAUxVppM%2Fwyg7uYRsNRy1Z0WjkJNW9wK1ApLh7b3d604OrwAlgKJH%2FbidX2DOS80Zq2RtFM0YIQtOgdKvfedQ5SLxF%2BHkAwM%2F0HvdNzWZruRWvSIH2P7U%2BLaVz3EwLo3MPCx9MAGOqUB3K1m8Rsp1%2Bl%2F%2B%2BM7xiMBWQqWTfGa%2FD4j0IU0srD58QFJEtOQKERBdBTgcX3KFo0a27DprvcczfP4k3fmsedppy6SKSQidHuyI3aohcHMr7oQrDaCGWYqN4z7vd342swnMBncnl3gPcPvCVJBjwJ1x83E02qyBt6CvHYW%2FWATl4gRGGZplbYOob%2B2%2BuP%2BtdRDrVhCw6k6Sqdxq0xYGaIv%2BWaVPZmS&X-Amz-Signature=db41a0efd1119f8e6762057a6fa8c98915a3cf6b9abaee93b196d7b9a8532a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQX4526%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkbm3DqXRJRZ5%2B7dfNNUtaYH1QX9gamL1UDNOhsJTS3AIgXUvFP%2FhCz2CfgFH7zZ%2Fc8Z4dtQR0%2BAn3JRtmN4gfj0Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKZpBI5mWSU26H5qeyrcA%2FeF%2BnAasGa21SO67mMldS8UxQ2GFt6rm8a2Ux4Y1SMEXHOe8xn7tkhZAP6laQm0hCPRo96wAZoYGCIqGN4rAWeAp0zmtQ%2BajcgafGWqaEEfKLVFJNRX5qy%2BvgMkNesAnIDX0LMDJHMSsi9F03a0e8gyZUJdlzv4ePsr5m3AEi8O7y7t2MlGfqjW37G4q3thAByeWaYRVjJfhJhAB6PGZgN6umkq5ZvaGeU2RnnTlW2HZvVYwZnpovd9kRjwrRpuckMMkg2Rx2Q3fAjUg4lLwmYPtSAwZ9IeBo98p3uW%2BA3SyB2IDUT60vjPob4zmZSts%2BpPmaBBxyV7xQrSiS6AhC8ITnkrMurolXu%2BBlttLj9aPzqpG91V7aZvbFrsK6ChO8FIm7mgmc0dEP45RGD0m2PhC5H5O0MiwsRTHaQXJ%2BipQE7s075Oz63WSwT3c9BF4pfEzfOtqjTkvz4bLyrKzNBeeS2r0Iogs6kTxikmycIWu4alfSQl9rbpS5GYnAUxVppM%2Fwyg7uYRsNRy1Z0WjkJNW9wK1ApLh7b3d604OrwAlgKJH%2FbidX2DOS80Zq2RtFM0YIQtOgdKvfedQ5SLxF%2BHkAwM%2F0HvdNzWZruRWvSIH2P7U%2BLaVz3EwLo3MPCx9MAGOqUB3K1m8Rsp1%2Bl%2F%2B%2BM7xiMBWQqWTfGa%2FD4j0IU0srD58QFJEtOQKERBdBTgcX3KFo0a27DprvcczfP4k3fmsedppy6SKSQidHuyI3aohcHMr7oQrDaCGWYqN4z7vd342swnMBncnl3gPcPvCVJBjwJ1x83E02qyBt6CvHYW%2FWATl4gRGGZplbYOob%2B2%2BuP%2BtdRDrVhCw6k6Sqdxq0xYGaIv%2BWaVPZmS&X-Amz-Signature=a49bdb03c6ff7ec044a6cbdf80c181a91b85ac469094fc2ddd421cb6cb43e277&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
