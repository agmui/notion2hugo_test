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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRVWKLS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCKFBX8423buVIT4ItqZAcCqDTVdfQA%2FkxKz6e3qFGWsQIgaS4IzAmn5uomL%2BXNsv3rKpM6gc%2FaRX0it5i5lOjS2LkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDTCsjcxmo%2BhTcEQCrcA1jbHmzcMmf7bwFPe7kecFc6XgelOMu7e%2BcxAVWySWFSks0O4477X4AEDqlSDSYr3mAIdYg%2F2%2Fwh%2FZ04MWXBpVsUIukxcGkeQ56nJB6RNCFZGFlRo9zFBmKv2q4xwafJP2AvdpESViRFOr0oKyyZhfy4FuVb8iYQmvRDMs%2BOQGmahc3Z8gaKzKrGtN%2BIcp%2FEW73KjI81KhmQrw9%2FTYlN88M8B94osi4qgHg2yIflzGSgUuTW3%2B09lCHnFBxZ64EbwPVKXXlvyIInFFp%2FKDFAHA1buFLur%2FGMNjJhJzV%2B7mUfhmohjJ%2FolUqfbou7qtaUJo0Dkw8bPWe6vtY8adF2DwOHRTyaQEM2LIphstjPSlRzEeItZ2%2BdZ%2F4Lz5GpnZ9aSB9QVfKiRsyIunE%2BdJoum2tAMdrUmrBiTXl3L57fDvdxoFnsluXRkEWoOOxD6vH9crs%2BHeED6qNCmMDXfuNIzwZlrUxUA62s1fZcQGgx9jIsZ3bru8j0BJBYL8BguaCvDa%2BDmfWetvgHJ0MRiqy5aZTTfWEmbfPLUvKGK9ifSPCBoEc%2BG0ZCJUr5C%2BLkZrWJYSKHLM2iKA%2BJVqsw73XA7ycfX1%2FxkzEKjLzxFyHFTDmOkeX8l8qoInx046JZMK3%2Fxb4GOqUBnM9q4l9emb59184xZiom6Vma6MI1FdCmwzl%2BMOpwhRyhzt9tAa%2B8YBtQXwG%2FhWKPr6FyRAZxDa1jYdB%2Br%2F1iTWVbijAbVSDZ1xGKkhlYxBoZthrE22JbGaJMYUvqQSZFC0OPSZnIy7G0QdA%2BFwOOUJojQvdyX5F8MIWdU4HXl%2F9iw%2Bp6quwvHJQzucD4ZkBPx1JBA7cmdkY4wNl03R0JCVVwwopF&X-Amz-Signature=888514ad768b604182d9a9ce2d2c3f94ae7f414d5082e5a0006b0fe94686d872&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRVWKLS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCKFBX8423buVIT4ItqZAcCqDTVdfQA%2FkxKz6e3qFGWsQIgaS4IzAmn5uomL%2BXNsv3rKpM6gc%2FaRX0it5i5lOjS2LkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDTCsjcxmo%2BhTcEQCrcA1jbHmzcMmf7bwFPe7kecFc6XgelOMu7e%2BcxAVWySWFSks0O4477X4AEDqlSDSYr3mAIdYg%2F2%2Fwh%2FZ04MWXBpVsUIukxcGkeQ56nJB6RNCFZGFlRo9zFBmKv2q4xwafJP2AvdpESViRFOr0oKyyZhfy4FuVb8iYQmvRDMs%2BOQGmahc3Z8gaKzKrGtN%2BIcp%2FEW73KjI81KhmQrw9%2FTYlN88M8B94osi4qgHg2yIflzGSgUuTW3%2B09lCHnFBxZ64EbwPVKXXlvyIInFFp%2FKDFAHA1buFLur%2FGMNjJhJzV%2B7mUfhmohjJ%2FolUqfbou7qtaUJo0Dkw8bPWe6vtY8adF2DwOHRTyaQEM2LIphstjPSlRzEeItZ2%2BdZ%2F4Lz5GpnZ9aSB9QVfKiRsyIunE%2BdJoum2tAMdrUmrBiTXl3L57fDvdxoFnsluXRkEWoOOxD6vH9crs%2BHeED6qNCmMDXfuNIzwZlrUxUA62s1fZcQGgx9jIsZ3bru8j0BJBYL8BguaCvDa%2BDmfWetvgHJ0MRiqy5aZTTfWEmbfPLUvKGK9ifSPCBoEc%2BG0ZCJUr5C%2BLkZrWJYSKHLM2iKA%2BJVqsw73XA7ycfX1%2FxkzEKjLzxFyHFTDmOkeX8l8qoInx046JZMK3%2Fxb4GOqUBnM9q4l9emb59184xZiom6Vma6MI1FdCmwzl%2BMOpwhRyhzt9tAa%2B8YBtQXwG%2FhWKPr6FyRAZxDa1jYdB%2Br%2F1iTWVbijAbVSDZ1xGKkhlYxBoZthrE22JbGaJMYUvqQSZFC0OPSZnIy7G0QdA%2BFwOOUJojQvdyX5F8MIWdU4HXl%2F9iw%2Bp6quwvHJQzucD4ZkBPx1JBA7cmdkY4wNl03R0JCVVwwopF&X-Amz-Signature=8e60782771d450186c7d4caea9aaa73e7775c0bf572b42d141f999dabfb46d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
