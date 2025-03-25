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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGOZ2L5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbuyo%2BGlQV8cZqwbo8XziluKtYd%2BSINVsAuoTFjH8S3AiEAqrEYxT71Edb03rQgpS53sc7%2BhzmlJ9kyD7kdrs6ZZiQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGH%2FyOQXTwmbBwBN7CrcA1Krau52yBuZxfPeRRiadVFl17W6CTZd3iFbb9mnCPQRkWxMZH6KwqU5JN4ux%2FCxPniw4sM%2F5h8er9kQbVgrnnskqC4Z759JPikNoKkuHXb0qYfSRU3LzYxgVwGAhnOpOxLi7BJbRUD3z0dw9CpLiQeVQTonwSFUiiB6dMZQv6hZH2zyjW1KBBisL8cfn%2Bmzc%2FrQeyj%2FB09qAiY6QL4US1SDUKGSpqweDF8YRtIGk2279yHejAJijkfaYLKYCdrY%2FbXrYi3FmpPYU2cvuaSW25%2BuQ7ehAFf1F8WZsVM9UJpFk1x9TEsE9nmZhLlG8x68DWYVoLkR9sfx56pPM0kRjsLDr3tDx59znICRF2vyhFbK6KMbRoAss55kIsDgl76NQo4%2Fh6E0ICfE4O0iY863x%2Bvljp8w0UkkxvueHXu%2Fze361imCNT0DkmgD9bKrIvpcwO7XgOo4htK8pAzDcmIvv3PP%2FIX6IvBvsAVohBCrx9RNMkwyWDcWtzD1jsQ8X8bVWXZrUe44xOfqe4auzjHz9EaSr7kmXXIjAAXsGn%2BSM22O1xda%2BGIQa5AmnO5OgQwvSyVXBVFSsMQyAMyZZmXL9YLxu2yTyqfMovJ5J7BoIZ68GP%2Be8klP6b7jckxvMKKnir8GOqUBiCJanSq%2B97uiL7r0iBadZooRRNdh0dCq2L47z6EtahOcxfso7a14GSOyQ1JECKG%2BX5EvBvq5gC0eQkWG4rPdMvAmTlhOocB%2FqJF0vvHDorUbL2YTLaILTF%2FDf%2BS1VmuhEJp%2FkBpU9O944lY66h5UMTVAfuQOE7SgVZSe9qB0dwMcF5yeN1syQCN64mgnp4dw13ng8OSo5o%2FqAeAv9ltVJdhz9qCY&X-Amz-Signature=7af4ee5a7a73c2010f115373570d88d06c1d457f2163957bb9f924c6bbec6316&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGOZ2L5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbuyo%2BGlQV8cZqwbo8XziluKtYd%2BSINVsAuoTFjH8S3AiEAqrEYxT71Edb03rQgpS53sc7%2BhzmlJ9kyD7kdrs6ZZiQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGH%2FyOQXTwmbBwBN7CrcA1Krau52yBuZxfPeRRiadVFl17W6CTZd3iFbb9mnCPQRkWxMZH6KwqU5JN4ux%2FCxPniw4sM%2F5h8er9kQbVgrnnskqC4Z759JPikNoKkuHXb0qYfSRU3LzYxgVwGAhnOpOxLi7BJbRUD3z0dw9CpLiQeVQTonwSFUiiB6dMZQv6hZH2zyjW1KBBisL8cfn%2Bmzc%2FrQeyj%2FB09qAiY6QL4US1SDUKGSpqweDF8YRtIGk2279yHejAJijkfaYLKYCdrY%2FbXrYi3FmpPYU2cvuaSW25%2BuQ7ehAFf1F8WZsVM9UJpFk1x9TEsE9nmZhLlG8x68DWYVoLkR9sfx56pPM0kRjsLDr3tDx59znICRF2vyhFbK6KMbRoAss55kIsDgl76NQo4%2Fh6E0ICfE4O0iY863x%2Bvljp8w0UkkxvueHXu%2Fze361imCNT0DkmgD9bKrIvpcwO7XgOo4htK8pAzDcmIvv3PP%2FIX6IvBvsAVohBCrx9RNMkwyWDcWtzD1jsQ8X8bVWXZrUe44xOfqe4auzjHz9EaSr7kmXXIjAAXsGn%2BSM22O1xda%2BGIQa5AmnO5OgQwvSyVXBVFSsMQyAMyZZmXL9YLxu2yTyqfMovJ5J7BoIZ68GP%2Be8klP6b7jckxvMKKnir8GOqUBiCJanSq%2B97uiL7r0iBadZooRRNdh0dCq2L47z6EtahOcxfso7a14GSOyQ1JECKG%2BX5EvBvq5gC0eQkWG4rPdMvAmTlhOocB%2FqJF0vvHDorUbL2YTLaILTF%2FDf%2BS1VmuhEJp%2FkBpU9O944lY66h5UMTVAfuQOE7SgVZSe9qB0dwMcF5yeN1syQCN64mgnp4dw13ng8OSo5o%2FqAeAv9ltVJdhz9qCY&X-Amz-Signature=19566a8694924e656c07b542a84fcc93ac29d140da1b576cfe333e74070d7b77&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGOZ2L5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbuyo%2BGlQV8cZqwbo8XziluKtYd%2BSINVsAuoTFjH8S3AiEAqrEYxT71Edb03rQgpS53sc7%2BhzmlJ9kyD7kdrs6ZZiQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGH%2FyOQXTwmbBwBN7CrcA1Krau52yBuZxfPeRRiadVFl17W6CTZd3iFbb9mnCPQRkWxMZH6KwqU5JN4ux%2FCxPniw4sM%2F5h8er9kQbVgrnnskqC4Z759JPikNoKkuHXb0qYfSRU3LzYxgVwGAhnOpOxLi7BJbRUD3z0dw9CpLiQeVQTonwSFUiiB6dMZQv6hZH2zyjW1KBBisL8cfn%2Bmzc%2FrQeyj%2FB09qAiY6QL4US1SDUKGSpqweDF8YRtIGk2279yHejAJijkfaYLKYCdrY%2FbXrYi3FmpPYU2cvuaSW25%2BuQ7ehAFf1F8WZsVM9UJpFk1x9TEsE9nmZhLlG8x68DWYVoLkR9sfx56pPM0kRjsLDr3tDx59znICRF2vyhFbK6KMbRoAss55kIsDgl76NQo4%2Fh6E0ICfE4O0iY863x%2Bvljp8w0UkkxvueHXu%2Fze361imCNT0DkmgD9bKrIvpcwO7XgOo4htK8pAzDcmIvv3PP%2FIX6IvBvsAVohBCrx9RNMkwyWDcWtzD1jsQ8X8bVWXZrUe44xOfqe4auzjHz9EaSr7kmXXIjAAXsGn%2BSM22O1xda%2BGIQa5AmnO5OgQwvSyVXBVFSsMQyAMyZZmXL9YLxu2yTyqfMovJ5J7BoIZ68GP%2Be8klP6b7jckxvMKKnir8GOqUBiCJanSq%2B97uiL7r0iBadZooRRNdh0dCq2L47z6EtahOcxfso7a14GSOyQ1JECKG%2BX5EvBvq5gC0eQkWG4rPdMvAmTlhOocB%2FqJF0vvHDorUbL2YTLaILTF%2FDf%2BS1VmuhEJp%2FkBpU9O944lY66h5UMTVAfuQOE7SgVZSe9qB0dwMcF5yeN1syQCN64mgnp4dw13ng8OSo5o%2FqAeAv9ltVJdhz9qCY&X-Amz-Signature=0311424d331c40d100a55be22a4d2d952be03a9d6096aa1ee9c8e0ff82ed9412&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGOZ2L5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbuyo%2BGlQV8cZqwbo8XziluKtYd%2BSINVsAuoTFjH8S3AiEAqrEYxT71Edb03rQgpS53sc7%2BhzmlJ9kyD7kdrs6ZZiQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGH%2FyOQXTwmbBwBN7CrcA1Krau52yBuZxfPeRRiadVFl17W6CTZd3iFbb9mnCPQRkWxMZH6KwqU5JN4ux%2FCxPniw4sM%2F5h8er9kQbVgrnnskqC4Z759JPikNoKkuHXb0qYfSRU3LzYxgVwGAhnOpOxLi7BJbRUD3z0dw9CpLiQeVQTonwSFUiiB6dMZQv6hZH2zyjW1KBBisL8cfn%2Bmzc%2FrQeyj%2FB09qAiY6QL4US1SDUKGSpqweDF8YRtIGk2279yHejAJijkfaYLKYCdrY%2FbXrYi3FmpPYU2cvuaSW25%2BuQ7ehAFf1F8WZsVM9UJpFk1x9TEsE9nmZhLlG8x68DWYVoLkR9sfx56pPM0kRjsLDr3tDx59znICRF2vyhFbK6KMbRoAss55kIsDgl76NQo4%2Fh6E0ICfE4O0iY863x%2Bvljp8w0UkkxvueHXu%2Fze361imCNT0DkmgD9bKrIvpcwO7XgOo4htK8pAzDcmIvv3PP%2FIX6IvBvsAVohBCrx9RNMkwyWDcWtzD1jsQ8X8bVWXZrUe44xOfqe4auzjHz9EaSr7kmXXIjAAXsGn%2BSM22O1xda%2BGIQa5AmnO5OgQwvSyVXBVFSsMQyAMyZZmXL9YLxu2yTyqfMovJ5J7BoIZ68GP%2Be8klP6b7jckxvMKKnir8GOqUBiCJanSq%2B97uiL7r0iBadZooRRNdh0dCq2L47z6EtahOcxfso7a14GSOyQ1JECKG%2BX5EvBvq5gC0eQkWG4rPdMvAmTlhOocB%2FqJF0vvHDorUbL2YTLaILTF%2FDf%2BS1VmuhEJp%2FkBpU9O944lY66h5UMTVAfuQOE7SgVZSe9qB0dwMcF5yeN1syQCN64mgnp4dw13ng8OSo5o%2FqAeAv9ltVJdhz9qCY&X-Amz-Signature=0b2ff4fcc3e2fe0eeb9bc47fde3cacf32e1246fb6932c18495c278243da31bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGOZ2L5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbuyo%2BGlQV8cZqwbo8XziluKtYd%2BSINVsAuoTFjH8S3AiEAqrEYxT71Edb03rQgpS53sc7%2BhzmlJ9kyD7kdrs6ZZiQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGH%2FyOQXTwmbBwBN7CrcA1Krau52yBuZxfPeRRiadVFl17W6CTZd3iFbb9mnCPQRkWxMZH6KwqU5JN4ux%2FCxPniw4sM%2F5h8er9kQbVgrnnskqC4Z759JPikNoKkuHXb0qYfSRU3LzYxgVwGAhnOpOxLi7BJbRUD3z0dw9CpLiQeVQTonwSFUiiB6dMZQv6hZH2zyjW1KBBisL8cfn%2Bmzc%2FrQeyj%2FB09qAiY6QL4US1SDUKGSpqweDF8YRtIGk2279yHejAJijkfaYLKYCdrY%2FbXrYi3FmpPYU2cvuaSW25%2BuQ7ehAFf1F8WZsVM9UJpFk1x9TEsE9nmZhLlG8x68DWYVoLkR9sfx56pPM0kRjsLDr3tDx59znICRF2vyhFbK6KMbRoAss55kIsDgl76NQo4%2Fh6E0ICfE4O0iY863x%2Bvljp8w0UkkxvueHXu%2Fze361imCNT0DkmgD9bKrIvpcwO7XgOo4htK8pAzDcmIvv3PP%2FIX6IvBvsAVohBCrx9RNMkwyWDcWtzD1jsQ8X8bVWXZrUe44xOfqe4auzjHz9EaSr7kmXXIjAAXsGn%2BSM22O1xda%2BGIQa5AmnO5OgQwvSyVXBVFSsMQyAMyZZmXL9YLxu2yTyqfMovJ5J7BoIZ68GP%2Be8klP6b7jckxvMKKnir8GOqUBiCJanSq%2B97uiL7r0iBadZooRRNdh0dCq2L47z6EtahOcxfso7a14GSOyQ1JECKG%2BX5EvBvq5gC0eQkWG4rPdMvAmTlhOocB%2FqJF0vvHDorUbL2YTLaILTF%2FDf%2BS1VmuhEJp%2FkBpU9O944lY66h5UMTVAfuQOE7SgVZSe9qB0dwMcF5yeN1syQCN64mgnp4dw13ng8OSo5o%2FqAeAv9ltVJdhz9qCY&X-Amz-Signature=5df34b4309bc07ada326eeff41bfe0a790815eb95dc0089e839b4c6e86e253c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGOZ2L5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbuyo%2BGlQV8cZqwbo8XziluKtYd%2BSINVsAuoTFjH8S3AiEAqrEYxT71Edb03rQgpS53sc7%2BhzmlJ9kyD7kdrs6ZZiQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGH%2FyOQXTwmbBwBN7CrcA1Krau52yBuZxfPeRRiadVFl17W6CTZd3iFbb9mnCPQRkWxMZH6KwqU5JN4ux%2FCxPniw4sM%2F5h8er9kQbVgrnnskqC4Z759JPikNoKkuHXb0qYfSRU3LzYxgVwGAhnOpOxLi7BJbRUD3z0dw9CpLiQeVQTonwSFUiiB6dMZQv6hZH2zyjW1KBBisL8cfn%2Bmzc%2FrQeyj%2FB09qAiY6QL4US1SDUKGSpqweDF8YRtIGk2279yHejAJijkfaYLKYCdrY%2FbXrYi3FmpPYU2cvuaSW25%2BuQ7ehAFf1F8WZsVM9UJpFk1x9TEsE9nmZhLlG8x68DWYVoLkR9sfx56pPM0kRjsLDr3tDx59znICRF2vyhFbK6KMbRoAss55kIsDgl76NQo4%2Fh6E0ICfE4O0iY863x%2Bvljp8w0UkkxvueHXu%2Fze361imCNT0DkmgD9bKrIvpcwO7XgOo4htK8pAzDcmIvv3PP%2FIX6IvBvsAVohBCrx9RNMkwyWDcWtzD1jsQ8X8bVWXZrUe44xOfqe4auzjHz9EaSr7kmXXIjAAXsGn%2BSM22O1xda%2BGIQa5AmnO5OgQwvSyVXBVFSsMQyAMyZZmXL9YLxu2yTyqfMovJ5J7BoIZ68GP%2Be8klP6b7jckxvMKKnir8GOqUBiCJanSq%2B97uiL7r0iBadZooRRNdh0dCq2L47z6EtahOcxfso7a14GSOyQ1JECKG%2BX5EvBvq5gC0eQkWG4rPdMvAmTlhOocB%2FqJF0vvHDorUbL2YTLaILTF%2FDf%2BS1VmuhEJp%2FkBpU9O944lY66h5UMTVAfuQOE7SgVZSe9qB0dwMcF5yeN1syQCN64mgnp4dw13ng8OSo5o%2FqAeAv9ltVJdhz9qCY&X-Amz-Signature=abdcea8a37e5804e9cc545902002c4c61166e9981f69e59dbe80fe4d25246bea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGOZ2L5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbuyo%2BGlQV8cZqwbo8XziluKtYd%2BSINVsAuoTFjH8S3AiEAqrEYxT71Edb03rQgpS53sc7%2BhzmlJ9kyD7kdrs6ZZiQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGH%2FyOQXTwmbBwBN7CrcA1Krau52yBuZxfPeRRiadVFl17W6CTZd3iFbb9mnCPQRkWxMZH6KwqU5JN4ux%2FCxPniw4sM%2F5h8er9kQbVgrnnskqC4Z759JPikNoKkuHXb0qYfSRU3LzYxgVwGAhnOpOxLi7BJbRUD3z0dw9CpLiQeVQTonwSFUiiB6dMZQv6hZH2zyjW1KBBisL8cfn%2Bmzc%2FrQeyj%2FB09qAiY6QL4US1SDUKGSpqweDF8YRtIGk2279yHejAJijkfaYLKYCdrY%2FbXrYi3FmpPYU2cvuaSW25%2BuQ7ehAFf1F8WZsVM9UJpFk1x9TEsE9nmZhLlG8x68DWYVoLkR9sfx56pPM0kRjsLDr3tDx59znICRF2vyhFbK6KMbRoAss55kIsDgl76NQo4%2Fh6E0ICfE4O0iY863x%2Bvljp8w0UkkxvueHXu%2Fze361imCNT0DkmgD9bKrIvpcwO7XgOo4htK8pAzDcmIvv3PP%2FIX6IvBvsAVohBCrx9RNMkwyWDcWtzD1jsQ8X8bVWXZrUe44xOfqe4auzjHz9EaSr7kmXXIjAAXsGn%2BSM22O1xda%2BGIQa5AmnO5OgQwvSyVXBVFSsMQyAMyZZmXL9YLxu2yTyqfMovJ5J7BoIZ68GP%2Be8klP6b7jckxvMKKnir8GOqUBiCJanSq%2B97uiL7r0iBadZooRRNdh0dCq2L47z6EtahOcxfso7a14GSOyQ1JECKG%2BX5EvBvq5gC0eQkWG4rPdMvAmTlhOocB%2FqJF0vvHDorUbL2YTLaILTF%2FDf%2BS1VmuhEJp%2FkBpU9O944lY66h5UMTVAfuQOE7SgVZSe9qB0dwMcF5yeN1syQCN64mgnp4dw13ng8OSo5o%2FqAeAv9ltVJdhz9qCY&X-Amz-Signature=17d419f1f2ee1ed41f069c91affd463ed1c588cda031e27c130266b54fba8649&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
