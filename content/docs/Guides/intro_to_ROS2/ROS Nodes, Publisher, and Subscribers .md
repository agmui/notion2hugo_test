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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SET3SWQY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF8txcgk4bBmvGAc2ybfR%2B8DJmzgLL1oPn9%2Bu1VjQPcLAiAROQDD5fNYs46HqSJMPJTjjelsyzzTCC6MMJXrsYGIUir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvfG9EoxI1fg3EFU9KtwDCO0gCZ0uXHWZyP2cm29mpR4CpAqaEMd6Myv5yWXZlgPxIwGyZjRJipQK4q2jnbJ1mEGP10cPiMgw8w4uwxaAiicE8vqvo%2B3HylL8XPUOR0zMi23%2FTn%2B%2FznbK3NgIDspepJz%2FxdJP4Ly6Ep%2Ftq6sFHUKf7y5mJ5Nll5stJ%2BxKu6nO6fAKmw8d7KI%2Fy%2BbKfr%2Bxsz2JFEKL6F3KSsGNMOTm3svWxroqBoIO7W%2Bq7rTqK%2FGjtRa4Ta0homfQ42FrMZ501VuqDtnBogXXmbTwKOC7f%2FYVCzvqQ5XGxtKHWKhMSKqcsPYXpQR9VT99KxRPGqOGJPTlpntp0pxMEhtSaeV1u4udcw1jifjODzSw6ja0iyELWwZ9AAGDckUWdtTKuHFaJutugYfrQlrUeSGa4r40rf0b0kIHPD6xgC0FJA23Y%2Fs3JAhQCiltBnPKCV7YNFaYDPj5wp9DiNGq%2BOx%2FfDJzrcFxU7OBjMRAM3pEY%2Fu5o1upIrntc3hRMzRQ%2FKSd8rwGeCJJ2qToIgPj8dtfV5EyIy6eXG%2BY2wyI892kXWBHkYx7OtMW8oFfVBTSra7byS62SwU5tt%2B26U0qnkyzoHEsIwpf6EwO01XECdCdSb7aaVhUhVFTaregmeAE9SMw39KTvQY6pgHysdfojsCERLvVZNlENDsiLMXDBSHk2dPeG%2FLc77JXgJ7ZqR5HoeCU8ldu2rjEJnu%2FKXTmV%2BeSeUxs8aFbwiTvXd%2BUotYYBOIMuXooHSOncO7wCxElbtBNAgwc4FqeiE%2BnnW6%2BCZTduuc%2Fp971%2BKRNOE%2BuI7dJkfN8UaeNmAvpw2mwmQuZ%2FokUJKWamA2nHzbCB3Fgx3iztNgTm9lG4YhDp18CUfZk&X-Amz-Signature=1fbe2e59e60c365c1b694549e901108c771f27fa0d3d3cea253339d7073d60e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SET3SWQY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF8txcgk4bBmvGAc2ybfR%2B8DJmzgLL1oPn9%2Bu1VjQPcLAiAROQDD5fNYs46HqSJMPJTjjelsyzzTCC6MMJXrsYGIUir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvfG9EoxI1fg3EFU9KtwDCO0gCZ0uXHWZyP2cm29mpR4CpAqaEMd6Myv5yWXZlgPxIwGyZjRJipQK4q2jnbJ1mEGP10cPiMgw8w4uwxaAiicE8vqvo%2B3HylL8XPUOR0zMi23%2FTn%2B%2FznbK3NgIDspepJz%2FxdJP4Ly6Ep%2Ftq6sFHUKf7y5mJ5Nll5stJ%2BxKu6nO6fAKmw8d7KI%2Fy%2BbKfr%2Bxsz2JFEKL6F3KSsGNMOTm3svWxroqBoIO7W%2Bq7rTqK%2FGjtRa4Ta0homfQ42FrMZ501VuqDtnBogXXmbTwKOC7f%2FYVCzvqQ5XGxtKHWKhMSKqcsPYXpQR9VT99KxRPGqOGJPTlpntp0pxMEhtSaeV1u4udcw1jifjODzSw6ja0iyELWwZ9AAGDckUWdtTKuHFaJutugYfrQlrUeSGa4r40rf0b0kIHPD6xgC0FJA23Y%2Fs3JAhQCiltBnPKCV7YNFaYDPj5wp9DiNGq%2BOx%2FfDJzrcFxU7OBjMRAM3pEY%2Fu5o1upIrntc3hRMzRQ%2FKSd8rwGeCJJ2qToIgPj8dtfV5EyIy6eXG%2BY2wyI892kXWBHkYx7OtMW8oFfVBTSra7byS62SwU5tt%2B26U0qnkyzoHEsIwpf6EwO01XECdCdSb7aaVhUhVFTaregmeAE9SMw39KTvQY6pgHysdfojsCERLvVZNlENDsiLMXDBSHk2dPeG%2FLc77JXgJ7ZqR5HoeCU8ldu2rjEJnu%2FKXTmV%2BeSeUxs8aFbwiTvXd%2BUotYYBOIMuXooHSOncO7wCxElbtBNAgwc4FqeiE%2BnnW6%2BCZTduuc%2Fp971%2BKRNOE%2BuI7dJkfN8UaeNmAvpw2mwmQuZ%2FokUJKWamA2nHzbCB3Fgx3iztNgTm9lG4YhDp18CUfZk&X-Amz-Signature=619f921a1f1f6637e69dc7e1c48340cbd3067ae03afc1749bf802e2f94c8a5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SET3SWQY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF8txcgk4bBmvGAc2ybfR%2B8DJmzgLL1oPn9%2Bu1VjQPcLAiAROQDD5fNYs46HqSJMPJTjjelsyzzTCC6MMJXrsYGIUir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvfG9EoxI1fg3EFU9KtwDCO0gCZ0uXHWZyP2cm29mpR4CpAqaEMd6Myv5yWXZlgPxIwGyZjRJipQK4q2jnbJ1mEGP10cPiMgw8w4uwxaAiicE8vqvo%2B3HylL8XPUOR0zMi23%2FTn%2B%2FznbK3NgIDspepJz%2FxdJP4Ly6Ep%2Ftq6sFHUKf7y5mJ5Nll5stJ%2BxKu6nO6fAKmw8d7KI%2Fy%2BbKfr%2Bxsz2JFEKL6F3KSsGNMOTm3svWxroqBoIO7W%2Bq7rTqK%2FGjtRa4Ta0homfQ42FrMZ501VuqDtnBogXXmbTwKOC7f%2FYVCzvqQ5XGxtKHWKhMSKqcsPYXpQR9VT99KxRPGqOGJPTlpntp0pxMEhtSaeV1u4udcw1jifjODzSw6ja0iyELWwZ9AAGDckUWdtTKuHFaJutugYfrQlrUeSGa4r40rf0b0kIHPD6xgC0FJA23Y%2Fs3JAhQCiltBnPKCV7YNFaYDPj5wp9DiNGq%2BOx%2FfDJzrcFxU7OBjMRAM3pEY%2Fu5o1upIrntc3hRMzRQ%2FKSd8rwGeCJJ2qToIgPj8dtfV5EyIy6eXG%2BY2wyI892kXWBHkYx7OtMW8oFfVBTSra7byS62SwU5tt%2B26U0qnkyzoHEsIwpf6EwO01XECdCdSb7aaVhUhVFTaregmeAE9SMw39KTvQY6pgHysdfojsCERLvVZNlENDsiLMXDBSHk2dPeG%2FLc77JXgJ7ZqR5HoeCU8ldu2rjEJnu%2FKXTmV%2BeSeUxs8aFbwiTvXd%2BUotYYBOIMuXooHSOncO7wCxElbtBNAgwc4FqeiE%2BnnW6%2BCZTduuc%2Fp971%2BKRNOE%2BuI7dJkfN8UaeNmAvpw2mwmQuZ%2FokUJKWamA2nHzbCB3Fgx3iztNgTm9lG4YhDp18CUfZk&X-Amz-Signature=deee35c71959ef4e08b6ce9be869257999e781fab9cd7cce6adc71be7803560b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SET3SWQY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF8txcgk4bBmvGAc2ybfR%2B8DJmzgLL1oPn9%2Bu1VjQPcLAiAROQDD5fNYs46HqSJMPJTjjelsyzzTCC6MMJXrsYGIUir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvfG9EoxI1fg3EFU9KtwDCO0gCZ0uXHWZyP2cm29mpR4CpAqaEMd6Myv5yWXZlgPxIwGyZjRJipQK4q2jnbJ1mEGP10cPiMgw8w4uwxaAiicE8vqvo%2B3HylL8XPUOR0zMi23%2FTn%2B%2FznbK3NgIDspepJz%2FxdJP4Ly6Ep%2Ftq6sFHUKf7y5mJ5Nll5stJ%2BxKu6nO6fAKmw8d7KI%2Fy%2BbKfr%2Bxsz2JFEKL6F3KSsGNMOTm3svWxroqBoIO7W%2Bq7rTqK%2FGjtRa4Ta0homfQ42FrMZ501VuqDtnBogXXmbTwKOC7f%2FYVCzvqQ5XGxtKHWKhMSKqcsPYXpQR9VT99KxRPGqOGJPTlpntp0pxMEhtSaeV1u4udcw1jifjODzSw6ja0iyELWwZ9AAGDckUWdtTKuHFaJutugYfrQlrUeSGa4r40rf0b0kIHPD6xgC0FJA23Y%2Fs3JAhQCiltBnPKCV7YNFaYDPj5wp9DiNGq%2BOx%2FfDJzrcFxU7OBjMRAM3pEY%2Fu5o1upIrntc3hRMzRQ%2FKSd8rwGeCJJ2qToIgPj8dtfV5EyIy6eXG%2BY2wyI892kXWBHkYx7OtMW8oFfVBTSra7byS62SwU5tt%2B26U0qnkyzoHEsIwpf6EwO01XECdCdSb7aaVhUhVFTaregmeAE9SMw39KTvQY6pgHysdfojsCERLvVZNlENDsiLMXDBSHk2dPeG%2FLc77JXgJ7ZqR5HoeCU8ldu2rjEJnu%2FKXTmV%2BeSeUxs8aFbwiTvXd%2BUotYYBOIMuXooHSOncO7wCxElbtBNAgwc4FqeiE%2BnnW6%2BCZTduuc%2Fp971%2BKRNOE%2BuI7dJkfN8UaeNmAvpw2mwmQuZ%2FokUJKWamA2nHzbCB3Fgx3iztNgTm9lG4YhDp18CUfZk&X-Amz-Signature=8725c2d2ab207cd8a5b26225bd765d64e8fee3cfe67d95ab38329e9fad5fc46e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SET3SWQY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF8txcgk4bBmvGAc2ybfR%2B8DJmzgLL1oPn9%2Bu1VjQPcLAiAROQDD5fNYs46HqSJMPJTjjelsyzzTCC6MMJXrsYGIUir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvfG9EoxI1fg3EFU9KtwDCO0gCZ0uXHWZyP2cm29mpR4CpAqaEMd6Myv5yWXZlgPxIwGyZjRJipQK4q2jnbJ1mEGP10cPiMgw8w4uwxaAiicE8vqvo%2B3HylL8XPUOR0zMi23%2FTn%2B%2FznbK3NgIDspepJz%2FxdJP4Ly6Ep%2Ftq6sFHUKf7y5mJ5Nll5stJ%2BxKu6nO6fAKmw8d7KI%2Fy%2BbKfr%2Bxsz2JFEKL6F3KSsGNMOTm3svWxroqBoIO7W%2Bq7rTqK%2FGjtRa4Ta0homfQ42FrMZ501VuqDtnBogXXmbTwKOC7f%2FYVCzvqQ5XGxtKHWKhMSKqcsPYXpQR9VT99KxRPGqOGJPTlpntp0pxMEhtSaeV1u4udcw1jifjODzSw6ja0iyELWwZ9AAGDckUWdtTKuHFaJutugYfrQlrUeSGa4r40rf0b0kIHPD6xgC0FJA23Y%2Fs3JAhQCiltBnPKCV7YNFaYDPj5wp9DiNGq%2BOx%2FfDJzrcFxU7OBjMRAM3pEY%2Fu5o1upIrntc3hRMzRQ%2FKSd8rwGeCJJ2qToIgPj8dtfV5EyIy6eXG%2BY2wyI892kXWBHkYx7OtMW8oFfVBTSra7byS62SwU5tt%2B26U0qnkyzoHEsIwpf6EwO01XECdCdSb7aaVhUhVFTaregmeAE9SMw39KTvQY6pgHysdfojsCERLvVZNlENDsiLMXDBSHk2dPeG%2FLc77JXgJ7ZqR5HoeCU8ldu2rjEJnu%2FKXTmV%2BeSeUxs8aFbwiTvXd%2BUotYYBOIMuXooHSOncO7wCxElbtBNAgwc4FqeiE%2BnnW6%2BCZTduuc%2Fp971%2BKRNOE%2BuI7dJkfN8UaeNmAvpw2mwmQuZ%2FokUJKWamA2nHzbCB3Fgx3iztNgTm9lG4YhDp18CUfZk&X-Amz-Signature=8cd2c27dc592636b781204f4067a3558c6d1f2d75ccfe426e6a2186a27466627&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SET3SWQY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF8txcgk4bBmvGAc2ybfR%2B8DJmzgLL1oPn9%2Bu1VjQPcLAiAROQDD5fNYs46HqSJMPJTjjelsyzzTCC6MMJXrsYGIUir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvfG9EoxI1fg3EFU9KtwDCO0gCZ0uXHWZyP2cm29mpR4CpAqaEMd6Myv5yWXZlgPxIwGyZjRJipQK4q2jnbJ1mEGP10cPiMgw8w4uwxaAiicE8vqvo%2B3HylL8XPUOR0zMi23%2FTn%2B%2FznbK3NgIDspepJz%2FxdJP4Ly6Ep%2Ftq6sFHUKf7y5mJ5Nll5stJ%2BxKu6nO6fAKmw8d7KI%2Fy%2BbKfr%2Bxsz2JFEKL6F3KSsGNMOTm3svWxroqBoIO7W%2Bq7rTqK%2FGjtRa4Ta0homfQ42FrMZ501VuqDtnBogXXmbTwKOC7f%2FYVCzvqQ5XGxtKHWKhMSKqcsPYXpQR9VT99KxRPGqOGJPTlpntp0pxMEhtSaeV1u4udcw1jifjODzSw6ja0iyELWwZ9AAGDckUWdtTKuHFaJutugYfrQlrUeSGa4r40rf0b0kIHPD6xgC0FJA23Y%2Fs3JAhQCiltBnPKCV7YNFaYDPj5wp9DiNGq%2BOx%2FfDJzrcFxU7OBjMRAM3pEY%2Fu5o1upIrntc3hRMzRQ%2FKSd8rwGeCJJ2qToIgPj8dtfV5EyIy6eXG%2BY2wyI892kXWBHkYx7OtMW8oFfVBTSra7byS62SwU5tt%2B26U0qnkyzoHEsIwpf6EwO01XECdCdSb7aaVhUhVFTaregmeAE9SMw39KTvQY6pgHysdfojsCERLvVZNlENDsiLMXDBSHk2dPeG%2FLc77JXgJ7ZqR5HoeCU8ldu2rjEJnu%2FKXTmV%2BeSeUxs8aFbwiTvXd%2BUotYYBOIMuXooHSOncO7wCxElbtBNAgwc4FqeiE%2BnnW6%2BCZTduuc%2Fp971%2BKRNOE%2BuI7dJkfN8UaeNmAvpw2mwmQuZ%2FokUJKWamA2nHzbCB3Fgx3iztNgTm9lG4YhDp18CUfZk&X-Amz-Signature=44a3f6f49eec284e5b4dd2d1b6ae35161790f956f48b46e09948cccf5b503bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SET3SWQY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF8txcgk4bBmvGAc2ybfR%2B8DJmzgLL1oPn9%2Bu1VjQPcLAiAROQDD5fNYs46HqSJMPJTjjelsyzzTCC6MMJXrsYGIUir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvfG9EoxI1fg3EFU9KtwDCO0gCZ0uXHWZyP2cm29mpR4CpAqaEMd6Myv5yWXZlgPxIwGyZjRJipQK4q2jnbJ1mEGP10cPiMgw8w4uwxaAiicE8vqvo%2B3HylL8XPUOR0zMi23%2FTn%2B%2FznbK3NgIDspepJz%2FxdJP4Ly6Ep%2Ftq6sFHUKf7y5mJ5Nll5stJ%2BxKu6nO6fAKmw8d7KI%2Fy%2BbKfr%2Bxsz2JFEKL6F3KSsGNMOTm3svWxroqBoIO7W%2Bq7rTqK%2FGjtRa4Ta0homfQ42FrMZ501VuqDtnBogXXmbTwKOC7f%2FYVCzvqQ5XGxtKHWKhMSKqcsPYXpQR9VT99KxRPGqOGJPTlpntp0pxMEhtSaeV1u4udcw1jifjODzSw6ja0iyELWwZ9AAGDckUWdtTKuHFaJutugYfrQlrUeSGa4r40rf0b0kIHPD6xgC0FJA23Y%2Fs3JAhQCiltBnPKCV7YNFaYDPj5wp9DiNGq%2BOx%2FfDJzrcFxU7OBjMRAM3pEY%2Fu5o1upIrntc3hRMzRQ%2FKSd8rwGeCJJ2qToIgPj8dtfV5EyIy6eXG%2BY2wyI892kXWBHkYx7OtMW8oFfVBTSra7byS62SwU5tt%2B26U0qnkyzoHEsIwpf6EwO01XECdCdSb7aaVhUhVFTaregmeAE9SMw39KTvQY6pgHysdfojsCERLvVZNlENDsiLMXDBSHk2dPeG%2FLc77JXgJ7ZqR5HoeCU8ldu2rjEJnu%2FKXTmV%2BeSeUxs8aFbwiTvXd%2BUotYYBOIMuXooHSOncO7wCxElbtBNAgwc4FqeiE%2BnnW6%2BCZTduuc%2Fp971%2BKRNOE%2BuI7dJkfN8UaeNmAvpw2mwmQuZ%2FokUJKWamA2nHzbCB3Fgx3iztNgTm9lG4YhDp18CUfZk&X-Amz-Signature=d8a65cfc90fa269a76869680614d99164d82137966aaf88096842d1de4ab6cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SET3SWQY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF8txcgk4bBmvGAc2ybfR%2B8DJmzgLL1oPn9%2Bu1VjQPcLAiAROQDD5fNYs46HqSJMPJTjjelsyzzTCC6MMJXrsYGIUir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMvfG9EoxI1fg3EFU9KtwDCO0gCZ0uXHWZyP2cm29mpR4CpAqaEMd6Myv5yWXZlgPxIwGyZjRJipQK4q2jnbJ1mEGP10cPiMgw8w4uwxaAiicE8vqvo%2B3HylL8XPUOR0zMi23%2FTn%2B%2FznbK3NgIDspepJz%2FxdJP4Ly6Ep%2Ftq6sFHUKf7y5mJ5Nll5stJ%2BxKu6nO6fAKmw8d7KI%2Fy%2BbKfr%2Bxsz2JFEKL6F3KSsGNMOTm3svWxroqBoIO7W%2Bq7rTqK%2FGjtRa4Ta0homfQ42FrMZ501VuqDtnBogXXmbTwKOC7f%2FYVCzvqQ5XGxtKHWKhMSKqcsPYXpQR9VT99KxRPGqOGJPTlpntp0pxMEhtSaeV1u4udcw1jifjODzSw6ja0iyELWwZ9AAGDckUWdtTKuHFaJutugYfrQlrUeSGa4r40rf0b0kIHPD6xgC0FJA23Y%2Fs3JAhQCiltBnPKCV7YNFaYDPj5wp9DiNGq%2BOx%2FfDJzrcFxU7OBjMRAM3pEY%2Fu5o1upIrntc3hRMzRQ%2FKSd8rwGeCJJ2qToIgPj8dtfV5EyIy6eXG%2BY2wyI892kXWBHkYx7OtMW8oFfVBTSra7byS62SwU5tt%2B26U0qnkyzoHEsIwpf6EwO01XECdCdSb7aaVhUhVFTaregmeAE9SMw39KTvQY6pgHysdfojsCERLvVZNlENDsiLMXDBSHk2dPeG%2FLc77JXgJ7ZqR5HoeCU8ldu2rjEJnu%2FKXTmV%2BeSeUxs8aFbwiTvXd%2BUotYYBOIMuXooHSOncO7wCxElbtBNAgwc4FqeiE%2BnnW6%2BCZTduuc%2Fp971%2BKRNOE%2BuI7dJkfN8UaeNmAvpw2mwmQuZ%2FokUJKWamA2nHzbCB3Fgx3iztNgTm9lG4YhDp18CUfZk&X-Amz-Signature=42c0303716aa930a527b4898fef8d4fe39b6e77dacd9444db36cffca8bbfc8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
