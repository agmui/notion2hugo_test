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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M67VUXN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCdfhUW7YJsni%2BIwLFMBUu69VPZK3PXJBuwIJVcw5jOIwIhAKP3HLzwo%2Ba3sBxdqKVemaoO75XtBUmYQiy3BJ7%2F9KHSKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydZQutYO%2BLlbMUXicq3AP756rc8Sxwhl1k1HDOKnBD7fqsotDJj5SXl%2F3UCKZtN7gmamRqB05Liydz7dcCM4nxLogXjSnDUSmXnzHGBc5PJiJXpFpHSaTq8GUqfBR3f5l%2F7o9Tj6%2Bu0sMtDxb8TZrmsuZtpStZzwZeB%2Fmfe8P2p%2BmKgHYWpjKxZjwSBFdXRR19zhncfsvwFewUE9LOdwChh7KUCbh264Kurm777blLpgMOEvO8nH2SsnniMjWollL8Y8SxNkoUvxhu2zz5L6PfWaJeb7m5MUl3V2i6Ic8hB04i42CTjrgQdZz58m9qbA%2BJ6HSEaKsw902aPWP798B7bqs2AIYN%2FiK74ISK9BNQz7ANumI9%2F%2BwIxL6mA7jnPT%2F0JGBo1njq2iV2OflajH0K6cR00TgdV6BCflvipG%2BAFXnehOdDi5RnLgc%2Bq1KKuJMRUdvfaAzUR07D7ynmIYatTEnPRCczK7FbG31WWLTkUBt9eBy8swDp8k8GJna6MGJ8%2BUCTvYMVq89Ed50WUyte%2Br5ysjIWa2Ks5zyO3qiBqtd10iDSYtDo7xnu7KI8p%2BAGlqlppvVH9ZtaTaTCMBHhcEy031zchz%2BK3niIFz9MjBUT5ynzcek4az840sr%2BiaVpZyqHbrTPW8MTdTD8n9vEBjqkAVxHCktzu28HYI3gfuKj8YSGYvAH9ABF5rWtrqDCZ0xCB8AlvPnxM8FkIgsLEjtnLv6iM2Zzp44SaROKdOuJA92RaOv4KGH1GOcKgOv05tiJnwqcocB3J4v4vadQYsJ1VHDy353%2BoJKkQA%2BheFneBNpZwydTIBk8DTq3ESMIwi02pUFK4mcjukgAA39PgbiSZIap9mRtN47aRYyMI%2BqxzZYm5R5r&X-Amz-Signature=f1b255de9ec88d9a2829753a075467b7a3d27fc0a8f7458a78430fcc568958d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M67VUXN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCdfhUW7YJsni%2BIwLFMBUu69VPZK3PXJBuwIJVcw5jOIwIhAKP3HLzwo%2Ba3sBxdqKVemaoO75XtBUmYQiy3BJ7%2F9KHSKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydZQutYO%2BLlbMUXicq3AP756rc8Sxwhl1k1HDOKnBD7fqsotDJj5SXl%2F3UCKZtN7gmamRqB05Liydz7dcCM4nxLogXjSnDUSmXnzHGBc5PJiJXpFpHSaTq8GUqfBR3f5l%2F7o9Tj6%2Bu0sMtDxb8TZrmsuZtpStZzwZeB%2Fmfe8P2p%2BmKgHYWpjKxZjwSBFdXRR19zhncfsvwFewUE9LOdwChh7KUCbh264Kurm777blLpgMOEvO8nH2SsnniMjWollL8Y8SxNkoUvxhu2zz5L6PfWaJeb7m5MUl3V2i6Ic8hB04i42CTjrgQdZz58m9qbA%2BJ6HSEaKsw902aPWP798B7bqs2AIYN%2FiK74ISK9BNQz7ANumI9%2F%2BwIxL6mA7jnPT%2F0JGBo1njq2iV2OflajH0K6cR00TgdV6BCflvipG%2BAFXnehOdDi5RnLgc%2Bq1KKuJMRUdvfaAzUR07D7ynmIYatTEnPRCczK7FbG31WWLTkUBt9eBy8swDp8k8GJna6MGJ8%2BUCTvYMVq89Ed50WUyte%2Br5ysjIWa2Ks5zyO3qiBqtd10iDSYtDo7xnu7KI8p%2BAGlqlppvVH9ZtaTaTCMBHhcEy031zchz%2BK3niIFz9MjBUT5ynzcek4az840sr%2BiaVpZyqHbrTPW8MTdTD8n9vEBjqkAVxHCktzu28HYI3gfuKj8YSGYvAH9ABF5rWtrqDCZ0xCB8AlvPnxM8FkIgsLEjtnLv6iM2Zzp44SaROKdOuJA92RaOv4KGH1GOcKgOv05tiJnwqcocB3J4v4vadQYsJ1VHDy353%2BoJKkQA%2BheFneBNpZwydTIBk8DTq3ESMIwi02pUFK4mcjukgAA39PgbiSZIap9mRtN47aRYyMI%2BqxzZYm5R5r&X-Amz-Signature=005c800c13492acaf1d6f43549e8087626204a22b4619be8df17363ad2f289d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M67VUXN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCdfhUW7YJsni%2BIwLFMBUu69VPZK3PXJBuwIJVcw5jOIwIhAKP3HLzwo%2Ba3sBxdqKVemaoO75XtBUmYQiy3BJ7%2F9KHSKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydZQutYO%2BLlbMUXicq3AP756rc8Sxwhl1k1HDOKnBD7fqsotDJj5SXl%2F3UCKZtN7gmamRqB05Liydz7dcCM4nxLogXjSnDUSmXnzHGBc5PJiJXpFpHSaTq8GUqfBR3f5l%2F7o9Tj6%2Bu0sMtDxb8TZrmsuZtpStZzwZeB%2Fmfe8P2p%2BmKgHYWpjKxZjwSBFdXRR19zhncfsvwFewUE9LOdwChh7KUCbh264Kurm777blLpgMOEvO8nH2SsnniMjWollL8Y8SxNkoUvxhu2zz5L6PfWaJeb7m5MUl3V2i6Ic8hB04i42CTjrgQdZz58m9qbA%2BJ6HSEaKsw902aPWP798B7bqs2AIYN%2FiK74ISK9BNQz7ANumI9%2F%2BwIxL6mA7jnPT%2F0JGBo1njq2iV2OflajH0K6cR00TgdV6BCflvipG%2BAFXnehOdDi5RnLgc%2Bq1KKuJMRUdvfaAzUR07D7ynmIYatTEnPRCczK7FbG31WWLTkUBt9eBy8swDp8k8GJna6MGJ8%2BUCTvYMVq89Ed50WUyte%2Br5ysjIWa2Ks5zyO3qiBqtd10iDSYtDo7xnu7KI8p%2BAGlqlppvVH9ZtaTaTCMBHhcEy031zchz%2BK3niIFz9MjBUT5ynzcek4az840sr%2BiaVpZyqHbrTPW8MTdTD8n9vEBjqkAVxHCktzu28HYI3gfuKj8YSGYvAH9ABF5rWtrqDCZ0xCB8AlvPnxM8FkIgsLEjtnLv6iM2Zzp44SaROKdOuJA92RaOv4KGH1GOcKgOv05tiJnwqcocB3J4v4vadQYsJ1VHDy353%2BoJKkQA%2BheFneBNpZwydTIBk8DTq3ESMIwi02pUFK4mcjukgAA39PgbiSZIap9mRtN47aRYyMI%2BqxzZYm5R5r&X-Amz-Signature=8cf57a95d50a1741a7b9bc4fb0ef994bfd941a8adfed9e74c12612a540058a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M67VUXN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCdfhUW7YJsni%2BIwLFMBUu69VPZK3PXJBuwIJVcw5jOIwIhAKP3HLzwo%2Ba3sBxdqKVemaoO75XtBUmYQiy3BJ7%2F9KHSKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydZQutYO%2BLlbMUXicq3AP756rc8Sxwhl1k1HDOKnBD7fqsotDJj5SXl%2F3UCKZtN7gmamRqB05Liydz7dcCM4nxLogXjSnDUSmXnzHGBc5PJiJXpFpHSaTq8GUqfBR3f5l%2F7o9Tj6%2Bu0sMtDxb8TZrmsuZtpStZzwZeB%2Fmfe8P2p%2BmKgHYWpjKxZjwSBFdXRR19zhncfsvwFewUE9LOdwChh7KUCbh264Kurm777blLpgMOEvO8nH2SsnniMjWollL8Y8SxNkoUvxhu2zz5L6PfWaJeb7m5MUl3V2i6Ic8hB04i42CTjrgQdZz58m9qbA%2BJ6HSEaKsw902aPWP798B7bqs2AIYN%2FiK74ISK9BNQz7ANumI9%2F%2BwIxL6mA7jnPT%2F0JGBo1njq2iV2OflajH0K6cR00TgdV6BCflvipG%2BAFXnehOdDi5RnLgc%2Bq1KKuJMRUdvfaAzUR07D7ynmIYatTEnPRCczK7FbG31WWLTkUBt9eBy8swDp8k8GJna6MGJ8%2BUCTvYMVq89Ed50WUyte%2Br5ysjIWa2Ks5zyO3qiBqtd10iDSYtDo7xnu7KI8p%2BAGlqlppvVH9ZtaTaTCMBHhcEy031zchz%2BK3niIFz9MjBUT5ynzcek4az840sr%2BiaVpZyqHbrTPW8MTdTD8n9vEBjqkAVxHCktzu28HYI3gfuKj8YSGYvAH9ABF5rWtrqDCZ0xCB8AlvPnxM8FkIgsLEjtnLv6iM2Zzp44SaROKdOuJA92RaOv4KGH1GOcKgOv05tiJnwqcocB3J4v4vadQYsJ1VHDy353%2BoJKkQA%2BheFneBNpZwydTIBk8DTq3ESMIwi02pUFK4mcjukgAA39PgbiSZIap9mRtN47aRYyMI%2BqxzZYm5R5r&X-Amz-Signature=24c383944fc2d67365b5ddcdb8ceba007cb51c90b63ff0210e76b06992e3f47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M67VUXN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCdfhUW7YJsni%2BIwLFMBUu69VPZK3PXJBuwIJVcw5jOIwIhAKP3HLzwo%2Ba3sBxdqKVemaoO75XtBUmYQiy3BJ7%2F9KHSKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydZQutYO%2BLlbMUXicq3AP756rc8Sxwhl1k1HDOKnBD7fqsotDJj5SXl%2F3UCKZtN7gmamRqB05Liydz7dcCM4nxLogXjSnDUSmXnzHGBc5PJiJXpFpHSaTq8GUqfBR3f5l%2F7o9Tj6%2Bu0sMtDxb8TZrmsuZtpStZzwZeB%2Fmfe8P2p%2BmKgHYWpjKxZjwSBFdXRR19zhncfsvwFewUE9LOdwChh7KUCbh264Kurm777blLpgMOEvO8nH2SsnniMjWollL8Y8SxNkoUvxhu2zz5L6PfWaJeb7m5MUl3V2i6Ic8hB04i42CTjrgQdZz58m9qbA%2BJ6HSEaKsw902aPWP798B7bqs2AIYN%2FiK74ISK9BNQz7ANumI9%2F%2BwIxL6mA7jnPT%2F0JGBo1njq2iV2OflajH0K6cR00TgdV6BCflvipG%2BAFXnehOdDi5RnLgc%2Bq1KKuJMRUdvfaAzUR07D7ynmIYatTEnPRCczK7FbG31WWLTkUBt9eBy8swDp8k8GJna6MGJ8%2BUCTvYMVq89Ed50WUyte%2Br5ysjIWa2Ks5zyO3qiBqtd10iDSYtDo7xnu7KI8p%2BAGlqlppvVH9ZtaTaTCMBHhcEy031zchz%2BK3niIFz9MjBUT5ynzcek4az840sr%2BiaVpZyqHbrTPW8MTdTD8n9vEBjqkAVxHCktzu28HYI3gfuKj8YSGYvAH9ABF5rWtrqDCZ0xCB8AlvPnxM8FkIgsLEjtnLv6iM2Zzp44SaROKdOuJA92RaOv4KGH1GOcKgOv05tiJnwqcocB3J4v4vadQYsJ1VHDy353%2BoJKkQA%2BheFneBNpZwydTIBk8DTq3ESMIwi02pUFK4mcjukgAA39PgbiSZIap9mRtN47aRYyMI%2BqxzZYm5R5r&X-Amz-Signature=37b7689ed861c5716929c70b5b03d45d435d399c10fceb7ea6c130f8bf06364d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M67VUXN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCdfhUW7YJsni%2BIwLFMBUu69VPZK3PXJBuwIJVcw5jOIwIhAKP3HLzwo%2Ba3sBxdqKVemaoO75XtBUmYQiy3BJ7%2F9KHSKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydZQutYO%2BLlbMUXicq3AP756rc8Sxwhl1k1HDOKnBD7fqsotDJj5SXl%2F3UCKZtN7gmamRqB05Liydz7dcCM4nxLogXjSnDUSmXnzHGBc5PJiJXpFpHSaTq8GUqfBR3f5l%2F7o9Tj6%2Bu0sMtDxb8TZrmsuZtpStZzwZeB%2Fmfe8P2p%2BmKgHYWpjKxZjwSBFdXRR19zhncfsvwFewUE9LOdwChh7KUCbh264Kurm777blLpgMOEvO8nH2SsnniMjWollL8Y8SxNkoUvxhu2zz5L6PfWaJeb7m5MUl3V2i6Ic8hB04i42CTjrgQdZz58m9qbA%2BJ6HSEaKsw902aPWP798B7bqs2AIYN%2FiK74ISK9BNQz7ANumI9%2F%2BwIxL6mA7jnPT%2F0JGBo1njq2iV2OflajH0K6cR00TgdV6BCflvipG%2BAFXnehOdDi5RnLgc%2Bq1KKuJMRUdvfaAzUR07D7ynmIYatTEnPRCczK7FbG31WWLTkUBt9eBy8swDp8k8GJna6MGJ8%2BUCTvYMVq89Ed50WUyte%2Br5ysjIWa2Ks5zyO3qiBqtd10iDSYtDo7xnu7KI8p%2BAGlqlppvVH9ZtaTaTCMBHhcEy031zchz%2BK3niIFz9MjBUT5ynzcek4az840sr%2BiaVpZyqHbrTPW8MTdTD8n9vEBjqkAVxHCktzu28HYI3gfuKj8YSGYvAH9ABF5rWtrqDCZ0xCB8AlvPnxM8FkIgsLEjtnLv6iM2Zzp44SaROKdOuJA92RaOv4KGH1GOcKgOv05tiJnwqcocB3J4v4vadQYsJ1VHDy353%2BoJKkQA%2BheFneBNpZwydTIBk8DTq3ESMIwi02pUFK4mcjukgAA39PgbiSZIap9mRtN47aRYyMI%2BqxzZYm5R5r&X-Amz-Signature=bbf9f64a78ffc16fa9ef3d4046faf55d184d235f41e48ff6c709db502bafc3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M67VUXN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCdfhUW7YJsni%2BIwLFMBUu69VPZK3PXJBuwIJVcw5jOIwIhAKP3HLzwo%2Ba3sBxdqKVemaoO75XtBUmYQiy3BJ7%2F9KHSKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydZQutYO%2BLlbMUXicq3AP756rc8Sxwhl1k1HDOKnBD7fqsotDJj5SXl%2F3UCKZtN7gmamRqB05Liydz7dcCM4nxLogXjSnDUSmXnzHGBc5PJiJXpFpHSaTq8GUqfBR3f5l%2F7o9Tj6%2Bu0sMtDxb8TZrmsuZtpStZzwZeB%2Fmfe8P2p%2BmKgHYWpjKxZjwSBFdXRR19zhncfsvwFewUE9LOdwChh7KUCbh264Kurm777blLpgMOEvO8nH2SsnniMjWollL8Y8SxNkoUvxhu2zz5L6PfWaJeb7m5MUl3V2i6Ic8hB04i42CTjrgQdZz58m9qbA%2BJ6HSEaKsw902aPWP798B7bqs2AIYN%2FiK74ISK9BNQz7ANumI9%2F%2BwIxL6mA7jnPT%2F0JGBo1njq2iV2OflajH0K6cR00TgdV6BCflvipG%2BAFXnehOdDi5RnLgc%2Bq1KKuJMRUdvfaAzUR07D7ynmIYatTEnPRCczK7FbG31WWLTkUBt9eBy8swDp8k8GJna6MGJ8%2BUCTvYMVq89Ed50WUyte%2Br5ysjIWa2Ks5zyO3qiBqtd10iDSYtDo7xnu7KI8p%2BAGlqlppvVH9ZtaTaTCMBHhcEy031zchz%2BK3niIFz9MjBUT5ynzcek4az840sr%2BiaVpZyqHbrTPW8MTdTD8n9vEBjqkAVxHCktzu28HYI3gfuKj8YSGYvAH9ABF5rWtrqDCZ0xCB8AlvPnxM8FkIgsLEjtnLv6iM2Zzp44SaROKdOuJA92RaOv4KGH1GOcKgOv05tiJnwqcocB3J4v4vadQYsJ1VHDy353%2BoJKkQA%2BheFneBNpZwydTIBk8DTq3ESMIwi02pUFK4mcjukgAA39PgbiSZIap9mRtN47aRYyMI%2BqxzZYm5R5r&X-Amz-Signature=93ac5ee5740f22453468828dae03e3ad7ec8273fb54151a0828f43e4c927f9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
