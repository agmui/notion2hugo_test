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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVIF6GJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICnq8tDIo%2FCrkuFbWjb2vsT4KeewFi%2F7beCvicqaaC7sAiEA3hW5jhoCj7ua%2B%2BK%2F9C1v9x0RAnCYPb8YLrK1L8mJLfQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCshlhSIfMAjyGFT8ircA8nQ%2FOBwKr4QpHcc1t%2BXs8T61HqfJNlAmMB9dyOLGpo9YiFYy8s2hqkhd27aPjfJPHQer3pSM01XbXKaDVlpUR3PRTTHLtr%2Fdoi6oMRTQZ6mc%2Bsiub4%2BJ9F4yLiGfbZgurkQs%2BsGDWa2SsgzfiwL3tzK65WzqUE3%2BJOO%2Btdp2IfvDnM4ZoQ365BQu5Yd9ji7ZbY%2F7X%2B72HNpUV54ceTpzHSOX%2FCw8yWML%2FM%2BujVDwyaVO%2B0E8QnearqRdBje9D5dGjdhnirIa5e49cubqKYIJvQuIOaaOXioopaHg1%2FqlFTe28BtS8VCOe7xQ8vM5%2BZeDqL8UfQwtKO66%2Brfr00KeVhFakV6xikMsVwakuf%2FHyGz9YBlzo9byHv7oQqykaIEhdHjNJk7ema6Nf%2BEXqXJes5pLABvriW9rjVRsoB4lGt5KNwnBslYbpOyfMf3z6DN%2F%2Fd%2Bt977NiUw5OuiqKrXLeAcZID40e5jm%2BRVnGvzKpdLR02H7ecL800mBgdr7DtakuGIpeKrrcQsoeS28L6ezSgPfeqLvve6mTNdrbBKO4OKZvBsb0ZPYzkDk5E7e9ax8yneikF%2BR3vYvTGvVS1S%2Bpk4vgOpuOPdG7PAKUFnVpSkt9I9x%2BVnNZg0pD7YMI%2B5gcEGOqUB5nmBP6trbhg37EuVjxaHnkMwRnGKwvQI2cutqZaXV2t8p%2BDPQ6o%2FiOT%2FDx9PXOxWh9hmkGpvuIE%2BoezUIj7taru1LRnmpVsrHsWfl8WjhT4GR7gDPXeFXV0ocPG24JTxwD36Milneqkj3qijiCi69xXHSCm%2FlwW9AsDC4K3vV9sT1XtU8QRCjhkixHq4GhClmXMCHyHR6bUVcyY7aVblkXTs9aPU&X-Amz-Signature=4a838d5b2ce8fc66cf50d4d90c866eec77269fb630c71decec41bca97810822a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVIF6GJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICnq8tDIo%2FCrkuFbWjb2vsT4KeewFi%2F7beCvicqaaC7sAiEA3hW5jhoCj7ua%2B%2BK%2F9C1v9x0RAnCYPb8YLrK1L8mJLfQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCshlhSIfMAjyGFT8ircA8nQ%2FOBwKr4QpHcc1t%2BXs8T61HqfJNlAmMB9dyOLGpo9YiFYy8s2hqkhd27aPjfJPHQer3pSM01XbXKaDVlpUR3PRTTHLtr%2Fdoi6oMRTQZ6mc%2Bsiub4%2BJ9F4yLiGfbZgurkQs%2BsGDWa2SsgzfiwL3tzK65WzqUE3%2BJOO%2Btdp2IfvDnM4ZoQ365BQu5Yd9ji7ZbY%2F7X%2B72HNpUV54ceTpzHSOX%2FCw8yWML%2FM%2BujVDwyaVO%2B0E8QnearqRdBje9D5dGjdhnirIa5e49cubqKYIJvQuIOaaOXioopaHg1%2FqlFTe28BtS8VCOe7xQ8vM5%2BZeDqL8UfQwtKO66%2Brfr00KeVhFakV6xikMsVwakuf%2FHyGz9YBlzo9byHv7oQqykaIEhdHjNJk7ema6Nf%2BEXqXJes5pLABvriW9rjVRsoB4lGt5KNwnBslYbpOyfMf3z6DN%2F%2Fd%2Bt977NiUw5OuiqKrXLeAcZID40e5jm%2BRVnGvzKpdLR02H7ecL800mBgdr7DtakuGIpeKrrcQsoeS28L6ezSgPfeqLvve6mTNdrbBKO4OKZvBsb0ZPYzkDk5E7e9ax8yneikF%2BR3vYvTGvVS1S%2Bpk4vgOpuOPdG7PAKUFnVpSkt9I9x%2BVnNZg0pD7YMI%2B5gcEGOqUB5nmBP6trbhg37EuVjxaHnkMwRnGKwvQI2cutqZaXV2t8p%2BDPQ6o%2FiOT%2FDx9PXOxWh9hmkGpvuIE%2BoezUIj7taru1LRnmpVsrHsWfl8WjhT4GR7gDPXeFXV0ocPG24JTxwD36Milneqkj3qijiCi69xXHSCm%2FlwW9AsDC4K3vV9sT1XtU8QRCjhkixHq4GhClmXMCHyHR6bUVcyY7aVblkXTs9aPU&X-Amz-Signature=b80d30d1210b9a60bbf9772c3cd03b54f481ee2bbdfb8f2b61d70ab66c20cca1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVIF6GJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICnq8tDIo%2FCrkuFbWjb2vsT4KeewFi%2F7beCvicqaaC7sAiEA3hW5jhoCj7ua%2B%2BK%2F9C1v9x0RAnCYPb8YLrK1L8mJLfQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCshlhSIfMAjyGFT8ircA8nQ%2FOBwKr4QpHcc1t%2BXs8T61HqfJNlAmMB9dyOLGpo9YiFYy8s2hqkhd27aPjfJPHQer3pSM01XbXKaDVlpUR3PRTTHLtr%2Fdoi6oMRTQZ6mc%2Bsiub4%2BJ9F4yLiGfbZgurkQs%2BsGDWa2SsgzfiwL3tzK65WzqUE3%2BJOO%2Btdp2IfvDnM4ZoQ365BQu5Yd9ji7ZbY%2F7X%2B72HNpUV54ceTpzHSOX%2FCw8yWML%2FM%2BujVDwyaVO%2B0E8QnearqRdBje9D5dGjdhnirIa5e49cubqKYIJvQuIOaaOXioopaHg1%2FqlFTe28BtS8VCOe7xQ8vM5%2BZeDqL8UfQwtKO66%2Brfr00KeVhFakV6xikMsVwakuf%2FHyGz9YBlzo9byHv7oQqykaIEhdHjNJk7ema6Nf%2BEXqXJes5pLABvriW9rjVRsoB4lGt5KNwnBslYbpOyfMf3z6DN%2F%2Fd%2Bt977NiUw5OuiqKrXLeAcZID40e5jm%2BRVnGvzKpdLR02H7ecL800mBgdr7DtakuGIpeKrrcQsoeS28L6ezSgPfeqLvve6mTNdrbBKO4OKZvBsb0ZPYzkDk5E7e9ax8yneikF%2BR3vYvTGvVS1S%2Bpk4vgOpuOPdG7PAKUFnVpSkt9I9x%2BVnNZg0pD7YMI%2B5gcEGOqUB5nmBP6trbhg37EuVjxaHnkMwRnGKwvQI2cutqZaXV2t8p%2BDPQ6o%2FiOT%2FDx9PXOxWh9hmkGpvuIE%2BoezUIj7taru1LRnmpVsrHsWfl8WjhT4GR7gDPXeFXV0ocPG24JTxwD36Milneqkj3qijiCi69xXHSCm%2FlwW9AsDC4K3vV9sT1XtU8QRCjhkixHq4GhClmXMCHyHR6bUVcyY7aVblkXTs9aPU&X-Amz-Signature=7bf68f200d2ca6c3f18776495837ec3960c24b8b34ce3191a2fd38db67302759&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVIF6GJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICnq8tDIo%2FCrkuFbWjb2vsT4KeewFi%2F7beCvicqaaC7sAiEA3hW5jhoCj7ua%2B%2BK%2F9C1v9x0RAnCYPb8YLrK1L8mJLfQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCshlhSIfMAjyGFT8ircA8nQ%2FOBwKr4QpHcc1t%2BXs8T61HqfJNlAmMB9dyOLGpo9YiFYy8s2hqkhd27aPjfJPHQer3pSM01XbXKaDVlpUR3PRTTHLtr%2Fdoi6oMRTQZ6mc%2Bsiub4%2BJ9F4yLiGfbZgurkQs%2BsGDWa2SsgzfiwL3tzK65WzqUE3%2BJOO%2Btdp2IfvDnM4ZoQ365BQu5Yd9ji7ZbY%2F7X%2B72HNpUV54ceTpzHSOX%2FCw8yWML%2FM%2BujVDwyaVO%2B0E8QnearqRdBje9D5dGjdhnirIa5e49cubqKYIJvQuIOaaOXioopaHg1%2FqlFTe28BtS8VCOe7xQ8vM5%2BZeDqL8UfQwtKO66%2Brfr00KeVhFakV6xikMsVwakuf%2FHyGz9YBlzo9byHv7oQqykaIEhdHjNJk7ema6Nf%2BEXqXJes5pLABvriW9rjVRsoB4lGt5KNwnBslYbpOyfMf3z6DN%2F%2Fd%2Bt977NiUw5OuiqKrXLeAcZID40e5jm%2BRVnGvzKpdLR02H7ecL800mBgdr7DtakuGIpeKrrcQsoeS28L6ezSgPfeqLvve6mTNdrbBKO4OKZvBsb0ZPYzkDk5E7e9ax8yneikF%2BR3vYvTGvVS1S%2Bpk4vgOpuOPdG7PAKUFnVpSkt9I9x%2BVnNZg0pD7YMI%2B5gcEGOqUB5nmBP6trbhg37EuVjxaHnkMwRnGKwvQI2cutqZaXV2t8p%2BDPQ6o%2FiOT%2FDx9PXOxWh9hmkGpvuIE%2BoezUIj7taru1LRnmpVsrHsWfl8WjhT4GR7gDPXeFXV0ocPG24JTxwD36Milneqkj3qijiCi69xXHSCm%2FlwW9AsDC4K3vV9sT1XtU8QRCjhkixHq4GhClmXMCHyHR6bUVcyY7aVblkXTs9aPU&X-Amz-Signature=8d2c255b24ff726f40debe8ee812664c165700ce2ed4140293415d8842726382&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVIF6GJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICnq8tDIo%2FCrkuFbWjb2vsT4KeewFi%2F7beCvicqaaC7sAiEA3hW5jhoCj7ua%2B%2BK%2F9C1v9x0RAnCYPb8YLrK1L8mJLfQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCshlhSIfMAjyGFT8ircA8nQ%2FOBwKr4QpHcc1t%2BXs8T61HqfJNlAmMB9dyOLGpo9YiFYy8s2hqkhd27aPjfJPHQer3pSM01XbXKaDVlpUR3PRTTHLtr%2Fdoi6oMRTQZ6mc%2Bsiub4%2BJ9F4yLiGfbZgurkQs%2BsGDWa2SsgzfiwL3tzK65WzqUE3%2BJOO%2Btdp2IfvDnM4ZoQ365BQu5Yd9ji7ZbY%2F7X%2B72HNpUV54ceTpzHSOX%2FCw8yWML%2FM%2BujVDwyaVO%2B0E8QnearqRdBje9D5dGjdhnirIa5e49cubqKYIJvQuIOaaOXioopaHg1%2FqlFTe28BtS8VCOe7xQ8vM5%2BZeDqL8UfQwtKO66%2Brfr00KeVhFakV6xikMsVwakuf%2FHyGz9YBlzo9byHv7oQqykaIEhdHjNJk7ema6Nf%2BEXqXJes5pLABvriW9rjVRsoB4lGt5KNwnBslYbpOyfMf3z6DN%2F%2Fd%2Bt977NiUw5OuiqKrXLeAcZID40e5jm%2BRVnGvzKpdLR02H7ecL800mBgdr7DtakuGIpeKrrcQsoeS28L6ezSgPfeqLvve6mTNdrbBKO4OKZvBsb0ZPYzkDk5E7e9ax8yneikF%2BR3vYvTGvVS1S%2Bpk4vgOpuOPdG7PAKUFnVpSkt9I9x%2BVnNZg0pD7YMI%2B5gcEGOqUB5nmBP6trbhg37EuVjxaHnkMwRnGKwvQI2cutqZaXV2t8p%2BDPQ6o%2FiOT%2FDx9PXOxWh9hmkGpvuIE%2BoezUIj7taru1LRnmpVsrHsWfl8WjhT4GR7gDPXeFXV0ocPG24JTxwD36Milneqkj3qijiCi69xXHSCm%2FlwW9AsDC4K3vV9sT1XtU8QRCjhkixHq4GhClmXMCHyHR6bUVcyY7aVblkXTs9aPU&X-Amz-Signature=9d621be0a36cc68f0a01990c6552f77fb92fa4a8bfde606a62587cd454d29a60&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVIF6GJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICnq8tDIo%2FCrkuFbWjb2vsT4KeewFi%2F7beCvicqaaC7sAiEA3hW5jhoCj7ua%2B%2BK%2F9C1v9x0RAnCYPb8YLrK1L8mJLfQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCshlhSIfMAjyGFT8ircA8nQ%2FOBwKr4QpHcc1t%2BXs8T61HqfJNlAmMB9dyOLGpo9YiFYy8s2hqkhd27aPjfJPHQer3pSM01XbXKaDVlpUR3PRTTHLtr%2Fdoi6oMRTQZ6mc%2Bsiub4%2BJ9F4yLiGfbZgurkQs%2BsGDWa2SsgzfiwL3tzK65WzqUE3%2BJOO%2Btdp2IfvDnM4ZoQ365BQu5Yd9ji7ZbY%2F7X%2B72HNpUV54ceTpzHSOX%2FCw8yWML%2FM%2BujVDwyaVO%2B0E8QnearqRdBje9D5dGjdhnirIa5e49cubqKYIJvQuIOaaOXioopaHg1%2FqlFTe28BtS8VCOe7xQ8vM5%2BZeDqL8UfQwtKO66%2Brfr00KeVhFakV6xikMsVwakuf%2FHyGz9YBlzo9byHv7oQqykaIEhdHjNJk7ema6Nf%2BEXqXJes5pLABvriW9rjVRsoB4lGt5KNwnBslYbpOyfMf3z6DN%2F%2Fd%2Bt977NiUw5OuiqKrXLeAcZID40e5jm%2BRVnGvzKpdLR02H7ecL800mBgdr7DtakuGIpeKrrcQsoeS28L6ezSgPfeqLvve6mTNdrbBKO4OKZvBsb0ZPYzkDk5E7e9ax8yneikF%2BR3vYvTGvVS1S%2Bpk4vgOpuOPdG7PAKUFnVpSkt9I9x%2BVnNZg0pD7YMI%2B5gcEGOqUB5nmBP6trbhg37EuVjxaHnkMwRnGKwvQI2cutqZaXV2t8p%2BDPQ6o%2FiOT%2FDx9PXOxWh9hmkGpvuIE%2BoezUIj7taru1LRnmpVsrHsWfl8WjhT4GR7gDPXeFXV0ocPG24JTxwD36Milneqkj3qijiCi69xXHSCm%2FlwW9AsDC4K3vV9sT1XtU8QRCjhkixHq4GhClmXMCHyHR6bUVcyY7aVblkXTs9aPU&X-Amz-Signature=d13050a9c3df9ea90c6745c43212d2395cdde0bb60cace351f44fe1016a58b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVIF6GJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICnq8tDIo%2FCrkuFbWjb2vsT4KeewFi%2F7beCvicqaaC7sAiEA3hW5jhoCj7ua%2B%2BK%2F9C1v9x0RAnCYPb8YLrK1L8mJLfQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCshlhSIfMAjyGFT8ircA8nQ%2FOBwKr4QpHcc1t%2BXs8T61HqfJNlAmMB9dyOLGpo9YiFYy8s2hqkhd27aPjfJPHQer3pSM01XbXKaDVlpUR3PRTTHLtr%2Fdoi6oMRTQZ6mc%2Bsiub4%2BJ9F4yLiGfbZgurkQs%2BsGDWa2SsgzfiwL3tzK65WzqUE3%2BJOO%2Btdp2IfvDnM4ZoQ365BQu5Yd9ji7ZbY%2F7X%2B72HNpUV54ceTpzHSOX%2FCw8yWML%2FM%2BujVDwyaVO%2B0E8QnearqRdBje9D5dGjdhnirIa5e49cubqKYIJvQuIOaaOXioopaHg1%2FqlFTe28BtS8VCOe7xQ8vM5%2BZeDqL8UfQwtKO66%2Brfr00KeVhFakV6xikMsVwakuf%2FHyGz9YBlzo9byHv7oQqykaIEhdHjNJk7ema6Nf%2BEXqXJes5pLABvriW9rjVRsoB4lGt5KNwnBslYbpOyfMf3z6DN%2F%2Fd%2Bt977NiUw5OuiqKrXLeAcZID40e5jm%2BRVnGvzKpdLR02H7ecL800mBgdr7DtakuGIpeKrrcQsoeS28L6ezSgPfeqLvve6mTNdrbBKO4OKZvBsb0ZPYzkDk5E7e9ax8yneikF%2BR3vYvTGvVS1S%2Bpk4vgOpuOPdG7PAKUFnVpSkt9I9x%2BVnNZg0pD7YMI%2B5gcEGOqUB5nmBP6trbhg37EuVjxaHnkMwRnGKwvQI2cutqZaXV2t8p%2BDPQ6o%2FiOT%2FDx9PXOxWh9hmkGpvuIE%2BoezUIj7taru1LRnmpVsrHsWfl8WjhT4GR7gDPXeFXV0ocPG24JTxwD36Milneqkj3qijiCi69xXHSCm%2FlwW9AsDC4K3vV9sT1XtU8QRCjhkixHq4GhClmXMCHyHR6bUVcyY7aVblkXTs9aPU&X-Amz-Signature=745cf1f18cef95e19e8733b080c4e954bb68488f4f56cb842be57eb7cbdf3b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
