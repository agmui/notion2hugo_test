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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOSJKY5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDYFYT%2BOMVY%2FaOkn4YfeEqbMbjqtiH7EITGCgkdUKPjrAiEAsKOSwcIvN45bVLrlELLdG6bsCU9SNg4Selpz3a%2FKCj4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHqkNPyi2M%2F65bMebircA3siufXNFSNFEHESFb17LOcktJa0izwS4d3HnLiA05clYMdJ8lEUeV%2BfxN09p57j15dXkRFHIZ37XnppAnS5hBJ5s%2F3pH3J0SyvIs0fWjU1%2Fq0pZlyUeHpSUApzWqIOE27olqzpVuTEmhWFsZNnNX5oNjhsdiNcnpChClMZhiPwG8IUShxXa9DAoWwmg1YeUBQlk2Sa8%2FD%2FhBls62XoKYrApsz%2BgFXKWyZ2DaPI9kLoOYY0jTdFBgNoL%2Bx65KNgTv0LRopWxoVDmoXWqLFN76%2B5ubImcS%2FBFl4PLWJjb%2FZp22lFMmv3wDtWlblbIAusjnOjohXa5fNSC%2BRjki6Hd9vDpesBhJJQyEerlw0LvIIaJ422WBvFKnD%2FZom8znXSRUOQZnO%2BO%2BT8%2FDDxSN%2BHYDcDA3GzNiDr87ofty0bHE5E6UqnVaJ59D4rxUaHM8xINy1gDGMIpomfQzh88Yr3UbuEQGJfVlFqliC61qvgYX%2BAsOf7ZrhyzGaXUIY3xgDvqTW%2BUwoJL%2Bc6OnPu5kNCnIyJWniOOQHZIfN7r4%2FnrqSuFRi3T2Z0LjgkNL%2FkPZuvxqdq3oSNl21iFTACFJU%2BvV7izJngCn%2Fpgh%2Btrv4%2BM2Vr1V3WQncRqYow94o3mMMuQ0MMGOqUBGPlzkvFNsmvrIRfOVt6p7kY0w9M%2Bk5Ul7qBsKei7JamxQ%2FYATRJDqu86C5DY2kFOnxakjvHFeblDRn6uFAjKvECFrqsbQcyXk0pnoJOm4KJ%2BoVVfPTBhS7QWxSkIiQ3i4uBEAnXKSIj6QEDRCkvmexiXloKnsFQ4BoYyqy7i%2FiS%2Fnq%2B4%2Fy57L2Fpg57PS2Nz%2FW5ibtPiq1Z%2Bezv%2B2p1q3P2X1dsA&X-Amz-Signature=97249de31f00a4aff92199443237e3f599e6520f9953f1d65f02a26a395f7db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOSJKY5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDYFYT%2BOMVY%2FaOkn4YfeEqbMbjqtiH7EITGCgkdUKPjrAiEAsKOSwcIvN45bVLrlELLdG6bsCU9SNg4Selpz3a%2FKCj4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHqkNPyi2M%2F65bMebircA3siufXNFSNFEHESFb17LOcktJa0izwS4d3HnLiA05clYMdJ8lEUeV%2BfxN09p57j15dXkRFHIZ37XnppAnS5hBJ5s%2F3pH3J0SyvIs0fWjU1%2Fq0pZlyUeHpSUApzWqIOE27olqzpVuTEmhWFsZNnNX5oNjhsdiNcnpChClMZhiPwG8IUShxXa9DAoWwmg1YeUBQlk2Sa8%2FD%2FhBls62XoKYrApsz%2BgFXKWyZ2DaPI9kLoOYY0jTdFBgNoL%2Bx65KNgTv0LRopWxoVDmoXWqLFN76%2B5ubImcS%2FBFl4PLWJjb%2FZp22lFMmv3wDtWlblbIAusjnOjohXa5fNSC%2BRjki6Hd9vDpesBhJJQyEerlw0LvIIaJ422WBvFKnD%2FZom8znXSRUOQZnO%2BO%2BT8%2FDDxSN%2BHYDcDA3GzNiDr87ofty0bHE5E6UqnVaJ59D4rxUaHM8xINy1gDGMIpomfQzh88Yr3UbuEQGJfVlFqliC61qvgYX%2BAsOf7ZrhyzGaXUIY3xgDvqTW%2BUwoJL%2Bc6OnPu5kNCnIyJWniOOQHZIfN7r4%2FnrqSuFRi3T2Z0LjgkNL%2FkPZuvxqdq3oSNl21iFTACFJU%2BvV7izJngCn%2Fpgh%2Btrv4%2BM2Vr1V3WQncRqYow94o3mMMuQ0MMGOqUBGPlzkvFNsmvrIRfOVt6p7kY0w9M%2Bk5Ul7qBsKei7JamxQ%2FYATRJDqu86C5DY2kFOnxakjvHFeblDRn6uFAjKvECFrqsbQcyXk0pnoJOm4KJ%2BoVVfPTBhS7QWxSkIiQ3i4uBEAnXKSIj6QEDRCkvmexiXloKnsFQ4BoYyqy7i%2FiS%2Fnq%2B4%2Fy57L2Fpg57PS2Nz%2FW5ibtPiq1Z%2Bezv%2B2p1q3P2X1dsA&X-Amz-Signature=1a502de11d4f040f4732d08290f5fbefe341a22ac0447dd7f0e8c827ae5dce17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOSJKY5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDYFYT%2BOMVY%2FaOkn4YfeEqbMbjqtiH7EITGCgkdUKPjrAiEAsKOSwcIvN45bVLrlELLdG6bsCU9SNg4Selpz3a%2FKCj4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHqkNPyi2M%2F65bMebircA3siufXNFSNFEHESFb17LOcktJa0izwS4d3HnLiA05clYMdJ8lEUeV%2BfxN09p57j15dXkRFHIZ37XnppAnS5hBJ5s%2F3pH3J0SyvIs0fWjU1%2Fq0pZlyUeHpSUApzWqIOE27olqzpVuTEmhWFsZNnNX5oNjhsdiNcnpChClMZhiPwG8IUShxXa9DAoWwmg1YeUBQlk2Sa8%2FD%2FhBls62XoKYrApsz%2BgFXKWyZ2DaPI9kLoOYY0jTdFBgNoL%2Bx65KNgTv0LRopWxoVDmoXWqLFN76%2B5ubImcS%2FBFl4PLWJjb%2FZp22lFMmv3wDtWlblbIAusjnOjohXa5fNSC%2BRjki6Hd9vDpesBhJJQyEerlw0LvIIaJ422WBvFKnD%2FZom8znXSRUOQZnO%2BO%2BT8%2FDDxSN%2BHYDcDA3GzNiDr87ofty0bHE5E6UqnVaJ59D4rxUaHM8xINy1gDGMIpomfQzh88Yr3UbuEQGJfVlFqliC61qvgYX%2BAsOf7ZrhyzGaXUIY3xgDvqTW%2BUwoJL%2Bc6OnPu5kNCnIyJWniOOQHZIfN7r4%2FnrqSuFRi3T2Z0LjgkNL%2FkPZuvxqdq3oSNl21iFTACFJU%2BvV7izJngCn%2Fpgh%2Btrv4%2BM2Vr1V3WQncRqYow94o3mMMuQ0MMGOqUBGPlzkvFNsmvrIRfOVt6p7kY0w9M%2Bk5Ul7qBsKei7JamxQ%2FYATRJDqu86C5DY2kFOnxakjvHFeblDRn6uFAjKvECFrqsbQcyXk0pnoJOm4KJ%2BoVVfPTBhS7QWxSkIiQ3i4uBEAnXKSIj6QEDRCkvmexiXloKnsFQ4BoYyqy7i%2FiS%2Fnq%2B4%2Fy57L2Fpg57PS2Nz%2FW5ibtPiq1Z%2Bezv%2B2p1q3P2X1dsA&X-Amz-Signature=27d43467f816b0a6a2c06e2f5541a904f94b050f7277ef93ca8e6fb470d8c05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOSJKY5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDYFYT%2BOMVY%2FaOkn4YfeEqbMbjqtiH7EITGCgkdUKPjrAiEAsKOSwcIvN45bVLrlELLdG6bsCU9SNg4Selpz3a%2FKCj4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHqkNPyi2M%2F65bMebircA3siufXNFSNFEHESFb17LOcktJa0izwS4d3HnLiA05clYMdJ8lEUeV%2BfxN09p57j15dXkRFHIZ37XnppAnS5hBJ5s%2F3pH3J0SyvIs0fWjU1%2Fq0pZlyUeHpSUApzWqIOE27olqzpVuTEmhWFsZNnNX5oNjhsdiNcnpChClMZhiPwG8IUShxXa9DAoWwmg1YeUBQlk2Sa8%2FD%2FhBls62XoKYrApsz%2BgFXKWyZ2DaPI9kLoOYY0jTdFBgNoL%2Bx65KNgTv0LRopWxoVDmoXWqLFN76%2B5ubImcS%2FBFl4PLWJjb%2FZp22lFMmv3wDtWlblbIAusjnOjohXa5fNSC%2BRjki6Hd9vDpesBhJJQyEerlw0LvIIaJ422WBvFKnD%2FZom8znXSRUOQZnO%2BO%2BT8%2FDDxSN%2BHYDcDA3GzNiDr87ofty0bHE5E6UqnVaJ59D4rxUaHM8xINy1gDGMIpomfQzh88Yr3UbuEQGJfVlFqliC61qvgYX%2BAsOf7ZrhyzGaXUIY3xgDvqTW%2BUwoJL%2Bc6OnPu5kNCnIyJWniOOQHZIfN7r4%2FnrqSuFRi3T2Z0LjgkNL%2FkPZuvxqdq3oSNl21iFTACFJU%2BvV7izJngCn%2Fpgh%2Btrv4%2BM2Vr1V3WQncRqYow94o3mMMuQ0MMGOqUBGPlzkvFNsmvrIRfOVt6p7kY0w9M%2Bk5Ul7qBsKei7JamxQ%2FYATRJDqu86C5DY2kFOnxakjvHFeblDRn6uFAjKvECFrqsbQcyXk0pnoJOm4KJ%2BoVVfPTBhS7QWxSkIiQ3i4uBEAnXKSIj6QEDRCkvmexiXloKnsFQ4BoYyqy7i%2FiS%2Fnq%2B4%2Fy57L2Fpg57PS2Nz%2FW5ibtPiq1Z%2Bezv%2B2p1q3P2X1dsA&X-Amz-Signature=34f27bb6f6aab14f1b34258d8bb48f2d003480c00a385544be3c35a6bf7ed67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOSJKY5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDYFYT%2BOMVY%2FaOkn4YfeEqbMbjqtiH7EITGCgkdUKPjrAiEAsKOSwcIvN45bVLrlELLdG6bsCU9SNg4Selpz3a%2FKCj4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHqkNPyi2M%2F65bMebircA3siufXNFSNFEHESFb17LOcktJa0izwS4d3HnLiA05clYMdJ8lEUeV%2BfxN09p57j15dXkRFHIZ37XnppAnS5hBJ5s%2F3pH3J0SyvIs0fWjU1%2Fq0pZlyUeHpSUApzWqIOE27olqzpVuTEmhWFsZNnNX5oNjhsdiNcnpChClMZhiPwG8IUShxXa9DAoWwmg1YeUBQlk2Sa8%2FD%2FhBls62XoKYrApsz%2BgFXKWyZ2DaPI9kLoOYY0jTdFBgNoL%2Bx65KNgTv0LRopWxoVDmoXWqLFN76%2B5ubImcS%2FBFl4PLWJjb%2FZp22lFMmv3wDtWlblbIAusjnOjohXa5fNSC%2BRjki6Hd9vDpesBhJJQyEerlw0LvIIaJ422WBvFKnD%2FZom8znXSRUOQZnO%2BO%2BT8%2FDDxSN%2BHYDcDA3GzNiDr87ofty0bHE5E6UqnVaJ59D4rxUaHM8xINy1gDGMIpomfQzh88Yr3UbuEQGJfVlFqliC61qvgYX%2BAsOf7ZrhyzGaXUIY3xgDvqTW%2BUwoJL%2Bc6OnPu5kNCnIyJWniOOQHZIfN7r4%2FnrqSuFRi3T2Z0LjgkNL%2FkPZuvxqdq3oSNl21iFTACFJU%2BvV7izJngCn%2Fpgh%2Btrv4%2BM2Vr1V3WQncRqYow94o3mMMuQ0MMGOqUBGPlzkvFNsmvrIRfOVt6p7kY0w9M%2Bk5Ul7qBsKei7JamxQ%2FYATRJDqu86C5DY2kFOnxakjvHFeblDRn6uFAjKvECFrqsbQcyXk0pnoJOm4KJ%2BoVVfPTBhS7QWxSkIiQ3i4uBEAnXKSIj6QEDRCkvmexiXloKnsFQ4BoYyqy7i%2FiS%2Fnq%2B4%2Fy57L2Fpg57PS2Nz%2FW5ibtPiq1Z%2Bezv%2B2p1q3P2X1dsA&X-Amz-Signature=58afa5b71d45dc42fcf2651ecb67a16cfe198c6dd858f1cb9afdcb70e53665b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOSJKY5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDYFYT%2BOMVY%2FaOkn4YfeEqbMbjqtiH7EITGCgkdUKPjrAiEAsKOSwcIvN45bVLrlELLdG6bsCU9SNg4Selpz3a%2FKCj4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHqkNPyi2M%2F65bMebircA3siufXNFSNFEHESFb17LOcktJa0izwS4d3HnLiA05clYMdJ8lEUeV%2BfxN09p57j15dXkRFHIZ37XnppAnS5hBJ5s%2F3pH3J0SyvIs0fWjU1%2Fq0pZlyUeHpSUApzWqIOE27olqzpVuTEmhWFsZNnNX5oNjhsdiNcnpChClMZhiPwG8IUShxXa9DAoWwmg1YeUBQlk2Sa8%2FD%2FhBls62XoKYrApsz%2BgFXKWyZ2DaPI9kLoOYY0jTdFBgNoL%2Bx65KNgTv0LRopWxoVDmoXWqLFN76%2B5ubImcS%2FBFl4PLWJjb%2FZp22lFMmv3wDtWlblbIAusjnOjohXa5fNSC%2BRjki6Hd9vDpesBhJJQyEerlw0LvIIaJ422WBvFKnD%2FZom8znXSRUOQZnO%2BO%2BT8%2FDDxSN%2BHYDcDA3GzNiDr87ofty0bHE5E6UqnVaJ59D4rxUaHM8xINy1gDGMIpomfQzh88Yr3UbuEQGJfVlFqliC61qvgYX%2BAsOf7ZrhyzGaXUIY3xgDvqTW%2BUwoJL%2Bc6OnPu5kNCnIyJWniOOQHZIfN7r4%2FnrqSuFRi3T2Z0LjgkNL%2FkPZuvxqdq3oSNl21iFTACFJU%2BvV7izJngCn%2Fpgh%2Btrv4%2BM2Vr1V3WQncRqYow94o3mMMuQ0MMGOqUBGPlzkvFNsmvrIRfOVt6p7kY0w9M%2Bk5Ul7qBsKei7JamxQ%2FYATRJDqu86C5DY2kFOnxakjvHFeblDRn6uFAjKvECFrqsbQcyXk0pnoJOm4KJ%2BoVVfPTBhS7QWxSkIiQ3i4uBEAnXKSIj6QEDRCkvmexiXloKnsFQ4BoYyqy7i%2FiS%2Fnq%2B4%2Fy57L2Fpg57PS2Nz%2FW5ibtPiq1Z%2Bezv%2B2p1q3P2X1dsA&X-Amz-Signature=0d77ff6144f1b1aeeed177920e0d999c41d0660a69a8dc5567caa8e184607551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOSJKY5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDYFYT%2BOMVY%2FaOkn4YfeEqbMbjqtiH7EITGCgkdUKPjrAiEAsKOSwcIvN45bVLrlELLdG6bsCU9SNg4Selpz3a%2FKCj4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHqkNPyi2M%2F65bMebircA3siufXNFSNFEHESFb17LOcktJa0izwS4d3HnLiA05clYMdJ8lEUeV%2BfxN09p57j15dXkRFHIZ37XnppAnS5hBJ5s%2F3pH3J0SyvIs0fWjU1%2Fq0pZlyUeHpSUApzWqIOE27olqzpVuTEmhWFsZNnNX5oNjhsdiNcnpChClMZhiPwG8IUShxXa9DAoWwmg1YeUBQlk2Sa8%2FD%2FhBls62XoKYrApsz%2BgFXKWyZ2DaPI9kLoOYY0jTdFBgNoL%2Bx65KNgTv0LRopWxoVDmoXWqLFN76%2B5ubImcS%2FBFl4PLWJjb%2FZp22lFMmv3wDtWlblbIAusjnOjohXa5fNSC%2BRjki6Hd9vDpesBhJJQyEerlw0LvIIaJ422WBvFKnD%2FZom8znXSRUOQZnO%2BO%2BT8%2FDDxSN%2BHYDcDA3GzNiDr87ofty0bHE5E6UqnVaJ59D4rxUaHM8xINy1gDGMIpomfQzh88Yr3UbuEQGJfVlFqliC61qvgYX%2BAsOf7ZrhyzGaXUIY3xgDvqTW%2BUwoJL%2Bc6OnPu5kNCnIyJWniOOQHZIfN7r4%2FnrqSuFRi3T2Z0LjgkNL%2FkPZuvxqdq3oSNl21iFTACFJU%2BvV7izJngCn%2Fpgh%2Btrv4%2BM2Vr1V3WQncRqYow94o3mMMuQ0MMGOqUBGPlzkvFNsmvrIRfOVt6p7kY0w9M%2Bk5Ul7qBsKei7JamxQ%2FYATRJDqu86C5DY2kFOnxakjvHFeblDRn6uFAjKvECFrqsbQcyXk0pnoJOm4KJ%2BoVVfPTBhS7QWxSkIiQ3i4uBEAnXKSIj6QEDRCkvmexiXloKnsFQ4BoYyqy7i%2FiS%2Fnq%2B4%2Fy57L2Fpg57PS2Nz%2FW5ibtPiq1Z%2Bezv%2B2p1q3P2X1dsA&X-Amz-Signature=8605a0a252dafe8b7c19e8a724945a7a8ef76e89bd6bbfe6e489061ac092432e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
