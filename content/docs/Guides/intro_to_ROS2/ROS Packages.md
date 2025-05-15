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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNWRXCE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBpWux%2F%2FBM20KU%2BMnAuc3NELSeByjyJlO2flwT15KThmAiEA89d5VKGlilL9TmQcgf4CJ6%2BrF6dQ9zsMgbc%2FcUkMGT0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNh%2BK3NEGYqJdUmHvCrcA9jTfJjX6uJyu0gNqzlMqz1oarYKIdZFaeyf7oMtcHdPKgS72b57ZwV5QheQGj%2B9%2FQRzdm3j2x28%2FuSPtpG53G2XNjeNxCqoi6RxMtARrEAZf1AHbzCzX21ZFRrSC8Zj%2BLPuS%2FjNcmfafBtNDmJwoHwm6u6%2FFI4bkFI4NH6zabm1sFMkfhFZ0slESaJtqp%2F3u2TyToCsjKi%2BARf2OK8ZJrqbkTIXR9RnJID0uxBkj1mTpSZYwsalnc6Lb33oSLb1KWOUun9rJm5Q%2BoC6u6yxzhrG0%2BvkiMtPDPhIf12JWm9K6qVWhj0tae4VQvIvPVZ3uy5TAeoOwUe%2BIHbfPkrq0NV3LhWGIw2n76m%2BPnEqEU46CwCWqXczw%2BUBlck5m6ROZ3AhIkHAptxdXXT0g4jZjHTkC45P2VAY3%2B6NGWUiK%2FqACXGmZGoLqMa%2BaTOqIlybBk0MNupE9qzSUgZq5yOKz%2BmmNn9E9yph6oylvjnVlnP9dLhgUR8EwA3ecoK6Y0hCcJRMcd1K7dIskiJ7xS5BTLnls62V5S04ykUfdfRtO0WEwsamF%2BaBCPh3yxI7jh1mht%2FyFVyz%2BT8xM5NSYzFb3tcL4O4%2FIspGif%2Fu6awh8Fmtkxkg%2BukEZ3TLCvgKMM77mMEGOqUBoFD80rXg4DWNCT2q2344wLeKoX4sMsWRRQV4bMeCV7B4vx4KealRCu2XnvKg2CHy9pJ5mffWBDjBXEcLFgnYWGah%2Fr%2FSpBL2wxFtIFixSqmYmRHd%2FT5jD0FtpszM5TPgnDDXg2vbkX%2FPg4ffU7WQWPZ4iOXqCQdFQX2v4xxftehLzXq0liF1p4oDK%2B0ZRmxmCH%2BySvIjWG7bGNCxLAvMsY9R7ATd&X-Amz-Signature=90b176bd31726ee4d81187b54cfc9f03e540af3c0b09fb3a72f0d4b47be6b682&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNWRXCE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBpWux%2F%2FBM20KU%2BMnAuc3NELSeByjyJlO2flwT15KThmAiEA89d5VKGlilL9TmQcgf4CJ6%2BrF6dQ9zsMgbc%2FcUkMGT0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNh%2BK3NEGYqJdUmHvCrcA9jTfJjX6uJyu0gNqzlMqz1oarYKIdZFaeyf7oMtcHdPKgS72b57ZwV5QheQGj%2B9%2FQRzdm3j2x28%2FuSPtpG53G2XNjeNxCqoi6RxMtARrEAZf1AHbzCzX21ZFRrSC8Zj%2BLPuS%2FjNcmfafBtNDmJwoHwm6u6%2FFI4bkFI4NH6zabm1sFMkfhFZ0slESaJtqp%2F3u2TyToCsjKi%2BARf2OK8ZJrqbkTIXR9RnJID0uxBkj1mTpSZYwsalnc6Lb33oSLb1KWOUun9rJm5Q%2BoC6u6yxzhrG0%2BvkiMtPDPhIf12JWm9K6qVWhj0tae4VQvIvPVZ3uy5TAeoOwUe%2BIHbfPkrq0NV3LhWGIw2n76m%2BPnEqEU46CwCWqXczw%2BUBlck5m6ROZ3AhIkHAptxdXXT0g4jZjHTkC45P2VAY3%2B6NGWUiK%2FqACXGmZGoLqMa%2BaTOqIlybBk0MNupE9qzSUgZq5yOKz%2BmmNn9E9yph6oylvjnVlnP9dLhgUR8EwA3ecoK6Y0hCcJRMcd1K7dIskiJ7xS5BTLnls62V5S04ykUfdfRtO0WEwsamF%2BaBCPh3yxI7jh1mht%2FyFVyz%2BT8xM5NSYzFb3tcL4O4%2FIspGif%2Fu6awh8Fmtkxkg%2BukEZ3TLCvgKMM77mMEGOqUBoFD80rXg4DWNCT2q2344wLeKoX4sMsWRRQV4bMeCV7B4vx4KealRCu2XnvKg2CHy9pJ5mffWBDjBXEcLFgnYWGah%2Fr%2FSpBL2wxFtIFixSqmYmRHd%2FT5jD0FtpszM5TPgnDDXg2vbkX%2FPg4ffU7WQWPZ4iOXqCQdFQX2v4xxftehLzXq0liF1p4oDK%2B0ZRmxmCH%2BySvIjWG7bGNCxLAvMsY9R7ATd&X-Amz-Signature=e1f76dfd53e5cef8bbf6d8cbbd46ad3857a24d664c5f1b3289bada10356aff2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNWRXCE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBpWux%2F%2FBM20KU%2BMnAuc3NELSeByjyJlO2flwT15KThmAiEA89d5VKGlilL9TmQcgf4CJ6%2BrF6dQ9zsMgbc%2FcUkMGT0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNh%2BK3NEGYqJdUmHvCrcA9jTfJjX6uJyu0gNqzlMqz1oarYKIdZFaeyf7oMtcHdPKgS72b57ZwV5QheQGj%2B9%2FQRzdm3j2x28%2FuSPtpG53G2XNjeNxCqoi6RxMtARrEAZf1AHbzCzX21ZFRrSC8Zj%2BLPuS%2FjNcmfafBtNDmJwoHwm6u6%2FFI4bkFI4NH6zabm1sFMkfhFZ0slESaJtqp%2F3u2TyToCsjKi%2BARf2OK8ZJrqbkTIXR9RnJID0uxBkj1mTpSZYwsalnc6Lb33oSLb1KWOUun9rJm5Q%2BoC6u6yxzhrG0%2BvkiMtPDPhIf12JWm9K6qVWhj0tae4VQvIvPVZ3uy5TAeoOwUe%2BIHbfPkrq0NV3LhWGIw2n76m%2BPnEqEU46CwCWqXczw%2BUBlck5m6ROZ3AhIkHAptxdXXT0g4jZjHTkC45P2VAY3%2B6NGWUiK%2FqACXGmZGoLqMa%2BaTOqIlybBk0MNupE9qzSUgZq5yOKz%2BmmNn9E9yph6oylvjnVlnP9dLhgUR8EwA3ecoK6Y0hCcJRMcd1K7dIskiJ7xS5BTLnls62V5S04ykUfdfRtO0WEwsamF%2BaBCPh3yxI7jh1mht%2FyFVyz%2BT8xM5NSYzFb3tcL4O4%2FIspGif%2Fu6awh8Fmtkxkg%2BukEZ3TLCvgKMM77mMEGOqUBoFD80rXg4DWNCT2q2344wLeKoX4sMsWRRQV4bMeCV7B4vx4KealRCu2XnvKg2CHy9pJ5mffWBDjBXEcLFgnYWGah%2Fr%2FSpBL2wxFtIFixSqmYmRHd%2FT5jD0FtpszM5TPgnDDXg2vbkX%2FPg4ffU7WQWPZ4iOXqCQdFQX2v4xxftehLzXq0liF1p4oDK%2B0ZRmxmCH%2BySvIjWG7bGNCxLAvMsY9R7ATd&X-Amz-Signature=3e7c2f5aa4cdd7c8f175ab71f7cd07ff2e2d1b090fa9eb3d5e58b409e7554674&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNWRXCE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBpWux%2F%2FBM20KU%2BMnAuc3NELSeByjyJlO2flwT15KThmAiEA89d5VKGlilL9TmQcgf4CJ6%2BrF6dQ9zsMgbc%2FcUkMGT0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNh%2BK3NEGYqJdUmHvCrcA9jTfJjX6uJyu0gNqzlMqz1oarYKIdZFaeyf7oMtcHdPKgS72b57ZwV5QheQGj%2B9%2FQRzdm3j2x28%2FuSPtpG53G2XNjeNxCqoi6RxMtARrEAZf1AHbzCzX21ZFRrSC8Zj%2BLPuS%2FjNcmfafBtNDmJwoHwm6u6%2FFI4bkFI4NH6zabm1sFMkfhFZ0slESaJtqp%2F3u2TyToCsjKi%2BARf2OK8ZJrqbkTIXR9RnJID0uxBkj1mTpSZYwsalnc6Lb33oSLb1KWOUun9rJm5Q%2BoC6u6yxzhrG0%2BvkiMtPDPhIf12JWm9K6qVWhj0tae4VQvIvPVZ3uy5TAeoOwUe%2BIHbfPkrq0NV3LhWGIw2n76m%2BPnEqEU46CwCWqXczw%2BUBlck5m6ROZ3AhIkHAptxdXXT0g4jZjHTkC45P2VAY3%2B6NGWUiK%2FqACXGmZGoLqMa%2BaTOqIlybBk0MNupE9qzSUgZq5yOKz%2BmmNn9E9yph6oylvjnVlnP9dLhgUR8EwA3ecoK6Y0hCcJRMcd1K7dIskiJ7xS5BTLnls62V5S04ykUfdfRtO0WEwsamF%2BaBCPh3yxI7jh1mht%2FyFVyz%2BT8xM5NSYzFb3tcL4O4%2FIspGif%2Fu6awh8Fmtkxkg%2BukEZ3TLCvgKMM77mMEGOqUBoFD80rXg4DWNCT2q2344wLeKoX4sMsWRRQV4bMeCV7B4vx4KealRCu2XnvKg2CHy9pJ5mffWBDjBXEcLFgnYWGah%2Fr%2FSpBL2wxFtIFixSqmYmRHd%2FT5jD0FtpszM5TPgnDDXg2vbkX%2FPg4ffU7WQWPZ4iOXqCQdFQX2v4xxftehLzXq0liF1p4oDK%2B0ZRmxmCH%2BySvIjWG7bGNCxLAvMsY9R7ATd&X-Amz-Signature=0a8cfb14d025b4127ac57dd29924f1c380a5633977134786c3f5532a6dd88ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNWRXCE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBpWux%2F%2FBM20KU%2BMnAuc3NELSeByjyJlO2flwT15KThmAiEA89d5VKGlilL9TmQcgf4CJ6%2BrF6dQ9zsMgbc%2FcUkMGT0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNh%2BK3NEGYqJdUmHvCrcA9jTfJjX6uJyu0gNqzlMqz1oarYKIdZFaeyf7oMtcHdPKgS72b57ZwV5QheQGj%2B9%2FQRzdm3j2x28%2FuSPtpG53G2XNjeNxCqoi6RxMtARrEAZf1AHbzCzX21ZFRrSC8Zj%2BLPuS%2FjNcmfafBtNDmJwoHwm6u6%2FFI4bkFI4NH6zabm1sFMkfhFZ0slESaJtqp%2F3u2TyToCsjKi%2BARf2OK8ZJrqbkTIXR9RnJID0uxBkj1mTpSZYwsalnc6Lb33oSLb1KWOUun9rJm5Q%2BoC6u6yxzhrG0%2BvkiMtPDPhIf12JWm9K6qVWhj0tae4VQvIvPVZ3uy5TAeoOwUe%2BIHbfPkrq0NV3LhWGIw2n76m%2BPnEqEU46CwCWqXczw%2BUBlck5m6ROZ3AhIkHAptxdXXT0g4jZjHTkC45P2VAY3%2B6NGWUiK%2FqACXGmZGoLqMa%2BaTOqIlybBk0MNupE9qzSUgZq5yOKz%2BmmNn9E9yph6oylvjnVlnP9dLhgUR8EwA3ecoK6Y0hCcJRMcd1K7dIskiJ7xS5BTLnls62V5S04ykUfdfRtO0WEwsamF%2BaBCPh3yxI7jh1mht%2FyFVyz%2BT8xM5NSYzFb3tcL4O4%2FIspGif%2Fu6awh8Fmtkxkg%2BukEZ3TLCvgKMM77mMEGOqUBoFD80rXg4DWNCT2q2344wLeKoX4sMsWRRQV4bMeCV7B4vx4KealRCu2XnvKg2CHy9pJ5mffWBDjBXEcLFgnYWGah%2Fr%2FSpBL2wxFtIFixSqmYmRHd%2FT5jD0FtpszM5TPgnDDXg2vbkX%2FPg4ffU7WQWPZ4iOXqCQdFQX2v4xxftehLzXq0liF1p4oDK%2B0ZRmxmCH%2BySvIjWG7bGNCxLAvMsY9R7ATd&X-Amz-Signature=c1284e843a39d3a80ad06df6d4146f3c4bd58e09cbef1dadc862d0bdf4fa8d52&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNWRXCE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBpWux%2F%2FBM20KU%2BMnAuc3NELSeByjyJlO2flwT15KThmAiEA89d5VKGlilL9TmQcgf4CJ6%2BrF6dQ9zsMgbc%2FcUkMGT0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNh%2BK3NEGYqJdUmHvCrcA9jTfJjX6uJyu0gNqzlMqz1oarYKIdZFaeyf7oMtcHdPKgS72b57ZwV5QheQGj%2B9%2FQRzdm3j2x28%2FuSPtpG53G2XNjeNxCqoi6RxMtARrEAZf1AHbzCzX21ZFRrSC8Zj%2BLPuS%2FjNcmfafBtNDmJwoHwm6u6%2FFI4bkFI4NH6zabm1sFMkfhFZ0slESaJtqp%2F3u2TyToCsjKi%2BARf2OK8ZJrqbkTIXR9RnJID0uxBkj1mTpSZYwsalnc6Lb33oSLb1KWOUun9rJm5Q%2BoC6u6yxzhrG0%2BvkiMtPDPhIf12JWm9K6qVWhj0tae4VQvIvPVZ3uy5TAeoOwUe%2BIHbfPkrq0NV3LhWGIw2n76m%2BPnEqEU46CwCWqXczw%2BUBlck5m6ROZ3AhIkHAptxdXXT0g4jZjHTkC45P2VAY3%2B6NGWUiK%2FqACXGmZGoLqMa%2BaTOqIlybBk0MNupE9qzSUgZq5yOKz%2BmmNn9E9yph6oylvjnVlnP9dLhgUR8EwA3ecoK6Y0hCcJRMcd1K7dIskiJ7xS5BTLnls62V5S04ykUfdfRtO0WEwsamF%2BaBCPh3yxI7jh1mht%2FyFVyz%2BT8xM5NSYzFb3tcL4O4%2FIspGif%2Fu6awh8Fmtkxkg%2BukEZ3TLCvgKMM77mMEGOqUBoFD80rXg4DWNCT2q2344wLeKoX4sMsWRRQV4bMeCV7B4vx4KealRCu2XnvKg2CHy9pJ5mffWBDjBXEcLFgnYWGah%2Fr%2FSpBL2wxFtIFixSqmYmRHd%2FT5jD0FtpszM5TPgnDDXg2vbkX%2FPg4ffU7WQWPZ4iOXqCQdFQX2v4xxftehLzXq0liF1p4oDK%2B0ZRmxmCH%2BySvIjWG7bGNCxLAvMsY9R7ATd&X-Amz-Signature=88cbd7c6a1c90909d66e529af044617c092fb865d41f0e2c02bc1114e7030bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNWRXCE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBpWux%2F%2FBM20KU%2BMnAuc3NELSeByjyJlO2flwT15KThmAiEA89d5VKGlilL9TmQcgf4CJ6%2BrF6dQ9zsMgbc%2FcUkMGT0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNh%2BK3NEGYqJdUmHvCrcA9jTfJjX6uJyu0gNqzlMqz1oarYKIdZFaeyf7oMtcHdPKgS72b57ZwV5QheQGj%2B9%2FQRzdm3j2x28%2FuSPtpG53G2XNjeNxCqoi6RxMtARrEAZf1AHbzCzX21ZFRrSC8Zj%2BLPuS%2FjNcmfafBtNDmJwoHwm6u6%2FFI4bkFI4NH6zabm1sFMkfhFZ0slESaJtqp%2F3u2TyToCsjKi%2BARf2OK8ZJrqbkTIXR9RnJID0uxBkj1mTpSZYwsalnc6Lb33oSLb1KWOUun9rJm5Q%2BoC6u6yxzhrG0%2BvkiMtPDPhIf12JWm9K6qVWhj0tae4VQvIvPVZ3uy5TAeoOwUe%2BIHbfPkrq0NV3LhWGIw2n76m%2BPnEqEU46CwCWqXczw%2BUBlck5m6ROZ3AhIkHAptxdXXT0g4jZjHTkC45P2VAY3%2B6NGWUiK%2FqACXGmZGoLqMa%2BaTOqIlybBk0MNupE9qzSUgZq5yOKz%2BmmNn9E9yph6oylvjnVlnP9dLhgUR8EwA3ecoK6Y0hCcJRMcd1K7dIskiJ7xS5BTLnls62V5S04ykUfdfRtO0WEwsamF%2BaBCPh3yxI7jh1mht%2FyFVyz%2BT8xM5NSYzFb3tcL4O4%2FIspGif%2Fu6awh8Fmtkxkg%2BukEZ3TLCvgKMM77mMEGOqUBoFD80rXg4DWNCT2q2344wLeKoX4sMsWRRQV4bMeCV7B4vx4KealRCu2XnvKg2CHy9pJ5mffWBDjBXEcLFgnYWGah%2Fr%2FSpBL2wxFtIFixSqmYmRHd%2FT5jD0FtpszM5TPgnDDXg2vbkX%2FPg4ffU7WQWPZ4iOXqCQdFQX2v4xxftehLzXq0liF1p4oDK%2B0ZRmxmCH%2BySvIjWG7bGNCxLAvMsY9R7ATd&X-Amz-Signature=3b65ecef3e179704771815f16920cdea8a53853b23fbd9ad2fd20ff5d27460d3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
