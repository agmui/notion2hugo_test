---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFI2XBN%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRt2Mm8%2BCtGcl5dCUJl%2FWR7NbFf40qPXyFKH95GicXAIhALdymkcEM4za8spLTBfkoYfni%2B%2BCyDTuJ7vYNv6ptOiSKv8DCH4QABoMNjM3NDIzMTgzODA1Igw%2Fha2RpYOFV7PD%2BfIq3AOnIGgj7syt8Wbm%2BgeQuMfgAWJTyMty2E5v3yid53CfYdQaVj4mWs49rcIVVnki%2Fm9xT%2F3zuP4PLB%2FYFFlVmbbydQQJAaZrSrmi68ISOIslasJwsI%2BtBPapqh8sQ3VvDP5kzMzCgmxk3aCxUquKCNYAKpDly4Qwi5mJEgAr9H45Z4u4w6sZVkJEX594P%2BPB%2Fa7zjTlJWCT2IIRgCWJOQAQvOPlAYIGoDSbD0iB3AfQxNWnrE6K0irhuyAvvBbIzEpKn9Tii8KPCg7TmQs7TarQPWTTK2R%2Fu%2BJunT3P7PYPl4WU1Pzb4uggWhog3PdaK4Ayunem99IW8ptk3Ghy3KURoxGku73lLIq45k1qMCcL8Eg5Pphqm%2F3gIkv%2BGy%2B18AOWoBPJ2Xa0KqD0nEp7hOcVDEDBhvnNRWvONAjmQvDOYSVUu06A1CWx2e4bvuIRBnkQaGBlOi%2F%2BP9TvSG4QbXh7yxuN6st4MUL1XX9cg%2B7%2Fy0dXSb%2FinUgJWn65dwtKMXKvSrC2d3OYNATklB22NhAa9TxZnglcsXlSsiHC3XWCYTypeJiNYxVMYrKkS6af8EXr0ZY5wPvEi%2BlJICp4WYBybfqlET41iZKwszCTo%2Fkc6XGN%2BQ9midJmaYYfWpzC53anIBjqkAX%2F2%2BSgTnfkypRiIB0mnJ6rO0HyJC3%2Ff%2B1ZOdGL3XrawakVyyEqFWstlW%2FeCRBbshithPMfimX36uaygenKJfsWpDWWQ75402IjCkfp7Lv7mUzob8IZK%2FvEoG3jItiDjJkOe7TxGW0f0Hs8k4YKWpN0WZpGtj2YrOJPlMupTFGUb6CHafBwN0t4t9IAxJP6F%2B8ARa8CJl2dcFm7FQ8xLjjCbUj8v&X-Amz-Signature=57e0180cf43f1c2a8e93e46645c83d5722bedb2a820a7d72e6711cb11cd8a4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFI2XBN%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRt2Mm8%2BCtGcl5dCUJl%2FWR7NbFf40qPXyFKH95GicXAIhALdymkcEM4za8spLTBfkoYfni%2B%2BCyDTuJ7vYNv6ptOiSKv8DCH4QABoMNjM3NDIzMTgzODA1Igw%2Fha2RpYOFV7PD%2BfIq3AOnIGgj7syt8Wbm%2BgeQuMfgAWJTyMty2E5v3yid53CfYdQaVj4mWs49rcIVVnki%2Fm9xT%2F3zuP4PLB%2FYFFlVmbbydQQJAaZrSrmi68ISOIslasJwsI%2BtBPapqh8sQ3VvDP5kzMzCgmxk3aCxUquKCNYAKpDly4Qwi5mJEgAr9H45Z4u4w6sZVkJEX594P%2BPB%2Fa7zjTlJWCT2IIRgCWJOQAQvOPlAYIGoDSbD0iB3AfQxNWnrE6K0irhuyAvvBbIzEpKn9Tii8KPCg7TmQs7TarQPWTTK2R%2Fu%2BJunT3P7PYPl4WU1Pzb4uggWhog3PdaK4Ayunem99IW8ptk3Ghy3KURoxGku73lLIq45k1qMCcL8Eg5Pphqm%2F3gIkv%2BGy%2B18AOWoBPJ2Xa0KqD0nEp7hOcVDEDBhvnNRWvONAjmQvDOYSVUu06A1CWx2e4bvuIRBnkQaGBlOi%2F%2BP9TvSG4QbXh7yxuN6st4MUL1XX9cg%2B7%2Fy0dXSb%2FinUgJWn65dwtKMXKvSrC2d3OYNATklB22NhAa9TxZnglcsXlSsiHC3XWCYTypeJiNYxVMYrKkS6af8EXr0ZY5wPvEi%2BlJICp4WYBybfqlET41iZKwszCTo%2Fkc6XGN%2BQ9midJmaYYfWpzC53anIBjqkAX%2F2%2BSgTnfkypRiIB0mnJ6rO0HyJC3%2Ff%2B1ZOdGL3XrawakVyyEqFWstlW%2FeCRBbshithPMfimX36uaygenKJfsWpDWWQ75402IjCkfp7Lv7mUzob8IZK%2FvEoG3jItiDjJkOe7TxGW0f0Hs8k4YKWpN0WZpGtj2YrOJPlMupTFGUb6CHafBwN0t4t9IAxJP6F%2B8ARa8CJl2dcFm7FQ8xLjjCbUj8v&X-Amz-Signature=55e1b57629908f732e7e50e5ba87830629ac4c7efba5e9ba1dad9a643596a8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFI2XBN%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRt2Mm8%2BCtGcl5dCUJl%2FWR7NbFf40qPXyFKH95GicXAIhALdymkcEM4za8spLTBfkoYfni%2B%2BCyDTuJ7vYNv6ptOiSKv8DCH4QABoMNjM3NDIzMTgzODA1Igw%2Fha2RpYOFV7PD%2BfIq3AOnIGgj7syt8Wbm%2BgeQuMfgAWJTyMty2E5v3yid53CfYdQaVj4mWs49rcIVVnki%2Fm9xT%2F3zuP4PLB%2FYFFlVmbbydQQJAaZrSrmi68ISOIslasJwsI%2BtBPapqh8sQ3VvDP5kzMzCgmxk3aCxUquKCNYAKpDly4Qwi5mJEgAr9H45Z4u4w6sZVkJEX594P%2BPB%2Fa7zjTlJWCT2IIRgCWJOQAQvOPlAYIGoDSbD0iB3AfQxNWnrE6K0irhuyAvvBbIzEpKn9Tii8KPCg7TmQs7TarQPWTTK2R%2Fu%2BJunT3P7PYPl4WU1Pzb4uggWhog3PdaK4Ayunem99IW8ptk3Ghy3KURoxGku73lLIq45k1qMCcL8Eg5Pphqm%2F3gIkv%2BGy%2B18AOWoBPJ2Xa0KqD0nEp7hOcVDEDBhvnNRWvONAjmQvDOYSVUu06A1CWx2e4bvuIRBnkQaGBlOi%2F%2BP9TvSG4QbXh7yxuN6st4MUL1XX9cg%2B7%2Fy0dXSb%2FinUgJWn65dwtKMXKvSrC2d3OYNATklB22NhAa9TxZnglcsXlSsiHC3XWCYTypeJiNYxVMYrKkS6af8EXr0ZY5wPvEi%2BlJICp4WYBybfqlET41iZKwszCTo%2Fkc6XGN%2BQ9midJmaYYfWpzC53anIBjqkAX%2F2%2BSgTnfkypRiIB0mnJ6rO0HyJC3%2Ff%2B1ZOdGL3XrawakVyyEqFWstlW%2FeCRBbshithPMfimX36uaygenKJfsWpDWWQ75402IjCkfp7Lv7mUzob8IZK%2FvEoG3jItiDjJkOe7TxGW0f0Hs8k4YKWpN0WZpGtj2YrOJPlMupTFGUb6CHafBwN0t4t9IAxJP6F%2B8ARa8CJl2dcFm7FQ8xLjjCbUj8v&X-Amz-Signature=de6012cc5cd7638eb16f62ea5c3b53662d01502f26e90f767c5b1509fc967a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFI2XBN%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRt2Mm8%2BCtGcl5dCUJl%2FWR7NbFf40qPXyFKH95GicXAIhALdymkcEM4za8spLTBfkoYfni%2B%2BCyDTuJ7vYNv6ptOiSKv8DCH4QABoMNjM3NDIzMTgzODA1Igw%2Fha2RpYOFV7PD%2BfIq3AOnIGgj7syt8Wbm%2BgeQuMfgAWJTyMty2E5v3yid53CfYdQaVj4mWs49rcIVVnki%2Fm9xT%2F3zuP4PLB%2FYFFlVmbbydQQJAaZrSrmi68ISOIslasJwsI%2BtBPapqh8sQ3VvDP5kzMzCgmxk3aCxUquKCNYAKpDly4Qwi5mJEgAr9H45Z4u4w6sZVkJEX594P%2BPB%2Fa7zjTlJWCT2IIRgCWJOQAQvOPlAYIGoDSbD0iB3AfQxNWnrE6K0irhuyAvvBbIzEpKn9Tii8KPCg7TmQs7TarQPWTTK2R%2Fu%2BJunT3P7PYPl4WU1Pzb4uggWhog3PdaK4Ayunem99IW8ptk3Ghy3KURoxGku73lLIq45k1qMCcL8Eg5Pphqm%2F3gIkv%2BGy%2B18AOWoBPJ2Xa0KqD0nEp7hOcVDEDBhvnNRWvONAjmQvDOYSVUu06A1CWx2e4bvuIRBnkQaGBlOi%2F%2BP9TvSG4QbXh7yxuN6st4MUL1XX9cg%2B7%2Fy0dXSb%2FinUgJWn65dwtKMXKvSrC2d3OYNATklB22NhAa9TxZnglcsXlSsiHC3XWCYTypeJiNYxVMYrKkS6af8EXr0ZY5wPvEi%2BlJICp4WYBybfqlET41iZKwszCTo%2Fkc6XGN%2BQ9midJmaYYfWpzC53anIBjqkAX%2F2%2BSgTnfkypRiIB0mnJ6rO0HyJC3%2Ff%2B1ZOdGL3XrawakVyyEqFWstlW%2FeCRBbshithPMfimX36uaygenKJfsWpDWWQ75402IjCkfp7Lv7mUzob8IZK%2FvEoG3jItiDjJkOe7TxGW0f0Hs8k4YKWpN0WZpGtj2YrOJPlMupTFGUb6CHafBwN0t4t9IAxJP6F%2B8ARa8CJl2dcFm7FQ8xLjjCbUj8v&X-Amz-Signature=c40139f37cdecef90a847ac550ef57c5d086378d6cfc8dc118c235bbaa13b786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFI2XBN%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRt2Mm8%2BCtGcl5dCUJl%2FWR7NbFf40qPXyFKH95GicXAIhALdymkcEM4za8spLTBfkoYfni%2B%2BCyDTuJ7vYNv6ptOiSKv8DCH4QABoMNjM3NDIzMTgzODA1Igw%2Fha2RpYOFV7PD%2BfIq3AOnIGgj7syt8Wbm%2BgeQuMfgAWJTyMty2E5v3yid53CfYdQaVj4mWs49rcIVVnki%2Fm9xT%2F3zuP4PLB%2FYFFlVmbbydQQJAaZrSrmi68ISOIslasJwsI%2BtBPapqh8sQ3VvDP5kzMzCgmxk3aCxUquKCNYAKpDly4Qwi5mJEgAr9H45Z4u4w6sZVkJEX594P%2BPB%2Fa7zjTlJWCT2IIRgCWJOQAQvOPlAYIGoDSbD0iB3AfQxNWnrE6K0irhuyAvvBbIzEpKn9Tii8KPCg7TmQs7TarQPWTTK2R%2Fu%2BJunT3P7PYPl4WU1Pzb4uggWhog3PdaK4Ayunem99IW8ptk3Ghy3KURoxGku73lLIq45k1qMCcL8Eg5Pphqm%2F3gIkv%2BGy%2B18AOWoBPJ2Xa0KqD0nEp7hOcVDEDBhvnNRWvONAjmQvDOYSVUu06A1CWx2e4bvuIRBnkQaGBlOi%2F%2BP9TvSG4QbXh7yxuN6st4MUL1XX9cg%2B7%2Fy0dXSb%2FinUgJWn65dwtKMXKvSrC2d3OYNATklB22NhAa9TxZnglcsXlSsiHC3XWCYTypeJiNYxVMYrKkS6af8EXr0ZY5wPvEi%2BlJICp4WYBybfqlET41iZKwszCTo%2Fkc6XGN%2BQ9midJmaYYfWpzC53anIBjqkAX%2F2%2BSgTnfkypRiIB0mnJ6rO0HyJC3%2Ff%2B1ZOdGL3XrawakVyyEqFWstlW%2FeCRBbshithPMfimX36uaygenKJfsWpDWWQ75402IjCkfp7Lv7mUzob8IZK%2FvEoG3jItiDjJkOe7TxGW0f0Hs8k4YKWpN0WZpGtj2YrOJPlMupTFGUb6CHafBwN0t4t9IAxJP6F%2B8ARa8CJl2dcFm7FQ8xLjjCbUj8v&X-Amz-Signature=31b69e12f0eb57e2082fb88b7994283e95609ec4c685d445c0db4a58584f76d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFI2XBN%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRt2Mm8%2BCtGcl5dCUJl%2FWR7NbFf40qPXyFKH95GicXAIhALdymkcEM4za8spLTBfkoYfni%2B%2BCyDTuJ7vYNv6ptOiSKv8DCH4QABoMNjM3NDIzMTgzODA1Igw%2Fha2RpYOFV7PD%2BfIq3AOnIGgj7syt8Wbm%2BgeQuMfgAWJTyMty2E5v3yid53CfYdQaVj4mWs49rcIVVnki%2Fm9xT%2F3zuP4PLB%2FYFFlVmbbydQQJAaZrSrmi68ISOIslasJwsI%2BtBPapqh8sQ3VvDP5kzMzCgmxk3aCxUquKCNYAKpDly4Qwi5mJEgAr9H45Z4u4w6sZVkJEX594P%2BPB%2Fa7zjTlJWCT2IIRgCWJOQAQvOPlAYIGoDSbD0iB3AfQxNWnrE6K0irhuyAvvBbIzEpKn9Tii8KPCg7TmQs7TarQPWTTK2R%2Fu%2BJunT3P7PYPl4WU1Pzb4uggWhog3PdaK4Ayunem99IW8ptk3Ghy3KURoxGku73lLIq45k1qMCcL8Eg5Pphqm%2F3gIkv%2BGy%2B18AOWoBPJ2Xa0KqD0nEp7hOcVDEDBhvnNRWvONAjmQvDOYSVUu06A1CWx2e4bvuIRBnkQaGBlOi%2F%2BP9TvSG4QbXh7yxuN6st4MUL1XX9cg%2B7%2Fy0dXSb%2FinUgJWn65dwtKMXKvSrC2d3OYNATklB22NhAa9TxZnglcsXlSsiHC3XWCYTypeJiNYxVMYrKkS6af8EXr0ZY5wPvEi%2BlJICp4WYBybfqlET41iZKwszCTo%2Fkc6XGN%2BQ9midJmaYYfWpzC53anIBjqkAX%2F2%2BSgTnfkypRiIB0mnJ6rO0HyJC3%2Ff%2B1ZOdGL3XrawakVyyEqFWstlW%2FeCRBbshithPMfimX36uaygenKJfsWpDWWQ75402IjCkfp7Lv7mUzob8IZK%2FvEoG3jItiDjJkOe7TxGW0f0Hs8k4YKWpN0WZpGtj2YrOJPlMupTFGUb6CHafBwN0t4t9IAxJP6F%2B8ARa8CJl2dcFm7FQ8xLjjCbUj8v&X-Amz-Signature=f95915f2dfb18adaf5aaa47a594d50ea6946e09ce23ba73a71a2352f19c977d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFI2XBN%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRt2Mm8%2BCtGcl5dCUJl%2FWR7NbFf40qPXyFKH95GicXAIhALdymkcEM4za8spLTBfkoYfni%2B%2BCyDTuJ7vYNv6ptOiSKv8DCH4QABoMNjM3NDIzMTgzODA1Igw%2Fha2RpYOFV7PD%2BfIq3AOnIGgj7syt8Wbm%2BgeQuMfgAWJTyMty2E5v3yid53CfYdQaVj4mWs49rcIVVnki%2Fm9xT%2F3zuP4PLB%2FYFFlVmbbydQQJAaZrSrmi68ISOIslasJwsI%2BtBPapqh8sQ3VvDP5kzMzCgmxk3aCxUquKCNYAKpDly4Qwi5mJEgAr9H45Z4u4w6sZVkJEX594P%2BPB%2Fa7zjTlJWCT2IIRgCWJOQAQvOPlAYIGoDSbD0iB3AfQxNWnrE6K0irhuyAvvBbIzEpKn9Tii8KPCg7TmQs7TarQPWTTK2R%2Fu%2BJunT3P7PYPl4WU1Pzb4uggWhog3PdaK4Ayunem99IW8ptk3Ghy3KURoxGku73lLIq45k1qMCcL8Eg5Pphqm%2F3gIkv%2BGy%2B18AOWoBPJ2Xa0KqD0nEp7hOcVDEDBhvnNRWvONAjmQvDOYSVUu06A1CWx2e4bvuIRBnkQaGBlOi%2F%2BP9TvSG4QbXh7yxuN6st4MUL1XX9cg%2B7%2Fy0dXSb%2FinUgJWn65dwtKMXKvSrC2d3OYNATklB22NhAa9TxZnglcsXlSsiHC3XWCYTypeJiNYxVMYrKkS6af8EXr0ZY5wPvEi%2BlJICp4WYBybfqlET41iZKwszCTo%2Fkc6XGN%2BQ9midJmaYYfWpzC53anIBjqkAX%2F2%2BSgTnfkypRiIB0mnJ6rO0HyJC3%2Ff%2B1ZOdGL3XrawakVyyEqFWstlW%2FeCRBbshithPMfimX36uaygenKJfsWpDWWQ75402IjCkfp7Lv7mUzob8IZK%2FvEoG3jItiDjJkOe7TxGW0f0Hs8k4YKWpN0WZpGtj2YrOJPlMupTFGUb6CHafBwN0t4t9IAxJP6F%2B8ARa8CJl2dcFm7FQ8xLjjCbUj8v&X-Amz-Signature=995aa3015e53fd28f6b640ed2772efd8252ce66197c4b96e012b44e22c731b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFI2XBN%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDRt2Mm8%2BCtGcl5dCUJl%2FWR7NbFf40qPXyFKH95GicXAIhALdymkcEM4za8spLTBfkoYfni%2B%2BCyDTuJ7vYNv6ptOiSKv8DCH4QABoMNjM3NDIzMTgzODA1Igw%2Fha2RpYOFV7PD%2BfIq3AOnIGgj7syt8Wbm%2BgeQuMfgAWJTyMty2E5v3yid53CfYdQaVj4mWs49rcIVVnki%2Fm9xT%2F3zuP4PLB%2FYFFlVmbbydQQJAaZrSrmi68ISOIslasJwsI%2BtBPapqh8sQ3VvDP5kzMzCgmxk3aCxUquKCNYAKpDly4Qwi5mJEgAr9H45Z4u4w6sZVkJEX594P%2BPB%2Fa7zjTlJWCT2IIRgCWJOQAQvOPlAYIGoDSbD0iB3AfQxNWnrE6K0irhuyAvvBbIzEpKn9Tii8KPCg7TmQs7TarQPWTTK2R%2Fu%2BJunT3P7PYPl4WU1Pzb4uggWhog3PdaK4Ayunem99IW8ptk3Ghy3KURoxGku73lLIq45k1qMCcL8Eg5Pphqm%2F3gIkv%2BGy%2B18AOWoBPJ2Xa0KqD0nEp7hOcVDEDBhvnNRWvONAjmQvDOYSVUu06A1CWx2e4bvuIRBnkQaGBlOi%2F%2BP9TvSG4QbXh7yxuN6st4MUL1XX9cg%2B7%2Fy0dXSb%2FinUgJWn65dwtKMXKvSrC2d3OYNATklB22NhAa9TxZnglcsXlSsiHC3XWCYTypeJiNYxVMYrKkS6af8EXr0ZY5wPvEi%2BlJICp4WYBybfqlET41iZKwszCTo%2Fkc6XGN%2BQ9midJmaYYfWpzC53anIBjqkAX%2F2%2BSgTnfkypRiIB0mnJ6rO0HyJC3%2Ff%2B1ZOdGL3XrawakVyyEqFWstlW%2FeCRBbshithPMfimX36uaygenKJfsWpDWWQ75402IjCkfp7Lv7mUzob8IZK%2FvEoG3jItiDjJkOe7TxGW0f0Hs8k4YKWpN0WZpGtj2YrOJPlMupTFGUb6CHafBwN0t4t9IAxJP6F%2B8ARa8CJl2dcFm7FQ8xLjjCbUj8v&X-Amz-Signature=a80d98160e62067dfcbbbcdc60420535dec8ba1da1216af32bd1f1ebf0d381d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
