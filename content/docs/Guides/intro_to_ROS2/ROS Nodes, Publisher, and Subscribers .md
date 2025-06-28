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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYV6NLBF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUE83HeGQxTfLm1nvryrVFqQNDnbq%2BhpNByig6Oh0%2B2QIgR26odKWTzEHiI%2Bs6q3RErrdewUE7gr5PEDmoTSWRDhAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOFXuvQ7vOMt25p9ircA70af0mTMDJdgK19I%2B9hxhO8XVdBsBvXaaJYuuRgnyZH8S1uiQu8nFSgiTQBxBK9juXzDzuIqCuWLaJ%2FcihSbKpc8zSsJ0wDzUp%2FjV9mNcjqMLVgaKlGdINtefdgYkxjwSq%2FRSRONaBR%2B4jUTxWXMLB8%2B6BjscxtAB5670yP5f9VWUo0yCO9X4u%2BI0WP3eXzkeZk8xZraTleyC%2Fh0IA%2BddNA8MlWGpOumr5a71L1hIAcGkI1ndPto0LppNLZfvFazFL6yupY3Sd%2FQlTr7Iw3iqZRZHfyrPt%2BtpWhvF886Z0nvwGVDb5iDKQ0lQDglVx3jTeB3GBIkeEIt3wt7tZn6pOBi2tzTUVTnURip6H3Mt9VC9qjNpf2GBBdX15W%2FbIMV%2BJQ4XUQ90WI3OZcZUkAbfsGKHAcMBXCOeYyTQ%2F4Bk7BebMx4CQZt3Oh5%2BwNDAGaXmaAY%2Bc8sFdRIWNTVfJKQDrE58HiW%2BVRxig6mkXcma5DTZQflFdPIIAXHxifKBsb1zdaj0sj4ki4ghB8HsdTlpFGzJPpiU5Dsof8DO18MaLs8kKeRJJwLSB0pYcnIMY1%2FkUKQsAL1aKgo9EYlB9GvLswdCmxVbBXtlg8Drkdlymrd2TlNWQBcu6tcHLHMJyLgMMGOqUBHhg7DFLyeW4Fts6t1iyrttSQLFGZFlykNRk%2B50%2F3eV1lHReJwmnucEdx2pCZhjxjvKAWo%2Fhg12hAWwsNT2oevGGrmHk18vHOehw4%2BonedpVJwVvmXHhXORdkStshp2%2B4D%2Fdl0U3G6s8Tx0OfeVVfd5dtDFDW5c7QxMNKNpEhrzozUUTymQMznlt3rQdNKi8KV%2BsgVm2eYoieqE8WvC904H10siMn&X-Amz-Signature=83fc56ec31e32470cb621068f4ad3b8ae3bd373cdaa728c77b3dad3a545a0dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYV6NLBF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUE83HeGQxTfLm1nvryrVFqQNDnbq%2BhpNByig6Oh0%2B2QIgR26odKWTzEHiI%2Bs6q3RErrdewUE7gr5PEDmoTSWRDhAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOFXuvQ7vOMt25p9ircA70af0mTMDJdgK19I%2B9hxhO8XVdBsBvXaaJYuuRgnyZH8S1uiQu8nFSgiTQBxBK9juXzDzuIqCuWLaJ%2FcihSbKpc8zSsJ0wDzUp%2FjV9mNcjqMLVgaKlGdINtefdgYkxjwSq%2FRSRONaBR%2B4jUTxWXMLB8%2B6BjscxtAB5670yP5f9VWUo0yCO9X4u%2BI0WP3eXzkeZk8xZraTleyC%2Fh0IA%2BddNA8MlWGpOumr5a71L1hIAcGkI1ndPto0LppNLZfvFazFL6yupY3Sd%2FQlTr7Iw3iqZRZHfyrPt%2BtpWhvF886Z0nvwGVDb5iDKQ0lQDglVx3jTeB3GBIkeEIt3wt7tZn6pOBi2tzTUVTnURip6H3Mt9VC9qjNpf2GBBdX15W%2FbIMV%2BJQ4XUQ90WI3OZcZUkAbfsGKHAcMBXCOeYyTQ%2F4Bk7BebMx4CQZt3Oh5%2BwNDAGaXmaAY%2Bc8sFdRIWNTVfJKQDrE58HiW%2BVRxig6mkXcma5DTZQflFdPIIAXHxifKBsb1zdaj0sj4ki4ghB8HsdTlpFGzJPpiU5Dsof8DO18MaLs8kKeRJJwLSB0pYcnIMY1%2FkUKQsAL1aKgo9EYlB9GvLswdCmxVbBXtlg8Drkdlymrd2TlNWQBcu6tcHLHMJyLgMMGOqUBHhg7DFLyeW4Fts6t1iyrttSQLFGZFlykNRk%2B50%2F3eV1lHReJwmnucEdx2pCZhjxjvKAWo%2Fhg12hAWwsNT2oevGGrmHk18vHOehw4%2BonedpVJwVvmXHhXORdkStshp2%2B4D%2Fdl0U3G6s8Tx0OfeVVfd5dtDFDW5c7QxMNKNpEhrzozUUTymQMznlt3rQdNKi8KV%2BsgVm2eYoieqE8WvC904H10siMn&X-Amz-Signature=ffac0be95255093a6c1ff5ef07a745f8e49b1ad6e8754c3e5a9104be202df6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYV6NLBF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUE83HeGQxTfLm1nvryrVFqQNDnbq%2BhpNByig6Oh0%2B2QIgR26odKWTzEHiI%2Bs6q3RErrdewUE7gr5PEDmoTSWRDhAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOFXuvQ7vOMt25p9ircA70af0mTMDJdgK19I%2B9hxhO8XVdBsBvXaaJYuuRgnyZH8S1uiQu8nFSgiTQBxBK9juXzDzuIqCuWLaJ%2FcihSbKpc8zSsJ0wDzUp%2FjV9mNcjqMLVgaKlGdINtefdgYkxjwSq%2FRSRONaBR%2B4jUTxWXMLB8%2B6BjscxtAB5670yP5f9VWUo0yCO9X4u%2BI0WP3eXzkeZk8xZraTleyC%2Fh0IA%2BddNA8MlWGpOumr5a71L1hIAcGkI1ndPto0LppNLZfvFazFL6yupY3Sd%2FQlTr7Iw3iqZRZHfyrPt%2BtpWhvF886Z0nvwGVDb5iDKQ0lQDglVx3jTeB3GBIkeEIt3wt7tZn6pOBi2tzTUVTnURip6H3Mt9VC9qjNpf2GBBdX15W%2FbIMV%2BJQ4XUQ90WI3OZcZUkAbfsGKHAcMBXCOeYyTQ%2F4Bk7BebMx4CQZt3Oh5%2BwNDAGaXmaAY%2Bc8sFdRIWNTVfJKQDrE58HiW%2BVRxig6mkXcma5DTZQflFdPIIAXHxifKBsb1zdaj0sj4ki4ghB8HsdTlpFGzJPpiU5Dsof8DO18MaLs8kKeRJJwLSB0pYcnIMY1%2FkUKQsAL1aKgo9EYlB9GvLswdCmxVbBXtlg8Drkdlymrd2TlNWQBcu6tcHLHMJyLgMMGOqUBHhg7DFLyeW4Fts6t1iyrttSQLFGZFlykNRk%2B50%2F3eV1lHReJwmnucEdx2pCZhjxjvKAWo%2Fhg12hAWwsNT2oevGGrmHk18vHOehw4%2BonedpVJwVvmXHhXORdkStshp2%2B4D%2Fdl0U3G6s8Tx0OfeVVfd5dtDFDW5c7QxMNKNpEhrzozUUTymQMznlt3rQdNKi8KV%2BsgVm2eYoieqE8WvC904H10siMn&X-Amz-Signature=fe4667614525a84f9afb7f9165ede216f2a8a1fd2ae27422bcb5f02cc7039c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYV6NLBF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUE83HeGQxTfLm1nvryrVFqQNDnbq%2BhpNByig6Oh0%2B2QIgR26odKWTzEHiI%2Bs6q3RErrdewUE7gr5PEDmoTSWRDhAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOFXuvQ7vOMt25p9ircA70af0mTMDJdgK19I%2B9hxhO8XVdBsBvXaaJYuuRgnyZH8S1uiQu8nFSgiTQBxBK9juXzDzuIqCuWLaJ%2FcihSbKpc8zSsJ0wDzUp%2FjV9mNcjqMLVgaKlGdINtefdgYkxjwSq%2FRSRONaBR%2B4jUTxWXMLB8%2B6BjscxtAB5670yP5f9VWUo0yCO9X4u%2BI0WP3eXzkeZk8xZraTleyC%2Fh0IA%2BddNA8MlWGpOumr5a71L1hIAcGkI1ndPto0LppNLZfvFazFL6yupY3Sd%2FQlTr7Iw3iqZRZHfyrPt%2BtpWhvF886Z0nvwGVDb5iDKQ0lQDglVx3jTeB3GBIkeEIt3wt7tZn6pOBi2tzTUVTnURip6H3Mt9VC9qjNpf2GBBdX15W%2FbIMV%2BJQ4XUQ90WI3OZcZUkAbfsGKHAcMBXCOeYyTQ%2F4Bk7BebMx4CQZt3Oh5%2BwNDAGaXmaAY%2Bc8sFdRIWNTVfJKQDrE58HiW%2BVRxig6mkXcma5DTZQflFdPIIAXHxifKBsb1zdaj0sj4ki4ghB8HsdTlpFGzJPpiU5Dsof8DO18MaLs8kKeRJJwLSB0pYcnIMY1%2FkUKQsAL1aKgo9EYlB9GvLswdCmxVbBXtlg8Drkdlymrd2TlNWQBcu6tcHLHMJyLgMMGOqUBHhg7DFLyeW4Fts6t1iyrttSQLFGZFlykNRk%2B50%2F3eV1lHReJwmnucEdx2pCZhjxjvKAWo%2Fhg12hAWwsNT2oevGGrmHk18vHOehw4%2BonedpVJwVvmXHhXORdkStshp2%2B4D%2Fdl0U3G6s8Tx0OfeVVfd5dtDFDW5c7QxMNKNpEhrzozUUTymQMznlt3rQdNKi8KV%2BsgVm2eYoieqE8WvC904H10siMn&X-Amz-Signature=d404f6c42cb747d346aca475eca3c751a4624cb0b09291dff5c5007d01bac942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYV6NLBF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUE83HeGQxTfLm1nvryrVFqQNDnbq%2BhpNByig6Oh0%2B2QIgR26odKWTzEHiI%2Bs6q3RErrdewUE7gr5PEDmoTSWRDhAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOFXuvQ7vOMt25p9ircA70af0mTMDJdgK19I%2B9hxhO8XVdBsBvXaaJYuuRgnyZH8S1uiQu8nFSgiTQBxBK9juXzDzuIqCuWLaJ%2FcihSbKpc8zSsJ0wDzUp%2FjV9mNcjqMLVgaKlGdINtefdgYkxjwSq%2FRSRONaBR%2B4jUTxWXMLB8%2B6BjscxtAB5670yP5f9VWUo0yCO9X4u%2BI0WP3eXzkeZk8xZraTleyC%2Fh0IA%2BddNA8MlWGpOumr5a71L1hIAcGkI1ndPto0LppNLZfvFazFL6yupY3Sd%2FQlTr7Iw3iqZRZHfyrPt%2BtpWhvF886Z0nvwGVDb5iDKQ0lQDglVx3jTeB3GBIkeEIt3wt7tZn6pOBi2tzTUVTnURip6H3Mt9VC9qjNpf2GBBdX15W%2FbIMV%2BJQ4XUQ90WI3OZcZUkAbfsGKHAcMBXCOeYyTQ%2F4Bk7BebMx4CQZt3Oh5%2BwNDAGaXmaAY%2Bc8sFdRIWNTVfJKQDrE58HiW%2BVRxig6mkXcma5DTZQflFdPIIAXHxifKBsb1zdaj0sj4ki4ghB8HsdTlpFGzJPpiU5Dsof8DO18MaLs8kKeRJJwLSB0pYcnIMY1%2FkUKQsAL1aKgo9EYlB9GvLswdCmxVbBXtlg8Drkdlymrd2TlNWQBcu6tcHLHMJyLgMMGOqUBHhg7DFLyeW4Fts6t1iyrttSQLFGZFlykNRk%2B50%2F3eV1lHReJwmnucEdx2pCZhjxjvKAWo%2Fhg12hAWwsNT2oevGGrmHk18vHOehw4%2BonedpVJwVvmXHhXORdkStshp2%2B4D%2Fdl0U3G6s8Tx0OfeVVfd5dtDFDW5c7QxMNKNpEhrzozUUTymQMznlt3rQdNKi8KV%2BsgVm2eYoieqE8WvC904H10siMn&X-Amz-Signature=4cbae544dfbe58ad3c6201cb56318dda7486a8263bf54d98dc3fcb9d8d4ddce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYV6NLBF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUE83HeGQxTfLm1nvryrVFqQNDnbq%2BhpNByig6Oh0%2B2QIgR26odKWTzEHiI%2Bs6q3RErrdewUE7gr5PEDmoTSWRDhAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOFXuvQ7vOMt25p9ircA70af0mTMDJdgK19I%2B9hxhO8XVdBsBvXaaJYuuRgnyZH8S1uiQu8nFSgiTQBxBK9juXzDzuIqCuWLaJ%2FcihSbKpc8zSsJ0wDzUp%2FjV9mNcjqMLVgaKlGdINtefdgYkxjwSq%2FRSRONaBR%2B4jUTxWXMLB8%2B6BjscxtAB5670yP5f9VWUo0yCO9X4u%2BI0WP3eXzkeZk8xZraTleyC%2Fh0IA%2BddNA8MlWGpOumr5a71L1hIAcGkI1ndPto0LppNLZfvFazFL6yupY3Sd%2FQlTr7Iw3iqZRZHfyrPt%2BtpWhvF886Z0nvwGVDb5iDKQ0lQDglVx3jTeB3GBIkeEIt3wt7tZn6pOBi2tzTUVTnURip6H3Mt9VC9qjNpf2GBBdX15W%2FbIMV%2BJQ4XUQ90WI3OZcZUkAbfsGKHAcMBXCOeYyTQ%2F4Bk7BebMx4CQZt3Oh5%2BwNDAGaXmaAY%2Bc8sFdRIWNTVfJKQDrE58HiW%2BVRxig6mkXcma5DTZQflFdPIIAXHxifKBsb1zdaj0sj4ki4ghB8HsdTlpFGzJPpiU5Dsof8DO18MaLs8kKeRJJwLSB0pYcnIMY1%2FkUKQsAL1aKgo9EYlB9GvLswdCmxVbBXtlg8Drkdlymrd2TlNWQBcu6tcHLHMJyLgMMGOqUBHhg7DFLyeW4Fts6t1iyrttSQLFGZFlykNRk%2B50%2F3eV1lHReJwmnucEdx2pCZhjxjvKAWo%2Fhg12hAWwsNT2oevGGrmHk18vHOehw4%2BonedpVJwVvmXHhXORdkStshp2%2B4D%2Fdl0U3G6s8Tx0OfeVVfd5dtDFDW5c7QxMNKNpEhrzozUUTymQMznlt3rQdNKi8KV%2BsgVm2eYoieqE8WvC904H10siMn&X-Amz-Signature=4196c1a9bdb41f4efb7a32124f44be29579c0b6edadf941036aeb443913b2fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYV6NLBF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUE83HeGQxTfLm1nvryrVFqQNDnbq%2BhpNByig6Oh0%2B2QIgR26odKWTzEHiI%2Bs6q3RErrdewUE7gr5PEDmoTSWRDhAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOFXuvQ7vOMt25p9ircA70af0mTMDJdgK19I%2B9hxhO8XVdBsBvXaaJYuuRgnyZH8S1uiQu8nFSgiTQBxBK9juXzDzuIqCuWLaJ%2FcihSbKpc8zSsJ0wDzUp%2FjV9mNcjqMLVgaKlGdINtefdgYkxjwSq%2FRSRONaBR%2B4jUTxWXMLB8%2B6BjscxtAB5670yP5f9VWUo0yCO9X4u%2BI0WP3eXzkeZk8xZraTleyC%2Fh0IA%2BddNA8MlWGpOumr5a71L1hIAcGkI1ndPto0LppNLZfvFazFL6yupY3Sd%2FQlTr7Iw3iqZRZHfyrPt%2BtpWhvF886Z0nvwGVDb5iDKQ0lQDglVx3jTeB3GBIkeEIt3wt7tZn6pOBi2tzTUVTnURip6H3Mt9VC9qjNpf2GBBdX15W%2FbIMV%2BJQ4XUQ90WI3OZcZUkAbfsGKHAcMBXCOeYyTQ%2F4Bk7BebMx4CQZt3Oh5%2BwNDAGaXmaAY%2Bc8sFdRIWNTVfJKQDrE58HiW%2BVRxig6mkXcma5DTZQflFdPIIAXHxifKBsb1zdaj0sj4ki4ghB8HsdTlpFGzJPpiU5Dsof8DO18MaLs8kKeRJJwLSB0pYcnIMY1%2FkUKQsAL1aKgo9EYlB9GvLswdCmxVbBXtlg8Drkdlymrd2TlNWQBcu6tcHLHMJyLgMMGOqUBHhg7DFLyeW4Fts6t1iyrttSQLFGZFlykNRk%2B50%2F3eV1lHReJwmnucEdx2pCZhjxjvKAWo%2Fhg12hAWwsNT2oevGGrmHk18vHOehw4%2BonedpVJwVvmXHhXORdkStshp2%2B4D%2Fdl0U3G6s8Tx0OfeVVfd5dtDFDW5c7QxMNKNpEhrzozUUTymQMznlt3rQdNKi8KV%2BsgVm2eYoieqE8WvC904H10siMn&X-Amz-Signature=48615081a862491f7b13f3b7cbf8a1f83758b32e8e3e4c05d74ce87143452558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYV6NLBF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUE83HeGQxTfLm1nvryrVFqQNDnbq%2BhpNByig6Oh0%2B2QIgR26odKWTzEHiI%2Bs6q3RErrdewUE7gr5PEDmoTSWRDhAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOFXuvQ7vOMt25p9ircA70af0mTMDJdgK19I%2B9hxhO8XVdBsBvXaaJYuuRgnyZH8S1uiQu8nFSgiTQBxBK9juXzDzuIqCuWLaJ%2FcihSbKpc8zSsJ0wDzUp%2FjV9mNcjqMLVgaKlGdINtefdgYkxjwSq%2FRSRONaBR%2B4jUTxWXMLB8%2B6BjscxtAB5670yP5f9VWUo0yCO9X4u%2BI0WP3eXzkeZk8xZraTleyC%2Fh0IA%2BddNA8MlWGpOumr5a71L1hIAcGkI1ndPto0LppNLZfvFazFL6yupY3Sd%2FQlTr7Iw3iqZRZHfyrPt%2BtpWhvF886Z0nvwGVDb5iDKQ0lQDglVx3jTeB3GBIkeEIt3wt7tZn6pOBi2tzTUVTnURip6H3Mt9VC9qjNpf2GBBdX15W%2FbIMV%2BJQ4XUQ90WI3OZcZUkAbfsGKHAcMBXCOeYyTQ%2F4Bk7BebMx4CQZt3Oh5%2BwNDAGaXmaAY%2Bc8sFdRIWNTVfJKQDrE58HiW%2BVRxig6mkXcma5DTZQflFdPIIAXHxifKBsb1zdaj0sj4ki4ghB8HsdTlpFGzJPpiU5Dsof8DO18MaLs8kKeRJJwLSB0pYcnIMY1%2FkUKQsAL1aKgo9EYlB9GvLswdCmxVbBXtlg8Drkdlymrd2TlNWQBcu6tcHLHMJyLgMMGOqUBHhg7DFLyeW4Fts6t1iyrttSQLFGZFlykNRk%2B50%2F3eV1lHReJwmnucEdx2pCZhjxjvKAWo%2Fhg12hAWwsNT2oevGGrmHk18vHOehw4%2BonedpVJwVvmXHhXORdkStshp2%2B4D%2Fdl0U3G6s8Tx0OfeVVfd5dtDFDW5c7QxMNKNpEhrzozUUTymQMznlt3rQdNKi8KV%2BsgVm2eYoieqE8WvC904H10siMn&X-Amz-Signature=dc0785246aa852b97df7dd57b35d1e40061cf498c31e8b0674db9e70918b502d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
