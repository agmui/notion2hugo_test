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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4X2OKQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCG%2Ber0lS1nGuTRfA%2FU3e%2FPM18YDCmao72A2cBQmZ4NMwIhAMfUPYfnYAzfrrZKwgpfgFVmQ3pz6K%2BaxbYwADcjjvxWKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUvAPvOLRwHRv2NZkq3ANNUv3TPLqneD5%2BlKlkLnB%2Blo3aEvVh8xZJBC%2Ba6j%2BD2xS2l9kuNoQMt4pHB8x4lAKXIJiHfd6L230Y20Kn%2FbATAtL7eYeNtFskzSeZ2RyBN3vjtMHMJOkkH7j17HhkjAP4azCHYW0BLmllhRHuQhbz44cWi9GVcWaVB4gpsJ1KDCRoGJP7Akff1fRjfgtPYND3iBKAuk5WoW7yNFLOdCoLKH3qOh%2BdNp9AbiKlhNKvzvv7GKSqz2sUIBpp1xLjoiEeLigSuPoeghIYrbQVweO5zLq%2FQZ7kwI1NSvmR3HDvfx%2FT1SOqEep4Z2iH4WOIPWT9VVraT7olhreOiqZavVFzWfeNp5v7w0nmR3cvE%2FEKB3OM7pmhE04hZr6LJ7dbW1eTtsjHe0lhYHixtOFXbaUlWZoVlp9EYswU69%2F9HUhKXSAm83HeqmxBqkopv4did6MYO1sv4I0pVEruA3Vp%2BPwWOZFn8YtLhmNGZI0tzU8vwrvfM%2BOiX0f98ipfqjzXDrQR2G2RjEGW2Au3LltUBVWaeVbedwk0irADaBllUTzhWWSXxWc1GtaEpx6izvEpNDaJPtcZIVwiNEvTAglATpt%2FLdE8CWjQA8R75QoJGaDkr%2FNrvzWTqm5%2Fbg2ykjDhmafABjqkAYt5lOnJcNaf%2F8oPRQPHDMYo8GlVYTvqDbVxzbpijAolqz1%2FxYB24nsnWWbg%2BHVRU50yyi0Lln0lIcO8eOymZagMcHGSvRx4nUO%2Bvy9B2CWulDch06s75HQ0KK2f0gute95aqbUQTFpiDNBwheZSvfrG1PY9s2T7fZ6gXd0wltBTRAK5BTzZ9W%2B2dwMCxl3LtWWXj2f1mVP7OlTzhhyd0C7OH%2Fky&X-Amz-Signature=3ac0b477b23402ecc4f34817d68f37ca21e419b4337b34d71decbcbd9ffb7ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4X2OKQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCG%2Ber0lS1nGuTRfA%2FU3e%2FPM18YDCmao72A2cBQmZ4NMwIhAMfUPYfnYAzfrrZKwgpfgFVmQ3pz6K%2BaxbYwADcjjvxWKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUvAPvOLRwHRv2NZkq3ANNUv3TPLqneD5%2BlKlkLnB%2Blo3aEvVh8xZJBC%2Ba6j%2BD2xS2l9kuNoQMt4pHB8x4lAKXIJiHfd6L230Y20Kn%2FbATAtL7eYeNtFskzSeZ2RyBN3vjtMHMJOkkH7j17HhkjAP4azCHYW0BLmllhRHuQhbz44cWi9GVcWaVB4gpsJ1KDCRoGJP7Akff1fRjfgtPYND3iBKAuk5WoW7yNFLOdCoLKH3qOh%2BdNp9AbiKlhNKvzvv7GKSqz2sUIBpp1xLjoiEeLigSuPoeghIYrbQVweO5zLq%2FQZ7kwI1NSvmR3HDvfx%2FT1SOqEep4Z2iH4WOIPWT9VVraT7olhreOiqZavVFzWfeNp5v7w0nmR3cvE%2FEKB3OM7pmhE04hZr6LJ7dbW1eTtsjHe0lhYHixtOFXbaUlWZoVlp9EYswU69%2F9HUhKXSAm83HeqmxBqkopv4did6MYO1sv4I0pVEruA3Vp%2BPwWOZFn8YtLhmNGZI0tzU8vwrvfM%2BOiX0f98ipfqjzXDrQR2G2RjEGW2Au3LltUBVWaeVbedwk0irADaBllUTzhWWSXxWc1GtaEpx6izvEpNDaJPtcZIVwiNEvTAglATpt%2FLdE8CWjQA8R75QoJGaDkr%2FNrvzWTqm5%2Fbg2ykjDhmafABjqkAYt5lOnJcNaf%2F8oPRQPHDMYo8GlVYTvqDbVxzbpijAolqz1%2FxYB24nsnWWbg%2BHVRU50yyi0Lln0lIcO8eOymZagMcHGSvRx4nUO%2Bvy9B2CWulDch06s75HQ0KK2f0gute95aqbUQTFpiDNBwheZSvfrG1PY9s2T7fZ6gXd0wltBTRAK5BTzZ9W%2B2dwMCxl3LtWWXj2f1mVP7OlTzhhyd0C7OH%2Fky&X-Amz-Signature=8682d3c6542f41b05963e833f84398bd9a8e56bcceb282668880fe0fa870d452&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4X2OKQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCG%2Ber0lS1nGuTRfA%2FU3e%2FPM18YDCmao72A2cBQmZ4NMwIhAMfUPYfnYAzfrrZKwgpfgFVmQ3pz6K%2BaxbYwADcjjvxWKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUvAPvOLRwHRv2NZkq3ANNUv3TPLqneD5%2BlKlkLnB%2Blo3aEvVh8xZJBC%2Ba6j%2BD2xS2l9kuNoQMt4pHB8x4lAKXIJiHfd6L230Y20Kn%2FbATAtL7eYeNtFskzSeZ2RyBN3vjtMHMJOkkH7j17HhkjAP4azCHYW0BLmllhRHuQhbz44cWi9GVcWaVB4gpsJ1KDCRoGJP7Akff1fRjfgtPYND3iBKAuk5WoW7yNFLOdCoLKH3qOh%2BdNp9AbiKlhNKvzvv7GKSqz2sUIBpp1xLjoiEeLigSuPoeghIYrbQVweO5zLq%2FQZ7kwI1NSvmR3HDvfx%2FT1SOqEep4Z2iH4WOIPWT9VVraT7olhreOiqZavVFzWfeNp5v7w0nmR3cvE%2FEKB3OM7pmhE04hZr6LJ7dbW1eTtsjHe0lhYHixtOFXbaUlWZoVlp9EYswU69%2F9HUhKXSAm83HeqmxBqkopv4did6MYO1sv4I0pVEruA3Vp%2BPwWOZFn8YtLhmNGZI0tzU8vwrvfM%2BOiX0f98ipfqjzXDrQR2G2RjEGW2Au3LltUBVWaeVbedwk0irADaBllUTzhWWSXxWc1GtaEpx6izvEpNDaJPtcZIVwiNEvTAglATpt%2FLdE8CWjQA8R75QoJGaDkr%2FNrvzWTqm5%2Fbg2ykjDhmafABjqkAYt5lOnJcNaf%2F8oPRQPHDMYo8GlVYTvqDbVxzbpijAolqz1%2FxYB24nsnWWbg%2BHVRU50yyi0Lln0lIcO8eOymZagMcHGSvRx4nUO%2Bvy9B2CWulDch06s75HQ0KK2f0gute95aqbUQTFpiDNBwheZSvfrG1PY9s2T7fZ6gXd0wltBTRAK5BTzZ9W%2B2dwMCxl3LtWWXj2f1mVP7OlTzhhyd0C7OH%2Fky&X-Amz-Signature=842a6e7f92921e07c3bdd4845ccce9795dcb7120260cf0bb22228b902f78c398&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4X2OKQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCG%2Ber0lS1nGuTRfA%2FU3e%2FPM18YDCmao72A2cBQmZ4NMwIhAMfUPYfnYAzfrrZKwgpfgFVmQ3pz6K%2BaxbYwADcjjvxWKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUvAPvOLRwHRv2NZkq3ANNUv3TPLqneD5%2BlKlkLnB%2Blo3aEvVh8xZJBC%2Ba6j%2BD2xS2l9kuNoQMt4pHB8x4lAKXIJiHfd6L230Y20Kn%2FbATAtL7eYeNtFskzSeZ2RyBN3vjtMHMJOkkH7j17HhkjAP4azCHYW0BLmllhRHuQhbz44cWi9GVcWaVB4gpsJ1KDCRoGJP7Akff1fRjfgtPYND3iBKAuk5WoW7yNFLOdCoLKH3qOh%2BdNp9AbiKlhNKvzvv7GKSqz2sUIBpp1xLjoiEeLigSuPoeghIYrbQVweO5zLq%2FQZ7kwI1NSvmR3HDvfx%2FT1SOqEep4Z2iH4WOIPWT9VVraT7olhreOiqZavVFzWfeNp5v7w0nmR3cvE%2FEKB3OM7pmhE04hZr6LJ7dbW1eTtsjHe0lhYHixtOFXbaUlWZoVlp9EYswU69%2F9HUhKXSAm83HeqmxBqkopv4did6MYO1sv4I0pVEruA3Vp%2BPwWOZFn8YtLhmNGZI0tzU8vwrvfM%2BOiX0f98ipfqjzXDrQR2G2RjEGW2Au3LltUBVWaeVbedwk0irADaBllUTzhWWSXxWc1GtaEpx6izvEpNDaJPtcZIVwiNEvTAglATpt%2FLdE8CWjQA8R75QoJGaDkr%2FNrvzWTqm5%2Fbg2ykjDhmafABjqkAYt5lOnJcNaf%2F8oPRQPHDMYo8GlVYTvqDbVxzbpijAolqz1%2FxYB24nsnWWbg%2BHVRU50yyi0Lln0lIcO8eOymZagMcHGSvRx4nUO%2Bvy9B2CWulDch06s75HQ0KK2f0gute95aqbUQTFpiDNBwheZSvfrG1PY9s2T7fZ6gXd0wltBTRAK5BTzZ9W%2B2dwMCxl3LtWWXj2f1mVP7OlTzhhyd0C7OH%2Fky&X-Amz-Signature=4051660ccb9daebe3032e329846c24d8da81e77f8ba57f3f15d5523b9b651fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4X2OKQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCG%2Ber0lS1nGuTRfA%2FU3e%2FPM18YDCmao72A2cBQmZ4NMwIhAMfUPYfnYAzfrrZKwgpfgFVmQ3pz6K%2BaxbYwADcjjvxWKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUvAPvOLRwHRv2NZkq3ANNUv3TPLqneD5%2BlKlkLnB%2Blo3aEvVh8xZJBC%2Ba6j%2BD2xS2l9kuNoQMt4pHB8x4lAKXIJiHfd6L230Y20Kn%2FbATAtL7eYeNtFskzSeZ2RyBN3vjtMHMJOkkH7j17HhkjAP4azCHYW0BLmllhRHuQhbz44cWi9GVcWaVB4gpsJ1KDCRoGJP7Akff1fRjfgtPYND3iBKAuk5WoW7yNFLOdCoLKH3qOh%2BdNp9AbiKlhNKvzvv7GKSqz2sUIBpp1xLjoiEeLigSuPoeghIYrbQVweO5zLq%2FQZ7kwI1NSvmR3HDvfx%2FT1SOqEep4Z2iH4WOIPWT9VVraT7olhreOiqZavVFzWfeNp5v7w0nmR3cvE%2FEKB3OM7pmhE04hZr6LJ7dbW1eTtsjHe0lhYHixtOFXbaUlWZoVlp9EYswU69%2F9HUhKXSAm83HeqmxBqkopv4did6MYO1sv4I0pVEruA3Vp%2BPwWOZFn8YtLhmNGZI0tzU8vwrvfM%2BOiX0f98ipfqjzXDrQR2G2RjEGW2Au3LltUBVWaeVbedwk0irADaBllUTzhWWSXxWc1GtaEpx6izvEpNDaJPtcZIVwiNEvTAglATpt%2FLdE8CWjQA8R75QoJGaDkr%2FNrvzWTqm5%2Fbg2ykjDhmafABjqkAYt5lOnJcNaf%2F8oPRQPHDMYo8GlVYTvqDbVxzbpijAolqz1%2FxYB24nsnWWbg%2BHVRU50yyi0Lln0lIcO8eOymZagMcHGSvRx4nUO%2Bvy9B2CWulDch06s75HQ0KK2f0gute95aqbUQTFpiDNBwheZSvfrG1PY9s2T7fZ6gXd0wltBTRAK5BTzZ9W%2B2dwMCxl3LtWWXj2f1mVP7OlTzhhyd0C7OH%2Fky&X-Amz-Signature=9dea2bea8735fce083b6f206f0d4b76ce8007417b98fbb2e23370320cc836a45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4X2OKQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCG%2Ber0lS1nGuTRfA%2FU3e%2FPM18YDCmao72A2cBQmZ4NMwIhAMfUPYfnYAzfrrZKwgpfgFVmQ3pz6K%2BaxbYwADcjjvxWKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUvAPvOLRwHRv2NZkq3ANNUv3TPLqneD5%2BlKlkLnB%2Blo3aEvVh8xZJBC%2Ba6j%2BD2xS2l9kuNoQMt4pHB8x4lAKXIJiHfd6L230Y20Kn%2FbATAtL7eYeNtFskzSeZ2RyBN3vjtMHMJOkkH7j17HhkjAP4azCHYW0BLmllhRHuQhbz44cWi9GVcWaVB4gpsJ1KDCRoGJP7Akff1fRjfgtPYND3iBKAuk5WoW7yNFLOdCoLKH3qOh%2BdNp9AbiKlhNKvzvv7GKSqz2sUIBpp1xLjoiEeLigSuPoeghIYrbQVweO5zLq%2FQZ7kwI1NSvmR3HDvfx%2FT1SOqEep4Z2iH4WOIPWT9VVraT7olhreOiqZavVFzWfeNp5v7w0nmR3cvE%2FEKB3OM7pmhE04hZr6LJ7dbW1eTtsjHe0lhYHixtOFXbaUlWZoVlp9EYswU69%2F9HUhKXSAm83HeqmxBqkopv4did6MYO1sv4I0pVEruA3Vp%2BPwWOZFn8YtLhmNGZI0tzU8vwrvfM%2BOiX0f98ipfqjzXDrQR2G2RjEGW2Au3LltUBVWaeVbedwk0irADaBllUTzhWWSXxWc1GtaEpx6izvEpNDaJPtcZIVwiNEvTAglATpt%2FLdE8CWjQA8R75QoJGaDkr%2FNrvzWTqm5%2Fbg2ykjDhmafABjqkAYt5lOnJcNaf%2F8oPRQPHDMYo8GlVYTvqDbVxzbpijAolqz1%2FxYB24nsnWWbg%2BHVRU50yyi0Lln0lIcO8eOymZagMcHGSvRx4nUO%2Bvy9B2CWulDch06s75HQ0KK2f0gute95aqbUQTFpiDNBwheZSvfrG1PY9s2T7fZ6gXd0wltBTRAK5BTzZ9W%2B2dwMCxl3LtWWXj2f1mVP7OlTzhhyd0C7OH%2Fky&X-Amz-Signature=9db63e70582d03a3263c6b9e4275b4ba1a91ab99f31a3336cc5b450b4b588d06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4X2OKQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCG%2Ber0lS1nGuTRfA%2FU3e%2FPM18YDCmao72A2cBQmZ4NMwIhAMfUPYfnYAzfrrZKwgpfgFVmQ3pz6K%2BaxbYwADcjjvxWKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUvAPvOLRwHRv2NZkq3ANNUv3TPLqneD5%2BlKlkLnB%2Blo3aEvVh8xZJBC%2Ba6j%2BD2xS2l9kuNoQMt4pHB8x4lAKXIJiHfd6L230Y20Kn%2FbATAtL7eYeNtFskzSeZ2RyBN3vjtMHMJOkkH7j17HhkjAP4azCHYW0BLmllhRHuQhbz44cWi9GVcWaVB4gpsJ1KDCRoGJP7Akff1fRjfgtPYND3iBKAuk5WoW7yNFLOdCoLKH3qOh%2BdNp9AbiKlhNKvzvv7GKSqz2sUIBpp1xLjoiEeLigSuPoeghIYrbQVweO5zLq%2FQZ7kwI1NSvmR3HDvfx%2FT1SOqEep4Z2iH4WOIPWT9VVraT7olhreOiqZavVFzWfeNp5v7w0nmR3cvE%2FEKB3OM7pmhE04hZr6LJ7dbW1eTtsjHe0lhYHixtOFXbaUlWZoVlp9EYswU69%2F9HUhKXSAm83HeqmxBqkopv4did6MYO1sv4I0pVEruA3Vp%2BPwWOZFn8YtLhmNGZI0tzU8vwrvfM%2BOiX0f98ipfqjzXDrQR2G2RjEGW2Au3LltUBVWaeVbedwk0irADaBllUTzhWWSXxWc1GtaEpx6izvEpNDaJPtcZIVwiNEvTAglATpt%2FLdE8CWjQA8R75QoJGaDkr%2FNrvzWTqm5%2Fbg2ykjDhmafABjqkAYt5lOnJcNaf%2F8oPRQPHDMYo8GlVYTvqDbVxzbpijAolqz1%2FxYB24nsnWWbg%2BHVRU50yyi0Lln0lIcO8eOymZagMcHGSvRx4nUO%2Bvy9B2CWulDch06s75HQ0KK2f0gute95aqbUQTFpiDNBwheZSvfrG1PY9s2T7fZ6gXd0wltBTRAK5BTzZ9W%2B2dwMCxl3LtWWXj2f1mVP7OlTzhhyd0C7OH%2Fky&X-Amz-Signature=f5653dd477ecb905f4b6c3ffda38aa3ed66d37cd2e1409c0c481c504641b59d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4X2OKQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCG%2Ber0lS1nGuTRfA%2FU3e%2FPM18YDCmao72A2cBQmZ4NMwIhAMfUPYfnYAzfrrZKwgpfgFVmQ3pz6K%2BaxbYwADcjjvxWKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUvAPvOLRwHRv2NZkq3ANNUv3TPLqneD5%2BlKlkLnB%2Blo3aEvVh8xZJBC%2Ba6j%2BD2xS2l9kuNoQMt4pHB8x4lAKXIJiHfd6L230Y20Kn%2FbATAtL7eYeNtFskzSeZ2RyBN3vjtMHMJOkkH7j17HhkjAP4azCHYW0BLmllhRHuQhbz44cWi9GVcWaVB4gpsJ1KDCRoGJP7Akff1fRjfgtPYND3iBKAuk5WoW7yNFLOdCoLKH3qOh%2BdNp9AbiKlhNKvzvv7GKSqz2sUIBpp1xLjoiEeLigSuPoeghIYrbQVweO5zLq%2FQZ7kwI1NSvmR3HDvfx%2FT1SOqEep4Z2iH4WOIPWT9VVraT7olhreOiqZavVFzWfeNp5v7w0nmR3cvE%2FEKB3OM7pmhE04hZr6LJ7dbW1eTtsjHe0lhYHixtOFXbaUlWZoVlp9EYswU69%2F9HUhKXSAm83HeqmxBqkopv4did6MYO1sv4I0pVEruA3Vp%2BPwWOZFn8YtLhmNGZI0tzU8vwrvfM%2BOiX0f98ipfqjzXDrQR2G2RjEGW2Au3LltUBVWaeVbedwk0irADaBllUTzhWWSXxWc1GtaEpx6izvEpNDaJPtcZIVwiNEvTAglATpt%2FLdE8CWjQA8R75QoJGaDkr%2FNrvzWTqm5%2Fbg2ykjDhmafABjqkAYt5lOnJcNaf%2F8oPRQPHDMYo8GlVYTvqDbVxzbpijAolqz1%2FxYB24nsnWWbg%2BHVRU50yyi0Lln0lIcO8eOymZagMcHGSvRx4nUO%2Bvy9B2CWulDch06s75HQ0KK2f0gute95aqbUQTFpiDNBwheZSvfrG1PY9s2T7fZ6gXd0wltBTRAK5BTzZ9W%2B2dwMCxl3LtWWXj2f1mVP7OlTzhhyd0C7OH%2Fky&X-Amz-Signature=ac0be4cecd431575efa0887c6cf015e8787e5a2de078154842e9e706e08b01a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
