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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVK5WFF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCb%2BelrUEPqyx8DkQioBKo5%2B2qXp%2BT267wlDfcojRH1dgIgJm%2BgWgtloK%2FgtAZYYXVbnKUGp77E%2FFAUgZSJWbpDVkAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPQSA%2Ba0P66Fm%2FdQhCrcA9n9OXQfvfKbgglAxAip5cdn7vPtf%2BjcCa6xf1iSH4ihp8faJ8ue7lRfXgaUvwvn15CUi5PGjVg4HrbDE1MYr45K%2B03nEmYu%2F5VbOwrqUh5nAG4fktDA7krlrbtuMO9ZI%2FVjaOOeV%2B1t9ZudiOSXYKYWDWrOsJwjM6Lzm2oy%2BT38wbXRBYa0mXythSDq5GVg9SuBi6tIbRAmGxQhkqyr0UB5Ds0AqJl3h5J6HMV9qxi2iz3v5yVv7Ky%2FhJaEyyZ%2BsrNbvN0S64zjU8U4XGycQJsQE5xJTAt4R5MxI1SqOhyYc1JFyiQONyLEaci2GJ8iRMSp73ywNBJ459zXZHwhoqEafvZnIh04jW3Rp8pVrGmWJsx5iJZW11J0j%2B%2F5Z59CQXdqHNT31yOxnMEWCXtYPchgxGHSaPRNCnY%2F04UHYxFMLb3sDZ6AVqEFuDNe6ecuY45UfUmfG0jdDE8c3EZAPGeUQp47NSBOPlu3sS49UYFxD3B6y2FKesNRXEkPjo0Bu%2FA%2BR%2FqPwKPhWsKqzgiwo%2FUfWicifuztxpcJ74jsjsZcwIbgZ4GBZWhIxupwX3vn2iz8GQ1N9HDmRS2efijWXNnuNz0BCUWEK2aT%2BWp7VzJpqeO6tiDrfbHW8zPuMJ%2Fn3cMGOqUBYJmpbdyQklujwFRjz1EtHSw8oEQkWv5ZdPcyA730jAIcagn09%2BaJRsLG4NwRMlj2zmyZzlRRfI8mowhIUakm23jEIwNuAB5hcfCZIfq21tEcAUbDwCXrqOG%2FAdmoRRXAnvxTuBpTz888l6hmR0dg%2B7Fa4CJn3ic9kMN2z3nZekMh%2B1rDXmgwfmlrrDLge5IGQx0ZZnaT535LwlM246DhyRSqVOes&X-Amz-Signature=2b510ce11c5e8804150be80086ed77014f62d74b09752b10f7edc23eef9c15bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVK5WFF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCb%2BelrUEPqyx8DkQioBKo5%2B2qXp%2BT267wlDfcojRH1dgIgJm%2BgWgtloK%2FgtAZYYXVbnKUGp77E%2FFAUgZSJWbpDVkAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPQSA%2Ba0P66Fm%2FdQhCrcA9n9OXQfvfKbgglAxAip5cdn7vPtf%2BjcCa6xf1iSH4ihp8faJ8ue7lRfXgaUvwvn15CUi5PGjVg4HrbDE1MYr45K%2B03nEmYu%2F5VbOwrqUh5nAG4fktDA7krlrbtuMO9ZI%2FVjaOOeV%2B1t9ZudiOSXYKYWDWrOsJwjM6Lzm2oy%2BT38wbXRBYa0mXythSDq5GVg9SuBi6tIbRAmGxQhkqyr0UB5Ds0AqJl3h5J6HMV9qxi2iz3v5yVv7Ky%2FhJaEyyZ%2BsrNbvN0S64zjU8U4XGycQJsQE5xJTAt4R5MxI1SqOhyYc1JFyiQONyLEaci2GJ8iRMSp73ywNBJ459zXZHwhoqEafvZnIh04jW3Rp8pVrGmWJsx5iJZW11J0j%2B%2F5Z59CQXdqHNT31yOxnMEWCXtYPchgxGHSaPRNCnY%2F04UHYxFMLb3sDZ6AVqEFuDNe6ecuY45UfUmfG0jdDE8c3EZAPGeUQp47NSBOPlu3sS49UYFxD3B6y2FKesNRXEkPjo0Bu%2FA%2BR%2FqPwKPhWsKqzgiwo%2FUfWicifuztxpcJ74jsjsZcwIbgZ4GBZWhIxupwX3vn2iz8GQ1N9HDmRS2efijWXNnuNz0BCUWEK2aT%2BWp7VzJpqeO6tiDrfbHW8zPuMJ%2Fn3cMGOqUBYJmpbdyQklujwFRjz1EtHSw8oEQkWv5ZdPcyA730jAIcagn09%2BaJRsLG4NwRMlj2zmyZzlRRfI8mowhIUakm23jEIwNuAB5hcfCZIfq21tEcAUbDwCXrqOG%2FAdmoRRXAnvxTuBpTz888l6hmR0dg%2B7Fa4CJn3ic9kMN2z3nZekMh%2B1rDXmgwfmlrrDLge5IGQx0ZZnaT535LwlM246DhyRSqVOes&X-Amz-Signature=8b93bc58e88f9047ff92e9e542d66d0e66df642dd721bb9cce8b92694249f2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVK5WFF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCb%2BelrUEPqyx8DkQioBKo5%2B2qXp%2BT267wlDfcojRH1dgIgJm%2BgWgtloK%2FgtAZYYXVbnKUGp77E%2FFAUgZSJWbpDVkAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPQSA%2Ba0P66Fm%2FdQhCrcA9n9OXQfvfKbgglAxAip5cdn7vPtf%2BjcCa6xf1iSH4ihp8faJ8ue7lRfXgaUvwvn15CUi5PGjVg4HrbDE1MYr45K%2B03nEmYu%2F5VbOwrqUh5nAG4fktDA7krlrbtuMO9ZI%2FVjaOOeV%2B1t9ZudiOSXYKYWDWrOsJwjM6Lzm2oy%2BT38wbXRBYa0mXythSDq5GVg9SuBi6tIbRAmGxQhkqyr0UB5Ds0AqJl3h5J6HMV9qxi2iz3v5yVv7Ky%2FhJaEyyZ%2BsrNbvN0S64zjU8U4XGycQJsQE5xJTAt4R5MxI1SqOhyYc1JFyiQONyLEaci2GJ8iRMSp73ywNBJ459zXZHwhoqEafvZnIh04jW3Rp8pVrGmWJsx5iJZW11J0j%2B%2F5Z59CQXdqHNT31yOxnMEWCXtYPchgxGHSaPRNCnY%2F04UHYxFMLb3sDZ6AVqEFuDNe6ecuY45UfUmfG0jdDE8c3EZAPGeUQp47NSBOPlu3sS49UYFxD3B6y2FKesNRXEkPjo0Bu%2FA%2BR%2FqPwKPhWsKqzgiwo%2FUfWicifuztxpcJ74jsjsZcwIbgZ4GBZWhIxupwX3vn2iz8GQ1N9HDmRS2efijWXNnuNz0BCUWEK2aT%2BWp7VzJpqeO6tiDrfbHW8zPuMJ%2Fn3cMGOqUBYJmpbdyQklujwFRjz1EtHSw8oEQkWv5ZdPcyA730jAIcagn09%2BaJRsLG4NwRMlj2zmyZzlRRfI8mowhIUakm23jEIwNuAB5hcfCZIfq21tEcAUbDwCXrqOG%2FAdmoRRXAnvxTuBpTz888l6hmR0dg%2B7Fa4CJn3ic9kMN2z3nZekMh%2B1rDXmgwfmlrrDLge5IGQx0ZZnaT535LwlM246DhyRSqVOes&X-Amz-Signature=e6ff432b77542764fa759ff9ab80307536b1f28ad9d23945771f6415cdb90455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVK5WFF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCb%2BelrUEPqyx8DkQioBKo5%2B2qXp%2BT267wlDfcojRH1dgIgJm%2BgWgtloK%2FgtAZYYXVbnKUGp77E%2FFAUgZSJWbpDVkAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPQSA%2Ba0P66Fm%2FdQhCrcA9n9OXQfvfKbgglAxAip5cdn7vPtf%2BjcCa6xf1iSH4ihp8faJ8ue7lRfXgaUvwvn15CUi5PGjVg4HrbDE1MYr45K%2B03nEmYu%2F5VbOwrqUh5nAG4fktDA7krlrbtuMO9ZI%2FVjaOOeV%2B1t9ZudiOSXYKYWDWrOsJwjM6Lzm2oy%2BT38wbXRBYa0mXythSDq5GVg9SuBi6tIbRAmGxQhkqyr0UB5Ds0AqJl3h5J6HMV9qxi2iz3v5yVv7Ky%2FhJaEyyZ%2BsrNbvN0S64zjU8U4XGycQJsQE5xJTAt4R5MxI1SqOhyYc1JFyiQONyLEaci2GJ8iRMSp73ywNBJ459zXZHwhoqEafvZnIh04jW3Rp8pVrGmWJsx5iJZW11J0j%2B%2F5Z59CQXdqHNT31yOxnMEWCXtYPchgxGHSaPRNCnY%2F04UHYxFMLb3sDZ6AVqEFuDNe6ecuY45UfUmfG0jdDE8c3EZAPGeUQp47NSBOPlu3sS49UYFxD3B6y2FKesNRXEkPjo0Bu%2FA%2BR%2FqPwKPhWsKqzgiwo%2FUfWicifuztxpcJ74jsjsZcwIbgZ4GBZWhIxupwX3vn2iz8GQ1N9HDmRS2efijWXNnuNz0BCUWEK2aT%2BWp7VzJpqeO6tiDrfbHW8zPuMJ%2Fn3cMGOqUBYJmpbdyQklujwFRjz1EtHSw8oEQkWv5ZdPcyA730jAIcagn09%2BaJRsLG4NwRMlj2zmyZzlRRfI8mowhIUakm23jEIwNuAB5hcfCZIfq21tEcAUbDwCXrqOG%2FAdmoRRXAnvxTuBpTz888l6hmR0dg%2B7Fa4CJn3ic9kMN2z3nZekMh%2B1rDXmgwfmlrrDLge5IGQx0ZZnaT535LwlM246DhyRSqVOes&X-Amz-Signature=b444f37c9ac5a0680ff1512668e8a4768d23e06239ff92e13912c38a7dba415e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVK5WFF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCb%2BelrUEPqyx8DkQioBKo5%2B2qXp%2BT267wlDfcojRH1dgIgJm%2BgWgtloK%2FgtAZYYXVbnKUGp77E%2FFAUgZSJWbpDVkAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPQSA%2Ba0P66Fm%2FdQhCrcA9n9OXQfvfKbgglAxAip5cdn7vPtf%2BjcCa6xf1iSH4ihp8faJ8ue7lRfXgaUvwvn15CUi5PGjVg4HrbDE1MYr45K%2B03nEmYu%2F5VbOwrqUh5nAG4fktDA7krlrbtuMO9ZI%2FVjaOOeV%2B1t9ZudiOSXYKYWDWrOsJwjM6Lzm2oy%2BT38wbXRBYa0mXythSDq5GVg9SuBi6tIbRAmGxQhkqyr0UB5Ds0AqJl3h5J6HMV9qxi2iz3v5yVv7Ky%2FhJaEyyZ%2BsrNbvN0S64zjU8U4XGycQJsQE5xJTAt4R5MxI1SqOhyYc1JFyiQONyLEaci2GJ8iRMSp73ywNBJ459zXZHwhoqEafvZnIh04jW3Rp8pVrGmWJsx5iJZW11J0j%2B%2F5Z59CQXdqHNT31yOxnMEWCXtYPchgxGHSaPRNCnY%2F04UHYxFMLb3sDZ6AVqEFuDNe6ecuY45UfUmfG0jdDE8c3EZAPGeUQp47NSBOPlu3sS49UYFxD3B6y2FKesNRXEkPjo0Bu%2FA%2BR%2FqPwKPhWsKqzgiwo%2FUfWicifuztxpcJ74jsjsZcwIbgZ4GBZWhIxupwX3vn2iz8GQ1N9HDmRS2efijWXNnuNz0BCUWEK2aT%2BWp7VzJpqeO6tiDrfbHW8zPuMJ%2Fn3cMGOqUBYJmpbdyQklujwFRjz1EtHSw8oEQkWv5ZdPcyA730jAIcagn09%2BaJRsLG4NwRMlj2zmyZzlRRfI8mowhIUakm23jEIwNuAB5hcfCZIfq21tEcAUbDwCXrqOG%2FAdmoRRXAnvxTuBpTz888l6hmR0dg%2B7Fa4CJn3ic9kMN2z3nZekMh%2B1rDXmgwfmlrrDLge5IGQx0ZZnaT535LwlM246DhyRSqVOes&X-Amz-Signature=eafebfeebdcdc8e3209ed196622b4cbf647dac1e164794b2cdc2b537cf74420f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVK5WFF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCb%2BelrUEPqyx8DkQioBKo5%2B2qXp%2BT267wlDfcojRH1dgIgJm%2BgWgtloK%2FgtAZYYXVbnKUGp77E%2FFAUgZSJWbpDVkAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPQSA%2Ba0P66Fm%2FdQhCrcA9n9OXQfvfKbgglAxAip5cdn7vPtf%2BjcCa6xf1iSH4ihp8faJ8ue7lRfXgaUvwvn15CUi5PGjVg4HrbDE1MYr45K%2B03nEmYu%2F5VbOwrqUh5nAG4fktDA7krlrbtuMO9ZI%2FVjaOOeV%2B1t9ZudiOSXYKYWDWrOsJwjM6Lzm2oy%2BT38wbXRBYa0mXythSDq5GVg9SuBi6tIbRAmGxQhkqyr0UB5Ds0AqJl3h5J6HMV9qxi2iz3v5yVv7Ky%2FhJaEyyZ%2BsrNbvN0S64zjU8U4XGycQJsQE5xJTAt4R5MxI1SqOhyYc1JFyiQONyLEaci2GJ8iRMSp73ywNBJ459zXZHwhoqEafvZnIh04jW3Rp8pVrGmWJsx5iJZW11J0j%2B%2F5Z59CQXdqHNT31yOxnMEWCXtYPchgxGHSaPRNCnY%2F04UHYxFMLb3sDZ6AVqEFuDNe6ecuY45UfUmfG0jdDE8c3EZAPGeUQp47NSBOPlu3sS49UYFxD3B6y2FKesNRXEkPjo0Bu%2FA%2BR%2FqPwKPhWsKqzgiwo%2FUfWicifuztxpcJ74jsjsZcwIbgZ4GBZWhIxupwX3vn2iz8GQ1N9HDmRS2efijWXNnuNz0BCUWEK2aT%2BWp7VzJpqeO6tiDrfbHW8zPuMJ%2Fn3cMGOqUBYJmpbdyQklujwFRjz1EtHSw8oEQkWv5ZdPcyA730jAIcagn09%2BaJRsLG4NwRMlj2zmyZzlRRfI8mowhIUakm23jEIwNuAB5hcfCZIfq21tEcAUbDwCXrqOG%2FAdmoRRXAnvxTuBpTz888l6hmR0dg%2B7Fa4CJn3ic9kMN2z3nZekMh%2B1rDXmgwfmlrrDLge5IGQx0ZZnaT535LwlM246DhyRSqVOes&X-Amz-Signature=ea45b37729a56011fe1c05b74a1821c45bee4518be91a878d4939af9429f33c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVK5WFF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCb%2BelrUEPqyx8DkQioBKo5%2B2qXp%2BT267wlDfcojRH1dgIgJm%2BgWgtloK%2FgtAZYYXVbnKUGp77E%2FFAUgZSJWbpDVkAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPQSA%2Ba0P66Fm%2FdQhCrcA9n9OXQfvfKbgglAxAip5cdn7vPtf%2BjcCa6xf1iSH4ihp8faJ8ue7lRfXgaUvwvn15CUi5PGjVg4HrbDE1MYr45K%2B03nEmYu%2F5VbOwrqUh5nAG4fktDA7krlrbtuMO9ZI%2FVjaOOeV%2B1t9ZudiOSXYKYWDWrOsJwjM6Lzm2oy%2BT38wbXRBYa0mXythSDq5GVg9SuBi6tIbRAmGxQhkqyr0UB5Ds0AqJl3h5J6HMV9qxi2iz3v5yVv7Ky%2FhJaEyyZ%2BsrNbvN0S64zjU8U4XGycQJsQE5xJTAt4R5MxI1SqOhyYc1JFyiQONyLEaci2GJ8iRMSp73ywNBJ459zXZHwhoqEafvZnIh04jW3Rp8pVrGmWJsx5iJZW11J0j%2B%2F5Z59CQXdqHNT31yOxnMEWCXtYPchgxGHSaPRNCnY%2F04UHYxFMLb3sDZ6AVqEFuDNe6ecuY45UfUmfG0jdDE8c3EZAPGeUQp47NSBOPlu3sS49UYFxD3B6y2FKesNRXEkPjo0Bu%2FA%2BR%2FqPwKPhWsKqzgiwo%2FUfWicifuztxpcJ74jsjsZcwIbgZ4GBZWhIxupwX3vn2iz8GQ1N9HDmRS2efijWXNnuNz0BCUWEK2aT%2BWp7VzJpqeO6tiDrfbHW8zPuMJ%2Fn3cMGOqUBYJmpbdyQklujwFRjz1EtHSw8oEQkWv5ZdPcyA730jAIcagn09%2BaJRsLG4NwRMlj2zmyZzlRRfI8mowhIUakm23jEIwNuAB5hcfCZIfq21tEcAUbDwCXrqOG%2FAdmoRRXAnvxTuBpTz888l6hmR0dg%2B7Fa4CJn3ic9kMN2z3nZekMh%2B1rDXmgwfmlrrDLge5IGQx0ZZnaT535LwlM246DhyRSqVOes&X-Amz-Signature=c8edbb51450fd944608ae9c41dbd34f82fef411a0e80fde41f794cb5f3c46d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVK5WFF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCb%2BelrUEPqyx8DkQioBKo5%2B2qXp%2BT267wlDfcojRH1dgIgJm%2BgWgtloK%2FgtAZYYXVbnKUGp77E%2FFAUgZSJWbpDVkAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPQSA%2Ba0P66Fm%2FdQhCrcA9n9OXQfvfKbgglAxAip5cdn7vPtf%2BjcCa6xf1iSH4ihp8faJ8ue7lRfXgaUvwvn15CUi5PGjVg4HrbDE1MYr45K%2B03nEmYu%2F5VbOwrqUh5nAG4fktDA7krlrbtuMO9ZI%2FVjaOOeV%2B1t9ZudiOSXYKYWDWrOsJwjM6Lzm2oy%2BT38wbXRBYa0mXythSDq5GVg9SuBi6tIbRAmGxQhkqyr0UB5Ds0AqJl3h5J6HMV9qxi2iz3v5yVv7Ky%2FhJaEyyZ%2BsrNbvN0S64zjU8U4XGycQJsQE5xJTAt4R5MxI1SqOhyYc1JFyiQONyLEaci2GJ8iRMSp73ywNBJ459zXZHwhoqEafvZnIh04jW3Rp8pVrGmWJsx5iJZW11J0j%2B%2F5Z59CQXdqHNT31yOxnMEWCXtYPchgxGHSaPRNCnY%2F04UHYxFMLb3sDZ6AVqEFuDNe6ecuY45UfUmfG0jdDE8c3EZAPGeUQp47NSBOPlu3sS49UYFxD3B6y2FKesNRXEkPjo0Bu%2FA%2BR%2FqPwKPhWsKqzgiwo%2FUfWicifuztxpcJ74jsjsZcwIbgZ4GBZWhIxupwX3vn2iz8GQ1N9HDmRS2efijWXNnuNz0BCUWEK2aT%2BWp7VzJpqeO6tiDrfbHW8zPuMJ%2Fn3cMGOqUBYJmpbdyQklujwFRjz1EtHSw8oEQkWv5ZdPcyA730jAIcagn09%2BaJRsLG4NwRMlj2zmyZzlRRfI8mowhIUakm23jEIwNuAB5hcfCZIfq21tEcAUbDwCXrqOG%2FAdmoRRXAnvxTuBpTz888l6hmR0dg%2B7Fa4CJn3ic9kMN2z3nZekMh%2B1rDXmgwfmlrrDLge5IGQx0ZZnaT535LwlM246DhyRSqVOes&X-Amz-Signature=c2b6bf28b02fe3592083a37a98edb090934453d585b75fbc8a25060b4e2c34fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
