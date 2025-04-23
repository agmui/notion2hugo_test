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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE5FDVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD3yBPLqzipfS4d2R0mQ%2BiA8B5OwxQELmGjjm5giU6O1gIhAPNAtezaVmEj%2BsaeZ1ek61bpowpFbSxtCOUwTC7spXu4KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7o798G815BFAbsMq3ANtQ7lt8m0oWFr7VQ9%2FOMng0Ghk4GijfFplDJ4uf%2F18MpeXUb7f%2B7Z8n5mBrr%2F1xOKZMY0YB1CTa9qRMsg6J%2BfQkoCviEyTTKoMQ2DyqXpx0x9nft4jp9mUYOZhPFjoVWXxAyScR1iqlo7VrgddCyBl%2BuwyVzwCIhzGz2eTziaSvaXuV12zTlYTZtK%2FhN9dGKE5t%2BXz3o6skLMnyUgUpC7YHo0ACu%2BID9yif2t1aZzaUAyUnVMYNnVx1DByMOpFVo6QJv9t3qcvgbWK1SPeFQ%2FyirxRcVMB7mpax3FqFk3vxC6Aj0EiVvLBfal81jvwL7dnjNFbMOhfvwVuQnbKMPvEzO3ZdhWT5ubHyxqQw%2F%2FiqzHHID%2BNVOMM5eKsqBt%2BSmNormN%2BR0sQFatYY3R06ok0RLQFP1jBLg0BGEaeCv%2Fi5yxTmktFw6EqThH%2BuBFpMqJ4OKOC%2F9fUE2qZuk8adb%2B9aIooqKqZzbw47hVX%2F1S%2BCGePz%2B%2Fcoy5AemhcXwaMf1BjyYvbBTc%2BEjLGzbAQ1jVBSrrftskkIHZp1SVrp8zprVamkdbUN5fXyyWeH%2B4u6HGu0WJ6fKoIb6UqsmTxXSao0llgJbk3xrrlATwqlA0BAsSTVd4MRtskBCiZojCP6aLABjqkAdsnihHGztAs%2FfCM4pi9QHjOthYVaUU3%2FFBMFfE9Q%2Fl08FwTzvYas3b7AHNFhkuUr5xxKNUpqBsastWEcs%2BxDdYu%2FqxIrXTpAZbYqoutQsEQCgUS8zG%2BjLBjpv9qJkjOLn9M5sxB4ARHkFL5Oql3OQ0oHiJ1GIXUXDE2UrTlVx9vP1LvpuWq1n6vhm7d1UZ3KGdVMbBmbN1Hl7sLO18W%2FZ%2F4K8OW&X-Amz-Signature=396b79896fa8c77d7307c6e8a1cf87833f935eb3a589ff56794b02fc98025509&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE5FDVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD3yBPLqzipfS4d2R0mQ%2BiA8B5OwxQELmGjjm5giU6O1gIhAPNAtezaVmEj%2BsaeZ1ek61bpowpFbSxtCOUwTC7spXu4KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7o798G815BFAbsMq3ANtQ7lt8m0oWFr7VQ9%2FOMng0Ghk4GijfFplDJ4uf%2F18MpeXUb7f%2B7Z8n5mBrr%2F1xOKZMY0YB1CTa9qRMsg6J%2BfQkoCviEyTTKoMQ2DyqXpx0x9nft4jp9mUYOZhPFjoVWXxAyScR1iqlo7VrgddCyBl%2BuwyVzwCIhzGz2eTziaSvaXuV12zTlYTZtK%2FhN9dGKE5t%2BXz3o6skLMnyUgUpC7YHo0ACu%2BID9yif2t1aZzaUAyUnVMYNnVx1DByMOpFVo6QJv9t3qcvgbWK1SPeFQ%2FyirxRcVMB7mpax3FqFk3vxC6Aj0EiVvLBfal81jvwL7dnjNFbMOhfvwVuQnbKMPvEzO3ZdhWT5ubHyxqQw%2F%2FiqzHHID%2BNVOMM5eKsqBt%2BSmNormN%2BR0sQFatYY3R06ok0RLQFP1jBLg0BGEaeCv%2Fi5yxTmktFw6EqThH%2BuBFpMqJ4OKOC%2F9fUE2qZuk8adb%2B9aIooqKqZzbw47hVX%2F1S%2BCGePz%2B%2Fcoy5AemhcXwaMf1BjyYvbBTc%2BEjLGzbAQ1jVBSrrftskkIHZp1SVrp8zprVamkdbUN5fXyyWeH%2B4u6HGu0WJ6fKoIb6UqsmTxXSao0llgJbk3xrrlATwqlA0BAsSTVd4MRtskBCiZojCP6aLABjqkAdsnihHGztAs%2FfCM4pi9QHjOthYVaUU3%2FFBMFfE9Q%2Fl08FwTzvYas3b7AHNFhkuUr5xxKNUpqBsastWEcs%2BxDdYu%2FqxIrXTpAZbYqoutQsEQCgUS8zG%2BjLBjpv9qJkjOLn9M5sxB4ARHkFL5Oql3OQ0oHiJ1GIXUXDE2UrTlVx9vP1LvpuWq1n6vhm7d1UZ3KGdVMbBmbN1Hl7sLO18W%2FZ%2F4K8OW&X-Amz-Signature=8676251d28bbfd5096c85c65e0b77d8de158757d38a65f5ee447f07267cdc151&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE5FDVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD3yBPLqzipfS4d2R0mQ%2BiA8B5OwxQELmGjjm5giU6O1gIhAPNAtezaVmEj%2BsaeZ1ek61bpowpFbSxtCOUwTC7spXu4KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7o798G815BFAbsMq3ANtQ7lt8m0oWFr7VQ9%2FOMng0Ghk4GijfFplDJ4uf%2F18MpeXUb7f%2B7Z8n5mBrr%2F1xOKZMY0YB1CTa9qRMsg6J%2BfQkoCviEyTTKoMQ2DyqXpx0x9nft4jp9mUYOZhPFjoVWXxAyScR1iqlo7VrgddCyBl%2BuwyVzwCIhzGz2eTziaSvaXuV12zTlYTZtK%2FhN9dGKE5t%2BXz3o6skLMnyUgUpC7YHo0ACu%2BID9yif2t1aZzaUAyUnVMYNnVx1DByMOpFVo6QJv9t3qcvgbWK1SPeFQ%2FyirxRcVMB7mpax3FqFk3vxC6Aj0EiVvLBfal81jvwL7dnjNFbMOhfvwVuQnbKMPvEzO3ZdhWT5ubHyxqQw%2F%2FiqzHHID%2BNVOMM5eKsqBt%2BSmNormN%2BR0sQFatYY3R06ok0RLQFP1jBLg0BGEaeCv%2Fi5yxTmktFw6EqThH%2BuBFpMqJ4OKOC%2F9fUE2qZuk8adb%2B9aIooqKqZzbw47hVX%2F1S%2BCGePz%2B%2Fcoy5AemhcXwaMf1BjyYvbBTc%2BEjLGzbAQ1jVBSrrftskkIHZp1SVrp8zprVamkdbUN5fXyyWeH%2B4u6HGu0WJ6fKoIb6UqsmTxXSao0llgJbk3xrrlATwqlA0BAsSTVd4MRtskBCiZojCP6aLABjqkAdsnihHGztAs%2FfCM4pi9QHjOthYVaUU3%2FFBMFfE9Q%2Fl08FwTzvYas3b7AHNFhkuUr5xxKNUpqBsastWEcs%2BxDdYu%2FqxIrXTpAZbYqoutQsEQCgUS8zG%2BjLBjpv9qJkjOLn9M5sxB4ARHkFL5Oql3OQ0oHiJ1GIXUXDE2UrTlVx9vP1LvpuWq1n6vhm7d1UZ3KGdVMbBmbN1Hl7sLO18W%2FZ%2F4K8OW&X-Amz-Signature=ebaa4ecf8bfa4dec9e98ecc1066e3291619e3a1192d71e6ff96d1d37bac934cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE5FDVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD3yBPLqzipfS4d2R0mQ%2BiA8B5OwxQELmGjjm5giU6O1gIhAPNAtezaVmEj%2BsaeZ1ek61bpowpFbSxtCOUwTC7spXu4KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7o798G815BFAbsMq3ANtQ7lt8m0oWFr7VQ9%2FOMng0Ghk4GijfFplDJ4uf%2F18MpeXUb7f%2B7Z8n5mBrr%2F1xOKZMY0YB1CTa9qRMsg6J%2BfQkoCviEyTTKoMQ2DyqXpx0x9nft4jp9mUYOZhPFjoVWXxAyScR1iqlo7VrgddCyBl%2BuwyVzwCIhzGz2eTziaSvaXuV12zTlYTZtK%2FhN9dGKE5t%2BXz3o6skLMnyUgUpC7YHo0ACu%2BID9yif2t1aZzaUAyUnVMYNnVx1DByMOpFVo6QJv9t3qcvgbWK1SPeFQ%2FyirxRcVMB7mpax3FqFk3vxC6Aj0EiVvLBfal81jvwL7dnjNFbMOhfvwVuQnbKMPvEzO3ZdhWT5ubHyxqQw%2F%2FiqzHHID%2BNVOMM5eKsqBt%2BSmNormN%2BR0sQFatYY3R06ok0RLQFP1jBLg0BGEaeCv%2Fi5yxTmktFw6EqThH%2BuBFpMqJ4OKOC%2F9fUE2qZuk8adb%2B9aIooqKqZzbw47hVX%2F1S%2BCGePz%2B%2Fcoy5AemhcXwaMf1BjyYvbBTc%2BEjLGzbAQ1jVBSrrftskkIHZp1SVrp8zprVamkdbUN5fXyyWeH%2B4u6HGu0WJ6fKoIb6UqsmTxXSao0llgJbk3xrrlATwqlA0BAsSTVd4MRtskBCiZojCP6aLABjqkAdsnihHGztAs%2FfCM4pi9QHjOthYVaUU3%2FFBMFfE9Q%2Fl08FwTzvYas3b7AHNFhkuUr5xxKNUpqBsastWEcs%2BxDdYu%2FqxIrXTpAZbYqoutQsEQCgUS8zG%2BjLBjpv9qJkjOLn9M5sxB4ARHkFL5Oql3OQ0oHiJ1GIXUXDE2UrTlVx9vP1LvpuWq1n6vhm7d1UZ3KGdVMbBmbN1Hl7sLO18W%2FZ%2F4K8OW&X-Amz-Signature=e0a117e17618caa0a61332317348f0188454c9562291e2eb4324c2b19060052b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE5FDVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD3yBPLqzipfS4d2R0mQ%2BiA8B5OwxQELmGjjm5giU6O1gIhAPNAtezaVmEj%2BsaeZ1ek61bpowpFbSxtCOUwTC7spXu4KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7o798G815BFAbsMq3ANtQ7lt8m0oWFr7VQ9%2FOMng0Ghk4GijfFplDJ4uf%2F18MpeXUb7f%2B7Z8n5mBrr%2F1xOKZMY0YB1CTa9qRMsg6J%2BfQkoCviEyTTKoMQ2DyqXpx0x9nft4jp9mUYOZhPFjoVWXxAyScR1iqlo7VrgddCyBl%2BuwyVzwCIhzGz2eTziaSvaXuV12zTlYTZtK%2FhN9dGKE5t%2BXz3o6skLMnyUgUpC7YHo0ACu%2BID9yif2t1aZzaUAyUnVMYNnVx1DByMOpFVo6QJv9t3qcvgbWK1SPeFQ%2FyirxRcVMB7mpax3FqFk3vxC6Aj0EiVvLBfal81jvwL7dnjNFbMOhfvwVuQnbKMPvEzO3ZdhWT5ubHyxqQw%2F%2FiqzHHID%2BNVOMM5eKsqBt%2BSmNormN%2BR0sQFatYY3R06ok0RLQFP1jBLg0BGEaeCv%2Fi5yxTmktFw6EqThH%2BuBFpMqJ4OKOC%2F9fUE2qZuk8adb%2B9aIooqKqZzbw47hVX%2F1S%2BCGePz%2B%2Fcoy5AemhcXwaMf1BjyYvbBTc%2BEjLGzbAQ1jVBSrrftskkIHZp1SVrp8zprVamkdbUN5fXyyWeH%2B4u6HGu0WJ6fKoIb6UqsmTxXSao0llgJbk3xrrlATwqlA0BAsSTVd4MRtskBCiZojCP6aLABjqkAdsnihHGztAs%2FfCM4pi9QHjOthYVaUU3%2FFBMFfE9Q%2Fl08FwTzvYas3b7AHNFhkuUr5xxKNUpqBsastWEcs%2BxDdYu%2FqxIrXTpAZbYqoutQsEQCgUS8zG%2BjLBjpv9qJkjOLn9M5sxB4ARHkFL5Oql3OQ0oHiJ1GIXUXDE2UrTlVx9vP1LvpuWq1n6vhm7d1UZ3KGdVMbBmbN1Hl7sLO18W%2FZ%2F4K8OW&X-Amz-Signature=f76a7a0240cc981b41a0543494461434dbda7e082900ba51d57ba66b7c1aa6df&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE5FDVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD3yBPLqzipfS4d2R0mQ%2BiA8B5OwxQELmGjjm5giU6O1gIhAPNAtezaVmEj%2BsaeZ1ek61bpowpFbSxtCOUwTC7spXu4KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7o798G815BFAbsMq3ANtQ7lt8m0oWFr7VQ9%2FOMng0Ghk4GijfFplDJ4uf%2F18MpeXUb7f%2B7Z8n5mBrr%2F1xOKZMY0YB1CTa9qRMsg6J%2BfQkoCviEyTTKoMQ2DyqXpx0x9nft4jp9mUYOZhPFjoVWXxAyScR1iqlo7VrgddCyBl%2BuwyVzwCIhzGz2eTziaSvaXuV12zTlYTZtK%2FhN9dGKE5t%2BXz3o6skLMnyUgUpC7YHo0ACu%2BID9yif2t1aZzaUAyUnVMYNnVx1DByMOpFVo6QJv9t3qcvgbWK1SPeFQ%2FyirxRcVMB7mpax3FqFk3vxC6Aj0EiVvLBfal81jvwL7dnjNFbMOhfvwVuQnbKMPvEzO3ZdhWT5ubHyxqQw%2F%2FiqzHHID%2BNVOMM5eKsqBt%2BSmNormN%2BR0sQFatYY3R06ok0RLQFP1jBLg0BGEaeCv%2Fi5yxTmktFw6EqThH%2BuBFpMqJ4OKOC%2F9fUE2qZuk8adb%2B9aIooqKqZzbw47hVX%2F1S%2BCGePz%2B%2Fcoy5AemhcXwaMf1BjyYvbBTc%2BEjLGzbAQ1jVBSrrftskkIHZp1SVrp8zprVamkdbUN5fXyyWeH%2B4u6HGu0WJ6fKoIb6UqsmTxXSao0llgJbk3xrrlATwqlA0BAsSTVd4MRtskBCiZojCP6aLABjqkAdsnihHGztAs%2FfCM4pi9QHjOthYVaUU3%2FFBMFfE9Q%2Fl08FwTzvYas3b7AHNFhkuUr5xxKNUpqBsastWEcs%2BxDdYu%2FqxIrXTpAZbYqoutQsEQCgUS8zG%2BjLBjpv9qJkjOLn9M5sxB4ARHkFL5Oql3OQ0oHiJ1GIXUXDE2UrTlVx9vP1LvpuWq1n6vhm7d1UZ3KGdVMbBmbN1Hl7sLO18W%2FZ%2F4K8OW&X-Amz-Signature=7f6b366dd7ee604f095b21d6932b3814ccaf08874f946e6341f0b071c44dffb1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE5FDVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD3yBPLqzipfS4d2R0mQ%2BiA8B5OwxQELmGjjm5giU6O1gIhAPNAtezaVmEj%2BsaeZ1ek61bpowpFbSxtCOUwTC7spXu4KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm7o798G815BFAbsMq3ANtQ7lt8m0oWFr7VQ9%2FOMng0Ghk4GijfFplDJ4uf%2F18MpeXUb7f%2B7Z8n5mBrr%2F1xOKZMY0YB1CTa9qRMsg6J%2BfQkoCviEyTTKoMQ2DyqXpx0x9nft4jp9mUYOZhPFjoVWXxAyScR1iqlo7VrgddCyBl%2BuwyVzwCIhzGz2eTziaSvaXuV12zTlYTZtK%2FhN9dGKE5t%2BXz3o6skLMnyUgUpC7YHo0ACu%2BID9yif2t1aZzaUAyUnVMYNnVx1DByMOpFVo6QJv9t3qcvgbWK1SPeFQ%2FyirxRcVMB7mpax3FqFk3vxC6Aj0EiVvLBfal81jvwL7dnjNFbMOhfvwVuQnbKMPvEzO3ZdhWT5ubHyxqQw%2F%2FiqzHHID%2BNVOMM5eKsqBt%2BSmNormN%2BR0sQFatYY3R06ok0RLQFP1jBLg0BGEaeCv%2Fi5yxTmktFw6EqThH%2BuBFpMqJ4OKOC%2F9fUE2qZuk8adb%2B9aIooqKqZzbw47hVX%2F1S%2BCGePz%2B%2Fcoy5AemhcXwaMf1BjyYvbBTc%2BEjLGzbAQ1jVBSrrftskkIHZp1SVrp8zprVamkdbUN5fXyyWeH%2B4u6HGu0WJ6fKoIb6UqsmTxXSao0llgJbk3xrrlATwqlA0BAsSTVd4MRtskBCiZojCP6aLABjqkAdsnihHGztAs%2FfCM4pi9QHjOthYVaUU3%2FFBMFfE9Q%2Fl08FwTzvYas3b7AHNFhkuUr5xxKNUpqBsastWEcs%2BxDdYu%2FqxIrXTpAZbYqoutQsEQCgUS8zG%2BjLBjpv9qJkjOLn9M5sxB4ARHkFL5Oql3OQ0oHiJ1GIXUXDE2UrTlVx9vP1LvpuWq1n6vhm7d1UZ3KGdVMbBmbN1Hl7sLO18W%2FZ%2F4K8OW&X-Amz-Signature=4d70cd977bdef53088a004c0d265abcf98658274861e473e96bc4a9db6fedec1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
