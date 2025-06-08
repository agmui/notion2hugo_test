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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4F6W4X%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGIv6TEatNryWcMt%2Bw8YbdkV6mH3ip1BjB5jwVlf4ZAIhAIdZmmm%2B3do%2Fj4nJ2qqiY9GGrJJy55eT4E3MlddqEX%2FlKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqlPaQjiEbKtVlKhcq3AOikzn92n9C0tdUEEP2RZw3RKizlSBYDVzI%2FjO%2F%2FCsS0%2F3sOjj0sItPAx%2FXF5HJqWwh%2FWuvJu6dgyecqlQPQZQ%2FZQx4t1MXydLJmBrssUtjh3ljYohFY4t1Rq3yy2Kxd9zgRsmtIo3UzCgyYg%2F4MM%2BCcm29N70GjpwouVGM5%2BmskpH9W4NlkeGgK%2B8mt6QJvZOQkA0xo3Lbh%2FemxH1xrWes4iTTeFQzPtLKOTQkaC2VVqrGmpYGN5Uzo0vjfoPpUSQ3m5VNqH13YmkOQf2AZZAVXRHFM7YYuu3qrcWeRQ8Pdx9mT3xN0%2BZWe%2F9KT7vCBjVFgQpgMWZJKFcPWxbF1uXhAyXhLy8r8r6m3Kv3IkhTfVgnH4JngtAfew6VrBq%2B8XejeHOhht0GWmvUVbAsSow9omTbZpQuTXWMr%2F4cJm5zBnHSx1onIpQL0OQAiliGTFR4LaFTYFdwLokIBHZlpQs8AqOYOEWFViyVSP%2B40Y%2FXnuCFGyFRd8yBKBz%2FTT3ucMEV212rTaMie7XrSAyxY001MMIni8QS%2Fv%2BXwRJPv0fimlQFzvZtRXl55MuthLalbgE99qARpp3soD4SBrYe%2FmkMHsHBtC3g%2FFe9RCqor9Eo6%2Fdy9vZYw1R8Iy1jHjDCopjCBjqkAesFfeW3p31Pv8U7tQJn4CUEl4mAWyeuvnZs4zcQzpy9%2FXchQWdupS%2FwAtctlw0yN34ZgOVYPADew1I6bxJvGU6MXNVid%2Ftp%2F8pwyeZcavGwS5s28tr%2B6U6FmJdcFIIR9k6LYhXQLDeBkt77Bi9AyTHfl2s45gknkZvCyUCwMA8RQr6rhd2cBaylRkmyZT3K4BbE73yn1yb8geOiDYIfyCwRmGpP&X-Amz-Signature=465540433edc089917239c46eecb67c1a582a5334ddc750b841dddce8c60bc88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4F6W4X%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGIv6TEatNryWcMt%2Bw8YbdkV6mH3ip1BjB5jwVlf4ZAIhAIdZmmm%2B3do%2Fj4nJ2qqiY9GGrJJy55eT4E3MlddqEX%2FlKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqlPaQjiEbKtVlKhcq3AOikzn92n9C0tdUEEP2RZw3RKizlSBYDVzI%2FjO%2F%2FCsS0%2F3sOjj0sItPAx%2FXF5HJqWwh%2FWuvJu6dgyecqlQPQZQ%2FZQx4t1MXydLJmBrssUtjh3ljYohFY4t1Rq3yy2Kxd9zgRsmtIo3UzCgyYg%2F4MM%2BCcm29N70GjpwouVGM5%2BmskpH9W4NlkeGgK%2B8mt6QJvZOQkA0xo3Lbh%2FemxH1xrWes4iTTeFQzPtLKOTQkaC2VVqrGmpYGN5Uzo0vjfoPpUSQ3m5VNqH13YmkOQf2AZZAVXRHFM7YYuu3qrcWeRQ8Pdx9mT3xN0%2BZWe%2F9KT7vCBjVFgQpgMWZJKFcPWxbF1uXhAyXhLy8r8r6m3Kv3IkhTfVgnH4JngtAfew6VrBq%2B8XejeHOhht0GWmvUVbAsSow9omTbZpQuTXWMr%2F4cJm5zBnHSx1onIpQL0OQAiliGTFR4LaFTYFdwLokIBHZlpQs8AqOYOEWFViyVSP%2B40Y%2FXnuCFGyFRd8yBKBz%2FTT3ucMEV212rTaMie7XrSAyxY001MMIni8QS%2Fv%2BXwRJPv0fimlQFzvZtRXl55MuthLalbgE99qARpp3soD4SBrYe%2FmkMHsHBtC3g%2FFe9RCqor9Eo6%2Fdy9vZYw1R8Iy1jHjDCopjCBjqkAesFfeW3p31Pv8U7tQJn4CUEl4mAWyeuvnZs4zcQzpy9%2FXchQWdupS%2FwAtctlw0yN34ZgOVYPADew1I6bxJvGU6MXNVid%2Ftp%2F8pwyeZcavGwS5s28tr%2B6U6FmJdcFIIR9k6LYhXQLDeBkt77Bi9AyTHfl2s45gknkZvCyUCwMA8RQr6rhd2cBaylRkmyZT3K4BbE73yn1yb8geOiDYIfyCwRmGpP&X-Amz-Signature=fe6a7aba58b48a098d492d24a0ec92708b3f24918c7947b7acaf82bf28213217&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4F6W4X%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGIv6TEatNryWcMt%2Bw8YbdkV6mH3ip1BjB5jwVlf4ZAIhAIdZmmm%2B3do%2Fj4nJ2qqiY9GGrJJy55eT4E3MlddqEX%2FlKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqlPaQjiEbKtVlKhcq3AOikzn92n9C0tdUEEP2RZw3RKizlSBYDVzI%2FjO%2F%2FCsS0%2F3sOjj0sItPAx%2FXF5HJqWwh%2FWuvJu6dgyecqlQPQZQ%2FZQx4t1MXydLJmBrssUtjh3ljYohFY4t1Rq3yy2Kxd9zgRsmtIo3UzCgyYg%2F4MM%2BCcm29N70GjpwouVGM5%2BmskpH9W4NlkeGgK%2B8mt6QJvZOQkA0xo3Lbh%2FemxH1xrWes4iTTeFQzPtLKOTQkaC2VVqrGmpYGN5Uzo0vjfoPpUSQ3m5VNqH13YmkOQf2AZZAVXRHFM7YYuu3qrcWeRQ8Pdx9mT3xN0%2BZWe%2F9KT7vCBjVFgQpgMWZJKFcPWxbF1uXhAyXhLy8r8r6m3Kv3IkhTfVgnH4JngtAfew6VrBq%2B8XejeHOhht0GWmvUVbAsSow9omTbZpQuTXWMr%2F4cJm5zBnHSx1onIpQL0OQAiliGTFR4LaFTYFdwLokIBHZlpQs8AqOYOEWFViyVSP%2B40Y%2FXnuCFGyFRd8yBKBz%2FTT3ucMEV212rTaMie7XrSAyxY001MMIni8QS%2Fv%2BXwRJPv0fimlQFzvZtRXl55MuthLalbgE99qARpp3soD4SBrYe%2FmkMHsHBtC3g%2FFe9RCqor9Eo6%2Fdy9vZYw1R8Iy1jHjDCopjCBjqkAesFfeW3p31Pv8U7tQJn4CUEl4mAWyeuvnZs4zcQzpy9%2FXchQWdupS%2FwAtctlw0yN34ZgOVYPADew1I6bxJvGU6MXNVid%2Ftp%2F8pwyeZcavGwS5s28tr%2B6U6FmJdcFIIR9k6LYhXQLDeBkt77Bi9AyTHfl2s45gknkZvCyUCwMA8RQr6rhd2cBaylRkmyZT3K4BbE73yn1yb8geOiDYIfyCwRmGpP&X-Amz-Signature=8b6421c42fdb1c1303815f83f8147911dc1cd0b68751376287ad8cb324b956ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4F6W4X%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGIv6TEatNryWcMt%2Bw8YbdkV6mH3ip1BjB5jwVlf4ZAIhAIdZmmm%2B3do%2Fj4nJ2qqiY9GGrJJy55eT4E3MlddqEX%2FlKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqlPaQjiEbKtVlKhcq3AOikzn92n9C0tdUEEP2RZw3RKizlSBYDVzI%2FjO%2F%2FCsS0%2F3sOjj0sItPAx%2FXF5HJqWwh%2FWuvJu6dgyecqlQPQZQ%2FZQx4t1MXydLJmBrssUtjh3ljYohFY4t1Rq3yy2Kxd9zgRsmtIo3UzCgyYg%2F4MM%2BCcm29N70GjpwouVGM5%2BmskpH9W4NlkeGgK%2B8mt6QJvZOQkA0xo3Lbh%2FemxH1xrWes4iTTeFQzPtLKOTQkaC2VVqrGmpYGN5Uzo0vjfoPpUSQ3m5VNqH13YmkOQf2AZZAVXRHFM7YYuu3qrcWeRQ8Pdx9mT3xN0%2BZWe%2F9KT7vCBjVFgQpgMWZJKFcPWxbF1uXhAyXhLy8r8r6m3Kv3IkhTfVgnH4JngtAfew6VrBq%2B8XejeHOhht0GWmvUVbAsSow9omTbZpQuTXWMr%2F4cJm5zBnHSx1onIpQL0OQAiliGTFR4LaFTYFdwLokIBHZlpQs8AqOYOEWFViyVSP%2B40Y%2FXnuCFGyFRd8yBKBz%2FTT3ucMEV212rTaMie7XrSAyxY001MMIni8QS%2Fv%2BXwRJPv0fimlQFzvZtRXl55MuthLalbgE99qARpp3soD4SBrYe%2FmkMHsHBtC3g%2FFe9RCqor9Eo6%2Fdy9vZYw1R8Iy1jHjDCopjCBjqkAesFfeW3p31Pv8U7tQJn4CUEl4mAWyeuvnZs4zcQzpy9%2FXchQWdupS%2FwAtctlw0yN34ZgOVYPADew1I6bxJvGU6MXNVid%2Ftp%2F8pwyeZcavGwS5s28tr%2B6U6FmJdcFIIR9k6LYhXQLDeBkt77Bi9AyTHfl2s45gknkZvCyUCwMA8RQr6rhd2cBaylRkmyZT3K4BbE73yn1yb8geOiDYIfyCwRmGpP&X-Amz-Signature=eaa313574490a22ee8854903f3df4d4084be2e87f37920352ee91719b6e80714&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4F6W4X%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGIv6TEatNryWcMt%2Bw8YbdkV6mH3ip1BjB5jwVlf4ZAIhAIdZmmm%2B3do%2Fj4nJ2qqiY9GGrJJy55eT4E3MlddqEX%2FlKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqlPaQjiEbKtVlKhcq3AOikzn92n9C0tdUEEP2RZw3RKizlSBYDVzI%2FjO%2F%2FCsS0%2F3sOjj0sItPAx%2FXF5HJqWwh%2FWuvJu6dgyecqlQPQZQ%2FZQx4t1MXydLJmBrssUtjh3ljYohFY4t1Rq3yy2Kxd9zgRsmtIo3UzCgyYg%2F4MM%2BCcm29N70GjpwouVGM5%2BmskpH9W4NlkeGgK%2B8mt6QJvZOQkA0xo3Lbh%2FemxH1xrWes4iTTeFQzPtLKOTQkaC2VVqrGmpYGN5Uzo0vjfoPpUSQ3m5VNqH13YmkOQf2AZZAVXRHFM7YYuu3qrcWeRQ8Pdx9mT3xN0%2BZWe%2F9KT7vCBjVFgQpgMWZJKFcPWxbF1uXhAyXhLy8r8r6m3Kv3IkhTfVgnH4JngtAfew6VrBq%2B8XejeHOhht0GWmvUVbAsSow9omTbZpQuTXWMr%2F4cJm5zBnHSx1onIpQL0OQAiliGTFR4LaFTYFdwLokIBHZlpQs8AqOYOEWFViyVSP%2B40Y%2FXnuCFGyFRd8yBKBz%2FTT3ucMEV212rTaMie7XrSAyxY001MMIni8QS%2Fv%2BXwRJPv0fimlQFzvZtRXl55MuthLalbgE99qARpp3soD4SBrYe%2FmkMHsHBtC3g%2FFe9RCqor9Eo6%2Fdy9vZYw1R8Iy1jHjDCopjCBjqkAesFfeW3p31Pv8U7tQJn4CUEl4mAWyeuvnZs4zcQzpy9%2FXchQWdupS%2FwAtctlw0yN34ZgOVYPADew1I6bxJvGU6MXNVid%2Ftp%2F8pwyeZcavGwS5s28tr%2B6U6FmJdcFIIR9k6LYhXQLDeBkt77Bi9AyTHfl2s45gknkZvCyUCwMA8RQr6rhd2cBaylRkmyZT3K4BbE73yn1yb8geOiDYIfyCwRmGpP&X-Amz-Signature=3e7d2d6341388badfbe28f50215a3129944aa4813bc220e61f2e7860113e8ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4F6W4X%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGIv6TEatNryWcMt%2Bw8YbdkV6mH3ip1BjB5jwVlf4ZAIhAIdZmmm%2B3do%2Fj4nJ2qqiY9GGrJJy55eT4E3MlddqEX%2FlKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqlPaQjiEbKtVlKhcq3AOikzn92n9C0tdUEEP2RZw3RKizlSBYDVzI%2FjO%2F%2FCsS0%2F3sOjj0sItPAx%2FXF5HJqWwh%2FWuvJu6dgyecqlQPQZQ%2FZQx4t1MXydLJmBrssUtjh3ljYohFY4t1Rq3yy2Kxd9zgRsmtIo3UzCgyYg%2F4MM%2BCcm29N70GjpwouVGM5%2BmskpH9W4NlkeGgK%2B8mt6QJvZOQkA0xo3Lbh%2FemxH1xrWes4iTTeFQzPtLKOTQkaC2VVqrGmpYGN5Uzo0vjfoPpUSQ3m5VNqH13YmkOQf2AZZAVXRHFM7YYuu3qrcWeRQ8Pdx9mT3xN0%2BZWe%2F9KT7vCBjVFgQpgMWZJKFcPWxbF1uXhAyXhLy8r8r6m3Kv3IkhTfVgnH4JngtAfew6VrBq%2B8XejeHOhht0GWmvUVbAsSow9omTbZpQuTXWMr%2F4cJm5zBnHSx1onIpQL0OQAiliGTFR4LaFTYFdwLokIBHZlpQs8AqOYOEWFViyVSP%2B40Y%2FXnuCFGyFRd8yBKBz%2FTT3ucMEV212rTaMie7XrSAyxY001MMIni8QS%2Fv%2BXwRJPv0fimlQFzvZtRXl55MuthLalbgE99qARpp3soD4SBrYe%2FmkMHsHBtC3g%2FFe9RCqor9Eo6%2Fdy9vZYw1R8Iy1jHjDCopjCBjqkAesFfeW3p31Pv8U7tQJn4CUEl4mAWyeuvnZs4zcQzpy9%2FXchQWdupS%2FwAtctlw0yN34ZgOVYPADew1I6bxJvGU6MXNVid%2Ftp%2F8pwyeZcavGwS5s28tr%2B6U6FmJdcFIIR9k6LYhXQLDeBkt77Bi9AyTHfl2s45gknkZvCyUCwMA8RQr6rhd2cBaylRkmyZT3K4BbE73yn1yb8geOiDYIfyCwRmGpP&X-Amz-Signature=0b83de84b935f601561513bc075c2e69af2fb7cb0c6f83a4242a1de526a591d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4F6W4X%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGIv6TEatNryWcMt%2Bw8YbdkV6mH3ip1BjB5jwVlf4ZAIhAIdZmmm%2B3do%2Fj4nJ2qqiY9GGrJJy55eT4E3MlddqEX%2FlKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqlPaQjiEbKtVlKhcq3AOikzn92n9C0tdUEEP2RZw3RKizlSBYDVzI%2FjO%2F%2FCsS0%2F3sOjj0sItPAx%2FXF5HJqWwh%2FWuvJu6dgyecqlQPQZQ%2FZQx4t1MXydLJmBrssUtjh3ljYohFY4t1Rq3yy2Kxd9zgRsmtIo3UzCgyYg%2F4MM%2BCcm29N70GjpwouVGM5%2BmskpH9W4NlkeGgK%2B8mt6QJvZOQkA0xo3Lbh%2FemxH1xrWes4iTTeFQzPtLKOTQkaC2VVqrGmpYGN5Uzo0vjfoPpUSQ3m5VNqH13YmkOQf2AZZAVXRHFM7YYuu3qrcWeRQ8Pdx9mT3xN0%2BZWe%2F9KT7vCBjVFgQpgMWZJKFcPWxbF1uXhAyXhLy8r8r6m3Kv3IkhTfVgnH4JngtAfew6VrBq%2B8XejeHOhht0GWmvUVbAsSow9omTbZpQuTXWMr%2F4cJm5zBnHSx1onIpQL0OQAiliGTFR4LaFTYFdwLokIBHZlpQs8AqOYOEWFViyVSP%2B40Y%2FXnuCFGyFRd8yBKBz%2FTT3ucMEV212rTaMie7XrSAyxY001MMIni8QS%2Fv%2BXwRJPv0fimlQFzvZtRXl55MuthLalbgE99qARpp3soD4SBrYe%2FmkMHsHBtC3g%2FFe9RCqor9Eo6%2Fdy9vZYw1R8Iy1jHjDCopjCBjqkAesFfeW3p31Pv8U7tQJn4CUEl4mAWyeuvnZs4zcQzpy9%2FXchQWdupS%2FwAtctlw0yN34ZgOVYPADew1I6bxJvGU6MXNVid%2Ftp%2F8pwyeZcavGwS5s28tr%2B6U6FmJdcFIIR9k6LYhXQLDeBkt77Bi9AyTHfl2s45gknkZvCyUCwMA8RQr6rhd2cBaylRkmyZT3K4BbE73yn1yb8geOiDYIfyCwRmGpP&X-Amz-Signature=81cdd2d04c765c59db167bceb0f8374b60fe8fc49e89836782ff854e11dbd7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4F6W4X%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGIv6TEatNryWcMt%2Bw8YbdkV6mH3ip1BjB5jwVlf4ZAIhAIdZmmm%2B3do%2Fj4nJ2qqiY9GGrJJy55eT4E3MlddqEX%2FlKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqlPaQjiEbKtVlKhcq3AOikzn92n9C0tdUEEP2RZw3RKizlSBYDVzI%2FjO%2F%2FCsS0%2F3sOjj0sItPAx%2FXF5HJqWwh%2FWuvJu6dgyecqlQPQZQ%2FZQx4t1MXydLJmBrssUtjh3ljYohFY4t1Rq3yy2Kxd9zgRsmtIo3UzCgyYg%2F4MM%2BCcm29N70GjpwouVGM5%2BmskpH9W4NlkeGgK%2B8mt6QJvZOQkA0xo3Lbh%2FemxH1xrWes4iTTeFQzPtLKOTQkaC2VVqrGmpYGN5Uzo0vjfoPpUSQ3m5VNqH13YmkOQf2AZZAVXRHFM7YYuu3qrcWeRQ8Pdx9mT3xN0%2BZWe%2F9KT7vCBjVFgQpgMWZJKFcPWxbF1uXhAyXhLy8r8r6m3Kv3IkhTfVgnH4JngtAfew6VrBq%2B8XejeHOhht0GWmvUVbAsSow9omTbZpQuTXWMr%2F4cJm5zBnHSx1onIpQL0OQAiliGTFR4LaFTYFdwLokIBHZlpQs8AqOYOEWFViyVSP%2B40Y%2FXnuCFGyFRd8yBKBz%2FTT3ucMEV212rTaMie7XrSAyxY001MMIni8QS%2Fv%2BXwRJPv0fimlQFzvZtRXl55MuthLalbgE99qARpp3soD4SBrYe%2FmkMHsHBtC3g%2FFe9RCqor9Eo6%2Fdy9vZYw1R8Iy1jHjDCopjCBjqkAesFfeW3p31Pv8U7tQJn4CUEl4mAWyeuvnZs4zcQzpy9%2FXchQWdupS%2FwAtctlw0yN34ZgOVYPADew1I6bxJvGU6MXNVid%2Ftp%2F8pwyeZcavGwS5s28tr%2B6U6FmJdcFIIR9k6LYhXQLDeBkt77Bi9AyTHfl2s45gknkZvCyUCwMA8RQr6rhd2cBaylRkmyZT3K4BbE73yn1yb8geOiDYIfyCwRmGpP&X-Amz-Signature=6f985c454c5346c85b279dc17436f5f000cc5ae48c2e6fa8f8163fc4f71fd5e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
