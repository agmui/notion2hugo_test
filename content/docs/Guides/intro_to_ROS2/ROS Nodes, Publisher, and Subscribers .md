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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ777FLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZaorNWgoXKLl%2FhuPoUd4sSIT%2BmVF%2F%2BMntiBScsf8AAiB0tF0NK2B%2Bl1fjZvYK46CFU9Q1XFYl%2BN3%2FTBfotY8%2F%2Fir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMjoGoKUCP83JJPxFFKtwDKUAEMYhNHMey5b7jcfcWw%2FrmrVe4osSMC8cX9KjZTIC8eg%2BUsJzCrhN9LxQ4%2BXccBKl9jfhofBcFkEJfFRWw18XBfp2WlUcKzu39d41MGtUuVFDOM4pbil3FVtHyKSkos2UPhOH3e29jK1fwmd1SD8868lSf7CAuHZKeZ2PeOxPnAhzDwGCEjNQu9ak6OxI073ahBv5hWhKlujUzGo4QwT5Wu0sniKl306oBcjyignsU4RAl6Hs3aG8wQgTLc2beSVTk4YymdSUT1f6%2Fno0NRij95RN6WXHGIe%2FkfvnAd36KJ9i54oZaIXA67g0UDd5zwGgIZlsiZtsdL39aIr3qDebZgmxsKS6%2FmqBYAdX2AYIvODEk5YYL69nHVVeBN2UjoTpyt0XvXpBVFFdnJwftdIqSG3P%2FHdGNl0%2FMQ%2F7gQniOZ3sEKb6oRb600CBhc6wpsOi1Q25a0CHnvKRNbBOlnsd%2FhWVkHws0IzDw4xct11MysMHyMNhnYLHuC29VUvs5gJ6abqLABBifkAsKRxGOGL1MvjTNiJT6GE1yCA%2FRjDdo7YJ%2Bk3vqd%2F3K0PULFnIdW8AL6IRTJlF%2FZSLu9pDXbzzXgMZDNV6%2FNoFafQPk7bAUwlEMAyK4IS7TT2gw8bnRvwY6pgFQqrDTnQobyvPQc%2FEjiLREv2gtEKDTYhbrHgBPADWyfd2c%2BEE9LBi6P7eGFb2Bazymv2aatSOi2gZ7XLjdkOWTiEdRAx6phtLK7mKw7vMw9KU%2Befg1XLkuoN1rQzUc4IWOnYsMBnM1BmZrZQ2cB1bj2EmpVqGNxe8oaLgnU06pdfOA14LxPVNlSKEN6j85NOAeujGEDgB%2BwMRFxiLDq3IrOH6zzuoV&X-Amz-Signature=280a5a396f27e2795c5460eba15092660d51e44909bf01ee5c419c2e9f25b2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ777FLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZaorNWgoXKLl%2FhuPoUd4sSIT%2BmVF%2F%2BMntiBScsf8AAiB0tF0NK2B%2Bl1fjZvYK46CFU9Q1XFYl%2BN3%2FTBfotY8%2F%2Fir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMjoGoKUCP83JJPxFFKtwDKUAEMYhNHMey5b7jcfcWw%2FrmrVe4osSMC8cX9KjZTIC8eg%2BUsJzCrhN9LxQ4%2BXccBKl9jfhofBcFkEJfFRWw18XBfp2WlUcKzu39d41MGtUuVFDOM4pbil3FVtHyKSkos2UPhOH3e29jK1fwmd1SD8868lSf7CAuHZKeZ2PeOxPnAhzDwGCEjNQu9ak6OxI073ahBv5hWhKlujUzGo4QwT5Wu0sniKl306oBcjyignsU4RAl6Hs3aG8wQgTLc2beSVTk4YymdSUT1f6%2Fno0NRij95RN6WXHGIe%2FkfvnAd36KJ9i54oZaIXA67g0UDd5zwGgIZlsiZtsdL39aIr3qDebZgmxsKS6%2FmqBYAdX2AYIvODEk5YYL69nHVVeBN2UjoTpyt0XvXpBVFFdnJwftdIqSG3P%2FHdGNl0%2FMQ%2F7gQniOZ3sEKb6oRb600CBhc6wpsOi1Q25a0CHnvKRNbBOlnsd%2FhWVkHws0IzDw4xct11MysMHyMNhnYLHuC29VUvs5gJ6abqLABBifkAsKRxGOGL1MvjTNiJT6GE1yCA%2FRjDdo7YJ%2Bk3vqd%2F3K0PULFnIdW8AL6IRTJlF%2FZSLu9pDXbzzXgMZDNV6%2FNoFafQPk7bAUwlEMAyK4IS7TT2gw8bnRvwY6pgFQqrDTnQobyvPQc%2FEjiLREv2gtEKDTYhbrHgBPADWyfd2c%2BEE9LBi6P7eGFb2Bazymv2aatSOi2gZ7XLjdkOWTiEdRAx6phtLK7mKw7vMw9KU%2Befg1XLkuoN1rQzUc4IWOnYsMBnM1BmZrZQ2cB1bj2EmpVqGNxe8oaLgnU06pdfOA14LxPVNlSKEN6j85NOAeujGEDgB%2BwMRFxiLDq3IrOH6zzuoV&X-Amz-Signature=f0c11acf959b7fc3aacd5c2cb3e0c147638369be96606be2696500358d3e1652&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ777FLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZaorNWgoXKLl%2FhuPoUd4sSIT%2BmVF%2F%2BMntiBScsf8AAiB0tF0NK2B%2Bl1fjZvYK46CFU9Q1XFYl%2BN3%2FTBfotY8%2F%2Fir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMjoGoKUCP83JJPxFFKtwDKUAEMYhNHMey5b7jcfcWw%2FrmrVe4osSMC8cX9KjZTIC8eg%2BUsJzCrhN9LxQ4%2BXccBKl9jfhofBcFkEJfFRWw18XBfp2WlUcKzu39d41MGtUuVFDOM4pbil3FVtHyKSkos2UPhOH3e29jK1fwmd1SD8868lSf7CAuHZKeZ2PeOxPnAhzDwGCEjNQu9ak6OxI073ahBv5hWhKlujUzGo4QwT5Wu0sniKl306oBcjyignsU4RAl6Hs3aG8wQgTLc2beSVTk4YymdSUT1f6%2Fno0NRij95RN6WXHGIe%2FkfvnAd36KJ9i54oZaIXA67g0UDd5zwGgIZlsiZtsdL39aIr3qDebZgmxsKS6%2FmqBYAdX2AYIvODEk5YYL69nHVVeBN2UjoTpyt0XvXpBVFFdnJwftdIqSG3P%2FHdGNl0%2FMQ%2F7gQniOZ3sEKb6oRb600CBhc6wpsOi1Q25a0CHnvKRNbBOlnsd%2FhWVkHws0IzDw4xct11MysMHyMNhnYLHuC29VUvs5gJ6abqLABBifkAsKRxGOGL1MvjTNiJT6GE1yCA%2FRjDdo7YJ%2Bk3vqd%2F3K0PULFnIdW8AL6IRTJlF%2FZSLu9pDXbzzXgMZDNV6%2FNoFafQPk7bAUwlEMAyK4IS7TT2gw8bnRvwY6pgFQqrDTnQobyvPQc%2FEjiLREv2gtEKDTYhbrHgBPADWyfd2c%2BEE9LBi6P7eGFb2Bazymv2aatSOi2gZ7XLjdkOWTiEdRAx6phtLK7mKw7vMw9KU%2Befg1XLkuoN1rQzUc4IWOnYsMBnM1BmZrZQ2cB1bj2EmpVqGNxe8oaLgnU06pdfOA14LxPVNlSKEN6j85NOAeujGEDgB%2BwMRFxiLDq3IrOH6zzuoV&X-Amz-Signature=721952717ab2e499a75d8d5c051cfd48a809e2138cfef741a2e4f8ea306302bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ777FLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZaorNWgoXKLl%2FhuPoUd4sSIT%2BmVF%2F%2BMntiBScsf8AAiB0tF0NK2B%2Bl1fjZvYK46CFU9Q1XFYl%2BN3%2FTBfotY8%2F%2Fir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMjoGoKUCP83JJPxFFKtwDKUAEMYhNHMey5b7jcfcWw%2FrmrVe4osSMC8cX9KjZTIC8eg%2BUsJzCrhN9LxQ4%2BXccBKl9jfhofBcFkEJfFRWw18XBfp2WlUcKzu39d41MGtUuVFDOM4pbil3FVtHyKSkos2UPhOH3e29jK1fwmd1SD8868lSf7CAuHZKeZ2PeOxPnAhzDwGCEjNQu9ak6OxI073ahBv5hWhKlujUzGo4QwT5Wu0sniKl306oBcjyignsU4RAl6Hs3aG8wQgTLc2beSVTk4YymdSUT1f6%2Fno0NRij95RN6WXHGIe%2FkfvnAd36KJ9i54oZaIXA67g0UDd5zwGgIZlsiZtsdL39aIr3qDebZgmxsKS6%2FmqBYAdX2AYIvODEk5YYL69nHVVeBN2UjoTpyt0XvXpBVFFdnJwftdIqSG3P%2FHdGNl0%2FMQ%2F7gQniOZ3sEKb6oRb600CBhc6wpsOi1Q25a0CHnvKRNbBOlnsd%2FhWVkHws0IzDw4xct11MysMHyMNhnYLHuC29VUvs5gJ6abqLABBifkAsKRxGOGL1MvjTNiJT6GE1yCA%2FRjDdo7YJ%2Bk3vqd%2F3K0PULFnIdW8AL6IRTJlF%2FZSLu9pDXbzzXgMZDNV6%2FNoFafQPk7bAUwlEMAyK4IS7TT2gw8bnRvwY6pgFQqrDTnQobyvPQc%2FEjiLREv2gtEKDTYhbrHgBPADWyfd2c%2BEE9LBi6P7eGFb2Bazymv2aatSOi2gZ7XLjdkOWTiEdRAx6phtLK7mKw7vMw9KU%2Befg1XLkuoN1rQzUc4IWOnYsMBnM1BmZrZQ2cB1bj2EmpVqGNxe8oaLgnU06pdfOA14LxPVNlSKEN6j85NOAeujGEDgB%2BwMRFxiLDq3IrOH6zzuoV&X-Amz-Signature=47623c7bfd21ffc120f36d6b71ea7b135fbf485cc70319e82f52649f0555509b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ777FLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZaorNWgoXKLl%2FhuPoUd4sSIT%2BmVF%2F%2BMntiBScsf8AAiB0tF0NK2B%2Bl1fjZvYK46CFU9Q1XFYl%2BN3%2FTBfotY8%2F%2Fir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMjoGoKUCP83JJPxFFKtwDKUAEMYhNHMey5b7jcfcWw%2FrmrVe4osSMC8cX9KjZTIC8eg%2BUsJzCrhN9LxQ4%2BXccBKl9jfhofBcFkEJfFRWw18XBfp2WlUcKzu39d41MGtUuVFDOM4pbil3FVtHyKSkos2UPhOH3e29jK1fwmd1SD8868lSf7CAuHZKeZ2PeOxPnAhzDwGCEjNQu9ak6OxI073ahBv5hWhKlujUzGo4QwT5Wu0sniKl306oBcjyignsU4RAl6Hs3aG8wQgTLc2beSVTk4YymdSUT1f6%2Fno0NRij95RN6WXHGIe%2FkfvnAd36KJ9i54oZaIXA67g0UDd5zwGgIZlsiZtsdL39aIr3qDebZgmxsKS6%2FmqBYAdX2AYIvODEk5YYL69nHVVeBN2UjoTpyt0XvXpBVFFdnJwftdIqSG3P%2FHdGNl0%2FMQ%2F7gQniOZ3sEKb6oRb600CBhc6wpsOi1Q25a0CHnvKRNbBOlnsd%2FhWVkHws0IzDw4xct11MysMHyMNhnYLHuC29VUvs5gJ6abqLABBifkAsKRxGOGL1MvjTNiJT6GE1yCA%2FRjDdo7YJ%2Bk3vqd%2F3K0PULFnIdW8AL6IRTJlF%2FZSLu9pDXbzzXgMZDNV6%2FNoFafQPk7bAUwlEMAyK4IS7TT2gw8bnRvwY6pgFQqrDTnQobyvPQc%2FEjiLREv2gtEKDTYhbrHgBPADWyfd2c%2BEE9LBi6P7eGFb2Bazymv2aatSOi2gZ7XLjdkOWTiEdRAx6phtLK7mKw7vMw9KU%2Befg1XLkuoN1rQzUc4IWOnYsMBnM1BmZrZQ2cB1bj2EmpVqGNxe8oaLgnU06pdfOA14LxPVNlSKEN6j85NOAeujGEDgB%2BwMRFxiLDq3IrOH6zzuoV&X-Amz-Signature=085556d2cc5b77932066127e13ab0de57885811e71024965f9bec71d6b00a26c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ777FLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZaorNWgoXKLl%2FhuPoUd4sSIT%2BmVF%2F%2BMntiBScsf8AAiB0tF0NK2B%2Bl1fjZvYK46CFU9Q1XFYl%2BN3%2FTBfotY8%2F%2Fir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMjoGoKUCP83JJPxFFKtwDKUAEMYhNHMey5b7jcfcWw%2FrmrVe4osSMC8cX9KjZTIC8eg%2BUsJzCrhN9LxQ4%2BXccBKl9jfhofBcFkEJfFRWw18XBfp2WlUcKzu39d41MGtUuVFDOM4pbil3FVtHyKSkos2UPhOH3e29jK1fwmd1SD8868lSf7CAuHZKeZ2PeOxPnAhzDwGCEjNQu9ak6OxI073ahBv5hWhKlujUzGo4QwT5Wu0sniKl306oBcjyignsU4RAl6Hs3aG8wQgTLc2beSVTk4YymdSUT1f6%2Fno0NRij95RN6WXHGIe%2FkfvnAd36KJ9i54oZaIXA67g0UDd5zwGgIZlsiZtsdL39aIr3qDebZgmxsKS6%2FmqBYAdX2AYIvODEk5YYL69nHVVeBN2UjoTpyt0XvXpBVFFdnJwftdIqSG3P%2FHdGNl0%2FMQ%2F7gQniOZ3sEKb6oRb600CBhc6wpsOi1Q25a0CHnvKRNbBOlnsd%2FhWVkHws0IzDw4xct11MysMHyMNhnYLHuC29VUvs5gJ6abqLABBifkAsKRxGOGL1MvjTNiJT6GE1yCA%2FRjDdo7YJ%2Bk3vqd%2F3K0PULFnIdW8AL6IRTJlF%2FZSLu9pDXbzzXgMZDNV6%2FNoFafQPk7bAUwlEMAyK4IS7TT2gw8bnRvwY6pgFQqrDTnQobyvPQc%2FEjiLREv2gtEKDTYhbrHgBPADWyfd2c%2BEE9LBi6P7eGFb2Bazymv2aatSOi2gZ7XLjdkOWTiEdRAx6phtLK7mKw7vMw9KU%2Befg1XLkuoN1rQzUc4IWOnYsMBnM1BmZrZQ2cB1bj2EmpVqGNxe8oaLgnU06pdfOA14LxPVNlSKEN6j85NOAeujGEDgB%2BwMRFxiLDq3IrOH6zzuoV&X-Amz-Signature=91f3c8dc14ffd92a2c4e53aa4ccb3daab881749f7accc7516125cb89a3301d53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ777FLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZaorNWgoXKLl%2FhuPoUd4sSIT%2BmVF%2F%2BMntiBScsf8AAiB0tF0NK2B%2Bl1fjZvYK46CFU9Q1XFYl%2BN3%2FTBfotY8%2F%2Fir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMjoGoKUCP83JJPxFFKtwDKUAEMYhNHMey5b7jcfcWw%2FrmrVe4osSMC8cX9KjZTIC8eg%2BUsJzCrhN9LxQ4%2BXccBKl9jfhofBcFkEJfFRWw18XBfp2WlUcKzu39d41MGtUuVFDOM4pbil3FVtHyKSkos2UPhOH3e29jK1fwmd1SD8868lSf7CAuHZKeZ2PeOxPnAhzDwGCEjNQu9ak6OxI073ahBv5hWhKlujUzGo4QwT5Wu0sniKl306oBcjyignsU4RAl6Hs3aG8wQgTLc2beSVTk4YymdSUT1f6%2Fno0NRij95RN6WXHGIe%2FkfvnAd36KJ9i54oZaIXA67g0UDd5zwGgIZlsiZtsdL39aIr3qDebZgmxsKS6%2FmqBYAdX2AYIvODEk5YYL69nHVVeBN2UjoTpyt0XvXpBVFFdnJwftdIqSG3P%2FHdGNl0%2FMQ%2F7gQniOZ3sEKb6oRb600CBhc6wpsOi1Q25a0CHnvKRNbBOlnsd%2FhWVkHws0IzDw4xct11MysMHyMNhnYLHuC29VUvs5gJ6abqLABBifkAsKRxGOGL1MvjTNiJT6GE1yCA%2FRjDdo7YJ%2Bk3vqd%2F3K0PULFnIdW8AL6IRTJlF%2FZSLu9pDXbzzXgMZDNV6%2FNoFafQPk7bAUwlEMAyK4IS7TT2gw8bnRvwY6pgFQqrDTnQobyvPQc%2FEjiLREv2gtEKDTYhbrHgBPADWyfd2c%2BEE9LBi6P7eGFb2Bazymv2aatSOi2gZ7XLjdkOWTiEdRAx6phtLK7mKw7vMw9KU%2Befg1XLkuoN1rQzUc4IWOnYsMBnM1BmZrZQ2cB1bj2EmpVqGNxe8oaLgnU06pdfOA14LxPVNlSKEN6j85NOAeujGEDgB%2BwMRFxiLDq3IrOH6zzuoV&X-Amz-Signature=769aaf06f997b7fc0da7e07b19a18231ba5a0b0e28024223361d90bd60866f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ777FLH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvZaorNWgoXKLl%2FhuPoUd4sSIT%2BmVF%2F%2BMntiBScsf8AAiB0tF0NK2B%2Bl1fjZvYK46CFU9Q1XFYl%2BN3%2FTBfotY8%2F%2Fir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMjoGoKUCP83JJPxFFKtwDKUAEMYhNHMey5b7jcfcWw%2FrmrVe4osSMC8cX9KjZTIC8eg%2BUsJzCrhN9LxQ4%2BXccBKl9jfhofBcFkEJfFRWw18XBfp2WlUcKzu39d41MGtUuVFDOM4pbil3FVtHyKSkos2UPhOH3e29jK1fwmd1SD8868lSf7CAuHZKeZ2PeOxPnAhzDwGCEjNQu9ak6OxI073ahBv5hWhKlujUzGo4QwT5Wu0sniKl306oBcjyignsU4RAl6Hs3aG8wQgTLc2beSVTk4YymdSUT1f6%2Fno0NRij95RN6WXHGIe%2FkfvnAd36KJ9i54oZaIXA67g0UDd5zwGgIZlsiZtsdL39aIr3qDebZgmxsKS6%2FmqBYAdX2AYIvODEk5YYL69nHVVeBN2UjoTpyt0XvXpBVFFdnJwftdIqSG3P%2FHdGNl0%2FMQ%2F7gQniOZ3sEKb6oRb600CBhc6wpsOi1Q25a0CHnvKRNbBOlnsd%2FhWVkHws0IzDw4xct11MysMHyMNhnYLHuC29VUvs5gJ6abqLABBifkAsKRxGOGL1MvjTNiJT6GE1yCA%2FRjDdo7YJ%2Bk3vqd%2F3K0PULFnIdW8AL6IRTJlF%2FZSLu9pDXbzzXgMZDNV6%2FNoFafQPk7bAUwlEMAyK4IS7TT2gw8bnRvwY6pgFQqrDTnQobyvPQc%2FEjiLREv2gtEKDTYhbrHgBPADWyfd2c%2BEE9LBi6P7eGFb2Bazymv2aatSOi2gZ7XLjdkOWTiEdRAx6phtLK7mKw7vMw9KU%2Befg1XLkuoN1rQzUc4IWOnYsMBnM1BmZrZQ2cB1bj2EmpVqGNxe8oaLgnU06pdfOA14LxPVNlSKEN6j85NOAeujGEDgB%2BwMRFxiLDq3IrOH6zzuoV&X-Amz-Signature=80597864ebc328103586db8a3774338ccf1dff83916059f877f1c13ea4d4ff23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
