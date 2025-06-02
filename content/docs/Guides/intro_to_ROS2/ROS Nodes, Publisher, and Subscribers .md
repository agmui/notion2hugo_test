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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L74PPVJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAeb1%2BQ72VDY3tehUlEjrzSBQF8%2BFSWbhlMU%2FsKd63TdAiEA0FYay%2B9%2BPnHSF4XZQ4hfpIZrr4ek3CQEs1avOEtHVGYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy9nKQOcfh2lygVFyrcA60op8cgSn4qLgeL3N6z4NNcVt4efsM3XamzVKn3NGDmKdexaD54w%2FfWR05OG6t44Q7ogzBEfeCIKB6cPF%2F7HcWufGaafEXO5AJ1N2iy1DhnjJ4xoTwJzZ2Tvsj2NDX0mI47m%2BEhWmybTFBqBt8XLMBpVRhWSg%2FZBzUbwnT%2FbW39XPwdlwv1MIH2Li0h%2BmM0We%2F%2FD0dM3rLGQkykYmv0ulYxX4M6DmOqh77LjphowPWfS1niKvN%2B1qsHAlDNxlHgoWf8uE2eyQW%2F%2BP9fNw3JnLc5c8a5Rno0YEuKo93sRQNvE1yQ5CpWPK19UzSNoj75om5rdRbu0csziRrxwNEiSWawLKzKM7BNwHRhTEisSMTVgDAqXgRHcEfLipoKwuT1lcGczsPbNQ157D6%2B7u7O7i0hiLjrzbxbQxenRnCQ4Lo0kxzKdvtDyuTUCscisyTYBqLcX3%2FbK5BB2T%2FNB6Pzh%2BMv8e%2BtG7uWV1JbYnBJjpQhu5GoReUfZ5xVFPPe79h23df5sAL46veO0hkMYzAfLdAmAMMtXRYfh%2FXGcKic8Oj7Tb3XBWvzwhEs49Eb6AYyXCvkTVGgIqqKEEhxTdLTQD%2BFrQA4iM0GcGwxNvn19DPeWfaKZuaqUx5Ju0CKMLnC9cEGOqUBgOFnne7%2BPVSHkNIBwMpZgRL3gP8eB8s4hl91Vj3GaquNEeCn%2F8gvhShvmfA%2B6fTqLGCJOq32%2FKJobZ4o81vReSzPpRAztE6jsyB23egjrocGMIOMKGDOME4Qv55rSFfjaOUdHeg7D9aXXgokRqeMjReWIHPbmvCynnOiXs5cOIH2fW74UlKLmtUId7jUFoOkRmwG8NCuRnPywV0E%2BoKXQ5R11tKY&X-Amz-Signature=531336d5bc7e6abd5d7a30571fa469d3d5dcf398427be52c75869ec3f51c01f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L74PPVJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAeb1%2BQ72VDY3tehUlEjrzSBQF8%2BFSWbhlMU%2FsKd63TdAiEA0FYay%2B9%2BPnHSF4XZQ4hfpIZrr4ek3CQEs1avOEtHVGYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy9nKQOcfh2lygVFyrcA60op8cgSn4qLgeL3N6z4NNcVt4efsM3XamzVKn3NGDmKdexaD54w%2FfWR05OG6t44Q7ogzBEfeCIKB6cPF%2F7HcWufGaafEXO5AJ1N2iy1DhnjJ4xoTwJzZ2Tvsj2NDX0mI47m%2BEhWmybTFBqBt8XLMBpVRhWSg%2FZBzUbwnT%2FbW39XPwdlwv1MIH2Li0h%2BmM0We%2F%2FD0dM3rLGQkykYmv0ulYxX4M6DmOqh77LjphowPWfS1niKvN%2B1qsHAlDNxlHgoWf8uE2eyQW%2F%2BP9fNw3JnLc5c8a5Rno0YEuKo93sRQNvE1yQ5CpWPK19UzSNoj75om5rdRbu0csziRrxwNEiSWawLKzKM7BNwHRhTEisSMTVgDAqXgRHcEfLipoKwuT1lcGczsPbNQ157D6%2B7u7O7i0hiLjrzbxbQxenRnCQ4Lo0kxzKdvtDyuTUCscisyTYBqLcX3%2FbK5BB2T%2FNB6Pzh%2BMv8e%2BtG7uWV1JbYnBJjpQhu5GoReUfZ5xVFPPe79h23df5sAL46veO0hkMYzAfLdAmAMMtXRYfh%2FXGcKic8Oj7Tb3XBWvzwhEs49Eb6AYyXCvkTVGgIqqKEEhxTdLTQD%2BFrQA4iM0GcGwxNvn19DPeWfaKZuaqUx5Ju0CKMLnC9cEGOqUBgOFnne7%2BPVSHkNIBwMpZgRL3gP8eB8s4hl91Vj3GaquNEeCn%2F8gvhShvmfA%2B6fTqLGCJOq32%2FKJobZ4o81vReSzPpRAztE6jsyB23egjrocGMIOMKGDOME4Qv55rSFfjaOUdHeg7D9aXXgokRqeMjReWIHPbmvCynnOiXs5cOIH2fW74UlKLmtUId7jUFoOkRmwG8NCuRnPywV0E%2BoKXQ5R11tKY&X-Amz-Signature=5723437039aede717853fe70a31671b0fa93c35244cbf0b8438545f2d7b5b178&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L74PPVJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAeb1%2BQ72VDY3tehUlEjrzSBQF8%2BFSWbhlMU%2FsKd63TdAiEA0FYay%2B9%2BPnHSF4XZQ4hfpIZrr4ek3CQEs1avOEtHVGYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy9nKQOcfh2lygVFyrcA60op8cgSn4qLgeL3N6z4NNcVt4efsM3XamzVKn3NGDmKdexaD54w%2FfWR05OG6t44Q7ogzBEfeCIKB6cPF%2F7HcWufGaafEXO5AJ1N2iy1DhnjJ4xoTwJzZ2Tvsj2NDX0mI47m%2BEhWmybTFBqBt8XLMBpVRhWSg%2FZBzUbwnT%2FbW39XPwdlwv1MIH2Li0h%2BmM0We%2F%2FD0dM3rLGQkykYmv0ulYxX4M6DmOqh77LjphowPWfS1niKvN%2B1qsHAlDNxlHgoWf8uE2eyQW%2F%2BP9fNw3JnLc5c8a5Rno0YEuKo93sRQNvE1yQ5CpWPK19UzSNoj75om5rdRbu0csziRrxwNEiSWawLKzKM7BNwHRhTEisSMTVgDAqXgRHcEfLipoKwuT1lcGczsPbNQ157D6%2B7u7O7i0hiLjrzbxbQxenRnCQ4Lo0kxzKdvtDyuTUCscisyTYBqLcX3%2FbK5BB2T%2FNB6Pzh%2BMv8e%2BtG7uWV1JbYnBJjpQhu5GoReUfZ5xVFPPe79h23df5sAL46veO0hkMYzAfLdAmAMMtXRYfh%2FXGcKic8Oj7Tb3XBWvzwhEs49Eb6AYyXCvkTVGgIqqKEEhxTdLTQD%2BFrQA4iM0GcGwxNvn19DPeWfaKZuaqUx5Ju0CKMLnC9cEGOqUBgOFnne7%2BPVSHkNIBwMpZgRL3gP8eB8s4hl91Vj3GaquNEeCn%2F8gvhShvmfA%2B6fTqLGCJOq32%2FKJobZ4o81vReSzPpRAztE6jsyB23egjrocGMIOMKGDOME4Qv55rSFfjaOUdHeg7D9aXXgokRqeMjReWIHPbmvCynnOiXs5cOIH2fW74UlKLmtUId7jUFoOkRmwG8NCuRnPywV0E%2BoKXQ5R11tKY&X-Amz-Signature=d699802710e89910dce44414db47c5ea8c92908f038ec1dce74474107c65361f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L74PPVJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAeb1%2BQ72VDY3tehUlEjrzSBQF8%2BFSWbhlMU%2FsKd63TdAiEA0FYay%2B9%2BPnHSF4XZQ4hfpIZrr4ek3CQEs1avOEtHVGYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy9nKQOcfh2lygVFyrcA60op8cgSn4qLgeL3N6z4NNcVt4efsM3XamzVKn3NGDmKdexaD54w%2FfWR05OG6t44Q7ogzBEfeCIKB6cPF%2F7HcWufGaafEXO5AJ1N2iy1DhnjJ4xoTwJzZ2Tvsj2NDX0mI47m%2BEhWmybTFBqBt8XLMBpVRhWSg%2FZBzUbwnT%2FbW39XPwdlwv1MIH2Li0h%2BmM0We%2F%2FD0dM3rLGQkykYmv0ulYxX4M6DmOqh77LjphowPWfS1niKvN%2B1qsHAlDNxlHgoWf8uE2eyQW%2F%2BP9fNw3JnLc5c8a5Rno0YEuKo93sRQNvE1yQ5CpWPK19UzSNoj75om5rdRbu0csziRrxwNEiSWawLKzKM7BNwHRhTEisSMTVgDAqXgRHcEfLipoKwuT1lcGczsPbNQ157D6%2B7u7O7i0hiLjrzbxbQxenRnCQ4Lo0kxzKdvtDyuTUCscisyTYBqLcX3%2FbK5BB2T%2FNB6Pzh%2BMv8e%2BtG7uWV1JbYnBJjpQhu5GoReUfZ5xVFPPe79h23df5sAL46veO0hkMYzAfLdAmAMMtXRYfh%2FXGcKic8Oj7Tb3XBWvzwhEs49Eb6AYyXCvkTVGgIqqKEEhxTdLTQD%2BFrQA4iM0GcGwxNvn19DPeWfaKZuaqUx5Ju0CKMLnC9cEGOqUBgOFnne7%2BPVSHkNIBwMpZgRL3gP8eB8s4hl91Vj3GaquNEeCn%2F8gvhShvmfA%2B6fTqLGCJOq32%2FKJobZ4o81vReSzPpRAztE6jsyB23egjrocGMIOMKGDOME4Qv55rSFfjaOUdHeg7D9aXXgokRqeMjReWIHPbmvCynnOiXs5cOIH2fW74UlKLmtUId7jUFoOkRmwG8NCuRnPywV0E%2BoKXQ5R11tKY&X-Amz-Signature=9ca3824a39af0e1c800f5a4f0eea5d29f583b8bdc59a532d4a96530e2d53492a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L74PPVJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAeb1%2BQ72VDY3tehUlEjrzSBQF8%2BFSWbhlMU%2FsKd63TdAiEA0FYay%2B9%2BPnHSF4XZQ4hfpIZrr4ek3CQEs1avOEtHVGYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy9nKQOcfh2lygVFyrcA60op8cgSn4qLgeL3N6z4NNcVt4efsM3XamzVKn3NGDmKdexaD54w%2FfWR05OG6t44Q7ogzBEfeCIKB6cPF%2F7HcWufGaafEXO5AJ1N2iy1DhnjJ4xoTwJzZ2Tvsj2NDX0mI47m%2BEhWmybTFBqBt8XLMBpVRhWSg%2FZBzUbwnT%2FbW39XPwdlwv1MIH2Li0h%2BmM0We%2F%2FD0dM3rLGQkykYmv0ulYxX4M6DmOqh77LjphowPWfS1niKvN%2B1qsHAlDNxlHgoWf8uE2eyQW%2F%2BP9fNw3JnLc5c8a5Rno0YEuKo93sRQNvE1yQ5CpWPK19UzSNoj75om5rdRbu0csziRrxwNEiSWawLKzKM7BNwHRhTEisSMTVgDAqXgRHcEfLipoKwuT1lcGczsPbNQ157D6%2B7u7O7i0hiLjrzbxbQxenRnCQ4Lo0kxzKdvtDyuTUCscisyTYBqLcX3%2FbK5BB2T%2FNB6Pzh%2BMv8e%2BtG7uWV1JbYnBJjpQhu5GoReUfZ5xVFPPe79h23df5sAL46veO0hkMYzAfLdAmAMMtXRYfh%2FXGcKic8Oj7Tb3XBWvzwhEs49Eb6AYyXCvkTVGgIqqKEEhxTdLTQD%2BFrQA4iM0GcGwxNvn19DPeWfaKZuaqUx5Ju0CKMLnC9cEGOqUBgOFnne7%2BPVSHkNIBwMpZgRL3gP8eB8s4hl91Vj3GaquNEeCn%2F8gvhShvmfA%2B6fTqLGCJOq32%2FKJobZ4o81vReSzPpRAztE6jsyB23egjrocGMIOMKGDOME4Qv55rSFfjaOUdHeg7D9aXXgokRqeMjReWIHPbmvCynnOiXs5cOIH2fW74UlKLmtUId7jUFoOkRmwG8NCuRnPywV0E%2BoKXQ5R11tKY&X-Amz-Signature=91873ee992500f982ba524dbb89232206b240dc56a308224262f276a2eb2f96e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L74PPVJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAeb1%2BQ72VDY3tehUlEjrzSBQF8%2BFSWbhlMU%2FsKd63TdAiEA0FYay%2B9%2BPnHSF4XZQ4hfpIZrr4ek3CQEs1avOEtHVGYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy9nKQOcfh2lygVFyrcA60op8cgSn4qLgeL3N6z4NNcVt4efsM3XamzVKn3NGDmKdexaD54w%2FfWR05OG6t44Q7ogzBEfeCIKB6cPF%2F7HcWufGaafEXO5AJ1N2iy1DhnjJ4xoTwJzZ2Tvsj2NDX0mI47m%2BEhWmybTFBqBt8XLMBpVRhWSg%2FZBzUbwnT%2FbW39XPwdlwv1MIH2Li0h%2BmM0We%2F%2FD0dM3rLGQkykYmv0ulYxX4M6DmOqh77LjphowPWfS1niKvN%2B1qsHAlDNxlHgoWf8uE2eyQW%2F%2BP9fNw3JnLc5c8a5Rno0YEuKo93sRQNvE1yQ5CpWPK19UzSNoj75om5rdRbu0csziRrxwNEiSWawLKzKM7BNwHRhTEisSMTVgDAqXgRHcEfLipoKwuT1lcGczsPbNQ157D6%2B7u7O7i0hiLjrzbxbQxenRnCQ4Lo0kxzKdvtDyuTUCscisyTYBqLcX3%2FbK5BB2T%2FNB6Pzh%2BMv8e%2BtG7uWV1JbYnBJjpQhu5GoReUfZ5xVFPPe79h23df5sAL46veO0hkMYzAfLdAmAMMtXRYfh%2FXGcKic8Oj7Tb3XBWvzwhEs49Eb6AYyXCvkTVGgIqqKEEhxTdLTQD%2BFrQA4iM0GcGwxNvn19DPeWfaKZuaqUx5Ju0CKMLnC9cEGOqUBgOFnne7%2BPVSHkNIBwMpZgRL3gP8eB8s4hl91Vj3GaquNEeCn%2F8gvhShvmfA%2B6fTqLGCJOq32%2FKJobZ4o81vReSzPpRAztE6jsyB23egjrocGMIOMKGDOME4Qv55rSFfjaOUdHeg7D9aXXgokRqeMjReWIHPbmvCynnOiXs5cOIH2fW74UlKLmtUId7jUFoOkRmwG8NCuRnPywV0E%2BoKXQ5R11tKY&X-Amz-Signature=d79255e9b29904ab8bec753480fb910965176066389a872164e54a1474cbfdf0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L74PPVJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAeb1%2BQ72VDY3tehUlEjrzSBQF8%2BFSWbhlMU%2FsKd63TdAiEA0FYay%2B9%2BPnHSF4XZQ4hfpIZrr4ek3CQEs1avOEtHVGYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy9nKQOcfh2lygVFyrcA60op8cgSn4qLgeL3N6z4NNcVt4efsM3XamzVKn3NGDmKdexaD54w%2FfWR05OG6t44Q7ogzBEfeCIKB6cPF%2F7HcWufGaafEXO5AJ1N2iy1DhnjJ4xoTwJzZ2Tvsj2NDX0mI47m%2BEhWmybTFBqBt8XLMBpVRhWSg%2FZBzUbwnT%2FbW39XPwdlwv1MIH2Li0h%2BmM0We%2F%2FD0dM3rLGQkykYmv0ulYxX4M6DmOqh77LjphowPWfS1niKvN%2B1qsHAlDNxlHgoWf8uE2eyQW%2F%2BP9fNw3JnLc5c8a5Rno0YEuKo93sRQNvE1yQ5CpWPK19UzSNoj75om5rdRbu0csziRrxwNEiSWawLKzKM7BNwHRhTEisSMTVgDAqXgRHcEfLipoKwuT1lcGczsPbNQ157D6%2B7u7O7i0hiLjrzbxbQxenRnCQ4Lo0kxzKdvtDyuTUCscisyTYBqLcX3%2FbK5BB2T%2FNB6Pzh%2BMv8e%2BtG7uWV1JbYnBJjpQhu5GoReUfZ5xVFPPe79h23df5sAL46veO0hkMYzAfLdAmAMMtXRYfh%2FXGcKic8Oj7Tb3XBWvzwhEs49Eb6AYyXCvkTVGgIqqKEEhxTdLTQD%2BFrQA4iM0GcGwxNvn19DPeWfaKZuaqUx5Ju0CKMLnC9cEGOqUBgOFnne7%2BPVSHkNIBwMpZgRL3gP8eB8s4hl91Vj3GaquNEeCn%2F8gvhShvmfA%2B6fTqLGCJOq32%2FKJobZ4o81vReSzPpRAztE6jsyB23egjrocGMIOMKGDOME4Qv55rSFfjaOUdHeg7D9aXXgokRqeMjReWIHPbmvCynnOiXs5cOIH2fW74UlKLmtUId7jUFoOkRmwG8NCuRnPywV0E%2BoKXQ5R11tKY&X-Amz-Signature=a0e7cb67fd8d861f9b564d4e206b7e2d22c4abb3df40fb31be70a0e6a578619a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L74PPVJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAeb1%2BQ72VDY3tehUlEjrzSBQF8%2BFSWbhlMU%2FsKd63TdAiEA0FYay%2B9%2BPnHSF4XZQ4hfpIZrr4ek3CQEs1avOEtHVGYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy9nKQOcfh2lygVFyrcA60op8cgSn4qLgeL3N6z4NNcVt4efsM3XamzVKn3NGDmKdexaD54w%2FfWR05OG6t44Q7ogzBEfeCIKB6cPF%2F7HcWufGaafEXO5AJ1N2iy1DhnjJ4xoTwJzZ2Tvsj2NDX0mI47m%2BEhWmybTFBqBt8XLMBpVRhWSg%2FZBzUbwnT%2FbW39XPwdlwv1MIH2Li0h%2BmM0We%2F%2FD0dM3rLGQkykYmv0ulYxX4M6DmOqh77LjphowPWfS1niKvN%2B1qsHAlDNxlHgoWf8uE2eyQW%2F%2BP9fNw3JnLc5c8a5Rno0YEuKo93sRQNvE1yQ5CpWPK19UzSNoj75om5rdRbu0csziRrxwNEiSWawLKzKM7BNwHRhTEisSMTVgDAqXgRHcEfLipoKwuT1lcGczsPbNQ157D6%2B7u7O7i0hiLjrzbxbQxenRnCQ4Lo0kxzKdvtDyuTUCscisyTYBqLcX3%2FbK5BB2T%2FNB6Pzh%2BMv8e%2BtG7uWV1JbYnBJjpQhu5GoReUfZ5xVFPPe79h23df5sAL46veO0hkMYzAfLdAmAMMtXRYfh%2FXGcKic8Oj7Tb3XBWvzwhEs49Eb6AYyXCvkTVGgIqqKEEhxTdLTQD%2BFrQA4iM0GcGwxNvn19DPeWfaKZuaqUx5Ju0CKMLnC9cEGOqUBgOFnne7%2BPVSHkNIBwMpZgRL3gP8eB8s4hl91Vj3GaquNEeCn%2F8gvhShvmfA%2B6fTqLGCJOq32%2FKJobZ4o81vReSzPpRAztE6jsyB23egjrocGMIOMKGDOME4Qv55rSFfjaOUdHeg7D9aXXgokRqeMjReWIHPbmvCynnOiXs5cOIH2fW74UlKLmtUId7jUFoOkRmwG8NCuRnPywV0E%2BoKXQ5R11tKY&X-Amz-Signature=efadcf4499856fe63527d4aea671187ca0f7a146a5031252d9d3dfaa386f1738&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
