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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGRXQKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKsYiEkUspY%2FQyeizqmDtEDVERWC9zhTrNsylasYwzsAiBJidthmX2YfP0ijb%2Bo8BNhDskN5ec4NFBXpkzUj2pGqiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7pmBPcz6KoxyPDUKtwDKPglVdUToG6Haji41tANgcrOyAjeObxsxL%2FXTVeG19hG3IdQOeWOf7dMiBTsYo9Ui%2B1Iq1lYsKX9oFf9D0hqF6RC3EFGXSq6QDESA9LD8bJg%2FtIYRejlZ1DmQBV%2Fzw7W6zfKdT3N42JOt5%2FifBLcCiSIjhzY25aMrMmHc80xOfPp0ZqKz5KgMSTCrwwdS4Uvv%2BVdrGVVjcNtzsmJu7RnNSJiPaA2tOKNrBccJoTnQx8VUx4j6cYqWdrIur0R4tPNL547ZtHQ5In69%2FgOBqL9KsPLOZr5yLVcT1k2%2BDcjtxB9veEFoV6nydNKMJ8UAxE%2FWBm3%2BIH83yUQmkBk5zSAQIitMWUxX%2Fg4kU9SPu2kUC6cZHBpWVklU4g4GBOR8mdJkN5ri0035LVaT5oJlCSF%2B%2B52uzgBX6W2nfu7r6yPo35OgSUVL4xQH9%2FTAE4Y6LQB3sQ6TDO9RsSn1JNFPBlOpi9j2EhKoO%2FsScCUGy86qqvZitaf%2Futi44yiGSYCaDnB1CwmFUoYeQJ3PCZIE07Tl%2Fi02SBLYiUaL7H2M1K6y%2B4opLLKU35lfT5GT2Tu8Fk%2BkJfmjKwPE9mWTxT1sOcOn8WAnoiih9GvqgECEOtz%2F0m8EbDLKTeFhnaSBpUwz9nLvgY6pgGfIKdTvqF6CNaNhxMLsdjSYoFaTRK16lfoxqnoMSqc4IxCC%2BkrXAURPU6YIItvSt%2BTdDZg4COp6YdJt9eBkPpuL0hEFNjHXJLdh5SNDVBU3RSQkQUpY%2FXmV54IJ8vOfYifTmmHWZoE7KVIzq%2FKTUMN9XlaiBQrn%2F7unxlCLU9%2BGFWEbzR2IbGaNNb%2BC8OzR3nKPzH0fEG6ZaZOTYAdjwYK%2BEI8qXh8&X-Amz-Signature=aafa09f517be4b1a2f410f4b8793c021ff07f23bca7d54422fc48a97eaaedb65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGRXQKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKsYiEkUspY%2FQyeizqmDtEDVERWC9zhTrNsylasYwzsAiBJidthmX2YfP0ijb%2Bo8BNhDskN5ec4NFBXpkzUj2pGqiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7pmBPcz6KoxyPDUKtwDKPglVdUToG6Haji41tANgcrOyAjeObxsxL%2FXTVeG19hG3IdQOeWOf7dMiBTsYo9Ui%2B1Iq1lYsKX9oFf9D0hqF6RC3EFGXSq6QDESA9LD8bJg%2FtIYRejlZ1DmQBV%2Fzw7W6zfKdT3N42JOt5%2FifBLcCiSIjhzY25aMrMmHc80xOfPp0ZqKz5KgMSTCrwwdS4Uvv%2BVdrGVVjcNtzsmJu7RnNSJiPaA2tOKNrBccJoTnQx8VUx4j6cYqWdrIur0R4tPNL547ZtHQ5In69%2FgOBqL9KsPLOZr5yLVcT1k2%2BDcjtxB9veEFoV6nydNKMJ8UAxE%2FWBm3%2BIH83yUQmkBk5zSAQIitMWUxX%2Fg4kU9SPu2kUC6cZHBpWVklU4g4GBOR8mdJkN5ri0035LVaT5oJlCSF%2B%2B52uzgBX6W2nfu7r6yPo35OgSUVL4xQH9%2FTAE4Y6LQB3sQ6TDO9RsSn1JNFPBlOpi9j2EhKoO%2FsScCUGy86qqvZitaf%2Futi44yiGSYCaDnB1CwmFUoYeQJ3PCZIE07Tl%2Fi02SBLYiUaL7H2M1K6y%2B4opLLKU35lfT5GT2Tu8Fk%2BkJfmjKwPE9mWTxT1sOcOn8WAnoiih9GvqgECEOtz%2F0m8EbDLKTeFhnaSBpUwz9nLvgY6pgGfIKdTvqF6CNaNhxMLsdjSYoFaTRK16lfoxqnoMSqc4IxCC%2BkrXAURPU6YIItvSt%2BTdDZg4COp6YdJt9eBkPpuL0hEFNjHXJLdh5SNDVBU3RSQkQUpY%2FXmV54IJ8vOfYifTmmHWZoE7KVIzq%2FKTUMN9XlaiBQrn%2F7unxlCLU9%2BGFWEbzR2IbGaNNb%2BC8OzR3nKPzH0fEG6ZaZOTYAdjwYK%2BEI8qXh8&X-Amz-Signature=ed532ff19625fabe947b2d884a502c70b82d9acaeb3a4ca5fc4ce718d8854bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGRXQKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKsYiEkUspY%2FQyeizqmDtEDVERWC9zhTrNsylasYwzsAiBJidthmX2YfP0ijb%2Bo8BNhDskN5ec4NFBXpkzUj2pGqiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7pmBPcz6KoxyPDUKtwDKPglVdUToG6Haji41tANgcrOyAjeObxsxL%2FXTVeG19hG3IdQOeWOf7dMiBTsYo9Ui%2B1Iq1lYsKX9oFf9D0hqF6RC3EFGXSq6QDESA9LD8bJg%2FtIYRejlZ1DmQBV%2Fzw7W6zfKdT3N42JOt5%2FifBLcCiSIjhzY25aMrMmHc80xOfPp0ZqKz5KgMSTCrwwdS4Uvv%2BVdrGVVjcNtzsmJu7RnNSJiPaA2tOKNrBccJoTnQx8VUx4j6cYqWdrIur0R4tPNL547ZtHQ5In69%2FgOBqL9KsPLOZr5yLVcT1k2%2BDcjtxB9veEFoV6nydNKMJ8UAxE%2FWBm3%2BIH83yUQmkBk5zSAQIitMWUxX%2Fg4kU9SPu2kUC6cZHBpWVklU4g4GBOR8mdJkN5ri0035LVaT5oJlCSF%2B%2B52uzgBX6W2nfu7r6yPo35OgSUVL4xQH9%2FTAE4Y6LQB3sQ6TDO9RsSn1JNFPBlOpi9j2EhKoO%2FsScCUGy86qqvZitaf%2Futi44yiGSYCaDnB1CwmFUoYeQJ3PCZIE07Tl%2Fi02SBLYiUaL7H2M1K6y%2B4opLLKU35lfT5GT2Tu8Fk%2BkJfmjKwPE9mWTxT1sOcOn8WAnoiih9GvqgECEOtz%2F0m8EbDLKTeFhnaSBpUwz9nLvgY6pgGfIKdTvqF6CNaNhxMLsdjSYoFaTRK16lfoxqnoMSqc4IxCC%2BkrXAURPU6YIItvSt%2BTdDZg4COp6YdJt9eBkPpuL0hEFNjHXJLdh5SNDVBU3RSQkQUpY%2FXmV54IJ8vOfYifTmmHWZoE7KVIzq%2FKTUMN9XlaiBQrn%2F7unxlCLU9%2BGFWEbzR2IbGaNNb%2BC8OzR3nKPzH0fEG6ZaZOTYAdjwYK%2BEI8qXh8&X-Amz-Signature=7e359c61107d0411c7006caf714af31ed26e261226c472f96888224dfb1e8b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGRXQKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKsYiEkUspY%2FQyeizqmDtEDVERWC9zhTrNsylasYwzsAiBJidthmX2YfP0ijb%2Bo8BNhDskN5ec4NFBXpkzUj2pGqiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7pmBPcz6KoxyPDUKtwDKPglVdUToG6Haji41tANgcrOyAjeObxsxL%2FXTVeG19hG3IdQOeWOf7dMiBTsYo9Ui%2B1Iq1lYsKX9oFf9D0hqF6RC3EFGXSq6QDESA9LD8bJg%2FtIYRejlZ1DmQBV%2Fzw7W6zfKdT3N42JOt5%2FifBLcCiSIjhzY25aMrMmHc80xOfPp0ZqKz5KgMSTCrwwdS4Uvv%2BVdrGVVjcNtzsmJu7RnNSJiPaA2tOKNrBccJoTnQx8VUx4j6cYqWdrIur0R4tPNL547ZtHQ5In69%2FgOBqL9KsPLOZr5yLVcT1k2%2BDcjtxB9veEFoV6nydNKMJ8UAxE%2FWBm3%2BIH83yUQmkBk5zSAQIitMWUxX%2Fg4kU9SPu2kUC6cZHBpWVklU4g4GBOR8mdJkN5ri0035LVaT5oJlCSF%2B%2B52uzgBX6W2nfu7r6yPo35OgSUVL4xQH9%2FTAE4Y6LQB3sQ6TDO9RsSn1JNFPBlOpi9j2EhKoO%2FsScCUGy86qqvZitaf%2Futi44yiGSYCaDnB1CwmFUoYeQJ3PCZIE07Tl%2Fi02SBLYiUaL7H2M1K6y%2B4opLLKU35lfT5GT2Tu8Fk%2BkJfmjKwPE9mWTxT1sOcOn8WAnoiih9GvqgECEOtz%2F0m8EbDLKTeFhnaSBpUwz9nLvgY6pgGfIKdTvqF6CNaNhxMLsdjSYoFaTRK16lfoxqnoMSqc4IxCC%2BkrXAURPU6YIItvSt%2BTdDZg4COp6YdJt9eBkPpuL0hEFNjHXJLdh5SNDVBU3RSQkQUpY%2FXmV54IJ8vOfYifTmmHWZoE7KVIzq%2FKTUMN9XlaiBQrn%2F7unxlCLU9%2BGFWEbzR2IbGaNNb%2BC8OzR3nKPzH0fEG6ZaZOTYAdjwYK%2BEI8qXh8&X-Amz-Signature=91d1df53853234b9b1713d8f2787b78b12cb732ecd86d0429741190c01be2474&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGRXQKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKsYiEkUspY%2FQyeizqmDtEDVERWC9zhTrNsylasYwzsAiBJidthmX2YfP0ijb%2Bo8BNhDskN5ec4NFBXpkzUj2pGqiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7pmBPcz6KoxyPDUKtwDKPglVdUToG6Haji41tANgcrOyAjeObxsxL%2FXTVeG19hG3IdQOeWOf7dMiBTsYo9Ui%2B1Iq1lYsKX9oFf9D0hqF6RC3EFGXSq6QDESA9LD8bJg%2FtIYRejlZ1DmQBV%2Fzw7W6zfKdT3N42JOt5%2FifBLcCiSIjhzY25aMrMmHc80xOfPp0ZqKz5KgMSTCrwwdS4Uvv%2BVdrGVVjcNtzsmJu7RnNSJiPaA2tOKNrBccJoTnQx8VUx4j6cYqWdrIur0R4tPNL547ZtHQ5In69%2FgOBqL9KsPLOZr5yLVcT1k2%2BDcjtxB9veEFoV6nydNKMJ8UAxE%2FWBm3%2BIH83yUQmkBk5zSAQIitMWUxX%2Fg4kU9SPu2kUC6cZHBpWVklU4g4GBOR8mdJkN5ri0035LVaT5oJlCSF%2B%2B52uzgBX6W2nfu7r6yPo35OgSUVL4xQH9%2FTAE4Y6LQB3sQ6TDO9RsSn1JNFPBlOpi9j2EhKoO%2FsScCUGy86qqvZitaf%2Futi44yiGSYCaDnB1CwmFUoYeQJ3PCZIE07Tl%2Fi02SBLYiUaL7H2M1K6y%2B4opLLKU35lfT5GT2Tu8Fk%2BkJfmjKwPE9mWTxT1sOcOn8WAnoiih9GvqgECEOtz%2F0m8EbDLKTeFhnaSBpUwz9nLvgY6pgGfIKdTvqF6CNaNhxMLsdjSYoFaTRK16lfoxqnoMSqc4IxCC%2BkrXAURPU6YIItvSt%2BTdDZg4COp6YdJt9eBkPpuL0hEFNjHXJLdh5SNDVBU3RSQkQUpY%2FXmV54IJ8vOfYifTmmHWZoE7KVIzq%2FKTUMN9XlaiBQrn%2F7unxlCLU9%2BGFWEbzR2IbGaNNb%2BC8OzR3nKPzH0fEG6ZaZOTYAdjwYK%2BEI8qXh8&X-Amz-Signature=e99fc15b69d0f4284e78d046de6a7cca1638db4776d5bd67b5c0fd7ed1a58b84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGRXQKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKsYiEkUspY%2FQyeizqmDtEDVERWC9zhTrNsylasYwzsAiBJidthmX2YfP0ijb%2Bo8BNhDskN5ec4NFBXpkzUj2pGqiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7pmBPcz6KoxyPDUKtwDKPglVdUToG6Haji41tANgcrOyAjeObxsxL%2FXTVeG19hG3IdQOeWOf7dMiBTsYo9Ui%2B1Iq1lYsKX9oFf9D0hqF6RC3EFGXSq6QDESA9LD8bJg%2FtIYRejlZ1DmQBV%2Fzw7W6zfKdT3N42JOt5%2FifBLcCiSIjhzY25aMrMmHc80xOfPp0ZqKz5KgMSTCrwwdS4Uvv%2BVdrGVVjcNtzsmJu7RnNSJiPaA2tOKNrBccJoTnQx8VUx4j6cYqWdrIur0R4tPNL547ZtHQ5In69%2FgOBqL9KsPLOZr5yLVcT1k2%2BDcjtxB9veEFoV6nydNKMJ8UAxE%2FWBm3%2BIH83yUQmkBk5zSAQIitMWUxX%2Fg4kU9SPu2kUC6cZHBpWVklU4g4GBOR8mdJkN5ri0035LVaT5oJlCSF%2B%2B52uzgBX6W2nfu7r6yPo35OgSUVL4xQH9%2FTAE4Y6LQB3sQ6TDO9RsSn1JNFPBlOpi9j2EhKoO%2FsScCUGy86qqvZitaf%2Futi44yiGSYCaDnB1CwmFUoYeQJ3PCZIE07Tl%2Fi02SBLYiUaL7H2M1K6y%2B4opLLKU35lfT5GT2Tu8Fk%2BkJfmjKwPE9mWTxT1sOcOn8WAnoiih9GvqgECEOtz%2F0m8EbDLKTeFhnaSBpUwz9nLvgY6pgGfIKdTvqF6CNaNhxMLsdjSYoFaTRK16lfoxqnoMSqc4IxCC%2BkrXAURPU6YIItvSt%2BTdDZg4COp6YdJt9eBkPpuL0hEFNjHXJLdh5SNDVBU3RSQkQUpY%2FXmV54IJ8vOfYifTmmHWZoE7KVIzq%2FKTUMN9XlaiBQrn%2F7unxlCLU9%2BGFWEbzR2IbGaNNb%2BC8OzR3nKPzH0fEG6ZaZOTYAdjwYK%2BEI8qXh8&X-Amz-Signature=6cde5dac844b5564cd75e6de77476c5854c438d7e0be33ab6dfc96e4e913e33d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGRXQKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKsYiEkUspY%2FQyeizqmDtEDVERWC9zhTrNsylasYwzsAiBJidthmX2YfP0ijb%2Bo8BNhDskN5ec4NFBXpkzUj2pGqiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7pmBPcz6KoxyPDUKtwDKPglVdUToG6Haji41tANgcrOyAjeObxsxL%2FXTVeG19hG3IdQOeWOf7dMiBTsYo9Ui%2B1Iq1lYsKX9oFf9D0hqF6RC3EFGXSq6QDESA9LD8bJg%2FtIYRejlZ1DmQBV%2Fzw7W6zfKdT3N42JOt5%2FifBLcCiSIjhzY25aMrMmHc80xOfPp0ZqKz5KgMSTCrwwdS4Uvv%2BVdrGVVjcNtzsmJu7RnNSJiPaA2tOKNrBccJoTnQx8VUx4j6cYqWdrIur0R4tPNL547ZtHQ5In69%2FgOBqL9KsPLOZr5yLVcT1k2%2BDcjtxB9veEFoV6nydNKMJ8UAxE%2FWBm3%2BIH83yUQmkBk5zSAQIitMWUxX%2Fg4kU9SPu2kUC6cZHBpWVklU4g4GBOR8mdJkN5ri0035LVaT5oJlCSF%2B%2B52uzgBX6W2nfu7r6yPo35OgSUVL4xQH9%2FTAE4Y6LQB3sQ6TDO9RsSn1JNFPBlOpi9j2EhKoO%2FsScCUGy86qqvZitaf%2Futi44yiGSYCaDnB1CwmFUoYeQJ3PCZIE07Tl%2Fi02SBLYiUaL7H2M1K6y%2B4opLLKU35lfT5GT2Tu8Fk%2BkJfmjKwPE9mWTxT1sOcOn8WAnoiih9GvqgECEOtz%2F0m8EbDLKTeFhnaSBpUwz9nLvgY6pgGfIKdTvqF6CNaNhxMLsdjSYoFaTRK16lfoxqnoMSqc4IxCC%2BkrXAURPU6YIItvSt%2BTdDZg4COp6YdJt9eBkPpuL0hEFNjHXJLdh5SNDVBU3RSQkQUpY%2FXmV54IJ8vOfYifTmmHWZoE7KVIzq%2FKTUMN9XlaiBQrn%2F7unxlCLU9%2BGFWEbzR2IbGaNNb%2BC8OzR3nKPzH0fEG6ZaZOTYAdjwYK%2BEI8qXh8&X-Amz-Signature=c68f612e8e8dfa956d48951ac2ed9e22f7693787984280bb65a11bbd605e1e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGRXQKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKsYiEkUspY%2FQyeizqmDtEDVERWC9zhTrNsylasYwzsAiBJidthmX2YfP0ijb%2Bo8BNhDskN5ec4NFBXpkzUj2pGqiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz7pmBPcz6KoxyPDUKtwDKPglVdUToG6Haji41tANgcrOyAjeObxsxL%2FXTVeG19hG3IdQOeWOf7dMiBTsYo9Ui%2B1Iq1lYsKX9oFf9D0hqF6RC3EFGXSq6QDESA9LD8bJg%2FtIYRejlZ1DmQBV%2Fzw7W6zfKdT3N42JOt5%2FifBLcCiSIjhzY25aMrMmHc80xOfPp0ZqKz5KgMSTCrwwdS4Uvv%2BVdrGVVjcNtzsmJu7RnNSJiPaA2tOKNrBccJoTnQx8VUx4j6cYqWdrIur0R4tPNL547ZtHQ5In69%2FgOBqL9KsPLOZr5yLVcT1k2%2BDcjtxB9veEFoV6nydNKMJ8UAxE%2FWBm3%2BIH83yUQmkBk5zSAQIitMWUxX%2Fg4kU9SPu2kUC6cZHBpWVklU4g4GBOR8mdJkN5ri0035LVaT5oJlCSF%2B%2B52uzgBX6W2nfu7r6yPo35OgSUVL4xQH9%2FTAE4Y6LQB3sQ6TDO9RsSn1JNFPBlOpi9j2EhKoO%2FsScCUGy86qqvZitaf%2Futi44yiGSYCaDnB1CwmFUoYeQJ3PCZIE07Tl%2Fi02SBLYiUaL7H2M1K6y%2B4opLLKU35lfT5GT2Tu8Fk%2BkJfmjKwPE9mWTxT1sOcOn8WAnoiih9GvqgECEOtz%2F0m8EbDLKTeFhnaSBpUwz9nLvgY6pgGfIKdTvqF6CNaNhxMLsdjSYoFaTRK16lfoxqnoMSqc4IxCC%2BkrXAURPU6YIItvSt%2BTdDZg4COp6YdJt9eBkPpuL0hEFNjHXJLdh5SNDVBU3RSQkQUpY%2FXmV54IJ8vOfYifTmmHWZoE7KVIzq%2FKTUMN9XlaiBQrn%2F7unxlCLU9%2BGFWEbzR2IbGaNNb%2BC8OzR3nKPzH0fEG6ZaZOTYAdjwYK%2BEI8qXh8&X-Amz-Signature=060abd6649e181b755dbaec11cbf674e7de5c2fe14834a1520405d7dfb5850b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
