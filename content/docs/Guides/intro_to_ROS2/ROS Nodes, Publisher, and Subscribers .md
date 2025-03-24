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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=06a0f56cdada42a793014ca4867800e114576662589c0d272124ce5a4361ac20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=6053bd8986381c21d3f7c8b77c94e91cd8ff5751839f99cbdc5ee0c2e69422a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=87e3e8f9361c1f95a70676b35ecbcc4149c990db20ffd67ee419a3a4ea9979fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=8d5756fb56ec0b4a0ec6763f771151c348793bd251d76565cc8c18002d793f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=91528a548cf4939dc5c627786611ec4068c2b777916e2616f8b8e0e86c77a5ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=3a7f33b4efc291ace9ef7d45b4257abe225341614a98f6ed28eb6f41452827cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=941da84e358b219ba7a290f32483c48683337cd73c157b1633c1079d858afef0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDO7HBGE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3uvmXkhbGsXoxFNmMro0rZ4lYcMet1zhWJTYpjWamkwIgQpUP%2FHtfhTFdgrbwHzp8GkFJuG9yIO6osbt7UIPBo14qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPRPanMpfyb4x5BmyrcA00U2dFa880PKTh6JEh7cqVCJs0B%2FmkJ4632QNbde8R0JxhbO33dwP3q8K4rqGiwJF5kOyMMnlN%2B0PSgSC4YI7oaKQK92m0tTXRyo8j4HVPBLe6KTCmwpdiT65YdvJkO9hqxFohwsiLPO%2FcjRTktvWM%2BdjGRRQEQxTLjS1I%2BepRVKDOTMcak%2BuTgP9dseDHkRP0lXJRqRupLa20yA%2FLd3rT9HerhxNq1x3xRQSs1%2Bpjw4JzxCtPq8txPjWrR%2FY%2BVqqptLXHGYKUCG7cyb%2B0s5chYhGWV2gPxgmAXe9h%2Bj1JE2YYfycWsqfZi3b7u9j1iJ1sUnwmvPQTwz8lPjonSWiYM72gXpapoZUgE26dBFMzqVTmT%2F3xGp9L4dH%2BhYl%2BD53a7zDXvHOncULXGpS2obJwbDhQa1AaHDnhh2QSY37CMz%2FfLnz1qGc6d%2FZ1DFvzTuL6KRu8Il%2FO11NJ6gAaf%2Bsz%2BmGsjl88DbCfk%2FURhu2w35kw69J5FIZdCapejLHjK9mmoe9pV42%2FSf7nMWKzmNiSv2qInzUWq7oZRTQSKWf7HAYzIIZllOzKDVxwNMnkKsYTFIQmdeWTpcgpqvDVEDJ1T%2FPcIf%2B6YxfKyrQgaexgsAxwgYM65nyzl0wWlMIqyh78GOqUBh7G1uHtbOBvfQQu%2Flj5j2CVYOnG9CtvumBuuj%2F%2BJ0p4p9J%2Fi%2FkSmS%2Fp%2BNjRH3XdgKSkoqm54W5rzFlai1xI2ZbY13qimDUvYxKtXxs4XEuj%2F%2BIH%2FFoMdCPP1qM5R3KlQ5%2BPG6d5rVBPOhFp9qviYvFrAWqP9vhvxeDYRTyxRdiePdSZHdqkFnmmTbCmcC%2BuefR%2BdokHiz4%2B7EYYaZRr2jn6x4wy%2B&X-Amz-Signature=ff6dbb9b01272d5a9ab9c8e264fb14c526db70698f19d450983656a7d20031ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
