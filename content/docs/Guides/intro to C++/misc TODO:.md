---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEVJ4XG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDDxbZyfbPtr03HxZGbu%2Fe2isJOtws09mknUB9WQJ5kCgIhAIMD6%2Fs0kp%2BHvZbx6zL%2FNqHhtxNgWuYnEsjVXfKVujbiKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzma6Q9qJIlyhvrZCgq3AMPXfuq1luln5eCqj95Mop5aqtyA6C%2BHXICBf%2B2UcOVS20MoxnkACGhp0uZFLf8Ybqx%2Bhy3zSmLuefjKDUF%2Frih%2BENivauNsGRZf%2B40srHm7Ikhcpkuf%2FkeHce%2Bzo9Jif7gEhDPikIVSrJjaY7di%2FSA5XcI5Ig42reo3iwCwOtJpEESh7%2FQ1sYjnuLL6AzGVIzWZ6GHQMmGbldDsSsMGTrh%2F0HJfzSrOZoqX0VZbWD3BiFX8zNwddrOq8EWpyoU09ACXHH4L1WP0tE%2BHXX8w4acZ0QxX7mxrUmUBKo11yOZRslpY48E9VcU5N8nlZB7Uw1w0hTtjxsVPeY8NxtcUQgslOMxOQ%2FX6AbxV48cwww6aWvRCsSj0gRScng9dXa6qNdr3BwOw0wtf3wQu75xQH6V3w08edn%2BudbzvGmX2fE5rFW7loQg36M1Wy5g%2F8aNP0FvNIyUVlV5rS7L5ADrXB6oVgmsVd0lglgY4psgXGj1y2WbFWQOQzm7kZhAES4AjoEy7lePXuFlVtgmOo%2By3Z5QSmMte%2F1eajDHViBS4yTGx1gZySQno7ocIaqqtILjjWMt%2BCqwcST7JrWmHRyu7yhq7H0GF1Vhh7GpJ5Ie2Jx%2B%2B7t845YoQKPTwnHX5TDuhYbBBjqkAS5wrdoI313u4Bu2dlcv9b5SPgtArMB%2BruLrkRTIOf9fYONaqNjhoATj4t7ThYxPUOZTpalBjRWioiIkb%2B5lqlsSPy9hZSANb8p8jk6yh6jpFJP0eVWBBU%2BTdS3jF8IUUjkl4c92%2BjK%2F8si58QEk7VIMGoN9fXk%2BZ2eRXlzPsLf4EgBb%2BWl5vUZZraVbOVAIjyVnIiWMykg7GMcIXSR4yRT7%2F%2BUZ&X-Amz-Signature=82b181d7d4aff189952da0ac8d90f0228f2b7e29618cda7318bc1253fec26be3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEVJ4XG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDDxbZyfbPtr03HxZGbu%2Fe2isJOtws09mknUB9WQJ5kCgIhAIMD6%2Fs0kp%2BHvZbx6zL%2FNqHhtxNgWuYnEsjVXfKVujbiKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzma6Q9qJIlyhvrZCgq3AMPXfuq1luln5eCqj95Mop5aqtyA6C%2BHXICBf%2B2UcOVS20MoxnkACGhp0uZFLf8Ybqx%2Bhy3zSmLuefjKDUF%2Frih%2BENivauNsGRZf%2B40srHm7Ikhcpkuf%2FkeHce%2Bzo9Jif7gEhDPikIVSrJjaY7di%2FSA5XcI5Ig42reo3iwCwOtJpEESh7%2FQ1sYjnuLL6AzGVIzWZ6GHQMmGbldDsSsMGTrh%2F0HJfzSrOZoqX0VZbWD3BiFX8zNwddrOq8EWpyoU09ACXHH4L1WP0tE%2BHXX8w4acZ0QxX7mxrUmUBKo11yOZRslpY48E9VcU5N8nlZB7Uw1w0hTtjxsVPeY8NxtcUQgslOMxOQ%2FX6AbxV48cwww6aWvRCsSj0gRScng9dXa6qNdr3BwOw0wtf3wQu75xQH6V3w08edn%2BudbzvGmX2fE5rFW7loQg36M1Wy5g%2F8aNP0FvNIyUVlV5rS7L5ADrXB6oVgmsVd0lglgY4psgXGj1y2WbFWQOQzm7kZhAES4AjoEy7lePXuFlVtgmOo%2By3Z5QSmMte%2F1eajDHViBS4yTGx1gZySQno7ocIaqqtILjjWMt%2BCqwcST7JrWmHRyu7yhq7H0GF1Vhh7GpJ5Ie2Jx%2B%2B7t845YoQKPTwnHX5TDuhYbBBjqkAS5wrdoI313u4Bu2dlcv9b5SPgtArMB%2BruLrkRTIOf9fYONaqNjhoATj4t7ThYxPUOZTpalBjRWioiIkb%2B5lqlsSPy9hZSANb8p8jk6yh6jpFJP0eVWBBU%2BTdS3jF8IUUjkl4c92%2BjK%2F8si58QEk7VIMGoN9fXk%2BZ2eRXlzPsLf4EgBb%2BWl5vUZZraVbOVAIjyVnIiWMykg7GMcIXSR4yRT7%2F%2BUZ&X-Amz-Signature=05857d27642f7aaf80bddb9dd3c53614bd7778befab5ed5a568db8c1a944d413&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
