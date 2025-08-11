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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYDAFEKY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOssf9%2FoAYTA9VU3sX2eCuwZfhPelS04JMUDGGzAXBLAIgOrulnWXuKTBoDk9ep4uY30UhOBZtRuwvMQjHCTagP38qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwUcVG9pw3j9WVDVyrcAwj9tUCzxAyqJ%2Bq2T%2BXlTDehwNkCtpk90Z5uQnOdgUgX0JFN8fbRJHUlhpOBoKBNpqpI2kXYgpiJAulmuDrl0zSod%2FXD9iNJl%2BokcKZf4W7qwOyG6NztBbWTPkYkjCG7e1IErfAGrvipBjffJ1L1LfS6QdEaY8jKNVuiZNc4qDOKlD5%2BHHz%2By1J6Qz1Dq%2FwQx%2F7I5x%2B8t8ZCzl7fE9zbRXvf04FDGuvyVzc%2BO3%2FMsUmJeM9j%2B8AxEML2XB46b7YrGZhAJ5xhLw7M8OG%2BelzcrvqSEUcMKi12F8UFKe9Mxwz9CP2SKGYLlrzt%2BAHxHZIeZcWK7Wg2FeK9gV6S90MV%2FwLqqqY8gsSmP9K8%2F8E4q0GByh3LCyeOaBgDuDfL1tYBCAZr7fgKqNGfok3xXGTXUO3pAkEMAuKr3RPNPzAWR%2BmxgwF%2B9U7zwOML%2B%2FkmLMgwbgqNyIaRsJZHOoHmfaBbLFna5qir72RzEloZp2YZh38otm6ccdhvCZUihI%2BkMPeMvnOi18%2BibZKaScS0EKeZ6fXfKMihN3CrVJikr3X7eoJH2zPqIRHXWP6K4svLFmRa5bsScubO5F0Bn0y535QyRd6OJ6jAoDJ1%2BRu4rkQEu45PSjw27eESqhxp3Mu7MNv35cQGOqUBVgUXHPsJfX3%2BtZcxMzmeKndZvf%2BM56IYdwFKE31J4E2cJJ4yb3b%2F544SHt4G2xwZnckeEsynurCeZ90nT5QCHU%2FItmfNYFxj0X1Z5YNWrOxCLndm39UE1YpFlTKDs79P%2Fg4auQLUKxr3PhGy0q7mKaTTJwBnWllcpWBmY2wT22Bz5QHBr9R2ohDIPDq1E6xkHsXeD3pg1hXhS0QZWgmoxMBwgMRS&X-Amz-Signature=37c5f1cce6b07bb7fdc2be8bd4685da02de6ed20d8ba7894f4cc99370c630af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYDAFEKY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOssf9%2FoAYTA9VU3sX2eCuwZfhPelS04JMUDGGzAXBLAIgOrulnWXuKTBoDk9ep4uY30UhOBZtRuwvMQjHCTagP38qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwUcVG9pw3j9WVDVyrcAwj9tUCzxAyqJ%2Bq2T%2BXlTDehwNkCtpk90Z5uQnOdgUgX0JFN8fbRJHUlhpOBoKBNpqpI2kXYgpiJAulmuDrl0zSod%2FXD9iNJl%2BokcKZf4W7qwOyG6NztBbWTPkYkjCG7e1IErfAGrvipBjffJ1L1LfS6QdEaY8jKNVuiZNc4qDOKlD5%2BHHz%2By1J6Qz1Dq%2FwQx%2F7I5x%2B8t8ZCzl7fE9zbRXvf04FDGuvyVzc%2BO3%2FMsUmJeM9j%2B8AxEML2XB46b7YrGZhAJ5xhLw7M8OG%2BelzcrvqSEUcMKi12F8UFKe9Mxwz9CP2SKGYLlrzt%2BAHxHZIeZcWK7Wg2FeK9gV6S90MV%2FwLqqqY8gsSmP9K8%2F8E4q0GByh3LCyeOaBgDuDfL1tYBCAZr7fgKqNGfok3xXGTXUO3pAkEMAuKr3RPNPzAWR%2BmxgwF%2B9U7zwOML%2B%2FkmLMgwbgqNyIaRsJZHOoHmfaBbLFna5qir72RzEloZp2YZh38otm6ccdhvCZUihI%2BkMPeMvnOi18%2BibZKaScS0EKeZ6fXfKMihN3CrVJikr3X7eoJH2zPqIRHXWP6K4svLFmRa5bsScubO5F0Bn0y535QyRd6OJ6jAoDJ1%2BRu4rkQEu45PSjw27eESqhxp3Mu7MNv35cQGOqUBVgUXHPsJfX3%2BtZcxMzmeKndZvf%2BM56IYdwFKE31J4E2cJJ4yb3b%2F544SHt4G2xwZnckeEsynurCeZ90nT5QCHU%2FItmfNYFxj0X1Z5YNWrOxCLndm39UE1YpFlTKDs79P%2Fg4auQLUKxr3PhGy0q7mKaTTJwBnWllcpWBmY2wT22Bz5QHBr9R2ohDIPDq1E6xkHsXeD3pg1hXhS0QZWgmoxMBwgMRS&X-Amz-Signature=9f29ee33092b2d0500cb73df5f10ed92c157a9349fd10b31f6dbf587aff28ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
