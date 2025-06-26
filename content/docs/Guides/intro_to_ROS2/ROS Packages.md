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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQR5B37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCVij5sRFmiVscJdi0Osqh3gtecLKgbpKoUlM2%2BzoDS3AIhAKWU4oumPeYFjfqfJf622HqQ5f1X0Y%2BqW%2FfW4jM4ipeVKv8DCF8QABoMNjM3NDIzMTgzODA1IgxpoRTVDa0qVfq%2FvxMq3APfTuCNM%2BcWk00mdKEk9UEX9yxusGPFuvBTcBe95Yb6E2ngL2POkv6gE3i%2FJPjxufg12RdX77hKU%2Bz6ywJTWVk2eQmlVBQEqudgR42iwGdT%2B5zoMYLf01d8TW8NfH0vic2X29yk9Agx5I48NBTmaPLJhIIOyF%2FDW2LzrJjk1LdvTBP16NUfd6KuUt4mMA7xe2ceR3UibJqwSHFn0%2BwPDlUvFromXfb53BJf1lrN%2B5Jl%2Ba8NEM1Z%2Bj5WH9av5%2FuPjg25%2FoXoBi9OmtZAAJ52n5U1K9uN0hCcjL9UJvy2EoUVAqlJyTSbN5amZWLwewqeqqOWaO4mKf7KccaBILJLNN8hR3cjOmfxoco%2BZNfC2Z9z9MddftJBkDy%2F%2Bw2Ok14cqtOTnCKA1%2FxZtLDpaUj4hcGFpF5dZe6BBXfwELLtuUvaV5OiiKvwmnIHRWk95MyUTCBtp16BaRE1RC71trptTQ%2FuhBMgM8RIUl4VKbj51367DyN5932ISLDErQFn4bKDzgUvyjM8YqRQHu6dpAvM%2BbsFyCLAd%2BfgefOOIllp%2FPpcihaXG2oWmUlhavNdTdkwH%2FnxDu%2BCglMYZcOFfiIXRtRceiq%2FnNmucwHy25ch4cUVK%2F2%2FXqc09aYTu%2F%2FlrjDJnfXCBjqkAQAW4SPY48Tioci%2BMfFFjOANnuedLXmKzyv4kwpPkYj4N26GZ8ZeMAs2HnIvaYdb7zJ0W7perrYiesonrtdbPwa3rV392YYs3sMdVEgzQwdfTAeaYcA5diIix4z72WdbjMotmD6TLWHtQITptQ225yj0vMFTYR7e%2BxBXa0Ka6j9VreKsFtpC34ppQJqnDRqY5cW422QaDv9JyATqUDTbYWkSeQbT&X-Amz-Signature=bd2d18b11ca43032fcb9bc19b61c7e57ab4186eba3f83dae1847636cbdabe5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQR5B37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCVij5sRFmiVscJdi0Osqh3gtecLKgbpKoUlM2%2BzoDS3AIhAKWU4oumPeYFjfqfJf622HqQ5f1X0Y%2BqW%2FfW4jM4ipeVKv8DCF8QABoMNjM3NDIzMTgzODA1IgxpoRTVDa0qVfq%2FvxMq3APfTuCNM%2BcWk00mdKEk9UEX9yxusGPFuvBTcBe95Yb6E2ngL2POkv6gE3i%2FJPjxufg12RdX77hKU%2Bz6ywJTWVk2eQmlVBQEqudgR42iwGdT%2B5zoMYLf01d8TW8NfH0vic2X29yk9Agx5I48NBTmaPLJhIIOyF%2FDW2LzrJjk1LdvTBP16NUfd6KuUt4mMA7xe2ceR3UibJqwSHFn0%2BwPDlUvFromXfb53BJf1lrN%2B5Jl%2Ba8NEM1Z%2Bj5WH9av5%2FuPjg25%2FoXoBi9OmtZAAJ52n5U1K9uN0hCcjL9UJvy2EoUVAqlJyTSbN5amZWLwewqeqqOWaO4mKf7KccaBILJLNN8hR3cjOmfxoco%2BZNfC2Z9z9MddftJBkDy%2F%2Bw2Ok14cqtOTnCKA1%2FxZtLDpaUj4hcGFpF5dZe6BBXfwELLtuUvaV5OiiKvwmnIHRWk95MyUTCBtp16BaRE1RC71trptTQ%2FuhBMgM8RIUl4VKbj51367DyN5932ISLDErQFn4bKDzgUvyjM8YqRQHu6dpAvM%2BbsFyCLAd%2BfgefOOIllp%2FPpcihaXG2oWmUlhavNdTdkwH%2FnxDu%2BCglMYZcOFfiIXRtRceiq%2FnNmucwHy25ch4cUVK%2F2%2FXqc09aYTu%2F%2FlrjDJnfXCBjqkAQAW4SPY48Tioci%2BMfFFjOANnuedLXmKzyv4kwpPkYj4N26GZ8ZeMAs2HnIvaYdb7zJ0W7perrYiesonrtdbPwa3rV392YYs3sMdVEgzQwdfTAeaYcA5diIix4z72WdbjMotmD6TLWHtQITptQ225yj0vMFTYR7e%2BxBXa0Ka6j9VreKsFtpC34ppQJqnDRqY5cW422QaDv9JyATqUDTbYWkSeQbT&X-Amz-Signature=dd521d4606b2265825dbf62518ae93013174421572b3294f6b703767b66ca1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQR5B37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCVij5sRFmiVscJdi0Osqh3gtecLKgbpKoUlM2%2BzoDS3AIhAKWU4oumPeYFjfqfJf622HqQ5f1X0Y%2BqW%2FfW4jM4ipeVKv8DCF8QABoMNjM3NDIzMTgzODA1IgxpoRTVDa0qVfq%2FvxMq3APfTuCNM%2BcWk00mdKEk9UEX9yxusGPFuvBTcBe95Yb6E2ngL2POkv6gE3i%2FJPjxufg12RdX77hKU%2Bz6ywJTWVk2eQmlVBQEqudgR42iwGdT%2B5zoMYLf01d8TW8NfH0vic2X29yk9Agx5I48NBTmaPLJhIIOyF%2FDW2LzrJjk1LdvTBP16NUfd6KuUt4mMA7xe2ceR3UibJqwSHFn0%2BwPDlUvFromXfb53BJf1lrN%2B5Jl%2Ba8NEM1Z%2Bj5WH9av5%2FuPjg25%2FoXoBi9OmtZAAJ52n5U1K9uN0hCcjL9UJvy2EoUVAqlJyTSbN5amZWLwewqeqqOWaO4mKf7KccaBILJLNN8hR3cjOmfxoco%2BZNfC2Z9z9MddftJBkDy%2F%2Bw2Ok14cqtOTnCKA1%2FxZtLDpaUj4hcGFpF5dZe6BBXfwELLtuUvaV5OiiKvwmnIHRWk95MyUTCBtp16BaRE1RC71trptTQ%2FuhBMgM8RIUl4VKbj51367DyN5932ISLDErQFn4bKDzgUvyjM8YqRQHu6dpAvM%2BbsFyCLAd%2BfgefOOIllp%2FPpcihaXG2oWmUlhavNdTdkwH%2FnxDu%2BCglMYZcOFfiIXRtRceiq%2FnNmucwHy25ch4cUVK%2F2%2FXqc09aYTu%2F%2FlrjDJnfXCBjqkAQAW4SPY48Tioci%2BMfFFjOANnuedLXmKzyv4kwpPkYj4N26GZ8ZeMAs2HnIvaYdb7zJ0W7perrYiesonrtdbPwa3rV392YYs3sMdVEgzQwdfTAeaYcA5diIix4z72WdbjMotmD6TLWHtQITptQ225yj0vMFTYR7e%2BxBXa0Ka6j9VreKsFtpC34ppQJqnDRqY5cW422QaDv9JyATqUDTbYWkSeQbT&X-Amz-Signature=75af496be41c99d97e4573acfa53cc6ce1be0a4724fd14541db000a31cf9a9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQR5B37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCVij5sRFmiVscJdi0Osqh3gtecLKgbpKoUlM2%2BzoDS3AIhAKWU4oumPeYFjfqfJf622HqQ5f1X0Y%2BqW%2FfW4jM4ipeVKv8DCF8QABoMNjM3NDIzMTgzODA1IgxpoRTVDa0qVfq%2FvxMq3APfTuCNM%2BcWk00mdKEk9UEX9yxusGPFuvBTcBe95Yb6E2ngL2POkv6gE3i%2FJPjxufg12RdX77hKU%2Bz6ywJTWVk2eQmlVBQEqudgR42iwGdT%2B5zoMYLf01d8TW8NfH0vic2X29yk9Agx5I48NBTmaPLJhIIOyF%2FDW2LzrJjk1LdvTBP16NUfd6KuUt4mMA7xe2ceR3UibJqwSHFn0%2BwPDlUvFromXfb53BJf1lrN%2B5Jl%2Ba8NEM1Z%2Bj5WH9av5%2FuPjg25%2FoXoBi9OmtZAAJ52n5U1K9uN0hCcjL9UJvy2EoUVAqlJyTSbN5amZWLwewqeqqOWaO4mKf7KccaBILJLNN8hR3cjOmfxoco%2BZNfC2Z9z9MddftJBkDy%2F%2Bw2Ok14cqtOTnCKA1%2FxZtLDpaUj4hcGFpF5dZe6BBXfwELLtuUvaV5OiiKvwmnIHRWk95MyUTCBtp16BaRE1RC71trptTQ%2FuhBMgM8RIUl4VKbj51367DyN5932ISLDErQFn4bKDzgUvyjM8YqRQHu6dpAvM%2BbsFyCLAd%2BfgefOOIllp%2FPpcihaXG2oWmUlhavNdTdkwH%2FnxDu%2BCglMYZcOFfiIXRtRceiq%2FnNmucwHy25ch4cUVK%2F2%2FXqc09aYTu%2F%2FlrjDJnfXCBjqkAQAW4SPY48Tioci%2BMfFFjOANnuedLXmKzyv4kwpPkYj4N26GZ8ZeMAs2HnIvaYdb7zJ0W7perrYiesonrtdbPwa3rV392YYs3sMdVEgzQwdfTAeaYcA5diIix4z72WdbjMotmD6TLWHtQITptQ225yj0vMFTYR7e%2BxBXa0Ka6j9VreKsFtpC34ppQJqnDRqY5cW422QaDv9JyATqUDTbYWkSeQbT&X-Amz-Signature=be83b47b4c242b3b05a4c716e8d1086bae8c99b0c9641ec7651b6ae2d22bdcb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQR5B37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCVij5sRFmiVscJdi0Osqh3gtecLKgbpKoUlM2%2BzoDS3AIhAKWU4oumPeYFjfqfJf622HqQ5f1X0Y%2BqW%2FfW4jM4ipeVKv8DCF8QABoMNjM3NDIzMTgzODA1IgxpoRTVDa0qVfq%2FvxMq3APfTuCNM%2BcWk00mdKEk9UEX9yxusGPFuvBTcBe95Yb6E2ngL2POkv6gE3i%2FJPjxufg12RdX77hKU%2Bz6ywJTWVk2eQmlVBQEqudgR42iwGdT%2B5zoMYLf01d8TW8NfH0vic2X29yk9Agx5I48NBTmaPLJhIIOyF%2FDW2LzrJjk1LdvTBP16NUfd6KuUt4mMA7xe2ceR3UibJqwSHFn0%2BwPDlUvFromXfb53BJf1lrN%2B5Jl%2Ba8NEM1Z%2Bj5WH9av5%2FuPjg25%2FoXoBi9OmtZAAJ52n5U1K9uN0hCcjL9UJvy2EoUVAqlJyTSbN5amZWLwewqeqqOWaO4mKf7KccaBILJLNN8hR3cjOmfxoco%2BZNfC2Z9z9MddftJBkDy%2F%2Bw2Ok14cqtOTnCKA1%2FxZtLDpaUj4hcGFpF5dZe6BBXfwELLtuUvaV5OiiKvwmnIHRWk95MyUTCBtp16BaRE1RC71trptTQ%2FuhBMgM8RIUl4VKbj51367DyN5932ISLDErQFn4bKDzgUvyjM8YqRQHu6dpAvM%2BbsFyCLAd%2BfgefOOIllp%2FPpcihaXG2oWmUlhavNdTdkwH%2FnxDu%2BCglMYZcOFfiIXRtRceiq%2FnNmucwHy25ch4cUVK%2F2%2FXqc09aYTu%2F%2FlrjDJnfXCBjqkAQAW4SPY48Tioci%2BMfFFjOANnuedLXmKzyv4kwpPkYj4N26GZ8ZeMAs2HnIvaYdb7zJ0W7perrYiesonrtdbPwa3rV392YYs3sMdVEgzQwdfTAeaYcA5diIix4z72WdbjMotmD6TLWHtQITptQ225yj0vMFTYR7e%2BxBXa0Ka6j9VreKsFtpC34ppQJqnDRqY5cW422QaDv9JyATqUDTbYWkSeQbT&X-Amz-Signature=5edaac67d7e10c7eed5e4759622b2e9bc8a1043e7df160e1613bcf3d59c0e3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQR5B37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCVij5sRFmiVscJdi0Osqh3gtecLKgbpKoUlM2%2BzoDS3AIhAKWU4oumPeYFjfqfJf622HqQ5f1X0Y%2BqW%2FfW4jM4ipeVKv8DCF8QABoMNjM3NDIzMTgzODA1IgxpoRTVDa0qVfq%2FvxMq3APfTuCNM%2BcWk00mdKEk9UEX9yxusGPFuvBTcBe95Yb6E2ngL2POkv6gE3i%2FJPjxufg12RdX77hKU%2Bz6ywJTWVk2eQmlVBQEqudgR42iwGdT%2B5zoMYLf01d8TW8NfH0vic2X29yk9Agx5I48NBTmaPLJhIIOyF%2FDW2LzrJjk1LdvTBP16NUfd6KuUt4mMA7xe2ceR3UibJqwSHFn0%2BwPDlUvFromXfb53BJf1lrN%2B5Jl%2Ba8NEM1Z%2Bj5WH9av5%2FuPjg25%2FoXoBi9OmtZAAJ52n5U1K9uN0hCcjL9UJvy2EoUVAqlJyTSbN5amZWLwewqeqqOWaO4mKf7KccaBILJLNN8hR3cjOmfxoco%2BZNfC2Z9z9MddftJBkDy%2F%2Bw2Ok14cqtOTnCKA1%2FxZtLDpaUj4hcGFpF5dZe6BBXfwELLtuUvaV5OiiKvwmnIHRWk95MyUTCBtp16BaRE1RC71trptTQ%2FuhBMgM8RIUl4VKbj51367DyN5932ISLDErQFn4bKDzgUvyjM8YqRQHu6dpAvM%2BbsFyCLAd%2BfgefOOIllp%2FPpcihaXG2oWmUlhavNdTdkwH%2FnxDu%2BCglMYZcOFfiIXRtRceiq%2FnNmucwHy25ch4cUVK%2F2%2FXqc09aYTu%2F%2FlrjDJnfXCBjqkAQAW4SPY48Tioci%2BMfFFjOANnuedLXmKzyv4kwpPkYj4N26GZ8ZeMAs2HnIvaYdb7zJ0W7perrYiesonrtdbPwa3rV392YYs3sMdVEgzQwdfTAeaYcA5diIix4z72WdbjMotmD6TLWHtQITptQ225yj0vMFTYR7e%2BxBXa0Ka6j9VreKsFtpC34ppQJqnDRqY5cW422QaDv9JyATqUDTbYWkSeQbT&X-Amz-Signature=595be1be548a4ed192a2d7d3496ffba6e4a96a1fbe9a7e05c83adad26e29b325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQR5B37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCVij5sRFmiVscJdi0Osqh3gtecLKgbpKoUlM2%2BzoDS3AIhAKWU4oumPeYFjfqfJf622HqQ5f1X0Y%2BqW%2FfW4jM4ipeVKv8DCF8QABoMNjM3NDIzMTgzODA1IgxpoRTVDa0qVfq%2FvxMq3APfTuCNM%2BcWk00mdKEk9UEX9yxusGPFuvBTcBe95Yb6E2ngL2POkv6gE3i%2FJPjxufg12RdX77hKU%2Bz6ywJTWVk2eQmlVBQEqudgR42iwGdT%2B5zoMYLf01d8TW8NfH0vic2X29yk9Agx5I48NBTmaPLJhIIOyF%2FDW2LzrJjk1LdvTBP16NUfd6KuUt4mMA7xe2ceR3UibJqwSHFn0%2BwPDlUvFromXfb53BJf1lrN%2B5Jl%2Ba8NEM1Z%2Bj5WH9av5%2FuPjg25%2FoXoBi9OmtZAAJ52n5U1K9uN0hCcjL9UJvy2EoUVAqlJyTSbN5amZWLwewqeqqOWaO4mKf7KccaBILJLNN8hR3cjOmfxoco%2BZNfC2Z9z9MddftJBkDy%2F%2Bw2Ok14cqtOTnCKA1%2FxZtLDpaUj4hcGFpF5dZe6BBXfwELLtuUvaV5OiiKvwmnIHRWk95MyUTCBtp16BaRE1RC71trptTQ%2FuhBMgM8RIUl4VKbj51367DyN5932ISLDErQFn4bKDzgUvyjM8YqRQHu6dpAvM%2BbsFyCLAd%2BfgefOOIllp%2FPpcihaXG2oWmUlhavNdTdkwH%2FnxDu%2BCglMYZcOFfiIXRtRceiq%2FnNmucwHy25ch4cUVK%2F2%2FXqc09aYTu%2F%2FlrjDJnfXCBjqkAQAW4SPY48Tioci%2BMfFFjOANnuedLXmKzyv4kwpPkYj4N26GZ8ZeMAs2HnIvaYdb7zJ0W7perrYiesonrtdbPwa3rV392YYs3sMdVEgzQwdfTAeaYcA5diIix4z72WdbjMotmD6TLWHtQITptQ225yj0vMFTYR7e%2BxBXa0Ka6j9VreKsFtpC34ppQJqnDRqY5cW422QaDv9JyATqUDTbYWkSeQbT&X-Amz-Signature=f2012e11c4ecd047070416cb230eb967eba3bc246d7dacae73e1580bcddf6a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
