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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Y24EVJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAdjKKXMXbKCFm8aurSLl2BtvjEkcPPz4k7Op%2Be8whaAiBg1QoNNiDfzJlWzD4%2B3DYtCSxsakMweXMcXQcTCzsHhiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJW1YRH2hGQ5eEZOhKtwDKH0Y%2FmJaqJTaWEbgsPHM15YGxct42TkV0QAoZU8wbRVGhQ4sTMqov2X26RnEKeX0XEjy%2FDyNyY7ikxmjzqOV3W9dGcZPrXE6nhEIET9rcrLBefnbTyWEaJG5jDa1YNxgprH3IuOFAqFSVt2e5yMahXWzR6ge%2Bqh1j%2BwFyKexO7xwQK2jFvTEaOgQuiaGoH4lGPBOKQxR7r2eTcn%2FoXjuAH1dJSpQaYKiKXAwByAKg515ckxHWMDNREy2frNOqcyoWQEJi12xJIofIFDllaonJ09Y9Md028Te0Caq8AeNXfRpCckIV1J5qQpnmpvrhAIj4qDKOP%2BL%2FD0wx9g9mFEoNzObSacMKHBKLm8bUFYulSFXQPHm5EFvLOVVEkdDma75FxGF0M46xmXB3ZKRVQzaxb%2FNY8cV7wUEoIALMZOTSyrNHPfQtK%2B%2F4qbn8n%2FoRqbKY1mpBApyOOf5Mb4bdzieFu3BfrifA7bY35dYHwPRlNG7ojhmbGdCCCjFTI0sXVouUCNx46BjcvFwiPIJl3gpo9Fl%2Fh1rapbSpbc8q%2B11pEWP%2BGOBjG%2FUO9USJOUATDktiTbKp6wj%2BD0o%2F6og7ssGibOjzvIbV0hc3KqBAFbOVHJaqe4iZd5EUhF3dCEwlOrtwwY6pgEqbeI%2BRfYOZz47Hd%2BIjV%2FyqcWybduDlNMJC8u65IPrrFTaqneBKgcNK7%2BCS4zNJ%2BJCWqYDNkpM%2FQ1mXwAIa4g2iLLXyyDTESY85v9KqLkSltVG9OVyGcy01HSye%2Fvz%2FbZKMvqHYNDHGhzr8yN6Dq%2BComT77osDomv9gv5DqtrSD2tCdbzS%2BEcTOneEejoGty2hXG%2FlDusm33Nu%2BQA1RFE5y1KHQRTc&X-Amz-Signature=995e9dc3254babcb2057fbb1c0a33cf493230ef23851d9cee9df226c29271ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Y24EVJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAdjKKXMXbKCFm8aurSLl2BtvjEkcPPz4k7Op%2Be8whaAiBg1QoNNiDfzJlWzD4%2B3DYtCSxsakMweXMcXQcTCzsHhiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJW1YRH2hGQ5eEZOhKtwDKH0Y%2FmJaqJTaWEbgsPHM15YGxct42TkV0QAoZU8wbRVGhQ4sTMqov2X26RnEKeX0XEjy%2FDyNyY7ikxmjzqOV3W9dGcZPrXE6nhEIET9rcrLBefnbTyWEaJG5jDa1YNxgprH3IuOFAqFSVt2e5yMahXWzR6ge%2Bqh1j%2BwFyKexO7xwQK2jFvTEaOgQuiaGoH4lGPBOKQxR7r2eTcn%2FoXjuAH1dJSpQaYKiKXAwByAKg515ckxHWMDNREy2frNOqcyoWQEJi12xJIofIFDllaonJ09Y9Md028Te0Caq8AeNXfRpCckIV1J5qQpnmpvrhAIj4qDKOP%2BL%2FD0wx9g9mFEoNzObSacMKHBKLm8bUFYulSFXQPHm5EFvLOVVEkdDma75FxGF0M46xmXB3ZKRVQzaxb%2FNY8cV7wUEoIALMZOTSyrNHPfQtK%2B%2F4qbn8n%2FoRqbKY1mpBApyOOf5Mb4bdzieFu3BfrifA7bY35dYHwPRlNG7ojhmbGdCCCjFTI0sXVouUCNx46BjcvFwiPIJl3gpo9Fl%2Fh1rapbSpbc8q%2B11pEWP%2BGOBjG%2FUO9USJOUATDktiTbKp6wj%2BD0o%2F6og7ssGibOjzvIbV0hc3KqBAFbOVHJaqe4iZd5EUhF3dCEwlOrtwwY6pgEqbeI%2BRfYOZz47Hd%2BIjV%2FyqcWybduDlNMJC8u65IPrrFTaqneBKgcNK7%2BCS4zNJ%2BJCWqYDNkpM%2FQ1mXwAIa4g2iLLXyyDTESY85v9KqLkSltVG9OVyGcy01HSye%2Fvz%2FbZKMvqHYNDHGhzr8yN6Dq%2BComT77osDomv9gv5DqtrSD2tCdbzS%2BEcTOneEejoGty2hXG%2FlDusm33Nu%2BQA1RFE5y1KHQRTc&X-Amz-Signature=ba8fe4f18ec47cec3f024ce590c13b32f521190b754c8bcc40d34c0204008f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Y24EVJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAdjKKXMXbKCFm8aurSLl2BtvjEkcPPz4k7Op%2Be8whaAiBg1QoNNiDfzJlWzD4%2B3DYtCSxsakMweXMcXQcTCzsHhiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJW1YRH2hGQ5eEZOhKtwDKH0Y%2FmJaqJTaWEbgsPHM15YGxct42TkV0QAoZU8wbRVGhQ4sTMqov2X26RnEKeX0XEjy%2FDyNyY7ikxmjzqOV3W9dGcZPrXE6nhEIET9rcrLBefnbTyWEaJG5jDa1YNxgprH3IuOFAqFSVt2e5yMahXWzR6ge%2Bqh1j%2BwFyKexO7xwQK2jFvTEaOgQuiaGoH4lGPBOKQxR7r2eTcn%2FoXjuAH1dJSpQaYKiKXAwByAKg515ckxHWMDNREy2frNOqcyoWQEJi12xJIofIFDllaonJ09Y9Md028Te0Caq8AeNXfRpCckIV1J5qQpnmpvrhAIj4qDKOP%2BL%2FD0wx9g9mFEoNzObSacMKHBKLm8bUFYulSFXQPHm5EFvLOVVEkdDma75FxGF0M46xmXB3ZKRVQzaxb%2FNY8cV7wUEoIALMZOTSyrNHPfQtK%2B%2F4qbn8n%2FoRqbKY1mpBApyOOf5Mb4bdzieFu3BfrifA7bY35dYHwPRlNG7ojhmbGdCCCjFTI0sXVouUCNx46BjcvFwiPIJl3gpo9Fl%2Fh1rapbSpbc8q%2B11pEWP%2BGOBjG%2FUO9USJOUATDktiTbKp6wj%2BD0o%2F6og7ssGibOjzvIbV0hc3KqBAFbOVHJaqe4iZd5EUhF3dCEwlOrtwwY6pgEqbeI%2BRfYOZz47Hd%2BIjV%2FyqcWybduDlNMJC8u65IPrrFTaqneBKgcNK7%2BCS4zNJ%2BJCWqYDNkpM%2FQ1mXwAIa4g2iLLXyyDTESY85v9KqLkSltVG9OVyGcy01HSye%2Fvz%2FbZKMvqHYNDHGhzr8yN6Dq%2BComT77osDomv9gv5DqtrSD2tCdbzS%2BEcTOneEejoGty2hXG%2FlDusm33Nu%2BQA1RFE5y1KHQRTc&X-Amz-Signature=465f9417639e4a4c04a7a16d00b753d5a936133e0647c6f493d2b28a510c8ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Y24EVJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAdjKKXMXbKCFm8aurSLl2BtvjEkcPPz4k7Op%2Be8whaAiBg1QoNNiDfzJlWzD4%2B3DYtCSxsakMweXMcXQcTCzsHhiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJW1YRH2hGQ5eEZOhKtwDKH0Y%2FmJaqJTaWEbgsPHM15YGxct42TkV0QAoZU8wbRVGhQ4sTMqov2X26RnEKeX0XEjy%2FDyNyY7ikxmjzqOV3W9dGcZPrXE6nhEIET9rcrLBefnbTyWEaJG5jDa1YNxgprH3IuOFAqFSVt2e5yMahXWzR6ge%2Bqh1j%2BwFyKexO7xwQK2jFvTEaOgQuiaGoH4lGPBOKQxR7r2eTcn%2FoXjuAH1dJSpQaYKiKXAwByAKg515ckxHWMDNREy2frNOqcyoWQEJi12xJIofIFDllaonJ09Y9Md028Te0Caq8AeNXfRpCckIV1J5qQpnmpvrhAIj4qDKOP%2BL%2FD0wx9g9mFEoNzObSacMKHBKLm8bUFYulSFXQPHm5EFvLOVVEkdDma75FxGF0M46xmXB3ZKRVQzaxb%2FNY8cV7wUEoIALMZOTSyrNHPfQtK%2B%2F4qbn8n%2FoRqbKY1mpBApyOOf5Mb4bdzieFu3BfrifA7bY35dYHwPRlNG7ojhmbGdCCCjFTI0sXVouUCNx46BjcvFwiPIJl3gpo9Fl%2Fh1rapbSpbc8q%2B11pEWP%2BGOBjG%2FUO9USJOUATDktiTbKp6wj%2BD0o%2F6og7ssGibOjzvIbV0hc3KqBAFbOVHJaqe4iZd5EUhF3dCEwlOrtwwY6pgEqbeI%2BRfYOZz47Hd%2BIjV%2FyqcWybduDlNMJC8u65IPrrFTaqneBKgcNK7%2BCS4zNJ%2BJCWqYDNkpM%2FQ1mXwAIa4g2iLLXyyDTESY85v9KqLkSltVG9OVyGcy01HSye%2Fvz%2FbZKMvqHYNDHGhzr8yN6Dq%2BComT77osDomv9gv5DqtrSD2tCdbzS%2BEcTOneEejoGty2hXG%2FlDusm33Nu%2BQA1RFE5y1KHQRTc&X-Amz-Signature=31f00295b92b948e0961f7baa6e0e5651cf8504df8696e1f24d762bfacd25733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Y24EVJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAdjKKXMXbKCFm8aurSLl2BtvjEkcPPz4k7Op%2Be8whaAiBg1QoNNiDfzJlWzD4%2B3DYtCSxsakMweXMcXQcTCzsHhiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJW1YRH2hGQ5eEZOhKtwDKH0Y%2FmJaqJTaWEbgsPHM15YGxct42TkV0QAoZU8wbRVGhQ4sTMqov2X26RnEKeX0XEjy%2FDyNyY7ikxmjzqOV3W9dGcZPrXE6nhEIET9rcrLBefnbTyWEaJG5jDa1YNxgprH3IuOFAqFSVt2e5yMahXWzR6ge%2Bqh1j%2BwFyKexO7xwQK2jFvTEaOgQuiaGoH4lGPBOKQxR7r2eTcn%2FoXjuAH1dJSpQaYKiKXAwByAKg515ckxHWMDNREy2frNOqcyoWQEJi12xJIofIFDllaonJ09Y9Md028Te0Caq8AeNXfRpCckIV1J5qQpnmpvrhAIj4qDKOP%2BL%2FD0wx9g9mFEoNzObSacMKHBKLm8bUFYulSFXQPHm5EFvLOVVEkdDma75FxGF0M46xmXB3ZKRVQzaxb%2FNY8cV7wUEoIALMZOTSyrNHPfQtK%2B%2F4qbn8n%2FoRqbKY1mpBApyOOf5Mb4bdzieFu3BfrifA7bY35dYHwPRlNG7ojhmbGdCCCjFTI0sXVouUCNx46BjcvFwiPIJl3gpo9Fl%2Fh1rapbSpbc8q%2B11pEWP%2BGOBjG%2FUO9USJOUATDktiTbKp6wj%2BD0o%2F6og7ssGibOjzvIbV0hc3KqBAFbOVHJaqe4iZd5EUhF3dCEwlOrtwwY6pgEqbeI%2BRfYOZz47Hd%2BIjV%2FyqcWybduDlNMJC8u65IPrrFTaqneBKgcNK7%2BCS4zNJ%2BJCWqYDNkpM%2FQ1mXwAIa4g2iLLXyyDTESY85v9KqLkSltVG9OVyGcy01HSye%2Fvz%2FbZKMvqHYNDHGhzr8yN6Dq%2BComT77osDomv9gv5DqtrSD2tCdbzS%2BEcTOneEejoGty2hXG%2FlDusm33Nu%2BQA1RFE5y1KHQRTc&X-Amz-Signature=584433799fd215e9e368ff7860dd6badcb23b138b1de554dbd4ae0e04badffa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Y24EVJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAdjKKXMXbKCFm8aurSLl2BtvjEkcPPz4k7Op%2Be8whaAiBg1QoNNiDfzJlWzD4%2B3DYtCSxsakMweXMcXQcTCzsHhiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJW1YRH2hGQ5eEZOhKtwDKH0Y%2FmJaqJTaWEbgsPHM15YGxct42TkV0QAoZU8wbRVGhQ4sTMqov2X26RnEKeX0XEjy%2FDyNyY7ikxmjzqOV3W9dGcZPrXE6nhEIET9rcrLBefnbTyWEaJG5jDa1YNxgprH3IuOFAqFSVt2e5yMahXWzR6ge%2Bqh1j%2BwFyKexO7xwQK2jFvTEaOgQuiaGoH4lGPBOKQxR7r2eTcn%2FoXjuAH1dJSpQaYKiKXAwByAKg515ckxHWMDNREy2frNOqcyoWQEJi12xJIofIFDllaonJ09Y9Md028Te0Caq8AeNXfRpCckIV1J5qQpnmpvrhAIj4qDKOP%2BL%2FD0wx9g9mFEoNzObSacMKHBKLm8bUFYulSFXQPHm5EFvLOVVEkdDma75FxGF0M46xmXB3ZKRVQzaxb%2FNY8cV7wUEoIALMZOTSyrNHPfQtK%2B%2F4qbn8n%2FoRqbKY1mpBApyOOf5Mb4bdzieFu3BfrifA7bY35dYHwPRlNG7ojhmbGdCCCjFTI0sXVouUCNx46BjcvFwiPIJl3gpo9Fl%2Fh1rapbSpbc8q%2B11pEWP%2BGOBjG%2FUO9USJOUATDktiTbKp6wj%2BD0o%2F6og7ssGibOjzvIbV0hc3KqBAFbOVHJaqe4iZd5EUhF3dCEwlOrtwwY6pgEqbeI%2BRfYOZz47Hd%2BIjV%2FyqcWybduDlNMJC8u65IPrrFTaqneBKgcNK7%2BCS4zNJ%2BJCWqYDNkpM%2FQ1mXwAIa4g2iLLXyyDTESY85v9KqLkSltVG9OVyGcy01HSye%2Fvz%2FbZKMvqHYNDHGhzr8yN6Dq%2BComT77osDomv9gv5DqtrSD2tCdbzS%2BEcTOneEejoGty2hXG%2FlDusm33Nu%2BQA1RFE5y1KHQRTc&X-Amz-Signature=2cd531cf8bf4bb88f045cc6abd68723f3fb09554cfa9426a318a7ebf9d89062b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Y24EVJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAdjKKXMXbKCFm8aurSLl2BtvjEkcPPz4k7Op%2Be8whaAiBg1QoNNiDfzJlWzD4%2B3DYtCSxsakMweXMcXQcTCzsHhiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJW1YRH2hGQ5eEZOhKtwDKH0Y%2FmJaqJTaWEbgsPHM15YGxct42TkV0QAoZU8wbRVGhQ4sTMqov2X26RnEKeX0XEjy%2FDyNyY7ikxmjzqOV3W9dGcZPrXE6nhEIET9rcrLBefnbTyWEaJG5jDa1YNxgprH3IuOFAqFSVt2e5yMahXWzR6ge%2Bqh1j%2BwFyKexO7xwQK2jFvTEaOgQuiaGoH4lGPBOKQxR7r2eTcn%2FoXjuAH1dJSpQaYKiKXAwByAKg515ckxHWMDNREy2frNOqcyoWQEJi12xJIofIFDllaonJ09Y9Md028Te0Caq8AeNXfRpCckIV1J5qQpnmpvrhAIj4qDKOP%2BL%2FD0wx9g9mFEoNzObSacMKHBKLm8bUFYulSFXQPHm5EFvLOVVEkdDma75FxGF0M46xmXB3ZKRVQzaxb%2FNY8cV7wUEoIALMZOTSyrNHPfQtK%2B%2F4qbn8n%2FoRqbKY1mpBApyOOf5Mb4bdzieFu3BfrifA7bY35dYHwPRlNG7ojhmbGdCCCjFTI0sXVouUCNx46BjcvFwiPIJl3gpo9Fl%2Fh1rapbSpbc8q%2B11pEWP%2BGOBjG%2FUO9USJOUATDktiTbKp6wj%2BD0o%2F6og7ssGibOjzvIbV0hc3KqBAFbOVHJaqe4iZd5EUhF3dCEwlOrtwwY6pgEqbeI%2BRfYOZz47Hd%2BIjV%2FyqcWybduDlNMJC8u65IPrrFTaqneBKgcNK7%2BCS4zNJ%2BJCWqYDNkpM%2FQ1mXwAIa4g2iLLXyyDTESY85v9KqLkSltVG9OVyGcy01HSye%2Fvz%2FbZKMvqHYNDHGhzr8yN6Dq%2BComT77osDomv9gv5DqtrSD2tCdbzS%2BEcTOneEejoGty2hXG%2FlDusm33Nu%2BQA1RFE5y1KHQRTc&X-Amz-Signature=60dd5330ba4eaa943a08dc1b247d014d0d7c3889b8a9b35f8f0672eed6795ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Y24EVJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAdjKKXMXbKCFm8aurSLl2BtvjEkcPPz4k7Op%2Be8whaAiBg1QoNNiDfzJlWzD4%2B3DYtCSxsakMweXMcXQcTCzsHhiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJW1YRH2hGQ5eEZOhKtwDKH0Y%2FmJaqJTaWEbgsPHM15YGxct42TkV0QAoZU8wbRVGhQ4sTMqov2X26RnEKeX0XEjy%2FDyNyY7ikxmjzqOV3W9dGcZPrXE6nhEIET9rcrLBefnbTyWEaJG5jDa1YNxgprH3IuOFAqFSVt2e5yMahXWzR6ge%2Bqh1j%2BwFyKexO7xwQK2jFvTEaOgQuiaGoH4lGPBOKQxR7r2eTcn%2FoXjuAH1dJSpQaYKiKXAwByAKg515ckxHWMDNREy2frNOqcyoWQEJi12xJIofIFDllaonJ09Y9Md028Te0Caq8AeNXfRpCckIV1J5qQpnmpvrhAIj4qDKOP%2BL%2FD0wx9g9mFEoNzObSacMKHBKLm8bUFYulSFXQPHm5EFvLOVVEkdDma75FxGF0M46xmXB3ZKRVQzaxb%2FNY8cV7wUEoIALMZOTSyrNHPfQtK%2B%2F4qbn8n%2FoRqbKY1mpBApyOOf5Mb4bdzieFu3BfrifA7bY35dYHwPRlNG7ojhmbGdCCCjFTI0sXVouUCNx46BjcvFwiPIJl3gpo9Fl%2Fh1rapbSpbc8q%2B11pEWP%2BGOBjG%2FUO9USJOUATDktiTbKp6wj%2BD0o%2F6og7ssGibOjzvIbV0hc3KqBAFbOVHJaqe4iZd5EUhF3dCEwlOrtwwY6pgEqbeI%2BRfYOZz47Hd%2BIjV%2FyqcWybduDlNMJC8u65IPrrFTaqneBKgcNK7%2BCS4zNJ%2BJCWqYDNkpM%2FQ1mXwAIa4g2iLLXyyDTESY85v9KqLkSltVG9OVyGcy01HSye%2Fvz%2FbZKMvqHYNDHGhzr8yN6Dq%2BComT77osDomv9gv5DqtrSD2tCdbzS%2BEcTOneEejoGty2hXG%2FlDusm33Nu%2BQA1RFE5y1KHQRTc&X-Amz-Signature=e6aaec91b821787f56d3adc224b485a690dba0644db3070b15aab1755e3029d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
