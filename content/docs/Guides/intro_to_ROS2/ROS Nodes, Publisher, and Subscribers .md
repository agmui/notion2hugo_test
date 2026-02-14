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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=e0b2fdd3dc2781b40cd0c45e60f235448af95894439b270320f723949be0d56b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=8818dc62b3dd793eb49c8895fae9aed5c4be147b71bb67863a4af02697d01d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=7f1a07a4f39fb0b4778fbfabed90a52c331402cdc5b85924f2fca41fe6a1e209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=5e1e509dedca9f4dab8c80af9225ebea74ef429d86f399d73433984b9ec04302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=a077a6fe71e79e472757f5fe6c967f1e881f89d9eee986b3a117ae59aeb2d323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=c22c31b988b981d7c15b74e716cf9b15fbfd000a3afe76a69b780596a8c52225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=cde4c95a18c49c9589e1146291f98f023e49d99445ee22ff7e5a1e7b9b238053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=ea20095ff4ca2f64add1cdd7d65248b43857f53a2c494f3dfb2b57bdeb20ad86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
