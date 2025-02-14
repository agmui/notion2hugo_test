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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PS7ABK7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2W7Ur0aYZ3GIlrN1IDlQoU4NnZ0VkjZw24T%2FTF5nnRAiEAibm3ucpyfXUtukothHARNPlSkjiPcHUOfWovsIRtUiUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDEHLAKWuOgfln1e%2BCrcAxHyaenVNIbIjYFrs5HeLycZDLNLW24qOom3EuZZ9P0K2BbheS4MVMEy1eYN4hIc022%2FWw8dPdPna8h9I0oV66P1aiU5bF5vmTaMyLpKxEn%2FXNapMYI7j2fKRsAFeVP6pQNfcJx7JBD1PnNhCrtfwZMkz8P4SebBWrwxLxkaun463r4AOzViCF1pK7ADnWoc0X1lMO0x3Olt%2BJmx5RlMvCQddnjad%2Bu4t7fUXQ3TxDCowPSZBnnMl707ljjGTqz8JKFTgHCXEKGEeTGex815534tEhuzd4Xa7QsKOBXhLchc8Joc6S0atgwydg%2B2mE%2Bzw04Uxnp3TjXXQzpz%2FjKKfM8k8yFSgenW04D9shhw2rnD8uItKrCRvqUtQHI7LhdXGFG6QxsHj7BGrVaub1NxKZfc9TmKee8%2B%2B4qaJ4QSx4kpXTv7YHfyCLy%2Bx9Y9LDWBMs1HQeVETM74ahA4ZisujpAyfyowgwjxRp1HLmkdOsLz4n%2FMH8cf0mlByiMJlsuPhBV3NdFevMyXXJKdLV1x4DqtsvCHpbMs%2BkrZvjXQ7Llt8lXPDGD55ZaOMSL7SZHpqCAvVd866cN0wF8GPY3A48gx1WcwtQsbg%2FIDsSFtvhOwwqfcbC1JNAcfTsxfMOj2ur0GOqUB7c0ll7jvXmFu2ASYHQ0LM5pmT1zZfjYXCwLtfKaeKou8YBPPUKNk1Rz13OT6o39Al0hLI8e2rLQfhgnwMUFbxdNlWxZARKzPRBZZU3j2at38ha%2F9532T7QTtuVc8C%2BCzkGKhZjNr2LX6yWmunIUH4qni8qHt8o7Yzv%2FF96JZMKqVI7N%2B0tGBRtLiaGLVt0T7OeFJa1Q%2Fu4Z5GhhPTioUwillImSt&X-Amz-Signature=35cd3a1a175c1c59e1f38a791756a3fd60752c7779bc900b67d2d2193df0d832&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PS7ABK7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2W7Ur0aYZ3GIlrN1IDlQoU4NnZ0VkjZw24T%2FTF5nnRAiEAibm3ucpyfXUtukothHARNPlSkjiPcHUOfWovsIRtUiUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDEHLAKWuOgfln1e%2BCrcAxHyaenVNIbIjYFrs5HeLycZDLNLW24qOom3EuZZ9P0K2BbheS4MVMEy1eYN4hIc022%2FWw8dPdPna8h9I0oV66P1aiU5bF5vmTaMyLpKxEn%2FXNapMYI7j2fKRsAFeVP6pQNfcJx7JBD1PnNhCrtfwZMkz8P4SebBWrwxLxkaun463r4AOzViCF1pK7ADnWoc0X1lMO0x3Olt%2BJmx5RlMvCQddnjad%2Bu4t7fUXQ3TxDCowPSZBnnMl707ljjGTqz8JKFTgHCXEKGEeTGex815534tEhuzd4Xa7QsKOBXhLchc8Joc6S0atgwydg%2B2mE%2Bzw04Uxnp3TjXXQzpz%2FjKKfM8k8yFSgenW04D9shhw2rnD8uItKrCRvqUtQHI7LhdXGFG6QxsHj7BGrVaub1NxKZfc9TmKee8%2B%2B4qaJ4QSx4kpXTv7YHfyCLy%2Bx9Y9LDWBMs1HQeVETM74ahA4ZisujpAyfyowgwjxRp1HLmkdOsLz4n%2FMH8cf0mlByiMJlsuPhBV3NdFevMyXXJKdLV1x4DqtsvCHpbMs%2BkrZvjXQ7Llt8lXPDGD55ZaOMSL7SZHpqCAvVd866cN0wF8GPY3A48gx1WcwtQsbg%2FIDsSFtvhOwwqfcbC1JNAcfTsxfMOj2ur0GOqUB7c0ll7jvXmFu2ASYHQ0LM5pmT1zZfjYXCwLtfKaeKou8YBPPUKNk1Rz13OT6o39Al0hLI8e2rLQfhgnwMUFbxdNlWxZARKzPRBZZU3j2at38ha%2F9532T7QTtuVc8C%2BCzkGKhZjNr2LX6yWmunIUH4qni8qHt8o7Yzv%2FF96JZMKqVI7N%2B0tGBRtLiaGLVt0T7OeFJa1Q%2Fu4Z5GhhPTioUwillImSt&X-Amz-Signature=008debf0db245f58335d2dcd8ef1ee8b69fbb78ac6173c1b65481930490ff339&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PS7ABK7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2W7Ur0aYZ3GIlrN1IDlQoU4NnZ0VkjZw24T%2FTF5nnRAiEAibm3ucpyfXUtukothHARNPlSkjiPcHUOfWovsIRtUiUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDEHLAKWuOgfln1e%2BCrcAxHyaenVNIbIjYFrs5HeLycZDLNLW24qOom3EuZZ9P0K2BbheS4MVMEy1eYN4hIc022%2FWw8dPdPna8h9I0oV66P1aiU5bF5vmTaMyLpKxEn%2FXNapMYI7j2fKRsAFeVP6pQNfcJx7JBD1PnNhCrtfwZMkz8P4SebBWrwxLxkaun463r4AOzViCF1pK7ADnWoc0X1lMO0x3Olt%2BJmx5RlMvCQddnjad%2Bu4t7fUXQ3TxDCowPSZBnnMl707ljjGTqz8JKFTgHCXEKGEeTGex815534tEhuzd4Xa7QsKOBXhLchc8Joc6S0atgwydg%2B2mE%2Bzw04Uxnp3TjXXQzpz%2FjKKfM8k8yFSgenW04D9shhw2rnD8uItKrCRvqUtQHI7LhdXGFG6QxsHj7BGrVaub1NxKZfc9TmKee8%2B%2B4qaJ4QSx4kpXTv7YHfyCLy%2Bx9Y9LDWBMs1HQeVETM74ahA4ZisujpAyfyowgwjxRp1HLmkdOsLz4n%2FMH8cf0mlByiMJlsuPhBV3NdFevMyXXJKdLV1x4DqtsvCHpbMs%2BkrZvjXQ7Llt8lXPDGD55ZaOMSL7SZHpqCAvVd866cN0wF8GPY3A48gx1WcwtQsbg%2FIDsSFtvhOwwqfcbC1JNAcfTsxfMOj2ur0GOqUB7c0ll7jvXmFu2ASYHQ0LM5pmT1zZfjYXCwLtfKaeKou8YBPPUKNk1Rz13OT6o39Al0hLI8e2rLQfhgnwMUFbxdNlWxZARKzPRBZZU3j2at38ha%2F9532T7QTtuVc8C%2BCzkGKhZjNr2LX6yWmunIUH4qni8qHt8o7Yzv%2FF96JZMKqVI7N%2B0tGBRtLiaGLVt0T7OeFJa1Q%2Fu4Z5GhhPTioUwillImSt&X-Amz-Signature=4959a5d673f8d4ecced9ffc6104928bd2917673bb163693122085cdbb6ada07a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PS7ABK7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2W7Ur0aYZ3GIlrN1IDlQoU4NnZ0VkjZw24T%2FTF5nnRAiEAibm3ucpyfXUtukothHARNPlSkjiPcHUOfWovsIRtUiUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDEHLAKWuOgfln1e%2BCrcAxHyaenVNIbIjYFrs5HeLycZDLNLW24qOom3EuZZ9P0K2BbheS4MVMEy1eYN4hIc022%2FWw8dPdPna8h9I0oV66P1aiU5bF5vmTaMyLpKxEn%2FXNapMYI7j2fKRsAFeVP6pQNfcJx7JBD1PnNhCrtfwZMkz8P4SebBWrwxLxkaun463r4AOzViCF1pK7ADnWoc0X1lMO0x3Olt%2BJmx5RlMvCQddnjad%2Bu4t7fUXQ3TxDCowPSZBnnMl707ljjGTqz8JKFTgHCXEKGEeTGex815534tEhuzd4Xa7QsKOBXhLchc8Joc6S0atgwydg%2B2mE%2Bzw04Uxnp3TjXXQzpz%2FjKKfM8k8yFSgenW04D9shhw2rnD8uItKrCRvqUtQHI7LhdXGFG6QxsHj7BGrVaub1NxKZfc9TmKee8%2B%2B4qaJ4QSx4kpXTv7YHfyCLy%2Bx9Y9LDWBMs1HQeVETM74ahA4ZisujpAyfyowgwjxRp1HLmkdOsLz4n%2FMH8cf0mlByiMJlsuPhBV3NdFevMyXXJKdLV1x4DqtsvCHpbMs%2BkrZvjXQ7Llt8lXPDGD55ZaOMSL7SZHpqCAvVd866cN0wF8GPY3A48gx1WcwtQsbg%2FIDsSFtvhOwwqfcbC1JNAcfTsxfMOj2ur0GOqUB7c0ll7jvXmFu2ASYHQ0LM5pmT1zZfjYXCwLtfKaeKou8YBPPUKNk1Rz13OT6o39Al0hLI8e2rLQfhgnwMUFbxdNlWxZARKzPRBZZU3j2at38ha%2F9532T7QTtuVc8C%2BCzkGKhZjNr2LX6yWmunIUH4qni8qHt8o7Yzv%2FF96JZMKqVI7N%2B0tGBRtLiaGLVt0T7OeFJa1Q%2Fu4Z5GhhPTioUwillImSt&X-Amz-Signature=5c2c57a4e7c88bd65988f10fc52fcbff5d1a6a1e39a149a1adf70da07ae7115a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PS7ABK7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2W7Ur0aYZ3GIlrN1IDlQoU4NnZ0VkjZw24T%2FTF5nnRAiEAibm3ucpyfXUtukothHARNPlSkjiPcHUOfWovsIRtUiUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDEHLAKWuOgfln1e%2BCrcAxHyaenVNIbIjYFrs5HeLycZDLNLW24qOom3EuZZ9P0K2BbheS4MVMEy1eYN4hIc022%2FWw8dPdPna8h9I0oV66P1aiU5bF5vmTaMyLpKxEn%2FXNapMYI7j2fKRsAFeVP6pQNfcJx7JBD1PnNhCrtfwZMkz8P4SebBWrwxLxkaun463r4AOzViCF1pK7ADnWoc0X1lMO0x3Olt%2BJmx5RlMvCQddnjad%2Bu4t7fUXQ3TxDCowPSZBnnMl707ljjGTqz8JKFTgHCXEKGEeTGex815534tEhuzd4Xa7QsKOBXhLchc8Joc6S0atgwydg%2B2mE%2Bzw04Uxnp3TjXXQzpz%2FjKKfM8k8yFSgenW04D9shhw2rnD8uItKrCRvqUtQHI7LhdXGFG6QxsHj7BGrVaub1NxKZfc9TmKee8%2B%2B4qaJ4QSx4kpXTv7YHfyCLy%2Bx9Y9LDWBMs1HQeVETM74ahA4ZisujpAyfyowgwjxRp1HLmkdOsLz4n%2FMH8cf0mlByiMJlsuPhBV3NdFevMyXXJKdLV1x4DqtsvCHpbMs%2BkrZvjXQ7Llt8lXPDGD55ZaOMSL7SZHpqCAvVd866cN0wF8GPY3A48gx1WcwtQsbg%2FIDsSFtvhOwwqfcbC1JNAcfTsxfMOj2ur0GOqUB7c0ll7jvXmFu2ASYHQ0LM5pmT1zZfjYXCwLtfKaeKou8YBPPUKNk1Rz13OT6o39Al0hLI8e2rLQfhgnwMUFbxdNlWxZARKzPRBZZU3j2at38ha%2F9532T7QTtuVc8C%2BCzkGKhZjNr2LX6yWmunIUH4qni8qHt8o7Yzv%2FF96JZMKqVI7N%2B0tGBRtLiaGLVt0T7OeFJa1Q%2Fu4Z5GhhPTioUwillImSt&X-Amz-Signature=41ff2d9994c56fb33f7914298f8603134c9f1e1600317251a9fa911f86ab4b77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PS7ABK7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2W7Ur0aYZ3GIlrN1IDlQoU4NnZ0VkjZw24T%2FTF5nnRAiEAibm3ucpyfXUtukothHARNPlSkjiPcHUOfWovsIRtUiUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDEHLAKWuOgfln1e%2BCrcAxHyaenVNIbIjYFrs5HeLycZDLNLW24qOom3EuZZ9P0K2BbheS4MVMEy1eYN4hIc022%2FWw8dPdPna8h9I0oV66P1aiU5bF5vmTaMyLpKxEn%2FXNapMYI7j2fKRsAFeVP6pQNfcJx7JBD1PnNhCrtfwZMkz8P4SebBWrwxLxkaun463r4AOzViCF1pK7ADnWoc0X1lMO0x3Olt%2BJmx5RlMvCQddnjad%2Bu4t7fUXQ3TxDCowPSZBnnMl707ljjGTqz8JKFTgHCXEKGEeTGex815534tEhuzd4Xa7QsKOBXhLchc8Joc6S0atgwydg%2B2mE%2Bzw04Uxnp3TjXXQzpz%2FjKKfM8k8yFSgenW04D9shhw2rnD8uItKrCRvqUtQHI7LhdXGFG6QxsHj7BGrVaub1NxKZfc9TmKee8%2B%2B4qaJ4QSx4kpXTv7YHfyCLy%2Bx9Y9LDWBMs1HQeVETM74ahA4ZisujpAyfyowgwjxRp1HLmkdOsLz4n%2FMH8cf0mlByiMJlsuPhBV3NdFevMyXXJKdLV1x4DqtsvCHpbMs%2BkrZvjXQ7Llt8lXPDGD55ZaOMSL7SZHpqCAvVd866cN0wF8GPY3A48gx1WcwtQsbg%2FIDsSFtvhOwwqfcbC1JNAcfTsxfMOj2ur0GOqUB7c0ll7jvXmFu2ASYHQ0LM5pmT1zZfjYXCwLtfKaeKou8YBPPUKNk1Rz13OT6o39Al0hLI8e2rLQfhgnwMUFbxdNlWxZARKzPRBZZU3j2at38ha%2F9532T7QTtuVc8C%2BCzkGKhZjNr2LX6yWmunIUH4qni8qHt8o7Yzv%2FF96JZMKqVI7N%2B0tGBRtLiaGLVt0T7OeFJa1Q%2Fu4Z5GhhPTioUwillImSt&X-Amz-Signature=85aa9ac011ef7037a5f946bc7063c7f8edb6654d3f3b32aea5e7157f2265319d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PS7ABK7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2W7Ur0aYZ3GIlrN1IDlQoU4NnZ0VkjZw24T%2FTF5nnRAiEAibm3ucpyfXUtukothHARNPlSkjiPcHUOfWovsIRtUiUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDEHLAKWuOgfln1e%2BCrcAxHyaenVNIbIjYFrs5HeLycZDLNLW24qOom3EuZZ9P0K2BbheS4MVMEy1eYN4hIc022%2FWw8dPdPna8h9I0oV66P1aiU5bF5vmTaMyLpKxEn%2FXNapMYI7j2fKRsAFeVP6pQNfcJx7JBD1PnNhCrtfwZMkz8P4SebBWrwxLxkaun463r4AOzViCF1pK7ADnWoc0X1lMO0x3Olt%2BJmx5RlMvCQddnjad%2Bu4t7fUXQ3TxDCowPSZBnnMl707ljjGTqz8JKFTgHCXEKGEeTGex815534tEhuzd4Xa7QsKOBXhLchc8Joc6S0atgwydg%2B2mE%2Bzw04Uxnp3TjXXQzpz%2FjKKfM8k8yFSgenW04D9shhw2rnD8uItKrCRvqUtQHI7LhdXGFG6QxsHj7BGrVaub1NxKZfc9TmKee8%2B%2B4qaJ4QSx4kpXTv7YHfyCLy%2Bx9Y9LDWBMs1HQeVETM74ahA4ZisujpAyfyowgwjxRp1HLmkdOsLz4n%2FMH8cf0mlByiMJlsuPhBV3NdFevMyXXJKdLV1x4DqtsvCHpbMs%2BkrZvjXQ7Llt8lXPDGD55ZaOMSL7SZHpqCAvVd866cN0wF8GPY3A48gx1WcwtQsbg%2FIDsSFtvhOwwqfcbC1JNAcfTsxfMOj2ur0GOqUB7c0ll7jvXmFu2ASYHQ0LM5pmT1zZfjYXCwLtfKaeKou8YBPPUKNk1Rz13OT6o39Al0hLI8e2rLQfhgnwMUFbxdNlWxZARKzPRBZZU3j2at38ha%2F9532T7QTtuVc8C%2BCzkGKhZjNr2LX6yWmunIUH4qni8qHt8o7Yzv%2FF96JZMKqVI7N%2B0tGBRtLiaGLVt0T7OeFJa1Q%2Fu4Z5GhhPTioUwillImSt&X-Amz-Signature=4259844ac32378e6c071302b9ba2291bfc22dd70b0b8109a581074b659ee4d20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PS7ABK7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2W7Ur0aYZ3GIlrN1IDlQoU4NnZ0VkjZw24T%2FTF5nnRAiEAibm3ucpyfXUtukothHARNPlSkjiPcHUOfWovsIRtUiUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDEHLAKWuOgfln1e%2BCrcAxHyaenVNIbIjYFrs5HeLycZDLNLW24qOom3EuZZ9P0K2BbheS4MVMEy1eYN4hIc022%2FWw8dPdPna8h9I0oV66P1aiU5bF5vmTaMyLpKxEn%2FXNapMYI7j2fKRsAFeVP6pQNfcJx7JBD1PnNhCrtfwZMkz8P4SebBWrwxLxkaun463r4AOzViCF1pK7ADnWoc0X1lMO0x3Olt%2BJmx5RlMvCQddnjad%2Bu4t7fUXQ3TxDCowPSZBnnMl707ljjGTqz8JKFTgHCXEKGEeTGex815534tEhuzd4Xa7QsKOBXhLchc8Joc6S0atgwydg%2B2mE%2Bzw04Uxnp3TjXXQzpz%2FjKKfM8k8yFSgenW04D9shhw2rnD8uItKrCRvqUtQHI7LhdXGFG6QxsHj7BGrVaub1NxKZfc9TmKee8%2B%2B4qaJ4QSx4kpXTv7YHfyCLy%2Bx9Y9LDWBMs1HQeVETM74ahA4ZisujpAyfyowgwjxRp1HLmkdOsLz4n%2FMH8cf0mlByiMJlsuPhBV3NdFevMyXXJKdLV1x4DqtsvCHpbMs%2BkrZvjXQ7Llt8lXPDGD55ZaOMSL7SZHpqCAvVd866cN0wF8GPY3A48gx1WcwtQsbg%2FIDsSFtvhOwwqfcbC1JNAcfTsxfMOj2ur0GOqUB7c0ll7jvXmFu2ASYHQ0LM5pmT1zZfjYXCwLtfKaeKou8YBPPUKNk1Rz13OT6o39Al0hLI8e2rLQfhgnwMUFbxdNlWxZARKzPRBZZU3j2at38ha%2F9532T7QTtuVc8C%2BCzkGKhZjNr2LX6yWmunIUH4qni8qHt8o7Yzv%2FF96JZMKqVI7N%2B0tGBRtLiaGLVt0T7OeFJa1Q%2Fu4Z5GhhPTioUwillImSt&X-Amz-Signature=4fdee21e2d74bfe182443b686641c8482d5f66a55b988ea07313aa29c02429e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
