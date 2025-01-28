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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECKUSVU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC4NDizMGSnswaONdgNSlW4jQDDDb%2BEtihFatNzfKjmuAIgOxU2xC6PJZGTzDUDTWABX3erT4G%2FM46B03RKaVMKlUcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLlnU0JUXbIN28RjeyrcA3nR7Lv7sfIt5wEkQgHuDiRpUsAs0SGJngeH7HKmUWBXypCIwadUcaiyoNH3YHNZU%2BHpjhNvbsi5rHX0lHPNsGB9Z%2F0PI%2FJgQt95LXJ68WoCFpUT5JxIQpZIh72FbTSYtFIEIypxr6amDqIBCOS2ao%2FJDsuZlYBKMT0IQ1Ig%2BqEAXPrz5gyqmkfAf7%2B5NiEk2Hls9edZZmbN6vP1ZNlZ6eTQKf46oomcf6RFMsX3QiF8mKclzGp%2BShDO6WHO1i24aETaUunwRXUmMjTh4gfKknewLnvG2x%2BkpDm7KNzAahdgy8Lji3HzXsYFABlbkA%2FYR%2BIrYFB2JU28PDJIk8Z7OG30ZR%2Bj%2FjCV2vPD5g%2F53S7GFqwYgk6ownhZXvb8%2FkRsX2lyAna8DTmmszwvmOVADRrxQqfeUyHMr4Rd%2BMpQGGbeKIsVmlBbQe7taEOjSA7mam%2F7vNyM90QHWO%2BVv9mfTsOQ6W30DqjizB5s7Vq3p1QRw9p3ZX64YH4P1eC9X487TJV1egULsIHmVbQcqSRvH88mm3KGD49XYe97nAob4u2f0LFeMKiAwGv5v4NE55dZPpkLcqvP9YSPl3ofZnwgzH2bWqvsPHsbeRTkfm0EPod5fs8bIbglAuk9xiayMNOx5bwGOqUBWKhikHnmbCsYcLP0KYpysC0HQBBai9pcpMIdXDftAgYMIsplhICkD7ZB4BV%2B6nRFHR5Lr2z8NPKrEoGy5SN%2FjyONuSbtYTRncm6nD2O70E6M7PELIZ%2BRsIu8h%2FLqPThXy8KNBE0zb0o6eTSrkfMAVdSlWZFW9T%2B7qilvB9cryNC80hFzCl8gRWI%2FhNNoR%2F%2FcG7%2BHkWpwX647zZ456qxs7u5FIJej&X-Amz-Signature=7c4e2b58e649686cd6a63c1379c6458c4eb9ca728e91dacefa45a4976f0c17c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECKUSVU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC4NDizMGSnswaONdgNSlW4jQDDDb%2BEtihFatNzfKjmuAIgOxU2xC6PJZGTzDUDTWABX3erT4G%2FM46B03RKaVMKlUcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLlnU0JUXbIN28RjeyrcA3nR7Lv7sfIt5wEkQgHuDiRpUsAs0SGJngeH7HKmUWBXypCIwadUcaiyoNH3YHNZU%2BHpjhNvbsi5rHX0lHPNsGB9Z%2F0PI%2FJgQt95LXJ68WoCFpUT5JxIQpZIh72FbTSYtFIEIypxr6amDqIBCOS2ao%2FJDsuZlYBKMT0IQ1Ig%2BqEAXPrz5gyqmkfAf7%2B5NiEk2Hls9edZZmbN6vP1ZNlZ6eTQKf46oomcf6RFMsX3QiF8mKclzGp%2BShDO6WHO1i24aETaUunwRXUmMjTh4gfKknewLnvG2x%2BkpDm7KNzAahdgy8Lji3HzXsYFABlbkA%2FYR%2BIrYFB2JU28PDJIk8Z7OG30ZR%2Bj%2FjCV2vPD5g%2F53S7GFqwYgk6ownhZXvb8%2FkRsX2lyAna8DTmmszwvmOVADRrxQqfeUyHMr4Rd%2BMpQGGbeKIsVmlBbQe7taEOjSA7mam%2F7vNyM90QHWO%2BVv9mfTsOQ6W30DqjizB5s7Vq3p1QRw9p3ZX64YH4P1eC9X487TJV1egULsIHmVbQcqSRvH88mm3KGD49XYe97nAob4u2f0LFeMKiAwGv5v4NE55dZPpkLcqvP9YSPl3ofZnwgzH2bWqvsPHsbeRTkfm0EPod5fs8bIbglAuk9xiayMNOx5bwGOqUBWKhikHnmbCsYcLP0KYpysC0HQBBai9pcpMIdXDftAgYMIsplhICkD7ZB4BV%2B6nRFHR5Lr2z8NPKrEoGy5SN%2FjyONuSbtYTRncm6nD2O70E6M7PELIZ%2BRsIu8h%2FLqPThXy8KNBE0zb0o6eTSrkfMAVdSlWZFW9T%2B7qilvB9cryNC80hFzCl8gRWI%2FhNNoR%2F%2FcG7%2BHkWpwX647zZ456qxs7u5FIJej&X-Amz-Signature=47199fc626e85af3e3ee7b1fb869e910337fbc7fca36f2d337b8784b3f2a6cca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECKUSVU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC4NDizMGSnswaONdgNSlW4jQDDDb%2BEtihFatNzfKjmuAIgOxU2xC6PJZGTzDUDTWABX3erT4G%2FM46B03RKaVMKlUcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLlnU0JUXbIN28RjeyrcA3nR7Lv7sfIt5wEkQgHuDiRpUsAs0SGJngeH7HKmUWBXypCIwadUcaiyoNH3YHNZU%2BHpjhNvbsi5rHX0lHPNsGB9Z%2F0PI%2FJgQt95LXJ68WoCFpUT5JxIQpZIh72FbTSYtFIEIypxr6amDqIBCOS2ao%2FJDsuZlYBKMT0IQ1Ig%2BqEAXPrz5gyqmkfAf7%2B5NiEk2Hls9edZZmbN6vP1ZNlZ6eTQKf46oomcf6RFMsX3QiF8mKclzGp%2BShDO6WHO1i24aETaUunwRXUmMjTh4gfKknewLnvG2x%2BkpDm7KNzAahdgy8Lji3HzXsYFABlbkA%2FYR%2BIrYFB2JU28PDJIk8Z7OG30ZR%2Bj%2FjCV2vPD5g%2F53S7GFqwYgk6ownhZXvb8%2FkRsX2lyAna8DTmmszwvmOVADRrxQqfeUyHMr4Rd%2BMpQGGbeKIsVmlBbQe7taEOjSA7mam%2F7vNyM90QHWO%2BVv9mfTsOQ6W30DqjizB5s7Vq3p1QRw9p3ZX64YH4P1eC9X487TJV1egULsIHmVbQcqSRvH88mm3KGD49XYe97nAob4u2f0LFeMKiAwGv5v4NE55dZPpkLcqvP9YSPl3ofZnwgzH2bWqvsPHsbeRTkfm0EPod5fs8bIbglAuk9xiayMNOx5bwGOqUBWKhikHnmbCsYcLP0KYpysC0HQBBai9pcpMIdXDftAgYMIsplhICkD7ZB4BV%2B6nRFHR5Lr2z8NPKrEoGy5SN%2FjyONuSbtYTRncm6nD2O70E6M7PELIZ%2BRsIu8h%2FLqPThXy8KNBE0zb0o6eTSrkfMAVdSlWZFW9T%2B7qilvB9cryNC80hFzCl8gRWI%2FhNNoR%2F%2FcG7%2BHkWpwX647zZ456qxs7u5FIJej&X-Amz-Signature=fcd01aa71579a361a3ac9d9ae07791a60ba5a11c15f4cad79f250e70da2390e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECKUSVU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC4NDizMGSnswaONdgNSlW4jQDDDb%2BEtihFatNzfKjmuAIgOxU2xC6PJZGTzDUDTWABX3erT4G%2FM46B03RKaVMKlUcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLlnU0JUXbIN28RjeyrcA3nR7Lv7sfIt5wEkQgHuDiRpUsAs0SGJngeH7HKmUWBXypCIwadUcaiyoNH3YHNZU%2BHpjhNvbsi5rHX0lHPNsGB9Z%2F0PI%2FJgQt95LXJ68WoCFpUT5JxIQpZIh72FbTSYtFIEIypxr6amDqIBCOS2ao%2FJDsuZlYBKMT0IQ1Ig%2BqEAXPrz5gyqmkfAf7%2B5NiEk2Hls9edZZmbN6vP1ZNlZ6eTQKf46oomcf6RFMsX3QiF8mKclzGp%2BShDO6WHO1i24aETaUunwRXUmMjTh4gfKknewLnvG2x%2BkpDm7KNzAahdgy8Lji3HzXsYFABlbkA%2FYR%2BIrYFB2JU28PDJIk8Z7OG30ZR%2Bj%2FjCV2vPD5g%2F53S7GFqwYgk6ownhZXvb8%2FkRsX2lyAna8DTmmszwvmOVADRrxQqfeUyHMr4Rd%2BMpQGGbeKIsVmlBbQe7taEOjSA7mam%2F7vNyM90QHWO%2BVv9mfTsOQ6W30DqjizB5s7Vq3p1QRw9p3ZX64YH4P1eC9X487TJV1egULsIHmVbQcqSRvH88mm3KGD49XYe97nAob4u2f0LFeMKiAwGv5v4NE55dZPpkLcqvP9YSPl3ofZnwgzH2bWqvsPHsbeRTkfm0EPod5fs8bIbglAuk9xiayMNOx5bwGOqUBWKhikHnmbCsYcLP0KYpysC0HQBBai9pcpMIdXDftAgYMIsplhICkD7ZB4BV%2B6nRFHR5Lr2z8NPKrEoGy5SN%2FjyONuSbtYTRncm6nD2O70E6M7PELIZ%2BRsIu8h%2FLqPThXy8KNBE0zb0o6eTSrkfMAVdSlWZFW9T%2B7qilvB9cryNC80hFzCl8gRWI%2FhNNoR%2F%2FcG7%2BHkWpwX647zZ456qxs7u5FIJej&X-Amz-Signature=c3d67c28b26ffa31c7895f1aba596c142ad77cadd99af8b5a0009690aa95518d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECKUSVU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC4NDizMGSnswaONdgNSlW4jQDDDb%2BEtihFatNzfKjmuAIgOxU2xC6PJZGTzDUDTWABX3erT4G%2FM46B03RKaVMKlUcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLlnU0JUXbIN28RjeyrcA3nR7Lv7sfIt5wEkQgHuDiRpUsAs0SGJngeH7HKmUWBXypCIwadUcaiyoNH3YHNZU%2BHpjhNvbsi5rHX0lHPNsGB9Z%2F0PI%2FJgQt95LXJ68WoCFpUT5JxIQpZIh72FbTSYtFIEIypxr6amDqIBCOS2ao%2FJDsuZlYBKMT0IQ1Ig%2BqEAXPrz5gyqmkfAf7%2B5NiEk2Hls9edZZmbN6vP1ZNlZ6eTQKf46oomcf6RFMsX3QiF8mKclzGp%2BShDO6WHO1i24aETaUunwRXUmMjTh4gfKknewLnvG2x%2BkpDm7KNzAahdgy8Lji3HzXsYFABlbkA%2FYR%2BIrYFB2JU28PDJIk8Z7OG30ZR%2Bj%2FjCV2vPD5g%2F53S7GFqwYgk6ownhZXvb8%2FkRsX2lyAna8DTmmszwvmOVADRrxQqfeUyHMr4Rd%2BMpQGGbeKIsVmlBbQe7taEOjSA7mam%2F7vNyM90QHWO%2BVv9mfTsOQ6W30DqjizB5s7Vq3p1QRw9p3ZX64YH4P1eC9X487TJV1egULsIHmVbQcqSRvH88mm3KGD49XYe97nAob4u2f0LFeMKiAwGv5v4NE55dZPpkLcqvP9YSPl3ofZnwgzH2bWqvsPHsbeRTkfm0EPod5fs8bIbglAuk9xiayMNOx5bwGOqUBWKhikHnmbCsYcLP0KYpysC0HQBBai9pcpMIdXDftAgYMIsplhICkD7ZB4BV%2B6nRFHR5Lr2z8NPKrEoGy5SN%2FjyONuSbtYTRncm6nD2O70E6M7PELIZ%2BRsIu8h%2FLqPThXy8KNBE0zb0o6eTSrkfMAVdSlWZFW9T%2B7qilvB9cryNC80hFzCl8gRWI%2FhNNoR%2F%2FcG7%2BHkWpwX647zZ456qxs7u5FIJej&X-Amz-Signature=3d36467c1092fd196b38f1b58cbe66c46ecde21d1a5f4d34f524d9b3f3653b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECKUSVU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC4NDizMGSnswaONdgNSlW4jQDDDb%2BEtihFatNzfKjmuAIgOxU2xC6PJZGTzDUDTWABX3erT4G%2FM46B03RKaVMKlUcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLlnU0JUXbIN28RjeyrcA3nR7Lv7sfIt5wEkQgHuDiRpUsAs0SGJngeH7HKmUWBXypCIwadUcaiyoNH3YHNZU%2BHpjhNvbsi5rHX0lHPNsGB9Z%2F0PI%2FJgQt95LXJ68WoCFpUT5JxIQpZIh72FbTSYtFIEIypxr6amDqIBCOS2ao%2FJDsuZlYBKMT0IQ1Ig%2BqEAXPrz5gyqmkfAf7%2B5NiEk2Hls9edZZmbN6vP1ZNlZ6eTQKf46oomcf6RFMsX3QiF8mKclzGp%2BShDO6WHO1i24aETaUunwRXUmMjTh4gfKknewLnvG2x%2BkpDm7KNzAahdgy8Lji3HzXsYFABlbkA%2FYR%2BIrYFB2JU28PDJIk8Z7OG30ZR%2Bj%2FjCV2vPD5g%2F53S7GFqwYgk6ownhZXvb8%2FkRsX2lyAna8DTmmszwvmOVADRrxQqfeUyHMr4Rd%2BMpQGGbeKIsVmlBbQe7taEOjSA7mam%2F7vNyM90QHWO%2BVv9mfTsOQ6W30DqjizB5s7Vq3p1QRw9p3ZX64YH4P1eC9X487TJV1egULsIHmVbQcqSRvH88mm3KGD49XYe97nAob4u2f0LFeMKiAwGv5v4NE55dZPpkLcqvP9YSPl3ofZnwgzH2bWqvsPHsbeRTkfm0EPod5fs8bIbglAuk9xiayMNOx5bwGOqUBWKhikHnmbCsYcLP0KYpysC0HQBBai9pcpMIdXDftAgYMIsplhICkD7ZB4BV%2B6nRFHR5Lr2z8NPKrEoGy5SN%2FjyONuSbtYTRncm6nD2O70E6M7PELIZ%2BRsIu8h%2FLqPThXy8KNBE0zb0o6eTSrkfMAVdSlWZFW9T%2B7qilvB9cryNC80hFzCl8gRWI%2FhNNoR%2F%2FcG7%2BHkWpwX647zZ456qxs7u5FIJej&X-Amz-Signature=21129aa4255717a1a12a23ad55bacfcdca55451de4a07c406dd7bc113097a3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECKUSVU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC4NDizMGSnswaONdgNSlW4jQDDDb%2BEtihFatNzfKjmuAIgOxU2xC6PJZGTzDUDTWABX3erT4G%2FM46B03RKaVMKlUcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLlnU0JUXbIN28RjeyrcA3nR7Lv7sfIt5wEkQgHuDiRpUsAs0SGJngeH7HKmUWBXypCIwadUcaiyoNH3YHNZU%2BHpjhNvbsi5rHX0lHPNsGB9Z%2F0PI%2FJgQt95LXJ68WoCFpUT5JxIQpZIh72FbTSYtFIEIypxr6amDqIBCOS2ao%2FJDsuZlYBKMT0IQ1Ig%2BqEAXPrz5gyqmkfAf7%2B5NiEk2Hls9edZZmbN6vP1ZNlZ6eTQKf46oomcf6RFMsX3QiF8mKclzGp%2BShDO6WHO1i24aETaUunwRXUmMjTh4gfKknewLnvG2x%2BkpDm7KNzAahdgy8Lji3HzXsYFABlbkA%2FYR%2BIrYFB2JU28PDJIk8Z7OG30ZR%2Bj%2FjCV2vPD5g%2F53S7GFqwYgk6ownhZXvb8%2FkRsX2lyAna8DTmmszwvmOVADRrxQqfeUyHMr4Rd%2BMpQGGbeKIsVmlBbQe7taEOjSA7mam%2F7vNyM90QHWO%2BVv9mfTsOQ6W30DqjizB5s7Vq3p1QRw9p3ZX64YH4P1eC9X487TJV1egULsIHmVbQcqSRvH88mm3KGD49XYe97nAob4u2f0LFeMKiAwGv5v4NE55dZPpkLcqvP9YSPl3ofZnwgzH2bWqvsPHsbeRTkfm0EPod5fs8bIbglAuk9xiayMNOx5bwGOqUBWKhikHnmbCsYcLP0KYpysC0HQBBai9pcpMIdXDftAgYMIsplhICkD7ZB4BV%2B6nRFHR5Lr2z8NPKrEoGy5SN%2FjyONuSbtYTRncm6nD2O70E6M7PELIZ%2BRsIu8h%2FLqPThXy8KNBE0zb0o6eTSrkfMAVdSlWZFW9T%2B7qilvB9cryNC80hFzCl8gRWI%2FhNNoR%2F%2FcG7%2BHkWpwX647zZ456qxs7u5FIJej&X-Amz-Signature=e8fbed6bec8e587d4dbcd73bb4250386e84b632f30523fef610d4d5c249fd3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
