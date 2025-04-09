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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CYEG5P%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE5WtfGNVsAtfPe%2B27a7OFZPLTjI0TH%2F3WYq4R5KcitoAiEAynfXMgDfNcImUptYGS%2BA2cn4r5NAfuA7mY8paohViIMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvINXAlDQFDQps2mCrcA5aPHWCLPpdc1VY5G8%2BafbeWZYZXclUq1pYnSKgOgWrZGHnmmlCxU4HpSYWC4eXK1s3YdYjiIXgP0VWbiIc8Y7k9ImHt6RRhHJHEfI1ZLX%2FUCzzXgU99Kot0UM1F5qR8rXke5t2nqIyqEr2IQoZ%2BRweYaphsCdD7OMpU8EWz0Brobfmf521WvX3bUKMVYe%2BNJ3zQItlbenyDICkhR07BCVU2RUHRPP6cLTXx%2Fd%2ByiA0fp3kBzm7IXz7Y8A6GvgGq8f0njyMlDbEIUgsk4AFE4LKYobIwXDKeg%2BO8nOmBWsN8aq2BW9zyMhr5nhuZ83Jg%2FIllsr0ZI5C5rFMImD6uM07lZMfjlFahZGwbW%2FY0kJCjsYs9t8vEy3QaMuW4AaHL88%2F5MteCIsRF2RGwp4OSaUdxlekn7h2XQQT7wabdqulSvbocL9zGHQgYTQu11AINcj%2BqcSsrVcNWl35D9%2Bm2nVsfHQoZOok13oxyvKluYuKlce%2F3knpTG3CpcbF15n7wO4UKjx6VRjrFjjqS2N9Y31dEpya45Rboqc%2FU1cpTkhmAdm9ycWnu0wy9eOW%2FY3RQIM8BlkQxFIOnEfu%2BP3HD0AfHlFD1wfeK01k%2Bm7iAsM9rbxTOpcWbasWfj44uMOTl2b8GOqUBcSESIDh%2FykQAXwp0IPvet1BBns87IUWCfDrn7SwiT%2F2QOnIp0PGg07tf1focWDNHq5tU0aZMiikRLuYZNMGOWxpmNDj3%2FfhkAy5OiQdfAQ01acgW%2FOtUC2cTCso0jUpUGsEaqtQpyxsvoCe2GpnDxVv%2BTelSw5gvpmsibVJ9Owll4Y0kL2X4Gon4WR5SNuO1bXBQk%2BnOupKbx42n2nQL2nDQ9Uoz&X-Amz-Signature=86371d608ad05bba62044ae9d4054eb6d94dfe6a85cbe7cbc93e292d9a20a2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CYEG5P%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE5WtfGNVsAtfPe%2B27a7OFZPLTjI0TH%2F3WYq4R5KcitoAiEAynfXMgDfNcImUptYGS%2BA2cn4r5NAfuA7mY8paohViIMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvINXAlDQFDQps2mCrcA5aPHWCLPpdc1VY5G8%2BafbeWZYZXclUq1pYnSKgOgWrZGHnmmlCxU4HpSYWC4eXK1s3YdYjiIXgP0VWbiIc8Y7k9ImHt6RRhHJHEfI1ZLX%2FUCzzXgU99Kot0UM1F5qR8rXke5t2nqIyqEr2IQoZ%2BRweYaphsCdD7OMpU8EWz0Brobfmf521WvX3bUKMVYe%2BNJ3zQItlbenyDICkhR07BCVU2RUHRPP6cLTXx%2Fd%2ByiA0fp3kBzm7IXz7Y8A6GvgGq8f0njyMlDbEIUgsk4AFE4LKYobIwXDKeg%2BO8nOmBWsN8aq2BW9zyMhr5nhuZ83Jg%2FIllsr0ZI5C5rFMImD6uM07lZMfjlFahZGwbW%2FY0kJCjsYs9t8vEy3QaMuW4AaHL88%2F5MteCIsRF2RGwp4OSaUdxlekn7h2XQQT7wabdqulSvbocL9zGHQgYTQu11AINcj%2BqcSsrVcNWl35D9%2Bm2nVsfHQoZOok13oxyvKluYuKlce%2F3knpTG3CpcbF15n7wO4UKjx6VRjrFjjqS2N9Y31dEpya45Rboqc%2FU1cpTkhmAdm9ycWnu0wy9eOW%2FY3RQIM8BlkQxFIOnEfu%2BP3HD0AfHlFD1wfeK01k%2Bm7iAsM9rbxTOpcWbasWfj44uMOTl2b8GOqUBcSESIDh%2FykQAXwp0IPvet1BBns87IUWCfDrn7SwiT%2F2QOnIp0PGg07tf1focWDNHq5tU0aZMiikRLuYZNMGOWxpmNDj3%2FfhkAy5OiQdfAQ01acgW%2FOtUC2cTCso0jUpUGsEaqtQpyxsvoCe2GpnDxVv%2BTelSw5gvpmsibVJ9Owll4Y0kL2X4Gon4WR5SNuO1bXBQk%2BnOupKbx42n2nQL2nDQ9Uoz&X-Amz-Signature=12f44f941056963605b30ace6f82ec00dfdfea55056fc29bc49c93c2cb8b42a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CYEG5P%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE5WtfGNVsAtfPe%2B27a7OFZPLTjI0TH%2F3WYq4R5KcitoAiEAynfXMgDfNcImUptYGS%2BA2cn4r5NAfuA7mY8paohViIMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvINXAlDQFDQps2mCrcA5aPHWCLPpdc1VY5G8%2BafbeWZYZXclUq1pYnSKgOgWrZGHnmmlCxU4HpSYWC4eXK1s3YdYjiIXgP0VWbiIc8Y7k9ImHt6RRhHJHEfI1ZLX%2FUCzzXgU99Kot0UM1F5qR8rXke5t2nqIyqEr2IQoZ%2BRweYaphsCdD7OMpU8EWz0Brobfmf521WvX3bUKMVYe%2BNJ3zQItlbenyDICkhR07BCVU2RUHRPP6cLTXx%2Fd%2ByiA0fp3kBzm7IXz7Y8A6GvgGq8f0njyMlDbEIUgsk4AFE4LKYobIwXDKeg%2BO8nOmBWsN8aq2BW9zyMhr5nhuZ83Jg%2FIllsr0ZI5C5rFMImD6uM07lZMfjlFahZGwbW%2FY0kJCjsYs9t8vEy3QaMuW4AaHL88%2F5MteCIsRF2RGwp4OSaUdxlekn7h2XQQT7wabdqulSvbocL9zGHQgYTQu11AINcj%2BqcSsrVcNWl35D9%2Bm2nVsfHQoZOok13oxyvKluYuKlce%2F3knpTG3CpcbF15n7wO4UKjx6VRjrFjjqS2N9Y31dEpya45Rboqc%2FU1cpTkhmAdm9ycWnu0wy9eOW%2FY3RQIM8BlkQxFIOnEfu%2BP3HD0AfHlFD1wfeK01k%2Bm7iAsM9rbxTOpcWbasWfj44uMOTl2b8GOqUBcSESIDh%2FykQAXwp0IPvet1BBns87IUWCfDrn7SwiT%2F2QOnIp0PGg07tf1focWDNHq5tU0aZMiikRLuYZNMGOWxpmNDj3%2FfhkAy5OiQdfAQ01acgW%2FOtUC2cTCso0jUpUGsEaqtQpyxsvoCe2GpnDxVv%2BTelSw5gvpmsibVJ9Owll4Y0kL2X4Gon4WR5SNuO1bXBQk%2BnOupKbx42n2nQL2nDQ9Uoz&X-Amz-Signature=ad76f01aa2dff072fce91cdd7a7eb34399e19921cdcd38ecae12e545cd176ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CYEG5P%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE5WtfGNVsAtfPe%2B27a7OFZPLTjI0TH%2F3WYq4R5KcitoAiEAynfXMgDfNcImUptYGS%2BA2cn4r5NAfuA7mY8paohViIMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvINXAlDQFDQps2mCrcA5aPHWCLPpdc1VY5G8%2BafbeWZYZXclUq1pYnSKgOgWrZGHnmmlCxU4HpSYWC4eXK1s3YdYjiIXgP0VWbiIc8Y7k9ImHt6RRhHJHEfI1ZLX%2FUCzzXgU99Kot0UM1F5qR8rXke5t2nqIyqEr2IQoZ%2BRweYaphsCdD7OMpU8EWz0Brobfmf521WvX3bUKMVYe%2BNJ3zQItlbenyDICkhR07BCVU2RUHRPP6cLTXx%2Fd%2ByiA0fp3kBzm7IXz7Y8A6GvgGq8f0njyMlDbEIUgsk4AFE4LKYobIwXDKeg%2BO8nOmBWsN8aq2BW9zyMhr5nhuZ83Jg%2FIllsr0ZI5C5rFMImD6uM07lZMfjlFahZGwbW%2FY0kJCjsYs9t8vEy3QaMuW4AaHL88%2F5MteCIsRF2RGwp4OSaUdxlekn7h2XQQT7wabdqulSvbocL9zGHQgYTQu11AINcj%2BqcSsrVcNWl35D9%2Bm2nVsfHQoZOok13oxyvKluYuKlce%2F3knpTG3CpcbF15n7wO4UKjx6VRjrFjjqS2N9Y31dEpya45Rboqc%2FU1cpTkhmAdm9ycWnu0wy9eOW%2FY3RQIM8BlkQxFIOnEfu%2BP3HD0AfHlFD1wfeK01k%2Bm7iAsM9rbxTOpcWbasWfj44uMOTl2b8GOqUBcSESIDh%2FykQAXwp0IPvet1BBns87IUWCfDrn7SwiT%2F2QOnIp0PGg07tf1focWDNHq5tU0aZMiikRLuYZNMGOWxpmNDj3%2FfhkAy5OiQdfAQ01acgW%2FOtUC2cTCso0jUpUGsEaqtQpyxsvoCe2GpnDxVv%2BTelSw5gvpmsibVJ9Owll4Y0kL2X4Gon4WR5SNuO1bXBQk%2BnOupKbx42n2nQL2nDQ9Uoz&X-Amz-Signature=d13bf0502be4c9ded844c103844a6afd7b4690b04986853f343b1f88183586d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CYEG5P%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE5WtfGNVsAtfPe%2B27a7OFZPLTjI0TH%2F3WYq4R5KcitoAiEAynfXMgDfNcImUptYGS%2BA2cn4r5NAfuA7mY8paohViIMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvINXAlDQFDQps2mCrcA5aPHWCLPpdc1VY5G8%2BafbeWZYZXclUq1pYnSKgOgWrZGHnmmlCxU4HpSYWC4eXK1s3YdYjiIXgP0VWbiIc8Y7k9ImHt6RRhHJHEfI1ZLX%2FUCzzXgU99Kot0UM1F5qR8rXke5t2nqIyqEr2IQoZ%2BRweYaphsCdD7OMpU8EWz0Brobfmf521WvX3bUKMVYe%2BNJ3zQItlbenyDICkhR07BCVU2RUHRPP6cLTXx%2Fd%2ByiA0fp3kBzm7IXz7Y8A6GvgGq8f0njyMlDbEIUgsk4AFE4LKYobIwXDKeg%2BO8nOmBWsN8aq2BW9zyMhr5nhuZ83Jg%2FIllsr0ZI5C5rFMImD6uM07lZMfjlFahZGwbW%2FY0kJCjsYs9t8vEy3QaMuW4AaHL88%2F5MteCIsRF2RGwp4OSaUdxlekn7h2XQQT7wabdqulSvbocL9zGHQgYTQu11AINcj%2BqcSsrVcNWl35D9%2Bm2nVsfHQoZOok13oxyvKluYuKlce%2F3knpTG3CpcbF15n7wO4UKjx6VRjrFjjqS2N9Y31dEpya45Rboqc%2FU1cpTkhmAdm9ycWnu0wy9eOW%2FY3RQIM8BlkQxFIOnEfu%2BP3HD0AfHlFD1wfeK01k%2Bm7iAsM9rbxTOpcWbasWfj44uMOTl2b8GOqUBcSESIDh%2FykQAXwp0IPvet1BBns87IUWCfDrn7SwiT%2F2QOnIp0PGg07tf1focWDNHq5tU0aZMiikRLuYZNMGOWxpmNDj3%2FfhkAy5OiQdfAQ01acgW%2FOtUC2cTCso0jUpUGsEaqtQpyxsvoCe2GpnDxVv%2BTelSw5gvpmsibVJ9Owll4Y0kL2X4Gon4WR5SNuO1bXBQk%2BnOupKbx42n2nQL2nDQ9Uoz&X-Amz-Signature=b6a38720909413c74bd3604ca120c50bb809e3a45d21c63ec205a209a8326a22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CYEG5P%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE5WtfGNVsAtfPe%2B27a7OFZPLTjI0TH%2F3WYq4R5KcitoAiEAynfXMgDfNcImUptYGS%2BA2cn4r5NAfuA7mY8paohViIMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvINXAlDQFDQps2mCrcA5aPHWCLPpdc1VY5G8%2BafbeWZYZXclUq1pYnSKgOgWrZGHnmmlCxU4HpSYWC4eXK1s3YdYjiIXgP0VWbiIc8Y7k9ImHt6RRhHJHEfI1ZLX%2FUCzzXgU99Kot0UM1F5qR8rXke5t2nqIyqEr2IQoZ%2BRweYaphsCdD7OMpU8EWz0Brobfmf521WvX3bUKMVYe%2BNJ3zQItlbenyDICkhR07BCVU2RUHRPP6cLTXx%2Fd%2ByiA0fp3kBzm7IXz7Y8A6GvgGq8f0njyMlDbEIUgsk4AFE4LKYobIwXDKeg%2BO8nOmBWsN8aq2BW9zyMhr5nhuZ83Jg%2FIllsr0ZI5C5rFMImD6uM07lZMfjlFahZGwbW%2FY0kJCjsYs9t8vEy3QaMuW4AaHL88%2F5MteCIsRF2RGwp4OSaUdxlekn7h2XQQT7wabdqulSvbocL9zGHQgYTQu11AINcj%2BqcSsrVcNWl35D9%2Bm2nVsfHQoZOok13oxyvKluYuKlce%2F3knpTG3CpcbF15n7wO4UKjx6VRjrFjjqS2N9Y31dEpya45Rboqc%2FU1cpTkhmAdm9ycWnu0wy9eOW%2FY3RQIM8BlkQxFIOnEfu%2BP3HD0AfHlFD1wfeK01k%2Bm7iAsM9rbxTOpcWbasWfj44uMOTl2b8GOqUBcSESIDh%2FykQAXwp0IPvet1BBns87IUWCfDrn7SwiT%2F2QOnIp0PGg07tf1focWDNHq5tU0aZMiikRLuYZNMGOWxpmNDj3%2FfhkAy5OiQdfAQ01acgW%2FOtUC2cTCso0jUpUGsEaqtQpyxsvoCe2GpnDxVv%2BTelSw5gvpmsibVJ9Owll4Y0kL2X4Gon4WR5SNuO1bXBQk%2BnOupKbx42n2nQL2nDQ9Uoz&X-Amz-Signature=5bdaa702cacdd628feea9729e10d023f2e1ae2fe7a50ec5826bff4b2ee8eafea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CYEG5P%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE5WtfGNVsAtfPe%2B27a7OFZPLTjI0TH%2F3WYq4R5KcitoAiEAynfXMgDfNcImUptYGS%2BA2cn4r5NAfuA7mY8paohViIMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvINXAlDQFDQps2mCrcA5aPHWCLPpdc1VY5G8%2BafbeWZYZXclUq1pYnSKgOgWrZGHnmmlCxU4HpSYWC4eXK1s3YdYjiIXgP0VWbiIc8Y7k9ImHt6RRhHJHEfI1ZLX%2FUCzzXgU99Kot0UM1F5qR8rXke5t2nqIyqEr2IQoZ%2BRweYaphsCdD7OMpU8EWz0Brobfmf521WvX3bUKMVYe%2BNJ3zQItlbenyDICkhR07BCVU2RUHRPP6cLTXx%2Fd%2ByiA0fp3kBzm7IXz7Y8A6GvgGq8f0njyMlDbEIUgsk4AFE4LKYobIwXDKeg%2BO8nOmBWsN8aq2BW9zyMhr5nhuZ83Jg%2FIllsr0ZI5C5rFMImD6uM07lZMfjlFahZGwbW%2FY0kJCjsYs9t8vEy3QaMuW4AaHL88%2F5MteCIsRF2RGwp4OSaUdxlekn7h2XQQT7wabdqulSvbocL9zGHQgYTQu11AINcj%2BqcSsrVcNWl35D9%2Bm2nVsfHQoZOok13oxyvKluYuKlce%2F3knpTG3CpcbF15n7wO4UKjx6VRjrFjjqS2N9Y31dEpya45Rboqc%2FU1cpTkhmAdm9ycWnu0wy9eOW%2FY3RQIM8BlkQxFIOnEfu%2BP3HD0AfHlFD1wfeK01k%2Bm7iAsM9rbxTOpcWbasWfj44uMOTl2b8GOqUBcSESIDh%2FykQAXwp0IPvet1BBns87IUWCfDrn7SwiT%2F2QOnIp0PGg07tf1focWDNHq5tU0aZMiikRLuYZNMGOWxpmNDj3%2FfhkAy5OiQdfAQ01acgW%2FOtUC2cTCso0jUpUGsEaqtQpyxsvoCe2GpnDxVv%2BTelSw5gvpmsibVJ9Owll4Y0kL2X4Gon4WR5SNuO1bXBQk%2BnOupKbx42n2nQL2nDQ9Uoz&X-Amz-Signature=e5b45ca314a4c88e210e58667eae09c13edda92b7dfd9b86334bc032f35b8c77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CYEG5P%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIE5WtfGNVsAtfPe%2B27a7OFZPLTjI0TH%2F3WYq4R5KcitoAiEAynfXMgDfNcImUptYGS%2BA2cn4r5NAfuA7mY8paohViIMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvINXAlDQFDQps2mCrcA5aPHWCLPpdc1VY5G8%2BafbeWZYZXclUq1pYnSKgOgWrZGHnmmlCxU4HpSYWC4eXK1s3YdYjiIXgP0VWbiIc8Y7k9ImHt6RRhHJHEfI1ZLX%2FUCzzXgU99Kot0UM1F5qR8rXke5t2nqIyqEr2IQoZ%2BRweYaphsCdD7OMpU8EWz0Brobfmf521WvX3bUKMVYe%2BNJ3zQItlbenyDICkhR07BCVU2RUHRPP6cLTXx%2Fd%2ByiA0fp3kBzm7IXz7Y8A6GvgGq8f0njyMlDbEIUgsk4AFE4LKYobIwXDKeg%2BO8nOmBWsN8aq2BW9zyMhr5nhuZ83Jg%2FIllsr0ZI5C5rFMImD6uM07lZMfjlFahZGwbW%2FY0kJCjsYs9t8vEy3QaMuW4AaHL88%2F5MteCIsRF2RGwp4OSaUdxlekn7h2XQQT7wabdqulSvbocL9zGHQgYTQu11AINcj%2BqcSsrVcNWl35D9%2Bm2nVsfHQoZOok13oxyvKluYuKlce%2F3knpTG3CpcbF15n7wO4UKjx6VRjrFjjqS2N9Y31dEpya45Rboqc%2FU1cpTkhmAdm9ycWnu0wy9eOW%2FY3RQIM8BlkQxFIOnEfu%2BP3HD0AfHlFD1wfeK01k%2Bm7iAsM9rbxTOpcWbasWfj44uMOTl2b8GOqUBcSESIDh%2FykQAXwp0IPvet1BBns87IUWCfDrn7SwiT%2F2QOnIp0PGg07tf1focWDNHq5tU0aZMiikRLuYZNMGOWxpmNDj3%2FfhkAy5OiQdfAQ01acgW%2FOtUC2cTCso0jUpUGsEaqtQpyxsvoCe2GpnDxVv%2BTelSw5gvpmsibVJ9Owll4Y0kL2X4Gon4WR5SNuO1bXBQk%2BnOupKbx42n2nQL2nDQ9Uoz&X-Amz-Signature=ccf4838ed8d3e4748c964c06b3d846f979441b6992c138893064f690af98f026&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
