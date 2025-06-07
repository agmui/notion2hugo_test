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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MWOIYD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfHxhxBq3pZMvoKYNBeqOG5obTPK4fjAqPeEWcusjzQAIhAJ86xpBgVv7XM5ZTuMXf3huZg%2BC8YhvI3wUdVKneXRzUKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLo%2BMy%2FytPzXl1h%2Bkq3AMNLA9kIcR5KUkF6T%2BUpZzUApcakDkFtXGFSQfMHQi2gc89QtqV5sDzJMPCt8wgFH98wylHKAwG%2F6p5GdnsSi6v6t%2FoSAk1%2F8tD9v4XAvTBPsuJp5Lak0FjgBBZ3iJTT3aUn%2FSZ%2BiLWQXt8SEcPfuWdmcmTPmeIgDaoQXobs5CjB2IONGRM8Pb68WcX%2BnHPevIhKkggggzTwKvTuqTl5uAhJXk%2BCTPpVc%2F7381C7l741syCVI2Ff1GWIscvowHXscXUV6o5IqcAvF1oTMPub9nK1MDzMzhiqJe33TSzGHUde%2BocExammpHogIzHIzfoI30iRDJx%2Fs%2FiRPPRMQd1oKtXfjRtBDLl7tsa9rfJAED1HNDu6CyJNICVfCBoQCv2Ow14FOdLvkOVEHipbUM24SvPGa5F2IzsgORSKgl6L19GltNbVBN%2F98awuEjBeAZgm%2BPzAyTisLwbsRiIsi13%2FGCKu6KWevg5qj3gfHAjTYGNnBZPG4OEvB%2FYPpSCA2HquuaOUTGWvz%2FheIaiHLKhtsaHyCRA8sFiUCar6F7cG9JM5drTkvvfjk0By73w%2FnFvSJ8lwKlpQ6NZo3qzZ5zcjFE8JeR3psdJ%2FwXyyot3rcrn0p9qBhYIeBlCz4PczzCjg5HCBjqkAZmMXpZkZuBm303Nr%2BBVGNWRKQbxjhaB3ku8ilksyzG5Z8FIhMIF130hbncOgd2SUEBvfsZAyUdu4wGIwHDO5oeY%2BFDrTHzVg2qsIZNG1IHL7DOQPmKRCswDAzTKXM6Nfuqp%2B1ZESeLKZ%2FJ8rQv8PsqlBcj7dajzUnguubYA9gQGSFZr5LxqzuF6EWBqCcu74xvkYMNn2JgBMOBid%2F7l2paFseET&X-Amz-Signature=72393ec61ed22eb6f1d2bec9cf34649a6f446ce98a344999852206d656b0048f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MWOIYD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfHxhxBq3pZMvoKYNBeqOG5obTPK4fjAqPeEWcusjzQAIhAJ86xpBgVv7XM5ZTuMXf3huZg%2BC8YhvI3wUdVKneXRzUKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLo%2BMy%2FytPzXl1h%2Bkq3AMNLA9kIcR5KUkF6T%2BUpZzUApcakDkFtXGFSQfMHQi2gc89QtqV5sDzJMPCt8wgFH98wylHKAwG%2F6p5GdnsSi6v6t%2FoSAk1%2F8tD9v4XAvTBPsuJp5Lak0FjgBBZ3iJTT3aUn%2FSZ%2BiLWQXt8SEcPfuWdmcmTPmeIgDaoQXobs5CjB2IONGRM8Pb68WcX%2BnHPevIhKkggggzTwKvTuqTl5uAhJXk%2BCTPpVc%2F7381C7l741syCVI2Ff1GWIscvowHXscXUV6o5IqcAvF1oTMPub9nK1MDzMzhiqJe33TSzGHUde%2BocExammpHogIzHIzfoI30iRDJx%2Fs%2FiRPPRMQd1oKtXfjRtBDLl7tsa9rfJAED1HNDu6CyJNICVfCBoQCv2Ow14FOdLvkOVEHipbUM24SvPGa5F2IzsgORSKgl6L19GltNbVBN%2F98awuEjBeAZgm%2BPzAyTisLwbsRiIsi13%2FGCKu6KWevg5qj3gfHAjTYGNnBZPG4OEvB%2FYPpSCA2HquuaOUTGWvz%2FheIaiHLKhtsaHyCRA8sFiUCar6F7cG9JM5drTkvvfjk0By73w%2FnFvSJ8lwKlpQ6NZo3qzZ5zcjFE8JeR3psdJ%2FwXyyot3rcrn0p9qBhYIeBlCz4PczzCjg5HCBjqkAZmMXpZkZuBm303Nr%2BBVGNWRKQbxjhaB3ku8ilksyzG5Z8FIhMIF130hbncOgd2SUEBvfsZAyUdu4wGIwHDO5oeY%2BFDrTHzVg2qsIZNG1IHL7DOQPmKRCswDAzTKXM6Nfuqp%2B1ZESeLKZ%2FJ8rQv8PsqlBcj7dajzUnguubYA9gQGSFZr5LxqzuF6EWBqCcu74xvkYMNn2JgBMOBid%2F7l2paFseET&X-Amz-Signature=2ee5a6ede09f3ba14b68a808488669b5646f323181bd1a2c9859a5be539991ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MWOIYD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfHxhxBq3pZMvoKYNBeqOG5obTPK4fjAqPeEWcusjzQAIhAJ86xpBgVv7XM5ZTuMXf3huZg%2BC8YhvI3wUdVKneXRzUKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLo%2BMy%2FytPzXl1h%2Bkq3AMNLA9kIcR5KUkF6T%2BUpZzUApcakDkFtXGFSQfMHQi2gc89QtqV5sDzJMPCt8wgFH98wylHKAwG%2F6p5GdnsSi6v6t%2FoSAk1%2F8tD9v4XAvTBPsuJp5Lak0FjgBBZ3iJTT3aUn%2FSZ%2BiLWQXt8SEcPfuWdmcmTPmeIgDaoQXobs5CjB2IONGRM8Pb68WcX%2BnHPevIhKkggggzTwKvTuqTl5uAhJXk%2BCTPpVc%2F7381C7l741syCVI2Ff1GWIscvowHXscXUV6o5IqcAvF1oTMPub9nK1MDzMzhiqJe33TSzGHUde%2BocExammpHogIzHIzfoI30iRDJx%2Fs%2FiRPPRMQd1oKtXfjRtBDLl7tsa9rfJAED1HNDu6CyJNICVfCBoQCv2Ow14FOdLvkOVEHipbUM24SvPGa5F2IzsgORSKgl6L19GltNbVBN%2F98awuEjBeAZgm%2BPzAyTisLwbsRiIsi13%2FGCKu6KWevg5qj3gfHAjTYGNnBZPG4OEvB%2FYPpSCA2HquuaOUTGWvz%2FheIaiHLKhtsaHyCRA8sFiUCar6F7cG9JM5drTkvvfjk0By73w%2FnFvSJ8lwKlpQ6NZo3qzZ5zcjFE8JeR3psdJ%2FwXyyot3rcrn0p9qBhYIeBlCz4PczzCjg5HCBjqkAZmMXpZkZuBm303Nr%2BBVGNWRKQbxjhaB3ku8ilksyzG5Z8FIhMIF130hbncOgd2SUEBvfsZAyUdu4wGIwHDO5oeY%2BFDrTHzVg2qsIZNG1IHL7DOQPmKRCswDAzTKXM6Nfuqp%2B1ZESeLKZ%2FJ8rQv8PsqlBcj7dajzUnguubYA9gQGSFZr5LxqzuF6EWBqCcu74xvkYMNn2JgBMOBid%2F7l2paFseET&X-Amz-Signature=9753d2387d35497611073a37c384f26d103433cd48f272b436ab7652a444931d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MWOIYD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfHxhxBq3pZMvoKYNBeqOG5obTPK4fjAqPeEWcusjzQAIhAJ86xpBgVv7XM5ZTuMXf3huZg%2BC8YhvI3wUdVKneXRzUKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLo%2BMy%2FytPzXl1h%2Bkq3AMNLA9kIcR5KUkF6T%2BUpZzUApcakDkFtXGFSQfMHQi2gc89QtqV5sDzJMPCt8wgFH98wylHKAwG%2F6p5GdnsSi6v6t%2FoSAk1%2F8tD9v4XAvTBPsuJp5Lak0FjgBBZ3iJTT3aUn%2FSZ%2BiLWQXt8SEcPfuWdmcmTPmeIgDaoQXobs5CjB2IONGRM8Pb68WcX%2BnHPevIhKkggggzTwKvTuqTl5uAhJXk%2BCTPpVc%2F7381C7l741syCVI2Ff1GWIscvowHXscXUV6o5IqcAvF1oTMPub9nK1MDzMzhiqJe33TSzGHUde%2BocExammpHogIzHIzfoI30iRDJx%2Fs%2FiRPPRMQd1oKtXfjRtBDLl7tsa9rfJAED1HNDu6CyJNICVfCBoQCv2Ow14FOdLvkOVEHipbUM24SvPGa5F2IzsgORSKgl6L19GltNbVBN%2F98awuEjBeAZgm%2BPzAyTisLwbsRiIsi13%2FGCKu6KWevg5qj3gfHAjTYGNnBZPG4OEvB%2FYPpSCA2HquuaOUTGWvz%2FheIaiHLKhtsaHyCRA8sFiUCar6F7cG9JM5drTkvvfjk0By73w%2FnFvSJ8lwKlpQ6NZo3qzZ5zcjFE8JeR3psdJ%2FwXyyot3rcrn0p9qBhYIeBlCz4PczzCjg5HCBjqkAZmMXpZkZuBm303Nr%2BBVGNWRKQbxjhaB3ku8ilksyzG5Z8FIhMIF130hbncOgd2SUEBvfsZAyUdu4wGIwHDO5oeY%2BFDrTHzVg2qsIZNG1IHL7DOQPmKRCswDAzTKXM6Nfuqp%2B1ZESeLKZ%2FJ8rQv8PsqlBcj7dajzUnguubYA9gQGSFZr5LxqzuF6EWBqCcu74xvkYMNn2JgBMOBid%2F7l2paFseET&X-Amz-Signature=f0960d42cd89bdf5c8012496dd35dc07beb2ea2deaa059b91ff0703956db6c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MWOIYD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfHxhxBq3pZMvoKYNBeqOG5obTPK4fjAqPeEWcusjzQAIhAJ86xpBgVv7XM5ZTuMXf3huZg%2BC8YhvI3wUdVKneXRzUKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLo%2BMy%2FytPzXl1h%2Bkq3AMNLA9kIcR5KUkF6T%2BUpZzUApcakDkFtXGFSQfMHQi2gc89QtqV5sDzJMPCt8wgFH98wylHKAwG%2F6p5GdnsSi6v6t%2FoSAk1%2F8tD9v4XAvTBPsuJp5Lak0FjgBBZ3iJTT3aUn%2FSZ%2BiLWQXt8SEcPfuWdmcmTPmeIgDaoQXobs5CjB2IONGRM8Pb68WcX%2BnHPevIhKkggggzTwKvTuqTl5uAhJXk%2BCTPpVc%2F7381C7l741syCVI2Ff1GWIscvowHXscXUV6o5IqcAvF1oTMPub9nK1MDzMzhiqJe33TSzGHUde%2BocExammpHogIzHIzfoI30iRDJx%2Fs%2FiRPPRMQd1oKtXfjRtBDLl7tsa9rfJAED1HNDu6CyJNICVfCBoQCv2Ow14FOdLvkOVEHipbUM24SvPGa5F2IzsgORSKgl6L19GltNbVBN%2F98awuEjBeAZgm%2BPzAyTisLwbsRiIsi13%2FGCKu6KWevg5qj3gfHAjTYGNnBZPG4OEvB%2FYPpSCA2HquuaOUTGWvz%2FheIaiHLKhtsaHyCRA8sFiUCar6F7cG9JM5drTkvvfjk0By73w%2FnFvSJ8lwKlpQ6NZo3qzZ5zcjFE8JeR3psdJ%2FwXyyot3rcrn0p9qBhYIeBlCz4PczzCjg5HCBjqkAZmMXpZkZuBm303Nr%2BBVGNWRKQbxjhaB3ku8ilksyzG5Z8FIhMIF130hbncOgd2SUEBvfsZAyUdu4wGIwHDO5oeY%2BFDrTHzVg2qsIZNG1IHL7DOQPmKRCswDAzTKXM6Nfuqp%2B1ZESeLKZ%2FJ8rQv8PsqlBcj7dajzUnguubYA9gQGSFZr5LxqzuF6EWBqCcu74xvkYMNn2JgBMOBid%2F7l2paFseET&X-Amz-Signature=9382b23b7e58035e8bd328be9aba5e7402fbf43468b7d8a323a4e5c4d8e05cad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MWOIYD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfHxhxBq3pZMvoKYNBeqOG5obTPK4fjAqPeEWcusjzQAIhAJ86xpBgVv7XM5ZTuMXf3huZg%2BC8YhvI3wUdVKneXRzUKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLo%2BMy%2FytPzXl1h%2Bkq3AMNLA9kIcR5KUkF6T%2BUpZzUApcakDkFtXGFSQfMHQi2gc89QtqV5sDzJMPCt8wgFH98wylHKAwG%2F6p5GdnsSi6v6t%2FoSAk1%2F8tD9v4XAvTBPsuJp5Lak0FjgBBZ3iJTT3aUn%2FSZ%2BiLWQXt8SEcPfuWdmcmTPmeIgDaoQXobs5CjB2IONGRM8Pb68WcX%2BnHPevIhKkggggzTwKvTuqTl5uAhJXk%2BCTPpVc%2F7381C7l741syCVI2Ff1GWIscvowHXscXUV6o5IqcAvF1oTMPub9nK1MDzMzhiqJe33TSzGHUde%2BocExammpHogIzHIzfoI30iRDJx%2Fs%2FiRPPRMQd1oKtXfjRtBDLl7tsa9rfJAED1HNDu6CyJNICVfCBoQCv2Ow14FOdLvkOVEHipbUM24SvPGa5F2IzsgORSKgl6L19GltNbVBN%2F98awuEjBeAZgm%2BPzAyTisLwbsRiIsi13%2FGCKu6KWevg5qj3gfHAjTYGNnBZPG4OEvB%2FYPpSCA2HquuaOUTGWvz%2FheIaiHLKhtsaHyCRA8sFiUCar6F7cG9JM5drTkvvfjk0By73w%2FnFvSJ8lwKlpQ6NZo3qzZ5zcjFE8JeR3psdJ%2FwXyyot3rcrn0p9qBhYIeBlCz4PczzCjg5HCBjqkAZmMXpZkZuBm303Nr%2BBVGNWRKQbxjhaB3ku8ilksyzG5Z8FIhMIF130hbncOgd2SUEBvfsZAyUdu4wGIwHDO5oeY%2BFDrTHzVg2qsIZNG1IHL7DOQPmKRCswDAzTKXM6Nfuqp%2B1ZESeLKZ%2FJ8rQv8PsqlBcj7dajzUnguubYA9gQGSFZr5LxqzuF6EWBqCcu74xvkYMNn2JgBMOBid%2F7l2paFseET&X-Amz-Signature=c43ceac55ce6ca5b4ee26ba6dc4893f9b0204a023651373ada786f0d42e3027e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MWOIYD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfHxhxBq3pZMvoKYNBeqOG5obTPK4fjAqPeEWcusjzQAIhAJ86xpBgVv7XM5ZTuMXf3huZg%2BC8YhvI3wUdVKneXRzUKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLo%2BMy%2FytPzXl1h%2Bkq3AMNLA9kIcR5KUkF6T%2BUpZzUApcakDkFtXGFSQfMHQi2gc89QtqV5sDzJMPCt8wgFH98wylHKAwG%2F6p5GdnsSi6v6t%2FoSAk1%2F8tD9v4XAvTBPsuJp5Lak0FjgBBZ3iJTT3aUn%2FSZ%2BiLWQXt8SEcPfuWdmcmTPmeIgDaoQXobs5CjB2IONGRM8Pb68WcX%2BnHPevIhKkggggzTwKvTuqTl5uAhJXk%2BCTPpVc%2F7381C7l741syCVI2Ff1GWIscvowHXscXUV6o5IqcAvF1oTMPub9nK1MDzMzhiqJe33TSzGHUde%2BocExammpHogIzHIzfoI30iRDJx%2Fs%2FiRPPRMQd1oKtXfjRtBDLl7tsa9rfJAED1HNDu6CyJNICVfCBoQCv2Ow14FOdLvkOVEHipbUM24SvPGa5F2IzsgORSKgl6L19GltNbVBN%2F98awuEjBeAZgm%2BPzAyTisLwbsRiIsi13%2FGCKu6KWevg5qj3gfHAjTYGNnBZPG4OEvB%2FYPpSCA2HquuaOUTGWvz%2FheIaiHLKhtsaHyCRA8sFiUCar6F7cG9JM5drTkvvfjk0By73w%2FnFvSJ8lwKlpQ6NZo3qzZ5zcjFE8JeR3psdJ%2FwXyyot3rcrn0p9qBhYIeBlCz4PczzCjg5HCBjqkAZmMXpZkZuBm303Nr%2BBVGNWRKQbxjhaB3ku8ilksyzG5Z8FIhMIF130hbncOgd2SUEBvfsZAyUdu4wGIwHDO5oeY%2BFDrTHzVg2qsIZNG1IHL7DOQPmKRCswDAzTKXM6Nfuqp%2B1ZESeLKZ%2FJ8rQv8PsqlBcj7dajzUnguubYA9gQGSFZr5LxqzuF6EWBqCcu74xvkYMNn2JgBMOBid%2F7l2paFseET&X-Amz-Signature=40ecb17995b89d612889c95687254a10eb0fd57019aa1b37af692854077fc855&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MWOIYD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfHxhxBq3pZMvoKYNBeqOG5obTPK4fjAqPeEWcusjzQAIhAJ86xpBgVv7XM5ZTuMXf3huZg%2BC8YhvI3wUdVKneXRzUKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLo%2BMy%2FytPzXl1h%2Bkq3AMNLA9kIcR5KUkF6T%2BUpZzUApcakDkFtXGFSQfMHQi2gc89QtqV5sDzJMPCt8wgFH98wylHKAwG%2F6p5GdnsSi6v6t%2FoSAk1%2F8tD9v4XAvTBPsuJp5Lak0FjgBBZ3iJTT3aUn%2FSZ%2BiLWQXt8SEcPfuWdmcmTPmeIgDaoQXobs5CjB2IONGRM8Pb68WcX%2BnHPevIhKkggggzTwKvTuqTl5uAhJXk%2BCTPpVc%2F7381C7l741syCVI2Ff1GWIscvowHXscXUV6o5IqcAvF1oTMPub9nK1MDzMzhiqJe33TSzGHUde%2BocExammpHogIzHIzfoI30iRDJx%2Fs%2FiRPPRMQd1oKtXfjRtBDLl7tsa9rfJAED1HNDu6CyJNICVfCBoQCv2Ow14FOdLvkOVEHipbUM24SvPGa5F2IzsgORSKgl6L19GltNbVBN%2F98awuEjBeAZgm%2BPzAyTisLwbsRiIsi13%2FGCKu6KWevg5qj3gfHAjTYGNnBZPG4OEvB%2FYPpSCA2HquuaOUTGWvz%2FheIaiHLKhtsaHyCRA8sFiUCar6F7cG9JM5drTkvvfjk0By73w%2FnFvSJ8lwKlpQ6NZo3qzZ5zcjFE8JeR3psdJ%2FwXyyot3rcrn0p9qBhYIeBlCz4PczzCjg5HCBjqkAZmMXpZkZuBm303Nr%2BBVGNWRKQbxjhaB3ku8ilksyzG5Z8FIhMIF130hbncOgd2SUEBvfsZAyUdu4wGIwHDO5oeY%2BFDrTHzVg2qsIZNG1IHL7DOQPmKRCswDAzTKXM6Nfuqp%2B1ZESeLKZ%2FJ8rQv8PsqlBcj7dajzUnguubYA9gQGSFZr5LxqzuF6EWBqCcu74xvkYMNn2JgBMOBid%2F7l2paFseET&X-Amz-Signature=97b643acae86e0128850ef84da3358737fb567a5cfa26f619356842045356275&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
