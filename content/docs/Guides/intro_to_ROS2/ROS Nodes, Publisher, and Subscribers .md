---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNWLIEG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RdbeYtK8Y2HSWL%2B7hzmcwJpacDJ0lRnftZ8TUkliewIgMkjykGKuuHEadqpxMp9UdkudZVrpwN4HCD13owr%2BJ9AqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmntVcu%2F5MapFYvdSrcA8LDsR%2BxphvSgkkhqbBSbsbWjYStHq%2BJ%2Bgg%2FZwjOjKIqZKOCdYhKShDBzhCPH5GSX1YtjS9bJtsOgZdKmQB1psudO9wk8mkUNps9OTuThGSGJ0CPL3IyTGVz2eSyytnnWC27MUQokfABoo9jQFu1zob1vJDGPlkWyzuucltEHoJW4isobOh2WgpGO3YAiBty1WQxyPOOkZu6qeAQ7dyjUo1rY7cy%2Bkkppu8Wz86zqfM0i7q1ayXWNsHBLzGryMTfa%2FNyVILPnmvkNGQhlKNzEI7Dy5AkjZpyyGp23cXoeSfWW6rWVrvZtw0pNfYYUqEjKiwTHHqLvixWGI0DXf%2Bqbzxl30i8nZYiPJ1E9TxBx7WR9DH3Ulpb6SkV%2BMLHWRkumL%2BQjUNnZuxGW8A%2FWso0fpU0rd6TNWPcvGnaYHRaZ59gnfS%2BqqWZnfaudS5FqjdcyEqhKvCEDTXp5yiMU9IZWrW%2BCC9f6HqGELBEFhnXTGhG5fWlv3lnfByoaiDhgE0P0wOqM8QafE7Ne4jg5wnvBDNOGFkzUP8W%2F8JCVc8Psc%2FiCbu8ttIg5iJxr6dDw9h1UNnYFdLCin9gaIKNRK8lN2wWlvaH0MEgZDUJgYQn%2FPi2vfe8pqyNKsZreop%2FMNiy38QGOqUBn%2FmD4FRTa%2BkUzJrxCe1SXYnOoLYUI00pnaBAI0dB%2FPg%2Fs9CVLcztwMmcKlPvUGYUWPueO5SSIB56Um4ApdSzTwgChyC%2F1JSd78BlLCBotYKdB8db6s9hZXE1AiwC9L4rVhiZpjxUQ7ZitGdpOhB4o1jcP0Vq9id7EnEX5Uw2NtWKeRG%2FIUPL9LJ0aYC0JobAOK662IVQlpm1wATKH%2FQtxktvkj9a&X-Amz-Signature=9af08e134e8607ae9439e8b957169c5763478c2c0c9ce452c943703bb6662dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNWLIEG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RdbeYtK8Y2HSWL%2B7hzmcwJpacDJ0lRnftZ8TUkliewIgMkjykGKuuHEadqpxMp9UdkudZVrpwN4HCD13owr%2BJ9AqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmntVcu%2F5MapFYvdSrcA8LDsR%2BxphvSgkkhqbBSbsbWjYStHq%2BJ%2Bgg%2FZwjOjKIqZKOCdYhKShDBzhCPH5GSX1YtjS9bJtsOgZdKmQB1psudO9wk8mkUNps9OTuThGSGJ0CPL3IyTGVz2eSyytnnWC27MUQokfABoo9jQFu1zob1vJDGPlkWyzuucltEHoJW4isobOh2WgpGO3YAiBty1WQxyPOOkZu6qeAQ7dyjUo1rY7cy%2Bkkppu8Wz86zqfM0i7q1ayXWNsHBLzGryMTfa%2FNyVILPnmvkNGQhlKNzEI7Dy5AkjZpyyGp23cXoeSfWW6rWVrvZtw0pNfYYUqEjKiwTHHqLvixWGI0DXf%2Bqbzxl30i8nZYiPJ1E9TxBx7WR9DH3Ulpb6SkV%2BMLHWRkumL%2BQjUNnZuxGW8A%2FWso0fpU0rd6TNWPcvGnaYHRaZ59gnfS%2BqqWZnfaudS5FqjdcyEqhKvCEDTXp5yiMU9IZWrW%2BCC9f6HqGELBEFhnXTGhG5fWlv3lnfByoaiDhgE0P0wOqM8QafE7Ne4jg5wnvBDNOGFkzUP8W%2F8JCVc8Psc%2FiCbu8ttIg5iJxr6dDw9h1UNnYFdLCin9gaIKNRK8lN2wWlvaH0MEgZDUJgYQn%2FPi2vfe8pqyNKsZreop%2FMNiy38QGOqUBn%2FmD4FRTa%2BkUzJrxCe1SXYnOoLYUI00pnaBAI0dB%2FPg%2Fs9CVLcztwMmcKlPvUGYUWPueO5SSIB56Um4ApdSzTwgChyC%2F1JSd78BlLCBotYKdB8db6s9hZXE1AiwC9L4rVhiZpjxUQ7ZitGdpOhB4o1jcP0Vq9id7EnEX5Uw2NtWKeRG%2FIUPL9LJ0aYC0JobAOK662IVQlpm1wATKH%2FQtxktvkj9a&X-Amz-Signature=b19279ab7f0b3c161b797582f841afdbbe231d1ebdb5fe6f99f222d35c231b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNWLIEG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RdbeYtK8Y2HSWL%2B7hzmcwJpacDJ0lRnftZ8TUkliewIgMkjykGKuuHEadqpxMp9UdkudZVrpwN4HCD13owr%2BJ9AqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmntVcu%2F5MapFYvdSrcA8LDsR%2BxphvSgkkhqbBSbsbWjYStHq%2BJ%2Bgg%2FZwjOjKIqZKOCdYhKShDBzhCPH5GSX1YtjS9bJtsOgZdKmQB1psudO9wk8mkUNps9OTuThGSGJ0CPL3IyTGVz2eSyytnnWC27MUQokfABoo9jQFu1zob1vJDGPlkWyzuucltEHoJW4isobOh2WgpGO3YAiBty1WQxyPOOkZu6qeAQ7dyjUo1rY7cy%2Bkkppu8Wz86zqfM0i7q1ayXWNsHBLzGryMTfa%2FNyVILPnmvkNGQhlKNzEI7Dy5AkjZpyyGp23cXoeSfWW6rWVrvZtw0pNfYYUqEjKiwTHHqLvixWGI0DXf%2Bqbzxl30i8nZYiPJ1E9TxBx7WR9DH3Ulpb6SkV%2BMLHWRkumL%2BQjUNnZuxGW8A%2FWso0fpU0rd6TNWPcvGnaYHRaZ59gnfS%2BqqWZnfaudS5FqjdcyEqhKvCEDTXp5yiMU9IZWrW%2BCC9f6HqGELBEFhnXTGhG5fWlv3lnfByoaiDhgE0P0wOqM8QafE7Ne4jg5wnvBDNOGFkzUP8W%2F8JCVc8Psc%2FiCbu8ttIg5iJxr6dDw9h1UNnYFdLCin9gaIKNRK8lN2wWlvaH0MEgZDUJgYQn%2FPi2vfe8pqyNKsZreop%2FMNiy38QGOqUBn%2FmD4FRTa%2BkUzJrxCe1SXYnOoLYUI00pnaBAI0dB%2FPg%2Fs9CVLcztwMmcKlPvUGYUWPueO5SSIB56Um4ApdSzTwgChyC%2F1JSd78BlLCBotYKdB8db6s9hZXE1AiwC9L4rVhiZpjxUQ7ZitGdpOhB4o1jcP0Vq9id7EnEX5Uw2NtWKeRG%2FIUPL9LJ0aYC0JobAOK662IVQlpm1wATKH%2FQtxktvkj9a&X-Amz-Signature=5a0176e59a5116ffabf49bb5839add338857789d35f7860785b505da9de3c043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNWLIEG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RdbeYtK8Y2HSWL%2B7hzmcwJpacDJ0lRnftZ8TUkliewIgMkjykGKuuHEadqpxMp9UdkudZVrpwN4HCD13owr%2BJ9AqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmntVcu%2F5MapFYvdSrcA8LDsR%2BxphvSgkkhqbBSbsbWjYStHq%2BJ%2Bgg%2FZwjOjKIqZKOCdYhKShDBzhCPH5GSX1YtjS9bJtsOgZdKmQB1psudO9wk8mkUNps9OTuThGSGJ0CPL3IyTGVz2eSyytnnWC27MUQokfABoo9jQFu1zob1vJDGPlkWyzuucltEHoJW4isobOh2WgpGO3YAiBty1WQxyPOOkZu6qeAQ7dyjUo1rY7cy%2Bkkppu8Wz86zqfM0i7q1ayXWNsHBLzGryMTfa%2FNyVILPnmvkNGQhlKNzEI7Dy5AkjZpyyGp23cXoeSfWW6rWVrvZtw0pNfYYUqEjKiwTHHqLvixWGI0DXf%2Bqbzxl30i8nZYiPJ1E9TxBx7WR9DH3Ulpb6SkV%2BMLHWRkumL%2BQjUNnZuxGW8A%2FWso0fpU0rd6TNWPcvGnaYHRaZ59gnfS%2BqqWZnfaudS5FqjdcyEqhKvCEDTXp5yiMU9IZWrW%2BCC9f6HqGELBEFhnXTGhG5fWlv3lnfByoaiDhgE0P0wOqM8QafE7Ne4jg5wnvBDNOGFkzUP8W%2F8JCVc8Psc%2FiCbu8ttIg5iJxr6dDw9h1UNnYFdLCin9gaIKNRK8lN2wWlvaH0MEgZDUJgYQn%2FPi2vfe8pqyNKsZreop%2FMNiy38QGOqUBn%2FmD4FRTa%2BkUzJrxCe1SXYnOoLYUI00pnaBAI0dB%2FPg%2Fs9CVLcztwMmcKlPvUGYUWPueO5SSIB56Um4ApdSzTwgChyC%2F1JSd78BlLCBotYKdB8db6s9hZXE1AiwC9L4rVhiZpjxUQ7ZitGdpOhB4o1jcP0Vq9id7EnEX5Uw2NtWKeRG%2FIUPL9LJ0aYC0JobAOK662IVQlpm1wATKH%2FQtxktvkj9a&X-Amz-Signature=4429fc8a9ef9310204c188c8cab1deb9aac0b8314f3611c3f1c648d73337a1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNWLIEG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RdbeYtK8Y2HSWL%2B7hzmcwJpacDJ0lRnftZ8TUkliewIgMkjykGKuuHEadqpxMp9UdkudZVrpwN4HCD13owr%2BJ9AqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmntVcu%2F5MapFYvdSrcA8LDsR%2BxphvSgkkhqbBSbsbWjYStHq%2BJ%2Bgg%2FZwjOjKIqZKOCdYhKShDBzhCPH5GSX1YtjS9bJtsOgZdKmQB1psudO9wk8mkUNps9OTuThGSGJ0CPL3IyTGVz2eSyytnnWC27MUQokfABoo9jQFu1zob1vJDGPlkWyzuucltEHoJW4isobOh2WgpGO3YAiBty1WQxyPOOkZu6qeAQ7dyjUo1rY7cy%2Bkkppu8Wz86zqfM0i7q1ayXWNsHBLzGryMTfa%2FNyVILPnmvkNGQhlKNzEI7Dy5AkjZpyyGp23cXoeSfWW6rWVrvZtw0pNfYYUqEjKiwTHHqLvixWGI0DXf%2Bqbzxl30i8nZYiPJ1E9TxBx7WR9DH3Ulpb6SkV%2BMLHWRkumL%2BQjUNnZuxGW8A%2FWso0fpU0rd6TNWPcvGnaYHRaZ59gnfS%2BqqWZnfaudS5FqjdcyEqhKvCEDTXp5yiMU9IZWrW%2BCC9f6HqGELBEFhnXTGhG5fWlv3lnfByoaiDhgE0P0wOqM8QafE7Ne4jg5wnvBDNOGFkzUP8W%2F8JCVc8Psc%2FiCbu8ttIg5iJxr6dDw9h1UNnYFdLCin9gaIKNRK8lN2wWlvaH0MEgZDUJgYQn%2FPi2vfe8pqyNKsZreop%2FMNiy38QGOqUBn%2FmD4FRTa%2BkUzJrxCe1SXYnOoLYUI00pnaBAI0dB%2FPg%2Fs9CVLcztwMmcKlPvUGYUWPueO5SSIB56Um4ApdSzTwgChyC%2F1JSd78BlLCBotYKdB8db6s9hZXE1AiwC9L4rVhiZpjxUQ7ZitGdpOhB4o1jcP0Vq9id7EnEX5Uw2NtWKeRG%2FIUPL9LJ0aYC0JobAOK662IVQlpm1wATKH%2FQtxktvkj9a&X-Amz-Signature=e3f7dfadf44e568484a34050d70dc8d6d81286f7022964a4c90a6a8676082c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNWLIEG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RdbeYtK8Y2HSWL%2B7hzmcwJpacDJ0lRnftZ8TUkliewIgMkjykGKuuHEadqpxMp9UdkudZVrpwN4HCD13owr%2BJ9AqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmntVcu%2F5MapFYvdSrcA8LDsR%2BxphvSgkkhqbBSbsbWjYStHq%2BJ%2Bgg%2FZwjOjKIqZKOCdYhKShDBzhCPH5GSX1YtjS9bJtsOgZdKmQB1psudO9wk8mkUNps9OTuThGSGJ0CPL3IyTGVz2eSyytnnWC27MUQokfABoo9jQFu1zob1vJDGPlkWyzuucltEHoJW4isobOh2WgpGO3YAiBty1WQxyPOOkZu6qeAQ7dyjUo1rY7cy%2Bkkppu8Wz86zqfM0i7q1ayXWNsHBLzGryMTfa%2FNyVILPnmvkNGQhlKNzEI7Dy5AkjZpyyGp23cXoeSfWW6rWVrvZtw0pNfYYUqEjKiwTHHqLvixWGI0DXf%2Bqbzxl30i8nZYiPJ1E9TxBx7WR9DH3Ulpb6SkV%2BMLHWRkumL%2BQjUNnZuxGW8A%2FWso0fpU0rd6TNWPcvGnaYHRaZ59gnfS%2BqqWZnfaudS5FqjdcyEqhKvCEDTXp5yiMU9IZWrW%2BCC9f6HqGELBEFhnXTGhG5fWlv3lnfByoaiDhgE0P0wOqM8QafE7Ne4jg5wnvBDNOGFkzUP8W%2F8JCVc8Psc%2FiCbu8ttIg5iJxr6dDw9h1UNnYFdLCin9gaIKNRK8lN2wWlvaH0MEgZDUJgYQn%2FPi2vfe8pqyNKsZreop%2FMNiy38QGOqUBn%2FmD4FRTa%2BkUzJrxCe1SXYnOoLYUI00pnaBAI0dB%2FPg%2Fs9CVLcztwMmcKlPvUGYUWPueO5SSIB56Um4ApdSzTwgChyC%2F1JSd78BlLCBotYKdB8db6s9hZXE1AiwC9L4rVhiZpjxUQ7ZitGdpOhB4o1jcP0Vq9id7EnEX5Uw2NtWKeRG%2FIUPL9LJ0aYC0JobAOK662IVQlpm1wATKH%2FQtxktvkj9a&X-Amz-Signature=39079e1de368341c1a40f99f25e78d90d8251e76d9d1ce81e6155b29fa82a5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNWLIEG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RdbeYtK8Y2HSWL%2B7hzmcwJpacDJ0lRnftZ8TUkliewIgMkjykGKuuHEadqpxMp9UdkudZVrpwN4HCD13owr%2BJ9AqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmntVcu%2F5MapFYvdSrcA8LDsR%2BxphvSgkkhqbBSbsbWjYStHq%2BJ%2Bgg%2FZwjOjKIqZKOCdYhKShDBzhCPH5GSX1YtjS9bJtsOgZdKmQB1psudO9wk8mkUNps9OTuThGSGJ0CPL3IyTGVz2eSyytnnWC27MUQokfABoo9jQFu1zob1vJDGPlkWyzuucltEHoJW4isobOh2WgpGO3YAiBty1WQxyPOOkZu6qeAQ7dyjUo1rY7cy%2Bkkppu8Wz86zqfM0i7q1ayXWNsHBLzGryMTfa%2FNyVILPnmvkNGQhlKNzEI7Dy5AkjZpyyGp23cXoeSfWW6rWVrvZtw0pNfYYUqEjKiwTHHqLvixWGI0DXf%2Bqbzxl30i8nZYiPJ1E9TxBx7WR9DH3Ulpb6SkV%2BMLHWRkumL%2BQjUNnZuxGW8A%2FWso0fpU0rd6TNWPcvGnaYHRaZ59gnfS%2BqqWZnfaudS5FqjdcyEqhKvCEDTXp5yiMU9IZWrW%2BCC9f6HqGELBEFhnXTGhG5fWlv3lnfByoaiDhgE0P0wOqM8QafE7Ne4jg5wnvBDNOGFkzUP8W%2F8JCVc8Psc%2FiCbu8ttIg5iJxr6dDw9h1UNnYFdLCin9gaIKNRK8lN2wWlvaH0MEgZDUJgYQn%2FPi2vfe8pqyNKsZreop%2FMNiy38QGOqUBn%2FmD4FRTa%2BkUzJrxCe1SXYnOoLYUI00pnaBAI0dB%2FPg%2Fs9CVLcztwMmcKlPvUGYUWPueO5SSIB56Um4ApdSzTwgChyC%2F1JSd78BlLCBotYKdB8db6s9hZXE1AiwC9L4rVhiZpjxUQ7ZitGdpOhB4o1jcP0Vq9id7EnEX5Uw2NtWKeRG%2FIUPL9LJ0aYC0JobAOK662IVQlpm1wATKH%2FQtxktvkj9a&X-Amz-Signature=2a68e5ed57c247f1061cff1cf4c62f2f7f4bbb70d2671fd376c736b1da115907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNWLIEG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RdbeYtK8Y2HSWL%2B7hzmcwJpacDJ0lRnftZ8TUkliewIgMkjykGKuuHEadqpxMp9UdkudZVrpwN4HCD13owr%2BJ9AqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmntVcu%2F5MapFYvdSrcA8LDsR%2BxphvSgkkhqbBSbsbWjYStHq%2BJ%2Bgg%2FZwjOjKIqZKOCdYhKShDBzhCPH5GSX1YtjS9bJtsOgZdKmQB1psudO9wk8mkUNps9OTuThGSGJ0CPL3IyTGVz2eSyytnnWC27MUQokfABoo9jQFu1zob1vJDGPlkWyzuucltEHoJW4isobOh2WgpGO3YAiBty1WQxyPOOkZu6qeAQ7dyjUo1rY7cy%2Bkkppu8Wz86zqfM0i7q1ayXWNsHBLzGryMTfa%2FNyVILPnmvkNGQhlKNzEI7Dy5AkjZpyyGp23cXoeSfWW6rWVrvZtw0pNfYYUqEjKiwTHHqLvixWGI0DXf%2Bqbzxl30i8nZYiPJ1E9TxBx7WR9DH3Ulpb6SkV%2BMLHWRkumL%2BQjUNnZuxGW8A%2FWso0fpU0rd6TNWPcvGnaYHRaZ59gnfS%2BqqWZnfaudS5FqjdcyEqhKvCEDTXp5yiMU9IZWrW%2BCC9f6HqGELBEFhnXTGhG5fWlv3lnfByoaiDhgE0P0wOqM8QafE7Ne4jg5wnvBDNOGFkzUP8W%2F8JCVc8Psc%2FiCbu8ttIg5iJxr6dDw9h1UNnYFdLCin9gaIKNRK8lN2wWlvaH0MEgZDUJgYQn%2FPi2vfe8pqyNKsZreop%2FMNiy38QGOqUBn%2FmD4FRTa%2BkUzJrxCe1SXYnOoLYUI00pnaBAI0dB%2FPg%2Fs9CVLcztwMmcKlPvUGYUWPueO5SSIB56Um4ApdSzTwgChyC%2F1JSd78BlLCBotYKdB8db6s9hZXE1AiwC9L4rVhiZpjxUQ7ZitGdpOhB4o1jcP0Vq9id7EnEX5Uw2NtWKeRG%2FIUPL9LJ0aYC0JobAOK662IVQlpm1wATKH%2FQtxktvkj9a&X-Amz-Signature=7ae16370bbf7f5b9aab0e059a0c432086c4f33ce2bdf0355bb18bff1e420a766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
