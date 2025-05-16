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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUUOTTO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFFHHY%2FF9f5n2VncrcY9Ng2aq6sXbJeQ8OnlKjVkv7gIhAMHjlcKKK4VI1oLJ31yg2Ey6cvI9Qu5xiccDxqKcnd%2F%2FKv8DCDwQABoMNjM3NDIzMTgzODA1IgxoQ60BiZdRm82a6SMq3AOdz6M%2FDEx6f3H8Q93njsncOcTwJ%2FKuJ4h3rYRCDLQKBt%2BcjVtI6Oi%2F%2FobURqft0nNe5uAtudHItRuJvNZFMZIb3Y9F0fc1AS46vaiweK2Ez9aO9%2BuCAY0ESYsRPvTVl4Eq0xNr4aKQjiwicfl6Erv%2FlV4qS0CmrDKpc5j8%2F%2Ff5qlwnVrc6L94zVi6iJtVCB1KUsROL%2FGR%2Bv8OZsf1LcWV5dgYf%2FSzAWDNFeU5rpZmIEvpuZhV5Rg7TVsEr7W3cyLccBeNe%2Fp0HUTVleo5BYJwKukifGV9Xmkg%2FDh7rOYj0nFtNAY4TFhlZNWdbBQ%2F1%2FnPxhCg7xOet2Dd0m1Kny2hKi3hkEupFscNFeUC%2BLDJjljAVxtvv3eBBPAE18bvC0fVgwkfGlVriM%2BSD7Wk%2B40kxgxHY%2Bwuf5MIUuxuSl0485jYbX3NZg%2BYUUS1%2BWAGJNuPYMR02RbEWsN56lOaYjtuzmaxiYsoKjgAKmNh0IQuIOPZsn5AIRnVV6C6df83ttwxA3EfRU1t3efp3ARzNp4jt1Psuwq4UhYK%2FXfmipO8RFJVMiH5TpouQJ7rOITYUWM0pMa9sGW%2FcWmzBJBCUhT9UKsl8a1EoONwn%2Fhe8llIQwyx68wZnSklxpqWJ5jDA05rBBjqkAcjxCEFTXZLje%2Flon%2FTPZzmXRijr6fodlIySR6uDlAQc%2BubJohy6k179GsfOriiZiwY84r03BbfajZaGU9e%2BB3Xnx31htS%2FrG3MWV9KXgqdrXBcFlnsnWZqj6daMTcTb4ssQk2jp0yd9BWueV58yjtaMKVIDHo0s7gwtNXXbdqXKEHR238UpMuTqUZzfwKWwj3qGCGTfU%2BjGVVtUu7CsWx6lf0H5&X-Amz-Signature=b6ec9b330ae1a4319ff2c580c73381b2b3843a047cf2a9446742d3d9868d7153&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUUOTTO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFFHHY%2FF9f5n2VncrcY9Ng2aq6sXbJeQ8OnlKjVkv7gIhAMHjlcKKK4VI1oLJ31yg2Ey6cvI9Qu5xiccDxqKcnd%2F%2FKv8DCDwQABoMNjM3NDIzMTgzODA1IgxoQ60BiZdRm82a6SMq3AOdz6M%2FDEx6f3H8Q93njsncOcTwJ%2FKuJ4h3rYRCDLQKBt%2BcjVtI6Oi%2F%2FobURqft0nNe5uAtudHItRuJvNZFMZIb3Y9F0fc1AS46vaiweK2Ez9aO9%2BuCAY0ESYsRPvTVl4Eq0xNr4aKQjiwicfl6Erv%2FlV4qS0CmrDKpc5j8%2F%2Ff5qlwnVrc6L94zVi6iJtVCB1KUsROL%2FGR%2Bv8OZsf1LcWV5dgYf%2FSzAWDNFeU5rpZmIEvpuZhV5Rg7TVsEr7W3cyLccBeNe%2Fp0HUTVleo5BYJwKukifGV9Xmkg%2FDh7rOYj0nFtNAY4TFhlZNWdbBQ%2F1%2FnPxhCg7xOet2Dd0m1Kny2hKi3hkEupFscNFeUC%2BLDJjljAVxtvv3eBBPAE18bvC0fVgwkfGlVriM%2BSD7Wk%2B40kxgxHY%2Bwuf5MIUuxuSl0485jYbX3NZg%2BYUUS1%2BWAGJNuPYMR02RbEWsN56lOaYjtuzmaxiYsoKjgAKmNh0IQuIOPZsn5AIRnVV6C6df83ttwxA3EfRU1t3efp3ARzNp4jt1Psuwq4UhYK%2FXfmipO8RFJVMiH5TpouQJ7rOITYUWM0pMa9sGW%2FcWmzBJBCUhT9UKsl8a1EoONwn%2Fhe8llIQwyx68wZnSklxpqWJ5jDA05rBBjqkAcjxCEFTXZLje%2Flon%2FTPZzmXRijr6fodlIySR6uDlAQc%2BubJohy6k179GsfOriiZiwY84r03BbfajZaGU9e%2BB3Xnx31htS%2FrG3MWV9KXgqdrXBcFlnsnWZqj6daMTcTb4ssQk2jp0yd9BWueV58yjtaMKVIDHo0s7gwtNXXbdqXKEHR238UpMuTqUZzfwKWwj3qGCGTfU%2BjGVVtUu7CsWx6lf0H5&X-Amz-Signature=684b6fa950b4da52806e66e4aa3cc31314ef2708d6e08b53ffbaf5a91e420b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUUOTTO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFFHHY%2FF9f5n2VncrcY9Ng2aq6sXbJeQ8OnlKjVkv7gIhAMHjlcKKK4VI1oLJ31yg2Ey6cvI9Qu5xiccDxqKcnd%2F%2FKv8DCDwQABoMNjM3NDIzMTgzODA1IgxoQ60BiZdRm82a6SMq3AOdz6M%2FDEx6f3H8Q93njsncOcTwJ%2FKuJ4h3rYRCDLQKBt%2BcjVtI6Oi%2F%2FobURqft0nNe5uAtudHItRuJvNZFMZIb3Y9F0fc1AS46vaiweK2Ez9aO9%2BuCAY0ESYsRPvTVl4Eq0xNr4aKQjiwicfl6Erv%2FlV4qS0CmrDKpc5j8%2F%2Ff5qlwnVrc6L94zVi6iJtVCB1KUsROL%2FGR%2Bv8OZsf1LcWV5dgYf%2FSzAWDNFeU5rpZmIEvpuZhV5Rg7TVsEr7W3cyLccBeNe%2Fp0HUTVleo5BYJwKukifGV9Xmkg%2FDh7rOYj0nFtNAY4TFhlZNWdbBQ%2F1%2FnPxhCg7xOet2Dd0m1Kny2hKi3hkEupFscNFeUC%2BLDJjljAVxtvv3eBBPAE18bvC0fVgwkfGlVriM%2BSD7Wk%2B40kxgxHY%2Bwuf5MIUuxuSl0485jYbX3NZg%2BYUUS1%2BWAGJNuPYMR02RbEWsN56lOaYjtuzmaxiYsoKjgAKmNh0IQuIOPZsn5AIRnVV6C6df83ttwxA3EfRU1t3efp3ARzNp4jt1Psuwq4UhYK%2FXfmipO8RFJVMiH5TpouQJ7rOITYUWM0pMa9sGW%2FcWmzBJBCUhT9UKsl8a1EoONwn%2Fhe8llIQwyx68wZnSklxpqWJ5jDA05rBBjqkAcjxCEFTXZLje%2Flon%2FTPZzmXRijr6fodlIySR6uDlAQc%2BubJohy6k179GsfOriiZiwY84r03BbfajZaGU9e%2BB3Xnx31htS%2FrG3MWV9KXgqdrXBcFlnsnWZqj6daMTcTb4ssQk2jp0yd9BWueV58yjtaMKVIDHo0s7gwtNXXbdqXKEHR238UpMuTqUZzfwKWwj3qGCGTfU%2BjGVVtUu7CsWx6lf0H5&X-Amz-Signature=d7dfb4275cdba7435f55e17ed4d9bfb0f1d20d32141d08a95a323e764911b07e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUUOTTO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFFHHY%2FF9f5n2VncrcY9Ng2aq6sXbJeQ8OnlKjVkv7gIhAMHjlcKKK4VI1oLJ31yg2Ey6cvI9Qu5xiccDxqKcnd%2F%2FKv8DCDwQABoMNjM3NDIzMTgzODA1IgxoQ60BiZdRm82a6SMq3AOdz6M%2FDEx6f3H8Q93njsncOcTwJ%2FKuJ4h3rYRCDLQKBt%2BcjVtI6Oi%2F%2FobURqft0nNe5uAtudHItRuJvNZFMZIb3Y9F0fc1AS46vaiweK2Ez9aO9%2BuCAY0ESYsRPvTVl4Eq0xNr4aKQjiwicfl6Erv%2FlV4qS0CmrDKpc5j8%2F%2Ff5qlwnVrc6L94zVi6iJtVCB1KUsROL%2FGR%2Bv8OZsf1LcWV5dgYf%2FSzAWDNFeU5rpZmIEvpuZhV5Rg7TVsEr7W3cyLccBeNe%2Fp0HUTVleo5BYJwKukifGV9Xmkg%2FDh7rOYj0nFtNAY4TFhlZNWdbBQ%2F1%2FnPxhCg7xOet2Dd0m1Kny2hKi3hkEupFscNFeUC%2BLDJjljAVxtvv3eBBPAE18bvC0fVgwkfGlVriM%2BSD7Wk%2B40kxgxHY%2Bwuf5MIUuxuSl0485jYbX3NZg%2BYUUS1%2BWAGJNuPYMR02RbEWsN56lOaYjtuzmaxiYsoKjgAKmNh0IQuIOPZsn5AIRnVV6C6df83ttwxA3EfRU1t3efp3ARzNp4jt1Psuwq4UhYK%2FXfmipO8RFJVMiH5TpouQJ7rOITYUWM0pMa9sGW%2FcWmzBJBCUhT9UKsl8a1EoONwn%2Fhe8llIQwyx68wZnSklxpqWJ5jDA05rBBjqkAcjxCEFTXZLje%2Flon%2FTPZzmXRijr6fodlIySR6uDlAQc%2BubJohy6k179GsfOriiZiwY84r03BbfajZaGU9e%2BB3Xnx31htS%2FrG3MWV9KXgqdrXBcFlnsnWZqj6daMTcTb4ssQk2jp0yd9BWueV58yjtaMKVIDHo0s7gwtNXXbdqXKEHR238UpMuTqUZzfwKWwj3qGCGTfU%2BjGVVtUu7CsWx6lf0H5&X-Amz-Signature=cbaa6c41ce1269bfc7c2d584374e628846fb74467cf9f1bf3939a23688966af1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUUOTTO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFFHHY%2FF9f5n2VncrcY9Ng2aq6sXbJeQ8OnlKjVkv7gIhAMHjlcKKK4VI1oLJ31yg2Ey6cvI9Qu5xiccDxqKcnd%2F%2FKv8DCDwQABoMNjM3NDIzMTgzODA1IgxoQ60BiZdRm82a6SMq3AOdz6M%2FDEx6f3H8Q93njsncOcTwJ%2FKuJ4h3rYRCDLQKBt%2BcjVtI6Oi%2F%2FobURqft0nNe5uAtudHItRuJvNZFMZIb3Y9F0fc1AS46vaiweK2Ez9aO9%2BuCAY0ESYsRPvTVl4Eq0xNr4aKQjiwicfl6Erv%2FlV4qS0CmrDKpc5j8%2F%2Ff5qlwnVrc6L94zVi6iJtVCB1KUsROL%2FGR%2Bv8OZsf1LcWV5dgYf%2FSzAWDNFeU5rpZmIEvpuZhV5Rg7TVsEr7W3cyLccBeNe%2Fp0HUTVleo5BYJwKukifGV9Xmkg%2FDh7rOYj0nFtNAY4TFhlZNWdbBQ%2F1%2FnPxhCg7xOet2Dd0m1Kny2hKi3hkEupFscNFeUC%2BLDJjljAVxtvv3eBBPAE18bvC0fVgwkfGlVriM%2BSD7Wk%2B40kxgxHY%2Bwuf5MIUuxuSl0485jYbX3NZg%2BYUUS1%2BWAGJNuPYMR02RbEWsN56lOaYjtuzmaxiYsoKjgAKmNh0IQuIOPZsn5AIRnVV6C6df83ttwxA3EfRU1t3efp3ARzNp4jt1Psuwq4UhYK%2FXfmipO8RFJVMiH5TpouQJ7rOITYUWM0pMa9sGW%2FcWmzBJBCUhT9UKsl8a1EoONwn%2Fhe8llIQwyx68wZnSklxpqWJ5jDA05rBBjqkAcjxCEFTXZLje%2Flon%2FTPZzmXRijr6fodlIySR6uDlAQc%2BubJohy6k179GsfOriiZiwY84r03BbfajZaGU9e%2BB3Xnx31htS%2FrG3MWV9KXgqdrXBcFlnsnWZqj6daMTcTb4ssQk2jp0yd9BWueV58yjtaMKVIDHo0s7gwtNXXbdqXKEHR238UpMuTqUZzfwKWwj3qGCGTfU%2BjGVVtUu7CsWx6lf0H5&X-Amz-Signature=a0dddb3e79061350ea8de278d7ec34f78db7949ece81b9d0e224c265b12c786d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUUOTTO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFFHHY%2FF9f5n2VncrcY9Ng2aq6sXbJeQ8OnlKjVkv7gIhAMHjlcKKK4VI1oLJ31yg2Ey6cvI9Qu5xiccDxqKcnd%2F%2FKv8DCDwQABoMNjM3NDIzMTgzODA1IgxoQ60BiZdRm82a6SMq3AOdz6M%2FDEx6f3H8Q93njsncOcTwJ%2FKuJ4h3rYRCDLQKBt%2BcjVtI6Oi%2F%2FobURqft0nNe5uAtudHItRuJvNZFMZIb3Y9F0fc1AS46vaiweK2Ez9aO9%2BuCAY0ESYsRPvTVl4Eq0xNr4aKQjiwicfl6Erv%2FlV4qS0CmrDKpc5j8%2F%2Ff5qlwnVrc6L94zVi6iJtVCB1KUsROL%2FGR%2Bv8OZsf1LcWV5dgYf%2FSzAWDNFeU5rpZmIEvpuZhV5Rg7TVsEr7W3cyLccBeNe%2Fp0HUTVleo5BYJwKukifGV9Xmkg%2FDh7rOYj0nFtNAY4TFhlZNWdbBQ%2F1%2FnPxhCg7xOet2Dd0m1Kny2hKi3hkEupFscNFeUC%2BLDJjljAVxtvv3eBBPAE18bvC0fVgwkfGlVriM%2BSD7Wk%2B40kxgxHY%2Bwuf5MIUuxuSl0485jYbX3NZg%2BYUUS1%2BWAGJNuPYMR02RbEWsN56lOaYjtuzmaxiYsoKjgAKmNh0IQuIOPZsn5AIRnVV6C6df83ttwxA3EfRU1t3efp3ARzNp4jt1Psuwq4UhYK%2FXfmipO8RFJVMiH5TpouQJ7rOITYUWM0pMa9sGW%2FcWmzBJBCUhT9UKsl8a1EoONwn%2Fhe8llIQwyx68wZnSklxpqWJ5jDA05rBBjqkAcjxCEFTXZLje%2Flon%2FTPZzmXRijr6fodlIySR6uDlAQc%2BubJohy6k179GsfOriiZiwY84r03BbfajZaGU9e%2BB3Xnx31htS%2FrG3MWV9KXgqdrXBcFlnsnWZqj6daMTcTb4ssQk2jp0yd9BWueV58yjtaMKVIDHo0s7gwtNXXbdqXKEHR238UpMuTqUZzfwKWwj3qGCGTfU%2BjGVVtUu7CsWx6lf0H5&X-Amz-Signature=219cf6401fe16275f0c19519a7361234f5646b622901c1546e618fad2cbd5181&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUUOTTO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFFHHY%2FF9f5n2VncrcY9Ng2aq6sXbJeQ8OnlKjVkv7gIhAMHjlcKKK4VI1oLJ31yg2Ey6cvI9Qu5xiccDxqKcnd%2F%2FKv8DCDwQABoMNjM3NDIzMTgzODA1IgxoQ60BiZdRm82a6SMq3AOdz6M%2FDEx6f3H8Q93njsncOcTwJ%2FKuJ4h3rYRCDLQKBt%2BcjVtI6Oi%2F%2FobURqft0nNe5uAtudHItRuJvNZFMZIb3Y9F0fc1AS46vaiweK2Ez9aO9%2BuCAY0ESYsRPvTVl4Eq0xNr4aKQjiwicfl6Erv%2FlV4qS0CmrDKpc5j8%2F%2Ff5qlwnVrc6L94zVi6iJtVCB1KUsROL%2FGR%2Bv8OZsf1LcWV5dgYf%2FSzAWDNFeU5rpZmIEvpuZhV5Rg7TVsEr7W3cyLccBeNe%2Fp0HUTVleo5BYJwKukifGV9Xmkg%2FDh7rOYj0nFtNAY4TFhlZNWdbBQ%2F1%2FnPxhCg7xOet2Dd0m1Kny2hKi3hkEupFscNFeUC%2BLDJjljAVxtvv3eBBPAE18bvC0fVgwkfGlVriM%2BSD7Wk%2B40kxgxHY%2Bwuf5MIUuxuSl0485jYbX3NZg%2BYUUS1%2BWAGJNuPYMR02RbEWsN56lOaYjtuzmaxiYsoKjgAKmNh0IQuIOPZsn5AIRnVV6C6df83ttwxA3EfRU1t3efp3ARzNp4jt1Psuwq4UhYK%2FXfmipO8RFJVMiH5TpouQJ7rOITYUWM0pMa9sGW%2FcWmzBJBCUhT9UKsl8a1EoONwn%2Fhe8llIQwyx68wZnSklxpqWJ5jDA05rBBjqkAcjxCEFTXZLje%2Flon%2FTPZzmXRijr6fodlIySR6uDlAQc%2BubJohy6k179GsfOriiZiwY84r03BbfajZaGU9e%2BB3Xnx31htS%2FrG3MWV9KXgqdrXBcFlnsnWZqj6daMTcTb4ssQk2jp0yd9BWueV58yjtaMKVIDHo0s7gwtNXXbdqXKEHR238UpMuTqUZzfwKWwj3qGCGTfU%2BjGVVtUu7CsWx6lf0H5&X-Amz-Signature=56a8dc973ed431273d3882c4a40a672df00e3b29c92c4793668ddf47dd551003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUUOTTO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcFFHHY%2FF9f5n2VncrcY9Ng2aq6sXbJeQ8OnlKjVkv7gIhAMHjlcKKK4VI1oLJ31yg2Ey6cvI9Qu5xiccDxqKcnd%2F%2FKv8DCDwQABoMNjM3NDIzMTgzODA1IgxoQ60BiZdRm82a6SMq3AOdz6M%2FDEx6f3H8Q93njsncOcTwJ%2FKuJ4h3rYRCDLQKBt%2BcjVtI6Oi%2F%2FobURqft0nNe5uAtudHItRuJvNZFMZIb3Y9F0fc1AS46vaiweK2Ez9aO9%2BuCAY0ESYsRPvTVl4Eq0xNr4aKQjiwicfl6Erv%2FlV4qS0CmrDKpc5j8%2F%2Ff5qlwnVrc6L94zVi6iJtVCB1KUsROL%2FGR%2Bv8OZsf1LcWV5dgYf%2FSzAWDNFeU5rpZmIEvpuZhV5Rg7TVsEr7W3cyLccBeNe%2Fp0HUTVleo5BYJwKukifGV9Xmkg%2FDh7rOYj0nFtNAY4TFhlZNWdbBQ%2F1%2FnPxhCg7xOet2Dd0m1Kny2hKi3hkEupFscNFeUC%2BLDJjljAVxtvv3eBBPAE18bvC0fVgwkfGlVriM%2BSD7Wk%2B40kxgxHY%2Bwuf5MIUuxuSl0485jYbX3NZg%2BYUUS1%2BWAGJNuPYMR02RbEWsN56lOaYjtuzmaxiYsoKjgAKmNh0IQuIOPZsn5AIRnVV6C6df83ttwxA3EfRU1t3efp3ARzNp4jt1Psuwq4UhYK%2FXfmipO8RFJVMiH5TpouQJ7rOITYUWM0pMa9sGW%2FcWmzBJBCUhT9UKsl8a1EoONwn%2Fhe8llIQwyx68wZnSklxpqWJ5jDA05rBBjqkAcjxCEFTXZLje%2Flon%2FTPZzmXRijr6fodlIySR6uDlAQc%2BubJohy6k179GsfOriiZiwY84r03BbfajZaGU9e%2BB3Xnx31htS%2FrG3MWV9KXgqdrXBcFlnsnWZqj6daMTcTb4ssQk2jp0yd9BWueV58yjtaMKVIDHo0s7gwtNXXbdqXKEHR238UpMuTqUZzfwKWwj3qGCGTfU%2BjGVVtUu7CsWx6lf0H5&X-Amz-Signature=b68c5f5f34d14686a14b07482bb0c47fdcd37e37dbcdd83ffb251cc7f8acada9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
