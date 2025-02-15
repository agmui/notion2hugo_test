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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWQAGEX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLcIC6VJ3F2R4UorPIRzG1zZHCMmjFGwQ7lIzc9FdsvAIgCRdm7gFYsEcodlWMgAvmrtrb9clRLn1Dwg6wfT29Bf0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOpKDCcnZsggtdqbNSrcA3tYq%2FIjFPcbOud4QTmmaqUk323mQ4rSLjfDKJxtDntuipxcZkHx4EYnihgLPopwFa8h8R1HjLkyeFa6l7phKMyfZdvYTmkI5bHGQxIrLrfXB9B0r7KSQCRiuRcdjtsKFvdu4aOjYtbbd01XgalzdwapLRgigsZensTWZoDRRMUxnA9pEn%2BO8dHG27WUN6YkUAFVXrS%2By7YMwhINxxvxM92rjSsvFldE80VnTTONkjBYXJHs3Wb3F7%2FVxFj90gl1nIrVSYJfCIvVBW28e90Vk81g8kkS4BSteIPRx1EoUyzevRM%2FK80nyyTsgPK6tS9NmbhSYPnIqIYcsWzJmZP5Dwgxk09CYt1Z8p5CqrGEDpVTFzcdoUl5PF%2FRc9FOapki8w%2BT18%2Bb2e0HayY973dLk2iNfcMzTDvCSpTrAoF9di2EeKRWYPansEqzjmn%2FYJE1eGVU9qy6FQKTCekstUoNyvRHUee0WcxunwHYX32OqWNJ65E5RiuQ9ZWM4EbRZ8a6WN2%2BvG5IJdIh10mWADtKKIgU5RuecFMM%2F0ZwsTjr4SeP9c1G5quBjMYJIrU4FHsqwxKg0kyacCfKXjWua2TyQTNDQ%2FugQsLK%2FN%2F4nivITKxSm05FyBfM3fjR3XrBMMe6w70GOqUBvwhsuinYAOvZDzy%2B0fQG%2BtnLvVOQwNZrLmBMgpsXA2%2BTE1TWDcz8ZmamZ%2BGvplrMJ9SG2vTYjGn5wvlwEgKKkuvJiW%2BxYNfDNxY06%2BpL%2F4Th2xZxYew0xIyibh7nzH2Me96vhwzlPuSRgciPZ5b16jcHSCRw2mLZhfko%2BfOIVZOn%2Bl3uA3%2BSHQUteGlk2MOpZ19buSOGIpxnKh5tImYyJn1ZAsVk&X-Amz-Signature=2cea8fa444b45b680575d0e8c1e05a4221eef21a1e69695fd7d6014518cad591&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWQAGEX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLcIC6VJ3F2R4UorPIRzG1zZHCMmjFGwQ7lIzc9FdsvAIgCRdm7gFYsEcodlWMgAvmrtrb9clRLn1Dwg6wfT29Bf0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOpKDCcnZsggtdqbNSrcA3tYq%2FIjFPcbOud4QTmmaqUk323mQ4rSLjfDKJxtDntuipxcZkHx4EYnihgLPopwFa8h8R1HjLkyeFa6l7phKMyfZdvYTmkI5bHGQxIrLrfXB9B0r7KSQCRiuRcdjtsKFvdu4aOjYtbbd01XgalzdwapLRgigsZensTWZoDRRMUxnA9pEn%2BO8dHG27WUN6YkUAFVXrS%2By7YMwhINxxvxM92rjSsvFldE80VnTTONkjBYXJHs3Wb3F7%2FVxFj90gl1nIrVSYJfCIvVBW28e90Vk81g8kkS4BSteIPRx1EoUyzevRM%2FK80nyyTsgPK6tS9NmbhSYPnIqIYcsWzJmZP5Dwgxk09CYt1Z8p5CqrGEDpVTFzcdoUl5PF%2FRc9FOapki8w%2BT18%2Bb2e0HayY973dLk2iNfcMzTDvCSpTrAoF9di2EeKRWYPansEqzjmn%2FYJE1eGVU9qy6FQKTCekstUoNyvRHUee0WcxunwHYX32OqWNJ65E5RiuQ9ZWM4EbRZ8a6WN2%2BvG5IJdIh10mWADtKKIgU5RuecFMM%2F0ZwsTjr4SeP9c1G5quBjMYJIrU4FHsqwxKg0kyacCfKXjWua2TyQTNDQ%2FugQsLK%2FN%2F4nivITKxSm05FyBfM3fjR3XrBMMe6w70GOqUBvwhsuinYAOvZDzy%2B0fQG%2BtnLvVOQwNZrLmBMgpsXA2%2BTE1TWDcz8ZmamZ%2BGvplrMJ9SG2vTYjGn5wvlwEgKKkuvJiW%2BxYNfDNxY06%2BpL%2F4Th2xZxYew0xIyibh7nzH2Me96vhwzlPuSRgciPZ5b16jcHSCRw2mLZhfko%2BfOIVZOn%2Bl3uA3%2BSHQUteGlk2MOpZ19buSOGIpxnKh5tImYyJn1ZAsVk&X-Amz-Signature=fe3b1566e7418de49ede54133d36ee43ef371e22a0f4fcca3c8d2bbd14bb04ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWQAGEX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLcIC6VJ3F2R4UorPIRzG1zZHCMmjFGwQ7lIzc9FdsvAIgCRdm7gFYsEcodlWMgAvmrtrb9clRLn1Dwg6wfT29Bf0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOpKDCcnZsggtdqbNSrcA3tYq%2FIjFPcbOud4QTmmaqUk323mQ4rSLjfDKJxtDntuipxcZkHx4EYnihgLPopwFa8h8R1HjLkyeFa6l7phKMyfZdvYTmkI5bHGQxIrLrfXB9B0r7KSQCRiuRcdjtsKFvdu4aOjYtbbd01XgalzdwapLRgigsZensTWZoDRRMUxnA9pEn%2BO8dHG27WUN6YkUAFVXrS%2By7YMwhINxxvxM92rjSsvFldE80VnTTONkjBYXJHs3Wb3F7%2FVxFj90gl1nIrVSYJfCIvVBW28e90Vk81g8kkS4BSteIPRx1EoUyzevRM%2FK80nyyTsgPK6tS9NmbhSYPnIqIYcsWzJmZP5Dwgxk09CYt1Z8p5CqrGEDpVTFzcdoUl5PF%2FRc9FOapki8w%2BT18%2Bb2e0HayY973dLk2iNfcMzTDvCSpTrAoF9di2EeKRWYPansEqzjmn%2FYJE1eGVU9qy6FQKTCekstUoNyvRHUee0WcxunwHYX32OqWNJ65E5RiuQ9ZWM4EbRZ8a6WN2%2BvG5IJdIh10mWADtKKIgU5RuecFMM%2F0ZwsTjr4SeP9c1G5quBjMYJIrU4FHsqwxKg0kyacCfKXjWua2TyQTNDQ%2FugQsLK%2FN%2F4nivITKxSm05FyBfM3fjR3XrBMMe6w70GOqUBvwhsuinYAOvZDzy%2B0fQG%2BtnLvVOQwNZrLmBMgpsXA2%2BTE1TWDcz8ZmamZ%2BGvplrMJ9SG2vTYjGn5wvlwEgKKkuvJiW%2BxYNfDNxY06%2BpL%2F4Th2xZxYew0xIyibh7nzH2Me96vhwzlPuSRgciPZ5b16jcHSCRw2mLZhfko%2BfOIVZOn%2Bl3uA3%2BSHQUteGlk2MOpZ19buSOGIpxnKh5tImYyJn1ZAsVk&X-Amz-Signature=97158813c2ac8a25cbc5ce99d88a2df634ebcd1bfdd4dbae1aa9cd3b0fb9e464&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWQAGEX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLcIC6VJ3F2R4UorPIRzG1zZHCMmjFGwQ7lIzc9FdsvAIgCRdm7gFYsEcodlWMgAvmrtrb9clRLn1Dwg6wfT29Bf0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOpKDCcnZsggtdqbNSrcA3tYq%2FIjFPcbOud4QTmmaqUk323mQ4rSLjfDKJxtDntuipxcZkHx4EYnihgLPopwFa8h8R1HjLkyeFa6l7phKMyfZdvYTmkI5bHGQxIrLrfXB9B0r7KSQCRiuRcdjtsKFvdu4aOjYtbbd01XgalzdwapLRgigsZensTWZoDRRMUxnA9pEn%2BO8dHG27WUN6YkUAFVXrS%2By7YMwhINxxvxM92rjSsvFldE80VnTTONkjBYXJHs3Wb3F7%2FVxFj90gl1nIrVSYJfCIvVBW28e90Vk81g8kkS4BSteIPRx1EoUyzevRM%2FK80nyyTsgPK6tS9NmbhSYPnIqIYcsWzJmZP5Dwgxk09CYt1Z8p5CqrGEDpVTFzcdoUl5PF%2FRc9FOapki8w%2BT18%2Bb2e0HayY973dLk2iNfcMzTDvCSpTrAoF9di2EeKRWYPansEqzjmn%2FYJE1eGVU9qy6FQKTCekstUoNyvRHUee0WcxunwHYX32OqWNJ65E5RiuQ9ZWM4EbRZ8a6WN2%2BvG5IJdIh10mWADtKKIgU5RuecFMM%2F0ZwsTjr4SeP9c1G5quBjMYJIrU4FHsqwxKg0kyacCfKXjWua2TyQTNDQ%2FugQsLK%2FN%2F4nivITKxSm05FyBfM3fjR3XrBMMe6w70GOqUBvwhsuinYAOvZDzy%2B0fQG%2BtnLvVOQwNZrLmBMgpsXA2%2BTE1TWDcz8ZmamZ%2BGvplrMJ9SG2vTYjGn5wvlwEgKKkuvJiW%2BxYNfDNxY06%2BpL%2F4Th2xZxYew0xIyibh7nzH2Me96vhwzlPuSRgciPZ5b16jcHSCRw2mLZhfko%2BfOIVZOn%2Bl3uA3%2BSHQUteGlk2MOpZ19buSOGIpxnKh5tImYyJn1ZAsVk&X-Amz-Signature=4e3df6088988762c0ee808c3ce0d0044243da23750d216ed7c25cac561ea48a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWQAGEX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLcIC6VJ3F2R4UorPIRzG1zZHCMmjFGwQ7lIzc9FdsvAIgCRdm7gFYsEcodlWMgAvmrtrb9clRLn1Dwg6wfT29Bf0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOpKDCcnZsggtdqbNSrcA3tYq%2FIjFPcbOud4QTmmaqUk323mQ4rSLjfDKJxtDntuipxcZkHx4EYnihgLPopwFa8h8R1HjLkyeFa6l7phKMyfZdvYTmkI5bHGQxIrLrfXB9B0r7KSQCRiuRcdjtsKFvdu4aOjYtbbd01XgalzdwapLRgigsZensTWZoDRRMUxnA9pEn%2BO8dHG27WUN6YkUAFVXrS%2By7YMwhINxxvxM92rjSsvFldE80VnTTONkjBYXJHs3Wb3F7%2FVxFj90gl1nIrVSYJfCIvVBW28e90Vk81g8kkS4BSteIPRx1EoUyzevRM%2FK80nyyTsgPK6tS9NmbhSYPnIqIYcsWzJmZP5Dwgxk09CYt1Z8p5CqrGEDpVTFzcdoUl5PF%2FRc9FOapki8w%2BT18%2Bb2e0HayY973dLk2iNfcMzTDvCSpTrAoF9di2EeKRWYPansEqzjmn%2FYJE1eGVU9qy6FQKTCekstUoNyvRHUee0WcxunwHYX32OqWNJ65E5RiuQ9ZWM4EbRZ8a6WN2%2BvG5IJdIh10mWADtKKIgU5RuecFMM%2F0ZwsTjr4SeP9c1G5quBjMYJIrU4FHsqwxKg0kyacCfKXjWua2TyQTNDQ%2FugQsLK%2FN%2F4nivITKxSm05FyBfM3fjR3XrBMMe6w70GOqUBvwhsuinYAOvZDzy%2B0fQG%2BtnLvVOQwNZrLmBMgpsXA2%2BTE1TWDcz8ZmamZ%2BGvplrMJ9SG2vTYjGn5wvlwEgKKkuvJiW%2BxYNfDNxY06%2BpL%2F4Th2xZxYew0xIyibh7nzH2Me96vhwzlPuSRgciPZ5b16jcHSCRw2mLZhfko%2BfOIVZOn%2Bl3uA3%2BSHQUteGlk2MOpZ19buSOGIpxnKh5tImYyJn1ZAsVk&X-Amz-Signature=ac7a41893dc02746d646625fbd3aaebb9156c994d436531c1fe69436ba5584ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWQAGEX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLcIC6VJ3F2R4UorPIRzG1zZHCMmjFGwQ7lIzc9FdsvAIgCRdm7gFYsEcodlWMgAvmrtrb9clRLn1Dwg6wfT29Bf0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOpKDCcnZsggtdqbNSrcA3tYq%2FIjFPcbOud4QTmmaqUk323mQ4rSLjfDKJxtDntuipxcZkHx4EYnihgLPopwFa8h8R1HjLkyeFa6l7phKMyfZdvYTmkI5bHGQxIrLrfXB9B0r7KSQCRiuRcdjtsKFvdu4aOjYtbbd01XgalzdwapLRgigsZensTWZoDRRMUxnA9pEn%2BO8dHG27WUN6YkUAFVXrS%2By7YMwhINxxvxM92rjSsvFldE80VnTTONkjBYXJHs3Wb3F7%2FVxFj90gl1nIrVSYJfCIvVBW28e90Vk81g8kkS4BSteIPRx1EoUyzevRM%2FK80nyyTsgPK6tS9NmbhSYPnIqIYcsWzJmZP5Dwgxk09CYt1Z8p5CqrGEDpVTFzcdoUl5PF%2FRc9FOapki8w%2BT18%2Bb2e0HayY973dLk2iNfcMzTDvCSpTrAoF9di2EeKRWYPansEqzjmn%2FYJE1eGVU9qy6FQKTCekstUoNyvRHUee0WcxunwHYX32OqWNJ65E5RiuQ9ZWM4EbRZ8a6WN2%2BvG5IJdIh10mWADtKKIgU5RuecFMM%2F0ZwsTjr4SeP9c1G5quBjMYJIrU4FHsqwxKg0kyacCfKXjWua2TyQTNDQ%2FugQsLK%2FN%2F4nivITKxSm05FyBfM3fjR3XrBMMe6w70GOqUBvwhsuinYAOvZDzy%2B0fQG%2BtnLvVOQwNZrLmBMgpsXA2%2BTE1TWDcz8ZmamZ%2BGvplrMJ9SG2vTYjGn5wvlwEgKKkuvJiW%2BxYNfDNxY06%2BpL%2F4Th2xZxYew0xIyibh7nzH2Me96vhwzlPuSRgciPZ5b16jcHSCRw2mLZhfko%2BfOIVZOn%2Bl3uA3%2BSHQUteGlk2MOpZ19buSOGIpxnKh5tImYyJn1ZAsVk&X-Amz-Signature=9d484cac2abc6ddf9f278090cc57df4ea77ce622736a58a7c81587ec2a3ac2fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWQAGEX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLcIC6VJ3F2R4UorPIRzG1zZHCMmjFGwQ7lIzc9FdsvAIgCRdm7gFYsEcodlWMgAvmrtrb9clRLn1Dwg6wfT29Bf0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOpKDCcnZsggtdqbNSrcA3tYq%2FIjFPcbOud4QTmmaqUk323mQ4rSLjfDKJxtDntuipxcZkHx4EYnihgLPopwFa8h8R1HjLkyeFa6l7phKMyfZdvYTmkI5bHGQxIrLrfXB9B0r7KSQCRiuRcdjtsKFvdu4aOjYtbbd01XgalzdwapLRgigsZensTWZoDRRMUxnA9pEn%2BO8dHG27WUN6YkUAFVXrS%2By7YMwhINxxvxM92rjSsvFldE80VnTTONkjBYXJHs3Wb3F7%2FVxFj90gl1nIrVSYJfCIvVBW28e90Vk81g8kkS4BSteIPRx1EoUyzevRM%2FK80nyyTsgPK6tS9NmbhSYPnIqIYcsWzJmZP5Dwgxk09CYt1Z8p5CqrGEDpVTFzcdoUl5PF%2FRc9FOapki8w%2BT18%2Bb2e0HayY973dLk2iNfcMzTDvCSpTrAoF9di2EeKRWYPansEqzjmn%2FYJE1eGVU9qy6FQKTCekstUoNyvRHUee0WcxunwHYX32OqWNJ65E5RiuQ9ZWM4EbRZ8a6WN2%2BvG5IJdIh10mWADtKKIgU5RuecFMM%2F0ZwsTjr4SeP9c1G5quBjMYJIrU4FHsqwxKg0kyacCfKXjWua2TyQTNDQ%2FugQsLK%2FN%2F4nivITKxSm05FyBfM3fjR3XrBMMe6w70GOqUBvwhsuinYAOvZDzy%2B0fQG%2BtnLvVOQwNZrLmBMgpsXA2%2BTE1TWDcz8ZmamZ%2BGvplrMJ9SG2vTYjGn5wvlwEgKKkuvJiW%2BxYNfDNxY06%2BpL%2F4Th2xZxYew0xIyibh7nzH2Me96vhwzlPuSRgciPZ5b16jcHSCRw2mLZhfko%2BfOIVZOn%2Bl3uA3%2BSHQUteGlk2MOpZ19buSOGIpxnKh5tImYyJn1ZAsVk&X-Amz-Signature=11f76b059dfe5272156db8004a66b34f571e7732d196b413303ceb1b4224609d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWQAGEX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLcIC6VJ3F2R4UorPIRzG1zZHCMmjFGwQ7lIzc9FdsvAIgCRdm7gFYsEcodlWMgAvmrtrb9clRLn1Dwg6wfT29Bf0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOpKDCcnZsggtdqbNSrcA3tYq%2FIjFPcbOud4QTmmaqUk323mQ4rSLjfDKJxtDntuipxcZkHx4EYnihgLPopwFa8h8R1HjLkyeFa6l7phKMyfZdvYTmkI5bHGQxIrLrfXB9B0r7KSQCRiuRcdjtsKFvdu4aOjYtbbd01XgalzdwapLRgigsZensTWZoDRRMUxnA9pEn%2BO8dHG27WUN6YkUAFVXrS%2By7YMwhINxxvxM92rjSsvFldE80VnTTONkjBYXJHs3Wb3F7%2FVxFj90gl1nIrVSYJfCIvVBW28e90Vk81g8kkS4BSteIPRx1EoUyzevRM%2FK80nyyTsgPK6tS9NmbhSYPnIqIYcsWzJmZP5Dwgxk09CYt1Z8p5CqrGEDpVTFzcdoUl5PF%2FRc9FOapki8w%2BT18%2Bb2e0HayY973dLk2iNfcMzTDvCSpTrAoF9di2EeKRWYPansEqzjmn%2FYJE1eGVU9qy6FQKTCekstUoNyvRHUee0WcxunwHYX32OqWNJ65E5RiuQ9ZWM4EbRZ8a6WN2%2BvG5IJdIh10mWADtKKIgU5RuecFMM%2F0ZwsTjr4SeP9c1G5quBjMYJIrU4FHsqwxKg0kyacCfKXjWua2TyQTNDQ%2FugQsLK%2FN%2F4nivITKxSm05FyBfM3fjR3XrBMMe6w70GOqUBvwhsuinYAOvZDzy%2B0fQG%2BtnLvVOQwNZrLmBMgpsXA2%2BTE1TWDcz8ZmamZ%2BGvplrMJ9SG2vTYjGn5wvlwEgKKkuvJiW%2BxYNfDNxY06%2BpL%2F4Th2xZxYew0xIyibh7nzH2Me96vhwzlPuSRgciPZ5b16jcHSCRw2mLZhfko%2BfOIVZOn%2Bl3uA3%2BSHQUteGlk2MOpZ19buSOGIpxnKh5tImYyJn1ZAsVk&X-Amz-Signature=719f3e2e5a17c55397d0731aac5c1074b58b50d050fd00867073f5e833e9e195&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
