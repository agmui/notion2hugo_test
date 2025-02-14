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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFVRSYM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC7dKxrFEkx1zdj9Rflih%2FnqobIvZGcH5bDkR2KVMOl9AiEAgDtBhzVB36KrGyG10PFqJun%2BnMq%2Fd0xZjBs6g%2F81qoEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBEO1ASADlpqt75SrSrcA5I81XC2DBzjvdILZNDkheT18o9T7PddnmzeZgRTvUoxYknXNEb3aLqHOuU4BIghYzrQ%2FbYjh%2FxPfLjdHoVoYUlkDbUalNTNe3rXfdXWnNBWUbJg6xtBapHxVER%2FVW7XrYXkmBr%2FNasrUzr1aOhFOsKw8HS7j8tpJb16mREwsrVKMORh%2BY9TSIk1jZe7nWxPHgAbb2S%2Bh5R2xVLcO95HObkbXeXa%2Fq53ggz1PpoV7zi%2BFSBmGJxCPyzImrVySZVwd1epuR2YCWfFxd9S%2BCsG6UbBvEBWGoQYq9u5%2BceBd22D7NZQBWkiutiBlEVPbhwx6DBSlUi7sXrFxuLUDf5Etj%2FsIFAPGvRT4GF26EZ6pOUWgIp0qOY4mn447MCdNeehFRoAA4R9Jc5V5wsJUDppxv3JJ1MvYzMJwJ98dLGhpe8njdT7L1j36mb5iD0OT77S9uFRrV1CnWCfJr3Yf36vnpm8VIP4mc8%2FLMqEBj1UfBDzHxE5YXUyt8B45D9M%2BlrrOnAg9JOGElhSveK79YmllRM0wym%2BFB925y79dnbmBshltwebNL%2BIV120ZX56xc0pKPyFQsm4%2FKVUlx%2FiscR8qBluYY08MdTG0AKz1jIFsp23%2B1CSHQg%2FIbeEPd4vMLnRvr0GOqUB%2BulhLgs7Vw8gxl6sQRdLQi%2BBzJtgpsywAlYjN43jZv7ONtghBi7TQ8snHz3%2FwNiTemt7%2Floe0B7OcnW0uHvtrr5hmCxND7oGej5fgr5tXh06HAloIxmaoVOTszeDTsm%2BX6RL%2BG%2FJZcATjCSmEiwW2uQ9CgHkJ4hJqLlJU16fWmsy2YyjQLToAf1TK%2FrLSSlgqOyZTtChah7VxoMPeQjQpfS8wUXf&X-Amz-Signature=8dea439f66ddbd5e6dbadc92ed75f258dc3fc8588d979445a05ebcec45a0e042&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFVRSYM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC7dKxrFEkx1zdj9Rflih%2FnqobIvZGcH5bDkR2KVMOl9AiEAgDtBhzVB36KrGyG10PFqJun%2BnMq%2Fd0xZjBs6g%2F81qoEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBEO1ASADlpqt75SrSrcA5I81XC2DBzjvdILZNDkheT18o9T7PddnmzeZgRTvUoxYknXNEb3aLqHOuU4BIghYzrQ%2FbYjh%2FxPfLjdHoVoYUlkDbUalNTNe3rXfdXWnNBWUbJg6xtBapHxVER%2FVW7XrYXkmBr%2FNasrUzr1aOhFOsKw8HS7j8tpJb16mREwsrVKMORh%2BY9TSIk1jZe7nWxPHgAbb2S%2Bh5R2xVLcO95HObkbXeXa%2Fq53ggz1PpoV7zi%2BFSBmGJxCPyzImrVySZVwd1epuR2YCWfFxd9S%2BCsG6UbBvEBWGoQYq9u5%2BceBd22D7NZQBWkiutiBlEVPbhwx6DBSlUi7sXrFxuLUDf5Etj%2FsIFAPGvRT4GF26EZ6pOUWgIp0qOY4mn447MCdNeehFRoAA4R9Jc5V5wsJUDppxv3JJ1MvYzMJwJ98dLGhpe8njdT7L1j36mb5iD0OT77S9uFRrV1CnWCfJr3Yf36vnpm8VIP4mc8%2FLMqEBj1UfBDzHxE5YXUyt8B45D9M%2BlrrOnAg9JOGElhSveK79YmllRM0wym%2BFB925y79dnbmBshltwebNL%2BIV120ZX56xc0pKPyFQsm4%2FKVUlx%2FiscR8qBluYY08MdTG0AKz1jIFsp23%2B1CSHQg%2FIbeEPd4vMLnRvr0GOqUB%2BulhLgs7Vw8gxl6sQRdLQi%2BBzJtgpsywAlYjN43jZv7ONtghBi7TQ8snHz3%2FwNiTemt7%2Floe0B7OcnW0uHvtrr5hmCxND7oGej5fgr5tXh06HAloIxmaoVOTszeDTsm%2BX6RL%2BG%2FJZcATjCSmEiwW2uQ9CgHkJ4hJqLlJU16fWmsy2YyjQLToAf1TK%2FrLSSlgqOyZTtChah7VxoMPeQjQpfS8wUXf&X-Amz-Signature=128043a26696d58c2c123777602c7bcd8c59b6163f6224873ecd10c951d24973&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFVRSYM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC7dKxrFEkx1zdj9Rflih%2FnqobIvZGcH5bDkR2KVMOl9AiEAgDtBhzVB36KrGyG10PFqJun%2BnMq%2Fd0xZjBs6g%2F81qoEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBEO1ASADlpqt75SrSrcA5I81XC2DBzjvdILZNDkheT18o9T7PddnmzeZgRTvUoxYknXNEb3aLqHOuU4BIghYzrQ%2FbYjh%2FxPfLjdHoVoYUlkDbUalNTNe3rXfdXWnNBWUbJg6xtBapHxVER%2FVW7XrYXkmBr%2FNasrUzr1aOhFOsKw8HS7j8tpJb16mREwsrVKMORh%2BY9TSIk1jZe7nWxPHgAbb2S%2Bh5R2xVLcO95HObkbXeXa%2Fq53ggz1PpoV7zi%2BFSBmGJxCPyzImrVySZVwd1epuR2YCWfFxd9S%2BCsG6UbBvEBWGoQYq9u5%2BceBd22D7NZQBWkiutiBlEVPbhwx6DBSlUi7sXrFxuLUDf5Etj%2FsIFAPGvRT4GF26EZ6pOUWgIp0qOY4mn447MCdNeehFRoAA4R9Jc5V5wsJUDppxv3JJ1MvYzMJwJ98dLGhpe8njdT7L1j36mb5iD0OT77S9uFRrV1CnWCfJr3Yf36vnpm8VIP4mc8%2FLMqEBj1UfBDzHxE5YXUyt8B45D9M%2BlrrOnAg9JOGElhSveK79YmllRM0wym%2BFB925y79dnbmBshltwebNL%2BIV120ZX56xc0pKPyFQsm4%2FKVUlx%2FiscR8qBluYY08MdTG0AKz1jIFsp23%2B1CSHQg%2FIbeEPd4vMLnRvr0GOqUB%2BulhLgs7Vw8gxl6sQRdLQi%2BBzJtgpsywAlYjN43jZv7ONtghBi7TQ8snHz3%2FwNiTemt7%2Floe0B7OcnW0uHvtrr5hmCxND7oGej5fgr5tXh06HAloIxmaoVOTszeDTsm%2BX6RL%2BG%2FJZcATjCSmEiwW2uQ9CgHkJ4hJqLlJU16fWmsy2YyjQLToAf1TK%2FrLSSlgqOyZTtChah7VxoMPeQjQpfS8wUXf&X-Amz-Signature=eb7bae9ccfb6cf2b0ebab1a2367bd85cc4839a7e4dab3ce7a1f9b093b8b5b842&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFVRSYM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC7dKxrFEkx1zdj9Rflih%2FnqobIvZGcH5bDkR2KVMOl9AiEAgDtBhzVB36KrGyG10PFqJun%2BnMq%2Fd0xZjBs6g%2F81qoEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBEO1ASADlpqt75SrSrcA5I81XC2DBzjvdILZNDkheT18o9T7PddnmzeZgRTvUoxYknXNEb3aLqHOuU4BIghYzrQ%2FbYjh%2FxPfLjdHoVoYUlkDbUalNTNe3rXfdXWnNBWUbJg6xtBapHxVER%2FVW7XrYXkmBr%2FNasrUzr1aOhFOsKw8HS7j8tpJb16mREwsrVKMORh%2BY9TSIk1jZe7nWxPHgAbb2S%2Bh5R2xVLcO95HObkbXeXa%2Fq53ggz1PpoV7zi%2BFSBmGJxCPyzImrVySZVwd1epuR2YCWfFxd9S%2BCsG6UbBvEBWGoQYq9u5%2BceBd22D7NZQBWkiutiBlEVPbhwx6DBSlUi7sXrFxuLUDf5Etj%2FsIFAPGvRT4GF26EZ6pOUWgIp0qOY4mn447MCdNeehFRoAA4R9Jc5V5wsJUDppxv3JJ1MvYzMJwJ98dLGhpe8njdT7L1j36mb5iD0OT77S9uFRrV1CnWCfJr3Yf36vnpm8VIP4mc8%2FLMqEBj1UfBDzHxE5YXUyt8B45D9M%2BlrrOnAg9JOGElhSveK79YmllRM0wym%2BFB925y79dnbmBshltwebNL%2BIV120ZX56xc0pKPyFQsm4%2FKVUlx%2FiscR8qBluYY08MdTG0AKz1jIFsp23%2B1CSHQg%2FIbeEPd4vMLnRvr0GOqUB%2BulhLgs7Vw8gxl6sQRdLQi%2BBzJtgpsywAlYjN43jZv7ONtghBi7TQ8snHz3%2FwNiTemt7%2Floe0B7OcnW0uHvtrr5hmCxND7oGej5fgr5tXh06HAloIxmaoVOTszeDTsm%2BX6RL%2BG%2FJZcATjCSmEiwW2uQ9CgHkJ4hJqLlJU16fWmsy2YyjQLToAf1TK%2FrLSSlgqOyZTtChah7VxoMPeQjQpfS8wUXf&X-Amz-Signature=4dc4c53444f463c11ad827ab9e1e7ce463db3d07deb339fa6a4cbe7bf2e50b26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFVRSYM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC7dKxrFEkx1zdj9Rflih%2FnqobIvZGcH5bDkR2KVMOl9AiEAgDtBhzVB36KrGyG10PFqJun%2BnMq%2Fd0xZjBs6g%2F81qoEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBEO1ASADlpqt75SrSrcA5I81XC2DBzjvdILZNDkheT18o9T7PddnmzeZgRTvUoxYknXNEb3aLqHOuU4BIghYzrQ%2FbYjh%2FxPfLjdHoVoYUlkDbUalNTNe3rXfdXWnNBWUbJg6xtBapHxVER%2FVW7XrYXkmBr%2FNasrUzr1aOhFOsKw8HS7j8tpJb16mREwsrVKMORh%2BY9TSIk1jZe7nWxPHgAbb2S%2Bh5R2xVLcO95HObkbXeXa%2Fq53ggz1PpoV7zi%2BFSBmGJxCPyzImrVySZVwd1epuR2YCWfFxd9S%2BCsG6UbBvEBWGoQYq9u5%2BceBd22D7NZQBWkiutiBlEVPbhwx6DBSlUi7sXrFxuLUDf5Etj%2FsIFAPGvRT4GF26EZ6pOUWgIp0qOY4mn447MCdNeehFRoAA4R9Jc5V5wsJUDppxv3JJ1MvYzMJwJ98dLGhpe8njdT7L1j36mb5iD0OT77S9uFRrV1CnWCfJr3Yf36vnpm8VIP4mc8%2FLMqEBj1UfBDzHxE5YXUyt8B45D9M%2BlrrOnAg9JOGElhSveK79YmllRM0wym%2BFB925y79dnbmBshltwebNL%2BIV120ZX56xc0pKPyFQsm4%2FKVUlx%2FiscR8qBluYY08MdTG0AKz1jIFsp23%2B1CSHQg%2FIbeEPd4vMLnRvr0GOqUB%2BulhLgs7Vw8gxl6sQRdLQi%2BBzJtgpsywAlYjN43jZv7ONtghBi7TQ8snHz3%2FwNiTemt7%2Floe0B7OcnW0uHvtrr5hmCxND7oGej5fgr5tXh06HAloIxmaoVOTszeDTsm%2BX6RL%2BG%2FJZcATjCSmEiwW2uQ9CgHkJ4hJqLlJU16fWmsy2YyjQLToAf1TK%2FrLSSlgqOyZTtChah7VxoMPeQjQpfS8wUXf&X-Amz-Signature=b8b8f1ffa40b7198b792f18e6b0a4a682acd74bcec3bfb2498fa1c6ec65837e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFVRSYM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC7dKxrFEkx1zdj9Rflih%2FnqobIvZGcH5bDkR2KVMOl9AiEAgDtBhzVB36KrGyG10PFqJun%2BnMq%2Fd0xZjBs6g%2F81qoEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBEO1ASADlpqt75SrSrcA5I81XC2DBzjvdILZNDkheT18o9T7PddnmzeZgRTvUoxYknXNEb3aLqHOuU4BIghYzrQ%2FbYjh%2FxPfLjdHoVoYUlkDbUalNTNe3rXfdXWnNBWUbJg6xtBapHxVER%2FVW7XrYXkmBr%2FNasrUzr1aOhFOsKw8HS7j8tpJb16mREwsrVKMORh%2BY9TSIk1jZe7nWxPHgAbb2S%2Bh5R2xVLcO95HObkbXeXa%2Fq53ggz1PpoV7zi%2BFSBmGJxCPyzImrVySZVwd1epuR2YCWfFxd9S%2BCsG6UbBvEBWGoQYq9u5%2BceBd22D7NZQBWkiutiBlEVPbhwx6DBSlUi7sXrFxuLUDf5Etj%2FsIFAPGvRT4GF26EZ6pOUWgIp0qOY4mn447MCdNeehFRoAA4R9Jc5V5wsJUDppxv3JJ1MvYzMJwJ98dLGhpe8njdT7L1j36mb5iD0OT77S9uFRrV1CnWCfJr3Yf36vnpm8VIP4mc8%2FLMqEBj1UfBDzHxE5YXUyt8B45D9M%2BlrrOnAg9JOGElhSveK79YmllRM0wym%2BFB925y79dnbmBshltwebNL%2BIV120ZX56xc0pKPyFQsm4%2FKVUlx%2FiscR8qBluYY08MdTG0AKz1jIFsp23%2B1CSHQg%2FIbeEPd4vMLnRvr0GOqUB%2BulhLgs7Vw8gxl6sQRdLQi%2BBzJtgpsywAlYjN43jZv7ONtghBi7TQ8snHz3%2FwNiTemt7%2Floe0B7OcnW0uHvtrr5hmCxND7oGej5fgr5tXh06HAloIxmaoVOTszeDTsm%2BX6RL%2BG%2FJZcATjCSmEiwW2uQ9CgHkJ4hJqLlJU16fWmsy2YyjQLToAf1TK%2FrLSSlgqOyZTtChah7VxoMPeQjQpfS8wUXf&X-Amz-Signature=ccaf57d12699779a96473c642562779e49134fdc906b51331bd2f12fd16cff3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFVRSYM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC7dKxrFEkx1zdj9Rflih%2FnqobIvZGcH5bDkR2KVMOl9AiEAgDtBhzVB36KrGyG10PFqJun%2BnMq%2Fd0xZjBs6g%2F81qoEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBEO1ASADlpqt75SrSrcA5I81XC2DBzjvdILZNDkheT18o9T7PddnmzeZgRTvUoxYknXNEb3aLqHOuU4BIghYzrQ%2FbYjh%2FxPfLjdHoVoYUlkDbUalNTNe3rXfdXWnNBWUbJg6xtBapHxVER%2FVW7XrYXkmBr%2FNasrUzr1aOhFOsKw8HS7j8tpJb16mREwsrVKMORh%2BY9TSIk1jZe7nWxPHgAbb2S%2Bh5R2xVLcO95HObkbXeXa%2Fq53ggz1PpoV7zi%2BFSBmGJxCPyzImrVySZVwd1epuR2YCWfFxd9S%2BCsG6UbBvEBWGoQYq9u5%2BceBd22D7NZQBWkiutiBlEVPbhwx6DBSlUi7sXrFxuLUDf5Etj%2FsIFAPGvRT4GF26EZ6pOUWgIp0qOY4mn447MCdNeehFRoAA4R9Jc5V5wsJUDppxv3JJ1MvYzMJwJ98dLGhpe8njdT7L1j36mb5iD0OT77S9uFRrV1CnWCfJr3Yf36vnpm8VIP4mc8%2FLMqEBj1UfBDzHxE5YXUyt8B45D9M%2BlrrOnAg9JOGElhSveK79YmllRM0wym%2BFB925y79dnbmBshltwebNL%2BIV120ZX56xc0pKPyFQsm4%2FKVUlx%2FiscR8qBluYY08MdTG0AKz1jIFsp23%2B1CSHQg%2FIbeEPd4vMLnRvr0GOqUB%2BulhLgs7Vw8gxl6sQRdLQi%2BBzJtgpsywAlYjN43jZv7ONtghBi7TQ8snHz3%2FwNiTemt7%2Floe0B7OcnW0uHvtrr5hmCxND7oGej5fgr5tXh06HAloIxmaoVOTszeDTsm%2BX6RL%2BG%2FJZcATjCSmEiwW2uQ9CgHkJ4hJqLlJU16fWmsy2YyjQLToAf1TK%2FrLSSlgqOyZTtChah7VxoMPeQjQpfS8wUXf&X-Amz-Signature=1e8733878edf34545119bf0d7a8a5c7b4d35e4699cfad99749e5c2213cee81cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFVRSYM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC7dKxrFEkx1zdj9Rflih%2FnqobIvZGcH5bDkR2KVMOl9AiEAgDtBhzVB36KrGyG10PFqJun%2BnMq%2Fd0xZjBs6g%2F81qoEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBEO1ASADlpqt75SrSrcA5I81XC2DBzjvdILZNDkheT18o9T7PddnmzeZgRTvUoxYknXNEb3aLqHOuU4BIghYzrQ%2FbYjh%2FxPfLjdHoVoYUlkDbUalNTNe3rXfdXWnNBWUbJg6xtBapHxVER%2FVW7XrYXkmBr%2FNasrUzr1aOhFOsKw8HS7j8tpJb16mREwsrVKMORh%2BY9TSIk1jZe7nWxPHgAbb2S%2Bh5R2xVLcO95HObkbXeXa%2Fq53ggz1PpoV7zi%2BFSBmGJxCPyzImrVySZVwd1epuR2YCWfFxd9S%2BCsG6UbBvEBWGoQYq9u5%2BceBd22D7NZQBWkiutiBlEVPbhwx6DBSlUi7sXrFxuLUDf5Etj%2FsIFAPGvRT4GF26EZ6pOUWgIp0qOY4mn447MCdNeehFRoAA4R9Jc5V5wsJUDppxv3JJ1MvYzMJwJ98dLGhpe8njdT7L1j36mb5iD0OT77S9uFRrV1CnWCfJr3Yf36vnpm8VIP4mc8%2FLMqEBj1UfBDzHxE5YXUyt8B45D9M%2BlrrOnAg9JOGElhSveK79YmllRM0wym%2BFB925y79dnbmBshltwebNL%2BIV120ZX56xc0pKPyFQsm4%2FKVUlx%2FiscR8qBluYY08MdTG0AKz1jIFsp23%2B1CSHQg%2FIbeEPd4vMLnRvr0GOqUB%2BulhLgs7Vw8gxl6sQRdLQi%2BBzJtgpsywAlYjN43jZv7ONtghBi7TQ8snHz3%2FwNiTemt7%2Floe0B7OcnW0uHvtrr5hmCxND7oGej5fgr5tXh06HAloIxmaoVOTszeDTsm%2BX6RL%2BG%2FJZcATjCSmEiwW2uQ9CgHkJ4hJqLlJU16fWmsy2YyjQLToAf1TK%2FrLSSlgqOyZTtChah7VxoMPeQjQpfS8wUXf&X-Amz-Signature=e81fc3d7e7e3351c8f03c6c2573f531d3900a242658324d520fd95c97cdd2adc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
