---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7CFDZJ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTaexM6aCaJ1BPBbXyeER%2B3e6eGPkoHy1fT5Nz98%2BoAiEA1gdfJJJy1gqm%2BvsETaNw8bsY5EfxvW9Kp%2Fbf3Ll%2FaYMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGL6M23n6RvGMxeJZCrcA6rV1v6KgGl0O2Cxz8lZ6fMOcL97UxPLFOnqsHYlYXENNEyxouRhjA7OS5XoseZQHaqJNH8%2FRaQhAU%2BAyZCQ%2Fffywq8CDV9i%2BMOnoshG%2BABt4qzbxShheK6kF8lhGhUowu54Y5QSrq57qn5Dme8vHWWTvGUXH35W8xHr1txDWvFVfKfucjYckDdMzYwRqQR3LPP6wD931pjzQPLa7H6i%2BZbY3pfENQ6mfEfLNrYK2Wj1Oeszi7RmHJ9v%2BJI5nvsLTVY2THrjU0JNmOmy4MbMZfuB0Ig8p43L6YuSd3KhtEyca0OSxcEcU8M%2Fg5bizzZ0DG53G7tM9yj0vS8cvjLFkHnwr3Mqa%2BcWTZ%2BuLEMA925K0LEAAqbT2Gk%2F0g7%2BYKifZ6VQq1MTFUXVBun6BceBz9h5UHRwppCYUs3MNKJ5FDcVbpMUbyrVZTefWgupyDucJpthPJQUjN6yyvT3KX6qNKvJxHmjc1M3DE15wJAqHgZI890%2BNc1qplDCJlndaFjkhIJ%2BugBBSlLAz9bbyUIFam6sa%2Ftogz%2FC2pkLXut%2FSC7YcTCADFm5efdnSmDZaiOJpt%2FRfy2xmQiIgVDAog4Dy8Fg5uKZIdCQSlxVBoQSEOuYxGMNBEw7XDCc2qTkMLyH7M4GOqUBMn8rMoS%2FU%2FeXaiaYZEReZ6HrmzAop%2Fye1fsE612Uy7ZPjahhtqcvhhXfcwjS3l4RIgCNoBapiGNzethLg%2FwZvYo8GLGs8nbZHY8lK0QwaelVWaoucewqaNXgjk0UhE%2Fap%2F%2FvXRRRlt0ZY2S%2FW1fKA76%2F%2FshtkCXNgGrEy9ie2Cx0CRXmZqUbHkM2RHM%2BBDj7LaGEHKbcVsfbprEmndca29IFfLum&X-Amz-Signature=afdb52c12535972e38ee129cceb27d01710d47473342172c6adf485398656998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7CFDZJ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTaexM6aCaJ1BPBbXyeER%2B3e6eGPkoHy1fT5Nz98%2BoAiEA1gdfJJJy1gqm%2BvsETaNw8bsY5EfxvW9Kp%2Fbf3Ll%2FaYMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGL6M23n6RvGMxeJZCrcA6rV1v6KgGl0O2Cxz8lZ6fMOcL97UxPLFOnqsHYlYXENNEyxouRhjA7OS5XoseZQHaqJNH8%2FRaQhAU%2BAyZCQ%2Fffywq8CDV9i%2BMOnoshG%2BABt4qzbxShheK6kF8lhGhUowu54Y5QSrq57qn5Dme8vHWWTvGUXH35W8xHr1txDWvFVfKfucjYckDdMzYwRqQR3LPP6wD931pjzQPLa7H6i%2BZbY3pfENQ6mfEfLNrYK2Wj1Oeszi7RmHJ9v%2BJI5nvsLTVY2THrjU0JNmOmy4MbMZfuB0Ig8p43L6YuSd3KhtEyca0OSxcEcU8M%2Fg5bizzZ0DG53G7tM9yj0vS8cvjLFkHnwr3Mqa%2BcWTZ%2BuLEMA925K0LEAAqbT2Gk%2F0g7%2BYKifZ6VQq1MTFUXVBun6BceBz9h5UHRwppCYUs3MNKJ5FDcVbpMUbyrVZTefWgupyDucJpthPJQUjN6yyvT3KX6qNKvJxHmjc1M3DE15wJAqHgZI890%2BNc1qplDCJlndaFjkhIJ%2BugBBSlLAz9bbyUIFam6sa%2Ftogz%2FC2pkLXut%2FSC7YcTCADFm5efdnSmDZaiOJpt%2FRfy2xmQiIgVDAog4Dy8Fg5uKZIdCQSlxVBoQSEOuYxGMNBEw7XDCc2qTkMLyH7M4GOqUBMn8rMoS%2FU%2FeXaiaYZEReZ6HrmzAop%2Fye1fsE612Uy7ZPjahhtqcvhhXfcwjS3l4RIgCNoBapiGNzethLg%2FwZvYo8GLGs8nbZHY8lK0QwaelVWaoucewqaNXgjk0UhE%2Fap%2F%2FvXRRRlt0ZY2S%2FW1fKA76%2F%2FshtkCXNgGrEy9ie2Cx0CRXmZqUbHkM2RHM%2BBDj7LaGEHKbcVsfbprEmndca29IFfLum&X-Amz-Signature=2f6db79248b08648188067e5dbe67fc8ac24cdc0511f937069e81f037fbbf369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7CFDZJ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTaexM6aCaJ1BPBbXyeER%2B3e6eGPkoHy1fT5Nz98%2BoAiEA1gdfJJJy1gqm%2BvsETaNw8bsY5EfxvW9Kp%2Fbf3Ll%2FaYMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGL6M23n6RvGMxeJZCrcA6rV1v6KgGl0O2Cxz8lZ6fMOcL97UxPLFOnqsHYlYXENNEyxouRhjA7OS5XoseZQHaqJNH8%2FRaQhAU%2BAyZCQ%2Fffywq8CDV9i%2BMOnoshG%2BABt4qzbxShheK6kF8lhGhUowu54Y5QSrq57qn5Dme8vHWWTvGUXH35W8xHr1txDWvFVfKfucjYckDdMzYwRqQR3LPP6wD931pjzQPLa7H6i%2BZbY3pfENQ6mfEfLNrYK2Wj1Oeszi7RmHJ9v%2BJI5nvsLTVY2THrjU0JNmOmy4MbMZfuB0Ig8p43L6YuSd3KhtEyca0OSxcEcU8M%2Fg5bizzZ0DG53G7tM9yj0vS8cvjLFkHnwr3Mqa%2BcWTZ%2BuLEMA925K0LEAAqbT2Gk%2F0g7%2BYKifZ6VQq1MTFUXVBun6BceBz9h5UHRwppCYUs3MNKJ5FDcVbpMUbyrVZTefWgupyDucJpthPJQUjN6yyvT3KX6qNKvJxHmjc1M3DE15wJAqHgZI890%2BNc1qplDCJlndaFjkhIJ%2BugBBSlLAz9bbyUIFam6sa%2Ftogz%2FC2pkLXut%2FSC7YcTCADFm5efdnSmDZaiOJpt%2FRfy2xmQiIgVDAog4Dy8Fg5uKZIdCQSlxVBoQSEOuYxGMNBEw7XDCc2qTkMLyH7M4GOqUBMn8rMoS%2FU%2FeXaiaYZEReZ6HrmzAop%2Fye1fsE612Uy7ZPjahhtqcvhhXfcwjS3l4RIgCNoBapiGNzethLg%2FwZvYo8GLGs8nbZHY8lK0QwaelVWaoucewqaNXgjk0UhE%2Fap%2F%2FvXRRRlt0ZY2S%2FW1fKA76%2F%2FshtkCXNgGrEy9ie2Cx0CRXmZqUbHkM2RHM%2BBDj7LaGEHKbcVsfbprEmndca29IFfLum&X-Amz-Signature=92c57ada6beda0fbd3a1966a1a98048818a091e6d2c69b9175cdeddf51d19076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7CFDZJ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTaexM6aCaJ1BPBbXyeER%2B3e6eGPkoHy1fT5Nz98%2BoAiEA1gdfJJJy1gqm%2BvsETaNw8bsY5EfxvW9Kp%2Fbf3Ll%2FaYMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGL6M23n6RvGMxeJZCrcA6rV1v6KgGl0O2Cxz8lZ6fMOcL97UxPLFOnqsHYlYXENNEyxouRhjA7OS5XoseZQHaqJNH8%2FRaQhAU%2BAyZCQ%2Fffywq8CDV9i%2BMOnoshG%2BABt4qzbxShheK6kF8lhGhUowu54Y5QSrq57qn5Dme8vHWWTvGUXH35W8xHr1txDWvFVfKfucjYckDdMzYwRqQR3LPP6wD931pjzQPLa7H6i%2BZbY3pfENQ6mfEfLNrYK2Wj1Oeszi7RmHJ9v%2BJI5nvsLTVY2THrjU0JNmOmy4MbMZfuB0Ig8p43L6YuSd3KhtEyca0OSxcEcU8M%2Fg5bizzZ0DG53G7tM9yj0vS8cvjLFkHnwr3Mqa%2BcWTZ%2BuLEMA925K0LEAAqbT2Gk%2F0g7%2BYKifZ6VQq1MTFUXVBun6BceBz9h5UHRwppCYUs3MNKJ5FDcVbpMUbyrVZTefWgupyDucJpthPJQUjN6yyvT3KX6qNKvJxHmjc1M3DE15wJAqHgZI890%2BNc1qplDCJlndaFjkhIJ%2BugBBSlLAz9bbyUIFam6sa%2Ftogz%2FC2pkLXut%2FSC7YcTCADFm5efdnSmDZaiOJpt%2FRfy2xmQiIgVDAog4Dy8Fg5uKZIdCQSlxVBoQSEOuYxGMNBEw7XDCc2qTkMLyH7M4GOqUBMn8rMoS%2FU%2FeXaiaYZEReZ6HrmzAop%2Fye1fsE612Uy7ZPjahhtqcvhhXfcwjS3l4RIgCNoBapiGNzethLg%2FwZvYo8GLGs8nbZHY8lK0QwaelVWaoucewqaNXgjk0UhE%2Fap%2F%2FvXRRRlt0ZY2S%2FW1fKA76%2F%2FshtkCXNgGrEy9ie2Cx0CRXmZqUbHkM2RHM%2BBDj7LaGEHKbcVsfbprEmndca29IFfLum&X-Amz-Signature=554e357eaead7427c485593353fd03e958996a45cd4181e86591ae497f8e9c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7CFDZJ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTaexM6aCaJ1BPBbXyeER%2B3e6eGPkoHy1fT5Nz98%2BoAiEA1gdfJJJy1gqm%2BvsETaNw8bsY5EfxvW9Kp%2Fbf3Ll%2FaYMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGL6M23n6RvGMxeJZCrcA6rV1v6KgGl0O2Cxz8lZ6fMOcL97UxPLFOnqsHYlYXENNEyxouRhjA7OS5XoseZQHaqJNH8%2FRaQhAU%2BAyZCQ%2Fffywq8CDV9i%2BMOnoshG%2BABt4qzbxShheK6kF8lhGhUowu54Y5QSrq57qn5Dme8vHWWTvGUXH35W8xHr1txDWvFVfKfucjYckDdMzYwRqQR3LPP6wD931pjzQPLa7H6i%2BZbY3pfENQ6mfEfLNrYK2Wj1Oeszi7RmHJ9v%2BJI5nvsLTVY2THrjU0JNmOmy4MbMZfuB0Ig8p43L6YuSd3KhtEyca0OSxcEcU8M%2Fg5bizzZ0DG53G7tM9yj0vS8cvjLFkHnwr3Mqa%2BcWTZ%2BuLEMA925K0LEAAqbT2Gk%2F0g7%2BYKifZ6VQq1MTFUXVBun6BceBz9h5UHRwppCYUs3MNKJ5FDcVbpMUbyrVZTefWgupyDucJpthPJQUjN6yyvT3KX6qNKvJxHmjc1M3DE15wJAqHgZI890%2BNc1qplDCJlndaFjkhIJ%2BugBBSlLAz9bbyUIFam6sa%2Ftogz%2FC2pkLXut%2FSC7YcTCADFm5efdnSmDZaiOJpt%2FRfy2xmQiIgVDAog4Dy8Fg5uKZIdCQSlxVBoQSEOuYxGMNBEw7XDCc2qTkMLyH7M4GOqUBMn8rMoS%2FU%2FeXaiaYZEReZ6HrmzAop%2Fye1fsE612Uy7ZPjahhtqcvhhXfcwjS3l4RIgCNoBapiGNzethLg%2FwZvYo8GLGs8nbZHY8lK0QwaelVWaoucewqaNXgjk0UhE%2Fap%2F%2FvXRRRlt0ZY2S%2FW1fKA76%2F%2FshtkCXNgGrEy9ie2Cx0CRXmZqUbHkM2RHM%2BBDj7LaGEHKbcVsfbprEmndca29IFfLum&X-Amz-Signature=208483a7d58fa3422a14c8bd39461e3ae008fc05ef39f36d45678b1108dc8dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7CFDZJ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTaexM6aCaJ1BPBbXyeER%2B3e6eGPkoHy1fT5Nz98%2BoAiEA1gdfJJJy1gqm%2BvsETaNw8bsY5EfxvW9Kp%2Fbf3Ll%2FaYMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGL6M23n6RvGMxeJZCrcA6rV1v6KgGl0O2Cxz8lZ6fMOcL97UxPLFOnqsHYlYXENNEyxouRhjA7OS5XoseZQHaqJNH8%2FRaQhAU%2BAyZCQ%2Fffywq8CDV9i%2BMOnoshG%2BABt4qzbxShheK6kF8lhGhUowu54Y5QSrq57qn5Dme8vHWWTvGUXH35W8xHr1txDWvFVfKfucjYckDdMzYwRqQR3LPP6wD931pjzQPLa7H6i%2BZbY3pfENQ6mfEfLNrYK2Wj1Oeszi7RmHJ9v%2BJI5nvsLTVY2THrjU0JNmOmy4MbMZfuB0Ig8p43L6YuSd3KhtEyca0OSxcEcU8M%2Fg5bizzZ0DG53G7tM9yj0vS8cvjLFkHnwr3Mqa%2BcWTZ%2BuLEMA925K0LEAAqbT2Gk%2F0g7%2BYKifZ6VQq1MTFUXVBun6BceBz9h5UHRwppCYUs3MNKJ5FDcVbpMUbyrVZTefWgupyDucJpthPJQUjN6yyvT3KX6qNKvJxHmjc1M3DE15wJAqHgZI890%2BNc1qplDCJlndaFjkhIJ%2BugBBSlLAz9bbyUIFam6sa%2Ftogz%2FC2pkLXut%2FSC7YcTCADFm5efdnSmDZaiOJpt%2FRfy2xmQiIgVDAog4Dy8Fg5uKZIdCQSlxVBoQSEOuYxGMNBEw7XDCc2qTkMLyH7M4GOqUBMn8rMoS%2FU%2FeXaiaYZEReZ6HrmzAop%2Fye1fsE612Uy7ZPjahhtqcvhhXfcwjS3l4RIgCNoBapiGNzethLg%2FwZvYo8GLGs8nbZHY8lK0QwaelVWaoucewqaNXgjk0UhE%2Fap%2F%2FvXRRRlt0ZY2S%2FW1fKA76%2F%2FshtkCXNgGrEy9ie2Cx0CRXmZqUbHkM2RHM%2BBDj7LaGEHKbcVsfbprEmndca29IFfLum&X-Amz-Signature=fbcb92be85fe80623154c4f396b92348181573469516c5a3c93a3206e2c338df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7CFDZJ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTaexM6aCaJ1BPBbXyeER%2B3e6eGPkoHy1fT5Nz98%2BoAiEA1gdfJJJy1gqm%2BvsETaNw8bsY5EfxvW9Kp%2Fbf3Ll%2FaYMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGL6M23n6RvGMxeJZCrcA6rV1v6KgGl0O2Cxz8lZ6fMOcL97UxPLFOnqsHYlYXENNEyxouRhjA7OS5XoseZQHaqJNH8%2FRaQhAU%2BAyZCQ%2Fffywq8CDV9i%2BMOnoshG%2BABt4qzbxShheK6kF8lhGhUowu54Y5QSrq57qn5Dme8vHWWTvGUXH35W8xHr1txDWvFVfKfucjYckDdMzYwRqQR3LPP6wD931pjzQPLa7H6i%2BZbY3pfENQ6mfEfLNrYK2Wj1Oeszi7RmHJ9v%2BJI5nvsLTVY2THrjU0JNmOmy4MbMZfuB0Ig8p43L6YuSd3KhtEyca0OSxcEcU8M%2Fg5bizzZ0DG53G7tM9yj0vS8cvjLFkHnwr3Mqa%2BcWTZ%2BuLEMA925K0LEAAqbT2Gk%2F0g7%2BYKifZ6VQq1MTFUXVBun6BceBz9h5UHRwppCYUs3MNKJ5FDcVbpMUbyrVZTefWgupyDucJpthPJQUjN6yyvT3KX6qNKvJxHmjc1M3DE15wJAqHgZI890%2BNc1qplDCJlndaFjkhIJ%2BugBBSlLAz9bbyUIFam6sa%2Ftogz%2FC2pkLXut%2FSC7YcTCADFm5efdnSmDZaiOJpt%2FRfy2xmQiIgVDAog4Dy8Fg5uKZIdCQSlxVBoQSEOuYxGMNBEw7XDCc2qTkMLyH7M4GOqUBMn8rMoS%2FU%2FeXaiaYZEReZ6HrmzAop%2Fye1fsE612Uy7ZPjahhtqcvhhXfcwjS3l4RIgCNoBapiGNzethLg%2FwZvYo8GLGs8nbZHY8lK0QwaelVWaoucewqaNXgjk0UhE%2Fap%2F%2FvXRRRlt0ZY2S%2FW1fKA76%2F%2FshtkCXNgGrEy9ie2Cx0CRXmZqUbHkM2RHM%2BBDj7LaGEHKbcVsfbprEmndca29IFfLum&X-Amz-Signature=df384208021adeb731bd03288dcfc09e9fcf8f63e9a5f82d6847bf83ca96bceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7CFDZJ%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTaexM6aCaJ1BPBbXyeER%2B3e6eGPkoHy1fT5Nz98%2BoAiEA1gdfJJJy1gqm%2BvsETaNw8bsY5EfxvW9Kp%2Fbf3Ll%2FaYMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGL6M23n6RvGMxeJZCrcA6rV1v6KgGl0O2Cxz8lZ6fMOcL97UxPLFOnqsHYlYXENNEyxouRhjA7OS5XoseZQHaqJNH8%2FRaQhAU%2BAyZCQ%2Fffywq8CDV9i%2BMOnoshG%2BABt4qzbxShheK6kF8lhGhUowu54Y5QSrq57qn5Dme8vHWWTvGUXH35W8xHr1txDWvFVfKfucjYckDdMzYwRqQR3LPP6wD931pjzQPLa7H6i%2BZbY3pfENQ6mfEfLNrYK2Wj1Oeszi7RmHJ9v%2BJI5nvsLTVY2THrjU0JNmOmy4MbMZfuB0Ig8p43L6YuSd3KhtEyca0OSxcEcU8M%2Fg5bizzZ0DG53G7tM9yj0vS8cvjLFkHnwr3Mqa%2BcWTZ%2BuLEMA925K0LEAAqbT2Gk%2F0g7%2BYKifZ6VQq1MTFUXVBun6BceBz9h5UHRwppCYUs3MNKJ5FDcVbpMUbyrVZTefWgupyDucJpthPJQUjN6yyvT3KX6qNKvJxHmjc1M3DE15wJAqHgZI890%2BNc1qplDCJlndaFjkhIJ%2BugBBSlLAz9bbyUIFam6sa%2Ftogz%2FC2pkLXut%2FSC7YcTCADFm5efdnSmDZaiOJpt%2FRfy2xmQiIgVDAog4Dy8Fg5uKZIdCQSlxVBoQSEOuYxGMNBEw7XDCc2qTkMLyH7M4GOqUBMn8rMoS%2FU%2FeXaiaYZEReZ6HrmzAop%2Fye1fsE612Uy7ZPjahhtqcvhhXfcwjS3l4RIgCNoBapiGNzethLg%2FwZvYo8GLGs8nbZHY8lK0QwaelVWaoucewqaNXgjk0UhE%2Fap%2F%2FvXRRRlt0ZY2S%2FW1fKA76%2F%2FshtkCXNgGrEy9ie2Cx0CRXmZqUbHkM2RHM%2BBDj7LaGEHKbcVsfbprEmndca29IFfLum&X-Amz-Signature=0dbeddf4fcfaed37e120c499e605c810fb8d292d197f80e76c644406f746ead1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
