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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWBX52O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCl%2F54RrDzYItj1039g4FBqaqy71tfScKOES2WTgD41fAIgOFyFwK0%2B6Hk7dzgJfcI5FKV%2F7rpgJWGq9qL%2BMZpgKWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHH5uk%2FZ%2Fa4nBpkpPSrcA9pse0zO%2Fei5T1Qr%2BUQRtADlSFKxoq%2F6hkguIyAnQs6EifCZU3AGA2YXrkeEZLeUnEGYFVhVrkPBJjznNOuATfyoEr70mNix7nX2dJLrb9FQjJGHTnOgu%2B%2BMhgp8qhHCgtLWeBbvDrlX%2FMP%2FLd8LRLG9jLtr6hBFOS7zqsdni1IEgmS3qjvyU9VlgfIeXB6PTm5kjQ8k42WMbGKxjlBOhOG4PtEFIGhaVBW0z1hZe4FxdaoILDUwp8QiSsb%2ByQCXsjtItQamhAO%2Fht1UNxmQC6co2emKdSGi%2BfJItZROg5sDk0d06BR796bBW2Ibvh5I0Njq4tBIuh2WYzM2NeFdCyAJ891DDclhH0ks9B4AFJNsr2PnEndv8cWCscJ0X651RnvoCmKPiZ7ARiUIKoHnziUwLi%2FkjYaVBz%2BQq4RuyhS%2BpbUrl5WHmvELQlM%2Bal0fGHSDpnv0K7FdOCt%2FTywdJpj1%2FuHRf2EecBaz5VtkkeADzwbmHikWxyw0TU%2BqlLBhVwTOefX6vEL7piPyGywwR8i0eooGoFmuqoVyQbTyq71ZX5%2Bk2ZwcYS56cywKFiXsKjlKsUnV8dAZGV6S3g%2FrQiMS%2BuA2etosAQ7XNJoPCIm%2B15rwFOnYg1DFnigoMN2jmsQGOqUBoQ%2FIQAzhFdVZl%2FXZe71nf8d3e0G6Owo7Afl8Ru4%2BdWus5G8Zr%2BSxqbQcg9WKVHOs5YgjklqZZkMZUAzOa5P56WcVBLo82BKePMbo%2BKubHoquGRMOhTSutpu4oJKy9GM1pCV9suKep1SFLnyF%2FfuylWT7lY4UALuKIkAYQPYaOy1OslR6swqjntzI2PDT5z8ur5A5hRPZH1ZSNIdCUoJnKkzY04k%2B&X-Amz-Signature=9d18f7be170dc4c9032684766fd78cbd3989759755897d02e99498603d630443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWBX52O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCl%2F54RrDzYItj1039g4FBqaqy71tfScKOES2WTgD41fAIgOFyFwK0%2B6Hk7dzgJfcI5FKV%2F7rpgJWGq9qL%2BMZpgKWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHH5uk%2FZ%2Fa4nBpkpPSrcA9pse0zO%2Fei5T1Qr%2BUQRtADlSFKxoq%2F6hkguIyAnQs6EifCZU3AGA2YXrkeEZLeUnEGYFVhVrkPBJjznNOuATfyoEr70mNix7nX2dJLrb9FQjJGHTnOgu%2B%2BMhgp8qhHCgtLWeBbvDrlX%2FMP%2FLd8LRLG9jLtr6hBFOS7zqsdni1IEgmS3qjvyU9VlgfIeXB6PTm5kjQ8k42WMbGKxjlBOhOG4PtEFIGhaVBW0z1hZe4FxdaoILDUwp8QiSsb%2ByQCXsjtItQamhAO%2Fht1UNxmQC6co2emKdSGi%2BfJItZROg5sDk0d06BR796bBW2Ibvh5I0Njq4tBIuh2WYzM2NeFdCyAJ891DDclhH0ks9B4AFJNsr2PnEndv8cWCscJ0X651RnvoCmKPiZ7ARiUIKoHnziUwLi%2FkjYaVBz%2BQq4RuyhS%2BpbUrl5WHmvELQlM%2Bal0fGHSDpnv0K7FdOCt%2FTywdJpj1%2FuHRf2EecBaz5VtkkeADzwbmHikWxyw0TU%2BqlLBhVwTOefX6vEL7piPyGywwR8i0eooGoFmuqoVyQbTyq71ZX5%2Bk2ZwcYS56cywKFiXsKjlKsUnV8dAZGV6S3g%2FrQiMS%2BuA2etosAQ7XNJoPCIm%2B15rwFOnYg1DFnigoMN2jmsQGOqUBoQ%2FIQAzhFdVZl%2FXZe71nf8d3e0G6Owo7Afl8Ru4%2BdWus5G8Zr%2BSxqbQcg9WKVHOs5YgjklqZZkMZUAzOa5P56WcVBLo82BKePMbo%2BKubHoquGRMOhTSutpu4oJKy9GM1pCV9suKep1SFLnyF%2FfuylWT7lY4UALuKIkAYQPYaOy1OslR6swqjntzI2PDT5z8ur5A5hRPZH1ZSNIdCUoJnKkzY04k%2B&X-Amz-Signature=9debdc26df7281b77c3fffc22a899154fcce45e7a7282c4baae39a2c6e60bb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWBX52O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCl%2F54RrDzYItj1039g4FBqaqy71tfScKOES2WTgD41fAIgOFyFwK0%2B6Hk7dzgJfcI5FKV%2F7rpgJWGq9qL%2BMZpgKWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHH5uk%2FZ%2Fa4nBpkpPSrcA9pse0zO%2Fei5T1Qr%2BUQRtADlSFKxoq%2F6hkguIyAnQs6EifCZU3AGA2YXrkeEZLeUnEGYFVhVrkPBJjznNOuATfyoEr70mNix7nX2dJLrb9FQjJGHTnOgu%2B%2BMhgp8qhHCgtLWeBbvDrlX%2FMP%2FLd8LRLG9jLtr6hBFOS7zqsdni1IEgmS3qjvyU9VlgfIeXB6PTm5kjQ8k42WMbGKxjlBOhOG4PtEFIGhaVBW0z1hZe4FxdaoILDUwp8QiSsb%2ByQCXsjtItQamhAO%2Fht1UNxmQC6co2emKdSGi%2BfJItZROg5sDk0d06BR796bBW2Ibvh5I0Njq4tBIuh2WYzM2NeFdCyAJ891DDclhH0ks9B4AFJNsr2PnEndv8cWCscJ0X651RnvoCmKPiZ7ARiUIKoHnziUwLi%2FkjYaVBz%2BQq4RuyhS%2BpbUrl5WHmvELQlM%2Bal0fGHSDpnv0K7FdOCt%2FTywdJpj1%2FuHRf2EecBaz5VtkkeADzwbmHikWxyw0TU%2BqlLBhVwTOefX6vEL7piPyGywwR8i0eooGoFmuqoVyQbTyq71ZX5%2Bk2ZwcYS56cywKFiXsKjlKsUnV8dAZGV6S3g%2FrQiMS%2BuA2etosAQ7XNJoPCIm%2B15rwFOnYg1DFnigoMN2jmsQGOqUBoQ%2FIQAzhFdVZl%2FXZe71nf8d3e0G6Owo7Afl8Ru4%2BdWus5G8Zr%2BSxqbQcg9WKVHOs5YgjklqZZkMZUAzOa5P56WcVBLo82BKePMbo%2BKubHoquGRMOhTSutpu4oJKy9GM1pCV9suKep1SFLnyF%2FfuylWT7lY4UALuKIkAYQPYaOy1OslR6swqjntzI2PDT5z8ur5A5hRPZH1ZSNIdCUoJnKkzY04k%2B&X-Amz-Signature=dc2ef32b031beaf2bfbf5042b1128e6599f23e23ca460d55b18a92208a2cc4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWBX52O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCl%2F54RrDzYItj1039g4FBqaqy71tfScKOES2WTgD41fAIgOFyFwK0%2B6Hk7dzgJfcI5FKV%2F7rpgJWGq9qL%2BMZpgKWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHH5uk%2FZ%2Fa4nBpkpPSrcA9pse0zO%2Fei5T1Qr%2BUQRtADlSFKxoq%2F6hkguIyAnQs6EifCZU3AGA2YXrkeEZLeUnEGYFVhVrkPBJjznNOuATfyoEr70mNix7nX2dJLrb9FQjJGHTnOgu%2B%2BMhgp8qhHCgtLWeBbvDrlX%2FMP%2FLd8LRLG9jLtr6hBFOS7zqsdni1IEgmS3qjvyU9VlgfIeXB6PTm5kjQ8k42WMbGKxjlBOhOG4PtEFIGhaVBW0z1hZe4FxdaoILDUwp8QiSsb%2ByQCXsjtItQamhAO%2Fht1UNxmQC6co2emKdSGi%2BfJItZROg5sDk0d06BR796bBW2Ibvh5I0Njq4tBIuh2WYzM2NeFdCyAJ891DDclhH0ks9B4AFJNsr2PnEndv8cWCscJ0X651RnvoCmKPiZ7ARiUIKoHnziUwLi%2FkjYaVBz%2BQq4RuyhS%2BpbUrl5WHmvELQlM%2Bal0fGHSDpnv0K7FdOCt%2FTywdJpj1%2FuHRf2EecBaz5VtkkeADzwbmHikWxyw0TU%2BqlLBhVwTOefX6vEL7piPyGywwR8i0eooGoFmuqoVyQbTyq71ZX5%2Bk2ZwcYS56cywKFiXsKjlKsUnV8dAZGV6S3g%2FrQiMS%2BuA2etosAQ7XNJoPCIm%2B15rwFOnYg1DFnigoMN2jmsQGOqUBoQ%2FIQAzhFdVZl%2FXZe71nf8d3e0G6Owo7Afl8Ru4%2BdWus5G8Zr%2BSxqbQcg9WKVHOs5YgjklqZZkMZUAzOa5P56WcVBLo82BKePMbo%2BKubHoquGRMOhTSutpu4oJKy9GM1pCV9suKep1SFLnyF%2FfuylWT7lY4UALuKIkAYQPYaOy1OslR6swqjntzI2PDT5z8ur5A5hRPZH1ZSNIdCUoJnKkzY04k%2B&X-Amz-Signature=0348c55af8bc8474b8f61f200a1a9fbbeee44884647ec54f0e99add6e8223b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWBX52O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCl%2F54RrDzYItj1039g4FBqaqy71tfScKOES2WTgD41fAIgOFyFwK0%2B6Hk7dzgJfcI5FKV%2F7rpgJWGq9qL%2BMZpgKWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHH5uk%2FZ%2Fa4nBpkpPSrcA9pse0zO%2Fei5T1Qr%2BUQRtADlSFKxoq%2F6hkguIyAnQs6EifCZU3AGA2YXrkeEZLeUnEGYFVhVrkPBJjznNOuATfyoEr70mNix7nX2dJLrb9FQjJGHTnOgu%2B%2BMhgp8qhHCgtLWeBbvDrlX%2FMP%2FLd8LRLG9jLtr6hBFOS7zqsdni1IEgmS3qjvyU9VlgfIeXB6PTm5kjQ8k42WMbGKxjlBOhOG4PtEFIGhaVBW0z1hZe4FxdaoILDUwp8QiSsb%2ByQCXsjtItQamhAO%2Fht1UNxmQC6co2emKdSGi%2BfJItZROg5sDk0d06BR796bBW2Ibvh5I0Njq4tBIuh2WYzM2NeFdCyAJ891DDclhH0ks9B4AFJNsr2PnEndv8cWCscJ0X651RnvoCmKPiZ7ARiUIKoHnziUwLi%2FkjYaVBz%2BQq4RuyhS%2BpbUrl5WHmvELQlM%2Bal0fGHSDpnv0K7FdOCt%2FTywdJpj1%2FuHRf2EecBaz5VtkkeADzwbmHikWxyw0TU%2BqlLBhVwTOefX6vEL7piPyGywwR8i0eooGoFmuqoVyQbTyq71ZX5%2Bk2ZwcYS56cywKFiXsKjlKsUnV8dAZGV6S3g%2FrQiMS%2BuA2etosAQ7XNJoPCIm%2B15rwFOnYg1DFnigoMN2jmsQGOqUBoQ%2FIQAzhFdVZl%2FXZe71nf8d3e0G6Owo7Afl8Ru4%2BdWus5G8Zr%2BSxqbQcg9WKVHOs5YgjklqZZkMZUAzOa5P56WcVBLo82BKePMbo%2BKubHoquGRMOhTSutpu4oJKy9GM1pCV9suKep1SFLnyF%2FfuylWT7lY4UALuKIkAYQPYaOy1OslR6swqjntzI2PDT5z8ur5A5hRPZH1ZSNIdCUoJnKkzY04k%2B&X-Amz-Signature=94f2bff6d39860f20d90ebec4f3aa2b4d9fe07c19dbb29c8d49d85279e8bcd7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWBX52O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCl%2F54RrDzYItj1039g4FBqaqy71tfScKOES2WTgD41fAIgOFyFwK0%2B6Hk7dzgJfcI5FKV%2F7rpgJWGq9qL%2BMZpgKWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHH5uk%2FZ%2Fa4nBpkpPSrcA9pse0zO%2Fei5T1Qr%2BUQRtADlSFKxoq%2F6hkguIyAnQs6EifCZU3AGA2YXrkeEZLeUnEGYFVhVrkPBJjznNOuATfyoEr70mNix7nX2dJLrb9FQjJGHTnOgu%2B%2BMhgp8qhHCgtLWeBbvDrlX%2FMP%2FLd8LRLG9jLtr6hBFOS7zqsdni1IEgmS3qjvyU9VlgfIeXB6PTm5kjQ8k42WMbGKxjlBOhOG4PtEFIGhaVBW0z1hZe4FxdaoILDUwp8QiSsb%2ByQCXsjtItQamhAO%2Fht1UNxmQC6co2emKdSGi%2BfJItZROg5sDk0d06BR796bBW2Ibvh5I0Njq4tBIuh2WYzM2NeFdCyAJ891DDclhH0ks9B4AFJNsr2PnEndv8cWCscJ0X651RnvoCmKPiZ7ARiUIKoHnziUwLi%2FkjYaVBz%2BQq4RuyhS%2BpbUrl5WHmvELQlM%2Bal0fGHSDpnv0K7FdOCt%2FTywdJpj1%2FuHRf2EecBaz5VtkkeADzwbmHikWxyw0TU%2BqlLBhVwTOefX6vEL7piPyGywwR8i0eooGoFmuqoVyQbTyq71ZX5%2Bk2ZwcYS56cywKFiXsKjlKsUnV8dAZGV6S3g%2FrQiMS%2BuA2etosAQ7XNJoPCIm%2B15rwFOnYg1DFnigoMN2jmsQGOqUBoQ%2FIQAzhFdVZl%2FXZe71nf8d3e0G6Owo7Afl8Ru4%2BdWus5G8Zr%2BSxqbQcg9WKVHOs5YgjklqZZkMZUAzOa5P56WcVBLo82BKePMbo%2BKubHoquGRMOhTSutpu4oJKy9GM1pCV9suKep1SFLnyF%2FfuylWT7lY4UALuKIkAYQPYaOy1OslR6swqjntzI2PDT5z8ur5A5hRPZH1ZSNIdCUoJnKkzY04k%2B&X-Amz-Signature=b59ff5485186a1b9314d1e599749bded3a27c5ecd992f6e9d97ed133c86c20e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWBX52O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCl%2F54RrDzYItj1039g4FBqaqy71tfScKOES2WTgD41fAIgOFyFwK0%2B6Hk7dzgJfcI5FKV%2F7rpgJWGq9qL%2BMZpgKWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHH5uk%2FZ%2Fa4nBpkpPSrcA9pse0zO%2Fei5T1Qr%2BUQRtADlSFKxoq%2F6hkguIyAnQs6EifCZU3AGA2YXrkeEZLeUnEGYFVhVrkPBJjznNOuATfyoEr70mNix7nX2dJLrb9FQjJGHTnOgu%2B%2BMhgp8qhHCgtLWeBbvDrlX%2FMP%2FLd8LRLG9jLtr6hBFOS7zqsdni1IEgmS3qjvyU9VlgfIeXB6PTm5kjQ8k42WMbGKxjlBOhOG4PtEFIGhaVBW0z1hZe4FxdaoILDUwp8QiSsb%2ByQCXsjtItQamhAO%2Fht1UNxmQC6co2emKdSGi%2BfJItZROg5sDk0d06BR796bBW2Ibvh5I0Njq4tBIuh2WYzM2NeFdCyAJ891DDclhH0ks9B4AFJNsr2PnEndv8cWCscJ0X651RnvoCmKPiZ7ARiUIKoHnziUwLi%2FkjYaVBz%2BQq4RuyhS%2BpbUrl5WHmvELQlM%2Bal0fGHSDpnv0K7FdOCt%2FTywdJpj1%2FuHRf2EecBaz5VtkkeADzwbmHikWxyw0TU%2BqlLBhVwTOefX6vEL7piPyGywwR8i0eooGoFmuqoVyQbTyq71ZX5%2Bk2ZwcYS56cywKFiXsKjlKsUnV8dAZGV6S3g%2FrQiMS%2BuA2etosAQ7XNJoPCIm%2B15rwFOnYg1DFnigoMN2jmsQGOqUBoQ%2FIQAzhFdVZl%2FXZe71nf8d3e0G6Owo7Afl8Ru4%2BdWus5G8Zr%2BSxqbQcg9WKVHOs5YgjklqZZkMZUAzOa5P56WcVBLo82BKePMbo%2BKubHoquGRMOhTSutpu4oJKy9GM1pCV9suKep1SFLnyF%2FfuylWT7lY4UALuKIkAYQPYaOy1OslR6swqjntzI2PDT5z8ur5A5hRPZH1ZSNIdCUoJnKkzY04k%2B&X-Amz-Signature=e3e289b5e61615febb457e8b8783f4b336566e4b32b06200636b7b9427bbcfad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWBX52O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCl%2F54RrDzYItj1039g4FBqaqy71tfScKOES2WTgD41fAIgOFyFwK0%2B6Hk7dzgJfcI5FKV%2F7rpgJWGq9qL%2BMZpgKWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHH5uk%2FZ%2Fa4nBpkpPSrcA9pse0zO%2Fei5T1Qr%2BUQRtADlSFKxoq%2F6hkguIyAnQs6EifCZU3AGA2YXrkeEZLeUnEGYFVhVrkPBJjznNOuATfyoEr70mNix7nX2dJLrb9FQjJGHTnOgu%2B%2BMhgp8qhHCgtLWeBbvDrlX%2FMP%2FLd8LRLG9jLtr6hBFOS7zqsdni1IEgmS3qjvyU9VlgfIeXB6PTm5kjQ8k42WMbGKxjlBOhOG4PtEFIGhaVBW0z1hZe4FxdaoILDUwp8QiSsb%2ByQCXsjtItQamhAO%2Fht1UNxmQC6co2emKdSGi%2BfJItZROg5sDk0d06BR796bBW2Ibvh5I0Njq4tBIuh2WYzM2NeFdCyAJ891DDclhH0ks9B4AFJNsr2PnEndv8cWCscJ0X651RnvoCmKPiZ7ARiUIKoHnziUwLi%2FkjYaVBz%2BQq4RuyhS%2BpbUrl5WHmvELQlM%2Bal0fGHSDpnv0K7FdOCt%2FTywdJpj1%2FuHRf2EecBaz5VtkkeADzwbmHikWxyw0TU%2BqlLBhVwTOefX6vEL7piPyGywwR8i0eooGoFmuqoVyQbTyq71ZX5%2Bk2ZwcYS56cywKFiXsKjlKsUnV8dAZGV6S3g%2FrQiMS%2BuA2etosAQ7XNJoPCIm%2B15rwFOnYg1DFnigoMN2jmsQGOqUBoQ%2FIQAzhFdVZl%2FXZe71nf8d3e0G6Owo7Afl8Ru4%2BdWus5G8Zr%2BSxqbQcg9WKVHOs5YgjklqZZkMZUAzOa5P56WcVBLo82BKePMbo%2BKubHoquGRMOhTSutpu4oJKy9GM1pCV9suKep1SFLnyF%2FfuylWT7lY4UALuKIkAYQPYaOy1OslR6swqjntzI2PDT5z8ur5A5hRPZH1ZSNIdCUoJnKkzY04k%2B&X-Amz-Signature=17f5e61b1e1f5e3b1e911a893d4b9311ec9e781738668779d998f19d4505df9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
