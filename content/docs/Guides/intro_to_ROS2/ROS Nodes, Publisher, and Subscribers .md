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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJSCWC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrEOLsnBtWPBjAP%2Fn8yafa2N78pb7kbDhoyoLXA2gHwIhAJNwBIZDAHtkuhnco%2FuUx7nnWsIMfAWW0CGwidOS2b3cKv8DCFwQABoMNjM3NDIzMTgzODA1Igw2Vf4gpFpAw%2BtUw3Yq3APQRRi%2BuwWVqDycid2nceFAkBM4%2BogVAIY0fY4vo4OL339OnxvgtHLa14%2BuqT3hJ7YqLx6eZAOAhWEEeNVyhg4jw4TgDL0ZQfRApsIUnzpYBk1NqATOjNk90x6Hf7SjNW5K3W5dshIUOJg5%2FUw9RojbJkUiSvFAGVDbHR9yfVNV0tnWs2X%2FHo6zQtMpUF4MIYEDbx3ULdV765wIJM71R3sL4YBA%2B7mZrJIVh37xqWb3Q5jxbT1HSlhbJe%2BxaZrovW7aTVegZO1WwfRC3Apoj2qu9mjvRVr8Z6%2BCdVEX2qEWdaHrm2Ux%2FhqPerRGRJ101TcXxKebNVx2fK3vrYDY3J5cTw4%2Bux4vswT3pwWUMOMFyyqoFEIC6JOT%2BgNDxPQ%2BryGhnoQKS4RH%2FxZClNMbMdlJfFI6KX8bgbOZ2UU91rpDITd3DwaeleeRfGzbTIWn7c1tJiUyF20YJtxgyAg7%2BP4zL1ZvuPAYx8dAcXHr7PxxW4eq1MRL4Yfjt9UTYNTk0hfAlcGH3nWIVII9%2FU8xEAbu4%2B5ZDd5ef6sxYhCfeGCwflteNxD5tQch56UyRp%2FHZfOG0YHkoDzHeL193lZ3CCt7B5rXyI4Z41YeGCSJ03PpUbHKmT82vIbFzgWBHjCoq9bBBjqkAeVV7weIMqAdCZJfVLK3wIlQA8NJXqOIdVp8LgEShAYk8xIRPXymcMqobcaHXaeq6LJq7HXJphtNSPU1D%2BfGkaPXXjPK8AxHGPvqGKDWyoP5tstLUoJK2AeHaTd7s6%2FzL2mo7%2BZFNDEINF3JOdeBgGjlPYMEfnBw9twybgZbVAjkq7ANr7ujST0UawRC%2BxEB4fdku2PoURiIOe2bf5WOiGneawPt&X-Amz-Signature=b7cf7971143f61554387220d87809189a2611bb6cae313a5e754c2adf9ce1d65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJSCWC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrEOLsnBtWPBjAP%2Fn8yafa2N78pb7kbDhoyoLXA2gHwIhAJNwBIZDAHtkuhnco%2FuUx7nnWsIMfAWW0CGwidOS2b3cKv8DCFwQABoMNjM3NDIzMTgzODA1Igw2Vf4gpFpAw%2BtUw3Yq3APQRRi%2BuwWVqDycid2nceFAkBM4%2BogVAIY0fY4vo4OL339OnxvgtHLa14%2BuqT3hJ7YqLx6eZAOAhWEEeNVyhg4jw4TgDL0ZQfRApsIUnzpYBk1NqATOjNk90x6Hf7SjNW5K3W5dshIUOJg5%2FUw9RojbJkUiSvFAGVDbHR9yfVNV0tnWs2X%2FHo6zQtMpUF4MIYEDbx3ULdV765wIJM71R3sL4YBA%2B7mZrJIVh37xqWb3Q5jxbT1HSlhbJe%2BxaZrovW7aTVegZO1WwfRC3Apoj2qu9mjvRVr8Z6%2BCdVEX2qEWdaHrm2Ux%2FhqPerRGRJ101TcXxKebNVx2fK3vrYDY3J5cTw4%2Bux4vswT3pwWUMOMFyyqoFEIC6JOT%2BgNDxPQ%2BryGhnoQKS4RH%2FxZClNMbMdlJfFI6KX8bgbOZ2UU91rpDITd3DwaeleeRfGzbTIWn7c1tJiUyF20YJtxgyAg7%2BP4zL1ZvuPAYx8dAcXHr7PxxW4eq1MRL4Yfjt9UTYNTk0hfAlcGH3nWIVII9%2FU8xEAbu4%2B5ZDd5ef6sxYhCfeGCwflteNxD5tQch56UyRp%2FHZfOG0YHkoDzHeL193lZ3CCt7B5rXyI4Z41YeGCSJ03PpUbHKmT82vIbFzgWBHjCoq9bBBjqkAeVV7weIMqAdCZJfVLK3wIlQA8NJXqOIdVp8LgEShAYk8xIRPXymcMqobcaHXaeq6LJq7HXJphtNSPU1D%2BfGkaPXXjPK8AxHGPvqGKDWyoP5tstLUoJK2AeHaTd7s6%2FzL2mo7%2BZFNDEINF3JOdeBgGjlPYMEfnBw9twybgZbVAjkq7ANr7ujST0UawRC%2BxEB4fdku2PoURiIOe2bf5WOiGneawPt&X-Amz-Signature=bd45549a78c03df1c25ded49b737fb1a4d31ca2890c8fdbb2c84a2ace7af1aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJSCWC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrEOLsnBtWPBjAP%2Fn8yafa2N78pb7kbDhoyoLXA2gHwIhAJNwBIZDAHtkuhnco%2FuUx7nnWsIMfAWW0CGwidOS2b3cKv8DCFwQABoMNjM3NDIzMTgzODA1Igw2Vf4gpFpAw%2BtUw3Yq3APQRRi%2BuwWVqDycid2nceFAkBM4%2BogVAIY0fY4vo4OL339OnxvgtHLa14%2BuqT3hJ7YqLx6eZAOAhWEEeNVyhg4jw4TgDL0ZQfRApsIUnzpYBk1NqATOjNk90x6Hf7SjNW5K3W5dshIUOJg5%2FUw9RojbJkUiSvFAGVDbHR9yfVNV0tnWs2X%2FHo6zQtMpUF4MIYEDbx3ULdV765wIJM71R3sL4YBA%2B7mZrJIVh37xqWb3Q5jxbT1HSlhbJe%2BxaZrovW7aTVegZO1WwfRC3Apoj2qu9mjvRVr8Z6%2BCdVEX2qEWdaHrm2Ux%2FhqPerRGRJ101TcXxKebNVx2fK3vrYDY3J5cTw4%2Bux4vswT3pwWUMOMFyyqoFEIC6JOT%2BgNDxPQ%2BryGhnoQKS4RH%2FxZClNMbMdlJfFI6KX8bgbOZ2UU91rpDITd3DwaeleeRfGzbTIWn7c1tJiUyF20YJtxgyAg7%2BP4zL1ZvuPAYx8dAcXHr7PxxW4eq1MRL4Yfjt9UTYNTk0hfAlcGH3nWIVII9%2FU8xEAbu4%2B5ZDd5ef6sxYhCfeGCwflteNxD5tQch56UyRp%2FHZfOG0YHkoDzHeL193lZ3CCt7B5rXyI4Z41YeGCSJ03PpUbHKmT82vIbFzgWBHjCoq9bBBjqkAeVV7weIMqAdCZJfVLK3wIlQA8NJXqOIdVp8LgEShAYk8xIRPXymcMqobcaHXaeq6LJq7HXJphtNSPU1D%2BfGkaPXXjPK8AxHGPvqGKDWyoP5tstLUoJK2AeHaTd7s6%2FzL2mo7%2BZFNDEINF3JOdeBgGjlPYMEfnBw9twybgZbVAjkq7ANr7ujST0UawRC%2BxEB4fdku2PoURiIOe2bf5WOiGneawPt&X-Amz-Signature=e2cd7df666b7e3dd114551af8116f9e92031b7840832ae7593f8ace915696821&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJSCWC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrEOLsnBtWPBjAP%2Fn8yafa2N78pb7kbDhoyoLXA2gHwIhAJNwBIZDAHtkuhnco%2FuUx7nnWsIMfAWW0CGwidOS2b3cKv8DCFwQABoMNjM3NDIzMTgzODA1Igw2Vf4gpFpAw%2BtUw3Yq3APQRRi%2BuwWVqDycid2nceFAkBM4%2BogVAIY0fY4vo4OL339OnxvgtHLa14%2BuqT3hJ7YqLx6eZAOAhWEEeNVyhg4jw4TgDL0ZQfRApsIUnzpYBk1NqATOjNk90x6Hf7SjNW5K3W5dshIUOJg5%2FUw9RojbJkUiSvFAGVDbHR9yfVNV0tnWs2X%2FHo6zQtMpUF4MIYEDbx3ULdV765wIJM71R3sL4YBA%2B7mZrJIVh37xqWb3Q5jxbT1HSlhbJe%2BxaZrovW7aTVegZO1WwfRC3Apoj2qu9mjvRVr8Z6%2BCdVEX2qEWdaHrm2Ux%2FhqPerRGRJ101TcXxKebNVx2fK3vrYDY3J5cTw4%2Bux4vswT3pwWUMOMFyyqoFEIC6JOT%2BgNDxPQ%2BryGhnoQKS4RH%2FxZClNMbMdlJfFI6KX8bgbOZ2UU91rpDITd3DwaeleeRfGzbTIWn7c1tJiUyF20YJtxgyAg7%2BP4zL1ZvuPAYx8dAcXHr7PxxW4eq1MRL4Yfjt9UTYNTk0hfAlcGH3nWIVII9%2FU8xEAbu4%2B5ZDd5ef6sxYhCfeGCwflteNxD5tQch56UyRp%2FHZfOG0YHkoDzHeL193lZ3CCt7B5rXyI4Z41YeGCSJ03PpUbHKmT82vIbFzgWBHjCoq9bBBjqkAeVV7weIMqAdCZJfVLK3wIlQA8NJXqOIdVp8LgEShAYk8xIRPXymcMqobcaHXaeq6LJq7HXJphtNSPU1D%2BfGkaPXXjPK8AxHGPvqGKDWyoP5tstLUoJK2AeHaTd7s6%2FzL2mo7%2BZFNDEINF3JOdeBgGjlPYMEfnBw9twybgZbVAjkq7ANr7ujST0UawRC%2BxEB4fdku2PoURiIOe2bf5WOiGneawPt&X-Amz-Signature=6b54ed10d6aa8ddb591bacd0ee3ff442c50626d401b829094c096835705640b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJSCWC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrEOLsnBtWPBjAP%2Fn8yafa2N78pb7kbDhoyoLXA2gHwIhAJNwBIZDAHtkuhnco%2FuUx7nnWsIMfAWW0CGwidOS2b3cKv8DCFwQABoMNjM3NDIzMTgzODA1Igw2Vf4gpFpAw%2BtUw3Yq3APQRRi%2BuwWVqDycid2nceFAkBM4%2BogVAIY0fY4vo4OL339OnxvgtHLa14%2BuqT3hJ7YqLx6eZAOAhWEEeNVyhg4jw4TgDL0ZQfRApsIUnzpYBk1NqATOjNk90x6Hf7SjNW5K3W5dshIUOJg5%2FUw9RojbJkUiSvFAGVDbHR9yfVNV0tnWs2X%2FHo6zQtMpUF4MIYEDbx3ULdV765wIJM71R3sL4YBA%2B7mZrJIVh37xqWb3Q5jxbT1HSlhbJe%2BxaZrovW7aTVegZO1WwfRC3Apoj2qu9mjvRVr8Z6%2BCdVEX2qEWdaHrm2Ux%2FhqPerRGRJ101TcXxKebNVx2fK3vrYDY3J5cTw4%2Bux4vswT3pwWUMOMFyyqoFEIC6JOT%2BgNDxPQ%2BryGhnoQKS4RH%2FxZClNMbMdlJfFI6KX8bgbOZ2UU91rpDITd3DwaeleeRfGzbTIWn7c1tJiUyF20YJtxgyAg7%2BP4zL1ZvuPAYx8dAcXHr7PxxW4eq1MRL4Yfjt9UTYNTk0hfAlcGH3nWIVII9%2FU8xEAbu4%2B5ZDd5ef6sxYhCfeGCwflteNxD5tQch56UyRp%2FHZfOG0YHkoDzHeL193lZ3CCt7B5rXyI4Z41YeGCSJ03PpUbHKmT82vIbFzgWBHjCoq9bBBjqkAeVV7weIMqAdCZJfVLK3wIlQA8NJXqOIdVp8LgEShAYk8xIRPXymcMqobcaHXaeq6LJq7HXJphtNSPU1D%2BfGkaPXXjPK8AxHGPvqGKDWyoP5tstLUoJK2AeHaTd7s6%2FzL2mo7%2BZFNDEINF3JOdeBgGjlPYMEfnBw9twybgZbVAjkq7ANr7ujST0UawRC%2BxEB4fdku2PoURiIOe2bf5WOiGneawPt&X-Amz-Signature=2235aad429590b11871c77f20162e9433119623ed0c613c441e00d941dba2e43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJSCWC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrEOLsnBtWPBjAP%2Fn8yafa2N78pb7kbDhoyoLXA2gHwIhAJNwBIZDAHtkuhnco%2FuUx7nnWsIMfAWW0CGwidOS2b3cKv8DCFwQABoMNjM3NDIzMTgzODA1Igw2Vf4gpFpAw%2BtUw3Yq3APQRRi%2BuwWVqDycid2nceFAkBM4%2BogVAIY0fY4vo4OL339OnxvgtHLa14%2BuqT3hJ7YqLx6eZAOAhWEEeNVyhg4jw4TgDL0ZQfRApsIUnzpYBk1NqATOjNk90x6Hf7SjNW5K3W5dshIUOJg5%2FUw9RojbJkUiSvFAGVDbHR9yfVNV0tnWs2X%2FHo6zQtMpUF4MIYEDbx3ULdV765wIJM71R3sL4YBA%2B7mZrJIVh37xqWb3Q5jxbT1HSlhbJe%2BxaZrovW7aTVegZO1WwfRC3Apoj2qu9mjvRVr8Z6%2BCdVEX2qEWdaHrm2Ux%2FhqPerRGRJ101TcXxKebNVx2fK3vrYDY3J5cTw4%2Bux4vswT3pwWUMOMFyyqoFEIC6JOT%2BgNDxPQ%2BryGhnoQKS4RH%2FxZClNMbMdlJfFI6KX8bgbOZ2UU91rpDITd3DwaeleeRfGzbTIWn7c1tJiUyF20YJtxgyAg7%2BP4zL1ZvuPAYx8dAcXHr7PxxW4eq1MRL4Yfjt9UTYNTk0hfAlcGH3nWIVII9%2FU8xEAbu4%2B5ZDd5ef6sxYhCfeGCwflteNxD5tQch56UyRp%2FHZfOG0YHkoDzHeL193lZ3CCt7B5rXyI4Z41YeGCSJ03PpUbHKmT82vIbFzgWBHjCoq9bBBjqkAeVV7weIMqAdCZJfVLK3wIlQA8NJXqOIdVp8LgEShAYk8xIRPXymcMqobcaHXaeq6LJq7HXJphtNSPU1D%2BfGkaPXXjPK8AxHGPvqGKDWyoP5tstLUoJK2AeHaTd7s6%2FzL2mo7%2BZFNDEINF3JOdeBgGjlPYMEfnBw9twybgZbVAjkq7ANr7ujST0UawRC%2BxEB4fdku2PoURiIOe2bf5WOiGneawPt&X-Amz-Signature=9ac0113bb70bad74c8769a22f78de5ba27ac156e65f9f13106699a092381b44f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJSCWC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrEOLsnBtWPBjAP%2Fn8yafa2N78pb7kbDhoyoLXA2gHwIhAJNwBIZDAHtkuhnco%2FuUx7nnWsIMfAWW0CGwidOS2b3cKv8DCFwQABoMNjM3NDIzMTgzODA1Igw2Vf4gpFpAw%2BtUw3Yq3APQRRi%2BuwWVqDycid2nceFAkBM4%2BogVAIY0fY4vo4OL339OnxvgtHLa14%2BuqT3hJ7YqLx6eZAOAhWEEeNVyhg4jw4TgDL0ZQfRApsIUnzpYBk1NqATOjNk90x6Hf7SjNW5K3W5dshIUOJg5%2FUw9RojbJkUiSvFAGVDbHR9yfVNV0tnWs2X%2FHo6zQtMpUF4MIYEDbx3ULdV765wIJM71R3sL4YBA%2B7mZrJIVh37xqWb3Q5jxbT1HSlhbJe%2BxaZrovW7aTVegZO1WwfRC3Apoj2qu9mjvRVr8Z6%2BCdVEX2qEWdaHrm2Ux%2FhqPerRGRJ101TcXxKebNVx2fK3vrYDY3J5cTw4%2Bux4vswT3pwWUMOMFyyqoFEIC6JOT%2BgNDxPQ%2BryGhnoQKS4RH%2FxZClNMbMdlJfFI6KX8bgbOZ2UU91rpDITd3DwaeleeRfGzbTIWn7c1tJiUyF20YJtxgyAg7%2BP4zL1ZvuPAYx8dAcXHr7PxxW4eq1MRL4Yfjt9UTYNTk0hfAlcGH3nWIVII9%2FU8xEAbu4%2B5ZDd5ef6sxYhCfeGCwflteNxD5tQch56UyRp%2FHZfOG0YHkoDzHeL193lZ3CCt7B5rXyI4Z41YeGCSJ03PpUbHKmT82vIbFzgWBHjCoq9bBBjqkAeVV7weIMqAdCZJfVLK3wIlQA8NJXqOIdVp8LgEShAYk8xIRPXymcMqobcaHXaeq6LJq7HXJphtNSPU1D%2BfGkaPXXjPK8AxHGPvqGKDWyoP5tstLUoJK2AeHaTd7s6%2FzL2mo7%2BZFNDEINF3JOdeBgGjlPYMEfnBw9twybgZbVAjkq7ANr7ujST0UawRC%2BxEB4fdku2PoURiIOe2bf5WOiGneawPt&X-Amz-Signature=b99ccb8b6f1c92533e564eda23776279b2af754e5e311fb1d80776700df98ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJSCWC5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrEOLsnBtWPBjAP%2Fn8yafa2N78pb7kbDhoyoLXA2gHwIhAJNwBIZDAHtkuhnco%2FuUx7nnWsIMfAWW0CGwidOS2b3cKv8DCFwQABoMNjM3NDIzMTgzODA1Igw2Vf4gpFpAw%2BtUw3Yq3APQRRi%2BuwWVqDycid2nceFAkBM4%2BogVAIY0fY4vo4OL339OnxvgtHLa14%2BuqT3hJ7YqLx6eZAOAhWEEeNVyhg4jw4TgDL0ZQfRApsIUnzpYBk1NqATOjNk90x6Hf7SjNW5K3W5dshIUOJg5%2FUw9RojbJkUiSvFAGVDbHR9yfVNV0tnWs2X%2FHo6zQtMpUF4MIYEDbx3ULdV765wIJM71R3sL4YBA%2B7mZrJIVh37xqWb3Q5jxbT1HSlhbJe%2BxaZrovW7aTVegZO1WwfRC3Apoj2qu9mjvRVr8Z6%2BCdVEX2qEWdaHrm2Ux%2FhqPerRGRJ101TcXxKebNVx2fK3vrYDY3J5cTw4%2Bux4vswT3pwWUMOMFyyqoFEIC6JOT%2BgNDxPQ%2BryGhnoQKS4RH%2FxZClNMbMdlJfFI6KX8bgbOZ2UU91rpDITd3DwaeleeRfGzbTIWn7c1tJiUyF20YJtxgyAg7%2BP4zL1ZvuPAYx8dAcXHr7PxxW4eq1MRL4Yfjt9UTYNTk0hfAlcGH3nWIVII9%2FU8xEAbu4%2B5ZDd5ef6sxYhCfeGCwflteNxD5tQch56UyRp%2FHZfOG0YHkoDzHeL193lZ3CCt7B5rXyI4Z41YeGCSJ03PpUbHKmT82vIbFzgWBHjCoq9bBBjqkAeVV7weIMqAdCZJfVLK3wIlQA8NJXqOIdVp8LgEShAYk8xIRPXymcMqobcaHXaeq6LJq7HXJphtNSPU1D%2BfGkaPXXjPK8AxHGPvqGKDWyoP5tstLUoJK2AeHaTd7s6%2FzL2mo7%2BZFNDEINF3JOdeBgGjlPYMEfnBw9twybgZbVAjkq7ANr7ujST0UawRC%2BxEB4fdku2PoURiIOe2bf5WOiGneawPt&X-Amz-Signature=4633215b818c30e9fee66a5d0de0968818b7827491d677804ccbdce0a49db72d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
