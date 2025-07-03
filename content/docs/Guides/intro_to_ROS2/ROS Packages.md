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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKGFQVTY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGsW8%2BoR4Wl%2Btg0sGvxFYACACy1h3X1YzUhyWJQ8JiUDAiAMAN%2B7lIIJdxi5a1RwBTeM8vDhknwDoA3KuGcK4y66oyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMZdj3xP7%2FoRr3tgwOKtwDVMMrBdfardKE8T2QWmrmPcbVqD9SRGmFYq1rR0s%2By1Ds1sVdkIWYnQviMQ0Adt1LQNEGCsI1vOpKBjPlEaky8%2BSvVnNfJfj3ueT9Mu4WbCTEgbSgUygoSauj2GPygShhP3AMbJ7oOfaL0xSIlC%2BeeoZuu5wKKJ4xHYD2VZ80FAN2bs%2F%2BFOvP9iHYmyN%2BNVWwJWlW%2BXxVGcNi6iwH7fTEmYv1VKFQWn8CXfVMdSpJmaqMFKY5YSD1ldmDL4d3VILYXwjeEonzcQiJOPxEFoDRac5Pu86%2BzVkbpLln0ddJ%2FHYE%2FIx3pH9ZSSN7%2BRAEee69aFURLSbyeVS44zE9NarNCQcGfiCF%2FQVD9uzxZ6yiX27%2BcKJvtFFuG31cNjEtq%2B1V81BEP9CZRWvmuKzbKoZmQwfAIJQfCnyt0Me%2B%2F52biX5EcrGXiuZ9%2B9VjoM1kU%2B5w1W06zWJGEipWCEHt5EnqW3ZBackoTi4oEN3EqYPK8Q2rpFddff3vITLvdV4XM3Udn%2FWA92g7GlNwaUeI9lMTYq2vi2OvY3gKVJqGc16pPnFHPBefiACgCpEXb%2FN3QUjcWF9%2Bk21f3YKSZqFXIOl01O%2FEg8K2TCXxYvon1fzURPJBq5aa6kuVYeY%2FGuUwqomZwwY6pgE%2FNDbvy2UdxcwihqgIzyBaLZnIjL%2FwtKAwMFCIIMRlGa430iMvqvhq40Ob1doaSZQVS9eOLYBcjusmz5SmHDK19FgPk1AAIJCXauoB%2FmRmpw1bxWHZcY5U6Y01tHd%2BbY%2FFCMPRa%2BWJHdlcOgVPeDtOIUcM3JXL0L%2FmXNNyZTJPfIA4krHqy%2FiYkBNz5sMaBTASwlw8Je6U3qdeJB1rxAOT%2BHcCSboD&X-Amz-Signature=a016d594652584d1fcf747a9ff2b2a9b8677111a6afdc0115e8d8355f175a14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKGFQVTY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGsW8%2BoR4Wl%2Btg0sGvxFYACACy1h3X1YzUhyWJQ8JiUDAiAMAN%2B7lIIJdxi5a1RwBTeM8vDhknwDoA3KuGcK4y66oyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMZdj3xP7%2FoRr3tgwOKtwDVMMrBdfardKE8T2QWmrmPcbVqD9SRGmFYq1rR0s%2By1Ds1sVdkIWYnQviMQ0Adt1LQNEGCsI1vOpKBjPlEaky8%2BSvVnNfJfj3ueT9Mu4WbCTEgbSgUygoSauj2GPygShhP3AMbJ7oOfaL0xSIlC%2BeeoZuu5wKKJ4xHYD2VZ80FAN2bs%2F%2BFOvP9iHYmyN%2BNVWwJWlW%2BXxVGcNi6iwH7fTEmYv1VKFQWn8CXfVMdSpJmaqMFKY5YSD1ldmDL4d3VILYXwjeEonzcQiJOPxEFoDRac5Pu86%2BzVkbpLln0ddJ%2FHYE%2FIx3pH9ZSSN7%2BRAEee69aFURLSbyeVS44zE9NarNCQcGfiCF%2FQVD9uzxZ6yiX27%2BcKJvtFFuG31cNjEtq%2B1V81BEP9CZRWvmuKzbKoZmQwfAIJQfCnyt0Me%2B%2F52biX5EcrGXiuZ9%2B9VjoM1kU%2B5w1W06zWJGEipWCEHt5EnqW3ZBackoTi4oEN3EqYPK8Q2rpFddff3vITLvdV4XM3Udn%2FWA92g7GlNwaUeI9lMTYq2vi2OvY3gKVJqGc16pPnFHPBefiACgCpEXb%2FN3QUjcWF9%2Bk21f3YKSZqFXIOl01O%2FEg8K2TCXxYvon1fzURPJBq5aa6kuVYeY%2FGuUwqomZwwY6pgE%2FNDbvy2UdxcwihqgIzyBaLZnIjL%2FwtKAwMFCIIMRlGa430iMvqvhq40Ob1doaSZQVS9eOLYBcjusmz5SmHDK19FgPk1AAIJCXauoB%2FmRmpw1bxWHZcY5U6Y01tHd%2BbY%2FFCMPRa%2BWJHdlcOgVPeDtOIUcM3JXL0L%2FmXNNyZTJPfIA4krHqy%2FiYkBNz5sMaBTASwlw8Je6U3qdeJB1rxAOT%2BHcCSboD&X-Amz-Signature=db79579f0e4e290c2a623f9437e04f7dc5dc80d7bd394395cbfb9b284e7fac4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKGFQVTY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGsW8%2BoR4Wl%2Btg0sGvxFYACACy1h3X1YzUhyWJQ8JiUDAiAMAN%2B7lIIJdxi5a1RwBTeM8vDhknwDoA3KuGcK4y66oyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMZdj3xP7%2FoRr3tgwOKtwDVMMrBdfardKE8T2QWmrmPcbVqD9SRGmFYq1rR0s%2By1Ds1sVdkIWYnQviMQ0Adt1LQNEGCsI1vOpKBjPlEaky8%2BSvVnNfJfj3ueT9Mu4WbCTEgbSgUygoSauj2GPygShhP3AMbJ7oOfaL0xSIlC%2BeeoZuu5wKKJ4xHYD2VZ80FAN2bs%2F%2BFOvP9iHYmyN%2BNVWwJWlW%2BXxVGcNi6iwH7fTEmYv1VKFQWn8CXfVMdSpJmaqMFKY5YSD1ldmDL4d3VILYXwjeEonzcQiJOPxEFoDRac5Pu86%2BzVkbpLln0ddJ%2FHYE%2FIx3pH9ZSSN7%2BRAEee69aFURLSbyeVS44zE9NarNCQcGfiCF%2FQVD9uzxZ6yiX27%2BcKJvtFFuG31cNjEtq%2B1V81BEP9CZRWvmuKzbKoZmQwfAIJQfCnyt0Me%2B%2F52biX5EcrGXiuZ9%2B9VjoM1kU%2B5w1W06zWJGEipWCEHt5EnqW3ZBackoTi4oEN3EqYPK8Q2rpFddff3vITLvdV4XM3Udn%2FWA92g7GlNwaUeI9lMTYq2vi2OvY3gKVJqGc16pPnFHPBefiACgCpEXb%2FN3QUjcWF9%2Bk21f3YKSZqFXIOl01O%2FEg8K2TCXxYvon1fzURPJBq5aa6kuVYeY%2FGuUwqomZwwY6pgE%2FNDbvy2UdxcwihqgIzyBaLZnIjL%2FwtKAwMFCIIMRlGa430iMvqvhq40Ob1doaSZQVS9eOLYBcjusmz5SmHDK19FgPk1AAIJCXauoB%2FmRmpw1bxWHZcY5U6Y01tHd%2BbY%2FFCMPRa%2BWJHdlcOgVPeDtOIUcM3JXL0L%2FmXNNyZTJPfIA4krHqy%2FiYkBNz5sMaBTASwlw8Je6U3qdeJB1rxAOT%2BHcCSboD&X-Amz-Signature=000bb43950422f2a9a90e72be705590d47c3cd5c9d0d6fd7e3d349289457492a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKGFQVTY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGsW8%2BoR4Wl%2Btg0sGvxFYACACy1h3X1YzUhyWJQ8JiUDAiAMAN%2B7lIIJdxi5a1RwBTeM8vDhknwDoA3KuGcK4y66oyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMZdj3xP7%2FoRr3tgwOKtwDVMMrBdfardKE8T2QWmrmPcbVqD9SRGmFYq1rR0s%2By1Ds1sVdkIWYnQviMQ0Adt1LQNEGCsI1vOpKBjPlEaky8%2BSvVnNfJfj3ueT9Mu4WbCTEgbSgUygoSauj2GPygShhP3AMbJ7oOfaL0xSIlC%2BeeoZuu5wKKJ4xHYD2VZ80FAN2bs%2F%2BFOvP9iHYmyN%2BNVWwJWlW%2BXxVGcNi6iwH7fTEmYv1VKFQWn8CXfVMdSpJmaqMFKY5YSD1ldmDL4d3VILYXwjeEonzcQiJOPxEFoDRac5Pu86%2BzVkbpLln0ddJ%2FHYE%2FIx3pH9ZSSN7%2BRAEee69aFURLSbyeVS44zE9NarNCQcGfiCF%2FQVD9uzxZ6yiX27%2BcKJvtFFuG31cNjEtq%2B1V81BEP9CZRWvmuKzbKoZmQwfAIJQfCnyt0Me%2B%2F52biX5EcrGXiuZ9%2B9VjoM1kU%2B5w1W06zWJGEipWCEHt5EnqW3ZBackoTi4oEN3EqYPK8Q2rpFddff3vITLvdV4XM3Udn%2FWA92g7GlNwaUeI9lMTYq2vi2OvY3gKVJqGc16pPnFHPBefiACgCpEXb%2FN3QUjcWF9%2Bk21f3YKSZqFXIOl01O%2FEg8K2TCXxYvon1fzURPJBq5aa6kuVYeY%2FGuUwqomZwwY6pgE%2FNDbvy2UdxcwihqgIzyBaLZnIjL%2FwtKAwMFCIIMRlGa430iMvqvhq40Ob1doaSZQVS9eOLYBcjusmz5SmHDK19FgPk1AAIJCXauoB%2FmRmpw1bxWHZcY5U6Y01tHd%2BbY%2FFCMPRa%2BWJHdlcOgVPeDtOIUcM3JXL0L%2FmXNNyZTJPfIA4krHqy%2FiYkBNz5sMaBTASwlw8Je6U3qdeJB1rxAOT%2BHcCSboD&X-Amz-Signature=32918a3d5d806d922e7a919c762dda8d3cdddb42650b3c19cbe9e7c24b42b361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKGFQVTY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGsW8%2BoR4Wl%2Btg0sGvxFYACACy1h3X1YzUhyWJQ8JiUDAiAMAN%2B7lIIJdxi5a1RwBTeM8vDhknwDoA3KuGcK4y66oyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMZdj3xP7%2FoRr3tgwOKtwDVMMrBdfardKE8T2QWmrmPcbVqD9SRGmFYq1rR0s%2By1Ds1sVdkIWYnQviMQ0Adt1LQNEGCsI1vOpKBjPlEaky8%2BSvVnNfJfj3ueT9Mu4WbCTEgbSgUygoSauj2GPygShhP3AMbJ7oOfaL0xSIlC%2BeeoZuu5wKKJ4xHYD2VZ80FAN2bs%2F%2BFOvP9iHYmyN%2BNVWwJWlW%2BXxVGcNi6iwH7fTEmYv1VKFQWn8CXfVMdSpJmaqMFKY5YSD1ldmDL4d3VILYXwjeEonzcQiJOPxEFoDRac5Pu86%2BzVkbpLln0ddJ%2FHYE%2FIx3pH9ZSSN7%2BRAEee69aFURLSbyeVS44zE9NarNCQcGfiCF%2FQVD9uzxZ6yiX27%2BcKJvtFFuG31cNjEtq%2B1V81BEP9CZRWvmuKzbKoZmQwfAIJQfCnyt0Me%2B%2F52biX5EcrGXiuZ9%2B9VjoM1kU%2B5w1W06zWJGEipWCEHt5EnqW3ZBackoTi4oEN3EqYPK8Q2rpFddff3vITLvdV4XM3Udn%2FWA92g7GlNwaUeI9lMTYq2vi2OvY3gKVJqGc16pPnFHPBefiACgCpEXb%2FN3QUjcWF9%2Bk21f3YKSZqFXIOl01O%2FEg8K2TCXxYvon1fzURPJBq5aa6kuVYeY%2FGuUwqomZwwY6pgE%2FNDbvy2UdxcwihqgIzyBaLZnIjL%2FwtKAwMFCIIMRlGa430iMvqvhq40Ob1doaSZQVS9eOLYBcjusmz5SmHDK19FgPk1AAIJCXauoB%2FmRmpw1bxWHZcY5U6Y01tHd%2BbY%2FFCMPRa%2BWJHdlcOgVPeDtOIUcM3JXL0L%2FmXNNyZTJPfIA4krHqy%2FiYkBNz5sMaBTASwlw8Je6U3qdeJB1rxAOT%2BHcCSboD&X-Amz-Signature=7ed4e9529de749ab5c1e6099b1e90852c9cb7a18cafc20baffe1c665af6a2a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKGFQVTY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGsW8%2BoR4Wl%2Btg0sGvxFYACACy1h3X1YzUhyWJQ8JiUDAiAMAN%2B7lIIJdxi5a1RwBTeM8vDhknwDoA3KuGcK4y66oyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMZdj3xP7%2FoRr3tgwOKtwDVMMrBdfardKE8T2QWmrmPcbVqD9SRGmFYq1rR0s%2By1Ds1sVdkIWYnQviMQ0Adt1LQNEGCsI1vOpKBjPlEaky8%2BSvVnNfJfj3ueT9Mu4WbCTEgbSgUygoSauj2GPygShhP3AMbJ7oOfaL0xSIlC%2BeeoZuu5wKKJ4xHYD2VZ80FAN2bs%2F%2BFOvP9iHYmyN%2BNVWwJWlW%2BXxVGcNi6iwH7fTEmYv1VKFQWn8CXfVMdSpJmaqMFKY5YSD1ldmDL4d3VILYXwjeEonzcQiJOPxEFoDRac5Pu86%2BzVkbpLln0ddJ%2FHYE%2FIx3pH9ZSSN7%2BRAEee69aFURLSbyeVS44zE9NarNCQcGfiCF%2FQVD9uzxZ6yiX27%2BcKJvtFFuG31cNjEtq%2B1V81BEP9CZRWvmuKzbKoZmQwfAIJQfCnyt0Me%2B%2F52biX5EcrGXiuZ9%2B9VjoM1kU%2B5w1W06zWJGEipWCEHt5EnqW3ZBackoTi4oEN3EqYPK8Q2rpFddff3vITLvdV4XM3Udn%2FWA92g7GlNwaUeI9lMTYq2vi2OvY3gKVJqGc16pPnFHPBefiACgCpEXb%2FN3QUjcWF9%2Bk21f3YKSZqFXIOl01O%2FEg8K2TCXxYvon1fzURPJBq5aa6kuVYeY%2FGuUwqomZwwY6pgE%2FNDbvy2UdxcwihqgIzyBaLZnIjL%2FwtKAwMFCIIMRlGa430iMvqvhq40Ob1doaSZQVS9eOLYBcjusmz5SmHDK19FgPk1AAIJCXauoB%2FmRmpw1bxWHZcY5U6Y01tHd%2BbY%2FFCMPRa%2BWJHdlcOgVPeDtOIUcM3JXL0L%2FmXNNyZTJPfIA4krHqy%2FiYkBNz5sMaBTASwlw8Je6U3qdeJB1rxAOT%2BHcCSboD&X-Amz-Signature=edb25fc5c7b28592ceb6474fed07f5d21fe809364ad788ff0769be193979cba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKGFQVTY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGsW8%2BoR4Wl%2Btg0sGvxFYACACy1h3X1YzUhyWJQ8JiUDAiAMAN%2B7lIIJdxi5a1RwBTeM8vDhknwDoA3KuGcK4y66oyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMZdj3xP7%2FoRr3tgwOKtwDVMMrBdfardKE8T2QWmrmPcbVqD9SRGmFYq1rR0s%2By1Ds1sVdkIWYnQviMQ0Adt1LQNEGCsI1vOpKBjPlEaky8%2BSvVnNfJfj3ueT9Mu4WbCTEgbSgUygoSauj2GPygShhP3AMbJ7oOfaL0xSIlC%2BeeoZuu5wKKJ4xHYD2VZ80FAN2bs%2F%2BFOvP9iHYmyN%2BNVWwJWlW%2BXxVGcNi6iwH7fTEmYv1VKFQWn8CXfVMdSpJmaqMFKY5YSD1ldmDL4d3VILYXwjeEonzcQiJOPxEFoDRac5Pu86%2BzVkbpLln0ddJ%2FHYE%2FIx3pH9ZSSN7%2BRAEee69aFURLSbyeVS44zE9NarNCQcGfiCF%2FQVD9uzxZ6yiX27%2BcKJvtFFuG31cNjEtq%2B1V81BEP9CZRWvmuKzbKoZmQwfAIJQfCnyt0Me%2B%2F52biX5EcrGXiuZ9%2B9VjoM1kU%2B5w1W06zWJGEipWCEHt5EnqW3ZBackoTi4oEN3EqYPK8Q2rpFddff3vITLvdV4XM3Udn%2FWA92g7GlNwaUeI9lMTYq2vi2OvY3gKVJqGc16pPnFHPBefiACgCpEXb%2FN3QUjcWF9%2Bk21f3YKSZqFXIOl01O%2FEg8K2TCXxYvon1fzURPJBq5aa6kuVYeY%2FGuUwqomZwwY6pgE%2FNDbvy2UdxcwihqgIzyBaLZnIjL%2FwtKAwMFCIIMRlGa430iMvqvhq40Ob1doaSZQVS9eOLYBcjusmz5SmHDK19FgPk1AAIJCXauoB%2FmRmpw1bxWHZcY5U6Y01tHd%2BbY%2FFCMPRa%2BWJHdlcOgVPeDtOIUcM3JXL0L%2FmXNNyZTJPfIA4krHqy%2FiYkBNz5sMaBTASwlw8Je6U3qdeJB1rxAOT%2BHcCSboD&X-Amz-Signature=9498ab4a165d15f4c914ec97f1b2b25dc7aef6834eab08fa2971b4fda218ff09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
