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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJEKZOH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCMhve9lLa9%2FqbTNZd8LQCEb7ISyl2KSzEhcAtw6AoUEQIhAN6yXli9E%2B25F1NZ%2FxsAfcLlf4nafVfaNyS3jRij%2FdP4KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfYIoaMd3vVCKCswYq3AMXA0Nq%2FPX6mmQ47bdQSBE3VWpTgxV2V43lAEzAgCxlJceKgeqpzODp1ixWeyqNm09CEAyCoh46UYJklepDggjdMtBscKTgE9ZMN0c6mjPLdiuEI1CAZrow18CkQxd8rp1RXYaJNbvsTBhqGEqriyjnacf8fNOWF1hb%2BwPivdcu%2FX8IZfzhSWYK8B19ZEWeJ5mNBmNmKePoMrVYbJzDPBGq8I%2B9HV92yOt%2Fm31%2FP68bM88%2Bp1rMwh1jPEfsBMa%2BspsWcm00HdqKVq8UxyVg6JJLuw3WXT%2BNbcC9oekjgq51DxM5rc6gzAxTgSZQZ22eFJxSsUxkh13i8KEQKREdjOcgzNOrmqgXIoXYjv3Vp1TPZOemkPRQ1PPVRqspG%2ByiiCNwoTdBaPDjI9f8pCXakU2dKmO9ID97ErPKmV4iczJeNsoAnlYlxksRbQIfABF1apii2qu2Zd%2BDGO%2B%2F9YwAa6c0%2FC0G836Ay%2FzFZpB5XJMyJmu5MJnEqQRuqolkiLtDBCLNPog0c8G267CBz2LlXC%2Fya528e7%2Fu%2BYnbUz1cRL%2FGBs7KvpA7pkzr%2By5iBg8HtMmebGYlfXwNcyOsJDXGAPR3FEotkM3WEotrM9IAzmzPi2mjscjtKWnCMY%2BGnzDE0ePCBjqkAaPWNzQAr7cnQwLNqEm9wdO7ZSLXS%2FCGp61EH8B0GSPpOE3Y4vx33P%2B%2B6nbOr1AauQedOV1pgvevwYKLzfHRTsjiWoUwUkv2b05NoqbJsU%2FKxZiniOBnuZ4bYwEpANjRL2JthOfHH7U%2FUMJxdAo688q3zQhsALnujObqpmD5nPjckATsfCCXbyrzLAX8Io43NoTwzUkXNT0jhBNhbyOGPM78cOYX&X-Amz-Signature=6cfc172be174aadc9192c454f14ef03d931a83852096584c953ddd76c2443a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJEKZOH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCMhve9lLa9%2FqbTNZd8LQCEb7ISyl2KSzEhcAtw6AoUEQIhAN6yXli9E%2B25F1NZ%2FxsAfcLlf4nafVfaNyS3jRij%2FdP4KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfYIoaMd3vVCKCswYq3AMXA0Nq%2FPX6mmQ47bdQSBE3VWpTgxV2V43lAEzAgCxlJceKgeqpzODp1ixWeyqNm09CEAyCoh46UYJklepDggjdMtBscKTgE9ZMN0c6mjPLdiuEI1CAZrow18CkQxd8rp1RXYaJNbvsTBhqGEqriyjnacf8fNOWF1hb%2BwPivdcu%2FX8IZfzhSWYK8B19ZEWeJ5mNBmNmKePoMrVYbJzDPBGq8I%2B9HV92yOt%2Fm31%2FP68bM88%2Bp1rMwh1jPEfsBMa%2BspsWcm00HdqKVq8UxyVg6JJLuw3WXT%2BNbcC9oekjgq51DxM5rc6gzAxTgSZQZ22eFJxSsUxkh13i8KEQKREdjOcgzNOrmqgXIoXYjv3Vp1TPZOemkPRQ1PPVRqspG%2ByiiCNwoTdBaPDjI9f8pCXakU2dKmO9ID97ErPKmV4iczJeNsoAnlYlxksRbQIfABF1apii2qu2Zd%2BDGO%2B%2F9YwAa6c0%2FC0G836Ay%2FzFZpB5XJMyJmu5MJnEqQRuqolkiLtDBCLNPog0c8G267CBz2LlXC%2Fya528e7%2Fu%2BYnbUz1cRL%2FGBs7KvpA7pkzr%2By5iBg8HtMmebGYlfXwNcyOsJDXGAPR3FEotkM3WEotrM9IAzmzPi2mjscjtKWnCMY%2BGnzDE0ePCBjqkAaPWNzQAr7cnQwLNqEm9wdO7ZSLXS%2FCGp61EH8B0GSPpOE3Y4vx33P%2B%2B6nbOr1AauQedOV1pgvevwYKLzfHRTsjiWoUwUkv2b05NoqbJsU%2FKxZiniOBnuZ4bYwEpANjRL2JthOfHH7U%2FUMJxdAo688q3zQhsALnujObqpmD5nPjckATsfCCXbyrzLAX8Io43NoTwzUkXNT0jhBNhbyOGPM78cOYX&X-Amz-Signature=49e2e700e856676dd4dfa2400f2aee84b247d8469fa97069420d579e90b18da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
