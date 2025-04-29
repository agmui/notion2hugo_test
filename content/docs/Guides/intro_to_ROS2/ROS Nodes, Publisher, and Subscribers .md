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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLWAYWV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJ76CMKw22hCM56jxeMYAHItsWfVxUI0g4yAkmnQRiwIhAPmfoj%2FWpcAsP5rqabvz4pvMYbT50WKKzCHdYOMfQLzxKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJrfjP7E7f8wXDW0sq3AP1VtNXrvNQ%2FgThkyH1RX0O3MnlxWeIC4IHtaIuKu3ltW1IRUgNO0yGJVyGWsizGdfF%2BE1WiNuL3wwg8Q8lQU1P0kTzvX9XGxBYZTT9cQGl44s9AZ5txfvxur0UNqrPmr8dNR2kk6rLZkV%2BQBzCz0H%2Br39Hw1YNjRoya0UDpQn3mNkbvrO5WqApSOEWGjS%2FEgss3OcGz0cppKiL8czMCD3uBkNlxml12sm2aH6jLnRF5LB%2FyUAt98RIDtx5Cdws4X9s9QSOrJSo3wZRJlOEqVBjpLpCHm8CKReChz73dSG44xTZAgiiY4PjQ7hPSVyiEzb%2Br0aSF2OAVSlbnK%2FciZ%2B0GlPWiw5LypYEq5CJO2n10B8ZB3gXi4TJ4REpNA5YQR3a9fEKTlfqWB7EKfy6vqJ7kQKUbTpiK4R0hhSxy5U26NjWzCF1MF5DnKe4zZALHS38ThIo1zbqJW7mFzC5zlHFfay2VFGt1q9QAlTiyCQIdiUPXICVUhrfCk6TW2C55YK8YDIhNKedHrRyjES7hkgVVCq9YTSxJCfb1m1gLBzaVplWaIsqDY4NCg6H%2FH%2F1wQZT72cnr%2FBAhK0LEns%2FxfapB0%2FBasjj1jw%2F7TwmiFxH%2BH3x6QKCdWb7cTIv3DDm0cHABjqkAatSYOA3rn%2FFwL%2BdT3G%2BwwAc6UZ2fwJkcYiY7SwhCCt%2Fk%2B3uXfxNCEe%2F5PwREgnKXxk5m8WwcSSU77XZf87dNTtpKrao%2BMl%2F8Y9Nc50VoxYCJFupKoUy1xfZCct9C7PUOoRB6eXlqbLOLFQYKqTH1nuypWkApib6sQZn4xOzof1bCYeJSowcC99ojVX0F%2BpaNyi1ZLFPcjdqb5I0tIk2K2EsXztM&X-Amz-Signature=5f6a3d255a5e070cc7d2dd59b4b6b8384e42292e4dc2c116152eb14945014888&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLWAYWV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJ76CMKw22hCM56jxeMYAHItsWfVxUI0g4yAkmnQRiwIhAPmfoj%2FWpcAsP5rqabvz4pvMYbT50WKKzCHdYOMfQLzxKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJrfjP7E7f8wXDW0sq3AP1VtNXrvNQ%2FgThkyH1RX0O3MnlxWeIC4IHtaIuKu3ltW1IRUgNO0yGJVyGWsizGdfF%2BE1WiNuL3wwg8Q8lQU1P0kTzvX9XGxBYZTT9cQGl44s9AZ5txfvxur0UNqrPmr8dNR2kk6rLZkV%2BQBzCz0H%2Br39Hw1YNjRoya0UDpQn3mNkbvrO5WqApSOEWGjS%2FEgss3OcGz0cppKiL8czMCD3uBkNlxml12sm2aH6jLnRF5LB%2FyUAt98RIDtx5Cdws4X9s9QSOrJSo3wZRJlOEqVBjpLpCHm8CKReChz73dSG44xTZAgiiY4PjQ7hPSVyiEzb%2Br0aSF2OAVSlbnK%2FciZ%2B0GlPWiw5LypYEq5CJO2n10B8ZB3gXi4TJ4REpNA5YQR3a9fEKTlfqWB7EKfy6vqJ7kQKUbTpiK4R0hhSxy5U26NjWzCF1MF5DnKe4zZALHS38ThIo1zbqJW7mFzC5zlHFfay2VFGt1q9QAlTiyCQIdiUPXICVUhrfCk6TW2C55YK8YDIhNKedHrRyjES7hkgVVCq9YTSxJCfb1m1gLBzaVplWaIsqDY4NCg6H%2FH%2F1wQZT72cnr%2FBAhK0LEns%2FxfapB0%2FBasjj1jw%2F7TwmiFxH%2BH3x6QKCdWb7cTIv3DDm0cHABjqkAatSYOA3rn%2FFwL%2BdT3G%2BwwAc6UZ2fwJkcYiY7SwhCCt%2Fk%2B3uXfxNCEe%2F5PwREgnKXxk5m8WwcSSU77XZf87dNTtpKrao%2BMl%2F8Y9Nc50VoxYCJFupKoUy1xfZCct9C7PUOoRB6eXlqbLOLFQYKqTH1nuypWkApib6sQZn4xOzof1bCYeJSowcC99ojVX0F%2BpaNyi1ZLFPcjdqb5I0tIk2K2EsXztM&X-Amz-Signature=722bb7143f899abeead8cad8e35e9a3f5470ded3abe9ce80e533f1081a5c1063&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLWAYWV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJ76CMKw22hCM56jxeMYAHItsWfVxUI0g4yAkmnQRiwIhAPmfoj%2FWpcAsP5rqabvz4pvMYbT50WKKzCHdYOMfQLzxKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJrfjP7E7f8wXDW0sq3AP1VtNXrvNQ%2FgThkyH1RX0O3MnlxWeIC4IHtaIuKu3ltW1IRUgNO0yGJVyGWsizGdfF%2BE1WiNuL3wwg8Q8lQU1P0kTzvX9XGxBYZTT9cQGl44s9AZ5txfvxur0UNqrPmr8dNR2kk6rLZkV%2BQBzCz0H%2Br39Hw1YNjRoya0UDpQn3mNkbvrO5WqApSOEWGjS%2FEgss3OcGz0cppKiL8czMCD3uBkNlxml12sm2aH6jLnRF5LB%2FyUAt98RIDtx5Cdws4X9s9QSOrJSo3wZRJlOEqVBjpLpCHm8CKReChz73dSG44xTZAgiiY4PjQ7hPSVyiEzb%2Br0aSF2OAVSlbnK%2FciZ%2B0GlPWiw5LypYEq5CJO2n10B8ZB3gXi4TJ4REpNA5YQR3a9fEKTlfqWB7EKfy6vqJ7kQKUbTpiK4R0hhSxy5U26NjWzCF1MF5DnKe4zZALHS38ThIo1zbqJW7mFzC5zlHFfay2VFGt1q9QAlTiyCQIdiUPXICVUhrfCk6TW2C55YK8YDIhNKedHrRyjES7hkgVVCq9YTSxJCfb1m1gLBzaVplWaIsqDY4NCg6H%2FH%2F1wQZT72cnr%2FBAhK0LEns%2FxfapB0%2FBasjj1jw%2F7TwmiFxH%2BH3x6QKCdWb7cTIv3DDm0cHABjqkAatSYOA3rn%2FFwL%2BdT3G%2BwwAc6UZ2fwJkcYiY7SwhCCt%2Fk%2B3uXfxNCEe%2F5PwREgnKXxk5m8WwcSSU77XZf87dNTtpKrao%2BMl%2F8Y9Nc50VoxYCJFupKoUy1xfZCct9C7PUOoRB6eXlqbLOLFQYKqTH1nuypWkApib6sQZn4xOzof1bCYeJSowcC99ojVX0F%2BpaNyi1ZLFPcjdqb5I0tIk2K2EsXztM&X-Amz-Signature=0cdc4b4f7e25c2ab31dfc0c0a97b1d731084b3803508e4e3b88a60fd6f8f9292&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLWAYWV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJ76CMKw22hCM56jxeMYAHItsWfVxUI0g4yAkmnQRiwIhAPmfoj%2FWpcAsP5rqabvz4pvMYbT50WKKzCHdYOMfQLzxKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJrfjP7E7f8wXDW0sq3AP1VtNXrvNQ%2FgThkyH1RX0O3MnlxWeIC4IHtaIuKu3ltW1IRUgNO0yGJVyGWsizGdfF%2BE1WiNuL3wwg8Q8lQU1P0kTzvX9XGxBYZTT9cQGl44s9AZ5txfvxur0UNqrPmr8dNR2kk6rLZkV%2BQBzCz0H%2Br39Hw1YNjRoya0UDpQn3mNkbvrO5WqApSOEWGjS%2FEgss3OcGz0cppKiL8czMCD3uBkNlxml12sm2aH6jLnRF5LB%2FyUAt98RIDtx5Cdws4X9s9QSOrJSo3wZRJlOEqVBjpLpCHm8CKReChz73dSG44xTZAgiiY4PjQ7hPSVyiEzb%2Br0aSF2OAVSlbnK%2FciZ%2B0GlPWiw5LypYEq5CJO2n10B8ZB3gXi4TJ4REpNA5YQR3a9fEKTlfqWB7EKfy6vqJ7kQKUbTpiK4R0hhSxy5U26NjWzCF1MF5DnKe4zZALHS38ThIo1zbqJW7mFzC5zlHFfay2VFGt1q9QAlTiyCQIdiUPXICVUhrfCk6TW2C55YK8YDIhNKedHrRyjES7hkgVVCq9YTSxJCfb1m1gLBzaVplWaIsqDY4NCg6H%2FH%2F1wQZT72cnr%2FBAhK0LEns%2FxfapB0%2FBasjj1jw%2F7TwmiFxH%2BH3x6QKCdWb7cTIv3DDm0cHABjqkAatSYOA3rn%2FFwL%2BdT3G%2BwwAc6UZ2fwJkcYiY7SwhCCt%2Fk%2B3uXfxNCEe%2F5PwREgnKXxk5m8WwcSSU77XZf87dNTtpKrao%2BMl%2F8Y9Nc50VoxYCJFupKoUy1xfZCct9C7PUOoRB6eXlqbLOLFQYKqTH1nuypWkApib6sQZn4xOzof1bCYeJSowcC99ojVX0F%2BpaNyi1ZLFPcjdqb5I0tIk2K2EsXztM&X-Amz-Signature=46b4bbf636d42a72bde36d57125e4e7525b3a907c56d943097932040be2dd02d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLWAYWV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJ76CMKw22hCM56jxeMYAHItsWfVxUI0g4yAkmnQRiwIhAPmfoj%2FWpcAsP5rqabvz4pvMYbT50WKKzCHdYOMfQLzxKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJrfjP7E7f8wXDW0sq3AP1VtNXrvNQ%2FgThkyH1RX0O3MnlxWeIC4IHtaIuKu3ltW1IRUgNO0yGJVyGWsizGdfF%2BE1WiNuL3wwg8Q8lQU1P0kTzvX9XGxBYZTT9cQGl44s9AZ5txfvxur0UNqrPmr8dNR2kk6rLZkV%2BQBzCz0H%2Br39Hw1YNjRoya0UDpQn3mNkbvrO5WqApSOEWGjS%2FEgss3OcGz0cppKiL8czMCD3uBkNlxml12sm2aH6jLnRF5LB%2FyUAt98RIDtx5Cdws4X9s9QSOrJSo3wZRJlOEqVBjpLpCHm8CKReChz73dSG44xTZAgiiY4PjQ7hPSVyiEzb%2Br0aSF2OAVSlbnK%2FciZ%2B0GlPWiw5LypYEq5CJO2n10B8ZB3gXi4TJ4REpNA5YQR3a9fEKTlfqWB7EKfy6vqJ7kQKUbTpiK4R0hhSxy5U26NjWzCF1MF5DnKe4zZALHS38ThIo1zbqJW7mFzC5zlHFfay2VFGt1q9QAlTiyCQIdiUPXICVUhrfCk6TW2C55YK8YDIhNKedHrRyjES7hkgVVCq9YTSxJCfb1m1gLBzaVplWaIsqDY4NCg6H%2FH%2F1wQZT72cnr%2FBAhK0LEns%2FxfapB0%2FBasjj1jw%2F7TwmiFxH%2BH3x6QKCdWb7cTIv3DDm0cHABjqkAatSYOA3rn%2FFwL%2BdT3G%2BwwAc6UZ2fwJkcYiY7SwhCCt%2Fk%2B3uXfxNCEe%2F5PwREgnKXxk5m8WwcSSU77XZf87dNTtpKrao%2BMl%2F8Y9Nc50VoxYCJFupKoUy1xfZCct9C7PUOoRB6eXlqbLOLFQYKqTH1nuypWkApib6sQZn4xOzof1bCYeJSowcC99ojVX0F%2BpaNyi1ZLFPcjdqb5I0tIk2K2EsXztM&X-Amz-Signature=17a9d6d7d4e3b4a1decda28a59e13c17f81c05f3cd3af8bd9e6628a82f9f9cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLWAYWV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJ76CMKw22hCM56jxeMYAHItsWfVxUI0g4yAkmnQRiwIhAPmfoj%2FWpcAsP5rqabvz4pvMYbT50WKKzCHdYOMfQLzxKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJrfjP7E7f8wXDW0sq3AP1VtNXrvNQ%2FgThkyH1RX0O3MnlxWeIC4IHtaIuKu3ltW1IRUgNO0yGJVyGWsizGdfF%2BE1WiNuL3wwg8Q8lQU1P0kTzvX9XGxBYZTT9cQGl44s9AZ5txfvxur0UNqrPmr8dNR2kk6rLZkV%2BQBzCz0H%2Br39Hw1YNjRoya0UDpQn3mNkbvrO5WqApSOEWGjS%2FEgss3OcGz0cppKiL8czMCD3uBkNlxml12sm2aH6jLnRF5LB%2FyUAt98RIDtx5Cdws4X9s9QSOrJSo3wZRJlOEqVBjpLpCHm8CKReChz73dSG44xTZAgiiY4PjQ7hPSVyiEzb%2Br0aSF2OAVSlbnK%2FciZ%2B0GlPWiw5LypYEq5CJO2n10B8ZB3gXi4TJ4REpNA5YQR3a9fEKTlfqWB7EKfy6vqJ7kQKUbTpiK4R0hhSxy5U26NjWzCF1MF5DnKe4zZALHS38ThIo1zbqJW7mFzC5zlHFfay2VFGt1q9QAlTiyCQIdiUPXICVUhrfCk6TW2C55YK8YDIhNKedHrRyjES7hkgVVCq9YTSxJCfb1m1gLBzaVplWaIsqDY4NCg6H%2FH%2F1wQZT72cnr%2FBAhK0LEns%2FxfapB0%2FBasjj1jw%2F7TwmiFxH%2BH3x6QKCdWb7cTIv3DDm0cHABjqkAatSYOA3rn%2FFwL%2BdT3G%2BwwAc6UZ2fwJkcYiY7SwhCCt%2Fk%2B3uXfxNCEe%2F5PwREgnKXxk5m8WwcSSU77XZf87dNTtpKrao%2BMl%2F8Y9Nc50VoxYCJFupKoUy1xfZCct9C7PUOoRB6eXlqbLOLFQYKqTH1nuypWkApib6sQZn4xOzof1bCYeJSowcC99ojVX0F%2BpaNyi1ZLFPcjdqb5I0tIk2K2EsXztM&X-Amz-Signature=e61c08bf1da3f50116ae0bc44adce7b8bb22f4fed28fd6206c182dd0935a39a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLWAYWV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJ76CMKw22hCM56jxeMYAHItsWfVxUI0g4yAkmnQRiwIhAPmfoj%2FWpcAsP5rqabvz4pvMYbT50WKKzCHdYOMfQLzxKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJrfjP7E7f8wXDW0sq3AP1VtNXrvNQ%2FgThkyH1RX0O3MnlxWeIC4IHtaIuKu3ltW1IRUgNO0yGJVyGWsizGdfF%2BE1WiNuL3wwg8Q8lQU1P0kTzvX9XGxBYZTT9cQGl44s9AZ5txfvxur0UNqrPmr8dNR2kk6rLZkV%2BQBzCz0H%2Br39Hw1YNjRoya0UDpQn3mNkbvrO5WqApSOEWGjS%2FEgss3OcGz0cppKiL8czMCD3uBkNlxml12sm2aH6jLnRF5LB%2FyUAt98RIDtx5Cdws4X9s9QSOrJSo3wZRJlOEqVBjpLpCHm8CKReChz73dSG44xTZAgiiY4PjQ7hPSVyiEzb%2Br0aSF2OAVSlbnK%2FciZ%2B0GlPWiw5LypYEq5CJO2n10B8ZB3gXi4TJ4REpNA5YQR3a9fEKTlfqWB7EKfy6vqJ7kQKUbTpiK4R0hhSxy5U26NjWzCF1MF5DnKe4zZALHS38ThIo1zbqJW7mFzC5zlHFfay2VFGt1q9QAlTiyCQIdiUPXICVUhrfCk6TW2C55YK8YDIhNKedHrRyjES7hkgVVCq9YTSxJCfb1m1gLBzaVplWaIsqDY4NCg6H%2FH%2F1wQZT72cnr%2FBAhK0LEns%2FxfapB0%2FBasjj1jw%2F7TwmiFxH%2BH3x6QKCdWb7cTIv3DDm0cHABjqkAatSYOA3rn%2FFwL%2BdT3G%2BwwAc6UZ2fwJkcYiY7SwhCCt%2Fk%2B3uXfxNCEe%2F5PwREgnKXxk5m8WwcSSU77XZf87dNTtpKrao%2BMl%2F8Y9Nc50VoxYCJFupKoUy1xfZCct9C7PUOoRB6eXlqbLOLFQYKqTH1nuypWkApib6sQZn4xOzof1bCYeJSowcC99ojVX0F%2BpaNyi1ZLFPcjdqb5I0tIk2K2EsXztM&X-Amz-Signature=d811c7a1369bb573164cbac8c91c7511e45b28454bbe6ec920bbca82ea788101&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLWAYWV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJ76CMKw22hCM56jxeMYAHItsWfVxUI0g4yAkmnQRiwIhAPmfoj%2FWpcAsP5rqabvz4pvMYbT50WKKzCHdYOMfQLzxKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJrfjP7E7f8wXDW0sq3AP1VtNXrvNQ%2FgThkyH1RX0O3MnlxWeIC4IHtaIuKu3ltW1IRUgNO0yGJVyGWsizGdfF%2BE1WiNuL3wwg8Q8lQU1P0kTzvX9XGxBYZTT9cQGl44s9AZ5txfvxur0UNqrPmr8dNR2kk6rLZkV%2BQBzCz0H%2Br39Hw1YNjRoya0UDpQn3mNkbvrO5WqApSOEWGjS%2FEgss3OcGz0cppKiL8czMCD3uBkNlxml12sm2aH6jLnRF5LB%2FyUAt98RIDtx5Cdws4X9s9QSOrJSo3wZRJlOEqVBjpLpCHm8CKReChz73dSG44xTZAgiiY4PjQ7hPSVyiEzb%2Br0aSF2OAVSlbnK%2FciZ%2B0GlPWiw5LypYEq5CJO2n10B8ZB3gXi4TJ4REpNA5YQR3a9fEKTlfqWB7EKfy6vqJ7kQKUbTpiK4R0hhSxy5U26NjWzCF1MF5DnKe4zZALHS38ThIo1zbqJW7mFzC5zlHFfay2VFGt1q9QAlTiyCQIdiUPXICVUhrfCk6TW2C55YK8YDIhNKedHrRyjES7hkgVVCq9YTSxJCfb1m1gLBzaVplWaIsqDY4NCg6H%2FH%2F1wQZT72cnr%2FBAhK0LEns%2FxfapB0%2FBasjj1jw%2F7TwmiFxH%2BH3x6QKCdWb7cTIv3DDm0cHABjqkAatSYOA3rn%2FFwL%2BdT3G%2BwwAc6UZ2fwJkcYiY7SwhCCt%2Fk%2B3uXfxNCEe%2F5PwREgnKXxk5m8WwcSSU77XZf87dNTtpKrao%2BMl%2F8Y9Nc50VoxYCJFupKoUy1xfZCct9C7PUOoRB6eXlqbLOLFQYKqTH1nuypWkApib6sQZn4xOzof1bCYeJSowcC99ojVX0F%2BpaNyi1ZLFPcjdqb5I0tIk2K2EsXztM&X-Amz-Signature=e83ba86b03013c299a6187dc275f1f3ac1120a4171eec05e712a4f463ac3b8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
