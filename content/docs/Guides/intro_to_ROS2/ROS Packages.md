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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBZKYQ3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHiYRHzERddGnEDZjhPM3hA0EZHdizLY6fDEO1uwD1pNAiBZR4M4vDWsj1YLRcZFZ%2B59NQ%2FIyYFbecTkdTRMnMwFDCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM1gLT9e4FG66A5u%2BkKtwDvaJ%2Fm%2FldNUsu3ZzD3a2vvrahukLEB4%2BOWB17zK85a1rx3Qm8DGA%2FFD63AvuobghBRivKDYGwGr91P4KcUi40aldR2k%2Brjxa10Ly680lK7cx%2BslW2dLaHnDUUde8LZYUDcJFz1pQIMSrEZFqj7vONQs%2FSF9brDx6Za0v%2BN4ZtudwlzCIsH%2Fd07fcLCM29xye5agJP6axiRploJF6jvniU8OGus%2BVBbTvzfjYdrWipcbvHhZm%2B7VxGLGqi1RuJXND6iGTCkhoKdocOLnB6x9biLbNF8NoeZSGPBNyrl2Obke38TkSpKCZ1u%2BOPWGks115kRaLcsEIsf58ige6hIui4LpeTbWAcmoGNcXGSYcjDgTwJ9cDlne%2Bdsi5zt9YuScDi8dR9nkTm0rvgkA4srSHElPvCls9UTMmY7nrW%2F5Bt04WsABYSgzG7XAEI7%2Fs3Zk8zpYlEyunWAHoi2I%2F1R3kvCOj9m6%2BhdmMcHt1Tf%2BwtSa7ibRiR10wzOE%2FVyfcbizpTAMoGX21UC8gmiAasghkIBf2uvRRWKJSgNnmiNX6fhPRHjw0cIl1dF%2BN20oZpJAi00H3IXfOjzYhL2FPg3iBTfB4o4GBjM8mc%2BIwLBXvqq8T9snHI4jYPWJv9MO0wpI6iwwY6pgH2ixWSM2PoKW8Hra4JcYKTItX%2FrtsJop2oRde9ys2Ks7h4oyGmFQ2h5djfaF0CObdr71irF%2Bd3D4K%2FULjRnt05DG1Al43mQVw%2FZr1dAIo7fc4F9rOun7B5wAbR9Uw91bjI7HLHViAlFZjHz6vhyDBAeFsKXGLQVGD7JljubKbjt2wvns28XtYZm4UgusAZYi7fgqgMjXEDM7hOqjlkE365B9yd53w%2F&X-Amz-Signature=9ba0778d48d67a9b2f2c031fe463d250b8db9572df3fe1c2ab0aa74fb0e31712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBZKYQ3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHiYRHzERddGnEDZjhPM3hA0EZHdizLY6fDEO1uwD1pNAiBZR4M4vDWsj1YLRcZFZ%2B59NQ%2FIyYFbecTkdTRMnMwFDCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM1gLT9e4FG66A5u%2BkKtwDvaJ%2Fm%2FldNUsu3ZzD3a2vvrahukLEB4%2BOWB17zK85a1rx3Qm8DGA%2FFD63AvuobghBRivKDYGwGr91P4KcUi40aldR2k%2Brjxa10Ly680lK7cx%2BslW2dLaHnDUUde8LZYUDcJFz1pQIMSrEZFqj7vONQs%2FSF9brDx6Za0v%2BN4ZtudwlzCIsH%2Fd07fcLCM29xye5agJP6axiRploJF6jvniU8OGus%2BVBbTvzfjYdrWipcbvHhZm%2B7VxGLGqi1RuJXND6iGTCkhoKdocOLnB6x9biLbNF8NoeZSGPBNyrl2Obke38TkSpKCZ1u%2BOPWGks115kRaLcsEIsf58ige6hIui4LpeTbWAcmoGNcXGSYcjDgTwJ9cDlne%2Bdsi5zt9YuScDi8dR9nkTm0rvgkA4srSHElPvCls9UTMmY7nrW%2F5Bt04WsABYSgzG7XAEI7%2Fs3Zk8zpYlEyunWAHoi2I%2F1R3kvCOj9m6%2BhdmMcHt1Tf%2BwtSa7ibRiR10wzOE%2FVyfcbizpTAMoGX21UC8gmiAasghkIBf2uvRRWKJSgNnmiNX6fhPRHjw0cIl1dF%2BN20oZpJAi00H3IXfOjzYhL2FPg3iBTfB4o4GBjM8mc%2BIwLBXvqq8T9snHI4jYPWJv9MO0wpI6iwwY6pgH2ixWSM2PoKW8Hra4JcYKTItX%2FrtsJop2oRde9ys2Ks7h4oyGmFQ2h5djfaF0CObdr71irF%2Bd3D4K%2FULjRnt05DG1Al43mQVw%2FZr1dAIo7fc4F9rOun7B5wAbR9Uw91bjI7HLHViAlFZjHz6vhyDBAeFsKXGLQVGD7JljubKbjt2wvns28XtYZm4UgusAZYi7fgqgMjXEDM7hOqjlkE365B9yd53w%2F&X-Amz-Signature=5dc2b1acbfd0f7f2aad07c56985f1952a2ff2ab378e14fe3d75daf5839ea3a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBZKYQ3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHiYRHzERddGnEDZjhPM3hA0EZHdizLY6fDEO1uwD1pNAiBZR4M4vDWsj1YLRcZFZ%2B59NQ%2FIyYFbecTkdTRMnMwFDCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM1gLT9e4FG66A5u%2BkKtwDvaJ%2Fm%2FldNUsu3ZzD3a2vvrahukLEB4%2BOWB17zK85a1rx3Qm8DGA%2FFD63AvuobghBRivKDYGwGr91P4KcUi40aldR2k%2Brjxa10Ly680lK7cx%2BslW2dLaHnDUUde8LZYUDcJFz1pQIMSrEZFqj7vONQs%2FSF9brDx6Za0v%2BN4ZtudwlzCIsH%2Fd07fcLCM29xye5agJP6axiRploJF6jvniU8OGus%2BVBbTvzfjYdrWipcbvHhZm%2B7VxGLGqi1RuJXND6iGTCkhoKdocOLnB6x9biLbNF8NoeZSGPBNyrl2Obke38TkSpKCZ1u%2BOPWGks115kRaLcsEIsf58ige6hIui4LpeTbWAcmoGNcXGSYcjDgTwJ9cDlne%2Bdsi5zt9YuScDi8dR9nkTm0rvgkA4srSHElPvCls9UTMmY7nrW%2F5Bt04WsABYSgzG7XAEI7%2Fs3Zk8zpYlEyunWAHoi2I%2F1R3kvCOj9m6%2BhdmMcHt1Tf%2BwtSa7ibRiR10wzOE%2FVyfcbizpTAMoGX21UC8gmiAasghkIBf2uvRRWKJSgNnmiNX6fhPRHjw0cIl1dF%2BN20oZpJAi00H3IXfOjzYhL2FPg3iBTfB4o4GBjM8mc%2BIwLBXvqq8T9snHI4jYPWJv9MO0wpI6iwwY6pgH2ixWSM2PoKW8Hra4JcYKTItX%2FrtsJop2oRde9ys2Ks7h4oyGmFQ2h5djfaF0CObdr71irF%2Bd3D4K%2FULjRnt05DG1Al43mQVw%2FZr1dAIo7fc4F9rOun7B5wAbR9Uw91bjI7HLHViAlFZjHz6vhyDBAeFsKXGLQVGD7JljubKbjt2wvns28XtYZm4UgusAZYi7fgqgMjXEDM7hOqjlkE365B9yd53w%2F&X-Amz-Signature=e705faee49e47293cca7f34f902763ddb1a6a95a3fb1ca3480c2da898eaf09a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBZKYQ3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHiYRHzERddGnEDZjhPM3hA0EZHdizLY6fDEO1uwD1pNAiBZR4M4vDWsj1YLRcZFZ%2B59NQ%2FIyYFbecTkdTRMnMwFDCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM1gLT9e4FG66A5u%2BkKtwDvaJ%2Fm%2FldNUsu3ZzD3a2vvrahukLEB4%2BOWB17zK85a1rx3Qm8DGA%2FFD63AvuobghBRivKDYGwGr91P4KcUi40aldR2k%2Brjxa10Ly680lK7cx%2BslW2dLaHnDUUde8LZYUDcJFz1pQIMSrEZFqj7vONQs%2FSF9brDx6Za0v%2BN4ZtudwlzCIsH%2Fd07fcLCM29xye5agJP6axiRploJF6jvniU8OGus%2BVBbTvzfjYdrWipcbvHhZm%2B7VxGLGqi1RuJXND6iGTCkhoKdocOLnB6x9biLbNF8NoeZSGPBNyrl2Obke38TkSpKCZ1u%2BOPWGks115kRaLcsEIsf58ige6hIui4LpeTbWAcmoGNcXGSYcjDgTwJ9cDlne%2Bdsi5zt9YuScDi8dR9nkTm0rvgkA4srSHElPvCls9UTMmY7nrW%2F5Bt04WsABYSgzG7XAEI7%2Fs3Zk8zpYlEyunWAHoi2I%2F1R3kvCOj9m6%2BhdmMcHt1Tf%2BwtSa7ibRiR10wzOE%2FVyfcbizpTAMoGX21UC8gmiAasghkIBf2uvRRWKJSgNnmiNX6fhPRHjw0cIl1dF%2BN20oZpJAi00H3IXfOjzYhL2FPg3iBTfB4o4GBjM8mc%2BIwLBXvqq8T9snHI4jYPWJv9MO0wpI6iwwY6pgH2ixWSM2PoKW8Hra4JcYKTItX%2FrtsJop2oRde9ys2Ks7h4oyGmFQ2h5djfaF0CObdr71irF%2Bd3D4K%2FULjRnt05DG1Al43mQVw%2FZr1dAIo7fc4F9rOun7B5wAbR9Uw91bjI7HLHViAlFZjHz6vhyDBAeFsKXGLQVGD7JljubKbjt2wvns28XtYZm4UgusAZYi7fgqgMjXEDM7hOqjlkE365B9yd53w%2F&X-Amz-Signature=b359e742311bbf26b40a6ebc464b0372503ccba58767ad175a043b141412679e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBZKYQ3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHiYRHzERddGnEDZjhPM3hA0EZHdizLY6fDEO1uwD1pNAiBZR4M4vDWsj1YLRcZFZ%2B59NQ%2FIyYFbecTkdTRMnMwFDCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM1gLT9e4FG66A5u%2BkKtwDvaJ%2Fm%2FldNUsu3ZzD3a2vvrahukLEB4%2BOWB17zK85a1rx3Qm8DGA%2FFD63AvuobghBRivKDYGwGr91P4KcUi40aldR2k%2Brjxa10Ly680lK7cx%2BslW2dLaHnDUUde8LZYUDcJFz1pQIMSrEZFqj7vONQs%2FSF9brDx6Za0v%2BN4ZtudwlzCIsH%2Fd07fcLCM29xye5agJP6axiRploJF6jvniU8OGus%2BVBbTvzfjYdrWipcbvHhZm%2B7VxGLGqi1RuJXND6iGTCkhoKdocOLnB6x9biLbNF8NoeZSGPBNyrl2Obke38TkSpKCZ1u%2BOPWGks115kRaLcsEIsf58ige6hIui4LpeTbWAcmoGNcXGSYcjDgTwJ9cDlne%2Bdsi5zt9YuScDi8dR9nkTm0rvgkA4srSHElPvCls9UTMmY7nrW%2F5Bt04WsABYSgzG7XAEI7%2Fs3Zk8zpYlEyunWAHoi2I%2F1R3kvCOj9m6%2BhdmMcHt1Tf%2BwtSa7ibRiR10wzOE%2FVyfcbizpTAMoGX21UC8gmiAasghkIBf2uvRRWKJSgNnmiNX6fhPRHjw0cIl1dF%2BN20oZpJAi00H3IXfOjzYhL2FPg3iBTfB4o4GBjM8mc%2BIwLBXvqq8T9snHI4jYPWJv9MO0wpI6iwwY6pgH2ixWSM2PoKW8Hra4JcYKTItX%2FrtsJop2oRde9ys2Ks7h4oyGmFQ2h5djfaF0CObdr71irF%2Bd3D4K%2FULjRnt05DG1Al43mQVw%2FZr1dAIo7fc4F9rOun7B5wAbR9Uw91bjI7HLHViAlFZjHz6vhyDBAeFsKXGLQVGD7JljubKbjt2wvns28XtYZm4UgusAZYi7fgqgMjXEDM7hOqjlkE365B9yd53w%2F&X-Amz-Signature=d91a7ac4a0a458224d87489aac7baf748cd2d5e632d4fe3c423ade966fa07dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBZKYQ3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHiYRHzERddGnEDZjhPM3hA0EZHdizLY6fDEO1uwD1pNAiBZR4M4vDWsj1YLRcZFZ%2B59NQ%2FIyYFbecTkdTRMnMwFDCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM1gLT9e4FG66A5u%2BkKtwDvaJ%2Fm%2FldNUsu3ZzD3a2vvrahukLEB4%2BOWB17zK85a1rx3Qm8DGA%2FFD63AvuobghBRivKDYGwGr91P4KcUi40aldR2k%2Brjxa10Ly680lK7cx%2BslW2dLaHnDUUde8LZYUDcJFz1pQIMSrEZFqj7vONQs%2FSF9brDx6Za0v%2BN4ZtudwlzCIsH%2Fd07fcLCM29xye5agJP6axiRploJF6jvniU8OGus%2BVBbTvzfjYdrWipcbvHhZm%2B7VxGLGqi1RuJXND6iGTCkhoKdocOLnB6x9biLbNF8NoeZSGPBNyrl2Obke38TkSpKCZ1u%2BOPWGks115kRaLcsEIsf58ige6hIui4LpeTbWAcmoGNcXGSYcjDgTwJ9cDlne%2Bdsi5zt9YuScDi8dR9nkTm0rvgkA4srSHElPvCls9UTMmY7nrW%2F5Bt04WsABYSgzG7XAEI7%2Fs3Zk8zpYlEyunWAHoi2I%2F1R3kvCOj9m6%2BhdmMcHt1Tf%2BwtSa7ibRiR10wzOE%2FVyfcbizpTAMoGX21UC8gmiAasghkIBf2uvRRWKJSgNnmiNX6fhPRHjw0cIl1dF%2BN20oZpJAi00H3IXfOjzYhL2FPg3iBTfB4o4GBjM8mc%2BIwLBXvqq8T9snHI4jYPWJv9MO0wpI6iwwY6pgH2ixWSM2PoKW8Hra4JcYKTItX%2FrtsJop2oRde9ys2Ks7h4oyGmFQ2h5djfaF0CObdr71irF%2Bd3D4K%2FULjRnt05DG1Al43mQVw%2FZr1dAIo7fc4F9rOun7B5wAbR9Uw91bjI7HLHViAlFZjHz6vhyDBAeFsKXGLQVGD7JljubKbjt2wvns28XtYZm4UgusAZYi7fgqgMjXEDM7hOqjlkE365B9yd53w%2F&X-Amz-Signature=8bc95985ea4a4fc3a4f12e82ec06deb27a84bc9a84cecec636512265d746c4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBZKYQ3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHiYRHzERddGnEDZjhPM3hA0EZHdizLY6fDEO1uwD1pNAiBZR4M4vDWsj1YLRcZFZ%2B59NQ%2FIyYFbecTkdTRMnMwFDCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM1gLT9e4FG66A5u%2BkKtwDvaJ%2Fm%2FldNUsu3ZzD3a2vvrahukLEB4%2BOWB17zK85a1rx3Qm8DGA%2FFD63AvuobghBRivKDYGwGr91P4KcUi40aldR2k%2Brjxa10Ly680lK7cx%2BslW2dLaHnDUUde8LZYUDcJFz1pQIMSrEZFqj7vONQs%2FSF9brDx6Za0v%2BN4ZtudwlzCIsH%2Fd07fcLCM29xye5agJP6axiRploJF6jvniU8OGus%2BVBbTvzfjYdrWipcbvHhZm%2B7VxGLGqi1RuJXND6iGTCkhoKdocOLnB6x9biLbNF8NoeZSGPBNyrl2Obke38TkSpKCZ1u%2BOPWGks115kRaLcsEIsf58ige6hIui4LpeTbWAcmoGNcXGSYcjDgTwJ9cDlne%2Bdsi5zt9YuScDi8dR9nkTm0rvgkA4srSHElPvCls9UTMmY7nrW%2F5Bt04WsABYSgzG7XAEI7%2Fs3Zk8zpYlEyunWAHoi2I%2F1R3kvCOj9m6%2BhdmMcHt1Tf%2BwtSa7ibRiR10wzOE%2FVyfcbizpTAMoGX21UC8gmiAasghkIBf2uvRRWKJSgNnmiNX6fhPRHjw0cIl1dF%2BN20oZpJAi00H3IXfOjzYhL2FPg3iBTfB4o4GBjM8mc%2BIwLBXvqq8T9snHI4jYPWJv9MO0wpI6iwwY6pgH2ixWSM2PoKW8Hra4JcYKTItX%2FrtsJop2oRde9ys2Ks7h4oyGmFQ2h5djfaF0CObdr71irF%2Bd3D4K%2FULjRnt05DG1Al43mQVw%2FZr1dAIo7fc4F9rOun7B5wAbR9Uw91bjI7HLHViAlFZjHz6vhyDBAeFsKXGLQVGD7JljubKbjt2wvns28XtYZm4UgusAZYi7fgqgMjXEDM7hOqjlkE365B9yd53w%2F&X-Amz-Signature=7ddb3acb9ae1152b7b989f4e199693cd6adf68a79b59f12adcc7a65972f847f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
