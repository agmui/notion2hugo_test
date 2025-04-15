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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ6J7BN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuTDePKVqs%2B4MeLkpFRfK3qYY4PQuhFhT%2BwO1VOD2o3gIgShLmy0w0WGapVRvMFcqZHVUD3%2BvkfhlNQwf3GusicJAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx%2FOEJY0qFncniggircAz035nDy%2Bej1k2jPKeCw55vzD0I2roQMnrc3%2FBGxPdT082tc9ZMiqnRfOFq4hYTf%2FKbVi3SG0tS9FS94F6jxmv%2B9%2FSqBlgt7uTqEaW1GMIgdM%2FbXhtJ7VnVzBfYDLw0umU9mpFLAwJPwqBQ9jf5cXuZxjEffi33f%2F49KP7tebqaBc728NdMFbMipxmmcsiIIPob13DErqF%2FnnG16EGsWXEsu2l%2Bqf5rfMIQaVkB6j4esBYBPPTr8fvcVctbaCY9ByAwhcnnw61jbnw8UY6DQyPZ3b%2B0EqhQtwfh%2FduZPshHsplezMUZ9sknEmmrstd3bmftG79Zbrk6CEe0O4t79ocn5U8QvYKmuXhfB6hbdGdCYkf%2FmA2OLGOGxYxritqYTsD3TfdKiOFYCBIguHf100DazA43VlFqLeZ9sBYWPQle0PTGrQZbbMMP8f8vJ2%2BULlUnMc51bHAJUaEi1c%2BsMNGrfTw%2Fev1fzcMxOIGbkIp%2FM35wKHmD8hsrDKZWU0i0UVFaPj95ezpoP75VEGg61bwIBp%2Fjm5Zo4h8ysmEa9oxbI1HQFDQg7Sn5v8xjRwr4YQBnSCQqzjlg%2FpLOLp9gExjJL7p%2Bpk8DRJqOC%2FCuVWpX4ZKSrSSjegYt09sc7MInW%2Br8GOqUBopbp4O0aUxl9ggybHhD%2FE4mm0vhI98cujLdCjGdmWw1EJcwMrRaMDUyA%2F90oXr4kMDNwnqQfE9YQyHd%2Byr5snAprKcb2Bzh4AVx3Bg130Iv%2Bsbm0PgB3gQzN%2FZjAukpUtMk0S21o2frMLocfQrC5MUeoYdaMotz0GHasCNBF%2BxbuBze8ekYlsmTMcpPUsAgJEHckXpY%2FgGoOr%2BvFfwvy%2BhR3Q5g5&X-Amz-Signature=ae5edf63e64dac29f3d094fe6638cd8e9e939c95dc5a1498a4a125c1a5341bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ6J7BN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuTDePKVqs%2B4MeLkpFRfK3qYY4PQuhFhT%2BwO1VOD2o3gIgShLmy0w0WGapVRvMFcqZHVUD3%2BvkfhlNQwf3GusicJAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx%2FOEJY0qFncniggircAz035nDy%2Bej1k2jPKeCw55vzD0I2roQMnrc3%2FBGxPdT082tc9ZMiqnRfOFq4hYTf%2FKbVi3SG0tS9FS94F6jxmv%2B9%2FSqBlgt7uTqEaW1GMIgdM%2FbXhtJ7VnVzBfYDLw0umU9mpFLAwJPwqBQ9jf5cXuZxjEffi33f%2F49KP7tebqaBc728NdMFbMipxmmcsiIIPob13DErqF%2FnnG16EGsWXEsu2l%2Bqf5rfMIQaVkB6j4esBYBPPTr8fvcVctbaCY9ByAwhcnnw61jbnw8UY6DQyPZ3b%2B0EqhQtwfh%2FduZPshHsplezMUZ9sknEmmrstd3bmftG79Zbrk6CEe0O4t79ocn5U8QvYKmuXhfB6hbdGdCYkf%2FmA2OLGOGxYxritqYTsD3TfdKiOFYCBIguHf100DazA43VlFqLeZ9sBYWPQle0PTGrQZbbMMP8f8vJ2%2BULlUnMc51bHAJUaEi1c%2BsMNGrfTw%2Fev1fzcMxOIGbkIp%2FM35wKHmD8hsrDKZWU0i0UVFaPj95ezpoP75VEGg61bwIBp%2Fjm5Zo4h8ysmEa9oxbI1HQFDQg7Sn5v8xjRwr4YQBnSCQqzjlg%2FpLOLp9gExjJL7p%2Bpk8DRJqOC%2FCuVWpX4ZKSrSSjegYt09sc7MInW%2Br8GOqUBopbp4O0aUxl9ggybHhD%2FE4mm0vhI98cujLdCjGdmWw1EJcwMrRaMDUyA%2F90oXr4kMDNwnqQfE9YQyHd%2Byr5snAprKcb2Bzh4AVx3Bg130Iv%2Bsbm0PgB3gQzN%2FZjAukpUtMk0S21o2frMLocfQrC5MUeoYdaMotz0GHasCNBF%2BxbuBze8ekYlsmTMcpPUsAgJEHckXpY%2FgGoOr%2BvFfwvy%2BhR3Q5g5&X-Amz-Signature=0a84d59b80cdf1f88628bd8c159d82efe5d53199c4bcc8650d95b3b56ba272b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ6J7BN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuTDePKVqs%2B4MeLkpFRfK3qYY4PQuhFhT%2BwO1VOD2o3gIgShLmy0w0WGapVRvMFcqZHVUD3%2BvkfhlNQwf3GusicJAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx%2FOEJY0qFncniggircAz035nDy%2Bej1k2jPKeCw55vzD0I2roQMnrc3%2FBGxPdT082tc9ZMiqnRfOFq4hYTf%2FKbVi3SG0tS9FS94F6jxmv%2B9%2FSqBlgt7uTqEaW1GMIgdM%2FbXhtJ7VnVzBfYDLw0umU9mpFLAwJPwqBQ9jf5cXuZxjEffi33f%2F49KP7tebqaBc728NdMFbMipxmmcsiIIPob13DErqF%2FnnG16EGsWXEsu2l%2Bqf5rfMIQaVkB6j4esBYBPPTr8fvcVctbaCY9ByAwhcnnw61jbnw8UY6DQyPZ3b%2B0EqhQtwfh%2FduZPshHsplezMUZ9sknEmmrstd3bmftG79Zbrk6CEe0O4t79ocn5U8QvYKmuXhfB6hbdGdCYkf%2FmA2OLGOGxYxritqYTsD3TfdKiOFYCBIguHf100DazA43VlFqLeZ9sBYWPQle0PTGrQZbbMMP8f8vJ2%2BULlUnMc51bHAJUaEi1c%2BsMNGrfTw%2Fev1fzcMxOIGbkIp%2FM35wKHmD8hsrDKZWU0i0UVFaPj95ezpoP75VEGg61bwIBp%2Fjm5Zo4h8ysmEa9oxbI1HQFDQg7Sn5v8xjRwr4YQBnSCQqzjlg%2FpLOLp9gExjJL7p%2Bpk8DRJqOC%2FCuVWpX4ZKSrSSjegYt09sc7MInW%2Br8GOqUBopbp4O0aUxl9ggybHhD%2FE4mm0vhI98cujLdCjGdmWw1EJcwMrRaMDUyA%2F90oXr4kMDNwnqQfE9YQyHd%2Byr5snAprKcb2Bzh4AVx3Bg130Iv%2Bsbm0PgB3gQzN%2FZjAukpUtMk0S21o2frMLocfQrC5MUeoYdaMotz0GHasCNBF%2BxbuBze8ekYlsmTMcpPUsAgJEHckXpY%2FgGoOr%2BvFfwvy%2BhR3Q5g5&X-Amz-Signature=5d3c54d4e089b4129f4aae93e0fc4967a50b179d245810c5d634829d2f5a33f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ6J7BN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuTDePKVqs%2B4MeLkpFRfK3qYY4PQuhFhT%2BwO1VOD2o3gIgShLmy0w0WGapVRvMFcqZHVUD3%2BvkfhlNQwf3GusicJAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx%2FOEJY0qFncniggircAz035nDy%2Bej1k2jPKeCw55vzD0I2roQMnrc3%2FBGxPdT082tc9ZMiqnRfOFq4hYTf%2FKbVi3SG0tS9FS94F6jxmv%2B9%2FSqBlgt7uTqEaW1GMIgdM%2FbXhtJ7VnVzBfYDLw0umU9mpFLAwJPwqBQ9jf5cXuZxjEffi33f%2F49KP7tebqaBc728NdMFbMipxmmcsiIIPob13DErqF%2FnnG16EGsWXEsu2l%2Bqf5rfMIQaVkB6j4esBYBPPTr8fvcVctbaCY9ByAwhcnnw61jbnw8UY6DQyPZ3b%2B0EqhQtwfh%2FduZPshHsplezMUZ9sknEmmrstd3bmftG79Zbrk6CEe0O4t79ocn5U8QvYKmuXhfB6hbdGdCYkf%2FmA2OLGOGxYxritqYTsD3TfdKiOFYCBIguHf100DazA43VlFqLeZ9sBYWPQle0PTGrQZbbMMP8f8vJ2%2BULlUnMc51bHAJUaEi1c%2BsMNGrfTw%2Fev1fzcMxOIGbkIp%2FM35wKHmD8hsrDKZWU0i0UVFaPj95ezpoP75VEGg61bwIBp%2Fjm5Zo4h8ysmEa9oxbI1HQFDQg7Sn5v8xjRwr4YQBnSCQqzjlg%2FpLOLp9gExjJL7p%2Bpk8DRJqOC%2FCuVWpX4ZKSrSSjegYt09sc7MInW%2Br8GOqUBopbp4O0aUxl9ggybHhD%2FE4mm0vhI98cujLdCjGdmWw1EJcwMrRaMDUyA%2F90oXr4kMDNwnqQfE9YQyHd%2Byr5snAprKcb2Bzh4AVx3Bg130Iv%2Bsbm0PgB3gQzN%2FZjAukpUtMk0S21o2frMLocfQrC5MUeoYdaMotz0GHasCNBF%2BxbuBze8ekYlsmTMcpPUsAgJEHckXpY%2FgGoOr%2BvFfwvy%2BhR3Q5g5&X-Amz-Signature=d28af9daccf9d85c2b0d83165978fa83029fda8fdb90bc14dd9d3255504171df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ6J7BN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuTDePKVqs%2B4MeLkpFRfK3qYY4PQuhFhT%2BwO1VOD2o3gIgShLmy0w0WGapVRvMFcqZHVUD3%2BvkfhlNQwf3GusicJAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx%2FOEJY0qFncniggircAz035nDy%2Bej1k2jPKeCw55vzD0I2roQMnrc3%2FBGxPdT082tc9ZMiqnRfOFq4hYTf%2FKbVi3SG0tS9FS94F6jxmv%2B9%2FSqBlgt7uTqEaW1GMIgdM%2FbXhtJ7VnVzBfYDLw0umU9mpFLAwJPwqBQ9jf5cXuZxjEffi33f%2F49KP7tebqaBc728NdMFbMipxmmcsiIIPob13DErqF%2FnnG16EGsWXEsu2l%2Bqf5rfMIQaVkB6j4esBYBPPTr8fvcVctbaCY9ByAwhcnnw61jbnw8UY6DQyPZ3b%2B0EqhQtwfh%2FduZPshHsplezMUZ9sknEmmrstd3bmftG79Zbrk6CEe0O4t79ocn5U8QvYKmuXhfB6hbdGdCYkf%2FmA2OLGOGxYxritqYTsD3TfdKiOFYCBIguHf100DazA43VlFqLeZ9sBYWPQle0PTGrQZbbMMP8f8vJ2%2BULlUnMc51bHAJUaEi1c%2BsMNGrfTw%2Fev1fzcMxOIGbkIp%2FM35wKHmD8hsrDKZWU0i0UVFaPj95ezpoP75VEGg61bwIBp%2Fjm5Zo4h8ysmEa9oxbI1HQFDQg7Sn5v8xjRwr4YQBnSCQqzjlg%2FpLOLp9gExjJL7p%2Bpk8DRJqOC%2FCuVWpX4ZKSrSSjegYt09sc7MInW%2Br8GOqUBopbp4O0aUxl9ggybHhD%2FE4mm0vhI98cujLdCjGdmWw1EJcwMrRaMDUyA%2F90oXr4kMDNwnqQfE9YQyHd%2Byr5snAprKcb2Bzh4AVx3Bg130Iv%2Bsbm0PgB3gQzN%2FZjAukpUtMk0S21o2frMLocfQrC5MUeoYdaMotz0GHasCNBF%2BxbuBze8ekYlsmTMcpPUsAgJEHckXpY%2FgGoOr%2BvFfwvy%2BhR3Q5g5&X-Amz-Signature=361825595b584a256fd3e81b2ac8df3014e044a64386d86b861847291dd238e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ6J7BN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuTDePKVqs%2B4MeLkpFRfK3qYY4PQuhFhT%2BwO1VOD2o3gIgShLmy0w0WGapVRvMFcqZHVUD3%2BvkfhlNQwf3GusicJAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx%2FOEJY0qFncniggircAz035nDy%2Bej1k2jPKeCw55vzD0I2roQMnrc3%2FBGxPdT082tc9ZMiqnRfOFq4hYTf%2FKbVi3SG0tS9FS94F6jxmv%2B9%2FSqBlgt7uTqEaW1GMIgdM%2FbXhtJ7VnVzBfYDLw0umU9mpFLAwJPwqBQ9jf5cXuZxjEffi33f%2F49KP7tebqaBc728NdMFbMipxmmcsiIIPob13DErqF%2FnnG16EGsWXEsu2l%2Bqf5rfMIQaVkB6j4esBYBPPTr8fvcVctbaCY9ByAwhcnnw61jbnw8UY6DQyPZ3b%2B0EqhQtwfh%2FduZPshHsplezMUZ9sknEmmrstd3bmftG79Zbrk6CEe0O4t79ocn5U8QvYKmuXhfB6hbdGdCYkf%2FmA2OLGOGxYxritqYTsD3TfdKiOFYCBIguHf100DazA43VlFqLeZ9sBYWPQle0PTGrQZbbMMP8f8vJ2%2BULlUnMc51bHAJUaEi1c%2BsMNGrfTw%2Fev1fzcMxOIGbkIp%2FM35wKHmD8hsrDKZWU0i0UVFaPj95ezpoP75VEGg61bwIBp%2Fjm5Zo4h8ysmEa9oxbI1HQFDQg7Sn5v8xjRwr4YQBnSCQqzjlg%2FpLOLp9gExjJL7p%2Bpk8DRJqOC%2FCuVWpX4ZKSrSSjegYt09sc7MInW%2Br8GOqUBopbp4O0aUxl9ggybHhD%2FE4mm0vhI98cujLdCjGdmWw1EJcwMrRaMDUyA%2F90oXr4kMDNwnqQfE9YQyHd%2Byr5snAprKcb2Bzh4AVx3Bg130Iv%2Bsbm0PgB3gQzN%2FZjAukpUtMk0S21o2frMLocfQrC5MUeoYdaMotz0GHasCNBF%2BxbuBze8ekYlsmTMcpPUsAgJEHckXpY%2FgGoOr%2BvFfwvy%2BhR3Q5g5&X-Amz-Signature=ebe53da812ab3d03ef4f8a577597ef7557660752ed5d28e9812a234a6a3f082f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ6J7BN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuTDePKVqs%2B4MeLkpFRfK3qYY4PQuhFhT%2BwO1VOD2o3gIgShLmy0w0WGapVRvMFcqZHVUD3%2BvkfhlNQwf3GusicJAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx%2FOEJY0qFncniggircAz035nDy%2Bej1k2jPKeCw55vzD0I2roQMnrc3%2FBGxPdT082tc9ZMiqnRfOFq4hYTf%2FKbVi3SG0tS9FS94F6jxmv%2B9%2FSqBlgt7uTqEaW1GMIgdM%2FbXhtJ7VnVzBfYDLw0umU9mpFLAwJPwqBQ9jf5cXuZxjEffi33f%2F49KP7tebqaBc728NdMFbMipxmmcsiIIPob13DErqF%2FnnG16EGsWXEsu2l%2Bqf5rfMIQaVkB6j4esBYBPPTr8fvcVctbaCY9ByAwhcnnw61jbnw8UY6DQyPZ3b%2B0EqhQtwfh%2FduZPshHsplezMUZ9sknEmmrstd3bmftG79Zbrk6CEe0O4t79ocn5U8QvYKmuXhfB6hbdGdCYkf%2FmA2OLGOGxYxritqYTsD3TfdKiOFYCBIguHf100DazA43VlFqLeZ9sBYWPQle0PTGrQZbbMMP8f8vJ2%2BULlUnMc51bHAJUaEi1c%2BsMNGrfTw%2Fev1fzcMxOIGbkIp%2FM35wKHmD8hsrDKZWU0i0UVFaPj95ezpoP75VEGg61bwIBp%2Fjm5Zo4h8ysmEa9oxbI1HQFDQg7Sn5v8xjRwr4YQBnSCQqzjlg%2FpLOLp9gExjJL7p%2Bpk8DRJqOC%2FCuVWpX4ZKSrSSjegYt09sc7MInW%2Br8GOqUBopbp4O0aUxl9ggybHhD%2FE4mm0vhI98cujLdCjGdmWw1EJcwMrRaMDUyA%2F90oXr4kMDNwnqQfE9YQyHd%2Byr5snAprKcb2Bzh4AVx3Bg130Iv%2Bsbm0PgB3gQzN%2FZjAukpUtMk0S21o2frMLocfQrC5MUeoYdaMotz0GHasCNBF%2BxbuBze8ekYlsmTMcpPUsAgJEHckXpY%2FgGoOr%2BvFfwvy%2BhR3Q5g5&X-Amz-Signature=7c96f5d670bdb7a6b015fca014d8067b4f76a0b6dab626a13526ea3e7c6d0f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ6J7BN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuTDePKVqs%2B4MeLkpFRfK3qYY4PQuhFhT%2BwO1VOD2o3gIgShLmy0w0WGapVRvMFcqZHVUD3%2BvkfhlNQwf3GusicJAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJx%2FOEJY0qFncniggircAz035nDy%2Bej1k2jPKeCw55vzD0I2roQMnrc3%2FBGxPdT082tc9ZMiqnRfOFq4hYTf%2FKbVi3SG0tS9FS94F6jxmv%2B9%2FSqBlgt7uTqEaW1GMIgdM%2FbXhtJ7VnVzBfYDLw0umU9mpFLAwJPwqBQ9jf5cXuZxjEffi33f%2F49KP7tebqaBc728NdMFbMipxmmcsiIIPob13DErqF%2FnnG16EGsWXEsu2l%2Bqf5rfMIQaVkB6j4esBYBPPTr8fvcVctbaCY9ByAwhcnnw61jbnw8UY6DQyPZ3b%2B0EqhQtwfh%2FduZPshHsplezMUZ9sknEmmrstd3bmftG79Zbrk6CEe0O4t79ocn5U8QvYKmuXhfB6hbdGdCYkf%2FmA2OLGOGxYxritqYTsD3TfdKiOFYCBIguHf100DazA43VlFqLeZ9sBYWPQle0PTGrQZbbMMP8f8vJ2%2BULlUnMc51bHAJUaEi1c%2BsMNGrfTw%2Fev1fzcMxOIGbkIp%2FM35wKHmD8hsrDKZWU0i0UVFaPj95ezpoP75VEGg61bwIBp%2Fjm5Zo4h8ysmEa9oxbI1HQFDQg7Sn5v8xjRwr4YQBnSCQqzjlg%2FpLOLp9gExjJL7p%2Bpk8DRJqOC%2FCuVWpX4ZKSrSSjegYt09sc7MInW%2Br8GOqUBopbp4O0aUxl9ggybHhD%2FE4mm0vhI98cujLdCjGdmWw1EJcwMrRaMDUyA%2F90oXr4kMDNwnqQfE9YQyHd%2Byr5snAprKcb2Bzh4AVx3Bg130Iv%2Bsbm0PgB3gQzN%2FZjAukpUtMk0S21o2frMLocfQrC5MUeoYdaMotz0GHasCNBF%2BxbuBze8ekYlsmTMcpPUsAgJEHckXpY%2FgGoOr%2BvFfwvy%2BhR3Q5g5&X-Amz-Signature=16287a3f6a4a307d0a52bac90833d5b383b71f59d7e7a9b11d0296260cfcc8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
