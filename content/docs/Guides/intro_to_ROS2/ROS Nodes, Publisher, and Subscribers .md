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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUPFQF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp7QIrOFJdAmoqz6y%2Bhb9u4zSh6cB0IkNMUrjYjFV9rAiEA1RXpLtJxKKjBFaKZcnRmerw2FBz%2FvvhcKCAKIK%2B3Km4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp4DYKPmlR%2FPiagDyrcA%2Fx0cxU61HxG2k40pPwLN%2FEcg3vgUSxFqDC1z1PzOUjeA2o50yrEW88IRuLMgcVhcP4Z6%2FWh%2FZ0gM1S6TPqHeupow%2F8GXesqUtq1fTeY8rmz0xxbxZm294ubC5NXMg%2FfNFG%2FJUp7TWccL6veOKvUetvjzbmBBjUksJfqs62sc41Yat%2FLxGst1uN%2Fr0vXzjstnD6ecN%2B2j1UQPjg9ULnp92raxfQ%2BXazCRq9iG4tQVHs75R6C3jN5PbViSyQmlnnCIuc%2FQrIuZ%2FA%2B6seIlbRp1hib9EFx7WxH%2FS5Sl1PEojQO6Zde5lLfO4QpCtiPjcho8DM3vu1q44KlSzTEME54OoeL%2FJWaH%2BkVRuVCwoLcEN8bbWUKdNtPS94TQwcPu3udKNT9INznNuk3m7%2F%2B8HvPdtJS8B93FalgomG12rSHb7Wymrvfgj0GQ8hTUDKZVWxyJ%2FfWCEF5xS%2FIlF28wwtz9Us74%2Bp37BYG2Hg1liNfItrukmLk2tgN4DPUfdC%2BX6BVaWK%2FWU5Z%2FWBBpTOdb7lt17gw%2FSAJGIHU4Ywl%2FWKqDzuxxbCc6rH4L8yMakhDCYmn4MSS6GJztDeAfga3ealg8ghz9BbATJpaZqgUuITT7gFe%2FO4Cr%2Fa0N%2Fpjjq1vMLa8l74GOqUB6qQ5Y61TA9nsAmykRzwPuzWrzETkEl56NEPmkBr28Db%2BANx2GxAGfNZtL5dEDg2OWukgzsoag9QhG90xMjKNpFPg8dvKrnLBzZlY0Mv2ylZae38fj4L8DqPRHWxYLUSOZs%2BJwkZ3WKLCX1ILMZqYEqEpty50g8TdICwzemADrcOAV3ljGHGPpZrYfH6JBwFHueuZmsuZFEhtIcqssy6hrpy%2Biizx&X-Amz-Signature=9ff6bdf6c567d7e4777122c9ae93e0a54f62ef6af98fb2bcef0c009a09701c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUPFQF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp7QIrOFJdAmoqz6y%2Bhb9u4zSh6cB0IkNMUrjYjFV9rAiEA1RXpLtJxKKjBFaKZcnRmerw2FBz%2FvvhcKCAKIK%2B3Km4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp4DYKPmlR%2FPiagDyrcA%2Fx0cxU61HxG2k40pPwLN%2FEcg3vgUSxFqDC1z1PzOUjeA2o50yrEW88IRuLMgcVhcP4Z6%2FWh%2FZ0gM1S6TPqHeupow%2F8GXesqUtq1fTeY8rmz0xxbxZm294ubC5NXMg%2FfNFG%2FJUp7TWccL6veOKvUetvjzbmBBjUksJfqs62sc41Yat%2FLxGst1uN%2Fr0vXzjstnD6ecN%2B2j1UQPjg9ULnp92raxfQ%2BXazCRq9iG4tQVHs75R6C3jN5PbViSyQmlnnCIuc%2FQrIuZ%2FA%2B6seIlbRp1hib9EFx7WxH%2FS5Sl1PEojQO6Zde5lLfO4QpCtiPjcho8DM3vu1q44KlSzTEME54OoeL%2FJWaH%2BkVRuVCwoLcEN8bbWUKdNtPS94TQwcPu3udKNT9INznNuk3m7%2F%2B8HvPdtJS8B93FalgomG12rSHb7Wymrvfgj0GQ8hTUDKZVWxyJ%2FfWCEF5xS%2FIlF28wwtz9Us74%2Bp37BYG2Hg1liNfItrukmLk2tgN4DPUfdC%2BX6BVaWK%2FWU5Z%2FWBBpTOdb7lt17gw%2FSAJGIHU4Ywl%2FWKqDzuxxbCc6rH4L8yMakhDCYmn4MSS6GJztDeAfga3ealg8ghz9BbATJpaZqgUuITT7gFe%2FO4Cr%2Fa0N%2Fpjjq1vMLa8l74GOqUB6qQ5Y61TA9nsAmykRzwPuzWrzETkEl56NEPmkBr28Db%2BANx2GxAGfNZtL5dEDg2OWukgzsoag9QhG90xMjKNpFPg8dvKrnLBzZlY0Mv2ylZae38fj4L8DqPRHWxYLUSOZs%2BJwkZ3WKLCX1ILMZqYEqEpty50g8TdICwzemADrcOAV3ljGHGPpZrYfH6JBwFHueuZmsuZFEhtIcqssy6hrpy%2Biizx&X-Amz-Signature=117a2580fc9320f6719720c95cd3cb3467812c5dc7fbe229f1a10d0f8f5b98e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUPFQF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp7QIrOFJdAmoqz6y%2Bhb9u4zSh6cB0IkNMUrjYjFV9rAiEA1RXpLtJxKKjBFaKZcnRmerw2FBz%2FvvhcKCAKIK%2B3Km4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp4DYKPmlR%2FPiagDyrcA%2Fx0cxU61HxG2k40pPwLN%2FEcg3vgUSxFqDC1z1PzOUjeA2o50yrEW88IRuLMgcVhcP4Z6%2FWh%2FZ0gM1S6TPqHeupow%2F8GXesqUtq1fTeY8rmz0xxbxZm294ubC5NXMg%2FfNFG%2FJUp7TWccL6veOKvUetvjzbmBBjUksJfqs62sc41Yat%2FLxGst1uN%2Fr0vXzjstnD6ecN%2B2j1UQPjg9ULnp92raxfQ%2BXazCRq9iG4tQVHs75R6C3jN5PbViSyQmlnnCIuc%2FQrIuZ%2FA%2B6seIlbRp1hib9EFx7WxH%2FS5Sl1PEojQO6Zde5lLfO4QpCtiPjcho8DM3vu1q44KlSzTEME54OoeL%2FJWaH%2BkVRuVCwoLcEN8bbWUKdNtPS94TQwcPu3udKNT9INznNuk3m7%2F%2B8HvPdtJS8B93FalgomG12rSHb7Wymrvfgj0GQ8hTUDKZVWxyJ%2FfWCEF5xS%2FIlF28wwtz9Us74%2Bp37BYG2Hg1liNfItrukmLk2tgN4DPUfdC%2BX6BVaWK%2FWU5Z%2FWBBpTOdb7lt17gw%2FSAJGIHU4Ywl%2FWKqDzuxxbCc6rH4L8yMakhDCYmn4MSS6GJztDeAfga3ealg8ghz9BbATJpaZqgUuITT7gFe%2FO4Cr%2Fa0N%2Fpjjq1vMLa8l74GOqUB6qQ5Y61TA9nsAmykRzwPuzWrzETkEl56NEPmkBr28Db%2BANx2GxAGfNZtL5dEDg2OWukgzsoag9QhG90xMjKNpFPg8dvKrnLBzZlY0Mv2ylZae38fj4L8DqPRHWxYLUSOZs%2BJwkZ3WKLCX1ILMZqYEqEpty50g8TdICwzemADrcOAV3ljGHGPpZrYfH6JBwFHueuZmsuZFEhtIcqssy6hrpy%2Biizx&X-Amz-Signature=003fe45ba4879d926aeda3587b13ed93107acb189cba97b99848cbec7ca228e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUPFQF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp7QIrOFJdAmoqz6y%2Bhb9u4zSh6cB0IkNMUrjYjFV9rAiEA1RXpLtJxKKjBFaKZcnRmerw2FBz%2FvvhcKCAKIK%2B3Km4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp4DYKPmlR%2FPiagDyrcA%2Fx0cxU61HxG2k40pPwLN%2FEcg3vgUSxFqDC1z1PzOUjeA2o50yrEW88IRuLMgcVhcP4Z6%2FWh%2FZ0gM1S6TPqHeupow%2F8GXesqUtq1fTeY8rmz0xxbxZm294ubC5NXMg%2FfNFG%2FJUp7TWccL6veOKvUetvjzbmBBjUksJfqs62sc41Yat%2FLxGst1uN%2Fr0vXzjstnD6ecN%2B2j1UQPjg9ULnp92raxfQ%2BXazCRq9iG4tQVHs75R6C3jN5PbViSyQmlnnCIuc%2FQrIuZ%2FA%2B6seIlbRp1hib9EFx7WxH%2FS5Sl1PEojQO6Zde5lLfO4QpCtiPjcho8DM3vu1q44KlSzTEME54OoeL%2FJWaH%2BkVRuVCwoLcEN8bbWUKdNtPS94TQwcPu3udKNT9INznNuk3m7%2F%2B8HvPdtJS8B93FalgomG12rSHb7Wymrvfgj0GQ8hTUDKZVWxyJ%2FfWCEF5xS%2FIlF28wwtz9Us74%2Bp37BYG2Hg1liNfItrukmLk2tgN4DPUfdC%2BX6BVaWK%2FWU5Z%2FWBBpTOdb7lt17gw%2FSAJGIHU4Ywl%2FWKqDzuxxbCc6rH4L8yMakhDCYmn4MSS6GJztDeAfga3ealg8ghz9BbATJpaZqgUuITT7gFe%2FO4Cr%2Fa0N%2Fpjjq1vMLa8l74GOqUB6qQ5Y61TA9nsAmykRzwPuzWrzETkEl56NEPmkBr28Db%2BANx2GxAGfNZtL5dEDg2OWukgzsoag9QhG90xMjKNpFPg8dvKrnLBzZlY0Mv2ylZae38fj4L8DqPRHWxYLUSOZs%2BJwkZ3WKLCX1ILMZqYEqEpty50g8TdICwzemADrcOAV3ljGHGPpZrYfH6JBwFHueuZmsuZFEhtIcqssy6hrpy%2Biizx&X-Amz-Signature=02313854ff36b247f9a027758c95dda4f85c8f349a41396c5bb1de0574eaa863&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUPFQF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp7QIrOFJdAmoqz6y%2Bhb9u4zSh6cB0IkNMUrjYjFV9rAiEA1RXpLtJxKKjBFaKZcnRmerw2FBz%2FvvhcKCAKIK%2B3Km4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp4DYKPmlR%2FPiagDyrcA%2Fx0cxU61HxG2k40pPwLN%2FEcg3vgUSxFqDC1z1PzOUjeA2o50yrEW88IRuLMgcVhcP4Z6%2FWh%2FZ0gM1S6TPqHeupow%2F8GXesqUtq1fTeY8rmz0xxbxZm294ubC5NXMg%2FfNFG%2FJUp7TWccL6veOKvUetvjzbmBBjUksJfqs62sc41Yat%2FLxGst1uN%2Fr0vXzjstnD6ecN%2B2j1UQPjg9ULnp92raxfQ%2BXazCRq9iG4tQVHs75R6C3jN5PbViSyQmlnnCIuc%2FQrIuZ%2FA%2B6seIlbRp1hib9EFx7WxH%2FS5Sl1PEojQO6Zde5lLfO4QpCtiPjcho8DM3vu1q44KlSzTEME54OoeL%2FJWaH%2BkVRuVCwoLcEN8bbWUKdNtPS94TQwcPu3udKNT9INznNuk3m7%2F%2B8HvPdtJS8B93FalgomG12rSHb7Wymrvfgj0GQ8hTUDKZVWxyJ%2FfWCEF5xS%2FIlF28wwtz9Us74%2Bp37BYG2Hg1liNfItrukmLk2tgN4DPUfdC%2BX6BVaWK%2FWU5Z%2FWBBpTOdb7lt17gw%2FSAJGIHU4Ywl%2FWKqDzuxxbCc6rH4L8yMakhDCYmn4MSS6GJztDeAfga3ealg8ghz9BbATJpaZqgUuITT7gFe%2FO4Cr%2Fa0N%2Fpjjq1vMLa8l74GOqUB6qQ5Y61TA9nsAmykRzwPuzWrzETkEl56NEPmkBr28Db%2BANx2GxAGfNZtL5dEDg2OWukgzsoag9QhG90xMjKNpFPg8dvKrnLBzZlY0Mv2ylZae38fj4L8DqPRHWxYLUSOZs%2BJwkZ3WKLCX1ILMZqYEqEpty50g8TdICwzemADrcOAV3ljGHGPpZrYfH6JBwFHueuZmsuZFEhtIcqssy6hrpy%2Biizx&X-Amz-Signature=5f960aa5d17b73ae06873a5160e357aa8a13faecb2b9d2169c0be27c58dad035&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUPFQF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp7QIrOFJdAmoqz6y%2Bhb9u4zSh6cB0IkNMUrjYjFV9rAiEA1RXpLtJxKKjBFaKZcnRmerw2FBz%2FvvhcKCAKIK%2B3Km4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp4DYKPmlR%2FPiagDyrcA%2Fx0cxU61HxG2k40pPwLN%2FEcg3vgUSxFqDC1z1PzOUjeA2o50yrEW88IRuLMgcVhcP4Z6%2FWh%2FZ0gM1S6TPqHeupow%2F8GXesqUtq1fTeY8rmz0xxbxZm294ubC5NXMg%2FfNFG%2FJUp7TWccL6veOKvUetvjzbmBBjUksJfqs62sc41Yat%2FLxGst1uN%2Fr0vXzjstnD6ecN%2B2j1UQPjg9ULnp92raxfQ%2BXazCRq9iG4tQVHs75R6C3jN5PbViSyQmlnnCIuc%2FQrIuZ%2FA%2B6seIlbRp1hib9EFx7WxH%2FS5Sl1PEojQO6Zde5lLfO4QpCtiPjcho8DM3vu1q44KlSzTEME54OoeL%2FJWaH%2BkVRuVCwoLcEN8bbWUKdNtPS94TQwcPu3udKNT9INznNuk3m7%2F%2B8HvPdtJS8B93FalgomG12rSHb7Wymrvfgj0GQ8hTUDKZVWxyJ%2FfWCEF5xS%2FIlF28wwtz9Us74%2Bp37BYG2Hg1liNfItrukmLk2tgN4DPUfdC%2BX6BVaWK%2FWU5Z%2FWBBpTOdb7lt17gw%2FSAJGIHU4Ywl%2FWKqDzuxxbCc6rH4L8yMakhDCYmn4MSS6GJztDeAfga3ealg8ghz9BbATJpaZqgUuITT7gFe%2FO4Cr%2Fa0N%2Fpjjq1vMLa8l74GOqUB6qQ5Y61TA9nsAmykRzwPuzWrzETkEl56NEPmkBr28Db%2BANx2GxAGfNZtL5dEDg2OWukgzsoag9QhG90xMjKNpFPg8dvKrnLBzZlY0Mv2ylZae38fj4L8DqPRHWxYLUSOZs%2BJwkZ3WKLCX1ILMZqYEqEpty50g8TdICwzemADrcOAV3ljGHGPpZrYfH6JBwFHueuZmsuZFEhtIcqssy6hrpy%2Biizx&X-Amz-Signature=5e3d88bff9ad70fc23798d9c6cd98d3f7f31273adb5fc0f8ca907b82c842fcab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUPFQF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp7QIrOFJdAmoqz6y%2Bhb9u4zSh6cB0IkNMUrjYjFV9rAiEA1RXpLtJxKKjBFaKZcnRmerw2FBz%2FvvhcKCAKIK%2B3Km4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp4DYKPmlR%2FPiagDyrcA%2Fx0cxU61HxG2k40pPwLN%2FEcg3vgUSxFqDC1z1PzOUjeA2o50yrEW88IRuLMgcVhcP4Z6%2FWh%2FZ0gM1S6TPqHeupow%2F8GXesqUtq1fTeY8rmz0xxbxZm294ubC5NXMg%2FfNFG%2FJUp7TWccL6veOKvUetvjzbmBBjUksJfqs62sc41Yat%2FLxGst1uN%2Fr0vXzjstnD6ecN%2B2j1UQPjg9ULnp92raxfQ%2BXazCRq9iG4tQVHs75R6C3jN5PbViSyQmlnnCIuc%2FQrIuZ%2FA%2B6seIlbRp1hib9EFx7WxH%2FS5Sl1PEojQO6Zde5lLfO4QpCtiPjcho8DM3vu1q44KlSzTEME54OoeL%2FJWaH%2BkVRuVCwoLcEN8bbWUKdNtPS94TQwcPu3udKNT9INznNuk3m7%2F%2B8HvPdtJS8B93FalgomG12rSHb7Wymrvfgj0GQ8hTUDKZVWxyJ%2FfWCEF5xS%2FIlF28wwtz9Us74%2Bp37BYG2Hg1liNfItrukmLk2tgN4DPUfdC%2BX6BVaWK%2FWU5Z%2FWBBpTOdb7lt17gw%2FSAJGIHU4Ywl%2FWKqDzuxxbCc6rH4L8yMakhDCYmn4MSS6GJztDeAfga3ealg8ghz9BbATJpaZqgUuITT7gFe%2FO4Cr%2Fa0N%2Fpjjq1vMLa8l74GOqUB6qQ5Y61TA9nsAmykRzwPuzWrzETkEl56NEPmkBr28Db%2BANx2GxAGfNZtL5dEDg2OWukgzsoag9QhG90xMjKNpFPg8dvKrnLBzZlY0Mv2ylZae38fj4L8DqPRHWxYLUSOZs%2BJwkZ3WKLCX1ILMZqYEqEpty50g8TdICwzemADrcOAV3ljGHGPpZrYfH6JBwFHueuZmsuZFEhtIcqssy6hrpy%2Biizx&X-Amz-Signature=60dbae33205001199ece9ee5d06a9b1c69bd9efadb60b3da9899ec26542a2465&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUPFQF4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp7QIrOFJdAmoqz6y%2Bhb9u4zSh6cB0IkNMUrjYjFV9rAiEA1RXpLtJxKKjBFaKZcnRmerw2FBz%2FvvhcKCAKIK%2B3Km4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp4DYKPmlR%2FPiagDyrcA%2Fx0cxU61HxG2k40pPwLN%2FEcg3vgUSxFqDC1z1PzOUjeA2o50yrEW88IRuLMgcVhcP4Z6%2FWh%2FZ0gM1S6TPqHeupow%2F8GXesqUtq1fTeY8rmz0xxbxZm294ubC5NXMg%2FfNFG%2FJUp7TWccL6veOKvUetvjzbmBBjUksJfqs62sc41Yat%2FLxGst1uN%2Fr0vXzjstnD6ecN%2B2j1UQPjg9ULnp92raxfQ%2BXazCRq9iG4tQVHs75R6C3jN5PbViSyQmlnnCIuc%2FQrIuZ%2FA%2B6seIlbRp1hib9EFx7WxH%2FS5Sl1PEojQO6Zde5lLfO4QpCtiPjcho8DM3vu1q44KlSzTEME54OoeL%2FJWaH%2BkVRuVCwoLcEN8bbWUKdNtPS94TQwcPu3udKNT9INznNuk3m7%2F%2B8HvPdtJS8B93FalgomG12rSHb7Wymrvfgj0GQ8hTUDKZVWxyJ%2FfWCEF5xS%2FIlF28wwtz9Us74%2Bp37BYG2Hg1liNfItrukmLk2tgN4DPUfdC%2BX6BVaWK%2FWU5Z%2FWBBpTOdb7lt17gw%2FSAJGIHU4Ywl%2FWKqDzuxxbCc6rH4L8yMakhDCYmn4MSS6GJztDeAfga3ealg8ghz9BbATJpaZqgUuITT7gFe%2FO4Cr%2Fa0N%2Fpjjq1vMLa8l74GOqUB6qQ5Y61TA9nsAmykRzwPuzWrzETkEl56NEPmkBr28Db%2BANx2GxAGfNZtL5dEDg2OWukgzsoag9QhG90xMjKNpFPg8dvKrnLBzZlY0Mv2ylZae38fj4L8DqPRHWxYLUSOZs%2BJwkZ3WKLCX1ILMZqYEqEpty50g8TdICwzemADrcOAV3ljGHGPpZrYfH6JBwFHueuZmsuZFEhtIcqssy6hrpy%2Biizx&X-Amz-Signature=06604e301c2ed7f9770dc378e5b993f2de39e6fe151ec1a87209ec0cb40ea7b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
