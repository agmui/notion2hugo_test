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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI32KRH6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDfm3X9sg4bd46XMa%2Bj8Vu06euUT7IWgtVudND8XNc2FQIhAL4YbGH7MjqDVbWMXODHF%2BMMVjXt0K3sm7INMXtNQvvDKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9Tf7nt4JBeufelwq3APZTLjXug9dCYFGKE73sXRiT6HP%2Bx%2Bq28%2BfT%2FNiEn7nSGnPhvh97vdLcUk5XzmPXbSRjRg0Zm7mGw2Tq6md%2BbEnm7kNCXI0YnyUYOeGW7%2FiXCqZzzhlVc5%2FZnaCIvrjjoTcVijQCHwrey6zOEpymGWAB9%2FJX4xja7c9l6V7DbBde906LLmc50T1q7KNmlEC2ngZs4qJ7p8MoUVZ9q0g7XZ0p204Vby0jvHBi0UHaOtJj6Cibc9slCG7CJyuRAT2yKFhqJY7Gkkn1blxng%2FHnPOYTkwG04G0Q6BZfasV%2BO8pzk5KwkHsNePueHbhyUIAlSzzRoKh9vW%2F9pEf77hlttAR6PhBzVKk63lZ4C6W87wlJlQYuTOz1VysMdAffPff3sTNvL5V4G8kUU7OfbnC%2BM271%2FQuxg%2F6JiF0ipKrAVUVlUc%2F3bpatgueUaELzKPH3oYjCnp255Rq1R4MygLPW2N4FA5XHDrG8o5K7K2G6TPZrZfic74yUZg7acYEKkaL%2BgY487w5ZDzlt9aiauQKmH7V6RmzbBo%2FhYFLyH4JeI%2FApZwNQwsetxGthb08Z2NKJkiYOuR7apBg1Mz1Lq7npxprzm3T1QhjabsM3wmagHMdiWxYweSLVTXb1PfFbjClsvrPBjqkAflXid5innynCVo%2BgVFtnbf6pvRcOhrbjDT4jd9HDIaCfsfCrn1%2FmkkFaHddJ69%2BqYg%2BH0y88rZCECrTP%2B1KVZ4sE%2BkVx0l898ZEJx%2Fzysxx0zkqWbIQMy8F%2FRNyw9SEWQ9sDkwcySskRw208beQgT0R5CEPZVDWNvTXMh4Rd3qCOlOR3YuYnUfrFtCC28Nvf%2FzlQP5bk%2B8YFi%2Fiu2izDyxj64yM&X-Amz-Signature=7d5ed27a36000ba39d2de946579dc4aac4892519f63fdd092d01bd2fc898539f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI32KRH6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDfm3X9sg4bd46XMa%2Bj8Vu06euUT7IWgtVudND8XNc2FQIhAL4YbGH7MjqDVbWMXODHF%2BMMVjXt0K3sm7INMXtNQvvDKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9Tf7nt4JBeufelwq3APZTLjXug9dCYFGKE73sXRiT6HP%2Bx%2Bq28%2BfT%2FNiEn7nSGnPhvh97vdLcUk5XzmPXbSRjRg0Zm7mGw2Tq6md%2BbEnm7kNCXI0YnyUYOeGW7%2FiXCqZzzhlVc5%2FZnaCIvrjjoTcVijQCHwrey6zOEpymGWAB9%2FJX4xja7c9l6V7DbBde906LLmc50T1q7KNmlEC2ngZs4qJ7p8MoUVZ9q0g7XZ0p204Vby0jvHBi0UHaOtJj6Cibc9slCG7CJyuRAT2yKFhqJY7Gkkn1blxng%2FHnPOYTkwG04G0Q6BZfasV%2BO8pzk5KwkHsNePueHbhyUIAlSzzRoKh9vW%2F9pEf77hlttAR6PhBzVKk63lZ4C6W87wlJlQYuTOz1VysMdAffPff3sTNvL5V4G8kUU7OfbnC%2BM271%2FQuxg%2F6JiF0ipKrAVUVlUc%2F3bpatgueUaELzKPH3oYjCnp255Rq1R4MygLPW2N4FA5XHDrG8o5K7K2G6TPZrZfic74yUZg7acYEKkaL%2BgY487w5ZDzlt9aiauQKmH7V6RmzbBo%2FhYFLyH4JeI%2FApZwNQwsetxGthb08Z2NKJkiYOuR7apBg1Mz1Lq7npxprzm3T1QhjabsM3wmagHMdiWxYweSLVTXb1PfFbjClsvrPBjqkAflXid5innynCVo%2BgVFtnbf6pvRcOhrbjDT4jd9HDIaCfsfCrn1%2FmkkFaHddJ69%2BqYg%2BH0y88rZCECrTP%2B1KVZ4sE%2BkVx0l898ZEJx%2Fzysxx0zkqWbIQMy8F%2FRNyw9SEWQ9sDkwcySskRw208beQgT0R5CEPZVDWNvTXMh4Rd3qCOlOR3YuYnUfrFtCC28Nvf%2FzlQP5bk%2B8YFi%2Fiu2izDyxj64yM&X-Amz-Signature=51bb68ed5671acd9bd2e4b483546e87b43d20ed6c6675ebcae99092943772b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI32KRH6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDfm3X9sg4bd46XMa%2Bj8Vu06euUT7IWgtVudND8XNc2FQIhAL4YbGH7MjqDVbWMXODHF%2BMMVjXt0K3sm7INMXtNQvvDKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9Tf7nt4JBeufelwq3APZTLjXug9dCYFGKE73sXRiT6HP%2Bx%2Bq28%2BfT%2FNiEn7nSGnPhvh97vdLcUk5XzmPXbSRjRg0Zm7mGw2Tq6md%2BbEnm7kNCXI0YnyUYOeGW7%2FiXCqZzzhlVc5%2FZnaCIvrjjoTcVijQCHwrey6zOEpymGWAB9%2FJX4xja7c9l6V7DbBde906LLmc50T1q7KNmlEC2ngZs4qJ7p8MoUVZ9q0g7XZ0p204Vby0jvHBi0UHaOtJj6Cibc9slCG7CJyuRAT2yKFhqJY7Gkkn1blxng%2FHnPOYTkwG04G0Q6BZfasV%2BO8pzk5KwkHsNePueHbhyUIAlSzzRoKh9vW%2F9pEf77hlttAR6PhBzVKk63lZ4C6W87wlJlQYuTOz1VysMdAffPff3sTNvL5V4G8kUU7OfbnC%2BM271%2FQuxg%2F6JiF0ipKrAVUVlUc%2F3bpatgueUaELzKPH3oYjCnp255Rq1R4MygLPW2N4FA5XHDrG8o5K7K2G6TPZrZfic74yUZg7acYEKkaL%2BgY487w5ZDzlt9aiauQKmH7V6RmzbBo%2FhYFLyH4JeI%2FApZwNQwsetxGthb08Z2NKJkiYOuR7apBg1Mz1Lq7npxprzm3T1QhjabsM3wmagHMdiWxYweSLVTXb1PfFbjClsvrPBjqkAflXid5innynCVo%2BgVFtnbf6pvRcOhrbjDT4jd9HDIaCfsfCrn1%2FmkkFaHddJ69%2BqYg%2BH0y88rZCECrTP%2B1KVZ4sE%2BkVx0l898ZEJx%2Fzysxx0zkqWbIQMy8F%2FRNyw9SEWQ9sDkwcySskRw208beQgT0R5CEPZVDWNvTXMh4Rd3qCOlOR3YuYnUfrFtCC28Nvf%2FzlQP5bk%2B8YFi%2Fiu2izDyxj64yM&X-Amz-Signature=a2581106c7a9d6d9bcded9230fefbc2ac5c4e9ed4c1a1055e61e8f415ad79835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI32KRH6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDfm3X9sg4bd46XMa%2Bj8Vu06euUT7IWgtVudND8XNc2FQIhAL4YbGH7MjqDVbWMXODHF%2BMMVjXt0K3sm7INMXtNQvvDKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9Tf7nt4JBeufelwq3APZTLjXug9dCYFGKE73sXRiT6HP%2Bx%2Bq28%2BfT%2FNiEn7nSGnPhvh97vdLcUk5XzmPXbSRjRg0Zm7mGw2Tq6md%2BbEnm7kNCXI0YnyUYOeGW7%2FiXCqZzzhlVc5%2FZnaCIvrjjoTcVijQCHwrey6zOEpymGWAB9%2FJX4xja7c9l6V7DbBde906LLmc50T1q7KNmlEC2ngZs4qJ7p8MoUVZ9q0g7XZ0p204Vby0jvHBi0UHaOtJj6Cibc9slCG7CJyuRAT2yKFhqJY7Gkkn1blxng%2FHnPOYTkwG04G0Q6BZfasV%2BO8pzk5KwkHsNePueHbhyUIAlSzzRoKh9vW%2F9pEf77hlttAR6PhBzVKk63lZ4C6W87wlJlQYuTOz1VysMdAffPff3sTNvL5V4G8kUU7OfbnC%2BM271%2FQuxg%2F6JiF0ipKrAVUVlUc%2F3bpatgueUaELzKPH3oYjCnp255Rq1R4MygLPW2N4FA5XHDrG8o5K7K2G6TPZrZfic74yUZg7acYEKkaL%2BgY487w5ZDzlt9aiauQKmH7V6RmzbBo%2FhYFLyH4JeI%2FApZwNQwsetxGthb08Z2NKJkiYOuR7apBg1Mz1Lq7npxprzm3T1QhjabsM3wmagHMdiWxYweSLVTXb1PfFbjClsvrPBjqkAflXid5innynCVo%2BgVFtnbf6pvRcOhrbjDT4jd9HDIaCfsfCrn1%2FmkkFaHddJ69%2BqYg%2BH0y88rZCECrTP%2B1KVZ4sE%2BkVx0l898ZEJx%2Fzysxx0zkqWbIQMy8F%2FRNyw9SEWQ9sDkwcySskRw208beQgT0R5CEPZVDWNvTXMh4Rd3qCOlOR3YuYnUfrFtCC28Nvf%2FzlQP5bk%2B8YFi%2Fiu2izDyxj64yM&X-Amz-Signature=a5077a5daba492f36e504a32dd90bbaa40e50a47e53adac1de83f3c62188e976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI32KRH6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDfm3X9sg4bd46XMa%2Bj8Vu06euUT7IWgtVudND8XNc2FQIhAL4YbGH7MjqDVbWMXODHF%2BMMVjXt0K3sm7INMXtNQvvDKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9Tf7nt4JBeufelwq3APZTLjXug9dCYFGKE73sXRiT6HP%2Bx%2Bq28%2BfT%2FNiEn7nSGnPhvh97vdLcUk5XzmPXbSRjRg0Zm7mGw2Tq6md%2BbEnm7kNCXI0YnyUYOeGW7%2FiXCqZzzhlVc5%2FZnaCIvrjjoTcVijQCHwrey6zOEpymGWAB9%2FJX4xja7c9l6V7DbBde906LLmc50T1q7KNmlEC2ngZs4qJ7p8MoUVZ9q0g7XZ0p204Vby0jvHBi0UHaOtJj6Cibc9slCG7CJyuRAT2yKFhqJY7Gkkn1blxng%2FHnPOYTkwG04G0Q6BZfasV%2BO8pzk5KwkHsNePueHbhyUIAlSzzRoKh9vW%2F9pEf77hlttAR6PhBzVKk63lZ4C6W87wlJlQYuTOz1VysMdAffPff3sTNvL5V4G8kUU7OfbnC%2BM271%2FQuxg%2F6JiF0ipKrAVUVlUc%2F3bpatgueUaELzKPH3oYjCnp255Rq1R4MygLPW2N4FA5XHDrG8o5K7K2G6TPZrZfic74yUZg7acYEKkaL%2BgY487w5ZDzlt9aiauQKmH7V6RmzbBo%2FhYFLyH4JeI%2FApZwNQwsetxGthb08Z2NKJkiYOuR7apBg1Mz1Lq7npxprzm3T1QhjabsM3wmagHMdiWxYweSLVTXb1PfFbjClsvrPBjqkAflXid5innynCVo%2BgVFtnbf6pvRcOhrbjDT4jd9HDIaCfsfCrn1%2FmkkFaHddJ69%2BqYg%2BH0y88rZCECrTP%2B1KVZ4sE%2BkVx0l898ZEJx%2Fzysxx0zkqWbIQMy8F%2FRNyw9SEWQ9sDkwcySskRw208beQgT0R5CEPZVDWNvTXMh4Rd3qCOlOR3YuYnUfrFtCC28Nvf%2FzlQP5bk%2B8YFi%2Fiu2izDyxj64yM&X-Amz-Signature=1379dd3e236df9526932857f94d7c51132260da073e5d22e913c8d614d0eb183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI32KRH6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDfm3X9sg4bd46XMa%2Bj8Vu06euUT7IWgtVudND8XNc2FQIhAL4YbGH7MjqDVbWMXODHF%2BMMVjXt0K3sm7INMXtNQvvDKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9Tf7nt4JBeufelwq3APZTLjXug9dCYFGKE73sXRiT6HP%2Bx%2Bq28%2BfT%2FNiEn7nSGnPhvh97vdLcUk5XzmPXbSRjRg0Zm7mGw2Tq6md%2BbEnm7kNCXI0YnyUYOeGW7%2FiXCqZzzhlVc5%2FZnaCIvrjjoTcVijQCHwrey6zOEpymGWAB9%2FJX4xja7c9l6V7DbBde906LLmc50T1q7KNmlEC2ngZs4qJ7p8MoUVZ9q0g7XZ0p204Vby0jvHBi0UHaOtJj6Cibc9slCG7CJyuRAT2yKFhqJY7Gkkn1blxng%2FHnPOYTkwG04G0Q6BZfasV%2BO8pzk5KwkHsNePueHbhyUIAlSzzRoKh9vW%2F9pEf77hlttAR6PhBzVKk63lZ4C6W87wlJlQYuTOz1VysMdAffPff3sTNvL5V4G8kUU7OfbnC%2BM271%2FQuxg%2F6JiF0ipKrAVUVlUc%2F3bpatgueUaELzKPH3oYjCnp255Rq1R4MygLPW2N4FA5XHDrG8o5K7K2G6TPZrZfic74yUZg7acYEKkaL%2BgY487w5ZDzlt9aiauQKmH7V6RmzbBo%2FhYFLyH4JeI%2FApZwNQwsetxGthb08Z2NKJkiYOuR7apBg1Mz1Lq7npxprzm3T1QhjabsM3wmagHMdiWxYweSLVTXb1PfFbjClsvrPBjqkAflXid5innynCVo%2BgVFtnbf6pvRcOhrbjDT4jd9HDIaCfsfCrn1%2FmkkFaHddJ69%2BqYg%2BH0y88rZCECrTP%2B1KVZ4sE%2BkVx0l898ZEJx%2Fzysxx0zkqWbIQMy8F%2FRNyw9SEWQ9sDkwcySskRw208beQgT0R5CEPZVDWNvTXMh4Rd3qCOlOR3YuYnUfrFtCC28Nvf%2FzlQP5bk%2B8YFi%2Fiu2izDyxj64yM&X-Amz-Signature=5545f2a111bd48b624968b2ef5da04a0c6b634267464129d66dfc241251ee55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI32KRH6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDfm3X9sg4bd46XMa%2Bj8Vu06euUT7IWgtVudND8XNc2FQIhAL4YbGH7MjqDVbWMXODHF%2BMMVjXt0K3sm7INMXtNQvvDKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD9Tf7nt4JBeufelwq3APZTLjXug9dCYFGKE73sXRiT6HP%2Bx%2Bq28%2BfT%2FNiEn7nSGnPhvh97vdLcUk5XzmPXbSRjRg0Zm7mGw2Tq6md%2BbEnm7kNCXI0YnyUYOeGW7%2FiXCqZzzhlVc5%2FZnaCIvrjjoTcVijQCHwrey6zOEpymGWAB9%2FJX4xja7c9l6V7DbBde906LLmc50T1q7KNmlEC2ngZs4qJ7p8MoUVZ9q0g7XZ0p204Vby0jvHBi0UHaOtJj6Cibc9slCG7CJyuRAT2yKFhqJY7Gkkn1blxng%2FHnPOYTkwG04G0Q6BZfasV%2BO8pzk5KwkHsNePueHbhyUIAlSzzRoKh9vW%2F9pEf77hlttAR6PhBzVKk63lZ4C6W87wlJlQYuTOz1VysMdAffPff3sTNvL5V4G8kUU7OfbnC%2BM271%2FQuxg%2F6JiF0ipKrAVUVlUc%2F3bpatgueUaELzKPH3oYjCnp255Rq1R4MygLPW2N4FA5XHDrG8o5K7K2G6TPZrZfic74yUZg7acYEKkaL%2BgY487w5ZDzlt9aiauQKmH7V6RmzbBo%2FhYFLyH4JeI%2FApZwNQwsetxGthb08Z2NKJkiYOuR7apBg1Mz1Lq7npxprzm3T1QhjabsM3wmagHMdiWxYweSLVTXb1PfFbjClsvrPBjqkAflXid5innynCVo%2BgVFtnbf6pvRcOhrbjDT4jd9HDIaCfsfCrn1%2FmkkFaHddJ69%2BqYg%2BH0y88rZCECrTP%2B1KVZ4sE%2BkVx0l898ZEJx%2Fzysxx0zkqWbIQMy8F%2FRNyw9SEWQ9sDkwcySskRw208beQgT0R5CEPZVDWNvTXMh4Rd3qCOlOR3YuYnUfrFtCC28Nvf%2FzlQP5bk%2B8YFi%2Fiu2izDyxj64yM&X-Amz-Signature=fce84127ff2f62b9b5411ffc6aa3375e893b987dab8086215c859b267fe17347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
