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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOWW62Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWx%2FFCVYfUH9UO5LJPDYTcIpAjyArDPDZYER8%2B7mohAIgJdj8wVj%2FRuEQpr09lqHBfxL4Vd543uuF8mif1jUJIHkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkpdOwJxI7%2BPQRe1yrcA2WQPRQ7sv9xQV9zuz%2Bh9iMeN%2BsRMi3Q13r%2B3jIAwyfblgpajXLAQpN5QYBQJAR7BO1Mav0ruaev1%2BEwsM%2F1KvALraRk%2FvwJ4DwZ%2BkwE2QaLFaVNYc18kOZRDXY9bd8w7tUvm3hbmFR%2Fk2wQVX7xI1H7W2hKR2nbihPqRV2h44sYE3FRFoGL4mhINzt1g1sJhf8qrKMaDIh5Vr%2FUcu%2B8Gc%2F5nry2uALRhwNNpAhBNBo9VkQ8aCJ6zLviDlOp0KarY2I2wZlOFZZeZq4tg%2F8746AAjoAo23eXAg6aucp4YShrywJng2aCaPKMXHHgB7mYuiN7bB3zK2hEpnPWOUTj2qCnpgw3hhpvWkLbaHftOHPI7ynS61B7QADxCiAyvsW%2F3HXxAACejIFUNIykr02x7A8Pee7yXHxii87H8sgS7LgqBWn19URjW3jC2zy9CYMIDkvfGnppGxBOSdg2Qzjl%2F7837MT7HXiTzH27PL%2BkEoL0Uk9NHuYCg00bujEvg2PVMrFK1vyqVIu%2BJtZo%2BCtUZkaGe%2FThS17eVOyE5N1oIe2dcqvHbCG06lZ%2B0iDAKAJ4jt%2FL80mA9cWS6MU9EJmkp3JZ5zhQVj9GespLCBAyi6AAksKUzKuYxT5c7d0QMJ%2B4rsQGOqUByE03kAe9sMOjEzHFGoge4b2%2BzEVi4iDlh0ZuiADfkfDUagw3sneiOH05Yt4Cd6hyXsBVPDQ0zDyI41ytba%2FRqv0x2VvJKKPSnYKf55CLwpzuLk7RYX9B%2BtgdrK0I%2FTo3CtTNFEwNZyuSEW4Q4Z9gBtaXH2Vc0OasS7FO8UrJ2zVeP4gAnx2KquKJGv1OQqalv7uL%2BlJHK2y%2FyOEFAf%2FNLHQU1AB0&X-Amz-Signature=ac9493457e8d97ce1aa847683212eb2e65518d6cddf9f5a7701c84e745e19133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOWW62Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWx%2FFCVYfUH9UO5LJPDYTcIpAjyArDPDZYER8%2B7mohAIgJdj8wVj%2FRuEQpr09lqHBfxL4Vd543uuF8mif1jUJIHkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkpdOwJxI7%2BPQRe1yrcA2WQPRQ7sv9xQV9zuz%2Bh9iMeN%2BsRMi3Q13r%2B3jIAwyfblgpajXLAQpN5QYBQJAR7BO1Mav0ruaev1%2BEwsM%2F1KvALraRk%2FvwJ4DwZ%2BkwE2QaLFaVNYc18kOZRDXY9bd8w7tUvm3hbmFR%2Fk2wQVX7xI1H7W2hKR2nbihPqRV2h44sYE3FRFoGL4mhINzt1g1sJhf8qrKMaDIh5Vr%2FUcu%2B8Gc%2F5nry2uALRhwNNpAhBNBo9VkQ8aCJ6zLviDlOp0KarY2I2wZlOFZZeZq4tg%2F8746AAjoAo23eXAg6aucp4YShrywJng2aCaPKMXHHgB7mYuiN7bB3zK2hEpnPWOUTj2qCnpgw3hhpvWkLbaHftOHPI7ynS61B7QADxCiAyvsW%2F3HXxAACejIFUNIykr02x7A8Pee7yXHxii87H8sgS7LgqBWn19URjW3jC2zy9CYMIDkvfGnppGxBOSdg2Qzjl%2F7837MT7HXiTzH27PL%2BkEoL0Uk9NHuYCg00bujEvg2PVMrFK1vyqVIu%2BJtZo%2BCtUZkaGe%2FThS17eVOyE5N1oIe2dcqvHbCG06lZ%2B0iDAKAJ4jt%2FL80mA9cWS6MU9EJmkp3JZ5zhQVj9GespLCBAyi6AAksKUzKuYxT5c7d0QMJ%2B4rsQGOqUByE03kAe9sMOjEzHFGoge4b2%2BzEVi4iDlh0ZuiADfkfDUagw3sneiOH05Yt4Cd6hyXsBVPDQ0zDyI41ytba%2FRqv0x2VvJKKPSnYKf55CLwpzuLk7RYX9B%2BtgdrK0I%2FTo3CtTNFEwNZyuSEW4Q4Z9gBtaXH2Vc0OasS7FO8UrJ2zVeP4gAnx2KquKJGv1OQqalv7uL%2BlJHK2y%2FyOEFAf%2FNLHQU1AB0&X-Amz-Signature=91332af42b5fc903deb20eaee04c2e1571d370b521c5ae4b824baf121676dcbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOWW62Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWx%2FFCVYfUH9UO5LJPDYTcIpAjyArDPDZYER8%2B7mohAIgJdj8wVj%2FRuEQpr09lqHBfxL4Vd543uuF8mif1jUJIHkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkpdOwJxI7%2BPQRe1yrcA2WQPRQ7sv9xQV9zuz%2Bh9iMeN%2BsRMi3Q13r%2B3jIAwyfblgpajXLAQpN5QYBQJAR7BO1Mav0ruaev1%2BEwsM%2F1KvALraRk%2FvwJ4DwZ%2BkwE2QaLFaVNYc18kOZRDXY9bd8w7tUvm3hbmFR%2Fk2wQVX7xI1H7W2hKR2nbihPqRV2h44sYE3FRFoGL4mhINzt1g1sJhf8qrKMaDIh5Vr%2FUcu%2B8Gc%2F5nry2uALRhwNNpAhBNBo9VkQ8aCJ6zLviDlOp0KarY2I2wZlOFZZeZq4tg%2F8746AAjoAo23eXAg6aucp4YShrywJng2aCaPKMXHHgB7mYuiN7bB3zK2hEpnPWOUTj2qCnpgw3hhpvWkLbaHftOHPI7ynS61B7QADxCiAyvsW%2F3HXxAACejIFUNIykr02x7A8Pee7yXHxii87H8sgS7LgqBWn19URjW3jC2zy9CYMIDkvfGnppGxBOSdg2Qzjl%2F7837MT7HXiTzH27PL%2BkEoL0Uk9NHuYCg00bujEvg2PVMrFK1vyqVIu%2BJtZo%2BCtUZkaGe%2FThS17eVOyE5N1oIe2dcqvHbCG06lZ%2B0iDAKAJ4jt%2FL80mA9cWS6MU9EJmkp3JZ5zhQVj9GespLCBAyi6AAksKUzKuYxT5c7d0QMJ%2B4rsQGOqUByE03kAe9sMOjEzHFGoge4b2%2BzEVi4iDlh0ZuiADfkfDUagw3sneiOH05Yt4Cd6hyXsBVPDQ0zDyI41ytba%2FRqv0x2VvJKKPSnYKf55CLwpzuLk7RYX9B%2BtgdrK0I%2FTo3CtTNFEwNZyuSEW4Q4Z9gBtaXH2Vc0OasS7FO8UrJ2zVeP4gAnx2KquKJGv1OQqalv7uL%2BlJHK2y%2FyOEFAf%2FNLHQU1AB0&X-Amz-Signature=5ad0ccb0150d0da4c6992ebdc0ed4925bd05fc31b0f737fd1f2657b71291adc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOWW62Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWx%2FFCVYfUH9UO5LJPDYTcIpAjyArDPDZYER8%2B7mohAIgJdj8wVj%2FRuEQpr09lqHBfxL4Vd543uuF8mif1jUJIHkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkpdOwJxI7%2BPQRe1yrcA2WQPRQ7sv9xQV9zuz%2Bh9iMeN%2BsRMi3Q13r%2B3jIAwyfblgpajXLAQpN5QYBQJAR7BO1Mav0ruaev1%2BEwsM%2F1KvALraRk%2FvwJ4DwZ%2BkwE2QaLFaVNYc18kOZRDXY9bd8w7tUvm3hbmFR%2Fk2wQVX7xI1H7W2hKR2nbihPqRV2h44sYE3FRFoGL4mhINzt1g1sJhf8qrKMaDIh5Vr%2FUcu%2B8Gc%2F5nry2uALRhwNNpAhBNBo9VkQ8aCJ6zLviDlOp0KarY2I2wZlOFZZeZq4tg%2F8746AAjoAo23eXAg6aucp4YShrywJng2aCaPKMXHHgB7mYuiN7bB3zK2hEpnPWOUTj2qCnpgw3hhpvWkLbaHftOHPI7ynS61B7QADxCiAyvsW%2F3HXxAACejIFUNIykr02x7A8Pee7yXHxii87H8sgS7LgqBWn19URjW3jC2zy9CYMIDkvfGnppGxBOSdg2Qzjl%2F7837MT7HXiTzH27PL%2BkEoL0Uk9NHuYCg00bujEvg2PVMrFK1vyqVIu%2BJtZo%2BCtUZkaGe%2FThS17eVOyE5N1oIe2dcqvHbCG06lZ%2B0iDAKAJ4jt%2FL80mA9cWS6MU9EJmkp3JZ5zhQVj9GespLCBAyi6AAksKUzKuYxT5c7d0QMJ%2B4rsQGOqUByE03kAe9sMOjEzHFGoge4b2%2BzEVi4iDlh0ZuiADfkfDUagw3sneiOH05Yt4Cd6hyXsBVPDQ0zDyI41ytba%2FRqv0x2VvJKKPSnYKf55CLwpzuLk7RYX9B%2BtgdrK0I%2FTo3CtTNFEwNZyuSEW4Q4Z9gBtaXH2Vc0OasS7FO8UrJ2zVeP4gAnx2KquKJGv1OQqalv7uL%2BlJHK2y%2FyOEFAf%2FNLHQU1AB0&X-Amz-Signature=a36f8388adc8f8e61c52a1fbe9b7bc923d17252fa3f70fd5d3a324f8cd501e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOWW62Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWx%2FFCVYfUH9UO5LJPDYTcIpAjyArDPDZYER8%2B7mohAIgJdj8wVj%2FRuEQpr09lqHBfxL4Vd543uuF8mif1jUJIHkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkpdOwJxI7%2BPQRe1yrcA2WQPRQ7sv9xQV9zuz%2Bh9iMeN%2BsRMi3Q13r%2B3jIAwyfblgpajXLAQpN5QYBQJAR7BO1Mav0ruaev1%2BEwsM%2F1KvALraRk%2FvwJ4DwZ%2BkwE2QaLFaVNYc18kOZRDXY9bd8w7tUvm3hbmFR%2Fk2wQVX7xI1H7W2hKR2nbihPqRV2h44sYE3FRFoGL4mhINzt1g1sJhf8qrKMaDIh5Vr%2FUcu%2B8Gc%2F5nry2uALRhwNNpAhBNBo9VkQ8aCJ6zLviDlOp0KarY2I2wZlOFZZeZq4tg%2F8746AAjoAo23eXAg6aucp4YShrywJng2aCaPKMXHHgB7mYuiN7bB3zK2hEpnPWOUTj2qCnpgw3hhpvWkLbaHftOHPI7ynS61B7QADxCiAyvsW%2F3HXxAACejIFUNIykr02x7A8Pee7yXHxii87H8sgS7LgqBWn19URjW3jC2zy9CYMIDkvfGnppGxBOSdg2Qzjl%2F7837MT7HXiTzH27PL%2BkEoL0Uk9NHuYCg00bujEvg2PVMrFK1vyqVIu%2BJtZo%2BCtUZkaGe%2FThS17eVOyE5N1oIe2dcqvHbCG06lZ%2B0iDAKAJ4jt%2FL80mA9cWS6MU9EJmkp3JZ5zhQVj9GespLCBAyi6AAksKUzKuYxT5c7d0QMJ%2B4rsQGOqUByE03kAe9sMOjEzHFGoge4b2%2BzEVi4iDlh0ZuiADfkfDUagw3sneiOH05Yt4Cd6hyXsBVPDQ0zDyI41ytba%2FRqv0x2VvJKKPSnYKf55CLwpzuLk7RYX9B%2BtgdrK0I%2FTo3CtTNFEwNZyuSEW4Q4Z9gBtaXH2Vc0OasS7FO8UrJ2zVeP4gAnx2KquKJGv1OQqalv7uL%2BlJHK2y%2FyOEFAf%2FNLHQU1AB0&X-Amz-Signature=81aa160f345d60f747a7820c7e433e48f9baf970947133f487814d72f3a4a80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOWW62Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWx%2FFCVYfUH9UO5LJPDYTcIpAjyArDPDZYER8%2B7mohAIgJdj8wVj%2FRuEQpr09lqHBfxL4Vd543uuF8mif1jUJIHkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkpdOwJxI7%2BPQRe1yrcA2WQPRQ7sv9xQV9zuz%2Bh9iMeN%2BsRMi3Q13r%2B3jIAwyfblgpajXLAQpN5QYBQJAR7BO1Mav0ruaev1%2BEwsM%2F1KvALraRk%2FvwJ4DwZ%2BkwE2QaLFaVNYc18kOZRDXY9bd8w7tUvm3hbmFR%2Fk2wQVX7xI1H7W2hKR2nbihPqRV2h44sYE3FRFoGL4mhINzt1g1sJhf8qrKMaDIh5Vr%2FUcu%2B8Gc%2F5nry2uALRhwNNpAhBNBo9VkQ8aCJ6zLviDlOp0KarY2I2wZlOFZZeZq4tg%2F8746AAjoAo23eXAg6aucp4YShrywJng2aCaPKMXHHgB7mYuiN7bB3zK2hEpnPWOUTj2qCnpgw3hhpvWkLbaHftOHPI7ynS61B7QADxCiAyvsW%2F3HXxAACejIFUNIykr02x7A8Pee7yXHxii87H8sgS7LgqBWn19URjW3jC2zy9CYMIDkvfGnppGxBOSdg2Qzjl%2F7837MT7HXiTzH27PL%2BkEoL0Uk9NHuYCg00bujEvg2PVMrFK1vyqVIu%2BJtZo%2BCtUZkaGe%2FThS17eVOyE5N1oIe2dcqvHbCG06lZ%2B0iDAKAJ4jt%2FL80mA9cWS6MU9EJmkp3JZ5zhQVj9GespLCBAyi6AAksKUzKuYxT5c7d0QMJ%2B4rsQGOqUByE03kAe9sMOjEzHFGoge4b2%2BzEVi4iDlh0ZuiADfkfDUagw3sneiOH05Yt4Cd6hyXsBVPDQ0zDyI41ytba%2FRqv0x2VvJKKPSnYKf55CLwpzuLk7RYX9B%2BtgdrK0I%2FTo3CtTNFEwNZyuSEW4Q4Z9gBtaXH2Vc0OasS7FO8UrJ2zVeP4gAnx2KquKJGv1OQqalv7uL%2BlJHK2y%2FyOEFAf%2FNLHQU1AB0&X-Amz-Signature=8b6aa7ff69433a68a1567b4ae558388689ce962b6502c187309c9578362c1489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQOWW62Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiWx%2FFCVYfUH9UO5LJPDYTcIpAjyArDPDZYER8%2B7mohAIgJdj8wVj%2FRuEQpr09lqHBfxL4Vd543uuF8mif1jUJIHkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkpdOwJxI7%2BPQRe1yrcA2WQPRQ7sv9xQV9zuz%2Bh9iMeN%2BsRMi3Q13r%2B3jIAwyfblgpajXLAQpN5QYBQJAR7BO1Mav0ruaev1%2BEwsM%2F1KvALraRk%2FvwJ4DwZ%2BkwE2QaLFaVNYc18kOZRDXY9bd8w7tUvm3hbmFR%2Fk2wQVX7xI1H7W2hKR2nbihPqRV2h44sYE3FRFoGL4mhINzt1g1sJhf8qrKMaDIh5Vr%2FUcu%2B8Gc%2F5nry2uALRhwNNpAhBNBo9VkQ8aCJ6zLviDlOp0KarY2I2wZlOFZZeZq4tg%2F8746AAjoAo23eXAg6aucp4YShrywJng2aCaPKMXHHgB7mYuiN7bB3zK2hEpnPWOUTj2qCnpgw3hhpvWkLbaHftOHPI7ynS61B7QADxCiAyvsW%2F3HXxAACejIFUNIykr02x7A8Pee7yXHxii87H8sgS7LgqBWn19URjW3jC2zy9CYMIDkvfGnppGxBOSdg2Qzjl%2F7837MT7HXiTzH27PL%2BkEoL0Uk9NHuYCg00bujEvg2PVMrFK1vyqVIu%2BJtZo%2BCtUZkaGe%2FThS17eVOyE5N1oIe2dcqvHbCG06lZ%2B0iDAKAJ4jt%2FL80mA9cWS6MU9EJmkp3JZ5zhQVj9GespLCBAyi6AAksKUzKuYxT5c7d0QMJ%2B4rsQGOqUByE03kAe9sMOjEzHFGoge4b2%2BzEVi4iDlh0ZuiADfkfDUagw3sneiOH05Yt4Cd6hyXsBVPDQ0zDyI41ytba%2FRqv0x2VvJKKPSnYKf55CLwpzuLk7RYX9B%2BtgdrK0I%2FTo3CtTNFEwNZyuSEW4Q4Z9gBtaXH2Vc0OasS7FO8UrJ2zVeP4gAnx2KquKJGv1OQqalv7uL%2BlJHK2y%2FyOEFAf%2FNLHQU1AB0&X-Amz-Signature=07573e202493d22ecc7afc9f928108390a8469b30ed35cfb28d5db94aeef5873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
