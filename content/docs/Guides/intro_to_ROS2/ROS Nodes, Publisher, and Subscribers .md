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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNQ5CDE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4KQvF7BKYpoH%2Fw%2Bblu%2FxVhvoGhU0tWiLZo%2FTwO9bYoAiEAlt3GkHI6b8VLbofAyLNwyq8PMtG5JeGT5kD4Lfh2%2FIkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyPDs%2FEBFdWjv2iUircA%2FLgMN6bd8naaoQyDYxn%2FmzivjoUG2aEiuQAlqkLwtcj0jdpoYEViKWUKdG1jfffTY9bBHTOn8zu%2Fc3IIoFCknBuHiOaDK3viosvuf9oBhmJmgjK%2Fq2rJowbCFixHYrVOSNHEQjZhb4LrlDvLMkfF7jVfmB741FDCgNQ1PnGDHXSCIVUrprT0YwVTcuvwQFkiN%2F%2BpzlvcPEErDQjPqc7PghsSSzuFzT6gFHoryQSyEHbASPfwFAmB92ucoitwNwO19%2FG7AfY4tSZiWJsbou1mf%2Fm2nRtlh7o4Uof9OQO%2FfgxcClA8BZcqX4y0lkpAVXI9RR3OlByyCDc%2BJvMc83zwR%2B85ZPokfpOOXiUuHIRunvfrd5%2FQREsvAuClHuq7oi88SlgEOkCmJf%2F7NqpsDVHSDIesBsqzTnuDjmhYumudV0YjMx3peY8Z4JxNdgpH55Vdd4Zo1IoBxikyL2xRB%2B350dS8UdPAARMHVmXHJjhOzIf0Yp73qK%2FhhhOHXjSQi0%2FIXQ8CNtasisQdkQ9GINnKeRWYzjztKXVuNC1nNesn5uxTZw0OltoqeFjWCDa5dk6sr00J3xk7PPm6vj%2FlclWYE0O%2BkJYGxhHQnf6jeoQLMBYxkdgUTa2pgzeAO7%2BML28%2B7wGOqUBbegxzRDL0EBkUry5PGmTxxwFOyvRWpNw%2Fy8H7dM43BjyMRxw263JXedKiCU8Es2lJTb9NkfqbAUx44ChM2j9mQShN2uImG6jfn0NcxwFh8JlKK2cP203VKbKtZwTg3qfVwf4EneuZAdSuMIMiJAu9%2FswZkEui2D0iCKETYf35A2Zr4Dj9mZsyr1oORX74eX4%2FcaincWn%2FzMwL3gIAQOoklaLsjZ6&X-Amz-Signature=1c31f0c93e776f47464e6133af5fdad09d2b45a98eb73a2b4c0d81f76899f1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNQ5CDE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4KQvF7BKYpoH%2Fw%2Bblu%2FxVhvoGhU0tWiLZo%2FTwO9bYoAiEAlt3GkHI6b8VLbofAyLNwyq8PMtG5JeGT5kD4Lfh2%2FIkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyPDs%2FEBFdWjv2iUircA%2FLgMN6bd8naaoQyDYxn%2FmzivjoUG2aEiuQAlqkLwtcj0jdpoYEViKWUKdG1jfffTY9bBHTOn8zu%2Fc3IIoFCknBuHiOaDK3viosvuf9oBhmJmgjK%2Fq2rJowbCFixHYrVOSNHEQjZhb4LrlDvLMkfF7jVfmB741FDCgNQ1PnGDHXSCIVUrprT0YwVTcuvwQFkiN%2F%2BpzlvcPEErDQjPqc7PghsSSzuFzT6gFHoryQSyEHbASPfwFAmB92ucoitwNwO19%2FG7AfY4tSZiWJsbou1mf%2Fm2nRtlh7o4Uof9OQO%2FfgxcClA8BZcqX4y0lkpAVXI9RR3OlByyCDc%2BJvMc83zwR%2B85ZPokfpOOXiUuHIRunvfrd5%2FQREsvAuClHuq7oi88SlgEOkCmJf%2F7NqpsDVHSDIesBsqzTnuDjmhYumudV0YjMx3peY8Z4JxNdgpH55Vdd4Zo1IoBxikyL2xRB%2B350dS8UdPAARMHVmXHJjhOzIf0Yp73qK%2FhhhOHXjSQi0%2FIXQ8CNtasisQdkQ9GINnKeRWYzjztKXVuNC1nNesn5uxTZw0OltoqeFjWCDa5dk6sr00J3xk7PPm6vj%2FlclWYE0O%2BkJYGxhHQnf6jeoQLMBYxkdgUTa2pgzeAO7%2BML28%2B7wGOqUBbegxzRDL0EBkUry5PGmTxxwFOyvRWpNw%2Fy8H7dM43BjyMRxw263JXedKiCU8Es2lJTb9NkfqbAUx44ChM2j9mQShN2uImG6jfn0NcxwFh8JlKK2cP203VKbKtZwTg3qfVwf4EneuZAdSuMIMiJAu9%2FswZkEui2D0iCKETYf35A2Zr4Dj9mZsyr1oORX74eX4%2FcaincWn%2FzMwL3gIAQOoklaLsjZ6&X-Amz-Signature=609129841778f42c0401131532c3074ea6fe45f344d760a4dcec30eb2269bcf2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNQ5CDE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4KQvF7BKYpoH%2Fw%2Bblu%2FxVhvoGhU0tWiLZo%2FTwO9bYoAiEAlt3GkHI6b8VLbofAyLNwyq8PMtG5JeGT5kD4Lfh2%2FIkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyPDs%2FEBFdWjv2iUircA%2FLgMN6bd8naaoQyDYxn%2FmzivjoUG2aEiuQAlqkLwtcj0jdpoYEViKWUKdG1jfffTY9bBHTOn8zu%2Fc3IIoFCknBuHiOaDK3viosvuf9oBhmJmgjK%2Fq2rJowbCFixHYrVOSNHEQjZhb4LrlDvLMkfF7jVfmB741FDCgNQ1PnGDHXSCIVUrprT0YwVTcuvwQFkiN%2F%2BpzlvcPEErDQjPqc7PghsSSzuFzT6gFHoryQSyEHbASPfwFAmB92ucoitwNwO19%2FG7AfY4tSZiWJsbou1mf%2Fm2nRtlh7o4Uof9OQO%2FfgxcClA8BZcqX4y0lkpAVXI9RR3OlByyCDc%2BJvMc83zwR%2B85ZPokfpOOXiUuHIRunvfrd5%2FQREsvAuClHuq7oi88SlgEOkCmJf%2F7NqpsDVHSDIesBsqzTnuDjmhYumudV0YjMx3peY8Z4JxNdgpH55Vdd4Zo1IoBxikyL2xRB%2B350dS8UdPAARMHVmXHJjhOzIf0Yp73qK%2FhhhOHXjSQi0%2FIXQ8CNtasisQdkQ9GINnKeRWYzjztKXVuNC1nNesn5uxTZw0OltoqeFjWCDa5dk6sr00J3xk7PPm6vj%2FlclWYE0O%2BkJYGxhHQnf6jeoQLMBYxkdgUTa2pgzeAO7%2BML28%2B7wGOqUBbegxzRDL0EBkUry5PGmTxxwFOyvRWpNw%2Fy8H7dM43BjyMRxw263JXedKiCU8Es2lJTb9NkfqbAUx44ChM2j9mQShN2uImG6jfn0NcxwFh8JlKK2cP203VKbKtZwTg3qfVwf4EneuZAdSuMIMiJAu9%2FswZkEui2D0iCKETYf35A2Zr4Dj9mZsyr1oORX74eX4%2FcaincWn%2FzMwL3gIAQOoklaLsjZ6&X-Amz-Signature=86f41522c77720f3d52b1d9785688a6c9587986103cf584ef4e7a1614ffa0278&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNQ5CDE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4KQvF7BKYpoH%2Fw%2Bblu%2FxVhvoGhU0tWiLZo%2FTwO9bYoAiEAlt3GkHI6b8VLbofAyLNwyq8PMtG5JeGT5kD4Lfh2%2FIkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyPDs%2FEBFdWjv2iUircA%2FLgMN6bd8naaoQyDYxn%2FmzivjoUG2aEiuQAlqkLwtcj0jdpoYEViKWUKdG1jfffTY9bBHTOn8zu%2Fc3IIoFCknBuHiOaDK3viosvuf9oBhmJmgjK%2Fq2rJowbCFixHYrVOSNHEQjZhb4LrlDvLMkfF7jVfmB741FDCgNQ1PnGDHXSCIVUrprT0YwVTcuvwQFkiN%2F%2BpzlvcPEErDQjPqc7PghsSSzuFzT6gFHoryQSyEHbASPfwFAmB92ucoitwNwO19%2FG7AfY4tSZiWJsbou1mf%2Fm2nRtlh7o4Uof9OQO%2FfgxcClA8BZcqX4y0lkpAVXI9RR3OlByyCDc%2BJvMc83zwR%2B85ZPokfpOOXiUuHIRunvfrd5%2FQREsvAuClHuq7oi88SlgEOkCmJf%2F7NqpsDVHSDIesBsqzTnuDjmhYumudV0YjMx3peY8Z4JxNdgpH55Vdd4Zo1IoBxikyL2xRB%2B350dS8UdPAARMHVmXHJjhOzIf0Yp73qK%2FhhhOHXjSQi0%2FIXQ8CNtasisQdkQ9GINnKeRWYzjztKXVuNC1nNesn5uxTZw0OltoqeFjWCDa5dk6sr00J3xk7PPm6vj%2FlclWYE0O%2BkJYGxhHQnf6jeoQLMBYxkdgUTa2pgzeAO7%2BML28%2B7wGOqUBbegxzRDL0EBkUry5PGmTxxwFOyvRWpNw%2Fy8H7dM43BjyMRxw263JXedKiCU8Es2lJTb9NkfqbAUx44ChM2j9mQShN2uImG6jfn0NcxwFh8JlKK2cP203VKbKtZwTg3qfVwf4EneuZAdSuMIMiJAu9%2FswZkEui2D0iCKETYf35A2Zr4Dj9mZsyr1oORX74eX4%2FcaincWn%2FzMwL3gIAQOoklaLsjZ6&X-Amz-Signature=e3900e73ceff41bbd09cb595b8120cc5e0f38ffb39a7cb6c06d1d7a396a58381&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNQ5CDE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4KQvF7BKYpoH%2Fw%2Bblu%2FxVhvoGhU0tWiLZo%2FTwO9bYoAiEAlt3GkHI6b8VLbofAyLNwyq8PMtG5JeGT5kD4Lfh2%2FIkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyPDs%2FEBFdWjv2iUircA%2FLgMN6bd8naaoQyDYxn%2FmzivjoUG2aEiuQAlqkLwtcj0jdpoYEViKWUKdG1jfffTY9bBHTOn8zu%2Fc3IIoFCknBuHiOaDK3viosvuf9oBhmJmgjK%2Fq2rJowbCFixHYrVOSNHEQjZhb4LrlDvLMkfF7jVfmB741FDCgNQ1PnGDHXSCIVUrprT0YwVTcuvwQFkiN%2F%2BpzlvcPEErDQjPqc7PghsSSzuFzT6gFHoryQSyEHbASPfwFAmB92ucoitwNwO19%2FG7AfY4tSZiWJsbou1mf%2Fm2nRtlh7o4Uof9OQO%2FfgxcClA8BZcqX4y0lkpAVXI9RR3OlByyCDc%2BJvMc83zwR%2B85ZPokfpOOXiUuHIRunvfrd5%2FQREsvAuClHuq7oi88SlgEOkCmJf%2F7NqpsDVHSDIesBsqzTnuDjmhYumudV0YjMx3peY8Z4JxNdgpH55Vdd4Zo1IoBxikyL2xRB%2B350dS8UdPAARMHVmXHJjhOzIf0Yp73qK%2FhhhOHXjSQi0%2FIXQ8CNtasisQdkQ9GINnKeRWYzjztKXVuNC1nNesn5uxTZw0OltoqeFjWCDa5dk6sr00J3xk7PPm6vj%2FlclWYE0O%2BkJYGxhHQnf6jeoQLMBYxkdgUTa2pgzeAO7%2BML28%2B7wGOqUBbegxzRDL0EBkUry5PGmTxxwFOyvRWpNw%2Fy8H7dM43BjyMRxw263JXedKiCU8Es2lJTb9NkfqbAUx44ChM2j9mQShN2uImG6jfn0NcxwFh8JlKK2cP203VKbKtZwTg3qfVwf4EneuZAdSuMIMiJAu9%2FswZkEui2D0iCKETYf35A2Zr4Dj9mZsyr1oORX74eX4%2FcaincWn%2FzMwL3gIAQOoklaLsjZ6&X-Amz-Signature=0d5f45d21355eca7d8d20f97839c21377320ae4d915baab8bbb90d459f737ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNQ5CDE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4KQvF7BKYpoH%2Fw%2Bblu%2FxVhvoGhU0tWiLZo%2FTwO9bYoAiEAlt3GkHI6b8VLbofAyLNwyq8PMtG5JeGT5kD4Lfh2%2FIkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyPDs%2FEBFdWjv2iUircA%2FLgMN6bd8naaoQyDYxn%2FmzivjoUG2aEiuQAlqkLwtcj0jdpoYEViKWUKdG1jfffTY9bBHTOn8zu%2Fc3IIoFCknBuHiOaDK3viosvuf9oBhmJmgjK%2Fq2rJowbCFixHYrVOSNHEQjZhb4LrlDvLMkfF7jVfmB741FDCgNQ1PnGDHXSCIVUrprT0YwVTcuvwQFkiN%2F%2BpzlvcPEErDQjPqc7PghsSSzuFzT6gFHoryQSyEHbASPfwFAmB92ucoitwNwO19%2FG7AfY4tSZiWJsbou1mf%2Fm2nRtlh7o4Uof9OQO%2FfgxcClA8BZcqX4y0lkpAVXI9RR3OlByyCDc%2BJvMc83zwR%2B85ZPokfpOOXiUuHIRunvfrd5%2FQREsvAuClHuq7oi88SlgEOkCmJf%2F7NqpsDVHSDIesBsqzTnuDjmhYumudV0YjMx3peY8Z4JxNdgpH55Vdd4Zo1IoBxikyL2xRB%2B350dS8UdPAARMHVmXHJjhOzIf0Yp73qK%2FhhhOHXjSQi0%2FIXQ8CNtasisQdkQ9GINnKeRWYzjztKXVuNC1nNesn5uxTZw0OltoqeFjWCDa5dk6sr00J3xk7PPm6vj%2FlclWYE0O%2BkJYGxhHQnf6jeoQLMBYxkdgUTa2pgzeAO7%2BML28%2B7wGOqUBbegxzRDL0EBkUry5PGmTxxwFOyvRWpNw%2Fy8H7dM43BjyMRxw263JXedKiCU8Es2lJTb9NkfqbAUx44ChM2j9mQShN2uImG6jfn0NcxwFh8JlKK2cP203VKbKtZwTg3qfVwf4EneuZAdSuMIMiJAu9%2FswZkEui2D0iCKETYf35A2Zr4Dj9mZsyr1oORX74eX4%2FcaincWn%2FzMwL3gIAQOoklaLsjZ6&X-Amz-Signature=52a3e20f46f6586b8c62d9accf3253fedfe5ac9f66987722a344ec4e42f0759e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNQ5CDE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4KQvF7BKYpoH%2Fw%2Bblu%2FxVhvoGhU0tWiLZo%2FTwO9bYoAiEAlt3GkHI6b8VLbofAyLNwyq8PMtG5JeGT5kD4Lfh2%2FIkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyPDs%2FEBFdWjv2iUircA%2FLgMN6bd8naaoQyDYxn%2FmzivjoUG2aEiuQAlqkLwtcj0jdpoYEViKWUKdG1jfffTY9bBHTOn8zu%2Fc3IIoFCknBuHiOaDK3viosvuf9oBhmJmgjK%2Fq2rJowbCFixHYrVOSNHEQjZhb4LrlDvLMkfF7jVfmB741FDCgNQ1PnGDHXSCIVUrprT0YwVTcuvwQFkiN%2F%2BpzlvcPEErDQjPqc7PghsSSzuFzT6gFHoryQSyEHbASPfwFAmB92ucoitwNwO19%2FG7AfY4tSZiWJsbou1mf%2Fm2nRtlh7o4Uof9OQO%2FfgxcClA8BZcqX4y0lkpAVXI9RR3OlByyCDc%2BJvMc83zwR%2B85ZPokfpOOXiUuHIRunvfrd5%2FQREsvAuClHuq7oi88SlgEOkCmJf%2F7NqpsDVHSDIesBsqzTnuDjmhYumudV0YjMx3peY8Z4JxNdgpH55Vdd4Zo1IoBxikyL2xRB%2B350dS8UdPAARMHVmXHJjhOzIf0Yp73qK%2FhhhOHXjSQi0%2FIXQ8CNtasisQdkQ9GINnKeRWYzjztKXVuNC1nNesn5uxTZw0OltoqeFjWCDa5dk6sr00J3xk7PPm6vj%2FlclWYE0O%2BkJYGxhHQnf6jeoQLMBYxkdgUTa2pgzeAO7%2BML28%2B7wGOqUBbegxzRDL0EBkUry5PGmTxxwFOyvRWpNw%2Fy8H7dM43BjyMRxw263JXedKiCU8Es2lJTb9NkfqbAUx44ChM2j9mQShN2uImG6jfn0NcxwFh8JlKK2cP203VKbKtZwTg3qfVwf4EneuZAdSuMIMiJAu9%2FswZkEui2D0iCKETYf35A2Zr4Dj9mZsyr1oORX74eX4%2FcaincWn%2FzMwL3gIAQOoklaLsjZ6&X-Amz-Signature=5de19519c1bbd530273960341512584c8a21527886bf306a7dedc4e64f689260&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNQ5CDE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4KQvF7BKYpoH%2Fw%2Bblu%2FxVhvoGhU0tWiLZo%2FTwO9bYoAiEAlt3GkHI6b8VLbofAyLNwyq8PMtG5JeGT5kD4Lfh2%2FIkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyPDs%2FEBFdWjv2iUircA%2FLgMN6bd8naaoQyDYxn%2FmzivjoUG2aEiuQAlqkLwtcj0jdpoYEViKWUKdG1jfffTY9bBHTOn8zu%2Fc3IIoFCknBuHiOaDK3viosvuf9oBhmJmgjK%2Fq2rJowbCFixHYrVOSNHEQjZhb4LrlDvLMkfF7jVfmB741FDCgNQ1PnGDHXSCIVUrprT0YwVTcuvwQFkiN%2F%2BpzlvcPEErDQjPqc7PghsSSzuFzT6gFHoryQSyEHbASPfwFAmB92ucoitwNwO19%2FG7AfY4tSZiWJsbou1mf%2Fm2nRtlh7o4Uof9OQO%2FfgxcClA8BZcqX4y0lkpAVXI9RR3OlByyCDc%2BJvMc83zwR%2B85ZPokfpOOXiUuHIRunvfrd5%2FQREsvAuClHuq7oi88SlgEOkCmJf%2F7NqpsDVHSDIesBsqzTnuDjmhYumudV0YjMx3peY8Z4JxNdgpH55Vdd4Zo1IoBxikyL2xRB%2B350dS8UdPAARMHVmXHJjhOzIf0Yp73qK%2FhhhOHXjSQi0%2FIXQ8CNtasisQdkQ9GINnKeRWYzjztKXVuNC1nNesn5uxTZw0OltoqeFjWCDa5dk6sr00J3xk7PPm6vj%2FlclWYE0O%2BkJYGxhHQnf6jeoQLMBYxkdgUTa2pgzeAO7%2BML28%2B7wGOqUBbegxzRDL0EBkUry5PGmTxxwFOyvRWpNw%2Fy8H7dM43BjyMRxw263JXedKiCU8Es2lJTb9NkfqbAUx44ChM2j9mQShN2uImG6jfn0NcxwFh8JlKK2cP203VKbKtZwTg3qfVwf4EneuZAdSuMIMiJAu9%2FswZkEui2D0iCKETYf35A2Zr4Dj9mZsyr1oORX74eX4%2FcaincWn%2FzMwL3gIAQOoklaLsjZ6&X-Amz-Signature=3dceb232ff3b7117580f009992c48dd83b59560c1dfae764b66aa00299e6f44a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
