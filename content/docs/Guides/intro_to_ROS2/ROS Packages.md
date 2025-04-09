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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQOEIP3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCIIJIBv2XRFUSbIwg6Qv1MF6zOmymzKDbb%2F6TifhuKUQIhALJpLI8uwS3teFLvzPpjah1NqdKEPk7oDc%2BM64cL0jzEKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP24g0o03bEmrqx%2BYq3AOSJuRljerraOqBpuzlxsJhdDJavgnal3LRaR9M6vGiH88u5ilRBB3BBO4BVMLyTbg8a2Ct%2B5YWXmQFCOkmspMdM1qaYdU8SvieXeOaTiqNhw4SDNiBPXG6QCrpFKxFmZRUrEaSV%2Bh69zDYRdgNNKdjjgGg2EfgetCMjk8n7W8Qi59EWHzIB1dJ7UmnVjBNT3NYdtazZKaxthK9ztaa8iby2x5AyGrgQvTc3VuyiUo9GkbAve%2BI2VpsNNQ%2BvViGrT3q4D6hrTFRx6LETAc91%2BKj1E8oqZi3yOKMHR8vRggmQLqTH1fcfebpdkPMmDTrqaP0LaazQwni2%2Fr2pZkrmRG7bwGm%2BPGh%2Beq4kdqBDhIvevV6Gt4SVigxdCcCLXTqYy5OtUxUhNE%2F%2Fbzo0TbCik2ABSra%2F5imQ3pbbR5qyc0o6PI%2FSk881d1dgaw0DDZfwKL8KjpulrbtvnPmgiyGP%2FiitLNVAtzSPS2B%2FGpVopLMzAuwHfRXWGDG%2BVg%2FCPSUo4WxN6sP2SybWCvrzBNS50c5FHRuutyRQIJvCbJOMvFknjBpMF7v%2FfIeQjoCmaBbK2tK8kru%2BVlN29Q%2FbqADrXCbVKw9OHQVeUQNHPrglOyMR9rYeSTf8fjPSFewxDCeyNu%2FBjqkAafkt0tafXuR7AeqogP4aIhR9erXBNVct4q73Kx%2FvUO9DgC9Ut8JCaIhdQ0Z4gZdZ45huAPKBaNm6aD5sl8%2Fgpslbq%2FOGkrY643YwyVtJxfFa52T6O5M8NmNRPHcUKvJXroObvcD4%2Fwdt4blFnP8Ys5O0i0zvi%2FLcwqCXz3bseAttQPKzWjwSwD7xPKhzrhZB13Fb4p1xYHtHtpV%2BfPPs7AkQ1hP&X-Amz-Signature=05402a5407904500e578c5b156ecbab6f103daf628dd1aa24aca724e7b7f71dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQOEIP3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCIIJIBv2XRFUSbIwg6Qv1MF6zOmymzKDbb%2F6TifhuKUQIhALJpLI8uwS3teFLvzPpjah1NqdKEPk7oDc%2BM64cL0jzEKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP24g0o03bEmrqx%2BYq3AOSJuRljerraOqBpuzlxsJhdDJavgnal3LRaR9M6vGiH88u5ilRBB3BBO4BVMLyTbg8a2Ct%2B5YWXmQFCOkmspMdM1qaYdU8SvieXeOaTiqNhw4SDNiBPXG6QCrpFKxFmZRUrEaSV%2Bh69zDYRdgNNKdjjgGg2EfgetCMjk8n7W8Qi59EWHzIB1dJ7UmnVjBNT3NYdtazZKaxthK9ztaa8iby2x5AyGrgQvTc3VuyiUo9GkbAve%2BI2VpsNNQ%2BvViGrT3q4D6hrTFRx6LETAc91%2BKj1E8oqZi3yOKMHR8vRggmQLqTH1fcfebpdkPMmDTrqaP0LaazQwni2%2Fr2pZkrmRG7bwGm%2BPGh%2Beq4kdqBDhIvevV6Gt4SVigxdCcCLXTqYy5OtUxUhNE%2F%2Fbzo0TbCik2ABSra%2F5imQ3pbbR5qyc0o6PI%2FSk881d1dgaw0DDZfwKL8KjpulrbtvnPmgiyGP%2FiitLNVAtzSPS2B%2FGpVopLMzAuwHfRXWGDG%2BVg%2FCPSUo4WxN6sP2SybWCvrzBNS50c5FHRuutyRQIJvCbJOMvFknjBpMF7v%2FfIeQjoCmaBbK2tK8kru%2BVlN29Q%2FbqADrXCbVKw9OHQVeUQNHPrglOyMR9rYeSTf8fjPSFewxDCeyNu%2FBjqkAafkt0tafXuR7AeqogP4aIhR9erXBNVct4q73Kx%2FvUO9DgC9Ut8JCaIhdQ0Z4gZdZ45huAPKBaNm6aD5sl8%2Fgpslbq%2FOGkrY643YwyVtJxfFa52T6O5M8NmNRPHcUKvJXroObvcD4%2Fwdt4blFnP8Ys5O0i0zvi%2FLcwqCXz3bseAttQPKzWjwSwD7xPKhzrhZB13Fb4p1xYHtHtpV%2BfPPs7AkQ1hP&X-Amz-Signature=63a922d10183a95f14325323f99eb1fb2cad3b99fd567da614885245221937b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQOEIP3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCIIJIBv2XRFUSbIwg6Qv1MF6zOmymzKDbb%2F6TifhuKUQIhALJpLI8uwS3teFLvzPpjah1NqdKEPk7oDc%2BM64cL0jzEKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP24g0o03bEmrqx%2BYq3AOSJuRljerraOqBpuzlxsJhdDJavgnal3LRaR9M6vGiH88u5ilRBB3BBO4BVMLyTbg8a2Ct%2B5YWXmQFCOkmspMdM1qaYdU8SvieXeOaTiqNhw4SDNiBPXG6QCrpFKxFmZRUrEaSV%2Bh69zDYRdgNNKdjjgGg2EfgetCMjk8n7W8Qi59EWHzIB1dJ7UmnVjBNT3NYdtazZKaxthK9ztaa8iby2x5AyGrgQvTc3VuyiUo9GkbAve%2BI2VpsNNQ%2BvViGrT3q4D6hrTFRx6LETAc91%2BKj1E8oqZi3yOKMHR8vRggmQLqTH1fcfebpdkPMmDTrqaP0LaazQwni2%2Fr2pZkrmRG7bwGm%2BPGh%2Beq4kdqBDhIvevV6Gt4SVigxdCcCLXTqYy5OtUxUhNE%2F%2Fbzo0TbCik2ABSra%2F5imQ3pbbR5qyc0o6PI%2FSk881d1dgaw0DDZfwKL8KjpulrbtvnPmgiyGP%2FiitLNVAtzSPS2B%2FGpVopLMzAuwHfRXWGDG%2BVg%2FCPSUo4WxN6sP2SybWCvrzBNS50c5FHRuutyRQIJvCbJOMvFknjBpMF7v%2FfIeQjoCmaBbK2tK8kru%2BVlN29Q%2FbqADrXCbVKw9OHQVeUQNHPrglOyMR9rYeSTf8fjPSFewxDCeyNu%2FBjqkAafkt0tafXuR7AeqogP4aIhR9erXBNVct4q73Kx%2FvUO9DgC9Ut8JCaIhdQ0Z4gZdZ45huAPKBaNm6aD5sl8%2Fgpslbq%2FOGkrY643YwyVtJxfFa52T6O5M8NmNRPHcUKvJXroObvcD4%2Fwdt4blFnP8Ys5O0i0zvi%2FLcwqCXz3bseAttQPKzWjwSwD7xPKhzrhZB13Fb4p1xYHtHtpV%2BfPPs7AkQ1hP&X-Amz-Signature=ff674cc2568bcd29fac2b50169eb3012b8c48e36b854dd8ab66464e03162a260&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQOEIP3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCIIJIBv2XRFUSbIwg6Qv1MF6zOmymzKDbb%2F6TifhuKUQIhALJpLI8uwS3teFLvzPpjah1NqdKEPk7oDc%2BM64cL0jzEKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP24g0o03bEmrqx%2BYq3AOSJuRljerraOqBpuzlxsJhdDJavgnal3LRaR9M6vGiH88u5ilRBB3BBO4BVMLyTbg8a2Ct%2B5YWXmQFCOkmspMdM1qaYdU8SvieXeOaTiqNhw4SDNiBPXG6QCrpFKxFmZRUrEaSV%2Bh69zDYRdgNNKdjjgGg2EfgetCMjk8n7W8Qi59EWHzIB1dJ7UmnVjBNT3NYdtazZKaxthK9ztaa8iby2x5AyGrgQvTc3VuyiUo9GkbAve%2BI2VpsNNQ%2BvViGrT3q4D6hrTFRx6LETAc91%2BKj1E8oqZi3yOKMHR8vRggmQLqTH1fcfebpdkPMmDTrqaP0LaazQwni2%2Fr2pZkrmRG7bwGm%2BPGh%2Beq4kdqBDhIvevV6Gt4SVigxdCcCLXTqYy5OtUxUhNE%2F%2Fbzo0TbCik2ABSra%2F5imQ3pbbR5qyc0o6PI%2FSk881d1dgaw0DDZfwKL8KjpulrbtvnPmgiyGP%2FiitLNVAtzSPS2B%2FGpVopLMzAuwHfRXWGDG%2BVg%2FCPSUo4WxN6sP2SybWCvrzBNS50c5FHRuutyRQIJvCbJOMvFknjBpMF7v%2FfIeQjoCmaBbK2tK8kru%2BVlN29Q%2FbqADrXCbVKw9OHQVeUQNHPrglOyMR9rYeSTf8fjPSFewxDCeyNu%2FBjqkAafkt0tafXuR7AeqogP4aIhR9erXBNVct4q73Kx%2FvUO9DgC9Ut8JCaIhdQ0Z4gZdZ45huAPKBaNm6aD5sl8%2Fgpslbq%2FOGkrY643YwyVtJxfFa52T6O5M8NmNRPHcUKvJXroObvcD4%2Fwdt4blFnP8Ys5O0i0zvi%2FLcwqCXz3bseAttQPKzWjwSwD7xPKhzrhZB13Fb4p1xYHtHtpV%2BfPPs7AkQ1hP&X-Amz-Signature=633a9e80512d6d5381f746bee3aa938495966cd24bd447c8b52271c7e3051984&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQOEIP3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCIIJIBv2XRFUSbIwg6Qv1MF6zOmymzKDbb%2F6TifhuKUQIhALJpLI8uwS3teFLvzPpjah1NqdKEPk7oDc%2BM64cL0jzEKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP24g0o03bEmrqx%2BYq3AOSJuRljerraOqBpuzlxsJhdDJavgnal3LRaR9M6vGiH88u5ilRBB3BBO4BVMLyTbg8a2Ct%2B5YWXmQFCOkmspMdM1qaYdU8SvieXeOaTiqNhw4SDNiBPXG6QCrpFKxFmZRUrEaSV%2Bh69zDYRdgNNKdjjgGg2EfgetCMjk8n7W8Qi59EWHzIB1dJ7UmnVjBNT3NYdtazZKaxthK9ztaa8iby2x5AyGrgQvTc3VuyiUo9GkbAve%2BI2VpsNNQ%2BvViGrT3q4D6hrTFRx6LETAc91%2BKj1E8oqZi3yOKMHR8vRggmQLqTH1fcfebpdkPMmDTrqaP0LaazQwni2%2Fr2pZkrmRG7bwGm%2BPGh%2Beq4kdqBDhIvevV6Gt4SVigxdCcCLXTqYy5OtUxUhNE%2F%2Fbzo0TbCik2ABSra%2F5imQ3pbbR5qyc0o6PI%2FSk881d1dgaw0DDZfwKL8KjpulrbtvnPmgiyGP%2FiitLNVAtzSPS2B%2FGpVopLMzAuwHfRXWGDG%2BVg%2FCPSUo4WxN6sP2SybWCvrzBNS50c5FHRuutyRQIJvCbJOMvFknjBpMF7v%2FfIeQjoCmaBbK2tK8kru%2BVlN29Q%2FbqADrXCbVKw9OHQVeUQNHPrglOyMR9rYeSTf8fjPSFewxDCeyNu%2FBjqkAafkt0tafXuR7AeqogP4aIhR9erXBNVct4q73Kx%2FvUO9DgC9Ut8JCaIhdQ0Z4gZdZ45huAPKBaNm6aD5sl8%2Fgpslbq%2FOGkrY643YwyVtJxfFa52T6O5M8NmNRPHcUKvJXroObvcD4%2Fwdt4blFnP8Ys5O0i0zvi%2FLcwqCXz3bseAttQPKzWjwSwD7xPKhzrhZB13Fb4p1xYHtHtpV%2BfPPs7AkQ1hP&X-Amz-Signature=fee32b70727d69f018cd7916fa105376c3ddb1ae71d7cbd35428b6d01f74e1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQOEIP3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCIIJIBv2XRFUSbIwg6Qv1MF6zOmymzKDbb%2F6TifhuKUQIhALJpLI8uwS3teFLvzPpjah1NqdKEPk7oDc%2BM64cL0jzEKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP24g0o03bEmrqx%2BYq3AOSJuRljerraOqBpuzlxsJhdDJavgnal3LRaR9M6vGiH88u5ilRBB3BBO4BVMLyTbg8a2Ct%2B5YWXmQFCOkmspMdM1qaYdU8SvieXeOaTiqNhw4SDNiBPXG6QCrpFKxFmZRUrEaSV%2Bh69zDYRdgNNKdjjgGg2EfgetCMjk8n7W8Qi59EWHzIB1dJ7UmnVjBNT3NYdtazZKaxthK9ztaa8iby2x5AyGrgQvTc3VuyiUo9GkbAve%2BI2VpsNNQ%2BvViGrT3q4D6hrTFRx6LETAc91%2BKj1E8oqZi3yOKMHR8vRggmQLqTH1fcfebpdkPMmDTrqaP0LaazQwni2%2Fr2pZkrmRG7bwGm%2BPGh%2Beq4kdqBDhIvevV6Gt4SVigxdCcCLXTqYy5OtUxUhNE%2F%2Fbzo0TbCik2ABSra%2F5imQ3pbbR5qyc0o6PI%2FSk881d1dgaw0DDZfwKL8KjpulrbtvnPmgiyGP%2FiitLNVAtzSPS2B%2FGpVopLMzAuwHfRXWGDG%2BVg%2FCPSUo4WxN6sP2SybWCvrzBNS50c5FHRuutyRQIJvCbJOMvFknjBpMF7v%2FfIeQjoCmaBbK2tK8kru%2BVlN29Q%2FbqADrXCbVKw9OHQVeUQNHPrglOyMR9rYeSTf8fjPSFewxDCeyNu%2FBjqkAafkt0tafXuR7AeqogP4aIhR9erXBNVct4q73Kx%2FvUO9DgC9Ut8JCaIhdQ0Z4gZdZ45huAPKBaNm6aD5sl8%2Fgpslbq%2FOGkrY643YwyVtJxfFa52T6O5M8NmNRPHcUKvJXroObvcD4%2Fwdt4blFnP8Ys5O0i0zvi%2FLcwqCXz3bseAttQPKzWjwSwD7xPKhzrhZB13Fb4p1xYHtHtpV%2BfPPs7AkQ1hP&X-Amz-Signature=02cb07ff0def76337dc09205e2ddee47c2750958ca538c6eb110db296693d529&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQOEIP3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCIIJIBv2XRFUSbIwg6Qv1MF6zOmymzKDbb%2F6TifhuKUQIhALJpLI8uwS3teFLvzPpjah1NqdKEPk7oDc%2BM64cL0jzEKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP24g0o03bEmrqx%2BYq3AOSJuRljerraOqBpuzlxsJhdDJavgnal3LRaR9M6vGiH88u5ilRBB3BBO4BVMLyTbg8a2Ct%2B5YWXmQFCOkmspMdM1qaYdU8SvieXeOaTiqNhw4SDNiBPXG6QCrpFKxFmZRUrEaSV%2Bh69zDYRdgNNKdjjgGg2EfgetCMjk8n7W8Qi59EWHzIB1dJ7UmnVjBNT3NYdtazZKaxthK9ztaa8iby2x5AyGrgQvTc3VuyiUo9GkbAve%2BI2VpsNNQ%2BvViGrT3q4D6hrTFRx6LETAc91%2BKj1E8oqZi3yOKMHR8vRggmQLqTH1fcfebpdkPMmDTrqaP0LaazQwni2%2Fr2pZkrmRG7bwGm%2BPGh%2Beq4kdqBDhIvevV6Gt4SVigxdCcCLXTqYy5OtUxUhNE%2F%2Fbzo0TbCik2ABSra%2F5imQ3pbbR5qyc0o6PI%2FSk881d1dgaw0DDZfwKL8KjpulrbtvnPmgiyGP%2FiitLNVAtzSPS2B%2FGpVopLMzAuwHfRXWGDG%2BVg%2FCPSUo4WxN6sP2SybWCvrzBNS50c5FHRuutyRQIJvCbJOMvFknjBpMF7v%2FfIeQjoCmaBbK2tK8kru%2BVlN29Q%2FbqADrXCbVKw9OHQVeUQNHPrglOyMR9rYeSTf8fjPSFewxDCeyNu%2FBjqkAafkt0tafXuR7AeqogP4aIhR9erXBNVct4q73Kx%2FvUO9DgC9Ut8JCaIhdQ0Z4gZdZ45huAPKBaNm6aD5sl8%2Fgpslbq%2FOGkrY643YwyVtJxfFa52T6O5M8NmNRPHcUKvJXroObvcD4%2Fwdt4blFnP8Ys5O0i0zvi%2FLcwqCXz3bseAttQPKzWjwSwD7xPKhzrhZB13Fb4p1xYHtHtpV%2BfPPs7AkQ1hP&X-Amz-Signature=2dbef4259bb9cfb0aaf8980d1216accb782f9a41878ab3cbe985700ce49a6c29&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
