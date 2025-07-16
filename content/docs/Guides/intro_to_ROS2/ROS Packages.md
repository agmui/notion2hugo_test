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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ESIXTD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAqag4A5n4GlH1OTUCqnlccvV43FlwswA0%2FDfbJOXfdCAiA0Vno%2F79KF4Ejh7fMFk50vdZHp8SR%2BxNdkwFpk54jWASr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMHtAME5WQ%2BjM4XZGcKtwDxNFwcat1vx0cf9bzrogW9d9f7Z9HECFE3Bc0dm1ZnQDMt72GuMlw8rOIaRG7ipC5ZB701x3g%2FDwqYcfXhr7Ql2sxw4gdiSOkJMfamvJ97PBWokFU0Z4VE5bCdwiSiB8VmJ76o%2B6Kz2fS7RD%2FuAMolc98ew%2F6SOSNWA%2F%2BxFx0MtL%2FBo%2FrhZ417JmfR%2B1wjqz16Ay03ORk8wPqR4UAcvAcSginm0jsRy4fUwr7h8k%2B9eF1W6GOA8UsID2pLQhp7IuBwznveNHmHl%2BxA6ACOqtAov8nKxxXVTJZcrWe9OdemeYTNAgvlV5TuwJ9f%2BmLgB1zRh5gGeQTz2RhDU%2FPxalFKaIhd2gNPhubOwgDOqg82LV60zt%2BzAj8V2aEsCIJToWq4DSWyFm3uGkhWS%2F1tJ8WGBFNDK3gPrkhCj2febL612iwHtoGvtvc%2B2huINSOIXj%2F7OZRC0r7u2EPvbcGZeCtHHzTBGFFNouI0LtPIiVGHhqOMDVbkaT20AFGT82FafRmqEX0kUIjKev8SPhvaQ9An0KOChA%2BWHRuKs4RGncl%2B%2B5uurC8TfdF8NQoZEzV3oH%2BZGl8x7XLjjMIo61dZCCdm5%2BDgI5980P5HC8F9BpYwnvEqnqlNMyGn03FqbAw%2FdDgwwY6pgHhiej5HpMN0KA5DoGuT6sszasYRiHiFmMhQGBKSj%2FWtFkOzWbfvej1dtxy6zZtjS74n5cW5rsxhN1jcmLvZj5LOb4OW2PzZq%2FEgvAhl8W0jBQUGVcYQtv34h1VjPeMWDc0PI%2BMSBHq4ugsp07tt86Ab2og%2BjRonsaHZzvM17ZCid2pLPNYjGPFiy%2BaMe2dZgMDCTLf6200FJ0o5mm6JeSdCplo4jME&X-Amz-Signature=848a8976503f6f7a7a57541e17246f3b008582b6551c8714bc3c0e3b72bb7685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ESIXTD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAqag4A5n4GlH1OTUCqnlccvV43FlwswA0%2FDfbJOXfdCAiA0Vno%2F79KF4Ejh7fMFk50vdZHp8SR%2BxNdkwFpk54jWASr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMHtAME5WQ%2BjM4XZGcKtwDxNFwcat1vx0cf9bzrogW9d9f7Z9HECFE3Bc0dm1ZnQDMt72GuMlw8rOIaRG7ipC5ZB701x3g%2FDwqYcfXhr7Ql2sxw4gdiSOkJMfamvJ97PBWokFU0Z4VE5bCdwiSiB8VmJ76o%2B6Kz2fS7RD%2FuAMolc98ew%2F6SOSNWA%2F%2BxFx0MtL%2FBo%2FrhZ417JmfR%2B1wjqz16Ay03ORk8wPqR4UAcvAcSginm0jsRy4fUwr7h8k%2B9eF1W6GOA8UsID2pLQhp7IuBwznveNHmHl%2BxA6ACOqtAov8nKxxXVTJZcrWe9OdemeYTNAgvlV5TuwJ9f%2BmLgB1zRh5gGeQTz2RhDU%2FPxalFKaIhd2gNPhubOwgDOqg82LV60zt%2BzAj8V2aEsCIJToWq4DSWyFm3uGkhWS%2F1tJ8WGBFNDK3gPrkhCj2febL612iwHtoGvtvc%2B2huINSOIXj%2F7OZRC0r7u2EPvbcGZeCtHHzTBGFFNouI0LtPIiVGHhqOMDVbkaT20AFGT82FafRmqEX0kUIjKev8SPhvaQ9An0KOChA%2BWHRuKs4RGncl%2B%2B5uurC8TfdF8NQoZEzV3oH%2BZGl8x7XLjjMIo61dZCCdm5%2BDgI5980P5HC8F9BpYwnvEqnqlNMyGn03FqbAw%2FdDgwwY6pgHhiej5HpMN0KA5DoGuT6sszasYRiHiFmMhQGBKSj%2FWtFkOzWbfvej1dtxy6zZtjS74n5cW5rsxhN1jcmLvZj5LOb4OW2PzZq%2FEgvAhl8W0jBQUGVcYQtv34h1VjPeMWDc0PI%2BMSBHq4ugsp07tt86Ab2og%2BjRonsaHZzvM17ZCid2pLPNYjGPFiy%2BaMe2dZgMDCTLf6200FJ0o5mm6JeSdCplo4jME&X-Amz-Signature=2ed49d5cfa60beb9364f394fdc60e4c16996a33dfccc4aead55ddde5f8a4a5ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ESIXTD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAqag4A5n4GlH1OTUCqnlccvV43FlwswA0%2FDfbJOXfdCAiA0Vno%2F79KF4Ejh7fMFk50vdZHp8SR%2BxNdkwFpk54jWASr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMHtAME5WQ%2BjM4XZGcKtwDxNFwcat1vx0cf9bzrogW9d9f7Z9HECFE3Bc0dm1ZnQDMt72GuMlw8rOIaRG7ipC5ZB701x3g%2FDwqYcfXhr7Ql2sxw4gdiSOkJMfamvJ97PBWokFU0Z4VE5bCdwiSiB8VmJ76o%2B6Kz2fS7RD%2FuAMolc98ew%2F6SOSNWA%2F%2BxFx0MtL%2FBo%2FrhZ417JmfR%2B1wjqz16Ay03ORk8wPqR4UAcvAcSginm0jsRy4fUwr7h8k%2B9eF1W6GOA8UsID2pLQhp7IuBwznveNHmHl%2BxA6ACOqtAov8nKxxXVTJZcrWe9OdemeYTNAgvlV5TuwJ9f%2BmLgB1zRh5gGeQTz2RhDU%2FPxalFKaIhd2gNPhubOwgDOqg82LV60zt%2BzAj8V2aEsCIJToWq4DSWyFm3uGkhWS%2F1tJ8WGBFNDK3gPrkhCj2febL612iwHtoGvtvc%2B2huINSOIXj%2F7OZRC0r7u2EPvbcGZeCtHHzTBGFFNouI0LtPIiVGHhqOMDVbkaT20AFGT82FafRmqEX0kUIjKev8SPhvaQ9An0KOChA%2BWHRuKs4RGncl%2B%2B5uurC8TfdF8NQoZEzV3oH%2BZGl8x7XLjjMIo61dZCCdm5%2BDgI5980P5HC8F9BpYwnvEqnqlNMyGn03FqbAw%2FdDgwwY6pgHhiej5HpMN0KA5DoGuT6sszasYRiHiFmMhQGBKSj%2FWtFkOzWbfvej1dtxy6zZtjS74n5cW5rsxhN1jcmLvZj5LOb4OW2PzZq%2FEgvAhl8W0jBQUGVcYQtv34h1VjPeMWDc0PI%2BMSBHq4ugsp07tt86Ab2og%2BjRonsaHZzvM17ZCid2pLPNYjGPFiy%2BaMe2dZgMDCTLf6200FJ0o5mm6JeSdCplo4jME&X-Amz-Signature=210e0805c75a0e8e3c1a142fa3ac205b94da0ce1a41428f08c48f01901c7b3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ESIXTD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAqag4A5n4GlH1OTUCqnlccvV43FlwswA0%2FDfbJOXfdCAiA0Vno%2F79KF4Ejh7fMFk50vdZHp8SR%2BxNdkwFpk54jWASr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMHtAME5WQ%2BjM4XZGcKtwDxNFwcat1vx0cf9bzrogW9d9f7Z9HECFE3Bc0dm1ZnQDMt72GuMlw8rOIaRG7ipC5ZB701x3g%2FDwqYcfXhr7Ql2sxw4gdiSOkJMfamvJ97PBWokFU0Z4VE5bCdwiSiB8VmJ76o%2B6Kz2fS7RD%2FuAMolc98ew%2F6SOSNWA%2F%2BxFx0MtL%2FBo%2FrhZ417JmfR%2B1wjqz16Ay03ORk8wPqR4UAcvAcSginm0jsRy4fUwr7h8k%2B9eF1W6GOA8UsID2pLQhp7IuBwznveNHmHl%2BxA6ACOqtAov8nKxxXVTJZcrWe9OdemeYTNAgvlV5TuwJ9f%2BmLgB1zRh5gGeQTz2RhDU%2FPxalFKaIhd2gNPhubOwgDOqg82LV60zt%2BzAj8V2aEsCIJToWq4DSWyFm3uGkhWS%2F1tJ8WGBFNDK3gPrkhCj2febL612iwHtoGvtvc%2B2huINSOIXj%2F7OZRC0r7u2EPvbcGZeCtHHzTBGFFNouI0LtPIiVGHhqOMDVbkaT20AFGT82FafRmqEX0kUIjKev8SPhvaQ9An0KOChA%2BWHRuKs4RGncl%2B%2B5uurC8TfdF8NQoZEzV3oH%2BZGl8x7XLjjMIo61dZCCdm5%2BDgI5980P5HC8F9BpYwnvEqnqlNMyGn03FqbAw%2FdDgwwY6pgHhiej5HpMN0KA5DoGuT6sszasYRiHiFmMhQGBKSj%2FWtFkOzWbfvej1dtxy6zZtjS74n5cW5rsxhN1jcmLvZj5LOb4OW2PzZq%2FEgvAhl8W0jBQUGVcYQtv34h1VjPeMWDc0PI%2BMSBHq4ugsp07tt86Ab2og%2BjRonsaHZzvM17ZCid2pLPNYjGPFiy%2BaMe2dZgMDCTLf6200FJ0o5mm6JeSdCplo4jME&X-Amz-Signature=2e32c90652e8d688d0e415b3e797b6bb693e360d91ac02ac1c2fbe7ac00eab04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ESIXTD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAqag4A5n4GlH1OTUCqnlccvV43FlwswA0%2FDfbJOXfdCAiA0Vno%2F79KF4Ejh7fMFk50vdZHp8SR%2BxNdkwFpk54jWASr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMHtAME5WQ%2BjM4XZGcKtwDxNFwcat1vx0cf9bzrogW9d9f7Z9HECFE3Bc0dm1ZnQDMt72GuMlw8rOIaRG7ipC5ZB701x3g%2FDwqYcfXhr7Ql2sxw4gdiSOkJMfamvJ97PBWokFU0Z4VE5bCdwiSiB8VmJ76o%2B6Kz2fS7RD%2FuAMolc98ew%2F6SOSNWA%2F%2BxFx0MtL%2FBo%2FrhZ417JmfR%2B1wjqz16Ay03ORk8wPqR4UAcvAcSginm0jsRy4fUwr7h8k%2B9eF1W6GOA8UsID2pLQhp7IuBwznveNHmHl%2BxA6ACOqtAov8nKxxXVTJZcrWe9OdemeYTNAgvlV5TuwJ9f%2BmLgB1zRh5gGeQTz2RhDU%2FPxalFKaIhd2gNPhubOwgDOqg82LV60zt%2BzAj8V2aEsCIJToWq4DSWyFm3uGkhWS%2F1tJ8WGBFNDK3gPrkhCj2febL612iwHtoGvtvc%2B2huINSOIXj%2F7OZRC0r7u2EPvbcGZeCtHHzTBGFFNouI0LtPIiVGHhqOMDVbkaT20AFGT82FafRmqEX0kUIjKev8SPhvaQ9An0KOChA%2BWHRuKs4RGncl%2B%2B5uurC8TfdF8NQoZEzV3oH%2BZGl8x7XLjjMIo61dZCCdm5%2BDgI5980P5HC8F9BpYwnvEqnqlNMyGn03FqbAw%2FdDgwwY6pgHhiej5HpMN0KA5DoGuT6sszasYRiHiFmMhQGBKSj%2FWtFkOzWbfvej1dtxy6zZtjS74n5cW5rsxhN1jcmLvZj5LOb4OW2PzZq%2FEgvAhl8W0jBQUGVcYQtv34h1VjPeMWDc0PI%2BMSBHq4ugsp07tt86Ab2og%2BjRonsaHZzvM17ZCid2pLPNYjGPFiy%2BaMe2dZgMDCTLf6200FJ0o5mm6JeSdCplo4jME&X-Amz-Signature=59bd563e8ac9ccec6e409021fdc69565637c66de572c67793cebd27d6e665947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ESIXTD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAqag4A5n4GlH1OTUCqnlccvV43FlwswA0%2FDfbJOXfdCAiA0Vno%2F79KF4Ejh7fMFk50vdZHp8SR%2BxNdkwFpk54jWASr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMHtAME5WQ%2BjM4XZGcKtwDxNFwcat1vx0cf9bzrogW9d9f7Z9HECFE3Bc0dm1ZnQDMt72GuMlw8rOIaRG7ipC5ZB701x3g%2FDwqYcfXhr7Ql2sxw4gdiSOkJMfamvJ97PBWokFU0Z4VE5bCdwiSiB8VmJ76o%2B6Kz2fS7RD%2FuAMolc98ew%2F6SOSNWA%2F%2BxFx0MtL%2FBo%2FrhZ417JmfR%2B1wjqz16Ay03ORk8wPqR4UAcvAcSginm0jsRy4fUwr7h8k%2B9eF1W6GOA8UsID2pLQhp7IuBwznveNHmHl%2BxA6ACOqtAov8nKxxXVTJZcrWe9OdemeYTNAgvlV5TuwJ9f%2BmLgB1zRh5gGeQTz2RhDU%2FPxalFKaIhd2gNPhubOwgDOqg82LV60zt%2BzAj8V2aEsCIJToWq4DSWyFm3uGkhWS%2F1tJ8WGBFNDK3gPrkhCj2febL612iwHtoGvtvc%2B2huINSOIXj%2F7OZRC0r7u2EPvbcGZeCtHHzTBGFFNouI0LtPIiVGHhqOMDVbkaT20AFGT82FafRmqEX0kUIjKev8SPhvaQ9An0KOChA%2BWHRuKs4RGncl%2B%2B5uurC8TfdF8NQoZEzV3oH%2BZGl8x7XLjjMIo61dZCCdm5%2BDgI5980P5HC8F9BpYwnvEqnqlNMyGn03FqbAw%2FdDgwwY6pgHhiej5HpMN0KA5DoGuT6sszasYRiHiFmMhQGBKSj%2FWtFkOzWbfvej1dtxy6zZtjS74n5cW5rsxhN1jcmLvZj5LOb4OW2PzZq%2FEgvAhl8W0jBQUGVcYQtv34h1VjPeMWDc0PI%2BMSBHq4ugsp07tt86Ab2og%2BjRonsaHZzvM17ZCid2pLPNYjGPFiy%2BaMe2dZgMDCTLf6200FJ0o5mm6JeSdCplo4jME&X-Amz-Signature=f3276f5879917c2d9ef6e89f7dab7a53700de0e8e3fb70f73ffdbde0e2a6036a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ESIXTD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAqag4A5n4GlH1OTUCqnlccvV43FlwswA0%2FDfbJOXfdCAiA0Vno%2F79KF4Ejh7fMFk50vdZHp8SR%2BxNdkwFpk54jWASr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMHtAME5WQ%2BjM4XZGcKtwDxNFwcat1vx0cf9bzrogW9d9f7Z9HECFE3Bc0dm1ZnQDMt72GuMlw8rOIaRG7ipC5ZB701x3g%2FDwqYcfXhr7Ql2sxw4gdiSOkJMfamvJ97PBWokFU0Z4VE5bCdwiSiB8VmJ76o%2B6Kz2fS7RD%2FuAMolc98ew%2F6SOSNWA%2F%2BxFx0MtL%2FBo%2FrhZ417JmfR%2B1wjqz16Ay03ORk8wPqR4UAcvAcSginm0jsRy4fUwr7h8k%2B9eF1W6GOA8UsID2pLQhp7IuBwznveNHmHl%2BxA6ACOqtAov8nKxxXVTJZcrWe9OdemeYTNAgvlV5TuwJ9f%2BmLgB1zRh5gGeQTz2RhDU%2FPxalFKaIhd2gNPhubOwgDOqg82LV60zt%2BzAj8V2aEsCIJToWq4DSWyFm3uGkhWS%2F1tJ8WGBFNDK3gPrkhCj2febL612iwHtoGvtvc%2B2huINSOIXj%2F7OZRC0r7u2EPvbcGZeCtHHzTBGFFNouI0LtPIiVGHhqOMDVbkaT20AFGT82FafRmqEX0kUIjKev8SPhvaQ9An0KOChA%2BWHRuKs4RGncl%2B%2B5uurC8TfdF8NQoZEzV3oH%2BZGl8x7XLjjMIo61dZCCdm5%2BDgI5980P5HC8F9BpYwnvEqnqlNMyGn03FqbAw%2FdDgwwY6pgHhiej5HpMN0KA5DoGuT6sszasYRiHiFmMhQGBKSj%2FWtFkOzWbfvej1dtxy6zZtjS74n5cW5rsxhN1jcmLvZj5LOb4OW2PzZq%2FEgvAhl8W0jBQUGVcYQtv34h1VjPeMWDc0PI%2BMSBHq4ugsp07tt86Ab2og%2BjRonsaHZzvM17ZCid2pLPNYjGPFiy%2BaMe2dZgMDCTLf6200FJ0o5mm6JeSdCplo4jME&X-Amz-Signature=06ffe9494a954d84ec990848d41f297e5e8ab5fa55b73ebe8988309d0abaa857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
