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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5DOV4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC7gST%2BA77l%2BesNXzk6DScEKUDMWFnhk35hi1ac8UeG4QIgaysbvWQkB2tpkn9mOHgEpesuD732%2BvUddGNm7V%2FOz%2FUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlmxPKWrYBRTGF3OCrcA8UFtJbg5YZ%2FCFyfKlSOIY3VZ8GQLidii1eo7OQlcAHa9MV4VQkg00NON0TuLJrleFDXDzax4%2FEqT4GC3fHbBOabX4i262grl%2BH0PXj9s46wwRn73DQetkqG%2BKpTO7jSkAhCW4uV2QL2enp9DK6qCl6Iidjq2VlwFmxBPrE3AxOeQtRconvs5M%2FuVgBeZv1r1F9ANc77%2FHI4X5sjV%2Fd2tjXFcWnqhAH6psWTgN4VYyXYUJ%2Fto2TfCF3vY4vCIWcPWP80%2B82Yw0spVwdKgiw%2FpTo6KgV%2BF1U3InxCwxVIGG57hiKhL1MJ2509CgxIubKP0YLftx9M%2BvRjhRN8%2FuRgJFa9%2F8KnlaUeltIgwspdds5GFxX16IIPxrC%2B%2FpwTDB5WacUkidBjSIbPOPihPMTGTfO3jEkK2lfF16cATZFeiotRXHhbEDzbS3oB%2FKim7miPXDy6KUUaqTH2SDzDYzCwHIBaxApd4J7tg2YA%2F9Fvi6vrTYeO%2BBBYTevqKvROLcsfAxEEm7xBio7AJgqSTueDUH5RTesDsPj%2BbfZCwPpARb%2F34pv%2BcMjWJ%2Fu0KTs%2Fal8%2B3CcKipKngGg3sUZUgT28hgHSTxywtiya0BPya0iSJ0e8cTZogqKavmprYAeQMJa1s78GOqUBZZGl2Nlfjj0NNhMlSowjtLA4YoXW0v32US63NVfmJkyx67kuJLhPGtpT4lrXTy8PcrjEVLrn8l7lYR5NsG9s0JQzUa2Oj5lwU2myeVlUzzKYUJ00qrR9yjLfNEqJP3xtBDJhuYwykzy4ftEdhET3mmP0GXJO9fGQRx3AILn6jOAvWdDZmy2MDfW9p0CF94D5EGFMOJ8%2BEPsdA3xT2C8p8Pibh2ga&X-Amz-Signature=ca185ae07356329cea113c0966f49cd628e5a56b5cd3253f5f49645172ed6d42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5DOV4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC7gST%2BA77l%2BesNXzk6DScEKUDMWFnhk35hi1ac8UeG4QIgaysbvWQkB2tpkn9mOHgEpesuD732%2BvUddGNm7V%2FOz%2FUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlmxPKWrYBRTGF3OCrcA8UFtJbg5YZ%2FCFyfKlSOIY3VZ8GQLidii1eo7OQlcAHa9MV4VQkg00NON0TuLJrleFDXDzax4%2FEqT4GC3fHbBOabX4i262grl%2BH0PXj9s46wwRn73DQetkqG%2BKpTO7jSkAhCW4uV2QL2enp9DK6qCl6Iidjq2VlwFmxBPrE3AxOeQtRconvs5M%2FuVgBeZv1r1F9ANc77%2FHI4X5sjV%2Fd2tjXFcWnqhAH6psWTgN4VYyXYUJ%2Fto2TfCF3vY4vCIWcPWP80%2B82Yw0spVwdKgiw%2FpTo6KgV%2BF1U3InxCwxVIGG57hiKhL1MJ2509CgxIubKP0YLftx9M%2BvRjhRN8%2FuRgJFa9%2F8KnlaUeltIgwspdds5GFxX16IIPxrC%2B%2FpwTDB5WacUkidBjSIbPOPihPMTGTfO3jEkK2lfF16cATZFeiotRXHhbEDzbS3oB%2FKim7miPXDy6KUUaqTH2SDzDYzCwHIBaxApd4J7tg2YA%2F9Fvi6vrTYeO%2BBBYTevqKvROLcsfAxEEm7xBio7AJgqSTueDUH5RTesDsPj%2BbfZCwPpARb%2F34pv%2BcMjWJ%2Fu0KTs%2Fal8%2B3CcKipKngGg3sUZUgT28hgHSTxywtiya0BPya0iSJ0e8cTZogqKavmprYAeQMJa1s78GOqUBZZGl2Nlfjj0NNhMlSowjtLA4YoXW0v32US63NVfmJkyx67kuJLhPGtpT4lrXTy8PcrjEVLrn8l7lYR5NsG9s0JQzUa2Oj5lwU2myeVlUzzKYUJ00qrR9yjLfNEqJP3xtBDJhuYwykzy4ftEdhET3mmP0GXJO9fGQRx3AILn6jOAvWdDZmy2MDfW9p0CF94D5EGFMOJ8%2BEPsdA3xT2C8p8Pibh2ga&X-Amz-Signature=6483d2b0bb65a497b96dc7978fc63514ad28c90eba46276c8cdd685472673ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5DOV4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC7gST%2BA77l%2BesNXzk6DScEKUDMWFnhk35hi1ac8UeG4QIgaysbvWQkB2tpkn9mOHgEpesuD732%2BvUddGNm7V%2FOz%2FUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlmxPKWrYBRTGF3OCrcA8UFtJbg5YZ%2FCFyfKlSOIY3VZ8GQLidii1eo7OQlcAHa9MV4VQkg00NON0TuLJrleFDXDzax4%2FEqT4GC3fHbBOabX4i262grl%2BH0PXj9s46wwRn73DQetkqG%2BKpTO7jSkAhCW4uV2QL2enp9DK6qCl6Iidjq2VlwFmxBPrE3AxOeQtRconvs5M%2FuVgBeZv1r1F9ANc77%2FHI4X5sjV%2Fd2tjXFcWnqhAH6psWTgN4VYyXYUJ%2Fto2TfCF3vY4vCIWcPWP80%2B82Yw0spVwdKgiw%2FpTo6KgV%2BF1U3InxCwxVIGG57hiKhL1MJ2509CgxIubKP0YLftx9M%2BvRjhRN8%2FuRgJFa9%2F8KnlaUeltIgwspdds5GFxX16IIPxrC%2B%2FpwTDB5WacUkidBjSIbPOPihPMTGTfO3jEkK2lfF16cATZFeiotRXHhbEDzbS3oB%2FKim7miPXDy6KUUaqTH2SDzDYzCwHIBaxApd4J7tg2YA%2F9Fvi6vrTYeO%2BBBYTevqKvROLcsfAxEEm7xBio7AJgqSTueDUH5RTesDsPj%2BbfZCwPpARb%2F34pv%2BcMjWJ%2Fu0KTs%2Fal8%2B3CcKipKngGg3sUZUgT28hgHSTxywtiya0BPya0iSJ0e8cTZogqKavmprYAeQMJa1s78GOqUBZZGl2Nlfjj0NNhMlSowjtLA4YoXW0v32US63NVfmJkyx67kuJLhPGtpT4lrXTy8PcrjEVLrn8l7lYR5NsG9s0JQzUa2Oj5lwU2myeVlUzzKYUJ00qrR9yjLfNEqJP3xtBDJhuYwykzy4ftEdhET3mmP0GXJO9fGQRx3AILn6jOAvWdDZmy2MDfW9p0CF94D5EGFMOJ8%2BEPsdA3xT2C8p8Pibh2ga&X-Amz-Signature=144c4d21e90f896f2094b9ca2ae325d2c18870dc046780bb1f9b5eba10e2de2f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5DOV4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC7gST%2BA77l%2BesNXzk6DScEKUDMWFnhk35hi1ac8UeG4QIgaysbvWQkB2tpkn9mOHgEpesuD732%2BvUddGNm7V%2FOz%2FUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlmxPKWrYBRTGF3OCrcA8UFtJbg5YZ%2FCFyfKlSOIY3VZ8GQLidii1eo7OQlcAHa9MV4VQkg00NON0TuLJrleFDXDzax4%2FEqT4GC3fHbBOabX4i262grl%2BH0PXj9s46wwRn73DQetkqG%2BKpTO7jSkAhCW4uV2QL2enp9DK6qCl6Iidjq2VlwFmxBPrE3AxOeQtRconvs5M%2FuVgBeZv1r1F9ANc77%2FHI4X5sjV%2Fd2tjXFcWnqhAH6psWTgN4VYyXYUJ%2Fto2TfCF3vY4vCIWcPWP80%2B82Yw0spVwdKgiw%2FpTo6KgV%2BF1U3InxCwxVIGG57hiKhL1MJ2509CgxIubKP0YLftx9M%2BvRjhRN8%2FuRgJFa9%2F8KnlaUeltIgwspdds5GFxX16IIPxrC%2B%2FpwTDB5WacUkidBjSIbPOPihPMTGTfO3jEkK2lfF16cATZFeiotRXHhbEDzbS3oB%2FKim7miPXDy6KUUaqTH2SDzDYzCwHIBaxApd4J7tg2YA%2F9Fvi6vrTYeO%2BBBYTevqKvROLcsfAxEEm7xBio7AJgqSTueDUH5RTesDsPj%2BbfZCwPpARb%2F34pv%2BcMjWJ%2Fu0KTs%2Fal8%2B3CcKipKngGg3sUZUgT28hgHSTxywtiya0BPya0iSJ0e8cTZogqKavmprYAeQMJa1s78GOqUBZZGl2Nlfjj0NNhMlSowjtLA4YoXW0v32US63NVfmJkyx67kuJLhPGtpT4lrXTy8PcrjEVLrn8l7lYR5NsG9s0JQzUa2Oj5lwU2myeVlUzzKYUJ00qrR9yjLfNEqJP3xtBDJhuYwykzy4ftEdhET3mmP0GXJO9fGQRx3AILn6jOAvWdDZmy2MDfW9p0CF94D5EGFMOJ8%2BEPsdA3xT2C8p8Pibh2ga&X-Amz-Signature=5745b80f142422a49648bd2f4f5046311e052cdebfeb6dc6c20ac9afe6e690b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5DOV4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC7gST%2BA77l%2BesNXzk6DScEKUDMWFnhk35hi1ac8UeG4QIgaysbvWQkB2tpkn9mOHgEpesuD732%2BvUddGNm7V%2FOz%2FUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlmxPKWrYBRTGF3OCrcA8UFtJbg5YZ%2FCFyfKlSOIY3VZ8GQLidii1eo7OQlcAHa9MV4VQkg00NON0TuLJrleFDXDzax4%2FEqT4GC3fHbBOabX4i262grl%2BH0PXj9s46wwRn73DQetkqG%2BKpTO7jSkAhCW4uV2QL2enp9DK6qCl6Iidjq2VlwFmxBPrE3AxOeQtRconvs5M%2FuVgBeZv1r1F9ANc77%2FHI4X5sjV%2Fd2tjXFcWnqhAH6psWTgN4VYyXYUJ%2Fto2TfCF3vY4vCIWcPWP80%2B82Yw0spVwdKgiw%2FpTo6KgV%2BF1U3InxCwxVIGG57hiKhL1MJ2509CgxIubKP0YLftx9M%2BvRjhRN8%2FuRgJFa9%2F8KnlaUeltIgwspdds5GFxX16IIPxrC%2B%2FpwTDB5WacUkidBjSIbPOPihPMTGTfO3jEkK2lfF16cATZFeiotRXHhbEDzbS3oB%2FKim7miPXDy6KUUaqTH2SDzDYzCwHIBaxApd4J7tg2YA%2F9Fvi6vrTYeO%2BBBYTevqKvROLcsfAxEEm7xBio7AJgqSTueDUH5RTesDsPj%2BbfZCwPpARb%2F34pv%2BcMjWJ%2Fu0KTs%2Fal8%2B3CcKipKngGg3sUZUgT28hgHSTxywtiya0BPya0iSJ0e8cTZogqKavmprYAeQMJa1s78GOqUBZZGl2Nlfjj0NNhMlSowjtLA4YoXW0v32US63NVfmJkyx67kuJLhPGtpT4lrXTy8PcrjEVLrn8l7lYR5NsG9s0JQzUa2Oj5lwU2myeVlUzzKYUJ00qrR9yjLfNEqJP3xtBDJhuYwykzy4ftEdhET3mmP0GXJO9fGQRx3AILn6jOAvWdDZmy2MDfW9p0CF94D5EGFMOJ8%2BEPsdA3xT2C8p8Pibh2ga&X-Amz-Signature=806cacc1147e2d5c4ad3d61de40749f7eb7295f5ba53ce8f411f3b11b96438af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5DOV4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC7gST%2BA77l%2BesNXzk6DScEKUDMWFnhk35hi1ac8UeG4QIgaysbvWQkB2tpkn9mOHgEpesuD732%2BvUddGNm7V%2FOz%2FUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlmxPKWrYBRTGF3OCrcA8UFtJbg5YZ%2FCFyfKlSOIY3VZ8GQLidii1eo7OQlcAHa9MV4VQkg00NON0TuLJrleFDXDzax4%2FEqT4GC3fHbBOabX4i262grl%2BH0PXj9s46wwRn73DQetkqG%2BKpTO7jSkAhCW4uV2QL2enp9DK6qCl6Iidjq2VlwFmxBPrE3AxOeQtRconvs5M%2FuVgBeZv1r1F9ANc77%2FHI4X5sjV%2Fd2tjXFcWnqhAH6psWTgN4VYyXYUJ%2Fto2TfCF3vY4vCIWcPWP80%2B82Yw0spVwdKgiw%2FpTo6KgV%2BF1U3InxCwxVIGG57hiKhL1MJ2509CgxIubKP0YLftx9M%2BvRjhRN8%2FuRgJFa9%2F8KnlaUeltIgwspdds5GFxX16IIPxrC%2B%2FpwTDB5WacUkidBjSIbPOPihPMTGTfO3jEkK2lfF16cATZFeiotRXHhbEDzbS3oB%2FKim7miPXDy6KUUaqTH2SDzDYzCwHIBaxApd4J7tg2YA%2F9Fvi6vrTYeO%2BBBYTevqKvROLcsfAxEEm7xBio7AJgqSTueDUH5RTesDsPj%2BbfZCwPpARb%2F34pv%2BcMjWJ%2Fu0KTs%2Fal8%2B3CcKipKngGg3sUZUgT28hgHSTxywtiya0BPya0iSJ0e8cTZogqKavmprYAeQMJa1s78GOqUBZZGl2Nlfjj0NNhMlSowjtLA4YoXW0v32US63NVfmJkyx67kuJLhPGtpT4lrXTy8PcrjEVLrn8l7lYR5NsG9s0JQzUa2Oj5lwU2myeVlUzzKYUJ00qrR9yjLfNEqJP3xtBDJhuYwykzy4ftEdhET3mmP0GXJO9fGQRx3AILn6jOAvWdDZmy2MDfW9p0CF94D5EGFMOJ8%2BEPsdA3xT2C8p8Pibh2ga&X-Amz-Signature=cd3ebbc21e37c178cba1ab2c404d33a34a12f70a6b7ee5928b24ba46068483e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5DOV4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC7gST%2BA77l%2BesNXzk6DScEKUDMWFnhk35hi1ac8UeG4QIgaysbvWQkB2tpkn9mOHgEpesuD732%2BvUddGNm7V%2FOz%2FUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlmxPKWrYBRTGF3OCrcA8UFtJbg5YZ%2FCFyfKlSOIY3VZ8GQLidii1eo7OQlcAHa9MV4VQkg00NON0TuLJrleFDXDzax4%2FEqT4GC3fHbBOabX4i262grl%2BH0PXj9s46wwRn73DQetkqG%2BKpTO7jSkAhCW4uV2QL2enp9DK6qCl6Iidjq2VlwFmxBPrE3AxOeQtRconvs5M%2FuVgBeZv1r1F9ANc77%2FHI4X5sjV%2Fd2tjXFcWnqhAH6psWTgN4VYyXYUJ%2Fto2TfCF3vY4vCIWcPWP80%2B82Yw0spVwdKgiw%2FpTo6KgV%2BF1U3InxCwxVIGG57hiKhL1MJ2509CgxIubKP0YLftx9M%2BvRjhRN8%2FuRgJFa9%2F8KnlaUeltIgwspdds5GFxX16IIPxrC%2B%2FpwTDB5WacUkidBjSIbPOPihPMTGTfO3jEkK2lfF16cATZFeiotRXHhbEDzbS3oB%2FKim7miPXDy6KUUaqTH2SDzDYzCwHIBaxApd4J7tg2YA%2F9Fvi6vrTYeO%2BBBYTevqKvROLcsfAxEEm7xBio7AJgqSTueDUH5RTesDsPj%2BbfZCwPpARb%2F34pv%2BcMjWJ%2Fu0KTs%2Fal8%2B3CcKipKngGg3sUZUgT28hgHSTxywtiya0BPya0iSJ0e8cTZogqKavmprYAeQMJa1s78GOqUBZZGl2Nlfjj0NNhMlSowjtLA4YoXW0v32US63NVfmJkyx67kuJLhPGtpT4lrXTy8PcrjEVLrn8l7lYR5NsG9s0JQzUa2Oj5lwU2myeVlUzzKYUJ00qrR9yjLfNEqJP3xtBDJhuYwykzy4ftEdhET3mmP0GXJO9fGQRx3AILn6jOAvWdDZmy2MDfW9p0CF94D5EGFMOJ8%2BEPsdA3xT2C8p8Pibh2ga&X-Amz-Signature=efb093005c1054b9e7331ff20c04b90830ab00aaffedbd7f461b2fae93cbc597&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5DOV4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC7gST%2BA77l%2BesNXzk6DScEKUDMWFnhk35hi1ac8UeG4QIgaysbvWQkB2tpkn9mOHgEpesuD732%2BvUddGNm7V%2FOz%2FUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlmxPKWrYBRTGF3OCrcA8UFtJbg5YZ%2FCFyfKlSOIY3VZ8GQLidii1eo7OQlcAHa9MV4VQkg00NON0TuLJrleFDXDzax4%2FEqT4GC3fHbBOabX4i262grl%2BH0PXj9s46wwRn73DQetkqG%2BKpTO7jSkAhCW4uV2QL2enp9DK6qCl6Iidjq2VlwFmxBPrE3AxOeQtRconvs5M%2FuVgBeZv1r1F9ANc77%2FHI4X5sjV%2Fd2tjXFcWnqhAH6psWTgN4VYyXYUJ%2Fto2TfCF3vY4vCIWcPWP80%2B82Yw0spVwdKgiw%2FpTo6KgV%2BF1U3InxCwxVIGG57hiKhL1MJ2509CgxIubKP0YLftx9M%2BvRjhRN8%2FuRgJFa9%2F8KnlaUeltIgwspdds5GFxX16IIPxrC%2B%2FpwTDB5WacUkidBjSIbPOPihPMTGTfO3jEkK2lfF16cATZFeiotRXHhbEDzbS3oB%2FKim7miPXDy6KUUaqTH2SDzDYzCwHIBaxApd4J7tg2YA%2F9Fvi6vrTYeO%2BBBYTevqKvROLcsfAxEEm7xBio7AJgqSTueDUH5RTesDsPj%2BbfZCwPpARb%2F34pv%2BcMjWJ%2Fu0KTs%2Fal8%2B3CcKipKngGg3sUZUgT28hgHSTxywtiya0BPya0iSJ0e8cTZogqKavmprYAeQMJa1s78GOqUBZZGl2Nlfjj0NNhMlSowjtLA4YoXW0v32US63NVfmJkyx67kuJLhPGtpT4lrXTy8PcrjEVLrn8l7lYR5NsG9s0JQzUa2Oj5lwU2myeVlUzzKYUJ00qrR9yjLfNEqJP3xtBDJhuYwykzy4ftEdhET3mmP0GXJO9fGQRx3AILn6jOAvWdDZmy2MDfW9p0CF94D5EGFMOJ8%2BEPsdA3xT2C8p8Pibh2ga&X-Amz-Signature=046392aa67c60bc5c8c2896b798abbd5471ce19c457a2aa745e6761a81b6d4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
