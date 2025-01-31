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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZMKUXS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3EobdHmUlYb06%2FHjXlDuS7mtlI2YhSRVCJASZ0f3tJQIgGqkWuS8mKlx55lASkE%2FpXoeYg9r9HwtZlVjQfeL20KcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDjZ8KuECozi1q1OCrcA8y7hLXsPcs03D9WLzkqnxdEW%2FurI%2F8Q8omAXzr%2FWTJvPQ2eSbCL8OFFPRr9yaup%2FsEVQePfsGOBCIm1Tbf9zQSNwJhkvCRzF52hN%2FbeG1Z3kvwbkb%2BHbrrsuKq5zidweT%2FGAOr1j5%2FycGyH8zMe4DCbiRSla%2BzBUzecsCQgLZNVvJ2LPfqZwovPW8ZDisgAfjjUfeQ0hmAQYJJ6VHc%2FEc%2B0FvpLv1Vg00H0qCyvVsGDXfilLoFTV5U2CNMlO0oXK%2Bfz9YzhukGT8JS9yUQOVDdoHn7B4SVVe5NiUKjfYatBYMM5dKXpWDIE9bK5xEEu7RTA%2FFOZ4pnM4SVQKx4pRCvcr9CS5R%2F%2Ft11Zc9j8bVKcD7L9DEwIB1fn0Q0qTScrMtSc3nooGpFG2XE7iLFL1sETqxQ%2FlQa8ox5H2Qj4DtnCxnYr%2F2%2FVTakuQugcgspP2QBL17duhlG6oWXvqOP4rOYIiYjPQ98mWMpai8eeCODPxbEGT43BplYzMGRM6v4Ujwgkp5PtPErrhncTilH2ydcw4G%2B3AsWSRevB6C7hbuR7mgJfvmoTFmVqKMKM9hpsFHL9XJVktIKF%2B4UCSwA%2Fk%2Fk0BbH5ovE7zKpNFOM4cyybyQshO%2BndjhD6lAjyMJvj8bwGOqUBwNXY7jg9j3JC8GoB9SXr%2FOBWUe0yzbNsZFFB2ZNBcZ%2BsXI3psM9aJ8PXHr%2FtI7q%2Bpd92KlZch2z54yrN%2BilIK4Dg%2BKYv%2BvW3uA3NE4JLPUiHfHRDAVypXK4r1DZmzth4oefSkx%2BnmCwV5nGvRoxp6oK1%2BwORjyt993oAWbv5ugHRy40PsHGaSwdMl4fDdqeL3XnmRCzIqjxL3%2FCNyl7CohPNXCLQ&X-Amz-Signature=205ad664d16bfbe38443b7ec68129451e90d75f1f6ba6f78e96d655db7e4d690&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZMKUXS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3EobdHmUlYb06%2FHjXlDuS7mtlI2YhSRVCJASZ0f3tJQIgGqkWuS8mKlx55lASkE%2FpXoeYg9r9HwtZlVjQfeL20KcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDjZ8KuECozi1q1OCrcA8y7hLXsPcs03D9WLzkqnxdEW%2FurI%2F8Q8omAXzr%2FWTJvPQ2eSbCL8OFFPRr9yaup%2FsEVQePfsGOBCIm1Tbf9zQSNwJhkvCRzF52hN%2FbeG1Z3kvwbkb%2BHbrrsuKq5zidweT%2FGAOr1j5%2FycGyH8zMe4DCbiRSla%2BzBUzecsCQgLZNVvJ2LPfqZwovPW8ZDisgAfjjUfeQ0hmAQYJJ6VHc%2FEc%2B0FvpLv1Vg00H0qCyvVsGDXfilLoFTV5U2CNMlO0oXK%2Bfz9YzhukGT8JS9yUQOVDdoHn7B4SVVe5NiUKjfYatBYMM5dKXpWDIE9bK5xEEu7RTA%2FFOZ4pnM4SVQKx4pRCvcr9CS5R%2F%2Ft11Zc9j8bVKcD7L9DEwIB1fn0Q0qTScrMtSc3nooGpFG2XE7iLFL1sETqxQ%2FlQa8ox5H2Qj4DtnCxnYr%2F2%2FVTakuQugcgspP2QBL17duhlG6oWXvqOP4rOYIiYjPQ98mWMpai8eeCODPxbEGT43BplYzMGRM6v4Ujwgkp5PtPErrhncTilH2ydcw4G%2B3AsWSRevB6C7hbuR7mgJfvmoTFmVqKMKM9hpsFHL9XJVktIKF%2B4UCSwA%2Fk%2Fk0BbH5ovE7zKpNFOM4cyybyQshO%2BndjhD6lAjyMJvj8bwGOqUBwNXY7jg9j3JC8GoB9SXr%2FOBWUe0yzbNsZFFB2ZNBcZ%2BsXI3psM9aJ8PXHr%2FtI7q%2Bpd92KlZch2z54yrN%2BilIK4Dg%2BKYv%2BvW3uA3NE4JLPUiHfHRDAVypXK4r1DZmzth4oefSkx%2BnmCwV5nGvRoxp6oK1%2BwORjyt993oAWbv5ugHRy40PsHGaSwdMl4fDdqeL3XnmRCzIqjxL3%2FCNyl7CohPNXCLQ&X-Amz-Signature=bcc1992c51bc21ba8cedacbd75dd21ac608439a2f5efc5d2a5c71060f96b92fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZMKUXS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3EobdHmUlYb06%2FHjXlDuS7mtlI2YhSRVCJASZ0f3tJQIgGqkWuS8mKlx55lASkE%2FpXoeYg9r9HwtZlVjQfeL20KcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDjZ8KuECozi1q1OCrcA8y7hLXsPcs03D9WLzkqnxdEW%2FurI%2F8Q8omAXzr%2FWTJvPQ2eSbCL8OFFPRr9yaup%2FsEVQePfsGOBCIm1Tbf9zQSNwJhkvCRzF52hN%2FbeG1Z3kvwbkb%2BHbrrsuKq5zidweT%2FGAOr1j5%2FycGyH8zMe4DCbiRSla%2BzBUzecsCQgLZNVvJ2LPfqZwovPW8ZDisgAfjjUfeQ0hmAQYJJ6VHc%2FEc%2B0FvpLv1Vg00H0qCyvVsGDXfilLoFTV5U2CNMlO0oXK%2Bfz9YzhukGT8JS9yUQOVDdoHn7B4SVVe5NiUKjfYatBYMM5dKXpWDIE9bK5xEEu7RTA%2FFOZ4pnM4SVQKx4pRCvcr9CS5R%2F%2Ft11Zc9j8bVKcD7L9DEwIB1fn0Q0qTScrMtSc3nooGpFG2XE7iLFL1sETqxQ%2FlQa8ox5H2Qj4DtnCxnYr%2F2%2FVTakuQugcgspP2QBL17duhlG6oWXvqOP4rOYIiYjPQ98mWMpai8eeCODPxbEGT43BplYzMGRM6v4Ujwgkp5PtPErrhncTilH2ydcw4G%2B3AsWSRevB6C7hbuR7mgJfvmoTFmVqKMKM9hpsFHL9XJVktIKF%2B4UCSwA%2Fk%2Fk0BbH5ovE7zKpNFOM4cyybyQshO%2BndjhD6lAjyMJvj8bwGOqUBwNXY7jg9j3JC8GoB9SXr%2FOBWUe0yzbNsZFFB2ZNBcZ%2BsXI3psM9aJ8PXHr%2FtI7q%2Bpd92KlZch2z54yrN%2BilIK4Dg%2BKYv%2BvW3uA3NE4JLPUiHfHRDAVypXK4r1DZmzth4oefSkx%2BnmCwV5nGvRoxp6oK1%2BwORjyt993oAWbv5ugHRy40PsHGaSwdMl4fDdqeL3XnmRCzIqjxL3%2FCNyl7CohPNXCLQ&X-Amz-Signature=b05ba2d128a801b9fe4efdfc9adb1e35add07f426aa1ac859f05a2c0302c146a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZMKUXS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3EobdHmUlYb06%2FHjXlDuS7mtlI2YhSRVCJASZ0f3tJQIgGqkWuS8mKlx55lASkE%2FpXoeYg9r9HwtZlVjQfeL20KcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDjZ8KuECozi1q1OCrcA8y7hLXsPcs03D9WLzkqnxdEW%2FurI%2F8Q8omAXzr%2FWTJvPQ2eSbCL8OFFPRr9yaup%2FsEVQePfsGOBCIm1Tbf9zQSNwJhkvCRzF52hN%2FbeG1Z3kvwbkb%2BHbrrsuKq5zidweT%2FGAOr1j5%2FycGyH8zMe4DCbiRSla%2BzBUzecsCQgLZNVvJ2LPfqZwovPW8ZDisgAfjjUfeQ0hmAQYJJ6VHc%2FEc%2B0FvpLv1Vg00H0qCyvVsGDXfilLoFTV5U2CNMlO0oXK%2Bfz9YzhukGT8JS9yUQOVDdoHn7B4SVVe5NiUKjfYatBYMM5dKXpWDIE9bK5xEEu7RTA%2FFOZ4pnM4SVQKx4pRCvcr9CS5R%2F%2Ft11Zc9j8bVKcD7L9DEwIB1fn0Q0qTScrMtSc3nooGpFG2XE7iLFL1sETqxQ%2FlQa8ox5H2Qj4DtnCxnYr%2F2%2FVTakuQugcgspP2QBL17duhlG6oWXvqOP4rOYIiYjPQ98mWMpai8eeCODPxbEGT43BplYzMGRM6v4Ujwgkp5PtPErrhncTilH2ydcw4G%2B3AsWSRevB6C7hbuR7mgJfvmoTFmVqKMKM9hpsFHL9XJVktIKF%2B4UCSwA%2Fk%2Fk0BbH5ovE7zKpNFOM4cyybyQshO%2BndjhD6lAjyMJvj8bwGOqUBwNXY7jg9j3JC8GoB9SXr%2FOBWUe0yzbNsZFFB2ZNBcZ%2BsXI3psM9aJ8PXHr%2FtI7q%2Bpd92KlZch2z54yrN%2BilIK4Dg%2BKYv%2BvW3uA3NE4JLPUiHfHRDAVypXK4r1DZmzth4oefSkx%2BnmCwV5nGvRoxp6oK1%2BwORjyt993oAWbv5ugHRy40PsHGaSwdMl4fDdqeL3XnmRCzIqjxL3%2FCNyl7CohPNXCLQ&X-Amz-Signature=1f7289171a4bd8388adafcf6c33165df54b0a7835b037b59fd4121dc2c6aa5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZMKUXS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3EobdHmUlYb06%2FHjXlDuS7mtlI2YhSRVCJASZ0f3tJQIgGqkWuS8mKlx55lASkE%2FpXoeYg9r9HwtZlVjQfeL20KcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDjZ8KuECozi1q1OCrcA8y7hLXsPcs03D9WLzkqnxdEW%2FurI%2F8Q8omAXzr%2FWTJvPQ2eSbCL8OFFPRr9yaup%2FsEVQePfsGOBCIm1Tbf9zQSNwJhkvCRzF52hN%2FbeG1Z3kvwbkb%2BHbrrsuKq5zidweT%2FGAOr1j5%2FycGyH8zMe4DCbiRSla%2BzBUzecsCQgLZNVvJ2LPfqZwovPW8ZDisgAfjjUfeQ0hmAQYJJ6VHc%2FEc%2B0FvpLv1Vg00H0qCyvVsGDXfilLoFTV5U2CNMlO0oXK%2Bfz9YzhukGT8JS9yUQOVDdoHn7B4SVVe5NiUKjfYatBYMM5dKXpWDIE9bK5xEEu7RTA%2FFOZ4pnM4SVQKx4pRCvcr9CS5R%2F%2Ft11Zc9j8bVKcD7L9DEwIB1fn0Q0qTScrMtSc3nooGpFG2XE7iLFL1sETqxQ%2FlQa8ox5H2Qj4DtnCxnYr%2F2%2FVTakuQugcgspP2QBL17duhlG6oWXvqOP4rOYIiYjPQ98mWMpai8eeCODPxbEGT43BplYzMGRM6v4Ujwgkp5PtPErrhncTilH2ydcw4G%2B3AsWSRevB6C7hbuR7mgJfvmoTFmVqKMKM9hpsFHL9XJVktIKF%2B4UCSwA%2Fk%2Fk0BbH5ovE7zKpNFOM4cyybyQshO%2BndjhD6lAjyMJvj8bwGOqUBwNXY7jg9j3JC8GoB9SXr%2FOBWUe0yzbNsZFFB2ZNBcZ%2BsXI3psM9aJ8PXHr%2FtI7q%2Bpd92KlZch2z54yrN%2BilIK4Dg%2BKYv%2BvW3uA3NE4JLPUiHfHRDAVypXK4r1DZmzth4oefSkx%2BnmCwV5nGvRoxp6oK1%2BwORjyt993oAWbv5ugHRy40PsHGaSwdMl4fDdqeL3XnmRCzIqjxL3%2FCNyl7CohPNXCLQ&X-Amz-Signature=68342426b5834973e5d1fccf89b8eed3053ae1f87aa0ed014042e77e68d28ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZMKUXS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3EobdHmUlYb06%2FHjXlDuS7mtlI2YhSRVCJASZ0f3tJQIgGqkWuS8mKlx55lASkE%2FpXoeYg9r9HwtZlVjQfeL20KcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDjZ8KuECozi1q1OCrcA8y7hLXsPcs03D9WLzkqnxdEW%2FurI%2F8Q8omAXzr%2FWTJvPQ2eSbCL8OFFPRr9yaup%2FsEVQePfsGOBCIm1Tbf9zQSNwJhkvCRzF52hN%2FbeG1Z3kvwbkb%2BHbrrsuKq5zidweT%2FGAOr1j5%2FycGyH8zMe4DCbiRSla%2BzBUzecsCQgLZNVvJ2LPfqZwovPW8ZDisgAfjjUfeQ0hmAQYJJ6VHc%2FEc%2B0FvpLv1Vg00H0qCyvVsGDXfilLoFTV5U2CNMlO0oXK%2Bfz9YzhukGT8JS9yUQOVDdoHn7B4SVVe5NiUKjfYatBYMM5dKXpWDIE9bK5xEEu7RTA%2FFOZ4pnM4SVQKx4pRCvcr9CS5R%2F%2Ft11Zc9j8bVKcD7L9DEwIB1fn0Q0qTScrMtSc3nooGpFG2XE7iLFL1sETqxQ%2FlQa8ox5H2Qj4DtnCxnYr%2F2%2FVTakuQugcgspP2QBL17duhlG6oWXvqOP4rOYIiYjPQ98mWMpai8eeCODPxbEGT43BplYzMGRM6v4Ujwgkp5PtPErrhncTilH2ydcw4G%2B3AsWSRevB6C7hbuR7mgJfvmoTFmVqKMKM9hpsFHL9XJVktIKF%2B4UCSwA%2Fk%2Fk0BbH5ovE7zKpNFOM4cyybyQshO%2BndjhD6lAjyMJvj8bwGOqUBwNXY7jg9j3JC8GoB9SXr%2FOBWUe0yzbNsZFFB2ZNBcZ%2BsXI3psM9aJ8PXHr%2FtI7q%2Bpd92KlZch2z54yrN%2BilIK4Dg%2BKYv%2BvW3uA3NE4JLPUiHfHRDAVypXK4r1DZmzth4oefSkx%2BnmCwV5nGvRoxp6oK1%2BwORjyt993oAWbv5ugHRy40PsHGaSwdMl4fDdqeL3XnmRCzIqjxL3%2FCNyl7CohPNXCLQ&X-Amz-Signature=498c1a6dbe30d0526b71f54568e3dea3c819f9f63f72e110bf3f84a53fc6ab51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZMKUXS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3EobdHmUlYb06%2FHjXlDuS7mtlI2YhSRVCJASZ0f3tJQIgGqkWuS8mKlx55lASkE%2FpXoeYg9r9HwtZlVjQfeL20KcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDjZ8KuECozi1q1OCrcA8y7hLXsPcs03D9WLzkqnxdEW%2FurI%2F8Q8omAXzr%2FWTJvPQ2eSbCL8OFFPRr9yaup%2FsEVQePfsGOBCIm1Tbf9zQSNwJhkvCRzF52hN%2FbeG1Z3kvwbkb%2BHbrrsuKq5zidweT%2FGAOr1j5%2FycGyH8zMe4DCbiRSla%2BzBUzecsCQgLZNVvJ2LPfqZwovPW8ZDisgAfjjUfeQ0hmAQYJJ6VHc%2FEc%2B0FvpLv1Vg00H0qCyvVsGDXfilLoFTV5U2CNMlO0oXK%2Bfz9YzhukGT8JS9yUQOVDdoHn7B4SVVe5NiUKjfYatBYMM5dKXpWDIE9bK5xEEu7RTA%2FFOZ4pnM4SVQKx4pRCvcr9CS5R%2F%2Ft11Zc9j8bVKcD7L9DEwIB1fn0Q0qTScrMtSc3nooGpFG2XE7iLFL1sETqxQ%2FlQa8ox5H2Qj4DtnCxnYr%2F2%2FVTakuQugcgspP2QBL17duhlG6oWXvqOP4rOYIiYjPQ98mWMpai8eeCODPxbEGT43BplYzMGRM6v4Ujwgkp5PtPErrhncTilH2ydcw4G%2B3AsWSRevB6C7hbuR7mgJfvmoTFmVqKMKM9hpsFHL9XJVktIKF%2B4UCSwA%2Fk%2Fk0BbH5ovE7zKpNFOM4cyybyQshO%2BndjhD6lAjyMJvj8bwGOqUBwNXY7jg9j3JC8GoB9SXr%2FOBWUe0yzbNsZFFB2ZNBcZ%2BsXI3psM9aJ8PXHr%2FtI7q%2Bpd92KlZch2z54yrN%2BilIK4Dg%2BKYv%2BvW3uA3NE4JLPUiHfHRDAVypXK4r1DZmzth4oefSkx%2BnmCwV5nGvRoxp6oK1%2BwORjyt993oAWbv5ugHRy40PsHGaSwdMl4fDdqeL3XnmRCzIqjxL3%2FCNyl7CohPNXCLQ&X-Amz-Signature=ba0355f18568c60737ad0a9ae51c7d0115f5010e9849578f718a5f69a2b7ee21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZMKUXS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3EobdHmUlYb06%2FHjXlDuS7mtlI2YhSRVCJASZ0f3tJQIgGqkWuS8mKlx55lASkE%2FpXoeYg9r9HwtZlVjQfeL20KcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDjZ8KuECozi1q1OCrcA8y7hLXsPcs03D9WLzkqnxdEW%2FurI%2F8Q8omAXzr%2FWTJvPQ2eSbCL8OFFPRr9yaup%2FsEVQePfsGOBCIm1Tbf9zQSNwJhkvCRzF52hN%2FbeG1Z3kvwbkb%2BHbrrsuKq5zidweT%2FGAOr1j5%2FycGyH8zMe4DCbiRSla%2BzBUzecsCQgLZNVvJ2LPfqZwovPW8ZDisgAfjjUfeQ0hmAQYJJ6VHc%2FEc%2B0FvpLv1Vg00H0qCyvVsGDXfilLoFTV5U2CNMlO0oXK%2Bfz9YzhukGT8JS9yUQOVDdoHn7B4SVVe5NiUKjfYatBYMM5dKXpWDIE9bK5xEEu7RTA%2FFOZ4pnM4SVQKx4pRCvcr9CS5R%2F%2Ft11Zc9j8bVKcD7L9DEwIB1fn0Q0qTScrMtSc3nooGpFG2XE7iLFL1sETqxQ%2FlQa8ox5H2Qj4DtnCxnYr%2F2%2FVTakuQugcgspP2QBL17duhlG6oWXvqOP4rOYIiYjPQ98mWMpai8eeCODPxbEGT43BplYzMGRM6v4Ujwgkp5PtPErrhncTilH2ydcw4G%2B3AsWSRevB6C7hbuR7mgJfvmoTFmVqKMKM9hpsFHL9XJVktIKF%2B4UCSwA%2Fk%2Fk0BbH5ovE7zKpNFOM4cyybyQshO%2BndjhD6lAjyMJvj8bwGOqUBwNXY7jg9j3JC8GoB9SXr%2FOBWUe0yzbNsZFFB2ZNBcZ%2BsXI3psM9aJ8PXHr%2FtI7q%2Bpd92KlZch2z54yrN%2BilIK4Dg%2BKYv%2BvW3uA3NE4JLPUiHfHRDAVypXK4r1DZmzth4oefSkx%2BnmCwV5nGvRoxp6oK1%2BwORjyt993oAWbv5ugHRy40PsHGaSwdMl4fDdqeL3XnmRCzIqjxL3%2FCNyl7CohPNXCLQ&X-Amz-Signature=04a4bfe009194bb4081e6b7d0bcc5c1d65b58481101b95778722dd41ec3e22cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
