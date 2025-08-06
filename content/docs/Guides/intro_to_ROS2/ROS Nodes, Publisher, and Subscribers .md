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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FB43D2D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC4DK%2BVw%2FMJVSNBRBY3ldpXM2v3fMYqGnwEHW5245HY5gIgBu2YKOHOQ4bHXwNnCSS0E75I3%2BUWSrlPGmFrYuWhZisq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHlfKRrCVmlAVS8TJCrcA7%2BdlBbCC0MyfPdi%2B7lH4usFTMi6INdBIuzd1pLieHQFKXvbzNGm1yKbPFwf7y%2BT6PnmtrKDqO%2FReFypitJBEHBJ6MYE8JderSM1c8x39AGHuPwOqLeACXQ5HN5tm8O23gYnJn9u3XgxQUh0EXEFWKQPpID8ZgrqNp89vskoB0MWZYB3Bw456mxjxb7M1sjiAMzZvEAKXNWc7humYgELgZjQ4jl%2FMIE0M0R0cLbKdKzoTnhlfNSb0btcS%2Fjlx9JNstt2xuGMj9Y5eFw281qlFTqCrdygJPOvd8F%2Bj5NSExAWmoEfgV1voLusm%2Bt9ZGVj9Q8TuBABXxwo7qlTxLYqwjxTcWU91EtbJ67jTOGEZJeTC5UYdbkopGb%2BuJcgGsw5T8XWgUvhj17ZLiBn9m3ujADWTAyoJ974Y0pgpquktDKcJILCA3AI7XLv0tbTJt1%2FLuNzvzB4rYUFrPuxVJN5cYxv%2FoeZ0XzXKbXJJEV5N5q5P1ky8utTZkzSStxQoiWfXQGOSuCsiwFmaIzwG8qAyvCGMq76x9tYzPf7XDwmPf4ht%2BYUXZs9sHiCF82Uv0WRTlwN%2FPv3kFdx7ZzT64WQFW50JGB%2Fpckm5geA3JSMRVbSuNCuwFPCk2UhZCkGMKWOz8QGOqUBVNNEGvXjWDWo7Vi5HcRXa7wbV9FjB6rPzHi%2FyRwsGONeFe8jIyBq8Q6%2Fu9dL2VDXzZ4BoBcH623cI%2BYj42MqamtY%2FAtfWOm5FdDNLDi4RMqzUDb2a7zYngysemFkXa%2FSgFqUrG8qGtkavEbkZQ%2BQE72ZYnGmwjkzGCuJ%2BW%2Ba1IqQo5Yrg0ZM5ghI6r1yWV9Ryfspzr3kgIDf9CZE2AQzjq5Au6fD&X-Amz-Signature=b44ede982f528ac7176f59e9a3ba612a537a50240bc526b94c89613a61ce3294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FB43D2D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC4DK%2BVw%2FMJVSNBRBY3ldpXM2v3fMYqGnwEHW5245HY5gIgBu2YKOHOQ4bHXwNnCSS0E75I3%2BUWSrlPGmFrYuWhZisq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHlfKRrCVmlAVS8TJCrcA7%2BdlBbCC0MyfPdi%2B7lH4usFTMi6INdBIuzd1pLieHQFKXvbzNGm1yKbPFwf7y%2BT6PnmtrKDqO%2FReFypitJBEHBJ6MYE8JderSM1c8x39AGHuPwOqLeACXQ5HN5tm8O23gYnJn9u3XgxQUh0EXEFWKQPpID8ZgrqNp89vskoB0MWZYB3Bw456mxjxb7M1sjiAMzZvEAKXNWc7humYgELgZjQ4jl%2FMIE0M0R0cLbKdKzoTnhlfNSb0btcS%2Fjlx9JNstt2xuGMj9Y5eFw281qlFTqCrdygJPOvd8F%2Bj5NSExAWmoEfgV1voLusm%2Bt9ZGVj9Q8TuBABXxwo7qlTxLYqwjxTcWU91EtbJ67jTOGEZJeTC5UYdbkopGb%2BuJcgGsw5T8XWgUvhj17ZLiBn9m3ujADWTAyoJ974Y0pgpquktDKcJILCA3AI7XLv0tbTJt1%2FLuNzvzB4rYUFrPuxVJN5cYxv%2FoeZ0XzXKbXJJEV5N5q5P1ky8utTZkzSStxQoiWfXQGOSuCsiwFmaIzwG8qAyvCGMq76x9tYzPf7XDwmPf4ht%2BYUXZs9sHiCF82Uv0WRTlwN%2FPv3kFdx7ZzT64WQFW50JGB%2Fpckm5geA3JSMRVbSuNCuwFPCk2UhZCkGMKWOz8QGOqUBVNNEGvXjWDWo7Vi5HcRXa7wbV9FjB6rPzHi%2FyRwsGONeFe8jIyBq8Q6%2Fu9dL2VDXzZ4BoBcH623cI%2BYj42MqamtY%2FAtfWOm5FdDNLDi4RMqzUDb2a7zYngysemFkXa%2FSgFqUrG8qGtkavEbkZQ%2BQE72ZYnGmwjkzGCuJ%2BW%2Ba1IqQo5Yrg0ZM5ghI6r1yWV9Ryfspzr3kgIDf9CZE2AQzjq5Au6fD&X-Amz-Signature=72101c2f5fbf8ec0b5cb8768be54d209305f88969abb65a914a3efdcaaf90ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FB43D2D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC4DK%2BVw%2FMJVSNBRBY3ldpXM2v3fMYqGnwEHW5245HY5gIgBu2YKOHOQ4bHXwNnCSS0E75I3%2BUWSrlPGmFrYuWhZisq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHlfKRrCVmlAVS8TJCrcA7%2BdlBbCC0MyfPdi%2B7lH4usFTMi6INdBIuzd1pLieHQFKXvbzNGm1yKbPFwf7y%2BT6PnmtrKDqO%2FReFypitJBEHBJ6MYE8JderSM1c8x39AGHuPwOqLeACXQ5HN5tm8O23gYnJn9u3XgxQUh0EXEFWKQPpID8ZgrqNp89vskoB0MWZYB3Bw456mxjxb7M1sjiAMzZvEAKXNWc7humYgELgZjQ4jl%2FMIE0M0R0cLbKdKzoTnhlfNSb0btcS%2Fjlx9JNstt2xuGMj9Y5eFw281qlFTqCrdygJPOvd8F%2Bj5NSExAWmoEfgV1voLusm%2Bt9ZGVj9Q8TuBABXxwo7qlTxLYqwjxTcWU91EtbJ67jTOGEZJeTC5UYdbkopGb%2BuJcgGsw5T8XWgUvhj17ZLiBn9m3ujADWTAyoJ974Y0pgpquktDKcJILCA3AI7XLv0tbTJt1%2FLuNzvzB4rYUFrPuxVJN5cYxv%2FoeZ0XzXKbXJJEV5N5q5P1ky8utTZkzSStxQoiWfXQGOSuCsiwFmaIzwG8qAyvCGMq76x9tYzPf7XDwmPf4ht%2BYUXZs9sHiCF82Uv0WRTlwN%2FPv3kFdx7ZzT64WQFW50JGB%2Fpckm5geA3JSMRVbSuNCuwFPCk2UhZCkGMKWOz8QGOqUBVNNEGvXjWDWo7Vi5HcRXa7wbV9FjB6rPzHi%2FyRwsGONeFe8jIyBq8Q6%2Fu9dL2VDXzZ4BoBcH623cI%2BYj42MqamtY%2FAtfWOm5FdDNLDi4RMqzUDb2a7zYngysemFkXa%2FSgFqUrG8qGtkavEbkZQ%2BQE72ZYnGmwjkzGCuJ%2BW%2Ba1IqQo5Yrg0ZM5ghI6r1yWV9Ryfspzr3kgIDf9CZE2AQzjq5Au6fD&X-Amz-Signature=96464f69313b11ab8b1fea569fd03b4bcb5f9380b735320d0be2499b248c920c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FB43D2D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC4DK%2BVw%2FMJVSNBRBY3ldpXM2v3fMYqGnwEHW5245HY5gIgBu2YKOHOQ4bHXwNnCSS0E75I3%2BUWSrlPGmFrYuWhZisq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHlfKRrCVmlAVS8TJCrcA7%2BdlBbCC0MyfPdi%2B7lH4usFTMi6INdBIuzd1pLieHQFKXvbzNGm1yKbPFwf7y%2BT6PnmtrKDqO%2FReFypitJBEHBJ6MYE8JderSM1c8x39AGHuPwOqLeACXQ5HN5tm8O23gYnJn9u3XgxQUh0EXEFWKQPpID8ZgrqNp89vskoB0MWZYB3Bw456mxjxb7M1sjiAMzZvEAKXNWc7humYgELgZjQ4jl%2FMIE0M0R0cLbKdKzoTnhlfNSb0btcS%2Fjlx9JNstt2xuGMj9Y5eFw281qlFTqCrdygJPOvd8F%2Bj5NSExAWmoEfgV1voLusm%2Bt9ZGVj9Q8TuBABXxwo7qlTxLYqwjxTcWU91EtbJ67jTOGEZJeTC5UYdbkopGb%2BuJcgGsw5T8XWgUvhj17ZLiBn9m3ujADWTAyoJ974Y0pgpquktDKcJILCA3AI7XLv0tbTJt1%2FLuNzvzB4rYUFrPuxVJN5cYxv%2FoeZ0XzXKbXJJEV5N5q5P1ky8utTZkzSStxQoiWfXQGOSuCsiwFmaIzwG8qAyvCGMq76x9tYzPf7XDwmPf4ht%2BYUXZs9sHiCF82Uv0WRTlwN%2FPv3kFdx7ZzT64WQFW50JGB%2Fpckm5geA3JSMRVbSuNCuwFPCk2UhZCkGMKWOz8QGOqUBVNNEGvXjWDWo7Vi5HcRXa7wbV9FjB6rPzHi%2FyRwsGONeFe8jIyBq8Q6%2Fu9dL2VDXzZ4BoBcH623cI%2BYj42MqamtY%2FAtfWOm5FdDNLDi4RMqzUDb2a7zYngysemFkXa%2FSgFqUrG8qGtkavEbkZQ%2BQE72ZYnGmwjkzGCuJ%2BW%2Ba1IqQo5Yrg0ZM5ghI6r1yWV9Ryfspzr3kgIDf9CZE2AQzjq5Au6fD&X-Amz-Signature=aa17a52ff0a9885648760455dda4d7ef3b152c1e78f69d1ffed8fc623fc69c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FB43D2D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC4DK%2BVw%2FMJVSNBRBY3ldpXM2v3fMYqGnwEHW5245HY5gIgBu2YKOHOQ4bHXwNnCSS0E75I3%2BUWSrlPGmFrYuWhZisq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHlfKRrCVmlAVS8TJCrcA7%2BdlBbCC0MyfPdi%2B7lH4usFTMi6INdBIuzd1pLieHQFKXvbzNGm1yKbPFwf7y%2BT6PnmtrKDqO%2FReFypitJBEHBJ6MYE8JderSM1c8x39AGHuPwOqLeACXQ5HN5tm8O23gYnJn9u3XgxQUh0EXEFWKQPpID8ZgrqNp89vskoB0MWZYB3Bw456mxjxb7M1sjiAMzZvEAKXNWc7humYgELgZjQ4jl%2FMIE0M0R0cLbKdKzoTnhlfNSb0btcS%2Fjlx9JNstt2xuGMj9Y5eFw281qlFTqCrdygJPOvd8F%2Bj5NSExAWmoEfgV1voLusm%2Bt9ZGVj9Q8TuBABXxwo7qlTxLYqwjxTcWU91EtbJ67jTOGEZJeTC5UYdbkopGb%2BuJcgGsw5T8XWgUvhj17ZLiBn9m3ujADWTAyoJ974Y0pgpquktDKcJILCA3AI7XLv0tbTJt1%2FLuNzvzB4rYUFrPuxVJN5cYxv%2FoeZ0XzXKbXJJEV5N5q5P1ky8utTZkzSStxQoiWfXQGOSuCsiwFmaIzwG8qAyvCGMq76x9tYzPf7XDwmPf4ht%2BYUXZs9sHiCF82Uv0WRTlwN%2FPv3kFdx7ZzT64WQFW50JGB%2Fpckm5geA3JSMRVbSuNCuwFPCk2UhZCkGMKWOz8QGOqUBVNNEGvXjWDWo7Vi5HcRXa7wbV9FjB6rPzHi%2FyRwsGONeFe8jIyBq8Q6%2Fu9dL2VDXzZ4BoBcH623cI%2BYj42MqamtY%2FAtfWOm5FdDNLDi4RMqzUDb2a7zYngysemFkXa%2FSgFqUrG8qGtkavEbkZQ%2BQE72ZYnGmwjkzGCuJ%2BW%2Ba1IqQo5Yrg0ZM5ghI6r1yWV9Ryfspzr3kgIDf9CZE2AQzjq5Au6fD&X-Amz-Signature=84dcce98b61bfe1f8c40936e75c132c25fc5a4337fc3005eaa225c2a1e917885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FB43D2D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC4DK%2BVw%2FMJVSNBRBY3ldpXM2v3fMYqGnwEHW5245HY5gIgBu2YKOHOQ4bHXwNnCSS0E75I3%2BUWSrlPGmFrYuWhZisq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHlfKRrCVmlAVS8TJCrcA7%2BdlBbCC0MyfPdi%2B7lH4usFTMi6INdBIuzd1pLieHQFKXvbzNGm1yKbPFwf7y%2BT6PnmtrKDqO%2FReFypitJBEHBJ6MYE8JderSM1c8x39AGHuPwOqLeACXQ5HN5tm8O23gYnJn9u3XgxQUh0EXEFWKQPpID8ZgrqNp89vskoB0MWZYB3Bw456mxjxb7M1sjiAMzZvEAKXNWc7humYgELgZjQ4jl%2FMIE0M0R0cLbKdKzoTnhlfNSb0btcS%2Fjlx9JNstt2xuGMj9Y5eFw281qlFTqCrdygJPOvd8F%2Bj5NSExAWmoEfgV1voLusm%2Bt9ZGVj9Q8TuBABXxwo7qlTxLYqwjxTcWU91EtbJ67jTOGEZJeTC5UYdbkopGb%2BuJcgGsw5T8XWgUvhj17ZLiBn9m3ujADWTAyoJ974Y0pgpquktDKcJILCA3AI7XLv0tbTJt1%2FLuNzvzB4rYUFrPuxVJN5cYxv%2FoeZ0XzXKbXJJEV5N5q5P1ky8utTZkzSStxQoiWfXQGOSuCsiwFmaIzwG8qAyvCGMq76x9tYzPf7XDwmPf4ht%2BYUXZs9sHiCF82Uv0WRTlwN%2FPv3kFdx7ZzT64WQFW50JGB%2Fpckm5geA3JSMRVbSuNCuwFPCk2UhZCkGMKWOz8QGOqUBVNNEGvXjWDWo7Vi5HcRXa7wbV9FjB6rPzHi%2FyRwsGONeFe8jIyBq8Q6%2Fu9dL2VDXzZ4BoBcH623cI%2BYj42MqamtY%2FAtfWOm5FdDNLDi4RMqzUDb2a7zYngysemFkXa%2FSgFqUrG8qGtkavEbkZQ%2BQE72ZYnGmwjkzGCuJ%2BW%2Ba1IqQo5Yrg0ZM5ghI6r1yWV9Ryfspzr3kgIDf9CZE2AQzjq5Au6fD&X-Amz-Signature=53b9904766500e3d223480878fb80e1c0a86128ff97a43aa626fb951c9ba88b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FB43D2D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC4DK%2BVw%2FMJVSNBRBY3ldpXM2v3fMYqGnwEHW5245HY5gIgBu2YKOHOQ4bHXwNnCSS0E75I3%2BUWSrlPGmFrYuWhZisq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHlfKRrCVmlAVS8TJCrcA7%2BdlBbCC0MyfPdi%2B7lH4usFTMi6INdBIuzd1pLieHQFKXvbzNGm1yKbPFwf7y%2BT6PnmtrKDqO%2FReFypitJBEHBJ6MYE8JderSM1c8x39AGHuPwOqLeACXQ5HN5tm8O23gYnJn9u3XgxQUh0EXEFWKQPpID8ZgrqNp89vskoB0MWZYB3Bw456mxjxb7M1sjiAMzZvEAKXNWc7humYgELgZjQ4jl%2FMIE0M0R0cLbKdKzoTnhlfNSb0btcS%2Fjlx9JNstt2xuGMj9Y5eFw281qlFTqCrdygJPOvd8F%2Bj5NSExAWmoEfgV1voLusm%2Bt9ZGVj9Q8TuBABXxwo7qlTxLYqwjxTcWU91EtbJ67jTOGEZJeTC5UYdbkopGb%2BuJcgGsw5T8XWgUvhj17ZLiBn9m3ujADWTAyoJ974Y0pgpquktDKcJILCA3AI7XLv0tbTJt1%2FLuNzvzB4rYUFrPuxVJN5cYxv%2FoeZ0XzXKbXJJEV5N5q5P1ky8utTZkzSStxQoiWfXQGOSuCsiwFmaIzwG8qAyvCGMq76x9tYzPf7XDwmPf4ht%2BYUXZs9sHiCF82Uv0WRTlwN%2FPv3kFdx7ZzT64WQFW50JGB%2Fpckm5geA3JSMRVbSuNCuwFPCk2UhZCkGMKWOz8QGOqUBVNNEGvXjWDWo7Vi5HcRXa7wbV9FjB6rPzHi%2FyRwsGONeFe8jIyBq8Q6%2Fu9dL2VDXzZ4BoBcH623cI%2BYj42MqamtY%2FAtfWOm5FdDNLDi4RMqzUDb2a7zYngysemFkXa%2FSgFqUrG8qGtkavEbkZQ%2BQE72ZYnGmwjkzGCuJ%2BW%2Ba1IqQo5Yrg0ZM5ghI6r1yWV9Ryfspzr3kgIDf9CZE2AQzjq5Au6fD&X-Amz-Signature=37aec948a064b5487d992f67b654c2c86dbe0583b186131518e99f7ea6ea8348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FB43D2D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC4DK%2BVw%2FMJVSNBRBY3ldpXM2v3fMYqGnwEHW5245HY5gIgBu2YKOHOQ4bHXwNnCSS0E75I3%2BUWSrlPGmFrYuWhZisq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHlfKRrCVmlAVS8TJCrcA7%2BdlBbCC0MyfPdi%2B7lH4usFTMi6INdBIuzd1pLieHQFKXvbzNGm1yKbPFwf7y%2BT6PnmtrKDqO%2FReFypitJBEHBJ6MYE8JderSM1c8x39AGHuPwOqLeACXQ5HN5tm8O23gYnJn9u3XgxQUh0EXEFWKQPpID8ZgrqNp89vskoB0MWZYB3Bw456mxjxb7M1sjiAMzZvEAKXNWc7humYgELgZjQ4jl%2FMIE0M0R0cLbKdKzoTnhlfNSb0btcS%2Fjlx9JNstt2xuGMj9Y5eFw281qlFTqCrdygJPOvd8F%2Bj5NSExAWmoEfgV1voLusm%2Bt9ZGVj9Q8TuBABXxwo7qlTxLYqwjxTcWU91EtbJ67jTOGEZJeTC5UYdbkopGb%2BuJcgGsw5T8XWgUvhj17ZLiBn9m3ujADWTAyoJ974Y0pgpquktDKcJILCA3AI7XLv0tbTJt1%2FLuNzvzB4rYUFrPuxVJN5cYxv%2FoeZ0XzXKbXJJEV5N5q5P1ky8utTZkzSStxQoiWfXQGOSuCsiwFmaIzwG8qAyvCGMq76x9tYzPf7XDwmPf4ht%2BYUXZs9sHiCF82Uv0WRTlwN%2FPv3kFdx7ZzT64WQFW50JGB%2Fpckm5geA3JSMRVbSuNCuwFPCk2UhZCkGMKWOz8QGOqUBVNNEGvXjWDWo7Vi5HcRXa7wbV9FjB6rPzHi%2FyRwsGONeFe8jIyBq8Q6%2Fu9dL2VDXzZ4BoBcH623cI%2BYj42MqamtY%2FAtfWOm5FdDNLDi4RMqzUDb2a7zYngysemFkXa%2FSgFqUrG8qGtkavEbkZQ%2BQE72ZYnGmwjkzGCuJ%2BW%2Ba1IqQo5Yrg0ZM5ghI6r1yWV9Ryfspzr3kgIDf9CZE2AQzjq5Au6fD&X-Amz-Signature=3a7ba0f2f398c1dca95d88feef4d65e247e83f60d7736ef66efe58fbdddba74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
