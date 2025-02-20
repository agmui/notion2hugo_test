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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRJANIA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkVgnRLdg99ls2ZmAvxuE2Vm9VoophTtMHXDhUVikIjAiEA%2Fgl0KlmZQr1g2OttRM5aYv%2FRW5RohzR7JFCdixUNzEIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBw9GFO7J%2FdlpcHdyrcAz7fTKGI%2FWcYGH3D6740IA8M%2BsT%2FP%2FDSgfeT2JiuTt5do9kBEJ7FlKTrZ4Ykk2R2JYshXuH%2Fo33OTvCOaeJmYE6llkfsoEiIVLvnELOVcfvgCDQgLCAtkDEyr1zusuIZqC6egt0yNaB9dx98K%2BKHJuWvfieaU%2B8af1aBxlARpthf2t5DZp5yqXtEN9IqvVB4N4QchDFczQm%2F8t1pb%2F1sSOr%2F%2BZpmqwwJvTgzDxhu9qSDgJtAxkVk8tIvglUkUbH0fEGSteef%2BK0B6FzKfDO4pUbo09OgcTQTt5dBnW1oA29WAAEHzVtV3s6ZlcXpvpEkE9AynxhwInK9sfRQUoTsjmomJFobEABs1QBp%2FIGyCcpud0zSS2id%2BWmnl5E6zGnk4ZYg9v9PWJoSD2gicCZ8sgGkmkcO9hf6YG3TpKk4P%2B50sTpYBcS543%2F5fyo4arS9iwmA1aBFGj629yl3DLskufOAVk07Dy9AejGEw5v%2BMn%2F0eBGVlKF2TJp42plrKljAwy5Maw4ENS0mXqsy4Lhxv%2FvU%2Bp5GlDf411qhYTw0IGZ8tzJSguF5VfnVUssWkhTQXJxouNLoDe1kN2O9lyLhF382VrpJ41D5V2kt%2FWpUnupewXVyyF4FQPDooTOuMNa8270GOqUB0qRNYPwcG53v8K9JfUbc1H4i434IWpPiwN%2FV0Y3dR1r6LYDB2iCgrjh67T%2F0h11McNvzTAq9O8PxOe8OaHmUjOza0l%2Bwj25x3E%2BcgrrjBgQhdVgQfMEbW27qxf3jWwQLQ5G7yRapHCIA1oqpX2Gp3jgYQ04Eydope9rDPxhwyxWwf5DPoTPLqq3GenxPKKQrB2NONxtUAeNff5%2FlGdhPPNkK6o1m&X-Amz-Signature=5b45b3482918a20657de8f122fab3d4fd0862c10ddd9b1bbc696c5f9fa62c454&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRJANIA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkVgnRLdg99ls2ZmAvxuE2Vm9VoophTtMHXDhUVikIjAiEA%2Fgl0KlmZQr1g2OttRM5aYv%2FRW5RohzR7JFCdixUNzEIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBw9GFO7J%2FdlpcHdyrcAz7fTKGI%2FWcYGH3D6740IA8M%2BsT%2FP%2FDSgfeT2JiuTt5do9kBEJ7FlKTrZ4Ykk2R2JYshXuH%2Fo33OTvCOaeJmYE6llkfsoEiIVLvnELOVcfvgCDQgLCAtkDEyr1zusuIZqC6egt0yNaB9dx98K%2BKHJuWvfieaU%2B8af1aBxlARpthf2t5DZp5yqXtEN9IqvVB4N4QchDFczQm%2F8t1pb%2F1sSOr%2F%2BZpmqwwJvTgzDxhu9qSDgJtAxkVk8tIvglUkUbH0fEGSteef%2BK0B6FzKfDO4pUbo09OgcTQTt5dBnW1oA29WAAEHzVtV3s6ZlcXpvpEkE9AynxhwInK9sfRQUoTsjmomJFobEABs1QBp%2FIGyCcpud0zSS2id%2BWmnl5E6zGnk4ZYg9v9PWJoSD2gicCZ8sgGkmkcO9hf6YG3TpKk4P%2B50sTpYBcS543%2F5fyo4arS9iwmA1aBFGj629yl3DLskufOAVk07Dy9AejGEw5v%2BMn%2F0eBGVlKF2TJp42plrKljAwy5Maw4ENS0mXqsy4Lhxv%2FvU%2Bp5GlDf411qhYTw0IGZ8tzJSguF5VfnVUssWkhTQXJxouNLoDe1kN2O9lyLhF382VrpJ41D5V2kt%2FWpUnupewXVyyF4FQPDooTOuMNa8270GOqUB0qRNYPwcG53v8K9JfUbc1H4i434IWpPiwN%2FV0Y3dR1r6LYDB2iCgrjh67T%2F0h11McNvzTAq9O8PxOe8OaHmUjOza0l%2Bwj25x3E%2BcgrrjBgQhdVgQfMEbW27qxf3jWwQLQ5G7yRapHCIA1oqpX2Gp3jgYQ04Eydope9rDPxhwyxWwf5DPoTPLqq3GenxPKKQrB2NONxtUAeNff5%2FlGdhPPNkK6o1m&X-Amz-Signature=746f41fc60fb68abb49fd12d01fda2ed1d0a5c97a0ba2b7f1e298767c6428249&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRJANIA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkVgnRLdg99ls2ZmAvxuE2Vm9VoophTtMHXDhUVikIjAiEA%2Fgl0KlmZQr1g2OttRM5aYv%2FRW5RohzR7JFCdixUNzEIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBw9GFO7J%2FdlpcHdyrcAz7fTKGI%2FWcYGH3D6740IA8M%2BsT%2FP%2FDSgfeT2JiuTt5do9kBEJ7FlKTrZ4Ykk2R2JYshXuH%2Fo33OTvCOaeJmYE6llkfsoEiIVLvnELOVcfvgCDQgLCAtkDEyr1zusuIZqC6egt0yNaB9dx98K%2BKHJuWvfieaU%2B8af1aBxlARpthf2t5DZp5yqXtEN9IqvVB4N4QchDFczQm%2F8t1pb%2F1sSOr%2F%2BZpmqwwJvTgzDxhu9qSDgJtAxkVk8tIvglUkUbH0fEGSteef%2BK0B6FzKfDO4pUbo09OgcTQTt5dBnW1oA29WAAEHzVtV3s6ZlcXpvpEkE9AynxhwInK9sfRQUoTsjmomJFobEABs1QBp%2FIGyCcpud0zSS2id%2BWmnl5E6zGnk4ZYg9v9PWJoSD2gicCZ8sgGkmkcO9hf6YG3TpKk4P%2B50sTpYBcS543%2F5fyo4arS9iwmA1aBFGj629yl3DLskufOAVk07Dy9AejGEw5v%2BMn%2F0eBGVlKF2TJp42plrKljAwy5Maw4ENS0mXqsy4Lhxv%2FvU%2Bp5GlDf411qhYTw0IGZ8tzJSguF5VfnVUssWkhTQXJxouNLoDe1kN2O9lyLhF382VrpJ41D5V2kt%2FWpUnupewXVyyF4FQPDooTOuMNa8270GOqUB0qRNYPwcG53v8K9JfUbc1H4i434IWpPiwN%2FV0Y3dR1r6LYDB2iCgrjh67T%2F0h11McNvzTAq9O8PxOe8OaHmUjOza0l%2Bwj25x3E%2BcgrrjBgQhdVgQfMEbW27qxf3jWwQLQ5G7yRapHCIA1oqpX2Gp3jgYQ04Eydope9rDPxhwyxWwf5DPoTPLqq3GenxPKKQrB2NONxtUAeNff5%2FlGdhPPNkK6o1m&X-Amz-Signature=c67a60d8022f3f890232e7e27e7fc7629805088520f9a9abec6f63155e3cf279&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRJANIA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkVgnRLdg99ls2ZmAvxuE2Vm9VoophTtMHXDhUVikIjAiEA%2Fgl0KlmZQr1g2OttRM5aYv%2FRW5RohzR7JFCdixUNzEIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBw9GFO7J%2FdlpcHdyrcAz7fTKGI%2FWcYGH3D6740IA8M%2BsT%2FP%2FDSgfeT2JiuTt5do9kBEJ7FlKTrZ4Ykk2R2JYshXuH%2Fo33OTvCOaeJmYE6llkfsoEiIVLvnELOVcfvgCDQgLCAtkDEyr1zusuIZqC6egt0yNaB9dx98K%2BKHJuWvfieaU%2B8af1aBxlARpthf2t5DZp5yqXtEN9IqvVB4N4QchDFczQm%2F8t1pb%2F1sSOr%2F%2BZpmqwwJvTgzDxhu9qSDgJtAxkVk8tIvglUkUbH0fEGSteef%2BK0B6FzKfDO4pUbo09OgcTQTt5dBnW1oA29WAAEHzVtV3s6ZlcXpvpEkE9AynxhwInK9sfRQUoTsjmomJFobEABs1QBp%2FIGyCcpud0zSS2id%2BWmnl5E6zGnk4ZYg9v9PWJoSD2gicCZ8sgGkmkcO9hf6YG3TpKk4P%2B50sTpYBcS543%2F5fyo4arS9iwmA1aBFGj629yl3DLskufOAVk07Dy9AejGEw5v%2BMn%2F0eBGVlKF2TJp42plrKljAwy5Maw4ENS0mXqsy4Lhxv%2FvU%2Bp5GlDf411qhYTw0IGZ8tzJSguF5VfnVUssWkhTQXJxouNLoDe1kN2O9lyLhF382VrpJ41D5V2kt%2FWpUnupewXVyyF4FQPDooTOuMNa8270GOqUB0qRNYPwcG53v8K9JfUbc1H4i434IWpPiwN%2FV0Y3dR1r6LYDB2iCgrjh67T%2F0h11McNvzTAq9O8PxOe8OaHmUjOza0l%2Bwj25x3E%2BcgrrjBgQhdVgQfMEbW27qxf3jWwQLQ5G7yRapHCIA1oqpX2Gp3jgYQ04Eydope9rDPxhwyxWwf5DPoTPLqq3GenxPKKQrB2NONxtUAeNff5%2FlGdhPPNkK6o1m&X-Amz-Signature=4f9e0d045a1f3979c330b4b2b64336062af04a993ee95323778c387c4e96af50&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRJANIA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkVgnRLdg99ls2ZmAvxuE2Vm9VoophTtMHXDhUVikIjAiEA%2Fgl0KlmZQr1g2OttRM5aYv%2FRW5RohzR7JFCdixUNzEIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBw9GFO7J%2FdlpcHdyrcAz7fTKGI%2FWcYGH3D6740IA8M%2BsT%2FP%2FDSgfeT2JiuTt5do9kBEJ7FlKTrZ4Ykk2R2JYshXuH%2Fo33OTvCOaeJmYE6llkfsoEiIVLvnELOVcfvgCDQgLCAtkDEyr1zusuIZqC6egt0yNaB9dx98K%2BKHJuWvfieaU%2B8af1aBxlARpthf2t5DZp5yqXtEN9IqvVB4N4QchDFczQm%2F8t1pb%2F1sSOr%2F%2BZpmqwwJvTgzDxhu9qSDgJtAxkVk8tIvglUkUbH0fEGSteef%2BK0B6FzKfDO4pUbo09OgcTQTt5dBnW1oA29WAAEHzVtV3s6ZlcXpvpEkE9AynxhwInK9sfRQUoTsjmomJFobEABs1QBp%2FIGyCcpud0zSS2id%2BWmnl5E6zGnk4ZYg9v9PWJoSD2gicCZ8sgGkmkcO9hf6YG3TpKk4P%2B50sTpYBcS543%2F5fyo4arS9iwmA1aBFGj629yl3DLskufOAVk07Dy9AejGEw5v%2BMn%2F0eBGVlKF2TJp42plrKljAwy5Maw4ENS0mXqsy4Lhxv%2FvU%2Bp5GlDf411qhYTw0IGZ8tzJSguF5VfnVUssWkhTQXJxouNLoDe1kN2O9lyLhF382VrpJ41D5V2kt%2FWpUnupewXVyyF4FQPDooTOuMNa8270GOqUB0qRNYPwcG53v8K9JfUbc1H4i434IWpPiwN%2FV0Y3dR1r6LYDB2iCgrjh67T%2F0h11McNvzTAq9O8PxOe8OaHmUjOza0l%2Bwj25x3E%2BcgrrjBgQhdVgQfMEbW27qxf3jWwQLQ5G7yRapHCIA1oqpX2Gp3jgYQ04Eydope9rDPxhwyxWwf5DPoTPLqq3GenxPKKQrB2NONxtUAeNff5%2FlGdhPPNkK6o1m&X-Amz-Signature=f0cf4898f09a2c86bee05ff0cd34ad580b461e9a89251af21b84d552053e92a8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRJANIA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkVgnRLdg99ls2ZmAvxuE2Vm9VoophTtMHXDhUVikIjAiEA%2Fgl0KlmZQr1g2OttRM5aYv%2FRW5RohzR7JFCdixUNzEIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBw9GFO7J%2FdlpcHdyrcAz7fTKGI%2FWcYGH3D6740IA8M%2BsT%2FP%2FDSgfeT2JiuTt5do9kBEJ7FlKTrZ4Ykk2R2JYshXuH%2Fo33OTvCOaeJmYE6llkfsoEiIVLvnELOVcfvgCDQgLCAtkDEyr1zusuIZqC6egt0yNaB9dx98K%2BKHJuWvfieaU%2B8af1aBxlARpthf2t5DZp5yqXtEN9IqvVB4N4QchDFczQm%2F8t1pb%2F1sSOr%2F%2BZpmqwwJvTgzDxhu9qSDgJtAxkVk8tIvglUkUbH0fEGSteef%2BK0B6FzKfDO4pUbo09OgcTQTt5dBnW1oA29WAAEHzVtV3s6ZlcXpvpEkE9AynxhwInK9sfRQUoTsjmomJFobEABs1QBp%2FIGyCcpud0zSS2id%2BWmnl5E6zGnk4ZYg9v9PWJoSD2gicCZ8sgGkmkcO9hf6YG3TpKk4P%2B50sTpYBcS543%2F5fyo4arS9iwmA1aBFGj629yl3DLskufOAVk07Dy9AejGEw5v%2BMn%2F0eBGVlKF2TJp42plrKljAwy5Maw4ENS0mXqsy4Lhxv%2FvU%2Bp5GlDf411qhYTw0IGZ8tzJSguF5VfnVUssWkhTQXJxouNLoDe1kN2O9lyLhF382VrpJ41D5V2kt%2FWpUnupewXVyyF4FQPDooTOuMNa8270GOqUB0qRNYPwcG53v8K9JfUbc1H4i434IWpPiwN%2FV0Y3dR1r6LYDB2iCgrjh67T%2F0h11McNvzTAq9O8PxOe8OaHmUjOza0l%2Bwj25x3E%2BcgrrjBgQhdVgQfMEbW27qxf3jWwQLQ5G7yRapHCIA1oqpX2Gp3jgYQ04Eydope9rDPxhwyxWwf5DPoTPLqq3GenxPKKQrB2NONxtUAeNff5%2FlGdhPPNkK6o1m&X-Amz-Signature=b8125d8bf961e7cc400513463d6071032825fd5d236c9ca68dbb8aec62be35e0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRJANIA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkVgnRLdg99ls2ZmAvxuE2Vm9VoophTtMHXDhUVikIjAiEA%2Fgl0KlmZQr1g2OttRM5aYv%2FRW5RohzR7JFCdixUNzEIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBw9GFO7J%2FdlpcHdyrcAz7fTKGI%2FWcYGH3D6740IA8M%2BsT%2FP%2FDSgfeT2JiuTt5do9kBEJ7FlKTrZ4Ykk2R2JYshXuH%2Fo33OTvCOaeJmYE6llkfsoEiIVLvnELOVcfvgCDQgLCAtkDEyr1zusuIZqC6egt0yNaB9dx98K%2BKHJuWvfieaU%2B8af1aBxlARpthf2t5DZp5yqXtEN9IqvVB4N4QchDFczQm%2F8t1pb%2F1sSOr%2F%2BZpmqwwJvTgzDxhu9qSDgJtAxkVk8tIvglUkUbH0fEGSteef%2BK0B6FzKfDO4pUbo09OgcTQTt5dBnW1oA29WAAEHzVtV3s6ZlcXpvpEkE9AynxhwInK9sfRQUoTsjmomJFobEABs1QBp%2FIGyCcpud0zSS2id%2BWmnl5E6zGnk4ZYg9v9PWJoSD2gicCZ8sgGkmkcO9hf6YG3TpKk4P%2B50sTpYBcS543%2F5fyo4arS9iwmA1aBFGj629yl3DLskufOAVk07Dy9AejGEw5v%2BMn%2F0eBGVlKF2TJp42plrKljAwy5Maw4ENS0mXqsy4Lhxv%2FvU%2Bp5GlDf411qhYTw0IGZ8tzJSguF5VfnVUssWkhTQXJxouNLoDe1kN2O9lyLhF382VrpJ41D5V2kt%2FWpUnupewXVyyF4FQPDooTOuMNa8270GOqUB0qRNYPwcG53v8K9JfUbc1H4i434IWpPiwN%2FV0Y3dR1r6LYDB2iCgrjh67T%2F0h11McNvzTAq9O8PxOe8OaHmUjOza0l%2Bwj25x3E%2BcgrrjBgQhdVgQfMEbW27qxf3jWwQLQ5G7yRapHCIA1oqpX2Gp3jgYQ04Eydope9rDPxhwyxWwf5DPoTPLqq3GenxPKKQrB2NONxtUAeNff5%2FlGdhPPNkK6o1m&X-Amz-Signature=f0fe2122a6ba8f8339236d0dc3192255955384f3ab5a4d60830534593eacdc1c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
