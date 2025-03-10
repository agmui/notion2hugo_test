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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3RNMIQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCOAbDAK2%2Bj22LP7dkzpDx12Am7WIKr9kaHWpQE%2BzfRIAIgMVd14Rq9YPGW2vJRYaJ4npeIhPSRhQTJl7TY74tgumwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyD%2FVy4qcb0QOFZ3ircA63b5Fsa%2FGJ9wDkui8dDQ%2F8V0kaaLr8eBX%2Bo1%2B%2BEI1JTK%2F1p8C%2BJ3wvSwsBz%2FNECEjeNTme%2BmC8Dz%2BOGMLoxu%2F3KIvlWSG9Isnzy%2BZRQPnjFQJ6vXzv%2BHuFpIToyxSgvSN1DtJ3F9p6RPdixTi5a6ylc%2BrbCcSFJO%2FH3otavxrpqeCLB5oRODwr8pkTPxuAO2HGeFNpQygxSipMIT56VIchogDYAuk%2FlWrV95be%2B3N8vymr%2F5R9rtBsKOdmts89PWdwZvQJVf2YYQvX1iVmM7SMQ0UZu3T8OxqMS6Mxz4AUkeIMLBsm%2FtZ2mZKnVvXK6Q3X4mjMW6zgjQbtkTO%2BRZrbGQ%2BK8xhYYgcxigB2On5ssNAwfm%2BM3h922afqk822uDDhdXgOuEiA1TWdVFU7OsxgtVlIRr6xtINkXkch0LOtiBKaIQtv1N%2FcE%2BXv5qyvZ1hCq16tYqEF5MQk1j5yL60z6Sc0LcINCdAOYn%2F5D5vcSyyrgVYjAimR619rXB3t6hikvlTMX3BtXEj3dPbo7vWgqM4zSMFN0nJe4rMRl%2F2rzUz771OQ8N%2Fz48DupveJZ4lXKqA2P4JSXZNvblnN2SHWBiuxOOXDBh%2FMwy%2BOKDtiLBKQ3c0eBQ%2FGj4Dn1MMfcuL4GOqUBOu9ktWQ4A%2BPw2Hk0zPUlkJ2%2BvxjmsI0Te%2BbROyMlxxu9LZuR7mXC8fwo9k0R3sXO65KbOFAnLgN0Q4%2FHgIvgOLmlnjPToarvvCHp7A58O2c3u%2F9RIs6T6%2BOrflHnBkZ6%2FgTKR3gppJBUmZ9qzGWnxkjIr7VW58ZsVm2scF0T3nbwqwyTUyHjcu4XTEuSjhP1kgSnJ0rusT7a474SdlU%2FJhrYJNVv&X-Amz-Signature=6011d1d67f8d04952352ab04bb036713b8ead143f08fbe603d6bc751b5ec7b61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3RNMIQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCOAbDAK2%2Bj22LP7dkzpDx12Am7WIKr9kaHWpQE%2BzfRIAIgMVd14Rq9YPGW2vJRYaJ4npeIhPSRhQTJl7TY74tgumwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyD%2FVy4qcb0QOFZ3ircA63b5Fsa%2FGJ9wDkui8dDQ%2F8V0kaaLr8eBX%2Bo1%2B%2BEI1JTK%2F1p8C%2BJ3wvSwsBz%2FNECEjeNTme%2BmC8Dz%2BOGMLoxu%2F3KIvlWSG9Isnzy%2BZRQPnjFQJ6vXzv%2BHuFpIToyxSgvSN1DtJ3F9p6RPdixTi5a6ylc%2BrbCcSFJO%2FH3otavxrpqeCLB5oRODwr8pkTPxuAO2HGeFNpQygxSipMIT56VIchogDYAuk%2FlWrV95be%2B3N8vymr%2F5R9rtBsKOdmts89PWdwZvQJVf2YYQvX1iVmM7SMQ0UZu3T8OxqMS6Mxz4AUkeIMLBsm%2FtZ2mZKnVvXK6Q3X4mjMW6zgjQbtkTO%2BRZrbGQ%2BK8xhYYgcxigB2On5ssNAwfm%2BM3h922afqk822uDDhdXgOuEiA1TWdVFU7OsxgtVlIRr6xtINkXkch0LOtiBKaIQtv1N%2FcE%2BXv5qyvZ1hCq16tYqEF5MQk1j5yL60z6Sc0LcINCdAOYn%2F5D5vcSyyrgVYjAimR619rXB3t6hikvlTMX3BtXEj3dPbo7vWgqM4zSMFN0nJe4rMRl%2F2rzUz771OQ8N%2Fz48DupveJZ4lXKqA2P4JSXZNvblnN2SHWBiuxOOXDBh%2FMwy%2BOKDtiLBKQ3c0eBQ%2FGj4Dn1MMfcuL4GOqUBOu9ktWQ4A%2BPw2Hk0zPUlkJ2%2BvxjmsI0Te%2BbROyMlxxu9LZuR7mXC8fwo9k0R3sXO65KbOFAnLgN0Q4%2FHgIvgOLmlnjPToarvvCHp7A58O2c3u%2F9RIs6T6%2BOrflHnBkZ6%2FgTKR3gppJBUmZ9qzGWnxkjIr7VW58ZsVm2scF0T3nbwqwyTUyHjcu4XTEuSjhP1kgSnJ0rusT7a474SdlU%2FJhrYJNVv&X-Amz-Signature=b7cb0a1f3afcd6071f8893276cd9ab2a1ec707e6c97e8c30761d3e196b84af3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3RNMIQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCOAbDAK2%2Bj22LP7dkzpDx12Am7WIKr9kaHWpQE%2BzfRIAIgMVd14Rq9YPGW2vJRYaJ4npeIhPSRhQTJl7TY74tgumwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyD%2FVy4qcb0QOFZ3ircA63b5Fsa%2FGJ9wDkui8dDQ%2F8V0kaaLr8eBX%2Bo1%2B%2BEI1JTK%2F1p8C%2BJ3wvSwsBz%2FNECEjeNTme%2BmC8Dz%2BOGMLoxu%2F3KIvlWSG9Isnzy%2BZRQPnjFQJ6vXzv%2BHuFpIToyxSgvSN1DtJ3F9p6RPdixTi5a6ylc%2BrbCcSFJO%2FH3otavxrpqeCLB5oRODwr8pkTPxuAO2HGeFNpQygxSipMIT56VIchogDYAuk%2FlWrV95be%2B3N8vymr%2F5R9rtBsKOdmts89PWdwZvQJVf2YYQvX1iVmM7SMQ0UZu3T8OxqMS6Mxz4AUkeIMLBsm%2FtZ2mZKnVvXK6Q3X4mjMW6zgjQbtkTO%2BRZrbGQ%2BK8xhYYgcxigB2On5ssNAwfm%2BM3h922afqk822uDDhdXgOuEiA1TWdVFU7OsxgtVlIRr6xtINkXkch0LOtiBKaIQtv1N%2FcE%2BXv5qyvZ1hCq16tYqEF5MQk1j5yL60z6Sc0LcINCdAOYn%2F5D5vcSyyrgVYjAimR619rXB3t6hikvlTMX3BtXEj3dPbo7vWgqM4zSMFN0nJe4rMRl%2F2rzUz771OQ8N%2Fz48DupveJZ4lXKqA2P4JSXZNvblnN2SHWBiuxOOXDBh%2FMwy%2BOKDtiLBKQ3c0eBQ%2FGj4Dn1MMfcuL4GOqUBOu9ktWQ4A%2BPw2Hk0zPUlkJ2%2BvxjmsI0Te%2BbROyMlxxu9LZuR7mXC8fwo9k0R3sXO65KbOFAnLgN0Q4%2FHgIvgOLmlnjPToarvvCHp7A58O2c3u%2F9RIs6T6%2BOrflHnBkZ6%2FgTKR3gppJBUmZ9qzGWnxkjIr7VW58ZsVm2scF0T3nbwqwyTUyHjcu4XTEuSjhP1kgSnJ0rusT7a474SdlU%2FJhrYJNVv&X-Amz-Signature=4828ff5372d7139ad63dfea92c8fe6dc35a50bc0c5f6e4d9257b08b80916f266&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3RNMIQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCOAbDAK2%2Bj22LP7dkzpDx12Am7WIKr9kaHWpQE%2BzfRIAIgMVd14Rq9YPGW2vJRYaJ4npeIhPSRhQTJl7TY74tgumwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyD%2FVy4qcb0QOFZ3ircA63b5Fsa%2FGJ9wDkui8dDQ%2F8V0kaaLr8eBX%2Bo1%2B%2BEI1JTK%2F1p8C%2BJ3wvSwsBz%2FNECEjeNTme%2BmC8Dz%2BOGMLoxu%2F3KIvlWSG9Isnzy%2BZRQPnjFQJ6vXzv%2BHuFpIToyxSgvSN1DtJ3F9p6RPdixTi5a6ylc%2BrbCcSFJO%2FH3otavxrpqeCLB5oRODwr8pkTPxuAO2HGeFNpQygxSipMIT56VIchogDYAuk%2FlWrV95be%2B3N8vymr%2F5R9rtBsKOdmts89PWdwZvQJVf2YYQvX1iVmM7SMQ0UZu3T8OxqMS6Mxz4AUkeIMLBsm%2FtZ2mZKnVvXK6Q3X4mjMW6zgjQbtkTO%2BRZrbGQ%2BK8xhYYgcxigB2On5ssNAwfm%2BM3h922afqk822uDDhdXgOuEiA1TWdVFU7OsxgtVlIRr6xtINkXkch0LOtiBKaIQtv1N%2FcE%2BXv5qyvZ1hCq16tYqEF5MQk1j5yL60z6Sc0LcINCdAOYn%2F5D5vcSyyrgVYjAimR619rXB3t6hikvlTMX3BtXEj3dPbo7vWgqM4zSMFN0nJe4rMRl%2F2rzUz771OQ8N%2Fz48DupveJZ4lXKqA2P4JSXZNvblnN2SHWBiuxOOXDBh%2FMwy%2BOKDtiLBKQ3c0eBQ%2FGj4Dn1MMfcuL4GOqUBOu9ktWQ4A%2BPw2Hk0zPUlkJ2%2BvxjmsI0Te%2BbROyMlxxu9LZuR7mXC8fwo9k0R3sXO65KbOFAnLgN0Q4%2FHgIvgOLmlnjPToarvvCHp7A58O2c3u%2F9RIs6T6%2BOrflHnBkZ6%2FgTKR3gppJBUmZ9qzGWnxkjIr7VW58ZsVm2scF0T3nbwqwyTUyHjcu4XTEuSjhP1kgSnJ0rusT7a474SdlU%2FJhrYJNVv&X-Amz-Signature=ecf62ec5c01b03f5e859cdca257cb132b675a3ee79f85238f54a5bab7fe264ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3RNMIQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCOAbDAK2%2Bj22LP7dkzpDx12Am7WIKr9kaHWpQE%2BzfRIAIgMVd14Rq9YPGW2vJRYaJ4npeIhPSRhQTJl7TY74tgumwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyD%2FVy4qcb0QOFZ3ircA63b5Fsa%2FGJ9wDkui8dDQ%2F8V0kaaLr8eBX%2Bo1%2B%2BEI1JTK%2F1p8C%2BJ3wvSwsBz%2FNECEjeNTme%2BmC8Dz%2BOGMLoxu%2F3KIvlWSG9Isnzy%2BZRQPnjFQJ6vXzv%2BHuFpIToyxSgvSN1DtJ3F9p6RPdixTi5a6ylc%2BrbCcSFJO%2FH3otavxrpqeCLB5oRODwr8pkTPxuAO2HGeFNpQygxSipMIT56VIchogDYAuk%2FlWrV95be%2B3N8vymr%2F5R9rtBsKOdmts89PWdwZvQJVf2YYQvX1iVmM7SMQ0UZu3T8OxqMS6Mxz4AUkeIMLBsm%2FtZ2mZKnVvXK6Q3X4mjMW6zgjQbtkTO%2BRZrbGQ%2BK8xhYYgcxigB2On5ssNAwfm%2BM3h922afqk822uDDhdXgOuEiA1TWdVFU7OsxgtVlIRr6xtINkXkch0LOtiBKaIQtv1N%2FcE%2BXv5qyvZ1hCq16tYqEF5MQk1j5yL60z6Sc0LcINCdAOYn%2F5D5vcSyyrgVYjAimR619rXB3t6hikvlTMX3BtXEj3dPbo7vWgqM4zSMFN0nJe4rMRl%2F2rzUz771OQ8N%2Fz48DupveJZ4lXKqA2P4JSXZNvblnN2SHWBiuxOOXDBh%2FMwy%2BOKDtiLBKQ3c0eBQ%2FGj4Dn1MMfcuL4GOqUBOu9ktWQ4A%2BPw2Hk0zPUlkJ2%2BvxjmsI0Te%2BbROyMlxxu9LZuR7mXC8fwo9k0R3sXO65KbOFAnLgN0Q4%2FHgIvgOLmlnjPToarvvCHp7A58O2c3u%2F9RIs6T6%2BOrflHnBkZ6%2FgTKR3gppJBUmZ9qzGWnxkjIr7VW58ZsVm2scF0T3nbwqwyTUyHjcu4XTEuSjhP1kgSnJ0rusT7a474SdlU%2FJhrYJNVv&X-Amz-Signature=cdbec17bd5064d21a98fe5ca1417cb116951ae83d112367573ed049293e92c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3RNMIQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCOAbDAK2%2Bj22LP7dkzpDx12Am7WIKr9kaHWpQE%2BzfRIAIgMVd14Rq9YPGW2vJRYaJ4npeIhPSRhQTJl7TY74tgumwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyD%2FVy4qcb0QOFZ3ircA63b5Fsa%2FGJ9wDkui8dDQ%2F8V0kaaLr8eBX%2Bo1%2B%2BEI1JTK%2F1p8C%2BJ3wvSwsBz%2FNECEjeNTme%2BmC8Dz%2BOGMLoxu%2F3KIvlWSG9Isnzy%2BZRQPnjFQJ6vXzv%2BHuFpIToyxSgvSN1DtJ3F9p6RPdixTi5a6ylc%2BrbCcSFJO%2FH3otavxrpqeCLB5oRODwr8pkTPxuAO2HGeFNpQygxSipMIT56VIchogDYAuk%2FlWrV95be%2B3N8vymr%2F5R9rtBsKOdmts89PWdwZvQJVf2YYQvX1iVmM7SMQ0UZu3T8OxqMS6Mxz4AUkeIMLBsm%2FtZ2mZKnVvXK6Q3X4mjMW6zgjQbtkTO%2BRZrbGQ%2BK8xhYYgcxigB2On5ssNAwfm%2BM3h922afqk822uDDhdXgOuEiA1TWdVFU7OsxgtVlIRr6xtINkXkch0LOtiBKaIQtv1N%2FcE%2BXv5qyvZ1hCq16tYqEF5MQk1j5yL60z6Sc0LcINCdAOYn%2F5D5vcSyyrgVYjAimR619rXB3t6hikvlTMX3BtXEj3dPbo7vWgqM4zSMFN0nJe4rMRl%2F2rzUz771OQ8N%2Fz48DupveJZ4lXKqA2P4JSXZNvblnN2SHWBiuxOOXDBh%2FMwy%2BOKDtiLBKQ3c0eBQ%2FGj4Dn1MMfcuL4GOqUBOu9ktWQ4A%2BPw2Hk0zPUlkJ2%2BvxjmsI0Te%2BbROyMlxxu9LZuR7mXC8fwo9k0R3sXO65KbOFAnLgN0Q4%2FHgIvgOLmlnjPToarvvCHp7A58O2c3u%2F9RIs6T6%2BOrflHnBkZ6%2FgTKR3gppJBUmZ9qzGWnxkjIr7VW58ZsVm2scF0T3nbwqwyTUyHjcu4XTEuSjhP1kgSnJ0rusT7a474SdlU%2FJhrYJNVv&X-Amz-Signature=995f7bb13cf1b430c731efe6f058db9b0f8d0617944b6b2793f58e8c55e81d20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3RNMIQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCOAbDAK2%2Bj22LP7dkzpDx12Am7WIKr9kaHWpQE%2BzfRIAIgMVd14Rq9YPGW2vJRYaJ4npeIhPSRhQTJl7TY74tgumwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyD%2FVy4qcb0QOFZ3ircA63b5Fsa%2FGJ9wDkui8dDQ%2F8V0kaaLr8eBX%2Bo1%2B%2BEI1JTK%2F1p8C%2BJ3wvSwsBz%2FNECEjeNTme%2BmC8Dz%2BOGMLoxu%2F3KIvlWSG9Isnzy%2BZRQPnjFQJ6vXzv%2BHuFpIToyxSgvSN1DtJ3F9p6RPdixTi5a6ylc%2BrbCcSFJO%2FH3otavxrpqeCLB5oRODwr8pkTPxuAO2HGeFNpQygxSipMIT56VIchogDYAuk%2FlWrV95be%2B3N8vymr%2F5R9rtBsKOdmts89PWdwZvQJVf2YYQvX1iVmM7SMQ0UZu3T8OxqMS6Mxz4AUkeIMLBsm%2FtZ2mZKnVvXK6Q3X4mjMW6zgjQbtkTO%2BRZrbGQ%2BK8xhYYgcxigB2On5ssNAwfm%2BM3h922afqk822uDDhdXgOuEiA1TWdVFU7OsxgtVlIRr6xtINkXkch0LOtiBKaIQtv1N%2FcE%2BXv5qyvZ1hCq16tYqEF5MQk1j5yL60z6Sc0LcINCdAOYn%2F5D5vcSyyrgVYjAimR619rXB3t6hikvlTMX3BtXEj3dPbo7vWgqM4zSMFN0nJe4rMRl%2F2rzUz771OQ8N%2Fz48DupveJZ4lXKqA2P4JSXZNvblnN2SHWBiuxOOXDBh%2FMwy%2BOKDtiLBKQ3c0eBQ%2FGj4Dn1MMfcuL4GOqUBOu9ktWQ4A%2BPw2Hk0zPUlkJ2%2BvxjmsI0Te%2BbROyMlxxu9LZuR7mXC8fwo9k0R3sXO65KbOFAnLgN0Q4%2FHgIvgOLmlnjPToarvvCHp7A58O2c3u%2F9RIs6T6%2BOrflHnBkZ6%2FgTKR3gppJBUmZ9qzGWnxkjIr7VW58ZsVm2scF0T3nbwqwyTUyHjcu4XTEuSjhP1kgSnJ0rusT7a474SdlU%2FJhrYJNVv&X-Amz-Signature=a5e1492ad6649180735a57f40ca7389583009bbb89c59d2c9d32dc02c6dc9b23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3RNMIQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCOAbDAK2%2Bj22LP7dkzpDx12Am7WIKr9kaHWpQE%2BzfRIAIgMVd14Rq9YPGW2vJRYaJ4npeIhPSRhQTJl7TY74tgumwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyD%2FVy4qcb0QOFZ3ircA63b5Fsa%2FGJ9wDkui8dDQ%2F8V0kaaLr8eBX%2Bo1%2B%2BEI1JTK%2F1p8C%2BJ3wvSwsBz%2FNECEjeNTme%2BmC8Dz%2BOGMLoxu%2F3KIvlWSG9Isnzy%2BZRQPnjFQJ6vXzv%2BHuFpIToyxSgvSN1DtJ3F9p6RPdixTi5a6ylc%2BrbCcSFJO%2FH3otavxrpqeCLB5oRODwr8pkTPxuAO2HGeFNpQygxSipMIT56VIchogDYAuk%2FlWrV95be%2B3N8vymr%2F5R9rtBsKOdmts89PWdwZvQJVf2YYQvX1iVmM7SMQ0UZu3T8OxqMS6Mxz4AUkeIMLBsm%2FtZ2mZKnVvXK6Q3X4mjMW6zgjQbtkTO%2BRZrbGQ%2BK8xhYYgcxigB2On5ssNAwfm%2BM3h922afqk822uDDhdXgOuEiA1TWdVFU7OsxgtVlIRr6xtINkXkch0LOtiBKaIQtv1N%2FcE%2BXv5qyvZ1hCq16tYqEF5MQk1j5yL60z6Sc0LcINCdAOYn%2F5D5vcSyyrgVYjAimR619rXB3t6hikvlTMX3BtXEj3dPbo7vWgqM4zSMFN0nJe4rMRl%2F2rzUz771OQ8N%2Fz48DupveJZ4lXKqA2P4JSXZNvblnN2SHWBiuxOOXDBh%2FMwy%2BOKDtiLBKQ3c0eBQ%2FGj4Dn1MMfcuL4GOqUBOu9ktWQ4A%2BPw2Hk0zPUlkJ2%2BvxjmsI0Te%2BbROyMlxxu9LZuR7mXC8fwo9k0R3sXO65KbOFAnLgN0Q4%2FHgIvgOLmlnjPToarvvCHp7A58O2c3u%2F9RIs6T6%2BOrflHnBkZ6%2FgTKR3gppJBUmZ9qzGWnxkjIr7VW58ZsVm2scF0T3nbwqwyTUyHjcu4XTEuSjhP1kgSnJ0rusT7a474SdlU%2FJhrYJNVv&X-Amz-Signature=3185d460fe9dbb990af33b7bc30b05f92b6c17d8e006e01986c5948c652f8d10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
