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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CD2LL6K%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvAX2Qcqg8ZV6ELlno9EkWRdMgT02bIUBf4rW4aMExOAiEA%2BS0und3AuKvNWZN4xTZE3Oa%2BFyIb37xeWw7gU4ZyQfQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNccZlBY06Vt0ckYfyrcA%2Fp22syLY4m9OPQ8PFpcXt%2FfU%2BOWUurH7IqwICOqcHEdwLUL7afzHPXEGokiSQb3cQLzKM9E1FsasslX58L9xDjdNVCkkTu2DOWlTUAixIE2D4kbetnPh7rJ97CEQLqaa2xElb%2Fq90ykqw6afAM4pFBBO5C0UsaznS5riFapeNvy27FD3cMMWcT0WTLjjQkffmE%2B0y3mK0nOqnvlkC%2FNWDR3cJ7p%2Bj3p5DIW%2BWw1R2la8sacGFqwPzL16F%2FS3lcldVaP9IZFWms4gyBnCDjBnLr%2BWztOMsdOgA5IsK8p7xCKb4bHCDYQzIMfQ4zz23gmlzI8igkDJn9aNdotKc8z7jvtCydU5MDS2ksezR%2Ftgu%2BpAQy8eK0coKqm%2FqQCgt1XKQKuCK00KNl3fH9R4bs2gHi0kFNrWfWqhOs6ZLXBCl%2BD1lFiFqxANpmHbjzFnwlQGjoPSPRg9BCZ6Qnn5UyocMri0FPrvXMY95kna2jWEzVDt8ltz7lrEIIrXQYRYsv3gkfJvUWCYOD9akMiv1WdwWKJ1PHcU3m8Wl9pz9Nr1UxhYJWbA4rEeXN4DjSMYlFIFYJRr1GXOeeo8NzWVLedC6mYFh1%2BMSfV%2BRlK6GlfyOdCl8ZioY%2FlzCWECPT8MOfX2s8GOqUBWhj8HSz7fORoWWdldeNKndt0x8he%2BFIrX3QoSv2iNIYjfGVvgLKVdPxM0FmSROARB2cMp0TzfpjSps4ChrG5YhMeR26JG3OfF3evHLbBJedPOA%2BJ%2BNRQO%2F9X%2B4EEeWL7aNtccU%2BEdAc6UyssXtVemjiu6X4Mpc0ykBxmMTSfkn8MD3%2FdZX7X394TLYcLBmKlrlobWL4NVelOeSjuyjkSKyNX72hO&X-Amz-Signature=b704f9d678e9969b8a46c9ea144667c80cc6f649a6feeaf0a84014d586a4fce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CD2LL6K%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvAX2Qcqg8ZV6ELlno9EkWRdMgT02bIUBf4rW4aMExOAiEA%2BS0und3AuKvNWZN4xTZE3Oa%2BFyIb37xeWw7gU4ZyQfQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNccZlBY06Vt0ckYfyrcA%2Fp22syLY4m9OPQ8PFpcXt%2FfU%2BOWUurH7IqwICOqcHEdwLUL7afzHPXEGokiSQb3cQLzKM9E1FsasslX58L9xDjdNVCkkTu2DOWlTUAixIE2D4kbetnPh7rJ97CEQLqaa2xElb%2Fq90ykqw6afAM4pFBBO5C0UsaznS5riFapeNvy27FD3cMMWcT0WTLjjQkffmE%2B0y3mK0nOqnvlkC%2FNWDR3cJ7p%2Bj3p5DIW%2BWw1R2la8sacGFqwPzL16F%2FS3lcldVaP9IZFWms4gyBnCDjBnLr%2BWztOMsdOgA5IsK8p7xCKb4bHCDYQzIMfQ4zz23gmlzI8igkDJn9aNdotKc8z7jvtCydU5MDS2ksezR%2Ftgu%2BpAQy8eK0coKqm%2FqQCgt1XKQKuCK00KNl3fH9R4bs2gHi0kFNrWfWqhOs6ZLXBCl%2BD1lFiFqxANpmHbjzFnwlQGjoPSPRg9BCZ6Qnn5UyocMri0FPrvXMY95kna2jWEzVDt8ltz7lrEIIrXQYRYsv3gkfJvUWCYOD9akMiv1WdwWKJ1PHcU3m8Wl9pz9Nr1UxhYJWbA4rEeXN4DjSMYlFIFYJRr1GXOeeo8NzWVLedC6mYFh1%2BMSfV%2BRlK6GlfyOdCl8ZioY%2FlzCWECPT8MOfX2s8GOqUBWhj8HSz7fORoWWdldeNKndt0x8he%2BFIrX3QoSv2iNIYjfGVvgLKVdPxM0FmSROARB2cMp0TzfpjSps4ChrG5YhMeR26JG3OfF3evHLbBJedPOA%2BJ%2BNRQO%2F9X%2B4EEeWL7aNtccU%2BEdAc6UyssXtVemjiu6X4Mpc0ykBxmMTSfkn8MD3%2FdZX7X394TLYcLBmKlrlobWL4NVelOeSjuyjkSKyNX72hO&X-Amz-Signature=5b2b8eb1e7ec678622d70b28d2c4cbb6319ab438457c0de6b250f8c6f09d63a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CD2LL6K%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvAX2Qcqg8ZV6ELlno9EkWRdMgT02bIUBf4rW4aMExOAiEA%2BS0und3AuKvNWZN4xTZE3Oa%2BFyIb37xeWw7gU4ZyQfQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNccZlBY06Vt0ckYfyrcA%2Fp22syLY4m9OPQ8PFpcXt%2FfU%2BOWUurH7IqwICOqcHEdwLUL7afzHPXEGokiSQb3cQLzKM9E1FsasslX58L9xDjdNVCkkTu2DOWlTUAixIE2D4kbetnPh7rJ97CEQLqaa2xElb%2Fq90ykqw6afAM4pFBBO5C0UsaznS5riFapeNvy27FD3cMMWcT0WTLjjQkffmE%2B0y3mK0nOqnvlkC%2FNWDR3cJ7p%2Bj3p5DIW%2BWw1R2la8sacGFqwPzL16F%2FS3lcldVaP9IZFWms4gyBnCDjBnLr%2BWztOMsdOgA5IsK8p7xCKb4bHCDYQzIMfQ4zz23gmlzI8igkDJn9aNdotKc8z7jvtCydU5MDS2ksezR%2Ftgu%2BpAQy8eK0coKqm%2FqQCgt1XKQKuCK00KNl3fH9R4bs2gHi0kFNrWfWqhOs6ZLXBCl%2BD1lFiFqxANpmHbjzFnwlQGjoPSPRg9BCZ6Qnn5UyocMri0FPrvXMY95kna2jWEzVDt8ltz7lrEIIrXQYRYsv3gkfJvUWCYOD9akMiv1WdwWKJ1PHcU3m8Wl9pz9Nr1UxhYJWbA4rEeXN4DjSMYlFIFYJRr1GXOeeo8NzWVLedC6mYFh1%2BMSfV%2BRlK6GlfyOdCl8ZioY%2FlzCWECPT8MOfX2s8GOqUBWhj8HSz7fORoWWdldeNKndt0x8he%2BFIrX3QoSv2iNIYjfGVvgLKVdPxM0FmSROARB2cMp0TzfpjSps4ChrG5YhMeR26JG3OfF3evHLbBJedPOA%2BJ%2BNRQO%2F9X%2B4EEeWL7aNtccU%2BEdAc6UyssXtVemjiu6X4Mpc0ykBxmMTSfkn8MD3%2FdZX7X394TLYcLBmKlrlobWL4NVelOeSjuyjkSKyNX72hO&X-Amz-Signature=94e6fd4717d4f5cae20bcf45df13b7a4699f5deec5b63065209f67a379b10df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CD2LL6K%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvAX2Qcqg8ZV6ELlno9EkWRdMgT02bIUBf4rW4aMExOAiEA%2BS0und3AuKvNWZN4xTZE3Oa%2BFyIb37xeWw7gU4ZyQfQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNccZlBY06Vt0ckYfyrcA%2Fp22syLY4m9OPQ8PFpcXt%2FfU%2BOWUurH7IqwICOqcHEdwLUL7afzHPXEGokiSQb3cQLzKM9E1FsasslX58L9xDjdNVCkkTu2DOWlTUAixIE2D4kbetnPh7rJ97CEQLqaa2xElb%2Fq90ykqw6afAM4pFBBO5C0UsaznS5riFapeNvy27FD3cMMWcT0WTLjjQkffmE%2B0y3mK0nOqnvlkC%2FNWDR3cJ7p%2Bj3p5DIW%2BWw1R2la8sacGFqwPzL16F%2FS3lcldVaP9IZFWms4gyBnCDjBnLr%2BWztOMsdOgA5IsK8p7xCKb4bHCDYQzIMfQ4zz23gmlzI8igkDJn9aNdotKc8z7jvtCydU5MDS2ksezR%2Ftgu%2BpAQy8eK0coKqm%2FqQCgt1XKQKuCK00KNl3fH9R4bs2gHi0kFNrWfWqhOs6ZLXBCl%2BD1lFiFqxANpmHbjzFnwlQGjoPSPRg9BCZ6Qnn5UyocMri0FPrvXMY95kna2jWEzVDt8ltz7lrEIIrXQYRYsv3gkfJvUWCYOD9akMiv1WdwWKJ1PHcU3m8Wl9pz9Nr1UxhYJWbA4rEeXN4DjSMYlFIFYJRr1GXOeeo8NzWVLedC6mYFh1%2BMSfV%2BRlK6GlfyOdCl8ZioY%2FlzCWECPT8MOfX2s8GOqUBWhj8HSz7fORoWWdldeNKndt0x8he%2BFIrX3QoSv2iNIYjfGVvgLKVdPxM0FmSROARB2cMp0TzfpjSps4ChrG5YhMeR26JG3OfF3evHLbBJedPOA%2BJ%2BNRQO%2F9X%2B4EEeWL7aNtccU%2BEdAc6UyssXtVemjiu6X4Mpc0ykBxmMTSfkn8MD3%2FdZX7X394TLYcLBmKlrlobWL4NVelOeSjuyjkSKyNX72hO&X-Amz-Signature=416a6a9c555e64d085f2b15d1d1279009af27bfef253d69f52d9672166017ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CD2LL6K%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvAX2Qcqg8ZV6ELlno9EkWRdMgT02bIUBf4rW4aMExOAiEA%2BS0und3AuKvNWZN4xTZE3Oa%2BFyIb37xeWw7gU4ZyQfQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNccZlBY06Vt0ckYfyrcA%2Fp22syLY4m9OPQ8PFpcXt%2FfU%2BOWUurH7IqwICOqcHEdwLUL7afzHPXEGokiSQb3cQLzKM9E1FsasslX58L9xDjdNVCkkTu2DOWlTUAixIE2D4kbetnPh7rJ97CEQLqaa2xElb%2Fq90ykqw6afAM4pFBBO5C0UsaznS5riFapeNvy27FD3cMMWcT0WTLjjQkffmE%2B0y3mK0nOqnvlkC%2FNWDR3cJ7p%2Bj3p5DIW%2BWw1R2la8sacGFqwPzL16F%2FS3lcldVaP9IZFWms4gyBnCDjBnLr%2BWztOMsdOgA5IsK8p7xCKb4bHCDYQzIMfQ4zz23gmlzI8igkDJn9aNdotKc8z7jvtCydU5MDS2ksezR%2Ftgu%2BpAQy8eK0coKqm%2FqQCgt1XKQKuCK00KNl3fH9R4bs2gHi0kFNrWfWqhOs6ZLXBCl%2BD1lFiFqxANpmHbjzFnwlQGjoPSPRg9BCZ6Qnn5UyocMri0FPrvXMY95kna2jWEzVDt8ltz7lrEIIrXQYRYsv3gkfJvUWCYOD9akMiv1WdwWKJ1PHcU3m8Wl9pz9Nr1UxhYJWbA4rEeXN4DjSMYlFIFYJRr1GXOeeo8NzWVLedC6mYFh1%2BMSfV%2BRlK6GlfyOdCl8ZioY%2FlzCWECPT8MOfX2s8GOqUBWhj8HSz7fORoWWdldeNKndt0x8he%2BFIrX3QoSv2iNIYjfGVvgLKVdPxM0FmSROARB2cMp0TzfpjSps4ChrG5YhMeR26JG3OfF3evHLbBJedPOA%2BJ%2BNRQO%2F9X%2B4EEeWL7aNtccU%2BEdAc6UyssXtVemjiu6X4Mpc0ykBxmMTSfkn8MD3%2FdZX7X394TLYcLBmKlrlobWL4NVelOeSjuyjkSKyNX72hO&X-Amz-Signature=4d34463c11faaf9315f1088c571bf1d2338e7ef49b90febda8654c6bac518b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CD2LL6K%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvAX2Qcqg8ZV6ELlno9EkWRdMgT02bIUBf4rW4aMExOAiEA%2BS0und3AuKvNWZN4xTZE3Oa%2BFyIb37xeWw7gU4ZyQfQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNccZlBY06Vt0ckYfyrcA%2Fp22syLY4m9OPQ8PFpcXt%2FfU%2BOWUurH7IqwICOqcHEdwLUL7afzHPXEGokiSQb3cQLzKM9E1FsasslX58L9xDjdNVCkkTu2DOWlTUAixIE2D4kbetnPh7rJ97CEQLqaa2xElb%2Fq90ykqw6afAM4pFBBO5C0UsaznS5riFapeNvy27FD3cMMWcT0WTLjjQkffmE%2B0y3mK0nOqnvlkC%2FNWDR3cJ7p%2Bj3p5DIW%2BWw1R2la8sacGFqwPzL16F%2FS3lcldVaP9IZFWms4gyBnCDjBnLr%2BWztOMsdOgA5IsK8p7xCKb4bHCDYQzIMfQ4zz23gmlzI8igkDJn9aNdotKc8z7jvtCydU5MDS2ksezR%2Ftgu%2BpAQy8eK0coKqm%2FqQCgt1XKQKuCK00KNl3fH9R4bs2gHi0kFNrWfWqhOs6ZLXBCl%2BD1lFiFqxANpmHbjzFnwlQGjoPSPRg9BCZ6Qnn5UyocMri0FPrvXMY95kna2jWEzVDt8ltz7lrEIIrXQYRYsv3gkfJvUWCYOD9akMiv1WdwWKJ1PHcU3m8Wl9pz9Nr1UxhYJWbA4rEeXN4DjSMYlFIFYJRr1GXOeeo8NzWVLedC6mYFh1%2BMSfV%2BRlK6GlfyOdCl8ZioY%2FlzCWECPT8MOfX2s8GOqUBWhj8HSz7fORoWWdldeNKndt0x8he%2BFIrX3QoSv2iNIYjfGVvgLKVdPxM0FmSROARB2cMp0TzfpjSps4ChrG5YhMeR26JG3OfF3evHLbBJedPOA%2BJ%2BNRQO%2F9X%2B4EEeWL7aNtccU%2BEdAc6UyssXtVemjiu6X4Mpc0ykBxmMTSfkn8MD3%2FdZX7X394TLYcLBmKlrlobWL4NVelOeSjuyjkSKyNX72hO&X-Amz-Signature=e9d41ce46f8ade047f4298d2eb2e2f588f6ecb649746baa48ffa0bbb78b1d320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CD2LL6K%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvAX2Qcqg8ZV6ELlno9EkWRdMgT02bIUBf4rW4aMExOAiEA%2BS0und3AuKvNWZN4xTZE3Oa%2BFyIb37xeWw7gU4ZyQfQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNccZlBY06Vt0ckYfyrcA%2Fp22syLY4m9OPQ8PFpcXt%2FfU%2BOWUurH7IqwICOqcHEdwLUL7afzHPXEGokiSQb3cQLzKM9E1FsasslX58L9xDjdNVCkkTu2DOWlTUAixIE2D4kbetnPh7rJ97CEQLqaa2xElb%2Fq90ykqw6afAM4pFBBO5C0UsaznS5riFapeNvy27FD3cMMWcT0WTLjjQkffmE%2B0y3mK0nOqnvlkC%2FNWDR3cJ7p%2Bj3p5DIW%2BWw1R2la8sacGFqwPzL16F%2FS3lcldVaP9IZFWms4gyBnCDjBnLr%2BWztOMsdOgA5IsK8p7xCKb4bHCDYQzIMfQ4zz23gmlzI8igkDJn9aNdotKc8z7jvtCydU5MDS2ksezR%2Ftgu%2BpAQy8eK0coKqm%2FqQCgt1XKQKuCK00KNl3fH9R4bs2gHi0kFNrWfWqhOs6ZLXBCl%2BD1lFiFqxANpmHbjzFnwlQGjoPSPRg9BCZ6Qnn5UyocMri0FPrvXMY95kna2jWEzVDt8ltz7lrEIIrXQYRYsv3gkfJvUWCYOD9akMiv1WdwWKJ1PHcU3m8Wl9pz9Nr1UxhYJWbA4rEeXN4DjSMYlFIFYJRr1GXOeeo8NzWVLedC6mYFh1%2BMSfV%2BRlK6GlfyOdCl8ZioY%2FlzCWECPT8MOfX2s8GOqUBWhj8HSz7fORoWWdldeNKndt0x8he%2BFIrX3QoSv2iNIYjfGVvgLKVdPxM0FmSROARB2cMp0TzfpjSps4ChrG5YhMeR26JG3OfF3evHLbBJedPOA%2BJ%2BNRQO%2F9X%2B4EEeWL7aNtccU%2BEdAc6UyssXtVemjiu6X4Mpc0ykBxmMTSfkn8MD3%2FdZX7X394TLYcLBmKlrlobWL4NVelOeSjuyjkSKyNX72hO&X-Amz-Signature=1545329373139c445ebdb20666a2d3fd6f582a7c5a4f083cefd4553ae678b977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
