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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEKXAYA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGT2GL%2FXN5CXYJLItorsfa06FkzTwacUN6KV%2B%2FhmyKN%2FAiAdsnhlcVWIh5HL3jyTmBCMNm%2B6%2F%2BU842MCC625%2Fzh%2BayqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHujbliXrsLQV9XysKtwDfh40wyqBoUQD6WEg2DV3FGraFElHMTpm4HI6QFx136RAwBZrD%2BkQk1gfklTV%2BUh93SIJUQM%2FDD8AdtbSRiZZA6n1CzxeBqbi9ayXhkVmq6xwT9YTqDfn6X%2BksdpDXN0PtEk0l9cpBYqf9HZROV%2FizkrHLPPmasAJRs%2BpbdfPumqGpFXXhcPcUQbAw1y6zqd%2FbYj0MmWRZATKbcTSZrjYahfV%2FdgD9T86huBi3WjOcj3N0IekHSkndijyfPU21vt%2FSJv2P0FT91LAtuBBkN8g7saRCgXdhCOf8jKKxeKsWnXeJU1zpk9gsM5NATKNIeTqGY%2ByFaHV0DV20h%2BsQp4Z3rMwCrkU2sErABjn6U97Ai33kT1iqVxW5%2F6EKh27wlVV%2FEJMgo5%2BVnXXE%2FqB1oMd1kCPY9K7ju7G%2BTzhxvA2vDjRMvIPkNkd7hqoSJLm6efGkHnX%2Bj%2B1Xjhe4IjcXy2hgFc8BWw38VEh4isxXziNcjueRPReS7YX07Xoo6CXHYLheBMl38IlVeSftLpl0aXwCKlaxhJUqnFF%2BUAjcUp436Zjq3vKgcjvAWSNdCvmdXlW3REvPDCP94A33DvPEBSDKVs6DsiQ8x0dMDFhkXiRHCWGx%2Fn61y4XA96TkUIw0cq7vgY6pgFyFfNdf4Y6mOOKtNQ2f%2BLSBRHsL6hee3wWw57hu75PZH6RIklfyEQ%2F4PiYD4sPIH687J9vqVvGuD8LUUGCgI7MpiowqkUK5mNpItYr0W0MHTZHK6ZLLbPSaz2HysnQKqhsogMWVESOGBC%2F53jzzZcIgokdGca%2Bxnc%2B1mVOvw5Qf1kiSkBs19AVADXy69qTLKZTxUyDYWoEWgchKO8f9jFSP17ALA%2B8&X-Amz-Signature=4611113c634f1f02c03a7fe0bf59db9be975708e490ee33aeeadf38f3a90bc95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEKXAYA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGT2GL%2FXN5CXYJLItorsfa06FkzTwacUN6KV%2B%2FhmyKN%2FAiAdsnhlcVWIh5HL3jyTmBCMNm%2B6%2F%2BU842MCC625%2Fzh%2BayqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHujbliXrsLQV9XysKtwDfh40wyqBoUQD6WEg2DV3FGraFElHMTpm4HI6QFx136RAwBZrD%2BkQk1gfklTV%2BUh93SIJUQM%2FDD8AdtbSRiZZA6n1CzxeBqbi9ayXhkVmq6xwT9YTqDfn6X%2BksdpDXN0PtEk0l9cpBYqf9HZROV%2FizkrHLPPmasAJRs%2BpbdfPumqGpFXXhcPcUQbAw1y6zqd%2FbYj0MmWRZATKbcTSZrjYahfV%2FdgD9T86huBi3WjOcj3N0IekHSkndijyfPU21vt%2FSJv2P0FT91LAtuBBkN8g7saRCgXdhCOf8jKKxeKsWnXeJU1zpk9gsM5NATKNIeTqGY%2ByFaHV0DV20h%2BsQp4Z3rMwCrkU2sErABjn6U97Ai33kT1iqVxW5%2F6EKh27wlVV%2FEJMgo5%2BVnXXE%2FqB1oMd1kCPY9K7ju7G%2BTzhxvA2vDjRMvIPkNkd7hqoSJLm6efGkHnX%2Bj%2B1Xjhe4IjcXy2hgFc8BWw38VEh4isxXziNcjueRPReS7YX07Xoo6CXHYLheBMl38IlVeSftLpl0aXwCKlaxhJUqnFF%2BUAjcUp436Zjq3vKgcjvAWSNdCvmdXlW3REvPDCP94A33DvPEBSDKVs6DsiQ8x0dMDFhkXiRHCWGx%2Fn61y4XA96TkUIw0cq7vgY6pgFyFfNdf4Y6mOOKtNQ2f%2BLSBRHsL6hee3wWw57hu75PZH6RIklfyEQ%2F4PiYD4sPIH687J9vqVvGuD8LUUGCgI7MpiowqkUK5mNpItYr0W0MHTZHK6ZLLbPSaz2HysnQKqhsogMWVESOGBC%2F53jzzZcIgokdGca%2Bxnc%2B1mVOvw5Qf1kiSkBs19AVADXy69qTLKZTxUyDYWoEWgchKO8f9jFSP17ALA%2B8&X-Amz-Signature=2d018cb310b4acbf7e85f95b77f55993c59d30394dd8b1a0f4bd6bb67e97b935&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEKXAYA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGT2GL%2FXN5CXYJLItorsfa06FkzTwacUN6KV%2B%2FhmyKN%2FAiAdsnhlcVWIh5HL3jyTmBCMNm%2B6%2F%2BU842MCC625%2Fzh%2BayqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHujbliXrsLQV9XysKtwDfh40wyqBoUQD6WEg2DV3FGraFElHMTpm4HI6QFx136RAwBZrD%2BkQk1gfklTV%2BUh93SIJUQM%2FDD8AdtbSRiZZA6n1CzxeBqbi9ayXhkVmq6xwT9YTqDfn6X%2BksdpDXN0PtEk0l9cpBYqf9HZROV%2FizkrHLPPmasAJRs%2BpbdfPumqGpFXXhcPcUQbAw1y6zqd%2FbYj0MmWRZATKbcTSZrjYahfV%2FdgD9T86huBi3WjOcj3N0IekHSkndijyfPU21vt%2FSJv2P0FT91LAtuBBkN8g7saRCgXdhCOf8jKKxeKsWnXeJU1zpk9gsM5NATKNIeTqGY%2ByFaHV0DV20h%2BsQp4Z3rMwCrkU2sErABjn6U97Ai33kT1iqVxW5%2F6EKh27wlVV%2FEJMgo5%2BVnXXE%2FqB1oMd1kCPY9K7ju7G%2BTzhxvA2vDjRMvIPkNkd7hqoSJLm6efGkHnX%2Bj%2B1Xjhe4IjcXy2hgFc8BWw38VEh4isxXziNcjueRPReS7YX07Xoo6CXHYLheBMl38IlVeSftLpl0aXwCKlaxhJUqnFF%2BUAjcUp436Zjq3vKgcjvAWSNdCvmdXlW3REvPDCP94A33DvPEBSDKVs6DsiQ8x0dMDFhkXiRHCWGx%2Fn61y4XA96TkUIw0cq7vgY6pgFyFfNdf4Y6mOOKtNQ2f%2BLSBRHsL6hee3wWw57hu75PZH6RIklfyEQ%2F4PiYD4sPIH687J9vqVvGuD8LUUGCgI7MpiowqkUK5mNpItYr0W0MHTZHK6ZLLbPSaz2HysnQKqhsogMWVESOGBC%2F53jzzZcIgokdGca%2Bxnc%2B1mVOvw5Qf1kiSkBs19AVADXy69qTLKZTxUyDYWoEWgchKO8f9jFSP17ALA%2B8&X-Amz-Signature=0b23230d29ed39c198f7071e728e96eb3ab0a098a844027b2472aff7c54c4143&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEKXAYA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGT2GL%2FXN5CXYJLItorsfa06FkzTwacUN6KV%2B%2FhmyKN%2FAiAdsnhlcVWIh5HL3jyTmBCMNm%2B6%2F%2BU842MCC625%2Fzh%2BayqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHujbliXrsLQV9XysKtwDfh40wyqBoUQD6WEg2DV3FGraFElHMTpm4HI6QFx136RAwBZrD%2BkQk1gfklTV%2BUh93SIJUQM%2FDD8AdtbSRiZZA6n1CzxeBqbi9ayXhkVmq6xwT9YTqDfn6X%2BksdpDXN0PtEk0l9cpBYqf9HZROV%2FizkrHLPPmasAJRs%2BpbdfPumqGpFXXhcPcUQbAw1y6zqd%2FbYj0MmWRZATKbcTSZrjYahfV%2FdgD9T86huBi3WjOcj3N0IekHSkndijyfPU21vt%2FSJv2P0FT91LAtuBBkN8g7saRCgXdhCOf8jKKxeKsWnXeJU1zpk9gsM5NATKNIeTqGY%2ByFaHV0DV20h%2BsQp4Z3rMwCrkU2sErABjn6U97Ai33kT1iqVxW5%2F6EKh27wlVV%2FEJMgo5%2BVnXXE%2FqB1oMd1kCPY9K7ju7G%2BTzhxvA2vDjRMvIPkNkd7hqoSJLm6efGkHnX%2Bj%2B1Xjhe4IjcXy2hgFc8BWw38VEh4isxXziNcjueRPReS7YX07Xoo6CXHYLheBMl38IlVeSftLpl0aXwCKlaxhJUqnFF%2BUAjcUp436Zjq3vKgcjvAWSNdCvmdXlW3REvPDCP94A33DvPEBSDKVs6DsiQ8x0dMDFhkXiRHCWGx%2Fn61y4XA96TkUIw0cq7vgY6pgFyFfNdf4Y6mOOKtNQ2f%2BLSBRHsL6hee3wWw57hu75PZH6RIklfyEQ%2F4PiYD4sPIH687J9vqVvGuD8LUUGCgI7MpiowqkUK5mNpItYr0W0MHTZHK6ZLLbPSaz2HysnQKqhsogMWVESOGBC%2F53jzzZcIgokdGca%2Bxnc%2B1mVOvw5Qf1kiSkBs19AVADXy69qTLKZTxUyDYWoEWgchKO8f9jFSP17ALA%2B8&X-Amz-Signature=076e61ad83c94dcdc19fc672388645c6c7da1420a101e04b682c88835f7b537e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEKXAYA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGT2GL%2FXN5CXYJLItorsfa06FkzTwacUN6KV%2B%2FhmyKN%2FAiAdsnhlcVWIh5HL3jyTmBCMNm%2B6%2F%2BU842MCC625%2Fzh%2BayqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHujbliXrsLQV9XysKtwDfh40wyqBoUQD6WEg2DV3FGraFElHMTpm4HI6QFx136RAwBZrD%2BkQk1gfklTV%2BUh93SIJUQM%2FDD8AdtbSRiZZA6n1CzxeBqbi9ayXhkVmq6xwT9YTqDfn6X%2BksdpDXN0PtEk0l9cpBYqf9HZROV%2FizkrHLPPmasAJRs%2BpbdfPumqGpFXXhcPcUQbAw1y6zqd%2FbYj0MmWRZATKbcTSZrjYahfV%2FdgD9T86huBi3WjOcj3N0IekHSkndijyfPU21vt%2FSJv2P0FT91LAtuBBkN8g7saRCgXdhCOf8jKKxeKsWnXeJU1zpk9gsM5NATKNIeTqGY%2ByFaHV0DV20h%2BsQp4Z3rMwCrkU2sErABjn6U97Ai33kT1iqVxW5%2F6EKh27wlVV%2FEJMgo5%2BVnXXE%2FqB1oMd1kCPY9K7ju7G%2BTzhxvA2vDjRMvIPkNkd7hqoSJLm6efGkHnX%2Bj%2B1Xjhe4IjcXy2hgFc8BWw38VEh4isxXziNcjueRPReS7YX07Xoo6CXHYLheBMl38IlVeSftLpl0aXwCKlaxhJUqnFF%2BUAjcUp436Zjq3vKgcjvAWSNdCvmdXlW3REvPDCP94A33DvPEBSDKVs6DsiQ8x0dMDFhkXiRHCWGx%2Fn61y4XA96TkUIw0cq7vgY6pgFyFfNdf4Y6mOOKtNQ2f%2BLSBRHsL6hee3wWw57hu75PZH6RIklfyEQ%2F4PiYD4sPIH687J9vqVvGuD8LUUGCgI7MpiowqkUK5mNpItYr0W0MHTZHK6ZLLbPSaz2HysnQKqhsogMWVESOGBC%2F53jzzZcIgokdGca%2Bxnc%2B1mVOvw5Qf1kiSkBs19AVADXy69qTLKZTxUyDYWoEWgchKO8f9jFSP17ALA%2B8&X-Amz-Signature=02f570c783df16830629d81a0984519e71a6f9c91d1aea9adef49ba98ba47c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEKXAYA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGT2GL%2FXN5CXYJLItorsfa06FkzTwacUN6KV%2B%2FhmyKN%2FAiAdsnhlcVWIh5HL3jyTmBCMNm%2B6%2F%2BU842MCC625%2Fzh%2BayqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHujbliXrsLQV9XysKtwDfh40wyqBoUQD6WEg2DV3FGraFElHMTpm4HI6QFx136RAwBZrD%2BkQk1gfklTV%2BUh93SIJUQM%2FDD8AdtbSRiZZA6n1CzxeBqbi9ayXhkVmq6xwT9YTqDfn6X%2BksdpDXN0PtEk0l9cpBYqf9HZROV%2FizkrHLPPmasAJRs%2BpbdfPumqGpFXXhcPcUQbAw1y6zqd%2FbYj0MmWRZATKbcTSZrjYahfV%2FdgD9T86huBi3WjOcj3N0IekHSkndijyfPU21vt%2FSJv2P0FT91LAtuBBkN8g7saRCgXdhCOf8jKKxeKsWnXeJU1zpk9gsM5NATKNIeTqGY%2ByFaHV0DV20h%2BsQp4Z3rMwCrkU2sErABjn6U97Ai33kT1iqVxW5%2F6EKh27wlVV%2FEJMgo5%2BVnXXE%2FqB1oMd1kCPY9K7ju7G%2BTzhxvA2vDjRMvIPkNkd7hqoSJLm6efGkHnX%2Bj%2B1Xjhe4IjcXy2hgFc8BWw38VEh4isxXziNcjueRPReS7YX07Xoo6CXHYLheBMl38IlVeSftLpl0aXwCKlaxhJUqnFF%2BUAjcUp436Zjq3vKgcjvAWSNdCvmdXlW3REvPDCP94A33DvPEBSDKVs6DsiQ8x0dMDFhkXiRHCWGx%2Fn61y4XA96TkUIw0cq7vgY6pgFyFfNdf4Y6mOOKtNQ2f%2BLSBRHsL6hee3wWw57hu75PZH6RIklfyEQ%2F4PiYD4sPIH687J9vqVvGuD8LUUGCgI7MpiowqkUK5mNpItYr0W0MHTZHK6ZLLbPSaz2HysnQKqhsogMWVESOGBC%2F53jzzZcIgokdGca%2Bxnc%2B1mVOvw5Qf1kiSkBs19AVADXy69qTLKZTxUyDYWoEWgchKO8f9jFSP17ALA%2B8&X-Amz-Signature=36a38163a648c682e180e69eadf92fb06282b56828603f448c26a68c23229a25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEKXAYA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGT2GL%2FXN5CXYJLItorsfa06FkzTwacUN6KV%2B%2FhmyKN%2FAiAdsnhlcVWIh5HL3jyTmBCMNm%2B6%2F%2BU842MCC625%2Fzh%2BayqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHujbliXrsLQV9XysKtwDfh40wyqBoUQD6WEg2DV3FGraFElHMTpm4HI6QFx136RAwBZrD%2BkQk1gfklTV%2BUh93SIJUQM%2FDD8AdtbSRiZZA6n1CzxeBqbi9ayXhkVmq6xwT9YTqDfn6X%2BksdpDXN0PtEk0l9cpBYqf9HZROV%2FizkrHLPPmasAJRs%2BpbdfPumqGpFXXhcPcUQbAw1y6zqd%2FbYj0MmWRZATKbcTSZrjYahfV%2FdgD9T86huBi3WjOcj3N0IekHSkndijyfPU21vt%2FSJv2P0FT91LAtuBBkN8g7saRCgXdhCOf8jKKxeKsWnXeJU1zpk9gsM5NATKNIeTqGY%2ByFaHV0DV20h%2BsQp4Z3rMwCrkU2sErABjn6U97Ai33kT1iqVxW5%2F6EKh27wlVV%2FEJMgo5%2BVnXXE%2FqB1oMd1kCPY9K7ju7G%2BTzhxvA2vDjRMvIPkNkd7hqoSJLm6efGkHnX%2Bj%2B1Xjhe4IjcXy2hgFc8BWw38VEh4isxXziNcjueRPReS7YX07Xoo6CXHYLheBMl38IlVeSftLpl0aXwCKlaxhJUqnFF%2BUAjcUp436Zjq3vKgcjvAWSNdCvmdXlW3REvPDCP94A33DvPEBSDKVs6DsiQ8x0dMDFhkXiRHCWGx%2Fn61y4XA96TkUIw0cq7vgY6pgFyFfNdf4Y6mOOKtNQ2f%2BLSBRHsL6hee3wWw57hu75PZH6RIklfyEQ%2F4PiYD4sPIH687J9vqVvGuD8LUUGCgI7MpiowqkUK5mNpItYr0W0MHTZHK6ZLLbPSaz2HysnQKqhsogMWVESOGBC%2F53jzzZcIgokdGca%2Bxnc%2B1mVOvw5Qf1kiSkBs19AVADXy69qTLKZTxUyDYWoEWgchKO8f9jFSP17ALA%2B8&X-Amz-Signature=254f327cfdf29e8465f4e001586452e3de3b7945d7149b4f1665bd83cda8fdac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEKXAYA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGT2GL%2FXN5CXYJLItorsfa06FkzTwacUN6KV%2B%2FhmyKN%2FAiAdsnhlcVWIh5HL3jyTmBCMNm%2B6%2F%2BU842MCC625%2Fzh%2BayqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHujbliXrsLQV9XysKtwDfh40wyqBoUQD6WEg2DV3FGraFElHMTpm4HI6QFx136RAwBZrD%2BkQk1gfklTV%2BUh93SIJUQM%2FDD8AdtbSRiZZA6n1CzxeBqbi9ayXhkVmq6xwT9YTqDfn6X%2BksdpDXN0PtEk0l9cpBYqf9HZROV%2FizkrHLPPmasAJRs%2BpbdfPumqGpFXXhcPcUQbAw1y6zqd%2FbYj0MmWRZATKbcTSZrjYahfV%2FdgD9T86huBi3WjOcj3N0IekHSkndijyfPU21vt%2FSJv2P0FT91LAtuBBkN8g7saRCgXdhCOf8jKKxeKsWnXeJU1zpk9gsM5NATKNIeTqGY%2ByFaHV0DV20h%2BsQp4Z3rMwCrkU2sErABjn6U97Ai33kT1iqVxW5%2F6EKh27wlVV%2FEJMgo5%2BVnXXE%2FqB1oMd1kCPY9K7ju7G%2BTzhxvA2vDjRMvIPkNkd7hqoSJLm6efGkHnX%2Bj%2B1Xjhe4IjcXy2hgFc8BWw38VEh4isxXziNcjueRPReS7YX07Xoo6CXHYLheBMl38IlVeSftLpl0aXwCKlaxhJUqnFF%2BUAjcUp436Zjq3vKgcjvAWSNdCvmdXlW3REvPDCP94A33DvPEBSDKVs6DsiQ8x0dMDFhkXiRHCWGx%2Fn61y4XA96TkUIw0cq7vgY6pgFyFfNdf4Y6mOOKtNQ2f%2BLSBRHsL6hee3wWw57hu75PZH6RIklfyEQ%2F4PiYD4sPIH687J9vqVvGuD8LUUGCgI7MpiowqkUK5mNpItYr0W0MHTZHK6ZLLbPSaz2HysnQKqhsogMWVESOGBC%2F53jzzZcIgokdGca%2Bxnc%2B1mVOvw5Qf1kiSkBs19AVADXy69qTLKZTxUyDYWoEWgchKO8f9jFSP17ALA%2B8&X-Amz-Signature=bdf903b2bb7bb8c29edd1e6003e3923a8c5bc6b7d949d37a307c6d58a3df9b55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
