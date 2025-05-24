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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDEQ7TH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIENnksOo2pmp%2BdZJhC1YFTBhMmZGprqoCf9uA6nPg7HAAiEA1oiZBubM90gU46kER4DN7CDQAawDpRnOmyqWO%2BFxR2Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHKGaOiatFLXaHIccCrcA8n2XVWP89nDdJkWWnM5IRW%2Fy0DywrlWysZoMiQEpDfaAAWHVoQNr2BoD5cTebQQkmyCEzNgds1xX44S5%2FmtN1h7jq6lzTAHUtQOKZfs8FfQLCVkOL0CHHPycCmWyds%2BftA7zip0qH4JDb2fuyJku0ZJcWIFlQw14kSRZFcBzhBSeeNSuGkbCedpC5dTJRQaVgrIEUPNB7rDMhWbpEvsC6NxlneEFTCN2P59kPfkv7MQCgXaoa9y56zUYaq4lpcq3ETFW3n%2BxjWTaxG2fQn26Y7mYWAZWRI57ONrJxdvxiQt5EVNjiMtQ6N0jgGL9pCtwpY%2BGKbR5IgZ6T86Jk2P2Obgzcitb8n2x%2FpdhHnieYUx5X5uY8lSX6nRe39O8jL8EfN9fI6dZGH3%2B0cI276dL72GlS%2FmA0Y05RLaZE03NfBr0RSJIbZaM0fo%2FeeoibreCsktirwBVxbUIB3sYupxr06xayzc9nOtmU8ga8YoYdrP0i7h%2FRpr%2F88L2HBRpZOvR0ndveGwQOWobNL0brJN0z%2BTNJVB1J6FL79KqDhK29xseHQGvGrvgwBablcglJDQPXit2rQ%2BAmckPAUP1LWEGH5qXL0msOvmyozLZ1cTJn5u4GnQz6rb%2FC46pQa%2FMOiAxsEGOqUBLebq2AahQHNggCT7t6KC5dtRQttX34Q1yVlEBCiDRTCL%2Bf3Un3ZH4FIkDyI%2FULWcsr7SbWnlJdEYgK45n39LKp%2Fk%2BZx6e3fOhGnpIwMy0Lv%2FbTapndGXsIQI0RJNh24KRtHIgScz%2FrfHHbQoX%2Bw2GO3Lkgr8C6%2FBxM%2Fx5zyOmB8e91iczoChm%2Fn5B4wtt6RzR2kyHCo%2B1lOBaJjI7SS21XvDcNM6&X-Amz-Signature=21e4fe15653c0c7daa2b4233d89a15daabb0991dd4282ca02a1c546c75cfb763&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDEQ7TH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIENnksOo2pmp%2BdZJhC1YFTBhMmZGprqoCf9uA6nPg7HAAiEA1oiZBubM90gU46kER4DN7CDQAawDpRnOmyqWO%2BFxR2Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHKGaOiatFLXaHIccCrcA8n2XVWP89nDdJkWWnM5IRW%2Fy0DywrlWysZoMiQEpDfaAAWHVoQNr2BoD5cTebQQkmyCEzNgds1xX44S5%2FmtN1h7jq6lzTAHUtQOKZfs8FfQLCVkOL0CHHPycCmWyds%2BftA7zip0qH4JDb2fuyJku0ZJcWIFlQw14kSRZFcBzhBSeeNSuGkbCedpC5dTJRQaVgrIEUPNB7rDMhWbpEvsC6NxlneEFTCN2P59kPfkv7MQCgXaoa9y56zUYaq4lpcq3ETFW3n%2BxjWTaxG2fQn26Y7mYWAZWRI57ONrJxdvxiQt5EVNjiMtQ6N0jgGL9pCtwpY%2BGKbR5IgZ6T86Jk2P2Obgzcitb8n2x%2FpdhHnieYUx5X5uY8lSX6nRe39O8jL8EfN9fI6dZGH3%2B0cI276dL72GlS%2FmA0Y05RLaZE03NfBr0RSJIbZaM0fo%2FeeoibreCsktirwBVxbUIB3sYupxr06xayzc9nOtmU8ga8YoYdrP0i7h%2FRpr%2F88L2HBRpZOvR0ndveGwQOWobNL0brJN0z%2BTNJVB1J6FL79KqDhK29xseHQGvGrvgwBablcglJDQPXit2rQ%2BAmckPAUP1LWEGH5qXL0msOvmyozLZ1cTJn5u4GnQz6rb%2FC46pQa%2FMOiAxsEGOqUBLebq2AahQHNggCT7t6KC5dtRQttX34Q1yVlEBCiDRTCL%2Bf3Un3ZH4FIkDyI%2FULWcsr7SbWnlJdEYgK45n39LKp%2Fk%2BZx6e3fOhGnpIwMy0Lv%2FbTapndGXsIQI0RJNh24KRtHIgScz%2FrfHHbQoX%2Bw2GO3Lkgr8C6%2FBxM%2Fx5zyOmB8e91iczoChm%2Fn5B4wtt6RzR2kyHCo%2B1lOBaJjI7SS21XvDcNM6&X-Amz-Signature=00b142f79d65a80ac5317fdaa879c6af8df37a19525ce0eb513abe0090d2dbed&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDEQ7TH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIENnksOo2pmp%2BdZJhC1YFTBhMmZGprqoCf9uA6nPg7HAAiEA1oiZBubM90gU46kER4DN7CDQAawDpRnOmyqWO%2BFxR2Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHKGaOiatFLXaHIccCrcA8n2XVWP89nDdJkWWnM5IRW%2Fy0DywrlWysZoMiQEpDfaAAWHVoQNr2BoD5cTebQQkmyCEzNgds1xX44S5%2FmtN1h7jq6lzTAHUtQOKZfs8FfQLCVkOL0CHHPycCmWyds%2BftA7zip0qH4JDb2fuyJku0ZJcWIFlQw14kSRZFcBzhBSeeNSuGkbCedpC5dTJRQaVgrIEUPNB7rDMhWbpEvsC6NxlneEFTCN2P59kPfkv7MQCgXaoa9y56zUYaq4lpcq3ETFW3n%2BxjWTaxG2fQn26Y7mYWAZWRI57ONrJxdvxiQt5EVNjiMtQ6N0jgGL9pCtwpY%2BGKbR5IgZ6T86Jk2P2Obgzcitb8n2x%2FpdhHnieYUx5X5uY8lSX6nRe39O8jL8EfN9fI6dZGH3%2B0cI276dL72GlS%2FmA0Y05RLaZE03NfBr0RSJIbZaM0fo%2FeeoibreCsktirwBVxbUIB3sYupxr06xayzc9nOtmU8ga8YoYdrP0i7h%2FRpr%2F88L2HBRpZOvR0ndveGwQOWobNL0brJN0z%2BTNJVB1J6FL79KqDhK29xseHQGvGrvgwBablcglJDQPXit2rQ%2BAmckPAUP1LWEGH5qXL0msOvmyozLZ1cTJn5u4GnQz6rb%2FC46pQa%2FMOiAxsEGOqUBLebq2AahQHNggCT7t6KC5dtRQttX34Q1yVlEBCiDRTCL%2Bf3Un3ZH4FIkDyI%2FULWcsr7SbWnlJdEYgK45n39LKp%2Fk%2BZx6e3fOhGnpIwMy0Lv%2FbTapndGXsIQI0RJNh24KRtHIgScz%2FrfHHbQoX%2Bw2GO3Lkgr8C6%2FBxM%2Fx5zyOmB8e91iczoChm%2Fn5B4wtt6RzR2kyHCo%2B1lOBaJjI7SS21XvDcNM6&X-Amz-Signature=31e61953741f90851c242fadfde7263ef17eee5769fff337747707941440a5bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDEQ7TH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIENnksOo2pmp%2BdZJhC1YFTBhMmZGprqoCf9uA6nPg7HAAiEA1oiZBubM90gU46kER4DN7CDQAawDpRnOmyqWO%2BFxR2Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHKGaOiatFLXaHIccCrcA8n2XVWP89nDdJkWWnM5IRW%2Fy0DywrlWysZoMiQEpDfaAAWHVoQNr2BoD5cTebQQkmyCEzNgds1xX44S5%2FmtN1h7jq6lzTAHUtQOKZfs8FfQLCVkOL0CHHPycCmWyds%2BftA7zip0qH4JDb2fuyJku0ZJcWIFlQw14kSRZFcBzhBSeeNSuGkbCedpC5dTJRQaVgrIEUPNB7rDMhWbpEvsC6NxlneEFTCN2P59kPfkv7MQCgXaoa9y56zUYaq4lpcq3ETFW3n%2BxjWTaxG2fQn26Y7mYWAZWRI57ONrJxdvxiQt5EVNjiMtQ6N0jgGL9pCtwpY%2BGKbR5IgZ6T86Jk2P2Obgzcitb8n2x%2FpdhHnieYUx5X5uY8lSX6nRe39O8jL8EfN9fI6dZGH3%2B0cI276dL72GlS%2FmA0Y05RLaZE03NfBr0RSJIbZaM0fo%2FeeoibreCsktirwBVxbUIB3sYupxr06xayzc9nOtmU8ga8YoYdrP0i7h%2FRpr%2F88L2HBRpZOvR0ndveGwQOWobNL0brJN0z%2BTNJVB1J6FL79KqDhK29xseHQGvGrvgwBablcglJDQPXit2rQ%2BAmckPAUP1LWEGH5qXL0msOvmyozLZ1cTJn5u4GnQz6rb%2FC46pQa%2FMOiAxsEGOqUBLebq2AahQHNggCT7t6KC5dtRQttX34Q1yVlEBCiDRTCL%2Bf3Un3ZH4FIkDyI%2FULWcsr7SbWnlJdEYgK45n39LKp%2Fk%2BZx6e3fOhGnpIwMy0Lv%2FbTapndGXsIQI0RJNh24KRtHIgScz%2FrfHHbQoX%2Bw2GO3Lkgr8C6%2FBxM%2Fx5zyOmB8e91iczoChm%2Fn5B4wtt6RzR2kyHCo%2B1lOBaJjI7SS21XvDcNM6&X-Amz-Signature=c62c81421fde92856ea6810e10e1452ac2f3a72ddd7dc9838e37a0f6ac2b5b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDEQ7TH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIENnksOo2pmp%2BdZJhC1YFTBhMmZGprqoCf9uA6nPg7HAAiEA1oiZBubM90gU46kER4DN7CDQAawDpRnOmyqWO%2BFxR2Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHKGaOiatFLXaHIccCrcA8n2XVWP89nDdJkWWnM5IRW%2Fy0DywrlWysZoMiQEpDfaAAWHVoQNr2BoD5cTebQQkmyCEzNgds1xX44S5%2FmtN1h7jq6lzTAHUtQOKZfs8FfQLCVkOL0CHHPycCmWyds%2BftA7zip0qH4JDb2fuyJku0ZJcWIFlQw14kSRZFcBzhBSeeNSuGkbCedpC5dTJRQaVgrIEUPNB7rDMhWbpEvsC6NxlneEFTCN2P59kPfkv7MQCgXaoa9y56zUYaq4lpcq3ETFW3n%2BxjWTaxG2fQn26Y7mYWAZWRI57ONrJxdvxiQt5EVNjiMtQ6N0jgGL9pCtwpY%2BGKbR5IgZ6T86Jk2P2Obgzcitb8n2x%2FpdhHnieYUx5X5uY8lSX6nRe39O8jL8EfN9fI6dZGH3%2B0cI276dL72GlS%2FmA0Y05RLaZE03NfBr0RSJIbZaM0fo%2FeeoibreCsktirwBVxbUIB3sYupxr06xayzc9nOtmU8ga8YoYdrP0i7h%2FRpr%2F88L2HBRpZOvR0ndveGwQOWobNL0brJN0z%2BTNJVB1J6FL79KqDhK29xseHQGvGrvgwBablcglJDQPXit2rQ%2BAmckPAUP1LWEGH5qXL0msOvmyozLZ1cTJn5u4GnQz6rb%2FC46pQa%2FMOiAxsEGOqUBLebq2AahQHNggCT7t6KC5dtRQttX34Q1yVlEBCiDRTCL%2Bf3Un3ZH4FIkDyI%2FULWcsr7SbWnlJdEYgK45n39LKp%2Fk%2BZx6e3fOhGnpIwMy0Lv%2FbTapndGXsIQI0RJNh24KRtHIgScz%2FrfHHbQoX%2Bw2GO3Lkgr8C6%2FBxM%2Fx5zyOmB8e91iczoChm%2Fn5B4wtt6RzR2kyHCo%2B1lOBaJjI7SS21XvDcNM6&X-Amz-Signature=21e60d9f8334a50572d3510254bce484fe52d6f44baf076391dd826555aad4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDEQ7TH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIENnksOo2pmp%2BdZJhC1YFTBhMmZGprqoCf9uA6nPg7HAAiEA1oiZBubM90gU46kER4DN7CDQAawDpRnOmyqWO%2BFxR2Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHKGaOiatFLXaHIccCrcA8n2XVWP89nDdJkWWnM5IRW%2Fy0DywrlWysZoMiQEpDfaAAWHVoQNr2BoD5cTebQQkmyCEzNgds1xX44S5%2FmtN1h7jq6lzTAHUtQOKZfs8FfQLCVkOL0CHHPycCmWyds%2BftA7zip0qH4JDb2fuyJku0ZJcWIFlQw14kSRZFcBzhBSeeNSuGkbCedpC5dTJRQaVgrIEUPNB7rDMhWbpEvsC6NxlneEFTCN2P59kPfkv7MQCgXaoa9y56zUYaq4lpcq3ETFW3n%2BxjWTaxG2fQn26Y7mYWAZWRI57ONrJxdvxiQt5EVNjiMtQ6N0jgGL9pCtwpY%2BGKbR5IgZ6T86Jk2P2Obgzcitb8n2x%2FpdhHnieYUx5X5uY8lSX6nRe39O8jL8EfN9fI6dZGH3%2B0cI276dL72GlS%2FmA0Y05RLaZE03NfBr0RSJIbZaM0fo%2FeeoibreCsktirwBVxbUIB3sYupxr06xayzc9nOtmU8ga8YoYdrP0i7h%2FRpr%2F88L2HBRpZOvR0ndveGwQOWobNL0brJN0z%2BTNJVB1J6FL79KqDhK29xseHQGvGrvgwBablcglJDQPXit2rQ%2BAmckPAUP1LWEGH5qXL0msOvmyozLZ1cTJn5u4GnQz6rb%2FC46pQa%2FMOiAxsEGOqUBLebq2AahQHNggCT7t6KC5dtRQttX34Q1yVlEBCiDRTCL%2Bf3Un3ZH4FIkDyI%2FULWcsr7SbWnlJdEYgK45n39LKp%2Fk%2BZx6e3fOhGnpIwMy0Lv%2FbTapndGXsIQI0RJNh24KRtHIgScz%2FrfHHbQoX%2Bw2GO3Lkgr8C6%2FBxM%2Fx5zyOmB8e91iczoChm%2Fn5B4wtt6RzR2kyHCo%2B1lOBaJjI7SS21XvDcNM6&X-Amz-Signature=62e845393d850b473ad2c8e16d7e4a4394a7e029c6549b41bdfec6ca4745d9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDEQ7TH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIENnksOo2pmp%2BdZJhC1YFTBhMmZGprqoCf9uA6nPg7HAAiEA1oiZBubM90gU46kER4DN7CDQAawDpRnOmyqWO%2BFxR2Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHKGaOiatFLXaHIccCrcA8n2XVWP89nDdJkWWnM5IRW%2Fy0DywrlWysZoMiQEpDfaAAWHVoQNr2BoD5cTebQQkmyCEzNgds1xX44S5%2FmtN1h7jq6lzTAHUtQOKZfs8FfQLCVkOL0CHHPycCmWyds%2BftA7zip0qH4JDb2fuyJku0ZJcWIFlQw14kSRZFcBzhBSeeNSuGkbCedpC5dTJRQaVgrIEUPNB7rDMhWbpEvsC6NxlneEFTCN2P59kPfkv7MQCgXaoa9y56zUYaq4lpcq3ETFW3n%2BxjWTaxG2fQn26Y7mYWAZWRI57ONrJxdvxiQt5EVNjiMtQ6N0jgGL9pCtwpY%2BGKbR5IgZ6T86Jk2P2Obgzcitb8n2x%2FpdhHnieYUx5X5uY8lSX6nRe39O8jL8EfN9fI6dZGH3%2B0cI276dL72GlS%2FmA0Y05RLaZE03NfBr0RSJIbZaM0fo%2FeeoibreCsktirwBVxbUIB3sYupxr06xayzc9nOtmU8ga8YoYdrP0i7h%2FRpr%2F88L2HBRpZOvR0ndveGwQOWobNL0brJN0z%2BTNJVB1J6FL79KqDhK29xseHQGvGrvgwBablcglJDQPXit2rQ%2BAmckPAUP1LWEGH5qXL0msOvmyozLZ1cTJn5u4GnQz6rb%2FC46pQa%2FMOiAxsEGOqUBLebq2AahQHNggCT7t6KC5dtRQttX34Q1yVlEBCiDRTCL%2Bf3Un3ZH4FIkDyI%2FULWcsr7SbWnlJdEYgK45n39LKp%2Fk%2BZx6e3fOhGnpIwMy0Lv%2FbTapndGXsIQI0RJNh24KRtHIgScz%2FrfHHbQoX%2Bw2GO3Lkgr8C6%2FBxM%2Fx5zyOmB8e91iczoChm%2Fn5B4wtt6RzR2kyHCo%2B1lOBaJjI7SS21XvDcNM6&X-Amz-Signature=3b3609f35f1a60dd9db6f26e8cda5698a2e5a51503f2a99d47c0c3cbe09fcded&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDEQ7TH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIENnksOo2pmp%2BdZJhC1YFTBhMmZGprqoCf9uA6nPg7HAAiEA1oiZBubM90gU46kER4DN7CDQAawDpRnOmyqWO%2BFxR2Mq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHKGaOiatFLXaHIccCrcA8n2XVWP89nDdJkWWnM5IRW%2Fy0DywrlWysZoMiQEpDfaAAWHVoQNr2BoD5cTebQQkmyCEzNgds1xX44S5%2FmtN1h7jq6lzTAHUtQOKZfs8FfQLCVkOL0CHHPycCmWyds%2BftA7zip0qH4JDb2fuyJku0ZJcWIFlQw14kSRZFcBzhBSeeNSuGkbCedpC5dTJRQaVgrIEUPNB7rDMhWbpEvsC6NxlneEFTCN2P59kPfkv7MQCgXaoa9y56zUYaq4lpcq3ETFW3n%2BxjWTaxG2fQn26Y7mYWAZWRI57ONrJxdvxiQt5EVNjiMtQ6N0jgGL9pCtwpY%2BGKbR5IgZ6T86Jk2P2Obgzcitb8n2x%2FpdhHnieYUx5X5uY8lSX6nRe39O8jL8EfN9fI6dZGH3%2B0cI276dL72GlS%2FmA0Y05RLaZE03NfBr0RSJIbZaM0fo%2FeeoibreCsktirwBVxbUIB3sYupxr06xayzc9nOtmU8ga8YoYdrP0i7h%2FRpr%2F88L2HBRpZOvR0ndveGwQOWobNL0brJN0z%2BTNJVB1J6FL79KqDhK29xseHQGvGrvgwBablcglJDQPXit2rQ%2BAmckPAUP1LWEGH5qXL0msOvmyozLZ1cTJn5u4GnQz6rb%2FC46pQa%2FMOiAxsEGOqUBLebq2AahQHNggCT7t6KC5dtRQttX34Q1yVlEBCiDRTCL%2Bf3Un3ZH4FIkDyI%2FULWcsr7SbWnlJdEYgK45n39LKp%2Fk%2BZx6e3fOhGnpIwMy0Lv%2FbTapndGXsIQI0RJNh24KRtHIgScz%2FrfHHbQoX%2Bw2GO3Lkgr8C6%2FBxM%2Fx5zyOmB8e91iczoChm%2Fn5B4wtt6RzR2kyHCo%2B1lOBaJjI7SS21XvDcNM6&X-Amz-Signature=7faffa8005d0b714bee52fc305049e9ee69e6b2fe1dd2ac597b42f82a5a0e9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
