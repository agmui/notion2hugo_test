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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QABGV3S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDsuiUyaMb2cdjIZ1yZqRMrdNiNmSBEkQy8BkwkoInWfwIhAMEi5juUTNVI8ZlyRFiFFERmKSAM6T%2FfpsiU8WZSR3yLKv8DCDQQABoMNjM3NDIzMTgzODA1IgwIDfmw%2FviiE5RLRJYq3APe3bNunTCqPj3Md%2F3fLO5JZnmg274VmRZghCvpDqIhzhisNOEuWfedSs80TAFXhHctMuKB7aIz9Kti1syTEaXy893690n815zTdR4vyRnbHua6TvCTVdX%2FFceaNFQTpN8k9KPagfwEdmTMbr0n5v9%2FIAltZooXM6vOQzHU0czsRPtXtbKeR5UICyQ28MjZiU8iSO7FXerjLQ8p1bit6QemiucGP1KsjVOpScEuvWb9ppKb%2FohdrGM8o16lqznfAPCCy7ps82U8Yslz130Ab19GRrTEX8Q%2FYjgtsyENZGajxiVOnNcgG%2FoAAZPCNEpyErPB5j%2BgtZUH074WRdar7MzoqlbydIt5EIv4DTS7VnnHw6IjjfEfsfyJDzkE7nujoTjLj3JS87G8ijdcgKWZw1waqlI3CYpyyTxo4Kh%2BDbMTSWRRN%2FPAACryMWpA%2F2PIXPL6DkGwzMU9apJOzG02BvjwJTYGpJS0zGqqe6B%2F8N8YCqKbrCGUs%2Fmn5lUoUdGBehOmc24ZVLLuPdefNLbUDDdl9Q3b0ozTCqRxYSUJmfIx%2BWD8inD7HZUZB1QIDSmWiX83Bd0jgJSsrIFwdLoy1cbui%2Fi%2FMfS%2Bqxrn0utFqFKZ%2B7pj7uZrwp7PwCo0UzCaydXPBjqkAXeg8BI1la3vTs%2Bd6QdqUaRoOD49dUWSej%2FeIugaEhE1OfcBKhmGjODoBUWdGM0qmGl05aPKnH1nVA6cQ93n3TELF3bd4Uaqu9W712NZ6%2FR08jaKIDXp7%2FXyOK1H2Bs51ccdADnLuM9K9o%2BeAbNG4I9C33bBJGKFZ%2BdisSjlHmNvNYYMI3pUst4SmQPfN%2FM%2FY9vjObxWGahD47hkibCqu4W7%2FhzL&X-Amz-Signature=2bf8f1bb65ab957bd6327e7fbe17c7e50cfaa6cf93d5c79d7ca0f43c1ef96a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QABGV3S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDsuiUyaMb2cdjIZ1yZqRMrdNiNmSBEkQy8BkwkoInWfwIhAMEi5juUTNVI8ZlyRFiFFERmKSAM6T%2FfpsiU8WZSR3yLKv8DCDQQABoMNjM3NDIzMTgzODA1IgwIDfmw%2FviiE5RLRJYq3APe3bNunTCqPj3Md%2F3fLO5JZnmg274VmRZghCvpDqIhzhisNOEuWfedSs80TAFXhHctMuKB7aIz9Kti1syTEaXy893690n815zTdR4vyRnbHua6TvCTVdX%2FFceaNFQTpN8k9KPagfwEdmTMbr0n5v9%2FIAltZooXM6vOQzHU0czsRPtXtbKeR5UICyQ28MjZiU8iSO7FXerjLQ8p1bit6QemiucGP1KsjVOpScEuvWb9ppKb%2FohdrGM8o16lqznfAPCCy7ps82U8Yslz130Ab19GRrTEX8Q%2FYjgtsyENZGajxiVOnNcgG%2FoAAZPCNEpyErPB5j%2BgtZUH074WRdar7MzoqlbydIt5EIv4DTS7VnnHw6IjjfEfsfyJDzkE7nujoTjLj3JS87G8ijdcgKWZw1waqlI3CYpyyTxo4Kh%2BDbMTSWRRN%2FPAACryMWpA%2F2PIXPL6DkGwzMU9apJOzG02BvjwJTYGpJS0zGqqe6B%2F8N8YCqKbrCGUs%2Fmn5lUoUdGBehOmc24ZVLLuPdefNLbUDDdl9Q3b0ozTCqRxYSUJmfIx%2BWD8inD7HZUZB1QIDSmWiX83Bd0jgJSsrIFwdLoy1cbui%2Fi%2FMfS%2Bqxrn0utFqFKZ%2B7pj7uZrwp7PwCo0UzCaydXPBjqkAXeg8BI1la3vTs%2Bd6QdqUaRoOD49dUWSej%2FeIugaEhE1OfcBKhmGjODoBUWdGM0qmGl05aPKnH1nVA6cQ93n3TELF3bd4Uaqu9W712NZ6%2FR08jaKIDXp7%2FXyOK1H2Bs51ccdADnLuM9K9o%2BeAbNG4I9C33bBJGKFZ%2BdisSjlHmNvNYYMI3pUst4SmQPfN%2FM%2FY9vjObxWGahD47hkibCqu4W7%2FhzL&X-Amz-Signature=c537d28bf19cc5f300b2b3632ceb9421ba0788ba2b0e7ea15de7dca82813c098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QABGV3S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDsuiUyaMb2cdjIZ1yZqRMrdNiNmSBEkQy8BkwkoInWfwIhAMEi5juUTNVI8ZlyRFiFFERmKSAM6T%2FfpsiU8WZSR3yLKv8DCDQQABoMNjM3NDIzMTgzODA1IgwIDfmw%2FviiE5RLRJYq3APe3bNunTCqPj3Md%2F3fLO5JZnmg274VmRZghCvpDqIhzhisNOEuWfedSs80TAFXhHctMuKB7aIz9Kti1syTEaXy893690n815zTdR4vyRnbHua6TvCTVdX%2FFceaNFQTpN8k9KPagfwEdmTMbr0n5v9%2FIAltZooXM6vOQzHU0czsRPtXtbKeR5UICyQ28MjZiU8iSO7FXerjLQ8p1bit6QemiucGP1KsjVOpScEuvWb9ppKb%2FohdrGM8o16lqznfAPCCy7ps82U8Yslz130Ab19GRrTEX8Q%2FYjgtsyENZGajxiVOnNcgG%2FoAAZPCNEpyErPB5j%2BgtZUH074WRdar7MzoqlbydIt5EIv4DTS7VnnHw6IjjfEfsfyJDzkE7nujoTjLj3JS87G8ijdcgKWZw1waqlI3CYpyyTxo4Kh%2BDbMTSWRRN%2FPAACryMWpA%2F2PIXPL6DkGwzMU9apJOzG02BvjwJTYGpJS0zGqqe6B%2F8N8YCqKbrCGUs%2Fmn5lUoUdGBehOmc24ZVLLuPdefNLbUDDdl9Q3b0ozTCqRxYSUJmfIx%2BWD8inD7HZUZB1QIDSmWiX83Bd0jgJSsrIFwdLoy1cbui%2Fi%2FMfS%2Bqxrn0utFqFKZ%2B7pj7uZrwp7PwCo0UzCaydXPBjqkAXeg8BI1la3vTs%2Bd6QdqUaRoOD49dUWSej%2FeIugaEhE1OfcBKhmGjODoBUWdGM0qmGl05aPKnH1nVA6cQ93n3TELF3bd4Uaqu9W712NZ6%2FR08jaKIDXp7%2FXyOK1H2Bs51ccdADnLuM9K9o%2BeAbNG4I9C33bBJGKFZ%2BdisSjlHmNvNYYMI3pUst4SmQPfN%2FM%2FY9vjObxWGahD47hkibCqu4W7%2FhzL&X-Amz-Signature=15fb57f5f6219f4baf3999b03e025ef8fef5bbaf18029fe0b3d0067f9eaf105f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QABGV3S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDsuiUyaMb2cdjIZ1yZqRMrdNiNmSBEkQy8BkwkoInWfwIhAMEi5juUTNVI8ZlyRFiFFERmKSAM6T%2FfpsiU8WZSR3yLKv8DCDQQABoMNjM3NDIzMTgzODA1IgwIDfmw%2FviiE5RLRJYq3APe3bNunTCqPj3Md%2F3fLO5JZnmg274VmRZghCvpDqIhzhisNOEuWfedSs80TAFXhHctMuKB7aIz9Kti1syTEaXy893690n815zTdR4vyRnbHua6TvCTVdX%2FFceaNFQTpN8k9KPagfwEdmTMbr0n5v9%2FIAltZooXM6vOQzHU0czsRPtXtbKeR5UICyQ28MjZiU8iSO7FXerjLQ8p1bit6QemiucGP1KsjVOpScEuvWb9ppKb%2FohdrGM8o16lqznfAPCCy7ps82U8Yslz130Ab19GRrTEX8Q%2FYjgtsyENZGajxiVOnNcgG%2FoAAZPCNEpyErPB5j%2BgtZUH074WRdar7MzoqlbydIt5EIv4DTS7VnnHw6IjjfEfsfyJDzkE7nujoTjLj3JS87G8ijdcgKWZw1waqlI3CYpyyTxo4Kh%2BDbMTSWRRN%2FPAACryMWpA%2F2PIXPL6DkGwzMU9apJOzG02BvjwJTYGpJS0zGqqe6B%2F8N8YCqKbrCGUs%2Fmn5lUoUdGBehOmc24ZVLLuPdefNLbUDDdl9Q3b0ozTCqRxYSUJmfIx%2BWD8inD7HZUZB1QIDSmWiX83Bd0jgJSsrIFwdLoy1cbui%2Fi%2FMfS%2Bqxrn0utFqFKZ%2B7pj7uZrwp7PwCo0UzCaydXPBjqkAXeg8BI1la3vTs%2Bd6QdqUaRoOD49dUWSej%2FeIugaEhE1OfcBKhmGjODoBUWdGM0qmGl05aPKnH1nVA6cQ93n3TELF3bd4Uaqu9W712NZ6%2FR08jaKIDXp7%2FXyOK1H2Bs51ccdADnLuM9K9o%2BeAbNG4I9C33bBJGKFZ%2BdisSjlHmNvNYYMI3pUst4SmQPfN%2FM%2FY9vjObxWGahD47hkibCqu4W7%2FhzL&X-Amz-Signature=7fec3cfb76a5da43c625ad8ce66fc0f6687d95e00cf4e56cd35c5603f9f17578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QABGV3S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDsuiUyaMb2cdjIZ1yZqRMrdNiNmSBEkQy8BkwkoInWfwIhAMEi5juUTNVI8ZlyRFiFFERmKSAM6T%2FfpsiU8WZSR3yLKv8DCDQQABoMNjM3NDIzMTgzODA1IgwIDfmw%2FviiE5RLRJYq3APe3bNunTCqPj3Md%2F3fLO5JZnmg274VmRZghCvpDqIhzhisNOEuWfedSs80TAFXhHctMuKB7aIz9Kti1syTEaXy893690n815zTdR4vyRnbHua6TvCTVdX%2FFceaNFQTpN8k9KPagfwEdmTMbr0n5v9%2FIAltZooXM6vOQzHU0czsRPtXtbKeR5UICyQ28MjZiU8iSO7FXerjLQ8p1bit6QemiucGP1KsjVOpScEuvWb9ppKb%2FohdrGM8o16lqznfAPCCy7ps82U8Yslz130Ab19GRrTEX8Q%2FYjgtsyENZGajxiVOnNcgG%2FoAAZPCNEpyErPB5j%2BgtZUH074WRdar7MzoqlbydIt5EIv4DTS7VnnHw6IjjfEfsfyJDzkE7nujoTjLj3JS87G8ijdcgKWZw1waqlI3CYpyyTxo4Kh%2BDbMTSWRRN%2FPAACryMWpA%2F2PIXPL6DkGwzMU9apJOzG02BvjwJTYGpJS0zGqqe6B%2F8N8YCqKbrCGUs%2Fmn5lUoUdGBehOmc24ZVLLuPdefNLbUDDdl9Q3b0ozTCqRxYSUJmfIx%2BWD8inD7HZUZB1QIDSmWiX83Bd0jgJSsrIFwdLoy1cbui%2Fi%2FMfS%2Bqxrn0utFqFKZ%2B7pj7uZrwp7PwCo0UzCaydXPBjqkAXeg8BI1la3vTs%2Bd6QdqUaRoOD49dUWSej%2FeIugaEhE1OfcBKhmGjODoBUWdGM0qmGl05aPKnH1nVA6cQ93n3TELF3bd4Uaqu9W712NZ6%2FR08jaKIDXp7%2FXyOK1H2Bs51ccdADnLuM9K9o%2BeAbNG4I9C33bBJGKFZ%2BdisSjlHmNvNYYMI3pUst4SmQPfN%2FM%2FY9vjObxWGahD47hkibCqu4W7%2FhzL&X-Amz-Signature=cfb4db28e87bd17d1f358f0a3934f31f8882cc249d765f3c7d77e8247467ac75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QABGV3S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDsuiUyaMb2cdjIZ1yZqRMrdNiNmSBEkQy8BkwkoInWfwIhAMEi5juUTNVI8ZlyRFiFFERmKSAM6T%2FfpsiU8WZSR3yLKv8DCDQQABoMNjM3NDIzMTgzODA1IgwIDfmw%2FviiE5RLRJYq3APe3bNunTCqPj3Md%2F3fLO5JZnmg274VmRZghCvpDqIhzhisNOEuWfedSs80TAFXhHctMuKB7aIz9Kti1syTEaXy893690n815zTdR4vyRnbHua6TvCTVdX%2FFceaNFQTpN8k9KPagfwEdmTMbr0n5v9%2FIAltZooXM6vOQzHU0czsRPtXtbKeR5UICyQ28MjZiU8iSO7FXerjLQ8p1bit6QemiucGP1KsjVOpScEuvWb9ppKb%2FohdrGM8o16lqznfAPCCy7ps82U8Yslz130Ab19GRrTEX8Q%2FYjgtsyENZGajxiVOnNcgG%2FoAAZPCNEpyErPB5j%2BgtZUH074WRdar7MzoqlbydIt5EIv4DTS7VnnHw6IjjfEfsfyJDzkE7nujoTjLj3JS87G8ijdcgKWZw1waqlI3CYpyyTxo4Kh%2BDbMTSWRRN%2FPAACryMWpA%2F2PIXPL6DkGwzMU9apJOzG02BvjwJTYGpJS0zGqqe6B%2F8N8YCqKbrCGUs%2Fmn5lUoUdGBehOmc24ZVLLuPdefNLbUDDdl9Q3b0ozTCqRxYSUJmfIx%2BWD8inD7HZUZB1QIDSmWiX83Bd0jgJSsrIFwdLoy1cbui%2Fi%2FMfS%2Bqxrn0utFqFKZ%2B7pj7uZrwp7PwCo0UzCaydXPBjqkAXeg8BI1la3vTs%2Bd6QdqUaRoOD49dUWSej%2FeIugaEhE1OfcBKhmGjODoBUWdGM0qmGl05aPKnH1nVA6cQ93n3TELF3bd4Uaqu9W712NZ6%2FR08jaKIDXp7%2FXyOK1H2Bs51ccdADnLuM9K9o%2BeAbNG4I9C33bBJGKFZ%2BdisSjlHmNvNYYMI3pUst4SmQPfN%2FM%2FY9vjObxWGahD47hkibCqu4W7%2FhzL&X-Amz-Signature=b4fdd3f30bab41a6035172eb22930294f6fb42f7fddff6289ece2c7d3baa7141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QABGV3S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDsuiUyaMb2cdjIZ1yZqRMrdNiNmSBEkQy8BkwkoInWfwIhAMEi5juUTNVI8ZlyRFiFFERmKSAM6T%2FfpsiU8WZSR3yLKv8DCDQQABoMNjM3NDIzMTgzODA1IgwIDfmw%2FviiE5RLRJYq3APe3bNunTCqPj3Md%2F3fLO5JZnmg274VmRZghCvpDqIhzhisNOEuWfedSs80TAFXhHctMuKB7aIz9Kti1syTEaXy893690n815zTdR4vyRnbHua6TvCTVdX%2FFceaNFQTpN8k9KPagfwEdmTMbr0n5v9%2FIAltZooXM6vOQzHU0czsRPtXtbKeR5UICyQ28MjZiU8iSO7FXerjLQ8p1bit6QemiucGP1KsjVOpScEuvWb9ppKb%2FohdrGM8o16lqznfAPCCy7ps82U8Yslz130Ab19GRrTEX8Q%2FYjgtsyENZGajxiVOnNcgG%2FoAAZPCNEpyErPB5j%2BgtZUH074WRdar7MzoqlbydIt5EIv4DTS7VnnHw6IjjfEfsfyJDzkE7nujoTjLj3JS87G8ijdcgKWZw1waqlI3CYpyyTxo4Kh%2BDbMTSWRRN%2FPAACryMWpA%2F2PIXPL6DkGwzMU9apJOzG02BvjwJTYGpJS0zGqqe6B%2F8N8YCqKbrCGUs%2Fmn5lUoUdGBehOmc24ZVLLuPdefNLbUDDdl9Q3b0ozTCqRxYSUJmfIx%2BWD8inD7HZUZB1QIDSmWiX83Bd0jgJSsrIFwdLoy1cbui%2Fi%2FMfS%2Bqxrn0utFqFKZ%2B7pj7uZrwp7PwCo0UzCaydXPBjqkAXeg8BI1la3vTs%2Bd6QdqUaRoOD49dUWSej%2FeIugaEhE1OfcBKhmGjODoBUWdGM0qmGl05aPKnH1nVA6cQ93n3TELF3bd4Uaqu9W712NZ6%2FR08jaKIDXp7%2FXyOK1H2Bs51ccdADnLuM9K9o%2BeAbNG4I9C33bBJGKFZ%2BdisSjlHmNvNYYMI3pUst4SmQPfN%2FM%2FY9vjObxWGahD47hkibCqu4W7%2FhzL&X-Amz-Signature=147f8af2f7d8632663cf5ad5209b1310c36fd3ecd33bbdc671d499b344205275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QABGV3S%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDsuiUyaMb2cdjIZ1yZqRMrdNiNmSBEkQy8BkwkoInWfwIhAMEi5juUTNVI8ZlyRFiFFERmKSAM6T%2FfpsiU8WZSR3yLKv8DCDQQABoMNjM3NDIzMTgzODA1IgwIDfmw%2FviiE5RLRJYq3APe3bNunTCqPj3Md%2F3fLO5JZnmg274VmRZghCvpDqIhzhisNOEuWfedSs80TAFXhHctMuKB7aIz9Kti1syTEaXy893690n815zTdR4vyRnbHua6TvCTVdX%2FFceaNFQTpN8k9KPagfwEdmTMbr0n5v9%2FIAltZooXM6vOQzHU0czsRPtXtbKeR5UICyQ28MjZiU8iSO7FXerjLQ8p1bit6QemiucGP1KsjVOpScEuvWb9ppKb%2FohdrGM8o16lqznfAPCCy7ps82U8Yslz130Ab19GRrTEX8Q%2FYjgtsyENZGajxiVOnNcgG%2FoAAZPCNEpyErPB5j%2BgtZUH074WRdar7MzoqlbydIt5EIv4DTS7VnnHw6IjjfEfsfyJDzkE7nujoTjLj3JS87G8ijdcgKWZw1waqlI3CYpyyTxo4Kh%2BDbMTSWRRN%2FPAACryMWpA%2F2PIXPL6DkGwzMU9apJOzG02BvjwJTYGpJS0zGqqe6B%2F8N8YCqKbrCGUs%2Fmn5lUoUdGBehOmc24ZVLLuPdefNLbUDDdl9Q3b0ozTCqRxYSUJmfIx%2BWD8inD7HZUZB1QIDSmWiX83Bd0jgJSsrIFwdLoy1cbui%2Fi%2FMfS%2Bqxrn0utFqFKZ%2B7pj7uZrwp7PwCo0UzCaydXPBjqkAXeg8BI1la3vTs%2Bd6QdqUaRoOD49dUWSej%2FeIugaEhE1OfcBKhmGjODoBUWdGM0qmGl05aPKnH1nVA6cQ93n3TELF3bd4Uaqu9W712NZ6%2FR08jaKIDXp7%2FXyOK1H2Bs51ccdADnLuM9K9o%2BeAbNG4I9C33bBJGKFZ%2BdisSjlHmNvNYYMI3pUst4SmQPfN%2FM%2FY9vjObxWGahD47hkibCqu4W7%2FhzL&X-Amz-Signature=100b8f0b853fff07f87bd01cc55ed7f17ec40b34bbd3aa1267de92198e857d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
