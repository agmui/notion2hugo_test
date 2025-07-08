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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCZZTVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrggCt%2FYj6flbQR3QlpNvwmdFwKgh%2FgLT1tUi7DxtKFgIgM79Db%2B%2B8lKd65Xo91Tpii8uraCzewJZWKpQbxOnLyJUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGRAd3mlCa8p49tRircA2sYbyEDNXyPBmKRPhkA0DSIPQ2b4nMc1gNQ46JapUwT86PNEbVCns0INN4pHQCK1R1c5bkvwsxXC3u%2FU3cFbcbnapZWbiIiXVcB33x0%2BbgbOYOjvvpHYcqxDhZDFLZzc4oeYIB62iUry00oWsGOp7lH9tJ0LKaLBxfDscvvAtqK3oRVuZJGBjZMuEE87dIOralf%2F6wAe1mWK6SpgygPHEptXufFKnUzTutnIXTJrK8jFwU3Id1OgrEKpo%2BBQrk1GcaAsWBgwSZDneN5AgQHPE%2Bu0RVbdhA%2FhrDCIJTX0didztZg4HSnod%2BxAq3aZjqHrzfuPljcEWYM9bmDAse%2F4bRvTBGyo55BQRWZaEL6sBu7eBsGsgLuxfzKluD808%2BaxLcwA7YD3VQex5lkjqk5qqTKqkSA6xU6DBDOu3BKEZLjd%2BkpBbXPud%2BknB6vmeQyUrWGzR6yScUPFWv5NQkY4haBCw8CNXt2eUaS%2B%2BY9lsc9kM5LDj4CKJDHPjgwmMqrB4HEdXGydl0wIPGhaM6dvkOTBci4ldIp0s5WhutCEYIhH6QaWZE7i8jVOYXMCo5emjfwHIqwDfJEDhb866MgDwfwV4SCNa6b9XmFHvpZQzL36MhDJAU7OV4FG9ldMIC0tsMGOqUBWEZl5OyseYLY8A%2FHX7Nq5FjrkM%2Bjn%2B%2BanXV43OkTN7dgBREZtK7dZI4yamJlqfxWa%2BgMBNd54KYZa23SgDQrW8lFt67WSh7N8lAS86n%2F%2FLq%2FVLnGhFljRDrpzaUpCVgvIM186qLitpjRK%2BbVLay3h%2FIcGUU9I%2FcHIQUB8x66kB0QEk2TP9TLlaIrStJW1Uuu8dtfKJlunL46R%2BT0PY9Zl8jGQNFj&X-Amz-Signature=8214348263f7db9ce51bc3db7e2d49d29e66b8a2bcda041b01a96bbae1fc44f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCZZTVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrggCt%2FYj6flbQR3QlpNvwmdFwKgh%2FgLT1tUi7DxtKFgIgM79Db%2B%2B8lKd65Xo91Tpii8uraCzewJZWKpQbxOnLyJUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGRAd3mlCa8p49tRircA2sYbyEDNXyPBmKRPhkA0DSIPQ2b4nMc1gNQ46JapUwT86PNEbVCns0INN4pHQCK1R1c5bkvwsxXC3u%2FU3cFbcbnapZWbiIiXVcB33x0%2BbgbOYOjvvpHYcqxDhZDFLZzc4oeYIB62iUry00oWsGOp7lH9tJ0LKaLBxfDscvvAtqK3oRVuZJGBjZMuEE87dIOralf%2F6wAe1mWK6SpgygPHEptXufFKnUzTutnIXTJrK8jFwU3Id1OgrEKpo%2BBQrk1GcaAsWBgwSZDneN5AgQHPE%2Bu0RVbdhA%2FhrDCIJTX0didztZg4HSnod%2BxAq3aZjqHrzfuPljcEWYM9bmDAse%2F4bRvTBGyo55BQRWZaEL6sBu7eBsGsgLuxfzKluD808%2BaxLcwA7YD3VQex5lkjqk5qqTKqkSA6xU6DBDOu3BKEZLjd%2BkpBbXPud%2BknB6vmeQyUrWGzR6yScUPFWv5NQkY4haBCw8CNXt2eUaS%2B%2BY9lsc9kM5LDj4CKJDHPjgwmMqrB4HEdXGydl0wIPGhaM6dvkOTBci4ldIp0s5WhutCEYIhH6QaWZE7i8jVOYXMCo5emjfwHIqwDfJEDhb866MgDwfwV4SCNa6b9XmFHvpZQzL36MhDJAU7OV4FG9ldMIC0tsMGOqUBWEZl5OyseYLY8A%2FHX7Nq5FjrkM%2Bjn%2B%2BanXV43OkTN7dgBREZtK7dZI4yamJlqfxWa%2BgMBNd54KYZa23SgDQrW8lFt67WSh7N8lAS86n%2F%2FLq%2FVLnGhFljRDrpzaUpCVgvIM186qLitpjRK%2BbVLay3h%2FIcGUU9I%2FcHIQUB8x66kB0QEk2TP9TLlaIrStJW1Uuu8dtfKJlunL46R%2BT0PY9Zl8jGQNFj&X-Amz-Signature=e759d22a05942cffc2854abb95db0d069c7350d0233371c6c84f5947f48b8e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCZZTVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrggCt%2FYj6flbQR3QlpNvwmdFwKgh%2FgLT1tUi7DxtKFgIgM79Db%2B%2B8lKd65Xo91Tpii8uraCzewJZWKpQbxOnLyJUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGRAd3mlCa8p49tRircA2sYbyEDNXyPBmKRPhkA0DSIPQ2b4nMc1gNQ46JapUwT86PNEbVCns0INN4pHQCK1R1c5bkvwsxXC3u%2FU3cFbcbnapZWbiIiXVcB33x0%2BbgbOYOjvvpHYcqxDhZDFLZzc4oeYIB62iUry00oWsGOp7lH9tJ0LKaLBxfDscvvAtqK3oRVuZJGBjZMuEE87dIOralf%2F6wAe1mWK6SpgygPHEptXufFKnUzTutnIXTJrK8jFwU3Id1OgrEKpo%2BBQrk1GcaAsWBgwSZDneN5AgQHPE%2Bu0RVbdhA%2FhrDCIJTX0didztZg4HSnod%2BxAq3aZjqHrzfuPljcEWYM9bmDAse%2F4bRvTBGyo55BQRWZaEL6sBu7eBsGsgLuxfzKluD808%2BaxLcwA7YD3VQex5lkjqk5qqTKqkSA6xU6DBDOu3BKEZLjd%2BkpBbXPud%2BknB6vmeQyUrWGzR6yScUPFWv5NQkY4haBCw8CNXt2eUaS%2B%2BY9lsc9kM5LDj4CKJDHPjgwmMqrB4HEdXGydl0wIPGhaM6dvkOTBci4ldIp0s5WhutCEYIhH6QaWZE7i8jVOYXMCo5emjfwHIqwDfJEDhb866MgDwfwV4SCNa6b9XmFHvpZQzL36MhDJAU7OV4FG9ldMIC0tsMGOqUBWEZl5OyseYLY8A%2FHX7Nq5FjrkM%2Bjn%2B%2BanXV43OkTN7dgBREZtK7dZI4yamJlqfxWa%2BgMBNd54KYZa23SgDQrW8lFt67WSh7N8lAS86n%2F%2FLq%2FVLnGhFljRDrpzaUpCVgvIM186qLitpjRK%2BbVLay3h%2FIcGUU9I%2FcHIQUB8x66kB0QEk2TP9TLlaIrStJW1Uuu8dtfKJlunL46R%2BT0PY9Zl8jGQNFj&X-Amz-Signature=ec859276345fb8ca89e24359d2bc5ab94f76d7d90120e00b518d311ea8e4f18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCZZTVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrggCt%2FYj6flbQR3QlpNvwmdFwKgh%2FgLT1tUi7DxtKFgIgM79Db%2B%2B8lKd65Xo91Tpii8uraCzewJZWKpQbxOnLyJUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGRAd3mlCa8p49tRircA2sYbyEDNXyPBmKRPhkA0DSIPQ2b4nMc1gNQ46JapUwT86PNEbVCns0INN4pHQCK1R1c5bkvwsxXC3u%2FU3cFbcbnapZWbiIiXVcB33x0%2BbgbOYOjvvpHYcqxDhZDFLZzc4oeYIB62iUry00oWsGOp7lH9tJ0LKaLBxfDscvvAtqK3oRVuZJGBjZMuEE87dIOralf%2F6wAe1mWK6SpgygPHEptXufFKnUzTutnIXTJrK8jFwU3Id1OgrEKpo%2BBQrk1GcaAsWBgwSZDneN5AgQHPE%2Bu0RVbdhA%2FhrDCIJTX0didztZg4HSnod%2BxAq3aZjqHrzfuPljcEWYM9bmDAse%2F4bRvTBGyo55BQRWZaEL6sBu7eBsGsgLuxfzKluD808%2BaxLcwA7YD3VQex5lkjqk5qqTKqkSA6xU6DBDOu3BKEZLjd%2BkpBbXPud%2BknB6vmeQyUrWGzR6yScUPFWv5NQkY4haBCw8CNXt2eUaS%2B%2BY9lsc9kM5LDj4CKJDHPjgwmMqrB4HEdXGydl0wIPGhaM6dvkOTBci4ldIp0s5WhutCEYIhH6QaWZE7i8jVOYXMCo5emjfwHIqwDfJEDhb866MgDwfwV4SCNa6b9XmFHvpZQzL36MhDJAU7OV4FG9ldMIC0tsMGOqUBWEZl5OyseYLY8A%2FHX7Nq5FjrkM%2Bjn%2B%2BanXV43OkTN7dgBREZtK7dZI4yamJlqfxWa%2BgMBNd54KYZa23SgDQrW8lFt67WSh7N8lAS86n%2F%2FLq%2FVLnGhFljRDrpzaUpCVgvIM186qLitpjRK%2BbVLay3h%2FIcGUU9I%2FcHIQUB8x66kB0QEk2TP9TLlaIrStJW1Uuu8dtfKJlunL46R%2BT0PY9Zl8jGQNFj&X-Amz-Signature=0919ba5bdd0e83391c40d6741a6137cfc136c6178bb543cdb8ab62b153e0737d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCZZTVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrggCt%2FYj6flbQR3QlpNvwmdFwKgh%2FgLT1tUi7DxtKFgIgM79Db%2B%2B8lKd65Xo91Tpii8uraCzewJZWKpQbxOnLyJUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGRAd3mlCa8p49tRircA2sYbyEDNXyPBmKRPhkA0DSIPQ2b4nMc1gNQ46JapUwT86PNEbVCns0INN4pHQCK1R1c5bkvwsxXC3u%2FU3cFbcbnapZWbiIiXVcB33x0%2BbgbOYOjvvpHYcqxDhZDFLZzc4oeYIB62iUry00oWsGOp7lH9tJ0LKaLBxfDscvvAtqK3oRVuZJGBjZMuEE87dIOralf%2F6wAe1mWK6SpgygPHEptXufFKnUzTutnIXTJrK8jFwU3Id1OgrEKpo%2BBQrk1GcaAsWBgwSZDneN5AgQHPE%2Bu0RVbdhA%2FhrDCIJTX0didztZg4HSnod%2BxAq3aZjqHrzfuPljcEWYM9bmDAse%2F4bRvTBGyo55BQRWZaEL6sBu7eBsGsgLuxfzKluD808%2BaxLcwA7YD3VQex5lkjqk5qqTKqkSA6xU6DBDOu3BKEZLjd%2BkpBbXPud%2BknB6vmeQyUrWGzR6yScUPFWv5NQkY4haBCw8CNXt2eUaS%2B%2BY9lsc9kM5LDj4CKJDHPjgwmMqrB4HEdXGydl0wIPGhaM6dvkOTBci4ldIp0s5WhutCEYIhH6QaWZE7i8jVOYXMCo5emjfwHIqwDfJEDhb866MgDwfwV4SCNa6b9XmFHvpZQzL36MhDJAU7OV4FG9ldMIC0tsMGOqUBWEZl5OyseYLY8A%2FHX7Nq5FjrkM%2Bjn%2B%2BanXV43OkTN7dgBREZtK7dZI4yamJlqfxWa%2BgMBNd54KYZa23SgDQrW8lFt67WSh7N8lAS86n%2F%2FLq%2FVLnGhFljRDrpzaUpCVgvIM186qLitpjRK%2BbVLay3h%2FIcGUU9I%2FcHIQUB8x66kB0QEk2TP9TLlaIrStJW1Uuu8dtfKJlunL46R%2BT0PY9Zl8jGQNFj&X-Amz-Signature=520b136599591c85857af12df1b852012f035d2d2ac6f728e2f3ac75c93fe4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCZZTVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrggCt%2FYj6flbQR3QlpNvwmdFwKgh%2FgLT1tUi7DxtKFgIgM79Db%2B%2B8lKd65Xo91Tpii8uraCzewJZWKpQbxOnLyJUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGRAd3mlCa8p49tRircA2sYbyEDNXyPBmKRPhkA0DSIPQ2b4nMc1gNQ46JapUwT86PNEbVCns0INN4pHQCK1R1c5bkvwsxXC3u%2FU3cFbcbnapZWbiIiXVcB33x0%2BbgbOYOjvvpHYcqxDhZDFLZzc4oeYIB62iUry00oWsGOp7lH9tJ0LKaLBxfDscvvAtqK3oRVuZJGBjZMuEE87dIOralf%2F6wAe1mWK6SpgygPHEptXufFKnUzTutnIXTJrK8jFwU3Id1OgrEKpo%2BBQrk1GcaAsWBgwSZDneN5AgQHPE%2Bu0RVbdhA%2FhrDCIJTX0didztZg4HSnod%2BxAq3aZjqHrzfuPljcEWYM9bmDAse%2F4bRvTBGyo55BQRWZaEL6sBu7eBsGsgLuxfzKluD808%2BaxLcwA7YD3VQex5lkjqk5qqTKqkSA6xU6DBDOu3BKEZLjd%2BkpBbXPud%2BknB6vmeQyUrWGzR6yScUPFWv5NQkY4haBCw8CNXt2eUaS%2B%2BY9lsc9kM5LDj4CKJDHPjgwmMqrB4HEdXGydl0wIPGhaM6dvkOTBci4ldIp0s5WhutCEYIhH6QaWZE7i8jVOYXMCo5emjfwHIqwDfJEDhb866MgDwfwV4SCNa6b9XmFHvpZQzL36MhDJAU7OV4FG9ldMIC0tsMGOqUBWEZl5OyseYLY8A%2FHX7Nq5FjrkM%2Bjn%2B%2BanXV43OkTN7dgBREZtK7dZI4yamJlqfxWa%2BgMBNd54KYZa23SgDQrW8lFt67WSh7N8lAS86n%2F%2FLq%2FVLnGhFljRDrpzaUpCVgvIM186qLitpjRK%2BbVLay3h%2FIcGUU9I%2FcHIQUB8x66kB0QEk2TP9TLlaIrStJW1Uuu8dtfKJlunL46R%2BT0PY9Zl8jGQNFj&X-Amz-Signature=d66a01f273843174a5b2dc0e26b458838ac88ad7bee25a845c8019f373a1dd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCZZTVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrggCt%2FYj6flbQR3QlpNvwmdFwKgh%2FgLT1tUi7DxtKFgIgM79Db%2B%2B8lKd65Xo91Tpii8uraCzewJZWKpQbxOnLyJUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGRAd3mlCa8p49tRircA2sYbyEDNXyPBmKRPhkA0DSIPQ2b4nMc1gNQ46JapUwT86PNEbVCns0INN4pHQCK1R1c5bkvwsxXC3u%2FU3cFbcbnapZWbiIiXVcB33x0%2BbgbOYOjvvpHYcqxDhZDFLZzc4oeYIB62iUry00oWsGOp7lH9tJ0LKaLBxfDscvvAtqK3oRVuZJGBjZMuEE87dIOralf%2F6wAe1mWK6SpgygPHEptXufFKnUzTutnIXTJrK8jFwU3Id1OgrEKpo%2BBQrk1GcaAsWBgwSZDneN5AgQHPE%2Bu0RVbdhA%2FhrDCIJTX0didztZg4HSnod%2BxAq3aZjqHrzfuPljcEWYM9bmDAse%2F4bRvTBGyo55BQRWZaEL6sBu7eBsGsgLuxfzKluD808%2BaxLcwA7YD3VQex5lkjqk5qqTKqkSA6xU6DBDOu3BKEZLjd%2BkpBbXPud%2BknB6vmeQyUrWGzR6yScUPFWv5NQkY4haBCw8CNXt2eUaS%2B%2BY9lsc9kM5LDj4CKJDHPjgwmMqrB4HEdXGydl0wIPGhaM6dvkOTBci4ldIp0s5WhutCEYIhH6QaWZE7i8jVOYXMCo5emjfwHIqwDfJEDhb866MgDwfwV4SCNa6b9XmFHvpZQzL36MhDJAU7OV4FG9ldMIC0tsMGOqUBWEZl5OyseYLY8A%2FHX7Nq5FjrkM%2Bjn%2B%2BanXV43OkTN7dgBREZtK7dZI4yamJlqfxWa%2BgMBNd54KYZa23SgDQrW8lFt67WSh7N8lAS86n%2F%2FLq%2FVLnGhFljRDrpzaUpCVgvIM186qLitpjRK%2BbVLay3h%2FIcGUU9I%2FcHIQUB8x66kB0QEk2TP9TLlaIrStJW1Uuu8dtfKJlunL46R%2BT0PY9Zl8jGQNFj&X-Amz-Signature=06d072ef946043a25abe4997dd5428b6bcf44ad7a7d5ed0cc72eb0ffde41a3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCZZTVF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrggCt%2FYj6flbQR3QlpNvwmdFwKgh%2FgLT1tUi7DxtKFgIgM79Db%2B%2B8lKd65Xo91Tpii8uraCzewJZWKpQbxOnLyJUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGRAd3mlCa8p49tRircA2sYbyEDNXyPBmKRPhkA0DSIPQ2b4nMc1gNQ46JapUwT86PNEbVCns0INN4pHQCK1R1c5bkvwsxXC3u%2FU3cFbcbnapZWbiIiXVcB33x0%2BbgbOYOjvvpHYcqxDhZDFLZzc4oeYIB62iUry00oWsGOp7lH9tJ0LKaLBxfDscvvAtqK3oRVuZJGBjZMuEE87dIOralf%2F6wAe1mWK6SpgygPHEptXufFKnUzTutnIXTJrK8jFwU3Id1OgrEKpo%2BBQrk1GcaAsWBgwSZDneN5AgQHPE%2Bu0RVbdhA%2FhrDCIJTX0didztZg4HSnod%2BxAq3aZjqHrzfuPljcEWYM9bmDAse%2F4bRvTBGyo55BQRWZaEL6sBu7eBsGsgLuxfzKluD808%2BaxLcwA7YD3VQex5lkjqk5qqTKqkSA6xU6DBDOu3BKEZLjd%2BkpBbXPud%2BknB6vmeQyUrWGzR6yScUPFWv5NQkY4haBCw8CNXt2eUaS%2B%2BY9lsc9kM5LDj4CKJDHPjgwmMqrB4HEdXGydl0wIPGhaM6dvkOTBci4ldIp0s5WhutCEYIhH6QaWZE7i8jVOYXMCo5emjfwHIqwDfJEDhb866MgDwfwV4SCNa6b9XmFHvpZQzL36MhDJAU7OV4FG9ldMIC0tsMGOqUBWEZl5OyseYLY8A%2FHX7Nq5FjrkM%2Bjn%2B%2BanXV43OkTN7dgBREZtK7dZI4yamJlqfxWa%2BgMBNd54KYZa23SgDQrW8lFt67WSh7N8lAS86n%2F%2FLq%2FVLnGhFljRDrpzaUpCVgvIM186qLitpjRK%2BbVLay3h%2FIcGUU9I%2FcHIQUB8x66kB0QEk2TP9TLlaIrStJW1Uuu8dtfKJlunL46R%2BT0PY9Zl8jGQNFj&X-Amz-Signature=81881c8b25fb0778812e00655d03981e69ee80732aa7830770b8b2ee0d215213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
