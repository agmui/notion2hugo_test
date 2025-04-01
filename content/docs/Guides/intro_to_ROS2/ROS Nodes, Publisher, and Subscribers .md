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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FSSFA3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAbPSowOR0v78VfYMUEkC5t4NWy2g5pS%2BBBTwpNsqRAmAiEAociMzHUXiLotjQEGSSu0SdAQh4aOB9ANrXztMB2AbEcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsf7RaVjIEj5Xch1ircA347MG4MgIoTxTh8eUOlhYYZe%2F6DH8cRKN7qAzFw1TylIDLfMbKoONXCSBSDDmklBoMDQHrGp1euYhpDEhxGNLerRAQqEaHqSlirKuRMjJ69oVMLaENo7YnhGtqHt23YeaNyA2761YBGSRfRiubD2KAAngUIRa0gszViTO71wvpM7NMbnih9qZriyfgON0qILbaWawHVoCvKuiFBToCbQ88OpwPdUr1%2BGnbkgEl7NP0vMUisBlEmEl%2BLytjgW8sKU8InbrzcjtVgOrpW6bqQv%2BgJXN%2F%2FdKInSsGz0mb0C59ZcpldPymDJ7idNe9tWrSFYjK6PXkdEfPwjbAwK4pMGN1qdUlEUHyG4%2BikPX5wkIBwydUj9wu4tAnBYvc%2FQVYpTn4JDQubN8kW9faR7bs80OpeWWoh0601S5ehI7tYeqtgP05EQ6e9tgfiyNMnVe7Z5VbxYhva4r9XVcJZ21kQCLvdqJRsO1F%2F0oUJxLXPl9fesazr%2FvK8Tz%2FSw9t61jElPCSkQjwfoPE0N2JB4jzCRywRUguzGqPBgB%2BqzDqA4e02mKIb06h%2FRqYq%2FrHXh5LRYSEfC%2FyrNbfEhO9jCzImINu4JW4apHCrlub17cUpiWdCjyxf8SCeOHijgMzWMJeOsb8GOqUBBG4Svclzo%2FYjCD5pyBirc8xjhXUqfGaGUuYIQMjAhaFRZZD3H1MSwNEcH7zjy2y1yNb1Enc7p9CEFQFNa19EMFc2oZUMfACRnan2Pkmlt1%2B9P56o4H%2BOfygT7Fs2l%2B7dNk4RJNtUgG9hu5vanRnQPdLt9%2FOqNIEfVcsZedvnERz9DIGUPdEp1LoGLWPvW1WM9IJmjk7bCy%2FZl06nhcMJ9fAIU%2Bzk&X-Amz-Signature=0cc7aba17026ee27c82543cefaa3a52b5db9c52ef10f9b27db54e091330e5b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FSSFA3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAbPSowOR0v78VfYMUEkC5t4NWy2g5pS%2BBBTwpNsqRAmAiEAociMzHUXiLotjQEGSSu0SdAQh4aOB9ANrXztMB2AbEcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsf7RaVjIEj5Xch1ircA347MG4MgIoTxTh8eUOlhYYZe%2F6DH8cRKN7qAzFw1TylIDLfMbKoONXCSBSDDmklBoMDQHrGp1euYhpDEhxGNLerRAQqEaHqSlirKuRMjJ69oVMLaENo7YnhGtqHt23YeaNyA2761YBGSRfRiubD2KAAngUIRa0gszViTO71wvpM7NMbnih9qZriyfgON0qILbaWawHVoCvKuiFBToCbQ88OpwPdUr1%2BGnbkgEl7NP0vMUisBlEmEl%2BLytjgW8sKU8InbrzcjtVgOrpW6bqQv%2BgJXN%2F%2FdKInSsGz0mb0C59ZcpldPymDJ7idNe9tWrSFYjK6PXkdEfPwjbAwK4pMGN1qdUlEUHyG4%2BikPX5wkIBwydUj9wu4tAnBYvc%2FQVYpTn4JDQubN8kW9faR7bs80OpeWWoh0601S5ehI7tYeqtgP05EQ6e9tgfiyNMnVe7Z5VbxYhva4r9XVcJZ21kQCLvdqJRsO1F%2F0oUJxLXPl9fesazr%2FvK8Tz%2FSw9t61jElPCSkQjwfoPE0N2JB4jzCRywRUguzGqPBgB%2BqzDqA4e02mKIb06h%2FRqYq%2FrHXh5LRYSEfC%2FyrNbfEhO9jCzImINu4JW4apHCrlub17cUpiWdCjyxf8SCeOHijgMzWMJeOsb8GOqUBBG4Svclzo%2FYjCD5pyBirc8xjhXUqfGaGUuYIQMjAhaFRZZD3H1MSwNEcH7zjy2y1yNb1Enc7p9CEFQFNa19EMFc2oZUMfACRnan2Pkmlt1%2B9P56o4H%2BOfygT7Fs2l%2B7dNk4RJNtUgG9hu5vanRnQPdLt9%2FOqNIEfVcsZedvnERz9DIGUPdEp1LoGLWPvW1WM9IJmjk7bCy%2FZl06nhcMJ9fAIU%2Bzk&X-Amz-Signature=82f8f6789f2888315a0ca97ee3af7a6f4df18ce41793fac31f4aed16832127a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FSSFA3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAbPSowOR0v78VfYMUEkC5t4NWy2g5pS%2BBBTwpNsqRAmAiEAociMzHUXiLotjQEGSSu0SdAQh4aOB9ANrXztMB2AbEcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsf7RaVjIEj5Xch1ircA347MG4MgIoTxTh8eUOlhYYZe%2F6DH8cRKN7qAzFw1TylIDLfMbKoONXCSBSDDmklBoMDQHrGp1euYhpDEhxGNLerRAQqEaHqSlirKuRMjJ69oVMLaENo7YnhGtqHt23YeaNyA2761YBGSRfRiubD2KAAngUIRa0gszViTO71wvpM7NMbnih9qZriyfgON0qILbaWawHVoCvKuiFBToCbQ88OpwPdUr1%2BGnbkgEl7NP0vMUisBlEmEl%2BLytjgW8sKU8InbrzcjtVgOrpW6bqQv%2BgJXN%2F%2FdKInSsGz0mb0C59ZcpldPymDJ7idNe9tWrSFYjK6PXkdEfPwjbAwK4pMGN1qdUlEUHyG4%2BikPX5wkIBwydUj9wu4tAnBYvc%2FQVYpTn4JDQubN8kW9faR7bs80OpeWWoh0601S5ehI7tYeqtgP05EQ6e9tgfiyNMnVe7Z5VbxYhva4r9XVcJZ21kQCLvdqJRsO1F%2F0oUJxLXPl9fesazr%2FvK8Tz%2FSw9t61jElPCSkQjwfoPE0N2JB4jzCRywRUguzGqPBgB%2BqzDqA4e02mKIb06h%2FRqYq%2FrHXh5LRYSEfC%2FyrNbfEhO9jCzImINu4JW4apHCrlub17cUpiWdCjyxf8SCeOHijgMzWMJeOsb8GOqUBBG4Svclzo%2FYjCD5pyBirc8xjhXUqfGaGUuYIQMjAhaFRZZD3H1MSwNEcH7zjy2y1yNb1Enc7p9CEFQFNa19EMFc2oZUMfACRnan2Pkmlt1%2B9P56o4H%2BOfygT7Fs2l%2B7dNk4RJNtUgG9hu5vanRnQPdLt9%2FOqNIEfVcsZedvnERz9DIGUPdEp1LoGLWPvW1WM9IJmjk7bCy%2FZl06nhcMJ9fAIU%2Bzk&X-Amz-Signature=bacd8a83eac797d79a91ed0f65d714e6ae552691582edb4856684ef3f4a55bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FSSFA3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAbPSowOR0v78VfYMUEkC5t4NWy2g5pS%2BBBTwpNsqRAmAiEAociMzHUXiLotjQEGSSu0SdAQh4aOB9ANrXztMB2AbEcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsf7RaVjIEj5Xch1ircA347MG4MgIoTxTh8eUOlhYYZe%2F6DH8cRKN7qAzFw1TylIDLfMbKoONXCSBSDDmklBoMDQHrGp1euYhpDEhxGNLerRAQqEaHqSlirKuRMjJ69oVMLaENo7YnhGtqHt23YeaNyA2761YBGSRfRiubD2KAAngUIRa0gszViTO71wvpM7NMbnih9qZriyfgON0qILbaWawHVoCvKuiFBToCbQ88OpwPdUr1%2BGnbkgEl7NP0vMUisBlEmEl%2BLytjgW8sKU8InbrzcjtVgOrpW6bqQv%2BgJXN%2F%2FdKInSsGz0mb0C59ZcpldPymDJ7idNe9tWrSFYjK6PXkdEfPwjbAwK4pMGN1qdUlEUHyG4%2BikPX5wkIBwydUj9wu4tAnBYvc%2FQVYpTn4JDQubN8kW9faR7bs80OpeWWoh0601S5ehI7tYeqtgP05EQ6e9tgfiyNMnVe7Z5VbxYhva4r9XVcJZ21kQCLvdqJRsO1F%2F0oUJxLXPl9fesazr%2FvK8Tz%2FSw9t61jElPCSkQjwfoPE0N2JB4jzCRywRUguzGqPBgB%2BqzDqA4e02mKIb06h%2FRqYq%2FrHXh5LRYSEfC%2FyrNbfEhO9jCzImINu4JW4apHCrlub17cUpiWdCjyxf8SCeOHijgMzWMJeOsb8GOqUBBG4Svclzo%2FYjCD5pyBirc8xjhXUqfGaGUuYIQMjAhaFRZZD3H1MSwNEcH7zjy2y1yNb1Enc7p9CEFQFNa19EMFc2oZUMfACRnan2Pkmlt1%2B9P56o4H%2BOfygT7Fs2l%2B7dNk4RJNtUgG9hu5vanRnQPdLt9%2FOqNIEfVcsZedvnERz9DIGUPdEp1LoGLWPvW1WM9IJmjk7bCy%2FZl06nhcMJ9fAIU%2Bzk&X-Amz-Signature=b5e4e2d5f01dbe78571a30583f9925acbc132e20d675255557e1665ee3dca236&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FSSFA3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAbPSowOR0v78VfYMUEkC5t4NWy2g5pS%2BBBTwpNsqRAmAiEAociMzHUXiLotjQEGSSu0SdAQh4aOB9ANrXztMB2AbEcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsf7RaVjIEj5Xch1ircA347MG4MgIoTxTh8eUOlhYYZe%2F6DH8cRKN7qAzFw1TylIDLfMbKoONXCSBSDDmklBoMDQHrGp1euYhpDEhxGNLerRAQqEaHqSlirKuRMjJ69oVMLaENo7YnhGtqHt23YeaNyA2761YBGSRfRiubD2KAAngUIRa0gszViTO71wvpM7NMbnih9qZriyfgON0qILbaWawHVoCvKuiFBToCbQ88OpwPdUr1%2BGnbkgEl7NP0vMUisBlEmEl%2BLytjgW8sKU8InbrzcjtVgOrpW6bqQv%2BgJXN%2F%2FdKInSsGz0mb0C59ZcpldPymDJ7idNe9tWrSFYjK6PXkdEfPwjbAwK4pMGN1qdUlEUHyG4%2BikPX5wkIBwydUj9wu4tAnBYvc%2FQVYpTn4JDQubN8kW9faR7bs80OpeWWoh0601S5ehI7tYeqtgP05EQ6e9tgfiyNMnVe7Z5VbxYhva4r9XVcJZ21kQCLvdqJRsO1F%2F0oUJxLXPl9fesazr%2FvK8Tz%2FSw9t61jElPCSkQjwfoPE0N2JB4jzCRywRUguzGqPBgB%2BqzDqA4e02mKIb06h%2FRqYq%2FrHXh5LRYSEfC%2FyrNbfEhO9jCzImINu4JW4apHCrlub17cUpiWdCjyxf8SCeOHijgMzWMJeOsb8GOqUBBG4Svclzo%2FYjCD5pyBirc8xjhXUqfGaGUuYIQMjAhaFRZZD3H1MSwNEcH7zjy2y1yNb1Enc7p9CEFQFNa19EMFc2oZUMfACRnan2Pkmlt1%2B9P56o4H%2BOfygT7Fs2l%2B7dNk4RJNtUgG9hu5vanRnQPdLt9%2FOqNIEfVcsZedvnERz9DIGUPdEp1LoGLWPvW1WM9IJmjk7bCy%2FZl06nhcMJ9fAIU%2Bzk&X-Amz-Signature=aa77da63247103747f6e9c42debbeeffd419c4b407fa2544eb3c7d0a192431a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FSSFA3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAbPSowOR0v78VfYMUEkC5t4NWy2g5pS%2BBBTwpNsqRAmAiEAociMzHUXiLotjQEGSSu0SdAQh4aOB9ANrXztMB2AbEcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsf7RaVjIEj5Xch1ircA347MG4MgIoTxTh8eUOlhYYZe%2F6DH8cRKN7qAzFw1TylIDLfMbKoONXCSBSDDmklBoMDQHrGp1euYhpDEhxGNLerRAQqEaHqSlirKuRMjJ69oVMLaENo7YnhGtqHt23YeaNyA2761YBGSRfRiubD2KAAngUIRa0gszViTO71wvpM7NMbnih9qZriyfgON0qILbaWawHVoCvKuiFBToCbQ88OpwPdUr1%2BGnbkgEl7NP0vMUisBlEmEl%2BLytjgW8sKU8InbrzcjtVgOrpW6bqQv%2BgJXN%2F%2FdKInSsGz0mb0C59ZcpldPymDJ7idNe9tWrSFYjK6PXkdEfPwjbAwK4pMGN1qdUlEUHyG4%2BikPX5wkIBwydUj9wu4tAnBYvc%2FQVYpTn4JDQubN8kW9faR7bs80OpeWWoh0601S5ehI7tYeqtgP05EQ6e9tgfiyNMnVe7Z5VbxYhva4r9XVcJZ21kQCLvdqJRsO1F%2F0oUJxLXPl9fesazr%2FvK8Tz%2FSw9t61jElPCSkQjwfoPE0N2JB4jzCRywRUguzGqPBgB%2BqzDqA4e02mKIb06h%2FRqYq%2FrHXh5LRYSEfC%2FyrNbfEhO9jCzImINu4JW4apHCrlub17cUpiWdCjyxf8SCeOHijgMzWMJeOsb8GOqUBBG4Svclzo%2FYjCD5pyBirc8xjhXUqfGaGUuYIQMjAhaFRZZD3H1MSwNEcH7zjy2y1yNb1Enc7p9CEFQFNa19EMFc2oZUMfACRnan2Pkmlt1%2B9P56o4H%2BOfygT7Fs2l%2B7dNk4RJNtUgG9hu5vanRnQPdLt9%2FOqNIEfVcsZedvnERz9DIGUPdEp1LoGLWPvW1WM9IJmjk7bCy%2FZl06nhcMJ9fAIU%2Bzk&X-Amz-Signature=34bc2b9784d7326be4fd778ae1d54a9e55f8df723ba74c1e4e609e34db53ab14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FSSFA3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAbPSowOR0v78VfYMUEkC5t4NWy2g5pS%2BBBTwpNsqRAmAiEAociMzHUXiLotjQEGSSu0SdAQh4aOB9ANrXztMB2AbEcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsf7RaVjIEj5Xch1ircA347MG4MgIoTxTh8eUOlhYYZe%2F6DH8cRKN7qAzFw1TylIDLfMbKoONXCSBSDDmklBoMDQHrGp1euYhpDEhxGNLerRAQqEaHqSlirKuRMjJ69oVMLaENo7YnhGtqHt23YeaNyA2761YBGSRfRiubD2KAAngUIRa0gszViTO71wvpM7NMbnih9qZriyfgON0qILbaWawHVoCvKuiFBToCbQ88OpwPdUr1%2BGnbkgEl7NP0vMUisBlEmEl%2BLytjgW8sKU8InbrzcjtVgOrpW6bqQv%2BgJXN%2F%2FdKInSsGz0mb0C59ZcpldPymDJ7idNe9tWrSFYjK6PXkdEfPwjbAwK4pMGN1qdUlEUHyG4%2BikPX5wkIBwydUj9wu4tAnBYvc%2FQVYpTn4JDQubN8kW9faR7bs80OpeWWoh0601S5ehI7tYeqtgP05EQ6e9tgfiyNMnVe7Z5VbxYhva4r9XVcJZ21kQCLvdqJRsO1F%2F0oUJxLXPl9fesazr%2FvK8Tz%2FSw9t61jElPCSkQjwfoPE0N2JB4jzCRywRUguzGqPBgB%2BqzDqA4e02mKIb06h%2FRqYq%2FrHXh5LRYSEfC%2FyrNbfEhO9jCzImINu4JW4apHCrlub17cUpiWdCjyxf8SCeOHijgMzWMJeOsb8GOqUBBG4Svclzo%2FYjCD5pyBirc8xjhXUqfGaGUuYIQMjAhaFRZZD3H1MSwNEcH7zjy2y1yNb1Enc7p9CEFQFNa19EMFc2oZUMfACRnan2Pkmlt1%2B9P56o4H%2BOfygT7Fs2l%2B7dNk4RJNtUgG9hu5vanRnQPdLt9%2FOqNIEfVcsZedvnERz9DIGUPdEp1LoGLWPvW1WM9IJmjk7bCy%2FZl06nhcMJ9fAIU%2Bzk&X-Amz-Signature=bfd218cfdd0f13c8b3ab05f578ba97c53de08edc76aab4533db955cea1bd21ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FSSFA3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAbPSowOR0v78VfYMUEkC5t4NWy2g5pS%2BBBTwpNsqRAmAiEAociMzHUXiLotjQEGSSu0SdAQh4aOB9ANrXztMB2AbEcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsf7RaVjIEj5Xch1ircA347MG4MgIoTxTh8eUOlhYYZe%2F6DH8cRKN7qAzFw1TylIDLfMbKoONXCSBSDDmklBoMDQHrGp1euYhpDEhxGNLerRAQqEaHqSlirKuRMjJ69oVMLaENo7YnhGtqHt23YeaNyA2761YBGSRfRiubD2KAAngUIRa0gszViTO71wvpM7NMbnih9qZriyfgON0qILbaWawHVoCvKuiFBToCbQ88OpwPdUr1%2BGnbkgEl7NP0vMUisBlEmEl%2BLytjgW8sKU8InbrzcjtVgOrpW6bqQv%2BgJXN%2F%2FdKInSsGz0mb0C59ZcpldPymDJ7idNe9tWrSFYjK6PXkdEfPwjbAwK4pMGN1qdUlEUHyG4%2BikPX5wkIBwydUj9wu4tAnBYvc%2FQVYpTn4JDQubN8kW9faR7bs80OpeWWoh0601S5ehI7tYeqtgP05EQ6e9tgfiyNMnVe7Z5VbxYhva4r9XVcJZ21kQCLvdqJRsO1F%2F0oUJxLXPl9fesazr%2FvK8Tz%2FSw9t61jElPCSkQjwfoPE0N2JB4jzCRywRUguzGqPBgB%2BqzDqA4e02mKIb06h%2FRqYq%2FrHXh5LRYSEfC%2FyrNbfEhO9jCzImINu4JW4apHCrlub17cUpiWdCjyxf8SCeOHijgMzWMJeOsb8GOqUBBG4Svclzo%2FYjCD5pyBirc8xjhXUqfGaGUuYIQMjAhaFRZZD3H1MSwNEcH7zjy2y1yNb1Enc7p9CEFQFNa19EMFc2oZUMfACRnan2Pkmlt1%2B9P56o4H%2BOfygT7Fs2l%2B7dNk4RJNtUgG9hu5vanRnQPdLt9%2FOqNIEfVcsZedvnERz9DIGUPdEp1LoGLWPvW1WM9IJmjk7bCy%2FZl06nhcMJ9fAIU%2Bzk&X-Amz-Signature=e4d0e3851b881798886fd17501fb769cd23a9b74fb49ea7dec56ca0431804bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
