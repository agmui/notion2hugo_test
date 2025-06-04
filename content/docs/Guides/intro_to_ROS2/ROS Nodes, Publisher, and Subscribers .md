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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OV7O66%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFqEhoa3cvORIOd%2F58EjRLjMuUfMcGm6iE0y8qVWdMI0AiBCqQZCtG%2B%2Ba0jYbK4q53N1oMzFZno07Yy4cOgF%2FkMD5Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQo6sFh9evujHDS1aKtwDjR1opwTqg3GvVAfZ1pk4xvuH2Dw3xL2JMfuUKQN3%2BiHe7xy4J%2BdQuztFIjs8qdEH9s6aHStA44OqGeLT%2Fzvs7wf052oFa7aYnYAOFWM1svxyfVWexvyT6NYzd3qNv7%2BzgDK3vg%2FWcn5iCbai3N%2FzPDzdddOLTWdEqvW3BCGpr6AiZsQ%2BWaMKKrS%2Bpj4RnReeEqK7LTTZqSNiBQIMZvDTqQ2B1yj2za8H0fLtCSsxDPeDiWbDF8bkzVnUI18%2FEelgQK%2FMtkEkkKKt94aFaaUAHEVGz2Iy6zItoxEJA1S72yPI1oiKiqoQi8TXUfq46bDuJfHXaAegd4sAs5XMvz7aLUA405UNX1gkjnbdLXQPtL%2FumsL7Xdbh1VD6RfeWlQdFQm61sJnh04ys6G8k%2BxNbfYehmBQeu%2Bur4mC4I8C9BS2ogNVF9G75dRyW9ngbeM3ymmNIXAXPLl8IJHzO8BuwQQGkrzo3aRn5H%2FvSCpufkU07lo%2FYlaWuxlGiGupJDmU4Rk0sv8unEfn87sIRTeLH9kVRCOTrALr7ZJCd1V8U5OQvbNknNSaAN4gh7ivXcfwlOMslAil18vY7mfHMO6G27A6gcGNspgzUeeUh9PMh0TuK7AJxfPLGylTMGs0wj4CBwgY6pgGIpHvmQNiPOD%2BZzU%2BDJqGgAUk%2BrcizKMyMxR8BykJYwIEW1HR0VJCDlgWsUvSvkm9%2FZBbC2%2B8P1vdy9NYdgQaDjZV%2BnlhNe%2B%2B3eSR8hl8qqMr3c4ZwpjWThHdhcmJMUD73DpkqbztHT2SZMbyG9x57v5EcIev2Elx3ymVJiZ59SER%2F2DXEPbfjZ493A34iOWgSd1KY4HHbpbWBflwx4koEldzGB9be&X-Amz-Signature=25d5c82b57ca54b4e61ea84d43767129d109e934165f71922de6b84d6e7183df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OV7O66%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFqEhoa3cvORIOd%2F58EjRLjMuUfMcGm6iE0y8qVWdMI0AiBCqQZCtG%2B%2Ba0jYbK4q53N1oMzFZno07Yy4cOgF%2FkMD5Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQo6sFh9evujHDS1aKtwDjR1opwTqg3GvVAfZ1pk4xvuH2Dw3xL2JMfuUKQN3%2BiHe7xy4J%2BdQuztFIjs8qdEH9s6aHStA44OqGeLT%2Fzvs7wf052oFa7aYnYAOFWM1svxyfVWexvyT6NYzd3qNv7%2BzgDK3vg%2FWcn5iCbai3N%2FzPDzdddOLTWdEqvW3BCGpr6AiZsQ%2BWaMKKrS%2Bpj4RnReeEqK7LTTZqSNiBQIMZvDTqQ2B1yj2za8H0fLtCSsxDPeDiWbDF8bkzVnUI18%2FEelgQK%2FMtkEkkKKt94aFaaUAHEVGz2Iy6zItoxEJA1S72yPI1oiKiqoQi8TXUfq46bDuJfHXaAegd4sAs5XMvz7aLUA405UNX1gkjnbdLXQPtL%2FumsL7Xdbh1VD6RfeWlQdFQm61sJnh04ys6G8k%2BxNbfYehmBQeu%2Bur4mC4I8C9BS2ogNVF9G75dRyW9ngbeM3ymmNIXAXPLl8IJHzO8BuwQQGkrzo3aRn5H%2FvSCpufkU07lo%2FYlaWuxlGiGupJDmU4Rk0sv8unEfn87sIRTeLH9kVRCOTrALr7ZJCd1V8U5OQvbNknNSaAN4gh7ivXcfwlOMslAil18vY7mfHMO6G27A6gcGNspgzUeeUh9PMh0TuK7AJxfPLGylTMGs0wj4CBwgY6pgGIpHvmQNiPOD%2BZzU%2BDJqGgAUk%2BrcizKMyMxR8BykJYwIEW1HR0VJCDlgWsUvSvkm9%2FZBbC2%2B8P1vdy9NYdgQaDjZV%2BnlhNe%2B%2B3eSR8hl8qqMr3c4ZwpjWThHdhcmJMUD73DpkqbztHT2SZMbyG9x57v5EcIev2Elx3ymVJiZ59SER%2F2DXEPbfjZ493A34iOWgSd1KY4HHbpbWBflwx4koEldzGB9be&X-Amz-Signature=785c317570af1cb734958405cdcb1ff2397b5f860d4c5682311f3556ecbcbca2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OV7O66%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFqEhoa3cvORIOd%2F58EjRLjMuUfMcGm6iE0y8qVWdMI0AiBCqQZCtG%2B%2Ba0jYbK4q53N1oMzFZno07Yy4cOgF%2FkMD5Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQo6sFh9evujHDS1aKtwDjR1opwTqg3GvVAfZ1pk4xvuH2Dw3xL2JMfuUKQN3%2BiHe7xy4J%2BdQuztFIjs8qdEH9s6aHStA44OqGeLT%2Fzvs7wf052oFa7aYnYAOFWM1svxyfVWexvyT6NYzd3qNv7%2BzgDK3vg%2FWcn5iCbai3N%2FzPDzdddOLTWdEqvW3BCGpr6AiZsQ%2BWaMKKrS%2Bpj4RnReeEqK7LTTZqSNiBQIMZvDTqQ2B1yj2za8H0fLtCSsxDPeDiWbDF8bkzVnUI18%2FEelgQK%2FMtkEkkKKt94aFaaUAHEVGz2Iy6zItoxEJA1S72yPI1oiKiqoQi8TXUfq46bDuJfHXaAegd4sAs5XMvz7aLUA405UNX1gkjnbdLXQPtL%2FumsL7Xdbh1VD6RfeWlQdFQm61sJnh04ys6G8k%2BxNbfYehmBQeu%2Bur4mC4I8C9BS2ogNVF9G75dRyW9ngbeM3ymmNIXAXPLl8IJHzO8BuwQQGkrzo3aRn5H%2FvSCpufkU07lo%2FYlaWuxlGiGupJDmU4Rk0sv8unEfn87sIRTeLH9kVRCOTrALr7ZJCd1V8U5OQvbNknNSaAN4gh7ivXcfwlOMslAil18vY7mfHMO6G27A6gcGNspgzUeeUh9PMh0TuK7AJxfPLGylTMGs0wj4CBwgY6pgGIpHvmQNiPOD%2BZzU%2BDJqGgAUk%2BrcizKMyMxR8BykJYwIEW1HR0VJCDlgWsUvSvkm9%2FZBbC2%2B8P1vdy9NYdgQaDjZV%2BnlhNe%2B%2B3eSR8hl8qqMr3c4ZwpjWThHdhcmJMUD73DpkqbztHT2SZMbyG9x57v5EcIev2Elx3ymVJiZ59SER%2F2DXEPbfjZ493A34iOWgSd1KY4HHbpbWBflwx4koEldzGB9be&X-Amz-Signature=4ee4ff5784a48af2f0dc236667a532c711a10da3b34c2008bafd9c985479657c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OV7O66%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFqEhoa3cvORIOd%2F58EjRLjMuUfMcGm6iE0y8qVWdMI0AiBCqQZCtG%2B%2Ba0jYbK4q53N1oMzFZno07Yy4cOgF%2FkMD5Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQo6sFh9evujHDS1aKtwDjR1opwTqg3GvVAfZ1pk4xvuH2Dw3xL2JMfuUKQN3%2BiHe7xy4J%2BdQuztFIjs8qdEH9s6aHStA44OqGeLT%2Fzvs7wf052oFa7aYnYAOFWM1svxyfVWexvyT6NYzd3qNv7%2BzgDK3vg%2FWcn5iCbai3N%2FzPDzdddOLTWdEqvW3BCGpr6AiZsQ%2BWaMKKrS%2Bpj4RnReeEqK7LTTZqSNiBQIMZvDTqQ2B1yj2za8H0fLtCSsxDPeDiWbDF8bkzVnUI18%2FEelgQK%2FMtkEkkKKt94aFaaUAHEVGz2Iy6zItoxEJA1S72yPI1oiKiqoQi8TXUfq46bDuJfHXaAegd4sAs5XMvz7aLUA405UNX1gkjnbdLXQPtL%2FumsL7Xdbh1VD6RfeWlQdFQm61sJnh04ys6G8k%2BxNbfYehmBQeu%2Bur4mC4I8C9BS2ogNVF9G75dRyW9ngbeM3ymmNIXAXPLl8IJHzO8BuwQQGkrzo3aRn5H%2FvSCpufkU07lo%2FYlaWuxlGiGupJDmU4Rk0sv8unEfn87sIRTeLH9kVRCOTrALr7ZJCd1V8U5OQvbNknNSaAN4gh7ivXcfwlOMslAil18vY7mfHMO6G27A6gcGNspgzUeeUh9PMh0TuK7AJxfPLGylTMGs0wj4CBwgY6pgGIpHvmQNiPOD%2BZzU%2BDJqGgAUk%2BrcizKMyMxR8BykJYwIEW1HR0VJCDlgWsUvSvkm9%2FZBbC2%2B8P1vdy9NYdgQaDjZV%2BnlhNe%2B%2B3eSR8hl8qqMr3c4ZwpjWThHdhcmJMUD73DpkqbztHT2SZMbyG9x57v5EcIev2Elx3ymVJiZ59SER%2F2DXEPbfjZ493A34iOWgSd1KY4HHbpbWBflwx4koEldzGB9be&X-Amz-Signature=0de39e984c1a61ad0dacfee9e2627dfe3cbe62c11266f7a70c6c7025a354bece&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OV7O66%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFqEhoa3cvORIOd%2F58EjRLjMuUfMcGm6iE0y8qVWdMI0AiBCqQZCtG%2B%2Ba0jYbK4q53N1oMzFZno07Yy4cOgF%2FkMD5Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQo6sFh9evujHDS1aKtwDjR1opwTqg3GvVAfZ1pk4xvuH2Dw3xL2JMfuUKQN3%2BiHe7xy4J%2BdQuztFIjs8qdEH9s6aHStA44OqGeLT%2Fzvs7wf052oFa7aYnYAOFWM1svxyfVWexvyT6NYzd3qNv7%2BzgDK3vg%2FWcn5iCbai3N%2FzPDzdddOLTWdEqvW3BCGpr6AiZsQ%2BWaMKKrS%2Bpj4RnReeEqK7LTTZqSNiBQIMZvDTqQ2B1yj2za8H0fLtCSsxDPeDiWbDF8bkzVnUI18%2FEelgQK%2FMtkEkkKKt94aFaaUAHEVGz2Iy6zItoxEJA1S72yPI1oiKiqoQi8TXUfq46bDuJfHXaAegd4sAs5XMvz7aLUA405UNX1gkjnbdLXQPtL%2FumsL7Xdbh1VD6RfeWlQdFQm61sJnh04ys6G8k%2BxNbfYehmBQeu%2Bur4mC4I8C9BS2ogNVF9G75dRyW9ngbeM3ymmNIXAXPLl8IJHzO8BuwQQGkrzo3aRn5H%2FvSCpufkU07lo%2FYlaWuxlGiGupJDmU4Rk0sv8unEfn87sIRTeLH9kVRCOTrALr7ZJCd1V8U5OQvbNknNSaAN4gh7ivXcfwlOMslAil18vY7mfHMO6G27A6gcGNspgzUeeUh9PMh0TuK7AJxfPLGylTMGs0wj4CBwgY6pgGIpHvmQNiPOD%2BZzU%2BDJqGgAUk%2BrcizKMyMxR8BykJYwIEW1HR0VJCDlgWsUvSvkm9%2FZBbC2%2B8P1vdy9NYdgQaDjZV%2BnlhNe%2B%2B3eSR8hl8qqMr3c4ZwpjWThHdhcmJMUD73DpkqbztHT2SZMbyG9x57v5EcIev2Elx3ymVJiZ59SER%2F2DXEPbfjZ493A34iOWgSd1KY4HHbpbWBflwx4koEldzGB9be&X-Amz-Signature=8267ed945044655a54295f8f19cbdfb23a4ae3986e6a6f95943c4b0ad361d846&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OV7O66%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFqEhoa3cvORIOd%2F58EjRLjMuUfMcGm6iE0y8qVWdMI0AiBCqQZCtG%2B%2Ba0jYbK4q53N1oMzFZno07Yy4cOgF%2FkMD5Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQo6sFh9evujHDS1aKtwDjR1opwTqg3GvVAfZ1pk4xvuH2Dw3xL2JMfuUKQN3%2BiHe7xy4J%2BdQuztFIjs8qdEH9s6aHStA44OqGeLT%2Fzvs7wf052oFa7aYnYAOFWM1svxyfVWexvyT6NYzd3qNv7%2BzgDK3vg%2FWcn5iCbai3N%2FzPDzdddOLTWdEqvW3BCGpr6AiZsQ%2BWaMKKrS%2Bpj4RnReeEqK7LTTZqSNiBQIMZvDTqQ2B1yj2za8H0fLtCSsxDPeDiWbDF8bkzVnUI18%2FEelgQK%2FMtkEkkKKt94aFaaUAHEVGz2Iy6zItoxEJA1S72yPI1oiKiqoQi8TXUfq46bDuJfHXaAegd4sAs5XMvz7aLUA405UNX1gkjnbdLXQPtL%2FumsL7Xdbh1VD6RfeWlQdFQm61sJnh04ys6G8k%2BxNbfYehmBQeu%2Bur4mC4I8C9BS2ogNVF9G75dRyW9ngbeM3ymmNIXAXPLl8IJHzO8BuwQQGkrzo3aRn5H%2FvSCpufkU07lo%2FYlaWuxlGiGupJDmU4Rk0sv8unEfn87sIRTeLH9kVRCOTrALr7ZJCd1V8U5OQvbNknNSaAN4gh7ivXcfwlOMslAil18vY7mfHMO6G27A6gcGNspgzUeeUh9PMh0TuK7AJxfPLGylTMGs0wj4CBwgY6pgGIpHvmQNiPOD%2BZzU%2BDJqGgAUk%2BrcizKMyMxR8BykJYwIEW1HR0VJCDlgWsUvSvkm9%2FZBbC2%2B8P1vdy9NYdgQaDjZV%2BnlhNe%2B%2B3eSR8hl8qqMr3c4ZwpjWThHdhcmJMUD73DpkqbztHT2SZMbyG9x57v5EcIev2Elx3ymVJiZ59SER%2F2DXEPbfjZ493A34iOWgSd1KY4HHbpbWBflwx4koEldzGB9be&X-Amz-Signature=c7150a3461881c46dfd89ec89cf8f810e1b2ca7cfc6f5dca162a92a61479a79a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OV7O66%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFqEhoa3cvORIOd%2F58EjRLjMuUfMcGm6iE0y8qVWdMI0AiBCqQZCtG%2B%2Ba0jYbK4q53N1oMzFZno07Yy4cOgF%2FkMD5Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQo6sFh9evujHDS1aKtwDjR1opwTqg3GvVAfZ1pk4xvuH2Dw3xL2JMfuUKQN3%2BiHe7xy4J%2BdQuztFIjs8qdEH9s6aHStA44OqGeLT%2Fzvs7wf052oFa7aYnYAOFWM1svxyfVWexvyT6NYzd3qNv7%2BzgDK3vg%2FWcn5iCbai3N%2FzPDzdddOLTWdEqvW3BCGpr6AiZsQ%2BWaMKKrS%2Bpj4RnReeEqK7LTTZqSNiBQIMZvDTqQ2B1yj2za8H0fLtCSsxDPeDiWbDF8bkzVnUI18%2FEelgQK%2FMtkEkkKKt94aFaaUAHEVGz2Iy6zItoxEJA1S72yPI1oiKiqoQi8TXUfq46bDuJfHXaAegd4sAs5XMvz7aLUA405UNX1gkjnbdLXQPtL%2FumsL7Xdbh1VD6RfeWlQdFQm61sJnh04ys6G8k%2BxNbfYehmBQeu%2Bur4mC4I8C9BS2ogNVF9G75dRyW9ngbeM3ymmNIXAXPLl8IJHzO8BuwQQGkrzo3aRn5H%2FvSCpufkU07lo%2FYlaWuxlGiGupJDmU4Rk0sv8unEfn87sIRTeLH9kVRCOTrALr7ZJCd1V8U5OQvbNknNSaAN4gh7ivXcfwlOMslAil18vY7mfHMO6G27A6gcGNspgzUeeUh9PMh0TuK7AJxfPLGylTMGs0wj4CBwgY6pgGIpHvmQNiPOD%2BZzU%2BDJqGgAUk%2BrcizKMyMxR8BykJYwIEW1HR0VJCDlgWsUvSvkm9%2FZBbC2%2B8P1vdy9NYdgQaDjZV%2BnlhNe%2B%2B3eSR8hl8qqMr3c4ZwpjWThHdhcmJMUD73DpkqbztHT2SZMbyG9x57v5EcIev2Elx3ymVJiZ59SER%2F2DXEPbfjZ493A34iOWgSd1KY4HHbpbWBflwx4koEldzGB9be&X-Amz-Signature=a7bb3653a049fc2c4b70c064220e8020e2665821385dd383330c8097fdc063f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OV7O66%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFqEhoa3cvORIOd%2F58EjRLjMuUfMcGm6iE0y8qVWdMI0AiBCqQZCtG%2B%2Ba0jYbK4q53N1oMzFZno07Yy4cOgF%2FkMD5Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMQo6sFh9evujHDS1aKtwDjR1opwTqg3GvVAfZ1pk4xvuH2Dw3xL2JMfuUKQN3%2BiHe7xy4J%2BdQuztFIjs8qdEH9s6aHStA44OqGeLT%2Fzvs7wf052oFa7aYnYAOFWM1svxyfVWexvyT6NYzd3qNv7%2BzgDK3vg%2FWcn5iCbai3N%2FzPDzdddOLTWdEqvW3BCGpr6AiZsQ%2BWaMKKrS%2Bpj4RnReeEqK7LTTZqSNiBQIMZvDTqQ2B1yj2za8H0fLtCSsxDPeDiWbDF8bkzVnUI18%2FEelgQK%2FMtkEkkKKt94aFaaUAHEVGz2Iy6zItoxEJA1S72yPI1oiKiqoQi8TXUfq46bDuJfHXaAegd4sAs5XMvz7aLUA405UNX1gkjnbdLXQPtL%2FumsL7Xdbh1VD6RfeWlQdFQm61sJnh04ys6G8k%2BxNbfYehmBQeu%2Bur4mC4I8C9BS2ogNVF9G75dRyW9ngbeM3ymmNIXAXPLl8IJHzO8BuwQQGkrzo3aRn5H%2FvSCpufkU07lo%2FYlaWuxlGiGupJDmU4Rk0sv8unEfn87sIRTeLH9kVRCOTrALr7ZJCd1V8U5OQvbNknNSaAN4gh7ivXcfwlOMslAil18vY7mfHMO6G27A6gcGNspgzUeeUh9PMh0TuK7AJxfPLGylTMGs0wj4CBwgY6pgGIpHvmQNiPOD%2BZzU%2BDJqGgAUk%2BrcizKMyMxR8BykJYwIEW1HR0VJCDlgWsUvSvkm9%2FZBbC2%2B8P1vdy9NYdgQaDjZV%2BnlhNe%2B%2B3eSR8hl8qqMr3c4ZwpjWThHdhcmJMUD73DpkqbztHT2SZMbyG9x57v5EcIev2Elx3ymVJiZ59SER%2F2DXEPbfjZ493A34iOWgSd1KY4HHbpbWBflwx4koEldzGB9be&X-Amz-Signature=35fa1e8239f0f47d9fc5fe946f93f10142ec4bf0042f420b67fc6391342be343&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
