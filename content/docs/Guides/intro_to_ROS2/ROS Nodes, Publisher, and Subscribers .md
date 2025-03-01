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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMOVJVW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF8SkrRGXBBgvldpJD5054zv3KzQg85GvubPA%2Fz%2BwVg5AiEAlmyXa%2BcMaIbSraOQyj%2Fc3V4fD2s5mj6x67CTeSaNzVIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2BxCqfQLV4U9WXQSrcAzui5sBSJQ3lOuDTz9RPeW9IAFOBTLOb89gOaOPIDAc0z8rv4JoucYGt9Co0mLGv01sg8gBxhLkfRrAin5SZXRGRxsaT20rStSswohKfcFGoEp716CNbgC%2BBbAsmI3WD3varfi1pActwGnH7HvSLWojQ%2BMGIomcP%2BfI%2BnARYIlH%2BtyMsLABuEYtKbrROxZFIhKNhn86KItzjRslFFoty%2Fp1T6LuaJwvD3B8rcRFo%2FUAqZsQ5jbejBbADTJ8t%2FXCYTdynisDPxUkxjgLjbdYWncZrF4GvSYtqd%2F4gIhtbNX0AneX16Lc80cFOBICHwh0D3d7dIGVpXBHivNNWdoVEFtIR1HckbhZMd1tg0eM4gc5bbUTOp%2BnOVvlcQtiSSZZnBKXnp7juxzJ5rqC9Q1xOtsRJ7Vv1wKoFciPhe32i0jx1tqC2%2FGzjpvHD66MNYUIEFhISoQ8zHfBS2Y9A%2B7w7%2FzIh6JTKfqKhqdKlxP7Es2NSOCp6PF%2FMKxKHzACNGG9wSdCRMMuwvPoSS1nU2MR3cASH3Rnt%2FSQThyb2mI0zAcsvvajJIspnUM8VDmKekdlJqj7xEcW3%2FiXzwh53iaCsus9Vx%2BXdUcDwbTNeE5H%2BVm%2FOf3JYvGuk4lMqwWpHMKeVjL4GOqUBMmEMAHMkEvlYKHKMWyKtJ2T4SHplj6auzNi%2BHNgB8ADjO6PIQA7JgE5%2B%2BskCzopUhGDI0NzaiH%2FTh5BgmCIowZXf3dTBNeW1PE5bKPdW7CqAx0VL%2B7geGniTEctmIRVMSxaYweVjIqVhpmuDwfTUvxyQhe%2FWS9%2BL2iBcvp7Eq%2FFxK3Bx%2F4OZeLF3sCE6vrwUlk6kinuO4xU3X8%2BTOMQwCxTpHpSu&X-Amz-Signature=2ed01dcfcb7ec018c3f8a10a52b47dc9865ff9774a6d14c53a0a24ae073996e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMOVJVW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF8SkrRGXBBgvldpJD5054zv3KzQg85GvubPA%2Fz%2BwVg5AiEAlmyXa%2BcMaIbSraOQyj%2Fc3V4fD2s5mj6x67CTeSaNzVIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2BxCqfQLV4U9WXQSrcAzui5sBSJQ3lOuDTz9RPeW9IAFOBTLOb89gOaOPIDAc0z8rv4JoucYGt9Co0mLGv01sg8gBxhLkfRrAin5SZXRGRxsaT20rStSswohKfcFGoEp716CNbgC%2BBbAsmI3WD3varfi1pActwGnH7HvSLWojQ%2BMGIomcP%2BfI%2BnARYIlH%2BtyMsLABuEYtKbrROxZFIhKNhn86KItzjRslFFoty%2Fp1T6LuaJwvD3B8rcRFo%2FUAqZsQ5jbejBbADTJ8t%2FXCYTdynisDPxUkxjgLjbdYWncZrF4GvSYtqd%2F4gIhtbNX0AneX16Lc80cFOBICHwh0D3d7dIGVpXBHivNNWdoVEFtIR1HckbhZMd1tg0eM4gc5bbUTOp%2BnOVvlcQtiSSZZnBKXnp7juxzJ5rqC9Q1xOtsRJ7Vv1wKoFciPhe32i0jx1tqC2%2FGzjpvHD66MNYUIEFhISoQ8zHfBS2Y9A%2B7w7%2FzIh6JTKfqKhqdKlxP7Es2NSOCp6PF%2FMKxKHzACNGG9wSdCRMMuwvPoSS1nU2MR3cASH3Rnt%2FSQThyb2mI0zAcsvvajJIspnUM8VDmKekdlJqj7xEcW3%2FiXzwh53iaCsus9Vx%2BXdUcDwbTNeE5H%2BVm%2FOf3JYvGuk4lMqwWpHMKeVjL4GOqUBMmEMAHMkEvlYKHKMWyKtJ2T4SHplj6auzNi%2BHNgB8ADjO6PIQA7JgE5%2B%2BskCzopUhGDI0NzaiH%2FTh5BgmCIowZXf3dTBNeW1PE5bKPdW7CqAx0VL%2B7geGniTEctmIRVMSxaYweVjIqVhpmuDwfTUvxyQhe%2FWS9%2BL2iBcvp7Eq%2FFxK3Bx%2F4OZeLF3sCE6vrwUlk6kinuO4xU3X8%2BTOMQwCxTpHpSu&X-Amz-Signature=f0a2503158c0faff88cf5a275fa125730a1b8d611bee393dee7caac2cf0892bd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMOVJVW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF8SkrRGXBBgvldpJD5054zv3KzQg85GvubPA%2Fz%2BwVg5AiEAlmyXa%2BcMaIbSraOQyj%2Fc3V4fD2s5mj6x67CTeSaNzVIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2BxCqfQLV4U9WXQSrcAzui5sBSJQ3lOuDTz9RPeW9IAFOBTLOb89gOaOPIDAc0z8rv4JoucYGt9Co0mLGv01sg8gBxhLkfRrAin5SZXRGRxsaT20rStSswohKfcFGoEp716CNbgC%2BBbAsmI3WD3varfi1pActwGnH7HvSLWojQ%2BMGIomcP%2BfI%2BnARYIlH%2BtyMsLABuEYtKbrROxZFIhKNhn86KItzjRslFFoty%2Fp1T6LuaJwvD3B8rcRFo%2FUAqZsQ5jbejBbADTJ8t%2FXCYTdynisDPxUkxjgLjbdYWncZrF4GvSYtqd%2F4gIhtbNX0AneX16Lc80cFOBICHwh0D3d7dIGVpXBHivNNWdoVEFtIR1HckbhZMd1tg0eM4gc5bbUTOp%2BnOVvlcQtiSSZZnBKXnp7juxzJ5rqC9Q1xOtsRJ7Vv1wKoFciPhe32i0jx1tqC2%2FGzjpvHD66MNYUIEFhISoQ8zHfBS2Y9A%2B7w7%2FzIh6JTKfqKhqdKlxP7Es2NSOCp6PF%2FMKxKHzACNGG9wSdCRMMuwvPoSS1nU2MR3cASH3Rnt%2FSQThyb2mI0zAcsvvajJIspnUM8VDmKekdlJqj7xEcW3%2FiXzwh53iaCsus9Vx%2BXdUcDwbTNeE5H%2BVm%2FOf3JYvGuk4lMqwWpHMKeVjL4GOqUBMmEMAHMkEvlYKHKMWyKtJ2T4SHplj6auzNi%2BHNgB8ADjO6PIQA7JgE5%2B%2BskCzopUhGDI0NzaiH%2FTh5BgmCIowZXf3dTBNeW1PE5bKPdW7CqAx0VL%2B7geGniTEctmIRVMSxaYweVjIqVhpmuDwfTUvxyQhe%2FWS9%2BL2iBcvp7Eq%2FFxK3Bx%2F4OZeLF3sCE6vrwUlk6kinuO4xU3X8%2BTOMQwCxTpHpSu&X-Amz-Signature=e3cea0f38771efa5fd98c0ef99cfeb64a76fe9afc762df07aee08f2e6124403c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMOVJVW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF8SkrRGXBBgvldpJD5054zv3KzQg85GvubPA%2Fz%2BwVg5AiEAlmyXa%2BcMaIbSraOQyj%2Fc3V4fD2s5mj6x67CTeSaNzVIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2BxCqfQLV4U9WXQSrcAzui5sBSJQ3lOuDTz9RPeW9IAFOBTLOb89gOaOPIDAc0z8rv4JoucYGt9Co0mLGv01sg8gBxhLkfRrAin5SZXRGRxsaT20rStSswohKfcFGoEp716CNbgC%2BBbAsmI3WD3varfi1pActwGnH7HvSLWojQ%2BMGIomcP%2BfI%2BnARYIlH%2BtyMsLABuEYtKbrROxZFIhKNhn86KItzjRslFFoty%2Fp1T6LuaJwvD3B8rcRFo%2FUAqZsQ5jbejBbADTJ8t%2FXCYTdynisDPxUkxjgLjbdYWncZrF4GvSYtqd%2F4gIhtbNX0AneX16Lc80cFOBICHwh0D3d7dIGVpXBHivNNWdoVEFtIR1HckbhZMd1tg0eM4gc5bbUTOp%2BnOVvlcQtiSSZZnBKXnp7juxzJ5rqC9Q1xOtsRJ7Vv1wKoFciPhe32i0jx1tqC2%2FGzjpvHD66MNYUIEFhISoQ8zHfBS2Y9A%2B7w7%2FzIh6JTKfqKhqdKlxP7Es2NSOCp6PF%2FMKxKHzACNGG9wSdCRMMuwvPoSS1nU2MR3cASH3Rnt%2FSQThyb2mI0zAcsvvajJIspnUM8VDmKekdlJqj7xEcW3%2FiXzwh53iaCsus9Vx%2BXdUcDwbTNeE5H%2BVm%2FOf3JYvGuk4lMqwWpHMKeVjL4GOqUBMmEMAHMkEvlYKHKMWyKtJ2T4SHplj6auzNi%2BHNgB8ADjO6PIQA7JgE5%2B%2BskCzopUhGDI0NzaiH%2FTh5BgmCIowZXf3dTBNeW1PE5bKPdW7CqAx0VL%2B7geGniTEctmIRVMSxaYweVjIqVhpmuDwfTUvxyQhe%2FWS9%2BL2iBcvp7Eq%2FFxK3Bx%2F4OZeLF3sCE6vrwUlk6kinuO4xU3X8%2BTOMQwCxTpHpSu&X-Amz-Signature=b06832ddf0e4e3bf8baa81c496c186747de448d678066abe46eedb41ae0f1aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMOVJVW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF8SkrRGXBBgvldpJD5054zv3KzQg85GvubPA%2Fz%2BwVg5AiEAlmyXa%2BcMaIbSraOQyj%2Fc3V4fD2s5mj6x67CTeSaNzVIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2BxCqfQLV4U9WXQSrcAzui5sBSJQ3lOuDTz9RPeW9IAFOBTLOb89gOaOPIDAc0z8rv4JoucYGt9Co0mLGv01sg8gBxhLkfRrAin5SZXRGRxsaT20rStSswohKfcFGoEp716CNbgC%2BBbAsmI3WD3varfi1pActwGnH7HvSLWojQ%2BMGIomcP%2BfI%2BnARYIlH%2BtyMsLABuEYtKbrROxZFIhKNhn86KItzjRslFFoty%2Fp1T6LuaJwvD3B8rcRFo%2FUAqZsQ5jbejBbADTJ8t%2FXCYTdynisDPxUkxjgLjbdYWncZrF4GvSYtqd%2F4gIhtbNX0AneX16Lc80cFOBICHwh0D3d7dIGVpXBHivNNWdoVEFtIR1HckbhZMd1tg0eM4gc5bbUTOp%2BnOVvlcQtiSSZZnBKXnp7juxzJ5rqC9Q1xOtsRJ7Vv1wKoFciPhe32i0jx1tqC2%2FGzjpvHD66MNYUIEFhISoQ8zHfBS2Y9A%2B7w7%2FzIh6JTKfqKhqdKlxP7Es2NSOCp6PF%2FMKxKHzACNGG9wSdCRMMuwvPoSS1nU2MR3cASH3Rnt%2FSQThyb2mI0zAcsvvajJIspnUM8VDmKekdlJqj7xEcW3%2FiXzwh53iaCsus9Vx%2BXdUcDwbTNeE5H%2BVm%2FOf3JYvGuk4lMqwWpHMKeVjL4GOqUBMmEMAHMkEvlYKHKMWyKtJ2T4SHplj6auzNi%2BHNgB8ADjO6PIQA7JgE5%2B%2BskCzopUhGDI0NzaiH%2FTh5BgmCIowZXf3dTBNeW1PE5bKPdW7CqAx0VL%2B7geGniTEctmIRVMSxaYweVjIqVhpmuDwfTUvxyQhe%2FWS9%2BL2iBcvp7Eq%2FFxK3Bx%2F4OZeLF3sCE6vrwUlk6kinuO4xU3X8%2BTOMQwCxTpHpSu&X-Amz-Signature=50f763c3c5deb5949ec1401826f97b7aa50d657adcf0a376df0f9635aaafbc87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMOVJVW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF8SkrRGXBBgvldpJD5054zv3KzQg85GvubPA%2Fz%2BwVg5AiEAlmyXa%2BcMaIbSraOQyj%2Fc3V4fD2s5mj6x67CTeSaNzVIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2BxCqfQLV4U9WXQSrcAzui5sBSJQ3lOuDTz9RPeW9IAFOBTLOb89gOaOPIDAc0z8rv4JoucYGt9Co0mLGv01sg8gBxhLkfRrAin5SZXRGRxsaT20rStSswohKfcFGoEp716CNbgC%2BBbAsmI3WD3varfi1pActwGnH7HvSLWojQ%2BMGIomcP%2BfI%2BnARYIlH%2BtyMsLABuEYtKbrROxZFIhKNhn86KItzjRslFFoty%2Fp1T6LuaJwvD3B8rcRFo%2FUAqZsQ5jbejBbADTJ8t%2FXCYTdynisDPxUkxjgLjbdYWncZrF4GvSYtqd%2F4gIhtbNX0AneX16Lc80cFOBICHwh0D3d7dIGVpXBHivNNWdoVEFtIR1HckbhZMd1tg0eM4gc5bbUTOp%2BnOVvlcQtiSSZZnBKXnp7juxzJ5rqC9Q1xOtsRJ7Vv1wKoFciPhe32i0jx1tqC2%2FGzjpvHD66MNYUIEFhISoQ8zHfBS2Y9A%2B7w7%2FzIh6JTKfqKhqdKlxP7Es2NSOCp6PF%2FMKxKHzACNGG9wSdCRMMuwvPoSS1nU2MR3cASH3Rnt%2FSQThyb2mI0zAcsvvajJIspnUM8VDmKekdlJqj7xEcW3%2FiXzwh53iaCsus9Vx%2BXdUcDwbTNeE5H%2BVm%2FOf3JYvGuk4lMqwWpHMKeVjL4GOqUBMmEMAHMkEvlYKHKMWyKtJ2T4SHplj6auzNi%2BHNgB8ADjO6PIQA7JgE5%2B%2BskCzopUhGDI0NzaiH%2FTh5BgmCIowZXf3dTBNeW1PE5bKPdW7CqAx0VL%2B7geGniTEctmIRVMSxaYweVjIqVhpmuDwfTUvxyQhe%2FWS9%2BL2iBcvp7Eq%2FFxK3Bx%2F4OZeLF3sCE6vrwUlk6kinuO4xU3X8%2BTOMQwCxTpHpSu&X-Amz-Signature=75a9e76d0c97f7ca394eddc3b374ec749773238043e53ada2d8e2b4a57840544&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMOVJVW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF8SkrRGXBBgvldpJD5054zv3KzQg85GvubPA%2Fz%2BwVg5AiEAlmyXa%2BcMaIbSraOQyj%2Fc3V4fD2s5mj6x67CTeSaNzVIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2BxCqfQLV4U9WXQSrcAzui5sBSJQ3lOuDTz9RPeW9IAFOBTLOb89gOaOPIDAc0z8rv4JoucYGt9Co0mLGv01sg8gBxhLkfRrAin5SZXRGRxsaT20rStSswohKfcFGoEp716CNbgC%2BBbAsmI3WD3varfi1pActwGnH7HvSLWojQ%2BMGIomcP%2BfI%2BnARYIlH%2BtyMsLABuEYtKbrROxZFIhKNhn86KItzjRslFFoty%2Fp1T6LuaJwvD3B8rcRFo%2FUAqZsQ5jbejBbADTJ8t%2FXCYTdynisDPxUkxjgLjbdYWncZrF4GvSYtqd%2F4gIhtbNX0AneX16Lc80cFOBICHwh0D3d7dIGVpXBHivNNWdoVEFtIR1HckbhZMd1tg0eM4gc5bbUTOp%2BnOVvlcQtiSSZZnBKXnp7juxzJ5rqC9Q1xOtsRJ7Vv1wKoFciPhe32i0jx1tqC2%2FGzjpvHD66MNYUIEFhISoQ8zHfBS2Y9A%2B7w7%2FzIh6JTKfqKhqdKlxP7Es2NSOCp6PF%2FMKxKHzACNGG9wSdCRMMuwvPoSS1nU2MR3cASH3Rnt%2FSQThyb2mI0zAcsvvajJIspnUM8VDmKekdlJqj7xEcW3%2FiXzwh53iaCsus9Vx%2BXdUcDwbTNeE5H%2BVm%2FOf3JYvGuk4lMqwWpHMKeVjL4GOqUBMmEMAHMkEvlYKHKMWyKtJ2T4SHplj6auzNi%2BHNgB8ADjO6PIQA7JgE5%2B%2BskCzopUhGDI0NzaiH%2FTh5BgmCIowZXf3dTBNeW1PE5bKPdW7CqAx0VL%2B7geGniTEctmIRVMSxaYweVjIqVhpmuDwfTUvxyQhe%2FWS9%2BL2iBcvp7Eq%2FFxK3Bx%2F4OZeLF3sCE6vrwUlk6kinuO4xU3X8%2BTOMQwCxTpHpSu&X-Amz-Signature=3023264cb61b9487531a3b88de770aa07d08bc44fabee2defe3b42dce9ff94c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEMOVJVW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF8SkrRGXBBgvldpJD5054zv3KzQg85GvubPA%2Fz%2BwVg5AiEAlmyXa%2BcMaIbSraOQyj%2Fc3V4fD2s5mj6x67CTeSaNzVIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV%2BxCqfQLV4U9WXQSrcAzui5sBSJQ3lOuDTz9RPeW9IAFOBTLOb89gOaOPIDAc0z8rv4JoucYGt9Co0mLGv01sg8gBxhLkfRrAin5SZXRGRxsaT20rStSswohKfcFGoEp716CNbgC%2BBbAsmI3WD3varfi1pActwGnH7HvSLWojQ%2BMGIomcP%2BfI%2BnARYIlH%2BtyMsLABuEYtKbrROxZFIhKNhn86KItzjRslFFoty%2Fp1T6LuaJwvD3B8rcRFo%2FUAqZsQ5jbejBbADTJ8t%2FXCYTdynisDPxUkxjgLjbdYWncZrF4GvSYtqd%2F4gIhtbNX0AneX16Lc80cFOBICHwh0D3d7dIGVpXBHivNNWdoVEFtIR1HckbhZMd1tg0eM4gc5bbUTOp%2BnOVvlcQtiSSZZnBKXnp7juxzJ5rqC9Q1xOtsRJ7Vv1wKoFciPhe32i0jx1tqC2%2FGzjpvHD66MNYUIEFhISoQ8zHfBS2Y9A%2B7w7%2FzIh6JTKfqKhqdKlxP7Es2NSOCp6PF%2FMKxKHzACNGG9wSdCRMMuwvPoSS1nU2MR3cASH3Rnt%2FSQThyb2mI0zAcsvvajJIspnUM8VDmKekdlJqj7xEcW3%2FiXzwh53iaCsus9Vx%2BXdUcDwbTNeE5H%2BVm%2FOf3JYvGuk4lMqwWpHMKeVjL4GOqUBMmEMAHMkEvlYKHKMWyKtJ2T4SHplj6auzNi%2BHNgB8ADjO6PIQA7JgE5%2B%2BskCzopUhGDI0NzaiH%2FTh5BgmCIowZXf3dTBNeW1PE5bKPdW7CqAx0VL%2B7geGniTEctmIRVMSxaYweVjIqVhpmuDwfTUvxyQhe%2FWS9%2BL2iBcvp7Eq%2FFxK3Bx%2F4OZeLF3sCE6vrwUlk6kinuO4xU3X8%2BTOMQwCxTpHpSu&X-Amz-Signature=9350895bac19b68d9a94380c6010df63654d23ebac16e049e00b6222121f531f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
