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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTBJUTS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDc2NmHheF6HA%2BlhGmXS%2FnJabigyFf06C%2BSmd%2Bjfkz4FwIhALApi5xEx7ll9DafX0wbZX87Ec4cfzFV4gLD%2FWU%2FTQKlKv8DCEIQABoMNjM3NDIzMTgzODA1IgwfsDq6n71E9bKI6Egq3AMMU2d2G0HXmYXMcKJiS42dpdvRcrphnSu9LXYUi2OHpKvmNZu%2FHjzufRn8KjnhNnkVtsRznPMLke3GrvISmfVafL389FmS7GOmC5uP2G4%2FI5vkABFYmfT%2BKGdUa7BAdvvafe84L6WjkkTUlBN1S0Yhd7mNUd7Ok21hxk1m960YEB8%2Bu5xRuz%2FaHdIkHsctXc9kM0aXQ2UEw1RLcPSCDC%2BjX87l5k8qjYqSrDI51F%2BEPVFBa%2BSrNIlzaA2PqQoBwTv6bAzkiamdbm2pgur8fEgvgwtLsf3mokI%2FWEKykEMd9O11N88RckSj6nxdO0YdqYf764LDX4qAwpr9iiNWSuZQuxfCcJt6ZrvirASomtpPUqw9%2FYBfm8q7kfleAsHo6joK3%2BVDQ%2FUVC%2BJfBdhkV%2FhS%2FHHTgPZJyNLqMyuFwE4bX%2BfA%2F5kAjGHteWd3Rz7dJbvBMGEZvaliwhXYq7qEPdFmrh4JbzYsM2QhSS7%2Ft4b8PyD70WiHY0Wb6SKY7cvT9bLK9S0SZY7ziAimxasXosOrWEZ8zwz0cuxonazPqt%2BpDERZ22QPIUDUbgMCNf6YxBAeaXxTM%2F%2BlX2QKvVwg8VYeZSyKMka45%2F3J%2BXQOUSsQmuREP2pFuAxfq1Ba4DCwsdjDBjqkAW6KvhSrSgJGrYRW1HYlzwHUWsd8jbA2SxLCDt87GtigC4rVEUU%2BCAsoM4ixEhTsHvuoZHQznOUS5E4eRWdnpMTTle%2F%2FFEJJov0XCxjVBOwJuZ%2BD%2Bv8PMVqAv%2FsrLDoQma7YkY6GNZxTpyQXd6eGTOS1kDUgErnOuVa3t6Ietj96glI3tgX5U8TfkTHOsmMh4136UmjFr89PlTDKhc1UjWrF7SyA&X-Amz-Signature=7bfd879e5f42468186fa4d96916bab503d9b4a999a2c4ddfd7cc6919ef6bbedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTBJUTS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDc2NmHheF6HA%2BlhGmXS%2FnJabigyFf06C%2BSmd%2Bjfkz4FwIhALApi5xEx7ll9DafX0wbZX87Ec4cfzFV4gLD%2FWU%2FTQKlKv8DCEIQABoMNjM3NDIzMTgzODA1IgwfsDq6n71E9bKI6Egq3AMMU2d2G0HXmYXMcKJiS42dpdvRcrphnSu9LXYUi2OHpKvmNZu%2FHjzufRn8KjnhNnkVtsRznPMLke3GrvISmfVafL389FmS7GOmC5uP2G4%2FI5vkABFYmfT%2BKGdUa7BAdvvafe84L6WjkkTUlBN1S0Yhd7mNUd7Ok21hxk1m960YEB8%2Bu5xRuz%2FaHdIkHsctXc9kM0aXQ2UEw1RLcPSCDC%2BjX87l5k8qjYqSrDI51F%2BEPVFBa%2BSrNIlzaA2PqQoBwTv6bAzkiamdbm2pgur8fEgvgwtLsf3mokI%2FWEKykEMd9O11N88RckSj6nxdO0YdqYf764LDX4qAwpr9iiNWSuZQuxfCcJt6ZrvirASomtpPUqw9%2FYBfm8q7kfleAsHo6joK3%2BVDQ%2FUVC%2BJfBdhkV%2FhS%2FHHTgPZJyNLqMyuFwE4bX%2BfA%2F5kAjGHteWd3Rz7dJbvBMGEZvaliwhXYq7qEPdFmrh4JbzYsM2QhSS7%2Ft4b8PyD70WiHY0Wb6SKY7cvT9bLK9S0SZY7ziAimxasXosOrWEZ8zwz0cuxonazPqt%2BpDERZ22QPIUDUbgMCNf6YxBAeaXxTM%2F%2BlX2QKvVwg8VYeZSyKMka45%2F3J%2BXQOUSsQmuREP2pFuAxfq1Ba4DCwsdjDBjqkAW6KvhSrSgJGrYRW1HYlzwHUWsd8jbA2SxLCDt87GtigC4rVEUU%2BCAsoM4ixEhTsHvuoZHQznOUS5E4eRWdnpMTTle%2F%2FFEJJov0XCxjVBOwJuZ%2BD%2Bv8PMVqAv%2FsrLDoQma7YkY6GNZxTpyQXd6eGTOS1kDUgErnOuVa3t6Ietj96glI3tgX5U8TfkTHOsmMh4136UmjFr89PlTDKhc1UjWrF7SyA&X-Amz-Signature=78fe481768207342e8a719863cc1a0f55ea0ed2e8f5e64f0e6b190c6279b3c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTBJUTS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDc2NmHheF6HA%2BlhGmXS%2FnJabigyFf06C%2BSmd%2Bjfkz4FwIhALApi5xEx7ll9DafX0wbZX87Ec4cfzFV4gLD%2FWU%2FTQKlKv8DCEIQABoMNjM3NDIzMTgzODA1IgwfsDq6n71E9bKI6Egq3AMMU2d2G0HXmYXMcKJiS42dpdvRcrphnSu9LXYUi2OHpKvmNZu%2FHjzufRn8KjnhNnkVtsRznPMLke3GrvISmfVafL389FmS7GOmC5uP2G4%2FI5vkABFYmfT%2BKGdUa7BAdvvafe84L6WjkkTUlBN1S0Yhd7mNUd7Ok21hxk1m960YEB8%2Bu5xRuz%2FaHdIkHsctXc9kM0aXQ2UEw1RLcPSCDC%2BjX87l5k8qjYqSrDI51F%2BEPVFBa%2BSrNIlzaA2PqQoBwTv6bAzkiamdbm2pgur8fEgvgwtLsf3mokI%2FWEKykEMd9O11N88RckSj6nxdO0YdqYf764LDX4qAwpr9iiNWSuZQuxfCcJt6ZrvirASomtpPUqw9%2FYBfm8q7kfleAsHo6joK3%2BVDQ%2FUVC%2BJfBdhkV%2FhS%2FHHTgPZJyNLqMyuFwE4bX%2BfA%2F5kAjGHteWd3Rz7dJbvBMGEZvaliwhXYq7qEPdFmrh4JbzYsM2QhSS7%2Ft4b8PyD70WiHY0Wb6SKY7cvT9bLK9S0SZY7ziAimxasXosOrWEZ8zwz0cuxonazPqt%2BpDERZ22QPIUDUbgMCNf6YxBAeaXxTM%2F%2BlX2QKvVwg8VYeZSyKMka45%2F3J%2BXQOUSsQmuREP2pFuAxfq1Ba4DCwsdjDBjqkAW6KvhSrSgJGrYRW1HYlzwHUWsd8jbA2SxLCDt87GtigC4rVEUU%2BCAsoM4ixEhTsHvuoZHQznOUS5E4eRWdnpMTTle%2F%2FFEJJov0XCxjVBOwJuZ%2BD%2Bv8PMVqAv%2FsrLDoQma7YkY6GNZxTpyQXd6eGTOS1kDUgErnOuVa3t6Ietj96glI3tgX5U8TfkTHOsmMh4136UmjFr89PlTDKhc1UjWrF7SyA&X-Amz-Signature=0be8b5718f026fba0d343dda8e973dbd754e178212acdb77dc8580684e9b2690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTBJUTS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDc2NmHheF6HA%2BlhGmXS%2FnJabigyFf06C%2BSmd%2Bjfkz4FwIhALApi5xEx7ll9DafX0wbZX87Ec4cfzFV4gLD%2FWU%2FTQKlKv8DCEIQABoMNjM3NDIzMTgzODA1IgwfsDq6n71E9bKI6Egq3AMMU2d2G0HXmYXMcKJiS42dpdvRcrphnSu9LXYUi2OHpKvmNZu%2FHjzufRn8KjnhNnkVtsRznPMLke3GrvISmfVafL389FmS7GOmC5uP2G4%2FI5vkABFYmfT%2BKGdUa7BAdvvafe84L6WjkkTUlBN1S0Yhd7mNUd7Ok21hxk1m960YEB8%2Bu5xRuz%2FaHdIkHsctXc9kM0aXQ2UEw1RLcPSCDC%2BjX87l5k8qjYqSrDI51F%2BEPVFBa%2BSrNIlzaA2PqQoBwTv6bAzkiamdbm2pgur8fEgvgwtLsf3mokI%2FWEKykEMd9O11N88RckSj6nxdO0YdqYf764LDX4qAwpr9iiNWSuZQuxfCcJt6ZrvirASomtpPUqw9%2FYBfm8q7kfleAsHo6joK3%2BVDQ%2FUVC%2BJfBdhkV%2FhS%2FHHTgPZJyNLqMyuFwE4bX%2BfA%2F5kAjGHteWd3Rz7dJbvBMGEZvaliwhXYq7qEPdFmrh4JbzYsM2QhSS7%2Ft4b8PyD70WiHY0Wb6SKY7cvT9bLK9S0SZY7ziAimxasXosOrWEZ8zwz0cuxonazPqt%2BpDERZ22QPIUDUbgMCNf6YxBAeaXxTM%2F%2BlX2QKvVwg8VYeZSyKMka45%2F3J%2BXQOUSsQmuREP2pFuAxfq1Ba4DCwsdjDBjqkAW6KvhSrSgJGrYRW1HYlzwHUWsd8jbA2SxLCDt87GtigC4rVEUU%2BCAsoM4ixEhTsHvuoZHQznOUS5E4eRWdnpMTTle%2F%2FFEJJov0XCxjVBOwJuZ%2BD%2Bv8PMVqAv%2FsrLDoQma7YkY6GNZxTpyQXd6eGTOS1kDUgErnOuVa3t6Ietj96glI3tgX5U8TfkTHOsmMh4136UmjFr89PlTDKhc1UjWrF7SyA&X-Amz-Signature=0fcb2fac36c2fe4f37b1f605223a44e16a27d0c766e9c61bbf5cb5bc286572e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTBJUTS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDc2NmHheF6HA%2BlhGmXS%2FnJabigyFf06C%2BSmd%2Bjfkz4FwIhALApi5xEx7ll9DafX0wbZX87Ec4cfzFV4gLD%2FWU%2FTQKlKv8DCEIQABoMNjM3NDIzMTgzODA1IgwfsDq6n71E9bKI6Egq3AMMU2d2G0HXmYXMcKJiS42dpdvRcrphnSu9LXYUi2OHpKvmNZu%2FHjzufRn8KjnhNnkVtsRznPMLke3GrvISmfVafL389FmS7GOmC5uP2G4%2FI5vkABFYmfT%2BKGdUa7BAdvvafe84L6WjkkTUlBN1S0Yhd7mNUd7Ok21hxk1m960YEB8%2Bu5xRuz%2FaHdIkHsctXc9kM0aXQ2UEw1RLcPSCDC%2BjX87l5k8qjYqSrDI51F%2BEPVFBa%2BSrNIlzaA2PqQoBwTv6bAzkiamdbm2pgur8fEgvgwtLsf3mokI%2FWEKykEMd9O11N88RckSj6nxdO0YdqYf764LDX4qAwpr9iiNWSuZQuxfCcJt6ZrvirASomtpPUqw9%2FYBfm8q7kfleAsHo6joK3%2BVDQ%2FUVC%2BJfBdhkV%2FhS%2FHHTgPZJyNLqMyuFwE4bX%2BfA%2F5kAjGHteWd3Rz7dJbvBMGEZvaliwhXYq7qEPdFmrh4JbzYsM2QhSS7%2Ft4b8PyD70WiHY0Wb6SKY7cvT9bLK9S0SZY7ziAimxasXosOrWEZ8zwz0cuxonazPqt%2BpDERZ22QPIUDUbgMCNf6YxBAeaXxTM%2F%2BlX2QKvVwg8VYeZSyKMka45%2F3J%2BXQOUSsQmuREP2pFuAxfq1Ba4DCwsdjDBjqkAW6KvhSrSgJGrYRW1HYlzwHUWsd8jbA2SxLCDt87GtigC4rVEUU%2BCAsoM4ixEhTsHvuoZHQznOUS5E4eRWdnpMTTle%2F%2FFEJJov0XCxjVBOwJuZ%2BD%2Bv8PMVqAv%2FsrLDoQma7YkY6GNZxTpyQXd6eGTOS1kDUgErnOuVa3t6Ietj96glI3tgX5U8TfkTHOsmMh4136UmjFr89PlTDKhc1UjWrF7SyA&X-Amz-Signature=e627e238db6ca81d630c914be03bf391c2e279930d86189e030a15b19e7b84a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTBJUTS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDc2NmHheF6HA%2BlhGmXS%2FnJabigyFf06C%2BSmd%2Bjfkz4FwIhALApi5xEx7ll9DafX0wbZX87Ec4cfzFV4gLD%2FWU%2FTQKlKv8DCEIQABoMNjM3NDIzMTgzODA1IgwfsDq6n71E9bKI6Egq3AMMU2d2G0HXmYXMcKJiS42dpdvRcrphnSu9LXYUi2OHpKvmNZu%2FHjzufRn8KjnhNnkVtsRznPMLke3GrvISmfVafL389FmS7GOmC5uP2G4%2FI5vkABFYmfT%2BKGdUa7BAdvvafe84L6WjkkTUlBN1S0Yhd7mNUd7Ok21hxk1m960YEB8%2Bu5xRuz%2FaHdIkHsctXc9kM0aXQ2UEw1RLcPSCDC%2BjX87l5k8qjYqSrDI51F%2BEPVFBa%2BSrNIlzaA2PqQoBwTv6bAzkiamdbm2pgur8fEgvgwtLsf3mokI%2FWEKykEMd9O11N88RckSj6nxdO0YdqYf764LDX4qAwpr9iiNWSuZQuxfCcJt6ZrvirASomtpPUqw9%2FYBfm8q7kfleAsHo6joK3%2BVDQ%2FUVC%2BJfBdhkV%2FhS%2FHHTgPZJyNLqMyuFwE4bX%2BfA%2F5kAjGHteWd3Rz7dJbvBMGEZvaliwhXYq7qEPdFmrh4JbzYsM2QhSS7%2Ft4b8PyD70WiHY0Wb6SKY7cvT9bLK9S0SZY7ziAimxasXosOrWEZ8zwz0cuxonazPqt%2BpDERZ22QPIUDUbgMCNf6YxBAeaXxTM%2F%2BlX2QKvVwg8VYeZSyKMka45%2F3J%2BXQOUSsQmuREP2pFuAxfq1Ba4DCwsdjDBjqkAW6KvhSrSgJGrYRW1HYlzwHUWsd8jbA2SxLCDt87GtigC4rVEUU%2BCAsoM4ixEhTsHvuoZHQznOUS5E4eRWdnpMTTle%2F%2FFEJJov0XCxjVBOwJuZ%2BD%2Bv8PMVqAv%2FsrLDoQma7YkY6GNZxTpyQXd6eGTOS1kDUgErnOuVa3t6Ietj96glI3tgX5U8TfkTHOsmMh4136UmjFr89PlTDKhc1UjWrF7SyA&X-Amz-Signature=55cd60ed1efaf705e2643776f34b2aa968c7c36811a7a0f831629b99d968aca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTBJUTS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDc2NmHheF6HA%2BlhGmXS%2FnJabigyFf06C%2BSmd%2Bjfkz4FwIhALApi5xEx7ll9DafX0wbZX87Ec4cfzFV4gLD%2FWU%2FTQKlKv8DCEIQABoMNjM3NDIzMTgzODA1IgwfsDq6n71E9bKI6Egq3AMMU2d2G0HXmYXMcKJiS42dpdvRcrphnSu9LXYUi2OHpKvmNZu%2FHjzufRn8KjnhNnkVtsRznPMLke3GrvISmfVafL389FmS7GOmC5uP2G4%2FI5vkABFYmfT%2BKGdUa7BAdvvafe84L6WjkkTUlBN1S0Yhd7mNUd7Ok21hxk1m960YEB8%2Bu5xRuz%2FaHdIkHsctXc9kM0aXQ2UEw1RLcPSCDC%2BjX87l5k8qjYqSrDI51F%2BEPVFBa%2BSrNIlzaA2PqQoBwTv6bAzkiamdbm2pgur8fEgvgwtLsf3mokI%2FWEKykEMd9O11N88RckSj6nxdO0YdqYf764LDX4qAwpr9iiNWSuZQuxfCcJt6ZrvirASomtpPUqw9%2FYBfm8q7kfleAsHo6joK3%2BVDQ%2FUVC%2BJfBdhkV%2FhS%2FHHTgPZJyNLqMyuFwE4bX%2BfA%2F5kAjGHteWd3Rz7dJbvBMGEZvaliwhXYq7qEPdFmrh4JbzYsM2QhSS7%2Ft4b8PyD70WiHY0Wb6SKY7cvT9bLK9S0SZY7ziAimxasXosOrWEZ8zwz0cuxonazPqt%2BpDERZ22QPIUDUbgMCNf6YxBAeaXxTM%2F%2BlX2QKvVwg8VYeZSyKMka45%2F3J%2BXQOUSsQmuREP2pFuAxfq1Ba4DCwsdjDBjqkAW6KvhSrSgJGrYRW1HYlzwHUWsd8jbA2SxLCDt87GtigC4rVEUU%2BCAsoM4ixEhTsHvuoZHQznOUS5E4eRWdnpMTTle%2F%2FFEJJov0XCxjVBOwJuZ%2BD%2Bv8PMVqAv%2FsrLDoQma7YkY6GNZxTpyQXd6eGTOS1kDUgErnOuVa3t6Ietj96glI3tgX5U8TfkTHOsmMh4136UmjFr89PlTDKhc1UjWrF7SyA&X-Amz-Signature=a806776aab4d73aa24d08897a9e2e7f8bbabe1584786c55279f401a1bf509305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
