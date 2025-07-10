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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZ23Z7C%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYKpCoyOFoDNCYN%2BNkBcZxMjzztPOFRw68JPB3XUt9lAiB2cRRd16eduGT77%2BhHBCQubrUXu3He0eppq8q4m%2BYUiCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2BtAyM45npNCjuqHKtwDR%2BMa7e6yicZxzhc6PsN41ilDEaTZ%2Fr0vPZpLg9dH2qUMMa%2FpgQKaRF4DjHe%2FM8L3yZLrDs%2BxCm37u3yfXfyoqvvA9%2FqagU7kYJfzQ4MsRI%2FAZCPfRyWs8ZltjyJcCuOzEqleoubpVgZ13yaAVpeKVy0JEjJzlUUahMlrt1sWgdigLdnLQ%2FTCRMsbtBpj%2BZwm%2Bp%2BVK8uKtC2gqG58qV0gYVHB5HLCBBcrNndr4pkY17OPs4O16EGO6dQjEHMCzjc%2FCUasMvrbtSazYFJodspgBA9mhXy75VFHwl0uJTdWgk%2F97XNyty9RDuP6pTQE1TbrbSMZ84ZnRXdtdxx8fH%2FioE42A%2FgjlbyeTeZq13hofGL%2BbRjaeVYq9B4hrHBNadfS%2FnFnzupuNMB6SorFDPb6ujglVxPybdG8pLBYwEvv1sMS%2FuBZCI%2FkOMa87lgVihTMOdBkZTjijEcAWA7g54ZdWIcofH2%2BeQZH2W2Wfrb8OoX5vZMN%2ByHMfks8XONt%2B4la1DaJZqgNE8D1wAL5KbC7DMWlztKeipEOyyk0cP%2FqsbOhzm%2FDqbkzkkAuLD7ob9fumfJXhjLVFxEwJ5bX0b8ObTvaGb0wsek0XhOwqu2rgQtTktAvMVqYUstHUtIw8fC7wwY6pgHJxz9eYwLkDdhE0jcli1pDpN4gW1MS43Y%2BH0w86ubY25Xe%2FF20YX2lcc99ZUeQjYUwTkGuAACExQqk3SYTSCioT1PHOA5HOWUwzqIj2oBOV3bDd%2FNTf0Wrw%2BWbVqoZxaZEypDDySipKhnxltyExANl9rwZtpOfveOs%2BfdUB7W9K8YgAtXXn9RaIfBdxobMZG3PNWNEfXwTQtPQuFWfQRJgYcIhqYsX&X-Amz-Signature=11ad9e8e526064e93aac8d68ca108589ce8b1f56f38a69b02577e8dd77f72e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZ23Z7C%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYKpCoyOFoDNCYN%2BNkBcZxMjzztPOFRw68JPB3XUt9lAiB2cRRd16eduGT77%2BhHBCQubrUXu3He0eppq8q4m%2BYUiCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2BtAyM45npNCjuqHKtwDR%2BMa7e6yicZxzhc6PsN41ilDEaTZ%2Fr0vPZpLg9dH2qUMMa%2FpgQKaRF4DjHe%2FM8L3yZLrDs%2BxCm37u3yfXfyoqvvA9%2FqagU7kYJfzQ4MsRI%2FAZCPfRyWs8ZltjyJcCuOzEqleoubpVgZ13yaAVpeKVy0JEjJzlUUahMlrt1sWgdigLdnLQ%2FTCRMsbtBpj%2BZwm%2Bp%2BVK8uKtC2gqG58qV0gYVHB5HLCBBcrNndr4pkY17OPs4O16EGO6dQjEHMCzjc%2FCUasMvrbtSazYFJodspgBA9mhXy75VFHwl0uJTdWgk%2F97XNyty9RDuP6pTQE1TbrbSMZ84ZnRXdtdxx8fH%2FioE42A%2FgjlbyeTeZq13hofGL%2BbRjaeVYq9B4hrHBNadfS%2FnFnzupuNMB6SorFDPb6ujglVxPybdG8pLBYwEvv1sMS%2FuBZCI%2FkOMa87lgVihTMOdBkZTjijEcAWA7g54ZdWIcofH2%2BeQZH2W2Wfrb8OoX5vZMN%2ByHMfks8XONt%2B4la1DaJZqgNE8D1wAL5KbC7DMWlztKeipEOyyk0cP%2FqsbOhzm%2FDqbkzkkAuLD7ob9fumfJXhjLVFxEwJ5bX0b8ObTvaGb0wsek0XhOwqu2rgQtTktAvMVqYUstHUtIw8fC7wwY6pgHJxz9eYwLkDdhE0jcli1pDpN4gW1MS43Y%2BH0w86ubY25Xe%2FF20YX2lcc99ZUeQjYUwTkGuAACExQqk3SYTSCioT1PHOA5HOWUwzqIj2oBOV3bDd%2FNTf0Wrw%2BWbVqoZxaZEypDDySipKhnxltyExANl9rwZtpOfveOs%2BfdUB7W9K8YgAtXXn9RaIfBdxobMZG3PNWNEfXwTQtPQuFWfQRJgYcIhqYsX&X-Amz-Signature=aede21ec880b20697d4a040229b60b6b317a6b182b132ebe907f0a2b0e5b387b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZ23Z7C%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYKpCoyOFoDNCYN%2BNkBcZxMjzztPOFRw68JPB3XUt9lAiB2cRRd16eduGT77%2BhHBCQubrUXu3He0eppq8q4m%2BYUiCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2BtAyM45npNCjuqHKtwDR%2BMa7e6yicZxzhc6PsN41ilDEaTZ%2Fr0vPZpLg9dH2qUMMa%2FpgQKaRF4DjHe%2FM8L3yZLrDs%2BxCm37u3yfXfyoqvvA9%2FqagU7kYJfzQ4MsRI%2FAZCPfRyWs8ZltjyJcCuOzEqleoubpVgZ13yaAVpeKVy0JEjJzlUUahMlrt1sWgdigLdnLQ%2FTCRMsbtBpj%2BZwm%2Bp%2BVK8uKtC2gqG58qV0gYVHB5HLCBBcrNndr4pkY17OPs4O16EGO6dQjEHMCzjc%2FCUasMvrbtSazYFJodspgBA9mhXy75VFHwl0uJTdWgk%2F97XNyty9RDuP6pTQE1TbrbSMZ84ZnRXdtdxx8fH%2FioE42A%2FgjlbyeTeZq13hofGL%2BbRjaeVYq9B4hrHBNadfS%2FnFnzupuNMB6SorFDPb6ujglVxPybdG8pLBYwEvv1sMS%2FuBZCI%2FkOMa87lgVihTMOdBkZTjijEcAWA7g54ZdWIcofH2%2BeQZH2W2Wfrb8OoX5vZMN%2ByHMfks8XONt%2B4la1DaJZqgNE8D1wAL5KbC7DMWlztKeipEOyyk0cP%2FqsbOhzm%2FDqbkzkkAuLD7ob9fumfJXhjLVFxEwJ5bX0b8ObTvaGb0wsek0XhOwqu2rgQtTktAvMVqYUstHUtIw8fC7wwY6pgHJxz9eYwLkDdhE0jcli1pDpN4gW1MS43Y%2BH0w86ubY25Xe%2FF20YX2lcc99ZUeQjYUwTkGuAACExQqk3SYTSCioT1PHOA5HOWUwzqIj2oBOV3bDd%2FNTf0Wrw%2BWbVqoZxaZEypDDySipKhnxltyExANl9rwZtpOfveOs%2BfdUB7W9K8YgAtXXn9RaIfBdxobMZG3PNWNEfXwTQtPQuFWfQRJgYcIhqYsX&X-Amz-Signature=540b6514ddcb76beefb9a02c8180c3d3ae8e1eb4360edf50534e6fb8e873a4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZ23Z7C%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYKpCoyOFoDNCYN%2BNkBcZxMjzztPOFRw68JPB3XUt9lAiB2cRRd16eduGT77%2BhHBCQubrUXu3He0eppq8q4m%2BYUiCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2BtAyM45npNCjuqHKtwDR%2BMa7e6yicZxzhc6PsN41ilDEaTZ%2Fr0vPZpLg9dH2qUMMa%2FpgQKaRF4DjHe%2FM8L3yZLrDs%2BxCm37u3yfXfyoqvvA9%2FqagU7kYJfzQ4MsRI%2FAZCPfRyWs8ZltjyJcCuOzEqleoubpVgZ13yaAVpeKVy0JEjJzlUUahMlrt1sWgdigLdnLQ%2FTCRMsbtBpj%2BZwm%2Bp%2BVK8uKtC2gqG58qV0gYVHB5HLCBBcrNndr4pkY17OPs4O16EGO6dQjEHMCzjc%2FCUasMvrbtSazYFJodspgBA9mhXy75VFHwl0uJTdWgk%2F97XNyty9RDuP6pTQE1TbrbSMZ84ZnRXdtdxx8fH%2FioE42A%2FgjlbyeTeZq13hofGL%2BbRjaeVYq9B4hrHBNadfS%2FnFnzupuNMB6SorFDPb6ujglVxPybdG8pLBYwEvv1sMS%2FuBZCI%2FkOMa87lgVihTMOdBkZTjijEcAWA7g54ZdWIcofH2%2BeQZH2W2Wfrb8OoX5vZMN%2ByHMfks8XONt%2B4la1DaJZqgNE8D1wAL5KbC7DMWlztKeipEOyyk0cP%2FqsbOhzm%2FDqbkzkkAuLD7ob9fumfJXhjLVFxEwJ5bX0b8ObTvaGb0wsek0XhOwqu2rgQtTktAvMVqYUstHUtIw8fC7wwY6pgHJxz9eYwLkDdhE0jcli1pDpN4gW1MS43Y%2BH0w86ubY25Xe%2FF20YX2lcc99ZUeQjYUwTkGuAACExQqk3SYTSCioT1PHOA5HOWUwzqIj2oBOV3bDd%2FNTf0Wrw%2BWbVqoZxaZEypDDySipKhnxltyExANl9rwZtpOfveOs%2BfdUB7W9K8YgAtXXn9RaIfBdxobMZG3PNWNEfXwTQtPQuFWfQRJgYcIhqYsX&X-Amz-Signature=450b9c4bec0cc8c867439cf868fbcef5d14493fdcd3924501f91cbeb370073f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZ23Z7C%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYKpCoyOFoDNCYN%2BNkBcZxMjzztPOFRw68JPB3XUt9lAiB2cRRd16eduGT77%2BhHBCQubrUXu3He0eppq8q4m%2BYUiCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2BtAyM45npNCjuqHKtwDR%2BMa7e6yicZxzhc6PsN41ilDEaTZ%2Fr0vPZpLg9dH2qUMMa%2FpgQKaRF4DjHe%2FM8L3yZLrDs%2BxCm37u3yfXfyoqvvA9%2FqagU7kYJfzQ4MsRI%2FAZCPfRyWs8ZltjyJcCuOzEqleoubpVgZ13yaAVpeKVy0JEjJzlUUahMlrt1sWgdigLdnLQ%2FTCRMsbtBpj%2BZwm%2Bp%2BVK8uKtC2gqG58qV0gYVHB5HLCBBcrNndr4pkY17OPs4O16EGO6dQjEHMCzjc%2FCUasMvrbtSazYFJodspgBA9mhXy75VFHwl0uJTdWgk%2F97XNyty9RDuP6pTQE1TbrbSMZ84ZnRXdtdxx8fH%2FioE42A%2FgjlbyeTeZq13hofGL%2BbRjaeVYq9B4hrHBNadfS%2FnFnzupuNMB6SorFDPb6ujglVxPybdG8pLBYwEvv1sMS%2FuBZCI%2FkOMa87lgVihTMOdBkZTjijEcAWA7g54ZdWIcofH2%2BeQZH2W2Wfrb8OoX5vZMN%2ByHMfks8XONt%2B4la1DaJZqgNE8D1wAL5KbC7DMWlztKeipEOyyk0cP%2FqsbOhzm%2FDqbkzkkAuLD7ob9fumfJXhjLVFxEwJ5bX0b8ObTvaGb0wsek0XhOwqu2rgQtTktAvMVqYUstHUtIw8fC7wwY6pgHJxz9eYwLkDdhE0jcli1pDpN4gW1MS43Y%2BH0w86ubY25Xe%2FF20YX2lcc99ZUeQjYUwTkGuAACExQqk3SYTSCioT1PHOA5HOWUwzqIj2oBOV3bDd%2FNTf0Wrw%2BWbVqoZxaZEypDDySipKhnxltyExANl9rwZtpOfveOs%2BfdUB7W9K8YgAtXXn9RaIfBdxobMZG3PNWNEfXwTQtPQuFWfQRJgYcIhqYsX&X-Amz-Signature=ae0b85f3df78b907c714c4dc18a48e9d68a5d5cfc83ed7178e6274e19b464086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZ23Z7C%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYKpCoyOFoDNCYN%2BNkBcZxMjzztPOFRw68JPB3XUt9lAiB2cRRd16eduGT77%2BhHBCQubrUXu3He0eppq8q4m%2BYUiCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2BtAyM45npNCjuqHKtwDR%2BMa7e6yicZxzhc6PsN41ilDEaTZ%2Fr0vPZpLg9dH2qUMMa%2FpgQKaRF4DjHe%2FM8L3yZLrDs%2BxCm37u3yfXfyoqvvA9%2FqagU7kYJfzQ4MsRI%2FAZCPfRyWs8ZltjyJcCuOzEqleoubpVgZ13yaAVpeKVy0JEjJzlUUahMlrt1sWgdigLdnLQ%2FTCRMsbtBpj%2BZwm%2Bp%2BVK8uKtC2gqG58qV0gYVHB5HLCBBcrNndr4pkY17OPs4O16EGO6dQjEHMCzjc%2FCUasMvrbtSazYFJodspgBA9mhXy75VFHwl0uJTdWgk%2F97XNyty9RDuP6pTQE1TbrbSMZ84ZnRXdtdxx8fH%2FioE42A%2FgjlbyeTeZq13hofGL%2BbRjaeVYq9B4hrHBNadfS%2FnFnzupuNMB6SorFDPb6ujglVxPybdG8pLBYwEvv1sMS%2FuBZCI%2FkOMa87lgVihTMOdBkZTjijEcAWA7g54ZdWIcofH2%2BeQZH2W2Wfrb8OoX5vZMN%2ByHMfks8XONt%2B4la1DaJZqgNE8D1wAL5KbC7DMWlztKeipEOyyk0cP%2FqsbOhzm%2FDqbkzkkAuLD7ob9fumfJXhjLVFxEwJ5bX0b8ObTvaGb0wsek0XhOwqu2rgQtTktAvMVqYUstHUtIw8fC7wwY6pgHJxz9eYwLkDdhE0jcli1pDpN4gW1MS43Y%2BH0w86ubY25Xe%2FF20YX2lcc99ZUeQjYUwTkGuAACExQqk3SYTSCioT1PHOA5HOWUwzqIj2oBOV3bDd%2FNTf0Wrw%2BWbVqoZxaZEypDDySipKhnxltyExANl9rwZtpOfveOs%2BfdUB7W9K8YgAtXXn9RaIfBdxobMZG3PNWNEfXwTQtPQuFWfQRJgYcIhqYsX&X-Amz-Signature=21f23699ef81c3a76a43b7a1fa26044c33089e50449cdcff881475ae78b98488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZ23Z7C%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYKpCoyOFoDNCYN%2BNkBcZxMjzztPOFRw68JPB3XUt9lAiB2cRRd16eduGT77%2BhHBCQubrUXu3He0eppq8q4m%2BYUiCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2BtAyM45npNCjuqHKtwDR%2BMa7e6yicZxzhc6PsN41ilDEaTZ%2Fr0vPZpLg9dH2qUMMa%2FpgQKaRF4DjHe%2FM8L3yZLrDs%2BxCm37u3yfXfyoqvvA9%2FqagU7kYJfzQ4MsRI%2FAZCPfRyWs8ZltjyJcCuOzEqleoubpVgZ13yaAVpeKVy0JEjJzlUUahMlrt1sWgdigLdnLQ%2FTCRMsbtBpj%2BZwm%2Bp%2BVK8uKtC2gqG58qV0gYVHB5HLCBBcrNndr4pkY17OPs4O16EGO6dQjEHMCzjc%2FCUasMvrbtSazYFJodspgBA9mhXy75VFHwl0uJTdWgk%2F97XNyty9RDuP6pTQE1TbrbSMZ84ZnRXdtdxx8fH%2FioE42A%2FgjlbyeTeZq13hofGL%2BbRjaeVYq9B4hrHBNadfS%2FnFnzupuNMB6SorFDPb6ujglVxPybdG8pLBYwEvv1sMS%2FuBZCI%2FkOMa87lgVihTMOdBkZTjijEcAWA7g54ZdWIcofH2%2BeQZH2W2Wfrb8OoX5vZMN%2ByHMfks8XONt%2B4la1DaJZqgNE8D1wAL5KbC7DMWlztKeipEOyyk0cP%2FqsbOhzm%2FDqbkzkkAuLD7ob9fumfJXhjLVFxEwJ5bX0b8ObTvaGb0wsek0XhOwqu2rgQtTktAvMVqYUstHUtIw8fC7wwY6pgHJxz9eYwLkDdhE0jcli1pDpN4gW1MS43Y%2BH0w86ubY25Xe%2FF20YX2lcc99ZUeQjYUwTkGuAACExQqk3SYTSCioT1PHOA5HOWUwzqIj2oBOV3bDd%2FNTf0Wrw%2BWbVqoZxaZEypDDySipKhnxltyExANl9rwZtpOfveOs%2BfdUB7W9K8YgAtXXn9RaIfBdxobMZG3PNWNEfXwTQtPQuFWfQRJgYcIhqYsX&X-Amz-Signature=a9ec07423fbbee2a5f79d972cf65d3fc6b3d004339daa01060dc3ec5b8ca184a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
