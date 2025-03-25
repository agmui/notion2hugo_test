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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUSUSUP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMHAz%2BPbVpNQc%2FLoT40Qk4qcQwjbBPL63rcUEIEyvm%2FAiA1H9CDUZOPYIDS8FLwmBnoyk0kbZfVXDso2WLkUT1gVir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdBJ0ETnYAfYfNwiyKtwDRjALXRRthlfGzhlp%2FEegPpspNRgyHdPwjE9M6XGAFEhuvSPyBga31f%2FnZhNb8PxD%2FsWd5ZlyWdYhdwAvHRCAIHJ65%2F%2FweMrCZW1u%2FMqRSXTg2xhvVO6nGk2YPFr6XDYviGIF2%2BBb4atn4TwQfihN32Ut4dIl3ESaES%2BXw2XSBgmF2F6Dqptn57TbthmauP0FR6PoGiZ6EQIevIqsn6oHbCfWVSVdqqQ3Dv0AtDKkK82iwBIejGID6hOUhNo1DL6NhjC59cUEQTqFJDBEObVlHmUTzPpCcXb0pF6K%2BXeeuOI2f7EEfg8OYRNvlYqNjOFc5XCVdbD1brpcgTWuEHdHWdKvfbEJAg3A8%2Bh%2BXX34YPEErqsMyeGJZoQ%2BVYu54cIJa7Sh7W7nsqMg2hAgkGdNpzuQFJhupXNU%2F5RfIcOgdPuWYeVpiwopFCaSQBcxzF42EYEG3USoq8vXclSv%2Be2OdPtJ%2BhZ4yM5fGvJUy34whjxRLeUPzRAPMKcum4OH4INBwjIZw9nt%2FF2XNpa1A2ACOGBlsCpaBoRfWfCSD2nF1MRldn%2Bh6tQLvPZlAK%2F55zy3BbqxYFxXmuCf6mOFD8W%2BtY%2B2yeFaFNFuGUwA4JMCQspt3er1kZTv%2Bq9SnNMw2peMvwY6pgFMIUToPnyt3T%2FDKaORKEJS2ttxggJTFtbHz57a4O4EkorfhA%2FfcvQ3y6KzFs9d39M0lPkQIpib33%2FFnnBa7vz58SIiELrwz4RAqIUgYiPPTQzMvqLuvkDNoynDoJ7AjhKmc4rrO9VftA%2FWP%2FY5CAXm9YoT2rMP9SmUxZmsW4k0S7jJ08d87ycjyP3hVDVNc1nKve4RPCZ3FyaZH9%2BAl52pW13Ryrp1&X-Amz-Signature=e0d542aa0db9e01b829a2d90bba19a2d6bfce08b1bd42e3c07ef5492f450d592&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUSUSUP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMHAz%2BPbVpNQc%2FLoT40Qk4qcQwjbBPL63rcUEIEyvm%2FAiA1H9CDUZOPYIDS8FLwmBnoyk0kbZfVXDso2WLkUT1gVir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdBJ0ETnYAfYfNwiyKtwDRjALXRRthlfGzhlp%2FEegPpspNRgyHdPwjE9M6XGAFEhuvSPyBga31f%2FnZhNb8PxD%2FsWd5ZlyWdYhdwAvHRCAIHJ65%2F%2FweMrCZW1u%2FMqRSXTg2xhvVO6nGk2YPFr6XDYviGIF2%2BBb4atn4TwQfihN32Ut4dIl3ESaES%2BXw2XSBgmF2F6Dqptn57TbthmauP0FR6PoGiZ6EQIevIqsn6oHbCfWVSVdqqQ3Dv0AtDKkK82iwBIejGID6hOUhNo1DL6NhjC59cUEQTqFJDBEObVlHmUTzPpCcXb0pF6K%2BXeeuOI2f7EEfg8OYRNvlYqNjOFc5XCVdbD1brpcgTWuEHdHWdKvfbEJAg3A8%2Bh%2BXX34YPEErqsMyeGJZoQ%2BVYu54cIJa7Sh7W7nsqMg2hAgkGdNpzuQFJhupXNU%2F5RfIcOgdPuWYeVpiwopFCaSQBcxzF42EYEG3USoq8vXclSv%2Be2OdPtJ%2BhZ4yM5fGvJUy34whjxRLeUPzRAPMKcum4OH4INBwjIZw9nt%2FF2XNpa1A2ACOGBlsCpaBoRfWfCSD2nF1MRldn%2Bh6tQLvPZlAK%2F55zy3BbqxYFxXmuCf6mOFD8W%2BtY%2B2yeFaFNFuGUwA4JMCQspt3er1kZTv%2Bq9SnNMw2peMvwY6pgFMIUToPnyt3T%2FDKaORKEJS2ttxggJTFtbHz57a4O4EkorfhA%2FfcvQ3y6KzFs9d39M0lPkQIpib33%2FFnnBa7vz58SIiELrwz4RAqIUgYiPPTQzMvqLuvkDNoynDoJ7AjhKmc4rrO9VftA%2FWP%2FY5CAXm9YoT2rMP9SmUxZmsW4k0S7jJ08d87ycjyP3hVDVNc1nKve4RPCZ3FyaZH9%2BAl52pW13Ryrp1&X-Amz-Signature=3cdc3ec11c6f60fe4bd17c5479b527d46d443cb3b9302183611daf1e944ba3f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUSUSUP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMHAz%2BPbVpNQc%2FLoT40Qk4qcQwjbBPL63rcUEIEyvm%2FAiA1H9CDUZOPYIDS8FLwmBnoyk0kbZfVXDso2WLkUT1gVir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdBJ0ETnYAfYfNwiyKtwDRjALXRRthlfGzhlp%2FEegPpspNRgyHdPwjE9M6XGAFEhuvSPyBga31f%2FnZhNb8PxD%2FsWd5ZlyWdYhdwAvHRCAIHJ65%2F%2FweMrCZW1u%2FMqRSXTg2xhvVO6nGk2YPFr6XDYviGIF2%2BBb4atn4TwQfihN32Ut4dIl3ESaES%2BXw2XSBgmF2F6Dqptn57TbthmauP0FR6PoGiZ6EQIevIqsn6oHbCfWVSVdqqQ3Dv0AtDKkK82iwBIejGID6hOUhNo1DL6NhjC59cUEQTqFJDBEObVlHmUTzPpCcXb0pF6K%2BXeeuOI2f7EEfg8OYRNvlYqNjOFc5XCVdbD1brpcgTWuEHdHWdKvfbEJAg3A8%2Bh%2BXX34YPEErqsMyeGJZoQ%2BVYu54cIJa7Sh7W7nsqMg2hAgkGdNpzuQFJhupXNU%2F5RfIcOgdPuWYeVpiwopFCaSQBcxzF42EYEG3USoq8vXclSv%2Be2OdPtJ%2BhZ4yM5fGvJUy34whjxRLeUPzRAPMKcum4OH4INBwjIZw9nt%2FF2XNpa1A2ACOGBlsCpaBoRfWfCSD2nF1MRldn%2Bh6tQLvPZlAK%2F55zy3BbqxYFxXmuCf6mOFD8W%2BtY%2B2yeFaFNFuGUwA4JMCQspt3er1kZTv%2Bq9SnNMw2peMvwY6pgFMIUToPnyt3T%2FDKaORKEJS2ttxggJTFtbHz57a4O4EkorfhA%2FfcvQ3y6KzFs9d39M0lPkQIpib33%2FFnnBa7vz58SIiELrwz4RAqIUgYiPPTQzMvqLuvkDNoynDoJ7AjhKmc4rrO9VftA%2FWP%2FY5CAXm9YoT2rMP9SmUxZmsW4k0S7jJ08d87ycjyP3hVDVNc1nKve4RPCZ3FyaZH9%2BAl52pW13Ryrp1&X-Amz-Signature=47ca5f323302b6bd78afe0317ce09c6b6221992b68803242e5df13170102e585&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUSUSUP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMHAz%2BPbVpNQc%2FLoT40Qk4qcQwjbBPL63rcUEIEyvm%2FAiA1H9CDUZOPYIDS8FLwmBnoyk0kbZfVXDso2WLkUT1gVir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdBJ0ETnYAfYfNwiyKtwDRjALXRRthlfGzhlp%2FEegPpspNRgyHdPwjE9M6XGAFEhuvSPyBga31f%2FnZhNb8PxD%2FsWd5ZlyWdYhdwAvHRCAIHJ65%2F%2FweMrCZW1u%2FMqRSXTg2xhvVO6nGk2YPFr6XDYviGIF2%2BBb4atn4TwQfihN32Ut4dIl3ESaES%2BXw2XSBgmF2F6Dqptn57TbthmauP0FR6PoGiZ6EQIevIqsn6oHbCfWVSVdqqQ3Dv0AtDKkK82iwBIejGID6hOUhNo1DL6NhjC59cUEQTqFJDBEObVlHmUTzPpCcXb0pF6K%2BXeeuOI2f7EEfg8OYRNvlYqNjOFc5XCVdbD1brpcgTWuEHdHWdKvfbEJAg3A8%2Bh%2BXX34YPEErqsMyeGJZoQ%2BVYu54cIJa7Sh7W7nsqMg2hAgkGdNpzuQFJhupXNU%2F5RfIcOgdPuWYeVpiwopFCaSQBcxzF42EYEG3USoq8vXclSv%2Be2OdPtJ%2BhZ4yM5fGvJUy34whjxRLeUPzRAPMKcum4OH4INBwjIZw9nt%2FF2XNpa1A2ACOGBlsCpaBoRfWfCSD2nF1MRldn%2Bh6tQLvPZlAK%2F55zy3BbqxYFxXmuCf6mOFD8W%2BtY%2B2yeFaFNFuGUwA4JMCQspt3er1kZTv%2Bq9SnNMw2peMvwY6pgFMIUToPnyt3T%2FDKaORKEJS2ttxggJTFtbHz57a4O4EkorfhA%2FfcvQ3y6KzFs9d39M0lPkQIpib33%2FFnnBa7vz58SIiELrwz4RAqIUgYiPPTQzMvqLuvkDNoynDoJ7AjhKmc4rrO9VftA%2FWP%2FY5CAXm9YoT2rMP9SmUxZmsW4k0S7jJ08d87ycjyP3hVDVNc1nKve4RPCZ3FyaZH9%2BAl52pW13Ryrp1&X-Amz-Signature=dc5f1357d6b41ca5b81f0f76f7069d94a9635045aaf7c5e0695ec9b3e65ed32e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUSUSUP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMHAz%2BPbVpNQc%2FLoT40Qk4qcQwjbBPL63rcUEIEyvm%2FAiA1H9CDUZOPYIDS8FLwmBnoyk0kbZfVXDso2WLkUT1gVir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdBJ0ETnYAfYfNwiyKtwDRjALXRRthlfGzhlp%2FEegPpspNRgyHdPwjE9M6XGAFEhuvSPyBga31f%2FnZhNb8PxD%2FsWd5ZlyWdYhdwAvHRCAIHJ65%2F%2FweMrCZW1u%2FMqRSXTg2xhvVO6nGk2YPFr6XDYviGIF2%2BBb4atn4TwQfihN32Ut4dIl3ESaES%2BXw2XSBgmF2F6Dqptn57TbthmauP0FR6PoGiZ6EQIevIqsn6oHbCfWVSVdqqQ3Dv0AtDKkK82iwBIejGID6hOUhNo1DL6NhjC59cUEQTqFJDBEObVlHmUTzPpCcXb0pF6K%2BXeeuOI2f7EEfg8OYRNvlYqNjOFc5XCVdbD1brpcgTWuEHdHWdKvfbEJAg3A8%2Bh%2BXX34YPEErqsMyeGJZoQ%2BVYu54cIJa7Sh7W7nsqMg2hAgkGdNpzuQFJhupXNU%2F5RfIcOgdPuWYeVpiwopFCaSQBcxzF42EYEG3USoq8vXclSv%2Be2OdPtJ%2BhZ4yM5fGvJUy34whjxRLeUPzRAPMKcum4OH4INBwjIZw9nt%2FF2XNpa1A2ACOGBlsCpaBoRfWfCSD2nF1MRldn%2Bh6tQLvPZlAK%2F55zy3BbqxYFxXmuCf6mOFD8W%2BtY%2B2yeFaFNFuGUwA4JMCQspt3er1kZTv%2Bq9SnNMw2peMvwY6pgFMIUToPnyt3T%2FDKaORKEJS2ttxggJTFtbHz57a4O4EkorfhA%2FfcvQ3y6KzFs9d39M0lPkQIpib33%2FFnnBa7vz58SIiELrwz4RAqIUgYiPPTQzMvqLuvkDNoynDoJ7AjhKmc4rrO9VftA%2FWP%2FY5CAXm9YoT2rMP9SmUxZmsW4k0S7jJ08d87ycjyP3hVDVNc1nKve4RPCZ3FyaZH9%2BAl52pW13Ryrp1&X-Amz-Signature=005ed4ff173fe022b1e31342256a4a62e036df1fa69bd8a8a95abf3477631948&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUSUSUP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMHAz%2BPbVpNQc%2FLoT40Qk4qcQwjbBPL63rcUEIEyvm%2FAiA1H9CDUZOPYIDS8FLwmBnoyk0kbZfVXDso2WLkUT1gVir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdBJ0ETnYAfYfNwiyKtwDRjALXRRthlfGzhlp%2FEegPpspNRgyHdPwjE9M6XGAFEhuvSPyBga31f%2FnZhNb8PxD%2FsWd5ZlyWdYhdwAvHRCAIHJ65%2F%2FweMrCZW1u%2FMqRSXTg2xhvVO6nGk2YPFr6XDYviGIF2%2BBb4atn4TwQfihN32Ut4dIl3ESaES%2BXw2XSBgmF2F6Dqptn57TbthmauP0FR6PoGiZ6EQIevIqsn6oHbCfWVSVdqqQ3Dv0AtDKkK82iwBIejGID6hOUhNo1DL6NhjC59cUEQTqFJDBEObVlHmUTzPpCcXb0pF6K%2BXeeuOI2f7EEfg8OYRNvlYqNjOFc5XCVdbD1brpcgTWuEHdHWdKvfbEJAg3A8%2Bh%2BXX34YPEErqsMyeGJZoQ%2BVYu54cIJa7Sh7W7nsqMg2hAgkGdNpzuQFJhupXNU%2F5RfIcOgdPuWYeVpiwopFCaSQBcxzF42EYEG3USoq8vXclSv%2Be2OdPtJ%2BhZ4yM5fGvJUy34whjxRLeUPzRAPMKcum4OH4INBwjIZw9nt%2FF2XNpa1A2ACOGBlsCpaBoRfWfCSD2nF1MRldn%2Bh6tQLvPZlAK%2F55zy3BbqxYFxXmuCf6mOFD8W%2BtY%2B2yeFaFNFuGUwA4JMCQspt3er1kZTv%2Bq9SnNMw2peMvwY6pgFMIUToPnyt3T%2FDKaORKEJS2ttxggJTFtbHz57a4O4EkorfhA%2FfcvQ3y6KzFs9d39M0lPkQIpib33%2FFnnBa7vz58SIiELrwz4RAqIUgYiPPTQzMvqLuvkDNoynDoJ7AjhKmc4rrO9VftA%2FWP%2FY5CAXm9YoT2rMP9SmUxZmsW4k0S7jJ08d87ycjyP3hVDVNc1nKve4RPCZ3FyaZH9%2BAl52pW13Ryrp1&X-Amz-Signature=edc108a49cfdab6e971245291755ecb744a3b54c69a42b00621e6d42db2dae15&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUSUSUP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMHAz%2BPbVpNQc%2FLoT40Qk4qcQwjbBPL63rcUEIEyvm%2FAiA1H9CDUZOPYIDS8FLwmBnoyk0kbZfVXDso2WLkUT1gVir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdBJ0ETnYAfYfNwiyKtwDRjALXRRthlfGzhlp%2FEegPpspNRgyHdPwjE9M6XGAFEhuvSPyBga31f%2FnZhNb8PxD%2FsWd5ZlyWdYhdwAvHRCAIHJ65%2F%2FweMrCZW1u%2FMqRSXTg2xhvVO6nGk2YPFr6XDYviGIF2%2BBb4atn4TwQfihN32Ut4dIl3ESaES%2BXw2XSBgmF2F6Dqptn57TbthmauP0FR6PoGiZ6EQIevIqsn6oHbCfWVSVdqqQ3Dv0AtDKkK82iwBIejGID6hOUhNo1DL6NhjC59cUEQTqFJDBEObVlHmUTzPpCcXb0pF6K%2BXeeuOI2f7EEfg8OYRNvlYqNjOFc5XCVdbD1brpcgTWuEHdHWdKvfbEJAg3A8%2Bh%2BXX34YPEErqsMyeGJZoQ%2BVYu54cIJa7Sh7W7nsqMg2hAgkGdNpzuQFJhupXNU%2F5RfIcOgdPuWYeVpiwopFCaSQBcxzF42EYEG3USoq8vXclSv%2Be2OdPtJ%2BhZ4yM5fGvJUy34whjxRLeUPzRAPMKcum4OH4INBwjIZw9nt%2FF2XNpa1A2ACOGBlsCpaBoRfWfCSD2nF1MRldn%2Bh6tQLvPZlAK%2F55zy3BbqxYFxXmuCf6mOFD8W%2BtY%2B2yeFaFNFuGUwA4JMCQspt3er1kZTv%2Bq9SnNMw2peMvwY6pgFMIUToPnyt3T%2FDKaORKEJS2ttxggJTFtbHz57a4O4EkorfhA%2FfcvQ3y6KzFs9d39M0lPkQIpib33%2FFnnBa7vz58SIiELrwz4RAqIUgYiPPTQzMvqLuvkDNoynDoJ7AjhKmc4rrO9VftA%2FWP%2FY5CAXm9YoT2rMP9SmUxZmsW4k0S7jJ08d87ycjyP3hVDVNc1nKve4RPCZ3FyaZH9%2BAl52pW13Ryrp1&X-Amz-Signature=feecc91441382b2de4a692bfb073df82dbf6d7af560b71b4c24faf0fd796c705&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
