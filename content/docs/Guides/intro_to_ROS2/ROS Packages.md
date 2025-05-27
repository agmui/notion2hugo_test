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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RN2ISM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUAVnXxHbWVSvf%2BUILp4InrBfQGCtdj6%2BX96XOFarxCAiB7O6WUhAjBlKT%2BOm8rtgW8mdn6poVA7J1cevutDS9BYir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwuAQ2wnDcbfjI9JQKtwD%2FOKyPEbL1v4IacMb%2FXqrg6xvWHzIjRPh0fn6P137knLzRWtmFC9Gov4Q2nifs7r5tIIV2PszicHIT5bwCjTTWEDUdL9HH%2BZsrOAeziWXzwWBezh%2B434eiTri5oibI0Xrv%2Fn3cLxtN18SM%2BS%2BEwae3qiyd9QmwBmuCQQwpaeu3T293IKxSTfdJXCVxryL1IuCeHNueRiwx2nOV9JXM87cWGNQvPOuvJAQ4c1w64B7nTpdCwz4xkCTw9vm8tXx85EV52w%2BINSk99HiB%2FoGSIB3dP8pUwKBM%2FJz63pKJy6FXME%2Bn%2Fa6RKEr6Y1lBDBAcy%2FNrSUmdrtExnhmXlDc21Tai1NM3chQWG3ZUwSwILaqS%2FsP5Dk%2BWNuPcUijNXHGljP2ZjA9GTyxfHehLzGuf0ZDac5%2BULGoGZVlnF9v1mMOOOlHnhtXd2HqzD39GBNZYsCemVIeY93xU79qz6I2d4FY7pknMVtqB1s2e3Q%2FJjFTpH28QcisoqB6Aik8H9fRGIyA5jk88bM02vDzOJH0XDm28uE8ADoY5bn7HlBLrgNj%2BTvQVqpPtnDEIHMxP0o5F53PKSGHvoktr8zgBYsMse%2BF4W60TxeqwtYbsHp1h0sZVEQV0rdOtkYKJbu1Am8w%2BvzWwQY6pgHNwmod4PSu2cnEwymIXNJ%2BRBofjJTM%2FEPM3fhpdjx78nijRsQuFFOptllg9eWXuSubmHebPDAiujd3NQcfGHsm1tE9JcyRViBOp5yX40PlAv9dSlsE8pGDYV%2FVcKz6k9DcwYEdAPR9C1mJPALEhSFUV%2FGs1Ak1WBEwf2XuAK204gGruNHyyhrpCBhNJo1ezD90PgY6IdVrNwO3eTpqTwcqGpAymnYY&X-Amz-Signature=233f7745f8cacc4e6679199a22e46fea47d69dfaa5185e16623b7ba8a19118d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RN2ISM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUAVnXxHbWVSvf%2BUILp4InrBfQGCtdj6%2BX96XOFarxCAiB7O6WUhAjBlKT%2BOm8rtgW8mdn6poVA7J1cevutDS9BYir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwuAQ2wnDcbfjI9JQKtwD%2FOKyPEbL1v4IacMb%2FXqrg6xvWHzIjRPh0fn6P137knLzRWtmFC9Gov4Q2nifs7r5tIIV2PszicHIT5bwCjTTWEDUdL9HH%2BZsrOAeziWXzwWBezh%2B434eiTri5oibI0Xrv%2Fn3cLxtN18SM%2BS%2BEwae3qiyd9QmwBmuCQQwpaeu3T293IKxSTfdJXCVxryL1IuCeHNueRiwx2nOV9JXM87cWGNQvPOuvJAQ4c1w64B7nTpdCwz4xkCTw9vm8tXx85EV52w%2BINSk99HiB%2FoGSIB3dP8pUwKBM%2FJz63pKJy6FXME%2Bn%2Fa6RKEr6Y1lBDBAcy%2FNrSUmdrtExnhmXlDc21Tai1NM3chQWG3ZUwSwILaqS%2FsP5Dk%2BWNuPcUijNXHGljP2ZjA9GTyxfHehLzGuf0ZDac5%2BULGoGZVlnF9v1mMOOOlHnhtXd2HqzD39GBNZYsCemVIeY93xU79qz6I2d4FY7pknMVtqB1s2e3Q%2FJjFTpH28QcisoqB6Aik8H9fRGIyA5jk88bM02vDzOJH0XDm28uE8ADoY5bn7HlBLrgNj%2BTvQVqpPtnDEIHMxP0o5F53PKSGHvoktr8zgBYsMse%2BF4W60TxeqwtYbsHp1h0sZVEQV0rdOtkYKJbu1Am8w%2BvzWwQY6pgHNwmod4PSu2cnEwymIXNJ%2BRBofjJTM%2FEPM3fhpdjx78nijRsQuFFOptllg9eWXuSubmHebPDAiujd3NQcfGHsm1tE9JcyRViBOp5yX40PlAv9dSlsE8pGDYV%2FVcKz6k9DcwYEdAPR9C1mJPALEhSFUV%2FGs1Ak1WBEwf2XuAK204gGruNHyyhrpCBhNJo1ezD90PgY6IdVrNwO3eTpqTwcqGpAymnYY&X-Amz-Signature=7767ec5c69aa260abb0d5fcffc60800a44327287ecc085849a0d2afe25feee67&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RN2ISM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUAVnXxHbWVSvf%2BUILp4InrBfQGCtdj6%2BX96XOFarxCAiB7O6WUhAjBlKT%2BOm8rtgW8mdn6poVA7J1cevutDS9BYir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwuAQ2wnDcbfjI9JQKtwD%2FOKyPEbL1v4IacMb%2FXqrg6xvWHzIjRPh0fn6P137knLzRWtmFC9Gov4Q2nifs7r5tIIV2PszicHIT5bwCjTTWEDUdL9HH%2BZsrOAeziWXzwWBezh%2B434eiTri5oibI0Xrv%2Fn3cLxtN18SM%2BS%2BEwae3qiyd9QmwBmuCQQwpaeu3T293IKxSTfdJXCVxryL1IuCeHNueRiwx2nOV9JXM87cWGNQvPOuvJAQ4c1w64B7nTpdCwz4xkCTw9vm8tXx85EV52w%2BINSk99HiB%2FoGSIB3dP8pUwKBM%2FJz63pKJy6FXME%2Bn%2Fa6RKEr6Y1lBDBAcy%2FNrSUmdrtExnhmXlDc21Tai1NM3chQWG3ZUwSwILaqS%2FsP5Dk%2BWNuPcUijNXHGljP2ZjA9GTyxfHehLzGuf0ZDac5%2BULGoGZVlnF9v1mMOOOlHnhtXd2HqzD39GBNZYsCemVIeY93xU79qz6I2d4FY7pknMVtqB1s2e3Q%2FJjFTpH28QcisoqB6Aik8H9fRGIyA5jk88bM02vDzOJH0XDm28uE8ADoY5bn7HlBLrgNj%2BTvQVqpPtnDEIHMxP0o5F53PKSGHvoktr8zgBYsMse%2BF4W60TxeqwtYbsHp1h0sZVEQV0rdOtkYKJbu1Am8w%2BvzWwQY6pgHNwmod4PSu2cnEwymIXNJ%2BRBofjJTM%2FEPM3fhpdjx78nijRsQuFFOptllg9eWXuSubmHebPDAiujd3NQcfGHsm1tE9JcyRViBOp5yX40PlAv9dSlsE8pGDYV%2FVcKz6k9DcwYEdAPR9C1mJPALEhSFUV%2FGs1Ak1WBEwf2XuAK204gGruNHyyhrpCBhNJo1ezD90PgY6IdVrNwO3eTpqTwcqGpAymnYY&X-Amz-Signature=25dd0da7e804bc8d133c1c71e3c90f6d120fcee24ada5efe4f1d0815365da8de&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RN2ISM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUAVnXxHbWVSvf%2BUILp4InrBfQGCtdj6%2BX96XOFarxCAiB7O6WUhAjBlKT%2BOm8rtgW8mdn6poVA7J1cevutDS9BYir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwuAQ2wnDcbfjI9JQKtwD%2FOKyPEbL1v4IacMb%2FXqrg6xvWHzIjRPh0fn6P137knLzRWtmFC9Gov4Q2nifs7r5tIIV2PszicHIT5bwCjTTWEDUdL9HH%2BZsrOAeziWXzwWBezh%2B434eiTri5oibI0Xrv%2Fn3cLxtN18SM%2BS%2BEwae3qiyd9QmwBmuCQQwpaeu3T293IKxSTfdJXCVxryL1IuCeHNueRiwx2nOV9JXM87cWGNQvPOuvJAQ4c1w64B7nTpdCwz4xkCTw9vm8tXx85EV52w%2BINSk99HiB%2FoGSIB3dP8pUwKBM%2FJz63pKJy6FXME%2Bn%2Fa6RKEr6Y1lBDBAcy%2FNrSUmdrtExnhmXlDc21Tai1NM3chQWG3ZUwSwILaqS%2FsP5Dk%2BWNuPcUijNXHGljP2ZjA9GTyxfHehLzGuf0ZDac5%2BULGoGZVlnF9v1mMOOOlHnhtXd2HqzD39GBNZYsCemVIeY93xU79qz6I2d4FY7pknMVtqB1s2e3Q%2FJjFTpH28QcisoqB6Aik8H9fRGIyA5jk88bM02vDzOJH0XDm28uE8ADoY5bn7HlBLrgNj%2BTvQVqpPtnDEIHMxP0o5F53PKSGHvoktr8zgBYsMse%2BF4W60TxeqwtYbsHp1h0sZVEQV0rdOtkYKJbu1Am8w%2BvzWwQY6pgHNwmod4PSu2cnEwymIXNJ%2BRBofjJTM%2FEPM3fhpdjx78nijRsQuFFOptllg9eWXuSubmHebPDAiujd3NQcfGHsm1tE9JcyRViBOp5yX40PlAv9dSlsE8pGDYV%2FVcKz6k9DcwYEdAPR9C1mJPALEhSFUV%2FGs1Ak1WBEwf2XuAK204gGruNHyyhrpCBhNJo1ezD90PgY6IdVrNwO3eTpqTwcqGpAymnYY&X-Amz-Signature=687e25ccd684453e6bc40b43736b3cff7bfac3778ec65f51cb1a2f1f59f42209&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RN2ISM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUAVnXxHbWVSvf%2BUILp4InrBfQGCtdj6%2BX96XOFarxCAiB7O6WUhAjBlKT%2BOm8rtgW8mdn6poVA7J1cevutDS9BYir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwuAQ2wnDcbfjI9JQKtwD%2FOKyPEbL1v4IacMb%2FXqrg6xvWHzIjRPh0fn6P137knLzRWtmFC9Gov4Q2nifs7r5tIIV2PszicHIT5bwCjTTWEDUdL9HH%2BZsrOAeziWXzwWBezh%2B434eiTri5oibI0Xrv%2Fn3cLxtN18SM%2BS%2BEwae3qiyd9QmwBmuCQQwpaeu3T293IKxSTfdJXCVxryL1IuCeHNueRiwx2nOV9JXM87cWGNQvPOuvJAQ4c1w64B7nTpdCwz4xkCTw9vm8tXx85EV52w%2BINSk99HiB%2FoGSIB3dP8pUwKBM%2FJz63pKJy6FXME%2Bn%2Fa6RKEr6Y1lBDBAcy%2FNrSUmdrtExnhmXlDc21Tai1NM3chQWG3ZUwSwILaqS%2FsP5Dk%2BWNuPcUijNXHGljP2ZjA9GTyxfHehLzGuf0ZDac5%2BULGoGZVlnF9v1mMOOOlHnhtXd2HqzD39GBNZYsCemVIeY93xU79qz6I2d4FY7pknMVtqB1s2e3Q%2FJjFTpH28QcisoqB6Aik8H9fRGIyA5jk88bM02vDzOJH0XDm28uE8ADoY5bn7HlBLrgNj%2BTvQVqpPtnDEIHMxP0o5F53PKSGHvoktr8zgBYsMse%2BF4W60TxeqwtYbsHp1h0sZVEQV0rdOtkYKJbu1Am8w%2BvzWwQY6pgHNwmod4PSu2cnEwymIXNJ%2BRBofjJTM%2FEPM3fhpdjx78nijRsQuFFOptllg9eWXuSubmHebPDAiujd3NQcfGHsm1tE9JcyRViBOp5yX40PlAv9dSlsE8pGDYV%2FVcKz6k9DcwYEdAPR9C1mJPALEhSFUV%2FGs1Ak1WBEwf2XuAK204gGruNHyyhrpCBhNJo1ezD90PgY6IdVrNwO3eTpqTwcqGpAymnYY&X-Amz-Signature=7816c805b768c41f721d5d2e32a0b43cd068c7324d3626912e4b2fab7b754d03&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RN2ISM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUAVnXxHbWVSvf%2BUILp4InrBfQGCtdj6%2BX96XOFarxCAiB7O6WUhAjBlKT%2BOm8rtgW8mdn6poVA7J1cevutDS9BYir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwuAQ2wnDcbfjI9JQKtwD%2FOKyPEbL1v4IacMb%2FXqrg6xvWHzIjRPh0fn6P137knLzRWtmFC9Gov4Q2nifs7r5tIIV2PszicHIT5bwCjTTWEDUdL9HH%2BZsrOAeziWXzwWBezh%2B434eiTri5oibI0Xrv%2Fn3cLxtN18SM%2BS%2BEwae3qiyd9QmwBmuCQQwpaeu3T293IKxSTfdJXCVxryL1IuCeHNueRiwx2nOV9JXM87cWGNQvPOuvJAQ4c1w64B7nTpdCwz4xkCTw9vm8tXx85EV52w%2BINSk99HiB%2FoGSIB3dP8pUwKBM%2FJz63pKJy6FXME%2Bn%2Fa6RKEr6Y1lBDBAcy%2FNrSUmdrtExnhmXlDc21Tai1NM3chQWG3ZUwSwILaqS%2FsP5Dk%2BWNuPcUijNXHGljP2ZjA9GTyxfHehLzGuf0ZDac5%2BULGoGZVlnF9v1mMOOOlHnhtXd2HqzD39GBNZYsCemVIeY93xU79qz6I2d4FY7pknMVtqB1s2e3Q%2FJjFTpH28QcisoqB6Aik8H9fRGIyA5jk88bM02vDzOJH0XDm28uE8ADoY5bn7HlBLrgNj%2BTvQVqpPtnDEIHMxP0o5F53PKSGHvoktr8zgBYsMse%2BF4W60TxeqwtYbsHp1h0sZVEQV0rdOtkYKJbu1Am8w%2BvzWwQY6pgHNwmod4PSu2cnEwymIXNJ%2BRBofjJTM%2FEPM3fhpdjx78nijRsQuFFOptllg9eWXuSubmHebPDAiujd3NQcfGHsm1tE9JcyRViBOp5yX40PlAv9dSlsE8pGDYV%2FVcKz6k9DcwYEdAPR9C1mJPALEhSFUV%2FGs1Ak1WBEwf2XuAK204gGruNHyyhrpCBhNJo1ezD90PgY6IdVrNwO3eTpqTwcqGpAymnYY&X-Amz-Signature=fb750d78b5d10a3ce6653f51deda63a8b5231fe876f3df8fca98d31be06aae49&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RN2ISM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUAVnXxHbWVSvf%2BUILp4InrBfQGCtdj6%2BX96XOFarxCAiB7O6WUhAjBlKT%2BOm8rtgW8mdn6poVA7J1cevutDS9BYir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwuAQ2wnDcbfjI9JQKtwD%2FOKyPEbL1v4IacMb%2FXqrg6xvWHzIjRPh0fn6P137knLzRWtmFC9Gov4Q2nifs7r5tIIV2PszicHIT5bwCjTTWEDUdL9HH%2BZsrOAeziWXzwWBezh%2B434eiTri5oibI0Xrv%2Fn3cLxtN18SM%2BS%2BEwae3qiyd9QmwBmuCQQwpaeu3T293IKxSTfdJXCVxryL1IuCeHNueRiwx2nOV9JXM87cWGNQvPOuvJAQ4c1w64B7nTpdCwz4xkCTw9vm8tXx85EV52w%2BINSk99HiB%2FoGSIB3dP8pUwKBM%2FJz63pKJy6FXME%2Bn%2Fa6RKEr6Y1lBDBAcy%2FNrSUmdrtExnhmXlDc21Tai1NM3chQWG3ZUwSwILaqS%2FsP5Dk%2BWNuPcUijNXHGljP2ZjA9GTyxfHehLzGuf0ZDac5%2BULGoGZVlnF9v1mMOOOlHnhtXd2HqzD39GBNZYsCemVIeY93xU79qz6I2d4FY7pknMVtqB1s2e3Q%2FJjFTpH28QcisoqB6Aik8H9fRGIyA5jk88bM02vDzOJH0XDm28uE8ADoY5bn7HlBLrgNj%2BTvQVqpPtnDEIHMxP0o5F53PKSGHvoktr8zgBYsMse%2BF4W60TxeqwtYbsHp1h0sZVEQV0rdOtkYKJbu1Am8w%2BvzWwQY6pgHNwmod4PSu2cnEwymIXNJ%2BRBofjJTM%2FEPM3fhpdjx78nijRsQuFFOptllg9eWXuSubmHebPDAiujd3NQcfGHsm1tE9JcyRViBOp5yX40PlAv9dSlsE8pGDYV%2FVcKz6k9DcwYEdAPR9C1mJPALEhSFUV%2FGs1Ak1WBEwf2XuAK204gGruNHyyhrpCBhNJo1ezD90PgY6IdVrNwO3eTpqTwcqGpAymnYY&X-Amz-Signature=c427da05a98eadee4a13a3e7528c3f3e7c300d39254bbb554f5fcf3fb825716d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
