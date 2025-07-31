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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AHZPFN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIkcxvdYAIrvK0aoxD9%2Fv%2FRgNYpY7ZD%2BQOIZ2%2FfrY9RAiAimqIrCD15zOUpKiZHh3WMVfi9Sc2aSV%2FxS29XBhweoyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAlLK79vkZQFn5FniKtwDtuweVu5VcyIPCmsSfNcwBZ%2FT2ShJm4t%2Bh1%2F8rc29%2FL2KaNnfd%2BUd1MNiFR44y82KcWWCOyjAuwKxCd1TEtcHIxBn9IDqJzm%2FjTReRHy%2B04gqzGyM0410Syjuo1dCd7u%2BNQsTr3qFNBrAAkeiUtYq%2FKrQ4SgpOrLM8xuUjoVxtQcwtxyh1t8loekacpdtq05Is6LISqUEN%2Fnck1QXCzkYYrCc%2F2PpbpPOyaKqjNyKMjCB6vz%2Br1j9wlReTt0tlc64aSiM0CrnhwtRSoqOe0d7GIjuuJ%2BkcKojwW8gdiVUB66edTZ9G7UQwxKupsDYze%2Bf53ksj4ohbi9dTSobz5Qb1pAiBzz6IRDp5%2Bnfs8DEzxKToVbd4kQQeNneidaLMt9zPcMCGR0L5SsUrkoTqp8iQMuJnMsCL5YZAJzlNJ0%2BYS28r3bLqNOffj2hUIo5nLG8OgjVuxO7gpKC7BT41FR4TwFzu4y7%2Bvhk7I%2FacfZlaY9sUKLFSPAB2NvUMCRf%2Fmq9elZWUCwsHoVbixUmH%2B3Lu9vTsSJs5EGGc07FfnXjUtJ3n6eTvK%2BqAlymO1LqponKBeouh1d0n%2FpB02ziCKkNf0BvuNECDx1Jn5%2Ftl1YEK6y4PsN3HzHEuTJbIRcw0Z2txAY6pgEBjWE1yVDYVmPu7hGvi%2FOQvVS4Y%2BZKt%2F8eL%2FQHsj4V7vpOqCTEUJDCj3z7PyrcKYPPrqadFyt1mfSK%2B0RDf8oTqkQu49KuVg%2BsGYm80JW67i9FuNszR4SOmIOnC6c5%2BKug21ZwJWih3bhQmhRUPxBhRua8NYYD2tVzFWD41P1ReGmTKL2fRpDSCfKUWov3E1OIofnqjuL3AKoLysqLNyT6QNic5IQ0&X-Amz-Signature=77a89de59c1f8c73fd2cabab07b6d65389bcc0a7b8b02fd831ec378ab0f7bab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AHZPFN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIkcxvdYAIrvK0aoxD9%2Fv%2FRgNYpY7ZD%2BQOIZ2%2FfrY9RAiAimqIrCD15zOUpKiZHh3WMVfi9Sc2aSV%2FxS29XBhweoyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAlLK79vkZQFn5FniKtwDtuweVu5VcyIPCmsSfNcwBZ%2FT2ShJm4t%2Bh1%2F8rc29%2FL2KaNnfd%2BUd1MNiFR44y82KcWWCOyjAuwKxCd1TEtcHIxBn9IDqJzm%2FjTReRHy%2B04gqzGyM0410Syjuo1dCd7u%2BNQsTr3qFNBrAAkeiUtYq%2FKrQ4SgpOrLM8xuUjoVxtQcwtxyh1t8loekacpdtq05Is6LISqUEN%2Fnck1QXCzkYYrCc%2F2PpbpPOyaKqjNyKMjCB6vz%2Br1j9wlReTt0tlc64aSiM0CrnhwtRSoqOe0d7GIjuuJ%2BkcKojwW8gdiVUB66edTZ9G7UQwxKupsDYze%2Bf53ksj4ohbi9dTSobz5Qb1pAiBzz6IRDp5%2Bnfs8DEzxKToVbd4kQQeNneidaLMt9zPcMCGR0L5SsUrkoTqp8iQMuJnMsCL5YZAJzlNJ0%2BYS28r3bLqNOffj2hUIo5nLG8OgjVuxO7gpKC7BT41FR4TwFzu4y7%2Bvhk7I%2FacfZlaY9sUKLFSPAB2NvUMCRf%2Fmq9elZWUCwsHoVbixUmH%2B3Lu9vTsSJs5EGGc07FfnXjUtJ3n6eTvK%2BqAlymO1LqponKBeouh1d0n%2FpB02ziCKkNf0BvuNECDx1Jn5%2Ftl1YEK6y4PsN3HzHEuTJbIRcw0Z2txAY6pgEBjWE1yVDYVmPu7hGvi%2FOQvVS4Y%2BZKt%2F8eL%2FQHsj4V7vpOqCTEUJDCj3z7PyrcKYPPrqadFyt1mfSK%2B0RDf8oTqkQu49KuVg%2BsGYm80JW67i9FuNszR4SOmIOnC6c5%2BKug21ZwJWih3bhQmhRUPxBhRua8NYYD2tVzFWD41P1ReGmTKL2fRpDSCfKUWov3E1OIofnqjuL3AKoLysqLNyT6QNic5IQ0&X-Amz-Signature=5e1d170179375c6d65ff951334c374b67f7344dbbbc09be27cbeeae77c49e223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AHZPFN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIkcxvdYAIrvK0aoxD9%2Fv%2FRgNYpY7ZD%2BQOIZ2%2FfrY9RAiAimqIrCD15zOUpKiZHh3WMVfi9Sc2aSV%2FxS29XBhweoyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAlLK79vkZQFn5FniKtwDtuweVu5VcyIPCmsSfNcwBZ%2FT2ShJm4t%2Bh1%2F8rc29%2FL2KaNnfd%2BUd1MNiFR44y82KcWWCOyjAuwKxCd1TEtcHIxBn9IDqJzm%2FjTReRHy%2B04gqzGyM0410Syjuo1dCd7u%2BNQsTr3qFNBrAAkeiUtYq%2FKrQ4SgpOrLM8xuUjoVxtQcwtxyh1t8loekacpdtq05Is6LISqUEN%2Fnck1QXCzkYYrCc%2F2PpbpPOyaKqjNyKMjCB6vz%2Br1j9wlReTt0tlc64aSiM0CrnhwtRSoqOe0d7GIjuuJ%2BkcKojwW8gdiVUB66edTZ9G7UQwxKupsDYze%2Bf53ksj4ohbi9dTSobz5Qb1pAiBzz6IRDp5%2Bnfs8DEzxKToVbd4kQQeNneidaLMt9zPcMCGR0L5SsUrkoTqp8iQMuJnMsCL5YZAJzlNJ0%2BYS28r3bLqNOffj2hUIo5nLG8OgjVuxO7gpKC7BT41FR4TwFzu4y7%2Bvhk7I%2FacfZlaY9sUKLFSPAB2NvUMCRf%2Fmq9elZWUCwsHoVbixUmH%2B3Lu9vTsSJs5EGGc07FfnXjUtJ3n6eTvK%2BqAlymO1LqponKBeouh1d0n%2FpB02ziCKkNf0BvuNECDx1Jn5%2Ftl1YEK6y4PsN3HzHEuTJbIRcw0Z2txAY6pgEBjWE1yVDYVmPu7hGvi%2FOQvVS4Y%2BZKt%2F8eL%2FQHsj4V7vpOqCTEUJDCj3z7PyrcKYPPrqadFyt1mfSK%2B0RDf8oTqkQu49KuVg%2BsGYm80JW67i9FuNszR4SOmIOnC6c5%2BKug21ZwJWih3bhQmhRUPxBhRua8NYYD2tVzFWD41P1ReGmTKL2fRpDSCfKUWov3E1OIofnqjuL3AKoLysqLNyT6QNic5IQ0&X-Amz-Signature=0f752b89ec11af7d05e1fe22b76c7ffa225389cf6aba7fa38a7f3d57a5dd8e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AHZPFN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIkcxvdYAIrvK0aoxD9%2Fv%2FRgNYpY7ZD%2BQOIZ2%2FfrY9RAiAimqIrCD15zOUpKiZHh3WMVfi9Sc2aSV%2FxS29XBhweoyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAlLK79vkZQFn5FniKtwDtuweVu5VcyIPCmsSfNcwBZ%2FT2ShJm4t%2Bh1%2F8rc29%2FL2KaNnfd%2BUd1MNiFR44y82KcWWCOyjAuwKxCd1TEtcHIxBn9IDqJzm%2FjTReRHy%2B04gqzGyM0410Syjuo1dCd7u%2BNQsTr3qFNBrAAkeiUtYq%2FKrQ4SgpOrLM8xuUjoVxtQcwtxyh1t8loekacpdtq05Is6LISqUEN%2Fnck1QXCzkYYrCc%2F2PpbpPOyaKqjNyKMjCB6vz%2Br1j9wlReTt0tlc64aSiM0CrnhwtRSoqOe0d7GIjuuJ%2BkcKojwW8gdiVUB66edTZ9G7UQwxKupsDYze%2Bf53ksj4ohbi9dTSobz5Qb1pAiBzz6IRDp5%2Bnfs8DEzxKToVbd4kQQeNneidaLMt9zPcMCGR0L5SsUrkoTqp8iQMuJnMsCL5YZAJzlNJ0%2BYS28r3bLqNOffj2hUIo5nLG8OgjVuxO7gpKC7BT41FR4TwFzu4y7%2Bvhk7I%2FacfZlaY9sUKLFSPAB2NvUMCRf%2Fmq9elZWUCwsHoVbixUmH%2B3Lu9vTsSJs5EGGc07FfnXjUtJ3n6eTvK%2BqAlymO1LqponKBeouh1d0n%2FpB02ziCKkNf0BvuNECDx1Jn5%2Ftl1YEK6y4PsN3HzHEuTJbIRcw0Z2txAY6pgEBjWE1yVDYVmPu7hGvi%2FOQvVS4Y%2BZKt%2F8eL%2FQHsj4V7vpOqCTEUJDCj3z7PyrcKYPPrqadFyt1mfSK%2B0RDf8oTqkQu49KuVg%2BsGYm80JW67i9FuNszR4SOmIOnC6c5%2BKug21ZwJWih3bhQmhRUPxBhRua8NYYD2tVzFWD41P1ReGmTKL2fRpDSCfKUWov3E1OIofnqjuL3AKoLysqLNyT6QNic5IQ0&X-Amz-Signature=426ef87d225fe224b14bd35a9fde4902dfa4f29c67ecf8c39176ae900e7ae489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AHZPFN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIkcxvdYAIrvK0aoxD9%2Fv%2FRgNYpY7ZD%2BQOIZ2%2FfrY9RAiAimqIrCD15zOUpKiZHh3WMVfi9Sc2aSV%2FxS29XBhweoyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAlLK79vkZQFn5FniKtwDtuweVu5VcyIPCmsSfNcwBZ%2FT2ShJm4t%2Bh1%2F8rc29%2FL2KaNnfd%2BUd1MNiFR44y82KcWWCOyjAuwKxCd1TEtcHIxBn9IDqJzm%2FjTReRHy%2B04gqzGyM0410Syjuo1dCd7u%2BNQsTr3qFNBrAAkeiUtYq%2FKrQ4SgpOrLM8xuUjoVxtQcwtxyh1t8loekacpdtq05Is6LISqUEN%2Fnck1QXCzkYYrCc%2F2PpbpPOyaKqjNyKMjCB6vz%2Br1j9wlReTt0tlc64aSiM0CrnhwtRSoqOe0d7GIjuuJ%2BkcKojwW8gdiVUB66edTZ9G7UQwxKupsDYze%2Bf53ksj4ohbi9dTSobz5Qb1pAiBzz6IRDp5%2Bnfs8DEzxKToVbd4kQQeNneidaLMt9zPcMCGR0L5SsUrkoTqp8iQMuJnMsCL5YZAJzlNJ0%2BYS28r3bLqNOffj2hUIo5nLG8OgjVuxO7gpKC7BT41FR4TwFzu4y7%2Bvhk7I%2FacfZlaY9sUKLFSPAB2NvUMCRf%2Fmq9elZWUCwsHoVbixUmH%2B3Lu9vTsSJs5EGGc07FfnXjUtJ3n6eTvK%2BqAlymO1LqponKBeouh1d0n%2FpB02ziCKkNf0BvuNECDx1Jn5%2Ftl1YEK6y4PsN3HzHEuTJbIRcw0Z2txAY6pgEBjWE1yVDYVmPu7hGvi%2FOQvVS4Y%2BZKt%2F8eL%2FQHsj4V7vpOqCTEUJDCj3z7PyrcKYPPrqadFyt1mfSK%2B0RDf8oTqkQu49KuVg%2BsGYm80JW67i9FuNszR4SOmIOnC6c5%2BKug21ZwJWih3bhQmhRUPxBhRua8NYYD2tVzFWD41P1ReGmTKL2fRpDSCfKUWov3E1OIofnqjuL3AKoLysqLNyT6QNic5IQ0&X-Amz-Signature=da8165beaa22696b9c085591c0f5d3af92fb2990dc7677eebc135f24397abb4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AHZPFN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIkcxvdYAIrvK0aoxD9%2Fv%2FRgNYpY7ZD%2BQOIZ2%2FfrY9RAiAimqIrCD15zOUpKiZHh3WMVfi9Sc2aSV%2FxS29XBhweoyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAlLK79vkZQFn5FniKtwDtuweVu5VcyIPCmsSfNcwBZ%2FT2ShJm4t%2Bh1%2F8rc29%2FL2KaNnfd%2BUd1MNiFR44y82KcWWCOyjAuwKxCd1TEtcHIxBn9IDqJzm%2FjTReRHy%2B04gqzGyM0410Syjuo1dCd7u%2BNQsTr3qFNBrAAkeiUtYq%2FKrQ4SgpOrLM8xuUjoVxtQcwtxyh1t8loekacpdtq05Is6LISqUEN%2Fnck1QXCzkYYrCc%2F2PpbpPOyaKqjNyKMjCB6vz%2Br1j9wlReTt0tlc64aSiM0CrnhwtRSoqOe0d7GIjuuJ%2BkcKojwW8gdiVUB66edTZ9G7UQwxKupsDYze%2Bf53ksj4ohbi9dTSobz5Qb1pAiBzz6IRDp5%2Bnfs8DEzxKToVbd4kQQeNneidaLMt9zPcMCGR0L5SsUrkoTqp8iQMuJnMsCL5YZAJzlNJ0%2BYS28r3bLqNOffj2hUIo5nLG8OgjVuxO7gpKC7BT41FR4TwFzu4y7%2Bvhk7I%2FacfZlaY9sUKLFSPAB2NvUMCRf%2Fmq9elZWUCwsHoVbixUmH%2B3Lu9vTsSJs5EGGc07FfnXjUtJ3n6eTvK%2BqAlymO1LqponKBeouh1d0n%2FpB02ziCKkNf0BvuNECDx1Jn5%2Ftl1YEK6y4PsN3HzHEuTJbIRcw0Z2txAY6pgEBjWE1yVDYVmPu7hGvi%2FOQvVS4Y%2BZKt%2F8eL%2FQHsj4V7vpOqCTEUJDCj3z7PyrcKYPPrqadFyt1mfSK%2B0RDf8oTqkQu49KuVg%2BsGYm80JW67i9FuNszR4SOmIOnC6c5%2BKug21ZwJWih3bhQmhRUPxBhRua8NYYD2tVzFWD41P1ReGmTKL2fRpDSCfKUWov3E1OIofnqjuL3AKoLysqLNyT6QNic5IQ0&X-Amz-Signature=e9f53b9c87e4337e33cf105b70a02c1854809a770f7d4e0162c969f4319a670b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AHZPFN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIkcxvdYAIrvK0aoxD9%2Fv%2FRgNYpY7ZD%2BQOIZ2%2FfrY9RAiAimqIrCD15zOUpKiZHh3WMVfi9Sc2aSV%2FxS29XBhweoyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAlLK79vkZQFn5FniKtwDtuweVu5VcyIPCmsSfNcwBZ%2FT2ShJm4t%2Bh1%2F8rc29%2FL2KaNnfd%2BUd1MNiFR44y82KcWWCOyjAuwKxCd1TEtcHIxBn9IDqJzm%2FjTReRHy%2B04gqzGyM0410Syjuo1dCd7u%2BNQsTr3qFNBrAAkeiUtYq%2FKrQ4SgpOrLM8xuUjoVxtQcwtxyh1t8loekacpdtq05Is6LISqUEN%2Fnck1QXCzkYYrCc%2F2PpbpPOyaKqjNyKMjCB6vz%2Br1j9wlReTt0tlc64aSiM0CrnhwtRSoqOe0d7GIjuuJ%2BkcKojwW8gdiVUB66edTZ9G7UQwxKupsDYze%2Bf53ksj4ohbi9dTSobz5Qb1pAiBzz6IRDp5%2Bnfs8DEzxKToVbd4kQQeNneidaLMt9zPcMCGR0L5SsUrkoTqp8iQMuJnMsCL5YZAJzlNJ0%2BYS28r3bLqNOffj2hUIo5nLG8OgjVuxO7gpKC7BT41FR4TwFzu4y7%2Bvhk7I%2FacfZlaY9sUKLFSPAB2NvUMCRf%2Fmq9elZWUCwsHoVbixUmH%2B3Lu9vTsSJs5EGGc07FfnXjUtJ3n6eTvK%2BqAlymO1LqponKBeouh1d0n%2FpB02ziCKkNf0BvuNECDx1Jn5%2Ftl1YEK6y4PsN3HzHEuTJbIRcw0Z2txAY6pgEBjWE1yVDYVmPu7hGvi%2FOQvVS4Y%2BZKt%2F8eL%2FQHsj4V7vpOqCTEUJDCj3z7PyrcKYPPrqadFyt1mfSK%2B0RDf8oTqkQu49KuVg%2BsGYm80JW67i9FuNszR4SOmIOnC6c5%2BKug21ZwJWih3bhQmhRUPxBhRua8NYYD2tVzFWD41P1ReGmTKL2fRpDSCfKUWov3E1OIofnqjuL3AKoLysqLNyT6QNic5IQ0&X-Amz-Signature=3910f05d0e5968c7c8ad0d11a21c931e59c944e015c6f3a0634f7af52113a163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
