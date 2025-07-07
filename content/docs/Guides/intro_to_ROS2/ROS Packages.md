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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NS6OS6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCH5UxpzEqRjoAp1ROBCGIdPnNyaZuWehD17HaG9ZR5pAIgblJ3uc94ifzmCWZhSbkA80C8FVvqME4ccqq0ba3vlfAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAqCAY7l1KTSG9ww%2BSrcAzkZMFItsglIeC6E7B3yxoTp75mYMd1N6WpkoTuN1EclDPj3FGraTlctA%2BWSeBcNxurcenxWAdAK%2FTgOaq0dd3egsBYBEPMi66hbh3ctxTUshMiqC%2FP89przKcgn2pyunmrZcrVIapHfuutYxtGSi2s2LlQpICsNNhdCYWlyCMlDf%2Fix8VPFCo1IGJerDa7GhSDFnqyqvtKLjaFNTHnlwdWmK0DClDJSCTLlhTNj762YJa1xN4ORqc8Sei0Y7QEo5H9Zlk8MoNKBSbdLi6ymLep76yL5nc39aVuDOpMhGC60Y9Vp1029sHwnfk9q5IG7FBc48D0ktCmoqHdpngS0eEgWTtUL0m%2BegTveEiJ6cDJUcOWGYSD9hL6ctJ8wutFPQc0vcAiPn2TCB19USqIUmWGOWYWD%2BRgq4YeKeiV3N8cLpdsgWAASfL0h8EGL66t3qsrQ4zqrCLvaWKjfgbEaNpk6UfCvAsbH2mvce4s9JnGDoiJXTVvxqIsWGDvSb3kGICpF5lq1X%2BbrGE6GxXZ6H1UPyEqXBRlKy75j5VRhJDMKpeWosezd8T0plt2p5BCkMtr9UQDaUh14TVStj9mIzdzr%2FsJFI1qI03RBcwVy6hRwjjR0NA4ySUSS%2FiOaMLyHrMMGOqUBWsKVDdfOD0JE0n4F0gayHoIE4K70HnhqDA5Z61g2mwegWgseheEZkA2EX%2BIO%2FgC9n4GgvKScg3xUyR2l6ywgUFho5jnQW7exXFpjp%2Bj5oSzxyk1zb3gk6jNeBs%2FFiNUE5rC4OlXocnyXOgaAqLB4Q6CBgRPIQrc%2BYswJ8sCAnImJoOGBYi%2Fp0VV%2BWSMNVbK7jPubGapATnEIsc%2Bw8WguddaOCVTN&X-Amz-Signature=266214193b16c45acf642b2d173387b7470fe73d276328a2c4530c4de9842476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NS6OS6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCH5UxpzEqRjoAp1ROBCGIdPnNyaZuWehD17HaG9ZR5pAIgblJ3uc94ifzmCWZhSbkA80C8FVvqME4ccqq0ba3vlfAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAqCAY7l1KTSG9ww%2BSrcAzkZMFItsglIeC6E7B3yxoTp75mYMd1N6WpkoTuN1EclDPj3FGraTlctA%2BWSeBcNxurcenxWAdAK%2FTgOaq0dd3egsBYBEPMi66hbh3ctxTUshMiqC%2FP89przKcgn2pyunmrZcrVIapHfuutYxtGSi2s2LlQpICsNNhdCYWlyCMlDf%2Fix8VPFCo1IGJerDa7GhSDFnqyqvtKLjaFNTHnlwdWmK0DClDJSCTLlhTNj762YJa1xN4ORqc8Sei0Y7QEo5H9Zlk8MoNKBSbdLi6ymLep76yL5nc39aVuDOpMhGC60Y9Vp1029sHwnfk9q5IG7FBc48D0ktCmoqHdpngS0eEgWTtUL0m%2BegTveEiJ6cDJUcOWGYSD9hL6ctJ8wutFPQc0vcAiPn2TCB19USqIUmWGOWYWD%2BRgq4YeKeiV3N8cLpdsgWAASfL0h8EGL66t3qsrQ4zqrCLvaWKjfgbEaNpk6UfCvAsbH2mvce4s9JnGDoiJXTVvxqIsWGDvSb3kGICpF5lq1X%2BbrGE6GxXZ6H1UPyEqXBRlKy75j5VRhJDMKpeWosezd8T0plt2p5BCkMtr9UQDaUh14TVStj9mIzdzr%2FsJFI1qI03RBcwVy6hRwjjR0NA4ySUSS%2FiOaMLyHrMMGOqUBWsKVDdfOD0JE0n4F0gayHoIE4K70HnhqDA5Z61g2mwegWgseheEZkA2EX%2BIO%2FgC9n4GgvKScg3xUyR2l6ywgUFho5jnQW7exXFpjp%2Bj5oSzxyk1zb3gk6jNeBs%2FFiNUE5rC4OlXocnyXOgaAqLB4Q6CBgRPIQrc%2BYswJ8sCAnImJoOGBYi%2Fp0VV%2BWSMNVbK7jPubGapATnEIsc%2Bw8WguddaOCVTN&X-Amz-Signature=1be50f03db4e9548667e1b7c062c6d96c7056276a9c643cc58357133795b2dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NS6OS6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCH5UxpzEqRjoAp1ROBCGIdPnNyaZuWehD17HaG9ZR5pAIgblJ3uc94ifzmCWZhSbkA80C8FVvqME4ccqq0ba3vlfAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAqCAY7l1KTSG9ww%2BSrcAzkZMFItsglIeC6E7B3yxoTp75mYMd1N6WpkoTuN1EclDPj3FGraTlctA%2BWSeBcNxurcenxWAdAK%2FTgOaq0dd3egsBYBEPMi66hbh3ctxTUshMiqC%2FP89przKcgn2pyunmrZcrVIapHfuutYxtGSi2s2LlQpICsNNhdCYWlyCMlDf%2Fix8VPFCo1IGJerDa7GhSDFnqyqvtKLjaFNTHnlwdWmK0DClDJSCTLlhTNj762YJa1xN4ORqc8Sei0Y7QEo5H9Zlk8MoNKBSbdLi6ymLep76yL5nc39aVuDOpMhGC60Y9Vp1029sHwnfk9q5IG7FBc48D0ktCmoqHdpngS0eEgWTtUL0m%2BegTveEiJ6cDJUcOWGYSD9hL6ctJ8wutFPQc0vcAiPn2TCB19USqIUmWGOWYWD%2BRgq4YeKeiV3N8cLpdsgWAASfL0h8EGL66t3qsrQ4zqrCLvaWKjfgbEaNpk6UfCvAsbH2mvce4s9JnGDoiJXTVvxqIsWGDvSb3kGICpF5lq1X%2BbrGE6GxXZ6H1UPyEqXBRlKy75j5VRhJDMKpeWosezd8T0plt2p5BCkMtr9UQDaUh14TVStj9mIzdzr%2FsJFI1qI03RBcwVy6hRwjjR0NA4ySUSS%2FiOaMLyHrMMGOqUBWsKVDdfOD0JE0n4F0gayHoIE4K70HnhqDA5Z61g2mwegWgseheEZkA2EX%2BIO%2FgC9n4GgvKScg3xUyR2l6ywgUFho5jnQW7exXFpjp%2Bj5oSzxyk1zb3gk6jNeBs%2FFiNUE5rC4OlXocnyXOgaAqLB4Q6CBgRPIQrc%2BYswJ8sCAnImJoOGBYi%2Fp0VV%2BWSMNVbK7jPubGapATnEIsc%2Bw8WguddaOCVTN&X-Amz-Signature=33d5ba5bdf4ad924dd153746aca218dd114d9c1b0d4c99d723db8fdad1d22467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NS6OS6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCH5UxpzEqRjoAp1ROBCGIdPnNyaZuWehD17HaG9ZR5pAIgblJ3uc94ifzmCWZhSbkA80C8FVvqME4ccqq0ba3vlfAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAqCAY7l1KTSG9ww%2BSrcAzkZMFItsglIeC6E7B3yxoTp75mYMd1N6WpkoTuN1EclDPj3FGraTlctA%2BWSeBcNxurcenxWAdAK%2FTgOaq0dd3egsBYBEPMi66hbh3ctxTUshMiqC%2FP89przKcgn2pyunmrZcrVIapHfuutYxtGSi2s2LlQpICsNNhdCYWlyCMlDf%2Fix8VPFCo1IGJerDa7GhSDFnqyqvtKLjaFNTHnlwdWmK0DClDJSCTLlhTNj762YJa1xN4ORqc8Sei0Y7QEo5H9Zlk8MoNKBSbdLi6ymLep76yL5nc39aVuDOpMhGC60Y9Vp1029sHwnfk9q5IG7FBc48D0ktCmoqHdpngS0eEgWTtUL0m%2BegTveEiJ6cDJUcOWGYSD9hL6ctJ8wutFPQc0vcAiPn2TCB19USqIUmWGOWYWD%2BRgq4YeKeiV3N8cLpdsgWAASfL0h8EGL66t3qsrQ4zqrCLvaWKjfgbEaNpk6UfCvAsbH2mvce4s9JnGDoiJXTVvxqIsWGDvSb3kGICpF5lq1X%2BbrGE6GxXZ6H1UPyEqXBRlKy75j5VRhJDMKpeWosezd8T0plt2p5BCkMtr9UQDaUh14TVStj9mIzdzr%2FsJFI1qI03RBcwVy6hRwjjR0NA4ySUSS%2FiOaMLyHrMMGOqUBWsKVDdfOD0JE0n4F0gayHoIE4K70HnhqDA5Z61g2mwegWgseheEZkA2EX%2BIO%2FgC9n4GgvKScg3xUyR2l6ywgUFho5jnQW7exXFpjp%2Bj5oSzxyk1zb3gk6jNeBs%2FFiNUE5rC4OlXocnyXOgaAqLB4Q6CBgRPIQrc%2BYswJ8sCAnImJoOGBYi%2Fp0VV%2BWSMNVbK7jPubGapATnEIsc%2Bw8WguddaOCVTN&X-Amz-Signature=113f00e40a2f1086f24812426bf4726eaebd3151e0084611cf1015ec144ae48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NS6OS6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCH5UxpzEqRjoAp1ROBCGIdPnNyaZuWehD17HaG9ZR5pAIgblJ3uc94ifzmCWZhSbkA80C8FVvqME4ccqq0ba3vlfAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAqCAY7l1KTSG9ww%2BSrcAzkZMFItsglIeC6E7B3yxoTp75mYMd1N6WpkoTuN1EclDPj3FGraTlctA%2BWSeBcNxurcenxWAdAK%2FTgOaq0dd3egsBYBEPMi66hbh3ctxTUshMiqC%2FP89przKcgn2pyunmrZcrVIapHfuutYxtGSi2s2LlQpICsNNhdCYWlyCMlDf%2Fix8VPFCo1IGJerDa7GhSDFnqyqvtKLjaFNTHnlwdWmK0DClDJSCTLlhTNj762YJa1xN4ORqc8Sei0Y7QEo5H9Zlk8MoNKBSbdLi6ymLep76yL5nc39aVuDOpMhGC60Y9Vp1029sHwnfk9q5IG7FBc48D0ktCmoqHdpngS0eEgWTtUL0m%2BegTveEiJ6cDJUcOWGYSD9hL6ctJ8wutFPQc0vcAiPn2TCB19USqIUmWGOWYWD%2BRgq4YeKeiV3N8cLpdsgWAASfL0h8EGL66t3qsrQ4zqrCLvaWKjfgbEaNpk6UfCvAsbH2mvce4s9JnGDoiJXTVvxqIsWGDvSb3kGICpF5lq1X%2BbrGE6GxXZ6H1UPyEqXBRlKy75j5VRhJDMKpeWosezd8T0plt2p5BCkMtr9UQDaUh14TVStj9mIzdzr%2FsJFI1qI03RBcwVy6hRwjjR0NA4ySUSS%2FiOaMLyHrMMGOqUBWsKVDdfOD0JE0n4F0gayHoIE4K70HnhqDA5Z61g2mwegWgseheEZkA2EX%2BIO%2FgC9n4GgvKScg3xUyR2l6ywgUFho5jnQW7exXFpjp%2Bj5oSzxyk1zb3gk6jNeBs%2FFiNUE5rC4OlXocnyXOgaAqLB4Q6CBgRPIQrc%2BYswJ8sCAnImJoOGBYi%2Fp0VV%2BWSMNVbK7jPubGapATnEIsc%2Bw8WguddaOCVTN&X-Amz-Signature=01433e8ef087814c1f5483efe0cd2fe36388c285e0e7bc54275d2f13cf58167f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NS6OS6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCH5UxpzEqRjoAp1ROBCGIdPnNyaZuWehD17HaG9ZR5pAIgblJ3uc94ifzmCWZhSbkA80C8FVvqME4ccqq0ba3vlfAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAqCAY7l1KTSG9ww%2BSrcAzkZMFItsglIeC6E7B3yxoTp75mYMd1N6WpkoTuN1EclDPj3FGraTlctA%2BWSeBcNxurcenxWAdAK%2FTgOaq0dd3egsBYBEPMi66hbh3ctxTUshMiqC%2FP89przKcgn2pyunmrZcrVIapHfuutYxtGSi2s2LlQpICsNNhdCYWlyCMlDf%2Fix8VPFCo1IGJerDa7GhSDFnqyqvtKLjaFNTHnlwdWmK0DClDJSCTLlhTNj762YJa1xN4ORqc8Sei0Y7QEo5H9Zlk8MoNKBSbdLi6ymLep76yL5nc39aVuDOpMhGC60Y9Vp1029sHwnfk9q5IG7FBc48D0ktCmoqHdpngS0eEgWTtUL0m%2BegTveEiJ6cDJUcOWGYSD9hL6ctJ8wutFPQc0vcAiPn2TCB19USqIUmWGOWYWD%2BRgq4YeKeiV3N8cLpdsgWAASfL0h8EGL66t3qsrQ4zqrCLvaWKjfgbEaNpk6UfCvAsbH2mvce4s9JnGDoiJXTVvxqIsWGDvSb3kGICpF5lq1X%2BbrGE6GxXZ6H1UPyEqXBRlKy75j5VRhJDMKpeWosezd8T0plt2p5BCkMtr9UQDaUh14TVStj9mIzdzr%2FsJFI1qI03RBcwVy6hRwjjR0NA4ySUSS%2FiOaMLyHrMMGOqUBWsKVDdfOD0JE0n4F0gayHoIE4K70HnhqDA5Z61g2mwegWgseheEZkA2EX%2BIO%2FgC9n4GgvKScg3xUyR2l6ywgUFho5jnQW7exXFpjp%2Bj5oSzxyk1zb3gk6jNeBs%2FFiNUE5rC4OlXocnyXOgaAqLB4Q6CBgRPIQrc%2BYswJ8sCAnImJoOGBYi%2Fp0VV%2BWSMNVbK7jPubGapATnEIsc%2Bw8WguddaOCVTN&X-Amz-Signature=1dcd5fdba212bd4aba6b4570e642094c013c782eceb897c47b7014bd0d370802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NS6OS6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCH5UxpzEqRjoAp1ROBCGIdPnNyaZuWehD17HaG9ZR5pAIgblJ3uc94ifzmCWZhSbkA80C8FVvqME4ccqq0ba3vlfAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAqCAY7l1KTSG9ww%2BSrcAzkZMFItsglIeC6E7B3yxoTp75mYMd1N6WpkoTuN1EclDPj3FGraTlctA%2BWSeBcNxurcenxWAdAK%2FTgOaq0dd3egsBYBEPMi66hbh3ctxTUshMiqC%2FP89przKcgn2pyunmrZcrVIapHfuutYxtGSi2s2LlQpICsNNhdCYWlyCMlDf%2Fix8VPFCo1IGJerDa7GhSDFnqyqvtKLjaFNTHnlwdWmK0DClDJSCTLlhTNj762YJa1xN4ORqc8Sei0Y7QEo5H9Zlk8MoNKBSbdLi6ymLep76yL5nc39aVuDOpMhGC60Y9Vp1029sHwnfk9q5IG7FBc48D0ktCmoqHdpngS0eEgWTtUL0m%2BegTveEiJ6cDJUcOWGYSD9hL6ctJ8wutFPQc0vcAiPn2TCB19USqIUmWGOWYWD%2BRgq4YeKeiV3N8cLpdsgWAASfL0h8EGL66t3qsrQ4zqrCLvaWKjfgbEaNpk6UfCvAsbH2mvce4s9JnGDoiJXTVvxqIsWGDvSb3kGICpF5lq1X%2BbrGE6GxXZ6H1UPyEqXBRlKy75j5VRhJDMKpeWosezd8T0plt2p5BCkMtr9UQDaUh14TVStj9mIzdzr%2FsJFI1qI03RBcwVy6hRwjjR0NA4ySUSS%2FiOaMLyHrMMGOqUBWsKVDdfOD0JE0n4F0gayHoIE4K70HnhqDA5Z61g2mwegWgseheEZkA2EX%2BIO%2FgC9n4GgvKScg3xUyR2l6ywgUFho5jnQW7exXFpjp%2Bj5oSzxyk1zb3gk6jNeBs%2FFiNUE5rC4OlXocnyXOgaAqLB4Q6CBgRPIQrc%2BYswJ8sCAnImJoOGBYi%2Fp0VV%2BWSMNVbK7jPubGapATnEIsc%2Bw8WguddaOCVTN&X-Amz-Signature=980114a507fe566df288622c0b817d0a78dae7357ce982aba922f9dcf097d43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
