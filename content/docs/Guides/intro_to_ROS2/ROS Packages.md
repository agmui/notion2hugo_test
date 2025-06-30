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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQQGU6T%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJf%2Bu3e4YXLtYa3SHP6TCzi7CkU2Bsd1GUq8p0M%2BlqVAiAuS5gA0YgV96tKrYNRdCgOUURg2CffntQeImMRU0XxSCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmh1biW5Bof0R%2F9LKtwDH%2FPJKdzM0jd2miHUqQpalydTPGE8ZDr0mCpg3J2sQ%2BPiW4B%2FokEgPmvn8bYz%2Bh%2BGK4DjcZq6uOM66sy5lOQ%2FeQZocZMmjPcrF%2BmVpjQ%2FxurXE2yX3P62Zhi6i0Iqc%2FR0wnx6mALYRexgwuP7g0dcSV3hpLssbx19HvgWmoeUy2RALAHFL%2FN3pvp3aV4nAZeKrYKHJbmpvoG5kHcdCUW4v0Sr6XaHs8cJ0zVycVAfobQz4HrOO9S2K4i4QCWCaDWMgIKVLYS5o2Uz0Gu886RKOUDxX0IcUrB5FcksBYHtG6f3QCJwRCeLAcPWcQEptOPGKPmkqsOVf%2BY2n%2FYxMbg6016WU8C0KKf9l%2B1MEpegql6NM6twxQ4rkIU1A6hVv2Ve8e%2Fcc9N7oThHEQ0SxV1oox7SjSeisZK8MgMHnDdBa%2BuQvmMAVcDY8Bi5j3FcUuWWmDfcrlH2Yqk%2FQvGqBa9%2FRN7tZ7Us0PNWIqPAfAzWsjLfaSvWEJ%2B5CfXAwOY5Mi3%2BtT8stotYzJSPFSAimTx1hJUpi1likFVFcj%2BnHuoTE1aLOW0GbFiXTqBo3gIZsQlHkk1E%2BZFGVvFhUjskCB9nTSQatW5Atk%2BEXDVKF3fFoPb4O3XQmRXH5vjWHYswvpaHwwY6pgE4Jdvn2GEEUG093CbNJWiOTQaSsMJjHwXbUTURO1R37H%2FNbbFc6fPVjXJAtgKqLaMmaw4TSEJtwdpeiS7q8JRe6e%2B8aXLDNi9kSe3OLLLMU6CcIMLlLL1C2JLH45mEQwQ8WTZ2m3SIq8pBpKUWrO17CAUbJYGHThsKvCWcVlr%2B1QwxC5yliNmJfofXQqJka7U7QVmi0viOk5RZaZXAgLvJLSokM6cz&X-Amz-Signature=b46cd76617000901fb55e7c9a3a5291a6e8d7bbfc3d89f15af9867c4ca714067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQQGU6T%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJf%2Bu3e4YXLtYa3SHP6TCzi7CkU2Bsd1GUq8p0M%2BlqVAiAuS5gA0YgV96tKrYNRdCgOUURg2CffntQeImMRU0XxSCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmh1biW5Bof0R%2F9LKtwDH%2FPJKdzM0jd2miHUqQpalydTPGE8ZDr0mCpg3J2sQ%2BPiW4B%2FokEgPmvn8bYz%2Bh%2BGK4DjcZq6uOM66sy5lOQ%2FeQZocZMmjPcrF%2BmVpjQ%2FxurXE2yX3P62Zhi6i0Iqc%2FR0wnx6mALYRexgwuP7g0dcSV3hpLssbx19HvgWmoeUy2RALAHFL%2FN3pvp3aV4nAZeKrYKHJbmpvoG5kHcdCUW4v0Sr6XaHs8cJ0zVycVAfobQz4HrOO9S2K4i4QCWCaDWMgIKVLYS5o2Uz0Gu886RKOUDxX0IcUrB5FcksBYHtG6f3QCJwRCeLAcPWcQEptOPGKPmkqsOVf%2BY2n%2FYxMbg6016WU8C0KKf9l%2B1MEpegql6NM6twxQ4rkIU1A6hVv2Ve8e%2Fcc9N7oThHEQ0SxV1oox7SjSeisZK8MgMHnDdBa%2BuQvmMAVcDY8Bi5j3FcUuWWmDfcrlH2Yqk%2FQvGqBa9%2FRN7tZ7Us0PNWIqPAfAzWsjLfaSvWEJ%2B5CfXAwOY5Mi3%2BtT8stotYzJSPFSAimTx1hJUpi1likFVFcj%2BnHuoTE1aLOW0GbFiXTqBo3gIZsQlHkk1E%2BZFGVvFhUjskCB9nTSQatW5Atk%2BEXDVKF3fFoPb4O3XQmRXH5vjWHYswvpaHwwY6pgE4Jdvn2GEEUG093CbNJWiOTQaSsMJjHwXbUTURO1R37H%2FNbbFc6fPVjXJAtgKqLaMmaw4TSEJtwdpeiS7q8JRe6e%2B8aXLDNi9kSe3OLLLMU6CcIMLlLL1C2JLH45mEQwQ8WTZ2m3SIq8pBpKUWrO17CAUbJYGHThsKvCWcVlr%2B1QwxC5yliNmJfofXQqJka7U7QVmi0viOk5RZaZXAgLvJLSokM6cz&X-Amz-Signature=45753a8b1a1ac4a3a7bbc31ad5884ab95737bc606b3c5bac7f7837a06359ba0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQQGU6T%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJf%2Bu3e4YXLtYa3SHP6TCzi7CkU2Bsd1GUq8p0M%2BlqVAiAuS5gA0YgV96tKrYNRdCgOUURg2CffntQeImMRU0XxSCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmh1biW5Bof0R%2F9LKtwDH%2FPJKdzM0jd2miHUqQpalydTPGE8ZDr0mCpg3J2sQ%2BPiW4B%2FokEgPmvn8bYz%2Bh%2BGK4DjcZq6uOM66sy5lOQ%2FeQZocZMmjPcrF%2BmVpjQ%2FxurXE2yX3P62Zhi6i0Iqc%2FR0wnx6mALYRexgwuP7g0dcSV3hpLssbx19HvgWmoeUy2RALAHFL%2FN3pvp3aV4nAZeKrYKHJbmpvoG5kHcdCUW4v0Sr6XaHs8cJ0zVycVAfobQz4HrOO9S2K4i4QCWCaDWMgIKVLYS5o2Uz0Gu886RKOUDxX0IcUrB5FcksBYHtG6f3QCJwRCeLAcPWcQEptOPGKPmkqsOVf%2BY2n%2FYxMbg6016WU8C0KKf9l%2B1MEpegql6NM6twxQ4rkIU1A6hVv2Ve8e%2Fcc9N7oThHEQ0SxV1oox7SjSeisZK8MgMHnDdBa%2BuQvmMAVcDY8Bi5j3FcUuWWmDfcrlH2Yqk%2FQvGqBa9%2FRN7tZ7Us0PNWIqPAfAzWsjLfaSvWEJ%2B5CfXAwOY5Mi3%2BtT8stotYzJSPFSAimTx1hJUpi1likFVFcj%2BnHuoTE1aLOW0GbFiXTqBo3gIZsQlHkk1E%2BZFGVvFhUjskCB9nTSQatW5Atk%2BEXDVKF3fFoPb4O3XQmRXH5vjWHYswvpaHwwY6pgE4Jdvn2GEEUG093CbNJWiOTQaSsMJjHwXbUTURO1R37H%2FNbbFc6fPVjXJAtgKqLaMmaw4TSEJtwdpeiS7q8JRe6e%2B8aXLDNi9kSe3OLLLMU6CcIMLlLL1C2JLH45mEQwQ8WTZ2m3SIq8pBpKUWrO17CAUbJYGHThsKvCWcVlr%2B1QwxC5yliNmJfofXQqJka7U7QVmi0viOk5RZaZXAgLvJLSokM6cz&X-Amz-Signature=c66f94b3208f9991e10423d3253ae44ad0a98d5bccb39018a70a7f209b0c60d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQQGU6T%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJf%2Bu3e4YXLtYa3SHP6TCzi7CkU2Bsd1GUq8p0M%2BlqVAiAuS5gA0YgV96tKrYNRdCgOUURg2CffntQeImMRU0XxSCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmh1biW5Bof0R%2F9LKtwDH%2FPJKdzM0jd2miHUqQpalydTPGE8ZDr0mCpg3J2sQ%2BPiW4B%2FokEgPmvn8bYz%2Bh%2BGK4DjcZq6uOM66sy5lOQ%2FeQZocZMmjPcrF%2BmVpjQ%2FxurXE2yX3P62Zhi6i0Iqc%2FR0wnx6mALYRexgwuP7g0dcSV3hpLssbx19HvgWmoeUy2RALAHFL%2FN3pvp3aV4nAZeKrYKHJbmpvoG5kHcdCUW4v0Sr6XaHs8cJ0zVycVAfobQz4HrOO9S2K4i4QCWCaDWMgIKVLYS5o2Uz0Gu886RKOUDxX0IcUrB5FcksBYHtG6f3QCJwRCeLAcPWcQEptOPGKPmkqsOVf%2BY2n%2FYxMbg6016WU8C0KKf9l%2B1MEpegql6NM6twxQ4rkIU1A6hVv2Ve8e%2Fcc9N7oThHEQ0SxV1oox7SjSeisZK8MgMHnDdBa%2BuQvmMAVcDY8Bi5j3FcUuWWmDfcrlH2Yqk%2FQvGqBa9%2FRN7tZ7Us0PNWIqPAfAzWsjLfaSvWEJ%2B5CfXAwOY5Mi3%2BtT8stotYzJSPFSAimTx1hJUpi1likFVFcj%2BnHuoTE1aLOW0GbFiXTqBo3gIZsQlHkk1E%2BZFGVvFhUjskCB9nTSQatW5Atk%2BEXDVKF3fFoPb4O3XQmRXH5vjWHYswvpaHwwY6pgE4Jdvn2GEEUG093CbNJWiOTQaSsMJjHwXbUTURO1R37H%2FNbbFc6fPVjXJAtgKqLaMmaw4TSEJtwdpeiS7q8JRe6e%2B8aXLDNi9kSe3OLLLMU6CcIMLlLL1C2JLH45mEQwQ8WTZ2m3SIq8pBpKUWrO17CAUbJYGHThsKvCWcVlr%2B1QwxC5yliNmJfofXQqJka7U7QVmi0viOk5RZaZXAgLvJLSokM6cz&X-Amz-Signature=fdce995db82cffd511fb258bace2174761ca0cfa38279ae801c5bcc80485cb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQQGU6T%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJf%2Bu3e4YXLtYa3SHP6TCzi7CkU2Bsd1GUq8p0M%2BlqVAiAuS5gA0YgV96tKrYNRdCgOUURg2CffntQeImMRU0XxSCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmh1biW5Bof0R%2F9LKtwDH%2FPJKdzM0jd2miHUqQpalydTPGE8ZDr0mCpg3J2sQ%2BPiW4B%2FokEgPmvn8bYz%2Bh%2BGK4DjcZq6uOM66sy5lOQ%2FeQZocZMmjPcrF%2BmVpjQ%2FxurXE2yX3P62Zhi6i0Iqc%2FR0wnx6mALYRexgwuP7g0dcSV3hpLssbx19HvgWmoeUy2RALAHFL%2FN3pvp3aV4nAZeKrYKHJbmpvoG5kHcdCUW4v0Sr6XaHs8cJ0zVycVAfobQz4HrOO9S2K4i4QCWCaDWMgIKVLYS5o2Uz0Gu886RKOUDxX0IcUrB5FcksBYHtG6f3QCJwRCeLAcPWcQEptOPGKPmkqsOVf%2BY2n%2FYxMbg6016WU8C0KKf9l%2B1MEpegql6NM6twxQ4rkIU1A6hVv2Ve8e%2Fcc9N7oThHEQ0SxV1oox7SjSeisZK8MgMHnDdBa%2BuQvmMAVcDY8Bi5j3FcUuWWmDfcrlH2Yqk%2FQvGqBa9%2FRN7tZ7Us0PNWIqPAfAzWsjLfaSvWEJ%2B5CfXAwOY5Mi3%2BtT8stotYzJSPFSAimTx1hJUpi1likFVFcj%2BnHuoTE1aLOW0GbFiXTqBo3gIZsQlHkk1E%2BZFGVvFhUjskCB9nTSQatW5Atk%2BEXDVKF3fFoPb4O3XQmRXH5vjWHYswvpaHwwY6pgE4Jdvn2GEEUG093CbNJWiOTQaSsMJjHwXbUTURO1R37H%2FNbbFc6fPVjXJAtgKqLaMmaw4TSEJtwdpeiS7q8JRe6e%2B8aXLDNi9kSe3OLLLMU6CcIMLlLL1C2JLH45mEQwQ8WTZ2m3SIq8pBpKUWrO17CAUbJYGHThsKvCWcVlr%2B1QwxC5yliNmJfofXQqJka7U7QVmi0viOk5RZaZXAgLvJLSokM6cz&X-Amz-Signature=644c76432c38e95fec7876c6766e3eab5af80327115d68c63b1becf2585d885e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQQGU6T%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJf%2Bu3e4YXLtYa3SHP6TCzi7CkU2Bsd1GUq8p0M%2BlqVAiAuS5gA0YgV96tKrYNRdCgOUURg2CffntQeImMRU0XxSCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmh1biW5Bof0R%2F9LKtwDH%2FPJKdzM0jd2miHUqQpalydTPGE8ZDr0mCpg3J2sQ%2BPiW4B%2FokEgPmvn8bYz%2Bh%2BGK4DjcZq6uOM66sy5lOQ%2FeQZocZMmjPcrF%2BmVpjQ%2FxurXE2yX3P62Zhi6i0Iqc%2FR0wnx6mALYRexgwuP7g0dcSV3hpLssbx19HvgWmoeUy2RALAHFL%2FN3pvp3aV4nAZeKrYKHJbmpvoG5kHcdCUW4v0Sr6XaHs8cJ0zVycVAfobQz4HrOO9S2K4i4QCWCaDWMgIKVLYS5o2Uz0Gu886RKOUDxX0IcUrB5FcksBYHtG6f3QCJwRCeLAcPWcQEptOPGKPmkqsOVf%2BY2n%2FYxMbg6016WU8C0KKf9l%2B1MEpegql6NM6twxQ4rkIU1A6hVv2Ve8e%2Fcc9N7oThHEQ0SxV1oox7SjSeisZK8MgMHnDdBa%2BuQvmMAVcDY8Bi5j3FcUuWWmDfcrlH2Yqk%2FQvGqBa9%2FRN7tZ7Us0PNWIqPAfAzWsjLfaSvWEJ%2B5CfXAwOY5Mi3%2BtT8stotYzJSPFSAimTx1hJUpi1likFVFcj%2BnHuoTE1aLOW0GbFiXTqBo3gIZsQlHkk1E%2BZFGVvFhUjskCB9nTSQatW5Atk%2BEXDVKF3fFoPb4O3XQmRXH5vjWHYswvpaHwwY6pgE4Jdvn2GEEUG093CbNJWiOTQaSsMJjHwXbUTURO1R37H%2FNbbFc6fPVjXJAtgKqLaMmaw4TSEJtwdpeiS7q8JRe6e%2B8aXLDNi9kSe3OLLLMU6CcIMLlLL1C2JLH45mEQwQ8WTZ2m3SIq8pBpKUWrO17CAUbJYGHThsKvCWcVlr%2B1QwxC5yliNmJfofXQqJka7U7QVmi0viOk5RZaZXAgLvJLSokM6cz&X-Amz-Signature=7c0d1f4d355628f4366b6951dfca60cfdbc527e937bf1bed092ad53c71223343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQQGU6T%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJf%2Bu3e4YXLtYa3SHP6TCzi7CkU2Bsd1GUq8p0M%2BlqVAiAuS5gA0YgV96tKrYNRdCgOUURg2CffntQeImMRU0XxSCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBmh1biW5Bof0R%2F9LKtwDH%2FPJKdzM0jd2miHUqQpalydTPGE8ZDr0mCpg3J2sQ%2BPiW4B%2FokEgPmvn8bYz%2Bh%2BGK4DjcZq6uOM66sy5lOQ%2FeQZocZMmjPcrF%2BmVpjQ%2FxurXE2yX3P62Zhi6i0Iqc%2FR0wnx6mALYRexgwuP7g0dcSV3hpLssbx19HvgWmoeUy2RALAHFL%2FN3pvp3aV4nAZeKrYKHJbmpvoG5kHcdCUW4v0Sr6XaHs8cJ0zVycVAfobQz4HrOO9S2K4i4QCWCaDWMgIKVLYS5o2Uz0Gu886RKOUDxX0IcUrB5FcksBYHtG6f3QCJwRCeLAcPWcQEptOPGKPmkqsOVf%2BY2n%2FYxMbg6016WU8C0KKf9l%2B1MEpegql6NM6twxQ4rkIU1A6hVv2Ve8e%2Fcc9N7oThHEQ0SxV1oox7SjSeisZK8MgMHnDdBa%2BuQvmMAVcDY8Bi5j3FcUuWWmDfcrlH2Yqk%2FQvGqBa9%2FRN7tZ7Us0PNWIqPAfAzWsjLfaSvWEJ%2B5CfXAwOY5Mi3%2BtT8stotYzJSPFSAimTx1hJUpi1likFVFcj%2BnHuoTE1aLOW0GbFiXTqBo3gIZsQlHkk1E%2BZFGVvFhUjskCB9nTSQatW5Atk%2BEXDVKF3fFoPb4O3XQmRXH5vjWHYswvpaHwwY6pgE4Jdvn2GEEUG093CbNJWiOTQaSsMJjHwXbUTURO1R37H%2FNbbFc6fPVjXJAtgKqLaMmaw4TSEJtwdpeiS7q8JRe6e%2B8aXLDNi9kSe3OLLLMU6CcIMLlLL1C2JLH45mEQwQ8WTZ2m3SIq8pBpKUWrO17CAUbJYGHThsKvCWcVlr%2B1QwxC5yliNmJfofXQqJka7U7QVmi0viOk5RZaZXAgLvJLSokM6cz&X-Amz-Signature=8062cb8f7572d0fcb524a11df078c6dfcff68eb7b0190e1baa50161f416d0530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
