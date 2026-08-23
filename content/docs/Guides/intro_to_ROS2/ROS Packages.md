---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQ27EA4%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBR%2FZHgMGnT%2Fzf6GZsXvzCoB1DzoUwCtaWJYq6CVD6JvAiEAsB5ZGhDzeEIGQ1oTfq6xzN%2BslsTL4td2nKIDkkpg%2BxsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ2DrBCgfnecjW2DircA%2BNmqiQeHPiIVF97m8atGoif2tfqtXe5ona0mmqo237QCYa1UXqztxBPy7%2BMiCKXMLzHGF%2BxJqAMl2m0cYX019Hxm7nznEjRFmLj2X2vxfZRvXszxa2plz0YjdXNgaxhAI9lVMRgk5fIpzgn2uFVWG7kJvkuVaKn%2FvMPVQ30ed10tetTlfy7TQDRyuuyvLvsRlNnona57EkNq3k73ovP3Cn30Pogg2mpTUloYotKgL2MiHb%2FRNcA4jVouacrYFDYj2sjzYlwMPCbPc0%2BuTGEY578ZwKKN4JvKTnGZjG0GP5zbfTCrfk2rHqfG1PvoayeOq96cD%2FUPYXcDe4sPQG4qR8OLzGaCKg36N5vMxtKtk6kMhppJVvvbgiijFIThdo3m0CfLd0GdbgLFt6%2Bh1nE47pyDWMkuZbgMEnb64Ozxdf2hR%2F48r1LZpNiBaIRwvk%2FE%2Bvaxg%2BRq1JvRLlSDiyxl9HZY3vNIj45VB2vylk5XRnIaDf4MqS3x5ohj5Fj%2BBO1p3%2BzX1%2Fd6QS1Sct7GRbaoX9tUbYsP4gGKim1gqNHzrnmvmY%2FZgqsOJc2s1AwbuOij1B%2BCcPjti7pjGsjzmezpWZ0jbN%2FMgWsPtSUKzCMsTFeLyD0K%2FMOMQ5L62WiMISIqdQGOqUBh127FXhp%2Fh%2BYvkaDkZ1RFey7bUtD0719rlYgTfJSMJJfmB6Deg5W6nLTUq071RfHF5BBwzG386VL1lgAJrNwzJom5mY5dcxM416YKt9iWHgjAVwNVxOO4kdsLxWEq6zpHZonStWgczFIOrPue8Tfx3ilVRZJ7iKRitDOHvo4fr9M55QnMaKwhnUZN6Djt%2Bktguc%2BnBG%2FNK81RXTtksYj1jg5K8JH&X-Amz-Signature=e8ff2c98284ff8f8ecd5ec6464c93fcda08ecce22996acc8a6fe61f6c62d4873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQ27EA4%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBR%2FZHgMGnT%2Fzf6GZsXvzCoB1DzoUwCtaWJYq6CVD6JvAiEAsB5ZGhDzeEIGQ1oTfq6xzN%2BslsTL4td2nKIDkkpg%2BxsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ2DrBCgfnecjW2DircA%2BNmqiQeHPiIVF97m8atGoif2tfqtXe5ona0mmqo237QCYa1UXqztxBPy7%2BMiCKXMLzHGF%2BxJqAMl2m0cYX019Hxm7nznEjRFmLj2X2vxfZRvXszxa2plz0YjdXNgaxhAI9lVMRgk5fIpzgn2uFVWG7kJvkuVaKn%2FvMPVQ30ed10tetTlfy7TQDRyuuyvLvsRlNnona57EkNq3k73ovP3Cn30Pogg2mpTUloYotKgL2MiHb%2FRNcA4jVouacrYFDYj2sjzYlwMPCbPc0%2BuTGEY578ZwKKN4JvKTnGZjG0GP5zbfTCrfk2rHqfG1PvoayeOq96cD%2FUPYXcDe4sPQG4qR8OLzGaCKg36N5vMxtKtk6kMhppJVvvbgiijFIThdo3m0CfLd0GdbgLFt6%2Bh1nE47pyDWMkuZbgMEnb64Ozxdf2hR%2F48r1LZpNiBaIRwvk%2FE%2Bvaxg%2BRq1JvRLlSDiyxl9HZY3vNIj45VB2vylk5XRnIaDf4MqS3x5ohj5Fj%2BBO1p3%2BzX1%2Fd6QS1Sct7GRbaoX9tUbYsP4gGKim1gqNHzrnmvmY%2FZgqsOJc2s1AwbuOij1B%2BCcPjti7pjGsjzmezpWZ0jbN%2FMgWsPtSUKzCMsTFeLyD0K%2FMOMQ5L62WiMISIqdQGOqUBh127FXhp%2Fh%2BYvkaDkZ1RFey7bUtD0719rlYgTfJSMJJfmB6Deg5W6nLTUq071RfHF5BBwzG386VL1lgAJrNwzJom5mY5dcxM416YKt9iWHgjAVwNVxOO4kdsLxWEq6zpHZonStWgczFIOrPue8Tfx3ilVRZJ7iKRitDOHvo4fr9M55QnMaKwhnUZN6Djt%2Bktguc%2BnBG%2FNK81RXTtksYj1jg5K8JH&X-Amz-Signature=92b890356ff9c09fbd70d808a3dace9443bd64babb67153468c3335c537e1fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQ27EA4%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBR%2FZHgMGnT%2Fzf6GZsXvzCoB1DzoUwCtaWJYq6CVD6JvAiEAsB5ZGhDzeEIGQ1oTfq6xzN%2BslsTL4td2nKIDkkpg%2BxsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ2DrBCgfnecjW2DircA%2BNmqiQeHPiIVF97m8atGoif2tfqtXe5ona0mmqo237QCYa1UXqztxBPy7%2BMiCKXMLzHGF%2BxJqAMl2m0cYX019Hxm7nznEjRFmLj2X2vxfZRvXszxa2plz0YjdXNgaxhAI9lVMRgk5fIpzgn2uFVWG7kJvkuVaKn%2FvMPVQ30ed10tetTlfy7TQDRyuuyvLvsRlNnona57EkNq3k73ovP3Cn30Pogg2mpTUloYotKgL2MiHb%2FRNcA4jVouacrYFDYj2sjzYlwMPCbPc0%2BuTGEY578ZwKKN4JvKTnGZjG0GP5zbfTCrfk2rHqfG1PvoayeOq96cD%2FUPYXcDe4sPQG4qR8OLzGaCKg36N5vMxtKtk6kMhppJVvvbgiijFIThdo3m0CfLd0GdbgLFt6%2Bh1nE47pyDWMkuZbgMEnb64Ozxdf2hR%2F48r1LZpNiBaIRwvk%2FE%2Bvaxg%2BRq1JvRLlSDiyxl9HZY3vNIj45VB2vylk5XRnIaDf4MqS3x5ohj5Fj%2BBO1p3%2BzX1%2Fd6QS1Sct7GRbaoX9tUbYsP4gGKim1gqNHzrnmvmY%2FZgqsOJc2s1AwbuOij1B%2BCcPjti7pjGsjzmezpWZ0jbN%2FMgWsPtSUKzCMsTFeLyD0K%2FMOMQ5L62WiMISIqdQGOqUBh127FXhp%2Fh%2BYvkaDkZ1RFey7bUtD0719rlYgTfJSMJJfmB6Deg5W6nLTUq071RfHF5BBwzG386VL1lgAJrNwzJom5mY5dcxM416YKt9iWHgjAVwNVxOO4kdsLxWEq6zpHZonStWgczFIOrPue8Tfx3ilVRZJ7iKRitDOHvo4fr9M55QnMaKwhnUZN6Djt%2Bktguc%2BnBG%2FNK81RXTtksYj1jg5K8JH&X-Amz-Signature=ee07a9ec46c711911dd418d677f479b26f31da500ea2b44352f4a61b37581a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQ27EA4%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBR%2FZHgMGnT%2Fzf6GZsXvzCoB1DzoUwCtaWJYq6CVD6JvAiEAsB5ZGhDzeEIGQ1oTfq6xzN%2BslsTL4td2nKIDkkpg%2BxsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ2DrBCgfnecjW2DircA%2BNmqiQeHPiIVF97m8atGoif2tfqtXe5ona0mmqo237QCYa1UXqztxBPy7%2BMiCKXMLzHGF%2BxJqAMl2m0cYX019Hxm7nznEjRFmLj2X2vxfZRvXszxa2plz0YjdXNgaxhAI9lVMRgk5fIpzgn2uFVWG7kJvkuVaKn%2FvMPVQ30ed10tetTlfy7TQDRyuuyvLvsRlNnona57EkNq3k73ovP3Cn30Pogg2mpTUloYotKgL2MiHb%2FRNcA4jVouacrYFDYj2sjzYlwMPCbPc0%2BuTGEY578ZwKKN4JvKTnGZjG0GP5zbfTCrfk2rHqfG1PvoayeOq96cD%2FUPYXcDe4sPQG4qR8OLzGaCKg36N5vMxtKtk6kMhppJVvvbgiijFIThdo3m0CfLd0GdbgLFt6%2Bh1nE47pyDWMkuZbgMEnb64Ozxdf2hR%2F48r1LZpNiBaIRwvk%2FE%2Bvaxg%2BRq1JvRLlSDiyxl9HZY3vNIj45VB2vylk5XRnIaDf4MqS3x5ohj5Fj%2BBO1p3%2BzX1%2Fd6QS1Sct7GRbaoX9tUbYsP4gGKim1gqNHzrnmvmY%2FZgqsOJc2s1AwbuOij1B%2BCcPjti7pjGsjzmezpWZ0jbN%2FMgWsPtSUKzCMsTFeLyD0K%2FMOMQ5L62WiMISIqdQGOqUBh127FXhp%2Fh%2BYvkaDkZ1RFey7bUtD0719rlYgTfJSMJJfmB6Deg5W6nLTUq071RfHF5BBwzG386VL1lgAJrNwzJom5mY5dcxM416YKt9iWHgjAVwNVxOO4kdsLxWEq6zpHZonStWgczFIOrPue8Tfx3ilVRZJ7iKRitDOHvo4fr9M55QnMaKwhnUZN6Djt%2Bktguc%2BnBG%2FNK81RXTtksYj1jg5K8JH&X-Amz-Signature=43802e1809cea22cf5b13a7e613f9a6209348385855970eae57ac7ab6b2f94ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQ27EA4%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBR%2FZHgMGnT%2Fzf6GZsXvzCoB1DzoUwCtaWJYq6CVD6JvAiEAsB5ZGhDzeEIGQ1oTfq6xzN%2BslsTL4td2nKIDkkpg%2BxsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ2DrBCgfnecjW2DircA%2BNmqiQeHPiIVF97m8atGoif2tfqtXe5ona0mmqo237QCYa1UXqztxBPy7%2BMiCKXMLzHGF%2BxJqAMl2m0cYX019Hxm7nznEjRFmLj2X2vxfZRvXszxa2plz0YjdXNgaxhAI9lVMRgk5fIpzgn2uFVWG7kJvkuVaKn%2FvMPVQ30ed10tetTlfy7TQDRyuuyvLvsRlNnona57EkNq3k73ovP3Cn30Pogg2mpTUloYotKgL2MiHb%2FRNcA4jVouacrYFDYj2sjzYlwMPCbPc0%2BuTGEY578ZwKKN4JvKTnGZjG0GP5zbfTCrfk2rHqfG1PvoayeOq96cD%2FUPYXcDe4sPQG4qR8OLzGaCKg36N5vMxtKtk6kMhppJVvvbgiijFIThdo3m0CfLd0GdbgLFt6%2Bh1nE47pyDWMkuZbgMEnb64Ozxdf2hR%2F48r1LZpNiBaIRwvk%2FE%2Bvaxg%2BRq1JvRLlSDiyxl9HZY3vNIj45VB2vylk5XRnIaDf4MqS3x5ohj5Fj%2BBO1p3%2BzX1%2Fd6QS1Sct7GRbaoX9tUbYsP4gGKim1gqNHzrnmvmY%2FZgqsOJc2s1AwbuOij1B%2BCcPjti7pjGsjzmezpWZ0jbN%2FMgWsPtSUKzCMsTFeLyD0K%2FMOMQ5L62WiMISIqdQGOqUBh127FXhp%2Fh%2BYvkaDkZ1RFey7bUtD0719rlYgTfJSMJJfmB6Deg5W6nLTUq071RfHF5BBwzG386VL1lgAJrNwzJom5mY5dcxM416YKt9iWHgjAVwNVxOO4kdsLxWEq6zpHZonStWgczFIOrPue8Tfx3ilVRZJ7iKRitDOHvo4fr9M55QnMaKwhnUZN6Djt%2Bktguc%2BnBG%2FNK81RXTtksYj1jg5K8JH&X-Amz-Signature=86911f61cdb658a1275d49e89ff73b5ab703ea77f8003ce675f92f7bae4e00ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQ27EA4%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBR%2FZHgMGnT%2Fzf6GZsXvzCoB1DzoUwCtaWJYq6CVD6JvAiEAsB5ZGhDzeEIGQ1oTfq6xzN%2BslsTL4td2nKIDkkpg%2BxsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ2DrBCgfnecjW2DircA%2BNmqiQeHPiIVF97m8atGoif2tfqtXe5ona0mmqo237QCYa1UXqztxBPy7%2BMiCKXMLzHGF%2BxJqAMl2m0cYX019Hxm7nznEjRFmLj2X2vxfZRvXszxa2plz0YjdXNgaxhAI9lVMRgk5fIpzgn2uFVWG7kJvkuVaKn%2FvMPVQ30ed10tetTlfy7TQDRyuuyvLvsRlNnona57EkNq3k73ovP3Cn30Pogg2mpTUloYotKgL2MiHb%2FRNcA4jVouacrYFDYj2sjzYlwMPCbPc0%2BuTGEY578ZwKKN4JvKTnGZjG0GP5zbfTCrfk2rHqfG1PvoayeOq96cD%2FUPYXcDe4sPQG4qR8OLzGaCKg36N5vMxtKtk6kMhppJVvvbgiijFIThdo3m0CfLd0GdbgLFt6%2Bh1nE47pyDWMkuZbgMEnb64Ozxdf2hR%2F48r1LZpNiBaIRwvk%2FE%2Bvaxg%2BRq1JvRLlSDiyxl9HZY3vNIj45VB2vylk5XRnIaDf4MqS3x5ohj5Fj%2BBO1p3%2BzX1%2Fd6QS1Sct7GRbaoX9tUbYsP4gGKim1gqNHzrnmvmY%2FZgqsOJc2s1AwbuOij1B%2BCcPjti7pjGsjzmezpWZ0jbN%2FMgWsPtSUKzCMsTFeLyD0K%2FMOMQ5L62WiMISIqdQGOqUBh127FXhp%2Fh%2BYvkaDkZ1RFey7bUtD0719rlYgTfJSMJJfmB6Deg5W6nLTUq071RfHF5BBwzG386VL1lgAJrNwzJom5mY5dcxM416YKt9iWHgjAVwNVxOO4kdsLxWEq6zpHZonStWgczFIOrPue8Tfx3ilVRZJ7iKRitDOHvo4fr9M55QnMaKwhnUZN6Djt%2Bktguc%2BnBG%2FNK81RXTtksYj1jg5K8JH&X-Amz-Signature=0ad1562b2da4c1f697c6c075d1eb549bef9e295633ea203bbb2be521e909cc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQ27EA4%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBR%2FZHgMGnT%2Fzf6GZsXvzCoB1DzoUwCtaWJYq6CVD6JvAiEAsB5ZGhDzeEIGQ1oTfq6xzN%2BslsTL4td2nKIDkkpg%2BxsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ2DrBCgfnecjW2DircA%2BNmqiQeHPiIVF97m8atGoif2tfqtXe5ona0mmqo237QCYa1UXqztxBPy7%2BMiCKXMLzHGF%2BxJqAMl2m0cYX019Hxm7nznEjRFmLj2X2vxfZRvXszxa2plz0YjdXNgaxhAI9lVMRgk5fIpzgn2uFVWG7kJvkuVaKn%2FvMPVQ30ed10tetTlfy7TQDRyuuyvLvsRlNnona57EkNq3k73ovP3Cn30Pogg2mpTUloYotKgL2MiHb%2FRNcA4jVouacrYFDYj2sjzYlwMPCbPc0%2BuTGEY578ZwKKN4JvKTnGZjG0GP5zbfTCrfk2rHqfG1PvoayeOq96cD%2FUPYXcDe4sPQG4qR8OLzGaCKg36N5vMxtKtk6kMhppJVvvbgiijFIThdo3m0CfLd0GdbgLFt6%2Bh1nE47pyDWMkuZbgMEnb64Ozxdf2hR%2F48r1LZpNiBaIRwvk%2FE%2Bvaxg%2BRq1JvRLlSDiyxl9HZY3vNIj45VB2vylk5XRnIaDf4MqS3x5ohj5Fj%2BBO1p3%2BzX1%2Fd6QS1Sct7GRbaoX9tUbYsP4gGKim1gqNHzrnmvmY%2FZgqsOJc2s1AwbuOij1B%2BCcPjti7pjGsjzmezpWZ0jbN%2FMgWsPtSUKzCMsTFeLyD0K%2FMOMQ5L62WiMISIqdQGOqUBh127FXhp%2Fh%2BYvkaDkZ1RFey7bUtD0719rlYgTfJSMJJfmB6Deg5W6nLTUq071RfHF5BBwzG386VL1lgAJrNwzJom5mY5dcxM416YKt9iWHgjAVwNVxOO4kdsLxWEq6zpHZonStWgczFIOrPue8Tfx3ilVRZJ7iKRitDOHvo4fr9M55QnMaKwhnUZN6Djt%2Bktguc%2BnBG%2FNK81RXTtksYj1jg5K8JH&X-Amz-Signature=4aa20f181fec065f0656a97753172635c0c9969abc29d9b73e0c901b8c62cc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
