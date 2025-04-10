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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3IKUSM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC2CVfUjk%2FZL%2FWH%2BImN%2BnlhJOGMRn0tvQKi7DA%2Fj3B0QAIhAIsJl6vA5NWhyJ%2Fagbc8rdH4yfSk7mq4kijmjqH57d4zKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPS9QMT8F4xbAq5N4q3AOP6jmYJ9UgxRbzGaSrKLfy5kgV%2FF4hNkmbW8ptqfFc1Gp345zAYd2AyZWPUUnJO8cw00mK%2Fa9mcSEhbEf345h4ZJTp2i9U7KnjvlCdsfOm98Sw6f5YvL3TvIG20JnhqxZCM5kxPKq3auxWJrDthqyUuXMQV0O2NX4n7Vva1Dqd7zk2W439v7V8QkCXV%2FaSuJm842Z100kyVFrOaOSpXvcdwdJupSjVswb%2BmurjWee73wCf3jQLG1KXOlGtBHEl95zOuG6MnBuQMRp1m5c9DcACiRNaR488hoNE6DMzH3Eu86dWsW03RuW6EkM%2B4dFewpHpnNIlFmjW8lWier3knoraHGlJON4PclKH4e3DvccKKZgn4vVrpwOtEc%2FtLrWR%2FwjJbf8DfTW1hm4lYPhgHHdchpxd%2FL8a%2FfPLiu8PcDs6%2Fq%2F00r2e3ewf2%2F2UjUm557ZWwod%2F6DFSvmJld8KCgzJ1fTb1uq4oOvwjXxtTDKWOKdjv8WP5p5qjC1yX%2FDVOBwe4hi7vi3fhorPyeFUIA3LQBJ5tcSdHelaNsGqAbRcgctznzDW686hhB8j11bJwoOMKMHAWUUzhwTmAAglJTnZ0FuGaPE%2FSbAr2fzOCHriwSPBWuBIemErUtdQ%2BZDDmn9%2B%2FBjqkAYLGTAYrY8eSKBeh5pthZhZ7aDzJIB6drR4gQYAFRZr%2F65JA2%2F2dXAo63uGC8xL1Zb1ZE8EQBYsjY0eDXt1fKFUy0rpBcOrs3YA68LfuLG1AW%2B889fZmauwATS%2BS2%2BJ3ye%2FJ8a%2B2gZS5JSO%2BDWs8UnMncFBLUlrpCH%2FH5vJQP7TdOvtT1GfSRirCWTw3tiytgHPWMp0HD6yfNFRF0%2BgyFIX9aXqB&X-Amz-Signature=43bf9ba703eec92546dead44805bf0587d9fb73b51213490182d89afa8075c61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3IKUSM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC2CVfUjk%2FZL%2FWH%2BImN%2BnlhJOGMRn0tvQKi7DA%2Fj3B0QAIhAIsJl6vA5NWhyJ%2Fagbc8rdH4yfSk7mq4kijmjqH57d4zKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPS9QMT8F4xbAq5N4q3AOP6jmYJ9UgxRbzGaSrKLfy5kgV%2FF4hNkmbW8ptqfFc1Gp345zAYd2AyZWPUUnJO8cw00mK%2Fa9mcSEhbEf345h4ZJTp2i9U7KnjvlCdsfOm98Sw6f5YvL3TvIG20JnhqxZCM5kxPKq3auxWJrDthqyUuXMQV0O2NX4n7Vva1Dqd7zk2W439v7V8QkCXV%2FaSuJm842Z100kyVFrOaOSpXvcdwdJupSjVswb%2BmurjWee73wCf3jQLG1KXOlGtBHEl95zOuG6MnBuQMRp1m5c9DcACiRNaR488hoNE6DMzH3Eu86dWsW03RuW6EkM%2B4dFewpHpnNIlFmjW8lWier3knoraHGlJON4PclKH4e3DvccKKZgn4vVrpwOtEc%2FtLrWR%2FwjJbf8DfTW1hm4lYPhgHHdchpxd%2FL8a%2FfPLiu8PcDs6%2Fq%2F00r2e3ewf2%2F2UjUm557ZWwod%2F6DFSvmJld8KCgzJ1fTb1uq4oOvwjXxtTDKWOKdjv8WP5p5qjC1yX%2FDVOBwe4hi7vi3fhorPyeFUIA3LQBJ5tcSdHelaNsGqAbRcgctznzDW686hhB8j11bJwoOMKMHAWUUzhwTmAAglJTnZ0FuGaPE%2FSbAr2fzOCHriwSPBWuBIemErUtdQ%2BZDDmn9%2B%2FBjqkAYLGTAYrY8eSKBeh5pthZhZ7aDzJIB6drR4gQYAFRZr%2F65JA2%2F2dXAo63uGC8xL1Zb1ZE8EQBYsjY0eDXt1fKFUy0rpBcOrs3YA68LfuLG1AW%2B889fZmauwATS%2BS2%2BJ3ye%2FJ8a%2B2gZS5JSO%2BDWs8UnMncFBLUlrpCH%2FH5vJQP7TdOvtT1GfSRirCWTw3tiytgHPWMp0HD6yfNFRF0%2BgyFIX9aXqB&X-Amz-Signature=624778930ab04d8d4b30830a452c7ce873953ec4ce3fbbb660b9317e6de32eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3IKUSM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC2CVfUjk%2FZL%2FWH%2BImN%2BnlhJOGMRn0tvQKi7DA%2Fj3B0QAIhAIsJl6vA5NWhyJ%2Fagbc8rdH4yfSk7mq4kijmjqH57d4zKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPS9QMT8F4xbAq5N4q3AOP6jmYJ9UgxRbzGaSrKLfy5kgV%2FF4hNkmbW8ptqfFc1Gp345zAYd2AyZWPUUnJO8cw00mK%2Fa9mcSEhbEf345h4ZJTp2i9U7KnjvlCdsfOm98Sw6f5YvL3TvIG20JnhqxZCM5kxPKq3auxWJrDthqyUuXMQV0O2NX4n7Vva1Dqd7zk2W439v7V8QkCXV%2FaSuJm842Z100kyVFrOaOSpXvcdwdJupSjVswb%2BmurjWee73wCf3jQLG1KXOlGtBHEl95zOuG6MnBuQMRp1m5c9DcACiRNaR488hoNE6DMzH3Eu86dWsW03RuW6EkM%2B4dFewpHpnNIlFmjW8lWier3knoraHGlJON4PclKH4e3DvccKKZgn4vVrpwOtEc%2FtLrWR%2FwjJbf8DfTW1hm4lYPhgHHdchpxd%2FL8a%2FfPLiu8PcDs6%2Fq%2F00r2e3ewf2%2F2UjUm557ZWwod%2F6DFSvmJld8KCgzJ1fTb1uq4oOvwjXxtTDKWOKdjv8WP5p5qjC1yX%2FDVOBwe4hi7vi3fhorPyeFUIA3LQBJ5tcSdHelaNsGqAbRcgctznzDW686hhB8j11bJwoOMKMHAWUUzhwTmAAglJTnZ0FuGaPE%2FSbAr2fzOCHriwSPBWuBIemErUtdQ%2BZDDmn9%2B%2FBjqkAYLGTAYrY8eSKBeh5pthZhZ7aDzJIB6drR4gQYAFRZr%2F65JA2%2F2dXAo63uGC8xL1Zb1ZE8EQBYsjY0eDXt1fKFUy0rpBcOrs3YA68LfuLG1AW%2B889fZmauwATS%2BS2%2BJ3ye%2FJ8a%2B2gZS5JSO%2BDWs8UnMncFBLUlrpCH%2FH5vJQP7TdOvtT1GfSRirCWTw3tiytgHPWMp0HD6yfNFRF0%2BgyFIX9aXqB&X-Amz-Signature=bff3191da84d27a835ae6fd38e6d98a4593a4f51aa4c236fc34f2199c5375143&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3IKUSM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC2CVfUjk%2FZL%2FWH%2BImN%2BnlhJOGMRn0tvQKi7DA%2Fj3B0QAIhAIsJl6vA5NWhyJ%2Fagbc8rdH4yfSk7mq4kijmjqH57d4zKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPS9QMT8F4xbAq5N4q3AOP6jmYJ9UgxRbzGaSrKLfy5kgV%2FF4hNkmbW8ptqfFc1Gp345zAYd2AyZWPUUnJO8cw00mK%2Fa9mcSEhbEf345h4ZJTp2i9U7KnjvlCdsfOm98Sw6f5YvL3TvIG20JnhqxZCM5kxPKq3auxWJrDthqyUuXMQV0O2NX4n7Vva1Dqd7zk2W439v7V8QkCXV%2FaSuJm842Z100kyVFrOaOSpXvcdwdJupSjVswb%2BmurjWee73wCf3jQLG1KXOlGtBHEl95zOuG6MnBuQMRp1m5c9DcACiRNaR488hoNE6DMzH3Eu86dWsW03RuW6EkM%2B4dFewpHpnNIlFmjW8lWier3knoraHGlJON4PclKH4e3DvccKKZgn4vVrpwOtEc%2FtLrWR%2FwjJbf8DfTW1hm4lYPhgHHdchpxd%2FL8a%2FfPLiu8PcDs6%2Fq%2F00r2e3ewf2%2F2UjUm557ZWwod%2F6DFSvmJld8KCgzJ1fTb1uq4oOvwjXxtTDKWOKdjv8WP5p5qjC1yX%2FDVOBwe4hi7vi3fhorPyeFUIA3LQBJ5tcSdHelaNsGqAbRcgctznzDW686hhB8j11bJwoOMKMHAWUUzhwTmAAglJTnZ0FuGaPE%2FSbAr2fzOCHriwSPBWuBIemErUtdQ%2BZDDmn9%2B%2FBjqkAYLGTAYrY8eSKBeh5pthZhZ7aDzJIB6drR4gQYAFRZr%2F65JA2%2F2dXAo63uGC8xL1Zb1ZE8EQBYsjY0eDXt1fKFUy0rpBcOrs3YA68LfuLG1AW%2B889fZmauwATS%2BS2%2BJ3ye%2FJ8a%2B2gZS5JSO%2BDWs8UnMncFBLUlrpCH%2FH5vJQP7TdOvtT1GfSRirCWTw3tiytgHPWMp0HD6yfNFRF0%2BgyFIX9aXqB&X-Amz-Signature=6d8bf172caafe97fbb2fbef1f631e538aabaa4810ceb690508f0cfa06914d40f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3IKUSM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC2CVfUjk%2FZL%2FWH%2BImN%2BnlhJOGMRn0tvQKi7DA%2Fj3B0QAIhAIsJl6vA5NWhyJ%2Fagbc8rdH4yfSk7mq4kijmjqH57d4zKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPS9QMT8F4xbAq5N4q3AOP6jmYJ9UgxRbzGaSrKLfy5kgV%2FF4hNkmbW8ptqfFc1Gp345zAYd2AyZWPUUnJO8cw00mK%2Fa9mcSEhbEf345h4ZJTp2i9U7KnjvlCdsfOm98Sw6f5YvL3TvIG20JnhqxZCM5kxPKq3auxWJrDthqyUuXMQV0O2NX4n7Vva1Dqd7zk2W439v7V8QkCXV%2FaSuJm842Z100kyVFrOaOSpXvcdwdJupSjVswb%2BmurjWee73wCf3jQLG1KXOlGtBHEl95zOuG6MnBuQMRp1m5c9DcACiRNaR488hoNE6DMzH3Eu86dWsW03RuW6EkM%2B4dFewpHpnNIlFmjW8lWier3knoraHGlJON4PclKH4e3DvccKKZgn4vVrpwOtEc%2FtLrWR%2FwjJbf8DfTW1hm4lYPhgHHdchpxd%2FL8a%2FfPLiu8PcDs6%2Fq%2F00r2e3ewf2%2F2UjUm557ZWwod%2F6DFSvmJld8KCgzJ1fTb1uq4oOvwjXxtTDKWOKdjv8WP5p5qjC1yX%2FDVOBwe4hi7vi3fhorPyeFUIA3LQBJ5tcSdHelaNsGqAbRcgctznzDW686hhB8j11bJwoOMKMHAWUUzhwTmAAglJTnZ0FuGaPE%2FSbAr2fzOCHriwSPBWuBIemErUtdQ%2BZDDmn9%2B%2FBjqkAYLGTAYrY8eSKBeh5pthZhZ7aDzJIB6drR4gQYAFRZr%2F65JA2%2F2dXAo63uGC8xL1Zb1ZE8EQBYsjY0eDXt1fKFUy0rpBcOrs3YA68LfuLG1AW%2B889fZmauwATS%2BS2%2BJ3ye%2FJ8a%2B2gZS5JSO%2BDWs8UnMncFBLUlrpCH%2FH5vJQP7TdOvtT1GfSRirCWTw3tiytgHPWMp0HD6yfNFRF0%2BgyFIX9aXqB&X-Amz-Signature=db808c4a826f17324eff6b8c9896659fed0590236070e23d1d36848e008809a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3IKUSM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC2CVfUjk%2FZL%2FWH%2BImN%2BnlhJOGMRn0tvQKi7DA%2Fj3B0QAIhAIsJl6vA5NWhyJ%2Fagbc8rdH4yfSk7mq4kijmjqH57d4zKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPS9QMT8F4xbAq5N4q3AOP6jmYJ9UgxRbzGaSrKLfy5kgV%2FF4hNkmbW8ptqfFc1Gp345zAYd2AyZWPUUnJO8cw00mK%2Fa9mcSEhbEf345h4ZJTp2i9U7KnjvlCdsfOm98Sw6f5YvL3TvIG20JnhqxZCM5kxPKq3auxWJrDthqyUuXMQV0O2NX4n7Vva1Dqd7zk2W439v7V8QkCXV%2FaSuJm842Z100kyVFrOaOSpXvcdwdJupSjVswb%2BmurjWee73wCf3jQLG1KXOlGtBHEl95zOuG6MnBuQMRp1m5c9DcACiRNaR488hoNE6DMzH3Eu86dWsW03RuW6EkM%2B4dFewpHpnNIlFmjW8lWier3knoraHGlJON4PclKH4e3DvccKKZgn4vVrpwOtEc%2FtLrWR%2FwjJbf8DfTW1hm4lYPhgHHdchpxd%2FL8a%2FfPLiu8PcDs6%2Fq%2F00r2e3ewf2%2F2UjUm557ZWwod%2F6DFSvmJld8KCgzJ1fTb1uq4oOvwjXxtTDKWOKdjv8WP5p5qjC1yX%2FDVOBwe4hi7vi3fhorPyeFUIA3LQBJ5tcSdHelaNsGqAbRcgctznzDW686hhB8j11bJwoOMKMHAWUUzhwTmAAglJTnZ0FuGaPE%2FSbAr2fzOCHriwSPBWuBIemErUtdQ%2BZDDmn9%2B%2FBjqkAYLGTAYrY8eSKBeh5pthZhZ7aDzJIB6drR4gQYAFRZr%2F65JA2%2F2dXAo63uGC8xL1Zb1ZE8EQBYsjY0eDXt1fKFUy0rpBcOrs3YA68LfuLG1AW%2B889fZmauwATS%2BS2%2BJ3ye%2FJ8a%2B2gZS5JSO%2BDWs8UnMncFBLUlrpCH%2FH5vJQP7TdOvtT1GfSRirCWTw3tiytgHPWMp0HD6yfNFRF0%2BgyFIX9aXqB&X-Amz-Signature=68a4b83e14df60f2ffd3a080ec85c88ee9db4753f2f0db9fa6a919b808ab420a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3IKUSM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC2CVfUjk%2FZL%2FWH%2BImN%2BnlhJOGMRn0tvQKi7DA%2Fj3B0QAIhAIsJl6vA5NWhyJ%2Fagbc8rdH4yfSk7mq4kijmjqH57d4zKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPS9QMT8F4xbAq5N4q3AOP6jmYJ9UgxRbzGaSrKLfy5kgV%2FF4hNkmbW8ptqfFc1Gp345zAYd2AyZWPUUnJO8cw00mK%2Fa9mcSEhbEf345h4ZJTp2i9U7KnjvlCdsfOm98Sw6f5YvL3TvIG20JnhqxZCM5kxPKq3auxWJrDthqyUuXMQV0O2NX4n7Vva1Dqd7zk2W439v7V8QkCXV%2FaSuJm842Z100kyVFrOaOSpXvcdwdJupSjVswb%2BmurjWee73wCf3jQLG1KXOlGtBHEl95zOuG6MnBuQMRp1m5c9DcACiRNaR488hoNE6DMzH3Eu86dWsW03RuW6EkM%2B4dFewpHpnNIlFmjW8lWier3knoraHGlJON4PclKH4e3DvccKKZgn4vVrpwOtEc%2FtLrWR%2FwjJbf8DfTW1hm4lYPhgHHdchpxd%2FL8a%2FfPLiu8PcDs6%2Fq%2F00r2e3ewf2%2F2UjUm557ZWwod%2F6DFSvmJld8KCgzJ1fTb1uq4oOvwjXxtTDKWOKdjv8WP5p5qjC1yX%2FDVOBwe4hi7vi3fhorPyeFUIA3LQBJ5tcSdHelaNsGqAbRcgctznzDW686hhB8j11bJwoOMKMHAWUUzhwTmAAglJTnZ0FuGaPE%2FSbAr2fzOCHriwSPBWuBIemErUtdQ%2BZDDmn9%2B%2FBjqkAYLGTAYrY8eSKBeh5pthZhZ7aDzJIB6drR4gQYAFRZr%2F65JA2%2F2dXAo63uGC8xL1Zb1ZE8EQBYsjY0eDXt1fKFUy0rpBcOrs3YA68LfuLG1AW%2B889fZmauwATS%2BS2%2BJ3ye%2FJ8a%2B2gZS5JSO%2BDWs8UnMncFBLUlrpCH%2FH5vJQP7TdOvtT1GfSRirCWTw3tiytgHPWMp0HD6yfNFRF0%2BgyFIX9aXqB&X-Amz-Signature=16eb2979cbd545e4e4bba112bf2f023384ff30e90e6932dcb5e82c2152aebf6b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
