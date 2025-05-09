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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBAXZOR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfeGM%2FJnx7Biz6d4ZeFvAtjtBLeLRpJ9PmQz8xI3Ql%2BAiEA6aKn3AkZP66nDYZHvKGeCwfLchMHViSt2GawAX02vtgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxM10xhqrRPkZFRPSrcA4XHCp4A6WLFZyB24OUDr6nEBTvETpHmoAO0GWZYMDHL2j9vSTkoDCuLu%2FkBM49eDDroP6DTfe0Pda7gdv0q7%2FYHLEaI0fQz980Qxoj%2FNGGmYXo1TGBFjbNrow8TCC9csAmLtR5D%2Bw%2BnsXvtCoS29u3zOcNJPiaMtvGNIq0J1JB9wDZL0%2BtAuZs%2FH40x3us7Urb1cAoQH6W%2BzQziZ8X7NT9pz0tdJ0nhOphYqN%2BPTbwfwjrR39%2FYvSrMgN0sGayUQ3KPagI9nnpHfFgeZnNka4oKxt%2FfFDk0ZrcxjtI6yQMK4eo83DqSTZkcbDI3OtWjxrEauI104w%2Bh130mXiSQq3uN9Rvwfergoc%2B74GjwNfX7ylQ8rU0lwSK9OSS6iYp4%2BIvGXwLxMmD2M6DCzJMrHQN%2FZ4nZc5UCqdh0zdm%2F3LyAARpiuU8uoWBoHSY5snFYhPYbzFKRRdSXzQNPVxPMv%2FhdtR1tdW1lRiyvCkhwHqWvnMBpwD9J172sAfDITc0D8jbGcZKSbuUOczpHuAeh4XDr7aBbXr2sVY6thUvleHdWGQNJlYO%2BeWdwAexHq8Gemn3Ft0xB1r6q3Rjr5Ab2mltqEg%2FrtHSBIQc0VOnnC%2BMu5QRjoWwlXCJofFyyMKWd%2BcAGOqUBd3NDrIQd4k8yXrPJIKDksdvUSkvrNozACYh75gp%2BjwPzn0CvuY%2BAJazY4NmAxMev5W2%2B1ntsGhxul3iLzovKaCh86VQRIl6XlVFmaE2aLwtON%2Fp%2Fye%2F9ZSfuKFueAL55MNEfmVrXgiEyLWbAJAipJlOhBhkTowNZ0l7YJUGsPpL9VyN0R4nFAFGGAE07KjxC7XyyppCrQoJJFZ7zL0u9a1Jp5QmK&X-Amz-Signature=f1fdf845f280173d7966cf0b32fa9a42db2acbb55249a2842e569aa255bdbfcc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBAXZOR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfeGM%2FJnx7Biz6d4ZeFvAtjtBLeLRpJ9PmQz8xI3Ql%2BAiEA6aKn3AkZP66nDYZHvKGeCwfLchMHViSt2GawAX02vtgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxM10xhqrRPkZFRPSrcA4XHCp4A6WLFZyB24OUDr6nEBTvETpHmoAO0GWZYMDHL2j9vSTkoDCuLu%2FkBM49eDDroP6DTfe0Pda7gdv0q7%2FYHLEaI0fQz980Qxoj%2FNGGmYXo1TGBFjbNrow8TCC9csAmLtR5D%2Bw%2BnsXvtCoS29u3zOcNJPiaMtvGNIq0J1JB9wDZL0%2BtAuZs%2FH40x3us7Urb1cAoQH6W%2BzQziZ8X7NT9pz0tdJ0nhOphYqN%2BPTbwfwjrR39%2FYvSrMgN0sGayUQ3KPagI9nnpHfFgeZnNka4oKxt%2FfFDk0ZrcxjtI6yQMK4eo83DqSTZkcbDI3OtWjxrEauI104w%2Bh130mXiSQq3uN9Rvwfergoc%2B74GjwNfX7ylQ8rU0lwSK9OSS6iYp4%2BIvGXwLxMmD2M6DCzJMrHQN%2FZ4nZc5UCqdh0zdm%2F3LyAARpiuU8uoWBoHSY5snFYhPYbzFKRRdSXzQNPVxPMv%2FhdtR1tdW1lRiyvCkhwHqWvnMBpwD9J172sAfDITc0D8jbGcZKSbuUOczpHuAeh4XDr7aBbXr2sVY6thUvleHdWGQNJlYO%2BeWdwAexHq8Gemn3Ft0xB1r6q3Rjr5Ab2mltqEg%2FrtHSBIQc0VOnnC%2BMu5QRjoWwlXCJofFyyMKWd%2BcAGOqUBd3NDrIQd4k8yXrPJIKDksdvUSkvrNozACYh75gp%2BjwPzn0CvuY%2BAJazY4NmAxMev5W2%2B1ntsGhxul3iLzovKaCh86VQRIl6XlVFmaE2aLwtON%2Fp%2Fye%2F9ZSfuKFueAL55MNEfmVrXgiEyLWbAJAipJlOhBhkTowNZ0l7YJUGsPpL9VyN0R4nFAFGGAE07KjxC7XyyppCrQoJJFZ7zL0u9a1Jp5QmK&X-Amz-Signature=45130b317d5b45cba47881b186670c4d6da7a74f35bea01e7358be35880d32c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBAXZOR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfeGM%2FJnx7Biz6d4ZeFvAtjtBLeLRpJ9PmQz8xI3Ql%2BAiEA6aKn3AkZP66nDYZHvKGeCwfLchMHViSt2GawAX02vtgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxM10xhqrRPkZFRPSrcA4XHCp4A6WLFZyB24OUDr6nEBTvETpHmoAO0GWZYMDHL2j9vSTkoDCuLu%2FkBM49eDDroP6DTfe0Pda7gdv0q7%2FYHLEaI0fQz980Qxoj%2FNGGmYXo1TGBFjbNrow8TCC9csAmLtR5D%2Bw%2BnsXvtCoS29u3zOcNJPiaMtvGNIq0J1JB9wDZL0%2BtAuZs%2FH40x3us7Urb1cAoQH6W%2BzQziZ8X7NT9pz0tdJ0nhOphYqN%2BPTbwfwjrR39%2FYvSrMgN0sGayUQ3KPagI9nnpHfFgeZnNka4oKxt%2FfFDk0ZrcxjtI6yQMK4eo83DqSTZkcbDI3OtWjxrEauI104w%2Bh130mXiSQq3uN9Rvwfergoc%2B74GjwNfX7ylQ8rU0lwSK9OSS6iYp4%2BIvGXwLxMmD2M6DCzJMrHQN%2FZ4nZc5UCqdh0zdm%2F3LyAARpiuU8uoWBoHSY5snFYhPYbzFKRRdSXzQNPVxPMv%2FhdtR1tdW1lRiyvCkhwHqWvnMBpwD9J172sAfDITc0D8jbGcZKSbuUOczpHuAeh4XDr7aBbXr2sVY6thUvleHdWGQNJlYO%2BeWdwAexHq8Gemn3Ft0xB1r6q3Rjr5Ab2mltqEg%2FrtHSBIQc0VOnnC%2BMu5QRjoWwlXCJofFyyMKWd%2BcAGOqUBd3NDrIQd4k8yXrPJIKDksdvUSkvrNozACYh75gp%2BjwPzn0CvuY%2BAJazY4NmAxMev5W2%2B1ntsGhxul3iLzovKaCh86VQRIl6XlVFmaE2aLwtON%2Fp%2Fye%2F9ZSfuKFueAL55MNEfmVrXgiEyLWbAJAipJlOhBhkTowNZ0l7YJUGsPpL9VyN0R4nFAFGGAE07KjxC7XyyppCrQoJJFZ7zL0u9a1Jp5QmK&X-Amz-Signature=b8e78779984404401443050ec2f082a0d5cb0152775cad07a10c3f49c4f04195&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBAXZOR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfeGM%2FJnx7Biz6d4ZeFvAtjtBLeLRpJ9PmQz8xI3Ql%2BAiEA6aKn3AkZP66nDYZHvKGeCwfLchMHViSt2GawAX02vtgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxM10xhqrRPkZFRPSrcA4XHCp4A6WLFZyB24OUDr6nEBTvETpHmoAO0GWZYMDHL2j9vSTkoDCuLu%2FkBM49eDDroP6DTfe0Pda7gdv0q7%2FYHLEaI0fQz980Qxoj%2FNGGmYXo1TGBFjbNrow8TCC9csAmLtR5D%2Bw%2BnsXvtCoS29u3zOcNJPiaMtvGNIq0J1JB9wDZL0%2BtAuZs%2FH40x3us7Urb1cAoQH6W%2BzQziZ8X7NT9pz0tdJ0nhOphYqN%2BPTbwfwjrR39%2FYvSrMgN0sGayUQ3KPagI9nnpHfFgeZnNka4oKxt%2FfFDk0ZrcxjtI6yQMK4eo83DqSTZkcbDI3OtWjxrEauI104w%2Bh130mXiSQq3uN9Rvwfergoc%2B74GjwNfX7ylQ8rU0lwSK9OSS6iYp4%2BIvGXwLxMmD2M6DCzJMrHQN%2FZ4nZc5UCqdh0zdm%2F3LyAARpiuU8uoWBoHSY5snFYhPYbzFKRRdSXzQNPVxPMv%2FhdtR1tdW1lRiyvCkhwHqWvnMBpwD9J172sAfDITc0D8jbGcZKSbuUOczpHuAeh4XDr7aBbXr2sVY6thUvleHdWGQNJlYO%2BeWdwAexHq8Gemn3Ft0xB1r6q3Rjr5Ab2mltqEg%2FrtHSBIQc0VOnnC%2BMu5QRjoWwlXCJofFyyMKWd%2BcAGOqUBd3NDrIQd4k8yXrPJIKDksdvUSkvrNozACYh75gp%2BjwPzn0CvuY%2BAJazY4NmAxMev5W2%2B1ntsGhxul3iLzovKaCh86VQRIl6XlVFmaE2aLwtON%2Fp%2Fye%2F9ZSfuKFueAL55MNEfmVrXgiEyLWbAJAipJlOhBhkTowNZ0l7YJUGsPpL9VyN0R4nFAFGGAE07KjxC7XyyppCrQoJJFZ7zL0u9a1Jp5QmK&X-Amz-Signature=8028473fdfeabd3840b2622bca92210c1efb9e4084dba56a58054d3891eb7d49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBAXZOR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfeGM%2FJnx7Biz6d4ZeFvAtjtBLeLRpJ9PmQz8xI3Ql%2BAiEA6aKn3AkZP66nDYZHvKGeCwfLchMHViSt2GawAX02vtgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxM10xhqrRPkZFRPSrcA4XHCp4A6WLFZyB24OUDr6nEBTvETpHmoAO0GWZYMDHL2j9vSTkoDCuLu%2FkBM49eDDroP6DTfe0Pda7gdv0q7%2FYHLEaI0fQz980Qxoj%2FNGGmYXo1TGBFjbNrow8TCC9csAmLtR5D%2Bw%2BnsXvtCoS29u3zOcNJPiaMtvGNIq0J1JB9wDZL0%2BtAuZs%2FH40x3us7Urb1cAoQH6W%2BzQziZ8X7NT9pz0tdJ0nhOphYqN%2BPTbwfwjrR39%2FYvSrMgN0sGayUQ3KPagI9nnpHfFgeZnNka4oKxt%2FfFDk0ZrcxjtI6yQMK4eo83DqSTZkcbDI3OtWjxrEauI104w%2Bh130mXiSQq3uN9Rvwfergoc%2B74GjwNfX7ylQ8rU0lwSK9OSS6iYp4%2BIvGXwLxMmD2M6DCzJMrHQN%2FZ4nZc5UCqdh0zdm%2F3LyAARpiuU8uoWBoHSY5snFYhPYbzFKRRdSXzQNPVxPMv%2FhdtR1tdW1lRiyvCkhwHqWvnMBpwD9J172sAfDITc0D8jbGcZKSbuUOczpHuAeh4XDr7aBbXr2sVY6thUvleHdWGQNJlYO%2BeWdwAexHq8Gemn3Ft0xB1r6q3Rjr5Ab2mltqEg%2FrtHSBIQc0VOnnC%2BMu5QRjoWwlXCJofFyyMKWd%2BcAGOqUBd3NDrIQd4k8yXrPJIKDksdvUSkvrNozACYh75gp%2BjwPzn0CvuY%2BAJazY4NmAxMev5W2%2B1ntsGhxul3iLzovKaCh86VQRIl6XlVFmaE2aLwtON%2Fp%2Fye%2F9ZSfuKFueAL55MNEfmVrXgiEyLWbAJAipJlOhBhkTowNZ0l7YJUGsPpL9VyN0R4nFAFGGAE07KjxC7XyyppCrQoJJFZ7zL0u9a1Jp5QmK&X-Amz-Signature=51d4496168a03ea257676a5c7f53dc939fc50237e64be4c777c48e14cf09e9f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBAXZOR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfeGM%2FJnx7Biz6d4ZeFvAtjtBLeLRpJ9PmQz8xI3Ql%2BAiEA6aKn3AkZP66nDYZHvKGeCwfLchMHViSt2GawAX02vtgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxM10xhqrRPkZFRPSrcA4XHCp4A6WLFZyB24OUDr6nEBTvETpHmoAO0GWZYMDHL2j9vSTkoDCuLu%2FkBM49eDDroP6DTfe0Pda7gdv0q7%2FYHLEaI0fQz980Qxoj%2FNGGmYXo1TGBFjbNrow8TCC9csAmLtR5D%2Bw%2BnsXvtCoS29u3zOcNJPiaMtvGNIq0J1JB9wDZL0%2BtAuZs%2FH40x3us7Urb1cAoQH6W%2BzQziZ8X7NT9pz0tdJ0nhOphYqN%2BPTbwfwjrR39%2FYvSrMgN0sGayUQ3KPagI9nnpHfFgeZnNka4oKxt%2FfFDk0ZrcxjtI6yQMK4eo83DqSTZkcbDI3OtWjxrEauI104w%2Bh130mXiSQq3uN9Rvwfergoc%2B74GjwNfX7ylQ8rU0lwSK9OSS6iYp4%2BIvGXwLxMmD2M6DCzJMrHQN%2FZ4nZc5UCqdh0zdm%2F3LyAARpiuU8uoWBoHSY5snFYhPYbzFKRRdSXzQNPVxPMv%2FhdtR1tdW1lRiyvCkhwHqWvnMBpwD9J172sAfDITc0D8jbGcZKSbuUOczpHuAeh4XDr7aBbXr2sVY6thUvleHdWGQNJlYO%2BeWdwAexHq8Gemn3Ft0xB1r6q3Rjr5Ab2mltqEg%2FrtHSBIQc0VOnnC%2BMu5QRjoWwlXCJofFyyMKWd%2BcAGOqUBd3NDrIQd4k8yXrPJIKDksdvUSkvrNozACYh75gp%2BjwPzn0CvuY%2BAJazY4NmAxMev5W2%2B1ntsGhxul3iLzovKaCh86VQRIl6XlVFmaE2aLwtON%2Fp%2Fye%2F9ZSfuKFueAL55MNEfmVrXgiEyLWbAJAipJlOhBhkTowNZ0l7YJUGsPpL9VyN0R4nFAFGGAE07KjxC7XyyppCrQoJJFZ7zL0u9a1Jp5QmK&X-Amz-Signature=d5d8c5a2ef27bf9c8686337c4f6efc5fc4265c185cdf6a1b912546ed644e607d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBAXZOR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfeGM%2FJnx7Biz6d4ZeFvAtjtBLeLRpJ9PmQz8xI3Ql%2BAiEA6aKn3AkZP66nDYZHvKGeCwfLchMHViSt2GawAX02vtgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxM10xhqrRPkZFRPSrcA4XHCp4A6WLFZyB24OUDr6nEBTvETpHmoAO0GWZYMDHL2j9vSTkoDCuLu%2FkBM49eDDroP6DTfe0Pda7gdv0q7%2FYHLEaI0fQz980Qxoj%2FNGGmYXo1TGBFjbNrow8TCC9csAmLtR5D%2Bw%2BnsXvtCoS29u3zOcNJPiaMtvGNIq0J1JB9wDZL0%2BtAuZs%2FH40x3us7Urb1cAoQH6W%2BzQziZ8X7NT9pz0tdJ0nhOphYqN%2BPTbwfwjrR39%2FYvSrMgN0sGayUQ3KPagI9nnpHfFgeZnNka4oKxt%2FfFDk0ZrcxjtI6yQMK4eo83DqSTZkcbDI3OtWjxrEauI104w%2Bh130mXiSQq3uN9Rvwfergoc%2B74GjwNfX7ylQ8rU0lwSK9OSS6iYp4%2BIvGXwLxMmD2M6DCzJMrHQN%2FZ4nZc5UCqdh0zdm%2F3LyAARpiuU8uoWBoHSY5snFYhPYbzFKRRdSXzQNPVxPMv%2FhdtR1tdW1lRiyvCkhwHqWvnMBpwD9J172sAfDITc0D8jbGcZKSbuUOczpHuAeh4XDr7aBbXr2sVY6thUvleHdWGQNJlYO%2BeWdwAexHq8Gemn3Ft0xB1r6q3Rjr5Ab2mltqEg%2FrtHSBIQc0VOnnC%2BMu5QRjoWwlXCJofFyyMKWd%2BcAGOqUBd3NDrIQd4k8yXrPJIKDksdvUSkvrNozACYh75gp%2BjwPzn0CvuY%2BAJazY4NmAxMev5W2%2B1ntsGhxul3iLzovKaCh86VQRIl6XlVFmaE2aLwtON%2Fp%2Fye%2F9ZSfuKFueAL55MNEfmVrXgiEyLWbAJAipJlOhBhkTowNZ0l7YJUGsPpL9VyN0R4nFAFGGAE07KjxC7XyyppCrQoJJFZ7zL0u9a1Jp5QmK&X-Amz-Signature=d801bcbb2fe2e59f10b7f67b4ba039e113d8a8a98b2bd37ad151cc8d292d938a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBAXZOR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfeGM%2FJnx7Biz6d4ZeFvAtjtBLeLRpJ9PmQz8xI3Ql%2BAiEA6aKn3AkZP66nDYZHvKGeCwfLchMHViSt2GawAX02vtgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxM10xhqrRPkZFRPSrcA4XHCp4A6WLFZyB24OUDr6nEBTvETpHmoAO0GWZYMDHL2j9vSTkoDCuLu%2FkBM49eDDroP6DTfe0Pda7gdv0q7%2FYHLEaI0fQz980Qxoj%2FNGGmYXo1TGBFjbNrow8TCC9csAmLtR5D%2Bw%2BnsXvtCoS29u3zOcNJPiaMtvGNIq0J1JB9wDZL0%2BtAuZs%2FH40x3us7Urb1cAoQH6W%2BzQziZ8X7NT9pz0tdJ0nhOphYqN%2BPTbwfwjrR39%2FYvSrMgN0sGayUQ3KPagI9nnpHfFgeZnNka4oKxt%2FfFDk0ZrcxjtI6yQMK4eo83DqSTZkcbDI3OtWjxrEauI104w%2Bh130mXiSQq3uN9Rvwfergoc%2B74GjwNfX7ylQ8rU0lwSK9OSS6iYp4%2BIvGXwLxMmD2M6DCzJMrHQN%2FZ4nZc5UCqdh0zdm%2F3LyAARpiuU8uoWBoHSY5snFYhPYbzFKRRdSXzQNPVxPMv%2FhdtR1tdW1lRiyvCkhwHqWvnMBpwD9J172sAfDITc0D8jbGcZKSbuUOczpHuAeh4XDr7aBbXr2sVY6thUvleHdWGQNJlYO%2BeWdwAexHq8Gemn3Ft0xB1r6q3Rjr5Ab2mltqEg%2FrtHSBIQc0VOnnC%2BMu5QRjoWwlXCJofFyyMKWd%2BcAGOqUBd3NDrIQd4k8yXrPJIKDksdvUSkvrNozACYh75gp%2BjwPzn0CvuY%2BAJazY4NmAxMev5W2%2B1ntsGhxul3iLzovKaCh86VQRIl6XlVFmaE2aLwtON%2Fp%2Fye%2F9ZSfuKFueAL55MNEfmVrXgiEyLWbAJAipJlOhBhkTowNZ0l7YJUGsPpL9VyN0R4nFAFGGAE07KjxC7XyyppCrQoJJFZ7zL0u9a1Jp5QmK&X-Amz-Signature=343d7ba75f0d58a6e3c70cb72dd35d50c03e8cbed54172a58b5157851f9ed82b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
