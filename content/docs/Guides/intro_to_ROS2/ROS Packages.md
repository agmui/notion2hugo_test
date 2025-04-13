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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMOLM5F%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEB1nDeIwLeQnINuIzC5zBiB3uV8SuWWtMuXDMtUVyiPAiEArYXwQkFFrPfdqLsqmPeveT2ig8pcVY%2BWfcLBTx4DTekqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmUSYWyPDTvAi6GwircA1XjRIvwre2JThjwn0qO6S7OdxMGyyr4a9yWJJkixcc0H2%2F26j3HT%2FYHrAr1haKvbch3ylATi2IzWYQKkdJTqeR5%2BM26uSjhmJcz0O9cUqOkSVEPqabpnbTUFZ1%2BNYTS4ln7rl1RzXxfcdZBnLqYryiiRDP2FrX7a7XI7K1R25j2TkjlrR0rieIq3kXu6FCqiVOCb%2BLnWRb4nK5cf3hqFpBwdWs4hq%2FElMf2JSwOXx12xWd6B5BDb4h21nmvndFIYgB3Xd6g9SkBqbXSXTlqpwkPyu2y%2B3FRaFSrRda8Ce3FDCUHlj%2BLVmwur08rFm8Tv%2FvQouoDk1tgrNoO23dVZf6PhXRXKr16mFjKUZTgip7ZHXYWOWqMb9dBgaZ56u3%2FghCU2ddy%2BydEICKHV0Oo9efxTM%2FVWVhYRfqqqlvb9LUkRs7HPJwHLOv05IqmtjAPcYGOXubzdC2%2FQtQJpPJ12BWZn9SMX9Cs2%2FzsQzV4gs6lZQ6GS7yrZkB4mTC6wTlfyxrxXJzowmiKP2CK%2Bh0NJchA13S7JZLjIjc1sg4%2BES2Hn0BHu5BRbd4xLs6AMEtA3NmFgpmJHQ0sRCAyyGffWwrppAyFWi6Bk%2FZxFOVswO9l7ukxneFPfr5Bz7UJMKy97r8GOqUBfSt8x7l7QK2mDzDScJfsk6ZPrjFnoOktEffDo0GaPxdli7j7yrlkMqy6wkXkMeP0niLt5Qe0rbeW%2Fv1y99kNDsDrRQZA6TwJy8DjRle9ul86qOsrwE8WerpImfxn%2BfZZOF1Ou%2FM%2B1LOc8HFaI6YQ0TT%2Bp521DiisNhc0JHtNgxM9Y8YoO7ZWnaPbQbN%2FMPUxBUXGhmE8G8tyTCYCjHAWV3pyURQX&X-Amz-Signature=5753067422902b1b550b80df6140789d21500575f3043044dead3a56492bfb42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMOLM5F%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEB1nDeIwLeQnINuIzC5zBiB3uV8SuWWtMuXDMtUVyiPAiEArYXwQkFFrPfdqLsqmPeveT2ig8pcVY%2BWfcLBTx4DTekqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmUSYWyPDTvAi6GwircA1XjRIvwre2JThjwn0qO6S7OdxMGyyr4a9yWJJkixcc0H2%2F26j3HT%2FYHrAr1haKvbch3ylATi2IzWYQKkdJTqeR5%2BM26uSjhmJcz0O9cUqOkSVEPqabpnbTUFZ1%2BNYTS4ln7rl1RzXxfcdZBnLqYryiiRDP2FrX7a7XI7K1R25j2TkjlrR0rieIq3kXu6FCqiVOCb%2BLnWRb4nK5cf3hqFpBwdWs4hq%2FElMf2JSwOXx12xWd6B5BDb4h21nmvndFIYgB3Xd6g9SkBqbXSXTlqpwkPyu2y%2B3FRaFSrRda8Ce3FDCUHlj%2BLVmwur08rFm8Tv%2FvQouoDk1tgrNoO23dVZf6PhXRXKr16mFjKUZTgip7ZHXYWOWqMb9dBgaZ56u3%2FghCU2ddy%2BydEICKHV0Oo9efxTM%2FVWVhYRfqqqlvb9LUkRs7HPJwHLOv05IqmtjAPcYGOXubzdC2%2FQtQJpPJ12BWZn9SMX9Cs2%2FzsQzV4gs6lZQ6GS7yrZkB4mTC6wTlfyxrxXJzowmiKP2CK%2Bh0NJchA13S7JZLjIjc1sg4%2BES2Hn0BHu5BRbd4xLs6AMEtA3NmFgpmJHQ0sRCAyyGffWwrppAyFWi6Bk%2FZxFOVswO9l7ukxneFPfr5Bz7UJMKy97r8GOqUBfSt8x7l7QK2mDzDScJfsk6ZPrjFnoOktEffDo0GaPxdli7j7yrlkMqy6wkXkMeP0niLt5Qe0rbeW%2Fv1y99kNDsDrRQZA6TwJy8DjRle9ul86qOsrwE8WerpImfxn%2BfZZOF1Ou%2FM%2B1LOc8HFaI6YQ0TT%2Bp521DiisNhc0JHtNgxM9Y8YoO7ZWnaPbQbN%2FMPUxBUXGhmE8G8tyTCYCjHAWV3pyURQX&X-Amz-Signature=7a9d08e1e6df3a8cfba6df6465864b867edf9c302ca4c2be3a43c2e33eadbf95&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMOLM5F%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEB1nDeIwLeQnINuIzC5zBiB3uV8SuWWtMuXDMtUVyiPAiEArYXwQkFFrPfdqLsqmPeveT2ig8pcVY%2BWfcLBTx4DTekqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmUSYWyPDTvAi6GwircA1XjRIvwre2JThjwn0qO6S7OdxMGyyr4a9yWJJkixcc0H2%2F26j3HT%2FYHrAr1haKvbch3ylATi2IzWYQKkdJTqeR5%2BM26uSjhmJcz0O9cUqOkSVEPqabpnbTUFZ1%2BNYTS4ln7rl1RzXxfcdZBnLqYryiiRDP2FrX7a7XI7K1R25j2TkjlrR0rieIq3kXu6FCqiVOCb%2BLnWRb4nK5cf3hqFpBwdWs4hq%2FElMf2JSwOXx12xWd6B5BDb4h21nmvndFIYgB3Xd6g9SkBqbXSXTlqpwkPyu2y%2B3FRaFSrRda8Ce3FDCUHlj%2BLVmwur08rFm8Tv%2FvQouoDk1tgrNoO23dVZf6PhXRXKr16mFjKUZTgip7ZHXYWOWqMb9dBgaZ56u3%2FghCU2ddy%2BydEICKHV0Oo9efxTM%2FVWVhYRfqqqlvb9LUkRs7HPJwHLOv05IqmtjAPcYGOXubzdC2%2FQtQJpPJ12BWZn9SMX9Cs2%2FzsQzV4gs6lZQ6GS7yrZkB4mTC6wTlfyxrxXJzowmiKP2CK%2Bh0NJchA13S7JZLjIjc1sg4%2BES2Hn0BHu5BRbd4xLs6AMEtA3NmFgpmJHQ0sRCAyyGffWwrppAyFWi6Bk%2FZxFOVswO9l7ukxneFPfr5Bz7UJMKy97r8GOqUBfSt8x7l7QK2mDzDScJfsk6ZPrjFnoOktEffDo0GaPxdli7j7yrlkMqy6wkXkMeP0niLt5Qe0rbeW%2Fv1y99kNDsDrRQZA6TwJy8DjRle9ul86qOsrwE8WerpImfxn%2BfZZOF1Ou%2FM%2B1LOc8HFaI6YQ0TT%2Bp521DiisNhc0JHtNgxM9Y8YoO7ZWnaPbQbN%2FMPUxBUXGhmE8G8tyTCYCjHAWV3pyURQX&X-Amz-Signature=e59b6af5761dfed42a8a65a6676264a02d50054da7d82b0ff7cbd47afc897fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMOLM5F%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEB1nDeIwLeQnINuIzC5zBiB3uV8SuWWtMuXDMtUVyiPAiEArYXwQkFFrPfdqLsqmPeveT2ig8pcVY%2BWfcLBTx4DTekqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmUSYWyPDTvAi6GwircA1XjRIvwre2JThjwn0qO6S7OdxMGyyr4a9yWJJkixcc0H2%2F26j3HT%2FYHrAr1haKvbch3ylATi2IzWYQKkdJTqeR5%2BM26uSjhmJcz0O9cUqOkSVEPqabpnbTUFZ1%2BNYTS4ln7rl1RzXxfcdZBnLqYryiiRDP2FrX7a7XI7K1R25j2TkjlrR0rieIq3kXu6FCqiVOCb%2BLnWRb4nK5cf3hqFpBwdWs4hq%2FElMf2JSwOXx12xWd6B5BDb4h21nmvndFIYgB3Xd6g9SkBqbXSXTlqpwkPyu2y%2B3FRaFSrRda8Ce3FDCUHlj%2BLVmwur08rFm8Tv%2FvQouoDk1tgrNoO23dVZf6PhXRXKr16mFjKUZTgip7ZHXYWOWqMb9dBgaZ56u3%2FghCU2ddy%2BydEICKHV0Oo9efxTM%2FVWVhYRfqqqlvb9LUkRs7HPJwHLOv05IqmtjAPcYGOXubzdC2%2FQtQJpPJ12BWZn9SMX9Cs2%2FzsQzV4gs6lZQ6GS7yrZkB4mTC6wTlfyxrxXJzowmiKP2CK%2Bh0NJchA13S7JZLjIjc1sg4%2BES2Hn0BHu5BRbd4xLs6AMEtA3NmFgpmJHQ0sRCAyyGffWwrppAyFWi6Bk%2FZxFOVswO9l7ukxneFPfr5Bz7UJMKy97r8GOqUBfSt8x7l7QK2mDzDScJfsk6ZPrjFnoOktEffDo0GaPxdli7j7yrlkMqy6wkXkMeP0niLt5Qe0rbeW%2Fv1y99kNDsDrRQZA6TwJy8DjRle9ul86qOsrwE8WerpImfxn%2BfZZOF1Ou%2FM%2B1LOc8HFaI6YQ0TT%2Bp521DiisNhc0JHtNgxM9Y8YoO7ZWnaPbQbN%2FMPUxBUXGhmE8G8tyTCYCjHAWV3pyURQX&X-Amz-Signature=a4b42993ef68b7cb70e3e8f46d747e97bf3d3338db1fa76a72adad2b1b8d0304&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMOLM5F%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEB1nDeIwLeQnINuIzC5zBiB3uV8SuWWtMuXDMtUVyiPAiEArYXwQkFFrPfdqLsqmPeveT2ig8pcVY%2BWfcLBTx4DTekqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmUSYWyPDTvAi6GwircA1XjRIvwre2JThjwn0qO6S7OdxMGyyr4a9yWJJkixcc0H2%2F26j3HT%2FYHrAr1haKvbch3ylATi2IzWYQKkdJTqeR5%2BM26uSjhmJcz0O9cUqOkSVEPqabpnbTUFZ1%2BNYTS4ln7rl1RzXxfcdZBnLqYryiiRDP2FrX7a7XI7K1R25j2TkjlrR0rieIq3kXu6FCqiVOCb%2BLnWRb4nK5cf3hqFpBwdWs4hq%2FElMf2JSwOXx12xWd6B5BDb4h21nmvndFIYgB3Xd6g9SkBqbXSXTlqpwkPyu2y%2B3FRaFSrRda8Ce3FDCUHlj%2BLVmwur08rFm8Tv%2FvQouoDk1tgrNoO23dVZf6PhXRXKr16mFjKUZTgip7ZHXYWOWqMb9dBgaZ56u3%2FghCU2ddy%2BydEICKHV0Oo9efxTM%2FVWVhYRfqqqlvb9LUkRs7HPJwHLOv05IqmtjAPcYGOXubzdC2%2FQtQJpPJ12BWZn9SMX9Cs2%2FzsQzV4gs6lZQ6GS7yrZkB4mTC6wTlfyxrxXJzowmiKP2CK%2Bh0NJchA13S7JZLjIjc1sg4%2BES2Hn0BHu5BRbd4xLs6AMEtA3NmFgpmJHQ0sRCAyyGffWwrppAyFWi6Bk%2FZxFOVswO9l7ukxneFPfr5Bz7UJMKy97r8GOqUBfSt8x7l7QK2mDzDScJfsk6ZPrjFnoOktEffDo0GaPxdli7j7yrlkMqy6wkXkMeP0niLt5Qe0rbeW%2Fv1y99kNDsDrRQZA6TwJy8DjRle9ul86qOsrwE8WerpImfxn%2BfZZOF1Ou%2FM%2B1LOc8HFaI6YQ0TT%2Bp521DiisNhc0JHtNgxM9Y8YoO7ZWnaPbQbN%2FMPUxBUXGhmE8G8tyTCYCjHAWV3pyURQX&X-Amz-Signature=727869de4213b1a80dcfdd6115297f33ab5f36c41d633082df35656c91da644d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMOLM5F%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEB1nDeIwLeQnINuIzC5zBiB3uV8SuWWtMuXDMtUVyiPAiEArYXwQkFFrPfdqLsqmPeveT2ig8pcVY%2BWfcLBTx4DTekqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmUSYWyPDTvAi6GwircA1XjRIvwre2JThjwn0qO6S7OdxMGyyr4a9yWJJkixcc0H2%2F26j3HT%2FYHrAr1haKvbch3ylATi2IzWYQKkdJTqeR5%2BM26uSjhmJcz0O9cUqOkSVEPqabpnbTUFZ1%2BNYTS4ln7rl1RzXxfcdZBnLqYryiiRDP2FrX7a7XI7K1R25j2TkjlrR0rieIq3kXu6FCqiVOCb%2BLnWRb4nK5cf3hqFpBwdWs4hq%2FElMf2JSwOXx12xWd6B5BDb4h21nmvndFIYgB3Xd6g9SkBqbXSXTlqpwkPyu2y%2B3FRaFSrRda8Ce3FDCUHlj%2BLVmwur08rFm8Tv%2FvQouoDk1tgrNoO23dVZf6PhXRXKr16mFjKUZTgip7ZHXYWOWqMb9dBgaZ56u3%2FghCU2ddy%2BydEICKHV0Oo9efxTM%2FVWVhYRfqqqlvb9LUkRs7HPJwHLOv05IqmtjAPcYGOXubzdC2%2FQtQJpPJ12BWZn9SMX9Cs2%2FzsQzV4gs6lZQ6GS7yrZkB4mTC6wTlfyxrxXJzowmiKP2CK%2Bh0NJchA13S7JZLjIjc1sg4%2BES2Hn0BHu5BRbd4xLs6AMEtA3NmFgpmJHQ0sRCAyyGffWwrppAyFWi6Bk%2FZxFOVswO9l7ukxneFPfr5Bz7UJMKy97r8GOqUBfSt8x7l7QK2mDzDScJfsk6ZPrjFnoOktEffDo0GaPxdli7j7yrlkMqy6wkXkMeP0niLt5Qe0rbeW%2Fv1y99kNDsDrRQZA6TwJy8DjRle9ul86qOsrwE8WerpImfxn%2BfZZOF1Ou%2FM%2B1LOc8HFaI6YQ0TT%2Bp521DiisNhc0JHtNgxM9Y8YoO7ZWnaPbQbN%2FMPUxBUXGhmE8G8tyTCYCjHAWV3pyURQX&X-Amz-Signature=aa7d0f1627a4de6df017612af46af2c989089b4453e8c3fee6d9a5eede7c19e6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMOLM5F%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEB1nDeIwLeQnINuIzC5zBiB3uV8SuWWtMuXDMtUVyiPAiEArYXwQkFFrPfdqLsqmPeveT2ig8pcVY%2BWfcLBTx4DTekqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmUSYWyPDTvAi6GwircA1XjRIvwre2JThjwn0qO6S7OdxMGyyr4a9yWJJkixcc0H2%2F26j3HT%2FYHrAr1haKvbch3ylATi2IzWYQKkdJTqeR5%2BM26uSjhmJcz0O9cUqOkSVEPqabpnbTUFZ1%2BNYTS4ln7rl1RzXxfcdZBnLqYryiiRDP2FrX7a7XI7K1R25j2TkjlrR0rieIq3kXu6FCqiVOCb%2BLnWRb4nK5cf3hqFpBwdWs4hq%2FElMf2JSwOXx12xWd6B5BDb4h21nmvndFIYgB3Xd6g9SkBqbXSXTlqpwkPyu2y%2B3FRaFSrRda8Ce3FDCUHlj%2BLVmwur08rFm8Tv%2FvQouoDk1tgrNoO23dVZf6PhXRXKr16mFjKUZTgip7ZHXYWOWqMb9dBgaZ56u3%2FghCU2ddy%2BydEICKHV0Oo9efxTM%2FVWVhYRfqqqlvb9LUkRs7HPJwHLOv05IqmtjAPcYGOXubzdC2%2FQtQJpPJ12BWZn9SMX9Cs2%2FzsQzV4gs6lZQ6GS7yrZkB4mTC6wTlfyxrxXJzowmiKP2CK%2Bh0NJchA13S7JZLjIjc1sg4%2BES2Hn0BHu5BRbd4xLs6AMEtA3NmFgpmJHQ0sRCAyyGffWwrppAyFWi6Bk%2FZxFOVswO9l7ukxneFPfr5Bz7UJMKy97r8GOqUBfSt8x7l7QK2mDzDScJfsk6ZPrjFnoOktEffDo0GaPxdli7j7yrlkMqy6wkXkMeP0niLt5Qe0rbeW%2Fv1y99kNDsDrRQZA6TwJy8DjRle9ul86qOsrwE8WerpImfxn%2BfZZOF1Ou%2FM%2B1LOc8HFaI6YQ0TT%2Bp521DiisNhc0JHtNgxM9Y8YoO7ZWnaPbQbN%2FMPUxBUXGhmE8G8tyTCYCjHAWV3pyURQX&X-Amz-Signature=971d4d0aa3aa1db6a9f47eb2047535877beddc736a0edb10006d02532d834998&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
