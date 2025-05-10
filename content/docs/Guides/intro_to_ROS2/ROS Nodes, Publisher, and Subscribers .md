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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJBSNWJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCB8Cjjkf2Hi1DizOG%2BTKXDHipGyFjcxF8WSF%2FgqX%2BBVQIhAIbFixv61%2F7ITh%2BNULo4Xwv5Jpe64vS2GwvMlYVZKYTfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwuRgpNZVwbycQMqsq3AM%2B5lXw%2FpcAB5qlZxhcPYNPnGhu0t9EMBd%2B9IWvKxi%2BGBbW8qZdxEaJa5mafCTnbr1LMY3NEHhrOdRJ7Zk0qI2PiKUrL4qKisDECEB1PffC2YyopX%2BzLDEBdGIQVCckJYGUn6LOapfcg52lqwEYHpXbaLfF0YThWQMfzQRYbFKRG613U396lZq%2Bo7BK21b1y8mnE7PYcJKNu2jxo%2Fk5gdwze0Yqeaw%2FdvD5qvK8hywhSIaGmbxy3jduJ%2BlkJJW6WPuzpj%2BKZ9%2BpaI9bUEa9oo4gWBXO2yQcXU3tIpkP1W7Ixs9RwANM6dYU3jnLHJtKXHrg8zz5XM4Y52bZ4Uz0ewHar2TYGFvJUXZUbFCNJik0TafB9h5GqBAC%2FOZuBUtyqfUI1tGGoCue0ADWT4EeCsnfmC0Qu44HiL1dEZoEk2F5eIAKsLhSu7SoQBOqQDH3EhNA6B63%2FxlHs09yp0sSTF757VN2DKmtRG8UucOLk5o1aA130Ie5s18PkscXxZxAr3HmAJwiTxztKdb7%2B3g82hTLEPv05OjgiifibcAlrkNUWQ1novQmf92WRVXTr0qATSmV3aiPadBi9eqdbGM2KpmBs59hB14%2Fa9Ojl7AdJVFLiVi1bbB5KAlhRzjhWzDe7P7ABjqkAS6WdbJ%2BVTd1FwbQXzyHrU836foBfuwMFHcup2ddI5tc6YBKYb6rn7K1kh%2FIeiTCPYOQMQi3KVzF2hJg6CrNIBuz7wi3RcXSS9o1CC7In8WDL%2F%2BgSU6Ywc3i40SRyIP99WHy45rUfjpzdVvPEsUvo8Y5bAvbpov3PK5r%2B42PDwY1PZJCGpjppDx2vsacm8yPLUBzZm1ys18nLDF1CMrdX%2Bvxqolu&X-Amz-Signature=3a9dc434957d6c53f0567500b7ce9894adcd7438a0859d3ff0f2966ce4fe6aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJBSNWJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCB8Cjjkf2Hi1DizOG%2BTKXDHipGyFjcxF8WSF%2FgqX%2BBVQIhAIbFixv61%2F7ITh%2BNULo4Xwv5Jpe64vS2GwvMlYVZKYTfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwuRgpNZVwbycQMqsq3AM%2B5lXw%2FpcAB5qlZxhcPYNPnGhu0t9EMBd%2B9IWvKxi%2BGBbW8qZdxEaJa5mafCTnbr1LMY3NEHhrOdRJ7Zk0qI2PiKUrL4qKisDECEB1PffC2YyopX%2BzLDEBdGIQVCckJYGUn6LOapfcg52lqwEYHpXbaLfF0YThWQMfzQRYbFKRG613U396lZq%2Bo7BK21b1y8mnE7PYcJKNu2jxo%2Fk5gdwze0Yqeaw%2FdvD5qvK8hywhSIaGmbxy3jduJ%2BlkJJW6WPuzpj%2BKZ9%2BpaI9bUEa9oo4gWBXO2yQcXU3tIpkP1W7Ixs9RwANM6dYU3jnLHJtKXHrg8zz5XM4Y52bZ4Uz0ewHar2TYGFvJUXZUbFCNJik0TafB9h5GqBAC%2FOZuBUtyqfUI1tGGoCue0ADWT4EeCsnfmC0Qu44HiL1dEZoEk2F5eIAKsLhSu7SoQBOqQDH3EhNA6B63%2FxlHs09yp0sSTF757VN2DKmtRG8UucOLk5o1aA130Ie5s18PkscXxZxAr3HmAJwiTxztKdb7%2B3g82hTLEPv05OjgiifibcAlrkNUWQ1novQmf92WRVXTr0qATSmV3aiPadBi9eqdbGM2KpmBs59hB14%2Fa9Ojl7AdJVFLiVi1bbB5KAlhRzjhWzDe7P7ABjqkAS6WdbJ%2BVTd1FwbQXzyHrU836foBfuwMFHcup2ddI5tc6YBKYb6rn7K1kh%2FIeiTCPYOQMQi3KVzF2hJg6CrNIBuz7wi3RcXSS9o1CC7In8WDL%2F%2BgSU6Ywc3i40SRyIP99WHy45rUfjpzdVvPEsUvo8Y5bAvbpov3PK5r%2B42PDwY1PZJCGpjppDx2vsacm8yPLUBzZm1ys18nLDF1CMrdX%2Bvxqolu&X-Amz-Signature=0a78b608ffd34b9caaaff53d73538b09d377ebf1b64eda041d403543df823a42&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJBSNWJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCB8Cjjkf2Hi1DizOG%2BTKXDHipGyFjcxF8WSF%2FgqX%2BBVQIhAIbFixv61%2F7ITh%2BNULo4Xwv5Jpe64vS2GwvMlYVZKYTfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwuRgpNZVwbycQMqsq3AM%2B5lXw%2FpcAB5qlZxhcPYNPnGhu0t9EMBd%2B9IWvKxi%2BGBbW8qZdxEaJa5mafCTnbr1LMY3NEHhrOdRJ7Zk0qI2PiKUrL4qKisDECEB1PffC2YyopX%2BzLDEBdGIQVCckJYGUn6LOapfcg52lqwEYHpXbaLfF0YThWQMfzQRYbFKRG613U396lZq%2Bo7BK21b1y8mnE7PYcJKNu2jxo%2Fk5gdwze0Yqeaw%2FdvD5qvK8hywhSIaGmbxy3jduJ%2BlkJJW6WPuzpj%2BKZ9%2BpaI9bUEa9oo4gWBXO2yQcXU3tIpkP1W7Ixs9RwANM6dYU3jnLHJtKXHrg8zz5XM4Y52bZ4Uz0ewHar2TYGFvJUXZUbFCNJik0TafB9h5GqBAC%2FOZuBUtyqfUI1tGGoCue0ADWT4EeCsnfmC0Qu44HiL1dEZoEk2F5eIAKsLhSu7SoQBOqQDH3EhNA6B63%2FxlHs09yp0sSTF757VN2DKmtRG8UucOLk5o1aA130Ie5s18PkscXxZxAr3HmAJwiTxztKdb7%2B3g82hTLEPv05OjgiifibcAlrkNUWQ1novQmf92WRVXTr0qATSmV3aiPadBi9eqdbGM2KpmBs59hB14%2Fa9Ojl7AdJVFLiVi1bbB5KAlhRzjhWzDe7P7ABjqkAS6WdbJ%2BVTd1FwbQXzyHrU836foBfuwMFHcup2ddI5tc6YBKYb6rn7K1kh%2FIeiTCPYOQMQi3KVzF2hJg6CrNIBuz7wi3RcXSS9o1CC7In8WDL%2F%2BgSU6Ywc3i40SRyIP99WHy45rUfjpzdVvPEsUvo8Y5bAvbpov3PK5r%2B42PDwY1PZJCGpjppDx2vsacm8yPLUBzZm1ys18nLDF1CMrdX%2Bvxqolu&X-Amz-Signature=5ee9d19653fba57cd5edec4b95a76ba4a71f3e7838968c6ed8e78601d7fd7bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJBSNWJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCB8Cjjkf2Hi1DizOG%2BTKXDHipGyFjcxF8WSF%2FgqX%2BBVQIhAIbFixv61%2F7ITh%2BNULo4Xwv5Jpe64vS2GwvMlYVZKYTfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwuRgpNZVwbycQMqsq3AM%2B5lXw%2FpcAB5qlZxhcPYNPnGhu0t9EMBd%2B9IWvKxi%2BGBbW8qZdxEaJa5mafCTnbr1LMY3NEHhrOdRJ7Zk0qI2PiKUrL4qKisDECEB1PffC2YyopX%2BzLDEBdGIQVCckJYGUn6LOapfcg52lqwEYHpXbaLfF0YThWQMfzQRYbFKRG613U396lZq%2Bo7BK21b1y8mnE7PYcJKNu2jxo%2Fk5gdwze0Yqeaw%2FdvD5qvK8hywhSIaGmbxy3jduJ%2BlkJJW6WPuzpj%2BKZ9%2BpaI9bUEa9oo4gWBXO2yQcXU3tIpkP1W7Ixs9RwANM6dYU3jnLHJtKXHrg8zz5XM4Y52bZ4Uz0ewHar2TYGFvJUXZUbFCNJik0TafB9h5GqBAC%2FOZuBUtyqfUI1tGGoCue0ADWT4EeCsnfmC0Qu44HiL1dEZoEk2F5eIAKsLhSu7SoQBOqQDH3EhNA6B63%2FxlHs09yp0sSTF757VN2DKmtRG8UucOLk5o1aA130Ie5s18PkscXxZxAr3HmAJwiTxztKdb7%2B3g82hTLEPv05OjgiifibcAlrkNUWQ1novQmf92WRVXTr0qATSmV3aiPadBi9eqdbGM2KpmBs59hB14%2Fa9Ojl7AdJVFLiVi1bbB5KAlhRzjhWzDe7P7ABjqkAS6WdbJ%2BVTd1FwbQXzyHrU836foBfuwMFHcup2ddI5tc6YBKYb6rn7K1kh%2FIeiTCPYOQMQi3KVzF2hJg6CrNIBuz7wi3RcXSS9o1CC7In8WDL%2F%2BgSU6Ywc3i40SRyIP99WHy45rUfjpzdVvPEsUvo8Y5bAvbpov3PK5r%2B42PDwY1PZJCGpjppDx2vsacm8yPLUBzZm1ys18nLDF1CMrdX%2Bvxqolu&X-Amz-Signature=76b959e12c6b2fda5568e87846da06e10a9795774edb8cd56a597656893db3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJBSNWJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCB8Cjjkf2Hi1DizOG%2BTKXDHipGyFjcxF8WSF%2FgqX%2BBVQIhAIbFixv61%2F7ITh%2BNULo4Xwv5Jpe64vS2GwvMlYVZKYTfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwuRgpNZVwbycQMqsq3AM%2B5lXw%2FpcAB5qlZxhcPYNPnGhu0t9EMBd%2B9IWvKxi%2BGBbW8qZdxEaJa5mafCTnbr1LMY3NEHhrOdRJ7Zk0qI2PiKUrL4qKisDECEB1PffC2YyopX%2BzLDEBdGIQVCckJYGUn6LOapfcg52lqwEYHpXbaLfF0YThWQMfzQRYbFKRG613U396lZq%2Bo7BK21b1y8mnE7PYcJKNu2jxo%2Fk5gdwze0Yqeaw%2FdvD5qvK8hywhSIaGmbxy3jduJ%2BlkJJW6WPuzpj%2BKZ9%2BpaI9bUEa9oo4gWBXO2yQcXU3tIpkP1W7Ixs9RwANM6dYU3jnLHJtKXHrg8zz5XM4Y52bZ4Uz0ewHar2TYGFvJUXZUbFCNJik0TafB9h5GqBAC%2FOZuBUtyqfUI1tGGoCue0ADWT4EeCsnfmC0Qu44HiL1dEZoEk2F5eIAKsLhSu7SoQBOqQDH3EhNA6B63%2FxlHs09yp0sSTF757VN2DKmtRG8UucOLk5o1aA130Ie5s18PkscXxZxAr3HmAJwiTxztKdb7%2B3g82hTLEPv05OjgiifibcAlrkNUWQ1novQmf92WRVXTr0qATSmV3aiPadBi9eqdbGM2KpmBs59hB14%2Fa9Ojl7AdJVFLiVi1bbB5KAlhRzjhWzDe7P7ABjqkAS6WdbJ%2BVTd1FwbQXzyHrU836foBfuwMFHcup2ddI5tc6YBKYb6rn7K1kh%2FIeiTCPYOQMQi3KVzF2hJg6CrNIBuz7wi3RcXSS9o1CC7In8WDL%2F%2BgSU6Ywc3i40SRyIP99WHy45rUfjpzdVvPEsUvo8Y5bAvbpov3PK5r%2B42PDwY1PZJCGpjppDx2vsacm8yPLUBzZm1ys18nLDF1CMrdX%2Bvxqolu&X-Amz-Signature=b0c108aedd9473fd2e6166ae921cd523dc2fd2999bf3fe64cc6be484113cca4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJBSNWJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCB8Cjjkf2Hi1DizOG%2BTKXDHipGyFjcxF8WSF%2FgqX%2BBVQIhAIbFixv61%2F7ITh%2BNULo4Xwv5Jpe64vS2GwvMlYVZKYTfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwuRgpNZVwbycQMqsq3AM%2B5lXw%2FpcAB5qlZxhcPYNPnGhu0t9EMBd%2B9IWvKxi%2BGBbW8qZdxEaJa5mafCTnbr1LMY3NEHhrOdRJ7Zk0qI2PiKUrL4qKisDECEB1PffC2YyopX%2BzLDEBdGIQVCckJYGUn6LOapfcg52lqwEYHpXbaLfF0YThWQMfzQRYbFKRG613U396lZq%2Bo7BK21b1y8mnE7PYcJKNu2jxo%2Fk5gdwze0Yqeaw%2FdvD5qvK8hywhSIaGmbxy3jduJ%2BlkJJW6WPuzpj%2BKZ9%2BpaI9bUEa9oo4gWBXO2yQcXU3tIpkP1W7Ixs9RwANM6dYU3jnLHJtKXHrg8zz5XM4Y52bZ4Uz0ewHar2TYGFvJUXZUbFCNJik0TafB9h5GqBAC%2FOZuBUtyqfUI1tGGoCue0ADWT4EeCsnfmC0Qu44HiL1dEZoEk2F5eIAKsLhSu7SoQBOqQDH3EhNA6B63%2FxlHs09yp0sSTF757VN2DKmtRG8UucOLk5o1aA130Ie5s18PkscXxZxAr3HmAJwiTxztKdb7%2B3g82hTLEPv05OjgiifibcAlrkNUWQ1novQmf92WRVXTr0qATSmV3aiPadBi9eqdbGM2KpmBs59hB14%2Fa9Ojl7AdJVFLiVi1bbB5KAlhRzjhWzDe7P7ABjqkAS6WdbJ%2BVTd1FwbQXzyHrU836foBfuwMFHcup2ddI5tc6YBKYb6rn7K1kh%2FIeiTCPYOQMQi3KVzF2hJg6CrNIBuz7wi3RcXSS9o1CC7In8WDL%2F%2BgSU6Ywc3i40SRyIP99WHy45rUfjpzdVvPEsUvo8Y5bAvbpov3PK5r%2B42PDwY1PZJCGpjppDx2vsacm8yPLUBzZm1ys18nLDF1CMrdX%2Bvxqolu&X-Amz-Signature=02e31164c2c552807bd3191f91e3a44e284c28d68f57b41404a663429e40a472&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJBSNWJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCB8Cjjkf2Hi1DizOG%2BTKXDHipGyFjcxF8WSF%2FgqX%2BBVQIhAIbFixv61%2F7ITh%2BNULo4Xwv5Jpe64vS2GwvMlYVZKYTfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwuRgpNZVwbycQMqsq3AM%2B5lXw%2FpcAB5qlZxhcPYNPnGhu0t9EMBd%2B9IWvKxi%2BGBbW8qZdxEaJa5mafCTnbr1LMY3NEHhrOdRJ7Zk0qI2PiKUrL4qKisDECEB1PffC2YyopX%2BzLDEBdGIQVCckJYGUn6LOapfcg52lqwEYHpXbaLfF0YThWQMfzQRYbFKRG613U396lZq%2Bo7BK21b1y8mnE7PYcJKNu2jxo%2Fk5gdwze0Yqeaw%2FdvD5qvK8hywhSIaGmbxy3jduJ%2BlkJJW6WPuzpj%2BKZ9%2BpaI9bUEa9oo4gWBXO2yQcXU3tIpkP1W7Ixs9RwANM6dYU3jnLHJtKXHrg8zz5XM4Y52bZ4Uz0ewHar2TYGFvJUXZUbFCNJik0TafB9h5GqBAC%2FOZuBUtyqfUI1tGGoCue0ADWT4EeCsnfmC0Qu44HiL1dEZoEk2F5eIAKsLhSu7SoQBOqQDH3EhNA6B63%2FxlHs09yp0sSTF757VN2DKmtRG8UucOLk5o1aA130Ie5s18PkscXxZxAr3HmAJwiTxztKdb7%2B3g82hTLEPv05OjgiifibcAlrkNUWQ1novQmf92WRVXTr0qATSmV3aiPadBi9eqdbGM2KpmBs59hB14%2Fa9Ojl7AdJVFLiVi1bbB5KAlhRzjhWzDe7P7ABjqkAS6WdbJ%2BVTd1FwbQXzyHrU836foBfuwMFHcup2ddI5tc6YBKYb6rn7K1kh%2FIeiTCPYOQMQi3KVzF2hJg6CrNIBuz7wi3RcXSS9o1CC7In8WDL%2F%2BgSU6Ywc3i40SRyIP99WHy45rUfjpzdVvPEsUvo8Y5bAvbpov3PK5r%2B42PDwY1PZJCGpjppDx2vsacm8yPLUBzZm1ys18nLDF1CMrdX%2Bvxqolu&X-Amz-Signature=b6e053290f1a014c9d93ebbb09a063d5bb2d793fe01a17613a8271f4470cabbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJBSNWJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCB8Cjjkf2Hi1DizOG%2BTKXDHipGyFjcxF8WSF%2FgqX%2BBVQIhAIbFixv61%2F7ITh%2BNULo4Xwv5Jpe64vS2GwvMlYVZKYTfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwuRgpNZVwbycQMqsq3AM%2B5lXw%2FpcAB5qlZxhcPYNPnGhu0t9EMBd%2B9IWvKxi%2BGBbW8qZdxEaJa5mafCTnbr1LMY3NEHhrOdRJ7Zk0qI2PiKUrL4qKisDECEB1PffC2YyopX%2BzLDEBdGIQVCckJYGUn6LOapfcg52lqwEYHpXbaLfF0YThWQMfzQRYbFKRG613U396lZq%2Bo7BK21b1y8mnE7PYcJKNu2jxo%2Fk5gdwze0Yqeaw%2FdvD5qvK8hywhSIaGmbxy3jduJ%2BlkJJW6WPuzpj%2BKZ9%2BpaI9bUEa9oo4gWBXO2yQcXU3tIpkP1W7Ixs9RwANM6dYU3jnLHJtKXHrg8zz5XM4Y52bZ4Uz0ewHar2TYGFvJUXZUbFCNJik0TafB9h5GqBAC%2FOZuBUtyqfUI1tGGoCue0ADWT4EeCsnfmC0Qu44HiL1dEZoEk2F5eIAKsLhSu7SoQBOqQDH3EhNA6B63%2FxlHs09yp0sSTF757VN2DKmtRG8UucOLk5o1aA130Ie5s18PkscXxZxAr3HmAJwiTxztKdb7%2B3g82hTLEPv05OjgiifibcAlrkNUWQ1novQmf92WRVXTr0qATSmV3aiPadBi9eqdbGM2KpmBs59hB14%2Fa9Ojl7AdJVFLiVi1bbB5KAlhRzjhWzDe7P7ABjqkAS6WdbJ%2BVTd1FwbQXzyHrU836foBfuwMFHcup2ddI5tc6YBKYb6rn7K1kh%2FIeiTCPYOQMQi3KVzF2hJg6CrNIBuz7wi3RcXSS9o1CC7In8WDL%2F%2BgSU6Ywc3i40SRyIP99WHy45rUfjpzdVvPEsUvo8Y5bAvbpov3PK5r%2B42PDwY1PZJCGpjppDx2vsacm8yPLUBzZm1ys18nLDF1CMrdX%2Bvxqolu&X-Amz-Signature=9b54edbb1987c0b7db7d037ee1f366e752b7e0a5e28aa35c7a358e97166ef4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
