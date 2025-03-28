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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIU2AXD%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2SfNZmNt12aztaFSeejdq1g3Q5UBT%2FjjdNMyAPowAxQIgdDGWxIVNBl5LGkMoh%2FRCJ%2BW%2B3SUKmKRzbjZhmx3QFn4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNp8BUzNnZsgWO%2B7fSrcA1Zfn0G2EyeblNJfE9qVomPiVi8DJAVG90xQRXHT6rTh4%2FiTJbIXqyCJUxuUNjn%2BBfWa8eyMBsUWkrCb3q%2FI1ingr%2FuJ0aOHqHHQN%2FpSrFRINRumhfIN0%2BQndSxSUs96Iv52mmxKzOEVhajywAueLrT33cqBZUuTEfsCKBhbDftaU6v%2Fdza0czY%2FsAq2rnRiPouwqgmU6k6EM%2FFU4htG1vggFCfZ3gp8DxhNHVVRfsLSq6q%2BYeEZPmBfwoK1TirZemdHVcdQ1x5W0gXXlNSh29yCqoU19%2BgBtWw7JKrTHcD613ukj5r3BAxFynwXm8liPuZt0cmdtwlPCv0SxfZSrOe51oYsdfa4M1%2Fi4n9LQYGPR7XqVP4Z%2BKJw6aBJX0VEw5OqW%2FBVuyYKeto%2BQpXO%2FBDYvvYQvKZfqXTQpDU1lEAY3XpdMprCgPuA2nKo9tDeEM939XSvsxkk8KjCsCdgVv9dQIvSBSm0iMh3M0j4y0HeJuIVkN54s%2B420X64wSkXYF4ag%2BJ6PxW79ySaI1a0AaCZHlpJeVpPs5BSx0by6r%2B2E6%2Fg1f0rFyo8KNNsv3eyn02DYa0%2FqxjqDo7HpVSMakJfLcEjkfjAyQ7eyxQK5ZDc%2F%2Fp251xb2pkwrPo%2FMLyqnL8GOqUBZA1UveqwD%2BAIIJK7%2B5tcy%2FKac%2B0lXqkm7sJF3bKbkPxMYk5pM5AKUxvDVpLIndHiUdisoB%2BmWkaSd88wtPyI17bp0ieUBq63v2ma7ZZw7LgoOuso5VtCjNKyMAWISLT2DVw%2BYTNkkNAo5%2B2yx5uR558Eb%2FTjr%2FrwXH1K5KMe5wi66CzbY%2F0HdAZgjEdKy8WXd9HxeU1MFFB7Ui7Cog%2BwFzzSG9Ul&X-Amz-Signature=da5577f8c579d13942ab871e1e10ed8e6d83b5ed6c7ecf64ecaa4ab657b19b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIU2AXD%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2SfNZmNt12aztaFSeejdq1g3Q5UBT%2FjjdNMyAPowAxQIgdDGWxIVNBl5LGkMoh%2FRCJ%2BW%2B3SUKmKRzbjZhmx3QFn4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNp8BUzNnZsgWO%2B7fSrcA1Zfn0G2EyeblNJfE9qVomPiVi8DJAVG90xQRXHT6rTh4%2FiTJbIXqyCJUxuUNjn%2BBfWa8eyMBsUWkrCb3q%2FI1ingr%2FuJ0aOHqHHQN%2FpSrFRINRumhfIN0%2BQndSxSUs96Iv52mmxKzOEVhajywAueLrT33cqBZUuTEfsCKBhbDftaU6v%2Fdza0czY%2FsAq2rnRiPouwqgmU6k6EM%2FFU4htG1vggFCfZ3gp8DxhNHVVRfsLSq6q%2BYeEZPmBfwoK1TirZemdHVcdQ1x5W0gXXlNSh29yCqoU19%2BgBtWw7JKrTHcD613ukj5r3BAxFynwXm8liPuZt0cmdtwlPCv0SxfZSrOe51oYsdfa4M1%2Fi4n9LQYGPR7XqVP4Z%2BKJw6aBJX0VEw5OqW%2FBVuyYKeto%2BQpXO%2FBDYvvYQvKZfqXTQpDU1lEAY3XpdMprCgPuA2nKo9tDeEM939XSvsxkk8KjCsCdgVv9dQIvSBSm0iMh3M0j4y0HeJuIVkN54s%2B420X64wSkXYF4ag%2BJ6PxW79ySaI1a0AaCZHlpJeVpPs5BSx0by6r%2B2E6%2Fg1f0rFyo8KNNsv3eyn02DYa0%2FqxjqDo7HpVSMakJfLcEjkfjAyQ7eyxQK5ZDc%2F%2Fp251xb2pkwrPo%2FMLyqnL8GOqUBZA1UveqwD%2BAIIJK7%2B5tcy%2FKac%2B0lXqkm7sJF3bKbkPxMYk5pM5AKUxvDVpLIndHiUdisoB%2BmWkaSd88wtPyI17bp0ieUBq63v2ma7ZZw7LgoOuso5VtCjNKyMAWISLT2DVw%2BYTNkkNAo5%2B2yx5uR558Eb%2FTjr%2FrwXH1K5KMe5wi66CzbY%2F0HdAZgjEdKy8WXd9HxeU1MFFB7Ui7Cog%2BwFzzSG9Ul&X-Amz-Signature=2e08707a238c4fee5735126f865d499f2fa0c3abf895aa2e26ce97602759cb09&X-Amz-SignedHeaders=host&x-id=GetObject)

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
