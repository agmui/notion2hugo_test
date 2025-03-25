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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCG7RNVC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIWqUagZxmmzK8WL8r7hlAuLh44FLfoMuV7gfsw6hVFAiB6cQihtOcOfi046rftft0CcMR3OioJb8%2Br7gwgndzqMSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLII4eJ5Qyvnw5%2BFKtwD8Sn7NX%2B2yaCiw5b1%2BYpKem5dAhq0O3H62p8%2B2ie5O%2FvNudIrX8f6gMD8slZXkmLHqtbf5fpXX%2Btl5c0j59JryhLrxbyh%2Fodhjb5y9IBltUSX77TnZmQL3UxWLLRKim8IRfk1L7n5VmuW8qfS21j%2F7Ftn1yZBL7YxR3nuZzu%2BZovn78gDb681QsxYstH%2B98hGUHkpz0sy9Txas0ASHcK%2BfnI3Z0gBhx7BEOi26QxO1ZK%2F2OhPVHkSL6wK15fd8i16U60SvG1YRCfmN2Wr5L8CgHfT%2BJfBLB9JwRl6DuzV2ISq8M4U%2Fh7wp1ZxpeAtfRqDmW%2BV3%2FnV1WgUYpEtlX%2BrSM3dYu83kv9OCFSbSYVqfr6rdubZW%2B%2F9%2Fat7qDnzAOdZ9pyw1%2BGj4iy96zmYWSVgfwM8jo92MOftf%2Fdd%2FG11%2F2EnT7NVhDXPMr3zJgsVn%2Fg3ILFs01YM5s75%2BS20mS6gCt7VQuMv0r%2FRqohtuTNQZhT63VjVUEQbps78Z%2BXzzOUqvXH5k%2BJ44jvdYsYEc6E31Ul7KOLlNjc%2FQbvfBouR9Og8gAG%2BibFGSYvEOHrDtg2pfwzV%2FEaXwQPtQKWn4tViBTWPsIaJooq%2Fu%2FQVmEjP%2FdQz9y%2FMKXlqc6gh%2BREw%2BO%2BHvwY6pgFliTOL61BIWeu%2FVBWmfMDHdfcxzSaN9ZzRjI%2FCcvTfQLQlr2G9cTxMzEy8%2BG08wfdR%2FXlnfFrXA5KVtIeokxkmzvFo0eWhzJVCV8n5SJWaPB6C6HD%2FBhQP8D8TdTjuAkFd3CRTE2ddmZT2XABeHvOKr%2B%2FwdxAbs0S69HqBiCo4pLamOKYcDLx8qg9KjdWVH2Mx3tVZ%2FXujHY1bpfeuos83eTyJLQiv&X-Amz-Signature=3026c8da175ea30981feb6c1401b50cfa414ce84a7a9bf100f3232dcdf27d67c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCG7RNVC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIWqUagZxmmzK8WL8r7hlAuLh44FLfoMuV7gfsw6hVFAiB6cQihtOcOfi046rftft0CcMR3OioJb8%2Br7gwgndzqMSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLII4eJ5Qyvnw5%2BFKtwD8Sn7NX%2B2yaCiw5b1%2BYpKem5dAhq0O3H62p8%2B2ie5O%2FvNudIrX8f6gMD8slZXkmLHqtbf5fpXX%2Btl5c0j59JryhLrxbyh%2Fodhjb5y9IBltUSX77TnZmQL3UxWLLRKim8IRfk1L7n5VmuW8qfS21j%2F7Ftn1yZBL7YxR3nuZzu%2BZovn78gDb681QsxYstH%2B98hGUHkpz0sy9Txas0ASHcK%2BfnI3Z0gBhx7BEOi26QxO1ZK%2F2OhPVHkSL6wK15fd8i16U60SvG1YRCfmN2Wr5L8CgHfT%2BJfBLB9JwRl6DuzV2ISq8M4U%2Fh7wp1ZxpeAtfRqDmW%2BV3%2FnV1WgUYpEtlX%2BrSM3dYu83kv9OCFSbSYVqfr6rdubZW%2B%2F9%2Fat7qDnzAOdZ9pyw1%2BGj4iy96zmYWSVgfwM8jo92MOftf%2Fdd%2FG11%2F2EnT7NVhDXPMr3zJgsVn%2Fg3ILFs01YM5s75%2BS20mS6gCt7VQuMv0r%2FRqohtuTNQZhT63VjVUEQbps78Z%2BXzzOUqvXH5k%2BJ44jvdYsYEc6E31Ul7KOLlNjc%2FQbvfBouR9Og8gAG%2BibFGSYvEOHrDtg2pfwzV%2FEaXwQPtQKWn4tViBTWPsIaJooq%2Fu%2FQVmEjP%2FdQz9y%2FMKXlqc6gh%2BREw%2BO%2BHvwY6pgFliTOL61BIWeu%2FVBWmfMDHdfcxzSaN9ZzRjI%2FCcvTfQLQlr2G9cTxMzEy8%2BG08wfdR%2FXlnfFrXA5KVtIeokxkmzvFo0eWhzJVCV8n5SJWaPB6C6HD%2FBhQP8D8TdTjuAkFd3CRTE2ddmZT2XABeHvOKr%2B%2FwdxAbs0S69HqBiCo4pLamOKYcDLx8qg9KjdWVH2Mx3tVZ%2FXujHY1bpfeuos83eTyJLQiv&X-Amz-Signature=91daf202f0456508d90dc9e79dd733d189a022ab8e2213e4136b3bf1badcea74&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCG7RNVC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIWqUagZxmmzK8WL8r7hlAuLh44FLfoMuV7gfsw6hVFAiB6cQihtOcOfi046rftft0CcMR3OioJb8%2Br7gwgndzqMSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLII4eJ5Qyvnw5%2BFKtwD8Sn7NX%2B2yaCiw5b1%2BYpKem5dAhq0O3H62p8%2B2ie5O%2FvNudIrX8f6gMD8slZXkmLHqtbf5fpXX%2Btl5c0j59JryhLrxbyh%2Fodhjb5y9IBltUSX77TnZmQL3UxWLLRKim8IRfk1L7n5VmuW8qfS21j%2F7Ftn1yZBL7YxR3nuZzu%2BZovn78gDb681QsxYstH%2B98hGUHkpz0sy9Txas0ASHcK%2BfnI3Z0gBhx7BEOi26QxO1ZK%2F2OhPVHkSL6wK15fd8i16U60SvG1YRCfmN2Wr5L8CgHfT%2BJfBLB9JwRl6DuzV2ISq8M4U%2Fh7wp1ZxpeAtfRqDmW%2BV3%2FnV1WgUYpEtlX%2BrSM3dYu83kv9OCFSbSYVqfr6rdubZW%2B%2F9%2Fat7qDnzAOdZ9pyw1%2BGj4iy96zmYWSVgfwM8jo92MOftf%2Fdd%2FG11%2F2EnT7NVhDXPMr3zJgsVn%2Fg3ILFs01YM5s75%2BS20mS6gCt7VQuMv0r%2FRqohtuTNQZhT63VjVUEQbps78Z%2BXzzOUqvXH5k%2BJ44jvdYsYEc6E31Ul7KOLlNjc%2FQbvfBouR9Og8gAG%2BibFGSYvEOHrDtg2pfwzV%2FEaXwQPtQKWn4tViBTWPsIaJooq%2Fu%2FQVmEjP%2FdQz9y%2FMKXlqc6gh%2BREw%2BO%2BHvwY6pgFliTOL61BIWeu%2FVBWmfMDHdfcxzSaN9ZzRjI%2FCcvTfQLQlr2G9cTxMzEy8%2BG08wfdR%2FXlnfFrXA5KVtIeokxkmzvFo0eWhzJVCV8n5SJWaPB6C6HD%2FBhQP8D8TdTjuAkFd3CRTE2ddmZT2XABeHvOKr%2B%2FwdxAbs0S69HqBiCo4pLamOKYcDLx8qg9KjdWVH2Mx3tVZ%2FXujHY1bpfeuos83eTyJLQiv&X-Amz-Signature=72635c60d56b041219e083443e6924914d50064b63bc99c3a0d7d210b424c249&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCG7RNVC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIWqUagZxmmzK8WL8r7hlAuLh44FLfoMuV7gfsw6hVFAiB6cQihtOcOfi046rftft0CcMR3OioJb8%2Br7gwgndzqMSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLII4eJ5Qyvnw5%2BFKtwD8Sn7NX%2B2yaCiw5b1%2BYpKem5dAhq0O3H62p8%2B2ie5O%2FvNudIrX8f6gMD8slZXkmLHqtbf5fpXX%2Btl5c0j59JryhLrxbyh%2Fodhjb5y9IBltUSX77TnZmQL3UxWLLRKim8IRfk1L7n5VmuW8qfS21j%2F7Ftn1yZBL7YxR3nuZzu%2BZovn78gDb681QsxYstH%2B98hGUHkpz0sy9Txas0ASHcK%2BfnI3Z0gBhx7BEOi26QxO1ZK%2F2OhPVHkSL6wK15fd8i16U60SvG1YRCfmN2Wr5L8CgHfT%2BJfBLB9JwRl6DuzV2ISq8M4U%2Fh7wp1ZxpeAtfRqDmW%2BV3%2FnV1WgUYpEtlX%2BrSM3dYu83kv9OCFSbSYVqfr6rdubZW%2B%2F9%2Fat7qDnzAOdZ9pyw1%2BGj4iy96zmYWSVgfwM8jo92MOftf%2Fdd%2FG11%2F2EnT7NVhDXPMr3zJgsVn%2Fg3ILFs01YM5s75%2BS20mS6gCt7VQuMv0r%2FRqohtuTNQZhT63VjVUEQbps78Z%2BXzzOUqvXH5k%2BJ44jvdYsYEc6E31Ul7KOLlNjc%2FQbvfBouR9Og8gAG%2BibFGSYvEOHrDtg2pfwzV%2FEaXwQPtQKWn4tViBTWPsIaJooq%2Fu%2FQVmEjP%2FdQz9y%2FMKXlqc6gh%2BREw%2BO%2BHvwY6pgFliTOL61BIWeu%2FVBWmfMDHdfcxzSaN9ZzRjI%2FCcvTfQLQlr2G9cTxMzEy8%2BG08wfdR%2FXlnfFrXA5KVtIeokxkmzvFo0eWhzJVCV8n5SJWaPB6C6HD%2FBhQP8D8TdTjuAkFd3CRTE2ddmZT2XABeHvOKr%2B%2FwdxAbs0S69HqBiCo4pLamOKYcDLx8qg9KjdWVH2Mx3tVZ%2FXujHY1bpfeuos83eTyJLQiv&X-Amz-Signature=c745de80b6207f7518432449c73c7d87d06573134d53fab80e3e9c377a834cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCG7RNVC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIWqUagZxmmzK8WL8r7hlAuLh44FLfoMuV7gfsw6hVFAiB6cQihtOcOfi046rftft0CcMR3OioJb8%2Br7gwgndzqMSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLII4eJ5Qyvnw5%2BFKtwD8Sn7NX%2B2yaCiw5b1%2BYpKem5dAhq0O3H62p8%2B2ie5O%2FvNudIrX8f6gMD8slZXkmLHqtbf5fpXX%2Btl5c0j59JryhLrxbyh%2Fodhjb5y9IBltUSX77TnZmQL3UxWLLRKim8IRfk1L7n5VmuW8qfS21j%2F7Ftn1yZBL7YxR3nuZzu%2BZovn78gDb681QsxYstH%2B98hGUHkpz0sy9Txas0ASHcK%2BfnI3Z0gBhx7BEOi26QxO1ZK%2F2OhPVHkSL6wK15fd8i16U60SvG1YRCfmN2Wr5L8CgHfT%2BJfBLB9JwRl6DuzV2ISq8M4U%2Fh7wp1ZxpeAtfRqDmW%2BV3%2FnV1WgUYpEtlX%2BrSM3dYu83kv9OCFSbSYVqfr6rdubZW%2B%2F9%2Fat7qDnzAOdZ9pyw1%2BGj4iy96zmYWSVgfwM8jo92MOftf%2Fdd%2FG11%2F2EnT7NVhDXPMr3zJgsVn%2Fg3ILFs01YM5s75%2BS20mS6gCt7VQuMv0r%2FRqohtuTNQZhT63VjVUEQbps78Z%2BXzzOUqvXH5k%2BJ44jvdYsYEc6E31Ul7KOLlNjc%2FQbvfBouR9Og8gAG%2BibFGSYvEOHrDtg2pfwzV%2FEaXwQPtQKWn4tViBTWPsIaJooq%2Fu%2FQVmEjP%2FdQz9y%2FMKXlqc6gh%2BREw%2BO%2BHvwY6pgFliTOL61BIWeu%2FVBWmfMDHdfcxzSaN9ZzRjI%2FCcvTfQLQlr2G9cTxMzEy8%2BG08wfdR%2FXlnfFrXA5KVtIeokxkmzvFo0eWhzJVCV8n5SJWaPB6C6HD%2FBhQP8D8TdTjuAkFd3CRTE2ddmZT2XABeHvOKr%2B%2FwdxAbs0S69HqBiCo4pLamOKYcDLx8qg9KjdWVH2Mx3tVZ%2FXujHY1bpfeuos83eTyJLQiv&X-Amz-Signature=0e12b767ee1f7ec1281da7a267fc7262364328b59356207a772ec9ca98a3bd61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCG7RNVC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIWqUagZxmmzK8WL8r7hlAuLh44FLfoMuV7gfsw6hVFAiB6cQihtOcOfi046rftft0CcMR3OioJb8%2Br7gwgndzqMSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLII4eJ5Qyvnw5%2BFKtwD8Sn7NX%2B2yaCiw5b1%2BYpKem5dAhq0O3H62p8%2B2ie5O%2FvNudIrX8f6gMD8slZXkmLHqtbf5fpXX%2Btl5c0j59JryhLrxbyh%2Fodhjb5y9IBltUSX77TnZmQL3UxWLLRKim8IRfk1L7n5VmuW8qfS21j%2F7Ftn1yZBL7YxR3nuZzu%2BZovn78gDb681QsxYstH%2B98hGUHkpz0sy9Txas0ASHcK%2BfnI3Z0gBhx7BEOi26QxO1ZK%2F2OhPVHkSL6wK15fd8i16U60SvG1YRCfmN2Wr5L8CgHfT%2BJfBLB9JwRl6DuzV2ISq8M4U%2Fh7wp1ZxpeAtfRqDmW%2BV3%2FnV1WgUYpEtlX%2BrSM3dYu83kv9OCFSbSYVqfr6rdubZW%2B%2F9%2Fat7qDnzAOdZ9pyw1%2BGj4iy96zmYWSVgfwM8jo92MOftf%2Fdd%2FG11%2F2EnT7NVhDXPMr3zJgsVn%2Fg3ILFs01YM5s75%2BS20mS6gCt7VQuMv0r%2FRqohtuTNQZhT63VjVUEQbps78Z%2BXzzOUqvXH5k%2BJ44jvdYsYEc6E31Ul7KOLlNjc%2FQbvfBouR9Og8gAG%2BibFGSYvEOHrDtg2pfwzV%2FEaXwQPtQKWn4tViBTWPsIaJooq%2Fu%2FQVmEjP%2FdQz9y%2FMKXlqc6gh%2BREw%2BO%2BHvwY6pgFliTOL61BIWeu%2FVBWmfMDHdfcxzSaN9ZzRjI%2FCcvTfQLQlr2G9cTxMzEy8%2BG08wfdR%2FXlnfFrXA5KVtIeokxkmzvFo0eWhzJVCV8n5SJWaPB6C6HD%2FBhQP8D8TdTjuAkFd3CRTE2ddmZT2XABeHvOKr%2B%2FwdxAbs0S69HqBiCo4pLamOKYcDLx8qg9KjdWVH2Mx3tVZ%2FXujHY1bpfeuos83eTyJLQiv&X-Amz-Signature=b9fb0ad9a38e3b8153e46f57f5679e098f99c2e41a32503865f030b2b531bb08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCG7RNVC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIWqUagZxmmzK8WL8r7hlAuLh44FLfoMuV7gfsw6hVFAiB6cQihtOcOfi046rftft0CcMR3OioJb8%2Br7gwgndzqMSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLII4eJ5Qyvnw5%2BFKtwD8Sn7NX%2B2yaCiw5b1%2BYpKem5dAhq0O3H62p8%2B2ie5O%2FvNudIrX8f6gMD8slZXkmLHqtbf5fpXX%2Btl5c0j59JryhLrxbyh%2Fodhjb5y9IBltUSX77TnZmQL3UxWLLRKim8IRfk1L7n5VmuW8qfS21j%2F7Ftn1yZBL7YxR3nuZzu%2BZovn78gDb681QsxYstH%2B98hGUHkpz0sy9Txas0ASHcK%2BfnI3Z0gBhx7BEOi26QxO1ZK%2F2OhPVHkSL6wK15fd8i16U60SvG1YRCfmN2Wr5L8CgHfT%2BJfBLB9JwRl6DuzV2ISq8M4U%2Fh7wp1ZxpeAtfRqDmW%2BV3%2FnV1WgUYpEtlX%2BrSM3dYu83kv9OCFSbSYVqfr6rdubZW%2B%2F9%2Fat7qDnzAOdZ9pyw1%2BGj4iy96zmYWSVgfwM8jo92MOftf%2Fdd%2FG11%2F2EnT7NVhDXPMr3zJgsVn%2Fg3ILFs01YM5s75%2BS20mS6gCt7VQuMv0r%2FRqohtuTNQZhT63VjVUEQbps78Z%2BXzzOUqvXH5k%2BJ44jvdYsYEc6E31Ul7KOLlNjc%2FQbvfBouR9Og8gAG%2BibFGSYvEOHrDtg2pfwzV%2FEaXwQPtQKWn4tViBTWPsIaJooq%2Fu%2FQVmEjP%2FdQz9y%2FMKXlqc6gh%2BREw%2BO%2BHvwY6pgFliTOL61BIWeu%2FVBWmfMDHdfcxzSaN9ZzRjI%2FCcvTfQLQlr2G9cTxMzEy8%2BG08wfdR%2FXlnfFrXA5KVtIeokxkmzvFo0eWhzJVCV8n5SJWaPB6C6HD%2FBhQP8D8TdTjuAkFd3CRTE2ddmZT2XABeHvOKr%2B%2FwdxAbs0S69HqBiCo4pLamOKYcDLx8qg9KjdWVH2Mx3tVZ%2FXujHY1bpfeuos83eTyJLQiv&X-Amz-Signature=b1947e03d730aff69ea7c2fb7f2693b903dccdea37e225a0e3f19aceb13fb0f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCG7RNVC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIWqUagZxmmzK8WL8r7hlAuLh44FLfoMuV7gfsw6hVFAiB6cQihtOcOfi046rftft0CcMR3OioJb8%2Br7gwgndzqMSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLII4eJ5Qyvnw5%2BFKtwD8Sn7NX%2B2yaCiw5b1%2BYpKem5dAhq0O3H62p8%2B2ie5O%2FvNudIrX8f6gMD8slZXkmLHqtbf5fpXX%2Btl5c0j59JryhLrxbyh%2Fodhjb5y9IBltUSX77TnZmQL3UxWLLRKim8IRfk1L7n5VmuW8qfS21j%2F7Ftn1yZBL7YxR3nuZzu%2BZovn78gDb681QsxYstH%2B98hGUHkpz0sy9Txas0ASHcK%2BfnI3Z0gBhx7BEOi26QxO1ZK%2F2OhPVHkSL6wK15fd8i16U60SvG1YRCfmN2Wr5L8CgHfT%2BJfBLB9JwRl6DuzV2ISq8M4U%2Fh7wp1ZxpeAtfRqDmW%2BV3%2FnV1WgUYpEtlX%2BrSM3dYu83kv9OCFSbSYVqfr6rdubZW%2B%2F9%2Fat7qDnzAOdZ9pyw1%2BGj4iy96zmYWSVgfwM8jo92MOftf%2Fdd%2FG11%2F2EnT7NVhDXPMr3zJgsVn%2Fg3ILFs01YM5s75%2BS20mS6gCt7VQuMv0r%2FRqohtuTNQZhT63VjVUEQbps78Z%2BXzzOUqvXH5k%2BJ44jvdYsYEc6E31Ul7KOLlNjc%2FQbvfBouR9Og8gAG%2BibFGSYvEOHrDtg2pfwzV%2FEaXwQPtQKWn4tViBTWPsIaJooq%2Fu%2FQVmEjP%2FdQz9y%2FMKXlqc6gh%2BREw%2BO%2BHvwY6pgFliTOL61BIWeu%2FVBWmfMDHdfcxzSaN9ZzRjI%2FCcvTfQLQlr2G9cTxMzEy8%2BG08wfdR%2FXlnfFrXA5KVtIeokxkmzvFo0eWhzJVCV8n5SJWaPB6C6HD%2FBhQP8D8TdTjuAkFd3CRTE2ddmZT2XABeHvOKr%2B%2FwdxAbs0S69HqBiCo4pLamOKYcDLx8qg9KjdWVH2Mx3tVZ%2FXujHY1bpfeuos83eTyJLQiv&X-Amz-Signature=44c2b919843548e85102f40f04a0d228468b0fbc3fff795c36bb40592482811d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
