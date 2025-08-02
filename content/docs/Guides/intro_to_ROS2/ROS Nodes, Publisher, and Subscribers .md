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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPAMKKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLAWNh40NWYDaVMd2mS3K0fLnLn55O6gB0IxdQ%2FoY%2BXgIgGzgJOyP9RhruDliofYMYWi%2Bhx%2F7KF1ZAYoWCoDsw0aYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fnJ9SDgZJm%2BneDyrcA1ClRmA7a%2FeYJkzOBbExPwOJqNVGzpIVjuBFS11BqvoKy1lPhbRwFvcINaf4jaI5uzp5qn0MEAmzZPUOwmLPVWr60WH3wCi2qlxlxvjPF09QawXw5atI5gQ7PJE2doi%2Bsl3vEv6onFQP9pF6S1D84UAqhV8i94VQE0ljZDg2o5Q7ZjWMTZd6SfoEVKfo8DVK45hNEPTiekDHMn8VDemX%2B46W3Sosjnwux2OYCQr34wVvMF1pflISMGia58fMDZU1qerN419EN8%2BQO4hn2OcpycgO87VeDsEqLnSgJioDji1wi3osHQLB3v9D5wTk39PyTBIWiYQ9C26iAJB6UZUu5OaFiTOVziLUXZgU7t0AvGK9casMSmiVzsQWYbC56G%2Bcixkvboii5okQxyT9W08cBfo6758Q9HMM4pa4KKb760otZDVi%2BzBKSnRIcK6jmJhVO7xEhoKOcxMjPoznLE56GLHFL6%2FVs594RwDLduenZQ9pFf7uDLxB%2FRxUc5E%2B5Awoz6tWZB1AAMru1yq94lmn%2FGLF%2BqmPorIh%2FVK7LVOzLpv3KXHBO3QJoH6CLmEwIAafVo0CGEp6JcjrwpLCpzBh4ph0BftmUG3cgRwHaohhwNu6TelSBrbnKJW%2BmuqgMMHStcQGOqUB0g4S3ZBq%2FC9W4VEWn2tF7s8xumAKyeWVZ6yNKP4JMB3iNCnNNVMCMakhBdT3aNp7DDBY0Wq4d9hGDDibzp4y5%2BTlU8hmm7RgMSikFLQBai3Z2qmDKJKY3Tkel%2BV4bXl6B8w9HKkh4UtpteZXARFqvi5SfQs1RSF9LWtk3KEaMNjOCI4rWy1IprYXQ%2Fg3Gn88MgHxDLBTc%2B4v7JOEkilB9SJJj%2B63&X-Amz-Signature=67a43e6391d58ff64259807c99ecea19d4c85f56192924818d107475325df957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPAMKKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLAWNh40NWYDaVMd2mS3K0fLnLn55O6gB0IxdQ%2FoY%2BXgIgGzgJOyP9RhruDliofYMYWi%2Bhx%2F7KF1ZAYoWCoDsw0aYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fnJ9SDgZJm%2BneDyrcA1ClRmA7a%2FeYJkzOBbExPwOJqNVGzpIVjuBFS11BqvoKy1lPhbRwFvcINaf4jaI5uzp5qn0MEAmzZPUOwmLPVWr60WH3wCi2qlxlxvjPF09QawXw5atI5gQ7PJE2doi%2Bsl3vEv6onFQP9pF6S1D84UAqhV8i94VQE0ljZDg2o5Q7ZjWMTZd6SfoEVKfo8DVK45hNEPTiekDHMn8VDemX%2B46W3Sosjnwux2OYCQr34wVvMF1pflISMGia58fMDZU1qerN419EN8%2BQO4hn2OcpycgO87VeDsEqLnSgJioDji1wi3osHQLB3v9D5wTk39PyTBIWiYQ9C26iAJB6UZUu5OaFiTOVziLUXZgU7t0AvGK9casMSmiVzsQWYbC56G%2Bcixkvboii5okQxyT9W08cBfo6758Q9HMM4pa4KKb760otZDVi%2BzBKSnRIcK6jmJhVO7xEhoKOcxMjPoznLE56GLHFL6%2FVs594RwDLduenZQ9pFf7uDLxB%2FRxUc5E%2B5Awoz6tWZB1AAMru1yq94lmn%2FGLF%2BqmPorIh%2FVK7LVOzLpv3KXHBO3QJoH6CLmEwIAafVo0CGEp6JcjrwpLCpzBh4ph0BftmUG3cgRwHaohhwNu6TelSBrbnKJW%2BmuqgMMHStcQGOqUB0g4S3ZBq%2FC9W4VEWn2tF7s8xumAKyeWVZ6yNKP4JMB3iNCnNNVMCMakhBdT3aNp7DDBY0Wq4d9hGDDibzp4y5%2BTlU8hmm7RgMSikFLQBai3Z2qmDKJKY3Tkel%2BV4bXl6B8w9HKkh4UtpteZXARFqvi5SfQs1RSF9LWtk3KEaMNjOCI4rWy1IprYXQ%2Fg3Gn88MgHxDLBTc%2B4v7JOEkilB9SJJj%2B63&X-Amz-Signature=babee7d354f24554bb1b2eb0dd01f6d496e689e8bbb097b4d2cc473f1ed27b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPAMKKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLAWNh40NWYDaVMd2mS3K0fLnLn55O6gB0IxdQ%2FoY%2BXgIgGzgJOyP9RhruDliofYMYWi%2Bhx%2F7KF1ZAYoWCoDsw0aYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fnJ9SDgZJm%2BneDyrcA1ClRmA7a%2FeYJkzOBbExPwOJqNVGzpIVjuBFS11BqvoKy1lPhbRwFvcINaf4jaI5uzp5qn0MEAmzZPUOwmLPVWr60WH3wCi2qlxlxvjPF09QawXw5atI5gQ7PJE2doi%2Bsl3vEv6onFQP9pF6S1D84UAqhV8i94VQE0ljZDg2o5Q7ZjWMTZd6SfoEVKfo8DVK45hNEPTiekDHMn8VDemX%2B46W3Sosjnwux2OYCQr34wVvMF1pflISMGia58fMDZU1qerN419EN8%2BQO4hn2OcpycgO87VeDsEqLnSgJioDji1wi3osHQLB3v9D5wTk39PyTBIWiYQ9C26iAJB6UZUu5OaFiTOVziLUXZgU7t0AvGK9casMSmiVzsQWYbC56G%2Bcixkvboii5okQxyT9W08cBfo6758Q9HMM4pa4KKb760otZDVi%2BzBKSnRIcK6jmJhVO7xEhoKOcxMjPoznLE56GLHFL6%2FVs594RwDLduenZQ9pFf7uDLxB%2FRxUc5E%2B5Awoz6tWZB1AAMru1yq94lmn%2FGLF%2BqmPorIh%2FVK7LVOzLpv3KXHBO3QJoH6CLmEwIAafVo0CGEp6JcjrwpLCpzBh4ph0BftmUG3cgRwHaohhwNu6TelSBrbnKJW%2BmuqgMMHStcQGOqUB0g4S3ZBq%2FC9W4VEWn2tF7s8xumAKyeWVZ6yNKP4JMB3iNCnNNVMCMakhBdT3aNp7DDBY0Wq4d9hGDDibzp4y5%2BTlU8hmm7RgMSikFLQBai3Z2qmDKJKY3Tkel%2BV4bXl6B8w9HKkh4UtpteZXARFqvi5SfQs1RSF9LWtk3KEaMNjOCI4rWy1IprYXQ%2Fg3Gn88MgHxDLBTc%2B4v7JOEkilB9SJJj%2B63&X-Amz-Signature=23b745a23b274839995b33ecc9fe37d5ac8be30d519e61219d91344ce6eed3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPAMKKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLAWNh40NWYDaVMd2mS3K0fLnLn55O6gB0IxdQ%2FoY%2BXgIgGzgJOyP9RhruDliofYMYWi%2Bhx%2F7KF1ZAYoWCoDsw0aYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fnJ9SDgZJm%2BneDyrcA1ClRmA7a%2FeYJkzOBbExPwOJqNVGzpIVjuBFS11BqvoKy1lPhbRwFvcINaf4jaI5uzp5qn0MEAmzZPUOwmLPVWr60WH3wCi2qlxlxvjPF09QawXw5atI5gQ7PJE2doi%2Bsl3vEv6onFQP9pF6S1D84UAqhV8i94VQE0ljZDg2o5Q7ZjWMTZd6SfoEVKfo8DVK45hNEPTiekDHMn8VDemX%2B46W3Sosjnwux2OYCQr34wVvMF1pflISMGia58fMDZU1qerN419EN8%2BQO4hn2OcpycgO87VeDsEqLnSgJioDji1wi3osHQLB3v9D5wTk39PyTBIWiYQ9C26iAJB6UZUu5OaFiTOVziLUXZgU7t0AvGK9casMSmiVzsQWYbC56G%2Bcixkvboii5okQxyT9W08cBfo6758Q9HMM4pa4KKb760otZDVi%2BzBKSnRIcK6jmJhVO7xEhoKOcxMjPoznLE56GLHFL6%2FVs594RwDLduenZQ9pFf7uDLxB%2FRxUc5E%2B5Awoz6tWZB1AAMru1yq94lmn%2FGLF%2BqmPorIh%2FVK7LVOzLpv3KXHBO3QJoH6CLmEwIAafVo0CGEp6JcjrwpLCpzBh4ph0BftmUG3cgRwHaohhwNu6TelSBrbnKJW%2BmuqgMMHStcQGOqUB0g4S3ZBq%2FC9W4VEWn2tF7s8xumAKyeWVZ6yNKP4JMB3iNCnNNVMCMakhBdT3aNp7DDBY0Wq4d9hGDDibzp4y5%2BTlU8hmm7RgMSikFLQBai3Z2qmDKJKY3Tkel%2BV4bXl6B8w9HKkh4UtpteZXARFqvi5SfQs1RSF9LWtk3KEaMNjOCI4rWy1IprYXQ%2Fg3Gn88MgHxDLBTc%2B4v7JOEkilB9SJJj%2B63&X-Amz-Signature=74fbc6cd96f1a76f4e15b16b36de1321db45aae2be22b2a35029af28141925d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPAMKKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLAWNh40NWYDaVMd2mS3K0fLnLn55O6gB0IxdQ%2FoY%2BXgIgGzgJOyP9RhruDliofYMYWi%2Bhx%2F7KF1ZAYoWCoDsw0aYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fnJ9SDgZJm%2BneDyrcA1ClRmA7a%2FeYJkzOBbExPwOJqNVGzpIVjuBFS11BqvoKy1lPhbRwFvcINaf4jaI5uzp5qn0MEAmzZPUOwmLPVWr60WH3wCi2qlxlxvjPF09QawXw5atI5gQ7PJE2doi%2Bsl3vEv6onFQP9pF6S1D84UAqhV8i94VQE0ljZDg2o5Q7ZjWMTZd6SfoEVKfo8DVK45hNEPTiekDHMn8VDemX%2B46W3Sosjnwux2OYCQr34wVvMF1pflISMGia58fMDZU1qerN419EN8%2BQO4hn2OcpycgO87VeDsEqLnSgJioDji1wi3osHQLB3v9D5wTk39PyTBIWiYQ9C26iAJB6UZUu5OaFiTOVziLUXZgU7t0AvGK9casMSmiVzsQWYbC56G%2Bcixkvboii5okQxyT9W08cBfo6758Q9HMM4pa4KKb760otZDVi%2BzBKSnRIcK6jmJhVO7xEhoKOcxMjPoznLE56GLHFL6%2FVs594RwDLduenZQ9pFf7uDLxB%2FRxUc5E%2B5Awoz6tWZB1AAMru1yq94lmn%2FGLF%2BqmPorIh%2FVK7LVOzLpv3KXHBO3QJoH6CLmEwIAafVo0CGEp6JcjrwpLCpzBh4ph0BftmUG3cgRwHaohhwNu6TelSBrbnKJW%2BmuqgMMHStcQGOqUB0g4S3ZBq%2FC9W4VEWn2tF7s8xumAKyeWVZ6yNKP4JMB3iNCnNNVMCMakhBdT3aNp7DDBY0Wq4d9hGDDibzp4y5%2BTlU8hmm7RgMSikFLQBai3Z2qmDKJKY3Tkel%2BV4bXl6B8w9HKkh4UtpteZXARFqvi5SfQs1RSF9LWtk3KEaMNjOCI4rWy1IprYXQ%2Fg3Gn88MgHxDLBTc%2B4v7JOEkilB9SJJj%2B63&X-Amz-Signature=b95669e80bfe098fb7e16c61380a83659a0df1b8e700f3d92b9987e57d272190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPAMKKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLAWNh40NWYDaVMd2mS3K0fLnLn55O6gB0IxdQ%2FoY%2BXgIgGzgJOyP9RhruDliofYMYWi%2Bhx%2F7KF1ZAYoWCoDsw0aYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fnJ9SDgZJm%2BneDyrcA1ClRmA7a%2FeYJkzOBbExPwOJqNVGzpIVjuBFS11BqvoKy1lPhbRwFvcINaf4jaI5uzp5qn0MEAmzZPUOwmLPVWr60WH3wCi2qlxlxvjPF09QawXw5atI5gQ7PJE2doi%2Bsl3vEv6onFQP9pF6S1D84UAqhV8i94VQE0ljZDg2o5Q7ZjWMTZd6SfoEVKfo8DVK45hNEPTiekDHMn8VDemX%2B46W3Sosjnwux2OYCQr34wVvMF1pflISMGia58fMDZU1qerN419EN8%2BQO4hn2OcpycgO87VeDsEqLnSgJioDji1wi3osHQLB3v9D5wTk39PyTBIWiYQ9C26iAJB6UZUu5OaFiTOVziLUXZgU7t0AvGK9casMSmiVzsQWYbC56G%2Bcixkvboii5okQxyT9W08cBfo6758Q9HMM4pa4KKb760otZDVi%2BzBKSnRIcK6jmJhVO7xEhoKOcxMjPoznLE56GLHFL6%2FVs594RwDLduenZQ9pFf7uDLxB%2FRxUc5E%2B5Awoz6tWZB1AAMru1yq94lmn%2FGLF%2BqmPorIh%2FVK7LVOzLpv3KXHBO3QJoH6CLmEwIAafVo0CGEp6JcjrwpLCpzBh4ph0BftmUG3cgRwHaohhwNu6TelSBrbnKJW%2BmuqgMMHStcQGOqUB0g4S3ZBq%2FC9W4VEWn2tF7s8xumAKyeWVZ6yNKP4JMB3iNCnNNVMCMakhBdT3aNp7DDBY0Wq4d9hGDDibzp4y5%2BTlU8hmm7RgMSikFLQBai3Z2qmDKJKY3Tkel%2BV4bXl6B8w9HKkh4UtpteZXARFqvi5SfQs1RSF9LWtk3KEaMNjOCI4rWy1IprYXQ%2Fg3Gn88MgHxDLBTc%2B4v7JOEkilB9SJJj%2B63&X-Amz-Signature=52ac34fc724b91ff107724131f1a1c010bdb9d050ab7cb516e3730844d722099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPAMKKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLAWNh40NWYDaVMd2mS3K0fLnLn55O6gB0IxdQ%2FoY%2BXgIgGzgJOyP9RhruDliofYMYWi%2Bhx%2F7KF1ZAYoWCoDsw0aYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fnJ9SDgZJm%2BneDyrcA1ClRmA7a%2FeYJkzOBbExPwOJqNVGzpIVjuBFS11BqvoKy1lPhbRwFvcINaf4jaI5uzp5qn0MEAmzZPUOwmLPVWr60WH3wCi2qlxlxvjPF09QawXw5atI5gQ7PJE2doi%2Bsl3vEv6onFQP9pF6S1D84UAqhV8i94VQE0ljZDg2o5Q7ZjWMTZd6SfoEVKfo8DVK45hNEPTiekDHMn8VDemX%2B46W3Sosjnwux2OYCQr34wVvMF1pflISMGia58fMDZU1qerN419EN8%2BQO4hn2OcpycgO87VeDsEqLnSgJioDji1wi3osHQLB3v9D5wTk39PyTBIWiYQ9C26iAJB6UZUu5OaFiTOVziLUXZgU7t0AvGK9casMSmiVzsQWYbC56G%2Bcixkvboii5okQxyT9W08cBfo6758Q9HMM4pa4KKb760otZDVi%2BzBKSnRIcK6jmJhVO7xEhoKOcxMjPoznLE56GLHFL6%2FVs594RwDLduenZQ9pFf7uDLxB%2FRxUc5E%2B5Awoz6tWZB1AAMru1yq94lmn%2FGLF%2BqmPorIh%2FVK7LVOzLpv3KXHBO3QJoH6CLmEwIAafVo0CGEp6JcjrwpLCpzBh4ph0BftmUG3cgRwHaohhwNu6TelSBrbnKJW%2BmuqgMMHStcQGOqUB0g4S3ZBq%2FC9W4VEWn2tF7s8xumAKyeWVZ6yNKP4JMB3iNCnNNVMCMakhBdT3aNp7DDBY0Wq4d9hGDDibzp4y5%2BTlU8hmm7RgMSikFLQBai3Z2qmDKJKY3Tkel%2BV4bXl6B8w9HKkh4UtpteZXARFqvi5SfQs1RSF9LWtk3KEaMNjOCI4rWy1IprYXQ%2Fg3Gn88MgHxDLBTc%2B4v7JOEkilB9SJJj%2B63&X-Amz-Signature=8a0da696d21fc3b61a88d9b5a4f30cd77d46f494aad564f12ceeb74606f70eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPAMKKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLAWNh40NWYDaVMd2mS3K0fLnLn55O6gB0IxdQ%2FoY%2BXgIgGzgJOyP9RhruDliofYMYWi%2Bhx%2F7KF1ZAYoWCoDsw0aYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fnJ9SDgZJm%2BneDyrcA1ClRmA7a%2FeYJkzOBbExPwOJqNVGzpIVjuBFS11BqvoKy1lPhbRwFvcINaf4jaI5uzp5qn0MEAmzZPUOwmLPVWr60WH3wCi2qlxlxvjPF09QawXw5atI5gQ7PJE2doi%2Bsl3vEv6onFQP9pF6S1D84UAqhV8i94VQE0ljZDg2o5Q7ZjWMTZd6SfoEVKfo8DVK45hNEPTiekDHMn8VDemX%2B46W3Sosjnwux2OYCQr34wVvMF1pflISMGia58fMDZU1qerN419EN8%2BQO4hn2OcpycgO87VeDsEqLnSgJioDji1wi3osHQLB3v9D5wTk39PyTBIWiYQ9C26iAJB6UZUu5OaFiTOVziLUXZgU7t0AvGK9casMSmiVzsQWYbC56G%2Bcixkvboii5okQxyT9W08cBfo6758Q9HMM4pa4KKb760otZDVi%2BzBKSnRIcK6jmJhVO7xEhoKOcxMjPoznLE56GLHFL6%2FVs594RwDLduenZQ9pFf7uDLxB%2FRxUc5E%2B5Awoz6tWZB1AAMru1yq94lmn%2FGLF%2BqmPorIh%2FVK7LVOzLpv3KXHBO3QJoH6CLmEwIAafVo0CGEp6JcjrwpLCpzBh4ph0BftmUG3cgRwHaohhwNu6TelSBrbnKJW%2BmuqgMMHStcQGOqUB0g4S3ZBq%2FC9W4VEWn2tF7s8xumAKyeWVZ6yNKP4JMB3iNCnNNVMCMakhBdT3aNp7DDBY0Wq4d9hGDDibzp4y5%2BTlU8hmm7RgMSikFLQBai3Z2qmDKJKY3Tkel%2BV4bXl6B8w9HKkh4UtpteZXARFqvi5SfQs1RSF9LWtk3KEaMNjOCI4rWy1IprYXQ%2Fg3Gn88MgHxDLBTc%2B4v7JOEkilB9SJJj%2B63&X-Amz-Signature=0fef8daf6f10ae93cac858a006ac77cd2590ede1f1e69d3f435d6c550ef466fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
