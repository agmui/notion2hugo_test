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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RR7OE2U%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIE3hwufYGtNGJQTuAEvm2IaUQTU4sqUsssmjauCwjftDAiEA1jz29hfDdLpqOR4zAcB18tpt%2B9FonA3YOdl9AcC1f6MqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjkVk7YvNZJ06aSxircA%2FxC830Ft9Dupp31%2FkWHDt8QBjMYD2k1YaikHDrGahucegfjmv1Yy2DN8nE8R%2ByWtkw1hhSSDRAk7%2BTtJXlvnE2SKPdZdGlL%2B2FIGmJsi9u%2BFvLQvmcIx7Mjjg7yZL6RNzVtnR85Jf8eu8E1gu8Hw3fnBuAvVTXcEzxIkGJS%2BcJjPRegK5XQdXbVa5GIBTeYFIxNU%2FUbvX9u8APYoLIm2CzM%2FRergWD56KYIbd7x1gczddWBrLovNDahtmfSEEOiulCJHMQDyPGkYhXBNL5kBXcGMf5pqG1G7PERr50RJtfqVv6ExurWSu3rGhNqqGnZx4Vuc6NAnwOz4MZP5%2FvZxXUxAaGKKJoShCMHpMU38SZKoxhUe%2BtLGOq0qL3zm2E9wu7nK5mWJx0IcVhrLm7%2BdNYhpDFrdNK6m%2FTOQ5e1uXgATGnXJQB%2BX1Z6Q27Nen8X%2FpIPmudbiqyPU0Mgq%2Fb59Mj79KTunhm5xDs2fUxQGZJsW4BvJkyTx7uT1H%2BGozlU75EzT6bz0VSP0aI7MGzTyNL0188lASjx3bhjyumwliLR54igyYj4IZNRHcGsSgjBenVDKGznPszN2EP%2FIufsSu91KZn2s1Iv5eVuEk93uzYwzlm%2B90v19hjHEu5sML%2BJqsIGOqUB%2BxpZsi6nVvF2pJp%2B7NnnFvW7yPJ9cExwgvFUKq3ZmBzcRvpPsHdLAgUDrixGAuKXmuKcUCn8qT9IRH5CUo4KXGKIOCJOTzzn1iKzi9OvlPs7MRZU%2FD8Q%2BWq0Z8qpLwa5VK9uRMD4jY9H9MMvzQlBGZPa1y42Tp78NTprG4Nq6B0QOn1EPJ13hRAjIZHzEkxEPgEyYuPbpx9sumpV4IewcI6YfXp5&X-Amz-Signature=5fe7d6713ce89f581426398b361e09b615e82eb1f765fef80fab5ea91dd0b37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RR7OE2U%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIE3hwufYGtNGJQTuAEvm2IaUQTU4sqUsssmjauCwjftDAiEA1jz29hfDdLpqOR4zAcB18tpt%2B9FonA3YOdl9AcC1f6MqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjkVk7YvNZJ06aSxircA%2FxC830Ft9Dupp31%2FkWHDt8QBjMYD2k1YaikHDrGahucegfjmv1Yy2DN8nE8R%2ByWtkw1hhSSDRAk7%2BTtJXlvnE2SKPdZdGlL%2B2FIGmJsi9u%2BFvLQvmcIx7Mjjg7yZL6RNzVtnR85Jf8eu8E1gu8Hw3fnBuAvVTXcEzxIkGJS%2BcJjPRegK5XQdXbVa5GIBTeYFIxNU%2FUbvX9u8APYoLIm2CzM%2FRergWD56KYIbd7x1gczddWBrLovNDahtmfSEEOiulCJHMQDyPGkYhXBNL5kBXcGMf5pqG1G7PERr50RJtfqVv6ExurWSu3rGhNqqGnZx4Vuc6NAnwOz4MZP5%2FvZxXUxAaGKKJoShCMHpMU38SZKoxhUe%2BtLGOq0qL3zm2E9wu7nK5mWJx0IcVhrLm7%2BdNYhpDFrdNK6m%2FTOQ5e1uXgATGnXJQB%2BX1Z6Q27Nen8X%2FpIPmudbiqyPU0Mgq%2Fb59Mj79KTunhm5xDs2fUxQGZJsW4BvJkyTx7uT1H%2BGozlU75EzT6bz0VSP0aI7MGzTyNL0188lASjx3bhjyumwliLR54igyYj4IZNRHcGsSgjBenVDKGznPszN2EP%2FIufsSu91KZn2s1Iv5eVuEk93uzYwzlm%2B90v19hjHEu5sML%2BJqsIGOqUB%2BxpZsi6nVvF2pJp%2B7NnnFvW7yPJ9cExwgvFUKq3ZmBzcRvpPsHdLAgUDrixGAuKXmuKcUCn8qT9IRH5CUo4KXGKIOCJOTzzn1iKzi9OvlPs7MRZU%2FD8Q%2BWq0Z8qpLwa5VK9uRMD4jY9H9MMvzQlBGZPa1y42Tp78NTprG4Nq6B0QOn1EPJ13hRAjIZHzEkxEPgEyYuPbpx9sumpV4IewcI6YfXp5&X-Amz-Signature=ca4d393a97b8a17239fa2f9b128d6e805e9a278e3c016bbfba40b87be854f346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RR7OE2U%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIE3hwufYGtNGJQTuAEvm2IaUQTU4sqUsssmjauCwjftDAiEA1jz29hfDdLpqOR4zAcB18tpt%2B9FonA3YOdl9AcC1f6MqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjkVk7YvNZJ06aSxircA%2FxC830Ft9Dupp31%2FkWHDt8QBjMYD2k1YaikHDrGahucegfjmv1Yy2DN8nE8R%2ByWtkw1hhSSDRAk7%2BTtJXlvnE2SKPdZdGlL%2B2FIGmJsi9u%2BFvLQvmcIx7Mjjg7yZL6RNzVtnR85Jf8eu8E1gu8Hw3fnBuAvVTXcEzxIkGJS%2BcJjPRegK5XQdXbVa5GIBTeYFIxNU%2FUbvX9u8APYoLIm2CzM%2FRergWD56KYIbd7x1gczddWBrLovNDahtmfSEEOiulCJHMQDyPGkYhXBNL5kBXcGMf5pqG1G7PERr50RJtfqVv6ExurWSu3rGhNqqGnZx4Vuc6NAnwOz4MZP5%2FvZxXUxAaGKKJoShCMHpMU38SZKoxhUe%2BtLGOq0qL3zm2E9wu7nK5mWJx0IcVhrLm7%2BdNYhpDFrdNK6m%2FTOQ5e1uXgATGnXJQB%2BX1Z6Q27Nen8X%2FpIPmudbiqyPU0Mgq%2Fb59Mj79KTunhm5xDs2fUxQGZJsW4BvJkyTx7uT1H%2BGozlU75EzT6bz0VSP0aI7MGzTyNL0188lASjx3bhjyumwliLR54igyYj4IZNRHcGsSgjBenVDKGznPszN2EP%2FIufsSu91KZn2s1Iv5eVuEk93uzYwzlm%2B90v19hjHEu5sML%2BJqsIGOqUB%2BxpZsi6nVvF2pJp%2B7NnnFvW7yPJ9cExwgvFUKq3ZmBzcRvpPsHdLAgUDrixGAuKXmuKcUCn8qT9IRH5CUo4KXGKIOCJOTzzn1iKzi9OvlPs7MRZU%2FD8Q%2BWq0Z8qpLwa5VK9uRMD4jY9H9MMvzQlBGZPa1y42Tp78NTprG4Nq6B0QOn1EPJ13hRAjIZHzEkxEPgEyYuPbpx9sumpV4IewcI6YfXp5&X-Amz-Signature=706e5b190826ca54d2d6b4cfad4582e4fcbf5285ec40768e7792e90ab0c407ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RR7OE2U%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIE3hwufYGtNGJQTuAEvm2IaUQTU4sqUsssmjauCwjftDAiEA1jz29hfDdLpqOR4zAcB18tpt%2B9FonA3YOdl9AcC1f6MqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjkVk7YvNZJ06aSxircA%2FxC830Ft9Dupp31%2FkWHDt8QBjMYD2k1YaikHDrGahucegfjmv1Yy2DN8nE8R%2ByWtkw1hhSSDRAk7%2BTtJXlvnE2SKPdZdGlL%2B2FIGmJsi9u%2BFvLQvmcIx7Mjjg7yZL6RNzVtnR85Jf8eu8E1gu8Hw3fnBuAvVTXcEzxIkGJS%2BcJjPRegK5XQdXbVa5GIBTeYFIxNU%2FUbvX9u8APYoLIm2CzM%2FRergWD56KYIbd7x1gczddWBrLovNDahtmfSEEOiulCJHMQDyPGkYhXBNL5kBXcGMf5pqG1G7PERr50RJtfqVv6ExurWSu3rGhNqqGnZx4Vuc6NAnwOz4MZP5%2FvZxXUxAaGKKJoShCMHpMU38SZKoxhUe%2BtLGOq0qL3zm2E9wu7nK5mWJx0IcVhrLm7%2BdNYhpDFrdNK6m%2FTOQ5e1uXgATGnXJQB%2BX1Z6Q27Nen8X%2FpIPmudbiqyPU0Mgq%2Fb59Mj79KTunhm5xDs2fUxQGZJsW4BvJkyTx7uT1H%2BGozlU75EzT6bz0VSP0aI7MGzTyNL0188lASjx3bhjyumwliLR54igyYj4IZNRHcGsSgjBenVDKGznPszN2EP%2FIufsSu91KZn2s1Iv5eVuEk93uzYwzlm%2B90v19hjHEu5sML%2BJqsIGOqUB%2BxpZsi6nVvF2pJp%2B7NnnFvW7yPJ9cExwgvFUKq3ZmBzcRvpPsHdLAgUDrixGAuKXmuKcUCn8qT9IRH5CUo4KXGKIOCJOTzzn1iKzi9OvlPs7MRZU%2FD8Q%2BWq0Z8qpLwa5VK9uRMD4jY9H9MMvzQlBGZPa1y42Tp78NTprG4Nq6B0QOn1EPJ13hRAjIZHzEkxEPgEyYuPbpx9sumpV4IewcI6YfXp5&X-Amz-Signature=b0c73d7ceb7c229bbdfc414af18ce35f861de41f498a84d05d6dc23babd5c86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RR7OE2U%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIE3hwufYGtNGJQTuAEvm2IaUQTU4sqUsssmjauCwjftDAiEA1jz29hfDdLpqOR4zAcB18tpt%2B9FonA3YOdl9AcC1f6MqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjkVk7YvNZJ06aSxircA%2FxC830Ft9Dupp31%2FkWHDt8QBjMYD2k1YaikHDrGahucegfjmv1Yy2DN8nE8R%2ByWtkw1hhSSDRAk7%2BTtJXlvnE2SKPdZdGlL%2B2FIGmJsi9u%2BFvLQvmcIx7Mjjg7yZL6RNzVtnR85Jf8eu8E1gu8Hw3fnBuAvVTXcEzxIkGJS%2BcJjPRegK5XQdXbVa5GIBTeYFIxNU%2FUbvX9u8APYoLIm2CzM%2FRergWD56KYIbd7x1gczddWBrLovNDahtmfSEEOiulCJHMQDyPGkYhXBNL5kBXcGMf5pqG1G7PERr50RJtfqVv6ExurWSu3rGhNqqGnZx4Vuc6NAnwOz4MZP5%2FvZxXUxAaGKKJoShCMHpMU38SZKoxhUe%2BtLGOq0qL3zm2E9wu7nK5mWJx0IcVhrLm7%2BdNYhpDFrdNK6m%2FTOQ5e1uXgATGnXJQB%2BX1Z6Q27Nen8X%2FpIPmudbiqyPU0Mgq%2Fb59Mj79KTunhm5xDs2fUxQGZJsW4BvJkyTx7uT1H%2BGozlU75EzT6bz0VSP0aI7MGzTyNL0188lASjx3bhjyumwliLR54igyYj4IZNRHcGsSgjBenVDKGznPszN2EP%2FIufsSu91KZn2s1Iv5eVuEk93uzYwzlm%2B90v19hjHEu5sML%2BJqsIGOqUB%2BxpZsi6nVvF2pJp%2B7NnnFvW7yPJ9cExwgvFUKq3ZmBzcRvpPsHdLAgUDrixGAuKXmuKcUCn8qT9IRH5CUo4KXGKIOCJOTzzn1iKzi9OvlPs7MRZU%2FD8Q%2BWq0Z8qpLwa5VK9uRMD4jY9H9MMvzQlBGZPa1y42Tp78NTprG4Nq6B0QOn1EPJ13hRAjIZHzEkxEPgEyYuPbpx9sumpV4IewcI6YfXp5&X-Amz-Signature=ffe6c90caf1a789276b0b4dfa10b97ad5bb074e843d41d0bc459a6fdd1d976f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RR7OE2U%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIE3hwufYGtNGJQTuAEvm2IaUQTU4sqUsssmjauCwjftDAiEA1jz29hfDdLpqOR4zAcB18tpt%2B9FonA3YOdl9AcC1f6MqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjkVk7YvNZJ06aSxircA%2FxC830Ft9Dupp31%2FkWHDt8QBjMYD2k1YaikHDrGahucegfjmv1Yy2DN8nE8R%2ByWtkw1hhSSDRAk7%2BTtJXlvnE2SKPdZdGlL%2B2FIGmJsi9u%2BFvLQvmcIx7Mjjg7yZL6RNzVtnR85Jf8eu8E1gu8Hw3fnBuAvVTXcEzxIkGJS%2BcJjPRegK5XQdXbVa5GIBTeYFIxNU%2FUbvX9u8APYoLIm2CzM%2FRergWD56KYIbd7x1gczddWBrLovNDahtmfSEEOiulCJHMQDyPGkYhXBNL5kBXcGMf5pqG1G7PERr50RJtfqVv6ExurWSu3rGhNqqGnZx4Vuc6NAnwOz4MZP5%2FvZxXUxAaGKKJoShCMHpMU38SZKoxhUe%2BtLGOq0qL3zm2E9wu7nK5mWJx0IcVhrLm7%2BdNYhpDFrdNK6m%2FTOQ5e1uXgATGnXJQB%2BX1Z6Q27Nen8X%2FpIPmudbiqyPU0Mgq%2Fb59Mj79KTunhm5xDs2fUxQGZJsW4BvJkyTx7uT1H%2BGozlU75EzT6bz0VSP0aI7MGzTyNL0188lASjx3bhjyumwliLR54igyYj4IZNRHcGsSgjBenVDKGznPszN2EP%2FIufsSu91KZn2s1Iv5eVuEk93uzYwzlm%2B90v19hjHEu5sML%2BJqsIGOqUB%2BxpZsi6nVvF2pJp%2B7NnnFvW7yPJ9cExwgvFUKq3ZmBzcRvpPsHdLAgUDrixGAuKXmuKcUCn8qT9IRH5CUo4KXGKIOCJOTzzn1iKzi9OvlPs7MRZU%2FD8Q%2BWq0Z8qpLwa5VK9uRMD4jY9H9MMvzQlBGZPa1y42Tp78NTprG4Nq6B0QOn1EPJ13hRAjIZHzEkxEPgEyYuPbpx9sumpV4IewcI6YfXp5&X-Amz-Signature=6c0c923d610beb45a96abd3b3d8ea34d1b586172a7f971746ac994e9d334963d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RR7OE2U%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIE3hwufYGtNGJQTuAEvm2IaUQTU4sqUsssmjauCwjftDAiEA1jz29hfDdLpqOR4zAcB18tpt%2B9FonA3YOdl9AcC1f6MqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjkVk7YvNZJ06aSxircA%2FxC830Ft9Dupp31%2FkWHDt8QBjMYD2k1YaikHDrGahucegfjmv1Yy2DN8nE8R%2ByWtkw1hhSSDRAk7%2BTtJXlvnE2SKPdZdGlL%2B2FIGmJsi9u%2BFvLQvmcIx7Mjjg7yZL6RNzVtnR85Jf8eu8E1gu8Hw3fnBuAvVTXcEzxIkGJS%2BcJjPRegK5XQdXbVa5GIBTeYFIxNU%2FUbvX9u8APYoLIm2CzM%2FRergWD56KYIbd7x1gczddWBrLovNDahtmfSEEOiulCJHMQDyPGkYhXBNL5kBXcGMf5pqG1G7PERr50RJtfqVv6ExurWSu3rGhNqqGnZx4Vuc6NAnwOz4MZP5%2FvZxXUxAaGKKJoShCMHpMU38SZKoxhUe%2BtLGOq0qL3zm2E9wu7nK5mWJx0IcVhrLm7%2BdNYhpDFrdNK6m%2FTOQ5e1uXgATGnXJQB%2BX1Z6Q27Nen8X%2FpIPmudbiqyPU0Mgq%2Fb59Mj79KTunhm5xDs2fUxQGZJsW4BvJkyTx7uT1H%2BGozlU75EzT6bz0VSP0aI7MGzTyNL0188lASjx3bhjyumwliLR54igyYj4IZNRHcGsSgjBenVDKGznPszN2EP%2FIufsSu91KZn2s1Iv5eVuEk93uzYwzlm%2B90v19hjHEu5sML%2BJqsIGOqUB%2BxpZsi6nVvF2pJp%2B7NnnFvW7yPJ9cExwgvFUKq3ZmBzcRvpPsHdLAgUDrixGAuKXmuKcUCn8qT9IRH5CUo4KXGKIOCJOTzzn1iKzi9OvlPs7MRZU%2FD8Q%2BWq0Z8qpLwa5VK9uRMD4jY9H9MMvzQlBGZPa1y42Tp78NTprG4Nq6B0QOn1EPJ13hRAjIZHzEkxEPgEyYuPbpx9sumpV4IewcI6YfXp5&X-Amz-Signature=c858f06b3b80eb6009dd695e7740f6d726412af8b1e9f1a1accd5c437206b6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
