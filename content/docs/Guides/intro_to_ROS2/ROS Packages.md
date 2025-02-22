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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E3WF5J%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs811BtVf%2BaOJBMmt5LgJxc20Xp4D%2FexetI7ABz44UGAiEA3teZe2BSGTx%2BBalY1YcSS2o82qE1HdMS7ZMiYeh2n6QqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAXY5rjftb%2BRu1sjyrcA2QCGXaTewKQM%2Fe1eAQoY%2FmPFLxfUIP08uNF620rtHNUe8TvmQVUirl0laxfxsJgMxwYO7O4QAJ7y1TxlFBEWWSXygiR%2BZZ5XKtLHQhxMwjJlnwA7R9K7E4poSNnCmjMdpSFEofPZEb41f8Xi%2F3clvS3mq1WhjT9tiUvfAm3ItARUIZRazlEWxjyUQIO0ScomR4X9bwZOcLZ1CM%2FNFZTMOgS6OtGUvRNbvmBlM0XwByplGbzyBBJNCeAQzsrBgA3ZEJtFpSz2JNqPpEqfSQUiCi1o8atoY1CEmZLBWWDNEkmUHC0wO3aY%2BthQqTqFzQrxI8FpQ3N8PWmSE2kHfoc%2Fsm7zApbTmMJqQ2PCrEsBzIjAAiFK3X%2BIqEiNbvaVEuxKBuy2A0oZbhjDUleymS15Ukof8ChS6If08EJwybueOCaEQiq9%2F08oZVZksgTngL02at7zaxK%2FlPQkonu%2FZ%2FCsS7cGtCw82sxO830fyG3k5YrpYBdNFjsj8VF5q4OzLptdw4r5CdC9F3GHP1fmspGyQCxwMGp4F%2BVOqVNyXyFh2e%2F12TatmGJhYejcW4wq8Pq1XBEue0MhwHgdgcqGOXIcN9CoP2DL5KHAjWZR9M7HdJj06bhmlMkcdaGFx%2BbMN%2Bt5b0GOqUBFE4igOzstI%2FSeJC07545GkGXmvALWdsMgLxsEmQdIqBt0ucYqQUXfg%2B4JeNPQncCkJlw2xgkBJ5Viptk2WwRrQRllQ9UwrcSwWT4fVyqVRZL2Yl7dhFQk5ZMZvKb0HPYcMfi4OpBwvK%2FKCQ7QxFD7IeAMzusP9cY9F8OSQ2kkZ%2B23skpD9jGIOw4pbUVGi8Y7Xq2dOyZ0eJwcm8D1iSfUqlwrzNs&X-Amz-Signature=2bbf58d0882325ba776537ee1fbfa80a2b7501a3ed23fdebdad4d2ef76ec95ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E3WF5J%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs811BtVf%2BaOJBMmt5LgJxc20Xp4D%2FexetI7ABz44UGAiEA3teZe2BSGTx%2BBalY1YcSS2o82qE1HdMS7ZMiYeh2n6QqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAXY5rjftb%2BRu1sjyrcA2QCGXaTewKQM%2Fe1eAQoY%2FmPFLxfUIP08uNF620rtHNUe8TvmQVUirl0laxfxsJgMxwYO7O4QAJ7y1TxlFBEWWSXygiR%2BZZ5XKtLHQhxMwjJlnwA7R9K7E4poSNnCmjMdpSFEofPZEb41f8Xi%2F3clvS3mq1WhjT9tiUvfAm3ItARUIZRazlEWxjyUQIO0ScomR4X9bwZOcLZ1CM%2FNFZTMOgS6OtGUvRNbvmBlM0XwByplGbzyBBJNCeAQzsrBgA3ZEJtFpSz2JNqPpEqfSQUiCi1o8atoY1CEmZLBWWDNEkmUHC0wO3aY%2BthQqTqFzQrxI8FpQ3N8PWmSE2kHfoc%2Fsm7zApbTmMJqQ2PCrEsBzIjAAiFK3X%2BIqEiNbvaVEuxKBuy2A0oZbhjDUleymS15Ukof8ChS6If08EJwybueOCaEQiq9%2F08oZVZksgTngL02at7zaxK%2FlPQkonu%2FZ%2FCsS7cGtCw82sxO830fyG3k5YrpYBdNFjsj8VF5q4OzLptdw4r5CdC9F3GHP1fmspGyQCxwMGp4F%2BVOqVNyXyFh2e%2F12TatmGJhYejcW4wq8Pq1XBEue0MhwHgdgcqGOXIcN9CoP2DL5KHAjWZR9M7HdJj06bhmlMkcdaGFx%2BbMN%2Bt5b0GOqUBFE4igOzstI%2FSeJC07545GkGXmvALWdsMgLxsEmQdIqBt0ucYqQUXfg%2B4JeNPQncCkJlw2xgkBJ5Viptk2WwRrQRllQ9UwrcSwWT4fVyqVRZL2Yl7dhFQk5ZMZvKb0HPYcMfi4OpBwvK%2FKCQ7QxFD7IeAMzusP9cY9F8OSQ2kkZ%2B23skpD9jGIOw4pbUVGi8Y7Xq2dOyZ0eJwcm8D1iSfUqlwrzNs&X-Amz-Signature=ee9f249724f7be416c31ee461f05d66437430d3fb079803424573a3ae1430c44&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E3WF5J%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs811BtVf%2BaOJBMmt5LgJxc20Xp4D%2FexetI7ABz44UGAiEA3teZe2BSGTx%2BBalY1YcSS2o82qE1HdMS7ZMiYeh2n6QqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAXY5rjftb%2BRu1sjyrcA2QCGXaTewKQM%2Fe1eAQoY%2FmPFLxfUIP08uNF620rtHNUe8TvmQVUirl0laxfxsJgMxwYO7O4QAJ7y1TxlFBEWWSXygiR%2BZZ5XKtLHQhxMwjJlnwA7R9K7E4poSNnCmjMdpSFEofPZEb41f8Xi%2F3clvS3mq1WhjT9tiUvfAm3ItARUIZRazlEWxjyUQIO0ScomR4X9bwZOcLZ1CM%2FNFZTMOgS6OtGUvRNbvmBlM0XwByplGbzyBBJNCeAQzsrBgA3ZEJtFpSz2JNqPpEqfSQUiCi1o8atoY1CEmZLBWWDNEkmUHC0wO3aY%2BthQqTqFzQrxI8FpQ3N8PWmSE2kHfoc%2Fsm7zApbTmMJqQ2PCrEsBzIjAAiFK3X%2BIqEiNbvaVEuxKBuy2A0oZbhjDUleymS15Ukof8ChS6If08EJwybueOCaEQiq9%2F08oZVZksgTngL02at7zaxK%2FlPQkonu%2FZ%2FCsS7cGtCw82sxO830fyG3k5YrpYBdNFjsj8VF5q4OzLptdw4r5CdC9F3GHP1fmspGyQCxwMGp4F%2BVOqVNyXyFh2e%2F12TatmGJhYejcW4wq8Pq1XBEue0MhwHgdgcqGOXIcN9CoP2DL5KHAjWZR9M7HdJj06bhmlMkcdaGFx%2BbMN%2Bt5b0GOqUBFE4igOzstI%2FSeJC07545GkGXmvALWdsMgLxsEmQdIqBt0ucYqQUXfg%2B4JeNPQncCkJlw2xgkBJ5Viptk2WwRrQRllQ9UwrcSwWT4fVyqVRZL2Yl7dhFQk5ZMZvKb0HPYcMfi4OpBwvK%2FKCQ7QxFD7IeAMzusP9cY9F8OSQ2kkZ%2B23skpD9jGIOw4pbUVGi8Y7Xq2dOyZ0eJwcm8D1iSfUqlwrzNs&X-Amz-Signature=4a0adad9ac0220dd98d29139809c17a94741f7b1386c7b590d992cdbe242707f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E3WF5J%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs811BtVf%2BaOJBMmt5LgJxc20Xp4D%2FexetI7ABz44UGAiEA3teZe2BSGTx%2BBalY1YcSS2o82qE1HdMS7ZMiYeh2n6QqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAXY5rjftb%2BRu1sjyrcA2QCGXaTewKQM%2Fe1eAQoY%2FmPFLxfUIP08uNF620rtHNUe8TvmQVUirl0laxfxsJgMxwYO7O4QAJ7y1TxlFBEWWSXygiR%2BZZ5XKtLHQhxMwjJlnwA7R9K7E4poSNnCmjMdpSFEofPZEb41f8Xi%2F3clvS3mq1WhjT9tiUvfAm3ItARUIZRazlEWxjyUQIO0ScomR4X9bwZOcLZ1CM%2FNFZTMOgS6OtGUvRNbvmBlM0XwByplGbzyBBJNCeAQzsrBgA3ZEJtFpSz2JNqPpEqfSQUiCi1o8atoY1CEmZLBWWDNEkmUHC0wO3aY%2BthQqTqFzQrxI8FpQ3N8PWmSE2kHfoc%2Fsm7zApbTmMJqQ2PCrEsBzIjAAiFK3X%2BIqEiNbvaVEuxKBuy2A0oZbhjDUleymS15Ukof8ChS6If08EJwybueOCaEQiq9%2F08oZVZksgTngL02at7zaxK%2FlPQkonu%2FZ%2FCsS7cGtCw82sxO830fyG3k5YrpYBdNFjsj8VF5q4OzLptdw4r5CdC9F3GHP1fmspGyQCxwMGp4F%2BVOqVNyXyFh2e%2F12TatmGJhYejcW4wq8Pq1XBEue0MhwHgdgcqGOXIcN9CoP2DL5KHAjWZR9M7HdJj06bhmlMkcdaGFx%2BbMN%2Bt5b0GOqUBFE4igOzstI%2FSeJC07545GkGXmvALWdsMgLxsEmQdIqBt0ucYqQUXfg%2B4JeNPQncCkJlw2xgkBJ5Viptk2WwRrQRllQ9UwrcSwWT4fVyqVRZL2Yl7dhFQk5ZMZvKb0HPYcMfi4OpBwvK%2FKCQ7QxFD7IeAMzusP9cY9F8OSQ2kkZ%2B23skpD9jGIOw4pbUVGi8Y7Xq2dOyZ0eJwcm8D1iSfUqlwrzNs&X-Amz-Signature=b456a6b4e8c7061e54cc9c6b8c5f927ca10a7179a9fe9b6d98fc28ca4f46eee1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E3WF5J%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs811BtVf%2BaOJBMmt5LgJxc20Xp4D%2FexetI7ABz44UGAiEA3teZe2BSGTx%2BBalY1YcSS2o82qE1HdMS7ZMiYeh2n6QqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAXY5rjftb%2BRu1sjyrcA2QCGXaTewKQM%2Fe1eAQoY%2FmPFLxfUIP08uNF620rtHNUe8TvmQVUirl0laxfxsJgMxwYO7O4QAJ7y1TxlFBEWWSXygiR%2BZZ5XKtLHQhxMwjJlnwA7R9K7E4poSNnCmjMdpSFEofPZEb41f8Xi%2F3clvS3mq1WhjT9tiUvfAm3ItARUIZRazlEWxjyUQIO0ScomR4X9bwZOcLZ1CM%2FNFZTMOgS6OtGUvRNbvmBlM0XwByplGbzyBBJNCeAQzsrBgA3ZEJtFpSz2JNqPpEqfSQUiCi1o8atoY1CEmZLBWWDNEkmUHC0wO3aY%2BthQqTqFzQrxI8FpQ3N8PWmSE2kHfoc%2Fsm7zApbTmMJqQ2PCrEsBzIjAAiFK3X%2BIqEiNbvaVEuxKBuy2A0oZbhjDUleymS15Ukof8ChS6If08EJwybueOCaEQiq9%2F08oZVZksgTngL02at7zaxK%2FlPQkonu%2FZ%2FCsS7cGtCw82sxO830fyG3k5YrpYBdNFjsj8VF5q4OzLptdw4r5CdC9F3GHP1fmspGyQCxwMGp4F%2BVOqVNyXyFh2e%2F12TatmGJhYejcW4wq8Pq1XBEue0MhwHgdgcqGOXIcN9CoP2DL5KHAjWZR9M7HdJj06bhmlMkcdaGFx%2BbMN%2Bt5b0GOqUBFE4igOzstI%2FSeJC07545GkGXmvALWdsMgLxsEmQdIqBt0ucYqQUXfg%2B4JeNPQncCkJlw2xgkBJ5Viptk2WwRrQRllQ9UwrcSwWT4fVyqVRZL2Yl7dhFQk5ZMZvKb0HPYcMfi4OpBwvK%2FKCQ7QxFD7IeAMzusP9cY9F8OSQ2kkZ%2B23skpD9jGIOw4pbUVGi8Y7Xq2dOyZ0eJwcm8D1iSfUqlwrzNs&X-Amz-Signature=0398e6219ccfc927dce19358449c2e8800d1fa71f4b1123294fe0927e51b2a65&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E3WF5J%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs811BtVf%2BaOJBMmt5LgJxc20Xp4D%2FexetI7ABz44UGAiEA3teZe2BSGTx%2BBalY1YcSS2o82qE1HdMS7ZMiYeh2n6QqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAXY5rjftb%2BRu1sjyrcA2QCGXaTewKQM%2Fe1eAQoY%2FmPFLxfUIP08uNF620rtHNUe8TvmQVUirl0laxfxsJgMxwYO7O4QAJ7y1TxlFBEWWSXygiR%2BZZ5XKtLHQhxMwjJlnwA7R9K7E4poSNnCmjMdpSFEofPZEb41f8Xi%2F3clvS3mq1WhjT9tiUvfAm3ItARUIZRazlEWxjyUQIO0ScomR4X9bwZOcLZ1CM%2FNFZTMOgS6OtGUvRNbvmBlM0XwByplGbzyBBJNCeAQzsrBgA3ZEJtFpSz2JNqPpEqfSQUiCi1o8atoY1CEmZLBWWDNEkmUHC0wO3aY%2BthQqTqFzQrxI8FpQ3N8PWmSE2kHfoc%2Fsm7zApbTmMJqQ2PCrEsBzIjAAiFK3X%2BIqEiNbvaVEuxKBuy2A0oZbhjDUleymS15Ukof8ChS6If08EJwybueOCaEQiq9%2F08oZVZksgTngL02at7zaxK%2FlPQkonu%2FZ%2FCsS7cGtCw82sxO830fyG3k5YrpYBdNFjsj8VF5q4OzLptdw4r5CdC9F3GHP1fmspGyQCxwMGp4F%2BVOqVNyXyFh2e%2F12TatmGJhYejcW4wq8Pq1XBEue0MhwHgdgcqGOXIcN9CoP2DL5KHAjWZR9M7HdJj06bhmlMkcdaGFx%2BbMN%2Bt5b0GOqUBFE4igOzstI%2FSeJC07545GkGXmvALWdsMgLxsEmQdIqBt0ucYqQUXfg%2B4JeNPQncCkJlw2xgkBJ5Viptk2WwRrQRllQ9UwrcSwWT4fVyqVRZL2Yl7dhFQk5ZMZvKb0HPYcMfi4OpBwvK%2FKCQ7QxFD7IeAMzusP9cY9F8OSQ2kkZ%2B23skpD9jGIOw4pbUVGi8Y7Xq2dOyZ0eJwcm8D1iSfUqlwrzNs&X-Amz-Signature=48cac4c0742897ce8cafe98f4d5c333a19cf189e064840bf8426d2de36244961&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E3WF5J%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFs811BtVf%2BaOJBMmt5LgJxc20Xp4D%2FexetI7ABz44UGAiEA3teZe2BSGTx%2BBalY1YcSS2o82qE1HdMS7ZMiYeh2n6QqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAXY5rjftb%2BRu1sjyrcA2QCGXaTewKQM%2Fe1eAQoY%2FmPFLxfUIP08uNF620rtHNUe8TvmQVUirl0laxfxsJgMxwYO7O4QAJ7y1TxlFBEWWSXygiR%2BZZ5XKtLHQhxMwjJlnwA7R9K7E4poSNnCmjMdpSFEofPZEb41f8Xi%2F3clvS3mq1WhjT9tiUvfAm3ItARUIZRazlEWxjyUQIO0ScomR4X9bwZOcLZ1CM%2FNFZTMOgS6OtGUvRNbvmBlM0XwByplGbzyBBJNCeAQzsrBgA3ZEJtFpSz2JNqPpEqfSQUiCi1o8atoY1CEmZLBWWDNEkmUHC0wO3aY%2BthQqTqFzQrxI8FpQ3N8PWmSE2kHfoc%2Fsm7zApbTmMJqQ2PCrEsBzIjAAiFK3X%2BIqEiNbvaVEuxKBuy2A0oZbhjDUleymS15Ukof8ChS6If08EJwybueOCaEQiq9%2F08oZVZksgTngL02at7zaxK%2FlPQkonu%2FZ%2FCsS7cGtCw82sxO830fyG3k5YrpYBdNFjsj8VF5q4OzLptdw4r5CdC9F3GHP1fmspGyQCxwMGp4F%2BVOqVNyXyFh2e%2F12TatmGJhYejcW4wq8Pq1XBEue0MhwHgdgcqGOXIcN9CoP2DL5KHAjWZR9M7HdJj06bhmlMkcdaGFx%2BbMN%2Bt5b0GOqUBFE4igOzstI%2FSeJC07545GkGXmvALWdsMgLxsEmQdIqBt0ucYqQUXfg%2B4JeNPQncCkJlw2xgkBJ5Viptk2WwRrQRllQ9UwrcSwWT4fVyqVRZL2Yl7dhFQk5ZMZvKb0HPYcMfi4OpBwvK%2FKCQ7QxFD7IeAMzusP9cY9F8OSQ2kkZ%2B23skpD9jGIOw4pbUVGi8Y7Xq2dOyZ0eJwcm8D1iSfUqlwrzNs&X-Amz-Signature=81ab2c5cdb082b4fc3017fa28767a9cbbc51ebbb484da7f4fbc068207d7a16da&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
