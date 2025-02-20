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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6SDMQ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDMUL69eyCfOR6TUuBA%2BJZvT3xOVw9AUOlAJd%2FO%2Bp9gAIgNbDS4S03cpYMEX1ZXd6%2BZL7Gjxq%2BTBcbzc3IP5bTiN0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3Vhzp2eTqD06LNESrcAzd6%2Fm%2BQMQI63JtPdDW1qDdW2HKjaZ%2FBdZIAjAkr8EihCTR57hfHY2zJGTnsdqSNnvieh1Quca%2Fg%2BWeQ7K%2FDh9khvwX0ZCoVp2ULx6EKBENSN2pqKsLs%2BPG76aL7OztAq%2B4Eurc5b%2BCSLquS4xaUuC3x5rvL%2FFM2GjN4sP7675jCmuv6%2FlLTe9IbFNhD8oHf66eOaenSZhpJOjzDTp532YF3ZqaXY%2Bl%2Fr3on26SK6OdynsNTjmeBTFEkVkmY%2B2adQnkuFUZqv5tM7wV3Kj%2FarLqkWQp1DEkCfFDZX5HXZ8c1en3vx46oIHzfnRO8QIVDz091gtOwDuQkwq0tnT0CzIeEEBsFW%2FQOALVAndgQBcjTdQoljrAjtu4nnEBtvGMgm4yGvW%2FqOmLGxPddxrWReeRXcKfDJAmoQ5LEWUT5cxEPEeD1blxwKEkOIDqwZw5%2BDzzStH2hZAzTAIYot1FE%2FeLpk0pJdSSXEYxZNbxLS3SxkLsqu%2F8P2Rw7IcJNrYzWCjqOpe2ZnNHKoRzzqpcBtyQf%2FahxgL1Rg2uVwlJUatIVXSHolK5XksWdTNKGmjSFifwNeTUXn12JhwkBgiF2pdqU45tsK9VW%2BHRV6SW3rl%2FvyAPzgUYyKvLeZU7YMJDY270GOqUB7diheU7LDxYMNMkiubqwWjtth0WbxZjbXKqNWHXiuBh6gW5bsb7bew8V%2Bsi%2BFf5%2FYY15SuGksstuyeXcZ6efUZFbWxn0f6mg0f6p4VKP0QXTRjz14cVJEXTijTmZuTJrifHMqSFVbO3j4vXglkYqWbWojxLsA6oEVUDaQXS9WMxJDgSPqADrc2M9yzlZnr6GOOF47bIPwahyib%2FDI6Ezs6W8adLl&X-Amz-Signature=82b0fd849170cd5ac9cf1e725bb28391ddaa6bafa000b16303f73df7e72bb73f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6SDMQ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDMUL69eyCfOR6TUuBA%2BJZvT3xOVw9AUOlAJd%2FO%2Bp9gAIgNbDS4S03cpYMEX1ZXd6%2BZL7Gjxq%2BTBcbzc3IP5bTiN0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3Vhzp2eTqD06LNESrcAzd6%2Fm%2BQMQI63JtPdDW1qDdW2HKjaZ%2FBdZIAjAkr8EihCTR57hfHY2zJGTnsdqSNnvieh1Quca%2Fg%2BWeQ7K%2FDh9khvwX0ZCoVp2ULx6EKBENSN2pqKsLs%2BPG76aL7OztAq%2B4Eurc5b%2BCSLquS4xaUuC3x5rvL%2FFM2GjN4sP7675jCmuv6%2FlLTe9IbFNhD8oHf66eOaenSZhpJOjzDTp532YF3ZqaXY%2Bl%2Fr3on26SK6OdynsNTjmeBTFEkVkmY%2B2adQnkuFUZqv5tM7wV3Kj%2FarLqkWQp1DEkCfFDZX5HXZ8c1en3vx46oIHzfnRO8QIVDz091gtOwDuQkwq0tnT0CzIeEEBsFW%2FQOALVAndgQBcjTdQoljrAjtu4nnEBtvGMgm4yGvW%2FqOmLGxPddxrWReeRXcKfDJAmoQ5LEWUT5cxEPEeD1blxwKEkOIDqwZw5%2BDzzStH2hZAzTAIYot1FE%2FeLpk0pJdSSXEYxZNbxLS3SxkLsqu%2F8P2Rw7IcJNrYzWCjqOpe2ZnNHKoRzzqpcBtyQf%2FahxgL1Rg2uVwlJUatIVXSHolK5XksWdTNKGmjSFifwNeTUXn12JhwkBgiF2pdqU45tsK9VW%2BHRV6SW3rl%2FvyAPzgUYyKvLeZU7YMJDY270GOqUB7diheU7LDxYMNMkiubqwWjtth0WbxZjbXKqNWHXiuBh6gW5bsb7bew8V%2Bsi%2BFf5%2FYY15SuGksstuyeXcZ6efUZFbWxn0f6mg0f6p4VKP0QXTRjz14cVJEXTijTmZuTJrifHMqSFVbO3j4vXglkYqWbWojxLsA6oEVUDaQXS9WMxJDgSPqADrc2M9yzlZnr6GOOF47bIPwahyib%2FDI6Ezs6W8adLl&X-Amz-Signature=1174d68b83ca9b3102c84c93a8483f8bb47d82d1104e8e9faed032a8aebc2f95&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6SDMQ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDMUL69eyCfOR6TUuBA%2BJZvT3xOVw9AUOlAJd%2FO%2Bp9gAIgNbDS4S03cpYMEX1ZXd6%2BZL7Gjxq%2BTBcbzc3IP5bTiN0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3Vhzp2eTqD06LNESrcAzd6%2Fm%2BQMQI63JtPdDW1qDdW2HKjaZ%2FBdZIAjAkr8EihCTR57hfHY2zJGTnsdqSNnvieh1Quca%2Fg%2BWeQ7K%2FDh9khvwX0ZCoVp2ULx6EKBENSN2pqKsLs%2BPG76aL7OztAq%2B4Eurc5b%2BCSLquS4xaUuC3x5rvL%2FFM2GjN4sP7675jCmuv6%2FlLTe9IbFNhD8oHf66eOaenSZhpJOjzDTp532YF3ZqaXY%2Bl%2Fr3on26SK6OdynsNTjmeBTFEkVkmY%2B2adQnkuFUZqv5tM7wV3Kj%2FarLqkWQp1DEkCfFDZX5HXZ8c1en3vx46oIHzfnRO8QIVDz091gtOwDuQkwq0tnT0CzIeEEBsFW%2FQOALVAndgQBcjTdQoljrAjtu4nnEBtvGMgm4yGvW%2FqOmLGxPddxrWReeRXcKfDJAmoQ5LEWUT5cxEPEeD1blxwKEkOIDqwZw5%2BDzzStH2hZAzTAIYot1FE%2FeLpk0pJdSSXEYxZNbxLS3SxkLsqu%2F8P2Rw7IcJNrYzWCjqOpe2ZnNHKoRzzqpcBtyQf%2FahxgL1Rg2uVwlJUatIVXSHolK5XksWdTNKGmjSFifwNeTUXn12JhwkBgiF2pdqU45tsK9VW%2BHRV6SW3rl%2FvyAPzgUYyKvLeZU7YMJDY270GOqUB7diheU7LDxYMNMkiubqwWjtth0WbxZjbXKqNWHXiuBh6gW5bsb7bew8V%2Bsi%2BFf5%2FYY15SuGksstuyeXcZ6efUZFbWxn0f6mg0f6p4VKP0QXTRjz14cVJEXTijTmZuTJrifHMqSFVbO3j4vXglkYqWbWojxLsA6oEVUDaQXS9WMxJDgSPqADrc2M9yzlZnr6GOOF47bIPwahyib%2FDI6Ezs6W8adLl&X-Amz-Signature=33633e219c6b495d2e6cc653c470004e993658ca899270c570c9553891d08be7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6SDMQ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDMUL69eyCfOR6TUuBA%2BJZvT3xOVw9AUOlAJd%2FO%2Bp9gAIgNbDS4S03cpYMEX1ZXd6%2BZL7Gjxq%2BTBcbzc3IP5bTiN0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3Vhzp2eTqD06LNESrcAzd6%2Fm%2BQMQI63JtPdDW1qDdW2HKjaZ%2FBdZIAjAkr8EihCTR57hfHY2zJGTnsdqSNnvieh1Quca%2Fg%2BWeQ7K%2FDh9khvwX0ZCoVp2ULx6EKBENSN2pqKsLs%2BPG76aL7OztAq%2B4Eurc5b%2BCSLquS4xaUuC3x5rvL%2FFM2GjN4sP7675jCmuv6%2FlLTe9IbFNhD8oHf66eOaenSZhpJOjzDTp532YF3ZqaXY%2Bl%2Fr3on26SK6OdynsNTjmeBTFEkVkmY%2B2adQnkuFUZqv5tM7wV3Kj%2FarLqkWQp1DEkCfFDZX5HXZ8c1en3vx46oIHzfnRO8QIVDz091gtOwDuQkwq0tnT0CzIeEEBsFW%2FQOALVAndgQBcjTdQoljrAjtu4nnEBtvGMgm4yGvW%2FqOmLGxPddxrWReeRXcKfDJAmoQ5LEWUT5cxEPEeD1blxwKEkOIDqwZw5%2BDzzStH2hZAzTAIYot1FE%2FeLpk0pJdSSXEYxZNbxLS3SxkLsqu%2F8P2Rw7IcJNrYzWCjqOpe2ZnNHKoRzzqpcBtyQf%2FahxgL1Rg2uVwlJUatIVXSHolK5XksWdTNKGmjSFifwNeTUXn12JhwkBgiF2pdqU45tsK9VW%2BHRV6SW3rl%2FvyAPzgUYyKvLeZU7YMJDY270GOqUB7diheU7LDxYMNMkiubqwWjtth0WbxZjbXKqNWHXiuBh6gW5bsb7bew8V%2Bsi%2BFf5%2FYY15SuGksstuyeXcZ6efUZFbWxn0f6mg0f6p4VKP0QXTRjz14cVJEXTijTmZuTJrifHMqSFVbO3j4vXglkYqWbWojxLsA6oEVUDaQXS9WMxJDgSPqADrc2M9yzlZnr6GOOF47bIPwahyib%2FDI6Ezs6W8adLl&X-Amz-Signature=823c25252cfe9b654b7402a1259029b1236d4c1298ee2614ac533218f53bc2e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6SDMQ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDMUL69eyCfOR6TUuBA%2BJZvT3xOVw9AUOlAJd%2FO%2Bp9gAIgNbDS4S03cpYMEX1ZXd6%2BZL7Gjxq%2BTBcbzc3IP5bTiN0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3Vhzp2eTqD06LNESrcAzd6%2Fm%2BQMQI63JtPdDW1qDdW2HKjaZ%2FBdZIAjAkr8EihCTR57hfHY2zJGTnsdqSNnvieh1Quca%2Fg%2BWeQ7K%2FDh9khvwX0ZCoVp2ULx6EKBENSN2pqKsLs%2BPG76aL7OztAq%2B4Eurc5b%2BCSLquS4xaUuC3x5rvL%2FFM2GjN4sP7675jCmuv6%2FlLTe9IbFNhD8oHf66eOaenSZhpJOjzDTp532YF3ZqaXY%2Bl%2Fr3on26SK6OdynsNTjmeBTFEkVkmY%2B2adQnkuFUZqv5tM7wV3Kj%2FarLqkWQp1DEkCfFDZX5HXZ8c1en3vx46oIHzfnRO8QIVDz091gtOwDuQkwq0tnT0CzIeEEBsFW%2FQOALVAndgQBcjTdQoljrAjtu4nnEBtvGMgm4yGvW%2FqOmLGxPddxrWReeRXcKfDJAmoQ5LEWUT5cxEPEeD1blxwKEkOIDqwZw5%2BDzzStH2hZAzTAIYot1FE%2FeLpk0pJdSSXEYxZNbxLS3SxkLsqu%2F8P2Rw7IcJNrYzWCjqOpe2ZnNHKoRzzqpcBtyQf%2FahxgL1Rg2uVwlJUatIVXSHolK5XksWdTNKGmjSFifwNeTUXn12JhwkBgiF2pdqU45tsK9VW%2BHRV6SW3rl%2FvyAPzgUYyKvLeZU7YMJDY270GOqUB7diheU7LDxYMNMkiubqwWjtth0WbxZjbXKqNWHXiuBh6gW5bsb7bew8V%2Bsi%2BFf5%2FYY15SuGksstuyeXcZ6efUZFbWxn0f6mg0f6p4VKP0QXTRjz14cVJEXTijTmZuTJrifHMqSFVbO3j4vXglkYqWbWojxLsA6oEVUDaQXS9WMxJDgSPqADrc2M9yzlZnr6GOOF47bIPwahyib%2FDI6Ezs6W8adLl&X-Amz-Signature=217332d7bb7bdc309d9f1ecdd2e1e093e07a6664e12a341277babc96a14652ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6SDMQ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDMUL69eyCfOR6TUuBA%2BJZvT3xOVw9AUOlAJd%2FO%2Bp9gAIgNbDS4S03cpYMEX1ZXd6%2BZL7Gjxq%2BTBcbzc3IP5bTiN0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3Vhzp2eTqD06LNESrcAzd6%2Fm%2BQMQI63JtPdDW1qDdW2HKjaZ%2FBdZIAjAkr8EihCTR57hfHY2zJGTnsdqSNnvieh1Quca%2Fg%2BWeQ7K%2FDh9khvwX0ZCoVp2ULx6EKBENSN2pqKsLs%2BPG76aL7OztAq%2B4Eurc5b%2BCSLquS4xaUuC3x5rvL%2FFM2GjN4sP7675jCmuv6%2FlLTe9IbFNhD8oHf66eOaenSZhpJOjzDTp532YF3ZqaXY%2Bl%2Fr3on26SK6OdynsNTjmeBTFEkVkmY%2B2adQnkuFUZqv5tM7wV3Kj%2FarLqkWQp1DEkCfFDZX5HXZ8c1en3vx46oIHzfnRO8QIVDz091gtOwDuQkwq0tnT0CzIeEEBsFW%2FQOALVAndgQBcjTdQoljrAjtu4nnEBtvGMgm4yGvW%2FqOmLGxPddxrWReeRXcKfDJAmoQ5LEWUT5cxEPEeD1blxwKEkOIDqwZw5%2BDzzStH2hZAzTAIYot1FE%2FeLpk0pJdSSXEYxZNbxLS3SxkLsqu%2F8P2Rw7IcJNrYzWCjqOpe2ZnNHKoRzzqpcBtyQf%2FahxgL1Rg2uVwlJUatIVXSHolK5XksWdTNKGmjSFifwNeTUXn12JhwkBgiF2pdqU45tsK9VW%2BHRV6SW3rl%2FvyAPzgUYyKvLeZU7YMJDY270GOqUB7diheU7LDxYMNMkiubqwWjtth0WbxZjbXKqNWHXiuBh6gW5bsb7bew8V%2Bsi%2BFf5%2FYY15SuGksstuyeXcZ6efUZFbWxn0f6mg0f6p4VKP0QXTRjz14cVJEXTijTmZuTJrifHMqSFVbO3j4vXglkYqWbWojxLsA6oEVUDaQXS9WMxJDgSPqADrc2M9yzlZnr6GOOF47bIPwahyib%2FDI6Ezs6W8adLl&X-Amz-Signature=46d900aa281f29185f75101cb87ef144678b7b446ee962048c003b1946b5973a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6SDMQ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDMUL69eyCfOR6TUuBA%2BJZvT3xOVw9AUOlAJd%2FO%2Bp9gAIgNbDS4S03cpYMEX1ZXd6%2BZL7Gjxq%2BTBcbzc3IP5bTiN0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3Vhzp2eTqD06LNESrcAzd6%2Fm%2BQMQI63JtPdDW1qDdW2HKjaZ%2FBdZIAjAkr8EihCTR57hfHY2zJGTnsdqSNnvieh1Quca%2Fg%2BWeQ7K%2FDh9khvwX0ZCoVp2ULx6EKBENSN2pqKsLs%2BPG76aL7OztAq%2B4Eurc5b%2BCSLquS4xaUuC3x5rvL%2FFM2GjN4sP7675jCmuv6%2FlLTe9IbFNhD8oHf66eOaenSZhpJOjzDTp532YF3ZqaXY%2Bl%2Fr3on26SK6OdynsNTjmeBTFEkVkmY%2B2adQnkuFUZqv5tM7wV3Kj%2FarLqkWQp1DEkCfFDZX5HXZ8c1en3vx46oIHzfnRO8QIVDz091gtOwDuQkwq0tnT0CzIeEEBsFW%2FQOALVAndgQBcjTdQoljrAjtu4nnEBtvGMgm4yGvW%2FqOmLGxPddxrWReeRXcKfDJAmoQ5LEWUT5cxEPEeD1blxwKEkOIDqwZw5%2BDzzStH2hZAzTAIYot1FE%2FeLpk0pJdSSXEYxZNbxLS3SxkLsqu%2F8P2Rw7IcJNrYzWCjqOpe2ZnNHKoRzzqpcBtyQf%2FahxgL1Rg2uVwlJUatIVXSHolK5XksWdTNKGmjSFifwNeTUXn12JhwkBgiF2pdqU45tsK9VW%2BHRV6SW3rl%2FvyAPzgUYyKvLeZU7YMJDY270GOqUB7diheU7LDxYMNMkiubqwWjtth0WbxZjbXKqNWHXiuBh6gW5bsb7bew8V%2Bsi%2BFf5%2FYY15SuGksstuyeXcZ6efUZFbWxn0f6mg0f6p4VKP0QXTRjz14cVJEXTijTmZuTJrifHMqSFVbO3j4vXglkYqWbWojxLsA6oEVUDaQXS9WMxJDgSPqADrc2M9yzlZnr6GOOF47bIPwahyib%2FDI6Ezs6W8adLl&X-Amz-Signature=3d49646dd3f65d382b4532b33e6ba5f6e33967718431b45a0a5532979c15dd16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6SDMQ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDMUL69eyCfOR6TUuBA%2BJZvT3xOVw9AUOlAJd%2FO%2Bp9gAIgNbDS4S03cpYMEX1ZXd6%2BZL7Gjxq%2BTBcbzc3IP5bTiN0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3Vhzp2eTqD06LNESrcAzd6%2Fm%2BQMQI63JtPdDW1qDdW2HKjaZ%2FBdZIAjAkr8EihCTR57hfHY2zJGTnsdqSNnvieh1Quca%2Fg%2BWeQ7K%2FDh9khvwX0ZCoVp2ULx6EKBENSN2pqKsLs%2BPG76aL7OztAq%2B4Eurc5b%2BCSLquS4xaUuC3x5rvL%2FFM2GjN4sP7675jCmuv6%2FlLTe9IbFNhD8oHf66eOaenSZhpJOjzDTp532YF3ZqaXY%2Bl%2Fr3on26SK6OdynsNTjmeBTFEkVkmY%2B2adQnkuFUZqv5tM7wV3Kj%2FarLqkWQp1DEkCfFDZX5HXZ8c1en3vx46oIHzfnRO8QIVDz091gtOwDuQkwq0tnT0CzIeEEBsFW%2FQOALVAndgQBcjTdQoljrAjtu4nnEBtvGMgm4yGvW%2FqOmLGxPddxrWReeRXcKfDJAmoQ5LEWUT5cxEPEeD1blxwKEkOIDqwZw5%2BDzzStH2hZAzTAIYot1FE%2FeLpk0pJdSSXEYxZNbxLS3SxkLsqu%2F8P2Rw7IcJNrYzWCjqOpe2ZnNHKoRzzqpcBtyQf%2FahxgL1Rg2uVwlJUatIVXSHolK5XksWdTNKGmjSFifwNeTUXn12JhwkBgiF2pdqU45tsK9VW%2BHRV6SW3rl%2FvyAPzgUYyKvLeZU7YMJDY270GOqUB7diheU7LDxYMNMkiubqwWjtth0WbxZjbXKqNWHXiuBh6gW5bsb7bew8V%2Bsi%2BFf5%2FYY15SuGksstuyeXcZ6efUZFbWxn0f6mg0f6p4VKP0QXTRjz14cVJEXTijTmZuTJrifHMqSFVbO3j4vXglkYqWbWojxLsA6oEVUDaQXS9WMxJDgSPqADrc2M9yzlZnr6GOOF47bIPwahyib%2FDI6Ezs6W8adLl&X-Amz-Signature=4bf334de52fee35d8ff73dc4742afd31ab8a450374e7fa372caa338f4999a081&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
