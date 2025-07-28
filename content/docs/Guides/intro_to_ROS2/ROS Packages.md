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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHVROIY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDsZ6tdrqMrPP94kssRqe2MBMy6xiS6PT7QG0Cgawiz%2FAiEA5BPY6VW0GdRs3wXsMFAEtkSR9VxCnBX1eGhvBEKN5HEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHL2lwkqJrvzN4EjyCrcA%2BWbRSb6UNo9QqfEL4QMHoU4iAWDX0HAiBCgGPKx6e1j6fbQuoIwgWkSs23yE2JhU7IzHTHZxuhWypEWdFT8pLxte4JDTxxUfUplRuFrwUk7SmXeTT%2BUxkDT4F4KseBrxmkl3l9XO2DcfwesgUMnbS7qmxGpgv3X%2B6JDPYAqeqqZdO75ns1gE0L12%2BP06RmWrkNTuusULO76zQQ1anDeoAg4XIbyDRxNIlMvWj4tHfVqqrTv3xSCeLy59EIB23OoaKZCB6ZetEBN7f0wyCC%2F9nDmdWKm1SXxCoBViAmIMBHYIFNbeFH6Dg6ZrTFKeeHnPjf0xdUjJR7Kf6prENZRNAsoaQVvIOJtkyweDvji99qpXK4%2FsQR4%2FUuwK6odlwWBybwo2aynmQ6jKvdsPzKlyfiA9WqlVNU87zFuWzV%2FthZY3zjMLE9DXGTVE5LvHJlLJ7aJ59h6bZ4kQMiuD0CE5IChrwv%2Fgc8jVXsqmmC7gBwgL%2FkIsY3R%2Byx5w6N6pdHRNEtMgbdJR9C8Fe8W9jjEFzH2YUjuW%2B4IDVmIC%2BrNxbH8isXj6feperKkmmXJ9ibs4Zcii9xVOxXwK%2FZqAS7ZDx1g%2F65JjLP3eGZeb2WOxpm9kwbzu1JzAytW%2BIQLMIHXncQGOqUB1QFYMzOPt81qMkESC%2FYET4OdIrN1p1XLNRrKqAEp8Y0R%2FwlonCcBH%2FxIbA7ra8QhhqA53%2BGHSnphZcn%2BMXxdUSloUdnL7MoJ8mRNTN8dQKnCa2tQyci8v6tWWyKNxxv0IPVSbwGzckqcdXw4yuLtyvEgA5VtQDHTVKLc3cYVIq8mqOIe%2Fw%2FyvONyRRhdvlcD%2BDRtPzTEVP%2FLbCs%2BAHluDYszCRP5&X-Amz-Signature=955f56bd1653b7be67dc763a0b59657dae46ce63ef5b91745ced1be142a2d840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHVROIY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDsZ6tdrqMrPP94kssRqe2MBMy6xiS6PT7QG0Cgawiz%2FAiEA5BPY6VW0GdRs3wXsMFAEtkSR9VxCnBX1eGhvBEKN5HEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHL2lwkqJrvzN4EjyCrcA%2BWbRSb6UNo9QqfEL4QMHoU4iAWDX0HAiBCgGPKx6e1j6fbQuoIwgWkSs23yE2JhU7IzHTHZxuhWypEWdFT8pLxte4JDTxxUfUplRuFrwUk7SmXeTT%2BUxkDT4F4KseBrxmkl3l9XO2DcfwesgUMnbS7qmxGpgv3X%2B6JDPYAqeqqZdO75ns1gE0L12%2BP06RmWrkNTuusULO76zQQ1anDeoAg4XIbyDRxNIlMvWj4tHfVqqrTv3xSCeLy59EIB23OoaKZCB6ZetEBN7f0wyCC%2F9nDmdWKm1SXxCoBViAmIMBHYIFNbeFH6Dg6ZrTFKeeHnPjf0xdUjJR7Kf6prENZRNAsoaQVvIOJtkyweDvji99qpXK4%2FsQR4%2FUuwK6odlwWBybwo2aynmQ6jKvdsPzKlyfiA9WqlVNU87zFuWzV%2FthZY3zjMLE9DXGTVE5LvHJlLJ7aJ59h6bZ4kQMiuD0CE5IChrwv%2Fgc8jVXsqmmC7gBwgL%2FkIsY3R%2Byx5w6N6pdHRNEtMgbdJR9C8Fe8W9jjEFzH2YUjuW%2B4IDVmIC%2BrNxbH8isXj6feperKkmmXJ9ibs4Zcii9xVOxXwK%2FZqAS7ZDx1g%2F65JjLP3eGZeb2WOxpm9kwbzu1JzAytW%2BIQLMIHXncQGOqUB1QFYMzOPt81qMkESC%2FYET4OdIrN1p1XLNRrKqAEp8Y0R%2FwlonCcBH%2FxIbA7ra8QhhqA53%2BGHSnphZcn%2BMXxdUSloUdnL7MoJ8mRNTN8dQKnCa2tQyci8v6tWWyKNxxv0IPVSbwGzckqcdXw4yuLtyvEgA5VtQDHTVKLc3cYVIq8mqOIe%2Fw%2FyvONyRRhdvlcD%2BDRtPzTEVP%2FLbCs%2BAHluDYszCRP5&X-Amz-Signature=e845809e34322455dcd0d6ffdc949db01236b6f14528ef6fa08db45703bd2320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHVROIY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDsZ6tdrqMrPP94kssRqe2MBMy6xiS6PT7QG0Cgawiz%2FAiEA5BPY6VW0GdRs3wXsMFAEtkSR9VxCnBX1eGhvBEKN5HEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHL2lwkqJrvzN4EjyCrcA%2BWbRSb6UNo9QqfEL4QMHoU4iAWDX0HAiBCgGPKx6e1j6fbQuoIwgWkSs23yE2JhU7IzHTHZxuhWypEWdFT8pLxte4JDTxxUfUplRuFrwUk7SmXeTT%2BUxkDT4F4KseBrxmkl3l9XO2DcfwesgUMnbS7qmxGpgv3X%2B6JDPYAqeqqZdO75ns1gE0L12%2BP06RmWrkNTuusULO76zQQ1anDeoAg4XIbyDRxNIlMvWj4tHfVqqrTv3xSCeLy59EIB23OoaKZCB6ZetEBN7f0wyCC%2F9nDmdWKm1SXxCoBViAmIMBHYIFNbeFH6Dg6ZrTFKeeHnPjf0xdUjJR7Kf6prENZRNAsoaQVvIOJtkyweDvji99qpXK4%2FsQR4%2FUuwK6odlwWBybwo2aynmQ6jKvdsPzKlyfiA9WqlVNU87zFuWzV%2FthZY3zjMLE9DXGTVE5LvHJlLJ7aJ59h6bZ4kQMiuD0CE5IChrwv%2Fgc8jVXsqmmC7gBwgL%2FkIsY3R%2Byx5w6N6pdHRNEtMgbdJR9C8Fe8W9jjEFzH2YUjuW%2B4IDVmIC%2BrNxbH8isXj6feperKkmmXJ9ibs4Zcii9xVOxXwK%2FZqAS7ZDx1g%2F65JjLP3eGZeb2WOxpm9kwbzu1JzAytW%2BIQLMIHXncQGOqUB1QFYMzOPt81qMkESC%2FYET4OdIrN1p1XLNRrKqAEp8Y0R%2FwlonCcBH%2FxIbA7ra8QhhqA53%2BGHSnphZcn%2BMXxdUSloUdnL7MoJ8mRNTN8dQKnCa2tQyci8v6tWWyKNxxv0IPVSbwGzckqcdXw4yuLtyvEgA5VtQDHTVKLc3cYVIq8mqOIe%2Fw%2FyvONyRRhdvlcD%2BDRtPzTEVP%2FLbCs%2BAHluDYszCRP5&X-Amz-Signature=d617288fee908653314ee0aedb222ac18aea430f772b65318e1876a0e58237e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHVROIY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDsZ6tdrqMrPP94kssRqe2MBMy6xiS6PT7QG0Cgawiz%2FAiEA5BPY6VW0GdRs3wXsMFAEtkSR9VxCnBX1eGhvBEKN5HEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHL2lwkqJrvzN4EjyCrcA%2BWbRSb6UNo9QqfEL4QMHoU4iAWDX0HAiBCgGPKx6e1j6fbQuoIwgWkSs23yE2JhU7IzHTHZxuhWypEWdFT8pLxte4JDTxxUfUplRuFrwUk7SmXeTT%2BUxkDT4F4KseBrxmkl3l9XO2DcfwesgUMnbS7qmxGpgv3X%2B6JDPYAqeqqZdO75ns1gE0L12%2BP06RmWrkNTuusULO76zQQ1anDeoAg4XIbyDRxNIlMvWj4tHfVqqrTv3xSCeLy59EIB23OoaKZCB6ZetEBN7f0wyCC%2F9nDmdWKm1SXxCoBViAmIMBHYIFNbeFH6Dg6ZrTFKeeHnPjf0xdUjJR7Kf6prENZRNAsoaQVvIOJtkyweDvji99qpXK4%2FsQR4%2FUuwK6odlwWBybwo2aynmQ6jKvdsPzKlyfiA9WqlVNU87zFuWzV%2FthZY3zjMLE9DXGTVE5LvHJlLJ7aJ59h6bZ4kQMiuD0CE5IChrwv%2Fgc8jVXsqmmC7gBwgL%2FkIsY3R%2Byx5w6N6pdHRNEtMgbdJR9C8Fe8W9jjEFzH2YUjuW%2B4IDVmIC%2BrNxbH8isXj6feperKkmmXJ9ibs4Zcii9xVOxXwK%2FZqAS7ZDx1g%2F65JjLP3eGZeb2WOxpm9kwbzu1JzAytW%2BIQLMIHXncQGOqUB1QFYMzOPt81qMkESC%2FYET4OdIrN1p1XLNRrKqAEp8Y0R%2FwlonCcBH%2FxIbA7ra8QhhqA53%2BGHSnphZcn%2BMXxdUSloUdnL7MoJ8mRNTN8dQKnCa2tQyci8v6tWWyKNxxv0IPVSbwGzckqcdXw4yuLtyvEgA5VtQDHTVKLc3cYVIq8mqOIe%2Fw%2FyvONyRRhdvlcD%2BDRtPzTEVP%2FLbCs%2BAHluDYszCRP5&X-Amz-Signature=d4f85548ed9718ead58b460789d62feeb7a090f0e400c17fbc469d76c20265e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHVROIY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDsZ6tdrqMrPP94kssRqe2MBMy6xiS6PT7QG0Cgawiz%2FAiEA5BPY6VW0GdRs3wXsMFAEtkSR9VxCnBX1eGhvBEKN5HEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHL2lwkqJrvzN4EjyCrcA%2BWbRSb6UNo9QqfEL4QMHoU4iAWDX0HAiBCgGPKx6e1j6fbQuoIwgWkSs23yE2JhU7IzHTHZxuhWypEWdFT8pLxte4JDTxxUfUplRuFrwUk7SmXeTT%2BUxkDT4F4KseBrxmkl3l9XO2DcfwesgUMnbS7qmxGpgv3X%2B6JDPYAqeqqZdO75ns1gE0L12%2BP06RmWrkNTuusULO76zQQ1anDeoAg4XIbyDRxNIlMvWj4tHfVqqrTv3xSCeLy59EIB23OoaKZCB6ZetEBN7f0wyCC%2F9nDmdWKm1SXxCoBViAmIMBHYIFNbeFH6Dg6ZrTFKeeHnPjf0xdUjJR7Kf6prENZRNAsoaQVvIOJtkyweDvji99qpXK4%2FsQR4%2FUuwK6odlwWBybwo2aynmQ6jKvdsPzKlyfiA9WqlVNU87zFuWzV%2FthZY3zjMLE9DXGTVE5LvHJlLJ7aJ59h6bZ4kQMiuD0CE5IChrwv%2Fgc8jVXsqmmC7gBwgL%2FkIsY3R%2Byx5w6N6pdHRNEtMgbdJR9C8Fe8W9jjEFzH2YUjuW%2B4IDVmIC%2BrNxbH8isXj6feperKkmmXJ9ibs4Zcii9xVOxXwK%2FZqAS7ZDx1g%2F65JjLP3eGZeb2WOxpm9kwbzu1JzAytW%2BIQLMIHXncQGOqUB1QFYMzOPt81qMkESC%2FYET4OdIrN1p1XLNRrKqAEp8Y0R%2FwlonCcBH%2FxIbA7ra8QhhqA53%2BGHSnphZcn%2BMXxdUSloUdnL7MoJ8mRNTN8dQKnCa2tQyci8v6tWWyKNxxv0IPVSbwGzckqcdXw4yuLtyvEgA5VtQDHTVKLc3cYVIq8mqOIe%2Fw%2FyvONyRRhdvlcD%2BDRtPzTEVP%2FLbCs%2BAHluDYszCRP5&X-Amz-Signature=a1fa751bc05f88a99a58ac1485528aacdb6e11ae3f6b03bf68e2fda0fae24bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHVROIY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDsZ6tdrqMrPP94kssRqe2MBMy6xiS6PT7QG0Cgawiz%2FAiEA5BPY6VW0GdRs3wXsMFAEtkSR9VxCnBX1eGhvBEKN5HEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHL2lwkqJrvzN4EjyCrcA%2BWbRSb6UNo9QqfEL4QMHoU4iAWDX0HAiBCgGPKx6e1j6fbQuoIwgWkSs23yE2JhU7IzHTHZxuhWypEWdFT8pLxte4JDTxxUfUplRuFrwUk7SmXeTT%2BUxkDT4F4KseBrxmkl3l9XO2DcfwesgUMnbS7qmxGpgv3X%2B6JDPYAqeqqZdO75ns1gE0L12%2BP06RmWrkNTuusULO76zQQ1anDeoAg4XIbyDRxNIlMvWj4tHfVqqrTv3xSCeLy59EIB23OoaKZCB6ZetEBN7f0wyCC%2F9nDmdWKm1SXxCoBViAmIMBHYIFNbeFH6Dg6ZrTFKeeHnPjf0xdUjJR7Kf6prENZRNAsoaQVvIOJtkyweDvji99qpXK4%2FsQR4%2FUuwK6odlwWBybwo2aynmQ6jKvdsPzKlyfiA9WqlVNU87zFuWzV%2FthZY3zjMLE9DXGTVE5LvHJlLJ7aJ59h6bZ4kQMiuD0CE5IChrwv%2Fgc8jVXsqmmC7gBwgL%2FkIsY3R%2Byx5w6N6pdHRNEtMgbdJR9C8Fe8W9jjEFzH2YUjuW%2B4IDVmIC%2BrNxbH8isXj6feperKkmmXJ9ibs4Zcii9xVOxXwK%2FZqAS7ZDx1g%2F65JjLP3eGZeb2WOxpm9kwbzu1JzAytW%2BIQLMIHXncQGOqUB1QFYMzOPt81qMkESC%2FYET4OdIrN1p1XLNRrKqAEp8Y0R%2FwlonCcBH%2FxIbA7ra8QhhqA53%2BGHSnphZcn%2BMXxdUSloUdnL7MoJ8mRNTN8dQKnCa2tQyci8v6tWWyKNxxv0IPVSbwGzckqcdXw4yuLtyvEgA5VtQDHTVKLc3cYVIq8mqOIe%2Fw%2FyvONyRRhdvlcD%2BDRtPzTEVP%2FLbCs%2BAHluDYszCRP5&X-Amz-Signature=b4b026cb2e1a5db54d22d63a253a4ab0efb4d08c02187252d419c38adf3dfb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHVROIY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDsZ6tdrqMrPP94kssRqe2MBMy6xiS6PT7QG0Cgawiz%2FAiEA5BPY6VW0GdRs3wXsMFAEtkSR9VxCnBX1eGhvBEKN5HEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHL2lwkqJrvzN4EjyCrcA%2BWbRSb6UNo9QqfEL4QMHoU4iAWDX0HAiBCgGPKx6e1j6fbQuoIwgWkSs23yE2JhU7IzHTHZxuhWypEWdFT8pLxte4JDTxxUfUplRuFrwUk7SmXeTT%2BUxkDT4F4KseBrxmkl3l9XO2DcfwesgUMnbS7qmxGpgv3X%2B6JDPYAqeqqZdO75ns1gE0L12%2BP06RmWrkNTuusULO76zQQ1anDeoAg4XIbyDRxNIlMvWj4tHfVqqrTv3xSCeLy59EIB23OoaKZCB6ZetEBN7f0wyCC%2F9nDmdWKm1SXxCoBViAmIMBHYIFNbeFH6Dg6ZrTFKeeHnPjf0xdUjJR7Kf6prENZRNAsoaQVvIOJtkyweDvji99qpXK4%2FsQR4%2FUuwK6odlwWBybwo2aynmQ6jKvdsPzKlyfiA9WqlVNU87zFuWzV%2FthZY3zjMLE9DXGTVE5LvHJlLJ7aJ59h6bZ4kQMiuD0CE5IChrwv%2Fgc8jVXsqmmC7gBwgL%2FkIsY3R%2Byx5w6N6pdHRNEtMgbdJR9C8Fe8W9jjEFzH2YUjuW%2B4IDVmIC%2BrNxbH8isXj6feperKkmmXJ9ibs4Zcii9xVOxXwK%2FZqAS7ZDx1g%2F65JjLP3eGZeb2WOxpm9kwbzu1JzAytW%2BIQLMIHXncQGOqUB1QFYMzOPt81qMkESC%2FYET4OdIrN1p1XLNRrKqAEp8Y0R%2FwlonCcBH%2FxIbA7ra8QhhqA53%2BGHSnphZcn%2BMXxdUSloUdnL7MoJ8mRNTN8dQKnCa2tQyci8v6tWWyKNxxv0IPVSbwGzckqcdXw4yuLtyvEgA5VtQDHTVKLc3cYVIq8mqOIe%2Fw%2FyvONyRRhdvlcD%2BDRtPzTEVP%2FLbCs%2BAHluDYszCRP5&X-Amz-Signature=c0883be851c86992eb6a4244b31bbf3194fd045f747ebd68e75a1521b6fab39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
