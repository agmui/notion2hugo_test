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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQ7HYSW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWB0JJm7sTxVdcrYQa%2BTcKpTA2RyfuAgI2hUXKJde6hAiBvfBrMVuF5z9UrsktitRSbmItauIVieHRJw8%2BCTwiSPCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFW7pxWWMw%2FlYWElKtwDPowLm6uDkWU%2FOJl6NZ7aP5l0t0QbI8MlJFX4ZIBIZaFr3k350HxtvDOFdHpMCBSTHyNQa3RxDaO%2BP1DdxkAKJjVoOJU6MXy86S7yRCIR7yV6kE4Di0gN9zT8oPGaognWWe8ePIHebape0BDDfhq9xDMxH5GRxW%2BnR3hhGN8Ko55wLpnM0cFBS2sJp2XwTSe%2Fj6kVM8aGCKWBuW7swzKFH7N0XcmiJ5fMddejDhu34E2C4GjhSxlhrsGs%2FXiJAMul0A1SQE9mn2ppd3RX2HtY3FfiE6c8iwx%2BceAwTLsmp7I6CkgYg827HN44heLyM%2BU8klXOgYHzCiqY6LptKhPnIa25SHkAxIxSzeVVS%2Fm40%2FY0bVnE8EKQJ2n3Z7PHoguAyd2Qaxs3r1EVsf5513DmoNIyX8MD4GbnU5P%2BQKSxt0ex6dSHm96%2FLl9ltfCX6SfIcok1wKBWT3oFvNZLTmW9St%2BLrM5W8VuHccNovlJfzAaL4i%2FDqgpBj%2BI7A0RsbjM3pzGCyY97%2FIFljsTrv7%2F3%2FxzNXtfIFW%2BsKlIc9s2EarmjLuJhmWSTwvVkw5xYpNExJ%2F4Z7ZogwQ6NuPRscKFOHmhytNZeKTyaWKG7vD54mcYDqtRrlmqBgK28CFgwzvXMvgY6pgFNv6ffGreoeVZ9iViIQuElfNvPOcJ1959Zd33qri6Wqet1jtFNEnsXyGgAtPqTp0Ek1bd4EY%2B%2Fx%2FQ2IWseSmsQgbrz27UZm14aB5z3Bn62RPZVBSYGex2TaNxzfZMXozjvEsAzC5hqasZ83Fli%2F0NzdbXR%2FPu0aH39WYhKYKK4ZQXvFGN5g%2FzVdvGQXJGs2%2B6ulxawZxSwQrS4Q51vftvCUqHvrMsn&X-Amz-Signature=e31516841ca493937d503cc7daaffbdaff784fd6d2af6a70e6de6b5675f3a001&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQ7HYSW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWB0JJm7sTxVdcrYQa%2BTcKpTA2RyfuAgI2hUXKJde6hAiBvfBrMVuF5z9UrsktitRSbmItauIVieHRJw8%2BCTwiSPCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFW7pxWWMw%2FlYWElKtwDPowLm6uDkWU%2FOJl6NZ7aP5l0t0QbI8MlJFX4ZIBIZaFr3k350HxtvDOFdHpMCBSTHyNQa3RxDaO%2BP1DdxkAKJjVoOJU6MXy86S7yRCIR7yV6kE4Di0gN9zT8oPGaognWWe8ePIHebape0BDDfhq9xDMxH5GRxW%2BnR3hhGN8Ko55wLpnM0cFBS2sJp2XwTSe%2Fj6kVM8aGCKWBuW7swzKFH7N0XcmiJ5fMddejDhu34E2C4GjhSxlhrsGs%2FXiJAMul0A1SQE9mn2ppd3RX2HtY3FfiE6c8iwx%2BceAwTLsmp7I6CkgYg827HN44heLyM%2BU8klXOgYHzCiqY6LptKhPnIa25SHkAxIxSzeVVS%2Fm40%2FY0bVnE8EKQJ2n3Z7PHoguAyd2Qaxs3r1EVsf5513DmoNIyX8MD4GbnU5P%2BQKSxt0ex6dSHm96%2FLl9ltfCX6SfIcok1wKBWT3oFvNZLTmW9St%2BLrM5W8VuHccNovlJfzAaL4i%2FDqgpBj%2BI7A0RsbjM3pzGCyY97%2FIFljsTrv7%2F3%2FxzNXtfIFW%2BsKlIc9s2EarmjLuJhmWSTwvVkw5xYpNExJ%2F4Z7ZogwQ6NuPRscKFOHmhytNZeKTyaWKG7vD54mcYDqtRrlmqBgK28CFgwzvXMvgY6pgFNv6ffGreoeVZ9iViIQuElfNvPOcJ1959Zd33qri6Wqet1jtFNEnsXyGgAtPqTp0Ek1bd4EY%2B%2Fx%2FQ2IWseSmsQgbrz27UZm14aB5z3Bn62RPZVBSYGex2TaNxzfZMXozjvEsAzC5hqasZ83Fli%2F0NzdbXR%2FPu0aH39WYhKYKK4ZQXvFGN5g%2FzVdvGQXJGs2%2B6ulxawZxSwQrS4Q51vftvCUqHvrMsn&X-Amz-Signature=992f04eb013b8a5b3dc57d927d9159b51f9242068b3ec711313db870da445627&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQ7HYSW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWB0JJm7sTxVdcrYQa%2BTcKpTA2RyfuAgI2hUXKJde6hAiBvfBrMVuF5z9UrsktitRSbmItauIVieHRJw8%2BCTwiSPCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFW7pxWWMw%2FlYWElKtwDPowLm6uDkWU%2FOJl6NZ7aP5l0t0QbI8MlJFX4ZIBIZaFr3k350HxtvDOFdHpMCBSTHyNQa3RxDaO%2BP1DdxkAKJjVoOJU6MXy86S7yRCIR7yV6kE4Di0gN9zT8oPGaognWWe8ePIHebape0BDDfhq9xDMxH5GRxW%2BnR3hhGN8Ko55wLpnM0cFBS2sJp2XwTSe%2Fj6kVM8aGCKWBuW7swzKFH7N0XcmiJ5fMddejDhu34E2C4GjhSxlhrsGs%2FXiJAMul0A1SQE9mn2ppd3RX2HtY3FfiE6c8iwx%2BceAwTLsmp7I6CkgYg827HN44heLyM%2BU8klXOgYHzCiqY6LptKhPnIa25SHkAxIxSzeVVS%2Fm40%2FY0bVnE8EKQJ2n3Z7PHoguAyd2Qaxs3r1EVsf5513DmoNIyX8MD4GbnU5P%2BQKSxt0ex6dSHm96%2FLl9ltfCX6SfIcok1wKBWT3oFvNZLTmW9St%2BLrM5W8VuHccNovlJfzAaL4i%2FDqgpBj%2BI7A0RsbjM3pzGCyY97%2FIFljsTrv7%2F3%2FxzNXtfIFW%2BsKlIc9s2EarmjLuJhmWSTwvVkw5xYpNExJ%2F4Z7ZogwQ6NuPRscKFOHmhytNZeKTyaWKG7vD54mcYDqtRrlmqBgK28CFgwzvXMvgY6pgFNv6ffGreoeVZ9iViIQuElfNvPOcJ1959Zd33qri6Wqet1jtFNEnsXyGgAtPqTp0Ek1bd4EY%2B%2Fx%2FQ2IWseSmsQgbrz27UZm14aB5z3Bn62RPZVBSYGex2TaNxzfZMXozjvEsAzC5hqasZ83Fli%2F0NzdbXR%2FPu0aH39WYhKYKK4ZQXvFGN5g%2FzVdvGQXJGs2%2B6ulxawZxSwQrS4Q51vftvCUqHvrMsn&X-Amz-Signature=4be9666e2cd7e553bed492c29f126b108b84af69514e797fb466769459cc4f31&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQ7HYSW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWB0JJm7sTxVdcrYQa%2BTcKpTA2RyfuAgI2hUXKJde6hAiBvfBrMVuF5z9UrsktitRSbmItauIVieHRJw8%2BCTwiSPCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFW7pxWWMw%2FlYWElKtwDPowLm6uDkWU%2FOJl6NZ7aP5l0t0QbI8MlJFX4ZIBIZaFr3k350HxtvDOFdHpMCBSTHyNQa3RxDaO%2BP1DdxkAKJjVoOJU6MXy86S7yRCIR7yV6kE4Di0gN9zT8oPGaognWWe8ePIHebape0BDDfhq9xDMxH5GRxW%2BnR3hhGN8Ko55wLpnM0cFBS2sJp2XwTSe%2Fj6kVM8aGCKWBuW7swzKFH7N0XcmiJ5fMddejDhu34E2C4GjhSxlhrsGs%2FXiJAMul0A1SQE9mn2ppd3RX2HtY3FfiE6c8iwx%2BceAwTLsmp7I6CkgYg827HN44heLyM%2BU8klXOgYHzCiqY6LptKhPnIa25SHkAxIxSzeVVS%2Fm40%2FY0bVnE8EKQJ2n3Z7PHoguAyd2Qaxs3r1EVsf5513DmoNIyX8MD4GbnU5P%2BQKSxt0ex6dSHm96%2FLl9ltfCX6SfIcok1wKBWT3oFvNZLTmW9St%2BLrM5W8VuHccNovlJfzAaL4i%2FDqgpBj%2BI7A0RsbjM3pzGCyY97%2FIFljsTrv7%2F3%2FxzNXtfIFW%2BsKlIc9s2EarmjLuJhmWSTwvVkw5xYpNExJ%2F4Z7ZogwQ6NuPRscKFOHmhytNZeKTyaWKG7vD54mcYDqtRrlmqBgK28CFgwzvXMvgY6pgFNv6ffGreoeVZ9iViIQuElfNvPOcJ1959Zd33qri6Wqet1jtFNEnsXyGgAtPqTp0Ek1bd4EY%2B%2Fx%2FQ2IWseSmsQgbrz27UZm14aB5z3Bn62RPZVBSYGex2TaNxzfZMXozjvEsAzC5hqasZ83Fli%2F0NzdbXR%2FPu0aH39WYhKYKK4ZQXvFGN5g%2FzVdvGQXJGs2%2B6ulxawZxSwQrS4Q51vftvCUqHvrMsn&X-Amz-Signature=b51d5347b1df4b80f4ad362deb5013b93599ce5c1687e47526d1740ecc48f8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQ7HYSW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWB0JJm7sTxVdcrYQa%2BTcKpTA2RyfuAgI2hUXKJde6hAiBvfBrMVuF5z9UrsktitRSbmItauIVieHRJw8%2BCTwiSPCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFW7pxWWMw%2FlYWElKtwDPowLm6uDkWU%2FOJl6NZ7aP5l0t0QbI8MlJFX4ZIBIZaFr3k350HxtvDOFdHpMCBSTHyNQa3RxDaO%2BP1DdxkAKJjVoOJU6MXy86S7yRCIR7yV6kE4Di0gN9zT8oPGaognWWe8ePIHebape0BDDfhq9xDMxH5GRxW%2BnR3hhGN8Ko55wLpnM0cFBS2sJp2XwTSe%2Fj6kVM8aGCKWBuW7swzKFH7N0XcmiJ5fMddejDhu34E2C4GjhSxlhrsGs%2FXiJAMul0A1SQE9mn2ppd3RX2HtY3FfiE6c8iwx%2BceAwTLsmp7I6CkgYg827HN44heLyM%2BU8klXOgYHzCiqY6LptKhPnIa25SHkAxIxSzeVVS%2Fm40%2FY0bVnE8EKQJ2n3Z7PHoguAyd2Qaxs3r1EVsf5513DmoNIyX8MD4GbnU5P%2BQKSxt0ex6dSHm96%2FLl9ltfCX6SfIcok1wKBWT3oFvNZLTmW9St%2BLrM5W8VuHccNovlJfzAaL4i%2FDqgpBj%2BI7A0RsbjM3pzGCyY97%2FIFljsTrv7%2F3%2FxzNXtfIFW%2BsKlIc9s2EarmjLuJhmWSTwvVkw5xYpNExJ%2F4Z7ZogwQ6NuPRscKFOHmhytNZeKTyaWKG7vD54mcYDqtRrlmqBgK28CFgwzvXMvgY6pgFNv6ffGreoeVZ9iViIQuElfNvPOcJ1959Zd33qri6Wqet1jtFNEnsXyGgAtPqTp0Ek1bd4EY%2B%2Fx%2FQ2IWseSmsQgbrz27UZm14aB5z3Bn62RPZVBSYGex2TaNxzfZMXozjvEsAzC5hqasZ83Fli%2F0NzdbXR%2FPu0aH39WYhKYKK4ZQXvFGN5g%2FzVdvGQXJGs2%2B6ulxawZxSwQrS4Q51vftvCUqHvrMsn&X-Amz-Signature=8a2a660e09474df46e0329e8347a3c6395ed21502a23e30b6c983df922ddec78&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQ7HYSW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWB0JJm7sTxVdcrYQa%2BTcKpTA2RyfuAgI2hUXKJde6hAiBvfBrMVuF5z9UrsktitRSbmItauIVieHRJw8%2BCTwiSPCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFW7pxWWMw%2FlYWElKtwDPowLm6uDkWU%2FOJl6NZ7aP5l0t0QbI8MlJFX4ZIBIZaFr3k350HxtvDOFdHpMCBSTHyNQa3RxDaO%2BP1DdxkAKJjVoOJU6MXy86S7yRCIR7yV6kE4Di0gN9zT8oPGaognWWe8ePIHebape0BDDfhq9xDMxH5GRxW%2BnR3hhGN8Ko55wLpnM0cFBS2sJp2XwTSe%2Fj6kVM8aGCKWBuW7swzKFH7N0XcmiJ5fMddejDhu34E2C4GjhSxlhrsGs%2FXiJAMul0A1SQE9mn2ppd3RX2HtY3FfiE6c8iwx%2BceAwTLsmp7I6CkgYg827HN44heLyM%2BU8klXOgYHzCiqY6LptKhPnIa25SHkAxIxSzeVVS%2Fm40%2FY0bVnE8EKQJ2n3Z7PHoguAyd2Qaxs3r1EVsf5513DmoNIyX8MD4GbnU5P%2BQKSxt0ex6dSHm96%2FLl9ltfCX6SfIcok1wKBWT3oFvNZLTmW9St%2BLrM5W8VuHccNovlJfzAaL4i%2FDqgpBj%2BI7A0RsbjM3pzGCyY97%2FIFljsTrv7%2F3%2FxzNXtfIFW%2BsKlIc9s2EarmjLuJhmWSTwvVkw5xYpNExJ%2F4Z7ZogwQ6NuPRscKFOHmhytNZeKTyaWKG7vD54mcYDqtRrlmqBgK28CFgwzvXMvgY6pgFNv6ffGreoeVZ9iViIQuElfNvPOcJ1959Zd33qri6Wqet1jtFNEnsXyGgAtPqTp0Ek1bd4EY%2B%2Fx%2FQ2IWseSmsQgbrz27UZm14aB5z3Bn62RPZVBSYGex2TaNxzfZMXozjvEsAzC5hqasZ83Fli%2F0NzdbXR%2FPu0aH39WYhKYKK4ZQXvFGN5g%2FzVdvGQXJGs2%2B6ulxawZxSwQrS4Q51vftvCUqHvrMsn&X-Amz-Signature=0d7de8fbb5fafb5763a28c104e9f3389b10d89f849fd1af43ea825aac5343155&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZQ7HYSW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWB0JJm7sTxVdcrYQa%2BTcKpTA2RyfuAgI2hUXKJde6hAiBvfBrMVuF5z9UrsktitRSbmItauIVieHRJw8%2BCTwiSPCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfFW7pxWWMw%2FlYWElKtwDPowLm6uDkWU%2FOJl6NZ7aP5l0t0QbI8MlJFX4ZIBIZaFr3k350HxtvDOFdHpMCBSTHyNQa3RxDaO%2BP1DdxkAKJjVoOJU6MXy86S7yRCIR7yV6kE4Di0gN9zT8oPGaognWWe8ePIHebape0BDDfhq9xDMxH5GRxW%2BnR3hhGN8Ko55wLpnM0cFBS2sJp2XwTSe%2Fj6kVM8aGCKWBuW7swzKFH7N0XcmiJ5fMddejDhu34E2C4GjhSxlhrsGs%2FXiJAMul0A1SQE9mn2ppd3RX2HtY3FfiE6c8iwx%2BceAwTLsmp7I6CkgYg827HN44heLyM%2BU8klXOgYHzCiqY6LptKhPnIa25SHkAxIxSzeVVS%2Fm40%2FY0bVnE8EKQJ2n3Z7PHoguAyd2Qaxs3r1EVsf5513DmoNIyX8MD4GbnU5P%2BQKSxt0ex6dSHm96%2FLl9ltfCX6SfIcok1wKBWT3oFvNZLTmW9St%2BLrM5W8VuHccNovlJfzAaL4i%2FDqgpBj%2BI7A0RsbjM3pzGCyY97%2FIFljsTrv7%2F3%2FxzNXtfIFW%2BsKlIc9s2EarmjLuJhmWSTwvVkw5xYpNExJ%2F4Z7ZogwQ6NuPRscKFOHmhytNZeKTyaWKG7vD54mcYDqtRrlmqBgK28CFgwzvXMvgY6pgFNv6ffGreoeVZ9iViIQuElfNvPOcJ1959Zd33qri6Wqet1jtFNEnsXyGgAtPqTp0Ek1bd4EY%2B%2Fx%2FQ2IWseSmsQgbrz27UZm14aB5z3Bn62RPZVBSYGex2TaNxzfZMXozjvEsAzC5hqasZ83Fli%2F0NzdbXR%2FPu0aH39WYhKYKK4ZQXvFGN5g%2FzVdvGQXJGs2%2B6ulxawZxSwQrS4Q51vftvCUqHvrMsn&X-Amz-Signature=9a31fdd8b18e4302142115c1836a7e38c3e6f24c13315d845fad2bf559f62b06&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
