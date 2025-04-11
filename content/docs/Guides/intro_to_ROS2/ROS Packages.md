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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7D6VDRZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDNrvavlfOUFajF8GhB%2BNkyBOTJhRobWvvy75eOeSxtEgIhAKWqqG1bZDssu0NYJGaaL01UBYi8gnCOtfSDBCwmu9l1KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWtbiK0kJ%2Bqo6wZsq3APd%2ByKGHpj2v%2BKFSycBaXOVeQw4dJCxpPB6LNNt1uzIMh%2FCCY8gwkeUvcX%2BGhiCYscDo7vdnkpr9l07LjoDHqMcCO0ukcadWJaXQ6APVjW4n1aYLVyj2Zi%2F32rCZMaDqRBKQZluLeiG3Oep22lR%2BX7PdySQXv8FuTYXw7XId0FzoAkhTeEP0LJeHcdS7qmuiRYhDbGnG98WpBAivrJLfmCMqm1QGy%2BXzZSAj%2Bkbmj8CorORv1g7nLGflqNbLpC%2BSqyZVG%2FC%2F8LAb7L%2BPI0xgxNFqmo4GtxJisvUAC%2FWc%2B945iNdjxk1P6GAU5FCg5Kl7YWnYvKfXsFaDIBdOELMW6W2IwT9myXZl%2FvOFD9pMtNDxi3Asd6cVZXmEemDtrdbUc%2FcGYC9qt7lYtsynE12nDYBNRxCBF3icsFOGV%2FnomYGplSQTlekvw3XhVM%2FwTEDSC4embRaswwfphTngHfUiew%2Bue9hF1O6E5OIKen3e8iDZJztHmaslWhH0We%2FiriTbkOHee7D06b64A%2BxSBYJHCIsHsPvophdeuizw%2FyiVLxp0mW9ViPiX4QobQGRyYScu8OTqAPxgV4%2ByQiUy5QZxj5hX9zK4WHxfBIfk1iTqGPwUntsfR0Zg8GWrIndfDCO8eW%2FBjqkAezN3Y0n50gr2I4ukRqfQ5jUhwyZZIVoc434UotE9aVwQvfRImaE5TC%2F5ZRhsaXgZeM9m%2BDxWCfw%2FWTcYi5RdQj%2B4QiGepdZf%2FwGPVniBKesFGg%2Fo%2BI9FKS6ha2hswwJ1xtpaSCj6dIxNJNug84kOsdL4rUu4YKpnF8%2F4aWQBkWIVoBbGV21YqERVKAK6BxWiFhE%2BQ6UAFhwa2v7HXpEciHmhU2h&X-Amz-Signature=785ba7702f7154ebebd2650e2267e177e5fcf2f847abeae3e4de5573db5dc6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7D6VDRZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDNrvavlfOUFajF8GhB%2BNkyBOTJhRobWvvy75eOeSxtEgIhAKWqqG1bZDssu0NYJGaaL01UBYi8gnCOtfSDBCwmu9l1KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWtbiK0kJ%2Bqo6wZsq3APd%2ByKGHpj2v%2BKFSycBaXOVeQw4dJCxpPB6LNNt1uzIMh%2FCCY8gwkeUvcX%2BGhiCYscDo7vdnkpr9l07LjoDHqMcCO0ukcadWJaXQ6APVjW4n1aYLVyj2Zi%2F32rCZMaDqRBKQZluLeiG3Oep22lR%2BX7PdySQXv8FuTYXw7XId0FzoAkhTeEP0LJeHcdS7qmuiRYhDbGnG98WpBAivrJLfmCMqm1QGy%2BXzZSAj%2Bkbmj8CorORv1g7nLGflqNbLpC%2BSqyZVG%2FC%2F8LAb7L%2BPI0xgxNFqmo4GtxJisvUAC%2FWc%2B945iNdjxk1P6GAU5FCg5Kl7YWnYvKfXsFaDIBdOELMW6W2IwT9myXZl%2FvOFD9pMtNDxi3Asd6cVZXmEemDtrdbUc%2FcGYC9qt7lYtsynE12nDYBNRxCBF3icsFOGV%2FnomYGplSQTlekvw3XhVM%2FwTEDSC4embRaswwfphTngHfUiew%2Bue9hF1O6E5OIKen3e8iDZJztHmaslWhH0We%2FiriTbkOHee7D06b64A%2BxSBYJHCIsHsPvophdeuizw%2FyiVLxp0mW9ViPiX4QobQGRyYScu8OTqAPxgV4%2ByQiUy5QZxj5hX9zK4WHxfBIfk1iTqGPwUntsfR0Zg8GWrIndfDCO8eW%2FBjqkAezN3Y0n50gr2I4ukRqfQ5jUhwyZZIVoc434UotE9aVwQvfRImaE5TC%2F5ZRhsaXgZeM9m%2BDxWCfw%2FWTcYi5RdQj%2B4QiGepdZf%2FwGPVniBKesFGg%2Fo%2BI9FKS6ha2hswwJ1xtpaSCj6dIxNJNug84kOsdL4rUu4YKpnF8%2F4aWQBkWIVoBbGV21YqERVKAK6BxWiFhE%2BQ6UAFhwa2v7HXpEciHmhU2h&X-Amz-Signature=909d8b60434590551669505b6e5b0e444b2813e8f16d8bb5cb473b82004eabcf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7D6VDRZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDNrvavlfOUFajF8GhB%2BNkyBOTJhRobWvvy75eOeSxtEgIhAKWqqG1bZDssu0NYJGaaL01UBYi8gnCOtfSDBCwmu9l1KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWtbiK0kJ%2Bqo6wZsq3APd%2ByKGHpj2v%2BKFSycBaXOVeQw4dJCxpPB6LNNt1uzIMh%2FCCY8gwkeUvcX%2BGhiCYscDo7vdnkpr9l07LjoDHqMcCO0ukcadWJaXQ6APVjW4n1aYLVyj2Zi%2F32rCZMaDqRBKQZluLeiG3Oep22lR%2BX7PdySQXv8FuTYXw7XId0FzoAkhTeEP0LJeHcdS7qmuiRYhDbGnG98WpBAivrJLfmCMqm1QGy%2BXzZSAj%2Bkbmj8CorORv1g7nLGflqNbLpC%2BSqyZVG%2FC%2F8LAb7L%2BPI0xgxNFqmo4GtxJisvUAC%2FWc%2B945iNdjxk1P6GAU5FCg5Kl7YWnYvKfXsFaDIBdOELMW6W2IwT9myXZl%2FvOFD9pMtNDxi3Asd6cVZXmEemDtrdbUc%2FcGYC9qt7lYtsynE12nDYBNRxCBF3icsFOGV%2FnomYGplSQTlekvw3XhVM%2FwTEDSC4embRaswwfphTngHfUiew%2Bue9hF1O6E5OIKen3e8iDZJztHmaslWhH0We%2FiriTbkOHee7D06b64A%2BxSBYJHCIsHsPvophdeuizw%2FyiVLxp0mW9ViPiX4QobQGRyYScu8OTqAPxgV4%2ByQiUy5QZxj5hX9zK4WHxfBIfk1iTqGPwUntsfR0Zg8GWrIndfDCO8eW%2FBjqkAezN3Y0n50gr2I4ukRqfQ5jUhwyZZIVoc434UotE9aVwQvfRImaE5TC%2F5ZRhsaXgZeM9m%2BDxWCfw%2FWTcYi5RdQj%2B4QiGepdZf%2FwGPVniBKesFGg%2Fo%2BI9FKS6ha2hswwJ1xtpaSCj6dIxNJNug84kOsdL4rUu4YKpnF8%2F4aWQBkWIVoBbGV21YqERVKAK6BxWiFhE%2BQ6UAFhwa2v7HXpEciHmhU2h&X-Amz-Signature=7c0c1e8e2552e942e41bfadf7d97a05c1eb74b4a359a1e498ee65f4d1bd766ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7D6VDRZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDNrvavlfOUFajF8GhB%2BNkyBOTJhRobWvvy75eOeSxtEgIhAKWqqG1bZDssu0NYJGaaL01UBYi8gnCOtfSDBCwmu9l1KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWtbiK0kJ%2Bqo6wZsq3APd%2ByKGHpj2v%2BKFSycBaXOVeQw4dJCxpPB6LNNt1uzIMh%2FCCY8gwkeUvcX%2BGhiCYscDo7vdnkpr9l07LjoDHqMcCO0ukcadWJaXQ6APVjW4n1aYLVyj2Zi%2F32rCZMaDqRBKQZluLeiG3Oep22lR%2BX7PdySQXv8FuTYXw7XId0FzoAkhTeEP0LJeHcdS7qmuiRYhDbGnG98WpBAivrJLfmCMqm1QGy%2BXzZSAj%2Bkbmj8CorORv1g7nLGflqNbLpC%2BSqyZVG%2FC%2F8LAb7L%2BPI0xgxNFqmo4GtxJisvUAC%2FWc%2B945iNdjxk1P6GAU5FCg5Kl7YWnYvKfXsFaDIBdOELMW6W2IwT9myXZl%2FvOFD9pMtNDxi3Asd6cVZXmEemDtrdbUc%2FcGYC9qt7lYtsynE12nDYBNRxCBF3icsFOGV%2FnomYGplSQTlekvw3XhVM%2FwTEDSC4embRaswwfphTngHfUiew%2Bue9hF1O6E5OIKen3e8iDZJztHmaslWhH0We%2FiriTbkOHee7D06b64A%2BxSBYJHCIsHsPvophdeuizw%2FyiVLxp0mW9ViPiX4QobQGRyYScu8OTqAPxgV4%2ByQiUy5QZxj5hX9zK4WHxfBIfk1iTqGPwUntsfR0Zg8GWrIndfDCO8eW%2FBjqkAezN3Y0n50gr2I4ukRqfQ5jUhwyZZIVoc434UotE9aVwQvfRImaE5TC%2F5ZRhsaXgZeM9m%2BDxWCfw%2FWTcYi5RdQj%2B4QiGepdZf%2FwGPVniBKesFGg%2Fo%2BI9FKS6ha2hswwJ1xtpaSCj6dIxNJNug84kOsdL4rUu4YKpnF8%2F4aWQBkWIVoBbGV21YqERVKAK6BxWiFhE%2BQ6UAFhwa2v7HXpEciHmhU2h&X-Amz-Signature=1bed8a7cdfb3114d128d7c3e0e9bb129d0f3d0849f2791409968a13988018149&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7D6VDRZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDNrvavlfOUFajF8GhB%2BNkyBOTJhRobWvvy75eOeSxtEgIhAKWqqG1bZDssu0NYJGaaL01UBYi8gnCOtfSDBCwmu9l1KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWtbiK0kJ%2Bqo6wZsq3APd%2ByKGHpj2v%2BKFSycBaXOVeQw4dJCxpPB6LNNt1uzIMh%2FCCY8gwkeUvcX%2BGhiCYscDo7vdnkpr9l07LjoDHqMcCO0ukcadWJaXQ6APVjW4n1aYLVyj2Zi%2F32rCZMaDqRBKQZluLeiG3Oep22lR%2BX7PdySQXv8FuTYXw7XId0FzoAkhTeEP0LJeHcdS7qmuiRYhDbGnG98WpBAivrJLfmCMqm1QGy%2BXzZSAj%2Bkbmj8CorORv1g7nLGflqNbLpC%2BSqyZVG%2FC%2F8LAb7L%2BPI0xgxNFqmo4GtxJisvUAC%2FWc%2B945iNdjxk1P6GAU5FCg5Kl7YWnYvKfXsFaDIBdOELMW6W2IwT9myXZl%2FvOFD9pMtNDxi3Asd6cVZXmEemDtrdbUc%2FcGYC9qt7lYtsynE12nDYBNRxCBF3icsFOGV%2FnomYGplSQTlekvw3XhVM%2FwTEDSC4embRaswwfphTngHfUiew%2Bue9hF1O6E5OIKen3e8iDZJztHmaslWhH0We%2FiriTbkOHee7D06b64A%2BxSBYJHCIsHsPvophdeuizw%2FyiVLxp0mW9ViPiX4QobQGRyYScu8OTqAPxgV4%2ByQiUy5QZxj5hX9zK4WHxfBIfk1iTqGPwUntsfR0Zg8GWrIndfDCO8eW%2FBjqkAezN3Y0n50gr2I4ukRqfQ5jUhwyZZIVoc434UotE9aVwQvfRImaE5TC%2F5ZRhsaXgZeM9m%2BDxWCfw%2FWTcYi5RdQj%2B4QiGepdZf%2FwGPVniBKesFGg%2Fo%2BI9FKS6ha2hswwJ1xtpaSCj6dIxNJNug84kOsdL4rUu4YKpnF8%2F4aWQBkWIVoBbGV21YqERVKAK6BxWiFhE%2BQ6UAFhwa2v7HXpEciHmhU2h&X-Amz-Signature=a7fd82ef21d7c2fdefaed8003f6fb5d7baafdf59219e9d4cb884a57e58797ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7D6VDRZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDNrvavlfOUFajF8GhB%2BNkyBOTJhRobWvvy75eOeSxtEgIhAKWqqG1bZDssu0NYJGaaL01UBYi8gnCOtfSDBCwmu9l1KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWtbiK0kJ%2Bqo6wZsq3APd%2ByKGHpj2v%2BKFSycBaXOVeQw4dJCxpPB6LNNt1uzIMh%2FCCY8gwkeUvcX%2BGhiCYscDo7vdnkpr9l07LjoDHqMcCO0ukcadWJaXQ6APVjW4n1aYLVyj2Zi%2F32rCZMaDqRBKQZluLeiG3Oep22lR%2BX7PdySQXv8FuTYXw7XId0FzoAkhTeEP0LJeHcdS7qmuiRYhDbGnG98WpBAivrJLfmCMqm1QGy%2BXzZSAj%2Bkbmj8CorORv1g7nLGflqNbLpC%2BSqyZVG%2FC%2F8LAb7L%2BPI0xgxNFqmo4GtxJisvUAC%2FWc%2B945iNdjxk1P6GAU5FCg5Kl7YWnYvKfXsFaDIBdOELMW6W2IwT9myXZl%2FvOFD9pMtNDxi3Asd6cVZXmEemDtrdbUc%2FcGYC9qt7lYtsynE12nDYBNRxCBF3icsFOGV%2FnomYGplSQTlekvw3XhVM%2FwTEDSC4embRaswwfphTngHfUiew%2Bue9hF1O6E5OIKen3e8iDZJztHmaslWhH0We%2FiriTbkOHee7D06b64A%2BxSBYJHCIsHsPvophdeuizw%2FyiVLxp0mW9ViPiX4QobQGRyYScu8OTqAPxgV4%2ByQiUy5QZxj5hX9zK4WHxfBIfk1iTqGPwUntsfR0Zg8GWrIndfDCO8eW%2FBjqkAezN3Y0n50gr2I4ukRqfQ5jUhwyZZIVoc434UotE9aVwQvfRImaE5TC%2F5ZRhsaXgZeM9m%2BDxWCfw%2FWTcYi5RdQj%2B4QiGepdZf%2FwGPVniBKesFGg%2Fo%2BI9FKS6ha2hswwJ1xtpaSCj6dIxNJNug84kOsdL4rUu4YKpnF8%2F4aWQBkWIVoBbGV21YqERVKAK6BxWiFhE%2BQ6UAFhwa2v7HXpEciHmhU2h&X-Amz-Signature=ffe7a235c17927fc2ecb8cc3e92be3dc467b1cf1227c5f44310dd27112c914a4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7D6VDRZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDNrvavlfOUFajF8GhB%2BNkyBOTJhRobWvvy75eOeSxtEgIhAKWqqG1bZDssu0NYJGaaL01UBYi8gnCOtfSDBCwmu9l1KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWtbiK0kJ%2Bqo6wZsq3APd%2ByKGHpj2v%2BKFSycBaXOVeQw4dJCxpPB6LNNt1uzIMh%2FCCY8gwkeUvcX%2BGhiCYscDo7vdnkpr9l07LjoDHqMcCO0ukcadWJaXQ6APVjW4n1aYLVyj2Zi%2F32rCZMaDqRBKQZluLeiG3Oep22lR%2BX7PdySQXv8FuTYXw7XId0FzoAkhTeEP0LJeHcdS7qmuiRYhDbGnG98WpBAivrJLfmCMqm1QGy%2BXzZSAj%2Bkbmj8CorORv1g7nLGflqNbLpC%2BSqyZVG%2FC%2F8LAb7L%2BPI0xgxNFqmo4GtxJisvUAC%2FWc%2B945iNdjxk1P6GAU5FCg5Kl7YWnYvKfXsFaDIBdOELMW6W2IwT9myXZl%2FvOFD9pMtNDxi3Asd6cVZXmEemDtrdbUc%2FcGYC9qt7lYtsynE12nDYBNRxCBF3icsFOGV%2FnomYGplSQTlekvw3XhVM%2FwTEDSC4embRaswwfphTngHfUiew%2Bue9hF1O6E5OIKen3e8iDZJztHmaslWhH0We%2FiriTbkOHee7D06b64A%2BxSBYJHCIsHsPvophdeuizw%2FyiVLxp0mW9ViPiX4QobQGRyYScu8OTqAPxgV4%2ByQiUy5QZxj5hX9zK4WHxfBIfk1iTqGPwUntsfR0Zg8GWrIndfDCO8eW%2FBjqkAezN3Y0n50gr2I4ukRqfQ5jUhwyZZIVoc434UotE9aVwQvfRImaE5TC%2F5ZRhsaXgZeM9m%2BDxWCfw%2FWTcYi5RdQj%2B4QiGepdZf%2FwGPVniBKesFGg%2Fo%2BI9FKS6ha2hswwJ1xtpaSCj6dIxNJNug84kOsdL4rUu4YKpnF8%2F4aWQBkWIVoBbGV21YqERVKAK6BxWiFhE%2BQ6UAFhwa2v7HXpEciHmhU2h&X-Amz-Signature=60eb55d3f09fdfbd6e4efd56e4b2800f2e2d52659d6c79da5a49431264975415&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
