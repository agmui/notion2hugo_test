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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYKPL4HI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUpK5W2CyBxJJw4h1uXPbvT7lzeXayLqkZtUqZsvXWyAiBVVYLVR0J5pk9QQZOGVMYqIvmboC%2BrAcGByTKC%2FR%2BaySr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpsIalrGeTfdsah3OKtwDay5zYqDm%2B33ObMCzYVl5kCNYCqo%2BUgP1o51f%2F2kQxW4D%2BoIfe1GwMjpJd5jq79qQMVcon5Qzef97R6d%2FspJ2MiotyhygYdbdgrVj4fIGHpIMcJ7dCPDHpUwy7k1Y939bicBZQxwduVl3u%2FI9SarXbsYedKw2chawdb5Sr2VJOukYdT2Kd3IjSr1vAFi0HEUQZk0WqDg9eqvg1p%2BbYqA27ReIjm3VRSoIPPAOGfsZ7sPoxeMW%2Fl4KlpVyz0Cs7JXQ6VywJbY5J6a0mEO2q7ViqwzbHxbad2%2F2u7546l%2B3AV%2FdtceFMXLdjhP1JFwI7CJQP5iG4zc4gvdnsu7afkow%2FIbdQ%2Fk7WQv9SuIYxrko0f8IAzmAnNSpMmCVmeh3BwS%2BxLsw6A4I45Tz3WFLt7QD2S4BtFaHYTrvZQiXR5Jus%2FbQZN7L4lMbffV2Jwv48zfcLaGt5fUM7Ylw1w0rNZ2ozdrK7yc6wFyyrYdsMnq%2F0ufKGrB62Wx2ZcR6PRrw0MPGuIHiR7RViSVQB6IpBNZBYMhNQ6MyWgAUmTYZAPqHrnIwMHpud1QRqQjT1WTIA9FTmJD6F2kFxHUWmtI00ZpOcQBOHoYoyaPFVDJ45CqIkPS7xN7cfAqIHS2%2FQX0wsIqPvwY6pgFPvE9sVWRUQ3ag1D1tAMAxMu4Os7eLKTICGJ8vWEiJpiv5D8bvLtqb29reYGmwwONU8MEQLRS1HJf2GG84nJV4apFvzCX0gcR6Q0ehoabvpDUgXDiyxfBH%2BuViY%2F3I6prF6%2BZahlH4RqXoeLZHWZdWjwo6SBKtWhAYizbZJZPluDJShjCpwmM343kJOiFe%2Fc7LoDTYoSjY0NAFU6c0KTs4nRly9yZk&X-Amz-Signature=8a50afa9acde8ed700e75d400bb89b887ec6f0646b162145f7dcf0063d3857ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYKPL4HI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUpK5W2CyBxJJw4h1uXPbvT7lzeXayLqkZtUqZsvXWyAiBVVYLVR0J5pk9QQZOGVMYqIvmboC%2BrAcGByTKC%2FR%2BaySr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpsIalrGeTfdsah3OKtwDay5zYqDm%2B33ObMCzYVl5kCNYCqo%2BUgP1o51f%2F2kQxW4D%2BoIfe1GwMjpJd5jq79qQMVcon5Qzef97R6d%2FspJ2MiotyhygYdbdgrVj4fIGHpIMcJ7dCPDHpUwy7k1Y939bicBZQxwduVl3u%2FI9SarXbsYedKw2chawdb5Sr2VJOukYdT2Kd3IjSr1vAFi0HEUQZk0WqDg9eqvg1p%2BbYqA27ReIjm3VRSoIPPAOGfsZ7sPoxeMW%2Fl4KlpVyz0Cs7JXQ6VywJbY5J6a0mEO2q7ViqwzbHxbad2%2F2u7546l%2B3AV%2FdtceFMXLdjhP1JFwI7CJQP5iG4zc4gvdnsu7afkow%2FIbdQ%2Fk7WQv9SuIYxrko0f8IAzmAnNSpMmCVmeh3BwS%2BxLsw6A4I45Tz3WFLt7QD2S4BtFaHYTrvZQiXR5Jus%2FbQZN7L4lMbffV2Jwv48zfcLaGt5fUM7Ylw1w0rNZ2ozdrK7yc6wFyyrYdsMnq%2F0ufKGrB62Wx2ZcR6PRrw0MPGuIHiR7RViSVQB6IpBNZBYMhNQ6MyWgAUmTYZAPqHrnIwMHpud1QRqQjT1WTIA9FTmJD6F2kFxHUWmtI00ZpOcQBOHoYoyaPFVDJ45CqIkPS7xN7cfAqIHS2%2FQX0wsIqPvwY6pgFPvE9sVWRUQ3ag1D1tAMAxMu4Os7eLKTICGJ8vWEiJpiv5D8bvLtqb29reYGmwwONU8MEQLRS1HJf2GG84nJV4apFvzCX0gcR6Q0ehoabvpDUgXDiyxfBH%2BuViY%2F3I6prF6%2BZahlH4RqXoeLZHWZdWjwo6SBKtWhAYizbZJZPluDJShjCpwmM343kJOiFe%2Fc7LoDTYoSjY0NAFU6c0KTs4nRly9yZk&X-Amz-Signature=712ea980a7628d6dac7faa325f334f4e8fb694245dfdf355ff1178590ba2142a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYKPL4HI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUpK5W2CyBxJJw4h1uXPbvT7lzeXayLqkZtUqZsvXWyAiBVVYLVR0J5pk9QQZOGVMYqIvmboC%2BrAcGByTKC%2FR%2BaySr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpsIalrGeTfdsah3OKtwDay5zYqDm%2B33ObMCzYVl5kCNYCqo%2BUgP1o51f%2F2kQxW4D%2BoIfe1GwMjpJd5jq79qQMVcon5Qzef97R6d%2FspJ2MiotyhygYdbdgrVj4fIGHpIMcJ7dCPDHpUwy7k1Y939bicBZQxwduVl3u%2FI9SarXbsYedKw2chawdb5Sr2VJOukYdT2Kd3IjSr1vAFi0HEUQZk0WqDg9eqvg1p%2BbYqA27ReIjm3VRSoIPPAOGfsZ7sPoxeMW%2Fl4KlpVyz0Cs7JXQ6VywJbY5J6a0mEO2q7ViqwzbHxbad2%2F2u7546l%2B3AV%2FdtceFMXLdjhP1JFwI7CJQP5iG4zc4gvdnsu7afkow%2FIbdQ%2Fk7WQv9SuIYxrko0f8IAzmAnNSpMmCVmeh3BwS%2BxLsw6A4I45Tz3WFLt7QD2S4BtFaHYTrvZQiXR5Jus%2FbQZN7L4lMbffV2Jwv48zfcLaGt5fUM7Ylw1w0rNZ2ozdrK7yc6wFyyrYdsMnq%2F0ufKGrB62Wx2ZcR6PRrw0MPGuIHiR7RViSVQB6IpBNZBYMhNQ6MyWgAUmTYZAPqHrnIwMHpud1QRqQjT1WTIA9FTmJD6F2kFxHUWmtI00ZpOcQBOHoYoyaPFVDJ45CqIkPS7xN7cfAqIHS2%2FQX0wsIqPvwY6pgFPvE9sVWRUQ3ag1D1tAMAxMu4Os7eLKTICGJ8vWEiJpiv5D8bvLtqb29reYGmwwONU8MEQLRS1HJf2GG84nJV4apFvzCX0gcR6Q0ehoabvpDUgXDiyxfBH%2BuViY%2F3I6prF6%2BZahlH4RqXoeLZHWZdWjwo6SBKtWhAYizbZJZPluDJShjCpwmM343kJOiFe%2Fc7LoDTYoSjY0NAFU6c0KTs4nRly9yZk&X-Amz-Signature=88c4d59c9f37e3e39853e46cdd5c1baf83a471d71df52e9826faf7e5db7bdd89&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYKPL4HI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUpK5W2CyBxJJw4h1uXPbvT7lzeXayLqkZtUqZsvXWyAiBVVYLVR0J5pk9QQZOGVMYqIvmboC%2BrAcGByTKC%2FR%2BaySr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpsIalrGeTfdsah3OKtwDay5zYqDm%2B33ObMCzYVl5kCNYCqo%2BUgP1o51f%2F2kQxW4D%2BoIfe1GwMjpJd5jq79qQMVcon5Qzef97R6d%2FspJ2MiotyhygYdbdgrVj4fIGHpIMcJ7dCPDHpUwy7k1Y939bicBZQxwduVl3u%2FI9SarXbsYedKw2chawdb5Sr2VJOukYdT2Kd3IjSr1vAFi0HEUQZk0WqDg9eqvg1p%2BbYqA27ReIjm3VRSoIPPAOGfsZ7sPoxeMW%2Fl4KlpVyz0Cs7JXQ6VywJbY5J6a0mEO2q7ViqwzbHxbad2%2F2u7546l%2B3AV%2FdtceFMXLdjhP1JFwI7CJQP5iG4zc4gvdnsu7afkow%2FIbdQ%2Fk7WQv9SuIYxrko0f8IAzmAnNSpMmCVmeh3BwS%2BxLsw6A4I45Tz3WFLt7QD2S4BtFaHYTrvZQiXR5Jus%2FbQZN7L4lMbffV2Jwv48zfcLaGt5fUM7Ylw1w0rNZ2ozdrK7yc6wFyyrYdsMnq%2F0ufKGrB62Wx2ZcR6PRrw0MPGuIHiR7RViSVQB6IpBNZBYMhNQ6MyWgAUmTYZAPqHrnIwMHpud1QRqQjT1WTIA9FTmJD6F2kFxHUWmtI00ZpOcQBOHoYoyaPFVDJ45CqIkPS7xN7cfAqIHS2%2FQX0wsIqPvwY6pgFPvE9sVWRUQ3ag1D1tAMAxMu4Os7eLKTICGJ8vWEiJpiv5D8bvLtqb29reYGmwwONU8MEQLRS1HJf2GG84nJV4apFvzCX0gcR6Q0ehoabvpDUgXDiyxfBH%2BuViY%2F3I6prF6%2BZahlH4RqXoeLZHWZdWjwo6SBKtWhAYizbZJZPluDJShjCpwmM343kJOiFe%2Fc7LoDTYoSjY0NAFU6c0KTs4nRly9yZk&X-Amz-Signature=63da42384a7a94a1d6f1ae5f515bcbba03db9881d29fb38db8dc01f6925e5a43&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYKPL4HI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUpK5W2CyBxJJw4h1uXPbvT7lzeXayLqkZtUqZsvXWyAiBVVYLVR0J5pk9QQZOGVMYqIvmboC%2BrAcGByTKC%2FR%2BaySr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpsIalrGeTfdsah3OKtwDay5zYqDm%2B33ObMCzYVl5kCNYCqo%2BUgP1o51f%2F2kQxW4D%2BoIfe1GwMjpJd5jq79qQMVcon5Qzef97R6d%2FspJ2MiotyhygYdbdgrVj4fIGHpIMcJ7dCPDHpUwy7k1Y939bicBZQxwduVl3u%2FI9SarXbsYedKw2chawdb5Sr2VJOukYdT2Kd3IjSr1vAFi0HEUQZk0WqDg9eqvg1p%2BbYqA27ReIjm3VRSoIPPAOGfsZ7sPoxeMW%2Fl4KlpVyz0Cs7JXQ6VywJbY5J6a0mEO2q7ViqwzbHxbad2%2F2u7546l%2B3AV%2FdtceFMXLdjhP1JFwI7CJQP5iG4zc4gvdnsu7afkow%2FIbdQ%2Fk7WQv9SuIYxrko0f8IAzmAnNSpMmCVmeh3BwS%2BxLsw6A4I45Tz3WFLt7QD2S4BtFaHYTrvZQiXR5Jus%2FbQZN7L4lMbffV2Jwv48zfcLaGt5fUM7Ylw1w0rNZ2ozdrK7yc6wFyyrYdsMnq%2F0ufKGrB62Wx2ZcR6PRrw0MPGuIHiR7RViSVQB6IpBNZBYMhNQ6MyWgAUmTYZAPqHrnIwMHpud1QRqQjT1WTIA9FTmJD6F2kFxHUWmtI00ZpOcQBOHoYoyaPFVDJ45CqIkPS7xN7cfAqIHS2%2FQX0wsIqPvwY6pgFPvE9sVWRUQ3ag1D1tAMAxMu4Os7eLKTICGJ8vWEiJpiv5D8bvLtqb29reYGmwwONU8MEQLRS1HJf2GG84nJV4apFvzCX0gcR6Q0ehoabvpDUgXDiyxfBH%2BuViY%2F3I6prF6%2BZahlH4RqXoeLZHWZdWjwo6SBKtWhAYizbZJZPluDJShjCpwmM343kJOiFe%2Fc7LoDTYoSjY0NAFU6c0KTs4nRly9yZk&X-Amz-Signature=4cd504cada918f3f957973d8f6bb50b45ef62d6e253c794d09c5b4f660d1aac7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYKPL4HI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUpK5W2CyBxJJw4h1uXPbvT7lzeXayLqkZtUqZsvXWyAiBVVYLVR0J5pk9QQZOGVMYqIvmboC%2BrAcGByTKC%2FR%2BaySr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpsIalrGeTfdsah3OKtwDay5zYqDm%2B33ObMCzYVl5kCNYCqo%2BUgP1o51f%2F2kQxW4D%2BoIfe1GwMjpJd5jq79qQMVcon5Qzef97R6d%2FspJ2MiotyhygYdbdgrVj4fIGHpIMcJ7dCPDHpUwy7k1Y939bicBZQxwduVl3u%2FI9SarXbsYedKw2chawdb5Sr2VJOukYdT2Kd3IjSr1vAFi0HEUQZk0WqDg9eqvg1p%2BbYqA27ReIjm3VRSoIPPAOGfsZ7sPoxeMW%2Fl4KlpVyz0Cs7JXQ6VywJbY5J6a0mEO2q7ViqwzbHxbad2%2F2u7546l%2B3AV%2FdtceFMXLdjhP1JFwI7CJQP5iG4zc4gvdnsu7afkow%2FIbdQ%2Fk7WQv9SuIYxrko0f8IAzmAnNSpMmCVmeh3BwS%2BxLsw6A4I45Tz3WFLt7QD2S4BtFaHYTrvZQiXR5Jus%2FbQZN7L4lMbffV2Jwv48zfcLaGt5fUM7Ylw1w0rNZ2ozdrK7yc6wFyyrYdsMnq%2F0ufKGrB62Wx2ZcR6PRrw0MPGuIHiR7RViSVQB6IpBNZBYMhNQ6MyWgAUmTYZAPqHrnIwMHpud1QRqQjT1WTIA9FTmJD6F2kFxHUWmtI00ZpOcQBOHoYoyaPFVDJ45CqIkPS7xN7cfAqIHS2%2FQX0wsIqPvwY6pgFPvE9sVWRUQ3ag1D1tAMAxMu4Os7eLKTICGJ8vWEiJpiv5D8bvLtqb29reYGmwwONU8MEQLRS1HJf2GG84nJV4apFvzCX0gcR6Q0ehoabvpDUgXDiyxfBH%2BuViY%2F3I6prF6%2BZahlH4RqXoeLZHWZdWjwo6SBKtWhAYizbZJZPluDJShjCpwmM343kJOiFe%2Fc7LoDTYoSjY0NAFU6c0KTs4nRly9yZk&X-Amz-Signature=161fcd42fa5b8130eca06673089176d90c7c143cfb34ae37cbc17475e64f7cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYKPL4HI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUpK5W2CyBxJJw4h1uXPbvT7lzeXayLqkZtUqZsvXWyAiBVVYLVR0J5pk9QQZOGVMYqIvmboC%2BrAcGByTKC%2FR%2BaySr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMpsIalrGeTfdsah3OKtwDay5zYqDm%2B33ObMCzYVl5kCNYCqo%2BUgP1o51f%2F2kQxW4D%2BoIfe1GwMjpJd5jq79qQMVcon5Qzef97R6d%2FspJ2MiotyhygYdbdgrVj4fIGHpIMcJ7dCPDHpUwy7k1Y939bicBZQxwduVl3u%2FI9SarXbsYedKw2chawdb5Sr2VJOukYdT2Kd3IjSr1vAFi0HEUQZk0WqDg9eqvg1p%2BbYqA27ReIjm3VRSoIPPAOGfsZ7sPoxeMW%2Fl4KlpVyz0Cs7JXQ6VywJbY5J6a0mEO2q7ViqwzbHxbad2%2F2u7546l%2B3AV%2FdtceFMXLdjhP1JFwI7CJQP5iG4zc4gvdnsu7afkow%2FIbdQ%2Fk7WQv9SuIYxrko0f8IAzmAnNSpMmCVmeh3BwS%2BxLsw6A4I45Tz3WFLt7QD2S4BtFaHYTrvZQiXR5Jus%2FbQZN7L4lMbffV2Jwv48zfcLaGt5fUM7Ylw1w0rNZ2ozdrK7yc6wFyyrYdsMnq%2F0ufKGrB62Wx2ZcR6PRrw0MPGuIHiR7RViSVQB6IpBNZBYMhNQ6MyWgAUmTYZAPqHrnIwMHpud1QRqQjT1WTIA9FTmJD6F2kFxHUWmtI00ZpOcQBOHoYoyaPFVDJ45CqIkPS7xN7cfAqIHS2%2FQX0wsIqPvwY6pgFPvE9sVWRUQ3ag1D1tAMAxMu4Os7eLKTICGJ8vWEiJpiv5D8bvLtqb29reYGmwwONU8MEQLRS1HJf2GG84nJV4apFvzCX0gcR6Q0ehoabvpDUgXDiyxfBH%2BuViY%2F3I6prF6%2BZahlH4RqXoeLZHWZdWjwo6SBKtWhAYizbZJZPluDJShjCpwmM343kJOiFe%2Fc7LoDTYoSjY0NAFU6c0KTs4nRly9yZk&X-Amz-Signature=aaac938e6b376a22deff81f9868316a8040fcd98b9badea7487c96c1539cbfe0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
