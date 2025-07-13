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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXADQRR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ92VWn465Q0cDomwFNHDdgOeiGyLW9HB8sz4GoKBYaQIgfhahiHDr%2BBvD9mNzSYxD8DEorJhfZz31RxTHpAPe86EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTdgW%2FaY2nIMBZPCCrcA6o7UmHV%2B2f1zb5XGYXQBsDTbLAxGupBDYPvICJw2zhWjqZ4wNEPDLkwqdtv5Q7XNgZpUzcOHSWthD02r3%2BSY%2FPh2jCd7iYPlUbkINzKXyxg0pDZPKFb92HrtzeEp5KRLH85EQEWJvd9FAhgiJOQ%2Fs9BaZqCbOC3iIBSQgb9VnIFt%2BlKuACFjdy2yrmn5%2Fy267psvQfNzJj1RNWMK0957RGi3ZP3k8lIPiNrsW3cNv7PNOuauG%2BFfpTIOj2fgCKIx6VyZb6nKgtEPKHqpXbJYD2s1aiFLeS%2FOQYYknzxUiIU9%2Bf08XcosyxTN%2FBd1v2Aj4frzjjNsn5PxrC7Gh7WsH3LUGAiB%2ByYlLxxU4MMuFEeOpRAhqGaL%2B%2F2EcRqNj4XZf9ZFrFkhduL0XIqMDhmKcTfaMuAGoFGDPAKf1H%2BhjKWkMTfAb7Xj35H%2FucEYITQ2ywXIJZl57KLnizZrWsk1XmKAds%2BcQu5bAron4a55IVzf90KWS%2Ff%2BFClBHxCjcX49UCTl6wX3ZEFy14WhnfmPdFJVFhqJgAML671fh%2B5AhQYat8Exg9UHg2gEOa%2FxtE0P8Nf2M2SRJIbk8qK2UySioUmbvKIw2ut0K%2Bc%2FaLOxZi9UnTHpubKki94CMihMNKkzcMGOqUBFPyGXY2orJP6mvXz5xtN5Nq8IB65cKKlWmX78f2IsG0AvvqG5T%2Fxpf9N7x2JWkaE09yNr0QmY2xowWOdFzph2rrkJW2rG7KXKpUIULS4%2Btv5LKvu0SnmC%2FV5R0MSWPaHVpEq2GY1VdWs5jDsb%2F%2Bt0MRYyFqL56eRYujkR2LPutCh7m7cA66dVSKoYj23KARzB2uLxa05RWkT793EUj%2F2RBYnFBmD&X-Amz-Signature=b702929b098c0006414b24c456c68bf2f3d82b0e3368230173c167127643f304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXADQRR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ92VWn465Q0cDomwFNHDdgOeiGyLW9HB8sz4GoKBYaQIgfhahiHDr%2BBvD9mNzSYxD8DEorJhfZz31RxTHpAPe86EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTdgW%2FaY2nIMBZPCCrcA6o7UmHV%2B2f1zb5XGYXQBsDTbLAxGupBDYPvICJw2zhWjqZ4wNEPDLkwqdtv5Q7XNgZpUzcOHSWthD02r3%2BSY%2FPh2jCd7iYPlUbkINzKXyxg0pDZPKFb92HrtzeEp5KRLH85EQEWJvd9FAhgiJOQ%2Fs9BaZqCbOC3iIBSQgb9VnIFt%2BlKuACFjdy2yrmn5%2Fy267psvQfNzJj1RNWMK0957RGi3ZP3k8lIPiNrsW3cNv7PNOuauG%2BFfpTIOj2fgCKIx6VyZb6nKgtEPKHqpXbJYD2s1aiFLeS%2FOQYYknzxUiIU9%2Bf08XcosyxTN%2FBd1v2Aj4frzjjNsn5PxrC7Gh7WsH3LUGAiB%2ByYlLxxU4MMuFEeOpRAhqGaL%2B%2F2EcRqNj4XZf9ZFrFkhduL0XIqMDhmKcTfaMuAGoFGDPAKf1H%2BhjKWkMTfAb7Xj35H%2FucEYITQ2ywXIJZl57KLnizZrWsk1XmKAds%2BcQu5bAron4a55IVzf90KWS%2Ff%2BFClBHxCjcX49UCTl6wX3ZEFy14WhnfmPdFJVFhqJgAML671fh%2B5AhQYat8Exg9UHg2gEOa%2FxtE0P8Nf2M2SRJIbk8qK2UySioUmbvKIw2ut0K%2Bc%2FaLOxZi9UnTHpubKki94CMihMNKkzcMGOqUBFPyGXY2orJP6mvXz5xtN5Nq8IB65cKKlWmX78f2IsG0AvvqG5T%2Fxpf9N7x2JWkaE09yNr0QmY2xowWOdFzph2rrkJW2rG7KXKpUIULS4%2Btv5LKvu0SnmC%2FV5R0MSWPaHVpEq2GY1VdWs5jDsb%2F%2Bt0MRYyFqL56eRYujkR2LPutCh7m7cA66dVSKoYj23KARzB2uLxa05RWkT793EUj%2F2RBYnFBmD&X-Amz-Signature=efe8c940fc923cbd97f92938e4f183dbd4ad9a0311eb02cea67e90c7709e4992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXADQRR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ92VWn465Q0cDomwFNHDdgOeiGyLW9HB8sz4GoKBYaQIgfhahiHDr%2BBvD9mNzSYxD8DEorJhfZz31RxTHpAPe86EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTdgW%2FaY2nIMBZPCCrcA6o7UmHV%2B2f1zb5XGYXQBsDTbLAxGupBDYPvICJw2zhWjqZ4wNEPDLkwqdtv5Q7XNgZpUzcOHSWthD02r3%2BSY%2FPh2jCd7iYPlUbkINzKXyxg0pDZPKFb92HrtzeEp5KRLH85EQEWJvd9FAhgiJOQ%2Fs9BaZqCbOC3iIBSQgb9VnIFt%2BlKuACFjdy2yrmn5%2Fy267psvQfNzJj1RNWMK0957RGi3ZP3k8lIPiNrsW3cNv7PNOuauG%2BFfpTIOj2fgCKIx6VyZb6nKgtEPKHqpXbJYD2s1aiFLeS%2FOQYYknzxUiIU9%2Bf08XcosyxTN%2FBd1v2Aj4frzjjNsn5PxrC7Gh7WsH3LUGAiB%2ByYlLxxU4MMuFEeOpRAhqGaL%2B%2F2EcRqNj4XZf9ZFrFkhduL0XIqMDhmKcTfaMuAGoFGDPAKf1H%2BhjKWkMTfAb7Xj35H%2FucEYITQ2ywXIJZl57KLnizZrWsk1XmKAds%2BcQu5bAron4a55IVzf90KWS%2Ff%2BFClBHxCjcX49UCTl6wX3ZEFy14WhnfmPdFJVFhqJgAML671fh%2B5AhQYat8Exg9UHg2gEOa%2FxtE0P8Nf2M2SRJIbk8qK2UySioUmbvKIw2ut0K%2Bc%2FaLOxZi9UnTHpubKki94CMihMNKkzcMGOqUBFPyGXY2orJP6mvXz5xtN5Nq8IB65cKKlWmX78f2IsG0AvvqG5T%2Fxpf9N7x2JWkaE09yNr0QmY2xowWOdFzph2rrkJW2rG7KXKpUIULS4%2Btv5LKvu0SnmC%2FV5R0MSWPaHVpEq2GY1VdWs5jDsb%2F%2Bt0MRYyFqL56eRYujkR2LPutCh7m7cA66dVSKoYj23KARzB2uLxa05RWkT793EUj%2F2RBYnFBmD&X-Amz-Signature=398a9e95f009357e57ce62be46179170fadd169d9c7dfa2814ad8aade2582918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXADQRR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ92VWn465Q0cDomwFNHDdgOeiGyLW9HB8sz4GoKBYaQIgfhahiHDr%2BBvD9mNzSYxD8DEorJhfZz31RxTHpAPe86EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTdgW%2FaY2nIMBZPCCrcA6o7UmHV%2B2f1zb5XGYXQBsDTbLAxGupBDYPvICJw2zhWjqZ4wNEPDLkwqdtv5Q7XNgZpUzcOHSWthD02r3%2BSY%2FPh2jCd7iYPlUbkINzKXyxg0pDZPKFb92HrtzeEp5KRLH85EQEWJvd9FAhgiJOQ%2Fs9BaZqCbOC3iIBSQgb9VnIFt%2BlKuACFjdy2yrmn5%2Fy267psvQfNzJj1RNWMK0957RGi3ZP3k8lIPiNrsW3cNv7PNOuauG%2BFfpTIOj2fgCKIx6VyZb6nKgtEPKHqpXbJYD2s1aiFLeS%2FOQYYknzxUiIU9%2Bf08XcosyxTN%2FBd1v2Aj4frzjjNsn5PxrC7Gh7WsH3LUGAiB%2ByYlLxxU4MMuFEeOpRAhqGaL%2B%2F2EcRqNj4XZf9ZFrFkhduL0XIqMDhmKcTfaMuAGoFGDPAKf1H%2BhjKWkMTfAb7Xj35H%2FucEYITQ2ywXIJZl57KLnizZrWsk1XmKAds%2BcQu5bAron4a55IVzf90KWS%2Ff%2BFClBHxCjcX49UCTl6wX3ZEFy14WhnfmPdFJVFhqJgAML671fh%2B5AhQYat8Exg9UHg2gEOa%2FxtE0P8Nf2M2SRJIbk8qK2UySioUmbvKIw2ut0K%2Bc%2FaLOxZi9UnTHpubKki94CMihMNKkzcMGOqUBFPyGXY2orJP6mvXz5xtN5Nq8IB65cKKlWmX78f2IsG0AvvqG5T%2Fxpf9N7x2JWkaE09yNr0QmY2xowWOdFzph2rrkJW2rG7KXKpUIULS4%2Btv5LKvu0SnmC%2FV5R0MSWPaHVpEq2GY1VdWs5jDsb%2F%2Bt0MRYyFqL56eRYujkR2LPutCh7m7cA66dVSKoYj23KARzB2uLxa05RWkT793EUj%2F2RBYnFBmD&X-Amz-Signature=ab43433bc87b8f0db37eb14a507a9f3aa34211f51350830ecf445ff61e0ba059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXADQRR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ92VWn465Q0cDomwFNHDdgOeiGyLW9HB8sz4GoKBYaQIgfhahiHDr%2BBvD9mNzSYxD8DEorJhfZz31RxTHpAPe86EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTdgW%2FaY2nIMBZPCCrcA6o7UmHV%2B2f1zb5XGYXQBsDTbLAxGupBDYPvICJw2zhWjqZ4wNEPDLkwqdtv5Q7XNgZpUzcOHSWthD02r3%2BSY%2FPh2jCd7iYPlUbkINzKXyxg0pDZPKFb92HrtzeEp5KRLH85EQEWJvd9FAhgiJOQ%2Fs9BaZqCbOC3iIBSQgb9VnIFt%2BlKuACFjdy2yrmn5%2Fy267psvQfNzJj1RNWMK0957RGi3ZP3k8lIPiNrsW3cNv7PNOuauG%2BFfpTIOj2fgCKIx6VyZb6nKgtEPKHqpXbJYD2s1aiFLeS%2FOQYYknzxUiIU9%2Bf08XcosyxTN%2FBd1v2Aj4frzjjNsn5PxrC7Gh7WsH3LUGAiB%2ByYlLxxU4MMuFEeOpRAhqGaL%2B%2F2EcRqNj4XZf9ZFrFkhduL0XIqMDhmKcTfaMuAGoFGDPAKf1H%2BhjKWkMTfAb7Xj35H%2FucEYITQ2ywXIJZl57KLnizZrWsk1XmKAds%2BcQu5bAron4a55IVzf90KWS%2Ff%2BFClBHxCjcX49UCTl6wX3ZEFy14WhnfmPdFJVFhqJgAML671fh%2B5AhQYat8Exg9UHg2gEOa%2FxtE0P8Nf2M2SRJIbk8qK2UySioUmbvKIw2ut0K%2Bc%2FaLOxZi9UnTHpubKki94CMihMNKkzcMGOqUBFPyGXY2orJP6mvXz5xtN5Nq8IB65cKKlWmX78f2IsG0AvvqG5T%2Fxpf9N7x2JWkaE09yNr0QmY2xowWOdFzph2rrkJW2rG7KXKpUIULS4%2Btv5LKvu0SnmC%2FV5R0MSWPaHVpEq2GY1VdWs5jDsb%2F%2Bt0MRYyFqL56eRYujkR2LPutCh7m7cA66dVSKoYj23KARzB2uLxa05RWkT793EUj%2F2RBYnFBmD&X-Amz-Signature=8ef4d3cb755a93dece4985838066fd9da5c9a9ccd6a44f6d1fe2b28a621329a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXADQRR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ92VWn465Q0cDomwFNHDdgOeiGyLW9HB8sz4GoKBYaQIgfhahiHDr%2BBvD9mNzSYxD8DEorJhfZz31RxTHpAPe86EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTdgW%2FaY2nIMBZPCCrcA6o7UmHV%2B2f1zb5XGYXQBsDTbLAxGupBDYPvICJw2zhWjqZ4wNEPDLkwqdtv5Q7XNgZpUzcOHSWthD02r3%2BSY%2FPh2jCd7iYPlUbkINzKXyxg0pDZPKFb92HrtzeEp5KRLH85EQEWJvd9FAhgiJOQ%2Fs9BaZqCbOC3iIBSQgb9VnIFt%2BlKuACFjdy2yrmn5%2Fy267psvQfNzJj1RNWMK0957RGi3ZP3k8lIPiNrsW3cNv7PNOuauG%2BFfpTIOj2fgCKIx6VyZb6nKgtEPKHqpXbJYD2s1aiFLeS%2FOQYYknzxUiIU9%2Bf08XcosyxTN%2FBd1v2Aj4frzjjNsn5PxrC7Gh7WsH3LUGAiB%2ByYlLxxU4MMuFEeOpRAhqGaL%2B%2F2EcRqNj4XZf9ZFrFkhduL0XIqMDhmKcTfaMuAGoFGDPAKf1H%2BhjKWkMTfAb7Xj35H%2FucEYITQ2ywXIJZl57KLnizZrWsk1XmKAds%2BcQu5bAron4a55IVzf90KWS%2Ff%2BFClBHxCjcX49UCTl6wX3ZEFy14WhnfmPdFJVFhqJgAML671fh%2B5AhQYat8Exg9UHg2gEOa%2FxtE0P8Nf2M2SRJIbk8qK2UySioUmbvKIw2ut0K%2Bc%2FaLOxZi9UnTHpubKki94CMihMNKkzcMGOqUBFPyGXY2orJP6mvXz5xtN5Nq8IB65cKKlWmX78f2IsG0AvvqG5T%2Fxpf9N7x2JWkaE09yNr0QmY2xowWOdFzph2rrkJW2rG7KXKpUIULS4%2Btv5LKvu0SnmC%2FV5R0MSWPaHVpEq2GY1VdWs5jDsb%2F%2Bt0MRYyFqL56eRYujkR2LPutCh7m7cA66dVSKoYj23KARzB2uLxa05RWkT793EUj%2F2RBYnFBmD&X-Amz-Signature=68566a507afd5898faea5abbf01ab6a9a2f13bdc2f43bdbf833580f9dc01032b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXADQRR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ92VWn465Q0cDomwFNHDdgOeiGyLW9HB8sz4GoKBYaQIgfhahiHDr%2BBvD9mNzSYxD8DEorJhfZz31RxTHpAPe86EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTdgW%2FaY2nIMBZPCCrcA6o7UmHV%2B2f1zb5XGYXQBsDTbLAxGupBDYPvICJw2zhWjqZ4wNEPDLkwqdtv5Q7XNgZpUzcOHSWthD02r3%2BSY%2FPh2jCd7iYPlUbkINzKXyxg0pDZPKFb92HrtzeEp5KRLH85EQEWJvd9FAhgiJOQ%2Fs9BaZqCbOC3iIBSQgb9VnIFt%2BlKuACFjdy2yrmn5%2Fy267psvQfNzJj1RNWMK0957RGi3ZP3k8lIPiNrsW3cNv7PNOuauG%2BFfpTIOj2fgCKIx6VyZb6nKgtEPKHqpXbJYD2s1aiFLeS%2FOQYYknzxUiIU9%2Bf08XcosyxTN%2FBd1v2Aj4frzjjNsn5PxrC7Gh7WsH3LUGAiB%2ByYlLxxU4MMuFEeOpRAhqGaL%2B%2F2EcRqNj4XZf9ZFrFkhduL0XIqMDhmKcTfaMuAGoFGDPAKf1H%2BhjKWkMTfAb7Xj35H%2FucEYITQ2ywXIJZl57KLnizZrWsk1XmKAds%2BcQu5bAron4a55IVzf90KWS%2Ff%2BFClBHxCjcX49UCTl6wX3ZEFy14WhnfmPdFJVFhqJgAML671fh%2B5AhQYat8Exg9UHg2gEOa%2FxtE0P8Nf2M2SRJIbk8qK2UySioUmbvKIw2ut0K%2Bc%2FaLOxZi9UnTHpubKki94CMihMNKkzcMGOqUBFPyGXY2orJP6mvXz5xtN5Nq8IB65cKKlWmX78f2IsG0AvvqG5T%2Fxpf9N7x2JWkaE09yNr0QmY2xowWOdFzph2rrkJW2rG7KXKpUIULS4%2Btv5LKvu0SnmC%2FV5R0MSWPaHVpEq2GY1VdWs5jDsb%2F%2Bt0MRYyFqL56eRYujkR2LPutCh7m7cA66dVSKoYj23KARzB2uLxa05RWkT793EUj%2F2RBYnFBmD&X-Amz-Signature=20faad8480e2599a6d8e8cd735275d2b0072e6fb5fe33114f49c1bd96af72b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
