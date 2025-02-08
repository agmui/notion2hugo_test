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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2Q2M3T%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCbEYxEVfLsrHkaWVglbDdzsHmW8%2ByKmGq2yEHb0vNpQwIgILBZWpUc0%2FDDK3p8SG%2FqqMJ3rI9bPJInbrbx0R5AK0gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNDnuCJiygHJHPMtircA%2FWrDpUBe7wsaQy9sB7HiSlAwnMEoBwZc2aQQbwZckZ9MZKtDc8olH5gai1zFD4i%2BvVKN7YP5oh8wPmwp%2FzQ8BSW5vuawhwiJYHPcG%2BGBNstrjpeszTIFZoe4OsuPcLqZ2ss7Z%2BIyAEdzOOB8EHbyMMGuU1MY9kSdEsT1vLfuuDaBMSJS7fYN17%2F%2BFNGdXczI8onQAXqFdaACMA6SL4TT%2FAU0t2PC2NEWVPbtl8uzKzEKKnJdmjNOJtrrPCyeJyoyuJSyEcQ71M1FVXNQ3j9K3MMaopB4rLaZ0K66QB7ZIfeSPA7dcd6OTpjyTv%2BH5NfDOi%2FildHJT2SI4PgH9JotE0ozx7xOhDNhXf97NvAV0gYnzAz0URTGo8qTqm7ipz%2Bp8QzG16Pmt%2FtBVwkake5jCV3fv8ArBK2%2BQwvfpUhQ4fmWjtmjk3WiXmrpUKrLjU6LqHYdTRte6xOLWYgFtaDpjIPIrijBlvfP5GagzYKkPXCQ8iR9M4WxIsx%2Be0j6oVLSXR1v7LoKRuTB22g0DXE3FWkDzZaQN9anZz13gNak8iNX9MKHDWB3up0iVZb%2FucoXkh2U3zFrjmZOEdqClu%2BzGXcY2%2B86iQUASpnjnuUy4PMYZ1B9%2B%2FBlo0lSNtzMMmYn70GOqUBxj2HVsapob4bfmQxKqk59v1hScp3ipnvR%2FjtFMd8WdTQ6PqHJWq8It24oDxyblOnYU0c02JreHYT9mQrzj6STxddi33Nt%2FgCw1gp6fE%2BoqHThMjd5tob3N1QywGu31zDvSRKMwWXiPtM2fhne10uddpgajr6PfznYcIC1Fa7i35ELuMml6Hc0FIYTYArBmCYpduh3b1nszzXYm25tqOCz0J0emHD&X-Amz-Signature=d2ac166ee416c3743182988b8e2511e208a684c8862a9f152c9c7e249ab4d0b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2Q2M3T%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCbEYxEVfLsrHkaWVglbDdzsHmW8%2ByKmGq2yEHb0vNpQwIgILBZWpUc0%2FDDK3p8SG%2FqqMJ3rI9bPJInbrbx0R5AK0gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNDnuCJiygHJHPMtircA%2FWrDpUBe7wsaQy9sB7HiSlAwnMEoBwZc2aQQbwZckZ9MZKtDc8olH5gai1zFD4i%2BvVKN7YP5oh8wPmwp%2FzQ8BSW5vuawhwiJYHPcG%2BGBNstrjpeszTIFZoe4OsuPcLqZ2ss7Z%2BIyAEdzOOB8EHbyMMGuU1MY9kSdEsT1vLfuuDaBMSJS7fYN17%2F%2BFNGdXczI8onQAXqFdaACMA6SL4TT%2FAU0t2PC2NEWVPbtl8uzKzEKKnJdmjNOJtrrPCyeJyoyuJSyEcQ71M1FVXNQ3j9K3MMaopB4rLaZ0K66QB7ZIfeSPA7dcd6OTpjyTv%2BH5NfDOi%2FildHJT2SI4PgH9JotE0ozx7xOhDNhXf97NvAV0gYnzAz0URTGo8qTqm7ipz%2Bp8QzG16Pmt%2FtBVwkake5jCV3fv8ArBK2%2BQwvfpUhQ4fmWjtmjk3WiXmrpUKrLjU6LqHYdTRte6xOLWYgFtaDpjIPIrijBlvfP5GagzYKkPXCQ8iR9M4WxIsx%2Be0j6oVLSXR1v7LoKRuTB22g0DXE3FWkDzZaQN9anZz13gNak8iNX9MKHDWB3up0iVZb%2FucoXkh2U3zFrjmZOEdqClu%2BzGXcY2%2B86iQUASpnjnuUy4PMYZ1B9%2B%2FBlo0lSNtzMMmYn70GOqUBxj2HVsapob4bfmQxKqk59v1hScp3ipnvR%2FjtFMd8WdTQ6PqHJWq8It24oDxyblOnYU0c02JreHYT9mQrzj6STxddi33Nt%2FgCw1gp6fE%2BoqHThMjd5tob3N1QywGu31zDvSRKMwWXiPtM2fhne10uddpgajr6PfznYcIC1Fa7i35ELuMml6Hc0FIYTYArBmCYpduh3b1nszzXYm25tqOCz0J0emHD&X-Amz-Signature=c98978eda31a69eaac2b069ee982edd46b61c041ac3147db0dc5c7f259d1eec1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2Q2M3T%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCbEYxEVfLsrHkaWVglbDdzsHmW8%2ByKmGq2yEHb0vNpQwIgILBZWpUc0%2FDDK3p8SG%2FqqMJ3rI9bPJInbrbx0R5AK0gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNDnuCJiygHJHPMtircA%2FWrDpUBe7wsaQy9sB7HiSlAwnMEoBwZc2aQQbwZckZ9MZKtDc8olH5gai1zFD4i%2BvVKN7YP5oh8wPmwp%2FzQ8BSW5vuawhwiJYHPcG%2BGBNstrjpeszTIFZoe4OsuPcLqZ2ss7Z%2BIyAEdzOOB8EHbyMMGuU1MY9kSdEsT1vLfuuDaBMSJS7fYN17%2F%2BFNGdXczI8onQAXqFdaACMA6SL4TT%2FAU0t2PC2NEWVPbtl8uzKzEKKnJdmjNOJtrrPCyeJyoyuJSyEcQ71M1FVXNQ3j9K3MMaopB4rLaZ0K66QB7ZIfeSPA7dcd6OTpjyTv%2BH5NfDOi%2FildHJT2SI4PgH9JotE0ozx7xOhDNhXf97NvAV0gYnzAz0URTGo8qTqm7ipz%2Bp8QzG16Pmt%2FtBVwkake5jCV3fv8ArBK2%2BQwvfpUhQ4fmWjtmjk3WiXmrpUKrLjU6LqHYdTRte6xOLWYgFtaDpjIPIrijBlvfP5GagzYKkPXCQ8iR9M4WxIsx%2Be0j6oVLSXR1v7LoKRuTB22g0DXE3FWkDzZaQN9anZz13gNak8iNX9MKHDWB3up0iVZb%2FucoXkh2U3zFrjmZOEdqClu%2BzGXcY2%2B86iQUASpnjnuUy4PMYZ1B9%2B%2FBlo0lSNtzMMmYn70GOqUBxj2HVsapob4bfmQxKqk59v1hScp3ipnvR%2FjtFMd8WdTQ6PqHJWq8It24oDxyblOnYU0c02JreHYT9mQrzj6STxddi33Nt%2FgCw1gp6fE%2BoqHThMjd5tob3N1QywGu31zDvSRKMwWXiPtM2fhne10uddpgajr6PfznYcIC1Fa7i35ELuMml6Hc0FIYTYArBmCYpduh3b1nszzXYm25tqOCz0J0emHD&X-Amz-Signature=bae30f491d21b91b5a5bb58a87efa0b2fdd447bfe2debce4e8018c3f0a64fbd6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2Q2M3T%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCbEYxEVfLsrHkaWVglbDdzsHmW8%2ByKmGq2yEHb0vNpQwIgILBZWpUc0%2FDDK3p8SG%2FqqMJ3rI9bPJInbrbx0R5AK0gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNDnuCJiygHJHPMtircA%2FWrDpUBe7wsaQy9sB7HiSlAwnMEoBwZc2aQQbwZckZ9MZKtDc8olH5gai1zFD4i%2BvVKN7YP5oh8wPmwp%2FzQ8BSW5vuawhwiJYHPcG%2BGBNstrjpeszTIFZoe4OsuPcLqZ2ss7Z%2BIyAEdzOOB8EHbyMMGuU1MY9kSdEsT1vLfuuDaBMSJS7fYN17%2F%2BFNGdXczI8onQAXqFdaACMA6SL4TT%2FAU0t2PC2NEWVPbtl8uzKzEKKnJdmjNOJtrrPCyeJyoyuJSyEcQ71M1FVXNQ3j9K3MMaopB4rLaZ0K66QB7ZIfeSPA7dcd6OTpjyTv%2BH5NfDOi%2FildHJT2SI4PgH9JotE0ozx7xOhDNhXf97NvAV0gYnzAz0URTGo8qTqm7ipz%2Bp8QzG16Pmt%2FtBVwkake5jCV3fv8ArBK2%2BQwvfpUhQ4fmWjtmjk3WiXmrpUKrLjU6LqHYdTRte6xOLWYgFtaDpjIPIrijBlvfP5GagzYKkPXCQ8iR9M4WxIsx%2Be0j6oVLSXR1v7LoKRuTB22g0DXE3FWkDzZaQN9anZz13gNak8iNX9MKHDWB3up0iVZb%2FucoXkh2U3zFrjmZOEdqClu%2BzGXcY2%2B86iQUASpnjnuUy4PMYZ1B9%2B%2FBlo0lSNtzMMmYn70GOqUBxj2HVsapob4bfmQxKqk59v1hScp3ipnvR%2FjtFMd8WdTQ6PqHJWq8It24oDxyblOnYU0c02JreHYT9mQrzj6STxddi33Nt%2FgCw1gp6fE%2BoqHThMjd5tob3N1QywGu31zDvSRKMwWXiPtM2fhne10uddpgajr6PfznYcIC1Fa7i35ELuMml6Hc0FIYTYArBmCYpduh3b1nszzXYm25tqOCz0J0emHD&X-Amz-Signature=983bad0db2128eed06c9cbb3809c00ab95c2dd5ab96623d4fd404d1d0d97e368&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2Q2M3T%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCbEYxEVfLsrHkaWVglbDdzsHmW8%2ByKmGq2yEHb0vNpQwIgILBZWpUc0%2FDDK3p8SG%2FqqMJ3rI9bPJInbrbx0R5AK0gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNDnuCJiygHJHPMtircA%2FWrDpUBe7wsaQy9sB7HiSlAwnMEoBwZc2aQQbwZckZ9MZKtDc8olH5gai1zFD4i%2BvVKN7YP5oh8wPmwp%2FzQ8BSW5vuawhwiJYHPcG%2BGBNstrjpeszTIFZoe4OsuPcLqZ2ss7Z%2BIyAEdzOOB8EHbyMMGuU1MY9kSdEsT1vLfuuDaBMSJS7fYN17%2F%2BFNGdXczI8onQAXqFdaACMA6SL4TT%2FAU0t2PC2NEWVPbtl8uzKzEKKnJdmjNOJtrrPCyeJyoyuJSyEcQ71M1FVXNQ3j9K3MMaopB4rLaZ0K66QB7ZIfeSPA7dcd6OTpjyTv%2BH5NfDOi%2FildHJT2SI4PgH9JotE0ozx7xOhDNhXf97NvAV0gYnzAz0URTGo8qTqm7ipz%2Bp8QzG16Pmt%2FtBVwkake5jCV3fv8ArBK2%2BQwvfpUhQ4fmWjtmjk3WiXmrpUKrLjU6LqHYdTRte6xOLWYgFtaDpjIPIrijBlvfP5GagzYKkPXCQ8iR9M4WxIsx%2Be0j6oVLSXR1v7LoKRuTB22g0DXE3FWkDzZaQN9anZz13gNak8iNX9MKHDWB3up0iVZb%2FucoXkh2U3zFrjmZOEdqClu%2BzGXcY2%2B86iQUASpnjnuUy4PMYZ1B9%2B%2FBlo0lSNtzMMmYn70GOqUBxj2HVsapob4bfmQxKqk59v1hScp3ipnvR%2FjtFMd8WdTQ6PqHJWq8It24oDxyblOnYU0c02JreHYT9mQrzj6STxddi33Nt%2FgCw1gp6fE%2BoqHThMjd5tob3N1QywGu31zDvSRKMwWXiPtM2fhne10uddpgajr6PfznYcIC1Fa7i35ELuMml6Hc0FIYTYArBmCYpduh3b1nszzXYm25tqOCz0J0emHD&X-Amz-Signature=3f53ac31cdd7bb6a453f71d7623a508a994dc9444be30520e4c679ec88662340&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2Q2M3T%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCbEYxEVfLsrHkaWVglbDdzsHmW8%2ByKmGq2yEHb0vNpQwIgILBZWpUc0%2FDDK3p8SG%2FqqMJ3rI9bPJInbrbx0R5AK0gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNDnuCJiygHJHPMtircA%2FWrDpUBe7wsaQy9sB7HiSlAwnMEoBwZc2aQQbwZckZ9MZKtDc8olH5gai1zFD4i%2BvVKN7YP5oh8wPmwp%2FzQ8BSW5vuawhwiJYHPcG%2BGBNstrjpeszTIFZoe4OsuPcLqZ2ss7Z%2BIyAEdzOOB8EHbyMMGuU1MY9kSdEsT1vLfuuDaBMSJS7fYN17%2F%2BFNGdXczI8onQAXqFdaACMA6SL4TT%2FAU0t2PC2NEWVPbtl8uzKzEKKnJdmjNOJtrrPCyeJyoyuJSyEcQ71M1FVXNQ3j9K3MMaopB4rLaZ0K66QB7ZIfeSPA7dcd6OTpjyTv%2BH5NfDOi%2FildHJT2SI4PgH9JotE0ozx7xOhDNhXf97NvAV0gYnzAz0URTGo8qTqm7ipz%2Bp8QzG16Pmt%2FtBVwkake5jCV3fv8ArBK2%2BQwvfpUhQ4fmWjtmjk3WiXmrpUKrLjU6LqHYdTRte6xOLWYgFtaDpjIPIrijBlvfP5GagzYKkPXCQ8iR9M4WxIsx%2Be0j6oVLSXR1v7LoKRuTB22g0DXE3FWkDzZaQN9anZz13gNak8iNX9MKHDWB3up0iVZb%2FucoXkh2U3zFrjmZOEdqClu%2BzGXcY2%2B86iQUASpnjnuUy4PMYZ1B9%2B%2FBlo0lSNtzMMmYn70GOqUBxj2HVsapob4bfmQxKqk59v1hScp3ipnvR%2FjtFMd8WdTQ6PqHJWq8It24oDxyblOnYU0c02JreHYT9mQrzj6STxddi33Nt%2FgCw1gp6fE%2BoqHThMjd5tob3N1QywGu31zDvSRKMwWXiPtM2fhne10uddpgajr6PfznYcIC1Fa7i35ELuMml6Hc0FIYTYArBmCYpduh3b1nszzXYm25tqOCz0J0emHD&X-Amz-Signature=1e8bd60b28f4a2a965de5e5ca692aecb5ac4bd3e01b0ad5526257d684de86e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2Q2M3T%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCbEYxEVfLsrHkaWVglbDdzsHmW8%2ByKmGq2yEHb0vNpQwIgILBZWpUc0%2FDDK3p8SG%2FqqMJ3rI9bPJInbrbx0R5AK0gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNDnuCJiygHJHPMtircA%2FWrDpUBe7wsaQy9sB7HiSlAwnMEoBwZc2aQQbwZckZ9MZKtDc8olH5gai1zFD4i%2BvVKN7YP5oh8wPmwp%2FzQ8BSW5vuawhwiJYHPcG%2BGBNstrjpeszTIFZoe4OsuPcLqZ2ss7Z%2BIyAEdzOOB8EHbyMMGuU1MY9kSdEsT1vLfuuDaBMSJS7fYN17%2F%2BFNGdXczI8onQAXqFdaACMA6SL4TT%2FAU0t2PC2NEWVPbtl8uzKzEKKnJdmjNOJtrrPCyeJyoyuJSyEcQ71M1FVXNQ3j9K3MMaopB4rLaZ0K66QB7ZIfeSPA7dcd6OTpjyTv%2BH5NfDOi%2FildHJT2SI4PgH9JotE0ozx7xOhDNhXf97NvAV0gYnzAz0URTGo8qTqm7ipz%2Bp8QzG16Pmt%2FtBVwkake5jCV3fv8ArBK2%2BQwvfpUhQ4fmWjtmjk3WiXmrpUKrLjU6LqHYdTRte6xOLWYgFtaDpjIPIrijBlvfP5GagzYKkPXCQ8iR9M4WxIsx%2Be0j6oVLSXR1v7LoKRuTB22g0DXE3FWkDzZaQN9anZz13gNak8iNX9MKHDWB3up0iVZb%2FucoXkh2U3zFrjmZOEdqClu%2BzGXcY2%2B86iQUASpnjnuUy4PMYZ1B9%2B%2FBlo0lSNtzMMmYn70GOqUBxj2HVsapob4bfmQxKqk59v1hScp3ipnvR%2FjtFMd8WdTQ6PqHJWq8It24oDxyblOnYU0c02JreHYT9mQrzj6STxddi33Nt%2FgCw1gp6fE%2BoqHThMjd5tob3N1QywGu31zDvSRKMwWXiPtM2fhne10uddpgajr6PfznYcIC1Fa7i35ELuMml6Hc0FIYTYArBmCYpduh3b1nszzXYm25tqOCz0J0emHD&X-Amz-Signature=ecb3c2eb4cb433faf8bf88b6f9fa67e876c49909ad1d489c3d26ce76c5b1c62e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2Q2M3T%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCbEYxEVfLsrHkaWVglbDdzsHmW8%2ByKmGq2yEHb0vNpQwIgILBZWpUc0%2FDDK3p8SG%2FqqMJ3rI9bPJInbrbx0R5AK0gqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNDnuCJiygHJHPMtircA%2FWrDpUBe7wsaQy9sB7HiSlAwnMEoBwZc2aQQbwZckZ9MZKtDc8olH5gai1zFD4i%2BvVKN7YP5oh8wPmwp%2FzQ8BSW5vuawhwiJYHPcG%2BGBNstrjpeszTIFZoe4OsuPcLqZ2ss7Z%2BIyAEdzOOB8EHbyMMGuU1MY9kSdEsT1vLfuuDaBMSJS7fYN17%2F%2BFNGdXczI8onQAXqFdaACMA6SL4TT%2FAU0t2PC2NEWVPbtl8uzKzEKKnJdmjNOJtrrPCyeJyoyuJSyEcQ71M1FVXNQ3j9K3MMaopB4rLaZ0K66QB7ZIfeSPA7dcd6OTpjyTv%2BH5NfDOi%2FildHJT2SI4PgH9JotE0ozx7xOhDNhXf97NvAV0gYnzAz0URTGo8qTqm7ipz%2Bp8QzG16Pmt%2FtBVwkake5jCV3fv8ArBK2%2BQwvfpUhQ4fmWjtmjk3WiXmrpUKrLjU6LqHYdTRte6xOLWYgFtaDpjIPIrijBlvfP5GagzYKkPXCQ8iR9M4WxIsx%2Be0j6oVLSXR1v7LoKRuTB22g0DXE3FWkDzZaQN9anZz13gNak8iNX9MKHDWB3up0iVZb%2FucoXkh2U3zFrjmZOEdqClu%2BzGXcY2%2B86iQUASpnjnuUy4PMYZ1B9%2B%2FBlo0lSNtzMMmYn70GOqUBxj2HVsapob4bfmQxKqk59v1hScp3ipnvR%2FjtFMd8WdTQ6PqHJWq8It24oDxyblOnYU0c02JreHYT9mQrzj6STxddi33Nt%2FgCw1gp6fE%2BoqHThMjd5tob3N1QywGu31zDvSRKMwWXiPtM2fhne10uddpgajr6PfznYcIC1Fa7i35ELuMml6Hc0FIYTYArBmCYpduh3b1nszzXYm25tqOCz0J0emHD&X-Amz-Signature=7c3433cb398108aff427b9746fc94f63d7fe0559ac280d53a69e9ae3318268d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
