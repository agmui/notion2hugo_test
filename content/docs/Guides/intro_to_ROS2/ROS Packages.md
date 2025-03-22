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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642P2RNM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFsyUhhbXXbJEETNay6dyMQGFO4AmYwoiOBN%2Fey6CK8rAiAuCaz%2FMF0XPfretXPVfhfsNLnEDmXukbmGNK%2Fl6AlRtiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q8X5a95bJX%2BMMVHKtwD9juLsonvM15XYOnzbqIjj%2BdfjSBElBWXolDoV7nYIGna4qblHTfcm1sJ2ZfPgyCRKDtROtwFj6oB6HBsH1YudYKVqu2rbOJK0rzBBcCNSa%2FmX3kW8IVkNNaXRZw%2Bg2cRYldqb%2Flx1LGpXLLYs9fNUNIhcN3CM2JMNNBTNELfcBCMeQrhAU8qDBLq1n%2FjCEDTfTJs05QeFp1zLXXvNslNvaofJ3VUs1GbaVbCQCHU%2B4xeHkvuiUdUcEPp%2Fy89hWp4zbZWXV%2FyDStE5ENRvEwabEqInU0Sx7AboTJ9mZYOl77j%2BGOteMzonOzdL5Ckdt40Gokg9gZT4k7wCZFU4n6t2SSRdvwRPoq3Hh6LE8%2BZ2TeEnc3PjonlRqV3Rz%2BMi8trB%2BrYiVquGhPsLI%2FVJJdXdOtze0evljE02be%2BBGx%2B60ngSJIkepK1vSTeqIH%2BT0eXhs2aFICOGMVkKh3jL8LmUaiCz934cvl7zlsoAuEV8RLBZYFzqvBns%2Fb8dM7Qnu8hg%2FEVWQ8DarWPgHDhkju8Y%2BSAteLy7OlEqrrokeIGh%2BlFmmN%2BGnoL%2FwiTeuPdkw%2BXPqyVMJEPX4sBgW%2FYvFErF4FYXuXHoIvt4h5l%2BhST4v6XjPa6WsM%2BSlrU8ucwhfb6vgY6pgGaSNn8DCQ1%2FA%2Bwc%2BkNK0c%2FBkqw9aGT2NcTGzKZMfGy0%2FO64DBuJD25xnvrZJrRUC6DYmPEv1yp4yUNYvdnZYw4R5pMTXNGymqVfAmm38QqSKqmc3FrPFjDBmjxxGar4R4ZPf7yWiJ9vm9DvtbJIZM10Sc9B5n8rTwINp8Zi2F4r82%2BLlBy3PoSoBTievPo6IjqmADZL6t8KFhq7JCRcM58ZBnhnILZ&X-Amz-Signature=78b95c4f6f78ade258e17c17606987ad16a236036cb42c92172379db5db20f89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642P2RNM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFsyUhhbXXbJEETNay6dyMQGFO4AmYwoiOBN%2Fey6CK8rAiAuCaz%2FMF0XPfretXPVfhfsNLnEDmXukbmGNK%2Fl6AlRtiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q8X5a95bJX%2BMMVHKtwD9juLsonvM15XYOnzbqIjj%2BdfjSBElBWXolDoV7nYIGna4qblHTfcm1sJ2ZfPgyCRKDtROtwFj6oB6HBsH1YudYKVqu2rbOJK0rzBBcCNSa%2FmX3kW8IVkNNaXRZw%2Bg2cRYldqb%2Flx1LGpXLLYs9fNUNIhcN3CM2JMNNBTNELfcBCMeQrhAU8qDBLq1n%2FjCEDTfTJs05QeFp1zLXXvNslNvaofJ3VUs1GbaVbCQCHU%2B4xeHkvuiUdUcEPp%2Fy89hWp4zbZWXV%2FyDStE5ENRvEwabEqInU0Sx7AboTJ9mZYOl77j%2BGOteMzonOzdL5Ckdt40Gokg9gZT4k7wCZFU4n6t2SSRdvwRPoq3Hh6LE8%2BZ2TeEnc3PjonlRqV3Rz%2BMi8trB%2BrYiVquGhPsLI%2FVJJdXdOtze0evljE02be%2BBGx%2B60ngSJIkepK1vSTeqIH%2BT0eXhs2aFICOGMVkKh3jL8LmUaiCz934cvl7zlsoAuEV8RLBZYFzqvBns%2Fb8dM7Qnu8hg%2FEVWQ8DarWPgHDhkju8Y%2BSAteLy7OlEqrrokeIGh%2BlFmmN%2BGnoL%2FwiTeuPdkw%2BXPqyVMJEPX4sBgW%2FYvFErF4FYXuXHoIvt4h5l%2BhST4v6XjPa6WsM%2BSlrU8ucwhfb6vgY6pgGaSNn8DCQ1%2FA%2Bwc%2BkNK0c%2FBkqw9aGT2NcTGzKZMfGy0%2FO64DBuJD25xnvrZJrRUC6DYmPEv1yp4yUNYvdnZYw4R5pMTXNGymqVfAmm38QqSKqmc3FrPFjDBmjxxGar4R4ZPf7yWiJ9vm9DvtbJIZM10Sc9B5n8rTwINp8Zi2F4r82%2BLlBy3PoSoBTievPo6IjqmADZL6t8KFhq7JCRcM58ZBnhnILZ&X-Amz-Signature=b1ec66e0694e19430135bb083a6da68ab58cdc831d50c826ff22577fdbd963e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642P2RNM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFsyUhhbXXbJEETNay6dyMQGFO4AmYwoiOBN%2Fey6CK8rAiAuCaz%2FMF0XPfretXPVfhfsNLnEDmXukbmGNK%2Fl6AlRtiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q8X5a95bJX%2BMMVHKtwD9juLsonvM15XYOnzbqIjj%2BdfjSBElBWXolDoV7nYIGna4qblHTfcm1sJ2ZfPgyCRKDtROtwFj6oB6HBsH1YudYKVqu2rbOJK0rzBBcCNSa%2FmX3kW8IVkNNaXRZw%2Bg2cRYldqb%2Flx1LGpXLLYs9fNUNIhcN3CM2JMNNBTNELfcBCMeQrhAU8qDBLq1n%2FjCEDTfTJs05QeFp1zLXXvNslNvaofJ3VUs1GbaVbCQCHU%2B4xeHkvuiUdUcEPp%2Fy89hWp4zbZWXV%2FyDStE5ENRvEwabEqInU0Sx7AboTJ9mZYOl77j%2BGOteMzonOzdL5Ckdt40Gokg9gZT4k7wCZFU4n6t2SSRdvwRPoq3Hh6LE8%2BZ2TeEnc3PjonlRqV3Rz%2BMi8trB%2BrYiVquGhPsLI%2FVJJdXdOtze0evljE02be%2BBGx%2B60ngSJIkepK1vSTeqIH%2BT0eXhs2aFICOGMVkKh3jL8LmUaiCz934cvl7zlsoAuEV8RLBZYFzqvBns%2Fb8dM7Qnu8hg%2FEVWQ8DarWPgHDhkju8Y%2BSAteLy7OlEqrrokeIGh%2BlFmmN%2BGnoL%2FwiTeuPdkw%2BXPqyVMJEPX4sBgW%2FYvFErF4FYXuXHoIvt4h5l%2BhST4v6XjPa6WsM%2BSlrU8ucwhfb6vgY6pgGaSNn8DCQ1%2FA%2Bwc%2BkNK0c%2FBkqw9aGT2NcTGzKZMfGy0%2FO64DBuJD25xnvrZJrRUC6DYmPEv1yp4yUNYvdnZYw4R5pMTXNGymqVfAmm38QqSKqmc3FrPFjDBmjxxGar4R4ZPf7yWiJ9vm9DvtbJIZM10Sc9B5n8rTwINp8Zi2F4r82%2BLlBy3PoSoBTievPo6IjqmADZL6t8KFhq7JCRcM58ZBnhnILZ&X-Amz-Signature=1ac6846b65c22dbfaa994b1825d996c76e2258fcbf1b6d30460c60e5558d9837&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642P2RNM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFsyUhhbXXbJEETNay6dyMQGFO4AmYwoiOBN%2Fey6CK8rAiAuCaz%2FMF0XPfretXPVfhfsNLnEDmXukbmGNK%2Fl6AlRtiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q8X5a95bJX%2BMMVHKtwD9juLsonvM15XYOnzbqIjj%2BdfjSBElBWXolDoV7nYIGna4qblHTfcm1sJ2ZfPgyCRKDtROtwFj6oB6HBsH1YudYKVqu2rbOJK0rzBBcCNSa%2FmX3kW8IVkNNaXRZw%2Bg2cRYldqb%2Flx1LGpXLLYs9fNUNIhcN3CM2JMNNBTNELfcBCMeQrhAU8qDBLq1n%2FjCEDTfTJs05QeFp1zLXXvNslNvaofJ3VUs1GbaVbCQCHU%2B4xeHkvuiUdUcEPp%2Fy89hWp4zbZWXV%2FyDStE5ENRvEwabEqInU0Sx7AboTJ9mZYOl77j%2BGOteMzonOzdL5Ckdt40Gokg9gZT4k7wCZFU4n6t2SSRdvwRPoq3Hh6LE8%2BZ2TeEnc3PjonlRqV3Rz%2BMi8trB%2BrYiVquGhPsLI%2FVJJdXdOtze0evljE02be%2BBGx%2B60ngSJIkepK1vSTeqIH%2BT0eXhs2aFICOGMVkKh3jL8LmUaiCz934cvl7zlsoAuEV8RLBZYFzqvBns%2Fb8dM7Qnu8hg%2FEVWQ8DarWPgHDhkju8Y%2BSAteLy7OlEqrrokeIGh%2BlFmmN%2BGnoL%2FwiTeuPdkw%2BXPqyVMJEPX4sBgW%2FYvFErF4FYXuXHoIvt4h5l%2BhST4v6XjPa6WsM%2BSlrU8ucwhfb6vgY6pgGaSNn8DCQ1%2FA%2Bwc%2BkNK0c%2FBkqw9aGT2NcTGzKZMfGy0%2FO64DBuJD25xnvrZJrRUC6DYmPEv1yp4yUNYvdnZYw4R5pMTXNGymqVfAmm38QqSKqmc3FrPFjDBmjxxGar4R4ZPf7yWiJ9vm9DvtbJIZM10Sc9B5n8rTwINp8Zi2F4r82%2BLlBy3PoSoBTievPo6IjqmADZL6t8KFhq7JCRcM58ZBnhnILZ&X-Amz-Signature=98c18f4823935a3e20ffad9c2868e3e84f7e8cda415f036529897ff3c7c2dda1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642P2RNM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFsyUhhbXXbJEETNay6dyMQGFO4AmYwoiOBN%2Fey6CK8rAiAuCaz%2FMF0XPfretXPVfhfsNLnEDmXukbmGNK%2Fl6AlRtiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q8X5a95bJX%2BMMVHKtwD9juLsonvM15XYOnzbqIjj%2BdfjSBElBWXolDoV7nYIGna4qblHTfcm1sJ2ZfPgyCRKDtROtwFj6oB6HBsH1YudYKVqu2rbOJK0rzBBcCNSa%2FmX3kW8IVkNNaXRZw%2Bg2cRYldqb%2Flx1LGpXLLYs9fNUNIhcN3CM2JMNNBTNELfcBCMeQrhAU8qDBLq1n%2FjCEDTfTJs05QeFp1zLXXvNslNvaofJ3VUs1GbaVbCQCHU%2B4xeHkvuiUdUcEPp%2Fy89hWp4zbZWXV%2FyDStE5ENRvEwabEqInU0Sx7AboTJ9mZYOl77j%2BGOteMzonOzdL5Ckdt40Gokg9gZT4k7wCZFU4n6t2SSRdvwRPoq3Hh6LE8%2BZ2TeEnc3PjonlRqV3Rz%2BMi8trB%2BrYiVquGhPsLI%2FVJJdXdOtze0evljE02be%2BBGx%2B60ngSJIkepK1vSTeqIH%2BT0eXhs2aFICOGMVkKh3jL8LmUaiCz934cvl7zlsoAuEV8RLBZYFzqvBns%2Fb8dM7Qnu8hg%2FEVWQ8DarWPgHDhkju8Y%2BSAteLy7OlEqrrokeIGh%2BlFmmN%2BGnoL%2FwiTeuPdkw%2BXPqyVMJEPX4sBgW%2FYvFErF4FYXuXHoIvt4h5l%2BhST4v6XjPa6WsM%2BSlrU8ucwhfb6vgY6pgGaSNn8DCQ1%2FA%2Bwc%2BkNK0c%2FBkqw9aGT2NcTGzKZMfGy0%2FO64DBuJD25xnvrZJrRUC6DYmPEv1yp4yUNYvdnZYw4R5pMTXNGymqVfAmm38QqSKqmc3FrPFjDBmjxxGar4R4ZPf7yWiJ9vm9DvtbJIZM10Sc9B5n8rTwINp8Zi2F4r82%2BLlBy3PoSoBTievPo6IjqmADZL6t8KFhq7JCRcM58ZBnhnILZ&X-Amz-Signature=45a852ece50c3729a114f507e0566da3c77184b3b08f3d2b71caf5f1f907516d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642P2RNM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFsyUhhbXXbJEETNay6dyMQGFO4AmYwoiOBN%2Fey6CK8rAiAuCaz%2FMF0XPfretXPVfhfsNLnEDmXukbmGNK%2Fl6AlRtiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q8X5a95bJX%2BMMVHKtwD9juLsonvM15XYOnzbqIjj%2BdfjSBElBWXolDoV7nYIGna4qblHTfcm1sJ2ZfPgyCRKDtROtwFj6oB6HBsH1YudYKVqu2rbOJK0rzBBcCNSa%2FmX3kW8IVkNNaXRZw%2Bg2cRYldqb%2Flx1LGpXLLYs9fNUNIhcN3CM2JMNNBTNELfcBCMeQrhAU8qDBLq1n%2FjCEDTfTJs05QeFp1zLXXvNslNvaofJ3VUs1GbaVbCQCHU%2B4xeHkvuiUdUcEPp%2Fy89hWp4zbZWXV%2FyDStE5ENRvEwabEqInU0Sx7AboTJ9mZYOl77j%2BGOteMzonOzdL5Ckdt40Gokg9gZT4k7wCZFU4n6t2SSRdvwRPoq3Hh6LE8%2BZ2TeEnc3PjonlRqV3Rz%2BMi8trB%2BrYiVquGhPsLI%2FVJJdXdOtze0evljE02be%2BBGx%2B60ngSJIkepK1vSTeqIH%2BT0eXhs2aFICOGMVkKh3jL8LmUaiCz934cvl7zlsoAuEV8RLBZYFzqvBns%2Fb8dM7Qnu8hg%2FEVWQ8DarWPgHDhkju8Y%2BSAteLy7OlEqrrokeIGh%2BlFmmN%2BGnoL%2FwiTeuPdkw%2BXPqyVMJEPX4sBgW%2FYvFErF4FYXuXHoIvt4h5l%2BhST4v6XjPa6WsM%2BSlrU8ucwhfb6vgY6pgGaSNn8DCQ1%2FA%2Bwc%2BkNK0c%2FBkqw9aGT2NcTGzKZMfGy0%2FO64DBuJD25xnvrZJrRUC6DYmPEv1yp4yUNYvdnZYw4R5pMTXNGymqVfAmm38QqSKqmc3FrPFjDBmjxxGar4R4ZPf7yWiJ9vm9DvtbJIZM10Sc9B5n8rTwINp8Zi2F4r82%2BLlBy3PoSoBTievPo6IjqmADZL6t8KFhq7JCRcM58ZBnhnILZ&X-Amz-Signature=9831f29536a72aa0183b9cfdcc13da5799dc380675e892b2884849f48258d556&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642P2RNM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFsyUhhbXXbJEETNay6dyMQGFO4AmYwoiOBN%2Fey6CK8rAiAuCaz%2FMF0XPfretXPVfhfsNLnEDmXukbmGNK%2Fl6AlRtiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q8X5a95bJX%2BMMVHKtwD9juLsonvM15XYOnzbqIjj%2BdfjSBElBWXolDoV7nYIGna4qblHTfcm1sJ2ZfPgyCRKDtROtwFj6oB6HBsH1YudYKVqu2rbOJK0rzBBcCNSa%2FmX3kW8IVkNNaXRZw%2Bg2cRYldqb%2Flx1LGpXLLYs9fNUNIhcN3CM2JMNNBTNELfcBCMeQrhAU8qDBLq1n%2FjCEDTfTJs05QeFp1zLXXvNslNvaofJ3VUs1GbaVbCQCHU%2B4xeHkvuiUdUcEPp%2Fy89hWp4zbZWXV%2FyDStE5ENRvEwabEqInU0Sx7AboTJ9mZYOl77j%2BGOteMzonOzdL5Ckdt40Gokg9gZT4k7wCZFU4n6t2SSRdvwRPoq3Hh6LE8%2BZ2TeEnc3PjonlRqV3Rz%2BMi8trB%2BrYiVquGhPsLI%2FVJJdXdOtze0evljE02be%2BBGx%2B60ngSJIkepK1vSTeqIH%2BT0eXhs2aFICOGMVkKh3jL8LmUaiCz934cvl7zlsoAuEV8RLBZYFzqvBns%2Fb8dM7Qnu8hg%2FEVWQ8DarWPgHDhkju8Y%2BSAteLy7OlEqrrokeIGh%2BlFmmN%2BGnoL%2FwiTeuPdkw%2BXPqyVMJEPX4sBgW%2FYvFErF4FYXuXHoIvt4h5l%2BhST4v6XjPa6WsM%2BSlrU8ucwhfb6vgY6pgGaSNn8DCQ1%2FA%2Bwc%2BkNK0c%2FBkqw9aGT2NcTGzKZMfGy0%2FO64DBuJD25xnvrZJrRUC6DYmPEv1yp4yUNYvdnZYw4R5pMTXNGymqVfAmm38QqSKqmc3FrPFjDBmjxxGar4R4ZPf7yWiJ9vm9DvtbJIZM10Sc9B5n8rTwINp8Zi2F4r82%2BLlBy3PoSoBTievPo6IjqmADZL6t8KFhq7JCRcM58ZBnhnILZ&X-Amz-Signature=9c2bdce032326514ea2c84a876d22c1739e00b5b51c5234ea7913b5ec4dd36bc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
