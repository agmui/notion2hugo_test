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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEDHVJF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUo9VGGv9hk%2FHXB5q332YyRzFa0jpInBDd%2B%2Fer52zTuAIgAh3pIHzC2Q5nvqGZJgiHflrHany57Vqp1tR2qxXUS5gqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJ4QaVwNkXyLTXHircA9Ty6us6KoVxL58aEfpqdnZs62eARtPFVxRs3YlArIJq47dN0TXzfDxPQ9lghwdMSkvtBD%2F4a%2Fr%2FUOooffQpztrST7VnpFNQgWjev5DTpTHPUrrVbFMTt9OpXCT0fmIKTmvHggHEuWZYV%2FRtGTAGMga%2B1UAjg6kykw0MpVc%2BPHQ5lFi6v6pjXegM5MVfWpLzmLdmFPuy0q%2BBOWB%2BhtyCynMSfn9dq1ulX%2Fu%2BebXjat1TiGs1kgA7G3Y5Qx9mVgZP70k%2BxAw9KLaSyrHO0duG8BiQ9E%2BoeN1CXkWcBnxZB3kNKiCrnvUio30JehXgStGQtWvKUy052a7KkFxOZCst2MFaQf6Y4iOXAlxrBZHb8aC5fHjbLpMbqU2hW%2Bvog%2Bn6eRcPwAHECudjO1jv0fzJZwh9pk2%2F6q5So517X0yKnnvZl2c7hOgStiGL%2BqaMdk%2Bqefv78bTVCjmUfzNuonSaicpBRtblI%2BtDALgV6qBz9ICTF7MMQSYA05FAz5d%2FPo2CDsF4FWAMhFgxVa%2ByboHYvn9YJeBS3Z2HzA%2BvxiWCJIBdEQn4XTrmWsqqIDrl36tclcsF7jyYn8vhF4lfQHj4Gzo1uqqSIL15vuQM%2BaYG9YADyEd1YC5T0l%2B1IspLMI7f9rwGOqUBOoH8yxa8Imbr8l2gGAFtmJaJ0U7rQ2n99CQg%2FvZ9mXBqO9Vm9wih0v74u3kSPYZwtvw8g145YE%2F0DmC2ot50Xml4claAhj3I%2FrKOQK2Gtoi0bC5qforVwbtDoDhb0HHveecjHkjsMP9Si5zT9qJGGDLLmQLYXaUOkkfms0h4htuWrtEOigUisnz92r7OWopFt7soGveLV0Fcwyw%2FFAQbOy6uN6OA&X-Amz-Signature=997182c73673aecf60454a20837fbc7115b87e187a69759c54957df00e603c89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEDHVJF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUo9VGGv9hk%2FHXB5q332YyRzFa0jpInBDd%2B%2Fer52zTuAIgAh3pIHzC2Q5nvqGZJgiHflrHany57Vqp1tR2qxXUS5gqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJ4QaVwNkXyLTXHircA9Ty6us6KoVxL58aEfpqdnZs62eARtPFVxRs3YlArIJq47dN0TXzfDxPQ9lghwdMSkvtBD%2F4a%2Fr%2FUOooffQpztrST7VnpFNQgWjev5DTpTHPUrrVbFMTt9OpXCT0fmIKTmvHggHEuWZYV%2FRtGTAGMga%2B1UAjg6kykw0MpVc%2BPHQ5lFi6v6pjXegM5MVfWpLzmLdmFPuy0q%2BBOWB%2BhtyCynMSfn9dq1ulX%2Fu%2BebXjat1TiGs1kgA7G3Y5Qx9mVgZP70k%2BxAw9KLaSyrHO0duG8BiQ9E%2BoeN1CXkWcBnxZB3kNKiCrnvUio30JehXgStGQtWvKUy052a7KkFxOZCst2MFaQf6Y4iOXAlxrBZHb8aC5fHjbLpMbqU2hW%2Bvog%2Bn6eRcPwAHECudjO1jv0fzJZwh9pk2%2F6q5So517X0yKnnvZl2c7hOgStiGL%2BqaMdk%2Bqefv78bTVCjmUfzNuonSaicpBRtblI%2BtDALgV6qBz9ICTF7MMQSYA05FAz5d%2FPo2CDsF4FWAMhFgxVa%2ByboHYvn9YJeBS3Z2HzA%2BvxiWCJIBdEQn4XTrmWsqqIDrl36tclcsF7jyYn8vhF4lfQHj4Gzo1uqqSIL15vuQM%2BaYG9YADyEd1YC5T0l%2B1IspLMI7f9rwGOqUBOoH8yxa8Imbr8l2gGAFtmJaJ0U7rQ2n99CQg%2FvZ9mXBqO9Vm9wih0v74u3kSPYZwtvw8g145YE%2F0DmC2ot50Xml4claAhj3I%2FrKOQK2Gtoi0bC5qforVwbtDoDhb0HHveecjHkjsMP9Si5zT9qJGGDLLmQLYXaUOkkfms0h4htuWrtEOigUisnz92r7OWopFt7soGveLV0Fcwyw%2FFAQbOy6uN6OA&X-Amz-Signature=406e25ebf08bda5ad59130b65c038416f27b41998d9481ff9341e2c1802ce905&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEDHVJF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUo9VGGv9hk%2FHXB5q332YyRzFa0jpInBDd%2B%2Fer52zTuAIgAh3pIHzC2Q5nvqGZJgiHflrHany57Vqp1tR2qxXUS5gqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJ4QaVwNkXyLTXHircA9Ty6us6KoVxL58aEfpqdnZs62eARtPFVxRs3YlArIJq47dN0TXzfDxPQ9lghwdMSkvtBD%2F4a%2Fr%2FUOooffQpztrST7VnpFNQgWjev5DTpTHPUrrVbFMTt9OpXCT0fmIKTmvHggHEuWZYV%2FRtGTAGMga%2B1UAjg6kykw0MpVc%2BPHQ5lFi6v6pjXegM5MVfWpLzmLdmFPuy0q%2BBOWB%2BhtyCynMSfn9dq1ulX%2Fu%2BebXjat1TiGs1kgA7G3Y5Qx9mVgZP70k%2BxAw9KLaSyrHO0duG8BiQ9E%2BoeN1CXkWcBnxZB3kNKiCrnvUio30JehXgStGQtWvKUy052a7KkFxOZCst2MFaQf6Y4iOXAlxrBZHb8aC5fHjbLpMbqU2hW%2Bvog%2Bn6eRcPwAHECudjO1jv0fzJZwh9pk2%2F6q5So517X0yKnnvZl2c7hOgStiGL%2BqaMdk%2Bqefv78bTVCjmUfzNuonSaicpBRtblI%2BtDALgV6qBz9ICTF7MMQSYA05FAz5d%2FPo2CDsF4FWAMhFgxVa%2ByboHYvn9YJeBS3Z2HzA%2BvxiWCJIBdEQn4XTrmWsqqIDrl36tclcsF7jyYn8vhF4lfQHj4Gzo1uqqSIL15vuQM%2BaYG9YADyEd1YC5T0l%2B1IspLMI7f9rwGOqUBOoH8yxa8Imbr8l2gGAFtmJaJ0U7rQ2n99CQg%2FvZ9mXBqO9Vm9wih0v74u3kSPYZwtvw8g145YE%2F0DmC2ot50Xml4claAhj3I%2FrKOQK2Gtoi0bC5qforVwbtDoDhb0HHveecjHkjsMP9Si5zT9qJGGDLLmQLYXaUOkkfms0h4htuWrtEOigUisnz92r7OWopFt7soGveLV0Fcwyw%2FFAQbOy6uN6OA&X-Amz-Signature=961b171502262977d1decae4f0771b8afa00119e8d63a093d54c3ea006d97db0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEDHVJF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUo9VGGv9hk%2FHXB5q332YyRzFa0jpInBDd%2B%2Fer52zTuAIgAh3pIHzC2Q5nvqGZJgiHflrHany57Vqp1tR2qxXUS5gqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJ4QaVwNkXyLTXHircA9Ty6us6KoVxL58aEfpqdnZs62eARtPFVxRs3YlArIJq47dN0TXzfDxPQ9lghwdMSkvtBD%2F4a%2Fr%2FUOooffQpztrST7VnpFNQgWjev5DTpTHPUrrVbFMTt9OpXCT0fmIKTmvHggHEuWZYV%2FRtGTAGMga%2B1UAjg6kykw0MpVc%2BPHQ5lFi6v6pjXegM5MVfWpLzmLdmFPuy0q%2BBOWB%2BhtyCynMSfn9dq1ulX%2Fu%2BebXjat1TiGs1kgA7G3Y5Qx9mVgZP70k%2BxAw9KLaSyrHO0duG8BiQ9E%2BoeN1CXkWcBnxZB3kNKiCrnvUio30JehXgStGQtWvKUy052a7KkFxOZCst2MFaQf6Y4iOXAlxrBZHb8aC5fHjbLpMbqU2hW%2Bvog%2Bn6eRcPwAHECudjO1jv0fzJZwh9pk2%2F6q5So517X0yKnnvZl2c7hOgStiGL%2BqaMdk%2Bqefv78bTVCjmUfzNuonSaicpBRtblI%2BtDALgV6qBz9ICTF7MMQSYA05FAz5d%2FPo2CDsF4FWAMhFgxVa%2ByboHYvn9YJeBS3Z2HzA%2BvxiWCJIBdEQn4XTrmWsqqIDrl36tclcsF7jyYn8vhF4lfQHj4Gzo1uqqSIL15vuQM%2BaYG9YADyEd1YC5T0l%2B1IspLMI7f9rwGOqUBOoH8yxa8Imbr8l2gGAFtmJaJ0U7rQ2n99CQg%2FvZ9mXBqO9Vm9wih0v74u3kSPYZwtvw8g145YE%2F0DmC2ot50Xml4claAhj3I%2FrKOQK2Gtoi0bC5qforVwbtDoDhb0HHveecjHkjsMP9Si5zT9qJGGDLLmQLYXaUOkkfms0h4htuWrtEOigUisnz92r7OWopFt7soGveLV0Fcwyw%2FFAQbOy6uN6OA&X-Amz-Signature=a0fd23c7f2fe90d0cde02122ae04a074a1c3d2b2559b6d0a0e72051bc603e47d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEDHVJF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUo9VGGv9hk%2FHXB5q332YyRzFa0jpInBDd%2B%2Fer52zTuAIgAh3pIHzC2Q5nvqGZJgiHflrHany57Vqp1tR2qxXUS5gqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJ4QaVwNkXyLTXHircA9Ty6us6KoVxL58aEfpqdnZs62eARtPFVxRs3YlArIJq47dN0TXzfDxPQ9lghwdMSkvtBD%2F4a%2Fr%2FUOooffQpztrST7VnpFNQgWjev5DTpTHPUrrVbFMTt9OpXCT0fmIKTmvHggHEuWZYV%2FRtGTAGMga%2B1UAjg6kykw0MpVc%2BPHQ5lFi6v6pjXegM5MVfWpLzmLdmFPuy0q%2BBOWB%2BhtyCynMSfn9dq1ulX%2Fu%2BebXjat1TiGs1kgA7G3Y5Qx9mVgZP70k%2BxAw9KLaSyrHO0duG8BiQ9E%2BoeN1CXkWcBnxZB3kNKiCrnvUio30JehXgStGQtWvKUy052a7KkFxOZCst2MFaQf6Y4iOXAlxrBZHb8aC5fHjbLpMbqU2hW%2Bvog%2Bn6eRcPwAHECudjO1jv0fzJZwh9pk2%2F6q5So517X0yKnnvZl2c7hOgStiGL%2BqaMdk%2Bqefv78bTVCjmUfzNuonSaicpBRtblI%2BtDALgV6qBz9ICTF7MMQSYA05FAz5d%2FPo2CDsF4FWAMhFgxVa%2ByboHYvn9YJeBS3Z2HzA%2BvxiWCJIBdEQn4XTrmWsqqIDrl36tclcsF7jyYn8vhF4lfQHj4Gzo1uqqSIL15vuQM%2BaYG9YADyEd1YC5T0l%2B1IspLMI7f9rwGOqUBOoH8yxa8Imbr8l2gGAFtmJaJ0U7rQ2n99CQg%2FvZ9mXBqO9Vm9wih0v74u3kSPYZwtvw8g145YE%2F0DmC2ot50Xml4claAhj3I%2FrKOQK2Gtoi0bC5qforVwbtDoDhb0HHveecjHkjsMP9Si5zT9qJGGDLLmQLYXaUOkkfms0h4htuWrtEOigUisnz92r7OWopFt7soGveLV0Fcwyw%2FFAQbOy6uN6OA&X-Amz-Signature=8bce95a581f27fd235731f80a31657f966f9be064d8b097f5440c37913535ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEDHVJF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUo9VGGv9hk%2FHXB5q332YyRzFa0jpInBDd%2B%2Fer52zTuAIgAh3pIHzC2Q5nvqGZJgiHflrHany57Vqp1tR2qxXUS5gqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJ4QaVwNkXyLTXHircA9Ty6us6KoVxL58aEfpqdnZs62eARtPFVxRs3YlArIJq47dN0TXzfDxPQ9lghwdMSkvtBD%2F4a%2Fr%2FUOooffQpztrST7VnpFNQgWjev5DTpTHPUrrVbFMTt9OpXCT0fmIKTmvHggHEuWZYV%2FRtGTAGMga%2B1UAjg6kykw0MpVc%2BPHQ5lFi6v6pjXegM5MVfWpLzmLdmFPuy0q%2BBOWB%2BhtyCynMSfn9dq1ulX%2Fu%2BebXjat1TiGs1kgA7G3Y5Qx9mVgZP70k%2BxAw9KLaSyrHO0duG8BiQ9E%2BoeN1CXkWcBnxZB3kNKiCrnvUio30JehXgStGQtWvKUy052a7KkFxOZCst2MFaQf6Y4iOXAlxrBZHb8aC5fHjbLpMbqU2hW%2Bvog%2Bn6eRcPwAHECudjO1jv0fzJZwh9pk2%2F6q5So517X0yKnnvZl2c7hOgStiGL%2BqaMdk%2Bqefv78bTVCjmUfzNuonSaicpBRtblI%2BtDALgV6qBz9ICTF7MMQSYA05FAz5d%2FPo2CDsF4FWAMhFgxVa%2ByboHYvn9YJeBS3Z2HzA%2BvxiWCJIBdEQn4XTrmWsqqIDrl36tclcsF7jyYn8vhF4lfQHj4Gzo1uqqSIL15vuQM%2BaYG9YADyEd1YC5T0l%2B1IspLMI7f9rwGOqUBOoH8yxa8Imbr8l2gGAFtmJaJ0U7rQ2n99CQg%2FvZ9mXBqO9Vm9wih0v74u3kSPYZwtvw8g145YE%2F0DmC2ot50Xml4claAhj3I%2FrKOQK2Gtoi0bC5qforVwbtDoDhb0HHveecjHkjsMP9Si5zT9qJGGDLLmQLYXaUOkkfms0h4htuWrtEOigUisnz92r7OWopFt7soGveLV0Fcwyw%2FFAQbOy6uN6OA&X-Amz-Signature=a9bfcd161a9dd5b692a30e386fa280d166182ec76fdfe9ead643e3a98759d355&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEDHVJF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUo9VGGv9hk%2FHXB5q332YyRzFa0jpInBDd%2B%2Fer52zTuAIgAh3pIHzC2Q5nvqGZJgiHflrHany57Vqp1tR2qxXUS5gqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJ4QaVwNkXyLTXHircA9Ty6us6KoVxL58aEfpqdnZs62eARtPFVxRs3YlArIJq47dN0TXzfDxPQ9lghwdMSkvtBD%2F4a%2Fr%2FUOooffQpztrST7VnpFNQgWjev5DTpTHPUrrVbFMTt9OpXCT0fmIKTmvHggHEuWZYV%2FRtGTAGMga%2B1UAjg6kykw0MpVc%2BPHQ5lFi6v6pjXegM5MVfWpLzmLdmFPuy0q%2BBOWB%2BhtyCynMSfn9dq1ulX%2Fu%2BebXjat1TiGs1kgA7G3Y5Qx9mVgZP70k%2BxAw9KLaSyrHO0duG8BiQ9E%2BoeN1CXkWcBnxZB3kNKiCrnvUio30JehXgStGQtWvKUy052a7KkFxOZCst2MFaQf6Y4iOXAlxrBZHb8aC5fHjbLpMbqU2hW%2Bvog%2Bn6eRcPwAHECudjO1jv0fzJZwh9pk2%2F6q5So517X0yKnnvZl2c7hOgStiGL%2BqaMdk%2Bqefv78bTVCjmUfzNuonSaicpBRtblI%2BtDALgV6qBz9ICTF7MMQSYA05FAz5d%2FPo2CDsF4FWAMhFgxVa%2ByboHYvn9YJeBS3Z2HzA%2BvxiWCJIBdEQn4XTrmWsqqIDrl36tclcsF7jyYn8vhF4lfQHj4Gzo1uqqSIL15vuQM%2BaYG9YADyEd1YC5T0l%2B1IspLMI7f9rwGOqUBOoH8yxa8Imbr8l2gGAFtmJaJ0U7rQ2n99CQg%2FvZ9mXBqO9Vm9wih0v74u3kSPYZwtvw8g145YE%2F0DmC2ot50Xml4claAhj3I%2FrKOQK2Gtoi0bC5qforVwbtDoDhb0HHveecjHkjsMP9Si5zT9qJGGDLLmQLYXaUOkkfms0h4htuWrtEOigUisnz92r7OWopFt7soGveLV0Fcwyw%2FFAQbOy6uN6OA&X-Amz-Signature=8aef3c95abf91c464c78246733385f9798663a6d9f48dc335e25546ceadb8b72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEDHVJF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUo9VGGv9hk%2FHXB5q332YyRzFa0jpInBDd%2B%2Fer52zTuAIgAh3pIHzC2Q5nvqGZJgiHflrHany57Vqp1tR2qxXUS5gqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJ4QaVwNkXyLTXHircA9Ty6us6KoVxL58aEfpqdnZs62eARtPFVxRs3YlArIJq47dN0TXzfDxPQ9lghwdMSkvtBD%2F4a%2Fr%2FUOooffQpztrST7VnpFNQgWjev5DTpTHPUrrVbFMTt9OpXCT0fmIKTmvHggHEuWZYV%2FRtGTAGMga%2B1UAjg6kykw0MpVc%2BPHQ5lFi6v6pjXegM5MVfWpLzmLdmFPuy0q%2BBOWB%2BhtyCynMSfn9dq1ulX%2Fu%2BebXjat1TiGs1kgA7G3Y5Qx9mVgZP70k%2BxAw9KLaSyrHO0duG8BiQ9E%2BoeN1CXkWcBnxZB3kNKiCrnvUio30JehXgStGQtWvKUy052a7KkFxOZCst2MFaQf6Y4iOXAlxrBZHb8aC5fHjbLpMbqU2hW%2Bvog%2Bn6eRcPwAHECudjO1jv0fzJZwh9pk2%2F6q5So517X0yKnnvZl2c7hOgStiGL%2BqaMdk%2Bqefv78bTVCjmUfzNuonSaicpBRtblI%2BtDALgV6qBz9ICTF7MMQSYA05FAz5d%2FPo2CDsF4FWAMhFgxVa%2ByboHYvn9YJeBS3Z2HzA%2BvxiWCJIBdEQn4XTrmWsqqIDrl36tclcsF7jyYn8vhF4lfQHj4Gzo1uqqSIL15vuQM%2BaYG9YADyEd1YC5T0l%2B1IspLMI7f9rwGOqUBOoH8yxa8Imbr8l2gGAFtmJaJ0U7rQ2n99CQg%2FvZ9mXBqO9Vm9wih0v74u3kSPYZwtvw8g145YE%2F0DmC2ot50Xml4claAhj3I%2FrKOQK2Gtoi0bC5qforVwbtDoDhb0HHveecjHkjsMP9Si5zT9qJGGDLLmQLYXaUOkkfms0h4htuWrtEOigUisnz92r7OWopFt7soGveLV0Fcwyw%2FFAQbOy6uN6OA&X-Amz-Signature=b28543b17beedf52ed4e0c507df0ae6e5f70280915ecc4383ee19ccffe0cbfaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
