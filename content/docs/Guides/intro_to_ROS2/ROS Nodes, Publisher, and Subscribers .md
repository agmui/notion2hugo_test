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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGP4RI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8OitGwpRNInc7pnOTpvOPDj84KnORsnwuTYRaUbPHCwIgcsnD99rcoeegVOEMQOcMpvvnfz0E0lDTMXe%2FidMR%2Fmsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDObgBPpOrQna9v6%2BaircAz4Uq9v1vKsP6w0jl26gdTW6HSRFh%2BEu0v78aQ2PDkBwvul%2Fh%2FUKoFCu817Iq8SjVRCD5NhY%2Fz2KcNxAHF3VqHu5ZMiQd5FsfwkISC8PpQ68gKaH5PU2n%2FU4k1r0VEda4yuRgImJTJMmNvFWVm4Q0jQFqVg8xNmK3u0S898T1Yc70ZULcw%2BFFmQfosN105A0FMSixtXFFYiCHVktLZF5wjWx0lrFm7ap7SPtMSzc6SIiGV90lq8t%2FHY9S1CBYi4xywsyJ9ru24qulPWpUcKL8o2ARtiLI4YReMBG037yCTNt%2BZ3LMv4JRLyn%2BqHhGsktvSMjx0PEbeAbuJhyg51XA1Ng2y7Cqb%2BGS8rJphY%2BopvazuDYJZegE5EUMi5HNDy3sWzpt2yPWbQJ6%2BnJGSP2OWDXQ463FaHTgTcY7OlJyzXVNMqXSD78EhdcJ7ruRNKD8TJU%2BoHReVkZK%2F82dLpZZbB6Z%2BLxVNuBSfiB3rXYXlqsK7Zr9n9GxkQBDjZpZ7F5Nd8sjUP%2FmdEcemWilaNoo2IU%2BwCRjZc4lAOthuamEdwTuW3sIaTu0qfrQooJt9M6HpLlE2064mVcuD9obWKtPq29dgvWv4mGeb%2F%2F9kQWpG4JNV9j3U5GDJR1C5BlMOj%2FyL8GOqUBA%2FdcBAuakZbmGvF8SEe5XDkhl1IApLTlE1aaEYOfUfs4rp1sSW%2BCmGD4xbnFdFD8gHMMJBr7MJRZQT89gEBxgM39EVmYw9xm0u8BE5Sm8YYsed%2B0X7TXZUGrzIP9rRwCDC1UZkFphF0VGFMrrwLpHd5DMSpNVEZIUByQsyRAMfU%2Fj5iIYdBukeycCZQZrU%2FNK2ZrDPBsqkVkqkT1zxlnTo89ooY4&X-Amz-Signature=6dbedb45d8d47a14c75141ea33ef0a4ee0a43d49a2366e2d6193586d600ebf31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGP4RI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8OitGwpRNInc7pnOTpvOPDj84KnORsnwuTYRaUbPHCwIgcsnD99rcoeegVOEMQOcMpvvnfz0E0lDTMXe%2FidMR%2Fmsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDObgBPpOrQna9v6%2BaircAz4Uq9v1vKsP6w0jl26gdTW6HSRFh%2BEu0v78aQ2PDkBwvul%2Fh%2FUKoFCu817Iq8SjVRCD5NhY%2Fz2KcNxAHF3VqHu5ZMiQd5FsfwkISC8PpQ68gKaH5PU2n%2FU4k1r0VEda4yuRgImJTJMmNvFWVm4Q0jQFqVg8xNmK3u0S898T1Yc70ZULcw%2BFFmQfosN105A0FMSixtXFFYiCHVktLZF5wjWx0lrFm7ap7SPtMSzc6SIiGV90lq8t%2FHY9S1CBYi4xywsyJ9ru24qulPWpUcKL8o2ARtiLI4YReMBG037yCTNt%2BZ3LMv4JRLyn%2BqHhGsktvSMjx0PEbeAbuJhyg51XA1Ng2y7Cqb%2BGS8rJphY%2BopvazuDYJZegE5EUMi5HNDy3sWzpt2yPWbQJ6%2BnJGSP2OWDXQ463FaHTgTcY7OlJyzXVNMqXSD78EhdcJ7ruRNKD8TJU%2BoHReVkZK%2F82dLpZZbB6Z%2BLxVNuBSfiB3rXYXlqsK7Zr9n9GxkQBDjZpZ7F5Nd8sjUP%2FmdEcemWilaNoo2IU%2BwCRjZc4lAOthuamEdwTuW3sIaTu0qfrQooJt9M6HpLlE2064mVcuD9obWKtPq29dgvWv4mGeb%2F%2F9kQWpG4JNV9j3U5GDJR1C5BlMOj%2FyL8GOqUBA%2FdcBAuakZbmGvF8SEe5XDkhl1IApLTlE1aaEYOfUfs4rp1sSW%2BCmGD4xbnFdFD8gHMMJBr7MJRZQT89gEBxgM39EVmYw9xm0u8BE5Sm8YYsed%2B0X7TXZUGrzIP9rRwCDC1UZkFphF0VGFMrrwLpHd5DMSpNVEZIUByQsyRAMfU%2Fj5iIYdBukeycCZQZrU%2FNK2ZrDPBsqkVkqkT1zxlnTo89ooY4&X-Amz-Signature=3714801e93065dae4dd5b57fc0b7df7b0ce195d3059cb7c3dffab74b61054efb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGP4RI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8OitGwpRNInc7pnOTpvOPDj84KnORsnwuTYRaUbPHCwIgcsnD99rcoeegVOEMQOcMpvvnfz0E0lDTMXe%2FidMR%2Fmsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDObgBPpOrQna9v6%2BaircAz4Uq9v1vKsP6w0jl26gdTW6HSRFh%2BEu0v78aQ2PDkBwvul%2Fh%2FUKoFCu817Iq8SjVRCD5NhY%2Fz2KcNxAHF3VqHu5ZMiQd5FsfwkISC8PpQ68gKaH5PU2n%2FU4k1r0VEda4yuRgImJTJMmNvFWVm4Q0jQFqVg8xNmK3u0S898T1Yc70ZULcw%2BFFmQfosN105A0FMSixtXFFYiCHVktLZF5wjWx0lrFm7ap7SPtMSzc6SIiGV90lq8t%2FHY9S1CBYi4xywsyJ9ru24qulPWpUcKL8o2ARtiLI4YReMBG037yCTNt%2BZ3LMv4JRLyn%2BqHhGsktvSMjx0PEbeAbuJhyg51XA1Ng2y7Cqb%2BGS8rJphY%2BopvazuDYJZegE5EUMi5HNDy3sWzpt2yPWbQJ6%2BnJGSP2OWDXQ463FaHTgTcY7OlJyzXVNMqXSD78EhdcJ7ruRNKD8TJU%2BoHReVkZK%2F82dLpZZbB6Z%2BLxVNuBSfiB3rXYXlqsK7Zr9n9GxkQBDjZpZ7F5Nd8sjUP%2FmdEcemWilaNoo2IU%2BwCRjZc4lAOthuamEdwTuW3sIaTu0qfrQooJt9M6HpLlE2064mVcuD9obWKtPq29dgvWv4mGeb%2F%2F9kQWpG4JNV9j3U5GDJR1C5BlMOj%2FyL8GOqUBA%2FdcBAuakZbmGvF8SEe5XDkhl1IApLTlE1aaEYOfUfs4rp1sSW%2BCmGD4xbnFdFD8gHMMJBr7MJRZQT89gEBxgM39EVmYw9xm0u8BE5Sm8YYsed%2B0X7TXZUGrzIP9rRwCDC1UZkFphF0VGFMrrwLpHd5DMSpNVEZIUByQsyRAMfU%2Fj5iIYdBukeycCZQZrU%2FNK2ZrDPBsqkVkqkT1zxlnTo89ooY4&X-Amz-Signature=ce57fbe65d5f07edfcee6233ba7c2ce2b32b78b3349814b961e404d6a6661256&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGP4RI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8OitGwpRNInc7pnOTpvOPDj84KnORsnwuTYRaUbPHCwIgcsnD99rcoeegVOEMQOcMpvvnfz0E0lDTMXe%2FidMR%2Fmsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDObgBPpOrQna9v6%2BaircAz4Uq9v1vKsP6w0jl26gdTW6HSRFh%2BEu0v78aQ2PDkBwvul%2Fh%2FUKoFCu817Iq8SjVRCD5NhY%2Fz2KcNxAHF3VqHu5ZMiQd5FsfwkISC8PpQ68gKaH5PU2n%2FU4k1r0VEda4yuRgImJTJMmNvFWVm4Q0jQFqVg8xNmK3u0S898T1Yc70ZULcw%2BFFmQfosN105A0FMSixtXFFYiCHVktLZF5wjWx0lrFm7ap7SPtMSzc6SIiGV90lq8t%2FHY9S1CBYi4xywsyJ9ru24qulPWpUcKL8o2ARtiLI4YReMBG037yCTNt%2BZ3LMv4JRLyn%2BqHhGsktvSMjx0PEbeAbuJhyg51XA1Ng2y7Cqb%2BGS8rJphY%2BopvazuDYJZegE5EUMi5HNDy3sWzpt2yPWbQJ6%2BnJGSP2OWDXQ463FaHTgTcY7OlJyzXVNMqXSD78EhdcJ7ruRNKD8TJU%2BoHReVkZK%2F82dLpZZbB6Z%2BLxVNuBSfiB3rXYXlqsK7Zr9n9GxkQBDjZpZ7F5Nd8sjUP%2FmdEcemWilaNoo2IU%2BwCRjZc4lAOthuamEdwTuW3sIaTu0qfrQooJt9M6HpLlE2064mVcuD9obWKtPq29dgvWv4mGeb%2F%2F9kQWpG4JNV9j3U5GDJR1C5BlMOj%2FyL8GOqUBA%2FdcBAuakZbmGvF8SEe5XDkhl1IApLTlE1aaEYOfUfs4rp1sSW%2BCmGD4xbnFdFD8gHMMJBr7MJRZQT89gEBxgM39EVmYw9xm0u8BE5Sm8YYsed%2B0X7TXZUGrzIP9rRwCDC1UZkFphF0VGFMrrwLpHd5DMSpNVEZIUByQsyRAMfU%2Fj5iIYdBukeycCZQZrU%2FNK2ZrDPBsqkVkqkT1zxlnTo89ooY4&X-Amz-Signature=5938ba5814d0826655282b055256fb5f127086b5f891176a03515546b7a1d011&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGP4RI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8OitGwpRNInc7pnOTpvOPDj84KnORsnwuTYRaUbPHCwIgcsnD99rcoeegVOEMQOcMpvvnfz0E0lDTMXe%2FidMR%2Fmsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDObgBPpOrQna9v6%2BaircAz4Uq9v1vKsP6w0jl26gdTW6HSRFh%2BEu0v78aQ2PDkBwvul%2Fh%2FUKoFCu817Iq8SjVRCD5NhY%2Fz2KcNxAHF3VqHu5ZMiQd5FsfwkISC8PpQ68gKaH5PU2n%2FU4k1r0VEda4yuRgImJTJMmNvFWVm4Q0jQFqVg8xNmK3u0S898T1Yc70ZULcw%2BFFmQfosN105A0FMSixtXFFYiCHVktLZF5wjWx0lrFm7ap7SPtMSzc6SIiGV90lq8t%2FHY9S1CBYi4xywsyJ9ru24qulPWpUcKL8o2ARtiLI4YReMBG037yCTNt%2BZ3LMv4JRLyn%2BqHhGsktvSMjx0PEbeAbuJhyg51XA1Ng2y7Cqb%2BGS8rJphY%2BopvazuDYJZegE5EUMi5HNDy3sWzpt2yPWbQJ6%2BnJGSP2OWDXQ463FaHTgTcY7OlJyzXVNMqXSD78EhdcJ7ruRNKD8TJU%2BoHReVkZK%2F82dLpZZbB6Z%2BLxVNuBSfiB3rXYXlqsK7Zr9n9GxkQBDjZpZ7F5Nd8sjUP%2FmdEcemWilaNoo2IU%2BwCRjZc4lAOthuamEdwTuW3sIaTu0qfrQooJt9M6HpLlE2064mVcuD9obWKtPq29dgvWv4mGeb%2F%2F9kQWpG4JNV9j3U5GDJR1C5BlMOj%2FyL8GOqUBA%2FdcBAuakZbmGvF8SEe5XDkhl1IApLTlE1aaEYOfUfs4rp1sSW%2BCmGD4xbnFdFD8gHMMJBr7MJRZQT89gEBxgM39EVmYw9xm0u8BE5Sm8YYsed%2B0X7TXZUGrzIP9rRwCDC1UZkFphF0VGFMrrwLpHd5DMSpNVEZIUByQsyRAMfU%2Fj5iIYdBukeycCZQZrU%2FNK2ZrDPBsqkVkqkT1zxlnTo89ooY4&X-Amz-Signature=d0c418a4a9e09cd98dfbc99da6f36de6b16685529cdc7144cb6559d1665fa049&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGP4RI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8OitGwpRNInc7pnOTpvOPDj84KnORsnwuTYRaUbPHCwIgcsnD99rcoeegVOEMQOcMpvvnfz0E0lDTMXe%2FidMR%2Fmsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDObgBPpOrQna9v6%2BaircAz4Uq9v1vKsP6w0jl26gdTW6HSRFh%2BEu0v78aQ2PDkBwvul%2Fh%2FUKoFCu817Iq8SjVRCD5NhY%2Fz2KcNxAHF3VqHu5ZMiQd5FsfwkISC8PpQ68gKaH5PU2n%2FU4k1r0VEda4yuRgImJTJMmNvFWVm4Q0jQFqVg8xNmK3u0S898T1Yc70ZULcw%2BFFmQfosN105A0FMSixtXFFYiCHVktLZF5wjWx0lrFm7ap7SPtMSzc6SIiGV90lq8t%2FHY9S1CBYi4xywsyJ9ru24qulPWpUcKL8o2ARtiLI4YReMBG037yCTNt%2BZ3LMv4JRLyn%2BqHhGsktvSMjx0PEbeAbuJhyg51XA1Ng2y7Cqb%2BGS8rJphY%2BopvazuDYJZegE5EUMi5HNDy3sWzpt2yPWbQJ6%2BnJGSP2OWDXQ463FaHTgTcY7OlJyzXVNMqXSD78EhdcJ7ruRNKD8TJU%2BoHReVkZK%2F82dLpZZbB6Z%2BLxVNuBSfiB3rXYXlqsK7Zr9n9GxkQBDjZpZ7F5Nd8sjUP%2FmdEcemWilaNoo2IU%2BwCRjZc4lAOthuamEdwTuW3sIaTu0qfrQooJt9M6HpLlE2064mVcuD9obWKtPq29dgvWv4mGeb%2F%2F9kQWpG4JNV9j3U5GDJR1C5BlMOj%2FyL8GOqUBA%2FdcBAuakZbmGvF8SEe5XDkhl1IApLTlE1aaEYOfUfs4rp1sSW%2BCmGD4xbnFdFD8gHMMJBr7MJRZQT89gEBxgM39EVmYw9xm0u8BE5Sm8YYsed%2B0X7TXZUGrzIP9rRwCDC1UZkFphF0VGFMrrwLpHd5DMSpNVEZIUByQsyRAMfU%2Fj5iIYdBukeycCZQZrU%2FNK2ZrDPBsqkVkqkT1zxlnTo89ooY4&X-Amz-Signature=73a1c74e6a4c111a6af0a817085c6de6cdb684527f77f6ed0fda747947ed12fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGP4RI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8OitGwpRNInc7pnOTpvOPDj84KnORsnwuTYRaUbPHCwIgcsnD99rcoeegVOEMQOcMpvvnfz0E0lDTMXe%2FidMR%2Fmsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDObgBPpOrQna9v6%2BaircAz4Uq9v1vKsP6w0jl26gdTW6HSRFh%2BEu0v78aQ2PDkBwvul%2Fh%2FUKoFCu817Iq8SjVRCD5NhY%2Fz2KcNxAHF3VqHu5ZMiQd5FsfwkISC8PpQ68gKaH5PU2n%2FU4k1r0VEda4yuRgImJTJMmNvFWVm4Q0jQFqVg8xNmK3u0S898T1Yc70ZULcw%2BFFmQfosN105A0FMSixtXFFYiCHVktLZF5wjWx0lrFm7ap7SPtMSzc6SIiGV90lq8t%2FHY9S1CBYi4xywsyJ9ru24qulPWpUcKL8o2ARtiLI4YReMBG037yCTNt%2BZ3LMv4JRLyn%2BqHhGsktvSMjx0PEbeAbuJhyg51XA1Ng2y7Cqb%2BGS8rJphY%2BopvazuDYJZegE5EUMi5HNDy3sWzpt2yPWbQJ6%2BnJGSP2OWDXQ463FaHTgTcY7OlJyzXVNMqXSD78EhdcJ7ruRNKD8TJU%2BoHReVkZK%2F82dLpZZbB6Z%2BLxVNuBSfiB3rXYXlqsK7Zr9n9GxkQBDjZpZ7F5Nd8sjUP%2FmdEcemWilaNoo2IU%2BwCRjZc4lAOthuamEdwTuW3sIaTu0qfrQooJt9M6HpLlE2064mVcuD9obWKtPq29dgvWv4mGeb%2F%2F9kQWpG4JNV9j3U5GDJR1C5BlMOj%2FyL8GOqUBA%2FdcBAuakZbmGvF8SEe5XDkhl1IApLTlE1aaEYOfUfs4rp1sSW%2BCmGD4xbnFdFD8gHMMJBr7MJRZQT89gEBxgM39EVmYw9xm0u8BE5Sm8YYsed%2B0X7TXZUGrzIP9rRwCDC1UZkFphF0VGFMrrwLpHd5DMSpNVEZIUByQsyRAMfU%2Fj5iIYdBukeycCZQZrU%2FNK2ZrDPBsqkVkqkT1zxlnTo89ooY4&X-Amz-Signature=c8c54f87354ba14a9473072660ace1a0da4f301d74ede5fd3c412f3ac6ba1626&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGP4RI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8OitGwpRNInc7pnOTpvOPDj84KnORsnwuTYRaUbPHCwIgcsnD99rcoeegVOEMQOcMpvvnfz0E0lDTMXe%2FidMR%2Fmsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDObgBPpOrQna9v6%2BaircAz4Uq9v1vKsP6w0jl26gdTW6HSRFh%2BEu0v78aQ2PDkBwvul%2Fh%2FUKoFCu817Iq8SjVRCD5NhY%2Fz2KcNxAHF3VqHu5ZMiQd5FsfwkISC8PpQ68gKaH5PU2n%2FU4k1r0VEda4yuRgImJTJMmNvFWVm4Q0jQFqVg8xNmK3u0S898T1Yc70ZULcw%2BFFmQfosN105A0FMSixtXFFYiCHVktLZF5wjWx0lrFm7ap7SPtMSzc6SIiGV90lq8t%2FHY9S1CBYi4xywsyJ9ru24qulPWpUcKL8o2ARtiLI4YReMBG037yCTNt%2BZ3LMv4JRLyn%2BqHhGsktvSMjx0PEbeAbuJhyg51XA1Ng2y7Cqb%2BGS8rJphY%2BopvazuDYJZegE5EUMi5HNDy3sWzpt2yPWbQJ6%2BnJGSP2OWDXQ463FaHTgTcY7OlJyzXVNMqXSD78EhdcJ7ruRNKD8TJU%2BoHReVkZK%2F82dLpZZbB6Z%2BLxVNuBSfiB3rXYXlqsK7Zr9n9GxkQBDjZpZ7F5Nd8sjUP%2FmdEcemWilaNoo2IU%2BwCRjZc4lAOthuamEdwTuW3sIaTu0qfrQooJt9M6HpLlE2064mVcuD9obWKtPq29dgvWv4mGeb%2F%2F9kQWpG4JNV9j3U5GDJR1C5BlMOj%2FyL8GOqUBA%2FdcBAuakZbmGvF8SEe5XDkhl1IApLTlE1aaEYOfUfs4rp1sSW%2BCmGD4xbnFdFD8gHMMJBr7MJRZQT89gEBxgM39EVmYw9xm0u8BE5Sm8YYsed%2B0X7TXZUGrzIP9rRwCDC1UZkFphF0VGFMrrwLpHd5DMSpNVEZIUByQsyRAMfU%2Fj5iIYdBukeycCZQZrU%2FNK2ZrDPBsqkVkqkT1zxlnTo89ooY4&X-Amz-Signature=420fa5e95164fb5bd0d32ee6ae443a140f0a58896fdde2f6399e6128081ca66c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
