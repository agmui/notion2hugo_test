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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GWR7A6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC5DcrlJo2MjVZE8ToLh6xDVsgt%2F%2FBFeo0TcXHr2Kj2WQIhAOCXSgIbnBkXpZY%2F40rSc3RJZWL%2BlYyPSgV1B32Ihda9KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA62DslLaQxyCv3Pcq3AM%2BVdjXZN8hyhhGExyHn1kQmqU76AoSbKL%2BfdAQZfDA2rQGAJzdeoLMbg5u5%2FwdKA9qmmrwF1%2BLgMOd9FeJhGeB%2FI0GTJN2NIBJM%2BBUOk1mKGQE63qLWoQSf9tgN0q3wo1jK5iw7foCXPJ02L1Yb07ULrqP63X%2BmYVkhxKOR1fnuW7G%2FmiX4cwK2ovfM5AqIHYOitV7WolLUtRKYjCfl5uaSn0iwY7U3D%2FJhySU5dE53%2BkynPgycao8A%2B%2B6fCzD0v4IfNS0pbU6g91rsdofxM%2FCtN7NX9%2BeSgBpDjcXygbb9Er1144R9gMCJi1Jl3a4rYgnaYt00vujb2VvObD9dh298PLPP52KQoBMTsKe9cDaZa%2BF17c3HAWN0bXCBCGZCYay%2FQpBz2GBoPOnzojMvXwiooxS4eoy%2FkOZQWH%2FaFD6KlsoTgNLbtZn9WZvKEgC%2BOCg45hGUGZyf2GH5h%2Fd7%2BZ1PPv7pIW7vqDt3YOPTW2PanNrVIYrQOXsWCR2Zn%2FfbUFFpj2gpXwBztyPK2tRAVLsmbGJB2IdfQZJ1%2BIz7aqLcKMJoWHzZHaiO7xgVPtKqwRUCw1opXrbg35RAX2%2FG3uGTcEdZsDuALbOW%2BRMwyGmMDU9MBmhJ387W04WYTDIodHABjqkAThoscGblOMyM0k6s8YuhMnvoDdBO%2FYiFR4LKE4CMaJskbTJhqgWQY%2FZ6LZBAViR37VX38OF5HGEKZoc5a%2Bf54Ph7tA%2BWo6z6W3uXEKxjf%2BQBsSAyCmI%2FUSOefOF9qoyQdETq32rhJkVUy1bYB1domxB6A%2F2oOdqy6L8PcxcLAWGX7L3uwImKKALQD75ze6CcL9FHKpQkZSnc%2F19sFe5LQg6Nty%2B&X-Amz-Signature=94b877831b9467411c8876deb21ba318547c73b92312627f0d1fe18644057b58&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GWR7A6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC5DcrlJo2MjVZE8ToLh6xDVsgt%2F%2FBFeo0TcXHr2Kj2WQIhAOCXSgIbnBkXpZY%2F40rSc3RJZWL%2BlYyPSgV1B32Ihda9KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA62DslLaQxyCv3Pcq3AM%2BVdjXZN8hyhhGExyHn1kQmqU76AoSbKL%2BfdAQZfDA2rQGAJzdeoLMbg5u5%2FwdKA9qmmrwF1%2BLgMOd9FeJhGeB%2FI0GTJN2NIBJM%2BBUOk1mKGQE63qLWoQSf9tgN0q3wo1jK5iw7foCXPJ02L1Yb07ULrqP63X%2BmYVkhxKOR1fnuW7G%2FmiX4cwK2ovfM5AqIHYOitV7WolLUtRKYjCfl5uaSn0iwY7U3D%2FJhySU5dE53%2BkynPgycao8A%2B%2B6fCzD0v4IfNS0pbU6g91rsdofxM%2FCtN7NX9%2BeSgBpDjcXygbb9Er1144R9gMCJi1Jl3a4rYgnaYt00vujb2VvObD9dh298PLPP52KQoBMTsKe9cDaZa%2BF17c3HAWN0bXCBCGZCYay%2FQpBz2GBoPOnzojMvXwiooxS4eoy%2FkOZQWH%2FaFD6KlsoTgNLbtZn9WZvKEgC%2BOCg45hGUGZyf2GH5h%2Fd7%2BZ1PPv7pIW7vqDt3YOPTW2PanNrVIYrQOXsWCR2Zn%2FfbUFFpj2gpXwBztyPK2tRAVLsmbGJB2IdfQZJ1%2BIz7aqLcKMJoWHzZHaiO7xgVPtKqwRUCw1opXrbg35RAX2%2FG3uGTcEdZsDuALbOW%2BRMwyGmMDU9MBmhJ387W04WYTDIodHABjqkAThoscGblOMyM0k6s8YuhMnvoDdBO%2FYiFR4LKE4CMaJskbTJhqgWQY%2FZ6LZBAViR37VX38OF5HGEKZoc5a%2Bf54Ph7tA%2BWo6z6W3uXEKxjf%2BQBsSAyCmI%2FUSOefOF9qoyQdETq32rhJkVUy1bYB1domxB6A%2F2oOdqy6L8PcxcLAWGX7L3uwImKKALQD75ze6CcL9FHKpQkZSnc%2F19sFe5LQg6Nty%2B&X-Amz-Signature=12ea7aec03cd5933138e98a8dc5f579372b44fc032b59375d3b8e9388cc7558d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
