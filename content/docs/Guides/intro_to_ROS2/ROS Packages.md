---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXEEMJ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIClaQbOZ118g%2FDHei9NZPqrqM5v3R0qzx8b3hVHnCSitAiBj2oGPpB2JJG5Es7B4LG0l3rsA3ZxqEhnkqdtB0mHjciqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8aN5VJVY7yyJz%2B1kKtwDYfwTY9pS1DBpToNObbz%2FnAYNlp5Z3k6YGEv4JNqODf64Ueys3faila000m%2FvzS46OozvcLQIiJ7GjmZLuigrvddqigGiQBxb2rXiEtvvULSzOKYuNoDY%2B7t9OKFJ9LLNawp%2FKAV8j7DZ%2BvZjSxYhz3geJ%2Fj4zy%2Bpd6hDs9pMxaLYzHpzbp0HIVYNO6yYzyNGLIjTDTe%2B1DrW5kR5ns%2Fcjd1NyuBhUtZCubTpmHQfvdRfmLblotpA6kTLBpt%2BzHerKZAvmCTfN%2Ba8AW2Vjm4MRP9M%2BZVQ18KbzNyjkwSjVSuASUqWy8wYVo63C1xvnLeHPBcLaw3mMjZ04DQrASQe3lFLrHo1M%2FNadejhg6PkdOUe3akVav6OfZDXLvGw7dLhVB0yP7Mtbc6XxXuY2u8uvvpXq8cT9XQ%2BmDjB3i5533LDCE8cQgxb7Z8hPzsKHt4hSzLXIFuuWPcYN6NtMXQrPNeIzes7C6%2B5gYu8XIc5O7EfcpBxvCfuxlIqwrI6GHj%2BzI1DWsbuReixKcFgrCepZZ%2FhCgzGtK540vAl%2B3xDMSgUbHpMq%2F032hMLbx74g%2BvG0EIboiau%2FsuHQ09M9ld7Di2QRn0a%2FoGveRAKdCVa64sUPVYKWNQ8%2Bz6304Uw2O3WxAY6pgG1tCTGq4CYQFDsoK6RHNme1G6RrJAUJaWoi8AxNAdG6lZN43SkPujVBCBUlO2sgxH%2FTMyk6XIhZJD2kRV%2BTVUV%2FalglWbJ%2BHmKmpaTsdBSxdLnwsUTbzY7nhk0D0GfB1DQz2xPQi%2Bk3XYGsq2pemmBkWboV%2BBsv%2Bk6ZaYUdwdeh2v7V0lpk1ishTbH0d8e75UUqu30MOFcqlyhAh%2BtNtycv%2FTzcDZD&X-Amz-Signature=c9587905fe6251221b08cfff53c352961e7b26f62b09d634d3a8f8f31d66ef1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXEEMJ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIClaQbOZ118g%2FDHei9NZPqrqM5v3R0qzx8b3hVHnCSitAiBj2oGPpB2JJG5Es7B4LG0l3rsA3ZxqEhnkqdtB0mHjciqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8aN5VJVY7yyJz%2B1kKtwDYfwTY9pS1DBpToNObbz%2FnAYNlp5Z3k6YGEv4JNqODf64Ueys3faila000m%2FvzS46OozvcLQIiJ7GjmZLuigrvddqigGiQBxb2rXiEtvvULSzOKYuNoDY%2B7t9OKFJ9LLNawp%2FKAV8j7DZ%2BvZjSxYhz3geJ%2Fj4zy%2Bpd6hDs9pMxaLYzHpzbp0HIVYNO6yYzyNGLIjTDTe%2B1DrW5kR5ns%2Fcjd1NyuBhUtZCubTpmHQfvdRfmLblotpA6kTLBpt%2BzHerKZAvmCTfN%2Ba8AW2Vjm4MRP9M%2BZVQ18KbzNyjkwSjVSuASUqWy8wYVo63C1xvnLeHPBcLaw3mMjZ04DQrASQe3lFLrHo1M%2FNadejhg6PkdOUe3akVav6OfZDXLvGw7dLhVB0yP7Mtbc6XxXuY2u8uvvpXq8cT9XQ%2BmDjB3i5533LDCE8cQgxb7Z8hPzsKHt4hSzLXIFuuWPcYN6NtMXQrPNeIzes7C6%2B5gYu8XIc5O7EfcpBxvCfuxlIqwrI6GHj%2BzI1DWsbuReixKcFgrCepZZ%2FhCgzGtK540vAl%2B3xDMSgUbHpMq%2F032hMLbx74g%2BvG0EIboiau%2FsuHQ09M9ld7Di2QRn0a%2FoGveRAKdCVa64sUPVYKWNQ8%2Bz6304Uw2O3WxAY6pgG1tCTGq4CYQFDsoK6RHNme1G6RrJAUJaWoi8AxNAdG6lZN43SkPujVBCBUlO2sgxH%2FTMyk6XIhZJD2kRV%2BTVUV%2FalglWbJ%2BHmKmpaTsdBSxdLnwsUTbzY7nhk0D0GfB1DQz2xPQi%2Bk3XYGsq2pemmBkWboV%2BBsv%2Bk6ZaYUdwdeh2v7V0lpk1ishTbH0d8e75UUqu30MOFcqlyhAh%2BtNtycv%2FTzcDZD&X-Amz-Signature=f5e4b95643435eb84af1d331654b74902f3aa2873b44bf3b34dd007287d1f52c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXEEMJ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIClaQbOZ118g%2FDHei9NZPqrqM5v3R0qzx8b3hVHnCSitAiBj2oGPpB2JJG5Es7B4LG0l3rsA3ZxqEhnkqdtB0mHjciqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8aN5VJVY7yyJz%2B1kKtwDYfwTY9pS1DBpToNObbz%2FnAYNlp5Z3k6YGEv4JNqODf64Ueys3faila000m%2FvzS46OozvcLQIiJ7GjmZLuigrvddqigGiQBxb2rXiEtvvULSzOKYuNoDY%2B7t9OKFJ9LLNawp%2FKAV8j7DZ%2BvZjSxYhz3geJ%2Fj4zy%2Bpd6hDs9pMxaLYzHpzbp0HIVYNO6yYzyNGLIjTDTe%2B1DrW5kR5ns%2Fcjd1NyuBhUtZCubTpmHQfvdRfmLblotpA6kTLBpt%2BzHerKZAvmCTfN%2Ba8AW2Vjm4MRP9M%2BZVQ18KbzNyjkwSjVSuASUqWy8wYVo63C1xvnLeHPBcLaw3mMjZ04DQrASQe3lFLrHo1M%2FNadejhg6PkdOUe3akVav6OfZDXLvGw7dLhVB0yP7Mtbc6XxXuY2u8uvvpXq8cT9XQ%2BmDjB3i5533LDCE8cQgxb7Z8hPzsKHt4hSzLXIFuuWPcYN6NtMXQrPNeIzes7C6%2B5gYu8XIc5O7EfcpBxvCfuxlIqwrI6GHj%2BzI1DWsbuReixKcFgrCepZZ%2FhCgzGtK540vAl%2B3xDMSgUbHpMq%2F032hMLbx74g%2BvG0EIboiau%2FsuHQ09M9ld7Di2QRn0a%2FoGveRAKdCVa64sUPVYKWNQ8%2Bz6304Uw2O3WxAY6pgG1tCTGq4CYQFDsoK6RHNme1G6RrJAUJaWoi8AxNAdG6lZN43SkPujVBCBUlO2sgxH%2FTMyk6XIhZJD2kRV%2BTVUV%2FalglWbJ%2BHmKmpaTsdBSxdLnwsUTbzY7nhk0D0GfB1DQz2xPQi%2Bk3XYGsq2pemmBkWboV%2BBsv%2Bk6ZaYUdwdeh2v7V0lpk1ishTbH0d8e75UUqu30MOFcqlyhAh%2BtNtycv%2FTzcDZD&X-Amz-Signature=c1d3c6518e1993cf41c8290dfb901c973ef10de3f63a86d89a14a93fb45b0d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXEEMJ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIClaQbOZ118g%2FDHei9NZPqrqM5v3R0qzx8b3hVHnCSitAiBj2oGPpB2JJG5Es7B4LG0l3rsA3ZxqEhnkqdtB0mHjciqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8aN5VJVY7yyJz%2B1kKtwDYfwTY9pS1DBpToNObbz%2FnAYNlp5Z3k6YGEv4JNqODf64Ueys3faila000m%2FvzS46OozvcLQIiJ7GjmZLuigrvddqigGiQBxb2rXiEtvvULSzOKYuNoDY%2B7t9OKFJ9LLNawp%2FKAV8j7DZ%2BvZjSxYhz3geJ%2Fj4zy%2Bpd6hDs9pMxaLYzHpzbp0HIVYNO6yYzyNGLIjTDTe%2B1DrW5kR5ns%2Fcjd1NyuBhUtZCubTpmHQfvdRfmLblotpA6kTLBpt%2BzHerKZAvmCTfN%2Ba8AW2Vjm4MRP9M%2BZVQ18KbzNyjkwSjVSuASUqWy8wYVo63C1xvnLeHPBcLaw3mMjZ04DQrASQe3lFLrHo1M%2FNadejhg6PkdOUe3akVav6OfZDXLvGw7dLhVB0yP7Mtbc6XxXuY2u8uvvpXq8cT9XQ%2BmDjB3i5533LDCE8cQgxb7Z8hPzsKHt4hSzLXIFuuWPcYN6NtMXQrPNeIzes7C6%2B5gYu8XIc5O7EfcpBxvCfuxlIqwrI6GHj%2BzI1DWsbuReixKcFgrCepZZ%2FhCgzGtK540vAl%2B3xDMSgUbHpMq%2F032hMLbx74g%2BvG0EIboiau%2FsuHQ09M9ld7Di2QRn0a%2FoGveRAKdCVa64sUPVYKWNQ8%2Bz6304Uw2O3WxAY6pgG1tCTGq4CYQFDsoK6RHNme1G6RrJAUJaWoi8AxNAdG6lZN43SkPujVBCBUlO2sgxH%2FTMyk6XIhZJD2kRV%2BTVUV%2FalglWbJ%2BHmKmpaTsdBSxdLnwsUTbzY7nhk0D0GfB1DQz2xPQi%2Bk3XYGsq2pemmBkWboV%2BBsv%2Bk6ZaYUdwdeh2v7V0lpk1ishTbH0d8e75UUqu30MOFcqlyhAh%2BtNtycv%2FTzcDZD&X-Amz-Signature=aa57952e5b570ce471caee96f8edfa1cdf35a6232eaec9ea0f837a4d4f228987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXEEMJ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIClaQbOZ118g%2FDHei9NZPqrqM5v3R0qzx8b3hVHnCSitAiBj2oGPpB2JJG5Es7B4LG0l3rsA3ZxqEhnkqdtB0mHjciqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8aN5VJVY7yyJz%2B1kKtwDYfwTY9pS1DBpToNObbz%2FnAYNlp5Z3k6YGEv4JNqODf64Ueys3faila000m%2FvzS46OozvcLQIiJ7GjmZLuigrvddqigGiQBxb2rXiEtvvULSzOKYuNoDY%2B7t9OKFJ9LLNawp%2FKAV8j7DZ%2BvZjSxYhz3geJ%2Fj4zy%2Bpd6hDs9pMxaLYzHpzbp0HIVYNO6yYzyNGLIjTDTe%2B1DrW5kR5ns%2Fcjd1NyuBhUtZCubTpmHQfvdRfmLblotpA6kTLBpt%2BzHerKZAvmCTfN%2Ba8AW2Vjm4MRP9M%2BZVQ18KbzNyjkwSjVSuASUqWy8wYVo63C1xvnLeHPBcLaw3mMjZ04DQrASQe3lFLrHo1M%2FNadejhg6PkdOUe3akVav6OfZDXLvGw7dLhVB0yP7Mtbc6XxXuY2u8uvvpXq8cT9XQ%2BmDjB3i5533LDCE8cQgxb7Z8hPzsKHt4hSzLXIFuuWPcYN6NtMXQrPNeIzes7C6%2B5gYu8XIc5O7EfcpBxvCfuxlIqwrI6GHj%2BzI1DWsbuReixKcFgrCepZZ%2FhCgzGtK540vAl%2B3xDMSgUbHpMq%2F032hMLbx74g%2BvG0EIboiau%2FsuHQ09M9ld7Di2QRn0a%2FoGveRAKdCVa64sUPVYKWNQ8%2Bz6304Uw2O3WxAY6pgG1tCTGq4CYQFDsoK6RHNme1G6RrJAUJaWoi8AxNAdG6lZN43SkPujVBCBUlO2sgxH%2FTMyk6XIhZJD2kRV%2BTVUV%2FalglWbJ%2BHmKmpaTsdBSxdLnwsUTbzY7nhk0D0GfB1DQz2xPQi%2Bk3XYGsq2pemmBkWboV%2BBsv%2Bk6ZaYUdwdeh2v7V0lpk1ishTbH0d8e75UUqu30MOFcqlyhAh%2BtNtycv%2FTzcDZD&X-Amz-Signature=3eda37505fc64ded59444a01ff2e2180694177ee3ef04f5062afe709ddde3265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXEEMJ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIClaQbOZ118g%2FDHei9NZPqrqM5v3R0qzx8b3hVHnCSitAiBj2oGPpB2JJG5Es7B4LG0l3rsA3ZxqEhnkqdtB0mHjciqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8aN5VJVY7yyJz%2B1kKtwDYfwTY9pS1DBpToNObbz%2FnAYNlp5Z3k6YGEv4JNqODf64Ueys3faila000m%2FvzS46OozvcLQIiJ7GjmZLuigrvddqigGiQBxb2rXiEtvvULSzOKYuNoDY%2B7t9OKFJ9LLNawp%2FKAV8j7DZ%2BvZjSxYhz3geJ%2Fj4zy%2Bpd6hDs9pMxaLYzHpzbp0HIVYNO6yYzyNGLIjTDTe%2B1DrW5kR5ns%2Fcjd1NyuBhUtZCubTpmHQfvdRfmLblotpA6kTLBpt%2BzHerKZAvmCTfN%2Ba8AW2Vjm4MRP9M%2BZVQ18KbzNyjkwSjVSuASUqWy8wYVo63C1xvnLeHPBcLaw3mMjZ04DQrASQe3lFLrHo1M%2FNadejhg6PkdOUe3akVav6OfZDXLvGw7dLhVB0yP7Mtbc6XxXuY2u8uvvpXq8cT9XQ%2BmDjB3i5533LDCE8cQgxb7Z8hPzsKHt4hSzLXIFuuWPcYN6NtMXQrPNeIzes7C6%2B5gYu8XIc5O7EfcpBxvCfuxlIqwrI6GHj%2BzI1DWsbuReixKcFgrCepZZ%2FhCgzGtK540vAl%2B3xDMSgUbHpMq%2F032hMLbx74g%2BvG0EIboiau%2FsuHQ09M9ld7Di2QRn0a%2FoGveRAKdCVa64sUPVYKWNQ8%2Bz6304Uw2O3WxAY6pgG1tCTGq4CYQFDsoK6RHNme1G6RrJAUJaWoi8AxNAdG6lZN43SkPujVBCBUlO2sgxH%2FTMyk6XIhZJD2kRV%2BTVUV%2FalglWbJ%2BHmKmpaTsdBSxdLnwsUTbzY7nhk0D0GfB1DQz2xPQi%2Bk3XYGsq2pemmBkWboV%2BBsv%2Bk6ZaYUdwdeh2v7V0lpk1ishTbH0d8e75UUqu30MOFcqlyhAh%2BtNtycv%2FTzcDZD&X-Amz-Signature=6210547d7a6d3cd9192456b69a8a30eca88cdb37e7b8721c2f184f708baff8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXEEMJ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIClaQbOZ118g%2FDHei9NZPqrqM5v3R0qzx8b3hVHnCSitAiBj2oGPpB2JJG5Es7B4LG0l3rsA3ZxqEhnkqdtB0mHjciqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8aN5VJVY7yyJz%2B1kKtwDYfwTY9pS1DBpToNObbz%2FnAYNlp5Z3k6YGEv4JNqODf64Ueys3faila000m%2FvzS46OozvcLQIiJ7GjmZLuigrvddqigGiQBxb2rXiEtvvULSzOKYuNoDY%2B7t9OKFJ9LLNawp%2FKAV8j7DZ%2BvZjSxYhz3geJ%2Fj4zy%2Bpd6hDs9pMxaLYzHpzbp0HIVYNO6yYzyNGLIjTDTe%2B1DrW5kR5ns%2Fcjd1NyuBhUtZCubTpmHQfvdRfmLblotpA6kTLBpt%2BzHerKZAvmCTfN%2Ba8AW2Vjm4MRP9M%2BZVQ18KbzNyjkwSjVSuASUqWy8wYVo63C1xvnLeHPBcLaw3mMjZ04DQrASQe3lFLrHo1M%2FNadejhg6PkdOUe3akVav6OfZDXLvGw7dLhVB0yP7Mtbc6XxXuY2u8uvvpXq8cT9XQ%2BmDjB3i5533LDCE8cQgxb7Z8hPzsKHt4hSzLXIFuuWPcYN6NtMXQrPNeIzes7C6%2B5gYu8XIc5O7EfcpBxvCfuxlIqwrI6GHj%2BzI1DWsbuReixKcFgrCepZZ%2FhCgzGtK540vAl%2B3xDMSgUbHpMq%2F032hMLbx74g%2BvG0EIboiau%2FsuHQ09M9ld7Di2QRn0a%2FoGveRAKdCVa64sUPVYKWNQ8%2Bz6304Uw2O3WxAY6pgG1tCTGq4CYQFDsoK6RHNme1G6RrJAUJaWoi8AxNAdG6lZN43SkPujVBCBUlO2sgxH%2FTMyk6XIhZJD2kRV%2BTVUV%2FalglWbJ%2BHmKmpaTsdBSxdLnwsUTbzY7nhk0D0GfB1DQz2xPQi%2Bk3XYGsq2pemmBkWboV%2BBsv%2Bk6ZaYUdwdeh2v7V0lpk1ishTbH0d8e75UUqu30MOFcqlyhAh%2BtNtycv%2FTzcDZD&X-Amz-Signature=0b81377b42333ca15f69835b74913c6d495ef3ae0fa7071c56717feaceaaf89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
