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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRAIGLG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC%2FwmCTMBxmnqQvDPh8M1DXaiS7hqPe3X%2B%2FWPK%2FiY5a7gIhALKirvspkwwP6n736ut9OaVxnlpO%2Fgu5yP7ExplXqI6ZKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSAJco8Uf5OGKsTrkq3ANh2XXxnvRo6whlgdkLzMTHYejJwOjjbkPts92thIpwx3MMeNYE6Lcr2vReZXxuLFP8cS3NPimZuzWX0Ke47N%2BEzq2UUwrtIqKqVxMOWvbW6V%2Fmbj4YO%2BYHoOpX5b8pwov8G1g2f%2FAIkl4il4pR7FRt0Lct6fOBemlWCH%2BZy3kHsystgGHKnR%2FzqsWz%2BttilDi0jenhaXtZZgEX67JHvRY%2BaztEVoInfUsyJsrup0qtUZYVoM6WMWBxKA50HmwRx0yf%2B2DVdiSUyFpa75fv5O7hXgO9HZqiFsmxpfaTFPc7j3x5PXGQYTZIxTtn04prUPhZPKPeUx76gVM5krhueYkZD1XtalwYob95Sqf0VWp8sc0Lo39ammET%2FERHF%2B%2B7p6YwzAAYEMLOSDFU2kBeGuAmUnf0SGCY90QyQBqZvYfZ7GdCTCB%2FrKKOI%2FwL4OrvNfR4JEzS8q0h%2BFO0pdgtwfJ6rngUV9rOPJY3DITHtl5vN%2Fy9D82z8c2pQMRUztySDhmJBVUs1QUOkA0zFoMqP9yjZ3s1fO%2Bx0GpwEn3tjV75y2L6IAuJuF1IrAScY3x1xsS9OLprkdunrY6i7WKdRbZKChBZolCW2xZB7iK4Mq8f8HFWiksAKHcS61bynzC5w%2BK%2FBjqkAdkKu8rygduXjiMYYSUV%2FWAd9gUTaMZv2%2F04oKX0cr6DCA%2FjwG1HXkXvaVkjaZkCCahvkLiEEbwMsb%2FKAcf8FgHExbCctZ2PwQXHFfUcZSRreOh0JUuCha9hMhSIDIBU5xAFYTwukm8xGhgG%2FVGWyaKlza1qtBk9zjTo9OIzm5Cms4OQkiSA5JcqBlffU8r4mlb5kb42cd0HplsUnhoAS10zRhdJ&X-Amz-Signature=472d394ff5ff9ff64a5e370e265cca26a8789bff468b523b0dc34affbb3cbf22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRAIGLG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC%2FwmCTMBxmnqQvDPh8M1DXaiS7hqPe3X%2B%2FWPK%2FiY5a7gIhALKirvspkwwP6n736ut9OaVxnlpO%2Fgu5yP7ExplXqI6ZKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSAJco8Uf5OGKsTrkq3ANh2XXxnvRo6whlgdkLzMTHYejJwOjjbkPts92thIpwx3MMeNYE6Lcr2vReZXxuLFP8cS3NPimZuzWX0Ke47N%2BEzq2UUwrtIqKqVxMOWvbW6V%2Fmbj4YO%2BYHoOpX5b8pwov8G1g2f%2FAIkl4il4pR7FRt0Lct6fOBemlWCH%2BZy3kHsystgGHKnR%2FzqsWz%2BttilDi0jenhaXtZZgEX67JHvRY%2BaztEVoInfUsyJsrup0qtUZYVoM6WMWBxKA50HmwRx0yf%2B2DVdiSUyFpa75fv5O7hXgO9HZqiFsmxpfaTFPc7j3x5PXGQYTZIxTtn04prUPhZPKPeUx76gVM5krhueYkZD1XtalwYob95Sqf0VWp8sc0Lo39ammET%2FERHF%2B%2B7p6YwzAAYEMLOSDFU2kBeGuAmUnf0SGCY90QyQBqZvYfZ7GdCTCB%2FrKKOI%2FwL4OrvNfR4JEzS8q0h%2BFO0pdgtwfJ6rngUV9rOPJY3DITHtl5vN%2Fy9D82z8c2pQMRUztySDhmJBVUs1QUOkA0zFoMqP9yjZ3s1fO%2Bx0GpwEn3tjV75y2L6IAuJuF1IrAScY3x1xsS9OLprkdunrY6i7WKdRbZKChBZolCW2xZB7iK4Mq8f8HFWiksAKHcS61bynzC5w%2BK%2FBjqkAdkKu8rygduXjiMYYSUV%2FWAd9gUTaMZv2%2F04oKX0cr6DCA%2FjwG1HXkXvaVkjaZkCCahvkLiEEbwMsb%2FKAcf8FgHExbCctZ2PwQXHFfUcZSRreOh0JUuCha9hMhSIDIBU5xAFYTwukm8xGhgG%2FVGWyaKlza1qtBk9zjTo9OIzm5Cms4OQkiSA5JcqBlffU8r4mlb5kb42cd0HplsUnhoAS10zRhdJ&X-Amz-Signature=00fffc698a59aac07da0d5fa9a783209568981167417df9469c1239d4465d6e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRAIGLG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC%2FwmCTMBxmnqQvDPh8M1DXaiS7hqPe3X%2B%2FWPK%2FiY5a7gIhALKirvspkwwP6n736ut9OaVxnlpO%2Fgu5yP7ExplXqI6ZKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSAJco8Uf5OGKsTrkq3ANh2XXxnvRo6whlgdkLzMTHYejJwOjjbkPts92thIpwx3MMeNYE6Lcr2vReZXxuLFP8cS3NPimZuzWX0Ke47N%2BEzq2UUwrtIqKqVxMOWvbW6V%2Fmbj4YO%2BYHoOpX5b8pwov8G1g2f%2FAIkl4il4pR7FRt0Lct6fOBemlWCH%2BZy3kHsystgGHKnR%2FzqsWz%2BttilDi0jenhaXtZZgEX67JHvRY%2BaztEVoInfUsyJsrup0qtUZYVoM6WMWBxKA50HmwRx0yf%2B2DVdiSUyFpa75fv5O7hXgO9HZqiFsmxpfaTFPc7j3x5PXGQYTZIxTtn04prUPhZPKPeUx76gVM5krhueYkZD1XtalwYob95Sqf0VWp8sc0Lo39ammET%2FERHF%2B%2B7p6YwzAAYEMLOSDFU2kBeGuAmUnf0SGCY90QyQBqZvYfZ7GdCTCB%2FrKKOI%2FwL4OrvNfR4JEzS8q0h%2BFO0pdgtwfJ6rngUV9rOPJY3DITHtl5vN%2Fy9D82z8c2pQMRUztySDhmJBVUs1QUOkA0zFoMqP9yjZ3s1fO%2Bx0GpwEn3tjV75y2L6IAuJuF1IrAScY3x1xsS9OLprkdunrY6i7WKdRbZKChBZolCW2xZB7iK4Mq8f8HFWiksAKHcS61bynzC5w%2BK%2FBjqkAdkKu8rygduXjiMYYSUV%2FWAd9gUTaMZv2%2F04oKX0cr6DCA%2FjwG1HXkXvaVkjaZkCCahvkLiEEbwMsb%2FKAcf8FgHExbCctZ2PwQXHFfUcZSRreOh0JUuCha9hMhSIDIBU5xAFYTwukm8xGhgG%2FVGWyaKlza1qtBk9zjTo9OIzm5Cms4OQkiSA5JcqBlffU8r4mlb5kb42cd0HplsUnhoAS10zRhdJ&X-Amz-Signature=658963c455864d78bee7908933a8bad6b60cb3e14252082368bebe1aa4f17efa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRAIGLG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC%2FwmCTMBxmnqQvDPh8M1DXaiS7hqPe3X%2B%2FWPK%2FiY5a7gIhALKirvspkwwP6n736ut9OaVxnlpO%2Fgu5yP7ExplXqI6ZKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSAJco8Uf5OGKsTrkq3ANh2XXxnvRo6whlgdkLzMTHYejJwOjjbkPts92thIpwx3MMeNYE6Lcr2vReZXxuLFP8cS3NPimZuzWX0Ke47N%2BEzq2UUwrtIqKqVxMOWvbW6V%2Fmbj4YO%2BYHoOpX5b8pwov8G1g2f%2FAIkl4il4pR7FRt0Lct6fOBemlWCH%2BZy3kHsystgGHKnR%2FzqsWz%2BttilDi0jenhaXtZZgEX67JHvRY%2BaztEVoInfUsyJsrup0qtUZYVoM6WMWBxKA50HmwRx0yf%2B2DVdiSUyFpa75fv5O7hXgO9HZqiFsmxpfaTFPc7j3x5PXGQYTZIxTtn04prUPhZPKPeUx76gVM5krhueYkZD1XtalwYob95Sqf0VWp8sc0Lo39ammET%2FERHF%2B%2B7p6YwzAAYEMLOSDFU2kBeGuAmUnf0SGCY90QyQBqZvYfZ7GdCTCB%2FrKKOI%2FwL4OrvNfR4JEzS8q0h%2BFO0pdgtwfJ6rngUV9rOPJY3DITHtl5vN%2Fy9D82z8c2pQMRUztySDhmJBVUs1QUOkA0zFoMqP9yjZ3s1fO%2Bx0GpwEn3tjV75y2L6IAuJuF1IrAScY3x1xsS9OLprkdunrY6i7WKdRbZKChBZolCW2xZB7iK4Mq8f8HFWiksAKHcS61bynzC5w%2BK%2FBjqkAdkKu8rygduXjiMYYSUV%2FWAd9gUTaMZv2%2F04oKX0cr6DCA%2FjwG1HXkXvaVkjaZkCCahvkLiEEbwMsb%2FKAcf8FgHExbCctZ2PwQXHFfUcZSRreOh0JUuCha9hMhSIDIBU5xAFYTwukm8xGhgG%2FVGWyaKlza1qtBk9zjTo9OIzm5Cms4OQkiSA5JcqBlffU8r4mlb5kb42cd0HplsUnhoAS10zRhdJ&X-Amz-Signature=62425f4f592274dccc39ab5189f7064dd48fecd14993fd01f95f9fde01fda867&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRAIGLG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC%2FwmCTMBxmnqQvDPh8M1DXaiS7hqPe3X%2B%2FWPK%2FiY5a7gIhALKirvspkwwP6n736ut9OaVxnlpO%2Fgu5yP7ExplXqI6ZKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSAJco8Uf5OGKsTrkq3ANh2XXxnvRo6whlgdkLzMTHYejJwOjjbkPts92thIpwx3MMeNYE6Lcr2vReZXxuLFP8cS3NPimZuzWX0Ke47N%2BEzq2UUwrtIqKqVxMOWvbW6V%2Fmbj4YO%2BYHoOpX5b8pwov8G1g2f%2FAIkl4il4pR7FRt0Lct6fOBemlWCH%2BZy3kHsystgGHKnR%2FzqsWz%2BttilDi0jenhaXtZZgEX67JHvRY%2BaztEVoInfUsyJsrup0qtUZYVoM6WMWBxKA50HmwRx0yf%2B2DVdiSUyFpa75fv5O7hXgO9HZqiFsmxpfaTFPc7j3x5PXGQYTZIxTtn04prUPhZPKPeUx76gVM5krhueYkZD1XtalwYob95Sqf0VWp8sc0Lo39ammET%2FERHF%2B%2B7p6YwzAAYEMLOSDFU2kBeGuAmUnf0SGCY90QyQBqZvYfZ7GdCTCB%2FrKKOI%2FwL4OrvNfR4JEzS8q0h%2BFO0pdgtwfJ6rngUV9rOPJY3DITHtl5vN%2Fy9D82z8c2pQMRUztySDhmJBVUs1QUOkA0zFoMqP9yjZ3s1fO%2Bx0GpwEn3tjV75y2L6IAuJuF1IrAScY3x1xsS9OLprkdunrY6i7WKdRbZKChBZolCW2xZB7iK4Mq8f8HFWiksAKHcS61bynzC5w%2BK%2FBjqkAdkKu8rygduXjiMYYSUV%2FWAd9gUTaMZv2%2F04oKX0cr6DCA%2FjwG1HXkXvaVkjaZkCCahvkLiEEbwMsb%2FKAcf8FgHExbCctZ2PwQXHFfUcZSRreOh0JUuCha9hMhSIDIBU5xAFYTwukm8xGhgG%2FVGWyaKlza1qtBk9zjTo9OIzm5Cms4OQkiSA5JcqBlffU8r4mlb5kb42cd0HplsUnhoAS10zRhdJ&X-Amz-Signature=329a0ca44a9917a8b88446d4a4d956caf977a707ea1885192feee68175353508&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRAIGLG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC%2FwmCTMBxmnqQvDPh8M1DXaiS7hqPe3X%2B%2FWPK%2FiY5a7gIhALKirvspkwwP6n736ut9OaVxnlpO%2Fgu5yP7ExplXqI6ZKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSAJco8Uf5OGKsTrkq3ANh2XXxnvRo6whlgdkLzMTHYejJwOjjbkPts92thIpwx3MMeNYE6Lcr2vReZXxuLFP8cS3NPimZuzWX0Ke47N%2BEzq2UUwrtIqKqVxMOWvbW6V%2Fmbj4YO%2BYHoOpX5b8pwov8G1g2f%2FAIkl4il4pR7FRt0Lct6fOBemlWCH%2BZy3kHsystgGHKnR%2FzqsWz%2BttilDi0jenhaXtZZgEX67JHvRY%2BaztEVoInfUsyJsrup0qtUZYVoM6WMWBxKA50HmwRx0yf%2B2DVdiSUyFpa75fv5O7hXgO9HZqiFsmxpfaTFPc7j3x5PXGQYTZIxTtn04prUPhZPKPeUx76gVM5krhueYkZD1XtalwYob95Sqf0VWp8sc0Lo39ammET%2FERHF%2B%2B7p6YwzAAYEMLOSDFU2kBeGuAmUnf0SGCY90QyQBqZvYfZ7GdCTCB%2FrKKOI%2FwL4OrvNfR4JEzS8q0h%2BFO0pdgtwfJ6rngUV9rOPJY3DITHtl5vN%2Fy9D82z8c2pQMRUztySDhmJBVUs1QUOkA0zFoMqP9yjZ3s1fO%2Bx0GpwEn3tjV75y2L6IAuJuF1IrAScY3x1xsS9OLprkdunrY6i7WKdRbZKChBZolCW2xZB7iK4Mq8f8HFWiksAKHcS61bynzC5w%2BK%2FBjqkAdkKu8rygduXjiMYYSUV%2FWAd9gUTaMZv2%2F04oKX0cr6DCA%2FjwG1HXkXvaVkjaZkCCahvkLiEEbwMsb%2FKAcf8FgHExbCctZ2PwQXHFfUcZSRreOh0JUuCha9hMhSIDIBU5xAFYTwukm8xGhgG%2FVGWyaKlza1qtBk9zjTo9OIzm5Cms4OQkiSA5JcqBlffU8r4mlb5kb42cd0HplsUnhoAS10zRhdJ&X-Amz-Signature=5e6745a7991f465fdccf32f81fc468dbdd08b2871759765aa3f57e86f08a03ad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRAIGLG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC%2FwmCTMBxmnqQvDPh8M1DXaiS7hqPe3X%2B%2FWPK%2FiY5a7gIhALKirvspkwwP6n736ut9OaVxnlpO%2Fgu5yP7ExplXqI6ZKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSAJco8Uf5OGKsTrkq3ANh2XXxnvRo6whlgdkLzMTHYejJwOjjbkPts92thIpwx3MMeNYE6Lcr2vReZXxuLFP8cS3NPimZuzWX0Ke47N%2BEzq2UUwrtIqKqVxMOWvbW6V%2Fmbj4YO%2BYHoOpX5b8pwov8G1g2f%2FAIkl4il4pR7FRt0Lct6fOBemlWCH%2BZy3kHsystgGHKnR%2FzqsWz%2BttilDi0jenhaXtZZgEX67JHvRY%2BaztEVoInfUsyJsrup0qtUZYVoM6WMWBxKA50HmwRx0yf%2B2DVdiSUyFpa75fv5O7hXgO9HZqiFsmxpfaTFPc7j3x5PXGQYTZIxTtn04prUPhZPKPeUx76gVM5krhueYkZD1XtalwYob95Sqf0VWp8sc0Lo39ammET%2FERHF%2B%2B7p6YwzAAYEMLOSDFU2kBeGuAmUnf0SGCY90QyQBqZvYfZ7GdCTCB%2FrKKOI%2FwL4OrvNfR4JEzS8q0h%2BFO0pdgtwfJ6rngUV9rOPJY3DITHtl5vN%2Fy9D82z8c2pQMRUztySDhmJBVUs1QUOkA0zFoMqP9yjZ3s1fO%2Bx0GpwEn3tjV75y2L6IAuJuF1IrAScY3x1xsS9OLprkdunrY6i7WKdRbZKChBZolCW2xZB7iK4Mq8f8HFWiksAKHcS61bynzC5w%2BK%2FBjqkAdkKu8rygduXjiMYYSUV%2FWAd9gUTaMZv2%2F04oKX0cr6DCA%2FjwG1HXkXvaVkjaZkCCahvkLiEEbwMsb%2FKAcf8FgHExbCctZ2PwQXHFfUcZSRreOh0JUuCha9hMhSIDIBU5xAFYTwukm8xGhgG%2FVGWyaKlza1qtBk9zjTo9OIzm5Cms4OQkiSA5JcqBlffU8r4mlb5kb42cd0HplsUnhoAS10zRhdJ&X-Amz-Signature=7b8c22c3c1776c3eee399bfa055d36bb8c2bd83ba047b1d17602a6124eb34c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
