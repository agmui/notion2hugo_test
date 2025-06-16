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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDOKHHR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC4oZzpJA92ASe8yRMmXfJJ6mrZXzZk2xgRffqBSLIlUAIhAIGRo48gNRWR3gYDYwYNNdYHYtRpaBXyqEUB945v0ec4Kv8DCGMQABoMNjM3NDIzMTgzODA1IgyzFi5C4DaUGel7WoIq3AP1XBF4ZPrfERgpCv%2BZADDlq%2BgK5vmBPCTHnpnfq7JM6nf9DFCgJr7jmj83iEm%2BswBIvUzoNku5bwdUeeIuzpaigp3aHspHO%2FA9oFpTjn40yCAKK8YTjZu3KVPpa%2FrAnxkdDze7M2CECPVK1xQzMnvUAc7TRjIDYLCSN%2Bw14QL5vRAsIGr51AUMpfPlPRNkGzFfvK1t3tNw4R6po8uKjrj7VXlEF241O8BgfErINu%2F4H1JTysDGN%2FUseysbkUX4wmajAU4dTp5ek3JdnWF72FLtBTRhdoutnBHSKAekwm4RdTi6y4GpQTU4sobup89hF6pw7W601JqJwpi2HUv%2FJb5fn9t%2F1z%2BcSiBKfFp7jMkrxmcOA3U%2BLYMoswf%2FQqUgeAd6fIsx3NZkawq2duqNeY3uJI5B6AtgskujXDDiGq%2FPkt%2FAjzTsdmLj399YWXZEO4wsgnW7QclVwbjSU0QuVn8E4QySmfKHngGJqRjejHRj6ITLWKEXcflDvOoWCYat2d2JcK84%2FvqWeUtu23aj%2Fon9WeajTeHeTN2HGZbN6fH5X%2FQFCr3LbBnV3jWWuoe8yeU5eKTq9CjP3s%2FZJE4su1iXRIug3AYq4xWYjeV62%2FZh0Lqt%2Fsi7iYTrsHFQQzDpr8HCBjqkAYyBIfQACA%2B0eEqQNyf4OjssMvBTcb8trajkcb70wd7cOW0Z%2B%2BZorqqfbUwZLdtaYqFptE1Tt%2BDXJPrk9d%2F2Az%2BaVJ4REnuLyK1tlCh4EGot2Qtx3s9K92bSZIEM4HnpUiqTrnBu52vqw45lyhzE8bt036qVYffsmaa%2BSRttzzjhg%2F1Y%2BFFTQoS4LUnPmNcNQXGAFj8H5AfGxvYdIBT6DV7sl1ai&X-Amz-Signature=509d6374dedd9b5aad71415bd96069b970049b318b193cd6e202bdbbe38e4297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDOKHHR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC4oZzpJA92ASe8yRMmXfJJ6mrZXzZk2xgRffqBSLIlUAIhAIGRo48gNRWR3gYDYwYNNdYHYtRpaBXyqEUB945v0ec4Kv8DCGMQABoMNjM3NDIzMTgzODA1IgyzFi5C4DaUGel7WoIq3AP1XBF4ZPrfERgpCv%2BZADDlq%2BgK5vmBPCTHnpnfq7JM6nf9DFCgJr7jmj83iEm%2BswBIvUzoNku5bwdUeeIuzpaigp3aHspHO%2FA9oFpTjn40yCAKK8YTjZu3KVPpa%2FrAnxkdDze7M2CECPVK1xQzMnvUAc7TRjIDYLCSN%2Bw14QL5vRAsIGr51AUMpfPlPRNkGzFfvK1t3tNw4R6po8uKjrj7VXlEF241O8BgfErINu%2F4H1JTysDGN%2FUseysbkUX4wmajAU4dTp5ek3JdnWF72FLtBTRhdoutnBHSKAekwm4RdTi6y4GpQTU4sobup89hF6pw7W601JqJwpi2HUv%2FJb5fn9t%2F1z%2BcSiBKfFp7jMkrxmcOA3U%2BLYMoswf%2FQqUgeAd6fIsx3NZkawq2duqNeY3uJI5B6AtgskujXDDiGq%2FPkt%2FAjzTsdmLj399YWXZEO4wsgnW7QclVwbjSU0QuVn8E4QySmfKHngGJqRjejHRj6ITLWKEXcflDvOoWCYat2d2JcK84%2FvqWeUtu23aj%2Fon9WeajTeHeTN2HGZbN6fH5X%2FQFCr3LbBnV3jWWuoe8yeU5eKTq9CjP3s%2FZJE4su1iXRIug3AYq4xWYjeV62%2FZh0Lqt%2Fsi7iYTrsHFQQzDpr8HCBjqkAYyBIfQACA%2B0eEqQNyf4OjssMvBTcb8trajkcb70wd7cOW0Z%2B%2BZorqqfbUwZLdtaYqFptE1Tt%2BDXJPrk9d%2F2Az%2BaVJ4REnuLyK1tlCh4EGot2Qtx3s9K92bSZIEM4HnpUiqTrnBu52vqw45lyhzE8bt036qVYffsmaa%2BSRttzzjhg%2F1Y%2BFFTQoS4LUnPmNcNQXGAFj8H5AfGxvYdIBT6DV7sl1ai&X-Amz-Signature=0ae342102bcd3ac174993d02bb603c3634bdc897b4c0e5a6f7fdeb420f55c582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDOKHHR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC4oZzpJA92ASe8yRMmXfJJ6mrZXzZk2xgRffqBSLIlUAIhAIGRo48gNRWR3gYDYwYNNdYHYtRpaBXyqEUB945v0ec4Kv8DCGMQABoMNjM3NDIzMTgzODA1IgyzFi5C4DaUGel7WoIq3AP1XBF4ZPrfERgpCv%2BZADDlq%2BgK5vmBPCTHnpnfq7JM6nf9DFCgJr7jmj83iEm%2BswBIvUzoNku5bwdUeeIuzpaigp3aHspHO%2FA9oFpTjn40yCAKK8YTjZu3KVPpa%2FrAnxkdDze7M2CECPVK1xQzMnvUAc7TRjIDYLCSN%2Bw14QL5vRAsIGr51AUMpfPlPRNkGzFfvK1t3tNw4R6po8uKjrj7VXlEF241O8BgfErINu%2F4H1JTysDGN%2FUseysbkUX4wmajAU4dTp5ek3JdnWF72FLtBTRhdoutnBHSKAekwm4RdTi6y4GpQTU4sobup89hF6pw7W601JqJwpi2HUv%2FJb5fn9t%2F1z%2BcSiBKfFp7jMkrxmcOA3U%2BLYMoswf%2FQqUgeAd6fIsx3NZkawq2duqNeY3uJI5B6AtgskujXDDiGq%2FPkt%2FAjzTsdmLj399YWXZEO4wsgnW7QclVwbjSU0QuVn8E4QySmfKHngGJqRjejHRj6ITLWKEXcflDvOoWCYat2d2JcK84%2FvqWeUtu23aj%2Fon9WeajTeHeTN2HGZbN6fH5X%2FQFCr3LbBnV3jWWuoe8yeU5eKTq9CjP3s%2FZJE4su1iXRIug3AYq4xWYjeV62%2FZh0Lqt%2Fsi7iYTrsHFQQzDpr8HCBjqkAYyBIfQACA%2B0eEqQNyf4OjssMvBTcb8trajkcb70wd7cOW0Z%2B%2BZorqqfbUwZLdtaYqFptE1Tt%2BDXJPrk9d%2F2Az%2BaVJ4REnuLyK1tlCh4EGot2Qtx3s9K92bSZIEM4HnpUiqTrnBu52vqw45lyhzE8bt036qVYffsmaa%2BSRttzzjhg%2F1Y%2BFFTQoS4LUnPmNcNQXGAFj8H5AfGxvYdIBT6DV7sl1ai&X-Amz-Signature=3c29b52ab7ab85eda200bb2200f36319624ab10f3ff0f64e4c1ef054da3d9bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDOKHHR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC4oZzpJA92ASe8yRMmXfJJ6mrZXzZk2xgRffqBSLIlUAIhAIGRo48gNRWR3gYDYwYNNdYHYtRpaBXyqEUB945v0ec4Kv8DCGMQABoMNjM3NDIzMTgzODA1IgyzFi5C4DaUGel7WoIq3AP1XBF4ZPrfERgpCv%2BZADDlq%2BgK5vmBPCTHnpnfq7JM6nf9DFCgJr7jmj83iEm%2BswBIvUzoNku5bwdUeeIuzpaigp3aHspHO%2FA9oFpTjn40yCAKK8YTjZu3KVPpa%2FrAnxkdDze7M2CECPVK1xQzMnvUAc7TRjIDYLCSN%2Bw14QL5vRAsIGr51AUMpfPlPRNkGzFfvK1t3tNw4R6po8uKjrj7VXlEF241O8BgfErINu%2F4H1JTysDGN%2FUseysbkUX4wmajAU4dTp5ek3JdnWF72FLtBTRhdoutnBHSKAekwm4RdTi6y4GpQTU4sobup89hF6pw7W601JqJwpi2HUv%2FJb5fn9t%2F1z%2BcSiBKfFp7jMkrxmcOA3U%2BLYMoswf%2FQqUgeAd6fIsx3NZkawq2duqNeY3uJI5B6AtgskujXDDiGq%2FPkt%2FAjzTsdmLj399YWXZEO4wsgnW7QclVwbjSU0QuVn8E4QySmfKHngGJqRjejHRj6ITLWKEXcflDvOoWCYat2d2JcK84%2FvqWeUtu23aj%2Fon9WeajTeHeTN2HGZbN6fH5X%2FQFCr3LbBnV3jWWuoe8yeU5eKTq9CjP3s%2FZJE4su1iXRIug3AYq4xWYjeV62%2FZh0Lqt%2Fsi7iYTrsHFQQzDpr8HCBjqkAYyBIfQACA%2B0eEqQNyf4OjssMvBTcb8trajkcb70wd7cOW0Z%2B%2BZorqqfbUwZLdtaYqFptE1Tt%2BDXJPrk9d%2F2Az%2BaVJ4REnuLyK1tlCh4EGot2Qtx3s9K92bSZIEM4HnpUiqTrnBu52vqw45lyhzE8bt036qVYffsmaa%2BSRttzzjhg%2F1Y%2BFFTQoS4LUnPmNcNQXGAFj8H5AfGxvYdIBT6DV7sl1ai&X-Amz-Signature=4913ac081af3b9b12f3086e8266d86c2d917643ac782478cfc79e0f7e0ef885f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDOKHHR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC4oZzpJA92ASe8yRMmXfJJ6mrZXzZk2xgRffqBSLIlUAIhAIGRo48gNRWR3gYDYwYNNdYHYtRpaBXyqEUB945v0ec4Kv8DCGMQABoMNjM3NDIzMTgzODA1IgyzFi5C4DaUGel7WoIq3AP1XBF4ZPrfERgpCv%2BZADDlq%2BgK5vmBPCTHnpnfq7JM6nf9DFCgJr7jmj83iEm%2BswBIvUzoNku5bwdUeeIuzpaigp3aHspHO%2FA9oFpTjn40yCAKK8YTjZu3KVPpa%2FrAnxkdDze7M2CECPVK1xQzMnvUAc7TRjIDYLCSN%2Bw14QL5vRAsIGr51AUMpfPlPRNkGzFfvK1t3tNw4R6po8uKjrj7VXlEF241O8BgfErINu%2F4H1JTysDGN%2FUseysbkUX4wmajAU4dTp5ek3JdnWF72FLtBTRhdoutnBHSKAekwm4RdTi6y4GpQTU4sobup89hF6pw7W601JqJwpi2HUv%2FJb5fn9t%2F1z%2BcSiBKfFp7jMkrxmcOA3U%2BLYMoswf%2FQqUgeAd6fIsx3NZkawq2duqNeY3uJI5B6AtgskujXDDiGq%2FPkt%2FAjzTsdmLj399YWXZEO4wsgnW7QclVwbjSU0QuVn8E4QySmfKHngGJqRjejHRj6ITLWKEXcflDvOoWCYat2d2JcK84%2FvqWeUtu23aj%2Fon9WeajTeHeTN2HGZbN6fH5X%2FQFCr3LbBnV3jWWuoe8yeU5eKTq9CjP3s%2FZJE4su1iXRIug3AYq4xWYjeV62%2FZh0Lqt%2Fsi7iYTrsHFQQzDpr8HCBjqkAYyBIfQACA%2B0eEqQNyf4OjssMvBTcb8trajkcb70wd7cOW0Z%2B%2BZorqqfbUwZLdtaYqFptE1Tt%2BDXJPrk9d%2F2Az%2BaVJ4REnuLyK1tlCh4EGot2Qtx3s9K92bSZIEM4HnpUiqTrnBu52vqw45lyhzE8bt036qVYffsmaa%2BSRttzzjhg%2F1Y%2BFFTQoS4LUnPmNcNQXGAFj8H5AfGxvYdIBT6DV7sl1ai&X-Amz-Signature=314b45739a39becbaffd41cf57602a44b4351f819e82c40e2d6d4b3bc7c12950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDOKHHR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC4oZzpJA92ASe8yRMmXfJJ6mrZXzZk2xgRffqBSLIlUAIhAIGRo48gNRWR3gYDYwYNNdYHYtRpaBXyqEUB945v0ec4Kv8DCGMQABoMNjM3NDIzMTgzODA1IgyzFi5C4DaUGel7WoIq3AP1XBF4ZPrfERgpCv%2BZADDlq%2BgK5vmBPCTHnpnfq7JM6nf9DFCgJr7jmj83iEm%2BswBIvUzoNku5bwdUeeIuzpaigp3aHspHO%2FA9oFpTjn40yCAKK8YTjZu3KVPpa%2FrAnxkdDze7M2CECPVK1xQzMnvUAc7TRjIDYLCSN%2Bw14QL5vRAsIGr51AUMpfPlPRNkGzFfvK1t3tNw4R6po8uKjrj7VXlEF241O8BgfErINu%2F4H1JTysDGN%2FUseysbkUX4wmajAU4dTp5ek3JdnWF72FLtBTRhdoutnBHSKAekwm4RdTi6y4GpQTU4sobup89hF6pw7W601JqJwpi2HUv%2FJb5fn9t%2F1z%2BcSiBKfFp7jMkrxmcOA3U%2BLYMoswf%2FQqUgeAd6fIsx3NZkawq2duqNeY3uJI5B6AtgskujXDDiGq%2FPkt%2FAjzTsdmLj399YWXZEO4wsgnW7QclVwbjSU0QuVn8E4QySmfKHngGJqRjejHRj6ITLWKEXcflDvOoWCYat2d2JcK84%2FvqWeUtu23aj%2Fon9WeajTeHeTN2HGZbN6fH5X%2FQFCr3LbBnV3jWWuoe8yeU5eKTq9CjP3s%2FZJE4su1iXRIug3AYq4xWYjeV62%2FZh0Lqt%2Fsi7iYTrsHFQQzDpr8HCBjqkAYyBIfQACA%2B0eEqQNyf4OjssMvBTcb8trajkcb70wd7cOW0Z%2B%2BZorqqfbUwZLdtaYqFptE1Tt%2BDXJPrk9d%2F2Az%2BaVJ4REnuLyK1tlCh4EGot2Qtx3s9K92bSZIEM4HnpUiqTrnBu52vqw45lyhzE8bt036qVYffsmaa%2BSRttzzjhg%2F1Y%2BFFTQoS4LUnPmNcNQXGAFj8H5AfGxvYdIBT6DV7sl1ai&X-Amz-Signature=f7e79a62fda73a4c4d78959f05ce5154ddac7b2d259ee0052fbe5d80747e221e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDOKHHR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC4oZzpJA92ASe8yRMmXfJJ6mrZXzZk2xgRffqBSLIlUAIhAIGRo48gNRWR3gYDYwYNNdYHYtRpaBXyqEUB945v0ec4Kv8DCGMQABoMNjM3NDIzMTgzODA1IgyzFi5C4DaUGel7WoIq3AP1XBF4ZPrfERgpCv%2BZADDlq%2BgK5vmBPCTHnpnfq7JM6nf9DFCgJr7jmj83iEm%2BswBIvUzoNku5bwdUeeIuzpaigp3aHspHO%2FA9oFpTjn40yCAKK8YTjZu3KVPpa%2FrAnxkdDze7M2CECPVK1xQzMnvUAc7TRjIDYLCSN%2Bw14QL5vRAsIGr51AUMpfPlPRNkGzFfvK1t3tNw4R6po8uKjrj7VXlEF241O8BgfErINu%2F4H1JTysDGN%2FUseysbkUX4wmajAU4dTp5ek3JdnWF72FLtBTRhdoutnBHSKAekwm4RdTi6y4GpQTU4sobup89hF6pw7W601JqJwpi2HUv%2FJb5fn9t%2F1z%2BcSiBKfFp7jMkrxmcOA3U%2BLYMoswf%2FQqUgeAd6fIsx3NZkawq2duqNeY3uJI5B6AtgskujXDDiGq%2FPkt%2FAjzTsdmLj399YWXZEO4wsgnW7QclVwbjSU0QuVn8E4QySmfKHngGJqRjejHRj6ITLWKEXcflDvOoWCYat2d2JcK84%2FvqWeUtu23aj%2Fon9WeajTeHeTN2HGZbN6fH5X%2FQFCr3LbBnV3jWWuoe8yeU5eKTq9CjP3s%2FZJE4su1iXRIug3AYq4xWYjeV62%2FZh0Lqt%2Fsi7iYTrsHFQQzDpr8HCBjqkAYyBIfQACA%2B0eEqQNyf4OjssMvBTcb8trajkcb70wd7cOW0Z%2B%2BZorqqfbUwZLdtaYqFptE1Tt%2BDXJPrk9d%2F2Az%2BaVJ4REnuLyK1tlCh4EGot2Qtx3s9K92bSZIEM4HnpUiqTrnBu52vqw45lyhzE8bt036qVYffsmaa%2BSRttzzjhg%2F1Y%2BFFTQoS4LUnPmNcNQXGAFj8H5AfGxvYdIBT6DV7sl1ai&X-Amz-Signature=420eab3d468e590c16b4c739d9af4d92d5556b39f52869ad6b9b6981ae5bc3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
