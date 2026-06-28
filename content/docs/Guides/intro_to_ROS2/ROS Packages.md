---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDSGQFF%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHRTUhXXX2D9IZU8UDh8TnGWhIIXMvt0ArbnZb%2FlaOQIhAP%2FXFN%2F72%2BmhfyYTGkQJadiTaekYhfX8F%2FytPvcVkNRbKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7kBJoNMvKhttAiw0q3AOJhS2%2BkDq%2FoLurkWDhDzxnX5O5onMLMwoM%2BfBNqCCUiZRJnArOG3Kc8nxAhErKotAdXjolVckiWITaJy4W2U1cKYgOGIx%2BRCd9PYu5ERmZKns3%2F6yaA11Cjcp7KP01jXtMqDvfsU19uN5j4MsDjK1Fbk8pfEwqo%2B0BzKwoZ5mIM5OIvjXMij5RswjhDMDnmn1mxjmPWIDd%2Fv5tBD8v7lwDo9i0OV6xRFwfC%2FRWrcJbrRkzvze6XnXIhM%2B0Z%2FHgGww%2FPrvsXxPiPMnXhtLwoeM5zQIxnphw%2BRUKPXh27MfCNXWs4h2B7m7MvT3gRoK1uZbKzlr9Lz%2F29tQ73GghQPN5OrclR5mGAzf0p%2Fa4YbRWFZw7x8Sq2RMa5BZPGvccCvAbpfXrtCW8%2Bswd%2FFIGIurruK5qaR%2BsuNR6UrLJqI1VCpED2Ywcz7GboE8boiO7%2FYE5yj%2FRXD0umsgPxU6ptSOan0QJdBdEgQoWTA0pqyG9w5Ove05VDSp0tGlbH7Z7QvE%2BPNoeVgFCia6H9XuWEwBLjA%2FNDxroWHI9aEeZwOQnqatLolXJPDvRX03WQAj4%2FVvqt1AwCPEuUn8skeelqjgQkZ%2B7bb3Z0QDd9qPBlSQm6nO0WFc3hLkhpjrxcTDOoILSBjqkAaO8Ad%2BuFKzgj7EIUEsFA4hxgjnVz2S8ZUp%2FOANvUejKyMvbrRdfwfp%2BsVvl5eXLWqFqAWlarG7yFPFEFgryb1r3%2FuJ3gyMPMoJv1J9%2BMFk2kAx8M0LuLnwMxc9XnWaM%2BBo4O0nRFhlIJkAmn9HlwNAJy8ntpOdquGCmeppM6sxrHUlwvLOeM6hC1FWUe7wlsVoHzPM7tMy8u69npIzCPdNsVc%2F2&X-Amz-Signature=c54285dafb6aaa3da85f84b092bcaa5eff1ac8308a6d2eef5a2be5e6015dffde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDSGQFF%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHRTUhXXX2D9IZU8UDh8TnGWhIIXMvt0ArbnZb%2FlaOQIhAP%2FXFN%2F72%2BmhfyYTGkQJadiTaekYhfX8F%2FytPvcVkNRbKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7kBJoNMvKhttAiw0q3AOJhS2%2BkDq%2FoLurkWDhDzxnX5O5onMLMwoM%2BfBNqCCUiZRJnArOG3Kc8nxAhErKotAdXjolVckiWITaJy4W2U1cKYgOGIx%2BRCd9PYu5ERmZKns3%2F6yaA11Cjcp7KP01jXtMqDvfsU19uN5j4MsDjK1Fbk8pfEwqo%2B0BzKwoZ5mIM5OIvjXMij5RswjhDMDnmn1mxjmPWIDd%2Fv5tBD8v7lwDo9i0OV6xRFwfC%2FRWrcJbrRkzvze6XnXIhM%2B0Z%2FHgGww%2FPrvsXxPiPMnXhtLwoeM5zQIxnphw%2BRUKPXh27MfCNXWs4h2B7m7MvT3gRoK1uZbKzlr9Lz%2F29tQ73GghQPN5OrclR5mGAzf0p%2Fa4YbRWFZw7x8Sq2RMa5BZPGvccCvAbpfXrtCW8%2Bswd%2FFIGIurruK5qaR%2BsuNR6UrLJqI1VCpED2Ywcz7GboE8boiO7%2FYE5yj%2FRXD0umsgPxU6ptSOan0QJdBdEgQoWTA0pqyG9w5Ove05VDSp0tGlbH7Z7QvE%2BPNoeVgFCia6H9XuWEwBLjA%2FNDxroWHI9aEeZwOQnqatLolXJPDvRX03WQAj4%2FVvqt1AwCPEuUn8skeelqjgQkZ%2B7bb3Z0QDd9qPBlSQm6nO0WFc3hLkhpjrxcTDOoILSBjqkAaO8Ad%2BuFKzgj7EIUEsFA4hxgjnVz2S8ZUp%2FOANvUejKyMvbrRdfwfp%2BsVvl5eXLWqFqAWlarG7yFPFEFgryb1r3%2FuJ3gyMPMoJv1J9%2BMFk2kAx8M0LuLnwMxc9XnWaM%2BBo4O0nRFhlIJkAmn9HlwNAJy8ntpOdquGCmeppM6sxrHUlwvLOeM6hC1FWUe7wlsVoHzPM7tMy8u69npIzCPdNsVc%2F2&X-Amz-Signature=9c166ee0020407e732531e540835f80531333cc52a20f912b017d6f561186863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDSGQFF%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHRTUhXXX2D9IZU8UDh8TnGWhIIXMvt0ArbnZb%2FlaOQIhAP%2FXFN%2F72%2BmhfyYTGkQJadiTaekYhfX8F%2FytPvcVkNRbKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7kBJoNMvKhttAiw0q3AOJhS2%2BkDq%2FoLurkWDhDzxnX5O5onMLMwoM%2BfBNqCCUiZRJnArOG3Kc8nxAhErKotAdXjolVckiWITaJy4W2U1cKYgOGIx%2BRCd9PYu5ERmZKns3%2F6yaA11Cjcp7KP01jXtMqDvfsU19uN5j4MsDjK1Fbk8pfEwqo%2B0BzKwoZ5mIM5OIvjXMij5RswjhDMDnmn1mxjmPWIDd%2Fv5tBD8v7lwDo9i0OV6xRFwfC%2FRWrcJbrRkzvze6XnXIhM%2B0Z%2FHgGww%2FPrvsXxPiPMnXhtLwoeM5zQIxnphw%2BRUKPXh27MfCNXWs4h2B7m7MvT3gRoK1uZbKzlr9Lz%2F29tQ73GghQPN5OrclR5mGAzf0p%2Fa4YbRWFZw7x8Sq2RMa5BZPGvccCvAbpfXrtCW8%2Bswd%2FFIGIurruK5qaR%2BsuNR6UrLJqI1VCpED2Ywcz7GboE8boiO7%2FYE5yj%2FRXD0umsgPxU6ptSOan0QJdBdEgQoWTA0pqyG9w5Ove05VDSp0tGlbH7Z7QvE%2BPNoeVgFCia6H9XuWEwBLjA%2FNDxroWHI9aEeZwOQnqatLolXJPDvRX03WQAj4%2FVvqt1AwCPEuUn8skeelqjgQkZ%2B7bb3Z0QDd9qPBlSQm6nO0WFc3hLkhpjrxcTDOoILSBjqkAaO8Ad%2BuFKzgj7EIUEsFA4hxgjnVz2S8ZUp%2FOANvUejKyMvbrRdfwfp%2BsVvl5eXLWqFqAWlarG7yFPFEFgryb1r3%2FuJ3gyMPMoJv1J9%2BMFk2kAx8M0LuLnwMxc9XnWaM%2BBo4O0nRFhlIJkAmn9HlwNAJy8ntpOdquGCmeppM6sxrHUlwvLOeM6hC1FWUe7wlsVoHzPM7tMy8u69npIzCPdNsVc%2F2&X-Amz-Signature=6ff397bf9a581bd4aff76eb9731910f9426ace7d5bc0265f69d464f273573304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDSGQFF%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHRTUhXXX2D9IZU8UDh8TnGWhIIXMvt0ArbnZb%2FlaOQIhAP%2FXFN%2F72%2BmhfyYTGkQJadiTaekYhfX8F%2FytPvcVkNRbKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7kBJoNMvKhttAiw0q3AOJhS2%2BkDq%2FoLurkWDhDzxnX5O5onMLMwoM%2BfBNqCCUiZRJnArOG3Kc8nxAhErKotAdXjolVckiWITaJy4W2U1cKYgOGIx%2BRCd9PYu5ERmZKns3%2F6yaA11Cjcp7KP01jXtMqDvfsU19uN5j4MsDjK1Fbk8pfEwqo%2B0BzKwoZ5mIM5OIvjXMij5RswjhDMDnmn1mxjmPWIDd%2Fv5tBD8v7lwDo9i0OV6xRFwfC%2FRWrcJbrRkzvze6XnXIhM%2B0Z%2FHgGww%2FPrvsXxPiPMnXhtLwoeM5zQIxnphw%2BRUKPXh27MfCNXWs4h2B7m7MvT3gRoK1uZbKzlr9Lz%2F29tQ73GghQPN5OrclR5mGAzf0p%2Fa4YbRWFZw7x8Sq2RMa5BZPGvccCvAbpfXrtCW8%2Bswd%2FFIGIurruK5qaR%2BsuNR6UrLJqI1VCpED2Ywcz7GboE8boiO7%2FYE5yj%2FRXD0umsgPxU6ptSOan0QJdBdEgQoWTA0pqyG9w5Ove05VDSp0tGlbH7Z7QvE%2BPNoeVgFCia6H9XuWEwBLjA%2FNDxroWHI9aEeZwOQnqatLolXJPDvRX03WQAj4%2FVvqt1AwCPEuUn8skeelqjgQkZ%2B7bb3Z0QDd9qPBlSQm6nO0WFc3hLkhpjrxcTDOoILSBjqkAaO8Ad%2BuFKzgj7EIUEsFA4hxgjnVz2S8ZUp%2FOANvUejKyMvbrRdfwfp%2BsVvl5eXLWqFqAWlarG7yFPFEFgryb1r3%2FuJ3gyMPMoJv1J9%2BMFk2kAx8M0LuLnwMxc9XnWaM%2BBo4O0nRFhlIJkAmn9HlwNAJy8ntpOdquGCmeppM6sxrHUlwvLOeM6hC1FWUe7wlsVoHzPM7tMy8u69npIzCPdNsVc%2F2&X-Amz-Signature=f5cce96079035beff4e03aaa544752f066d8524e46b409f6ad086598d04158ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDSGQFF%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHRTUhXXX2D9IZU8UDh8TnGWhIIXMvt0ArbnZb%2FlaOQIhAP%2FXFN%2F72%2BmhfyYTGkQJadiTaekYhfX8F%2FytPvcVkNRbKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7kBJoNMvKhttAiw0q3AOJhS2%2BkDq%2FoLurkWDhDzxnX5O5onMLMwoM%2BfBNqCCUiZRJnArOG3Kc8nxAhErKotAdXjolVckiWITaJy4W2U1cKYgOGIx%2BRCd9PYu5ERmZKns3%2F6yaA11Cjcp7KP01jXtMqDvfsU19uN5j4MsDjK1Fbk8pfEwqo%2B0BzKwoZ5mIM5OIvjXMij5RswjhDMDnmn1mxjmPWIDd%2Fv5tBD8v7lwDo9i0OV6xRFwfC%2FRWrcJbrRkzvze6XnXIhM%2B0Z%2FHgGww%2FPrvsXxPiPMnXhtLwoeM5zQIxnphw%2BRUKPXh27MfCNXWs4h2B7m7MvT3gRoK1uZbKzlr9Lz%2F29tQ73GghQPN5OrclR5mGAzf0p%2Fa4YbRWFZw7x8Sq2RMa5BZPGvccCvAbpfXrtCW8%2Bswd%2FFIGIurruK5qaR%2BsuNR6UrLJqI1VCpED2Ywcz7GboE8boiO7%2FYE5yj%2FRXD0umsgPxU6ptSOan0QJdBdEgQoWTA0pqyG9w5Ove05VDSp0tGlbH7Z7QvE%2BPNoeVgFCia6H9XuWEwBLjA%2FNDxroWHI9aEeZwOQnqatLolXJPDvRX03WQAj4%2FVvqt1AwCPEuUn8skeelqjgQkZ%2B7bb3Z0QDd9qPBlSQm6nO0WFc3hLkhpjrxcTDOoILSBjqkAaO8Ad%2BuFKzgj7EIUEsFA4hxgjnVz2S8ZUp%2FOANvUejKyMvbrRdfwfp%2BsVvl5eXLWqFqAWlarG7yFPFEFgryb1r3%2FuJ3gyMPMoJv1J9%2BMFk2kAx8M0LuLnwMxc9XnWaM%2BBo4O0nRFhlIJkAmn9HlwNAJy8ntpOdquGCmeppM6sxrHUlwvLOeM6hC1FWUe7wlsVoHzPM7tMy8u69npIzCPdNsVc%2F2&X-Amz-Signature=7a7c1d51fa881b6f1bd852a7b96dc9fb8ea8353225c5cabf54ea5f432003f1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDSGQFF%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHRTUhXXX2D9IZU8UDh8TnGWhIIXMvt0ArbnZb%2FlaOQIhAP%2FXFN%2F72%2BmhfyYTGkQJadiTaekYhfX8F%2FytPvcVkNRbKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7kBJoNMvKhttAiw0q3AOJhS2%2BkDq%2FoLurkWDhDzxnX5O5onMLMwoM%2BfBNqCCUiZRJnArOG3Kc8nxAhErKotAdXjolVckiWITaJy4W2U1cKYgOGIx%2BRCd9PYu5ERmZKns3%2F6yaA11Cjcp7KP01jXtMqDvfsU19uN5j4MsDjK1Fbk8pfEwqo%2B0BzKwoZ5mIM5OIvjXMij5RswjhDMDnmn1mxjmPWIDd%2Fv5tBD8v7lwDo9i0OV6xRFwfC%2FRWrcJbrRkzvze6XnXIhM%2B0Z%2FHgGww%2FPrvsXxPiPMnXhtLwoeM5zQIxnphw%2BRUKPXh27MfCNXWs4h2B7m7MvT3gRoK1uZbKzlr9Lz%2F29tQ73GghQPN5OrclR5mGAzf0p%2Fa4YbRWFZw7x8Sq2RMa5BZPGvccCvAbpfXrtCW8%2Bswd%2FFIGIurruK5qaR%2BsuNR6UrLJqI1VCpED2Ywcz7GboE8boiO7%2FYE5yj%2FRXD0umsgPxU6ptSOan0QJdBdEgQoWTA0pqyG9w5Ove05VDSp0tGlbH7Z7QvE%2BPNoeVgFCia6H9XuWEwBLjA%2FNDxroWHI9aEeZwOQnqatLolXJPDvRX03WQAj4%2FVvqt1AwCPEuUn8skeelqjgQkZ%2B7bb3Z0QDd9qPBlSQm6nO0WFc3hLkhpjrxcTDOoILSBjqkAaO8Ad%2BuFKzgj7EIUEsFA4hxgjnVz2S8ZUp%2FOANvUejKyMvbrRdfwfp%2BsVvl5eXLWqFqAWlarG7yFPFEFgryb1r3%2FuJ3gyMPMoJv1J9%2BMFk2kAx8M0LuLnwMxc9XnWaM%2BBo4O0nRFhlIJkAmn9HlwNAJy8ntpOdquGCmeppM6sxrHUlwvLOeM6hC1FWUe7wlsVoHzPM7tMy8u69npIzCPdNsVc%2F2&X-Amz-Signature=828089d960fd24024f6861c9cf6b52a7f350804d47f85678272a09f761ade8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJDSGQFF%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHRTUhXXX2D9IZU8UDh8TnGWhIIXMvt0ArbnZb%2FlaOQIhAP%2FXFN%2F72%2BmhfyYTGkQJadiTaekYhfX8F%2FytPvcVkNRbKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7kBJoNMvKhttAiw0q3AOJhS2%2BkDq%2FoLurkWDhDzxnX5O5onMLMwoM%2BfBNqCCUiZRJnArOG3Kc8nxAhErKotAdXjolVckiWITaJy4W2U1cKYgOGIx%2BRCd9PYu5ERmZKns3%2F6yaA11Cjcp7KP01jXtMqDvfsU19uN5j4MsDjK1Fbk8pfEwqo%2B0BzKwoZ5mIM5OIvjXMij5RswjhDMDnmn1mxjmPWIDd%2Fv5tBD8v7lwDo9i0OV6xRFwfC%2FRWrcJbrRkzvze6XnXIhM%2B0Z%2FHgGww%2FPrvsXxPiPMnXhtLwoeM5zQIxnphw%2BRUKPXh27MfCNXWs4h2B7m7MvT3gRoK1uZbKzlr9Lz%2F29tQ73GghQPN5OrclR5mGAzf0p%2Fa4YbRWFZw7x8Sq2RMa5BZPGvccCvAbpfXrtCW8%2Bswd%2FFIGIurruK5qaR%2BsuNR6UrLJqI1VCpED2Ywcz7GboE8boiO7%2FYE5yj%2FRXD0umsgPxU6ptSOan0QJdBdEgQoWTA0pqyG9w5Ove05VDSp0tGlbH7Z7QvE%2BPNoeVgFCia6H9XuWEwBLjA%2FNDxroWHI9aEeZwOQnqatLolXJPDvRX03WQAj4%2FVvqt1AwCPEuUn8skeelqjgQkZ%2B7bb3Z0QDd9qPBlSQm6nO0WFc3hLkhpjrxcTDOoILSBjqkAaO8Ad%2BuFKzgj7EIUEsFA4hxgjnVz2S8ZUp%2FOANvUejKyMvbrRdfwfp%2BsVvl5eXLWqFqAWlarG7yFPFEFgryb1r3%2FuJ3gyMPMoJv1J9%2BMFk2kAx8M0LuLnwMxc9XnWaM%2BBo4O0nRFhlIJkAmn9HlwNAJy8ntpOdquGCmeppM6sxrHUlwvLOeM6hC1FWUe7wlsVoHzPM7tMy8u69npIzCPdNsVc%2F2&X-Amz-Signature=8277684ad83a31eab16e8f8f90c4e4af1b06d784bce08a40a2f251b610d8988a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
