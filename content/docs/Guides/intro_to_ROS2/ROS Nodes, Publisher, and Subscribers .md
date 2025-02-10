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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJQDJZM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2xqLds2LF4XzOkjI96RC1X3UxKBWkq3r4GOhaT34FAiAtqeQ9HNj1TOde0IpBfxIBFjNroyQYlOUiQPhiX33O5CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHq7lwLplMPRGV0%2BKtwDuV4vZFB4DBuusWw2BGTe3UM2ITuTpeh82cwhoUgyuwOpcj6GpQr9zNZsthqMScKW9GIJMscmjh3%2B5wLg%2BBHpPi8ISCBhFhMUw14HONwt2QoXLVP8m4y66ZTOjQqaBLV18lLHdBbUG93yU3gv8ePCEsCYXgTQdz6X2eBS4x0fhEtydzSVQ6Ua35X3q0TzDnjq3KyBK1vKdeK7qLJ02hHAbfAXfMQXFtOfASINBnWmbiFF0p%2BTQXb689Q8BwC8ShAj8RvcnLr7eRITquA30pxxIsS4zbiwzeZRXrFexc%2FlUET83L1Viky85j99RbdxNEgKzG2v%2FJToNAXtDGf82uD1PWprAjf%2FX5sYqbtfTXdG9wwnPC7p5wzokiAwsovsfjDRcOmuBNJue0ntyCY1rE86Bu5cGExez0o%2FDVkMh5mALUgh84hBVYanA%2BAhOnhxg6rvtfaiatoQIsKpx4vKfFbJteanp1xR4%2Be1neILmjsVl8n804LMQhKbIZ%2BtYKcyYSFtsfJZK4KfOO3CGQwoCCg1ZDEoqkRdLz5TDm0CJb4%2BLBg6DKNilFfF1LIhiP0Dj%2BDmC7q6GWpgLuy1jjZ2oLeauzkHMsclTRSpB8FOzCewWXwzabaNlTigKTF8XZEw2K2nvQY6pgG9lr1CkyvYSO8jp2g79OfuApaX2blYeT51bd1ZwGyqPnoV0QlFiYfoUzITGnqrg0L%2FzWFOGPb2qKhzUOV10fNw4Ivi4yqfsJsikpJh7Gh5M4R3OM5InUUqsrIS5ltjzpP61aefz6AUITxuBaCGgpNWDujFqldp1Uo67rkB8PjUKntEq5%2FR%2FK7A5G9%2FJJl8h1amoJ20x5zHXwvdRzxGNPQ2Imw9w426&X-Amz-Signature=72daa92697a5cdee6eaf698fde14a8c518bcd15e092d000157c2b1c42a99cbaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJQDJZM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2xqLds2LF4XzOkjI96RC1X3UxKBWkq3r4GOhaT34FAiAtqeQ9HNj1TOde0IpBfxIBFjNroyQYlOUiQPhiX33O5CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHq7lwLplMPRGV0%2BKtwDuV4vZFB4DBuusWw2BGTe3UM2ITuTpeh82cwhoUgyuwOpcj6GpQr9zNZsthqMScKW9GIJMscmjh3%2B5wLg%2BBHpPi8ISCBhFhMUw14HONwt2QoXLVP8m4y66ZTOjQqaBLV18lLHdBbUG93yU3gv8ePCEsCYXgTQdz6X2eBS4x0fhEtydzSVQ6Ua35X3q0TzDnjq3KyBK1vKdeK7qLJ02hHAbfAXfMQXFtOfASINBnWmbiFF0p%2BTQXb689Q8BwC8ShAj8RvcnLr7eRITquA30pxxIsS4zbiwzeZRXrFexc%2FlUET83L1Viky85j99RbdxNEgKzG2v%2FJToNAXtDGf82uD1PWprAjf%2FX5sYqbtfTXdG9wwnPC7p5wzokiAwsovsfjDRcOmuBNJue0ntyCY1rE86Bu5cGExez0o%2FDVkMh5mALUgh84hBVYanA%2BAhOnhxg6rvtfaiatoQIsKpx4vKfFbJteanp1xR4%2Be1neILmjsVl8n804LMQhKbIZ%2BtYKcyYSFtsfJZK4KfOO3CGQwoCCg1ZDEoqkRdLz5TDm0CJb4%2BLBg6DKNilFfF1LIhiP0Dj%2BDmC7q6GWpgLuy1jjZ2oLeauzkHMsclTRSpB8FOzCewWXwzabaNlTigKTF8XZEw2K2nvQY6pgG9lr1CkyvYSO8jp2g79OfuApaX2blYeT51bd1ZwGyqPnoV0QlFiYfoUzITGnqrg0L%2FzWFOGPb2qKhzUOV10fNw4Ivi4yqfsJsikpJh7Gh5M4R3OM5InUUqsrIS5ltjzpP61aefz6AUITxuBaCGgpNWDujFqldp1Uo67rkB8PjUKntEq5%2FR%2FK7A5G9%2FJJl8h1amoJ20x5zHXwvdRzxGNPQ2Imw9w426&X-Amz-Signature=5b39eecb50e57dc844f399e58151fec3dce9cef83234832e730961c8c34349c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJQDJZM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2xqLds2LF4XzOkjI96RC1X3UxKBWkq3r4GOhaT34FAiAtqeQ9HNj1TOde0IpBfxIBFjNroyQYlOUiQPhiX33O5CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHq7lwLplMPRGV0%2BKtwDuV4vZFB4DBuusWw2BGTe3UM2ITuTpeh82cwhoUgyuwOpcj6GpQr9zNZsthqMScKW9GIJMscmjh3%2B5wLg%2BBHpPi8ISCBhFhMUw14HONwt2QoXLVP8m4y66ZTOjQqaBLV18lLHdBbUG93yU3gv8ePCEsCYXgTQdz6X2eBS4x0fhEtydzSVQ6Ua35X3q0TzDnjq3KyBK1vKdeK7qLJ02hHAbfAXfMQXFtOfASINBnWmbiFF0p%2BTQXb689Q8BwC8ShAj8RvcnLr7eRITquA30pxxIsS4zbiwzeZRXrFexc%2FlUET83L1Viky85j99RbdxNEgKzG2v%2FJToNAXtDGf82uD1PWprAjf%2FX5sYqbtfTXdG9wwnPC7p5wzokiAwsovsfjDRcOmuBNJue0ntyCY1rE86Bu5cGExez0o%2FDVkMh5mALUgh84hBVYanA%2BAhOnhxg6rvtfaiatoQIsKpx4vKfFbJteanp1xR4%2Be1neILmjsVl8n804LMQhKbIZ%2BtYKcyYSFtsfJZK4KfOO3CGQwoCCg1ZDEoqkRdLz5TDm0CJb4%2BLBg6DKNilFfF1LIhiP0Dj%2BDmC7q6GWpgLuy1jjZ2oLeauzkHMsclTRSpB8FOzCewWXwzabaNlTigKTF8XZEw2K2nvQY6pgG9lr1CkyvYSO8jp2g79OfuApaX2blYeT51bd1ZwGyqPnoV0QlFiYfoUzITGnqrg0L%2FzWFOGPb2qKhzUOV10fNw4Ivi4yqfsJsikpJh7Gh5M4R3OM5InUUqsrIS5ltjzpP61aefz6AUITxuBaCGgpNWDujFqldp1Uo67rkB8PjUKntEq5%2FR%2FK7A5G9%2FJJl8h1amoJ20x5zHXwvdRzxGNPQ2Imw9w426&X-Amz-Signature=247456728104e2472b91823d0ff6e8fffcc510897ed18d175fdb23572adfbbde&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJQDJZM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2xqLds2LF4XzOkjI96RC1X3UxKBWkq3r4GOhaT34FAiAtqeQ9HNj1TOde0IpBfxIBFjNroyQYlOUiQPhiX33O5CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHq7lwLplMPRGV0%2BKtwDuV4vZFB4DBuusWw2BGTe3UM2ITuTpeh82cwhoUgyuwOpcj6GpQr9zNZsthqMScKW9GIJMscmjh3%2B5wLg%2BBHpPi8ISCBhFhMUw14HONwt2QoXLVP8m4y66ZTOjQqaBLV18lLHdBbUG93yU3gv8ePCEsCYXgTQdz6X2eBS4x0fhEtydzSVQ6Ua35X3q0TzDnjq3KyBK1vKdeK7qLJ02hHAbfAXfMQXFtOfASINBnWmbiFF0p%2BTQXb689Q8BwC8ShAj8RvcnLr7eRITquA30pxxIsS4zbiwzeZRXrFexc%2FlUET83L1Viky85j99RbdxNEgKzG2v%2FJToNAXtDGf82uD1PWprAjf%2FX5sYqbtfTXdG9wwnPC7p5wzokiAwsovsfjDRcOmuBNJue0ntyCY1rE86Bu5cGExez0o%2FDVkMh5mALUgh84hBVYanA%2BAhOnhxg6rvtfaiatoQIsKpx4vKfFbJteanp1xR4%2Be1neILmjsVl8n804LMQhKbIZ%2BtYKcyYSFtsfJZK4KfOO3CGQwoCCg1ZDEoqkRdLz5TDm0CJb4%2BLBg6DKNilFfF1LIhiP0Dj%2BDmC7q6GWpgLuy1jjZ2oLeauzkHMsclTRSpB8FOzCewWXwzabaNlTigKTF8XZEw2K2nvQY6pgG9lr1CkyvYSO8jp2g79OfuApaX2blYeT51bd1ZwGyqPnoV0QlFiYfoUzITGnqrg0L%2FzWFOGPb2qKhzUOV10fNw4Ivi4yqfsJsikpJh7Gh5M4R3OM5InUUqsrIS5ltjzpP61aefz6AUITxuBaCGgpNWDujFqldp1Uo67rkB8PjUKntEq5%2FR%2FK7A5G9%2FJJl8h1amoJ20x5zHXwvdRzxGNPQ2Imw9w426&X-Amz-Signature=eba56c3007122c949a30bee293471ae44156080a20a2fd0a1991d89071187fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJQDJZM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2xqLds2LF4XzOkjI96RC1X3UxKBWkq3r4GOhaT34FAiAtqeQ9HNj1TOde0IpBfxIBFjNroyQYlOUiQPhiX33O5CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHq7lwLplMPRGV0%2BKtwDuV4vZFB4DBuusWw2BGTe3UM2ITuTpeh82cwhoUgyuwOpcj6GpQr9zNZsthqMScKW9GIJMscmjh3%2B5wLg%2BBHpPi8ISCBhFhMUw14HONwt2QoXLVP8m4y66ZTOjQqaBLV18lLHdBbUG93yU3gv8ePCEsCYXgTQdz6X2eBS4x0fhEtydzSVQ6Ua35X3q0TzDnjq3KyBK1vKdeK7qLJ02hHAbfAXfMQXFtOfASINBnWmbiFF0p%2BTQXb689Q8BwC8ShAj8RvcnLr7eRITquA30pxxIsS4zbiwzeZRXrFexc%2FlUET83L1Viky85j99RbdxNEgKzG2v%2FJToNAXtDGf82uD1PWprAjf%2FX5sYqbtfTXdG9wwnPC7p5wzokiAwsovsfjDRcOmuBNJue0ntyCY1rE86Bu5cGExez0o%2FDVkMh5mALUgh84hBVYanA%2BAhOnhxg6rvtfaiatoQIsKpx4vKfFbJteanp1xR4%2Be1neILmjsVl8n804LMQhKbIZ%2BtYKcyYSFtsfJZK4KfOO3CGQwoCCg1ZDEoqkRdLz5TDm0CJb4%2BLBg6DKNilFfF1LIhiP0Dj%2BDmC7q6GWpgLuy1jjZ2oLeauzkHMsclTRSpB8FOzCewWXwzabaNlTigKTF8XZEw2K2nvQY6pgG9lr1CkyvYSO8jp2g79OfuApaX2blYeT51bd1ZwGyqPnoV0QlFiYfoUzITGnqrg0L%2FzWFOGPb2qKhzUOV10fNw4Ivi4yqfsJsikpJh7Gh5M4R3OM5InUUqsrIS5ltjzpP61aefz6AUITxuBaCGgpNWDujFqldp1Uo67rkB8PjUKntEq5%2FR%2FK7A5G9%2FJJl8h1amoJ20x5zHXwvdRzxGNPQ2Imw9w426&X-Amz-Signature=f32f88c080dfaa9abab228b40b52e3d25215a528e5e898689af13398a26bd4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJQDJZM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2xqLds2LF4XzOkjI96RC1X3UxKBWkq3r4GOhaT34FAiAtqeQ9HNj1TOde0IpBfxIBFjNroyQYlOUiQPhiX33O5CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHq7lwLplMPRGV0%2BKtwDuV4vZFB4DBuusWw2BGTe3UM2ITuTpeh82cwhoUgyuwOpcj6GpQr9zNZsthqMScKW9GIJMscmjh3%2B5wLg%2BBHpPi8ISCBhFhMUw14HONwt2QoXLVP8m4y66ZTOjQqaBLV18lLHdBbUG93yU3gv8ePCEsCYXgTQdz6X2eBS4x0fhEtydzSVQ6Ua35X3q0TzDnjq3KyBK1vKdeK7qLJ02hHAbfAXfMQXFtOfASINBnWmbiFF0p%2BTQXb689Q8BwC8ShAj8RvcnLr7eRITquA30pxxIsS4zbiwzeZRXrFexc%2FlUET83L1Viky85j99RbdxNEgKzG2v%2FJToNAXtDGf82uD1PWprAjf%2FX5sYqbtfTXdG9wwnPC7p5wzokiAwsovsfjDRcOmuBNJue0ntyCY1rE86Bu5cGExez0o%2FDVkMh5mALUgh84hBVYanA%2BAhOnhxg6rvtfaiatoQIsKpx4vKfFbJteanp1xR4%2Be1neILmjsVl8n804LMQhKbIZ%2BtYKcyYSFtsfJZK4KfOO3CGQwoCCg1ZDEoqkRdLz5TDm0CJb4%2BLBg6DKNilFfF1LIhiP0Dj%2BDmC7q6GWpgLuy1jjZ2oLeauzkHMsclTRSpB8FOzCewWXwzabaNlTigKTF8XZEw2K2nvQY6pgG9lr1CkyvYSO8jp2g79OfuApaX2blYeT51bd1ZwGyqPnoV0QlFiYfoUzITGnqrg0L%2FzWFOGPb2qKhzUOV10fNw4Ivi4yqfsJsikpJh7Gh5M4R3OM5InUUqsrIS5ltjzpP61aefz6AUITxuBaCGgpNWDujFqldp1Uo67rkB8PjUKntEq5%2FR%2FK7A5G9%2FJJl8h1amoJ20x5zHXwvdRzxGNPQ2Imw9w426&X-Amz-Signature=0100a17ba7f24444dd557357057d6c02cebc0b49ff819eec2f5f655b1931d3b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJQDJZM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2xqLds2LF4XzOkjI96RC1X3UxKBWkq3r4GOhaT34FAiAtqeQ9HNj1TOde0IpBfxIBFjNroyQYlOUiQPhiX33O5CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHq7lwLplMPRGV0%2BKtwDuV4vZFB4DBuusWw2BGTe3UM2ITuTpeh82cwhoUgyuwOpcj6GpQr9zNZsthqMScKW9GIJMscmjh3%2B5wLg%2BBHpPi8ISCBhFhMUw14HONwt2QoXLVP8m4y66ZTOjQqaBLV18lLHdBbUG93yU3gv8ePCEsCYXgTQdz6X2eBS4x0fhEtydzSVQ6Ua35X3q0TzDnjq3KyBK1vKdeK7qLJ02hHAbfAXfMQXFtOfASINBnWmbiFF0p%2BTQXb689Q8BwC8ShAj8RvcnLr7eRITquA30pxxIsS4zbiwzeZRXrFexc%2FlUET83L1Viky85j99RbdxNEgKzG2v%2FJToNAXtDGf82uD1PWprAjf%2FX5sYqbtfTXdG9wwnPC7p5wzokiAwsovsfjDRcOmuBNJue0ntyCY1rE86Bu5cGExez0o%2FDVkMh5mALUgh84hBVYanA%2BAhOnhxg6rvtfaiatoQIsKpx4vKfFbJteanp1xR4%2Be1neILmjsVl8n804LMQhKbIZ%2BtYKcyYSFtsfJZK4KfOO3CGQwoCCg1ZDEoqkRdLz5TDm0CJb4%2BLBg6DKNilFfF1LIhiP0Dj%2BDmC7q6GWpgLuy1jjZ2oLeauzkHMsclTRSpB8FOzCewWXwzabaNlTigKTF8XZEw2K2nvQY6pgG9lr1CkyvYSO8jp2g79OfuApaX2blYeT51bd1ZwGyqPnoV0QlFiYfoUzITGnqrg0L%2FzWFOGPb2qKhzUOV10fNw4Ivi4yqfsJsikpJh7Gh5M4R3OM5InUUqsrIS5ltjzpP61aefz6AUITxuBaCGgpNWDujFqldp1Uo67rkB8PjUKntEq5%2FR%2FK7A5G9%2FJJl8h1amoJ20x5zHXwvdRzxGNPQ2Imw9w426&X-Amz-Signature=85968622d02531ce44599041b3196774aeca8f18ac2ad1feb2ccf8d884d073cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJQDJZM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2xqLds2LF4XzOkjI96RC1X3UxKBWkq3r4GOhaT34FAiAtqeQ9HNj1TOde0IpBfxIBFjNroyQYlOUiQPhiX33O5CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHq7lwLplMPRGV0%2BKtwDuV4vZFB4DBuusWw2BGTe3UM2ITuTpeh82cwhoUgyuwOpcj6GpQr9zNZsthqMScKW9GIJMscmjh3%2B5wLg%2BBHpPi8ISCBhFhMUw14HONwt2QoXLVP8m4y66ZTOjQqaBLV18lLHdBbUG93yU3gv8ePCEsCYXgTQdz6X2eBS4x0fhEtydzSVQ6Ua35X3q0TzDnjq3KyBK1vKdeK7qLJ02hHAbfAXfMQXFtOfASINBnWmbiFF0p%2BTQXb689Q8BwC8ShAj8RvcnLr7eRITquA30pxxIsS4zbiwzeZRXrFexc%2FlUET83L1Viky85j99RbdxNEgKzG2v%2FJToNAXtDGf82uD1PWprAjf%2FX5sYqbtfTXdG9wwnPC7p5wzokiAwsovsfjDRcOmuBNJue0ntyCY1rE86Bu5cGExez0o%2FDVkMh5mALUgh84hBVYanA%2BAhOnhxg6rvtfaiatoQIsKpx4vKfFbJteanp1xR4%2Be1neILmjsVl8n804LMQhKbIZ%2BtYKcyYSFtsfJZK4KfOO3CGQwoCCg1ZDEoqkRdLz5TDm0CJb4%2BLBg6DKNilFfF1LIhiP0Dj%2BDmC7q6GWpgLuy1jjZ2oLeauzkHMsclTRSpB8FOzCewWXwzabaNlTigKTF8XZEw2K2nvQY6pgG9lr1CkyvYSO8jp2g79OfuApaX2blYeT51bd1ZwGyqPnoV0QlFiYfoUzITGnqrg0L%2FzWFOGPb2qKhzUOV10fNw4Ivi4yqfsJsikpJh7Gh5M4R3OM5InUUqsrIS5ltjzpP61aefz6AUITxuBaCGgpNWDujFqldp1Uo67rkB8PjUKntEq5%2FR%2FK7A5G9%2FJJl8h1amoJ20x5zHXwvdRzxGNPQ2Imw9w426&X-Amz-Signature=1facfc859010c1ed5a3fd5c1ade5599857380a062313460130ce585bd4a2a665&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
