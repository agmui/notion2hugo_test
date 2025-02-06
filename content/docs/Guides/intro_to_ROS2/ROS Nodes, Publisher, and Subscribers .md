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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIOJJCU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD3GBaPfDR6DQiOByICmmf9GAGpDbnZsexBYTaf4q5ryAIgYjObJMr9t2p1J8zQDGkNNW53s1ZAZmZEigRRiTxKDoAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLBP2%2FU2lfHIQ6SyHSrcA9a076X%2BCL9RXPFi2mIcV2KCtvxL9kvxekhAVL0S7bNz7HG93nZMxdPolV15arJRsFPa%2F%2FXFEqLoaw7m9Yk3PvKR5J3LUWfde0tIf38jNPwNMyGCN5TUn%2Bt1HL2M0PlAR0yJ0bFrgVP6E5KXbj6i7NII0yxnStIz%2F4BT6CTwUkotHDIUyn62%2BNngZ09xc9YrDG9KOprv99YLFkL%2BQ1OW5bghFxb8L038W0W4JOb2bVG7ztor5vMsPS48%2FYOpKe9SgEkFs8VcgXuvOKNnaUanwXFYCYIkujQlOHhXhr%2F4Q97UIQEYm2GIZTq7sa5w02K3o4IJ0eXZM17Z%2BcwBql0NdUtSG14RdjH3lLlagYLg66UZVNkMSZ5IZr7%2BBDfn8ltnIDraVP2S%2FEkaEwVMWvrkTajgmGUrcF4cFbFjIl7qpJlA%2FeZozhz5DIpyq8cmeO%2FY983cSBthJyXT%2F4lLhQ96DsrMwqjrpSkgHLebj5YlED%2B1xTYO%2BDjx22xcKAlu7n3WpyeWYkq0FNg9b21Kn7FD5fIgP0%2BDMOxa5KEjo3tDEUO%2FJcAoCC71NCxvIaVvx52MacFHopgaNvD%2Bi31FhbzdAmqNJr8D2lN34GD8MnSPXndtaz0OoHMswiQK4AygMLv9kL0GOqUBlOH1z%2BQ0bGG%2BJzGS2Dso8EJ4%2B6%2B9%2FezrJKONCQijNh7xUSCD%2BVM0VJQME8lieE0idMHmGlxPwM9cOV3fj158oGewPDl0sZF909j33hym5jubVzcuMGt1m392eiRuSdu3xSGa6s7TICy8pykdrFQiZ6F0s567CRi%2FWdHXmcuSsHN7lQi6wz3fXBR%2B6cGBKz8VIR4szjqSNo7%2BDOsna7QB%2BzOwWWRi&X-Amz-Signature=0eba20c9e0ec3b8b15be595d4519b1cbe6e93788c9cebb00dee8b9b200d6a4b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIOJJCU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD3GBaPfDR6DQiOByICmmf9GAGpDbnZsexBYTaf4q5ryAIgYjObJMr9t2p1J8zQDGkNNW53s1ZAZmZEigRRiTxKDoAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLBP2%2FU2lfHIQ6SyHSrcA9a076X%2BCL9RXPFi2mIcV2KCtvxL9kvxekhAVL0S7bNz7HG93nZMxdPolV15arJRsFPa%2F%2FXFEqLoaw7m9Yk3PvKR5J3LUWfde0tIf38jNPwNMyGCN5TUn%2Bt1HL2M0PlAR0yJ0bFrgVP6E5KXbj6i7NII0yxnStIz%2F4BT6CTwUkotHDIUyn62%2BNngZ09xc9YrDG9KOprv99YLFkL%2BQ1OW5bghFxb8L038W0W4JOb2bVG7ztor5vMsPS48%2FYOpKe9SgEkFs8VcgXuvOKNnaUanwXFYCYIkujQlOHhXhr%2F4Q97UIQEYm2GIZTq7sa5w02K3o4IJ0eXZM17Z%2BcwBql0NdUtSG14RdjH3lLlagYLg66UZVNkMSZ5IZr7%2BBDfn8ltnIDraVP2S%2FEkaEwVMWvrkTajgmGUrcF4cFbFjIl7qpJlA%2FeZozhz5DIpyq8cmeO%2FY983cSBthJyXT%2F4lLhQ96DsrMwqjrpSkgHLebj5YlED%2B1xTYO%2BDjx22xcKAlu7n3WpyeWYkq0FNg9b21Kn7FD5fIgP0%2BDMOxa5KEjo3tDEUO%2FJcAoCC71NCxvIaVvx52MacFHopgaNvD%2Bi31FhbzdAmqNJr8D2lN34GD8MnSPXndtaz0OoHMswiQK4AygMLv9kL0GOqUBlOH1z%2BQ0bGG%2BJzGS2Dso8EJ4%2B6%2B9%2FezrJKONCQijNh7xUSCD%2BVM0VJQME8lieE0idMHmGlxPwM9cOV3fj158oGewPDl0sZF909j33hym5jubVzcuMGt1m392eiRuSdu3xSGa6s7TICy8pykdrFQiZ6F0s567CRi%2FWdHXmcuSsHN7lQi6wz3fXBR%2B6cGBKz8VIR4szjqSNo7%2BDOsna7QB%2BzOwWWRi&X-Amz-Signature=7725af932a96db00422424a40e25e88d1d30f28c56a7bd590170e53e86852e23&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIOJJCU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD3GBaPfDR6DQiOByICmmf9GAGpDbnZsexBYTaf4q5ryAIgYjObJMr9t2p1J8zQDGkNNW53s1ZAZmZEigRRiTxKDoAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLBP2%2FU2lfHIQ6SyHSrcA9a076X%2BCL9RXPFi2mIcV2KCtvxL9kvxekhAVL0S7bNz7HG93nZMxdPolV15arJRsFPa%2F%2FXFEqLoaw7m9Yk3PvKR5J3LUWfde0tIf38jNPwNMyGCN5TUn%2Bt1HL2M0PlAR0yJ0bFrgVP6E5KXbj6i7NII0yxnStIz%2F4BT6CTwUkotHDIUyn62%2BNngZ09xc9YrDG9KOprv99YLFkL%2BQ1OW5bghFxb8L038W0W4JOb2bVG7ztor5vMsPS48%2FYOpKe9SgEkFs8VcgXuvOKNnaUanwXFYCYIkujQlOHhXhr%2F4Q97UIQEYm2GIZTq7sa5w02K3o4IJ0eXZM17Z%2BcwBql0NdUtSG14RdjH3lLlagYLg66UZVNkMSZ5IZr7%2BBDfn8ltnIDraVP2S%2FEkaEwVMWvrkTajgmGUrcF4cFbFjIl7qpJlA%2FeZozhz5DIpyq8cmeO%2FY983cSBthJyXT%2F4lLhQ96DsrMwqjrpSkgHLebj5YlED%2B1xTYO%2BDjx22xcKAlu7n3WpyeWYkq0FNg9b21Kn7FD5fIgP0%2BDMOxa5KEjo3tDEUO%2FJcAoCC71NCxvIaVvx52MacFHopgaNvD%2Bi31FhbzdAmqNJr8D2lN34GD8MnSPXndtaz0OoHMswiQK4AygMLv9kL0GOqUBlOH1z%2BQ0bGG%2BJzGS2Dso8EJ4%2B6%2B9%2FezrJKONCQijNh7xUSCD%2BVM0VJQME8lieE0idMHmGlxPwM9cOV3fj158oGewPDl0sZF909j33hym5jubVzcuMGt1m392eiRuSdu3xSGa6s7TICy8pykdrFQiZ6F0s567CRi%2FWdHXmcuSsHN7lQi6wz3fXBR%2B6cGBKz8VIR4szjqSNo7%2BDOsna7QB%2BzOwWWRi&X-Amz-Signature=0720401766ca045bfffc6bc296bd67b0429f68a013fa1988525249c0078690a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIOJJCU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD3GBaPfDR6DQiOByICmmf9GAGpDbnZsexBYTaf4q5ryAIgYjObJMr9t2p1J8zQDGkNNW53s1ZAZmZEigRRiTxKDoAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLBP2%2FU2lfHIQ6SyHSrcA9a076X%2BCL9RXPFi2mIcV2KCtvxL9kvxekhAVL0S7bNz7HG93nZMxdPolV15arJRsFPa%2F%2FXFEqLoaw7m9Yk3PvKR5J3LUWfde0tIf38jNPwNMyGCN5TUn%2Bt1HL2M0PlAR0yJ0bFrgVP6E5KXbj6i7NII0yxnStIz%2F4BT6CTwUkotHDIUyn62%2BNngZ09xc9YrDG9KOprv99YLFkL%2BQ1OW5bghFxb8L038W0W4JOb2bVG7ztor5vMsPS48%2FYOpKe9SgEkFs8VcgXuvOKNnaUanwXFYCYIkujQlOHhXhr%2F4Q97UIQEYm2GIZTq7sa5w02K3o4IJ0eXZM17Z%2BcwBql0NdUtSG14RdjH3lLlagYLg66UZVNkMSZ5IZr7%2BBDfn8ltnIDraVP2S%2FEkaEwVMWvrkTajgmGUrcF4cFbFjIl7qpJlA%2FeZozhz5DIpyq8cmeO%2FY983cSBthJyXT%2F4lLhQ96DsrMwqjrpSkgHLebj5YlED%2B1xTYO%2BDjx22xcKAlu7n3WpyeWYkq0FNg9b21Kn7FD5fIgP0%2BDMOxa5KEjo3tDEUO%2FJcAoCC71NCxvIaVvx52MacFHopgaNvD%2Bi31FhbzdAmqNJr8D2lN34GD8MnSPXndtaz0OoHMswiQK4AygMLv9kL0GOqUBlOH1z%2BQ0bGG%2BJzGS2Dso8EJ4%2B6%2B9%2FezrJKONCQijNh7xUSCD%2BVM0VJQME8lieE0idMHmGlxPwM9cOV3fj158oGewPDl0sZF909j33hym5jubVzcuMGt1m392eiRuSdu3xSGa6s7TICy8pykdrFQiZ6F0s567CRi%2FWdHXmcuSsHN7lQi6wz3fXBR%2B6cGBKz8VIR4szjqSNo7%2BDOsna7QB%2BzOwWWRi&X-Amz-Signature=0886a460912da7b0ec10eb5b467dbebe7579aa914eb307a3cc48989930bb131c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIOJJCU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD3GBaPfDR6DQiOByICmmf9GAGpDbnZsexBYTaf4q5ryAIgYjObJMr9t2p1J8zQDGkNNW53s1ZAZmZEigRRiTxKDoAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLBP2%2FU2lfHIQ6SyHSrcA9a076X%2BCL9RXPFi2mIcV2KCtvxL9kvxekhAVL0S7bNz7HG93nZMxdPolV15arJRsFPa%2F%2FXFEqLoaw7m9Yk3PvKR5J3LUWfde0tIf38jNPwNMyGCN5TUn%2Bt1HL2M0PlAR0yJ0bFrgVP6E5KXbj6i7NII0yxnStIz%2F4BT6CTwUkotHDIUyn62%2BNngZ09xc9YrDG9KOprv99YLFkL%2BQ1OW5bghFxb8L038W0W4JOb2bVG7ztor5vMsPS48%2FYOpKe9SgEkFs8VcgXuvOKNnaUanwXFYCYIkujQlOHhXhr%2F4Q97UIQEYm2GIZTq7sa5w02K3o4IJ0eXZM17Z%2BcwBql0NdUtSG14RdjH3lLlagYLg66UZVNkMSZ5IZr7%2BBDfn8ltnIDraVP2S%2FEkaEwVMWvrkTajgmGUrcF4cFbFjIl7qpJlA%2FeZozhz5DIpyq8cmeO%2FY983cSBthJyXT%2F4lLhQ96DsrMwqjrpSkgHLebj5YlED%2B1xTYO%2BDjx22xcKAlu7n3WpyeWYkq0FNg9b21Kn7FD5fIgP0%2BDMOxa5KEjo3tDEUO%2FJcAoCC71NCxvIaVvx52MacFHopgaNvD%2Bi31FhbzdAmqNJr8D2lN34GD8MnSPXndtaz0OoHMswiQK4AygMLv9kL0GOqUBlOH1z%2BQ0bGG%2BJzGS2Dso8EJ4%2B6%2B9%2FezrJKONCQijNh7xUSCD%2BVM0VJQME8lieE0idMHmGlxPwM9cOV3fj158oGewPDl0sZF909j33hym5jubVzcuMGt1m392eiRuSdu3xSGa6s7TICy8pykdrFQiZ6F0s567CRi%2FWdHXmcuSsHN7lQi6wz3fXBR%2B6cGBKz8VIR4szjqSNo7%2BDOsna7QB%2BzOwWWRi&X-Amz-Signature=9b4103191399938fec741360f98563718a9a8622d342807871da878dd11e4799&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIOJJCU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD3GBaPfDR6DQiOByICmmf9GAGpDbnZsexBYTaf4q5ryAIgYjObJMr9t2p1J8zQDGkNNW53s1ZAZmZEigRRiTxKDoAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLBP2%2FU2lfHIQ6SyHSrcA9a076X%2BCL9RXPFi2mIcV2KCtvxL9kvxekhAVL0S7bNz7HG93nZMxdPolV15arJRsFPa%2F%2FXFEqLoaw7m9Yk3PvKR5J3LUWfde0tIf38jNPwNMyGCN5TUn%2Bt1HL2M0PlAR0yJ0bFrgVP6E5KXbj6i7NII0yxnStIz%2F4BT6CTwUkotHDIUyn62%2BNngZ09xc9YrDG9KOprv99YLFkL%2BQ1OW5bghFxb8L038W0W4JOb2bVG7ztor5vMsPS48%2FYOpKe9SgEkFs8VcgXuvOKNnaUanwXFYCYIkujQlOHhXhr%2F4Q97UIQEYm2GIZTq7sa5w02K3o4IJ0eXZM17Z%2BcwBql0NdUtSG14RdjH3lLlagYLg66UZVNkMSZ5IZr7%2BBDfn8ltnIDraVP2S%2FEkaEwVMWvrkTajgmGUrcF4cFbFjIl7qpJlA%2FeZozhz5DIpyq8cmeO%2FY983cSBthJyXT%2F4lLhQ96DsrMwqjrpSkgHLebj5YlED%2B1xTYO%2BDjx22xcKAlu7n3WpyeWYkq0FNg9b21Kn7FD5fIgP0%2BDMOxa5KEjo3tDEUO%2FJcAoCC71NCxvIaVvx52MacFHopgaNvD%2Bi31FhbzdAmqNJr8D2lN34GD8MnSPXndtaz0OoHMswiQK4AygMLv9kL0GOqUBlOH1z%2BQ0bGG%2BJzGS2Dso8EJ4%2B6%2B9%2FezrJKONCQijNh7xUSCD%2BVM0VJQME8lieE0idMHmGlxPwM9cOV3fj158oGewPDl0sZF909j33hym5jubVzcuMGt1m392eiRuSdu3xSGa6s7TICy8pykdrFQiZ6F0s567CRi%2FWdHXmcuSsHN7lQi6wz3fXBR%2B6cGBKz8VIR4szjqSNo7%2BDOsna7QB%2BzOwWWRi&X-Amz-Signature=9eddcc4ffbe352d4e8ddc3bacf8b2a353acd906fd776c06c445fe6bc92adad19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIOJJCU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD3GBaPfDR6DQiOByICmmf9GAGpDbnZsexBYTaf4q5ryAIgYjObJMr9t2p1J8zQDGkNNW53s1ZAZmZEigRRiTxKDoAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLBP2%2FU2lfHIQ6SyHSrcA9a076X%2BCL9RXPFi2mIcV2KCtvxL9kvxekhAVL0S7bNz7HG93nZMxdPolV15arJRsFPa%2F%2FXFEqLoaw7m9Yk3PvKR5J3LUWfde0tIf38jNPwNMyGCN5TUn%2Bt1HL2M0PlAR0yJ0bFrgVP6E5KXbj6i7NII0yxnStIz%2F4BT6CTwUkotHDIUyn62%2BNngZ09xc9YrDG9KOprv99YLFkL%2BQ1OW5bghFxb8L038W0W4JOb2bVG7ztor5vMsPS48%2FYOpKe9SgEkFs8VcgXuvOKNnaUanwXFYCYIkujQlOHhXhr%2F4Q97UIQEYm2GIZTq7sa5w02K3o4IJ0eXZM17Z%2BcwBql0NdUtSG14RdjH3lLlagYLg66UZVNkMSZ5IZr7%2BBDfn8ltnIDraVP2S%2FEkaEwVMWvrkTajgmGUrcF4cFbFjIl7qpJlA%2FeZozhz5DIpyq8cmeO%2FY983cSBthJyXT%2F4lLhQ96DsrMwqjrpSkgHLebj5YlED%2B1xTYO%2BDjx22xcKAlu7n3WpyeWYkq0FNg9b21Kn7FD5fIgP0%2BDMOxa5KEjo3tDEUO%2FJcAoCC71NCxvIaVvx52MacFHopgaNvD%2Bi31FhbzdAmqNJr8D2lN34GD8MnSPXndtaz0OoHMswiQK4AygMLv9kL0GOqUBlOH1z%2BQ0bGG%2BJzGS2Dso8EJ4%2B6%2B9%2FezrJKONCQijNh7xUSCD%2BVM0VJQME8lieE0idMHmGlxPwM9cOV3fj158oGewPDl0sZF909j33hym5jubVzcuMGt1m392eiRuSdu3xSGa6s7TICy8pykdrFQiZ6F0s567CRi%2FWdHXmcuSsHN7lQi6wz3fXBR%2B6cGBKz8VIR4szjqSNo7%2BDOsna7QB%2BzOwWWRi&X-Amz-Signature=8878396207e30ae6e907dd1b4b179a9f950cf1f455b3ebbc853d56610ce9645a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIOJJCU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD3GBaPfDR6DQiOByICmmf9GAGpDbnZsexBYTaf4q5ryAIgYjObJMr9t2p1J8zQDGkNNW53s1ZAZmZEigRRiTxKDoAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLBP2%2FU2lfHIQ6SyHSrcA9a076X%2BCL9RXPFi2mIcV2KCtvxL9kvxekhAVL0S7bNz7HG93nZMxdPolV15arJRsFPa%2F%2FXFEqLoaw7m9Yk3PvKR5J3LUWfde0tIf38jNPwNMyGCN5TUn%2Bt1HL2M0PlAR0yJ0bFrgVP6E5KXbj6i7NII0yxnStIz%2F4BT6CTwUkotHDIUyn62%2BNngZ09xc9YrDG9KOprv99YLFkL%2BQ1OW5bghFxb8L038W0W4JOb2bVG7ztor5vMsPS48%2FYOpKe9SgEkFs8VcgXuvOKNnaUanwXFYCYIkujQlOHhXhr%2F4Q97UIQEYm2GIZTq7sa5w02K3o4IJ0eXZM17Z%2BcwBql0NdUtSG14RdjH3lLlagYLg66UZVNkMSZ5IZr7%2BBDfn8ltnIDraVP2S%2FEkaEwVMWvrkTajgmGUrcF4cFbFjIl7qpJlA%2FeZozhz5DIpyq8cmeO%2FY983cSBthJyXT%2F4lLhQ96DsrMwqjrpSkgHLebj5YlED%2B1xTYO%2BDjx22xcKAlu7n3WpyeWYkq0FNg9b21Kn7FD5fIgP0%2BDMOxa5KEjo3tDEUO%2FJcAoCC71NCxvIaVvx52MacFHopgaNvD%2Bi31FhbzdAmqNJr8D2lN34GD8MnSPXndtaz0OoHMswiQK4AygMLv9kL0GOqUBlOH1z%2BQ0bGG%2BJzGS2Dso8EJ4%2B6%2B9%2FezrJKONCQijNh7xUSCD%2BVM0VJQME8lieE0idMHmGlxPwM9cOV3fj158oGewPDl0sZF909j33hym5jubVzcuMGt1m392eiRuSdu3xSGa6s7TICy8pykdrFQiZ6F0s567CRi%2FWdHXmcuSsHN7lQi6wz3fXBR%2B6cGBKz8VIR4szjqSNo7%2BDOsna7QB%2BzOwWWRi&X-Amz-Signature=4a67089609c8d8b1e46e375702a20c4c4de593c62545c55b6ca117917578c241&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
