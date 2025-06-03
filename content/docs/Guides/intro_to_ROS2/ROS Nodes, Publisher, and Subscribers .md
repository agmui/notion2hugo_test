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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E4FPHQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBvF220MqXFPU%2FSLE66EDqRa1O5KcD6BSSr4Aj%2BHHgHDAiB6mqbgCQER2XZ2rjXBRbhWVKrunlbLHYEUAbda5%2FW8Lyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMADgHs%2FPvYeaBeiyUKtwDbKCJh4YGtVr3ZwfbXRyZoxNLMWNaeTKXfhMFM79pjBCEQAV7LPiaXFkPsHmfPvpDvj%2FY0lb1T%2FFCnBZOHuM5epRfsQ34tS2nH1TZqCe5Tq0YojRpfAN1%2F8Oqq58WcV9DvSr%2FHvCqP9WS28ET5O%2Fwd9c8RGLCEuwwYnJvQsZutMaFWzlxSQUl6SCakTviXvz0qiq7osTiThEVfomGU%2F9BTtGUk15EhSmJ27ABir6HK0EjrlEsTY%2FXe4eg8zFlV6gmU7CrpQ2tBPlvjR1j3TVBs%2BsaRpVZocD3qWFPnU5zeXeAebUM3ce9DU2alasWIEUB8sudVX%2F87ofD4acgU9wbXrU0rO2mmPK5NcEcuH8gxCJzQV%2Fbwhy%2B5Y%2BdNpVfy4M9652zOCwbpiacm62WufjEVbNVz%2BVWke1GZxnrnR6qy21glnlyhVh5nheMaY%2FuygCOLPRaJBLUrx26uNg0fkxBnjQNmkC9DAJ5lqiik26PocRb%2BzYAKm3TAOmdu7TRr%2B4u04YldvCG3dR9elbB66rfBi%2FPoa9HRDwE%2Bc%2FRFg25xw8QR512L%2BizT%2B1bZESHDndKUMi3L%2Bi6rsVHTdCg84JtBBiI4HsKSKNJnukDfEQFNkngatVQAX2qu1Jn%2FD8w7MX6wQY6pgFLsQHgukHFxZHH0kz783zNOOIK55OFmhBM9C8MU%2BHERIrLevES9XR3AXAbvYWL0Zsvhevc0Nkl98PLG41QGOV44ukj6UUtDiA97WMsJyX3YEo3lmp%2FkpB83l%2FS7XcdDPfiNU2cD9WzwtuHhjt3EdtUoCze5z25C0vnrh8sWXkenQKbtTLz%2BaYDmzq1SorKHJy1KqMmxpm6vl6uu6%2BeUwC%2FMheq454Z&X-Amz-Signature=ccf18b60ebc80d0fe6172050b3014320cd941b1fe52ad51c46ae3fa00527d412&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E4FPHQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBvF220MqXFPU%2FSLE66EDqRa1O5KcD6BSSr4Aj%2BHHgHDAiB6mqbgCQER2XZ2rjXBRbhWVKrunlbLHYEUAbda5%2FW8Lyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMADgHs%2FPvYeaBeiyUKtwDbKCJh4YGtVr3ZwfbXRyZoxNLMWNaeTKXfhMFM79pjBCEQAV7LPiaXFkPsHmfPvpDvj%2FY0lb1T%2FFCnBZOHuM5epRfsQ34tS2nH1TZqCe5Tq0YojRpfAN1%2F8Oqq58WcV9DvSr%2FHvCqP9WS28ET5O%2Fwd9c8RGLCEuwwYnJvQsZutMaFWzlxSQUl6SCakTviXvz0qiq7osTiThEVfomGU%2F9BTtGUk15EhSmJ27ABir6HK0EjrlEsTY%2FXe4eg8zFlV6gmU7CrpQ2tBPlvjR1j3TVBs%2BsaRpVZocD3qWFPnU5zeXeAebUM3ce9DU2alasWIEUB8sudVX%2F87ofD4acgU9wbXrU0rO2mmPK5NcEcuH8gxCJzQV%2Fbwhy%2B5Y%2BdNpVfy4M9652zOCwbpiacm62WufjEVbNVz%2BVWke1GZxnrnR6qy21glnlyhVh5nheMaY%2FuygCOLPRaJBLUrx26uNg0fkxBnjQNmkC9DAJ5lqiik26PocRb%2BzYAKm3TAOmdu7TRr%2B4u04YldvCG3dR9elbB66rfBi%2FPoa9HRDwE%2Bc%2FRFg25xw8QR512L%2BizT%2B1bZESHDndKUMi3L%2Bi6rsVHTdCg84JtBBiI4HsKSKNJnukDfEQFNkngatVQAX2qu1Jn%2FD8w7MX6wQY6pgFLsQHgukHFxZHH0kz783zNOOIK55OFmhBM9C8MU%2BHERIrLevES9XR3AXAbvYWL0Zsvhevc0Nkl98PLG41QGOV44ukj6UUtDiA97WMsJyX3YEo3lmp%2FkpB83l%2FS7XcdDPfiNU2cD9WzwtuHhjt3EdtUoCze5z25C0vnrh8sWXkenQKbtTLz%2BaYDmzq1SorKHJy1KqMmxpm6vl6uu6%2BeUwC%2FMheq454Z&X-Amz-Signature=58a9c0c84dd9c8dae676855e19502ba7faa3825c00a084f3e0ece06ed1f37bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E4FPHQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBvF220MqXFPU%2FSLE66EDqRa1O5KcD6BSSr4Aj%2BHHgHDAiB6mqbgCQER2XZ2rjXBRbhWVKrunlbLHYEUAbda5%2FW8Lyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMADgHs%2FPvYeaBeiyUKtwDbKCJh4YGtVr3ZwfbXRyZoxNLMWNaeTKXfhMFM79pjBCEQAV7LPiaXFkPsHmfPvpDvj%2FY0lb1T%2FFCnBZOHuM5epRfsQ34tS2nH1TZqCe5Tq0YojRpfAN1%2F8Oqq58WcV9DvSr%2FHvCqP9WS28ET5O%2Fwd9c8RGLCEuwwYnJvQsZutMaFWzlxSQUl6SCakTviXvz0qiq7osTiThEVfomGU%2F9BTtGUk15EhSmJ27ABir6HK0EjrlEsTY%2FXe4eg8zFlV6gmU7CrpQ2tBPlvjR1j3TVBs%2BsaRpVZocD3qWFPnU5zeXeAebUM3ce9DU2alasWIEUB8sudVX%2F87ofD4acgU9wbXrU0rO2mmPK5NcEcuH8gxCJzQV%2Fbwhy%2B5Y%2BdNpVfy4M9652zOCwbpiacm62WufjEVbNVz%2BVWke1GZxnrnR6qy21glnlyhVh5nheMaY%2FuygCOLPRaJBLUrx26uNg0fkxBnjQNmkC9DAJ5lqiik26PocRb%2BzYAKm3TAOmdu7TRr%2B4u04YldvCG3dR9elbB66rfBi%2FPoa9HRDwE%2Bc%2FRFg25xw8QR512L%2BizT%2B1bZESHDndKUMi3L%2Bi6rsVHTdCg84JtBBiI4HsKSKNJnukDfEQFNkngatVQAX2qu1Jn%2FD8w7MX6wQY6pgFLsQHgukHFxZHH0kz783zNOOIK55OFmhBM9C8MU%2BHERIrLevES9XR3AXAbvYWL0Zsvhevc0Nkl98PLG41QGOV44ukj6UUtDiA97WMsJyX3YEo3lmp%2FkpB83l%2FS7XcdDPfiNU2cD9WzwtuHhjt3EdtUoCze5z25C0vnrh8sWXkenQKbtTLz%2BaYDmzq1SorKHJy1KqMmxpm6vl6uu6%2BeUwC%2FMheq454Z&X-Amz-Signature=0b04f3a82164621eafcef7ed1fb52803ccc9bb19c12b5e5628f4bc3d1b863ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E4FPHQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBvF220MqXFPU%2FSLE66EDqRa1O5KcD6BSSr4Aj%2BHHgHDAiB6mqbgCQER2XZ2rjXBRbhWVKrunlbLHYEUAbda5%2FW8Lyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMADgHs%2FPvYeaBeiyUKtwDbKCJh4YGtVr3ZwfbXRyZoxNLMWNaeTKXfhMFM79pjBCEQAV7LPiaXFkPsHmfPvpDvj%2FY0lb1T%2FFCnBZOHuM5epRfsQ34tS2nH1TZqCe5Tq0YojRpfAN1%2F8Oqq58WcV9DvSr%2FHvCqP9WS28ET5O%2Fwd9c8RGLCEuwwYnJvQsZutMaFWzlxSQUl6SCakTviXvz0qiq7osTiThEVfomGU%2F9BTtGUk15EhSmJ27ABir6HK0EjrlEsTY%2FXe4eg8zFlV6gmU7CrpQ2tBPlvjR1j3TVBs%2BsaRpVZocD3qWFPnU5zeXeAebUM3ce9DU2alasWIEUB8sudVX%2F87ofD4acgU9wbXrU0rO2mmPK5NcEcuH8gxCJzQV%2Fbwhy%2B5Y%2BdNpVfy4M9652zOCwbpiacm62WufjEVbNVz%2BVWke1GZxnrnR6qy21glnlyhVh5nheMaY%2FuygCOLPRaJBLUrx26uNg0fkxBnjQNmkC9DAJ5lqiik26PocRb%2BzYAKm3TAOmdu7TRr%2B4u04YldvCG3dR9elbB66rfBi%2FPoa9HRDwE%2Bc%2FRFg25xw8QR512L%2BizT%2B1bZESHDndKUMi3L%2Bi6rsVHTdCg84JtBBiI4HsKSKNJnukDfEQFNkngatVQAX2qu1Jn%2FD8w7MX6wQY6pgFLsQHgukHFxZHH0kz783zNOOIK55OFmhBM9C8MU%2BHERIrLevES9XR3AXAbvYWL0Zsvhevc0Nkl98PLG41QGOV44ukj6UUtDiA97WMsJyX3YEo3lmp%2FkpB83l%2FS7XcdDPfiNU2cD9WzwtuHhjt3EdtUoCze5z25C0vnrh8sWXkenQKbtTLz%2BaYDmzq1SorKHJy1KqMmxpm6vl6uu6%2BeUwC%2FMheq454Z&X-Amz-Signature=3d497585c7d16e169436ee5c4537f0f07915ab92687f487536d04d3605574211&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E4FPHQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBvF220MqXFPU%2FSLE66EDqRa1O5KcD6BSSr4Aj%2BHHgHDAiB6mqbgCQER2XZ2rjXBRbhWVKrunlbLHYEUAbda5%2FW8Lyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMADgHs%2FPvYeaBeiyUKtwDbKCJh4YGtVr3ZwfbXRyZoxNLMWNaeTKXfhMFM79pjBCEQAV7LPiaXFkPsHmfPvpDvj%2FY0lb1T%2FFCnBZOHuM5epRfsQ34tS2nH1TZqCe5Tq0YojRpfAN1%2F8Oqq58WcV9DvSr%2FHvCqP9WS28ET5O%2Fwd9c8RGLCEuwwYnJvQsZutMaFWzlxSQUl6SCakTviXvz0qiq7osTiThEVfomGU%2F9BTtGUk15EhSmJ27ABir6HK0EjrlEsTY%2FXe4eg8zFlV6gmU7CrpQ2tBPlvjR1j3TVBs%2BsaRpVZocD3qWFPnU5zeXeAebUM3ce9DU2alasWIEUB8sudVX%2F87ofD4acgU9wbXrU0rO2mmPK5NcEcuH8gxCJzQV%2Fbwhy%2B5Y%2BdNpVfy4M9652zOCwbpiacm62WufjEVbNVz%2BVWke1GZxnrnR6qy21glnlyhVh5nheMaY%2FuygCOLPRaJBLUrx26uNg0fkxBnjQNmkC9DAJ5lqiik26PocRb%2BzYAKm3TAOmdu7TRr%2B4u04YldvCG3dR9elbB66rfBi%2FPoa9HRDwE%2Bc%2FRFg25xw8QR512L%2BizT%2B1bZESHDndKUMi3L%2Bi6rsVHTdCg84JtBBiI4HsKSKNJnukDfEQFNkngatVQAX2qu1Jn%2FD8w7MX6wQY6pgFLsQHgukHFxZHH0kz783zNOOIK55OFmhBM9C8MU%2BHERIrLevES9XR3AXAbvYWL0Zsvhevc0Nkl98PLG41QGOV44ukj6UUtDiA97WMsJyX3YEo3lmp%2FkpB83l%2FS7XcdDPfiNU2cD9WzwtuHhjt3EdtUoCze5z25C0vnrh8sWXkenQKbtTLz%2BaYDmzq1SorKHJy1KqMmxpm6vl6uu6%2BeUwC%2FMheq454Z&X-Amz-Signature=9ca09bf299fab19536a9ffdffdfa3d78bb6f82a3dfd9b7a6ca5f5534ed744ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E4FPHQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBvF220MqXFPU%2FSLE66EDqRa1O5KcD6BSSr4Aj%2BHHgHDAiB6mqbgCQER2XZ2rjXBRbhWVKrunlbLHYEUAbda5%2FW8Lyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMADgHs%2FPvYeaBeiyUKtwDbKCJh4YGtVr3ZwfbXRyZoxNLMWNaeTKXfhMFM79pjBCEQAV7LPiaXFkPsHmfPvpDvj%2FY0lb1T%2FFCnBZOHuM5epRfsQ34tS2nH1TZqCe5Tq0YojRpfAN1%2F8Oqq58WcV9DvSr%2FHvCqP9WS28ET5O%2Fwd9c8RGLCEuwwYnJvQsZutMaFWzlxSQUl6SCakTviXvz0qiq7osTiThEVfomGU%2F9BTtGUk15EhSmJ27ABir6HK0EjrlEsTY%2FXe4eg8zFlV6gmU7CrpQ2tBPlvjR1j3TVBs%2BsaRpVZocD3qWFPnU5zeXeAebUM3ce9DU2alasWIEUB8sudVX%2F87ofD4acgU9wbXrU0rO2mmPK5NcEcuH8gxCJzQV%2Fbwhy%2B5Y%2BdNpVfy4M9652zOCwbpiacm62WufjEVbNVz%2BVWke1GZxnrnR6qy21glnlyhVh5nheMaY%2FuygCOLPRaJBLUrx26uNg0fkxBnjQNmkC9DAJ5lqiik26PocRb%2BzYAKm3TAOmdu7TRr%2B4u04YldvCG3dR9elbB66rfBi%2FPoa9HRDwE%2Bc%2FRFg25xw8QR512L%2BizT%2B1bZESHDndKUMi3L%2Bi6rsVHTdCg84JtBBiI4HsKSKNJnukDfEQFNkngatVQAX2qu1Jn%2FD8w7MX6wQY6pgFLsQHgukHFxZHH0kz783zNOOIK55OFmhBM9C8MU%2BHERIrLevES9XR3AXAbvYWL0Zsvhevc0Nkl98PLG41QGOV44ukj6UUtDiA97WMsJyX3YEo3lmp%2FkpB83l%2FS7XcdDPfiNU2cD9WzwtuHhjt3EdtUoCze5z25C0vnrh8sWXkenQKbtTLz%2BaYDmzq1SorKHJy1KqMmxpm6vl6uu6%2BeUwC%2FMheq454Z&X-Amz-Signature=3d016136e745e41b928c8120100749278b28e38b50ec916789e1f4c7b7d82bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E4FPHQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBvF220MqXFPU%2FSLE66EDqRa1O5KcD6BSSr4Aj%2BHHgHDAiB6mqbgCQER2XZ2rjXBRbhWVKrunlbLHYEUAbda5%2FW8Lyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMADgHs%2FPvYeaBeiyUKtwDbKCJh4YGtVr3ZwfbXRyZoxNLMWNaeTKXfhMFM79pjBCEQAV7LPiaXFkPsHmfPvpDvj%2FY0lb1T%2FFCnBZOHuM5epRfsQ34tS2nH1TZqCe5Tq0YojRpfAN1%2F8Oqq58WcV9DvSr%2FHvCqP9WS28ET5O%2Fwd9c8RGLCEuwwYnJvQsZutMaFWzlxSQUl6SCakTviXvz0qiq7osTiThEVfomGU%2F9BTtGUk15EhSmJ27ABir6HK0EjrlEsTY%2FXe4eg8zFlV6gmU7CrpQ2tBPlvjR1j3TVBs%2BsaRpVZocD3qWFPnU5zeXeAebUM3ce9DU2alasWIEUB8sudVX%2F87ofD4acgU9wbXrU0rO2mmPK5NcEcuH8gxCJzQV%2Fbwhy%2B5Y%2BdNpVfy4M9652zOCwbpiacm62WufjEVbNVz%2BVWke1GZxnrnR6qy21glnlyhVh5nheMaY%2FuygCOLPRaJBLUrx26uNg0fkxBnjQNmkC9DAJ5lqiik26PocRb%2BzYAKm3TAOmdu7TRr%2B4u04YldvCG3dR9elbB66rfBi%2FPoa9HRDwE%2Bc%2FRFg25xw8QR512L%2BizT%2B1bZESHDndKUMi3L%2Bi6rsVHTdCg84JtBBiI4HsKSKNJnukDfEQFNkngatVQAX2qu1Jn%2FD8w7MX6wQY6pgFLsQHgukHFxZHH0kz783zNOOIK55OFmhBM9C8MU%2BHERIrLevES9XR3AXAbvYWL0Zsvhevc0Nkl98PLG41QGOV44ukj6UUtDiA97WMsJyX3YEo3lmp%2FkpB83l%2FS7XcdDPfiNU2cD9WzwtuHhjt3EdtUoCze5z25C0vnrh8sWXkenQKbtTLz%2BaYDmzq1SorKHJy1KqMmxpm6vl6uu6%2BeUwC%2FMheq454Z&X-Amz-Signature=2004ed51320e27c4fcc5a3d1f9e7a306812ed847b1c0167baa719fadeee6561d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E4FPHQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBvF220MqXFPU%2FSLE66EDqRa1O5KcD6BSSr4Aj%2BHHgHDAiB6mqbgCQER2XZ2rjXBRbhWVKrunlbLHYEUAbda5%2FW8Lyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMADgHs%2FPvYeaBeiyUKtwDbKCJh4YGtVr3ZwfbXRyZoxNLMWNaeTKXfhMFM79pjBCEQAV7LPiaXFkPsHmfPvpDvj%2FY0lb1T%2FFCnBZOHuM5epRfsQ34tS2nH1TZqCe5Tq0YojRpfAN1%2F8Oqq58WcV9DvSr%2FHvCqP9WS28ET5O%2Fwd9c8RGLCEuwwYnJvQsZutMaFWzlxSQUl6SCakTviXvz0qiq7osTiThEVfomGU%2F9BTtGUk15EhSmJ27ABir6HK0EjrlEsTY%2FXe4eg8zFlV6gmU7CrpQ2tBPlvjR1j3TVBs%2BsaRpVZocD3qWFPnU5zeXeAebUM3ce9DU2alasWIEUB8sudVX%2F87ofD4acgU9wbXrU0rO2mmPK5NcEcuH8gxCJzQV%2Fbwhy%2B5Y%2BdNpVfy4M9652zOCwbpiacm62WufjEVbNVz%2BVWke1GZxnrnR6qy21glnlyhVh5nheMaY%2FuygCOLPRaJBLUrx26uNg0fkxBnjQNmkC9DAJ5lqiik26PocRb%2BzYAKm3TAOmdu7TRr%2B4u04YldvCG3dR9elbB66rfBi%2FPoa9HRDwE%2Bc%2FRFg25xw8QR512L%2BizT%2B1bZESHDndKUMi3L%2Bi6rsVHTdCg84JtBBiI4HsKSKNJnukDfEQFNkngatVQAX2qu1Jn%2FD8w7MX6wQY6pgFLsQHgukHFxZHH0kz783zNOOIK55OFmhBM9C8MU%2BHERIrLevES9XR3AXAbvYWL0Zsvhevc0Nkl98PLG41QGOV44ukj6UUtDiA97WMsJyX3YEo3lmp%2FkpB83l%2FS7XcdDPfiNU2cD9WzwtuHhjt3EdtUoCze5z25C0vnrh8sWXkenQKbtTLz%2BaYDmzq1SorKHJy1KqMmxpm6vl6uu6%2BeUwC%2FMheq454Z&X-Amz-Signature=a4cdb6e1309a30631aa994e24cb0c2c097943024b72315569640cb34504f449f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
