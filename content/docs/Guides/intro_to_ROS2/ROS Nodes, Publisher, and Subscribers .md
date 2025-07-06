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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXJFCIB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCD78mwmbwNdK0J8vtwa8axJPBSexnhuTT%2FEgn2fUmh6wIhAO5nxKT6Rv%2BMyJfPDj1r9EAAGI0eaeQQkessODk708c%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igzxj%2BOZ%2F3COJPRnMvIq3AMPWZlFHqJDoKvSLdu5LtGQCNZnC79PtHHmUNPptJ5UlZhtPiZhLkVAjEjL1QLxsGxegfcK0u6J6%2BnrkT2cUffBLKWLyJ%2BwWKPzvcoo2Wb4KqZKGkPcCDEvQQ0ktk4gIsliDdz5jYu5LOPcK2gh0H%2F2ij%2B5AKtNqJKB2w%2B6CER0rqr1Zrdv17R2PHSIQbt7rTGQUjquDmTA0R8Fc5FHeaAcCFPiaRerKWjcjQO1J4aNU4p0Lk0C5Q2MtCJkX%2FuionpPu0MrfgaZDcnISzOhr60enJzQGO7rg1nZRZIHKDl0tcc%2BxylucbG%2FCpbg1rKOR4drXnsJDhEKZ%2Fi7LBr6jgycWAkttWspSN8%2Bh98kOJuMYUisVO9eG%2Br8nQHfV%2BGbKxeUGc5LMZy%2FqDG9Edb9ajWEvmNEGOep84UwnQHfGqvAGuwBsbUxeyf3eZEm3JJKrsy5vTf84NY4WW4bU8CFBB6mWWIfHGsi2hsSfVBKbfemLjKvh0zFHmGLwkOhChePJ2bTKsrk97LOcp%2BAFn85aBKAibWLoI7xGMbS2ESxv56dKiqt%2BHsSVRSte7jl5h59uo3o68DopkNtF89OD%2FyFA5Y1Q1E9DItliG%2FNuLxTAfkvq%2B%2BE%2B4EMzPjFKqJkyDCDtajDBjqkAY6dSTIZaDAydIitsKLjJ6DIBEOif9d9I%2BBlpJcyVzJkMoMCPjfjuGWoTIEx%2BDPc5vrQOjjxaAOWWk4oQN98MPyyR1TWRPU%2BnASSxgF94tqynCM9I9rhiksBmbyvPrrhPqiqOzJXwq4hx2Vr88FIHc0pMymk%2F%2B3XJPOiRUe%2F0LH3ebQ9ha0Gzvh5v49RzHRUay1BHZb6EoUmzpM56qxYHVL2hNaS&X-Amz-Signature=bb1487e205d2c8d20041f2ebb238d72aa09d5b73d3f882f09cdd0849e6737536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXJFCIB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCD78mwmbwNdK0J8vtwa8axJPBSexnhuTT%2FEgn2fUmh6wIhAO5nxKT6Rv%2BMyJfPDj1r9EAAGI0eaeQQkessODk708c%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igzxj%2BOZ%2F3COJPRnMvIq3AMPWZlFHqJDoKvSLdu5LtGQCNZnC79PtHHmUNPptJ5UlZhtPiZhLkVAjEjL1QLxsGxegfcK0u6J6%2BnrkT2cUffBLKWLyJ%2BwWKPzvcoo2Wb4KqZKGkPcCDEvQQ0ktk4gIsliDdz5jYu5LOPcK2gh0H%2F2ij%2B5AKtNqJKB2w%2B6CER0rqr1Zrdv17R2PHSIQbt7rTGQUjquDmTA0R8Fc5FHeaAcCFPiaRerKWjcjQO1J4aNU4p0Lk0C5Q2MtCJkX%2FuionpPu0MrfgaZDcnISzOhr60enJzQGO7rg1nZRZIHKDl0tcc%2BxylucbG%2FCpbg1rKOR4drXnsJDhEKZ%2Fi7LBr6jgycWAkttWspSN8%2Bh98kOJuMYUisVO9eG%2Br8nQHfV%2BGbKxeUGc5LMZy%2FqDG9Edb9ajWEvmNEGOep84UwnQHfGqvAGuwBsbUxeyf3eZEm3JJKrsy5vTf84NY4WW4bU8CFBB6mWWIfHGsi2hsSfVBKbfemLjKvh0zFHmGLwkOhChePJ2bTKsrk97LOcp%2BAFn85aBKAibWLoI7xGMbS2ESxv56dKiqt%2BHsSVRSte7jl5h59uo3o68DopkNtF89OD%2FyFA5Y1Q1E9DItliG%2FNuLxTAfkvq%2B%2BE%2B4EMzPjFKqJkyDCDtajDBjqkAY6dSTIZaDAydIitsKLjJ6DIBEOif9d9I%2BBlpJcyVzJkMoMCPjfjuGWoTIEx%2BDPc5vrQOjjxaAOWWk4oQN98MPyyR1TWRPU%2BnASSxgF94tqynCM9I9rhiksBmbyvPrrhPqiqOzJXwq4hx2Vr88FIHc0pMymk%2F%2B3XJPOiRUe%2F0LH3ebQ9ha0Gzvh5v49RzHRUay1BHZb6EoUmzpM56qxYHVL2hNaS&X-Amz-Signature=e305112b921a8f14a620e22f8a2a3e87be38677ba544fde3536ffade6d586ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXJFCIB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCD78mwmbwNdK0J8vtwa8axJPBSexnhuTT%2FEgn2fUmh6wIhAO5nxKT6Rv%2BMyJfPDj1r9EAAGI0eaeQQkessODk708c%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igzxj%2BOZ%2F3COJPRnMvIq3AMPWZlFHqJDoKvSLdu5LtGQCNZnC79PtHHmUNPptJ5UlZhtPiZhLkVAjEjL1QLxsGxegfcK0u6J6%2BnrkT2cUffBLKWLyJ%2BwWKPzvcoo2Wb4KqZKGkPcCDEvQQ0ktk4gIsliDdz5jYu5LOPcK2gh0H%2F2ij%2B5AKtNqJKB2w%2B6CER0rqr1Zrdv17R2PHSIQbt7rTGQUjquDmTA0R8Fc5FHeaAcCFPiaRerKWjcjQO1J4aNU4p0Lk0C5Q2MtCJkX%2FuionpPu0MrfgaZDcnISzOhr60enJzQGO7rg1nZRZIHKDl0tcc%2BxylucbG%2FCpbg1rKOR4drXnsJDhEKZ%2Fi7LBr6jgycWAkttWspSN8%2Bh98kOJuMYUisVO9eG%2Br8nQHfV%2BGbKxeUGc5LMZy%2FqDG9Edb9ajWEvmNEGOep84UwnQHfGqvAGuwBsbUxeyf3eZEm3JJKrsy5vTf84NY4WW4bU8CFBB6mWWIfHGsi2hsSfVBKbfemLjKvh0zFHmGLwkOhChePJ2bTKsrk97LOcp%2BAFn85aBKAibWLoI7xGMbS2ESxv56dKiqt%2BHsSVRSte7jl5h59uo3o68DopkNtF89OD%2FyFA5Y1Q1E9DItliG%2FNuLxTAfkvq%2B%2BE%2B4EMzPjFKqJkyDCDtajDBjqkAY6dSTIZaDAydIitsKLjJ6DIBEOif9d9I%2BBlpJcyVzJkMoMCPjfjuGWoTIEx%2BDPc5vrQOjjxaAOWWk4oQN98MPyyR1TWRPU%2BnASSxgF94tqynCM9I9rhiksBmbyvPrrhPqiqOzJXwq4hx2Vr88FIHc0pMymk%2F%2B3XJPOiRUe%2F0LH3ebQ9ha0Gzvh5v49RzHRUay1BHZb6EoUmzpM56qxYHVL2hNaS&X-Amz-Signature=fad6f6b4014f59c282cc736c4b5453d9304d7cf72f8296991a4ae90754b183e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXJFCIB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCD78mwmbwNdK0J8vtwa8axJPBSexnhuTT%2FEgn2fUmh6wIhAO5nxKT6Rv%2BMyJfPDj1r9EAAGI0eaeQQkessODk708c%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igzxj%2BOZ%2F3COJPRnMvIq3AMPWZlFHqJDoKvSLdu5LtGQCNZnC79PtHHmUNPptJ5UlZhtPiZhLkVAjEjL1QLxsGxegfcK0u6J6%2BnrkT2cUffBLKWLyJ%2BwWKPzvcoo2Wb4KqZKGkPcCDEvQQ0ktk4gIsliDdz5jYu5LOPcK2gh0H%2F2ij%2B5AKtNqJKB2w%2B6CER0rqr1Zrdv17R2PHSIQbt7rTGQUjquDmTA0R8Fc5FHeaAcCFPiaRerKWjcjQO1J4aNU4p0Lk0C5Q2MtCJkX%2FuionpPu0MrfgaZDcnISzOhr60enJzQGO7rg1nZRZIHKDl0tcc%2BxylucbG%2FCpbg1rKOR4drXnsJDhEKZ%2Fi7LBr6jgycWAkttWspSN8%2Bh98kOJuMYUisVO9eG%2Br8nQHfV%2BGbKxeUGc5LMZy%2FqDG9Edb9ajWEvmNEGOep84UwnQHfGqvAGuwBsbUxeyf3eZEm3JJKrsy5vTf84NY4WW4bU8CFBB6mWWIfHGsi2hsSfVBKbfemLjKvh0zFHmGLwkOhChePJ2bTKsrk97LOcp%2BAFn85aBKAibWLoI7xGMbS2ESxv56dKiqt%2BHsSVRSte7jl5h59uo3o68DopkNtF89OD%2FyFA5Y1Q1E9DItliG%2FNuLxTAfkvq%2B%2BE%2B4EMzPjFKqJkyDCDtajDBjqkAY6dSTIZaDAydIitsKLjJ6DIBEOif9d9I%2BBlpJcyVzJkMoMCPjfjuGWoTIEx%2BDPc5vrQOjjxaAOWWk4oQN98MPyyR1TWRPU%2BnASSxgF94tqynCM9I9rhiksBmbyvPrrhPqiqOzJXwq4hx2Vr88FIHc0pMymk%2F%2B3XJPOiRUe%2F0LH3ebQ9ha0Gzvh5v49RzHRUay1BHZb6EoUmzpM56qxYHVL2hNaS&X-Amz-Signature=0f348e5243b5122e01e7ecf6420af5f644c920115588f9d6602736e41ea629e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXJFCIB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCD78mwmbwNdK0J8vtwa8axJPBSexnhuTT%2FEgn2fUmh6wIhAO5nxKT6Rv%2BMyJfPDj1r9EAAGI0eaeQQkessODk708c%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igzxj%2BOZ%2F3COJPRnMvIq3AMPWZlFHqJDoKvSLdu5LtGQCNZnC79PtHHmUNPptJ5UlZhtPiZhLkVAjEjL1QLxsGxegfcK0u6J6%2BnrkT2cUffBLKWLyJ%2BwWKPzvcoo2Wb4KqZKGkPcCDEvQQ0ktk4gIsliDdz5jYu5LOPcK2gh0H%2F2ij%2B5AKtNqJKB2w%2B6CER0rqr1Zrdv17R2PHSIQbt7rTGQUjquDmTA0R8Fc5FHeaAcCFPiaRerKWjcjQO1J4aNU4p0Lk0C5Q2MtCJkX%2FuionpPu0MrfgaZDcnISzOhr60enJzQGO7rg1nZRZIHKDl0tcc%2BxylucbG%2FCpbg1rKOR4drXnsJDhEKZ%2Fi7LBr6jgycWAkttWspSN8%2Bh98kOJuMYUisVO9eG%2Br8nQHfV%2BGbKxeUGc5LMZy%2FqDG9Edb9ajWEvmNEGOep84UwnQHfGqvAGuwBsbUxeyf3eZEm3JJKrsy5vTf84NY4WW4bU8CFBB6mWWIfHGsi2hsSfVBKbfemLjKvh0zFHmGLwkOhChePJ2bTKsrk97LOcp%2BAFn85aBKAibWLoI7xGMbS2ESxv56dKiqt%2BHsSVRSte7jl5h59uo3o68DopkNtF89OD%2FyFA5Y1Q1E9DItliG%2FNuLxTAfkvq%2B%2BE%2B4EMzPjFKqJkyDCDtajDBjqkAY6dSTIZaDAydIitsKLjJ6DIBEOif9d9I%2BBlpJcyVzJkMoMCPjfjuGWoTIEx%2BDPc5vrQOjjxaAOWWk4oQN98MPyyR1TWRPU%2BnASSxgF94tqynCM9I9rhiksBmbyvPrrhPqiqOzJXwq4hx2Vr88FIHc0pMymk%2F%2B3XJPOiRUe%2F0LH3ebQ9ha0Gzvh5v49RzHRUay1BHZb6EoUmzpM56qxYHVL2hNaS&X-Amz-Signature=cf96ede1b0bfee75605378759235834440a7d2316572278455af596a8c3808f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXJFCIB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCD78mwmbwNdK0J8vtwa8axJPBSexnhuTT%2FEgn2fUmh6wIhAO5nxKT6Rv%2BMyJfPDj1r9EAAGI0eaeQQkessODk708c%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igzxj%2BOZ%2F3COJPRnMvIq3AMPWZlFHqJDoKvSLdu5LtGQCNZnC79PtHHmUNPptJ5UlZhtPiZhLkVAjEjL1QLxsGxegfcK0u6J6%2BnrkT2cUffBLKWLyJ%2BwWKPzvcoo2Wb4KqZKGkPcCDEvQQ0ktk4gIsliDdz5jYu5LOPcK2gh0H%2F2ij%2B5AKtNqJKB2w%2B6CER0rqr1Zrdv17R2PHSIQbt7rTGQUjquDmTA0R8Fc5FHeaAcCFPiaRerKWjcjQO1J4aNU4p0Lk0C5Q2MtCJkX%2FuionpPu0MrfgaZDcnISzOhr60enJzQGO7rg1nZRZIHKDl0tcc%2BxylucbG%2FCpbg1rKOR4drXnsJDhEKZ%2Fi7LBr6jgycWAkttWspSN8%2Bh98kOJuMYUisVO9eG%2Br8nQHfV%2BGbKxeUGc5LMZy%2FqDG9Edb9ajWEvmNEGOep84UwnQHfGqvAGuwBsbUxeyf3eZEm3JJKrsy5vTf84NY4WW4bU8CFBB6mWWIfHGsi2hsSfVBKbfemLjKvh0zFHmGLwkOhChePJ2bTKsrk97LOcp%2BAFn85aBKAibWLoI7xGMbS2ESxv56dKiqt%2BHsSVRSte7jl5h59uo3o68DopkNtF89OD%2FyFA5Y1Q1E9DItliG%2FNuLxTAfkvq%2B%2BE%2B4EMzPjFKqJkyDCDtajDBjqkAY6dSTIZaDAydIitsKLjJ6DIBEOif9d9I%2BBlpJcyVzJkMoMCPjfjuGWoTIEx%2BDPc5vrQOjjxaAOWWk4oQN98MPyyR1TWRPU%2BnASSxgF94tqynCM9I9rhiksBmbyvPrrhPqiqOzJXwq4hx2Vr88FIHc0pMymk%2F%2B3XJPOiRUe%2F0LH3ebQ9ha0Gzvh5v49RzHRUay1BHZb6EoUmzpM56qxYHVL2hNaS&X-Amz-Signature=63ab1f245ef4b40acac40aa17e5364b9061f8c02ea9ac36aafbdff278e917882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXJFCIB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCD78mwmbwNdK0J8vtwa8axJPBSexnhuTT%2FEgn2fUmh6wIhAO5nxKT6Rv%2BMyJfPDj1r9EAAGI0eaeQQkessODk708c%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igzxj%2BOZ%2F3COJPRnMvIq3AMPWZlFHqJDoKvSLdu5LtGQCNZnC79PtHHmUNPptJ5UlZhtPiZhLkVAjEjL1QLxsGxegfcK0u6J6%2BnrkT2cUffBLKWLyJ%2BwWKPzvcoo2Wb4KqZKGkPcCDEvQQ0ktk4gIsliDdz5jYu5LOPcK2gh0H%2F2ij%2B5AKtNqJKB2w%2B6CER0rqr1Zrdv17R2PHSIQbt7rTGQUjquDmTA0R8Fc5FHeaAcCFPiaRerKWjcjQO1J4aNU4p0Lk0C5Q2MtCJkX%2FuionpPu0MrfgaZDcnISzOhr60enJzQGO7rg1nZRZIHKDl0tcc%2BxylucbG%2FCpbg1rKOR4drXnsJDhEKZ%2Fi7LBr6jgycWAkttWspSN8%2Bh98kOJuMYUisVO9eG%2Br8nQHfV%2BGbKxeUGc5LMZy%2FqDG9Edb9ajWEvmNEGOep84UwnQHfGqvAGuwBsbUxeyf3eZEm3JJKrsy5vTf84NY4WW4bU8CFBB6mWWIfHGsi2hsSfVBKbfemLjKvh0zFHmGLwkOhChePJ2bTKsrk97LOcp%2BAFn85aBKAibWLoI7xGMbS2ESxv56dKiqt%2BHsSVRSte7jl5h59uo3o68DopkNtF89OD%2FyFA5Y1Q1E9DItliG%2FNuLxTAfkvq%2B%2BE%2B4EMzPjFKqJkyDCDtajDBjqkAY6dSTIZaDAydIitsKLjJ6DIBEOif9d9I%2BBlpJcyVzJkMoMCPjfjuGWoTIEx%2BDPc5vrQOjjxaAOWWk4oQN98MPyyR1TWRPU%2BnASSxgF94tqynCM9I9rhiksBmbyvPrrhPqiqOzJXwq4hx2Vr88FIHc0pMymk%2F%2B3XJPOiRUe%2F0LH3ebQ9ha0Gzvh5v49RzHRUay1BHZb6EoUmzpM56qxYHVL2hNaS&X-Amz-Signature=bead8b3d6843eda8fc65311ded3164dbcb12f4a7309103e23e159c9f294fa5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXJFCIB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCD78mwmbwNdK0J8vtwa8axJPBSexnhuTT%2FEgn2fUmh6wIhAO5nxKT6Rv%2BMyJfPDj1r9EAAGI0eaeQQkessODk708c%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igzxj%2BOZ%2F3COJPRnMvIq3AMPWZlFHqJDoKvSLdu5LtGQCNZnC79PtHHmUNPptJ5UlZhtPiZhLkVAjEjL1QLxsGxegfcK0u6J6%2BnrkT2cUffBLKWLyJ%2BwWKPzvcoo2Wb4KqZKGkPcCDEvQQ0ktk4gIsliDdz5jYu5LOPcK2gh0H%2F2ij%2B5AKtNqJKB2w%2B6CER0rqr1Zrdv17R2PHSIQbt7rTGQUjquDmTA0R8Fc5FHeaAcCFPiaRerKWjcjQO1J4aNU4p0Lk0C5Q2MtCJkX%2FuionpPu0MrfgaZDcnISzOhr60enJzQGO7rg1nZRZIHKDl0tcc%2BxylucbG%2FCpbg1rKOR4drXnsJDhEKZ%2Fi7LBr6jgycWAkttWspSN8%2Bh98kOJuMYUisVO9eG%2Br8nQHfV%2BGbKxeUGc5LMZy%2FqDG9Edb9ajWEvmNEGOep84UwnQHfGqvAGuwBsbUxeyf3eZEm3JJKrsy5vTf84NY4WW4bU8CFBB6mWWIfHGsi2hsSfVBKbfemLjKvh0zFHmGLwkOhChePJ2bTKsrk97LOcp%2BAFn85aBKAibWLoI7xGMbS2ESxv56dKiqt%2BHsSVRSte7jl5h59uo3o68DopkNtF89OD%2FyFA5Y1Q1E9DItliG%2FNuLxTAfkvq%2B%2BE%2B4EMzPjFKqJkyDCDtajDBjqkAY6dSTIZaDAydIitsKLjJ6DIBEOif9d9I%2BBlpJcyVzJkMoMCPjfjuGWoTIEx%2BDPc5vrQOjjxaAOWWk4oQN98MPyyR1TWRPU%2BnASSxgF94tqynCM9I9rhiksBmbyvPrrhPqiqOzJXwq4hx2Vr88FIHc0pMymk%2F%2B3XJPOiRUe%2F0LH3ebQ9ha0Gzvh5v49RzHRUay1BHZb6EoUmzpM56qxYHVL2hNaS&X-Amz-Signature=c32969a43c8b3bc3652788b99beba57d4bd16351bfde5f8ce6135cf493aadae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
