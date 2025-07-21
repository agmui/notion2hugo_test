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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMTZZ657%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUmj1myQYjKPmtajWKpyMtLaYT%2BTJppObWIhur%2BwGnAwIgfq1mqayEMKAiKfcp%2Bp4S%2FdI%2FrEFlSSQJYC62b8%2FAUeIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrzGWAIN6U4Hm8kdCrcAwhQdfmiyCM7pudndWvT9y6Y8PMFHWhnIzqsG3GQtbQCUhL6edMSoevmFLLd0Xq9BcwW27oORAY5ix84yUk7K2EPyblfVarP20di2gR%2BxDxJuSXz29lMnmo9tfHghVI%2F%2BISHOodRrde%2FAXV6FqJj2ob3gzSvi9hRcQiatPt5w0yQYnXOQ6cZt97g7p4H63%2FYUUQHV4Dq2joYjbLcbZjsxUplLWc%2BicutFFV02nDIXp7FN8S8STsywvN6by8JDE4BV8rZVG6%2Bye27msMFAym4zBz1f0oYRWLTuFx4T7K1rZP0%2Br55pvk3qFgMy6S4JG1FgFu0qrLn8ubZgZv8z1bmlv5HBpWDqRbn0%2FvMqHRMgqompTxKZgSUiyLOsW6Oh7CfmWIMG2o77BUcYhs6wJ9%2Fb3u3166vtpp%2Bw8jE1cNsG%2FsJ0Y5eZ7IX1K65trpPtQBxGFpS7zB6T%2BavQRS3AO0RkA3SJK1688IqeCg%2FqZBsOSWPDKXUYg2xDzHl%2BSezJh8q46VjBdJBTsmdJO%2FUP6B%2B7cMt90BHyHR8Kv5r9jYuIYN02TQwhrtUpi81hYLW253wHWS2UzF7lVDjjJmY4P3AJHmbK3fo9FgGC8S29qxjxrUJXYKvurfwaT%2B3kGjtMIzo%2BcMGOqUBrqRiDPd%2BJHEOvut2%2FvD6aSLH6PD%2FEb46hc76XTB7u9cwsB%2FKmBRtu1z3%2B1g3TYffhaVaF%2BPhac5eA4dJq5xlTaZZX%2F5CbC3%2BhoSatji%2BsEYxJSaZM5v5P%2FEZUQfeqcY6rzUzuTmCtj9CeL4MEHvTW%2BFDc3Vtpq5WTpD1ix5zBXPDbXyCphB%2BJwUJAKFquBqRWPvDQ8QQksRFDqoqgTkHm6R3hQAI&X-Amz-Signature=1893a592f26b668fc1262b3e12cdffe6512a03c28f673a3562adb669fa5606be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMTZZ657%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUmj1myQYjKPmtajWKpyMtLaYT%2BTJppObWIhur%2BwGnAwIgfq1mqayEMKAiKfcp%2Bp4S%2FdI%2FrEFlSSQJYC62b8%2FAUeIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrzGWAIN6U4Hm8kdCrcAwhQdfmiyCM7pudndWvT9y6Y8PMFHWhnIzqsG3GQtbQCUhL6edMSoevmFLLd0Xq9BcwW27oORAY5ix84yUk7K2EPyblfVarP20di2gR%2BxDxJuSXz29lMnmo9tfHghVI%2F%2BISHOodRrde%2FAXV6FqJj2ob3gzSvi9hRcQiatPt5w0yQYnXOQ6cZt97g7p4H63%2FYUUQHV4Dq2joYjbLcbZjsxUplLWc%2BicutFFV02nDIXp7FN8S8STsywvN6by8JDE4BV8rZVG6%2Bye27msMFAym4zBz1f0oYRWLTuFx4T7K1rZP0%2Br55pvk3qFgMy6S4JG1FgFu0qrLn8ubZgZv8z1bmlv5HBpWDqRbn0%2FvMqHRMgqompTxKZgSUiyLOsW6Oh7CfmWIMG2o77BUcYhs6wJ9%2Fb3u3166vtpp%2Bw8jE1cNsG%2FsJ0Y5eZ7IX1K65trpPtQBxGFpS7zB6T%2BavQRS3AO0RkA3SJK1688IqeCg%2FqZBsOSWPDKXUYg2xDzHl%2BSezJh8q46VjBdJBTsmdJO%2FUP6B%2B7cMt90BHyHR8Kv5r9jYuIYN02TQwhrtUpi81hYLW253wHWS2UzF7lVDjjJmY4P3AJHmbK3fo9FgGC8S29qxjxrUJXYKvurfwaT%2B3kGjtMIzo%2BcMGOqUBrqRiDPd%2BJHEOvut2%2FvD6aSLH6PD%2FEb46hc76XTB7u9cwsB%2FKmBRtu1z3%2B1g3TYffhaVaF%2BPhac5eA4dJq5xlTaZZX%2F5CbC3%2BhoSatji%2BsEYxJSaZM5v5P%2FEZUQfeqcY6rzUzuTmCtj9CeL4MEHvTW%2BFDc3Vtpq5WTpD1ix5zBXPDbXyCphB%2BJwUJAKFquBqRWPvDQ8QQksRFDqoqgTkHm6R3hQAI&X-Amz-Signature=831e6e6041749f7a23d0d5d605bd1ea5f934b8dea0abf534941dc5700e374894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMTZZ657%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUmj1myQYjKPmtajWKpyMtLaYT%2BTJppObWIhur%2BwGnAwIgfq1mqayEMKAiKfcp%2Bp4S%2FdI%2FrEFlSSQJYC62b8%2FAUeIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrzGWAIN6U4Hm8kdCrcAwhQdfmiyCM7pudndWvT9y6Y8PMFHWhnIzqsG3GQtbQCUhL6edMSoevmFLLd0Xq9BcwW27oORAY5ix84yUk7K2EPyblfVarP20di2gR%2BxDxJuSXz29lMnmo9tfHghVI%2F%2BISHOodRrde%2FAXV6FqJj2ob3gzSvi9hRcQiatPt5w0yQYnXOQ6cZt97g7p4H63%2FYUUQHV4Dq2joYjbLcbZjsxUplLWc%2BicutFFV02nDIXp7FN8S8STsywvN6by8JDE4BV8rZVG6%2Bye27msMFAym4zBz1f0oYRWLTuFx4T7K1rZP0%2Br55pvk3qFgMy6S4JG1FgFu0qrLn8ubZgZv8z1bmlv5HBpWDqRbn0%2FvMqHRMgqompTxKZgSUiyLOsW6Oh7CfmWIMG2o77BUcYhs6wJ9%2Fb3u3166vtpp%2Bw8jE1cNsG%2FsJ0Y5eZ7IX1K65trpPtQBxGFpS7zB6T%2BavQRS3AO0RkA3SJK1688IqeCg%2FqZBsOSWPDKXUYg2xDzHl%2BSezJh8q46VjBdJBTsmdJO%2FUP6B%2B7cMt90BHyHR8Kv5r9jYuIYN02TQwhrtUpi81hYLW253wHWS2UzF7lVDjjJmY4P3AJHmbK3fo9FgGC8S29qxjxrUJXYKvurfwaT%2B3kGjtMIzo%2BcMGOqUBrqRiDPd%2BJHEOvut2%2FvD6aSLH6PD%2FEb46hc76XTB7u9cwsB%2FKmBRtu1z3%2B1g3TYffhaVaF%2BPhac5eA4dJq5xlTaZZX%2F5CbC3%2BhoSatji%2BsEYxJSaZM5v5P%2FEZUQfeqcY6rzUzuTmCtj9CeL4MEHvTW%2BFDc3Vtpq5WTpD1ix5zBXPDbXyCphB%2BJwUJAKFquBqRWPvDQ8QQksRFDqoqgTkHm6R3hQAI&X-Amz-Signature=bb77e52d22075750a2b42b2ac552e1a90849b1e82de25d78c62fa6eca35e09a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMTZZ657%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUmj1myQYjKPmtajWKpyMtLaYT%2BTJppObWIhur%2BwGnAwIgfq1mqayEMKAiKfcp%2Bp4S%2FdI%2FrEFlSSQJYC62b8%2FAUeIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrzGWAIN6U4Hm8kdCrcAwhQdfmiyCM7pudndWvT9y6Y8PMFHWhnIzqsG3GQtbQCUhL6edMSoevmFLLd0Xq9BcwW27oORAY5ix84yUk7K2EPyblfVarP20di2gR%2BxDxJuSXz29lMnmo9tfHghVI%2F%2BISHOodRrde%2FAXV6FqJj2ob3gzSvi9hRcQiatPt5w0yQYnXOQ6cZt97g7p4H63%2FYUUQHV4Dq2joYjbLcbZjsxUplLWc%2BicutFFV02nDIXp7FN8S8STsywvN6by8JDE4BV8rZVG6%2Bye27msMFAym4zBz1f0oYRWLTuFx4T7K1rZP0%2Br55pvk3qFgMy6S4JG1FgFu0qrLn8ubZgZv8z1bmlv5HBpWDqRbn0%2FvMqHRMgqompTxKZgSUiyLOsW6Oh7CfmWIMG2o77BUcYhs6wJ9%2Fb3u3166vtpp%2Bw8jE1cNsG%2FsJ0Y5eZ7IX1K65trpPtQBxGFpS7zB6T%2BavQRS3AO0RkA3SJK1688IqeCg%2FqZBsOSWPDKXUYg2xDzHl%2BSezJh8q46VjBdJBTsmdJO%2FUP6B%2B7cMt90BHyHR8Kv5r9jYuIYN02TQwhrtUpi81hYLW253wHWS2UzF7lVDjjJmY4P3AJHmbK3fo9FgGC8S29qxjxrUJXYKvurfwaT%2B3kGjtMIzo%2BcMGOqUBrqRiDPd%2BJHEOvut2%2FvD6aSLH6PD%2FEb46hc76XTB7u9cwsB%2FKmBRtu1z3%2B1g3TYffhaVaF%2BPhac5eA4dJq5xlTaZZX%2F5CbC3%2BhoSatji%2BsEYxJSaZM5v5P%2FEZUQfeqcY6rzUzuTmCtj9CeL4MEHvTW%2BFDc3Vtpq5WTpD1ix5zBXPDbXyCphB%2BJwUJAKFquBqRWPvDQ8QQksRFDqoqgTkHm6R3hQAI&X-Amz-Signature=c2f66339e87352a86777e647c9bce5dc75d8f42adf1c508effa83742d2642a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMTZZ657%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUmj1myQYjKPmtajWKpyMtLaYT%2BTJppObWIhur%2BwGnAwIgfq1mqayEMKAiKfcp%2Bp4S%2FdI%2FrEFlSSQJYC62b8%2FAUeIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrzGWAIN6U4Hm8kdCrcAwhQdfmiyCM7pudndWvT9y6Y8PMFHWhnIzqsG3GQtbQCUhL6edMSoevmFLLd0Xq9BcwW27oORAY5ix84yUk7K2EPyblfVarP20di2gR%2BxDxJuSXz29lMnmo9tfHghVI%2F%2BISHOodRrde%2FAXV6FqJj2ob3gzSvi9hRcQiatPt5w0yQYnXOQ6cZt97g7p4H63%2FYUUQHV4Dq2joYjbLcbZjsxUplLWc%2BicutFFV02nDIXp7FN8S8STsywvN6by8JDE4BV8rZVG6%2Bye27msMFAym4zBz1f0oYRWLTuFx4T7K1rZP0%2Br55pvk3qFgMy6S4JG1FgFu0qrLn8ubZgZv8z1bmlv5HBpWDqRbn0%2FvMqHRMgqompTxKZgSUiyLOsW6Oh7CfmWIMG2o77BUcYhs6wJ9%2Fb3u3166vtpp%2Bw8jE1cNsG%2FsJ0Y5eZ7IX1K65trpPtQBxGFpS7zB6T%2BavQRS3AO0RkA3SJK1688IqeCg%2FqZBsOSWPDKXUYg2xDzHl%2BSezJh8q46VjBdJBTsmdJO%2FUP6B%2B7cMt90BHyHR8Kv5r9jYuIYN02TQwhrtUpi81hYLW253wHWS2UzF7lVDjjJmY4P3AJHmbK3fo9FgGC8S29qxjxrUJXYKvurfwaT%2B3kGjtMIzo%2BcMGOqUBrqRiDPd%2BJHEOvut2%2FvD6aSLH6PD%2FEb46hc76XTB7u9cwsB%2FKmBRtu1z3%2B1g3TYffhaVaF%2BPhac5eA4dJq5xlTaZZX%2F5CbC3%2BhoSatji%2BsEYxJSaZM5v5P%2FEZUQfeqcY6rzUzuTmCtj9CeL4MEHvTW%2BFDc3Vtpq5WTpD1ix5zBXPDbXyCphB%2BJwUJAKFquBqRWPvDQ8QQksRFDqoqgTkHm6R3hQAI&X-Amz-Signature=9aaa08a08a6b91884d37d0326422de792fcd06a24d987d02a0f7fe09d5d8cf02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMTZZ657%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUmj1myQYjKPmtajWKpyMtLaYT%2BTJppObWIhur%2BwGnAwIgfq1mqayEMKAiKfcp%2Bp4S%2FdI%2FrEFlSSQJYC62b8%2FAUeIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrzGWAIN6U4Hm8kdCrcAwhQdfmiyCM7pudndWvT9y6Y8PMFHWhnIzqsG3GQtbQCUhL6edMSoevmFLLd0Xq9BcwW27oORAY5ix84yUk7K2EPyblfVarP20di2gR%2BxDxJuSXz29lMnmo9tfHghVI%2F%2BISHOodRrde%2FAXV6FqJj2ob3gzSvi9hRcQiatPt5w0yQYnXOQ6cZt97g7p4H63%2FYUUQHV4Dq2joYjbLcbZjsxUplLWc%2BicutFFV02nDIXp7FN8S8STsywvN6by8JDE4BV8rZVG6%2Bye27msMFAym4zBz1f0oYRWLTuFx4T7K1rZP0%2Br55pvk3qFgMy6S4JG1FgFu0qrLn8ubZgZv8z1bmlv5HBpWDqRbn0%2FvMqHRMgqompTxKZgSUiyLOsW6Oh7CfmWIMG2o77BUcYhs6wJ9%2Fb3u3166vtpp%2Bw8jE1cNsG%2FsJ0Y5eZ7IX1K65trpPtQBxGFpS7zB6T%2BavQRS3AO0RkA3SJK1688IqeCg%2FqZBsOSWPDKXUYg2xDzHl%2BSezJh8q46VjBdJBTsmdJO%2FUP6B%2B7cMt90BHyHR8Kv5r9jYuIYN02TQwhrtUpi81hYLW253wHWS2UzF7lVDjjJmY4P3AJHmbK3fo9FgGC8S29qxjxrUJXYKvurfwaT%2B3kGjtMIzo%2BcMGOqUBrqRiDPd%2BJHEOvut2%2FvD6aSLH6PD%2FEb46hc76XTB7u9cwsB%2FKmBRtu1z3%2B1g3TYffhaVaF%2BPhac5eA4dJq5xlTaZZX%2F5CbC3%2BhoSatji%2BsEYxJSaZM5v5P%2FEZUQfeqcY6rzUzuTmCtj9CeL4MEHvTW%2BFDc3Vtpq5WTpD1ix5zBXPDbXyCphB%2BJwUJAKFquBqRWPvDQ8QQksRFDqoqgTkHm6R3hQAI&X-Amz-Signature=4c7e30bc9a0d2ac3c3f3d0264871beb505151c00b6b7dc50e6e438a83e7e7233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMTZZ657%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUmj1myQYjKPmtajWKpyMtLaYT%2BTJppObWIhur%2BwGnAwIgfq1mqayEMKAiKfcp%2Bp4S%2FdI%2FrEFlSSQJYC62b8%2FAUeIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrzGWAIN6U4Hm8kdCrcAwhQdfmiyCM7pudndWvT9y6Y8PMFHWhnIzqsG3GQtbQCUhL6edMSoevmFLLd0Xq9BcwW27oORAY5ix84yUk7K2EPyblfVarP20di2gR%2BxDxJuSXz29lMnmo9tfHghVI%2F%2BISHOodRrde%2FAXV6FqJj2ob3gzSvi9hRcQiatPt5w0yQYnXOQ6cZt97g7p4H63%2FYUUQHV4Dq2joYjbLcbZjsxUplLWc%2BicutFFV02nDIXp7FN8S8STsywvN6by8JDE4BV8rZVG6%2Bye27msMFAym4zBz1f0oYRWLTuFx4T7K1rZP0%2Br55pvk3qFgMy6S4JG1FgFu0qrLn8ubZgZv8z1bmlv5HBpWDqRbn0%2FvMqHRMgqompTxKZgSUiyLOsW6Oh7CfmWIMG2o77BUcYhs6wJ9%2Fb3u3166vtpp%2Bw8jE1cNsG%2FsJ0Y5eZ7IX1K65trpPtQBxGFpS7zB6T%2BavQRS3AO0RkA3SJK1688IqeCg%2FqZBsOSWPDKXUYg2xDzHl%2BSezJh8q46VjBdJBTsmdJO%2FUP6B%2B7cMt90BHyHR8Kv5r9jYuIYN02TQwhrtUpi81hYLW253wHWS2UzF7lVDjjJmY4P3AJHmbK3fo9FgGC8S29qxjxrUJXYKvurfwaT%2B3kGjtMIzo%2BcMGOqUBrqRiDPd%2BJHEOvut2%2FvD6aSLH6PD%2FEb46hc76XTB7u9cwsB%2FKmBRtu1z3%2B1g3TYffhaVaF%2BPhac5eA4dJq5xlTaZZX%2F5CbC3%2BhoSatji%2BsEYxJSaZM5v5P%2FEZUQfeqcY6rzUzuTmCtj9CeL4MEHvTW%2BFDc3Vtpq5WTpD1ix5zBXPDbXyCphB%2BJwUJAKFquBqRWPvDQ8QQksRFDqoqgTkHm6R3hQAI&X-Amz-Signature=9e039cd506398d79f7ad7c879faa152ca3a01126699c454a6342240691ede544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
