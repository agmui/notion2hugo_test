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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7EQK64%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD1x%2BV1Rgm1QM8KQTqK9d2rlIPZmyg46yWeGZYGg4zCkgIgG4ff6bfIoKKQnPZVz3o8xmHtNuzXEmOEFKTkpg9Ji%2FUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BHHJdtCCUVlonhXCrcAzzipVqwne6Cghjs0NIruWHR6Ei1fKuedqAK43QZf3NDtP4006Uw%2Bm9v0EqBUyCMRTIu%2Bl5OX4C8ViRwvjZT%2BRbmHZPNt5Pb2ZTFzNloAee%2BWJnjSfzZa3M81wxqkfkoShDppms4YM6%2B8zbXVGKHjuO%2BNKjSTJ1nZwjXssZb5LbLzaw1pKcpWHceiFQ3FzDCVooIN3QQWE3fV%2BwvqqMGBsrthmikReQD8BZeI4XiSiI5y5fzSHRtWdR1cqz%2Fo5qnyHZLGdi335%2FCLTJEKA%2BXsHUmpM%2FzD61jbuzbDBy%2FbhLs226eLu1OztTK8oe8GIE7Iz4bPnKZ2KkJHUBnFpTV%2Bngs8cBfJtRaosO5s8YCt8yNWtQFFexrBnpmfl6Va2Fn0g4sfgSpTb7DZWh2YNVZQ%2FFg9t2YAohG0APlIVozrgcKAUu7nYVk08Vy%2BCSCSwExogVkbxfcLtr2e57VoiE1lMEni029VjNSPuGaEMhzJSB8ID09d8rW0slZ6KmxC5aB9KgrncknFYIfe3vptdjFA0sXaDUaJxL3WfNiHePUJKwZqaRTssPwxaNl%2Bugw7wehciOg8aRJ5yutln6o88U8h2penEvadnoN0AwI3ea25TLJFq9LYHpHthMDsW6VMJj%2B58MGOqUBTbT%2B74Yo4usy8cik1XPLqXQDa6KWZ1ofr6OXnaDPrBk75e6GvjOePvwF4VMT7YSK16pxDI%2FYnf4KafdS2O4BeYgl44mcgzRKyteIH%2F5%2FBlqYCoA6xGrZ8zpfsALIYUglsEkpuaL2G5srJTqO3FIgBT4YwJ%2BbEmibJ3hpWhOz%2BRvgokj%2BcU6FHh6YxLHbIgNpErZyGauWHs34ZAvKD4klvVkr2Zsd&X-Amz-Signature=cb900b24ac6c1748a7aa398c004fbd9027c18df2cca5a63edc00f0fbd17ed77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7EQK64%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD1x%2BV1Rgm1QM8KQTqK9d2rlIPZmyg46yWeGZYGg4zCkgIgG4ff6bfIoKKQnPZVz3o8xmHtNuzXEmOEFKTkpg9Ji%2FUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BHHJdtCCUVlonhXCrcAzzipVqwne6Cghjs0NIruWHR6Ei1fKuedqAK43QZf3NDtP4006Uw%2Bm9v0EqBUyCMRTIu%2Bl5OX4C8ViRwvjZT%2BRbmHZPNt5Pb2ZTFzNloAee%2BWJnjSfzZa3M81wxqkfkoShDppms4YM6%2B8zbXVGKHjuO%2BNKjSTJ1nZwjXssZb5LbLzaw1pKcpWHceiFQ3FzDCVooIN3QQWE3fV%2BwvqqMGBsrthmikReQD8BZeI4XiSiI5y5fzSHRtWdR1cqz%2Fo5qnyHZLGdi335%2FCLTJEKA%2BXsHUmpM%2FzD61jbuzbDBy%2FbhLs226eLu1OztTK8oe8GIE7Iz4bPnKZ2KkJHUBnFpTV%2Bngs8cBfJtRaosO5s8YCt8yNWtQFFexrBnpmfl6Va2Fn0g4sfgSpTb7DZWh2YNVZQ%2FFg9t2YAohG0APlIVozrgcKAUu7nYVk08Vy%2BCSCSwExogVkbxfcLtr2e57VoiE1lMEni029VjNSPuGaEMhzJSB8ID09d8rW0slZ6KmxC5aB9KgrncknFYIfe3vptdjFA0sXaDUaJxL3WfNiHePUJKwZqaRTssPwxaNl%2Bugw7wehciOg8aRJ5yutln6o88U8h2penEvadnoN0AwI3ea25TLJFq9LYHpHthMDsW6VMJj%2B58MGOqUBTbT%2B74Yo4usy8cik1XPLqXQDa6KWZ1ofr6OXnaDPrBk75e6GvjOePvwF4VMT7YSK16pxDI%2FYnf4KafdS2O4BeYgl44mcgzRKyteIH%2F5%2FBlqYCoA6xGrZ8zpfsALIYUglsEkpuaL2G5srJTqO3FIgBT4YwJ%2BbEmibJ3hpWhOz%2BRvgokj%2BcU6FHh6YxLHbIgNpErZyGauWHs34ZAvKD4klvVkr2Zsd&X-Amz-Signature=05a1681e5a221a5827c3dd128dd0852fce8bf4e9dd775a1f2a5138577c0763e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7EQK64%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD1x%2BV1Rgm1QM8KQTqK9d2rlIPZmyg46yWeGZYGg4zCkgIgG4ff6bfIoKKQnPZVz3o8xmHtNuzXEmOEFKTkpg9Ji%2FUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BHHJdtCCUVlonhXCrcAzzipVqwne6Cghjs0NIruWHR6Ei1fKuedqAK43QZf3NDtP4006Uw%2Bm9v0EqBUyCMRTIu%2Bl5OX4C8ViRwvjZT%2BRbmHZPNt5Pb2ZTFzNloAee%2BWJnjSfzZa3M81wxqkfkoShDppms4YM6%2B8zbXVGKHjuO%2BNKjSTJ1nZwjXssZb5LbLzaw1pKcpWHceiFQ3FzDCVooIN3QQWE3fV%2BwvqqMGBsrthmikReQD8BZeI4XiSiI5y5fzSHRtWdR1cqz%2Fo5qnyHZLGdi335%2FCLTJEKA%2BXsHUmpM%2FzD61jbuzbDBy%2FbhLs226eLu1OztTK8oe8GIE7Iz4bPnKZ2KkJHUBnFpTV%2Bngs8cBfJtRaosO5s8YCt8yNWtQFFexrBnpmfl6Va2Fn0g4sfgSpTb7DZWh2YNVZQ%2FFg9t2YAohG0APlIVozrgcKAUu7nYVk08Vy%2BCSCSwExogVkbxfcLtr2e57VoiE1lMEni029VjNSPuGaEMhzJSB8ID09d8rW0slZ6KmxC5aB9KgrncknFYIfe3vptdjFA0sXaDUaJxL3WfNiHePUJKwZqaRTssPwxaNl%2Bugw7wehciOg8aRJ5yutln6o88U8h2penEvadnoN0AwI3ea25TLJFq9LYHpHthMDsW6VMJj%2B58MGOqUBTbT%2B74Yo4usy8cik1XPLqXQDa6KWZ1ofr6OXnaDPrBk75e6GvjOePvwF4VMT7YSK16pxDI%2FYnf4KafdS2O4BeYgl44mcgzRKyteIH%2F5%2FBlqYCoA6xGrZ8zpfsALIYUglsEkpuaL2G5srJTqO3FIgBT4YwJ%2BbEmibJ3hpWhOz%2BRvgokj%2BcU6FHh6YxLHbIgNpErZyGauWHs34ZAvKD4klvVkr2Zsd&X-Amz-Signature=94965f9b767ceedb644160e98a873bfb9d2d10afb6d4f481f39e72c7de24074e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7EQK64%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD1x%2BV1Rgm1QM8KQTqK9d2rlIPZmyg46yWeGZYGg4zCkgIgG4ff6bfIoKKQnPZVz3o8xmHtNuzXEmOEFKTkpg9Ji%2FUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BHHJdtCCUVlonhXCrcAzzipVqwne6Cghjs0NIruWHR6Ei1fKuedqAK43QZf3NDtP4006Uw%2Bm9v0EqBUyCMRTIu%2Bl5OX4C8ViRwvjZT%2BRbmHZPNt5Pb2ZTFzNloAee%2BWJnjSfzZa3M81wxqkfkoShDppms4YM6%2B8zbXVGKHjuO%2BNKjSTJ1nZwjXssZb5LbLzaw1pKcpWHceiFQ3FzDCVooIN3QQWE3fV%2BwvqqMGBsrthmikReQD8BZeI4XiSiI5y5fzSHRtWdR1cqz%2Fo5qnyHZLGdi335%2FCLTJEKA%2BXsHUmpM%2FzD61jbuzbDBy%2FbhLs226eLu1OztTK8oe8GIE7Iz4bPnKZ2KkJHUBnFpTV%2Bngs8cBfJtRaosO5s8YCt8yNWtQFFexrBnpmfl6Va2Fn0g4sfgSpTb7DZWh2YNVZQ%2FFg9t2YAohG0APlIVozrgcKAUu7nYVk08Vy%2BCSCSwExogVkbxfcLtr2e57VoiE1lMEni029VjNSPuGaEMhzJSB8ID09d8rW0slZ6KmxC5aB9KgrncknFYIfe3vptdjFA0sXaDUaJxL3WfNiHePUJKwZqaRTssPwxaNl%2Bugw7wehciOg8aRJ5yutln6o88U8h2penEvadnoN0AwI3ea25TLJFq9LYHpHthMDsW6VMJj%2B58MGOqUBTbT%2B74Yo4usy8cik1XPLqXQDa6KWZ1ofr6OXnaDPrBk75e6GvjOePvwF4VMT7YSK16pxDI%2FYnf4KafdS2O4BeYgl44mcgzRKyteIH%2F5%2FBlqYCoA6xGrZ8zpfsALIYUglsEkpuaL2G5srJTqO3FIgBT4YwJ%2BbEmibJ3hpWhOz%2BRvgokj%2BcU6FHh6YxLHbIgNpErZyGauWHs34ZAvKD4klvVkr2Zsd&X-Amz-Signature=174471731381469f1c6dae1345cdf48bc175f49ede337a12dd0423b7cfc5eed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7EQK64%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD1x%2BV1Rgm1QM8KQTqK9d2rlIPZmyg46yWeGZYGg4zCkgIgG4ff6bfIoKKQnPZVz3o8xmHtNuzXEmOEFKTkpg9Ji%2FUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BHHJdtCCUVlonhXCrcAzzipVqwne6Cghjs0NIruWHR6Ei1fKuedqAK43QZf3NDtP4006Uw%2Bm9v0EqBUyCMRTIu%2Bl5OX4C8ViRwvjZT%2BRbmHZPNt5Pb2ZTFzNloAee%2BWJnjSfzZa3M81wxqkfkoShDppms4YM6%2B8zbXVGKHjuO%2BNKjSTJ1nZwjXssZb5LbLzaw1pKcpWHceiFQ3FzDCVooIN3QQWE3fV%2BwvqqMGBsrthmikReQD8BZeI4XiSiI5y5fzSHRtWdR1cqz%2Fo5qnyHZLGdi335%2FCLTJEKA%2BXsHUmpM%2FzD61jbuzbDBy%2FbhLs226eLu1OztTK8oe8GIE7Iz4bPnKZ2KkJHUBnFpTV%2Bngs8cBfJtRaosO5s8YCt8yNWtQFFexrBnpmfl6Va2Fn0g4sfgSpTb7DZWh2YNVZQ%2FFg9t2YAohG0APlIVozrgcKAUu7nYVk08Vy%2BCSCSwExogVkbxfcLtr2e57VoiE1lMEni029VjNSPuGaEMhzJSB8ID09d8rW0slZ6KmxC5aB9KgrncknFYIfe3vptdjFA0sXaDUaJxL3WfNiHePUJKwZqaRTssPwxaNl%2Bugw7wehciOg8aRJ5yutln6o88U8h2penEvadnoN0AwI3ea25TLJFq9LYHpHthMDsW6VMJj%2B58MGOqUBTbT%2B74Yo4usy8cik1XPLqXQDa6KWZ1ofr6OXnaDPrBk75e6GvjOePvwF4VMT7YSK16pxDI%2FYnf4KafdS2O4BeYgl44mcgzRKyteIH%2F5%2FBlqYCoA6xGrZ8zpfsALIYUglsEkpuaL2G5srJTqO3FIgBT4YwJ%2BbEmibJ3hpWhOz%2BRvgokj%2BcU6FHh6YxLHbIgNpErZyGauWHs34ZAvKD4klvVkr2Zsd&X-Amz-Signature=bbbd9ca142c43dff090f313941a9ffd447a947b8e55e7165e21dccfac59d5ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7EQK64%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD1x%2BV1Rgm1QM8KQTqK9d2rlIPZmyg46yWeGZYGg4zCkgIgG4ff6bfIoKKQnPZVz3o8xmHtNuzXEmOEFKTkpg9Ji%2FUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BHHJdtCCUVlonhXCrcAzzipVqwne6Cghjs0NIruWHR6Ei1fKuedqAK43QZf3NDtP4006Uw%2Bm9v0EqBUyCMRTIu%2Bl5OX4C8ViRwvjZT%2BRbmHZPNt5Pb2ZTFzNloAee%2BWJnjSfzZa3M81wxqkfkoShDppms4YM6%2B8zbXVGKHjuO%2BNKjSTJ1nZwjXssZb5LbLzaw1pKcpWHceiFQ3FzDCVooIN3QQWE3fV%2BwvqqMGBsrthmikReQD8BZeI4XiSiI5y5fzSHRtWdR1cqz%2Fo5qnyHZLGdi335%2FCLTJEKA%2BXsHUmpM%2FzD61jbuzbDBy%2FbhLs226eLu1OztTK8oe8GIE7Iz4bPnKZ2KkJHUBnFpTV%2Bngs8cBfJtRaosO5s8YCt8yNWtQFFexrBnpmfl6Va2Fn0g4sfgSpTb7DZWh2YNVZQ%2FFg9t2YAohG0APlIVozrgcKAUu7nYVk08Vy%2BCSCSwExogVkbxfcLtr2e57VoiE1lMEni029VjNSPuGaEMhzJSB8ID09d8rW0slZ6KmxC5aB9KgrncknFYIfe3vptdjFA0sXaDUaJxL3WfNiHePUJKwZqaRTssPwxaNl%2Bugw7wehciOg8aRJ5yutln6o88U8h2penEvadnoN0AwI3ea25TLJFq9LYHpHthMDsW6VMJj%2B58MGOqUBTbT%2B74Yo4usy8cik1XPLqXQDa6KWZ1ofr6OXnaDPrBk75e6GvjOePvwF4VMT7YSK16pxDI%2FYnf4KafdS2O4BeYgl44mcgzRKyteIH%2F5%2FBlqYCoA6xGrZ8zpfsALIYUglsEkpuaL2G5srJTqO3FIgBT4YwJ%2BbEmibJ3hpWhOz%2BRvgokj%2BcU6FHh6YxLHbIgNpErZyGauWHs34ZAvKD4klvVkr2Zsd&X-Amz-Signature=e65d1106919d891a2d5d58a00bad3089ed257789fa352c8efafe84385772c34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7EQK64%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD1x%2BV1Rgm1QM8KQTqK9d2rlIPZmyg46yWeGZYGg4zCkgIgG4ff6bfIoKKQnPZVz3o8xmHtNuzXEmOEFKTkpg9Ji%2FUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BHHJdtCCUVlonhXCrcAzzipVqwne6Cghjs0NIruWHR6Ei1fKuedqAK43QZf3NDtP4006Uw%2Bm9v0EqBUyCMRTIu%2Bl5OX4C8ViRwvjZT%2BRbmHZPNt5Pb2ZTFzNloAee%2BWJnjSfzZa3M81wxqkfkoShDppms4YM6%2B8zbXVGKHjuO%2BNKjSTJ1nZwjXssZb5LbLzaw1pKcpWHceiFQ3FzDCVooIN3QQWE3fV%2BwvqqMGBsrthmikReQD8BZeI4XiSiI5y5fzSHRtWdR1cqz%2Fo5qnyHZLGdi335%2FCLTJEKA%2BXsHUmpM%2FzD61jbuzbDBy%2FbhLs226eLu1OztTK8oe8GIE7Iz4bPnKZ2KkJHUBnFpTV%2Bngs8cBfJtRaosO5s8YCt8yNWtQFFexrBnpmfl6Va2Fn0g4sfgSpTb7DZWh2YNVZQ%2FFg9t2YAohG0APlIVozrgcKAUu7nYVk08Vy%2BCSCSwExogVkbxfcLtr2e57VoiE1lMEni029VjNSPuGaEMhzJSB8ID09d8rW0slZ6KmxC5aB9KgrncknFYIfe3vptdjFA0sXaDUaJxL3WfNiHePUJKwZqaRTssPwxaNl%2Bugw7wehciOg8aRJ5yutln6o88U8h2penEvadnoN0AwI3ea25TLJFq9LYHpHthMDsW6VMJj%2B58MGOqUBTbT%2B74Yo4usy8cik1XPLqXQDa6KWZ1ofr6OXnaDPrBk75e6GvjOePvwF4VMT7YSK16pxDI%2FYnf4KafdS2O4BeYgl44mcgzRKyteIH%2F5%2FBlqYCoA6xGrZ8zpfsALIYUglsEkpuaL2G5srJTqO3FIgBT4YwJ%2BbEmibJ3hpWhOz%2BRvgokj%2BcU6FHh6YxLHbIgNpErZyGauWHs34ZAvKD4klvVkr2Zsd&X-Amz-Signature=ba42b9ad40dae47f4c54a13cab65f9001c9f85d5987c31069954b1a29963f40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7EQK64%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD1x%2BV1Rgm1QM8KQTqK9d2rlIPZmyg46yWeGZYGg4zCkgIgG4ff6bfIoKKQnPZVz3o8xmHtNuzXEmOEFKTkpg9Ji%2FUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BHHJdtCCUVlonhXCrcAzzipVqwne6Cghjs0NIruWHR6Ei1fKuedqAK43QZf3NDtP4006Uw%2Bm9v0EqBUyCMRTIu%2Bl5OX4C8ViRwvjZT%2BRbmHZPNt5Pb2ZTFzNloAee%2BWJnjSfzZa3M81wxqkfkoShDppms4YM6%2B8zbXVGKHjuO%2BNKjSTJ1nZwjXssZb5LbLzaw1pKcpWHceiFQ3FzDCVooIN3QQWE3fV%2BwvqqMGBsrthmikReQD8BZeI4XiSiI5y5fzSHRtWdR1cqz%2Fo5qnyHZLGdi335%2FCLTJEKA%2BXsHUmpM%2FzD61jbuzbDBy%2FbhLs226eLu1OztTK8oe8GIE7Iz4bPnKZ2KkJHUBnFpTV%2Bngs8cBfJtRaosO5s8YCt8yNWtQFFexrBnpmfl6Va2Fn0g4sfgSpTb7DZWh2YNVZQ%2FFg9t2YAohG0APlIVozrgcKAUu7nYVk08Vy%2BCSCSwExogVkbxfcLtr2e57VoiE1lMEni029VjNSPuGaEMhzJSB8ID09d8rW0slZ6KmxC5aB9KgrncknFYIfe3vptdjFA0sXaDUaJxL3WfNiHePUJKwZqaRTssPwxaNl%2Bugw7wehciOg8aRJ5yutln6o88U8h2penEvadnoN0AwI3ea25TLJFq9LYHpHthMDsW6VMJj%2B58MGOqUBTbT%2B74Yo4usy8cik1XPLqXQDa6KWZ1ofr6OXnaDPrBk75e6GvjOePvwF4VMT7YSK16pxDI%2FYnf4KafdS2O4BeYgl44mcgzRKyteIH%2F5%2FBlqYCoA6xGrZ8zpfsALIYUglsEkpuaL2G5srJTqO3FIgBT4YwJ%2BbEmibJ3hpWhOz%2BRvgokj%2BcU6FHh6YxLHbIgNpErZyGauWHs34ZAvKD4klvVkr2Zsd&X-Amz-Signature=2593ba70b40fedfae643eb6a90707767192f1c112a7f13dc8bd738f540a84c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
