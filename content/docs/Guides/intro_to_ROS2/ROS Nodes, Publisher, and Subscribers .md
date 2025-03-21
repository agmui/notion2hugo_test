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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7ZJ6WC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEb3MR6WUhkhv1RZ%2BwZOmZdQWi1ymyPkt04ihrraMH2zAiBSZEpYH4V9a7S%2BEi47wEK%2FMqdx6QIdohYhGu48nKwrmyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxM%2BR%2BQRS%2FzIzKDsKtwDQFKr6fIKbtYby2ZbBafVk9wvZ81Vy7jXFWxLdI%2F%2BnghNzc34txobkI9I0junrz6htlRv4RT4gH0vPxNFSNylG9EbR6RhY7fRxouIomEPpUQSrs0BMQ2YKdlG2e4N9TDF%2BkBWNDq%2FVhChaplyfz7h80JWJQzWEI%2FL0yODAudPQMm%2F5XOLn4sSwXYtFKAotPvYJYMhOdQxuXvVhnoEmcd1EWVbP9sYvyfi7%2BIkSyWkzn%2B6YQplf0QjTG%2FAImF1%2BujpbUemyHF6vzobeboxA6rX1HPsEwtoAFTDY7TczpxwEchAGgyfOW%2F9YGW%2FZeWWcNGLanxJlaGnngAbUQhUp%2BUwcXEbzkvFz0zirLVVxuhfSJ5%2Fpn0O0PjlH2b8%2F1Yl2MLomjbUubuEzlRAuNFsdjlMaCCXlbB8dK2wNDGZwKg4uMgpTg0ikaDxd0hp%2BHfauWItdHkk3XzpGaXs2jJQ12o%2BjU5zC44s6CXSA%2BemuEsTntGm0ur3cBYo%2Biy8x8llTkcZHpdBbxQGSHpZoh5F%2Bp1HCRAUxz%2Fx%2Fw8dEq9lREMxMZDYES6E6ovILdwiN%2FJgBb19dezkcY47KMEtIOgfMowiwzyjlBO1TvVhdClBplwuJwlerIZo2d11hAuG0K0wwtz2vgY6pgGSHYoxEI1WChmMFX6OyhqfekPCF3fbRyff2xzvxm37UwDBkauYLhO9iFrRrrPl473LT44zX9L1KU3OfVfkq61X0giRXHm%2B%2FXFsJvNz0Sh61l9w9o%2FCmUtN6Be9%2B7anQWY2qgqMMAqWnFCTRAnzymFtaWUyUSbE7%2Fe%2BHFQTEAu5Y5OMTM8G%2BEhxc57YOD7liAEVkUqapbO%2FFK2bZ1KVlAw4WOOkXWe1&X-Amz-Signature=bb3c904a9747088f416b00564fd46c1589039cb543dab24d3c31077baaf060f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7ZJ6WC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEb3MR6WUhkhv1RZ%2BwZOmZdQWi1ymyPkt04ihrraMH2zAiBSZEpYH4V9a7S%2BEi47wEK%2FMqdx6QIdohYhGu48nKwrmyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxM%2BR%2BQRS%2FzIzKDsKtwDQFKr6fIKbtYby2ZbBafVk9wvZ81Vy7jXFWxLdI%2F%2BnghNzc34txobkI9I0junrz6htlRv4RT4gH0vPxNFSNylG9EbR6RhY7fRxouIomEPpUQSrs0BMQ2YKdlG2e4N9TDF%2BkBWNDq%2FVhChaplyfz7h80JWJQzWEI%2FL0yODAudPQMm%2F5XOLn4sSwXYtFKAotPvYJYMhOdQxuXvVhnoEmcd1EWVbP9sYvyfi7%2BIkSyWkzn%2B6YQplf0QjTG%2FAImF1%2BujpbUemyHF6vzobeboxA6rX1HPsEwtoAFTDY7TczpxwEchAGgyfOW%2F9YGW%2FZeWWcNGLanxJlaGnngAbUQhUp%2BUwcXEbzkvFz0zirLVVxuhfSJ5%2Fpn0O0PjlH2b8%2F1Yl2MLomjbUubuEzlRAuNFsdjlMaCCXlbB8dK2wNDGZwKg4uMgpTg0ikaDxd0hp%2BHfauWItdHkk3XzpGaXs2jJQ12o%2BjU5zC44s6CXSA%2BemuEsTntGm0ur3cBYo%2Biy8x8llTkcZHpdBbxQGSHpZoh5F%2Bp1HCRAUxz%2Fx%2Fw8dEq9lREMxMZDYES6E6ovILdwiN%2FJgBb19dezkcY47KMEtIOgfMowiwzyjlBO1TvVhdClBplwuJwlerIZo2d11hAuG0K0wwtz2vgY6pgGSHYoxEI1WChmMFX6OyhqfekPCF3fbRyff2xzvxm37UwDBkauYLhO9iFrRrrPl473LT44zX9L1KU3OfVfkq61X0giRXHm%2B%2FXFsJvNz0Sh61l9w9o%2FCmUtN6Be9%2B7anQWY2qgqMMAqWnFCTRAnzymFtaWUyUSbE7%2Fe%2BHFQTEAu5Y5OMTM8G%2BEhxc57YOD7liAEVkUqapbO%2FFK2bZ1KVlAw4WOOkXWe1&X-Amz-Signature=9aed5b1fc0ddb2a818d54ec469db547e76acd82911794b45f28e4cc7c113a6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7ZJ6WC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEb3MR6WUhkhv1RZ%2BwZOmZdQWi1ymyPkt04ihrraMH2zAiBSZEpYH4V9a7S%2BEi47wEK%2FMqdx6QIdohYhGu48nKwrmyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxM%2BR%2BQRS%2FzIzKDsKtwDQFKr6fIKbtYby2ZbBafVk9wvZ81Vy7jXFWxLdI%2F%2BnghNzc34txobkI9I0junrz6htlRv4RT4gH0vPxNFSNylG9EbR6RhY7fRxouIomEPpUQSrs0BMQ2YKdlG2e4N9TDF%2BkBWNDq%2FVhChaplyfz7h80JWJQzWEI%2FL0yODAudPQMm%2F5XOLn4sSwXYtFKAotPvYJYMhOdQxuXvVhnoEmcd1EWVbP9sYvyfi7%2BIkSyWkzn%2B6YQplf0QjTG%2FAImF1%2BujpbUemyHF6vzobeboxA6rX1HPsEwtoAFTDY7TczpxwEchAGgyfOW%2F9YGW%2FZeWWcNGLanxJlaGnngAbUQhUp%2BUwcXEbzkvFz0zirLVVxuhfSJ5%2Fpn0O0PjlH2b8%2F1Yl2MLomjbUubuEzlRAuNFsdjlMaCCXlbB8dK2wNDGZwKg4uMgpTg0ikaDxd0hp%2BHfauWItdHkk3XzpGaXs2jJQ12o%2BjU5zC44s6CXSA%2BemuEsTntGm0ur3cBYo%2Biy8x8llTkcZHpdBbxQGSHpZoh5F%2Bp1HCRAUxz%2Fx%2Fw8dEq9lREMxMZDYES6E6ovILdwiN%2FJgBb19dezkcY47KMEtIOgfMowiwzyjlBO1TvVhdClBplwuJwlerIZo2d11hAuG0K0wwtz2vgY6pgGSHYoxEI1WChmMFX6OyhqfekPCF3fbRyff2xzvxm37UwDBkauYLhO9iFrRrrPl473LT44zX9L1KU3OfVfkq61X0giRXHm%2B%2FXFsJvNz0Sh61l9w9o%2FCmUtN6Be9%2B7anQWY2qgqMMAqWnFCTRAnzymFtaWUyUSbE7%2Fe%2BHFQTEAu5Y5OMTM8G%2BEhxc57YOD7liAEVkUqapbO%2FFK2bZ1KVlAw4WOOkXWe1&X-Amz-Signature=bb386ce32c713a0f1f866096f692c0b80b87627196c92d77e9f44051bc7d5907&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7ZJ6WC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEb3MR6WUhkhv1RZ%2BwZOmZdQWi1ymyPkt04ihrraMH2zAiBSZEpYH4V9a7S%2BEi47wEK%2FMqdx6QIdohYhGu48nKwrmyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxM%2BR%2BQRS%2FzIzKDsKtwDQFKr6fIKbtYby2ZbBafVk9wvZ81Vy7jXFWxLdI%2F%2BnghNzc34txobkI9I0junrz6htlRv4RT4gH0vPxNFSNylG9EbR6RhY7fRxouIomEPpUQSrs0BMQ2YKdlG2e4N9TDF%2BkBWNDq%2FVhChaplyfz7h80JWJQzWEI%2FL0yODAudPQMm%2F5XOLn4sSwXYtFKAotPvYJYMhOdQxuXvVhnoEmcd1EWVbP9sYvyfi7%2BIkSyWkzn%2B6YQplf0QjTG%2FAImF1%2BujpbUemyHF6vzobeboxA6rX1HPsEwtoAFTDY7TczpxwEchAGgyfOW%2F9YGW%2FZeWWcNGLanxJlaGnngAbUQhUp%2BUwcXEbzkvFz0zirLVVxuhfSJ5%2Fpn0O0PjlH2b8%2F1Yl2MLomjbUubuEzlRAuNFsdjlMaCCXlbB8dK2wNDGZwKg4uMgpTg0ikaDxd0hp%2BHfauWItdHkk3XzpGaXs2jJQ12o%2BjU5zC44s6CXSA%2BemuEsTntGm0ur3cBYo%2Biy8x8llTkcZHpdBbxQGSHpZoh5F%2Bp1HCRAUxz%2Fx%2Fw8dEq9lREMxMZDYES6E6ovILdwiN%2FJgBb19dezkcY47KMEtIOgfMowiwzyjlBO1TvVhdClBplwuJwlerIZo2d11hAuG0K0wwtz2vgY6pgGSHYoxEI1WChmMFX6OyhqfekPCF3fbRyff2xzvxm37UwDBkauYLhO9iFrRrrPl473LT44zX9L1KU3OfVfkq61X0giRXHm%2B%2FXFsJvNz0Sh61l9w9o%2FCmUtN6Be9%2B7anQWY2qgqMMAqWnFCTRAnzymFtaWUyUSbE7%2Fe%2BHFQTEAu5Y5OMTM8G%2BEhxc57YOD7liAEVkUqapbO%2FFK2bZ1KVlAw4WOOkXWe1&X-Amz-Signature=ed8bcfca9e576072e34260c48c77c6a743c32c39027928a4d877eb570f06ebf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7ZJ6WC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEb3MR6WUhkhv1RZ%2BwZOmZdQWi1ymyPkt04ihrraMH2zAiBSZEpYH4V9a7S%2BEi47wEK%2FMqdx6QIdohYhGu48nKwrmyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxM%2BR%2BQRS%2FzIzKDsKtwDQFKr6fIKbtYby2ZbBafVk9wvZ81Vy7jXFWxLdI%2F%2BnghNzc34txobkI9I0junrz6htlRv4RT4gH0vPxNFSNylG9EbR6RhY7fRxouIomEPpUQSrs0BMQ2YKdlG2e4N9TDF%2BkBWNDq%2FVhChaplyfz7h80JWJQzWEI%2FL0yODAudPQMm%2F5XOLn4sSwXYtFKAotPvYJYMhOdQxuXvVhnoEmcd1EWVbP9sYvyfi7%2BIkSyWkzn%2B6YQplf0QjTG%2FAImF1%2BujpbUemyHF6vzobeboxA6rX1HPsEwtoAFTDY7TczpxwEchAGgyfOW%2F9YGW%2FZeWWcNGLanxJlaGnngAbUQhUp%2BUwcXEbzkvFz0zirLVVxuhfSJ5%2Fpn0O0PjlH2b8%2F1Yl2MLomjbUubuEzlRAuNFsdjlMaCCXlbB8dK2wNDGZwKg4uMgpTg0ikaDxd0hp%2BHfauWItdHkk3XzpGaXs2jJQ12o%2BjU5zC44s6CXSA%2BemuEsTntGm0ur3cBYo%2Biy8x8llTkcZHpdBbxQGSHpZoh5F%2Bp1HCRAUxz%2Fx%2Fw8dEq9lREMxMZDYES6E6ovILdwiN%2FJgBb19dezkcY47KMEtIOgfMowiwzyjlBO1TvVhdClBplwuJwlerIZo2d11hAuG0K0wwtz2vgY6pgGSHYoxEI1WChmMFX6OyhqfekPCF3fbRyff2xzvxm37UwDBkauYLhO9iFrRrrPl473LT44zX9L1KU3OfVfkq61X0giRXHm%2B%2FXFsJvNz0Sh61l9w9o%2FCmUtN6Be9%2B7anQWY2qgqMMAqWnFCTRAnzymFtaWUyUSbE7%2Fe%2BHFQTEAu5Y5OMTM8G%2BEhxc57YOD7liAEVkUqapbO%2FFK2bZ1KVlAw4WOOkXWe1&X-Amz-Signature=3cddfd2cee4b3210d3c6814aa1892ef441608ff76e4d4524a849b23f1dd1329b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7ZJ6WC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEb3MR6WUhkhv1RZ%2BwZOmZdQWi1ymyPkt04ihrraMH2zAiBSZEpYH4V9a7S%2BEi47wEK%2FMqdx6QIdohYhGu48nKwrmyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxM%2BR%2BQRS%2FzIzKDsKtwDQFKr6fIKbtYby2ZbBafVk9wvZ81Vy7jXFWxLdI%2F%2BnghNzc34txobkI9I0junrz6htlRv4RT4gH0vPxNFSNylG9EbR6RhY7fRxouIomEPpUQSrs0BMQ2YKdlG2e4N9TDF%2BkBWNDq%2FVhChaplyfz7h80JWJQzWEI%2FL0yODAudPQMm%2F5XOLn4sSwXYtFKAotPvYJYMhOdQxuXvVhnoEmcd1EWVbP9sYvyfi7%2BIkSyWkzn%2B6YQplf0QjTG%2FAImF1%2BujpbUemyHF6vzobeboxA6rX1HPsEwtoAFTDY7TczpxwEchAGgyfOW%2F9YGW%2FZeWWcNGLanxJlaGnngAbUQhUp%2BUwcXEbzkvFz0zirLVVxuhfSJ5%2Fpn0O0PjlH2b8%2F1Yl2MLomjbUubuEzlRAuNFsdjlMaCCXlbB8dK2wNDGZwKg4uMgpTg0ikaDxd0hp%2BHfauWItdHkk3XzpGaXs2jJQ12o%2BjU5zC44s6CXSA%2BemuEsTntGm0ur3cBYo%2Biy8x8llTkcZHpdBbxQGSHpZoh5F%2Bp1HCRAUxz%2Fx%2Fw8dEq9lREMxMZDYES6E6ovILdwiN%2FJgBb19dezkcY47KMEtIOgfMowiwzyjlBO1TvVhdClBplwuJwlerIZo2d11hAuG0K0wwtz2vgY6pgGSHYoxEI1WChmMFX6OyhqfekPCF3fbRyff2xzvxm37UwDBkauYLhO9iFrRrrPl473LT44zX9L1KU3OfVfkq61X0giRXHm%2B%2FXFsJvNz0Sh61l9w9o%2FCmUtN6Be9%2B7anQWY2qgqMMAqWnFCTRAnzymFtaWUyUSbE7%2Fe%2BHFQTEAu5Y5OMTM8G%2BEhxc57YOD7liAEVkUqapbO%2FFK2bZ1KVlAw4WOOkXWe1&X-Amz-Signature=8480bd7dd858d52155e4d12180fbf709399e839e1e8ab19c89905649f689d540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7ZJ6WC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEb3MR6WUhkhv1RZ%2BwZOmZdQWi1ymyPkt04ihrraMH2zAiBSZEpYH4V9a7S%2BEi47wEK%2FMqdx6QIdohYhGu48nKwrmyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxM%2BR%2BQRS%2FzIzKDsKtwDQFKr6fIKbtYby2ZbBafVk9wvZ81Vy7jXFWxLdI%2F%2BnghNzc34txobkI9I0junrz6htlRv4RT4gH0vPxNFSNylG9EbR6RhY7fRxouIomEPpUQSrs0BMQ2YKdlG2e4N9TDF%2BkBWNDq%2FVhChaplyfz7h80JWJQzWEI%2FL0yODAudPQMm%2F5XOLn4sSwXYtFKAotPvYJYMhOdQxuXvVhnoEmcd1EWVbP9sYvyfi7%2BIkSyWkzn%2B6YQplf0QjTG%2FAImF1%2BujpbUemyHF6vzobeboxA6rX1HPsEwtoAFTDY7TczpxwEchAGgyfOW%2F9YGW%2FZeWWcNGLanxJlaGnngAbUQhUp%2BUwcXEbzkvFz0zirLVVxuhfSJ5%2Fpn0O0PjlH2b8%2F1Yl2MLomjbUubuEzlRAuNFsdjlMaCCXlbB8dK2wNDGZwKg4uMgpTg0ikaDxd0hp%2BHfauWItdHkk3XzpGaXs2jJQ12o%2BjU5zC44s6CXSA%2BemuEsTntGm0ur3cBYo%2Biy8x8llTkcZHpdBbxQGSHpZoh5F%2Bp1HCRAUxz%2Fx%2Fw8dEq9lREMxMZDYES6E6ovILdwiN%2FJgBb19dezkcY47KMEtIOgfMowiwzyjlBO1TvVhdClBplwuJwlerIZo2d11hAuG0K0wwtz2vgY6pgGSHYoxEI1WChmMFX6OyhqfekPCF3fbRyff2xzvxm37UwDBkauYLhO9iFrRrrPl473LT44zX9L1KU3OfVfkq61X0giRXHm%2B%2FXFsJvNz0Sh61l9w9o%2FCmUtN6Be9%2B7anQWY2qgqMMAqWnFCTRAnzymFtaWUyUSbE7%2Fe%2BHFQTEAu5Y5OMTM8G%2BEhxc57YOD7liAEVkUqapbO%2FFK2bZ1KVlAw4WOOkXWe1&X-Amz-Signature=8d95eb1317cb28259aa20c1f39d0afb467a6441abf851b5fc55c6d0354e14d13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7ZJ6WC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEb3MR6WUhkhv1RZ%2BwZOmZdQWi1ymyPkt04ihrraMH2zAiBSZEpYH4V9a7S%2BEi47wEK%2FMqdx6QIdohYhGu48nKwrmyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxM%2BR%2BQRS%2FzIzKDsKtwDQFKr6fIKbtYby2ZbBafVk9wvZ81Vy7jXFWxLdI%2F%2BnghNzc34txobkI9I0junrz6htlRv4RT4gH0vPxNFSNylG9EbR6RhY7fRxouIomEPpUQSrs0BMQ2YKdlG2e4N9TDF%2BkBWNDq%2FVhChaplyfz7h80JWJQzWEI%2FL0yODAudPQMm%2F5XOLn4sSwXYtFKAotPvYJYMhOdQxuXvVhnoEmcd1EWVbP9sYvyfi7%2BIkSyWkzn%2B6YQplf0QjTG%2FAImF1%2BujpbUemyHF6vzobeboxA6rX1HPsEwtoAFTDY7TczpxwEchAGgyfOW%2F9YGW%2FZeWWcNGLanxJlaGnngAbUQhUp%2BUwcXEbzkvFz0zirLVVxuhfSJ5%2Fpn0O0PjlH2b8%2F1Yl2MLomjbUubuEzlRAuNFsdjlMaCCXlbB8dK2wNDGZwKg4uMgpTg0ikaDxd0hp%2BHfauWItdHkk3XzpGaXs2jJQ12o%2BjU5zC44s6CXSA%2BemuEsTntGm0ur3cBYo%2Biy8x8llTkcZHpdBbxQGSHpZoh5F%2Bp1HCRAUxz%2Fx%2Fw8dEq9lREMxMZDYES6E6ovILdwiN%2FJgBb19dezkcY47KMEtIOgfMowiwzyjlBO1TvVhdClBplwuJwlerIZo2d11hAuG0K0wwtz2vgY6pgGSHYoxEI1WChmMFX6OyhqfekPCF3fbRyff2xzvxm37UwDBkauYLhO9iFrRrrPl473LT44zX9L1KU3OfVfkq61X0giRXHm%2B%2FXFsJvNz0Sh61l9w9o%2FCmUtN6Be9%2B7anQWY2qgqMMAqWnFCTRAnzymFtaWUyUSbE7%2Fe%2BHFQTEAu5Y5OMTM8G%2BEhxc57YOD7liAEVkUqapbO%2FFK2bZ1KVlAw4WOOkXWe1&X-Amz-Signature=ce510b33166e1a9653ad01c147d1723a2d3e92a648e38e9e28357a9d7f229d62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
