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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PU5YNEP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBouGX9WrXy37A55uteLpco%2FmrvD1XPbxp3Spjl0LolgIgXW01cgto6MgcCrANyIw9UgnvIuDnnXhYoeCV8ge8g6Mq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM37ItI7IC71uWrAuCrcA3wpQy1DytEd4sg%2FBxGPvVVZeBQw8SH5pJbAAT8aAUKaSRG4FfDz%2BPFjpZVBqNFyh7yW5EjLHm9T8A0%2FohoFoX04xymZiO8M7AoJvmkHdED%2FRwYICMixHGzkSUD7r5kN6P2mY4gG7wRqt2hdWl4NBiatrwiK%2BmVGpiDhx1anva7A%2BELvnFkax5yw%2BHETID%2B%2BWrDWFav4xHWD2iiOGIDyTgCnn%2FJQCwS1VTUzqpBBILZ%2F0fO12F2LC6m%2BmACxxFRSZ4x3E1l6NZ7ImE7gedXJfkZMm5UV6mQfWOx7rhhfWITEBBi80W6qJsBehz%2Fw8Rl5fC86sj0aDGN4Kd8qOnCoZcbS%2BxbHtJx6FVj%2BZVMKSfcY7YgXnkY2oeuSLX3xi7KybHNyBVckI1Yu8XnJcARsqS80Fk9rKTToi%2BbigajGLPi85GrA0k%2Fprlmr57BVSksqL8k9LoyBzisbb5WmLtnEnRJ29ZjmmdUcUDtcGW33KeKYda%2F2YvqyGvNCkT4FMP6eibBgiSx28k0pSF4DcyxFiduOz8kGHW21IFYw20QQE1h4lPROo2RhE%2BcW4MCAZMJyolLAIjzP55Yvv3ED9fwo4f7rTbKURlvdbP8s6YQsgSVMEUjqvVUTxsegs9m0MILwwr8GOqUBCmvOwrZH66pIPqVJXaapwZHPJ7XKR%2FCXqBS0MuhsXNYtJY2k%2FfT40migGTrOPrqs4EC71To3REHbL7euolJHFMhomjSeuQBR8JUMmf0SEfJTF9gYnjvlz9s3Y2H4b%2Bq52p%2BBd1Y3v0cAtTNSnqR4kk9WJpSsHc1z4SVq%2FcU9aeBfQ0U8f7tBCu4%2FDmoT4ajEENrML5%2BqzOJxsE1XLc3O4pUPFry%2F&X-Amz-Signature=2b7d1844f85b6e786881d4c79488dd4815ea200c36f6f2c27b43e458e50c6c04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PU5YNEP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBouGX9WrXy37A55uteLpco%2FmrvD1XPbxp3Spjl0LolgIgXW01cgto6MgcCrANyIw9UgnvIuDnnXhYoeCV8ge8g6Mq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM37ItI7IC71uWrAuCrcA3wpQy1DytEd4sg%2FBxGPvVVZeBQw8SH5pJbAAT8aAUKaSRG4FfDz%2BPFjpZVBqNFyh7yW5EjLHm9T8A0%2FohoFoX04xymZiO8M7AoJvmkHdED%2FRwYICMixHGzkSUD7r5kN6P2mY4gG7wRqt2hdWl4NBiatrwiK%2BmVGpiDhx1anva7A%2BELvnFkax5yw%2BHETID%2B%2BWrDWFav4xHWD2iiOGIDyTgCnn%2FJQCwS1VTUzqpBBILZ%2F0fO12F2LC6m%2BmACxxFRSZ4x3E1l6NZ7ImE7gedXJfkZMm5UV6mQfWOx7rhhfWITEBBi80W6qJsBehz%2Fw8Rl5fC86sj0aDGN4Kd8qOnCoZcbS%2BxbHtJx6FVj%2BZVMKSfcY7YgXnkY2oeuSLX3xi7KybHNyBVckI1Yu8XnJcARsqS80Fk9rKTToi%2BbigajGLPi85GrA0k%2Fprlmr57BVSksqL8k9LoyBzisbb5WmLtnEnRJ29ZjmmdUcUDtcGW33KeKYda%2F2YvqyGvNCkT4FMP6eibBgiSx28k0pSF4DcyxFiduOz8kGHW21IFYw20QQE1h4lPROo2RhE%2BcW4MCAZMJyolLAIjzP55Yvv3ED9fwo4f7rTbKURlvdbP8s6YQsgSVMEUjqvVUTxsegs9m0MILwwr8GOqUBCmvOwrZH66pIPqVJXaapwZHPJ7XKR%2FCXqBS0MuhsXNYtJY2k%2FfT40migGTrOPrqs4EC71To3REHbL7euolJHFMhomjSeuQBR8JUMmf0SEfJTF9gYnjvlz9s3Y2H4b%2Bq52p%2BBd1Y3v0cAtTNSnqR4kk9WJpSsHc1z4SVq%2FcU9aeBfQ0U8f7tBCu4%2FDmoT4ajEENrML5%2BqzOJxsE1XLc3O4pUPFry%2F&X-Amz-Signature=79021ae32f58000ed151bc7becf56796c682d3d7edb639eb8c0d8a225a625109&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PU5YNEP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBouGX9WrXy37A55uteLpco%2FmrvD1XPbxp3Spjl0LolgIgXW01cgto6MgcCrANyIw9UgnvIuDnnXhYoeCV8ge8g6Mq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM37ItI7IC71uWrAuCrcA3wpQy1DytEd4sg%2FBxGPvVVZeBQw8SH5pJbAAT8aAUKaSRG4FfDz%2BPFjpZVBqNFyh7yW5EjLHm9T8A0%2FohoFoX04xymZiO8M7AoJvmkHdED%2FRwYICMixHGzkSUD7r5kN6P2mY4gG7wRqt2hdWl4NBiatrwiK%2BmVGpiDhx1anva7A%2BELvnFkax5yw%2BHETID%2B%2BWrDWFav4xHWD2iiOGIDyTgCnn%2FJQCwS1VTUzqpBBILZ%2F0fO12F2LC6m%2BmACxxFRSZ4x3E1l6NZ7ImE7gedXJfkZMm5UV6mQfWOx7rhhfWITEBBi80W6qJsBehz%2Fw8Rl5fC86sj0aDGN4Kd8qOnCoZcbS%2BxbHtJx6FVj%2BZVMKSfcY7YgXnkY2oeuSLX3xi7KybHNyBVckI1Yu8XnJcARsqS80Fk9rKTToi%2BbigajGLPi85GrA0k%2Fprlmr57BVSksqL8k9LoyBzisbb5WmLtnEnRJ29ZjmmdUcUDtcGW33KeKYda%2F2YvqyGvNCkT4FMP6eibBgiSx28k0pSF4DcyxFiduOz8kGHW21IFYw20QQE1h4lPROo2RhE%2BcW4MCAZMJyolLAIjzP55Yvv3ED9fwo4f7rTbKURlvdbP8s6YQsgSVMEUjqvVUTxsegs9m0MILwwr8GOqUBCmvOwrZH66pIPqVJXaapwZHPJ7XKR%2FCXqBS0MuhsXNYtJY2k%2FfT40migGTrOPrqs4EC71To3REHbL7euolJHFMhomjSeuQBR8JUMmf0SEfJTF9gYnjvlz9s3Y2H4b%2Bq52p%2BBd1Y3v0cAtTNSnqR4kk9WJpSsHc1z4SVq%2FcU9aeBfQ0U8f7tBCu4%2FDmoT4ajEENrML5%2BqzOJxsE1XLc3O4pUPFry%2F&X-Amz-Signature=f4f32e253ecbf2bec306592e9bd7f1ceb19cf38c323ea1e051704141e6fcea81&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PU5YNEP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBouGX9WrXy37A55uteLpco%2FmrvD1XPbxp3Spjl0LolgIgXW01cgto6MgcCrANyIw9UgnvIuDnnXhYoeCV8ge8g6Mq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM37ItI7IC71uWrAuCrcA3wpQy1DytEd4sg%2FBxGPvVVZeBQw8SH5pJbAAT8aAUKaSRG4FfDz%2BPFjpZVBqNFyh7yW5EjLHm9T8A0%2FohoFoX04xymZiO8M7AoJvmkHdED%2FRwYICMixHGzkSUD7r5kN6P2mY4gG7wRqt2hdWl4NBiatrwiK%2BmVGpiDhx1anva7A%2BELvnFkax5yw%2BHETID%2B%2BWrDWFav4xHWD2iiOGIDyTgCnn%2FJQCwS1VTUzqpBBILZ%2F0fO12F2LC6m%2BmACxxFRSZ4x3E1l6NZ7ImE7gedXJfkZMm5UV6mQfWOx7rhhfWITEBBi80W6qJsBehz%2Fw8Rl5fC86sj0aDGN4Kd8qOnCoZcbS%2BxbHtJx6FVj%2BZVMKSfcY7YgXnkY2oeuSLX3xi7KybHNyBVckI1Yu8XnJcARsqS80Fk9rKTToi%2BbigajGLPi85GrA0k%2Fprlmr57BVSksqL8k9LoyBzisbb5WmLtnEnRJ29ZjmmdUcUDtcGW33KeKYda%2F2YvqyGvNCkT4FMP6eibBgiSx28k0pSF4DcyxFiduOz8kGHW21IFYw20QQE1h4lPROo2RhE%2BcW4MCAZMJyolLAIjzP55Yvv3ED9fwo4f7rTbKURlvdbP8s6YQsgSVMEUjqvVUTxsegs9m0MILwwr8GOqUBCmvOwrZH66pIPqVJXaapwZHPJ7XKR%2FCXqBS0MuhsXNYtJY2k%2FfT40migGTrOPrqs4EC71To3REHbL7euolJHFMhomjSeuQBR8JUMmf0SEfJTF9gYnjvlz9s3Y2H4b%2Bq52p%2BBd1Y3v0cAtTNSnqR4kk9WJpSsHc1z4SVq%2FcU9aeBfQ0U8f7tBCu4%2FDmoT4ajEENrML5%2BqzOJxsE1XLc3O4pUPFry%2F&X-Amz-Signature=8f6d39261f3f439e8264cd67cae13b71b87f7003c9f06011587990f85ead5eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PU5YNEP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBouGX9WrXy37A55uteLpco%2FmrvD1XPbxp3Spjl0LolgIgXW01cgto6MgcCrANyIw9UgnvIuDnnXhYoeCV8ge8g6Mq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM37ItI7IC71uWrAuCrcA3wpQy1DytEd4sg%2FBxGPvVVZeBQw8SH5pJbAAT8aAUKaSRG4FfDz%2BPFjpZVBqNFyh7yW5EjLHm9T8A0%2FohoFoX04xymZiO8M7AoJvmkHdED%2FRwYICMixHGzkSUD7r5kN6P2mY4gG7wRqt2hdWl4NBiatrwiK%2BmVGpiDhx1anva7A%2BELvnFkax5yw%2BHETID%2B%2BWrDWFav4xHWD2iiOGIDyTgCnn%2FJQCwS1VTUzqpBBILZ%2F0fO12F2LC6m%2BmACxxFRSZ4x3E1l6NZ7ImE7gedXJfkZMm5UV6mQfWOx7rhhfWITEBBi80W6qJsBehz%2Fw8Rl5fC86sj0aDGN4Kd8qOnCoZcbS%2BxbHtJx6FVj%2BZVMKSfcY7YgXnkY2oeuSLX3xi7KybHNyBVckI1Yu8XnJcARsqS80Fk9rKTToi%2BbigajGLPi85GrA0k%2Fprlmr57BVSksqL8k9LoyBzisbb5WmLtnEnRJ29ZjmmdUcUDtcGW33KeKYda%2F2YvqyGvNCkT4FMP6eibBgiSx28k0pSF4DcyxFiduOz8kGHW21IFYw20QQE1h4lPROo2RhE%2BcW4MCAZMJyolLAIjzP55Yvv3ED9fwo4f7rTbKURlvdbP8s6YQsgSVMEUjqvVUTxsegs9m0MILwwr8GOqUBCmvOwrZH66pIPqVJXaapwZHPJ7XKR%2FCXqBS0MuhsXNYtJY2k%2FfT40migGTrOPrqs4EC71To3REHbL7euolJHFMhomjSeuQBR8JUMmf0SEfJTF9gYnjvlz9s3Y2H4b%2Bq52p%2BBd1Y3v0cAtTNSnqR4kk9WJpSsHc1z4SVq%2FcU9aeBfQ0U8f7tBCu4%2FDmoT4ajEENrML5%2BqzOJxsE1XLc3O4pUPFry%2F&X-Amz-Signature=276672798d21474f684784511e3e71b8074296fe3b1f8134b738459fc702a4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PU5YNEP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBouGX9WrXy37A55uteLpco%2FmrvD1XPbxp3Spjl0LolgIgXW01cgto6MgcCrANyIw9UgnvIuDnnXhYoeCV8ge8g6Mq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM37ItI7IC71uWrAuCrcA3wpQy1DytEd4sg%2FBxGPvVVZeBQw8SH5pJbAAT8aAUKaSRG4FfDz%2BPFjpZVBqNFyh7yW5EjLHm9T8A0%2FohoFoX04xymZiO8M7AoJvmkHdED%2FRwYICMixHGzkSUD7r5kN6P2mY4gG7wRqt2hdWl4NBiatrwiK%2BmVGpiDhx1anva7A%2BELvnFkax5yw%2BHETID%2B%2BWrDWFav4xHWD2iiOGIDyTgCnn%2FJQCwS1VTUzqpBBILZ%2F0fO12F2LC6m%2BmACxxFRSZ4x3E1l6NZ7ImE7gedXJfkZMm5UV6mQfWOx7rhhfWITEBBi80W6qJsBehz%2Fw8Rl5fC86sj0aDGN4Kd8qOnCoZcbS%2BxbHtJx6FVj%2BZVMKSfcY7YgXnkY2oeuSLX3xi7KybHNyBVckI1Yu8XnJcARsqS80Fk9rKTToi%2BbigajGLPi85GrA0k%2Fprlmr57BVSksqL8k9LoyBzisbb5WmLtnEnRJ29ZjmmdUcUDtcGW33KeKYda%2F2YvqyGvNCkT4FMP6eibBgiSx28k0pSF4DcyxFiduOz8kGHW21IFYw20QQE1h4lPROo2RhE%2BcW4MCAZMJyolLAIjzP55Yvv3ED9fwo4f7rTbKURlvdbP8s6YQsgSVMEUjqvVUTxsegs9m0MILwwr8GOqUBCmvOwrZH66pIPqVJXaapwZHPJ7XKR%2FCXqBS0MuhsXNYtJY2k%2FfT40migGTrOPrqs4EC71To3REHbL7euolJHFMhomjSeuQBR8JUMmf0SEfJTF9gYnjvlz9s3Y2H4b%2Bq52p%2BBd1Y3v0cAtTNSnqR4kk9WJpSsHc1z4SVq%2FcU9aeBfQ0U8f7tBCu4%2FDmoT4ajEENrML5%2BqzOJxsE1XLc3O4pUPFry%2F&X-Amz-Signature=38784c8df98d0d24f2134fc938332f045076fa4b95218b49185593c1283e8c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PU5YNEP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBouGX9WrXy37A55uteLpco%2FmrvD1XPbxp3Spjl0LolgIgXW01cgto6MgcCrANyIw9UgnvIuDnnXhYoeCV8ge8g6Mq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM37ItI7IC71uWrAuCrcA3wpQy1DytEd4sg%2FBxGPvVVZeBQw8SH5pJbAAT8aAUKaSRG4FfDz%2BPFjpZVBqNFyh7yW5EjLHm9T8A0%2FohoFoX04xymZiO8M7AoJvmkHdED%2FRwYICMixHGzkSUD7r5kN6P2mY4gG7wRqt2hdWl4NBiatrwiK%2BmVGpiDhx1anva7A%2BELvnFkax5yw%2BHETID%2B%2BWrDWFav4xHWD2iiOGIDyTgCnn%2FJQCwS1VTUzqpBBILZ%2F0fO12F2LC6m%2BmACxxFRSZ4x3E1l6NZ7ImE7gedXJfkZMm5UV6mQfWOx7rhhfWITEBBi80W6qJsBehz%2Fw8Rl5fC86sj0aDGN4Kd8qOnCoZcbS%2BxbHtJx6FVj%2BZVMKSfcY7YgXnkY2oeuSLX3xi7KybHNyBVckI1Yu8XnJcARsqS80Fk9rKTToi%2BbigajGLPi85GrA0k%2Fprlmr57BVSksqL8k9LoyBzisbb5WmLtnEnRJ29ZjmmdUcUDtcGW33KeKYda%2F2YvqyGvNCkT4FMP6eibBgiSx28k0pSF4DcyxFiduOz8kGHW21IFYw20QQE1h4lPROo2RhE%2BcW4MCAZMJyolLAIjzP55Yvv3ED9fwo4f7rTbKURlvdbP8s6YQsgSVMEUjqvVUTxsegs9m0MILwwr8GOqUBCmvOwrZH66pIPqVJXaapwZHPJ7XKR%2FCXqBS0MuhsXNYtJY2k%2FfT40migGTrOPrqs4EC71To3REHbL7euolJHFMhomjSeuQBR8JUMmf0SEfJTF9gYnjvlz9s3Y2H4b%2Bq52p%2BBd1Y3v0cAtTNSnqR4kk9WJpSsHc1z4SVq%2FcU9aeBfQ0U8f7tBCu4%2FDmoT4ajEENrML5%2BqzOJxsE1XLc3O4pUPFry%2F&X-Amz-Signature=a01bcf1f6ce12c0ab5fdbc5b179a174ebc799f193d09d93b95137c51dbc0d977&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PU5YNEP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBouGX9WrXy37A55uteLpco%2FmrvD1XPbxp3Spjl0LolgIgXW01cgto6MgcCrANyIw9UgnvIuDnnXhYoeCV8ge8g6Mq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM37ItI7IC71uWrAuCrcA3wpQy1DytEd4sg%2FBxGPvVVZeBQw8SH5pJbAAT8aAUKaSRG4FfDz%2BPFjpZVBqNFyh7yW5EjLHm9T8A0%2FohoFoX04xymZiO8M7AoJvmkHdED%2FRwYICMixHGzkSUD7r5kN6P2mY4gG7wRqt2hdWl4NBiatrwiK%2BmVGpiDhx1anva7A%2BELvnFkax5yw%2BHETID%2B%2BWrDWFav4xHWD2iiOGIDyTgCnn%2FJQCwS1VTUzqpBBILZ%2F0fO12F2LC6m%2BmACxxFRSZ4x3E1l6NZ7ImE7gedXJfkZMm5UV6mQfWOx7rhhfWITEBBi80W6qJsBehz%2Fw8Rl5fC86sj0aDGN4Kd8qOnCoZcbS%2BxbHtJx6FVj%2BZVMKSfcY7YgXnkY2oeuSLX3xi7KybHNyBVckI1Yu8XnJcARsqS80Fk9rKTToi%2BbigajGLPi85GrA0k%2Fprlmr57BVSksqL8k9LoyBzisbb5WmLtnEnRJ29ZjmmdUcUDtcGW33KeKYda%2F2YvqyGvNCkT4FMP6eibBgiSx28k0pSF4DcyxFiduOz8kGHW21IFYw20QQE1h4lPROo2RhE%2BcW4MCAZMJyolLAIjzP55Yvv3ED9fwo4f7rTbKURlvdbP8s6YQsgSVMEUjqvVUTxsegs9m0MILwwr8GOqUBCmvOwrZH66pIPqVJXaapwZHPJ7XKR%2FCXqBS0MuhsXNYtJY2k%2FfT40migGTrOPrqs4EC71To3REHbL7euolJHFMhomjSeuQBR8JUMmf0SEfJTF9gYnjvlz9s3Y2H4b%2Bq52p%2BBd1Y3v0cAtTNSnqR4kk9WJpSsHc1z4SVq%2FcU9aeBfQ0U8f7tBCu4%2FDmoT4ajEENrML5%2BqzOJxsE1XLc3O4pUPFry%2F&X-Amz-Signature=7f83b01f8d3674bdc1dee8e6e2479aae89f2bfa2272bddca9fb1cd7b0a470b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
