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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXNIUCZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIACqQD3kCXQTRXA7xddZ7ig8zm1sZZwXPzuQrDqIooC7AiBCfVGeOIhDRWeKApT9OXo8fhFdIx019J3rWatT%2F85VwiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSp1%2B9HjB6BvDOEHeKtwDdo9B5UcJrKgSDqRW%2FiuTNzxY4MMLPR2SS3TMAQyqLOFv0WPc8zmGtJmUcBuZSSEnR9cxqbAfFNFP0fUw0AM3ewfi2x6IPv3KypWj45yT12n7NIKC1zz%2BDhfQaBysx4MhGAxwPPUQn32N%2FfCNu3Z4qGya3PMcI98kmT%2FmejkRjspn1g32maQMyLDVipRoJ%2BTjNrkDQyHwlUTjMk9b1xNG%2FdnFhmb8c7bKxfJBRzYL%2BU8%2Fx425Aab8CL%2BgYKQOqW1KhWjHFYenH3lphZcu1Bc%2FDXJ89bfuYIgggzeouW2ns4MG7YY8Qjn1mCU313L02UnmRL7Ki6cpPgAE4fFe3x5EZDeXxOo3R2BIaqm3PA2ln9hBgkUxlZBDz0v05tZhYKoPCL82i66k3Zw8ONQRcO5CU9lDpK6JJ2c%2BmfqrQQ6U%2Bpbohhiav7gEY1htLslru5orJCFI4tp99MD7rHOYH31iCZgnl6UdGZjB%2BkLWBigtzTegx0Y49Jr3vvWRXii5vsyRXqKeN2wdutA8M0IKkOfdWn36dHkATIpdSzoBw5rjPaTgsLjkhfJ9a5jHJyDCpzKf2533uf7Xiwik8yuLmABmtTXOpjDRNP%2Boj2l8A31MFPcbg7rnA2eWPBfGS%2BgwjZqnwgY6pgHdkmTBKV20LVpwey5EKLupBweXiEYdbIpAH8ON8C8qdeHhQSqJ4cmSGZIQVTfT%2FAGmAzSA2XtjUsrO9LKfMrJrs5m38YS2uCT35Nuc4phlkZq31oYDdvhH1J0mmUU3wYd%2FH46Qkc3tUvrqtKzIZ%2BQuPqHRLDkSAi%2F2h5wMLj8Ef5obCrA4XUij8h1FuLgxC8LiNH4IVODeNMLk%2FfilgNfeRAgL42JT&X-Amz-Signature=4ce6669ef948ae5b77bdba11fa94a27ca4841a6b1b7584753596d89035bb6a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXNIUCZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIACqQD3kCXQTRXA7xddZ7ig8zm1sZZwXPzuQrDqIooC7AiBCfVGeOIhDRWeKApT9OXo8fhFdIx019J3rWatT%2F85VwiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSp1%2B9HjB6BvDOEHeKtwDdo9B5UcJrKgSDqRW%2FiuTNzxY4MMLPR2SS3TMAQyqLOFv0WPc8zmGtJmUcBuZSSEnR9cxqbAfFNFP0fUw0AM3ewfi2x6IPv3KypWj45yT12n7NIKC1zz%2BDhfQaBysx4MhGAxwPPUQn32N%2FfCNu3Z4qGya3PMcI98kmT%2FmejkRjspn1g32maQMyLDVipRoJ%2BTjNrkDQyHwlUTjMk9b1xNG%2FdnFhmb8c7bKxfJBRzYL%2BU8%2Fx425Aab8CL%2BgYKQOqW1KhWjHFYenH3lphZcu1Bc%2FDXJ89bfuYIgggzeouW2ns4MG7YY8Qjn1mCU313L02UnmRL7Ki6cpPgAE4fFe3x5EZDeXxOo3R2BIaqm3PA2ln9hBgkUxlZBDz0v05tZhYKoPCL82i66k3Zw8ONQRcO5CU9lDpK6JJ2c%2BmfqrQQ6U%2Bpbohhiav7gEY1htLslru5orJCFI4tp99MD7rHOYH31iCZgnl6UdGZjB%2BkLWBigtzTegx0Y49Jr3vvWRXii5vsyRXqKeN2wdutA8M0IKkOfdWn36dHkATIpdSzoBw5rjPaTgsLjkhfJ9a5jHJyDCpzKf2533uf7Xiwik8yuLmABmtTXOpjDRNP%2Boj2l8A31MFPcbg7rnA2eWPBfGS%2BgwjZqnwgY6pgHdkmTBKV20LVpwey5EKLupBweXiEYdbIpAH8ON8C8qdeHhQSqJ4cmSGZIQVTfT%2FAGmAzSA2XtjUsrO9LKfMrJrs5m38YS2uCT35Nuc4phlkZq31oYDdvhH1J0mmUU3wYd%2FH46Qkc3tUvrqtKzIZ%2BQuPqHRLDkSAi%2F2h5wMLj8Ef5obCrA4XUij8h1FuLgxC8LiNH4IVODeNMLk%2FfilgNfeRAgL42JT&X-Amz-Signature=02d39cdfb322bd6bf0ed44c6eab4d7a97e102ec65622cf8b84dbdb48f5acb530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXNIUCZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIACqQD3kCXQTRXA7xddZ7ig8zm1sZZwXPzuQrDqIooC7AiBCfVGeOIhDRWeKApT9OXo8fhFdIx019J3rWatT%2F85VwiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSp1%2B9HjB6BvDOEHeKtwDdo9B5UcJrKgSDqRW%2FiuTNzxY4MMLPR2SS3TMAQyqLOFv0WPc8zmGtJmUcBuZSSEnR9cxqbAfFNFP0fUw0AM3ewfi2x6IPv3KypWj45yT12n7NIKC1zz%2BDhfQaBysx4MhGAxwPPUQn32N%2FfCNu3Z4qGya3PMcI98kmT%2FmejkRjspn1g32maQMyLDVipRoJ%2BTjNrkDQyHwlUTjMk9b1xNG%2FdnFhmb8c7bKxfJBRzYL%2BU8%2Fx425Aab8CL%2BgYKQOqW1KhWjHFYenH3lphZcu1Bc%2FDXJ89bfuYIgggzeouW2ns4MG7YY8Qjn1mCU313L02UnmRL7Ki6cpPgAE4fFe3x5EZDeXxOo3R2BIaqm3PA2ln9hBgkUxlZBDz0v05tZhYKoPCL82i66k3Zw8ONQRcO5CU9lDpK6JJ2c%2BmfqrQQ6U%2Bpbohhiav7gEY1htLslru5orJCFI4tp99MD7rHOYH31iCZgnl6UdGZjB%2BkLWBigtzTegx0Y49Jr3vvWRXii5vsyRXqKeN2wdutA8M0IKkOfdWn36dHkATIpdSzoBw5rjPaTgsLjkhfJ9a5jHJyDCpzKf2533uf7Xiwik8yuLmABmtTXOpjDRNP%2Boj2l8A31MFPcbg7rnA2eWPBfGS%2BgwjZqnwgY6pgHdkmTBKV20LVpwey5EKLupBweXiEYdbIpAH8ON8C8qdeHhQSqJ4cmSGZIQVTfT%2FAGmAzSA2XtjUsrO9LKfMrJrs5m38YS2uCT35Nuc4phlkZq31oYDdvhH1J0mmUU3wYd%2FH46Qkc3tUvrqtKzIZ%2BQuPqHRLDkSAi%2F2h5wMLj8Ef5obCrA4XUij8h1FuLgxC8LiNH4IVODeNMLk%2FfilgNfeRAgL42JT&X-Amz-Signature=e3dcd22e564502ed280eed8b0c4ea4508fbc2af243a8d5abaf7308a420c53384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXNIUCZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIACqQD3kCXQTRXA7xddZ7ig8zm1sZZwXPzuQrDqIooC7AiBCfVGeOIhDRWeKApT9OXo8fhFdIx019J3rWatT%2F85VwiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSp1%2B9HjB6BvDOEHeKtwDdo9B5UcJrKgSDqRW%2FiuTNzxY4MMLPR2SS3TMAQyqLOFv0WPc8zmGtJmUcBuZSSEnR9cxqbAfFNFP0fUw0AM3ewfi2x6IPv3KypWj45yT12n7NIKC1zz%2BDhfQaBysx4MhGAxwPPUQn32N%2FfCNu3Z4qGya3PMcI98kmT%2FmejkRjspn1g32maQMyLDVipRoJ%2BTjNrkDQyHwlUTjMk9b1xNG%2FdnFhmb8c7bKxfJBRzYL%2BU8%2Fx425Aab8CL%2BgYKQOqW1KhWjHFYenH3lphZcu1Bc%2FDXJ89bfuYIgggzeouW2ns4MG7YY8Qjn1mCU313L02UnmRL7Ki6cpPgAE4fFe3x5EZDeXxOo3R2BIaqm3PA2ln9hBgkUxlZBDz0v05tZhYKoPCL82i66k3Zw8ONQRcO5CU9lDpK6JJ2c%2BmfqrQQ6U%2Bpbohhiav7gEY1htLslru5orJCFI4tp99MD7rHOYH31iCZgnl6UdGZjB%2BkLWBigtzTegx0Y49Jr3vvWRXii5vsyRXqKeN2wdutA8M0IKkOfdWn36dHkATIpdSzoBw5rjPaTgsLjkhfJ9a5jHJyDCpzKf2533uf7Xiwik8yuLmABmtTXOpjDRNP%2Boj2l8A31MFPcbg7rnA2eWPBfGS%2BgwjZqnwgY6pgHdkmTBKV20LVpwey5EKLupBweXiEYdbIpAH8ON8C8qdeHhQSqJ4cmSGZIQVTfT%2FAGmAzSA2XtjUsrO9LKfMrJrs5m38YS2uCT35Nuc4phlkZq31oYDdvhH1J0mmUU3wYd%2FH46Qkc3tUvrqtKzIZ%2BQuPqHRLDkSAi%2F2h5wMLj8Ef5obCrA4XUij8h1FuLgxC8LiNH4IVODeNMLk%2FfilgNfeRAgL42JT&X-Amz-Signature=1bd39a517db509b83a390095eef6d9078b714ab6469f5cb6f323a613130851a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXNIUCZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIACqQD3kCXQTRXA7xddZ7ig8zm1sZZwXPzuQrDqIooC7AiBCfVGeOIhDRWeKApT9OXo8fhFdIx019J3rWatT%2F85VwiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSp1%2B9HjB6BvDOEHeKtwDdo9B5UcJrKgSDqRW%2FiuTNzxY4MMLPR2SS3TMAQyqLOFv0WPc8zmGtJmUcBuZSSEnR9cxqbAfFNFP0fUw0AM3ewfi2x6IPv3KypWj45yT12n7NIKC1zz%2BDhfQaBysx4MhGAxwPPUQn32N%2FfCNu3Z4qGya3PMcI98kmT%2FmejkRjspn1g32maQMyLDVipRoJ%2BTjNrkDQyHwlUTjMk9b1xNG%2FdnFhmb8c7bKxfJBRzYL%2BU8%2Fx425Aab8CL%2BgYKQOqW1KhWjHFYenH3lphZcu1Bc%2FDXJ89bfuYIgggzeouW2ns4MG7YY8Qjn1mCU313L02UnmRL7Ki6cpPgAE4fFe3x5EZDeXxOo3R2BIaqm3PA2ln9hBgkUxlZBDz0v05tZhYKoPCL82i66k3Zw8ONQRcO5CU9lDpK6JJ2c%2BmfqrQQ6U%2Bpbohhiav7gEY1htLslru5orJCFI4tp99MD7rHOYH31iCZgnl6UdGZjB%2BkLWBigtzTegx0Y49Jr3vvWRXii5vsyRXqKeN2wdutA8M0IKkOfdWn36dHkATIpdSzoBw5rjPaTgsLjkhfJ9a5jHJyDCpzKf2533uf7Xiwik8yuLmABmtTXOpjDRNP%2Boj2l8A31MFPcbg7rnA2eWPBfGS%2BgwjZqnwgY6pgHdkmTBKV20LVpwey5EKLupBweXiEYdbIpAH8ON8C8qdeHhQSqJ4cmSGZIQVTfT%2FAGmAzSA2XtjUsrO9LKfMrJrs5m38YS2uCT35Nuc4phlkZq31oYDdvhH1J0mmUU3wYd%2FH46Qkc3tUvrqtKzIZ%2BQuPqHRLDkSAi%2F2h5wMLj8Ef5obCrA4XUij8h1FuLgxC8LiNH4IVODeNMLk%2FfilgNfeRAgL42JT&X-Amz-Signature=cf4320bdf824414cb972053977e782fbf48a8ecab1bd9b16bebcc80fe1695c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXNIUCZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIACqQD3kCXQTRXA7xddZ7ig8zm1sZZwXPzuQrDqIooC7AiBCfVGeOIhDRWeKApT9OXo8fhFdIx019J3rWatT%2F85VwiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSp1%2B9HjB6BvDOEHeKtwDdo9B5UcJrKgSDqRW%2FiuTNzxY4MMLPR2SS3TMAQyqLOFv0WPc8zmGtJmUcBuZSSEnR9cxqbAfFNFP0fUw0AM3ewfi2x6IPv3KypWj45yT12n7NIKC1zz%2BDhfQaBysx4MhGAxwPPUQn32N%2FfCNu3Z4qGya3PMcI98kmT%2FmejkRjspn1g32maQMyLDVipRoJ%2BTjNrkDQyHwlUTjMk9b1xNG%2FdnFhmb8c7bKxfJBRzYL%2BU8%2Fx425Aab8CL%2BgYKQOqW1KhWjHFYenH3lphZcu1Bc%2FDXJ89bfuYIgggzeouW2ns4MG7YY8Qjn1mCU313L02UnmRL7Ki6cpPgAE4fFe3x5EZDeXxOo3R2BIaqm3PA2ln9hBgkUxlZBDz0v05tZhYKoPCL82i66k3Zw8ONQRcO5CU9lDpK6JJ2c%2BmfqrQQ6U%2Bpbohhiav7gEY1htLslru5orJCFI4tp99MD7rHOYH31iCZgnl6UdGZjB%2BkLWBigtzTegx0Y49Jr3vvWRXii5vsyRXqKeN2wdutA8M0IKkOfdWn36dHkATIpdSzoBw5rjPaTgsLjkhfJ9a5jHJyDCpzKf2533uf7Xiwik8yuLmABmtTXOpjDRNP%2Boj2l8A31MFPcbg7rnA2eWPBfGS%2BgwjZqnwgY6pgHdkmTBKV20LVpwey5EKLupBweXiEYdbIpAH8ON8C8qdeHhQSqJ4cmSGZIQVTfT%2FAGmAzSA2XtjUsrO9LKfMrJrs5m38YS2uCT35Nuc4phlkZq31oYDdvhH1J0mmUU3wYd%2FH46Qkc3tUvrqtKzIZ%2BQuPqHRLDkSAi%2F2h5wMLj8Ef5obCrA4XUij8h1FuLgxC8LiNH4IVODeNMLk%2FfilgNfeRAgL42JT&X-Amz-Signature=8405d386b8464fc678604bc67c6ce492553b69ec778b91ee2cc382cd750f3392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXNIUCZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIACqQD3kCXQTRXA7xddZ7ig8zm1sZZwXPzuQrDqIooC7AiBCfVGeOIhDRWeKApT9OXo8fhFdIx019J3rWatT%2F85VwiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSp1%2B9HjB6BvDOEHeKtwDdo9B5UcJrKgSDqRW%2FiuTNzxY4MMLPR2SS3TMAQyqLOFv0WPc8zmGtJmUcBuZSSEnR9cxqbAfFNFP0fUw0AM3ewfi2x6IPv3KypWj45yT12n7NIKC1zz%2BDhfQaBysx4MhGAxwPPUQn32N%2FfCNu3Z4qGya3PMcI98kmT%2FmejkRjspn1g32maQMyLDVipRoJ%2BTjNrkDQyHwlUTjMk9b1xNG%2FdnFhmb8c7bKxfJBRzYL%2BU8%2Fx425Aab8CL%2BgYKQOqW1KhWjHFYenH3lphZcu1Bc%2FDXJ89bfuYIgggzeouW2ns4MG7YY8Qjn1mCU313L02UnmRL7Ki6cpPgAE4fFe3x5EZDeXxOo3R2BIaqm3PA2ln9hBgkUxlZBDz0v05tZhYKoPCL82i66k3Zw8ONQRcO5CU9lDpK6JJ2c%2BmfqrQQ6U%2Bpbohhiav7gEY1htLslru5orJCFI4tp99MD7rHOYH31iCZgnl6UdGZjB%2BkLWBigtzTegx0Y49Jr3vvWRXii5vsyRXqKeN2wdutA8M0IKkOfdWn36dHkATIpdSzoBw5rjPaTgsLjkhfJ9a5jHJyDCpzKf2533uf7Xiwik8yuLmABmtTXOpjDRNP%2Boj2l8A31MFPcbg7rnA2eWPBfGS%2BgwjZqnwgY6pgHdkmTBKV20LVpwey5EKLupBweXiEYdbIpAH8ON8C8qdeHhQSqJ4cmSGZIQVTfT%2FAGmAzSA2XtjUsrO9LKfMrJrs5m38YS2uCT35Nuc4phlkZq31oYDdvhH1J0mmUU3wYd%2FH46Qkc3tUvrqtKzIZ%2BQuPqHRLDkSAi%2F2h5wMLj8Ef5obCrA4XUij8h1FuLgxC8LiNH4IVODeNMLk%2FfilgNfeRAgL42JT&X-Amz-Signature=d002669306a7a2e48cee1b43c6070476baf8874cc3c6f8c26045cb91b7389230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
