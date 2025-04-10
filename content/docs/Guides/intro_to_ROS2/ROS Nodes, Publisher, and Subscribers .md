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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTMF5TD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCS358Fz%2Fc6zMMKjVX9y17kXYqRVyLkacNQn2MRppQBRQIgbTZLxG1UKCuOrGYD7Yb1g0xk3FD8pqiuV2uwOwfbTIQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkna6YqWyIQQi9OSSrcA1EXw3FmXjsHpR9jtfYIrJo5NNsLQl%2BsgSLSWFrKSVpATKeqYs9ZLe6YCHAW%2FYlLqx%2BAwjLQa2cjAwMzXdIb5wLH6i4n6Bd14NbShtahH8wX7Tt0YybVsKnac7hQarm5fk0iEBcLNHc53t6uyJbB8iJBp4SyzzPz8FL5owwDuFJtCNRAPNIlg7PoPA32msE04r6pVHs8j%2F3HCa%2FMD0D7HkKU5Rt0oDx08RMt156cTqOsGm%2B%2BKrGbGW8mNVzcz6DpTCT3JJ2Uoc8rmyqgTcwlDSBUYoFZ2%2B3WwjY6w5%2FA4%2FBM1jyTC3O4QLAP%2B1It2uO2WikB63CdJ%2BfZVau7ApgFKm%2FzX6owYMr007o8WgcFek51WQq8kHqWAkcE6zqEgvL0MZvnDnUWpU3pKtHm0%2Bot%2FKm4v2LtBAcrJeIlpwJ1%2B6iYnMzWHeaJtqTmKiNAJs8lL6jTVixcuhTTepcGyRnoCo37P4qYgQOnFepVNBdU8K6u%2FhygNMUdNahSGePOCPycEBVxyuAAd%2Bui9J3NGrMXwmk3wcIchfSiMWTBxm58kjyQnxm4%2FYw8rPccdQ1lfcIqkXrAWvLNEvr%2FQm5Pw3f2VwVCBiVB%2B768X0rVGXdzkIVMv618XrJmU5OrnYN2MKux4L8GOqUBWqljSGFmBU5E28G0nXsmx7Tbwo2BeGVH5lekQubt4UjUy8ZxIwlDmMBHblZ4lm%2F4L4kRIsjNlIrCMBKsoFdlRSOCTH%2FRM%2BbLnn63GJU9fcPebpXOADQsD6LwzHiRnYnUle5U9apsHQuxd5cu8Cg7470gNAFYYa8r%2FDfDdav5AIHia423ftlT9YK7LaiRnGm0Q7rbL62gMEcX0tt52yieHQ9fPXaC&X-Amz-Signature=7a0555ea465cc9aee4f83ce8ac1d1498391d6bc147019d0d702e22f70441bee1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTMF5TD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCS358Fz%2Fc6zMMKjVX9y17kXYqRVyLkacNQn2MRppQBRQIgbTZLxG1UKCuOrGYD7Yb1g0xk3FD8pqiuV2uwOwfbTIQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkna6YqWyIQQi9OSSrcA1EXw3FmXjsHpR9jtfYIrJo5NNsLQl%2BsgSLSWFrKSVpATKeqYs9ZLe6YCHAW%2FYlLqx%2BAwjLQa2cjAwMzXdIb5wLH6i4n6Bd14NbShtahH8wX7Tt0YybVsKnac7hQarm5fk0iEBcLNHc53t6uyJbB8iJBp4SyzzPz8FL5owwDuFJtCNRAPNIlg7PoPA32msE04r6pVHs8j%2F3HCa%2FMD0D7HkKU5Rt0oDx08RMt156cTqOsGm%2B%2BKrGbGW8mNVzcz6DpTCT3JJ2Uoc8rmyqgTcwlDSBUYoFZ2%2B3WwjY6w5%2FA4%2FBM1jyTC3O4QLAP%2B1It2uO2WikB63CdJ%2BfZVau7ApgFKm%2FzX6owYMr007o8WgcFek51WQq8kHqWAkcE6zqEgvL0MZvnDnUWpU3pKtHm0%2Bot%2FKm4v2LtBAcrJeIlpwJ1%2B6iYnMzWHeaJtqTmKiNAJs8lL6jTVixcuhTTepcGyRnoCo37P4qYgQOnFepVNBdU8K6u%2FhygNMUdNahSGePOCPycEBVxyuAAd%2Bui9J3NGrMXwmk3wcIchfSiMWTBxm58kjyQnxm4%2FYw8rPccdQ1lfcIqkXrAWvLNEvr%2FQm5Pw3f2VwVCBiVB%2B768X0rVGXdzkIVMv618XrJmU5OrnYN2MKux4L8GOqUBWqljSGFmBU5E28G0nXsmx7Tbwo2BeGVH5lekQubt4UjUy8ZxIwlDmMBHblZ4lm%2F4L4kRIsjNlIrCMBKsoFdlRSOCTH%2FRM%2BbLnn63GJU9fcPebpXOADQsD6LwzHiRnYnUle5U9apsHQuxd5cu8Cg7470gNAFYYa8r%2FDfDdav5AIHia423ftlT9YK7LaiRnGm0Q7rbL62gMEcX0tt52yieHQ9fPXaC&X-Amz-Signature=ac7ee0c45b365ea72e2db105976cde268c4df1a5413a12202bc2d8b8d0e2128c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTMF5TD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCS358Fz%2Fc6zMMKjVX9y17kXYqRVyLkacNQn2MRppQBRQIgbTZLxG1UKCuOrGYD7Yb1g0xk3FD8pqiuV2uwOwfbTIQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkna6YqWyIQQi9OSSrcA1EXw3FmXjsHpR9jtfYIrJo5NNsLQl%2BsgSLSWFrKSVpATKeqYs9ZLe6YCHAW%2FYlLqx%2BAwjLQa2cjAwMzXdIb5wLH6i4n6Bd14NbShtahH8wX7Tt0YybVsKnac7hQarm5fk0iEBcLNHc53t6uyJbB8iJBp4SyzzPz8FL5owwDuFJtCNRAPNIlg7PoPA32msE04r6pVHs8j%2F3HCa%2FMD0D7HkKU5Rt0oDx08RMt156cTqOsGm%2B%2BKrGbGW8mNVzcz6DpTCT3JJ2Uoc8rmyqgTcwlDSBUYoFZ2%2B3WwjY6w5%2FA4%2FBM1jyTC3O4QLAP%2B1It2uO2WikB63CdJ%2BfZVau7ApgFKm%2FzX6owYMr007o8WgcFek51WQq8kHqWAkcE6zqEgvL0MZvnDnUWpU3pKtHm0%2Bot%2FKm4v2LtBAcrJeIlpwJ1%2B6iYnMzWHeaJtqTmKiNAJs8lL6jTVixcuhTTepcGyRnoCo37P4qYgQOnFepVNBdU8K6u%2FhygNMUdNahSGePOCPycEBVxyuAAd%2Bui9J3NGrMXwmk3wcIchfSiMWTBxm58kjyQnxm4%2FYw8rPccdQ1lfcIqkXrAWvLNEvr%2FQm5Pw3f2VwVCBiVB%2B768X0rVGXdzkIVMv618XrJmU5OrnYN2MKux4L8GOqUBWqljSGFmBU5E28G0nXsmx7Tbwo2BeGVH5lekQubt4UjUy8ZxIwlDmMBHblZ4lm%2F4L4kRIsjNlIrCMBKsoFdlRSOCTH%2FRM%2BbLnn63GJU9fcPebpXOADQsD6LwzHiRnYnUle5U9apsHQuxd5cu8Cg7470gNAFYYa8r%2FDfDdav5AIHia423ftlT9YK7LaiRnGm0Q7rbL62gMEcX0tt52yieHQ9fPXaC&X-Amz-Signature=d66234b66fc227332cfdca816d70edd6d4b542005a91d3ee57df14640dc8f248&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTMF5TD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCS358Fz%2Fc6zMMKjVX9y17kXYqRVyLkacNQn2MRppQBRQIgbTZLxG1UKCuOrGYD7Yb1g0xk3FD8pqiuV2uwOwfbTIQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkna6YqWyIQQi9OSSrcA1EXw3FmXjsHpR9jtfYIrJo5NNsLQl%2BsgSLSWFrKSVpATKeqYs9ZLe6YCHAW%2FYlLqx%2BAwjLQa2cjAwMzXdIb5wLH6i4n6Bd14NbShtahH8wX7Tt0YybVsKnac7hQarm5fk0iEBcLNHc53t6uyJbB8iJBp4SyzzPz8FL5owwDuFJtCNRAPNIlg7PoPA32msE04r6pVHs8j%2F3HCa%2FMD0D7HkKU5Rt0oDx08RMt156cTqOsGm%2B%2BKrGbGW8mNVzcz6DpTCT3JJ2Uoc8rmyqgTcwlDSBUYoFZ2%2B3WwjY6w5%2FA4%2FBM1jyTC3O4QLAP%2B1It2uO2WikB63CdJ%2BfZVau7ApgFKm%2FzX6owYMr007o8WgcFek51WQq8kHqWAkcE6zqEgvL0MZvnDnUWpU3pKtHm0%2Bot%2FKm4v2LtBAcrJeIlpwJ1%2B6iYnMzWHeaJtqTmKiNAJs8lL6jTVixcuhTTepcGyRnoCo37P4qYgQOnFepVNBdU8K6u%2FhygNMUdNahSGePOCPycEBVxyuAAd%2Bui9J3NGrMXwmk3wcIchfSiMWTBxm58kjyQnxm4%2FYw8rPccdQ1lfcIqkXrAWvLNEvr%2FQm5Pw3f2VwVCBiVB%2B768X0rVGXdzkIVMv618XrJmU5OrnYN2MKux4L8GOqUBWqljSGFmBU5E28G0nXsmx7Tbwo2BeGVH5lekQubt4UjUy8ZxIwlDmMBHblZ4lm%2F4L4kRIsjNlIrCMBKsoFdlRSOCTH%2FRM%2BbLnn63GJU9fcPebpXOADQsD6LwzHiRnYnUle5U9apsHQuxd5cu8Cg7470gNAFYYa8r%2FDfDdav5AIHia423ftlT9YK7LaiRnGm0Q7rbL62gMEcX0tt52yieHQ9fPXaC&X-Amz-Signature=2ada09ecabb1ec943bbaf54ddd1bc67569775361887a81de8c73e000ebf9380e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTMF5TD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCS358Fz%2Fc6zMMKjVX9y17kXYqRVyLkacNQn2MRppQBRQIgbTZLxG1UKCuOrGYD7Yb1g0xk3FD8pqiuV2uwOwfbTIQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkna6YqWyIQQi9OSSrcA1EXw3FmXjsHpR9jtfYIrJo5NNsLQl%2BsgSLSWFrKSVpATKeqYs9ZLe6YCHAW%2FYlLqx%2BAwjLQa2cjAwMzXdIb5wLH6i4n6Bd14NbShtahH8wX7Tt0YybVsKnac7hQarm5fk0iEBcLNHc53t6uyJbB8iJBp4SyzzPz8FL5owwDuFJtCNRAPNIlg7PoPA32msE04r6pVHs8j%2F3HCa%2FMD0D7HkKU5Rt0oDx08RMt156cTqOsGm%2B%2BKrGbGW8mNVzcz6DpTCT3JJ2Uoc8rmyqgTcwlDSBUYoFZ2%2B3WwjY6w5%2FA4%2FBM1jyTC3O4QLAP%2B1It2uO2WikB63CdJ%2BfZVau7ApgFKm%2FzX6owYMr007o8WgcFek51WQq8kHqWAkcE6zqEgvL0MZvnDnUWpU3pKtHm0%2Bot%2FKm4v2LtBAcrJeIlpwJ1%2B6iYnMzWHeaJtqTmKiNAJs8lL6jTVixcuhTTepcGyRnoCo37P4qYgQOnFepVNBdU8K6u%2FhygNMUdNahSGePOCPycEBVxyuAAd%2Bui9J3NGrMXwmk3wcIchfSiMWTBxm58kjyQnxm4%2FYw8rPccdQ1lfcIqkXrAWvLNEvr%2FQm5Pw3f2VwVCBiVB%2B768X0rVGXdzkIVMv618XrJmU5OrnYN2MKux4L8GOqUBWqljSGFmBU5E28G0nXsmx7Tbwo2BeGVH5lekQubt4UjUy8ZxIwlDmMBHblZ4lm%2F4L4kRIsjNlIrCMBKsoFdlRSOCTH%2FRM%2BbLnn63GJU9fcPebpXOADQsD6LwzHiRnYnUle5U9apsHQuxd5cu8Cg7470gNAFYYa8r%2FDfDdav5AIHia423ftlT9YK7LaiRnGm0Q7rbL62gMEcX0tt52yieHQ9fPXaC&X-Amz-Signature=be1d06304c0aabf0fba2d7a8b81ff0e504850030b6d5ec63877c00f21a848f89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTMF5TD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCS358Fz%2Fc6zMMKjVX9y17kXYqRVyLkacNQn2MRppQBRQIgbTZLxG1UKCuOrGYD7Yb1g0xk3FD8pqiuV2uwOwfbTIQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkna6YqWyIQQi9OSSrcA1EXw3FmXjsHpR9jtfYIrJo5NNsLQl%2BsgSLSWFrKSVpATKeqYs9ZLe6YCHAW%2FYlLqx%2BAwjLQa2cjAwMzXdIb5wLH6i4n6Bd14NbShtahH8wX7Tt0YybVsKnac7hQarm5fk0iEBcLNHc53t6uyJbB8iJBp4SyzzPz8FL5owwDuFJtCNRAPNIlg7PoPA32msE04r6pVHs8j%2F3HCa%2FMD0D7HkKU5Rt0oDx08RMt156cTqOsGm%2B%2BKrGbGW8mNVzcz6DpTCT3JJ2Uoc8rmyqgTcwlDSBUYoFZ2%2B3WwjY6w5%2FA4%2FBM1jyTC3O4QLAP%2B1It2uO2WikB63CdJ%2BfZVau7ApgFKm%2FzX6owYMr007o8WgcFek51WQq8kHqWAkcE6zqEgvL0MZvnDnUWpU3pKtHm0%2Bot%2FKm4v2LtBAcrJeIlpwJ1%2B6iYnMzWHeaJtqTmKiNAJs8lL6jTVixcuhTTepcGyRnoCo37P4qYgQOnFepVNBdU8K6u%2FhygNMUdNahSGePOCPycEBVxyuAAd%2Bui9J3NGrMXwmk3wcIchfSiMWTBxm58kjyQnxm4%2FYw8rPccdQ1lfcIqkXrAWvLNEvr%2FQm5Pw3f2VwVCBiVB%2B768X0rVGXdzkIVMv618XrJmU5OrnYN2MKux4L8GOqUBWqljSGFmBU5E28G0nXsmx7Tbwo2BeGVH5lekQubt4UjUy8ZxIwlDmMBHblZ4lm%2F4L4kRIsjNlIrCMBKsoFdlRSOCTH%2FRM%2BbLnn63GJU9fcPebpXOADQsD6LwzHiRnYnUle5U9apsHQuxd5cu8Cg7470gNAFYYa8r%2FDfDdav5AIHia423ftlT9YK7LaiRnGm0Q7rbL62gMEcX0tt52yieHQ9fPXaC&X-Amz-Signature=bfe4621d0beb2efa6867c64620503a6ec918c2752c20f978b5e7c5b0277f9279&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTMF5TD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCS358Fz%2Fc6zMMKjVX9y17kXYqRVyLkacNQn2MRppQBRQIgbTZLxG1UKCuOrGYD7Yb1g0xk3FD8pqiuV2uwOwfbTIQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkna6YqWyIQQi9OSSrcA1EXw3FmXjsHpR9jtfYIrJo5NNsLQl%2BsgSLSWFrKSVpATKeqYs9ZLe6YCHAW%2FYlLqx%2BAwjLQa2cjAwMzXdIb5wLH6i4n6Bd14NbShtahH8wX7Tt0YybVsKnac7hQarm5fk0iEBcLNHc53t6uyJbB8iJBp4SyzzPz8FL5owwDuFJtCNRAPNIlg7PoPA32msE04r6pVHs8j%2F3HCa%2FMD0D7HkKU5Rt0oDx08RMt156cTqOsGm%2B%2BKrGbGW8mNVzcz6DpTCT3JJ2Uoc8rmyqgTcwlDSBUYoFZ2%2B3WwjY6w5%2FA4%2FBM1jyTC3O4QLAP%2B1It2uO2WikB63CdJ%2BfZVau7ApgFKm%2FzX6owYMr007o8WgcFek51WQq8kHqWAkcE6zqEgvL0MZvnDnUWpU3pKtHm0%2Bot%2FKm4v2LtBAcrJeIlpwJ1%2B6iYnMzWHeaJtqTmKiNAJs8lL6jTVixcuhTTepcGyRnoCo37P4qYgQOnFepVNBdU8K6u%2FhygNMUdNahSGePOCPycEBVxyuAAd%2Bui9J3NGrMXwmk3wcIchfSiMWTBxm58kjyQnxm4%2FYw8rPccdQ1lfcIqkXrAWvLNEvr%2FQm5Pw3f2VwVCBiVB%2B768X0rVGXdzkIVMv618XrJmU5OrnYN2MKux4L8GOqUBWqljSGFmBU5E28G0nXsmx7Tbwo2BeGVH5lekQubt4UjUy8ZxIwlDmMBHblZ4lm%2F4L4kRIsjNlIrCMBKsoFdlRSOCTH%2FRM%2BbLnn63GJU9fcPebpXOADQsD6LwzHiRnYnUle5U9apsHQuxd5cu8Cg7470gNAFYYa8r%2FDfDdav5AIHia423ftlT9YK7LaiRnGm0Q7rbL62gMEcX0tt52yieHQ9fPXaC&X-Amz-Signature=58adeb1a8fcfe8000d4d628f6f95c7c158251191bea51973e0396ff5e806b998&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTMF5TD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCS358Fz%2Fc6zMMKjVX9y17kXYqRVyLkacNQn2MRppQBRQIgbTZLxG1UKCuOrGYD7Yb1g0xk3FD8pqiuV2uwOwfbTIQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkna6YqWyIQQi9OSSrcA1EXw3FmXjsHpR9jtfYIrJo5NNsLQl%2BsgSLSWFrKSVpATKeqYs9ZLe6YCHAW%2FYlLqx%2BAwjLQa2cjAwMzXdIb5wLH6i4n6Bd14NbShtahH8wX7Tt0YybVsKnac7hQarm5fk0iEBcLNHc53t6uyJbB8iJBp4SyzzPz8FL5owwDuFJtCNRAPNIlg7PoPA32msE04r6pVHs8j%2F3HCa%2FMD0D7HkKU5Rt0oDx08RMt156cTqOsGm%2B%2BKrGbGW8mNVzcz6DpTCT3JJ2Uoc8rmyqgTcwlDSBUYoFZ2%2B3WwjY6w5%2FA4%2FBM1jyTC3O4QLAP%2B1It2uO2WikB63CdJ%2BfZVau7ApgFKm%2FzX6owYMr007o8WgcFek51WQq8kHqWAkcE6zqEgvL0MZvnDnUWpU3pKtHm0%2Bot%2FKm4v2LtBAcrJeIlpwJ1%2B6iYnMzWHeaJtqTmKiNAJs8lL6jTVixcuhTTepcGyRnoCo37P4qYgQOnFepVNBdU8K6u%2FhygNMUdNahSGePOCPycEBVxyuAAd%2Bui9J3NGrMXwmk3wcIchfSiMWTBxm58kjyQnxm4%2FYw8rPccdQ1lfcIqkXrAWvLNEvr%2FQm5Pw3f2VwVCBiVB%2B768X0rVGXdzkIVMv618XrJmU5OrnYN2MKux4L8GOqUBWqljSGFmBU5E28G0nXsmx7Tbwo2BeGVH5lekQubt4UjUy8ZxIwlDmMBHblZ4lm%2F4L4kRIsjNlIrCMBKsoFdlRSOCTH%2FRM%2BbLnn63GJU9fcPebpXOADQsD6LwzHiRnYnUle5U9apsHQuxd5cu8Cg7470gNAFYYa8r%2FDfDdav5AIHia423ftlT9YK7LaiRnGm0Q7rbL62gMEcX0tt52yieHQ9fPXaC&X-Amz-Signature=69c82432736f52b71c963aecfb7303d158031e74958e74645ad04e9385a5ae59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
