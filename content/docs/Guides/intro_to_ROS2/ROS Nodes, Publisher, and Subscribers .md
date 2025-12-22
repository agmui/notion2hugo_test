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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIJOYHG%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2B%2BgD24y3ywq2LHhcIvaXpgYFaxbZNJ7JPZqN9f0ugxAIgdJpLM%2FXvCgQzXluoy3Tym%2BdRpxotWhPI677Fl4JFK1gqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdKYQayfr7N2z9L4CrcA7l0YCGeLQDqIEYm%2Fj2mg0AC0lgl5vqKKJtCcPwTkBhWF4yzYNa5Tlu%2B0y5lK5Q9QynUCVAYWfWUFgjmWmTqwbNTl9m%2BLX9S9Vo%2BbXk8C5TJ1O4WgEM7bk0IQn7E2ZEM9sJGuLXuw8Lef7CIMX5XTt8VJBS%2B4RCeaS2e0QozQc3UAxXFHHmrbgOwKcQzFhDAEKkIyv%2FzYn2hUZrciT2wOoxEtUFNW%2BQPGuYddK76uy9RtD4xFzQ6VlCFEIEI%2BvhorhY92d6GuGmqXYatAxLrzdEHDt8cnD16iVOhVl2V8foZ9Bq9x7MjcyO%2BsVHDC3RXN8%2FhemYBcNBoVoqIAmLMglmJcU6XVRVkDOOngM%2Fy2aVN2U80EDpzTtet%2FvME4ZYpW63kc4xIWf9wOobt9gqFdvx24uJ5swzd1nHLlrtefb1WMW3amm66Ipmhm3%2BL2TWR5WIbGm50xEIVPUD8H6ipFIOOZ5QoqEut%2F9In5ZNsnbMaC7%2BwXjpbh0M1cZG2aSf2GL0HxO%2BZt13XXvZthrIIGF6Pxur%2BiZbt1rSULx8MGM1TDgYcoPaCXJndy30Vfm5no3cUYjix5Cd3nz4vxds7kTxdqSohkjrfCEJXCR0IIw%2B02eRM%2FcW9Gr6zU6eNMMr5ocoGOqUB04%2Bwpav%2FjJ8DSZZIYtXxv4wTFhE9gmkif9JgzhW2TSmZkhzKtIsT%2B56390gNov7Pn5lytOrG6dU3JU9DKjfCnOgb4WHST8Oi1fh6%2BrMXBbu6EQMeo438Vr2Jg7je%2FZxmQboIho512sbw38VJvLYPSi55KbWqaOsoKlmbz9mzDYtFl25zdk2NcLtoYGxyy9IY4YokIa03k5R%2Fci8A2OF0uKRR25Bx&X-Amz-Signature=b77bbf0195ed46701fcd80f846f68c3ba61ee24b3a2ee4e5d655bcaffe1d130f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIJOYHG%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2B%2BgD24y3ywq2LHhcIvaXpgYFaxbZNJ7JPZqN9f0ugxAIgdJpLM%2FXvCgQzXluoy3Tym%2BdRpxotWhPI677Fl4JFK1gqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdKYQayfr7N2z9L4CrcA7l0YCGeLQDqIEYm%2Fj2mg0AC0lgl5vqKKJtCcPwTkBhWF4yzYNa5Tlu%2B0y5lK5Q9QynUCVAYWfWUFgjmWmTqwbNTl9m%2BLX9S9Vo%2BbXk8C5TJ1O4WgEM7bk0IQn7E2ZEM9sJGuLXuw8Lef7CIMX5XTt8VJBS%2B4RCeaS2e0QozQc3UAxXFHHmrbgOwKcQzFhDAEKkIyv%2FzYn2hUZrciT2wOoxEtUFNW%2BQPGuYddK76uy9RtD4xFzQ6VlCFEIEI%2BvhorhY92d6GuGmqXYatAxLrzdEHDt8cnD16iVOhVl2V8foZ9Bq9x7MjcyO%2BsVHDC3RXN8%2FhemYBcNBoVoqIAmLMglmJcU6XVRVkDOOngM%2Fy2aVN2U80EDpzTtet%2FvME4ZYpW63kc4xIWf9wOobt9gqFdvx24uJ5swzd1nHLlrtefb1WMW3amm66Ipmhm3%2BL2TWR5WIbGm50xEIVPUD8H6ipFIOOZ5QoqEut%2F9In5ZNsnbMaC7%2BwXjpbh0M1cZG2aSf2GL0HxO%2BZt13XXvZthrIIGF6Pxur%2BiZbt1rSULx8MGM1TDgYcoPaCXJndy30Vfm5no3cUYjix5Cd3nz4vxds7kTxdqSohkjrfCEJXCR0IIw%2B02eRM%2FcW9Gr6zU6eNMMr5ocoGOqUB04%2Bwpav%2FjJ8DSZZIYtXxv4wTFhE9gmkif9JgzhW2TSmZkhzKtIsT%2B56390gNov7Pn5lytOrG6dU3JU9DKjfCnOgb4WHST8Oi1fh6%2BrMXBbu6EQMeo438Vr2Jg7je%2FZxmQboIho512sbw38VJvLYPSi55KbWqaOsoKlmbz9mzDYtFl25zdk2NcLtoYGxyy9IY4YokIa03k5R%2Fci8A2OF0uKRR25Bx&X-Amz-Signature=a9be9e48eadb19b831e07fa04445b74f26d67bdc10d7ec3a530a15c2d2de5565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIJOYHG%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2B%2BgD24y3ywq2LHhcIvaXpgYFaxbZNJ7JPZqN9f0ugxAIgdJpLM%2FXvCgQzXluoy3Tym%2BdRpxotWhPI677Fl4JFK1gqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdKYQayfr7N2z9L4CrcA7l0YCGeLQDqIEYm%2Fj2mg0AC0lgl5vqKKJtCcPwTkBhWF4yzYNa5Tlu%2B0y5lK5Q9QynUCVAYWfWUFgjmWmTqwbNTl9m%2BLX9S9Vo%2BbXk8C5TJ1O4WgEM7bk0IQn7E2ZEM9sJGuLXuw8Lef7CIMX5XTt8VJBS%2B4RCeaS2e0QozQc3UAxXFHHmrbgOwKcQzFhDAEKkIyv%2FzYn2hUZrciT2wOoxEtUFNW%2BQPGuYddK76uy9RtD4xFzQ6VlCFEIEI%2BvhorhY92d6GuGmqXYatAxLrzdEHDt8cnD16iVOhVl2V8foZ9Bq9x7MjcyO%2BsVHDC3RXN8%2FhemYBcNBoVoqIAmLMglmJcU6XVRVkDOOngM%2Fy2aVN2U80EDpzTtet%2FvME4ZYpW63kc4xIWf9wOobt9gqFdvx24uJ5swzd1nHLlrtefb1WMW3amm66Ipmhm3%2BL2TWR5WIbGm50xEIVPUD8H6ipFIOOZ5QoqEut%2F9In5ZNsnbMaC7%2BwXjpbh0M1cZG2aSf2GL0HxO%2BZt13XXvZthrIIGF6Pxur%2BiZbt1rSULx8MGM1TDgYcoPaCXJndy30Vfm5no3cUYjix5Cd3nz4vxds7kTxdqSohkjrfCEJXCR0IIw%2B02eRM%2FcW9Gr6zU6eNMMr5ocoGOqUB04%2Bwpav%2FjJ8DSZZIYtXxv4wTFhE9gmkif9JgzhW2TSmZkhzKtIsT%2B56390gNov7Pn5lytOrG6dU3JU9DKjfCnOgb4WHST8Oi1fh6%2BrMXBbu6EQMeo438Vr2Jg7je%2FZxmQboIho512sbw38VJvLYPSi55KbWqaOsoKlmbz9mzDYtFl25zdk2NcLtoYGxyy9IY4YokIa03k5R%2Fci8A2OF0uKRR25Bx&X-Amz-Signature=846893c5b47119e9646092f4e27c677adcb91e51381b0b15deb19452f3c96400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIJOYHG%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2B%2BgD24y3ywq2LHhcIvaXpgYFaxbZNJ7JPZqN9f0ugxAIgdJpLM%2FXvCgQzXluoy3Tym%2BdRpxotWhPI677Fl4JFK1gqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdKYQayfr7N2z9L4CrcA7l0YCGeLQDqIEYm%2Fj2mg0AC0lgl5vqKKJtCcPwTkBhWF4yzYNa5Tlu%2B0y5lK5Q9QynUCVAYWfWUFgjmWmTqwbNTl9m%2BLX9S9Vo%2BbXk8C5TJ1O4WgEM7bk0IQn7E2ZEM9sJGuLXuw8Lef7CIMX5XTt8VJBS%2B4RCeaS2e0QozQc3UAxXFHHmrbgOwKcQzFhDAEKkIyv%2FzYn2hUZrciT2wOoxEtUFNW%2BQPGuYddK76uy9RtD4xFzQ6VlCFEIEI%2BvhorhY92d6GuGmqXYatAxLrzdEHDt8cnD16iVOhVl2V8foZ9Bq9x7MjcyO%2BsVHDC3RXN8%2FhemYBcNBoVoqIAmLMglmJcU6XVRVkDOOngM%2Fy2aVN2U80EDpzTtet%2FvME4ZYpW63kc4xIWf9wOobt9gqFdvx24uJ5swzd1nHLlrtefb1WMW3amm66Ipmhm3%2BL2TWR5WIbGm50xEIVPUD8H6ipFIOOZ5QoqEut%2F9In5ZNsnbMaC7%2BwXjpbh0M1cZG2aSf2GL0HxO%2BZt13XXvZthrIIGF6Pxur%2BiZbt1rSULx8MGM1TDgYcoPaCXJndy30Vfm5no3cUYjix5Cd3nz4vxds7kTxdqSohkjrfCEJXCR0IIw%2B02eRM%2FcW9Gr6zU6eNMMr5ocoGOqUB04%2Bwpav%2FjJ8DSZZIYtXxv4wTFhE9gmkif9JgzhW2TSmZkhzKtIsT%2B56390gNov7Pn5lytOrG6dU3JU9DKjfCnOgb4WHST8Oi1fh6%2BrMXBbu6EQMeo438Vr2Jg7je%2FZxmQboIho512sbw38VJvLYPSi55KbWqaOsoKlmbz9mzDYtFl25zdk2NcLtoYGxyy9IY4YokIa03k5R%2Fci8A2OF0uKRR25Bx&X-Amz-Signature=a641fd5032b7834cf270402015226cc513f1446f3ba609480145fd17eaf81f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIJOYHG%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2B%2BgD24y3ywq2LHhcIvaXpgYFaxbZNJ7JPZqN9f0ugxAIgdJpLM%2FXvCgQzXluoy3Tym%2BdRpxotWhPI677Fl4JFK1gqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdKYQayfr7N2z9L4CrcA7l0YCGeLQDqIEYm%2Fj2mg0AC0lgl5vqKKJtCcPwTkBhWF4yzYNa5Tlu%2B0y5lK5Q9QynUCVAYWfWUFgjmWmTqwbNTl9m%2BLX9S9Vo%2BbXk8C5TJ1O4WgEM7bk0IQn7E2ZEM9sJGuLXuw8Lef7CIMX5XTt8VJBS%2B4RCeaS2e0QozQc3UAxXFHHmrbgOwKcQzFhDAEKkIyv%2FzYn2hUZrciT2wOoxEtUFNW%2BQPGuYddK76uy9RtD4xFzQ6VlCFEIEI%2BvhorhY92d6GuGmqXYatAxLrzdEHDt8cnD16iVOhVl2V8foZ9Bq9x7MjcyO%2BsVHDC3RXN8%2FhemYBcNBoVoqIAmLMglmJcU6XVRVkDOOngM%2Fy2aVN2U80EDpzTtet%2FvME4ZYpW63kc4xIWf9wOobt9gqFdvx24uJ5swzd1nHLlrtefb1WMW3amm66Ipmhm3%2BL2TWR5WIbGm50xEIVPUD8H6ipFIOOZ5QoqEut%2F9In5ZNsnbMaC7%2BwXjpbh0M1cZG2aSf2GL0HxO%2BZt13XXvZthrIIGF6Pxur%2BiZbt1rSULx8MGM1TDgYcoPaCXJndy30Vfm5no3cUYjix5Cd3nz4vxds7kTxdqSohkjrfCEJXCR0IIw%2B02eRM%2FcW9Gr6zU6eNMMr5ocoGOqUB04%2Bwpav%2FjJ8DSZZIYtXxv4wTFhE9gmkif9JgzhW2TSmZkhzKtIsT%2B56390gNov7Pn5lytOrG6dU3JU9DKjfCnOgb4WHST8Oi1fh6%2BrMXBbu6EQMeo438Vr2Jg7je%2FZxmQboIho512sbw38VJvLYPSi55KbWqaOsoKlmbz9mzDYtFl25zdk2NcLtoYGxyy9IY4YokIa03k5R%2Fci8A2OF0uKRR25Bx&X-Amz-Signature=e6f488b6ae6a04cc523305618837e9b4e1265bfd7e2aed4e1bf7845088aee7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIJOYHG%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2B%2BgD24y3ywq2LHhcIvaXpgYFaxbZNJ7JPZqN9f0ugxAIgdJpLM%2FXvCgQzXluoy3Tym%2BdRpxotWhPI677Fl4JFK1gqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdKYQayfr7N2z9L4CrcA7l0YCGeLQDqIEYm%2Fj2mg0AC0lgl5vqKKJtCcPwTkBhWF4yzYNa5Tlu%2B0y5lK5Q9QynUCVAYWfWUFgjmWmTqwbNTl9m%2BLX9S9Vo%2BbXk8C5TJ1O4WgEM7bk0IQn7E2ZEM9sJGuLXuw8Lef7CIMX5XTt8VJBS%2B4RCeaS2e0QozQc3UAxXFHHmrbgOwKcQzFhDAEKkIyv%2FzYn2hUZrciT2wOoxEtUFNW%2BQPGuYddK76uy9RtD4xFzQ6VlCFEIEI%2BvhorhY92d6GuGmqXYatAxLrzdEHDt8cnD16iVOhVl2V8foZ9Bq9x7MjcyO%2BsVHDC3RXN8%2FhemYBcNBoVoqIAmLMglmJcU6XVRVkDOOngM%2Fy2aVN2U80EDpzTtet%2FvME4ZYpW63kc4xIWf9wOobt9gqFdvx24uJ5swzd1nHLlrtefb1WMW3amm66Ipmhm3%2BL2TWR5WIbGm50xEIVPUD8H6ipFIOOZ5QoqEut%2F9In5ZNsnbMaC7%2BwXjpbh0M1cZG2aSf2GL0HxO%2BZt13XXvZthrIIGF6Pxur%2BiZbt1rSULx8MGM1TDgYcoPaCXJndy30Vfm5no3cUYjix5Cd3nz4vxds7kTxdqSohkjrfCEJXCR0IIw%2B02eRM%2FcW9Gr6zU6eNMMr5ocoGOqUB04%2Bwpav%2FjJ8DSZZIYtXxv4wTFhE9gmkif9JgzhW2TSmZkhzKtIsT%2B56390gNov7Pn5lytOrG6dU3JU9DKjfCnOgb4WHST8Oi1fh6%2BrMXBbu6EQMeo438Vr2Jg7je%2FZxmQboIho512sbw38VJvLYPSi55KbWqaOsoKlmbz9mzDYtFl25zdk2NcLtoYGxyy9IY4YokIa03k5R%2Fci8A2OF0uKRR25Bx&X-Amz-Signature=f2268952959b181e3d2b5bc9f0cb95d52db27a0aee666e5aa4d49e3281ee6e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIJOYHG%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2B%2BgD24y3ywq2LHhcIvaXpgYFaxbZNJ7JPZqN9f0ugxAIgdJpLM%2FXvCgQzXluoy3Tym%2BdRpxotWhPI677Fl4JFK1gqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdKYQayfr7N2z9L4CrcA7l0YCGeLQDqIEYm%2Fj2mg0AC0lgl5vqKKJtCcPwTkBhWF4yzYNa5Tlu%2B0y5lK5Q9QynUCVAYWfWUFgjmWmTqwbNTl9m%2BLX9S9Vo%2BbXk8C5TJ1O4WgEM7bk0IQn7E2ZEM9sJGuLXuw8Lef7CIMX5XTt8VJBS%2B4RCeaS2e0QozQc3UAxXFHHmrbgOwKcQzFhDAEKkIyv%2FzYn2hUZrciT2wOoxEtUFNW%2BQPGuYddK76uy9RtD4xFzQ6VlCFEIEI%2BvhorhY92d6GuGmqXYatAxLrzdEHDt8cnD16iVOhVl2V8foZ9Bq9x7MjcyO%2BsVHDC3RXN8%2FhemYBcNBoVoqIAmLMglmJcU6XVRVkDOOngM%2Fy2aVN2U80EDpzTtet%2FvME4ZYpW63kc4xIWf9wOobt9gqFdvx24uJ5swzd1nHLlrtefb1WMW3amm66Ipmhm3%2BL2TWR5WIbGm50xEIVPUD8H6ipFIOOZ5QoqEut%2F9In5ZNsnbMaC7%2BwXjpbh0M1cZG2aSf2GL0HxO%2BZt13XXvZthrIIGF6Pxur%2BiZbt1rSULx8MGM1TDgYcoPaCXJndy30Vfm5no3cUYjix5Cd3nz4vxds7kTxdqSohkjrfCEJXCR0IIw%2B02eRM%2FcW9Gr6zU6eNMMr5ocoGOqUB04%2Bwpav%2FjJ8DSZZIYtXxv4wTFhE9gmkif9JgzhW2TSmZkhzKtIsT%2B56390gNov7Pn5lytOrG6dU3JU9DKjfCnOgb4WHST8Oi1fh6%2BrMXBbu6EQMeo438Vr2Jg7je%2FZxmQboIho512sbw38VJvLYPSi55KbWqaOsoKlmbz9mzDYtFl25zdk2NcLtoYGxyy9IY4YokIa03k5R%2Fci8A2OF0uKRR25Bx&X-Amz-Signature=33b2ec8c750a78dae08d9e4ce7d552de408cd5e73b9242c9df77b7863a517866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIJOYHG%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC%2B%2BgD24y3ywq2LHhcIvaXpgYFaxbZNJ7JPZqN9f0ugxAIgdJpLM%2FXvCgQzXluoy3Tym%2BdRpxotWhPI677Fl4JFK1gqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdKYQayfr7N2z9L4CrcA7l0YCGeLQDqIEYm%2Fj2mg0AC0lgl5vqKKJtCcPwTkBhWF4yzYNa5Tlu%2B0y5lK5Q9QynUCVAYWfWUFgjmWmTqwbNTl9m%2BLX9S9Vo%2BbXk8C5TJ1O4WgEM7bk0IQn7E2ZEM9sJGuLXuw8Lef7CIMX5XTt8VJBS%2B4RCeaS2e0QozQc3UAxXFHHmrbgOwKcQzFhDAEKkIyv%2FzYn2hUZrciT2wOoxEtUFNW%2BQPGuYddK76uy9RtD4xFzQ6VlCFEIEI%2BvhorhY92d6GuGmqXYatAxLrzdEHDt8cnD16iVOhVl2V8foZ9Bq9x7MjcyO%2BsVHDC3RXN8%2FhemYBcNBoVoqIAmLMglmJcU6XVRVkDOOngM%2Fy2aVN2U80EDpzTtet%2FvME4ZYpW63kc4xIWf9wOobt9gqFdvx24uJ5swzd1nHLlrtefb1WMW3amm66Ipmhm3%2BL2TWR5WIbGm50xEIVPUD8H6ipFIOOZ5QoqEut%2F9In5ZNsnbMaC7%2BwXjpbh0M1cZG2aSf2GL0HxO%2BZt13XXvZthrIIGF6Pxur%2BiZbt1rSULx8MGM1TDgYcoPaCXJndy30Vfm5no3cUYjix5Cd3nz4vxds7kTxdqSohkjrfCEJXCR0IIw%2B02eRM%2FcW9Gr6zU6eNMMr5ocoGOqUB04%2Bwpav%2FjJ8DSZZIYtXxv4wTFhE9gmkif9JgzhW2TSmZkhzKtIsT%2B56390gNov7Pn5lytOrG6dU3JU9DKjfCnOgb4WHST8Oi1fh6%2BrMXBbu6EQMeo438Vr2Jg7je%2FZxmQboIho512sbw38VJvLYPSi55KbWqaOsoKlmbz9mzDYtFl25zdk2NcLtoYGxyy9IY4YokIa03k5R%2Fci8A2OF0uKRR25Bx&X-Amz-Signature=d375bdf25198e750b88b5090008012195539467086de0490d0e8674cc5d7e29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
