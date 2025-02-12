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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTX554NU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4zgBcBWcx7vFHVrlEI55J%2Br%2FqIleyA5m2vzN25EIBUQIgG3er8tHYqKCOGyyQgmETXdYSNTDqVBgCsQL%2FT0dsXCIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr8oe1zd1bji%2B3c2SrcA%2BxdGgyJY25gj2uLuHBXoM5Kb5pJEMKhVofO42n5bcxCKGK0dxi%2FSyFZSuph6wnQ3L6Av%2BPWxQ8rEVDt0NwuY7Q7vP%2FOBceIE3W%2FzuhELlF9APyy4pEld8tikQr1OeKrs8LEPaJvYhkbTIedMoDOKWRTxJsL5MQe6lY7i0euMB7MvunB96UR3yaJreap62WynuVSs0gVWwlPRWvPwVaWD%2B6led%2BwW54fE70vO0DtkRcICI8U1v01npRn1voALz9B5uvvMwcvgGbvKnb%2BcwbLyx%2FyVfbgnw%2BzC33IbUPIj4IU7j08IYSNlNpduBAts089n3HD87En%2ByCJACLYrHjf0hbIlc4mdKghGSTFMzDtAMZlALrf4kRYQet96g%2B5sO9oTqKySqbHVlczy7gES63dWHjrnbp4nOKbBlAouWhBYj7QrZnhPgTJE0U98CV1HCsVniNh%2FBHO6X9aSK2g7wxWud12IH1QREyZ7eiG2qDkw%2FMMfKuNp333z4KYOXEyjKID4QACsHJl%2BkFULlxBUo3f5dODGUcihd7qfvavfgK5%2BrYOMzR1h7RBFsOJGL1ArgavdBx3rOvmikdaXM3bTnw78Wu%2FMvO85EomponaoZKrmpmNF9rGS7AGsAGdXrHkMMewsr0GOqUBdTE0seOM4ovTqlyrZ5sL8AFDyD9ZF54zvlThlycmnzjLQPieV6RN5Kl%2FDPQyx5Atp7EVaC0B7dT1KvoBAHYOdmh2VULKOZUwmYwCTX4t8P47zVx5jqfCudC4oQnajgpQdFYiDQjFwGFgDI9bca0mdEyYA%2B6U8fLWzja3cDw0cgZHBK0pmJIVLt2HZ8VL3zChIUnYZl290pox4o2FNQJvZ62SBhYI&X-Amz-Signature=5e7bbf36b202ec1e0f9950e8ab2c5a01cd483fc6c01b1870e923208e311b16c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTX554NU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4zgBcBWcx7vFHVrlEI55J%2Br%2FqIleyA5m2vzN25EIBUQIgG3er8tHYqKCOGyyQgmETXdYSNTDqVBgCsQL%2FT0dsXCIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr8oe1zd1bji%2B3c2SrcA%2BxdGgyJY25gj2uLuHBXoM5Kb5pJEMKhVofO42n5bcxCKGK0dxi%2FSyFZSuph6wnQ3L6Av%2BPWxQ8rEVDt0NwuY7Q7vP%2FOBceIE3W%2FzuhELlF9APyy4pEld8tikQr1OeKrs8LEPaJvYhkbTIedMoDOKWRTxJsL5MQe6lY7i0euMB7MvunB96UR3yaJreap62WynuVSs0gVWwlPRWvPwVaWD%2B6led%2BwW54fE70vO0DtkRcICI8U1v01npRn1voALz9B5uvvMwcvgGbvKnb%2BcwbLyx%2FyVfbgnw%2BzC33IbUPIj4IU7j08IYSNlNpduBAts089n3HD87En%2ByCJACLYrHjf0hbIlc4mdKghGSTFMzDtAMZlALrf4kRYQet96g%2B5sO9oTqKySqbHVlczy7gES63dWHjrnbp4nOKbBlAouWhBYj7QrZnhPgTJE0U98CV1HCsVniNh%2FBHO6X9aSK2g7wxWud12IH1QREyZ7eiG2qDkw%2FMMfKuNp333z4KYOXEyjKID4QACsHJl%2BkFULlxBUo3f5dODGUcihd7qfvavfgK5%2BrYOMzR1h7RBFsOJGL1ArgavdBx3rOvmikdaXM3bTnw78Wu%2FMvO85EomponaoZKrmpmNF9rGS7AGsAGdXrHkMMewsr0GOqUBdTE0seOM4ovTqlyrZ5sL8AFDyD9ZF54zvlThlycmnzjLQPieV6RN5Kl%2FDPQyx5Atp7EVaC0B7dT1KvoBAHYOdmh2VULKOZUwmYwCTX4t8P47zVx5jqfCudC4oQnajgpQdFYiDQjFwGFgDI9bca0mdEyYA%2B6U8fLWzja3cDw0cgZHBK0pmJIVLt2HZ8VL3zChIUnYZl290pox4o2FNQJvZ62SBhYI&X-Amz-Signature=bcd13067e0ccd9cbf0695a8b4038a0a12758dfdf9de1690435fc88b35ad8da9e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTX554NU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4zgBcBWcx7vFHVrlEI55J%2Br%2FqIleyA5m2vzN25EIBUQIgG3er8tHYqKCOGyyQgmETXdYSNTDqVBgCsQL%2FT0dsXCIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr8oe1zd1bji%2B3c2SrcA%2BxdGgyJY25gj2uLuHBXoM5Kb5pJEMKhVofO42n5bcxCKGK0dxi%2FSyFZSuph6wnQ3L6Av%2BPWxQ8rEVDt0NwuY7Q7vP%2FOBceIE3W%2FzuhELlF9APyy4pEld8tikQr1OeKrs8LEPaJvYhkbTIedMoDOKWRTxJsL5MQe6lY7i0euMB7MvunB96UR3yaJreap62WynuVSs0gVWwlPRWvPwVaWD%2B6led%2BwW54fE70vO0DtkRcICI8U1v01npRn1voALz9B5uvvMwcvgGbvKnb%2BcwbLyx%2FyVfbgnw%2BzC33IbUPIj4IU7j08IYSNlNpduBAts089n3HD87En%2ByCJACLYrHjf0hbIlc4mdKghGSTFMzDtAMZlALrf4kRYQet96g%2B5sO9oTqKySqbHVlczy7gES63dWHjrnbp4nOKbBlAouWhBYj7QrZnhPgTJE0U98CV1HCsVniNh%2FBHO6X9aSK2g7wxWud12IH1QREyZ7eiG2qDkw%2FMMfKuNp333z4KYOXEyjKID4QACsHJl%2BkFULlxBUo3f5dODGUcihd7qfvavfgK5%2BrYOMzR1h7RBFsOJGL1ArgavdBx3rOvmikdaXM3bTnw78Wu%2FMvO85EomponaoZKrmpmNF9rGS7AGsAGdXrHkMMewsr0GOqUBdTE0seOM4ovTqlyrZ5sL8AFDyD9ZF54zvlThlycmnzjLQPieV6RN5Kl%2FDPQyx5Atp7EVaC0B7dT1KvoBAHYOdmh2VULKOZUwmYwCTX4t8P47zVx5jqfCudC4oQnajgpQdFYiDQjFwGFgDI9bca0mdEyYA%2B6U8fLWzja3cDw0cgZHBK0pmJIVLt2HZ8VL3zChIUnYZl290pox4o2FNQJvZ62SBhYI&X-Amz-Signature=ffc10f909490dad389962932fdc6a217bc7c05bdc7c56047164d6b56347be6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTX554NU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4zgBcBWcx7vFHVrlEI55J%2Br%2FqIleyA5m2vzN25EIBUQIgG3er8tHYqKCOGyyQgmETXdYSNTDqVBgCsQL%2FT0dsXCIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr8oe1zd1bji%2B3c2SrcA%2BxdGgyJY25gj2uLuHBXoM5Kb5pJEMKhVofO42n5bcxCKGK0dxi%2FSyFZSuph6wnQ3L6Av%2BPWxQ8rEVDt0NwuY7Q7vP%2FOBceIE3W%2FzuhELlF9APyy4pEld8tikQr1OeKrs8LEPaJvYhkbTIedMoDOKWRTxJsL5MQe6lY7i0euMB7MvunB96UR3yaJreap62WynuVSs0gVWwlPRWvPwVaWD%2B6led%2BwW54fE70vO0DtkRcICI8U1v01npRn1voALz9B5uvvMwcvgGbvKnb%2BcwbLyx%2FyVfbgnw%2BzC33IbUPIj4IU7j08IYSNlNpduBAts089n3HD87En%2ByCJACLYrHjf0hbIlc4mdKghGSTFMzDtAMZlALrf4kRYQet96g%2B5sO9oTqKySqbHVlczy7gES63dWHjrnbp4nOKbBlAouWhBYj7QrZnhPgTJE0U98CV1HCsVniNh%2FBHO6X9aSK2g7wxWud12IH1QREyZ7eiG2qDkw%2FMMfKuNp333z4KYOXEyjKID4QACsHJl%2BkFULlxBUo3f5dODGUcihd7qfvavfgK5%2BrYOMzR1h7RBFsOJGL1ArgavdBx3rOvmikdaXM3bTnw78Wu%2FMvO85EomponaoZKrmpmNF9rGS7AGsAGdXrHkMMewsr0GOqUBdTE0seOM4ovTqlyrZ5sL8AFDyD9ZF54zvlThlycmnzjLQPieV6RN5Kl%2FDPQyx5Atp7EVaC0B7dT1KvoBAHYOdmh2VULKOZUwmYwCTX4t8P47zVx5jqfCudC4oQnajgpQdFYiDQjFwGFgDI9bca0mdEyYA%2B6U8fLWzja3cDw0cgZHBK0pmJIVLt2HZ8VL3zChIUnYZl290pox4o2FNQJvZ62SBhYI&X-Amz-Signature=7f5ee3c0bffe77fe7ee432979beaa7872747777bd0f532a474ced2e231bffd76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTX554NU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4zgBcBWcx7vFHVrlEI55J%2Br%2FqIleyA5m2vzN25EIBUQIgG3er8tHYqKCOGyyQgmETXdYSNTDqVBgCsQL%2FT0dsXCIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr8oe1zd1bji%2B3c2SrcA%2BxdGgyJY25gj2uLuHBXoM5Kb5pJEMKhVofO42n5bcxCKGK0dxi%2FSyFZSuph6wnQ3L6Av%2BPWxQ8rEVDt0NwuY7Q7vP%2FOBceIE3W%2FzuhELlF9APyy4pEld8tikQr1OeKrs8LEPaJvYhkbTIedMoDOKWRTxJsL5MQe6lY7i0euMB7MvunB96UR3yaJreap62WynuVSs0gVWwlPRWvPwVaWD%2B6led%2BwW54fE70vO0DtkRcICI8U1v01npRn1voALz9B5uvvMwcvgGbvKnb%2BcwbLyx%2FyVfbgnw%2BzC33IbUPIj4IU7j08IYSNlNpduBAts089n3HD87En%2ByCJACLYrHjf0hbIlc4mdKghGSTFMzDtAMZlALrf4kRYQet96g%2B5sO9oTqKySqbHVlczy7gES63dWHjrnbp4nOKbBlAouWhBYj7QrZnhPgTJE0U98CV1HCsVniNh%2FBHO6X9aSK2g7wxWud12IH1QREyZ7eiG2qDkw%2FMMfKuNp333z4KYOXEyjKID4QACsHJl%2BkFULlxBUo3f5dODGUcihd7qfvavfgK5%2BrYOMzR1h7RBFsOJGL1ArgavdBx3rOvmikdaXM3bTnw78Wu%2FMvO85EomponaoZKrmpmNF9rGS7AGsAGdXrHkMMewsr0GOqUBdTE0seOM4ovTqlyrZ5sL8AFDyD9ZF54zvlThlycmnzjLQPieV6RN5Kl%2FDPQyx5Atp7EVaC0B7dT1KvoBAHYOdmh2VULKOZUwmYwCTX4t8P47zVx5jqfCudC4oQnajgpQdFYiDQjFwGFgDI9bca0mdEyYA%2B6U8fLWzja3cDw0cgZHBK0pmJIVLt2HZ8VL3zChIUnYZl290pox4o2FNQJvZ62SBhYI&X-Amz-Signature=c34c8a9a8ddff7fb3dc2a8758b75b112daead768b9633957fe03c3a6181fbe00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTX554NU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4zgBcBWcx7vFHVrlEI55J%2Br%2FqIleyA5m2vzN25EIBUQIgG3er8tHYqKCOGyyQgmETXdYSNTDqVBgCsQL%2FT0dsXCIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr8oe1zd1bji%2B3c2SrcA%2BxdGgyJY25gj2uLuHBXoM5Kb5pJEMKhVofO42n5bcxCKGK0dxi%2FSyFZSuph6wnQ3L6Av%2BPWxQ8rEVDt0NwuY7Q7vP%2FOBceIE3W%2FzuhELlF9APyy4pEld8tikQr1OeKrs8LEPaJvYhkbTIedMoDOKWRTxJsL5MQe6lY7i0euMB7MvunB96UR3yaJreap62WynuVSs0gVWwlPRWvPwVaWD%2B6led%2BwW54fE70vO0DtkRcICI8U1v01npRn1voALz9B5uvvMwcvgGbvKnb%2BcwbLyx%2FyVfbgnw%2BzC33IbUPIj4IU7j08IYSNlNpduBAts089n3HD87En%2ByCJACLYrHjf0hbIlc4mdKghGSTFMzDtAMZlALrf4kRYQet96g%2B5sO9oTqKySqbHVlczy7gES63dWHjrnbp4nOKbBlAouWhBYj7QrZnhPgTJE0U98CV1HCsVniNh%2FBHO6X9aSK2g7wxWud12IH1QREyZ7eiG2qDkw%2FMMfKuNp333z4KYOXEyjKID4QACsHJl%2BkFULlxBUo3f5dODGUcihd7qfvavfgK5%2BrYOMzR1h7RBFsOJGL1ArgavdBx3rOvmikdaXM3bTnw78Wu%2FMvO85EomponaoZKrmpmNF9rGS7AGsAGdXrHkMMewsr0GOqUBdTE0seOM4ovTqlyrZ5sL8AFDyD9ZF54zvlThlycmnzjLQPieV6RN5Kl%2FDPQyx5Atp7EVaC0B7dT1KvoBAHYOdmh2VULKOZUwmYwCTX4t8P47zVx5jqfCudC4oQnajgpQdFYiDQjFwGFgDI9bca0mdEyYA%2B6U8fLWzja3cDw0cgZHBK0pmJIVLt2HZ8VL3zChIUnYZl290pox4o2FNQJvZ62SBhYI&X-Amz-Signature=d4cd789f83d18a1f3598a7ea45e6629d84ea1e260c8c5f78d6f75362bab48b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTX554NU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4zgBcBWcx7vFHVrlEI55J%2Br%2FqIleyA5m2vzN25EIBUQIgG3er8tHYqKCOGyyQgmETXdYSNTDqVBgCsQL%2FT0dsXCIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr8oe1zd1bji%2B3c2SrcA%2BxdGgyJY25gj2uLuHBXoM5Kb5pJEMKhVofO42n5bcxCKGK0dxi%2FSyFZSuph6wnQ3L6Av%2BPWxQ8rEVDt0NwuY7Q7vP%2FOBceIE3W%2FzuhELlF9APyy4pEld8tikQr1OeKrs8LEPaJvYhkbTIedMoDOKWRTxJsL5MQe6lY7i0euMB7MvunB96UR3yaJreap62WynuVSs0gVWwlPRWvPwVaWD%2B6led%2BwW54fE70vO0DtkRcICI8U1v01npRn1voALz9B5uvvMwcvgGbvKnb%2BcwbLyx%2FyVfbgnw%2BzC33IbUPIj4IU7j08IYSNlNpduBAts089n3HD87En%2ByCJACLYrHjf0hbIlc4mdKghGSTFMzDtAMZlALrf4kRYQet96g%2B5sO9oTqKySqbHVlczy7gES63dWHjrnbp4nOKbBlAouWhBYj7QrZnhPgTJE0U98CV1HCsVniNh%2FBHO6X9aSK2g7wxWud12IH1QREyZ7eiG2qDkw%2FMMfKuNp333z4KYOXEyjKID4QACsHJl%2BkFULlxBUo3f5dODGUcihd7qfvavfgK5%2BrYOMzR1h7RBFsOJGL1ArgavdBx3rOvmikdaXM3bTnw78Wu%2FMvO85EomponaoZKrmpmNF9rGS7AGsAGdXrHkMMewsr0GOqUBdTE0seOM4ovTqlyrZ5sL8AFDyD9ZF54zvlThlycmnzjLQPieV6RN5Kl%2FDPQyx5Atp7EVaC0B7dT1KvoBAHYOdmh2VULKOZUwmYwCTX4t8P47zVx5jqfCudC4oQnajgpQdFYiDQjFwGFgDI9bca0mdEyYA%2B6U8fLWzja3cDw0cgZHBK0pmJIVLt2HZ8VL3zChIUnYZl290pox4o2FNQJvZ62SBhYI&X-Amz-Signature=4b47897d219dc46b2af530599e79aa7efa723a0dcee3bf66f8be16f76b48df28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTX554NU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4zgBcBWcx7vFHVrlEI55J%2Br%2FqIleyA5m2vzN25EIBUQIgG3er8tHYqKCOGyyQgmETXdYSNTDqVBgCsQL%2FT0dsXCIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr8oe1zd1bji%2B3c2SrcA%2BxdGgyJY25gj2uLuHBXoM5Kb5pJEMKhVofO42n5bcxCKGK0dxi%2FSyFZSuph6wnQ3L6Av%2BPWxQ8rEVDt0NwuY7Q7vP%2FOBceIE3W%2FzuhELlF9APyy4pEld8tikQr1OeKrs8LEPaJvYhkbTIedMoDOKWRTxJsL5MQe6lY7i0euMB7MvunB96UR3yaJreap62WynuVSs0gVWwlPRWvPwVaWD%2B6led%2BwW54fE70vO0DtkRcICI8U1v01npRn1voALz9B5uvvMwcvgGbvKnb%2BcwbLyx%2FyVfbgnw%2BzC33IbUPIj4IU7j08IYSNlNpduBAts089n3HD87En%2ByCJACLYrHjf0hbIlc4mdKghGSTFMzDtAMZlALrf4kRYQet96g%2B5sO9oTqKySqbHVlczy7gES63dWHjrnbp4nOKbBlAouWhBYj7QrZnhPgTJE0U98CV1HCsVniNh%2FBHO6X9aSK2g7wxWud12IH1QREyZ7eiG2qDkw%2FMMfKuNp333z4KYOXEyjKID4QACsHJl%2BkFULlxBUo3f5dODGUcihd7qfvavfgK5%2BrYOMzR1h7RBFsOJGL1ArgavdBx3rOvmikdaXM3bTnw78Wu%2FMvO85EomponaoZKrmpmNF9rGS7AGsAGdXrHkMMewsr0GOqUBdTE0seOM4ovTqlyrZ5sL8AFDyD9ZF54zvlThlycmnzjLQPieV6RN5Kl%2FDPQyx5Atp7EVaC0B7dT1KvoBAHYOdmh2VULKOZUwmYwCTX4t8P47zVx5jqfCudC4oQnajgpQdFYiDQjFwGFgDI9bca0mdEyYA%2B6U8fLWzja3cDw0cgZHBK0pmJIVLt2HZ8VL3zChIUnYZl290pox4o2FNQJvZ62SBhYI&X-Amz-Signature=fb61763acff3fcc771c5e72570f9cf3b0ae6e008ff92459dbc5d669e04ce139d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
