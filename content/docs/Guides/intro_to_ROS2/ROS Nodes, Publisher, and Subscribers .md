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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT7ZXEL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDWd4Z5gjJBEReyeMwFqMaahO6QqJI66xtH%2FmNIuy4%2BBwIgK1wZyiZLJxnh5rL6j1cOCicgzvXJW4%2BlqEdNZTH12N4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNU8GALhbqhP8Hq7OyrcAzbX4ToN40D46C0VdpyrUpd9EQewqipq%2FwN9xQPYjnmWuiqv54bbuplGoQpn4GF1l%2FUvTlfGWklvNj64d4bStNo%2FvFZ%2F9xJ3Cpp3%2BgKiS6rR4GbgbxSHU4LC8JSFB809JpRZKlPj2KlI7pqxmhYP%2BdO9OI8xYGYW7d2CYks5%2FvTQLvCyb6axsMx4r6W%2FaWXM9WxDkfVsaYXT%2BZFSPYoTq2QjRtWJndGXdIeMUHUmlLW2Qu%2Fx3h%2FDczmbt7DSuK%2BDVmJILForCVpJyYNqyNYjsiqMtQB%2FNuUHmKCm11l5HkbiCiZef0CVntvjOpYQN%2Bbvq5zWyhdII4Oqp1FgGhycx6RSza6vBoE87aZuHDyhHacjSIOvkACv3kK0GKeoM2ZIPAifJjEBTlRNsDu4X4AJIYV%2FrQGz0NqIG1ONH9Mz097kyuUjejySao2ZoPazf2BwYyuFm7NZznAD7U6TxyljGk81C9JoZaqf3eHdpX9meTdxnnnlaaJIMpgNAxNFbhR4yofCJS%2BF8v81aePqhKrLK0iAMapJr3cyrOYk%2FSa3JQgIg0GsTHMJjf1BmKkhBGFpxqilNl8LXzNU3QRkTN%2BRrUHMBYbC0QqTCp68p4xrNVqp2EUUMYirRID%2Fo8BKMJGGhr0GOqUBnkB7TpvOaEOnsUAYJ6PW%2F3V3yoTWp4gy8eRqsnqxxlcCqbdDDf87%2F1oZRcIZ2MoMi2HwwU9UAyU%2BHIivk7pvnZJMlP4xSgL2BeWunxz04Fekv5oAo4najE6GOh1xg9vRWq%2FidIQBh0JkR4WDyBXOsbEJ57YZS0BHpamsrY0I%2F35XTbPmkVc0%2FBIJpDHhSEgBQdcLfsyT7Ec94ynJbRXLqXef1Db1&X-Amz-Signature=f9c2e5ff7e2d7e113a6beaf04a5e27868ebe73b574d41bd56c1a550ba2961967&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT7ZXEL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDWd4Z5gjJBEReyeMwFqMaahO6QqJI66xtH%2FmNIuy4%2BBwIgK1wZyiZLJxnh5rL6j1cOCicgzvXJW4%2BlqEdNZTH12N4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNU8GALhbqhP8Hq7OyrcAzbX4ToN40D46C0VdpyrUpd9EQewqipq%2FwN9xQPYjnmWuiqv54bbuplGoQpn4GF1l%2FUvTlfGWklvNj64d4bStNo%2FvFZ%2F9xJ3Cpp3%2BgKiS6rR4GbgbxSHU4LC8JSFB809JpRZKlPj2KlI7pqxmhYP%2BdO9OI8xYGYW7d2CYks5%2FvTQLvCyb6axsMx4r6W%2FaWXM9WxDkfVsaYXT%2BZFSPYoTq2QjRtWJndGXdIeMUHUmlLW2Qu%2Fx3h%2FDczmbt7DSuK%2BDVmJILForCVpJyYNqyNYjsiqMtQB%2FNuUHmKCm11l5HkbiCiZef0CVntvjOpYQN%2Bbvq5zWyhdII4Oqp1FgGhycx6RSza6vBoE87aZuHDyhHacjSIOvkACv3kK0GKeoM2ZIPAifJjEBTlRNsDu4X4AJIYV%2FrQGz0NqIG1ONH9Mz097kyuUjejySao2ZoPazf2BwYyuFm7NZznAD7U6TxyljGk81C9JoZaqf3eHdpX9meTdxnnnlaaJIMpgNAxNFbhR4yofCJS%2BF8v81aePqhKrLK0iAMapJr3cyrOYk%2FSa3JQgIg0GsTHMJjf1BmKkhBGFpxqilNl8LXzNU3QRkTN%2BRrUHMBYbC0QqTCp68p4xrNVqp2EUUMYirRID%2Fo8BKMJGGhr0GOqUBnkB7TpvOaEOnsUAYJ6PW%2F3V3yoTWp4gy8eRqsnqxxlcCqbdDDf87%2F1oZRcIZ2MoMi2HwwU9UAyU%2BHIivk7pvnZJMlP4xSgL2BeWunxz04Fekv5oAo4najE6GOh1xg9vRWq%2FidIQBh0JkR4WDyBXOsbEJ57YZS0BHpamsrY0I%2F35XTbPmkVc0%2FBIJpDHhSEgBQdcLfsyT7Ec94ynJbRXLqXef1Db1&X-Amz-Signature=44b52ee6b17cd3de864b6bc37f27386d301ee1ad562c605ba5f84a7026e80dab&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT7ZXEL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDWd4Z5gjJBEReyeMwFqMaahO6QqJI66xtH%2FmNIuy4%2BBwIgK1wZyiZLJxnh5rL6j1cOCicgzvXJW4%2BlqEdNZTH12N4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNU8GALhbqhP8Hq7OyrcAzbX4ToN40D46C0VdpyrUpd9EQewqipq%2FwN9xQPYjnmWuiqv54bbuplGoQpn4GF1l%2FUvTlfGWklvNj64d4bStNo%2FvFZ%2F9xJ3Cpp3%2BgKiS6rR4GbgbxSHU4LC8JSFB809JpRZKlPj2KlI7pqxmhYP%2BdO9OI8xYGYW7d2CYks5%2FvTQLvCyb6axsMx4r6W%2FaWXM9WxDkfVsaYXT%2BZFSPYoTq2QjRtWJndGXdIeMUHUmlLW2Qu%2Fx3h%2FDczmbt7DSuK%2BDVmJILForCVpJyYNqyNYjsiqMtQB%2FNuUHmKCm11l5HkbiCiZef0CVntvjOpYQN%2Bbvq5zWyhdII4Oqp1FgGhycx6RSza6vBoE87aZuHDyhHacjSIOvkACv3kK0GKeoM2ZIPAifJjEBTlRNsDu4X4AJIYV%2FrQGz0NqIG1ONH9Mz097kyuUjejySao2ZoPazf2BwYyuFm7NZznAD7U6TxyljGk81C9JoZaqf3eHdpX9meTdxnnnlaaJIMpgNAxNFbhR4yofCJS%2BF8v81aePqhKrLK0iAMapJr3cyrOYk%2FSa3JQgIg0GsTHMJjf1BmKkhBGFpxqilNl8LXzNU3QRkTN%2BRrUHMBYbC0QqTCp68p4xrNVqp2EUUMYirRID%2Fo8BKMJGGhr0GOqUBnkB7TpvOaEOnsUAYJ6PW%2F3V3yoTWp4gy8eRqsnqxxlcCqbdDDf87%2F1oZRcIZ2MoMi2HwwU9UAyU%2BHIivk7pvnZJMlP4xSgL2BeWunxz04Fekv5oAo4najE6GOh1xg9vRWq%2FidIQBh0JkR4WDyBXOsbEJ57YZS0BHpamsrY0I%2F35XTbPmkVc0%2FBIJpDHhSEgBQdcLfsyT7Ec94ynJbRXLqXef1Db1&X-Amz-Signature=b105412d33e8de199dcc7d39e07f440c5692aea9b6f5e796edf6831a35593784&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT7ZXEL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDWd4Z5gjJBEReyeMwFqMaahO6QqJI66xtH%2FmNIuy4%2BBwIgK1wZyiZLJxnh5rL6j1cOCicgzvXJW4%2BlqEdNZTH12N4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNU8GALhbqhP8Hq7OyrcAzbX4ToN40D46C0VdpyrUpd9EQewqipq%2FwN9xQPYjnmWuiqv54bbuplGoQpn4GF1l%2FUvTlfGWklvNj64d4bStNo%2FvFZ%2F9xJ3Cpp3%2BgKiS6rR4GbgbxSHU4LC8JSFB809JpRZKlPj2KlI7pqxmhYP%2BdO9OI8xYGYW7d2CYks5%2FvTQLvCyb6axsMx4r6W%2FaWXM9WxDkfVsaYXT%2BZFSPYoTq2QjRtWJndGXdIeMUHUmlLW2Qu%2Fx3h%2FDczmbt7DSuK%2BDVmJILForCVpJyYNqyNYjsiqMtQB%2FNuUHmKCm11l5HkbiCiZef0CVntvjOpYQN%2Bbvq5zWyhdII4Oqp1FgGhycx6RSza6vBoE87aZuHDyhHacjSIOvkACv3kK0GKeoM2ZIPAifJjEBTlRNsDu4X4AJIYV%2FrQGz0NqIG1ONH9Mz097kyuUjejySao2ZoPazf2BwYyuFm7NZznAD7U6TxyljGk81C9JoZaqf3eHdpX9meTdxnnnlaaJIMpgNAxNFbhR4yofCJS%2BF8v81aePqhKrLK0iAMapJr3cyrOYk%2FSa3JQgIg0GsTHMJjf1BmKkhBGFpxqilNl8LXzNU3QRkTN%2BRrUHMBYbC0QqTCp68p4xrNVqp2EUUMYirRID%2Fo8BKMJGGhr0GOqUBnkB7TpvOaEOnsUAYJ6PW%2F3V3yoTWp4gy8eRqsnqxxlcCqbdDDf87%2F1oZRcIZ2MoMi2HwwU9UAyU%2BHIivk7pvnZJMlP4xSgL2BeWunxz04Fekv5oAo4najE6GOh1xg9vRWq%2FidIQBh0JkR4WDyBXOsbEJ57YZS0BHpamsrY0I%2F35XTbPmkVc0%2FBIJpDHhSEgBQdcLfsyT7Ec94ynJbRXLqXef1Db1&X-Amz-Signature=cea65524172075373aba0c0549edafa45f4a883f8378b02719391f16106f508b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT7ZXEL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDWd4Z5gjJBEReyeMwFqMaahO6QqJI66xtH%2FmNIuy4%2BBwIgK1wZyiZLJxnh5rL6j1cOCicgzvXJW4%2BlqEdNZTH12N4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNU8GALhbqhP8Hq7OyrcAzbX4ToN40D46C0VdpyrUpd9EQewqipq%2FwN9xQPYjnmWuiqv54bbuplGoQpn4GF1l%2FUvTlfGWklvNj64d4bStNo%2FvFZ%2F9xJ3Cpp3%2BgKiS6rR4GbgbxSHU4LC8JSFB809JpRZKlPj2KlI7pqxmhYP%2BdO9OI8xYGYW7d2CYks5%2FvTQLvCyb6axsMx4r6W%2FaWXM9WxDkfVsaYXT%2BZFSPYoTq2QjRtWJndGXdIeMUHUmlLW2Qu%2Fx3h%2FDczmbt7DSuK%2BDVmJILForCVpJyYNqyNYjsiqMtQB%2FNuUHmKCm11l5HkbiCiZef0CVntvjOpYQN%2Bbvq5zWyhdII4Oqp1FgGhycx6RSza6vBoE87aZuHDyhHacjSIOvkACv3kK0GKeoM2ZIPAifJjEBTlRNsDu4X4AJIYV%2FrQGz0NqIG1ONH9Mz097kyuUjejySao2ZoPazf2BwYyuFm7NZznAD7U6TxyljGk81C9JoZaqf3eHdpX9meTdxnnnlaaJIMpgNAxNFbhR4yofCJS%2BF8v81aePqhKrLK0iAMapJr3cyrOYk%2FSa3JQgIg0GsTHMJjf1BmKkhBGFpxqilNl8LXzNU3QRkTN%2BRrUHMBYbC0QqTCp68p4xrNVqp2EUUMYirRID%2Fo8BKMJGGhr0GOqUBnkB7TpvOaEOnsUAYJ6PW%2F3V3yoTWp4gy8eRqsnqxxlcCqbdDDf87%2F1oZRcIZ2MoMi2HwwU9UAyU%2BHIivk7pvnZJMlP4xSgL2BeWunxz04Fekv5oAo4najE6GOh1xg9vRWq%2FidIQBh0JkR4WDyBXOsbEJ57YZS0BHpamsrY0I%2F35XTbPmkVc0%2FBIJpDHhSEgBQdcLfsyT7Ec94ynJbRXLqXef1Db1&X-Amz-Signature=7949890a75eae01b35b073fe2229d4c094262dcf6d6016691e0ec86a5f5b6910&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT7ZXEL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDWd4Z5gjJBEReyeMwFqMaahO6QqJI66xtH%2FmNIuy4%2BBwIgK1wZyiZLJxnh5rL6j1cOCicgzvXJW4%2BlqEdNZTH12N4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNU8GALhbqhP8Hq7OyrcAzbX4ToN40D46C0VdpyrUpd9EQewqipq%2FwN9xQPYjnmWuiqv54bbuplGoQpn4GF1l%2FUvTlfGWklvNj64d4bStNo%2FvFZ%2F9xJ3Cpp3%2BgKiS6rR4GbgbxSHU4LC8JSFB809JpRZKlPj2KlI7pqxmhYP%2BdO9OI8xYGYW7d2CYks5%2FvTQLvCyb6axsMx4r6W%2FaWXM9WxDkfVsaYXT%2BZFSPYoTq2QjRtWJndGXdIeMUHUmlLW2Qu%2Fx3h%2FDczmbt7DSuK%2BDVmJILForCVpJyYNqyNYjsiqMtQB%2FNuUHmKCm11l5HkbiCiZef0CVntvjOpYQN%2Bbvq5zWyhdII4Oqp1FgGhycx6RSza6vBoE87aZuHDyhHacjSIOvkACv3kK0GKeoM2ZIPAifJjEBTlRNsDu4X4AJIYV%2FrQGz0NqIG1ONH9Mz097kyuUjejySao2ZoPazf2BwYyuFm7NZznAD7U6TxyljGk81C9JoZaqf3eHdpX9meTdxnnnlaaJIMpgNAxNFbhR4yofCJS%2BF8v81aePqhKrLK0iAMapJr3cyrOYk%2FSa3JQgIg0GsTHMJjf1BmKkhBGFpxqilNl8LXzNU3QRkTN%2BRrUHMBYbC0QqTCp68p4xrNVqp2EUUMYirRID%2Fo8BKMJGGhr0GOqUBnkB7TpvOaEOnsUAYJ6PW%2F3V3yoTWp4gy8eRqsnqxxlcCqbdDDf87%2F1oZRcIZ2MoMi2HwwU9UAyU%2BHIivk7pvnZJMlP4xSgL2BeWunxz04Fekv5oAo4najE6GOh1xg9vRWq%2FidIQBh0JkR4WDyBXOsbEJ57YZS0BHpamsrY0I%2F35XTbPmkVc0%2FBIJpDHhSEgBQdcLfsyT7Ec94ynJbRXLqXef1Db1&X-Amz-Signature=a17f01759fdf2f8733888a3fa324ac4e4b5dcb1b25cb7d3d82410fa2c8679942&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT7ZXEL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDWd4Z5gjJBEReyeMwFqMaahO6QqJI66xtH%2FmNIuy4%2BBwIgK1wZyiZLJxnh5rL6j1cOCicgzvXJW4%2BlqEdNZTH12N4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNU8GALhbqhP8Hq7OyrcAzbX4ToN40D46C0VdpyrUpd9EQewqipq%2FwN9xQPYjnmWuiqv54bbuplGoQpn4GF1l%2FUvTlfGWklvNj64d4bStNo%2FvFZ%2F9xJ3Cpp3%2BgKiS6rR4GbgbxSHU4LC8JSFB809JpRZKlPj2KlI7pqxmhYP%2BdO9OI8xYGYW7d2CYks5%2FvTQLvCyb6axsMx4r6W%2FaWXM9WxDkfVsaYXT%2BZFSPYoTq2QjRtWJndGXdIeMUHUmlLW2Qu%2Fx3h%2FDczmbt7DSuK%2BDVmJILForCVpJyYNqyNYjsiqMtQB%2FNuUHmKCm11l5HkbiCiZef0CVntvjOpYQN%2Bbvq5zWyhdII4Oqp1FgGhycx6RSza6vBoE87aZuHDyhHacjSIOvkACv3kK0GKeoM2ZIPAifJjEBTlRNsDu4X4AJIYV%2FrQGz0NqIG1ONH9Mz097kyuUjejySao2ZoPazf2BwYyuFm7NZznAD7U6TxyljGk81C9JoZaqf3eHdpX9meTdxnnnlaaJIMpgNAxNFbhR4yofCJS%2BF8v81aePqhKrLK0iAMapJr3cyrOYk%2FSa3JQgIg0GsTHMJjf1BmKkhBGFpxqilNl8LXzNU3QRkTN%2BRrUHMBYbC0QqTCp68p4xrNVqp2EUUMYirRID%2Fo8BKMJGGhr0GOqUBnkB7TpvOaEOnsUAYJ6PW%2F3V3yoTWp4gy8eRqsnqxxlcCqbdDDf87%2F1oZRcIZ2MoMi2HwwU9UAyU%2BHIivk7pvnZJMlP4xSgL2BeWunxz04Fekv5oAo4najE6GOh1xg9vRWq%2FidIQBh0JkR4WDyBXOsbEJ57YZS0BHpamsrY0I%2F35XTbPmkVc0%2FBIJpDHhSEgBQdcLfsyT7Ec94ynJbRXLqXef1Db1&X-Amz-Signature=87d42e4d2ad19c34fd323e811de636c1fd8f2c333f37b62697880f42fa8c9924&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URT7ZXEL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDWd4Z5gjJBEReyeMwFqMaahO6QqJI66xtH%2FmNIuy4%2BBwIgK1wZyiZLJxnh5rL6j1cOCicgzvXJW4%2BlqEdNZTH12N4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNU8GALhbqhP8Hq7OyrcAzbX4ToN40D46C0VdpyrUpd9EQewqipq%2FwN9xQPYjnmWuiqv54bbuplGoQpn4GF1l%2FUvTlfGWklvNj64d4bStNo%2FvFZ%2F9xJ3Cpp3%2BgKiS6rR4GbgbxSHU4LC8JSFB809JpRZKlPj2KlI7pqxmhYP%2BdO9OI8xYGYW7d2CYks5%2FvTQLvCyb6axsMx4r6W%2FaWXM9WxDkfVsaYXT%2BZFSPYoTq2QjRtWJndGXdIeMUHUmlLW2Qu%2Fx3h%2FDczmbt7DSuK%2BDVmJILForCVpJyYNqyNYjsiqMtQB%2FNuUHmKCm11l5HkbiCiZef0CVntvjOpYQN%2Bbvq5zWyhdII4Oqp1FgGhycx6RSza6vBoE87aZuHDyhHacjSIOvkACv3kK0GKeoM2ZIPAifJjEBTlRNsDu4X4AJIYV%2FrQGz0NqIG1ONH9Mz097kyuUjejySao2ZoPazf2BwYyuFm7NZznAD7U6TxyljGk81C9JoZaqf3eHdpX9meTdxnnnlaaJIMpgNAxNFbhR4yofCJS%2BF8v81aePqhKrLK0iAMapJr3cyrOYk%2FSa3JQgIg0GsTHMJjf1BmKkhBGFpxqilNl8LXzNU3QRkTN%2BRrUHMBYbC0QqTCp68p4xrNVqp2EUUMYirRID%2Fo8BKMJGGhr0GOqUBnkB7TpvOaEOnsUAYJ6PW%2F3V3yoTWp4gy8eRqsnqxxlcCqbdDDf87%2F1oZRcIZ2MoMi2HwwU9UAyU%2BHIivk7pvnZJMlP4xSgL2BeWunxz04Fekv5oAo4najE6GOh1xg9vRWq%2FidIQBh0JkR4WDyBXOsbEJ57YZS0BHpamsrY0I%2F35XTbPmkVc0%2FBIJpDHhSEgBQdcLfsyT7Ec94ynJbRXLqXef1Db1&X-Amz-Signature=f6119934852d420defbefef4a851f994266eec268df6d22eb63f0509772e2997&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
