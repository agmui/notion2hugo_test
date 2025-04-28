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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKAS5Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtK8tCQPHcrWrR9Wtn2HIHCr%2FHu%2FDTv6OulcvONDED9AiEA%2FNeMEiQ%2BcIzfiAfvQoQFrKRksHMOiqKRKgiQvSu6LlYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJMZX%2BSIdgtUIEx0OircA3rQDIH3qxkUPqyMvqyMfwUYzlCHBbwcIhS32NW99rtaYxNePnafe70V3Qv4e0BL%2FVdnmNCqMWqXhYW1XXXPqtPdb6TLvmMWklrw%2FXMfrJx6O%2BgXxatiuCMdu%2BcfZT9OhCYAFCxlNnFVg3GNLUGAqMXjAgX%2B2vNQz0mbD71cj5JTeRJ4kbrMAX9o7Ks%2BmEgTriGXimUWhyIb%2FQDAdX3vZqHBBJR6wOhFzxFqAcQid94nionmOclwpKps2e4ho7%2F%2FZwm%2BaYzWN7XXQI8XwSQsO7y7Hshq0fHbEcge8%2BhFHXtIAqiFqdMAI1HDgsbtu%2FFHkieBnrni%2Fjd8GvpB9eu5E3%2FwNcOS5YrpxKlhoKSggnoLGctAkZWddjKfrhY9WYA8%2BInZo0zLVLqHrxSl7lHGOy5e5rFj8pxO9WT5Y0pXhfxMnNH%2FWybAtMjcpQlnOtDm2mlwATN91JgsWPM4K2cYfzHous0aLx496jwvn4y04z3lVNMk1W8M6S2sfn7Szq9%2Fw76ITISlc8FTu4R%2FwH7zvp%2BATcgafcnujQxv2c4m2QdFJSfpWBZvT0z250vDcwjvlX7lB2VaumE2Q8wwIatMh1bM0N7mSf6Y0z3LSaHG4x3N5V5rcyKPzIMooS96MO%2BqvcAGOqUBbdvuSGfQNLINHUOXD6di6%2B8524VXUnJTu54DcFEoZD5DJBckX6TPxwBr8gZTl5T%2FXFN6k5OV3bPOP2mGeUqqQU9tWE7ed%2F6bdGhVjXCZCzZCVwNoYzqMdNfpgBpBPeDWJMZdH7AEmcWTcgTNXwTQjjKwMu5ZZT7dnWHA0eYSAQ1F4mrtMH2izC3JYFO%2Fg8Z2%2FacIyebZEJMiKE5dh6unCDR2d4Wb&X-Amz-Signature=c661a8e48f5a854e6c0775ad9ae9f742601554d7d34be0fa753f02fa54212e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKAS5Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtK8tCQPHcrWrR9Wtn2HIHCr%2FHu%2FDTv6OulcvONDED9AiEA%2FNeMEiQ%2BcIzfiAfvQoQFrKRksHMOiqKRKgiQvSu6LlYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJMZX%2BSIdgtUIEx0OircA3rQDIH3qxkUPqyMvqyMfwUYzlCHBbwcIhS32NW99rtaYxNePnafe70V3Qv4e0BL%2FVdnmNCqMWqXhYW1XXXPqtPdb6TLvmMWklrw%2FXMfrJx6O%2BgXxatiuCMdu%2BcfZT9OhCYAFCxlNnFVg3GNLUGAqMXjAgX%2B2vNQz0mbD71cj5JTeRJ4kbrMAX9o7Ks%2BmEgTriGXimUWhyIb%2FQDAdX3vZqHBBJR6wOhFzxFqAcQid94nionmOclwpKps2e4ho7%2F%2FZwm%2BaYzWN7XXQI8XwSQsO7y7Hshq0fHbEcge8%2BhFHXtIAqiFqdMAI1HDgsbtu%2FFHkieBnrni%2Fjd8GvpB9eu5E3%2FwNcOS5YrpxKlhoKSggnoLGctAkZWddjKfrhY9WYA8%2BInZo0zLVLqHrxSl7lHGOy5e5rFj8pxO9WT5Y0pXhfxMnNH%2FWybAtMjcpQlnOtDm2mlwATN91JgsWPM4K2cYfzHous0aLx496jwvn4y04z3lVNMk1W8M6S2sfn7Szq9%2Fw76ITISlc8FTu4R%2FwH7zvp%2BATcgafcnujQxv2c4m2QdFJSfpWBZvT0z250vDcwjvlX7lB2VaumE2Q8wwIatMh1bM0N7mSf6Y0z3LSaHG4x3N5V5rcyKPzIMooS96MO%2BqvcAGOqUBbdvuSGfQNLINHUOXD6di6%2B8524VXUnJTu54DcFEoZD5DJBckX6TPxwBr8gZTl5T%2FXFN6k5OV3bPOP2mGeUqqQU9tWE7ed%2F6bdGhVjXCZCzZCVwNoYzqMdNfpgBpBPeDWJMZdH7AEmcWTcgTNXwTQjjKwMu5ZZT7dnWHA0eYSAQ1F4mrtMH2izC3JYFO%2Fg8Z2%2FacIyebZEJMiKE5dh6unCDR2d4Wb&X-Amz-Signature=ddb021bee8967b121ff4febc75af653035d8d1f8b1ea983a3d4a76bf1dc3a379&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKAS5Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtK8tCQPHcrWrR9Wtn2HIHCr%2FHu%2FDTv6OulcvONDED9AiEA%2FNeMEiQ%2BcIzfiAfvQoQFrKRksHMOiqKRKgiQvSu6LlYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJMZX%2BSIdgtUIEx0OircA3rQDIH3qxkUPqyMvqyMfwUYzlCHBbwcIhS32NW99rtaYxNePnafe70V3Qv4e0BL%2FVdnmNCqMWqXhYW1XXXPqtPdb6TLvmMWklrw%2FXMfrJx6O%2BgXxatiuCMdu%2BcfZT9OhCYAFCxlNnFVg3GNLUGAqMXjAgX%2B2vNQz0mbD71cj5JTeRJ4kbrMAX9o7Ks%2BmEgTriGXimUWhyIb%2FQDAdX3vZqHBBJR6wOhFzxFqAcQid94nionmOclwpKps2e4ho7%2F%2FZwm%2BaYzWN7XXQI8XwSQsO7y7Hshq0fHbEcge8%2BhFHXtIAqiFqdMAI1HDgsbtu%2FFHkieBnrni%2Fjd8GvpB9eu5E3%2FwNcOS5YrpxKlhoKSggnoLGctAkZWddjKfrhY9WYA8%2BInZo0zLVLqHrxSl7lHGOy5e5rFj8pxO9WT5Y0pXhfxMnNH%2FWybAtMjcpQlnOtDm2mlwATN91JgsWPM4K2cYfzHous0aLx496jwvn4y04z3lVNMk1W8M6S2sfn7Szq9%2Fw76ITISlc8FTu4R%2FwH7zvp%2BATcgafcnujQxv2c4m2QdFJSfpWBZvT0z250vDcwjvlX7lB2VaumE2Q8wwIatMh1bM0N7mSf6Y0z3LSaHG4x3N5V5rcyKPzIMooS96MO%2BqvcAGOqUBbdvuSGfQNLINHUOXD6di6%2B8524VXUnJTu54DcFEoZD5DJBckX6TPxwBr8gZTl5T%2FXFN6k5OV3bPOP2mGeUqqQU9tWE7ed%2F6bdGhVjXCZCzZCVwNoYzqMdNfpgBpBPeDWJMZdH7AEmcWTcgTNXwTQjjKwMu5ZZT7dnWHA0eYSAQ1F4mrtMH2izC3JYFO%2Fg8Z2%2FacIyebZEJMiKE5dh6unCDR2d4Wb&X-Amz-Signature=5c59c415fe57594bdd8713943a8430b2a90233accba25cf1459fefbba31c4f61&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKAS5Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtK8tCQPHcrWrR9Wtn2HIHCr%2FHu%2FDTv6OulcvONDED9AiEA%2FNeMEiQ%2BcIzfiAfvQoQFrKRksHMOiqKRKgiQvSu6LlYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJMZX%2BSIdgtUIEx0OircA3rQDIH3qxkUPqyMvqyMfwUYzlCHBbwcIhS32NW99rtaYxNePnafe70V3Qv4e0BL%2FVdnmNCqMWqXhYW1XXXPqtPdb6TLvmMWklrw%2FXMfrJx6O%2BgXxatiuCMdu%2BcfZT9OhCYAFCxlNnFVg3GNLUGAqMXjAgX%2B2vNQz0mbD71cj5JTeRJ4kbrMAX9o7Ks%2BmEgTriGXimUWhyIb%2FQDAdX3vZqHBBJR6wOhFzxFqAcQid94nionmOclwpKps2e4ho7%2F%2FZwm%2BaYzWN7XXQI8XwSQsO7y7Hshq0fHbEcge8%2BhFHXtIAqiFqdMAI1HDgsbtu%2FFHkieBnrni%2Fjd8GvpB9eu5E3%2FwNcOS5YrpxKlhoKSggnoLGctAkZWddjKfrhY9WYA8%2BInZo0zLVLqHrxSl7lHGOy5e5rFj8pxO9WT5Y0pXhfxMnNH%2FWybAtMjcpQlnOtDm2mlwATN91JgsWPM4K2cYfzHous0aLx496jwvn4y04z3lVNMk1W8M6S2sfn7Szq9%2Fw76ITISlc8FTu4R%2FwH7zvp%2BATcgafcnujQxv2c4m2QdFJSfpWBZvT0z250vDcwjvlX7lB2VaumE2Q8wwIatMh1bM0N7mSf6Y0z3LSaHG4x3N5V5rcyKPzIMooS96MO%2BqvcAGOqUBbdvuSGfQNLINHUOXD6di6%2B8524VXUnJTu54DcFEoZD5DJBckX6TPxwBr8gZTl5T%2FXFN6k5OV3bPOP2mGeUqqQU9tWE7ed%2F6bdGhVjXCZCzZCVwNoYzqMdNfpgBpBPeDWJMZdH7AEmcWTcgTNXwTQjjKwMu5ZZT7dnWHA0eYSAQ1F4mrtMH2izC3JYFO%2Fg8Z2%2FacIyebZEJMiKE5dh6unCDR2d4Wb&X-Amz-Signature=31b3a330f1e7c83de22185f9358c45df38948897039290a02b83c9ae5d58a2af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKAS5Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtK8tCQPHcrWrR9Wtn2HIHCr%2FHu%2FDTv6OulcvONDED9AiEA%2FNeMEiQ%2BcIzfiAfvQoQFrKRksHMOiqKRKgiQvSu6LlYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJMZX%2BSIdgtUIEx0OircA3rQDIH3qxkUPqyMvqyMfwUYzlCHBbwcIhS32NW99rtaYxNePnafe70V3Qv4e0BL%2FVdnmNCqMWqXhYW1XXXPqtPdb6TLvmMWklrw%2FXMfrJx6O%2BgXxatiuCMdu%2BcfZT9OhCYAFCxlNnFVg3GNLUGAqMXjAgX%2B2vNQz0mbD71cj5JTeRJ4kbrMAX9o7Ks%2BmEgTriGXimUWhyIb%2FQDAdX3vZqHBBJR6wOhFzxFqAcQid94nionmOclwpKps2e4ho7%2F%2FZwm%2BaYzWN7XXQI8XwSQsO7y7Hshq0fHbEcge8%2BhFHXtIAqiFqdMAI1HDgsbtu%2FFHkieBnrni%2Fjd8GvpB9eu5E3%2FwNcOS5YrpxKlhoKSggnoLGctAkZWddjKfrhY9WYA8%2BInZo0zLVLqHrxSl7lHGOy5e5rFj8pxO9WT5Y0pXhfxMnNH%2FWybAtMjcpQlnOtDm2mlwATN91JgsWPM4K2cYfzHous0aLx496jwvn4y04z3lVNMk1W8M6S2sfn7Szq9%2Fw76ITISlc8FTu4R%2FwH7zvp%2BATcgafcnujQxv2c4m2QdFJSfpWBZvT0z250vDcwjvlX7lB2VaumE2Q8wwIatMh1bM0N7mSf6Y0z3LSaHG4x3N5V5rcyKPzIMooS96MO%2BqvcAGOqUBbdvuSGfQNLINHUOXD6di6%2B8524VXUnJTu54DcFEoZD5DJBckX6TPxwBr8gZTl5T%2FXFN6k5OV3bPOP2mGeUqqQU9tWE7ed%2F6bdGhVjXCZCzZCVwNoYzqMdNfpgBpBPeDWJMZdH7AEmcWTcgTNXwTQjjKwMu5ZZT7dnWHA0eYSAQ1F4mrtMH2izC3JYFO%2Fg8Z2%2FacIyebZEJMiKE5dh6unCDR2d4Wb&X-Amz-Signature=d1c4c46657a73c120c6f4cf602bf89e9e6d2d4042f64fcc635903fe1a7d716e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKAS5Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtK8tCQPHcrWrR9Wtn2HIHCr%2FHu%2FDTv6OulcvONDED9AiEA%2FNeMEiQ%2BcIzfiAfvQoQFrKRksHMOiqKRKgiQvSu6LlYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJMZX%2BSIdgtUIEx0OircA3rQDIH3qxkUPqyMvqyMfwUYzlCHBbwcIhS32NW99rtaYxNePnafe70V3Qv4e0BL%2FVdnmNCqMWqXhYW1XXXPqtPdb6TLvmMWklrw%2FXMfrJx6O%2BgXxatiuCMdu%2BcfZT9OhCYAFCxlNnFVg3GNLUGAqMXjAgX%2B2vNQz0mbD71cj5JTeRJ4kbrMAX9o7Ks%2BmEgTriGXimUWhyIb%2FQDAdX3vZqHBBJR6wOhFzxFqAcQid94nionmOclwpKps2e4ho7%2F%2FZwm%2BaYzWN7XXQI8XwSQsO7y7Hshq0fHbEcge8%2BhFHXtIAqiFqdMAI1HDgsbtu%2FFHkieBnrni%2Fjd8GvpB9eu5E3%2FwNcOS5YrpxKlhoKSggnoLGctAkZWddjKfrhY9WYA8%2BInZo0zLVLqHrxSl7lHGOy5e5rFj8pxO9WT5Y0pXhfxMnNH%2FWybAtMjcpQlnOtDm2mlwATN91JgsWPM4K2cYfzHous0aLx496jwvn4y04z3lVNMk1W8M6S2sfn7Szq9%2Fw76ITISlc8FTu4R%2FwH7zvp%2BATcgafcnujQxv2c4m2QdFJSfpWBZvT0z250vDcwjvlX7lB2VaumE2Q8wwIatMh1bM0N7mSf6Y0z3LSaHG4x3N5V5rcyKPzIMooS96MO%2BqvcAGOqUBbdvuSGfQNLINHUOXD6di6%2B8524VXUnJTu54DcFEoZD5DJBckX6TPxwBr8gZTl5T%2FXFN6k5OV3bPOP2mGeUqqQU9tWE7ed%2F6bdGhVjXCZCzZCVwNoYzqMdNfpgBpBPeDWJMZdH7AEmcWTcgTNXwTQjjKwMu5ZZT7dnWHA0eYSAQ1F4mrtMH2izC3JYFO%2Fg8Z2%2FacIyebZEJMiKE5dh6unCDR2d4Wb&X-Amz-Signature=a5236c9757a5e7829781c9dfc677ad529daa749b4dbee60748e7703f8129337a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKAS5Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtK8tCQPHcrWrR9Wtn2HIHCr%2FHu%2FDTv6OulcvONDED9AiEA%2FNeMEiQ%2BcIzfiAfvQoQFrKRksHMOiqKRKgiQvSu6LlYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJMZX%2BSIdgtUIEx0OircA3rQDIH3qxkUPqyMvqyMfwUYzlCHBbwcIhS32NW99rtaYxNePnafe70V3Qv4e0BL%2FVdnmNCqMWqXhYW1XXXPqtPdb6TLvmMWklrw%2FXMfrJx6O%2BgXxatiuCMdu%2BcfZT9OhCYAFCxlNnFVg3GNLUGAqMXjAgX%2B2vNQz0mbD71cj5JTeRJ4kbrMAX9o7Ks%2BmEgTriGXimUWhyIb%2FQDAdX3vZqHBBJR6wOhFzxFqAcQid94nionmOclwpKps2e4ho7%2F%2FZwm%2BaYzWN7XXQI8XwSQsO7y7Hshq0fHbEcge8%2BhFHXtIAqiFqdMAI1HDgsbtu%2FFHkieBnrni%2Fjd8GvpB9eu5E3%2FwNcOS5YrpxKlhoKSggnoLGctAkZWddjKfrhY9WYA8%2BInZo0zLVLqHrxSl7lHGOy5e5rFj8pxO9WT5Y0pXhfxMnNH%2FWybAtMjcpQlnOtDm2mlwATN91JgsWPM4K2cYfzHous0aLx496jwvn4y04z3lVNMk1W8M6S2sfn7Szq9%2Fw76ITISlc8FTu4R%2FwH7zvp%2BATcgafcnujQxv2c4m2QdFJSfpWBZvT0z250vDcwjvlX7lB2VaumE2Q8wwIatMh1bM0N7mSf6Y0z3LSaHG4x3N5V5rcyKPzIMooS96MO%2BqvcAGOqUBbdvuSGfQNLINHUOXD6di6%2B8524VXUnJTu54DcFEoZD5DJBckX6TPxwBr8gZTl5T%2FXFN6k5OV3bPOP2mGeUqqQU9tWE7ed%2F6bdGhVjXCZCzZCVwNoYzqMdNfpgBpBPeDWJMZdH7AEmcWTcgTNXwTQjjKwMu5ZZT7dnWHA0eYSAQ1F4mrtMH2izC3JYFO%2Fg8Z2%2FacIyebZEJMiKE5dh6unCDR2d4Wb&X-Amz-Signature=10f02c8b2a5f931d9e86d3c4215e2af35b53cac2b6da096c525ea24152fa28bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKAS5Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtK8tCQPHcrWrR9Wtn2HIHCr%2FHu%2FDTv6OulcvONDED9AiEA%2FNeMEiQ%2BcIzfiAfvQoQFrKRksHMOiqKRKgiQvSu6LlYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJMZX%2BSIdgtUIEx0OircA3rQDIH3qxkUPqyMvqyMfwUYzlCHBbwcIhS32NW99rtaYxNePnafe70V3Qv4e0BL%2FVdnmNCqMWqXhYW1XXXPqtPdb6TLvmMWklrw%2FXMfrJx6O%2BgXxatiuCMdu%2BcfZT9OhCYAFCxlNnFVg3GNLUGAqMXjAgX%2B2vNQz0mbD71cj5JTeRJ4kbrMAX9o7Ks%2BmEgTriGXimUWhyIb%2FQDAdX3vZqHBBJR6wOhFzxFqAcQid94nionmOclwpKps2e4ho7%2F%2FZwm%2BaYzWN7XXQI8XwSQsO7y7Hshq0fHbEcge8%2BhFHXtIAqiFqdMAI1HDgsbtu%2FFHkieBnrni%2Fjd8GvpB9eu5E3%2FwNcOS5YrpxKlhoKSggnoLGctAkZWddjKfrhY9WYA8%2BInZo0zLVLqHrxSl7lHGOy5e5rFj8pxO9WT5Y0pXhfxMnNH%2FWybAtMjcpQlnOtDm2mlwATN91JgsWPM4K2cYfzHous0aLx496jwvn4y04z3lVNMk1W8M6S2sfn7Szq9%2Fw76ITISlc8FTu4R%2FwH7zvp%2BATcgafcnujQxv2c4m2QdFJSfpWBZvT0z250vDcwjvlX7lB2VaumE2Q8wwIatMh1bM0N7mSf6Y0z3LSaHG4x3N5V5rcyKPzIMooS96MO%2BqvcAGOqUBbdvuSGfQNLINHUOXD6di6%2B8524VXUnJTu54DcFEoZD5DJBckX6TPxwBr8gZTl5T%2FXFN6k5OV3bPOP2mGeUqqQU9tWE7ed%2F6bdGhVjXCZCzZCVwNoYzqMdNfpgBpBPeDWJMZdH7AEmcWTcgTNXwTQjjKwMu5ZZT7dnWHA0eYSAQ1F4mrtMH2izC3JYFO%2Fg8Z2%2FacIyebZEJMiKE5dh6unCDR2d4Wb&X-Amz-Signature=a580f84384cacd6774d651a0c93d28d93f317011ed36f6753ec5dbdc61ae24a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
