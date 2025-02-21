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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPU6EPUI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9waG1mOc48NJvs9oGktcKmGMBBT2sdwf%2B8ecb2SXjwIgBrJrGEXq7ErvfVLLv7GIekBVTKaKHabwAsS36sTlN3cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeo4iRkCcb9uSwwEyrcAzXS6GjBQ%2BxfdoUBFqtGB%2F6otsgZUnFQ5KMsAUNacisR78UmOSkqU%2FSj6aveA7Yzdlw12Q7b1%2FiNN80lrOfgFaqbG4QfEBypi8ZW%2FyfI%2BOnU%2Fz%2BcTjsYQZiQQTvUqQws0tsr2IcwBXJi6CiVVW4PgPl1nbDHUp2Ga3peqpsAivz9IunQ5ukTpsiJ8b2My9Gk9oC7kVEMrY6bswAKR8NzjRmWq9F7oMhXk65OIN%2F5fBbxzKiiCRO46Og5QSln8drm38a2mmg8%2BV1cuaO0es4eljlPGq%2Fx1NcvMS3chq0iRWHIXXpAG2FLAjYZOUTI94OtrJV0QjRL2IldUGM%2BLex8lQ7yTagtxfIcwavBc5Ikq2vRFgbUF8fLsYAqs3NqZS4rs0eDuSVV1pytCKZp%2BmqpEA3%2B0dZXLzMkOcpTcuB1B3N611lcOq2kbgu9nGez9Kh0tuH3vRwnKnbFr%2BmG%2FzVgODFVJM%2Bd01kJHIe8yOGZKpRcp2LhjTSPWPLqJBcpVWDll5zHlgWPPxTYnkhRuXgIfYKjJSVlT01LjATN%2BZ8bdFWqvBLFli6rxP81Fc2DyxSj8aiuR2sKpWbXSNI5LJHoc%2BdTPp2%2FM9So56S8m34pX2f7N%2FutCMWS7U0vbi0vMISC4r0GOqUBYd5dwHar8j7N8eMvef2OTVaoIPnQ4SexlS4LDG6XkXv0sVgSshqQLhm8OSyva4kcdQvBdJQ5LXeKPznY4nn3i%2Fgux%2BuEaUKNTlm3sZ%2BmoXNkBu4cL8C27rOlHIWNEANDvrnYX6EdtQ%2F1Ek7FzL68VyHAWD44Pjp9dGaHrE46q0OTV0H%2Bd%2FT3hP6H65yrjL7EG3BhFdMmevMUyn%2FRckJUVue%2FBNvR&X-Amz-Signature=ebb0b737846634ff2a1d5c47e0c85f89a211d7217a788a7d3eff1803f48be957&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPU6EPUI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9waG1mOc48NJvs9oGktcKmGMBBT2sdwf%2B8ecb2SXjwIgBrJrGEXq7ErvfVLLv7GIekBVTKaKHabwAsS36sTlN3cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeo4iRkCcb9uSwwEyrcAzXS6GjBQ%2BxfdoUBFqtGB%2F6otsgZUnFQ5KMsAUNacisR78UmOSkqU%2FSj6aveA7Yzdlw12Q7b1%2FiNN80lrOfgFaqbG4QfEBypi8ZW%2FyfI%2BOnU%2Fz%2BcTjsYQZiQQTvUqQws0tsr2IcwBXJi6CiVVW4PgPl1nbDHUp2Ga3peqpsAivz9IunQ5ukTpsiJ8b2My9Gk9oC7kVEMrY6bswAKR8NzjRmWq9F7oMhXk65OIN%2F5fBbxzKiiCRO46Og5QSln8drm38a2mmg8%2BV1cuaO0es4eljlPGq%2Fx1NcvMS3chq0iRWHIXXpAG2FLAjYZOUTI94OtrJV0QjRL2IldUGM%2BLex8lQ7yTagtxfIcwavBc5Ikq2vRFgbUF8fLsYAqs3NqZS4rs0eDuSVV1pytCKZp%2BmqpEA3%2B0dZXLzMkOcpTcuB1B3N611lcOq2kbgu9nGez9Kh0tuH3vRwnKnbFr%2BmG%2FzVgODFVJM%2Bd01kJHIe8yOGZKpRcp2LhjTSPWPLqJBcpVWDll5zHlgWPPxTYnkhRuXgIfYKjJSVlT01LjATN%2BZ8bdFWqvBLFli6rxP81Fc2DyxSj8aiuR2sKpWbXSNI5LJHoc%2BdTPp2%2FM9So56S8m34pX2f7N%2FutCMWS7U0vbi0vMISC4r0GOqUBYd5dwHar8j7N8eMvef2OTVaoIPnQ4SexlS4LDG6XkXv0sVgSshqQLhm8OSyva4kcdQvBdJQ5LXeKPznY4nn3i%2Fgux%2BuEaUKNTlm3sZ%2BmoXNkBu4cL8C27rOlHIWNEANDvrnYX6EdtQ%2F1Ek7FzL68VyHAWD44Pjp9dGaHrE46q0OTV0H%2Bd%2FT3hP6H65yrjL7EG3BhFdMmevMUyn%2FRckJUVue%2FBNvR&X-Amz-Signature=1443d4a8cc45077f61438d7d6af47019a5889fb868306b60e1f25cbcd5fdfb8b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPU6EPUI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9waG1mOc48NJvs9oGktcKmGMBBT2sdwf%2B8ecb2SXjwIgBrJrGEXq7ErvfVLLv7GIekBVTKaKHabwAsS36sTlN3cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeo4iRkCcb9uSwwEyrcAzXS6GjBQ%2BxfdoUBFqtGB%2F6otsgZUnFQ5KMsAUNacisR78UmOSkqU%2FSj6aveA7Yzdlw12Q7b1%2FiNN80lrOfgFaqbG4QfEBypi8ZW%2FyfI%2BOnU%2Fz%2BcTjsYQZiQQTvUqQws0tsr2IcwBXJi6CiVVW4PgPl1nbDHUp2Ga3peqpsAivz9IunQ5ukTpsiJ8b2My9Gk9oC7kVEMrY6bswAKR8NzjRmWq9F7oMhXk65OIN%2F5fBbxzKiiCRO46Og5QSln8drm38a2mmg8%2BV1cuaO0es4eljlPGq%2Fx1NcvMS3chq0iRWHIXXpAG2FLAjYZOUTI94OtrJV0QjRL2IldUGM%2BLex8lQ7yTagtxfIcwavBc5Ikq2vRFgbUF8fLsYAqs3NqZS4rs0eDuSVV1pytCKZp%2BmqpEA3%2B0dZXLzMkOcpTcuB1B3N611lcOq2kbgu9nGez9Kh0tuH3vRwnKnbFr%2BmG%2FzVgODFVJM%2Bd01kJHIe8yOGZKpRcp2LhjTSPWPLqJBcpVWDll5zHlgWPPxTYnkhRuXgIfYKjJSVlT01LjATN%2BZ8bdFWqvBLFli6rxP81Fc2DyxSj8aiuR2sKpWbXSNI5LJHoc%2BdTPp2%2FM9So56S8m34pX2f7N%2FutCMWS7U0vbi0vMISC4r0GOqUBYd5dwHar8j7N8eMvef2OTVaoIPnQ4SexlS4LDG6XkXv0sVgSshqQLhm8OSyva4kcdQvBdJQ5LXeKPznY4nn3i%2Fgux%2BuEaUKNTlm3sZ%2BmoXNkBu4cL8C27rOlHIWNEANDvrnYX6EdtQ%2F1Ek7FzL68VyHAWD44Pjp9dGaHrE46q0OTV0H%2Bd%2FT3hP6H65yrjL7EG3BhFdMmevMUyn%2FRckJUVue%2FBNvR&X-Amz-Signature=15377b16f29f37938a7aaeef5a52158f9da1f07af7ab7c9b3c9108572ddf4a00&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPU6EPUI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9waG1mOc48NJvs9oGktcKmGMBBT2sdwf%2B8ecb2SXjwIgBrJrGEXq7ErvfVLLv7GIekBVTKaKHabwAsS36sTlN3cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeo4iRkCcb9uSwwEyrcAzXS6GjBQ%2BxfdoUBFqtGB%2F6otsgZUnFQ5KMsAUNacisR78UmOSkqU%2FSj6aveA7Yzdlw12Q7b1%2FiNN80lrOfgFaqbG4QfEBypi8ZW%2FyfI%2BOnU%2Fz%2BcTjsYQZiQQTvUqQws0tsr2IcwBXJi6CiVVW4PgPl1nbDHUp2Ga3peqpsAivz9IunQ5ukTpsiJ8b2My9Gk9oC7kVEMrY6bswAKR8NzjRmWq9F7oMhXk65OIN%2F5fBbxzKiiCRO46Og5QSln8drm38a2mmg8%2BV1cuaO0es4eljlPGq%2Fx1NcvMS3chq0iRWHIXXpAG2FLAjYZOUTI94OtrJV0QjRL2IldUGM%2BLex8lQ7yTagtxfIcwavBc5Ikq2vRFgbUF8fLsYAqs3NqZS4rs0eDuSVV1pytCKZp%2BmqpEA3%2B0dZXLzMkOcpTcuB1B3N611lcOq2kbgu9nGez9Kh0tuH3vRwnKnbFr%2BmG%2FzVgODFVJM%2Bd01kJHIe8yOGZKpRcp2LhjTSPWPLqJBcpVWDll5zHlgWPPxTYnkhRuXgIfYKjJSVlT01LjATN%2BZ8bdFWqvBLFli6rxP81Fc2DyxSj8aiuR2sKpWbXSNI5LJHoc%2BdTPp2%2FM9So56S8m34pX2f7N%2FutCMWS7U0vbi0vMISC4r0GOqUBYd5dwHar8j7N8eMvef2OTVaoIPnQ4SexlS4LDG6XkXv0sVgSshqQLhm8OSyva4kcdQvBdJQ5LXeKPznY4nn3i%2Fgux%2BuEaUKNTlm3sZ%2BmoXNkBu4cL8C27rOlHIWNEANDvrnYX6EdtQ%2F1Ek7FzL68VyHAWD44Pjp9dGaHrE46q0OTV0H%2Bd%2FT3hP6H65yrjL7EG3BhFdMmevMUyn%2FRckJUVue%2FBNvR&X-Amz-Signature=2746147974248ebf2c9f0fb8cfc873860a556e398112c33d201bdeeef4d902d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPU6EPUI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9waG1mOc48NJvs9oGktcKmGMBBT2sdwf%2B8ecb2SXjwIgBrJrGEXq7ErvfVLLv7GIekBVTKaKHabwAsS36sTlN3cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeo4iRkCcb9uSwwEyrcAzXS6GjBQ%2BxfdoUBFqtGB%2F6otsgZUnFQ5KMsAUNacisR78UmOSkqU%2FSj6aveA7Yzdlw12Q7b1%2FiNN80lrOfgFaqbG4QfEBypi8ZW%2FyfI%2BOnU%2Fz%2BcTjsYQZiQQTvUqQws0tsr2IcwBXJi6CiVVW4PgPl1nbDHUp2Ga3peqpsAivz9IunQ5ukTpsiJ8b2My9Gk9oC7kVEMrY6bswAKR8NzjRmWq9F7oMhXk65OIN%2F5fBbxzKiiCRO46Og5QSln8drm38a2mmg8%2BV1cuaO0es4eljlPGq%2Fx1NcvMS3chq0iRWHIXXpAG2FLAjYZOUTI94OtrJV0QjRL2IldUGM%2BLex8lQ7yTagtxfIcwavBc5Ikq2vRFgbUF8fLsYAqs3NqZS4rs0eDuSVV1pytCKZp%2BmqpEA3%2B0dZXLzMkOcpTcuB1B3N611lcOq2kbgu9nGez9Kh0tuH3vRwnKnbFr%2BmG%2FzVgODFVJM%2Bd01kJHIe8yOGZKpRcp2LhjTSPWPLqJBcpVWDll5zHlgWPPxTYnkhRuXgIfYKjJSVlT01LjATN%2BZ8bdFWqvBLFli6rxP81Fc2DyxSj8aiuR2sKpWbXSNI5LJHoc%2BdTPp2%2FM9So56S8m34pX2f7N%2FutCMWS7U0vbi0vMISC4r0GOqUBYd5dwHar8j7N8eMvef2OTVaoIPnQ4SexlS4LDG6XkXv0sVgSshqQLhm8OSyva4kcdQvBdJQ5LXeKPznY4nn3i%2Fgux%2BuEaUKNTlm3sZ%2BmoXNkBu4cL8C27rOlHIWNEANDvrnYX6EdtQ%2F1Ek7FzL68VyHAWD44Pjp9dGaHrE46q0OTV0H%2Bd%2FT3hP6H65yrjL7EG3BhFdMmevMUyn%2FRckJUVue%2FBNvR&X-Amz-Signature=d4a8a4203f21d02c04364fd19212d25275b027e3f715cc2f19365f62a815cd97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPU6EPUI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9waG1mOc48NJvs9oGktcKmGMBBT2sdwf%2B8ecb2SXjwIgBrJrGEXq7ErvfVLLv7GIekBVTKaKHabwAsS36sTlN3cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeo4iRkCcb9uSwwEyrcAzXS6GjBQ%2BxfdoUBFqtGB%2F6otsgZUnFQ5KMsAUNacisR78UmOSkqU%2FSj6aveA7Yzdlw12Q7b1%2FiNN80lrOfgFaqbG4QfEBypi8ZW%2FyfI%2BOnU%2Fz%2BcTjsYQZiQQTvUqQws0tsr2IcwBXJi6CiVVW4PgPl1nbDHUp2Ga3peqpsAivz9IunQ5ukTpsiJ8b2My9Gk9oC7kVEMrY6bswAKR8NzjRmWq9F7oMhXk65OIN%2F5fBbxzKiiCRO46Og5QSln8drm38a2mmg8%2BV1cuaO0es4eljlPGq%2Fx1NcvMS3chq0iRWHIXXpAG2FLAjYZOUTI94OtrJV0QjRL2IldUGM%2BLex8lQ7yTagtxfIcwavBc5Ikq2vRFgbUF8fLsYAqs3NqZS4rs0eDuSVV1pytCKZp%2BmqpEA3%2B0dZXLzMkOcpTcuB1B3N611lcOq2kbgu9nGez9Kh0tuH3vRwnKnbFr%2BmG%2FzVgODFVJM%2Bd01kJHIe8yOGZKpRcp2LhjTSPWPLqJBcpVWDll5zHlgWPPxTYnkhRuXgIfYKjJSVlT01LjATN%2BZ8bdFWqvBLFli6rxP81Fc2DyxSj8aiuR2sKpWbXSNI5LJHoc%2BdTPp2%2FM9So56S8m34pX2f7N%2FutCMWS7U0vbi0vMISC4r0GOqUBYd5dwHar8j7N8eMvef2OTVaoIPnQ4SexlS4LDG6XkXv0sVgSshqQLhm8OSyva4kcdQvBdJQ5LXeKPznY4nn3i%2Fgux%2BuEaUKNTlm3sZ%2BmoXNkBu4cL8C27rOlHIWNEANDvrnYX6EdtQ%2F1Ek7FzL68VyHAWD44Pjp9dGaHrE46q0OTV0H%2Bd%2FT3hP6H65yrjL7EG3BhFdMmevMUyn%2FRckJUVue%2FBNvR&X-Amz-Signature=8f2f17063cba0aaedf671f92f2816a158098e7f639d3bbe95b5a8dd427b16c58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPU6EPUI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9waG1mOc48NJvs9oGktcKmGMBBT2sdwf%2B8ecb2SXjwIgBrJrGEXq7ErvfVLLv7GIekBVTKaKHabwAsS36sTlN3cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeo4iRkCcb9uSwwEyrcAzXS6GjBQ%2BxfdoUBFqtGB%2F6otsgZUnFQ5KMsAUNacisR78UmOSkqU%2FSj6aveA7Yzdlw12Q7b1%2FiNN80lrOfgFaqbG4QfEBypi8ZW%2FyfI%2BOnU%2Fz%2BcTjsYQZiQQTvUqQws0tsr2IcwBXJi6CiVVW4PgPl1nbDHUp2Ga3peqpsAivz9IunQ5ukTpsiJ8b2My9Gk9oC7kVEMrY6bswAKR8NzjRmWq9F7oMhXk65OIN%2F5fBbxzKiiCRO46Og5QSln8drm38a2mmg8%2BV1cuaO0es4eljlPGq%2Fx1NcvMS3chq0iRWHIXXpAG2FLAjYZOUTI94OtrJV0QjRL2IldUGM%2BLex8lQ7yTagtxfIcwavBc5Ikq2vRFgbUF8fLsYAqs3NqZS4rs0eDuSVV1pytCKZp%2BmqpEA3%2B0dZXLzMkOcpTcuB1B3N611lcOq2kbgu9nGez9Kh0tuH3vRwnKnbFr%2BmG%2FzVgODFVJM%2Bd01kJHIe8yOGZKpRcp2LhjTSPWPLqJBcpVWDll5zHlgWPPxTYnkhRuXgIfYKjJSVlT01LjATN%2BZ8bdFWqvBLFli6rxP81Fc2DyxSj8aiuR2sKpWbXSNI5LJHoc%2BdTPp2%2FM9So56S8m34pX2f7N%2FutCMWS7U0vbi0vMISC4r0GOqUBYd5dwHar8j7N8eMvef2OTVaoIPnQ4SexlS4LDG6XkXv0sVgSshqQLhm8OSyva4kcdQvBdJQ5LXeKPznY4nn3i%2Fgux%2BuEaUKNTlm3sZ%2BmoXNkBu4cL8C27rOlHIWNEANDvrnYX6EdtQ%2F1Ek7FzL68VyHAWD44Pjp9dGaHrE46q0OTV0H%2Bd%2FT3hP6H65yrjL7EG3BhFdMmevMUyn%2FRckJUVue%2FBNvR&X-Amz-Signature=563f4c398cd8daac71315ff7048cf5f7652a6e6b0c311892665a411126b658dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPU6EPUI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9waG1mOc48NJvs9oGktcKmGMBBT2sdwf%2B8ecb2SXjwIgBrJrGEXq7ErvfVLLv7GIekBVTKaKHabwAsS36sTlN3cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeo4iRkCcb9uSwwEyrcAzXS6GjBQ%2BxfdoUBFqtGB%2F6otsgZUnFQ5KMsAUNacisR78UmOSkqU%2FSj6aveA7Yzdlw12Q7b1%2FiNN80lrOfgFaqbG4QfEBypi8ZW%2FyfI%2BOnU%2Fz%2BcTjsYQZiQQTvUqQws0tsr2IcwBXJi6CiVVW4PgPl1nbDHUp2Ga3peqpsAivz9IunQ5ukTpsiJ8b2My9Gk9oC7kVEMrY6bswAKR8NzjRmWq9F7oMhXk65OIN%2F5fBbxzKiiCRO46Og5QSln8drm38a2mmg8%2BV1cuaO0es4eljlPGq%2Fx1NcvMS3chq0iRWHIXXpAG2FLAjYZOUTI94OtrJV0QjRL2IldUGM%2BLex8lQ7yTagtxfIcwavBc5Ikq2vRFgbUF8fLsYAqs3NqZS4rs0eDuSVV1pytCKZp%2BmqpEA3%2B0dZXLzMkOcpTcuB1B3N611lcOq2kbgu9nGez9Kh0tuH3vRwnKnbFr%2BmG%2FzVgODFVJM%2Bd01kJHIe8yOGZKpRcp2LhjTSPWPLqJBcpVWDll5zHlgWPPxTYnkhRuXgIfYKjJSVlT01LjATN%2BZ8bdFWqvBLFli6rxP81Fc2DyxSj8aiuR2sKpWbXSNI5LJHoc%2BdTPp2%2FM9So56S8m34pX2f7N%2FutCMWS7U0vbi0vMISC4r0GOqUBYd5dwHar8j7N8eMvef2OTVaoIPnQ4SexlS4LDG6XkXv0sVgSshqQLhm8OSyva4kcdQvBdJQ5LXeKPznY4nn3i%2Fgux%2BuEaUKNTlm3sZ%2BmoXNkBu4cL8C27rOlHIWNEANDvrnYX6EdtQ%2F1Ek7FzL68VyHAWD44Pjp9dGaHrE46q0OTV0H%2Bd%2FT3hP6H65yrjL7EG3BhFdMmevMUyn%2FRckJUVue%2FBNvR&X-Amz-Signature=ce5b2e5311ec9967acc16dd272406c2f9885d7eb399662c2d8127095b51145ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
