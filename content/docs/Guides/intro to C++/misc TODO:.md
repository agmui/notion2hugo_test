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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BBNOXB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDthz3fs14InVPHdn4gk4Mv3fbv%2BtrvDHdxWY%2Bxb5CPLwIhAPXGHSeNVvzSbg39xMj9HK42blUCSJeGFmMxMvww8l7VKv8DCEcQABoMNjM3NDIzMTgzODA1IgxoUVcPLXXe6%2BuwweYq3ANJCJCjw35SYZTj7CRuFvpJgpfna%2Bmg3QOWSY0QxaH%2Fe8haiZquqa21cO2p2Ca6ZZbekjZSzPgUFANOBTSjT5LZNV4gAdfTHtdkJ3Z%2Fp82yMgCvlMycx478pnkPA1MegM%2BCebVUwAxSJHrju%2F2LHXrsCxWAJ2djL6sTqLayjmzIDF0GUhID1IMq0YnX%2BZAM7Z6luk450WXOe7V2m1AweUbUqekKLrjxcccllJltXKv7c5QwakQ%2BBqGfmm%2B3L4JhSYbtvTGIZUmL0LxJjqdk2KzQ%2FLuz8KmbFdy9MTgiCmF9Xpru4mRVkAXLM6yASPo0%2FydYZ%2BhPi6SVqL1QSeBc50jM8lGzOhs0YVb7jMCl1oxuvYnwLMWJ%2FBX5wWtXo4yOvoqqne%2B%2BM9APZjJr47pjjopfKtiaCCrdq92YxtD3JfJH6xraSwsSBaaHJnWIs9LHXET5HZLKfMA824oTmDmY4aPQZR91EubCHa6jrWBCOYFJ%2BJg%2FHv7qpK0l%2Bb7iR0NWsH3bD8PehQhVK0105trhuUk4Ed4%2BG71zdZO41%2FfR0qfzGN%2FSBczc%2FY5CxEuCAcsZ8CUhHSoHinc6dLdhIwKg2ZGVpf0uEyjF3L%2Bd7wiSaNczjKhwnTgvECh4qA0rszC8rtnDBjqkARtIDiqaK6W3Rw5jBesR%2Fyqwnh%2BH0%2FQ1J4LrJ56P2F2D8o9Dr8ji743VivW%2BnZWf62h61XU7FySrIMEnrAOs0mc44e%2FubMJ8L5GhBMf493kIQd7VY7zekZF0RJlK4f%2Bumb%2BM69D2Brvqw5d40oRETNvNjhKiL3Y1iD8O9s33%2FXhEyORiIkuon83IxJ2vNHSNXFJMWgzNC%2BQk5a0QwkYtUimUP6ee&X-Amz-Signature=5fb6c13ccbed9d396b745e50536370472c69e37cd389bcab9abf1d1107e6f307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BBNOXB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDthz3fs14InVPHdn4gk4Mv3fbv%2BtrvDHdxWY%2Bxb5CPLwIhAPXGHSeNVvzSbg39xMj9HK42blUCSJeGFmMxMvww8l7VKv8DCEcQABoMNjM3NDIzMTgzODA1IgxoUVcPLXXe6%2BuwweYq3ANJCJCjw35SYZTj7CRuFvpJgpfna%2Bmg3QOWSY0QxaH%2Fe8haiZquqa21cO2p2Ca6ZZbekjZSzPgUFANOBTSjT5LZNV4gAdfTHtdkJ3Z%2Fp82yMgCvlMycx478pnkPA1MegM%2BCebVUwAxSJHrju%2F2LHXrsCxWAJ2djL6sTqLayjmzIDF0GUhID1IMq0YnX%2BZAM7Z6luk450WXOe7V2m1AweUbUqekKLrjxcccllJltXKv7c5QwakQ%2BBqGfmm%2B3L4JhSYbtvTGIZUmL0LxJjqdk2KzQ%2FLuz8KmbFdy9MTgiCmF9Xpru4mRVkAXLM6yASPo0%2FydYZ%2BhPi6SVqL1QSeBc50jM8lGzOhs0YVb7jMCl1oxuvYnwLMWJ%2FBX5wWtXo4yOvoqqne%2B%2BM9APZjJr47pjjopfKtiaCCrdq92YxtD3JfJH6xraSwsSBaaHJnWIs9LHXET5HZLKfMA824oTmDmY4aPQZR91EubCHa6jrWBCOYFJ%2BJg%2FHv7qpK0l%2Bb7iR0NWsH3bD8PehQhVK0105trhuUk4Ed4%2BG71zdZO41%2FfR0qfzGN%2FSBczc%2FY5CxEuCAcsZ8CUhHSoHinc6dLdhIwKg2ZGVpf0uEyjF3L%2Bd7wiSaNczjKhwnTgvECh4qA0rszC8rtnDBjqkARtIDiqaK6W3Rw5jBesR%2Fyqwnh%2BH0%2FQ1J4LrJ56P2F2D8o9Dr8ji743VivW%2BnZWf62h61XU7FySrIMEnrAOs0mc44e%2FubMJ8L5GhBMf493kIQd7VY7zekZF0RJlK4f%2Bumb%2BM69D2Brvqw5d40oRETNvNjhKiL3Y1iD8O9s33%2FXhEyORiIkuon83IxJ2vNHSNXFJMWgzNC%2BQk5a0QwkYtUimUP6ee&X-Amz-Signature=320235263a68f51e9fc1c6f878273f3e3ac3d8c872d5c3a73c76e885657b29bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
