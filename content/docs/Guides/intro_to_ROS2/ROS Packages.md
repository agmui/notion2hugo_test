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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXE5Q2TP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCndhVBdWcg37Op1PKFkTNax57RITEIFGVT86WPdTteMwIgJBihgoYCwI7A1dKXB%2BL2Vjtjx0tRYw%2FazDnk8nZCS8oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO0Oet0ziWcwiCuTSyrcA8Am9hHa1ptkwoob7hKWQEu88wbgZ%2BuMgWj4O8Umpx0Bfl3m6ZxMdHKH8mz5vjrwpYwzVaUJ%2FsouR1ltAXUSIPePCVlM0aaKhgIQZ6LSMXsqwt1KYb2uE9A3erSTN5pgxA3fUkMXPYKZEpUO6ymnPqBQka40I9cbEiY%2BbeQAniWL1QNESO7cFFDR2T5q0Kzxcb1430%2BasAQyvn93VK3jbFvL513dQx5c9HF9%2FfBraBjEk0ScqRvYli1RDvQ3KNs46%2FajYoi%2BWIaA%2FmAzphHbJQjB2JuhpcDxbKsLbslSc1gtHrAjuh2%2Bgp%2BsrRQ7yJvOjTj6DSsjlrhoPfQ19Xs06tEehx4gO1Lsqf57fPNUS0IixmoMN9yFpTalYQb8DAqGg36Kv0ZJ5emnaDbpkB68pQ7N1EqKjYFVTgno4wq4XYUi3ra9oxJpxTPEjtrzvl3p9liLAjgUUfcvs7SiwtfWO83F%2BfYtmN3EVMPU0n%2FL5Jgbr%2BGSkAgOMxNZCkcpO2Yh%2F1TXVTWxw5Ya3pA%2BbWnlPtqdZJFDLmnaSgM3mEmd1KzH91DmLmXcIKUJz5CW7l22k7hYaAz1u3FWLCxSgAPxGEgDXIaHXoAEc%2FV0Zh%2BRL6jcwKQ1hxN9x%2BqZy6c3MIyBmcQGOqUB3MdYI7IJFzGLbbjhvtHkWNdudL5C8wvHYbzhRsCAsUxCr%2Fz2UbdfB5Qm6jB32l3MZz1oyvLRU1MVIZ2NbzjScDqQIhzQRe4K7%2FOQzm9tTMRxTmL7vV20pVmnXta%2BQ6HXC632Ykrezv3AcCGd3ZaHGJe1BwFtoF08w7Bm%2BDmbWgG2rdaUbjBHjvFkG9IfkkAo4GX0uDjFza9fBArWzBQi7%2FHZL%2B8A&X-Amz-Signature=c1cacd3f8de0d6609788d7aa63a50b788bc65a924132bf0918a4fe5e1056b013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXE5Q2TP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCndhVBdWcg37Op1PKFkTNax57RITEIFGVT86WPdTteMwIgJBihgoYCwI7A1dKXB%2BL2Vjtjx0tRYw%2FazDnk8nZCS8oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO0Oet0ziWcwiCuTSyrcA8Am9hHa1ptkwoob7hKWQEu88wbgZ%2BuMgWj4O8Umpx0Bfl3m6ZxMdHKH8mz5vjrwpYwzVaUJ%2FsouR1ltAXUSIPePCVlM0aaKhgIQZ6LSMXsqwt1KYb2uE9A3erSTN5pgxA3fUkMXPYKZEpUO6ymnPqBQka40I9cbEiY%2BbeQAniWL1QNESO7cFFDR2T5q0Kzxcb1430%2BasAQyvn93VK3jbFvL513dQx5c9HF9%2FfBraBjEk0ScqRvYli1RDvQ3KNs46%2FajYoi%2BWIaA%2FmAzphHbJQjB2JuhpcDxbKsLbslSc1gtHrAjuh2%2Bgp%2BsrRQ7yJvOjTj6DSsjlrhoPfQ19Xs06tEehx4gO1Lsqf57fPNUS0IixmoMN9yFpTalYQb8DAqGg36Kv0ZJ5emnaDbpkB68pQ7N1EqKjYFVTgno4wq4XYUi3ra9oxJpxTPEjtrzvl3p9liLAjgUUfcvs7SiwtfWO83F%2BfYtmN3EVMPU0n%2FL5Jgbr%2BGSkAgOMxNZCkcpO2Yh%2F1TXVTWxw5Ya3pA%2BbWnlPtqdZJFDLmnaSgM3mEmd1KzH91DmLmXcIKUJz5CW7l22k7hYaAz1u3FWLCxSgAPxGEgDXIaHXoAEc%2FV0Zh%2BRL6jcwKQ1hxN9x%2BqZy6c3MIyBmcQGOqUB3MdYI7IJFzGLbbjhvtHkWNdudL5C8wvHYbzhRsCAsUxCr%2Fz2UbdfB5Qm6jB32l3MZz1oyvLRU1MVIZ2NbzjScDqQIhzQRe4K7%2FOQzm9tTMRxTmL7vV20pVmnXta%2BQ6HXC632Ykrezv3AcCGd3ZaHGJe1BwFtoF08w7Bm%2BDmbWgG2rdaUbjBHjvFkG9IfkkAo4GX0uDjFza9fBArWzBQi7%2FHZL%2B8A&X-Amz-Signature=875652ee1788f9f45f901941c65b58249889a87a160067b0bbb8d177a8c53818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXE5Q2TP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCndhVBdWcg37Op1PKFkTNax57RITEIFGVT86WPdTteMwIgJBihgoYCwI7A1dKXB%2BL2Vjtjx0tRYw%2FazDnk8nZCS8oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO0Oet0ziWcwiCuTSyrcA8Am9hHa1ptkwoob7hKWQEu88wbgZ%2BuMgWj4O8Umpx0Bfl3m6ZxMdHKH8mz5vjrwpYwzVaUJ%2FsouR1ltAXUSIPePCVlM0aaKhgIQZ6LSMXsqwt1KYb2uE9A3erSTN5pgxA3fUkMXPYKZEpUO6ymnPqBQka40I9cbEiY%2BbeQAniWL1QNESO7cFFDR2T5q0Kzxcb1430%2BasAQyvn93VK3jbFvL513dQx5c9HF9%2FfBraBjEk0ScqRvYli1RDvQ3KNs46%2FajYoi%2BWIaA%2FmAzphHbJQjB2JuhpcDxbKsLbslSc1gtHrAjuh2%2Bgp%2BsrRQ7yJvOjTj6DSsjlrhoPfQ19Xs06tEehx4gO1Lsqf57fPNUS0IixmoMN9yFpTalYQb8DAqGg36Kv0ZJ5emnaDbpkB68pQ7N1EqKjYFVTgno4wq4XYUi3ra9oxJpxTPEjtrzvl3p9liLAjgUUfcvs7SiwtfWO83F%2BfYtmN3EVMPU0n%2FL5Jgbr%2BGSkAgOMxNZCkcpO2Yh%2F1TXVTWxw5Ya3pA%2BbWnlPtqdZJFDLmnaSgM3mEmd1KzH91DmLmXcIKUJz5CW7l22k7hYaAz1u3FWLCxSgAPxGEgDXIaHXoAEc%2FV0Zh%2BRL6jcwKQ1hxN9x%2BqZy6c3MIyBmcQGOqUB3MdYI7IJFzGLbbjhvtHkWNdudL5C8wvHYbzhRsCAsUxCr%2Fz2UbdfB5Qm6jB32l3MZz1oyvLRU1MVIZ2NbzjScDqQIhzQRe4K7%2FOQzm9tTMRxTmL7vV20pVmnXta%2BQ6HXC632Ykrezv3AcCGd3ZaHGJe1BwFtoF08w7Bm%2BDmbWgG2rdaUbjBHjvFkG9IfkkAo4GX0uDjFza9fBArWzBQi7%2FHZL%2B8A&X-Amz-Signature=e0cd980e0f3c1d517a69d2fb610c0ab890b37efa22de33148f676504fb1e1936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXE5Q2TP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCndhVBdWcg37Op1PKFkTNax57RITEIFGVT86WPdTteMwIgJBihgoYCwI7A1dKXB%2BL2Vjtjx0tRYw%2FazDnk8nZCS8oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO0Oet0ziWcwiCuTSyrcA8Am9hHa1ptkwoob7hKWQEu88wbgZ%2BuMgWj4O8Umpx0Bfl3m6ZxMdHKH8mz5vjrwpYwzVaUJ%2FsouR1ltAXUSIPePCVlM0aaKhgIQZ6LSMXsqwt1KYb2uE9A3erSTN5pgxA3fUkMXPYKZEpUO6ymnPqBQka40I9cbEiY%2BbeQAniWL1QNESO7cFFDR2T5q0Kzxcb1430%2BasAQyvn93VK3jbFvL513dQx5c9HF9%2FfBraBjEk0ScqRvYli1RDvQ3KNs46%2FajYoi%2BWIaA%2FmAzphHbJQjB2JuhpcDxbKsLbslSc1gtHrAjuh2%2Bgp%2BsrRQ7yJvOjTj6DSsjlrhoPfQ19Xs06tEehx4gO1Lsqf57fPNUS0IixmoMN9yFpTalYQb8DAqGg36Kv0ZJ5emnaDbpkB68pQ7N1EqKjYFVTgno4wq4XYUi3ra9oxJpxTPEjtrzvl3p9liLAjgUUfcvs7SiwtfWO83F%2BfYtmN3EVMPU0n%2FL5Jgbr%2BGSkAgOMxNZCkcpO2Yh%2F1TXVTWxw5Ya3pA%2BbWnlPtqdZJFDLmnaSgM3mEmd1KzH91DmLmXcIKUJz5CW7l22k7hYaAz1u3FWLCxSgAPxGEgDXIaHXoAEc%2FV0Zh%2BRL6jcwKQ1hxN9x%2BqZy6c3MIyBmcQGOqUB3MdYI7IJFzGLbbjhvtHkWNdudL5C8wvHYbzhRsCAsUxCr%2Fz2UbdfB5Qm6jB32l3MZz1oyvLRU1MVIZ2NbzjScDqQIhzQRe4K7%2FOQzm9tTMRxTmL7vV20pVmnXta%2BQ6HXC632Ykrezv3AcCGd3ZaHGJe1BwFtoF08w7Bm%2BDmbWgG2rdaUbjBHjvFkG9IfkkAo4GX0uDjFza9fBArWzBQi7%2FHZL%2B8A&X-Amz-Signature=8172488f24b0f5dbb315954def123994b6c8f39f4f2d5469fcde4fc6fcf42b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXE5Q2TP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCndhVBdWcg37Op1PKFkTNax57RITEIFGVT86WPdTteMwIgJBihgoYCwI7A1dKXB%2BL2Vjtjx0tRYw%2FazDnk8nZCS8oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO0Oet0ziWcwiCuTSyrcA8Am9hHa1ptkwoob7hKWQEu88wbgZ%2BuMgWj4O8Umpx0Bfl3m6ZxMdHKH8mz5vjrwpYwzVaUJ%2FsouR1ltAXUSIPePCVlM0aaKhgIQZ6LSMXsqwt1KYb2uE9A3erSTN5pgxA3fUkMXPYKZEpUO6ymnPqBQka40I9cbEiY%2BbeQAniWL1QNESO7cFFDR2T5q0Kzxcb1430%2BasAQyvn93VK3jbFvL513dQx5c9HF9%2FfBraBjEk0ScqRvYli1RDvQ3KNs46%2FajYoi%2BWIaA%2FmAzphHbJQjB2JuhpcDxbKsLbslSc1gtHrAjuh2%2Bgp%2BsrRQ7yJvOjTj6DSsjlrhoPfQ19Xs06tEehx4gO1Lsqf57fPNUS0IixmoMN9yFpTalYQb8DAqGg36Kv0ZJ5emnaDbpkB68pQ7N1EqKjYFVTgno4wq4XYUi3ra9oxJpxTPEjtrzvl3p9liLAjgUUfcvs7SiwtfWO83F%2BfYtmN3EVMPU0n%2FL5Jgbr%2BGSkAgOMxNZCkcpO2Yh%2F1TXVTWxw5Ya3pA%2BbWnlPtqdZJFDLmnaSgM3mEmd1KzH91DmLmXcIKUJz5CW7l22k7hYaAz1u3FWLCxSgAPxGEgDXIaHXoAEc%2FV0Zh%2BRL6jcwKQ1hxN9x%2BqZy6c3MIyBmcQGOqUB3MdYI7IJFzGLbbjhvtHkWNdudL5C8wvHYbzhRsCAsUxCr%2Fz2UbdfB5Qm6jB32l3MZz1oyvLRU1MVIZ2NbzjScDqQIhzQRe4K7%2FOQzm9tTMRxTmL7vV20pVmnXta%2BQ6HXC632Ykrezv3AcCGd3ZaHGJe1BwFtoF08w7Bm%2BDmbWgG2rdaUbjBHjvFkG9IfkkAo4GX0uDjFza9fBArWzBQi7%2FHZL%2B8A&X-Amz-Signature=9b921445b71afb33c157fe05885e3884f161ea7ef3b7f0510f6acf33c0c32916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXE5Q2TP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCndhVBdWcg37Op1PKFkTNax57RITEIFGVT86WPdTteMwIgJBihgoYCwI7A1dKXB%2BL2Vjtjx0tRYw%2FazDnk8nZCS8oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO0Oet0ziWcwiCuTSyrcA8Am9hHa1ptkwoob7hKWQEu88wbgZ%2BuMgWj4O8Umpx0Bfl3m6ZxMdHKH8mz5vjrwpYwzVaUJ%2FsouR1ltAXUSIPePCVlM0aaKhgIQZ6LSMXsqwt1KYb2uE9A3erSTN5pgxA3fUkMXPYKZEpUO6ymnPqBQka40I9cbEiY%2BbeQAniWL1QNESO7cFFDR2T5q0Kzxcb1430%2BasAQyvn93VK3jbFvL513dQx5c9HF9%2FfBraBjEk0ScqRvYli1RDvQ3KNs46%2FajYoi%2BWIaA%2FmAzphHbJQjB2JuhpcDxbKsLbslSc1gtHrAjuh2%2Bgp%2BsrRQ7yJvOjTj6DSsjlrhoPfQ19Xs06tEehx4gO1Lsqf57fPNUS0IixmoMN9yFpTalYQb8DAqGg36Kv0ZJ5emnaDbpkB68pQ7N1EqKjYFVTgno4wq4XYUi3ra9oxJpxTPEjtrzvl3p9liLAjgUUfcvs7SiwtfWO83F%2BfYtmN3EVMPU0n%2FL5Jgbr%2BGSkAgOMxNZCkcpO2Yh%2F1TXVTWxw5Ya3pA%2BbWnlPtqdZJFDLmnaSgM3mEmd1KzH91DmLmXcIKUJz5CW7l22k7hYaAz1u3FWLCxSgAPxGEgDXIaHXoAEc%2FV0Zh%2BRL6jcwKQ1hxN9x%2BqZy6c3MIyBmcQGOqUB3MdYI7IJFzGLbbjhvtHkWNdudL5C8wvHYbzhRsCAsUxCr%2Fz2UbdfB5Qm6jB32l3MZz1oyvLRU1MVIZ2NbzjScDqQIhzQRe4K7%2FOQzm9tTMRxTmL7vV20pVmnXta%2BQ6HXC632Ykrezv3AcCGd3ZaHGJe1BwFtoF08w7Bm%2BDmbWgG2rdaUbjBHjvFkG9IfkkAo4GX0uDjFza9fBArWzBQi7%2FHZL%2B8A&X-Amz-Signature=79c135feaac94c05413964d8df58bf45494f842bb5dc157eb88994e625c98b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXE5Q2TP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCndhVBdWcg37Op1PKFkTNax57RITEIFGVT86WPdTteMwIgJBihgoYCwI7A1dKXB%2BL2Vjtjx0tRYw%2FazDnk8nZCS8oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO0Oet0ziWcwiCuTSyrcA8Am9hHa1ptkwoob7hKWQEu88wbgZ%2BuMgWj4O8Umpx0Bfl3m6ZxMdHKH8mz5vjrwpYwzVaUJ%2FsouR1ltAXUSIPePCVlM0aaKhgIQZ6LSMXsqwt1KYb2uE9A3erSTN5pgxA3fUkMXPYKZEpUO6ymnPqBQka40I9cbEiY%2BbeQAniWL1QNESO7cFFDR2T5q0Kzxcb1430%2BasAQyvn93VK3jbFvL513dQx5c9HF9%2FfBraBjEk0ScqRvYli1RDvQ3KNs46%2FajYoi%2BWIaA%2FmAzphHbJQjB2JuhpcDxbKsLbslSc1gtHrAjuh2%2Bgp%2BsrRQ7yJvOjTj6DSsjlrhoPfQ19Xs06tEehx4gO1Lsqf57fPNUS0IixmoMN9yFpTalYQb8DAqGg36Kv0ZJ5emnaDbpkB68pQ7N1EqKjYFVTgno4wq4XYUi3ra9oxJpxTPEjtrzvl3p9liLAjgUUfcvs7SiwtfWO83F%2BfYtmN3EVMPU0n%2FL5Jgbr%2BGSkAgOMxNZCkcpO2Yh%2F1TXVTWxw5Ya3pA%2BbWnlPtqdZJFDLmnaSgM3mEmd1KzH91DmLmXcIKUJz5CW7l22k7hYaAz1u3FWLCxSgAPxGEgDXIaHXoAEc%2FV0Zh%2BRL6jcwKQ1hxN9x%2BqZy6c3MIyBmcQGOqUB3MdYI7IJFzGLbbjhvtHkWNdudL5C8wvHYbzhRsCAsUxCr%2Fz2UbdfB5Qm6jB32l3MZz1oyvLRU1MVIZ2NbzjScDqQIhzQRe4K7%2FOQzm9tTMRxTmL7vV20pVmnXta%2BQ6HXC632Ykrezv3AcCGd3ZaHGJe1BwFtoF08w7Bm%2BDmbWgG2rdaUbjBHjvFkG9IfkkAo4GX0uDjFza9fBArWzBQi7%2FHZL%2B8A&X-Amz-Signature=72206429f394a5dd918d341462cc8902c554e59045b9b7aa75243d2abfc92d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
