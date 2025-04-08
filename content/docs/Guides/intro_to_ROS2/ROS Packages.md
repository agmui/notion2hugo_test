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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLORYYGA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76I8WzdQcSH4tDwfIpFtnPGFbcGVhBZvOF%2Fqd7zUrcAiBJbg2O6d%2FY354w%2FdEuXSf1HYGWFzWbevnl8jBjr3smpyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMZNPZ8bLop%2FnycWhtKtwDNSaD4BlkE27gTff%2Fgjq2UhcSScxGb32NkPz2nIlkZ%2BY%2B7eHY8MnA89yX18JcewZ6k9kQc55k%2BpQYpcLqMdbDW20FrzaGjjiy%2B3Z887WPZF%2FiBKxrtvcvDrcGx6qtP41Bu1eWUPjM%2BwaeoHMl2fuSdmatvalMQGuprZIBT%2FGWOaLyiyLU7ZRDfxFJ%2F5JQBy5bD8qoymdyFMsk9NiOyYgxPtnJDT4r3uEAOhmFFWYq%2Fi2GLudDxZcdyh%2BUd0i4MrBEfAnLFpza1SM9N0fbHcIFTet74bPMBcMXGyLpnwqkyg3FquA90PjYNFEgtPldxjs%2BxmKfYhW6ChaGLCMTvI0gxHPAQ4%2FTj3FF9mfR%2FlC9Js3%2BgI9WVMJ3WSU%2FUUmPFU3yR4bmBLTay1e6HtBsLB4GowL3jApzt3DsQgU%2Fows6ItTA0FrvzWupK1EqcuCmio0P8YWtTjKRjYRcqDHtrR2gOKkpUSx042JcwA%2B8x%2F%2BF%2FRUfhS%2F7Mbq7U0Mlpg0hxJNJx81UGm2EYpqCM44%2FzRdw%2FO9tTeSakt%2F7EvbVSY%2Bo4A1bD1o%2F6nHwcXFaKU3ATq%2FQququSAaQokEJtMRTQmneIF0G1%2FXIddfGdyHOI6eVaIBNfz8RI6DKRKMi3Ykwte3SvwY6pgFzBGP%2BrFYLgLGQbpf9lz8flASJ7o7oyybDFsLMoyuY%2FyM7ux12jeTa41oYMER7alyL5U%2FYIC4ARwaSzykcStWUrJzNp079hZkZEeoe25Dp1fX%2FbdhRMfVWr2asczVjXPOrcB4j8Ay0D9Hl5%2B5gFSrQ7mEAgZTMcMSpNV1%2BmOmOvcfZdg7FJSOXVcvdMiycC1RbN8rOwxJm4YabG3SQAaOE4KamSQ78&X-Amz-Signature=51e79d8c4f57f26827bf03022df35a6a89b7831710111aea6b88c70a58ac75ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLORYYGA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76I8WzdQcSH4tDwfIpFtnPGFbcGVhBZvOF%2Fqd7zUrcAiBJbg2O6d%2FY354w%2FdEuXSf1HYGWFzWbevnl8jBjr3smpyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMZNPZ8bLop%2FnycWhtKtwDNSaD4BlkE27gTff%2Fgjq2UhcSScxGb32NkPz2nIlkZ%2BY%2B7eHY8MnA89yX18JcewZ6k9kQc55k%2BpQYpcLqMdbDW20FrzaGjjiy%2B3Z887WPZF%2FiBKxrtvcvDrcGx6qtP41Bu1eWUPjM%2BwaeoHMl2fuSdmatvalMQGuprZIBT%2FGWOaLyiyLU7ZRDfxFJ%2F5JQBy5bD8qoymdyFMsk9NiOyYgxPtnJDT4r3uEAOhmFFWYq%2Fi2GLudDxZcdyh%2BUd0i4MrBEfAnLFpza1SM9N0fbHcIFTet74bPMBcMXGyLpnwqkyg3FquA90PjYNFEgtPldxjs%2BxmKfYhW6ChaGLCMTvI0gxHPAQ4%2FTj3FF9mfR%2FlC9Js3%2BgI9WVMJ3WSU%2FUUmPFU3yR4bmBLTay1e6HtBsLB4GowL3jApzt3DsQgU%2Fows6ItTA0FrvzWupK1EqcuCmio0P8YWtTjKRjYRcqDHtrR2gOKkpUSx042JcwA%2B8x%2F%2BF%2FRUfhS%2F7Mbq7U0Mlpg0hxJNJx81UGm2EYpqCM44%2FzRdw%2FO9tTeSakt%2F7EvbVSY%2Bo4A1bD1o%2F6nHwcXFaKU3ATq%2FQququSAaQokEJtMRTQmneIF0G1%2FXIddfGdyHOI6eVaIBNfz8RI6DKRKMi3Ykwte3SvwY6pgFzBGP%2BrFYLgLGQbpf9lz8flASJ7o7oyybDFsLMoyuY%2FyM7ux12jeTa41oYMER7alyL5U%2FYIC4ARwaSzykcStWUrJzNp079hZkZEeoe25Dp1fX%2FbdhRMfVWr2asczVjXPOrcB4j8Ay0D9Hl5%2B5gFSrQ7mEAgZTMcMSpNV1%2BmOmOvcfZdg7FJSOXVcvdMiycC1RbN8rOwxJm4YabG3SQAaOE4KamSQ78&X-Amz-Signature=d7efe30045b6de4eff04fc5ff03c5f5f257a6a96d960646e9efca47a8a86a39a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLORYYGA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76I8WzdQcSH4tDwfIpFtnPGFbcGVhBZvOF%2Fqd7zUrcAiBJbg2O6d%2FY354w%2FdEuXSf1HYGWFzWbevnl8jBjr3smpyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMZNPZ8bLop%2FnycWhtKtwDNSaD4BlkE27gTff%2Fgjq2UhcSScxGb32NkPz2nIlkZ%2BY%2B7eHY8MnA89yX18JcewZ6k9kQc55k%2BpQYpcLqMdbDW20FrzaGjjiy%2B3Z887WPZF%2FiBKxrtvcvDrcGx6qtP41Bu1eWUPjM%2BwaeoHMl2fuSdmatvalMQGuprZIBT%2FGWOaLyiyLU7ZRDfxFJ%2F5JQBy5bD8qoymdyFMsk9NiOyYgxPtnJDT4r3uEAOhmFFWYq%2Fi2GLudDxZcdyh%2BUd0i4MrBEfAnLFpza1SM9N0fbHcIFTet74bPMBcMXGyLpnwqkyg3FquA90PjYNFEgtPldxjs%2BxmKfYhW6ChaGLCMTvI0gxHPAQ4%2FTj3FF9mfR%2FlC9Js3%2BgI9WVMJ3WSU%2FUUmPFU3yR4bmBLTay1e6HtBsLB4GowL3jApzt3DsQgU%2Fows6ItTA0FrvzWupK1EqcuCmio0P8YWtTjKRjYRcqDHtrR2gOKkpUSx042JcwA%2B8x%2F%2BF%2FRUfhS%2F7Mbq7U0Mlpg0hxJNJx81UGm2EYpqCM44%2FzRdw%2FO9tTeSakt%2F7EvbVSY%2Bo4A1bD1o%2F6nHwcXFaKU3ATq%2FQququSAaQokEJtMRTQmneIF0G1%2FXIddfGdyHOI6eVaIBNfz8RI6DKRKMi3Ykwte3SvwY6pgFzBGP%2BrFYLgLGQbpf9lz8flASJ7o7oyybDFsLMoyuY%2FyM7ux12jeTa41oYMER7alyL5U%2FYIC4ARwaSzykcStWUrJzNp079hZkZEeoe25Dp1fX%2FbdhRMfVWr2asczVjXPOrcB4j8Ay0D9Hl5%2B5gFSrQ7mEAgZTMcMSpNV1%2BmOmOvcfZdg7FJSOXVcvdMiycC1RbN8rOwxJm4YabG3SQAaOE4KamSQ78&X-Amz-Signature=5f90cfd320e24c45b94fb6e58fe525a083a3e0671ad80023b253d75b8e2b9930&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLORYYGA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76I8WzdQcSH4tDwfIpFtnPGFbcGVhBZvOF%2Fqd7zUrcAiBJbg2O6d%2FY354w%2FdEuXSf1HYGWFzWbevnl8jBjr3smpyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMZNPZ8bLop%2FnycWhtKtwDNSaD4BlkE27gTff%2Fgjq2UhcSScxGb32NkPz2nIlkZ%2BY%2B7eHY8MnA89yX18JcewZ6k9kQc55k%2BpQYpcLqMdbDW20FrzaGjjiy%2B3Z887WPZF%2FiBKxrtvcvDrcGx6qtP41Bu1eWUPjM%2BwaeoHMl2fuSdmatvalMQGuprZIBT%2FGWOaLyiyLU7ZRDfxFJ%2F5JQBy5bD8qoymdyFMsk9NiOyYgxPtnJDT4r3uEAOhmFFWYq%2Fi2GLudDxZcdyh%2BUd0i4MrBEfAnLFpza1SM9N0fbHcIFTet74bPMBcMXGyLpnwqkyg3FquA90PjYNFEgtPldxjs%2BxmKfYhW6ChaGLCMTvI0gxHPAQ4%2FTj3FF9mfR%2FlC9Js3%2BgI9WVMJ3WSU%2FUUmPFU3yR4bmBLTay1e6HtBsLB4GowL3jApzt3DsQgU%2Fows6ItTA0FrvzWupK1EqcuCmio0P8YWtTjKRjYRcqDHtrR2gOKkpUSx042JcwA%2B8x%2F%2BF%2FRUfhS%2F7Mbq7U0Mlpg0hxJNJx81UGm2EYpqCM44%2FzRdw%2FO9tTeSakt%2F7EvbVSY%2Bo4A1bD1o%2F6nHwcXFaKU3ATq%2FQququSAaQokEJtMRTQmneIF0G1%2FXIddfGdyHOI6eVaIBNfz8RI6DKRKMi3Ykwte3SvwY6pgFzBGP%2BrFYLgLGQbpf9lz8flASJ7o7oyybDFsLMoyuY%2FyM7ux12jeTa41oYMER7alyL5U%2FYIC4ARwaSzykcStWUrJzNp079hZkZEeoe25Dp1fX%2FbdhRMfVWr2asczVjXPOrcB4j8Ay0D9Hl5%2B5gFSrQ7mEAgZTMcMSpNV1%2BmOmOvcfZdg7FJSOXVcvdMiycC1RbN8rOwxJm4YabG3SQAaOE4KamSQ78&X-Amz-Signature=ad8ab4c0c0b277152d69fcf50d0786cd99dc93b5bd89e3efd5143d585281f8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLORYYGA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76I8WzdQcSH4tDwfIpFtnPGFbcGVhBZvOF%2Fqd7zUrcAiBJbg2O6d%2FY354w%2FdEuXSf1HYGWFzWbevnl8jBjr3smpyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMZNPZ8bLop%2FnycWhtKtwDNSaD4BlkE27gTff%2Fgjq2UhcSScxGb32NkPz2nIlkZ%2BY%2B7eHY8MnA89yX18JcewZ6k9kQc55k%2BpQYpcLqMdbDW20FrzaGjjiy%2B3Z887WPZF%2FiBKxrtvcvDrcGx6qtP41Bu1eWUPjM%2BwaeoHMl2fuSdmatvalMQGuprZIBT%2FGWOaLyiyLU7ZRDfxFJ%2F5JQBy5bD8qoymdyFMsk9NiOyYgxPtnJDT4r3uEAOhmFFWYq%2Fi2GLudDxZcdyh%2BUd0i4MrBEfAnLFpza1SM9N0fbHcIFTet74bPMBcMXGyLpnwqkyg3FquA90PjYNFEgtPldxjs%2BxmKfYhW6ChaGLCMTvI0gxHPAQ4%2FTj3FF9mfR%2FlC9Js3%2BgI9WVMJ3WSU%2FUUmPFU3yR4bmBLTay1e6HtBsLB4GowL3jApzt3DsQgU%2Fows6ItTA0FrvzWupK1EqcuCmio0P8YWtTjKRjYRcqDHtrR2gOKkpUSx042JcwA%2B8x%2F%2BF%2FRUfhS%2F7Mbq7U0Mlpg0hxJNJx81UGm2EYpqCM44%2FzRdw%2FO9tTeSakt%2F7EvbVSY%2Bo4A1bD1o%2F6nHwcXFaKU3ATq%2FQququSAaQokEJtMRTQmneIF0G1%2FXIddfGdyHOI6eVaIBNfz8RI6DKRKMi3Ykwte3SvwY6pgFzBGP%2BrFYLgLGQbpf9lz8flASJ7o7oyybDFsLMoyuY%2FyM7ux12jeTa41oYMER7alyL5U%2FYIC4ARwaSzykcStWUrJzNp079hZkZEeoe25Dp1fX%2FbdhRMfVWr2asczVjXPOrcB4j8Ay0D9Hl5%2B5gFSrQ7mEAgZTMcMSpNV1%2BmOmOvcfZdg7FJSOXVcvdMiycC1RbN8rOwxJm4YabG3SQAaOE4KamSQ78&X-Amz-Signature=a25c1d2ba6d87c2096f7f7a6e1b7fb694a4e061f1bf2b6f05102de8c20e6e062&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLORYYGA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76I8WzdQcSH4tDwfIpFtnPGFbcGVhBZvOF%2Fqd7zUrcAiBJbg2O6d%2FY354w%2FdEuXSf1HYGWFzWbevnl8jBjr3smpyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMZNPZ8bLop%2FnycWhtKtwDNSaD4BlkE27gTff%2Fgjq2UhcSScxGb32NkPz2nIlkZ%2BY%2B7eHY8MnA89yX18JcewZ6k9kQc55k%2BpQYpcLqMdbDW20FrzaGjjiy%2B3Z887WPZF%2FiBKxrtvcvDrcGx6qtP41Bu1eWUPjM%2BwaeoHMl2fuSdmatvalMQGuprZIBT%2FGWOaLyiyLU7ZRDfxFJ%2F5JQBy5bD8qoymdyFMsk9NiOyYgxPtnJDT4r3uEAOhmFFWYq%2Fi2GLudDxZcdyh%2BUd0i4MrBEfAnLFpza1SM9N0fbHcIFTet74bPMBcMXGyLpnwqkyg3FquA90PjYNFEgtPldxjs%2BxmKfYhW6ChaGLCMTvI0gxHPAQ4%2FTj3FF9mfR%2FlC9Js3%2BgI9WVMJ3WSU%2FUUmPFU3yR4bmBLTay1e6HtBsLB4GowL3jApzt3DsQgU%2Fows6ItTA0FrvzWupK1EqcuCmio0P8YWtTjKRjYRcqDHtrR2gOKkpUSx042JcwA%2B8x%2F%2BF%2FRUfhS%2F7Mbq7U0Mlpg0hxJNJx81UGm2EYpqCM44%2FzRdw%2FO9tTeSakt%2F7EvbVSY%2Bo4A1bD1o%2F6nHwcXFaKU3ATq%2FQququSAaQokEJtMRTQmneIF0G1%2FXIddfGdyHOI6eVaIBNfz8RI6DKRKMi3Ykwte3SvwY6pgFzBGP%2BrFYLgLGQbpf9lz8flASJ7o7oyybDFsLMoyuY%2FyM7ux12jeTa41oYMER7alyL5U%2FYIC4ARwaSzykcStWUrJzNp079hZkZEeoe25Dp1fX%2FbdhRMfVWr2asczVjXPOrcB4j8Ay0D9Hl5%2B5gFSrQ7mEAgZTMcMSpNV1%2BmOmOvcfZdg7FJSOXVcvdMiycC1RbN8rOwxJm4YabG3SQAaOE4KamSQ78&X-Amz-Signature=d23fc412cc2fb31d73f062c40c2d143e0d3b1612a59c7ef41117de51a8295fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLORYYGA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE76I8WzdQcSH4tDwfIpFtnPGFbcGVhBZvOF%2Fqd7zUrcAiBJbg2O6d%2FY354w%2FdEuXSf1HYGWFzWbevnl8jBjr3smpyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMZNPZ8bLop%2FnycWhtKtwDNSaD4BlkE27gTff%2Fgjq2UhcSScxGb32NkPz2nIlkZ%2BY%2B7eHY8MnA89yX18JcewZ6k9kQc55k%2BpQYpcLqMdbDW20FrzaGjjiy%2B3Z887WPZF%2FiBKxrtvcvDrcGx6qtP41Bu1eWUPjM%2BwaeoHMl2fuSdmatvalMQGuprZIBT%2FGWOaLyiyLU7ZRDfxFJ%2F5JQBy5bD8qoymdyFMsk9NiOyYgxPtnJDT4r3uEAOhmFFWYq%2Fi2GLudDxZcdyh%2BUd0i4MrBEfAnLFpza1SM9N0fbHcIFTet74bPMBcMXGyLpnwqkyg3FquA90PjYNFEgtPldxjs%2BxmKfYhW6ChaGLCMTvI0gxHPAQ4%2FTj3FF9mfR%2FlC9Js3%2BgI9WVMJ3WSU%2FUUmPFU3yR4bmBLTay1e6HtBsLB4GowL3jApzt3DsQgU%2Fows6ItTA0FrvzWupK1EqcuCmio0P8YWtTjKRjYRcqDHtrR2gOKkpUSx042JcwA%2B8x%2F%2BF%2FRUfhS%2F7Mbq7U0Mlpg0hxJNJx81UGm2EYpqCM44%2FzRdw%2FO9tTeSakt%2F7EvbVSY%2Bo4A1bD1o%2F6nHwcXFaKU3ATq%2FQququSAaQokEJtMRTQmneIF0G1%2FXIddfGdyHOI6eVaIBNfz8RI6DKRKMi3Ykwte3SvwY6pgFzBGP%2BrFYLgLGQbpf9lz8flASJ7o7oyybDFsLMoyuY%2FyM7ux12jeTa41oYMER7alyL5U%2FYIC4ARwaSzykcStWUrJzNp079hZkZEeoe25Dp1fX%2FbdhRMfVWr2asczVjXPOrcB4j8Ay0D9Hl5%2B5gFSrQ7mEAgZTMcMSpNV1%2BmOmOvcfZdg7FJSOXVcvdMiycC1RbN8rOwxJm4YabG3SQAaOE4KamSQ78&X-Amz-Signature=f2596b8c8b82c61aec8964cf6c9ddb94c1569588831a537241e242ce95522279&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
