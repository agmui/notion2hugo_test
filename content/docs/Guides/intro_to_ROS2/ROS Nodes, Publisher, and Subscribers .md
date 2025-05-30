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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6B4WQA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsv10rAZcOJfOJwREmBSTm3rAhhGNQvhhZhisTqSExCAiBUkhjXNWZhvl2g%2FZpcNLw%2Bk8ofPtQiownNurKqQxlO%2BCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGnd1GxA0cQ6IPn6KtwD%2BXigDyiSWIYWWd61QuutI439rLV5kGiH04fc8bMLbi5VPPujfUlHGMfrwOZB83vkcl2OLcbBTZDB8m65z%2Bd14KaKYmKBIf6CKARnfx3JDX%2BJ61E4yuKKgAakGPQiZiRPkp5Kg23%2BuYHhQdJEgqpOVSkpUpqep3o4GvLaYWBGWqcczevhuewetP9diu6%2FjLFTcqtPVvd13r4Pze61KgKZaKqkN4kzqNsu9bftiLp%2BhMh2towZFMFiXBpfrJl4bUpqS6YUUzKZ1I3vZcBbK7z17MMpH22lioEQ8jbbFvf3dzKcdB4AVTPkOzKXGJhMVQEA8%2FqFyP4EpsI1xgt84YL5gx7tjrNz%2FOM%2B4YKgQFI81weYGlz2fBab3jP4gogdSgDcshuzt0RiFJQO724T1M7GAPZ0uFq7ltWRntpSX6fNjupBwIH2bvgmwJ2GpzjjSKytDcTaqFT6Sx7iMORdDkuje9QZeG5BlyaQ0dHSpSgH0Z78fd2Yi2h1cN7G33C%2BxTU2SGQvQpZymMTrNhaEbGz9VE%2FJmw9UES7VUcuKkricUzS6FqYh%2BpJyBKW2hl4y0REc%2FhPV2vPkAkTpLhklLeFyQpttKdtFB5j4H7p8gVViEMfqBAlmycYWB%2BhaLEEwoP%2FkwQY6pgGgR9JTfj9ugVYMVNxae2wiY5CC9gWiitOa6K76yrwNMpUe2WZm%2Fg%2Fu%2FsmbtxEJJToM%2FhdQCVKMYmqkW2iqo1VlzIjiZyi%2Bq0wrqRxrJjfSFLq0PU7DkIIcmbd7YkVsaHGzQ%2BhHrsYoxKI9WkDZLNMoW2AxYkHZmzqTCQa6AK1kTRM8aPmETJZXzzI4H7RXtFhUpKSeesEpeuBdFNlPyv0SJx5NFUSO&X-Amz-Signature=aaee1cc15a3a96da30cb1ebcfbe5262e8bc3b2f3509d223acf93dcf726840590&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6B4WQA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsv10rAZcOJfOJwREmBSTm3rAhhGNQvhhZhisTqSExCAiBUkhjXNWZhvl2g%2FZpcNLw%2Bk8ofPtQiownNurKqQxlO%2BCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGnd1GxA0cQ6IPn6KtwD%2BXigDyiSWIYWWd61QuutI439rLV5kGiH04fc8bMLbi5VPPujfUlHGMfrwOZB83vkcl2OLcbBTZDB8m65z%2Bd14KaKYmKBIf6CKARnfx3JDX%2BJ61E4yuKKgAakGPQiZiRPkp5Kg23%2BuYHhQdJEgqpOVSkpUpqep3o4GvLaYWBGWqcczevhuewetP9diu6%2FjLFTcqtPVvd13r4Pze61KgKZaKqkN4kzqNsu9bftiLp%2BhMh2towZFMFiXBpfrJl4bUpqS6YUUzKZ1I3vZcBbK7z17MMpH22lioEQ8jbbFvf3dzKcdB4AVTPkOzKXGJhMVQEA8%2FqFyP4EpsI1xgt84YL5gx7tjrNz%2FOM%2B4YKgQFI81weYGlz2fBab3jP4gogdSgDcshuzt0RiFJQO724T1M7GAPZ0uFq7ltWRntpSX6fNjupBwIH2bvgmwJ2GpzjjSKytDcTaqFT6Sx7iMORdDkuje9QZeG5BlyaQ0dHSpSgH0Z78fd2Yi2h1cN7G33C%2BxTU2SGQvQpZymMTrNhaEbGz9VE%2FJmw9UES7VUcuKkricUzS6FqYh%2BpJyBKW2hl4y0REc%2FhPV2vPkAkTpLhklLeFyQpttKdtFB5j4H7p8gVViEMfqBAlmycYWB%2BhaLEEwoP%2FkwQY6pgGgR9JTfj9ugVYMVNxae2wiY5CC9gWiitOa6K76yrwNMpUe2WZm%2Fg%2Fu%2FsmbtxEJJToM%2FhdQCVKMYmqkW2iqo1VlzIjiZyi%2Bq0wrqRxrJjfSFLq0PU7DkIIcmbd7YkVsaHGzQ%2BhHrsYoxKI9WkDZLNMoW2AxYkHZmzqTCQa6AK1kTRM8aPmETJZXzzI4H7RXtFhUpKSeesEpeuBdFNlPyv0SJx5NFUSO&X-Amz-Signature=1231f3894890f57256a55b65d291901d2db2b5e9fd69063853e227390fade3bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6B4WQA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsv10rAZcOJfOJwREmBSTm3rAhhGNQvhhZhisTqSExCAiBUkhjXNWZhvl2g%2FZpcNLw%2Bk8ofPtQiownNurKqQxlO%2BCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGnd1GxA0cQ6IPn6KtwD%2BXigDyiSWIYWWd61QuutI439rLV5kGiH04fc8bMLbi5VPPujfUlHGMfrwOZB83vkcl2OLcbBTZDB8m65z%2Bd14KaKYmKBIf6CKARnfx3JDX%2BJ61E4yuKKgAakGPQiZiRPkp5Kg23%2BuYHhQdJEgqpOVSkpUpqep3o4GvLaYWBGWqcczevhuewetP9diu6%2FjLFTcqtPVvd13r4Pze61KgKZaKqkN4kzqNsu9bftiLp%2BhMh2towZFMFiXBpfrJl4bUpqS6YUUzKZ1I3vZcBbK7z17MMpH22lioEQ8jbbFvf3dzKcdB4AVTPkOzKXGJhMVQEA8%2FqFyP4EpsI1xgt84YL5gx7tjrNz%2FOM%2B4YKgQFI81weYGlz2fBab3jP4gogdSgDcshuzt0RiFJQO724T1M7GAPZ0uFq7ltWRntpSX6fNjupBwIH2bvgmwJ2GpzjjSKytDcTaqFT6Sx7iMORdDkuje9QZeG5BlyaQ0dHSpSgH0Z78fd2Yi2h1cN7G33C%2BxTU2SGQvQpZymMTrNhaEbGz9VE%2FJmw9UES7VUcuKkricUzS6FqYh%2BpJyBKW2hl4y0REc%2FhPV2vPkAkTpLhklLeFyQpttKdtFB5j4H7p8gVViEMfqBAlmycYWB%2BhaLEEwoP%2FkwQY6pgGgR9JTfj9ugVYMVNxae2wiY5CC9gWiitOa6K76yrwNMpUe2WZm%2Fg%2Fu%2FsmbtxEJJToM%2FhdQCVKMYmqkW2iqo1VlzIjiZyi%2Bq0wrqRxrJjfSFLq0PU7DkIIcmbd7YkVsaHGzQ%2BhHrsYoxKI9WkDZLNMoW2AxYkHZmzqTCQa6AK1kTRM8aPmETJZXzzI4H7RXtFhUpKSeesEpeuBdFNlPyv0SJx5NFUSO&X-Amz-Signature=b360bacd36f1d7e910cf5935c5aa97743eacfe74cf8e828ff3f443bc7b809968&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6B4WQA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsv10rAZcOJfOJwREmBSTm3rAhhGNQvhhZhisTqSExCAiBUkhjXNWZhvl2g%2FZpcNLw%2Bk8ofPtQiownNurKqQxlO%2BCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGnd1GxA0cQ6IPn6KtwD%2BXigDyiSWIYWWd61QuutI439rLV5kGiH04fc8bMLbi5VPPujfUlHGMfrwOZB83vkcl2OLcbBTZDB8m65z%2Bd14KaKYmKBIf6CKARnfx3JDX%2BJ61E4yuKKgAakGPQiZiRPkp5Kg23%2BuYHhQdJEgqpOVSkpUpqep3o4GvLaYWBGWqcczevhuewetP9diu6%2FjLFTcqtPVvd13r4Pze61KgKZaKqkN4kzqNsu9bftiLp%2BhMh2towZFMFiXBpfrJl4bUpqS6YUUzKZ1I3vZcBbK7z17MMpH22lioEQ8jbbFvf3dzKcdB4AVTPkOzKXGJhMVQEA8%2FqFyP4EpsI1xgt84YL5gx7tjrNz%2FOM%2B4YKgQFI81weYGlz2fBab3jP4gogdSgDcshuzt0RiFJQO724T1M7GAPZ0uFq7ltWRntpSX6fNjupBwIH2bvgmwJ2GpzjjSKytDcTaqFT6Sx7iMORdDkuje9QZeG5BlyaQ0dHSpSgH0Z78fd2Yi2h1cN7G33C%2BxTU2SGQvQpZymMTrNhaEbGz9VE%2FJmw9UES7VUcuKkricUzS6FqYh%2BpJyBKW2hl4y0REc%2FhPV2vPkAkTpLhklLeFyQpttKdtFB5j4H7p8gVViEMfqBAlmycYWB%2BhaLEEwoP%2FkwQY6pgGgR9JTfj9ugVYMVNxae2wiY5CC9gWiitOa6K76yrwNMpUe2WZm%2Fg%2Fu%2FsmbtxEJJToM%2FhdQCVKMYmqkW2iqo1VlzIjiZyi%2Bq0wrqRxrJjfSFLq0PU7DkIIcmbd7YkVsaHGzQ%2BhHrsYoxKI9WkDZLNMoW2AxYkHZmzqTCQa6AK1kTRM8aPmETJZXzzI4H7RXtFhUpKSeesEpeuBdFNlPyv0SJx5NFUSO&X-Amz-Signature=834f184f180a1930f14c73df039c863e5ead323392759cfa51ff1dc24278161d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6B4WQA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsv10rAZcOJfOJwREmBSTm3rAhhGNQvhhZhisTqSExCAiBUkhjXNWZhvl2g%2FZpcNLw%2Bk8ofPtQiownNurKqQxlO%2BCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGnd1GxA0cQ6IPn6KtwD%2BXigDyiSWIYWWd61QuutI439rLV5kGiH04fc8bMLbi5VPPujfUlHGMfrwOZB83vkcl2OLcbBTZDB8m65z%2Bd14KaKYmKBIf6CKARnfx3JDX%2BJ61E4yuKKgAakGPQiZiRPkp5Kg23%2BuYHhQdJEgqpOVSkpUpqep3o4GvLaYWBGWqcczevhuewetP9diu6%2FjLFTcqtPVvd13r4Pze61KgKZaKqkN4kzqNsu9bftiLp%2BhMh2towZFMFiXBpfrJl4bUpqS6YUUzKZ1I3vZcBbK7z17MMpH22lioEQ8jbbFvf3dzKcdB4AVTPkOzKXGJhMVQEA8%2FqFyP4EpsI1xgt84YL5gx7tjrNz%2FOM%2B4YKgQFI81weYGlz2fBab3jP4gogdSgDcshuzt0RiFJQO724T1M7GAPZ0uFq7ltWRntpSX6fNjupBwIH2bvgmwJ2GpzjjSKytDcTaqFT6Sx7iMORdDkuje9QZeG5BlyaQ0dHSpSgH0Z78fd2Yi2h1cN7G33C%2BxTU2SGQvQpZymMTrNhaEbGz9VE%2FJmw9UES7VUcuKkricUzS6FqYh%2BpJyBKW2hl4y0REc%2FhPV2vPkAkTpLhklLeFyQpttKdtFB5j4H7p8gVViEMfqBAlmycYWB%2BhaLEEwoP%2FkwQY6pgGgR9JTfj9ugVYMVNxae2wiY5CC9gWiitOa6K76yrwNMpUe2WZm%2Fg%2Fu%2FsmbtxEJJToM%2FhdQCVKMYmqkW2iqo1VlzIjiZyi%2Bq0wrqRxrJjfSFLq0PU7DkIIcmbd7YkVsaHGzQ%2BhHrsYoxKI9WkDZLNMoW2AxYkHZmzqTCQa6AK1kTRM8aPmETJZXzzI4H7RXtFhUpKSeesEpeuBdFNlPyv0SJx5NFUSO&X-Amz-Signature=acdad309c3a78b52032dbf9cbe688299547529502f8122f6d32e4dac85444d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6B4WQA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsv10rAZcOJfOJwREmBSTm3rAhhGNQvhhZhisTqSExCAiBUkhjXNWZhvl2g%2FZpcNLw%2Bk8ofPtQiownNurKqQxlO%2BCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGnd1GxA0cQ6IPn6KtwD%2BXigDyiSWIYWWd61QuutI439rLV5kGiH04fc8bMLbi5VPPujfUlHGMfrwOZB83vkcl2OLcbBTZDB8m65z%2Bd14KaKYmKBIf6CKARnfx3JDX%2BJ61E4yuKKgAakGPQiZiRPkp5Kg23%2BuYHhQdJEgqpOVSkpUpqep3o4GvLaYWBGWqcczevhuewetP9diu6%2FjLFTcqtPVvd13r4Pze61KgKZaKqkN4kzqNsu9bftiLp%2BhMh2towZFMFiXBpfrJl4bUpqS6YUUzKZ1I3vZcBbK7z17MMpH22lioEQ8jbbFvf3dzKcdB4AVTPkOzKXGJhMVQEA8%2FqFyP4EpsI1xgt84YL5gx7tjrNz%2FOM%2B4YKgQFI81weYGlz2fBab3jP4gogdSgDcshuzt0RiFJQO724T1M7GAPZ0uFq7ltWRntpSX6fNjupBwIH2bvgmwJ2GpzjjSKytDcTaqFT6Sx7iMORdDkuje9QZeG5BlyaQ0dHSpSgH0Z78fd2Yi2h1cN7G33C%2BxTU2SGQvQpZymMTrNhaEbGz9VE%2FJmw9UES7VUcuKkricUzS6FqYh%2BpJyBKW2hl4y0REc%2FhPV2vPkAkTpLhklLeFyQpttKdtFB5j4H7p8gVViEMfqBAlmycYWB%2BhaLEEwoP%2FkwQY6pgGgR9JTfj9ugVYMVNxae2wiY5CC9gWiitOa6K76yrwNMpUe2WZm%2Fg%2Fu%2FsmbtxEJJToM%2FhdQCVKMYmqkW2iqo1VlzIjiZyi%2Bq0wrqRxrJjfSFLq0PU7DkIIcmbd7YkVsaHGzQ%2BhHrsYoxKI9WkDZLNMoW2AxYkHZmzqTCQa6AK1kTRM8aPmETJZXzzI4H7RXtFhUpKSeesEpeuBdFNlPyv0SJx5NFUSO&X-Amz-Signature=df4a9fd5278b97cb3f5599f66d6c1d250b4beef82d5876c21a22304f0c6413eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6B4WQA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsv10rAZcOJfOJwREmBSTm3rAhhGNQvhhZhisTqSExCAiBUkhjXNWZhvl2g%2FZpcNLw%2Bk8ofPtQiownNurKqQxlO%2BCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGnd1GxA0cQ6IPn6KtwD%2BXigDyiSWIYWWd61QuutI439rLV5kGiH04fc8bMLbi5VPPujfUlHGMfrwOZB83vkcl2OLcbBTZDB8m65z%2Bd14KaKYmKBIf6CKARnfx3JDX%2BJ61E4yuKKgAakGPQiZiRPkp5Kg23%2BuYHhQdJEgqpOVSkpUpqep3o4GvLaYWBGWqcczevhuewetP9diu6%2FjLFTcqtPVvd13r4Pze61KgKZaKqkN4kzqNsu9bftiLp%2BhMh2towZFMFiXBpfrJl4bUpqS6YUUzKZ1I3vZcBbK7z17MMpH22lioEQ8jbbFvf3dzKcdB4AVTPkOzKXGJhMVQEA8%2FqFyP4EpsI1xgt84YL5gx7tjrNz%2FOM%2B4YKgQFI81weYGlz2fBab3jP4gogdSgDcshuzt0RiFJQO724T1M7GAPZ0uFq7ltWRntpSX6fNjupBwIH2bvgmwJ2GpzjjSKytDcTaqFT6Sx7iMORdDkuje9QZeG5BlyaQ0dHSpSgH0Z78fd2Yi2h1cN7G33C%2BxTU2SGQvQpZymMTrNhaEbGz9VE%2FJmw9UES7VUcuKkricUzS6FqYh%2BpJyBKW2hl4y0REc%2FhPV2vPkAkTpLhklLeFyQpttKdtFB5j4H7p8gVViEMfqBAlmycYWB%2BhaLEEwoP%2FkwQY6pgGgR9JTfj9ugVYMVNxae2wiY5CC9gWiitOa6K76yrwNMpUe2WZm%2Fg%2Fu%2FsmbtxEJJToM%2FhdQCVKMYmqkW2iqo1VlzIjiZyi%2Bq0wrqRxrJjfSFLq0PU7DkIIcmbd7YkVsaHGzQ%2BhHrsYoxKI9WkDZLNMoW2AxYkHZmzqTCQa6AK1kTRM8aPmETJZXzzI4H7RXtFhUpKSeesEpeuBdFNlPyv0SJx5NFUSO&X-Amz-Signature=f76b30bbe47294cbd9710752b7376758c0bb56728b15f1d661c940e9cc14f065&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6B4WQA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsv10rAZcOJfOJwREmBSTm3rAhhGNQvhhZhisTqSExCAiBUkhjXNWZhvl2g%2FZpcNLw%2Bk8ofPtQiownNurKqQxlO%2BCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBGnd1GxA0cQ6IPn6KtwD%2BXigDyiSWIYWWd61QuutI439rLV5kGiH04fc8bMLbi5VPPujfUlHGMfrwOZB83vkcl2OLcbBTZDB8m65z%2Bd14KaKYmKBIf6CKARnfx3JDX%2BJ61E4yuKKgAakGPQiZiRPkp5Kg23%2BuYHhQdJEgqpOVSkpUpqep3o4GvLaYWBGWqcczevhuewetP9diu6%2FjLFTcqtPVvd13r4Pze61KgKZaKqkN4kzqNsu9bftiLp%2BhMh2towZFMFiXBpfrJl4bUpqS6YUUzKZ1I3vZcBbK7z17MMpH22lioEQ8jbbFvf3dzKcdB4AVTPkOzKXGJhMVQEA8%2FqFyP4EpsI1xgt84YL5gx7tjrNz%2FOM%2B4YKgQFI81weYGlz2fBab3jP4gogdSgDcshuzt0RiFJQO724T1M7GAPZ0uFq7ltWRntpSX6fNjupBwIH2bvgmwJ2GpzjjSKytDcTaqFT6Sx7iMORdDkuje9QZeG5BlyaQ0dHSpSgH0Z78fd2Yi2h1cN7G33C%2BxTU2SGQvQpZymMTrNhaEbGz9VE%2FJmw9UES7VUcuKkricUzS6FqYh%2BpJyBKW2hl4y0REc%2FhPV2vPkAkTpLhklLeFyQpttKdtFB5j4H7p8gVViEMfqBAlmycYWB%2BhaLEEwoP%2FkwQY6pgGgR9JTfj9ugVYMVNxae2wiY5CC9gWiitOa6K76yrwNMpUe2WZm%2Fg%2Fu%2FsmbtxEJJToM%2FhdQCVKMYmqkW2iqo1VlzIjiZyi%2Bq0wrqRxrJjfSFLq0PU7DkIIcmbd7YkVsaHGzQ%2BhHrsYoxKI9WkDZLNMoW2AxYkHZmzqTCQa6AK1kTRM8aPmETJZXzzI4H7RXtFhUpKSeesEpeuBdFNlPyv0SJx5NFUSO&X-Amz-Signature=7dfbeeed8b1d9b27c7f8a959ad99ba1695e957f0753c83d4ecd3a933399a4091&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
