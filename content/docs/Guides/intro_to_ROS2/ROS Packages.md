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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNC64ML%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI0bmzMtfpq8Px8sjOXk04h4JtVYNm7QpD3pExG3wJdAiBwW2d%2FFREn%2FRMdO%2Bznxn4WTQ6IfLAnmM38jrqNr0f6liqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa2UfIk%2BODd01KbqPKtwDBBBJQ5%2FKJ9Z05wPkrMbOf6owagPxfCDsZfJPyOd95Wj4AVeGAxbCq%2F1o0XHGY8xl7n21QBYhWcwQblelggmH58DKCOCWDraxifYC89jAQ0XUUBsthdO0X%2FW%2FiItt44HfFqZOa7qyfTt0Uj7mK%2BHl6uQwYgpx1ROMxWi%2FgAJnrafi3W1TsF9P095CDhOJ9Uw9VIpWMEvdWnhpEd3l4IY86KYPffn8lra91oAXwHtey8sy8L1Ex4whDnbya9GhytSp92UOipu4aCvRYwLa2zMr6Kzg5Ur1MQOgL8pQFA6d2lE64x%2FGRjV8hOFrhfsxttvLy%2B6p3MLK%2Bb2ad1O3l%2FEe2kEPNhzrCQWPfhg76mS50LBG7I7MRMOrt%2BKMmkm31QxS7oxsaoIk0pLxhRFImcogxiGWxlaIjG%2FDdDxtzE4ioOVCZhB3Wi%2F9eyRnzfFnmmn%2ByBjd4EU5AIAg6hIrbwAqzhLiSqEuSvJI72XtD3o4lZDLliHahgGcOeJuxArxPyoTlqkaMV8MFvWHg0HP6Wz%2BtxGicH%2FrIdMIg8AbBW%2B%2BVlb47ZxgfPRoaDMTttpoHUpoOZvuwMksmHZJ2yTFCdXn8ZMZFVrt%2BUa%2Bqmx0gjJEqJbx%2B2Wly01dfljQzEwwqITrwQY6pgErn08SFYYFcUJZwab0LRCaKgeA6qh2f4N3H9Gv9KIlGQ8ZjDDgNiie%2F4eKWOTJFo%2FVwDshUKZihI7stEV2gOlf3PQqs4onQO5CPNg0%2FgfcjlbJKAzJBSnn4KQ7GttQVqif9eTt4jRtpsZN1dxTnr4XPHt53ywCrH56PvICE5hdVFDMPYusuZT6TOFVQAf19UJ3uJLFQb5hteHT2bqqX1biwM9dGeEK&X-Amz-Signature=4ca2d67addf564100918196e4778173145502a13ad660962d7a02a8ba01eecd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNC64ML%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI0bmzMtfpq8Px8sjOXk04h4JtVYNm7QpD3pExG3wJdAiBwW2d%2FFREn%2FRMdO%2Bznxn4WTQ6IfLAnmM38jrqNr0f6liqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa2UfIk%2BODd01KbqPKtwDBBBJQ5%2FKJ9Z05wPkrMbOf6owagPxfCDsZfJPyOd95Wj4AVeGAxbCq%2F1o0XHGY8xl7n21QBYhWcwQblelggmH58DKCOCWDraxifYC89jAQ0XUUBsthdO0X%2FW%2FiItt44HfFqZOa7qyfTt0Uj7mK%2BHl6uQwYgpx1ROMxWi%2FgAJnrafi3W1TsF9P095CDhOJ9Uw9VIpWMEvdWnhpEd3l4IY86KYPffn8lra91oAXwHtey8sy8L1Ex4whDnbya9GhytSp92UOipu4aCvRYwLa2zMr6Kzg5Ur1MQOgL8pQFA6d2lE64x%2FGRjV8hOFrhfsxttvLy%2B6p3MLK%2Bb2ad1O3l%2FEe2kEPNhzrCQWPfhg76mS50LBG7I7MRMOrt%2BKMmkm31QxS7oxsaoIk0pLxhRFImcogxiGWxlaIjG%2FDdDxtzE4ioOVCZhB3Wi%2F9eyRnzfFnmmn%2ByBjd4EU5AIAg6hIrbwAqzhLiSqEuSvJI72XtD3o4lZDLliHahgGcOeJuxArxPyoTlqkaMV8MFvWHg0HP6Wz%2BtxGicH%2FrIdMIg8AbBW%2B%2BVlb47ZxgfPRoaDMTttpoHUpoOZvuwMksmHZJ2yTFCdXn8ZMZFVrt%2BUa%2Bqmx0gjJEqJbx%2B2Wly01dfljQzEwwqITrwQY6pgErn08SFYYFcUJZwab0LRCaKgeA6qh2f4N3H9Gv9KIlGQ8ZjDDgNiie%2F4eKWOTJFo%2FVwDshUKZihI7stEV2gOlf3PQqs4onQO5CPNg0%2FgfcjlbJKAzJBSnn4KQ7GttQVqif9eTt4jRtpsZN1dxTnr4XPHt53ywCrH56PvICE5hdVFDMPYusuZT6TOFVQAf19UJ3uJLFQb5hteHT2bqqX1biwM9dGeEK&X-Amz-Signature=4ccec5f9bc97642696ee2fd6ba987e80fdfa1de0c151808626d3b5e5141199b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNC64ML%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI0bmzMtfpq8Px8sjOXk04h4JtVYNm7QpD3pExG3wJdAiBwW2d%2FFREn%2FRMdO%2Bznxn4WTQ6IfLAnmM38jrqNr0f6liqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa2UfIk%2BODd01KbqPKtwDBBBJQ5%2FKJ9Z05wPkrMbOf6owagPxfCDsZfJPyOd95Wj4AVeGAxbCq%2F1o0XHGY8xl7n21QBYhWcwQblelggmH58DKCOCWDraxifYC89jAQ0XUUBsthdO0X%2FW%2FiItt44HfFqZOa7qyfTt0Uj7mK%2BHl6uQwYgpx1ROMxWi%2FgAJnrafi3W1TsF9P095CDhOJ9Uw9VIpWMEvdWnhpEd3l4IY86KYPffn8lra91oAXwHtey8sy8L1Ex4whDnbya9GhytSp92UOipu4aCvRYwLa2zMr6Kzg5Ur1MQOgL8pQFA6d2lE64x%2FGRjV8hOFrhfsxttvLy%2B6p3MLK%2Bb2ad1O3l%2FEe2kEPNhzrCQWPfhg76mS50LBG7I7MRMOrt%2BKMmkm31QxS7oxsaoIk0pLxhRFImcogxiGWxlaIjG%2FDdDxtzE4ioOVCZhB3Wi%2F9eyRnzfFnmmn%2ByBjd4EU5AIAg6hIrbwAqzhLiSqEuSvJI72XtD3o4lZDLliHahgGcOeJuxArxPyoTlqkaMV8MFvWHg0HP6Wz%2BtxGicH%2FrIdMIg8AbBW%2B%2BVlb47ZxgfPRoaDMTttpoHUpoOZvuwMksmHZJ2yTFCdXn8ZMZFVrt%2BUa%2Bqmx0gjJEqJbx%2B2Wly01dfljQzEwwqITrwQY6pgErn08SFYYFcUJZwab0LRCaKgeA6qh2f4N3H9Gv9KIlGQ8ZjDDgNiie%2F4eKWOTJFo%2FVwDshUKZihI7stEV2gOlf3PQqs4onQO5CPNg0%2FgfcjlbJKAzJBSnn4KQ7GttQVqif9eTt4jRtpsZN1dxTnr4XPHt53ywCrH56PvICE5hdVFDMPYusuZT6TOFVQAf19UJ3uJLFQb5hteHT2bqqX1biwM9dGeEK&X-Amz-Signature=2bd8f165d80c133ab88751d5662038da5191d014e913213a38118e190b064708&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNC64ML%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI0bmzMtfpq8Px8sjOXk04h4JtVYNm7QpD3pExG3wJdAiBwW2d%2FFREn%2FRMdO%2Bznxn4WTQ6IfLAnmM38jrqNr0f6liqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa2UfIk%2BODd01KbqPKtwDBBBJQ5%2FKJ9Z05wPkrMbOf6owagPxfCDsZfJPyOd95Wj4AVeGAxbCq%2F1o0XHGY8xl7n21QBYhWcwQblelggmH58DKCOCWDraxifYC89jAQ0XUUBsthdO0X%2FW%2FiItt44HfFqZOa7qyfTt0Uj7mK%2BHl6uQwYgpx1ROMxWi%2FgAJnrafi3W1TsF9P095CDhOJ9Uw9VIpWMEvdWnhpEd3l4IY86KYPffn8lra91oAXwHtey8sy8L1Ex4whDnbya9GhytSp92UOipu4aCvRYwLa2zMr6Kzg5Ur1MQOgL8pQFA6d2lE64x%2FGRjV8hOFrhfsxttvLy%2B6p3MLK%2Bb2ad1O3l%2FEe2kEPNhzrCQWPfhg76mS50LBG7I7MRMOrt%2BKMmkm31QxS7oxsaoIk0pLxhRFImcogxiGWxlaIjG%2FDdDxtzE4ioOVCZhB3Wi%2F9eyRnzfFnmmn%2ByBjd4EU5AIAg6hIrbwAqzhLiSqEuSvJI72XtD3o4lZDLliHahgGcOeJuxArxPyoTlqkaMV8MFvWHg0HP6Wz%2BtxGicH%2FrIdMIg8AbBW%2B%2BVlb47ZxgfPRoaDMTttpoHUpoOZvuwMksmHZJ2yTFCdXn8ZMZFVrt%2BUa%2Bqmx0gjJEqJbx%2B2Wly01dfljQzEwwqITrwQY6pgErn08SFYYFcUJZwab0LRCaKgeA6qh2f4N3H9Gv9KIlGQ8ZjDDgNiie%2F4eKWOTJFo%2FVwDshUKZihI7stEV2gOlf3PQqs4onQO5CPNg0%2FgfcjlbJKAzJBSnn4KQ7GttQVqif9eTt4jRtpsZN1dxTnr4XPHt53ywCrH56PvICE5hdVFDMPYusuZT6TOFVQAf19UJ3uJLFQb5hteHT2bqqX1biwM9dGeEK&X-Amz-Signature=0cfab0c13ab44636c8310d8a8e4dc67e0b8853cfc561752cf6571b1d22a9ee72&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNC64ML%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI0bmzMtfpq8Px8sjOXk04h4JtVYNm7QpD3pExG3wJdAiBwW2d%2FFREn%2FRMdO%2Bznxn4WTQ6IfLAnmM38jrqNr0f6liqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa2UfIk%2BODd01KbqPKtwDBBBJQ5%2FKJ9Z05wPkrMbOf6owagPxfCDsZfJPyOd95Wj4AVeGAxbCq%2F1o0XHGY8xl7n21QBYhWcwQblelggmH58DKCOCWDraxifYC89jAQ0XUUBsthdO0X%2FW%2FiItt44HfFqZOa7qyfTt0Uj7mK%2BHl6uQwYgpx1ROMxWi%2FgAJnrafi3W1TsF9P095CDhOJ9Uw9VIpWMEvdWnhpEd3l4IY86KYPffn8lra91oAXwHtey8sy8L1Ex4whDnbya9GhytSp92UOipu4aCvRYwLa2zMr6Kzg5Ur1MQOgL8pQFA6d2lE64x%2FGRjV8hOFrhfsxttvLy%2B6p3MLK%2Bb2ad1O3l%2FEe2kEPNhzrCQWPfhg76mS50LBG7I7MRMOrt%2BKMmkm31QxS7oxsaoIk0pLxhRFImcogxiGWxlaIjG%2FDdDxtzE4ioOVCZhB3Wi%2F9eyRnzfFnmmn%2ByBjd4EU5AIAg6hIrbwAqzhLiSqEuSvJI72XtD3o4lZDLliHahgGcOeJuxArxPyoTlqkaMV8MFvWHg0HP6Wz%2BtxGicH%2FrIdMIg8AbBW%2B%2BVlb47ZxgfPRoaDMTttpoHUpoOZvuwMksmHZJ2yTFCdXn8ZMZFVrt%2BUa%2Bqmx0gjJEqJbx%2B2Wly01dfljQzEwwqITrwQY6pgErn08SFYYFcUJZwab0LRCaKgeA6qh2f4N3H9Gv9KIlGQ8ZjDDgNiie%2F4eKWOTJFo%2FVwDshUKZihI7stEV2gOlf3PQqs4onQO5CPNg0%2FgfcjlbJKAzJBSnn4KQ7GttQVqif9eTt4jRtpsZN1dxTnr4XPHt53ywCrH56PvICE5hdVFDMPYusuZT6TOFVQAf19UJ3uJLFQb5hteHT2bqqX1biwM9dGeEK&X-Amz-Signature=77a5ba24883a2d916e9509b029e01562ac9ddb87c85329136ec130b6876edf75&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNC64ML%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI0bmzMtfpq8Px8sjOXk04h4JtVYNm7QpD3pExG3wJdAiBwW2d%2FFREn%2FRMdO%2Bznxn4WTQ6IfLAnmM38jrqNr0f6liqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa2UfIk%2BODd01KbqPKtwDBBBJQ5%2FKJ9Z05wPkrMbOf6owagPxfCDsZfJPyOd95Wj4AVeGAxbCq%2F1o0XHGY8xl7n21QBYhWcwQblelggmH58DKCOCWDraxifYC89jAQ0XUUBsthdO0X%2FW%2FiItt44HfFqZOa7qyfTt0Uj7mK%2BHl6uQwYgpx1ROMxWi%2FgAJnrafi3W1TsF9P095CDhOJ9Uw9VIpWMEvdWnhpEd3l4IY86KYPffn8lra91oAXwHtey8sy8L1Ex4whDnbya9GhytSp92UOipu4aCvRYwLa2zMr6Kzg5Ur1MQOgL8pQFA6d2lE64x%2FGRjV8hOFrhfsxttvLy%2B6p3MLK%2Bb2ad1O3l%2FEe2kEPNhzrCQWPfhg76mS50LBG7I7MRMOrt%2BKMmkm31QxS7oxsaoIk0pLxhRFImcogxiGWxlaIjG%2FDdDxtzE4ioOVCZhB3Wi%2F9eyRnzfFnmmn%2ByBjd4EU5AIAg6hIrbwAqzhLiSqEuSvJI72XtD3o4lZDLliHahgGcOeJuxArxPyoTlqkaMV8MFvWHg0HP6Wz%2BtxGicH%2FrIdMIg8AbBW%2B%2BVlb47ZxgfPRoaDMTttpoHUpoOZvuwMksmHZJ2yTFCdXn8ZMZFVrt%2BUa%2Bqmx0gjJEqJbx%2B2Wly01dfljQzEwwqITrwQY6pgErn08SFYYFcUJZwab0LRCaKgeA6qh2f4N3H9Gv9KIlGQ8ZjDDgNiie%2F4eKWOTJFo%2FVwDshUKZihI7stEV2gOlf3PQqs4onQO5CPNg0%2FgfcjlbJKAzJBSnn4KQ7GttQVqif9eTt4jRtpsZN1dxTnr4XPHt53ywCrH56PvICE5hdVFDMPYusuZT6TOFVQAf19UJ3uJLFQb5hteHT2bqqX1biwM9dGeEK&X-Amz-Signature=0361f64958a900e7d75eb64142d8b8feb8484d1b6deb826ebb38d9b6d4a7e5be&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNC64ML%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI0bmzMtfpq8Px8sjOXk04h4JtVYNm7QpD3pExG3wJdAiBwW2d%2FFREn%2FRMdO%2Bznxn4WTQ6IfLAnmM38jrqNr0f6liqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa2UfIk%2BODd01KbqPKtwDBBBJQ5%2FKJ9Z05wPkrMbOf6owagPxfCDsZfJPyOd95Wj4AVeGAxbCq%2F1o0XHGY8xl7n21QBYhWcwQblelggmH58DKCOCWDraxifYC89jAQ0XUUBsthdO0X%2FW%2FiItt44HfFqZOa7qyfTt0Uj7mK%2BHl6uQwYgpx1ROMxWi%2FgAJnrafi3W1TsF9P095CDhOJ9Uw9VIpWMEvdWnhpEd3l4IY86KYPffn8lra91oAXwHtey8sy8L1Ex4whDnbya9GhytSp92UOipu4aCvRYwLa2zMr6Kzg5Ur1MQOgL8pQFA6d2lE64x%2FGRjV8hOFrhfsxttvLy%2B6p3MLK%2Bb2ad1O3l%2FEe2kEPNhzrCQWPfhg76mS50LBG7I7MRMOrt%2BKMmkm31QxS7oxsaoIk0pLxhRFImcogxiGWxlaIjG%2FDdDxtzE4ioOVCZhB3Wi%2F9eyRnzfFnmmn%2ByBjd4EU5AIAg6hIrbwAqzhLiSqEuSvJI72XtD3o4lZDLliHahgGcOeJuxArxPyoTlqkaMV8MFvWHg0HP6Wz%2BtxGicH%2FrIdMIg8AbBW%2B%2BVlb47ZxgfPRoaDMTttpoHUpoOZvuwMksmHZJ2yTFCdXn8ZMZFVrt%2BUa%2Bqmx0gjJEqJbx%2B2Wly01dfljQzEwwqITrwQY6pgErn08SFYYFcUJZwab0LRCaKgeA6qh2f4N3H9Gv9KIlGQ8ZjDDgNiie%2F4eKWOTJFo%2FVwDshUKZihI7stEV2gOlf3PQqs4onQO5CPNg0%2FgfcjlbJKAzJBSnn4KQ7GttQVqif9eTt4jRtpsZN1dxTnr4XPHt53ywCrH56PvICE5hdVFDMPYusuZT6TOFVQAf19UJ3uJLFQb5hteHT2bqqX1biwM9dGeEK&X-Amz-Signature=ed2234a69d62c3bbca4c8238be7fce52c81c96fc56e9bc0233eea2563d88a10f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
