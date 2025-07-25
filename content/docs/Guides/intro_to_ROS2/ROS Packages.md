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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2FGQNQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTo4zjEhgCIUXXHg4fctfD02Avq1d%2F9wwLrkyj50xNPAiAOfrtf4jFMr35pN5mfTrGl%2FBo9c2DS7Tohx9RXoBBX1Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMq3HA6SIHhmtjP38QKtwDLymKHvvoye9Ij%2BxRhlsgj7u4cK5H9WkbFRRomkpNOhkLkhTb37PgOnwK%2BPu4gxVI5%2BCSAs%2B%2BGGqF%2FG9RoEoFozDKW0tvXwsH8YDZhzcz%2FdNrSuQyyyyerehSb1fSJWuFzPUZrBz256hOq31Vp4Ltk68JD6rZHtsDyZ48mnCklOx%2BAJM3I%2F6lDSLhIWHrvMlEMV96%2Bsl2XrOtdHYv2JAj7H9kls3yOSTlNfcyFW3XEbSzEfFjVZ7ZjbvAEv%2Fo5PpLCqZz%2BBbVODNeD287MKvV82Cp8mOsC4MHHgCsei9stQNbKA%2BAAC8SC1AxI5EpLYQYUN%2BbMwCN8yOK7vdMDs0QMjrj1S91UN1yhtFhBU0DfYtacQyvkMVSMeWBuCx2LHx1OoAbDAf2IeiSi1jaFkIUp4XqH%2BqRPqDVxSd3mRQgcdoxt8pEpFmVnxxZA48X4R8l4cb%2FD27ZSYX3krUPOi1iIfDQPyd6MkIG4ANGAq6RN6DXfTfybpkzTIv0yRwYoT%2B0%2B7mPxI3iyOvalF%2BHb1pkx7B1tZm8By1kN0j4%2FLZPuMhme1I%2FZdN5dSNYBdQ3u43DmGZDkc40LO9AltN6nZNhoaPMiD5vcEKOnVhM6tICfRR5hScKGKd6UTkXXhgwxveLxAY6pgFjzAvwDOb8WG%2FBt3hF8aJ8Va2%2FGVBXuedYc1Xrw1mWRtA2NU3ItK97r4l94YUDi5aihGM4NV0vNfY7sCSKBuCqZAYNYL39ZWSXPO7ssafz%2FuNu2wuqK4KMoPNBm88TLA6UYx4JAwlD%2B6%2BzNh9fl0OeyW4ItfZ1J4mAz7OM3wvZP5W%2FPQ9ZJ4wUkv3PlAOgcdLuoZpOQAqxz4eUJp4IEaGk%2BSGH4FRc&X-Amz-Signature=44c0726ec891c1f75c3352c2c7459e9fd9dda462b4f1da71523e9e066a089744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2FGQNQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTo4zjEhgCIUXXHg4fctfD02Avq1d%2F9wwLrkyj50xNPAiAOfrtf4jFMr35pN5mfTrGl%2FBo9c2DS7Tohx9RXoBBX1Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMq3HA6SIHhmtjP38QKtwDLymKHvvoye9Ij%2BxRhlsgj7u4cK5H9WkbFRRomkpNOhkLkhTb37PgOnwK%2BPu4gxVI5%2BCSAs%2B%2BGGqF%2FG9RoEoFozDKW0tvXwsH8YDZhzcz%2FdNrSuQyyyyerehSb1fSJWuFzPUZrBz256hOq31Vp4Ltk68JD6rZHtsDyZ48mnCklOx%2BAJM3I%2F6lDSLhIWHrvMlEMV96%2Bsl2XrOtdHYv2JAj7H9kls3yOSTlNfcyFW3XEbSzEfFjVZ7ZjbvAEv%2Fo5PpLCqZz%2BBbVODNeD287MKvV82Cp8mOsC4MHHgCsei9stQNbKA%2BAAC8SC1AxI5EpLYQYUN%2BbMwCN8yOK7vdMDs0QMjrj1S91UN1yhtFhBU0DfYtacQyvkMVSMeWBuCx2LHx1OoAbDAf2IeiSi1jaFkIUp4XqH%2BqRPqDVxSd3mRQgcdoxt8pEpFmVnxxZA48X4R8l4cb%2FD27ZSYX3krUPOi1iIfDQPyd6MkIG4ANGAq6RN6DXfTfybpkzTIv0yRwYoT%2B0%2B7mPxI3iyOvalF%2BHb1pkx7B1tZm8By1kN0j4%2FLZPuMhme1I%2FZdN5dSNYBdQ3u43DmGZDkc40LO9AltN6nZNhoaPMiD5vcEKOnVhM6tICfRR5hScKGKd6UTkXXhgwxveLxAY6pgFjzAvwDOb8WG%2FBt3hF8aJ8Va2%2FGVBXuedYc1Xrw1mWRtA2NU3ItK97r4l94YUDi5aihGM4NV0vNfY7sCSKBuCqZAYNYL39ZWSXPO7ssafz%2FuNu2wuqK4KMoPNBm88TLA6UYx4JAwlD%2B6%2BzNh9fl0OeyW4ItfZ1J4mAz7OM3wvZP5W%2FPQ9ZJ4wUkv3PlAOgcdLuoZpOQAqxz4eUJp4IEaGk%2BSGH4FRc&X-Amz-Signature=1c857a2e258ffee332084c7c5360b9a6943adc3ca1f30f7d8cb1dc880d47a143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2FGQNQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTo4zjEhgCIUXXHg4fctfD02Avq1d%2F9wwLrkyj50xNPAiAOfrtf4jFMr35pN5mfTrGl%2FBo9c2DS7Tohx9RXoBBX1Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMq3HA6SIHhmtjP38QKtwDLymKHvvoye9Ij%2BxRhlsgj7u4cK5H9WkbFRRomkpNOhkLkhTb37PgOnwK%2BPu4gxVI5%2BCSAs%2B%2BGGqF%2FG9RoEoFozDKW0tvXwsH8YDZhzcz%2FdNrSuQyyyyerehSb1fSJWuFzPUZrBz256hOq31Vp4Ltk68JD6rZHtsDyZ48mnCklOx%2BAJM3I%2F6lDSLhIWHrvMlEMV96%2Bsl2XrOtdHYv2JAj7H9kls3yOSTlNfcyFW3XEbSzEfFjVZ7ZjbvAEv%2Fo5PpLCqZz%2BBbVODNeD287MKvV82Cp8mOsC4MHHgCsei9stQNbKA%2BAAC8SC1AxI5EpLYQYUN%2BbMwCN8yOK7vdMDs0QMjrj1S91UN1yhtFhBU0DfYtacQyvkMVSMeWBuCx2LHx1OoAbDAf2IeiSi1jaFkIUp4XqH%2BqRPqDVxSd3mRQgcdoxt8pEpFmVnxxZA48X4R8l4cb%2FD27ZSYX3krUPOi1iIfDQPyd6MkIG4ANGAq6RN6DXfTfybpkzTIv0yRwYoT%2B0%2B7mPxI3iyOvalF%2BHb1pkx7B1tZm8By1kN0j4%2FLZPuMhme1I%2FZdN5dSNYBdQ3u43DmGZDkc40LO9AltN6nZNhoaPMiD5vcEKOnVhM6tICfRR5hScKGKd6UTkXXhgwxveLxAY6pgFjzAvwDOb8WG%2FBt3hF8aJ8Va2%2FGVBXuedYc1Xrw1mWRtA2NU3ItK97r4l94YUDi5aihGM4NV0vNfY7sCSKBuCqZAYNYL39ZWSXPO7ssafz%2FuNu2wuqK4KMoPNBm88TLA6UYx4JAwlD%2B6%2BzNh9fl0OeyW4ItfZ1J4mAz7OM3wvZP5W%2FPQ9ZJ4wUkv3PlAOgcdLuoZpOQAqxz4eUJp4IEaGk%2BSGH4FRc&X-Amz-Signature=68c9de26a7ff9402abcfc7b88b93cf3fa5aebd720eb14c8d619b4e7f560db8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2FGQNQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTo4zjEhgCIUXXHg4fctfD02Avq1d%2F9wwLrkyj50xNPAiAOfrtf4jFMr35pN5mfTrGl%2FBo9c2DS7Tohx9RXoBBX1Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMq3HA6SIHhmtjP38QKtwDLymKHvvoye9Ij%2BxRhlsgj7u4cK5H9WkbFRRomkpNOhkLkhTb37PgOnwK%2BPu4gxVI5%2BCSAs%2B%2BGGqF%2FG9RoEoFozDKW0tvXwsH8YDZhzcz%2FdNrSuQyyyyerehSb1fSJWuFzPUZrBz256hOq31Vp4Ltk68JD6rZHtsDyZ48mnCklOx%2BAJM3I%2F6lDSLhIWHrvMlEMV96%2Bsl2XrOtdHYv2JAj7H9kls3yOSTlNfcyFW3XEbSzEfFjVZ7ZjbvAEv%2Fo5PpLCqZz%2BBbVODNeD287MKvV82Cp8mOsC4MHHgCsei9stQNbKA%2BAAC8SC1AxI5EpLYQYUN%2BbMwCN8yOK7vdMDs0QMjrj1S91UN1yhtFhBU0DfYtacQyvkMVSMeWBuCx2LHx1OoAbDAf2IeiSi1jaFkIUp4XqH%2BqRPqDVxSd3mRQgcdoxt8pEpFmVnxxZA48X4R8l4cb%2FD27ZSYX3krUPOi1iIfDQPyd6MkIG4ANGAq6RN6DXfTfybpkzTIv0yRwYoT%2B0%2B7mPxI3iyOvalF%2BHb1pkx7B1tZm8By1kN0j4%2FLZPuMhme1I%2FZdN5dSNYBdQ3u43DmGZDkc40LO9AltN6nZNhoaPMiD5vcEKOnVhM6tICfRR5hScKGKd6UTkXXhgwxveLxAY6pgFjzAvwDOb8WG%2FBt3hF8aJ8Va2%2FGVBXuedYc1Xrw1mWRtA2NU3ItK97r4l94YUDi5aihGM4NV0vNfY7sCSKBuCqZAYNYL39ZWSXPO7ssafz%2FuNu2wuqK4KMoPNBm88TLA6UYx4JAwlD%2B6%2BzNh9fl0OeyW4ItfZ1J4mAz7OM3wvZP5W%2FPQ9ZJ4wUkv3PlAOgcdLuoZpOQAqxz4eUJp4IEaGk%2BSGH4FRc&X-Amz-Signature=d5efd211a8fac8a5546df7559adf146908f14b3bc0e33a3455a90debbaf47ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2FGQNQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTo4zjEhgCIUXXHg4fctfD02Avq1d%2F9wwLrkyj50xNPAiAOfrtf4jFMr35pN5mfTrGl%2FBo9c2DS7Tohx9RXoBBX1Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMq3HA6SIHhmtjP38QKtwDLymKHvvoye9Ij%2BxRhlsgj7u4cK5H9WkbFRRomkpNOhkLkhTb37PgOnwK%2BPu4gxVI5%2BCSAs%2B%2BGGqF%2FG9RoEoFozDKW0tvXwsH8YDZhzcz%2FdNrSuQyyyyerehSb1fSJWuFzPUZrBz256hOq31Vp4Ltk68JD6rZHtsDyZ48mnCklOx%2BAJM3I%2F6lDSLhIWHrvMlEMV96%2Bsl2XrOtdHYv2JAj7H9kls3yOSTlNfcyFW3XEbSzEfFjVZ7ZjbvAEv%2Fo5PpLCqZz%2BBbVODNeD287MKvV82Cp8mOsC4MHHgCsei9stQNbKA%2BAAC8SC1AxI5EpLYQYUN%2BbMwCN8yOK7vdMDs0QMjrj1S91UN1yhtFhBU0DfYtacQyvkMVSMeWBuCx2LHx1OoAbDAf2IeiSi1jaFkIUp4XqH%2BqRPqDVxSd3mRQgcdoxt8pEpFmVnxxZA48X4R8l4cb%2FD27ZSYX3krUPOi1iIfDQPyd6MkIG4ANGAq6RN6DXfTfybpkzTIv0yRwYoT%2B0%2B7mPxI3iyOvalF%2BHb1pkx7B1tZm8By1kN0j4%2FLZPuMhme1I%2FZdN5dSNYBdQ3u43DmGZDkc40LO9AltN6nZNhoaPMiD5vcEKOnVhM6tICfRR5hScKGKd6UTkXXhgwxveLxAY6pgFjzAvwDOb8WG%2FBt3hF8aJ8Va2%2FGVBXuedYc1Xrw1mWRtA2NU3ItK97r4l94YUDi5aihGM4NV0vNfY7sCSKBuCqZAYNYL39ZWSXPO7ssafz%2FuNu2wuqK4KMoPNBm88TLA6UYx4JAwlD%2B6%2BzNh9fl0OeyW4ItfZ1J4mAz7OM3wvZP5W%2FPQ9ZJ4wUkv3PlAOgcdLuoZpOQAqxz4eUJp4IEaGk%2BSGH4FRc&X-Amz-Signature=ec45d0fab83c1f49941e686032ad3278f9aa4ce0e9fa67c9ee2f34f6b3ecc7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2FGQNQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTo4zjEhgCIUXXHg4fctfD02Avq1d%2F9wwLrkyj50xNPAiAOfrtf4jFMr35pN5mfTrGl%2FBo9c2DS7Tohx9RXoBBX1Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMq3HA6SIHhmtjP38QKtwDLymKHvvoye9Ij%2BxRhlsgj7u4cK5H9WkbFRRomkpNOhkLkhTb37PgOnwK%2BPu4gxVI5%2BCSAs%2B%2BGGqF%2FG9RoEoFozDKW0tvXwsH8YDZhzcz%2FdNrSuQyyyyerehSb1fSJWuFzPUZrBz256hOq31Vp4Ltk68JD6rZHtsDyZ48mnCklOx%2BAJM3I%2F6lDSLhIWHrvMlEMV96%2Bsl2XrOtdHYv2JAj7H9kls3yOSTlNfcyFW3XEbSzEfFjVZ7ZjbvAEv%2Fo5PpLCqZz%2BBbVODNeD287MKvV82Cp8mOsC4MHHgCsei9stQNbKA%2BAAC8SC1AxI5EpLYQYUN%2BbMwCN8yOK7vdMDs0QMjrj1S91UN1yhtFhBU0DfYtacQyvkMVSMeWBuCx2LHx1OoAbDAf2IeiSi1jaFkIUp4XqH%2BqRPqDVxSd3mRQgcdoxt8pEpFmVnxxZA48X4R8l4cb%2FD27ZSYX3krUPOi1iIfDQPyd6MkIG4ANGAq6RN6DXfTfybpkzTIv0yRwYoT%2B0%2B7mPxI3iyOvalF%2BHb1pkx7B1tZm8By1kN0j4%2FLZPuMhme1I%2FZdN5dSNYBdQ3u43DmGZDkc40LO9AltN6nZNhoaPMiD5vcEKOnVhM6tICfRR5hScKGKd6UTkXXhgwxveLxAY6pgFjzAvwDOb8WG%2FBt3hF8aJ8Va2%2FGVBXuedYc1Xrw1mWRtA2NU3ItK97r4l94YUDi5aihGM4NV0vNfY7sCSKBuCqZAYNYL39ZWSXPO7ssafz%2FuNu2wuqK4KMoPNBm88TLA6UYx4JAwlD%2B6%2BzNh9fl0OeyW4ItfZ1J4mAz7OM3wvZP5W%2FPQ9ZJ4wUkv3PlAOgcdLuoZpOQAqxz4eUJp4IEaGk%2BSGH4FRc&X-Amz-Signature=74f363eabaa3c8a66769718a043ed29ee343d6abf96c17cc5b079ef07b0df0c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2FGQNQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTo4zjEhgCIUXXHg4fctfD02Avq1d%2F9wwLrkyj50xNPAiAOfrtf4jFMr35pN5mfTrGl%2FBo9c2DS7Tohx9RXoBBX1Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMq3HA6SIHhmtjP38QKtwDLymKHvvoye9Ij%2BxRhlsgj7u4cK5H9WkbFRRomkpNOhkLkhTb37PgOnwK%2BPu4gxVI5%2BCSAs%2B%2BGGqF%2FG9RoEoFozDKW0tvXwsH8YDZhzcz%2FdNrSuQyyyyerehSb1fSJWuFzPUZrBz256hOq31Vp4Ltk68JD6rZHtsDyZ48mnCklOx%2BAJM3I%2F6lDSLhIWHrvMlEMV96%2Bsl2XrOtdHYv2JAj7H9kls3yOSTlNfcyFW3XEbSzEfFjVZ7ZjbvAEv%2Fo5PpLCqZz%2BBbVODNeD287MKvV82Cp8mOsC4MHHgCsei9stQNbKA%2BAAC8SC1AxI5EpLYQYUN%2BbMwCN8yOK7vdMDs0QMjrj1S91UN1yhtFhBU0DfYtacQyvkMVSMeWBuCx2LHx1OoAbDAf2IeiSi1jaFkIUp4XqH%2BqRPqDVxSd3mRQgcdoxt8pEpFmVnxxZA48X4R8l4cb%2FD27ZSYX3krUPOi1iIfDQPyd6MkIG4ANGAq6RN6DXfTfybpkzTIv0yRwYoT%2B0%2B7mPxI3iyOvalF%2BHb1pkx7B1tZm8By1kN0j4%2FLZPuMhme1I%2FZdN5dSNYBdQ3u43DmGZDkc40LO9AltN6nZNhoaPMiD5vcEKOnVhM6tICfRR5hScKGKd6UTkXXhgwxveLxAY6pgFjzAvwDOb8WG%2FBt3hF8aJ8Va2%2FGVBXuedYc1Xrw1mWRtA2NU3ItK97r4l94YUDi5aihGM4NV0vNfY7sCSKBuCqZAYNYL39ZWSXPO7ssafz%2FuNu2wuqK4KMoPNBm88TLA6UYx4JAwlD%2B6%2BzNh9fl0OeyW4ItfZ1J4mAz7OM3wvZP5W%2FPQ9ZJ4wUkv3PlAOgcdLuoZpOQAqxz4eUJp4IEaGk%2BSGH4FRc&X-Amz-Signature=cbb2859a5861ff3d03934e5a70603c13222596b8cc2e6761bb0f364b1dec0c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
