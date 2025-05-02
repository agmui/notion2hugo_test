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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTR7KKN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFP7rZFtvDn8Y39PtEdfYCL9L6gh%2BTwIRFPccMKM676WAiBDPNaT2GxxubLE2UIIE6wOndn5THVKcDoZX1bTqCo3yCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRrbQ%2BNT%2FHBy%2B8ZAKtwDBdm1gznZ27uLwY7khZIhxcu89u5EpitpNDfhyG9wubMFhj9RX80h%2B6JdmyaM6sbzzxkZmuzrxH2Cxywm%2BeeBruNtnM1QzwOq8uDiZebcH2VN4xWRb%2FN4uSMaG2d3gztaXgI4jQNq3GaCenE1j2gZ%2F5LjGLidb4XBzATbdxp%2BsLtjttcv7ocGi%2BmwRT9IBGV%2Fc%2Bn4tIxzsnBq6%2FES4DBjCacruGeH6vEmrG6q4C9L0jDhDESTBcjTJRywl40PPvnhi1CWxGT5tL0SuPokxzrFrB23NYD573q4W85HiWD27WiLv6DxPz4a4NTNcTnuOYiYOcHvTlrPAep1qWqhHyQmms5uxKosX5JdxpV%2FPkagyfM4AVtP1wxdapJsx6TuvO2hPAB8TGZo8hrWNhtH3INVZSLwS0KsTvsjX4g70aGBew84saHJwdmkD07%2B66Bq4sNaq6Dr%2F2VwhljeCQ9RVBBbY9M%2FIRVi9bEnT9DxxhpMVtyP945nGwZFt0Usnrl6BF8bE2xLAPYghEd0OQun3DKRx3vGpUpmXTWHaOvPog6Qfv5sr5VsVTL0lS1Oh7Q%2BCyX8mniXP6%2Bm3od90JGbYcteyXKBW%2Fp6Xl2l44fbDOCqVcQCK2kLC1ve7E7s7c8wseTTwAY6pgGXNYA%2F9pJfW4mepLRiXLePT2S%2BuZt49wRlv96z7%2BXIjq9DWf65vdNJ6pnLyMl%2BLosyxzzIXyJE62kjxaIR%2BmyrUSUK%2BO1DrpdDHPTpzR8bu3ycbHJVETnUosaF%2BDzfmM9icRG2mLRKb8k%2FnriGxaZvxtMhTYttUvw%2FW9RkSFrXpNCug6oDUDM4TPoTB3%2BqN%2FcTBdw1XtvJ9az0vggqSaErN5bI1hzj&X-Amz-Signature=79992c565cd57a54275831276e657043f26f2dbb27a9b92ddd7264fb5023a0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTR7KKN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFP7rZFtvDn8Y39PtEdfYCL9L6gh%2BTwIRFPccMKM676WAiBDPNaT2GxxubLE2UIIE6wOndn5THVKcDoZX1bTqCo3yCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRrbQ%2BNT%2FHBy%2B8ZAKtwDBdm1gznZ27uLwY7khZIhxcu89u5EpitpNDfhyG9wubMFhj9RX80h%2B6JdmyaM6sbzzxkZmuzrxH2Cxywm%2BeeBruNtnM1QzwOq8uDiZebcH2VN4xWRb%2FN4uSMaG2d3gztaXgI4jQNq3GaCenE1j2gZ%2F5LjGLidb4XBzATbdxp%2BsLtjttcv7ocGi%2BmwRT9IBGV%2Fc%2Bn4tIxzsnBq6%2FES4DBjCacruGeH6vEmrG6q4C9L0jDhDESTBcjTJRywl40PPvnhi1CWxGT5tL0SuPokxzrFrB23NYD573q4W85HiWD27WiLv6DxPz4a4NTNcTnuOYiYOcHvTlrPAep1qWqhHyQmms5uxKosX5JdxpV%2FPkagyfM4AVtP1wxdapJsx6TuvO2hPAB8TGZo8hrWNhtH3INVZSLwS0KsTvsjX4g70aGBew84saHJwdmkD07%2B66Bq4sNaq6Dr%2F2VwhljeCQ9RVBBbY9M%2FIRVi9bEnT9DxxhpMVtyP945nGwZFt0Usnrl6BF8bE2xLAPYghEd0OQun3DKRx3vGpUpmXTWHaOvPog6Qfv5sr5VsVTL0lS1Oh7Q%2BCyX8mniXP6%2Bm3od90JGbYcteyXKBW%2Fp6Xl2l44fbDOCqVcQCK2kLC1ve7E7s7c8wseTTwAY6pgGXNYA%2F9pJfW4mepLRiXLePT2S%2BuZt49wRlv96z7%2BXIjq9DWf65vdNJ6pnLyMl%2BLosyxzzIXyJE62kjxaIR%2BmyrUSUK%2BO1DrpdDHPTpzR8bu3ycbHJVETnUosaF%2BDzfmM9icRG2mLRKb8k%2FnriGxaZvxtMhTYttUvw%2FW9RkSFrXpNCug6oDUDM4TPoTB3%2BqN%2FcTBdw1XtvJ9az0vggqSaErN5bI1hzj&X-Amz-Signature=a10bba36550cbb1538c1f2caf6163880ccac52939a4d272934fb4f5d105f2c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTR7KKN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFP7rZFtvDn8Y39PtEdfYCL9L6gh%2BTwIRFPccMKM676WAiBDPNaT2GxxubLE2UIIE6wOndn5THVKcDoZX1bTqCo3yCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRrbQ%2BNT%2FHBy%2B8ZAKtwDBdm1gznZ27uLwY7khZIhxcu89u5EpitpNDfhyG9wubMFhj9RX80h%2B6JdmyaM6sbzzxkZmuzrxH2Cxywm%2BeeBruNtnM1QzwOq8uDiZebcH2VN4xWRb%2FN4uSMaG2d3gztaXgI4jQNq3GaCenE1j2gZ%2F5LjGLidb4XBzATbdxp%2BsLtjttcv7ocGi%2BmwRT9IBGV%2Fc%2Bn4tIxzsnBq6%2FES4DBjCacruGeH6vEmrG6q4C9L0jDhDESTBcjTJRywl40PPvnhi1CWxGT5tL0SuPokxzrFrB23NYD573q4W85HiWD27WiLv6DxPz4a4NTNcTnuOYiYOcHvTlrPAep1qWqhHyQmms5uxKosX5JdxpV%2FPkagyfM4AVtP1wxdapJsx6TuvO2hPAB8TGZo8hrWNhtH3INVZSLwS0KsTvsjX4g70aGBew84saHJwdmkD07%2B66Bq4sNaq6Dr%2F2VwhljeCQ9RVBBbY9M%2FIRVi9bEnT9DxxhpMVtyP945nGwZFt0Usnrl6BF8bE2xLAPYghEd0OQun3DKRx3vGpUpmXTWHaOvPog6Qfv5sr5VsVTL0lS1Oh7Q%2BCyX8mniXP6%2Bm3od90JGbYcteyXKBW%2Fp6Xl2l44fbDOCqVcQCK2kLC1ve7E7s7c8wseTTwAY6pgGXNYA%2F9pJfW4mepLRiXLePT2S%2BuZt49wRlv96z7%2BXIjq9DWf65vdNJ6pnLyMl%2BLosyxzzIXyJE62kjxaIR%2BmyrUSUK%2BO1DrpdDHPTpzR8bu3ycbHJVETnUosaF%2BDzfmM9icRG2mLRKb8k%2FnriGxaZvxtMhTYttUvw%2FW9RkSFrXpNCug6oDUDM4TPoTB3%2BqN%2FcTBdw1XtvJ9az0vggqSaErN5bI1hzj&X-Amz-Signature=34af00ab0d4a0a1882bcfcf51267423cf203193c6a8104566ad2daa0a162a22d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTR7KKN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFP7rZFtvDn8Y39PtEdfYCL9L6gh%2BTwIRFPccMKM676WAiBDPNaT2GxxubLE2UIIE6wOndn5THVKcDoZX1bTqCo3yCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRrbQ%2BNT%2FHBy%2B8ZAKtwDBdm1gznZ27uLwY7khZIhxcu89u5EpitpNDfhyG9wubMFhj9RX80h%2B6JdmyaM6sbzzxkZmuzrxH2Cxywm%2BeeBruNtnM1QzwOq8uDiZebcH2VN4xWRb%2FN4uSMaG2d3gztaXgI4jQNq3GaCenE1j2gZ%2F5LjGLidb4XBzATbdxp%2BsLtjttcv7ocGi%2BmwRT9IBGV%2Fc%2Bn4tIxzsnBq6%2FES4DBjCacruGeH6vEmrG6q4C9L0jDhDESTBcjTJRywl40PPvnhi1CWxGT5tL0SuPokxzrFrB23NYD573q4W85HiWD27WiLv6DxPz4a4NTNcTnuOYiYOcHvTlrPAep1qWqhHyQmms5uxKosX5JdxpV%2FPkagyfM4AVtP1wxdapJsx6TuvO2hPAB8TGZo8hrWNhtH3INVZSLwS0KsTvsjX4g70aGBew84saHJwdmkD07%2B66Bq4sNaq6Dr%2F2VwhljeCQ9RVBBbY9M%2FIRVi9bEnT9DxxhpMVtyP945nGwZFt0Usnrl6BF8bE2xLAPYghEd0OQun3DKRx3vGpUpmXTWHaOvPog6Qfv5sr5VsVTL0lS1Oh7Q%2BCyX8mniXP6%2Bm3od90JGbYcteyXKBW%2Fp6Xl2l44fbDOCqVcQCK2kLC1ve7E7s7c8wseTTwAY6pgGXNYA%2F9pJfW4mepLRiXLePT2S%2BuZt49wRlv96z7%2BXIjq9DWf65vdNJ6pnLyMl%2BLosyxzzIXyJE62kjxaIR%2BmyrUSUK%2BO1DrpdDHPTpzR8bu3ycbHJVETnUosaF%2BDzfmM9icRG2mLRKb8k%2FnriGxaZvxtMhTYttUvw%2FW9RkSFrXpNCug6oDUDM4TPoTB3%2BqN%2FcTBdw1XtvJ9az0vggqSaErN5bI1hzj&X-Amz-Signature=ffb4f26efa7744f311cdfc0a3f4e9c25d45699413a3c7968323616c59eedc017&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTR7KKN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFP7rZFtvDn8Y39PtEdfYCL9L6gh%2BTwIRFPccMKM676WAiBDPNaT2GxxubLE2UIIE6wOndn5THVKcDoZX1bTqCo3yCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRrbQ%2BNT%2FHBy%2B8ZAKtwDBdm1gznZ27uLwY7khZIhxcu89u5EpitpNDfhyG9wubMFhj9RX80h%2B6JdmyaM6sbzzxkZmuzrxH2Cxywm%2BeeBruNtnM1QzwOq8uDiZebcH2VN4xWRb%2FN4uSMaG2d3gztaXgI4jQNq3GaCenE1j2gZ%2F5LjGLidb4XBzATbdxp%2BsLtjttcv7ocGi%2BmwRT9IBGV%2Fc%2Bn4tIxzsnBq6%2FES4DBjCacruGeH6vEmrG6q4C9L0jDhDESTBcjTJRywl40PPvnhi1CWxGT5tL0SuPokxzrFrB23NYD573q4W85HiWD27WiLv6DxPz4a4NTNcTnuOYiYOcHvTlrPAep1qWqhHyQmms5uxKosX5JdxpV%2FPkagyfM4AVtP1wxdapJsx6TuvO2hPAB8TGZo8hrWNhtH3INVZSLwS0KsTvsjX4g70aGBew84saHJwdmkD07%2B66Bq4sNaq6Dr%2F2VwhljeCQ9RVBBbY9M%2FIRVi9bEnT9DxxhpMVtyP945nGwZFt0Usnrl6BF8bE2xLAPYghEd0OQun3DKRx3vGpUpmXTWHaOvPog6Qfv5sr5VsVTL0lS1Oh7Q%2BCyX8mniXP6%2Bm3od90JGbYcteyXKBW%2Fp6Xl2l44fbDOCqVcQCK2kLC1ve7E7s7c8wseTTwAY6pgGXNYA%2F9pJfW4mepLRiXLePT2S%2BuZt49wRlv96z7%2BXIjq9DWf65vdNJ6pnLyMl%2BLosyxzzIXyJE62kjxaIR%2BmyrUSUK%2BO1DrpdDHPTpzR8bu3ycbHJVETnUosaF%2BDzfmM9icRG2mLRKb8k%2FnriGxaZvxtMhTYttUvw%2FW9RkSFrXpNCug6oDUDM4TPoTB3%2BqN%2FcTBdw1XtvJ9az0vggqSaErN5bI1hzj&X-Amz-Signature=1cab8e54f588601763e4490c556d8dfe2c952edbd01233b733e388ec063938f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTR7KKN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFP7rZFtvDn8Y39PtEdfYCL9L6gh%2BTwIRFPccMKM676WAiBDPNaT2GxxubLE2UIIE6wOndn5THVKcDoZX1bTqCo3yCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRrbQ%2BNT%2FHBy%2B8ZAKtwDBdm1gznZ27uLwY7khZIhxcu89u5EpitpNDfhyG9wubMFhj9RX80h%2B6JdmyaM6sbzzxkZmuzrxH2Cxywm%2BeeBruNtnM1QzwOq8uDiZebcH2VN4xWRb%2FN4uSMaG2d3gztaXgI4jQNq3GaCenE1j2gZ%2F5LjGLidb4XBzATbdxp%2BsLtjttcv7ocGi%2BmwRT9IBGV%2Fc%2Bn4tIxzsnBq6%2FES4DBjCacruGeH6vEmrG6q4C9L0jDhDESTBcjTJRywl40PPvnhi1CWxGT5tL0SuPokxzrFrB23NYD573q4W85HiWD27WiLv6DxPz4a4NTNcTnuOYiYOcHvTlrPAep1qWqhHyQmms5uxKosX5JdxpV%2FPkagyfM4AVtP1wxdapJsx6TuvO2hPAB8TGZo8hrWNhtH3INVZSLwS0KsTvsjX4g70aGBew84saHJwdmkD07%2B66Bq4sNaq6Dr%2F2VwhljeCQ9RVBBbY9M%2FIRVi9bEnT9DxxhpMVtyP945nGwZFt0Usnrl6BF8bE2xLAPYghEd0OQun3DKRx3vGpUpmXTWHaOvPog6Qfv5sr5VsVTL0lS1Oh7Q%2BCyX8mniXP6%2Bm3od90JGbYcteyXKBW%2Fp6Xl2l44fbDOCqVcQCK2kLC1ve7E7s7c8wseTTwAY6pgGXNYA%2F9pJfW4mepLRiXLePT2S%2BuZt49wRlv96z7%2BXIjq9DWf65vdNJ6pnLyMl%2BLosyxzzIXyJE62kjxaIR%2BmyrUSUK%2BO1DrpdDHPTpzR8bu3ycbHJVETnUosaF%2BDzfmM9icRG2mLRKb8k%2FnriGxaZvxtMhTYttUvw%2FW9RkSFrXpNCug6oDUDM4TPoTB3%2BqN%2FcTBdw1XtvJ9az0vggqSaErN5bI1hzj&X-Amz-Signature=7b04f525ee155636b3e8bdc16c2fd5f4007454a8d1d4479bb30cb5493e8b176a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTR7KKN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFP7rZFtvDn8Y39PtEdfYCL9L6gh%2BTwIRFPccMKM676WAiBDPNaT2GxxubLE2UIIE6wOndn5THVKcDoZX1bTqCo3yCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRrbQ%2BNT%2FHBy%2B8ZAKtwDBdm1gznZ27uLwY7khZIhxcu89u5EpitpNDfhyG9wubMFhj9RX80h%2B6JdmyaM6sbzzxkZmuzrxH2Cxywm%2BeeBruNtnM1QzwOq8uDiZebcH2VN4xWRb%2FN4uSMaG2d3gztaXgI4jQNq3GaCenE1j2gZ%2F5LjGLidb4XBzATbdxp%2BsLtjttcv7ocGi%2BmwRT9IBGV%2Fc%2Bn4tIxzsnBq6%2FES4DBjCacruGeH6vEmrG6q4C9L0jDhDESTBcjTJRywl40PPvnhi1CWxGT5tL0SuPokxzrFrB23NYD573q4W85HiWD27WiLv6DxPz4a4NTNcTnuOYiYOcHvTlrPAep1qWqhHyQmms5uxKosX5JdxpV%2FPkagyfM4AVtP1wxdapJsx6TuvO2hPAB8TGZo8hrWNhtH3INVZSLwS0KsTvsjX4g70aGBew84saHJwdmkD07%2B66Bq4sNaq6Dr%2F2VwhljeCQ9RVBBbY9M%2FIRVi9bEnT9DxxhpMVtyP945nGwZFt0Usnrl6BF8bE2xLAPYghEd0OQun3DKRx3vGpUpmXTWHaOvPog6Qfv5sr5VsVTL0lS1Oh7Q%2BCyX8mniXP6%2Bm3od90JGbYcteyXKBW%2Fp6Xl2l44fbDOCqVcQCK2kLC1ve7E7s7c8wseTTwAY6pgGXNYA%2F9pJfW4mepLRiXLePT2S%2BuZt49wRlv96z7%2BXIjq9DWf65vdNJ6pnLyMl%2BLosyxzzIXyJE62kjxaIR%2BmyrUSUK%2BO1DrpdDHPTpzR8bu3ycbHJVETnUosaF%2BDzfmM9icRG2mLRKb8k%2FnriGxaZvxtMhTYttUvw%2FW9RkSFrXpNCug6oDUDM4TPoTB3%2BqN%2FcTBdw1XtvJ9az0vggqSaErN5bI1hzj&X-Amz-Signature=5d49c355135c06a4fada82cec9118875a5604e3e781c79367c07b8ab43c9fde4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTR7KKN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFP7rZFtvDn8Y39PtEdfYCL9L6gh%2BTwIRFPccMKM676WAiBDPNaT2GxxubLE2UIIE6wOndn5THVKcDoZX1bTqCo3yCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRrbQ%2BNT%2FHBy%2B8ZAKtwDBdm1gznZ27uLwY7khZIhxcu89u5EpitpNDfhyG9wubMFhj9RX80h%2B6JdmyaM6sbzzxkZmuzrxH2Cxywm%2BeeBruNtnM1QzwOq8uDiZebcH2VN4xWRb%2FN4uSMaG2d3gztaXgI4jQNq3GaCenE1j2gZ%2F5LjGLidb4XBzATbdxp%2BsLtjttcv7ocGi%2BmwRT9IBGV%2Fc%2Bn4tIxzsnBq6%2FES4DBjCacruGeH6vEmrG6q4C9L0jDhDESTBcjTJRywl40PPvnhi1CWxGT5tL0SuPokxzrFrB23NYD573q4W85HiWD27WiLv6DxPz4a4NTNcTnuOYiYOcHvTlrPAep1qWqhHyQmms5uxKosX5JdxpV%2FPkagyfM4AVtP1wxdapJsx6TuvO2hPAB8TGZo8hrWNhtH3INVZSLwS0KsTvsjX4g70aGBew84saHJwdmkD07%2B66Bq4sNaq6Dr%2F2VwhljeCQ9RVBBbY9M%2FIRVi9bEnT9DxxhpMVtyP945nGwZFt0Usnrl6BF8bE2xLAPYghEd0OQun3DKRx3vGpUpmXTWHaOvPog6Qfv5sr5VsVTL0lS1Oh7Q%2BCyX8mniXP6%2Bm3od90JGbYcteyXKBW%2Fp6Xl2l44fbDOCqVcQCK2kLC1ve7E7s7c8wseTTwAY6pgGXNYA%2F9pJfW4mepLRiXLePT2S%2BuZt49wRlv96z7%2BXIjq9DWf65vdNJ6pnLyMl%2BLosyxzzIXyJE62kjxaIR%2BmyrUSUK%2BO1DrpdDHPTpzR8bu3ycbHJVETnUosaF%2BDzfmM9icRG2mLRKb8k%2FnriGxaZvxtMhTYttUvw%2FW9RkSFrXpNCug6oDUDM4TPoTB3%2BqN%2FcTBdw1XtvJ9az0vggqSaErN5bI1hzj&X-Amz-Signature=47f27d49b2d9734b99444a0692e18ad0d5ea7a9c0eb0a4a06048769f29e72243&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
