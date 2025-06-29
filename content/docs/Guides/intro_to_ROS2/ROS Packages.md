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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5JZ4UJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGril55GH%2BE2iHGJSZzGBsvb7aft08iRVOOrFex%2F09%2FgIhAOAFVynXDBfGpswO3GG6hgUTp8mG7fG%2BtsEQsd0a9VtLKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMhtOgRwWJnop3hMcq3APEjdNbC1e7Tt%2BAqb7ILeS%2BB0M5sryErFXJJT842Afy2yHNcHAay7pZFKL81Ftw6FjBoZ9bXKV5AihFMzLSUT1NL3dP0b4XWmcrypIVyKyQxjo1t24E%2FJGh2qB1Ke8KcxV8ZC8KaJUUQVZrVEqip0x%2FS17s%2FBWts3Ffqv3Z%2FmvgKk7sg1Bm8524V4SXazt4nnRzu0x2FmLnfxSQrpWPAteFezGV9Oq2M8WkN6tYifos06h39jqohQoR2ngHMrjVF4ZBVqAwkA0nW%2B%2FIiSkhxofLVe%2BfEPnA9NF5fF6z%2BFjI%2Bvacs97gQGd%2FJsYN7gZx%2FhT8kDlZNhS3%2FXl3CAuVfmOZIa%2BEs%2FUqV3IPcBWF87%2Bnt2Q3G%2BnOJpbtmXJwaHQBC%2BoVmUNVs46kIVJfmHlVUKFo3EBvRtpORrQkFrfwuS%2B2Dm8fw2hjjkf6VqG22ZTewWcL4Ri8SdezZkqC3AEfF99OoFsD6ZxRBuy1DLSrBIdGy65Kg8kp02MKnwLCo3Rb%2BShb%2Fo02VreRd4%2FIA2Nr4gJE1wcEBSdqWzd6HduFGsv1HltGg01%2FvLcZp%2Fwp27SSVqtkvqshEMKxjl7ODygb9cv%2BE1kQ9e26WtXwLNM3zpTbrs8%2BDUe9lEv2JZa25zDuh4XDBjqkAaXzea92hYjPyd5ikTFWUDoj0f2voVdMVwkGk2yM%2FdORWJIP%2BCvtCMhLtNtvIRGci8YpQDIKz4SAcYVfC550%2BnPg4LvhbzZUY6FG916OHemDGTnoYlyPGAi1sxEN3uxPQNhyVjojaWW6CE82V%2B%2BQfhhE0DtBcX1Y4llYqCHdU2QMbgWn1m%2Fz4lvVXojpm6ytAiudgyWkwHG9t2%2BH4UxBW2Ht%2FzTM&X-Amz-Signature=bd26a32b6fbd1fcba1d9c568e4c06ea6d47cd82e329c89573ba1174d3a80de73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5JZ4UJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGril55GH%2BE2iHGJSZzGBsvb7aft08iRVOOrFex%2F09%2FgIhAOAFVynXDBfGpswO3GG6hgUTp8mG7fG%2BtsEQsd0a9VtLKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMhtOgRwWJnop3hMcq3APEjdNbC1e7Tt%2BAqb7ILeS%2BB0M5sryErFXJJT842Afy2yHNcHAay7pZFKL81Ftw6FjBoZ9bXKV5AihFMzLSUT1NL3dP0b4XWmcrypIVyKyQxjo1t24E%2FJGh2qB1Ke8KcxV8ZC8KaJUUQVZrVEqip0x%2FS17s%2FBWts3Ffqv3Z%2FmvgKk7sg1Bm8524V4SXazt4nnRzu0x2FmLnfxSQrpWPAteFezGV9Oq2M8WkN6tYifos06h39jqohQoR2ngHMrjVF4ZBVqAwkA0nW%2B%2FIiSkhxofLVe%2BfEPnA9NF5fF6z%2BFjI%2Bvacs97gQGd%2FJsYN7gZx%2FhT8kDlZNhS3%2FXl3CAuVfmOZIa%2BEs%2FUqV3IPcBWF87%2Bnt2Q3G%2BnOJpbtmXJwaHQBC%2BoVmUNVs46kIVJfmHlVUKFo3EBvRtpORrQkFrfwuS%2B2Dm8fw2hjjkf6VqG22ZTewWcL4Ri8SdezZkqC3AEfF99OoFsD6ZxRBuy1DLSrBIdGy65Kg8kp02MKnwLCo3Rb%2BShb%2Fo02VreRd4%2FIA2Nr4gJE1wcEBSdqWzd6HduFGsv1HltGg01%2FvLcZp%2Fwp27SSVqtkvqshEMKxjl7ODygb9cv%2BE1kQ9e26WtXwLNM3zpTbrs8%2BDUe9lEv2JZa25zDuh4XDBjqkAaXzea92hYjPyd5ikTFWUDoj0f2voVdMVwkGk2yM%2FdORWJIP%2BCvtCMhLtNtvIRGci8YpQDIKz4SAcYVfC550%2BnPg4LvhbzZUY6FG916OHemDGTnoYlyPGAi1sxEN3uxPQNhyVjojaWW6CE82V%2B%2BQfhhE0DtBcX1Y4llYqCHdU2QMbgWn1m%2Fz4lvVXojpm6ytAiudgyWkwHG9t2%2BH4UxBW2Ht%2FzTM&X-Amz-Signature=e0851aebd908695decac03c8c1d7dbf0ea576d21936c05907c60751dbd39da41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5JZ4UJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGril55GH%2BE2iHGJSZzGBsvb7aft08iRVOOrFex%2F09%2FgIhAOAFVynXDBfGpswO3GG6hgUTp8mG7fG%2BtsEQsd0a9VtLKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMhtOgRwWJnop3hMcq3APEjdNbC1e7Tt%2BAqb7ILeS%2BB0M5sryErFXJJT842Afy2yHNcHAay7pZFKL81Ftw6FjBoZ9bXKV5AihFMzLSUT1NL3dP0b4XWmcrypIVyKyQxjo1t24E%2FJGh2qB1Ke8KcxV8ZC8KaJUUQVZrVEqip0x%2FS17s%2FBWts3Ffqv3Z%2FmvgKk7sg1Bm8524V4SXazt4nnRzu0x2FmLnfxSQrpWPAteFezGV9Oq2M8WkN6tYifos06h39jqohQoR2ngHMrjVF4ZBVqAwkA0nW%2B%2FIiSkhxofLVe%2BfEPnA9NF5fF6z%2BFjI%2Bvacs97gQGd%2FJsYN7gZx%2FhT8kDlZNhS3%2FXl3CAuVfmOZIa%2BEs%2FUqV3IPcBWF87%2Bnt2Q3G%2BnOJpbtmXJwaHQBC%2BoVmUNVs46kIVJfmHlVUKFo3EBvRtpORrQkFrfwuS%2B2Dm8fw2hjjkf6VqG22ZTewWcL4Ri8SdezZkqC3AEfF99OoFsD6ZxRBuy1DLSrBIdGy65Kg8kp02MKnwLCo3Rb%2BShb%2Fo02VreRd4%2FIA2Nr4gJE1wcEBSdqWzd6HduFGsv1HltGg01%2FvLcZp%2Fwp27SSVqtkvqshEMKxjl7ODygb9cv%2BE1kQ9e26WtXwLNM3zpTbrs8%2BDUe9lEv2JZa25zDuh4XDBjqkAaXzea92hYjPyd5ikTFWUDoj0f2voVdMVwkGk2yM%2FdORWJIP%2BCvtCMhLtNtvIRGci8YpQDIKz4SAcYVfC550%2BnPg4LvhbzZUY6FG916OHemDGTnoYlyPGAi1sxEN3uxPQNhyVjojaWW6CE82V%2B%2BQfhhE0DtBcX1Y4llYqCHdU2QMbgWn1m%2Fz4lvVXojpm6ytAiudgyWkwHG9t2%2BH4UxBW2Ht%2FzTM&X-Amz-Signature=e8dcb203ad152c5f7ed8fca2fdc266b02c90b3a8777af5df524d5c9f34a69867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5JZ4UJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGril55GH%2BE2iHGJSZzGBsvb7aft08iRVOOrFex%2F09%2FgIhAOAFVynXDBfGpswO3GG6hgUTp8mG7fG%2BtsEQsd0a9VtLKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMhtOgRwWJnop3hMcq3APEjdNbC1e7Tt%2BAqb7ILeS%2BB0M5sryErFXJJT842Afy2yHNcHAay7pZFKL81Ftw6FjBoZ9bXKV5AihFMzLSUT1NL3dP0b4XWmcrypIVyKyQxjo1t24E%2FJGh2qB1Ke8KcxV8ZC8KaJUUQVZrVEqip0x%2FS17s%2FBWts3Ffqv3Z%2FmvgKk7sg1Bm8524V4SXazt4nnRzu0x2FmLnfxSQrpWPAteFezGV9Oq2M8WkN6tYifos06h39jqohQoR2ngHMrjVF4ZBVqAwkA0nW%2B%2FIiSkhxofLVe%2BfEPnA9NF5fF6z%2BFjI%2Bvacs97gQGd%2FJsYN7gZx%2FhT8kDlZNhS3%2FXl3CAuVfmOZIa%2BEs%2FUqV3IPcBWF87%2Bnt2Q3G%2BnOJpbtmXJwaHQBC%2BoVmUNVs46kIVJfmHlVUKFo3EBvRtpORrQkFrfwuS%2B2Dm8fw2hjjkf6VqG22ZTewWcL4Ri8SdezZkqC3AEfF99OoFsD6ZxRBuy1DLSrBIdGy65Kg8kp02MKnwLCo3Rb%2BShb%2Fo02VreRd4%2FIA2Nr4gJE1wcEBSdqWzd6HduFGsv1HltGg01%2FvLcZp%2Fwp27SSVqtkvqshEMKxjl7ODygb9cv%2BE1kQ9e26WtXwLNM3zpTbrs8%2BDUe9lEv2JZa25zDuh4XDBjqkAaXzea92hYjPyd5ikTFWUDoj0f2voVdMVwkGk2yM%2FdORWJIP%2BCvtCMhLtNtvIRGci8YpQDIKz4SAcYVfC550%2BnPg4LvhbzZUY6FG916OHemDGTnoYlyPGAi1sxEN3uxPQNhyVjojaWW6CE82V%2B%2BQfhhE0DtBcX1Y4llYqCHdU2QMbgWn1m%2Fz4lvVXojpm6ytAiudgyWkwHG9t2%2BH4UxBW2Ht%2FzTM&X-Amz-Signature=9834a7e578310ad48a2717d558c96c8cb8e43fe0d4ed706467f37fe1f1344266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5JZ4UJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGril55GH%2BE2iHGJSZzGBsvb7aft08iRVOOrFex%2F09%2FgIhAOAFVynXDBfGpswO3GG6hgUTp8mG7fG%2BtsEQsd0a9VtLKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMhtOgRwWJnop3hMcq3APEjdNbC1e7Tt%2BAqb7ILeS%2BB0M5sryErFXJJT842Afy2yHNcHAay7pZFKL81Ftw6FjBoZ9bXKV5AihFMzLSUT1NL3dP0b4XWmcrypIVyKyQxjo1t24E%2FJGh2qB1Ke8KcxV8ZC8KaJUUQVZrVEqip0x%2FS17s%2FBWts3Ffqv3Z%2FmvgKk7sg1Bm8524V4SXazt4nnRzu0x2FmLnfxSQrpWPAteFezGV9Oq2M8WkN6tYifos06h39jqohQoR2ngHMrjVF4ZBVqAwkA0nW%2B%2FIiSkhxofLVe%2BfEPnA9NF5fF6z%2BFjI%2Bvacs97gQGd%2FJsYN7gZx%2FhT8kDlZNhS3%2FXl3CAuVfmOZIa%2BEs%2FUqV3IPcBWF87%2Bnt2Q3G%2BnOJpbtmXJwaHQBC%2BoVmUNVs46kIVJfmHlVUKFo3EBvRtpORrQkFrfwuS%2B2Dm8fw2hjjkf6VqG22ZTewWcL4Ri8SdezZkqC3AEfF99OoFsD6ZxRBuy1DLSrBIdGy65Kg8kp02MKnwLCo3Rb%2BShb%2Fo02VreRd4%2FIA2Nr4gJE1wcEBSdqWzd6HduFGsv1HltGg01%2FvLcZp%2Fwp27SSVqtkvqshEMKxjl7ODygb9cv%2BE1kQ9e26WtXwLNM3zpTbrs8%2BDUe9lEv2JZa25zDuh4XDBjqkAaXzea92hYjPyd5ikTFWUDoj0f2voVdMVwkGk2yM%2FdORWJIP%2BCvtCMhLtNtvIRGci8YpQDIKz4SAcYVfC550%2BnPg4LvhbzZUY6FG916OHemDGTnoYlyPGAi1sxEN3uxPQNhyVjojaWW6CE82V%2B%2BQfhhE0DtBcX1Y4llYqCHdU2QMbgWn1m%2Fz4lvVXojpm6ytAiudgyWkwHG9t2%2BH4UxBW2Ht%2FzTM&X-Amz-Signature=da17de617cd0d7a074fcb873fa72eff583678a4867b92a27564fbf1ddeaf3a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5JZ4UJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGril55GH%2BE2iHGJSZzGBsvb7aft08iRVOOrFex%2F09%2FgIhAOAFVynXDBfGpswO3GG6hgUTp8mG7fG%2BtsEQsd0a9VtLKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMhtOgRwWJnop3hMcq3APEjdNbC1e7Tt%2BAqb7ILeS%2BB0M5sryErFXJJT842Afy2yHNcHAay7pZFKL81Ftw6FjBoZ9bXKV5AihFMzLSUT1NL3dP0b4XWmcrypIVyKyQxjo1t24E%2FJGh2qB1Ke8KcxV8ZC8KaJUUQVZrVEqip0x%2FS17s%2FBWts3Ffqv3Z%2FmvgKk7sg1Bm8524V4SXazt4nnRzu0x2FmLnfxSQrpWPAteFezGV9Oq2M8WkN6tYifos06h39jqohQoR2ngHMrjVF4ZBVqAwkA0nW%2B%2FIiSkhxofLVe%2BfEPnA9NF5fF6z%2BFjI%2Bvacs97gQGd%2FJsYN7gZx%2FhT8kDlZNhS3%2FXl3CAuVfmOZIa%2BEs%2FUqV3IPcBWF87%2Bnt2Q3G%2BnOJpbtmXJwaHQBC%2BoVmUNVs46kIVJfmHlVUKFo3EBvRtpORrQkFrfwuS%2B2Dm8fw2hjjkf6VqG22ZTewWcL4Ri8SdezZkqC3AEfF99OoFsD6ZxRBuy1DLSrBIdGy65Kg8kp02MKnwLCo3Rb%2BShb%2Fo02VreRd4%2FIA2Nr4gJE1wcEBSdqWzd6HduFGsv1HltGg01%2FvLcZp%2Fwp27SSVqtkvqshEMKxjl7ODygb9cv%2BE1kQ9e26WtXwLNM3zpTbrs8%2BDUe9lEv2JZa25zDuh4XDBjqkAaXzea92hYjPyd5ikTFWUDoj0f2voVdMVwkGk2yM%2FdORWJIP%2BCvtCMhLtNtvIRGci8YpQDIKz4SAcYVfC550%2BnPg4LvhbzZUY6FG916OHemDGTnoYlyPGAi1sxEN3uxPQNhyVjojaWW6CE82V%2B%2BQfhhE0DtBcX1Y4llYqCHdU2QMbgWn1m%2Fz4lvVXojpm6ytAiudgyWkwHG9t2%2BH4UxBW2Ht%2FzTM&X-Amz-Signature=b8831fbeed81f1477c7580dfa4bfb2fbf726e445ec201206b7bbdd70b36a7a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5JZ4UJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGril55GH%2BE2iHGJSZzGBsvb7aft08iRVOOrFex%2F09%2FgIhAOAFVynXDBfGpswO3GG6hgUTp8mG7fG%2BtsEQsd0a9VtLKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMhtOgRwWJnop3hMcq3APEjdNbC1e7Tt%2BAqb7ILeS%2BB0M5sryErFXJJT842Afy2yHNcHAay7pZFKL81Ftw6FjBoZ9bXKV5AihFMzLSUT1NL3dP0b4XWmcrypIVyKyQxjo1t24E%2FJGh2qB1Ke8KcxV8ZC8KaJUUQVZrVEqip0x%2FS17s%2FBWts3Ffqv3Z%2FmvgKk7sg1Bm8524V4SXazt4nnRzu0x2FmLnfxSQrpWPAteFezGV9Oq2M8WkN6tYifos06h39jqohQoR2ngHMrjVF4ZBVqAwkA0nW%2B%2FIiSkhxofLVe%2BfEPnA9NF5fF6z%2BFjI%2Bvacs97gQGd%2FJsYN7gZx%2FhT8kDlZNhS3%2FXl3CAuVfmOZIa%2BEs%2FUqV3IPcBWF87%2Bnt2Q3G%2BnOJpbtmXJwaHQBC%2BoVmUNVs46kIVJfmHlVUKFo3EBvRtpORrQkFrfwuS%2B2Dm8fw2hjjkf6VqG22ZTewWcL4Ri8SdezZkqC3AEfF99OoFsD6ZxRBuy1DLSrBIdGy65Kg8kp02MKnwLCo3Rb%2BShb%2Fo02VreRd4%2FIA2Nr4gJE1wcEBSdqWzd6HduFGsv1HltGg01%2FvLcZp%2Fwp27SSVqtkvqshEMKxjl7ODygb9cv%2BE1kQ9e26WtXwLNM3zpTbrs8%2BDUe9lEv2JZa25zDuh4XDBjqkAaXzea92hYjPyd5ikTFWUDoj0f2voVdMVwkGk2yM%2FdORWJIP%2BCvtCMhLtNtvIRGci8YpQDIKz4SAcYVfC550%2BnPg4LvhbzZUY6FG916OHemDGTnoYlyPGAi1sxEN3uxPQNhyVjojaWW6CE82V%2B%2BQfhhE0DtBcX1Y4llYqCHdU2QMbgWn1m%2Fz4lvVXojpm6ytAiudgyWkwHG9t2%2BH4UxBW2Ht%2FzTM&X-Amz-Signature=a8ad801aed65b45acabf387c709ba39d5481a0d93200c2574f59a2d6011870b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
