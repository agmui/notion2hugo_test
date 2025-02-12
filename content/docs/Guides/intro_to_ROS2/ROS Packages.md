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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJSAYDD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQnfXgHkSFL%2BZewBTRoSnQbkcTm4ATM9KCavhaBCi0LQIhAOY7%2B34Mqg013ThWyyw4Wx8m4DAxrqDCJopsYpmdoHRuKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWMcZWS2uGKzuZ8Lcq3APAaDx79f2z8hB1ipdSCnQPjbdoE4U5MQ9I6tDByWyhidzhIDDDK52hFqPGVk1Op7Ko8tIw941SWFBEkChcrZ6yLsA6s3TqXagE9HgeHd7jvgmWlcxJCXbPOY9Vr493JU9R62tneR0sr9JXLyIqawXEZeD%2FnY930%2BG%2BbCpFecms83i0QnffQ4tG4iK9gvVMYPSnIS%2FxkZFvm%2BaX1OMe4tOS5VbWN%2FBT7InvzY0eM2FiUFDUighFQUR7ykG623X7B9CPMdu6o9WF%2BXrykVpVFPQdIKCnUzpplLscd2pDWyfwIsOz%2ByHSxIMKhn0JhQd3MjaG4rmp%2Bs466wdlovWQm7Q35Al7bLGmF01FiuB07zgXQn%2BJroMrkBdpXh1yaHgA59mJ0R%2Bi1cYBOLcJ6ut6cNRTIxIBMQQ11anqeXZSerqTEzLd5omHV1xWNwh09Sn8d40CgMGSS63XDYCd12y%2B9bTFT2SBOfaZiny5kWgsgI3CfxOtZBYYX28Kv0Feta9H3yRZ55xnIlgntGhALkuN%2FBDIq4WRnPq%2BjQ9rHXlxdjv4aukMxG4K%2FOmLAADkeiM3pyFA2lvaxpDMnLwD%2FlbX1d6LQDY3kIFR9xLQef%2BPm2TBw%2BUAZRbzSZQM7iQ83zDL7K%2B9BjqkAQurCt4p5KJ%2FIxCXZNYsBrtsZ2aUBBJ29cpRrYqVWs6gQ8jnETQY95ljgq6A8XfTPta4R2HAo2a5BFviGh2q1hHEUe0VjCKacQQguJfLSOpQseFRGSrxTeWi6fGQWHcEU1fY7uuKG%2BR9neM6XRTI%2FbmGzLEFsM5Bd%2B77aulSZMQzgfxmSqqaHDQjonRb9BIR6apoWbH0LWPpd3l3w38tsC8erAl8&X-Amz-Signature=7eae5cef6cc84007a3c0b2402cecb3f8602ea44a70dc00e1da057654fb049d77&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJSAYDD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQnfXgHkSFL%2BZewBTRoSnQbkcTm4ATM9KCavhaBCi0LQIhAOY7%2B34Mqg013ThWyyw4Wx8m4DAxrqDCJopsYpmdoHRuKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWMcZWS2uGKzuZ8Lcq3APAaDx79f2z8hB1ipdSCnQPjbdoE4U5MQ9I6tDByWyhidzhIDDDK52hFqPGVk1Op7Ko8tIw941SWFBEkChcrZ6yLsA6s3TqXagE9HgeHd7jvgmWlcxJCXbPOY9Vr493JU9R62tneR0sr9JXLyIqawXEZeD%2FnY930%2BG%2BbCpFecms83i0QnffQ4tG4iK9gvVMYPSnIS%2FxkZFvm%2BaX1OMe4tOS5VbWN%2FBT7InvzY0eM2FiUFDUighFQUR7ykG623X7B9CPMdu6o9WF%2BXrykVpVFPQdIKCnUzpplLscd2pDWyfwIsOz%2ByHSxIMKhn0JhQd3MjaG4rmp%2Bs466wdlovWQm7Q35Al7bLGmF01FiuB07zgXQn%2BJroMrkBdpXh1yaHgA59mJ0R%2Bi1cYBOLcJ6ut6cNRTIxIBMQQ11anqeXZSerqTEzLd5omHV1xWNwh09Sn8d40CgMGSS63XDYCd12y%2B9bTFT2SBOfaZiny5kWgsgI3CfxOtZBYYX28Kv0Feta9H3yRZ55xnIlgntGhALkuN%2FBDIq4WRnPq%2BjQ9rHXlxdjv4aukMxG4K%2FOmLAADkeiM3pyFA2lvaxpDMnLwD%2FlbX1d6LQDY3kIFR9xLQef%2BPm2TBw%2BUAZRbzSZQM7iQ83zDL7K%2B9BjqkAQurCt4p5KJ%2FIxCXZNYsBrtsZ2aUBBJ29cpRrYqVWs6gQ8jnETQY95ljgq6A8XfTPta4R2HAo2a5BFviGh2q1hHEUe0VjCKacQQguJfLSOpQseFRGSrxTeWi6fGQWHcEU1fY7uuKG%2BR9neM6XRTI%2FbmGzLEFsM5Bd%2B77aulSZMQzgfxmSqqaHDQjonRb9BIR6apoWbH0LWPpd3l3w38tsC8erAl8&X-Amz-Signature=05ba77408a850487ddf22ecf4d75cf56c3b3135bed95bbecdeb504ae4d1ec072&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJSAYDD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQnfXgHkSFL%2BZewBTRoSnQbkcTm4ATM9KCavhaBCi0LQIhAOY7%2B34Mqg013ThWyyw4Wx8m4DAxrqDCJopsYpmdoHRuKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWMcZWS2uGKzuZ8Lcq3APAaDx79f2z8hB1ipdSCnQPjbdoE4U5MQ9I6tDByWyhidzhIDDDK52hFqPGVk1Op7Ko8tIw941SWFBEkChcrZ6yLsA6s3TqXagE9HgeHd7jvgmWlcxJCXbPOY9Vr493JU9R62tneR0sr9JXLyIqawXEZeD%2FnY930%2BG%2BbCpFecms83i0QnffQ4tG4iK9gvVMYPSnIS%2FxkZFvm%2BaX1OMe4tOS5VbWN%2FBT7InvzY0eM2FiUFDUighFQUR7ykG623X7B9CPMdu6o9WF%2BXrykVpVFPQdIKCnUzpplLscd2pDWyfwIsOz%2ByHSxIMKhn0JhQd3MjaG4rmp%2Bs466wdlovWQm7Q35Al7bLGmF01FiuB07zgXQn%2BJroMrkBdpXh1yaHgA59mJ0R%2Bi1cYBOLcJ6ut6cNRTIxIBMQQ11anqeXZSerqTEzLd5omHV1xWNwh09Sn8d40CgMGSS63XDYCd12y%2B9bTFT2SBOfaZiny5kWgsgI3CfxOtZBYYX28Kv0Feta9H3yRZ55xnIlgntGhALkuN%2FBDIq4WRnPq%2BjQ9rHXlxdjv4aukMxG4K%2FOmLAADkeiM3pyFA2lvaxpDMnLwD%2FlbX1d6LQDY3kIFR9xLQef%2BPm2TBw%2BUAZRbzSZQM7iQ83zDL7K%2B9BjqkAQurCt4p5KJ%2FIxCXZNYsBrtsZ2aUBBJ29cpRrYqVWs6gQ8jnETQY95ljgq6A8XfTPta4R2HAo2a5BFviGh2q1hHEUe0VjCKacQQguJfLSOpQseFRGSrxTeWi6fGQWHcEU1fY7uuKG%2BR9neM6XRTI%2FbmGzLEFsM5Bd%2B77aulSZMQzgfxmSqqaHDQjonRb9BIR6apoWbH0LWPpd3l3w38tsC8erAl8&X-Amz-Signature=c88a591542f451ef769dea94deb4340408c3e9993337f914e668660349e7d2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJSAYDD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQnfXgHkSFL%2BZewBTRoSnQbkcTm4ATM9KCavhaBCi0LQIhAOY7%2B34Mqg013ThWyyw4Wx8m4DAxrqDCJopsYpmdoHRuKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWMcZWS2uGKzuZ8Lcq3APAaDx79f2z8hB1ipdSCnQPjbdoE4U5MQ9I6tDByWyhidzhIDDDK52hFqPGVk1Op7Ko8tIw941SWFBEkChcrZ6yLsA6s3TqXagE9HgeHd7jvgmWlcxJCXbPOY9Vr493JU9R62tneR0sr9JXLyIqawXEZeD%2FnY930%2BG%2BbCpFecms83i0QnffQ4tG4iK9gvVMYPSnIS%2FxkZFvm%2BaX1OMe4tOS5VbWN%2FBT7InvzY0eM2FiUFDUighFQUR7ykG623X7B9CPMdu6o9WF%2BXrykVpVFPQdIKCnUzpplLscd2pDWyfwIsOz%2ByHSxIMKhn0JhQd3MjaG4rmp%2Bs466wdlovWQm7Q35Al7bLGmF01FiuB07zgXQn%2BJroMrkBdpXh1yaHgA59mJ0R%2Bi1cYBOLcJ6ut6cNRTIxIBMQQ11anqeXZSerqTEzLd5omHV1xWNwh09Sn8d40CgMGSS63XDYCd12y%2B9bTFT2SBOfaZiny5kWgsgI3CfxOtZBYYX28Kv0Feta9H3yRZ55xnIlgntGhALkuN%2FBDIq4WRnPq%2BjQ9rHXlxdjv4aukMxG4K%2FOmLAADkeiM3pyFA2lvaxpDMnLwD%2FlbX1d6LQDY3kIFR9xLQef%2BPm2TBw%2BUAZRbzSZQM7iQ83zDL7K%2B9BjqkAQurCt4p5KJ%2FIxCXZNYsBrtsZ2aUBBJ29cpRrYqVWs6gQ8jnETQY95ljgq6A8XfTPta4R2HAo2a5BFviGh2q1hHEUe0VjCKacQQguJfLSOpQseFRGSrxTeWi6fGQWHcEU1fY7uuKG%2BR9neM6XRTI%2FbmGzLEFsM5Bd%2B77aulSZMQzgfxmSqqaHDQjonRb9BIR6apoWbH0LWPpd3l3w38tsC8erAl8&X-Amz-Signature=5380c1eefe2ad15380e10de90d0efe2b742896ba1038515d38e8a620fd0019ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJSAYDD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQnfXgHkSFL%2BZewBTRoSnQbkcTm4ATM9KCavhaBCi0LQIhAOY7%2B34Mqg013ThWyyw4Wx8m4DAxrqDCJopsYpmdoHRuKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWMcZWS2uGKzuZ8Lcq3APAaDx79f2z8hB1ipdSCnQPjbdoE4U5MQ9I6tDByWyhidzhIDDDK52hFqPGVk1Op7Ko8tIw941SWFBEkChcrZ6yLsA6s3TqXagE9HgeHd7jvgmWlcxJCXbPOY9Vr493JU9R62tneR0sr9JXLyIqawXEZeD%2FnY930%2BG%2BbCpFecms83i0QnffQ4tG4iK9gvVMYPSnIS%2FxkZFvm%2BaX1OMe4tOS5VbWN%2FBT7InvzY0eM2FiUFDUighFQUR7ykG623X7B9CPMdu6o9WF%2BXrykVpVFPQdIKCnUzpplLscd2pDWyfwIsOz%2ByHSxIMKhn0JhQd3MjaG4rmp%2Bs466wdlovWQm7Q35Al7bLGmF01FiuB07zgXQn%2BJroMrkBdpXh1yaHgA59mJ0R%2Bi1cYBOLcJ6ut6cNRTIxIBMQQ11anqeXZSerqTEzLd5omHV1xWNwh09Sn8d40CgMGSS63XDYCd12y%2B9bTFT2SBOfaZiny5kWgsgI3CfxOtZBYYX28Kv0Feta9H3yRZ55xnIlgntGhALkuN%2FBDIq4WRnPq%2BjQ9rHXlxdjv4aukMxG4K%2FOmLAADkeiM3pyFA2lvaxpDMnLwD%2FlbX1d6LQDY3kIFR9xLQef%2BPm2TBw%2BUAZRbzSZQM7iQ83zDL7K%2B9BjqkAQurCt4p5KJ%2FIxCXZNYsBrtsZ2aUBBJ29cpRrYqVWs6gQ8jnETQY95ljgq6A8XfTPta4R2HAo2a5BFviGh2q1hHEUe0VjCKacQQguJfLSOpQseFRGSrxTeWi6fGQWHcEU1fY7uuKG%2BR9neM6XRTI%2FbmGzLEFsM5Bd%2B77aulSZMQzgfxmSqqaHDQjonRb9BIR6apoWbH0LWPpd3l3w38tsC8erAl8&X-Amz-Signature=59607072b231f674309bc220945330af90065fa82f44e7f57cbdd6882c5f162e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJSAYDD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQnfXgHkSFL%2BZewBTRoSnQbkcTm4ATM9KCavhaBCi0LQIhAOY7%2B34Mqg013ThWyyw4Wx8m4DAxrqDCJopsYpmdoHRuKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWMcZWS2uGKzuZ8Lcq3APAaDx79f2z8hB1ipdSCnQPjbdoE4U5MQ9I6tDByWyhidzhIDDDK52hFqPGVk1Op7Ko8tIw941SWFBEkChcrZ6yLsA6s3TqXagE9HgeHd7jvgmWlcxJCXbPOY9Vr493JU9R62tneR0sr9JXLyIqawXEZeD%2FnY930%2BG%2BbCpFecms83i0QnffQ4tG4iK9gvVMYPSnIS%2FxkZFvm%2BaX1OMe4tOS5VbWN%2FBT7InvzY0eM2FiUFDUighFQUR7ykG623X7B9CPMdu6o9WF%2BXrykVpVFPQdIKCnUzpplLscd2pDWyfwIsOz%2ByHSxIMKhn0JhQd3MjaG4rmp%2Bs466wdlovWQm7Q35Al7bLGmF01FiuB07zgXQn%2BJroMrkBdpXh1yaHgA59mJ0R%2Bi1cYBOLcJ6ut6cNRTIxIBMQQ11anqeXZSerqTEzLd5omHV1xWNwh09Sn8d40CgMGSS63XDYCd12y%2B9bTFT2SBOfaZiny5kWgsgI3CfxOtZBYYX28Kv0Feta9H3yRZ55xnIlgntGhALkuN%2FBDIq4WRnPq%2BjQ9rHXlxdjv4aukMxG4K%2FOmLAADkeiM3pyFA2lvaxpDMnLwD%2FlbX1d6LQDY3kIFR9xLQef%2BPm2TBw%2BUAZRbzSZQM7iQ83zDL7K%2B9BjqkAQurCt4p5KJ%2FIxCXZNYsBrtsZ2aUBBJ29cpRrYqVWs6gQ8jnETQY95ljgq6A8XfTPta4R2HAo2a5BFviGh2q1hHEUe0VjCKacQQguJfLSOpQseFRGSrxTeWi6fGQWHcEU1fY7uuKG%2BR9neM6XRTI%2FbmGzLEFsM5Bd%2B77aulSZMQzgfxmSqqaHDQjonRb9BIR6apoWbH0LWPpd3l3w38tsC8erAl8&X-Amz-Signature=d65b0936c04b7b1a9ff6fb4a5a04e57d45cd976f9b95e87d70d4301ca1a8632e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJSAYDD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQnfXgHkSFL%2BZewBTRoSnQbkcTm4ATM9KCavhaBCi0LQIhAOY7%2B34Mqg013ThWyyw4Wx8m4DAxrqDCJopsYpmdoHRuKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWMcZWS2uGKzuZ8Lcq3APAaDx79f2z8hB1ipdSCnQPjbdoE4U5MQ9I6tDByWyhidzhIDDDK52hFqPGVk1Op7Ko8tIw941SWFBEkChcrZ6yLsA6s3TqXagE9HgeHd7jvgmWlcxJCXbPOY9Vr493JU9R62tneR0sr9JXLyIqawXEZeD%2FnY930%2BG%2BbCpFecms83i0QnffQ4tG4iK9gvVMYPSnIS%2FxkZFvm%2BaX1OMe4tOS5VbWN%2FBT7InvzY0eM2FiUFDUighFQUR7ykG623X7B9CPMdu6o9WF%2BXrykVpVFPQdIKCnUzpplLscd2pDWyfwIsOz%2ByHSxIMKhn0JhQd3MjaG4rmp%2Bs466wdlovWQm7Q35Al7bLGmF01FiuB07zgXQn%2BJroMrkBdpXh1yaHgA59mJ0R%2Bi1cYBOLcJ6ut6cNRTIxIBMQQ11anqeXZSerqTEzLd5omHV1xWNwh09Sn8d40CgMGSS63XDYCd12y%2B9bTFT2SBOfaZiny5kWgsgI3CfxOtZBYYX28Kv0Feta9H3yRZ55xnIlgntGhALkuN%2FBDIq4WRnPq%2BjQ9rHXlxdjv4aukMxG4K%2FOmLAADkeiM3pyFA2lvaxpDMnLwD%2FlbX1d6LQDY3kIFR9xLQef%2BPm2TBw%2BUAZRbzSZQM7iQ83zDL7K%2B9BjqkAQurCt4p5KJ%2FIxCXZNYsBrtsZ2aUBBJ29cpRrYqVWs6gQ8jnETQY95ljgq6A8XfTPta4R2HAo2a5BFviGh2q1hHEUe0VjCKacQQguJfLSOpQseFRGSrxTeWi6fGQWHcEU1fY7uuKG%2BR9neM6XRTI%2FbmGzLEFsM5Bd%2B77aulSZMQzgfxmSqqaHDQjonRb9BIR6apoWbH0LWPpd3l3w38tsC8erAl8&X-Amz-Signature=d991f49193002a1d330f8b479ac406616f86175182224ca6e117a34678a4927a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
