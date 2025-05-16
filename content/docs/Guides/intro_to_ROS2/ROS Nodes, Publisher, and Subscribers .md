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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JPMFN7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGg75YivGjMwMpGiPlPwG5BDjVWHEARc5EOUDWW%2Br3MAiEAkqGEl4eUR1rK63kDegNwwKKuwuDHb0klfsAnjitdhPQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGnVpxgMN9u39aKI4CrcAxjwD6fTG2E05PCQVyyxVfS5pKmwxTvjC5gx52sFMQK6c%2B6o7QmoJkz4TxCZzVQQOSiWWR0hQB5iMr%2B6kKYFnXI6jPs%2BVz6vm5Od5NmHez0fLfmFirpjT2kP61KHkT1JbLXya2f9tryrk%2Bs%2FAJCsOkPzg8M47WEalbnM9nTivEWyJbuIQeaXZScyezAFf1XB1azX%2BshVpF7MLQFmS%2FdrD9PDRjDDggdhbGr4Z2HOJSM1ysOgCqIUlWMQ8rCTDABu73TH%2F0BCGY6xsle55bCQV65olp%2FYaglNmwCP3LqNWLfpw1vMNbPfJtA3UP6PPcMDJzmkZopBiZnkDL4g6A%2FOgkrxE2ee7yGz%2FCkkELpSI5rzcDp%2F5sZhrYJHYEnNfSF73HbB6cTzJ3wt8XF8jlrWaOsA2pPnX2taM%2FZkQYgh5axm0X7VcGj0cLecscMofOxYyam%2Brtgd4wiYLrJkjQ4jLm7b3tVJBJ2BXtouJmYI3mq6rG1O9pO8HAUMi2M7YjaeR0wZ1FzvyU88AshJfYA7HJZc0EGAxSYca4Fcj9MSZ15LzwF7xRI1GkoJrHoOOXHBr%2FKj4XoNMMeCkeuZK7RSnBVl2HJa%2F7TmeyBMsL1COTxShegbxGTee589f%2FzwMLHbm8EGOqUBwa6DF%2B5U3fvjR%2BTPjMHLsg0Nte1UChw3UCKZUQsZ90zPe%2BKLbeDHCbaU1tKJ0JbQyBkuci9RlHmEftFxlOHkXPF8IJP9m4%2F56A4T5sahw5AlaFvfdVcuXTaj%2F%2Fcn3rrQ8pOVuQ80wXD7wDsuVtoSk5qq5fIYvX0F8YOIfgomfKLzGwExIHG%2B2GXsy9JZD64MBxVMjX3lOi2%2BP%2FPqGSlUdfkh77MH&X-Amz-Signature=850734ef5c74b17e23242645ad9488264fdbb888cbb37287bf0d396aaac20536&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JPMFN7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGg75YivGjMwMpGiPlPwG5BDjVWHEARc5EOUDWW%2Br3MAiEAkqGEl4eUR1rK63kDegNwwKKuwuDHb0klfsAnjitdhPQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGnVpxgMN9u39aKI4CrcAxjwD6fTG2E05PCQVyyxVfS5pKmwxTvjC5gx52sFMQK6c%2B6o7QmoJkz4TxCZzVQQOSiWWR0hQB5iMr%2B6kKYFnXI6jPs%2BVz6vm5Od5NmHez0fLfmFirpjT2kP61KHkT1JbLXya2f9tryrk%2Bs%2FAJCsOkPzg8M47WEalbnM9nTivEWyJbuIQeaXZScyezAFf1XB1azX%2BshVpF7MLQFmS%2FdrD9PDRjDDggdhbGr4Z2HOJSM1ysOgCqIUlWMQ8rCTDABu73TH%2F0BCGY6xsle55bCQV65olp%2FYaglNmwCP3LqNWLfpw1vMNbPfJtA3UP6PPcMDJzmkZopBiZnkDL4g6A%2FOgkrxE2ee7yGz%2FCkkELpSI5rzcDp%2F5sZhrYJHYEnNfSF73HbB6cTzJ3wt8XF8jlrWaOsA2pPnX2taM%2FZkQYgh5axm0X7VcGj0cLecscMofOxYyam%2Brtgd4wiYLrJkjQ4jLm7b3tVJBJ2BXtouJmYI3mq6rG1O9pO8HAUMi2M7YjaeR0wZ1FzvyU88AshJfYA7HJZc0EGAxSYca4Fcj9MSZ15LzwF7xRI1GkoJrHoOOXHBr%2FKj4XoNMMeCkeuZK7RSnBVl2HJa%2F7TmeyBMsL1COTxShegbxGTee589f%2FzwMLHbm8EGOqUBwa6DF%2B5U3fvjR%2BTPjMHLsg0Nte1UChw3UCKZUQsZ90zPe%2BKLbeDHCbaU1tKJ0JbQyBkuci9RlHmEftFxlOHkXPF8IJP9m4%2F56A4T5sahw5AlaFvfdVcuXTaj%2F%2Fcn3rrQ8pOVuQ80wXD7wDsuVtoSk5qq5fIYvX0F8YOIfgomfKLzGwExIHG%2B2GXsy9JZD64MBxVMjX3lOi2%2BP%2FPqGSlUdfkh77MH&X-Amz-Signature=4bc1f780e78090e439b4f242981fec7dc795f4b7ce4a11137728dbab7197c0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JPMFN7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGg75YivGjMwMpGiPlPwG5BDjVWHEARc5EOUDWW%2Br3MAiEAkqGEl4eUR1rK63kDegNwwKKuwuDHb0klfsAnjitdhPQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGnVpxgMN9u39aKI4CrcAxjwD6fTG2E05PCQVyyxVfS5pKmwxTvjC5gx52sFMQK6c%2B6o7QmoJkz4TxCZzVQQOSiWWR0hQB5iMr%2B6kKYFnXI6jPs%2BVz6vm5Od5NmHez0fLfmFirpjT2kP61KHkT1JbLXya2f9tryrk%2Bs%2FAJCsOkPzg8M47WEalbnM9nTivEWyJbuIQeaXZScyezAFf1XB1azX%2BshVpF7MLQFmS%2FdrD9PDRjDDggdhbGr4Z2HOJSM1ysOgCqIUlWMQ8rCTDABu73TH%2F0BCGY6xsle55bCQV65olp%2FYaglNmwCP3LqNWLfpw1vMNbPfJtA3UP6PPcMDJzmkZopBiZnkDL4g6A%2FOgkrxE2ee7yGz%2FCkkELpSI5rzcDp%2F5sZhrYJHYEnNfSF73HbB6cTzJ3wt8XF8jlrWaOsA2pPnX2taM%2FZkQYgh5axm0X7VcGj0cLecscMofOxYyam%2Brtgd4wiYLrJkjQ4jLm7b3tVJBJ2BXtouJmYI3mq6rG1O9pO8HAUMi2M7YjaeR0wZ1FzvyU88AshJfYA7HJZc0EGAxSYca4Fcj9MSZ15LzwF7xRI1GkoJrHoOOXHBr%2FKj4XoNMMeCkeuZK7RSnBVl2HJa%2F7TmeyBMsL1COTxShegbxGTee589f%2FzwMLHbm8EGOqUBwa6DF%2B5U3fvjR%2BTPjMHLsg0Nte1UChw3UCKZUQsZ90zPe%2BKLbeDHCbaU1tKJ0JbQyBkuci9RlHmEftFxlOHkXPF8IJP9m4%2F56A4T5sahw5AlaFvfdVcuXTaj%2F%2Fcn3rrQ8pOVuQ80wXD7wDsuVtoSk5qq5fIYvX0F8YOIfgomfKLzGwExIHG%2B2GXsy9JZD64MBxVMjX3lOi2%2BP%2FPqGSlUdfkh77MH&X-Amz-Signature=d587a2ab661f4f6a0fbc4a204a473f20005cd792a2e34ca33cc1037ab548978f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JPMFN7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGg75YivGjMwMpGiPlPwG5BDjVWHEARc5EOUDWW%2Br3MAiEAkqGEl4eUR1rK63kDegNwwKKuwuDHb0klfsAnjitdhPQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGnVpxgMN9u39aKI4CrcAxjwD6fTG2E05PCQVyyxVfS5pKmwxTvjC5gx52sFMQK6c%2B6o7QmoJkz4TxCZzVQQOSiWWR0hQB5iMr%2B6kKYFnXI6jPs%2BVz6vm5Od5NmHez0fLfmFirpjT2kP61KHkT1JbLXya2f9tryrk%2Bs%2FAJCsOkPzg8M47WEalbnM9nTivEWyJbuIQeaXZScyezAFf1XB1azX%2BshVpF7MLQFmS%2FdrD9PDRjDDggdhbGr4Z2HOJSM1ysOgCqIUlWMQ8rCTDABu73TH%2F0BCGY6xsle55bCQV65olp%2FYaglNmwCP3LqNWLfpw1vMNbPfJtA3UP6PPcMDJzmkZopBiZnkDL4g6A%2FOgkrxE2ee7yGz%2FCkkELpSI5rzcDp%2F5sZhrYJHYEnNfSF73HbB6cTzJ3wt8XF8jlrWaOsA2pPnX2taM%2FZkQYgh5axm0X7VcGj0cLecscMofOxYyam%2Brtgd4wiYLrJkjQ4jLm7b3tVJBJ2BXtouJmYI3mq6rG1O9pO8HAUMi2M7YjaeR0wZ1FzvyU88AshJfYA7HJZc0EGAxSYca4Fcj9MSZ15LzwF7xRI1GkoJrHoOOXHBr%2FKj4XoNMMeCkeuZK7RSnBVl2HJa%2F7TmeyBMsL1COTxShegbxGTee589f%2FzwMLHbm8EGOqUBwa6DF%2B5U3fvjR%2BTPjMHLsg0Nte1UChw3UCKZUQsZ90zPe%2BKLbeDHCbaU1tKJ0JbQyBkuci9RlHmEftFxlOHkXPF8IJP9m4%2F56A4T5sahw5AlaFvfdVcuXTaj%2F%2Fcn3rrQ8pOVuQ80wXD7wDsuVtoSk5qq5fIYvX0F8YOIfgomfKLzGwExIHG%2B2GXsy9JZD64MBxVMjX3lOi2%2BP%2FPqGSlUdfkh77MH&X-Amz-Signature=13ea69c499956a5e32f3213214e28c837ca5d520b43cd675e3853977d024dd95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JPMFN7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGg75YivGjMwMpGiPlPwG5BDjVWHEARc5EOUDWW%2Br3MAiEAkqGEl4eUR1rK63kDegNwwKKuwuDHb0klfsAnjitdhPQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGnVpxgMN9u39aKI4CrcAxjwD6fTG2E05PCQVyyxVfS5pKmwxTvjC5gx52sFMQK6c%2B6o7QmoJkz4TxCZzVQQOSiWWR0hQB5iMr%2B6kKYFnXI6jPs%2BVz6vm5Od5NmHez0fLfmFirpjT2kP61KHkT1JbLXya2f9tryrk%2Bs%2FAJCsOkPzg8M47WEalbnM9nTivEWyJbuIQeaXZScyezAFf1XB1azX%2BshVpF7MLQFmS%2FdrD9PDRjDDggdhbGr4Z2HOJSM1ysOgCqIUlWMQ8rCTDABu73TH%2F0BCGY6xsle55bCQV65olp%2FYaglNmwCP3LqNWLfpw1vMNbPfJtA3UP6PPcMDJzmkZopBiZnkDL4g6A%2FOgkrxE2ee7yGz%2FCkkELpSI5rzcDp%2F5sZhrYJHYEnNfSF73HbB6cTzJ3wt8XF8jlrWaOsA2pPnX2taM%2FZkQYgh5axm0X7VcGj0cLecscMofOxYyam%2Brtgd4wiYLrJkjQ4jLm7b3tVJBJ2BXtouJmYI3mq6rG1O9pO8HAUMi2M7YjaeR0wZ1FzvyU88AshJfYA7HJZc0EGAxSYca4Fcj9MSZ15LzwF7xRI1GkoJrHoOOXHBr%2FKj4XoNMMeCkeuZK7RSnBVl2HJa%2F7TmeyBMsL1COTxShegbxGTee589f%2FzwMLHbm8EGOqUBwa6DF%2B5U3fvjR%2BTPjMHLsg0Nte1UChw3UCKZUQsZ90zPe%2BKLbeDHCbaU1tKJ0JbQyBkuci9RlHmEftFxlOHkXPF8IJP9m4%2F56A4T5sahw5AlaFvfdVcuXTaj%2F%2Fcn3rrQ8pOVuQ80wXD7wDsuVtoSk5qq5fIYvX0F8YOIfgomfKLzGwExIHG%2B2GXsy9JZD64MBxVMjX3lOi2%2BP%2FPqGSlUdfkh77MH&X-Amz-Signature=38c2f981be122d71cc090a066c5a3643f3fd846a41a66c0965f5d4452685b7f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JPMFN7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGg75YivGjMwMpGiPlPwG5BDjVWHEARc5EOUDWW%2Br3MAiEAkqGEl4eUR1rK63kDegNwwKKuwuDHb0klfsAnjitdhPQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGnVpxgMN9u39aKI4CrcAxjwD6fTG2E05PCQVyyxVfS5pKmwxTvjC5gx52sFMQK6c%2B6o7QmoJkz4TxCZzVQQOSiWWR0hQB5iMr%2B6kKYFnXI6jPs%2BVz6vm5Od5NmHez0fLfmFirpjT2kP61KHkT1JbLXya2f9tryrk%2Bs%2FAJCsOkPzg8M47WEalbnM9nTivEWyJbuIQeaXZScyezAFf1XB1azX%2BshVpF7MLQFmS%2FdrD9PDRjDDggdhbGr4Z2HOJSM1ysOgCqIUlWMQ8rCTDABu73TH%2F0BCGY6xsle55bCQV65olp%2FYaglNmwCP3LqNWLfpw1vMNbPfJtA3UP6PPcMDJzmkZopBiZnkDL4g6A%2FOgkrxE2ee7yGz%2FCkkELpSI5rzcDp%2F5sZhrYJHYEnNfSF73HbB6cTzJ3wt8XF8jlrWaOsA2pPnX2taM%2FZkQYgh5axm0X7VcGj0cLecscMofOxYyam%2Brtgd4wiYLrJkjQ4jLm7b3tVJBJ2BXtouJmYI3mq6rG1O9pO8HAUMi2M7YjaeR0wZ1FzvyU88AshJfYA7HJZc0EGAxSYca4Fcj9MSZ15LzwF7xRI1GkoJrHoOOXHBr%2FKj4XoNMMeCkeuZK7RSnBVl2HJa%2F7TmeyBMsL1COTxShegbxGTee589f%2FzwMLHbm8EGOqUBwa6DF%2B5U3fvjR%2BTPjMHLsg0Nte1UChw3UCKZUQsZ90zPe%2BKLbeDHCbaU1tKJ0JbQyBkuci9RlHmEftFxlOHkXPF8IJP9m4%2F56A4T5sahw5AlaFvfdVcuXTaj%2F%2Fcn3rrQ8pOVuQ80wXD7wDsuVtoSk5qq5fIYvX0F8YOIfgomfKLzGwExIHG%2B2GXsy9JZD64MBxVMjX3lOi2%2BP%2FPqGSlUdfkh77MH&X-Amz-Signature=c0f85fb65e87a5a554d441368f6b63cba0ceeed539909f8426ad02ef50d228ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JPMFN7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGg75YivGjMwMpGiPlPwG5BDjVWHEARc5EOUDWW%2Br3MAiEAkqGEl4eUR1rK63kDegNwwKKuwuDHb0klfsAnjitdhPQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGnVpxgMN9u39aKI4CrcAxjwD6fTG2E05PCQVyyxVfS5pKmwxTvjC5gx52sFMQK6c%2B6o7QmoJkz4TxCZzVQQOSiWWR0hQB5iMr%2B6kKYFnXI6jPs%2BVz6vm5Od5NmHez0fLfmFirpjT2kP61KHkT1JbLXya2f9tryrk%2Bs%2FAJCsOkPzg8M47WEalbnM9nTivEWyJbuIQeaXZScyezAFf1XB1azX%2BshVpF7MLQFmS%2FdrD9PDRjDDggdhbGr4Z2HOJSM1ysOgCqIUlWMQ8rCTDABu73TH%2F0BCGY6xsle55bCQV65olp%2FYaglNmwCP3LqNWLfpw1vMNbPfJtA3UP6PPcMDJzmkZopBiZnkDL4g6A%2FOgkrxE2ee7yGz%2FCkkELpSI5rzcDp%2F5sZhrYJHYEnNfSF73HbB6cTzJ3wt8XF8jlrWaOsA2pPnX2taM%2FZkQYgh5axm0X7VcGj0cLecscMofOxYyam%2Brtgd4wiYLrJkjQ4jLm7b3tVJBJ2BXtouJmYI3mq6rG1O9pO8HAUMi2M7YjaeR0wZ1FzvyU88AshJfYA7HJZc0EGAxSYca4Fcj9MSZ15LzwF7xRI1GkoJrHoOOXHBr%2FKj4XoNMMeCkeuZK7RSnBVl2HJa%2F7TmeyBMsL1COTxShegbxGTee589f%2FzwMLHbm8EGOqUBwa6DF%2B5U3fvjR%2BTPjMHLsg0Nte1UChw3UCKZUQsZ90zPe%2BKLbeDHCbaU1tKJ0JbQyBkuci9RlHmEftFxlOHkXPF8IJP9m4%2F56A4T5sahw5AlaFvfdVcuXTaj%2F%2Fcn3rrQ8pOVuQ80wXD7wDsuVtoSk5qq5fIYvX0F8YOIfgomfKLzGwExIHG%2B2GXsy9JZD64MBxVMjX3lOi2%2BP%2FPqGSlUdfkh77MH&X-Amz-Signature=5bbecdbc951d307621b261b16c89064112bcff6d1aca01d8dffe2dc071d13e79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JPMFN7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGg75YivGjMwMpGiPlPwG5BDjVWHEARc5EOUDWW%2Br3MAiEAkqGEl4eUR1rK63kDegNwwKKuwuDHb0klfsAnjitdhPQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGnVpxgMN9u39aKI4CrcAxjwD6fTG2E05PCQVyyxVfS5pKmwxTvjC5gx52sFMQK6c%2B6o7QmoJkz4TxCZzVQQOSiWWR0hQB5iMr%2B6kKYFnXI6jPs%2BVz6vm5Od5NmHez0fLfmFirpjT2kP61KHkT1JbLXya2f9tryrk%2Bs%2FAJCsOkPzg8M47WEalbnM9nTivEWyJbuIQeaXZScyezAFf1XB1azX%2BshVpF7MLQFmS%2FdrD9PDRjDDggdhbGr4Z2HOJSM1ysOgCqIUlWMQ8rCTDABu73TH%2F0BCGY6xsle55bCQV65olp%2FYaglNmwCP3LqNWLfpw1vMNbPfJtA3UP6PPcMDJzmkZopBiZnkDL4g6A%2FOgkrxE2ee7yGz%2FCkkELpSI5rzcDp%2F5sZhrYJHYEnNfSF73HbB6cTzJ3wt8XF8jlrWaOsA2pPnX2taM%2FZkQYgh5axm0X7VcGj0cLecscMofOxYyam%2Brtgd4wiYLrJkjQ4jLm7b3tVJBJ2BXtouJmYI3mq6rG1O9pO8HAUMi2M7YjaeR0wZ1FzvyU88AshJfYA7HJZc0EGAxSYca4Fcj9MSZ15LzwF7xRI1GkoJrHoOOXHBr%2FKj4XoNMMeCkeuZK7RSnBVl2HJa%2F7TmeyBMsL1COTxShegbxGTee589f%2FzwMLHbm8EGOqUBwa6DF%2B5U3fvjR%2BTPjMHLsg0Nte1UChw3UCKZUQsZ90zPe%2BKLbeDHCbaU1tKJ0JbQyBkuci9RlHmEftFxlOHkXPF8IJP9m4%2F56A4T5sahw5AlaFvfdVcuXTaj%2F%2Fcn3rrQ8pOVuQ80wXD7wDsuVtoSk5qq5fIYvX0F8YOIfgomfKLzGwExIHG%2B2GXsy9JZD64MBxVMjX3lOi2%2BP%2FPqGSlUdfkh77MH&X-Amz-Signature=581c359da0876f513e18ffa3c4b7f315804aa365f3d77e91d5e2ddf3b34651f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
