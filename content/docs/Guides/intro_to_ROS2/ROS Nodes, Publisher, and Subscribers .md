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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DTOSY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHiZl9DqcSDExROz9l8fRmUfwG%2Bq0ONE59N86OsNxW2oAiEAttWv4SUKGZp0tVcpCFHvnOU0QdNs0hJwu%2BqthDVJ4j0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBhMCNwLNwrHn0RS7ircA2L2nzzVoZ5NdPB7lpKlKfJ2cinOo2ZE0BTM7lAJ0FFa%2BeIXxlW%2FFpcB4%2FT%2FNgh0au5xTFhpAuEmcui6n3EN9sYw0GFXpDoiRqQINfCU0lbIxuQM3zHXoZSzEMrGHgo%2Fj9cFzF7jgPzQqBquPo4agSHJqshCxjjltheFyrGfwMXTw0CuOL%2BEcncIYFfmykb2gjcmxLDpELKTwgh3hP94qVPGiWGjGKYaVYDN5ov8qG6t3o4aGVBkPsET1Ehp8thRyq9YFIQYKIA%2Bhd71fZL855QGTUbTjRxMASRrOUWPpfNcFbAYzQPo3xq81HVe0Pu6U2%2BSuvKMWcOweNfzUIPZtVW6l0KPJ5WYD9DFahBsVvRcGdMHn7cF5b%2FzPfgX8lAzPTZEn7LC5KwKIRPg9L6AWye4eKBjEMRGNeOPC40Gq2XmlQCV9kkc4KtD1Dmrdfj7kJd%2F9jVm4DfzvOgtGQzywrViqId%2B0xUbuHkVG84f0h%2F4BLvXjOAKu0rrb7nypAyVJBYi3b8jhdDpvfUZQQVE926mCz50uAMafl5YkwqONE8B5d3YCj6K8AwgQXKEriljXtm%2Bn%2FaptMzNvMJvNMGZrp6fM%2F%2Boxw35yuwzCFNx%2B6JF31EeDhokzwNKpKIRMJn1mMQGOqUB3RKHYndA6D9qyYDcbeW5nairPCCNr6VdW6%2BNRC3hCm%2FVW%2FIm%2BweJcgfnvjg8jKdOApOR5KgI5Y%2FVUu4CDrRo6Ww3719lIdp0gSpQphoX7GU4IjBNE8QhapkjziDOgGF41z2szhqfyllPjDC7%2BMdNTMoKm3BUplKbMw%2FUIu0Kyrt5holkYmzrexhdPX61YXckZD%2FtDgtOp1AFdsG4TNUwnGfEmflf&X-Amz-Signature=e3d4c51b20fa75d2d7a18f27bd9e131be08f1ece7fd944f284be3eaec9a0e46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DTOSY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHiZl9DqcSDExROz9l8fRmUfwG%2Bq0ONE59N86OsNxW2oAiEAttWv4SUKGZp0tVcpCFHvnOU0QdNs0hJwu%2BqthDVJ4j0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBhMCNwLNwrHn0RS7ircA2L2nzzVoZ5NdPB7lpKlKfJ2cinOo2ZE0BTM7lAJ0FFa%2BeIXxlW%2FFpcB4%2FT%2FNgh0au5xTFhpAuEmcui6n3EN9sYw0GFXpDoiRqQINfCU0lbIxuQM3zHXoZSzEMrGHgo%2Fj9cFzF7jgPzQqBquPo4agSHJqshCxjjltheFyrGfwMXTw0CuOL%2BEcncIYFfmykb2gjcmxLDpELKTwgh3hP94qVPGiWGjGKYaVYDN5ov8qG6t3o4aGVBkPsET1Ehp8thRyq9YFIQYKIA%2Bhd71fZL855QGTUbTjRxMASRrOUWPpfNcFbAYzQPo3xq81HVe0Pu6U2%2BSuvKMWcOweNfzUIPZtVW6l0KPJ5WYD9DFahBsVvRcGdMHn7cF5b%2FzPfgX8lAzPTZEn7LC5KwKIRPg9L6AWye4eKBjEMRGNeOPC40Gq2XmlQCV9kkc4KtD1Dmrdfj7kJd%2F9jVm4DfzvOgtGQzywrViqId%2B0xUbuHkVG84f0h%2F4BLvXjOAKu0rrb7nypAyVJBYi3b8jhdDpvfUZQQVE926mCz50uAMafl5YkwqONE8B5d3YCj6K8AwgQXKEriljXtm%2Bn%2FaptMzNvMJvNMGZrp6fM%2F%2Boxw35yuwzCFNx%2B6JF31EeDhokzwNKpKIRMJn1mMQGOqUB3RKHYndA6D9qyYDcbeW5nairPCCNr6VdW6%2BNRC3hCm%2FVW%2FIm%2BweJcgfnvjg8jKdOApOR5KgI5Y%2FVUu4CDrRo6Ww3719lIdp0gSpQphoX7GU4IjBNE8QhapkjziDOgGF41z2szhqfyllPjDC7%2BMdNTMoKm3BUplKbMw%2FUIu0Kyrt5holkYmzrexhdPX61YXckZD%2FtDgtOp1AFdsG4TNUwnGfEmflf&X-Amz-Signature=260e22d858338d23c11b65ba68a0f0c388f15f899aee80c84089f234631a6374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DTOSY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHiZl9DqcSDExROz9l8fRmUfwG%2Bq0ONE59N86OsNxW2oAiEAttWv4SUKGZp0tVcpCFHvnOU0QdNs0hJwu%2BqthDVJ4j0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBhMCNwLNwrHn0RS7ircA2L2nzzVoZ5NdPB7lpKlKfJ2cinOo2ZE0BTM7lAJ0FFa%2BeIXxlW%2FFpcB4%2FT%2FNgh0au5xTFhpAuEmcui6n3EN9sYw0GFXpDoiRqQINfCU0lbIxuQM3zHXoZSzEMrGHgo%2Fj9cFzF7jgPzQqBquPo4agSHJqshCxjjltheFyrGfwMXTw0CuOL%2BEcncIYFfmykb2gjcmxLDpELKTwgh3hP94qVPGiWGjGKYaVYDN5ov8qG6t3o4aGVBkPsET1Ehp8thRyq9YFIQYKIA%2Bhd71fZL855QGTUbTjRxMASRrOUWPpfNcFbAYzQPo3xq81HVe0Pu6U2%2BSuvKMWcOweNfzUIPZtVW6l0KPJ5WYD9DFahBsVvRcGdMHn7cF5b%2FzPfgX8lAzPTZEn7LC5KwKIRPg9L6AWye4eKBjEMRGNeOPC40Gq2XmlQCV9kkc4KtD1Dmrdfj7kJd%2F9jVm4DfzvOgtGQzywrViqId%2B0xUbuHkVG84f0h%2F4BLvXjOAKu0rrb7nypAyVJBYi3b8jhdDpvfUZQQVE926mCz50uAMafl5YkwqONE8B5d3YCj6K8AwgQXKEriljXtm%2Bn%2FaptMzNvMJvNMGZrp6fM%2F%2Boxw35yuwzCFNx%2B6JF31EeDhokzwNKpKIRMJn1mMQGOqUB3RKHYndA6D9qyYDcbeW5nairPCCNr6VdW6%2BNRC3hCm%2FVW%2FIm%2BweJcgfnvjg8jKdOApOR5KgI5Y%2FVUu4CDrRo6Ww3719lIdp0gSpQphoX7GU4IjBNE8QhapkjziDOgGF41z2szhqfyllPjDC7%2BMdNTMoKm3BUplKbMw%2FUIu0Kyrt5holkYmzrexhdPX61YXckZD%2FtDgtOp1AFdsG4TNUwnGfEmflf&X-Amz-Signature=f34c71894c4be2b7659fd0d1c64e079868c48adf5856841db4fec9ab61532f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DTOSY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHiZl9DqcSDExROz9l8fRmUfwG%2Bq0ONE59N86OsNxW2oAiEAttWv4SUKGZp0tVcpCFHvnOU0QdNs0hJwu%2BqthDVJ4j0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBhMCNwLNwrHn0RS7ircA2L2nzzVoZ5NdPB7lpKlKfJ2cinOo2ZE0BTM7lAJ0FFa%2BeIXxlW%2FFpcB4%2FT%2FNgh0au5xTFhpAuEmcui6n3EN9sYw0GFXpDoiRqQINfCU0lbIxuQM3zHXoZSzEMrGHgo%2Fj9cFzF7jgPzQqBquPo4agSHJqshCxjjltheFyrGfwMXTw0CuOL%2BEcncIYFfmykb2gjcmxLDpELKTwgh3hP94qVPGiWGjGKYaVYDN5ov8qG6t3o4aGVBkPsET1Ehp8thRyq9YFIQYKIA%2Bhd71fZL855QGTUbTjRxMASRrOUWPpfNcFbAYzQPo3xq81HVe0Pu6U2%2BSuvKMWcOweNfzUIPZtVW6l0KPJ5WYD9DFahBsVvRcGdMHn7cF5b%2FzPfgX8lAzPTZEn7LC5KwKIRPg9L6AWye4eKBjEMRGNeOPC40Gq2XmlQCV9kkc4KtD1Dmrdfj7kJd%2F9jVm4DfzvOgtGQzywrViqId%2B0xUbuHkVG84f0h%2F4BLvXjOAKu0rrb7nypAyVJBYi3b8jhdDpvfUZQQVE926mCz50uAMafl5YkwqONE8B5d3YCj6K8AwgQXKEriljXtm%2Bn%2FaptMzNvMJvNMGZrp6fM%2F%2Boxw35yuwzCFNx%2B6JF31EeDhokzwNKpKIRMJn1mMQGOqUB3RKHYndA6D9qyYDcbeW5nairPCCNr6VdW6%2BNRC3hCm%2FVW%2FIm%2BweJcgfnvjg8jKdOApOR5KgI5Y%2FVUu4CDrRo6Ww3719lIdp0gSpQphoX7GU4IjBNE8QhapkjziDOgGF41z2szhqfyllPjDC7%2BMdNTMoKm3BUplKbMw%2FUIu0Kyrt5holkYmzrexhdPX61YXckZD%2FtDgtOp1AFdsG4TNUwnGfEmflf&X-Amz-Signature=906f4df1e610f3b562a53b5fbcd9afefeb562990f35dad0b8895c3908b61e387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DTOSY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHiZl9DqcSDExROz9l8fRmUfwG%2Bq0ONE59N86OsNxW2oAiEAttWv4SUKGZp0tVcpCFHvnOU0QdNs0hJwu%2BqthDVJ4j0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBhMCNwLNwrHn0RS7ircA2L2nzzVoZ5NdPB7lpKlKfJ2cinOo2ZE0BTM7lAJ0FFa%2BeIXxlW%2FFpcB4%2FT%2FNgh0au5xTFhpAuEmcui6n3EN9sYw0GFXpDoiRqQINfCU0lbIxuQM3zHXoZSzEMrGHgo%2Fj9cFzF7jgPzQqBquPo4agSHJqshCxjjltheFyrGfwMXTw0CuOL%2BEcncIYFfmykb2gjcmxLDpELKTwgh3hP94qVPGiWGjGKYaVYDN5ov8qG6t3o4aGVBkPsET1Ehp8thRyq9YFIQYKIA%2Bhd71fZL855QGTUbTjRxMASRrOUWPpfNcFbAYzQPo3xq81HVe0Pu6U2%2BSuvKMWcOweNfzUIPZtVW6l0KPJ5WYD9DFahBsVvRcGdMHn7cF5b%2FzPfgX8lAzPTZEn7LC5KwKIRPg9L6AWye4eKBjEMRGNeOPC40Gq2XmlQCV9kkc4KtD1Dmrdfj7kJd%2F9jVm4DfzvOgtGQzywrViqId%2B0xUbuHkVG84f0h%2F4BLvXjOAKu0rrb7nypAyVJBYi3b8jhdDpvfUZQQVE926mCz50uAMafl5YkwqONE8B5d3YCj6K8AwgQXKEriljXtm%2Bn%2FaptMzNvMJvNMGZrp6fM%2F%2Boxw35yuwzCFNx%2B6JF31EeDhokzwNKpKIRMJn1mMQGOqUB3RKHYndA6D9qyYDcbeW5nairPCCNr6VdW6%2BNRC3hCm%2FVW%2FIm%2BweJcgfnvjg8jKdOApOR5KgI5Y%2FVUu4CDrRo6Ww3719lIdp0gSpQphoX7GU4IjBNE8QhapkjziDOgGF41z2szhqfyllPjDC7%2BMdNTMoKm3BUplKbMw%2FUIu0Kyrt5holkYmzrexhdPX61YXckZD%2FtDgtOp1AFdsG4TNUwnGfEmflf&X-Amz-Signature=24e37d8fb9c3acb78815ec4e046c27f62bdb8126ef096d27ca126143c3fd2444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DTOSY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHiZl9DqcSDExROz9l8fRmUfwG%2Bq0ONE59N86OsNxW2oAiEAttWv4SUKGZp0tVcpCFHvnOU0QdNs0hJwu%2BqthDVJ4j0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBhMCNwLNwrHn0RS7ircA2L2nzzVoZ5NdPB7lpKlKfJ2cinOo2ZE0BTM7lAJ0FFa%2BeIXxlW%2FFpcB4%2FT%2FNgh0au5xTFhpAuEmcui6n3EN9sYw0GFXpDoiRqQINfCU0lbIxuQM3zHXoZSzEMrGHgo%2Fj9cFzF7jgPzQqBquPo4agSHJqshCxjjltheFyrGfwMXTw0CuOL%2BEcncIYFfmykb2gjcmxLDpELKTwgh3hP94qVPGiWGjGKYaVYDN5ov8qG6t3o4aGVBkPsET1Ehp8thRyq9YFIQYKIA%2Bhd71fZL855QGTUbTjRxMASRrOUWPpfNcFbAYzQPo3xq81HVe0Pu6U2%2BSuvKMWcOweNfzUIPZtVW6l0KPJ5WYD9DFahBsVvRcGdMHn7cF5b%2FzPfgX8lAzPTZEn7LC5KwKIRPg9L6AWye4eKBjEMRGNeOPC40Gq2XmlQCV9kkc4KtD1Dmrdfj7kJd%2F9jVm4DfzvOgtGQzywrViqId%2B0xUbuHkVG84f0h%2F4BLvXjOAKu0rrb7nypAyVJBYi3b8jhdDpvfUZQQVE926mCz50uAMafl5YkwqONE8B5d3YCj6K8AwgQXKEriljXtm%2Bn%2FaptMzNvMJvNMGZrp6fM%2F%2Boxw35yuwzCFNx%2B6JF31EeDhokzwNKpKIRMJn1mMQGOqUB3RKHYndA6D9qyYDcbeW5nairPCCNr6VdW6%2BNRC3hCm%2FVW%2FIm%2BweJcgfnvjg8jKdOApOR5KgI5Y%2FVUu4CDrRo6Ww3719lIdp0gSpQphoX7GU4IjBNE8QhapkjziDOgGF41z2szhqfyllPjDC7%2BMdNTMoKm3BUplKbMw%2FUIu0Kyrt5holkYmzrexhdPX61YXckZD%2FtDgtOp1AFdsG4TNUwnGfEmflf&X-Amz-Signature=a765b8f715a2f012df16f9e38f8c3622894a51fb7f7d4dc277cdf8b5cf44d6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DTOSY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHiZl9DqcSDExROz9l8fRmUfwG%2Bq0ONE59N86OsNxW2oAiEAttWv4SUKGZp0tVcpCFHvnOU0QdNs0hJwu%2BqthDVJ4j0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBhMCNwLNwrHn0RS7ircA2L2nzzVoZ5NdPB7lpKlKfJ2cinOo2ZE0BTM7lAJ0FFa%2BeIXxlW%2FFpcB4%2FT%2FNgh0au5xTFhpAuEmcui6n3EN9sYw0GFXpDoiRqQINfCU0lbIxuQM3zHXoZSzEMrGHgo%2Fj9cFzF7jgPzQqBquPo4agSHJqshCxjjltheFyrGfwMXTw0CuOL%2BEcncIYFfmykb2gjcmxLDpELKTwgh3hP94qVPGiWGjGKYaVYDN5ov8qG6t3o4aGVBkPsET1Ehp8thRyq9YFIQYKIA%2Bhd71fZL855QGTUbTjRxMASRrOUWPpfNcFbAYzQPo3xq81HVe0Pu6U2%2BSuvKMWcOweNfzUIPZtVW6l0KPJ5WYD9DFahBsVvRcGdMHn7cF5b%2FzPfgX8lAzPTZEn7LC5KwKIRPg9L6AWye4eKBjEMRGNeOPC40Gq2XmlQCV9kkc4KtD1Dmrdfj7kJd%2F9jVm4DfzvOgtGQzywrViqId%2B0xUbuHkVG84f0h%2F4BLvXjOAKu0rrb7nypAyVJBYi3b8jhdDpvfUZQQVE926mCz50uAMafl5YkwqONE8B5d3YCj6K8AwgQXKEriljXtm%2Bn%2FaptMzNvMJvNMGZrp6fM%2F%2Boxw35yuwzCFNx%2B6JF31EeDhokzwNKpKIRMJn1mMQGOqUB3RKHYndA6D9qyYDcbeW5nairPCCNr6VdW6%2BNRC3hCm%2FVW%2FIm%2BweJcgfnvjg8jKdOApOR5KgI5Y%2FVUu4CDrRo6Ww3719lIdp0gSpQphoX7GU4IjBNE8QhapkjziDOgGF41z2szhqfyllPjDC7%2BMdNTMoKm3BUplKbMw%2FUIu0Kyrt5holkYmzrexhdPX61YXckZD%2FtDgtOp1AFdsG4TNUwnGfEmflf&X-Amz-Signature=f1a50f1b34cf565b190c461f8eaf664f0cff83025c522cfaba3cdc147b0c8204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DTOSY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHiZl9DqcSDExROz9l8fRmUfwG%2Bq0ONE59N86OsNxW2oAiEAttWv4SUKGZp0tVcpCFHvnOU0QdNs0hJwu%2BqthDVJ4j0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBhMCNwLNwrHn0RS7ircA2L2nzzVoZ5NdPB7lpKlKfJ2cinOo2ZE0BTM7lAJ0FFa%2BeIXxlW%2FFpcB4%2FT%2FNgh0au5xTFhpAuEmcui6n3EN9sYw0GFXpDoiRqQINfCU0lbIxuQM3zHXoZSzEMrGHgo%2Fj9cFzF7jgPzQqBquPo4agSHJqshCxjjltheFyrGfwMXTw0CuOL%2BEcncIYFfmykb2gjcmxLDpELKTwgh3hP94qVPGiWGjGKYaVYDN5ov8qG6t3o4aGVBkPsET1Ehp8thRyq9YFIQYKIA%2Bhd71fZL855QGTUbTjRxMASRrOUWPpfNcFbAYzQPo3xq81HVe0Pu6U2%2BSuvKMWcOweNfzUIPZtVW6l0KPJ5WYD9DFahBsVvRcGdMHn7cF5b%2FzPfgX8lAzPTZEn7LC5KwKIRPg9L6AWye4eKBjEMRGNeOPC40Gq2XmlQCV9kkc4KtD1Dmrdfj7kJd%2F9jVm4DfzvOgtGQzywrViqId%2B0xUbuHkVG84f0h%2F4BLvXjOAKu0rrb7nypAyVJBYi3b8jhdDpvfUZQQVE926mCz50uAMafl5YkwqONE8B5d3YCj6K8AwgQXKEriljXtm%2Bn%2FaptMzNvMJvNMGZrp6fM%2F%2Boxw35yuwzCFNx%2B6JF31EeDhokzwNKpKIRMJn1mMQGOqUB3RKHYndA6D9qyYDcbeW5nairPCCNr6VdW6%2BNRC3hCm%2FVW%2FIm%2BweJcgfnvjg8jKdOApOR5KgI5Y%2FVUu4CDrRo6Ww3719lIdp0gSpQphoX7GU4IjBNE8QhapkjziDOgGF41z2szhqfyllPjDC7%2BMdNTMoKm3BUplKbMw%2FUIu0Kyrt5holkYmzrexhdPX61YXckZD%2FtDgtOp1AFdsG4TNUwnGfEmflf&X-Amz-Signature=c901b406b3fcec42428156c8a75a2b5a68ad00f7cf26226dccfce48eb7d3c7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
