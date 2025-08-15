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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARFLNX2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDOhjMKoG0VQS5TCDopXYTtSgPZCoYi76evg9%2BCx0kbXAIhAO02BpZf5O0cPHl8G9b7P2pTZy79TXUKaKzV1kEf1yTCKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzLFKrb%2Bzd0eYArlAq3ANbCTcgSPmRKRnVFzCqO3MYnMoUoOgtcwemtiDbdans94QCKtNLHwVnburbNHt8YyU3bnVBM726ZE3sbrgXCD1Hbd%2FE4HFlt%2BFAryshWlc9lmlL21VQFEbCqzRfN875IgEybOumm93JYKylt%2B5ScJkJ5lvfabOLgFcIAiLj%2BrgMygTnEYQiDpe8ansNnD%2FANDY8QeK9IUmCGybUb4tVUBkXrMWxLbD00zKE5T4qEz5ZnQ1ORz%2FGr5ySs5NxsXBNnJO6duHyEGR%2BLmeRG2R2pyYjenkB3qkcBua1%2Fx7pQoF5dw7A0SHGmcnu%2FV67g7KeakkC1alQfVRUAe%2FZCQjEPqZIViReMg%2BYG%2FY%2B5yaNcTrm%2Bp3f1RPmz9KZ3TQbwb3UDHl%2BRztq3bOdd75vibdEDvnEniPVZ%2FcbQ1RmnlZFh8BJB4Eq89zx8qLr0aZymbdG9tbfVihPrGj9bzjJEwx4jtO67Q%2B3pngzAgm5xEteBvaDF9%2ByPI3ppb7afkYcyFMBv1Xd4RqOdOnvM3yKXTzzSyRfooGbzlZ0pQ8gWhSILWBJf8wRvkY49V0iZZ6sx0Jd1tCD%2FVrfk5aa90C8hxRFp3cNYvwkGujvepwbSjgw%2FCRvEcKQTaU3a4olATjK%2BDDdo%2FrEBjqkAbIXbwVazRCGih0cXLs5WEIpOkgq3OGF%2FVbDRn2W8JpGCA3CMEFvzhR27qQ30AK1XsSdavGr%2BLRc838Z01yOhRKqyxKPEkdd0aO1kaqjhufbfVhBuMjr%2FfMKtGM8au%2BnjEx1qBPhRDqDNpvWtecFpuZkZSaMIzVyywHFK2Y%2Bu0UINt7uVq681avMDQAPo%2Fwg4OISbXYyKYHlfUdtiPYU0912RBcs&X-Amz-Signature=f33e963ed546f22670a17a08267af7b53bb980c99c9eac8944853ff8f853a2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARFLNX2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDOhjMKoG0VQS5TCDopXYTtSgPZCoYi76evg9%2BCx0kbXAIhAO02BpZf5O0cPHl8G9b7P2pTZy79TXUKaKzV1kEf1yTCKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzLFKrb%2Bzd0eYArlAq3ANbCTcgSPmRKRnVFzCqO3MYnMoUoOgtcwemtiDbdans94QCKtNLHwVnburbNHt8YyU3bnVBM726ZE3sbrgXCD1Hbd%2FE4HFlt%2BFAryshWlc9lmlL21VQFEbCqzRfN875IgEybOumm93JYKylt%2B5ScJkJ5lvfabOLgFcIAiLj%2BrgMygTnEYQiDpe8ansNnD%2FANDY8QeK9IUmCGybUb4tVUBkXrMWxLbD00zKE5T4qEz5ZnQ1ORz%2FGr5ySs5NxsXBNnJO6duHyEGR%2BLmeRG2R2pyYjenkB3qkcBua1%2Fx7pQoF5dw7A0SHGmcnu%2FV67g7KeakkC1alQfVRUAe%2FZCQjEPqZIViReMg%2BYG%2FY%2B5yaNcTrm%2Bp3f1RPmz9KZ3TQbwb3UDHl%2BRztq3bOdd75vibdEDvnEniPVZ%2FcbQ1RmnlZFh8BJB4Eq89zx8qLr0aZymbdG9tbfVihPrGj9bzjJEwx4jtO67Q%2B3pngzAgm5xEteBvaDF9%2ByPI3ppb7afkYcyFMBv1Xd4RqOdOnvM3yKXTzzSyRfooGbzlZ0pQ8gWhSILWBJf8wRvkY49V0iZZ6sx0Jd1tCD%2FVrfk5aa90C8hxRFp3cNYvwkGujvepwbSjgw%2FCRvEcKQTaU3a4olATjK%2BDDdo%2FrEBjqkAbIXbwVazRCGih0cXLs5WEIpOkgq3OGF%2FVbDRn2W8JpGCA3CMEFvzhR27qQ30AK1XsSdavGr%2BLRc838Z01yOhRKqyxKPEkdd0aO1kaqjhufbfVhBuMjr%2FfMKtGM8au%2BnjEx1qBPhRDqDNpvWtecFpuZkZSaMIzVyywHFK2Y%2Bu0UINt7uVq681avMDQAPo%2Fwg4OISbXYyKYHlfUdtiPYU0912RBcs&X-Amz-Signature=d08d5249d971839c65a3486a8c4de7ec82504ff07d5f1a2f3f338d948b9b4052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARFLNX2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDOhjMKoG0VQS5TCDopXYTtSgPZCoYi76evg9%2BCx0kbXAIhAO02BpZf5O0cPHl8G9b7P2pTZy79TXUKaKzV1kEf1yTCKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzLFKrb%2Bzd0eYArlAq3ANbCTcgSPmRKRnVFzCqO3MYnMoUoOgtcwemtiDbdans94QCKtNLHwVnburbNHt8YyU3bnVBM726ZE3sbrgXCD1Hbd%2FE4HFlt%2BFAryshWlc9lmlL21VQFEbCqzRfN875IgEybOumm93JYKylt%2B5ScJkJ5lvfabOLgFcIAiLj%2BrgMygTnEYQiDpe8ansNnD%2FANDY8QeK9IUmCGybUb4tVUBkXrMWxLbD00zKE5T4qEz5ZnQ1ORz%2FGr5ySs5NxsXBNnJO6duHyEGR%2BLmeRG2R2pyYjenkB3qkcBua1%2Fx7pQoF5dw7A0SHGmcnu%2FV67g7KeakkC1alQfVRUAe%2FZCQjEPqZIViReMg%2BYG%2FY%2B5yaNcTrm%2Bp3f1RPmz9KZ3TQbwb3UDHl%2BRztq3bOdd75vibdEDvnEniPVZ%2FcbQ1RmnlZFh8BJB4Eq89zx8qLr0aZymbdG9tbfVihPrGj9bzjJEwx4jtO67Q%2B3pngzAgm5xEteBvaDF9%2ByPI3ppb7afkYcyFMBv1Xd4RqOdOnvM3yKXTzzSyRfooGbzlZ0pQ8gWhSILWBJf8wRvkY49V0iZZ6sx0Jd1tCD%2FVrfk5aa90C8hxRFp3cNYvwkGujvepwbSjgw%2FCRvEcKQTaU3a4olATjK%2BDDdo%2FrEBjqkAbIXbwVazRCGih0cXLs5WEIpOkgq3OGF%2FVbDRn2W8JpGCA3CMEFvzhR27qQ30AK1XsSdavGr%2BLRc838Z01yOhRKqyxKPEkdd0aO1kaqjhufbfVhBuMjr%2FfMKtGM8au%2BnjEx1qBPhRDqDNpvWtecFpuZkZSaMIzVyywHFK2Y%2Bu0UINt7uVq681avMDQAPo%2Fwg4OISbXYyKYHlfUdtiPYU0912RBcs&X-Amz-Signature=86e5c62fcebded6cb12d19c1a40c2b37fb5db76b2cf697b89cdc2f5786dd29b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARFLNX2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDOhjMKoG0VQS5TCDopXYTtSgPZCoYi76evg9%2BCx0kbXAIhAO02BpZf5O0cPHl8G9b7P2pTZy79TXUKaKzV1kEf1yTCKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzLFKrb%2Bzd0eYArlAq3ANbCTcgSPmRKRnVFzCqO3MYnMoUoOgtcwemtiDbdans94QCKtNLHwVnburbNHt8YyU3bnVBM726ZE3sbrgXCD1Hbd%2FE4HFlt%2BFAryshWlc9lmlL21VQFEbCqzRfN875IgEybOumm93JYKylt%2B5ScJkJ5lvfabOLgFcIAiLj%2BrgMygTnEYQiDpe8ansNnD%2FANDY8QeK9IUmCGybUb4tVUBkXrMWxLbD00zKE5T4qEz5ZnQ1ORz%2FGr5ySs5NxsXBNnJO6duHyEGR%2BLmeRG2R2pyYjenkB3qkcBua1%2Fx7pQoF5dw7A0SHGmcnu%2FV67g7KeakkC1alQfVRUAe%2FZCQjEPqZIViReMg%2BYG%2FY%2B5yaNcTrm%2Bp3f1RPmz9KZ3TQbwb3UDHl%2BRztq3bOdd75vibdEDvnEniPVZ%2FcbQ1RmnlZFh8BJB4Eq89zx8qLr0aZymbdG9tbfVihPrGj9bzjJEwx4jtO67Q%2B3pngzAgm5xEteBvaDF9%2ByPI3ppb7afkYcyFMBv1Xd4RqOdOnvM3yKXTzzSyRfooGbzlZ0pQ8gWhSILWBJf8wRvkY49V0iZZ6sx0Jd1tCD%2FVrfk5aa90C8hxRFp3cNYvwkGujvepwbSjgw%2FCRvEcKQTaU3a4olATjK%2BDDdo%2FrEBjqkAbIXbwVazRCGih0cXLs5WEIpOkgq3OGF%2FVbDRn2W8JpGCA3CMEFvzhR27qQ30AK1XsSdavGr%2BLRc838Z01yOhRKqyxKPEkdd0aO1kaqjhufbfVhBuMjr%2FfMKtGM8au%2BnjEx1qBPhRDqDNpvWtecFpuZkZSaMIzVyywHFK2Y%2Bu0UINt7uVq681avMDQAPo%2Fwg4OISbXYyKYHlfUdtiPYU0912RBcs&X-Amz-Signature=6c8186e426aab0531138fba77b060b499ba8109edc682e729b863990f30625cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARFLNX2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDOhjMKoG0VQS5TCDopXYTtSgPZCoYi76evg9%2BCx0kbXAIhAO02BpZf5O0cPHl8G9b7P2pTZy79TXUKaKzV1kEf1yTCKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzLFKrb%2Bzd0eYArlAq3ANbCTcgSPmRKRnVFzCqO3MYnMoUoOgtcwemtiDbdans94QCKtNLHwVnburbNHt8YyU3bnVBM726ZE3sbrgXCD1Hbd%2FE4HFlt%2BFAryshWlc9lmlL21VQFEbCqzRfN875IgEybOumm93JYKylt%2B5ScJkJ5lvfabOLgFcIAiLj%2BrgMygTnEYQiDpe8ansNnD%2FANDY8QeK9IUmCGybUb4tVUBkXrMWxLbD00zKE5T4qEz5ZnQ1ORz%2FGr5ySs5NxsXBNnJO6duHyEGR%2BLmeRG2R2pyYjenkB3qkcBua1%2Fx7pQoF5dw7A0SHGmcnu%2FV67g7KeakkC1alQfVRUAe%2FZCQjEPqZIViReMg%2BYG%2FY%2B5yaNcTrm%2Bp3f1RPmz9KZ3TQbwb3UDHl%2BRztq3bOdd75vibdEDvnEniPVZ%2FcbQ1RmnlZFh8BJB4Eq89zx8qLr0aZymbdG9tbfVihPrGj9bzjJEwx4jtO67Q%2B3pngzAgm5xEteBvaDF9%2ByPI3ppb7afkYcyFMBv1Xd4RqOdOnvM3yKXTzzSyRfooGbzlZ0pQ8gWhSILWBJf8wRvkY49V0iZZ6sx0Jd1tCD%2FVrfk5aa90C8hxRFp3cNYvwkGujvepwbSjgw%2FCRvEcKQTaU3a4olATjK%2BDDdo%2FrEBjqkAbIXbwVazRCGih0cXLs5WEIpOkgq3OGF%2FVbDRn2W8JpGCA3CMEFvzhR27qQ30AK1XsSdavGr%2BLRc838Z01yOhRKqyxKPEkdd0aO1kaqjhufbfVhBuMjr%2FfMKtGM8au%2BnjEx1qBPhRDqDNpvWtecFpuZkZSaMIzVyywHFK2Y%2Bu0UINt7uVq681avMDQAPo%2Fwg4OISbXYyKYHlfUdtiPYU0912RBcs&X-Amz-Signature=2939e9950a412ef62c8c40ab5214efb5c1d7681bb1c253376991f9106f4b25d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARFLNX2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDOhjMKoG0VQS5TCDopXYTtSgPZCoYi76evg9%2BCx0kbXAIhAO02BpZf5O0cPHl8G9b7P2pTZy79TXUKaKzV1kEf1yTCKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzLFKrb%2Bzd0eYArlAq3ANbCTcgSPmRKRnVFzCqO3MYnMoUoOgtcwemtiDbdans94QCKtNLHwVnburbNHt8YyU3bnVBM726ZE3sbrgXCD1Hbd%2FE4HFlt%2BFAryshWlc9lmlL21VQFEbCqzRfN875IgEybOumm93JYKylt%2B5ScJkJ5lvfabOLgFcIAiLj%2BrgMygTnEYQiDpe8ansNnD%2FANDY8QeK9IUmCGybUb4tVUBkXrMWxLbD00zKE5T4qEz5ZnQ1ORz%2FGr5ySs5NxsXBNnJO6duHyEGR%2BLmeRG2R2pyYjenkB3qkcBua1%2Fx7pQoF5dw7A0SHGmcnu%2FV67g7KeakkC1alQfVRUAe%2FZCQjEPqZIViReMg%2BYG%2FY%2B5yaNcTrm%2Bp3f1RPmz9KZ3TQbwb3UDHl%2BRztq3bOdd75vibdEDvnEniPVZ%2FcbQ1RmnlZFh8BJB4Eq89zx8qLr0aZymbdG9tbfVihPrGj9bzjJEwx4jtO67Q%2B3pngzAgm5xEteBvaDF9%2ByPI3ppb7afkYcyFMBv1Xd4RqOdOnvM3yKXTzzSyRfooGbzlZ0pQ8gWhSILWBJf8wRvkY49V0iZZ6sx0Jd1tCD%2FVrfk5aa90C8hxRFp3cNYvwkGujvepwbSjgw%2FCRvEcKQTaU3a4olATjK%2BDDdo%2FrEBjqkAbIXbwVazRCGih0cXLs5WEIpOkgq3OGF%2FVbDRn2W8JpGCA3CMEFvzhR27qQ30AK1XsSdavGr%2BLRc838Z01yOhRKqyxKPEkdd0aO1kaqjhufbfVhBuMjr%2FfMKtGM8au%2BnjEx1qBPhRDqDNpvWtecFpuZkZSaMIzVyywHFK2Y%2Bu0UINt7uVq681avMDQAPo%2Fwg4OISbXYyKYHlfUdtiPYU0912RBcs&X-Amz-Signature=0e87401d20df9176a9a53f65cb4f569e08a7236ce2bce509492836cdd378e205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARFLNX2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDOhjMKoG0VQS5TCDopXYTtSgPZCoYi76evg9%2BCx0kbXAIhAO02BpZf5O0cPHl8G9b7P2pTZy79TXUKaKzV1kEf1yTCKv8DCFMQABoMNjM3NDIzMTgzODA1IgxzLFKrb%2Bzd0eYArlAq3ANbCTcgSPmRKRnVFzCqO3MYnMoUoOgtcwemtiDbdans94QCKtNLHwVnburbNHt8YyU3bnVBM726ZE3sbrgXCD1Hbd%2FE4HFlt%2BFAryshWlc9lmlL21VQFEbCqzRfN875IgEybOumm93JYKylt%2B5ScJkJ5lvfabOLgFcIAiLj%2BrgMygTnEYQiDpe8ansNnD%2FANDY8QeK9IUmCGybUb4tVUBkXrMWxLbD00zKE5T4qEz5ZnQ1ORz%2FGr5ySs5NxsXBNnJO6duHyEGR%2BLmeRG2R2pyYjenkB3qkcBua1%2Fx7pQoF5dw7A0SHGmcnu%2FV67g7KeakkC1alQfVRUAe%2FZCQjEPqZIViReMg%2BYG%2FY%2B5yaNcTrm%2Bp3f1RPmz9KZ3TQbwb3UDHl%2BRztq3bOdd75vibdEDvnEniPVZ%2FcbQ1RmnlZFh8BJB4Eq89zx8qLr0aZymbdG9tbfVihPrGj9bzjJEwx4jtO67Q%2B3pngzAgm5xEteBvaDF9%2ByPI3ppb7afkYcyFMBv1Xd4RqOdOnvM3yKXTzzSyRfooGbzlZ0pQ8gWhSILWBJf8wRvkY49V0iZZ6sx0Jd1tCD%2FVrfk5aa90C8hxRFp3cNYvwkGujvepwbSjgw%2FCRvEcKQTaU3a4olATjK%2BDDdo%2FrEBjqkAbIXbwVazRCGih0cXLs5WEIpOkgq3OGF%2FVbDRn2W8JpGCA3CMEFvzhR27qQ30AK1XsSdavGr%2BLRc838Z01yOhRKqyxKPEkdd0aO1kaqjhufbfVhBuMjr%2FfMKtGM8au%2BnjEx1qBPhRDqDNpvWtecFpuZkZSaMIzVyywHFK2Y%2Bu0UINt7uVq681avMDQAPo%2Fwg4OISbXYyKYHlfUdtiPYU0912RBcs&X-Amz-Signature=8e4602988949b1b726635bc43dce1c6893f373d8afa6ac05bfb04d9cc98df6ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
