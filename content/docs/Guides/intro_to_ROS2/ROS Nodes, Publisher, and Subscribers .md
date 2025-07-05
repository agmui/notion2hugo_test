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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633J7EAAO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCOCgw1U95DIcx585Xuk%2BLs2tgf7%2BdXCHxKZjyGJ8cE4gIhANAGt0cZJlMYavbWy%2FOlDqlVeeoDzwlcYHKd3SYm%2F%2BmqKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhNd5gn9JcEMpdBnoq3AOpsfm7sHJ7xCCXEUYCpQT%2F99fwJAWPhxhEVYc3L2dmQBTz33tm7pZbYaE2OPKLAY18q9m4KLtT%2FG7ASda0SDl0zlFLa4Pzm5aJurVC5Du71dB%2FHvHzOSfob8QklkGAwNYaQue0idq2jgCkkYVS%2FEdowVoqHi%2BNiNa4bxBLOpW5u45hNWmRO1Oc9tRQBiCX5dFY8QfKiOUsU%2B8PiQnMEwdXu1%2FI8YYB80tg%2Bk5lhfzil4ffu2xYC5TQR5LwLd%2FBzW6qRa6mi7V2BKQ5xKBvNUkaq28Zp7CevIsLm4D%2B7q%2F0WSZgz4OaN%2BkrqPqCaAOoWOWNQY3dl%2FDdiEeg6g57nOi4d6Dr%2Fbowid9n3kZ5aU28r92xRw5EVLRdoQNkYpjHmvMFWg1I2xl3m0WIKldl5FpQ8lYxHlqU5PBW0IHJ9q%2FPd4vf%2BS5bMdy%2FdQ1fE1jRhHIuaj3SG%2BbaBM%2BvnxS3SBW3a1lTxI26d61DxqzAhLFhUmt7PY2rKum3pIDhY%2FHD3T8z66XMhGsqcTHpRbqW8pO3K3K74B8nIaDCfsS6bm84ornVFFOoaEmvBCE0uioH1wuIjTbTfCdpCbAS8%2Bs4Bte2E6iFM7jGnoD2p4ApEY93CESC%2B%2B%2FCgKojH7Y4dzCOzKTDBjqkAZPu0LvaUy1T1jpWpE4Y%2F9lFm9zIV3jBa%2BLAGbs5in1Tj9Srx7QB%2FnPn%2Fl%2BQs90cDeMiA%2BxkTB%2Fqp7G4S2tsek3vW8qzat4D3om8kHXc0WXyvLZ2Awd8z4ANj2qx8ksZ7z6AB4ywjpcqyT5gBeddnIUaLdTUQ0kxgkWFNa2MPsqORJ0d532VnnemIaSniSo9Z7USb67h8qvNPTVtmqgOUoXS3W4M&X-Amz-Signature=13d6f6dc74de0a5c886f6be578f600e37d19fc646835ff539c57c11e19ced143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633J7EAAO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCOCgw1U95DIcx585Xuk%2BLs2tgf7%2BdXCHxKZjyGJ8cE4gIhANAGt0cZJlMYavbWy%2FOlDqlVeeoDzwlcYHKd3SYm%2F%2BmqKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhNd5gn9JcEMpdBnoq3AOpsfm7sHJ7xCCXEUYCpQT%2F99fwJAWPhxhEVYc3L2dmQBTz33tm7pZbYaE2OPKLAY18q9m4KLtT%2FG7ASda0SDl0zlFLa4Pzm5aJurVC5Du71dB%2FHvHzOSfob8QklkGAwNYaQue0idq2jgCkkYVS%2FEdowVoqHi%2BNiNa4bxBLOpW5u45hNWmRO1Oc9tRQBiCX5dFY8QfKiOUsU%2B8PiQnMEwdXu1%2FI8YYB80tg%2Bk5lhfzil4ffu2xYC5TQR5LwLd%2FBzW6qRa6mi7V2BKQ5xKBvNUkaq28Zp7CevIsLm4D%2B7q%2F0WSZgz4OaN%2BkrqPqCaAOoWOWNQY3dl%2FDdiEeg6g57nOi4d6Dr%2Fbowid9n3kZ5aU28r92xRw5EVLRdoQNkYpjHmvMFWg1I2xl3m0WIKldl5FpQ8lYxHlqU5PBW0IHJ9q%2FPd4vf%2BS5bMdy%2FdQ1fE1jRhHIuaj3SG%2BbaBM%2BvnxS3SBW3a1lTxI26d61DxqzAhLFhUmt7PY2rKum3pIDhY%2FHD3T8z66XMhGsqcTHpRbqW8pO3K3K74B8nIaDCfsS6bm84ornVFFOoaEmvBCE0uioH1wuIjTbTfCdpCbAS8%2Bs4Bte2E6iFM7jGnoD2p4ApEY93CESC%2B%2B%2FCgKojH7Y4dzCOzKTDBjqkAZPu0LvaUy1T1jpWpE4Y%2F9lFm9zIV3jBa%2BLAGbs5in1Tj9Srx7QB%2FnPn%2Fl%2BQs90cDeMiA%2BxkTB%2Fqp7G4S2tsek3vW8qzat4D3om8kHXc0WXyvLZ2Awd8z4ANj2qx8ksZ7z6AB4ywjpcqyT5gBeddnIUaLdTUQ0kxgkWFNa2MPsqORJ0d532VnnemIaSniSo9Z7USb67h8qvNPTVtmqgOUoXS3W4M&X-Amz-Signature=cce7d6fe024fbda2d8ccd37d56a6592f659cd421c85ebffeffbd5bf20019bffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633J7EAAO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCOCgw1U95DIcx585Xuk%2BLs2tgf7%2BdXCHxKZjyGJ8cE4gIhANAGt0cZJlMYavbWy%2FOlDqlVeeoDzwlcYHKd3SYm%2F%2BmqKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhNd5gn9JcEMpdBnoq3AOpsfm7sHJ7xCCXEUYCpQT%2F99fwJAWPhxhEVYc3L2dmQBTz33tm7pZbYaE2OPKLAY18q9m4KLtT%2FG7ASda0SDl0zlFLa4Pzm5aJurVC5Du71dB%2FHvHzOSfob8QklkGAwNYaQue0idq2jgCkkYVS%2FEdowVoqHi%2BNiNa4bxBLOpW5u45hNWmRO1Oc9tRQBiCX5dFY8QfKiOUsU%2B8PiQnMEwdXu1%2FI8YYB80tg%2Bk5lhfzil4ffu2xYC5TQR5LwLd%2FBzW6qRa6mi7V2BKQ5xKBvNUkaq28Zp7CevIsLm4D%2B7q%2F0WSZgz4OaN%2BkrqPqCaAOoWOWNQY3dl%2FDdiEeg6g57nOi4d6Dr%2Fbowid9n3kZ5aU28r92xRw5EVLRdoQNkYpjHmvMFWg1I2xl3m0WIKldl5FpQ8lYxHlqU5PBW0IHJ9q%2FPd4vf%2BS5bMdy%2FdQ1fE1jRhHIuaj3SG%2BbaBM%2BvnxS3SBW3a1lTxI26d61DxqzAhLFhUmt7PY2rKum3pIDhY%2FHD3T8z66XMhGsqcTHpRbqW8pO3K3K74B8nIaDCfsS6bm84ornVFFOoaEmvBCE0uioH1wuIjTbTfCdpCbAS8%2Bs4Bte2E6iFM7jGnoD2p4ApEY93CESC%2B%2B%2FCgKojH7Y4dzCOzKTDBjqkAZPu0LvaUy1T1jpWpE4Y%2F9lFm9zIV3jBa%2BLAGbs5in1Tj9Srx7QB%2FnPn%2Fl%2BQs90cDeMiA%2BxkTB%2Fqp7G4S2tsek3vW8qzat4D3om8kHXc0WXyvLZ2Awd8z4ANj2qx8ksZ7z6AB4ywjpcqyT5gBeddnIUaLdTUQ0kxgkWFNa2MPsqORJ0d532VnnemIaSniSo9Z7USb67h8qvNPTVtmqgOUoXS3W4M&X-Amz-Signature=ca4988bb140f4fa3914869c8a71cf8df9bb09f7bff129eded8d42f8c21977a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633J7EAAO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCOCgw1U95DIcx585Xuk%2BLs2tgf7%2BdXCHxKZjyGJ8cE4gIhANAGt0cZJlMYavbWy%2FOlDqlVeeoDzwlcYHKd3SYm%2F%2BmqKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhNd5gn9JcEMpdBnoq3AOpsfm7sHJ7xCCXEUYCpQT%2F99fwJAWPhxhEVYc3L2dmQBTz33tm7pZbYaE2OPKLAY18q9m4KLtT%2FG7ASda0SDl0zlFLa4Pzm5aJurVC5Du71dB%2FHvHzOSfob8QklkGAwNYaQue0idq2jgCkkYVS%2FEdowVoqHi%2BNiNa4bxBLOpW5u45hNWmRO1Oc9tRQBiCX5dFY8QfKiOUsU%2B8PiQnMEwdXu1%2FI8YYB80tg%2Bk5lhfzil4ffu2xYC5TQR5LwLd%2FBzW6qRa6mi7V2BKQ5xKBvNUkaq28Zp7CevIsLm4D%2B7q%2F0WSZgz4OaN%2BkrqPqCaAOoWOWNQY3dl%2FDdiEeg6g57nOi4d6Dr%2Fbowid9n3kZ5aU28r92xRw5EVLRdoQNkYpjHmvMFWg1I2xl3m0WIKldl5FpQ8lYxHlqU5PBW0IHJ9q%2FPd4vf%2BS5bMdy%2FdQ1fE1jRhHIuaj3SG%2BbaBM%2BvnxS3SBW3a1lTxI26d61DxqzAhLFhUmt7PY2rKum3pIDhY%2FHD3T8z66XMhGsqcTHpRbqW8pO3K3K74B8nIaDCfsS6bm84ornVFFOoaEmvBCE0uioH1wuIjTbTfCdpCbAS8%2Bs4Bte2E6iFM7jGnoD2p4ApEY93CESC%2B%2B%2FCgKojH7Y4dzCOzKTDBjqkAZPu0LvaUy1T1jpWpE4Y%2F9lFm9zIV3jBa%2BLAGbs5in1Tj9Srx7QB%2FnPn%2Fl%2BQs90cDeMiA%2BxkTB%2Fqp7G4S2tsek3vW8qzat4D3om8kHXc0WXyvLZ2Awd8z4ANj2qx8ksZ7z6AB4ywjpcqyT5gBeddnIUaLdTUQ0kxgkWFNa2MPsqORJ0d532VnnemIaSniSo9Z7USb67h8qvNPTVtmqgOUoXS3W4M&X-Amz-Signature=dd352c2f21909a19453aa96ce7415305c2bf171b9c330a4a07027c473074a6ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633J7EAAO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCOCgw1U95DIcx585Xuk%2BLs2tgf7%2BdXCHxKZjyGJ8cE4gIhANAGt0cZJlMYavbWy%2FOlDqlVeeoDzwlcYHKd3SYm%2F%2BmqKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhNd5gn9JcEMpdBnoq3AOpsfm7sHJ7xCCXEUYCpQT%2F99fwJAWPhxhEVYc3L2dmQBTz33tm7pZbYaE2OPKLAY18q9m4KLtT%2FG7ASda0SDl0zlFLa4Pzm5aJurVC5Du71dB%2FHvHzOSfob8QklkGAwNYaQue0idq2jgCkkYVS%2FEdowVoqHi%2BNiNa4bxBLOpW5u45hNWmRO1Oc9tRQBiCX5dFY8QfKiOUsU%2B8PiQnMEwdXu1%2FI8YYB80tg%2Bk5lhfzil4ffu2xYC5TQR5LwLd%2FBzW6qRa6mi7V2BKQ5xKBvNUkaq28Zp7CevIsLm4D%2B7q%2F0WSZgz4OaN%2BkrqPqCaAOoWOWNQY3dl%2FDdiEeg6g57nOi4d6Dr%2Fbowid9n3kZ5aU28r92xRw5EVLRdoQNkYpjHmvMFWg1I2xl3m0WIKldl5FpQ8lYxHlqU5PBW0IHJ9q%2FPd4vf%2BS5bMdy%2FdQ1fE1jRhHIuaj3SG%2BbaBM%2BvnxS3SBW3a1lTxI26d61DxqzAhLFhUmt7PY2rKum3pIDhY%2FHD3T8z66XMhGsqcTHpRbqW8pO3K3K74B8nIaDCfsS6bm84ornVFFOoaEmvBCE0uioH1wuIjTbTfCdpCbAS8%2Bs4Bte2E6iFM7jGnoD2p4ApEY93CESC%2B%2B%2FCgKojH7Y4dzCOzKTDBjqkAZPu0LvaUy1T1jpWpE4Y%2F9lFm9zIV3jBa%2BLAGbs5in1Tj9Srx7QB%2FnPn%2Fl%2BQs90cDeMiA%2BxkTB%2Fqp7G4S2tsek3vW8qzat4D3om8kHXc0WXyvLZ2Awd8z4ANj2qx8ksZ7z6AB4ywjpcqyT5gBeddnIUaLdTUQ0kxgkWFNa2MPsqORJ0d532VnnemIaSniSo9Z7USb67h8qvNPTVtmqgOUoXS3W4M&X-Amz-Signature=78bb5df684b843079dd4fb198624f894932eb9d7f380c1d4bc2ea391ecf48ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633J7EAAO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCOCgw1U95DIcx585Xuk%2BLs2tgf7%2BdXCHxKZjyGJ8cE4gIhANAGt0cZJlMYavbWy%2FOlDqlVeeoDzwlcYHKd3SYm%2F%2BmqKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhNd5gn9JcEMpdBnoq3AOpsfm7sHJ7xCCXEUYCpQT%2F99fwJAWPhxhEVYc3L2dmQBTz33tm7pZbYaE2OPKLAY18q9m4KLtT%2FG7ASda0SDl0zlFLa4Pzm5aJurVC5Du71dB%2FHvHzOSfob8QklkGAwNYaQue0idq2jgCkkYVS%2FEdowVoqHi%2BNiNa4bxBLOpW5u45hNWmRO1Oc9tRQBiCX5dFY8QfKiOUsU%2B8PiQnMEwdXu1%2FI8YYB80tg%2Bk5lhfzil4ffu2xYC5TQR5LwLd%2FBzW6qRa6mi7V2BKQ5xKBvNUkaq28Zp7CevIsLm4D%2B7q%2F0WSZgz4OaN%2BkrqPqCaAOoWOWNQY3dl%2FDdiEeg6g57nOi4d6Dr%2Fbowid9n3kZ5aU28r92xRw5EVLRdoQNkYpjHmvMFWg1I2xl3m0WIKldl5FpQ8lYxHlqU5PBW0IHJ9q%2FPd4vf%2BS5bMdy%2FdQ1fE1jRhHIuaj3SG%2BbaBM%2BvnxS3SBW3a1lTxI26d61DxqzAhLFhUmt7PY2rKum3pIDhY%2FHD3T8z66XMhGsqcTHpRbqW8pO3K3K74B8nIaDCfsS6bm84ornVFFOoaEmvBCE0uioH1wuIjTbTfCdpCbAS8%2Bs4Bte2E6iFM7jGnoD2p4ApEY93CESC%2B%2B%2FCgKojH7Y4dzCOzKTDBjqkAZPu0LvaUy1T1jpWpE4Y%2F9lFm9zIV3jBa%2BLAGbs5in1Tj9Srx7QB%2FnPn%2Fl%2BQs90cDeMiA%2BxkTB%2Fqp7G4S2tsek3vW8qzat4D3om8kHXc0WXyvLZ2Awd8z4ANj2qx8ksZ7z6AB4ywjpcqyT5gBeddnIUaLdTUQ0kxgkWFNa2MPsqORJ0d532VnnemIaSniSo9Z7USb67h8qvNPTVtmqgOUoXS3W4M&X-Amz-Signature=ad6f7d8d3b2de7ec2f99303dbf14b8a95061abedda7fb5089080313e384efbd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633J7EAAO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCOCgw1U95DIcx585Xuk%2BLs2tgf7%2BdXCHxKZjyGJ8cE4gIhANAGt0cZJlMYavbWy%2FOlDqlVeeoDzwlcYHKd3SYm%2F%2BmqKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhNd5gn9JcEMpdBnoq3AOpsfm7sHJ7xCCXEUYCpQT%2F99fwJAWPhxhEVYc3L2dmQBTz33tm7pZbYaE2OPKLAY18q9m4KLtT%2FG7ASda0SDl0zlFLa4Pzm5aJurVC5Du71dB%2FHvHzOSfob8QklkGAwNYaQue0idq2jgCkkYVS%2FEdowVoqHi%2BNiNa4bxBLOpW5u45hNWmRO1Oc9tRQBiCX5dFY8QfKiOUsU%2B8PiQnMEwdXu1%2FI8YYB80tg%2Bk5lhfzil4ffu2xYC5TQR5LwLd%2FBzW6qRa6mi7V2BKQ5xKBvNUkaq28Zp7CevIsLm4D%2B7q%2F0WSZgz4OaN%2BkrqPqCaAOoWOWNQY3dl%2FDdiEeg6g57nOi4d6Dr%2Fbowid9n3kZ5aU28r92xRw5EVLRdoQNkYpjHmvMFWg1I2xl3m0WIKldl5FpQ8lYxHlqU5PBW0IHJ9q%2FPd4vf%2BS5bMdy%2FdQ1fE1jRhHIuaj3SG%2BbaBM%2BvnxS3SBW3a1lTxI26d61DxqzAhLFhUmt7PY2rKum3pIDhY%2FHD3T8z66XMhGsqcTHpRbqW8pO3K3K74B8nIaDCfsS6bm84ornVFFOoaEmvBCE0uioH1wuIjTbTfCdpCbAS8%2Bs4Bte2E6iFM7jGnoD2p4ApEY93CESC%2B%2B%2FCgKojH7Y4dzCOzKTDBjqkAZPu0LvaUy1T1jpWpE4Y%2F9lFm9zIV3jBa%2BLAGbs5in1Tj9Srx7QB%2FnPn%2Fl%2BQs90cDeMiA%2BxkTB%2Fqp7G4S2tsek3vW8qzat4D3om8kHXc0WXyvLZ2Awd8z4ANj2qx8ksZ7z6AB4ywjpcqyT5gBeddnIUaLdTUQ0kxgkWFNa2MPsqORJ0d532VnnemIaSniSo9Z7USb67h8qvNPTVtmqgOUoXS3W4M&X-Amz-Signature=6654e06e340610fbf59dfd6039a9fa1ac8b397db75100ac236e9dbd578b27b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633J7EAAO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCOCgw1U95DIcx585Xuk%2BLs2tgf7%2BdXCHxKZjyGJ8cE4gIhANAGt0cZJlMYavbWy%2FOlDqlVeeoDzwlcYHKd3SYm%2F%2BmqKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhNd5gn9JcEMpdBnoq3AOpsfm7sHJ7xCCXEUYCpQT%2F99fwJAWPhxhEVYc3L2dmQBTz33tm7pZbYaE2OPKLAY18q9m4KLtT%2FG7ASda0SDl0zlFLa4Pzm5aJurVC5Du71dB%2FHvHzOSfob8QklkGAwNYaQue0idq2jgCkkYVS%2FEdowVoqHi%2BNiNa4bxBLOpW5u45hNWmRO1Oc9tRQBiCX5dFY8QfKiOUsU%2B8PiQnMEwdXu1%2FI8YYB80tg%2Bk5lhfzil4ffu2xYC5TQR5LwLd%2FBzW6qRa6mi7V2BKQ5xKBvNUkaq28Zp7CevIsLm4D%2B7q%2F0WSZgz4OaN%2BkrqPqCaAOoWOWNQY3dl%2FDdiEeg6g57nOi4d6Dr%2Fbowid9n3kZ5aU28r92xRw5EVLRdoQNkYpjHmvMFWg1I2xl3m0WIKldl5FpQ8lYxHlqU5PBW0IHJ9q%2FPd4vf%2BS5bMdy%2FdQ1fE1jRhHIuaj3SG%2BbaBM%2BvnxS3SBW3a1lTxI26d61DxqzAhLFhUmt7PY2rKum3pIDhY%2FHD3T8z66XMhGsqcTHpRbqW8pO3K3K74B8nIaDCfsS6bm84ornVFFOoaEmvBCE0uioH1wuIjTbTfCdpCbAS8%2Bs4Bte2E6iFM7jGnoD2p4ApEY93CESC%2B%2B%2FCgKojH7Y4dzCOzKTDBjqkAZPu0LvaUy1T1jpWpE4Y%2F9lFm9zIV3jBa%2BLAGbs5in1Tj9Srx7QB%2FnPn%2Fl%2BQs90cDeMiA%2BxkTB%2Fqp7G4S2tsek3vW8qzat4D3om8kHXc0WXyvLZ2Awd8z4ANj2qx8ksZ7z6AB4ywjpcqyT5gBeddnIUaLdTUQ0kxgkWFNa2MPsqORJ0d532VnnemIaSniSo9Z7USb67h8qvNPTVtmqgOUoXS3W4M&X-Amz-Signature=c7a7359e3af9ae92ec6a5cb96f388f4081b462d00658cd855260041acbec5d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
