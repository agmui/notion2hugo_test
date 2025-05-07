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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HHVKC6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDLFx2MOCnJ8g2m3ahlzpfKGQj8Mb01QtRLdKk6mxfwIhAIdmKaRXTo013cTTJ55IGvHUvGokBcwcjQ1jMls8DWPzKv8DCFMQABoMNjM3NDIzMTgzODA1Igxx7pbJ%2FwbxjB5nSVkq3AMo5SE7mnoNq5jtk6pYIt2oZ1aCph8wJ8JtGB%2BTrRpN%2FTjcBxeKioOD3Cs45bmieCiHbQBBJdc1LqalRYiyEd1p4LZfJtIKRgzVB0N8QNCUVmu23J%2FxG70K1UUdDAazUGDj0eY4FbZ5fO8ABTS7Tlb0VlVab91%2BR5OPBsdJh3nUFz2jMVsV7MtSNEsed4OfoEqMkfaFWaHoKmZETFv7QK2wtTi5txYTimBX7tujLrKRrU4iysW1yIm80aYdfs%2F9clPYISdcwTklqjcknPItN%2FiDgnPu0lSe641eeFbFquAxj%2BzkCc1%2FDz%2FiXo10oQvM%2FF2NIiNdGKbBrekmdysvULjFMFPlkjrNfa2rbseZLLXoRzGuvTWoxfGWrKl3HYON19NIdwopJmA51sPMDoFU%2FtILAulnIHYUWw3OZ230VEEmJsme9aykoZW5Hxp4TJpjGWI%2BoQH4dffqHKvKqqmaH%2BNl%2BYRuZ7bMu6l%2F5%2Fz%2F4rOqlq6WvUM8wdn9ylPJ4IDzxEjPpn4oj4vkXqPFfVggYGOw0VEvHJKZv6kLnCtAWa0uxQ%2Bu3qOyIgT9MXduqhBN4dWrFSqowb6Cflxsyg3%2BNC%2FbNlRW6GM4Wzl1hxY1YG6KJAfbu2a8o5ciYYZK%2FjDS%2BerABjqkAfuQky%2FHSMXIeZjr3QCQav9EfQFn1hLcfu8yzJmxwXt3IsQBgnWTy97tQFkH%2Feb9r2bF9Jqap%2FcsYdh1aDevJg8MRI2UMu2yTxNZaqFjfqQ5Qheig16UXD0VRVOwwqQ84nIPutVMDMPO06xgfFQ%2F4EoKHlur66bYggySnHI2cWbyTmDCR9QP0rUbN33ABMD%2BK7%2FgeUXQro94YjVG%2FkMgOMMlbt55&X-Amz-Signature=c4578e47f44e42c5b7019c765ed508861c4fb946c96c51bf8468580dd47afc94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HHVKC6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDLFx2MOCnJ8g2m3ahlzpfKGQj8Mb01QtRLdKk6mxfwIhAIdmKaRXTo013cTTJ55IGvHUvGokBcwcjQ1jMls8DWPzKv8DCFMQABoMNjM3NDIzMTgzODA1Igxx7pbJ%2FwbxjB5nSVkq3AMo5SE7mnoNq5jtk6pYIt2oZ1aCph8wJ8JtGB%2BTrRpN%2FTjcBxeKioOD3Cs45bmieCiHbQBBJdc1LqalRYiyEd1p4LZfJtIKRgzVB0N8QNCUVmu23J%2FxG70K1UUdDAazUGDj0eY4FbZ5fO8ABTS7Tlb0VlVab91%2BR5OPBsdJh3nUFz2jMVsV7MtSNEsed4OfoEqMkfaFWaHoKmZETFv7QK2wtTi5txYTimBX7tujLrKRrU4iysW1yIm80aYdfs%2F9clPYISdcwTklqjcknPItN%2FiDgnPu0lSe641eeFbFquAxj%2BzkCc1%2FDz%2FiXo10oQvM%2FF2NIiNdGKbBrekmdysvULjFMFPlkjrNfa2rbseZLLXoRzGuvTWoxfGWrKl3HYON19NIdwopJmA51sPMDoFU%2FtILAulnIHYUWw3OZ230VEEmJsme9aykoZW5Hxp4TJpjGWI%2BoQH4dffqHKvKqqmaH%2BNl%2BYRuZ7bMu6l%2F5%2Fz%2F4rOqlq6WvUM8wdn9ylPJ4IDzxEjPpn4oj4vkXqPFfVggYGOw0VEvHJKZv6kLnCtAWa0uxQ%2Bu3qOyIgT9MXduqhBN4dWrFSqowb6Cflxsyg3%2BNC%2FbNlRW6GM4Wzl1hxY1YG6KJAfbu2a8o5ciYYZK%2FjDS%2BerABjqkAfuQky%2FHSMXIeZjr3QCQav9EfQFn1hLcfu8yzJmxwXt3IsQBgnWTy97tQFkH%2Feb9r2bF9Jqap%2FcsYdh1aDevJg8MRI2UMu2yTxNZaqFjfqQ5Qheig16UXD0VRVOwwqQ84nIPutVMDMPO06xgfFQ%2F4EoKHlur66bYggySnHI2cWbyTmDCR9QP0rUbN33ABMD%2BK7%2FgeUXQro94YjVG%2FkMgOMMlbt55&X-Amz-Signature=629eb4dbcbb911559cbdaab9ec6d95fc3895f3001d0e71182792204588617719&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HHVKC6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDLFx2MOCnJ8g2m3ahlzpfKGQj8Mb01QtRLdKk6mxfwIhAIdmKaRXTo013cTTJ55IGvHUvGokBcwcjQ1jMls8DWPzKv8DCFMQABoMNjM3NDIzMTgzODA1Igxx7pbJ%2FwbxjB5nSVkq3AMo5SE7mnoNq5jtk6pYIt2oZ1aCph8wJ8JtGB%2BTrRpN%2FTjcBxeKioOD3Cs45bmieCiHbQBBJdc1LqalRYiyEd1p4LZfJtIKRgzVB0N8QNCUVmu23J%2FxG70K1UUdDAazUGDj0eY4FbZ5fO8ABTS7Tlb0VlVab91%2BR5OPBsdJh3nUFz2jMVsV7MtSNEsed4OfoEqMkfaFWaHoKmZETFv7QK2wtTi5txYTimBX7tujLrKRrU4iysW1yIm80aYdfs%2F9clPYISdcwTklqjcknPItN%2FiDgnPu0lSe641eeFbFquAxj%2BzkCc1%2FDz%2FiXo10oQvM%2FF2NIiNdGKbBrekmdysvULjFMFPlkjrNfa2rbseZLLXoRzGuvTWoxfGWrKl3HYON19NIdwopJmA51sPMDoFU%2FtILAulnIHYUWw3OZ230VEEmJsme9aykoZW5Hxp4TJpjGWI%2BoQH4dffqHKvKqqmaH%2BNl%2BYRuZ7bMu6l%2F5%2Fz%2F4rOqlq6WvUM8wdn9ylPJ4IDzxEjPpn4oj4vkXqPFfVggYGOw0VEvHJKZv6kLnCtAWa0uxQ%2Bu3qOyIgT9MXduqhBN4dWrFSqowb6Cflxsyg3%2BNC%2FbNlRW6GM4Wzl1hxY1YG6KJAfbu2a8o5ciYYZK%2FjDS%2BerABjqkAfuQky%2FHSMXIeZjr3QCQav9EfQFn1hLcfu8yzJmxwXt3IsQBgnWTy97tQFkH%2Feb9r2bF9Jqap%2FcsYdh1aDevJg8MRI2UMu2yTxNZaqFjfqQ5Qheig16UXD0VRVOwwqQ84nIPutVMDMPO06xgfFQ%2F4EoKHlur66bYggySnHI2cWbyTmDCR9QP0rUbN33ABMD%2BK7%2FgeUXQro94YjVG%2FkMgOMMlbt55&X-Amz-Signature=20112f2b8176376d72cd924260b49f607d3f096ae53b5e29d8e00570ef30c6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HHVKC6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDLFx2MOCnJ8g2m3ahlzpfKGQj8Mb01QtRLdKk6mxfwIhAIdmKaRXTo013cTTJ55IGvHUvGokBcwcjQ1jMls8DWPzKv8DCFMQABoMNjM3NDIzMTgzODA1Igxx7pbJ%2FwbxjB5nSVkq3AMo5SE7mnoNq5jtk6pYIt2oZ1aCph8wJ8JtGB%2BTrRpN%2FTjcBxeKioOD3Cs45bmieCiHbQBBJdc1LqalRYiyEd1p4LZfJtIKRgzVB0N8QNCUVmu23J%2FxG70K1UUdDAazUGDj0eY4FbZ5fO8ABTS7Tlb0VlVab91%2BR5OPBsdJh3nUFz2jMVsV7MtSNEsed4OfoEqMkfaFWaHoKmZETFv7QK2wtTi5txYTimBX7tujLrKRrU4iysW1yIm80aYdfs%2F9clPYISdcwTklqjcknPItN%2FiDgnPu0lSe641eeFbFquAxj%2BzkCc1%2FDz%2FiXo10oQvM%2FF2NIiNdGKbBrekmdysvULjFMFPlkjrNfa2rbseZLLXoRzGuvTWoxfGWrKl3HYON19NIdwopJmA51sPMDoFU%2FtILAulnIHYUWw3OZ230VEEmJsme9aykoZW5Hxp4TJpjGWI%2BoQH4dffqHKvKqqmaH%2BNl%2BYRuZ7bMu6l%2F5%2Fz%2F4rOqlq6WvUM8wdn9ylPJ4IDzxEjPpn4oj4vkXqPFfVggYGOw0VEvHJKZv6kLnCtAWa0uxQ%2Bu3qOyIgT9MXduqhBN4dWrFSqowb6Cflxsyg3%2BNC%2FbNlRW6GM4Wzl1hxY1YG6KJAfbu2a8o5ciYYZK%2FjDS%2BerABjqkAfuQky%2FHSMXIeZjr3QCQav9EfQFn1hLcfu8yzJmxwXt3IsQBgnWTy97tQFkH%2Feb9r2bF9Jqap%2FcsYdh1aDevJg8MRI2UMu2yTxNZaqFjfqQ5Qheig16UXD0VRVOwwqQ84nIPutVMDMPO06xgfFQ%2F4EoKHlur66bYggySnHI2cWbyTmDCR9QP0rUbN33ABMD%2BK7%2FgeUXQro94YjVG%2FkMgOMMlbt55&X-Amz-Signature=292ed7caa9d698daeeacf3c739496f884469d7ff97d95f14eae4529d61493483&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HHVKC6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDLFx2MOCnJ8g2m3ahlzpfKGQj8Mb01QtRLdKk6mxfwIhAIdmKaRXTo013cTTJ55IGvHUvGokBcwcjQ1jMls8DWPzKv8DCFMQABoMNjM3NDIzMTgzODA1Igxx7pbJ%2FwbxjB5nSVkq3AMo5SE7mnoNq5jtk6pYIt2oZ1aCph8wJ8JtGB%2BTrRpN%2FTjcBxeKioOD3Cs45bmieCiHbQBBJdc1LqalRYiyEd1p4LZfJtIKRgzVB0N8QNCUVmu23J%2FxG70K1UUdDAazUGDj0eY4FbZ5fO8ABTS7Tlb0VlVab91%2BR5OPBsdJh3nUFz2jMVsV7MtSNEsed4OfoEqMkfaFWaHoKmZETFv7QK2wtTi5txYTimBX7tujLrKRrU4iysW1yIm80aYdfs%2F9clPYISdcwTklqjcknPItN%2FiDgnPu0lSe641eeFbFquAxj%2BzkCc1%2FDz%2FiXo10oQvM%2FF2NIiNdGKbBrekmdysvULjFMFPlkjrNfa2rbseZLLXoRzGuvTWoxfGWrKl3HYON19NIdwopJmA51sPMDoFU%2FtILAulnIHYUWw3OZ230VEEmJsme9aykoZW5Hxp4TJpjGWI%2BoQH4dffqHKvKqqmaH%2BNl%2BYRuZ7bMu6l%2F5%2Fz%2F4rOqlq6WvUM8wdn9ylPJ4IDzxEjPpn4oj4vkXqPFfVggYGOw0VEvHJKZv6kLnCtAWa0uxQ%2Bu3qOyIgT9MXduqhBN4dWrFSqowb6Cflxsyg3%2BNC%2FbNlRW6GM4Wzl1hxY1YG6KJAfbu2a8o5ciYYZK%2FjDS%2BerABjqkAfuQky%2FHSMXIeZjr3QCQav9EfQFn1hLcfu8yzJmxwXt3IsQBgnWTy97tQFkH%2Feb9r2bF9Jqap%2FcsYdh1aDevJg8MRI2UMu2yTxNZaqFjfqQ5Qheig16UXD0VRVOwwqQ84nIPutVMDMPO06xgfFQ%2F4EoKHlur66bYggySnHI2cWbyTmDCR9QP0rUbN33ABMD%2BK7%2FgeUXQro94YjVG%2FkMgOMMlbt55&X-Amz-Signature=ed57b42f126da94944087a03e8868eba14d434e1d8fe7c730f38c2143db05be6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HHVKC6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDLFx2MOCnJ8g2m3ahlzpfKGQj8Mb01QtRLdKk6mxfwIhAIdmKaRXTo013cTTJ55IGvHUvGokBcwcjQ1jMls8DWPzKv8DCFMQABoMNjM3NDIzMTgzODA1Igxx7pbJ%2FwbxjB5nSVkq3AMo5SE7mnoNq5jtk6pYIt2oZ1aCph8wJ8JtGB%2BTrRpN%2FTjcBxeKioOD3Cs45bmieCiHbQBBJdc1LqalRYiyEd1p4LZfJtIKRgzVB0N8QNCUVmu23J%2FxG70K1UUdDAazUGDj0eY4FbZ5fO8ABTS7Tlb0VlVab91%2BR5OPBsdJh3nUFz2jMVsV7MtSNEsed4OfoEqMkfaFWaHoKmZETFv7QK2wtTi5txYTimBX7tujLrKRrU4iysW1yIm80aYdfs%2F9clPYISdcwTklqjcknPItN%2FiDgnPu0lSe641eeFbFquAxj%2BzkCc1%2FDz%2FiXo10oQvM%2FF2NIiNdGKbBrekmdysvULjFMFPlkjrNfa2rbseZLLXoRzGuvTWoxfGWrKl3HYON19NIdwopJmA51sPMDoFU%2FtILAulnIHYUWw3OZ230VEEmJsme9aykoZW5Hxp4TJpjGWI%2BoQH4dffqHKvKqqmaH%2BNl%2BYRuZ7bMu6l%2F5%2Fz%2F4rOqlq6WvUM8wdn9ylPJ4IDzxEjPpn4oj4vkXqPFfVggYGOw0VEvHJKZv6kLnCtAWa0uxQ%2Bu3qOyIgT9MXduqhBN4dWrFSqowb6Cflxsyg3%2BNC%2FbNlRW6GM4Wzl1hxY1YG6KJAfbu2a8o5ciYYZK%2FjDS%2BerABjqkAfuQky%2FHSMXIeZjr3QCQav9EfQFn1hLcfu8yzJmxwXt3IsQBgnWTy97tQFkH%2Feb9r2bF9Jqap%2FcsYdh1aDevJg8MRI2UMu2yTxNZaqFjfqQ5Qheig16UXD0VRVOwwqQ84nIPutVMDMPO06xgfFQ%2F4EoKHlur66bYggySnHI2cWbyTmDCR9QP0rUbN33ABMD%2BK7%2FgeUXQro94YjVG%2FkMgOMMlbt55&X-Amz-Signature=75649700cfc7300bb07cdfa41a1eddaa8da03871c4592dc54ca27e9d221226fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HHVKC6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDLFx2MOCnJ8g2m3ahlzpfKGQj8Mb01QtRLdKk6mxfwIhAIdmKaRXTo013cTTJ55IGvHUvGokBcwcjQ1jMls8DWPzKv8DCFMQABoMNjM3NDIzMTgzODA1Igxx7pbJ%2FwbxjB5nSVkq3AMo5SE7mnoNq5jtk6pYIt2oZ1aCph8wJ8JtGB%2BTrRpN%2FTjcBxeKioOD3Cs45bmieCiHbQBBJdc1LqalRYiyEd1p4LZfJtIKRgzVB0N8QNCUVmu23J%2FxG70K1UUdDAazUGDj0eY4FbZ5fO8ABTS7Tlb0VlVab91%2BR5OPBsdJh3nUFz2jMVsV7MtSNEsed4OfoEqMkfaFWaHoKmZETFv7QK2wtTi5txYTimBX7tujLrKRrU4iysW1yIm80aYdfs%2F9clPYISdcwTklqjcknPItN%2FiDgnPu0lSe641eeFbFquAxj%2BzkCc1%2FDz%2FiXo10oQvM%2FF2NIiNdGKbBrekmdysvULjFMFPlkjrNfa2rbseZLLXoRzGuvTWoxfGWrKl3HYON19NIdwopJmA51sPMDoFU%2FtILAulnIHYUWw3OZ230VEEmJsme9aykoZW5Hxp4TJpjGWI%2BoQH4dffqHKvKqqmaH%2BNl%2BYRuZ7bMu6l%2F5%2Fz%2F4rOqlq6WvUM8wdn9ylPJ4IDzxEjPpn4oj4vkXqPFfVggYGOw0VEvHJKZv6kLnCtAWa0uxQ%2Bu3qOyIgT9MXduqhBN4dWrFSqowb6Cflxsyg3%2BNC%2FbNlRW6GM4Wzl1hxY1YG6KJAfbu2a8o5ciYYZK%2FjDS%2BerABjqkAfuQky%2FHSMXIeZjr3QCQav9EfQFn1hLcfu8yzJmxwXt3IsQBgnWTy97tQFkH%2Feb9r2bF9Jqap%2FcsYdh1aDevJg8MRI2UMu2yTxNZaqFjfqQ5Qheig16UXD0VRVOwwqQ84nIPutVMDMPO06xgfFQ%2F4EoKHlur66bYggySnHI2cWbyTmDCR9QP0rUbN33ABMD%2BK7%2FgeUXQro94YjVG%2FkMgOMMlbt55&X-Amz-Signature=4e05d5fddfd3955ec55a8d3a0e40550e6abe8799742e3ffeeb765245c41c0f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HHVKC6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDLFx2MOCnJ8g2m3ahlzpfKGQj8Mb01QtRLdKk6mxfwIhAIdmKaRXTo013cTTJ55IGvHUvGokBcwcjQ1jMls8DWPzKv8DCFMQABoMNjM3NDIzMTgzODA1Igxx7pbJ%2FwbxjB5nSVkq3AMo5SE7mnoNq5jtk6pYIt2oZ1aCph8wJ8JtGB%2BTrRpN%2FTjcBxeKioOD3Cs45bmieCiHbQBBJdc1LqalRYiyEd1p4LZfJtIKRgzVB0N8QNCUVmu23J%2FxG70K1UUdDAazUGDj0eY4FbZ5fO8ABTS7Tlb0VlVab91%2BR5OPBsdJh3nUFz2jMVsV7MtSNEsed4OfoEqMkfaFWaHoKmZETFv7QK2wtTi5txYTimBX7tujLrKRrU4iysW1yIm80aYdfs%2F9clPYISdcwTklqjcknPItN%2FiDgnPu0lSe641eeFbFquAxj%2BzkCc1%2FDz%2FiXo10oQvM%2FF2NIiNdGKbBrekmdysvULjFMFPlkjrNfa2rbseZLLXoRzGuvTWoxfGWrKl3HYON19NIdwopJmA51sPMDoFU%2FtILAulnIHYUWw3OZ230VEEmJsme9aykoZW5Hxp4TJpjGWI%2BoQH4dffqHKvKqqmaH%2BNl%2BYRuZ7bMu6l%2F5%2Fz%2F4rOqlq6WvUM8wdn9ylPJ4IDzxEjPpn4oj4vkXqPFfVggYGOw0VEvHJKZv6kLnCtAWa0uxQ%2Bu3qOyIgT9MXduqhBN4dWrFSqowb6Cflxsyg3%2BNC%2FbNlRW6GM4Wzl1hxY1YG6KJAfbu2a8o5ciYYZK%2FjDS%2BerABjqkAfuQky%2FHSMXIeZjr3QCQav9EfQFn1hLcfu8yzJmxwXt3IsQBgnWTy97tQFkH%2Feb9r2bF9Jqap%2FcsYdh1aDevJg8MRI2UMu2yTxNZaqFjfqQ5Qheig16UXD0VRVOwwqQ84nIPutVMDMPO06xgfFQ%2F4EoKHlur66bYggySnHI2cWbyTmDCR9QP0rUbN33ABMD%2BK7%2FgeUXQro94YjVG%2FkMgOMMlbt55&X-Amz-Signature=d4333304ed0daad509ac615569046014bb11031740d2cc4926de98939a46cab0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
