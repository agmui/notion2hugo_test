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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOI7KRJZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCID4K9%2BXd%2FomlpcsVLXh3cbXizE%2Fa1Gpc5laHtSq5cOPtAiEApDR3cWHN%2BdZ8Kv0Z7zJcOoOMyzL04ZqlfI7pGPHkadMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFI4acsTpU0IfpWfqyrcA%2BxpsK97xZiYq06kn7UwdsAgO2jp%2BpkCryHjUV1aAY3dvoSE%2FzTtKKDj8vL7u3VrBupm7QoEXLo9w2EN6358lpw7stTzB8YXrlgyZr7vJe%2BRiZeYwq6BD%2B7AKyARUjiPNBX6hIgkIvGiuIhbTBVz9xMBvwjV7H1HxA4XnhiQ5GkEYmzwwAIh40WxCdciUMQqpnpALdtfLk%2FX8EUoDwFlpuYrukcpF9aRAsL0iW2VQ5eBa4Ck0fQdEXaBIzo5zCDdF%2FmcuuEiUGFS5BA1eZGX1L0zoKMXfcDkIxGskDomutwDzq8rlKrFNEWYixYYCNuXqrzGHUj%2BgkvwaxeEzCTxyyNKEOx92SqN4t5ntPszQcjHlk%2FpC6fpp4aT9tdoEgBt3SsDK6FaKNvHG5o8XhcFvqF4kfTPnA9u20pZ2izmyOEWwpq86vLb8cWT4aI%2B87MiVJcmUEUKL%2FI11AXkSl4wurnNPpt6wslaNbHxTDbAg85uzBG9MFbvBpUwFV13o2MezmIBp3eV8hCJkRm63bjhe7UL191MrcQH24yluSI9gltnemJ2h5dQY5LorHtZlaor%2Baelg4ibT3HpOpSgC9FtbxVb%2FLtPlZL5g122LMrJBHXZYiqOp9tBtvrmjTeCMIbfzMEGOqUBS8lmnhXpcXDhNhPrNMsAcDwinmyTLgUBlrLv7uZCq45fzomuxPu6j0OYvOGYVwxNh18DEHpsUQnEe%2Bn3sOw5Hl4rj8O9AcGv40YYTaqb9S5dFxfGD8%2B3pEcT9E2%2B71Nxa8Rc8k8gouNnUu0OEAVmG%2BRhv8RYMUs6OYlMJxs2S2zXu5%2Fzs02Z2134tbxpZ1nNpkBXYJl7z5QDS9cZzIiPFG7olFwd&X-Amz-Signature=dc2b4b9863ac56064451806f7c5e2a354d8e304603c6bc5ca19c5f887c1055e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOI7KRJZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCID4K9%2BXd%2FomlpcsVLXh3cbXizE%2Fa1Gpc5laHtSq5cOPtAiEApDR3cWHN%2BdZ8Kv0Z7zJcOoOMyzL04ZqlfI7pGPHkadMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFI4acsTpU0IfpWfqyrcA%2BxpsK97xZiYq06kn7UwdsAgO2jp%2BpkCryHjUV1aAY3dvoSE%2FzTtKKDj8vL7u3VrBupm7QoEXLo9w2EN6358lpw7stTzB8YXrlgyZr7vJe%2BRiZeYwq6BD%2B7AKyARUjiPNBX6hIgkIvGiuIhbTBVz9xMBvwjV7H1HxA4XnhiQ5GkEYmzwwAIh40WxCdciUMQqpnpALdtfLk%2FX8EUoDwFlpuYrukcpF9aRAsL0iW2VQ5eBa4Ck0fQdEXaBIzo5zCDdF%2FmcuuEiUGFS5BA1eZGX1L0zoKMXfcDkIxGskDomutwDzq8rlKrFNEWYixYYCNuXqrzGHUj%2BgkvwaxeEzCTxyyNKEOx92SqN4t5ntPszQcjHlk%2FpC6fpp4aT9tdoEgBt3SsDK6FaKNvHG5o8XhcFvqF4kfTPnA9u20pZ2izmyOEWwpq86vLb8cWT4aI%2B87MiVJcmUEUKL%2FI11AXkSl4wurnNPpt6wslaNbHxTDbAg85uzBG9MFbvBpUwFV13o2MezmIBp3eV8hCJkRm63bjhe7UL191MrcQH24yluSI9gltnemJ2h5dQY5LorHtZlaor%2Baelg4ibT3HpOpSgC9FtbxVb%2FLtPlZL5g122LMrJBHXZYiqOp9tBtvrmjTeCMIbfzMEGOqUBS8lmnhXpcXDhNhPrNMsAcDwinmyTLgUBlrLv7uZCq45fzomuxPu6j0OYvOGYVwxNh18DEHpsUQnEe%2Bn3sOw5Hl4rj8O9AcGv40YYTaqb9S5dFxfGD8%2B3pEcT9E2%2B71Nxa8Rc8k8gouNnUu0OEAVmG%2BRhv8RYMUs6OYlMJxs2S2zXu5%2Fzs02Z2134tbxpZ1nNpkBXYJl7z5QDS9cZzIiPFG7olFwd&X-Amz-Signature=c4d16e05cacfe0b9c377a123e117829c20be1498298410d5f3d837b711a16764&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOI7KRJZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCID4K9%2BXd%2FomlpcsVLXh3cbXizE%2Fa1Gpc5laHtSq5cOPtAiEApDR3cWHN%2BdZ8Kv0Z7zJcOoOMyzL04ZqlfI7pGPHkadMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFI4acsTpU0IfpWfqyrcA%2BxpsK97xZiYq06kn7UwdsAgO2jp%2BpkCryHjUV1aAY3dvoSE%2FzTtKKDj8vL7u3VrBupm7QoEXLo9w2EN6358lpw7stTzB8YXrlgyZr7vJe%2BRiZeYwq6BD%2B7AKyARUjiPNBX6hIgkIvGiuIhbTBVz9xMBvwjV7H1HxA4XnhiQ5GkEYmzwwAIh40WxCdciUMQqpnpALdtfLk%2FX8EUoDwFlpuYrukcpF9aRAsL0iW2VQ5eBa4Ck0fQdEXaBIzo5zCDdF%2FmcuuEiUGFS5BA1eZGX1L0zoKMXfcDkIxGskDomutwDzq8rlKrFNEWYixYYCNuXqrzGHUj%2BgkvwaxeEzCTxyyNKEOx92SqN4t5ntPszQcjHlk%2FpC6fpp4aT9tdoEgBt3SsDK6FaKNvHG5o8XhcFvqF4kfTPnA9u20pZ2izmyOEWwpq86vLb8cWT4aI%2B87MiVJcmUEUKL%2FI11AXkSl4wurnNPpt6wslaNbHxTDbAg85uzBG9MFbvBpUwFV13o2MezmIBp3eV8hCJkRm63bjhe7UL191MrcQH24yluSI9gltnemJ2h5dQY5LorHtZlaor%2Baelg4ibT3HpOpSgC9FtbxVb%2FLtPlZL5g122LMrJBHXZYiqOp9tBtvrmjTeCMIbfzMEGOqUBS8lmnhXpcXDhNhPrNMsAcDwinmyTLgUBlrLv7uZCq45fzomuxPu6j0OYvOGYVwxNh18DEHpsUQnEe%2Bn3sOw5Hl4rj8O9AcGv40YYTaqb9S5dFxfGD8%2B3pEcT9E2%2B71Nxa8Rc8k8gouNnUu0OEAVmG%2BRhv8RYMUs6OYlMJxs2S2zXu5%2Fzs02Z2134tbxpZ1nNpkBXYJl7z5QDS9cZzIiPFG7olFwd&X-Amz-Signature=3573a405b24e6161a63b9b58bf0e5f9f51f1cbbac5c1e51036dbd24ba3512572&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOI7KRJZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCID4K9%2BXd%2FomlpcsVLXh3cbXizE%2Fa1Gpc5laHtSq5cOPtAiEApDR3cWHN%2BdZ8Kv0Z7zJcOoOMyzL04ZqlfI7pGPHkadMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFI4acsTpU0IfpWfqyrcA%2BxpsK97xZiYq06kn7UwdsAgO2jp%2BpkCryHjUV1aAY3dvoSE%2FzTtKKDj8vL7u3VrBupm7QoEXLo9w2EN6358lpw7stTzB8YXrlgyZr7vJe%2BRiZeYwq6BD%2B7AKyARUjiPNBX6hIgkIvGiuIhbTBVz9xMBvwjV7H1HxA4XnhiQ5GkEYmzwwAIh40WxCdciUMQqpnpALdtfLk%2FX8EUoDwFlpuYrukcpF9aRAsL0iW2VQ5eBa4Ck0fQdEXaBIzo5zCDdF%2FmcuuEiUGFS5BA1eZGX1L0zoKMXfcDkIxGskDomutwDzq8rlKrFNEWYixYYCNuXqrzGHUj%2BgkvwaxeEzCTxyyNKEOx92SqN4t5ntPszQcjHlk%2FpC6fpp4aT9tdoEgBt3SsDK6FaKNvHG5o8XhcFvqF4kfTPnA9u20pZ2izmyOEWwpq86vLb8cWT4aI%2B87MiVJcmUEUKL%2FI11AXkSl4wurnNPpt6wslaNbHxTDbAg85uzBG9MFbvBpUwFV13o2MezmIBp3eV8hCJkRm63bjhe7UL191MrcQH24yluSI9gltnemJ2h5dQY5LorHtZlaor%2Baelg4ibT3HpOpSgC9FtbxVb%2FLtPlZL5g122LMrJBHXZYiqOp9tBtvrmjTeCMIbfzMEGOqUBS8lmnhXpcXDhNhPrNMsAcDwinmyTLgUBlrLv7uZCq45fzomuxPu6j0OYvOGYVwxNh18DEHpsUQnEe%2Bn3sOw5Hl4rj8O9AcGv40YYTaqb9S5dFxfGD8%2B3pEcT9E2%2B71Nxa8Rc8k8gouNnUu0OEAVmG%2BRhv8RYMUs6OYlMJxs2S2zXu5%2Fzs02Z2134tbxpZ1nNpkBXYJl7z5QDS9cZzIiPFG7olFwd&X-Amz-Signature=9deb001df177c9972d4ca7fb134402fd35876472b8f1e34cab74c82e8e828166&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOI7KRJZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCID4K9%2BXd%2FomlpcsVLXh3cbXizE%2Fa1Gpc5laHtSq5cOPtAiEApDR3cWHN%2BdZ8Kv0Z7zJcOoOMyzL04ZqlfI7pGPHkadMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFI4acsTpU0IfpWfqyrcA%2BxpsK97xZiYq06kn7UwdsAgO2jp%2BpkCryHjUV1aAY3dvoSE%2FzTtKKDj8vL7u3VrBupm7QoEXLo9w2EN6358lpw7stTzB8YXrlgyZr7vJe%2BRiZeYwq6BD%2B7AKyARUjiPNBX6hIgkIvGiuIhbTBVz9xMBvwjV7H1HxA4XnhiQ5GkEYmzwwAIh40WxCdciUMQqpnpALdtfLk%2FX8EUoDwFlpuYrukcpF9aRAsL0iW2VQ5eBa4Ck0fQdEXaBIzo5zCDdF%2FmcuuEiUGFS5BA1eZGX1L0zoKMXfcDkIxGskDomutwDzq8rlKrFNEWYixYYCNuXqrzGHUj%2BgkvwaxeEzCTxyyNKEOx92SqN4t5ntPszQcjHlk%2FpC6fpp4aT9tdoEgBt3SsDK6FaKNvHG5o8XhcFvqF4kfTPnA9u20pZ2izmyOEWwpq86vLb8cWT4aI%2B87MiVJcmUEUKL%2FI11AXkSl4wurnNPpt6wslaNbHxTDbAg85uzBG9MFbvBpUwFV13o2MezmIBp3eV8hCJkRm63bjhe7UL191MrcQH24yluSI9gltnemJ2h5dQY5LorHtZlaor%2Baelg4ibT3HpOpSgC9FtbxVb%2FLtPlZL5g122LMrJBHXZYiqOp9tBtvrmjTeCMIbfzMEGOqUBS8lmnhXpcXDhNhPrNMsAcDwinmyTLgUBlrLv7uZCq45fzomuxPu6j0OYvOGYVwxNh18DEHpsUQnEe%2Bn3sOw5Hl4rj8O9AcGv40YYTaqb9S5dFxfGD8%2B3pEcT9E2%2B71Nxa8Rc8k8gouNnUu0OEAVmG%2BRhv8RYMUs6OYlMJxs2S2zXu5%2Fzs02Z2134tbxpZ1nNpkBXYJl7z5QDS9cZzIiPFG7olFwd&X-Amz-Signature=d90eb7ebcb10cd1b3a27d46ee9f7f1bdd9c9434af5c0d31df054ec9ca1152586&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOI7KRJZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCID4K9%2BXd%2FomlpcsVLXh3cbXizE%2Fa1Gpc5laHtSq5cOPtAiEApDR3cWHN%2BdZ8Kv0Z7zJcOoOMyzL04ZqlfI7pGPHkadMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFI4acsTpU0IfpWfqyrcA%2BxpsK97xZiYq06kn7UwdsAgO2jp%2BpkCryHjUV1aAY3dvoSE%2FzTtKKDj8vL7u3VrBupm7QoEXLo9w2EN6358lpw7stTzB8YXrlgyZr7vJe%2BRiZeYwq6BD%2B7AKyARUjiPNBX6hIgkIvGiuIhbTBVz9xMBvwjV7H1HxA4XnhiQ5GkEYmzwwAIh40WxCdciUMQqpnpALdtfLk%2FX8EUoDwFlpuYrukcpF9aRAsL0iW2VQ5eBa4Ck0fQdEXaBIzo5zCDdF%2FmcuuEiUGFS5BA1eZGX1L0zoKMXfcDkIxGskDomutwDzq8rlKrFNEWYixYYCNuXqrzGHUj%2BgkvwaxeEzCTxyyNKEOx92SqN4t5ntPszQcjHlk%2FpC6fpp4aT9tdoEgBt3SsDK6FaKNvHG5o8XhcFvqF4kfTPnA9u20pZ2izmyOEWwpq86vLb8cWT4aI%2B87MiVJcmUEUKL%2FI11AXkSl4wurnNPpt6wslaNbHxTDbAg85uzBG9MFbvBpUwFV13o2MezmIBp3eV8hCJkRm63bjhe7UL191MrcQH24yluSI9gltnemJ2h5dQY5LorHtZlaor%2Baelg4ibT3HpOpSgC9FtbxVb%2FLtPlZL5g122LMrJBHXZYiqOp9tBtvrmjTeCMIbfzMEGOqUBS8lmnhXpcXDhNhPrNMsAcDwinmyTLgUBlrLv7uZCq45fzomuxPu6j0OYvOGYVwxNh18DEHpsUQnEe%2Bn3sOw5Hl4rj8O9AcGv40YYTaqb9S5dFxfGD8%2B3pEcT9E2%2B71Nxa8Rc8k8gouNnUu0OEAVmG%2BRhv8RYMUs6OYlMJxs2S2zXu5%2Fzs02Z2134tbxpZ1nNpkBXYJl7z5QDS9cZzIiPFG7olFwd&X-Amz-Signature=f14c04f4fdbd235bf28bfb0b19f57266cc858557e1139fe4c46544328ee88634&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOI7KRJZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCID4K9%2BXd%2FomlpcsVLXh3cbXizE%2Fa1Gpc5laHtSq5cOPtAiEApDR3cWHN%2BdZ8Kv0Z7zJcOoOMyzL04ZqlfI7pGPHkadMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFI4acsTpU0IfpWfqyrcA%2BxpsK97xZiYq06kn7UwdsAgO2jp%2BpkCryHjUV1aAY3dvoSE%2FzTtKKDj8vL7u3VrBupm7QoEXLo9w2EN6358lpw7stTzB8YXrlgyZr7vJe%2BRiZeYwq6BD%2B7AKyARUjiPNBX6hIgkIvGiuIhbTBVz9xMBvwjV7H1HxA4XnhiQ5GkEYmzwwAIh40WxCdciUMQqpnpALdtfLk%2FX8EUoDwFlpuYrukcpF9aRAsL0iW2VQ5eBa4Ck0fQdEXaBIzo5zCDdF%2FmcuuEiUGFS5BA1eZGX1L0zoKMXfcDkIxGskDomutwDzq8rlKrFNEWYixYYCNuXqrzGHUj%2BgkvwaxeEzCTxyyNKEOx92SqN4t5ntPszQcjHlk%2FpC6fpp4aT9tdoEgBt3SsDK6FaKNvHG5o8XhcFvqF4kfTPnA9u20pZ2izmyOEWwpq86vLb8cWT4aI%2B87MiVJcmUEUKL%2FI11AXkSl4wurnNPpt6wslaNbHxTDbAg85uzBG9MFbvBpUwFV13o2MezmIBp3eV8hCJkRm63bjhe7UL191MrcQH24yluSI9gltnemJ2h5dQY5LorHtZlaor%2Baelg4ibT3HpOpSgC9FtbxVb%2FLtPlZL5g122LMrJBHXZYiqOp9tBtvrmjTeCMIbfzMEGOqUBS8lmnhXpcXDhNhPrNMsAcDwinmyTLgUBlrLv7uZCq45fzomuxPu6j0OYvOGYVwxNh18DEHpsUQnEe%2Bn3sOw5Hl4rj8O9AcGv40YYTaqb9S5dFxfGD8%2B3pEcT9E2%2B71Nxa8Rc8k8gouNnUu0OEAVmG%2BRhv8RYMUs6OYlMJxs2S2zXu5%2Fzs02Z2134tbxpZ1nNpkBXYJl7z5QDS9cZzIiPFG7olFwd&X-Amz-Signature=0e2999b6cf7551d13fd0be3d6882670669c9dfdcea2d95e8cf7523da06b53c24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOI7KRJZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCID4K9%2BXd%2FomlpcsVLXh3cbXizE%2Fa1Gpc5laHtSq5cOPtAiEApDR3cWHN%2BdZ8Kv0Z7zJcOoOMyzL04ZqlfI7pGPHkadMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFI4acsTpU0IfpWfqyrcA%2BxpsK97xZiYq06kn7UwdsAgO2jp%2BpkCryHjUV1aAY3dvoSE%2FzTtKKDj8vL7u3VrBupm7QoEXLo9w2EN6358lpw7stTzB8YXrlgyZr7vJe%2BRiZeYwq6BD%2B7AKyARUjiPNBX6hIgkIvGiuIhbTBVz9xMBvwjV7H1HxA4XnhiQ5GkEYmzwwAIh40WxCdciUMQqpnpALdtfLk%2FX8EUoDwFlpuYrukcpF9aRAsL0iW2VQ5eBa4Ck0fQdEXaBIzo5zCDdF%2FmcuuEiUGFS5BA1eZGX1L0zoKMXfcDkIxGskDomutwDzq8rlKrFNEWYixYYCNuXqrzGHUj%2BgkvwaxeEzCTxyyNKEOx92SqN4t5ntPszQcjHlk%2FpC6fpp4aT9tdoEgBt3SsDK6FaKNvHG5o8XhcFvqF4kfTPnA9u20pZ2izmyOEWwpq86vLb8cWT4aI%2B87MiVJcmUEUKL%2FI11AXkSl4wurnNPpt6wslaNbHxTDbAg85uzBG9MFbvBpUwFV13o2MezmIBp3eV8hCJkRm63bjhe7UL191MrcQH24yluSI9gltnemJ2h5dQY5LorHtZlaor%2Baelg4ibT3HpOpSgC9FtbxVb%2FLtPlZL5g122LMrJBHXZYiqOp9tBtvrmjTeCMIbfzMEGOqUBS8lmnhXpcXDhNhPrNMsAcDwinmyTLgUBlrLv7uZCq45fzomuxPu6j0OYvOGYVwxNh18DEHpsUQnEe%2Bn3sOw5Hl4rj8O9AcGv40YYTaqb9S5dFxfGD8%2B3pEcT9E2%2B71Nxa8Rc8k8gouNnUu0OEAVmG%2BRhv8RYMUs6OYlMJxs2S2zXu5%2Fzs02Z2134tbxpZ1nNpkBXYJl7z5QDS9cZzIiPFG7olFwd&X-Amz-Signature=e611399f12e283db55ed07541b4dbc41897cdd4d81046883054b424776a5c222&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
