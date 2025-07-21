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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGXKHOJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb%2BGme%2BgZesoH0AhBlykV%2BcO7K00D14GHLjCoUSW356AIhAOAf6wrBK%2BYpARXcjhaFKkCvc%2FgUu17ro9cwrHDHtO1uKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy80cVY6TO07OI5D2Eq3ANCN1s4rT%2BKX3k3JvdyFK%2B%2FQkinviavZW%2BZ9FtR0hL%2FN1swlw%2FdHYWbN%2BngE4NmHptwK7O6GdI78H8gYsP%2Bd55soekH1gaxlqvGHEPX%2BXrlK%2FhToDWxvYHbw5ZoE%2FKby7XXAiCF4bEJ3CIqKbNAMWnAnOqxGL1HqF6jk11euw8I%2BEByz0u6Q%2FuLzXEbIjcmqzPJdlkTlQFYLCElbXDNNJEFfhnSpUpjyer7kSUc5924fE%2FsPB6giJCLLnDTrzTUpR7fmJXlLWXHG%2BdelNoViKpDkKFSlSdbEWJMzf0AMox7cB8sHk6qFquf3zwlxTAsrl1ughJtay4fusI5B2Ze5fxhf27ynRLfbKcjiDZOQZmiWvHlTiwAbNVYQ279UImMe4CqXQoPUUVXxFdduiNEH5aR18J7ie6eBB4mOj9MroNq5tGtIGwJarBHsqHNKqowkrDJu0b1Fz7%2FiwDTnteLbDgb%2FRmCKUc5o48%2BiNPQko3gRNRpFRj4Rz4IQ9i0BojYJo4xPTy7ARAY0I3i0nfkZEWUyEii6BOlNiQFL9FqAtj4rnZJ95IESexGp8896wmpv5%2BYv6%2F%2BeOj9JdmPwVUV%2BfrvYxPKxIaIRsUvX8sx%2Ffo3uj%2BOyQePMrG53ml9tzDajfjDBjqkAX73RqBnpQx%2FhwL%2Bb3MaZ55Rp6j0NbDn0c1bEwOQ6nm1NuHK2MjZEX1zjzIRqHj0vvoKsYJNnckYHD9oi%2FZ3dRABLMxgwVe3BdiJubphCPVkWq6ieuo1pFKMjyrk%2B0g7nufGwyOM09Rij62rtmBZCZOBZleLEIXHGoTvnKnRT29uos98Ky1L3sWVli388h4JcFqGMoa%2BpkdRkrMN4UPEgSx14Xyv&X-Amz-Signature=6bf4aee5953d2e141d22d3d37b8047193139534cb0e1d7416bd6b424c32f59c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGXKHOJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb%2BGme%2BgZesoH0AhBlykV%2BcO7K00D14GHLjCoUSW356AIhAOAf6wrBK%2BYpARXcjhaFKkCvc%2FgUu17ro9cwrHDHtO1uKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy80cVY6TO07OI5D2Eq3ANCN1s4rT%2BKX3k3JvdyFK%2B%2FQkinviavZW%2BZ9FtR0hL%2FN1swlw%2FdHYWbN%2BngE4NmHptwK7O6GdI78H8gYsP%2Bd55soekH1gaxlqvGHEPX%2BXrlK%2FhToDWxvYHbw5ZoE%2FKby7XXAiCF4bEJ3CIqKbNAMWnAnOqxGL1HqF6jk11euw8I%2BEByz0u6Q%2FuLzXEbIjcmqzPJdlkTlQFYLCElbXDNNJEFfhnSpUpjyer7kSUc5924fE%2FsPB6giJCLLnDTrzTUpR7fmJXlLWXHG%2BdelNoViKpDkKFSlSdbEWJMzf0AMox7cB8sHk6qFquf3zwlxTAsrl1ughJtay4fusI5B2Ze5fxhf27ynRLfbKcjiDZOQZmiWvHlTiwAbNVYQ279UImMe4CqXQoPUUVXxFdduiNEH5aR18J7ie6eBB4mOj9MroNq5tGtIGwJarBHsqHNKqowkrDJu0b1Fz7%2FiwDTnteLbDgb%2FRmCKUc5o48%2BiNPQko3gRNRpFRj4Rz4IQ9i0BojYJo4xPTy7ARAY0I3i0nfkZEWUyEii6BOlNiQFL9FqAtj4rnZJ95IESexGp8896wmpv5%2BYv6%2F%2BeOj9JdmPwVUV%2BfrvYxPKxIaIRsUvX8sx%2Ffo3uj%2BOyQePMrG53ml9tzDajfjDBjqkAX73RqBnpQx%2FhwL%2Bb3MaZ55Rp6j0NbDn0c1bEwOQ6nm1NuHK2MjZEX1zjzIRqHj0vvoKsYJNnckYHD9oi%2FZ3dRABLMxgwVe3BdiJubphCPVkWq6ieuo1pFKMjyrk%2B0g7nufGwyOM09Rij62rtmBZCZOBZleLEIXHGoTvnKnRT29uos98Ky1L3sWVli388h4JcFqGMoa%2BpkdRkrMN4UPEgSx14Xyv&X-Amz-Signature=61ab86b8609dbd9e9742f37a6bde0e653a881d70ba021a57d28f5b7010eb5cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGXKHOJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb%2BGme%2BgZesoH0AhBlykV%2BcO7K00D14GHLjCoUSW356AIhAOAf6wrBK%2BYpARXcjhaFKkCvc%2FgUu17ro9cwrHDHtO1uKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy80cVY6TO07OI5D2Eq3ANCN1s4rT%2BKX3k3JvdyFK%2B%2FQkinviavZW%2BZ9FtR0hL%2FN1swlw%2FdHYWbN%2BngE4NmHptwK7O6GdI78H8gYsP%2Bd55soekH1gaxlqvGHEPX%2BXrlK%2FhToDWxvYHbw5ZoE%2FKby7XXAiCF4bEJ3CIqKbNAMWnAnOqxGL1HqF6jk11euw8I%2BEByz0u6Q%2FuLzXEbIjcmqzPJdlkTlQFYLCElbXDNNJEFfhnSpUpjyer7kSUc5924fE%2FsPB6giJCLLnDTrzTUpR7fmJXlLWXHG%2BdelNoViKpDkKFSlSdbEWJMzf0AMox7cB8sHk6qFquf3zwlxTAsrl1ughJtay4fusI5B2Ze5fxhf27ynRLfbKcjiDZOQZmiWvHlTiwAbNVYQ279UImMe4CqXQoPUUVXxFdduiNEH5aR18J7ie6eBB4mOj9MroNq5tGtIGwJarBHsqHNKqowkrDJu0b1Fz7%2FiwDTnteLbDgb%2FRmCKUc5o48%2BiNPQko3gRNRpFRj4Rz4IQ9i0BojYJo4xPTy7ARAY0I3i0nfkZEWUyEii6BOlNiQFL9FqAtj4rnZJ95IESexGp8896wmpv5%2BYv6%2F%2BeOj9JdmPwVUV%2BfrvYxPKxIaIRsUvX8sx%2Ffo3uj%2BOyQePMrG53ml9tzDajfjDBjqkAX73RqBnpQx%2FhwL%2Bb3MaZ55Rp6j0NbDn0c1bEwOQ6nm1NuHK2MjZEX1zjzIRqHj0vvoKsYJNnckYHD9oi%2FZ3dRABLMxgwVe3BdiJubphCPVkWq6ieuo1pFKMjyrk%2B0g7nufGwyOM09Rij62rtmBZCZOBZleLEIXHGoTvnKnRT29uos98Ky1L3sWVli388h4JcFqGMoa%2BpkdRkrMN4UPEgSx14Xyv&X-Amz-Signature=015080d04a19ba54f8323727922b252095cbd5abc129dcd85cce4ceb50f0f607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGXKHOJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb%2BGme%2BgZesoH0AhBlykV%2BcO7K00D14GHLjCoUSW356AIhAOAf6wrBK%2BYpARXcjhaFKkCvc%2FgUu17ro9cwrHDHtO1uKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy80cVY6TO07OI5D2Eq3ANCN1s4rT%2BKX3k3JvdyFK%2B%2FQkinviavZW%2BZ9FtR0hL%2FN1swlw%2FdHYWbN%2BngE4NmHptwK7O6GdI78H8gYsP%2Bd55soekH1gaxlqvGHEPX%2BXrlK%2FhToDWxvYHbw5ZoE%2FKby7XXAiCF4bEJ3CIqKbNAMWnAnOqxGL1HqF6jk11euw8I%2BEByz0u6Q%2FuLzXEbIjcmqzPJdlkTlQFYLCElbXDNNJEFfhnSpUpjyer7kSUc5924fE%2FsPB6giJCLLnDTrzTUpR7fmJXlLWXHG%2BdelNoViKpDkKFSlSdbEWJMzf0AMox7cB8sHk6qFquf3zwlxTAsrl1ughJtay4fusI5B2Ze5fxhf27ynRLfbKcjiDZOQZmiWvHlTiwAbNVYQ279UImMe4CqXQoPUUVXxFdduiNEH5aR18J7ie6eBB4mOj9MroNq5tGtIGwJarBHsqHNKqowkrDJu0b1Fz7%2FiwDTnteLbDgb%2FRmCKUc5o48%2BiNPQko3gRNRpFRj4Rz4IQ9i0BojYJo4xPTy7ARAY0I3i0nfkZEWUyEii6BOlNiQFL9FqAtj4rnZJ95IESexGp8896wmpv5%2BYv6%2F%2BeOj9JdmPwVUV%2BfrvYxPKxIaIRsUvX8sx%2Ffo3uj%2BOyQePMrG53ml9tzDajfjDBjqkAX73RqBnpQx%2FhwL%2Bb3MaZ55Rp6j0NbDn0c1bEwOQ6nm1NuHK2MjZEX1zjzIRqHj0vvoKsYJNnckYHD9oi%2FZ3dRABLMxgwVe3BdiJubphCPVkWq6ieuo1pFKMjyrk%2B0g7nufGwyOM09Rij62rtmBZCZOBZleLEIXHGoTvnKnRT29uos98Ky1L3sWVli388h4JcFqGMoa%2BpkdRkrMN4UPEgSx14Xyv&X-Amz-Signature=4de005c3ddf57b7fcead1267913b9f8e7aafcae066a29dd9020fd967b35386d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGXKHOJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb%2BGme%2BgZesoH0AhBlykV%2BcO7K00D14GHLjCoUSW356AIhAOAf6wrBK%2BYpARXcjhaFKkCvc%2FgUu17ro9cwrHDHtO1uKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy80cVY6TO07OI5D2Eq3ANCN1s4rT%2BKX3k3JvdyFK%2B%2FQkinviavZW%2BZ9FtR0hL%2FN1swlw%2FdHYWbN%2BngE4NmHptwK7O6GdI78H8gYsP%2Bd55soekH1gaxlqvGHEPX%2BXrlK%2FhToDWxvYHbw5ZoE%2FKby7XXAiCF4bEJ3CIqKbNAMWnAnOqxGL1HqF6jk11euw8I%2BEByz0u6Q%2FuLzXEbIjcmqzPJdlkTlQFYLCElbXDNNJEFfhnSpUpjyer7kSUc5924fE%2FsPB6giJCLLnDTrzTUpR7fmJXlLWXHG%2BdelNoViKpDkKFSlSdbEWJMzf0AMox7cB8sHk6qFquf3zwlxTAsrl1ughJtay4fusI5B2Ze5fxhf27ynRLfbKcjiDZOQZmiWvHlTiwAbNVYQ279UImMe4CqXQoPUUVXxFdduiNEH5aR18J7ie6eBB4mOj9MroNq5tGtIGwJarBHsqHNKqowkrDJu0b1Fz7%2FiwDTnteLbDgb%2FRmCKUc5o48%2BiNPQko3gRNRpFRj4Rz4IQ9i0BojYJo4xPTy7ARAY0I3i0nfkZEWUyEii6BOlNiQFL9FqAtj4rnZJ95IESexGp8896wmpv5%2BYv6%2F%2BeOj9JdmPwVUV%2BfrvYxPKxIaIRsUvX8sx%2Ffo3uj%2BOyQePMrG53ml9tzDajfjDBjqkAX73RqBnpQx%2FhwL%2Bb3MaZ55Rp6j0NbDn0c1bEwOQ6nm1NuHK2MjZEX1zjzIRqHj0vvoKsYJNnckYHD9oi%2FZ3dRABLMxgwVe3BdiJubphCPVkWq6ieuo1pFKMjyrk%2B0g7nufGwyOM09Rij62rtmBZCZOBZleLEIXHGoTvnKnRT29uos98Ky1L3sWVli388h4JcFqGMoa%2BpkdRkrMN4UPEgSx14Xyv&X-Amz-Signature=aa908761105ca54371e14ca4446d84bb3bc3974089c0e01832435510942194b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGXKHOJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb%2BGme%2BgZesoH0AhBlykV%2BcO7K00D14GHLjCoUSW356AIhAOAf6wrBK%2BYpARXcjhaFKkCvc%2FgUu17ro9cwrHDHtO1uKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy80cVY6TO07OI5D2Eq3ANCN1s4rT%2BKX3k3JvdyFK%2B%2FQkinviavZW%2BZ9FtR0hL%2FN1swlw%2FdHYWbN%2BngE4NmHptwK7O6GdI78H8gYsP%2Bd55soekH1gaxlqvGHEPX%2BXrlK%2FhToDWxvYHbw5ZoE%2FKby7XXAiCF4bEJ3CIqKbNAMWnAnOqxGL1HqF6jk11euw8I%2BEByz0u6Q%2FuLzXEbIjcmqzPJdlkTlQFYLCElbXDNNJEFfhnSpUpjyer7kSUc5924fE%2FsPB6giJCLLnDTrzTUpR7fmJXlLWXHG%2BdelNoViKpDkKFSlSdbEWJMzf0AMox7cB8sHk6qFquf3zwlxTAsrl1ughJtay4fusI5B2Ze5fxhf27ynRLfbKcjiDZOQZmiWvHlTiwAbNVYQ279UImMe4CqXQoPUUVXxFdduiNEH5aR18J7ie6eBB4mOj9MroNq5tGtIGwJarBHsqHNKqowkrDJu0b1Fz7%2FiwDTnteLbDgb%2FRmCKUc5o48%2BiNPQko3gRNRpFRj4Rz4IQ9i0BojYJo4xPTy7ARAY0I3i0nfkZEWUyEii6BOlNiQFL9FqAtj4rnZJ95IESexGp8896wmpv5%2BYv6%2F%2BeOj9JdmPwVUV%2BfrvYxPKxIaIRsUvX8sx%2Ffo3uj%2BOyQePMrG53ml9tzDajfjDBjqkAX73RqBnpQx%2FhwL%2Bb3MaZ55Rp6j0NbDn0c1bEwOQ6nm1NuHK2MjZEX1zjzIRqHj0vvoKsYJNnckYHD9oi%2FZ3dRABLMxgwVe3BdiJubphCPVkWq6ieuo1pFKMjyrk%2B0g7nufGwyOM09Rij62rtmBZCZOBZleLEIXHGoTvnKnRT29uos98Ky1L3sWVli388h4JcFqGMoa%2BpkdRkrMN4UPEgSx14Xyv&X-Amz-Signature=eddbdd416fd6dc9a01f3ea4a762123da2288bcfb885dd052ea716538ad70cfb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGXKHOJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb%2BGme%2BgZesoH0AhBlykV%2BcO7K00D14GHLjCoUSW356AIhAOAf6wrBK%2BYpARXcjhaFKkCvc%2FgUu17ro9cwrHDHtO1uKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy80cVY6TO07OI5D2Eq3ANCN1s4rT%2BKX3k3JvdyFK%2B%2FQkinviavZW%2BZ9FtR0hL%2FN1swlw%2FdHYWbN%2BngE4NmHptwK7O6GdI78H8gYsP%2Bd55soekH1gaxlqvGHEPX%2BXrlK%2FhToDWxvYHbw5ZoE%2FKby7XXAiCF4bEJ3CIqKbNAMWnAnOqxGL1HqF6jk11euw8I%2BEByz0u6Q%2FuLzXEbIjcmqzPJdlkTlQFYLCElbXDNNJEFfhnSpUpjyer7kSUc5924fE%2FsPB6giJCLLnDTrzTUpR7fmJXlLWXHG%2BdelNoViKpDkKFSlSdbEWJMzf0AMox7cB8sHk6qFquf3zwlxTAsrl1ughJtay4fusI5B2Ze5fxhf27ynRLfbKcjiDZOQZmiWvHlTiwAbNVYQ279UImMe4CqXQoPUUVXxFdduiNEH5aR18J7ie6eBB4mOj9MroNq5tGtIGwJarBHsqHNKqowkrDJu0b1Fz7%2FiwDTnteLbDgb%2FRmCKUc5o48%2BiNPQko3gRNRpFRj4Rz4IQ9i0BojYJo4xPTy7ARAY0I3i0nfkZEWUyEii6BOlNiQFL9FqAtj4rnZJ95IESexGp8896wmpv5%2BYv6%2F%2BeOj9JdmPwVUV%2BfrvYxPKxIaIRsUvX8sx%2Ffo3uj%2BOyQePMrG53ml9tzDajfjDBjqkAX73RqBnpQx%2FhwL%2Bb3MaZ55Rp6j0NbDn0c1bEwOQ6nm1NuHK2MjZEX1zjzIRqHj0vvoKsYJNnckYHD9oi%2FZ3dRABLMxgwVe3BdiJubphCPVkWq6ieuo1pFKMjyrk%2B0g7nufGwyOM09Rij62rtmBZCZOBZleLEIXHGoTvnKnRT29uos98Ky1L3sWVli388h4JcFqGMoa%2BpkdRkrMN4UPEgSx14Xyv&X-Amz-Signature=3b228b12782ad626f647d21f5944fcc0307b9ece18d440acd7f3ac5bee7b90a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
