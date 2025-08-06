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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HFDD6Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDtnq8Gd54xansu2bqfhCsd%2BC7ivsZpeJy67O4SB41YHQIgZ7Rej1tiv9mz7FACp15mJcNffTs66%2F7y7v71FkzCUTMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYvlGGIlJ1D3HQ2sircA50SN2O1TfsDNuQE%2BpCr4tEVG%2BvOoexFDmO%2B70Dt9mGiSXfn6k%2FXZBpLcr2LAXIz2rDA2J%2FJP8k7j1E6NQ6ZnG5aukzl%2BaqZX%2F6Wk5Tdeki1QdH%2FQyDSWDAd%2FnYSCGKC1bXiEGIcz5bVzyAEddd9twm10WzvRkp6NVWLTX7x5hgLKSTdnRVy7qewnWH6ilGx9VDrWDxpOkpIF1QlpHMBdk5SG%2FkpcCdLu7x8zNOXliCtp1xuYnwyo0hCJFm70EQXL5gBSbStudWMLyBj3Dv2WFY34nB3Tpnk4W%2Fj1Ywz0XJ%2BuYA0A8a2BjJeFARCe8pT2ptX%2F8w1bABdrVIm4ZOjClqEOBtWjRyJsOmD44NNUU3StNoDBBxthHRPCEGlltg4RrmR71KjbvzpsPBQHRd65erX%2BDuK25sZyTQXw67%2BS7ZsKJb1MBjbkmBGh0%2FE%2Fhp2yZ0n59YEYvFtoSiV7ZyKyEPbIWyfeczInOI7aKX4IG%2Fgz472MrikLJ5u%2F2Z%2FkLZZdOhHl0is%2F29jYErmiJrPb2v0Kx3R8Rszj2wtUecdWLiDfoFtfqi7g45YEFFBTSDDj6a5E39H2MYPR5M2Qf6PQjikRWZPFdO0wBuFMqCJvyusWtg3ZsKELBecp7SpMK6zz8QGOqUBr8AjY6YXA%2FYgeBQ1B2SAY8G29md%2Bo5a5Bk%2FgbrhfeJMznLd3Tiw67aiGvbWF7ltvcWkzcihQCcduUQYVIQ2nYSYZfhCTw4jhjfSoIqvZYag1R7v94dlkl1dltukvPv4ZHBqJ58X2oIQdfZCSQV02y5o5a1Kf9p335IK58eLR7%2Bfyn2AMz%2Fef8HbKoqwtOTneCgUTlI7LKil8hjDUR4KlPatQ7q90&X-Amz-Signature=467c4f3dfd382109d76b5be90df6dcbe73a1bac45531a0e4de312a82500bf41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HFDD6Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDtnq8Gd54xansu2bqfhCsd%2BC7ivsZpeJy67O4SB41YHQIgZ7Rej1tiv9mz7FACp15mJcNffTs66%2F7y7v71FkzCUTMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYvlGGIlJ1D3HQ2sircA50SN2O1TfsDNuQE%2BpCr4tEVG%2BvOoexFDmO%2B70Dt9mGiSXfn6k%2FXZBpLcr2LAXIz2rDA2J%2FJP8k7j1E6NQ6ZnG5aukzl%2BaqZX%2F6Wk5Tdeki1QdH%2FQyDSWDAd%2FnYSCGKC1bXiEGIcz5bVzyAEddd9twm10WzvRkp6NVWLTX7x5hgLKSTdnRVy7qewnWH6ilGx9VDrWDxpOkpIF1QlpHMBdk5SG%2FkpcCdLu7x8zNOXliCtp1xuYnwyo0hCJFm70EQXL5gBSbStudWMLyBj3Dv2WFY34nB3Tpnk4W%2Fj1Ywz0XJ%2BuYA0A8a2BjJeFARCe8pT2ptX%2F8w1bABdrVIm4ZOjClqEOBtWjRyJsOmD44NNUU3StNoDBBxthHRPCEGlltg4RrmR71KjbvzpsPBQHRd65erX%2BDuK25sZyTQXw67%2BS7ZsKJb1MBjbkmBGh0%2FE%2Fhp2yZ0n59YEYvFtoSiV7ZyKyEPbIWyfeczInOI7aKX4IG%2Fgz472MrikLJ5u%2F2Z%2FkLZZdOhHl0is%2F29jYErmiJrPb2v0Kx3R8Rszj2wtUecdWLiDfoFtfqi7g45YEFFBTSDDj6a5E39H2MYPR5M2Qf6PQjikRWZPFdO0wBuFMqCJvyusWtg3ZsKELBecp7SpMK6zz8QGOqUBr8AjY6YXA%2FYgeBQ1B2SAY8G29md%2Bo5a5Bk%2FgbrhfeJMznLd3Tiw67aiGvbWF7ltvcWkzcihQCcduUQYVIQ2nYSYZfhCTw4jhjfSoIqvZYag1R7v94dlkl1dltukvPv4ZHBqJ58X2oIQdfZCSQV02y5o5a1Kf9p335IK58eLR7%2Bfyn2AMz%2Fef8HbKoqwtOTneCgUTlI7LKil8hjDUR4KlPatQ7q90&X-Amz-Signature=b86e16d52389dcb5684fef9bf9e1b9839def9f7277f462068c64b9ee5367ba0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HFDD6Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDtnq8Gd54xansu2bqfhCsd%2BC7ivsZpeJy67O4SB41YHQIgZ7Rej1tiv9mz7FACp15mJcNffTs66%2F7y7v71FkzCUTMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYvlGGIlJ1D3HQ2sircA50SN2O1TfsDNuQE%2BpCr4tEVG%2BvOoexFDmO%2B70Dt9mGiSXfn6k%2FXZBpLcr2LAXIz2rDA2J%2FJP8k7j1E6NQ6ZnG5aukzl%2BaqZX%2F6Wk5Tdeki1QdH%2FQyDSWDAd%2FnYSCGKC1bXiEGIcz5bVzyAEddd9twm10WzvRkp6NVWLTX7x5hgLKSTdnRVy7qewnWH6ilGx9VDrWDxpOkpIF1QlpHMBdk5SG%2FkpcCdLu7x8zNOXliCtp1xuYnwyo0hCJFm70EQXL5gBSbStudWMLyBj3Dv2WFY34nB3Tpnk4W%2Fj1Ywz0XJ%2BuYA0A8a2BjJeFARCe8pT2ptX%2F8w1bABdrVIm4ZOjClqEOBtWjRyJsOmD44NNUU3StNoDBBxthHRPCEGlltg4RrmR71KjbvzpsPBQHRd65erX%2BDuK25sZyTQXw67%2BS7ZsKJb1MBjbkmBGh0%2FE%2Fhp2yZ0n59YEYvFtoSiV7ZyKyEPbIWyfeczInOI7aKX4IG%2Fgz472MrikLJ5u%2F2Z%2FkLZZdOhHl0is%2F29jYErmiJrPb2v0Kx3R8Rszj2wtUecdWLiDfoFtfqi7g45YEFFBTSDDj6a5E39H2MYPR5M2Qf6PQjikRWZPFdO0wBuFMqCJvyusWtg3ZsKELBecp7SpMK6zz8QGOqUBr8AjY6YXA%2FYgeBQ1B2SAY8G29md%2Bo5a5Bk%2FgbrhfeJMznLd3Tiw67aiGvbWF7ltvcWkzcihQCcduUQYVIQ2nYSYZfhCTw4jhjfSoIqvZYag1R7v94dlkl1dltukvPv4ZHBqJ58X2oIQdfZCSQV02y5o5a1Kf9p335IK58eLR7%2Bfyn2AMz%2Fef8HbKoqwtOTneCgUTlI7LKil8hjDUR4KlPatQ7q90&X-Amz-Signature=d83e4bcfc14b37337b70a893f3ec6f717726746b72d3edd9ee3628ba8e348298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HFDD6Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDtnq8Gd54xansu2bqfhCsd%2BC7ivsZpeJy67O4SB41YHQIgZ7Rej1tiv9mz7FACp15mJcNffTs66%2F7y7v71FkzCUTMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYvlGGIlJ1D3HQ2sircA50SN2O1TfsDNuQE%2BpCr4tEVG%2BvOoexFDmO%2B70Dt9mGiSXfn6k%2FXZBpLcr2LAXIz2rDA2J%2FJP8k7j1E6NQ6ZnG5aukzl%2BaqZX%2F6Wk5Tdeki1QdH%2FQyDSWDAd%2FnYSCGKC1bXiEGIcz5bVzyAEddd9twm10WzvRkp6NVWLTX7x5hgLKSTdnRVy7qewnWH6ilGx9VDrWDxpOkpIF1QlpHMBdk5SG%2FkpcCdLu7x8zNOXliCtp1xuYnwyo0hCJFm70EQXL5gBSbStudWMLyBj3Dv2WFY34nB3Tpnk4W%2Fj1Ywz0XJ%2BuYA0A8a2BjJeFARCe8pT2ptX%2F8w1bABdrVIm4ZOjClqEOBtWjRyJsOmD44NNUU3StNoDBBxthHRPCEGlltg4RrmR71KjbvzpsPBQHRd65erX%2BDuK25sZyTQXw67%2BS7ZsKJb1MBjbkmBGh0%2FE%2Fhp2yZ0n59YEYvFtoSiV7ZyKyEPbIWyfeczInOI7aKX4IG%2Fgz472MrikLJ5u%2F2Z%2FkLZZdOhHl0is%2F29jYErmiJrPb2v0Kx3R8Rszj2wtUecdWLiDfoFtfqi7g45YEFFBTSDDj6a5E39H2MYPR5M2Qf6PQjikRWZPFdO0wBuFMqCJvyusWtg3ZsKELBecp7SpMK6zz8QGOqUBr8AjY6YXA%2FYgeBQ1B2SAY8G29md%2Bo5a5Bk%2FgbrhfeJMznLd3Tiw67aiGvbWF7ltvcWkzcihQCcduUQYVIQ2nYSYZfhCTw4jhjfSoIqvZYag1R7v94dlkl1dltukvPv4ZHBqJ58X2oIQdfZCSQV02y5o5a1Kf9p335IK58eLR7%2Bfyn2AMz%2Fef8HbKoqwtOTneCgUTlI7LKil8hjDUR4KlPatQ7q90&X-Amz-Signature=76c7a848c3f662c69b6f5b86f610dd8fa21fff613f31f7b80592841fdce4f63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HFDD6Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDtnq8Gd54xansu2bqfhCsd%2BC7ivsZpeJy67O4SB41YHQIgZ7Rej1tiv9mz7FACp15mJcNffTs66%2F7y7v71FkzCUTMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYvlGGIlJ1D3HQ2sircA50SN2O1TfsDNuQE%2BpCr4tEVG%2BvOoexFDmO%2B70Dt9mGiSXfn6k%2FXZBpLcr2LAXIz2rDA2J%2FJP8k7j1E6NQ6ZnG5aukzl%2BaqZX%2F6Wk5Tdeki1QdH%2FQyDSWDAd%2FnYSCGKC1bXiEGIcz5bVzyAEddd9twm10WzvRkp6NVWLTX7x5hgLKSTdnRVy7qewnWH6ilGx9VDrWDxpOkpIF1QlpHMBdk5SG%2FkpcCdLu7x8zNOXliCtp1xuYnwyo0hCJFm70EQXL5gBSbStudWMLyBj3Dv2WFY34nB3Tpnk4W%2Fj1Ywz0XJ%2BuYA0A8a2BjJeFARCe8pT2ptX%2F8w1bABdrVIm4ZOjClqEOBtWjRyJsOmD44NNUU3StNoDBBxthHRPCEGlltg4RrmR71KjbvzpsPBQHRd65erX%2BDuK25sZyTQXw67%2BS7ZsKJb1MBjbkmBGh0%2FE%2Fhp2yZ0n59YEYvFtoSiV7ZyKyEPbIWyfeczInOI7aKX4IG%2Fgz472MrikLJ5u%2F2Z%2FkLZZdOhHl0is%2F29jYErmiJrPb2v0Kx3R8Rszj2wtUecdWLiDfoFtfqi7g45YEFFBTSDDj6a5E39H2MYPR5M2Qf6PQjikRWZPFdO0wBuFMqCJvyusWtg3ZsKELBecp7SpMK6zz8QGOqUBr8AjY6YXA%2FYgeBQ1B2SAY8G29md%2Bo5a5Bk%2FgbrhfeJMznLd3Tiw67aiGvbWF7ltvcWkzcihQCcduUQYVIQ2nYSYZfhCTw4jhjfSoIqvZYag1R7v94dlkl1dltukvPv4ZHBqJ58X2oIQdfZCSQV02y5o5a1Kf9p335IK58eLR7%2Bfyn2AMz%2Fef8HbKoqwtOTneCgUTlI7LKil8hjDUR4KlPatQ7q90&X-Amz-Signature=5988132e6fccbe6e3fe45200cb271fb6394efbc75ff9d646441f2cc0084e3d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HFDD6Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDtnq8Gd54xansu2bqfhCsd%2BC7ivsZpeJy67O4SB41YHQIgZ7Rej1tiv9mz7FACp15mJcNffTs66%2F7y7v71FkzCUTMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYvlGGIlJ1D3HQ2sircA50SN2O1TfsDNuQE%2BpCr4tEVG%2BvOoexFDmO%2B70Dt9mGiSXfn6k%2FXZBpLcr2LAXIz2rDA2J%2FJP8k7j1E6NQ6ZnG5aukzl%2BaqZX%2F6Wk5Tdeki1QdH%2FQyDSWDAd%2FnYSCGKC1bXiEGIcz5bVzyAEddd9twm10WzvRkp6NVWLTX7x5hgLKSTdnRVy7qewnWH6ilGx9VDrWDxpOkpIF1QlpHMBdk5SG%2FkpcCdLu7x8zNOXliCtp1xuYnwyo0hCJFm70EQXL5gBSbStudWMLyBj3Dv2WFY34nB3Tpnk4W%2Fj1Ywz0XJ%2BuYA0A8a2BjJeFARCe8pT2ptX%2F8w1bABdrVIm4ZOjClqEOBtWjRyJsOmD44NNUU3StNoDBBxthHRPCEGlltg4RrmR71KjbvzpsPBQHRd65erX%2BDuK25sZyTQXw67%2BS7ZsKJb1MBjbkmBGh0%2FE%2Fhp2yZ0n59YEYvFtoSiV7ZyKyEPbIWyfeczInOI7aKX4IG%2Fgz472MrikLJ5u%2F2Z%2FkLZZdOhHl0is%2F29jYErmiJrPb2v0Kx3R8Rszj2wtUecdWLiDfoFtfqi7g45YEFFBTSDDj6a5E39H2MYPR5M2Qf6PQjikRWZPFdO0wBuFMqCJvyusWtg3ZsKELBecp7SpMK6zz8QGOqUBr8AjY6YXA%2FYgeBQ1B2SAY8G29md%2Bo5a5Bk%2FgbrhfeJMznLd3Tiw67aiGvbWF7ltvcWkzcihQCcduUQYVIQ2nYSYZfhCTw4jhjfSoIqvZYag1R7v94dlkl1dltukvPv4ZHBqJ58X2oIQdfZCSQV02y5o5a1Kf9p335IK58eLR7%2Bfyn2AMz%2Fef8HbKoqwtOTneCgUTlI7LKil8hjDUR4KlPatQ7q90&X-Amz-Signature=23ca905c49b570d6e0b3d23a66c4e993e5402522191f9dae3b5df2efce8da3e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HFDD6Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDtnq8Gd54xansu2bqfhCsd%2BC7ivsZpeJy67O4SB41YHQIgZ7Rej1tiv9mz7FACp15mJcNffTs66%2F7y7v71FkzCUTMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYvlGGIlJ1D3HQ2sircA50SN2O1TfsDNuQE%2BpCr4tEVG%2BvOoexFDmO%2B70Dt9mGiSXfn6k%2FXZBpLcr2LAXIz2rDA2J%2FJP8k7j1E6NQ6ZnG5aukzl%2BaqZX%2F6Wk5Tdeki1QdH%2FQyDSWDAd%2FnYSCGKC1bXiEGIcz5bVzyAEddd9twm10WzvRkp6NVWLTX7x5hgLKSTdnRVy7qewnWH6ilGx9VDrWDxpOkpIF1QlpHMBdk5SG%2FkpcCdLu7x8zNOXliCtp1xuYnwyo0hCJFm70EQXL5gBSbStudWMLyBj3Dv2WFY34nB3Tpnk4W%2Fj1Ywz0XJ%2BuYA0A8a2BjJeFARCe8pT2ptX%2F8w1bABdrVIm4ZOjClqEOBtWjRyJsOmD44NNUU3StNoDBBxthHRPCEGlltg4RrmR71KjbvzpsPBQHRd65erX%2BDuK25sZyTQXw67%2BS7ZsKJb1MBjbkmBGh0%2FE%2Fhp2yZ0n59YEYvFtoSiV7ZyKyEPbIWyfeczInOI7aKX4IG%2Fgz472MrikLJ5u%2F2Z%2FkLZZdOhHl0is%2F29jYErmiJrPb2v0Kx3R8Rszj2wtUecdWLiDfoFtfqi7g45YEFFBTSDDj6a5E39H2MYPR5M2Qf6PQjikRWZPFdO0wBuFMqCJvyusWtg3ZsKELBecp7SpMK6zz8QGOqUBr8AjY6YXA%2FYgeBQ1B2SAY8G29md%2Bo5a5Bk%2FgbrhfeJMznLd3Tiw67aiGvbWF7ltvcWkzcihQCcduUQYVIQ2nYSYZfhCTw4jhjfSoIqvZYag1R7v94dlkl1dltukvPv4ZHBqJ58X2oIQdfZCSQV02y5o5a1Kf9p335IK58eLR7%2Bfyn2AMz%2Fef8HbKoqwtOTneCgUTlI7LKil8hjDUR4KlPatQ7q90&X-Amz-Signature=d04508212b166147c4d3ada910315fa4c29b7eeed14fcf477678411da137f7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HFDD6Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDtnq8Gd54xansu2bqfhCsd%2BC7ivsZpeJy67O4SB41YHQIgZ7Rej1tiv9mz7FACp15mJcNffTs66%2F7y7v71FkzCUTMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYvlGGIlJ1D3HQ2sircA50SN2O1TfsDNuQE%2BpCr4tEVG%2BvOoexFDmO%2B70Dt9mGiSXfn6k%2FXZBpLcr2LAXIz2rDA2J%2FJP8k7j1E6NQ6ZnG5aukzl%2BaqZX%2F6Wk5Tdeki1QdH%2FQyDSWDAd%2FnYSCGKC1bXiEGIcz5bVzyAEddd9twm10WzvRkp6NVWLTX7x5hgLKSTdnRVy7qewnWH6ilGx9VDrWDxpOkpIF1QlpHMBdk5SG%2FkpcCdLu7x8zNOXliCtp1xuYnwyo0hCJFm70EQXL5gBSbStudWMLyBj3Dv2WFY34nB3Tpnk4W%2Fj1Ywz0XJ%2BuYA0A8a2BjJeFARCe8pT2ptX%2F8w1bABdrVIm4ZOjClqEOBtWjRyJsOmD44NNUU3StNoDBBxthHRPCEGlltg4RrmR71KjbvzpsPBQHRd65erX%2BDuK25sZyTQXw67%2BS7ZsKJb1MBjbkmBGh0%2FE%2Fhp2yZ0n59YEYvFtoSiV7ZyKyEPbIWyfeczInOI7aKX4IG%2Fgz472MrikLJ5u%2F2Z%2FkLZZdOhHl0is%2F29jYErmiJrPb2v0Kx3R8Rszj2wtUecdWLiDfoFtfqi7g45YEFFBTSDDj6a5E39H2MYPR5M2Qf6PQjikRWZPFdO0wBuFMqCJvyusWtg3ZsKELBecp7SpMK6zz8QGOqUBr8AjY6YXA%2FYgeBQ1B2SAY8G29md%2Bo5a5Bk%2FgbrhfeJMznLd3Tiw67aiGvbWF7ltvcWkzcihQCcduUQYVIQ2nYSYZfhCTw4jhjfSoIqvZYag1R7v94dlkl1dltukvPv4ZHBqJ58X2oIQdfZCSQV02y5o5a1Kf9p335IK58eLR7%2Bfyn2AMz%2Fef8HbKoqwtOTneCgUTlI7LKil8hjDUR4KlPatQ7q90&X-Amz-Signature=60ee2f3ade5323913cd3a0cccf8061bf9cf109b740df9d2c7c902c1f0aa0e9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
