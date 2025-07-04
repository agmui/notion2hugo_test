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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TAILR6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCgxjdn6izC%2B0cvsJcweTcJRWHjBggoeC%2Bnm%2FsjFB6ksAIgTy20x2ZuNajaUNnwC%2Fhx%2BcDvcYe9JqxlIZr4Lmn%2BvOAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDILMr%2FgGzpiG%2FlwDcCrcA3AzhKrmpn79mKAKednKk3u75XbGVJW3DGdGXwmXcbWXNQqq8OqtdBQkXmwK8l1zefQHUQToMnl0f0Uu1381A%2BNOz2N%2FKJRGAgHxt9V%2FfB%2FamYLgAct%2Bg84YjZgQdk%2FxjlZoNGS1FvjYl%2FKxLO3ji6gRpEmkqwHDus1at50ldNFgeqEREdfGtIYsa9ugHmAUpu6yv6K2mKbibNtIpczCs0p5TMWTZ89J0dAA96aGvejVHgrNQLFAcd2q6mEvpAAXciQmOUquNkdGLvJrncK4%2F0pQkc9%2FqJwWg0cidA9VD3y1EbH8N48TRc%2BmebaSLK0RQ%2FvrX6t32%2Fcv2uQLcChnRW6T8RYY30lKy0XPKsH%2B%2FtdzyU9GxjBbEcuN6PDXoRK2l5HKib9bj8iS5ZBt4NcI5Sv%2BcFbC1qXkChzum3iUXuV5UeC0qo1ca4zPlgTBbx2C0kXqlzHPhyJ82YsV%2BWc8Y3%2FMckt%2BjQMbWSe81prtnMaPyL90G6mTj%2FflLRhFJcO8tKcXuevW1uZoZe4QhpONvcjBUjIcTAVKgIvmEgO1b5zk62Pf1yvayqdzwOnQIDw4xQoVJ4csjLGNnYakmKs6Zv0t63OiuhrcFDlU2IsWIZDzYRrhJx8M8H9BwlhRMPHfncMGOqUBMWmC9jqTF9nobuqufBLv%2FpuGttaV39DZiL5%2FpF9h3jWbJTxEiHaVtfTnQiaJxgWnwxr1aRA41tTxNAppkhvT8HyVVnySpNfPH6kKsosodLgRJYySHU9Rm66dOWPV%2FOsBCuohiacS0G4azyt%2FNOMwFj9F0K6N5h0ik2aUGghC%2BdwqzptkvrvktCWsMVSOTbIR9iBMUmQsRWF3K7kP1Az5cchnstHW&X-Amz-Signature=198c3f842e1ab4f77f1af7446fddad2226a76b2ff51d256966e756b5ff16b08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TAILR6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCgxjdn6izC%2B0cvsJcweTcJRWHjBggoeC%2Bnm%2FsjFB6ksAIgTy20x2ZuNajaUNnwC%2Fhx%2BcDvcYe9JqxlIZr4Lmn%2BvOAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDILMr%2FgGzpiG%2FlwDcCrcA3AzhKrmpn79mKAKednKk3u75XbGVJW3DGdGXwmXcbWXNQqq8OqtdBQkXmwK8l1zefQHUQToMnl0f0Uu1381A%2BNOz2N%2FKJRGAgHxt9V%2FfB%2FamYLgAct%2Bg84YjZgQdk%2FxjlZoNGS1FvjYl%2FKxLO3ji6gRpEmkqwHDus1at50ldNFgeqEREdfGtIYsa9ugHmAUpu6yv6K2mKbibNtIpczCs0p5TMWTZ89J0dAA96aGvejVHgrNQLFAcd2q6mEvpAAXciQmOUquNkdGLvJrncK4%2F0pQkc9%2FqJwWg0cidA9VD3y1EbH8N48TRc%2BmebaSLK0RQ%2FvrX6t32%2Fcv2uQLcChnRW6T8RYY30lKy0XPKsH%2B%2FtdzyU9GxjBbEcuN6PDXoRK2l5HKib9bj8iS5ZBt4NcI5Sv%2BcFbC1qXkChzum3iUXuV5UeC0qo1ca4zPlgTBbx2C0kXqlzHPhyJ82YsV%2BWc8Y3%2FMckt%2BjQMbWSe81prtnMaPyL90G6mTj%2FflLRhFJcO8tKcXuevW1uZoZe4QhpONvcjBUjIcTAVKgIvmEgO1b5zk62Pf1yvayqdzwOnQIDw4xQoVJ4csjLGNnYakmKs6Zv0t63OiuhrcFDlU2IsWIZDzYRrhJx8M8H9BwlhRMPHfncMGOqUBMWmC9jqTF9nobuqufBLv%2FpuGttaV39DZiL5%2FpF9h3jWbJTxEiHaVtfTnQiaJxgWnwxr1aRA41tTxNAppkhvT8HyVVnySpNfPH6kKsosodLgRJYySHU9Rm66dOWPV%2FOsBCuohiacS0G4azyt%2FNOMwFj9F0K6N5h0ik2aUGghC%2BdwqzptkvrvktCWsMVSOTbIR9iBMUmQsRWF3K7kP1Az5cchnstHW&X-Amz-Signature=1a2f7ac26e596e7aa0cdf0856dc95ddd2cf31d5814a5a7511fd61ad6b5083163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TAILR6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCgxjdn6izC%2B0cvsJcweTcJRWHjBggoeC%2Bnm%2FsjFB6ksAIgTy20x2ZuNajaUNnwC%2Fhx%2BcDvcYe9JqxlIZr4Lmn%2BvOAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDILMr%2FgGzpiG%2FlwDcCrcA3AzhKrmpn79mKAKednKk3u75XbGVJW3DGdGXwmXcbWXNQqq8OqtdBQkXmwK8l1zefQHUQToMnl0f0Uu1381A%2BNOz2N%2FKJRGAgHxt9V%2FfB%2FamYLgAct%2Bg84YjZgQdk%2FxjlZoNGS1FvjYl%2FKxLO3ji6gRpEmkqwHDus1at50ldNFgeqEREdfGtIYsa9ugHmAUpu6yv6K2mKbibNtIpczCs0p5TMWTZ89J0dAA96aGvejVHgrNQLFAcd2q6mEvpAAXciQmOUquNkdGLvJrncK4%2F0pQkc9%2FqJwWg0cidA9VD3y1EbH8N48TRc%2BmebaSLK0RQ%2FvrX6t32%2Fcv2uQLcChnRW6T8RYY30lKy0XPKsH%2B%2FtdzyU9GxjBbEcuN6PDXoRK2l5HKib9bj8iS5ZBt4NcI5Sv%2BcFbC1qXkChzum3iUXuV5UeC0qo1ca4zPlgTBbx2C0kXqlzHPhyJ82YsV%2BWc8Y3%2FMckt%2BjQMbWSe81prtnMaPyL90G6mTj%2FflLRhFJcO8tKcXuevW1uZoZe4QhpONvcjBUjIcTAVKgIvmEgO1b5zk62Pf1yvayqdzwOnQIDw4xQoVJ4csjLGNnYakmKs6Zv0t63OiuhrcFDlU2IsWIZDzYRrhJx8M8H9BwlhRMPHfncMGOqUBMWmC9jqTF9nobuqufBLv%2FpuGttaV39DZiL5%2FpF9h3jWbJTxEiHaVtfTnQiaJxgWnwxr1aRA41tTxNAppkhvT8HyVVnySpNfPH6kKsosodLgRJYySHU9Rm66dOWPV%2FOsBCuohiacS0G4azyt%2FNOMwFj9F0K6N5h0ik2aUGghC%2BdwqzptkvrvktCWsMVSOTbIR9iBMUmQsRWF3K7kP1Az5cchnstHW&X-Amz-Signature=17ecacbc8931030ac3ce623ed38a63c8177d2f8ab6cf585a9a78dae826708422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TAILR6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCgxjdn6izC%2B0cvsJcweTcJRWHjBggoeC%2Bnm%2FsjFB6ksAIgTy20x2ZuNajaUNnwC%2Fhx%2BcDvcYe9JqxlIZr4Lmn%2BvOAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDILMr%2FgGzpiG%2FlwDcCrcA3AzhKrmpn79mKAKednKk3u75XbGVJW3DGdGXwmXcbWXNQqq8OqtdBQkXmwK8l1zefQHUQToMnl0f0Uu1381A%2BNOz2N%2FKJRGAgHxt9V%2FfB%2FamYLgAct%2Bg84YjZgQdk%2FxjlZoNGS1FvjYl%2FKxLO3ji6gRpEmkqwHDus1at50ldNFgeqEREdfGtIYsa9ugHmAUpu6yv6K2mKbibNtIpczCs0p5TMWTZ89J0dAA96aGvejVHgrNQLFAcd2q6mEvpAAXciQmOUquNkdGLvJrncK4%2F0pQkc9%2FqJwWg0cidA9VD3y1EbH8N48TRc%2BmebaSLK0RQ%2FvrX6t32%2Fcv2uQLcChnRW6T8RYY30lKy0XPKsH%2B%2FtdzyU9GxjBbEcuN6PDXoRK2l5HKib9bj8iS5ZBt4NcI5Sv%2BcFbC1qXkChzum3iUXuV5UeC0qo1ca4zPlgTBbx2C0kXqlzHPhyJ82YsV%2BWc8Y3%2FMckt%2BjQMbWSe81prtnMaPyL90G6mTj%2FflLRhFJcO8tKcXuevW1uZoZe4QhpONvcjBUjIcTAVKgIvmEgO1b5zk62Pf1yvayqdzwOnQIDw4xQoVJ4csjLGNnYakmKs6Zv0t63OiuhrcFDlU2IsWIZDzYRrhJx8M8H9BwlhRMPHfncMGOqUBMWmC9jqTF9nobuqufBLv%2FpuGttaV39DZiL5%2FpF9h3jWbJTxEiHaVtfTnQiaJxgWnwxr1aRA41tTxNAppkhvT8HyVVnySpNfPH6kKsosodLgRJYySHU9Rm66dOWPV%2FOsBCuohiacS0G4azyt%2FNOMwFj9F0K6N5h0ik2aUGghC%2BdwqzptkvrvktCWsMVSOTbIR9iBMUmQsRWF3K7kP1Az5cchnstHW&X-Amz-Signature=86446a3d6fcc1460f72b396275931b1d56c788c5aff119834879cd6e544f638d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TAILR6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCgxjdn6izC%2B0cvsJcweTcJRWHjBggoeC%2Bnm%2FsjFB6ksAIgTy20x2ZuNajaUNnwC%2Fhx%2BcDvcYe9JqxlIZr4Lmn%2BvOAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDILMr%2FgGzpiG%2FlwDcCrcA3AzhKrmpn79mKAKednKk3u75XbGVJW3DGdGXwmXcbWXNQqq8OqtdBQkXmwK8l1zefQHUQToMnl0f0Uu1381A%2BNOz2N%2FKJRGAgHxt9V%2FfB%2FamYLgAct%2Bg84YjZgQdk%2FxjlZoNGS1FvjYl%2FKxLO3ji6gRpEmkqwHDus1at50ldNFgeqEREdfGtIYsa9ugHmAUpu6yv6K2mKbibNtIpczCs0p5TMWTZ89J0dAA96aGvejVHgrNQLFAcd2q6mEvpAAXciQmOUquNkdGLvJrncK4%2F0pQkc9%2FqJwWg0cidA9VD3y1EbH8N48TRc%2BmebaSLK0RQ%2FvrX6t32%2Fcv2uQLcChnRW6T8RYY30lKy0XPKsH%2B%2FtdzyU9GxjBbEcuN6PDXoRK2l5HKib9bj8iS5ZBt4NcI5Sv%2BcFbC1qXkChzum3iUXuV5UeC0qo1ca4zPlgTBbx2C0kXqlzHPhyJ82YsV%2BWc8Y3%2FMckt%2BjQMbWSe81prtnMaPyL90G6mTj%2FflLRhFJcO8tKcXuevW1uZoZe4QhpONvcjBUjIcTAVKgIvmEgO1b5zk62Pf1yvayqdzwOnQIDw4xQoVJ4csjLGNnYakmKs6Zv0t63OiuhrcFDlU2IsWIZDzYRrhJx8M8H9BwlhRMPHfncMGOqUBMWmC9jqTF9nobuqufBLv%2FpuGttaV39DZiL5%2FpF9h3jWbJTxEiHaVtfTnQiaJxgWnwxr1aRA41tTxNAppkhvT8HyVVnySpNfPH6kKsosodLgRJYySHU9Rm66dOWPV%2FOsBCuohiacS0G4azyt%2FNOMwFj9F0K6N5h0ik2aUGghC%2BdwqzptkvrvktCWsMVSOTbIR9iBMUmQsRWF3K7kP1Az5cchnstHW&X-Amz-Signature=e032f49ae8fec91c9df29d86b90577c075d2f7f10a98297e6e5823a51d511dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TAILR6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCgxjdn6izC%2B0cvsJcweTcJRWHjBggoeC%2Bnm%2FsjFB6ksAIgTy20x2ZuNajaUNnwC%2Fhx%2BcDvcYe9JqxlIZr4Lmn%2BvOAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDILMr%2FgGzpiG%2FlwDcCrcA3AzhKrmpn79mKAKednKk3u75XbGVJW3DGdGXwmXcbWXNQqq8OqtdBQkXmwK8l1zefQHUQToMnl0f0Uu1381A%2BNOz2N%2FKJRGAgHxt9V%2FfB%2FamYLgAct%2Bg84YjZgQdk%2FxjlZoNGS1FvjYl%2FKxLO3ji6gRpEmkqwHDus1at50ldNFgeqEREdfGtIYsa9ugHmAUpu6yv6K2mKbibNtIpczCs0p5TMWTZ89J0dAA96aGvejVHgrNQLFAcd2q6mEvpAAXciQmOUquNkdGLvJrncK4%2F0pQkc9%2FqJwWg0cidA9VD3y1EbH8N48TRc%2BmebaSLK0RQ%2FvrX6t32%2Fcv2uQLcChnRW6T8RYY30lKy0XPKsH%2B%2FtdzyU9GxjBbEcuN6PDXoRK2l5HKib9bj8iS5ZBt4NcI5Sv%2BcFbC1qXkChzum3iUXuV5UeC0qo1ca4zPlgTBbx2C0kXqlzHPhyJ82YsV%2BWc8Y3%2FMckt%2BjQMbWSe81prtnMaPyL90G6mTj%2FflLRhFJcO8tKcXuevW1uZoZe4QhpONvcjBUjIcTAVKgIvmEgO1b5zk62Pf1yvayqdzwOnQIDw4xQoVJ4csjLGNnYakmKs6Zv0t63OiuhrcFDlU2IsWIZDzYRrhJx8M8H9BwlhRMPHfncMGOqUBMWmC9jqTF9nobuqufBLv%2FpuGttaV39DZiL5%2FpF9h3jWbJTxEiHaVtfTnQiaJxgWnwxr1aRA41tTxNAppkhvT8HyVVnySpNfPH6kKsosodLgRJYySHU9Rm66dOWPV%2FOsBCuohiacS0G4azyt%2FNOMwFj9F0K6N5h0ik2aUGghC%2BdwqzptkvrvktCWsMVSOTbIR9iBMUmQsRWF3K7kP1Az5cchnstHW&X-Amz-Signature=bdb062c143bfdb7bb612c917d1423fc0cb34f9031aa8da0cd40fc4e717dd09f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TAILR6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCgxjdn6izC%2B0cvsJcweTcJRWHjBggoeC%2Bnm%2FsjFB6ksAIgTy20x2ZuNajaUNnwC%2Fhx%2BcDvcYe9JqxlIZr4Lmn%2BvOAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDILMr%2FgGzpiG%2FlwDcCrcA3AzhKrmpn79mKAKednKk3u75XbGVJW3DGdGXwmXcbWXNQqq8OqtdBQkXmwK8l1zefQHUQToMnl0f0Uu1381A%2BNOz2N%2FKJRGAgHxt9V%2FfB%2FamYLgAct%2Bg84YjZgQdk%2FxjlZoNGS1FvjYl%2FKxLO3ji6gRpEmkqwHDus1at50ldNFgeqEREdfGtIYsa9ugHmAUpu6yv6K2mKbibNtIpczCs0p5TMWTZ89J0dAA96aGvejVHgrNQLFAcd2q6mEvpAAXciQmOUquNkdGLvJrncK4%2F0pQkc9%2FqJwWg0cidA9VD3y1EbH8N48TRc%2BmebaSLK0RQ%2FvrX6t32%2Fcv2uQLcChnRW6T8RYY30lKy0XPKsH%2B%2FtdzyU9GxjBbEcuN6PDXoRK2l5HKib9bj8iS5ZBt4NcI5Sv%2BcFbC1qXkChzum3iUXuV5UeC0qo1ca4zPlgTBbx2C0kXqlzHPhyJ82YsV%2BWc8Y3%2FMckt%2BjQMbWSe81prtnMaPyL90G6mTj%2FflLRhFJcO8tKcXuevW1uZoZe4QhpONvcjBUjIcTAVKgIvmEgO1b5zk62Pf1yvayqdzwOnQIDw4xQoVJ4csjLGNnYakmKs6Zv0t63OiuhrcFDlU2IsWIZDzYRrhJx8M8H9BwlhRMPHfncMGOqUBMWmC9jqTF9nobuqufBLv%2FpuGttaV39DZiL5%2FpF9h3jWbJTxEiHaVtfTnQiaJxgWnwxr1aRA41tTxNAppkhvT8HyVVnySpNfPH6kKsosodLgRJYySHU9Rm66dOWPV%2FOsBCuohiacS0G4azyt%2FNOMwFj9F0K6N5h0ik2aUGghC%2BdwqzptkvrvktCWsMVSOTbIR9iBMUmQsRWF3K7kP1Az5cchnstHW&X-Amz-Signature=79b057042ced76f87d62de46281fdaf9ea7cb3bf924f62d26c7eacba8d7df0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TAILR6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCgxjdn6izC%2B0cvsJcweTcJRWHjBggoeC%2Bnm%2FsjFB6ksAIgTy20x2ZuNajaUNnwC%2Fhx%2BcDvcYe9JqxlIZr4Lmn%2BvOAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDILMr%2FgGzpiG%2FlwDcCrcA3AzhKrmpn79mKAKednKk3u75XbGVJW3DGdGXwmXcbWXNQqq8OqtdBQkXmwK8l1zefQHUQToMnl0f0Uu1381A%2BNOz2N%2FKJRGAgHxt9V%2FfB%2FamYLgAct%2Bg84YjZgQdk%2FxjlZoNGS1FvjYl%2FKxLO3ji6gRpEmkqwHDus1at50ldNFgeqEREdfGtIYsa9ugHmAUpu6yv6K2mKbibNtIpczCs0p5TMWTZ89J0dAA96aGvejVHgrNQLFAcd2q6mEvpAAXciQmOUquNkdGLvJrncK4%2F0pQkc9%2FqJwWg0cidA9VD3y1EbH8N48TRc%2BmebaSLK0RQ%2FvrX6t32%2Fcv2uQLcChnRW6T8RYY30lKy0XPKsH%2B%2FtdzyU9GxjBbEcuN6PDXoRK2l5HKib9bj8iS5ZBt4NcI5Sv%2BcFbC1qXkChzum3iUXuV5UeC0qo1ca4zPlgTBbx2C0kXqlzHPhyJ82YsV%2BWc8Y3%2FMckt%2BjQMbWSe81prtnMaPyL90G6mTj%2FflLRhFJcO8tKcXuevW1uZoZe4QhpONvcjBUjIcTAVKgIvmEgO1b5zk62Pf1yvayqdzwOnQIDw4xQoVJ4csjLGNnYakmKs6Zv0t63OiuhrcFDlU2IsWIZDzYRrhJx8M8H9BwlhRMPHfncMGOqUBMWmC9jqTF9nobuqufBLv%2FpuGttaV39DZiL5%2FpF9h3jWbJTxEiHaVtfTnQiaJxgWnwxr1aRA41tTxNAppkhvT8HyVVnySpNfPH6kKsosodLgRJYySHU9Rm66dOWPV%2FOsBCuohiacS0G4azyt%2FNOMwFj9F0K6N5h0ik2aUGghC%2BdwqzptkvrvktCWsMVSOTbIR9iBMUmQsRWF3K7kP1Az5cchnstHW&X-Amz-Signature=a3e86738a9edbb337563f34bd93dfa663a93b83a7bc8225e37ffcf6f57f589e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
