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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5QTPNN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWd6DxfhbBpNz5mMfS%2FvbpxHBiTaCypAXxmSgx03UOuAiEAmFqUkKUxxlZmDszpX68PSZa3%2BQSUMwMX%2BlzANYJ8qVsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLAG%2FPXUiM7apvCNdCrcAw8jLpQ%2FzHcswyF6Ic4DoULVVyL8AOu6vtK9INASQWhwJY5U9pj4mDYwWxFgM1FBGicKBwJ57%2B2DwK7Dv5jZfkwh8Gnx1oowggasU43PfcLJ3%2FuuTz9LKLAtaGRsha1Hn26jb5Swhj7RnRVgxu0rqfob%2BBfxVP5z1qxk1i%2FbpYzFZFs8TXzjqKYxQO9vI8b8L%2FU5LGp9weKNnx3Zf3ZKiDoYgQ%2FKefHk%2FZAcSKsfKXR2BGqhFipdcV8uiPEJ4q%2B5dog5I2HgxLyuI8mFj5HjoO459MDx1hrsWKXcF8POLds06g7kzH2ZT%2BQBzAQFfc%2BAflpbMMzreo%2BWfIBU7ZT%2By5ReGREQkib7YoF4CcSTn2sc77S%2FDXyt%2Fvu7l7aSmpteeqYjHtp0gUj2Yt%2FNzgPjytGbcqSKe9kHRB3nEvgoNivTK%2BGsUM0OGLwuEU3K6cygl5jy1%2FbR3UbKG2hKB33AWKweHlJ8beWM2uV1eX%2FA2KlFo%2BJe8%2BbPBV5IePTaLzOfLzuhFM3%2BDWvJiX%2F8dHxi0vmQyNE0N%2Bh58yC3umT7xhCkYB0ymufK1RT7y3Kv%2BcEsimTEeUCNmMFiz2wLdYNGNZamnQlMs1e2tUOu8a%2BJ%2FGiFFXX5dnT0%2BAnQ8tpxMPeSuMQGOqUBHDz2xkYG0Nq%2F%2FPuSxuqpRvRijaf785%2FB3pZRmZIuZhRB72ziQ4j8mvLnBTGWdSwDlHSa0HMCXeYzZnrQvU5w4N4J8caLDQP%2BbCWTym9kkpre1JRrsp8sRl42cvmNCXUL0M7CZfh4po5F3hOu0jTQCds8jPCnN2VfnYH2ZaM0LRLP%2BUbjTu4JTe%2F27iHCWFDcz2LDSZW63Td1IMc8Sr623kFjZlnU&X-Amz-Signature=eed36cd63e258403abaff65a28ed1cf000569bbab6dca05e05c84c2956c5070e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5QTPNN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWd6DxfhbBpNz5mMfS%2FvbpxHBiTaCypAXxmSgx03UOuAiEAmFqUkKUxxlZmDszpX68PSZa3%2BQSUMwMX%2BlzANYJ8qVsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLAG%2FPXUiM7apvCNdCrcAw8jLpQ%2FzHcswyF6Ic4DoULVVyL8AOu6vtK9INASQWhwJY5U9pj4mDYwWxFgM1FBGicKBwJ57%2B2DwK7Dv5jZfkwh8Gnx1oowggasU43PfcLJ3%2FuuTz9LKLAtaGRsha1Hn26jb5Swhj7RnRVgxu0rqfob%2BBfxVP5z1qxk1i%2FbpYzFZFs8TXzjqKYxQO9vI8b8L%2FU5LGp9weKNnx3Zf3ZKiDoYgQ%2FKefHk%2FZAcSKsfKXR2BGqhFipdcV8uiPEJ4q%2B5dog5I2HgxLyuI8mFj5HjoO459MDx1hrsWKXcF8POLds06g7kzH2ZT%2BQBzAQFfc%2BAflpbMMzreo%2BWfIBU7ZT%2By5ReGREQkib7YoF4CcSTn2sc77S%2FDXyt%2Fvu7l7aSmpteeqYjHtp0gUj2Yt%2FNzgPjytGbcqSKe9kHRB3nEvgoNivTK%2BGsUM0OGLwuEU3K6cygl5jy1%2FbR3UbKG2hKB33AWKweHlJ8beWM2uV1eX%2FA2KlFo%2BJe8%2BbPBV5IePTaLzOfLzuhFM3%2BDWvJiX%2F8dHxi0vmQyNE0N%2Bh58yC3umT7xhCkYB0ymufK1RT7y3Kv%2BcEsimTEeUCNmMFiz2wLdYNGNZamnQlMs1e2tUOu8a%2BJ%2FGiFFXX5dnT0%2BAnQ8tpxMPeSuMQGOqUBHDz2xkYG0Nq%2F%2FPuSxuqpRvRijaf785%2FB3pZRmZIuZhRB72ziQ4j8mvLnBTGWdSwDlHSa0HMCXeYzZnrQvU5w4N4J8caLDQP%2BbCWTym9kkpre1JRrsp8sRl42cvmNCXUL0M7CZfh4po5F3hOu0jTQCds8jPCnN2VfnYH2ZaM0LRLP%2BUbjTu4JTe%2F27iHCWFDcz2LDSZW63Td1IMc8Sr623kFjZlnU&X-Amz-Signature=be2af9a592be61d71c551620656daf9b4f386cab0dedb775ad743a1ed3b09a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5QTPNN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWd6DxfhbBpNz5mMfS%2FvbpxHBiTaCypAXxmSgx03UOuAiEAmFqUkKUxxlZmDszpX68PSZa3%2BQSUMwMX%2BlzANYJ8qVsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLAG%2FPXUiM7apvCNdCrcAw8jLpQ%2FzHcswyF6Ic4DoULVVyL8AOu6vtK9INASQWhwJY5U9pj4mDYwWxFgM1FBGicKBwJ57%2B2DwK7Dv5jZfkwh8Gnx1oowggasU43PfcLJ3%2FuuTz9LKLAtaGRsha1Hn26jb5Swhj7RnRVgxu0rqfob%2BBfxVP5z1qxk1i%2FbpYzFZFs8TXzjqKYxQO9vI8b8L%2FU5LGp9weKNnx3Zf3ZKiDoYgQ%2FKefHk%2FZAcSKsfKXR2BGqhFipdcV8uiPEJ4q%2B5dog5I2HgxLyuI8mFj5HjoO459MDx1hrsWKXcF8POLds06g7kzH2ZT%2BQBzAQFfc%2BAflpbMMzreo%2BWfIBU7ZT%2By5ReGREQkib7YoF4CcSTn2sc77S%2FDXyt%2Fvu7l7aSmpteeqYjHtp0gUj2Yt%2FNzgPjytGbcqSKe9kHRB3nEvgoNivTK%2BGsUM0OGLwuEU3K6cygl5jy1%2FbR3UbKG2hKB33AWKweHlJ8beWM2uV1eX%2FA2KlFo%2BJe8%2BbPBV5IePTaLzOfLzuhFM3%2BDWvJiX%2F8dHxi0vmQyNE0N%2Bh58yC3umT7xhCkYB0ymufK1RT7y3Kv%2BcEsimTEeUCNmMFiz2wLdYNGNZamnQlMs1e2tUOu8a%2BJ%2FGiFFXX5dnT0%2BAnQ8tpxMPeSuMQGOqUBHDz2xkYG0Nq%2F%2FPuSxuqpRvRijaf785%2FB3pZRmZIuZhRB72ziQ4j8mvLnBTGWdSwDlHSa0HMCXeYzZnrQvU5w4N4J8caLDQP%2BbCWTym9kkpre1JRrsp8sRl42cvmNCXUL0M7CZfh4po5F3hOu0jTQCds8jPCnN2VfnYH2ZaM0LRLP%2BUbjTu4JTe%2F27iHCWFDcz2LDSZW63Td1IMc8Sr623kFjZlnU&X-Amz-Signature=66575bd7637621e7e9c5b4a554d3c1da2c6064a74a878a6a98bbe9877d5f0240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5QTPNN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWd6DxfhbBpNz5mMfS%2FvbpxHBiTaCypAXxmSgx03UOuAiEAmFqUkKUxxlZmDszpX68PSZa3%2BQSUMwMX%2BlzANYJ8qVsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLAG%2FPXUiM7apvCNdCrcAw8jLpQ%2FzHcswyF6Ic4DoULVVyL8AOu6vtK9INASQWhwJY5U9pj4mDYwWxFgM1FBGicKBwJ57%2B2DwK7Dv5jZfkwh8Gnx1oowggasU43PfcLJ3%2FuuTz9LKLAtaGRsha1Hn26jb5Swhj7RnRVgxu0rqfob%2BBfxVP5z1qxk1i%2FbpYzFZFs8TXzjqKYxQO9vI8b8L%2FU5LGp9weKNnx3Zf3ZKiDoYgQ%2FKefHk%2FZAcSKsfKXR2BGqhFipdcV8uiPEJ4q%2B5dog5I2HgxLyuI8mFj5HjoO459MDx1hrsWKXcF8POLds06g7kzH2ZT%2BQBzAQFfc%2BAflpbMMzreo%2BWfIBU7ZT%2By5ReGREQkib7YoF4CcSTn2sc77S%2FDXyt%2Fvu7l7aSmpteeqYjHtp0gUj2Yt%2FNzgPjytGbcqSKe9kHRB3nEvgoNivTK%2BGsUM0OGLwuEU3K6cygl5jy1%2FbR3UbKG2hKB33AWKweHlJ8beWM2uV1eX%2FA2KlFo%2BJe8%2BbPBV5IePTaLzOfLzuhFM3%2BDWvJiX%2F8dHxi0vmQyNE0N%2Bh58yC3umT7xhCkYB0ymufK1RT7y3Kv%2BcEsimTEeUCNmMFiz2wLdYNGNZamnQlMs1e2tUOu8a%2BJ%2FGiFFXX5dnT0%2BAnQ8tpxMPeSuMQGOqUBHDz2xkYG0Nq%2F%2FPuSxuqpRvRijaf785%2FB3pZRmZIuZhRB72ziQ4j8mvLnBTGWdSwDlHSa0HMCXeYzZnrQvU5w4N4J8caLDQP%2BbCWTym9kkpre1JRrsp8sRl42cvmNCXUL0M7CZfh4po5F3hOu0jTQCds8jPCnN2VfnYH2ZaM0LRLP%2BUbjTu4JTe%2F27iHCWFDcz2LDSZW63Td1IMc8Sr623kFjZlnU&X-Amz-Signature=d80c4d40c03082236653e5c68c8a1e1c47e1cdca118dd1099f6d0717996e6df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5QTPNN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWd6DxfhbBpNz5mMfS%2FvbpxHBiTaCypAXxmSgx03UOuAiEAmFqUkKUxxlZmDszpX68PSZa3%2BQSUMwMX%2BlzANYJ8qVsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLAG%2FPXUiM7apvCNdCrcAw8jLpQ%2FzHcswyF6Ic4DoULVVyL8AOu6vtK9INASQWhwJY5U9pj4mDYwWxFgM1FBGicKBwJ57%2B2DwK7Dv5jZfkwh8Gnx1oowggasU43PfcLJ3%2FuuTz9LKLAtaGRsha1Hn26jb5Swhj7RnRVgxu0rqfob%2BBfxVP5z1qxk1i%2FbpYzFZFs8TXzjqKYxQO9vI8b8L%2FU5LGp9weKNnx3Zf3ZKiDoYgQ%2FKefHk%2FZAcSKsfKXR2BGqhFipdcV8uiPEJ4q%2B5dog5I2HgxLyuI8mFj5HjoO459MDx1hrsWKXcF8POLds06g7kzH2ZT%2BQBzAQFfc%2BAflpbMMzreo%2BWfIBU7ZT%2By5ReGREQkib7YoF4CcSTn2sc77S%2FDXyt%2Fvu7l7aSmpteeqYjHtp0gUj2Yt%2FNzgPjytGbcqSKe9kHRB3nEvgoNivTK%2BGsUM0OGLwuEU3K6cygl5jy1%2FbR3UbKG2hKB33AWKweHlJ8beWM2uV1eX%2FA2KlFo%2BJe8%2BbPBV5IePTaLzOfLzuhFM3%2BDWvJiX%2F8dHxi0vmQyNE0N%2Bh58yC3umT7xhCkYB0ymufK1RT7y3Kv%2BcEsimTEeUCNmMFiz2wLdYNGNZamnQlMs1e2tUOu8a%2BJ%2FGiFFXX5dnT0%2BAnQ8tpxMPeSuMQGOqUBHDz2xkYG0Nq%2F%2FPuSxuqpRvRijaf785%2FB3pZRmZIuZhRB72ziQ4j8mvLnBTGWdSwDlHSa0HMCXeYzZnrQvU5w4N4J8caLDQP%2BbCWTym9kkpre1JRrsp8sRl42cvmNCXUL0M7CZfh4po5F3hOu0jTQCds8jPCnN2VfnYH2ZaM0LRLP%2BUbjTu4JTe%2F27iHCWFDcz2LDSZW63Td1IMc8Sr623kFjZlnU&X-Amz-Signature=52afad6ec940704e08b17f18d8211e023cad51de82e00d3d78e19ac615222008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5QTPNN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWd6DxfhbBpNz5mMfS%2FvbpxHBiTaCypAXxmSgx03UOuAiEAmFqUkKUxxlZmDszpX68PSZa3%2BQSUMwMX%2BlzANYJ8qVsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLAG%2FPXUiM7apvCNdCrcAw8jLpQ%2FzHcswyF6Ic4DoULVVyL8AOu6vtK9INASQWhwJY5U9pj4mDYwWxFgM1FBGicKBwJ57%2B2DwK7Dv5jZfkwh8Gnx1oowggasU43PfcLJ3%2FuuTz9LKLAtaGRsha1Hn26jb5Swhj7RnRVgxu0rqfob%2BBfxVP5z1qxk1i%2FbpYzFZFs8TXzjqKYxQO9vI8b8L%2FU5LGp9weKNnx3Zf3ZKiDoYgQ%2FKefHk%2FZAcSKsfKXR2BGqhFipdcV8uiPEJ4q%2B5dog5I2HgxLyuI8mFj5HjoO459MDx1hrsWKXcF8POLds06g7kzH2ZT%2BQBzAQFfc%2BAflpbMMzreo%2BWfIBU7ZT%2By5ReGREQkib7YoF4CcSTn2sc77S%2FDXyt%2Fvu7l7aSmpteeqYjHtp0gUj2Yt%2FNzgPjytGbcqSKe9kHRB3nEvgoNivTK%2BGsUM0OGLwuEU3K6cygl5jy1%2FbR3UbKG2hKB33AWKweHlJ8beWM2uV1eX%2FA2KlFo%2BJe8%2BbPBV5IePTaLzOfLzuhFM3%2BDWvJiX%2F8dHxi0vmQyNE0N%2Bh58yC3umT7xhCkYB0ymufK1RT7y3Kv%2BcEsimTEeUCNmMFiz2wLdYNGNZamnQlMs1e2tUOu8a%2BJ%2FGiFFXX5dnT0%2BAnQ8tpxMPeSuMQGOqUBHDz2xkYG0Nq%2F%2FPuSxuqpRvRijaf785%2FB3pZRmZIuZhRB72ziQ4j8mvLnBTGWdSwDlHSa0HMCXeYzZnrQvU5w4N4J8caLDQP%2BbCWTym9kkpre1JRrsp8sRl42cvmNCXUL0M7CZfh4po5F3hOu0jTQCds8jPCnN2VfnYH2ZaM0LRLP%2BUbjTu4JTe%2F27iHCWFDcz2LDSZW63Td1IMc8Sr623kFjZlnU&X-Amz-Signature=9beff096c4adcef6bcb1d1d199f69cdbb00c90d4cac9268d661ca763a9e1864e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5QTPNN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWd6DxfhbBpNz5mMfS%2FvbpxHBiTaCypAXxmSgx03UOuAiEAmFqUkKUxxlZmDszpX68PSZa3%2BQSUMwMX%2BlzANYJ8qVsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLAG%2FPXUiM7apvCNdCrcAw8jLpQ%2FzHcswyF6Ic4DoULVVyL8AOu6vtK9INASQWhwJY5U9pj4mDYwWxFgM1FBGicKBwJ57%2B2DwK7Dv5jZfkwh8Gnx1oowggasU43PfcLJ3%2FuuTz9LKLAtaGRsha1Hn26jb5Swhj7RnRVgxu0rqfob%2BBfxVP5z1qxk1i%2FbpYzFZFs8TXzjqKYxQO9vI8b8L%2FU5LGp9weKNnx3Zf3ZKiDoYgQ%2FKefHk%2FZAcSKsfKXR2BGqhFipdcV8uiPEJ4q%2B5dog5I2HgxLyuI8mFj5HjoO459MDx1hrsWKXcF8POLds06g7kzH2ZT%2BQBzAQFfc%2BAflpbMMzreo%2BWfIBU7ZT%2By5ReGREQkib7YoF4CcSTn2sc77S%2FDXyt%2Fvu7l7aSmpteeqYjHtp0gUj2Yt%2FNzgPjytGbcqSKe9kHRB3nEvgoNivTK%2BGsUM0OGLwuEU3K6cygl5jy1%2FbR3UbKG2hKB33AWKweHlJ8beWM2uV1eX%2FA2KlFo%2BJe8%2BbPBV5IePTaLzOfLzuhFM3%2BDWvJiX%2F8dHxi0vmQyNE0N%2Bh58yC3umT7xhCkYB0ymufK1RT7y3Kv%2BcEsimTEeUCNmMFiz2wLdYNGNZamnQlMs1e2tUOu8a%2BJ%2FGiFFXX5dnT0%2BAnQ8tpxMPeSuMQGOqUBHDz2xkYG0Nq%2F%2FPuSxuqpRvRijaf785%2FB3pZRmZIuZhRB72ziQ4j8mvLnBTGWdSwDlHSa0HMCXeYzZnrQvU5w4N4J8caLDQP%2BbCWTym9kkpre1JRrsp8sRl42cvmNCXUL0M7CZfh4po5F3hOu0jTQCds8jPCnN2VfnYH2ZaM0LRLP%2BUbjTu4JTe%2F27iHCWFDcz2LDSZW63Td1IMc8Sr623kFjZlnU&X-Amz-Signature=151b70cbc978e1835c1c2e3e4b1485e48715dd75862ff19840fd03600dfc8201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5QTPNN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWd6DxfhbBpNz5mMfS%2FvbpxHBiTaCypAXxmSgx03UOuAiEAmFqUkKUxxlZmDszpX68PSZa3%2BQSUMwMX%2BlzANYJ8qVsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLAG%2FPXUiM7apvCNdCrcAw8jLpQ%2FzHcswyF6Ic4DoULVVyL8AOu6vtK9INASQWhwJY5U9pj4mDYwWxFgM1FBGicKBwJ57%2B2DwK7Dv5jZfkwh8Gnx1oowggasU43PfcLJ3%2FuuTz9LKLAtaGRsha1Hn26jb5Swhj7RnRVgxu0rqfob%2BBfxVP5z1qxk1i%2FbpYzFZFs8TXzjqKYxQO9vI8b8L%2FU5LGp9weKNnx3Zf3ZKiDoYgQ%2FKefHk%2FZAcSKsfKXR2BGqhFipdcV8uiPEJ4q%2B5dog5I2HgxLyuI8mFj5HjoO459MDx1hrsWKXcF8POLds06g7kzH2ZT%2BQBzAQFfc%2BAflpbMMzreo%2BWfIBU7ZT%2By5ReGREQkib7YoF4CcSTn2sc77S%2FDXyt%2Fvu7l7aSmpteeqYjHtp0gUj2Yt%2FNzgPjytGbcqSKe9kHRB3nEvgoNivTK%2BGsUM0OGLwuEU3K6cygl5jy1%2FbR3UbKG2hKB33AWKweHlJ8beWM2uV1eX%2FA2KlFo%2BJe8%2BbPBV5IePTaLzOfLzuhFM3%2BDWvJiX%2F8dHxi0vmQyNE0N%2Bh58yC3umT7xhCkYB0ymufK1RT7y3Kv%2BcEsimTEeUCNmMFiz2wLdYNGNZamnQlMs1e2tUOu8a%2BJ%2FGiFFXX5dnT0%2BAnQ8tpxMPeSuMQGOqUBHDz2xkYG0Nq%2F%2FPuSxuqpRvRijaf785%2FB3pZRmZIuZhRB72ziQ4j8mvLnBTGWdSwDlHSa0HMCXeYzZnrQvU5w4N4J8caLDQP%2BbCWTym9kkpre1JRrsp8sRl42cvmNCXUL0M7CZfh4po5F3hOu0jTQCds8jPCnN2VfnYH2ZaM0LRLP%2BUbjTu4JTe%2F27iHCWFDcz2LDSZW63Td1IMc8Sr623kFjZlnU&X-Amz-Signature=8be2821e782c55057faa93f7ad92667679f70595debc0153799acf524fb85d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
