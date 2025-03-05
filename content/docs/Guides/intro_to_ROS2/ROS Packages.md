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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW3ANAC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9UcTBfm%2FS8wsgjzzvTYOFjoLFe06zoE14wJDQZuBbXQIhALTL9k06oJZr9SOgnF40kbKXB9OTaddaHHpZRVVwx45lKv8DCCAQABoMNjM3NDIzMTgzODA1Igz80mMWFHlZzsmT2%2BAq3APoZAkke9IgDpka8P2Pk4jLJnriqcGEMn7bVUx62qzdrgqCKBS%2FYaQuODExCFyqCOD5hyUqOP%2BxGnFPoErfIIrGjDIh%2BMNwIl677k7uVcuJhV3xKlVLBZQdrTLJ9KkMoTaWU2a2zxRHozUZRrMY0VHXJAWhWw4VCMbVPxyxH%2FNCYA4n%2FfwZmQ5EKFWdsiRMJszok9CE4DfRk0aCfyx%2F%2F8wmhNXSfTSn1qirqkcVk%2B%2FIywF9JCj3mTO3OAdXjDtY9n5xFf56nKe0aqkDnzIrt3VueVaSk882SdIRuMxLul15h%2ByPkeN79tJGNdSMExPuFNDdalMS43OV6t2crL3i4rnQst4nMHhNlUkkzB4U2y7GZj1pPVWwwMxDFzLxW9XxQQuxEAbxAQv0GVgaHvkIxJfKuHlHnz%2Fj0IZZHALuWI2%2FlJYfiKsmxdC1wLoTrytJUYm2qF34iHEnwOjS%2BHz6PcAx4g6cqQqt%2FPCA48DWa0W%2BoT6u%2FA%2FeyITWXnHMs8Rn%2F71S0DN3EKRd%2Fo1weSzL35IcKa84KC9jqC2FLd%2B2nqKWuvdcrdnVYL27IZr63REjXPH38AEenjO0p37l6IDtU4NihjumvX43CxV7CqgOvAHrY6dTFc76ZZKIutNWTjC%2Bo6O%2BBjqkAXEpw6Ncr%2BawJ1d8mOWw48Jsn6Ba66QM%2B7urIHhA7h0heCtyArTXRfHru3nBsEZN9Fye9EEQXCrY2HmBM7zcOMa0q7c5Q9OSQvA7CNohPYV%2F35BlL4ojXjWl1Tpml5zrAa9%2FYEKXhYB%2BF3sOlOV5OTdLT5AEGV2SXDpCZHsc01VyO%2FkoCF0xg6CgycWoE5AnMA1hbVcoOn57SVQkfbmDAC%2BFX3JZ&X-Amz-Signature=c1d0885039cf1290ca393bafdad2f7d93cc5164a07cc526648fc234e65028acb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW3ANAC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9UcTBfm%2FS8wsgjzzvTYOFjoLFe06zoE14wJDQZuBbXQIhALTL9k06oJZr9SOgnF40kbKXB9OTaddaHHpZRVVwx45lKv8DCCAQABoMNjM3NDIzMTgzODA1Igz80mMWFHlZzsmT2%2BAq3APoZAkke9IgDpka8P2Pk4jLJnriqcGEMn7bVUx62qzdrgqCKBS%2FYaQuODExCFyqCOD5hyUqOP%2BxGnFPoErfIIrGjDIh%2BMNwIl677k7uVcuJhV3xKlVLBZQdrTLJ9KkMoTaWU2a2zxRHozUZRrMY0VHXJAWhWw4VCMbVPxyxH%2FNCYA4n%2FfwZmQ5EKFWdsiRMJszok9CE4DfRk0aCfyx%2F%2F8wmhNXSfTSn1qirqkcVk%2B%2FIywF9JCj3mTO3OAdXjDtY9n5xFf56nKe0aqkDnzIrt3VueVaSk882SdIRuMxLul15h%2ByPkeN79tJGNdSMExPuFNDdalMS43OV6t2crL3i4rnQst4nMHhNlUkkzB4U2y7GZj1pPVWwwMxDFzLxW9XxQQuxEAbxAQv0GVgaHvkIxJfKuHlHnz%2Fj0IZZHALuWI2%2FlJYfiKsmxdC1wLoTrytJUYm2qF34iHEnwOjS%2BHz6PcAx4g6cqQqt%2FPCA48DWa0W%2BoT6u%2FA%2FeyITWXnHMs8Rn%2F71S0DN3EKRd%2Fo1weSzL35IcKa84KC9jqC2FLd%2B2nqKWuvdcrdnVYL27IZr63REjXPH38AEenjO0p37l6IDtU4NihjumvX43CxV7CqgOvAHrY6dTFc76ZZKIutNWTjC%2Bo6O%2BBjqkAXEpw6Ncr%2BawJ1d8mOWw48Jsn6Ba66QM%2B7urIHhA7h0heCtyArTXRfHru3nBsEZN9Fye9EEQXCrY2HmBM7zcOMa0q7c5Q9OSQvA7CNohPYV%2F35BlL4ojXjWl1Tpml5zrAa9%2FYEKXhYB%2BF3sOlOV5OTdLT5AEGV2SXDpCZHsc01VyO%2FkoCF0xg6CgycWoE5AnMA1hbVcoOn57SVQkfbmDAC%2BFX3JZ&X-Amz-Signature=6bec19e73c6b8ebcff435bffd71fd3ef9fc5a306f8f914d7f6e67a33d4d52a97&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW3ANAC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9UcTBfm%2FS8wsgjzzvTYOFjoLFe06zoE14wJDQZuBbXQIhALTL9k06oJZr9SOgnF40kbKXB9OTaddaHHpZRVVwx45lKv8DCCAQABoMNjM3NDIzMTgzODA1Igz80mMWFHlZzsmT2%2BAq3APoZAkke9IgDpka8P2Pk4jLJnriqcGEMn7bVUx62qzdrgqCKBS%2FYaQuODExCFyqCOD5hyUqOP%2BxGnFPoErfIIrGjDIh%2BMNwIl677k7uVcuJhV3xKlVLBZQdrTLJ9KkMoTaWU2a2zxRHozUZRrMY0VHXJAWhWw4VCMbVPxyxH%2FNCYA4n%2FfwZmQ5EKFWdsiRMJszok9CE4DfRk0aCfyx%2F%2F8wmhNXSfTSn1qirqkcVk%2B%2FIywF9JCj3mTO3OAdXjDtY9n5xFf56nKe0aqkDnzIrt3VueVaSk882SdIRuMxLul15h%2ByPkeN79tJGNdSMExPuFNDdalMS43OV6t2crL3i4rnQst4nMHhNlUkkzB4U2y7GZj1pPVWwwMxDFzLxW9XxQQuxEAbxAQv0GVgaHvkIxJfKuHlHnz%2Fj0IZZHALuWI2%2FlJYfiKsmxdC1wLoTrytJUYm2qF34iHEnwOjS%2BHz6PcAx4g6cqQqt%2FPCA48DWa0W%2BoT6u%2FA%2FeyITWXnHMs8Rn%2F71S0DN3EKRd%2Fo1weSzL35IcKa84KC9jqC2FLd%2B2nqKWuvdcrdnVYL27IZr63REjXPH38AEenjO0p37l6IDtU4NihjumvX43CxV7CqgOvAHrY6dTFc76ZZKIutNWTjC%2Bo6O%2BBjqkAXEpw6Ncr%2BawJ1d8mOWw48Jsn6Ba66QM%2B7urIHhA7h0heCtyArTXRfHru3nBsEZN9Fye9EEQXCrY2HmBM7zcOMa0q7c5Q9OSQvA7CNohPYV%2F35BlL4ojXjWl1Tpml5zrAa9%2FYEKXhYB%2BF3sOlOV5OTdLT5AEGV2SXDpCZHsc01VyO%2FkoCF0xg6CgycWoE5AnMA1hbVcoOn57SVQkfbmDAC%2BFX3JZ&X-Amz-Signature=3aca243e1bb8e2b98f9c5114c44136c619eb15f2b41af3fbfd7b4c28d37b6a45&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW3ANAC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9UcTBfm%2FS8wsgjzzvTYOFjoLFe06zoE14wJDQZuBbXQIhALTL9k06oJZr9SOgnF40kbKXB9OTaddaHHpZRVVwx45lKv8DCCAQABoMNjM3NDIzMTgzODA1Igz80mMWFHlZzsmT2%2BAq3APoZAkke9IgDpka8P2Pk4jLJnriqcGEMn7bVUx62qzdrgqCKBS%2FYaQuODExCFyqCOD5hyUqOP%2BxGnFPoErfIIrGjDIh%2BMNwIl677k7uVcuJhV3xKlVLBZQdrTLJ9KkMoTaWU2a2zxRHozUZRrMY0VHXJAWhWw4VCMbVPxyxH%2FNCYA4n%2FfwZmQ5EKFWdsiRMJszok9CE4DfRk0aCfyx%2F%2F8wmhNXSfTSn1qirqkcVk%2B%2FIywF9JCj3mTO3OAdXjDtY9n5xFf56nKe0aqkDnzIrt3VueVaSk882SdIRuMxLul15h%2ByPkeN79tJGNdSMExPuFNDdalMS43OV6t2crL3i4rnQst4nMHhNlUkkzB4U2y7GZj1pPVWwwMxDFzLxW9XxQQuxEAbxAQv0GVgaHvkIxJfKuHlHnz%2Fj0IZZHALuWI2%2FlJYfiKsmxdC1wLoTrytJUYm2qF34iHEnwOjS%2BHz6PcAx4g6cqQqt%2FPCA48DWa0W%2BoT6u%2FA%2FeyITWXnHMs8Rn%2F71S0DN3EKRd%2Fo1weSzL35IcKa84KC9jqC2FLd%2B2nqKWuvdcrdnVYL27IZr63REjXPH38AEenjO0p37l6IDtU4NihjumvX43CxV7CqgOvAHrY6dTFc76ZZKIutNWTjC%2Bo6O%2BBjqkAXEpw6Ncr%2BawJ1d8mOWw48Jsn6Ba66QM%2B7urIHhA7h0heCtyArTXRfHru3nBsEZN9Fye9EEQXCrY2HmBM7zcOMa0q7c5Q9OSQvA7CNohPYV%2F35BlL4ojXjWl1Tpml5zrAa9%2FYEKXhYB%2BF3sOlOV5OTdLT5AEGV2SXDpCZHsc01VyO%2FkoCF0xg6CgycWoE5AnMA1hbVcoOn57SVQkfbmDAC%2BFX3JZ&X-Amz-Signature=2b3832d2e3df3e3a37d98f421166ffa95f8e6465c06d0418b36e7c71a31d1510&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW3ANAC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9UcTBfm%2FS8wsgjzzvTYOFjoLFe06zoE14wJDQZuBbXQIhALTL9k06oJZr9SOgnF40kbKXB9OTaddaHHpZRVVwx45lKv8DCCAQABoMNjM3NDIzMTgzODA1Igz80mMWFHlZzsmT2%2BAq3APoZAkke9IgDpka8P2Pk4jLJnriqcGEMn7bVUx62qzdrgqCKBS%2FYaQuODExCFyqCOD5hyUqOP%2BxGnFPoErfIIrGjDIh%2BMNwIl677k7uVcuJhV3xKlVLBZQdrTLJ9KkMoTaWU2a2zxRHozUZRrMY0VHXJAWhWw4VCMbVPxyxH%2FNCYA4n%2FfwZmQ5EKFWdsiRMJszok9CE4DfRk0aCfyx%2F%2F8wmhNXSfTSn1qirqkcVk%2B%2FIywF9JCj3mTO3OAdXjDtY9n5xFf56nKe0aqkDnzIrt3VueVaSk882SdIRuMxLul15h%2ByPkeN79tJGNdSMExPuFNDdalMS43OV6t2crL3i4rnQst4nMHhNlUkkzB4U2y7GZj1pPVWwwMxDFzLxW9XxQQuxEAbxAQv0GVgaHvkIxJfKuHlHnz%2Fj0IZZHALuWI2%2FlJYfiKsmxdC1wLoTrytJUYm2qF34iHEnwOjS%2BHz6PcAx4g6cqQqt%2FPCA48DWa0W%2BoT6u%2FA%2FeyITWXnHMs8Rn%2F71S0DN3EKRd%2Fo1weSzL35IcKa84KC9jqC2FLd%2B2nqKWuvdcrdnVYL27IZr63REjXPH38AEenjO0p37l6IDtU4NihjumvX43CxV7CqgOvAHrY6dTFc76ZZKIutNWTjC%2Bo6O%2BBjqkAXEpw6Ncr%2BawJ1d8mOWw48Jsn6Ba66QM%2B7urIHhA7h0heCtyArTXRfHru3nBsEZN9Fye9EEQXCrY2HmBM7zcOMa0q7c5Q9OSQvA7CNohPYV%2F35BlL4ojXjWl1Tpml5zrAa9%2FYEKXhYB%2BF3sOlOV5OTdLT5AEGV2SXDpCZHsc01VyO%2FkoCF0xg6CgycWoE5AnMA1hbVcoOn57SVQkfbmDAC%2BFX3JZ&X-Amz-Signature=e3a27b817598c788ad0f5d38eb0344633ddfd7ed6ddb8f1d1a6f6796fadd4ade&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW3ANAC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9UcTBfm%2FS8wsgjzzvTYOFjoLFe06zoE14wJDQZuBbXQIhALTL9k06oJZr9SOgnF40kbKXB9OTaddaHHpZRVVwx45lKv8DCCAQABoMNjM3NDIzMTgzODA1Igz80mMWFHlZzsmT2%2BAq3APoZAkke9IgDpka8P2Pk4jLJnriqcGEMn7bVUx62qzdrgqCKBS%2FYaQuODExCFyqCOD5hyUqOP%2BxGnFPoErfIIrGjDIh%2BMNwIl677k7uVcuJhV3xKlVLBZQdrTLJ9KkMoTaWU2a2zxRHozUZRrMY0VHXJAWhWw4VCMbVPxyxH%2FNCYA4n%2FfwZmQ5EKFWdsiRMJszok9CE4DfRk0aCfyx%2F%2F8wmhNXSfTSn1qirqkcVk%2B%2FIywF9JCj3mTO3OAdXjDtY9n5xFf56nKe0aqkDnzIrt3VueVaSk882SdIRuMxLul15h%2ByPkeN79tJGNdSMExPuFNDdalMS43OV6t2crL3i4rnQst4nMHhNlUkkzB4U2y7GZj1pPVWwwMxDFzLxW9XxQQuxEAbxAQv0GVgaHvkIxJfKuHlHnz%2Fj0IZZHALuWI2%2FlJYfiKsmxdC1wLoTrytJUYm2qF34iHEnwOjS%2BHz6PcAx4g6cqQqt%2FPCA48DWa0W%2BoT6u%2FA%2FeyITWXnHMs8Rn%2F71S0DN3EKRd%2Fo1weSzL35IcKa84KC9jqC2FLd%2B2nqKWuvdcrdnVYL27IZr63REjXPH38AEenjO0p37l6IDtU4NihjumvX43CxV7CqgOvAHrY6dTFc76ZZKIutNWTjC%2Bo6O%2BBjqkAXEpw6Ncr%2BawJ1d8mOWw48Jsn6Ba66QM%2B7urIHhA7h0heCtyArTXRfHru3nBsEZN9Fye9EEQXCrY2HmBM7zcOMa0q7c5Q9OSQvA7CNohPYV%2F35BlL4ojXjWl1Tpml5zrAa9%2FYEKXhYB%2BF3sOlOV5OTdLT5AEGV2SXDpCZHsc01VyO%2FkoCF0xg6CgycWoE5AnMA1hbVcoOn57SVQkfbmDAC%2BFX3JZ&X-Amz-Signature=0b9262ac6ae244e70b2909b57588e83ff9d474cdb3b553c5309d251f827f0c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRW3ANAC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9UcTBfm%2FS8wsgjzzvTYOFjoLFe06zoE14wJDQZuBbXQIhALTL9k06oJZr9SOgnF40kbKXB9OTaddaHHpZRVVwx45lKv8DCCAQABoMNjM3NDIzMTgzODA1Igz80mMWFHlZzsmT2%2BAq3APoZAkke9IgDpka8P2Pk4jLJnriqcGEMn7bVUx62qzdrgqCKBS%2FYaQuODExCFyqCOD5hyUqOP%2BxGnFPoErfIIrGjDIh%2BMNwIl677k7uVcuJhV3xKlVLBZQdrTLJ9KkMoTaWU2a2zxRHozUZRrMY0VHXJAWhWw4VCMbVPxyxH%2FNCYA4n%2FfwZmQ5EKFWdsiRMJszok9CE4DfRk0aCfyx%2F%2F8wmhNXSfTSn1qirqkcVk%2B%2FIywF9JCj3mTO3OAdXjDtY9n5xFf56nKe0aqkDnzIrt3VueVaSk882SdIRuMxLul15h%2ByPkeN79tJGNdSMExPuFNDdalMS43OV6t2crL3i4rnQst4nMHhNlUkkzB4U2y7GZj1pPVWwwMxDFzLxW9XxQQuxEAbxAQv0GVgaHvkIxJfKuHlHnz%2Fj0IZZHALuWI2%2FlJYfiKsmxdC1wLoTrytJUYm2qF34iHEnwOjS%2BHz6PcAx4g6cqQqt%2FPCA48DWa0W%2BoT6u%2FA%2FeyITWXnHMs8Rn%2F71S0DN3EKRd%2Fo1weSzL35IcKa84KC9jqC2FLd%2B2nqKWuvdcrdnVYL27IZr63REjXPH38AEenjO0p37l6IDtU4NihjumvX43CxV7CqgOvAHrY6dTFc76ZZKIutNWTjC%2Bo6O%2BBjqkAXEpw6Ncr%2BawJ1d8mOWw48Jsn6Ba66QM%2B7urIHhA7h0heCtyArTXRfHru3nBsEZN9Fye9EEQXCrY2HmBM7zcOMa0q7c5Q9OSQvA7CNohPYV%2F35BlL4ojXjWl1Tpml5zrAa9%2FYEKXhYB%2BF3sOlOV5OTdLT5AEGV2SXDpCZHsc01VyO%2FkoCF0xg6CgycWoE5AnMA1hbVcoOn57SVQkfbmDAC%2BFX3JZ&X-Amz-Signature=35ba7bf11d8352fc1d5ecbe1b885206e1b04c52e9d5015283bfb8e9daa7b12f7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
