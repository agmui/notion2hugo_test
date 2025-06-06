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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JUIL5J%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDArajI4Xtj97z3YPoAZiBKia12A9l%2BnonChrZiAki%2B3AiEAkoqlkAGmH8ukhJzXwIzo%2FF%2FoLKnqlwvL%2FTKk%2FYFQeN8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL4%2BLB1oVEGShCO%2FEyrcAzjuZgOKdpEYjLJqL1roZ8D%2B4uk8ka2i1xDeFq7fBMkl38ZXy21LSx2DgLwCZPtB5g9cAkVvi0LDEa7NyjHou2eyaphpgs0c7IxFq6X2KAKV4PNnCRngWK%2BMkoA2GG2Vk3fzwzbfdgJs7jCzKGqkQvVeEr02AydYCi3WcovnZtLEH%2BF%2Fjdub2iU5CFFT4SMJZ6biMJagEBxR3g9mvGxH270Wy55FFo2zaJ%2FqOfOQH7QozvUsuTNDvBQUdVIr3xx9wnIzGt3xHyC1lNOCdxaBJ0f1qwoY5gYPSp54Ww7YEs3gXAVFQzyJmitInMIa4H3HEKzA1smMbk4T1tKy%2F0rGuCKwG0%2FTHKKw7EQS60sueRVXFVWRvqJR9daUn5CMFhfpBV%2BGckmKONjwuVggbqhmo%2Fji7RmqfzYhpDW16WAhsUmkzxoFVXaRZjnFYPaOCpc%2FfVDVVfbY%2BmPY5RDqd3G0pxOyVov43i3WXp178BUTiXogobbObCZXIuMi%2BnrSCnYHOR78dFxr4bd0RsgckGPQv9pbYQa5ecTTLdX9MXUKM%2BNM6DV%2F%2BgADefDvSTTLCoGk0ctk8%2BhJ5PlS4CKSBrxz0Ns6qnByO2qO9CJYgycFYj1VHN3XvZ7t%2FLPNV3F7MLHWjMIGOqUBSNMbqoroq2vyzdt16%2BfPMMgoFCYxKlAByeVd%2FsnlSYRDT6%2F2OHn%2BgSBErNkPGR1MFzfIsgKw6MKyWeEpJ7a0%2B5cNXGrgRGux2mAECVPzcBQaiL8JD9L1shf%2FluHhPTaXJlCCt%2FigTDExUUapRhwH1pgB9ZVKhzfUjoB0PzvtUHLESqnMWM%2BIjXzSmKC4JF7ROmUKmerU04%2BuC8D0XvFwWrQ%2FmZfH&X-Amz-Signature=e6dc263632b59470f70040035e25eb6d8cf0dbcfdaf81cc0fae0e70d2b4a28d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JUIL5J%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDArajI4Xtj97z3YPoAZiBKia12A9l%2BnonChrZiAki%2B3AiEAkoqlkAGmH8ukhJzXwIzo%2FF%2FoLKnqlwvL%2FTKk%2FYFQeN8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL4%2BLB1oVEGShCO%2FEyrcAzjuZgOKdpEYjLJqL1roZ8D%2B4uk8ka2i1xDeFq7fBMkl38ZXy21LSx2DgLwCZPtB5g9cAkVvi0LDEa7NyjHou2eyaphpgs0c7IxFq6X2KAKV4PNnCRngWK%2BMkoA2GG2Vk3fzwzbfdgJs7jCzKGqkQvVeEr02AydYCi3WcovnZtLEH%2BF%2Fjdub2iU5CFFT4SMJZ6biMJagEBxR3g9mvGxH270Wy55FFo2zaJ%2FqOfOQH7QozvUsuTNDvBQUdVIr3xx9wnIzGt3xHyC1lNOCdxaBJ0f1qwoY5gYPSp54Ww7YEs3gXAVFQzyJmitInMIa4H3HEKzA1smMbk4T1tKy%2F0rGuCKwG0%2FTHKKw7EQS60sueRVXFVWRvqJR9daUn5CMFhfpBV%2BGckmKONjwuVggbqhmo%2Fji7RmqfzYhpDW16WAhsUmkzxoFVXaRZjnFYPaOCpc%2FfVDVVfbY%2BmPY5RDqd3G0pxOyVov43i3WXp178BUTiXogobbObCZXIuMi%2BnrSCnYHOR78dFxr4bd0RsgckGPQv9pbYQa5ecTTLdX9MXUKM%2BNM6DV%2F%2BgADefDvSTTLCoGk0ctk8%2BhJ5PlS4CKSBrxz0Ns6qnByO2qO9CJYgycFYj1VHN3XvZ7t%2FLPNV3F7MLHWjMIGOqUBSNMbqoroq2vyzdt16%2BfPMMgoFCYxKlAByeVd%2FsnlSYRDT6%2F2OHn%2BgSBErNkPGR1MFzfIsgKw6MKyWeEpJ7a0%2B5cNXGrgRGux2mAECVPzcBQaiL8JD9L1shf%2FluHhPTaXJlCCt%2FigTDExUUapRhwH1pgB9ZVKhzfUjoB0PzvtUHLESqnMWM%2BIjXzSmKC4JF7ROmUKmerU04%2BuC8D0XvFwWrQ%2FmZfH&X-Amz-Signature=3e3555d8ebd9dffb55891ac874cb57122f415d25da1e836a4fa374ccf193cd0e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JUIL5J%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDArajI4Xtj97z3YPoAZiBKia12A9l%2BnonChrZiAki%2B3AiEAkoqlkAGmH8ukhJzXwIzo%2FF%2FoLKnqlwvL%2FTKk%2FYFQeN8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL4%2BLB1oVEGShCO%2FEyrcAzjuZgOKdpEYjLJqL1roZ8D%2B4uk8ka2i1xDeFq7fBMkl38ZXy21LSx2DgLwCZPtB5g9cAkVvi0LDEa7NyjHou2eyaphpgs0c7IxFq6X2KAKV4PNnCRngWK%2BMkoA2GG2Vk3fzwzbfdgJs7jCzKGqkQvVeEr02AydYCi3WcovnZtLEH%2BF%2Fjdub2iU5CFFT4SMJZ6biMJagEBxR3g9mvGxH270Wy55FFo2zaJ%2FqOfOQH7QozvUsuTNDvBQUdVIr3xx9wnIzGt3xHyC1lNOCdxaBJ0f1qwoY5gYPSp54Ww7YEs3gXAVFQzyJmitInMIa4H3HEKzA1smMbk4T1tKy%2F0rGuCKwG0%2FTHKKw7EQS60sueRVXFVWRvqJR9daUn5CMFhfpBV%2BGckmKONjwuVggbqhmo%2Fji7RmqfzYhpDW16WAhsUmkzxoFVXaRZjnFYPaOCpc%2FfVDVVfbY%2BmPY5RDqd3G0pxOyVov43i3WXp178BUTiXogobbObCZXIuMi%2BnrSCnYHOR78dFxr4bd0RsgckGPQv9pbYQa5ecTTLdX9MXUKM%2BNM6DV%2F%2BgADefDvSTTLCoGk0ctk8%2BhJ5PlS4CKSBrxz0Ns6qnByO2qO9CJYgycFYj1VHN3XvZ7t%2FLPNV3F7MLHWjMIGOqUBSNMbqoroq2vyzdt16%2BfPMMgoFCYxKlAByeVd%2FsnlSYRDT6%2F2OHn%2BgSBErNkPGR1MFzfIsgKw6MKyWeEpJ7a0%2B5cNXGrgRGux2mAECVPzcBQaiL8JD9L1shf%2FluHhPTaXJlCCt%2FigTDExUUapRhwH1pgB9ZVKhzfUjoB0PzvtUHLESqnMWM%2BIjXzSmKC4JF7ROmUKmerU04%2BuC8D0XvFwWrQ%2FmZfH&X-Amz-Signature=9cc76993391e5886cef4a9b3d12685c331abc091f71c4930659b71b1b5fcea4b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JUIL5J%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDArajI4Xtj97z3YPoAZiBKia12A9l%2BnonChrZiAki%2B3AiEAkoqlkAGmH8ukhJzXwIzo%2FF%2FoLKnqlwvL%2FTKk%2FYFQeN8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL4%2BLB1oVEGShCO%2FEyrcAzjuZgOKdpEYjLJqL1roZ8D%2B4uk8ka2i1xDeFq7fBMkl38ZXy21LSx2DgLwCZPtB5g9cAkVvi0LDEa7NyjHou2eyaphpgs0c7IxFq6X2KAKV4PNnCRngWK%2BMkoA2GG2Vk3fzwzbfdgJs7jCzKGqkQvVeEr02AydYCi3WcovnZtLEH%2BF%2Fjdub2iU5CFFT4SMJZ6biMJagEBxR3g9mvGxH270Wy55FFo2zaJ%2FqOfOQH7QozvUsuTNDvBQUdVIr3xx9wnIzGt3xHyC1lNOCdxaBJ0f1qwoY5gYPSp54Ww7YEs3gXAVFQzyJmitInMIa4H3HEKzA1smMbk4T1tKy%2F0rGuCKwG0%2FTHKKw7EQS60sueRVXFVWRvqJR9daUn5CMFhfpBV%2BGckmKONjwuVggbqhmo%2Fji7RmqfzYhpDW16WAhsUmkzxoFVXaRZjnFYPaOCpc%2FfVDVVfbY%2BmPY5RDqd3G0pxOyVov43i3WXp178BUTiXogobbObCZXIuMi%2BnrSCnYHOR78dFxr4bd0RsgckGPQv9pbYQa5ecTTLdX9MXUKM%2BNM6DV%2F%2BgADefDvSTTLCoGk0ctk8%2BhJ5PlS4CKSBrxz0Ns6qnByO2qO9CJYgycFYj1VHN3XvZ7t%2FLPNV3F7MLHWjMIGOqUBSNMbqoroq2vyzdt16%2BfPMMgoFCYxKlAByeVd%2FsnlSYRDT6%2F2OHn%2BgSBErNkPGR1MFzfIsgKw6MKyWeEpJ7a0%2B5cNXGrgRGux2mAECVPzcBQaiL8JD9L1shf%2FluHhPTaXJlCCt%2FigTDExUUapRhwH1pgB9ZVKhzfUjoB0PzvtUHLESqnMWM%2BIjXzSmKC4JF7ROmUKmerU04%2BuC8D0XvFwWrQ%2FmZfH&X-Amz-Signature=e30778f83ac71d2620d200090454827f71ae96977ab6cb0c3b5135134c7e3dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JUIL5J%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDArajI4Xtj97z3YPoAZiBKia12A9l%2BnonChrZiAki%2B3AiEAkoqlkAGmH8ukhJzXwIzo%2FF%2FoLKnqlwvL%2FTKk%2FYFQeN8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL4%2BLB1oVEGShCO%2FEyrcAzjuZgOKdpEYjLJqL1roZ8D%2B4uk8ka2i1xDeFq7fBMkl38ZXy21LSx2DgLwCZPtB5g9cAkVvi0LDEa7NyjHou2eyaphpgs0c7IxFq6X2KAKV4PNnCRngWK%2BMkoA2GG2Vk3fzwzbfdgJs7jCzKGqkQvVeEr02AydYCi3WcovnZtLEH%2BF%2Fjdub2iU5CFFT4SMJZ6biMJagEBxR3g9mvGxH270Wy55FFo2zaJ%2FqOfOQH7QozvUsuTNDvBQUdVIr3xx9wnIzGt3xHyC1lNOCdxaBJ0f1qwoY5gYPSp54Ww7YEs3gXAVFQzyJmitInMIa4H3HEKzA1smMbk4T1tKy%2F0rGuCKwG0%2FTHKKw7EQS60sueRVXFVWRvqJR9daUn5CMFhfpBV%2BGckmKONjwuVggbqhmo%2Fji7RmqfzYhpDW16WAhsUmkzxoFVXaRZjnFYPaOCpc%2FfVDVVfbY%2BmPY5RDqd3G0pxOyVov43i3WXp178BUTiXogobbObCZXIuMi%2BnrSCnYHOR78dFxr4bd0RsgckGPQv9pbYQa5ecTTLdX9MXUKM%2BNM6DV%2F%2BgADefDvSTTLCoGk0ctk8%2BhJ5PlS4CKSBrxz0Ns6qnByO2qO9CJYgycFYj1VHN3XvZ7t%2FLPNV3F7MLHWjMIGOqUBSNMbqoroq2vyzdt16%2BfPMMgoFCYxKlAByeVd%2FsnlSYRDT6%2F2OHn%2BgSBErNkPGR1MFzfIsgKw6MKyWeEpJ7a0%2B5cNXGrgRGux2mAECVPzcBQaiL8JD9L1shf%2FluHhPTaXJlCCt%2FigTDExUUapRhwH1pgB9ZVKhzfUjoB0PzvtUHLESqnMWM%2BIjXzSmKC4JF7ROmUKmerU04%2BuC8D0XvFwWrQ%2FmZfH&X-Amz-Signature=19648ac8d1288c1e5fc3b79dd873cb93574bb5193329d5309995905206760ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JUIL5J%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDArajI4Xtj97z3YPoAZiBKia12A9l%2BnonChrZiAki%2B3AiEAkoqlkAGmH8ukhJzXwIzo%2FF%2FoLKnqlwvL%2FTKk%2FYFQeN8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL4%2BLB1oVEGShCO%2FEyrcAzjuZgOKdpEYjLJqL1roZ8D%2B4uk8ka2i1xDeFq7fBMkl38ZXy21LSx2DgLwCZPtB5g9cAkVvi0LDEa7NyjHou2eyaphpgs0c7IxFq6X2KAKV4PNnCRngWK%2BMkoA2GG2Vk3fzwzbfdgJs7jCzKGqkQvVeEr02AydYCi3WcovnZtLEH%2BF%2Fjdub2iU5CFFT4SMJZ6biMJagEBxR3g9mvGxH270Wy55FFo2zaJ%2FqOfOQH7QozvUsuTNDvBQUdVIr3xx9wnIzGt3xHyC1lNOCdxaBJ0f1qwoY5gYPSp54Ww7YEs3gXAVFQzyJmitInMIa4H3HEKzA1smMbk4T1tKy%2F0rGuCKwG0%2FTHKKw7EQS60sueRVXFVWRvqJR9daUn5CMFhfpBV%2BGckmKONjwuVggbqhmo%2Fji7RmqfzYhpDW16WAhsUmkzxoFVXaRZjnFYPaOCpc%2FfVDVVfbY%2BmPY5RDqd3G0pxOyVov43i3WXp178BUTiXogobbObCZXIuMi%2BnrSCnYHOR78dFxr4bd0RsgckGPQv9pbYQa5ecTTLdX9MXUKM%2BNM6DV%2F%2BgADefDvSTTLCoGk0ctk8%2BhJ5PlS4CKSBrxz0Ns6qnByO2qO9CJYgycFYj1VHN3XvZ7t%2FLPNV3F7MLHWjMIGOqUBSNMbqoroq2vyzdt16%2BfPMMgoFCYxKlAByeVd%2FsnlSYRDT6%2F2OHn%2BgSBErNkPGR1MFzfIsgKw6MKyWeEpJ7a0%2B5cNXGrgRGux2mAECVPzcBQaiL8JD9L1shf%2FluHhPTaXJlCCt%2FigTDExUUapRhwH1pgB9ZVKhzfUjoB0PzvtUHLESqnMWM%2BIjXzSmKC4JF7ROmUKmerU04%2BuC8D0XvFwWrQ%2FmZfH&X-Amz-Signature=e5dedaec1ba2178f232556bb74006dd801519c0b2ea53529bab64ddc384a5bea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JUIL5J%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDArajI4Xtj97z3YPoAZiBKia12A9l%2BnonChrZiAki%2B3AiEAkoqlkAGmH8ukhJzXwIzo%2FF%2FoLKnqlwvL%2FTKk%2FYFQeN8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL4%2BLB1oVEGShCO%2FEyrcAzjuZgOKdpEYjLJqL1roZ8D%2B4uk8ka2i1xDeFq7fBMkl38ZXy21LSx2DgLwCZPtB5g9cAkVvi0LDEa7NyjHou2eyaphpgs0c7IxFq6X2KAKV4PNnCRngWK%2BMkoA2GG2Vk3fzwzbfdgJs7jCzKGqkQvVeEr02AydYCi3WcovnZtLEH%2BF%2Fjdub2iU5CFFT4SMJZ6biMJagEBxR3g9mvGxH270Wy55FFo2zaJ%2FqOfOQH7QozvUsuTNDvBQUdVIr3xx9wnIzGt3xHyC1lNOCdxaBJ0f1qwoY5gYPSp54Ww7YEs3gXAVFQzyJmitInMIa4H3HEKzA1smMbk4T1tKy%2F0rGuCKwG0%2FTHKKw7EQS60sueRVXFVWRvqJR9daUn5CMFhfpBV%2BGckmKONjwuVggbqhmo%2Fji7RmqfzYhpDW16WAhsUmkzxoFVXaRZjnFYPaOCpc%2FfVDVVfbY%2BmPY5RDqd3G0pxOyVov43i3WXp178BUTiXogobbObCZXIuMi%2BnrSCnYHOR78dFxr4bd0RsgckGPQv9pbYQa5ecTTLdX9MXUKM%2BNM6DV%2F%2BgADefDvSTTLCoGk0ctk8%2BhJ5PlS4CKSBrxz0Ns6qnByO2qO9CJYgycFYj1VHN3XvZ7t%2FLPNV3F7MLHWjMIGOqUBSNMbqoroq2vyzdt16%2BfPMMgoFCYxKlAByeVd%2FsnlSYRDT6%2F2OHn%2BgSBErNkPGR1MFzfIsgKw6MKyWeEpJ7a0%2B5cNXGrgRGux2mAECVPzcBQaiL8JD9L1shf%2FluHhPTaXJlCCt%2FigTDExUUapRhwH1pgB9ZVKhzfUjoB0PzvtUHLESqnMWM%2BIjXzSmKC4JF7ROmUKmerU04%2BuC8D0XvFwWrQ%2FmZfH&X-Amz-Signature=aa9cfc0f405237244afb46d9f0d0696c01bfcf1c60d08fbdebe6bb6dc1288db7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JUIL5J%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDArajI4Xtj97z3YPoAZiBKia12A9l%2BnonChrZiAki%2B3AiEAkoqlkAGmH8ukhJzXwIzo%2FF%2FoLKnqlwvL%2FTKk%2FYFQeN8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL4%2BLB1oVEGShCO%2FEyrcAzjuZgOKdpEYjLJqL1roZ8D%2B4uk8ka2i1xDeFq7fBMkl38ZXy21LSx2DgLwCZPtB5g9cAkVvi0LDEa7NyjHou2eyaphpgs0c7IxFq6X2KAKV4PNnCRngWK%2BMkoA2GG2Vk3fzwzbfdgJs7jCzKGqkQvVeEr02AydYCi3WcovnZtLEH%2BF%2Fjdub2iU5CFFT4SMJZ6biMJagEBxR3g9mvGxH270Wy55FFo2zaJ%2FqOfOQH7QozvUsuTNDvBQUdVIr3xx9wnIzGt3xHyC1lNOCdxaBJ0f1qwoY5gYPSp54Ww7YEs3gXAVFQzyJmitInMIa4H3HEKzA1smMbk4T1tKy%2F0rGuCKwG0%2FTHKKw7EQS60sueRVXFVWRvqJR9daUn5CMFhfpBV%2BGckmKONjwuVggbqhmo%2Fji7RmqfzYhpDW16WAhsUmkzxoFVXaRZjnFYPaOCpc%2FfVDVVfbY%2BmPY5RDqd3G0pxOyVov43i3WXp178BUTiXogobbObCZXIuMi%2BnrSCnYHOR78dFxr4bd0RsgckGPQv9pbYQa5ecTTLdX9MXUKM%2BNM6DV%2F%2BgADefDvSTTLCoGk0ctk8%2BhJ5PlS4CKSBrxz0Ns6qnByO2qO9CJYgycFYj1VHN3XvZ7t%2FLPNV3F7MLHWjMIGOqUBSNMbqoroq2vyzdt16%2BfPMMgoFCYxKlAByeVd%2FsnlSYRDT6%2F2OHn%2BgSBErNkPGR1MFzfIsgKw6MKyWeEpJ7a0%2B5cNXGrgRGux2mAECVPzcBQaiL8JD9L1shf%2FluHhPTaXJlCCt%2FigTDExUUapRhwH1pgB9ZVKhzfUjoB0PzvtUHLESqnMWM%2BIjXzSmKC4JF7ROmUKmerU04%2BuC8D0XvFwWrQ%2FmZfH&X-Amz-Signature=1beaf6ea1cde50cf323a2e8c8a903899327cea92911b9a7e8ee9a07db49653da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
