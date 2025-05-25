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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBSWZ6U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIQD5O2NKyP7Dl7m89rN5E37ljSE6giK7l7gVTLo01Q9KzAIfSY%2FejVWMUOLO10UTBlhb79rRW%2Foq9AL1rhXA%2BOfD1yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWaVbVy6aXxZ5wI5SKtwDFUNpr2gMGyE65uJzzSTKjgQ8BjMoDp05BOW59%2BY0IN1uC26owa6o8OrOHnfud0FETnCINJkKZ8LoYVT%2F7CRF7v9BOTUjn4eR4gfI%2Bcr1J8IhCpysBjSRAI11KZ9nunUK29BqMFATZTrJbAagR%2Bo3YXr4RElXjJ4R5K9L3KG0U9LR3%2Fx12urp7BS0GFV5NduC2w3HRRDZ6EFbQDlg6kox78anDb71ZymX56v4sN1DZVppcotQ%2Ff3F5Wtm967kLNPJYrvXkcO7jqgn99m%2FhFbButbJwETj6uavnlgHexckJDC53i3g1cgY48OGuHYQslcLxU%2FKK4GTtlcukE1o7LOJzenEm142%2FpCS%2B4QrqomZV7Lf5bs05NYwkxzRgPshNzhIQj0f6vqWIOk3lwuupruXM%2FOLb9672Q7DVm4UO5bpBC4T%2F3gjltAY9CYIPvkM85%2Fel1N3slcoeYsnSTVRpSmusF%2FWhuUgyYQGo%2Bjtf6ZiwpAmrOJBU3tSOANjdH9a5RFzhk2FB0L4%2BrQRHsLi8MzduSpeYGjOPQS8mAPNdhTQT48qIAwt4N2%2FzCwpy5MRvfc6fT9alSDaGcWmPbCNV9kWJg2yr86dYsug8G4YpX0YLNErWs4q4XkCvwvr0TEwppjKwQY6pgEx9uDUqYu02O3ZW2%2BwWPzbzTPWwPEM6ciz2AaiGLDSCJieyFed4%2BRNiAsOKWz8ynFCFsK4My2lZiIKtwSIbUmYQpIR5KgqFQ6ogKn5kTQPvNPr%2B%2FQDSYwunnQhuUTvemR3r5MZXidzpDPoST0vissgY2KVUvASwrpWrr8pAN2jY8u%2BTiKDU5EJxSYssd%2B1GZ5LaQ1uZqXIborjb%2Ft%2BSmo4LKCXaAw9&X-Amz-Signature=d8068ae3096ebf38c066651832ba2ee3a10e3ce502fd11adfb423783041eb8a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBSWZ6U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIQD5O2NKyP7Dl7m89rN5E37ljSE6giK7l7gVTLo01Q9KzAIfSY%2FejVWMUOLO10UTBlhb79rRW%2Foq9AL1rhXA%2BOfD1yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWaVbVy6aXxZ5wI5SKtwDFUNpr2gMGyE65uJzzSTKjgQ8BjMoDp05BOW59%2BY0IN1uC26owa6o8OrOHnfud0FETnCINJkKZ8LoYVT%2F7CRF7v9BOTUjn4eR4gfI%2Bcr1J8IhCpysBjSRAI11KZ9nunUK29BqMFATZTrJbAagR%2Bo3YXr4RElXjJ4R5K9L3KG0U9LR3%2Fx12urp7BS0GFV5NduC2w3HRRDZ6EFbQDlg6kox78anDb71ZymX56v4sN1DZVppcotQ%2Ff3F5Wtm967kLNPJYrvXkcO7jqgn99m%2FhFbButbJwETj6uavnlgHexckJDC53i3g1cgY48OGuHYQslcLxU%2FKK4GTtlcukE1o7LOJzenEm142%2FpCS%2B4QrqomZV7Lf5bs05NYwkxzRgPshNzhIQj0f6vqWIOk3lwuupruXM%2FOLb9672Q7DVm4UO5bpBC4T%2F3gjltAY9CYIPvkM85%2Fel1N3slcoeYsnSTVRpSmusF%2FWhuUgyYQGo%2Bjtf6ZiwpAmrOJBU3tSOANjdH9a5RFzhk2FB0L4%2BrQRHsLi8MzduSpeYGjOPQS8mAPNdhTQT48qIAwt4N2%2FzCwpy5MRvfc6fT9alSDaGcWmPbCNV9kWJg2yr86dYsug8G4YpX0YLNErWs4q4XkCvwvr0TEwppjKwQY6pgEx9uDUqYu02O3ZW2%2BwWPzbzTPWwPEM6ciz2AaiGLDSCJieyFed4%2BRNiAsOKWz8ynFCFsK4My2lZiIKtwSIbUmYQpIR5KgqFQ6ogKn5kTQPvNPr%2B%2FQDSYwunnQhuUTvemR3r5MZXidzpDPoST0vissgY2KVUvASwrpWrr8pAN2jY8u%2BTiKDU5EJxSYssd%2B1GZ5LaQ1uZqXIborjb%2Ft%2BSmo4LKCXaAw9&X-Amz-Signature=aeb5cacb2c48aa64f66fa16b248014c8576a7b19b6f01df1e3f8f92ba0a3b6d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBSWZ6U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIQD5O2NKyP7Dl7m89rN5E37ljSE6giK7l7gVTLo01Q9KzAIfSY%2FejVWMUOLO10UTBlhb79rRW%2Foq9AL1rhXA%2BOfD1yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWaVbVy6aXxZ5wI5SKtwDFUNpr2gMGyE65uJzzSTKjgQ8BjMoDp05BOW59%2BY0IN1uC26owa6o8OrOHnfud0FETnCINJkKZ8LoYVT%2F7CRF7v9BOTUjn4eR4gfI%2Bcr1J8IhCpysBjSRAI11KZ9nunUK29BqMFATZTrJbAagR%2Bo3YXr4RElXjJ4R5K9L3KG0U9LR3%2Fx12urp7BS0GFV5NduC2w3HRRDZ6EFbQDlg6kox78anDb71ZymX56v4sN1DZVppcotQ%2Ff3F5Wtm967kLNPJYrvXkcO7jqgn99m%2FhFbButbJwETj6uavnlgHexckJDC53i3g1cgY48OGuHYQslcLxU%2FKK4GTtlcukE1o7LOJzenEm142%2FpCS%2B4QrqomZV7Lf5bs05NYwkxzRgPshNzhIQj0f6vqWIOk3lwuupruXM%2FOLb9672Q7DVm4UO5bpBC4T%2F3gjltAY9CYIPvkM85%2Fel1N3slcoeYsnSTVRpSmusF%2FWhuUgyYQGo%2Bjtf6ZiwpAmrOJBU3tSOANjdH9a5RFzhk2FB0L4%2BrQRHsLi8MzduSpeYGjOPQS8mAPNdhTQT48qIAwt4N2%2FzCwpy5MRvfc6fT9alSDaGcWmPbCNV9kWJg2yr86dYsug8G4YpX0YLNErWs4q4XkCvwvr0TEwppjKwQY6pgEx9uDUqYu02O3ZW2%2BwWPzbzTPWwPEM6ciz2AaiGLDSCJieyFed4%2BRNiAsOKWz8ynFCFsK4My2lZiIKtwSIbUmYQpIR5KgqFQ6ogKn5kTQPvNPr%2B%2FQDSYwunnQhuUTvemR3r5MZXidzpDPoST0vissgY2KVUvASwrpWrr8pAN2jY8u%2BTiKDU5EJxSYssd%2B1GZ5LaQ1uZqXIborjb%2Ft%2BSmo4LKCXaAw9&X-Amz-Signature=7703bacd3c3731e4420390fccc9f69f10e921b6e5c058ae5ce9f60715cc16bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBSWZ6U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIQD5O2NKyP7Dl7m89rN5E37ljSE6giK7l7gVTLo01Q9KzAIfSY%2FejVWMUOLO10UTBlhb79rRW%2Foq9AL1rhXA%2BOfD1yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWaVbVy6aXxZ5wI5SKtwDFUNpr2gMGyE65uJzzSTKjgQ8BjMoDp05BOW59%2BY0IN1uC26owa6o8OrOHnfud0FETnCINJkKZ8LoYVT%2F7CRF7v9BOTUjn4eR4gfI%2Bcr1J8IhCpysBjSRAI11KZ9nunUK29BqMFATZTrJbAagR%2Bo3YXr4RElXjJ4R5K9L3KG0U9LR3%2Fx12urp7BS0GFV5NduC2w3HRRDZ6EFbQDlg6kox78anDb71ZymX56v4sN1DZVppcotQ%2Ff3F5Wtm967kLNPJYrvXkcO7jqgn99m%2FhFbButbJwETj6uavnlgHexckJDC53i3g1cgY48OGuHYQslcLxU%2FKK4GTtlcukE1o7LOJzenEm142%2FpCS%2B4QrqomZV7Lf5bs05NYwkxzRgPshNzhIQj0f6vqWIOk3lwuupruXM%2FOLb9672Q7DVm4UO5bpBC4T%2F3gjltAY9CYIPvkM85%2Fel1N3slcoeYsnSTVRpSmusF%2FWhuUgyYQGo%2Bjtf6ZiwpAmrOJBU3tSOANjdH9a5RFzhk2FB0L4%2BrQRHsLi8MzduSpeYGjOPQS8mAPNdhTQT48qIAwt4N2%2FzCwpy5MRvfc6fT9alSDaGcWmPbCNV9kWJg2yr86dYsug8G4YpX0YLNErWs4q4XkCvwvr0TEwppjKwQY6pgEx9uDUqYu02O3ZW2%2BwWPzbzTPWwPEM6ciz2AaiGLDSCJieyFed4%2BRNiAsOKWz8ynFCFsK4My2lZiIKtwSIbUmYQpIR5KgqFQ6ogKn5kTQPvNPr%2B%2FQDSYwunnQhuUTvemR3r5MZXidzpDPoST0vissgY2KVUvASwrpWrr8pAN2jY8u%2BTiKDU5EJxSYssd%2B1GZ5LaQ1uZqXIborjb%2Ft%2BSmo4LKCXaAw9&X-Amz-Signature=d2a815dc5d199ce13cce19575b0aed179adfa5e323c6c383ce55d3cbd5d4310e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBSWZ6U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIQD5O2NKyP7Dl7m89rN5E37ljSE6giK7l7gVTLo01Q9KzAIfSY%2FejVWMUOLO10UTBlhb79rRW%2Foq9AL1rhXA%2BOfD1yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWaVbVy6aXxZ5wI5SKtwDFUNpr2gMGyE65uJzzSTKjgQ8BjMoDp05BOW59%2BY0IN1uC26owa6o8OrOHnfud0FETnCINJkKZ8LoYVT%2F7CRF7v9BOTUjn4eR4gfI%2Bcr1J8IhCpysBjSRAI11KZ9nunUK29BqMFATZTrJbAagR%2Bo3YXr4RElXjJ4R5K9L3KG0U9LR3%2Fx12urp7BS0GFV5NduC2w3HRRDZ6EFbQDlg6kox78anDb71ZymX56v4sN1DZVppcotQ%2Ff3F5Wtm967kLNPJYrvXkcO7jqgn99m%2FhFbButbJwETj6uavnlgHexckJDC53i3g1cgY48OGuHYQslcLxU%2FKK4GTtlcukE1o7LOJzenEm142%2FpCS%2B4QrqomZV7Lf5bs05NYwkxzRgPshNzhIQj0f6vqWIOk3lwuupruXM%2FOLb9672Q7DVm4UO5bpBC4T%2F3gjltAY9CYIPvkM85%2Fel1N3slcoeYsnSTVRpSmusF%2FWhuUgyYQGo%2Bjtf6ZiwpAmrOJBU3tSOANjdH9a5RFzhk2FB0L4%2BrQRHsLi8MzduSpeYGjOPQS8mAPNdhTQT48qIAwt4N2%2FzCwpy5MRvfc6fT9alSDaGcWmPbCNV9kWJg2yr86dYsug8G4YpX0YLNErWs4q4XkCvwvr0TEwppjKwQY6pgEx9uDUqYu02O3ZW2%2BwWPzbzTPWwPEM6ciz2AaiGLDSCJieyFed4%2BRNiAsOKWz8ynFCFsK4My2lZiIKtwSIbUmYQpIR5KgqFQ6ogKn5kTQPvNPr%2B%2FQDSYwunnQhuUTvemR3r5MZXidzpDPoST0vissgY2KVUvASwrpWrr8pAN2jY8u%2BTiKDU5EJxSYssd%2B1GZ5LaQ1uZqXIborjb%2Ft%2BSmo4LKCXaAw9&X-Amz-Signature=ed9c9d05b367aac982d3dd5ab352a1560ea9f25f1a6a532a3ceecd10883e1b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBSWZ6U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIQD5O2NKyP7Dl7m89rN5E37ljSE6giK7l7gVTLo01Q9KzAIfSY%2FejVWMUOLO10UTBlhb79rRW%2Foq9AL1rhXA%2BOfD1yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWaVbVy6aXxZ5wI5SKtwDFUNpr2gMGyE65uJzzSTKjgQ8BjMoDp05BOW59%2BY0IN1uC26owa6o8OrOHnfud0FETnCINJkKZ8LoYVT%2F7CRF7v9BOTUjn4eR4gfI%2Bcr1J8IhCpysBjSRAI11KZ9nunUK29BqMFATZTrJbAagR%2Bo3YXr4RElXjJ4R5K9L3KG0U9LR3%2Fx12urp7BS0GFV5NduC2w3HRRDZ6EFbQDlg6kox78anDb71ZymX56v4sN1DZVppcotQ%2Ff3F5Wtm967kLNPJYrvXkcO7jqgn99m%2FhFbButbJwETj6uavnlgHexckJDC53i3g1cgY48OGuHYQslcLxU%2FKK4GTtlcukE1o7LOJzenEm142%2FpCS%2B4QrqomZV7Lf5bs05NYwkxzRgPshNzhIQj0f6vqWIOk3lwuupruXM%2FOLb9672Q7DVm4UO5bpBC4T%2F3gjltAY9CYIPvkM85%2Fel1N3slcoeYsnSTVRpSmusF%2FWhuUgyYQGo%2Bjtf6ZiwpAmrOJBU3tSOANjdH9a5RFzhk2FB0L4%2BrQRHsLi8MzduSpeYGjOPQS8mAPNdhTQT48qIAwt4N2%2FzCwpy5MRvfc6fT9alSDaGcWmPbCNV9kWJg2yr86dYsug8G4YpX0YLNErWs4q4XkCvwvr0TEwppjKwQY6pgEx9uDUqYu02O3ZW2%2BwWPzbzTPWwPEM6ciz2AaiGLDSCJieyFed4%2BRNiAsOKWz8ynFCFsK4My2lZiIKtwSIbUmYQpIR5KgqFQ6ogKn5kTQPvNPr%2B%2FQDSYwunnQhuUTvemR3r5MZXidzpDPoST0vissgY2KVUvASwrpWrr8pAN2jY8u%2BTiKDU5EJxSYssd%2B1GZ5LaQ1uZqXIborjb%2Ft%2BSmo4LKCXaAw9&X-Amz-Signature=f6475b8946fb07cb238f7cf9a863222954f2daad62e9b186aea619c039f55e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBSWZ6U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIQD5O2NKyP7Dl7m89rN5E37ljSE6giK7l7gVTLo01Q9KzAIfSY%2FejVWMUOLO10UTBlhb79rRW%2Foq9AL1rhXA%2BOfD1yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWaVbVy6aXxZ5wI5SKtwDFUNpr2gMGyE65uJzzSTKjgQ8BjMoDp05BOW59%2BY0IN1uC26owa6o8OrOHnfud0FETnCINJkKZ8LoYVT%2F7CRF7v9BOTUjn4eR4gfI%2Bcr1J8IhCpysBjSRAI11KZ9nunUK29BqMFATZTrJbAagR%2Bo3YXr4RElXjJ4R5K9L3KG0U9LR3%2Fx12urp7BS0GFV5NduC2w3HRRDZ6EFbQDlg6kox78anDb71ZymX56v4sN1DZVppcotQ%2Ff3F5Wtm967kLNPJYrvXkcO7jqgn99m%2FhFbButbJwETj6uavnlgHexckJDC53i3g1cgY48OGuHYQslcLxU%2FKK4GTtlcukE1o7LOJzenEm142%2FpCS%2B4QrqomZV7Lf5bs05NYwkxzRgPshNzhIQj0f6vqWIOk3lwuupruXM%2FOLb9672Q7DVm4UO5bpBC4T%2F3gjltAY9CYIPvkM85%2Fel1N3slcoeYsnSTVRpSmusF%2FWhuUgyYQGo%2Bjtf6ZiwpAmrOJBU3tSOANjdH9a5RFzhk2FB0L4%2BrQRHsLi8MzduSpeYGjOPQS8mAPNdhTQT48qIAwt4N2%2FzCwpy5MRvfc6fT9alSDaGcWmPbCNV9kWJg2yr86dYsug8G4YpX0YLNErWs4q4XkCvwvr0TEwppjKwQY6pgEx9uDUqYu02O3ZW2%2BwWPzbzTPWwPEM6ciz2AaiGLDSCJieyFed4%2BRNiAsOKWz8ynFCFsK4My2lZiIKtwSIbUmYQpIR5KgqFQ6ogKn5kTQPvNPr%2B%2FQDSYwunnQhuUTvemR3r5MZXidzpDPoST0vissgY2KVUvASwrpWrr8pAN2jY8u%2BTiKDU5EJxSYssd%2B1GZ5LaQ1uZqXIborjb%2Ft%2BSmo4LKCXaAw9&X-Amz-Signature=45995ad0ed651cf0a8d211b32876483cc4e0dee870c8bc9273ce880906c88247&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
