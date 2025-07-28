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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3HFPC4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCpKoDueeqDbP1QB4hGIwrHE6QdqDC1uPKuvH07HGazIgIhAIRGSruueEnNaKTqNoX7qHhrUfaJoZ6P0WIcl8B6VpFDKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngTgBQ9jJSmtcKe0q3APHI%2BYtgZMEk%2B%2BqDL6zoa6SP3RNpdB5iRe81woO5yt0%2FGM588rA3rukCyOUDVJSfVN%2F3v59SOGTUvLQx5BAz2pcJ3S%2BSzWQy9zfErXV%2B9Rcvu7XEDB4YVfceAVQSWaGbV7ssOphWzYRbKd8N1p1WVYHEgoNYbeILuNMl%2B%2Fsu5pbkmIAwq3l4pdQS5ldgb9UN6LLlBrH0u%2F%2BoBee3wr%2BEGd2M98PM6WT4hDAw%2BB0CvRjY5HXrokq3Z3Baw2pV0WhzIZPIpqB4C7NMRn4k8G2XPMY3UBQYLB2f07Xn86Fc58AFYQdJFrc0nJEaURxw1L14l1ncVJtaXPeKVly4d3RF5Qcabohw8OxH9hZOGhoOcD1Lt2J9YQYRj%2BqPPfT%2FDdUnXZtbQaVhiZ89hf%2F%2BQmM4pMVgolDrAS8KAtGwNSzFUl%2FLwNoAztVc%2FgQerkZGSlTY9c%2F3HmCnwnLE5GI3Vckzdqval3%2BnwbVyz3FYh5rKH4RlJhZSlJIXaPC5ZIfs0DANFkvhrTRbhkMOFDkB%2FIw37n6stAYScoRsxl6upGJy16ScK0FkDnqN35%2BNPX8k78m1SexJ%2BrA3tiwi7IF1ViKM0YZPCE2JFCbMMbLJxY25CLVT6%2FyoshfQe62ZknkGzC60Z7EBjqkAY7LPBZMVFPOGGP0Ukg80vWYIh%2B2MpsHCtJ7QT%2BwQ2MzfaQkloIxuCeELSd9BUdmIS8Zru7YfCcGD9ksQpu6g%2BaERRDpn3vrsKmselIKNFqx33tqa1vCd4xRw%2FH4OUlW8t%2BJ%2Bk93ChyZ4jFmdeDBcO6QyWSafB9XuCYOn78KyE%2BfuomrrO2Q3PtXQ4W6rPAQNmOrFtd7y6aP5SqOrHeH8MK6Absw&X-Amz-Signature=e1d8908bb3d5c8375fb29d4df0c07684ec67bcde37b6785a64e47070702593ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3HFPC4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCpKoDueeqDbP1QB4hGIwrHE6QdqDC1uPKuvH07HGazIgIhAIRGSruueEnNaKTqNoX7qHhrUfaJoZ6P0WIcl8B6VpFDKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngTgBQ9jJSmtcKe0q3APHI%2BYtgZMEk%2B%2BqDL6zoa6SP3RNpdB5iRe81woO5yt0%2FGM588rA3rukCyOUDVJSfVN%2F3v59SOGTUvLQx5BAz2pcJ3S%2BSzWQy9zfErXV%2B9Rcvu7XEDB4YVfceAVQSWaGbV7ssOphWzYRbKd8N1p1WVYHEgoNYbeILuNMl%2B%2Fsu5pbkmIAwq3l4pdQS5ldgb9UN6LLlBrH0u%2F%2BoBee3wr%2BEGd2M98PM6WT4hDAw%2BB0CvRjY5HXrokq3Z3Baw2pV0WhzIZPIpqB4C7NMRn4k8G2XPMY3UBQYLB2f07Xn86Fc58AFYQdJFrc0nJEaURxw1L14l1ncVJtaXPeKVly4d3RF5Qcabohw8OxH9hZOGhoOcD1Lt2J9YQYRj%2BqPPfT%2FDdUnXZtbQaVhiZ89hf%2F%2BQmM4pMVgolDrAS8KAtGwNSzFUl%2FLwNoAztVc%2FgQerkZGSlTY9c%2F3HmCnwnLE5GI3Vckzdqval3%2BnwbVyz3FYh5rKH4RlJhZSlJIXaPC5ZIfs0DANFkvhrTRbhkMOFDkB%2FIw37n6stAYScoRsxl6upGJy16ScK0FkDnqN35%2BNPX8k78m1SexJ%2BrA3tiwi7IF1ViKM0YZPCE2JFCbMMbLJxY25CLVT6%2FyoshfQe62ZknkGzC60Z7EBjqkAY7LPBZMVFPOGGP0Ukg80vWYIh%2B2MpsHCtJ7QT%2BwQ2MzfaQkloIxuCeELSd9BUdmIS8Zru7YfCcGD9ksQpu6g%2BaERRDpn3vrsKmselIKNFqx33tqa1vCd4xRw%2FH4OUlW8t%2BJ%2Bk93ChyZ4jFmdeDBcO6QyWSafB9XuCYOn78KyE%2BfuomrrO2Q3PtXQ4W6rPAQNmOrFtd7y6aP5SqOrHeH8MK6Absw&X-Amz-Signature=c6578f6535275f70ca91358e03a6c1c9fe5825ab188437e35e31c4aae80796c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3HFPC4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCpKoDueeqDbP1QB4hGIwrHE6QdqDC1uPKuvH07HGazIgIhAIRGSruueEnNaKTqNoX7qHhrUfaJoZ6P0WIcl8B6VpFDKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngTgBQ9jJSmtcKe0q3APHI%2BYtgZMEk%2B%2BqDL6zoa6SP3RNpdB5iRe81woO5yt0%2FGM588rA3rukCyOUDVJSfVN%2F3v59SOGTUvLQx5BAz2pcJ3S%2BSzWQy9zfErXV%2B9Rcvu7XEDB4YVfceAVQSWaGbV7ssOphWzYRbKd8N1p1WVYHEgoNYbeILuNMl%2B%2Fsu5pbkmIAwq3l4pdQS5ldgb9UN6LLlBrH0u%2F%2BoBee3wr%2BEGd2M98PM6WT4hDAw%2BB0CvRjY5HXrokq3Z3Baw2pV0WhzIZPIpqB4C7NMRn4k8G2XPMY3UBQYLB2f07Xn86Fc58AFYQdJFrc0nJEaURxw1L14l1ncVJtaXPeKVly4d3RF5Qcabohw8OxH9hZOGhoOcD1Lt2J9YQYRj%2BqPPfT%2FDdUnXZtbQaVhiZ89hf%2F%2BQmM4pMVgolDrAS8KAtGwNSzFUl%2FLwNoAztVc%2FgQerkZGSlTY9c%2F3HmCnwnLE5GI3Vckzdqval3%2BnwbVyz3FYh5rKH4RlJhZSlJIXaPC5ZIfs0DANFkvhrTRbhkMOFDkB%2FIw37n6stAYScoRsxl6upGJy16ScK0FkDnqN35%2BNPX8k78m1SexJ%2BrA3tiwi7IF1ViKM0YZPCE2JFCbMMbLJxY25CLVT6%2FyoshfQe62ZknkGzC60Z7EBjqkAY7LPBZMVFPOGGP0Ukg80vWYIh%2B2MpsHCtJ7QT%2BwQ2MzfaQkloIxuCeELSd9BUdmIS8Zru7YfCcGD9ksQpu6g%2BaERRDpn3vrsKmselIKNFqx33tqa1vCd4xRw%2FH4OUlW8t%2BJ%2Bk93ChyZ4jFmdeDBcO6QyWSafB9XuCYOn78KyE%2BfuomrrO2Q3PtXQ4W6rPAQNmOrFtd7y6aP5SqOrHeH8MK6Absw&X-Amz-Signature=bb344754c0137f94ec581f8dfb69b4dbcfacc494163cf1206f025a499aa7fd85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3HFPC4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCpKoDueeqDbP1QB4hGIwrHE6QdqDC1uPKuvH07HGazIgIhAIRGSruueEnNaKTqNoX7qHhrUfaJoZ6P0WIcl8B6VpFDKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngTgBQ9jJSmtcKe0q3APHI%2BYtgZMEk%2B%2BqDL6zoa6SP3RNpdB5iRe81woO5yt0%2FGM588rA3rukCyOUDVJSfVN%2F3v59SOGTUvLQx5BAz2pcJ3S%2BSzWQy9zfErXV%2B9Rcvu7XEDB4YVfceAVQSWaGbV7ssOphWzYRbKd8N1p1WVYHEgoNYbeILuNMl%2B%2Fsu5pbkmIAwq3l4pdQS5ldgb9UN6LLlBrH0u%2F%2BoBee3wr%2BEGd2M98PM6WT4hDAw%2BB0CvRjY5HXrokq3Z3Baw2pV0WhzIZPIpqB4C7NMRn4k8G2XPMY3UBQYLB2f07Xn86Fc58AFYQdJFrc0nJEaURxw1L14l1ncVJtaXPeKVly4d3RF5Qcabohw8OxH9hZOGhoOcD1Lt2J9YQYRj%2BqPPfT%2FDdUnXZtbQaVhiZ89hf%2F%2BQmM4pMVgolDrAS8KAtGwNSzFUl%2FLwNoAztVc%2FgQerkZGSlTY9c%2F3HmCnwnLE5GI3Vckzdqval3%2BnwbVyz3FYh5rKH4RlJhZSlJIXaPC5ZIfs0DANFkvhrTRbhkMOFDkB%2FIw37n6stAYScoRsxl6upGJy16ScK0FkDnqN35%2BNPX8k78m1SexJ%2BrA3tiwi7IF1ViKM0YZPCE2JFCbMMbLJxY25CLVT6%2FyoshfQe62ZknkGzC60Z7EBjqkAY7LPBZMVFPOGGP0Ukg80vWYIh%2B2MpsHCtJ7QT%2BwQ2MzfaQkloIxuCeELSd9BUdmIS8Zru7YfCcGD9ksQpu6g%2BaERRDpn3vrsKmselIKNFqx33tqa1vCd4xRw%2FH4OUlW8t%2BJ%2Bk93ChyZ4jFmdeDBcO6QyWSafB9XuCYOn78KyE%2BfuomrrO2Q3PtXQ4W6rPAQNmOrFtd7y6aP5SqOrHeH8MK6Absw&X-Amz-Signature=c3502907eb3162a3630edd743efc2357ec0ea11bec8a0775e335b8250bbd685d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3HFPC4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCpKoDueeqDbP1QB4hGIwrHE6QdqDC1uPKuvH07HGazIgIhAIRGSruueEnNaKTqNoX7qHhrUfaJoZ6P0WIcl8B6VpFDKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngTgBQ9jJSmtcKe0q3APHI%2BYtgZMEk%2B%2BqDL6zoa6SP3RNpdB5iRe81woO5yt0%2FGM588rA3rukCyOUDVJSfVN%2F3v59SOGTUvLQx5BAz2pcJ3S%2BSzWQy9zfErXV%2B9Rcvu7XEDB4YVfceAVQSWaGbV7ssOphWzYRbKd8N1p1WVYHEgoNYbeILuNMl%2B%2Fsu5pbkmIAwq3l4pdQS5ldgb9UN6LLlBrH0u%2F%2BoBee3wr%2BEGd2M98PM6WT4hDAw%2BB0CvRjY5HXrokq3Z3Baw2pV0WhzIZPIpqB4C7NMRn4k8G2XPMY3UBQYLB2f07Xn86Fc58AFYQdJFrc0nJEaURxw1L14l1ncVJtaXPeKVly4d3RF5Qcabohw8OxH9hZOGhoOcD1Lt2J9YQYRj%2BqPPfT%2FDdUnXZtbQaVhiZ89hf%2F%2BQmM4pMVgolDrAS8KAtGwNSzFUl%2FLwNoAztVc%2FgQerkZGSlTY9c%2F3HmCnwnLE5GI3Vckzdqval3%2BnwbVyz3FYh5rKH4RlJhZSlJIXaPC5ZIfs0DANFkvhrTRbhkMOFDkB%2FIw37n6stAYScoRsxl6upGJy16ScK0FkDnqN35%2BNPX8k78m1SexJ%2BrA3tiwi7IF1ViKM0YZPCE2JFCbMMbLJxY25CLVT6%2FyoshfQe62ZknkGzC60Z7EBjqkAY7LPBZMVFPOGGP0Ukg80vWYIh%2B2MpsHCtJ7QT%2BwQ2MzfaQkloIxuCeELSd9BUdmIS8Zru7YfCcGD9ksQpu6g%2BaERRDpn3vrsKmselIKNFqx33tqa1vCd4xRw%2FH4OUlW8t%2BJ%2Bk93ChyZ4jFmdeDBcO6QyWSafB9XuCYOn78KyE%2BfuomrrO2Q3PtXQ4W6rPAQNmOrFtd7y6aP5SqOrHeH8MK6Absw&X-Amz-Signature=20e5c653f535bc6d06154b7153e2d69bfca4e218b3813b36575bc914bd1e1854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3HFPC4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCpKoDueeqDbP1QB4hGIwrHE6QdqDC1uPKuvH07HGazIgIhAIRGSruueEnNaKTqNoX7qHhrUfaJoZ6P0WIcl8B6VpFDKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngTgBQ9jJSmtcKe0q3APHI%2BYtgZMEk%2B%2BqDL6zoa6SP3RNpdB5iRe81woO5yt0%2FGM588rA3rukCyOUDVJSfVN%2F3v59SOGTUvLQx5BAz2pcJ3S%2BSzWQy9zfErXV%2B9Rcvu7XEDB4YVfceAVQSWaGbV7ssOphWzYRbKd8N1p1WVYHEgoNYbeILuNMl%2B%2Fsu5pbkmIAwq3l4pdQS5ldgb9UN6LLlBrH0u%2F%2BoBee3wr%2BEGd2M98PM6WT4hDAw%2BB0CvRjY5HXrokq3Z3Baw2pV0WhzIZPIpqB4C7NMRn4k8G2XPMY3UBQYLB2f07Xn86Fc58AFYQdJFrc0nJEaURxw1L14l1ncVJtaXPeKVly4d3RF5Qcabohw8OxH9hZOGhoOcD1Lt2J9YQYRj%2BqPPfT%2FDdUnXZtbQaVhiZ89hf%2F%2BQmM4pMVgolDrAS8KAtGwNSzFUl%2FLwNoAztVc%2FgQerkZGSlTY9c%2F3HmCnwnLE5GI3Vckzdqval3%2BnwbVyz3FYh5rKH4RlJhZSlJIXaPC5ZIfs0DANFkvhrTRbhkMOFDkB%2FIw37n6stAYScoRsxl6upGJy16ScK0FkDnqN35%2BNPX8k78m1SexJ%2BrA3tiwi7IF1ViKM0YZPCE2JFCbMMbLJxY25CLVT6%2FyoshfQe62ZknkGzC60Z7EBjqkAY7LPBZMVFPOGGP0Ukg80vWYIh%2B2MpsHCtJ7QT%2BwQ2MzfaQkloIxuCeELSd9BUdmIS8Zru7YfCcGD9ksQpu6g%2BaERRDpn3vrsKmselIKNFqx33tqa1vCd4xRw%2FH4OUlW8t%2BJ%2Bk93ChyZ4jFmdeDBcO6QyWSafB9XuCYOn78KyE%2BfuomrrO2Q3PtXQ4W6rPAQNmOrFtd7y6aP5SqOrHeH8MK6Absw&X-Amz-Signature=5ffea641823759ab8e9cf503e2c81aa13d013fd7a4f0eafe6a335329e164ed55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3HFPC4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCpKoDueeqDbP1QB4hGIwrHE6QdqDC1uPKuvH07HGazIgIhAIRGSruueEnNaKTqNoX7qHhrUfaJoZ6P0WIcl8B6VpFDKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngTgBQ9jJSmtcKe0q3APHI%2BYtgZMEk%2B%2BqDL6zoa6SP3RNpdB5iRe81woO5yt0%2FGM588rA3rukCyOUDVJSfVN%2F3v59SOGTUvLQx5BAz2pcJ3S%2BSzWQy9zfErXV%2B9Rcvu7XEDB4YVfceAVQSWaGbV7ssOphWzYRbKd8N1p1WVYHEgoNYbeILuNMl%2B%2Fsu5pbkmIAwq3l4pdQS5ldgb9UN6LLlBrH0u%2F%2BoBee3wr%2BEGd2M98PM6WT4hDAw%2BB0CvRjY5HXrokq3Z3Baw2pV0WhzIZPIpqB4C7NMRn4k8G2XPMY3UBQYLB2f07Xn86Fc58AFYQdJFrc0nJEaURxw1L14l1ncVJtaXPeKVly4d3RF5Qcabohw8OxH9hZOGhoOcD1Lt2J9YQYRj%2BqPPfT%2FDdUnXZtbQaVhiZ89hf%2F%2BQmM4pMVgolDrAS8KAtGwNSzFUl%2FLwNoAztVc%2FgQerkZGSlTY9c%2F3HmCnwnLE5GI3Vckzdqval3%2BnwbVyz3FYh5rKH4RlJhZSlJIXaPC5ZIfs0DANFkvhrTRbhkMOFDkB%2FIw37n6stAYScoRsxl6upGJy16ScK0FkDnqN35%2BNPX8k78m1SexJ%2BrA3tiwi7IF1ViKM0YZPCE2JFCbMMbLJxY25CLVT6%2FyoshfQe62ZknkGzC60Z7EBjqkAY7LPBZMVFPOGGP0Ukg80vWYIh%2B2MpsHCtJ7QT%2BwQ2MzfaQkloIxuCeELSd9BUdmIS8Zru7YfCcGD9ksQpu6g%2BaERRDpn3vrsKmselIKNFqx33tqa1vCd4xRw%2FH4OUlW8t%2BJ%2Bk93ChyZ4jFmdeDBcO6QyWSafB9XuCYOn78KyE%2BfuomrrO2Q3PtXQ4W6rPAQNmOrFtd7y6aP5SqOrHeH8MK6Absw&X-Amz-Signature=c6f22375d101aea56ec4d24f0db3edc4c1b2afdd39aaaf9612c9080b2c715c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
