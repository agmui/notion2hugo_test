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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGPL6TJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICklXFSvUBsEzAdOuWTwVV2rm1aaW%2FG3MnWAbe7Y5wHrAiBI17hs0eca%2FXQAbm0KrN1Kg0H71nxOw3vJnN9eAOydUyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMf2Rc8%2B9xLSAl82X3KtwDYBk4yRLs6nkqJb0mqI7Q8Y1lFy5THDmV1aiVF3SxBR%2BwC49EWZvZ6jhnm9mR%2FskC1%2FdHBlMKvJzv4V2%2FgPAC5kFbg6Jn4AxlrQv5ha5otwRIpmc%2BxWv%2FPlqyQPtVEWw10CCjooomoQgCdii1DDsAIi%2FxbcSbkpT%2BHuald6FGQAzFFUReWQQ7bV%2FAUGvBHe7Wpz7rsOYPOsJZhepeLjRQplrER3UTQUAE8LzldMyY8btsUD6JQRehe9T7vTJD7f0sGAepbfOXtuCro610bjpHD24f8ejfN%2BU8o5byEgVhyJwAM7zdSHHM8TpdwDa9YkRlhN6LtXI3y2ijCapIQCKJLaoG7iyzcQwH%2B2N3ZzgdzboGhQxha6aqB20xbMP0MWhSuzDKHiItfliEXzZ7HAAFX9R7IctohQPj5D1ggXbp%2Bo2IVhZ9sN4vUrDs8xVlnuD%2FF96WsOMAbPbLcICckgnFlvlvsmiVKhr%2FB4t%2Bu9%2BGCf9fbDLsUf7JnK4VBuXNWbE0nDvMoPKGkESZEt%2Bj80uCK3D2eLCOlhCJfqIoDskNHNPIVgf1MjeJg%2FR0YNursSmvgQ9L3SVfkwmHXWfhNLaq8r90FI5zeNRfR3alU%2Bfs87S9xPjm4QDBdL4rzUgwjpeKwgY6pgEkThe6%2BdHs1JDm72BeS84quS4fpx2WBpqtcfqnge3xc0HTq0rLumtXXKTB%2FzCNgaFIEJrlpzvFSRMnLNxx1hQWiiV%2B6p45Ce9Qnu8UzhtdKXjlkhhwbZ%2Bt0sMSyrwYbno5Gu24DeIeKOzAFWmykG7a11uR9S0loaAW5ZzQA8re0TvDDCj12OEcwD5bGUtpRN9AIbb8EgqulmO%2BO3wDDNLsVL%2FoGay7&X-Amz-Signature=364539e0700e8f3864a546f81650481bbd2bebaf1b5d3e11279d32d1bb3315d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGPL6TJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICklXFSvUBsEzAdOuWTwVV2rm1aaW%2FG3MnWAbe7Y5wHrAiBI17hs0eca%2FXQAbm0KrN1Kg0H71nxOw3vJnN9eAOydUyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMf2Rc8%2B9xLSAl82X3KtwDYBk4yRLs6nkqJb0mqI7Q8Y1lFy5THDmV1aiVF3SxBR%2BwC49EWZvZ6jhnm9mR%2FskC1%2FdHBlMKvJzv4V2%2FgPAC5kFbg6Jn4AxlrQv5ha5otwRIpmc%2BxWv%2FPlqyQPtVEWw10CCjooomoQgCdii1DDsAIi%2FxbcSbkpT%2BHuald6FGQAzFFUReWQQ7bV%2FAUGvBHe7Wpz7rsOYPOsJZhepeLjRQplrER3UTQUAE8LzldMyY8btsUD6JQRehe9T7vTJD7f0sGAepbfOXtuCro610bjpHD24f8ejfN%2BU8o5byEgVhyJwAM7zdSHHM8TpdwDa9YkRlhN6LtXI3y2ijCapIQCKJLaoG7iyzcQwH%2B2N3ZzgdzboGhQxha6aqB20xbMP0MWhSuzDKHiItfliEXzZ7HAAFX9R7IctohQPj5D1ggXbp%2Bo2IVhZ9sN4vUrDs8xVlnuD%2FF96WsOMAbPbLcICckgnFlvlvsmiVKhr%2FB4t%2Bu9%2BGCf9fbDLsUf7JnK4VBuXNWbE0nDvMoPKGkESZEt%2Bj80uCK3D2eLCOlhCJfqIoDskNHNPIVgf1MjeJg%2FR0YNursSmvgQ9L3SVfkwmHXWfhNLaq8r90FI5zeNRfR3alU%2Bfs87S9xPjm4QDBdL4rzUgwjpeKwgY6pgEkThe6%2BdHs1JDm72BeS84quS4fpx2WBpqtcfqnge3xc0HTq0rLumtXXKTB%2FzCNgaFIEJrlpzvFSRMnLNxx1hQWiiV%2B6p45Ce9Qnu8UzhtdKXjlkhhwbZ%2Bt0sMSyrwYbno5Gu24DeIeKOzAFWmykG7a11uR9S0loaAW5ZzQA8re0TvDDCj12OEcwD5bGUtpRN9AIbb8EgqulmO%2BO3wDDNLsVL%2FoGay7&X-Amz-Signature=2c6c8cbf6b5a8a3ca4f5652b95231b5e989646263e6bbafefb631453484c8654&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGPL6TJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICklXFSvUBsEzAdOuWTwVV2rm1aaW%2FG3MnWAbe7Y5wHrAiBI17hs0eca%2FXQAbm0KrN1Kg0H71nxOw3vJnN9eAOydUyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMf2Rc8%2B9xLSAl82X3KtwDYBk4yRLs6nkqJb0mqI7Q8Y1lFy5THDmV1aiVF3SxBR%2BwC49EWZvZ6jhnm9mR%2FskC1%2FdHBlMKvJzv4V2%2FgPAC5kFbg6Jn4AxlrQv5ha5otwRIpmc%2BxWv%2FPlqyQPtVEWw10CCjooomoQgCdii1DDsAIi%2FxbcSbkpT%2BHuald6FGQAzFFUReWQQ7bV%2FAUGvBHe7Wpz7rsOYPOsJZhepeLjRQplrER3UTQUAE8LzldMyY8btsUD6JQRehe9T7vTJD7f0sGAepbfOXtuCro610bjpHD24f8ejfN%2BU8o5byEgVhyJwAM7zdSHHM8TpdwDa9YkRlhN6LtXI3y2ijCapIQCKJLaoG7iyzcQwH%2B2N3ZzgdzboGhQxha6aqB20xbMP0MWhSuzDKHiItfliEXzZ7HAAFX9R7IctohQPj5D1ggXbp%2Bo2IVhZ9sN4vUrDs8xVlnuD%2FF96WsOMAbPbLcICckgnFlvlvsmiVKhr%2FB4t%2Bu9%2BGCf9fbDLsUf7JnK4VBuXNWbE0nDvMoPKGkESZEt%2Bj80uCK3D2eLCOlhCJfqIoDskNHNPIVgf1MjeJg%2FR0YNursSmvgQ9L3SVfkwmHXWfhNLaq8r90FI5zeNRfR3alU%2Bfs87S9xPjm4QDBdL4rzUgwjpeKwgY6pgEkThe6%2BdHs1JDm72BeS84quS4fpx2WBpqtcfqnge3xc0HTq0rLumtXXKTB%2FzCNgaFIEJrlpzvFSRMnLNxx1hQWiiV%2B6p45Ce9Qnu8UzhtdKXjlkhhwbZ%2Bt0sMSyrwYbno5Gu24DeIeKOzAFWmykG7a11uR9S0loaAW5ZzQA8re0TvDDCj12OEcwD5bGUtpRN9AIbb8EgqulmO%2BO3wDDNLsVL%2FoGay7&X-Amz-Signature=5e5f0955e53344dc671f67b16d29706bbd4921d7b8892fc768c337d2acade9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGPL6TJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICklXFSvUBsEzAdOuWTwVV2rm1aaW%2FG3MnWAbe7Y5wHrAiBI17hs0eca%2FXQAbm0KrN1Kg0H71nxOw3vJnN9eAOydUyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMf2Rc8%2B9xLSAl82X3KtwDYBk4yRLs6nkqJb0mqI7Q8Y1lFy5THDmV1aiVF3SxBR%2BwC49EWZvZ6jhnm9mR%2FskC1%2FdHBlMKvJzv4V2%2FgPAC5kFbg6Jn4AxlrQv5ha5otwRIpmc%2BxWv%2FPlqyQPtVEWw10CCjooomoQgCdii1DDsAIi%2FxbcSbkpT%2BHuald6FGQAzFFUReWQQ7bV%2FAUGvBHe7Wpz7rsOYPOsJZhepeLjRQplrER3UTQUAE8LzldMyY8btsUD6JQRehe9T7vTJD7f0sGAepbfOXtuCro610bjpHD24f8ejfN%2BU8o5byEgVhyJwAM7zdSHHM8TpdwDa9YkRlhN6LtXI3y2ijCapIQCKJLaoG7iyzcQwH%2B2N3ZzgdzboGhQxha6aqB20xbMP0MWhSuzDKHiItfliEXzZ7HAAFX9R7IctohQPj5D1ggXbp%2Bo2IVhZ9sN4vUrDs8xVlnuD%2FF96WsOMAbPbLcICckgnFlvlvsmiVKhr%2FB4t%2Bu9%2BGCf9fbDLsUf7JnK4VBuXNWbE0nDvMoPKGkESZEt%2Bj80uCK3D2eLCOlhCJfqIoDskNHNPIVgf1MjeJg%2FR0YNursSmvgQ9L3SVfkwmHXWfhNLaq8r90FI5zeNRfR3alU%2Bfs87S9xPjm4QDBdL4rzUgwjpeKwgY6pgEkThe6%2BdHs1JDm72BeS84quS4fpx2WBpqtcfqnge3xc0HTq0rLumtXXKTB%2FzCNgaFIEJrlpzvFSRMnLNxx1hQWiiV%2B6p45Ce9Qnu8UzhtdKXjlkhhwbZ%2Bt0sMSyrwYbno5Gu24DeIeKOzAFWmykG7a11uR9S0loaAW5ZzQA8re0TvDDCj12OEcwD5bGUtpRN9AIbb8EgqulmO%2BO3wDDNLsVL%2FoGay7&X-Amz-Signature=aca5c849245f34b4ef54fa23983266b438bc0abd6cf35339faf167d90ced98cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGPL6TJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICklXFSvUBsEzAdOuWTwVV2rm1aaW%2FG3MnWAbe7Y5wHrAiBI17hs0eca%2FXQAbm0KrN1Kg0H71nxOw3vJnN9eAOydUyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMf2Rc8%2B9xLSAl82X3KtwDYBk4yRLs6nkqJb0mqI7Q8Y1lFy5THDmV1aiVF3SxBR%2BwC49EWZvZ6jhnm9mR%2FskC1%2FdHBlMKvJzv4V2%2FgPAC5kFbg6Jn4AxlrQv5ha5otwRIpmc%2BxWv%2FPlqyQPtVEWw10CCjooomoQgCdii1DDsAIi%2FxbcSbkpT%2BHuald6FGQAzFFUReWQQ7bV%2FAUGvBHe7Wpz7rsOYPOsJZhepeLjRQplrER3UTQUAE8LzldMyY8btsUD6JQRehe9T7vTJD7f0sGAepbfOXtuCro610bjpHD24f8ejfN%2BU8o5byEgVhyJwAM7zdSHHM8TpdwDa9YkRlhN6LtXI3y2ijCapIQCKJLaoG7iyzcQwH%2B2N3ZzgdzboGhQxha6aqB20xbMP0MWhSuzDKHiItfliEXzZ7HAAFX9R7IctohQPj5D1ggXbp%2Bo2IVhZ9sN4vUrDs8xVlnuD%2FF96WsOMAbPbLcICckgnFlvlvsmiVKhr%2FB4t%2Bu9%2BGCf9fbDLsUf7JnK4VBuXNWbE0nDvMoPKGkESZEt%2Bj80uCK3D2eLCOlhCJfqIoDskNHNPIVgf1MjeJg%2FR0YNursSmvgQ9L3SVfkwmHXWfhNLaq8r90FI5zeNRfR3alU%2Bfs87S9xPjm4QDBdL4rzUgwjpeKwgY6pgEkThe6%2BdHs1JDm72BeS84quS4fpx2WBpqtcfqnge3xc0HTq0rLumtXXKTB%2FzCNgaFIEJrlpzvFSRMnLNxx1hQWiiV%2B6p45Ce9Qnu8UzhtdKXjlkhhwbZ%2Bt0sMSyrwYbno5Gu24DeIeKOzAFWmykG7a11uR9S0loaAW5ZzQA8re0TvDDCj12OEcwD5bGUtpRN9AIbb8EgqulmO%2BO3wDDNLsVL%2FoGay7&X-Amz-Signature=2ce448c21f160e460ea6c5da7e257b5db5965fa52ce2f84c1364e467a3c41a06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGPL6TJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICklXFSvUBsEzAdOuWTwVV2rm1aaW%2FG3MnWAbe7Y5wHrAiBI17hs0eca%2FXQAbm0KrN1Kg0H71nxOw3vJnN9eAOydUyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMf2Rc8%2B9xLSAl82X3KtwDYBk4yRLs6nkqJb0mqI7Q8Y1lFy5THDmV1aiVF3SxBR%2BwC49EWZvZ6jhnm9mR%2FskC1%2FdHBlMKvJzv4V2%2FgPAC5kFbg6Jn4AxlrQv5ha5otwRIpmc%2BxWv%2FPlqyQPtVEWw10CCjooomoQgCdii1DDsAIi%2FxbcSbkpT%2BHuald6FGQAzFFUReWQQ7bV%2FAUGvBHe7Wpz7rsOYPOsJZhepeLjRQplrER3UTQUAE8LzldMyY8btsUD6JQRehe9T7vTJD7f0sGAepbfOXtuCro610bjpHD24f8ejfN%2BU8o5byEgVhyJwAM7zdSHHM8TpdwDa9YkRlhN6LtXI3y2ijCapIQCKJLaoG7iyzcQwH%2B2N3ZzgdzboGhQxha6aqB20xbMP0MWhSuzDKHiItfliEXzZ7HAAFX9R7IctohQPj5D1ggXbp%2Bo2IVhZ9sN4vUrDs8xVlnuD%2FF96WsOMAbPbLcICckgnFlvlvsmiVKhr%2FB4t%2Bu9%2BGCf9fbDLsUf7JnK4VBuXNWbE0nDvMoPKGkESZEt%2Bj80uCK3D2eLCOlhCJfqIoDskNHNPIVgf1MjeJg%2FR0YNursSmvgQ9L3SVfkwmHXWfhNLaq8r90FI5zeNRfR3alU%2Bfs87S9xPjm4QDBdL4rzUgwjpeKwgY6pgEkThe6%2BdHs1JDm72BeS84quS4fpx2WBpqtcfqnge3xc0HTq0rLumtXXKTB%2FzCNgaFIEJrlpzvFSRMnLNxx1hQWiiV%2B6p45Ce9Qnu8UzhtdKXjlkhhwbZ%2Bt0sMSyrwYbno5Gu24DeIeKOzAFWmykG7a11uR9S0loaAW5ZzQA8re0TvDDCj12OEcwD5bGUtpRN9AIbb8EgqulmO%2BO3wDDNLsVL%2FoGay7&X-Amz-Signature=288e1a8ed34825a7fd872cc3cd76f48b4727d201f01b4bd9d608d1f708f0b863&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGPL6TJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICklXFSvUBsEzAdOuWTwVV2rm1aaW%2FG3MnWAbe7Y5wHrAiBI17hs0eca%2FXQAbm0KrN1Kg0H71nxOw3vJnN9eAOydUyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMf2Rc8%2B9xLSAl82X3KtwDYBk4yRLs6nkqJb0mqI7Q8Y1lFy5THDmV1aiVF3SxBR%2BwC49EWZvZ6jhnm9mR%2FskC1%2FdHBlMKvJzv4V2%2FgPAC5kFbg6Jn4AxlrQv5ha5otwRIpmc%2BxWv%2FPlqyQPtVEWw10CCjooomoQgCdii1DDsAIi%2FxbcSbkpT%2BHuald6FGQAzFFUReWQQ7bV%2FAUGvBHe7Wpz7rsOYPOsJZhepeLjRQplrER3UTQUAE8LzldMyY8btsUD6JQRehe9T7vTJD7f0sGAepbfOXtuCro610bjpHD24f8ejfN%2BU8o5byEgVhyJwAM7zdSHHM8TpdwDa9YkRlhN6LtXI3y2ijCapIQCKJLaoG7iyzcQwH%2B2N3ZzgdzboGhQxha6aqB20xbMP0MWhSuzDKHiItfliEXzZ7HAAFX9R7IctohQPj5D1ggXbp%2Bo2IVhZ9sN4vUrDs8xVlnuD%2FF96WsOMAbPbLcICckgnFlvlvsmiVKhr%2FB4t%2Bu9%2BGCf9fbDLsUf7JnK4VBuXNWbE0nDvMoPKGkESZEt%2Bj80uCK3D2eLCOlhCJfqIoDskNHNPIVgf1MjeJg%2FR0YNursSmvgQ9L3SVfkwmHXWfhNLaq8r90FI5zeNRfR3alU%2Bfs87S9xPjm4QDBdL4rzUgwjpeKwgY6pgEkThe6%2BdHs1JDm72BeS84quS4fpx2WBpqtcfqnge3xc0HTq0rLumtXXKTB%2FzCNgaFIEJrlpzvFSRMnLNxx1hQWiiV%2B6p45Ce9Qnu8UzhtdKXjlkhhwbZ%2Bt0sMSyrwYbno5Gu24DeIeKOzAFWmykG7a11uR9S0loaAW5ZzQA8re0TvDDCj12OEcwD5bGUtpRN9AIbb8EgqulmO%2BO3wDDNLsVL%2FoGay7&X-Amz-Signature=f24fc11f9060af00e121d3ebd08b673b8005ddb9962fa2829804333060a51f60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGPL6TJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICklXFSvUBsEzAdOuWTwVV2rm1aaW%2FG3MnWAbe7Y5wHrAiBI17hs0eca%2FXQAbm0KrN1Kg0H71nxOw3vJnN9eAOydUyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMf2Rc8%2B9xLSAl82X3KtwDYBk4yRLs6nkqJb0mqI7Q8Y1lFy5THDmV1aiVF3SxBR%2BwC49EWZvZ6jhnm9mR%2FskC1%2FdHBlMKvJzv4V2%2FgPAC5kFbg6Jn4AxlrQv5ha5otwRIpmc%2BxWv%2FPlqyQPtVEWw10CCjooomoQgCdii1DDsAIi%2FxbcSbkpT%2BHuald6FGQAzFFUReWQQ7bV%2FAUGvBHe7Wpz7rsOYPOsJZhepeLjRQplrER3UTQUAE8LzldMyY8btsUD6JQRehe9T7vTJD7f0sGAepbfOXtuCro610bjpHD24f8ejfN%2BU8o5byEgVhyJwAM7zdSHHM8TpdwDa9YkRlhN6LtXI3y2ijCapIQCKJLaoG7iyzcQwH%2B2N3ZzgdzboGhQxha6aqB20xbMP0MWhSuzDKHiItfliEXzZ7HAAFX9R7IctohQPj5D1ggXbp%2Bo2IVhZ9sN4vUrDs8xVlnuD%2FF96WsOMAbPbLcICckgnFlvlvsmiVKhr%2FB4t%2Bu9%2BGCf9fbDLsUf7JnK4VBuXNWbE0nDvMoPKGkESZEt%2Bj80uCK3D2eLCOlhCJfqIoDskNHNPIVgf1MjeJg%2FR0YNursSmvgQ9L3SVfkwmHXWfhNLaq8r90FI5zeNRfR3alU%2Bfs87S9xPjm4QDBdL4rzUgwjpeKwgY6pgEkThe6%2BdHs1JDm72BeS84quS4fpx2WBpqtcfqnge3xc0HTq0rLumtXXKTB%2FzCNgaFIEJrlpzvFSRMnLNxx1hQWiiV%2B6p45Ce9Qnu8UzhtdKXjlkhhwbZ%2Bt0sMSyrwYbno5Gu24DeIeKOzAFWmykG7a11uR9S0loaAW5ZzQA8re0TvDDCj12OEcwD5bGUtpRN9AIbb8EgqulmO%2BO3wDDNLsVL%2FoGay7&X-Amz-Signature=d872532ea6118be80dd40bbbbfeebcbe40231fd6ca3ee361debe88c403162734&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
