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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56WGQI7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4Yz%2BEJWONnwVJCtXqBqrFf723Ctmudj9KQLr%2FYzd%2FxwIgc6Zpck9KBlB9jpxwKxM%2FWzz%2Fy%2BlNCh%2BDs4qR%2FVUxTJIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPUtQDU7%2BEeqWdU6RSrcA6sl5SyxY8zuh1lgRteUT1%2B2yMb450cnkBj21uMv6sbRsr8UDzwBdLMjsu%2BT2YiCJRdDei8hnzEp4JVXB0IoklOVAzE6g%2BHeH6is%2BdjuZ1ImGEuZwJzp%2Fr%2BAO6Yg82xj0O1pgYI1TUfngypsP5GX8WpqREI7vF%2BP5HgOI09jrOqxNk%2FISl6qw9K2b2WH4YmbR4BqmgUWupsXVjNBxcQVNJLQLy%2BKa0hRLhP9T9f2xlBsjweNfkUtE53MDKCEOUTx22I7SANGZOw2LpfkV1Ume%2Flyv%2BNMs%2B7R5YGWxwuN5Fa20z8HxKShuxLMMjVoJs1%2B1t3QYZF95bYfK2x5s64eXVTL9%2B4WBJ4l1CjL7WG2dIgJ42Z9HQ%2BLolSfL2EjDFTZIq1kH2xdyk%2F2dgU3tz7p%2FtS4GbX9WxGiaeo5aw9fLHwa6cYHYclEC7HqyCWaqbp%2BBBMTiqBjVHImz%2Fp7od8ivSeoFtCbfbVr7YEpSuRm0vqnp0oAdmBXOt%2BGq7Y%2F4KGyAp%2FP7bSLbuvlAiF8olecAjwgYtO%2B6PYdT0vrRmJF8j2kSr2d5lOVG%2FnjKY9fXmoesU3p05D%2BQwqN4Cwubf7zoXT6YgCcnyUsFspuH%2FnXp40RssTKYWh4fVJ%2Baq6AMLTSvr0GOqUBvngnqPA0kUfWgFi3C1PUX5C1uSJTyPRO6WVVuDaHXgiRxlSGm1yAHxOFeg7VZ5lGzYhIWJ%2BC8834XsR7b89VclWOjZ5GRMsALKRI8H5HHla5h5daB9xVrlyIdmyN8bGD2hCpwbuoM2R1arxTRnGcTt%2FgavpCgqFW0DLVxzO%2BDjY6suCLg2BNdR%2B8pLB1PJt5cOvnO0sM2QR1RgPjtJcrVW3m08Fs&X-Amz-Signature=c0b3d325e2bf1c58c3084661633a57f4b660be2a9015e2d72344ecce89017c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56WGQI7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4Yz%2BEJWONnwVJCtXqBqrFf723Ctmudj9KQLr%2FYzd%2FxwIgc6Zpck9KBlB9jpxwKxM%2FWzz%2Fy%2BlNCh%2BDs4qR%2FVUxTJIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPUtQDU7%2BEeqWdU6RSrcA6sl5SyxY8zuh1lgRteUT1%2B2yMb450cnkBj21uMv6sbRsr8UDzwBdLMjsu%2BT2YiCJRdDei8hnzEp4JVXB0IoklOVAzE6g%2BHeH6is%2BdjuZ1ImGEuZwJzp%2Fr%2BAO6Yg82xj0O1pgYI1TUfngypsP5GX8WpqREI7vF%2BP5HgOI09jrOqxNk%2FISl6qw9K2b2WH4YmbR4BqmgUWupsXVjNBxcQVNJLQLy%2BKa0hRLhP9T9f2xlBsjweNfkUtE53MDKCEOUTx22I7SANGZOw2LpfkV1Ume%2Flyv%2BNMs%2B7R5YGWxwuN5Fa20z8HxKShuxLMMjVoJs1%2B1t3QYZF95bYfK2x5s64eXVTL9%2B4WBJ4l1CjL7WG2dIgJ42Z9HQ%2BLolSfL2EjDFTZIq1kH2xdyk%2F2dgU3tz7p%2FtS4GbX9WxGiaeo5aw9fLHwa6cYHYclEC7HqyCWaqbp%2BBBMTiqBjVHImz%2Fp7od8ivSeoFtCbfbVr7YEpSuRm0vqnp0oAdmBXOt%2BGq7Y%2F4KGyAp%2FP7bSLbuvlAiF8olecAjwgYtO%2B6PYdT0vrRmJF8j2kSr2d5lOVG%2FnjKY9fXmoesU3p05D%2BQwqN4Cwubf7zoXT6YgCcnyUsFspuH%2FnXp40RssTKYWh4fVJ%2Baq6AMLTSvr0GOqUBvngnqPA0kUfWgFi3C1PUX5C1uSJTyPRO6WVVuDaHXgiRxlSGm1yAHxOFeg7VZ5lGzYhIWJ%2BC8834XsR7b89VclWOjZ5GRMsALKRI8H5HHla5h5daB9xVrlyIdmyN8bGD2hCpwbuoM2R1arxTRnGcTt%2FgavpCgqFW0DLVxzO%2BDjY6suCLg2BNdR%2B8pLB1PJt5cOvnO0sM2QR1RgPjtJcrVW3m08Fs&X-Amz-Signature=6f49b0f72691fd8f1d8e3abadaa03af66fde6778c390821035997e238180bd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56WGQI7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4Yz%2BEJWONnwVJCtXqBqrFf723Ctmudj9KQLr%2FYzd%2FxwIgc6Zpck9KBlB9jpxwKxM%2FWzz%2Fy%2BlNCh%2BDs4qR%2FVUxTJIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPUtQDU7%2BEeqWdU6RSrcA6sl5SyxY8zuh1lgRteUT1%2B2yMb450cnkBj21uMv6sbRsr8UDzwBdLMjsu%2BT2YiCJRdDei8hnzEp4JVXB0IoklOVAzE6g%2BHeH6is%2BdjuZ1ImGEuZwJzp%2Fr%2BAO6Yg82xj0O1pgYI1TUfngypsP5GX8WpqREI7vF%2BP5HgOI09jrOqxNk%2FISl6qw9K2b2WH4YmbR4BqmgUWupsXVjNBxcQVNJLQLy%2BKa0hRLhP9T9f2xlBsjweNfkUtE53MDKCEOUTx22I7SANGZOw2LpfkV1Ume%2Flyv%2BNMs%2B7R5YGWxwuN5Fa20z8HxKShuxLMMjVoJs1%2B1t3QYZF95bYfK2x5s64eXVTL9%2B4WBJ4l1CjL7WG2dIgJ42Z9HQ%2BLolSfL2EjDFTZIq1kH2xdyk%2F2dgU3tz7p%2FtS4GbX9WxGiaeo5aw9fLHwa6cYHYclEC7HqyCWaqbp%2BBBMTiqBjVHImz%2Fp7od8ivSeoFtCbfbVr7YEpSuRm0vqnp0oAdmBXOt%2BGq7Y%2F4KGyAp%2FP7bSLbuvlAiF8olecAjwgYtO%2B6PYdT0vrRmJF8j2kSr2d5lOVG%2FnjKY9fXmoesU3p05D%2BQwqN4Cwubf7zoXT6YgCcnyUsFspuH%2FnXp40RssTKYWh4fVJ%2Baq6AMLTSvr0GOqUBvngnqPA0kUfWgFi3C1PUX5C1uSJTyPRO6WVVuDaHXgiRxlSGm1yAHxOFeg7VZ5lGzYhIWJ%2BC8834XsR7b89VclWOjZ5GRMsALKRI8H5HHla5h5daB9xVrlyIdmyN8bGD2hCpwbuoM2R1arxTRnGcTt%2FgavpCgqFW0DLVxzO%2BDjY6suCLg2BNdR%2B8pLB1PJt5cOvnO0sM2QR1RgPjtJcrVW3m08Fs&X-Amz-Signature=537076def073adc1983a33e91949a4d598734bfe7d52be21bc61d2e8554f349e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56WGQI7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4Yz%2BEJWONnwVJCtXqBqrFf723Ctmudj9KQLr%2FYzd%2FxwIgc6Zpck9KBlB9jpxwKxM%2FWzz%2Fy%2BlNCh%2BDs4qR%2FVUxTJIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPUtQDU7%2BEeqWdU6RSrcA6sl5SyxY8zuh1lgRteUT1%2B2yMb450cnkBj21uMv6sbRsr8UDzwBdLMjsu%2BT2YiCJRdDei8hnzEp4JVXB0IoklOVAzE6g%2BHeH6is%2BdjuZ1ImGEuZwJzp%2Fr%2BAO6Yg82xj0O1pgYI1TUfngypsP5GX8WpqREI7vF%2BP5HgOI09jrOqxNk%2FISl6qw9K2b2WH4YmbR4BqmgUWupsXVjNBxcQVNJLQLy%2BKa0hRLhP9T9f2xlBsjweNfkUtE53MDKCEOUTx22I7SANGZOw2LpfkV1Ume%2Flyv%2BNMs%2B7R5YGWxwuN5Fa20z8HxKShuxLMMjVoJs1%2B1t3QYZF95bYfK2x5s64eXVTL9%2B4WBJ4l1CjL7WG2dIgJ42Z9HQ%2BLolSfL2EjDFTZIq1kH2xdyk%2F2dgU3tz7p%2FtS4GbX9WxGiaeo5aw9fLHwa6cYHYclEC7HqyCWaqbp%2BBBMTiqBjVHImz%2Fp7od8ivSeoFtCbfbVr7YEpSuRm0vqnp0oAdmBXOt%2BGq7Y%2F4KGyAp%2FP7bSLbuvlAiF8olecAjwgYtO%2B6PYdT0vrRmJF8j2kSr2d5lOVG%2FnjKY9fXmoesU3p05D%2BQwqN4Cwubf7zoXT6YgCcnyUsFspuH%2FnXp40RssTKYWh4fVJ%2Baq6AMLTSvr0GOqUBvngnqPA0kUfWgFi3C1PUX5C1uSJTyPRO6WVVuDaHXgiRxlSGm1yAHxOFeg7VZ5lGzYhIWJ%2BC8834XsR7b89VclWOjZ5GRMsALKRI8H5HHla5h5daB9xVrlyIdmyN8bGD2hCpwbuoM2R1arxTRnGcTt%2FgavpCgqFW0DLVxzO%2BDjY6suCLg2BNdR%2B8pLB1PJt5cOvnO0sM2QR1RgPjtJcrVW3m08Fs&X-Amz-Signature=e68e852dc37129502529257f70dfa6c11d083b9fd569b57e3847d81ca9b6bebd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56WGQI7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4Yz%2BEJWONnwVJCtXqBqrFf723Ctmudj9KQLr%2FYzd%2FxwIgc6Zpck9KBlB9jpxwKxM%2FWzz%2Fy%2BlNCh%2BDs4qR%2FVUxTJIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPUtQDU7%2BEeqWdU6RSrcA6sl5SyxY8zuh1lgRteUT1%2B2yMb450cnkBj21uMv6sbRsr8UDzwBdLMjsu%2BT2YiCJRdDei8hnzEp4JVXB0IoklOVAzE6g%2BHeH6is%2BdjuZ1ImGEuZwJzp%2Fr%2BAO6Yg82xj0O1pgYI1TUfngypsP5GX8WpqREI7vF%2BP5HgOI09jrOqxNk%2FISl6qw9K2b2WH4YmbR4BqmgUWupsXVjNBxcQVNJLQLy%2BKa0hRLhP9T9f2xlBsjweNfkUtE53MDKCEOUTx22I7SANGZOw2LpfkV1Ume%2Flyv%2BNMs%2B7R5YGWxwuN5Fa20z8HxKShuxLMMjVoJs1%2B1t3QYZF95bYfK2x5s64eXVTL9%2B4WBJ4l1CjL7WG2dIgJ42Z9HQ%2BLolSfL2EjDFTZIq1kH2xdyk%2F2dgU3tz7p%2FtS4GbX9WxGiaeo5aw9fLHwa6cYHYclEC7HqyCWaqbp%2BBBMTiqBjVHImz%2Fp7od8ivSeoFtCbfbVr7YEpSuRm0vqnp0oAdmBXOt%2BGq7Y%2F4KGyAp%2FP7bSLbuvlAiF8olecAjwgYtO%2B6PYdT0vrRmJF8j2kSr2d5lOVG%2FnjKY9fXmoesU3p05D%2BQwqN4Cwubf7zoXT6YgCcnyUsFspuH%2FnXp40RssTKYWh4fVJ%2Baq6AMLTSvr0GOqUBvngnqPA0kUfWgFi3C1PUX5C1uSJTyPRO6WVVuDaHXgiRxlSGm1yAHxOFeg7VZ5lGzYhIWJ%2BC8834XsR7b89VclWOjZ5GRMsALKRI8H5HHla5h5daB9xVrlyIdmyN8bGD2hCpwbuoM2R1arxTRnGcTt%2FgavpCgqFW0DLVxzO%2BDjY6suCLg2BNdR%2B8pLB1PJt5cOvnO0sM2QR1RgPjtJcrVW3m08Fs&X-Amz-Signature=8c24a129e5535e95f2129aa04552b5fba7a5c561e1ee00f2d267d865a870faee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56WGQI7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4Yz%2BEJWONnwVJCtXqBqrFf723Ctmudj9KQLr%2FYzd%2FxwIgc6Zpck9KBlB9jpxwKxM%2FWzz%2Fy%2BlNCh%2BDs4qR%2FVUxTJIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPUtQDU7%2BEeqWdU6RSrcA6sl5SyxY8zuh1lgRteUT1%2B2yMb450cnkBj21uMv6sbRsr8UDzwBdLMjsu%2BT2YiCJRdDei8hnzEp4JVXB0IoklOVAzE6g%2BHeH6is%2BdjuZ1ImGEuZwJzp%2Fr%2BAO6Yg82xj0O1pgYI1TUfngypsP5GX8WpqREI7vF%2BP5HgOI09jrOqxNk%2FISl6qw9K2b2WH4YmbR4BqmgUWupsXVjNBxcQVNJLQLy%2BKa0hRLhP9T9f2xlBsjweNfkUtE53MDKCEOUTx22I7SANGZOw2LpfkV1Ume%2Flyv%2BNMs%2B7R5YGWxwuN5Fa20z8HxKShuxLMMjVoJs1%2B1t3QYZF95bYfK2x5s64eXVTL9%2B4WBJ4l1CjL7WG2dIgJ42Z9HQ%2BLolSfL2EjDFTZIq1kH2xdyk%2F2dgU3tz7p%2FtS4GbX9WxGiaeo5aw9fLHwa6cYHYclEC7HqyCWaqbp%2BBBMTiqBjVHImz%2Fp7od8ivSeoFtCbfbVr7YEpSuRm0vqnp0oAdmBXOt%2BGq7Y%2F4KGyAp%2FP7bSLbuvlAiF8olecAjwgYtO%2B6PYdT0vrRmJF8j2kSr2d5lOVG%2FnjKY9fXmoesU3p05D%2BQwqN4Cwubf7zoXT6YgCcnyUsFspuH%2FnXp40RssTKYWh4fVJ%2Baq6AMLTSvr0GOqUBvngnqPA0kUfWgFi3C1PUX5C1uSJTyPRO6WVVuDaHXgiRxlSGm1yAHxOFeg7VZ5lGzYhIWJ%2BC8834XsR7b89VclWOjZ5GRMsALKRI8H5HHla5h5daB9xVrlyIdmyN8bGD2hCpwbuoM2R1arxTRnGcTt%2FgavpCgqFW0DLVxzO%2BDjY6suCLg2BNdR%2B8pLB1PJt5cOvnO0sM2QR1RgPjtJcrVW3m08Fs&X-Amz-Signature=ca16b5de6a0ce914ea38328d2fa96a57dcd729b535348beb20501871dce9d8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56WGQI7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4Yz%2BEJWONnwVJCtXqBqrFf723Ctmudj9KQLr%2FYzd%2FxwIgc6Zpck9KBlB9jpxwKxM%2FWzz%2Fy%2BlNCh%2BDs4qR%2FVUxTJIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPUtQDU7%2BEeqWdU6RSrcA6sl5SyxY8zuh1lgRteUT1%2B2yMb450cnkBj21uMv6sbRsr8UDzwBdLMjsu%2BT2YiCJRdDei8hnzEp4JVXB0IoklOVAzE6g%2BHeH6is%2BdjuZ1ImGEuZwJzp%2Fr%2BAO6Yg82xj0O1pgYI1TUfngypsP5GX8WpqREI7vF%2BP5HgOI09jrOqxNk%2FISl6qw9K2b2WH4YmbR4BqmgUWupsXVjNBxcQVNJLQLy%2BKa0hRLhP9T9f2xlBsjweNfkUtE53MDKCEOUTx22I7SANGZOw2LpfkV1Ume%2Flyv%2BNMs%2B7R5YGWxwuN5Fa20z8HxKShuxLMMjVoJs1%2B1t3QYZF95bYfK2x5s64eXVTL9%2B4WBJ4l1CjL7WG2dIgJ42Z9HQ%2BLolSfL2EjDFTZIq1kH2xdyk%2F2dgU3tz7p%2FtS4GbX9WxGiaeo5aw9fLHwa6cYHYclEC7HqyCWaqbp%2BBBMTiqBjVHImz%2Fp7od8ivSeoFtCbfbVr7YEpSuRm0vqnp0oAdmBXOt%2BGq7Y%2F4KGyAp%2FP7bSLbuvlAiF8olecAjwgYtO%2B6PYdT0vrRmJF8j2kSr2d5lOVG%2FnjKY9fXmoesU3p05D%2BQwqN4Cwubf7zoXT6YgCcnyUsFspuH%2FnXp40RssTKYWh4fVJ%2Baq6AMLTSvr0GOqUBvngnqPA0kUfWgFi3C1PUX5C1uSJTyPRO6WVVuDaHXgiRxlSGm1yAHxOFeg7VZ5lGzYhIWJ%2BC8834XsR7b89VclWOjZ5GRMsALKRI8H5HHla5h5daB9xVrlyIdmyN8bGD2hCpwbuoM2R1arxTRnGcTt%2FgavpCgqFW0DLVxzO%2BDjY6suCLg2BNdR%2B8pLB1PJt5cOvnO0sM2QR1RgPjtJcrVW3m08Fs&X-Amz-Signature=6e4b1bcdbea0c29630228ca3712fc0e23711bb4c312b37b7d59318fc5634cbe0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56WGQI7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4Yz%2BEJWONnwVJCtXqBqrFf723Ctmudj9KQLr%2FYzd%2FxwIgc6Zpck9KBlB9jpxwKxM%2FWzz%2Fy%2BlNCh%2BDs4qR%2FVUxTJIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPUtQDU7%2BEeqWdU6RSrcA6sl5SyxY8zuh1lgRteUT1%2B2yMb450cnkBj21uMv6sbRsr8UDzwBdLMjsu%2BT2YiCJRdDei8hnzEp4JVXB0IoklOVAzE6g%2BHeH6is%2BdjuZ1ImGEuZwJzp%2Fr%2BAO6Yg82xj0O1pgYI1TUfngypsP5GX8WpqREI7vF%2BP5HgOI09jrOqxNk%2FISl6qw9K2b2WH4YmbR4BqmgUWupsXVjNBxcQVNJLQLy%2BKa0hRLhP9T9f2xlBsjweNfkUtE53MDKCEOUTx22I7SANGZOw2LpfkV1Ume%2Flyv%2BNMs%2B7R5YGWxwuN5Fa20z8HxKShuxLMMjVoJs1%2B1t3QYZF95bYfK2x5s64eXVTL9%2B4WBJ4l1CjL7WG2dIgJ42Z9HQ%2BLolSfL2EjDFTZIq1kH2xdyk%2F2dgU3tz7p%2FtS4GbX9WxGiaeo5aw9fLHwa6cYHYclEC7HqyCWaqbp%2BBBMTiqBjVHImz%2Fp7od8ivSeoFtCbfbVr7YEpSuRm0vqnp0oAdmBXOt%2BGq7Y%2F4KGyAp%2FP7bSLbuvlAiF8olecAjwgYtO%2B6PYdT0vrRmJF8j2kSr2d5lOVG%2FnjKY9fXmoesU3p05D%2BQwqN4Cwubf7zoXT6YgCcnyUsFspuH%2FnXp40RssTKYWh4fVJ%2Baq6AMLTSvr0GOqUBvngnqPA0kUfWgFi3C1PUX5C1uSJTyPRO6WVVuDaHXgiRxlSGm1yAHxOFeg7VZ5lGzYhIWJ%2BC8834XsR7b89VclWOjZ5GRMsALKRI8H5HHla5h5daB9xVrlyIdmyN8bGD2hCpwbuoM2R1arxTRnGcTt%2FgavpCgqFW0DLVxzO%2BDjY6suCLg2BNdR%2B8pLB1PJt5cOvnO0sM2QR1RgPjtJcrVW3m08Fs&X-Amz-Signature=81e2a2a4a37c5e4e15fcd2654c8ab367f71261b161e93acc012bdffaad5b3093&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
