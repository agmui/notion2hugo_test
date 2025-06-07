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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRKV6EM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgGQonG4FrGP4%2B7R1rGDFgmVMyCnvU6e%2BG83IJ979dQIhAOK1nO8Tn2BHGTett7PJW4SjUC1z3yaUkyCMkcOj5yoxKv8DCHAQABoMNjM3NDIzMTgzODA1IgyCmSXsjimKG%2FV%2FuoYq3AMDIRmxksjpDbgCdHtO4rX6HaMpmYc525KUD9HjQeuPQvlfaJYAnx62nB3ww8VEToUYPAoTumrLfL%2BhNViXI%2FGkshhhzbzs6ogHPrwL8ZVEfiV%2B1K9uHOiW7JDUePo3MnY2BbqCvNGIq24DODNJFcVPCpINEhx8l1cv7SThaUSHYKElrB%2BdzjkklgP2QPsEUjsHynLHT5Msq%2FPqEVxTU0sSUA9Wz7dfFvmkhTBy9kOCr%2BDBUETpA9aZeh3jwabmG5TfZvvqCU8Z6amkPP3GwvE8th9DW77K9TrytW0hSjvo7hh%2BqdglNC8Z0Fi6uR0CfSlT58ZRjDAXC4VHeEiIb%2BWg0KyPjRsQh5K2ykuusg96RC%2FueZ2rWyPOdWelAOqpOrTKwok7v6AL83OsPVQmz0U43OtYSR%2BCqwmaI70udBWG9rNb%2FSahrn%2BirK4EZusGA1M%2FuOHUVZy%2FVrllsxWqCpwA413UO%2BdmDImoiOESLQB7%2BWW6uZ3sh%2B8jsU0sFs04b6Kt9BW8emcfzKS5Z9USY%2FQYwav1sQ9%2BlyjxD3%2BTB5j%2FNzzJf3CP%2Fzyo8KlzUjkcduE4q1HfClNP2g8PwNb2an6QJx4Qo1ojpWK8Mdkg8Aq5BaVlwv7vl%2BLUJLb1FzD%2Bt4%2FCBjqkAZMoDWABY094WQZ5dGH7hi%2FkI%2BQzUse%2B752tJt%2FNYCo1PKKQDU0GiEro861zYGdBevwg2r%2F3yJQwHxl%2Bo2Y1TqOnZmvp4UqsfY0n1kXIVdp%2BZWMlsM7%2BnyhZLv57zjKrRmPVe%2BAVxg%2BkFv74H88Mh1ARChScUZeDmKMuBiItuTj80z6J6aKV5P6jVskpU0QZVgwOyH%2BXKM3nCaCjSGQfsPh2ZMKs&X-Amz-Signature=01ee59a4cf8446e4417149cdcb9f075720c9c4274115c2212ff96e7555dafa66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRKV6EM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgGQonG4FrGP4%2B7R1rGDFgmVMyCnvU6e%2BG83IJ979dQIhAOK1nO8Tn2BHGTett7PJW4SjUC1z3yaUkyCMkcOj5yoxKv8DCHAQABoMNjM3NDIzMTgzODA1IgyCmSXsjimKG%2FV%2FuoYq3AMDIRmxksjpDbgCdHtO4rX6HaMpmYc525KUD9HjQeuPQvlfaJYAnx62nB3ww8VEToUYPAoTumrLfL%2BhNViXI%2FGkshhhzbzs6ogHPrwL8ZVEfiV%2B1K9uHOiW7JDUePo3MnY2BbqCvNGIq24DODNJFcVPCpINEhx8l1cv7SThaUSHYKElrB%2BdzjkklgP2QPsEUjsHynLHT5Msq%2FPqEVxTU0sSUA9Wz7dfFvmkhTBy9kOCr%2BDBUETpA9aZeh3jwabmG5TfZvvqCU8Z6amkPP3GwvE8th9DW77K9TrytW0hSjvo7hh%2BqdglNC8Z0Fi6uR0CfSlT58ZRjDAXC4VHeEiIb%2BWg0KyPjRsQh5K2ykuusg96RC%2FueZ2rWyPOdWelAOqpOrTKwok7v6AL83OsPVQmz0U43OtYSR%2BCqwmaI70udBWG9rNb%2FSahrn%2BirK4EZusGA1M%2FuOHUVZy%2FVrllsxWqCpwA413UO%2BdmDImoiOESLQB7%2BWW6uZ3sh%2B8jsU0sFs04b6Kt9BW8emcfzKS5Z9USY%2FQYwav1sQ9%2BlyjxD3%2BTB5j%2FNzzJf3CP%2Fzyo8KlzUjkcduE4q1HfClNP2g8PwNb2an6QJx4Qo1ojpWK8Mdkg8Aq5BaVlwv7vl%2BLUJLb1FzD%2Bt4%2FCBjqkAZMoDWABY094WQZ5dGH7hi%2FkI%2BQzUse%2B752tJt%2FNYCo1PKKQDU0GiEro861zYGdBevwg2r%2F3yJQwHxl%2Bo2Y1TqOnZmvp4UqsfY0n1kXIVdp%2BZWMlsM7%2BnyhZLv57zjKrRmPVe%2BAVxg%2BkFv74H88Mh1ARChScUZeDmKMuBiItuTj80z6J6aKV5P6jVskpU0QZVgwOyH%2BXKM3nCaCjSGQfsPh2ZMKs&X-Amz-Signature=0ba91409bb02ff1faf7816ef35088aee73407bac9917b9ef36acb7504e80abd1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRKV6EM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgGQonG4FrGP4%2B7R1rGDFgmVMyCnvU6e%2BG83IJ979dQIhAOK1nO8Tn2BHGTett7PJW4SjUC1z3yaUkyCMkcOj5yoxKv8DCHAQABoMNjM3NDIzMTgzODA1IgyCmSXsjimKG%2FV%2FuoYq3AMDIRmxksjpDbgCdHtO4rX6HaMpmYc525KUD9HjQeuPQvlfaJYAnx62nB3ww8VEToUYPAoTumrLfL%2BhNViXI%2FGkshhhzbzs6ogHPrwL8ZVEfiV%2B1K9uHOiW7JDUePo3MnY2BbqCvNGIq24DODNJFcVPCpINEhx8l1cv7SThaUSHYKElrB%2BdzjkklgP2QPsEUjsHynLHT5Msq%2FPqEVxTU0sSUA9Wz7dfFvmkhTBy9kOCr%2BDBUETpA9aZeh3jwabmG5TfZvvqCU8Z6amkPP3GwvE8th9DW77K9TrytW0hSjvo7hh%2BqdglNC8Z0Fi6uR0CfSlT58ZRjDAXC4VHeEiIb%2BWg0KyPjRsQh5K2ykuusg96RC%2FueZ2rWyPOdWelAOqpOrTKwok7v6AL83OsPVQmz0U43OtYSR%2BCqwmaI70udBWG9rNb%2FSahrn%2BirK4EZusGA1M%2FuOHUVZy%2FVrllsxWqCpwA413UO%2BdmDImoiOESLQB7%2BWW6uZ3sh%2B8jsU0sFs04b6Kt9BW8emcfzKS5Z9USY%2FQYwav1sQ9%2BlyjxD3%2BTB5j%2FNzzJf3CP%2Fzyo8KlzUjkcduE4q1HfClNP2g8PwNb2an6QJx4Qo1ojpWK8Mdkg8Aq5BaVlwv7vl%2BLUJLb1FzD%2Bt4%2FCBjqkAZMoDWABY094WQZ5dGH7hi%2FkI%2BQzUse%2B752tJt%2FNYCo1PKKQDU0GiEro861zYGdBevwg2r%2F3yJQwHxl%2Bo2Y1TqOnZmvp4UqsfY0n1kXIVdp%2BZWMlsM7%2BnyhZLv57zjKrRmPVe%2BAVxg%2BkFv74H88Mh1ARChScUZeDmKMuBiItuTj80z6J6aKV5P6jVskpU0QZVgwOyH%2BXKM3nCaCjSGQfsPh2ZMKs&X-Amz-Signature=6cfc54eaa438373394dcdd65cb072e229b766f1a56cd3a4282c17f7db6217aae&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRKV6EM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgGQonG4FrGP4%2B7R1rGDFgmVMyCnvU6e%2BG83IJ979dQIhAOK1nO8Tn2BHGTett7PJW4SjUC1z3yaUkyCMkcOj5yoxKv8DCHAQABoMNjM3NDIzMTgzODA1IgyCmSXsjimKG%2FV%2FuoYq3AMDIRmxksjpDbgCdHtO4rX6HaMpmYc525KUD9HjQeuPQvlfaJYAnx62nB3ww8VEToUYPAoTumrLfL%2BhNViXI%2FGkshhhzbzs6ogHPrwL8ZVEfiV%2B1K9uHOiW7JDUePo3MnY2BbqCvNGIq24DODNJFcVPCpINEhx8l1cv7SThaUSHYKElrB%2BdzjkklgP2QPsEUjsHynLHT5Msq%2FPqEVxTU0sSUA9Wz7dfFvmkhTBy9kOCr%2BDBUETpA9aZeh3jwabmG5TfZvvqCU8Z6amkPP3GwvE8th9DW77K9TrytW0hSjvo7hh%2BqdglNC8Z0Fi6uR0CfSlT58ZRjDAXC4VHeEiIb%2BWg0KyPjRsQh5K2ykuusg96RC%2FueZ2rWyPOdWelAOqpOrTKwok7v6AL83OsPVQmz0U43OtYSR%2BCqwmaI70udBWG9rNb%2FSahrn%2BirK4EZusGA1M%2FuOHUVZy%2FVrllsxWqCpwA413UO%2BdmDImoiOESLQB7%2BWW6uZ3sh%2B8jsU0sFs04b6Kt9BW8emcfzKS5Z9USY%2FQYwav1sQ9%2BlyjxD3%2BTB5j%2FNzzJf3CP%2Fzyo8KlzUjkcduE4q1HfClNP2g8PwNb2an6QJx4Qo1ojpWK8Mdkg8Aq5BaVlwv7vl%2BLUJLb1FzD%2Bt4%2FCBjqkAZMoDWABY094WQZ5dGH7hi%2FkI%2BQzUse%2B752tJt%2FNYCo1PKKQDU0GiEro861zYGdBevwg2r%2F3yJQwHxl%2Bo2Y1TqOnZmvp4UqsfY0n1kXIVdp%2BZWMlsM7%2BnyhZLv57zjKrRmPVe%2BAVxg%2BkFv74H88Mh1ARChScUZeDmKMuBiItuTj80z6J6aKV5P6jVskpU0QZVgwOyH%2BXKM3nCaCjSGQfsPh2ZMKs&X-Amz-Signature=6cf96afb636c01c1d19dec972b05441ee1584b3d68890df094fda8a078997418&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRKV6EM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgGQonG4FrGP4%2B7R1rGDFgmVMyCnvU6e%2BG83IJ979dQIhAOK1nO8Tn2BHGTett7PJW4SjUC1z3yaUkyCMkcOj5yoxKv8DCHAQABoMNjM3NDIzMTgzODA1IgyCmSXsjimKG%2FV%2FuoYq3AMDIRmxksjpDbgCdHtO4rX6HaMpmYc525KUD9HjQeuPQvlfaJYAnx62nB3ww8VEToUYPAoTumrLfL%2BhNViXI%2FGkshhhzbzs6ogHPrwL8ZVEfiV%2B1K9uHOiW7JDUePo3MnY2BbqCvNGIq24DODNJFcVPCpINEhx8l1cv7SThaUSHYKElrB%2BdzjkklgP2QPsEUjsHynLHT5Msq%2FPqEVxTU0sSUA9Wz7dfFvmkhTBy9kOCr%2BDBUETpA9aZeh3jwabmG5TfZvvqCU8Z6amkPP3GwvE8th9DW77K9TrytW0hSjvo7hh%2BqdglNC8Z0Fi6uR0CfSlT58ZRjDAXC4VHeEiIb%2BWg0KyPjRsQh5K2ykuusg96RC%2FueZ2rWyPOdWelAOqpOrTKwok7v6AL83OsPVQmz0U43OtYSR%2BCqwmaI70udBWG9rNb%2FSahrn%2BirK4EZusGA1M%2FuOHUVZy%2FVrllsxWqCpwA413UO%2BdmDImoiOESLQB7%2BWW6uZ3sh%2B8jsU0sFs04b6Kt9BW8emcfzKS5Z9USY%2FQYwav1sQ9%2BlyjxD3%2BTB5j%2FNzzJf3CP%2Fzyo8KlzUjkcduE4q1HfClNP2g8PwNb2an6QJx4Qo1ojpWK8Mdkg8Aq5BaVlwv7vl%2BLUJLb1FzD%2Bt4%2FCBjqkAZMoDWABY094WQZ5dGH7hi%2FkI%2BQzUse%2B752tJt%2FNYCo1PKKQDU0GiEro861zYGdBevwg2r%2F3yJQwHxl%2Bo2Y1TqOnZmvp4UqsfY0n1kXIVdp%2BZWMlsM7%2BnyhZLv57zjKrRmPVe%2BAVxg%2BkFv74H88Mh1ARChScUZeDmKMuBiItuTj80z6J6aKV5P6jVskpU0QZVgwOyH%2BXKM3nCaCjSGQfsPh2ZMKs&X-Amz-Signature=ae7f234a665558b3ebd020af2eeddf349f5e6c6ceccfc01d397d5b6c0f7f44c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRKV6EM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgGQonG4FrGP4%2B7R1rGDFgmVMyCnvU6e%2BG83IJ979dQIhAOK1nO8Tn2BHGTett7PJW4SjUC1z3yaUkyCMkcOj5yoxKv8DCHAQABoMNjM3NDIzMTgzODA1IgyCmSXsjimKG%2FV%2FuoYq3AMDIRmxksjpDbgCdHtO4rX6HaMpmYc525KUD9HjQeuPQvlfaJYAnx62nB3ww8VEToUYPAoTumrLfL%2BhNViXI%2FGkshhhzbzs6ogHPrwL8ZVEfiV%2B1K9uHOiW7JDUePo3MnY2BbqCvNGIq24DODNJFcVPCpINEhx8l1cv7SThaUSHYKElrB%2BdzjkklgP2QPsEUjsHynLHT5Msq%2FPqEVxTU0sSUA9Wz7dfFvmkhTBy9kOCr%2BDBUETpA9aZeh3jwabmG5TfZvvqCU8Z6amkPP3GwvE8th9DW77K9TrytW0hSjvo7hh%2BqdglNC8Z0Fi6uR0CfSlT58ZRjDAXC4VHeEiIb%2BWg0KyPjRsQh5K2ykuusg96RC%2FueZ2rWyPOdWelAOqpOrTKwok7v6AL83OsPVQmz0U43OtYSR%2BCqwmaI70udBWG9rNb%2FSahrn%2BirK4EZusGA1M%2FuOHUVZy%2FVrllsxWqCpwA413UO%2BdmDImoiOESLQB7%2BWW6uZ3sh%2B8jsU0sFs04b6Kt9BW8emcfzKS5Z9USY%2FQYwav1sQ9%2BlyjxD3%2BTB5j%2FNzzJf3CP%2Fzyo8KlzUjkcduE4q1HfClNP2g8PwNb2an6QJx4Qo1ojpWK8Mdkg8Aq5BaVlwv7vl%2BLUJLb1FzD%2Bt4%2FCBjqkAZMoDWABY094WQZ5dGH7hi%2FkI%2BQzUse%2B752tJt%2FNYCo1PKKQDU0GiEro861zYGdBevwg2r%2F3yJQwHxl%2Bo2Y1TqOnZmvp4UqsfY0n1kXIVdp%2BZWMlsM7%2BnyhZLv57zjKrRmPVe%2BAVxg%2BkFv74H88Mh1ARChScUZeDmKMuBiItuTj80z6J6aKV5P6jVskpU0QZVgwOyH%2BXKM3nCaCjSGQfsPh2ZMKs&X-Amz-Signature=980ddcb94f115856699414482e1560cd2a2fae129b22899a56c7e0d48250e679&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRKV6EM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgGQonG4FrGP4%2B7R1rGDFgmVMyCnvU6e%2BG83IJ979dQIhAOK1nO8Tn2BHGTett7PJW4SjUC1z3yaUkyCMkcOj5yoxKv8DCHAQABoMNjM3NDIzMTgzODA1IgyCmSXsjimKG%2FV%2FuoYq3AMDIRmxksjpDbgCdHtO4rX6HaMpmYc525KUD9HjQeuPQvlfaJYAnx62nB3ww8VEToUYPAoTumrLfL%2BhNViXI%2FGkshhhzbzs6ogHPrwL8ZVEfiV%2B1K9uHOiW7JDUePo3MnY2BbqCvNGIq24DODNJFcVPCpINEhx8l1cv7SThaUSHYKElrB%2BdzjkklgP2QPsEUjsHynLHT5Msq%2FPqEVxTU0sSUA9Wz7dfFvmkhTBy9kOCr%2BDBUETpA9aZeh3jwabmG5TfZvvqCU8Z6amkPP3GwvE8th9DW77K9TrytW0hSjvo7hh%2BqdglNC8Z0Fi6uR0CfSlT58ZRjDAXC4VHeEiIb%2BWg0KyPjRsQh5K2ykuusg96RC%2FueZ2rWyPOdWelAOqpOrTKwok7v6AL83OsPVQmz0U43OtYSR%2BCqwmaI70udBWG9rNb%2FSahrn%2BirK4EZusGA1M%2FuOHUVZy%2FVrllsxWqCpwA413UO%2BdmDImoiOESLQB7%2BWW6uZ3sh%2B8jsU0sFs04b6Kt9BW8emcfzKS5Z9USY%2FQYwav1sQ9%2BlyjxD3%2BTB5j%2FNzzJf3CP%2Fzyo8KlzUjkcduE4q1HfClNP2g8PwNb2an6QJx4Qo1ojpWK8Mdkg8Aq5BaVlwv7vl%2BLUJLb1FzD%2Bt4%2FCBjqkAZMoDWABY094WQZ5dGH7hi%2FkI%2BQzUse%2B752tJt%2FNYCo1PKKQDU0GiEro861zYGdBevwg2r%2F3yJQwHxl%2Bo2Y1TqOnZmvp4UqsfY0n1kXIVdp%2BZWMlsM7%2BnyhZLv57zjKrRmPVe%2BAVxg%2BkFv74H88Mh1ARChScUZeDmKMuBiItuTj80z6J6aKV5P6jVskpU0QZVgwOyH%2BXKM3nCaCjSGQfsPh2ZMKs&X-Amz-Signature=3afea68d08cbc189f382abc0141733e4d8266f9f82ebc8b4497c2d89f4270822&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRKV6EM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgGQonG4FrGP4%2B7R1rGDFgmVMyCnvU6e%2BG83IJ979dQIhAOK1nO8Tn2BHGTett7PJW4SjUC1z3yaUkyCMkcOj5yoxKv8DCHAQABoMNjM3NDIzMTgzODA1IgyCmSXsjimKG%2FV%2FuoYq3AMDIRmxksjpDbgCdHtO4rX6HaMpmYc525KUD9HjQeuPQvlfaJYAnx62nB3ww8VEToUYPAoTumrLfL%2BhNViXI%2FGkshhhzbzs6ogHPrwL8ZVEfiV%2B1K9uHOiW7JDUePo3MnY2BbqCvNGIq24DODNJFcVPCpINEhx8l1cv7SThaUSHYKElrB%2BdzjkklgP2QPsEUjsHynLHT5Msq%2FPqEVxTU0sSUA9Wz7dfFvmkhTBy9kOCr%2BDBUETpA9aZeh3jwabmG5TfZvvqCU8Z6amkPP3GwvE8th9DW77K9TrytW0hSjvo7hh%2BqdglNC8Z0Fi6uR0CfSlT58ZRjDAXC4VHeEiIb%2BWg0KyPjRsQh5K2ykuusg96RC%2FueZ2rWyPOdWelAOqpOrTKwok7v6AL83OsPVQmz0U43OtYSR%2BCqwmaI70udBWG9rNb%2FSahrn%2BirK4EZusGA1M%2FuOHUVZy%2FVrllsxWqCpwA413UO%2BdmDImoiOESLQB7%2BWW6uZ3sh%2B8jsU0sFs04b6Kt9BW8emcfzKS5Z9USY%2FQYwav1sQ9%2BlyjxD3%2BTB5j%2FNzzJf3CP%2Fzyo8KlzUjkcduE4q1HfClNP2g8PwNb2an6QJx4Qo1ojpWK8Mdkg8Aq5BaVlwv7vl%2BLUJLb1FzD%2Bt4%2FCBjqkAZMoDWABY094WQZ5dGH7hi%2FkI%2BQzUse%2B752tJt%2FNYCo1PKKQDU0GiEro861zYGdBevwg2r%2F3yJQwHxl%2Bo2Y1TqOnZmvp4UqsfY0n1kXIVdp%2BZWMlsM7%2BnyhZLv57zjKrRmPVe%2BAVxg%2BkFv74H88Mh1ARChScUZeDmKMuBiItuTj80z6J6aKV5P6jVskpU0QZVgwOyH%2BXKM3nCaCjSGQfsPh2ZMKs&X-Amz-Signature=8fb3d5af745759da1354ee09e42bafa30fc7f6999d9ea341291658a041b04a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
