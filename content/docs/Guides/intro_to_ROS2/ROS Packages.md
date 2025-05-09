---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKK24JM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4LPa5%2FztWf6%2FoQ0jFc7NoVfFzjagOeIYd4yIA1E0ugIgbMUlSG8CyGNkB1TEXdGSuEVM8gSQ5rhhZ7fuemSXH90qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIi0uZP2YNrBd%2BXqCrcA%2Fj32IgGUrV570XLBbl54KpKnq94ZyXw4%2F%2FpxKnbqGRMr1NcQNREFcnL0IFN%2FQCwyfSNwlFpAui3IsdljH9%2BCLwL0Phn4qopX%2BeQ1hHATwNJIO9XT8nDzFJQ%2FK7PBFuM6TL53VaVWekBrY%2FNENy8VHZYis%2ByWa%2FkDHJDIJmBuidJLkwlpTJ1KpIrZRRscJjjOIhiKbjMLMK2C4oKQDmldagaPTEhXJ3rlqWOfQko14UJvMq0T9eHwY12jonrD9yi%2BOINIadhA%2FPFpVJr04jVN60yjKMSHDw73Wxpd2CWHe%2FE1Lmuo9wf1kcZo%2BFn4WWw9mpFgXutdeJV7V8XOv2JCr3B42l6sWwU8zANFd81XtV3%2FnzwNAYPSJBRDKhCZXAw06rvUqt1oZs13epJsxywB52XFptAt4xBqnFgwSV3Brs5jwQm%2FAyLp5YMxm8OLz4O0edQJ5WRDGn5MihVwlGqwYiM7I7Tp0SFMPCNRm8s%2FOPnps78nBx%2Fuv0pL6x%2Fczh6BFKje0Q0SS3MWuzhfq%2BzjlReyRBTHfP2Hgiqai3l7AVI5u1Fw095XIrzuj7K3uX%2F4vqZyD6vIJ5pYmK%2BlrexzxNePevDiH528B6XJ1gkJTPmqk0mQXmw4d6aYz0XMKWH%2BMAGOqUBLqQKIJRj3K%2FIEPOp3BmZIm5TX9TDJSUFKK%2F4%2FkJH1A8OpJ8SK37Jo9ffIYuJOMhepw9%2B1t8d17HXb78XKLcB5QBfSltUtKiCge%2FZMLwCtudfsc6tV73HGVuHC0VSaE4U%2B4vS9NexyhlQ1IYRRjRLy8yU9kf9RlPcB7TSS6J1QFt2gEuCofUCcJ5kUcEMVFXDFYlW58D99DjS7t1OwtCPzBBZkmIX&X-Amz-Signature=71130261ab9f6259d7582def05e0335a6215670f1796a6a5ced67c1329814375&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKK24JM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4LPa5%2FztWf6%2FoQ0jFc7NoVfFzjagOeIYd4yIA1E0ugIgbMUlSG8CyGNkB1TEXdGSuEVM8gSQ5rhhZ7fuemSXH90qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIi0uZP2YNrBd%2BXqCrcA%2Fj32IgGUrV570XLBbl54KpKnq94ZyXw4%2F%2FpxKnbqGRMr1NcQNREFcnL0IFN%2FQCwyfSNwlFpAui3IsdljH9%2BCLwL0Phn4qopX%2BeQ1hHATwNJIO9XT8nDzFJQ%2FK7PBFuM6TL53VaVWekBrY%2FNENy8VHZYis%2ByWa%2FkDHJDIJmBuidJLkwlpTJ1KpIrZRRscJjjOIhiKbjMLMK2C4oKQDmldagaPTEhXJ3rlqWOfQko14UJvMq0T9eHwY12jonrD9yi%2BOINIadhA%2FPFpVJr04jVN60yjKMSHDw73Wxpd2CWHe%2FE1Lmuo9wf1kcZo%2BFn4WWw9mpFgXutdeJV7V8XOv2JCr3B42l6sWwU8zANFd81XtV3%2FnzwNAYPSJBRDKhCZXAw06rvUqt1oZs13epJsxywB52XFptAt4xBqnFgwSV3Brs5jwQm%2FAyLp5YMxm8OLz4O0edQJ5WRDGn5MihVwlGqwYiM7I7Tp0SFMPCNRm8s%2FOPnps78nBx%2Fuv0pL6x%2Fczh6BFKje0Q0SS3MWuzhfq%2BzjlReyRBTHfP2Hgiqai3l7AVI5u1Fw095XIrzuj7K3uX%2F4vqZyD6vIJ5pYmK%2BlrexzxNePevDiH528B6XJ1gkJTPmqk0mQXmw4d6aYz0XMKWH%2BMAGOqUBLqQKIJRj3K%2FIEPOp3BmZIm5TX9TDJSUFKK%2F4%2FkJH1A8OpJ8SK37Jo9ffIYuJOMhepw9%2B1t8d17HXb78XKLcB5QBfSltUtKiCge%2FZMLwCtudfsc6tV73HGVuHC0VSaE4U%2B4vS9NexyhlQ1IYRRjRLy8yU9kf9RlPcB7TSS6J1QFt2gEuCofUCcJ5kUcEMVFXDFYlW58D99DjS7t1OwtCPzBBZkmIX&X-Amz-Signature=48464fa9d1dd618bb69478c7279d06c7c16bce99f787d956b0b5daa0d8abd11a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKK24JM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4LPa5%2FztWf6%2FoQ0jFc7NoVfFzjagOeIYd4yIA1E0ugIgbMUlSG8CyGNkB1TEXdGSuEVM8gSQ5rhhZ7fuemSXH90qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIi0uZP2YNrBd%2BXqCrcA%2Fj32IgGUrV570XLBbl54KpKnq94ZyXw4%2F%2FpxKnbqGRMr1NcQNREFcnL0IFN%2FQCwyfSNwlFpAui3IsdljH9%2BCLwL0Phn4qopX%2BeQ1hHATwNJIO9XT8nDzFJQ%2FK7PBFuM6TL53VaVWekBrY%2FNENy8VHZYis%2ByWa%2FkDHJDIJmBuidJLkwlpTJ1KpIrZRRscJjjOIhiKbjMLMK2C4oKQDmldagaPTEhXJ3rlqWOfQko14UJvMq0T9eHwY12jonrD9yi%2BOINIadhA%2FPFpVJr04jVN60yjKMSHDw73Wxpd2CWHe%2FE1Lmuo9wf1kcZo%2BFn4WWw9mpFgXutdeJV7V8XOv2JCr3B42l6sWwU8zANFd81XtV3%2FnzwNAYPSJBRDKhCZXAw06rvUqt1oZs13epJsxywB52XFptAt4xBqnFgwSV3Brs5jwQm%2FAyLp5YMxm8OLz4O0edQJ5WRDGn5MihVwlGqwYiM7I7Tp0SFMPCNRm8s%2FOPnps78nBx%2Fuv0pL6x%2Fczh6BFKje0Q0SS3MWuzhfq%2BzjlReyRBTHfP2Hgiqai3l7AVI5u1Fw095XIrzuj7K3uX%2F4vqZyD6vIJ5pYmK%2BlrexzxNePevDiH528B6XJ1gkJTPmqk0mQXmw4d6aYz0XMKWH%2BMAGOqUBLqQKIJRj3K%2FIEPOp3BmZIm5TX9TDJSUFKK%2F4%2FkJH1A8OpJ8SK37Jo9ffIYuJOMhepw9%2B1t8d17HXb78XKLcB5QBfSltUtKiCge%2FZMLwCtudfsc6tV73HGVuHC0VSaE4U%2B4vS9NexyhlQ1IYRRjRLy8yU9kf9RlPcB7TSS6J1QFt2gEuCofUCcJ5kUcEMVFXDFYlW58D99DjS7t1OwtCPzBBZkmIX&X-Amz-Signature=86b893be968dc9e66b5c1ebdbc11cb19087fc3e03b4c4242ed7a3075e1c3c12a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKK24JM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4LPa5%2FztWf6%2FoQ0jFc7NoVfFzjagOeIYd4yIA1E0ugIgbMUlSG8CyGNkB1TEXdGSuEVM8gSQ5rhhZ7fuemSXH90qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIi0uZP2YNrBd%2BXqCrcA%2Fj32IgGUrV570XLBbl54KpKnq94ZyXw4%2F%2FpxKnbqGRMr1NcQNREFcnL0IFN%2FQCwyfSNwlFpAui3IsdljH9%2BCLwL0Phn4qopX%2BeQ1hHATwNJIO9XT8nDzFJQ%2FK7PBFuM6TL53VaVWekBrY%2FNENy8VHZYis%2ByWa%2FkDHJDIJmBuidJLkwlpTJ1KpIrZRRscJjjOIhiKbjMLMK2C4oKQDmldagaPTEhXJ3rlqWOfQko14UJvMq0T9eHwY12jonrD9yi%2BOINIadhA%2FPFpVJr04jVN60yjKMSHDw73Wxpd2CWHe%2FE1Lmuo9wf1kcZo%2BFn4WWw9mpFgXutdeJV7V8XOv2JCr3B42l6sWwU8zANFd81XtV3%2FnzwNAYPSJBRDKhCZXAw06rvUqt1oZs13epJsxywB52XFptAt4xBqnFgwSV3Brs5jwQm%2FAyLp5YMxm8OLz4O0edQJ5WRDGn5MihVwlGqwYiM7I7Tp0SFMPCNRm8s%2FOPnps78nBx%2Fuv0pL6x%2Fczh6BFKje0Q0SS3MWuzhfq%2BzjlReyRBTHfP2Hgiqai3l7AVI5u1Fw095XIrzuj7K3uX%2F4vqZyD6vIJ5pYmK%2BlrexzxNePevDiH528B6XJ1gkJTPmqk0mQXmw4d6aYz0XMKWH%2BMAGOqUBLqQKIJRj3K%2FIEPOp3BmZIm5TX9TDJSUFKK%2F4%2FkJH1A8OpJ8SK37Jo9ffIYuJOMhepw9%2B1t8d17HXb78XKLcB5QBfSltUtKiCge%2FZMLwCtudfsc6tV73HGVuHC0VSaE4U%2B4vS9NexyhlQ1IYRRjRLy8yU9kf9RlPcB7TSS6J1QFt2gEuCofUCcJ5kUcEMVFXDFYlW58D99DjS7t1OwtCPzBBZkmIX&X-Amz-Signature=b2cd3295a544cfc009cf648a83ce5365da2305cedc8b3bc1e3a1495235cf5e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKK24JM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4LPa5%2FztWf6%2FoQ0jFc7NoVfFzjagOeIYd4yIA1E0ugIgbMUlSG8CyGNkB1TEXdGSuEVM8gSQ5rhhZ7fuemSXH90qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIi0uZP2YNrBd%2BXqCrcA%2Fj32IgGUrV570XLBbl54KpKnq94ZyXw4%2F%2FpxKnbqGRMr1NcQNREFcnL0IFN%2FQCwyfSNwlFpAui3IsdljH9%2BCLwL0Phn4qopX%2BeQ1hHATwNJIO9XT8nDzFJQ%2FK7PBFuM6TL53VaVWekBrY%2FNENy8VHZYis%2ByWa%2FkDHJDIJmBuidJLkwlpTJ1KpIrZRRscJjjOIhiKbjMLMK2C4oKQDmldagaPTEhXJ3rlqWOfQko14UJvMq0T9eHwY12jonrD9yi%2BOINIadhA%2FPFpVJr04jVN60yjKMSHDw73Wxpd2CWHe%2FE1Lmuo9wf1kcZo%2BFn4WWw9mpFgXutdeJV7V8XOv2JCr3B42l6sWwU8zANFd81XtV3%2FnzwNAYPSJBRDKhCZXAw06rvUqt1oZs13epJsxywB52XFptAt4xBqnFgwSV3Brs5jwQm%2FAyLp5YMxm8OLz4O0edQJ5WRDGn5MihVwlGqwYiM7I7Tp0SFMPCNRm8s%2FOPnps78nBx%2Fuv0pL6x%2Fczh6BFKje0Q0SS3MWuzhfq%2BzjlReyRBTHfP2Hgiqai3l7AVI5u1Fw095XIrzuj7K3uX%2F4vqZyD6vIJ5pYmK%2BlrexzxNePevDiH528B6XJ1gkJTPmqk0mQXmw4d6aYz0XMKWH%2BMAGOqUBLqQKIJRj3K%2FIEPOp3BmZIm5TX9TDJSUFKK%2F4%2FkJH1A8OpJ8SK37Jo9ffIYuJOMhepw9%2B1t8d17HXb78XKLcB5QBfSltUtKiCge%2FZMLwCtudfsc6tV73HGVuHC0VSaE4U%2B4vS9NexyhlQ1IYRRjRLy8yU9kf9RlPcB7TSS6J1QFt2gEuCofUCcJ5kUcEMVFXDFYlW58D99DjS7t1OwtCPzBBZkmIX&X-Amz-Signature=c9cdc2343a12a6d5f9e0ec24fde4aeee5f5b84e50131f6a1207cb408e415a483&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKK24JM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4LPa5%2FztWf6%2FoQ0jFc7NoVfFzjagOeIYd4yIA1E0ugIgbMUlSG8CyGNkB1TEXdGSuEVM8gSQ5rhhZ7fuemSXH90qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIi0uZP2YNrBd%2BXqCrcA%2Fj32IgGUrV570XLBbl54KpKnq94ZyXw4%2F%2FpxKnbqGRMr1NcQNREFcnL0IFN%2FQCwyfSNwlFpAui3IsdljH9%2BCLwL0Phn4qopX%2BeQ1hHATwNJIO9XT8nDzFJQ%2FK7PBFuM6TL53VaVWekBrY%2FNENy8VHZYis%2ByWa%2FkDHJDIJmBuidJLkwlpTJ1KpIrZRRscJjjOIhiKbjMLMK2C4oKQDmldagaPTEhXJ3rlqWOfQko14UJvMq0T9eHwY12jonrD9yi%2BOINIadhA%2FPFpVJr04jVN60yjKMSHDw73Wxpd2CWHe%2FE1Lmuo9wf1kcZo%2BFn4WWw9mpFgXutdeJV7V8XOv2JCr3B42l6sWwU8zANFd81XtV3%2FnzwNAYPSJBRDKhCZXAw06rvUqt1oZs13epJsxywB52XFptAt4xBqnFgwSV3Brs5jwQm%2FAyLp5YMxm8OLz4O0edQJ5WRDGn5MihVwlGqwYiM7I7Tp0SFMPCNRm8s%2FOPnps78nBx%2Fuv0pL6x%2Fczh6BFKje0Q0SS3MWuzhfq%2BzjlReyRBTHfP2Hgiqai3l7AVI5u1Fw095XIrzuj7K3uX%2F4vqZyD6vIJ5pYmK%2BlrexzxNePevDiH528B6XJ1gkJTPmqk0mQXmw4d6aYz0XMKWH%2BMAGOqUBLqQKIJRj3K%2FIEPOp3BmZIm5TX9TDJSUFKK%2F4%2FkJH1A8OpJ8SK37Jo9ffIYuJOMhepw9%2B1t8d17HXb78XKLcB5QBfSltUtKiCge%2FZMLwCtudfsc6tV73HGVuHC0VSaE4U%2B4vS9NexyhlQ1IYRRjRLy8yU9kf9RlPcB7TSS6J1QFt2gEuCofUCcJ5kUcEMVFXDFYlW58D99DjS7t1OwtCPzBBZkmIX&X-Amz-Signature=8f0ce13f8545f628e03d9b6e4f123db900925dc2b61bd5dd76e6936136c77c49&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HKK24JM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe4LPa5%2FztWf6%2FoQ0jFc7NoVfFzjagOeIYd4yIA1E0ugIgbMUlSG8CyGNkB1TEXdGSuEVM8gSQ5rhhZ7fuemSXH90qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIi0uZP2YNrBd%2BXqCrcA%2Fj32IgGUrV570XLBbl54KpKnq94ZyXw4%2F%2FpxKnbqGRMr1NcQNREFcnL0IFN%2FQCwyfSNwlFpAui3IsdljH9%2BCLwL0Phn4qopX%2BeQ1hHATwNJIO9XT8nDzFJQ%2FK7PBFuM6TL53VaVWekBrY%2FNENy8VHZYis%2ByWa%2FkDHJDIJmBuidJLkwlpTJ1KpIrZRRscJjjOIhiKbjMLMK2C4oKQDmldagaPTEhXJ3rlqWOfQko14UJvMq0T9eHwY12jonrD9yi%2BOINIadhA%2FPFpVJr04jVN60yjKMSHDw73Wxpd2CWHe%2FE1Lmuo9wf1kcZo%2BFn4WWw9mpFgXutdeJV7V8XOv2JCr3B42l6sWwU8zANFd81XtV3%2FnzwNAYPSJBRDKhCZXAw06rvUqt1oZs13epJsxywB52XFptAt4xBqnFgwSV3Brs5jwQm%2FAyLp5YMxm8OLz4O0edQJ5WRDGn5MihVwlGqwYiM7I7Tp0SFMPCNRm8s%2FOPnps78nBx%2Fuv0pL6x%2Fczh6BFKje0Q0SS3MWuzhfq%2BzjlReyRBTHfP2Hgiqai3l7AVI5u1Fw095XIrzuj7K3uX%2F4vqZyD6vIJ5pYmK%2BlrexzxNePevDiH528B6XJ1gkJTPmqk0mQXmw4d6aYz0XMKWH%2BMAGOqUBLqQKIJRj3K%2FIEPOp3BmZIm5TX9TDJSUFKK%2F4%2FkJH1A8OpJ8SK37Jo9ffIYuJOMhepw9%2B1t8d17HXb78XKLcB5QBfSltUtKiCge%2FZMLwCtudfsc6tV73HGVuHC0VSaE4U%2B4vS9NexyhlQ1IYRRjRLy8yU9kf9RlPcB7TSS6J1QFt2gEuCofUCcJ5kUcEMVFXDFYlW58D99DjS7t1OwtCPzBBZkmIX&X-Amz-Signature=30511eafa2dcbcd2dfc4c8dd212a644900d10d06295fa17ade25a81e15174a75&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
