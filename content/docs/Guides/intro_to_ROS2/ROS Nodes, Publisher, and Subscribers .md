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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADXOPGC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5iHwOQpukVT1FgknQMEuewGJGlwL6Z3pR2SrOYC98BAiEA4Fu8AomvNMG%2BSTx0uUmERKKii9EhYVzsLm6xDUAHNFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5uGocJTsG70rQcBircA8poQdM6YBUJd9vyEISKmSZFxVGQFFkDEHvumdaml2uWX4lfNsU14rHb0PhCFkq6a8NZxmd1M1wjTD79Xu99skhpVVvRYUXmglSJGmqunaQyBZ%2FBmePSs9h7N%2FEf1xnrzG%2B5JBIkR78eTEb0dEfTvQrpgRM3pPrFjYdPRuDvWFva6J%2B%2BBf4h5jBfd4AXmFd8oI6Jlv9hKUj23nhKmv1svLkmu7b91oKHmZybYnosIiH%2BCIhrs62r29UeFw1sSaYGixhiLeRK81ajTAaxWN1xIhvaL%2B%2FqIk0duMs9qPAfCQuxEZTl7HYy3Cu5v4l41Wbf2%2FpM0%2F7fHoXHy1TfKi%2F4%2Bl%2B%2BaM2BpyGywPC3wIUTd6jCQrOaQanB4jVwQ73U8bsP8a4PH7biRjO%2B5xtpbGe1rTTIMZomzFceruNoso17JkGmzvln0Hh7ujquQm5rg0N%2BaY8uBlJBF9bu1kkVbeqxRoARXUQBSCP6Ol1U9vwbXJfP%2B3tGROkYOzvY2EW6WzyidUs7xU8SudbZUl32jfjQeI9GOvvng7f9MTA5ul2z5Q9K3pJOo8T%2FpiU0HiRMrDGcpeh%2FWA0KuEiEs%2BduG5kfqMSqvQxQqLGsua0fh3TxDDS56Dy5u0qZmZFuXvxFMLvtmMIGOqUBiFakW8fiTsigIYMsCgqJ70248hMahEp2TdyKl7DBv3lNPb%2B639asv5Cf5N6fdS2wBF8RlbeLWt53dz8c%2F9WRp70OfuVjPbNd2pzyw1%2BN45g4OQsob%2Fx%2BNdF%2BIjlFk8gDcHUqYQbgEIajJF1AxK6X6UsdsVzs%2FS7TLiRYfczm5sU7%2B1n1ZD%2FEonLoGcX%2BWYkAr1ZqlpQdnJG7GIC%2FyIrkXYlNEnvY&X-Amz-Signature=9570cf55b3ab32f65440888e0c82b658fbb49d32624797f27c32ede6f52f6560&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADXOPGC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5iHwOQpukVT1FgknQMEuewGJGlwL6Z3pR2SrOYC98BAiEA4Fu8AomvNMG%2BSTx0uUmERKKii9EhYVzsLm6xDUAHNFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5uGocJTsG70rQcBircA8poQdM6YBUJd9vyEISKmSZFxVGQFFkDEHvumdaml2uWX4lfNsU14rHb0PhCFkq6a8NZxmd1M1wjTD79Xu99skhpVVvRYUXmglSJGmqunaQyBZ%2FBmePSs9h7N%2FEf1xnrzG%2B5JBIkR78eTEb0dEfTvQrpgRM3pPrFjYdPRuDvWFva6J%2B%2BBf4h5jBfd4AXmFd8oI6Jlv9hKUj23nhKmv1svLkmu7b91oKHmZybYnosIiH%2BCIhrs62r29UeFw1sSaYGixhiLeRK81ajTAaxWN1xIhvaL%2B%2FqIk0duMs9qPAfCQuxEZTl7HYy3Cu5v4l41Wbf2%2FpM0%2F7fHoXHy1TfKi%2F4%2Bl%2B%2BaM2BpyGywPC3wIUTd6jCQrOaQanB4jVwQ73U8bsP8a4PH7biRjO%2B5xtpbGe1rTTIMZomzFceruNoso17JkGmzvln0Hh7ujquQm5rg0N%2BaY8uBlJBF9bu1kkVbeqxRoARXUQBSCP6Ol1U9vwbXJfP%2B3tGROkYOzvY2EW6WzyidUs7xU8SudbZUl32jfjQeI9GOvvng7f9MTA5ul2z5Q9K3pJOo8T%2FpiU0HiRMrDGcpeh%2FWA0KuEiEs%2BduG5kfqMSqvQxQqLGsua0fh3TxDDS56Dy5u0qZmZFuXvxFMLvtmMIGOqUBiFakW8fiTsigIYMsCgqJ70248hMahEp2TdyKl7DBv3lNPb%2B639asv5Cf5N6fdS2wBF8RlbeLWt53dz8c%2F9WRp70OfuVjPbNd2pzyw1%2BN45g4OQsob%2Fx%2BNdF%2BIjlFk8gDcHUqYQbgEIajJF1AxK6X6UsdsVzs%2FS7TLiRYfczm5sU7%2B1n1ZD%2FEonLoGcX%2BWYkAr1ZqlpQdnJG7GIC%2FyIrkXYlNEnvY&X-Amz-Signature=d1b5ff838b476ffb1c7ecc1db71892202902d5a9fcf35667250721f6264a0ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADXOPGC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5iHwOQpukVT1FgknQMEuewGJGlwL6Z3pR2SrOYC98BAiEA4Fu8AomvNMG%2BSTx0uUmERKKii9EhYVzsLm6xDUAHNFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5uGocJTsG70rQcBircA8poQdM6YBUJd9vyEISKmSZFxVGQFFkDEHvumdaml2uWX4lfNsU14rHb0PhCFkq6a8NZxmd1M1wjTD79Xu99skhpVVvRYUXmglSJGmqunaQyBZ%2FBmePSs9h7N%2FEf1xnrzG%2B5JBIkR78eTEb0dEfTvQrpgRM3pPrFjYdPRuDvWFva6J%2B%2BBf4h5jBfd4AXmFd8oI6Jlv9hKUj23nhKmv1svLkmu7b91oKHmZybYnosIiH%2BCIhrs62r29UeFw1sSaYGixhiLeRK81ajTAaxWN1xIhvaL%2B%2FqIk0duMs9qPAfCQuxEZTl7HYy3Cu5v4l41Wbf2%2FpM0%2F7fHoXHy1TfKi%2F4%2Bl%2B%2BaM2BpyGywPC3wIUTd6jCQrOaQanB4jVwQ73U8bsP8a4PH7biRjO%2B5xtpbGe1rTTIMZomzFceruNoso17JkGmzvln0Hh7ujquQm5rg0N%2BaY8uBlJBF9bu1kkVbeqxRoARXUQBSCP6Ol1U9vwbXJfP%2B3tGROkYOzvY2EW6WzyidUs7xU8SudbZUl32jfjQeI9GOvvng7f9MTA5ul2z5Q9K3pJOo8T%2FpiU0HiRMrDGcpeh%2FWA0KuEiEs%2BduG5kfqMSqvQxQqLGsua0fh3TxDDS56Dy5u0qZmZFuXvxFMLvtmMIGOqUBiFakW8fiTsigIYMsCgqJ70248hMahEp2TdyKl7DBv3lNPb%2B639asv5Cf5N6fdS2wBF8RlbeLWt53dz8c%2F9WRp70OfuVjPbNd2pzyw1%2BN45g4OQsob%2Fx%2BNdF%2BIjlFk8gDcHUqYQbgEIajJF1AxK6X6UsdsVzs%2FS7TLiRYfczm5sU7%2B1n1ZD%2FEonLoGcX%2BWYkAr1ZqlpQdnJG7GIC%2FyIrkXYlNEnvY&X-Amz-Signature=2aaf102779f4cb255670fed9454eeccb3b80073412170ca420987e81c868daf0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADXOPGC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5iHwOQpukVT1FgknQMEuewGJGlwL6Z3pR2SrOYC98BAiEA4Fu8AomvNMG%2BSTx0uUmERKKii9EhYVzsLm6xDUAHNFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5uGocJTsG70rQcBircA8poQdM6YBUJd9vyEISKmSZFxVGQFFkDEHvumdaml2uWX4lfNsU14rHb0PhCFkq6a8NZxmd1M1wjTD79Xu99skhpVVvRYUXmglSJGmqunaQyBZ%2FBmePSs9h7N%2FEf1xnrzG%2B5JBIkR78eTEb0dEfTvQrpgRM3pPrFjYdPRuDvWFva6J%2B%2BBf4h5jBfd4AXmFd8oI6Jlv9hKUj23nhKmv1svLkmu7b91oKHmZybYnosIiH%2BCIhrs62r29UeFw1sSaYGixhiLeRK81ajTAaxWN1xIhvaL%2B%2FqIk0duMs9qPAfCQuxEZTl7HYy3Cu5v4l41Wbf2%2FpM0%2F7fHoXHy1TfKi%2F4%2Bl%2B%2BaM2BpyGywPC3wIUTd6jCQrOaQanB4jVwQ73U8bsP8a4PH7biRjO%2B5xtpbGe1rTTIMZomzFceruNoso17JkGmzvln0Hh7ujquQm5rg0N%2BaY8uBlJBF9bu1kkVbeqxRoARXUQBSCP6Ol1U9vwbXJfP%2B3tGROkYOzvY2EW6WzyidUs7xU8SudbZUl32jfjQeI9GOvvng7f9MTA5ul2z5Q9K3pJOo8T%2FpiU0HiRMrDGcpeh%2FWA0KuEiEs%2BduG5kfqMSqvQxQqLGsua0fh3TxDDS56Dy5u0qZmZFuXvxFMLvtmMIGOqUBiFakW8fiTsigIYMsCgqJ70248hMahEp2TdyKl7DBv3lNPb%2B639asv5Cf5N6fdS2wBF8RlbeLWt53dz8c%2F9WRp70OfuVjPbNd2pzyw1%2BN45g4OQsob%2Fx%2BNdF%2BIjlFk8gDcHUqYQbgEIajJF1AxK6X6UsdsVzs%2FS7TLiRYfczm5sU7%2B1n1ZD%2FEonLoGcX%2BWYkAr1ZqlpQdnJG7GIC%2FyIrkXYlNEnvY&X-Amz-Signature=c61b0f84421ddcaa6cfa39bdfdf2d93b212f0ff36fb6c76e28499c990f5b5a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADXOPGC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5iHwOQpukVT1FgknQMEuewGJGlwL6Z3pR2SrOYC98BAiEA4Fu8AomvNMG%2BSTx0uUmERKKii9EhYVzsLm6xDUAHNFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5uGocJTsG70rQcBircA8poQdM6YBUJd9vyEISKmSZFxVGQFFkDEHvumdaml2uWX4lfNsU14rHb0PhCFkq6a8NZxmd1M1wjTD79Xu99skhpVVvRYUXmglSJGmqunaQyBZ%2FBmePSs9h7N%2FEf1xnrzG%2B5JBIkR78eTEb0dEfTvQrpgRM3pPrFjYdPRuDvWFva6J%2B%2BBf4h5jBfd4AXmFd8oI6Jlv9hKUj23nhKmv1svLkmu7b91oKHmZybYnosIiH%2BCIhrs62r29UeFw1sSaYGixhiLeRK81ajTAaxWN1xIhvaL%2B%2FqIk0duMs9qPAfCQuxEZTl7HYy3Cu5v4l41Wbf2%2FpM0%2F7fHoXHy1TfKi%2F4%2Bl%2B%2BaM2BpyGywPC3wIUTd6jCQrOaQanB4jVwQ73U8bsP8a4PH7biRjO%2B5xtpbGe1rTTIMZomzFceruNoso17JkGmzvln0Hh7ujquQm5rg0N%2BaY8uBlJBF9bu1kkVbeqxRoARXUQBSCP6Ol1U9vwbXJfP%2B3tGROkYOzvY2EW6WzyidUs7xU8SudbZUl32jfjQeI9GOvvng7f9MTA5ul2z5Q9K3pJOo8T%2FpiU0HiRMrDGcpeh%2FWA0KuEiEs%2BduG5kfqMSqvQxQqLGsua0fh3TxDDS56Dy5u0qZmZFuXvxFMLvtmMIGOqUBiFakW8fiTsigIYMsCgqJ70248hMahEp2TdyKl7DBv3lNPb%2B639asv5Cf5N6fdS2wBF8RlbeLWt53dz8c%2F9WRp70OfuVjPbNd2pzyw1%2BN45g4OQsob%2Fx%2BNdF%2BIjlFk8gDcHUqYQbgEIajJF1AxK6X6UsdsVzs%2FS7TLiRYfczm5sU7%2B1n1ZD%2FEonLoGcX%2BWYkAr1ZqlpQdnJG7GIC%2FyIrkXYlNEnvY&X-Amz-Signature=22ca5938b40c4701b7f4a398e42616638afc196b1c6ea440c020f627d238867e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADXOPGC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5iHwOQpukVT1FgknQMEuewGJGlwL6Z3pR2SrOYC98BAiEA4Fu8AomvNMG%2BSTx0uUmERKKii9EhYVzsLm6xDUAHNFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5uGocJTsG70rQcBircA8poQdM6YBUJd9vyEISKmSZFxVGQFFkDEHvumdaml2uWX4lfNsU14rHb0PhCFkq6a8NZxmd1M1wjTD79Xu99skhpVVvRYUXmglSJGmqunaQyBZ%2FBmePSs9h7N%2FEf1xnrzG%2B5JBIkR78eTEb0dEfTvQrpgRM3pPrFjYdPRuDvWFva6J%2B%2BBf4h5jBfd4AXmFd8oI6Jlv9hKUj23nhKmv1svLkmu7b91oKHmZybYnosIiH%2BCIhrs62r29UeFw1sSaYGixhiLeRK81ajTAaxWN1xIhvaL%2B%2FqIk0duMs9qPAfCQuxEZTl7HYy3Cu5v4l41Wbf2%2FpM0%2F7fHoXHy1TfKi%2F4%2Bl%2B%2BaM2BpyGywPC3wIUTd6jCQrOaQanB4jVwQ73U8bsP8a4PH7biRjO%2B5xtpbGe1rTTIMZomzFceruNoso17JkGmzvln0Hh7ujquQm5rg0N%2BaY8uBlJBF9bu1kkVbeqxRoARXUQBSCP6Ol1U9vwbXJfP%2B3tGROkYOzvY2EW6WzyidUs7xU8SudbZUl32jfjQeI9GOvvng7f9MTA5ul2z5Q9K3pJOo8T%2FpiU0HiRMrDGcpeh%2FWA0KuEiEs%2BduG5kfqMSqvQxQqLGsua0fh3TxDDS56Dy5u0qZmZFuXvxFMLvtmMIGOqUBiFakW8fiTsigIYMsCgqJ70248hMahEp2TdyKl7DBv3lNPb%2B639asv5Cf5N6fdS2wBF8RlbeLWt53dz8c%2F9WRp70OfuVjPbNd2pzyw1%2BN45g4OQsob%2Fx%2BNdF%2BIjlFk8gDcHUqYQbgEIajJF1AxK6X6UsdsVzs%2FS7TLiRYfczm5sU7%2B1n1ZD%2FEonLoGcX%2BWYkAr1ZqlpQdnJG7GIC%2FyIrkXYlNEnvY&X-Amz-Signature=9ec2f9273922e6de4020ab83d95a0648991f77dfc8a0e961582e56dc3ea25302&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADXOPGC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5iHwOQpukVT1FgknQMEuewGJGlwL6Z3pR2SrOYC98BAiEA4Fu8AomvNMG%2BSTx0uUmERKKii9EhYVzsLm6xDUAHNFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5uGocJTsG70rQcBircA8poQdM6YBUJd9vyEISKmSZFxVGQFFkDEHvumdaml2uWX4lfNsU14rHb0PhCFkq6a8NZxmd1M1wjTD79Xu99skhpVVvRYUXmglSJGmqunaQyBZ%2FBmePSs9h7N%2FEf1xnrzG%2B5JBIkR78eTEb0dEfTvQrpgRM3pPrFjYdPRuDvWFva6J%2B%2BBf4h5jBfd4AXmFd8oI6Jlv9hKUj23nhKmv1svLkmu7b91oKHmZybYnosIiH%2BCIhrs62r29UeFw1sSaYGixhiLeRK81ajTAaxWN1xIhvaL%2B%2FqIk0duMs9qPAfCQuxEZTl7HYy3Cu5v4l41Wbf2%2FpM0%2F7fHoXHy1TfKi%2F4%2Bl%2B%2BaM2BpyGywPC3wIUTd6jCQrOaQanB4jVwQ73U8bsP8a4PH7biRjO%2B5xtpbGe1rTTIMZomzFceruNoso17JkGmzvln0Hh7ujquQm5rg0N%2BaY8uBlJBF9bu1kkVbeqxRoARXUQBSCP6Ol1U9vwbXJfP%2B3tGROkYOzvY2EW6WzyidUs7xU8SudbZUl32jfjQeI9GOvvng7f9MTA5ul2z5Q9K3pJOo8T%2FpiU0HiRMrDGcpeh%2FWA0KuEiEs%2BduG5kfqMSqvQxQqLGsua0fh3TxDDS56Dy5u0qZmZFuXvxFMLvtmMIGOqUBiFakW8fiTsigIYMsCgqJ70248hMahEp2TdyKl7DBv3lNPb%2B639asv5Cf5N6fdS2wBF8RlbeLWt53dz8c%2F9WRp70OfuVjPbNd2pzyw1%2BN45g4OQsob%2Fx%2BNdF%2BIjlFk8gDcHUqYQbgEIajJF1AxK6X6UsdsVzs%2FS7TLiRYfczm5sU7%2B1n1ZD%2FEonLoGcX%2BWYkAr1ZqlpQdnJG7GIC%2FyIrkXYlNEnvY&X-Amz-Signature=76a1b145d3039d717c8f7b579c6dc5751c5c6a34f2af7d16d036714e56360cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADXOPGC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5iHwOQpukVT1FgknQMEuewGJGlwL6Z3pR2SrOYC98BAiEA4Fu8AomvNMG%2BSTx0uUmERKKii9EhYVzsLm6xDUAHNFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5uGocJTsG70rQcBircA8poQdM6YBUJd9vyEISKmSZFxVGQFFkDEHvumdaml2uWX4lfNsU14rHb0PhCFkq6a8NZxmd1M1wjTD79Xu99skhpVVvRYUXmglSJGmqunaQyBZ%2FBmePSs9h7N%2FEf1xnrzG%2B5JBIkR78eTEb0dEfTvQrpgRM3pPrFjYdPRuDvWFva6J%2B%2BBf4h5jBfd4AXmFd8oI6Jlv9hKUj23nhKmv1svLkmu7b91oKHmZybYnosIiH%2BCIhrs62r29UeFw1sSaYGixhiLeRK81ajTAaxWN1xIhvaL%2B%2FqIk0duMs9qPAfCQuxEZTl7HYy3Cu5v4l41Wbf2%2FpM0%2F7fHoXHy1TfKi%2F4%2Bl%2B%2BaM2BpyGywPC3wIUTd6jCQrOaQanB4jVwQ73U8bsP8a4PH7biRjO%2B5xtpbGe1rTTIMZomzFceruNoso17JkGmzvln0Hh7ujquQm5rg0N%2BaY8uBlJBF9bu1kkVbeqxRoARXUQBSCP6Ol1U9vwbXJfP%2B3tGROkYOzvY2EW6WzyidUs7xU8SudbZUl32jfjQeI9GOvvng7f9MTA5ul2z5Q9K3pJOo8T%2FpiU0HiRMrDGcpeh%2FWA0KuEiEs%2BduG5kfqMSqvQxQqLGsua0fh3TxDDS56Dy5u0qZmZFuXvxFMLvtmMIGOqUBiFakW8fiTsigIYMsCgqJ70248hMahEp2TdyKl7DBv3lNPb%2B639asv5Cf5N6fdS2wBF8RlbeLWt53dz8c%2F9WRp70OfuVjPbNd2pzyw1%2BN45g4OQsob%2Fx%2BNdF%2BIjlFk8gDcHUqYQbgEIajJF1AxK6X6UsdsVzs%2FS7TLiRYfczm5sU7%2B1n1ZD%2FEonLoGcX%2BWYkAr1ZqlpQdnJG7GIC%2FyIrkXYlNEnvY&X-Amz-Signature=e7d92722a8ef1dd2c4f70b3cf7286203d190317fff91ee599403f428afc22dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
