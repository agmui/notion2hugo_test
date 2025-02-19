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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMZOVIF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjfkM7zYuu86MMZnBaubPPSxqfXmDhO9AYMyqg9GJ8dAiBWUymJglbtZq%2BK8LImvXp%2BAlYz5Z9DwYst6TyDuxKSUSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiV1rpTX52pdiWzvuKtwDoU6exmjrVKujg6BD76NK1hwvtbGWaXFFz5jMBxntEb71e5ZY0IrAGobrET0r62ZqtoTlj511CMy1E0blHcnDNyR0y1yIpcVDZK%2BasoLUN1vzLSFIy1m8I%2Bx2qHCc%2BtMsiQLMa0Y4v%2FPRJSMHryCT9ZRp%2Bqo9WCN29AIlbVN%2BvXMa0WBP40MvLqI4Q6blSoLECyCs60WQZAjnx9gA3ZSUg%2Fb44fBMEIKHcEHRJ67YN7jMR55brT472L5vXbHjBkL6%2Bu4TXDbBU%2Bf%2FEiGQr1C4jSuprJuxl6aVi4cDkksbMezktHftONO8V7wb%2Fq0lsurJ1ytnNj0QHL%2Fu7uiJmEbcCklsSOYqFscdFJE0eoUS3vXMoqRddoLULFPfQxvb94ipMldbJQFdz3wmgLhPTMsOjotdqlAVtCDB3LeM6ZECLUmmX9MSn1BFdE0GssMtlRvjQQTMpv%2FQVlZf%2BsY3wxLYU%2FfHaIzaPrgOFXSejMz3eVmdU5Y0muvw0tiG91FSDdi5jb8kiXyaRdf7vYYn0rMpLwvOpGyOQsk54Q4ocKr49xxKf%2FVPTMBBSB0a6mSAbtD9Cg%2BnQFt4qerBi%2F8CEozSpCQ2SLmlQXWPQ6H554fAFSEpB3zy0ZR0zv8xxIIwi5PZvQY6pgFlTTYaB0M%2BbEEZPD%2BdCFnU%2BcTHnOHD3rBsydtUiHp47WVcMaXpXi5wZVKc%2FbnlH0bP3n%2BPNE4L7nPVS%2FnMMZV2xas3PdH6sHOq8YaOSefqUt0%2B47TnzrYKQ9GjocVEybt81cVBvtlOrv8wZ93nb%2FbHY5%2BB9Kz2WoF5pJY1SXfaNr7yeM8jHtx48Hl7kfGeQRanLFIRTmK9clGNN7zES0WnQdWf0SuO&X-Amz-Signature=466b53c2c817e2998ff32dfacf27becf5ea06939b9921175423009cc0ea26714&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMZOVIF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjfkM7zYuu86MMZnBaubPPSxqfXmDhO9AYMyqg9GJ8dAiBWUymJglbtZq%2BK8LImvXp%2BAlYz5Z9DwYst6TyDuxKSUSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiV1rpTX52pdiWzvuKtwDoU6exmjrVKujg6BD76NK1hwvtbGWaXFFz5jMBxntEb71e5ZY0IrAGobrET0r62ZqtoTlj511CMy1E0blHcnDNyR0y1yIpcVDZK%2BasoLUN1vzLSFIy1m8I%2Bx2qHCc%2BtMsiQLMa0Y4v%2FPRJSMHryCT9ZRp%2Bqo9WCN29AIlbVN%2BvXMa0WBP40MvLqI4Q6blSoLECyCs60WQZAjnx9gA3ZSUg%2Fb44fBMEIKHcEHRJ67YN7jMR55brT472L5vXbHjBkL6%2Bu4TXDbBU%2Bf%2FEiGQr1C4jSuprJuxl6aVi4cDkksbMezktHftONO8V7wb%2Fq0lsurJ1ytnNj0QHL%2Fu7uiJmEbcCklsSOYqFscdFJE0eoUS3vXMoqRddoLULFPfQxvb94ipMldbJQFdz3wmgLhPTMsOjotdqlAVtCDB3LeM6ZECLUmmX9MSn1BFdE0GssMtlRvjQQTMpv%2FQVlZf%2BsY3wxLYU%2FfHaIzaPrgOFXSejMz3eVmdU5Y0muvw0tiG91FSDdi5jb8kiXyaRdf7vYYn0rMpLwvOpGyOQsk54Q4ocKr49xxKf%2FVPTMBBSB0a6mSAbtD9Cg%2BnQFt4qerBi%2F8CEozSpCQ2SLmlQXWPQ6H554fAFSEpB3zy0ZR0zv8xxIIwi5PZvQY6pgFlTTYaB0M%2BbEEZPD%2BdCFnU%2BcTHnOHD3rBsydtUiHp47WVcMaXpXi5wZVKc%2FbnlH0bP3n%2BPNE4L7nPVS%2FnMMZV2xas3PdH6sHOq8YaOSefqUt0%2B47TnzrYKQ9GjocVEybt81cVBvtlOrv8wZ93nb%2FbHY5%2BB9Kz2WoF5pJY1SXfaNr7yeM8jHtx48Hl7kfGeQRanLFIRTmK9clGNN7zES0WnQdWf0SuO&X-Amz-Signature=8bdd60149d1ab10657150fd622934516821e03ff5e6f655f21c26972c851412f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMZOVIF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjfkM7zYuu86MMZnBaubPPSxqfXmDhO9AYMyqg9GJ8dAiBWUymJglbtZq%2BK8LImvXp%2BAlYz5Z9DwYst6TyDuxKSUSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiV1rpTX52pdiWzvuKtwDoU6exmjrVKujg6BD76NK1hwvtbGWaXFFz5jMBxntEb71e5ZY0IrAGobrET0r62ZqtoTlj511CMy1E0blHcnDNyR0y1yIpcVDZK%2BasoLUN1vzLSFIy1m8I%2Bx2qHCc%2BtMsiQLMa0Y4v%2FPRJSMHryCT9ZRp%2Bqo9WCN29AIlbVN%2BvXMa0WBP40MvLqI4Q6blSoLECyCs60WQZAjnx9gA3ZSUg%2Fb44fBMEIKHcEHRJ67YN7jMR55brT472L5vXbHjBkL6%2Bu4TXDbBU%2Bf%2FEiGQr1C4jSuprJuxl6aVi4cDkksbMezktHftONO8V7wb%2Fq0lsurJ1ytnNj0QHL%2Fu7uiJmEbcCklsSOYqFscdFJE0eoUS3vXMoqRddoLULFPfQxvb94ipMldbJQFdz3wmgLhPTMsOjotdqlAVtCDB3LeM6ZECLUmmX9MSn1BFdE0GssMtlRvjQQTMpv%2FQVlZf%2BsY3wxLYU%2FfHaIzaPrgOFXSejMz3eVmdU5Y0muvw0tiG91FSDdi5jb8kiXyaRdf7vYYn0rMpLwvOpGyOQsk54Q4ocKr49xxKf%2FVPTMBBSB0a6mSAbtD9Cg%2BnQFt4qerBi%2F8CEozSpCQ2SLmlQXWPQ6H554fAFSEpB3zy0ZR0zv8xxIIwi5PZvQY6pgFlTTYaB0M%2BbEEZPD%2BdCFnU%2BcTHnOHD3rBsydtUiHp47WVcMaXpXi5wZVKc%2FbnlH0bP3n%2BPNE4L7nPVS%2FnMMZV2xas3PdH6sHOq8YaOSefqUt0%2B47TnzrYKQ9GjocVEybt81cVBvtlOrv8wZ93nb%2FbHY5%2BB9Kz2WoF5pJY1SXfaNr7yeM8jHtx48Hl7kfGeQRanLFIRTmK9clGNN7zES0WnQdWf0SuO&X-Amz-Signature=f25ebacb437f2762964046a2d8044f606b259481201317efab42846f253bbf7d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMZOVIF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjfkM7zYuu86MMZnBaubPPSxqfXmDhO9AYMyqg9GJ8dAiBWUymJglbtZq%2BK8LImvXp%2BAlYz5Z9DwYst6TyDuxKSUSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiV1rpTX52pdiWzvuKtwDoU6exmjrVKujg6BD76NK1hwvtbGWaXFFz5jMBxntEb71e5ZY0IrAGobrET0r62ZqtoTlj511CMy1E0blHcnDNyR0y1yIpcVDZK%2BasoLUN1vzLSFIy1m8I%2Bx2qHCc%2BtMsiQLMa0Y4v%2FPRJSMHryCT9ZRp%2Bqo9WCN29AIlbVN%2BvXMa0WBP40MvLqI4Q6blSoLECyCs60WQZAjnx9gA3ZSUg%2Fb44fBMEIKHcEHRJ67YN7jMR55brT472L5vXbHjBkL6%2Bu4TXDbBU%2Bf%2FEiGQr1C4jSuprJuxl6aVi4cDkksbMezktHftONO8V7wb%2Fq0lsurJ1ytnNj0QHL%2Fu7uiJmEbcCklsSOYqFscdFJE0eoUS3vXMoqRddoLULFPfQxvb94ipMldbJQFdz3wmgLhPTMsOjotdqlAVtCDB3LeM6ZECLUmmX9MSn1BFdE0GssMtlRvjQQTMpv%2FQVlZf%2BsY3wxLYU%2FfHaIzaPrgOFXSejMz3eVmdU5Y0muvw0tiG91FSDdi5jb8kiXyaRdf7vYYn0rMpLwvOpGyOQsk54Q4ocKr49xxKf%2FVPTMBBSB0a6mSAbtD9Cg%2BnQFt4qerBi%2F8CEozSpCQ2SLmlQXWPQ6H554fAFSEpB3zy0ZR0zv8xxIIwi5PZvQY6pgFlTTYaB0M%2BbEEZPD%2BdCFnU%2BcTHnOHD3rBsydtUiHp47WVcMaXpXi5wZVKc%2FbnlH0bP3n%2BPNE4L7nPVS%2FnMMZV2xas3PdH6sHOq8YaOSefqUt0%2B47TnzrYKQ9GjocVEybt81cVBvtlOrv8wZ93nb%2FbHY5%2BB9Kz2WoF5pJY1SXfaNr7yeM8jHtx48Hl7kfGeQRanLFIRTmK9clGNN7zES0WnQdWf0SuO&X-Amz-Signature=2d2087a561e4fff16019d90b7d8ed2753590c52e97e37dbc325cf8a94fdcf6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMZOVIF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjfkM7zYuu86MMZnBaubPPSxqfXmDhO9AYMyqg9GJ8dAiBWUymJglbtZq%2BK8LImvXp%2BAlYz5Z9DwYst6TyDuxKSUSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiV1rpTX52pdiWzvuKtwDoU6exmjrVKujg6BD76NK1hwvtbGWaXFFz5jMBxntEb71e5ZY0IrAGobrET0r62ZqtoTlj511CMy1E0blHcnDNyR0y1yIpcVDZK%2BasoLUN1vzLSFIy1m8I%2Bx2qHCc%2BtMsiQLMa0Y4v%2FPRJSMHryCT9ZRp%2Bqo9WCN29AIlbVN%2BvXMa0WBP40MvLqI4Q6blSoLECyCs60WQZAjnx9gA3ZSUg%2Fb44fBMEIKHcEHRJ67YN7jMR55brT472L5vXbHjBkL6%2Bu4TXDbBU%2Bf%2FEiGQr1C4jSuprJuxl6aVi4cDkksbMezktHftONO8V7wb%2Fq0lsurJ1ytnNj0QHL%2Fu7uiJmEbcCklsSOYqFscdFJE0eoUS3vXMoqRddoLULFPfQxvb94ipMldbJQFdz3wmgLhPTMsOjotdqlAVtCDB3LeM6ZECLUmmX9MSn1BFdE0GssMtlRvjQQTMpv%2FQVlZf%2BsY3wxLYU%2FfHaIzaPrgOFXSejMz3eVmdU5Y0muvw0tiG91FSDdi5jb8kiXyaRdf7vYYn0rMpLwvOpGyOQsk54Q4ocKr49xxKf%2FVPTMBBSB0a6mSAbtD9Cg%2BnQFt4qerBi%2F8CEozSpCQ2SLmlQXWPQ6H554fAFSEpB3zy0ZR0zv8xxIIwi5PZvQY6pgFlTTYaB0M%2BbEEZPD%2BdCFnU%2BcTHnOHD3rBsydtUiHp47WVcMaXpXi5wZVKc%2FbnlH0bP3n%2BPNE4L7nPVS%2FnMMZV2xas3PdH6sHOq8YaOSefqUt0%2B47TnzrYKQ9GjocVEybt81cVBvtlOrv8wZ93nb%2FbHY5%2BB9Kz2WoF5pJY1SXfaNr7yeM8jHtx48Hl7kfGeQRanLFIRTmK9clGNN7zES0WnQdWf0SuO&X-Amz-Signature=de3cf4d5de5bfbd74329127dbdabea47a0c33ec9c7922b7883469cd7a380b36e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMZOVIF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjfkM7zYuu86MMZnBaubPPSxqfXmDhO9AYMyqg9GJ8dAiBWUymJglbtZq%2BK8LImvXp%2BAlYz5Z9DwYst6TyDuxKSUSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiV1rpTX52pdiWzvuKtwDoU6exmjrVKujg6BD76NK1hwvtbGWaXFFz5jMBxntEb71e5ZY0IrAGobrET0r62ZqtoTlj511CMy1E0blHcnDNyR0y1yIpcVDZK%2BasoLUN1vzLSFIy1m8I%2Bx2qHCc%2BtMsiQLMa0Y4v%2FPRJSMHryCT9ZRp%2Bqo9WCN29AIlbVN%2BvXMa0WBP40MvLqI4Q6blSoLECyCs60WQZAjnx9gA3ZSUg%2Fb44fBMEIKHcEHRJ67YN7jMR55brT472L5vXbHjBkL6%2Bu4TXDbBU%2Bf%2FEiGQr1C4jSuprJuxl6aVi4cDkksbMezktHftONO8V7wb%2Fq0lsurJ1ytnNj0QHL%2Fu7uiJmEbcCklsSOYqFscdFJE0eoUS3vXMoqRddoLULFPfQxvb94ipMldbJQFdz3wmgLhPTMsOjotdqlAVtCDB3LeM6ZECLUmmX9MSn1BFdE0GssMtlRvjQQTMpv%2FQVlZf%2BsY3wxLYU%2FfHaIzaPrgOFXSejMz3eVmdU5Y0muvw0tiG91FSDdi5jb8kiXyaRdf7vYYn0rMpLwvOpGyOQsk54Q4ocKr49xxKf%2FVPTMBBSB0a6mSAbtD9Cg%2BnQFt4qerBi%2F8CEozSpCQ2SLmlQXWPQ6H554fAFSEpB3zy0ZR0zv8xxIIwi5PZvQY6pgFlTTYaB0M%2BbEEZPD%2BdCFnU%2BcTHnOHD3rBsydtUiHp47WVcMaXpXi5wZVKc%2FbnlH0bP3n%2BPNE4L7nPVS%2FnMMZV2xas3PdH6sHOq8YaOSefqUt0%2B47TnzrYKQ9GjocVEybt81cVBvtlOrv8wZ93nb%2FbHY5%2BB9Kz2WoF5pJY1SXfaNr7yeM8jHtx48Hl7kfGeQRanLFIRTmK9clGNN7zES0WnQdWf0SuO&X-Amz-Signature=f1d08d27439189af5c7290fd814e08e060ce97e3e3fa4e2b2090aee5d8298d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMZOVIF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjfkM7zYuu86MMZnBaubPPSxqfXmDhO9AYMyqg9GJ8dAiBWUymJglbtZq%2BK8LImvXp%2BAlYz5Z9DwYst6TyDuxKSUSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiV1rpTX52pdiWzvuKtwDoU6exmjrVKujg6BD76NK1hwvtbGWaXFFz5jMBxntEb71e5ZY0IrAGobrET0r62ZqtoTlj511CMy1E0blHcnDNyR0y1yIpcVDZK%2BasoLUN1vzLSFIy1m8I%2Bx2qHCc%2BtMsiQLMa0Y4v%2FPRJSMHryCT9ZRp%2Bqo9WCN29AIlbVN%2BvXMa0WBP40MvLqI4Q6blSoLECyCs60WQZAjnx9gA3ZSUg%2Fb44fBMEIKHcEHRJ67YN7jMR55brT472L5vXbHjBkL6%2Bu4TXDbBU%2Bf%2FEiGQr1C4jSuprJuxl6aVi4cDkksbMezktHftONO8V7wb%2Fq0lsurJ1ytnNj0QHL%2Fu7uiJmEbcCklsSOYqFscdFJE0eoUS3vXMoqRddoLULFPfQxvb94ipMldbJQFdz3wmgLhPTMsOjotdqlAVtCDB3LeM6ZECLUmmX9MSn1BFdE0GssMtlRvjQQTMpv%2FQVlZf%2BsY3wxLYU%2FfHaIzaPrgOFXSejMz3eVmdU5Y0muvw0tiG91FSDdi5jb8kiXyaRdf7vYYn0rMpLwvOpGyOQsk54Q4ocKr49xxKf%2FVPTMBBSB0a6mSAbtD9Cg%2BnQFt4qerBi%2F8CEozSpCQ2SLmlQXWPQ6H554fAFSEpB3zy0ZR0zv8xxIIwi5PZvQY6pgFlTTYaB0M%2BbEEZPD%2BdCFnU%2BcTHnOHD3rBsydtUiHp47WVcMaXpXi5wZVKc%2FbnlH0bP3n%2BPNE4L7nPVS%2FnMMZV2xas3PdH6sHOq8YaOSefqUt0%2B47TnzrYKQ9GjocVEybt81cVBvtlOrv8wZ93nb%2FbHY5%2BB9Kz2WoF5pJY1SXfaNr7yeM8jHtx48Hl7kfGeQRanLFIRTmK9clGNN7zES0WnQdWf0SuO&X-Amz-Signature=d084514de5e84335e660d3822c954cc716e84c9cecff2f9e2fee7a20ae9c7c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMZOVIF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjfkM7zYuu86MMZnBaubPPSxqfXmDhO9AYMyqg9GJ8dAiBWUymJglbtZq%2BK8LImvXp%2BAlYz5Z9DwYst6TyDuxKSUSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiV1rpTX52pdiWzvuKtwDoU6exmjrVKujg6BD76NK1hwvtbGWaXFFz5jMBxntEb71e5ZY0IrAGobrET0r62ZqtoTlj511CMy1E0blHcnDNyR0y1yIpcVDZK%2BasoLUN1vzLSFIy1m8I%2Bx2qHCc%2BtMsiQLMa0Y4v%2FPRJSMHryCT9ZRp%2Bqo9WCN29AIlbVN%2BvXMa0WBP40MvLqI4Q6blSoLECyCs60WQZAjnx9gA3ZSUg%2Fb44fBMEIKHcEHRJ67YN7jMR55brT472L5vXbHjBkL6%2Bu4TXDbBU%2Bf%2FEiGQr1C4jSuprJuxl6aVi4cDkksbMezktHftONO8V7wb%2Fq0lsurJ1ytnNj0QHL%2Fu7uiJmEbcCklsSOYqFscdFJE0eoUS3vXMoqRddoLULFPfQxvb94ipMldbJQFdz3wmgLhPTMsOjotdqlAVtCDB3LeM6ZECLUmmX9MSn1BFdE0GssMtlRvjQQTMpv%2FQVlZf%2BsY3wxLYU%2FfHaIzaPrgOFXSejMz3eVmdU5Y0muvw0tiG91FSDdi5jb8kiXyaRdf7vYYn0rMpLwvOpGyOQsk54Q4ocKr49xxKf%2FVPTMBBSB0a6mSAbtD9Cg%2BnQFt4qerBi%2F8CEozSpCQ2SLmlQXWPQ6H554fAFSEpB3zy0ZR0zv8xxIIwi5PZvQY6pgFlTTYaB0M%2BbEEZPD%2BdCFnU%2BcTHnOHD3rBsydtUiHp47WVcMaXpXi5wZVKc%2FbnlH0bP3n%2BPNE4L7nPVS%2FnMMZV2xas3PdH6sHOq8YaOSefqUt0%2B47TnzrYKQ9GjocVEybt81cVBvtlOrv8wZ93nb%2FbHY5%2BB9Kz2WoF5pJY1SXfaNr7yeM8jHtx48Hl7kfGeQRanLFIRTmK9clGNN7zES0WnQdWf0SuO&X-Amz-Signature=2806003f3f0a5ed8635a660a3989c53a8cc26afb9e118e6fcf00dc4c0184a436&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
