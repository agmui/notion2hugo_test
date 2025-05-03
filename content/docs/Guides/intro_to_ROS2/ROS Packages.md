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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEYB2K2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDIqdVMGchcfMz1F6ksuIQb4g4bfLRlRup5sQnz7%2Fbx9wIhAMO1WREOSJfyWe5ltHJRIPxgq38aDKxPrHAveZCcrVQfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygu9qgvoXZq40Lilsq3AMA7vTnaZxoWJT%2BuSjEWY13%2FSTs6E6EfnpxVI7js0jWueZoQZmhwvky2Yc4jW1QKVIg6HSuItvJNSdWwi%2BNXPO%2BKNOcwnIjKq1yDA%2FJ%2BXu4uZzgjbt%2F5AUxKR5Dm0qPXJPlJWKvOe2azTu3Qb2j4Qx4k5sIZdxRvUNYdtRRa6BMTTyg5F862jtKQyHIPNemVYox7jQeuiB2pA3MpH5Kyh2FWe5xmgv9S%2Bvf73VgWzlueUx8dXnz8cW8LmxGTZOISZRZ2WvdsyWrnsE9YkOm1KehX1B4tAKSM4JDHPt0iE9p7I1vDIlRAdLTkQ5sgNEwvbrCPoszFFlZSpRzTXFU41aX%2FfsZeE89kJ%2BWouhqB43%2B4nCHm3NhE7WwGv2Fu3qHgn8af9r%2BTJXKOF4zBWAJcGJ0fxXC%2FfdCq3hFQuknVCFrEJByjrTg33dWGljt11fAiGPGSSrNYkbUg3V%2BcPubJbSpq4TQXAy9bULu%2Fvulq%2F6NlmNEHJihEg7NhUN8nligQ7iPh5vtgJiSg%2BnkvctgY5MO4p0KXomk5l5Iu4fNBeBtmrJSEWfvayK9ObpOjvy44Id2gNna%2FFjNTw64UkRBouIByFX2%2B813XSaNX2HsCoS3rsEdhm05ua9DjUp4zDC93tfABjqkAeR3r11aUN4WFSC8bUTeEfa4Dqdg%2FiZdjG6harb6o%2BnWF%2FeDj1cww%2FJyc2gb8s58skgXg87vyInuBvwIpueqDdOOmMGchIbVDAfQd1MLIC2cwl81WFVejTNLXq3pu22bUfT9y2XoAP3vaWqOEIrpyLJBpAxXoXAw4ih80g6WxwaBxp3GxYK%2Ffp7tsz%2F9W%2Bzd0cb7w5%2FnvWBAidiNDrUzL55oevLD&X-Amz-Signature=56fcfc8942d47cd30f45f99990340c76ffc9d4bf15140bddf5adf6d18e917ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEYB2K2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDIqdVMGchcfMz1F6ksuIQb4g4bfLRlRup5sQnz7%2Fbx9wIhAMO1WREOSJfyWe5ltHJRIPxgq38aDKxPrHAveZCcrVQfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygu9qgvoXZq40Lilsq3AMA7vTnaZxoWJT%2BuSjEWY13%2FSTs6E6EfnpxVI7js0jWueZoQZmhwvky2Yc4jW1QKVIg6HSuItvJNSdWwi%2BNXPO%2BKNOcwnIjKq1yDA%2FJ%2BXu4uZzgjbt%2F5AUxKR5Dm0qPXJPlJWKvOe2azTu3Qb2j4Qx4k5sIZdxRvUNYdtRRa6BMTTyg5F862jtKQyHIPNemVYox7jQeuiB2pA3MpH5Kyh2FWe5xmgv9S%2Bvf73VgWzlueUx8dXnz8cW8LmxGTZOISZRZ2WvdsyWrnsE9YkOm1KehX1B4tAKSM4JDHPt0iE9p7I1vDIlRAdLTkQ5sgNEwvbrCPoszFFlZSpRzTXFU41aX%2FfsZeE89kJ%2BWouhqB43%2B4nCHm3NhE7WwGv2Fu3qHgn8af9r%2BTJXKOF4zBWAJcGJ0fxXC%2FfdCq3hFQuknVCFrEJByjrTg33dWGljt11fAiGPGSSrNYkbUg3V%2BcPubJbSpq4TQXAy9bULu%2Fvulq%2F6NlmNEHJihEg7NhUN8nligQ7iPh5vtgJiSg%2BnkvctgY5MO4p0KXomk5l5Iu4fNBeBtmrJSEWfvayK9ObpOjvy44Id2gNna%2FFjNTw64UkRBouIByFX2%2B813XSaNX2HsCoS3rsEdhm05ua9DjUp4zDC93tfABjqkAeR3r11aUN4WFSC8bUTeEfa4Dqdg%2FiZdjG6harb6o%2BnWF%2FeDj1cww%2FJyc2gb8s58skgXg87vyInuBvwIpueqDdOOmMGchIbVDAfQd1MLIC2cwl81WFVejTNLXq3pu22bUfT9y2XoAP3vaWqOEIrpyLJBpAxXoXAw4ih80g6WxwaBxp3GxYK%2Ffp7tsz%2F9W%2Bzd0cb7w5%2FnvWBAidiNDrUzL55oevLD&X-Amz-Signature=8970ead9672c770e5f5aa20bb47a3161d0967c31d6a497812bb5fd25268a5b02&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEYB2K2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDIqdVMGchcfMz1F6ksuIQb4g4bfLRlRup5sQnz7%2Fbx9wIhAMO1WREOSJfyWe5ltHJRIPxgq38aDKxPrHAveZCcrVQfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygu9qgvoXZq40Lilsq3AMA7vTnaZxoWJT%2BuSjEWY13%2FSTs6E6EfnpxVI7js0jWueZoQZmhwvky2Yc4jW1QKVIg6HSuItvJNSdWwi%2BNXPO%2BKNOcwnIjKq1yDA%2FJ%2BXu4uZzgjbt%2F5AUxKR5Dm0qPXJPlJWKvOe2azTu3Qb2j4Qx4k5sIZdxRvUNYdtRRa6BMTTyg5F862jtKQyHIPNemVYox7jQeuiB2pA3MpH5Kyh2FWe5xmgv9S%2Bvf73VgWzlueUx8dXnz8cW8LmxGTZOISZRZ2WvdsyWrnsE9YkOm1KehX1B4tAKSM4JDHPt0iE9p7I1vDIlRAdLTkQ5sgNEwvbrCPoszFFlZSpRzTXFU41aX%2FfsZeE89kJ%2BWouhqB43%2B4nCHm3NhE7WwGv2Fu3qHgn8af9r%2BTJXKOF4zBWAJcGJ0fxXC%2FfdCq3hFQuknVCFrEJByjrTg33dWGljt11fAiGPGSSrNYkbUg3V%2BcPubJbSpq4TQXAy9bULu%2Fvulq%2F6NlmNEHJihEg7NhUN8nligQ7iPh5vtgJiSg%2BnkvctgY5MO4p0KXomk5l5Iu4fNBeBtmrJSEWfvayK9ObpOjvy44Id2gNna%2FFjNTw64UkRBouIByFX2%2B813XSaNX2HsCoS3rsEdhm05ua9DjUp4zDC93tfABjqkAeR3r11aUN4WFSC8bUTeEfa4Dqdg%2FiZdjG6harb6o%2BnWF%2FeDj1cww%2FJyc2gb8s58skgXg87vyInuBvwIpueqDdOOmMGchIbVDAfQd1MLIC2cwl81WFVejTNLXq3pu22bUfT9y2XoAP3vaWqOEIrpyLJBpAxXoXAw4ih80g6WxwaBxp3GxYK%2Ffp7tsz%2F9W%2Bzd0cb7w5%2FnvWBAidiNDrUzL55oevLD&X-Amz-Signature=31b676142a3faa6306b053efc8d6fa7d3e1181862dc2e13ff79551534c28634b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEYB2K2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDIqdVMGchcfMz1F6ksuIQb4g4bfLRlRup5sQnz7%2Fbx9wIhAMO1WREOSJfyWe5ltHJRIPxgq38aDKxPrHAveZCcrVQfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygu9qgvoXZq40Lilsq3AMA7vTnaZxoWJT%2BuSjEWY13%2FSTs6E6EfnpxVI7js0jWueZoQZmhwvky2Yc4jW1QKVIg6HSuItvJNSdWwi%2BNXPO%2BKNOcwnIjKq1yDA%2FJ%2BXu4uZzgjbt%2F5AUxKR5Dm0qPXJPlJWKvOe2azTu3Qb2j4Qx4k5sIZdxRvUNYdtRRa6BMTTyg5F862jtKQyHIPNemVYox7jQeuiB2pA3MpH5Kyh2FWe5xmgv9S%2Bvf73VgWzlueUx8dXnz8cW8LmxGTZOISZRZ2WvdsyWrnsE9YkOm1KehX1B4tAKSM4JDHPt0iE9p7I1vDIlRAdLTkQ5sgNEwvbrCPoszFFlZSpRzTXFU41aX%2FfsZeE89kJ%2BWouhqB43%2B4nCHm3NhE7WwGv2Fu3qHgn8af9r%2BTJXKOF4zBWAJcGJ0fxXC%2FfdCq3hFQuknVCFrEJByjrTg33dWGljt11fAiGPGSSrNYkbUg3V%2BcPubJbSpq4TQXAy9bULu%2Fvulq%2F6NlmNEHJihEg7NhUN8nligQ7iPh5vtgJiSg%2BnkvctgY5MO4p0KXomk5l5Iu4fNBeBtmrJSEWfvayK9ObpOjvy44Id2gNna%2FFjNTw64UkRBouIByFX2%2B813XSaNX2HsCoS3rsEdhm05ua9DjUp4zDC93tfABjqkAeR3r11aUN4WFSC8bUTeEfa4Dqdg%2FiZdjG6harb6o%2BnWF%2FeDj1cww%2FJyc2gb8s58skgXg87vyInuBvwIpueqDdOOmMGchIbVDAfQd1MLIC2cwl81WFVejTNLXq3pu22bUfT9y2XoAP3vaWqOEIrpyLJBpAxXoXAw4ih80g6WxwaBxp3GxYK%2Ffp7tsz%2F9W%2Bzd0cb7w5%2FnvWBAidiNDrUzL55oevLD&X-Amz-Signature=f891039bbf1fb5184f995234a44b29290e4d7e1c665e44eec4e31b07b7abfba5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEYB2K2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDIqdVMGchcfMz1F6ksuIQb4g4bfLRlRup5sQnz7%2Fbx9wIhAMO1WREOSJfyWe5ltHJRIPxgq38aDKxPrHAveZCcrVQfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygu9qgvoXZq40Lilsq3AMA7vTnaZxoWJT%2BuSjEWY13%2FSTs6E6EfnpxVI7js0jWueZoQZmhwvky2Yc4jW1QKVIg6HSuItvJNSdWwi%2BNXPO%2BKNOcwnIjKq1yDA%2FJ%2BXu4uZzgjbt%2F5AUxKR5Dm0qPXJPlJWKvOe2azTu3Qb2j4Qx4k5sIZdxRvUNYdtRRa6BMTTyg5F862jtKQyHIPNemVYox7jQeuiB2pA3MpH5Kyh2FWe5xmgv9S%2Bvf73VgWzlueUx8dXnz8cW8LmxGTZOISZRZ2WvdsyWrnsE9YkOm1KehX1B4tAKSM4JDHPt0iE9p7I1vDIlRAdLTkQ5sgNEwvbrCPoszFFlZSpRzTXFU41aX%2FfsZeE89kJ%2BWouhqB43%2B4nCHm3NhE7WwGv2Fu3qHgn8af9r%2BTJXKOF4zBWAJcGJ0fxXC%2FfdCq3hFQuknVCFrEJByjrTg33dWGljt11fAiGPGSSrNYkbUg3V%2BcPubJbSpq4TQXAy9bULu%2Fvulq%2F6NlmNEHJihEg7NhUN8nligQ7iPh5vtgJiSg%2BnkvctgY5MO4p0KXomk5l5Iu4fNBeBtmrJSEWfvayK9ObpOjvy44Id2gNna%2FFjNTw64UkRBouIByFX2%2B813XSaNX2HsCoS3rsEdhm05ua9DjUp4zDC93tfABjqkAeR3r11aUN4WFSC8bUTeEfa4Dqdg%2FiZdjG6harb6o%2BnWF%2FeDj1cww%2FJyc2gb8s58skgXg87vyInuBvwIpueqDdOOmMGchIbVDAfQd1MLIC2cwl81WFVejTNLXq3pu22bUfT9y2XoAP3vaWqOEIrpyLJBpAxXoXAw4ih80g6WxwaBxp3GxYK%2Ffp7tsz%2F9W%2Bzd0cb7w5%2FnvWBAidiNDrUzL55oevLD&X-Amz-Signature=3280c8cfcb762ac77b7659421884778fcd8a7df2834b5420e14aa7748b167b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEYB2K2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDIqdVMGchcfMz1F6ksuIQb4g4bfLRlRup5sQnz7%2Fbx9wIhAMO1WREOSJfyWe5ltHJRIPxgq38aDKxPrHAveZCcrVQfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygu9qgvoXZq40Lilsq3AMA7vTnaZxoWJT%2BuSjEWY13%2FSTs6E6EfnpxVI7js0jWueZoQZmhwvky2Yc4jW1QKVIg6HSuItvJNSdWwi%2BNXPO%2BKNOcwnIjKq1yDA%2FJ%2BXu4uZzgjbt%2F5AUxKR5Dm0qPXJPlJWKvOe2azTu3Qb2j4Qx4k5sIZdxRvUNYdtRRa6BMTTyg5F862jtKQyHIPNemVYox7jQeuiB2pA3MpH5Kyh2FWe5xmgv9S%2Bvf73VgWzlueUx8dXnz8cW8LmxGTZOISZRZ2WvdsyWrnsE9YkOm1KehX1B4tAKSM4JDHPt0iE9p7I1vDIlRAdLTkQ5sgNEwvbrCPoszFFlZSpRzTXFU41aX%2FfsZeE89kJ%2BWouhqB43%2B4nCHm3NhE7WwGv2Fu3qHgn8af9r%2BTJXKOF4zBWAJcGJ0fxXC%2FfdCq3hFQuknVCFrEJByjrTg33dWGljt11fAiGPGSSrNYkbUg3V%2BcPubJbSpq4TQXAy9bULu%2Fvulq%2F6NlmNEHJihEg7NhUN8nligQ7iPh5vtgJiSg%2BnkvctgY5MO4p0KXomk5l5Iu4fNBeBtmrJSEWfvayK9ObpOjvy44Id2gNna%2FFjNTw64UkRBouIByFX2%2B813XSaNX2HsCoS3rsEdhm05ua9DjUp4zDC93tfABjqkAeR3r11aUN4WFSC8bUTeEfa4Dqdg%2FiZdjG6harb6o%2BnWF%2FeDj1cww%2FJyc2gb8s58skgXg87vyInuBvwIpueqDdOOmMGchIbVDAfQd1MLIC2cwl81WFVejTNLXq3pu22bUfT9y2XoAP3vaWqOEIrpyLJBpAxXoXAw4ih80g6WxwaBxp3GxYK%2Ffp7tsz%2F9W%2Bzd0cb7w5%2FnvWBAidiNDrUzL55oevLD&X-Amz-Signature=30b38377400f82e06a65f8d276c6de4f914ea0c31cc178697dd92dccf0df820b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEYB2K2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDIqdVMGchcfMz1F6ksuIQb4g4bfLRlRup5sQnz7%2Fbx9wIhAMO1WREOSJfyWe5ltHJRIPxgq38aDKxPrHAveZCcrVQfKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygu9qgvoXZq40Lilsq3AMA7vTnaZxoWJT%2BuSjEWY13%2FSTs6E6EfnpxVI7js0jWueZoQZmhwvky2Yc4jW1QKVIg6HSuItvJNSdWwi%2BNXPO%2BKNOcwnIjKq1yDA%2FJ%2BXu4uZzgjbt%2F5AUxKR5Dm0qPXJPlJWKvOe2azTu3Qb2j4Qx4k5sIZdxRvUNYdtRRa6BMTTyg5F862jtKQyHIPNemVYox7jQeuiB2pA3MpH5Kyh2FWe5xmgv9S%2Bvf73VgWzlueUx8dXnz8cW8LmxGTZOISZRZ2WvdsyWrnsE9YkOm1KehX1B4tAKSM4JDHPt0iE9p7I1vDIlRAdLTkQ5sgNEwvbrCPoszFFlZSpRzTXFU41aX%2FfsZeE89kJ%2BWouhqB43%2B4nCHm3NhE7WwGv2Fu3qHgn8af9r%2BTJXKOF4zBWAJcGJ0fxXC%2FfdCq3hFQuknVCFrEJByjrTg33dWGljt11fAiGPGSSrNYkbUg3V%2BcPubJbSpq4TQXAy9bULu%2Fvulq%2F6NlmNEHJihEg7NhUN8nligQ7iPh5vtgJiSg%2BnkvctgY5MO4p0KXomk5l5Iu4fNBeBtmrJSEWfvayK9ObpOjvy44Id2gNna%2FFjNTw64UkRBouIByFX2%2B813XSaNX2HsCoS3rsEdhm05ua9DjUp4zDC93tfABjqkAeR3r11aUN4WFSC8bUTeEfa4Dqdg%2FiZdjG6harb6o%2BnWF%2FeDj1cww%2FJyc2gb8s58skgXg87vyInuBvwIpueqDdOOmMGchIbVDAfQd1MLIC2cwl81WFVejTNLXq3pu22bUfT9y2XoAP3vaWqOEIrpyLJBpAxXoXAw4ih80g6WxwaBxp3GxYK%2Ffp7tsz%2F9W%2Bzd0cb7w5%2FnvWBAidiNDrUzL55oevLD&X-Amz-Signature=19783ff9b8ccf5ab50f2cb273929716f40a87207ecf0ad310140fa7086841cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
