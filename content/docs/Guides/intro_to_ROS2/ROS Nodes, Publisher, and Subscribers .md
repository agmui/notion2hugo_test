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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOZTAZ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICmadeLJtq5Jaa2PVBTOfZ8Em6sPVyWqAY2J3Vb3PbO9AiAbkvml64OHwFcnUcS1ylRT%2BIY%2FlPKmz52aG%2B8%2B%2FH%2Ba2yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjg6Tq1%2FQYYwSxORqKtwDvOZKy5gDeEn9x7nHH2yG3LT2ekWaWIVSPY02Vnj5HtA3I3jQDu8QBUrnOXxhxnFWSEKTs2wrWHTvVWp4vv2DJrn58Fhun96KsrIt%2FjIrfGvyQhQ2b3fmtgl%2BZuU2jjubgxZd%2Bxu0BWsn6CQn1sxUoDAq6HbkjXe7vkOcyYHlOk6OA7J3Huf5YMoVMdFFC5an%2Fxb%2BvBKj%2BfIgaXz2GLBV9DO1eu%2B8pU6hppu4ai5TqKlUsEoW3lOqTRAJDDqeyIaHPezpYlSRV8r66hwgIp5r2404%2Fc0gWjBNkR%2BBniKNmTIZW2BsRJZzUDFHP2iErSI1wUX9w%2BgvOoUmKJiOLp4z9nOOkVU3UwlwS5skdhdVC6VEo8aGs4w5T%2BXpy9WIlqYV0BO%2Fgk9H9M8ablR89fcM7bEyYKzlUoKnT22UA6GRjbABB8GaQbp1ItRaFurWiuLoF2SHExJm3A8PXg%2BHOVDCr9KETkb9xPSvJo6VdnVxAazNfaHBWt4FXI0KPe6MhAQXszKV2KLpXXHBPwV1Nb0%2FQLf5Q12FRa9fNhxXLiBn3l9IrJe7uMsLYNi1UBcvvZoIf5WRLpAOATJWlZ8l0fSgO2l7V7O3stYn3%2BsLiEEO4mTpTJZmVPUWfsHeiR0wp96BwgY6pgEAKrOQsGWiJaMuxv1vC5QjLgw2japF8W56ktUC0IZvfOY4bXsNvcAMgtE5CTIVB%2FD4M5AxgfNYrdQgvSbV3jnvzmYQupTPg25Ml1ElCQZmcCbBJiZYlFNpyehHEf9bSyonghhj0fqbItW59Xaiv6jzGN%2BMsj2DFju2TI5W59xY6lbP0uc4mkcwxrUqwNg3JGxHaktcuI0JZ5jYSzAYKqPzrxSEsFGZ&X-Amz-Signature=ba72ec104b0a8df2953d18bbac8ae559f979205ddb37fe35cdfc4e251af4722a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOZTAZ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICmadeLJtq5Jaa2PVBTOfZ8Em6sPVyWqAY2J3Vb3PbO9AiAbkvml64OHwFcnUcS1ylRT%2BIY%2FlPKmz52aG%2B8%2B%2FH%2Ba2yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjg6Tq1%2FQYYwSxORqKtwDvOZKy5gDeEn9x7nHH2yG3LT2ekWaWIVSPY02Vnj5HtA3I3jQDu8QBUrnOXxhxnFWSEKTs2wrWHTvVWp4vv2DJrn58Fhun96KsrIt%2FjIrfGvyQhQ2b3fmtgl%2BZuU2jjubgxZd%2Bxu0BWsn6CQn1sxUoDAq6HbkjXe7vkOcyYHlOk6OA7J3Huf5YMoVMdFFC5an%2Fxb%2BvBKj%2BfIgaXz2GLBV9DO1eu%2B8pU6hppu4ai5TqKlUsEoW3lOqTRAJDDqeyIaHPezpYlSRV8r66hwgIp5r2404%2Fc0gWjBNkR%2BBniKNmTIZW2BsRJZzUDFHP2iErSI1wUX9w%2BgvOoUmKJiOLp4z9nOOkVU3UwlwS5skdhdVC6VEo8aGs4w5T%2BXpy9WIlqYV0BO%2Fgk9H9M8ablR89fcM7bEyYKzlUoKnT22UA6GRjbABB8GaQbp1ItRaFurWiuLoF2SHExJm3A8PXg%2BHOVDCr9KETkb9xPSvJo6VdnVxAazNfaHBWt4FXI0KPe6MhAQXszKV2KLpXXHBPwV1Nb0%2FQLf5Q12FRa9fNhxXLiBn3l9IrJe7uMsLYNi1UBcvvZoIf5WRLpAOATJWlZ8l0fSgO2l7V7O3stYn3%2BsLiEEO4mTpTJZmVPUWfsHeiR0wp96BwgY6pgEAKrOQsGWiJaMuxv1vC5QjLgw2japF8W56ktUC0IZvfOY4bXsNvcAMgtE5CTIVB%2FD4M5AxgfNYrdQgvSbV3jnvzmYQupTPg25Ml1ElCQZmcCbBJiZYlFNpyehHEf9bSyonghhj0fqbItW59Xaiv6jzGN%2BMsj2DFju2TI5W59xY6lbP0uc4mkcwxrUqwNg3JGxHaktcuI0JZ5jYSzAYKqPzrxSEsFGZ&X-Amz-Signature=2de86e03861eee6f4de41d4831e563a687ab528ae604eaf753950ba3ed5df113&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOZTAZ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICmadeLJtq5Jaa2PVBTOfZ8Em6sPVyWqAY2J3Vb3PbO9AiAbkvml64OHwFcnUcS1ylRT%2BIY%2FlPKmz52aG%2B8%2B%2FH%2Ba2yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjg6Tq1%2FQYYwSxORqKtwDvOZKy5gDeEn9x7nHH2yG3LT2ekWaWIVSPY02Vnj5HtA3I3jQDu8QBUrnOXxhxnFWSEKTs2wrWHTvVWp4vv2DJrn58Fhun96KsrIt%2FjIrfGvyQhQ2b3fmtgl%2BZuU2jjubgxZd%2Bxu0BWsn6CQn1sxUoDAq6HbkjXe7vkOcyYHlOk6OA7J3Huf5YMoVMdFFC5an%2Fxb%2BvBKj%2BfIgaXz2GLBV9DO1eu%2B8pU6hppu4ai5TqKlUsEoW3lOqTRAJDDqeyIaHPezpYlSRV8r66hwgIp5r2404%2Fc0gWjBNkR%2BBniKNmTIZW2BsRJZzUDFHP2iErSI1wUX9w%2BgvOoUmKJiOLp4z9nOOkVU3UwlwS5skdhdVC6VEo8aGs4w5T%2BXpy9WIlqYV0BO%2Fgk9H9M8ablR89fcM7bEyYKzlUoKnT22UA6GRjbABB8GaQbp1ItRaFurWiuLoF2SHExJm3A8PXg%2BHOVDCr9KETkb9xPSvJo6VdnVxAazNfaHBWt4FXI0KPe6MhAQXszKV2KLpXXHBPwV1Nb0%2FQLf5Q12FRa9fNhxXLiBn3l9IrJe7uMsLYNi1UBcvvZoIf5WRLpAOATJWlZ8l0fSgO2l7V7O3stYn3%2BsLiEEO4mTpTJZmVPUWfsHeiR0wp96BwgY6pgEAKrOQsGWiJaMuxv1vC5QjLgw2japF8W56ktUC0IZvfOY4bXsNvcAMgtE5CTIVB%2FD4M5AxgfNYrdQgvSbV3jnvzmYQupTPg25Ml1ElCQZmcCbBJiZYlFNpyehHEf9bSyonghhj0fqbItW59Xaiv6jzGN%2BMsj2DFju2TI5W59xY6lbP0uc4mkcwxrUqwNg3JGxHaktcuI0JZ5jYSzAYKqPzrxSEsFGZ&X-Amz-Signature=045093544d7a90ea2492da6461309a777d408314dc5c720926e3eef4e71e2481&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOZTAZ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICmadeLJtq5Jaa2PVBTOfZ8Em6sPVyWqAY2J3Vb3PbO9AiAbkvml64OHwFcnUcS1ylRT%2BIY%2FlPKmz52aG%2B8%2B%2FH%2Ba2yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjg6Tq1%2FQYYwSxORqKtwDvOZKy5gDeEn9x7nHH2yG3LT2ekWaWIVSPY02Vnj5HtA3I3jQDu8QBUrnOXxhxnFWSEKTs2wrWHTvVWp4vv2DJrn58Fhun96KsrIt%2FjIrfGvyQhQ2b3fmtgl%2BZuU2jjubgxZd%2Bxu0BWsn6CQn1sxUoDAq6HbkjXe7vkOcyYHlOk6OA7J3Huf5YMoVMdFFC5an%2Fxb%2BvBKj%2BfIgaXz2GLBV9DO1eu%2B8pU6hppu4ai5TqKlUsEoW3lOqTRAJDDqeyIaHPezpYlSRV8r66hwgIp5r2404%2Fc0gWjBNkR%2BBniKNmTIZW2BsRJZzUDFHP2iErSI1wUX9w%2BgvOoUmKJiOLp4z9nOOkVU3UwlwS5skdhdVC6VEo8aGs4w5T%2BXpy9WIlqYV0BO%2Fgk9H9M8ablR89fcM7bEyYKzlUoKnT22UA6GRjbABB8GaQbp1ItRaFurWiuLoF2SHExJm3A8PXg%2BHOVDCr9KETkb9xPSvJo6VdnVxAazNfaHBWt4FXI0KPe6MhAQXszKV2KLpXXHBPwV1Nb0%2FQLf5Q12FRa9fNhxXLiBn3l9IrJe7uMsLYNi1UBcvvZoIf5WRLpAOATJWlZ8l0fSgO2l7V7O3stYn3%2BsLiEEO4mTpTJZmVPUWfsHeiR0wp96BwgY6pgEAKrOQsGWiJaMuxv1vC5QjLgw2japF8W56ktUC0IZvfOY4bXsNvcAMgtE5CTIVB%2FD4M5AxgfNYrdQgvSbV3jnvzmYQupTPg25Ml1ElCQZmcCbBJiZYlFNpyehHEf9bSyonghhj0fqbItW59Xaiv6jzGN%2BMsj2DFju2TI5W59xY6lbP0uc4mkcwxrUqwNg3JGxHaktcuI0JZ5jYSzAYKqPzrxSEsFGZ&X-Amz-Signature=ed26cf8273c1e3b444adac091053084cd8b25ef0a3aed4c7bcb32f58147333f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOZTAZ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICmadeLJtq5Jaa2PVBTOfZ8Em6sPVyWqAY2J3Vb3PbO9AiAbkvml64OHwFcnUcS1ylRT%2BIY%2FlPKmz52aG%2B8%2B%2FH%2Ba2yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjg6Tq1%2FQYYwSxORqKtwDvOZKy5gDeEn9x7nHH2yG3LT2ekWaWIVSPY02Vnj5HtA3I3jQDu8QBUrnOXxhxnFWSEKTs2wrWHTvVWp4vv2DJrn58Fhun96KsrIt%2FjIrfGvyQhQ2b3fmtgl%2BZuU2jjubgxZd%2Bxu0BWsn6CQn1sxUoDAq6HbkjXe7vkOcyYHlOk6OA7J3Huf5YMoVMdFFC5an%2Fxb%2BvBKj%2BfIgaXz2GLBV9DO1eu%2B8pU6hppu4ai5TqKlUsEoW3lOqTRAJDDqeyIaHPezpYlSRV8r66hwgIp5r2404%2Fc0gWjBNkR%2BBniKNmTIZW2BsRJZzUDFHP2iErSI1wUX9w%2BgvOoUmKJiOLp4z9nOOkVU3UwlwS5skdhdVC6VEo8aGs4w5T%2BXpy9WIlqYV0BO%2Fgk9H9M8ablR89fcM7bEyYKzlUoKnT22UA6GRjbABB8GaQbp1ItRaFurWiuLoF2SHExJm3A8PXg%2BHOVDCr9KETkb9xPSvJo6VdnVxAazNfaHBWt4FXI0KPe6MhAQXszKV2KLpXXHBPwV1Nb0%2FQLf5Q12FRa9fNhxXLiBn3l9IrJe7uMsLYNi1UBcvvZoIf5WRLpAOATJWlZ8l0fSgO2l7V7O3stYn3%2BsLiEEO4mTpTJZmVPUWfsHeiR0wp96BwgY6pgEAKrOQsGWiJaMuxv1vC5QjLgw2japF8W56ktUC0IZvfOY4bXsNvcAMgtE5CTIVB%2FD4M5AxgfNYrdQgvSbV3jnvzmYQupTPg25Ml1ElCQZmcCbBJiZYlFNpyehHEf9bSyonghhj0fqbItW59Xaiv6jzGN%2BMsj2DFju2TI5W59xY6lbP0uc4mkcwxrUqwNg3JGxHaktcuI0JZ5jYSzAYKqPzrxSEsFGZ&X-Amz-Signature=90678fc77a2660bc383a970da8414de3587677d8a887bdfab9964aa0903f2bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOZTAZ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICmadeLJtq5Jaa2PVBTOfZ8Em6sPVyWqAY2J3Vb3PbO9AiAbkvml64OHwFcnUcS1ylRT%2BIY%2FlPKmz52aG%2B8%2B%2FH%2Ba2yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjg6Tq1%2FQYYwSxORqKtwDvOZKy5gDeEn9x7nHH2yG3LT2ekWaWIVSPY02Vnj5HtA3I3jQDu8QBUrnOXxhxnFWSEKTs2wrWHTvVWp4vv2DJrn58Fhun96KsrIt%2FjIrfGvyQhQ2b3fmtgl%2BZuU2jjubgxZd%2Bxu0BWsn6CQn1sxUoDAq6HbkjXe7vkOcyYHlOk6OA7J3Huf5YMoVMdFFC5an%2Fxb%2BvBKj%2BfIgaXz2GLBV9DO1eu%2B8pU6hppu4ai5TqKlUsEoW3lOqTRAJDDqeyIaHPezpYlSRV8r66hwgIp5r2404%2Fc0gWjBNkR%2BBniKNmTIZW2BsRJZzUDFHP2iErSI1wUX9w%2BgvOoUmKJiOLp4z9nOOkVU3UwlwS5skdhdVC6VEo8aGs4w5T%2BXpy9WIlqYV0BO%2Fgk9H9M8ablR89fcM7bEyYKzlUoKnT22UA6GRjbABB8GaQbp1ItRaFurWiuLoF2SHExJm3A8PXg%2BHOVDCr9KETkb9xPSvJo6VdnVxAazNfaHBWt4FXI0KPe6MhAQXszKV2KLpXXHBPwV1Nb0%2FQLf5Q12FRa9fNhxXLiBn3l9IrJe7uMsLYNi1UBcvvZoIf5WRLpAOATJWlZ8l0fSgO2l7V7O3stYn3%2BsLiEEO4mTpTJZmVPUWfsHeiR0wp96BwgY6pgEAKrOQsGWiJaMuxv1vC5QjLgw2japF8W56ktUC0IZvfOY4bXsNvcAMgtE5CTIVB%2FD4M5AxgfNYrdQgvSbV3jnvzmYQupTPg25Ml1ElCQZmcCbBJiZYlFNpyehHEf9bSyonghhj0fqbItW59Xaiv6jzGN%2BMsj2DFju2TI5W59xY6lbP0uc4mkcwxrUqwNg3JGxHaktcuI0JZ5jYSzAYKqPzrxSEsFGZ&X-Amz-Signature=15da9758a3c6e73e0b46a0fcbd6be57f76aaa8db2530b61ad143d9ea270c40e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOZTAZ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICmadeLJtq5Jaa2PVBTOfZ8Em6sPVyWqAY2J3Vb3PbO9AiAbkvml64OHwFcnUcS1ylRT%2BIY%2FlPKmz52aG%2B8%2B%2FH%2Ba2yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjg6Tq1%2FQYYwSxORqKtwDvOZKy5gDeEn9x7nHH2yG3LT2ekWaWIVSPY02Vnj5HtA3I3jQDu8QBUrnOXxhxnFWSEKTs2wrWHTvVWp4vv2DJrn58Fhun96KsrIt%2FjIrfGvyQhQ2b3fmtgl%2BZuU2jjubgxZd%2Bxu0BWsn6CQn1sxUoDAq6HbkjXe7vkOcyYHlOk6OA7J3Huf5YMoVMdFFC5an%2Fxb%2BvBKj%2BfIgaXz2GLBV9DO1eu%2B8pU6hppu4ai5TqKlUsEoW3lOqTRAJDDqeyIaHPezpYlSRV8r66hwgIp5r2404%2Fc0gWjBNkR%2BBniKNmTIZW2BsRJZzUDFHP2iErSI1wUX9w%2BgvOoUmKJiOLp4z9nOOkVU3UwlwS5skdhdVC6VEo8aGs4w5T%2BXpy9WIlqYV0BO%2Fgk9H9M8ablR89fcM7bEyYKzlUoKnT22UA6GRjbABB8GaQbp1ItRaFurWiuLoF2SHExJm3A8PXg%2BHOVDCr9KETkb9xPSvJo6VdnVxAazNfaHBWt4FXI0KPe6MhAQXszKV2KLpXXHBPwV1Nb0%2FQLf5Q12FRa9fNhxXLiBn3l9IrJe7uMsLYNi1UBcvvZoIf5WRLpAOATJWlZ8l0fSgO2l7V7O3stYn3%2BsLiEEO4mTpTJZmVPUWfsHeiR0wp96BwgY6pgEAKrOQsGWiJaMuxv1vC5QjLgw2japF8W56ktUC0IZvfOY4bXsNvcAMgtE5CTIVB%2FD4M5AxgfNYrdQgvSbV3jnvzmYQupTPg25Ml1ElCQZmcCbBJiZYlFNpyehHEf9bSyonghhj0fqbItW59Xaiv6jzGN%2BMsj2DFju2TI5W59xY6lbP0uc4mkcwxrUqwNg3JGxHaktcuI0JZ5jYSzAYKqPzrxSEsFGZ&X-Amz-Signature=4e5e659b157fd932c38241ffb4fe0dc925f0a1e667959c9bba74d4f0efa210df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOZTAZ4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICmadeLJtq5Jaa2PVBTOfZ8Em6sPVyWqAY2J3Vb3PbO9AiAbkvml64OHwFcnUcS1ylRT%2BIY%2FlPKmz52aG%2B8%2B%2FH%2Ba2yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjg6Tq1%2FQYYwSxORqKtwDvOZKy5gDeEn9x7nHH2yG3LT2ekWaWIVSPY02Vnj5HtA3I3jQDu8QBUrnOXxhxnFWSEKTs2wrWHTvVWp4vv2DJrn58Fhun96KsrIt%2FjIrfGvyQhQ2b3fmtgl%2BZuU2jjubgxZd%2Bxu0BWsn6CQn1sxUoDAq6HbkjXe7vkOcyYHlOk6OA7J3Huf5YMoVMdFFC5an%2Fxb%2BvBKj%2BfIgaXz2GLBV9DO1eu%2B8pU6hppu4ai5TqKlUsEoW3lOqTRAJDDqeyIaHPezpYlSRV8r66hwgIp5r2404%2Fc0gWjBNkR%2BBniKNmTIZW2BsRJZzUDFHP2iErSI1wUX9w%2BgvOoUmKJiOLp4z9nOOkVU3UwlwS5skdhdVC6VEo8aGs4w5T%2BXpy9WIlqYV0BO%2Fgk9H9M8ablR89fcM7bEyYKzlUoKnT22UA6GRjbABB8GaQbp1ItRaFurWiuLoF2SHExJm3A8PXg%2BHOVDCr9KETkb9xPSvJo6VdnVxAazNfaHBWt4FXI0KPe6MhAQXszKV2KLpXXHBPwV1Nb0%2FQLf5Q12FRa9fNhxXLiBn3l9IrJe7uMsLYNi1UBcvvZoIf5WRLpAOATJWlZ8l0fSgO2l7V7O3stYn3%2BsLiEEO4mTpTJZmVPUWfsHeiR0wp96BwgY6pgEAKrOQsGWiJaMuxv1vC5QjLgw2japF8W56ktUC0IZvfOY4bXsNvcAMgtE5CTIVB%2FD4M5AxgfNYrdQgvSbV3jnvzmYQupTPg25Ml1ElCQZmcCbBJiZYlFNpyehHEf9bSyonghhj0fqbItW59Xaiv6jzGN%2BMsj2DFju2TI5W59xY6lbP0uc4mkcwxrUqwNg3JGxHaktcuI0JZ5jYSzAYKqPzrxSEsFGZ&X-Amz-Signature=0a15726cefe6cca2db93a9d62821995c878cdaf4382f05757410585179a33734&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
