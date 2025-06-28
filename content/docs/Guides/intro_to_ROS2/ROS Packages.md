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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUSIHDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BjvxVJy2E%2BrAwVyiNPbtWtHi%2BSNdkn6zNguC8Se93sgIgSSmHXYZNxcCVvbqWQ6WuBryDehPtQSsSM8QKVAdk%2BuIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjnNJ3Jyhqkpre0iSrcAyxeH%2BMX%2FWuukFFOn1YXIuPzAYbxB3AMkOXFTL%2FmjDnYMoQ1KU3nBm9Wl%2F93ph6sOCjmyWAtW3HKhQ7hlx5PnrrKY2a30i8VUjmnM9tMRrjVJmSKm%2FDfdeq9%2BoGDXQ%2FpH6dQuYjY%2FiGD9KEYiC5Jx1uH1J4dEvMnwNh6maNV0c4I7uMeRtMr9Sw9gbHWxwN35EnurhxtCRgZrVsgaD91bHw65HL%2F%2FVj%2BuNjtqax7Sh0ckim3K4KTSWiA01JSCq4Bh5WPDI4owkoVl8sMJHpuG7IWkf7SS2nQu3ewj7e0%2BOaDAei3WmPk8kTtIdeAIo2y6hFKUPwcHWZf%2BvRu4QVM2fDlq6%2FKWc01OMla7AHZ%2BjSoNZbL%2BtAGfW8HPs%2BD23I0v1g588tJZ92MwGVMqgYU34mSH7297MAoRYNWa9KRdthQKK6LB3NLBwDybQJRIF8WkEeLUcSVR1Q8cmioR9%2FVhx2n1HA%2F3l0YX46I%2Fj6qMP32y9pH1mrtlXdw2aiyQ7bPHN0D%2FXRd%2FP4I6cJJDjA0XkCVbe7asPDQ7p509hlqQ71yvfh%2B1byb0GSDSnX5%2BEWrohEeW5%2B5ce2gIMGwmVJGsSvk8h1Dyg8essrLaU4EqhTaM9sZnUD1vki%2BQHR%2BMJ6p%2FcIGOqUBh4KNJGhaIKIVUS1wcIZZOpv8F8uaCzBbfg8JUY5gKw%2FB%2BB91HZ%2BqkeuClRLVeB1c0MApP%2FY46v7ZsZW2WkBypF%2BUczTyV7oEEY8f%2Fl0bfZciLU2Qj5VX9a4kv5tl1ZQsryT8OqmAuDvSYOIm1Yv1mePtryp%2B7CKGERnOY8rXdFkZQapRsrLFlC2TKDipBzqg%2BAigHybV08qCwMQRG5f0jgus67c6&X-Amz-Signature=d92cc912c2d8d981c6dcdc5c2fc23092241a9824c9f8f6e51632a698f50608fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUSIHDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BjvxVJy2E%2BrAwVyiNPbtWtHi%2BSNdkn6zNguC8Se93sgIgSSmHXYZNxcCVvbqWQ6WuBryDehPtQSsSM8QKVAdk%2BuIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjnNJ3Jyhqkpre0iSrcAyxeH%2BMX%2FWuukFFOn1YXIuPzAYbxB3AMkOXFTL%2FmjDnYMoQ1KU3nBm9Wl%2F93ph6sOCjmyWAtW3HKhQ7hlx5PnrrKY2a30i8VUjmnM9tMRrjVJmSKm%2FDfdeq9%2BoGDXQ%2FpH6dQuYjY%2FiGD9KEYiC5Jx1uH1J4dEvMnwNh6maNV0c4I7uMeRtMr9Sw9gbHWxwN35EnurhxtCRgZrVsgaD91bHw65HL%2F%2FVj%2BuNjtqax7Sh0ckim3K4KTSWiA01JSCq4Bh5WPDI4owkoVl8sMJHpuG7IWkf7SS2nQu3ewj7e0%2BOaDAei3WmPk8kTtIdeAIo2y6hFKUPwcHWZf%2BvRu4QVM2fDlq6%2FKWc01OMla7AHZ%2BjSoNZbL%2BtAGfW8HPs%2BD23I0v1g588tJZ92MwGVMqgYU34mSH7297MAoRYNWa9KRdthQKK6LB3NLBwDybQJRIF8WkEeLUcSVR1Q8cmioR9%2FVhx2n1HA%2F3l0YX46I%2Fj6qMP32y9pH1mrtlXdw2aiyQ7bPHN0D%2FXRd%2FP4I6cJJDjA0XkCVbe7asPDQ7p509hlqQ71yvfh%2B1byb0GSDSnX5%2BEWrohEeW5%2B5ce2gIMGwmVJGsSvk8h1Dyg8essrLaU4EqhTaM9sZnUD1vki%2BQHR%2BMJ6p%2FcIGOqUBh4KNJGhaIKIVUS1wcIZZOpv8F8uaCzBbfg8JUY5gKw%2FB%2BB91HZ%2BqkeuClRLVeB1c0MApP%2FY46v7ZsZW2WkBypF%2BUczTyV7oEEY8f%2Fl0bfZciLU2Qj5VX9a4kv5tl1ZQsryT8OqmAuDvSYOIm1Yv1mePtryp%2B7CKGERnOY8rXdFkZQapRsrLFlC2TKDipBzqg%2BAigHybV08qCwMQRG5f0jgus67c6&X-Amz-Signature=e07ee073504b14c9c612d76d3d8743a9025161460154a00fa1962eeb8370d268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUSIHDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BjvxVJy2E%2BrAwVyiNPbtWtHi%2BSNdkn6zNguC8Se93sgIgSSmHXYZNxcCVvbqWQ6WuBryDehPtQSsSM8QKVAdk%2BuIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjnNJ3Jyhqkpre0iSrcAyxeH%2BMX%2FWuukFFOn1YXIuPzAYbxB3AMkOXFTL%2FmjDnYMoQ1KU3nBm9Wl%2F93ph6sOCjmyWAtW3HKhQ7hlx5PnrrKY2a30i8VUjmnM9tMRrjVJmSKm%2FDfdeq9%2BoGDXQ%2FpH6dQuYjY%2FiGD9KEYiC5Jx1uH1J4dEvMnwNh6maNV0c4I7uMeRtMr9Sw9gbHWxwN35EnurhxtCRgZrVsgaD91bHw65HL%2F%2FVj%2BuNjtqax7Sh0ckim3K4KTSWiA01JSCq4Bh5WPDI4owkoVl8sMJHpuG7IWkf7SS2nQu3ewj7e0%2BOaDAei3WmPk8kTtIdeAIo2y6hFKUPwcHWZf%2BvRu4QVM2fDlq6%2FKWc01OMla7AHZ%2BjSoNZbL%2BtAGfW8HPs%2BD23I0v1g588tJZ92MwGVMqgYU34mSH7297MAoRYNWa9KRdthQKK6LB3NLBwDybQJRIF8WkEeLUcSVR1Q8cmioR9%2FVhx2n1HA%2F3l0YX46I%2Fj6qMP32y9pH1mrtlXdw2aiyQ7bPHN0D%2FXRd%2FP4I6cJJDjA0XkCVbe7asPDQ7p509hlqQ71yvfh%2B1byb0GSDSnX5%2BEWrohEeW5%2B5ce2gIMGwmVJGsSvk8h1Dyg8essrLaU4EqhTaM9sZnUD1vki%2BQHR%2BMJ6p%2FcIGOqUBh4KNJGhaIKIVUS1wcIZZOpv8F8uaCzBbfg8JUY5gKw%2FB%2BB91HZ%2BqkeuClRLVeB1c0MApP%2FY46v7ZsZW2WkBypF%2BUczTyV7oEEY8f%2Fl0bfZciLU2Qj5VX9a4kv5tl1ZQsryT8OqmAuDvSYOIm1Yv1mePtryp%2B7CKGERnOY8rXdFkZQapRsrLFlC2TKDipBzqg%2BAigHybV08qCwMQRG5f0jgus67c6&X-Amz-Signature=f324c2af11eaba6e4fb8e8ee6daa53deefdb97e848dd0bf83f3a5f5306b42233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUSIHDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BjvxVJy2E%2BrAwVyiNPbtWtHi%2BSNdkn6zNguC8Se93sgIgSSmHXYZNxcCVvbqWQ6WuBryDehPtQSsSM8QKVAdk%2BuIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjnNJ3Jyhqkpre0iSrcAyxeH%2BMX%2FWuukFFOn1YXIuPzAYbxB3AMkOXFTL%2FmjDnYMoQ1KU3nBm9Wl%2F93ph6sOCjmyWAtW3HKhQ7hlx5PnrrKY2a30i8VUjmnM9tMRrjVJmSKm%2FDfdeq9%2BoGDXQ%2FpH6dQuYjY%2FiGD9KEYiC5Jx1uH1J4dEvMnwNh6maNV0c4I7uMeRtMr9Sw9gbHWxwN35EnurhxtCRgZrVsgaD91bHw65HL%2F%2FVj%2BuNjtqax7Sh0ckim3K4KTSWiA01JSCq4Bh5WPDI4owkoVl8sMJHpuG7IWkf7SS2nQu3ewj7e0%2BOaDAei3WmPk8kTtIdeAIo2y6hFKUPwcHWZf%2BvRu4QVM2fDlq6%2FKWc01OMla7AHZ%2BjSoNZbL%2BtAGfW8HPs%2BD23I0v1g588tJZ92MwGVMqgYU34mSH7297MAoRYNWa9KRdthQKK6LB3NLBwDybQJRIF8WkEeLUcSVR1Q8cmioR9%2FVhx2n1HA%2F3l0YX46I%2Fj6qMP32y9pH1mrtlXdw2aiyQ7bPHN0D%2FXRd%2FP4I6cJJDjA0XkCVbe7asPDQ7p509hlqQ71yvfh%2B1byb0GSDSnX5%2BEWrohEeW5%2B5ce2gIMGwmVJGsSvk8h1Dyg8essrLaU4EqhTaM9sZnUD1vki%2BQHR%2BMJ6p%2FcIGOqUBh4KNJGhaIKIVUS1wcIZZOpv8F8uaCzBbfg8JUY5gKw%2FB%2BB91HZ%2BqkeuClRLVeB1c0MApP%2FY46v7ZsZW2WkBypF%2BUczTyV7oEEY8f%2Fl0bfZciLU2Qj5VX9a4kv5tl1ZQsryT8OqmAuDvSYOIm1Yv1mePtryp%2B7CKGERnOY8rXdFkZQapRsrLFlC2TKDipBzqg%2BAigHybV08qCwMQRG5f0jgus67c6&X-Amz-Signature=56f947b6caba8f6fb1121c9ac6e25f04f2c7336db49c6010533971ddca68aacf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUSIHDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BjvxVJy2E%2BrAwVyiNPbtWtHi%2BSNdkn6zNguC8Se93sgIgSSmHXYZNxcCVvbqWQ6WuBryDehPtQSsSM8QKVAdk%2BuIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjnNJ3Jyhqkpre0iSrcAyxeH%2BMX%2FWuukFFOn1YXIuPzAYbxB3AMkOXFTL%2FmjDnYMoQ1KU3nBm9Wl%2F93ph6sOCjmyWAtW3HKhQ7hlx5PnrrKY2a30i8VUjmnM9tMRrjVJmSKm%2FDfdeq9%2BoGDXQ%2FpH6dQuYjY%2FiGD9KEYiC5Jx1uH1J4dEvMnwNh6maNV0c4I7uMeRtMr9Sw9gbHWxwN35EnurhxtCRgZrVsgaD91bHw65HL%2F%2FVj%2BuNjtqax7Sh0ckim3K4KTSWiA01JSCq4Bh5WPDI4owkoVl8sMJHpuG7IWkf7SS2nQu3ewj7e0%2BOaDAei3WmPk8kTtIdeAIo2y6hFKUPwcHWZf%2BvRu4QVM2fDlq6%2FKWc01OMla7AHZ%2BjSoNZbL%2BtAGfW8HPs%2BD23I0v1g588tJZ92MwGVMqgYU34mSH7297MAoRYNWa9KRdthQKK6LB3NLBwDybQJRIF8WkEeLUcSVR1Q8cmioR9%2FVhx2n1HA%2F3l0YX46I%2Fj6qMP32y9pH1mrtlXdw2aiyQ7bPHN0D%2FXRd%2FP4I6cJJDjA0XkCVbe7asPDQ7p509hlqQ71yvfh%2B1byb0GSDSnX5%2BEWrohEeW5%2B5ce2gIMGwmVJGsSvk8h1Dyg8essrLaU4EqhTaM9sZnUD1vki%2BQHR%2BMJ6p%2FcIGOqUBh4KNJGhaIKIVUS1wcIZZOpv8F8uaCzBbfg8JUY5gKw%2FB%2BB91HZ%2BqkeuClRLVeB1c0MApP%2FY46v7ZsZW2WkBypF%2BUczTyV7oEEY8f%2Fl0bfZciLU2Qj5VX9a4kv5tl1ZQsryT8OqmAuDvSYOIm1Yv1mePtryp%2B7CKGERnOY8rXdFkZQapRsrLFlC2TKDipBzqg%2BAigHybV08qCwMQRG5f0jgus67c6&X-Amz-Signature=653fbd3ebbfe6b08e8a886572cbdd4518d36d48cae30f5400945744231aa7128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUSIHDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BjvxVJy2E%2BrAwVyiNPbtWtHi%2BSNdkn6zNguC8Se93sgIgSSmHXYZNxcCVvbqWQ6WuBryDehPtQSsSM8QKVAdk%2BuIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjnNJ3Jyhqkpre0iSrcAyxeH%2BMX%2FWuukFFOn1YXIuPzAYbxB3AMkOXFTL%2FmjDnYMoQ1KU3nBm9Wl%2F93ph6sOCjmyWAtW3HKhQ7hlx5PnrrKY2a30i8VUjmnM9tMRrjVJmSKm%2FDfdeq9%2BoGDXQ%2FpH6dQuYjY%2FiGD9KEYiC5Jx1uH1J4dEvMnwNh6maNV0c4I7uMeRtMr9Sw9gbHWxwN35EnurhxtCRgZrVsgaD91bHw65HL%2F%2FVj%2BuNjtqax7Sh0ckim3K4KTSWiA01JSCq4Bh5WPDI4owkoVl8sMJHpuG7IWkf7SS2nQu3ewj7e0%2BOaDAei3WmPk8kTtIdeAIo2y6hFKUPwcHWZf%2BvRu4QVM2fDlq6%2FKWc01OMla7AHZ%2BjSoNZbL%2BtAGfW8HPs%2BD23I0v1g588tJZ92MwGVMqgYU34mSH7297MAoRYNWa9KRdthQKK6LB3NLBwDybQJRIF8WkEeLUcSVR1Q8cmioR9%2FVhx2n1HA%2F3l0YX46I%2Fj6qMP32y9pH1mrtlXdw2aiyQ7bPHN0D%2FXRd%2FP4I6cJJDjA0XkCVbe7asPDQ7p509hlqQ71yvfh%2B1byb0GSDSnX5%2BEWrohEeW5%2B5ce2gIMGwmVJGsSvk8h1Dyg8essrLaU4EqhTaM9sZnUD1vki%2BQHR%2BMJ6p%2FcIGOqUBh4KNJGhaIKIVUS1wcIZZOpv8F8uaCzBbfg8JUY5gKw%2FB%2BB91HZ%2BqkeuClRLVeB1c0MApP%2FY46v7ZsZW2WkBypF%2BUczTyV7oEEY8f%2Fl0bfZciLU2Qj5VX9a4kv5tl1ZQsryT8OqmAuDvSYOIm1Yv1mePtryp%2B7CKGERnOY8rXdFkZQapRsrLFlC2TKDipBzqg%2BAigHybV08qCwMQRG5f0jgus67c6&X-Amz-Signature=6c1e38782575538edb59a633baec3b30831bbbb8f6c51b936591b6fa63d6dc49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUSIHDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BjvxVJy2E%2BrAwVyiNPbtWtHi%2BSNdkn6zNguC8Se93sgIgSSmHXYZNxcCVvbqWQ6WuBryDehPtQSsSM8QKVAdk%2BuIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjnNJ3Jyhqkpre0iSrcAyxeH%2BMX%2FWuukFFOn1YXIuPzAYbxB3AMkOXFTL%2FmjDnYMoQ1KU3nBm9Wl%2F93ph6sOCjmyWAtW3HKhQ7hlx5PnrrKY2a30i8VUjmnM9tMRrjVJmSKm%2FDfdeq9%2BoGDXQ%2FpH6dQuYjY%2FiGD9KEYiC5Jx1uH1J4dEvMnwNh6maNV0c4I7uMeRtMr9Sw9gbHWxwN35EnurhxtCRgZrVsgaD91bHw65HL%2F%2FVj%2BuNjtqax7Sh0ckim3K4KTSWiA01JSCq4Bh5WPDI4owkoVl8sMJHpuG7IWkf7SS2nQu3ewj7e0%2BOaDAei3WmPk8kTtIdeAIo2y6hFKUPwcHWZf%2BvRu4QVM2fDlq6%2FKWc01OMla7AHZ%2BjSoNZbL%2BtAGfW8HPs%2BD23I0v1g588tJZ92MwGVMqgYU34mSH7297MAoRYNWa9KRdthQKK6LB3NLBwDybQJRIF8WkEeLUcSVR1Q8cmioR9%2FVhx2n1HA%2F3l0YX46I%2Fj6qMP32y9pH1mrtlXdw2aiyQ7bPHN0D%2FXRd%2FP4I6cJJDjA0XkCVbe7asPDQ7p509hlqQ71yvfh%2B1byb0GSDSnX5%2BEWrohEeW5%2B5ce2gIMGwmVJGsSvk8h1Dyg8essrLaU4EqhTaM9sZnUD1vki%2BQHR%2BMJ6p%2FcIGOqUBh4KNJGhaIKIVUS1wcIZZOpv8F8uaCzBbfg8JUY5gKw%2FB%2BB91HZ%2BqkeuClRLVeB1c0MApP%2FY46v7ZsZW2WkBypF%2BUczTyV7oEEY8f%2Fl0bfZciLU2Qj5VX9a4kv5tl1ZQsryT8OqmAuDvSYOIm1Yv1mePtryp%2B7CKGERnOY8rXdFkZQapRsrLFlC2TKDipBzqg%2BAigHybV08qCwMQRG5f0jgus67c6&X-Amz-Signature=640d8ecce9f385906a3de63a5ec1ad7f56df21b0e63f4cffbcce8f6a42b64c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
