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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDORNM5C%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDBCUZfGNHmUmkhSHlBBcJ8uE0ZkFM%2BvnUo%2Bs8E1EGMngIhANDUB8htRk3e1S4jnZzJt4GzYJR6L2HRSTLzLOrDqlNCKv8DCEcQABoMNjM3NDIzMTgzODA1IgwwFnDQql59MBtVt%2BEq3ANqUqG7uBMDXsaBa7wJIWcNV2volpf2OAf8ix%2B3xsycs%2FjxxR7W4%2BUGIOvKswRwpHglLi4zUrq1Nu7Gozo6NMQsj3ntWnKWlJhQEGm4ylqtg%2BQQeZ8FiQrGpg6Ay45yasjyLz4%2FDdxHmGqG3V872WkVmExph3I4TJ00KWFMI6GKrwkUzruXRJDF753Z7Ujo6oHAIM2ltZMp%2B093b%2B3qhYPKzFa%2FP0bWO8eMwNWmCS276vZAWu2yytCVa8yJclACY6rTn%2BQtDSumW9mhDXPmvh5wPkVvdSX2%2Bu8KNKExnii7lF1NLa13dnETVsmRqbAuO13NBac8%2Bu1o65wZtTt%2F1dr%2BfueROVY6fXtogK6h5l1L6kpZ4yJFwYOw%2FlLbVumLpyjU33%2Fxr4VjSf71NkbYSrJN%2BViCX6rypP1nI%2Bumd%2BY3rJ6ZToaKDDhHjFAmFjE7%2Bz%2FhazZgPQtTqPEIEt9KR4KzlCcVp3jc86o4AEba87OITsoYqLIzK9KBNK1dtw3%2B90FF9AyybZ%2B%2BUJG3hEt9%2BvFm3QILN1xiJ2yBMPQASqJkLGWY6aZCToTHXs1bVeSJoIxLQGOJ8tJcjzh8L0GGncrgnAgxjr%2FpiUQE%2BzhRGmYoNE9OSkpgFWziL1Z64zDN%2FO%2FCBjqkAS7eJiJvp%2FOy%2BBJawX9Dd4XHRNaVePlXIyfqT6zi3C4ARG3UvU8YlViVYkEJSc%2FahaeKZhAZVBfdBgOe24r9I31PLtGXCqjr7IdzJZTw9S5GBCx%2Fq%2Bq0TUCZP10E40R%2B0%2F%2FnZBKTTyM2hpawuSNIsVgtJqcH73nqxYv8DDZqA4jxoeVp1%2BFBR805ZJbmThu%2BP8gN65%2BMBAyt8jj2LN9SSbZw7yUm&X-Amz-Signature=ca907a22f11ee4925a54d073ed6ffb8f103b02030ff25de003aa232049c23092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDORNM5C%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDBCUZfGNHmUmkhSHlBBcJ8uE0ZkFM%2BvnUo%2Bs8E1EGMngIhANDUB8htRk3e1S4jnZzJt4GzYJR6L2HRSTLzLOrDqlNCKv8DCEcQABoMNjM3NDIzMTgzODA1IgwwFnDQql59MBtVt%2BEq3ANqUqG7uBMDXsaBa7wJIWcNV2volpf2OAf8ix%2B3xsycs%2FjxxR7W4%2BUGIOvKswRwpHglLi4zUrq1Nu7Gozo6NMQsj3ntWnKWlJhQEGm4ylqtg%2BQQeZ8FiQrGpg6Ay45yasjyLz4%2FDdxHmGqG3V872WkVmExph3I4TJ00KWFMI6GKrwkUzruXRJDF753Z7Ujo6oHAIM2ltZMp%2B093b%2B3qhYPKzFa%2FP0bWO8eMwNWmCS276vZAWu2yytCVa8yJclACY6rTn%2BQtDSumW9mhDXPmvh5wPkVvdSX2%2Bu8KNKExnii7lF1NLa13dnETVsmRqbAuO13NBac8%2Bu1o65wZtTt%2F1dr%2BfueROVY6fXtogK6h5l1L6kpZ4yJFwYOw%2FlLbVumLpyjU33%2Fxr4VjSf71NkbYSrJN%2BViCX6rypP1nI%2Bumd%2BY3rJ6ZToaKDDhHjFAmFjE7%2Bz%2FhazZgPQtTqPEIEt9KR4KzlCcVp3jc86o4AEba87OITsoYqLIzK9KBNK1dtw3%2B90FF9AyybZ%2B%2BUJG3hEt9%2BvFm3QILN1xiJ2yBMPQASqJkLGWY6aZCToTHXs1bVeSJoIxLQGOJ8tJcjzh8L0GGncrgnAgxjr%2FpiUQE%2BzhRGmYoNE9OSkpgFWziL1Z64zDN%2FO%2FCBjqkAS7eJiJvp%2FOy%2BBJawX9Dd4XHRNaVePlXIyfqT6zi3C4ARG3UvU8YlViVYkEJSc%2FahaeKZhAZVBfdBgOe24r9I31PLtGXCqjr7IdzJZTw9S5GBCx%2Fq%2Bq0TUCZP10E40R%2B0%2F%2FnZBKTTyM2hpawuSNIsVgtJqcH73nqxYv8DDZqA4jxoeVp1%2BFBR805ZJbmThu%2BP8gN65%2BMBAyt8jj2LN9SSbZw7yUm&X-Amz-Signature=6c755a56103a7d00e315a7d5a8e2385ded1262dac06851b84b4d7fcdac4c1fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDORNM5C%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDBCUZfGNHmUmkhSHlBBcJ8uE0ZkFM%2BvnUo%2Bs8E1EGMngIhANDUB8htRk3e1S4jnZzJt4GzYJR6L2HRSTLzLOrDqlNCKv8DCEcQABoMNjM3NDIzMTgzODA1IgwwFnDQql59MBtVt%2BEq3ANqUqG7uBMDXsaBa7wJIWcNV2volpf2OAf8ix%2B3xsycs%2FjxxR7W4%2BUGIOvKswRwpHglLi4zUrq1Nu7Gozo6NMQsj3ntWnKWlJhQEGm4ylqtg%2BQQeZ8FiQrGpg6Ay45yasjyLz4%2FDdxHmGqG3V872WkVmExph3I4TJ00KWFMI6GKrwkUzruXRJDF753Z7Ujo6oHAIM2ltZMp%2B093b%2B3qhYPKzFa%2FP0bWO8eMwNWmCS276vZAWu2yytCVa8yJclACY6rTn%2BQtDSumW9mhDXPmvh5wPkVvdSX2%2Bu8KNKExnii7lF1NLa13dnETVsmRqbAuO13NBac8%2Bu1o65wZtTt%2F1dr%2BfueROVY6fXtogK6h5l1L6kpZ4yJFwYOw%2FlLbVumLpyjU33%2Fxr4VjSf71NkbYSrJN%2BViCX6rypP1nI%2Bumd%2BY3rJ6ZToaKDDhHjFAmFjE7%2Bz%2FhazZgPQtTqPEIEt9KR4KzlCcVp3jc86o4AEba87OITsoYqLIzK9KBNK1dtw3%2B90FF9AyybZ%2B%2BUJG3hEt9%2BvFm3QILN1xiJ2yBMPQASqJkLGWY6aZCToTHXs1bVeSJoIxLQGOJ8tJcjzh8L0GGncrgnAgxjr%2FpiUQE%2BzhRGmYoNE9OSkpgFWziL1Z64zDN%2FO%2FCBjqkAS7eJiJvp%2FOy%2BBJawX9Dd4XHRNaVePlXIyfqT6zi3C4ARG3UvU8YlViVYkEJSc%2FahaeKZhAZVBfdBgOe24r9I31PLtGXCqjr7IdzJZTw9S5GBCx%2Fq%2Bq0TUCZP10E40R%2B0%2F%2FnZBKTTyM2hpawuSNIsVgtJqcH73nqxYv8DDZqA4jxoeVp1%2BFBR805ZJbmThu%2BP8gN65%2BMBAyt8jj2LN9SSbZw7yUm&X-Amz-Signature=d074b3fd7d2681cfebde7aba44d44340b9f32669f4c7554c87f673f927f2671c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDORNM5C%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDBCUZfGNHmUmkhSHlBBcJ8uE0ZkFM%2BvnUo%2Bs8E1EGMngIhANDUB8htRk3e1S4jnZzJt4GzYJR6L2HRSTLzLOrDqlNCKv8DCEcQABoMNjM3NDIzMTgzODA1IgwwFnDQql59MBtVt%2BEq3ANqUqG7uBMDXsaBa7wJIWcNV2volpf2OAf8ix%2B3xsycs%2FjxxR7W4%2BUGIOvKswRwpHglLi4zUrq1Nu7Gozo6NMQsj3ntWnKWlJhQEGm4ylqtg%2BQQeZ8FiQrGpg6Ay45yasjyLz4%2FDdxHmGqG3V872WkVmExph3I4TJ00KWFMI6GKrwkUzruXRJDF753Z7Ujo6oHAIM2ltZMp%2B093b%2B3qhYPKzFa%2FP0bWO8eMwNWmCS276vZAWu2yytCVa8yJclACY6rTn%2BQtDSumW9mhDXPmvh5wPkVvdSX2%2Bu8KNKExnii7lF1NLa13dnETVsmRqbAuO13NBac8%2Bu1o65wZtTt%2F1dr%2BfueROVY6fXtogK6h5l1L6kpZ4yJFwYOw%2FlLbVumLpyjU33%2Fxr4VjSf71NkbYSrJN%2BViCX6rypP1nI%2Bumd%2BY3rJ6ZToaKDDhHjFAmFjE7%2Bz%2FhazZgPQtTqPEIEt9KR4KzlCcVp3jc86o4AEba87OITsoYqLIzK9KBNK1dtw3%2B90FF9AyybZ%2B%2BUJG3hEt9%2BvFm3QILN1xiJ2yBMPQASqJkLGWY6aZCToTHXs1bVeSJoIxLQGOJ8tJcjzh8L0GGncrgnAgxjr%2FpiUQE%2BzhRGmYoNE9OSkpgFWziL1Z64zDN%2FO%2FCBjqkAS7eJiJvp%2FOy%2BBJawX9Dd4XHRNaVePlXIyfqT6zi3C4ARG3UvU8YlViVYkEJSc%2FahaeKZhAZVBfdBgOe24r9I31PLtGXCqjr7IdzJZTw9S5GBCx%2Fq%2Bq0TUCZP10E40R%2B0%2F%2FnZBKTTyM2hpawuSNIsVgtJqcH73nqxYv8DDZqA4jxoeVp1%2BFBR805ZJbmThu%2BP8gN65%2BMBAyt8jj2LN9SSbZw7yUm&X-Amz-Signature=d558ee378f1ba117ea82828c1ae3e8a748865d4309554c9f2e96f37f3a9d12fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDORNM5C%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDBCUZfGNHmUmkhSHlBBcJ8uE0ZkFM%2BvnUo%2Bs8E1EGMngIhANDUB8htRk3e1S4jnZzJt4GzYJR6L2HRSTLzLOrDqlNCKv8DCEcQABoMNjM3NDIzMTgzODA1IgwwFnDQql59MBtVt%2BEq3ANqUqG7uBMDXsaBa7wJIWcNV2volpf2OAf8ix%2B3xsycs%2FjxxR7W4%2BUGIOvKswRwpHglLi4zUrq1Nu7Gozo6NMQsj3ntWnKWlJhQEGm4ylqtg%2BQQeZ8FiQrGpg6Ay45yasjyLz4%2FDdxHmGqG3V872WkVmExph3I4TJ00KWFMI6GKrwkUzruXRJDF753Z7Ujo6oHAIM2ltZMp%2B093b%2B3qhYPKzFa%2FP0bWO8eMwNWmCS276vZAWu2yytCVa8yJclACY6rTn%2BQtDSumW9mhDXPmvh5wPkVvdSX2%2Bu8KNKExnii7lF1NLa13dnETVsmRqbAuO13NBac8%2Bu1o65wZtTt%2F1dr%2BfueROVY6fXtogK6h5l1L6kpZ4yJFwYOw%2FlLbVumLpyjU33%2Fxr4VjSf71NkbYSrJN%2BViCX6rypP1nI%2Bumd%2BY3rJ6ZToaKDDhHjFAmFjE7%2Bz%2FhazZgPQtTqPEIEt9KR4KzlCcVp3jc86o4AEba87OITsoYqLIzK9KBNK1dtw3%2B90FF9AyybZ%2B%2BUJG3hEt9%2BvFm3QILN1xiJ2yBMPQASqJkLGWY6aZCToTHXs1bVeSJoIxLQGOJ8tJcjzh8L0GGncrgnAgxjr%2FpiUQE%2BzhRGmYoNE9OSkpgFWziL1Z64zDN%2FO%2FCBjqkAS7eJiJvp%2FOy%2BBJawX9Dd4XHRNaVePlXIyfqT6zi3C4ARG3UvU8YlViVYkEJSc%2FahaeKZhAZVBfdBgOe24r9I31PLtGXCqjr7IdzJZTw9S5GBCx%2Fq%2Bq0TUCZP10E40R%2B0%2F%2FnZBKTTyM2hpawuSNIsVgtJqcH73nqxYv8DDZqA4jxoeVp1%2BFBR805ZJbmThu%2BP8gN65%2BMBAyt8jj2LN9SSbZw7yUm&X-Amz-Signature=fd2f325dffdc2a9da059801153fc25009a11b969d55fc0c14dbdbb29ee59c358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDORNM5C%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDBCUZfGNHmUmkhSHlBBcJ8uE0ZkFM%2BvnUo%2Bs8E1EGMngIhANDUB8htRk3e1S4jnZzJt4GzYJR6L2HRSTLzLOrDqlNCKv8DCEcQABoMNjM3NDIzMTgzODA1IgwwFnDQql59MBtVt%2BEq3ANqUqG7uBMDXsaBa7wJIWcNV2volpf2OAf8ix%2B3xsycs%2FjxxR7W4%2BUGIOvKswRwpHglLi4zUrq1Nu7Gozo6NMQsj3ntWnKWlJhQEGm4ylqtg%2BQQeZ8FiQrGpg6Ay45yasjyLz4%2FDdxHmGqG3V872WkVmExph3I4TJ00KWFMI6GKrwkUzruXRJDF753Z7Ujo6oHAIM2ltZMp%2B093b%2B3qhYPKzFa%2FP0bWO8eMwNWmCS276vZAWu2yytCVa8yJclACY6rTn%2BQtDSumW9mhDXPmvh5wPkVvdSX2%2Bu8KNKExnii7lF1NLa13dnETVsmRqbAuO13NBac8%2Bu1o65wZtTt%2F1dr%2BfueROVY6fXtogK6h5l1L6kpZ4yJFwYOw%2FlLbVumLpyjU33%2Fxr4VjSf71NkbYSrJN%2BViCX6rypP1nI%2Bumd%2BY3rJ6ZToaKDDhHjFAmFjE7%2Bz%2FhazZgPQtTqPEIEt9KR4KzlCcVp3jc86o4AEba87OITsoYqLIzK9KBNK1dtw3%2B90FF9AyybZ%2B%2BUJG3hEt9%2BvFm3QILN1xiJ2yBMPQASqJkLGWY6aZCToTHXs1bVeSJoIxLQGOJ8tJcjzh8L0GGncrgnAgxjr%2FpiUQE%2BzhRGmYoNE9OSkpgFWziL1Z64zDN%2FO%2FCBjqkAS7eJiJvp%2FOy%2BBJawX9Dd4XHRNaVePlXIyfqT6zi3C4ARG3UvU8YlViVYkEJSc%2FahaeKZhAZVBfdBgOe24r9I31PLtGXCqjr7IdzJZTw9S5GBCx%2Fq%2Bq0TUCZP10E40R%2B0%2F%2FnZBKTTyM2hpawuSNIsVgtJqcH73nqxYv8DDZqA4jxoeVp1%2BFBR805ZJbmThu%2BP8gN65%2BMBAyt8jj2LN9SSbZw7yUm&X-Amz-Signature=0e235978d008297dfd2bff6387eb8853077624db5b3a74e15530f6bf3f7698c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDORNM5C%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDBCUZfGNHmUmkhSHlBBcJ8uE0ZkFM%2BvnUo%2Bs8E1EGMngIhANDUB8htRk3e1S4jnZzJt4GzYJR6L2HRSTLzLOrDqlNCKv8DCEcQABoMNjM3NDIzMTgzODA1IgwwFnDQql59MBtVt%2BEq3ANqUqG7uBMDXsaBa7wJIWcNV2volpf2OAf8ix%2B3xsycs%2FjxxR7W4%2BUGIOvKswRwpHglLi4zUrq1Nu7Gozo6NMQsj3ntWnKWlJhQEGm4ylqtg%2BQQeZ8FiQrGpg6Ay45yasjyLz4%2FDdxHmGqG3V872WkVmExph3I4TJ00KWFMI6GKrwkUzruXRJDF753Z7Ujo6oHAIM2ltZMp%2B093b%2B3qhYPKzFa%2FP0bWO8eMwNWmCS276vZAWu2yytCVa8yJclACY6rTn%2BQtDSumW9mhDXPmvh5wPkVvdSX2%2Bu8KNKExnii7lF1NLa13dnETVsmRqbAuO13NBac8%2Bu1o65wZtTt%2F1dr%2BfueROVY6fXtogK6h5l1L6kpZ4yJFwYOw%2FlLbVumLpyjU33%2Fxr4VjSf71NkbYSrJN%2BViCX6rypP1nI%2Bumd%2BY3rJ6ZToaKDDhHjFAmFjE7%2Bz%2FhazZgPQtTqPEIEt9KR4KzlCcVp3jc86o4AEba87OITsoYqLIzK9KBNK1dtw3%2B90FF9AyybZ%2B%2BUJG3hEt9%2BvFm3QILN1xiJ2yBMPQASqJkLGWY6aZCToTHXs1bVeSJoIxLQGOJ8tJcjzh8L0GGncrgnAgxjr%2FpiUQE%2BzhRGmYoNE9OSkpgFWziL1Z64zDN%2FO%2FCBjqkAS7eJiJvp%2FOy%2BBJawX9Dd4XHRNaVePlXIyfqT6zi3C4ARG3UvU8YlViVYkEJSc%2FahaeKZhAZVBfdBgOe24r9I31PLtGXCqjr7IdzJZTw9S5GBCx%2Fq%2Bq0TUCZP10E40R%2B0%2F%2FnZBKTTyM2hpawuSNIsVgtJqcH73nqxYv8DDZqA4jxoeVp1%2BFBR805ZJbmThu%2BP8gN65%2BMBAyt8jj2LN9SSbZw7yUm&X-Amz-Signature=aafe172bd1b5ef86f971e00a016a3706ca4bad0dc1320dda1773fdcc4ea8b71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDORNM5C%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDBCUZfGNHmUmkhSHlBBcJ8uE0ZkFM%2BvnUo%2Bs8E1EGMngIhANDUB8htRk3e1S4jnZzJt4GzYJR6L2HRSTLzLOrDqlNCKv8DCEcQABoMNjM3NDIzMTgzODA1IgwwFnDQql59MBtVt%2BEq3ANqUqG7uBMDXsaBa7wJIWcNV2volpf2OAf8ix%2B3xsycs%2FjxxR7W4%2BUGIOvKswRwpHglLi4zUrq1Nu7Gozo6NMQsj3ntWnKWlJhQEGm4ylqtg%2BQQeZ8FiQrGpg6Ay45yasjyLz4%2FDdxHmGqG3V872WkVmExph3I4TJ00KWFMI6GKrwkUzruXRJDF753Z7Ujo6oHAIM2ltZMp%2B093b%2B3qhYPKzFa%2FP0bWO8eMwNWmCS276vZAWu2yytCVa8yJclACY6rTn%2BQtDSumW9mhDXPmvh5wPkVvdSX2%2Bu8KNKExnii7lF1NLa13dnETVsmRqbAuO13NBac8%2Bu1o65wZtTt%2F1dr%2BfueROVY6fXtogK6h5l1L6kpZ4yJFwYOw%2FlLbVumLpyjU33%2Fxr4VjSf71NkbYSrJN%2BViCX6rypP1nI%2Bumd%2BY3rJ6ZToaKDDhHjFAmFjE7%2Bz%2FhazZgPQtTqPEIEt9KR4KzlCcVp3jc86o4AEba87OITsoYqLIzK9KBNK1dtw3%2B90FF9AyybZ%2B%2BUJG3hEt9%2BvFm3QILN1xiJ2yBMPQASqJkLGWY6aZCToTHXs1bVeSJoIxLQGOJ8tJcjzh8L0GGncrgnAgxjr%2FpiUQE%2BzhRGmYoNE9OSkpgFWziL1Z64zDN%2FO%2FCBjqkAS7eJiJvp%2FOy%2BBJawX9Dd4XHRNaVePlXIyfqT6zi3C4ARG3UvU8YlViVYkEJSc%2FahaeKZhAZVBfdBgOe24r9I31PLtGXCqjr7IdzJZTw9S5GBCx%2Fq%2Bq0TUCZP10E40R%2B0%2F%2FnZBKTTyM2hpawuSNIsVgtJqcH73nqxYv8DDZqA4jxoeVp1%2BFBR805ZJbmThu%2BP8gN65%2BMBAyt8jj2LN9SSbZw7yUm&X-Amz-Signature=3a000d874391630a086534feae1bcc4c7e99965379ab5d3e8dbcd870ca0ec731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
