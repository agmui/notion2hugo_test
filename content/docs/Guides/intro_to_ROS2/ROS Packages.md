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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5S2GET%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDig9wYimEkSYFlWdvHv2RNSkFFfPh7eF04CueLeCTLRwIhAJRFnCf65%2Bqy%2FhaS1z9D1%2Fb2iSjdQ8MjC4j%2Baj95%2BHEYKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrG%2FP3v8fN37rqhAq3AOSCCixSJzeRdB9kMne7JBpaSroQO8s%2F9M68Ej8v68Uj93GQpkCsFqxQtTGtNoqMhfro%2BY6xsYPqSN%2FVXpp0Yy32h6ZzxkwOlR2T6b4UPvOQLnU1Tt6eIH3XbePsLdniNXWv25myfuOxFJ1WPGW%2F7mZYM0msphNP9NhX6NWmJvxNrV3W0VS3DRdvYHEwszGqbv%2B8wHPus%2BkErQysW4Pai299O2wB5Zhy76OlJZtnaWeCEmhLiYP3uCAFJIKyZcHd%2BMwqWoWjdNclTuIVZTBeLJzCV%2FeV7USRpHyhEe5duJ6Gt%2BgldbUyvXDPNm3bvyaKJfe0msdCGfsMzoR14wxc3Xm0SAjXb4hdjpHexZ198bXs3iNdYTMXIg%2FFgLGZLmMSE%2FCVAYkfmqDXAKr4Cjgd%2FhY5po9zSdvoJoSWi3nwjQSe0H%2F2TQFy2W8Q1PaOixpKMHHZZEEYmB9HCkN3iLKQnHhCAMRNYRsNbZ8vZAVTZDimoyUXEWYrDwZ4z3TzOkH0YuCYS2XkGzQQyApUZ%2F7%2BGFn4VSKRAO%2B8yRBZzgipvw3WfdlztSEoJUvSpeaYUwCf%2FMX9Y%2F2vE77WA6lABNs0%2FEmDGre8lIDhQGFMcHKJn6pGovS%2BE6TEB735doQAjDGpJLABjqkAcZkQOclRiYd0wIMeqjDh7oaB1P9w7FtCTJKctMAT0yIuSHD3MwceTUt8CNHA6xVP0O%2FbQDRge2judt6YBGBC24rThoUlMDmld3KAmgh842L1Xe5CR%2FRYaLaI%2ByO7tsZisdC%2Fu%2BizqGQmJ3qTb0gPEJm5ddMc2eHgPHo1IMDpKyLyIxF3pLWtiLxyMM7bs0lsTe5F3hD9VW3lpQcx1Of%2BajLrVf3&X-Amz-Signature=9c952f8f3489b249f1e973ef3e99703af0241aa481b0b861ba01a9c6331d284c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5S2GET%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDig9wYimEkSYFlWdvHv2RNSkFFfPh7eF04CueLeCTLRwIhAJRFnCf65%2Bqy%2FhaS1z9D1%2Fb2iSjdQ8MjC4j%2Baj95%2BHEYKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrG%2FP3v8fN37rqhAq3AOSCCixSJzeRdB9kMne7JBpaSroQO8s%2F9M68Ej8v68Uj93GQpkCsFqxQtTGtNoqMhfro%2BY6xsYPqSN%2FVXpp0Yy32h6ZzxkwOlR2T6b4UPvOQLnU1Tt6eIH3XbePsLdniNXWv25myfuOxFJ1WPGW%2F7mZYM0msphNP9NhX6NWmJvxNrV3W0VS3DRdvYHEwszGqbv%2B8wHPus%2BkErQysW4Pai299O2wB5Zhy76OlJZtnaWeCEmhLiYP3uCAFJIKyZcHd%2BMwqWoWjdNclTuIVZTBeLJzCV%2FeV7USRpHyhEe5duJ6Gt%2BgldbUyvXDPNm3bvyaKJfe0msdCGfsMzoR14wxc3Xm0SAjXb4hdjpHexZ198bXs3iNdYTMXIg%2FFgLGZLmMSE%2FCVAYkfmqDXAKr4Cjgd%2FhY5po9zSdvoJoSWi3nwjQSe0H%2F2TQFy2W8Q1PaOixpKMHHZZEEYmB9HCkN3iLKQnHhCAMRNYRsNbZ8vZAVTZDimoyUXEWYrDwZ4z3TzOkH0YuCYS2XkGzQQyApUZ%2F7%2BGFn4VSKRAO%2B8yRBZzgipvw3WfdlztSEoJUvSpeaYUwCf%2FMX9Y%2F2vE77WA6lABNs0%2FEmDGre8lIDhQGFMcHKJn6pGovS%2BE6TEB735doQAjDGpJLABjqkAcZkQOclRiYd0wIMeqjDh7oaB1P9w7FtCTJKctMAT0yIuSHD3MwceTUt8CNHA6xVP0O%2FbQDRge2judt6YBGBC24rThoUlMDmld3KAmgh842L1Xe5CR%2FRYaLaI%2ByO7tsZisdC%2Fu%2BizqGQmJ3qTb0gPEJm5ddMc2eHgPHo1IMDpKyLyIxF3pLWtiLxyMM7bs0lsTe5F3hD9VW3lpQcx1Of%2BajLrVf3&X-Amz-Signature=32301b2ad6fff11a64ba5801f3a25e1e073f41465e444ddc1456262bab80aeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5S2GET%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDig9wYimEkSYFlWdvHv2RNSkFFfPh7eF04CueLeCTLRwIhAJRFnCf65%2Bqy%2FhaS1z9D1%2Fb2iSjdQ8MjC4j%2Baj95%2BHEYKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrG%2FP3v8fN37rqhAq3AOSCCixSJzeRdB9kMne7JBpaSroQO8s%2F9M68Ej8v68Uj93GQpkCsFqxQtTGtNoqMhfro%2BY6xsYPqSN%2FVXpp0Yy32h6ZzxkwOlR2T6b4UPvOQLnU1Tt6eIH3XbePsLdniNXWv25myfuOxFJ1WPGW%2F7mZYM0msphNP9NhX6NWmJvxNrV3W0VS3DRdvYHEwszGqbv%2B8wHPus%2BkErQysW4Pai299O2wB5Zhy76OlJZtnaWeCEmhLiYP3uCAFJIKyZcHd%2BMwqWoWjdNclTuIVZTBeLJzCV%2FeV7USRpHyhEe5duJ6Gt%2BgldbUyvXDPNm3bvyaKJfe0msdCGfsMzoR14wxc3Xm0SAjXb4hdjpHexZ198bXs3iNdYTMXIg%2FFgLGZLmMSE%2FCVAYkfmqDXAKr4Cjgd%2FhY5po9zSdvoJoSWi3nwjQSe0H%2F2TQFy2W8Q1PaOixpKMHHZZEEYmB9HCkN3iLKQnHhCAMRNYRsNbZ8vZAVTZDimoyUXEWYrDwZ4z3TzOkH0YuCYS2XkGzQQyApUZ%2F7%2BGFn4VSKRAO%2B8yRBZzgipvw3WfdlztSEoJUvSpeaYUwCf%2FMX9Y%2F2vE77WA6lABNs0%2FEmDGre8lIDhQGFMcHKJn6pGovS%2BE6TEB735doQAjDGpJLABjqkAcZkQOclRiYd0wIMeqjDh7oaB1P9w7FtCTJKctMAT0yIuSHD3MwceTUt8CNHA6xVP0O%2FbQDRge2judt6YBGBC24rThoUlMDmld3KAmgh842L1Xe5CR%2FRYaLaI%2ByO7tsZisdC%2Fu%2BizqGQmJ3qTb0gPEJm5ddMc2eHgPHo1IMDpKyLyIxF3pLWtiLxyMM7bs0lsTe5F3hD9VW3lpQcx1Of%2BajLrVf3&X-Amz-Signature=9a3687043ffdf27efb1f5817895f583e2e6115ef463328a9f829ef616ce75b07&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5S2GET%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDig9wYimEkSYFlWdvHv2RNSkFFfPh7eF04CueLeCTLRwIhAJRFnCf65%2Bqy%2FhaS1z9D1%2Fb2iSjdQ8MjC4j%2Baj95%2BHEYKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrG%2FP3v8fN37rqhAq3AOSCCixSJzeRdB9kMne7JBpaSroQO8s%2F9M68Ej8v68Uj93GQpkCsFqxQtTGtNoqMhfro%2BY6xsYPqSN%2FVXpp0Yy32h6ZzxkwOlR2T6b4UPvOQLnU1Tt6eIH3XbePsLdniNXWv25myfuOxFJ1WPGW%2F7mZYM0msphNP9NhX6NWmJvxNrV3W0VS3DRdvYHEwszGqbv%2B8wHPus%2BkErQysW4Pai299O2wB5Zhy76OlJZtnaWeCEmhLiYP3uCAFJIKyZcHd%2BMwqWoWjdNclTuIVZTBeLJzCV%2FeV7USRpHyhEe5duJ6Gt%2BgldbUyvXDPNm3bvyaKJfe0msdCGfsMzoR14wxc3Xm0SAjXb4hdjpHexZ198bXs3iNdYTMXIg%2FFgLGZLmMSE%2FCVAYkfmqDXAKr4Cjgd%2FhY5po9zSdvoJoSWi3nwjQSe0H%2F2TQFy2W8Q1PaOixpKMHHZZEEYmB9HCkN3iLKQnHhCAMRNYRsNbZ8vZAVTZDimoyUXEWYrDwZ4z3TzOkH0YuCYS2XkGzQQyApUZ%2F7%2BGFn4VSKRAO%2B8yRBZzgipvw3WfdlztSEoJUvSpeaYUwCf%2FMX9Y%2F2vE77WA6lABNs0%2FEmDGre8lIDhQGFMcHKJn6pGovS%2BE6TEB735doQAjDGpJLABjqkAcZkQOclRiYd0wIMeqjDh7oaB1P9w7FtCTJKctMAT0yIuSHD3MwceTUt8CNHA6xVP0O%2FbQDRge2judt6YBGBC24rThoUlMDmld3KAmgh842L1Xe5CR%2FRYaLaI%2ByO7tsZisdC%2Fu%2BizqGQmJ3qTb0gPEJm5ddMc2eHgPHo1IMDpKyLyIxF3pLWtiLxyMM7bs0lsTe5F3hD9VW3lpQcx1Of%2BajLrVf3&X-Amz-Signature=cfdc4c29dc1685954a2ddae66842315590ee724b1fdbc7c241b16fc245b33197&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5S2GET%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDig9wYimEkSYFlWdvHv2RNSkFFfPh7eF04CueLeCTLRwIhAJRFnCf65%2Bqy%2FhaS1z9D1%2Fb2iSjdQ8MjC4j%2Baj95%2BHEYKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrG%2FP3v8fN37rqhAq3AOSCCixSJzeRdB9kMne7JBpaSroQO8s%2F9M68Ej8v68Uj93GQpkCsFqxQtTGtNoqMhfro%2BY6xsYPqSN%2FVXpp0Yy32h6ZzxkwOlR2T6b4UPvOQLnU1Tt6eIH3XbePsLdniNXWv25myfuOxFJ1WPGW%2F7mZYM0msphNP9NhX6NWmJvxNrV3W0VS3DRdvYHEwszGqbv%2B8wHPus%2BkErQysW4Pai299O2wB5Zhy76OlJZtnaWeCEmhLiYP3uCAFJIKyZcHd%2BMwqWoWjdNclTuIVZTBeLJzCV%2FeV7USRpHyhEe5duJ6Gt%2BgldbUyvXDPNm3bvyaKJfe0msdCGfsMzoR14wxc3Xm0SAjXb4hdjpHexZ198bXs3iNdYTMXIg%2FFgLGZLmMSE%2FCVAYkfmqDXAKr4Cjgd%2FhY5po9zSdvoJoSWi3nwjQSe0H%2F2TQFy2W8Q1PaOixpKMHHZZEEYmB9HCkN3iLKQnHhCAMRNYRsNbZ8vZAVTZDimoyUXEWYrDwZ4z3TzOkH0YuCYS2XkGzQQyApUZ%2F7%2BGFn4VSKRAO%2B8yRBZzgipvw3WfdlztSEoJUvSpeaYUwCf%2FMX9Y%2F2vE77WA6lABNs0%2FEmDGre8lIDhQGFMcHKJn6pGovS%2BE6TEB735doQAjDGpJLABjqkAcZkQOclRiYd0wIMeqjDh7oaB1P9w7FtCTJKctMAT0yIuSHD3MwceTUt8CNHA6xVP0O%2FbQDRge2judt6YBGBC24rThoUlMDmld3KAmgh842L1Xe5CR%2FRYaLaI%2ByO7tsZisdC%2Fu%2BizqGQmJ3qTb0gPEJm5ddMc2eHgPHo1IMDpKyLyIxF3pLWtiLxyMM7bs0lsTe5F3hD9VW3lpQcx1Of%2BajLrVf3&X-Amz-Signature=d044a282ae15503704b10caf203f0b2fd07ba001b1ebd8a694b133ae562ebd3a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5S2GET%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDig9wYimEkSYFlWdvHv2RNSkFFfPh7eF04CueLeCTLRwIhAJRFnCf65%2Bqy%2FhaS1z9D1%2Fb2iSjdQ8MjC4j%2Baj95%2BHEYKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrG%2FP3v8fN37rqhAq3AOSCCixSJzeRdB9kMne7JBpaSroQO8s%2F9M68Ej8v68Uj93GQpkCsFqxQtTGtNoqMhfro%2BY6xsYPqSN%2FVXpp0Yy32h6ZzxkwOlR2T6b4UPvOQLnU1Tt6eIH3XbePsLdniNXWv25myfuOxFJ1WPGW%2F7mZYM0msphNP9NhX6NWmJvxNrV3W0VS3DRdvYHEwszGqbv%2B8wHPus%2BkErQysW4Pai299O2wB5Zhy76OlJZtnaWeCEmhLiYP3uCAFJIKyZcHd%2BMwqWoWjdNclTuIVZTBeLJzCV%2FeV7USRpHyhEe5duJ6Gt%2BgldbUyvXDPNm3bvyaKJfe0msdCGfsMzoR14wxc3Xm0SAjXb4hdjpHexZ198bXs3iNdYTMXIg%2FFgLGZLmMSE%2FCVAYkfmqDXAKr4Cjgd%2FhY5po9zSdvoJoSWi3nwjQSe0H%2F2TQFy2W8Q1PaOixpKMHHZZEEYmB9HCkN3iLKQnHhCAMRNYRsNbZ8vZAVTZDimoyUXEWYrDwZ4z3TzOkH0YuCYS2XkGzQQyApUZ%2F7%2BGFn4VSKRAO%2B8yRBZzgipvw3WfdlztSEoJUvSpeaYUwCf%2FMX9Y%2F2vE77WA6lABNs0%2FEmDGre8lIDhQGFMcHKJn6pGovS%2BE6TEB735doQAjDGpJLABjqkAcZkQOclRiYd0wIMeqjDh7oaB1P9w7FtCTJKctMAT0yIuSHD3MwceTUt8CNHA6xVP0O%2FbQDRge2judt6YBGBC24rThoUlMDmld3KAmgh842L1Xe5CR%2FRYaLaI%2ByO7tsZisdC%2Fu%2BizqGQmJ3qTb0gPEJm5ddMc2eHgPHo1IMDpKyLyIxF3pLWtiLxyMM7bs0lsTe5F3hD9VW3lpQcx1Of%2BajLrVf3&X-Amz-Signature=9ec5c3c7a34b2733f50c94ba5e8c743707bef8ef1e1b49ea534d3e913a17d7ab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5S2GET%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDig9wYimEkSYFlWdvHv2RNSkFFfPh7eF04CueLeCTLRwIhAJRFnCf65%2Bqy%2FhaS1z9D1%2Fb2iSjdQ8MjC4j%2Baj95%2BHEYKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrG%2FP3v8fN37rqhAq3AOSCCixSJzeRdB9kMne7JBpaSroQO8s%2F9M68Ej8v68Uj93GQpkCsFqxQtTGtNoqMhfro%2BY6xsYPqSN%2FVXpp0Yy32h6ZzxkwOlR2T6b4UPvOQLnU1Tt6eIH3XbePsLdniNXWv25myfuOxFJ1WPGW%2F7mZYM0msphNP9NhX6NWmJvxNrV3W0VS3DRdvYHEwszGqbv%2B8wHPus%2BkErQysW4Pai299O2wB5Zhy76OlJZtnaWeCEmhLiYP3uCAFJIKyZcHd%2BMwqWoWjdNclTuIVZTBeLJzCV%2FeV7USRpHyhEe5duJ6Gt%2BgldbUyvXDPNm3bvyaKJfe0msdCGfsMzoR14wxc3Xm0SAjXb4hdjpHexZ198bXs3iNdYTMXIg%2FFgLGZLmMSE%2FCVAYkfmqDXAKr4Cjgd%2FhY5po9zSdvoJoSWi3nwjQSe0H%2F2TQFy2W8Q1PaOixpKMHHZZEEYmB9HCkN3iLKQnHhCAMRNYRsNbZ8vZAVTZDimoyUXEWYrDwZ4z3TzOkH0YuCYS2XkGzQQyApUZ%2F7%2BGFn4VSKRAO%2B8yRBZzgipvw3WfdlztSEoJUvSpeaYUwCf%2FMX9Y%2F2vE77WA6lABNs0%2FEmDGre8lIDhQGFMcHKJn6pGovS%2BE6TEB735doQAjDGpJLABjqkAcZkQOclRiYd0wIMeqjDh7oaB1P9w7FtCTJKctMAT0yIuSHD3MwceTUt8CNHA6xVP0O%2FbQDRge2judt6YBGBC24rThoUlMDmld3KAmgh842L1Xe5CR%2FRYaLaI%2ByO7tsZisdC%2Fu%2BizqGQmJ3qTb0gPEJm5ddMc2eHgPHo1IMDpKyLyIxF3pLWtiLxyMM7bs0lsTe5F3hD9VW3lpQcx1Of%2BajLrVf3&X-Amz-Signature=acc0207fd30668de110922ff2b0e10d9c2732537fcfab8ba90689c70a6e9d5ab&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
