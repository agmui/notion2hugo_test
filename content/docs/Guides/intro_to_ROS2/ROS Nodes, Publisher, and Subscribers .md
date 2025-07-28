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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVYAH5O%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDXfFSXwEZoEWE2CUnia4LwGtpKwULdD0Izi9M%2BbNATwIhANL0vfy99YfFtcJxxXYBTrjrvZ6rLshCkI9DN8ll5RYXKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCsgLNb%2F%2FOESibnLkq3AOT0RKW2ERBMzpjP8Ilj0GbsjwSrUn7aP2AfLVsIgTqNMFQNAuWGLcbrU5trAaQIbMANC70BAmNdfG2UAe0jREVgQ%2FupAOmQLWxhXew%2FgNSO5%2FsE5zZInpT%2Fo6RuKtiKNzGmslBLOF%2Bd4vkXsEJ%2Bds5MIiNo5AKclLGb%2Fyec4W1vVNy2voHfaVnb10GqWnRl4iZc8M5GzWor%2FKNPa2z0N1YSzNHLNWDXcosPKq3NEiNuWqQzp%2Fpw%2Fv29sGO3%2BID3QdeVErjnJzyQnOXpdUcVt7xEqMet%2FGyWdsa0p4DUj8RSY4g2iSFDp0R3Gpfui3h7ZKdQl3fX5wOHiyNITwN1dKfF5KUApbqvVdoReMKefifKJ3IXIpp5l5H70ckEbrqDGRIUeK6kNq655phyha6nCqXoQKOQ4%2Bps8bCeURd8oGqon60RSL7JfXj%2B%2B8oDN1MQNZtjBe3ZiMFGsqeW4J3wfS4HyJ7BJoKyWMjBDOiGuPliKAb6259uDKDimCtEjbZN4VgcA0otoAQclAgUb2%2F6Kzgj09S3GJQtA2W2K5EUOVhiDOat21XrQENiaGuaqz0B4tHdHPNZs7BReJDfxHfWpE1cGR4L14Wv%2Bwo4WU333I5Rj7pRHp4Q9FzZQQr3jCgi5%2FEBjqkAeUJpdQ%2BSEVnGn1vySy%2FykVLo0opgi8%2BTawj8LmQhXqWUPPX%2BaD9Fon7bvcTc%2F8988Axd268chGQ1cGjEM1t7NgxKwvzB%2FweyryFSd23bb1IipfSMDcy8siS5NmCfBi%2Bh2DO7RRBde5bCiIGStJU%2FTXQoUo%2FbTcpXkRLD4o12U%2BpwzYnZsMSZ6%2BU0hQSvr%2BkIOP5iRRCsPfdKXtGRD1KBuoAOnWv&X-Amz-Signature=5b2cb69714b41ed60de098116682cb0e09b90b0442ed89f4e0d7c54f3780e2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVYAH5O%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDXfFSXwEZoEWE2CUnia4LwGtpKwULdD0Izi9M%2BbNATwIhANL0vfy99YfFtcJxxXYBTrjrvZ6rLshCkI9DN8ll5RYXKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCsgLNb%2F%2FOESibnLkq3AOT0RKW2ERBMzpjP8Ilj0GbsjwSrUn7aP2AfLVsIgTqNMFQNAuWGLcbrU5trAaQIbMANC70BAmNdfG2UAe0jREVgQ%2FupAOmQLWxhXew%2FgNSO5%2FsE5zZInpT%2Fo6RuKtiKNzGmslBLOF%2Bd4vkXsEJ%2Bds5MIiNo5AKclLGb%2Fyec4W1vVNy2voHfaVnb10GqWnRl4iZc8M5GzWor%2FKNPa2z0N1YSzNHLNWDXcosPKq3NEiNuWqQzp%2Fpw%2Fv29sGO3%2BID3QdeVErjnJzyQnOXpdUcVt7xEqMet%2FGyWdsa0p4DUj8RSY4g2iSFDp0R3Gpfui3h7ZKdQl3fX5wOHiyNITwN1dKfF5KUApbqvVdoReMKefifKJ3IXIpp5l5H70ckEbrqDGRIUeK6kNq655phyha6nCqXoQKOQ4%2Bps8bCeURd8oGqon60RSL7JfXj%2B%2B8oDN1MQNZtjBe3ZiMFGsqeW4J3wfS4HyJ7BJoKyWMjBDOiGuPliKAb6259uDKDimCtEjbZN4VgcA0otoAQclAgUb2%2F6Kzgj09S3GJQtA2W2K5EUOVhiDOat21XrQENiaGuaqz0B4tHdHPNZs7BReJDfxHfWpE1cGR4L14Wv%2Bwo4WU333I5Rj7pRHp4Q9FzZQQr3jCgi5%2FEBjqkAeUJpdQ%2BSEVnGn1vySy%2FykVLo0opgi8%2BTawj8LmQhXqWUPPX%2BaD9Fon7bvcTc%2F8988Axd268chGQ1cGjEM1t7NgxKwvzB%2FweyryFSd23bb1IipfSMDcy8siS5NmCfBi%2Bh2DO7RRBde5bCiIGStJU%2FTXQoUo%2FbTcpXkRLD4o12U%2BpwzYnZsMSZ6%2BU0hQSvr%2BkIOP5iRRCsPfdKXtGRD1KBuoAOnWv&X-Amz-Signature=25c3cb8c8c30f113ae6c413ae7cd1a3b5798dc1d9e6a1ad40ff2a987e3cd5078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVYAH5O%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDXfFSXwEZoEWE2CUnia4LwGtpKwULdD0Izi9M%2BbNATwIhANL0vfy99YfFtcJxxXYBTrjrvZ6rLshCkI9DN8ll5RYXKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCsgLNb%2F%2FOESibnLkq3AOT0RKW2ERBMzpjP8Ilj0GbsjwSrUn7aP2AfLVsIgTqNMFQNAuWGLcbrU5trAaQIbMANC70BAmNdfG2UAe0jREVgQ%2FupAOmQLWxhXew%2FgNSO5%2FsE5zZInpT%2Fo6RuKtiKNzGmslBLOF%2Bd4vkXsEJ%2Bds5MIiNo5AKclLGb%2Fyec4W1vVNy2voHfaVnb10GqWnRl4iZc8M5GzWor%2FKNPa2z0N1YSzNHLNWDXcosPKq3NEiNuWqQzp%2Fpw%2Fv29sGO3%2BID3QdeVErjnJzyQnOXpdUcVt7xEqMet%2FGyWdsa0p4DUj8RSY4g2iSFDp0R3Gpfui3h7ZKdQl3fX5wOHiyNITwN1dKfF5KUApbqvVdoReMKefifKJ3IXIpp5l5H70ckEbrqDGRIUeK6kNq655phyha6nCqXoQKOQ4%2Bps8bCeURd8oGqon60RSL7JfXj%2B%2B8oDN1MQNZtjBe3ZiMFGsqeW4J3wfS4HyJ7BJoKyWMjBDOiGuPliKAb6259uDKDimCtEjbZN4VgcA0otoAQclAgUb2%2F6Kzgj09S3GJQtA2W2K5EUOVhiDOat21XrQENiaGuaqz0B4tHdHPNZs7BReJDfxHfWpE1cGR4L14Wv%2Bwo4WU333I5Rj7pRHp4Q9FzZQQr3jCgi5%2FEBjqkAeUJpdQ%2BSEVnGn1vySy%2FykVLo0opgi8%2BTawj8LmQhXqWUPPX%2BaD9Fon7bvcTc%2F8988Axd268chGQ1cGjEM1t7NgxKwvzB%2FweyryFSd23bb1IipfSMDcy8siS5NmCfBi%2Bh2DO7RRBde5bCiIGStJU%2FTXQoUo%2FbTcpXkRLD4o12U%2BpwzYnZsMSZ6%2BU0hQSvr%2BkIOP5iRRCsPfdKXtGRD1KBuoAOnWv&X-Amz-Signature=b52f9ed092397cd61b288bcc87d47f5855c56911cc2a87db279cdf0bd52b5825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVYAH5O%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDXfFSXwEZoEWE2CUnia4LwGtpKwULdD0Izi9M%2BbNATwIhANL0vfy99YfFtcJxxXYBTrjrvZ6rLshCkI9DN8ll5RYXKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCsgLNb%2F%2FOESibnLkq3AOT0RKW2ERBMzpjP8Ilj0GbsjwSrUn7aP2AfLVsIgTqNMFQNAuWGLcbrU5trAaQIbMANC70BAmNdfG2UAe0jREVgQ%2FupAOmQLWxhXew%2FgNSO5%2FsE5zZInpT%2Fo6RuKtiKNzGmslBLOF%2Bd4vkXsEJ%2Bds5MIiNo5AKclLGb%2Fyec4W1vVNy2voHfaVnb10GqWnRl4iZc8M5GzWor%2FKNPa2z0N1YSzNHLNWDXcosPKq3NEiNuWqQzp%2Fpw%2Fv29sGO3%2BID3QdeVErjnJzyQnOXpdUcVt7xEqMet%2FGyWdsa0p4DUj8RSY4g2iSFDp0R3Gpfui3h7ZKdQl3fX5wOHiyNITwN1dKfF5KUApbqvVdoReMKefifKJ3IXIpp5l5H70ckEbrqDGRIUeK6kNq655phyha6nCqXoQKOQ4%2Bps8bCeURd8oGqon60RSL7JfXj%2B%2B8oDN1MQNZtjBe3ZiMFGsqeW4J3wfS4HyJ7BJoKyWMjBDOiGuPliKAb6259uDKDimCtEjbZN4VgcA0otoAQclAgUb2%2F6Kzgj09S3GJQtA2W2K5EUOVhiDOat21XrQENiaGuaqz0B4tHdHPNZs7BReJDfxHfWpE1cGR4L14Wv%2Bwo4WU333I5Rj7pRHp4Q9FzZQQr3jCgi5%2FEBjqkAeUJpdQ%2BSEVnGn1vySy%2FykVLo0opgi8%2BTawj8LmQhXqWUPPX%2BaD9Fon7bvcTc%2F8988Axd268chGQ1cGjEM1t7NgxKwvzB%2FweyryFSd23bb1IipfSMDcy8siS5NmCfBi%2Bh2DO7RRBde5bCiIGStJU%2FTXQoUo%2FbTcpXkRLD4o12U%2BpwzYnZsMSZ6%2BU0hQSvr%2BkIOP5iRRCsPfdKXtGRD1KBuoAOnWv&X-Amz-Signature=b02d1f082a37ee165e31816c2380d65b78870a19ad0b3a8b4aefe614299c2acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVYAH5O%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDXfFSXwEZoEWE2CUnia4LwGtpKwULdD0Izi9M%2BbNATwIhANL0vfy99YfFtcJxxXYBTrjrvZ6rLshCkI9DN8ll5RYXKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCsgLNb%2F%2FOESibnLkq3AOT0RKW2ERBMzpjP8Ilj0GbsjwSrUn7aP2AfLVsIgTqNMFQNAuWGLcbrU5trAaQIbMANC70BAmNdfG2UAe0jREVgQ%2FupAOmQLWxhXew%2FgNSO5%2FsE5zZInpT%2Fo6RuKtiKNzGmslBLOF%2Bd4vkXsEJ%2Bds5MIiNo5AKclLGb%2Fyec4W1vVNy2voHfaVnb10GqWnRl4iZc8M5GzWor%2FKNPa2z0N1YSzNHLNWDXcosPKq3NEiNuWqQzp%2Fpw%2Fv29sGO3%2BID3QdeVErjnJzyQnOXpdUcVt7xEqMet%2FGyWdsa0p4DUj8RSY4g2iSFDp0R3Gpfui3h7ZKdQl3fX5wOHiyNITwN1dKfF5KUApbqvVdoReMKefifKJ3IXIpp5l5H70ckEbrqDGRIUeK6kNq655phyha6nCqXoQKOQ4%2Bps8bCeURd8oGqon60RSL7JfXj%2B%2B8oDN1MQNZtjBe3ZiMFGsqeW4J3wfS4HyJ7BJoKyWMjBDOiGuPliKAb6259uDKDimCtEjbZN4VgcA0otoAQclAgUb2%2F6Kzgj09S3GJQtA2W2K5EUOVhiDOat21XrQENiaGuaqz0B4tHdHPNZs7BReJDfxHfWpE1cGR4L14Wv%2Bwo4WU333I5Rj7pRHp4Q9FzZQQr3jCgi5%2FEBjqkAeUJpdQ%2BSEVnGn1vySy%2FykVLo0opgi8%2BTawj8LmQhXqWUPPX%2BaD9Fon7bvcTc%2F8988Axd268chGQ1cGjEM1t7NgxKwvzB%2FweyryFSd23bb1IipfSMDcy8siS5NmCfBi%2Bh2DO7RRBde5bCiIGStJU%2FTXQoUo%2FbTcpXkRLD4o12U%2BpwzYnZsMSZ6%2BU0hQSvr%2BkIOP5iRRCsPfdKXtGRD1KBuoAOnWv&X-Amz-Signature=7c832eae460f303c06884d289c8e4ed86c9911132a224ae2920ce0bc01f71dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVYAH5O%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDXfFSXwEZoEWE2CUnia4LwGtpKwULdD0Izi9M%2BbNATwIhANL0vfy99YfFtcJxxXYBTrjrvZ6rLshCkI9DN8ll5RYXKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCsgLNb%2F%2FOESibnLkq3AOT0RKW2ERBMzpjP8Ilj0GbsjwSrUn7aP2AfLVsIgTqNMFQNAuWGLcbrU5trAaQIbMANC70BAmNdfG2UAe0jREVgQ%2FupAOmQLWxhXew%2FgNSO5%2FsE5zZInpT%2Fo6RuKtiKNzGmslBLOF%2Bd4vkXsEJ%2Bds5MIiNo5AKclLGb%2Fyec4W1vVNy2voHfaVnb10GqWnRl4iZc8M5GzWor%2FKNPa2z0N1YSzNHLNWDXcosPKq3NEiNuWqQzp%2Fpw%2Fv29sGO3%2BID3QdeVErjnJzyQnOXpdUcVt7xEqMet%2FGyWdsa0p4DUj8RSY4g2iSFDp0R3Gpfui3h7ZKdQl3fX5wOHiyNITwN1dKfF5KUApbqvVdoReMKefifKJ3IXIpp5l5H70ckEbrqDGRIUeK6kNq655phyha6nCqXoQKOQ4%2Bps8bCeURd8oGqon60RSL7JfXj%2B%2B8oDN1MQNZtjBe3ZiMFGsqeW4J3wfS4HyJ7BJoKyWMjBDOiGuPliKAb6259uDKDimCtEjbZN4VgcA0otoAQclAgUb2%2F6Kzgj09S3GJQtA2W2K5EUOVhiDOat21XrQENiaGuaqz0B4tHdHPNZs7BReJDfxHfWpE1cGR4L14Wv%2Bwo4WU333I5Rj7pRHp4Q9FzZQQr3jCgi5%2FEBjqkAeUJpdQ%2BSEVnGn1vySy%2FykVLo0opgi8%2BTawj8LmQhXqWUPPX%2BaD9Fon7bvcTc%2F8988Axd268chGQ1cGjEM1t7NgxKwvzB%2FweyryFSd23bb1IipfSMDcy8siS5NmCfBi%2Bh2DO7RRBde5bCiIGStJU%2FTXQoUo%2FbTcpXkRLD4o12U%2BpwzYnZsMSZ6%2BU0hQSvr%2BkIOP5iRRCsPfdKXtGRD1KBuoAOnWv&X-Amz-Signature=4f27782b33bd75eddd735d93292d8d9626106a1704960a4585bdf82ee3741585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVYAH5O%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDXfFSXwEZoEWE2CUnia4LwGtpKwULdD0Izi9M%2BbNATwIhANL0vfy99YfFtcJxxXYBTrjrvZ6rLshCkI9DN8ll5RYXKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCsgLNb%2F%2FOESibnLkq3AOT0RKW2ERBMzpjP8Ilj0GbsjwSrUn7aP2AfLVsIgTqNMFQNAuWGLcbrU5trAaQIbMANC70BAmNdfG2UAe0jREVgQ%2FupAOmQLWxhXew%2FgNSO5%2FsE5zZInpT%2Fo6RuKtiKNzGmslBLOF%2Bd4vkXsEJ%2Bds5MIiNo5AKclLGb%2Fyec4W1vVNy2voHfaVnb10GqWnRl4iZc8M5GzWor%2FKNPa2z0N1YSzNHLNWDXcosPKq3NEiNuWqQzp%2Fpw%2Fv29sGO3%2BID3QdeVErjnJzyQnOXpdUcVt7xEqMet%2FGyWdsa0p4DUj8RSY4g2iSFDp0R3Gpfui3h7ZKdQl3fX5wOHiyNITwN1dKfF5KUApbqvVdoReMKefifKJ3IXIpp5l5H70ckEbrqDGRIUeK6kNq655phyha6nCqXoQKOQ4%2Bps8bCeURd8oGqon60RSL7JfXj%2B%2B8oDN1MQNZtjBe3ZiMFGsqeW4J3wfS4HyJ7BJoKyWMjBDOiGuPliKAb6259uDKDimCtEjbZN4VgcA0otoAQclAgUb2%2F6Kzgj09S3GJQtA2W2K5EUOVhiDOat21XrQENiaGuaqz0B4tHdHPNZs7BReJDfxHfWpE1cGR4L14Wv%2Bwo4WU333I5Rj7pRHp4Q9FzZQQr3jCgi5%2FEBjqkAeUJpdQ%2BSEVnGn1vySy%2FykVLo0opgi8%2BTawj8LmQhXqWUPPX%2BaD9Fon7bvcTc%2F8988Axd268chGQ1cGjEM1t7NgxKwvzB%2FweyryFSd23bb1IipfSMDcy8siS5NmCfBi%2Bh2DO7RRBde5bCiIGStJU%2FTXQoUo%2FbTcpXkRLD4o12U%2BpwzYnZsMSZ6%2BU0hQSvr%2BkIOP5iRRCsPfdKXtGRD1KBuoAOnWv&X-Amz-Signature=7a0fba8a86c9e62b2d8330e422002144fae14a5cec7cc0f2158b8deb474859cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVYAH5O%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDDXfFSXwEZoEWE2CUnia4LwGtpKwULdD0Izi9M%2BbNATwIhANL0vfy99YfFtcJxxXYBTrjrvZ6rLshCkI9DN8ll5RYXKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCsgLNb%2F%2FOESibnLkq3AOT0RKW2ERBMzpjP8Ilj0GbsjwSrUn7aP2AfLVsIgTqNMFQNAuWGLcbrU5trAaQIbMANC70BAmNdfG2UAe0jREVgQ%2FupAOmQLWxhXew%2FgNSO5%2FsE5zZInpT%2Fo6RuKtiKNzGmslBLOF%2Bd4vkXsEJ%2Bds5MIiNo5AKclLGb%2Fyec4W1vVNy2voHfaVnb10GqWnRl4iZc8M5GzWor%2FKNPa2z0N1YSzNHLNWDXcosPKq3NEiNuWqQzp%2Fpw%2Fv29sGO3%2BID3QdeVErjnJzyQnOXpdUcVt7xEqMet%2FGyWdsa0p4DUj8RSY4g2iSFDp0R3Gpfui3h7ZKdQl3fX5wOHiyNITwN1dKfF5KUApbqvVdoReMKefifKJ3IXIpp5l5H70ckEbrqDGRIUeK6kNq655phyha6nCqXoQKOQ4%2Bps8bCeURd8oGqon60RSL7JfXj%2B%2B8oDN1MQNZtjBe3ZiMFGsqeW4J3wfS4HyJ7BJoKyWMjBDOiGuPliKAb6259uDKDimCtEjbZN4VgcA0otoAQclAgUb2%2F6Kzgj09S3GJQtA2W2K5EUOVhiDOat21XrQENiaGuaqz0B4tHdHPNZs7BReJDfxHfWpE1cGR4L14Wv%2Bwo4WU333I5Rj7pRHp4Q9FzZQQr3jCgi5%2FEBjqkAeUJpdQ%2BSEVnGn1vySy%2FykVLo0opgi8%2BTawj8LmQhXqWUPPX%2BaD9Fon7bvcTc%2F8988Axd268chGQ1cGjEM1t7NgxKwvzB%2FweyryFSd23bb1IipfSMDcy8siS5NmCfBi%2Bh2DO7RRBde5bCiIGStJU%2FTXQoUo%2FbTcpXkRLD4o12U%2BpwzYnZsMSZ6%2BU0hQSvr%2BkIOP5iRRCsPfdKXtGRD1KBuoAOnWv&X-Amz-Signature=d75e6b3e0a027626f1d24682b8a14d2a11bf45c78a818dcf7f2b3e565fb39ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
