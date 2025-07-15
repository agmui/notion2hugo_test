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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OEYKY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBuzO9b0WnkV1D4UhZSRvcCSbvrZT0w8%2F45nvOwW52w4AiBZL3APlVHZh6jVBoZtKJ2fk9I4FUuGggW0XeEHq%2BGWhCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMxzFj2I0zkNYCxeoAKtwD53ftXxS2ShdHY8IhbRpLpc4GDF%2B9RZ4%2BkfvHuA6l9L0Cwh15TQX7t6MOtUFMl%2F0OtNOW7rlfkLL5d0t63LEiSj%2Fh06ShtLpYjXwW9sOdsXzx6OjM28vb4h6CcanfsaxepUdshKhbRKbxl%2FRiQb%2FXq%2ByAi65%2BbL%2FVJrp4AdATMQutNM3T8oZ%2B1rXxT5DfCyRGYOlL3JCVMy2mG25h86LFdJ%2BQeIs3%2FUgK2PMvf7rs%2BeKMKdiLunmf7f2ULBXDZ29czSk5EeSv7hGriRSNovy8YI9Blbtbt%2Bh4fqj%2F%2FcGW1TL7yc8LNOyKCSwPBm2w8m5ezoVP%2BrG9IU6tbRkgzBSXARKl%2Ba80EbYpqjjjW3j0Abqw%2FkzqaJjJdPrceK9gptiJFPheu03nilmOk%2FVIDBaP1g9QqHydWPKdpUeq6ixkKRMJKs7KkI44G%2B%2BeIf%2F6DMEgVpCDpzZkfYU4MLYDMsgmKgPRHjkgXrHqhz3Nz1Hc4sJLhg2oIyrINfLekptg2GRkRiGFuv1h%2B9%2Bd8SzpQRNeeHv%2FdEltWuc8blYbc7FolSFWdWzS4Xo7w3UY0VvKF%2FPcvIDbGXCJDfTlEDnpSwQQCq4NqQF4s04pxy48S9ZrpPxi%2FnMZJyWUY5Q57nMwvoTZwwY6pgG5HfLc31w1mgngdZ6XQtG2zMCMvBn3qOy%2FL7O1XZAKAIb2rgExGMm%2BdpjsKFTTe%2Bdfao5cHnNjBH1kkWi45nHVV1vuDjfvT0YvlkLC0pf47JwfsXehgkSknfgZligP5h9TVndc8L9Ri3NZkLdyaEd9dstWOQgqtuowOvQWbr%2BnqOTzIEy17P%2BXWMI%2BwXBMuhbQTSetJEoO5d7VV%2FO4oqaMguW79FGG&X-Amz-Signature=45e4209580bc68b495644da1372ee1f419e3fc1ccccfd6955431fd8f8c8a471a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OEYKY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBuzO9b0WnkV1D4UhZSRvcCSbvrZT0w8%2F45nvOwW52w4AiBZL3APlVHZh6jVBoZtKJ2fk9I4FUuGggW0XeEHq%2BGWhCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMxzFj2I0zkNYCxeoAKtwD53ftXxS2ShdHY8IhbRpLpc4GDF%2B9RZ4%2BkfvHuA6l9L0Cwh15TQX7t6MOtUFMl%2F0OtNOW7rlfkLL5d0t63LEiSj%2Fh06ShtLpYjXwW9sOdsXzx6OjM28vb4h6CcanfsaxepUdshKhbRKbxl%2FRiQb%2FXq%2ByAi65%2BbL%2FVJrp4AdATMQutNM3T8oZ%2B1rXxT5DfCyRGYOlL3JCVMy2mG25h86LFdJ%2BQeIs3%2FUgK2PMvf7rs%2BeKMKdiLunmf7f2ULBXDZ29czSk5EeSv7hGriRSNovy8YI9Blbtbt%2Bh4fqj%2F%2FcGW1TL7yc8LNOyKCSwPBm2w8m5ezoVP%2BrG9IU6tbRkgzBSXARKl%2Ba80EbYpqjjjW3j0Abqw%2FkzqaJjJdPrceK9gptiJFPheu03nilmOk%2FVIDBaP1g9QqHydWPKdpUeq6ixkKRMJKs7KkI44G%2B%2BeIf%2F6DMEgVpCDpzZkfYU4MLYDMsgmKgPRHjkgXrHqhz3Nz1Hc4sJLhg2oIyrINfLekptg2GRkRiGFuv1h%2B9%2Bd8SzpQRNeeHv%2FdEltWuc8blYbc7FolSFWdWzS4Xo7w3UY0VvKF%2FPcvIDbGXCJDfTlEDnpSwQQCq4NqQF4s04pxy48S9ZrpPxi%2FnMZJyWUY5Q57nMwvoTZwwY6pgG5HfLc31w1mgngdZ6XQtG2zMCMvBn3qOy%2FL7O1XZAKAIb2rgExGMm%2BdpjsKFTTe%2Bdfao5cHnNjBH1kkWi45nHVV1vuDjfvT0YvlkLC0pf47JwfsXehgkSknfgZligP5h9TVndc8L9Ri3NZkLdyaEd9dstWOQgqtuowOvQWbr%2BnqOTzIEy17P%2BXWMI%2BwXBMuhbQTSetJEoO5d7VV%2FO4oqaMguW79FGG&X-Amz-Signature=a01c32b826dc6d418201b8edac635f45868be7c75e051e992d830922d983d9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OEYKY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBuzO9b0WnkV1D4UhZSRvcCSbvrZT0w8%2F45nvOwW52w4AiBZL3APlVHZh6jVBoZtKJ2fk9I4FUuGggW0XeEHq%2BGWhCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMxzFj2I0zkNYCxeoAKtwD53ftXxS2ShdHY8IhbRpLpc4GDF%2B9RZ4%2BkfvHuA6l9L0Cwh15TQX7t6MOtUFMl%2F0OtNOW7rlfkLL5d0t63LEiSj%2Fh06ShtLpYjXwW9sOdsXzx6OjM28vb4h6CcanfsaxepUdshKhbRKbxl%2FRiQb%2FXq%2ByAi65%2BbL%2FVJrp4AdATMQutNM3T8oZ%2B1rXxT5DfCyRGYOlL3JCVMy2mG25h86LFdJ%2BQeIs3%2FUgK2PMvf7rs%2BeKMKdiLunmf7f2ULBXDZ29czSk5EeSv7hGriRSNovy8YI9Blbtbt%2Bh4fqj%2F%2FcGW1TL7yc8LNOyKCSwPBm2w8m5ezoVP%2BrG9IU6tbRkgzBSXARKl%2Ba80EbYpqjjjW3j0Abqw%2FkzqaJjJdPrceK9gptiJFPheu03nilmOk%2FVIDBaP1g9QqHydWPKdpUeq6ixkKRMJKs7KkI44G%2B%2BeIf%2F6DMEgVpCDpzZkfYU4MLYDMsgmKgPRHjkgXrHqhz3Nz1Hc4sJLhg2oIyrINfLekptg2GRkRiGFuv1h%2B9%2Bd8SzpQRNeeHv%2FdEltWuc8blYbc7FolSFWdWzS4Xo7w3UY0VvKF%2FPcvIDbGXCJDfTlEDnpSwQQCq4NqQF4s04pxy48S9ZrpPxi%2FnMZJyWUY5Q57nMwvoTZwwY6pgG5HfLc31w1mgngdZ6XQtG2zMCMvBn3qOy%2FL7O1XZAKAIb2rgExGMm%2BdpjsKFTTe%2Bdfao5cHnNjBH1kkWi45nHVV1vuDjfvT0YvlkLC0pf47JwfsXehgkSknfgZligP5h9TVndc8L9Ri3NZkLdyaEd9dstWOQgqtuowOvQWbr%2BnqOTzIEy17P%2BXWMI%2BwXBMuhbQTSetJEoO5d7VV%2FO4oqaMguW79FGG&X-Amz-Signature=35ed31385d47e4c23d4571d34512bb15ca70a3fcdc7109a655f3f5c5d4c20e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OEYKY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBuzO9b0WnkV1D4UhZSRvcCSbvrZT0w8%2F45nvOwW52w4AiBZL3APlVHZh6jVBoZtKJ2fk9I4FUuGggW0XeEHq%2BGWhCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMxzFj2I0zkNYCxeoAKtwD53ftXxS2ShdHY8IhbRpLpc4GDF%2B9RZ4%2BkfvHuA6l9L0Cwh15TQX7t6MOtUFMl%2F0OtNOW7rlfkLL5d0t63LEiSj%2Fh06ShtLpYjXwW9sOdsXzx6OjM28vb4h6CcanfsaxepUdshKhbRKbxl%2FRiQb%2FXq%2ByAi65%2BbL%2FVJrp4AdATMQutNM3T8oZ%2B1rXxT5DfCyRGYOlL3JCVMy2mG25h86LFdJ%2BQeIs3%2FUgK2PMvf7rs%2BeKMKdiLunmf7f2ULBXDZ29czSk5EeSv7hGriRSNovy8YI9Blbtbt%2Bh4fqj%2F%2FcGW1TL7yc8LNOyKCSwPBm2w8m5ezoVP%2BrG9IU6tbRkgzBSXARKl%2Ba80EbYpqjjjW3j0Abqw%2FkzqaJjJdPrceK9gptiJFPheu03nilmOk%2FVIDBaP1g9QqHydWPKdpUeq6ixkKRMJKs7KkI44G%2B%2BeIf%2F6DMEgVpCDpzZkfYU4MLYDMsgmKgPRHjkgXrHqhz3Nz1Hc4sJLhg2oIyrINfLekptg2GRkRiGFuv1h%2B9%2Bd8SzpQRNeeHv%2FdEltWuc8blYbc7FolSFWdWzS4Xo7w3UY0VvKF%2FPcvIDbGXCJDfTlEDnpSwQQCq4NqQF4s04pxy48S9ZrpPxi%2FnMZJyWUY5Q57nMwvoTZwwY6pgG5HfLc31w1mgngdZ6XQtG2zMCMvBn3qOy%2FL7O1XZAKAIb2rgExGMm%2BdpjsKFTTe%2Bdfao5cHnNjBH1kkWi45nHVV1vuDjfvT0YvlkLC0pf47JwfsXehgkSknfgZligP5h9TVndc8L9Ri3NZkLdyaEd9dstWOQgqtuowOvQWbr%2BnqOTzIEy17P%2BXWMI%2BwXBMuhbQTSetJEoO5d7VV%2FO4oqaMguW79FGG&X-Amz-Signature=210eecf7110b50a873ad5a1a8353d216124c081f83aa299619dda32a5f60aad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OEYKY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBuzO9b0WnkV1D4UhZSRvcCSbvrZT0w8%2F45nvOwW52w4AiBZL3APlVHZh6jVBoZtKJ2fk9I4FUuGggW0XeEHq%2BGWhCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMxzFj2I0zkNYCxeoAKtwD53ftXxS2ShdHY8IhbRpLpc4GDF%2B9RZ4%2BkfvHuA6l9L0Cwh15TQX7t6MOtUFMl%2F0OtNOW7rlfkLL5d0t63LEiSj%2Fh06ShtLpYjXwW9sOdsXzx6OjM28vb4h6CcanfsaxepUdshKhbRKbxl%2FRiQb%2FXq%2ByAi65%2BbL%2FVJrp4AdATMQutNM3T8oZ%2B1rXxT5DfCyRGYOlL3JCVMy2mG25h86LFdJ%2BQeIs3%2FUgK2PMvf7rs%2BeKMKdiLunmf7f2ULBXDZ29czSk5EeSv7hGriRSNovy8YI9Blbtbt%2Bh4fqj%2F%2FcGW1TL7yc8LNOyKCSwPBm2w8m5ezoVP%2BrG9IU6tbRkgzBSXARKl%2Ba80EbYpqjjjW3j0Abqw%2FkzqaJjJdPrceK9gptiJFPheu03nilmOk%2FVIDBaP1g9QqHydWPKdpUeq6ixkKRMJKs7KkI44G%2B%2BeIf%2F6DMEgVpCDpzZkfYU4MLYDMsgmKgPRHjkgXrHqhz3Nz1Hc4sJLhg2oIyrINfLekptg2GRkRiGFuv1h%2B9%2Bd8SzpQRNeeHv%2FdEltWuc8blYbc7FolSFWdWzS4Xo7w3UY0VvKF%2FPcvIDbGXCJDfTlEDnpSwQQCq4NqQF4s04pxy48S9ZrpPxi%2FnMZJyWUY5Q57nMwvoTZwwY6pgG5HfLc31w1mgngdZ6XQtG2zMCMvBn3qOy%2FL7O1XZAKAIb2rgExGMm%2BdpjsKFTTe%2Bdfao5cHnNjBH1kkWi45nHVV1vuDjfvT0YvlkLC0pf47JwfsXehgkSknfgZligP5h9TVndc8L9Ri3NZkLdyaEd9dstWOQgqtuowOvQWbr%2BnqOTzIEy17P%2BXWMI%2BwXBMuhbQTSetJEoO5d7VV%2FO4oqaMguW79FGG&X-Amz-Signature=d998158ff4220fe69121ab2e8bd627a4e01d057d19de461594601a9c957fd81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OEYKY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBuzO9b0WnkV1D4UhZSRvcCSbvrZT0w8%2F45nvOwW52w4AiBZL3APlVHZh6jVBoZtKJ2fk9I4FUuGggW0XeEHq%2BGWhCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMxzFj2I0zkNYCxeoAKtwD53ftXxS2ShdHY8IhbRpLpc4GDF%2B9RZ4%2BkfvHuA6l9L0Cwh15TQX7t6MOtUFMl%2F0OtNOW7rlfkLL5d0t63LEiSj%2Fh06ShtLpYjXwW9sOdsXzx6OjM28vb4h6CcanfsaxepUdshKhbRKbxl%2FRiQb%2FXq%2ByAi65%2BbL%2FVJrp4AdATMQutNM3T8oZ%2B1rXxT5DfCyRGYOlL3JCVMy2mG25h86LFdJ%2BQeIs3%2FUgK2PMvf7rs%2BeKMKdiLunmf7f2ULBXDZ29czSk5EeSv7hGriRSNovy8YI9Blbtbt%2Bh4fqj%2F%2FcGW1TL7yc8LNOyKCSwPBm2w8m5ezoVP%2BrG9IU6tbRkgzBSXARKl%2Ba80EbYpqjjjW3j0Abqw%2FkzqaJjJdPrceK9gptiJFPheu03nilmOk%2FVIDBaP1g9QqHydWPKdpUeq6ixkKRMJKs7KkI44G%2B%2BeIf%2F6DMEgVpCDpzZkfYU4MLYDMsgmKgPRHjkgXrHqhz3Nz1Hc4sJLhg2oIyrINfLekptg2GRkRiGFuv1h%2B9%2Bd8SzpQRNeeHv%2FdEltWuc8blYbc7FolSFWdWzS4Xo7w3UY0VvKF%2FPcvIDbGXCJDfTlEDnpSwQQCq4NqQF4s04pxy48S9ZrpPxi%2FnMZJyWUY5Q57nMwvoTZwwY6pgG5HfLc31w1mgngdZ6XQtG2zMCMvBn3qOy%2FL7O1XZAKAIb2rgExGMm%2BdpjsKFTTe%2Bdfao5cHnNjBH1kkWi45nHVV1vuDjfvT0YvlkLC0pf47JwfsXehgkSknfgZligP5h9TVndc8L9Ri3NZkLdyaEd9dstWOQgqtuowOvQWbr%2BnqOTzIEy17P%2BXWMI%2BwXBMuhbQTSetJEoO5d7VV%2FO4oqaMguW79FGG&X-Amz-Signature=8a52373d64554004bc69c94616b5571910483ed64f296ad6475e60db5e0e6c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OEYKY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBuzO9b0WnkV1D4UhZSRvcCSbvrZT0w8%2F45nvOwW52w4AiBZL3APlVHZh6jVBoZtKJ2fk9I4FUuGggW0XeEHq%2BGWhCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMxzFj2I0zkNYCxeoAKtwD53ftXxS2ShdHY8IhbRpLpc4GDF%2B9RZ4%2BkfvHuA6l9L0Cwh15TQX7t6MOtUFMl%2F0OtNOW7rlfkLL5d0t63LEiSj%2Fh06ShtLpYjXwW9sOdsXzx6OjM28vb4h6CcanfsaxepUdshKhbRKbxl%2FRiQb%2FXq%2ByAi65%2BbL%2FVJrp4AdATMQutNM3T8oZ%2B1rXxT5DfCyRGYOlL3JCVMy2mG25h86LFdJ%2BQeIs3%2FUgK2PMvf7rs%2BeKMKdiLunmf7f2ULBXDZ29czSk5EeSv7hGriRSNovy8YI9Blbtbt%2Bh4fqj%2F%2FcGW1TL7yc8LNOyKCSwPBm2w8m5ezoVP%2BrG9IU6tbRkgzBSXARKl%2Ba80EbYpqjjjW3j0Abqw%2FkzqaJjJdPrceK9gptiJFPheu03nilmOk%2FVIDBaP1g9QqHydWPKdpUeq6ixkKRMJKs7KkI44G%2B%2BeIf%2F6DMEgVpCDpzZkfYU4MLYDMsgmKgPRHjkgXrHqhz3Nz1Hc4sJLhg2oIyrINfLekptg2GRkRiGFuv1h%2B9%2Bd8SzpQRNeeHv%2FdEltWuc8blYbc7FolSFWdWzS4Xo7w3UY0VvKF%2FPcvIDbGXCJDfTlEDnpSwQQCq4NqQF4s04pxy48S9ZrpPxi%2FnMZJyWUY5Q57nMwvoTZwwY6pgG5HfLc31w1mgngdZ6XQtG2zMCMvBn3qOy%2FL7O1XZAKAIb2rgExGMm%2BdpjsKFTTe%2Bdfao5cHnNjBH1kkWi45nHVV1vuDjfvT0YvlkLC0pf47JwfsXehgkSknfgZligP5h9TVndc8L9Ri3NZkLdyaEd9dstWOQgqtuowOvQWbr%2BnqOTzIEy17P%2BXWMI%2BwXBMuhbQTSetJEoO5d7VV%2FO4oqaMguW79FGG&X-Amz-Signature=72c378ab1dee285b5a44510ad6318ccf7f455211687eab5d5447028fb6deb365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
