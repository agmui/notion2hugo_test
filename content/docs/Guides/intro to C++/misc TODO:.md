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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UKICJK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMNutirLy%2B7IyPctL2IHnA50u%2BXMRnO%2BNNLbI4fDxfiAiBhKQrw7eLfi%2F7xWKx7QYGXEnHsiRcSAKJyiaJSxz%2FZJyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNhDFSOAWzTOgPg%2F5KtwDM0MBtjO0DPRrry8aB841YbQeM7qWbbYkzlHAC%2FKF3J46I0%2Fcy1Vmdri3ibNYrTN8p%2BR3wAHRrVH%2BHEMnQot%2Bhxh3rfdjpsA9moOe%2BteBB5%2BZ1iBsEs9c40agfRQQvdxIv8vKVBRkH8dWXf6qPtApB8Kc%2FIUJxq9bcifpYgVScU8vERVK%2BvjzuLV2wKm1utVMwmH8ALHPEzq%2FoYj9H61h1916tHThjuPs7jIpPiJW3ISmNZETbUhYoGqJ5e7vyVVjUZFpjvoMIQmN%2FWrCAwDRCpOS0kuSfTp7ji0NXSmZdgLANPpFegoZvT%2FhmBycu7r4%2BisERMRYMTbu9dRBUlGZFrnenl4Q4EOrEtRbSeuQcmmIj3FfZG23CVe4dTi6ftmk0Rl8nYwBpsLQhnKQ00l9hMZs6cOAAoT49CNeamh7yAm%2F3TvJzYyW63OWUpQtpuoTHWvAQQXNd7KfvJkdBHn0uT9hWL6uMmORefSYWYBw%2BsAOXbUcfuGchY5pgkUscnKFQn9BdTkYzzLEY2Fh%2FWBqlwRBgzNm70DU2b37bm89e%2BdiU3eQZjA87aCMO0%2FYBPOeqL1QHRU3Dyt8wTVqvY9igg2MquNvjiwKi5aQNEChCEOcU2R2WfKN17g7jvMwzr%2B1wAY6pgE0fNLYvjQhLuNjNSZ2%2Bqnil%2BcrUpPD0Y4XgMMB2XjuowNaVa1J8%2BiuMJwckK%2FCWLnqw%2F2GHsuQwoVc9xHGyN75lAkzbmXmgCoZTByim9C64ic7A8umlQa7VPMy0kwKmcstntiR65OBu5%2Fy%2FJC5Kwzuo49mz2rjHl9LRoWN%2BKc5RWZQ6fIqW%2FZcfQutzgEfCOJCrf5w%2Fb97mbHx88Y6PhiIa52p0NyB&X-Amz-Signature=039ff4eb6b742a7e312cdc58b87da9f7e169d3d164edc5fc67e5792310eab136&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UKICJK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMNutirLy%2B7IyPctL2IHnA50u%2BXMRnO%2BNNLbI4fDxfiAiBhKQrw7eLfi%2F7xWKx7QYGXEnHsiRcSAKJyiaJSxz%2FZJyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNhDFSOAWzTOgPg%2F5KtwDM0MBtjO0DPRrry8aB841YbQeM7qWbbYkzlHAC%2FKF3J46I0%2Fcy1Vmdri3ibNYrTN8p%2BR3wAHRrVH%2BHEMnQot%2Bhxh3rfdjpsA9moOe%2BteBB5%2BZ1iBsEs9c40agfRQQvdxIv8vKVBRkH8dWXf6qPtApB8Kc%2FIUJxq9bcifpYgVScU8vERVK%2BvjzuLV2wKm1utVMwmH8ALHPEzq%2FoYj9H61h1916tHThjuPs7jIpPiJW3ISmNZETbUhYoGqJ5e7vyVVjUZFpjvoMIQmN%2FWrCAwDRCpOS0kuSfTp7ji0NXSmZdgLANPpFegoZvT%2FhmBycu7r4%2BisERMRYMTbu9dRBUlGZFrnenl4Q4EOrEtRbSeuQcmmIj3FfZG23CVe4dTi6ftmk0Rl8nYwBpsLQhnKQ00l9hMZs6cOAAoT49CNeamh7yAm%2F3TvJzYyW63OWUpQtpuoTHWvAQQXNd7KfvJkdBHn0uT9hWL6uMmORefSYWYBw%2BsAOXbUcfuGchY5pgkUscnKFQn9BdTkYzzLEY2Fh%2FWBqlwRBgzNm70DU2b37bm89e%2BdiU3eQZjA87aCMO0%2FYBPOeqL1QHRU3Dyt8wTVqvY9igg2MquNvjiwKi5aQNEChCEOcU2R2WfKN17g7jvMwzr%2B1wAY6pgE0fNLYvjQhLuNjNSZ2%2Bqnil%2BcrUpPD0Y4XgMMB2XjuowNaVa1J8%2BiuMJwckK%2FCWLnqw%2F2GHsuQwoVc9xHGyN75lAkzbmXmgCoZTByim9C64ic7A8umlQa7VPMy0kwKmcstntiR65OBu5%2Fy%2FJC5Kwzuo49mz2rjHl9LRoWN%2BKc5RWZQ6fIqW%2FZcfQutzgEfCOJCrf5w%2Fb97mbHx88Y6PhiIa52p0NyB&X-Amz-Signature=b02e93d12a87072d93abc2ff9dbe94b874bd23310a5d324ed310850ef4b4e6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
