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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAQWH34%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCwFrPK6U7AnXIMYrdmNc3PqPy3bQAJg36pQk6v%2B4EwBQIgLcZKwlvqc3h6wKgzNYE5aVl0KwXfxzn498iEtFl%2BvpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKi4kW719se9XByZSrcA3lu%2BH1cVTHUtyxLEN4pntnbjzbXKXFEerstZSpnc6lFGQwaO44rpGcbgUJQNrvr5gryGnAeqNlECnKXZsicJdOg8brnerrmX9iKOXfVquStU3MGb3I15FDjgwE6308aP6k56vosqxIX9r2NymTqUPW6zH8TOYXjwDQEOALBOYWTC08iHfo5U7CwHor1JuPi8fi2EI%2FKvkPidsKpLf68pHozVLkmuWjqEvB9%2F7fgF2Dx1pUs%2FhJ3MQy0xYYueLi7e9iDRfaRACUUkbsHx%2BiAyuXjS05Rl6D1h0R9VM2YollBuyOpdbkb4Xt0YBIP3IgsE%2FuvGYJRIV05O8bJJ81mtsyfHrm41rxf8Z8fcgPoIZSF4%2FfigVtbHE6oyvil3p7gmf3ye%2BzAixDFwRBDouVPNQ%2BEMXi0OprIilSjdYHIzBNak2p2zVdwWFjj0rD8a8mcDjFvet7zDxacOlJJwCj2A%2FmVtdLiSp7q2YVddLw%2B2cUveeAFs0KR8bcxLt%2BkWNVZNIPUeYfqeIdoAjRTblUH%2FfrIEPERC7B5MOTJdsQuDR%2BzqX4VUYwkmYXyzWXq1ykNPdizMkTUsMSNJnnxQEvcW3RFLUfFuuBEo4j4l8e922RMhcqoaNIjkU0zkKWQMPr3isEGOqUBvHDbETBJPesoJbKcVWEGYQpfyfoxIkigArBCoNE2Sst7CwjMOslUQR1EYNukwdhxLdeBcQESmZcbNWo9zuydWinjxTtt31OOfuXbGCdNGTo9rMAqr38SOzTML4YCrHtgfwxHMJOOCemQWj1Cn65UtTWyVGw%2FAhuudRVk4AGUQjTiTanE0q6cfkO27afIKpmX5%2FOuV2KRS9J3%2BNtCj940XggyOUcu&X-Amz-Signature=26b5ab08ea3d3ca0c913b2e15877bccac15f3fd24d4e3937fc7508903c2a0f57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAQWH34%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCwFrPK6U7AnXIMYrdmNc3PqPy3bQAJg36pQk6v%2B4EwBQIgLcZKwlvqc3h6wKgzNYE5aVl0KwXfxzn498iEtFl%2BvpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKi4kW719se9XByZSrcA3lu%2BH1cVTHUtyxLEN4pntnbjzbXKXFEerstZSpnc6lFGQwaO44rpGcbgUJQNrvr5gryGnAeqNlECnKXZsicJdOg8brnerrmX9iKOXfVquStU3MGb3I15FDjgwE6308aP6k56vosqxIX9r2NymTqUPW6zH8TOYXjwDQEOALBOYWTC08iHfo5U7CwHor1JuPi8fi2EI%2FKvkPidsKpLf68pHozVLkmuWjqEvB9%2F7fgF2Dx1pUs%2FhJ3MQy0xYYueLi7e9iDRfaRACUUkbsHx%2BiAyuXjS05Rl6D1h0R9VM2YollBuyOpdbkb4Xt0YBIP3IgsE%2FuvGYJRIV05O8bJJ81mtsyfHrm41rxf8Z8fcgPoIZSF4%2FfigVtbHE6oyvil3p7gmf3ye%2BzAixDFwRBDouVPNQ%2BEMXi0OprIilSjdYHIzBNak2p2zVdwWFjj0rD8a8mcDjFvet7zDxacOlJJwCj2A%2FmVtdLiSp7q2YVddLw%2B2cUveeAFs0KR8bcxLt%2BkWNVZNIPUeYfqeIdoAjRTblUH%2FfrIEPERC7B5MOTJdsQuDR%2BzqX4VUYwkmYXyzWXq1ykNPdizMkTUsMSNJnnxQEvcW3RFLUfFuuBEo4j4l8e922RMhcqoaNIjkU0zkKWQMPr3isEGOqUBvHDbETBJPesoJbKcVWEGYQpfyfoxIkigArBCoNE2Sst7CwjMOslUQR1EYNukwdhxLdeBcQESmZcbNWo9zuydWinjxTtt31OOfuXbGCdNGTo9rMAqr38SOzTML4YCrHtgfwxHMJOOCemQWj1Cn65UtTWyVGw%2FAhuudRVk4AGUQjTiTanE0q6cfkO27afIKpmX5%2FOuV2KRS9J3%2BNtCj940XggyOUcu&X-Amz-Signature=e62f81e79313a19ef60d0e9314e371b4308b8d9280f5d09a19e87e9b5946bd7d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAQWH34%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCwFrPK6U7AnXIMYrdmNc3PqPy3bQAJg36pQk6v%2B4EwBQIgLcZKwlvqc3h6wKgzNYE5aVl0KwXfxzn498iEtFl%2BvpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKi4kW719se9XByZSrcA3lu%2BH1cVTHUtyxLEN4pntnbjzbXKXFEerstZSpnc6lFGQwaO44rpGcbgUJQNrvr5gryGnAeqNlECnKXZsicJdOg8brnerrmX9iKOXfVquStU3MGb3I15FDjgwE6308aP6k56vosqxIX9r2NymTqUPW6zH8TOYXjwDQEOALBOYWTC08iHfo5U7CwHor1JuPi8fi2EI%2FKvkPidsKpLf68pHozVLkmuWjqEvB9%2F7fgF2Dx1pUs%2FhJ3MQy0xYYueLi7e9iDRfaRACUUkbsHx%2BiAyuXjS05Rl6D1h0R9VM2YollBuyOpdbkb4Xt0YBIP3IgsE%2FuvGYJRIV05O8bJJ81mtsyfHrm41rxf8Z8fcgPoIZSF4%2FfigVtbHE6oyvil3p7gmf3ye%2BzAixDFwRBDouVPNQ%2BEMXi0OprIilSjdYHIzBNak2p2zVdwWFjj0rD8a8mcDjFvet7zDxacOlJJwCj2A%2FmVtdLiSp7q2YVddLw%2B2cUveeAFs0KR8bcxLt%2BkWNVZNIPUeYfqeIdoAjRTblUH%2FfrIEPERC7B5MOTJdsQuDR%2BzqX4VUYwkmYXyzWXq1ykNPdizMkTUsMSNJnnxQEvcW3RFLUfFuuBEo4j4l8e922RMhcqoaNIjkU0zkKWQMPr3isEGOqUBvHDbETBJPesoJbKcVWEGYQpfyfoxIkigArBCoNE2Sst7CwjMOslUQR1EYNukwdhxLdeBcQESmZcbNWo9zuydWinjxTtt31OOfuXbGCdNGTo9rMAqr38SOzTML4YCrHtgfwxHMJOOCemQWj1Cn65UtTWyVGw%2FAhuudRVk4AGUQjTiTanE0q6cfkO27afIKpmX5%2FOuV2KRS9J3%2BNtCj940XggyOUcu&X-Amz-Signature=f4c8d331c886028e655493d6fe432c434ae9c7a146456197e5b74fe16eabf68f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAQWH34%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCwFrPK6U7AnXIMYrdmNc3PqPy3bQAJg36pQk6v%2B4EwBQIgLcZKwlvqc3h6wKgzNYE5aVl0KwXfxzn498iEtFl%2BvpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKi4kW719se9XByZSrcA3lu%2BH1cVTHUtyxLEN4pntnbjzbXKXFEerstZSpnc6lFGQwaO44rpGcbgUJQNrvr5gryGnAeqNlECnKXZsicJdOg8brnerrmX9iKOXfVquStU3MGb3I15FDjgwE6308aP6k56vosqxIX9r2NymTqUPW6zH8TOYXjwDQEOALBOYWTC08iHfo5U7CwHor1JuPi8fi2EI%2FKvkPidsKpLf68pHozVLkmuWjqEvB9%2F7fgF2Dx1pUs%2FhJ3MQy0xYYueLi7e9iDRfaRACUUkbsHx%2BiAyuXjS05Rl6D1h0R9VM2YollBuyOpdbkb4Xt0YBIP3IgsE%2FuvGYJRIV05O8bJJ81mtsyfHrm41rxf8Z8fcgPoIZSF4%2FfigVtbHE6oyvil3p7gmf3ye%2BzAixDFwRBDouVPNQ%2BEMXi0OprIilSjdYHIzBNak2p2zVdwWFjj0rD8a8mcDjFvet7zDxacOlJJwCj2A%2FmVtdLiSp7q2YVddLw%2B2cUveeAFs0KR8bcxLt%2BkWNVZNIPUeYfqeIdoAjRTblUH%2FfrIEPERC7B5MOTJdsQuDR%2BzqX4VUYwkmYXyzWXq1ykNPdizMkTUsMSNJnnxQEvcW3RFLUfFuuBEo4j4l8e922RMhcqoaNIjkU0zkKWQMPr3isEGOqUBvHDbETBJPesoJbKcVWEGYQpfyfoxIkigArBCoNE2Sst7CwjMOslUQR1EYNukwdhxLdeBcQESmZcbNWo9zuydWinjxTtt31OOfuXbGCdNGTo9rMAqr38SOzTML4YCrHtgfwxHMJOOCemQWj1Cn65UtTWyVGw%2FAhuudRVk4AGUQjTiTanE0q6cfkO27afIKpmX5%2FOuV2KRS9J3%2BNtCj940XggyOUcu&X-Amz-Signature=3d82d6fa5442326dfa98a9483b746e79dab26feae0cb7898bbdbe98820988644&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAQWH34%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCwFrPK6U7AnXIMYrdmNc3PqPy3bQAJg36pQk6v%2B4EwBQIgLcZKwlvqc3h6wKgzNYE5aVl0KwXfxzn498iEtFl%2BvpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKi4kW719se9XByZSrcA3lu%2BH1cVTHUtyxLEN4pntnbjzbXKXFEerstZSpnc6lFGQwaO44rpGcbgUJQNrvr5gryGnAeqNlECnKXZsicJdOg8brnerrmX9iKOXfVquStU3MGb3I15FDjgwE6308aP6k56vosqxIX9r2NymTqUPW6zH8TOYXjwDQEOALBOYWTC08iHfo5U7CwHor1JuPi8fi2EI%2FKvkPidsKpLf68pHozVLkmuWjqEvB9%2F7fgF2Dx1pUs%2FhJ3MQy0xYYueLi7e9iDRfaRACUUkbsHx%2BiAyuXjS05Rl6D1h0R9VM2YollBuyOpdbkb4Xt0YBIP3IgsE%2FuvGYJRIV05O8bJJ81mtsyfHrm41rxf8Z8fcgPoIZSF4%2FfigVtbHE6oyvil3p7gmf3ye%2BzAixDFwRBDouVPNQ%2BEMXi0OprIilSjdYHIzBNak2p2zVdwWFjj0rD8a8mcDjFvet7zDxacOlJJwCj2A%2FmVtdLiSp7q2YVddLw%2B2cUveeAFs0KR8bcxLt%2BkWNVZNIPUeYfqeIdoAjRTblUH%2FfrIEPERC7B5MOTJdsQuDR%2BzqX4VUYwkmYXyzWXq1ykNPdizMkTUsMSNJnnxQEvcW3RFLUfFuuBEo4j4l8e922RMhcqoaNIjkU0zkKWQMPr3isEGOqUBvHDbETBJPesoJbKcVWEGYQpfyfoxIkigArBCoNE2Sst7CwjMOslUQR1EYNukwdhxLdeBcQESmZcbNWo9zuydWinjxTtt31OOfuXbGCdNGTo9rMAqr38SOzTML4YCrHtgfwxHMJOOCemQWj1Cn65UtTWyVGw%2FAhuudRVk4AGUQjTiTanE0q6cfkO27afIKpmX5%2FOuV2KRS9J3%2BNtCj940XggyOUcu&X-Amz-Signature=d782f8d82e4eb80dbc773b72f211f9e606bb57a7b5c9c706fefcc44cedb2e08e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAQWH34%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCwFrPK6U7AnXIMYrdmNc3PqPy3bQAJg36pQk6v%2B4EwBQIgLcZKwlvqc3h6wKgzNYE5aVl0KwXfxzn498iEtFl%2BvpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKi4kW719se9XByZSrcA3lu%2BH1cVTHUtyxLEN4pntnbjzbXKXFEerstZSpnc6lFGQwaO44rpGcbgUJQNrvr5gryGnAeqNlECnKXZsicJdOg8brnerrmX9iKOXfVquStU3MGb3I15FDjgwE6308aP6k56vosqxIX9r2NymTqUPW6zH8TOYXjwDQEOALBOYWTC08iHfo5U7CwHor1JuPi8fi2EI%2FKvkPidsKpLf68pHozVLkmuWjqEvB9%2F7fgF2Dx1pUs%2FhJ3MQy0xYYueLi7e9iDRfaRACUUkbsHx%2BiAyuXjS05Rl6D1h0R9VM2YollBuyOpdbkb4Xt0YBIP3IgsE%2FuvGYJRIV05O8bJJ81mtsyfHrm41rxf8Z8fcgPoIZSF4%2FfigVtbHE6oyvil3p7gmf3ye%2BzAixDFwRBDouVPNQ%2BEMXi0OprIilSjdYHIzBNak2p2zVdwWFjj0rD8a8mcDjFvet7zDxacOlJJwCj2A%2FmVtdLiSp7q2YVddLw%2B2cUveeAFs0KR8bcxLt%2BkWNVZNIPUeYfqeIdoAjRTblUH%2FfrIEPERC7B5MOTJdsQuDR%2BzqX4VUYwkmYXyzWXq1ykNPdizMkTUsMSNJnnxQEvcW3RFLUfFuuBEo4j4l8e922RMhcqoaNIjkU0zkKWQMPr3isEGOqUBvHDbETBJPesoJbKcVWEGYQpfyfoxIkigArBCoNE2Sst7CwjMOslUQR1EYNukwdhxLdeBcQESmZcbNWo9zuydWinjxTtt31OOfuXbGCdNGTo9rMAqr38SOzTML4YCrHtgfwxHMJOOCemQWj1Cn65UtTWyVGw%2FAhuudRVk4AGUQjTiTanE0q6cfkO27afIKpmX5%2FOuV2KRS9J3%2BNtCj940XggyOUcu&X-Amz-Signature=b07acfa956112a89b618657c0393471c5900dda0cbb6b0ae5ddfb541b6ca10a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAQWH34%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCwFrPK6U7AnXIMYrdmNc3PqPy3bQAJg36pQk6v%2B4EwBQIgLcZKwlvqc3h6wKgzNYE5aVl0KwXfxzn498iEtFl%2BvpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKi4kW719se9XByZSrcA3lu%2BH1cVTHUtyxLEN4pntnbjzbXKXFEerstZSpnc6lFGQwaO44rpGcbgUJQNrvr5gryGnAeqNlECnKXZsicJdOg8brnerrmX9iKOXfVquStU3MGb3I15FDjgwE6308aP6k56vosqxIX9r2NymTqUPW6zH8TOYXjwDQEOALBOYWTC08iHfo5U7CwHor1JuPi8fi2EI%2FKvkPidsKpLf68pHozVLkmuWjqEvB9%2F7fgF2Dx1pUs%2FhJ3MQy0xYYueLi7e9iDRfaRACUUkbsHx%2BiAyuXjS05Rl6D1h0R9VM2YollBuyOpdbkb4Xt0YBIP3IgsE%2FuvGYJRIV05O8bJJ81mtsyfHrm41rxf8Z8fcgPoIZSF4%2FfigVtbHE6oyvil3p7gmf3ye%2BzAixDFwRBDouVPNQ%2BEMXi0OprIilSjdYHIzBNak2p2zVdwWFjj0rD8a8mcDjFvet7zDxacOlJJwCj2A%2FmVtdLiSp7q2YVddLw%2B2cUveeAFs0KR8bcxLt%2BkWNVZNIPUeYfqeIdoAjRTblUH%2FfrIEPERC7B5MOTJdsQuDR%2BzqX4VUYwkmYXyzWXq1ykNPdizMkTUsMSNJnnxQEvcW3RFLUfFuuBEo4j4l8e922RMhcqoaNIjkU0zkKWQMPr3isEGOqUBvHDbETBJPesoJbKcVWEGYQpfyfoxIkigArBCoNE2Sst7CwjMOslUQR1EYNukwdhxLdeBcQESmZcbNWo9zuydWinjxTtt31OOfuXbGCdNGTo9rMAqr38SOzTML4YCrHtgfwxHMJOOCemQWj1Cn65UtTWyVGw%2FAhuudRVk4AGUQjTiTanE0q6cfkO27afIKpmX5%2FOuV2KRS9J3%2BNtCj940XggyOUcu&X-Amz-Signature=8602abc38925346ac09401c1aeb3b69a54384e69f64e9ddb240a91b30c38f42f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAQWH34%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCwFrPK6U7AnXIMYrdmNc3PqPy3bQAJg36pQk6v%2B4EwBQIgLcZKwlvqc3h6wKgzNYE5aVl0KwXfxzn498iEtFl%2BvpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKi4kW719se9XByZSrcA3lu%2BH1cVTHUtyxLEN4pntnbjzbXKXFEerstZSpnc6lFGQwaO44rpGcbgUJQNrvr5gryGnAeqNlECnKXZsicJdOg8brnerrmX9iKOXfVquStU3MGb3I15FDjgwE6308aP6k56vosqxIX9r2NymTqUPW6zH8TOYXjwDQEOALBOYWTC08iHfo5U7CwHor1JuPi8fi2EI%2FKvkPidsKpLf68pHozVLkmuWjqEvB9%2F7fgF2Dx1pUs%2FhJ3MQy0xYYueLi7e9iDRfaRACUUkbsHx%2BiAyuXjS05Rl6D1h0R9VM2YollBuyOpdbkb4Xt0YBIP3IgsE%2FuvGYJRIV05O8bJJ81mtsyfHrm41rxf8Z8fcgPoIZSF4%2FfigVtbHE6oyvil3p7gmf3ye%2BzAixDFwRBDouVPNQ%2BEMXi0OprIilSjdYHIzBNak2p2zVdwWFjj0rD8a8mcDjFvet7zDxacOlJJwCj2A%2FmVtdLiSp7q2YVddLw%2B2cUveeAFs0KR8bcxLt%2BkWNVZNIPUeYfqeIdoAjRTblUH%2FfrIEPERC7B5MOTJdsQuDR%2BzqX4VUYwkmYXyzWXq1ykNPdizMkTUsMSNJnnxQEvcW3RFLUfFuuBEo4j4l8e922RMhcqoaNIjkU0zkKWQMPr3isEGOqUBvHDbETBJPesoJbKcVWEGYQpfyfoxIkigArBCoNE2Sst7CwjMOslUQR1EYNukwdhxLdeBcQESmZcbNWo9zuydWinjxTtt31OOfuXbGCdNGTo9rMAqr38SOzTML4YCrHtgfwxHMJOOCemQWj1Cn65UtTWyVGw%2FAhuudRVk4AGUQjTiTanE0q6cfkO27afIKpmX5%2FOuV2KRS9J3%2BNtCj940XggyOUcu&X-Amz-Signature=1149ebe427c86190207e113421c825c6244e0f6efb27830bc13d6cb90226d484&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
