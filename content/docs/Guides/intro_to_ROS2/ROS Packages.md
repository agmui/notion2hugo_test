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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RE7MW5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BNlJzMkAhJ0h%2Fsn%2Bc7%2BPIGiYqRo%2B%2FQzl8mNYoXWP7VAiA3MOTe8IGudEprmxE2YEo9lZdjhicLNl6878wM%2BJTDMCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP66eykb3%2B6O6EMHLKtwDE502I6q%2FsKmzrkRRrLSzs6w2kMnlHeVsxWbsIGRWaJCxwss3k8KQ6RSO6fVXBrBYdsqPhu656kmf86rGJ2M8yclp6261s4EGCiX74FJ3yTaTuNIK7co5HiwAfs64VqT1if%2FBxkxWoABXcdUy52L1P40EKLCtEZH8Y30ULr6Hs05tMgK1jltgtyhwCX%2BIEQ7Lk0NIOEAR4MA9vJEPNAjL0lFitGOqqqzRW%2Bf5Yqj9N6xmMW0G7U9rhsW%2BcMQQhuepQx6c1IottpQV1pGkbsPns4w9hO0JJFzaxz33K5I6HoqcQlJ6Uc1PNpFtrkqGhLry7c8g%2FmL4uHpZ0j4IcK0J0VDBdpS%2BPDmMQ7xQHL7ff3VmkybHxLOu5OqSRMHjOfSQYPAwLoH8QdtA8BSoLSS0iLNM3D4pTCSy8Chg%2FHqAuSQD83KkKGK2pe%2FVxEzrvhn6RskCrjEKrrrPvBThXXEqlb%2F4PRPl4WFcqvtL3GceMpbzNgbXphWJpFw5bae0Qwe3b%2FvITZ8SYhT6aUaHoscbYvjQ97fJEgobaiOU6NOWPgTVP6hOP0c9g1MDqOSsZES0h8qzG%2FFJBsp%2FhaY9omb%2BZItX5r1uEHc5JfJRk9FL%2BFv2RV3P8Zt3gUMC1UAw9PvBwwY6pgGEy0y6U3D85jWE%2Fx97Q%2BzMhmYGK%2FMnkybg38LruwuLs%2Bc2i8n4RrIPEYO29eXgoyAo93En%2F0o2vlwMYQx07Q7RTtOYOSaxiaJ7PmW77l88pAP%2BnhIjv%2BNSnlR4GdT%2BacIxYTbjpbzMomN09IXkK85uYBCCi7ZMnyfO%2BPAbergAZE8K87ZcBswu5boYrI66k2fWJIw%2BOyhhw7keumX%2FlAeM3hT6KyZ8&X-Amz-Signature=457d3ab5e1c945098f3600b206d5cef5078a22599691071c228ac435bcdadaba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RE7MW5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BNlJzMkAhJ0h%2Fsn%2Bc7%2BPIGiYqRo%2B%2FQzl8mNYoXWP7VAiA3MOTe8IGudEprmxE2YEo9lZdjhicLNl6878wM%2BJTDMCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP66eykb3%2B6O6EMHLKtwDE502I6q%2FsKmzrkRRrLSzs6w2kMnlHeVsxWbsIGRWaJCxwss3k8KQ6RSO6fVXBrBYdsqPhu656kmf86rGJ2M8yclp6261s4EGCiX74FJ3yTaTuNIK7co5HiwAfs64VqT1if%2FBxkxWoABXcdUy52L1P40EKLCtEZH8Y30ULr6Hs05tMgK1jltgtyhwCX%2BIEQ7Lk0NIOEAR4MA9vJEPNAjL0lFitGOqqqzRW%2Bf5Yqj9N6xmMW0G7U9rhsW%2BcMQQhuepQx6c1IottpQV1pGkbsPns4w9hO0JJFzaxz33K5I6HoqcQlJ6Uc1PNpFtrkqGhLry7c8g%2FmL4uHpZ0j4IcK0J0VDBdpS%2BPDmMQ7xQHL7ff3VmkybHxLOu5OqSRMHjOfSQYPAwLoH8QdtA8BSoLSS0iLNM3D4pTCSy8Chg%2FHqAuSQD83KkKGK2pe%2FVxEzrvhn6RskCrjEKrrrPvBThXXEqlb%2F4PRPl4WFcqvtL3GceMpbzNgbXphWJpFw5bae0Qwe3b%2FvITZ8SYhT6aUaHoscbYvjQ97fJEgobaiOU6NOWPgTVP6hOP0c9g1MDqOSsZES0h8qzG%2FFJBsp%2FhaY9omb%2BZItX5r1uEHc5JfJRk9FL%2BFv2RV3P8Zt3gUMC1UAw9PvBwwY6pgGEy0y6U3D85jWE%2Fx97Q%2BzMhmYGK%2FMnkybg38LruwuLs%2Bc2i8n4RrIPEYO29eXgoyAo93En%2F0o2vlwMYQx07Q7RTtOYOSaxiaJ7PmW77l88pAP%2BnhIjv%2BNSnlR4GdT%2BacIxYTbjpbzMomN09IXkK85uYBCCi7ZMnyfO%2BPAbergAZE8K87ZcBswu5boYrI66k2fWJIw%2BOyhhw7keumX%2FlAeM3hT6KyZ8&X-Amz-Signature=921fb8fa96ee7c36d6c40d706db2eee5202364561004e188d5d4c43201a1d0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RE7MW5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BNlJzMkAhJ0h%2Fsn%2Bc7%2BPIGiYqRo%2B%2FQzl8mNYoXWP7VAiA3MOTe8IGudEprmxE2YEo9lZdjhicLNl6878wM%2BJTDMCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP66eykb3%2B6O6EMHLKtwDE502I6q%2FsKmzrkRRrLSzs6w2kMnlHeVsxWbsIGRWaJCxwss3k8KQ6RSO6fVXBrBYdsqPhu656kmf86rGJ2M8yclp6261s4EGCiX74FJ3yTaTuNIK7co5HiwAfs64VqT1if%2FBxkxWoABXcdUy52L1P40EKLCtEZH8Y30ULr6Hs05tMgK1jltgtyhwCX%2BIEQ7Lk0NIOEAR4MA9vJEPNAjL0lFitGOqqqzRW%2Bf5Yqj9N6xmMW0G7U9rhsW%2BcMQQhuepQx6c1IottpQV1pGkbsPns4w9hO0JJFzaxz33K5I6HoqcQlJ6Uc1PNpFtrkqGhLry7c8g%2FmL4uHpZ0j4IcK0J0VDBdpS%2BPDmMQ7xQHL7ff3VmkybHxLOu5OqSRMHjOfSQYPAwLoH8QdtA8BSoLSS0iLNM3D4pTCSy8Chg%2FHqAuSQD83KkKGK2pe%2FVxEzrvhn6RskCrjEKrrrPvBThXXEqlb%2F4PRPl4WFcqvtL3GceMpbzNgbXphWJpFw5bae0Qwe3b%2FvITZ8SYhT6aUaHoscbYvjQ97fJEgobaiOU6NOWPgTVP6hOP0c9g1MDqOSsZES0h8qzG%2FFJBsp%2FhaY9omb%2BZItX5r1uEHc5JfJRk9FL%2BFv2RV3P8Zt3gUMC1UAw9PvBwwY6pgGEy0y6U3D85jWE%2Fx97Q%2BzMhmYGK%2FMnkybg38LruwuLs%2Bc2i8n4RrIPEYO29eXgoyAo93En%2F0o2vlwMYQx07Q7RTtOYOSaxiaJ7PmW77l88pAP%2BnhIjv%2BNSnlR4GdT%2BacIxYTbjpbzMomN09IXkK85uYBCCi7ZMnyfO%2BPAbergAZE8K87ZcBswu5boYrI66k2fWJIw%2BOyhhw7keumX%2FlAeM3hT6KyZ8&X-Amz-Signature=ed37de7559d305cfc053a51c22c96fe5490c74aa31b428fcccc6e69a5a71d83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RE7MW5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BNlJzMkAhJ0h%2Fsn%2Bc7%2BPIGiYqRo%2B%2FQzl8mNYoXWP7VAiA3MOTe8IGudEprmxE2YEo9lZdjhicLNl6878wM%2BJTDMCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP66eykb3%2B6O6EMHLKtwDE502I6q%2FsKmzrkRRrLSzs6w2kMnlHeVsxWbsIGRWaJCxwss3k8KQ6RSO6fVXBrBYdsqPhu656kmf86rGJ2M8yclp6261s4EGCiX74FJ3yTaTuNIK7co5HiwAfs64VqT1if%2FBxkxWoABXcdUy52L1P40EKLCtEZH8Y30ULr6Hs05tMgK1jltgtyhwCX%2BIEQ7Lk0NIOEAR4MA9vJEPNAjL0lFitGOqqqzRW%2Bf5Yqj9N6xmMW0G7U9rhsW%2BcMQQhuepQx6c1IottpQV1pGkbsPns4w9hO0JJFzaxz33K5I6HoqcQlJ6Uc1PNpFtrkqGhLry7c8g%2FmL4uHpZ0j4IcK0J0VDBdpS%2BPDmMQ7xQHL7ff3VmkybHxLOu5OqSRMHjOfSQYPAwLoH8QdtA8BSoLSS0iLNM3D4pTCSy8Chg%2FHqAuSQD83KkKGK2pe%2FVxEzrvhn6RskCrjEKrrrPvBThXXEqlb%2F4PRPl4WFcqvtL3GceMpbzNgbXphWJpFw5bae0Qwe3b%2FvITZ8SYhT6aUaHoscbYvjQ97fJEgobaiOU6NOWPgTVP6hOP0c9g1MDqOSsZES0h8qzG%2FFJBsp%2FhaY9omb%2BZItX5r1uEHc5JfJRk9FL%2BFv2RV3P8Zt3gUMC1UAw9PvBwwY6pgGEy0y6U3D85jWE%2Fx97Q%2BzMhmYGK%2FMnkybg38LruwuLs%2Bc2i8n4RrIPEYO29eXgoyAo93En%2F0o2vlwMYQx07Q7RTtOYOSaxiaJ7PmW77l88pAP%2BnhIjv%2BNSnlR4GdT%2BacIxYTbjpbzMomN09IXkK85uYBCCi7ZMnyfO%2BPAbergAZE8K87ZcBswu5boYrI66k2fWJIw%2BOyhhw7keumX%2FlAeM3hT6KyZ8&X-Amz-Signature=6a4acdc3406887d4716ecaa096455b175347d235674e86bfe2f95729b32fc8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RE7MW5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BNlJzMkAhJ0h%2Fsn%2Bc7%2BPIGiYqRo%2B%2FQzl8mNYoXWP7VAiA3MOTe8IGudEprmxE2YEo9lZdjhicLNl6878wM%2BJTDMCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP66eykb3%2B6O6EMHLKtwDE502I6q%2FsKmzrkRRrLSzs6w2kMnlHeVsxWbsIGRWaJCxwss3k8KQ6RSO6fVXBrBYdsqPhu656kmf86rGJ2M8yclp6261s4EGCiX74FJ3yTaTuNIK7co5HiwAfs64VqT1if%2FBxkxWoABXcdUy52L1P40EKLCtEZH8Y30ULr6Hs05tMgK1jltgtyhwCX%2BIEQ7Lk0NIOEAR4MA9vJEPNAjL0lFitGOqqqzRW%2Bf5Yqj9N6xmMW0G7U9rhsW%2BcMQQhuepQx6c1IottpQV1pGkbsPns4w9hO0JJFzaxz33K5I6HoqcQlJ6Uc1PNpFtrkqGhLry7c8g%2FmL4uHpZ0j4IcK0J0VDBdpS%2BPDmMQ7xQHL7ff3VmkybHxLOu5OqSRMHjOfSQYPAwLoH8QdtA8BSoLSS0iLNM3D4pTCSy8Chg%2FHqAuSQD83KkKGK2pe%2FVxEzrvhn6RskCrjEKrrrPvBThXXEqlb%2F4PRPl4WFcqvtL3GceMpbzNgbXphWJpFw5bae0Qwe3b%2FvITZ8SYhT6aUaHoscbYvjQ97fJEgobaiOU6NOWPgTVP6hOP0c9g1MDqOSsZES0h8qzG%2FFJBsp%2FhaY9omb%2BZItX5r1uEHc5JfJRk9FL%2BFv2RV3P8Zt3gUMC1UAw9PvBwwY6pgGEy0y6U3D85jWE%2Fx97Q%2BzMhmYGK%2FMnkybg38LruwuLs%2Bc2i8n4RrIPEYO29eXgoyAo93En%2F0o2vlwMYQx07Q7RTtOYOSaxiaJ7PmW77l88pAP%2BnhIjv%2BNSnlR4GdT%2BacIxYTbjpbzMomN09IXkK85uYBCCi7ZMnyfO%2BPAbergAZE8K87ZcBswu5boYrI66k2fWJIw%2BOyhhw7keumX%2FlAeM3hT6KyZ8&X-Amz-Signature=10f7954de3526de467b8737991bce0a2219bc1f6625131496bd429947d8e3d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RE7MW5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BNlJzMkAhJ0h%2Fsn%2Bc7%2BPIGiYqRo%2B%2FQzl8mNYoXWP7VAiA3MOTe8IGudEprmxE2YEo9lZdjhicLNl6878wM%2BJTDMCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP66eykb3%2B6O6EMHLKtwDE502I6q%2FsKmzrkRRrLSzs6w2kMnlHeVsxWbsIGRWaJCxwss3k8KQ6RSO6fVXBrBYdsqPhu656kmf86rGJ2M8yclp6261s4EGCiX74FJ3yTaTuNIK7co5HiwAfs64VqT1if%2FBxkxWoABXcdUy52L1P40EKLCtEZH8Y30ULr6Hs05tMgK1jltgtyhwCX%2BIEQ7Lk0NIOEAR4MA9vJEPNAjL0lFitGOqqqzRW%2Bf5Yqj9N6xmMW0G7U9rhsW%2BcMQQhuepQx6c1IottpQV1pGkbsPns4w9hO0JJFzaxz33K5I6HoqcQlJ6Uc1PNpFtrkqGhLry7c8g%2FmL4uHpZ0j4IcK0J0VDBdpS%2BPDmMQ7xQHL7ff3VmkybHxLOu5OqSRMHjOfSQYPAwLoH8QdtA8BSoLSS0iLNM3D4pTCSy8Chg%2FHqAuSQD83KkKGK2pe%2FVxEzrvhn6RskCrjEKrrrPvBThXXEqlb%2F4PRPl4WFcqvtL3GceMpbzNgbXphWJpFw5bae0Qwe3b%2FvITZ8SYhT6aUaHoscbYvjQ97fJEgobaiOU6NOWPgTVP6hOP0c9g1MDqOSsZES0h8qzG%2FFJBsp%2FhaY9omb%2BZItX5r1uEHc5JfJRk9FL%2BFv2RV3P8Zt3gUMC1UAw9PvBwwY6pgGEy0y6U3D85jWE%2Fx97Q%2BzMhmYGK%2FMnkybg38LruwuLs%2Bc2i8n4RrIPEYO29eXgoyAo93En%2F0o2vlwMYQx07Q7RTtOYOSaxiaJ7PmW77l88pAP%2BnhIjv%2BNSnlR4GdT%2BacIxYTbjpbzMomN09IXkK85uYBCCi7ZMnyfO%2BPAbergAZE8K87ZcBswu5boYrI66k2fWJIw%2BOyhhw7keumX%2FlAeM3hT6KyZ8&X-Amz-Signature=f84ad4b257eb3face5d1e073a055cb63e3f7963954e27f795084b10fe6c849ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RE7MW5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BNlJzMkAhJ0h%2Fsn%2Bc7%2BPIGiYqRo%2B%2FQzl8mNYoXWP7VAiA3MOTe8IGudEprmxE2YEo9lZdjhicLNl6878wM%2BJTDMCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP66eykb3%2B6O6EMHLKtwDE502I6q%2FsKmzrkRRrLSzs6w2kMnlHeVsxWbsIGRWaJCxwss3k8KQ6RSO6fVXBrBYdsqPhu656kmf86rGJ2M8yclp6261s4EGCiX74FJ3yTaTuNIK7co5HiwAfs64VqT1if%2FBxkxWoABXcdUy52L1P40EKLCtEZH8Y30ULr6Hs05tMgK1jltgtyhwCX%2BIEQ7Lk0NIOEAR4MA9vJEPNAjL0lFitGOqqqzRW%2Bf5Yqj9N6xmMW0G7U9rhsW%2BcMQQhuepQx6c1IottpQV1pGkbsPns4w9hO0JJFzaxz33K5I6HoqcQlJ6Uc1PNpFtrkqGhLry7c8g%2FmL4uHpZ0j4IcK0J0VDBdpS%2BPDmMQ7xQHL7ff3VmkybHxLOu5OqSRMHjOfSQYPAwLoH8QdtA8BSoLSS0iLNM3D4pTCSy8Chg%2FHqAuSQD83KkKGK2pe%2FVxEzrvhn6RskCrjEKrrrPvBThXXEqlb%2F4PRPl4WFcqvtL3GceMpbzNgbXphWJpFw5bae0Qwe3b%2FvITZ8SYhT6aUaHoscbYvjQ97fJEgobaiOU6NOWPgTVP6hOP0c9g1MDqOSsZES0h8qzG%2FFJBsp%2FhaY9omb%2BZItX5r1uEHc5JfJRk9FL%2BFv2RV3P8Zt3gUMC1UAw9PvBwwY6pgGEy0y6U3D85jWE%2Fx97Q%2BzMhmYGK%2FMnkybg38LruwuLs%2Bc2i8n4RrIPEYO29eXgoyAo93En%2F0o2vlwMYQx07Q7RTtOYOSaxiaJ7PmW77l88pAP%2BnhIjv%2BNSnlR4GdT%2BacIxYTbjpbzMomN09IXkK85uYBCCi7ZMnyfO%2BPAbergAZE8K87ZcBswu5boYrI66k2fWJIw%2BOyhhw7keumX%2FlAeM3hT6KyZ8&X-Amz-Signature=55115ef50c5b78b6f0a05bfdac18afd97f9781641e77bd796690012b5823cce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
