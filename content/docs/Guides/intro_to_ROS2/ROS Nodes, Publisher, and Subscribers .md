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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RU4C7Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPaMjym4GzUUMcxQudlCSyLPas6Uqo67GD%2FYTDPfIwAiEAvAybd9O16%2Fr8o5tkPdHXygJ%2F3fc8awkxag71GAIAjbkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr%2BeJ2V%2FeyHt4ZiEircA5gfkO33GC%2B1VQqWa5mQwCRMXG2%2B650V8Ouhvea14krjrxV%2FSNlbjEJNJom9CO2kVOR8sHdnt40PFk2WK%2ByQJgXDkKcSKnYbmAoCRZlghanFTm9j910LRsK%2BhITYmxOp7126au8CPoHPTzyJFI8yahS5x012rryWAvguCOTRhbNS%2BR7HrqUfxHpadL38AnO1iGqqwzQNJCWCAdh8%2B%2FWIeZIjXqIceEOj%2BLmnJU3r989pDRH4iMNnhnHCN443Zppn%2Fh9DxgDs4mZUFPRtRHzTbGcYrQvdbzgW6o6KzA99MC%2BUyKIdRGkAxEn6C0w50W7BKB9uEtktT6c1oMFBjIJ9cAxh%2By5JRGZvZIM%2FOGDwsdp6JsWRGwwDK1BGUacROY%2BDuRv7flKpE2raySdWWyNRycJNpjyWvM8kMSPLPTnuI4OKvz3hsm0JpyJ3i%2BEz10wjq02eYyBBIMohYilVhjmyAvHVxq7Ogz546wG%2BoX7o3pdDUijSF4FqUWVqARzahcQf0A41kZ5DPAHYOx5ZexbfAvZmdiXPnshG%2BoOe6ULjGxnOvHay0drY9ztMKoTJ9UlqPbz5B4FExoPJAv27%2B3ttcutiobMCnG%2FnUNwfJFjBuFlg1cinXST3fzWBGhZYMLbYzMMGOqUB%2FydcYUdQ6FIinhC7qOtNUCRLbGOlK%2B2kuw6pWQmfxloNixGU2iW6URCgos3J8sVoyM202Pgf2OFTMHRNbIs2PVd5umyX23T8YknxkHn8h8F%2FnEIm9IS5Ni2UFpzgplc6xJcKVsRmltTiIGT4r3VgnTj4G7L9BGmEZNBoxPrloeRh8HWypKRdn1BaJgINBWQrBT%2BfrBKU%2BB07Y0cCdD8nuK9465og&X-Amz-Signature=3d0380f55886330b8e38f9b3d996570e832b6b0fd90660efbf0bd6101e6193fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RU4C7Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPaMjym4GzUUMcxQudlCSyLPas6Uqo67GD%2FYTDPfIwAiEAvAybd9O16%2Fr8o5tkPdHXygJ%2F3fc8awkxag71GAIAjbkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr%2BeJ2V%2FeyHt4ZiEircA5gfkO33GC%2B1VQqWa5mQwCRMXG2%2B650V8Ouhvea14krjrxV%2FSNlbjEJNJom9CO2kVOR8sHdnt40PFk2WK%2ByQJgXDkKcSKnYbmAoCRZlghanFTm9j910LRsK%2BhITYmxOp7126au8CPoHPTzyJFI8yahS5x012rryWAvguCOTRhbNS%2BR7HrqUfxHpadL38AnO1iGqqwzQNJCWCAdh8%2B%2FWIeZIjXqIceEOj%2BLmnJU3r989pDRH4iMNnhnHCN443Zppn%2Fh9DxgDs4mZUFPRtRHzTbGcYrQvdbzgW6o6KzA99MC%2BUyKIdRGkAxEn6C0w50W7BKB9uEtktT6c1oMFBjIJ9cAxh%2By5JRGZvZIM%2FOGDwsdp6JsWRGwwDK1BGUacROY%2BDuRv7flKpE2raySdWWyNRycJNpjyWvM8kMSPLPTnuI4OKvz3hsm0JpyJ3i%2BEz10wjq02eYyBBIMohYilVhjmyAvHVxq7Ogz546wG%2BoX7o3pdDUijSF4FqUWVqARzahcQf0A41kZ5DPAHYOx5ZexbfAvZmdiXPnshG%2BoOe6ULjGxnOvHay0drY9ztMKoTJ9UlqPbz5B4FExoPJAv27%2B3ttcutiobMCnG%2FnUNwfJFjBuFlg1cinXST3fzWBGhZYMLbYzMMGOqUB%2FydcYUdQ6FIinhC7qOtNUCRLbGOlK%2B2kuw6pWQmfxloNixGU2iW6URCgos3J8sVoyM202Pgf2OFTMHRNbIs2PVd5umyX23T8YknxkHn8h8F%2FnEIm9IS5Ni2UFpzgplc6xJcKVsRmltTiIGT4r3VgnTj4G7L9BGmEZNBoxPrloeRh8HWypKRdn1BaJgINBWQrBT%2BfrBKU%2BB07Y0cCdD8nuK9465og&X-Amz-Signature=f90cf1dc40ab9e5cacb7442095a67648369ab0cff1943bbdc38724fcb721c48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RU4C7Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPaMjym4GzUUMcxQudlCSyLPas6Uqo67GD%2FYTDPfIwAiEAvAybd9O16%2Fr8o5tkPdHXygJ%2F3fc8awkxag71GAIAjbkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr%2BeJ2V%2FeyHt4ZiEircA5gfkO33GC%2B1VQqWa5mQwCRMXG2%2B650V8Ouhvea14krjrxV%2FSNlbjEJNJom9CO2kVOR8sHdnt40PFk2WK%2ByQJgXDkKcSKnYbmAoCRZlghanFTm9j910LRsK%2BhITYmxOp7126au8CPoHPTzyJFI8yahS5x012rryWAvguCOTRhbNS%2BR7HrqUfxHpadL38AnO1iGqqwzQNJCWCAdh8%2B%2FWIeZIjXqIceEOj%2BLmnJU3r989pDRH4iMNnhnHCN443Zppn%2Fh9DxgDs4mZUFPRtRHzTbGcYrQvdbzgW6o6KzA99MC%2BUyKIdRGkAxEn6C0w50W7BKB9uEtktT6c1oMFBjIJ9cAxh%2By5JRGZvZIM%2FOGDwsdp6JsWRGwwDK1BGUacROY%2BDuRv7flKpE2raySdWWyNRycJNpjyWvM8kMSPLPTnuI4OKvz3hsm0JpyJ3i%2BEz10wjq02eYyBBIMohYilVhjmyAvHVxq7Ogz546wG%2BoX7o3pdDUijSF4FqUWVqARzahcQf0A41kZ5DPAHYOx5ZexbfAvZmdiXPnshG%2BoOe6ULjGxnOvHay0drY9ztMKoTJ9UlqPbz5B4FExoPJAv27%2B3ttcutiobMCnG%2FnUNwfJFjBuFlg1cinXST3fzWBGhZYMLbYzMMGOqUB%2FydcYUdQ6FIinhC7qOtNUCRLbGOlK%2B2kuw6pWQmfxloNixGU2iW6URCgos3J8sVoyM202Pgf2OFTMHRNbIs2PVd5umyX23T8YknxkHn8h8F%2FnEIm9IS5Ni2UFpzgplc6xJcKVsRmltTiIGT4r3VgnTj4G7L9BGmEZNBoxPrloeRh8HWypKRdn1BaJgINBWQrBT%2BfrBKU%2BB07Y0cCdD8nuK9465og&X-Amz-Signature=8497d34ad442546c1bccddf89aa797ca5dba219825405c9dcbaa0211ab4d19c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RU4C7Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPaMjym4GzUUMcxQudlCSyLPas6Uqo67GD%2FYTDPfIwAiEAvAybd9O16%2Fr8o5tkPdHXygJ%2F3fc8awkxag71GAIAjbkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr%2BeJ2V%2FeyHt4ZiEircA5gfkO33GC%2B1VQqWa5mQwCRMXG2%2B650V8Ouhvea14krjrxV%2FSNlbjEJNJom9CO2kVOR8sHdnt40PFk2WK%2ByQJgXDkKcSKnYbmAoCRZlghanFTm9j910LRsK%2BhITYmxOp7126au8CPoHPTzyJFI8yahS5x012rryWAvguCOTRhbNS%2BR7HrqUfxHpadL38AnO1iGqqwzQNJCWCAdh8%2B%2FWIeZIjXqIceEOj%2BLmnJU3r989pDRH4iMNnhnHCN443Zppn%2Fh9DxgDs4mZUFPRtRHzTbGcYrQvdbzgW6o6KzA99MC%2BUyKIdRGkAxEn6C0w50W7BKB9uEtktT6c1oMFBjIJ9cAxh%2By5JRGZvZIM%2FOGDwsdp6JsWRGwwDK1BGUacROY%2BDuRv7flKpE2raySdWWyNRycJNpjyWvM8kMSPLPTnuI4OKvz3hsm0JpyJ3i%2BEz10wjq02eYyBBIMohYilVhjmyAvHVxq7Ogz546wG%2BoX7o3pdDUijSF4FqUWVqARzahcQf0A41kZ5DPAHYOx5ZexbfAvZmdiXPnshG%2BoOe6ULjGxnOvHay0drY9ztMKoTJ9UlqPbz5B4FExoPJAv27%2B3ttcutiobMCnG%2FnUNwfJFjBuFlg1cinXST3fzWBGhZYMLbYzMMGOqUB%2FydcYUdQ6FIinhC7qOtNUCRLbGOlK%2B2kuw6pWQmfxloNixGU2iW6URCgos3J8sVoyM202Pgf2OFTMHRNbIs2PVd5umyX23T8YknxkHn8h8F%2FnEIm9IS5Ni2UFpzgplc6xJcKVsRmltTiIGT4r3VgnTj4G7L9BGmEZNBoxPrloeRh8HWypKRdn1BaJgINBWQrBT%2BfrBKU%2BB07Y0cCdD8nuK9465og&X-Amz-Signature=70ebd31a9b4954bee28ff0a93b1defced1a6f07b02e6e487e9f2b11bd3bc2902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RU4C7Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPaMjym4GzUUMcxQudlCSyLPas6Uqo67GD%2FYTDPfIwAiEAvAybd9O16%2Fr8o5tkPdHXygJ%2F3fc8awkxag71GAIAjbkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr%2BeJ2V%2FeyHt4ZiEircA5gfkO33GC%2B1VQqWa5mQwCRMXG2%2B650V8Ouhvea14krjrxV%2FSNlbjEJNJom9CO2kVOR8sHdnt40PFk2WK%2ByQJgXDkKcSKnYbmAoCRZlghanFTm9j910LRsK%2BhITYmxOp7126au8CPoHPTzyJFI8yahS5x012rryWAvguCOTRhbNS%2BR7HrqUfxHpadL38AnO1iGqqwzQNJCWCAdh8%2B%2FWIeZIjXqIceEOj%2BLmnJU3r989pDRH4iMNnhnHCN443Zppn%2Fh9DxgDs4mZUFPRtRHzTbGcYrQvdbzgW6o6KzA99MC%2BUyKIdRGkAxEn6C0w50W7BKB9uEtktT6c1oMFBjIJ9cAxh%2By5JRGZvZIM%2FOGDwsdp6JsWRGwwDK1BGUacROY%2BDuRv7flKpE2raySdWWyNRycJNpjyWvM8kMSPLPTnuI4OKvz3hsm0JpyJ3i%2BEz10wjq02eYyBBIMohYilVhjmyAvHVxq7Ogz546wG%2BoX7o3pdDUijSF4FqUWVqARzahcQf0A41kZ5DPAHYOx5ZexbfAvZmdiXPnshG%2BoOe6ULjGxnOvHay0drY9ztMKoTJ9UlqPbz5B4FExoPJAv27%2B3ttcutiobMCnG%2FnUNwfJFjBuFlg1cinXST3fzWBGhZYMLbYzMMGOqUB%2FydcYUdQ6FIinhC7qOtNUCRLbGOlK%2B2kuw6pWQmfxloNixGU2iW6URCgos3J8sVoyM202Pgf2OFTMHRNbIs2PVd5umyX23T8YknxkHn8h8F%2FnEIm9IS5Ni2UFpzgplc6xJcKVsRmltTiIGT4r3VgnTj4G7L9BGmEZNBoxPrloeRh8HWypKRdn1BaJgINBWQrBT%2BfrBKU%2BB07Y0cCdD8nuK9465og&X-Amz-Signature=88767d638b3304316be6cd808b0fa9cb9bdddb00666d2d17a189e20abaa22a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RU4C7Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPaMjym4GzUUMcxQudlCSyLPas6Uqo67GD%2FYTDPfIwAiEAvAybd9O16%2Fr8o5tkPdHXygJ%2F3fc8awkxag71GAIAjbkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr%2BeJ2V%2FeyHt4ZiEircA5gfkO33GC%2B1VQqWa5mQwCRMXG2%2B650V8Ouhvea14krjrxV%2FSNlbjEJNJom9CO2kVOR8sHdnt40PFk2WK%2ByQJgXDkKcSKnYbmAoCRZlghanFTm9j910LRsK%2BhITYmxOp7126au8CPoHPTzyJFI8yahS5x012rryWAvguCOTRhbNS%2BR7HrqUfxHpadL38AnO1iGqqwzQNJCWCAdh8%2B%2FWIeZIjXqIceEOj%2BLmnJU3r989pDRH4iMNnhnHCN443Zppn%2Fh9DxgDs4mZUFPRtRHzTbGcYrQvdbzgW6o6KzA99MC%2BUyKIdRGkAxEn6C0w50W7BKB9uEtktT6c1oMFBjIJ9cAxh%2By5JRGZvZIM%2FOGDwsdp6JsWRGwwDK1BGUacROY%2BDuRv7flKpE2raySdWWyNRycJNpjyWvM8kMSPLPTnuI4OKvz3hsm0JpyJ3i%2BEz10wjq02eYyBBIMohYilVhjmyAvHVxq7Ogz546wG%2BoX7o3pdDUijSF4FqUWVqARzahcQf0A41kZ5DPAHYOx5ZexbfAvZmdiXPnshG%2BoOe6ULjGxnOvHay0drY9ztMKoTJ9UlqPbz5B4FExoPJAv27%2B3ttcutiobMCnG%2FnUNwfJFjBuFlg1cinXST3fzWBGhZYMLbYzMMGOqUB%2FydcYUdQ6FIinhC7qOtNUCRLbGOlK%2B2kuw6pWQmfxloNixGU2iW6URCgos3J8sVoyM202Pgf2OFTMHRNbIs2PVd5umyX23T8YknxkHn8h8F%2FnEIm9IS5Ni2UFpzgplc6xJcKVsRmltTiIGT4r3VgnTj4G7L9BGmEZNBoxPrloeRh8HWypKRdn1BaJgINBWQrBT%2BfrBKU%2BB07Y0cCdD8nuK9465og&X-Amz-Signature=a2dd833566d675a58be03fa0743753440d35696f1e27a085630fb9e2642a70ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RU4C7Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPaMjym4GzUUMcxQudlCSyLPas6Uqo67GD%2FYTDPfIwAiEAvAybd9O16%2Fr8o5tkPdHXygJ%2F3fc8awkxag71GAIAjbkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr%2BeJ2V%2FeyHt4ZiEircA5gfkO33GC%2B1VQqWa5mQwCRMXG2%2B650V8Ouhvea14krjrxV%2FSNlbjEJNJom9CO2kVOR8sHdnt40PFk2WK%2ByQJgXDkKcSKnYbmAoCRZlghanFTm9j910LRsK%2BhITYmxOp7126au8CPoHPTzyJFI8yahS5x012rryWAvguCOTRhbNS%2BR7HrqUfxHpadL38AnO1iGqqwzQNJCWCAdh8%2B%2FWIeZIjXqIceEOj%2BLmnJU3r989pDRH4iMNnhnHCN443Zppn%2Fh9DxgDs4mZUFPRtRHzTbGcYrQvdbzgW6o6KzA99MC%2BUyKIdRGkAxEn6C0w50W7BKB9uEtktT6c1oMFBjIJ9cAxh%2By5JRGZvZIM%2FOGDwsdp6JsWRGwwDK1BGUacROY%2BDuRv7flKpE2raySdWWyNRycJNpjyWvM8kMSPLPTnuI4OKvz3hsm0JpyJ3i%2BEz10wjq02eYyBBIMohYilVhjmyAvHVxq7Ogz546wG%2BoX7o3pdDUijSF4FqUWVqARzahcQf0A41kZ5DPAHYOx5ZexbfAvZmdiXPnshG%2BoOe6ULjGxnOvHay0drY9ztMKoTJ9UlqPbz5B4FExoPJAv27%2B3ttcutiobMCnG%2FnUNwfJFjBuFlg1cinXST3fzWBGhZYMLbYzMMGOqUB%2FydcYUdQ6FIinhC7qOtNUCRLbGOlK%2B2kuw6pWQmfxloNixGU2iW6URCgos3J8sVoyM202Pgf2OFTMHRNbIs2PVd5umyX23T8YknxkHn8h8F%2FnEIm9IS5Ni2UFpzgplc6xJcKVsRmltTiIGT4r3VgnTj4G7L9BGmEZNBoxPrloeRh8HWypKRdn1BaJgINBWQrBT%2BfrBKU%2BB07Y0cCdD8nuK9465og&X-Amz-Signature=f08f380c723e16792d970405b660260f278b5766df42f65d1024572151845632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676RU4C7Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBPaMjym4GzUUMcxQudlCSyLPas6Uqo67GD%2FYTDPfIwAiEAvAybd9O16%2Fr8o5tkPdHXygJ%2F3fc8awkxag71GAIAjbkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr%2BeJ2V%2FeyHt4ZiEircA5gfkO33GC%2B1VQqWa5mQwCRMXG2%2B650V8Ouhvea14krjrxV%2FSNlbjEJNJom9CO2kVOR8sHdnt40PFk2WK%2ByQJgXDkKcSKnYbmAoCRZlghanFTm9j910LRsK%2BhITYmxOp7126au8CPoHPTzyJFI8yahS5x012rryWAvguCOTRhbNS%2BR7HrqUfxHpadL38AnO1iGqqwzQNJCWCAdh8%2B%2FWIeZIjXqIceEOj%2BLmnJU3r989pDRH4iMNnhnHCN443Zppn%2Fh9DxgDs4mZUFPRtRHzTbGcYrQvdbzgW6o6KzA99MC%2BUyKIdRGkAxEn6C0w50W7BKB9uEtktT6c1oMFBjIJ9cAxh%2By5JRGZvZIM%2FOGDwsdp6JsWRGwwDK1BGUacROY%2BDuRv7flKpE2raySdWWyNRycJNpjyWvM8kMSPLPTnuI4OKvz3hsm0JpyJ3i%2BEz10wjq02eYyBBIMohYilVhjmyAvHVxq7Ogz546wG%2BoX7o3pdDUijSF4FqUWVqARzahcQf0A41kZ5DPAHYOx5ZexbfAvZmdiXPnshG%2BoOe6ULjGxnOvHay0drY9ztMKoTJ9UlqPbz5B4FExoPJAv27%2B3ttcutiobMCnG%2FnUNwfJFjBuFlg1cinXST3fzWBGhZYMLbYzMMGOqUB%2FydcYUdQ6FIinhC7qOtNUCRLbGOlK%2B2kuw6pWQmfxloNixGU2iW6URCgos3J8sVoyM202Pgf2OFTMHRNbIs2PVd5umyX23T8YknxkHn8h8F%2FnEIm9IS5Ni2UFpzgplc6xJcKVsRmltTiIGT4r3VgnTj4G7L9BGmEZNBoxPrloeRh8HWypKRdn1BaJgINBWQrBT%2BfrBKU%2BB07Y0cCdD8nuK9465og&X-Amz-Signature=9e163e44fe8cbaef353045ad4ac45db0bc6a069507d17850f237c677e47b21ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
