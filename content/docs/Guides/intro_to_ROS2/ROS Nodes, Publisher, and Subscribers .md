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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTFNDZV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC4%2BwBApheqpHug9Iveae1KeclMyEO3cDu%2B5SPuL1lq%2BAiEA3Q8ga8eJNzzsLOEYhKw7YFy%2B44WGEQG47V8wuYpcWF0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBCBDGJBH6hvFmNRFyrcAzCDrbHFslIPw9aws5aFoLPv9Dt%2FKh4FKOP5OCbqp14y51QtKrJrDDtaM6rEboDap4RS66JYXZ6jSipKSPGTS7x%2BAH26gHICuDiw6vS%2BO4aIpFhlaMshVJxa0YwoR0NXkSjM%2FMrem5X1T1haXTfuRdVTBtOWy7nDrT1SUHtgP0L%2FCRCJczpVrTbE84eYbGcsPoCjFiVOBbbfNxCEh%2BjPmZhGnZv8YxicY9waVgDE6iJ0hRi95UtwhAkSM8wET%2FJajSksdZMELNUp2E%2B6Foxs5vkrSCZZFMZZ7wGzidiQTF3Oo1nQa6%2B0xzc0FfKux4AUeWt8oh1TxhYKF3Wf1v8cIzsWbCpuqtBZmFdbLwvAJHCNB1NkyknRqfggqBqvI99JlPa%2BfKC7duy4e8oQazCi%2BRDB6wRRC8k%2FQ6BlGKY3tlhKKyKWJ4rJqxV3wiVG6CAP9ZTUf9BQ613Dl6wA9becn8qWftCB8xC%2FwJhY0pc3NeMufTYgmy5P6pg05OuywIYozNKmt9AxDz9eA6MS5%2BLCo6eW9WOxQxPyeX9NQf2jnmugvhS%2FOiI23Uz%2F0uHIM0INEIITauy%2BqlpG8JAjafIqME8zN0k94WDmWZt0Zlm3EFMJondvctmWIikMfBmCMLbFkr0GOqUB8D0Q0OIS01kpdDTrNfG2QOwWfyrwds475uc85qKsTFFCAE1uc0xGSvkLODVyaF9pt6nfvFlroY2XaPhqODMAtbupl46A74%2FQnV2AmWRVVrNQGc%2FWuNn%2FhsT%2FnB8tkJ219qo2CgVAMD6iW8v9Ff2qEKBVDehQhwqPAMyDlNW8k%2BB0E6zlb71KFASf9J9VugBupLOCI4Gex%2Fw0gPPZb5jomXyTNoID&X-Amz-Signature=03a0019989057b184739c173262f0d0b8c2184d437070109815468eaff67164c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTFNDZV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC4%2BwBApheqpHug9Iveae1KeclMyEO3cDu%2B5SPuL1lq%2BAiEA3Q8ga8eJNzzsLOEYhKw7YFy%2B44WGEQG47V8wuYpcWF0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBCBDGJBH6hvFmNRFyrcAzCDrbHFslIPw9aws5aFoLPv9Dt%2FKh4FKOP5OCbqp14y51QtKrJrDDtaM6rEboDap4RS66JYXZ6jSipKSPGTS7x%2BAH26gHICuDiw6vS%2BO4aIpFhlaMshVJxa0YwoR0NXkSjM%2FMrem5X1T1haXTfuRdVTBtOWy7nDrT1SUHtgP0L%2FCRCJczpVrTbE84eYbGcsPoCjFiVOBbbfNxCEh%2BjPmZhGnZv8YxicY9waVgDE6iJ0hRi95UtwhAkSM8wET%2FJajSksdZMELNUp2E%2B6Foxs5vkrSCZZFMZZ7wGzidiQTF3Oo1nQa6%2B0xzc0FfKux4AUeWt8oh1TxhYKF3Wf1v8cIzsWbCpuqtBZmFdbLwvAJHCNB1NkyknRqfggqBqvI99JlPa%2BfKC7duy4e8oQazCi%2BRDB6wRRC8k%2FQ6BlGKY3tlhKKyKWJ4rJqxV3wiVG6CAP9ZTUf9BQ613Dl6wA9becn8qWftCB8xC%2FwJhY0pc3NeMufTYgmy5P6pg05OuywIYozNKmt9AxDz9eA6MS5%2BLCo6eW9WOxQxPyeX9NQf2jnmugvhS%2FOiI23Uz%2F0uHIM0INEIITauy%2BqlpG8JAjafIqME8zN0k94WDmWZt0Zlm3EFMJondvctmWIikMfBmCMLbFkr0GOqUB8D0Q0OIS01kpdDTrNfG2QOwWfyrwds475uc85qKsTFFCAE1uc0xGSvkLODVyaF9pt6nfvFlroY2XaPhqODMAtbupl46A74%2FQnV2AmWRVVrNQGc%2FWuNn%2FhsT%2FnB8tkJ219qo2CgVAMD6iW8v9Ff2qEKBVDehQhwqPAMyDlNW8k%2BB0E6zlb71KFASf9J9VugBupLOCI4Gex%2Fw0gPPZb5jomXyTNoID&X-Amz-Signature=ddd52582a85d4a5accb037eaaf9d80acf7506f7b259b654c35cb3e64572266d9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTFNDZV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC4%2BwBApheqpHug9Iveae1KeclMyEO3cDu%2B5SPuL1lq%2BAiEA3Q8ga8eJNzzsLOEYhKw7YFy%2B44WGEQG47V8wuYpcWF0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBCBDGJBH6hvFmNRFyrcAzCDrbHFslIPw9aws5aFoLPv9Dt%2FKh4FKOP5OCbqp14y51QtKrJrDDtaM6rEboDap4RS66JYXZ6jSipKSPGTS7x%2BAH26gHICuDiw6vS%2BO4aIpFhlaMshVJxa0YwoR0NXkSjM%2FMrem5X1T1haXTfuRdVTBtOWy7nDrT1SUHtgP0L%2FCRCJczpVrTbE84eYbGcsPoCjFiVOBbbfNxCEh%2BjPmZhGnZv8YxicY9waVgDE6iJ0hRi95UtwhAkSM8wET%2FJajSksdZMELNUp2E%2B6Foxs5vkrSCZZFMZZ7wGzidiQTF3Oo1nQa6%2B0xzc0FfKux4AUeWt8oh1TxhYKF3Wf1v8cIzsWbCpuqtBZmFdbLwvAJHCNB1NkyknRqfggqBqvI99JlPa%2BfKC7duy4e8oQazCi%2BRDB6wRRC8k%2FQ6BlGKY3tlhKKyKWJ4rJqxV3wiVG6CAP9ZTUf9BQ613Dl6wA9becn8qWftCB8xC%2FwJhY0pc3NeMufTYgmy5P6pg05OuywIYozNKmt9AxDz9eA6MS5%2BLCo6eW9WOxQxPyeX9NQf2jnmugvhS%2FOiI23Uz%2F0uHIM0INEIITauy%2BqlpG8JAjafIqME8zN0k94WDmWZt0Zlm3EFMJondvctmWIikMfBmCMLbFkr0GOqUB8D0Q0OIS01kpdDTrNfG2QOwWfyrwds475uc85qKsTFFCAE1uc0xGSvkLODVyaF9pt6nfvFlroY2XaPhqODMAtbupl46A74%2FQnV2AmWRVVrNQGc%2FWuNn%2FhsT%2FnB8tkJ219qo2CgVAMD6iW8v9Ff2qEKBVDehQhwqPAMyDlNW8k%2BB0E6zlb71KFASf9J9VugBupLOCI4Gex%2Fw0gPPZb5jomXyTNoID&X-Amz-Signature=64c8724ae433a29154eb7348eebd0885e7bf241ffc56971eed6135de9af14f15&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTFNDZV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC4%2BwBApheqpHug9Iveae1KeclMyEO3cDu%2B5SPuL1lq%2BAiEA3Q8ga8eJNzzsLOEYhKw7YFy%2B44WGEQG47V8wuYpcWF0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBCBDGJBH6hvFmNRFyrcAzCDrbHFslIPw9aws5aFoLPv9Dt%2FKh4FKOP5OCbqp14y51QtKrJrDDtaM6rEboDap4RS66JYXZ6jSipKSPGTS7x%2BAH26gHICuDiw6vS%2BO4aIpFhlaMshVJxa0YwoR0NXkSjM%2FMrem5X1T1haXTfuRdVTBtOWy7nDrT1SUHtgP0L%2FCRCJczpVrTbE84eYbGcsPoCjFiVOBbbfNxCEh%2BjPmZhGnZv8YxicY9waVgDE6iJ0hRi95UtwhAkSM8wET%2FJajSksdZMELNUp2E%2B6Foxs5vkrSCZZFMZZ7wGzidiQTF3Oo1nQa6%2B0xzc0FfKux4AUeWt8oh1TxhYKF3Wf1v8cIzsWbCpuqtBZmFdbLwvAJHCNB1NkyknRqfggqBqvI99JlPa%2BfKC7duy4e8oQazCi%2BRDB6wRRC8k%2FQ6BlGKY3tlhKKyKWJ4rJqxV3wiVG6CAP9ZTUf9BQ613Dl6wA9becn8qWftCB8xC%2FwJhY0pc3NeMufTYgmy5P6pg05OuywIYozNKmt9AxDz9eA6MS5%2BLCo6eW9WOxQxPyeX9NQf2jnmugvhS%2FOiI23Uz%2F0uHIM0INEIITauy%2BqlpG8JAjafIqME8zN0k94WDmWZt0Zlm3EFMJondvctmWIikMfBmCMLbFkr0GOqUB8D0Q0OIS01kpdDTrNfG2QOwWfyrwds475uc85qKsTFFCAE1uc0xGSvkLODVyaF9pt6nfvFlroY2XaPhqODMAtbupl46A74%2FQnV2AmWRVVrNQGc%2FWuNn%2FhsT%2FnB8tkJ219qo2CgVAMD6iW8v9Ff2qEKBVDehQhwqPAMyDlNW8k%2BB0E6zlb71KFASf9J9VugBupLOCI4Gex%2Fw0gPPZb5jomXyTNoID&X-Amz-Signature=6fa346d27e572af5046a55cf402b45f723d3da25ca65c2f0cc2724e451855b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTFNDZV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC4%2BwBApheqpHug9Iveae1KeclMyEO3cDu%2B5SPuL1lq%2BAiEA3Q8ga8eJNzzsLOEYhKw7YFy%2B44WGEQG47V8wuYpcWF0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBCBDGJBH6hvFmNRFyrcAzCDrbHFslIPw9aws5aFoLPv9Dt%2FKh4FKOP5OCbqp14y51QtKrJrDDtaM6rEboDap4RS66JYXZ6jSipKSPGTS7x%2BAH26gHICuDiw6vS%2BO4aIpFhlaMshVJxa0YwoR0NXkSjM%2FMrem5X1T1haXTfuRdVTBtOWy7nDrT1SUHtgP0L%2FCRCJczpVrTbE84eYbGcsPoCjFiVOBbbfNxCEh%2BjPmZhGnZv8YxicY9waVgDE6iJ0hRi95UtwhAkSM8wET%2FJajSksdZMELNUp2E%2B6Foxs5vkrSCZZFMZZ7wGzidiQTF3Oo1nQa6%2B0xzc0FfKux4AUeWt8oh1TxhYKF3Wf1v8cIzsWbCpuqtBZmFdbLwvAJHCNB1NkyknRqfggqBqvI99JlPa%2BfKC7duy4e8oQazCi%2BRDB6wRRC8k%2FQ6BlGKY3tlhKKyKWJ4rJqxV3wiVG6CAP9ZTUf9BQ613Dl6wA9becn8qWftCB8xC%2FwJhY0pc3NeMufTYgmy5P6pg05OuywIYozNKmt9AxDz9eA6MS5%2BLCo6eW9WOxQxPyeX9NQf2jnmugvhS%2FOiI23Uz%2F0uHIM0INEIITauy%2BqlpG8JAjafIqME8zN0k94WDmWZt0Zlm3EFMJondvctmWIikMfBmCMLbFkr0GOqUB8D0Q0OIS01kpdDTrNfG2QOwWfyrwds475uc85qKsTFFCAE1uc0xGSvkLODVyaF9pt6nfvFlroY2XaPhqODMAtbupl46A74%2FQnV2AmWRVVrNQGc%2FWuNn%2FhsT%2FnB8tkJ219qo2CgVAMD6iW8v9Ff2qEKBVDehQhwqPAMyDlNW8k%2BB0E6zlb71KFASf9J9VugBupLOCI4Gex%2Fw0gPPZb5jomXyTNoID&X-Amz-Signature=bc1147785be9d0e272913ea3f8d1c5491e2fff6bdf4a42514f32cecc4c7a0492&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTFNDZV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC4%2BwBApheqpHug9Iveae1KeclMyEO3cDu%2B5SPuL1lq%2BAiEA3Q8ga8eJNzzsLOEYhKw7YFy%2B44WGEQG47V8wuYpcWF0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBCBDGJBH6hvFmNRFyrcAzCDrbHFslIPw9aws5aFoLPv9Dt%2FKh4FKOP5OCbqp14y51QtKrJrDDtaM6rEboDap4RS66JYXZ6jSipKSPGTS7x%2BAH26gHICuDiw6vS%2BO4aIpFhlaMshVJxa0YwoR0NXkSjM%2FMrem5X1T1haXTfuRdVTBtOWy7nDrT1SUHtgP0L%2FCRCJczpVrTbE84eYbGcsPoCjFiVOBbbfNxCEh%2BjPmZhGnZv8YxicY9waVgDE6iJ0hRi95UtwhAkSM8wET%2FJajSksdZMELNUp2E%2B6Foxs5vkrSCZZFMZZ7wGzidiQTF3Oo1nQa6%2B0xzc0FfKux4AUeWt8oh1TxhYKF3Wf1v8cIzsWbCpuqtBZmFdbLwvAJHCNB1NkyknRqfggqBqvI99JlPa%2BfKC7duy4e8oQazCi%2BRDB6wRRC8k%2FQ6BlGKY3tlhKKyKWJ4rJqxV3wiVG6CAP9ZTUf9BQ613Dl6wA9becn8qWftCB8xC%2FwJhY0pc3NeMufTYgmy5P6pg05OuywIYozNKmt9AxDz9eA6MS5%2BLCo6eW9WOxQxPyeX9NQf2jnmugvhS%2FOiI23Uz%2F0uHIM0INEIITauy%2BqlpG8JAjafIqME8zN0k94WDmWZt0Zlm3EFMJondvctmWIikMfBmCMLbFkr0GOqUB8D0Q0OIS01kpdDTrNfG2QOwWfyrwds475uc85qKsTFFCAE1uc0xGSvkLODVyaF9pt6nfvFlroY2XaPhqODMAtbupl46A74%2FQnV2AmWRVVrNQGc%2FWuNn%2FhsT%2FnB8tkJ219qo2CgVAMD6iW8v9Ff2qEKBVDehQhwqPAMyDlNW8k%2BB0E6zlb71KFASf9J9VugBupLOCI4Gex%2Fw0gPPZb5jomXyTNoID&X-Amz-Signature=0fa65117a60b7822d1a8f58765719271714376bdeb1a1f0aba2dbe6a8ee68a25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTFNDZV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC4%2BwBApheqpHug9Iveae1KeclMyEO3cDu%2B5SPuL1lq%2BAiEA3Q8ga8eJNzzsLOEYhKw7YFy%2B44WGEQG47V8wuYpcWF0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBCBDGJBH6hvFmNRFyrcAzCDrbHFslIPw9aws5aFoLPv9Dt%2FKh4FKOP5OCbqp14y51QtKrJrDDtaM6rEboDap4RS66JYXZ6jSipKSPGTS7x%2BAH26gHICuDiw6vS%2BO4aIpFhlaMshVJxa0YwoR0NXkSjM%2FMrem5X1T1haXTfuRdVTBtOWy7nDrT1SUHtgP0L%2FCRCJczpVrTbE84eYbGcsPoCjFiVOBbbfNxCEh%2BjPmZhGnZv8YxicY9waVgDE6iJ0hRi95UtwhAkSM8wET%2FJajSksdZMELNUp2E%2B6Foxs5vkrSCZZFMZZ7wGzidiQTF3Oo1nQa6%2B0xzc0FfKux4AUeWt8oh1TxhYKF3Wf1v8cIzsWbCpuqtBZmFdbLwvAJHCNB1NkyknRqfggqBqvI99JlPa%2BfKC7duy4e8oQazCi%2BRDB6wRRC8k%2FQ6BlGKY3tlhKKyKWJ4rJqxV3wiVG6CAP9ZTUf9BQ613Dl6wA9becn8qWftCB8xC%2FwJhY0pc3NeMufTYgmy5P6pg05OuywIYozNKmt9AxDz9eA6MS5%2BLCo6eW9WOxQxPyeX9NQf2jnmugvhS%2FOiI23Uz%2F0uHIM0INEIITauy%2BqlpG8JAjafIqME8zN0k94WDmWZt0Zlm3EFMJondvctmWIikMfBmCMLbFkr0GOqUB8D0Q0OIS01kpdDTrNfG2QOwWfyrwds475uc85qKsTFFCAE1uc0xGSvkLODVyaF9pt6nfvFlroY2XaPhqODMAtbupl46A74%2FQnV2AmWRVVrNQGc%2FWuNn%2FhsT%2FnB8tkJ219qo2CgVAMD6iW8v9Ff2qEKBVDehQhwqPAMyDlNW8k%2BB0E6zlb71KFASf9J9VugBupLOCI4Gex%2Fw0gPPZb5jomXyTNoID&X-Amz-Signature=eb0ba5f560dc9ce2681e58bad9dde91830939cb572817dedb06206be990a7785&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTFNDZV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC4%2BwBApheqpHug9Iveae1KeclMyEO3cDu%2B5SPuL1lq%2BAiEA3Q8ga8eJNzzsLOEYhKw7YFy%2B44WGEQG47V8wuYpcWF0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBCBDGJBH6hvFmNRFyrcAzCDrbHFslIPw9aws5aFoLPv9Dt%2FKh4FKOP5OCbqp14y51QtKrJrDDtaM6rEboDap4RS66JYXZ6jSipKSPGTS7x%2BAH26gHICuDiw6vS%2BO4aIpFhlaMshVJxa0YwoR0NXkSjM%2FMrem5X1T1haXTfuRdVTBtOWy7nDrT1SUHtgP0L%2FCRCJczpVrTbE84eYbGcsPoCjFiVOBbbfNxCEh%2BjPmZhGnZv8YxicY9waVgDE6iJ0hRi95UtwhAkSM8wET%2FJajSksdZMELNUp2E%2B6Foxs5vkrSCZZFMZZ7wGzidiQTF3Oo1nQa6%2B0xzc0FfKux4AUeWt8oh1TxhYKF3Wf1v8cIzsWbCpuqtBZmFdbLwvAJHCNB1NkyknRqfggqBqvI99JlPa%2BfKC7duy4e8oQazCi%2BRDB6wRRC8k%2FQ6BlGKY3tlhKKyKWJ4rJqxV3wiVG6CAP9ZTUf9BQ613Dl6wA9becn8qWftCB8xC%2FwJhY0pc3NeMufTYgmy5P6pg05OuywIYozNKmt9AxDz9eA6MS5%2BLCo6eW9WOxQxPyeX9NQf2jnmugvhS%2FOiI23Uz%2F0uHIM0INEIITauy%2BqlpG8JAjafIqME8zN0k94WDmWZt0Zlm3EFMJondvctmWIikMfBmCMLbFkr0GOqUB8D0Q0OIS01kpdDTrNfG2QOwWfyrwds475uc85qKsTFFCAE1uc0xGSvkLODVyaF9pt6nfvFlroY2XaPhqODMAtbupl46A74%2FQnV2AmWRVVrNQGc%2FWuNn%2FhsT%2FnB8tkJ219qo2CgVAMD6iW8v9Ff2qEKBVDehQhwqPAMyDlNW8k%2BB0E6zlb71KFASf9J9VugBupLOCI4Gex%2Fw0gPPZb5jomXyTNoID&X-Amz-Signature=18377108e6d75302dc6799fbaac844d2b563f6c4f416a78d564b457d84db42e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
