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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW5UEI7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD5vvsugNbnwR56%2Bo%2BM6ymI6cAigtWIFaQV%2BIsdcFbZ1AIhAP0ctbfeZeel5inAJ7JsbPkSrBLtkJm8ZsJJV%2BtyM92%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgOUZu2Wa3cdlq0msq3APLgTQ3DpCgaSkLbHS2Z1gY3Uc3i25q9gDV2kshFSs8bW3lniF24wrkYLM68%2BQbaIKNcfBY5gS2MegZ7wPmVOLd9KV6lKI6%2B%2B93wIsEWIs0SWyOyCZPKbL9Gg6q3jmFIAg1z2FEaWjl4YBmc5yFMAIBgf03v2EXLPuipzny5fl6cmwV5OgvJe0EzRLaewLxcbRsv39aE06tBMfpXWy2hGBDGtiU8KogNchqhyzKP40%2B%2FTqQE%2FUEA2NdSj%2FBDqO7f7qi2lgbp1b2NBCCaDjOxjyDPYBPQsSASPK98N4vB85%2FKgT9bHYE5inm4I%2FcnZYebygbVYcWW6N53UIaNHIpHKTvi02IPX0k%2Ba003H2FLeXUA1We2DKd3NP8qZ3Y4KRnG%2F6FHaPzWYr%2FTX0E0d6n8I7PzytLbkaZ0DXdj2K422eb3ZeC3gtyK73Cpkuhy1rNwKaeTz3VZjcdsZdsR793nM%2FPjoyye4JZRtqugDpalJBxNPcGozJJmvIYRleFik0AkB56vejoE2V%2Fb4JQY9eDyomhP4wjdwBFYjijHvuypV%2BDaCNO4Cyt2SUxXZhRLZwyF%2FsE3SsYcIPvrrAHm2haY6DDBXE9%2Fpf0vhMaxKtgxaeMLsw2xqR6Mn6oMr%2FW6zDtt6jCBjqkAbNuPZXAN7hQCaW3w9eqzOdEAW7nFLrQP75lWvGYtc79UxhG2TIUSIKaTtuLw6NcggVQFbX1pn%2FY4OvIDA6H02EpZy%2Bs2x5VfKAO0R5FXIC1yn%2Bsftz2bNMQeZpPar0XdW%2BIvvFnsPau9krMpRGRDz%2Fgeq0hNwVJxviZIWiTmMtgITpipOp9eXg%2BX3SPe0Zm8QySa15y%2FTY4hSqwnEFz%2Bigie2Y%2B&X-Amz-Signature=32e4d533ba7b838c16d656f28f4c1616a8cb44fa0fb76a46942f4812371f9ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW5UEI7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD5vvsugNbnwR56%2Bo%2BM6ymI6cAigtWIFaQV%2BIsdcFbZ1AIhAP0ctbfeZeel5inAJ7JsbPkSrBLtkJm8ZsJJV%2BtyM92%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgOUZu2Wa3cdlq0msq3APLgTQ3DpCgaSkLbHS2Z1gY3Uc3i25q9gDV2kshFSs8bW3lniF24wrkYLM68%2BQbaIKNcfBY5gS2MegZ7wPmVOLd9KV6lKI6%2B%2B93wIsEWIs0SWyOyCZPKbL9Gg6q3jmFIAg1z2FEaWjl4YBmc5yFMAIBgf03v2EXLPuipzny5fl6cmwV5OgvJe0EzRLaewLxcbRsv39aE06tBMfpXWy2hGBDGtiU8KogNchqhyzKP40%2B%2FTqQE%2FUEA2NdSj%2FBDqO7f7qi2lgbp1b2NBCCaDjOxjyDPYBPQsSASPK98N4vB85%2FKgT9bHYE5inm4I%2FcnZYebygbVYcWW6N53UIaNHIpHKTvi02IPX0k%2Ba003H2FLeXUA1We2DKd3NP8qZ3Y4KRnG%2F6FHaPzWYr%2FTX0E0d6n8I7PzytLbkaZ0DXdj2K422eb3ZeC3gtyK73Cpkuhy1rNwKaeTz3VZjcdsZdsR793nM%2FPjoyye4JZRtqugDpalJBxNPcGozJJmvIYRleFik0AkB56vejoE2V%2Fb4JQY9eDyomhP4wjdwBFYjijHvuypV%2BDaCNO4Cyt2SUxXZhRLZwyF%2FsE3SsYcIPvrrAHm2haY6DDBXE9%2Fpf0vhMaxKtgxaeMLsw2xqR6Mn6oMr%2FW6zDtt6jCBjqkAbNuPZXAN7hQCaW3w9eqzOdEAW7nFLrQP75lWvGYtc79UxhG2TIUSIKaTtuLw6NcggVQFbX1pn%2FY4OvIDA6H02EpZy%2Bs2x5VfKAO0R5FXIC1yn%2Bsftz2bNMQeZpPar0XdW%2BIvvFnsPau9krMpRGRDz%2Fgeq0hNwVJxviZIWiTmMtgITpipOp9eXg%2BX3SPe0Zm8QySa15y%2FTY4hSqwnEFz%2Bigie2Y%2B&X-Amz-Signature=da00eed8d37f2975306924b6cc2a08eb4b4d16ef29ced19d1662fa873b1e84cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW5UEI7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD5vvsugNbnwR56%2Bo%2BM6ymI6cAigtWIFaQV%2BIsdcFbZ1AIhAP0ctbfeZeel5inAJ7JsbPkSrBLtkJm8ZsJJV%2BtyM92%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgOUZu2Wa3cdlq0msq3APLgTQ3DpCgaSkLbHS2Z1gY3Uc3i25q9gDV2kshFSs8bW3lniF24wrkYLM68%2BQbaIKNcfBY5gS2MegZ7wPmVOLd9KV6lKI6%2B%2B93wIsEWIs0SWyOyCZPKbL9Gg6q3jmFIAg1z2FEaWjl4YBmc5yFMAIBgf03v2EXLPuipzny5fl6cmwV5OgvJe0EzRLaewLxcbRsv39aE06tBMfpXWy2hGBDGtiU8KogNchqhyzKP40%2B%2FTqQE%2FUEA2NdSj%2FBDqO7f7qi2lgbp1b2NBCCaDjOxjyDPYBPQsSASPK98N4vB85%2FKgT9bHYE5inm4I%2FcnZYebygbVYcWW6N53UIaNHIpHKTvi02IPX0k%2Ba003H2FLeXUA1We2DKd3NP8qZ3Y4KRnG%2F6FHaPzWYr%2FTX0E0d6n8I7PzytLbkaZ0DXdj2K422eb3ZeC3gtyK73Cpkuhy1rNwKaeTz3VZjcdsZdsR793nM%2FPjoyye4JZRtqugDpalJBxNPcGozJJmvIYRleFik0AkB56vejoE2V%2Fb4JQY9eDyomhP4wjdwBFYjijHvuypV%2BDaCNO4Cyt2SUxXZhRLZwyF%2FsE3SsYcIPvrrAHm2haY6DDBXE9%2Fpf0vhMaxKtgxaeMLsw2xqR6Mn6oMr%2FW6zDtt6jCBjqkAbNuPZXAN7hQCaW3w9eqzOdEAW7nFLrQP75lWvGYtc79UxhG2TIUSIKaTtuLw6NcggVQFbX1pn%2FY4OvIDA6H02EpZy%2Bs2x5VfKAO0R5FXIC1yn%2Bsftz2bNMQeZpPar0XdW%2BIvvFnsPau9krMpRGRDz%2Fgeq0hNwVJxviZIWiTmMtgITpipOp9eXg%2BX3SPe0Zm8QySa15y%2FTY4hSqwnEFz%2Bigie2Y%2B&X-Amz-Signature=54cb1a57729267f2e2aa9fe5bc780d3c6923cbd9ca8de580f13b83a6d961faf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW5UEI7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD5vvsugNbnwR56%2Bo%2BM6ymI6cAigtWIFaQV%2BIsdcFbZ1AIhAP0ctbfeZeel5inAJ7JsbPkSrBLtkJm8ZsJJV%2BtyM92%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgOUZu2Wa3cdlq0msq3APLgTQ3DpCgaSkLbHS2Z1gY3Uc3i25q9gDV2kshFSs8bW3lniF24wrkYLM68%2BQbaIKNcfBY5gS2MegZ7wPmVOLd9KV6lKI6%2B%2B93wIsEWIs0SWyOyCZPKbL9Gg6q3jmFIAg1z2FEaWjl4YBmc5yFMAIBgf03v2EXLPuipzny5fl6cmwV5OgvJe0EzRLaewLxcbRsv39aE06tBMfpXWy2hGBDGtiU8KogNchqhyzKP40%2B%2FTqQE%2FUEA2NdSj%2FBDqO7f7qi2lgbp1b2NBCCaDjOxjyDPYBPQsSASPK98N4vB85%2FKgT9bHYE5inm4I%2FcnZYebygbVYcWW6N53UIaNHIpHKTvi02IPX0k%2Ba003H2FLeXUA1We2DKd3NP8qZ3Y4KRnG%2F6FHaPzWYr%2FTX0E0d6n8I7PzytLbkaZ0DXdj2K422eb3ZeC3gtyK73Cpkuhy1rNwKaeTz3VZjcdsZdsR793nM%2FPjoyye4JZRtqugDpalJBxNPcGozJJmvIYRleFik0AkB56vejoE2V%2Fb4JQY9eDyomhP4wjdwBFYjijHvuypV%2BDaCNO4Cyt2SUxXZhRLZwyF%2FsE3SsYcIPvrrAHm2haY6DDBXE9%2Fpf0vhMaxKtgxaeMLsw2xqR6Mn6oMr%2FW6zDtt6jCBjqkAbNuPZXAN7hQCaW3w9eqzOdEAW7nFLrQP75lWvGYtc79UxhG2TIUSIKaTtuLw6NcggVQFbX1pn%2FY4OvIDA6H02EpZy%2Bs2x5VfKAO0R5FXIC1yn%2Bsftz2bNMQeZpPar0XdW%2BIvvFnsPau9krMpRGRDz%2Fgeq0hNwVJxviZIWiTmMtgITpipOp9eXg%2BX3SPe0Zm8QySa15y%2FTY4hSqwnEFz%2Bigie2Y%2B&X-Amz-Signature=8484a7b8a69f3e62f5d8f4ccec363a0e121d345145661e15cebc566907e40f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW5UEI7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD5vvsugNbnwR56%2Bo%2BM6ymI6cAigtWIFaQV%2BIsdcFbZ1AIhAP0ctbfeZeel5inAJ7JsbPkSrBLtkJm8ZsJJV%2BtyM92%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgOUZu2Wa3cdlq0msq3APLgTQ3DpCgaSkLbHS2Z1gY3Uc3i25q9gDV2kshFSs8bW3lniF24wrkYLM68%2BQbaIKNcfBY5gS2MegZ7wPmVOLd9KV6lKI6%2B%2B93wIsEWIs0SWyOyCZPKbL9Gg6q3jmFIAg1z2FEaWjl4YBmc5yFMAIBgf03v2EXLPuipzny5fl6cmwV5OgvJe0EzRLaewLxcbRsv39aE06tBMfpXWy2hGBDGtiU8KogNchqhyzKP40%2B%2FTqQE%2FUEA2NdSj%2FBDqO7f7qi2lgbp1b2NBCCaDjOxjyDPYBPQsSASPK98N4vB85%2FKgT9bHYE5inm4I%2FcnZYebygbVYcWW6N53UIaNHIpHKTvi02IPX0k%2Ba003H2FLeXUA1We2DKd3NP8qZ3Y4KRnG%2F6FHaPzWYr%2FTX0E0d6n8I7PzytLbkaZ0DXdj2K422eb3ZeC3gtyK73Cpkuhy1rNwKaeTz3VZjcdsZdsR793nM%2FPjoyye4JZRtqugDpalJBxNPcGozJJmvIYRleFik0AkB56vejoE2V%2Fb4JQY9eDyomhP4wjdwBFYjijHvuypV%2BDaCNO4Cyt2SUxXZhRLZwyF%2FsE3SsYcIPvrrAHm2haY6DDBXE9%2Fpf0vhMaxKtgxaeMLsw2xqR6Mn6oMr%2FW6zDtt6jCBjqkAbNuPZXAN7hQCaW3w9eqzOdEAW7nFLrQP75lWvGYtc79UxhG2TIUSIKaTtuLw6NcggVQFbX1pn%2FY4OvIDA6H02EpZy%2Bs2x5VfKAO0R5FXIC1yn%2Bsftz2bNMQeZpPar0XdW%2BIvvFnsPau9krMpRGRDz%2Fgeq0hNwVJxviZIWiTmMtgITpipOp9eXg%2BX3SPe0Zm8QySa15y%2FTY4hSqwnEFz%2Bigie2Y%2B&X-Amz-Signature=5ba5ede635f2abb05f27db5a4a0dfda4cf7c0df7acae9219ac8e1562a6ccc27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW5UEI7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD5vvsugNbnwR56%2Bo%2BM6ymI6cAigtWIFaQV%2BIsdcFbZ1AIhAP0ctbfeZeel5inAJ7JsbPkSrBLtkJm8ZsJJV%2BtyM92%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgOUZu2Wa3cdlq0msq3APLgTQ3DpCgaSkLbHS2Z1gY3Uc3i25q9gDV2kshFSs8bW3lniF24wrkYLM68%2BQbaIKNcfBY5gS2MegZ7wPmVOLd9KV6lKI6%2B%2B93wIsEWIs0SWyOyCZPKbL9Gg6q3jmFIAg1z2FEaWjl4YBmc5yFMAIBgf03v2EXLPuipzny5fl6cmwV5OgvJe0EzRLaewLxcbRsv39aE06tBMfpXWy2hGBDGtiU8KogNchqhyzKP40%2B%2FTqQE%2FUEA2NdSj%2FBDqO7f7qi2lgbp1b2NBCCaDjOxjyDPYBPQsSASPK98N4vB85%2FKgT9bHYE5inm4I%2FcnZYebygbVYcWW6N53UIaNHIpHKTvi02IPX0k%2Ba003H2FLeXUA1We2DKd3NP8qZ3Y4KRnG%2F6FHaPzWYr%2FTX0E0d6n8I7PzytLbkaZ0DXdj2K422eb3ZeC3gtyK73Cpkuhy1rNwKaeTz3VZjcdsZdsR793nM%2FPjoyye4JZRtqugDpalJBxNPcGozJJmvIYRleFik0AkB56vejoE2V%2Fb4JQY9eDyomhP4wjdwBFYjijHvuypV%2BDaCNO4Cyt2SUxXZhRLZwyF%2FsE3SsYcIPvrrAHm2haY6DDBXE9%2Fpf0vhMaxKtgxaeMLsw2xqR6Mn6oMr%2FW6zDtt6jCBjqkAbNuPZXAN7hQCaW3w9eqzOdEAW7nFLrQP75lWvGYtc79UxhG2TIUSIKaTtuLw6NcggVQFbX1pn%2FY4OvIDA6H02EpZy%2Bs2x5VfKAO0R5FXIC1yn%2Bsftz2bNMQeZpPar0XdW%2BIvvFnsPau9krMpRGRDz%2Fgeq0hNwVJxviZIWiTmMtgITpipOp9eXg%2BX3SPe0Zm8QySa15y%2FTY4hSqwnEFz%2Bigie2Y%2B&X-Amz-Signature=8cff4902aaf3961c238eb4955532069fe8a766cd9ad12725bdd8104cf87ff64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW5UEI7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD5vvsugNbnwR56%2Bo%2BM6ymI6cAigtWIFaQV%2BIsdcFbZ1AIhAP0ctbfeZeel5inAJ7JsbPkSrBLtkJm8ZsJJV%2BtyM92%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgOUZu2Wa3cdlq0msq3APLgTQ3DpCgaSkLbHS2Z1gY3Uc3i25q9gDV2kshFSs8bW3lniF24wrkYLM68%2BQbaIKNcfBY5gS2MegZ7wPmVOLd9KV6lKI6%2B%2B93wIsEWIs0SWyOyCZPKbL9Gg6q3jmFIAg1z2FEaWjl4YBmc5yFMAIBgf03v2EXLPuipzny5fl6cmwV5OgvJe0EzRLaewLxcbRsv39aE06tBMfpXWy2hGBDGtiU8KogNchqhyzKP40%2B%2FTqQE%2FUEA2NdSj%2FBDqO7f7qi2lgbp1b2NBCCaDjOxjyDPYBPQsSASPK98N4vB85%2FKgT9bHYE5inm4I%2FcnZYebygbVYcWW6N53UIaNHIpHKTvi02IPX0k%2Ba003H2FLeXUA1We2DKd3NP8qZ3Y4KRnG%2F6FHaPzWYr%2FTX0E0d6n8I7PzytLbkaZ0DXdj2K422eb3ZeC3gtyK73Cpkuhy1rNwKaeTz3VZjcdsZdsR793nM%2FPjoyye4JZRtqugDpalJBxNPcGozJJmvIYRleFik0AkB56vejoE2V%2Fb4JQY9eDyomhP4wjdwBFYjijHvuypV%2BDaCNO4Cyt2SUxXZhRLZwyF%2FsE3SsYcIPvrrAHm2haY6DDBXE9%2Fpf0vhMaxKtgxaeMLsw2xqR6Mn6oMr%2FW6zDtt6jCBjqkAbNuPZXAN7hQCaW3w9eqzOdEAW7nFLrQP75lWvGYtc79UxhG2TIUSIKaTtuLw6NcggVQFbX1pn%2FY4OvIDA6H02EpZy%2Bs2x5VfKAO0R5FXIC1yn%2Bsftz2bNMQeZpPar0XdW%2BIvvFnsPau9krMpRGRDz%2Fgeq0hNwVJxviZIWiTmMtgITpipOp9eXg%2BX3SPe0Zm8QySa15y%2FTY4hSqwnEFz%2Bigie2Y%2B&X-Amz-Signature=b5f20f62f10f5c957c4f39f2d107195ac135c05e0c196f86199e08ec62236a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
