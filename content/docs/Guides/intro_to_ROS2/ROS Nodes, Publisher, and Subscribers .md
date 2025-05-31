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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHTQM3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlCS7JNowt0scpcI2cTbyfcKD8Kj6d96UjKmUMgPLO2gIhANnEJh1MbiWt1zmXxcYqvsWfGn90PEskSRu%2FS27aBLoLKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcaO19U2N5CLyc6%2Fgq3APCYExJ%2FrJuG6A0NsypCwaH2a%2B1ERnkfisfGpdZ7bl28xq1yG2EwKPZrhQ0Cd8D6EBb2nwpIZ67ubaOdXA%2FI9EVb0BaUxiIcO3v3HGumaWEkz2Wf2zRQDkHF%2BMw9hBH1ZVkKDusB16djxDrhcJUQeGifYjxjxYh8Fn3VsxudUIhNU0CgQlHVxv5t1HYcJVbcQR6mKJq%2FNbMAWC9LlypqnM5qynEE%2FF9JSXXHkxBZa15Ka%2FPj6s4pWVU80GxI3xFu%2Fv%2FomXg1nCGI7dKbXtdiVd7jf4nn3vA4AWouX5jYu5t5pJBPczwgUoobzobDclUF8XxMmBZVk0DhdeCH8SHvF3M5LuqMSUkfL1s9LlIhkvcRl2SDQaA2CYC2Rf1kGUTOA9f4eozqa7Nbk78FPPyqAyD8uJNFVTpNzdHEljjQo7OUn7zoq4nq4Z6yS25eWHI1UZhE3LfUaDH0WcQPUlhK%2Fr5UORpBw4RoDqMhuQw27DcJMRXKf%2B5oppuZRU17NbYCf7he5LaFLBhGtrtGmsaodwA3Q5f8sm2t2PWD0Z2OcahsqWwatLd4aC2%2FXqyf%2Fb4MBDvw6QnpOqeAFkg6lQJZlSukvvUgUyBLhmTDqy5WlMg8fNuPIySmoYtNIWxcjCqiOzBBjqkAQ5KfS%2F4YN7WoelP%2F3qclKmQOjx0lVirPPmFfHMp77HCF%2FDpgac%2BWCRxVxAHmq%2FpU5mM4XDgIrf7A7sRB4p6nh%2BzFX5UbMR%2BiKXPfjqpwgpJQgaqCDGjTZJVa%2Bzqn4FWsgVS4mxmM3e3q4MGCED4JtyrUvry1eZkmpGzx8vguoKwGVT1LvO9ujFhj2SiBHuXcxB7XJ2U4n%2BkbwfQ2CctQ933KoXb&X-Amz-Signature=91138a11315ab13524678e79dec81be5d7a68b88c4d945d8e437d2557b4107a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHTQM3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlCS7JNowt0scpcI2cTbyfcKD8Kj6d96UjKmUMgPLO2gIhANnEJh1MbiWt1zmXxcYqvsWfGn90PEskSRu%2FS27aBLoLKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcaO19U2N5CLyc6%2Fgq3APCYExJ%2FrJuG6A0NsypCwaH2a%2B1ERnkfisfGpdZ7bl28xq1yG2EwKPZrhQ0Cd8D6EBb2nwpIZ67ubaOdXA%2FI9EVb0BaUxiIcO3v3HGumaWEkz2Wf2zRQDkHF%2BMw9hBH1ZVkKDusB16djxDrhcJUQeGifYjxjxYh8Fn3VsxudUIhNU0CgQlHVxv5t1HYcJVbcQR6mKJq%2FNbMAWC9LlypqnM5qynEE%2FF9JSXXHkxBZa15Ka%2FPj6s4pWVU80GxI3xFu%2Fv%2FomXg1nCGI7dKbXtdiVd7jf4nn3vA4AWouX5jYu5t5pJBPczwgUoobzobDclUF8XxMmBZVk0DhdeCH8SHvF3M5LuqMSUkfL1s9LlIhkvcRl2SDQaA2CYC2Rf1kGUTOA9f4eozqa7Nbk78FPPyqAyD8uJNFVTpNzdHEljjQo7OUn7zoq4nq4Z6yS25eWHI1UZhE3LfUaDH0WcQPUlhK%2Fr5UORpBw4RoDqMhuQw27DcJMRXKf%2B5oppuZRU17NbYCf7he5LaFLBhGtrtGmsaodwA3Q5f8sm2t2PWD0Z2OcahsqWwatLd4aC2%2FXqyf%2Fb4MBDvw6QnpOqeAFkg6lQJZlSukvvUgUyBLhmTDqy5WlMg8fNuPIySmoYtNIWxcjCqiOzBBjqkAQ5KfS%2F4YN7WoelP%2F3qclKmQOjx0lVirPPmFfHMp77HCF%2FDpgac%2BWCRxVxAHmq%2FpU5mM4XDgIrf7A7sRB4p6nh%2BzFX5UbMR%2BiKXPfjqpwgpJQgaqCDGjTZJVa%2Bzqn4FWsgVS4mxmM3e3q4MGCED4JtyrUvry1eZkmpGzx8vguoKwGVT1LvO9ujFhj2SiBHuXcxB7XJ2U4n%2BkbwfQ2CctQ933KoXb&X-Amz-Signature=f750ab3f6d9b2a878915dfe411efc482efdc16bc9edca1986e21e350a5891669&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHTQM3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlCS7JNowt0scpcI2cTbyfcKD8Kj6d96UjKmUMgPLO2gIhANnEJh1MbiWt1zmXxcYqvsWfGn90PEskSRu%2FS27aBLoLKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcaO19U2N5CLyc6%2Fgq3APCYExJ%2FrJuG6A0NsypCwaH2a%2B1ERnkfisfGpdZ7bl28xq1yG2EwKPZrhQ0Cd8D6EBb2nwpIZ67ubaOdXA%2FI9EVb0BaUxiIcO3v3HGumaWEkz2Wf2zRQDkHF%2BMw9hBH1ZVkKDusB16djxDrhcJUQeGifYjxjxYh8Fn3VsxudUIhNU0CgQlHVxv5t1HYcJVbcQR6mKJq%2FNbMAWC9LlypqnM5qynEE%2FF9JSXXHkxBZa15Ka%2FPj6s4pWVU80GxI3xFu%2Fv%2FomXg1nCGI7dKbXtdiVd7jf4nn3vA4AWouX5jYu5t5pJBPczwgUoobzobDclUF8XxMmBZVk0DhdeCH8SHvF3M5LuqMSUkfL1s9LlIhkvcRl2SDQaA2CYC2Rf1kGUTOA9f4eozqa7Nbk78FPPyqAyD8uJNFVTpNzdHEljjQo7OUn7zoq4nq4Z6yS25eWHI1UZhE3LfUaDH0WcQPUlhK%2Fr5UORpBw4RoDqMhuQw27DcJMRXKf%2B5oppuZRU17NbYCf7he5LaFLBhGtrtGmsaodwA3Q5f8sm2t2PWD0Z2OcahsqWwatLd4aC2%2FXqyf%2Fb4MBDvw6QnpOqeAFkg6lQJZlSukvvUgUyBLhmTDqy5WlMg8fNuPIySmoYtNIWxcjCqiOzBBjqkAQ5KfS%2F4YN7WoelP%2F3qclKmQOjx0lVirPPmFfHMp77HCF%2FDpgac%2BWCRxVxAHmq%2FpU5mM4XDgIrf7A7sRB4p6nh%2BzFX5UbMR%2BiKXPfjqpwgpJQgaqCDGjTZJVa%2Bzqn4FWsgVS4mxmM3e3q4MGCED4JtyrUvry1eZkmpGzx8vguoKwGVT1LvO9ujFhj2SiBHuXcxB7XJ2U4n%2BkbwfQ2CctQ933KoXb&X-Amz-Signature=4f933e3acc2a074d927812e1c3199bcb0e865034b7cba13cff16fb6c34db5fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHTQM3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlCS7JNowt0scpcI2cTbyfcKD8Kj6d96UjKmUMgPLO2gIhANnEJh1MbiWt1zmXxcYqvsWfGn90PEskSRu%2FS27aBLoLKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcaO19U2N5CLyc6%2Fgq3APCYExJ%2FrJuG6A0NsypCwaH2a%2B1ERnkfisfGpdZ7bl28xq1yG2EwKPZrhQ0Cd8D6EBb2nwpIZ67ubaOdXA%2FI9EVb0BaUxiIcO3v3HGumaWEkz2Wf2zRQDkHF%2BMw9hBH1ZVkKDusB16djxDrhcJUQeGifYjxjxYh8Fn3VsxudUIhNU0CgQlHVxv5t1HYcJVbcQR6mKJq%2FNbMAWC9LlypqnM5qynEE%2FF9JSXXHkxBZa15Ka%2FPj6s4pWVU80GxI3xFu%2Fv%2FomXg1nCGI7dKbXtdiVd7jf4nn3vA4AWouX5jYu5t5pJBPczwgUoobzobDclUF8XxMmBZVk0DhdeCH8SHvF3M5LuqMSUkfL1s9LlIhkvcRl2SDQaA2CYC2Rf1kGUTOA9f4eozqa7Nbk78FPPyqAyD8uJNFVTpNzdHEljjQo7OUn7zoq4nq4Z6yS25eWHI1UZhE3LfUaDH0WcQPUlhK%2Fr5UORpBw4RoDqMhuQw27DcJMRXKf%2B5oppuZRU17NbYCf7he5LaFLBhGtrtGmsaodwA3Q5f8sm2t2PWD0Z2OcahsqWwatLd4aC2%2FXqyf%2Fb4MBDvw6QnpOqeAFkg6lQJZlSukvvUgUyBLhmTDqy5WlMg8fNuPIySmoYtNIWxcjCqiOzBBjqkAQ5KfS%2F4YN7WoelP%2F3qclKmQOjx0lVirPPmFfHMp77HCF%2FDpgac%2BWCRxVxAHmq%2FpU5mM4XDgIrf7A7sRB4p6nh%2BzFX5UbMR%2BiKXPfjqpwgpJQgaqCDGjTZJVa%2Bzqn4FWsgVS4mxmM3e3q4MGCED4JtyrUvry1eZkmpGzx8vguoKwGVT1LvO9ujFhj2SiBHuXcxB7XJ2U4n%2BkbwfQ2CctQ933KoXb&X-Amz-Signature=346ea81898d416e6b855b39e78bc0883821d34e6d142b1b1f7d6808808aed905&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHTQM3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlCS7JNowt0scpcI2cTbyfcKD8Kj6d96UjKmUMgPLO2gIhANnEJh1MbiWt1zmXxcYqvsWfGn90PEskSRu%2FS27aBLoLKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcaO19U2N5CLyc6%2Fgq3APCYExJ%2FrJuG6A0NsypCwaH2a%2B1ERnkfisfGpdZ7bl28xq1yG2EwKPZrhQ0Cd8D6EBb2nwpIZ67ubaOdXA%2FI9EVb0BaUxiIcO3v3HGumaWEkz2Wf2zRQDkHF%2BMw9hBH1ZVkKDusB16djxDrhcJUQeGifYjxjxYh8Fn3VsxudUIhNU0CgQlHVxv5t1HYcJVbcQR6mKJq%2FNbMAWC9LlypqnM5qynEE%2FF9JSXXHkxBZa15Ka%2FPj6s4pWVU80GxI3xFu%2Fv%2FomXg1nCGI7dKbXtdiVd7jf4nn3vA4AWouX5jYu5t5pJBPczwgUoobzobDclUF8XxMmBZVk0DhdeCH8SHvF3M5LuqMSUkfL1s9LlIhkvcRl2SDQaA2CYC2Rf1kGUTOA9f4eozqa7Nbk78FPPyqAyD8uJNFVTpNzdHEljjQo7OUn7zoq4nq4Z6yS25eWHI1UZhE3LfUaDH0WcQPUlhK%2Fr5UORpBw4RoDqMhuQw27DcJMRXKf%2B5oppuZRU17NbYCf7he5LaFLBhGtrtGmsaodwA3Q5f8sm2t2PWD0Z2OcahsqWwatLd4aC2%2FXqyf%2Fb4MBDvw6QnpOqeAFkg6lQJZlSukvvUgUyBLhmTDqy5WlMg8fNuPIySmoYtNIWxcjCqiOzBBjqkAQ5KfS%2F4YN7WoelP%2F3qclKmQOjx0lVirPPmFfHMp77HCF%2FDpgac%2BWCRxVxAHmq%2FpU5mM4XDgIrf7A7sRB4p6nh%2BzFX5UbMR%2BiKXPfjqpwgpJQgaqCDGjTZJVa%2Bzqn4FWsgVS4mxmM3e3q4MGCED4JtyrUvry1eZkmpGzx8vguoKwGVT1LvO9ujFhj2SiBHuXcxB7XJ2U4n%2BkbwfQ2CctQ933KoXb&X-Amz-Signature=51459807300708a8c55b7d03e269e434d5d73da93c0a6dc5a67972a4eaffc899&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHTQM3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlCS7JNowt0scpcI2cTbyfcKD8Kj6d96UjKmUMgPLO2gIhANnEJh1MbiWt1zmXxcYqvsWfGn90PEskSRu%2FS27aBLoLKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcaO19U2N5CLyc6%2Fgq3APCYExJ%2FrJuG6A0NsypCwaH2a%2B1ERnkfisfGpdZ7bl28xq1yG2EwKPZrhQ0Cd8D6EBb2nwpIZ67ubaOdXA%2FI9EVb0BaUxiIcO3v3HGumaWEkz2Wf2zRQDkHF%2BMw9hBH1ZVkKDusB16djxDrhcJUQeGifYjxjxYh8Fn3VsxudUIhNU0CgQlHVxv5t1HYcJVbcQR6mKJq%2FNbMAWC9LlypqnM5qynEE%2FF9JSXXHkxBZa15Ka%2FPj6s4pWVU80GxI3xFu%2Fv%2FomXg1nCGI7dKbXtdiVd7jf4nn3vA4AWouX5jYu5t5pJBPczwgUoobzobDclUF8XxMmBZVk0DhdeCH8SHvF3M5LuqMSUkfL1s9LlIhkvcRl2SDQaA2CYC2Rf1kGUTOA9f4eozqa7Nbk78FPPyqAyD8uJNFVTpNzdHEljjQo7OUn7zoq4nq4Z6yS25eWHI1UZhE3LfUaDH0WcQPUlhK%2Fr5UORpBw4RoDqMhuQw27DcJMRXKf%2B5oppuZRU17NbYCf7he5LaFLBhGtrtGmsaodwA3Q5f8sm2t2PWD0Z2OcahsqWwatLd4aC2%2FXqyf%2Fb4MBDvw6QnpOqeAFkg6lQJZlSukvvUgUyBLhmTDqy5WlMg8fNuPIySmoYtNIWxcjCqiOzBBjqkAQ5KfS%2F4YN7WoelP%2F3qclKmQOjx0lVirPPmFfHMp77HCF%2FDpgac%2BWCRxVxAHmq%2FpU5mM4XDgIrf7A7sRB4p6nh%2BzFX5UbMR%2BiKXPfjqpwgpJQgaqCDGjTZJVa%2Bzqn4FWsgVS4mxmM3e3q4MGCED4JtyrUvry1eZkmpGzx8vguoKwGVT1LvO9ujFhj2SiBHuXcxB7XJ2U4n%2BkbwfQ2CctQ933KoXb&X-Amz-Signature=46e921777ed568ef67ebe0655d2122259563e902f4c5d077a8e9b44a00d39e80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHTQM3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlCS7JNowt0scpcI2cTbyfcKD8Kj6d96UjKmUMgPLO2gIhANnEJh1MbiWt1zmXxcYqvsWfGn90PEskSRu%2FS27aBLoLKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcaO19U2N5CLyc6%2Fgq3APCYExJ%2FrJuG6A0NsypCwaH2a%2B1ERnkfisfGpdZ7bl28xq1yG2EwKPZrhQ0Cd8D6EBb2nwpIZ67ubaOdXA%2FI9EVb0BaUxiIcO3v3HGumaWEkz2Wf2zRQDkHF%2BMw9hBH1ZVkKDusB16djxDrhcJUQeGifYjxjxYh8Fn3VsxudUIhNU0CgQlHVxv5t1HYcJVbcQR6mKJq%2FNbMAWC9LlypqnM5qynEE%2FF9JSXXHkxBZa15Ka%2FPj6s4pWVU80GxI3xFu%2Fv%2FomXg1nCGI7dKbXtdiVd7jf4nn3vA4AWouX5jYu5t5pJBPczwgUoobzobDclUF8XxMmBZVk0DhdeCH8SHvF3M5LuqMSUkfL1s9LlIhkvcRl2SDQaA2CYC2Rf1kGUTOA9f4eozqa7Nbk78FPPyqAyD8uJNFVTpNzdHEljjQo7OUn7zoq4nq4Z6yS25eWHI1UZhE3LfUaDH0WcQPUlhK%2Fr5UORpBw4RoDqMhuQw27DcJMRXKf%2B5oppuZRU17NbYCf7he5LaFLBhGtrtGmsaodwA3Q5f8sm2t2PWD0Z2OcahsqWwatLd4aC2%2FXqyf%2Fb4MBDvw6QnpOqeAFkg6lQJZlSukvvUgUyBLhmTDqy5WlMg8fNuPIySmoYtNIWxcjCqiOzBBjqkAQ5KfS%2F4YN7WoelP%2F3qclKmQOjx0lVirPPmFfHMp77HCF%2FDpgac%2BWCRxVxAHmq%2FpU5mM4XDgIrf7A7sRB4p6nh%2BzFX5UbMR%2BiKXPfjqpwgpJQgaqCDGjTZJVa%2Bzqn4FWsgVS4mxmM3e3q4MGCED4JtyrUvry1eZkmpGzx8vguoKwGVT1LvO9ujFhj2SiBHuXcxB7XJ2U4n%2BkbwfQ2CctQ933KoXb&X-Amz-Signature=e98a81cd3300550ce8f4ffe952bd6b0d223f4ef9d38e7cbca3249b72c287d47e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHTQM3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlCS7JNowt0scpcI2cTbyfcKD8Kj6d96UjKmUMgPLO2gIhANnEJh1MbiWt1zmXxcYqvsWfGn90PEskSRu%2FS27aBLoLKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcaO19U2N5CLyc6%2Fgq3APCYExJ%2FrJuG6A0NsypCwaH2a%2B1ERnkfisfGpdZ7bl28xq1yG2EwKPZrhQ0Cd8D6EBb2nwpIZ67ubaOdXA%2FI9EVb0BaUxiIcO3v3HGumaWEkz2Wf2zRQDkHF%2BMw9hBH1ZVkKDusB16djxDrhcJUQeGifYjxjxYh8Fn3VsxudUIhNU0CgQlHVxv5t1HYcJVbcQR6mKJq%2FNbMAWC9LlypqnM5qynEE%2FF9JSXXHkxBZa15Ka%2FPj6s4pWVU80GxI3xFu%2Fv%2FomXg1nCGI7dKbXtdiVd7jf4nn3vA4AWouX5jYu5t5pJBPczwgUoobzobDclUF8XxMmBZVk0DhdeCH8SHvF3M5LuqMSUkfL1s9LlIhkvcRl2SDQaA2CYC2Rf1kGUTOA9f4eozqa7Nbk78FPPyqAyD8uJNFVTpNzdHEljjQo7OUn7zoq4nq4Z6yS25eWHI1UZhE3LfUaDH0WcQPUlhK%2Fr5UORpBw4RoDqMhuQw27DcJMRXKf%2B5oppuZRU17NbYCf7he5LaFLBhGtrtGmsaodwA3Q5f8sm2t2PWD0Z2OcahsqWwatLd4aC2%2FXqyf%2Fb4MBDvw6QnpOqeAFkg6lQJZlSukvvUgUyBLhmTDqy5WlMg8fNuPIySmoYtNIWxcjCqiOzBBjqkAQ5KfS%2F4YN7WoelP%2F3qclKmQOjx0lVirPPmFfHMp77HCF%2FDpgac%2BWCRxVxAHmq%2FpU5mM4XDgIrf7A7sRB4p6nh%2BzFX5UbMR%2BiKXPfjqpwgpJQgaqCDGjTZJVa%2Bzqn4FWsgVS4mxmM3e3q4MGCED4JtyrUvry1eZkmpGzx8vguoKwGVT1LvO9ujFhj2SiBHuXcxB7XJ2U4n%2BkbwfQ2CctQ933KoXb&X-Amz-Signature=fdf3d22ef030057e9b03f89b5c41ea731f60f36c731993e22dedc6b83e29f888&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
