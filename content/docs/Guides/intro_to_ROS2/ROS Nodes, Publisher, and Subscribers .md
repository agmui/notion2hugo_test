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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPASSKL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F2prwj4uRO6E6PGi5KHPehjxWLORGBAerGG4LzRKjKAiBAMoS6425TsUL3mFjTko%2F2HUBf90EzLl2wkeeJCIfhDCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95wFfwaVnCZxU%2BYKtwDS0WHx9qQFaS%2BJU3jVdSWUYteTJMN3%2F65IgFv6AWgw1a%2FzxW0XC9Y8yxqw0Do2kOBqd1RkHyB7LyYU0OF9ebciJvpiMNdGR3aCmDw6JgkinbPeTsE2KkMmix5JEjqGvAAsrqG701EgbFcxzWfAeWhAmRAkVd7oEtJLkvN7%2B53Y07TVd%2FjIooo56x5r6GuKJtTD0rbDVJCaLTUFw12q7mhKkRwgZgwkE5MQ%2Bf6FDhHtP1qq%2BuD%2FNgYRDM9m9T58mMqJwFc3ehuPtDsmXYvgZJ835rR4idmYmctLR2g30CCNx6noazBnNEDXsbFupV9bd%2FHGGdpn4%2F28ZkhKhFZFpJHyJ6TLWuO589b%2Fon45w6yqjTBy5Yhg%2Fqmw4v9AK0%2FpHHsbeSjLWkMmkNM6nRv9faJsDkOl7u5thFWOeR7Yj9Dnpl0Xp5LuISmjqbPETvBqtGsyuOxByxkRXTxbQYLHGgaatxAbJUYTGM7orb4e8HerPw%2FppS1lT%2FMy7H0NUSb46BhZSYaeaNk37jM3h%2Fl%2F%2Ff7Ue3s7A%2FRT0m2Vh069vdCvSCDpB1phTBHv6xlybgpbIfRTFfWQ%2BdwB2C3yYyAR%2BeXTOAy5CXQcL4e8t6AB96ozs%2BjS0ZVsljKvXnSRrsw85z8vAY6pgEaZCq3F056tSKTFn9MtOcMsJ7M0rmAs0kjdsYxnM5kRwTzKUzr7Iw3U%2Fsr9PieCW0vxiRzqKNtbSFZO%2FEsL7P5ibq6WRDbV%2FnZ6%2F23332GDCOGwiJV7RHBuEuPDptr4iOolIWVJbGi67YWntb7AzVMa3y8Ci7whVXx%2B6Jo%2FuFrYBtOmSKvdBAjVr5neNR5%2Fq%2FamVm6K0NtqZhTMX6pWaG82MX2FHss&X-Amz-Signature=a9a3da96d0a4cfcc8cdd9a1c76411d0da9b3748707faaf4a01da0fc72042e9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPASSKL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F2prwj4uRO6E6PGi5KHPehjxWLORGBAerGG4LzRKjKAiBAMoS6425TsUL3mFjTko%2F2HUBf90EzLl2wkeeJCIfhDCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95wFfwaVnCZxU%2BYKtwDS0WHx9qQFaS%2BJU3jVdSWUYteTJMN3%2F65IgFv6AWgw1a%2FzxW0XC9Y8yxqw0Do2kOBqd1RkHyB7LyYU0OF9ebciJvpiMNdGR3aCmDw6JgkinbPeTsE2KkMmix5JEjqGvAAsrqG701EgbFcxzWfAeWhAmRAkVd7oEtJLkvN7%2B53Y07TVd%2FjIooo56x5r6GuKJtTD0rbDVJCaLTUFw12q7mhKkRwgZgwkE5MQ%2Bf6FDhHtP1qq%2BuD%2FNgYRDM9m9T58mMqJwFc3ehuPtDsmXYvgZJ835rR4idmYmctLR2g30CCNx6noazBnNEDXsbFupV9bd%2FHGGdpn4%2F28ZkhKhFZFpJHyJ6TLWuO589b%2Fon45w6yqjTBy5Yhg%2Fqmw4v9AK0%2FpHHsbeSjLWkMmkNM6nRv9faJsDkOl7u5thFWOeR7Yj9Dnpl0Xp5LuISmjqbPETvBqtGsyuOxByxkRXTxbQYLHGgaatxAbJUYTGM7orb4e8HerPw%2FppS1lT%2FMy7H0NUSb46BhZSYaeaNk37jM3h%2Fl%2F%2Ff7Ue3s7A%2FRT0m2Vh069vdCvSCDpB1phTBHv6xlybgpbIfRTFfWQ%2BdwB2C3yYyAR%2BeXTOAy5CXQcL4e8t6AB96ozs%2BjS0ZVsljKvXnSRrsw85z8vAY6pgEaZCq3F056tSKTFn9MtOcMsJ7M0rmAs0kjdsYxnM5kRwTzKUzr7Iw3U%2Fsr9PieCW0vxiRzqKNtbSFZO%2FEsL7P5ibq6WRDbV%2FnZ6%2F23332GDCOGwiJV7RHBuEuPDptr4iOolIWVJbGi67YWntb7AzVMa3y8Ci7whVXx%2B6Jo%2FuFrYBtOmSKvdBAjVr5neNR5%2Fq%2FamVm6K0NtqZhTMX6pWaG82MX2FHss&X-Amz-Signature=e0057e53d670d358e7c19c32247bf9ee661685035b4f4bd5d4333a43b4a40f06&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPASSKL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F2prwj4uRO6E6PGi5KHPehjxWLORGBAerGG4LzRKjKAiBAMoS6425TsUL3mFjTko%2F2HUBf90EzLl2wkeeJCIfhDCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95wFfwaVnCZxU%2BYKtwDS0WHx9qQFaS%2BJU3jVdSWUYteTJMN3%2F65IgFv6AWgw1a%2FzxW0XC9Y8yxqw0Do2kOBqd1RkHyB7LyYU0OF9ebciJvpiMNdGR3aCmDw6JgkinbPeTsE2KkMmix5JEjqGvAAsrqG701EgbFcxzWfAeWhAmRAkVd7oEtJLkvN7%2B53Y07TVd%2FjIooo56x5r6GuKJtTD0rbDVJCaLTUFw12q7mhKkRwgZgwkE5MQ%2Bf6FDhHtP1qq%2BuD%2FNgYRDM9m9T58mMqJwFc3ehuPtDsmXYvgZJ835rR4idmYmctLR2g30CCNx6noazBnNEDXsbFupV9bd%2FHGGdpn4%2F28ZkhKhFZFpJHyJ6TLWuO589b%2Fon45w6yqjTBy5Yhg%2Fqmw4v9AK0%2FpHHsbeSjLWkMmkNM6nRv9faJsDkOl7u5thFWOeR7Yj9Dnpl0Xp5LuISmjqbPETvBqtGsyuOxByxkRXTxbQYLHGgaatxAbJUYTGM7orb4e8HerPw%2FppS1lT%2FMy7H0NUSb46BhZSYaeaNk37jM3h%2Fl%2F%2Ff7Ue3s7A%2FRT0m2Vh069vdCvSCDpB1phTBHv6xlybgpbIfRTFfWQ%2BdwB2C3yYyAR%2BeXTOAy5CXQcL4e8t6AB96ozs%2BjS0ZVsljKvXnSRrsw85z8vAY6pgEaZCq3F056tSKTFn9MtOcMsJ7M0rmAs0kjdsYxnM5kRwTzKUzr7Iw3U%2Fsr9PieCW0vxiRzqKNtbSFZO%2FEsL7P5ibq6WRDbV%2FnZ6%2F23332GDCOGwiJV7RHBuEuPDptr4iOolIWVJbGi67YWntb7AzVMa3y8Ci7whVXx%2B6Jo%2FuFrYBtOmSKvdBAjVr5neNR5%2Fq%2FamVm6K0NtqZhTMX6pWaG82MX2FHss&X-Amz-Signature=b74abf3e9897f980387f66a79339aab2bac905cc18ec332e396ed411c867c8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPASSKL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F2prwj4uRO6E6PGi5KHPehjxWLORGBAerGG4LzRKjKAiBAMoS6425TsUL3mFjTko%2F2HUBf90EzLl2wkeeJCIfhDCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95wFfwaVnCZxU%2BYKtwDS0WHx9qQFaS%2BJU3jVdSWUYteTJMN3%2F65IgFv6AWgw1a%2FzxW0XC9Y8yxqw0Do2kOBqd1RkHyB7LyYU0OF9ebciJvpiMNdGR3aCmDw6JgkinbPeTsE2KkMmix5JEjqGvAAsrqG701EgbFcxzWfAeWhAmRAkVd7oEtJLkvN7%2B53Y07TVd%2FjIooo56x5r6GuKJtTD0rbDVJCaLTUFw12q7mhKkRwgZgwkE5MQ%2Bf6FDhHtP1qq%2BuD%2FNgYRDM9m9T58mMqJwFc3ehuPtDsmXYvgZJ835rR4idmYmctLR2g30CCNx6noazBnNEDXsbFupV9bd%2FHGGdpn4%2F28ZkhKhFZFpJHyJ6TLWuO589b%2Fon45w6yqjTBy5Yhg%2Fqmw4v9AK0%2FpHHsbeSjLWkMmkNM6nRv9faJsDkOl7u5thFWOeR7Yj9Dnpl0Xp5LuISmjqbPETvBqtGsyuOxByxkRXTxbQYLHGgaatxAbJUYTGM7orb4e8HerPw%2FppS1lT%2FMy7H0NUSb46BhZSYaeaNk37jM3h%2Fl%2F%2Ff7Ue3s7A%2FRT0m2Vh069vdCvSCDpB1phTBHv6xlybgpbIfRTFfWQ%2BdwB2C3yYyAR%2BeXTOAy5CXQcL4e8t6AB96ozs%2BjS0ZVsljKvXnSRrsw85z8vAY6pgEaZCq3F056tSKTFn9MtOcMsJ7M0rmAs0kjdsYxnM5kRwTzKUzr7Iw3U%2Fsr9PieCW0vxiRzqKNtbSFZO%2FEsL7P5ibq6WRDbV%2FnZ6%2F23332GDCOGwiJV7RHBuEuPDptr4iOolIWVJbGi67YWntb7AzVMa3y8Ci7whVXx%2B6Jo%2FuFrYBtOmSKvdBAjVr5neNR5%2Fq%2FamVm6K0NtqZhTMX6pWaG82MX2FHss&X-Amz-Signature=cce786e14bbfb3d198b8bb0bfac6fd3d6c245900c3b9f31f6bc87d2f5014206d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPASSKL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F2prwj4uRO6E6PGi5KHPehjxWLORGBAerGG4LzRKjKAiBAMoS6425TsUL3mFjTko%2F2HUBf90EzLl2wkeeJCIfhDCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95wFfwaVnCZxU%2BYKtwDS0WHx9qQFaS%2BJU3jVdSWUYteTJMN3%2F65IgFv6AWgw1a%2FzxW0XC9Y8yxqw0Do2kOBqd1RkHyB7LyYU0OF9ebciJvpiMNdGR3aCmDw6JgkinbPeTsE2KkMmix5JEjqGvAAsrqG701EgbFcxzWfAeWhAmRAkVd7oEtJLkvN7%2B53Y07TVd%2FjIooo56x5r6GuKJtTD0rbDVJCaLTUFw12q7mhKkRwgZgwkE5MQ%2Bf6FDhHtP1qq%2BuD%2FNgYRDM9m9T58mMqJwFc3ehuPtDsmXYvgZJ835rR4idmYmctLR2g30CCNx6noazBnNEDXsbFupV9bd%2FHGGdpn4%2F28ZkhKhFZFpJHyJ6TLWuO589b%2Fon45w6yqjTBy5Yhg%2Fqmw4v9AK0%2FpHHsbeSjLWkMmkNM6nRv9faJsDkOl7u5thFWOeR7Yj9Dnpl0Xp5LuISmjqbPETvBqtGsyuOxByxkRXTxbQYLHGgaatxAbJUYTGM7orb4e8HerPw%2FppS1lT%2FMy7H0NUSb46BhZSYaeaNk37jM3h%2Fl%2F%2Ff7Ue3s7A%2FRT0m2Vh069vdCvSCDpB1phTBHv6xlybgpbIfRTFfWQ%2BdwB2C3yYyAR%2BeXTOAy5CXQcL4e8t6AB96ozs%2BjS0ZVsljKvXnSRrsw85z8vAY6pgEaZCq3F056tSKTFn9MtOcMsJ7M0rmAs0kjdsYxnM5kRwTzKUzr7Iw3U%2Fsr9PieCW0vxiRzqKNtbSFZO%2FEsL7P5ibq6WRDbV%2FnZ6%2F23332GDCOGwiJV7RHBuEuPDptr4iOolIWVJbGi67YWntb7AzVMa3y8Ci7whVXx%2B6Jo%2FuFrYBtOmSKvdBAjVr5neNR5%2Fq%2FamVm6K0NtqZhTMX6pWaG82MX2FHss&X-Amz-Signature=42e99e7e9ce30abf1243ff5e0dfa3fcc2c840d5e5f9406bd45adbeaa32733b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPASSKL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F2prwj4uRO6E6PGi5KHPehjxWLORGBAerGG4LzRKjKAiBAMoS6425TsUL3mFjTko%2F2HUBf90EzLl2wkeeJCIfhDCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95wFfwaVnCZxU%2BYKtwDS0WHx9qQFaS%2BJU3jVdSWUYteTJMN3%2F65IgFv6AWgw1a%2FzxW0XC9Y8yxqw0Do2kOBqd1RkHyB7LyYU0OF9ebciJvpiMNdGR3aCmDw6JgkinbPeTsE2KkMmix5JEjqGvAAsrqG701EgbFcxzWfAeWhAmRAkVd7oEtJLkvN7%2B53Y07TVd%2FjIooo56x5r6GuKJtTD0rbDVJCaLTUFw12q7mhKkRwgZgwkE5MQ%2Bf6FDhHtP1qq%2BuD%2FNgYRDM9m9T58mMqJwFc3ehuPtDsmXYvgZJ835rR4idmYmctLR2g30CCNx6noazBnNEDXsbFupV9bd%2FHGGdpn4%2F28ZkhKhFZFpJHyJ6TLWuO589b%2Fon45w6yqjTBy5Yhg%2Fqmw4v9AK0%2FpHHsbeSjLWkMmkNM6nRv9faJsDkOl7u5thFWOeR7Yj9Dnpl0Xp5LuISmjqbPETvBqtGsyuOxByxkRXTxbQYLHGgaatxAbJUYTGM7orb4e8HerPw%2FppS1lT%2FMy7H0NUSb46BhZSYaeaNk37jM3h%2Fl%2F%2Ff7Ue3s7A%2FRT0m2Vh069vdCvSCDpB1phTBHv6xlybgpbIfRTFfWQ%2BdwB2C3yYyAR%2BeXTOAy5CXQcL4e8t6AB96ozs%2BjS0ZVsljKvXnSRrsw85z8vAY6pgEaZCq3F056tSKTFn9MtOcMsJ7M0rmAs0kjdsYxnM5kRwTzKUzr7Iw3U%2Fsr9PieCW0vxiRzqKNtbSFZO%2FEsL7P5ibq6WRDbV%2FnZ6%2F23332GDCOGwiJV7RHBuEuPDptr4iOolIWVJbGi67YWntb7AzVMa3y8Ci7whVXx%2B6Jo%2FuFrYBtOmSKvdBAjVr5neNR5%2Fq%2FamVm6K0NtqZhTMX6pWaG82MX2FHss&X-Amz-Signature=dd35e305c8494170aaa4b0a0521a0ad2bd46587c653c56c4fe1211ff0f1d5d08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPASSKL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F2prwj4uRO6E6PGi5KHPehjxWLORGBAerGG4LzRKjKAiBAMoS6425TsUL3mFjTko%2F2HUBf90EzLl2wkeeJCIfhDCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95wFfwaVnCZxU%2BYKtwDS0WHx9qQFaS%2BJU3jVdSWUYteTJMN3%2F65IgFv6AWgw1a%2FzxW0XC9Y8yxqw0Do2kOBqd1RkHyB7LyYU0OF9ebciJvpiMNdGR3aCmDw6JgkinbPeTsE2KkMmix5JEjqGvAAsrqG701EgbFcxzWfAeWhAmRAkVd7oEtJLkvN7%2B53Y07TVd%2FjIooo56x5r6GuKJtTD0rbDVJCaLTUFw12q7mhKkRwgZgwkE5MQ%2Bf6FDhHtP1qq%2BuD%2FNgYRDM9m9T58mMqJwFc3ehuPtDsmXYvgZJ835rR4idmYmctLR2g30CCNx6noazBnNEDXsbFupV9bd%2FHGGdpn4%2F28ZkhKhFZFpJHyJ6TLWuO589b%2Fon45w6yqjTBy5Yhg%2Fqmw4v9AK0%2FpHHsbeSjLWkMmkNM6nRv9faJsDkOl7u5thFWOeR7Yj9Dnpl0Xp5LuISmjqbPETvBqtGsyuOxByxkRXTxbQYLHGgaatxAbJUYTGM7orb4e8HerPw%2FppS1lT%2FMy7H0NUSb46BhZSYaeaNk37jM3h%2Fl%2F%2Ff7Ue3s7A%2FRT0m2Vh069vdCvSCDpB1phTBHv6xlybgpbIfRTFfWQ%2BdwB2C3yYyAR%2BeXTOAy5CXQcL4e8t6AB96ozs%2BjS0ZVsljKvXnSRrsw85z8vAY6pgEaZCq3F056tSKTFn9MtOcMsJ7M0rmAs0kjdsYxnM5kRwTzKUzr7Iw3U%2Fsr9PieCW0vxiRzqKNtbSFZO%2FEsL7P5ibq6WRDbV%2FnZ6%2F23332GDCOGwiJV7RHBuEuPDptr4iOolIWVJbGi67YWntb7AzVMa3y8Ci7whVXx%2B6Jo%2FuFrYBtOmSKvdBAjVr5neNR5%2Fq%2FamVm6K0NtqZhTMX6pWaG82MX2FHss&X-Amz-Signature=761deb4fe4f466fa4924d787d3ff22093525fcbb2153f0cc4bd9ce4014c08e89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPASSKL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F2prwj4uRO6E6PGi5KHPehjxWLORGBAerGG4LzRKjKAiBAMoS6425TsUL3mFjTko%2F2HUBf90EzLl2wkeeJCIfhDCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95wFfwaVnCZxU%2BYKtwDS0WHx9qQFaS%2BJU3jVdSWUYteTJMN3%2F65IgFv6AWgw1a%2FzxW0XC9Y8yxqw0Do2kOBqd1RkHyB7LyYU0OF9ebciJvpiMNdGR3aCmDw6JgkinbPeTsE2KkMmix5JEjqGvAAsrqG701EgbFcxzWfAeWhAmRAkVd7oEtJLkvN7%2B53Y07TVd%2FjIooo56x5r6GuKJtTD0rbDVJCaLTUFw12q7mhKkRwgZgwkE5MQ%2Bf6FDhHtP1qq%2BuD%2FNgYRDM9m9T58mMqJwFc3ehuPtDsmXYvgZJ835rR4idmYmctLR2g30CCNx6noazBnNEDXsbFupV9bd%2FHGGdpn4%2F28ZkhKhFZFpJHyJ6TLWuO589b%2Fon45w6yqjTBy5Yhg%2Fqmw4v9AK0%2FpHHsbeSjLWkMmkNM6nRv9faJsDkOl7u5thFWOeR7Yj9Dnpl0Xp5LuISmjqbPETvBqtGsyuOxByxkRXTxbQYLHGgaatxAbJUYTGM7orb4e8HerPw%2FppS1lT%2FMy7H0NUSb46BhZSYaeaNk37jM3h%2Fl%2F%2Ff7Ue3s7A%2FRT0m2Vh069vdCvSCDpB1phTBHv6xlybgpbIfRTFfWQ%2BdwB2C3yYyAR%2BeXTOAy5CXQcL4e8t6AB96ozs%2BjS0ZVsljKvXnSRrsw85z8vAY6pgEaZCq3F056tSKTFn9MtOcMsJ7M0rmAs0kjdsYxnM5kRwTzKUzr7Iw3U%2Fsr9PieCW0vxiRzqKNtbSFZO%2FEsL7P5ibq6WRDbV%2FnZ6%2F23332GDCOGwiJV7RHBuEuPDptr4iOolIWVJbGi67YWntb7AzVMa3y8Ci7whVXx%2B6Jo%2FuFrYBtOmSKvdBAjVr5neNR5%2Fq%2FamVm6K0NtqZhTMX6pWaG82MX2FHss&X-Amz-Signature=b8e88d906ceb00e54d37b054eada319a163467ccb3b973b154fef5b93b49d3af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
