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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQW66KC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD94GKArZ6uOGtMnt4YjFCKXdAoPkBRCRhTFYhD1%2FTeCQIhANWRMjL4EzEfnixfPrfTjPhfnEJb73On86GRSTGBCz5MKv8DCEgQABoMNjM3NDIzMTgzODA1Igw8dvNiL8BgI02Xwp4q3ANINuXSaBCkQv%2BKneuj0DE8bumG%2BneIFSMu281rlEWTNEBI1KAQxFzuzV3NiBzmbEUWPUvwdCJtLZrBNdlYRhKEcDfgQK%2FCoJOknvzFHDHneZprKSceRYNeHl2tM7%2B%2BeLZTVN%2BpTf7OkszGlmvkz9wQeds8HeqtJy%2FyUE0xREHRMvjLK0D%2Bn999fQ5160VJ9tpD6EmSfIeeH1XcwbrSKaTaE6kE1FiOpnYq4F9zHck6wE7GaXGzWvWkTnIDDtT4v22y5%2BKzv5HF1YAOFrapOqDeE9Nd0nwAPlp3A%2FOyPREunYam4PMQboV9jL25mP7RqxRkLZ6eiu2waHJ0ATQJK1ZIKst8BFtdartDYsgvxBmNNyZffajkano8WuajARrsdfSfhXigeu07c07j4rx0UJFjPkibWSBGw7OFuvbCHmjthhlz3KnDpcF5k%2FAIWL2Hh7GJGQT5Df24WTedD8padNFSe7I%2FY99AcRxWOxlTjHw8kwjkGJM%2BPlQS0JmXvmpVKlL0wcto8RopQhdQNdMzNCRmXcuqq91h7GLl89nZKZE9lSyXPDlomQEY2%2FHXOus175YjFR9HZhtvUZyoZKlmAGifZfRvGv%2FHWOG8pS3xcfjAyvLun%2BsXKYdRCjPRITDR5rPABjqkAU%2F3z94yMDNycE%2Fw6MQ0Yy0hEu52MvOZVt9kKY28wvbpmiuNEcoCUvOZ4V8KuW2lhslu0IUAizcXPxXtNRiJo71%2B1rw6AAPIqrxPUmaul6MspvShvzCLApEo9jZI0kRXCBZ9bVLcWkggvEK0B245xJI8nWYzHhNKO2MiA2YhHFx399WnoFfRgcB5bEKOkzQVjFEgvbDeJNWHgsmJ%2Btz%2Fk83ZZtTM&X-Amz-Signature=d1a41ce1ea0e7c01e11a1d5db31739c2e9973685f83d887cfaabae928664c756&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQW66KC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD94GKArZ6uOGtMnt4YjFCKXdAoPkBRCRhTFYhD1%2FTeCQIhANWRMjL4EzEfnixfPrfTjPhfnEJb73On86GRSTGBCz5MKv8DCEgQABoMNjM3NDIzMTgzODA1Igw8dvNiL8BgI02Xwp4q3ANINuXSaBCkQv%2BKneuj0DE8bumG%2BneIFSMu281rlEWTNEBI1KAQxFzuzV3NiBzmbEUWPUvwdCJtLZrBNdlYRhKEcDfgQK%2FCoJOknvzFHDHneZprKSceRYNeHl2tM7%2B%2BeLZTVN%2BpTf7OkszGlmvkz9wQeds8HeqtJy%2FyUE0xREHRMvjLK0D%2Bn999fQ5160VJ9tpD6EmSfIeeH1XcwbrSKaTaE6kE1FiOpnYq4F9zHck6wE7GaXGzWvWkTnIDDtT4v22y5%2BKzv5HF1YAOFrapOqDeE9Nd0nwAPlp3A%2FOyPREunYam4PMQboV9jL25mP7RqxRkLZ6eiu2waHJ0ATQJK1ZIKst8BFtdartDYsgvxBmNNyZffajkano8WuajARrsdfSfhXigeu07c07j4rx0UJFjPkibWSBGw7OFuvbCHmjthhlz3KnDpcF5k%2FAIWL2Hh7GJGQT5Df24WTedD8padNFSe7I%2FY99AcRxWOxlTjHw8kwjkGJM%2BPlQS0JmXvmpVKlL0wcto8RopQhdQNdMzNCRmXcuqq91h7GLl89nZKZE9lSyXPDlomQEY2%2FHXOus175YjFR9HZhtvUZyoZKlmAGifZfRvGv%2FHWOG8pS3xcfjAyvLun%2BsXKYdRCjPRITDR5rPABjqkAU%2F3z94yMDNycE%2Fw6MQ0Yy0hEu52MvOZVt9kKY28wvbpmiuNEcoCUvOZ4V8KuW2lhslu0IUAizcXPxXtNRiJo71%2B1rw6AAPIqrxPUmaul6MspvShvzCLApEo9jZI0kRXCBZ9bVLcWkggvEK0B245xJI8nWYzHhNKO2MiA2YhHFx399WnoFfRgcB5bEKOkzQVjFEgvbDeJNWHgsmJ%2Btz%2Fk83ZZtTM&X-Amz-Signature=901dc2295455f650f83c4a9b7ffd73affcab3367f80fb9cf930acae14b79a90c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQW66KC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD94GKArZ6uOGtMnt4YjFCKXdAoPkBRCRhTFYhD1%2FTeCQIhANWRMjL4EzEfnixfPrfTjPhfnEJb73On86GRSTGBCz5MKv8DCEgQABoMNjM3NDIzMTgzODA1Igw8dvNiL8BgI02Xwp4q3ANINuXSaBCkQv%2BKneuj0DE8bumG%2BneIFSMu281rlEWTNEBI1KAQxFzuzV3NiBzmbEUWPUvwdCJtLZrBNdlYRhKEcDfgQK%2FCoJOknvzFHDHneZprKSceRYNeHl2tM7%2B%2BeLZTVN%2BpTf7OkszGlmvkz9wQeds8HeqtJy%2FyUE0xREHRMvjLK0D%2Bn999fQ5160VJ9tpD6EmSfIeeH1XcwbrSKaTaE6kE1FiOpnYq4F9zHck6wE7GaXGzWvWkTnIDDtT4v22y5%2BKzv5HF1YAOFrapOqDeE9Nd0nwAPlp3A%2FOyPREunYam4PMQboV9jL25mP7RqxRkLZ6eiu2waHJ0ATQJK1ZIKst8BFtdartDYsgvxBmNNyZffajkano8WuajARrsdfSfhXigeu07c07j4rx0UJFjPkibWSBGw7OFuvbCHmjthhlz3KnDpcF5k%2FAIWL2Hh7GJGQT5Df24WTedD8padNFSe7I%2FY99AcRxWOxlTjHw8kwjkGJM%2BPlQS0JmXvmpVKlL0wcto8RopQhdQNdMzNCRmXcuqq91h7GLl89nZKZE9lSyXPDlomQEY2%2FHXOus175YjFR9HZhtvUZyoZKlmAGifZfRvGv%2FHWOG8pS3xcfjAyvLun%2BsXKYdRCjPRITDR5rPABjqkAU%2F3z94yMDNycE%2Fw6MQ0Yy0hEu52MvOZVt9kKY28wvbpmiuNEcoCUvOZ4V8KuW2lhslu0IUAizcXPxXtNRiJo71%2B1rw6AAPIqrxPUmaul6MspvShvzCLApEo9jZI0kRXCBZ9bVLcWkggvEK0B245xJI8nWYzHhNKO2MiA2YhHFx399WnoFfRgcB5bEKOkzQVjFEgvbDeJNWHgsmJ%2Btz%2Fk83ZZtTM&X-Amz-Signature=cb3f9aec598f7c902b4cd5a66bec4b785b64f1d7098f6b244196124d67ab74e4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQW66KC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD94GKArZ6uOGtMnt4YjFCKXdAoPkBRCRhTFYhD1%2FTeCQIhANWRMjL4EzEfnixfPrfTjPhfnEJb73On86GRSTGBCz5MKv8DCEgQABoMNjM3NDIzMTgzODA1Igw8dvNiL8BgI02Xwp4q3ANINuXSaBCkQv%2BKneuj0DE8bumG%2BneIFSMu281rlEWTNEBI1KAQxFzuzV3NiBzmbEUWPUvwdCJtLZrBNdlYRhKEcDfgQK%2FCoJOknvzFHDHneZprKSceRYNeHl2tM7%2B%2BeLZTVN%2BpTf7OkszGlmvkz9wQeds8HeqtJy%2FyUE0xREHRMvjLK0D%2Bn999fQ5160VJ9tpD6EmSfIeeH1XcwbrSKaTaE6kE1FiOpnYq4F9zHck6wE7GaXGzWvWkTnIDDtT4v22y5%2BKzv5HF1YAOFrapOqDeE9Nd0nwAPlp3A%2FOyPREunYam4PMQboV9jL25mP7RqxRkLZ6eiu2waHJ0ATQJK1ZIKst8BFtdartDYsgvxBmNNyZffajkano8WuajARrsdfSfhXigeu07c07j4rx0UJFjPkibWSBGw7OFuvbCHmjthhlz3KnDpcF5k%2FAIWL2Hh7GJGQT5Df24WTedD8padNFSe7I%2FY99AcRxWOxlTjHw8kwjkGJM%2BPlQS0JmXvmpVKlL0wcto8RopQhdQNdMzNCRmXcuqq91h7GLl89nZKZE9lSyXPDlomQEY2%2FHXOus175YjFR9HZhtvUZyoZKlmAGifZfRvGv%2FHWOG8pS3xcfjAyvLun%2BsXKYdRCjPRITDR5rPABjqkAU%2F3z94yMDNycE%2Fw6MQ0Yy0hEu52MvOZVt9kKY28wvbpmiuNEcoCUvOZ4V8KuW2lhslu0IUAizcXPxXtNRiJo71%2B1rw6AAPIqrxPUmaul6MspvShvzCLApEo9jZI0kRXCBZ9bVLcWkggvEK0B245xJI8nWYzHhNKO2MiA2YhHFx399WnoFfRgcB5bEKOkzQVjFEgvbDeJNWHgsmJ%2Btz%2Fk83ZZtTM&X-Amz-Signature=a292099ad4f5fd8c192041063efa6ca5894db9d3cbef4174e1f62b52a4e13694&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQW66KC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD94GKArZ6uOGtMnt4YjFCKXdAoPkBRCRhTFYhD1%2FTeCQIhANWRMjL4EzEfnixfPrfTjPhfnEJb73On86GRSTGBCz5MKv8DCEgQABoMNjM3NDIzMTgzODA1Igw8dvNiL8BgI02Xwp4q3ANINuXSaBCkQv%2BKneuj0DE8bumG%2BneIFSMu281rlEWTNEBI1KAQxFzuzV3NiBzmbEUWPUvwdCJtLZrBNdlYRhKEcDfgQK%2FCoJOknvzFHDHneZprKSceRYNeHl2tM7%2B%2BeLZTVN%2BpTf7OkszGlmvkz9wQeds8HeqtJy%2FyUE0xREHRMvjLK0D%2Bn999fQ5160VJ9tpD6EmSfIeeH1XcwbrSKaTaE6kE1FiOpnYq4F9zHck6wE7GaXGzWvWkTnIDDtT4v22y5%2BKzv5HF1YAOFrapOqDeE9Nd0nwAPlp3A%2FOyPREunYam4PMQboV9jL25mP7RqxRkLZ6eiu2waHJ0ATQJK1ZIKst8BFtdartDYsgvxBmNNyZffajkano8WuajARrsdfSfhXigeu07c07j4rx0UJFjPkibWSBGw7OFuvbCHmjthhlz3KnDpcF5k%2FAIWL2Hh7GJGQT5Df24WTedD8padNFSe7I%2FY99AcRxWOxlTjHw8kwjkGJM%2BPlQS0JmXvmpVKlL0wcto8RopQhdQNdMzNCRmXcuqq91h7GLl89nZKZE9lSyXPDlomQEY2%2FHXOus175YjFR9HZhtvUZyoZKlmAGifZfRvGv%2FHWOG8pS3xcfjAyvLun%2BsXKYdRCjPRITDR5rPABjqkAU%2F3z94yMDNycE%2Fw6MQ0Yy0hEu52MvOZVt9kKY28wvbpmiuNEcoCUvOZ4V8KuW2lhslu0IUAizcXPxXtNRiJo71%2B1rw6AAPIqrxPUmaul6MspvShvzCLApEo9jZI0kRXCBZ9bVLcWkggvEK0B245xJI8nWYzHhNKO2MiA2YhHFx399WnoFfRgcB5bEKOkzQVjFEgvbDeJNWHgsmJ%2Btz%2Fk83ZZtTM&X-Amz-Signature=76ef39d63e77270a9f31ecae4e60429b232545185351aadc0f7ab2d5c77098a5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQW66KC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD94GKArZ6uOGtMnt4YjFCKXdAoPkBRCRhTFYhD1%2FTeCQIhANWRMjL4EzEfnixfPrfTjPhfnEJb73On86GRSTGBCz5MKv8DCEgQABoMNjM3NDIzMTgzODA1Igw8dvNiL8BgI02Xwp4q3ANINuXSaBCkQv%2BKneuj0DE8bumG%2BneIFSMu281rlEWTNEBI1KAQxFzuzV3NiBzmbEUWPUvwdCJtLZrBNdlYRhKEcDfgQK%2FCoJOknvzFHDHneZprKSceRYNeHl2tM7%2B%2BeLZTVN%2BpTf7OkszGlmvkz9wQeds8HeqtJy%2FyUE0xREHRMvjLK0D%2Bn999fQ5160VJ9tpD6EmSfIeeH1XcwbrSKaTaE6kE1FiOpnYq4F9zHck6wE7GaXGzWvWkTnIDDtT4v22y5%2BKzv5HF1YAOFrapOqDeE9Nd0nwAPlp3A%2FOyPREunYam4PMQboV9jL25mP7RqxRkLZ6eiu2waHJ0ATQJK1ZIKst8BFtdartDYsgvxBmNNyZffajkano8WuajARrsdfSfhXigeu07c07j4rx0UJFjPkibWSBGw7OFuvbCHmjthhlz3KnDpcF5k%2FAIWL2Hh7GJGQT5Df24WTedD8padNFSe7I%2FY99AcRxWOxlTjHw8kwjkGJM%2BPlQS0JmXvmpVKlL0wcto8RopQhdQNdMzNCRmXcuqq91h7GLl89nZKZE9lSyXPDlomQEY2%2FHXOus175YjFR9HZhtvUZyoZKlmAGifZfRvGv%2FHWOG8pS3xcfjAyvLun%2BsXKYdRCjPRITDR5rPABjqkAU%2F3z94yMDNycE%2Fw6MQ0Yy0hEu52MvOZVt9kKY28wvbpmiuNEcoCUvOZ4V8KuW2lhslu0IUAizcXPxXtNRiJo71%2B1rw6AAPIqrxPUmaul6MspvShvzCLApEo9jZI0kRXCBZ9bVLcWkggvEK0B245xJI8nWYzHhNKO2MiA2YhHFx399WnoFfRgcB5bEKOkzQVjFEgvbDeJNWHgsmJ%2Btz%2Fk83ZZtTM&X-Amz-Signature=d98eb856563128679407c6c0d235cc767cc00988db673dab1282d4b653067334&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQW66KC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD94GKArZ6uOGtMnt4YjFCKXdAoPkBRCRhTFYhD1%2FTeCQIhANWRMjL4EzEfnixfPrfTjPhfnEJb73On86GRSTGBCz5MKv8DCEgQABoMNjM3NDIzMTgzODA1Igw8dvNiL8BgI02Xwp4q3ANINuXSaBCkQv%2BKneuj0DE8bumG%2BneIFSMu281rlEWTNEBI1KAQxFzuzV3NiBzmbEUWPUvwdCJtLZrBNdlYRhKEcDfgQK%2FCoJOknvzFHDHneZprKSceRYNeHl2tM7%2B%2BeLZTVN%2BpTf7OkszGlmvkz9wQeds8HeqtJy%2FyUE0xREHRMvjLK0D%2Bn999fQ5160VJ9tpD6EmSfIeeH1XcwbrSKaTaE6kE1FiOpnYq4F9zHck6wE7GaXGzWvWkTnIDDtT4v22y5%2BKzv5HF1YAOFrapOqDeE9Nd0nwAPlp3A%2FOyPREunYam4PMQboV9jL25mP7RqxRkLZ6eiu2waHJ0ATQJK1ZIKst8BFtdartDYsgvxBmNNyZffajkano8WuajARrsdfSfhXigeu07c07j4rx0UJFjPkibWSBGw7OFuvbCHmjthhlz3KnDpcF5k%2FAIWL2Hh7GJGQT5Df24WTedD8padNFSe7I%2FY99AcRxWOxlTjHw8kwjkGJM%2BPlQS0JmXvmpVKlL0wcto8RopQhdQNdMzNCRmXcuqq91h7GLl89nZKZE9lSyXPDlomQEY2%2FHXOus175YjFR9HZhtvUZyoZKlmAGifZfRvGv%2FHWOG8pS3xcfjAyvLun%2BsXKYdRCjPRITDR5rPABjqkAU%2F3z94yMDNycE%2Fw6MQ0Yy0hEu52MvOZVt9kKY28wvbpmiuNEcoCUvOZ4V8KuW2lhslu0IUAizcXPxXtNRiJo71%2B1rw6AAPIqrxPUmaul6MspvShvzCLApEo9jZI0kRXCBZ9bVLcWkggvEK0B245xJI8nWYzHhNKO2MiA2YhHFx399WnoFfRgcB5bEKOkzQVjFEgvbDeJNWHgsmJ%2Btz%2Fk83ZZtTM&X-Amz-Signature=3899cbb01229343c3867f556bd201da7712c3263b6d806325a5acc89c3cb83ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
