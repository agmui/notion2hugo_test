---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUR3HWOX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyMMDGbBnvEU4eTG%2FudQZif7nSQQnhBj6buX%2FxIGqfZAiEA3yYMIQ41f8OVOlm2KAOch%2BwKoAgA0elr%2FOU7r2bqXbYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFii7G3O6x2Cci6WkCrcA3DPGthoPStzBDlNeTrnc35n2ikQsHQ1XEw%2BF%2BIeepo8rOScpAOCgWp09sWfpJ49CwEoZA%2BtBqWQopHTZthwTiOV1H9wf7En1mNaNyB6H2dCwTqELfjR1YJp2YymbhbpntQXC35W94FLl%2BC9Ujrk0J8nh0wc0sTZ9lYIC1QgTTo%2B91bJrJdFVfWQJxYiEOvZP0ILA9v3qSXLI6%2Flp0Ayupn9z8soVjtFs%2FSUE96GUTx1k1cI6KrrwK7tPeVYhcxAs3gUYXxMC6tzYXCVXZQoSzaNvDLc2EE%2B89NOyNZmK9Oi88oWd6sQU7FwjChAU23aMU1gk8TSVJKNcABLQ9byU2tRr%2FKAx%2BbLUIuNkwdoII%2F3oZspF%2B7wkQw3nY99YbsES%2BWndOce5mUPPFxyBXJa6pxuDoIF%2Bmn2a2unZt4dyrLxcpE5jEjToqUXxp3UL5tcxpw2wk1%2F9dsKP974NGfpEsoKDoi0x1qjO73I8X7TjVVkYWGjf6W8hQ2N9BJwA9uLu%2BnBgco%2BHbRxH9kmhT%2BXaQKGfMnPGjLHfwHofGR0%2BtjbbyMrStOblX4%2F%2FJv5a9yb5pw0CTE6eXxvKJEuy8vTwyBLm0qfenQnjCYf%2FawZnVPX1XtBtFLFuCp2jOC%2BMMeKs8QGOqUBUjkUSW%2FH%2BufNiAsAF2v%2Ff0ovUONXjz899b%2BhlgqvbGls0Dck4TCT0KdNRi3M%2BK0cX9qXmQDa4K%2Fktkb%2B4yVW9Dw621UHAFhytDRfEY%2B26se98GUtHF6Yn6w09RKVUi7RmBX3mH3uUiivRDwBckfS7NuvgBzlCZNVoA22EQegWQYifT7ZUibfVgcUs%2BRuCQxT5cn2%2BuzPWJe3CvgEMlv69v3afX8e&X-Amz-Signature=68310b038e4eb1f5e7229357da0d7ce8b4b0f43de81e62ef300ea1ea6c37214c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUR3HWOX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyMMDGbBnvEU4eTG%2FudQZif7nSQQnhBj6buX%2FxIGqfZAiEA3yYMIQ41f8OVOlm2KAOch%2BwKoAgA0elr%2FOU7r2bqXbYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFii7G3O6x2Cci6WkCrcA3DPGthoPStzBDlNeTrnc35n2ikQsHQ1XEw%2BF%2BIeepo8rOScpAOCgWp09sWfpJ49CwEoZA%2BtBqWQopHTZthwTiOV1H9wf7En1mNaNyB6H2dCwTqELfjR1YJp2YymbhbpntQXC35W94FLl%2BC9Ujrk0J8nh0wc0sTZ9lYIC1QgTTo%2B91bJrJdFVfWQJxYiEOvZP0ILA9v3qSXLI6%2Flp0Ayupn9z8soVjtFs%2FSUE96GUTx1k1cI6KrrwK7tPeVYhcxAs3gUYXxMC6tzYXCVXZQoSzaNvDLc2EE%2B89NOyNZmK9Oi88oWd6sQU7FwjChAU23aMU1gk8TSVJKNcABLQ9byU2tRr%2FKAx%2BbLUIuNkwdoII%2F3oZspF%2B7wkQw3nY99YbsES%2BWndOce5mUPPFxyBXJa6pxuDoIF%2Bmn2a2unZt4dyrLxcpE5jEjToqUXxp3UL5tcxpw2wk1%2F9dsKP974NGfpEsoKDoi0x1qjO73I8X7TjVVkYWGjf6W8hQ2N9BJwA9uLu%2BnBgco%2BHbRxH9kmhT%2BXaQKGfMnPGjLHfwHofGR0%2BtjbbyMrStOblX4%2F%2FJv5a9yb5pw0CTE6eXxvKJEuy8vTwyBLm0qfenQnjCYf%2FawZnVPX1XtBtFLFuCp2jOC%2BMMeKs8QGOqUBUjkUSW%2FH%2BufNiAsAF2v%2Ff0ovUONXjz899b%2BhlgqvbGls0Dck4TCT0KdNRi3M%2BK0cX9qXmQDa4K%2Fktkb%2B4yVW9Dw621UHAFhytDRfEY%2B26se98GUtHF6Yn6w09RKVUi7RmBX3mH3uUiivRDwBckfS7NuvgBzlCZNVoA22EQegWQYifT7ZUibfVgcUs%2BRuCQxT5cn2%2BuzPWJe3CvgEMlv69v3afX8e&X-Amz-Signature=eb30fb0a45a6e9466be9f0d26fb5d71185367c93138cf947e9e0e2aeb2de6f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUR3HWOX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyMMDGbBnvEU4eTG%2FudQZif7nSQQnhBj6buX%2FxIGqfZAiEA3yYMIQ41f8OVOlm2KAOch%2BwKoAgA0elr%2FOU7r2bqXbYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFii7G3O6x2Cci6WkCrcA3DPGthoPStzBDlNeTrnc35n2ikQsHQ1XEw%2BF%2BIeepo8rOScpAOCgWp09sWfpJ49CwEoZA%2BtBqWQopHTZthwTiOV1H9wf7En1mNaNyB6H2dCwTqELfjR1YJp2YymbhbpntQXC35W94FLl%2BC9Ujrk0J8nh0wc0sTZ9lYIC1QgTTo%2B91bJrJdFVfWQJxYiEOvZP0ILA9v3qSXLI6%2Flp0Ayupn9z8soVjtFs%2FSUE96GUTx1k1cI6KrrwK7tPeVYhcxAs3gUYXxMC6tzYXCVXZQoSzaNvDLc2EE%2B89NOyNZmK9Oi88oWd6sQU7FwjChAU23aMU1gk8TSVJKNcABLQ9byU2tRr%2FKAx%2BbLUIuNkwdoII%2F3oZspF%2B7wkQw3nY99YbsES%2BWndOce5mUPPFxyBXJa6pxuDoIF%2Bmn2a2unZt4dyrLxcpE5jEjToqUXxp3UL5tcxpw2wk1%2F9dsKP974NGfpEsoKDoi0x1qjO73I8X7TjVVkYWGjf6W8hQ2N9BJwA9uLu%2BnBgco%2BHbRxH9kmhT%2BXaQKGfMnPGjLHfwHofGR0%2BtjbbyMrStOblX4%2F%2FJv5a9yb5pw0CTE6eXxvKJEuy8vTwyBLm0qfenQnjCYf%2FawZnVPX1XtBtFLFuCp2jOC%2BMMeKs8QGOqUBUjkUSW%2FH%2BufNiAsAF2v%2Ff0ovUONXjz899b%2BhlgqvbGls0Dck4TCT0KdNRi3M%2BK0cX9qXmQDa4K%2Fktkb%2B4yVW9Dw621UHAFhytDRfEY%2B26se98GUtHF6Yn6w09RKVUi7RmBX3mH3uUiivRDwBckfS7NuvgBzlCZNVoA22EQegWQYifT7ZUibfVgcUs%2BRuCQxT5cn2%2BuzPWJe3CvgEMlv69v3afX8e&X-Amz-Signature=0846e994f5be510903815f93da7d6d1b2486582884abe48c2e54871e8a79917e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUR3HWOX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyMMDGbBnvEU4eTG%2FudQZif7nSQQnhBj6buX%2FxIGqfZAiEA3yYMIQ41f8OVOlm2KAOch%2BwKoAgA0elr%2FOU7r2bqXbYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFii7G3O6x2Cci6WkCrcA3DPGthoPStzBDlNeTrnc35n2ikQsHQ1XEw%2BF%2BIeepo8rOScpAOCgWp09sWfpJ49CwEoZA%2BtBqWQopHTZthwTiOV1H9wf7En1mNaNyB6H2dCwTqELfjR1YJp2YymbhbpntQXC35W94FLl%2BC9Ujrk0J8nh0wc0sTZ9lYIC1QgTTo%2B91bJrJdFVfWQJxYiEOvZP0ILA9v3qSXLI6%2Flp0Ayupn9z8soVjtFs%2FSUE96GUTx1k1cI6KrrwK7tPeVYhcxAs3gUYXxMC6tzYXCVXZQoSzaNvDLc2EE%2B89NOyNZmK9Oi88oWd6sQU7FwjChAU23aMU1gk8TSVJKNcABLQ9byU2tRr%2FKAx%2BbLUIuNkwdoII%2F3oZspF%2B7wkQw3nY99YbsES%2BWndOce5mUPPFxyBXJa6pxuDoIF%2Bmn2a2unZt4dyrLxcpE5jEjToqUXxp3UL5tcxpw2wk1%2F9dsKP974NGfpEsoKDoi0x1qjO73I8X7TjVVkYWGjf6W8hQ2N9BJwA9uLu%2BnBgco%2BHbRxH9kmhT%2BXaQKGfMnPGjLHfwHofGR0%2BtjbbyMrStOblX4%2F%2FJv5a9yb5pw0CTE6eXxvKJEuy8vTwyBLm0qfenQnjCYf%2FawZnVPX1XtBtFLFuCp2jOC%2BMMeKs8QGOqUBUjkUSW%2FH%2BufNiAsAF2v%2Ff0ovUONXjz899b%2BhlgqvbGls0Dck4TCT0KdNRi3M%2BK0cX9qXmQDa4K%2Fktkb%2B4yVW9Dw621UHAFhytDRfEY%2B26se98GUtHF6Yn6w09RKVUi7RmBX3mH3uUiivRDwBckfS7NuvgBzlCZNVoA22EQegWQYifT7ZUibfVgcUs%2BRuCQxT5cn2%2BuzPWJe3CvgEMlv69v3afX8e&X-Amz-Signature=4818cd9b1b1c870d9a55fc11655f69b2be03b4f6e25fa73cc181c45bb2fe56ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUR3HWOX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyMMDGbBnvEU4eTG%2FudQZif7nSQQnhBj6buX%2FxIGqfZAiEA3yYMIQ41f8OVOlm2KAOch%2BwKoAgA0elr%2FOU7r2bqXbYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFii7G3O6x2Cci6WkCrcA3DPGthoPStzBDlNeTrnc35n2ikQsHQ1XEw%2BF%2BIeepo8rOScpAOCgWp09sWfpJ49CwEoZA%2BtBqWQopHTZthwTiOV1H9wf7En1mNaNyB6H2dCwTqELfjR1YJp2YymbhbpntQXC35W94FLl%2BC9Ujrk0J8nh0wc0sTZ9lYIC1QgTTo%2B91bJrJdFVfWQJxYiEOvZP0ILA9v3qSXLI6%2Flp0Ayupn9z8soVjtFs%2FSUE96GUTx1k1cI6KrrwK7tPeVYhcxAs3gUYXxMC6tzYXCVXZQoSzaNvDLc2EE%2B89NOyNZmK9Oi88oWd6sQU7FwjChAU23aMU1gk8TSVJKNcABLQ9byU2tRr%2FKAx%2BbLUIuNkwdoII%2F3oZspF%2B7wkQw3nY99YbsES%2BWndOce5mUPPFxyBXJa6pxuDoIF%2Bmn2a2unZt4dyrLxcpE5jEjToqUXxp3UL5tcxpw2wk1%2F9dsKP974NGfpEsoKDoi0x1qjO73I8X7TjVVkYWGjf6W8hQ2N9BJwA9uLu%2BnBgco%2BHbRxH9kmhT%2BXaQKGfMnPGjLHfwHofGR0%2BtjbbyMrStOblX4%2F%2FJv5a9yb5pw0CTE6eXxvKJEuy8vTwyBLm0qfenQnjCYf%2FawZnVPX1XtBtFLFuCp2jOC%2BMMeKs8QGOqUBUjkUSW%2FH%2BufNiAsAF2v%2Ff0ovUONXjz899b%2BhlgqvbGls0Dck4TCT0KdNRi3M%2BK0cX9qXmQDa4K%2Fktkb%2B4yVW9Dw621UHAFhytDRfEY%2B26se98GUtHF6Yn6w09RKVUi7RmBX3mH3uUiivRDwBckfS7NuvgBzlCZNVoA22EQegWQYifT7ZUibfVgcUs%2BRuCQxT5cn2%2BuzPWJe3CvgEMlv69v3afX8e&X-Amz-Signature=b9506f80dbe37c333e3ee222dba2ad8dfb7dab45285a08ebb86abe72be05ba4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUR3HWOX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyMMDGbBnvEU4eTG%2FudQZif7nSQQnhBj6buX%2FxIGqfZAiEA3yYMIQ41f8OVOlm2KAOch%2BwKoAgA0elr%2FOU7r2bqXbYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFii7G3O6x2Cci6WkCrcA3DPGthoPStzBDlNeTrnc35n2ikQsHQ1XEw%2BF%2BIeepo8rOScpAOCgWp09sWfpJ49CwEoZA%2BtBqWQopHTZthwTiOV1H9wf7En1mNaNyB6H2dCwTqELfjR1YJp2YymbhbpntQXC35W94FLl%2BC9Ujrk0J8nh0wc0sTZ9lYIC1QgTTo%2B91bJrJdFVfWQJxYiEOvZP0ILA9v3qSXLI6%2Flp0Ayupn9z8soVjtFs%2FSUE96GUTx1k1cI6KrrwK7tPeVYhcxAs3gUYXxMC6tzYXCVXZQoSzaNvDLc2EE%2B89NOyNZmK9Oi88oWd6sQU7FwjChAU23aMU1gk8TSVJKNcABLQ9byU2tRr%2FKAx%2BbLUIuNkwdoII%2F3oZspF%2B7wkQw3nY99YbsES%2BWndOce5mUPPFxyBXJa6pxuDoIF%2Bmn2a2unZt4dyrLxcpE5jEjToqUXxp3UL5tcxpw2wk1%2F9dsKP974NGfpEsoKDoi0x1qjO73I8X7TjVVkYWGjf6W8hQ2N9BJwA9uLu%2BnBgco%2BHbRxH9kmhT%2BXaQKGfMnPGjLHfwHofGR0%2BtjbbyMrStOblX4%2F%2FJv5a9yb5pw0CTE6eXxvKJEuy8vTwyBLm0qfenQnjCYf%2FawZnVPX1XtBtFLFuCp2jOC%2BMMeKs8QGOqUBUjkUSW%2FH%2BufNiAsAF2v%2Ff0ovUONXjz899b%2BhlgqvbGls0Dck4TCT0KdNRi3M%2BK0cX9qXmQDa4K%2Fktkb%2B4yVW9Dw621UHAFhytDRfEY%2B26se98GUtHF6Yn6w09RKVUi7RmBX3mH3uUiivRDwBckfS7NuvgBzlCZNVoA22EQegWQYifT7ZUibfVgcUs%2BRuCQxT5cn2%2BuzPWJe3CvgEMlv69v3afX8e&X-Amz-Signature=f12cece4587ee824e7c9b74487f53721a49c4ccd1992f6741997885f9132d9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUR3HWOX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyMMDGbBnvEU4eTG%2FudQZif7nSQQnhBj6buX%2FxIGqfZAiEA3yYMIQ41f8OVOlm2KAOch%2BwKoAgA0elr%2FOU7r2bqXbYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFii7G3O6x2Cci6WkCrcA3DPGthoPStzBDlNeTrnc35n2ikQsHQ1XEw%2BF%2BIeepo8rOScpAOCgWp09sWfpJ49CwEoZA%2BtBqWQopHTZthwTiOV1H9wf7En1mNaNyB6H2dCwTqELfjR1YJp2YymbhbpntQXC35W94FLl%2BC9Ujrk0J8nh0wc0sTZ9lYIC1QgTTo%2B91bJrJdFVfWQJxYiEOvZP0ILA9v3qSXLI6%2Flp0Ayupn9z8soVjtFs%2FSUE96GUTx1k1cI6KrrwK7tPeVYhcxAs3gUYXxMC6tzYXCVXZQoSzaNvDLc2EE%2B89NOyNZmK9Oi88oWd6sQU7FwjChAU23aMU1gk8TSVJKNcABLQ9byU2tRr%2FKAx%2BbLUIuNkwdoII%2F3oZspF%2B7wkQw3nY99YbsES%2BWndOce5mUPPFxyBXJa6pxuDoIF%2Bmn2a2unZt4dyrLxcpE5jEjToqUXxp3UL5tcxpw2wk1%2F9dsKP974NGfpEsoKDoi0x1qjO73I8X7TjVVkYWGjf6W8hQ2N9BJwA9uLu%2BnBgco%2BHbRxH9kmhT%2BXaQKGfMnPGjLHfwHofGR0%2BtjbbyMrStOblX4%2F%2FJv5a9yb5pw0CTE6eXxvKJEuy8vTwyBLm0qfenQnjCYf%2FawZnVPX1XtBtFLFuCp2jOC%2BMMeKs8QGOqUBUjkUSW%2FH%2BufNiAsAF2v%2Ff0ovUONXjz899b%2BhlgqvbGls0Dck4TCT0KdNRi3M%2BK0cX9qXmQDa4K%2Fktkb%2B4yVW9Dw621UHAFhytDRfEY%2B26se98GUtHF6Yn6w09RKVUi7RmBX3mH3uUiivRDwBckfS7NuvgBzlCZNVoA22EQegWQYifT7ZUibfVgcUs%2BRuCQxT5cn2%2BuzPWJe3CvgEMlv69v3afX8e&X-Amz-Signature=dd5378e2a5ddebdcefaa26ed8531687569145880039c4a847a43f401bdb21b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUR3HWOX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyMMDGbBnvEU4eTG%2FudQZif7nSQQnhBj6buX%2FxIGqfZAiEA3yYMIQ41f8OVOlm2KAOch%2BwKoAgA0elr%2FOU7r2bqXbYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFii7G3O6x2Cci6WkCrcA3DPGthoPStzBDlNeTrnc35n2ikQsHQ1XEw%2BF%2BIeepo8rOScpAOCgWp09sWfpJ49CwEoZA%2BtBqWQopHTZthwTiOV1H9wf7En1mNaNyB6H2dCwTqELfjR1YJp2YymbhbpntQXC35W94FLl%2BC9Ujrk0J8nh0wc0sTZ9lYIC1QgTTo%2B91bJrJdFVfWQJxYiEOvZP0ILA9v3qSXLI6%2Flp0Ayupn9z8soVjtFs%2FSUE96GUTx1k1cI6KrrwK7tPeVYhcxAs3gUYXxMC6tzYXCVXZQoSzaNvDLc2EE%2B89NOyNZmK9Oi88oWd6sQU7FwjChAU23aMU1gk8TSVJKNcABLQ9byU2tRr%2FKAx%2BbLUIuNkwdoII%2F3oZspF%2B7wkQw3nY99YbsES%2BWndOce5mUPPFxyBXJa6pxuDoIF%2Bmn2a2unZt4dyrLxcpE5jEjToqUXxp3UL5tcxpw2wk1%2F9dsKP974NGfpEsoKDoi0x1qjO73I8X7TjVVkYWGjf6W8hQ2N9BJwA9uLu%2BnBgco%2BHbRxH9kmhT%2BXaQKGfMnPGjLHfwHofGR0%2BtjbbyMrStOblX4%2F%2FJv5a9yb5pw0CTE6eXxvKJEuy8vTwyBLm0qfenQnjCYf%2FawZnVPX1XtBtFLFuCp2jOC%2BMMeKs8QGOqUBUjkUSW%2FH%2BufNiAsAF2v%2Ff0ovUONXjz899b%2BhlgqvbGls0Dck4TCT0KdNRi3M%2BK0cX9qXmQDa4K%2Fktkb%2B4yVW9Dw621UHAFhytDRfEY%2B26se98GUtHF6Yn6w09RKVUi7RmBX3mH3uUiivRDwBckfS7NuvgBzlCZNVoA22EQegWQYifT7ZUibfVgcUs%2BRuCQxT5cn2%2BuzPWJe3CvgEMlv69v3afX8e&X-Amz-Signature=f8c3e6bc9e67cd54bc8646ecd306e47229ceda5fc85c4628ea3108d5bd30c620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
