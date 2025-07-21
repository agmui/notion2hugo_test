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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EEMJG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T005000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPdRwvUzYHKx79HqWBzZ%2FtZLzGtUE0aYwAtBoFKhb%2BAIgQeKYtaPQWiuC48AryLF1utHbF8JdtGNKAXmQxxticJYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZvt064ZkHykJt1UCrcA%2Bwb5NaYS%2FW9st%2FsglyDFCx5MlgGiRggdGf7t2TWhE4KXqFXQpHEsrpsq8cGuEPyTSCVU295FZgTyMP4ABoJIZj%2BKqCjBVzAZ%2FqBp3LjUZ6vUTiK1hsxPhvinreWAPCU%2BzCL3yKA%2BWY8%2FAp%2F8DP6gv9qwm5dRmoDs9VUb9VRdJg28mm5tGjMP%2B0vs54bBVC1MbLIqFmxdYt2JyieOVsKP%2BFhx2nauJH4AE808k6m75UL%2FRd%2BBm5uCrJbaEruIJrdTCK87b1ZDoE1ZghiJb6LyA3BLiMXM2NCRA1omHniQRNcOTAssSAdxy6F9Ta4cZUvXpGTVbfLlsMveFxLousdGBb4w%2BRkav8ne669%2FZvQ45Q1Cov62rNxGiTPlfWWyR2SvXvS8bl9hdVbSM%2F%2F%2Bx45%2BV3DJEjTOHwaqWA9I7BVf9%2FcIcGf7uDvXWCYAlm9O%2BVpMYNQrv2LAa4oxqnEt3%2BSxhuE0Nb44lfMtf8znx6vTHfkm3PrGfPeqJIsEj5ji8wYdWWn2DIm3Krz9zLiQ7SjEIwrVpfGQPoHt%2BqB9kmjARMgol%2B6zx0GshTV1f0Zt%2FM8tnZnd66kc1j7Fsuyr19fcPtoieAc6L6I99CzUQHGRJIWRp35NsQ4wOML3tFnMISV9sMGOqUBPcP13t5GbiETeNNTq1p9goWAhK3dzQKBYFYCAuBX2g3kXWSy88qdUWmvMmY3au5NUhXFXNQhKuAx0wJKDBKhm2cteNoNIlHIveyFxcV899Y%2BjjkY8t24EASJV6AXzfybnNG5H4zNdj%2FJHzulBWTPPo3QFE2bD2FbxUNfcvtAyygay6Q3ozA6ZS544FzCf0itRdLm2o4P8DQuWGSXW9F4NMi0VQpx&X-Amz-Signature=3c98428a398bbea3ebbfc0465d2694be5f166fe1642de38cc2237332717346e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EEMJG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T005000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPdRwvUzYHKx79HqWBzZ%2FtZLzGtUE0aYwAtBoFKhb%2BAIgQeKYtaPQWiuC48AryLF1utHbF8JdtGNKAXmQxxticJYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZvt064ZkHykJt1UCrcA%2Bwb5NaYS%2FW9st%2FsglyDFCx5MlgGiRggdGf7t2TWhE4KXqFXQpHEsrpsq8cGuEPyTSCVU295FZgTyMP4ABoJIZj%2BKqCjBVzAZ%2FqBp3LjUZ6vUTiK1hsxPhvinreWAPCU%2BzCL3yKA%2BWY8%2FAp%2F8DP6gv9qwm5dRmoDs9VUb9VRdJg28mm5tGjMP%2B0vs54bBVC1MbLIqFmxdYt2JyieOVsKP%2BFhx2nauJH4AE808k6m75UL%2FRd%2BBm5uCrJbaEruIJrdTCK87b1ZDoE1ZghiJb6LyA3BLiMXM2NCRA1omHniQRNcOTAssSAdxy6F9Ta4cZUvXpGTVbfLlsMveFxLousdGBb4w%2BRkav8ne669%2FZvQ45Q1Cov62rNxGiTPlfWWyR2SvXvS8bl9hdVbSM%2F%2F%2Bx45%2BV3DJEjTOHwaqWA9I7BVf9%2FcIcGf7uDvXWCYAlm9O%2BVpMYNQrv2LAa4oxqnEt3%2BSxhuE0Nb44lfMtf8znx6vTHfkm3PrGfPeqJIsEj5ji8wYdWWn2DIm3Krz9zLiQ7SjEIwrVpfGQPoHt%2BqB9kmjARMgol%2B6zx0GshTV1f0Zt%2FM8tnZnd66kc1j7Fsuyr19fcPtoieAc6L6I99CzUQHGRJIWRp35NsQ4wOML3tFnMISV9sMGOqUBPcP13t5GbiETeNNTq1p9goWAhK3dzQKBYFYCAuBX2g3kXWSy88qdUWmvMmY3au5NUhXFXNQhKuAx0wJKDBKhm2cteNoNIlHIveyFxcV899Y%2BjjkY8t24EASJV6AXzfybnNG5H4zNdj%2FJHzulBWTPPo3QFE2bD2FbxUNfcvtAyygay6Q3ozA6ZS544FzCf0itRdLm2o4P8DQuWGSXW9F4NMi0VQpx&X-Amz-Signature=c02a592fdc97fd84856d298027169c9e348ef2c67167950f5cb882f0e584e0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EEMJG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T005000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPdRwvUzYHKx79HqWBzZ%2FtZLzGtUE0aYwAtBoFKhb%2BAIgQeKYtaPQWiuC48AryLF1utHbF8JdtGNKAXmQxxticJYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZvt064ZkHykJt1UCrcA%2Bwb5NaYS%2FW9st%2FsglyDFCx5MlgGiRggdGf7t2TWhE4KXqFXQpHEsrpsq8cGuEPyTSCVU295FZgTyMP4ABoJIZj%2BKqCjBVzAZ%2FqBp3LjUZ6vUTiK1hsxPhvinreWAPCU%2BzCL3yKA%2BWY8%2FAp%2F8DP6gv9qwm5dRmoDs9VUb9VRdJg28mm5tGjMP%2B0vs54bBVC1MbLIqFmxdYt2JyieOVsKP%2BFhx2nauJH4AE808k6m75UL%2FRd%2BBm5uCrJbaEruIJrdTCK87b1ZDoE1ZghiJb6LyA3BLiMXM2NCRA1omHniQRNcOTAssSAdxy6F9Ta4cZUvXpGTVbfLlsMveFxLousdGBb4w%2BRkav8ne669%2FZvQ45Q1Cov62rNxGiTPlfWWyR2SvXvS8bl9hdVbSM%2F%2F%2Bx45%2BV3DJEjTOHwaqWA9I7BVf9%2FcIcGf7uDvXWCYAlm9O%2BVpMYNQrv2LAa4oxqnEt3%2BSxhuE0Nb44lfMtf8znx6vTHfkm3PrGfPeqJIsEj5ji8wYdWWn2DIm3Krz9zLiQ7SjEIwrVpfGQPoHt%2BqB9kmjARMgol%2B6zx0GshTV1f0Zt%2FM8tnZnd66kc1j7Fsuyr19fcPtoieAc6L6I99CzUQHGRJIWRp35NsQ4wOML3tFnMISV9sMGOqUBPcP13t5GbiETeNNTq1p9goWAhK3dzQKBYFYCAuBX2g3kXWSy88qdUWmvMmY3au5NUhXFXNQhKuAx0wJKDBKhm2cteNoNIlHIveyFxcV899Y%2BjjkY8t24EASJV6AXzfybnNG5H4zNdj%2FJHzulBWTPPo3QFE2bD2FbxUNfcvtAyygay6Q3ozA6ZS544FzCf0itRdLm2o4P8DQuWGSXW9F4NMi0VQpx&X-Amz-Signature=fd1db8babafe034551b08608d647020af4cd304937306cb076b2cf517c7fcf9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EEMJG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T005000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPdRwvUzYHKx79HqWBzZ%2FtZLzGtUE0aYwAtBoFKhb%2BAIgQeKYtaPQWiuC48AryLF1utHbF8JdtGNKAXmQxxticJYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZvt064ZkHykJt1UCrcA%2Bwb5NaYS%2FW9st%2FsglyDFCx5MlgGiRggdGf7t2TWhE4KXqFXQpHEsrpsq8cGuEPyTSCVU295FZgTyMP4ABoJIZj%2BKqCjBVzAZ%2FqBp3LjUZ6vUTiK1hsxPhvinreWAPCU%2BzCL3yKA%2BWY8%2FAp%2F8DP6gv9qwm5dRmoDs9VUb9VRdJg28mm5tGjMP%2B0vs54bBVC1MbLIqFmxdYt2JyieOVsKP%2BFhx2nauJH4AE808k6m75UL%2FRd%2BBm5uCrJbaEruIJrdTCK87b1ZDoE1ZghiJb6LyA3BLiMXM2NCRA1omHniQRNcOTAssSAdxy6F9Ta4cZUvXpGTVbfLlsMveFxLousdGBb4w%2BRkav8ne669%2FZvQ45Q1Cov62rNxGiTPlfWWyR2SvXvS8bl9hdVbSM%2F%2F%2Bx45%2BV3DJEjTOHwaqWA9I7BVf9%2FcIcGf7uDvXWCYAlm9O%2BVpMYNQrv2LAa4oxqnEt3%2BSxhuE0Nb44lfMtf8znx6vTHfkm3PrGfPeqJIsEj5ji8wYdWWn2DIm3Krz9zLiQ7SjEIwrVpfGQPoHt%2BqB9kmjARMgol%2B6zx0GshTV1f0Zt%2FM8tnZnd66kc1j7Fsuyr19fcPtoieAc6L6I99CzUQHGRJIWRp35NsQ4wOML3tFnMISV9sMGOqUBPcP13t5GbiETeNNTq1p9goWAhK3dzQKBYFYCAuBX2g3kXWSy88qdUWmvMmY3au5NUhXFXNQhKuAx0wJKDBKhm2cteNoNIlHIveyFxcV899Y%2BjjkY8t24EASJV6AXzfybnNG5H4zNdj%2FJHzulBWTPPo3QFE2bD2FbxUNfcvtAyygay6Q3ozA6ZS544FzCf0itRdLm2o4P8DQuWGSXW9F4NMi0VQpx&X-Amz-Signature=24cf6f626235a4aa8ef9e82141ea6e307f3c615e63ccd2114c3de502a6b7a779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EEMJG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T005000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPdRwvUzYHKx79HqWBzZ%2FtZLzGtUE0aYwAtBoFKhb%2BAIgQeKYtaPQWiuC48AryLF1utHbF8JdtGNKAXmQxxticJYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZvt064ZkHykJt1UCrcA%2Bwb5NaYS%2FW9st%2FsglyDFCx5MlgGiRggdGf7t2TWhE4KXqFXQpHEsrpsq8cGuEPyTSCVU295FZgTyMP4ABoJIZj%2BKqCjBVzAZ%2FqBp3LjUZ6vUTiK1hsxPhvinreWAPCU%2BzCL3yKA%2BWY8%2FAp%2F8DP6gv9qwm5dRmoDs9VUb9VRdJg28mm5tGjMP%2B0vs54bBVC1MbLIqFmxdYt2JyieOVsKP%2BFhx2nauJH4AE808k6m75UL%2FRd%2BBm5uCrJbaEruIJrdTCK87b1ZDoE1ZghiJb6LyA3BLiMXM2NCRA1omHniQRNcOTAssSAdxy6F9Ta4cZUvXpGTVbfLlsMveFxLousdGBb4w%2BRkav8ne669%2FZvQ45Q1Cov62rNxGiTPlfWWyR2SvXvS8bl9hdVbSM%2F%2F%2Bx45%2BV3DJEjTOHwaqWA9I7BVf9%2FcIcGf7uDvXWCYAlm9O%2BVpMYNQrv2LAa4oxqnEt3%2BSxhuE0Nb44lfMtf8znx6vTHfkm3PrGfPeqJIsEj5ji8wYdWWn2DIm3Krz9zLiQ7SjEIwrVpfGQPoHt%2BqB9kmjARMgol%2B6zx0GshTV1f0Zt%2FM8tnZnd66kc1j7Fsuyr19fcPtoieAc6L6I99CzUQHGRJIWRp35NsQ4wOML3tFnMISV9sMGOqUBPcP13t5GbiETeNNTq1p9goWAhK3dzQKBYFYCAuBX2g3kXWSy88qdUWmvMmY3au5NUhXFXNQhKuAx0wJKDBKhm2cteNoNIlHIveyFxcV899Y%2BjjkY8t24EASJV6AXzfybnNG5H4zNdj%2FJHzulBWTPPo3QFE2bD2FbxUNfcvtAyygay6Q3ozA6ZS544FzCf0itRdLm2o4P8DQuWGSXW9F4NMi0VQpx&X-Amz-Signature=f5c56ab9dae240cb312e10e29e547e9e239a1d2fed1f06069dc2949e1e72cc3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EEMJG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T005000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPdRwvUzYHKx79HqWBzZ%2FtZLzGtUE0aYwAtBoFKhb%2BAIgQeKYtaPQWiuC48AryLF1utHbF8JdtGNKAXmQxxticJYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZvt064ZkHykJt1UCrcA%2Bwb5NaYS%2FW9st%2FsglyDFCx5MlgGiRggdGf7t2TWhE4KXqFXQpHEsrpsq8cGuEPyTSCVU295FZgTyMP4ABoJIZj%2BKqCjBVzAZ%2FqBp3LjUZ6vUTiK1hsxPhvinreWAPCU%2BzCL3yKA%2BWY8%2FAp%2F8DP6gv9qwm5dRmoDs9VUb9VRdJg28mm5tGjMP%2B0vs54bBVC1MbLIqFmxdYt2JyieOVsKP%2BFhx2nauJH4AE808k6m75UL%2FRd%2BBm5uCrJbaEruIJrdTCK87b1ZDoE1ZghiJb6LyA3BLiMXM2NCRA1omHniQRNcOTAssSAdxy6F9Ta4cZUvXpGTVbfLlsMveFxLousdGBb4w%2BRkav8ne669%2FZvQ45Q1Cov62rNxGiTPlfWWyR2SvXvS8bl9hdVbSM%2F%2F%2Bx45%2BV3DJEjTOHwaqWA9I7BVf9%2FcIcGf7uDvXWCYAlm9O%2BVpMYNQrv2LAa4oxqnEt3%2BSxhuE0Nb44lfMtf8znx6vTHfkm3PrGfPeqJIsEj5ji8wYdWWn2DIm3Krz9zLiQ7SjEIwrVpfGQPoHt%2BqB9kmjARMgol%2B6zx0GshTV1f0Zt%2FM8tnZnd66kc1j7Fsuyr19fcPtoieAc6L6I99CzUQHGRJIWRp35NsQ4wOML3tFnMISV9sMGOqUBPcP13t5GbiETeNNTq1p9goWAhK3dzQKBYFYCAuBX2g3kXWSy88qdUWmvMmY3au5NUhXFXNQhKuAx0wJKDBKhm2cteNoNIlHIveyFxcV899Y%2BjjkY8t24EASJV6AXzfybnNG5H4zNdj%2FJHzulBWTPPo3QFE2bD2FbxUNfcvtAyygay6Q3ozA6ZS544FzCf0itRdLm2o4P8DQuWGSXW9F4NMi0VQpx&X-Amz-Signature=b6948361e80fc2553ab0a68d0e6d957d3702ff2177ff11fa17fc1a827b70a245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EEMJG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T005000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPdRwvUzYHKx79HqWBzZ%2FtZLzGtUE0aYwAtBoFKhb%2BAIgQeKYtaPQWiuC48AryLF1utHbF8JdtGNKAXmQxxticJYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZvt064ZkHykJt1UCrcA%2Bwb5NaYS%2FW9st%2FsglyDFCx5MlgGiRggdGf7t2TWhE4KXqFXQpHEsrpsq8cGuEPyTSCVU295FZgTyMP4ABoJIZj%2BKqCjBVzAZ%2FqBp3LjUZ6vUTiK1hsxPhvinreWAPCU%2BzCL3yKA%2BWY8%2FAp%2F8DP6gv9qwm5dRmoDs9VUb9VRdJg28mm5tGjMP%2B0vs54bBVC1MbLIqFmxdYt2JyieOVsKP%2BFhx2nauJH4AE808k6m75UL%2FRd%2BBm5uCrJbaEruIJrdTCK87b1ZDoE1ZghiJb6LyA3BLiMXM2NCRA1omHniQRNcOTAssSAdxy6F9Ta4cZUvXpGTVbfLlsMveFxLousdGBb4w%2BRkav8ne669%2FZvQ45Q1Cov62rNxGiTPlfWWyR2SvXvS8bl9hdVbSM%2F%2F%2Bx45%2BV3DJEjTOHwaqWA9I7BVf9%2FcIcGf7uDvXWCYAlm9O%2BVpMYNQrv2LAa4oxqnEt3%2BSxhuE0Nb44lfMtf8znx6vTHfkm3PrGfPeqJIsEj5ji8wYdWWn2DIm3Krz9zLiQ7SjEIwrVpfGQPoHt%2BqB9kmjARMgol%2B6zx0GshTV1f0Zt%2FM8tnZnd66kc1j7Fsuyr19fcPtoieAc6L6I99CzUQHGRJIWRp35NsQ4wOML3tFnMISV9sMGOqUBPcP13t5GbiETeNNTq1p9goWAhK3dzQKBYFYCAuBX2g3kXWSy88qdUWmvMmY3au5NUhXFXNQhKuAx0wJKDBKhm2cteNoNIlHIveyFxcV899Y%2BjjkY8t24EASJV6AXzfybnNG5H4zNdj%2FJHzulBWTPPo3QFE2bD2FbxUNfcvtAyygay6Q3ozA6ZS544FzCf0itRdLm2o4P8DQuWGSXW9F4NMi0VQpx&X-Amz-Signature=6a69b4cf09025781d72352430e979a87a728e9102563e2471e6697416594867b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
