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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4X5I6TQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBXx18TAsFosp1PqdgSR2YyD0D%2Bry7Zu%2B%2Bz%2BCMjwqUvRAiEAvPeaL3X0QIkV4ju4WF6d7Tc3kPWF819q9Y4D1Z5ASCcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3AXp9WwR0RWScgzircA8xyfD6OQJGhWmOSi0%2B8BdsPWpCJNuxez3W1oDB36VEO%2F7ahh4wR1f4zYj5g6arEbs7OPd1Itzb3MymJ6zaXWbnWhAXNjm8UejZ%2BP8kLiieOvDqBx81cPptpEk0jAjxnOZR8ecFiphQNneyxWeLiZlK6oZQRbGmahbWwKWYwMCTqh0o6WUfe4eP1ggzyYLXBG9PPA6DCw8xjHxGJoxFmMkGwEgLkMDQtyyghe2y3UvB%2BQ1sC2MclTQwFjAdPTPyR0IVfui6AE7OQXVNwjfqmVhaUxbsVRJYHDY%2FfP3a3J3mvUGZbfDArpZp0V0rVmakV28U3%2BWx34bBbce31MEpuPj7DmXZPmFTxUy13NbI0Hki87PhGt6M664Dr9pYspgdT1tOSp5iQQrkzf53TqMvxRHOBPHaDFXjk%2F7jaPqSd0LzOuMrR1dVli3cZrYgMTR1ZHRybqAZewg6zR1Ri%2FRSXElJqt8SMhJuT3KvgkV5BY4DqYKLMPf1bFkqYvYnAqdl7bwvrLl3jzAuPctU7xCVE%2FJ0BsRW%2FqNp0aDQw%2FB%2FiHrqzicYCjuiDvuIlj6bHaAoPeuyx%2BTsGqA%2B1cIAiV6JbV726Il%2BZRQ32Tnn5d697JQ9RCSq34W1xf6Y09%2BPXMLPg7b8GOqUBWetfF0w%2BsrgU9SyJHdtaGjM01jVaOwq978QWmICu9hd4Xfe45E8fwckcyjHEJBhViMSTBDZsBVhx%2F3TsxevOSkNgKVXlbgDklfy62ghAe61AdoFX5fm%2FDpOHZ6%2FXGeYQbYGgkk6bu18AGtovs8S1BlLaMc%2BmbsoS8pu4tFqB%2BFxXhX%2BSeIdBdaXFR1cYgW%2B1FEabm3wlIdcopRZbew6a%2BENdp%2Foe&X-Amz-Signature=d91f80562549e8461e4f897c7a74c2065c0e3341e23baadf4329950db0fa1d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4X5I6TQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBXx18TAsFosp1PqdgSR2YyD0D%2Bry7Zu%2B%2Bz%2BCMjwqUvRAiEAvPeaL3X0QIkV4ju4WF6d7Tc3kPWF819q9Y4D1Z5ASCcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3AXp9WwR0RWScgzircA8xyfD6OQJGhWmOSi0%2B8BdsPWpCJNuxez3W1oDB36VEO%2F7ahh4wR1f4zYj5g6arEbs7OPd1Itzb3MymJ6zaXWbnWhAXNjm8UejZ%2BP8kLiieOvDqBx81cPptpEk0jAjxnOZR8ecFiphQNneyxWeLiZlK6oZQRbGmahbWwKWYwMCTqh0o6WUfe4eP1ggzyYLXBG9PPA6DCw8xjHxGJoxFmMkGwEgLkMDQtyyghe2y3UvB%2BQ1sC2MclTQwFjAdPTPyR0IVfui6AE7OQXVNwjfqmVhaUxbsVRJYHDY%2FfP3a3J3mvUGZbfDArpZp0V0rVmakV28U3%2BWx34bBbce31MEpuPj7DmXZPmFTxUy13NbI0Hki87PhGt6M664Dr9pYspgdT1tOSp5iQQrkzf53TqMvxRHOBPHaDFXjk%2F7jaPqSd0LzOuMrR1dVli3cZrYgMTR1ZHRybqAZewg6zR1Ri%2FRSXElJqt8SMhJuT3KvgkV5BY4DqYKLMPf1bFkqYvYnAqdl7bwvrLl3jzAuPctU7xCVE%2FJ0BsRW%2FqNp0aDQw%2FB%2FiHrqzicYCjuiDvuIlj6bHaAoPeuyx%2BTsGqA%2B1cIAiV6JbV726Il%2BZRQ32Tnn5d697JQ9RCSq34W1xf6Y09%2BPXMLPg7b8GOqUBWetfF0w%2BsrgU9SyJHdtaGjM01jVaOwq978QWmICu9hd4Xfe45E8fwckcyjHEJBhViMSTBDZsBVhx%2F3TsxevOSkNgKVXlbgDklfy62ghAe61AdoFX5fm%2FDpOHZ6%2FXGeYQbYGgkk6bu18AGtovs8S1BlLaMc%2BmbsoS8pu4tFqB%2BFxXhX%2BSeIdBdaXFR1cYgW%2B1FEabm3wlIdcopRZbew6a%2BENdp%2Foe&X-Amz-Signature=fb49d9e3ca79874127e77b460131b1a597782f83c66726174ee0b8f937510119&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4X5I6TQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBXx18TAsFosp1PqdgSR2YyD0D%2Bry7Zu%2B%2Bz%2BCMjwqUvRAiEAvPeaL3X0QIkV4ju4WF6d7Tc3kPWF819q9Y4D1Z5ASCcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3AXp9WwR0RWScgzircA8xyfD6OQJGhWmOSi0%2B8BdsPWpCJNuxez3W1oDB36VEO%2F7ahh4wR1f4zYj5g6arEbs7OPd1Itzb3MymJ6zaXWbnWhAXNjm8UejZ%2BP8kLiieOvDqBx81cPptpEk0jAjxnOZR8ecFiphQNneyxWeLiZlK6oZQRbGmahbWwKWYwMCTqh0o6WUfe4eP1ggzyYLXBG9PPA6DCw8xjHxGJoxFmMkGwEgLkMDQtyyghe2y3UvB%2BQ1sC2MclTQwFjAdPTPyR0IVfui6AE7OQXVNwjfqmVhaUxbsVRJYHDY%2FfP3a3J3mvUGZbfDArpZp0V0rVmakV28U3%2BWx34bBbce31MEpuPj7DmXZPmFTxUy13NbI0Hki87PhGt6M664Dr9pYspgdT1tOSp5iQQrkzf53TqMvxRHOBPHaDFXjk%2F7jaPqSd0LzOuMrR1dVli3cZrYgMTR1ZHRybqAZewg6zR1Ri%2FRSXElJqt8SMhJuT3KvgkV5BY4DqYKLMPf1bFkqYvYnAqdl7bwvrLl3jzAuPctU7xCVE%2FJ0BsRW%2FqNp0aDQw%2FB%2FiHrqzicYCjuiDvuIlj6bHaAoPeuyx%2BTsGqA%2B1cIAiV6JbV726Il%2BZRQ32Tnn5d697JQ9RCSq34W1xf6Y09%2BPXMLPg7b8GOqUBWetfF0w%2BsrgU9SyJHdtaGjM01jVaOwq978QWmICu9hd4Xfe45E8fwckcyjHEJBhViMSTBDZsBVhx%2F3TsxevOSkNgKVXlbgDklfy62ghAe61AdoFX5fm%2FDpOHZ6%2FXGeYQbYGgkk6bu18AGtovs8S1BlLaMc%2BmbsoS8pu4tFqB%2BFxXhX%2BSeIdBdaXFR1cYgW%2B1FEabm3wlIdcopRZbew6a%2BENdp%2Foe&X-Amz-Signature=e7b3ce38b23bc612cbe115e09936ccc4cc8bb29969282e62138790c6cefe6de7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4X5I6TQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBXx18TAsFosp1PqdgSR2YyD0D%2Bry7Zu%2B%2Bz%2BCMjwqUvRAiEAvPeaL3X0QIkV4ju4WF6d7Tc3kPWF819q9Y4D1Z5ASCcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3AXp9WwR0RWScgzircA8xyfD6OQJGhWmOSi0%2B8BdsPWpCJNuxez3W1oDB36VEO%2F7ahh4wR1f4zYj5g6arEbs7OPd1Itzb3MymJ6zaXWbnWhAXNjm8UejZ%2BP8kLiieOvDqBx81cPptpEk0jAjxnOZR8ecFiphQNneyxWeLiZlK6oZQRbGmahbWwKWYwMCTqh0o6WUfe4eP1ggzyYLXBG9PPA6DCw8xjHxGJoxFmMkGwEgLkMDQtyyghe2y3UvB%2BQ1sC2MclTQwFjAdPTPyR0IVfui6AE7OQXVNwjfqmVhaUxbsVRJYHDY%2FfP3a3J3mvUGZbfDArpZp0V0rVmakV28U3%2BWx34bBbce31MEpuPj7DmXZPmFTxUy13NbI0Hki87PhGt6M664Dr9pYspgdT1tOSp5iQQrkzf53TqMvxRHOBPHaDFXjk%2F7jaPqSd0LzOuMrR1dVli3cZrYgMTR1ZHRybqAZewg6zR1Ri%2FRSXElJqt8SMhJuT3KvgkV5BY4DqYKLMPf1bFkqYvYnAqdl7bwvrLl3jzAuPctU7xCVE%2FJ0BsRW%2FqNp0aDQw%2FB%2FiHrqzicYCjuiDvuIlj6bHaAoPeuyx%2BTsGqA%2B1cIAiV6JbV726Il%2BZRQ32Tnn5d697JQ9RCSq34W1xf6Y09%2BPXMLPg7b8GOqUBWetfF0w%2BsrgU9SyJHdtaGjM01jVaOwq978QWmICu9hd4Xfe45E8fwckcyjHEJBhViMSTBDZsBVhx%2F3TsxevOSkNgKVXlbgDklfy62ghAe61AdoFX5fm%2FDpOHZ6%2FXGeYQbYGgkk6bu18AGtovs8S1BlLaMc%2BmbsoS8pu4tFqB%2BFxXhX%2BSeIdBdaXFR1cYgW%2B1FEabm3wlIdcopRZbew6a%2BENdp%2Foe&X-Amz-Signature=b4c24753e6ea598b8190d41933c3e7a2dcd4eeab98b6ecfbb8ba7c48a292f1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4X5I6TQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBXx18TAsFosp1PqdgSR2YyD0D%2Bry7Zu%2B%2Bz%2BCMjwqUvRAiEAvPeaL3X0QIkV4ju4WF6d7Tc3kPWF819q9Y4D1Z5ASCcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3AXp9WwR0RWScgzircA8xyfD6OQJGhWmOSi0%2B8BdsPWpCJNuxez3W1oDB36VEO%2F7ahh4wR1f4zYj5g6arEbs7OPd1Itzb3MymJ6zaXWbnWhAXNjm8UejZ%2BP8kLiieOvDqBx81cPptpEk0jAjxnOZR8ecFiphQNneyxWeLiZlK6oZQRbGmahbWwKWYwMCTqh0o6WUfe4eP1ggzyYLXBG9PPA6DCw8xjHxGJoxFmMkGwEgLkMDQtyyghe2y3UvB%2BQ1sC2MclTQwFjAdPTPyR0IVfui6AE7OQXVNwjfqmVhaUxbsVRJYHDY%2FfP3a3J3mvUGZbfDArpZp0V0rVmakV28U3%2BWx34bBbce31MEpuPj7DmXZPmFTxUy13NbI0Hki87PhGt6M664Dr9pYspgdT1tOSp5iQQrkzf53TqMvxRHOBPHaDFXjk%2F7jaPqSd0LzOuMrR1dVli3cZrYgMTR1ZHRybqAZewg6zR1Ri%2FRSXElJqt8SMhJuT3KvgkV5BY4DqYKLMPf1bFkqYvYnAqdl7bwvrLl3jzAuPctU7xCVE%2FJ0BsRW%2FqNp0aDQw%2FB%2FiHrqzicYCjuiDvuIlj6bHaAoPeuyx%2BTsGqA%2B1cIAiV6JbV726Il%2BZRQ32Tnn5d697JQ9RCSq34W1xf6Y09%2BPXMLPg7b8GOqUBWetfF0w%2BsrgU9SyJHdtaGjM01jVaOwq978QWmICu9hd4Xfe45E8fwckcyjHEJBhViMSTBDZsBVhx%2F3TsxevOSkNgKVXlbgDklfy62ghAe61AdoFX5fm%2FDpOHZ6%2FXGeYQbYGgkk6bu18AGtovs8S1BlLaMc%2BmbsoS8pu4tFqB%2BFxXhX%2BSeIdBdaXFR1cYgW%2B1FEabm3wlIdcopRZbew6a%2BENdp%2Foe&X-Amz-Signature=2551728182f02fd2ad23890bf27f649812ab2be4da3291d5e2a53a8de7b00a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4X5I6TQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBXx18TAsFosp1PqdgSR2YyD0D%2Bry7Zu%2B%2Bz%2BCMjwqUvRAiEAvPeaL3X0QIkV4ju4WF6d7Tc3kPWF819q9Y4D1Z5ASCcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3AXp9WwR0RWScgzircA8xyfD6OQJGhWmOSi0%2B8BdsPWpCJNuxez3W1oDB36VEO%2F7ahh4wR1f4zYj5g6arEbs7OPd1Itzb3MymJ6zaXWbnWhAXNjm8UejZ%2BP8kLiieOvDqBx81cPptpEk0jAjxnOZR8ecFiphQNneyxWeLiZlK6oZQRbGmahbWwKWYwMCTqh0o6WUfe4eP1ggzyYLXBG9PPA6DCw8xjHxGJoxFmMkGwEgLkMDQtyyghe2y3UvB%2BQ1sC2MclTQwFjAdPTPyR0IVfui6AE7OQXVNwjfqmVhaUxbsVRJYHDY%2FfP3a3J3mvUGZbfDArpZp0V0rVmakV28U3%2BWx34bBbce31MEpuPj7DmXZPmFTxUy13NbI0Hki87PhGt6M664Dr9pYspgdT1tOSp5iQQrkzf53TqMvxRHOBPHaDFXjk%2F7jaPqSd0LzOuMrR1dVli3cZrYgMTR1ZHRybqAZewg6zR1Ri%2FRSXElJqt8SMhJuT3KvgkV5BY4DqYKLMPf1bFkqYvYnAqdl7bwvrLl3jzAuPctU7xCVE%2FJ0BsRW%2FqNp0aDQw%2FB%2FiHrqzicYCjuiDvuIlj6bHaAoPeuyx%2BTsGqA%2B1cIAiV6JbV726Il%2BZRQ32Tnn5d697JQ9RCSq34W1xf6Y09%2BPXMLPg7b8GOqUBWetfF0w%2BsrgU9SyJHdtaGjM01jVaOwq978QWmICu9hd4Xfe45E8fwckcyjHEJBhViMSTBDZsBVhx%2F3TsxevOSkNgKVXlbgDklfy62ghAe61AdoFX5fm%2FDpOHZ6%2FXGeYQbYGgkk6bu18AGtovs8S1BlLaMc%2BmbsoS8pu4tFqB%2BFxXhX%2BSeIdBdaXFR1cYgW%2B1FEabm3wlIdcopRZbew6a%2BENdp%2Foe&X-Amz-Signature=f8d1b35c5c771c247a7e6310711262a09b4dbf00cdd2e691f2c2f5c46c3c3200&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4X5I6TQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBXx18TAsFosp1PqdgSR2YyD0D%2Bry7Zu%2B%2Bz%2BCMjwqUvRAiEAvPeaL3X0QIkV4ju4WF6d7Tc3kPWF819q9Y4D1Z5ASCcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3AXp9WwR0RWScgzircA8xyfD6OQJGhWmOSi0%2B8BdsPWpCJNuxez3W1oDB36VEO%2F7ahh4wR1f4zYj5g6arEbs7OPd1Itzb3MymJ6zaXWbnWhAXNjm8UejZ%2BP8kLiieOvDqBx81cPptpEk0jAjxnOZR8ecFiphQNneyxWeLiZlK6oZQRbGmahbWwKWYwMCTqh0o6WUfe4eP1ggzyYLXBG9PPA6DCw8xjHxGJoxFmMkGwEgLkMDQtyyghe2y3UvB%2BQ1sC2MclTQwFjAdPTPyR0IVfui6AE7OQXVNwjfqmVhaUxbsVRJYHDY%2FfP3a3J3mvUGZbfDArpZp0V0rVmakV28U3%2BWx34bBbce31MEpuPj7DmXZPmFTxUy13NbI0Hki87PhGt6M664Dr9pYspgdT1tOSp5iQQrkzf53TqMvxRHOBPHaDFXjk%2F7jaPqSd0LzOuMrR1dVli3cZrYgMTR1ZHRybqAZewg6zR1Ri%2FRSXElJqt8SMhJuT3KvgkV5BY4DqYKLMPf1bFkqYvYnAqdl7bwvrLl3jzAuPctU7xCVE%2FJ0BsRW%2FqNp0aDQw%2FB%2FiHrqzicYCjuiDvuIlj6bHaAoPeuyx%2BTsGqA%2B1cIAiV6JbV726Il%2BZRQ32Tnn5d697JQ9RCSq34W1xf6Y09%2BPXMLPg7b8GOqUBWetfF0w%2BsrgU9SyJHdtaGjM01jVaOwq978QWmICu9hd4Xfe45E8fwckcyjHEJBhViMSTBDZsBVhx%2F3TsxevOSkNgKVXlbgDklfy62ghAe61AdoFX5fm%2FDpOHZ6%2FXGeYQbYGgkk6bu18AGtovs8S1BlLaMc%2BmbsoS8pu4tFqB%2BFxXhX%2BSeIdBdaXFR1cYgW%2B1FEabm3wlIdcopRZbew6a%2BENdp%2Foe&X-Amz-Signature=0713ec4c383fda8ea9c2ba54640a35f9db346bc46e0b09f79ae2a430c39b5081&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4X5I6TQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBXx18TAsFosp1PqdgSR2YyD0D%2Bry7Zu%2B%2Bz%2BCMjwqUvRAiEAvPeaL3X0QIkV4ju4WF6d7Tc3kPWF819q9Y4D1Z5ASCcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3AXp9WwR0RWScgzircA8xyfD6OQJGhWmOSi0%2B8BdsPWpCJNuxez3W1oDB36VEO%2F7ahh4wR1f4zYj5g6arEbs7OPd1Itzb3MymJ6zaXWbnWhAXNjm8UejZ%2BP8kLiieOvDqBx81cPptpEk0jAjxnOZR8ecFiphQNneyxWeLiZlK6oZQRbGmahbWwKWYwMCTqh0o6WUfe4eP1ggzyYLXBG9PPA6DCw8xjHxGJoxFmMkGwEgLkMDQtyyghe2y3UvB%2BQ1sC2MclTQwFjAdPTPyR0IVfui6AE7OQXVNwjfqmVhaUxbsVRJYHDY%2FfP3a3J3mvUGZbfDArpZp0V0rVmakV28U3%2BWx34bBbce31MEpuPj7DmXZPmFTxUy13NbI0Hki87PhGt6M664Dr9pYspgdT1tOSp5iQQrkzf53TqMvxRHOBPHaDFXjk%2F7jaPqSd0LzOuMrR1dVli3cZrYgMTR1ZHRybqAZewg6zR1Ri%2FRSXElJqt8SMhJuT3KvgkV5BY4DqYKLMPf1bFkqYvYnAqdl7bwvrLl3jzAuPctU7xCVE%2FJ0BsRW%2FqNp0aDQw%2FB%2FiHrqzicYCjuiDvuIlj6bHaAoPeuyx%2BTsGqA%2B1cIAiV6JbV726Il%2BZRQ32Tnn5d697JQ9RCSq34W1xf6Y09%2BPXMLPg7b8GOqUBWetfF0w%2BsrgU9SyJHdtaGjM01jVaOwq978QWmICu9hd4Xfe45E8fwckcyjHEJBhViMSTBDZsBVhx%2F3TsxevOSkNgKVXlbgDklfy62ghAe61AdoFX5fm%2FDpOHZ6%2FXGeYQbYGgkk6bu18AGtovs8S1BlLaMc%2BmbsoS8pu4tFqB%2BFxXhX%2BSeIdBdaXFR1cYgW%2B1FEabm3wlIdcopRZbew6a%2BENdp%2Foe&X-Amz-Signature=bb9c5c1f094fccb652e779a15d006ed288b241d959717253675e27c2bde73b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
