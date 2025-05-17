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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7UM4A7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHIO4k47XypzGgeDAuZSGhQi7qQliGdbFSF2MG31GyQIge7%2BpWRWbQAZ9KpD1oE9gcW9OpwyiEvyM2%2BewljSCMBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNjB0F8PJb6dXdpKfyrcA9KF3Q6k04HSWkhafhVgbaLXyRlRNm8LpM4croHHJ3ghaYGBsj0xbq1fw73ZUjwy%2BMkb84tdD7WPw0%2BE0QTB%2Bm7MOUXQju%2BUCXOAblvj5XAaoSnWnZcIYh49A3biWiHtn0UR6iC5tF9M1PTxevexcbGlZowWgNdg5shbveQKManeDFEWjsKJCLhbzedI3zl2nY64KkkKidDpvY3TNpyfL3jbLRGVE2pnvrE3S2tAHBUJd1Wj2U9f6%2FZHv4EFyIz3lgIOA574mkSFJA5a%2FyiDABKPQ%2BYc0qGrmMGZj3ZWvsUDfHqJn1e5eGDLvGrm7%2FVTkxpzhb5djjDP08B4JVUWRGiDpM97AAbBL7VchbSC6yJ%2BLI22qDR9rWf%2F77itQDOgquwcb8awwLGAY5%2BnsUqgxO7wMYXZ0gjlg9uBylXFZUGaMeiPied59voxhfQ45Gd6dfGClsItOLfIAGJYmyt10NtZDzznOzxbOThlugP2HhKnVcrngE6efLmn8nQLexl5AEhWNsJiIziw4d1LQJ6G19p1JFzIlMF7T4tNzEwKPyTB5suHfhYWAhMB6Iz4CMCBFtUWzwCQXcjDGaqb7RYbs%2FYg7wxbmZgwt6e85NFn1rGpDzQ9u2R2CqySvFcgMNa2osEGOqUBkOA7bld6jQ1pzZi9yAyhtMNRer3P%2B7trSLUt%2BpyMzzfNll39KZ9gpsXnPEk42kWiTegmE4WFJVf3sq9bkbPuTazyuIeP9eGa%2FKd381pdP4QKL0KACyiag53cRds3jYAL%2BR8K1BNN7sQGqOBA6K1zCqXtboBtre%2Bum5e9kVyYh1syB6yDw1ajEYfTcHAUftkIUEe5NuzHxlJFzmC1EzFLU79Fn5jE&X-Amz-Signature=244aaffbbada1784c44d48958f1c3d7f65bc1c2167815c4e4cdc3fc6af05424b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7UM4A7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHIO4k47XypzGgeDAuZSGhQi7qQliGdbFSF2MG31GyQIge7%2BpWRWbQAZ9KpD1oE9gcW9OpwyiEvyM2%2BewljSCMBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNjB0F8PJb6dXdpKfyrcA9KF3Q6k04HSWkhafhVgbaLXyRlRNm8LpM4croHHJ3ghaYGBsj0xbq1fw73ZUjwy%2BMkb84tdD7WPw0%2BE0QTB%2Bm7MOUXQju%2BUCXOAblvj5XAaoSnWnZcIYh49A3biWiHtn0UR6iC5tF9M1PTxevexcbGlZowWgNdg5shbveQKManeDFEWjsKJCLhbzedI3zl2nY64KkkKidDpvY3TNpyfL3jbLRGVE2pnvrE3S2tAHBUJd1Wj2U9f6%2FZHv4EFyIz3lgIOA574mkSFJA5a%2FyiDABKPQ%2BYc0qGrmMGZj3ZWvsUDfHqJn1e5eGDLvGrm7%2FVTkxpzhb5djjDP08B4JVUWRGiDpM97AAbBL7VchbSC6yJ%2BLI22qDR9rWf%2F77itQDOgquwcb8awwLGAY5%2BnsUqgxO7wMYXZ0gjlg9uBylXFZUGaMeiPied59voxhfQ45Gd6dfGClsItOLfIAGJYmyt10NtZDzznOzxbOThlugP2HhKnVcrngE6efLmn8nQLexl5AEhWNsJiIziw4d1LQJ6G19p1JFzIlMF7T4tNzEwKPyTB5suHfhYWAhMB6Iz4CMCBFtUWzwCQXcjDGaqb7RYbs%2FYg7wxbmZgwt6e85NFn1rGpDzQ9u2R2CqySvFcgMNa2osEGOqUBkOA7bld6jQ1pzZi9yAyhtMNRer3P%2B7trSLUt%2BpyMzzfNll39KZ9gpsXnPEk42kWiTegmE4WFJVf3sq9bkbPuTazyuIeP9eGa%2FKd381pdP4QKL0KACyiag53cRds3jYAL%2BR8K1BNN7sQGqOBA6K1zCqXtboBtre%2Bum5e9kVyYh1syB6yDw1ajEYfTcHAUftkIUEe5NuzHxlJFzmC1EzFLU79Fn5jE&X-Amz-Signature=a290eb002776f02debdaef832cf7eae9463045259076c5585aa286081dc48098&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7UM4A7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHIO4k47XypzGgeDAuZSGhQi7qQliGdbFSF2MG31GyQIge7%2BpWRWbQAZ9KpD1oE9gcW9OpwyiEvyM2%2BewljSCMBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNjB0F8PJb6dXdpKfyrcA9KF3Q6k04HSWkhafhVgbaLXyRlRNm8LpM4croHHJ3ghaYGBsj0xbq1fw73ZUjwy%2BMkb84tdD7WPw0%2BE0QTB%2Bm7MOUXQju%2BUCXOAblvj5XAaoSnWnZcIYh49A3biWiHtn0UR6iC5tF9M1PTxevexcbGlZowWgNdg5shbveQKManeDFEWjsKJCLhbzedI3zl2nY64KkkKidDpvY3TNpyfL3jbLRGVE2pnvrE3S2tAHBUJd1Wj2U9f6%2FZHv4EFyIz3lgIOA574mkSFJA5a%2FyiDABKPQ%2BYc0qGrmMGZj3ZWvsUDfHqJn1e5eGDLvGrm7%2FVTkxpzhb5djjDP08B4JVUWRGiDpM97AAbBL7VchbSC6yJ%2BLI22qDR9rWf%2F77itQDOgquwcb8awwLGAY5%2BnsUqgxO7wMYXZ0gjlg9uBylXFZUGaMeiPied59voxhfQ45Gd6dfGClsItOLfIAGJYmyt10NtZDzznOzxbOThlugP2HhKnVcrngE6efLmn8nQLexl5AEhWNsJiIziw4d1LQJ6G19p1JFzIlMF7T4tNzEwKPyTB5suHfhYWAhMB6Iz4CMCBFtUWzwCQXcjDGaqb7RYbs%2FYg7wxbmZgwt6e85NFn1rGpDzQ9u2R2CqySvFcgMNa2osEGOqUBkOA7bld6jQ1pzZi9yAyhtMNRer3P%2B7trSLUt%2BpyMzzfNll39KZ9gpsXnPEk42kWiTegmE4WFJVf3sq9bkbPuTazyuIeP9eGa%2FKd381pdP4QKL0KACyiag53cRds3jYAL%2BR8K1BNN7sQGqOBA6K1zCqXtboBtre%2Bum5e9kVyYh1syB6yDw1ajEYfTcHAUftkIUEe5NuzHxlJFzmC1EzFLU79Fn5jE&X-Amz-Signature=a94ea8c6b3f25cb3a5741619916bd46a3ef6c1e85d88a19d5fa82d27b5feaddf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7UM4A7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHIO4k47XypzGgeDAuZSGhQi7qQliGdbFSF2MG31GyQIge7%2BpWRWbQAZ9KpD1oE9gcW9OpwyiEvyM2%2BewljSCMBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNjB0F8PJb6dXdpKfyrcA9KF3Q6k04HSWkhafhVgbaLXyRlRNm8LpM4croHHJ3ghaYGBsj0xbq1fw73ZUjwy%2BMkb84tdD7WPw0%2BE0QTB%2Bm7MOUXQju%2BUCXOAblvj5XAaoSnWnZcIYh49A3biWiHtn0UR6iC5tF9M1PTxevexcbGlZowWgNdg5shbveQKManeDFEWjsKJCLhbzedI3zl2nY64KkkKidDpvY3TNpyfL3jbLRGVE2pnvrE3S2tAHBUJd1Wj2U9f6%2FZHv4EFyIz3lgIOA574mkSFJA5a%2FyiDABKPQ%2BYc0qGrmMGZj3ZWvsUDfHqJn1e5eGDLvGrm7%2FVTkxpzhb5djjDP08B4JVUWRGiDpM97AAbBL7VchbSC6yJ%2BLI22qDR9rWf%2F77itQDOgquwcb8awwLGAY5%2BnsUqgxO7wMYXZ0gjlg9uBylXFZUGaMeiPied59voxhfQ45Gd6dfGClsItOLfIAGJYmyt10NtZDzznOzxbOThlugP2HhKnVcrngE6efLmn8nQLexl5AEhWNsJiIziw4d1LQJ6G19p1JFzIlMF7T4tNzEwKPyTB5suHfhYWAhMB6Iz4CMCBFtUWzwCQXcjDGaqb7RYbs%2FYg7wxbmZgwt6e85NFn1rGpDzQ9u2R2CqySvFcgMNa2osEGOqUBkOA7bld6jQ1pzZi9yAyhtMNRer3P%2B7trSLUt%2BpyMzzfNll39KZ9gpsXnPEk42kWiTegmE4WFJVf3sq9bkbPuTazyuIeP9eGa%2FKd381pdP4QKL0KACyiag53cRds3jYAL%2BR8K1BNN7sQGqOBA6K1zCqXtboBtre%2Bum5e9kVyYh1syB6yDw1ajEYfTcHAUftkIUEe5NuzHxlJFzmC1EzFLU79Fn5jE&X-Amz-Signature=4fae556958c4d2076ade405ce11d1b6e255939a00c19a175d9b10479e4442385&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7UM4A7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHIO4k47XypzGgeDAuZSGhQi7qQliGdbFSF2MG31GyQIge7%2BpWRWbQAZ9KpD1oE9gcW9OpwyiEvyM2%2BewljSCMBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNjB0F8PJb6dXdpKfyrcA9KF3Q6k04HSWkhafhVgbaLXyRlRNm8LpM4croHHJ3ghaYGBsj0xbq1fw73ZUjwy%2BMkb84tdD7WPw0%2BE0QTB%2Bm7MOUXQju%2BUCXOAblvj5XAaoSnWnZcIYh49A3biWiHtn0UR6iC5tF9M1PTxevexcbGlZowWgNdg5shbveQKManeDFEWjsKJCLhbzedI3zl2nY64KkkKidDpvY3TNpyfL3jbLRGVE2pnvrE3S2tAHBUJd1Wj2U9f6%2FZHv4EFyIz3lgIOA574mkSFJA5a%2FyiDABKPQ%2BYc0qGrmMGZj3ZWvsUDfHqJn1e5eGDLvGrm7%2FVTkxpzhb5djjDP08B4JVUWRGiDpM97AAbBL7VchbSC6yJ%2BLI22qDR9rWf%2F77itQDOgquwcb8awwLGAY5%2BnsUqgxO7wMYXZ0gjlg9uBylXFZUGaMeiPied59voxhfQ45Gd6dfGClsItOLfIAGJYmyt10NtZDzznOzxbOThlugP2HhKnVcrngE6efLmn8nQLexl5AEhWNsJiIziw4d1LQJ6G19p1JFzIlMF7T4tNzEwKPyTB5suHfhYWAhMB6Iz4CMCBFtUWzwCQXcjDGaqb7RYbs%2FYg7wxbmZgwt6e85NFn1rGpDzQ9u2R2CqySvFcgMNa2osEGOqUBkOA7bld6jQ1pzZi9yAyhtMNRer3P%2B7trSLUt%2BpyMzzfNll39KZ9gpsXnPEk42kWiTegmE4WFJVf3sq9bkbPuTazyuIeP9eGa%2FKd381pdP4QKL0KACyiag53cRds3jYAL%2BR8K1BNN7sQGqOBA6K1zCqXtboBtre%2Bum5e9kVyYh1syB6yDw1ajEYfTcHAUftkIUEe5NuzHxlJFzmC1EzFLU79Fn5jE&X-Amz-Signature=159c00cce6237ecbb0d2d1fa73bc5b304c58af2100040abb418e9783220d8c90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7UM4A7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHIO4k47XypzGgeDAuZSGhQi7qQliGdbFSF2MG31GyQIge7%2BpWRWbQAZ9KpD1oE9gcW9OpwyiEvyM2%2BewljSCMBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNjB0F8PJb6dXdpKfyrcA9KF3Q6k04HSWkhafhVgbaLXyRlRNm8LpM4croHHJ3ghaYGBsj0xbq1fw73ZUjwy%2BMkb84tdD7WPw0%2BE0QTB%2Bm7MOUXQju%2BUCXOAblvj5XAaoSnWnZcIYh49A3biWiHtn0UR6iC5tF9M1PTxevexcbGlZowWgNdg5shbveQKManeDFEWjsKJCLhbzedI3zl2nY64KkkKidDpvY3TNpyfL3jbLRGVE2pnvrE3S2tAHBUJd1Wj2U9f6%2FZHv4EFyIz3lgIOA574mkSFJA5a%2FyiDABKPQ%2BYc0qGrmMGZj3ZWvsUDfHqJn1e5eGDLvGrm7%2FVTkxpzhb5djjDP08B4JVUWRGiDpM97AAbBL7VchbSC6yJ%2BLI22qDR9rWf%2F77itQDOgquwcb8awwLGAY5%2BnsUqgxO7wMYXZ0gjlg9uBylXFZUGaMeiPied59voxhfQ45Gd6dfGClsItOLfIAGJYmyt10NtZDzznOzxbOThlugP2HhKnVcrngE6efLmn8nQLexl5AEhWNsJiIziw4d1LQJ6G19p1JFzIlMF7T4tNzEwKPyTB5suHfhYWAhMB6Iz4CMCBFtUWzwCQXcjDGaqb7RYbs%2FYg7wxbmZgwt6e85NFn1rGpDzQ9u2R2CqySvFcgMNa2osEGOqUBkOA7bld6jQ1pzZi9yAyhtMNRer3P%2B7trSLUt%2BpyMzzfNll39KZ9gpsXnPEk42kWiTegmE4WFJVf3sq9bkbPuTazyuIeP9eGa%2FKd381pdP4QKL0KACyiag53cRds3jYAL%2BR8K1BNN7sQGqOBA6K1zCqXtboBtre%2Bum5e9kVyYh1syB6yDw1ajEYfTcHAUftkIUEe5NuzHxlJFzmC1EzFLU79Fn5jE&X-Amz-Signature=54eee38300f1d0deb08cf38f752e3fa4201d7409d7b8a7531ff673298b846cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7UM4A7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHIO4k47XypzGgeDAuZSGhQi7qQliGdbFSF2MG31GyQIge7%2BpWRWbQAZ9KpD1oE9gcW9OpwyiEvyM2%2BewljSCMBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNjB0F8PJb6dXdpKfyrcA9KF3Q6k04HSWkhafhVgbaLXyRlRNm8LpM4croHHJ3ghaYGBsj0xbq1fw73ZUjwy%2BMkb84tdD7WPw0%2BE0QTB%2Bm7MOUXQju%2BUCXOAblvj5XAaoSnWnZcIYh49A3biWiHtn0UR6iC5tF9M1PTxevexcbGlZowWgNdg5shbveQKManeDFEWjsKJCLhbzedI3zl2nY64KkkKidDpvY3TNpyfL3jbLRGVE2pnvrE3S2tAHBUJd1Wj2U9f6%2FZHv4EFyIz3lgIOA574mkSFJA5a%2FyiDABKPQ%2BYc0qGrmMGZj3ZWvsUDfHqJn1e5eGDLvGrm7%2FVTkxpzhb5djjDP08B4JVUWRGiDpM97AAbBL7VchbSC6yJ%2BLI22qDR9rWf%2F77itQDOgquwcb8awwLGAY5%2BnsUqgxO7wMYXZ0gjlg9uBylXFZUGaMeiPied59voxhfQ45Gd6dfGClsItOLfIAGJYmyt10NtZDzznOzxbOThlugP2HhKnVcrngE6efLmn8nQLexl5AEhWNsJiIziw4d1LQJ6G19p1JFzIlMF7T4tNzEwKPyTB5suHfhYWAhMB6Iz4CMCBFtUWzwCQXcjDGaqb7RYbs%2FYg7wxbmZgwt6e85NFn1rGpDzQ9u2R2CqySvFcgMNa2osEGOqUBkOA7bld6jQ1pzZi9yAyhtMNRer3P%2B7trSLUt%2BpyMzzfNll39KZ9gpsXnPEk42kWiTegmE4WFJVf3sq9bkbPuTazyuIeP9eGa%2FKd381pdP4QKL0KACyiag53cRds3jYAL%2BR8K1BNN7sQGqOBA6K1zCqXtboBtre%2Bum5e9kVyYh1syB6yDw1ajEYfTcHAUftkIUEe5NuzHxlJFzmC1EzFLU79Fn5jE&X-Amz-Signature=1e53f6d3e6b02634d798f6dfcaab51f5f00ee5cb30764561a61b2dc3add84ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE7UM4A7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHIO4k47XypzGgeDAuZSGhQi7qQliGdbFSF2MG31GyQIge7%2BpWRWbQAZ9KpD1oE9gcW9OpwyiEvyM2%2BewljSCMBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNjB0F8PJb6dXdpKfyrcA9KF3Q6k04HSWkhafhVgbaLXyRlRNm8LpM4croHHJ3ghaYGBsj0xbq1fw73ZUjwy%2BMkb84tdD7WPw0%2BE0QTB%2Bm7MOUXQju%2BUCXOAblvj5XAaoSnWnZcIYh49A3biWiHtn0UR6iC5tF9M1PTxevexcbGlZowWgNdg5shbveQKManeDFEWjsKJCLhbzedI3zl2nY64KkkKidDpvY3TNpyfL3jbLRGVE2pnvrE3S2tAHBUJd1Wj2U9f6%2FZHv4EFyIz3lgIOA574mkSFJA5a%2FyiDABKPQ%2BYc0qGrmMGZj3ZWvsUDfHqJn1e5eGDLvGrm7%2FVTkxpzhb5djjDP08B4JVUWRGiDpM97AAbBL7VchbSC6yJ%2BLI22qDR9rWf%2F77itQDOgquwcb8awwLGAY5%2BnsUqgxO7wMYXZ0gjlg9uBylXFZUGaMeiPied59voxhfQ45Gd6dfGClsItOLfIAGJYmyt10NtZDzznOzxbOThlugP2HhKnVcrngE6efLmn8nQLexl5AEhWNsJiIziw4d1LQJ6G19p1JFzIlMF7T4tNzEwKPyTB5suHfhYWAhMB6Iz4CMCBFtUWzwCQXcjDGaqb7RYbs%2FYg7wxbmZgwt6e85NFn1rGpDzQ9u2R2CqySvFcgMNa2osEGOqUBkOA7bld6jQ1pzZi9yAyhtMNRer3P%2B7trSLUt%2BpyMzzfNll39KZ9gpsXnPEk42kWiTegmE4WFJVf3sq9bkbPuTazyuIeP9eGa%2FKd381pdP4QKL0KACyiag53cRds3jYAL%2BR8K1BNN7sQGqOBA6K1zCqXtboBtre%2Bum5e9kVyYh1syB6yDw1ajEYfTcHAUftkIUEe5NuzHxlJFzmC1EzFLU79Fn5jE&X-Amz-Signature=ff9ea85c2a11f6b78b67d8f8f8c5c86c38d50f5817bd31880835a86451d545ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
