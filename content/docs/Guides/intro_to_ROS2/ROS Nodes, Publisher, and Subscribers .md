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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQEXVO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAVtYq9F5N7csALzE3G1QWIxLrA%2BNSm6OnAi%2Bn6P85v1AiEArhaokjvQC7HY7J3md%2BdNbtpb7QNotXZcRvd0WLmVI0EqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgk2ZyFiJ5UUaXHzCrcA1DK7n04Z4AyRxXRFYSeHub2ySA%2FHrpq6Z%2FmOdFRE3Q%2F5CTvjL%2BEzD00JXNo7c74xLq83phyPI7V%2B5eQKvpdNDKwJWxVbfk4cjPDlXOJ6Bdu0HASfeyoIdIC34idf1TYi5c%2BGNYzJN5rvfTNwGVkJnwSeRILLNQTPt7mjZuoys9qiBjE9Z5gfALG4CvWogmQTvDz0kVU6gjqqSyUaS%2BmghAieJtta5vrc4WuUzVwegAR9g6GMrim2KPaq6g2blnen4Q7x0rCTkEzzIpuVUlElI%2BlZUU25xPwpcl24OPS%2BdJ7kOGqupLuIprzkM7d9A48HV2kk48AWqHCFXpaT1YqBL9DYsMC0SSsdw4%2Ffx5DRORlG39VfaFzFvwuxmQHpK5tlgpKRZB%2FpLFos6T9K4n%2Bu6ASxD3dS1B5mjF6oAWPdgb%2FTBoeGhJgzQGg9PnTJ9XmWdDZktP%2BgU1d1hEhbfzkEyDRc0j1tDLiHED%2Bz1HNuIvSArORk6ykRgqOD9M6iML3Aw06rh8vOcv4NHVUGcr6qOybWI52naJR4I%2Bag%2B6vuBICFOobxfCE8Hg4RMAY7PixADJOyYchGjYw8Phbd1Li6YnqE2Ud7h%2FNKVW%2BQZZkJRrWf0rVuLsfDfqWTUcZMOWEgMEGOqUBjHdZRGpV085epQAte2pkGEjiabKTa7uLrUrolc3dEeqEyvsjIf5x17H6zwCKYPqf8QEKZd%2FUmC1K913FIGaDj4GPO6bJp8gsWlMxGtvfl3PTGBKpZYS45Xyf4RrGU%2BacNXHd4Db%2BAZXbj5%2FP13duat4BcTZhFJT9cbwloiDqZ%2Foreg1hp9CwJJ%2B7DbZJkLFKKO6Cht6FF2hCc%2F5sviCtWyAhHzYN&X-Amz-Signature=8416acf105fcda0cdaf79b8d9f6b27974268fc9eae975b52b82d3979a98045ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQEXVO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAVtYq9F5N7csALzE3G1QWIxLrA%2BNSm6OnAi%2Bn6P85v1AiEArhaokjvQC7HY7J3md%2BdNbtpb7QNotXZcRvd0WLmVI0EqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgk2ZyFiJ5UUaXHzCrcA1DK7n04Z4AyRxXRFYSeHub2ySA%2FHrpq6Z%2FmOdFRE3Q%2F5CTvjL%2BEzD00JXNo7c74xLq83phyPI7V%2B5eQKvpdNDKwJWxVbfk4cjPDlXOJ6Bdu0HASfeyoIdIC34idf1TYi5c%2BGNYzJN5rvfTNwGVkJnwSeRILLNQTPt7mjZuoys9qiBjE9Z5gfALG4CvWogmQTvDz0kVU6gjqqSyUaS%2BmghAieJtta5vrc4WuUzVwegAR9g6GMrim2KPaq6g2blnen4Q7x0rCTkEzzIpuVUlElI%2BlZUU25xPwpcl24OPS%2BdJ7kOGqupLuIprzkM7d9A48HV2kk48AWqHCFXpaT1YqBL9DYsMC0SSsdw4%2Ffx5DRORlG39VfaFzFvwuxmQHpK5tlgpKRZB%2FpLFos6T9K4n%2Bu6ASxD3dS1B5mjF6oAWPdgb%2FTBoeGhJgzQGg9PnTJ9XmWdDZktP%2BgU1d1hEhbfzkEyDRc0j1tDLiHED%2Bz1HNuIvSArORk6ykRgqOD9M6iML3Aw06rh8vOcv4NHVUGcr6qOybWI52naJR4I%2Bag%2B6vuBICFOobxfCE8Hg4RMAY7PixADJOyYchGjYw8Phbd1Li6YnqE2Ud7h%2FNKVW%2BQZZkJRrWf0rVuLsfDfqWTUcZMOWEgMEGOqUBjHdZRGpV085epQAte2pkGEjiabKTa7uLrUrolc3dEeqEyvsjIf5x17H6zwCKYPqf8QEKZd%2FUmC1K913FIGaDj4GPO6bJp8gsWlMxGtvfl3PTGBKpZYS45Xyf4RrGU%2BacNXHd4Db%2BAZXbj5%2FP13duat4BcTZhFJT9cbwloiDqZ%2Foreg1hp9CwJJ%2B7DbZJkLFKKO6Cht6FF2hCc%2F5sviCtWyAhHzYN&X-Amz-Signature=32f9f753886e36e481a8fe93c679f727c76980521460ed542c66a6de093700a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQEXVO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAVtYq9F5N7csALzE3G1QWIxLrA%2BNSm6OnAi%2Bn6P85v1AiEArhaokjvQC7HY7J3md%2BdNbtpb7QNotXZcRvd0WLmVI0EqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgk2ZyFiJ5UUaXHzCrcA1DK7n04Z4AyRxXRFYSeHub2ySA%2FHrpq6Z%2FmOdFRE3Q%2F5CTvjL%2BEzD00JXNo7c74xLq83phyPI7V%2B5eQKvpdNDKwJWxVbfk4cjPDlXOJ6Bdu0HASfeyoIdIC34idf1TYi5c%2BGNYzJN5rvfTNwGVkJnwSeRILLNQTPt7mjZuoys9qiBjE9Z5gfALG4CvWogmQTvDz0kVU6gjqqSyUaS%2BmghAieJtta5vrc4WuUzVwegAR9g6GMrim2KPaq6g2blnen4Q7x0rCTkEzzIpuVUlElI%2BlZUU25xPwpcl24OPS%2BdJ7kOGqupLuIprzkM7d9A48HV2kk48AWqHCFXpaT1YqBL9DYsMC0SSsdw4%2Ffx5DRORlG39VfaFzFvwuxmQHpK5tlgpKRZB%2FpLFos6T9K4n%2Bu6ASxD3dS1B5mjF6oAWPdgb%2FTBoeGhJgzQGg9PnTJ9XmWdDZktP%2BgU1d1hEhbfzkEyDRc0j1tDLiHED%2Bz1HNuIvSArORk6ykRgqOD9M6iML3Aw06rh8vOcv4NHVUGcr6qOybWI52naJR4I%2Bag%2B6vuBICFOobxfCE8Hg4RMAY7PixADJOyYchGjYw8Phbd1Li6YnqE2Ud7h%2FNKVW%2BQZZkJRrWf0rVuLsfDfqWTUcZMOWEgMEGOqUBjHdZRGpV085epQAte2pkGEjiabKTa7uLrUrolc3dEeqEyvsjIf5x17H6zwCKYPqf8QEKZd%2FUmC1K913FIGaDj4GPO6bJp8gsWlMxGtvfl3PTGBKpZYS45Xyf4RrGU%2BacNXHd4Db%2BAZXbj5%2FP13duat4BcTZhFJT9cbwloiDqZ%2Foreg1hp9CwJJ%2B7DbZJkLFKKO6Cht6FF2hCc%2F5sviCtWyAhHzYN&X-Amz-Signature=e8f5c1db7abcf5207c4bd4050ad65605cc1d1c1573ab1ed8a559a560366dbd0a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQEXVO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAVtYq9F5N7csALzE3G1QWIxLrA%2BNSm6OnAi%2Bn6P85v1AiEArhaokjvQC7HY7J3md%2BdNbtpb7QNotXZcRvd0WLmVI0EqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgk2ZyFiJ5UUaXHzCrcA1DK7n04Z4AyRxXRFYSeHub2ySA%2FHrpq6Z%2FmOdFRE3Q%2F5CTvjL%2BEzD00JXNo7c74xLq83phyPI7V%2B5eQKvpdNDKwJWxVbfk4cjPDlXOJ6Bdu0HASfeyoIdIC34idf1TYi5c%2BGNYzJN5rvfTNwGVkJnwSeRILLNQTPt7mjZuoys9qiBjE9Z5gfALG4CvWogmQTvDz0kVU6gjqqSyUaS%2BmghAieJtta5vrc4WuUzVwegAR9g6GMrim2KPaq6g2blnen4Q7x0rCTkEzzIpuVUlElI%2BlZUU25xPwpcl24OPS%2BdJ7kOGqupLuIprzkM7d9A48HV2kk48AWqHCFXpaT1YqBL9DYsMC0SSsdw4%2Ffx5DRORlG39VfaFzFvwuxmQHpK5tlgpKRZB%2FpLFos6T9K4n%2Bu6ASxD3dS1B5mjF6oAWPdgb%2FTBoeGhJgzQGg9PnTJ9XmWdDZktP%2BgU1d1hEhbfzkEyDRc0j1tDLiHED%2Bz1HNuIvSArORk6ykRgqOD9M6iML3Aw06rh8vOcv4NHVUGcr6qOybWI52naJR4I%2Bag%2B6vuBICFOobxfCE8Hg4RMAY7PixADJOyYchGjYw8Phbd1Li6YnqE2Ud7h%2FNKVW%2BQZZkJRrWf0rVuLsfDfqWTUcZMOWEgMEGOqUBjHdZRGpV085epQAte2pkGEjiabKTa7uLrUrolc3dEeqEyvsjIf5x17H6zwCKYPqf8QEKZd%2FUmC1K913FIGaDj4GPO6bJp8gsWlMxGtvfl3PTGBKpZYS45Xyf4RrGU%2BacNXHd4Db%2BAZXbj5%2FP13duat4BcTZhFJT9cbwloiDqZ%2Foreg1hp9CwJJ%2B7DbZJkLFKKO6Cht6FF2hCc%2F5sviCtWyAhHzYN&X-Amz-Signature=6ad4f8a05d97f550e67721a7f5101c85db987a30d6bbbc3c0065820fbb12dec6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQEXVO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAVtYq9F5N7csALzE3G1QWIxLrA%2BNSm6OnAi%2Bn6P85v1AiEArhaokjvQC7HY7J3md%2BdNbtpb7QNotXZcRvd0WLmVI0EqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgk2ZyFiJ5UUaXHzCrcA1DK7n04Z4AyRxXRFYSeHub2ySA%2FHrpq6Z%2FmOdFRE3Q%2F5CTvjL%2BEzD00JXNo7c74xLq83phyPI7V%2B5eQKvpdNDKwJWxVbfk4cjPDlXOJ6Bdu0HASfeyoIdIC34idf1TYi5c%2BGNYzJN5rvfTNwGVkJnwSeRILLNQTPt7mjZuoys9qiBjE9Z5gfALG4CvWogmQTvDz0kVU6gjqqSyUaS%2BmghAieJtta5vrc4WuUzVwegAR9g6GMrim2KPaq6g2blnen4Q7x0rCTkEzzIpuVUlElI%2BlZUU25xPwpcl24OPS%2BdJ7kOGqupLuIprzkM7d9A48HV2kk48AWqHCFXpaT1YqBL9DYsMC0SSsdw4%2Ffx5DRORlG39VfaFzFvwuxmQHpK5tlgpKRZB%2FpLFos6T9K4n%2Bu6ASxD3dS1B5mjF6oAWPdgb%2FTBoeGhJgzQGg9PnTJ9XmWdDZktP%2BgU1d1hEhbfzkEyDRc0j1tDLiHED%2Bz1HNuIvSArORk6ykRgqOD9M6iML3Aw06rh8vOcv4NHVUGcr6qOybWI52naJR4I%2Bag%2B6vuBICFOobxfCE8Hg4RMAY7PixADJOyYchGjYw8Phbd1Li6YnqE2Ud7h%2FNKVW%2BQZZkJRrWf0rVuLsfDfqWTUcZMOWEgMEGOqUBjHdZRGpV085epQAte2pkGEjiabKTa7uLrUrolc3dEeqEyvsjIf5x17H6zwCKYPqf8QEKZd%2FUmC1K913FIGaDj4GPO6bJp8gsWlMxGtvfl3PTGBKpZYS45Xyf4RrGU%2BacNXHd4Db%2BAZXbj5%2FP13duat4BcTZhFJT9cbwloiDqZ%2Foreg1hp9CwJJ%2B7DbZJkLFKKO6Cht6FF2hCc%2F5sviCtWyAhHzYN&X-Amz-Signature=cb8c971128e9665803bb3bfb28f105bd291ce47af163ddc480550ee8f1a5c9df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQEXVO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAVtYq9F5N7csALzE3G1QWIxLrA%2BNSm6OnAi%2Bn6P85v1AiEArhaokjvQC7HY7J3md%2BdNbtpb7QNotXZcRvd0WLmVI0EqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgk2ZyFiJ5UUaXHzCrcA1DK7n04Z4AyRxXRFYSeHub2ySA%2FHrpq6Z%2FmOdFRE3Q%2F5CTvjL%2BEzD00JXNo7c74xLq83phyPI7V%2B5eQKvpdNDKwJWxVbfk4cjPDlXOJ6Bdu0HASfeyoIdIC34idf1TYi5c%2BGNYzJN5rvfTNwGVkJnwSeRILLNQTPt7mjZuoys9qiBjE9Z5gfALG4CvWogmQTvDz0kVU6gjqqSyUaS%2BmghAieJtta5vrc4WuUzVwegAR9g6GMrim2KPaq6g2blnen4Q7x0rCTkEzzIpuVUlElI%2BlZUU25xPwpcl24OPS%2BdJ7kOGqupLuIprzkM7d9A48HV2kk48AWqHCFXpaT1YqBL9DYsMC0SSsdw4%2Ffx5DRORlG39VfaFzFvwuxmQHpK5tlgpKRZB%2FpLFos6T9K4n%2Bu6ASxD3dS1B5mjF6oAWPdgb%2FTBoeGhJgzQGg9PnTJ9XmWdDZktP%2BgU1d1hEhbfzkEyDRc0j1tDLiHED%2Bz1HNuIvSArORk6ykRgqOD9M6iML3Aw06rh8vOcv4NHVUGcr6qOybWI52naJR4I%2Bag%2B6vuBICFOobxfCE8Hg4RMAY7PixADJOyYchGjYw8Phbd1Li6YnqE2Ud7h%2FNKVW%2BQZZkJRrWf0rVuLsfDfqWTUcZMOWEgMEGOqUBjHdZRGpV085epQAte2pkGEjiabKTa7uLrUrolc3dEeqEyvsjIf5x17H6zwCKYPqf8QEKZd%2FUmC1K913FIGaDj4GPO6bJp8gsWlMxGtvfl3PTGBKpZYS45Xyf4RrGU%2BacNXHd4Db%2BAZXbj5%2FP13duat4BcTZhFJT9cbwloiDqZ%2Foreg1hp9CwJJ%2B7DbZJkLFKKO6Cht6FF2hCc%2F5sviCtWyAhHzYN&X-Amz-Signature=82a882f48ccdb0ab2028bae7fb696be346cdacf74bc9cf5c7538768429743159&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQEXVO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAVtYq9F5N7csALzE3G1QWIxLrA%2BNSm6OnAi%2Bn6P85v1AiEArhaokjvQC7HY7J3md%2BdNbtpb7QNotXZcRvd0WLmVI0EqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgk2ZyFiJ5UUaXHzCrcA1DK7n04Z4AyRxXRFYSeHub2ySA%2FHrpq6Z%2FmOdFRE3Q%2F5CTvjL%2BEzD00JXNo7c74xLq83phyPI7V%2B5eQKvpdNDKwJWxVbfk4cjPDlXOJ6Bdu0HASfeyoIdIC34idf1TYi5c%2BGNYzJN5rvfTNwGVkJnwSeRILLNQTPt7mjZuoys9qiBjE9Z5gfALG4CvWogmQTvDz0kVU6gjqqSyUaS%2BmghAieJtta5vrc4WuUzVwegAR9g6GMrim2KPaq6g2blnen4Q7x0rCTkEzzIpuVUlElI%2BlZUU25xPwpcl24OPS%2BdJ7kOGqupLuIprzkM7d9A48HV2kk48AWqHCFXpaT1YqBL9DYsMC0SSsdw4%2Ffx5DRORlG39VfaFzFvwuxmQHpK5tlgpKRZB%2FpLFos6T9K4n%2Bu6ASxD3dS1B5mjF6oAWPdgb%2FTBoeGhJgzQGg9PnTJ9XmWdDZktP%2BgU1d1hEhbfzkEyDRc0j1tDLiHED%2Bz1HNuIvSArORk6ykRgqOD9M6iML3Aw06rh8vOcv4NHVUGcr6qOybWI52naJR4I%2Bag%2B6vuBICFOobxfCE8Hg4RMAY7PixADJOyYchGjYw8Phbd1Li6YnqE2Ud7h%2FNKVW%2BQZZkJRrWf0rVuLsfDfqWTUcZMOWEgMEGOqUBjHdZRGpV085epQAte2pkGEjiabKTa7uLrUrolc3dEeqEyvsjIf5x17H6zwCKYPqf8QEKZd%2FUmC1K913FIGaDj4GPO6bJp8gsWlMxGtvfl3PTGBKpZYS45Xyf4RrGU%2BacNXHd4Db%2BAZXbj5%2FP13duat4BcTZhFJT9cbwloiDqZ%2Foreg1hp9CwJJ%2B7DbZJkLFKKO6Cht6FF2hCc%2F5sviCtWyAhHzYN&X-Amz-Signature=d45a073919abe61cbcdba051c7060f7de62b85ebffa2acbcea1b6f58ef8ed39a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQEXVO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAVtYq9F5N7csALzE3G1QWIxLrA%2BNSm6OnAi%2Bn6P85v1AiEArhaokjvQC7HY7J3md%2BdNbtpb7QNotXZcRvd0WLmVI0EqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgk2ZyFiJ5UUaXHzCrcA1DK7n04Z4AyRxXRFYSeHub2ySA%2FHrpq6Z%2FmOdFRE3Q%2F5CTvjL%2BEzD00JXNo7c74xLq83phyPI7V%2B5eQKvpdNDKwJWxVbfk4cjPDlXOJ6Bdu0HASfeyoIdIC34idf1TYi5c%2BGNYzJN5rvfTNwGVkJnwSeRILLNQTPt7mjZuoys9qiBjE9Z5gfALG4CvWogmQTvDz0kVU6gjqqSyUaS%2BmghAieJtta5vrc4WuUzVwegAR9g6GMrim2KPaq6g2blnen4Q7x0rCTkEzzIpuVUlElI%2BlZUU25xPwpcl24OPS%2BdJ7kOGqupLuIprzkM7d9A48HV2kk48AWqHCFXpaT1YqBL9DYsMC0SSsdw4%2Ffx5DRORlG39VfaFzFvwuxmQHpK5tlgpKRZB%2FpLFos6T9K4n%2Bu6ASxD3dS1B5mjF6oAWPdgb%2FTBoeGhJgzQGg9PnTJ9XmWdDZktP%2BgU1d1hEhbfzkEyDRc0j1tDLiHED%2Bz1HNuIvSArORk6ykRgqOD9M6iML3Aw06rh8vOcv4NHVUGcr6qOybWI52naJR4I%2Bag%2B6vuBICFOobxfCE8Hg4RMAY7PixADJOyYchGjYw8Phbd1Li6YnqE2Ud7h%2FNKVW%2BQZZkJRrWf0rVuLsfDfqWTUcZMOWEgMEGOqUBjHdZRGpV085epQAte2pkGEjiabKTa7uLrUrolc3dEeqEyvsjIf5x17H6zwCKYPqf8QEKZd%2FUmC1K913FIGaDj4GPO6bJp8gsWlMxGtvfl3PTGBKpZYS45Xyf4RrGU%2BacNXHd4Db%2BAZXbj5%2FP13duat4BcTZhFJT9cbwloiDqZ%2Foreg1hp9CwJJ%2B7DbZJkLFKKO6Cht6FF2hCc%2F5sviCtWyAhHzYN&X-Amz-Signature=f7084a217b43263eface5374b87858f442e07ddbd6c71cc0c80aa3a590c8672e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
