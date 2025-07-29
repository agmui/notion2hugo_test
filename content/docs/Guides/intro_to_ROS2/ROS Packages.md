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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEJGFBAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bapod90oeMm%2BR5UtxKxv9UxD%2BO4RTTrqTKlVbqQfxfwIgCUK1AqkY4EfMnR4u3fSY4HHrW2Wc4RlYM7aRF%2F%2FCM2kqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfEymdCPJB8xS7TSyrcA7M2edRs99gTkV49OUnGpAfPHk2JTkfGQRFniCY7bUE3LNaZZxQE92Jh0VFMmCj3moISpWzCnqGhloWIFa4XD%2BiYIyE7tVOEkBtSsgvF39jiC3yU32wY7ZTdDIb8gONgBReStpsF39%2FyEN9M1wJy1TgvdjovfRGVtgGvAnP0xqz%2BfA3rNmPAqkV0fLnG17%2ByjwtEixtax23FlkuFFlZsINWGrTr%2BoRdw4R6RVLVUs5ABO2KxGQbUe3PArWyAg9EQvuQV3u9tgZx1pr%2B5qAUQh6YL90fbOSmUKzaGh0qvBmzo5DWXVNKNMmdcQ0FZSEea7TMrqes4BqshsIIiDgAyyOqQoiPqEM7zuf4%2BkB8zglZfWZqKfGZ%2BgJo53lLnuD%2FexY9%2FoyXwBu8sfI%2FfuoXXN%2BZ3uJFzPaGyTG%2BtDBQ3rdqvtyXS4HFSEBE%2B6sDK7gH7ntZygKMH6qUSzDCIU%2F4BztGTRAOCZ8p1Vef1Yq2aH%2B9T3vn3zQsKriBVaO4pYXeGceSNYTYbMifRqbDLiXXgpDv2b%2F6AOZINmBgzCwFKifrqJ9BPdiVyKRkQfpxhrZsP0hzpGPVAW65JUaRDU6BSFIwpZoXyzpt7CpPj%2BT20h5YqDriqi77Vx%2BgOUdSqMO%2FcpMQGOqUBzQhAOcE80YHhUzmleTLxB7kDRrixKSGYbFZ9mdT7YhnIW%2BJyCHPIE%2B%2F2u04gH8cSbIOA6g2bZT6Dt5ZyFlGdQ0R190S%2Bq8mxRr9S%2B%2Bc2s47goIqY2%2FfGSPLAsCV7Q374Qeyw3Fh8RCfXXnHyGsPfFaODMuBdKfEnTdckvlFLzwZQkZaT0QA8QzvaYEKI%2BkIAFf%2BSC5vYLMGf9NbHnIa4JKJiUDkF&X-Amz-Signature=07462ca04a1906f04f3a2f71e0e3db23aaf3cbb45b885dff89e0325c61387b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEJGFBAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bapod90oeMm%2BR5UtxKxv9UxD%2BO4RTTrqTKlVbqQfxfwIgCUK1AqkY4EfMnR4u3fSY4HHrW2Wc4RlYM7aRF%2F%2FCM2kqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfEymdCPJB8xS7TSyrcA7M2edRs99gTkV49OUnGpAfPHk2JTkfGQRFniCY7bUE3LNaZZxQE92Jh0VFMmCj3moISpWzCnqGhloWIFa4XD%2BiYIyE7tVOEkBtSsgvF39jiC3yU32wY7ZTdDIb8gONgBReStpsF39%2FyEN9M1wJy1TgvdjovfRGVtgGvAnP0xqz%2BfA3rNmPAqkV0fLnG17%2ByjwtEixtax23FlkuFFlZsINWGrTr%2BoRdw4R6RVLVUs5ABO2KxGQbUe3PArWyAg9EQvuQV3u9tgZx1pr%2B5qAUQh6YL90fbOSmUKzaGh0qvBmzo5DWXVNKNMmdcQ0FZSEea7TMrqes4BqshsIIiDgAyyOqQoiPqEM7zuf4%2BkB8zglZfWZqKfGZ%2BgJo53lLnuD%2FexY9%2FoyXwBu8sfI%2FfuoXXN%2BZ3uJFzPaGyTG%2BtDBQ3rdqvtyXS4HFSEBE%2B6sDK7gH7ntZygKMH6qUSzDCIU%2F4BztGTRAOCZ8p1Vef1Yq2aH%2B9T3vn3zQsKriBVaO4pYXeGceSNYTYbMifRqbDLiXXgpDv2b%2F6AOZINmBgzCwFKifrqJ9BPdiVyKRkQfpxhrZsP0hzpGPVAW65JUaRDU6BSFIwpZoXyzpt7CpPj%2BT20h5YqDriqi77Vx%2BgOUdSqMO%2FcpMQGOqUBzQhAOcE80YHhUzmleTLxB7kDRrixKSGYbFZ9mdT7YhnIW%2BJyCHPIE%2B%2F2u04gH8cSbIOA6g2bZT6Dt5ZyFlGdQ0R190S%2Bq8mxRr9S%2B%2Bc2s47goIqY2%2FfGSPLAsCV7Q374Qeyw3Fh8RCfXXnHyGsPfFaODMuBdKfEnTdckvlFLzwZQkZaT0QA8QzvaYEKI%2BkIAFf%2BSC5vYLMGf9NbHnIa4JKJiUDkF&X-Amz-Signature=d30593d518fa4353d86a3bb4da247afa37258c995120d58d57ea5fd13deeb79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEJGFBAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bapod90oeMm%2BR5UtxKxv9UxD%2BO4RTTrqTKlVbqQfxfwIgCUK1AqkY4EfMnR4u3fSY4HHrW2Wc4RlYM7aRF%2F%2FCM2kqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfEymdCPJB8xS7TSyrcA7M2edRs99gTkV49OUnGpAfPHk2JTkfGQRFniCY7bUE3LNaZZxQE92Jh0VFMmCj3moISpWzCnqGhloWIFa4XD%2BiYIyE7tVOEkBtSsgvF39jiC3yU32wY7ZTdDIb8gONgBReStpsF39%2FyEN9M1wJy1TgvdjovfRGVtgGvAnP0xqz%2BfA3rNmPAqkV0fLnG17%2ByjwtEixtax23FlkuFFlZsINWGrTr%2BoRdw4R6RVLVUs5ABO2KxGQbUe3PArWyAg9EQvuQV3u9tgZx1pr%2B5qAUQh6YL90fbOSmUKzaGh0qvBmzo5DWXVNKNMmdcQ0FZSEea7TMrqes4BqshsIIiDgAyyOqQoiPqEM7zuf4%2BkB8zglZfWZqKfGZ%2BgJo53lLnuD%2FexY9%2FoyXwBu8sfI%2FfuoXXN%2BZ3uJFzPaGyTG%2BtDBQ3rdqvtyXS4HFSEBE%2B6sDK7gH7ntZygKMH6qUSzDCIU%2F4BztGTRAOCZ8p1Vef1Yq2aH%2B9T3vn3zQsKriBVaO4pYXeGceSNYTYbMifRqbDLiXXgpDv2b%2F6AOZINmBgzCwFKifrqJ9BPdiVyKRkQfpxhrZsP0hzpGPVAW65JUaRDU6BSFIwpZoXyzpt7CpPj%2BT20h5YqDriqi77Vx%2BgOUdSqMO%2FcpMQGOqUBzQhAOcE80YHhUzmleTLxB7kDRrixKSGYbFZ9mdT7YhnIW%2BJyCHPIE%2B%2F2u04gH8cSbIOA6g2bZT6Dt5ZyFlGdQ0R190S%2Bq8mxRr9S%2B%2Bc2s47goIqY2%2FfGSPLAsCV7Q374Qeyw3Fh8RCfXXnHyGsPfFaODMuBdKfEnTdckvlFLzwZQkZaT0QA8QzvaYEKI%2BkIAFf%2BSC5vYLMGf9NbHnIa4JKJiUDkF&X-Amz-Signature=7b89bf3d69a29b4c1cb804b1f3e84c338535b63c280938162101effaa308a9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEJGFBAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bapod90oeMm%2BR5UtxKxv9UxD%2BO4RTTrqTKlVbqQfxfwIgCUK1AqkY4EfMnR4u3fSY4HHrW2Wc4RlYM7aRF%2F%2FCM2kqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfEymdCPJB8xS7TSyrcA7M2edRs99gTkV49OUnGpAfPHk2JTkfGQRFniCY7bUE3LNaZZxQE92Jh0VFMmCj3moISpWzCnqGhloWIFa4XD%2BiYIyE7tVOEkBtSsgvF39jiC3yU32wY7ZTdDIb8gONgBReStpsF39%2FyEN9M1wJy1TgvdjovfRGVtgGvAnP0xqz%2BfA3rNmPAqkV0fLnG17%2ByjwtEixtax23FlkuFFlZsINWGrTr%2BoRdw4R6RVLVUs5ABO2KxGQbUe3PArWyAg9EQvuQV3u9tgZx1pr%2B5qAUQh6YL90fbOSmUKzaGh0qvBmzo5DWXVNKNMmdcQ0FZSEea7TMrqes4BqshsIIiDgAyyOqQoiPqEM7zuf4%2BkB8zglZfWZqKfGZ%2BgJo53lLnuD%2FexY9%2FoyXwBu8sfI%2FfuoXXN%2BZ3uJFzPaGyTG%2BtDBQ3rdqvtyXS4HFSEBE%2B6sDK7gH7ntZygKMH6qUSzDCIU%2F4BztGTRAOCZ8p1Vef1Yq2aH%2B9T3vn3zQsKriBVaO4pYXeGceSNYTYbMifRqbDLiXXgpDv2b%2F6AOZINmBgzCwFKifrqJ9BPdiVyKRkQfpxhrZsP0hzpGPVAW65JUaRDU6BSFIwpZoXyzpt7CpPj%2BT20h5YqDriqi77Vx%2BgOUdSqMO%2FcpMQGOqUBzQhAOcE80YHhUzmleTLxB7kDRrixKSGYbFZ9mdT7YhnIW%2BJyCHPIE%2B%2F2u04gH8cSbIOA6g2bZT6Dt5ZyFlGdQ0R190S%2Bq8mxRr9S%2B%2Bc2s47goIqY2%2FfGSPLAsCV7Q374Qeyw3Fh8RCfXXnHyGsPfFaODMuBdKfEnTdckvlFLzwZQkZaT0QA8QzvaYEKI%2BkIAFf%2BSC5vYLMGf9NbHnIa4JKJiUDkF&X-Amz-Signature=c9ac746cfb01c627e6157a1d6eeb83248a95ef77bab063c0f215a504ab17d2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEJGFBAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bapod90oeMm%2BR5UtxKxv9UxD%2BO4RTTrqTKlVbqQfxfwIgCUK1AqkY4EfMnR4u3fSY4HHrW2Wc4RlYM7aRF%2F%2FCM2kqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfEymdCPJB8xS7TSyrcA7M2edRs99gTkV49OUnGpAfPHk2JTkfGQRFniCY7bUE3LNaZZxQE92Jh0VFMmCj3moISpWzCnqGhloWIFa4XD%2BiYIyE7tVOEkBtSsgvF39jiC3yU32wY7ZTdDIb8gONgBReStpsF39%2FyEN9M1wJy1TgvdjovfRGVtgGvAnP0xqz%2BfA3rNmPAqkV0fLnG17%2ByjwtEixtax23FlkuFFlZsINWGrTr%2BoRdw4R6RVLVUs5ABO2KxGQbUe3PArWyAg9EQvuQV3u9tgZx1pr%2B5qAUQh6YL90fbOSmUKzaGh0qvBmzo5DWXVNKNMmdcQ0FZSEea7TMrqes4BqshsIIiDgAyyOqQoiPqEM7zuf4%2BkB8zglZfWZqKfGZ%2BgJo53lLnuD%2FexY9%2FoyXwBu8sfI%2FfuoXXN%2BZ3uJFzPaGyTG%2BtDBQ3rdqvtyXS4HFSEBE%2B6sDK7gH7ntZygKMH6qUSzDCIU%2F4BztGTRAOCZ8p1Vef1Yq2aH%2B9T3vn3zQsKriBVaO4pYXeGceSNYTYbMifRqbDLiXXgpDv2b%2F6AOZINmBgzCwFKifrqJ9BPdiVyKRkQfpxhrZsP0hzpGPVAW65JUaRDU6BSFIwpZoXyzpt7CpPj%2BT20h5YqDriqi77Vx%2BgOUdSqMO%2FcpMQGOqUBzQhAOcE80YHhUzmleTLxB7kDRrixKSGYbFZ9mdT7YhnIW%2BJyCHPIE%2B%2F2u04gH8cSbIOA6g2bZT6Dt5ZyFlGdQ0R190S%2Bq8mxRr9S%2B%2Bc2s47goIqY2%2FfGSPLAsCV7Q374Qeyw3Fh8RCfXXnHyGsPfFaODMuBdKfEnTdckvlFLzwZQkZaT0QA8QzvaYEKI%2BkIAFf%2BSC5vYLMGf9NbHnIa4JKJiUDkF&X-Amz-Signature=13342316b9143896eca5f062c14981f20aed5228fa0f2b08d64f583bb5a099b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEJGFBAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bapod90oeMm%2BR5UtxKxv9UxD%2BO4RTTrqTKlVbqQfxfwIgCUK1AqkY4EfMnR4u3fSY4HHrW2Wc4RlYM7aRF%2F%2FCM2kqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfEymdCPJB8xS7TSyrcA7M2edRs99gTkV49OUnGpAfPHk2JTkfGQRFniCY7bUE3LNaZZxQE92Jh0VFMmCj3moISpWzCnqGhloWIFa4XD%2BiYIyE7tVOEkBtSsgvF39jiC3yU32wY7ZTdDIb8gONgBReStpsF39%2FyEN9M1wJy1TgvdjovfRGVtgGvAnP0xqz%2BfA3rNmPAqkV0fLnG17%2ByjwtEixtax23FlkuFFlZsINWGrTr%2BoRdw4R6RVLVUs5ABO2KxGQbUe3PArWyAg9EQvuQV3u9tgZx1pr%2B5qAUQh6YL90fbOSmUKzaGh0qvBmzo5DWXVNKNMmdcQ0FZSEea7TMrqes4BqshsIIiDgAyyOqQoiPqEM7zuf4%2BkB8zglZfWZqKfGZ%2BgJo53lLnuD%2FexY9%2FoyXwBu8sfI%2FfuoXXN%2BZ3uJFzPaGyTG%2BtDBQ3rdqvtyXS4HFSEBE%2B6sDK7gH7ntZygKMH6qUSzDCIU%2F4BztGTRAOCZ8p1Vef1Yq2aH%2B9T3vn3zQsKriBVaO4pYXeGceSNYTYbMifRqbDLiXXgpDv2b%2F6AOZINmBgzCwFKifrqJ9BPdiVyKRkQfpxhrZsP0hzpGPVAW65JUaRDU6BSFIwpZoXyzpt7CpPj%2BT20h5YqDriqi77Vx%2BgOUdSqMO%2FcpMQGOqUBzQhAOcE80YHhUzmleTLxB7kDRrixKSGYbFZ9mdT7YhnIW%2BJyCHPIE%2B%2F2u04gH8cSbIOA6g2bZT6Dt5ZyFlGdQ0R190S%2Bq8mxRr9S%2B%2Bc2s47goIqY2%2FfGSPLAsCV7Q374Qeyw3Fh8RCfXXnHyGsPfFaODMuBdKfEnTdckvlFLzwZQkZaT0QA8QzvaYEKI%2BkIAFf%2BSC5vYLMGf9NbHnIa4JKJiUDkF&X-Amz-Signature=c9cd0e1a33f0f747b6775a84fb7cfc0624a7bee450f20c80173b3479b0d3a6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEJGFBAA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bapod90oeMm%2BR5UtxKxv9UxD%2BO4RTTrqTKlVbqQfxfwIgCUK1AqkY4EfMnR4u3fSY4HHrW2Wc4RlYM7aRF%2F%2FCM2kqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfEymdCPJB8xS7TSyrcA7M2edRs99gTkV49OUnGpAfPHk2JTkfGQRFniCY7bUE3LNaZZxQE92Jh0VFMmCj3moISpWzCnqGhloWIFa4XD%2BiYIyE7tVOEkBtSsgvF39jiC3yU32wY7ZTdDIb8gONgBReStpsF39%2FyEN9M1wJy1TgvdjovfRGVtgGvAnP0xqz%2BfA3rNmPAqkV0fLnG17%2ByjwtEixtax23FlkuFFlZsINWGrTr%2BoRdw4R6RVLVUs5ABO2KxGQbUe3PArWyAg9EQvuQV3u9tgZx1pr%2B5qAUQh6YL90fbOSmUKzaGh0qvBmzo5DWXVNKNMmdcQ0FZSEea7TMrqes4BqshsIIiDgAyyOqQoiPqEM7zuf4%2BkB8zglZfWZqKfGZ%2BgJo53lLnuD%2FexY9%2FoyXwBu8sfI%2FfuoXXN%2BZ3uJFzPaGyTG%2BtDBQ3rdqvtyXS4HFSEBE%2B6sDK7gH7ntZygKMH6qUSzDCIU%2F4BztGTRAOCZ8p1Vef1Yq2aH%2B9T3vn3zQsKriBVaO4pYXeGceSNYTYbMifRqbDLiXXgpDv2b%2F6AOZINmBgzCwFKifrqJ9BPdiVyKRkQfpxhrZsP0hzpGPVAW65JUaRDU6BSFIwpZoXyzpt7CpPj%2BT20h5YqDriqi77Vx%2BgOUdSqMO%2FcpMQGOqUBzQhAOcE80YHhUzmleTLxB7kDRrixKSGYbFZ9mdT7YhnIW%2BJyCHPIE%2B%2F2u04gH8cSbIOA6g2bZT6Dt5ZyFlGdQ0R190S%2Bq8mxRr9S%2B%2Bc2s47goIqY2%2FfGSPLAsCV7Q374Qeyw3Fh8RCfXXnHyGsPfFaODMuBdKfEnTdckvlFLzwZQkZaT0QA8QzvaYEKI%2BkIAFf%2BSC5vYLMGf9NbHnIa4JKJiUDkF&X-Amz-Signature=90072c5b89a63a753078b822e6341b491d778881469e79806fc9314d81ae165f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
